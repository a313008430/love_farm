import Res from "src/common/Res";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import { ViewManager } from "src/core/ViewManager";

//  MailView extends Laya.Script {
export default class MailView extends GameScript {
    /** @prop {name:list, tips:"列表", type:Node}*/
    private list: Laya.List = null;

    private listData: MailReturnData[] = [];

    onHdAwake() {
        this.list.vScrollBarSkin = null;
        this.list.renderHandler = new Laya.Handler(this, this.renderItem);
        this.list.selectHandler = new Laya.Handler(this, this.renderItemSelect);
    }

    onOpened(list: MailReturnData[] = []) {
        this.listData = list;
        this.updateListData();
    }

    private updateListData() {
        this.list.array = this.listData.sort((a, b) => {
            return (a.read ? 100000 : 0 + b.createTime) - (b.read ? 100000 : 0 + a.createTime);
        });
    }

    private renderItemSelect(i) {
        Core.view.open(Res.views.MailDescView, {
            parm: {
                data: this.listData[i],
                call: () => {},
            },
        });
    }

    private renderItem(cell: Laya.Image, index: number) {
        const data = this.listData[index];
        (cell.getChildByName("title") as Laya.Label).text = "系统邮件";
        (
            cell.getChildByName("desc") as Laya.Label
        ).text = `${data.message}潜入菜地偷菜,被狗狗发现并追加回了~~`;
        (cell.getChildByName("time") as Laya.Label).text = `${new Date(
            data.createTime
        ).toLocaleString("zh-CN", { hour12: false })}`;
        cell.dataSource = data;
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                ViewManager.inst.close(Res.views.MailView);
                break;
        }
    }
}
