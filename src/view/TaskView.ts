import Res from "../common/Res";
import UserInfo from "../dataService/UserInfo";
import EventGlobal, { EventOn } from "../core/EventGlobal";
import GameScript from "../core/GameScript";
import ObservableProperty from "../core/ObservableProperty";
import { ViewManager } from "../core/ViewManager";
import TableAnalyze from "src/common/TableAnalyze";
import Core from "src/core/index";

//  TaskView extends Laya.Script {
export default class TaskView extends GameScript {
    /** @prop {name:taskList, tips:"任务列表", type:Node}*/
    private taskList: Laya.List = null;

    onOpened() {
        this.taskList.array = TableAnalyze.table("task").list;
        this.taskList.renderHandler = new Laya.Handler(this, this.itemRender);
        this.taskList.vScrollBarSkin = null;
    }

    private itemRender(cell: Laya.Box, i: number) {
        let obj = TableAnalyze.table("task").list[i];
        (cell.getChildByName("icon") as Laya.Image).skin = obj.icon;
        (cell.getChildByName("title") as Laya.Label).text = obj.title;
        (cell.getChildByName("desc") as Laya.Label).text = obj.desc;

        const rewardBox = cell.getChildByName("reward") as Laya.Box;
        (rewardBox.getChildByName("icon") as Laya.Image).skin = obj.reward.obj.icon;
        (rewardBox.getChildByName("amount") as Laya.Label).text = "x" + obj.reward.count;

        const btn = cell.getChildByName("go_run") as Laya.Image;
        btn.dataSource = obj.id;
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                ViewManager.inst.close(Res.views.TaskView);
                break;
            case "go_run":
                this.jump(e.target["dataSource"]);
                break;
        }
    }

    private jump(id) {
        switch (id) {
            case 1001:
                break;
            case 1002:
                break;
            case 1003:
                break;
            case 1004:
                break;
            case 1005:
                break;
            case 1006:
                break;
            case 1007:
                break;
            case 1008:
                Core.view.close(Res.views.TaskView);
                Core.view.open(Res.views.WarehouseView);
                break;
            case 1009:
                break;
            case 1010:
                break;
            case 1011:
                break;
            case 1012:
                break;
        }
    }
}
