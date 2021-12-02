interface NetBase {
    /** 通信协议码 */
    code: number;
    /** 协议地址 */
    uri: string;
    /** 数据 */
    data: any;
}
/**
 * 初始化协议
 */
// interface NetInit extends NetBase {
//     data: {
//         //汇率 钻石兑换软妹币
//         exchangeRate: number;
//         //加速剩余次数
//         speedUpTimes: number;
//         userInfo: {
//             //用户id
//             uid: number;
//             //用户昵称
//             nickname: string;
//             //玩家钻石
//             diamond: number;
//             //玩家金币
//             gold: number;
//             //玩有头像
//             avatar: string;
//         };
//         //订单数据
//         order: {
//             //订单id即等级， 最小为 1
//             id: number;
//         };
//         //仓库
//         warehouse: {
//             //物品id
//             id: number;
//             //物品数据总和
//             count: number;
//         }[];
//         //土地列表  [已解锁]
//         landList: [
//             {
//                 //土地id对应的也是下标
//                 id: number;
//                 //土地等级
//                 lv: number;
//                 //正在生长的东西的id 种子id, 如果剩余时间为0，表示 已熟，前端自己去查对应可生产的东西，然后改变显示状态
//                 productId: number;
//                 //剩余时间 如果为0 就为成熟 单位秒
//                 matureTimeLeft: number;
//             }
//         ];
//         //种子列表 [已解锁]
//         seedList: { id: number }[];
//         //宠物列表 [已解锁]
//         petList: { id: number }[];
//         //宠物信息
//         petInfo: {
//             id: number;
//             //体力
//             vitality: number;
//         };
//     };
// }
interface NetInit extends NetBase {
    userInfo: {
        account: "string";
        // uid: number;
        key: string;
        gold: number;
        diamond: number;
        nickname: "string";
        /** 用户偷菜体力 */
        vitality: 0;
        avatar: string;
        /** 邀请者 */
        invitePeople: null;
        isFirstTime: number;
    };
    lands: [
        {
            /** 土地id */
            id: number;
            level: number;
            productId: number;
            matureTimeLeft: number;
            /** 是否可以偷 0为不可偷 */
            canSteal?: number;
        }
    ];
    seeds: [number];
    warehouse: [
        {
            id: number;
            amount: number;
            type: number;
        }
    ];
    pets: [number];
    wearPet: {
        id: number;
        vitality: number;
        digestCountDown: number;
    };
    token: "string";
    /** 签到天数 */
    signInDays: 0;
    /** 已签到id */
    signInId: 0;
    /** 剩余看广告次数 */
    advertiseTimes: 0;
    /** 已完成订单等级 */
    orderId: 0;
    /** 用户加速次数 */
    speedUpTimes: number;
    /** 任务列表 */
    tasks: [
        {
            id: 0;
            times: 0;
            receive: 0;
        }
    ];
    /** 提现数据 */
    withdraw: { id: number; times: number }[];
}

interface NetSendApi {
    login: {
        account: "string";
        wxId: "string";
        nickname: "string";
        avatar: "string";
    };

    /**  解锁土地 */
    unlockLand: {
        /**土地Id */
        landId: number;
        /** 种植种子Id */
        seedsId: number;
        /** 类型 1 默认 2 广告 */
        type: number;
    };

    /**  种菜 */
    sow: {
        /**土地Id */
        landId: number;
        /** 种植种子Id */
        plantId: number;
        /** 类型 1 默认 2 广告 */
        type: number;
    };
    /**  收菜 */
    gather: {
        /**土地Id */
        landId: number;
        /** 类型 1 默认 2 广告 */
        type: number;
    };

    /**  收菜 */
    seedsUnlock: {
        type: 0;
        plantId: 0;
    };

    /**  卖菜 */
    warehouseSell: {
        type: 0;
        id: 0;
        amount: 0;
    };

    /**  宠物购买 */
    petBuy: {
        type: 0;
        petId: 0;
    };

    /**  饲料购买购买 */
    feedBuy: {
        type: 0;
        feedId: 0;
    };

    /**  宠物穿戴 */
    petWear: {
        petId: 0;
    };

    /**  偷菜 */
    landSteal: {
        type: 0;
        uid: 0;
        landId: 0;
    };
}

/**
 * 返回带用户金币的
 */
interface ReturnUserInfo {
    gold: 0;
    diamond: 0;
    advertiseTimes: 0;
}

/**
 * 邻居数据返回
 */
interface ReturnNeighbor {
    lands: [
        {
            id: 0;
            level: 0;
            productId: 0;
            matureTimeLeft: 0;
        }
    ];
    protectedTime: 0;
    nickname: "string";
    uid: number;
}

/**
 * 好友数据
 */
interface FriendData {
    uid: 0;
    orderLevel: 0;
    /** 亲密度 */
    intimacy: 0;
    gainDiamond: 0;
    avatar: "string";
    /** 是否申请中 0 为已经是好友 1为申请中 */
    applyIng: number;
    /** 用户昵称 */
    nickname: "string";
}

/**
 * 好友 列表数据返回
 */
interface FriendListData {
    list: FriendData[];
}

interface InviteData {
    /** 好友id */
    friendId: 0;
    /** 是否领取奖励 */
    receivedReward: 0;
}

interface InviteList {
    list: InviteData[];
}

/**
 * 用户邮件
 */
interface MailReturnData {
    id: 0;
    message: "string";
    type: 0;
    items: "string";
    itemsLost: "string";
    read: 0;
    createTime: 0;
}

/**
 * 提现数据结构
 */
interface WithdrawData {
    id: number;
    times: number;
}
