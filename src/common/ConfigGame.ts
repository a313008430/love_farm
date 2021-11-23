/**
 * 游戏配置
 */
export default {
    /** 钻石id */
    diamondId: 1001,
    /** 金币id */
    goldId: 1002,
    /** 狗狗消化食物间隔时间 秒 */
    petDigestIntervalTime: 60,
    /** 游戏本地储存key */
    localKey: "love_HD_farm",
    /** 用户体力上限 */
    userVitalityLimit: 10,
    /** 协议地址 */
    // baseUrl: "//47.108.192.181:8092/ farm",
    baseUrl: DEBUG ? "//192.168.101.50:3000" : "http://game.ahd168.com:3000",
    // baseUrl: "http://game.ahd168.com:3000",
    // todo 这里的Ip可以访问可能是有问题的
    // baseUrl: "//47.108.192.181:3000",
    /** api请求类型 默认 */
    ApiTypeDefault: 1,
    /** api请求类型 看广告 */
    ApiTypeAD: 2,
    /** 广告条件 加速使用了6次 */
    ADSpeedUpTimes: 6,
};
