import Res from "src/common/Res";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import { EventMaps } from "../common/EventMaps";
import EventGlobal from "../core/EventGlobal";

//  AddLandView extends Laya.Script {
export default class AddLandView extends GameScript {
    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "closeAddLandLayer":
                Core.view.close(Res.views.AddLandView);
                break;
        }
    }
}
