import ConfigGame from "src/common/ConfigGame";

/**
 * 本地数据结构 localData 在这个里面定义好
 */
class LocalStorageService {
    private localData = {
        isLogin: false,
        token: null,
    };

    /**
     * 初始化
     */
    init() {
        this.localData = Laya.LocalStorage.getJSON(ConfigGame.localKey) || this.localData;
    }

    /** 获取本地数据 */
    getJSON() {
        return this.localData;
    }

    /** 设置本地数据 */
    setJSON<key extends keyof typeof this.localData>(key: key, data: typeof this.localData[key]) {
        this.localData[key] = data;
        Laya.LocalStorage.setJSON(ConfigGame.localKey, this.localData);
    }

    clear() {
        Laya.LocalStorage.setJSON(ConfigGame.localKey, {});
    }
}

export default new LocalStorageService();
