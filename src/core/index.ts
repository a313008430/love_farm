import AudioControl from "./AudioControl";
import EventGlobal, { EventOn, FindByName } from "./EventGlobal";
import GameScript from "./GameScript";
import { Instance } from "./Instance";
import ObservableProperty from "./ObservableProperty";
import { ViewManager } from "./ViewManager";

const Core = {
    /** 对象属性绑定可监听变化 */
    observableProperty: ObservableProperty,
    /** 界面管理器 */
    view: ViewManager.inst,
    /** 引擎脚本组件 */
    gameScript: GameScript,
    /** 单例装饰器 */
    instance: Instance,
    /** 事件绑定 => 绑定到装饰器上 【只用在GameScript继承的子类身上】 */
    eventOn: EventOn,
    /** this.owner.getChildByName的省事写法 只能查找下一级【只用在GameScript继承的子类身上】 */
    findByName: FindByName,
    /** 全局事件 */
    eventGlobal: EventGlobal,
    /**音频 */
    audio: new AudioControl(),
};

export default Core;
