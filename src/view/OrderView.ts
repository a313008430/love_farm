import ConfigGame from "src/common/ConfigGame";
import { EventMaps } from "src/common/EventMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import { OrderBase, RewardCurrencyBase } from "src/common/TableObject";
import Tools from "src/common/Tools";
import Core from "src/core/index";
import UserInfo from "src/dataService/UserInfo";
import WarehouseService from "src/dataService/WarehouseService";
import MainView from "./MainView";

//class OrderView extends Laya.Script
export default class OrderView extends Core.gameScript {
    /** @prop {name:orderList, tips:"订单列表", type:Node,}*/
    private orderList: Laya.List = null;

    /** @prop {name:btnLockRes, tips:"订单按钮未完成", type:String,accept:res}*/
    private btnLockRes: string = null;
    /** @prop {name:btnResCur, tips:"订单按钮当前状态按钮", type:String,accept:res}*/
    private btnResCur: string = null;
    /** @prop {name:topDesc, tips:"顶部描述", type:Node}*/
    private topDesc: Laya.Box = null;

    /** 数据列表 */
    private dataList: OrderBase[];

    onOpened() {
        this.dataList = TableAnalyze.table("order").list;
        let orderOldLv = UserInfo.orderLevel || 0;
        this.dataList.sort((a, b) => {
            // return a.id * (b.id <= orderOldLv ? -1 : 1);
            return (
                a.id + (a.id <= orderOldLv ? 2000 : 0) - (b.id + (b.id <= orderOldLv ? 2000 : 0))
            );
        });
        this.orderList.array = this.dataList;
        this.orderList.renderHandler = new Laya.Handler(this, this.renderList);
        this.orderList.vScrollBarSkin = null;
        let reward: number = 0;
        for (let x = 0; x < this.dataList.length; x++) {
            // if (this.dataList[x].id >= UserInfo.orderLevel) {
            let addDiamond = 0;
            this.dataList[x].condition.forEach((d) => {
                d.plant.gain.forEach((p) => {
                    if (p.obj.id === ConfigGame.diamondId) {
                        addDiamond += p.count * d.count;
                    }
                });
            });

            reward +=
                this.dataList[x].extraReward.count +
                addDiamond +
                Math.round(addDiamond * this.dataList[x].commission);
            // }
        }

        let withdrawal = TableAnalyze.table("config").get("withdrawal").value as string[];

        (this.topDesc.getChildAt(0) as Laya.Label).text = "完成所有订单可获得";

        (this.topDesc.getChildAt(1) as Laya.Label).text = `${reward}`;
        // (this.topDesc.getChildAt(1) as Laya.Label).text = `${Tools.formatMoney(
        //     (Number(withdrawal[2]) / Number(withdrawal[1])) * reward
        // )}`;
    }

    private renderList(cell: Laya.Image, i: number) {
        let d = this.dataList[i],
            reward: RewardCurrencyBase,
            rewardCount: number = 0,
            rewardDiamondCount: number = 0,
            curCount = 0,
            maxCount = 0,
            progress = 0,
            rewardBox = cell.getChildByName("reward_box") as Laya.Box,
            order_lv = cell.getChildByName("order_lv") as Laya.Label;
        order_lv.text = `${d.id}级订单`;

        for (let x = 0; x < 4; x++) {
            let item = cell.getChildByName("item_" + x) as Laya.Box;
            if (d.condition[x]) {
                curCount = WarehouseService.getOne(d.condition[x].plant.id)?.count || 0;
                maxCount = d.condition[x].count;

                if (curCount >= maxCount) {
                    progress++;
                }

                (item.getChildByName("icon") as Laya.Image).skin = d.condition[x].plant.icon;
                if (d.id < UserInfo.orderLevel + 1) {
                    (item.getChildByName("num") as Laya.Label).text = `${maxCount}/${maxCount}`;
                    (item.getChildByName("bar") as Laya.Image).width = 87;
                } else {
                    (item.getChildByName("num") as Laya.Label).text = `${curCount}/${maxCount}`;
                    (item.getChildByName("bar") as Laya.Image).width =
                        87 * (curCount / maxCount > 1 ? 1 : curCount / maxCount);
                }

                item.visible = true;

                d.condition[x].plant.gain.forEach((e) => {
                    if (e.obj.id === ConfigGame.goldId) {
                        if (!reward) {
                            reward = e;
                        }
                        rewardCount += e.count * d.condition[x].count;
                    } else {
                        rewardDiamondCount += e.count * d.condition[x].count;
                    }
                });
            } else {
                item.visible = false;
            }
        }

        let diamond = cell.getChildByName("reward_box_diamond") as Laya.Image;
        let btn = cell.getChildByName("btn") as Laya.Image,
            finishIcon = cell.getChildByName("finish") as Laya.Image,
            curIcon = cell.getChildByName("cur_icon") as Laya.Image,
            receiveBtn = cell.getChildByName("receive_btn") as Laya.Image,
            lv_box = cell.getChildByName("lv_box") as Laya.Image;
        finishIcon.visible = false;
        curIcon.visible = false;
        diamond.visible = false;
        btn.visible = true;
        rewardBox.y = 57;
        rewardBox.visible = true;
        lv_box.visible = true;
        order_lv.visible = true;
        receiveBtn.visible = false;
        if (d.id > UserInfo.orderLevel + 1) {
            //未激活
            btn.skin = this.btnLockRes;
            btn.active = false;
            if (d.extraReward) {
                btn.visible = false;
                (diamond.getChildByName("icon") as Laya.Image).skin = d.extraReward.obj.icon;
                (diamond.getChildByName("value") as Laya.Label).text = `+${
                    d.extraReward.count +
                    rewardDiamondCount +
                    Math.round(rewardDiamondCount * d.commission)
                }`;
                diamond.visible = true;
            } else {
                btn.visible = true;
            }
        } else {
            if (d.id == UserInfo.orderLevel + 1) {
                //当前
                if (d.extraReward) {
                    curIcon.visible = true;
                    lv_box.visible = false;
                    btn.visible = false;

                    order_lv.visible = false;
                    (diamond.getChildByName("icon") as Laya.Image).skin = d.extraReward.obj.icon;
                    (diamond.getChildByName("value") as Laya.Label).text = `+${
                        d.extraReward.count +
                        rewardDiamondCount +
                        Math.round(rewardDiamondCount * d.commission)
                    }`;
                    diamond.visible = true;
                } else {
                    btn.skin = this.btnResCur;
                }

                if (progress == d.condition.length) {
                    receiveBtn.visible = true;
                    rewardBox.visible = false;
                    diamond.visible = false;
                }
            } else {
                console.log("已完成");
                //已完成
                // btn.gray = true;
                btn.active = false;
                btn.visible = false;
                finishIcon.visible = true;
                if (d.extraReward) {
                    rewardBox.y = 57;
                } else {
                    rewardBox.y = 100;
                }
            }
        }
        if (reward) {
            (rewardBox.getChildByName("icon") as Laya.Image).skin = reward.obj.icon;
            (rewardBox.getChildByName("value") as Laya.Label).text = `+${
                rewardCount + Math.round(rewardCount * d.commission)
            }`;
        }
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.OrderView);
                break;
            case "receive_btn":
                MainView.inst.hindOrderLevel = 0;
                Core.eventGlobal.event(EventMaps.update_Order);
                Core.view.close(Res.views.OrderView);
                break;
        }
    }
}
