import AppCore from "src/core/App";
import Core from "src/core/index";
import UserInfo from "src/dataService/UserInfo";
import { AppEventMap } from "./EventMaps";
import HttpControl from "./HttpControl";
import { ApiHttp } from "./NetMaps";

/**
 * 微信绑定
 */
class WxBindControl {
    get isBindWx() {
        if (!UserInfo.isBindWx) {
            Core.view.openHint({
                text: "提现需要绑定微信账号",
                call: () => {
                    this.bindWx();
                },
                cancelCall: () => {},
            });
        }
        return UserInfo.isBindWx;
    }

    /**
     * 绑定微信
     */
    private async bindWx() {
        // const data = await AppCore.runAppFunction({
        //     uri: AppEventMap.wxLogin,
        //     data: {},
        //     timestamp: Date.now(),
        // });

        const data: any = {};

        console.log(data);

        data.code = 0;
        data.data = {
            message: "登录成功",
            name: "尊贵的VIP",
            iconurl:
                "https://thirdwx.qlogo.cn/mmopen/vi_32/mDGuJwZh6ibQRDVzBPIT8lQWoRtwKBchXTiahv7icKB9G7nUUee93O5PictDPjsvGxlvtvn0lk31yhUPibibZZR64m2w/132",
            openid: "oCA306E0ZIeME3T8wkUwS8gi8n2M",
        };

        console.log(typeof data.data["openid"]);

        if (data) {
            if (data.code) {
                Core.view.openHint({
                    text: `获取微信openid失败[${data.code}]，请重试`,
                    call: () => {
                        this.bindWx();
                    },
                    cancelCall: () => {},
                });
            } else {
                HttpControl.inst
                    .send({
                        api: ApiHttp.userBind,
                        data: {
                            openid: data.data["openid"],
                            avatar: data.data["iconurl"],
                            nickname: data.data["name"],
                        },
                    })
                    .then(() => {
                        UserInfo.isBindWx = 1;
                        if (data.data["name"]) UserInfo.nickname = data.data["name"];
                        if (data.data["iconurl"]) UserInfo.avatar = data.data["iconurl"];
                        Core.view.openHint({
                            text: `绑定成功`,
                            call: () => {},
                        });
                    })
                    .catch(() => {
                        Core.view.openHint({
                            text: `绑定失败，是否重试？`,
                            call: () => {
                                this.bindWx();
                            },
                            cancelCall: () => {},
                        });
                    });
            }
        }
    }
}

export default new WxBindControl();
