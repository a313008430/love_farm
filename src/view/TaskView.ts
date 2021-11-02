import Res from "../common/Res";
import UserInfo from "../dataService/UserInfo";
import EventGlobal, { EventOn } from "../core/EventGlobal";
import GameScript from "../core/GameScript";
import ObservableProperty from "../core/ObservableProperty";
import { ViewManager } from "../core/ViewManager";

//  TaskView extends Laya.Script {
export default class TaskView extends GameScript {
    /** @prop {name:image, tips:"布尔类型示例", type:Node}*/
    public image: Laya.Label = null;

    game: string = "121212";

    @EventOn("aa")
    myEvent(e) {
        console.log("aa", e, this.image);
    }

    onClick(e) {
        switch (e.target.name) {
            case "close":
                ViewManager.inst.close(Res.views.TaskView);
                break;
        }
    }
}
