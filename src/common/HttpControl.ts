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

    private sendData: HttpSendData;

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
                                TaskService.taskAddTimes(1012);
                            }
                        }

                        this.completeHandler(data, resolve, reject);
                        this.clearOneInEventMap(xmlhttp);
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
                                this.completeHandler(d, resolve, reject);
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
                                reject
                            );
                            this.clearOneInEventMap(xmlhttp);
                            // reject();
                        }
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
        Laya.timer.frameOnce(1, this, () => {
            this.eventMap.forEach((e, v) => {
                if (e == xml) {
                    this.eventMap.delete(v);
                }
            });
        });
    }

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

                if (adData?.data["hasClicked"]) {
                    UserInfo.continuousAdTimes = 0;
                } else {
                    UserInfo.continuousAdTimes++;
                }
                HttpControl.inst.send({
                    api: ApiHttp.adRecordNotClick,
                    data: { times: UserInfo.continuousAdTimes },
                });
            }
        }

        return new Promise(async (resolve, reject) => {
            const xhr = this.createXhr(resolve, reject, ad);

            this.sendData = data;

            if (data?.before) {
                data.before();
            }

            if (!data.headers) {
                data.headers = ["Authorization", `Bearer ${LocalStorageService.getJSON().token}`];
            }

            console.log(
                `%c ==> send %c${data.api} %c${JSON.stringify(data.data)}`,
                `color:#82ccdd;font-weight:700;`,
                `color:#eb4d4b;font-weight:700;`,
                `color:#f8c291;font-weight:700;`
            );

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

            xhr.send(sendDataString);

            this.eventMap.set(uri + sendDataString, xhr);
        });
    }

    private completeHandler(e, resolve: Function, reject: Function) {
        if (e.code) {
            reject(e.code);
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
            if (e.code === 0) {
                HttpDataControl.forward({
                    api: this.sendData.api,
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
