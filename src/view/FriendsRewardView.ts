import Res from "src/common/Res";
import Core from "src/core/index";

//export default class FriendsRewardView extends Laya.Script {
export default class FriendsRewardView extends Core.gameScript {
    /** @prop {name:intType, tips:"整数类型示例", type:Int, default:1000}*/
    public intType: number = 1000;

    onOpened() {}

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.FriendsRewardView);
                break;
        }
    }

    onHdDestroy() {
        Laya.loader.clearTextureRes("res/img_inviteBg1.png");
    }
}