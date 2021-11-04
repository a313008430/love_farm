import ConfigGame from "src/common/ConfigGame";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import { OrderBase, RewardCurrencyBase } from "src/common/TableObject";
import Core from "src/core/index";
import UserInfo from "src/dataService/UserInfo";

//class OrderView extends Laya.Script
export default class OrderView extends Core.gameScript {
    /** @prop {name:orderList, tips:"订单列表", type:Node,}*/
    private orderList: Laya.List = null;

    /** @prop {name:btnLockRes, tips:"订单按钮未完成", type:String,accept:res}*/
    private btnLockRes: string = null;
    /** @prop {name:btnResCur, tips:"订单按钮当前状态按钮", type:String,accept:res}*/
    private btnResCur: string = null;

    /** 数据列表 */
    private dataList: OrderBase[];

    onOpened() {
        this.dataList = TableAnalyze.table("order").list;
        this.orderList.array = this.dataList;
        this.orderList.renderHandler = new Laya.Handler(this, this.renderList);
        this.orderList.vScrollBarSkin = null;
    }

    private renderList(cell: Laya.Image, i: number) {
        let d = this.dataList[i],
            reward: RewardCurrencyBase,
            rewardCount: number = 0,
            rewardBox = cell.getChildByName("reward_box") as Laya.Box;
        (cell.getChildByName("order_lv") as Laya.Label).text = `${d.id}级订单`;

        for (let x = 0; x < 4; x++) {
            let item = cell.getChildByName("item_" + x) as Laya.Box;
            if (d.condition[x]) {
                (item.getChildByName("icon") as Laya.Image).skin = d.condition[x].plant.icon;
                if (d.id < UserInfo.orderLevel) {
                    (
                        item.getChildByName("num") as Laya.Label
                    ).text = `${d.condition[x].count}/${d.condition[x].count}`;
                    (item.getChildByName("bar") as Laya.Image).width = 87;
                } else {
                    (item.getChildByName("num") as Laya.Label).text = `0/${d.condition[x].count}`;
                    (item.getChildByName("bar") as Laya.Image).width =
                        87 * (0 / d.condition[x].count);
                }

                item.visible = true;

                d.condition[x].plant.gain.forEach((e) => {
                    if (e.obj.id === ConfigGame.diamondId) {
                        if (!reward) {
                            reward = e;
                        }
                        rewardCount += e.count * d.condition[x].count;
                    }
                });
            } else {
                item.visible = false;
            }
        }

        let btn = cell.getChildByName("btn") as Laya.Image;
        if (d.id > UserInfo.orderLevel) {
            //未激活
            btn.skin = this.btnLockRes;
            btn.active = false;
        } else {
            if (d.id == UserInfo.orderLevel) {
                //当前
                btn.skin = this.btnResCur;
            } else {
                //已完成
                btn.gray = true;
                btn.active = false;
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
        }
    }
}
