import ConfigGame from "src/common/ConfigGame";
import { AppEventMap, EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import AppCore from "src/core/App";
import Core from "src/core/index";
import UserInfo from "src/dataService/UserInfo";

//default class SpeedUpView extends Laya.Script {
export default class SpeedUpView extends Core.gameScript {
    /** @prop {name:timeLb, tips:"加速时间", type:Node}*/
    private timeLb: Laya.Label;
    /** @prop {name:timesLb, tips:"全体加速剩余次数文本", type:Node}*/
    private timesLb: Laya.Label;
    /** @prop {name:speedUpBtn, tips:"全体加速按钮", type:Node}*/
    private speedUpBtn: Laya.Label;

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
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.SpeedUpView);
                break;
            case "speed_up":
                if (!this.canClick) return;
                this.canClick = false;
                HttpControl.inst
                    .send({
                        api: ApiHttp.landSpeedUp,
                        data: { type: ConfigGame.ApiTypeAD },
                    })
                    .then((d: { advertiseTimes: number; speedUpTimes: number }) => {
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

                        Core.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);

                        if (this.call) this.call();
                    });
                break;
        }
    }
}
