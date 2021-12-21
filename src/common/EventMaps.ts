/**
 * 全局事件名称
 */
export const enum EventMaps {
    /** load 界面进行更新 */
    load_progress = "load_progress",

    /** 更新土地 */
    update_field = "update_field",

    /** 更新主页订单数据 */
    update_Order = "update_Order",

    /** 土地加速 */
    land_speed_up = "land_speed_up",

    /** 进入游戏 */
    login_game = "login_game",
    /** 退出游戏 */
    login_out = "login_out",
    /** 更新任务 */
    update_task = "update_task",
    /** 更新新手任务手 */
    update_guid_hand = "update_guid_hand",
    /** 好友分享引导 */
    update_friend_share_guide = "update_friend_share_guide",

    /**
     * 播放获得奖励动画
     *
     * @example
    {
        //需要飞金币的参考节点
        node: this.owner,
        //要飞的数据列表
        list: [
            {
                //解析好的带icon的数据
                obj: TableAnalyze.table("currency").get(1001),
                //数量
                count: 20,
                //要飞去的位置 1 金币 2 钻石
                posType: 2,
            }
        ],
    }
     */
    play_get_reward = "play_get_reward",
    /** 看广告播放奖励获获得动画  传入节点 */
    play_ad_get_reward = "play_ad_get_reward",
    /** 去好友家 */
    go_friend_home = "go_friend_home",
    /** 回家 */
    go_home = "go_home",
    /** 打开好友界面 */
    open_friend = "open_friend",
    /** 种菜主界面进入 */
    plant_sow = "plant_sow",
    /** 添加钻石或是金币 */
    add_diamond_gold = "add_diamond_gold",
}

/**
 * 与app交互事件
 */
export const enum AppEventMap {
    /** 看广告 */
    ad = "ad",
    /** 关闭安卓启动遮罩 */
    closeImage = "closeImage",
    /** 微信登录 */
    wxLogin = "wxLogin",
    /** 微信登录成功 */
    wxLoginSuccess = "wxLoginSuccess",
    /** 微信分享 */
    wxShare = "wxShare",
    /** 友盟事件统计 数据格式 {type:对应要统计的点} */
    eventCount = "eventCount",
    /** 隐私政策 */
    privacyAgreement = "privacyAgreement",
    /** 服务协议 */
    serviceAgreement = "serviceAgreement",
    /** 注册成功 */
    registerSuccess = "registerSuccess",
    /** 登录成功 */
    loginSuccess = "LoginSuccess",
    /** 清除缓存 */
    clearCache = "clearCache",
    /** 打开遮罩背景 */
    showBackground = "showBackground",
}
