import Res from "src/common/Res";
import Core from "src/core/index";

//export default class FriendsDescView extends Laya.Script {
export default class FriendsDescView extends Core.gameScript {
    /** @prop {name:panelNode, tips:"滚动容器", type:Node}*/
    public panelNode: Laya.Panel;

    onHdAwake() {
        this.panelNode.vScrollBarSkin = null;
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.FriendsDescView);
                break;
        }
    }

    onHdDestroy() {
        Laya.loader.clearTextureRes("res/img_inviteBg1.png");
    }
}
