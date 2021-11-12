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
        uid: number;
        gold: number;
        diamond: number;
        nickname: "string";
    };
    lands: [
        {
            id: number;
            level: number;
            productId: number;
            matureTimeLeft: number;
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
}

interface NetSendApi {
    login: {
        account: string;
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
}

/**
 * 返回带用户金币的
 */
interface ReturnUserInfo {
    gold: 0;
    diamond: 0;
    advertiseTimes: 0;
}
