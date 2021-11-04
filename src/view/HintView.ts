import Res from "src/common/Res";
import Core from "src/core/index";

//default class HintView extends Laya.Script
export default class HintView extends Core.gameScript {
    /** @prop {name:text, tips:"内容", type:Node}*/
    private text: Laya.Label;

    private data: { text: string; call?: Function };

    onOpened(d) {
        this.data = d;
        this.text.text = this.data?.text || "";
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                if (this.data?.call) {
                    this.data.call();
                }
                Core.view.close(Res.views.HintView);
                break;
        }
    }
}
