import { EventMaps } from "src/common/EventMaps";
import TableAnalyze from "src/common/TableAnalyze";
import { TaskBase } from "src/common/TableObject";
import { RedDotType } from "src/components/RedDotComponent";
import Core from "src/core/index";

export interface TaskDataObj {
    /** 任务id */
    id: number;
    /** 完成次数 */
    times: number;
    /** 是否领取奖励 0未领取 1已领取 */
    receive: number;
    /** 任务基础数据 */
    base: TaskBase;
}
/**
 * 任务数据
 */
class TaskService {
    list: TaskDataObj[] = [];

    init(d: NetInit["tasks"]) {
        d.forEach((e) =>
            this.list.push({
                id: e.id,
                times: e.times,
                receive: e.receive,
                base: TableAnalyze.table("task").get(e.id),
            })
        );
    }

    /**
     * 获取一个任务
     * @param id
     * @returns
     */
    getTask(id: number) {
        this.updateRedDot();
        for (let x = 0; x < this.list.length; x++) {
            if (this.list[x].id == id) {
                return this.list[x];
            }
        }
        return null;
    }

    /**
     * 获取任务列表
     * @returns
     */
    getList() {
        this.updateRedDot();
        return this.list.sort((a, b) => {
            let tA = this.getTask(a.id),
                tB = this.getTask(b.id);

            return (
                a.id +
                (tA?.receive ? 1000 : 1) +
                (tA?.times >= a.base.times ? 100 : 1000) -
                (b.id + (tB?.receive ? 1000 : 1) + (tB?.times >= b.base.times ? 100 : 1000))
            );
        });
    }

    /**
     * 任务添加次数
     */
    taskAddTimes(id: number) {
        let task = this.getTask(id);
        if (!task) {
            //默认不创建任务
            // task = { id: id, times: 0, receive: 0, base: TableAnalyze.table("task").get(id) };
            // this.list.push(task);

            return;
        }
        task.times++;
        Core.eventGlobal.event(EventMaps.update_task);
        this.updateRedDot();
    }

    /**
     * 更新红点
     */
    updateRedDot() {
        let hasReward = false;
        for (let x = 0; x < this.list.length; x++) {
            if (
                !this.list[x].receive &&
                this.list[x].times >= TableAnalyze.table("task").get(this.list[x].id).times
            ) {
                hasReward = true;
                break;
            }
        }
        Core.eventGlobal.event(EventMaps.update_red_dot, [RedDotType.task, hasReward]);
    }

    clear() {
        this.list.length = 0;
    }
}
export default new TaskService();
