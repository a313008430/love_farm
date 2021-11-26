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
    /** 任务奖励领取 */
    taskReward = "/task/reward",
    /** 邻居 */
    neighbor = "/neighbor",
    /** 偷菜 */
    landSteal = "/land/steal",
    /** 单独查看广告 */
    ad = "/ad",
    /** 用户体力购买 */
    vitalityBuy = "/vitality/buy",
    /** 回自己家 */
    goHome = "/goHome",
    /** 好友删除 */
    friendDelete = "/friend/delete",
    /** 通过好友申请 */
    friendAllow = "/friend/allow",
    /** 好友申请 */
    friendApply = "/friend/apply",
    /** 好友搜索 */
    friendSearch = "/friend/search",
    /** 好友列表 */
    friendList = "/friend/list",
    /** 好友邀请者绑定 */
    friendInvitePeople = "/friend/invite/people",
    /** 邀请的好友列表 */
    friendInviteList = "/friend/invite/list",
    /** 邀请的好友奖励，领取 */
    friendInviteReceive = "/friend/invite/receive",
    /** 访问好友家里 */
    friendVisit = "/friend/visit",
    /** 邮件列表 */
    mailList = "/mail/list",
    /** 邮件阅读 */
    mailRead = "/mail/read",
    /** 邮件阅读 */
    mailDelete = "/mail/delete",
}
