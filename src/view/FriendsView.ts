import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import Core from "src/core/index";
import UserInfo from "src/dataService/UserInfo";

//export default class FriendsView extends Laya.Script {
export default class FriendsView extends Core.gameScript {
    /** @prop {name:addBox, tips:"添加好友容器", type:Node}*/
    private addBox: Laya.Box;
    /** @prop {name:itemList, tips:"列表节点", type:Node}*/
    private itemList: Laya.List;
    /** @prop {name:userKey, tips:"用户友情码", type:Node}*/
    private userKey: Laya.Label;
    /** @prop {name:keyInputNode, tips:"邀请码输入", type:Node}*/
    private keyInputNode: Laya.TextInput;
    /** @prop {name:addFriend, tips:"添加好友按钮", type:Node}*/
    private addFriend: Laya.Image;

    /** 1是好友列表 2 加好友  3删除好友 */
    private viewState: 1 | 2 | 3 = 1;

    private friends: FriendData[] = [];
    private friendsList: FriendData[] = [];

    onOpened(d: FriendListData) {
        this.friends = d.list;
        this.friendsList = this.friends;
        this.updateListData();
        this.addBox.visible = false;
        this.addBox.active = false;
        this.itemList.array = this.friendsList;
        this.itemList.renderHandler = new Laya.Handler(this, this.itemRender);
        this.itemList.vScrollBarSkin = null;
        this.userKey.text = `我的友情码：${UserInfo.key}`;
    }

    private updateListData() {
        this.friendsList.sort((a, b) => {
            return b.applyIng * 100000 - a.applyIng * 100000;
        });
    }

    private itemRender(cell: Laya.Box, i: number) {
        const data = this.friendsList[i];

        let newBox = cell.getChildByName("new_box") as Laya.Box,
            heartBox = cell.getChildByName("heart_box") as Laya.Image,
            goPlayBtn = cell.getChildByName("go_play_btn") as Laya.Image,
            applyBtn = cell.getChildByName("apply_btn") as Laya.Image,
            delBtn = cell.getChildByName("del_btn") as Laya.Image;
        heartBox.visible = false;

        goPlayBtn.visible = false;
        applyBtn.visible = false;
        delBtn.visible = false;

        if (data.avatar) (cell.getChildByName("head") as Laya.Image).skin = data.avatar;
        (cell.getChildByName("name") as Laya.Label).text = data.nickname;
        (cell.getChildByName("lv") as Laya.Label).text = (data.orderLevel || 0) + "";
        (heartBox.getChildByName("val") as Laya.Label).text = (data.intimacy || 0) + "";
        (cell.getChildByName("reward_box").getChildByName("value") as Laya.Label).text =
            data.gainDiamond + "";

        (cell.getChildByName("del_btn") as Laya.Image).dataSource = data;
        goPlayBtn.dataSource = data;

        switch (this.viewState) {
            case 1:
                goPlayBtn.visible = true;
                heartBox.visible = true;
                break;
            case 2:
                applyBtn.dataSource = data;
                applyBtn.visible = true;
                newBox.visible = false;
                newBox.active = false;
                break;
            case 3:
                heartBox.visible = true;
                delBtn.visible = true;
                break;
        }

        if (this.viewState == 1 || this.viewState == 3) {
            //申请 中
            if (data.applyIng) {
                newBox.visible = true;
                newBox.active = true;
                (newBox.getChildByName("past_btn") as Laya.Image).dataSource = data;
                heartBox.visible = false;
                goPlayBtn.visible = false;
            } else {
                //已经是好友
                newBox.visible = false;
                newBox.active = false;
            }
        }
    }

    onClick(e: Laya.Event) {
        console.log(e.target.name);
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.FriendsView);
                break;
            case "add_friend":
                if (this.viewState == 3 || this.viewState == 2) {
                    this.viewState = 1;
                    this.itemList.array = this.friends;
                    this.itemList.height = 914;
                    this.addFriend.skin = `game/img_addBtn.png`;
                    this.addBox.visible = false;
                    this.addBox.active = false;
                } else {
                    this.viewState = 2;
                    this.addBox.visible = true;
                    this.addBox.active = true;
                    this.itemList.array = [];
                    this.itemList.height = 590; //914
                    this.addFriend.skin = `game/img_friendBtn.png`;
                }

