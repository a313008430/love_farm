import Res from "src/common/Res";
import Core from "src/core/index";

//default class SpeedUpView extends Laya.Script {
export default class SpeedUpView extends Core.gameScript {
    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.SpeedUpView);
                break;
        }
    }
}
