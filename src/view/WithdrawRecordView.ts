import Res from "src/common/Res";
import Core from "src/core/index";

//export default class WithdrawRecordView extends Laya.Script {
export default class WithdrawRecordView extends Core.gameScript {
    /** @prop {name:list, tips:"列表", type:Node}*/
    private list: Laya.List;

    private dataList: WithdrawRecordData[];

    onOpened(e: WithdrawRecordData[]): void {
        e.sort((a, b) => b.time - a.time);
        this.dataList = e;
        this.list.array = e;
        this.list.renderHandler = new Laya.Handler(this, this.itemRender);
        this.list.vScrollBarSkin = null;
        (this.owner.getChildByName("empty_lb") as Laya.Label).visible = !e.length;
    }

    private itemRender(cell: Laya.Image, i: number) {
        const d = this.dataList[i];
        (
            cell.getChildByName("reward_box").getChildByName("amount") as Laya.Label
        ).text = `-${d.diamond}`;
        (cell.getChildByName("time") as Laya.Label).text = `${new Date(d.time).toLocaleString(
            "zh-CN",
            { hour12: false }
        )}`;
        (cell.getChildByName("state") as Laya.Label).text = `${d.state ? "审核中" : "已到账"}`;
        (cell.getChildByName("state") as Laya.Label).color = d.state ? "#E93636" : "#5A3F2A";
    }

    onClick(e: Laya.Event): void {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.WithdrawRecordView);
                break;
        }
    }
}
