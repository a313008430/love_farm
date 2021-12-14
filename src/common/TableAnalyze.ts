import { Table } from "./Table";
import {
    ConfigBase,
    CurrencyBase,
    FeedBase,
    LandLevelBase,
    OrderBase,
    PetBase,
    PlantBase,
    RewardBase,
    RewardCurrencyBase,
    SignInBase,
    TaskBase,
} from "./TableObject";
import Tools from "./Tools";

const TablePropertyEvent = {
    pet(d: typeof Table.pet[0]) {
        return <PetBase>{
            id: d.id,
            name: d.name,
            icon: d.icon || `pet_feed/${d.id}_dog.png`,
            vitality_max: d.vitality_max,
            vitality_consume: d.vitality_consume,
            cost: getRewardCurrencyBase(d.cost),
            desc: d.desc,
            sensitive: d.sensitive,
            ability: d.ability,
        };
    },

    /**
     * 解析饲料表
     * @param d 数据
     * @returns
     */
    feed(d: typeof Table.feed[0]) {
        return <FeedBase>{
            id: d.id,
            name: d.name,
            icon: d.icon || `pet_feed/${d.id}_feed.png`,
            vitality: d.vitality,
            cost: getRewardCurrencyBase(d.cost),
            desc: d.desc,
        };
    },

    /**
     * 解析订单表
     * @param d 数据
     */
    order(d: typeof Table.order[0]) {
        return <OrderBase>{
            id: d.id,
            commission: Number(d.commission),
            condition: Tools.parseString(d.condition).map((e) => {
                let v = Tools.parseString(e, ":");
                return {
                    plant: TableAnalyze.table("plant").get(Number(v[0])),
                    count: Number(v[1]),
                };
            }),
            extraReward: getRewardCurrencyBase(d.extra_reward),
        };
    },

    /**
     * 解析成熟植物表
     * @param d 数据
     */
    plant(d: typeof Table.plant[0]) {
        return <PlantBase>{
            id: d.id,
            name: d.name,
            icon: d.icon,
            matureIcon: `plant_icon/${d.icon.match(/\d+/g)[0]}_mature.png`,
            growingIcon: `plant_icon/${d.icon.match(/\d+/g)[0]}_growing.png`,
            gain: Tools.parseString(d.gain).map((e) => getRewardCurrencyBase(e)),
            desc: d.desc,
            seed_price: getRewardCurrencyBase(d.seed_price),
            harvest: Number(Tools.parseString(d.harvest, "~")[1]),
            mature_time: Number(d.mature_time),
            unlock_cost: getRewardCurrencyBase(d.unlock_cost),
            unlock_reward: Tools.parseString(d.unlock_reward).map((e) => getRewardCurrencyBase(e)),
        };
    },

    /**
     * 解析货币表
     * @param d 数据
     */
    currency(d: typeof Table.currency[0]) {
        return <CurrencyBase>{
            id: d.id,
            icon: d.icon,
            name: d.name,
        };
    },

    /**
     * 解析土地等级表
     */
    landLevel(d: typeof Table.landLevel[0]) {
        return <LandLevelBase>{
            id: d.id,
            reward: getRewardCurrencyBase(d.reward),
            cost: getRewardCurrencyBase(d.cost),
            gain: d.gain,
            probability: d.probability,
            getDiamond: d.get_diamond,
        };
    },

    /**
     * 解析config
     */
    config(d: typeof Table.config[0]) {
        switch (d.id) {
            case "all_speed_up_times":
                return { id: "all_speed_up_times", value: d.value };

            case "all_speed_up_time":
                return { id: "all_speed_up_time", value: d.value };

            case "unlock_land_cost":
                return {
                    id: "unlock_land_cost",
                    value: Tools.parseString(d.value as string).map((d) =>
                        getRewardCurrencyBase(d)
                    ),
                };

            case "goldDefault":
                return {
                    id: "goldDefault",
                    value: getRewardCurrencyBase(d.value as string).count,
                };
            case "diamondDefault":
                return {
                    id: "diamondDefault",
                    value: getRewardCurrencyBase(d.value as string).count,
                };
            case "ADTimesLimit":
                return { id: "ADTimesLimit", value: d.value };
            case "ADSpeedUptimes":
                return { id: "ADSpeedUptimes", value: d.value };
            case "vitalityBuyCostGold":
                return {
                    id: "vitalityBuyCostGold",
                    value: getRewardCurrencyBase(d.value as string).count,
                };
            case "vitalityLimit":
                return { id: "vitalityLimit", value: d.value };
            case "Initial_physical_strength":
                return { id: "Initial_physical_strength", value: d.value };
            case "landAmountMax":
                return { id: "landAmountMax", value: d.value };
            case "petDefaultVitality":
                return { id: "petDefaultVitality", value: d.value };
            case "petDigestIntervalTime":
                return { id: "petDigestIntervalTime", value: d.value };
            case "Videorewards":
                return { id: "Videorewards", value: getRewardCurrencyBase(d.value as string) };
            case "withdrawal": //提现比例
                return { id: "withdrawal", value: Tools.parseString(d.value as string, ":") };
            case "Invitation_rewards": //邀请好友奖励
                return {
                    id: "Invitation_rewards",
                    value: getRewardCurrencyBase(d.value as string),
                };
            case "withdrawal_times": //提现次数
                return {
                    id: "withdrawal_times",
                    value: Tools.parseString(d.value as string).map((v: any) => {
                        v = Tools.parseString(v, ":");
                        return { price: Number(v[0]), times: Number(v[1]) };
                    }),
                };
        }
    },

    /**
     * 解锁签到表
     * @param d
     */
    signIn(d: typeof Table.signIn[0]) {
        return <SignInBase>{
            id: d.id,
            days: d.days,
            reward: getRewardCurrencyBase(d.reward),
        };
    },

    /**
     * 解析任务表
     */
    task(d: typeof Table.task[0]) {
        return <TaskBase>{
            id: d.id,
            times: d.times,
            reward: getRewardCurrencyBase(d.reward),
            desc: d.desc,
            title: d.title,
            icon: d.icon || `game/img_barm.png`,
        };
    },
};

