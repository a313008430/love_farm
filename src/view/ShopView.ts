import Res from "src/common/Res";
import GameScript from "src/core/GameScript";
import { ViewManager } from "src/core/ViewManager";

export default class ShopView extends GameScript {
    /** @prop {name:alphaBg, tips:"透明背景层", type:Node}*/
    public alphaBg: Laya.Image = null;
    /** @prop {name:itemList, tips:"商品列表", type:Node}*/
    public itemList: Laya.List = null;
    /** @prop {name:btnList, tips:"顶部按钮列表", type:Nodes,xCount:2,sType:Node}*/
    public btnList: Laya.Node[] = [];

    onHdAwake() {
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
    }

    updateItem(cell: Laya.Image, index) {
        // console.log(cell);
        // cell.setImg(cell.dataSource);
        (cell.getChildByName("hbox").getChildByName("num") as Laya.FontClip).value = index;
    }

    onClick(e) {
        switch (e.target.name) {
            case "close":
                ViewManager.inst.close(Res.views.ShopView);
                break;
        }
    }
}
