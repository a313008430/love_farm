import Res from "../common/Res";
import UserInfo from "../dataService/UserInfo";
import EventGlobal, { EventOn } from "../core/EventGlobal";
import GameScript from "../core/GameScript";
import ObservableProperty from "../core/ObservableProperty";
import { ViewManager } from "../core/ViewManager";
import TableAnalyze from "src/common/TableAnalyze";
import Core from "src/core/index";
import TaskService from "src/dataService/TaskService";
import ConfigGame from "src/common/ConfigGame";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import { EventMaps } from "src/common/EventMaps";
import { GetFloatRewardObj } from "./MainView";

interface ButtonObj {
    /** 任务id */
    id: number;
    /** 是否完成 */
    ok: boolean;
}

//  TaskView extends Laya.Script {
export default class TaskView extends GameScript {
    /** @prop {name:taskList, tips:"任务列表", type:Node}*/
    private taskList: Laya.List = null;

    onOpened() {
        this.updateTaskList();
        this.taskList.renderHandler = new Laya.Handler(this, this.itemRender);
        this.taskList.vScrollBarSkin = null;
    }

    updateTaskList() {
        let list = TaskService.list;
        list.sort((a, b) => {
            let tA = TaskService.getTask(a.id),
                tB = TaskService.getTask(b.id);

            return (
                a.id +
                (tA?.receive ? 1000 : 1) +
                (tA?.times >= a.times ? 100 : 1000) -
                (b.id + (tB?.receive ? 1000 : 1) + (tB?.times >= b.times ? 100 : 1000))
            );
        });
        this.taskList.array = list;
    }

    private itemRender(cell: Laya.Box, i: number) {
        let obj = TaskService.list[i].base;
        const task = TaskService.getTask(obj.id);
        (cell.getChildByName("icon") as Laya.Image).skin = obj.icon;
        (cell.getChildByName("title") as Laya.Label).text = obj.title;

        (cell.getChildByName("desc") as Laya.Label).text = `${obj.desc}(${
            (task?.times > obj.times ? obj.times : task?.times) || 0
        }/${obj.times})`;

        const rewardBox = cell.getChildByName("reward") as Laya.Box;
        (rewardBox.getChildByName("icon") as Laya.Image).skin = obj.reward.obj.icon;
        (rewardBox.getChildByName("amount") as Laya.Label).text = "x" + obj.reward.count;

        const btn = cell.getChildByName("go_run") as Laya.Image;

        const btnObj: ButtonObj = {
            id: obj.id,
            ok: false,
        };

        //已领取
        if (task?.receive) {
            btn.skin = "game/img_tomarow.png";
            btn.active = false;
            btn.disabled = true;
        } else {
            btn.active = true;
            btn.disabled = false;
            //可领取
            if (task?.times >= obj.times) {
                btn.skin = "game/img_get.png";
                btnObj.ok = true;
            } else {
                btn.skin = "game/img_done.png";
            }
        }

        btn.dataSource = btnObj;
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                ViewManager.inst.close(Res.views.TaskView);
                break;
            case "go_run":
                let btnObj: ButtonObj = e.target["dataSource"];

                if (btnObj.ok) {
                    HttpControl.inst.send({
                        api: ApiHttp.taskReward,
                        data: { type: ConfigGame.ApiTypeAD, taskId: btnObj.id },
                        call: (d: { gold: 0; diamond: 0; advertiseTimes: 0 }) => {
                            const task = TaskService.getTask(btnObj.id);
                            task.receive = 1;
                            btnObj.ok = false;

                            Laya.timer.frameOnce(1, this, () => {
                                this.updateTaskList();
                                this.taskList.refresh();
                            });
                            Core.eventGlobal.event(EventMaps.play_get_reward, <GetFloatRewardObj>{
                                node: e.target,
                                list: [
                                    {
                                        obj: task.base.reward.obj,
                                        count: task.base.reward.count,
                                        posType: 2,
                                    },
                                ],
                            });
                        },
                    });
                } else {
                    this.jump(btnObj.id);
                }

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
