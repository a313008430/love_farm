import { Instance } from "../core/Instance";

/**
 * 用户信息
 */
class UserInfo {
    /** 订单等级 已完成 */
    orderLevel: number = 1;
    /** 用户名称 */
    nickname: string = "name";
    // /** 用户id */
    // uid: number = 0;
    /** 用户唯一标识 */
    key: string = null;
    /** 用名头像 */
    avatar: string = "";
    /** 钻石 */
    diamond: number = 999;
    /** 金币 */
    gold: number = 999;
    /** 用户可以看广告的次数 */
    advertiseTimes: number = 0;
    /** 玩家佩戴的宠物 */
    warePetId: number;
    /** 剩余体力 */
    petVitality: number;
    /** 消化食物倒计时 */
    digestCountDown: number;
    /** 连续签到天数 */
    signInDays: number = 0;
    /** 上一次领取的签到奖励id */
    signInId: number = 0;
    /** 用户已经加速次数 */
    speedUpTimes: number = 0;
    /** 用户体力 */
    vitality: number = 0;
    /** 兑换比例 */
    proportion: number = 0.0001;
    /** 邀请者 */
    invitePeople: string;
    /** 第一次登录 11 表示 才表示新手引导完全结束  todo 这里已改动 */
    isFirstTime: number;
    /** 用户提现数据 */
    withdraw: WithdrawData[];
    /** 新手引导数据  0购买种子→种菜→1加速→2收获→3出售→进入其他玩家农场→4偷菜→5恢复体力 */
    guideData: string[] = [];
    /** 玩家在线天数 默认第一天为1*/
    days: number = 0;
    /** 用户看广告总次数 */
    adTimes: number = 0;
    /** 用户连续未点击次数 */
    continuousAdTimes: number = 0;
    /** 是否绑定微信 */
    isBindWx: number = 0;

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
