import { Instance } from "../core/Instance";

/**
 * 用户信息
 */
class UserInfo {
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

    clear() {
        this.nickname = "";
    }
}
export default new UserInfo();
