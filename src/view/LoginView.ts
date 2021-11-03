import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import { EventMaps } from "../common/EventMaps";
import EventGlobal from "../core/EventGlobal";

export default class LoginView extends GameScript {
    /** @prop {name:loadBar, tips:"load bar", type:Node}*/
    private loadBar: Laya.Image = null;
    /** @prop {name:loadBox, tips:"加载容器", type:Node}*/
    private loadBox: Laya.Box = null;
    /** @prop {name:loginBox, tips:"登陆容器", type:Node}*/
    private loginBox: Laya.Box = null;

    /** 进度条默认宽度 */
    private loadBarOldWidth: number = 0;

    private data: { call: Function };

    onOpened(d) {
        this.data = d;
        if (Laya.LocalStorage.getItem("login")) {
            this.loginBox.visible = false;
            this.loadBox.visible = true;
            if (this.data?.call) {
                this.data.call();
                console.log("call");
            }
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
                this.loginBox.visible = false;
                this.loadBox.visible = true;
                Laya.LocalStorage.setItem("login", "true");
                Laya.View.setLoadingPage(this.owner as any);
                if (this.data?.call) this.data.call();
                break;
        }
    }

    private loadProgress(v) {
        this.loadBar.width = v * this.loadBarOldWidth;
    }

    onDisable(): void {
        EventGlobal.off(EventMaps.load_progress, this, this.loadProgress);
    }
}
