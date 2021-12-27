import { AppEventMap } from "src/common/EventMaps";
import Res from "src/common/Res";
import AppCore from "src/core/App";
import Core from "src/core/index";
import UserInfo from "src/dataService/UserInfo";

export interface HintViewData {
    /** 文字内容 */
    text: string;
    /** 确认回调 */
    call?: Function;
    /** 取消回调 */
    cancelCall?: Function;
}

//default class HintView extends Laya.Script
export default class HintView extends Core.gameScript {
    /** @prop {name:text, tips:"内容", type:Node}*/
    private text: Laya.Label;
    /** @prop {name:confirmBtn, tips:"确认按钮", type:Node}*/
    private confirmBtn: Laya.Image;
    /** @prop {name:cancelBtn, tips:"取消按钮按钮", type:Node}*/
    private cancelBtn: Laya.Image;

    private data: HintViewData;

    onOpened(d) {
        this.data = d;
        this.text.text = this.data?.text || "";
        if (this.data.call) {
            this.confirmBtn.visible = true;
        } else {
            this.confirmBtn.visible = false;
        }
        if (this.data.cancelCall) {
            this.cancelBtn.visible = true;
        } else {
            this.cancelBtn.visible = false;
        }

        if (this.data.call && this.data.cancelCall) {
            this.confirmBtn.x = 252;
        } else {
            this.confirmBtn.x = 458;
        }

        if (UserInfo.days > 5) {
            AppCore.runAppFunction({
                uri: AppEventMap.ad,
                data: { adType: 2 },
            });

            AppCore.runAppFunction({
                uri: AppEventMap.ad,
                data: { adType: 3 },
            });
        }
    }

    onHdAwake(): void {
        if (UserInfo.days > 5) {
            (this.owner.getChildByName("center") as Laya.Image).centerY = -310;
        }
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "cancel":
                if (this.data?.cancelCall) {
                    this.data.cancelCall();
                }
                Core.view.close(Res.views.HintView);
                break;
            case "confirm":
                if (this.data?.call) {
                    this.data.call();
                }
                Core.view.close(Res.views.HintView);
                break;
        }
    }

    onHdDestroy(): void {
        AppCore.runAppFunction({
            uri: AppEventMap.closeAd,
            data: {},
        });
    }
}
