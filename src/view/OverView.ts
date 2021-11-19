import Res from "src/common/Res";
import Core from "src/core/index";

// export default class OverView extends Laya.Script {
export default class OverView extends Core.gameScript {
    /** @prop {name:leftBox, tips:"云左边", type:Node}*/
    leftBox: Laya.Box;
    /** @prop {name:rightBox, tips:"云左边", type:Node}*/
    rightBox: Laya.Box;

    onHdEnable() {}

    onOpened(data: { call: { (OverView): void } }) {
        // this.close();
        if (data?.call) {
            data.call(this);
        }
    }

    close(call: Function) {
        this.leftBox.x = -987;
        this.rightBox.x = 1025;
        this.leftBox.alpha = 0;
        this.rightBox.alpha = 0;
        Laya.Tween.to(this.leftBox, { x: 0, alpha: 1 }, 500);
        Laya.Tween.to(
            this.rightBox,
            { x: 0, alpha: 1 },
            500,
            null,
            Laya.Handler.create(this, () => {
                if (call) call();
            })
        );
    }

    open(call: Function) {
        Laya.Tween.to(this.leftBox, { x: -987, alpha: 0 }, 500);
        Laya.Tween.to(
            this.rightBox,
            { x: 1025, alpha: 0 },
            500,
            null,
            Laya.Handler.create(this, () => {
                if (call) call();
                Core.view.close(Res.views.OverView);
            })
        );
    }
}
