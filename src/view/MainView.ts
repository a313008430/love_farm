import { EventMaps } from "src/common/EventMaps";
import { ApiHttp } from "src/common/NetMaps";
import { Table } from "src/common/Table";
import TableAnalyze from "src/common/TableAnalyze";
import FieldComponent from "src/components/FieldComponent";
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
    /** @prop {name:landBox, tips:"土地容器", type:Node}*/
    private landBox: Laya.Box = null;

    /** 土地组件 列表 */
    private landList: FieldComponent[] = [];

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

        // console.log(TableAnalyze.table("order").list);

        this.addLandLayer.visible = false;
    }

    onHdAwake() {
        for (let x = 0; x < this.landBox.numChildren; x++) {
            this.landList.push(this.landBox.getChildAt(x).getComponent(FieldComponent));
        }

        this.landList.sort((a, b) => {
            return a.fieldId - b.fieldId;
        });

        Laya.timer.frameOnce(1, this, () => {
            Core.eventGlobal.event(EventMaps.update_field, {
                landList: [
                    {
                        //土地id对应的也是下标
                        id: 0,
                        //土地等级
                        lv: 1,
                        //正在生长的东西的id 种子id, 如果剩余时间为0，表示 已熟，前端自己去查对应可生产的东西，然后改变显示状态
                        productId: 1000,
                        //剩余时间 如果为0 就为成熟 单位秒
                        matureTimeLeft: 999,
                    },
                    {
                        //土地id对应的也是下标
                        id: 3,
                        //土地等级
                        lv: 9,
                        //正在生长的东西的id 种子id, 如果剩余时间为0，表示 已熟，前端自己去查对应可生产的东西，然后改变显示状态
                        productId: 1000,
                        //剩余时间 如果为0 就为成熟 单位秒
                        matureTimeLeft: 999,
                    },
                ],
            });

            for (let x = 0, l = this.landList.length; x < l; x++) {
                if (!this.landList[x].date) {
                    this.landList[x].showIcon(true);
                    break;
                }
            }
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
            case "land":
                break;
        }
    }
}
