import EventGlobal, { BindNameClass, EventClass } from "./EventGlobal";
import ObservableProperty from "./ObservableProperty";

/**
 * 组件
 */
export default class GameScript extends Laya.Script {
    constructor() {
        super();
        //EventOn装饰器事件绑定
        let bindEvent = EventClass.get(this.constructor.prototype);
        bindEvent && EventGlobal.on(bindEvent.key, this, bindEvent.fn);
    }

    /**
     * 此方法不要重写 使用 onHdAwake
     * @deprecated
     */
    onAwake() {
        //给装饰器记录的属性，查找节点
        BindNameClass.get(this.constructor.prototype)?.forEach((e) => {
            this[e] = this.owner.getChildByName(e);
        });
        this.onHdAwake();
    }
    /**
     * 组件被激活后执行，此时所有节点和组件均已创建完毕，次方法只执行一次
     * 此方法为虚方法，使用时重写覆盖即可
     */
    onHdAwake() {}

    /**
     * 此方法不要重写 使用 onHdEnable
     * @deprecated
     */
    onEnable() {
        this.onHdEnable();
    }

    /**
     * 组件被启用后执行，比如节点被添加到舞台后
     * 此方法为虚方法，使用时重写覆盖即可
     */
    onHdEnable() {}

    /**
     * 此方法不要重写 使用 onHdStart
     * @deprecated
     */
    onStart() {
        this.onHdStart();
    }
    /**
     * 第一次执行update之前执行，只会执行一次
     * 此方法为虚方法，使用时重写覆盖即可
     */
    onHdStart() {}

    /**
     * 此方法不要重写 使用 onHdUpdate
     * @deprecated
     */
    onUpdate() {
        this.onHdUpdate();
    }

    /**
     * 每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
     * 此方法为虚方法，使用时重写覆盖即可
     */
    onHdUpdate() {}

    /**
     * 此方法不要重写 使用 onHdDisable
     * @deprecated
     */
    onDisable() {
        this.onHdDisable();
    }

    /**
     * 组件被禁用时执行，比如从节点从舞台移除后
     * 此方法为虚方法，使用时重写覆盖即可
     */
    onHdDisable() {}

    /**
     * 此方法不要重写 使用 onHdDestroy
     * @deprecated
     */
    onDestroy() {
        EventGlobal.offAllCaller(this);
        this.onHdDestroy();
        Laya.timer.once(1, null, () => {
            //清除跟当前类绑定所有的属性观察方法
            ObservableProperty.removeByCaller(this);
            //销毁时清除所有的属性引用
            let keys = Object.getOwnPropertyNames(this);
            for (let x = 0, l = keys.length; x < l; x++) {
                this[keys[x]] = null;
            }
        });
    }

    /**
     * 手动调用节点销毁时执行
     * 此方法为虚方法，使用时重写覆盖即可
     */
    onHdDestroy() {}
}
