const callers: Map<any, Function[]> = new Map();

class ObservableControl<call extends Laya.Script> {
    private keyEvents: Map<any, Map<string, Function[]>> = new Map();

    /**
     * 监听属性值变化
     *  [在界面destroy的时候会自己注销监听]
     * @param Obj 需要监听的对象
     */
    watch<T extends {}>(Obj: T, caller: call) {
        if (!callers.has(caller)) {
            callers.set(caller, []);
        }

        let keyEvent = this.keyEvents;
        if (!keyEvent.has(Obj)) {
            keyEvent.set(Obj, new Map());
        }

        /**
         * 需要监听变化的属性事件
         * @param key 需要监听的属性
         * @param call 回调
         */
        const keyBind = <Key extends keyof T>(key: Key & string, call: Function) => {
            let _obj = keyEvent.get(Obj);
            if (!_obj.has(key)) {
                _obj.set(key, []);
                if (Obj["#" + key] == undefined) {
                    Obj["#" + key] = Obj[key];
                    Object.defineProperty(Obj, key, {
                        configurable: false,
                        enumerable: false,
                        set: (v) => {
                            this["#" + key] = v;
                            _obj.get(key).forEach((e) => {
                                e(v);
                            });
                        },
                        get: function () {
                            return this["#" + key];
                        },
                    });
                }
            }
            // call.bind(call);
            _obj.get(key).push(call);
            callers.get(caller).push(call);
            call(Obj[key]);
            return { key: keyBind };
        };

        return { key: keyBind };
    }

    /**
     * 通过传入的caller删除当前绑定的所有的事件 或指定解决模个对象跟当前caller绑定的监听
     * @param caller 监听时绑定的场景对象
     * @param obj 监听的对象
     */
    removeByCaller(caller: call, obj: any = null) {
        callers.get(caller)?.forEach((e) => {
            if (obj) {
                this.keyEvents?.get(obj).forEach((ev) => {
                    let indexOf = ev.indexOf(e);
                    if (indexOf > -1) ev.splice(indexOf, 1);
                });
            } else {
                this.keyEvents?.forEach((k) => {
                    k.forEach((ev) => {
                        let indexOf = ev.indexOf(e);
                        if (indexOf > -1) ev.splice(indexOf, 1);
                    });
                });
            }
        });
    }
}

/**
 * 对象属性绑定可监听变化
 */
export default new ObservableControl();
