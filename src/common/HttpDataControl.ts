import Core from "src/core/index";
import LandService from "src/dataService/LandService";
import LocalStorageService from "src/dataService/LocalStorageService";
import PetService from "src/dataService/PetService";
import PlantService from "src/dataService/PlantService";
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
            case ApiHttp.landGather:
                this.updateUserInfo(d.data);
                break;
            case ApiHttp.landSow:
                this.updateUserInfo(d.data);
                break;
            case ApiHttp.landUnlock:
                this.updateUserInfo(d.data);
                break;
            case ApiHttp.seedsUnlock:
                this.updateUserInfo(d.data);
                break;
            case ApiHttp.warehouseSell:
                this.updateUserInfo(d.data);
                break;
            case ApiHttp.petBuy:
                this.updateUserInfo(d.data);
                break;
            case ApiHttp.feedBuy:
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
        Core.view.open(Res.views.HintView, {
            parm: { text: `errorCode ${errorCode} ${JSON.stringify(data)}` },
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
        PetService.init(d.pets);
        LocalStorageService.setJSON("isLogin", true);
        if (d.token) LocalStorageService.setJSON("token", d.token);
        LandService.init(d.lands);
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
}

export default new HttpDataControl();
