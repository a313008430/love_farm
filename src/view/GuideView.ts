import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import Core from "src/core/index";
import UserInfo from "src/dataService/UserInfo";

export interface GuideViewData {
    nodeList: Laya.Image[];
    call: Function;
}

//default class GuideView extends Laya.Script {
export default class GuideView extends Core.gameScript {
    //新手引导
    /** @prop {name:guideHand, tips:"新手引导手指", type:Node}*/
    private guideHand: Laya.Sprite = null;
    /** @prop {name:descLb, tips:"描述文本", type:Node}*/
    private descLb: Laya.Label = null;
    /** @prop {name:nodeBox, tips:"描述文本", type:Node}*/
    private nodeBox: Laya.Box = null;

    private guidAni: Laya.TimeLine;
    private oldParent: Laya.Box;
    private oldZOrder: number;

    private textList = [
        "您的钱包余额",
        "这里是市扬订单,按要求完成后会自动进入下一级订单。",
        "这里是仓库,收获的作物都存放在这里，出售作物也在这里。",
        "这里是集市,购买种子、狗粮的地方还有最重要的钱庄也在这里,提现的时候您会经常来的。",
        "土地升级在这里,土地等级越高,越肥沃，收获就越多。",
        "这里是您的农场。种植、收获都在这里,悄悄告诉你这块地收获的时候可能会产出钻石哦。",
        "您的任务",
        "您的信件",
        "这里可以去别人的农场转转,帮别人收的菜都归您,但是要小心狗狗哦。",
    ];

    private data: GuideViewData;
    private step: number = 0;
    private userStep: string[];

    onOpened(data: GuideViewData) {
        if (!data) return;
        if (!data.nodeList) data.nodeList = [];
        this.data = data;
        this.guideHand.alpha = 0;
        this.userStep = UserInfo.guideData.split("");
        if (!this.userStep.length) {
            this.step = 0;
        } else {
            for (let x = 0; x < 9; x++) {
                if (!this.userStep[x] || this.userStep[x] == "0") {
                    this.step = x;
                    break;
                }
            }
        }

        this.guidHandAni();
        this.updateStep();
    }

    private updateStep() {
        let pos: Laya.Point;
        const preNode = this.data.nodeList[this.step - 1];

        if (preNode && this.oldParent) {
            pos = this.oldParent.globalToLocal(
                this.nodeBox.localToGlobal(new Laya.Point(preNode.x, preNode.y))
            );
            this.oldParent.addChildAt(preNode, this.oldZOrder);
            preNode.pos(pos.x, pos.y);
        }

        if (!this.textList[this.step]) {
            Core.view.close(Res.views.GuideView);
            return;
        }

        const node = this.data.nodeList[this.step];
        this.oldZOrder = node.zOrder;
        this.oldParent = node.parent as Laya.Box;
        pos = this.nodeBox.globalToLocal(
            this.oldParent.localToGlobal(new Laya.Point(node.x, node.y))
        );

        this.nodeBox.addChild(node);
        node.pos(pos.x, pos.y);

        this.guideHand.scaleX = 1;
        const textPosAdd: Laya.Point = new Laya.Point();
        switch (this.step) {
            case 0:
                pos.x += 200;
                pos.y += 150;
                textPosAdd.setTo(-100, 80);
                break;
            case 1:
                pos.x += 200;
                pos.y += 250;
                textPosAdd.setTo(-300, 80);
                break;
            case 2:
                pos.x += 200;
                pos.y += 250;
                textPosAdd.setTo(-200, 80);
                break;
            case 3:
                pos.x += -100;
                pos.y += 250;
                this.guideHand.scaleX = -1;
                textPosAdd.setTo(-400, 80);
                break;
            case 4:
                pos.x += 200;
                pos.y += 250;
                textPosAdd.setTo(-200, 80);
                break;
            case 5:
                pos.x += 600;
                pos.y += 450;
                textPosAdd.setTo(-200, 80);
                break;
            case 6:
                pos.x += 160;
                pos.y += 100;

                textPosAdd.setTo(-200, -280);
                break;
            case 7:
                pos.x += 160;
                pos.y += 100;
                textPosAdd.setTo(-200, -280);
                break;
            case 8:
                pos.x += 140;
                pos.y += 100;
                textPosAdd.setTo(-560, -380);
                break;
        }
        Laya.Tween.to(this.guideHand, { x: pos.x, y: pos.y, alpha: 1 }, 300);
        this.descLb.alpha = 0;
        Laya.Tween.to(this.descLb, { alpha: 1 }, 150);
        this.descLb.pos(pos.x + textPosAdd.x, pos.y + textPosAdd.y);
        this.descLb.text = this.textList[this.step];
        this.step++;
    }

    private canClick = true;
    onClick(e: Laya.Event) {
        if (!this.canClick) return;
        this.canClick = false;
        this.userStep[this.step] = "1";
        HttpControl.inst
            .send({
                api: ApiHttp.guide,
                data: {
                    data: this.userStep.join(""),
                },
            })
            .then(() => {
                this.updateStep();
                this.canClick = true;
            })
            .catch(() => {
                this.canClick = true;
            });
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
