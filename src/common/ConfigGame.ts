export const enum BuildType {
    /** 测试环境 */
    test = "test",
    /** 线上环境 */
    online = "online",
    /** 本地开发 */
    debug = "debug",
}

console.log(BUILD_TYPE);

let baseUrl = "http://game-s.ahd168.com/farm/dev";
//  baseUrl = "http://game-s.ahd168.com/farm/release";
switch (BUILD_TYPE) {
    case BuildType.debug:
        baseUrl = "//192.168.101.6:3000";
        // baseUrl = "http://game-s.ahd168.com/farm/release";
        // baseUrl = "//192.168.101.6/farm/dev";
        // baseUrl = "//192.168.101.6:3100";
        // baseUrl = "//192.168.50.87:3000";
        break;
    case BuildType.online:
        baseUrl = "http://game-s.ahd168.com/farm/release";
        break;
}

/**
 * 游戏配置
 */
export default {
    /** 钻石id */
    diamondId: 1001,
    /** 金币id */
    goldId: 1002,
    /** 狗狗消化食物间隔时间 秒 */
    petDigestIntervalTime: 60 * 3600,
    /** 游戏本地储存key */
    localKey: "love_HD_farm",
    /** 用户体力上限 */
    userVitalityLimit: 10,
    /** 协议地址 */
    // baseUrl: "//47.108.192.181:8092/ farm",
    baseUrl: baseUrl,
    // BUILD_TYPE == BuildType.debug ? "//192.168.50.87:3000" : "http://game.ahd168.com:3000",
    // baseUrl: DEBUG ? "//192.168.101.50:3000" : "http://game.ahd168.com:3000",
    // baseUrl: "http://game.ahd168.com:3000",
    // todo 这里的Ip可以访问可能是有问题的
    // baseUrl: "//47.108.192.181:3000",
    /** api请求类型 默认 */
    ApiTypeDefault: 1,
    /** api请求类型 看广告 */
    ApiTypeAD: 2,
    /** 广告条件 加速使用了6次 */
    ADSpeedUpTimes: 6,
    version: "1.0.0",
    /**渠道 */
    channel: "",
};
