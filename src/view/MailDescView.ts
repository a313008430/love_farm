import ConfigGame from "src/common/ConfigGame";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import TableAnalyze from "src/common/TableAnalyze";
import Tools from "src/common/Tools";
import Core from "src/core/index";

//default class MailDescView extends Laya.Script
export default class MailDescView extends Core.gameScript {
    /** @prop {name:centerPanel, tips:"中间容器", type:Node}*/
    private centerPanel: Laya.Panel;
    /** @prop {name:title, tips:"顶标题描述", type:Node}*/
    private title: Laya.Label;
    /** @prop {name:lostLb, tips:"偷走了", type:Node}*/
    private lostLb: Laya.Label;
    /** @prop {name:backLb, tips:"找回来的", type:Node}*/
    private backLb: Laya.Label;
    /** @prop {name:bottomLb, tips:"底部文本", type:Node}*/
    private bottomLb: Laya.Label;
    /** @prop {name:item, tips:"物品节点", type:Prefab}*/
    private item: Laya.Prefab;

    private mailId: number = null;
    private call: Function;

    onOpened(d: { data: MailReturnData; call: Function }) {
        const data = d.data;
        this.call = d.call;
        this.mailId = d.data.id;
        this.centerPanel.vScrollBarSkin = null;
        this.title.text = `${data.message}潜入了你的菜地采青`;
        console.log(d);
        const itemsLost: { id: number; amount: number }[] = [],
            itemsBack: { id: number; amount: number }[] = [];
        let lostDiamond = 0,
            lostGold = 0;
        // a:b:c  a=type 1货币 2 植物

        Tools.parseString(data.itemsLost).map((_d: any) => {
            _d = Tools.parseString(_d, ":");
            console.log(_d);
            if (_d[0] == 1) {
                lostDiamond += Number(_d[2]);
                return;
            }

            let has = false;
            itemsLost.forEach((d) => {
                if (d.id == _d[1]) {
                    has = true;
                }
            });

            if (!has) {
                itemsLost.push({ id: _d[1], amount: Number(_d[2]) });
                return;
            }

            for (let x = 0; x < itemsLost.length; x++) {
                if (itemsLost[x].id == _d[1]) {
                    itemsLost[x].amount += Number(_d[2]);
                    break;
                }
            }
        });

        Tools.parseString(data.items).map((_d: any) => {
            _d = Tools.parseString(_d, ":");

            let has = false;
            itemsBack.forEach((d) => {
                if (d.id == _d[1]) {
                    has = true;
                }
            });

            if (!has) {
                itemsBack.push({ id: _d[1], amount: Number(_d[2]) });
                return;
            }

            for (let x = 0; x < itemsBack.length; x++) {
                if (itemsBack[x].id == _d[1]) {
                    itemsBack[x].amount += Number(_d[2]);
                    break;
                }
            }
        });

        let yAdd = 0,
            _x = 0;
        for (let x = 0; x < itemsLost.length; x++) {
            let itemNode: Laya.Box = this.item.create();
            if (_x > 2 && !yAdd) {
                yAdd++;
                _x = -1;
            }
            if (yAdd && _x > 2) {
                yAdd++;
                _x = -1;
            }
            itemNode.x = 230 + _x * 190;
            itemNode.y = 105 + yAdd * 95;
            _x++;
            let plant = TableAnalyze.table("plant").get(itemsLost[x].id);
            const icon = itemNode.getChildByName("icon") as Laya.Image;
            icon.skin = plant.icon;
            icon.scale(0.7, 0.7);
            icon.anchorX = 0.5;
            (itemNode.getChildByName("lb") as Laya.Label).text = `x${itemsLost[x].amount}`;
            plant.gain.forEach((d) => {
                if (d.obj.id == ConfigGame.diamondId) return;
                lostGold += d.count * itemsLost[x].amount;
            });

            this.centerPanel.addChild(itemNode);
        }

        let yAddBack = 0;
        _x = 0;
        for (let x = 0; x < itemsBack.length; x++) {
            let itemNode: Laya.Image = this.item.create();
            if (_x > 1 && !yAddBack) {
                yAddBack++;
                _x = -2;
            }
            if (yAddBack && _x > 1) {
                yAddBack++;
                _x = -2;
            }
            itemNode.x = 420 + _x * 190;
            itemNode.y = 208 + yAdd * 95 + yAddBack * 95;
            _x++;

            let plant = TableAnalyze.table("plant").get(itemsBack[x].id);
            const icon = itemNode.getChildByName("icon") as Laya.Image;
            icon.skin = plant.icon;
            icon.scale(0.7, 0.7);
            icon.anchorX = 0.5;
            (itemNode.getChildByName("lb") as Laya.Label).text = `x${itemsBack[x].amount}`;
            plant.gain.forEach((d) => {
                if (d.obj.id == ConfigGame.diamondId) return;
                lostGold += d.count * itemsBack[x].amount;
            });

            this.centerPanel.addChild(itemNode);
        }

        this.lostLb.y = 114;
        this.backLb.y = 218 + yAdd * 95;
        this.bottomLb.y = 301 + yAdd * 95 + yAddBack * 95;
        this.bottomLb.text = `共计损失了${lostGold}金币，${lostDiamond}钻石`;
    }

    onClick(e: Laya.Event) {
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.MailDescView);
                break;

            case "delete":
                HttpControl.inst
                    .send({
                        api: ApiHttp.mailDelete,
                        data: { id: this.mailId },
                    })
                    .then(() => {
                        if (this.call) {
                            this.call(this.mailId);
                        }
                        Laya.timer.frameOnce(1, this, () => {
                            Core.view.close(Res.views.MailDescView);
                        });
                    });
                break;
        }
    }
}
