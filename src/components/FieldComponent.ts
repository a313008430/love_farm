import ConfigGame from "src/common/ConfigGame";
import { EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import { Table } from "src/common/Table";
import TableAnalyze from "src/common/TableAnalyze";
import Tools from "src/common/Tools";
import Core from "src/core/index";
import LandService, { LandObj } from "src/dataService/LandService";
import { PlantDataBase } from "src/dataService/PlantService";
import UserInfo from "src/dataService/UserInfo";
import WarehouseService from "src/dataService/WarehouseService";
import { GetFloatRewardObj } from "src/view/MainView";
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
    /** 成熟可收icon */
    private matureNode: Laya.Image = null;
    /** 可播种空地icon */
    private emptyFieldNode: Laya.Image = null;
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
    /** 土地数据 */
    data: LandObj;

    private landList: Map<number, LandObj>;

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
    }

    @Core.eventOn(EventMaps.update_field)
    updateData() {
        this.landList = LandService.list;
        this.data = this.landList.get(this.fieldId);

        this.renderData();
    }

    private renderData() {
        if (this.data) {
            this.showIcon(true);
            this.fieldNode.skin = this.fieldEmptyRes;
            this.showIcon(Boolean(this.data.productId));
            this.lvNode.visible = true;

            if (this.data.productId) {
                this.plantIconAni(true);
            }

            if (this.data.productId && this.data.matureTimeLeft) {
                //成长中
                this.timeBox.visible = true;
                this.timeBox.active = true;

                this.icon.skin = TableAnalyze.table("plant").get(this.data.productId).growingIcon;

                this.showShadowIcon(true);
                this.updateCountDown();
                this.updateLevel();
                this.topStateIcon.visible = true;
                this.topStateIconAni(true);
                this.setStateIconSkin(1);
            } else {
                if (this.data.productId) {
                    this.topStateIcon.visible = true;
                    this.showShadowIcon(true);
                    this.topStateIconAni(true);
                    this.updateCountDown();
                }
            }
        } else {
            this.icon.skin = this.unlockIcon;
            this.showIcon(false);
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
        if (!this.topStateIconTween) {
            this.topStateIconTween = Laya.TimeLine.to(
                this.topStateIcon,
                { y: this.topStateIcon.y - 50 },
                800,
                null
            ).to(this.topStateIcon, { y: this.topStateIcon.y }, 800);
        }

        this.topStateIcon.visible = play;

        if (play) {
            this.topStateIconTween.play(null, true);
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
    private plantIconAni(play: boolean) {
        if (!this.plantIconTween) {
            this.plantIconTween = Laya.TimeLine.to(this.icon, { skewX: 6 }, 900)
                .to(this.icon, { skewX: -6 }, 1800)
                .to(this.icon, { skewX: 0 }, 900);
        }

        if (play) {
            Laya.timer.once(Math.random() * 1000, this, () => {
                this.plantIconTween.play(null, true);
            });
        } else {
            this.plantIconTween.pause();
        }
    }

    /**
     * 更新倒计时
     */
    private updateCountDown() {
        if (this.data.matureTimeLeft > 0) {
            this.countDownLb.text = Tools.formatSeconds(this.data.matureTimeLeft);
            Laya.timer.once(1000, this, () => {
                this.data.matureTimeLeft--;
                this.countDownLb.text = Tools.formatSeconds(this.data.matureTimeLeft);
                return this.updateCountDown();
            });
        } else {
            this.data.matureTimeLeft = 0;
            console.log("倒计时结束 ");
            // this.topStateIconAni(false);
            this.icon.skin = TableAnalyze.table("plant").get(this.data.productId).matureIcon;
            if (!this.buildIng) this.setStateIconSkin(3);
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
     * 清空土地
     */
    private clearField() {
        this.topStateIcon.visible = false;
        this.data.productId = null;
        this.icon.skin = null;
        this.showIcon(false);
        this.showShadowIcon(false);
    }

    async onClick() {
        console.log(this.fieldId, this.buildIng);
        if (this.data) {
            if (this.buildIng) {
                Core.view.open(Res.views.FieldLevelUpView, { parm: this.fieldId });
                return;
            }

            if (this.data.productId) {
                if (this.data.matureTimeLeft) {
                    console.log("加速");
                    Core.view.open(Res.views.SpeedUpView);
                    return;
                } else {
                    console.log("收获");

                    let plantAmount = 0;
                    await HttpControl.inst.send({
                        api: ApiHttp.landGather,
                        data: <NetSendApi["gather"]>{
                            landId: this.data.id,
                            type: ConfigGame.ApiTypeDefault,
                        },
                        call: (d: {
                            gold: number;
                            diamond: number;
                            advertiseTimes: number;
                            amount: number;
                        }) => {
                            plantAmount = d.amount;
                            WarehouseService.add(this.data.productId, d.amount);
                        },
                    });

                    //收获的植物
                    let plantObj = TableAnalyze.table("plant").get(this.data.productId),
                        rewardList: any[] = [
                            {
                                obj: plantObj,
                                count: plantAmount,
                                posType: 3,
                            },
                        ];

                    //获得的金币钻石
                    plantObj.gain.forEach((d) => {
                        rewardList.push({
                            obj: TableAnalyze.table("currency").get(d.obj.id),
                            count: d.count,
                            posType: ConfigGame.diamondId == d.obj.id ? 2 : 1,
                        });
                    });

                    Core.eventGlobal.event(EventMaps.play_get_reward, <GetFloatRewardObj>{
                        node: this.owner,
                        list: rewardList,
                        callBack: () => {
                            plantObj.gain.forEach((d) => {
                                switch (d.obj.id) {
                                    case ConfigGame.diamondId:
                                        UserInfo.diamond += d.count;
                                        break;
                                    case ConfigGame.goldId:
                                        UserInfo.gold += d.count;
                                        break;
                                }
                            });
                        },
                    });

                    this.clearField();
                    return;
                }
            }

            //种菜
            Core.view.open(Res.views.ShopView, {
                parm: <ShopViewData>{
                    id: 0,
                    parm: { landId: this.fieldId },
                    call: (d: PlantDataBase) => {
                        console.log(d);

                        this.landList.get(this.fieldId).productId = d.base.id;
                        this.landList.get(this.fieldId).matureTimeLeft = d.base.mature_time;

                        this.data = this.landList.get(this.fieldId);
                        this.renderData();
                    },
                },
            });
        } else {
            console.log(this.data);
            //解锁土地
            Core.view.open(Res.views.AddLandView, {
                parm: {
                    id: this.fieldId,
                    call: () => {
                        LandService.addLand({
                            id: this.fieldId,
                            level: 1,
                            matureTimeLeft: 0,
                            productId: null,
                        });
                        this.updateData();
                    },
                },
            });
        }
    }
}
