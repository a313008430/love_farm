import ConfigGame from "src/common/ConfigGame";
import { EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import { LandObj } from "src/dataService/LandService";

//  FieldLevelUpView extends Laya.Script {
export default class FieldLevelUpView extends GameScript {
    /** @prop {name:priceLabel, tips:"价格", type:Node}*/
    private priceLabel: Laya.Label = null;
    /** @prop {name:priceIcon, tips:"价格icon", type:Node}*/
    private priceIcon: Laya.Image = null;

    private data: { obj: LandObj; call: Function };

    onOpened(e: { obj: LandObj; call: Function }) {
        this.data = e;
        let nextLand = TableAnalyze.table("landLevel").get(e.obj.level + 1);
        this.priceLabel.text = `价格：${nextLand.cost.count}`;
        this.priceIcon.skin = nextLand.cost.obj.icon;
        console.log(e);
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "closeAddLandLayer":
                Core.view.close(Res.views.FieldLevelUpView);
                break;
            case "upgradeBtn":
            case "upgradeAdBtn":
                HttpControl.inst
                    .send({
                        api: ApiHttp.landUpgrade,
                        data: <NetSendApi["gather"]>{
                            landId: this.data.obj.id,
                            type:
                                e.target.name == "upgradeBtn"
                                    ? ConfigGame.ApiTypeDefault
                                    : ConfigGame.ApiTypeAD,
                        },
                    })
                    .then(() => {
                        if (e.target.name == "upgradeAdBtn") {
                            Core.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
                        }

                        if (this.data.call) {
                            this.data.call();
                        }
                        Core.view.close(Res.views.FieldLevelUpView);
                    });

                break;
        }
    }
}
