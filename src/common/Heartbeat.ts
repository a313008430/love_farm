import { RedDotType } from "src/components/RedDotComponent";
import Core from "src/core/index";
import { EventMaps } from "./EventMaps";
import HttpControl from "./HttpControl";
import { ApiHttp } from "./NetMaps";
import Res from "./Res";

/**
 * 心跳
 */
class HeartbeatControl {
    /** 心跳间隔 */
    intervalTime = 60;

    private timeId;

    init() {
        // setTimeout(() => {
        //     this.updateMsg();
        // }, 2000);
        // this.updateTime();
    }

    private updateTime() {
        if (this.timeId) {
            clearTimeout(this.timeId);
        }
        this.timeId = setTimeout(() => {
            this.updateMsg();
            this.updateTime();
        }, this.intervalTime * 1000);
    }

    /** 更新所有红点 */
    async updateMsg() {
        //邮件
        let d: MailReturnData[] = await HttpControl.inst
            .send({
                api: ApiHttp.mailList,
            })
            .catch(() => {
                this.error();
            });
        let hasRed = false;
        for (let x = 0; x < d.length; x++) {
            if (!d[x].read) {
                hasRed = true;
                break;
            }
        }
        Core.eventGlobal.event(EventMaps.update_red_dot, [RedDotType.mail, hasRed]);
        let friendData: FriendListData = await HttpControl.inst
            .send({
                api: ApiHttp.friendList,
            })
            .catch(() => {
                this.error();
            });
        hasRed = false;
        for (let x = 0; x < friendData.list.length; x++) {
            if (friendData.list[x].steal || friendData.list[x].applyIng) {
                hasRed = true;
                break;
            }
        }
        Core.eventGlobal.event(EventMaps.update_red_dot, [RedDotType.friend, hasRed]);
    }

    private error() {
        if (this.timeId) {
            clearTimeout(this.timeId);
        }
    }

    destroy() {
        clearTimeout(this.timeId);
    }
}

export default new HeartbeatControl();
