export default class Button extends Laya.Script {
    /** @prop {name:defaultRes, tips:"资源",type:strings,accept:res}*/
    private defaultRes;
    /** @prop {name:downRes, tips:"资源",type:strings,accept:res}*/
    private downRes;
    /** @prop {name:isScale, tips:"是否缩放",type:Check}*/
    private isScale = false;
    /** @prop {name:scaleVal, tips:"缩放的值",type:Number, default:0.9}*/
    private scaleVal: number = 0.9;

    onEnable(): void {
        // console.log(this.isScale);
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
            { scaleX: scale, scaleY: scale },
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
