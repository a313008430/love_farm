import { EventMaps } from "src/common/EventMaps";
import Res from "src/common/Res";
import Tools from "src/common/Tools";
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
    @Core.findByName
    private fieldNode: Laya.Image = null;
    /** 有植物时的阴影 */
    @Core.findByName
    private shadow: Laya.Image = null;
    /** @prop {name:fieldEmptyRes, tips:"解锁后土地纹理", type:String,accept:res}*/
    private fieldEmptyRes: string = "";
    /** 等级图片 */
    @Core.findByName
    private lvNode: Laya.Image = null;
    /** 倒计时容器*/
    @Core.findByName
    private timeBox: Laya.FontClip = null;
    /** 倒计时label */
    private countDownLb: Laya.Label = null;
    /** 顶部icon装饰 */
    @Core.findByName
    private topStateIcon: Laya.Image = null;
    /** 成熟可收icon */
    private matureNode: Laya.Image = null;
    /** 可播种空地icon */
    private emptyFieldNode: Laya.Image = null;
    /** @prop {name:unlockIcon, tips:"拓展土地icon地址", type:String,accept:res}*/
    private unlockIcon: string = "";
    /** @prop {name:fieldId, tips:"土地下标", type:Number,}*/
    /** 土地id */
    fieldId: number = null;

    /** 顶部icon浮动动画 */
    private topStateIconTween: Laya.TimeLine;

    /** 土地数据 */
    date: NetInit["data"]["landList"][0];

    onHdAwake() {
        this.fieldNode = <Laya.Image>this.owner;
        this.countDownLb = this.timeBox.getChildByName("countDownLb") as any;
        this.init();
    }

    init() {
        this.shadow.visible = false;
        this.shadow.active = false;
        this.timeBox.visible = false;
        this.timeBox.active = false;
        this.topStateIcon.visible = false;
        this.lvNode.visible = false;
    }

    @Core.eventOn(EventMaps.update_field)
    updateDate(d: { landList: NetInit["data"]["landList"] }) {
        for (let x = 0; x < d.landList.length; x++) {
            if (d.landList[x].id == this.fieldId) {
                this.date = d.landList[x];
                break;
            }
        }

        if (this.date) {
            this.showIcon(true);
            console.log(this.icon);
            this.fieldNode.skin = this.fieldEmptyRes;
            this.showIcon(Boolean(this.date.productId));
            if (this.date.matureTimeLeft) {
                this.timeBox.visible = true;
                this.timeBox.active = true;
                this.lvNode.visible = true;
                this.shadow.visible = true;
                this.updateCountDown();
                this.updateLevel();
                this.topStateIcon.visible = true;
                this.topStateIconAni(true);
            }
        } else {
            this.icon.skin = this.unlockIcon;
            this.showIcon(false);
        }
    }

    /**
     * 设置icon的显示隐藏状态
     * @param show 显示或隐藏
     */
    showIcon(show: boolean) {
        this.icon.visible = show;
    }

    /**
     * 顶部icon动画
     */
    private topStateIconAni(play: boolean) {
        if (!this.topStateIconTween) {
            this.topStateIconTween = Laya.TimeLine.to(
                this.topStateIcon,
                { y: this.topStateIcon.y - 50 },
                800,
                null
            ).to(this.topStateIcon, { y: this.topStateIcon.y }, 800);
        }

        if (play) {
            this.topStateIconTween.play(null, true);
        } else {
            this.topStateIconTween.pause();
        }
    }

    /**
     * 更新倒计时
     */
    private updateCountDown() {
        if (this.date.matureTimeLeft) {
            this.countDownLb.text = Tools.formatSeconds(this.date.matureTimeLeft);
            Laya.timer.once(1000, this, () => {
                this.date.matureTimeLeft--;
                this.countDownLb.text = Tools.formatSeconds(this.date.matureTimeLeft);
                return this.updateCountDown();
            });
        } else {
            console.log("倒计时结束 ");
            this.topStateIconAni(false);
        }
    }

    /**
     * 更新等级
     */
    private updateLevel() {
        this.lvNode.skin = `main_scene/img_level${this.date.lv}.png`;
    }

    onClick() {
        console.log(this.fieldId);
        if (this.date) {
        } else {
            Core.view.open(Res.views.AddLandView, { parm: this.fieldId });
        }
    }
}
