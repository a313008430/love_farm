import ConfigGame from "src/common/ConfigGame";
import { EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import { RewardCurrencyBase } from "src/common/TableObject";
import Core from "src/core/index";
import PlantService from "src/dataService/PlantService";
import UserInfo from "src/dataService/UserInfo";
import WarehouseService, { WareHouseData } from "src/dataService/WarehouseService";
import { GetFloatRewardObj } from "./MainView";

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
    private itemSellCountLb: Laya.TextInput = null;
    /** @prop {name:itemSellBox, tips:"出售物品价格容器", type:Node}*/
    private itemSellBox: Laya.HBox = null;
    /** @prop {name:itemSellGold, tips:"金币容器", type:Node}*/
    private itemSellGold: Laya.HBox = null;
    /** @prop {name:itemSellDiamond, tips:"钻石容器", type:Node}*/
    private itemSellDiamond: Laya.HBox = null;
    /** @prop {name:sellBtn, tips:"出售的icon", type:Node}*/
    private sellBtn: Laya.Image = null;
    /** @prop {name:sellAdBtn, tips:"出售的icon 广告", type:Node}*/
    private sellAdBtn: Laya.Image = null;
    /** @prop {name:empty_lb, tips:"空的提示", type:Node}*/
    private empty_lb: Laya.Image = null;

    /** 数据列表 */
    private dataList: WareHouseData[][] = [];
    /** 选中的物品 下标 */
    private selectItemIndex: string = "0,0";
    /** 选中的物品数据 */
    private selectItemData: WareHouseData;
    /** 选中出售物品的数量 */
    private selectItemSellCount: number = 0;
    /** 单价 金币 */
    private unitPriceGold: number = 0;
    /** 单价 钻石 */
    private unitPriceDiamond: number = 0;

    private canClick: boolean = true;

    onOpened() {
        Core.audio.playSound(Res.audios.dakaicangku);
        this.sellAdBtn.disabled = !UserInfo.advertiseTimes;
        this.sellAdBtn.active = Boolean(UserInfo.advertiseTimes);
    }

    onHdAwake() {
        this.itemList.renderHandler = new Laya.Handler(this, this.renderItemList);
        this.itemList.vScrollBarSkin = null;

        this.updateList();

        this.updateDesc(null);

        this.itemSellGold.removeSelf();
        this.itemSellDiamond.removeSelf();

        this.itemSellCountLb.on(Laya.Event.INPUT, this, () => {
            this.selectItemSellCount = Number(this.itemSellCountLb.text);
            if (this.selectItemSellCount < 1) {
                this.selectItemSellCount = 1;
                this.itemSellCountLb.text = "1";
            }

            if (this.selectItemSellCount > this.selectItemData.count)
                this.selectItemSellCount = this.selectItemData.count;

            this.updateSelectSellCount();
        });
    }

    updateList() {
        let i = 0,
            y = 0,
            hasSelect = false;
        WarehouseService.list.forEach((d) => {
            if (!this.dataList[y]) this.dataList[y] = [];
            this.dataList[y].push(d);
            if (d.base.id == this.selectItemData?.base.id) {
                hasSelect = true;
            }
            i++;
            if (i > 2) {
                i = 0;
                y++;
            }
        });

        if (!hasSelect && this.dataList.length) {
            this.selectItemIndex = "0,0";
            this.itemList.selectedIndex = 0;
        }

        this.itemList.array = this.dataList;
        this.empty_lb.visible = !this.dataList.length;
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
            case "sellBtnAd":
            case "sellBtn":
                if (!this.canClick) {
                    return;
                } else {
                    this.canClick = false;
                    let btnName = e.target.name,
                        target = e.target;
                    HttpControl.inst
                        .send({
                            api: ApiHttp.warehouseSell,
                            data: <NetSendApi["warehouseSell"]>{
                                id: this.selectItemData.base.id,
                                amount: this.selectItemSellCount,
                                type:
                                    btnName == "sellBtn"
                                        ? ConfigGame.ApiTypeDefault
                                        : ConfigGame.ApiTypeAD,
                            },
                        })
                        .then(() => {
                            this.sellAdBtn.disabled = !UserInfo.advertiseTimes;
                            this.sellAdBtn.active = Boolean(UserInfo.advertiseTimes);
                            this.canClick = true;
                            WarehouseService.reduceAmount(
                                this.selectItemData.base.id,
                                this.selectItemSellCount
                            );
                            this.dataList = [];
                            this.updateList();
                            this.itemList.refresh();
                            if (!this.dataList.length) {
                                this.updateDesc(null);
                            }

                            let rewardList = [];

                            if (this.unitPriceGold) {
                                rewardList.push({
                                    obj: TableAnalyze.table("currency").get(ConfigGame.goldId),
                                    count:
                                        this.selectItemSellCount *
                                        this.unitPriceGold *
                                        (btnName == "sellBtnAd" ? 2 : 1),
                                    posType: 1,
                                });
                            }
                            if (this.unitPriceDiamond) {
                                rewardList.push({
                                    obj: TableAnalyze.table("currency").get(ConfigGame.diamondId),
                                    count:
                                        this.selectItemSellCount *
                                        this.unitPriceDiamond *
                                        (btnName == "sellBtnAd" ? 2 : 1),
                                    posType: 2,
                                });
                            }

                            if (btnName == "sellBtnAd") {
                                Core.eventGlobal.event(EventMaps.play_ad_get_reward, target);
                            }

                            Core.eventGlobal.event(EventMaps.play_get_reward, <GetFloatRewardObj>{
                                node: this.sellBtn as any,
                                list: rewardList,
                                callBack: () => {},
                            });
                        })
                        .catch(() => {
                            this.canClick = true;
                        });
                }

                break;
        }
    }

    /**
     * 更新出出售信息数据
     */
    private updateDesc(d: WareHouseData) {
        if (!d) {
            (this.itemIcon.parent as Laya.Box).visible = false;
            return;
        }

        (this.itemIcon.parent as Laya.Box).visible = true;

        this.itemSellDiamond.removeSelf();
        this.itemSellGold.removeSelf();

        this.itemIcon.skin = d.base.icon;
        this.itemName.text = d.base.name;
        this.itemDesc.text = d.base.desc;
        let priceGold: RewardCurrencyBase, priceDiamond: RewardCurrencyBase;
        for (let x = 0; x < d.base.gain.length; x++) {
            // console.log(d.base.gain[x]);
            if (!d.base.gain[x].count) continue;
            if (d.base.gain[x].obj.id == ConfigGame.goldId) {
                priceGold = d.base.gain[x];
                (this.itemSellGold.getChildByName("icon") as Laya.Image).skin =
                    d.base.gain[x].obj.icon;
                this.itemSellBox.addChild(this.itemSellGold);
            } else {
                priceDiamond = d.base.gain[x];
                (this.itemSellDiamond.getChildByName("icon") as Laya.Image).skin =
                    d.base.gain[x].obj.icon;
                this.itemSellBox.addChild(this.itemSellDiamond);
            }
        }

        this.selectItemSellCount = d.count;
        this.unitPriceGold = priceGold?.count || 0;
        this.unitPriceDiamond = priceDiamond?.count || 0;
        this.updateSelectSellCount();
    }

    /**
     * 更新可以出售的数量
     */
    private updateSelectSellCount() {
        this.itemSellCountLb.text = this.selectItemSellCount + "";
        (this.itemSellGold.getChildByName("price") as Laya.Label).text =
            this.selectItemSellCount * this.unitPriceGold + "";
        (this.itemSellDiamond.getChildByName("price") as Laya.Label).text =
            this.selectItemSellCount * this.unitPriceDiamond + "";
    }
}
