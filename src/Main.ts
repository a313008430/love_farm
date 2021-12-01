import { AppEventMap, EventMaps } from "./common/EventMaps";
import Res from "./common/Res";
import UserInfo from "./dataService/UserInfo";
import EventGlobal from "./core/EventGlobal";
import { ViewManager } from "./core/ViewManager";
import GameConfig from "./GameConfig";
import PlantService from "./dataService/PlantService";
import LandService from "./dataService/LandService";
import WarehouseService from "./dataService/WarehouseService";
import HttpControl from "./common/HttpControl";
import LocalStorageService from "./dataService/LocalStorageService";
import ConfigGame from "./common/ConfigGame";
import Core from "./core/index";
import AppCore from "./core/App";
class Main {
    /** 自定义渲染id列表 */
    static customRenderID: number[] = [];

    constructor() {
        //根据IDE设置初始化引擎
        if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
        else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = GameConfig.scaleMode;
        Laya.stage.screenMode = GameConfig.screenMode;
        Laya.stage.alignV = GameConfig.alignV;
        Laya.stage.alignH = GameConfig.alignH;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
        if (GameConfig.stat) Laya.Stat.show();
        Laya.alertGlobalError(true);
        Laya.stage.bgColor = "#ffffff";

        DEBUG && GameConfig.stat && Laya.Stat.show();

        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable(
            "version.json",
            Laya.Handler.create(this, this.onVersionLoaded),
            Laya.ResourceVersion.FILENAME_VERSION
        );
    }

    onVersionLoaded(): void {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable(
            "fileconfig.json",
            Laya.Handler.create(this, this.onConfigLoaded)
        );
    }

    async onConfigLoaded() {
        // 自定义渲染id
        Config["customRenderID"] = [];
        LocalStorageService.init();
        HttpControl.inst.init(ConfigGame.baseUrl);
        Core.eventGlobal.on(EventMaps.login_game, this, this.loginGame);
        Laya.SoundManager.useAudioMusic = false;
        AppCore.listenAppFunction();

        // ViewManager.inst.init();

        await new Promise((resolve) => {
            ViewManager.inst.open(Res.views.LoginView, {
                showLoad: false,
                parm: {
                    call: (d) => {
                        this.initGameData(d);
                        resolve(null);
                    },
                },
                complete: (e) => {
                    Laya.timer.frameOnce(1, this, () => {
                        AppCore.runAppFunction({ uri: AppEventMap.closeImage, data: {} });
                    });
                    // Laya.View.setLoadingPage(e);
                    // Laya.timer.frameOnce(1, this, () => {
                    //     //后期优化
                    //     Laya.View.showLoadingPage(null, 0);
                    //     // Laya.View.hideLoadingPage(999999999999999);
                    //     resolve(null);
                    // });
                },
            });
        });

        this.loginGame();
    }

    loginGame() {
        Laya.loader.load(
            Res.scenes,
            Laya.Handler.create(this, () => {
                console.log("ok");
                // Res.scenes.forEach((e) => {
                //     Laya.loader.clearTextureRes(e);
                // });

                Core.audio.playMusic(Res.audios.BGM, 0);

                Laya.timer.frameOnce(1, this, () => {
                    Laya.View.hideLoadingPage(1000);
                    ViewManager.inst.open(GameConfig.startScene);
                });
            }),
            Laya.Handler.create(
                this,
                (e) => {
                    EventGlobal.event(EventMaps.load_progress, e);
                },
                null,
                false
            )
        );
    }

    initGameData(d: NetInit) {}
}
//激活启动类
new Main();
