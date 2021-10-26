/**
 * 全局事件
 */
const EventGlobal = new Laya.EventDispatcher();

/**
 * 储存的需要绑定订阅事件的类的原型列表
 */
export const EventClass: Map<any, { key: string; fn: Function }> = new Map();

/**事件绑定 => 绑定到装饰器上 【只用在GameScript继承的子类身上】 */
export function EventOn(name: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        EventClass.set(target, { key: name, fn: descriptor.value });
    };
}

/**
 * 储存的需要绑定属性查找绑定名称的类列表
 */
export const BindNameClass: Map<any, string[]> = new Map();
export function FindByName(target: any, propertyKey: string) {
    //  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

    if (!BindNameClass.has(target)) {
        BindNameClass.set(target, []);
    }
    BindNameClass.get(target).push(propertyKey);
    // };
}

export default EventGlobal;
