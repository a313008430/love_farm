import Res from "src/common/Res";
import Core from "src/core/index";

//  FieldComponent extends Laya.Script {
/**
 * 田地组件
 */
export default class FieldComponent extends Core.gameScript {
    /** 植物icon */
    @Core.findByName
    private icon: Laya.Image = null;
    /** 土地节点 */
    private fieldNode: Laya.Image = null;
    /** @prop {name:fieldEmptyRes, tips:"解锁后土地纹理", type:String,accept:res}*/
    private fieldEmptyRes: string = "";
    /** 等级box */
    private lvNode: Laya.Image = null;
    /** 等级label*/
    private lvLabel: Laya.FontClip = null;
    /** 倒计时容器*/
    private countDownBox: Laya.FontClip = null;
    /** 倒计时label */
    private countDownLabel: Laya.FontClip = null;
    /** 加速标识 */
    private addSpeedNode: Laya.Image = null;
    /** 成熟可收icon */
    private matureNode: Laya.Image = null;
    /** 可播种空地icon */
    private emptyFieldNode: Laya.Image = null;
    /** @prop {name:unlockIcon, tips:"拓展土地icon地址", type:String,accept:res}*/
    private unlockIcon: string = "";

    /** 土地id */
    fieldId: number = null;

    onHdAwake() {
        this.fieldNode = <Laya.Image>this.owner;
        // this.icon = <Laya.Image>this.owner.getChildByName("icon");
        console.log(this.icon);
        // this.lvNode.skin = this.unlockIcon;

        this.init();
    }

    init() {
        this.icon.skin = this.unlockIcon;
        // (this.owner.getChildByName("icon") as Laya.Image).skin = this.unlockIcon;
        // console.log(this.icon["$_GID"]);
        // this.fieldNode.skin = this.fieldEmptyRes;
        // console.log(this.fieldNode);
    }
}
