import TableAnalyze from "src/common/TableAnalyze";
import { PlantBase } from "src/common/TableObject";

/**
 * 仓库数据结构
 */
export interface WareHouseData {
    base: PlantBase;
    count: number;
    type?: number;
}
/**
 * 仓库数据
 */
class WarehouseService {
    list: WareHouseData[] = [];

    init(
        data: [
            {
                id: number;
                amount: number;
                type: number;
            }
        ]
    ) {
        data.forEach((d) => {
            this.list.push({
                base: TableAnalyze.table("plant").get(d.id),
                count: d.amount,
            });
        });
    }
    /**
     * 更新物品数量
     * @param id
     * @param amount
     */
    updateAmount(id: number, amount: number) {
        for (let x = 0; x < this.list.length; x++) {
            if (this.list[x].base.id == id) {
                this.list[x].count -= amount;
                if (this.list[x].count <= 0) {
                    this.list.splice(x, 1);
                }
                break;
            }
        }
    }

    /**
     * 添加物品
     */
    add(id: number, amount: number) {
        for (let x = 0; x < this.list.length; x++) {
            if (this.list[x].base.id == id) {
                this.list[x].count += amount;
                return;
            }
        }

        this.list.push({
            base: TableAnalyze.table("plant").get(id),
            count: amount,
        });
    }

    clear() {
        this.list.length = 0;
    }
}

export default new WarehouseService();
