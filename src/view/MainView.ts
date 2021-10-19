import Res from "../common/Res";
import UserInfo from "../common/UserInfo";
import EventGlobal, { EventOn } from "../core/EventGlobal";
import GameScript from "../core/GameScript";
import ObservableProperty from "../core/ObservableProperty";
import { ViewManager } from "../core/ViewManager";

//  MainView extends Laya.Script {
export default class MainView extends GameScript {
    /** @prop {name:image, tips:"布尔类型示例", type:Node}*/
    public image: Laya.Label = null;
    /** @prop {name:shaderImage, tips:"shader用的图", type:Node}*/
    private shaderImage: Laya.Sprite = null;
    /** @prop {name:addLandBg, tips:"拓展土地的背景", type:Node}*/
    private addLandBg: Laya.Image = null;
    /** @prop {name:addLandLayer, tips:"拓展土地容器", type:Node}*/
    private addLandLayer: Laya.Box = null;

    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0

    onHdEnable(): void {
        this.addLandBg.alpha = 0.75;
        console.log(111);

        console.log(this.shaderImage);

        let a = 0;
        setInterval(() => {
            UserInfo.nickname = "1231231" + ++a;
            EventGlobal.event("aa", "asdfa");
            // if (a == 1) {
            //     EventGlobal.off("aa", this, this.myEvent);
            // }
        }, 1000);

        ObservableProperty.watch(UserInfo, this).key("nickname", (e) => {});
    }

    onClick(e: Laya.Event) {
        console.log(e.target.name);
        switch (e.target.name) {
            case "closeAddLandLayer":
                this.addLandLayer.visible = false;
                break;
            case "task":
                ViewManager.inst.open(Res.views.TaskView);
                break;
            case "signIn":
                ViewManager.inst.open(Res.views.SignInView);
                break;
            case "mail":
                ViewManager.inst.open(Res.views.MailView);
                break;
            case "shop":
                ViewManager.inst.open(Res.views.ShopView);
                break;
        }
    }
}
