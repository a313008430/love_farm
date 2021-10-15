import Res from "../common/Res";
import UserInfo from "../common/UserInfo";
import EventGlobal, { EventOn } from "../core/EventGlobal";
import GameScript from "../core/GameScript";
import ObservableProperty from "../core/ObservableProperty";
import { ViewManager } from "../core/ViewManager";

export default class MainView extends GameScript {
    /** @prop {name:image, tips:"布尔类型示例", type:Node}*/
    public image: Laya.Label = null;
    /** @prop {name:shaderImage, tips:"shader用的图", type:Node}*/
    private shaderImage: Laya.Sprite = null;

    // 更多参数说明请访问: https://ldc2.layabox.com/doc/?nav=zh-as-2-4-0

    onHdEnable(): void {
        console.log(this.shaderImage);

        let a = 0;
        setInterval(() => {
            UserInfo.nickname = "1231231" + ++a;
            EventGlobal.event("aa", "asdfa");
            // if (a == 1) {
            //     EventGlobal.off("aa", this, this.myEvent);
            // }
        }, 1000);

        ObservableProperty.watch(UserInfo, this).key("nickname", (e) => {
            this.image.text = e;
        });
    }

    onClick(e) {
        switch (e.target.name) {
            case "openTask":
                console.log("open task");
                ViewManager.inst.open(Res.views.TaskView);
                break;
        }
    }
}
