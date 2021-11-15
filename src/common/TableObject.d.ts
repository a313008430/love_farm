import { Table } from "./Table";

/**
 * 物品奖励基础数据
 */
interface RewardBase {
    id: number;
    count: number;
}

/**
 * 货币奖励基础数据
 */
interface RewardCurrencyBase {
    obj: CurrencyBase;
    count: number;
}

/**
 * 货币基础表
 */
interface CurrencyBase {
    id: number;
    name: string;
    icon: string;
}

/**
 * 土地升级基础表
 */
interface LandLevelBase {
    id: number;
    /** 升级奖励 */
    reward: RewardCurrencyBase;
    /** 升级消耗 */
    cost: RewardCurrencyBase;
    /** 额外收益 */
    gain: number;
}

/**
 * 配置表
 */
interface ConfigBase {
    /** 全体加速次数 */
    allSpeedUpTimes: number;
    /** 全体加速时间 */
    allSpeedUpTime: number;
    /** 升级消耗 */
    unlockLandCost: RewardCurrencyBase[];
}

/**
 * 成熟物表
 */
interface PlantBase {
    id: number;
    name: string;
    /** 种子icon */
    icon: string;
    /** 成长中 */
    growingIcon: string;
    /** 成熟icon */
    matureIcon: string;
    gain: RewardCurrencyBase[];
    desc: string;
    /** 种子价格 */
    seed_price: RewardCurrencyBase;
    /** 收获可得数量 */
    harvest: number;
    /** 成熟时间 */
    mature_time: number;
    /** 解锁消耗 */
    unlock_cost: RewardCurrencyBase;
    /** 解锁奖励 */
    unlock_reward: RewardCurrencyBase[];
}

/**
 * 饲料基础数据结构
 */
interface FeedBase {
    id: number;
    name: string;
    icon: string;
    vitality: number;
    cost: RewardCurrencyBase;
    desc: string;
}

/**
 * 宠物基础数据结构
 */
interface PetBase {
    id: number;
    name: string;
    icon: string;
    /** 体力上限 */
    vitality_max: number;
    /** 体力消耗 */
    vitality_consume: number;
    cost: RewardCurrencyBase;
    desc: string;
    /** 发现小偷概率 */
    sensitive: number;
    /** 扣回损失概率 */
    ability: number;
}

/**
 * 订单基础表
 */
interface OrderBase {
    id: number;
    commission: number;
    condition: {
        plant: PlantBase;
        count: number;
    }[];
}

/**
 * 任务表
 */
interface TaskBase {
    id: number;
    reward: RewardBase[];
    times: number;
    title: string;
    desc: string;
    icon: string;
}
