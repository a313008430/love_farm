import ConfigGame from "src/common/ConfigGame";
import { AppEventMap, EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import { RewardCurrencyBase } from "src/common/TableObject";
import AppCore from "src/core/App";
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
    /** @prop {name:adBtn, tips:"广告按钮", type:Node}*/
    private adBtn: Laya.Image = null;

    private data: { id: number; call: Function };

    private landData: RewardCurrencyBase;

    private canClick: boolean = true;

    onOpened(d) {
        this.data = d;

        this.landData = TableAnalyze.table("config").get("unlock_land_cost").value[
            LandService.list.size
        ] as RewardCurrencyBase;
        this.costIcon.skin = this.landData.obj.icon;
        this.costFont.value = this.landData.count + "";

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
                Core.view.close(Res.views.AddLandView);
                break;
            case "cost_gold":
                if (!this.canClick) {
                    return;
                }
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
                this.canClick = false;
                HttpControl.inst
                    .send({
                        api: ApiHttp.landUnlock,
                        data: {
                            landId: this.data.id,
                            type: ConfigGame.ApiTypeDefault,
                        },
                    })
                    .then(() => {
                        this.canClick = true;
                        if (this.data?.call) {
                            this.data.call();
                            Core.view.close(Res.views.AddLandView);
                        }
                    })
                    .catch(() => {
                        this.canClick = true;
                    });
                break;
            case "ad_btn":
                if (!this.canClick) {
                    return;
                }
                this.canClick = false;
                HttpControl.inst
                    .send({
                        api: ApiHttp.landUnlock,
                        data: {
                            landId: this.data.id,
                            type: ConfigGame.ApiTypeAD,
                        },
                    })
                    .then((d: { adReward: ReturnUserInfo["adReward"] }) => {
                        this.canClick = true;
                        if (this.data?.call) {
                            this.data.call();
                            Core.view.close(Res.views.AddLandView);
                        }

                        Core.eventGlobal.event(EventMaps.play_ad_get_reward, [
                            e.target,
                            d.adReward,
                        ]);
                    })
                    .catch(() => {
                        this.canClick = true;
                    });

                break;
        }
    }

    onHdDestroy(): void {
        AppCore.runAppFunction({
            uri: AppEventMap.closeAd,
            data: {},
        });
    }
}
