import GameScript from "src/core/GameScript";
import { EventMaps } from "../common/EventMaps";
import EventGlobal from "../core/EventGlobal";

export default class LoadView extends GameScript {
    /** @prop {name:loadBar, tips:"load bar", type:Node}*/
    private loadBar: Laya.Image = null;

    /** 进度条默认宽度 */
    private loadBarOldWidth: number = 0;

    onAwake() {
        // this.owner.i
    }

    onEnable(): void {
        // console.log(this.loadLabel);
        EventGlobal.on(EventMaps.load_progress, this, this.loadProgress);
        // this.loadLabel.text = "Load....0%";
        this.loadBarOldWidth = this.loadBar.width;
        this.loadBar.width = 0;
    }

    private loadProgress(v) {
        this.loadBar.width = v * this.loadBarOldWidth;
    }

    onDisable(): void {
        EventGlobal.off(EventMaps.load_progress, this, this.loadProgress);
    }
}
