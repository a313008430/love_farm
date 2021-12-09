import Res from "src/common/Res";
import Core from "src/core/index";

//export default class SignInDescView extends Laya.Script {
export default class SignInDescView extends Core.gameScript {
    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.SignInDescView);
                break;
        }
    }
}
