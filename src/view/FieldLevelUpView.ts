import Res from "src/common/Res";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";

//  FieldLevelUpView extends Laya.Script {
export default class FieldLevelUpView extends GameScript {
    onHdAwake() {
        console.log("awa");
    }
    onHdEnable() {
        console.log("en");
    }

    onOpened(e) {
        console.log(e);
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "closeAddLandLayer":
                Core.view.close(Res.views.FieldLevelUpView);
                break;
        }
    }
}
