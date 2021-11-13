import { Instance } from "../core/Instance";

/**
 * 用户信息
 */
class UserInfo {
    /** 订单等级 已完成 */
    orderLevel: number = 1;
    /** 用户名称 */
    nickname: string = "name";
    /** 用户id */
    uid: number = 0;
    /** 用名头像 */
    avatar: string = "";
    /** 钻石 */
    diamond: number = 999;
    /** 金币 */
    gold: number = 999;
    /** 用户可以看广告的次数 */
    advertiseTimes: number;

    get ttt() {
        return this.orderLevel;
    }
    set ttt(v) {
        this.orderLevel = v;
    }

    clear() {
        this.nickname = "";
    }
}

export default new UserInfo();
