export default class FigureAni extends Laya.Script {
    /** @prop {name:_x, tips:"终点坐标", type:type:String}*/
    private _x: string = "0";
    /** @prop {name:_y, tips:"终点坐标", type:type:String}*/
    private _y: string = "0";
    /** @prop {name:delay, tips:"延迟", type:type:String}*/
    private delay: string = "0";
    /** @prop {name:time, tips:"时间", type:type:String}*/
    private time: string = "10000";

    constructor() {
        super();
    }

    onEnable(): void {
        let node = this.owner as Laya.Animation;
        node.alpha = 0;
        let oldPos = { x: node.x, y: node.y };
        let delay = Number(this.delay);
        Laya.Tween.to(node, { alpha: 1 }, 600, null, null, delay);
        Laya.Tween.to(
            node,
            { x: this._x, y: this._y },
            Number(this.time),
            null,
            Laya.Handler.create(this, () => {
                node.pos(oldPos.x, oldPos.y);
                this.onEnable();
            }),
            delay
        );
    }

    onDisable(): void {}
}
