import TableAnalyze from "src/common/TableAnalyze";
import { PlantBase } from "src/common/TableObject";

/**
 * 仓库数据结构
 */
export interface WareHouseData {
    base: PlantBase;
    count: number;
}
/**
 * 仓库数据
 */
class WarehouseService {
    list: WareHouseData[] = [];

    init() {
        TableAnalyze.table("plant").list.forEach((d) => {
            this.list.push({
                base: d,
                count: Math.ceil(Math.random() * 100),
            });
        });
    }

    clear() {
        this.list.length = 0;
    }
}

export default new WarehouseService();
