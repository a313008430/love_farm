import { EventMaps } from "src/common/EventMaps";
import { ApiHttp } from "src/common/NetMaps";
import { Table } from "src/common/Table";
import TableAnalyze from "src/common/TableAnalyze";
import FieldComponent from "src/components/FieldComponent";
import Core from "src/core/index";
import LandService from "src/dataService/LandService";
import Res from "../common/Res";
import UserInfo from "../dataService/UserInfo";

/**
 * 飞金币数量结构
 */
export interface GetFloatRewardObj {
    /** 起点参考节点 */
    node: Laya.Box;
    /** 数据列表 */
    list: {
        /** 解析的资源数据 必须要有icon */
        obj: any;
        /** 数量 */
        count: number;
        /** 终点位置 1 金币 2 钻石 */
        posType: 1 | 2;
    }[];
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

    /** @prop {name:landUpLayer, tips:"土地升级窗口", type:Node}*/
    private landUpLayer: Laya.Image = null;

    /** @prop {name:topLayerOnStage, tips:"在主场景上面的一个最上层的空层", type:Node}*/
    private topLayerOnStage: Laya.Image = null;
    /** @prop {name:topGoldIcon, tips:"顶部金币icon", type:Node}*/
    private topGoldIcon: Laya.Image = null;
    /** @prop {name:topDiamondIcon, tips:"顶部钻石icon", type:Node}*/
    private topDiamondIcon: Laya.Image = null;

    //获得奖励，飞物品相关
    /** @prop {name:getRewardPrefab, tips:"获得奖励预设", type:Prefab}*/
    private getRewardPrefab: Laya.Prefab = null;
    /** @prop {name:floatRewardIcon, tips:"奖励飞动画icon", type:Prefab}*/
    private floatRewardIcon: Laya.Prefab = null;

    /** 土地组件 列表 */
    private landList: FieldComponent[] = [];

    onHdAwake() {
        Laya.stage.addChild(this.topLayerOnStage);

        this.landUpLayer.visible = false;
        this.landUpLayer.active = false;

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
            })
            .key("gold", (e) => {
                this.goldNode.value = e;
            })
            .key("avatar", (e) => {
                this.avatarNode.skin = e;
            });

        this.addLandLayer.visible = false;
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
            case "land":
                break;
            case "landLevelUp":
                this.switchLandLevelUp(true);
                break;
            case "close_up":
                this.switchLandLevelUp(false);
                break;
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
                    e.showIcon(false);
                }
                e.setStateIconSkin(2);
                e.showTimeBox(false);
                e.showShadowIcon(false);
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
                    if (e.data.landId && e.data.growUpTime) {
                        e.showTimeBox(true);
                        e.showShadowIcon(true);
                    }
                }
                e.buildIng = false;
                if (e.data) {
                    if (e.data.landId) {
                        e.setStateIconSkin(e.data.growUpTime ? 1 : 3);
                    }
                } else {
                    e.setStateIconSkin(1);
                }
            });
        }
    }

    /**
     * 播放获取奖励动画
     */
    @Core.eventOn(EventMaps.play_get_reward)
    private playGetRewardAni(obj: GetFloatRewardObj) {
        obj.list.forEach((d, i) => {
            let node: Laya.Box = Laya.Pool.getItemByCreateFun(
                "floatRewardBox",
                this.getRewardPrefab.create,
                this.getRewardPrefab
            );

            node.y = obj.node.get_height() * obj.node.anchorY - i * 60;
            node.x = obj.node.get_width() * obj.node.anchorX;
            let icon = node.getChildByName("icon") as Laya.Image;
            icon.skin = d.obj?.icon || "";
            let scale = 50 / icon.width;
            icon.scale(scale, scale);
            node.alpha = 0;
            obj.node.addChild(node);
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
}
