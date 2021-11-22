import ConfigGame from "src/common/ConfigGame";
import { EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import { Table } from "src/common/Table";
import TableAnalyze from "src/common/TableAnalyze";
import { RewardCurrencyBase } from "src/common/TableObject";
import FieldComponent from "src/components/FieldComponent";
import Core from "src/core/index";
import LandService, { LandObj } from "src/dataService/LandService";
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

    /** @prop {name:landUpLayer, tips:"土地升级窗口", type:Node}*/
    private landUpLayer: Laya.Image = null;

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

    //获得奖励，飞物品相关
    /** @prop {name:getRewardPrefab, tips:"获得奖励预设", type:Prefab}*/
    private getRewardPrefab: Laya.Prefab = null;
    /** @prop {name:floatRewardIcon, tips:"奖励飞动画icon", type:Prefab}*/
    private floatRewardIcon: Laya.Prefab = null;

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

    /** 土地组件 列表 */
    private landList: FieldComponent[] = [];

    /**是否在外面 */
    private isOuter: boolean = false;
    /** 离开家的时间 */
    private outerTime: number;

    onOpened() {
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
            "res/atlas/game.png",
        ].forEach((e) => {
            if (e.endsWith("png")) Laya.loader.clearTextureRes(e);
        });
    }

    onHdAwake() {
        Laya.stage.addChild(this.topLayerOnStage);

        this.landUpLayer.visible = false;
        this.landUpLayer.active = false;
        this.vitalityBox.visible = false;
        this.goHomeBtn.visible = false;

        for (let x = 0; x < this.landBox.numChildren; x++) {
            this.landList.push(this.landBox.getChildAt(x).getComponent(FieldComponent));
        }

        this.landList.sort((a, b) => {
            return a.fieldId - b.fieldId;
        });

        Laya.timer.frameOnce(1, this, () => {
            Core.eventGlobal.event(EventMaps.update_field);
            this.hitLandAdd();
        });
    }

    /**
     * 提示显示扩建icon
     */
    private hitLandAdd() {
        for (let x = 0, l = this.landList.length; x < l; x++) {
            if (!this.landList[x].data) {
                this.landList[x].showIcon(true);
                break;
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
                    (this.petBox.getChildByName("dog") as Laya.Image).skin =
                        TableAnalyze.table("pet").get(e).icon;
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
                if (vitality >= 1) {
                    vitality = 1;
                    this.vitalityBuyBtn.disabled = true;
                } else {
                    this.vitalityBuyBtn.disabled = false;
                }
                (this.vitalityBox.getChildByName("bar") as Laya.Image).width = 268 * vitality;
            });

        this.addLandLayer.visible = false;
        this.updateOrder();
        this.updateTask();
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

    @Core.eventOn(ApiHttp.login)
    private gameInit(d: NetInit) {
        console.log(d);

        // let a = d.data.landList;
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
            case "signIn":
                Core.view.open(Res.views.SignInView);
                break;
            case "mail":
                Core.view.open(Res.views.MailView);
                break;
            case "shop":
                Core.view.open(Res.views.ShopView);
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
            case "dog":
                Core.view.open(Res.views.ShopView, { parm: { id: 2 } });
                break;
            case "order_box":
                Core.view.open(Res.views.OrderView);
                break;
            case "friends":
                Core.view.open(Res.views.FriendsView);
                break;
            case "land":
                break;
            case "landLevelUp":
                if (!this.isOuter) this.switchLandLevelUp(true);

                // this.playGetRewardAni({
                //     node: this.testBtn as any,
                //     list: [
                //         { obj: TableAnalyze.table("currency").get(1001), count: 100, posType: 1 },
                //         { obj: TableAnalyze.table("currency").get(1001), count: 100, posType: 1 },
                //         { obj: TableAnalyze.table("currency").get(1001), count: 100, posType: 1 },
                //     ],
                // });
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
        }
    }

    /**
     * 购买体力
     */
    private buyVitality() {
        Core.view.open(Res.views.BuyVitalityView);
    }

    /**
     * 更新订单
     */
    @Core.eventOn(EventMaps.update_Order)
    private updateOrder() {
        let box = this.orderBox,
            d = TableAnalyze.table("order").get(UserInfo.orderLevel + 1),
            reward: RewardCurrencyBase,
            rewardCount: number = 0,
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
                    }
                });
            } else {
                item.visible = false;
            }
        }

        if (reward) {
            let btnBox = box.getChildByName("btn_box").getChildByName("box");
            (btnBox.getChildByName("icon") as Laya.Image).skin = reward.obj.icon;
            (btnBox.getChildByName("value") as Laya.FontClip).value = `${
                rewardCount + Math.round(rewardCount * d.commission)
            }`;
        }

        (box.getChildByName("name_title") as Laya.Label).text = `完成${
            UserInfo.orderLevel + 1
        }级订单`;

        if (progress == d.condition.length) {
            HttpControl.inst.send({
                api: ApiHttp.orderReward,
                data: {
                    orderId: UserInfo.orderLevel + 1,
                },
                call: () => {
                    d.condition.forEach((e) => {
                        WarehouseService.reduceAmount(e.plant.id, e.count);
                    });

                    this.playGetRewardAni({
                        node: box.getChildByName("btn_box") as any,
                        list: [
                            {
                                obj: TableAnalyze.table("currency").get(ConfigGame.goldId),
                                count: rewardCount + Math.round(rewardCount * d.commission),
                                posType: 1,
                            },
                        ],
                        callBack: () => {
                            this.updateOrder();
                        },
                    });

                    UserInfo.orderLevel++;
                },
            });
        }
    }

    /**
     * 切换土地升级状态
     * @param show 显示或隐藏
     */
    private switchLandLevelUp(show: boolean) {
        let bg = this.landUpLayer.getChildByName("bg") as Laya.Image;
        if (show) {
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
            let scale = 50 / icon.width;
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
            HttpControl.inst.send({
                api: ApiHttp.goHome,
                data: {},
                call: () => {
                    Laya.timer.once(300, this, () => {
                        Core.view.setOverView(false);
                        this.goFriend(null);
                    });
                },
            });
        });
    }

    /**
     * 去邻居家
     */
    private goToNeighbor() {
        Core.view.setOverView(true, () => {
            HttpControl.inst.send({
                api: ApiHttp.neighbor,
                data: <NetSendApi["gather"]>{
                    type: ConfigGame.ApiTypeDefault,
                },
                call: (d: ReturnNeighbor) => {
                    this.goFriend(d);
                    Laya.timer.once(300, this, () => {
                        Core.view.setOverView(false);
                    });
                },
            });
        });
    }

    /**
     * 去朋友家
     */
    private goFriend(d?: ReturnNeighbor) {
        let lands = this.landList,
            userLands = LandService.list;
        let otherLands: Map<number, LandObj> = new Map();

        if (this.isOuter) {
            //回来
            this.isOuter = false;
            userLands.forEach((d) => {
                d.matureTimeLeft -= (Date.now() - this.outerTime) / 1000;
                if (d.matureTimeLeft < 0) d.matureTimeLeft = 0;
            });
            this.vitalityBox.visible = false;
            this.anyDoor.visible = true;
            this.goHomeBtn.visible = false;
        } else {
            d.lands.forEach((e) => {
                otherLands.set(e.id, e);
            });

            //离开
            this.isOuter = true;
            this.outerTime = Date.now();
            this.vitalityBox.visible = true;
            this.goHomeBtn.visible = true;
            this.anyDoor.visible = false;
        }

        for (let x = 0; x < lands.length; x++) {
            const land = lands[x];
            if (this.isOuter) {
                land.isOuter = true;
                land.updateData({ list: otherLands });

                land.stealUid = d.uid;
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
                land.updateData({ list: userLands });
            }
        }

        if (this.isOuter) {
            //隐藏宠物
            this.petBox.visible = false;
            //隐藏任务
            this.taskBox.visible = false;
        } else {
            //显示 宠物
            if (UserInfo.warePetId) this.petBox.visible = true;
            //显示任务
            this.taskBox.visible = true;
        }
    }
}
