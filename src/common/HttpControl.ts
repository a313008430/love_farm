import AppCore from "src/core/App";
import Core from "src/core/index";
import { Instance } from "src/core/Instance";
import LocalStorageService from "src/dataService/LocalStorageService";
import TaskService from "src/dataService/TaskService";
import UserInfo from "src/dataService/UserInfo";
import ConfigGame from "./ConfigGame";
import { AppEventMap } from "./EventMaps";
import HttpDataControl from "./HttpDataControl";
import { ApiHttp } from "./NetMaps";
import Res from "./Res";

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

    xhr: XMLHttpRequest;

    baseUrl: string = null;

    private sendData: HttpSendData;

    private backResolveEvent: Function;

    init(url: string) {
        this.baseUrl = url;
        if (this.xhr) return;
        // let xhr = new Laya.HttpRequest();

        // this.xhr.http.timeout = 10000; //超时时间
        // xhr.on(Laya.Event.COMPLETE, this, this.completeHandler);
        // xhr.on(Laya.Event.ERROR, this, this.errorHandler);
        // xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
        // xhr.send("res/data.data", "", "get", "text");

        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == 4) {
                switch (xmlhttp.status) {
                    case 200:
                        this.completeHandler(JSON.parse(xmlhttp.responseText));
                        break;
                    default:
                        if (xmlhttp.responseText)
                            this.completeHandler(JSON.parse(xmlhttp.responseText));
                        if (!xmlhttp.status) {
                            this.completeHandler({
                                code: 404,
                                data: { message: "服务器未响应，请重试" },
                                uri: "",
                            });
                        }
                        break;
                }
            }
        };

        this.xhr = xmlhttp;
    }

    async send(data: HttpSendData) {
        if (!data.method) data.method = "post";
        if (!data.responseType) data.responseType = "json";
        if (!data.baseUrl) data.baseUrl = this.baseUrl;

        this.sendData = data;

        // if (!data.data?.userId) {
        //     data.data.userId = UserInfo.uid;
        // }

        if (!data.headers) {
            data.headers = ["Authorization", `Bearer ${LocalStorageService.getJSON().token}`];
        }

        console.log(
            `%c ==> send %c${data.api} %c${JSON.stringify(data.data)}`,
            `color:#82ccdd;font-weight:700;`,
            `color:#eb4d4b;font-weight:700;`,
            `color:#f8c291;font-weight:700;`
        );

        // this.xhr.send(
        //     data.baseUrl + data.api,
        //     data.data,
        //     data.method,
        //     data.responseType,
        //     data.headers
        // );

        let uri = data.baseUrl + data.api;
        if (!data.api) {
            Core.view.open(Res.views.HintView, {
                parm: { text: `http 地址不能为空` },
            });
            return;
        }

        this.xhr.open("POST", uri, true);
        this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.setRequestHeader("Authorization", `Bearer ${LocalStorageService.getJSON().token}`);

        let sendData: string[] = [];
        if (data.data) {
            Object.keys(data.data).forEach((d) => {
                sendData.push(`${d}=${data.data[d]}`);
            });
            if (data.data?.type == ConfigGame.ApiTypeAD) {
                await AppCore.runAppFunction({
                    uri: AppEventMap.ad,
                    data: null,
                    timestamp: Date.now(),
                });
                TaskService.taskAddTimes(1001);
                TaskService.taskAddTimes(1012);
            }
        }

        this.xhr.send(sendData.join("&"));

        return new Promise((resolve) => {
            this.backResolveEvent = resolve;
        });
    }

    private completeHandler(e) {
        if (e.code) {
            if (this.sendData?.error) {
                this.sendData.error(e.code, e.data);
            }
            HttpDataControl.error(e.code, e.data);
            return console.error(e);
        } else {
            console.log(
                `%c <== back %c${this.sendData.api} `,
                `color:#b8e994;font-weight:700;`,
                `color:#78e08f;font-weight:700;`,
                e.data
            );
            HttpDataControl.forward({
                api: this.sendData.api,
                data: e.data,
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
