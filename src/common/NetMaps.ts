/**
 * 短链接请求协议
 */
export const enum ApiHttp {
    /** 用户登录 */
    login = "/login",
    /** 用户登录 token */
    loginToken = "/login/token",
    /** 领取订单奖励 */
    orderReward = "/order/reward",
    /** 领取订单奖励 */
    signInReward = "/signIn/reward",
    /** 土地解锁 */
    landUnlock = "/land/unlock",
    /** 土地播种 */
    landSow = "/land/sow",
    /** 土地收获 */
    landGather = "/land/gather",
    /** 土地升级 */
    landUpgrade = "/land/upgrade",
    /** 土地加速 */
    landSpeedUp = "/land/speedUp",
    /** 种子解锁 */
    seedsUnlock = "/seeds/unlock",
    /** 获取背包列表=> 暂时这个接口不需要用 */
    warehouse = "/warehouse",
    /** 背包商品出售 */
    warehouseSell = "/warehouse/sell",
    /** 宠物购买 */
    petBuy = "/pet/buy",
    /** 宠物佩戴 */
    petWear = "/pet/wear",
    /** 饲料购买 */
    feedBuy = "/feed/buy",
}
