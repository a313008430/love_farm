import { AppEventMap } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import AppCore from "src/core/App";
import Core from "src/core/index";
import UserInfo from "src/dataService/UserInfo";

//export default class FriendsRewardView extends Laya.Script {
export default class FriendsRewardView extends Core.gameScript {
    /** @prop {name:inviteBox, tips:"整数类型示例", type:Node}*/
    private inviteBox: Laya.Box;
    /** @prop {name:inviteInput, tips:"输入邀请容器", type:Node}*/
    private inviteInput: Laya.TextInput;
    /** @prop {name:priceList, tips:"输入邀请容器", type:Node}*/
    private priceList: Laya.List;

    onHdAwake() {
        this.priceList.vScrollBarSkin = null;
        this.priceList.array = new Array(10);
    }

    onOpened(list: InviteData[]) {
        if (UserInfo.invitePeople) {
            this.inviteBox.visible = false;
            this.inviteBox.active = false;
        }
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
                });
                break;
            case "submit":
                this.submit();
                break;
        }
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
        HttpControl.inst.send({
            api: ApiHttp.friendInvitePeople,
            data: {
                key: this.inviteInput.text,
            },
            call: () => {
                UserInfo.invitePeople = this.inviteInput.text;
                Core.view.openHint({ text: "绑定成功", call: () => {} });
                this.inviteBox.visible = false;
                this.inviteBox.active = false;
            },
        });
    }

    onHdDestroy() {
        // Laya.loader.clearTextureRes("res/img_inviteBg1.png");
    }
}
