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
}
