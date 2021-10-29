import Res from "src/common/Res";
import Core from "src/core/index";

//class SettingView extends Laya.Script
export default class SettingView extends Core.gameScript {
    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.SettingView);
                break;
        }
    }
}
