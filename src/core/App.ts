export interface AppDespatchData {
    uri: string;
    data: object;
    timestamp?: string;
}

/**
 * web app 交互
 */
export default class AppCore {
    /**苹果类型 */
    static typeIos: number = 1;
    /**安卓类型 */
    static typeAndroid: number = 2;

    //===================>>> h5 访问 app 的方法 名称
    /** 关闭webview事件 */
    static ad: string = "ad";
    /** 关闭webview事件 */
    static closeWebView: string = "closeWebView";
    /** 扬声器开关控制 */
    static hornSwitchController: string = "hornSwitchController";
    /** app 执行关闭 webview的时候，h5主动调用这个方法，告诉app是否等待关闭 */
    static appCloseWebViewCall: string = "appCloseWebViewCall";

    /**
     * 执行app交互方法
     * @param name 方法名称
     * @param data 传入数据
     */
    static runAppFunction(name: string, data?: string): void {
        let webAppFunction;
        if (Laya.Browser.onIOS) {
            webAppFunction = this.detectionHasFunction(this.typeIos, name);
            if (webAppFunction) {
                // if (name == this.closeWebView) {
                //     //关闭webview特殊处理
                //     window["webkit"]["messageHandlers"][this.leaveChannel]["postMessage"](
                //         JSON.stringify({ status: 1 })
                //     ); //特殊处理需要先退出频道
                // }
                if (data) {
                    // webAppFunction['postMessage'](data);
                    console.log("run :" + name);
                    window["webkit"]["messageHandlers"][name]["postMessage"](data);
                } else {
                    window["webkit"]["messageHandlers"][name]["postMessage"](
                        JSON.stringify({ status: 1 })
                    );
                }
            }
        } else {
            webAppFunction = this.detectionHasFunction(this.typeAndroid, name);
            if (webAppFunction) {
                console.log(name);
                if (data) {
                    window["webRequest"][name](data);
                } else {
                    window["webRequest"][name]();
                }
            }
        }
    }

    /**
     * 判断app的方法是否存在
     * @param type 1 苹果 2安卓
     * @param name 方法名称
     */
    static detectionHasFunction(type: number, name: string): boolean {
        switch (type) {
            case this.typeIos:
                if (
                    window["webkit"] &&
                    window["webkit"]["messageHandlers"] &&
                    window["webkit"]["messageHandlers"][name]
                )
                    return true;
            case this.typeAndroid:
                if (window["webRequest"] && window["webRequest"][name]) return true;
        }
        return false;
    }

    /**
     * 监听app 执行h5 接口
     */
    static listenAppFunction(): void {
        //监听手机关闭事件响应
        window["appResponse"] = (d: AppDespatchData) => {};
    }
}
