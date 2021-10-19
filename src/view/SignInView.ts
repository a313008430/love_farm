import Res from "src/common/Res";
import GameScript from "src/core/GameScript";
import { ViewManager } from "src/core/ViewManager";

//  SignInView extends Laya.Script {
export default class SignInView extends GameScript {
    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                ViewManager.inst.close(Res.views.SignInView);
                break;
        }
    }
}
