import ConfigGame from "src/common/ConfigGame";
import { EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import Core from "src/core/index";
import UserInfo from "src/dataService/UserInfo";

// export default class GatherDescView extends Laya.Script {
export default class GatherDescView extends Core.gameScript {
    /** @prop {name:stealGet, tips:"偷菜或获得", type:Node,}*/
    private stealGet: Laya.Panel;
    /** @prop {name:order, tips:"订单获得", type:Node,}*/
    private order: Laya.Panel;
    /** @prop {name:closeBtn, tips:"关闭按钮", type:Node,}*/
    private closeBtn: Laya.Image;
    /** @prop {name:item, tips:"物品节点", type:Prefab}*/
    private item: Laya.Prefab;

    private data: { type: number; data: any; call: Function; diamond: number };
    private canClick: boolean = true;

    onOpened(d): void {
        this.stealGet.visible = false;
        this.order.visible = false;
        this.data = d;

        this.stealGet.vScrollBarSkin = null;
        this.order.vScrollBarSkin = null;

        switch (d.type) {
            case 1:
                //订单
                this.order.visible = true;
                // this.closeBtn.visible = false;
                (this.order.getChildByName("desc").getChildByName("lb2") as Laya.Label).text = `${
                    UserInfo.orderLevel + 1
                }`;
                let order = TableAnalyze.table("order").get(UserInfo.orderLevel + 1);
                console.log(order);
                console.log(d);
                (
                    this.order
                        .getChildByName("price_box")
                        .getChildAt(0)
                        .getChildByName("icon") as Laya.Image
                ).skin = TableAnalyze.table("currency").get(ConfigGame.goldId).icon;
                (
                    this.order
                        .getChildByName("price_box")
                        .getChildAt(0)
                        .getChildByName("lb") as Laya.Label
                ).text = "x" + d.data.gold;
                (
                    this.order
                        .getChildByName("price_box")
                        .getChildAt(1)
                        .getChildByName("lb") as Laya.Label
                ).text = "x" + d.data.diamond;
                (
                    this.order
                        .getChildByName("price_box")
                        .getChildAt(1)
                        .getChildByName("icon") as Laya.Image
                ).skin = TableAnalyze.table("currency").get(ConfigGame.diamondId).icon;

                break;
            case 2:
                //偷菜
                this.stealGet.visible = true;
                (this.stealGet.getChildByName("title") as Laya.Label).text = "偷菜成功";
                (this.stealGet.getChildByName("top_lb") as Laya.Label).text =
                    "你潜入了xx的菜地，偷走了：";
                this.updateDescList();
                break;
            case 3:
                //收菜
                this.stealGet.visible = true;
                (this.stealGet.getChildByName("title") as Laya.Label).text = "农作物成熟";
                (this.stealGet.getChildByName("top_lb") as Laya.Label).text =
                    "通过您辛勤劳作，收获了：";
                this.updateDescList();
                break;
        }
    }

    /**
     * 渲染偷走或是收获的农作物
     */
    private updateDescList() {
        //28  203
        let list: { plantId: number; amount: number }[] = this.data.data;
        let _x = 0,
            _y = 0;
        for (let x = 0; x < list.length; x++) {
            let itemNode: Laya.Box = this.item.create();
            if (_x > 3) {
                _y += 1;
                _x = 0;
            }

            itemNode.x = 28 + _x * 190;
            itemNode.y = 203 + _y * 95;

            let plant = TableAnalyze.table("plant").get(list[x].plantId);
            const icon = itemNode.getChildByName("icon") as Laya.Image;
            icon.skin = plant.icon;
            icon.scale(0.7, 0.7);
            icon.anchorX = 0.5;
            (itemNode.getChildByName("lb") as Laya.Label).text = `x${list[x].amount}`;

            this.stealGet.addChild(itemNode);

            _x++;
        }

        let lb = this.stealGet.getChildByName("bottom_lb") as Laya.Label;
        lb.y += _y * 95;
        (lb.getChildByName("diamond").getChildByName("icon") as Laya.Image).skin =
            TableAnalyze.table("currency").get(ConfigGame.diamondId).icon;

        (lb.getChildByName("diamond").getChildByName("lb") as Laya.Label).text = `x${
            this.data?.diamond || 0
        }`;
    }

    onClick(e: Laya.Event): void {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.GatherDescView);
                if (this.data.type != 1) {
                    if (this.data.call) {
                        this.data.call(false);
                    }
                }

                break;
            case "receive":
            case "receive_double":
                if (!this.canClick) {
                    return;
                }
                this.canClick = false;
                if (this.data.type == 1) {
                    //领取订单
                    HttpControl.inst
                        .send({
                            api: ApiHttp.orderReward,
                            data: {
                                orderId: UserInfo.orderLevel + 1,
                                type:
                                    e.target.name == "receive"
                                        ? ConfigGame.ApiTypeDefault
                                        : ConfigGame.ApiTypeAD,
                            },
                        })
                        .then(() => {
                            Core.view.close(Res.views.GatherDescView);
                            this.canClick = true;
                            if (this.data.call) {
                                this.data.call(e.target.name != "receive");
                            }
                        })
                        .catch(() => {
                            this.canClick = true;
                        });
                } else {
                    if (e.target.name == "receive_double") {
                        if (this.data.type == 2) {
                            this.data.call(true, e.target);
                        } else {
                            //收菜双倍
                            HttpControl.inst
                                .send({
                                    api: ApiHttp.landGather,
                                    data: <NetSendApi["gather"]>{
                                        landId: [],
                                        type: ConfigGame.ApiTypeAD,
                                    },
                                })
                                .then(
                                    (d: {
                                        adReward: [
                                            {
                                                id: number;
                                                amount: number;
                                            }
                                        ];
                                    }) => {
                                        if (this.data.call) {
                                            this.data.call(true);

                                            d.adReward.forEach((data, i) => {
                                                if (
                                                    this.data.diamond &&
                                                    data.id == ConfigGame.diamondId
                                                ) {
                                                    data.amount += this.data.diamond * 2;
                                                }
                                            });

                                            Core.eventGlobal.event(EventMaps.play_ad_get_reward, [
                                                e.target,
                                                d.adReward,
                                            ]);
                                        }
                                        Core.view.close(Res.views.GatherDescView);
                                    }
                                );
                        }
                    } else {
                        if (this.data.call) {
                            this.data.call(false);
                        }
                        Core.view.close(Res.views.GatherDescView);
                    }
                }

                break;
        }
    }
}
