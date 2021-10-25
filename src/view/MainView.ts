import { ApiHttp } from "src/common/NetMaps";
import Core from "src/core/index";
import Res from "../common/Res";
import UserInfo from "../common/UserInfo";

//  MainView extends Laya.Script {
export default class MainView extends Core.gameScript {
    /** @prop {name:addLandLayer, tips:"拓展土地容器", type:Node}*/
    private addLandLayer: Laya.Box = null;

    /** @prop {name:diamondNode, tips:"钻石节点", type:Node}*/
    private diamondNode: Laya.FontClip = null;
    /** @prop {name:goldNode, tips:"金币节点", type:Node}*/
    private goldNode: Laya.FontClip = null;
    /** @prop {name:avatarNode, tips:"头像节点", type:Node}*/
    private avatarNode: Laya.FontClip = null;

    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0

    onHdEnable(): void {
        Core.observableProperty
            .watch(UserInfo, this)
            .key("diamond", (e) => {
                this.diamondNode.value = e;
            })
            .key("gold", (e) => {
                this.goldNode.value = e;
            })
            .key("avatar", (e) => {
                this.avatarNode.skin = e;
            });
    }

    @Core.eventOn(ApiHttp.init)
    private gameInit(d: NetInit) {
        console.log(d);
        let a = d.data.landList;
    }

    onClick(e: Laya.Event) {
        console.log(e.target.name);
        switch (e.target.name) {
            case "closeAddLandLayer":
                this.addLandLayer.visible = false;
                break;
            case "task":
                Core.view.open(Res.views.TaskView);
                break;
            case "signIn":
                Core.view.open(Res.views.SignInView);
                break;
            case "mail":
                Core.view.open(Res.views.MailView);
                break;
            case "shop":
                Core.view.open(Res.views.ShopView);
                break;
        }
    }
}
