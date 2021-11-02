import { EventMaps } from "./common/EventMaps";
import Res from "./common/Res";
import UserInfo from "./dataService/UserInfo";
import EventGlobal from "./core/EventGlobal";
import { ViewManager } from "./core/ViewManager";
import GameConfig from "./GameConfig";
import PlantService from "./dataService/PlantService";
import LandService from "./dataService/LandService";
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
        this.initGameData();

        // Laya.SoundManager.playSound("res/audio/draw.mp3");
        //如果通过设备静音键让音频自动跟随设备静音。需要将useAudioMusic设置为false。
        // SoundManager.useAudioMusic=false；
        // Laya.SoundManager.playMusic(Res.audios.win);

        await new Promise((resolve) => {
            ViewManager.inst.open(Res.views.LoadDialog, {
                showLoad: false,
                complete: (e) => {
                    Laya.View.setLoadingPage(e);
                    Laya.timer.frameOnce(1, this, () => {
                        //后期优化
                        Laya.View.hideLoadingPage(999999999999999);
                        resolve(null);
                    });
                },
            });
        });

        Laya.loader.load(
            Res.scenes,
            Laya.Handler.create(this, () => {
                console.log("ok");
                Laya.timer.frameOnce(1, this, () => {
                    Laya.View.hideLoadingPage(300);
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

    initGameData() {
        PlantService.init();
        LandService.init([
            {
                //土地id对应的也是下标
                id: 0,
                //土地等级
                lv: 1,
                //正在生长的东西的id 种子id, 如果剩余时间为0，表示 已熟，前端自己去查对应可生产的东西，然后改变显示状态
                productId: null,
                //剩余时间 如果为0 就为成熟 单位秒
                matureTimeLeft: 3,
            },
            {
                //土地id对应的也是下标
                id: 3,
                //土地等级
                lv: 9,
                //正在生长的东西的id 种子id, 如果剩余时间为0，表示 已熟，前端自己去查对应可生产的东西，然后改变显示状态
                productId: null,
                //剩余时间 如果为0 就为成熟 单位秒
                matureTimeLeft: 0,
            },
        ]);
    }
}
//激活启动类
new Main();
