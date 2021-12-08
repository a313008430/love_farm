import Res from "src/common/Res";
import Core from "src/core/index";

export interface GuideViewData {
    node: Laya.Image;
    call: Function;
}

//default class GuideView extends Laya.Script {
export default class GuideView extends Core.gameScript {
    //新手引导
    /** @prop {name:guideHand, tips:"新手引导手指", type:Node}*/
    private guideHand: Laya.Sprite = null;

    private guidAni: Laya.TimeLine;

    onOpened(data: GuideViewData) {
        this.guidHandAni();
    }

    onClick(e: Laya.Event) {
        Core.view.close(Res.views.GuideView);
        switch (e.target.name) {
            default:
                break;
        }
    }

    /**
     * 新手引导手指动画
     */
    private guidHandAni() {
        this.guidAni = Laya.TimeLine.to(this.guideHand, { rotation: -15 }, 400, null).to(
            this.guideHand,
            { rotation: 0 },
            400
        );
        this.guidAni.play(null, true);
    }

    onHdDisable() {
        this.guidAni.destroy();
    }
}