                this.itemList.refresh();

                // `game/img_hangout.png`
                // img_friendBtn
                break;
            case "del_friend":
                if (this.viewState == 3) break;
                this.addBox.visible = false;
                this.addBox.active = false;
                this.viewState = 3;
                this.itemList.array = this.friends;
                this.itemList.height = 914;
                this.itemList.refresh();
                this.addFriend.skin = `game/img_friendBtn.png`;
                break;
            case "desc_btn":
                Core.view.open(Res.views.FriendsDescView);
                break;
            case "reward_btn":
                Core.view.open(Res.views.FriendsRewardView);
                break;
            case "copy_btn":
                this.copy();
                break;
            case "search_btn":
                this.search();
                break;
            case "apply_btn":
                this.applyEvent(e.target as any);
                break;
            case "past_btn":
                this.allowFriend(e.target as any);
                break;
            case "del_btn":
                this.deleteFriend(e.target as any);
                break;
            case "go_play_btn":
                this.visitFriend(e.target as any);
                break;
            default:
                break;
        }
    }

    /**
     * 访问好友家
     */
    private visitFriend(target: Laya.Image) {
        Core.view.setOverView(true, () => {
            let data = target.dataSource as FriendData;

            HttpControl.inst.send({
                api: ApiHttp.friendVisit,
                data: {
                    friendId: data.uid,
                },
                call: (d) => {
                    Core.view.close(Res.views.FriendsView);
                    Laya.timer.once(300, this, () => {
                        Core.view.setOverView(false);
                    });
                },
            });
        });
    }

    /**
     * 删除好友
     * @param target
     */
    private deleteFriend(target: Laya.Image) {
        Core.view.openHint({
            text: "确认要删除好友吗？",
            call: () => {
                let data = target.dataSource as FriendData;
                HttpControl.inst.send({
                    api: ApiHttp.friendDelete,
                    data: {
                        friendId: data.uid,
                    },
                    call: (d) => {
                        for (let x = 0; x < this.friends.length; x++) {
                            if (this.friends[x].uid == data.uid) {
                                this.friends.splice(x, 1);
                                break;
                            }
                        }
                        this.itemList.refresh();
                    },
                });
            },
            cancelCall: () => {},
        });
    }

    /**
     * 通过好友申请
     */
    private allowFriend(target: Laya.Image) {
        let data = target.dataSource as FriendData;
        HttpControl.inst.send({
            api: ApiHttp.friendAllow,
            data: {
                friendId: data.uid,
            },
            call: (d) => {
                data.applyIng = 0;
                this.itemList.refresh();
            },
        });
    }

    /**
     * 申请添加好友
     * @param target
     */
    private applyEvent(target: Laya.Image) {
        let data = target.dataSource as FriendData;
        HttpControl.inst.send({
            api: ApiHttp.friendApply,
            data: {
                friendId: data.uid,
            },
            call: (d) => {
                this.friendsList = [];
                this.itemList.array = this.friendsList;
                this.itemList.refresh();
                Core.view.openHint({ text: "已发送激情", call: () => {} });
            },
        });
    }

    /**
     * 搜索好友
     * @returns
     */
    private search() {
        if (!this.keyInputNode.text.length) {
            Core.view.openHint({ text: "友情码不能为空", call: () => {} });
            return;
        }
        if (this.keyInputNode.text == UserInfo.key) {
            Core.view.openHint({ text: "搜索自己干啥", call: () => {} });
            return;
        }

        HttpControl.inst.send({
            api: ApiHttp.friendSearch,
            data: {
                key: this.keyInputNode.text,
            },
            call: (d) => {
                this.friendsList = [d];
                this.itemList.array = this.friendsList;
                this.itemList.refresh();
            },
        });
    }

    private copy() {
        let a: HTMLInputElement = document.createElement("input");
        document.body.appendChild(a);
        a.value = UserInfo.key;
        a.select();
        document.execCommand("copy");
        a.remove();
        Core.view.openHint({ text: "复制成功", call: () => {} });
    }
}
