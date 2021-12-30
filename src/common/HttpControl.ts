import AppCore from "src/core/App";
import Core from "src/core/index";
import { Instance } from "src/core/Instance";
import LocalStorageService from "src/dataService/LocalStorageService";
import TaskService from "src/dataService/TaskService";
import UserInfo from "src/dataService/UserInfo";
import ConfigGame from "./ConfigGame";
import { AppEventMap, EventMaps } from "./EventMaps";
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
    /** 发起请求前 */
    before?: Function;
}

/**
 * 短链接控制器
 */
export default class HttpControl {
    @Instance
    static inst: HttpControl;

    baseUrl: string = null;

    private sendData: { xhr: XMLHttpRequest; data: HttpSendData }[] = [];

    /** 事件列表 */
    private eventMap: Map<string, XMLHttpRequest> = new Map();

    init(url: string) {
        this.baseUrl = url;
    }

    /**
     *
     * @param resolve
     * @param reject
     * @param ad 是否是广告的数据协议
     * @returns
     */
    private createXhr(resolve: Function, reject: Function, ad: boolean) {
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == 4) {
                switch (xmlhttp.status) {
                    case 200:
                    case 201:
                        const data = JSON.parse(xmlhttp.responseText);
                        if (!data.code) {
                            if (ad) {
                                TaskService.taskAddTimes(1001);
                            }
                        }

                        this.completeHandler(data, resolve, reject, xmlhttp);
                        this.clearOneInEventMap(xmlhttp);
                        this.queueXhrEvent();
                        break;

                    default:
                        if (xmlhttp.responseText) {
                            let d = JSON.parse(xmlhttp.responseText);
                            if (d.statusCode) {
                                Core.view.openHint({
                                    text: `${xmlhttp.responseText} 请重试`,
                                    call: () => {},
                                });
                            } else {
                                // console.log(d);
                                d.code = 999;
                                this.completeHandler(d, resolve, reject, xmlhttp);
                            }
                            this.clearOneInEventMap(xmlhttp);
                            // reject();
                        }

                        if (!xmlhttp.status) {
                            this.completeHandler(
                                {
                                    code: 404,
                                    data: { message: "服务器未响应，请重试" },
                                    uri: "",
                                },
                                resolve,
                                reject,
                                xmlhttp
                            );
                            this.clearOneInEventMap(xmlhttp);
                            // reject();
                        }
                        this.queueXhrEvent();
                        break;
                }
            }
        };

        return xmlhttp;
    }

    /**
     * 删除队列事件
     * @param xml
     */
    private clearOneInEventMap(xml: XMLHttpRequest) {
        // Laya.timer.frameOnce(1, this, () => {
        this.eventMap.forEach((e, v) => {
            if (e == xml) {
                this.eventMap.delete(v);
            }
        });
        // });
    }

    /** 协议队列 */
    private xhrList: { xhr: XMLHttpRequest; data: string; sendData: HttpSendData }[] = [];

    async send(data: HttpSendData): Promise<any> {
        if (!data.method) data.method = "post";
        if (!data.responseType) data.responseType = "json";
        if (!data.baseUrl) data.baseUrl = this.baseUrl;

        let uri = data.baseUrl + data.api;

        let sendData: string[] = [];
        if (data.data) {
            Object.keys(data.data).forEach((d) => {
                sendData.push(`${d}=${data.data[d]}`);
            });
        }
        const sendDataString = sendData.join("&");

        if (this.eventMap.get(uri + sendDataString)) {
            return new Promise((resolve, reject) => {
                reject(null);
            });
        }

        let ad = false;
        if (data.data?.type == ConfigGame.ApiTypeAD) {
            const adData = await AppCore.runAppFunction({
                uri: AppEventMap.ad,
                data: {},
                timestamp: Date.now(),
            });
            if (adData?.code) {
                Core.view.openHint({
                    text: `${adData.data["message"]}[${adData.code}]`,
                    call: () => {},
                });
                return new Promise((resolve, reject) => {
                    reject(null);
                });
            } else {
                ad = true;
                UserInfo.adTimes++;

                if (UserInfo.days > 1) {
                    if (adData?.data["hasClicked"]) {
                        UserInfo.continuousAdTimes = 0;
                    } else {
                        UserInfo.continuousAdTimes++;
                    }
                    Laya.timer.once(100, this, () => {
                        HttpControl.inst.send({
                            api: ApiHttp.adRecordNotClick,
                            data: { times: UserInfo.continuousAdTimes },
                        });
                    });
                }
            }
        }

        return new Promise(async (resolve, reject) => {
            const xhr = this.createXhr(resolve, reject, ad);

            this.eventMap.set(uri + sendDataString, xhr);

            this.sendData.push({ xhr: xhr, data: data });

            if (data?.before) {
                data.before();
            }

            if (!data.headers) {
                data.headers = ["Authorization", `Bearer ${LocalStorageService.getJSON().token}`];
            }

            if (!data.api) {
                Core.view.open(Res.views.HintView, {
                    parm: { text: `http 地址不能为空` },
                });
                return reject(null);
            }

            xhr.open("POST", uri, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            // xhr.setRequestHeader("Content-type", "application/json");
            xhr.setRequestHeader("Authorization", `Bearer ${LocalStorageService.getJSON().token}`);

            this.xhrList.push({ xhr: xhr, data: sendDataString, sendData: data });
            if (this.xhrList.length > 1) {
                return;
            }
            this.queueXhrEvent(true);
        });
    }

    private queueXhrEvent(first: boolean = false) {
        if (!first) this.xhrList.splice(0, 1);
        if (this.xhrList.length) {
            console.log(
                `%c ==> send %c${this.xhrList[0].sendData.api} %c${JSON.stringify(
                    this.xhrList[0].sendData.data
                )}`,
                `color:#82ccdd;font-weight:700;`,
                `color:#eb4d4b;font-weight:700;`,
                `color:#f8c291;font-weight:700;`
            );

            this.xhrList[0].xhr.send(this.xhrList[0].data);
        }
    }

    private completeHandler(e, resolve: Function, reject: Function, xhr) {
        // TODO 临时处理方法，这里的队列 没有处理好，消息体回来，会覆盖之前的协议，
        let curData: HttpSendData;
        for (let x = 0; x < this.sendData.length; x++) {
            if (this.sendData[x].xhr == xhr) {
                curData = this.sendData[x].data;
                this.sendData.slice(x, 1);
                break;
            }
        }
        if (e.code) {
            reject(e.code);
            if (curData?.error) {
                curData.error(e.code, e.data);
            }
            HttpDataControl.error(e.code, e.data);
            return console.error(e);
        } else {
            let api = curData.api;
            console.log(
                `%c <== back %c${api} `,
                `color:#b8e994;font-weight:700;`,
                `color:#78e08f;font-weight:700;`,
                e.data
            );
            if (e.code === 0) {
                HttpDataControl.forward({
                    api: api,
                    data: e.data,
                    resolveEvent: resolve,
                });
            }
        }
    }
    private errorHandler(e) {
        console.log(e);
    }
    private processHandler(e) {
        console.log(e);
    }
}
