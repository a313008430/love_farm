import { EventMaps } from "src/common/EventMaps";
import Res from "src/common/Res";
import { Table } from "src/common/Table";
import TableAnalyze from "src/common/TableAnalyze";
import Tools from "src/common/Tools";
import Core from "src/core/index";
import LandService, { LandObj } from "src/dataService/LandService";
import { PlantDataBase } from "src/dataService/PlantService";
import { GetFloatRewardObj } from "src/view/MainView";

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
            this.showIcon(Boolean(this.data.farmseedsId));
            this.lvNode.visible = true;
            if (this.data.farmseedsId && this.data.growUpTime) {
                this.timeBox.visible = true;
                this.timeBox.active = true;

                this.icon.skin = TableAnalyze.table("plant").get(this.data.farmseedsId).icon;

                this.showShadowIcon(true);
                this.updateCountDown();
                this.updateLevel();
                this.topStateIcon.visible = true;
                this.topStateIconAni(true);
            } else {
                if (this.data.farmseedsId) {
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
     * 顶部icon动画
     */
    private topStateIconAni(play: boolean) {
        if (!this.topStateIconTween) {
            this.topStateIconTween = Laya.TimeLine.to(
                this.topStateIcon,
                { y: this.topStateIcon.y - 50 },
                800,
                null
            ).to(this.topStateIcon, { y: this.topStateIcon.y }, 800);
        }

        if (play) {
            this.topStateIconTween.play(null, true);
        } else {
            this.topStateIconTween.pause();
        }
    }

    /**
     * 更新倒计时
     */
    private updateCountDown() {
        if (this.data.growUpTime > 0) {
            this.countDownLb.text = Tools.formatSeconds(this.data.growUpTime);
            Laya.timer.once(1000, this, () => {
                this.data.growUpTime--;
                this.countDownLb.text = Tools.formatSeconds(this.data.growUpTime);
                return this.updateCountDown();
            });
        } else {
            this.data.growUpTime = 0;
            console.log("倒计时结束 ");
            // this.topStateIconAni(false);
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
        this.data.farmseedsId = null;
        this.icon.skin = null;
        this.showIcon(false);
        this.showShadowIcon(false);
    }

    onClick() {
        console.log(this.fieldId, this.buildIng);
        if (this.data) {
            if (this.buildIng) {
                Core.view.open(Res.views.FieldLevelUpView, { parm: this.fieldId });
                return;
            }

            if (this.data.farmseedsId) {
                if (this.data.growUpTime) {
                    console.log("加速");
                    Core.view.open(Res.views.SpeedUpView);
                    return;
                } else {
                    console.log("收获");

                    let plantObj = TableAnalyze.table("plant").get(this.data.farmseedsId),
                        rewardList: any[] = [
                            {
                                obj: plantObj,
                                count: plantObj.harvest,
                                posType: 1,
                            },
                        ];

                    plantObj.gain.forEach((d) => {
                        rewardList.push({
                            obj: TableAnalyze.table("currency").get(d.obj.id),
                            count: d.count,
                            posType: 1001 == d.obj.id ? 2 : 1,
                        });
                    });

                    Core.eventGlobal.event(EventMaps.play_get_reward, <GetFloatRewardObj>{
                        node: this.owner,
                        list: rewardList,
                    });

                    this.clearField();
                    return;
                }
            }

            Core.view.open(Res.views.ShopView, {
                parm: {
                    id: 0,
                    call: (d: PlantDataBase) => {
                        console.log(d);

                        this.landList.get(this.fieldId).farmseedsId = d.base.id;
                        this.landList.get(this.fieldId).growUpTime = 1;

                        this.data = this.landList.get(this.fieldId);
                        this.renderData();
                    },
                },
            });
        } else {
            console.log(this.data);
            Core.view.open(Res.views.AddLandView, {
                parm: {
                    id: this.fieldId,
                    call: () => {
                        // LandService.addLand({
                        //     //土地id对应的也是下标
                        //     id: this.fieldId,
                        //     //土地等级
                        //     level: 1,
                        //     //正在生长的东西的id 种子id, 如果剩余时间为0，表示 已熟，前端自己去查对应可生产的东西，然后改变显示状态
                        //     farmseedsId: null,
                        //     //剩余时间 如果为0 就为成熟 单位秒
                        //     growUpTime: 0,
                        // });
                        this.updateData();
                        console.log(this.landList);
                    },
                },
            });
        }
    }
}
