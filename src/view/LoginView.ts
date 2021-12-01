import ConfigGame from "src/common/ConfigGame";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import AppCore from "src/core/App";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import LocalStorageService from "src/dataService/LocalStorageService";
import UserInfo from "src/dataService/UserInfo";
import { AppEventMap, EventMaps } from "../common/EventMaps";
import EventGlobal from "../core/EventGlobal";

export default class LoginView extends GameScript {
    /** @prop {name:loadBar, tips:"load bar", type:Node}*/
    private loadBar: Laya.Image = null;
    /** @prop {name:loadBox, tips:"加载容器", type:Node}*/
    private loadBox: Laya.Box = null;
    /** @prop {name:loginBox, tips:"登陆容器", type:Node}*/
    private loginBox: Laya.Box = null;
    /** @prop {name:privacyBox, tips:"隐私协议容器", type:Node}*/
    private privacyBox: Laya.Box = null;
    /** @prop {name:privacyCheckIcon, tips:"隐私icon", type:Node}*/
    private privacyCheckIcon: Laya.Box = null;

    /** 进度条默认宽度 */
    private loadBarOldWidth: number = 0;

    private canClick: boolean = true;

    private data: { call: Function };

    onOpened(d) {
        this.data = d;

        if (LocalStorageService.getJSON()?.isLogin) {
            this.login(false);
            this.loginBox.visible = false;
            this.loadBox.visible = true;
        } else {
            this.loginBox.visible = true;
            this.loadBox.visible = false;
        }
    }

    onHdAwake() {
        EventGlobal.on(EventMaps.load_progress, this, this.loadProgress);
        console.log("awake");
    }

    onHdEnable(): void {
        // console.log(this.loadLabel);

        // this.loadLabel.text = "Load....0%";
        this.loadBarOldWidth = this.loadBar.width;
        this.loadBar.width = 0;
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "login_btn":
                this.login(true);
                break;
            case "check_box":
                this.privacyCheckIcon.visible = !this.privacyCheckIcon.visible;
                break;
            case "privacy_lb":
                AppCore.runAppFunction({
                    uri: AppEventMap.privacyAgreement,
                    data: {},
                });
                break;
        }
    }

    private async login(isWx: boolean) {
        if (!this.canClick) return;
        this.canClick = false;
        if (LocalStorageService.getJSON().token) {
            HttpControl.inst
                .send({
                    api: ApiHttp.loginToken,
                    error: (code, data) => {
                        LocalStorageService.clear();
                        this.loginBox.visible = true;

                        this.loadBox.visible = false;
                    },
                })
                .then((d: NetInit) => {
                    if (this.data?.call) this.data.call(d);
                    this.loginBox.visible = false;
                    this.loadBox.visible = true;
                    this.canClick = true;
                });
            this.privacyBox.visible = false;
        } else {
            // console.log(isWx);
            this.privacyBox.visible = true;
            if (!this.privacyCheckIcon.visible) {
                Core.view.openHint({
                    text: "请阅读《用户隐私协议》",
                    call: () => {
                        LocalStorageService.clear();
                        this.loginBox.visible = true;

                        this.loadBox.visible = false;
                    },
                });
                return;
            }

            let testK = location.search.match(/\?id=(.+)/),
                testKe = null;
            if (testK && testK.length > 1) {
                testKe = testK[1];
            }
            let wxOpenId = testKe,
                nickname = "",
                avatar = "";
            if (isWx && !wxOpenId) {
                const data = await AppCore.runAppFunction({
                    uri: AppEventMap.wxLogin,
                    data: {},
                    timestamp: Date.now(),
                });

                if (data) {
                    wxOpenId = data.data["openid"];
                    avatar = data.data["iconurl"];
                    nickname = data.data["name"];
                }
            }
            if (!wxOpenId) {
                Core.view.openHint({ text: "未获取到微信id", call: () => {} });
                return;
            }
            this.privacyBox.visible = false;

            HttpControl.inst
                .send({
                    api: ApiHttp.login,
                    data: <NetSendApi["login"]>{
                        // account: isWx ? null : this.userInput.text,
                        wxId: wxOpenId,
                        avatar: avatar,
                        nickname: nickname,
                    },
                    error: (code, data) => {
                        LocalStorageService.clear();
                        this.loginBox.visible = true;

                        this.loadBox.visible = false;
                        this.canClick = true;
                    },
                })
                .then((d: NetInit) => {
                    if (this.data?.call) this.data.call(d);
                    this.loginBox.visible = false;
                    this.loadBox.visible = true;
                    this.canClick = true;
                    // AppCore.runAppFunction({
                    //     uri: AppEventMap.wxLoginSuccess,
                    //     data: {},
                    // });
                    if (!UserInfo.isFirstTime) {
                        AppCore.runAppFunction({
                            uri: AppEventMap.registerSuccess,
                            data: {},
                        });
                    }
                    AppCore.runAppFunction({
                        uri: AppEventMap.loginSuccess,
                        data: {},
                    });
                });
        }
    }

    private loadProgress(v) {
        this.loadBar.width = v * this.loadBarOldWidth;
    }

    onHdDisable(): void {
        EventGlobal.off(EventMaps.load_progress, this, this.loadProgress);
    }
}
