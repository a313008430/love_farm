import Res from "src/common/Res";
import Core from "src/core/index";

export interface GuideViewData {
    nodeList: Laya.Image[];
    call: Function;
}

//default class GuideView extends Laya.Script {
export default class GuideView extends Core.gameScript {
    //新手引导
    /** @prop {name:guideHand, tips:"新手引导手指", type:Node}*/
    private guideHand: Laya.Sprite = null;
    /** 文案 */
    /** @prop {name:descLb, tips:"描述文本", type:Node}*/
    private descLb: Laya.Label = null;

    private guidAni: Laya.TimeLine;

    private textList = [
        "您的钱包余额",
        "这里是集市,购买种了、狗浪的地方还有品重要的钱庄也在这里,提现的时候您会经常来的。",
        "这里是市扬订单,按要求完成后会自动进入下一级订单。",
        "土地升级在这里,士地等级超高,土地越肥沃，收获就越多",
        "这里是产库,收要的作物都存放在这里，出售作物也在这里。",
        "这里是您的农场。种植、收获都在这里,悄销告诉彻这块地收英的时候可能会产出洁石哦。",
        "这里可以去别人的农场转转,帮别人收收蓝,但是要小心狗狗哦。",
        "您的任务",
        "您的来信",
    ];

    private data: GuideViewData;
    private step: number = 0;

    onOpened(data: GuideViewData) {
        if (!data) return;
        if (!data.nodeList) data.nodeList = [];
        this.data = data;
        this.guidHandAni();
        this.updateStep();
    }

    private updateStep() {
        if (!this.textList[this.step]) {
            Core.view.close(Res.views.GuideView);
            return;
        }
        this.descLb.text = this.textList[this.step];
        this.step++;
    }

    onClick(e: Laya.Event) {
        this.updateStep();
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
        this.guidAni?.destroy();
    }
}
