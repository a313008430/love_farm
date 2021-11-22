import Core from "src/core/index";
import LandService from "src/dataService/LandService";
import LocalStorageService from "src/dataService/LocalStorageService";
import PetService from "src/dataService/PetService";
import PlantService from "src/dataService/PlantService";
import TaskService from "src/dataService/TaskService";
import UserInfo from "src/dataService/UserInfo";
import WarehouseService from "src/dataService/WarehouseService";
import { ApiHttp } from "./NetMaps";
import Res from "./Res";

/**
 * 协议数据处理
 */
class HttpDataControl {
    /** 数据转发 */
    forward(d: {
        api: ApiHttp;
        data: any;
        call?: Function;
        resolveEvent?: Function;
        error?: Function;
    }) {
        switch (d.api) {
            case ApiHttp.login:
            case ApiHttp.loginToken:
                this.login(d.data);
                break;
            case ApiHttp.landSpeedUp:
                this.taskUpdate(1002);
                break;
            case ApiHttp.landGather:
                this.taskUpdate(1003);
                this.updateUserInfo(d.data);
                break;
            case ApiHttp.feedBuy:
                this.taskUpdate(1005);
                this.taskUpdate(1006);
                this.updateUserInfo(d.data);
                break;
            case ApiHttp.landSow:
                this.taskUpdate(1007);
                this.updateUserInfo(d.data);
                break;
            case ApiHttp.warehouseSell:
                this.taskUpdate(1008);
                this.updateUserInfo(d.data);
                break;

            case ApiHttp.seedsUnlock:

            case ApiHttp.landSow:

            case ApiHttp.landUnlock:

            case ApiHttp.petBuy:

            case ApiHttp.taskReward:
            case ApiHttp.landUpgrade:

            case ApiHttp.orderReward:
                this.updateUserInfo(d.data);
                break;
            default:
                break;
        }

        if (d.resolveEvent) d.resolveEvent(d.data);

        if (d.call) {
            d.call(d.data);
        }
        Core.eventGlobal.event(d.api, d.data);
    }

    error(errorCode: number, data: any) {
        Core.view.openHint({
            // text: `errorCode ${errorCode} ${JSON.stringify(data)}`,
            text: `${data?.message}`,
            call: () => {},
        });
    }

    /**
     * 登录
     * @param d 数据
     */
    private login(d: NetInit) {
        PlantService.init(d.seeds);
        WarehouseService.init(d.warehouse);
        UserInfo.uid = d.userInfo.uid;
        UserInfo.diamond = d.userInfo.diamond;
        UserInfo.gold = d.userInfo.gold;
        UserInfo.nickname = d.userInfo.nickname;
        UserInfo.avatar = "";
        UserInfo.orderLevel = d.orderId || 0;
        UserInfo.warePetId = d.wearPet?.id;
        UserInfo.petVitality = d.wearPet?.vitality || 0;
        UserInfo.digestCountDown = d.wearPet?.digestCountDown || 0;
        UserInfo.advertiseTimes = d.advertiseTimes || 0;
        UserInfo.signInDays = d.signInDays || 0;
        UserInfo.signInId = d.signInId;
        UserInfo.speedUpTimes = d.speedUpTimes;
        UserInfo.vitality = d.userInfo.vitality;
        PetService.init(d.pets);
        TaskService.init(d.tasks);
        LocalStorageService.setJSON("isLogin", true);
        if (d.token) LocalStorageService.setJSON("token", d.token);
        LandService.init(d.lands);

        Core.audio.soundMuted = LocalStorageService.getJSON().sound;
        Core.audio.musicMuted = LocalStorageService.getJSON().music;
    }

    loginOut() {
        PlantService.clear();
        WarehouseService.clear();
        PetService.clear();
        LandService.clear();
        TaskService.clear();
        LocalStorageService.setJSON("isLogin", false);
        LocalStorageService.setJSON("token", null);
        UserInfo.uid = null;
        UserInfo.diamond = 0;
        UserInfo.gold = 0;
        UserInfo.nickname = "";
        UserInfo.avatar = "";
        UserInfo.orderLevel = 0;
        UserInfo.warePetId = null;
        UserInfo.petVitality = 0;
        UserInfo.digestCountDown = 0;
        UserInfo.advertiseTimes = 0;
        UserInfo.signInDays = 0;
        UserInfo.signInId = null;
        UserInfo.speedUpTimes = 0;
        UserInfo.vitality = 0;
    }

    /**
     * 默认用来更新用户金币等
     * @param d
     */
    private updateUserInfo(d: ReturnUserInfo) {
        UserInfo.gold = d.gold;
        UserInfo.diamond = d.diamond;
        UserInfo.advertiseTimes = d.advertiseTimes || 0;
    }

    /**
     * 更新任务进度
     * @param id 任务id
     */
    private taskUpdate(id: number) {
        TaskService.taskAddTimes(id);
    }
}

export default new HttpDataControl();
