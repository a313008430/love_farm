import GameScript from "src/core/GameScript";

//class ViewShowAni extends Laya.Script
export default class ViewShowAni extends GameScript {
    /** @prop {name:bg, tips:"背景", type:Node}*/
    public bg: Laya.Image = null;
    /** @prop {name:content, tips:"内容容器", type:Node}*/
    public content: Laya.Image = null;

    /** @prop {name:aniType,tips:"动画类型",type:EditOption,option:"bottomToShow,scaleShow"}*/
    // 返回字符串
    aniType: string;

    private tweenList: Laya.Tween[] = [];

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

        this.bg.alpha = 0;

        this.tweenList.push(
            Laya.Tween.to(
                this.bg,
                { alpha: 0.75 },
                100,
                null,
                Laya.Handler.create(this, this.doOpen, [dialog]),
                0,
                false,
                false
            )
        );

        switch (this.aniType) {
            case "scaleShow":
                this.content.scale(1, 1);
                this.tweenList.push(
                    Laya.Tween.from(
                        this.content,
                        { x: Laya.stage.width / 2, y: Laya.stage.height / 2, scaleX: 0, scaleY: 0 },
                        300,
                        Laya.Ease.backOut,
                        Laya.Handler.create(this, this.doOpen, [dialog]),
                        0,
                        false,
                        false
                    )
                );
                break;
            default:
                this.content.bottom = -this.content.height;
                this.tweenList.push(
                    Laya.Tween.to(
                        this.content,
                        { bottom: 0 },
                        300,
                        Laya.Ease.circOut,
                        Laya.Handler.create(this, this.doOpen, [dialog]),
                        0,
                        false,
                        false
                    )
                );
                break;
        }
    }

    closeView() {
        let dialog = this.owner as Laya.View;
        return new Promise((resolve) => {
            this.tweenList.push(
                Laya.Tween.to(
                    this.bg,
                    { alpha: 0 },
                    200,
                    null,
                    Laya.Handler.create(this, this.doOpen, [dialog]),
                    0,
                    false,
                    false
                )
            );
            switch (this.aniType) {
                case "scaleShow":
                    this.tweenList.push(
                        Laya.Tween.to(
                            this.content,
                            {
                                x: Laya.stage.width / 2,
                                y: Laya.stage.height / 2,
                                scaleX: 0.5,
                                scaleY: 0.5,
                                alpha: 0,
                            },
                            150,
                            null,
                            new Laya.Handler(
                                this,
                                () => {
                                    this.doClose();
                                    resolve(null);
                                },
                                [dialog]
                            ),

                            0,
                            false,
                            false
                        )
                    );
                    break;
                default:
                    this.tweenList.push(
                        Laya.Tween.to(
                            this.content,
                            { bottom: -this.content.height },
                            200,
                            null,
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
                        )
                    );
                    break;
            }
        });
    }

    onDisable(): void {
        this.tweenList.forEach((e) => {
            Laya.Tween.clear(e);
        });
        this.tweenList.length = 0;
    }
}
