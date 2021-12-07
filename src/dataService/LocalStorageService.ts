import ConfigGame from "src/common/ConfigGame";

const LocalData = {
    isLogin: false,
    token: null,

    /** true 为关闭 false 为打开 */
    sound: false,
    /** true 为关闭 false 为打开 */
    music: false,
    /** version */
    version: "0.0.0",
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
        return this.localData;
    }

    /** 设置本地数据 */
    setJSON<key extends keyof typeof LocalData>(key: key, data: typeof LocalData[key]) {
        this.localData[key] = data;
        Laya.LocalStorage.setJSON(ConfigGame.localKey, this.localData);
    }

    clear() {
        Laya.LocalStorage.setJSON(ConfigGame.localKey, { version: this.localData.version });
        this.localData = {
            isLogin: false,
            token: null,
            sound: true,
            music: true,
            version: this.localData.version,
        };
    }
}

export default new LocalStorageService();
