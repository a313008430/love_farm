import ConfigGame from "src/common/ConfigGame";
import { EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import TableAnalyze from "src/common/TableAnalyze";
import { RewardCurrencyBase } from "src/common/TableObject";
import Tools from "src/common/Tools";
import FieldComponent from "src/components/FieldComponent";
import { RedDotType } from "src/components/RedDotComponent";
import Core from "src/core/index";
import LandService, { LandObj } from "src/dataService/LandService";
import { PlantDataBase } from "src/dataService/PlantService";
import TaskService from "src/dataService/TaskService";
import WarehouseService from "src/dataService/WarehouseService";
import Res from "../common/Res";
import UserInfo from "../dataService/UserInfo";

/**
 * 飞金币数量结构
 */
export interface GetFloatRewardObj {
    /** 起点参考节点 默认会把数量的东西加到这里，所以不要添HBox或是VBox */
    node: Laya.Box;
    /** 数据列表 */
    list: {
        /** 解析的资源数据 必须要有icon */
        obj: any;
        /** 数量 */
        count: number;
        /** 终点位置 1 金币 2 钻石 3 仓库 */
        posType: 1 | 2 | 3;
    }[];
    notFly?: boolean;
    /** 动画播放结束回调 */
    callBack?: { (): void };
}

//  MainView extends Laya.Script {
export default class MainView extends Core.gameScript {
    static inst: MainView;

    /** @prop {name:addLandLayer, tips:"拓展土地容器", type:Node}*/
    private addLandLayer: Laya.Box = null;

    /** @prop {name:diamondNode, tips:"钻石节点", type:Node}*/
    private diamondNode: Laya.FontClip = null;
    /** @prop {name:goldNode, tips:"金币节点", type:Node}*/
    private goldNode: Laya.FontClip = null;
    /** @prop {name:avatarNode, tips:"头像节点", type:Node}*/
    private avatarNode: Laya.FontClip = null;
    /** @prop {name:landBox, tips:"土地容器", type:Node}*/
    private landBox: Laya.Box = null;
    /** @prop {name:centerBox, tips:"中间区域", type:Node}*/
    private centerBox: Laya.Box = null;
    /** @prop {name:orderBox, tips:"订单容器", type:Node}*/
    private orderBox: Laya.Box = null;
    /** @prop {name:bottomBox, tips:"底部按钮容器", type:Node}*/
    private bottomBox: Laya.Box = null;
    /** @prop {name:rewardShareGuide, tips:"奖励引导", type:Node}*/
    private rewardShareGuide: Laya.Box = null;

    /** @prop {name:landUpLayer, tips:"土地升级窗口", type:Node}*/
    private landUpLayer: Laya.Image = null;
    /** @prop {name:fastGetBtn, tips:"一键偷收菜", type:Node}*/
    private fastGetBtn: Laya.Image = null;

    /** @prop {name:topLayerOnStage, tips:"在主场景上面的一个最上层的空层", type:Node}*/
    private topLayerOnStage: Laya.Image = null;
    /** @prop {name:topGoldIcon, tips:"顶部金币icon", type:Node}*/
    private topGoldIcon: Laya.Image = null;
    /** @prop {name:topDiamondIcon, tips:"顶部钻石icon", type:Node}*/
    private topDiamondIcon: Laya.Image = null;
    /** @prop {name:warehouseBtn, tips:"仓库按钮", type:Node}*/
    private warehouseBtn: Laya.Image = null;
    /** @prop {name:moneyLb, tips:"红包文档", type:Node}*/
    private moneyLb: Laya.FontClip = null;
    /** @prop {name:figureBox, tips:"人物容器", type:Node}*/
    private figureBox: Laya.Box = null;
    /** @prop {name:figureBox2, tips:"人物容器", type:Node}*/
    private figureBox2: Laya.Box = null;

    //获得奖励，飞物品相关
    /** @prop {name:getRewardPrefab, tips:"获得奖励预设", type:Prefab}*/
    private getRewardPrefab: Laya.Prefab = null;
    /** @prop {name:floatRewardIcon, tips:"奖励飞动画icon", type:Prefab}*/
    private floatRewardIcon: Laya.Prefab = null;
    /** @prop {name:goldAdd, tips:"添加金币", type:Node}*/
    private goldAdd: Laya.FontClip = null;
    /** @prop {name:diamondAdd, tips:"添加钻石", type:Node}*/
    private diamondAdd: Laya.FontClip = null;

    /** @prop {name:goHomeBtn, tips:"返回家按钮", type:Node}*/
    private goHomeBtn: Laya.Image = null;
    /** @prop {name:anyDoor, tips:"去转转", type:Node}*/
    private anyDoor: Laya.Image = null;
    /** @prop {name:vitalityBox, tips:"体力容器", type:Node}*/
    private vitalityBox: Laya.Image = null;
    /** @prop {name:vitalityBuyBtn, tips:"体力购买按钮", type:Node}*/
    private vitalityBuyBtn: Laya.Image = null;

    //宠物
    /** @prop {name:petBox, tips:"宠物容器", type:Node}*/
    private petBox: Laya.Box = null;

    //任务
    /** @prop {name:taskBox, tips:"任务容器", type:Node}*/
    private taskBox: Laya.Image = null;

    //新手引导
    /** @prop {name:step1, tips:"需要引导的按钮", type:Node}*/
    private step1: Laya.Box = null;
    /** @prop {name:step2, tips:"需要引导的按钮", type:Node}*/
    private step2: Laya.Box = null;
    /** @prop {name:step3, tips:"需要引导的按钮", type:Node}*/
    private step3: Laya.Box = null;
    /** @prop {name:step4, tips:"需要引导的按钮", type:Node}*/
    private step4: Laya.Box = null;
    /** @prop {name:step5, tips:"需要引导的按钮", type:Node}*/
    private step5: Laya.Box = null;
    /** @prop {name:step6, tips:"需要引导的按钮", type:Node}*/
    private step6: Laya.Box = null;
    /** @prop {name:step7, tips:"需要引导的按钮", type:Node}*/
    private step7: Laya.Box = null;
    /** @prop {name:step8, tips:"需要引导的按钮", type:Node}*/
    private step8: Laya.Box = null;
    /** @prop {name:step9, tips:"需要引导的按钮", type:Node}*/
    private step9: Laya.Box = null;

    /** 土地组件 列表 */
    private landList: FieldComponent[] = [];

    /**是否在外面 */
    isOuter: boolean = false;
    /** 离开家的时间 */
    private outerTime: number;
    /**去好友 家倒计时 */
    outCountDownNumber = 60;
    private canClick: boolean = true;

    onOpened() {
        MainView.inst = this;
        [
            "res/loadingBg.png",
            "res/img_woodtitle.png",
            "res/img_storeHouseBg.png",
            "res/img_storebg.png",
            "res/img_shelf.png",
            "res/img_popUpBg.png",
            "res/img_landBg.png",
            "res/img_inviteBg1.png",
            "res/img_housetop.png",
            // "res/img_homepageBg3.png",
            // "res/img_homepageBg2.png",
            // "res/img_homepageBg1.png",
            "res/img_farmlandLogo.png",
            "res/atlas/plant_icon.png",
            "res/atlas/pet_feed.png",
            "res/atlas/main_scene.png",
        ].forEach((e) => {
            if (e.endsWith("png")) Laya.loader.clearTextureRes(e);
        });

        Laya.timer.frameOnce(1, this, () => {
            this.updateTask();
        });

        //新手引导
        let ok = false,
            step = 0;
        if (UserInfo.guideData.length) {
            UserInfo.guideData.split("").forEach((d) => {
                if (d == "1") {
                    step++;
                }
            });
            if (step >= 9) {
                ok = true;
            }
        }
        if (!UserInfo.guideData.length || !ok) {
            Core.view.open(Res.views.GuideView, {
                parm: {
                    nodeList: [
                        this.step1,
                        this.step2,
                        this.step3,
                        this.step4,
                        this.step5,
                        this.step6,
                        this.step7,
                        this.step8,
                        this.step9,
                    ],
                    call: () => {
                        this.timeGuide();
                    },
                },
            });
        } else {
            this.timeGuide();
        }

        this.guidHandAnimation();
        this.guideHand.visible = false;
        this.friendShareGuide(true);
    }

    onHdAwake() {
        Laya.stage.addChild(this.topLayerOnStage);
        (this.orderBox.getChildByName("friend_name") as Laya.Label).visible = false;

        this.landUpLayer.visible = false;
        this.landUpLayer.active = false;
        this.vitalityBox.visible = false;
        this.goHomeBtn.visible = false;

        for (let x = 0; x < this.landBox.numChildren; x++) {
            this.landList.push(this.landBox.getChildAt(x).getComponent(FieldComponent));
            this.landList[x].mainViewCom = this;
        }

        this.landList.sort((a, b) => {
            return a.fieldId - b.fieldId;
        });

        Laya.timer.frameOnce(1, this, () => {
            Core.eventGlobal.event(EventMaps.update_field);
            this.updateHitLandAdd();
            this.updateAllStateIcon();
        });
    }

    // #region 待机引导

    private guidHandAni: Laya.TimeLine;
    /** @prop {name:guideHand, tips:"新手引导手指", type:Node}*/
    private guideHand: Laya.Sprite = null;
    /**
     * 待机功能引导
     */
    private timeGuide() {
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.timeGuideTouch);
        this.timeGuideTouch();
    }

    private timeGuideTouch() {
        Laya.timer.clear(this, this.timeGuideAction);
        Laya.timer.once(15000, this, this.timeGuideAction);
    }

    private guidIdList = [1, 2, 3, 5];
    private hasGuide: boolean = false;

    private timeGuideAction() {
        if (this.hasGuide || this.isOuter) {
            return;
        }
        this.timeGuideTouch();
        this.guideHand.visible = true;
        this.updateGuideTask();
    }

    hideGuideHand() {
        this.guideHand.visible = false;
        this.timeGuide();
        this.hasGuide = false;
    }

    private updateGuideTask() {
        let landEmpty = false,
            land: FieldComponent,
            unlockLand: FieldComponent;
        for (let x = 0; x < this.landList.length; x++) {
            if (this.landList[x].data && !this.landList[x].data.productId) {
                landEmpty = true;
                break;
            } else {
                if (this.landList[x].data?.productId && this.landList[x].data?.matureTimeLeft) {
                    land = this.landList[x];
                    break;
                }
            }
        }
        //检测有没有未解锁空地
        for (let x = 0; x < this.landList.length; x++) {
            if (!this.landList[x].data) {
                unlockLand = this.landList[x];
                break;
            }
        }

        if (!unlockLand && this.guidIdList.indexOf(5) > -1) {
            this.guidIdList.splice(this.guidIdList.indexOf(5), 1);
            console.log(this.guidIdList);
        }

        this.hasGuide = true;
        let pos = { x: 0, y: 0 };
        if (landEmpty) {
            pos = this.getNodeTopLayerPos(this.step4);
        } else {
            if (!land) {
                return null;
            }
            let id = this.guidIdList[Math.floor(Math.random() * this.guidIdList.length)];

            switch (id) {
                case 1:
                    pos = this.getNodeTopLayerPos(land.owner);
                    pos.x += 100;
                    pos.y += 100;
                    break;
                case 2:
                    pos = this.getNodeTopLayerPos(this.step9);
                    pos.x += 100;
                    pos.y += 100;
                    break;
                case 3:
                    pos = this.getNodeTopLayerPos(this.step5);
                    pos.x += 100;
                    pos.y += 100;
                    break;
                case 5:
                    pos = this.getNodeTopLayerPos(unlockLand.owner);
                    pos.x += 100;
                    pos.y += 100;
                    break;
            }
        }

        this.guideHand.pos(pos.x, pos.y);
    }

    private getNodeTopLayerPos(node) {
        return this.topLayerOnStage.globalToLocal(
            (node.parent as any).localToGlobal(new Laya.Point(node.x, node.y))
        );
    }

    /**
     * 新手引导手指动画
     */
    private guidHandAnimation() {
        this.guidHandAni = Laya.TimeLine.to(this.guideHand, { rotation: -15 }, 400, null).to(
            this.guideHand,
            { rotation: 0 },
            400
        );
        this.guidHandAni.play(null, true);
    }

    //#endregion

    /**
     * 提示显示扩建icon
     */
    updateHitLandAdd() {
        let guidLand: FieldComponent;
        for (let x = 0, l = this.landList.length; x < l; x++) {
            if (!this.landList[x].data) {
                this.landList[x].showIcon(true);
                break;
            } else {
                if (!guidLand) {
                    guidLand = this.landList[x];
                }
            }
        }
    }

    /**
     * 更新全体加速icon 和 收菜icon 暂时把两个方法写在一起了
     */
    updateAllStateIcon(landId?: number) {
        for (let x = 0, l = this.landList.length; x < l; x++) {
            this.landList[x].topStateIconAni(false);
        }

        for (let x = 0, l = this.landList.length; x < l; x++) {
            const data = this.landList[x].data;
            if (data) {
                if (data.id == landId) {
                    this.landList[x].showIcon(true);
                    this.landList[x].setStateIconSkin(1);
                    this.landList[x].topStateIconAni(true);
                    break;
                } else if (!landId) {
                    if (data.productId && data.matureTimeLeft) {
                        this.landList[x].showIcon(true);
                        this.landList[x].setStateIconSkin(1);
                        this.landList[x].topStateIconAni(true);
                        break;
                    }
                }
            }
        }

        for (let x = 0, l = this.landList.length; x < l; x++) {
            const data = this.landList[x].data;
            if (data) {
                if (data.productId && !data.matureTimeLeft) {
                    this.landList[x].showIcon(true);
                    this.landList[x].setStateIconSkin(3);
                    this.landList[x].topStateIconAni(true);
                    // break;
                }
            }
        }
    }

    onHdEnable(): void {
        Core.observableProperty
            .watch(UserInfo, this)
            .key("diamond", (e) => {
                this.diamondNode.value = e;
                // this.moneyLb.value = (e * UserInfo.proportion).toFixed(2) + "";
                //不四舍五入
                this.moneyLb.value =
                    (e * UserInfo.proportion).toString().match(/^\d+(?:\.\d{0,2})?/) + "";
            })
            .key("gold", (e) => {
                this.goldNode.value = e;
            })
            .key("avatar", (e) => {
                if (e) this.avatarNode.skin = e;
            })
            .key("warePetId", (e) => {
                if (e) {
                    this.petBox.visible = true;
                    (
                        this.petBox.getChildByName("dog_ani") as Laya.Animation
                    ).source = `res/dog_${e}.atlas`;
                    // TableAnalyze.table("pet").get(e).icon;
                } else {
                    this.petBox.visible = false;
                }
            })
            .key("petVitality", (e) => {
                if (!UserInfo.warePetId) return;
                //更新宠物体力
                if (this.petBox.visible) {
                    let bar = this.petBox
                        .getChildByName("box")
                        .getChildByName("vitality_bar") as Laya.Image;

                    let scale = e / TableAnalyze.table("pet").get(UserInfo.warePetId).vitality_max;
                    if (scale > 1) scale = 1;

                    bar.width = 130 * scale;
                    (
                        this.petBox.getChildByName("box").getChildByName("hungry") as Laya.Image
                    ).visible = !e;
                }
            })
            .key("digestCountDown", (e) => {
                Laya.timer.clear(this, this.digestCountDown);
                //宠物需要消耗食物倒计时
                if (this.petBox.visible) {
                    Laya.timer.once(e * 1000, this, this.digestCountDown);
                }
            })
            .key("vitality", (e) => {
                let vitality = e / ConfigGame.userVitalityLimit;

                Laya.timer.frameOnce(1, this, () => {
                    Core.eventGlobal.event(EventMaps.update_red_dot, [
                        RedDotType.anyDoor,
                        Boolean(e),
                    ]);
                });

                if (vitality >= 1) {
                    vitality = 1;
                    this.vitalityBuyBtn.gray = true;
                    Laya.timer.frameOnce(1, this, () => {
                        this.vitalityBuyBtn.mouseEnabled = false;
                    });
                } else {
                    this.vitalityBuyBtn.gray = false;
                    Laya.timer.frameOnce(1, this, () => {
                        this.vitalityBuyBtn.mouseEnabled = true;
                    });
                }
                if (this.vitalityBox.getChildByName("bar"))
                    (this.vitalityBox.getChildByName("bar") as Laya.Image).width = 268 * vitality;
            });

        this.addLandLayer.visible = false;
        this.updateOrder();
    }

    /**
     * 宠物笑消化定时器
     */
    private digestCountDown() {
        if (!UserInfo.warePetId) return;
        const pet = TableAnalyze.table("pet").get(UserInfo.warePetId);
        if (UserInfo.petVitality - pet.vitality_consume <= 0) {
            UserInfo.petVitality = 0;
        } else {
            UserInfo.petVitality -= pet.vitality_consume;
        }
        UserInfo.digestCountDown = ConfigGame.petDigestIntervalTime;
    }

    onClick(e: Laya.Event) {
        console.log(e.target.name);
        switch (e.target.name) {
            case "closeAddLandLayer":
                this.addLandLayer.visible = false;
                break;
            case "task":
                Core.view.open(Res.views.TaskView);
                break;
                // case "signIn":
                //     Core.view.open(Res.views.SignInView);
                break;
            case "mail":
                this.openMail();
                break;
            case "shop":
                Core.view.open(Res.views.ShopView);
                this.hideGuideHand();
                break;
            case "head":
                Core.view.open(Res.views.SettingView);
                break;
            case "warehouse":
                Core.view.open(Res.views.WarehouseView);
                break;
            case "buy_feed":
                Core.view.open(Res.views.ShopView, { parm: { id: 2 } });
                break;
            case "dog_house":
                Core.view.open(Res.views.ShopView, { parm: { id: 1 } });
                break;
            case "dog_ani":
                Core.view.open(Res.views.ShopView, { parm: { id: 2 } });
                break;
            case "diamond_box":
            case "money_red_box":
                Core.view.open(Res.views.ShopView, { parm: { id: 3 } });
                break;
            case "order_box":
                Core.view.open(Res.views.OrderView);
                break;
            case "friends":
                this.openFriend();
                break;
            case "land":
                break;
            case "landLevelUp":
                if (!this.isOuter) this.switchLandLevelUp(true);
                break;
            case "close_up":
                this.switchLandLevelUp(false);
                break;
            case "any_door":
                this.goToNeighbor();
                break;
            case "go_home":
                this.goHome();
                break;
            case "add_vitality":
                this.buyVitality();
                break;
            case "reward_share_guide":
                this.goFriendRewardView();
                break;
            case "fast_get":
                this.fastGet();
                break;
        }
    }

    /**
     * 出去一次偷的所有东西集合
     */
    stealAll: {
        list: { plantId: number; amount: number }[];
        rewardDiamond: number;
    } = { list: [], rewardDiamond: 0 };

    /**
     * 一键收偷采
     */
    private async fastGet() {
        if (!this.canClick) {
            return;
        }
        this.canClick = false;
        if (this.isOuter) {
            //偷菜
            let lands: number[] = [],
                landComList: FieldComponent[] = [];

            for (let x = 0; x < this.landList.length; x++) {
                if (
                    this.landList[x].data?.productId &&
                    !this.landList[x].data?.matureTimeLeft &&
                    this.landList[x].data?.canSteal
                ) {
                    lands.push(this.landList[x].data.id);
                    landComList.push(this.landList[x]);
                }
            }
            if (!lands.length) {
                Core.view.openHint({ text: "没有可以偷的", call: () => {} });
                this.canClick = true;
                return;
            }
            HttpControl.inst
                .send({
                    api: ApiHttp.landSteal,
                    data: <NetSendApi["landSteal"]>{
                        landId: lands,
                        type: ConfigGame.ApiTypeDefault,
                        uid: landComList[0].stealUid,
                    },
                })
                .then(
                    (d: {
                        list: {
                            plantId: number;
                            amount: number;
                            rewardDiamond: number;
                        }[];
                        vitality: number;
                    }) => {
                        this.canClick = true;
                        UserInfo.vitality = d.vitality;
                        d.list.forEach((data, i) => {
                            landComList[i].stealFoodEvent(data, false);
                        });
                    }
                )
                .catch(() => {
                    this.canClick = true;
                });
        } else {
            let diamond = 0,
                list: { plantId: number; amount: number }[] = [],
                lands: number[] = [],
                landComList: FieldComponent[] = [];

            for (let x = 0; x < this.landList.length; x++) {
                if (this.landList[x].data?.productId && !this.landList[x].data?.matureTimeLeft) {
                    lands.push(this.landList[x].data.id);
                    landComList.push(this.landList[x]);
                }
            }

            if (!lands.length) {
                Core.view.openHint({ text: "没有成熟的农作物", call: () => {} });
                this.canClick = true;
                return;
            }

            HttpControl.inst
                .send({
                    api: ApiHttp.landGather,
                    data: <NetSendApi["gather"]>{
                        landId: lands,
                        type: ConfigGame.ApiTypeDefault,
                    },
                })
                .then(
                    (d: {
                        gold: number;
                        diamond: number;
                        advertiseTimes: number;
                        list: {
                            plantId: number;
                            amount: number;
                            rewardDiamond: number;
                        }[];
                    }) => {
                        this.canClick = true;
                        d.list.forEach((data) => {
                            diamond += data.rewardDiamond;
                            WarehouseService.add(data.plantId, data.amount);

                            for (let x = 0; x < list.length; x++) {
                                if (list[x].plantId == data.plantId) {
                                    list[x].amount += data.amount;
                                    return;
                                }
                            }

                            list.push({
                                plantId: data.plantId,
                                amount: data.amount,
                            });
                        });

                        Core.view.open(Res.views.GatherDescView, {
                            parm: {
                                type: 3,
                                data: list,
                                diamond: diamond,
                                call: (double: boolean) => {
                                    let mul = 1;
                                    if (double) {
                                        mul = 2;
                                    }
                                    d.list.forEach((data, i) => {
                                        if (double) WarehouseService.add(data.plantId, data.amount);
                                        landComList[i].gatherEvent(
                                            data.plantId,
                                            data.amount * mul,
                                            data.rewardDiamond * mul
                                        );
                                    });
                                },
                            },
                        });
                    }
                );
        }
    }

    getEmptyLandId() {
        console.log(this.landList);
        for (let x = 0, l = this.landList.length; x < l; x++) {
            if (this.landList[x].data && !this.landList[x].data.productId) {
                return this.landList[x].fieldId;
            }
        }
        return null;
    }

    /**
     * 打开邮件
     */
    private openMail() {
        if (!this.canClick) {
            return;
        }
        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.mailList,
            })
            .then((d: MailReturnData[]) => {
                Core.view.open(Res.views.MailView, { parm: d });
                this.canClick = true;
            })
            .catch(() => {
                this.canClick = true;
            });
    }

    /**
     * 打开好友 列表
     */
    @Core.eventOn(EventMaps.open_friend)
    private openFriend(type = null) {
        if (!this.canClick) {
            return;
        }
        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.friendList,
            })
            .then((d: FriendListData) => {
                this.canClick = true;
                Core.view.open(Res.views.FriendsView, { parm: { friendData: d, type: type } });
            })
            .catch(() => {
                this.canClick = true;
            });
    }

    /**
     * 购买体力
     */
    private buyVitality() {
        Core.view.open(Res.views.BuyVitalityView);
    }

    /** 订单队列 */
    private orderQueueIng: boolean = false;
    /**
     * 更新订单
     */
    @Core.eventOn(EventMaps.update_Order)
    private updateOrder() {
        // return;

        if (this.isOuter) return;

        if (!this.orderQueueIng) {
            let box = this.orderBox.getChildByName("order_box"),
                d = TableAnalyze.table("order").get(UserInfo.orderLevel + 1),
                reward: RewardCurrencyBase,
                rewardCount: number = 0,
                rewardDiamondCount: number = 0,
                curCount = 0,
                maxCount = 0,
                progress = 0;
            if (!d) return console.log("等级已完");
            for (let x = 0; x < 4; x++) {
                let item = box.getChildByName("item_" + x) as Laya.Box;

                if (d.condition[x]) {
                    curCount = WarehouseService.getOne(d.condition[x].plant.id)?.count || 0;
                    maxCount = d.condition[x].count;

                    if (curCount >= maxCount) {
                        progress++;
                    }

                    (item.getChildByName("icon") as Laya.Image).skin = d.condition[x].plant.icon;
                    (item.getChildByName("num") as Laya.Label).text = `${curCount}/${maxCount}`;
                    (item.getChildByName("bar") as Laya.Image).width =
                        87 * (curCount / maxCount > 1 ? 1 : curCount / maxCount);

                    item.visible = true;

                    d.condition[x].plant.gain.forEach((e) => {
                        if (e.obj.id === ConfigGame.goldId) {
                            if (!reward) {
                                reward = e;
                            }
                            rewardCount += e.count * maxCount;
                        } else {
                            rewardDiamondCount += e.count * maxCount;
                        }
                    });
                } else {
                    item.visible = false;
                }
            }

            if (reward) {
                let goldBox = box.getChildByName("gold_box") as Laya.Box,
                    diamondBox = box.getChildByName("diamond_box") as Laya.Box;
                (goldBox.getChildByName("icon") as Laya.Image).skin = reward.obj.icon;
                (goldBox.getChildByName("value") as Laya.FontClip).value = `${
                    rewardCount + Math.round(rewardCount * d.commission)
                }`;

                if (d.extraReward) {
                    (diamondBox.getChildByName("icon") as Laya.Image).skin = d.extraReward.obj.icon;
                    (diamondBox.getChildByName("value") as Laya.FontClip).value = `${
                        d.extraReward.count +
                        rewardDiamondCount +
                        Math.round(rewardDiamondCount * d.commission)
                    }`;

                    diamondBox.visible = true;
                    goldBox.y = 46;
                } else {
                    goldBox.y = 66;
                    diamondBox.visible = false;
                }
            }

            (box.getChildByName("name_title") as Laya.Label).text = `完成${
                UserInfo.orderLevel + 1
            }级订单`;

            if (progress == d.condition.length) {
                const condition = d.condition;
                this.orderQueueIng = true;
                let adDiamond =
                        d.extraReward.count +
                        rewardDiamondCount +
                        Math.round(rewardDiamondCount * d.commission),
                    adGold = rewardCount + Math.round(rewardCount * d.commission);
                Core.view.open(Res.views.GatherDescView, {
                    parm: {
                        type: 1,
                        data: {
                            diamond: adDiamond,
                            gold: adGold,
                        },
                        call: (double: boolean) => {
                            condition.forEach((e) => {
                                WarehouseService.reduceAmount(e.plant.id, e.count);
                            });
                            this.orderQueueIng = false;
                            UserInfo.orderLevel++;
                            let reward = [];
                            reward.push({
                                obj: TableAnalyze.table("currency").get(ConfigGame.goldId),
                                count: adGold * (double ? 2 : 1),
                                posType: 1,
                            });
                            if (d.extraReward) {
                                reward.push({
                                    obj: TableAnalyze.table("currency").get(d.extraReward.obj.id),
                                    count: adDiamond * (double ? 2 : 1),
                                    posType: 2,
                                });
                            }
                            this.playGetRewardAni({
                                node: box.getChildByName("gold_box") as any,
                                list: reward,
                                callBack: () => {
                                    this.updateOrder();
                                },
                            });
                        },
                    },
                });
            }
        }
    }

    /**
     * 切换土地升级状态
     * @param show 显示或隐藏
     */
    private switchLandLevelUp(show: boolean) {
        let bg = this.landUpLayer.getChildByName("bg") as Laya.Image;
        if (show) {
            this.hideGuideHand();
            bg.alpha = 0;
            Laya.Tween.to(bg, { alpha: 0.75 }, 150);
            this.landUpLayer.getChildByName("land_outer").addChild(this.landBox);
            this.landUpLayer.active = true;
            this.landUpLayer.visible = true;
            this.landList.forEach((e) => {
                if (e.data) {
                    if (TableAnalyze.table("landLevel").get(e.data.level + 1)) {
                        e.showIcon(false);
                        e.setStateIconSkin(2);
                        e.topStateIconAni(true);
                        e.showTimeBox(false);
                        e.showShadowIcon(false);
                    }
                }

                e.buildIng = true;
            });
        } else {
            Laya.Tween.to(
                bg,
                { alpha: 0 },
                150,
                null,
                Laya.Handler.create(this, () => {
                    this.landUpLayer.active = false;
                    this.landUpLayer.visible = false;
                    this.centerBox.addChild(this.landBox);
                })
            );

            this.landList.forEach((e) => {
                if (e.data) {
                    e.showIcon(true);
                    if (e.data.id) {
                        if (e.data.matureTimeLeft) {
                            e.showTimeBox(true);
                            e.showShadowIcon(true);
                        }
                        if (!e.data.productId) {
                            e.clearField();
                        }
                    } else {
                        e.clearField();
                    }
                }
                e.buildIng = false;
                if (e.data) {
                    if (e.data.id) {
                        e.setStateIconSkin(e.data.matureTimeLeft ? 1 : 3);
                    }
                    e.topStateIconAni(Boolean(e.data.productId));
                } else {
                    e.setStateIconSkin(1);
                    e.topStateIconAni(false);
                }
            });
        }
    }

    /**
     * 播放获取奖励动画
     */
    @Core.eventOn(EventMaps.play_get_reward)
    private playGetRewardAni(obj: GetFloatRewardObj) {
        Laya.timer.once(2000, this, () => {
            if (obj.callBack) obj.callBack();
        });

        obj.list.forEach((d, i) => {
            let node: Laya.Box = Laya.Pool.getItemByCreateFun(
                "floatRewardBox",
                this.getRewardPrefab.create,
                this.getRewardPrefab
            );

            // node.y = obj.node.get_height() * obj.node.anchorY - i * 60;
            // node.x = obj.node.get_width() * obj.node.anchorX;
            let icon = node.getChildByName("icon") as Laya.Image;
            icon.skin = d.obj?.icon || "";
            let scale = 80 / icon.width;
            icon.scale(scale, scale);
            node.alpha = 0;
            // console.log(obj.node.localToGlobal(new Laya.Point()));
            // obj.node.addChild(node);
            let nodeNewPos = this.topLayerOnStage.globalToLocal(
                obj.node.localToGlobal(new Laya.Point())
            );

            node.pos(nodeNewPos.x + obj.node.get_width() * obj.node.anchorX, nodeNewPos.y - i * 60);
            this.topLayerOnStage.addChild(node);
            (node.getChildByName("count") as Laya.FontClip).value = "x" + d.count;

            if (!obj?.notFly) {
                switch (d.posType) {
                    case 1:
                        this.addGoldDiamondAni(this.goldAdd, d.count);
                        break;
                    case 2:
                        this.addGoldDiamondAni(this.diamondAdd, d.count);
                        break;
                }
            }

            Laya.Tween.to(
                node,
                { y: node.y - 40, alpha: 1 },
                150,
                null,
                Laya.Handler.create(
                    this,
                    (e: Laya.Box) => {
                        Laya.timer.once(1000, this, () => {
                            Laya.Pool.recover("floatRewardBox", e);

                            let localPosIcon = this.topLayerOnStage.globalToLocal(
                                e.localToGlobal(Laya.Point.create())
                            );
                            e.removeSelf();

                            if (obj.notFly) {
                                return;
                            }

                            for (let x = 0; x < 5; x++) {
                                let floatIcon: Laya.Image = Laya.Pool.getItemByCreateFun(
                                    "floatRewardIcon",
                                    this.floatRewardIcon.create,
                                    this.floatRewardIcon
                                );
                                floatIcon.skin = d.obj.icon;

                                floatIcon.pos(
                                    localPosIcon.x +
                                        Math.random() * 20 * (Math.random() < 0.5 ? 1 : -1),
                                    localPosIcon.y +
                                        Math.random() * 20 * (Math.random() < 0.5 ? 1 : -1)
                                );
                                floatIcon.scale(scale, scale);
                                this.topLayerOnStage.addChild(floatIcon);
                                floatIcon.zOrder = 999;

                                let topIcon: Laya.Image;
                                switch (d.posType) {
                                    case 1:
                                        topIcon = this.topGoldIcon;
                                        break;
                                    case 2:
                                        topIcon = this.topDiamondIcon;
                                        break;
                                    case 3:
                                        topIcon = this.warehouseBtn;
                                        break;
                                }

                                let topGoldIconPos = topIcon.localToGlobal(
                                    new Laya.Point(topIcon.width / 2, topIcon.height / 2)
                                );
                                let localPos = this.topLayerOnStage.globalToLocal(topGoldIconPos);

                                Laya.Tween.to(
                                    floatIcon,
                                    { x: localPos.x, y: localPos.y },
                                    1000,
                                    Laya.Ease.backIn,
                                    Laya.Handler.create(
                                        this,
                                        (e: Laya.Image) => {
                                            e.removeSelf();
                                            Laya.Pool.recover("floatRewardIcon", e);
                                        },
                                        [floatIcon]
                                    ),
                                    150 * x
                                );
                            }
                        });
                    },
                    [node]
                ),
                50 * i,
                null,
                true
            );
        });
    }

    private addGoldDiamondAni(node, count: number) {
        node.visible = true;
        node.alpha = 0;
        node.value = `+${count}`;
        node.y = 30;
        node.offAll();
        Laya.Tween.to(
            node,
            { alpha: 1, y: -30 },
            500,
            null,
            new Laya.Handler(this, () => {
                Laya.timer.once(2000, this, () => {
                    node.alpha = 0;
                });
            })
        );
    }

    /**
     * 播放看广告以后的奖励
     */
    @Core.eventOn(EventMaps.play_ad_get_reward)
    private playAdReward(target, adReward: ReturnUserInfo["adReward"]) {
        let rewardList = [];
        adReward?.forEach((d) => {
            console.log(d.id == ConfigGame.goldId ? 2 : 1);
            rewardList.push({
                obj: TableAnalyze.table("currency").get(d.id),
                count: d.amount,
                posType: d.id == ConfigGame.goldId ? 1 : 2,
            });
        });

        Core.eventGlobal.event(EventMaps.play_get_reward, <GetFloatRewardObj>{
            node: target,
            list: rewardList,
        });
    }

    /**
     * 更新任务
     * @returns
     */
    @Core.eventOn(EventMaps.update_task)
    private updateTask() {
        const box: Laya.Image = this.taskBox,
            icon = box.getChildByName("icon") as Laya.Image,
            amountFont = icon.getChildByName("amountFont") as Laya.FontClip,
            desc = box.getChildByName("lb") as Laya.Label,
            list = TaskService.getList(),
            task = list[0];
        if (task.receive == 1 || this.isOuter) {
            box.visible = false;
            return;
        }
        box.visible = true;
        desc.text = `任务:${task.base.desc}(${
            task.times > task.base.times ? task.base.times : task.times
        }/${task.base.times})`;
        amountFont.value = "x" + task.base.reward.count;
        icon.skin = task.base.reward.obj.icon;
        box.width = desc.width + 100;
    }

    /**
     * 回家
     */
    private goHome() {
        Core.view.setOverView(true, () => {
            HttpControl.inst
                .send({
                    api: ApiHttp.goHome,
                    data: { clear: true },
                })
                .then(() => {
                    //回来
                    this.goHomeNodeData();
                });
        });
    }

    @Core.eventOn(EventMaps.go_home)
    private goHomeNodeData(updateOutTime = false) {
        if (updateOutTime) {
            //这里主要是为了处理好友访问失败，更新离开时间
            this.outerTime = Date.now();
        }
        this.isOuter = false;
        Laya.timer.once(300, this, () => {
            Core.view.setOverView(false);
            this.goFriend(null);
            this.updateHitLandAdd();

            if (this.stealAll.list.length) {
                Core.view.open(Res.views.GatherDescView, {
                    parm: {
                        type: 2,
                        data: this.stealAll.list,
                        diamond: this.stealAll.rewardDiamond,
                        call: async (double: boolean, target) => {
                            if (double) {
                                let data: {
                                    list: {
                                        plantId: number;
                                        amount: number;
                                        rewardDiamond: number;
                                    }[];
                                    adReward: { id: number; amount: number }[];
                                    advertiseTimes: number;
                                    diamond: number;
                                    gold: number;
                                } = await HttpControl.inst.send({
                                    api: ApiHttp.landSteal,
                                    data: <NetSendApi["landSteal"]>{
                                        landId: [],
                                        type: ConfigGame.ApiTypeAD,
                                        uid: 0,
                                    },
                                });

                                let addDiamond = 0;
                                //收获的植物
                                const rewardList: any[] = [];

                                data.list.forEach((d) => {
                                    WarehouseService.add(d.plantId, d.amount);
                                    UserInfo.diamond += d.rewardDiamond;
                                    addDiamond += d.rewardDiamond;
                                    rewardList.push({
                                        obj: TableAnalyze.table("plant").get(d.plantId),
                                        count: d.amount,
                                        posType: 3,
                                    });
                                });

                                if (rewardList.length) {
                                    Core.eventGlobal.event(EventMaps.play_get_reward, <
                                        GetFloatRewardObj
                                    >{
                                        node: target,
                                        list: rewardList,
                                    });
                                }

                                data.adReward.forEach((data, i) => {
                                    if (addDiamond && data.id == ConfigGame.diamondId) {
                                        data.amount += addDiamond;
                                    }
                                });

                                Core.eventGlobal.event(EventMaps.play_ad_get_reward, [
                                    target,
                                    data.adReward,
                                ]);

                                Core.view.close(Res.views.GatherDescView);
                            }
                        },
                    },
                });
            }
        });
    }

    /**
     * 去邻居家
     */
    private goToNeighbor() {
        this.hideGuideHand();
        Core.view.setOverView(true, () => {
            this.stealAll = { list: [], rewardDiamond: 0 };

            HttpControl.inst
                .send({
                    api: ApiHttp.neighbor,
                    data: <NetSendApi["gather"]>{
                        type: ConfigGame.ApiTypeDefault,
                    },
                })
                .then((d: ReturnNeighbor) => {
                    //离开
                    this.isOuter = true;
                    this.goFriend(d);

                    Laya.timer.once(300, this, () => {
                        Core.view.setOverView(false);
                    });
                });
        });
    }

    @Core.eventOn(EventMaps.go_friend_home)
    private goFriendListen(d: ReturnNeighbor, friendData: FriendData) {
        this.outCountDownNumber = 60;
        if (!this.isOuter) {
            this.stealAll = { list: [], rewardDiamond: 0 };
        }
        this.isOuter = true;
        this.goFriend(d, friendData);
    }

    /**
     * 去朋友家
     */
    private goFriend(d?: ReturnNeighbor, friendData?: FriendData) {
        let lands = this.landList,
            userLands = LandService.list;
        let otherLands: Map<number, LandObj> = new Map();
        if (this.isOuter) {
            d.lands.forEach((e) => {
                otherLands.set(e.id, e);
            });

            this.outerTime = Date.now();
            this.vitalityBox.visible = true;
            this.goHomeBtn.visible = true;
            this.anyDoor.visible = false;
        } else {
            userLands.forEach((d) => {
                d.matureTimeLeft -= (Date.now() - this.outerTime) / 1000;
                if (d.matureTimeLeft < 0) d.matureTimeLeft = 0;
            });
            this.vitalityBox.visible = false;
            this.anyDoor.visible = true;
            this.goHomeBtn.visible = false;
        }

        for (let x = 0; x < lands.length; x++) {
            const land = lands[x];

            if (this.isOuter) {
                land.isOuter = true;
                land.stealUid = d.uid;
                land.updateData({ list: otherLands });

                if (d.protectedTime) {
                    land.canSteal = false;
                    land.topStateIconAni(false);
                } else {
                    land.canSteal = true;
                }
            } else {
                land.canSteal = false;
                land.isOuter = false;
                land.stealUid = null;
                land.updateData({ list: null });
            }

            land.plantIconAni(Boolean(land.data?.productId));
        }

        this.updateAllStateIcon();

        if (this.isOuter) {
            //隐藏任务
            this.taskBox.visible = false;
        } else {
            //显示任务
            this.taskBox.visible = true;
        }

        this.updateFriendView(d?.nickname, friendData, d?.dogId);
    }

    /**
     * 更新去好友家还是自己家的界面状态
     */
    private updateFriendView(nickname: string = "", friendData: FriendData, pedId?: number) {
        const topBox = this.orderBox.parent as Laya.Box,
            moneyBox = topBox.getChildByName("money_box") as Laya.Box,
            countDown = topBox.getChildByName("count_down") as Laya.Label,
            orderBox = this.orderBox.getChildByName("order_box") as Laya.Box,
            friendName = this.orderBox.getChildByName("friend_name") as Laya.Label,
            bottomList: Laya.Image[] = [
                this.bottomBox.getChildByName("task") as Laya.Image,
                this.bottomBox.getChildByName("order_box") as Laya.Image,
                // this.bottomBox.getChildByName("friends") as Laya.Image,
                this.bottomBox.getChildByName("mail") as Laya.Image,
            ];
        if (this.isOuter) {
            friendName.text = `${nickname}的农场`;
            orderBox.visible = false;
            friendName.visible = true;
            moneyBox.visible = false;
            countDown.visible = true;

            countDown.text = Tools.formatSeconds(this.outCountDownNumber);
            Laya.timer.loop(1000, this, this.outCountDownEvent, [countDown]);
            if (friendData?.avatar) this.avatarNode.skin = friendData?.avatar;
            if (pedId) {
                this.petBox.visible = true;
                (
                    this.petBox.getChildByName("dog_ani") as Laya.Animation
                ).source = `res/dog_${pedId}.atlas`;
            } else {
                this.petBox.visible = false;
            }
            (this.petBox.getChildByName("box") as Laya.Image).visible = false;
            this.figureBox.visible = false;
            this.figureBox2.visible = false;
            this.fastGetBtn.skin = "main_scene/img_ongkeySteel.png";
        } else {
            this.fastGetBtn.skin = "main_scene/img_ongkeyGet.png";
            this.figureBox.visible = true;
            this.figureBox2.visible = true;
            this.outCountDownNumber = 60;
            Laya.timer.clear(this, this.outCountDownEvent);
            orderBox.visible = true;
            friendName.visible = false;
            moneyBox.visible = true;
            countDown.visible = false;
            if (UserInfo.avatar) {
                this.avatarNode.skin = UserInfo.avatar;
            } else {
                this.avatarNode.skin = `main_scene/img_defaultPortrait.png`;
            }
            if (UserInfo.warePetId) {
                this.petBox.visible = true;
                (
                    this.petBox.getChildByName("dog_ani") as Laya.Animation
                ).source = `res/dog_${UserInfo.warePetId}.atlas`;
            } else {
                this.petBox.visible = false;
            }
            (this.petBox.getChildByName("box") as Laya.Image).visible = true;
        }
        bottomList.forEach((e) => {
            e.disabled = this.isOuter;
        });
        //倒计时
    }

    /**
     * 倒计时结束
     * @param lb
     */
    private outCountDownEvent(lb: Laya.Label) {
        this.outCountDownNumber--;
        lb.text = Tools.formatSeconds(this.outCountDownNumber);
        if (this.outCountDownNumber <= 0) {
            Laya.timer.clear(this, this.outCountDownEvent);
            this.goHome();
        }
    }

    onHdDestroy(): void {
        this.guidHandAni?.destroy();
        this.rewardShareIconAni(false);
    }

    // #region 好友奖励提示功能
    /**
     * 好友邀请数据
     */
    private friendInviteData: InviteData[] = [];
    /**
     * 奖励引导动画
     */
    private rewardShareGuideAnimation: Laya.TimeLine;

    /**
     * 去好友奖励界面
     */
    private goFriendRewardView() {
        Core.view.open(Res.views.FriendsRewardView, {
            parm: {
                list: this.friendInviteData,
                call: () => {},
            },
        });
    }
    /**
     * 好友分享引导
     */
    @Core.eventOn(EventMaps.update_friend_share_guide)
    private async friendShareGuide(init: boolean, data?: InviteData[]) {
        if (init) {
            let d = (await HttpControl.inst.send({
                api: ApiHttp.friendInviteList,
                data: {},
            })) as InviteList;
            data = d.list;
        }
        this.friendInviteData = data;
        if (data.length < 3) {
            this.rewardShareIconAni(true);
            return;
        }
        let hasReward = false;
        for (let x = 0; x < 3; x++) {
            if (!data[x].receivedReward) {
                hasReward = true;
                break;
            }
        }
        this.rewardShareIconAni(hasReward);
    }

    /**
     * 奖励引导动画显示隐藏
     * @param show
     */
    private rewardShareIconAni(show: boolean) {
        if (show) {
            this.rewardShareGuide.visible = true;
            if (!this.rewardShareGuideAnimation) {
                this.rewardShareGuideAnimation = Laya.TimeLine.to(
                    this.rewardShareGuide,
                    { rotation: 15 },
                    150,
                    null,
                    5000
                )
                    .to(this.rewardShareGuide, { rotation: -15 }, 300, null)
                    .to(this.rewardShareGuide, { rotation: 15 }, 300, null)
                    .to(this.rewardShareGuide, { rotation: 0 }, 150, null);
            }
            this.rewardShareGuideAnimation.play(null, true);
        } else {
            this.rewardShareGuideAnimation?.destroy();
            this.rewardShareGuideAnimation = null;
            this.rewardShareGuide.visible = false;
        }
    }

    //endregion
}
