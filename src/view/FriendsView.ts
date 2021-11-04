import Res from "src/common/Res";
import Core from "src/core/index";

//export default class FriendsView extends Laya.Script {
export default class FriendsView extends Core.gameScript {
    /** @prop {name:addBox, tips:"添加好友容器", type:Node}*/
    private addBox: Laya.Box;
    /** @prop {name:itemList, tips:"列表节点", type:Node}*/
    private itemList: Laya.List;

    /** 1是好友列表 2 加好友  3删除好友 */
    private viewState: number = 1;

    onOpened() {
        this.addBox.visible = false;
        this.addBox.active = false;
        this.itemList.array = new Array(20);
        this.itemList.renderHandler = new Laya.Handler(this, this.itemRender);
        this.itemList.vScrollBarSkin = null;
    }

    private itemRender(cell: Laya.Box, i: number) {
        let newBox = cell.getChildByName("new_box") as Laya.Box;
        newBox.visible = false;
        newBox.active = false;
    }

    onClick(e: Laya.Event) {
        console.log(e.target.name);
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.FriendsView);
                break;
            case "add_friend":
                break;
            default:
                break;
        }
    }
}
