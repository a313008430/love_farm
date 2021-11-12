import ConfigGame from "src/common/ConfigGame";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import LocalStorageService from "src/dataService/LocalStorageService";
import UserInfo from "src/dataService/UserInfo";
import { EventMaps } from "../common/EventMaps";
import EventGlobal from "../core/EventGlobal";

export default class LoginView extends GameScript {
    /** @prop {name:loadBar, tips:"load bar", type:Node}*/
    private loadBar: Laya.Image = null;
    /** @prop {name:loadBox, tips:"加载容器", type:Node}*/
    private loadBox: Laya.Box = null;
    /** @prop {name:loginBox, tips:"登陆容器", type:Node}*/
    private loginBox: Laya.Box = null;
    /** @prop {name:userInput, tips:"登陆容器", type:Node}*/
    private userInput: Laya.TextInput = null;

    /** 进度条默认宽度 */
    private loadBarOldWidth: number = 0;

    private data: { call: Function };

    onOpened(d) {
        this.data = d;

        if (LocalStorageService.getJSON()?.isLogin) {
            this.login();
            this.loginBox.visible = false;
            this.loadBox.visible = true;
            this.userInput.visible = false;
            // if (this.data?.call) {
            //     this.data.call();
            //     console.log("call");
            // }
        } else {
            this.loginBox.visible = true;
            this.loadBox.visible = false;
            this.userInput.visible = true;
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
                this.login();
                break;
        }
    }

    private login() {
        if (LocalStorageService.getJSON().token) {
            HttpControl.inst.send({
                api: ApiHttp.loginToken,
                call: (d: NetInit) => {
                    if (this.data?.call) this.data.call(d);
                    this.loginBox.visible = false;
                    this.loadBox.visible = true;
                },
                error: (code, data) => {
                    LocalStorageService.clear();
                    this.loginBox.visible = true;
                    this.loadBox.visible = false;
                },
            });
        } else {
            HttpControl.inst.send({
                api: ApiHttp.login,
                data: {
                    account: this.userInput.text,
                },
                call: (d: NetInit) => {
                    if (this.data?.call) this.data.call(d);
                    this.loginBox.visible = false;
                    this.loadBox.visible = true;
                },
                error: (code, data) => {
                    LocalStorageService.clear();
                    this.loginBox.visible = true;
                    this.loadBox.visible = false;
                },
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
