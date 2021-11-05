import Res from "src/common/Res";
import Core from "src/core/index";

//export default class FriendsView extends Laya.Script {
export default class FriendsView extends Core.gameScript {
    /** @prop {name:addBox, tips:"添加好友容器", type:Node}*/
    private addBox: Laya.Box;
    /** @prop {name:itemList, tips:"列表节点", type:Node}*/
    private itemList: Laya.List;

    /** 1是好友列表 2 加好友  3删除好友 */
    private viewState: 1 | 2 | 3 = 1;

    onOpened() {
        this.addBox.visible = false;
        this.addBox.active = false;
        this.itemList.array = new Array(20);
        this.itemList.renderHandler = new Laya.Handler(this, this.itemRender);
        this.itemList.vScrollBarSkin = null;
    }

    private itemRender(cell: Laya.Box, i: number) {
        let newBox = cell.getChildByName("new_box") as Laya.Box,
            heartBox = cell.getChildByName("heart_box") as Laya.Image,
            goPlayBtn = cell.getChildByName("go_play_btn") as Laya.Image,
            applyBtn = cell.getChildByName("apply_btn") as Laya.Image,
            delBtn = cell.getChildByName("del_btn") as Laya.Image;
        heartBox.visible = false;
        newBox.visible = false;
        newBox.active = false;
        goPlayBtn.visible = false;
        applyBtn.visible = false;
        delBtn.visible = false;

        switch (this.viewState) {
            case 1:
                goPlayBtn.visible = true;
                heartBox.visible = true;
                break;
            case 2:
                applyBtn.visible = true;
                break;
            case 3:
                heartBox.visible = true;
                delBtn.visible = true;
                break;
        }
    }

    onClick(e: Laya.Event) {
        console.log(e.target.name);
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.FriendsView);
                break;
            case "add_friend":
                if (this.viewState == 2) break;
                this.viewState = 2;
                this.addBox.visible = true;
                this.addBox.active = true;
                this.itemList.height = 590; //914
                this.itemList.refresh();
                break;
            case "del_friend":
                if (this.viewState == 3) break;
                this.addBox.visible = false;
                this.addBox.active = false;
                this.viewState = 3;
                this.itemList.height = 914;
                this.itemList.refresh();
                break;
            case "desc_btn":
                Core.view.open(Res.views.FriendsDescView);
                break;
            case "reward_btn":
                Core.view.open(Res.views.FriendsRewardView);
                break;
            default:
                break;
        }
    }
}
