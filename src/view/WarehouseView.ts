import Res from "src/common/Res";
import Core from "src/core/index";

/**
 * 仓库
 */
//FieldLevelUpView WarehouseView Laya.Script {
export default class WarehouseView extends Core.gameScript {
    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.WarehouseView);
                break;
        }
    }
}
