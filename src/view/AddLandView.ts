import ConfigGame from "src/common/ConfigGame";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import { RewardCurrencyBase } from "src/common/TableObject";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import LandService from "src/dataService/LandService";
import UserInfo from "src/dataService/UserInfo";

//  AddLandView extends Laya.Script {
export default class AddLandView extends GameScript {
    /** @prop {name:costIcon, tips:"价格图标", type:Node}*/
    private costIcon: Laya.Image = null;
    /** @prop {name:costFont, tips:"价格Font", type:Node}*/
    private costFont: Laya.FontClip = null;

    private data: { id: number; call: Function };

    private landData: RewardCurrencyBase;

    onOpened(d) {
        this.data = d;
        this.landData = TableAnalyze.table("config").get("unlock_land_cost").value[
            LandService.list.size - 1
        ] as RewardCurrencyBase;
        this.costIcon.skin = this.landData.obj.icon;
        this.costFont.value = this.landData.count + "";
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "closeAddLandLayer":
                Core.view.close(Res.views.AddLandView);
                break;
            case "cost_gold":
                if (
                    this.landData.obj.id == ConfigGame.goldId &&
                    this.landData.count > UserInfo.gold
                ) {
                    Core.view.openHint({ text: "金币不足", call: () => {} });
                    return;
                }
                if (
                    this.landData.obj.id == ConfigGame.diamondId &&
                    this.landData.count > UserInfo.diamond
                ) {
                    Core.view.openHint({ text: "钻石不足", call: () => {} });
                    return;
                }
                HttpControl.inst.send({
                    api: ApiHttp.landUnlock,
                    data: {
                        landId: this.data.id,
                        type: ConfigGame.ApiTypeDefault,
                    },
                    call: (d) => {
                        if (this.data?.call) {
                            this.data.call();
                            Core.view.close(Res.views.AddLandView);
                        }
                    },
                });
                break;
            case "ad_btn":
                HttpControl.inst.send({
                    api: ApiHttp.landUnlock,
                    data: {
                        landId: this.data.id,
                        type: ConfigGame.ApiTypeAD,
                    },
                    call: (d) => {
                        if (this.data?.call) {
                            this.data.call();
                            Core.view.close(Res.views.AddLandView);
                        }
                    },
                });

                break;
        }
    }
}
