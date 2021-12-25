import ConfigGame from "src/common/ConfigGame";
import ErrorCode from "src/common/ErrorCode";
import { AppEventMap, EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import { Table } from "src/common/Table";
import TableAnalyze from "src/common/TableAnalyze";
import Tools from "src/common/Tools";
import AppCore from "src/core/App";
import Core from "src/core/index";
import LandService, { LandObj } from "src/dataService/LandService";
import { PlantDataBase } from "src/dataService/PlantService";
import TaskService from "src/dataService/TaskService";
import UserInfo from "src/dataService/UserInfo";
import WarehouseService from "src/dataService/WarehouseService";
import MainView, { GetFloatRewardObj } from "src/view/MainView";
import { ShopViewData } from "src/view/ShopView";

//  FieldComponent extends Laya.Script {
/**
 * 田地组件
 */
export default class FieldComponent extends Core.gameScript {
    /** 植物icon */
    @Core.findByName
    private icon: Laya.Image = null;
    /** 土地节点 */
    @Core.findByName
    private fieldNode: Laya.Image = null;
    /** 有植物时的阴影 */
    @Core.findByName
    private shadow: Laya.Image = null;
    /** @prop {name:fieldEmptyRes, tips:"解锁后土地纹理", type:String,accept:res}*/
    private fieldEmptyRes: string = "";
    /** 等级图片 */
    @Core.findByName
    private lvNode: Laya.Image = null;
    /** 倒计时容器*/
    @Core.findByName
    private timeBox: Laya.FontClip = null;
    /** 倒计时label */
    private countDownLb: Laya.Label = null;
    /** 顶部icon装饰 */
    @Core.findByName
    private topStateIcon: Laya.Image = null;
    /** 顶部icon装饰 */
    @Core.findByName
    private upAni: Laya.Animation = null;
    /** 减时间提示 */
    @Core.findByName
    private reduceTime: Laya.Image = null;

    /** @prop {name:unlockIcon, tips:"拓展土地icon地址", type:String,accept:res}*/
    private unlockIcon: string = "";
    /** @prop {name:fieldId, tips:"土地id", type:Number,}*/
    fieldId: number = null;

    /** 顶部icon浮动动画 */
    private topStateIconTween: Laya.TimeLine;
    /** 植物动画 */
    private plantIconTween: Laya.TimeLine;

    /** 建筑中 */
    buildIng: boolean = false;
    /** 是否在外面 */
    isOuter: boolean = false;
    /** 是否可偷 */
    canSteal: boolean = false;
    /** 被偷人的uid */
    stealUid: number;
    /** 土地数据 */
    data: LandObj;

    mainViewCom: MainView;

    private canClick: boolean = true;

    private landList: Map<number, LandObj>;
    /** 成熟的时间 */
    private matureTime: number = 0;

    onHdAwake() {
        this.fieldNode = <Laya.Image>this.owner;
        this.countDownLb = this.timeBox.getChildByName("countDownLb") as any;
        this.init();
    }

    init() {
        this.icon.skin = null;
        this.showShadowIcon(false);
        this.timeBox.visible = false;
        this.timeBox.active = false;
        this.topStateIcon.visible = false;
        this.lvNode.visible = false;
        this.upAni.visible = false;
        this.reduceTime.visible = false;
        this.upAni.on(Laya.Event.COMPLETE, this, () => {
            this.upAni.visible = false;
        });
        this.matureTime = Date.now();
    }

    /**
     * 更新土地数据
     */
    @Core.eventOn(EventMaps.update_field)
    updateData(data?: { list: Map<number, LandObj> }) {
        if (data?.list) {
            this.landList = data.list;
        } else {
            this.landList = LandService.list;
        }

        this.data = this.landList.get(this.fieldId);

        this.renderData();
    }

    private renderData() {
        this.topStateIconAni(false);
        if (this.data) {
            this.icon.y = 164;
            this.showShadowIcon(false);

            this.topStateIcon.visible = false;

            this.fieldNode.skin = this.fieldEmptyRes;
            this.showIcon(Boolean(this.data.productId));
            this.lvNode.visible = true;
            this.updateLevel();
            this.timeBox.visible = false;
            if (this.data.productId) {
                this.plantIconAni(true);
            }

            if (this.data.productId && this.data.matureTimeLeft > 0) {
                this.matureTime = this.data.matureTimeLeft * 1000 + Date.now();
                //成长中
                this.timeBox.visible = true;
                this.timeBox.active = true;

                this.icon.skin = TableAnalyze.table("plant").get(this.data.productId).growingIcon;

                this.showShadowIcon(true);
                this.updateCountDown();

                // this.topStateIcon.visible = true;
                // this.topStateIconAni(true);
                if (this.isOuter) {
                    this.topStateIcon.visible = false;
                } else {
                    // this.setStateIconSkin(1);
                    this.plantIconAni(true);
                }
            } else {
                if (this.data.productId) {
                    this.matureTime = Date.now();
                    this.topStateIcon.visible = true;
                    this.showShadowIcon(true);
                    // this.topStateIconAni(true);
                    this.updateCountDown();
                    this.setStateIconSkin(3);
                }
            }
        } else {
            this.lvNode.visible = false;
            this.fieldNode.skin = `main_scene/img_wasteland.png`;
            this.icon.skin = this.unlockIcon;
            this.icon.y = 113;
            this.showIcon(false);
            this.topStateIconAni(false);
            this.topStateIcon.visible = false;
            this.showTimeBox(false);
            this.showShadowIcon(false);

            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
            this.topStateIconTween?.destroy();
            this.topStateIconTween = null;
        }
    }

    /**
     * 设置icon的显示隐藏状态
     * @param show 显示或隐藏
     */
    showIcon(show: boolean) {
        this.icon.visible = show;
    }

    /**
     * 设置状态icon纹理
     * @param skinType 1 浇水加速状态 2 建筑状态 3 成熟状态
     */
    setStateIconSkin(skinType: 1 | 2 | 3) {
        switch (skinType) {
            case 1:
                this.topStateIcon.skin = "main_scene/img_speedUp.png";
                break;
            case 2:
                this.topStateIcon.skin = "main_scene/img_landUpdateBtn2.png";
                break;
            case 3:
                this.topStateIcon.skin = "main_scene/img_harvest.png";
                break;
        }
    }

    /**
     * 顶部icon动画
     */
    topStateIconAni(play: boolean) {
        this.topStateIcon.y = -107;
        if (!this.topStateIconTween) {
            this.topStateIconTween = Laya.TimeLine.to(
                this.topStateIcon,
                { y: this.topStateIcon.y - 50 },
                800,
                null
            ).to(this.topStateIcon, { y: this.topStateIcon.y }, 800);
            this.topStateIconTween.play(null, true);
        }

        if (this.stealUid && !this.data?.canSteal) {
            play = false;
        }
        this.topStateIcon.visible = play;
        if (play) {
            this.topStateIconTween.resume();
        } else {
            this.topStateIconTween.pause();
        }
    }

    /**
     * 设置时间容器的显示隐藏状态
     * @param show 显示或隐藏
     */
    showTimeBox(show: boolean) {
        this.timeBox.visible = show;
    }

    /**
     * 设置阴影显示隐藏状态
     * @param show 显示或隐藏
     */
    showShadowIcon(show: boolean) {
        this.shadow.visible = show;
        this.shadow.active = show;
    }

    /**
     * 植物动画播放
     * @param play
     */
    plantIconAni(play: boolean) {
        if (!this.plantIconTween) {
            this.plantIconTween = Laya.TimeLine.to(this.icon, { skewX: 3 }, 1000)
                .to(this.icon, { skewX: -3 }, 2000)
                .to(this.icon, { skewX: 0 }, 1000);
            this.plantIconTween.play(null, true);
        }

        if (play) {
            // this.icon.skewX = 0;

            Laya.timer.once(Math.random() * 1000, this, () => {
                // this.plantIconTween.play(null, true);
                this.plantIconTween.resume();
            });
        } else {
            this.plantIconTween.pause();
            // this.plantIconTween.reset();
        }
    }

    /**
     * 更新倒计时
     */
    private updateCountDown() {
        if (this.data.matureTimeLeft > 0) {
            this.countDownLb.text = Tools.formatSeconds(this.data.matureTimeLeft);
            Laya.timer.clearAll(this);
            Laya.timer.once(1000, this, () => {
                this.data.matureTimeLeft = Math.ceil((this.matureTime - Date.now()) / 1000);
                if (this.data.matureTimeLeft < 0) this.data.matureTimeLeft = 0;
                this.countDownLb.text = Tools.formatSeconds(this.data.matureTimeLeft);
                return this.updateCountDown();
            });
        } else {
            this.data.matureTimeLeft = 0;
            this.matureTime = Date.now();
            console.log("成熟 ");
            // this.topStateIconAni(false);
            this.icon.skin = TableAnalyze.table("plant").get(this.data?.productId)?.matureIcon;
            if (!this.buildIng) {
                this.setStateIconSkin(3);
                this.mainViewCom.updateAllStateIcon();
            }
            this.showTimeBox(false);
        }
    }

    /**
     * 更新等级
     */
    private updateLevel() {
        this.lvNode.skin = `main_scene/img_level${this.data.level}.png`;
    }

    /**
     * 减时间表现
     */
    private reduceTimeAni: Laya.TimeLine;
    /**
     * 加速
     */
    @Core.eventOn(EventMaps.land_speed_up)
    private speedUp() {
        if (this.data?.matureTimeLeft) {
            this.data.matureTimeLeft -= TableAnalyze.table("config").get("all_speed_up_time")
                .value as number;
            this.matureTime = this.data.matureTimeLeft * 1000 + Date.now();
            this.updateCountDown();
            // console.log(11);

            //减时间提示
            this.reduceTime.visible = true;
            this.reduceTime.alpha = 0;
            this.reduceTime.y = -39;
            if (!this.reduceTimeAni)
                this.reduceTimeAni = Laya.TimeLine.to(
                    this.reduceTime,
                    { y: -69, alpha: 1 },
                    300
                ).to(
                    this.reduceTime,
                    {
                        y: -100,
                        alpha: 0,
                    },
                    300,
                    null,
                    1000
                );

            this.reduceTimeAni.play();
        }
    }

    /**
     * 清空土地
     */
    clearField() {
        this.topStateIcon.visible = false;
        this.data.productId = null;
        this.icon.skin = null;
        this.showIcon(false);
        this.showShadowIcon(false);
    }

    async onClick() {
        Core.audio.playSound(Res.audios.button_click);

        if (!this.canClick) return;

        if (this.isOuter) {
            if (this.data) {
                this.stealFood(this.data);
            }

            return;
        }

        if (this.data) {
            //土地升级事件
            if (this.buildIng) {
                if (TableAnalyze.table("landLevel").get(this.data.level + 1)) {
                    Core.view.open(Res.views.FieldLevelUpView, {
                        parm: {
                            obj: this.data,
                            call: () => {
                                this.data.level++;
                                this.updateLevel();
                                Core.audio.playSound(Res.audios.tudishengji);
                                this.upAni.visible = true;
                                this.upAni.play(0, false);
                            },
                        },
                    });
                } else {
                    console.log("满级");
                    this.topStateIconAni(false);
                    Core.view.openHint({
                        text: `已满级`,
                        call: () => {},
                    });
                }
                return;
            }

            if (this.data.productId) {
                if (this.data.matureTimeLeft) {
                    this.mainViewCom.hideGuideHand();
                    console.log("加速");
                    Core.view.open(Res.views.SpeedUpView, {
                        parm: {
                            call: () => {
                                this.mainViewCom.updateAllStateIcon();
                            },
                        },
                    });
                    this.mainViewCom.updateAllStateIcon(this.data.id);
                    return;
                } else {
                    console.log("收获");
                    this.gather();
                }
            } else {
                //种菜
                this.sow();
            }
        } else {
            //解锁土地
            this.mainViewCom.hideGuideHand();
            Core.view.open(Res.views.AddLandView, {
                parm: {
                    id: this.fieldId,
                    call: () => {
                        this.data = {
                            id: this.fieldId,
                            level: 1,
                            matureTimeLeft: 0,
                            productId: null,
                        };
                        this.matureTime = Date.now();
                        LandService.addLand(this.data);
                        this.updateData();
                        this.mainViewCom.updateHitLandAdd();
                    },
                },
            });
        }
    }

    gather(): Promise<{ plantId: number; amount: number; diamond: number } | null> {
        if (!this.canClick) return;
        this.canClick = false;

        let plantAmount = 0,
            rewardDiamond = 0,
            productId = this.data.productId;

        return new Promise((resolve) => {
            HttpControl.inst
                .send({
                    api: ApiHttp.landGather,
                    data: <NetSendApi["gather"]>{
                        landId: [this.data.id],
                        type: ConfigGame.ApiTypeDefault,
                    },
                })
                .then(
                    (data: {
                        gold: number;
                        diamond: number;
                        advertiseTimes: number;
                        list: { plantId: number; amount: number; rewardDiamond: number }[];
                    }) => {
                        let d = data.list[0];
                        resolve({ plantId: productId, amount: d.amount, diamond: rewardDiamond });
                        plantAmount = d.amount;
                        WarehouseService.add(productId, d.amount);
                        rewardDiamond = d.rewardDiamond;

                        this.canClick = true;
                        this.gatherEvent(productId, plantAmount, rewardDiamond);

                        Laya.timer.frameOnce(1, this, () => {
                            this.mainViewCom.updateAllStateIcon();
                        });
                    }
                )
                .catch(() => {
                    this.canClick = true;
                    resolve(null);
                });
        });
    }

    gatherEvent(productId, plantAmount, rewardDiamond = 0) {
        Core.audio.playSound(Res.audios.shoucai);
        this.clearField();
        //收获的植物
        let plantObj = TableAnalyze.table("plant").get(productId),
            rewardList: any[] = [
                {
                    obj: plantObj,
                    count: plantAmount,
                    posType: 3,
                },
            ];

        //获得的钻石
        if (rewardDiamond) {
            rewardList.push({
                obj: TableAnalyze.table("currency").get(ConfigGame.diamondId),
                count: rewardDiamond,
                posType: 2,
            });
        }

        Core.eventGlobal.event(EventMaps.play_get_reward, <GetFloatRewardObj>{
            node: this.owner,
            list: rewardList,
            callBack: () => {},
        });
    }

    sow() {
        Core.view.open(Res.views.ShopView, {
            parm: <ShopViewData>{
                id: 0,
                parm: { landId: this.fieldId },
                call: (d: PlantDataBase) => {
                    this.sowPlant(d);
                },
            },
        });
    }

    sowPlant(d: PlantDataBase) {
        this.landList.get(this.fieldId).productId = d.base.id;
        this.landList.get(this.fieldId).matureTimeLeft = d.base.mature_time;
        this.matureTime = d.base.mature_time * 1000 + Date.now();

        this.data = this.landList.get(this.fieldId);
        this.renderData();
        Core.audio.playSound(Res.audios.zhongzhi);
        this.mainViewCom.updateAllStateIcon(this.data.id);
        TaskService.taskAddTimes(1011);
        AppCore.runAppFunction({
            uri: AppEventMap.eventCount,
            data: { type: "plant" },
        });
    }

    /**
     * 偷菜
     */
    private async stealFood(data: LandObj) {
        if (!data.productId || data.matureTimeLeft) {
            return;
        }

        if (!this.canSteal || (this.stealUid && !this.data?.canSteal)) {
            console.log("已经不可偷");
            Core.view.openHint({ text: "给我留点吧", call: () => {} });
            return;
        }
        Core.audio.playSound(Res.audios.goujiaosheng);
        this.canClick = false;
        //偷菜
        HttpControl.inst
            .send({
                api: ApiHttp.landSteal,
                data: <NetSendApi["landSteal"]>{
                    landId: [this.data.id],
                    type: ConfigGame.ApiTypeDefault,
                    uid: this.stealUid,
                },
            })
            .then(
                (d: {
                    plantId: number;
                    amount: number;
                    vitality: number;
                    list: { plantId: number; amount: number; rewardDiamond: number }[];
                }) => {
                    this.canClick = true;
                    UserInfo.vitality = d.vitality;
                    this.stealFoodEvent(d.list[0]);
                }
            )
            .catch((code: number) => {
                this.canClick = true;
                if (code === ErrorCode._2001) {
                    this.clearField();
                }
            });
    }

    /**
     * 偷菜事件
     * @param d
     * @param dog
     * @returns
     */
    stealFoodEvent(
        d: {
            plantId: number;
            amount: number;
            /** 额外奖励 */
            rewardDiamond: number;
        },
        dog: boolean = true
    ) {
        AppCore.runAppFunction({
            uri: AppEventMap.eventCount,
            data: { type: "Stealvegetables" },
        });
        TaskService.taskAddTimes(1004);
        this.canSteal = false;
        this.topStateIconAni(false);

        //收获的植物
        const rewardList: any[] = [];
        if (d.plantId) {
            Core.audio.playSound(Res.audios.shoucai);
            WarehouseService.add(this.data.productId, d.amount);
            rewardList.push({
                obj: TableAnalyze.table("plant").get(d.plantId),
                count: d.amount,
                posType: 3,
            });
        } else {
            if (!dog) {
                return;
            }
            Core.view.openHint({ text: "额，被狗咬了~~~没偷着~", call: () => {} });
            return;
        }

        //额外的钻石奖励
        if (d.rewardDiamond) {
            rewardList.push({
                obj: TableAnalyze.table("currency").get(ConfigGame.diamondId),
                count: d.rewardDiamond,
                posType: 2,
            });
        }

        if (rewardList.length) {
            Core.eventGlobal.event(EventMaps.play_get_reward, <GetFloatRewardObj>{
                node: this.owner,
                list: rewardList,
            });
        }
    }

    onHdDestroy() {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        this.topStateIconTween?.destroy();
        this.plantIconTween?.destroy();
        this.topStateIconTween = null;
        this.plantIconTween = null;
    }
}
