import { AppEventMap } from "src/common/EventMaps";
import { json } from "stream/consumers";
import Core from "./index";

export interface AppDespatchData {
    uri: AppEventMap;
    data: object;
    timestamp?: string | number;
}

export interface AppDespatchReturnData {
    /** 协议状态码 0 为正常 其它为错误码 */
    code: number;
    /** 协议uri */
    uri: AppEventMap;
    /** 返回具体的数据 */
    data: object;
    /** 标识 */
    timestamp?: string | number;
}

const EventMap: Map<string | number, Function> = new Map();

/**
 * web app 交互
 */
export default class AppCore {
    /**苹果类型 */
    static typeIos: number = 1;
    /**安卓类型 */
    static typeAndroid: number = 2;

    /**
     * 执行app交互方法
     * @param name 方法名称
     * @param data 传入数据
     */
    static runAppFunction(data?: AppDespatchData): Promise<AppDespatchReturnData | null> {
        return new Promise((resolve, reject) => {
            if (Laya.Browser.onIOS) {
                if (window["webRequest"]) {
                    window["webRequest"].postMessage(JSON.stringify(data));
                    if (data.timestamp) {
                        EventMap.set(data.timestamp, resolve);
                    }
                } else {
                    resolve(null);
                }
            } else {
                // alert(JSON.stringify(data));
                // alert(window && window["webRequest"]);
                if (window && window["webRequest"]) {
                    // return new Promise((resolve) => {
                    window["webRequest"](JSON.stringify(data));
                    // console.log(`send => ${data}`);
                    // alert(`send => ${JSON.stringify(data)}`);
                    if (data.timestamp) {
                        EventMap.set(data.timestamp, resolve);
                    }
                    // });
                } else {
                    // resolve(null); //如果写这个会成功，所以正常不通过应用，一些功能这里不让用，就注释
                    resolve(null);
                }
            }
        });
    }

    /**
     * 监听app 执行h5 接口
     */
    static listenAppFunction(): void {
        //监听手机关闭事件响应

        window["appResponse"] = (d: AppDespatchReturnData) => {
            // alert(`back ${JSON.stringify(d)}`);

            // Core.view.openHint({ text: JSON.stringify(d), call: () => {} });
            // alert(d?.timestamp);
            if (EventMap.has(d?.timestamp)) {
                EventMap.get(d.timestamp)(d);
            }
            console.log(d);
        };
    }
}
