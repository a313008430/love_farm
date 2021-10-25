import { Instance } from "src/core/Instance";

/**
 * 短链接控制器
 */
export default class HttpControl {
    @Instance
    static inst: HttpControl;

    xhr: Laya.HttpRequest;

    init() {
        if (this.xhr) return;
        let xhr = new Laya.HttpRequest();
        // this.xhr.http.timeout = 10000; //超时时间
        xhr.once(Laya.Event.COMPLETE, this, this.completeHandler);
        xhr.once(Laya.Event.ERROR, this, this.errorHandler);
        xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
        // xhr.send("res/data.data", "", "get", "text");

        this.xhr = xhr;
    }

    send(url: string, data?: any, method?: string, responseType?: string, headers?: any[] | null) {
        this.xhr.send(url, data, method, responseType, headers);
    }

    private completeHandler() {}
    private errorHandler() {}
    private processHandler() {}
}
