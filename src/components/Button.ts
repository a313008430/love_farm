import Res from "src/common/Res";
import Core from "src/core/index";

export default class Button extends Laya.Script {
    /** @prop {name:defaultRes, tips:"资源",type:strings,accept:res}*/
    private defaultRes;
    /** @prop {name:downRes, tips:"资源",type:strings,accept:res}*/
    private downRes;
    /** @prop {name:isScale, tips:"是否缩放",type:Check}*/
    private isScale = false;
    /** @prop {name:scaleVal, tips:"缩放的值",type:Number, default:0.9}*/
    private scaleVal: number = 0.9;

    private oldScaleX: number;
    private oldScaleY: number;

    onEnable(): void {
        // (this.owner as Laya.Box).set_anchorX(0.5);
        // (this.owner as Laya.Box).set_anchorY(0.5);
        // console.log(this.isScale);
        (this.owner as Laya.Button).mouseEnabled = true;
        this.oldScaleX = (this.owner as Laya.Button).get_scaleX();
        this.oldScaleY = (this.owner as Laya.Button).get_scaleY();
    }

    onClick() {
        Core.audio.playSound(Res.audios.button_click);
    }

    onMouseDown() {
        this.setSkin(this.downRes);
        this.setAni(this.scaleVal);
    }

    onMouseOut() {
        this.setSkin(this.defaultRes);
        this.setAni(1);
    }
    onMouseUp() {
        this.setSkin(this.defaultRes);
        this.setAni(1);
    }

    private setAni(scale: number) {
        if (!this.isScale) return;
        Laya.Tween.to(
            this.owner,
            { scaleX: scale * this.oldScaleX, scaleY: scale * this.oldScaleY },
            300,
            Laya.Ease.backOut,
            null,
            0,
            false,
            false
        );
    }

    private setSkin(skin: string) {
        if (!skin) return;
        (this.owner as Laya.Image).skin = skin;
    }

    onDisable(): void {}
}
