import ConfigGame from "src/common/ConfigGame";
import { EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import { ViewManager } from "src/core/ViewManager";
import UserInfo from "src/dataService/UserInfo";
import { GetFloatRewardObj } from "./MainView";

//  SignInView extends Laya.Script {
export default class SignInView extends GameScript {
    /** @prop {name:signInList, tips:"签到数据列表", type:Node} */
    private signInList: Laya.List;

    /** @prop {name:signInProgressLb, tips:"签到进度文本", type:Node} */
    private signInProgressLb: Laya.Label;
    /** @prop {name:signInProgressBar, tips:"签到进度条", type:Node} */
    private signInProgressBar: Laya.Label;
    /** @prop {name:progressDesc, tips:"签到进度文字提示", type:Node} */
    private progressDesc: Laya.Label;
    /** @prop {name:finishIcon, tips:"签到进度文字提示", type:Node} */
    private finishIcon: Laya.Image;
    onOpened() {
        this.signInList.array = TableAnalyze.table("signIn").list;
        this.signInList.vScrollBarSkin = null;
        this.signInList.renderHandler = new Laya.Handler(this, this.updateItem);
        this.updateProgress();
    }

    private updateProgress() {
        let scale = UserInfo.speedUpTimes / ConfigGame.ADSpeedUpTimes;
        if (scale > 1) scale = 1;
        this.signInProgressBar.width = 977 * scale;
        this.signInProgressLb.text = UserInfo.signInDays + "";
        this.progressDesc.text = `今日签到进度（使用${UserInfo.speedUpTimes}/${ConfigGame.ADSpeedUpTimes}次加速）`;
        this.finishIcon.visible = UserInfo.speedUpTimes >= ConfigGame.ADSpeedUpTimes;
    }

    private updateItem(cell: Laya.Box, i: number) {
        const bar = cell.getChildByName("bar") as Laya.Image,
            obj = TableAnalyze.table("signIn").list[i];
        let scale = UserInfo.signInDays / obj.days;
        if (scale > 1) scale = 1;
        bar.width = 502 * scale;
        const rewardBox = cell.getChildByName("reward_box") as Laya.Box;
        (rewardBox.getChildByName("icon") as Laya.Image).skin = obj.reward.obj.icon;
        (rewardBox.getChildByName("amount") as Laya.Label).text = `x${obj.reward.count}`;

        (cell.getChildByName("sign_days") as Laya.Label).text = `签到${obj.days}天`;

        let skin: string = "",
            btn = cell.getChildByName("get_btn") as Laya.Image;
        btn.dataSource = obj.id;
        if (obj.id > UserInfo.signInId) {
            btn.active = true;
            btn.visible = false;
            rewardBox.y = 103;
            skin = `game/img_done.png`;

            if (UserInfo.signInDays >= obj.days) {
                if (!UserInfo.signInId) {
                    if (obj.id == TableAnalyze.table("signIn").list[0].id) {
                        skin = `game/img_get.png`;

                        btn.visible = true;
                        rewardBox.y = 57;
                    }
                } else {
                    if (obj.id - UserInfo.signInId == 1) {
                        skin = `game/img_get.png`;

                        btn.visible = true;
                        rewardBox.y = 57;
                    }
                }
            }
        } else {
            skin = `game/img_received.png`;
            btn.active = false;
            btn.visible = true;
            rewardBox.y = 57;
        }
        btn.skin = skin;
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                ViewManager.inst.close(Res.views.SignInView);
                break;
            case "desc_btn":
                Core.view.open(Res.views.SignInDescView);
                break;
            case "get_btn":
                //领取奖励

                const signInId = e.target["dataSource"];

                HttpControl.inst
                    .send({
                        api: ApiHttp.signInReward,
                        data: { type: ConfigGame.ApiTypeAD, signInId: signInId },
                    })
                    .then(() => {
                        UserInfo.signInId = signInId;
                        this.signInList.refresh();
                        let reward = TableAnalyze.table("signIn").get(signInId).reward;
                        Core.eventGlobal.event(EventMaps.play_get_reward, <GetFloatRewardObj>{
                            node: e.target as any,
                            list: [
                                {
                                    obj: reward.obj,
                                    count: reward.count,
                                    posType: reward.obj.id == ConfigGame.goldId ? 1 : 2,
                                },
                            ],
                        });
                    });

                break;
        }
    }
}
