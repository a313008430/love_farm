import Res from "src/common/Res";
import { RewardCurrencyBase } from "src/common/TableObject";
import Core from "src/core/index";
import WarehouseService, { WareHouseData } from "src/dataService/WarehouseService";

/**
 * 仓库
 */
//FieldLevelUpView WarehouseView Laya.Script {
export default class WarehouseView extends Core.gameScript {
    /** @prop {name:itemList, tips:"物品列表", type:Node}*/
    private itemList: Laya.List = null;
    /** @prop {name:itemName, tips:"选中物品名称", type:Node}*/
    private itemName: Laya.Label = null;
    /** @prop {name:itemDesc, tips:"选中物品描述", type:Node}*/
    private itemDesc: Laya.Label = null;
    /** @prop {name:itemIcon, tips:"选中物品icon", type:Node}*/
    private itemIcon: Laya.Image = null;
    /** @prop {name:itemSellCountLb, tips:"选中物品出售数量", type:Node}*/
    private itemSellCountLb: Laya.Label = null;
    /** @prop {name:itemSellPriceLb, tips:"选中物品出售价格", type:Node}*/
    private itemSellPriceLb: Laya.Label = null;
    /** @prop {name:itemSellPriceIcon, tips:"选中物品出售价格icon", type:Node}*/
    private itemSellPriceIcon: Laya.Image = null;

    /** 数据列表 */
    private dataList: WareHouseData[][] = [];
    /** 选中的物品 下标 */
    private selectItemIndex: string = "0,0";
    /** 选中的物品数据 */
    private selectItemData: WareHouseData;
    /** 选中出售物品的数量 */
    private selectItemSellCount: number = 0;
    /** 单价 */
    private unitPrice: number = 0;

    onHdAwake() {
        this.itemList.renderHandler = new Laya.Handler(this, this.renderItemList);
        this.itemList.vScrollBarSkin = null;

        let i = 0,
            y = 0;
        WarehouseService.list.forEach((d) => {
            if (!this.dataList[y]) this.dataList[y] = [];
            this.dataList[y].push(d);
            i++;
            if (i > 2) {
                i = 0;
                y++;
            }
        });

        this.itemList.array = this.dataList;
    }

    private renderItemList(cell: Laya.Box, i: number) {
        let data = this.dataList[i];
        for (let x = 0; x < 3; x++) {
            let item = cell.getChildByName(`item_${x}`) as Laya.Box;
            if (data[x]) {
                item.visible = true;
                item.dataSource = `${i},${x}`;
                let icon = item.getChildByName("icon") as Laya.Image;
                icon.skin = data[x].base.icon;
                (
                    item.getChildByName("name") as Laya.Label
                ).text = `${data[x].base.name}_${data[x].count}`;

                if (i == this.itemList.selectedIndex && this.selectItemIndex == item.dataSource) {
                    Laya.Tween.to(icon, { y: 0 }, 150, null, null, null, false);
                    this.selectItemData = data[x];
                    this.updateDesc(data[x]);
                } else {
                    // icon.y = 56;
                    if (icon.y != 56) Laya.Tween.to(icon, { y: 56 }, 150);
                }
            } else {
                item.visible = false;
            }
        }
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.WarehouseView);
                break;
            case "item_0":
            case "item_1":
            case "item_2":
                this.selectItemIndex = e.target["dataSource"];
                this.itemList.refresh(); // 这里需要优化现在做的是刷新整个列表
                break;
            case "add":
                this.selectItemSellCount++;
                if (this.selectItemSellCount > this.selectItemData.count)
                    this.selectItemSellCount = this.selectItemData.count;
                this.updateSelectSellCount();
                break;
            case "reduce":
                this.selectItemSellCount--;
                if (this.selectItemSellCount < 1) this.selectItemSellCount = 1;
                this.updateSelectSellCount();
                break;
        }
    }

    /**
     * 更新出出售信息数据
     */
    private updateDesc(d: WareHouseData) {
        this.itemIcon.skin = d.base.icon;
        this.itemName.text = d.base.name;
        this.itemDesc.text = d.base.desc;
        let price: RewardCurrencyBase;
        for (let x = 0; x < d.base.gain.length; x++) {
            if (d.base.gain[x].obj.id == 1001) {
                price = d.base.gain[x];
                break;
            }
        }
        this.selectItemSellCount = Math.ceil(d.count / 2);
        this.unitPrice = price.count;
        this.itemSellPriceIcon.skin = price.obj.icon;
        this.updateSelectSellCount();
    }

    /**
     * 更新可以出售的数量
     */
    private updateSelectSellCount() {
        this.itemSellCountLb.text = this.selectItemSellCount + "";
        this.itemSellPriceLb.text = "总计：" + this.selectItemSellCount * this.unitPrice;
    }
}