/**
 * 解析货币
 * @param str 解析的货币数据结构 id:num
 */
function getRewardCurrencyBase(str: string) {
    if (!str) return null;
    let list = Tools.parseString(str, ":");

    return <RewardCurrencyBase>{
        obj: TableAnalyze.table("currency").get(Number(list[0])),
        count: Number(list[1]),
    };
}

type typeTable = typeof TablePropertyEvent;

class TableControl {
    private tableCache: Map<keyof typeTable, ReturnType<typeTable[keyof typeTable]>[]> = new Map();

    /**
     * 解析的表
     * @param key 表的key
     */
    table<T extends keyof typeTable>(
        key: T
    ): {
        list: ReturnType<typeTable[T]>[];
        get: { (id: number | string): ReturnType<typeTable[T]> };
    } {
        //读取组成
        if (this.tableCache.has(key)) {
            return this.tableBack(this.tableCache.get(key));
        }
        //解析数据
        let list = [];
        Table[key].forEach((e) => {
            list.push(TablePropertyEvent[key](e));
        });
        //缓存解析表的数据
        this.tableCache.set(key, list);
        return this.tableBack(list);
    }

    /**
     * 用于table方法返回数据格式和添加获取单个表数据
     * @param list 解析表数据列表
     * @returns 返回指定数据结构
     */
    private tableBack(list) {
        return {
            list: list,
            get(id) {
                for (let x = 0, l = list.length; x < l; x++) {
                    if (list[x].id == id) {
                        return list[x];
                    }
                }
                return null;
            },
        };
    }
}

/**
 * 表格解析工具
 */
const TableAnalyze = new TableControl();
export default TableAnalyze;
