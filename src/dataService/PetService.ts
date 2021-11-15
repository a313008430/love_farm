import TableAnalyze from "src/common/TableAnalyze";
import { PetBase } from "src/common/TableObject";

export interface PetDataBase {
    /** 宠物基础数据 */
    base: PetBase;
    /** 锁定 */
    lock: boolean;
}

/**
 * 宠物数据
 */
class PetService {
    list: PetDataBase[] = [];

    /**
     * 初始化数据
     */
    init(pets: number[]) {
        TableAnalyze.table("pet").list.forEach((d) => {
            this.list.push({
                base: d,
                lock: !pets.includes(d.id),
            });
        });
    }

    /**
     * 获取宠物解锁数量
     */
    getUnlockLen() {
        let len = 0;
        this.list.forEach((d) => {
            if (!d.lock) len++;
        });
        return len;
    }

    clear() {
        this.list.length = 0;
    }
}

export default new PetService();
