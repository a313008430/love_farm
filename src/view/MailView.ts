import Heartbeat from "src/common/Heartbeat";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import { ViewManager } from "src/core/ViewManager";

//  MailView extends Laya.Script {
export default class MailView extends GameScript {
    /** @prop {name:list, tips:"列表", type:Node}*/
    private list: Laya.List = null;

    /** @prop {name:empty_lb, tips:"空的提示", type:Node}*/
    private empty_lb: Laya.Image = null;

    private listData: MailReturnData[] = [];

    onHdAwake() {
        this.list.vScrollBarSkin = null;
        this.list.renderHandler = new Laya.Handler(this, this.renderItem);
    }

    onOpened(list: MailReturnData[] = []) {
        this.listData = list;
        this.updateListData();
    }

    private updateListData() {
        this.list.array = this.listData.sort((a, b) => {
            // return (a.read ? 0 : 100000 + b.createTime) - (b.read ? 0 : 100000 + a.createTime);
            return b.createTime - (b.read ? 1000000 : 0) - (a.createTime - (a.read ? 1000000 : 0));
        });

        this.empty_lb.visible = !this.list.array.length;
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

        (cell.getChildByName("read_icon") as Laya.Image).visible = !data.read;

        cell.dataSource = data;
    }

    onClick(e: Laya.Event) {
        if (e.target.name.indexOf("item") > -1) {
            HttpControl.inst
                .send({
                    api: ApiHttp.mailRead,
                    data: {
                        id: e.target["dataSource"].id,
                    },
                })
                .then(() => {
                    e.target["dataSource"].read = 1;
                    this.list.refresh();
                    Heartbeat.updateMsg();
                    Core.view.open(Res.views.MailDescView, {
                        parm: {
                            data: e.target["dataSource"],
                            call: (mailId: number) => {
                                for (let x = 0; x < this.listData.length; x++) {
                                    if (this.listData[x].id == mailId) {
                                        this.listData.splice(x, 1);
                                        break;
                                    }
                                }
                                this.list.refresh();
                            },
                        },
                    });
                });
        }

        switch (e.target.name) {
            case "close":
                ViewManager.inst.close(Res.views.MailView);
                break;
        }
    }
}
