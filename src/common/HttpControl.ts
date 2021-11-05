import Core from "src/core/index";
import { Instance } from "src/core/Instance";
import UserInfo from "src/dataService/UserInfo";
import HttpDataControl from "./HttpDataControl";
import { ApiHttp } from "./NetMaps";

interface HttpSendData {
    api: ApiHttp;
    data?: any;
    method?: string;
    responseType?: string;
    headers?: any[] | null;
    call?: Function;
    /** 错误回调 */
    error?: { (code: number, data: any): void };
    baseUrl?: string;
}

/**
 * 短链接控制器
 */
export default class HttpControl {
    @Instance
    static inst: HttpControl;

    xhr: Laya.HttpRequest;

    baseUrl: string = null;

    private sendData: HttpSendData;

    private backResolveEvent: Function;

    init(url: string) {
        this.baseUrl = url;
        if (this.xhr) return;
        let xhr = new Laya.HttpRequest();
        // this.xhr.http.timeout = 10000; //超时时间
        xhr.on(Laya.Event.COMPLETE, this, this.completeHandler);
        xhr.on(Laya.Event.ERROR, this, this.errorHandler);
        xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
        // xhr.send("res/data.data", "", "get", "text");

        this.xhr = xhr;
    }

    send(data: HttpSendData) {
        if (!data.method) data.method = "post";
        if (!data.responseType) data.responseType = "json";
        if (!data.baseUrl) data.baseUrl = this.baseUrl;

        this.sendData = data;

        if (!data.data?.userId) {
            data.data.userId = UserInfo.uid;
        }

        console.log(
            `%c ==> send %c${data.api} %c${JSON.stringify(data.data)}`,
            `color:#82ccdd;font-weight:700;`,
            `color:#eb4d4b;font-weight:700;`,
            `color:#f8c291;font-weight:700;`
        );

        this.xhr.send(
            data.baseUrl + data.api,
            data.data,
            data.method,
            data.responseType,
            data.headers
        );

        return new Promise((resolve) => {
            this.backResolveEvent = resolve;
        });
    }

    private completeHandler(e) {
        if (e.resultCode) {
            if (this.sendData?.error) {
                this.sendData.error(e.resultCode, e.result);
            }
            HttpDataControl.error(e.resultCode, e.result);
            return console.error(e);
        } else {
            console.log(
                `%c <== back %c${this.sendData.api} `,
                `color:#b8e994;font-weight:700;`,
                `color:#78e08f;font-weight:700;`,
                e.result
            );
            HttpDataControl.forward({
                api: this.sendData.api,
                data: e.result,
                call: this.sendData?.call,
                resolveEvent: this.backResolveEvent,
            });
        }
    }
    private errorHandler(e) {
        console.log(e);
    }
    private processHandler(e) {
        console.log(e);
    }
}
