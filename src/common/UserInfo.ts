import { Instance } from "../core/Instance";

/**
 * 用户信息
 */
class UserInfo {
    /** 用户名称 */
    nickname: string = "name";
    /** 用户id */
    uid: number = 0;

    clear() {
        this.nickname = "";
    }
}
export default new UserInfo();
