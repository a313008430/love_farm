import { AppEventMap, EventMaps } from "src/common/EventMaps";
import HttpControl from "src/common/HttpControl";
import { ApiHttp } from "src/common/NetMaps";
import Res from "src/common/Res";
import AppCore from "src/core/App";
import Core from "src/core/index";
import TaskService from "src/dataService/TaskService";
import UserInfo from "src/dataService/UserInfo";
import MainView from "./MainView";

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

    /** @prop {name:empty_lb, tips:"空的提示", type:Node}*/
    private empty_lb: Laya.Image = null;

    /** 1是好友列表 2 加好友  3删除好友 */
    private viewState: 1 | 2 | 3 = 1;

    //这两个好友 有点乱，需要优化
    private friends: FriendData[] = [];
    private friendsList: FriendData[] = [];

    private canClick: boolean = true;

    onOpened(data: {
        friendData: FriendListData;
        /** type为1打开加好友界面 */
        type: number;
    }) {
        this.friends = data.friendData.list;
        this.friendsList = this.friends;
        this.updateListData();
        this.addBox.visible = false;
        this.addBox.active = false;
        this.itemList.array = this.friendsList;
        this.isEmpty();
        this.itemList.renderHandler = new Laya.Handler(this, this.itemRender);
        this.itemList.vScrollBarSkin = null;
        this.userKey.text = `我的友情码：${UserInfo.key}`;
        console.log(data.type);
        if (data.type && data.type == 1) {
            this.addFriendEvent();
        }
    }

    private isEmpty() {
        this.empty_lb.visible = !this.itemList.array.length;
    }

    private updateListData() {
        this.friendsList.sort((a, b) => {
            return b.applyIng * 100000 - a.applyIng * 100000;
        });
    }

    private itemRender(cell: Laya.Box, i: number) {
        const data = this.itemList.array[i];

        let newBox = cell.getChildByName("new_box") as Laya.Box,
            heartBox = cell.getChildByName("heart_box") as Laya.Image,
            goPlayBtn = cell.getChildByName("go_play_btn") as Laya.Image,
            applyBtn = cell.getChildByName("apply_btn") as Laya.Image,
            delBtn = cell.getChildByName("del_btn") as Laya.Image;
        heartBox.visible = false;

        goPlayBtn.visible = false;
        applyBtn.visible = false;
        delBtn.visible = false;
        // console.log(data);

        if (data?.avatar) (cell.getChildByName("head") as Laya.Image).skin = data.avatar;
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
                (newBox.getChildByName("ignore") as Laya.Image).dataSource = data;
                heartBox.visible = false;
                goPlayBtn.visible = false;
            } else {
                //已经是好友
                newBox.visible = false;
                newBox.active = false;
            }
        }
        // console.log(this.viewState);
    }

    onClick(e: Laya.Event) {
        if (!this.canClick) return;
        console.log(e.target.name);
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.FriendsView);
                break;
            case "add_friend":
                this.addFriendEvent();

                break;
            case "del_friend":
                this.deleteFriendEvent();
                break;
            case "desc_btn":
                Core.view.open(Res.views.FriendsDescView, {
                    parm: {
                        call: () => {
                            this.openReward();
                        },
                    },
                });
                break;
            case "reward_btn":
                this.openReward();
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
            case "ignore":
                this.ignore(e.target as any);
                break;
            case "go_play_btn":
                this.visitFriend(e.target as any);
                break;
            default:
                break;
        }
    }

    private deleteFriendEvent() {
        if (this.viewState == 3) return;
        this.addBox.visible = false;
        this.addBox.active = false;
        this.viewState = 3;
        let newF: FriendData[] = [];
        this.friends.forEach((d) => {
            if (!d.applyIng) newF.push(d);
        });
        this.itemList.array = newF;
        this.itemList.height = 914;
        this.itemList.refresh();
        this.isEmpty();
        this.addFriend.skin = `game/img_friendBtn.png`;
    }

    private addFriendEvent() {
        if (this.viewState == 3 || this.viewState == 2) {
            console.log(this.viewState);
            this.viewState = 1;
            this.itemList.array = this.friends;
            this.itemList.height = 914;
            this.addFriend.skin = `game/img_addBtn.png`;
            this.addBox.visible = false;
            this.addBox.active = false;
            this.isEmpty();
        } else {
            this.viewState = 2;
            this.addBox.visible = true;
            this.addBox.active = true;
            this.itemList.array = [];
            this.itemList.height = 590; //914
            this.addFriend.skin = `game/img_friendBtn.png`;
            this.empty_lb.visible = false;
        }

        this.itemList.refresh();
    }

    /**
     * 忽略好友
     * @param target
     */
    private ignore(target: Laya.Image) {
        let data = target.dataSource as FriendData;
        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.friendDelete,
                data: {
                    friendId: data.uid,
                },
            })
            .then((e) => {
                for (let x = 0; x < this.friends.length; x++) {
                    if (this.friends[x].uid == data.uid) {
                        this.friends.splice(x, 1);
                        break;
                    }
                }
                this.canClick = true;
                this.itemList.refresh();
                this.isEmpty();
            })
            .catch(() => {
                this.canClick = true;
            });
    }

    /**
     *
     */
    private openReward() {
        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.friendInviteList,
                data: {},
            })
            .then((d: InviteList) => {
                Core.view.open(Res.views.FriendsRewardView, {
                    parm: {
                        list: d.list,
                        call: () => {
                            HttpControl.inst
                                .send({
                                    api: ApiHttp.friendList,
                                })
                                .then((d: FriendListData) => {
                                    this.friends = d.list;
                                    this.friendsList = this.friends;
                                    this.updateListData();
                                    this.itemList.array = this.friendsList;
                                    this.isEmpty();
                                    this.itemList.refresh();
                                });
                        },
                    },
                });
                this.canClick = true;
            })
            .catch(() => {
                this.canClick = true;
            });
    }

    /**
     * 访问好友家
     */
    private visitFriend(target: Laya.Image) {
        this.canClick = false;
        Core.view.setOverView(true, async () => {
            let data = target.dataSource as FriendData;

            if (MainView.inst.isOuter) {
                await HttpControl.inst.send({
                    api: ApiHttp.goHome,
                    data: {},
                });
            }

            HttpControl.inst
                .send({
                    api: ApiHttp.friendVisit,
                    data: {
                        friendId: data.uid,
                    },
                })
                .then((d) => {
                    Core.view.close(Res.views.FriendsView);
                    Core.eventGlobal.event(EventMaps.go_friend_home, [d, data]);
                    setTimeout(() => {
                        Core.view.setOverView(false);
                        this.canClick = true;
                    }, 300);
                })
                .catch(() => {
                    this.canClick = true;
                    Core.eventGlobal.event(EventMaps.go_home, [true]);
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
                HttpControl.inst
                    .send({
                        api: ApiHttp.friendDelete,
                        data: {
                            friendId: data.uid,
                        },
                    })
                    .then((e) => {
                        for (let x = 0; x < this.friends.length; x++) {
                            if (this.friends[x].uid == data.uid) {
                                this.friends.splice(x, 1);
                                break;
                            }
                        }

                        this.itemList.array = this.friendsList;
                        this.itemList.refresh();
                        this.isEmpty();
                    });
            },
            cancelCall: () => {},
        });
    }

    /**
     * 通过好友申请
     */
    private allowFriend(target: Laya.Image) {
        this.canClick = false;
        let data = target.dataSource as FriendData;
        HttpControl.inst
            .send({
                api: ApiHttp.friendAllow,
                data: {
                    friendId: data.uid,
                },
            })
            .then(() => {
                data.applyIng = 0;
                this.itemList.refresh();
                this.canClick = true;
                AppCore.runAppFunction({
                    uri: AppEventMap.eventCount,
                    data: { type: "Addfriends" },
                });
            })
            .catch(() => {
                this.canClick = true;
            });
    }

    /**
     * 申请添加好友
     * @param target
     */
    private applyEvent(target: Laya.Image) {
        let data = target.dataSource as FriendData;
        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.friendApply,
                data: {
                    friendId: data.uid,
                },
            })
            .then((d: { status: boolean; taskState: boolean }) => {
                this.friendsList = [];
                this.itemList.array = this.friendsList;
                this.itemList.refresh();
                Core.view.openHint({ text: "已发送激情", call: () => {} });
                this.canClick = true;
                if (d.taskState) {
                    TaskService.taskAddTimes(1009);
                }
            })
            .catch(() => {
                this.canClick = true;
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

        this.canClick = false;
        HttpControl.inst
            .send({
                api: ApiHttp.friendSearch,
                data: {
                    key: this.keyInputNode.text,
                },
            })
            .then((d: FriendData) => {
                this.friendsList = [d];
                this.itemList.array = this.friendsList;
                this.itemList.refresh();
                this.canClick = true;
            })
            .catch(() => {
                this.canClick = true;
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
