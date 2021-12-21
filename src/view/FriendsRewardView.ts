import { AppEventMap, EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import { RewardCurrencyBase } from "src/common/TableObject";
import AppCore from "src/core/App";
import Core from "src/core/index";
import TaskService from "src/dataService/TaskService";
import UserInfo from "src/dataService/UserInfo";

//export default class FriendsRewardView extends Laya.Script {
export default class FriendsRewardView extends Core.gameScript {
    /** @prop {name:inviteBox, tips:"整数类型示例", type:Node}*/
    private inviteBox: Laya.Box;
    /** @prop {name:inviteInput, tips:"输入邀请容器", type:Node}*/
    private inviteInput: Laya.TextInput;
    /** @prop {name:priceList, tips:"输入邀请容器", type:Node}*/
    private priceList: Laya.List;

    private inviteList: InviteData[] = [];

    private rewardValue: number = 0;
    private proportion: number = 0;
    private canClick: boolean = true;

    private call: Function;

    onHdAwake() {
        this.priceList.vScrollBarSkin = null;
        this.priceList.array = new Array(6);
        this.priceList.renderHandler = new Laya.Handler(this, this.renderItem);
    }

    onOpened(data: { list: []; call: Function }) {
        this.inviteList = data.list || [];
        this.call = data.call;
        if (UserInfo.invitePeople) {
            this.inviteBox.visible = false;
            this.inviteBox.active = false;
        }

        this.rewardValue = (
            TableAnalyze.table("config").get("Invitation_rewards").value as RewardCurrencyBase
        ).count;

        const withdrawal = TableAnalyze.table("config").get("withdrawal").value as string[];
        this.proportion = Number(withdrawal[1]);
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.FriendsRewardView);
                break;
            case "invite_btn":
                AppCore.runAppFunction({
                    uri: AppEventMap.wxShare,
                    data: {},
                    timestamp: Date.now(),
                }).then((d) => {
                    if (!d || d?.code) {
                        Core.view.openHint({ text: d.data["message"], call: () => {} });
                    } else {
                        Core.view.openHint({ text: d.data["message"], call: () => {} });
                        HttpControl.inst
                            .send({
                                api: ApiHttp.friendShare,
                            })
                            .then(() => {
                                TaskService.taskAddTimes(1010);
                            });
                    }
                });
                break;
            case "submit":
                this.submit();
                break;
            case "btn":
                const i = (e.target as Laya.Image).dataSource;
                this.withdraw(i);
                break;
        }
    }

    /**
     * 提现
     * @param i
     * @returns
     */
    private withdraw(i: number) {
        if (!this.canClick) return;
        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.friendInviteReceive,
                data: { index: i },
            })
            .then(() => {
                this.canClick = true;
                Core.view.openHint({ text: "提现成功", call: () => {} });
                this.inviteList[i].receivedReward = 1;
                this.priceList.refresh();
                Core.eventGlobal.event(EventMaps.update_friend_share_guide, [this.inviteList]);
            })
            .catch(() => {
                this.canClick = true;
            });
    }

    private renderItem(cell: Laya.Image, i: number) {
        (cell.getChildByName("top") as Laya.Label).text = `第${i + 1}位`;
        const btn = cell.getChildByName("btn") as Laya.Image;

        (cell.getChildByName("price_box").getChildByName("price") as Laya.Label).text = `${
            this.rewardValue / this.proportion
        }`;

        btn.skin = "game/img_extractActive.png";
        if (this.inviteList.length > i) {
            if (this.inviteList[i].receivedReward) {
                btn.disabled = true;
                btn.skin = "game/img_cashDone.png";
            } else {
                btn.disabled = false;
            }
        } else {
            btn.disabled = true;
        }

        if (i > 2) {
            btn.disabled = false;
            btn.visible = false;
        }

        btn.dataSource = i;
    }

    /**
     * 提交绑定我的邀请人
     * @returns
     */
    private submit() {
        if (!this.inviteInput.text || !this.inviteInput.text.length) {
            Core.view.openHint({ text: "邀请码不能为空！", call: () => {} });
            return;
        }
        if (!this.canClick) return;
        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.friendInvitePeople,
                data: {
                    key: this.inviteInput.text,
                },
            })
            .then(() => {
                UserInfo.invitePeople = this.inviteInput.text;
                Core.view.openHint({ text: "绑定成功", call: () => {} });
                this.inviteBox.visible = false;
                this.inviteBox.active = false;
                this.canClick = true;
                if (this.call) this.call();
            })
            .catch(() => {
                this.canClick = true;
            });
    }

    onHdDestroy() {
        // Laya.loader.clearTextureRes("res/img_inviteBg1.png");
    }
}
