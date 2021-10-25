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
interface NetInit extends NetBase {
    data: {
        //汇率 钻石兑换软妹币
        exchangeRate: number;
        //加速剩余次数
        speedUpTimes: number;
        userInfo: {
            //用户id
            uid: number;
            //用户昵称
            nickname: string;
            //玩家钻石
            diamond: number;
            //玩家金币
            gold: number;
            //玩有头像
            avatar: string;
        };
        //订单数据
        order: {
            //订单id即等级， 最小为 1
            id: number;
        };
        //仓库
        warehouse: {
            //物品id
            id: number;
            //物品数据总和
            count: number;
        }[];
        //土地列表  [已解锁]
        landList: [
            {
                //土地id对应的也是下标
                id: number;
                //土地等级
                lv: number;
                //正在生长的东西的id 种子id, 如果剩余时间为0，表示 已熟，前端自己去查对应可生产的东西，然后改变显示状态
                productId: number;
                //剩余时间 如果为0 就为成熟 单位秒
                matureTimeLeft: number;
            }
        ];
        //种子列表 [已解锁]
        seedList: { id: number }[];
        //宠物列表 [已解锁]
        petList: { id: number }[];
        //宠物信息
        petInfo: {
            id: number;
            //体力
            vitality: number;
        };
    };
}
