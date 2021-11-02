import TableAnalyze from "src/common/TableAnalyze";
import { PlantBase } from "src/common/TableObject";

export interface PlantDataBase {
    /** 植物基础数据 */
    base: PlantBase;
    /** 是否锁定 */
    lock: boolean;
}
/**
 * 植物数据列表
 */
class PlantService {
    list: PlantDataBase[] = [];
    /**
     * 初始化数据
     */
    init() {
        TableAnalyze.table("plant").list.forEach((d) => {
            this.list.push({ base: d, lock: true });
        });
    }

    /**
     * 获取一个植物数据
     * @param id 植物id
     * @returns 植物数据
     */
    getPlant(id: number) {
        for (let x = this.list.length - 1; x > -1; x++) {
            if (this.list[x].base.id == id) {
                return this.list[x];
            }
        }
        return null;
    }

    /**
     * 清除数据
     */
    clear() {
        this.list.length = 0;
    }
}
export default new PlantService();
