export type LandObj = NetInit["lands"][0];

class LandService {
    /**
     * 土地数据列表
     */
    list: Map<number, LandObj> = new Map();

    /**
     * 初始化土地数据
     * @param list 土地数据列表
     */
    init(list: LandObj[]) {
        list.forEach((d) => {
            this.addLand(d);
        });
    }

    /**
     * 获取一块土地数据
     * @param id 土地id
     * @returns 返回土地数据
     */
    getLand(id: number) {
        return this.list.get(id);
    }

    /**
     * 添加或是更新土地数据
     * @param d 土地数据
     */
    addLand(d: LandObj) {
        this.list.set(d.id, d);
    }

    /**
     * 清空土地列表
     */
    clear() {
        this.list.clear();
    }
}

/**
 * 土地数据
 */
export default new LandService();
