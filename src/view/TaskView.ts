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
import { AppEventMap, EventMaps } from "src/common/EventMaps";
import { GetFloatRewardObj } from "./MainView";
import AppCore from "src/core/App";

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
        this.taskList.array = TaskService.getList();
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
                    //获取奖励
                    HttpControl.inst
                        .send({
                            api: ApiHttp.taskReward,
                            data: { type: ConfigGame.ApiTypeDefault, taskId: btnObj.id },
                        })
                        .then(() => {
                            const task = TaskService.getTask(btnObj.id);
                            task.receive = 1;
                            btnObj.ok = false;

                            Laya.timer.frameOnce(1, this, () => {
                                this.updateTaskList();
                                this.taskList.refresh();
                                Core.eventGlobal.event(EventMaps.update_task);
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
                        });
                } else {
                    this.jump(btnObj.id, e.target);
                }

                break;
        }
    }

    private async jump(id, target) {
        switch (id) {
            case 1012:
            case 1001:
                await AppCore.runAppFunction({
                    uri: AppEventMap.ad,
                    data: {},
                    timestamp: Date.now(),
                });
                HttpControl.inst
                    .send({
                        api: ApiHttp.ad,
                        data: {},
                    })
                    .then(() => {
                        Core.eventGlobal.event(EventMaps.play_ad_get_reward, target);
                        this.taskList.refresh();
                        TaskService.taskAddTimes(1001);
                        TaskService.taskAddTimes(1012);
                    });

                break;
            case 1002:
                await AppCore.runAppFunction({
                    uri: AppEventMap.ad,
                    data: {},
                    timestamp: Date.now(),
                });
                HttpControl.inst
                    .send({
                        api: ApiHttp.ad,
                        data: {
                            taskId: 1002,
                        },
                    })
                    .then(() => {
                        Core.eventGlobal.event(EventMaps.play_ad_get_reward, target);
                        this.taskList.refresh();
                        TaskService.taskAddTimes(1001);
                        TaskService.taskAddTimes(1012);
                        TaskService.taskAddTimes(1002);
                    });
                break;
            case 1003:
                Core.view.close(Res.views.TaskView);
                break;
            case 1004:
                Core.view.close(Res.views.TaskView);
                Core.eventGlobal.event(EventMaps.open_friend);
                break;
            case 1005:
                Core.view.close(Res.views.TaskView);
                Core.view.open(Res.views.ShopView, { parm: { id: 1 } });
                break;
            case 1006:
                Core.view.close(Res.views.TaskView);
                Core.view.open(Res.views.ShopView, { parm: { id: 1 } });
                break;
            case 1007:
                Core.view.close(Res.views.TaskView);
                Core.eventGlobal.event(EventMaps.plant_sow);
                break;
            case 1008:
                Core.view.close(Res.views.TaskView);
                Core.view.open(Res.views.WarehouseView);
                break;
            case 1009:
                Core.view.close(Res.views.TaskView);
                Core.eventGlobal.event(EventMaps.open_friend);
                break;
            case 1010:
                Core.view.close(Res.views.TaskView);
                Core.eventGlobal.event(EventMaps.open_friend, [1]);
                break;
            case 1011:
                Core.view.close(Res.views.TaskView);
                Core.eventGlobal.event(EventMaps.plant_sow);
                break;
        }
    }
}
