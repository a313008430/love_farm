import ConfigGame from "src/common/ConfigGame";
import { EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import { Table } from "src/common/Table";
import TableAnalyze from "src/common/TableAnalyze";
import { FeedBase, PlantBase, RewardCurrencyBase } from "src/common/TableObject";
import Tools from "src/common/Tools";
import FloatViewShowAni from "src/components/FloatViewShowAni";
import GameScript from "src/core/GameScript";
import Core from "src/core/index";
import { ViewManager } from "src/core/ViewManager";
import FeedService, { FeedDataBase } from "src/dataService/FeedService";
import PetService from "src/dataService/PetService";
import PlantService from "src/dataService/PlantService";
import UserInfo from "src/dataService/UserInfo";
import { GetFloatRewardObj } from "./MainView";

export interface ShopViewData {
    /** 界面tag下标id */
    id: number;
    /** 数据 */
    parm?: any;
    call?: Function;
}

export default class ShopView extends GameScript {
    /** @prop {name:itemList, tips:"商品列表", type:Node}*/
    private itemList: Laya.List = null;
    /** @prop {name:btnBoxTop, tips:"顶部按钮列表容器", type:Node}*/
    private btnBoxTop: Laya.Image = null;
    /** @prop {name:bottomBox, tips:"底部数据列表", type:Node}*/
    private bottomBox: Laya.Node = null;

    //种子
    /** @prop {name:seedDesc, tips:"描述", type:Node}*/
    private seedDesc: Laya.Label = null;
    /** @prop {name:matureTime, tips:"成熟时间", type:Node}*/
    private matureTime: Laya.Label = null;
    /** @prop {name:matureGainBox, tips:"收益容器", type:Node}*/
    private matureGainBox: Laya.Label = null;
    /** @prop {name:lockBtnBox, tips:"解锁按钮容器", type:Node}*/
    private lockBtnBox: Laya.Box = null;
    /** @prop {name:itemBuyBtn, tips:"购买按钮节点", type:Node}*/
    private itemBuyBtn: Laya.Image = null;

    //饲料
    /** @prop {name:feedBuyBtn, tips:"饲料购按钮", type:Node}*/
    private feedBuyBtn: Laya.Image = null;
    /** @prop {name:feedDesc, tips:"饲料描述文本", type:Node}*/
    private feedDesc: Laya.Label = null;

    //宠物
    /** @prop {name:petIcon, tips:"宠物icon", type:Node}*/
    private petIcon: Laya.Image = null;
    /** @prop {name:petDesc, tips:"宠物描述", type:Node}*/
    private petDesc: Laya.Label = null;
    /** @prop {name:petName, tips:"宠物名称", type:Node}*/
    private petName: Laya.Label = null;
    /** @prop {name:vitalityMax, tips:"体力上限", type:Node}*/
    private vitalityMax: Laya.FontClip = null;
    /** @prop {name:petBuyBtn, tips:"购买宠物按钮", type:Node}*/
    private petBuyBtn: Laya.Image = null;
    /** @prop {name:goWatch, tips:"宠物看家", type:Node}*/
    private goWatch: Laya.Image = null;
    /** @prop {name:goRest, tips:"宠物休息", type:Node}*/
    private goRest: Laya.Image = null;

    //钱庄
    /** @prop {name:diamondFont, tips:"用户钻石", type:Node}*/
    private diamondFont: Laya.FontClip = null;
    /** @prop {name:priceList, tips:"钱庄提现列表", type:Node}*/
    private priceList: Laya.List = null;
    /** @prop {name:proportion, tips:"兑换比例", type:Node}*/
    private proportion: Laya.Label = null;
    /** 可提现数据列表 */
    private priceDataList: { price: number; times: number }[] = [];
    /** 钱庄选择的值 的下标 */
    private priceSelectIndex: number = null;

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
    private itemSelectBg: string[] = ["game/img_petbagNormal.png", "game/img_petbagSelected.png"];

    /** 当前选择的宠物下标 */
    private selectPetIndex: number = 0;
    private data: ShopViewData;

    private isFirst: boolean = true;

    onHdAwake() {
        this.itemList.renderHandler = new Laya.Handler(this, this.updateItem);
        this.itemList.selectHandler = new Laya.Handler(this, this.onSelect);
        this.itemList.vScrollBarSkin = null;

        // this.priceList.vScrollBarSkin = null;
        this.priceList.renderHandler = new Laya.Handler(this, this.updatePriceItem);
        this.priceList.selectHandler = new Laya.Handler(this, this.onPriceSelect);

        Core.observableProperty.watch(UserInfo, this).key("diamond", (v) => {
            this.diamondFont.value = v;
        });
    }

    onOpened(e: ShopViewData) {
        this.data = e;
        this.topBtnSelectIndex = e?.id || 0;

        this.priceDataList = TableAnalyze.table("config").get("withdrawal_times").value as any;
        this.updateTopBtnState();
        let withdrawal = TableAnalyze.table("config").get("withdrawal").value as string[];
        this.proportion.text = `兑换比例 ${withdrawal[1]}:${withdrawal[2]}`;

        if (!UserInfo.isFirstTime) {
            this.itemList.disabled = true;
            this.itemList.gray = false;
            Laya.timer.frameOnce(10, this, () => {
                Core.eventGlobal.event(EventMaps.update_guid_hand, [
                    true,
                    (this.owner as Laya.Box).globalToLocal(
                        this.itemBuyBtn.localToGlobal(new Laya.Point(300, 100))
                    ),
                    // this.owner,
                ]);
            });
        }
    }

    /**
     * 种子或是饲料选中时的下标
     * @param e 选中的下标
     */
    onSelect(e) {
        this.itemListSelectIndex = e;
    }

    /**
     * 获取种子或饮料列表数据
     * @returns
     */
    private getDataList() {
        if (this.topBtnSelectIndex == 0) {
            return PlantService.list;
        }
        if (this.topBtnSelectIndex == 2) {
            if (!FeedService.list.length) FeedService.init();
            return FeedService.list.sort((a, b) => a.base.vitality - b.base.vitality);
        }
    }

    /**
     * 渲染种子或是饲料的列表
     * @param cell 列表节点
     * @param index 下标
     * @returns
     */
    private updateItem(cell: Laya.Image, index) {
        let d = this.getDataList()[index];
        let priceBox = cell.getChildByName("hbox") as Laya.Box,
            lockIcon = cell.getChildByName("lock_icon") as Laya.Image;
        if (!d) return console.warn("数据丢失");
        if (d.lock) {
            lockIcon.visible = true;
            lockIcon.active = true;
            priceBox.visible = false;
            priceBox.active = false;
        } else {
            lockIcon.visible = false;
            lockIcon.active = false;
            priceBox.visible = true;
            priceBox.active = true;

            let count = 0,
                icon = "";
            if (this.topBtnSelectIndex == 0) {
                count = (<PlantBase>d.base).seed_price.count;
                icon = (<PlantBase>d.base).seed_price.obj.icon;
            } else {
                count = (<FeedBase>d.base).cost.count;
                icon = (<FeedBase>d.base).cost.obj.icon;
            }

            (priceBox.getChildByName("num") as Laya.FontClip).value = count + "";
            (priceBox.getChildByName("gold_icon") as Laya.Image).skin = icon;
        }

        (cell.getChildByName("icon") as Laya.Image).skin = d.base.icon;
        (cell.getChildByName("name") as Laya.Label).text = d.base.name;

        if (index == this.itemListSelectIndex) {
            cell.skin = this.itemSelectBg[1];
            this.updateSelectDesc();
            if (!this.isFirst) {
                Core.audio.playSound(Res.audios.button_click);
            }
            this.isFirst = false;
        } else {
            cell.skin = this.itemSelectBg[0];
        }
    }

    /**
     * 更新种子或是饲料低部，选择物品时的数据显示
     */
    private updateSelectDesc() {
        let d = this.getDataList()[this.itemListSelectIndex];
        if (this.topBtnSelectIndex === 2) {
            //饲料
            (this.seedDesc.parent as Laya.Box).visible = false;
            this.feedDesc.text = d.base.desc.replace("&", (<FeedBase>d.base).vitality + "");
            this.feedDesc.visible = true;
            let box = this.feedBuyBtn.getChildByName("box");
            (box.getChildByName("icon") as Laya.Image).skin = (<FeedBase>d.base).cost.obj.icon;
            (box.getChildByName("value") as Laya.FontClip).value =
                (<FeedBase>d.base).cost.count + "";

            return;
        }
        //种子
        let base = d.base as PlantBase;
        (this.seedDesc.parent as Laya.Box).visible = true;
        this.feedDesc.visible = false;
        this.seedDesc.text = base.desc;
        this.matureTime.text = Tools.formatSeconds(base.mature_time);

        if (this.data?.call) {
            this.itemBuyBtn.visible = !d.lock;
        } else {
            this.itemBuyBtn.visible = false;
        }

        this.lockBtnBox.visible = d.lock;
        this.lockBtnBox.active = d.lock;
        let gainList = base.gain;
        for (let x = 0; x < 3; x++) {
            let itemBox = this.matureGainBox.getChildAt(x) as Laya.Box,
                icon = null,
                count = 0,
                gainData = gainList[x - 1];
            if (x === 0) {
                count = base.harvest;
                icon = base.icon;
            } else if (gainData) {
                icon = gainData.obj.icon;
                count = gainData.count * base.harvest;
            }

            (itemBox.getChildByName("icon") as Laya.Image).skin = icon;
            (itemBox.getChildByName("count") as Laya.Label).text = "x" + count;
        }

        let box = this.lockBtnBox.getChildByName("unlock_buy").getChildByName("box");

        (box.getChildByName("icon") as Laya.Image).skin = base.unlock_cost?.obj?.icon;
        (box.getChildByName("value") as Laya.FontClip).value = base.unlock_cost?.count + "";
    }

    onClick(e: Laya.Event) {
        // console.log(e.target.name);
        switch (e.target.name) {
            case "close":
                if (UserInfo.isFirstTime) ViewManager.inst.close(Res.views.ShopView);
                break;

            case "seed":
            case "pet":
            case "feed":
            case "bank":
                if (!UserInfo.isFirstTime) break;
                Core.audio.playSound(Res.audios.button_click);
                let topBtnIndex = this.btnBoxTop.getChildIndex(e.target);
                if (this.topBtnSelectIndex != topBtnIndex) {
                    this.topBtnSelectIndex = Number(topBtnIndex);

                    this.updateTopBtnState();
                }
                break;
            //播种
            case "buy_btn":
                if (!UserInfo.isFirstTime) {
                    Core.eventGlobal.event(EventMaps.update_guid_hand, [
                        false,
                        Laya.Point.create(),
                        // this.owner,
                    ]);
                }
                if (!this.canClick) {
                    return;
                }
                this.canClick = false;
                HttpControl.inst
                    .send({
                        api: ApiHttp.landSow,
                        data: <NetSendApi["sow"]>{
                            landId: this.data.parm?.landId,
                            plantId: this.getDataList()[this.itemListSelectIndex].base.id,
                            type: ConfigGame.ApiTypeDefault,
                        },
                    })
                    .then(() => {
                        ViewManager.inst.close(Res.views.ShopView);
                        if (this.data?.call)
                            this.data.call(this.getDataList()[this.itemListSelectIndex]);
                    })
                    .then(() => {
                        this.canClick = true;
                    });

                break;
            //广告解锁，或是金币解锁
            case "unlock_buy":
            case "ad_unlock":
                if (!this.canClick) {
                    return;
                }
                this.canClick = false;
                HttpControl.inst
                    .send({
                        api: ApiHttp.seedsUnlock,
                        data: <NetSendApi["seedsUnlock"]>{
                            plantId: this.getDataList()[this.itemListSelectIndex].base.id,
                            type:
                                e.target.name == "ad_unlock"
                                    ? ConfigGame.ApiTypeAD
                                    : ConfigGame.ApiTypeDefault,
                        },
                    })
                    .then(() => {
                        PlantService.list[this.itemListSelectIndex].lock = false;
                        this.itemList.changeItem(
                            this.itemListSelectIndex,
                            PlantService.list[this.itemListSelectIndex]
                        );
                        this.canClick = true;

                        if (e.target.name == "ad_unlock") {
                            Core.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
                        }
                    })
                    .catch(() => {
                        this.canClick = true;
                    });
                break;

            case "left":
                this.selectPetIndex--;
                if (this.selectPetIndex < 0) {
                    this.selectPetIndex = PetService.list.length - 1;
                }
                this.updatePet();
                break;
            case "right":
                this.selectPetIndex++;
                if (this.selectPetIndex >= PetService.list.length) {
                    this.selectPetIndex = 0;
                }
                this.updatePet();
                break;
            case "pet_btn":
                this.petBuy();
                break;
            case "go_watch":
                this.petGoWatch(PetService.list[this.selectPetIndex].base.id);
                break;
            case "go_rest":
                //默认佩戴第一个宠物
                this.petGoWatch(1001);
                break;
            case "feed_buy":
                //饲料购买
                this.feedBuy();
                break;
            case "withdraw_btn":
                //提现
                this.withdraw();
                break;
        }
    }

    private feedBuy() {
        let feed = this.getDataList()[this.itemListSelectIndex] as FeedDataBase;
        if (!feed) return;
        if (!this.canClick) {
            return;
        }
        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.feedBuy,
                data: <NetSendApi["feedBuy"]>{
                    feedId: feed.base.id,
                    type: ConfigGame.ApiTypeDefault,
                },
            })
            .then(() => {
                this.canClick = true;
                UserInfo.petVitality += feed.base.vitality;

                Core.eventGlobal.event(EventMaps.play_get_reward, <GetFloatRewardObj>{
                    node: this.feedBuyBtn as any,
                    list: [
                        {
                            obj: feed.base,
                            count: 1,
                            posType: 2,
                        },
                    ],
                    notFly: true,
                });
            })
            .catch(() => {
                this.canClick = true;
            });
    }

    /**
     * 宠物去看家
     */
    private petGoWatch(petId: number) {
        if (!this.canClick) {
            return;
        }
        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.petWear,
                data: <NetSendApi["petBuy"]>{
                    petId: petId,
                    type: ConfigGame.ApiTypeDefault,
                },
            })
            .then(() => {
                UserInfo.warePetId = petId;
                this.canClick = true;
                this.updatePet();
            })
            .catch(() => {
                this.canClick = true;
            });
    }

    /**
     * 购买宠物
     */
    private petBuy() {
        let { base } = PetService.list[this.selectPetIndex];
        if (!this.canClick) {
            return;
        }
        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.petBuy,
                data: <NetSendApi["petBuy"]>{
                    petId: base.id,
                    type: ConfigGame.ApiTypeDefault,
                },
            })
            .then(() => {
                this.canClick = true;
                PetService.list[this.selectPetIndex].lock = false;
                this.updatePet();

                if (!UserInfo.warePetId) UserInfo.warePetId = base.id;
                if (!UserInfo.petVitality) {
                    UserInfo.petVitality = base.vitality_max;
                    UserInfo.digestCountDown = ConfigGame.petDigestIntervalTime;
                }
            })
            .catch(() => {
                this.canClick = true;
            });
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
            this.updateCenterBoxState(x, false);
        }
        let itemBuyBox = this.itemBuyBtn.parent as Laya.Box;

        switch (this.topBtnSelectIndex) {
            case 0: //种子
                this.isFirst = true;
                this.updateCenterBoxState(0, true);
                this.resetPetOrFeedList();
                this.feedBuyBtn.visible = false;
                itemBuyBox.visible = true;
                itemBuyBox.active = true;
                break;
            case 1:
                this.updateCenterBoxState(1, true);
                this.updatePet();
                break;
            case 2: //饲料
                this.isFirst = true;
                this.updateCenterBoxState(0, true);
                this.resetPetOrFeedList();
                this.feedBuyBtn.visible = true;
                itemBuyBox.visible = false;
                itemBuyBox.active = false;
                break;
            case 3:
                this.updateCenterBoxState(2, true);

                this.priceList.array = this.priceDataList;
                break;
        }
    }

    /**
     * 更新宠物数据
     */
    private updatePet() {
        if (!PetService.list.length) PetService.init([]);
        let pet = PetService.list[this.selectPetIndex];
        this.petIcon.skin = pet.base.icon;
        this.petName.text = pet.base.name;
        this.petDesc.text = pet.base.desc;
        this.vitalityMax.value = pet.base.vitality_max + "";
        let btn_box = this.petBuyBtn.getChildByName("btn_box") as Laya.Box;
        (btn_box.getChildByName("icon") as Laya.Image).skin = pet.base.cost.obj.icon;
        (btn_box.getChildByName("value") as Laya.FontClip).value = pet.base.cost.count + "";

        let petBox = this.bottomBox.getChildAt(1),
            findBox = petBox.getChildByName("find_box") as Laya.Box,
            back_box = petBox.getChildByName("back_box") as Laya.Box,
            starIcon: Laya.Image;
        for (let x = 0; x < 5; x++) {
            starIcon = findBox.getChildAt(x) as Laya.Image;
            starIcon.visible = x * 20 < pet.base.sensitive;
            starIcon.skin =
                x * 20 + 10 < pet.base.sensitive ? "game/img_star.png" : "game/img_halfstar.png";
            starIcon = back_box.getChildAt(x) as Laya.Image;
            starIcon.visible = x * 20 < pet.base.ability;
            starIcon.skin =
                x * 20 + 10 < pet.base.ability ? "game/img_star.png" : "game/img_halfstar.png";
        }
        if (pet.lock) {
            this.petBuyBtn.visible = true;
            this.goRest.visible = false;
            this.goWatch.visible = false;
        } else {
            if (UserInfo.warePetId == pet.base.id) {
                if (PetService.getUnlockLen() === 1 || UserInfo.warePetId === 1001) {
                    this.goRest.disabled = true;
                } else {
                    this.goRest.disabled = false;
                }
                this.goRest.visible = true;
                this.goWatch.visible = false;
            } else {
                this.goWatch.visible = true;
                this.goRest.visible = false;
            }

            this.petBuyBtn.visible = false;
        }
    }

    /**
     * 重置种子或是饲料数据
     */
    private resetPetOrFeedList() {
        this.itemListSelectIndex = 0;
        this.itemList.selectedIndex = 0;
        this.itemList.array = this.getDataList();
        this.itemList.refresh();
    }

    /**
     * 更新中间内容显示隐藏切换
     * @param i 下标
     * @param show 显示或隐藏
     */
    private updateCenterBoxState(i: number, show: boolean) {
        (this.bottomBox.getChildAt(i) as Laya.Box).visible = show;
        (this.bottomBox.getChildAt(i) as Laya.Box).active = show;
    }

    /**
     * 钱庄选择
     * @param e 下标
     */
    private onPriceSelect(e: number) {
        this.priceSelectIndex = e;
    }

    private canClick: boolean = true;
    /**
     * 提现
     */
    private withdraw() {
        if (this.priceSelectIndex == null) {
            Core.view.openHint({ text: "选择要提现的金额", call: () => {} });
            return;
        }
        if (!this.canClick) {
            return;
        }
        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.withdraw,
                data: { id: this.priceSelectIndex },
            })
            .then((d: any) => {
                this.canClick = true;
                Core.view.openHint({ text: "提现成功", call: () => {} });
                UserInfo.withdraw = d.list;
                UserInfo.diamond = d.diamond;
                this.priceList.refresh();
            })
            .catch(() => {
                this.canClick = true;
            });
    }

    /**
     * 钱庄数据渲染
     */
    private updatePriceItem(cell: Laya.Image, i: number) {
        let data = this.priceDataList[i];

        let userData: NetInit["withdraw"][0] = { id: 0, times: 0 };
        const userDataList = UserInfo.withdraw;
        for (let x = 0; x < userDataList.length; x++) {
            if (userDataList[x].id == i) {
                userData = userDataList[x];
                break;
            }
        }
        console.log(userData);

        (cell.getChildByName("value") as Laya.Label).text = data.price + "元";
        if (data.times) {
            let times = data.times - userData.times;
            (cell.getChildByName("times_box") as Laya.Box).visible = true;
            (cell.getChildByName("times_box").getChildByName("times") as Laya.Label).text = `剩余${
                times < 0 ? 0 : times
            }次`;
            if (times <= 0) {
                cell.disabled = true;
            }
        } else {
            (cell.getChildByName("times_box") as Laya.Box).visible = false;
        }

        if (this.priceList.selectedIndex === i) {
            (cell.getChildByName("bg") as Laya.Image).skin = "game/img_priceselected.png";
        } else {
            (cell.getChildByName("bg") as Laya.Image).skin = "game/img_pricenormal.png";
        }
    }
}
