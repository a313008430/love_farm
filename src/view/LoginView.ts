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
    /** @prop {name:loginBox, tips:"登陆微信按钮", type:Node}*/
    private loginBox: Laya.Box = null;
    /** @prop {name:appleBtn, tips:"苹果登陆按钮", type:Node}*/
    private appleBtn: Laya.Box = null;
    /** @prop {name:privacyBox, tips:"隐私协议容器", type:Node}*/
    private privacyBox: Laya.Box = null;
    /** @prop {name:privacyCheckIcon, tips:"隐私icon", type:Node}*/
    private privacyCheckIcon: Laya.Box = null;

    /** 进度条默认宽度  1*/
    private loadBarOldWidth: number = 0;

    private canClick: boolean = true;

    private data: { call: Function };

    async onOpened(d) {
        this.data = d;

        this.setLoginBtnState(false);
        this.loadBox.visible = false;
        this.privacyBox.visible = false;
        await this.version();

        if (LocalStorageService.getJSON()?.isLogin) {
            this.login(false);

            this.loadBox.visible = true;
        } else {
            this.setLoginBtnState(true);
            this.loadBox.visible = false;
            this.privacyBox.visible = true;
        }
    }

    onHdAwake() {
        EventGlobal.on(EventMaps.load_progress, this, this.loadProgress);
    }

    onHdEnable(): void {
        // console.log(this.loadLabel);

        // this.loadLabel.text = "Load....0%";
        this.loadBarOldWidth = this.loadBar.width;
        this.loadBar.width = 0;
    }

    /**
     *  设置登录按钮状态
     * @param show
     */
    private setLoginBtnState(show: boolean) {
        if (show) {
            if (Laya.Browser.onIOS) {
                this.appleBtn.visible = true;

                AppCore.runAppFunction({
                    uri: AppEventMap.installWechat_ios,
                    data: {},
                    timestamp: Date.now(),
                }).then((data) => {
                    if (!data.code) {
                        this.loginBox.visible = true;
                        this.loginBox.y = 769;
                    }
                });
            } else {
                this.loginBox.visible = true;
            }
        } else {
            this.loginBox.visible = false;
            this.appleBtn.visible = false;
        }
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
                        LocalStorageService.setJSON("version", d.version);
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
            case "apple_btn":
                this.login(false);
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

        //优化如果微信那边取消登录之后 不可再点击问题
        Laya.timer.once(1000, this, () => {
            this.canClick = true;
        });
        if (LocalStorageService.getJSON().token) {
            HttpControl.inst
                .send({
                    api: ApiHttp.loginToken,
                    error: (code, data) => {
                        LocalStorageService.clear();
                        this.setLoginBtnState(true);
                        this.loadBox.visible = false;
                    },
                })
                .then((d: NetInit) => {
                    if (this.data?.call) this.data.call(d);
                    this.setLoginBtnState(false);
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
                            if (data) ConfigGame.channel = data.data["channel"];
                        }
                    });

                    AppCore.runAppFunction({
                        uri: AppEventMap.eventCount,
                        data: { type: "Signin" },
                    });
                })
                .catch(() => {
                    this.canClick = true;
                    this.setLoginBtnState(true);
                    this.loadBox.visible = false;
                    this.privacyBox.visible = true;
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
                        this.setLoginBtnState(true);
                        this.canClick = true;
                        this.loadBox.visible = false;
                    },
                });
                return;
            }

            let testK = location.search.match(/\?id=(.+)/),
                testKe = null;

            if (testK && testK.length > 1 && BUILD_TYPE != BuildType.online) {
                testKe = testK[1];
            }

            let loginOpenId = testKe,
                nickname = "",
                avatar = "",
                loginData = { account: loginOpenId, avatar: avatar, nickname: nickname };
            if (isWx) {
                if (!loginOpenId) {
                    const data = await AppCore.runAppFunction({
                        uri: AppEventMap.wxLogin,
                        data: {},
                        timestamp: Date.now(),
                    });

                    if (data) {
                        if (data.code) {
                            Core.view.openHint({
                                text: `微信登录失败[${data.code}]，请重试`,
                                call: () => {
                                    location.reload();
                                },
                            });
                        } else {
                            loginOpenId = data.data["openid"];
                            avatar = data.data["iconurl"];
                            nickname = data.data["name"];
                        }
                    }

                    loginData = <NetSendApi["login"]>{
                        wxId: loginOpenId,
                        avatar: avatar,
                        nickname: nickname,
                    };
                }
            } else {
                if (Laya.Browser.onIOS) {
                    const data = await AppCore.runAppFunction({
                        uri: AppEventMap.appleLogin,
                        data: {},
                        timestamp: Date.now(),
                    });

                    if (data) {
                        if (data.code) {
                            Core.view.openHint({
                                text: `苹果登录失败[${data.code}]，请重试`,
                                call: () => {
                                    location.reload();
                                },
                            });
                        } else {
                            loginOpenId = data.data["openid"];
                        }
                    }
                }

                //账号登录
                loginData = <NetSendApi["login"]>{
                    account: loginOpenId,
                    avatar: avatar,
                    nickname: nickname,
                };
            }

            if (!loginOpenId) {
                Core.view.openHint({
                    text: "未获取到账号id",
                    call: () => {
                        this.canClick = true;
                    },
                });
                return;
            }

            this.privacyBox.visible = false;
            HttpControl.inst
                .send({
                    api: ApiHttp.login,
                    data: loginData,
                    error: (code, data) => {
                        LocalStorageService.clear();
                        this.setLoginBtnState(true);

                        this.loadBox.visible = false;
                        this.canClick = true;
                    },
                })
                .then((d: NetInit) => {
                    if (this.data?.call) this.data.call(d);
                    this.setLoginBtnState(false);
                    this.loadBox.visible = true;
                    this.canClick = true;
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
                                Core.view.openHint({
                                    text: `登录失败[${data.code}]`,
                                    call: () => {
                                        location.reload();
                                    },
                                });
                            } else {
                                ConfigGame.channel = data.data["channel"];
                            }
                        }
                    });

                    AppCore.runAppFunction({
                        uri: AppEventMap.eventCount,
                        data: { type: "Signin" },
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
