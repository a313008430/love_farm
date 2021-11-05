import Core from "src/core/index";
import LandService from "src/dataService/LandService";
import LocalStorageService from "src/dataService/LocalStorageService";
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
                this.login(d.data);
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
        Core.view.open(Res.views.HintView, { parm: { text: `errorCode ${errorCode}` } });
    }

    /**
     * 登录
     * @param d 数据
     */
    private login(d: NetInit) {
        PlantService.init(d.seedsList);
        WarehouseService.init();
        UserInfo.uid = d.userId;
        UserInfo.diamond = d.diamond;
        UserInfo.gold = d.gold;
        UserInfo.nickname = d.nickName;
        UserInfo.avatar = d.profile || "";
        LocalStorageService.setJSON("isLogin", true);
        LandService.init(d.landList);
    }
}

export default new HttpDataControl();
