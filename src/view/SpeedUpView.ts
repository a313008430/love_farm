import ConfigGame from "src/common/ConfigGame";
import { AppEventMap, EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import { GuideComponentData } from "src/components/GuideComponent";
import AppCore from "src/core/App";
import Core from "src/core/index";
import UserInfo from "src/dataService/UserInfo";
import MainView from "./MainView";

//default class SpeedUpView extends Laya.Script {
export default class SpeedUpView extends Core.gameScript {
    /** @prop {name:timeLb, tips:"加速时间", type:Node}*/
    private timeLb: Laya.Label;
    /** @prop {name:timesLb, tips:"全体加速剩余次数文本", type:Node}*/
    private timesLb: Laya.Label;
    /** @prop {name:speedUpBtn, tips:"全体加速按钮", type:Node}*/
    private speedUpBtn: Laya.Image;

    private call: Function;

    private canClick: boolean = true;

    onOpened(data: { call: Function }) {
        this.call = data.call;
        let time = TableAnalyze.table("config").get("all_speed_up_time").value as number;
        this.timeLb.text = `${Math.ceil(time / 60)}分钟`;
        this.timesLb.text = `今日剩余${UserInfo.advertiseTimes}次`;
        if (UserInfo.advertiseTimes <= 0) {
            this.speedUpBtn.disabled = true;
        }
        Laya.timer.once(300, this, () => {
            AppCore.runAppFunction({
                uri: AppEventMap.ad,
                data: { adType: 3 },
            });
            AppCore.runAppFunction({
                uri: AppEventMap.ad,
                data: { adType: 2 },
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

        //新手引导
        if (MainView.inst.getGuideStep() == 1) {
            Laya.timer.once(300, this, () => {
                Core.eventGlobal.event(EventMaps.update_guid, <GuideComponentData>{
                    nodeList: [this.speedUpBtn],
                    call: () => {},
                    addPos: { x: 100, y: 120 },
                });
            });
        }

        this.speedUpBtn.on(Laya.Event.CLICK, this, () => {
            if (!this.canClick) return;
            this.canClick = false;
            HttpControl.inst
                .send({
                    api: ApiHttp.landSpeedUp,
                    data: { type: ConfigGame.ApiTypeAD },
                })
                .then(
                    (d: {
                        advertiseTimes: number;
                        speedUpTimes: number;
                        adReward: ReturnUserInfo["adReward"];
                    }) => {
                        UserInfo.speedUpTimes = d.speedUpTimes;
                        UserInfo.advertiseTimes = d.advertiseTimes;

                        if (UserInfo.speedUpTimes == ConfigGame.ADSpeedUpTimes) {
                            UserInfo.signInDays++;
                            AppCore.runAppFunction({
                                uri: AppEventMap.eventCount,
                                data: { type: "punchtheclock" },
                            });
                        }

                        AppCore.runAppFunction({
                            uri: AppEventMap.eventCount,
                            data: { type: "Advertisingacceleration" },
                        });

                        Core.view.close(Res.views.SpeedUpView);
                        Core.eventGlobal.event(EventMaps.land_speed_up);

                        Core.eventGlobal.event(EventMaps.play_ad_get_reward, [
                            this.speedUpBtn,
                            d.adReward,
                        ]);

                        if (this.call) this.call();

                        //新手引导
                        if (MainView.inst.getGuideStep() == 1) {
                            Core.eventGlobal.event(EventMaps.update_guid_data, 1);
                            MainView.inst.guide();
                        }
                    }
                );
        });
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.SpeedUpView);
                break;
            case "speed_up":
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
