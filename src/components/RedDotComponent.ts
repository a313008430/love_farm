import { EventMaps } from "src/common/EventMaps";
import Core from "src/core/index";

export const enum RedDotType {
    task = "task",
    friend = "friend",
    mail = "mail",
    anyDoor = "anyDoor",
    order = "order",
}

// export default class RedDotComponent extends Laya.Script {
export default class RedDotComponent extends Core.gameScript {
    /** @prop {name:redDotType, tips:"布尔类型示例", type:EditOption, option:"task,friend,mail,anyDoor,order"}*/
    redDotType: string;

    onHdAwake(): void {
        let node = this.owner as Laya.Image;
        node.visible = false;
        node.anchorX = 0.5;
        node.anchorY = 0.5;
    }

    @Core.eventOn(EventMaps.update_red_dot)
    private updateRedDot(type: string, show: boolean) {
        if (this.redDotType == type) {
            let node = this.owner as Laya.Image;
            if (show) {
                if (!node.visible) {
                    node.scale(0, 0);
                    node.y -= 40;
                    Laya.Tween.clearAll(node);
                    Laya.Tween.to(
                        node,
                        { scaleX: 1, scaleY: 1 },
                        300,
                        Laya.Ease.backOut,
                        new Laya.Handler(this, () => {
                            Laya.Tween.to(
                                node,
                                { y: node.y + 40 },
                                300,
                                Laya.Ease.backOut,
                                null,
                                200
                            );
                        })
                    );
                }
                node.visible = show;
            } else {
                if (node.visible)
                    Laya.Tween.to(
                        node,
                        { scaleX: 0, scaleY: 0 },
                        300,
                        Laya.Ease.backIn,
                        new Laya.Handler(this, () => {
                            node.visible = show;
                        })
                    );
            }
        }
    }
}
