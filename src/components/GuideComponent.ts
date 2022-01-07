import { EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import Core from "src/core/index";
import UserInfo from "src/dataService/UserInfo";
import MainView from "src/view/MainView";

export interface GuideComponentData {
    nodeList: Laya.Image[] | Laya.Box[];
    call: Function;
    addPos: { x: number; y: number };
    /** 要记录的步骤 */
    step?: number;
    /** 步骤文字描述 */
    text?: string;
    /** 文字位置 */
    testAddPos?: { x: number; y: number };
}

//default class GuideComponent extends Laya.Script {
export default class GuideComponent extends Core.gameScript {
    //新手引导
    /** @prop {name:guideHand, tips:"新手引导手指", type:Node}*/
    private guideHand: Laya.Sprite = null;
    /** @prop {name:descLb, tips:"描述文本", type:Node}*/
    private descLb: Laya.Label = null;
    /** @prop {name:nodeBox, tips:"node节点", type:Node}*/
    private nodeBox: Laya.Box = null;
    /** @prop {name:bg, tips:"背景", type:Node}*/
    private bg: Laya.Box = null;
    /** @prop {name:hintLb, tips:"文字提示", type:Node}*/
    private hintLb: Laya.Label = null;

    private canClick = true;

    private guidAni: Laya.TimeLine;
    private oldParent: Laya.Box;
    private oldZOrder: number;

    private data: GuideComponentData;

    onHdAwake() {
        this.updateState(false);
        this.guidHandAni();
        // this.bg.visible = false;
        // this.hintLb.visible = false;
    }

    /**
     * 更新新手引导步骤
     */
    @Core.eventOn(EventMaps.update_guid)
    updateStep(data: GuideComponentData) {
        if (!data) return;
        this.data = data;
        this.updateState(true);
        if (!data.addPos) data.addPos = { x: 0, y: 0 };
        const node = this.data.nodeList[0];
        this.oldZOrder = node.zOrder;
        this.oldParent = node.parent as Laya.Box;
        const pos = this.nodeBox.globalToLocal(
            this.oldParent.localToGlobal(new Laya.Point(node.x, node.y))
        );

        node.once(Laya.Event.CLICK, this, async () => {
            if (data.step != null) {
                await this.updateGuidData(data.step);
            }

            if (data.call) {
                data.call();
            }

            this.hintLb.visible = false;

            Laya.timer.once(
                1,
                this,
                (_node: Laya.Image, _p: Laya.Image) => {
                    if (_node && _p) {
                        if (_p.destroyed) {
                            _node.destroy();
                        } else {
                            const pos = _p.globalToLocal(
                                this.nodeBox.localToGlobal(new Laya.Point(_node.x, _node.y))
                            );

                            _p.addChild(_node);
                            _node.zOrder = 0;
                            _node.updateZOrder();
                            _node.pos(pos.x, pos.y);
                        }
                    }

                    switch (data.step) {
                        case 0:
                            MainView.inst.guide();
                            break;
                        case 2:
                            MainView.inst.guide();
                            break;
                        default:
                            break;
                    }
                },
                [node, this.oldParent]
            );
        });

        this.nodeBox.addChild(node);
        node.pos(pos.x, pos.y);

        Laya.Tween.to(
            this.guideHand,
            { x: pos.x + data.addPos.x, y: pos.y + data.addPos.y, alpha: 1 },
            300
        );
        if (data.text) {
            this.hintLb.visible = true;
            this.hintLb.text = data.text;
            this.hintLb.alpha = 0;
            this.hintLb.pos(pos.x + data.testAddPos.x, pos.y + data.testAddPos.y);
            Laya.timer.once(300, this, () => {
                Laya.Tween.to(
                    this.hintLb,
                    { x: pos.x + data.testAddPos.x + 50, y: pos.y + data.testAddPos.y, alpha: 1 },
                    300
                );
            });
        } else {
            this.hintLb.visible = false;
        }
    }

    /**
     * 记录新手引导
     * @param step
     * @returns
     */
    @Core.eventOn(EventMaps.update_guid_data)
    updateGuidData(step: number) {
        UserInfo.guideData[step] = "1";
        return HttpControl.inst
            .send({
                api: ApiHttp.guide,
                data: {
                    data: UserInfo.guideData.join(""),
                },
            })
            .then(() => {
                this.canClick = true;
            })
            .catch(() => {
                this.canClick = true;
            });
    }

    /**
     * 设置界面显示状态
     * @param show
     */
    updateState(show: boolean) {
        let node = this.owner as Laya.Box;
        node.visible = show;
        node.disabled = !show;
        node.active = show;
    }

    // onClick(e: Laya.Event) {
    //     console.log(e.target.name);
    //     if (!this.canClick) return;
    // }

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

    onHdDestroy(): void {
        this.guidAni?.pause();
        this.guidAni?.destroy();
    }
}
