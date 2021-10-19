import Res from "src/common/Res";
import FloatViewShowAni from "src/components/FloatViewShowAni";
import GameScript from "src/core/GameScript";
import { ViewManager } from "src/core/ViewManager";

export default class ShopView extends GameScript {
    /** @prop {name:alphaBg, tips:"透明背景层", type:Node}*/
    private alphaBg: Laya.Image = null;
    /** @prop {name:itemList, tips:"商品列表", type:Node}*/
    private itemList: Laya.List = null;
    /** @prop {name:btnBoxTop, tips:"顶部按钮列表容器", type:Node}*/
    private btnBoxTop: Laya.Image = null;
    /** @prop {name:bottomBox, tips:"底部数据列表", type:Node}*/
    private bottomBox: Laya.Node = null;

    /** 顶部按钮文字资源列表 */
    private btnTopResList: string[][] = [
        ["game/img_seedsNormal.png", "game/img_seedsSelected.png"],
        ["game/img_petNormal.png", "game/img_petSelected.png"],
        ["game/img_foodnNormal.png", "game/img_foodnSelected.png"],
        ["game/img_bankNormal.png", "game/img_bankSelected.png"],
    ];
    /** 顶部切换标签选择下标 */
    private topBtnSelectIndex: number = 0;
    /** 商品列表点击下标 */
    private itemListSelectIndex: number = 0;
    /** 商品列表背景纹理 */
    private itemSelectBg: string[] = ["game/img_petbag.png", "game/img_petbagSelected.png"];

    onHdEnable() {}

    onHdAwake() {
        this.updateTopBtnState();
        this.alphaBg.alpha = 0.75;

        console.log(this.itemList);
        // this.itemList.itemRender = this.listItem;

        let ar = [];
        for (let x = 0; x < 30; x++) {
            ar.push({ name: x });
        }
        // this.itemList.scrollBar.hide = true;
        this.itemList.array = ar;
        this.itemList.renderHandler = new Laya.Handler(this, this.updateItem);

        this.itemList.selectHandler = new Laya.Handler(this, this.onSelect);
        this.itemList.vScrollBarSkin = null;
    }

    onSelect(e) {
        console.log(e);
        this.itemListSelectIndex = e;
    }

    updateItem(cell: Laya.Image, index) {
        // console.log(cell);
        // cell.setImg(cell.dataSource);
        (cell.getChildByName("hbox").getChildByName("num") as Laya.FontClip).value = index;

        if (index == this.itemListSelectIndex) {
            cell.skin = this.itemSelectBg[1];
        } else {
            cell.skin = this.itemSelectBg[0];
        }
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                ViewManager.inst.close(Res.views.ShopView, false, true, FloatViewShowAni);
                break;

            case "seed":
            case "pet":
            case "feed":
            case "bank":
                let topBtnIndex = this.btnBoxTop.getChildIndex(e.target);
                if (this.topBtnSelectIndex != topBtnIndex) {
                    this.topBtnSelectIndex = topBtnIndex;
                    this.updateTopBtnState();
                }

                break;
        }
    }

    /**
     * 更新顶部按钮点击点击状态
     */
    private updateTopBtnState() {
        for (let x = 0; x < this.btnBoxTop.numChildren; x++) {
            let btn = this.btnBoxTop.getChildAt(x) as Laya.Image,
                lb = btn.getChildAt(0) as Laya.Image;
            if (x === this.topBtnSelectIndex) {
                btn.skin = "game/img-menuselected.png";
                lb.skin = this.btnTopResList[x][1];
            } else {
                btn.skin = "game/img-menunormal.png";
                lb.skin = this.btnTopResList[x][0];
            }
        }

        this.updateBottom();
    }

    /**
     * 更新底部内容数据
     */
    private updateBottom() {
        for (let x = 0; x < this.bottomBox.numChildren; x++) {
            (this.bottomBox.getChildAt(x) as Laya.Box).visible = false;
        }

        switch (this.topBtnSelectIndex) {
            case 0:
                (this.bottomBox.getChildAt(0) as Laya.Box).visible = true;
                break;
            case 1:
                (this.bottomBox.getChildAt(1) as Laya.Box).visible = true;
                break;
            case 2:
                (this.bottomBox.getChildAt(0) as Laya.Box).visible = true;
                break;
            case 3:
                (this.bottomBox.getChildAt(2) as Laya.Box).visible = true;
                break;
        }
    }
}
