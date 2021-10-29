import Res from "src/common/Res";
import Core from "src/core/index";

//class OrderView extends Laya.Script
export default class OrderView extends Core.gameScript {
    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.OrderView);
                break;
        }
    }
}
