import { Table } from "./Table";
import {
    CurrencyBase,
    OrderBase,
    PlantBase,
    RewardBase,
    RewardCurrencyBase,
    TaskBase,
} from "./TableObject";
import Tools from "./Tools";

const TablePropertyEvent = {
    /**
     * 解析订单表
     * @param d 数据
     */
    order(d: typeof Table.order[0]) {
        let r = Tools.parseString(d.reward, ":");
        return <OrderBase>{
            id: d.id,
            reward: {
                obj: TableAnalyze.table("currency").get(Number(r[0])),
                count: Number(r[1]),
            },
            condition: Tools.parseString(d.condition).map((e) => {
                let v = Tools.parseString(e, ":");
                return {
                    plant: TableAnalyze.table("plant").get(Number(v[0])),
                    count: Number(v[1]),
                };
            }),
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
            gain: Tools.parseString(d.gain).map((e) => {
                let v = Tools.parseString(e, ":");
                return <RewardCurrencyBase>{
                    obj: TableAnalyze.table("currency").get(Number(v[0])),
                    count: Number(v[1]),
                };
            }),
            desc: d.desc,
            lost_sum: d.lost_sum,
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
};

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
        get: { (id: number): ReturnType<typeTable[T]> };
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
