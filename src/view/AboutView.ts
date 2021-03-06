import ConfigGame from "src/common/ConfigGame";
import { AppEventMap } from "src/common/EventMaps";
import Res from "src/common/Res";
import AppCore from "src/core/App";
import Core from "src/core/index";

// export default class AboutView extends Laya.Script {
export default class AboutView extends Core.gameScript {
    /** @prop {name:version, tips:"玩家名称", type:Node}*/
    private version: Laya.Label = null;
    /** @prop {name:channel, tips:"渠道", type:Node}*/
    private channel: Laya.Label = null;

    onOpened() {
        this.version.text = `版本号：V${ConfigGame.version}`;
        this.channel.text = `渠道号：${ConfigGame.channel}`;
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.AboutView);
                break;
            case "user_agreement":
                //用户协议
                AppCore.runAppFunction({ uri: AppEventMap.serviceAgreement, data: {} });
                break;
            case "privacy":
                //隐私政策
                AppCore.runAppFunction({ uri: AppEventMap.privacyAgreement, data: {} });
                break;
        }
    }
}
