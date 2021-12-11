import ConfigGame, { BuildType } from "src/common/ConfigGame";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import AppCore, { AppDespatchReturnData } from "src/core/App";
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

    async onOpened(d) {
        this.data = d;
        this.loginBox.visible = false;
        this.loadBox.visible = false;
        this.privacyBox.visible = false;
        await this.version();

        if (LocalStorageService.getJSON()?.isLogin) {
            this.login(false);
            this.loginBox.visible = false;
            this.loadBox.visible = true;
        } else {
            this.loginBox.visible = true;
            this.loadBox.visible = false;
            this.privacyBox.visible = true;
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

    private getBuildType() {
        let buildType = null;
        switch (BUILD_TYPE) {
            case BuildType.debug:
                buildType = 3;
                break;
            case BuildType.test:
                buildType = 2;
                break;
            case BuildType.online:
                buildType = 1;
                break;
        }
        if (!buildType) {
            return Core.view.openHint({
                text: "环境type配置出错",
                call: () => {
                    AppCore.runAppFunction({
                        uri: AppEventMap.clearCache,
                        data: {},
                    });
                    location.reload();
                },
            });
        }
        return buildType;
    }

    private async version() {
        return new Promise((resolve) => {
            HttpControl.inst
                .send({
                    api: ApiHttp.configClient,
                    data: { id: this.getBuildType() },
                })
                .then((d: ConfigClient) => {
                    const version = Number(
                        LocalStorageService.getJSON().version?.replace(/\./g, "")
                    );

                    if (!version) {
                        resolve(null);
                        LocalStorageService.setJSON("version", d.version);
                        ConfigGame.version = d.version;

                        return;
                    }

                    if (Number(d.version.replace(/\./g, "")) > version) {
                        AppCore.runAppFunction({
                            uri: AppEventMap.clearCache,
                            data: {},
                        });
                        Core.view.openHint({
                            text: "检测到新的版本，请更新！",
                            call: () => {
                                LocalStorageService.setJSON("version", d.version);
                                AppCore.runAppFunction({
                                    uri: AppEventMap.showBackground,
                                    data: {},
                                });
                                location.reload();
                            },
                        });
                    } else {
                        ConfigGame.version = d.version;
                        resolve(null);
                    }
                })
                .catch(() => {
                    alert("版本检测出错");
                    resolve(null);
                });
        });
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
                    AppCore.runAppFunction({
                        uri: AppEventMap.loginSuccess,
                        data: {
                            user_id: Number(d.userInfo.key),
                        },
                        timestamp: Date.now(),
                    }).then((data) => {
                        if (data?.code) {
                            Core.view.openHint({ text: `登录失败[${data.code}]` });
                        } else {
                            ConfigGame.channel = data.data["channel"];
                        }
                    });
                })
                .catch(() => {
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
                        this.canClick = true;
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
                    if (data.code) {
                        Core.view.openHint({ text: `微信登录失败[${data.code}]` });
                    } else {
                        wxOpenId = data.data["openid"];
                        avatar = data.data["iconurl"];
                        nickname = data.data["name"];
                    }
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
                            data: {
                                user_id: Number(d.userInfo.key),
                            },
                        });
                    }
                    AppCore.runAppFunction({
                        uri: AppEventMap.loginSuccess,
                        data: {
                            user_id: Number(d.userInfo.key),
                        },
                        timestamp: Date.now(),
                    }).then((data: AppDespatchReturnData) => {
                        if (data) {
                            if (data.code) {
                                Core.view.openHint({ text: `登录失败[${data.code}]` });
                            } else {
                                ConfigGame.channel = data.data["channel"];
                            }
                        }
                    });
                })
                .catch(() => {
                    this.canClick = true;
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
