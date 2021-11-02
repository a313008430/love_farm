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
    init() {
        TableAnalyze.table("pet").list.forEach((d) => {
            this.list.push({
                base: d,
                lock: true,
            });
        });
    }

    clear() {
        this.list.length = 0;
    }
}

export default new PetService();
