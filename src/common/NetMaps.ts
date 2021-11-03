/**
 * 短链接请求协议
 */
export const enum ApiHttp {
    /** 用户登录 */
    login = "/farmController/login",
    /** 收菜 */
    gather = "/farmController/gather",
    /** 种菜 */
    sow = "/farmController/sow",
    /** 解锁土地 */
    unlockLand = "farmController/unlockLand",
}
