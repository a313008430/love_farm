import Res from "src/common/Res";
import GameScript from "src/core/GameScript";
import { ViewManager } from "src/core/ViewManager";

//  MailView extends Laya.Script {
export default class MailView extends GameScript {
    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                ViewManager.inst.close(Res.views.MailView);
                break;
        }
    }
}
