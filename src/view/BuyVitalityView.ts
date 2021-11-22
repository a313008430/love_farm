import ConfigGame from "src/common/ConfigGame";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import { RewardCurrencyBase } from "src/common/TableObject";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import { LandObj } from "src/dataService/LandService";
import UserInfo from "src/dataService/UserInfo";

//  BuyVitalityView extends Laya.Script {
export default class BuyVitalityView extends GameScript {
    /** @prop {name:priceLabel, tips:"价格", type:Node}*/
    private priceLabel: Laya.Label = null;
    /** @prop {name:priceIcon, tips:"价格icon", type:Node}*/
    private priceIcon: Laya.Image = null;

    private data: { call: Function };
    private costGoldCount: number;

    onOpened(e: { call: Function }) {
        this.data = e;
        let costGoldCount = TableAnalyze.table("config").get("vitalityBuyCostGold").value as number;
        this.costGoldCount = costGoldCount;
        this.priceLabel.text = `价格：${costGoldCount}`;
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "closeAddLandLayer":
                Core.view.close(Res.views.BuyVitalityView);
                break;
            case "buyAdBtn":
            case "buyBtn":
                if (UserInfo.vitality >= TableAnalyze.table("config").get("vitalityLimit").value) {
                    Core.view.openHint({ text: "体力已满", call: () => {} });
                    return;
                }
                if (e.target.name == "buyBtn" && UserInfo.gold < this.costGoldCount) {
                    Core.view.openHint({ text: "金币不足", call: () => {} });
                    return;
                }

                HttpControl.inst.send({
                    api: ApiHttp.vitalityBuy,
                    data: {
                        type:
                            e.target.name == "buyBtn"
                                ? ConfigGame.ApiTypeDefault
                                : ConfigGame.ApiTypeAD,
                    },
                    call: (d: { gold: 0; diamond: 0; advertiseTimes: 0; vitality: 0 }) => {
                        UserInfo.vitality = d.vitality;
                        if (this.data?.call) {
                            this.data.call();
                        }
                        Core.view.close(Res.views.BuyVitalityView);
                    },
                });

                break;
        }
    }
}
