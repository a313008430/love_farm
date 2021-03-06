import ConfigGame from "src/common/ConfigGame";
import { AppEventMap, EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import AppCore from "src/core/App";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import { LandObj } from "src/dataService/LandService";
import UserInfo from "src/dataService/UserInfo";

//  FieldLevelUpView extends Laya.Script {
export default class FieldLevelUpView extends GameScript {
    /** @prop {name:priceLabel, tips:"价格", type:Node}*/
    private priceLabel: Laya.Label = null;
    /** @prop {name:priceIcon, tips:"价格icon", type:Node}*/
    private priceIcon: Laya.Image = null;
    /** @prop {name:lv, tips:"等级", type:Node}*/
    private lv: Laya.Label = null;
    /** @prop {name:reward, tips:"奖励", type:Node}*/
    private reward: Laya.Label = null;
    /** @prop {name:probability, tips:"概率", type:Node}*/
    private probability: Laya.Label = null;

    /** @prop {name:adBtn, tips:"广告按钮", type:Node}*/
    private adBtn: Laya.Image = null;

    private data: { obj: LandObj; call: Function };
    private cost: number = 0;

    onOpened(e: { obj: LandObj; call: Function }) {
        this.data = e;
        let nextLand = TableAnalyze.table("landLevel").get(e.obj.level + 1);
        this.priceLabel.text = `价格：${nextLand.cost.count}`;
        this.priceIcon.skin = nextLand.cost.obj.icon;
        this.cost = nextLand.cost.count;

        this.lv.text = `${e.obj.level + 1}级`;
        this.reward.text = `+${Number((nextLand.gain * 100).toFixed(2))}%`;
        this.probability.text = `+${Number((nextLand.probability * 100).toFixed(2))}%`;

        this.adBtn.disabled = !UserInfo.advertiseTimes;
        this.adBtn.active = Boolean(UserInfo.advertiseTimes);

        if (UserInfo.adTimes > 100 || UserInfo.continuousAdTimes > 20) {
            Laya.timer.once(300, this, () => {
                AppCore.runAppFunction({
                    uri: AppEventMap.ad,
                    data: { adType: 2 },
                });

                AppCore.runAppFunction({
                    uri: AppEventMap.ad,
                    data: { adType: 3 },
                });
                AppCore.runAppFunction({
                    uri: AppEventMap.eventCount,
                    data: { type: "half_screen_advertisement" },
                });
                AppCore.runAppFunction({
                    uri: AppEventMap.eventCount,
                    data: { type: "bottom_advertisement" },
                });
            });
        }
    }

    onHdAwake(): void {
        if (UserInfo.adTimes > 100 || UserInfo.continuousAdTimes > 20) {
            (this.owner.getChildByName("center") as Laya.Image).centerY = -310;
        }
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "closeAddLandLayer":
                Core.view.close(Res.views.FieldLevelUpView);
                break;
            case "upgradeBtn":
            case "upgradeAdBtn":
                if (e.target.name == "upgradeBtn" && this.cost > UserInfo.gold) {
                    Core.view.openHint({
                        text: "金币不足，去仓库出售蔬菜可以获得金币，偷菜获得的蔬菜也可以出售获得金币哦",
                        call: () => {},
                    });
                    return;
                }

                HttpControl.inst
                    .send({
                        api: ApiHttp.landUpgrade,
                        data: {
                            landId: this.data.obj.id,
                            type:
                                e.target.name == "upgradeBtn"
                                    ? ConfigGame.ApiTypeDefault
                                    : ConfigGame.ApiTypeAD,
                        },
                    })
                    .then((d: { adReward: ReturnUserInfo["adReward"] }) => {
                        if (e.target.name == "upgradeAdBtn") {
                            Core.eventGlobal.event(EventMaps.play_ad_get_reward, [
                                e.target,
                                d.adReward,
                            ]);
                        } else {
                            AppCore.runAppFunction({
                                uri: AppEventMap.eventCount,
                                data: { type: "Landupgrading" },
                            });
                        }

                        if (this.data.call) {
                            this.data.call();
                        }
                        Core.view.close(Res.views.FieldLevelUpView);
                    });

                break;
        }
    }

    onHdDestroy(): void {
        AppCore.runAppFunction({
            uri: AppEventMap.closeImage,
            data: {},
        });

        AppCore.runAppFunction({
            uri: AppEventMap.closeAd,
            data: {},
        });
    }
}
