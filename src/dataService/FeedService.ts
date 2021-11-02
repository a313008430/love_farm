import TableAnalyze from "src/common/TableAnalyze";
import { FeedBase } from "src/common/TableObject";

/**
 * 饲料数据结构
 */
export interface FeedDataBase {
    /** 饲料基础数据 */
    base: FeedBase;
    /** 是否锁定 */
    lock: boolean;
}
/**
 * 饲料数据
 */
class FeedService {
    /** 饲料数据列表 */
    list: FeedDataBase[] = [];

    /**
     * 数据初始化
     */
    init() {
        TableAnalyze.table("feed").list.forEach((d) => {
            this.list.push({
                base: d,
                lock: false,
            });
        });
    }

    clear() {
        this.list.length = 0;
    }
}

export default new FeedService();
