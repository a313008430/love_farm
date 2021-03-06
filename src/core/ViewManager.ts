import { EventMaps } from "src/common/EventMaps";
import FloatViewShowAni from "src/components/FloatViewShowAni";
import { HintViewData } from "src/view/HintView";
import OverView from "src/view/OverView";
import Res, { views } from "../common/Res";
import ViewShowAni from "../components/ViewShowAni";
import { Instance } from "./Instance";

/**
 * 打开界面需要带入的参数
 */
interface ViewOpenParm {
    /** 显示load界面 */
    showLoad?: boolean;
    /** 显示load界面延迟时间 */
    showLoadDelay?: number;
    /** 隐藏load界面延迟时间 默认0 */
    hideLoadDelay?: number;
    /** 是否关闭其他场景，默认为true（可选），【注意】被关闭的场景，如果没有设置autoDestroyAtRemoved=true，则资源可能不能被回收，需要自己手动回收
     * todo 现在这个调用的是引擎自带的方法，没有走这里的缓存，可能会有问题，后期优化
     * 现在全是false 后期有需要再优化这个东西，不能关闭其它所有界面还未实现
     */
    closeOther?: boolean;
    /** 打开页面的参数，会传递给onOpened方法（可选） */
    parm?: any;
    /**  打开页面的参数，会传递给onOpened方法（可选） */
    complete?: Function;
    /** 加载进度回调（可选） */
    progress?: Handler;
}

const viewMaps: { url: string; view: Laya.View }[] = [];

/**
 * 界面管理器
 */
export class ViewManager {
    @Instance
    static inst: ViewManager;

    loginOut() {
        viewMaps.forEach((v) => {
            v.view.getComponents(Laya.Script).forEach((e) => {
                //回头要优化一下其它界面的关闭，这里是不是有同样的问题
                Laya.timer.clearAll(e);
                e.destroy();
            });
            this.closeViewLog(v.view.url, true);
            v.view.destroy(true);
        });
        viewMaps.length = 0;
    }

    /**
     * 打开一个界面
     * @param url 界面地址 Res.views里的
     * @param data 参数
     */
    open(
        url: views,
        data: ViewOpenParm = {
            closeOther: false,
            showLoad: false,
            showLoadDelay: 100,
            hideLoadDelay: 0,
        }
    ): void {
        if (!url) {
            console.warn("miss path!");
            return;
        }

        if (data.showLoad) {
            Laya.View.showLoadingPage(null, data.showLoadDelay);
            if (url !== Res.views.LoginView) {
                Laya.timer.frameOnce(1, this, () => {
                    Laya.View.hideLoadingPage(data.hideLoadDelay);
                });
            }
        }

        data.closeOther = false;
        Laya.View.open(
            url,
            data.closeOther,
            data.parm,
            Laya.Handler.create(this, (e: Laya.View) => {
                if (url != Res.views.LoginView) viewMaps.push({ url: url, view: e });

                let conList = e.getComponents(Laya.Script);
                if (conList) {
                    conList.forEach((e) => e.enabled && e.onOpened && e.onOpened(data.parm));
                }
                data.complete && data.complete(e);
                console.log(
                    `%c ==> open %c${url.match(/\w+(?=\.)/)[0]} `,
                    `color:#7ed6df;font-weight:700;background-color:#dff9fb`,
                    `color:#22a6b3;font-weight:700;background-color:#dff9fb`
                );
            }),
            data.progress
        );
    }

    /**
     * 关闭视图
     * @param url 界面地址 Res.views里的
     * @param all 同一个界面被 多次打开，全删除用这个
     * @param destroy 销毁   TODO（默认会销毁所有子节点，未测试是否有问题）
     */
    async close(
        url: views,
        all: boolean = false,
        destroy: boolean = false,
        aniCom: typeof ViewShowAni | typeof FloatViewShowAni = ViewShowAni
    ) {
        //TODO 这里现在全部用destroy 引擎remove好像有点问题，再通过view.open会重新构建组件
        destroy = true;

        let vAni: ViewShowAni;
        for (let x = viewMaps.length - 1; x > -1; x--) {
            if (url === viewMaps[x].url) {
                let v = viewMaps[x];
                viewMaps.splice(x, 1);

                vAni = v.view.getComponent(aniCom as any);
                if (vAni) {
                    vAni.closeView().then(() => {
                        if (destroy) {
                            v.view.destroy(true);
                            this.closeViewLog(url, true);
                        } else {
                            v.view.removeSelf();
                            this.closeViewLog(url);
                        }
                    });
                } else {
                    if (destroy) {
                        v.view.destroy(true);
                        this.closeViewLog(url, true);
                    } else {
                        v.view.removeSelf();
                        this.closeViewLog(url);
                    }
                }

                //todo需要优化，界面的map需要整理成，全屏和弹窗的区别
                if (url === Res.views.HintView) return;

                if (!all) break;
            }
        }

        //保证如果场景完全没有界面被打开的时候，必打开主场景
        if (!viewMaps.length) return;
        let closeLen = 0;
        for (let x = viewMaps.length - 1; x > -1; x--) {
            if (!viewMaps[x].view.parent) {
                closeLen++;
            }
        }

        if (closeLen === viewMaps.length) {
            viewMaps.length = 0;
            this.open(Res.views.MainView);
        }

        console.log(viewMaps);
    }

    private closeViewLog(url: string, destroy: boolean = false) {
        console.log(
            `%c <== ${destroy ? "destroy" : "disable"} %c${url.match(/\w+(?=\.)/)[0]} `,
            `color:#ff7979;font-weight:700;background-color:#dff9fb`,
            `color:#eb4d4b;font-weight:700;background-color:#dff9fb`
        );
    }

    openHint(data: HintViewData) {
        this.open(Res.views.HintView, { parm: data });
    }

    /**
     * 清除缓存界面
     */
    clearViewMaps() {
        viewMaps.length = 0;
    }

    private overViewCom: OverView;

    /**
     * 打开关闭过度界面
     */
    setOverView(open: boolean, call?: Function) {
        if (open) {
            this.open(Res.views.OverView, {
                parm: {
                    call: (v: OverView) => {
                        this.overViewCom = v;
                        v.close(call);
                    },
                },
            });
        } else {
            if (this.overViewCom) {
                this.overViewCom.open(call);
            }
        }
    }
}
