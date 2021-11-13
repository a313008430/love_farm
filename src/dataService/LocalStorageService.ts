import ConfigGame from "src/common/ConfigGame";

const LocalData = {
    isLogin: false,
    token: null,
};

/**
 * 本地数据结构 localData 在这个里面定义好
 */
class LocalStorageService {
    private localData = LocalData;

    /**
     * 初始化
     */
    init() {
        this.localData = Laya.LocalStorage.getJSON(ConfigGame.localKey) || LocalData;
    }

    /** 获取本地数据 */
    getJSON() {
        return LocalData;
    }

    /** 设置本地数据 */
    setJSON<key extends keyof typeof LocalData>(key: key, data: typeof LocalData[key]) {
        LocalData[key] = data;
        Laya.LocalStorage.setJSON(ConfigGame.localKey, LocalData);
    }

    clear() {
        Laya.LocalStorage.setJSON(ConfigGame.localKey, {});
    }
}

export default new LocalStorageService();
