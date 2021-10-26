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
 * 成熟物表
 */
interface PlantBase {
    id: number;
    name: string;
    icon: string;
    gain: RewardCurrencyBase[];
    desc: string;
    lost_sum: number;
}

/**
 * 订单基础表
 */
interface OrderBase {
    id: number;
    reward: RewardCurrencyBase;
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
