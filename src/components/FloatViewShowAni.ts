/**
 * 浮动弹窗动画
 */
export default class FloatViewShowAni extends Laya.Script {
    private effectTweenOpen: Laya.Tween = null;
    private effectTweenClose: Laya.Tween = null;

    /** @prop {name:content, tips:"内容容器", type:Node}*/
    public content: Laya.Image = null;

    constructor() {
        super();
    }

    /**
     * 打开后调用
     */
    doOpen() {}
    /**
     *  关闭成功后调用
     */
    doClose() {}

    onEnable(): void {
        let dialog = this.owner as Laya.View;
        this.content.scale(1, 1);
        // dialog.alpha = 0.6;
        this.effectTweenOpen = Laya.Tween.from(
            this.content,
            { x: Laya.stage.width / 2, y: Laya.stage.height / 2, scaleX: 0, scaleY: 0 },
            300,
            Laya.Ease.backOut,
            Laya.Handler.create(this, this.doOpen, [dialog]),
            0,
            false,
            false
        );
    }

    closeView() {
        let dialog = this.owner as Laya.View;
        return new Promise((resolve) => {
            this.effectTweenClose = Laya.Tween.to(
                this.content,
                { x: Laya.stage.width / 2, y: Laya.stage.height / 2, scaleX: 0, scaleY: 0 },
                300,
                Laya.Ease.strongOut,
                new Laya.Handler(
                    this,
                    () => {
                        this.doClose();
                        resolve(null);
                    },
                    [dialog]
                ),

                // Laya.Handler.create(
                //     this,
                //     () => {
                //         this.doClose();
                //         resolve(null);
                //     },
                //     [dialog]
                // ),
                0,
                false,
                false
            );
        });
    }

    onDisable(): void {
        this.effectTweenOpen && Laya.Tween.clear(this.effectTweenOpen);
        this.effectTweenOpen = null;
        this.effectTweenClose && Laya.Tween.clear(this.effectTweenClose);
        this.effectTweenClose = null;
    }
}
