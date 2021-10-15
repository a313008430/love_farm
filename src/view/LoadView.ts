import { EventMaps } from "../common/EventMaps";
import EventGlobal from "../core/EventGlobal";

export default class LoadView extends Laya.Script {
    /** @prop {name:loadLabel, tips:"load 文本", type:Node}*/
    public loadLabel: Laya.Label = null;

    onAwake() {
        // this.owner.i
    }

    onEnable(): void {
        // console.log(this.loadLabel);
        EventGlobal.on(EventMaps.load_progress, this, this.loadProgress);
        this.loadLabel.text = "Load....0%";
    }

    private loadProgress(v) {
        this.loadLabel.text = `Load....${(v * 100).toFixed(2)}%`;
    }

    onDisable(): void {
        EventGlobal.off(EventMaps.load_progress, this, this.loadProgress);
    }
}
