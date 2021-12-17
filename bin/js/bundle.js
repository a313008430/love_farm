(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // src/common/EventMaps.ts
  var EventMaps;
  (function(EventMaps3) {
    EventMaps3["load_progress"] = "load_progress";
    EventMaps3["update_field"] = "update_field";
    EventMaps3["update_Order"] = "update_Order";
    EventMaps3["land_speed_up"] = "land_speed_up";
    EventMaps3["login_game"] = "login_game";
    EventMaps3["login_out"] = "login_out";
    EventMaps3["update_task"] = "update_task";
    EventMaps3["update_guid_hand"] = "update_guid_hand";
    EventMaps3["play_get_reward"] = "play_get_reward";
    EventMaps3["play_ad_get_reward"] = "play_ad_get_reward";
    EventMaps3["go_friend_home"] = "go_friend_home";
    EventMaps3["go_home"] = "go_home";
    EventMaps3["open_friend"] = "open_friend";
    EventMaps3["plant_sow"] = "plant_sow";
    EventMaps3["add_diamond_gold"] = "add_diamond_gold";
  })(EventMaps || (EventMaps = {}));
  var AppEventMap;
  (function(AppEventMap2) {
    AppEventMap2["ad"] = "ad";
    AppEventMap2["closeImage"] = "closeImage";
    AppEventMap2["wxLogin"] = "wxLogin";
    AppEventMap2["wxLoginSuccess"] = "wxLoginSuccess";
    AppEventMap2["wxShare"] = "wxShare";
    AppEventMap2["eventCount"] = "eventCount";
    AppEventMap2["privacyAgreement"] = "privacyAgreement";
    AppEventMap2["serviceAgreement"] = "serviceAgreement";
    AppEventMap2["registerSuccess"] = "registerSuccess";
    AppEventMap2["loginSuccess"] = "LoginSuccess";
    AppEventMap2["clearCache"] = "clearCache";
    AppEventMap2["showBackground"] = "showBackground";
  })(AppEventMap || (AppEventMap = {}));

  // src/common/Res.ts
  var views;
  (function(views3) {
    views3["AboutView"] = "scenes/views/AboutView.scene";
    views3["AddLandView"] = "scenes/views/AddLandView.scene";
    views3["BuyVitalityView"] = "scenes/views/BuyVitalityView.scene";
    views3["FieldLevelUpView"] = "scenes/views/FieldLevelUpView.scene";
    views3["FriendsDescView"] = "scenes/views/FriendsDescView.scene";
    views3["FriendsRewardView"] = "scenes/views/FriendsRewardView.scene";
    views3["FriendsView"] = "scenes/views/FriendsView.scene";
    views3["GuideView"] = "scenes/views/GuideView.scene";
    views3["HintView"] = "scenes/views/HintView.scene";
    views3["LoginView"] = "scenes/views/LoginView.scene";
    views3["MailDescView"] = "scenes/views/MailDescView.scene";
    views3["MailView"] = "scenes/views/MailView.scene";
    views3["MainView"] = "scenes/views/MainView.scene";
    views3["OrderView"] = "scenes/views/OrderView.scene";
    views3["OverView"] = "scenes/views/OverView.scene";
    views3["SettingView"] = "scenes/views/SettingView.scene";
    views3["ShopView"] = "scenes/views/ShopView.scene";
    views3["SignInDescView"] = "scenes/views/SignInDescView.scene";
    views3["SignInView"] = "scenes/views/SignInView.scene";
    views3["SpeedUpView"] = "scenes/views/SpeedUpView.scene";
    views3["TaskView"] = "scenes/views/TaskView.scene";
    views3["WarehouseView"] = "scenes/views/WarehouseView.scene";
    views3["WithdrawRecordView"] = "scenes/views/WithdrawRecordView.scene";
  })(views || (views = {}));
  var audios;
  (function(audios2) {
    audios2["zhongzhi"] = "res/audio/zhongzhi.mp3";
    audios2["tudishengji"] = "res/audio/tudishengji.mp3";
    audios2["shoucai"] = "res/audio/shoucai.mp3";
    audios2["goujiaosheng"] = "res/audio/goujiaosheng.mp3";
    audios2["dakaicangku"] = "res/audio/dakaicangku.mp3";
    audios2["button_click"] = "res/audio/button_click.mp3";
    audios2["BGM"] = "res/audio/BGM.mp3";
  })(audios || (audios = {}));
  var scenes = [
    "scenes/views/WithdrawRecordView.scene",
    "scenes/views/WarehouseView.scene",
    "scenes/views/TaskView.scene",
    "scenes/views/SpeedUpView.scene",
    "scenes/views/SignInView.scene",
    "scenes/views/SignInDescView.scene",
    "scenes/views/ShopView.scene",
    "scenes/views/SettingView.scene",
    "scenes/views/OverView.scene",
    "scenes/views/OrderView.scene",
    "scenes/views/MainView.scene",
    "scenes/views/MailView.scene",
    "scenes/views/MailDescView.scene",
    "scenes/views/LoginView.scene",
    "scenes/views/HintView.scene",
    "scenes/views/GuideView.scene",
    "scenes/views/FriendsView.scene",
    "scenes/views/FriendsRewardView.scene",
    "scenes/views/FriendsDescView.scene",
    "scenes/views/FieldLevelUpView.scene",
    "scenes/views/BuyVitalityView.scene",
    "scenes/views/AddLandView.scene",
    "scenes/views/AboutView.scene",
    "scenes/prefab/MailItem.prefab",
    "scenes/prefab/GetReward.prefab",
    "scenes/prefab/FloatRewardIcon.prefab",
    "scenes/prefab/FieldPrefab.prefab",
    "scenes/components/Button.prefab",
    "scenes/ani/landUp.ani",
    "res/loadingBg.png",
    "res/img_woodtitle.png",
    "res/img_storeHouseBg.png",
    "res/img_storebg.png",
    "res/img_shelf.png",
    "res/img_popUpBgMain.png",
    "res/img_popUpBg.png",
    "res/img_landBg.png",
    "res/img_inviteBg1.png",
    "res/img_housetop.png",
    "res/img_hongbaoban.png",
    "res/img_homepageBg3.png",
    "res/img_homepageBg2.png",
    "res/img_homepageBg1.png",
    "res/img_farmlandLogo.png",
    "res/figure5.png",
    "res/figure5.atlas",
    "res/figure4.png",
    "res/figure4.atlas",
    "res/figure3.png",
    "res/figure3.atlas",
    "res/figure2.png",
    "res/figure2.atlas",
    "res/figure1.png",
    "res/figure1.atlas",
    "res/figure.png",
    "res/figure.atlas",
    "res/dog_1010.png",
    "res/dog_1010.atlas",
    "res/dog_1009.png",
    "res/dog_1009.atlas",
    "res/dog_1008.png",
    "res/dog_1008.atlas",
    "res/dog_1007.png",
    "res/dog_1007.atlas",
    "res/dog_1006.png",
    "res/dog_1006.atlas",
    "res/dog_1005.png",
    "res/dog_1005.atlas",
    "res/dog_1004.png",
    "res/dog_1004.atlas",
    "res/dog_1003.png",
    "res/dog_1003.atlas",
    "res/dog_1002.png",
    "res/dog_1002.atlas",
    "res/dog_1001.png",
    "res/dog_1001.atlas",
    "res/shader/vs.vs",
    "res/shader/ps.fs",
    "res/audio/zhongzhi.mp3",
    "res/audio/tudishengji.mp3",
    "res/audio/shoucai.mp3",
    "res/audio/goujiaosheng.mp3",
    "res/audio/dakaicangku.mp3",
    "res/audio/button_click.mp3",
    "res/audio/BGM.mp3",
    "res/atlas/plant_icon.png",
    "res/atlas/plant_icon.atlas",
    "res/atlas/pet_feed.png",
    "res/atlas/pet_feed.atlas",
    "res/atlas/main_scene.png",
    "res/atlas/main_scene.atlas",
    "res/atlas/load.png",
    "res/atlas/load.atlas",
    "res/atlas/game.png",
    "res/atlas/game.atlas"
  ];
  var Res = {
    views,
    scenes,
    audios
  };
  var Res_default = Res;

  // src/core/EventGlobal.ts
  var EventGlobal = new Laya.EventDispatcher();
  var EventClass = new Map();
  function EventOn(name) {
    return (target, propertyKey, descriptor) => {
      if (!EventClass.get(target)) {
        EventClass.set(target, []);
      }
      EventClass.get(target).push({ key: name, fn: descriptor.value });
    };
  }
  var BindNameClass = new Map();
  function FindByName(target, propertyKey) {
    if (!BindNameClass.has(target)) {
      BindNameClass.set(target, []);
    }
    BindNameClass.get(target).push(propertyKey);
  }
  var EventGlobal_default = EventGlobal;

  // src/core/ObservableProperty.ts
  var callers = new Map();
  var ObservableControl = class {
    constructor() {
      this.keyEvents = new Map();
    }
    watch(Obj, caller) {
      if (!callers.has(caller)) {
        callers.set(caller, []);
      }
      let keyEvent = this.keyEvents;
      if (!keyEvent.has(Obj)) {
        keyEvent.set(Obj, new Map());
      }
      const keyBind = (key, call) => {
        let _obj = keyEvent.get(Obj);
        if (!_obj.has(key)) {
          _obj.set(key, []);
          if (Obj["#" + key] == void 0) {
            Obj["#" + key] = Obj[key];
            Object.defineProperty(Obj, key, {
              configurable: false,
              enumerable: false,
              set: function(v) {
                this["#" + key] = v;
                _obj.get(key).forEach((e) => {
                  e(v);
                });
              },
              get: function() {
                return this["#" + key];
              }
            });
          }
        }
        _obj.get(key).push(call);
        callers.get(caller).push(call);
        call(Obj[key]);
        return { key: keyBind };
      };
      return { key: keyBind };
    }
    removeByCaller(caller, obj = null) {
      var _a;
      (_a = callers.get(caller)) == null ? void 0 : _a.forEach((e) => {
        var _a2, _b;
        if (obj) {
          (_a2 = this.keyEvents) == null ? void 0 : _a2.get(obj).forEach((ev) => {
            let indexOf = ev.indexOf(e);
            if (indexOf > -1)
              ev.splice(indexOf, 1);
          });
        } else {
          (_b = this.keyEvents) == null ? void 0 : _b.forEach((k) => {
            k.forEach((ev) => {
              let indexOf = ev.indexOf(e);
              if (indexOf > -1)
                ev.splice(indexOf, 1);
            });
          });
        }
      });
    }
  };
  var ObservableProperty_default = new ObservableControl();

  // src/core/GameScript.ts
  var GameScript = class extends Laya.Script {
    constructor() {
      super();
      let bindEvent = EventClass.get(this.constructor.prototype);
      bindEvent == null ? void 0 : bindEvent.forEach((d) => {
        EventGlobal_default.on(d.key, this, d.fn);
      });
    }
    onAwake() {
      var _a;
      (_a = BindNameClass.get(this.constructor.prototype)) == null ? void 0 : _a.forEach((e) => {
        this[e] = this.owner.getChildByName(e);
      });
      this.onHdAwake();
    }
    onOpened(e) {
    }
    onHdAwake() {
    }
    onEnable() {
      this.onHdEnable();
    }
    onHdEnable() {
    }
    onStart() {
      this.onHdStart();
    }
    onHdStart() {
    }
    onUpdate() {
      this.onHdUpdate();
    }
    onHdUpdate() {
    }
    onDisable() {
      this.onHdDisable();
    }
    onHdDisable() {
    }
    onDestroy() {
      EventGlobal_default.offAllCaller(this);
      this.onHdDestroy();
      Laya.timer.once(1, null, () => {
        ObservableProperty_default.removeByCaller(this);
        let keys = Object.getOwnPropertyNames(this);
        for (let x = 0, l = keys.length; x < l; x++) {
          this[keys[x]] = null;
        }
      });
    }
    onHdDestroy() {
    }
  };

  // src/components/ViewShowAni.ts
  var ViewShowAni = class extends GameScript {
    constructor() {
      super(...arguments);
      this.bg = null;
      this.content = null;
      this.tweenList = [];
    }
    doOpen() {
    }
    doClose() {
    }
    onEnable() {
      let dialog = this.owner;
      this.bg.alpha = 0;
      this.tweenList.push(Laya.Tween.to(this.bg, { alpha: 0.75 }, 100, null, Laya.Handler.create(this, this.doOpen, [dialog]), 0, false, false));
      switch (this.aniType) {
        case "scaleShow":
          this.content.scale(1, 1);
          this.tweenList.push(Laya.Tween.from(this.content, { x: Laya.stage.width / 2, y: Laya.stage.height / 2, scaleX: 0, scaleY: 0 }, 300, Laya.Ease.backOut, Laya.Handler.create(this, this.doOpen, [dialog]), 0, false, false));
          break;
        default:
          this.content.bottom = -this.content.height;
          this.tweenList.push(Laya.Tween.to(this.content, { bottom: 0 }, 300, Laya.Ease.circOut, Laya.Handler.create(this, this.doOpen, [dialog]), 0, false, false));
          break;
      }
    }
    closeView() {
      let dialog = this.owner;
      return new Promise((resolve) => {
        this.tweenList.push(Laya.Tween.to(this.bg, { alpha: 0 }, 200, null, Laya.Handler.create(this, this.doOpen, [dialog]), 0, false, false));
        switch (this.aniType) {
          case "scaleShow":
            this.tweenList.push(Laya.Tween.to(this.content, {
              x: Laya.stage.width / 2,
              y: Laya.stage.height / 2,
              scaleX: 0.5,
              scaleY: 0.5,
              alpha: 0
            }, 150, null, new Laya.Handler(this, () => {
              this.doClose();
              resolve(null);
            }, [dialog]), 0, false, false));
            break;
          default:
            this.tweenList.push(Laya.Tween.to(this.content, { bottom: -this.content.height }, 200, null, new Laya.Handler(this, () => {
              this.doClose();
              resolve(null);
            }, [dialog]), 0, false, false));
            break;
        }
      });
    }
    onDisable() {
      this.tweenList.forEach((e) => {
        Laya.Tween.clear(e);
      });
      this.tweenList.length = 0;
    }
  };

  // src/core/Instance.ts
  var instanceList = new Map();
  var instanceId = 100;
  function Instance(target, key) {
    if (!instanceList.has(target["#instanceId"])) {
      instanceId++;
      target["#instanceId"] = instanceId;
      instanceList.set(instanceId, new target());
    }
    target[key] = instanceList.get(instanceId);
  }

  // src/core/ViewManager.ts
  var viewMaps = [];
  var ViewManager = class {
    loginOut() {
      viewMaps.forEach((v) => {
        v.view.getComponents(Laya.Script).forEach((e) => {
          Laya.timer.clearAll(e);
          e.destroy();
        });
        this.closeViewLog(v.view.url, true);
        v.view.destroy(true);
      });
      viewMaps.length = 0;
    }
    open(url, data = {
      closeOther: false,
      showLoad: false,
      showLoadDelay: 100,
      hideLoadDelay: 0
    }) {
      if (!url) {
        console.warn("miss path!");
        return;
      }
      if (data.showLoad) {
        Laya.View.showLoadingPage(null, data.showLoadDelay);
        if (url !== Res_default.views.LoginView) {
          Laya.timer.frameOnce(1, this, () => {
            Laya.View.hideLoadingPage(data.hideLoadDelay);
          });
        }
      }
      data.closeOther = false;
      Laya.View.open(url, data.closeOther, data.parm, Laya.Handler.create(this, (e) => {
        if (url != Res_default.views.LoginView)
          viewMaps.push({ url, view: e });
        let conList = e.getComponents(Laya.Script);
        if (conList) {
          conList.forEach((e2) => e2.enabled && e2.onOpened && e2.onOpened(data.parm));
        }
        data.complete && data.complete(e);
        console.log(`%c ==> open %c${url.match(/\w+(?=\.)/)[0]} `, `color:#7ed6df;font-weight:700;background-color:#dff9fb`, `color:#22a6b3;font-weight:700;background-color:#dff9fb`);
      }), data.progress);
    }
    close(_0) {
      return __async(this, arguments, function* (url, all = false, destroy = false, aniCom = ViewShowAni) {
        destroy = true;
        let vAni;
        for (let x = viewMaps.length - 1; x > -1; x--) {
          if (url === viewMaps[x].url) {
            let v = viewMaps[x];
            viewMaps.splice(x, 1);
            vAni = v.view.getComponent(aniCom);
            if (vAni) {
              vAni.closeView().then(() => {
                if (destroy) {
                  v.view.destroy(true);
                  this.closeViewLog(url, true);
                } else {
                  v.view.removeSelf();
                  this.closeViewLog(url);
                }
              });
            } else {
              if (destroy) {
                v.view.destroy(true);
                this.closeViewLog(url, true);
              } else {
                v.view.removeSelf();
                this.closeViewLog(url);
              }
            }
            if (url === Res_default.views.HintView)
              return;
            if (!all)
              break;
          }
        }
        if (!viewMaps.length)
          return;
        let closeLen = 0;
        for (let x = viewMaps.length - 1; x > -1; x--) {
          if (!viewMaps[x].view.parent) {
            closeLen++;
          }
        }
        if (closeLen === viewMaps.length) {
          viewMaps.length = 0;
          this.open(Res_default.views.MainView);
        }
        console.log(viewMaps);
      });
    }
    closeViewLog(url, destroy = false) {
      console.log(`%c <== ${destroy ? "destroy" : "disable"} %c${url.match(/\w+(?=\.)/)[0]} `, `color:#ff7979;font-weight:700;background-color:#dff9fb`, `color:#eb4d4b;font-weight:700;background-color:#dff9fb`);
    }
    openHint(data) {
      this.open(Res_default.views.HintView, { parm: data });
    }
    clearViewMaps() {
      viewMaps.length = 0;
    }
    setOverView(open, call) {
      if (open) {
        this.open(Res_default.views.OverView, {
          parm: {
            call: (v) => {
              this.overViewCom = v;
              v.close(call);
            }
          }
        });
      } else {
        if (this.overViewCom) {
          this.overViewCom.open(call);
        }
      }
    }
  };
  __decorateClass([
    Instance
  ], ViewManager, "inst", 2);

  // src/common/ConfigGame.ts
  var BuildType;
  (function(BuildType2) {
    BuildType2["test"] = "test";
    BuildType2["online"] = "online";
    BuildType2["debug"] = "debug";
  })(BuildType || (BuildType = {}));
  console.log("debug");
  var baseUrl = "http://game.ahd168.com:3000";
  switch ("debug") {
    case BuildType.debug:
      baseUrl = "//192.168.101.50:3000";
      break;
    case BuildType.online:
      baseUrl = "http://game.ahd168.com:3100";
      break;
  }
  var ConfigGame_default = {
    diamondId: 1001,
    goldId: 1002,
    petDigestIntervalTime: 60,
    localKey: "love_HD_farm",
    userVitalityLimit: 10,
    baseUrl,
    ApiTypeDefault: 1,
    ApiTypeAD: 2,
    ADSpeedUpTimes: 6,
    version: "1.0.0",
    channel: ""
  };

  // src/core/App.ts
  var EventMap = new Map();
  var AppCore = class {
    static runAppFunction(data) {
      return new Promise((resolve, reject) => {
        let webAppFunction;
        if (Laya.Browser.onIOS) {
        } else {
          if (window["$App"] && window["$App"]["webRequest"]) {
            window["$App"]["webRequest"](JSON.stringify(data));
            if (data.timestamp) {
              EventMap.set(data.timestamp, resolve);
            }
          } else {
            resolve(null);
          }
        }
      });
    }
    static listenAppFunction() {
      window["appResponse"] = (d) => {
        if (EventMap.has(d == null ? void 0 : d.timestamp)) {
          EventMap.get(d.timestamp)(d);
        }
        console.log(d);
      };
    }
  };
  AppCore.typeIos = 1;
  AppCore.typeAndroid = 2;

  // src/core/AudioControl.ts
  var AudioControl = class {
    playSound(url, loops, complete, soundClass, startTime) {
      Laya.SoundManager.playSound(url, loops, complete, soundClass, startTime);
    }
    playMusic(url, loops = 0, complete, startTime) {
      Laya.SoundManager.playMusic(url, loops, complete, startTime);
    }
    set soundMuted(state) {
      Laya.SoundManager.soundMuted = state;
    }
    get soundMuted() {
      return Laya.SoundManager.soundMuted;
    }
    set musicMuted(state) {
      Laya.SoundManager.musicMuted = state;
    }
    get musicMuted() {
      return Laya.SoundManager.musicMuted;
    }
  };

  // src/core/index.ts
  var Core = {
    observableProperty: ObservableProperty_default,
    view: ViewManager.inst,
    gameScript: GameScript,
    instance: Instance,
    eventOn: EventOn,
    findByName: FindByName,
    eventGlobal: EventGlobal_default,
    audio: new AudioControl()
  };
  var core_default = Core;

  // src/view/AboutView.ts
  var AboutView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.version = null;
      this.channel = null;
    }
    onOpened() {
      this.version.text = `\u7248\u672C\u53F7\uFF1AV${ConfigGame_default.version}`;
      this.channel.text = `\u6E20\u9053\u53F7\uFF1A${ConfigGame_default.channel}`;
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.AboutView);
          break;
        case "user_agreement":
          AppCore.runAppFunction({ uri: AppEventMap.serviceAgreement, data: {} });
          break;
        case "privacy":
          AppCore.runAppFunction({ uri: AppEventMap.privacyAgreement, data: {} });
          break;
      }
    }
  };

  // src/components/Button.ts
  var Button = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.isScale = false;
      this.scaleVal = 0.9;
    }
    onEnable() {
      this.owner.mouseEnabled = true;
      this.oldScaleX = this.owner.get_scaleX();
      this.oldScaleY = this.owner.get_scaleY();
    }
    onClick() {
      core_default.audio.playSound(Res_default.audios.button_click);
    }
    onMouseDown() {
      this.setSkin(this.downRes);
      this.setAni(this.scaleVal);
    }
    onMouseOut() {
      this.setSkin(this.defaultRes);
      this.setAni(1);
    }
    onMouseUp() {
      this.setSkin(this.defaultRes);
      this.setAni(1);
    }
    setAni(scale) {
      if (!this.isScale)
        return;
      Laya.Tween.to(this.owner, { scaleX: scale * this.oldScaleX, scaleY: scale * this.oldScaleY }, 300, Laya.Ease.backOut, null, 0, false, false);
    }
    setSkin(skin) {
      if (!skin)
        return;
      this.owner.skin = skin;
    }
    onDisable() {
    }
  };

  // src/dataService/LocalStorageService.ts
  var LocalData = {
    isLogin: false,
    token: null,
    sound: false,
    music: false,
    version: "0.0.0"
  };
  var LocalStorageService = class {
    constructor() {
      this.localData = LocalData;
    }
    init() {
      this.localData = Laya.LocalStorage.getJSON(ConfigGame_default.localKey) || LocalData;
    }
    getJSON() {
      return this.localData;
    }
    setJSON(key, data) {
      this.localData[key] = data;
      Laya.LocalStorage.setJSON(ConfigGame_default.localKey, this.localData);
    }
    clear() {
      Laya.LocalStorage.setJSON(ConfigGame_default.localKey, { version: this.localData.version });
      this.localData = {
        isLogin: false,
        token: null,
        sound: true,
        music: true,
        version: this.localData.version
      };
    }
  };
  var LocalStorageService_default = new LocalStorageService();

  // src/common/Table.ts
  var Table = { "task": [{ "id": 1001, "reward": "1001:50", "times": 1, "title": "\u7B7E\u5230\u9886\u94BB\u77F3", "desc": "\u770B\u89C6\u9891\u7B7E\u5230", "icon": null }, { "id": 1002, "reward": "1001:100", "times": 10, "title": "\u83DC\u5730\u65BD\u80A510\u6B21", "desc": "\u83DC\u5730\u52A0\u901F10\u6B21", "icon": null }, { "id": 1003, "reward": "1001:50", "times": 10, "title": "\u83DC\u5730\u6536\u83B710\u6B21", "desc": "\u83DC\u5730\u6536\u83B710\u6B21", "icon": null }, { "id": 1004, "reward": "1001:50", "times": 5, "title": "\u8BBF\u53CB5\u6B21", "desc": "\u5077\u83DC5\u6B21", "icon": null }, { "id": 1005, "reward": "1001:20", "times": 3, "title": "\u5582\u517B\u72D7\u72D73\u6B21", "desc": "\u5582\u517B\u72D7\u72D73\u6B21", "icon": null }, { "id": 1006, "reward": "1001:20", "times": 5, "title": "\u8D2D\u4E70\u9972\u65995\u6B21", "desc": "\u8D2D\u4E70\u9972\u65995\u6B21", "icon": null }, { "id": 1007, "reward": "1001:20", "times": 10, "title": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "desc": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "icon": null }, { "id": 1008, "reward": "1002:500", "times": 3, "title": "\u51FA\u552E\u4F5C\u72693\u6B21", "desc": "\u51FA\u552E\u4F5C\u72693\u6B21", "icon": null }, { "id": 1009, "reward": "1001:100", "times": 5, "title": "\u6DFB\u52A0\u597D\u53CB", "desc": "\u6DFB\u52A0\u597D\u53CB5\u4E2A", "icon": null }, { "id": 1010, "reward": "1001:50", "times": 1, "title": "\u5206\u4EAB\u5F97\u597D\u793C", "desc": "\u5206\u4EAB\u4E00\u6B21", "icon": null }, { "id": 1011, "reward": "1002:500", "times": 3, "title": "\u6307\u5B9A\u79CD\u690D", "desc": "\u79CD\u690D\u6307\u5B9A\u79CD\u5B50", "icon": null }, { "id": 1012, "reward": "1001:50", "times": 5, "title": "\u770B\u89C6\u9891\u9886\u798F\u5229", "desc": "\u770B\u89C6\u98915\u6B21", "icon": null }], "signIn": [{ "id": 1001, "days": 7, "reward": "1001:20000" }, { "id": 1002, "days": 10, "reward": "1001:30000" }, { "id": 1003, "days": 15, "reward": "1001:50000" }, { "id": 1004, "days": 20, "reward": "1001:80000" }, { "id": 1005, "days": 30, "reward": "1001:120000" }, { "id": 1006, "days": 50, "reward": "1001:180000" }, { "id": 1007, "days": 80, "reward": "1001:300000" }, { "id": 1008, "days": 100, "reward": "1001:350000" }, { "id": 1009, "days": 150, "reward": "1001:500000" }], "plant": [{ "id": 1001, "name": "\u6C34\u7A3B", "icon": "plant_icon/1002_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1002, "name": "\u5927\u8C46", "icon": "plant_icon/1004_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1003, "name": "\u5927\u849C", "icon": "plant_icon/1012_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "240", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1004, "name": "\u5305\u5FC3\u83DC", "icon": "plant_icon/1006_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "1~2", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1005, "name": "\u571F\u8C46", "icon": "plant_icon/1007_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1006, "name": "\u841D\u535C", "icon": "plant_icon/1005_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1007, "name": "\u5C0F\u9EA6", "icon": "plant_icon/1001_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1008, "name": "\u8FA3\u6912", "icon": "plant_icon/1010_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "600", "unlock_cost": "1002:2000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1009, "name": "\u9EC4\u74DC", "icon": "plant_icon/1011_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1010, "name": "\u8304\u5B50", "icon": "plant_icon/1013_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1011, "name": "\u80E1\u841D\u535C", "icon": "plant_icon/1008_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:4500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1012, "name": "\u5357\u74DC", "icon": "plant_icon/1014_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:5000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1013, "name": "\u7389\u7C73", "icon": "plant_icon/1003_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:5500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1014, "name": "\u7518\u8517", "icon": "plant_icon/1015_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1015, "name": "\u756A\u8304", "icon": "plant_icon/1009_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }], "pet": [{ "id": 1001, "name": "\u65FA\u8D22", "icon": "pet_feed/1001_dog.png", "vitality_max": 100, "vitality_consume": 10, "cost": "1002:3000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 34, "ability": 42 }, { "id": 1002, "name": "\u6C64\u5706", "icon": "pet_feed/1007_dog.png", "vitality_max": 100, "vitality_consume": 15, "cost": "1002:4000", "desc": "\u989C\u503C\u3001\u667A\u5546\u53CC\u53CC\u5728\u7EBF", "sensitive": 40, "ability": 48 }, { "id": 1003, "name": "\u8089\u5E72", "icon": "pet_feed/1009_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:4500", "desc": "\u6700\u5FE0\u8BDA\u7684\u4F19\u4F34", "sensitive": 45, "ability": 55 }, { "id": 1004, "name": "\u4E8C\u54C8", "icon": "pet_feed/1002_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:5000", "desc": "\u7EDD\u4E0D\u62C6\u5BB6\uFF01", "sensitive": 48, "ability": 60 }, { "id": 1005, "name": "\u5927\u773C\u775B", "icon": "pet_feed/1005_dog.png", "vitality_max": 100, "vitality_consume": 17, "cost": "1002:7000", "desc": "\u6D3B\u597D\u5403\u7684\u5C11", "sensitive": 50, "ability": 75 }, { "id": 1006, "name": "\u5C0F\u5C3E\u5DF4", "icon": "pet_feed/1004_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:7500", "desc": "\u6B66\u529B\u5929\u8D4B\u5DF2\u70B9\u6EE1~\u62FF\u634F\uFF01", "sensitive": 60, "ability": 80 }, { "id": 1007, "name": "\u7403\u7403", "icon": "pet_feed/1008_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u5C31\u4E24\u4E2A\u5B57\uFF0C\u542C\u8BDD\uFF01", "sensitive": 69, "ability": 85 }, { "id": 1008, "name": "\u5C0F\u767D", "icon": "pet_feed/1003_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u770B\u5BB6\u3001\u770B\u83DC\u3001\u770B\u5B69\u5B50", "sensitive": 76, "ability": 88 }, { "id": 1009, "name": "\u70B9\u70B9", "icon": "pet_feed/1006_dog.png", "vitality_max": 100, "vitality_consume": 19, "cost": "1002:10000", "desc": "\u4F60\u503C\u5F97\u62E5\u6709\uFF01", "sensitive": 85, "ability": 93 }, { "id": 1010, "name": "\u95F7\u58A9", "icon": "pet_feed/1010_dog.png", "vitality_max": 100, "vitality_consume": 30, "cost": "1002:15000", "desc": "\u957F\u5F97\u5C31\u5F88\u51F6\uFF0C\u6293\u5C0F\u5077\u66F4\u51F6", "sensitive": 90, "ability": 99 }], "order": [{ "id": 1, "commission": "1.12", "condition": "1001:2", "extra_reward": null }, { "id": 2, "commission": "0.87", "condition": "1001:1,1002:2", "extra_reward": null }, { "id": 3, "commission": "0.69", "condition": "1001:1,1003:2,1002:3", "extra_reward": null }, { "id": 4, "commission": "0.61", "condition": "1002:4,1003:3,1004:3,1001:4", "extra_reward": null }, { "id": 5, "commission": "0.61", "condition": "1004:6,1002:5,1005:4,1001:5", "extra_reward": null }, { "id": 6, "commission": "0.68", "condition": "1003:10,1004:5,1005:3,1006:3", "extra_reward": null }, { "id": 7, "commission": "0.43", "condition": "1007:4,1003:5,1004:7,1006:10", "extra_reward": null }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:5,1002:5", "extra_reward": null }, { "id": 9, "commission": "0.39", "condition": "1006:2,1009:10,1007:8,1003:8", "extra_reward": null }, { "id": 10, "commission": "0.22", "condition": "1006:10,1010:5,1008:10,1009:6", "extra_reward": "1001:800" }, { "id": 11, "commission": "0.76", "condition": "1009:5,1004:10,1001:9,1002:10", "extra_reward": null }, { "id": 12, "commission": "0.43", "condition": "1007:6,1003:11,1011:6,1005:10", "extra_reward": null }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:8", "extra_reward": null }, { "id": 14, "commission": "0.55", "condition": "1013:10,1008:8,1006:6,1001:10", "extra_reward": null }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:10,1011:12,1001:10", "extra_reward": null }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17", "extra_reward": null }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:6,1015:12,1001:14", "extra_reward": null }, { "id": 18, "commission": 0.48, "condition": "1008:14,1011:12,1009:15,1002:5", "extra_reward": null }, { "id": 19, "commission": 0.75, "condition": "1013:10,1003:20,1014:11,1001:7", "extra_reward": null }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:12", "extra_reward": "1001:900" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:14,1005:16,1007:15", "extra_reward": null }, { "id": 22, "commission": "0.4", "condition": "1015:19,1007:12,1011:5,1004:17", "extra_reward": null }, { "id": 23, "commission": "0.4", "condition": "1003:19,1014:22,1015:16,1008:14", "extra_reward": null }, { "id": 24, "commission": 0.77, "condition": "1014:13,1001:17,1008:18,1004:15", "extra_reward": null }, { "id": 25, "commission": "0.39", "condition": "1012:23,1011:19,1010:15,1015:20", "extra_reward": null }, { "id": 26, "commission": 0.03, "condition": "1002:21,1011:12,1012:22,1003:19", "extra_reward": null }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:20,1011:17", "extra_reward": null }, { "id": 28, "commission": 0.53, "condition": "1014:17,1007:12,1011:17,1003:17", "extra_reward": null }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:18", "extra_reward": null }, { "id": 30, "commission": "0.34", "condition": "1011:17,1014:19,1006:14,1004:30", "extra_reward": "1001:1000" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:19,1006:11", "extra_reward": null }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:22,1012:12,1008:20", "extra_reward": null }, { "id": 33, "commission": "0.44", "condition": "1012:16,1013:20,1002:23,1009:16", "extra_reward": null }, { "id": 34, "commission": "0.42", "condition": "1009:19,1010:12,1011:14,1012:20", "extra_reward": null }, { "id": 35, "commission": "0.33", "condition": "1001:18,1004:19,1013:16,1003:20", "extra_reward": null }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:17,1007:19", "extra_reward": null }, { "id": 37, "commission": 0.44, "condition": "1012:19,1010:20,1002:14,1011:11", "extra_reward": null }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18", "extra_reward": null }, { "id": 39, "commission": 0.36, "condition": "1007:18,1012:13,1004:16,1002:26", "extra_reward": null }, { "id": 40, "commission": 0.28, "condition": "1004:30,1005:10,1008:18,1011:16", "extra_reward": "1001:1000" }, { "id": 41, "commission": "0.48", "condition": "1010:18,1009:18,1008:17,1011:26", "extra_reward": null }, { "id": 42, "commission": 0.43, "condition": "1009:21,1005:18,1007:20,1002:23", "extra_reward": null }, { "id": 43, "commission": "0.24", "condition": "1006:30,1004:14,1014:11,1008:15", "extra_reward": null }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:28,1002:34,1007:19", "extra_reward": null }, { "id": 45, "commission": "0.41", "condition": "1012:15,1010:23,1007:13,1011:13", "extra_reward": null }, { "id": 46, "commission": 0.39, "condition": "1003:22,1007:23,1010:16,1002:24", "extra_reward": null }, { "id": 47, "commission": 0.49, "condition": "1010:24,1015:20,1003:25,1014:16", "extra_reward": null }, { "id": 48, "commission": "0.26", "condition": "1013:17,1007:24,1008:37,1001:30", "extra_reward": null }, { "id": 49, "commission": 0.48, "condition": "1002:26,1004:21,1009:22,1006:20", "extra_reward": null }, { "id": 50, "commission": "0.25", "condition": "1006:27,1012:19,1008:20,1015:11", "extra_reward": "1001:1100" }, { "id": 51, "commission": "0.34", "condition": "1011:18,1004:19,1002:25,1003:11", "extra_reward": null }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:20,1001:25,1004:26", "extra_reward": null }, { "id": 53, "commission": "0.28", "condition": "1014:14,1012:12,1010:20,1015:18", "extra_reward": null }, { "id": 54, "commission": 0.45, "condition": "1005:22,1002:33,1009:16,1015:17", "extra_reward": null }, { "id": 55, "commission": "0.56", "condition": "1001:23,1014:19,1005:17,1010:15", "extra_reward": null }, { "id": 56, "commission": "0.35", "condition": "1006:27,1005:29,1009:17,1003:18", "extra_reward": null }, { "id": 57, "commission": 0.67, "condition": "1007:21,1008:17,1002:16,1009:25", "extra_reward": null }, { "id": 58, "commission": 0.32, "condition": "1006:20,1008:25,1005:24,1007:19", "extra_reward": null }, { "id": 59, "commission": 0.79, "condition": "1012:25,1009:30,1013:16,1008:15", "extra_reward": null }, { "id": 60, "commission": 0.69, "condition": "1015:26,1012:27,1010:31,1001:23", "extra_reward": "1001:1100" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:25,1011:15,1002:17", "extra_reward": null }, { "id": 62, "commission": 0.44, "condition": "1015:21,1007:15,1011:18,1006:26", "extra_reward": null }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:27", "extra_reward": null }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:29,1004:25", "extra_reward": null }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:30,1014:20,1005:15", "extra_reward": null }, { "id": 66, "commission": 0.73, "condition": "1004:25,1008:25,1002:34,1012:14", "extra_reward": null }, { "id": 67, "commission": 0.13, "condition": "1001:36,1012:20,1011:20,1003:20", "extra_reward": null }, { "id": 68, "commission": 0.69, "condition": "1013:24,1008:23,1006:16,1007:17", "extra_reward": null }, { "id": 69, "commission": 0.37, "condition": "1015:30,1004:29,1013:17,1009:10", "extra_reward": null }, { "id": 70, "commission": 0.71, "condition": "1010:23,1004:31,1011:17,1012:11", "extra_reward": "1001:1200" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:26,1003:28,1015:13", "extra_reward": null }, { "id": 72, "commission": 0.31, "condition": "1005:25,1002:38,1012:19,1010:14", "extra_reward": null }, { "id": 73, "commission": 0.39, "condition": "1012:34,1006:22,1003:27,1004:20", "extra_reward": null }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:30,1001:20", "extra_reward": null }, { "id": 75, "commission": 0.18, "condition": "1006:31,1014:30,1008:12,1002:25", "extra_reward": null }, { "id": 76, "commission": 0.51, "condition": "1007:21,1012:20,1004:11,1014:20", "extra_reward": null }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:16,1012:24,1007:30", "extra_reward": null }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:22", "extra_reward": null }, { "id": 79, "commission": 0.65, "condition": "1006:26,1004:18,1007:12,1011:27", "extra_reward": null }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:24", "extra_reward": "1001:1200" }, { "id": 81, "commission": 0.14, "condition": "1012:20,1015:28,1002:24,1003:38", "extra_reward": null }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14", "extra_reward": null }, { "id": 83, "commission": 0.53, "condition": "1010:19,1003:38,1007:22,1015:20", "extra_reward": null }, { "id": 84, "commission": 0.62, "condition": "1005:29,1014:26,1002:18,1007:38", "extra_reward": null }, { "id": 85, "commission": 0.37, "condition": "1011:20,1001:17,1012:12,1004:32", "extra_reward": null }, { "id": 86, "commission": 0.59, "condition": "1009:25,1011:20,1006:14,1015:21", "extra_reward": null }, { "id": 87, "commission": "0.31", "condition": "1006:26,1005:19,1013:20,1014:29", "extra_reward": null }, { "id": 88, "commission": "0.48", "condition": "1008:37,1011:24,1015:12,1014:11", "extra_reward": null }, { "id": 89, "commission": "0.22", "condition": "1002:17,1003:28,1005:22,1010:31", "extra_reward": null }, { "id": 90, "commission": 0.32, "condition": "1002:39,1013:28,1007:25,1001:33", "extra_reward": "1001:1300" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:20,1014:10,1007:26", "extra_reward": null }, { "id": 92, "commission": 0.13, "condition": "1004:38,1011:13,1008:15,1007:29", "extra_reward": null }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:39,1006:38,1008:31", "extra_reward": null }, { "id": 94, "commission": 0.22, "condition": "1002:36,1014:27,1013:16,1005:31", "extra_reward": null }, { "id": 95, "commission": 0.15, "condition": "1005:26,1011:34,1015:34,1008:16", "extra_reward": null }, { "id": 96, "commission": "0.49", "condition": "1003:24,1001:34,1007:28,1005:30", "extra_reward": null }, { "id": 97, "commission": "0.6", "condition": "1013:32,1009:33,1006:30,1011:40", "extra_reward": "1001:1500" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1002:0", "gain": null, "probability": 0.01, "get_diamond": 1 }, { "id": 2, "reward": "1002:1500", "cost": "1002:10000", "gain": 0.1, "probability": 0.03, "get_diamond": 1 }, { "id": 3, "reward": "1002:2000", "cost": "1002:30000", "gain": 0.25, "probability": 0.05, "get_diamond": 2 }, { "id": 4, "reward": "1002:2500", "cost": "1002:50000", "gain": 0.4, "probability": 0.08, "get_diamond": 3 }, { "id": 5, "reward": "1002:3000", "cost": "1002:100000", "gain": 0.55, "probability": 0.1, "get_diamond": 5 }], "feed": [{ "id": 1001, "name": "\u997C\u5E72", "icon": "pet_feed/1001_feed.png", "vitality": 1, "cost": "1002:30", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1002, "name": "\u575A\u679C", "icon": "pet_feed/1002_feed.png", "vitality": 2, "cost": "1002:50", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1003, "name": "\u706B\u817F", "icon": "pet_feed/1003_feed.png", "vitality": 5, "cost": "1002:100", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1004, "name": "\u725B\u8089", "icon": "pet_feed/1004_feed.png", "vitality": 50, "cost": "1002:900", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1005, "name": "\u732A\u8089", "icon": "pet_feed/1005_feed.png", "vitality": 20, "cost": "1002:460", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1006, "name": "\u9E21\u8089", "icon": "pet_feed/1006_feed.png", "vitality": 10, "cost": "1002:270", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }], "currency": [{ "id": 1001, "name": "\u94BB\u77F3", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "\u91D1\u5E01", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_times", "value": 30 }, { "id": "all_speed_up_time", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:5000,1002:10000,1002:20000,1002:30000,1002:40000,1002:50000,1002:60000" }, { "id": "goldDefault", "value": "1002:100" }, { "id": "diamondDefault", "value": "1001:50" }, { "id": "ADTimesLimit", "value": 50 }, { "id": "ADSpeedUptimes", "value": 6 }, { "id": "vitalityBuyCostGold", "value": "1002:10000" }, { "id": "vitalityLimit", "value": 10 }, { "id": "Initial_physical_strength", "value": 10 }, { "id": "landAmountMax", "value": 9 }, { "id": "petDefaultVitality", "value": 100 }, { "id": "petDigestIntervalTime", "value": 3600 }, { "id": "Videorewards", "value": "1001:200" }, { "id": "withdrawal", "value": "1001:10000:1" }, { "id": "Invitation_rewards", "value": "1001:5000" }, { "id": "withdrawal_times", "value": "0.3:3,0.5:2,5:0,10:0,50:0" }] };

  // src/common/Tools.ts
  var Tools = class {
    static parseString(str, format = ",") {
      if (!str)
        return [];
      return str.split(format);
    }
  };
  Tools.formatSeconds = (s) => new Date(s * 1e3).toISOString().substr(11, 8);

  // src/common/TableAnalyze.ts
  var TablePropertyEvent = {
    pet(d) {
      return {
        id: d.id,
        name: d.name,
        icon: d.icon || `pet_feed/${d.id}_dog.png`,
        vitality_max: d.vitality_max,
        vitality_consume: d.vitality_consume,
        cost: getRewardCurrencyBase(d.cost),
        desc: d.desc,
        sensitive: d.sensitive,
        ability: d.ability
      };
    },
    feed(d) {
      return {
        id: d.id,
        name: d.name,
        icon: d.icon || `pet_feed/${d.id}_feed.png`,
        vitality: d.vitality,
        cost: getRewardCurrencyBase(d.cost),
        desc: d.desc
      };
    },
    order(d) {
      return {
        id: d.id,
        commission: Number(d.commission),
        condition: Tools.parseString(d.condition).map((e) => {
          let v = Tools.parseString(e, ":");
          return {
            plant: TableAnalyze.table("plant").get(Number(v[0])),
            count: Number(v[1])
          };
        }),
        extraReward: getRewardCurrencyBase(d.extra_reward)
      };
    },
    plant(d) {
      return {
        id: d.id,
        name: d.name,
        icon: d.icon,
        matureIcon: `plant_icon/${d.icon.match(/\d+/g)[0]}_mature.png`,
        growingIcon: `plant_icon/${d.icon.match(/\d+/g)[0]}_growing.png`,
        gain: Tools.parseString(d.gain).map((e) => getRewardCurrencyBase(e)),
        desc: d.desc,
        seed_price: getRewardCurrencyBase(d.seed_price),
        harvest: Number(Tools.parseString(d.harvest, "~")[1]),
        mature_time: Number(d.mature_time),
        unlock_cost: getRewardCurrencyBase(d.unlock_cost),
        unlock_reward: Tools.parseString(d.unlock_reward).map((e) => getRewardCurrencyBase(e))
      };
    },
    currency(d) {
      return {
        id: d.id,
        icon: d.icon,
        name: d.name
      };
    },
    landLevel(d) {
      return {
        id: d.id,
        reward: getRewardCurrencyBase(d.reward),
        cost: getRewardCurrencyBase(d.cost),
        gain: d.gain,
        probability: d.probability,
        getDiamond: d.get_diamond
      };
    },
    config(d) {
      switch (d.id) {
        case "all_speed_up_times":
          return { id: "all_speed_up_times", value: d.value };
        case "all_speed_up_time":
          return { id: "all_speed_up_time", value: d.value };
        case "unlock_land_cost":
          return {
            id: "unlock_land_cost",
            value: Tools.parseString(d.value).map((d2) => getRewardCurrencyBase(d2))
          };
        case "goldDefault":
          return {
            id: "goldDefault",
            value: getRewardCurrencyBase(d.value).count
          };
        case "diamondDefault":
          return {
            id: "diamondDefault",
            value: getRewardCurrencyBase(d.value).count
          };
        case "ADTimesLimit":
          return { id: "ADTimesLimit", value: d.value };
        case "ADSpeedUptimes":
          return { id: "ADSpeedUptimes", value: d.value };
        case "vitalityBuyCostGold":
          return {
            id: "vitalityBuyCostGold",
            value: getRewardCurrencyBase(d.value).count
          };
        case "vitalityLimit":
          return { id: "vitalityLimit", value: d.value };
        case "Initial_physical_strength":
          return { id: "Initial_physical_strength", value: d.value };
        case "landAmountMax":
          return { id: "landAmountMax", value: d.value };
        case "petDefaultVitality":
          return { id: "petDefaultVitality", value: d.value };
        case "petDigestIntervalTime":
          return { id: "petDigestIntervalTime", value: d.value };
        case "Videorewards":
          return { id: "Videorewards", value: getRewardCurrencyBase(d.value) };
        case "withdrawal":
          return { id: "withdrawal", value: Tools.parseString(d.value, ":") };
        case "Invitation_rewards":
          return {
            id: "Invitation_rewards",
            value: getRewardCurrencyBase(d.value)
          };
        case "withdrawal_times":
          return {
            id: "withdrawal_times",
            value: Tools.parseString(d.value).map((v) => {
              v = Tools.parseString(v, ":");
              return { price: Number(v[0]), times: Number(v[1]) };
            })
          };
      }
    },
    signIn(d) {
      return {
        id: d.id,
        days: d.days,
        reward: getRewardCurrencyBase(d.reward)
      };
    },
    task(d) {
      return {
        id: d.id,
        times: d.times,
        reward: getRewardCurrencyBase(d.reward),
        desc: d.desc,
        title: d.title,
        icon: d.icon || `game/img_barm.png`
      };
    }
  };
  function getRewardCurrencyBase(str) {
    if (!str)
      return null;
    let list = Tools.parseString(str, ":");
    return {
      obj: TableAnalyze.table("currency").get(Number(list[0])),
      count: Number(list[1])
    };
  }
  var TableControl = class {
    constructor() {
      this.tableCache = new Map();
    }
    table(key) {
      if (this.tableCache.has(key)) {
        return this.tableBack(this.tableCache.get(key));
      }
      let list = [];
      Table[key].forEach((e) => {
        list.push(TablePropertyEvent[key](e));
      });
      this.tableCache.set(key, list);
      return this.tableBack(list);
    }
    tableBack(list) {
      return {
        list,
        get(id) {
          for (let x = 0, l = list.length; x < l; x++) {
            if (list[x].id == id) {
              return list[x];
            }
          }
          return null;
        }
      };
    }
  };
  var TableAnalyze = new TableControl();
  var TableAnalyze_default = TableAnalyze;

  // src/dataService/TaskService.ts
  var TaskService = class {
    constructor() {
      this.list = [];
    }
    init(d) {
      d.forEach((e) => this.list.push({
        id: e.id,
        times: e.times,
        receive: e.receive,
        base: TableAnalyze_default.table("task").get(e.id)
      }));
    }
    getTask(id) {
      for (let x = 0; x < this.list.length; x++) {
        if (this.list[x].id == id) {
          return this.list[x];
        }
      }
      return null;
    }
    getList() {
      return this.list.sort((a, b) => {
        let tA = this.getTask(a.id), tB = this.getTask(b.id);
        return a.id + ((tA == null ? void 0 : tA.receive) ? 1e3 : 1) + ((tA == null ? void 0 : tA.times) >= a.base.times ? 100 : 1e3) - (b.id + ((tB == null ? void 0 : tB.receive) ? 1e3 : 1) + ((tB == null ? void 0 : tB.times) >= b.base.times ? 100 : 1e3));
      });
    }
    taskAddTimes(id) {
      let task = this.getTask(id);
      if (!task) {
        return;
      }
      task.times++;
      core_default.eventGlobal.event(EventMaps.update_task);
    }
    clear() {
      this.list.length = 0;
    }
  };
  var TaskService_default = new TaskService();

  // src/dataService/LandService.ts
  var LandService = class {
    constructor() {
      this.list = new Map();
    }
    init(list) {
      list.forEach((d) => {
        this.addLand(d);
      });
    }
    getLand(id) {
      return this.list.get(id);
    }
    addLand(d) {
      this.list.set(d.id, d);
    }
    clear() {
      this.list.clear();
    }
  };
  var LandService_default = new LandService();

  // src/dataService/PetService.ts
  var PetService = class {
    constructor() {
      this.list = [];
    }
    init(pets) {
      TableAnalyze_default.table("pet").list.forEach((d) => {
        this.list.push({
          base: d,
          lock: !pets.includes(d.id)
        });
      });
    }
    getUnlockLen() {
      let len = 0;
      this.list.forEach((d) => {
        if (!d.lock)
          len++;
      });
      return len;
    }
    clear() {
      this.list.length = 0;
    }
  };
  var PetService_default = new PetService();

  // src/dataService/PlantService.ts
  var PlantService = class {
    constructor() {
      this.list = [];
    }
    init(list) {
      TableAnalyze_default.table("plant").list.forEach((d) => {
        this.list.push({ base: d, lock: !list.includes(d.id) });
      });
    }
    getPlant(id) {
      for (let x = this.list.length - 1; x > -1; x++) {
        if (this.list[x].base.id == id) {
          return this.list[x];
        }
      }
      return null;
    }
    clear() {
      this.list.length = 0;
    }
  };
  var PlantService_default = new PlantService();

  // src/dataService/UserInfo.ts
  var UserInfo = class {
    constructor() {
      this.orderLevel = 1;
      this.nickname = "name";
      this.key = null;
      this.avatar = "";
      this.diamond = 999;
      this.gold = 999;
      this.advertiseTimes = 0;
      this.signInDays = 0;
      this.signInId = 0;
      this.speedUpTimes = 0;
      this.vitality = 0;
      this.proportion = 1e-4;
      this.guideData = "";
    }
    get ttt() {
      return this.orderLevel;
    }
    set ttt(v) {
      this.orderLevel = v;
    }
    clear() {
      this.nickname = "";
    }
  };
  var UserInfo_default = new UserInfo();

  // src/dataService/WarehouseService.ts
  var WarehouseService = class {
    constructor() {
      this.list = [];
    }
    init(data) {
      data.forEach((d) => {
        if (!TableAnalyze_default.table("plant").get(d.id)) {
          return console.error("\u9519\u8BEF\u7684id " + d.id);
        }
        this.list.push({
          base: TableAnalyze_default.table("plant").get(d.id),
          count: d.amount
        });
      });
    }
    reduceAmount(id, amount) {
      for (let x = 0; x < this.list.length; x++) {
        if (this.list[x].base.id == id) {
          this.list[x].count -= amount;
          if (this.list[x].count <= 0) {
            this.list.splice(x, 1);
          }
          break;
        }
      }
      core_default.eventGlobal.event(EventMaps.update_Order);
    }
    getOne(id) {
      return this.getItem(id);
    }
    getItem(id) {
      for (let x = 0; x < this.list.length; x++) {
        if (this.list[x].base.id == id) {
          return this.list[x];
        }
      }
      return null;
    }
    add(id, amount) {
      let item = this.getItem(id);
      if (item) {
        item.count += amount;
        core_default.eventGlobal.event(EventMaps.update_Order);
        return;
      }
      if (!TableAnalyze_default.table("plant").get(id)) {
        console.warn("\u9519\u8BEF\u7684id " + id);
        return;
      }
      this.list.push({
        base: TableAnalyze_default.table("plant").get(id),
        count: amount
      });
      core_default.eventGlobal.event(EventMaps.update_Order);
    }
    clear() {
      this.list.length = 0;
    }
  };
  var WarehouseService_default = new WarehouseService();

  // src/common/NetMaps.ts
  var ApiHttp;
  (function(ApiHttp2) {
    ApiHttp2["login"] = "/login";
    ApiHttp2["loginToken"] = "/login/token";
    ApiHttp2["orderReward"] = "/order/reward";
    ApiHttp2["signInReward"] = "/signIn/reward";
    ApiHttp2["landUnlock"] = "/land/unlock";
    ApiHttp2["landSow"] = "/land/sow";
    ApiHttp2["landGather"] = "/land/gather";
    ApiHttp2["landUpgrade"] = "/land/upgrade";
    ApiHttp2["landSpeedUp"] = "/land/speedUp";
    ApiHttp2["seedsUnlock"] = "/seeds/unlock";
    ApiHttp2["warehouse"] = "/warehouse";
    ApiHttp2["warehouseSell"] = "/warehouse/sell";
    ApiHttp2["petBuy"] = "/pet/buy";
    ApiHttp2["petWear"] = "/pet/wear";
    ApiHttp2["feedBuy"] = "/feed/buy";
    ApiHttp2["taskReward"] = "/task/reward";
    ApiHttp2["neighbor"] = "/neighbor";
    ApiHttp2["landSteal"] = "/land/steal";
    ApiHttp2["ad"] = "/ad";
    ApiHttp2["vitalityBuy"] = "/vitality/buy";
    ApiHttp2["goHome"] = "/goHome";
    ApiHttp2["friendDelete"] = "/friend/delete";
    ApiHttp2["friendAllow"] = "/friend/allow";
    ApiHttp2["friendApply"] = "/friend/apply";
    ApiHttp2["friendSearch"] = "/friend/search";
    ApiHttp2["friendList"] = "/friend/list";
    ApiHttp2["friendInvitePeople"] = "/friend/invite/people";
    ApiHttp2["friendInviteList"] = "/friend/invite/list";
    ApiHttp2["friendInviteReceive"] = "/friend/invite/receive";
    ApiHttp2["friendVisit"] = "/friend/visit";
    ApiHttp2["friendShare"] = "/friend/share";
    ApiHttp2["mailList"] = "/mail/list";
    ApiHttp2["mailRead"] = "/mail/read";
    ApiHttp2["mailDelete"] = "/mail/delete";
    ApiHttp2["withdraw"] = "/withdraw";
    ApiHttp2["withdrawRecord"] = "/withdraw/record";
    ApiHttp2["configClient"] = "/config/client";
    ApiHttp2["guide"] = "/guide";
  })(ApiHttp || (ApiHttp = {}));

  // src/common/HttpDataControl.ts
  var HttpDataControl = class {
    forward(d) {
      switch (d.api) {
        case ApiHttp.login:
        case ApiHttp.loginToken:
          this.login(d.data);
          break;
        case ApiHttp.landSpeedUp:
          this.updateUserInfo(d.data);
          this.taskUpdate(1002);
          break;
        case ApiHttp.ad:
          this.updateUserInfo(d.data);
          this.taskUpdate(1001);
          break;
        case ApiHttp.landGather:
          this.updateUserInfo(d.data);
          this.taskUpdate(1003);
          break;
        case ApiHttp.feedBuy:
          this.updateUserInfo(d.data);
          this.taskUpdate(1005);
          this.taskUpdate(1006);
          break;
        case ApiHttp.landSow:
          this.updateUserInfo(d.data);
          this.taskUpdate(1007);
          break;
        case ApiHttp.warehouseSell:
          this.updateUserInfo(d.data);
          this.taskUpdate(1008);
          break;
        case ApiHttp.seedsUnlock:
        case ApiHttp.landSow:
        case ApiHttp.landUnlock:
        case ApiHttp.petBuy:
        case ApiHttp.vitalityBuy:
        case ApiHttp.taskReward:
        case ApiHttp.landUpgrade:
        case ApiHttp.orderReward:
          this.updateUserInfo(d.data);
          break;
        default:
          break;
      }
      if (d.resolveEvent)
        d.resolveEvent(d.data);
      core_default.eventGlobal.event(d.api, d.data);
    }
    error(errorCode, data) {
      core_default.view.openHint({
        text: `${data == null ? void 0 : data.message}`,
        call: () => {
        }
      });
    }
    login(d) {
      var _a, _b, _c;
      if (!d) {
        core_default.view.openHint({ text: "\u767B\u5F55\u9519\u8BEF,\u8BF7\u91CD\u8BD5", call: () => {
        } });
        return;
      }
      PlantService_default.init(d.seeds);
      WarehouseService_default.init(d.warehouse);
      UserInfo_default.key = d.userInfo.key;
      UserInfo_default.diamond = d.userInfo.diamond;
      UserInfo_default.gold = d.userInfo.gold;
      UserInfo_default.nickname = d.userInfo.nickname;
      UserInfo_default.avatar = d.userInfo.avatar;
      UserInfo_default.orderLevel = d.orderId || 0;
      UserInfo_default.warePetId = (_a = d.wearPet) == null ? void 0 : _a.id;
      UserInfo_default.petVitality = ((_b = d.wearPet) == null ? void 0 : _b.vitality) || 0;
      UserInfo_default.digestCountDown = ((_c = d.wearPet) == null ? void 0 : _c.digestCountDown) || 0;
      UserInfo_default.advertiseTimes = d.advertiseTimes || 0;
      UserInfo_default.signInDays = d.signInDays || 0;
      UserInfo_default.signInId = d.signInId;
      UserInfo_default.speedUpTimes = d.speedUpTimes;
      UserInfo_default.vitality = d.userInfo.vitality;
      UserInfo_default.invitePeople = d.userInfo.invitePeople;
      UserInfo_default.isFirstTime = d.userInfo.isFirstTime;
      UserInfo_default.guideData = d.userInfo.guideData || "";
      UserInfo_default.withdraw = d.withdraw;
      PetService_default.init(d.pets);
      TaskService_default.init(d.tasks);
      LocalStorageService_default.setJSON("isLogin", true);
      if (d.token)
        LocalStorageService_default.setJSON("token", d.token);
      LandService_default.init(d.lands);
      core_default.audio.soundMuted = LocalStorageService_default.getJSON().sound;
      core_default.audio.musicMuted = LocalStorageService_default.getJSON().music;
    }
    loginOut() {
      PlantService_default.clear();
      WarehouseService_default.clear();
      PetService_default.clear();
      LandService_default.clear();
      TaskService_default.clear();
      LocalStorageService_default.setJSON("isLogin", false);
      LocalStorageService_default.setJSON("token", null);
      UserInfo_default.key = null;
      UserInfo_default.diamond = 0;
      UserInfo_default.gold = 0;
      UserInfo_default.nickname = "";
      UserInfo_default.avatar = "";
      UserInfo_default.orderLevel = 0;
      UserInfo_default.warePetId = null;
      UserInfo_default.petVitality = 0;
      UserInfo_default.digestCountDown = 0;
      UserInfo_default.advertiseTimes = 0;
      UserInfo_default.signInDays = 0;
      UserInfo_default.signInId = null;
      UserInfo_default.speedUpTimes = 0;
      UserInfo_default.vitality = 0;
      UserInfo_default.invitePeople = null;
      UserInfo_default.isFirstTime = null;
      UserInfo_default.withdraw = [];
      UserInfo_default.guideData = "";
    }
    updateUserInfo(d) {
      UserInfo_default.gold = d.gold;
      UserInfo_default.diamond = d.diamond;
      UserInfo_default.advertiseTimes = d.advertiseTimes || 0;
    }
    taskUpdate(id) {
      TaskService_default.taskAddTimes(id);
    }
  };
  var HttpDataControl_default = new HttpDataControl();

  // src/common/HttpControl.ts
  var HttpControl = class {
    constructor() {
      this.baseUrl = null;
      this.eventMap = new Map();
    }
    init(url) {
      this.baseUrl = url;
    }
    createXhr(resolve, reject, ad) {
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4) {
          switch (xmlhttp.status) {
            case 200:
            case 201:
              const data = JSON.parse(xmlhttp.responseText);
              if (!data.code) {
                if (ad) {
                  TaskService_default.taskAddTimes(1001);
                  TaskService_default.taskAddTimes(1012);
                }
              }
              this.completeHandler(data, resolve, reject);
              this.clearOneInEventMap(xmlhttp);
              break;
            default:
              if (xmlhttp.responseText) {
                let d = JSON.parse(xmlhttp.responseText);
                if (d.statusCode) {
                  core_default.view.openHint({
                    text: `${xmlhttp.responseText} \u8BF7\u91CD\u8BD5`,
                    call: () => {
                    }
                  });
                } else {
                  d.code = 999;
                  this.completeHandler(d, resolve, reject);
                }
                this.clearOneInEventMap(xmlhttp);
              }
              if (!xmlhttp.status) {
                this.completeHandler({
                  code: 404,
                  data: { message: "\u670D\u52A1\u5668\u672A\u54CD\u5E94\uFF0C\u8BF7\u91CD\u8BD5" },
                  uri: ""
                }, resolve, reject);
                this.clearOneInEventMap(xmlhttp);
              }
              break;
          }
        }
      };
      return xmlhttp;
    }
    clearOneInEventMap(xml) {
      Laya.timer.frameOnce(1, this, () => {
        this.eventMap.forEach((e, v) => {
          if (e == xml) {
            this.eventMap.delete(v);
          }
        });
      });
    }
    send(data) {
      return __async(this, null, function* () {
        var _a;
        if (!data.method)
          data.method = "post";
        if (!data.responseType)
          data.responseType = "json";
        if (!data.baseUrl)
          data.baseUrl = this.baseUrl;
        let uri = data.baseUrl + data.api;
        let sendData = [];
        if (data.data) {
          Object.keys(data.data).forEach((d) => {
            sendData.push(`${d}=${data.data[d]}`);
          });
        }
        const sendDataString = sendData.join("&");
        if (this.eventMap.get(uri + sendDataString)) {
          return new Promise((resolve, reject) => {
            reject(null);
          });
        }
        let ad = false;
        if (((_a = data.data) == null ? void 0 : _a.type) == ConfigGame_default.ApiTypeAD) {
          const adData = yield AppCore.runAppFunction({
            uri: AppEventMap.ad,
            data: {},
            timestamp: Date.now()
          });
          if (adData == null ? void 0 : adData.code) {
            core_default.view.openHint({
              text: `${adData.data["message"]}[${adData.code}]`,
              call: () => {
              }
            });
            return new Promise((resolve, reject) => {
              reject(null);
            });
          } else {
            ad = true;
          }
        }
        return new Promise((resolve, reject) => __async(this, null, function* () {
          const xhr = this.createXhr(resolve, reject, ad);
          this.sendData = data;
          if (data == null ? void 0 : data.before) {
            data.before();
          }
          if (!data.headers) {
            data.headers = ["Authorization", `Bearer ${LocalStorageService_default.getJSON().token}`];
          }
          console.log(`%c ==> send %c${data.api} %c${JSON.stringify(data.data)}`, `color:#82ccdd;font-weight:700;`, `color:#eb4d4b;font-weight:700;`, `color:#f8c291;font-weight:700;`);
          if (!data.api) {
            core_default.view.open(Res_default.views.HintView, {
              parm: { text: `http \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A` }
            });
            return reject(null);
          }
          xhr.open("POST", uri, true);
          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhr.setRequestHeader("Authorization", `Bearer ${LocalStorageService_default.getJSON().token}`);
          xhr.send(sendDataString);
          this.eventMap.set(uri + sendDataString, xhr);
        }));
      });
    }
    completeHandler(e, resolve, reject) {
      var _a;
      if (e.code) {
        reject(e.code);
        if ((_a = this.sendData) == null ? void 0 : _a.error) {
          this.sendData.error(e.code, e.data);
        }
        HttpDataControl_default.error(e.code, e.data);
        return console.error(e);
      } else {
        console.log(`%c <== back %c${this.sendData.api} `, `color:#b8e994;font-weight:700;`, `color:#78e08f;font-weight:700;`, e.data);
        if (e.code === 0) {
          HttpDataControl_default.forward({
            api: this.sendData.api,
            data: e.data,
            resolveEvent: resolve
          });
        }
      }
    }
    errorHandler(e) {
      console.log(e);
    }
    processHandler(e) {
      console.log(e);
    }
  };
  __decorateClass([
    Instance
  ], HttpControl, "inst", 2);

  // src/view/AddLandView.ts
  var AddLandView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.costIcon = null;
      this.costFont = null;
      this.adBtn = null;
      this.canClick = true;
    }
    onOpened(d) {
      this.data = d;
      this.landData = TableAnalyze_default.table("config").get("unlock_land_cost").value[LandService_default.list.size];
      this.costIcon.skin = this.landData.obj.icon;
      this.costFont.value = this.landData.count + "";
      this.adBtn.disabled = !UserInfo_default.advertiseTimes;
      this.adBtn.active = Boolean(UserInfo_default.advertiseTimes);
    }
    onClick(e) {
      switch (e.target.name) {
        case "closeAddLandLayer":
          core_default.view.close(Res_default.views.AddLandView);
          break;
        case "cost_gold":
          if (!this.canClick) {
            return;
          }
          if (this.landData.obj.id == ConfigGame_default.goldId && this.landData.count > UserInfo_default.gold) {
            core_default.view.openHint({ text: "\u91D1\u5E01\u4E0D\u8DB3", call: () => {
            } });
            return;
          }
          if (this.landData.obj.id == ConfigGame_default.diamondId && this.landData.count > UserInfo_default.diamond) {
            core_default.view.openHint({ text: "\u94BB\u77F3\u4E0D\u8DB3", call: () => {
            } });
            return;
          }
          this.canClick = false;
          HttpControl.inst.send({
            api: ApiHttp.landUnlock,
            data: {
              landId: this.data.id,
              type: ConfigGame_default.ApiTypeDefault
            }
          }).then(() => {
            var _a;
            this.canClick = true;
            if ((_a = this.data) == null ? void 0 : _a.call) {
              this.data.call();
              core_default.view.close(Res_default.views.AddLandView);
            }
          }).catch(() => {
            this.canClick = true;
          });
          break;
        case "ad_btn":
          if (!this.canClick) {
            return;
          }
          this.canClick = false;
          HttpControl.inst.send({
            api: ApiHttp.landUnlock,
            data: {
              landId: this.data.id,
              type: ConfigGame_default.ApiTypeAD
            }
          }).then(() => {
            var _a;
            this.canClick = true;
            if ((_a = this.data) == null ? void 0 : _a.call) {
              this.data.call();
              core_default.view.close(Res_default.views.AddLandView);
            }
            core_default.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
          }).catch(() => {
            this.canClick = true;
          });
          break;
      }
    }
  };

  // src/view/BuyVitalityView.ts
  var BuyVitalityView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.priceLabel = null;
      this.priceIcon = null;
      this.adBtn = null;
    }
    onOpened(e) {
      this.data = e;
      let costGoldCount = TableAnalyze_default.table("config").get("vitalityBuyCostGold").value;
      this.costGoldCount = costGoldCount;
      this.priceLabel.text = `\u4EF7\u683C\uFF1A${costGoldCount}`;
      this.adBtn.disabled = !UserInfo_default.advertiseTimes;
      this.adBtn.active = Boolean(UserInfo_default.advertiseTimes);
    }
    onClick(e) {
      switch (e.target.name) {
        case "closeAddLandLayer":
          core_default.view.close(Res_default.views.BuyVitalityView);
          break;
        case "buyAdBtn":
        case "buyBtn":
          if (UserInfo_default.vitality >= TableAnalyze_default.table("config").get("vitalityLimit").value) {
            core_default.view.openHint({ text: "\u4F53\u529B\u5DF2\u6EE1", call: () => {
            } });
            return;
          }
          if (e.target.name == "buyBtn" && UserInfo_default.gold < this.costGoldCount) {
            core_default.view.openHint({ text: "\u91D1\u5E01\u4E0D\u8DB3", call: () => {
            } });
            return;
          }
          HttpControl.inst.send({
            api: ApiHttp.vitalityBuy,
            data: {
              type: e.target.name == "buyBtn" ? ConfigGame_default.ApiTypeDefault : ConfigGame_default.ApiTypeAD
            }
          }).then((d) => {
            var _a;
            UserInfo_default.vitality = d.vitality;
            if ((_a = this.data) == null ? void 0 : _a.call) {
              this.data.call();
            }
            if (e.target.name == "buyBtn") {
              AppCore.runAppFunction({
                uri: AppEventMap.eventCount,
                data: { type: "physicalstrength" }
              });
            }
            core_default.view.close(Res_default.views.BuyVitalityView);
          });
          break;
      }
    }
  };

  // src/view/FieldLevelUpView.ts
  var FieldLevelUpView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.priceLabel = null;
      this.priceIcon = null;
      this.lv = null;
      this.reward = null;
      this.probability = null;
      this.adBtn = null;
    }
    onOpened(e) {
      this.data = e;
      let nextLand = TableAnalyze_default.table("landLevel").get(e.obj.level + 1);
      this.priceLabel.text = `\u4EF7\u683C\uFF1A${nextLand.cost.count}`;
      this.priceIcon.skin = nextLand.cost.obj.icon;
      this.lv.text = `${e.obj.level + 1}\u7EA7`;
      this.reward.text = `+${Number((nextLand.gain * 100).toFixed(2))}%`;
      this.probability.text = `+${Number((nextLand.probability * 100).toFixed(2))}%`;
      this.adBtn.disabled = !UserInfo_default.advertiseTimes;
      this.adBtn.active = Boolean(UserInfo_default.advertiseTimes);
    }
    onClick(e) {
      switch (e.target.name) {
        case "closeAddLandLayer":
          core_default.view.close(Res_default.views.FieldLevelUpView);
          break;
        case "upgradeBtn":
        case "upgradeAdBtn":
          HttpControl.inst.send({
            api: ApiHttp.landUpgrade,
            data: {
              landId: this.data.obj.id,
              type: e.target.name == "upgradeBtn" ? ConfigGame_default.ApiTypeDefault : ConfigGame_default.ApiTypeAD
            }
          }).then(() => {
            if (e.target.name == "upgradeAdBtn") {
              core_default.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
            } else {
              AppCore.runAppFunction({
                uri: AppEventMap.eventCount,
                data: { type: "Landupgrading" }
              });
            }
            if (this.data.call) {
              this.data.call();
            }
            core_default.view.close(Res_default.views.FieldLevelUpView);
          });
          break;
      }
    }
  };

  // src/view/FriendsDescView.ts
  var FriendsDescView = class extends core_default.gameScript {
    onHdAwake() {
      this.panelNode.vScrollBarSkin = null;
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.FriendsDescView);
          break;
      }
    }
    onHdDestroy() {
      Laya.loader.clearTextureRes("res/img_inviteBg1.png");
    }
  };

  // src/view/FriendsRewardView.ts
  var FriendsRewardView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.inviteList = [];
      this.rewardValue = 0;
      this.proportion = 0;
      this.canClick = true;
    }
    onHdAwake() {
      this.priceList.vScrollBarSkin = null;
      this.priceList.array = new Array(3);
      this.priceList.renderHandler = new Laya.Handler(this, this.renderItem);
    }
    onOpened(data) {
      this.inviteList = data.list || [];
      this.call = data.call;
      if (UserInfo_default.invitePeople) {
        this.inviteBox.visible = false;
        this.inviteBox.active = false;
      }
      this.rewardValue = TableAnalyze_default.table("config").get("Invitation_rewards").value.count;
      const withdrawal = TableAnalyze_default.table("config").get("withdrawal").value;
      this.proportion = Number(withdrawal[1]);
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.FriendsRewardView);
          break;
        case "invite_btn":
          AppCore.runAppFunction({
            uri: AppEventMap.wxShare,
            data: {},
            timestamp: Date.now()
          }).then((d) => {
            if (d.code) {
              core_default.view.openHint({ text: d.data["message"], call: () => {
              } });
            } else {
              core_default.view.openHint({ text: d.data["message"], call: () => {
              } });
              HttpControl.inst.send({
                api: ApiHttp.friendShare
              }).then(() => {
                TaskService_default.taskAddTimes(1010);
              });
            }
          });
          break;
        case "submit":
          this.submit();
          break;
        case "btn":
          const i = e.target.dataSource;
          this.withdraw(i);
          break;
      }
    }
    withdraw(i) {
      if (!this.canClick)
        return;
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.friendInviteReceive,
        data: { index: i }
      }).then(() => {
        this.canClick = true;
        core_default.view.openHint({ text: "\u63D0\u73B0\u6210\u529F", call: () => {
        } });
        this.inviteList[i].receivedReward = 1;
        this.priceList.refresh();
      }).catch(() => {
        this.canClick = true;
      });
    }
    renderItem(cell, i) {
      cell.getChildByName("top").text = `\u7B2C${i + 1}\u4F4D`;
      const btn = cell.getChildByName("btn");
      cell.getChildByName("price_box").getChildByName("price").text = `${this.rewardValue / this.proportion}`;
      btn.skin = "game/img_extractActive.png";
      if (this.inviteList.length > i) {
        if (this.inviteList[i].receivedReward) {
          btn.disabled = true;
          btn.skin = "game/img_cashDone.png";
        } else {
          btn.disabled = false;
        }
      } else {
        btn.disabled = true;
      }
      btn.dataSource = i;
    }
    submit() {
      if (!this.inviteInput.text || !this.inviteInput.text.length) {
        core_default.view.openHint({ text: "\u9080\u8BF7\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01", call: () => {
        } });
        return;
      }
      if (!this.canClick)
        return;
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.friendInvitePeople,
        data: {
          key: this.inviteInput.text
        }
      }).then(() => {
        UserInfo_default.invitePeople = this.inviteInput.text;
        core_default.view.openHint({ text: "\u7ED1\u5B9A\u6210\u529F", call: () => {
        } });
        this.inviteBox.visible = false;
        this.inviteBox.active = false;
        this.canClick = true;
        if (this.call)
          this.call();
      }).catch(() => {
        this.canClick = true;
      });
    }
    onHdDestroy() {
    }
  };

  // src/common/ErrorCode.ts
  var ErrorCode;
  (function(ErrorCode2) {
    ErrorCode2[ErrorCode2["_2001"] = 2001] = "_2001";
  })(ErrorCode || (ErrorCode = {}));
  var ErrorCode_default = ErrorCode;

  // src/components/FieldComponent.ts
  var FieldComponent = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.icon = null;
      this.fieldNode = null;
      this.shadow = null;
      this.fieldEmptyRes = "";
      this.lvNode = null;
      this.timeBox = null;
      this.countDownLb = null;
      this.topStateIcon = null;
      this.upAni = null;
      this.reduceTime = null;
      this.unlockIcon = "";
      this.fieldId = null;
      this.buildIng = false;
      this.isOuter = false;
      this.canSteal = false;
      this.canClick = true;
      this.matureTime = 0;
    }
    onHdAwake() {
      this.fieldNode = this.owner;
      this.countDownLb = this.timeBox.getChildByName("countDownLb");
      this.init();
    }
    init() {
      this.icon.skin = null;
      this.showShadowIcon(false);
      this.timeBox.visible = false;
      this.timeBox.active = false;
      this.topStateIcon.visible = false;
      this.lvNode.visible = false;
      this.upAni.visible = false;
      this.reduceTime.visible = false;
      this.upAni.on(Laya.Event.COMPLETE, this, () => {
        this.upAni.visible = false;
      });
      this.matureTime = Date.now();
    }
    updateData(data) {
      if (data == null ? void 0 : data.list) {
        this.landList = data.list;
      } else {
        this.landList = LandService_default.list;
      }
      this.data = this.landList.get(this.fieldId);
      this.renderData();
    }
    renderData() {
      var _a;
      this.topStateIconAni(false);
      if (this.data) {
        this.icon.y = 164;
        this.showShadowIcon(false);
        this.topStateIcon.visible = false;
        this.fieldNode.skin = this.fieldEmptyRes;
        this.showIcon(Boolean(this.data.productId));
        this.lvNode.visible = true;
        this.updateLevel();
        this.timeBox.visible = false;
        if (this.data.productId) {
          this.plantIconAni(true);
        }
        if (this.data.productId && this.data.matureTimeLeft > 0) {
          this.matureTime = this.data.matureTimeLeft * 1e3 + Date.now();
          this.timeBox.visible = true;
          this.timeBox.active = true;
          this.icon.skin = TableAnalyze_default.table("plant").get(this.data.productId).growingIcon;
          this.showShadowIcon(true);
          this.updateCountDown();
          if (this.isOuter) {
            this.topStateIcon.visible = false;
          } else {
            this.plantIconAni(true);
          }
        } else {
          if (this.data.productId) {
            this.matureTime = Date.now();
            this.topStateIcon.visible = true;
            this.showShadowIcon(true);
            this.updateCountDown();
            this.setStateIconSkin(3);
          }
        }
      } else {
        this.lvNode.visible = false;
        this.fieldNode.skin = `main_scene/img_wasteland.png`;
        this.icon.skin = this.unlockIcon;
        this.icon.y = 113;
        this.showIcon(false);
        this.topStateIconAni(false);
        this.topStateIcon.visible = false;
        this.showTimeBox(false);
        this.showShadowIcon(false);
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        (_a = this.topStateIconTween) == null ? void 0 : _a.destroy();
        this.topStateIconTween = null;
      }
    }
    showIcon(show) {
      this.icon.visible = show;
    }
    setStateIconSkin(skinType) {
      switch (skinType) {
        case 1:
          this.topStateIcon.skin = "main_scene/img_speedUp.png";
          break;
        case 2:
          this.topStateIcon.skin = "main_scene/img_landUpdateBtn2.png";
          break;
        case 3:
          this.topStateIcon.skin = "main_scene/img_harvest.png";
          break;
      }
    }
    topStateIconAni(play) {
      var _a;
      this.topStateIcon.y = -107;
      if (!this.topStateIconTween) {
        this.topStateIconTween = Laya.TimeLine.to(this.topStateIcon, { y: this.topStateIcon.y - 50 }, 800, null).to(this.topStateIcon, { y: this.topStateIcon.y }, 800);
        this.topStateIconTween.play(null, true);
      }
      if (this.stealUid && !((_a = this.data) == null ? void 0 : _a.canSteal)) {
        play = false;
      }
      this.topStateIcon.visible = play;
      if (play) {
        this.topStateIconTween.resume();
      } else {
        this.topStateIconTween.pause();
      }
    }
    showTimeBox(show) {
      this.timeBox.visible = show;
    }
    showShadowIcon(show) {
      this.shadow.visible = show;
      this.shadow.active = show;
    }
    plantIconAni(play) {
      if (!this.plantIconTween) {
        this.plantIconTween = Laya.TimeLine.to(this.icon, { skewX: 3 }, 1e3).to(this.icon, { skewX: -3 }, 2e3).to(this.icon, { skewX: 0 }, 1e3);
        this.plantIconTween.play(null, true);
      }
      if (play) {
        Laya.timer.once(Math.random() * 1e3, this, () => {
          this.plantIconTween.resume();
        });
      } else {
        this.plantIconTween.pause();
      }
    }
    updateCountDown() {
      var _a, _b;
      if (this.data.matureTimeLeft > 0) {
        this.countDownLb.text = Tools.formatSeconds(this.data.matureTimeLeft);
        Laya.timer.clearAll(this);
        Laya.timer.once(1e3, this, () => {
          this.data.matureTimeLeft = Math.ceil((this.matureTime - Date.now()) / 1e3);
          if (this.data.matureTimeLeft < 0)
            this.data.matureTimeLeft = 0;
          this.countDownLb.text = Tools.formatSeconds(this.data.matureTimeLeft);
          return this.updateCountDown();
        });
      } else {
        this.data.matureTimeLeft = 0;
        this.matureTime = Date.now();
        console.log("\u6210\u719F ");
        this.icon.skin = (_b = TableAnalyze_default.table("plant").get((_a = this.data) == null ? void 0 : _a.productId)) == null ? void 0 : _b.matureIcon;
        if (!this.buildIng) {
          this.setStateIconSkin(3);
          this.mainViewCom.updateAllStateIcon();
        }
        this.showTimeBox(false);
      }
    }
    updateLevel() {
      this.lvNode.skin = `main_scene/img_level${this.data.level}.png`;
    }
    speedUp() {
      var _a;
      if ((_a = this.data) == null ? void 0 : _a.matureTimeLeft) {
        this.data.matureTimeLeft -= TableAnalyze_default.table("config").get("all_speed_up_time").value;
        this.matureTime = this.data.matureTimeLeft * 1e3 + Date.now();
        this.updateCountDown();
        this.reduceTime.visible = true;
        this.reduceTime.alpha = 0;
        this.reduceTime.y = -39;
        if (!this.reduceTimeAni)
          this.reduceTimeAni = Laya.TimeLine.to(this.reduceTime, { y: -69, alpha: 1 }, 300).to(this.reduceTime, {
            y: -100,
            alpha: 0
          }, 300, null, 1e3);
        this.reduceTimeAni.play();
      }
    }
    clearField() {
      this.topStateIcon.visible = false;
      this.data.productId = null;
      this.icon.skin = null;
      this.showIcon(false);
      this.showShadowIcon(false);
    }
    onClick() {
      return __async(this, null, function* () {
        core_default.audio.playSound(Res_default.audios.button_click);
        if (!this.canClick)
          return;
        if (this.isOuter) {
          if (this.data) {
            this.stealFood(this.data);
          }
          return;
        }
        if (this.data) {
          if (this.buildIng) {
            if (TableAnalyze_default.table("landLevel").get(this.data.level + 1)) {
              core_default.view.open(Res_default.views.FieldLevelUpView, {
                parm: {
                  obj: this.data,
                  call: () => {
                    this.data.level++;
                    this.updateLevel();
                    core_default.audio.playSound(Res_default.audios.tudishengji);
                    this.upAni.visible = true;
                    this.upAni.play(0, false);
                  }
                }
              });
            } else {
              console.log("\u6EE1\u7EA7");
              this.topStateIconAni(false);
              core_default.view.openHint({
                text: `\u5DF2\u6EE1\u7EA7`,
                call: () => {
                }
              });
            }
            return;
          }
          if (this.data.productId) {
            if (this.data.matureTimeLeft) {
              this.mainViewCom.hideGuideHand();
              console.log("\u52A0\u901F");
              core_default.view.open(Res_default.views.SpeedUpView, {
                parm: {
                  call: () => {
                    this.mainViewCom.updateAllStateIcon();
                  }
                }
              });
              this.mainViewCom.updateAllStateIcon(this.data.id);
              return;
            } else {
              console.log("\u6536\u83B7");
              this.canClick = false;
              let plantAmount = 0, rewardDiamond = 0, productId = this.data.productId;
              HttpControl.inst.send({
                api: ApiHttp.landGather,
                data: {
                  landId: this.data.id,
                  type: ConfigGame_default.ApiTypeDefault
                }
              }).then((d) => {
                plantAmount = d.amount;
                WarehouseService_default.add(productId, d.amount);
                core_default.audio.playSound(Res_default.audios.shoucai);
                rewardDiamond = d.rewardDiamond;
                this.clearField();
                this.canClick = true;
                let plantObj = TableAnalyze_default.table("plant").get(productId), rewardList = [
                  {
                    obj: plantObj,
                    count: plantAmount,
                    posType: 3
                  }
                ];
                if (rewardDiamond) {
                  rewardList.push({
                    obj: TableAnalyze_default.table("currency").get(ConfigGame_default.diamondId),
                    count: rewardDiamond,
                    posType: 2
                  });
                }
                core_default.eventGlobal.event(EventMaps.play_get_reward, {
                  node: this.owner,
                  list: rewardList,
                  callBack: () => {
                  }
                });
                Laya.timer.frameOnce(1, this, () => {
                  this.mainViewCom.updateAllStateIcon();
                });
              }).catch(() => {
                this.canClick = true;
              });
            }
          } else {
            this.sow();
          }
        } else {
          this.mainViewCom.hideGuideHand();
          core_default.view.open(Res_default.views.AddLandView, {
            parm: {
              id: this.fieldId,
              call: () => {
                this.data = {
                  id: this.fieldId,
                  level: 1,
                  matureTimeLeft: 0,
                  productId: null
                };
                this.matureTime = Date.now();
                LandService_default.addLand(this.data);
                this.updateData();
                this.mainViewCom.updateHitLandAdd();
              }
            }
          });
        }
      });
    }
    sow() {
      core_default.view.open(Res_default.views.ShopView, {
        parm: {
          id: 0,
          parm: { landId: this.fieldId },
          call: (d) => {
            this.sowPlant(d);
          }
        }
      });
    }
    sowPlant(d) {
      this.landList.get(this.fieldId).productId = d.base.id;
      this.landList.get(this.fieldId).matureTimeLeft = d.base.mature_time;
      this.matureTime = d.base.mature_time * 1e3 + Date.now();
      this.data = this.landList.get(this.fieldId);
      this.renderData();
      core_default.audio.playSound(Res_default.audios.zhongzhi);
      this.mainViewCom.updateAllStateIcon(this.data.id);
      TaskService_default.taskAddTimes(1011);
      AppCore.runAppFunction({
        uri: AppEventMap.eventCount,
        data: { type: "plant" }
      });
    }
    stealFood(data) {
      return __async(this, null, function* () {
        var _a;
        if (!data.productId || data.matureTimeLeft) {
          return;
        }
        if (!this.canSteal || this.stealUid && !((_a = this.data) == null ? void 0 : _a.canSteal)) {
          console.log("\u5DF2\u7ECF\u4E0D\u53EF\u5077");
          core_default.view.openHint({ text: "\u7ED9\u6211\u7559\u70B9\u5427", call: () => {
          } });
          return;
        }
        core_default.audio.playSound(Res_default.audios.goujiaosheng);
        this.canClick = false;
        HttpControl.inst.send({
          api: ApiHttp.landSteal,
          data: {
            landId: this.data.id,
            type: ConfigGame_default.ApiTypeDefault,
            uid: this.stealUid
          }
        }).then((d) => {
          AppCore.runAppFunction({
            uri: AppEventMap.eventCount,
            data: { type: "Stealvegetables" }
          });
          TaskService_default.taskAddTimes(1004);
          this.canClick = true;
          UserInfo_default.vitality = d.vitality;
          this.canSteal = false;
          this.topStateIconAni(false);
          const rewardList = [];
          if (d.plantId) {
            core_default.audio.playSound(Res_default.audios.shoucai);
            WarehouseService_default.add(this.data.productId, d.amount);
            rewardList.push({
              obj: TableAnalyze_default.table("plant").get(d.plantId),
              count: d.amount,
              posType: 3
            });
          } else {
            core_default.view.openHint({ text: "\u989D\uFF0C\u88AB\u72D7\u54AC\u4E86~~~\u6CA1\u5077\u7740~", call: () => {
            } });
            return;
          }
          if (d.rewardDiamond) {
            rewardList.push({
              obj: TableAnalyze_default.table("currency").get(ConfigGame_default.diamondId),
              count: d.rewardDiamond,
              posType: 2
            });
          }
          if (rewardList.length) {
            core_default.eventGlobal.event(EventMaps.play_get_reward, {
              node: this.owner,
              list: rewardList
            });
          }
        }).catch((code) => {
          this.canClick = true;
          if (code === ErrorCode_default._2001) {
            this.clearField();
          }
        });
      });
    }
    onHdDestroy() {
      var _a, _b;
      Laya.timer.clearAll(this);
      Laya.Tween.clearAll(this);
      (_a = this.topStateIconTween) == null ? void 0 : _a.destroy();
      (_b = this.plantIconTween) == null ? void 0 : _b.destroy();
      this.topStateIconTween = null;
      this.plantIconTween = null;
    }
  };
  __decorateClass([
    core_default.findByName
  ], FieldComponent.prototype, "icon", 2);
  __decorateClass([
    core_default.findByName
  ], FieldComponent.prototype, "fieldNode", 2);
  __decorateClass([
    core_default.findByName
  ], FieldComponent.prototype, "shadow", 2);
  __decorateClass([
    core_default.findByName
  ], FieldComponent.prototype, "lvNode", 2);
  __decorateClass([
    core_default.findByName
  ], FieldComponent.prototype, "timeBox", 2);
  __decorateClass([
    core_default.findByName
  ], FieldComponent.prototype, "topStateIcon", 2);
  __decorateClass([
    core_default.findByName
  ], FieldComponent.prototype, "upAni", 2);
  __decorateClass([
    core_default.findByName
  ], FieldComponent.prototype, "reduceTime", 2);
  __decorateClass([
    core_default.eventOn(EventMaps.update_field)
  ], FieldComponent.prototype, "updateData", 1);
  __decorateClass([
    core_default.eventOn(EventMaps.land_speed_up)
  ], FieldComponent.prototype, "speedUp", 1);

  // src/view/MainView.ts
  var _MainView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.addLandLayer = null;
      this.diamondNode = null;
      this.goldNode = null;
      this.avatarNode = null;
      this.landBox = null;
      this.centerBox = null;
      this.orderBox = null;
      this.bottomBox = null;
      this.landUpLayer = null;
      this.topLayerOnStage = null;
      this.topGoldIcon = null;
      this.topDiamondIcon = null;
      this.warehouseBtn = null;
      this.moneyLb = null;
      this.getRewardPrefab = null;
      this.floatRewardIcon = null;
      this.goldAdd = null;
      this.diamondAdd = null;
      this.goHomeBtn = null;
      this.anyDoor = null;
      this.vitalityBox = null;
      this.vitalityBuyBtn = null;
      this.petBox = null;
      this.taskBox = null;
      this.step1 = null;
      this.step2 = null;
      this.step3 = null;
      this.step4 = null;
      this.step5 = null;
      this.step6 = null;
      this.step7 = null;
      this.step8 = null;
      this.step9 = null;
      this.landList = [];
      this.isOuter = false;
      this.outCountDownNumber = 60;
      this.canClick = true;
      this.guideHand = null;
      this.guidIdList = [1, 2, 3, 5];
      this.hasGuide = false;
      this.orderQueueIng = false;
    }
    onOpened() {
      _MainView.inst = this;
      [
        "res/img_woodtitle.png",
        "res/img_storebg.png",
        "res/img_shelf.png",
        "res/img_popUpBg.png",
        "res/img_inviteBg1.png",
        "res/img_housetop.png",
        "res/atlas/plant_icon.png",
        "res/atlas/pet_feed.png",
        "res/atlas/main_scene.png"
      ].forEach((e) => {
        if (e.endsWith("png"))
          Laya.loader.clearTextureRes(e);
      });
      Laya.timer.frameOnce(1, this, () => {
        this.updateTask();
      });
      let ok = false, step = 0;
      if (UserInfo_default.guideData.length) {
        UserInfo_default.guideData.split("").forEach((d) => {
          if (d == "1") {
            step++;
          }
        });
        if (step >= 9) {
          ok = true;
        }
      }
      if (!UserInfo_default.guideData.length || !ok) {
        core_default.view.open(Res_default.views.GuideView, {
          parm: {
            nodeList: [
              this.step1,
              this.step2,
              this.step3,
              this.step4,
              this.step5,
              this.step6,
              this.step7,
              this.step8,
              this.step9
            ],
            call: () => {
              this.timeGuide();
            }
          }
        });
      } else {
        this.timeGuide();
      }
      this.guidHandAnimation();
      this.guideHand.visible = false;
    }
    onHdAwake() {
      Laya.stage.addChild(this.topLayerOnStage);
      this.orderBox.getChildByName("friend_name").visible = false;
      this.landUpLayer.visible = false;
      this.landUpLayer.active = false;
      this.vitalityBox.visible = false;
      this.goHomeBtn.visible = false;
      for (let x = 0; x < this.landBox.numChildren; x++) {
        this.landList.push(this.landBox.getChildAt(x).getComponent(FieldComponent));
        this.landList[x].mainViewCom = this;
      }
      this.landList.sort((a, b) => {
        return a.fieldId - b.fieldId;
      });
      Laya.timer.frameOnce(1, this, () => {
        core_default.eventGlobal.event(EventMaps.update_field);
        this.updateHitLandAdd();
        this.updateAllStateIcon();
      });
    }
    timeGuide() {
      Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.timeGuideTouch);
      this.timeGuideTouch();
    }
    timeGuideTouch() {
      Laya.timer.clear(this, this.timeGuideAction);
      Laya.timer.once(15e3, this, this.timeGuideAction);
    }
    timeGuideAction() {
      if (this.hasGuide || this.isOuter) {
        return;
      }
      this.timeGuideTouch();
      this.guideHand.visible = true;
      this.updateGuideTask();
    }
    hideGuideHand() {
      this.guideHand.visible = false;
      this.timeGuide();
      this.hasGuide = false;
    }
    updateGuideTask() {
      var _a, _b;
      let landEmpty = false, land, unlockLand;
      for (let x = 0; x < this.landList.length; x++) {
        if (this.landList[x].data && !this.landList[x].data.productId) {
          landEmpty = true;
          break;
        } else {
          if (((_a = this.landList[x].data) == null ? void 0 : _a.productId) && ((_b = this.landList[x].data) == null ? void 0 : _b.matureTimeLeft)) {
            land = this.landList[x];
            break;
          }
        }
      }
      for (let x = 0; x < this.landList.length; x++) {
        if (!this.landList[x].data) {
          unlockLand = this.landList[x];
          break;
        }
      }
      if (!unlockLand && this.guidIdList.indexOf(5) > -1) {
        this.guidIdList.splice(this.guidIdList.indexOf(5), 1);
        console.log(this.guidIdList);
      }
      this.hasGuide = true;
      let pos = { x: 0, y: 0 };
      if (landEmpty) {
        pos = this.getNodeTopLayerPos(this.step4);
      } else {
        if (!land) {
          return null;
        }
        let id = this.guidIdList[Math.floor(Math.random() * this.guidIdList.length)];
        switch (id) {
          case 1:
            pos = this.getNodeTopLayerPos(land.owner);
            pos.x += 100;
            pos.y += 100;
            break;
          case 2:
            pos = this.getNodeTopLayerPos(this.step9);
            pos.x += 100;
            pos.y += 100;
            break;
          case 3:
            pos = this.getNodeTopLayerPos(this.step5);
            pos.x += 100;
            pos.y += 100;
            break;
          case 5:
            pos = this.getNodeTopLayerPos(unlockLand.owner);
            pos.x += 100;
            pos.y += 100;
            break;
        }
      }
      this.guideHand.pos(pos.x, pos.y);
    }
    getNodeTopLayerPos(node) {
      return this.topLayerOnStage.globalToLocal(node.parent.localToGlobal(new Laya.Point(node.x, node.y)));
    }
    guidHandAnimation() {
      this.guidHandAni = Laya.TimeLine.to(this.guideHand, { rotation: -15 }, 400, null).to(this.guideHand, { rotation: 0 }, 400);
      this.guidHandAni.play(null, true);
    }
    updateHitLandAdd() {
      let guidLand;
      for (let x = 0, l = this.landList.length; x < l; x++) {
        if (!this.landList[x].data) {
          this.landList[x].showIcon(true);
          break;
        } else {
          if (!guidLand) {
            guidLand = this.landList[x];
          }
        }
      }
    }
    updateAllStateIcon(landId) {
      for (let x = 0, l = this.landList.length; x < l; x++) {
        this.landList[x].topStateIconAni(false);
      }
      for (let x = 0, l = this.landList.length; x < l; x++) {
        const data = this.landList[x].data;
        if (data) {
          if (data.id == landId) {
            this.landList[x].showIcon(true);
            this.landList[x].setStateIconSkin(1);
            this.landList[x].topStateIconAni(true);
            break;
          } else if (!landId) {
            if (data.productId && data.matureTimeLeft) {
              this.landList[x].showIcon(true);
              this.landList[x].setStateIconSkin(1);
              this.landList[x].topStateIconAni(true);
              break;
            }
          }
        }
      }
      for (let x = 0, l = this.landList.length; x < l; x++) {
        const data = this.landList[x].data;
        if (data) {
          if (data.productId && !data.matureTimeLeft) {
            this.landList[x].showIcon(true);
            this.landList[x].setStateIconSkin(3);
            this.landList[x].topStateIconAni(true);
          }
        }
      }
    }
    onHdEnable() {
      core_default.observableProperty.watch(UserInfo_default, this).key("diamond", (e) => {
        this.diamondNode.value = e;
        this.moneyLb.value = (e * UserInfo_default.proportion).toString().match(/^\d+(?:\.\d{0,2})?/) + "";
      }).key("gold", (e) => {
        this.goldNode.value = e;
      }).key("avatar", (e) => {
        if (e)
          this.avatarNode.skin = e;
      }).key("warePetId", (e) => {
        if (e) {
          this.petBox.visible = true;
          this.petBox.getChildByName("dog_ani").source = `res/dog_${e}.atlas`;
        } else {
          this.petBox.visible = false;
        }
      }).key("petVitality", (e) => {
        if (!UserInfo_default.warePetId)
          return;
        if (this.petBox.visible) {
          let bar = this.petBox.getChildByName("box").getChildByName("vitality_bar");
          let scale = e / TableAnalyze_default.table("pet").get(UserInfo_default.warePetId).vitality_max;
          if (scale > 1)
            scale = 1;
          bar.width = 130 * scale;
          this.petBox.getChildByName("box").getChildByName("hungry").visible = !e;
        }
      }).key("digestCountDown", (e) => {
        Laya.timer.clear(this, this.digestCountDown);
        if (this.petBox.visible) {
          Laya.timer.once(e * 1e3, this, this.digestCountDown);
        }
      }).key("vitality", (e) => {
        let vitality = e / ConfigGame_default.userVitalityLimit;
        if (vitality >= 1) {
          vitality = 1;
          this.vitalityBuyBtn.gray = true;
          Laya.timer.frameOnce(1, this, () => {
            this.vitalityBuyBtn.mouseEnabled = false;
          });
        } else {
          this.vitalityBuyBtn.gray = false;
          Laya.timer.frameOnce(1, this, () => {
            this.vitalityBuyBtn.mouseEnabled = true;
          });
        }
        if (this.vitalityBox.getChildByName("bar"))
          this.vitalityBox.getChildByName("bar").width = 268 * vitality;
      });
      this.addLandLayer.visible = false;
      this.updateOrder();
    }
    digestCountDown() {
      if (!UserInfo_default.warePetId)
        return;
      const pet = TableAnalyze_default.table("pet").get(UserInfo_default.warePetId);
      if (UserInfo_default.petVitality - pet.vitality_consume <= 0) {
        UserInfo_default.petVitality = 0;
      } else {
        UserInfo_default.petVitality -= pet.vitality_consume;
      }
      UserInfo_default.digestCountDown = ConfigGame_default.petDigestIntervalTime;
    }
    onClick(e) {
      console.log(e.target.name);
      switch (e.target.name) {
        case "closeAddLandLayer":
          this.addLandLayer.visible = false;
          break;
        case "task":
          core_default.view.open(Res_default.views.TaskView);
          break;
        case "signIn":
          core_default.view.open(Res_default.views.SignInView);
          break;
        case "mail":
          this.openMail();
          break;
        case "shop":
          core_default.view.open(Res_default.views.ShopView);
          this.hideGuideHand();
          break;
        case "head":
          core_default.view.open(Res_default.views.SettingView);
          break;
        case "warehouse":
          core_default.view.open(Res_default.views.WarehouseView);
          break;
        case "buy_feed":
          core_default.view.open(Res_default.views.ShopView, { parm: { id: 2 } });
          break;
        case "dog_house":
          core_default.view.open(Res_default.views.ShopView, { parm: { id: 1 } });
          break;
        case "dog_ani":
          core_default.view.open(Res_default.views.ShopView, { parm: { id: 2 } });
          break;
        case "diamond_box":
        case "money_red_box":
          core_default.view.open(Res_default.views.ShopView, { parm: { id: 3 } });
          break;
        case "order_box":
          core_default.view.open(Res_default.views.OrderView);
          break;
        case "friends":
          this.openFriend();
          break;
        case "land":
          break;
        case "landLevelUp":
          if (!this.isOuter)
            this.switchLandLevelUp(true);
          break;
        case "close_up":
          this.switchLandLevelUp(false);
          break;
        case "any_door":
          this.goToNeighbor();
          break;
        case "go_home":
          this.goHome();
          break;
        case "add_vitality":
          this.buyVitality();
          break;
      }
    }
    sow(showView = false, d) {
      var _a, _b;
      let empty = true;
      for (let x = 0, l = this.landList.length; x < l; x++) {
        if (!((_b = (_a = this.landList[x]) == null ? void 0 : _a.data) == null ? void 0 : _b.productId)) {
          if (showView) {
            this.landList[x].sowPlant(d);
          } else {
            this.landList[x].sow();
          }
          empty = false;
          break;
        }
      }
      if (empty) {
        core_default.view.openHint({ text: "\u6CA1\u6709\u7A7A\u7684\u571F\u5730\u54E6\uFF01", call: () => {
        } });
      }
    }
    getEmptyLandId() {
      console.log(this.landList);
      for (let x = 0, l = this.landList.length; x < l; x++) {
        if (this.landList[x].data && !this.landList[x].data.productId) {
          return this.landList[x].fieldId;
        }
      }
      return null;
    }
    openMail() {
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.mailList
      }).then((d) => {
        core_default.view.open(Res_default.views.MailView, { parm: d });
        this.canClick = true;
      }).catch(() => {
        this.canClick = true;
      });
    }
    openFriend(type = null) {
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.friendList
      }).then((d) => {
        this.canClick = true;
        core_default.view.open(Res_default.views.FriendsView, { parm: { friendData: d, type } });
      }).catch(() => {
        this.canClick = true;
      });
    }
    buyVitality() {
      core_default.view.open(Res_default.views.BuyVitalityView);
    }
    updateOrder() {
      var _a;
      if (!this.orderQueueIng) {
        let box = this.orderBox.getChildByName("order_box"), d = TableAnalyze_default.table("order").get(UserInfo_default.orderLevel + 1), reward, rewardCount = 0, curCount = 0, maxCount = 0, progress = 0;
        if (!d)
          return console.log("\u7B49\u7EA7\u5DF2\u5B8C");
        for (let x = 0; x < 4; x++) {
          let item = box.getChildByName("item_" + x);
          if (d.condition[x]) {
            curCount = ((_a = WarehouseService_default.getOne(d.condition[x].plant.id)) == null ? void 0 : _a.count) || 0;
            maxCount = d.condition[x].count;
            if (curCount >= maxCount) {
              progress++;
            }
            item.getChildByName("icon").skin = d.condition[x].plant.icon;
            item.getChildByName("num").text = `${curCount}/${maxCount}`;
            item.getChildByName("bar").width = 87 * (curCount / maxCount > 1 ? 1 : curCount / maxCount);
            item.visible = true;
            d.condition[x].plant.gain.forEach((e) => {
              if (e.obj.id === ConfigGame_default.goldId) {
                if (!reward) {
                  reward = e;
                }
                rewardCount += e.count * maxCount;
              }
            });
          } else {
            item.visible = false;
          }
        }
        if (reward) {
          let goldBox = box.getChildByName("gold_box"), diamondBox = box.getChildByName("diamond_box");
          goldBox.getChildByName("icon").skin = reward.obj.icon;
          goldBox.getChildByName("value").value = `${rewardCount + Math.round(rewardCount * d.commission)}`;
          if (d.extraReward) {
            diamondBox.getChildByName("icon").skin = d.extraReward.obj.icon;
            diamondBox.getChildByName("value").value = `${d.extraReward.count}`;
            diamondBox.visible = true;
            goldBox.y = 46;
          } else {
            goldBox.y = 66;
            diamondBox.visible = false;
          }
        }
        box.getChildByName("name_title").text = `\u5B8C\u6210${UserInfo_default.orderLevel + 1}\u7EA7\u8BA2\u5355`;
        if (progress == d.condition.length) {
          const condition = d.condition;
          this.orderQueueIng = true;
          HttpControl.inst.send({
            api: ApiHttp.orderReward,
            data: {
              orderId: UserInfo_default.orderLevel + 1
            }
          }).then(() => {
            condition.forEach((e) => {
              WarehouseService_default.reduceAmount(e.plant.id, e.count);
            });
            this.orderQueueIng = false;
            UserInfo_default.orderLevel++;
            let reward2 = [];
            reward2.push({
              obj: TableAnalyze_default.table("currency").get(ConfigGame_default.goldId),
              count: rewardCount + Math.round(rewardCount * d.commission),
              posType: 1
            });
            if (d.extraReward) {
              reward2.push({
                obj: TableAnalyze_default.table("currency").get(d.extraReward.obj.id),
                count: d.extraReward.count,
                posType: 2
              });
            }
            this.playGetRewardAni({
              node: box.getChildByName("gold_box"),
              list: reward2,
              callBack: () => {
                this.updateOrder();
              }
            });
          }).catch(() => {
            this.orderQueueIng = false;
          });
        }
      }
    }
    switchLandLevelUp(show) {
      let bg = this.landUpLayer.getChildByName("bg");
      if (show) {
        this.hideGuideHand();
        bg.alpha = 0;
        Laya.Tween.to(bg, { alpha: 0.75 }, 150);
        this.landUpLayer.getChildByName("land_outer").addChild(this.landBox);
        this.landUpLayer.active = true;
        this.landUpLayer.visible = true;
        this.landList.forEach((e) => {
          if (e.data) {
            if (TableAnalyze_default.table("landLevel").get(e.data.level + 1)) {
              e.showIcon(false);
              e.setStateIconSkin(2);
              e.topStateIconAni(true);
              e.showTimeBox(false);
              e.showShadowIcon(false);
            }
          }
          e.buildIng = true;
        });
      } else {
        Laya.Tween.to(bg, { alpha: 0 }, 150, null, Laya.Handler.create(this, () => {
          this.landUpLayer.active = false;
          this.landUpLayer.visible = false;
          this.centerBox.addChild(this.landBox);
        }));
        this.landList.forEach((e) => {
          if (e.data) {
            e.showIcon(true);
            if (e.data.id) {
              if (e.data.matureTimeLeft) {
                e.showTimeBox(true);
                e.showShadowIcon(true);
              }
              if (!e.data.productId) {
                e.clearField();
              }
            } else {
              e.clearField();
            }
          }
          e.buildIng = false;
          if (e.data) {
            if (e.data.id) {
              e.setStateIconSkin(e.data.matureTimeLeft ? 1 : 3);
            }
            e.topStateIconAni(Boolean(e.data.productId));
          } else {
            e.setStateIconSkin(1);
            e.topStateIconAni(false);
          }
        });
      }
    }
    playGetRewardAni(obj) {
      Laya.timer.once(2e3, this, () => {
        if (obj.callBack)
          obj.callBack();
      });
      obj.list.forEach((d, i) => {
        var _a;
        let node = Laya.Pool.getItemByCreateFun("floatRewardBox", this.getRewardPrefab.create, this.getRewardPrefab);
        let icon = node.getChildByName("icon");
        icon.skin = ((_a = d.obj) == null ? void 0 : _a.icon) || "";
        let scale = 80 / icon.width;
        icon.scale(scale, scale);
        node.alpha = 0;
        let nodeNewPos = this.topLayerOnStage.globalToLocal(obj.node.localToGlobal(new Laya.Point()));
        node.pos(nodeNewPos.x + obj.node.get_width() * obj.node.anchorX, nodeNewPos.y - i * 60);
        this.topLayerOnStage.addChild(node);
        node.getChildByName("count").value = "x" + d.count;
        if (!(obj == null ? void 0 : obj.notFly)) {
          switch (d.posType) {
            case 1:
              this.addGoldDiamondAni(this.goldAdd, d.count);
              break;
            case 2:
              this.addGoldDiamondAni(this.diamondAdd, d.count);
              break;
          }
        }
        Laya.Tween.to(node, { y: node.y - 40, alpha: 1 }, 150, null, Laya.Handler.create(this, (e) => {
          Laya.timer.once(1e3, this, () => {
            Laya.Pool.recover("floatRewardBox", e);
            let localPosIcon = this.topLayerOnStage.globalToLocal(e.localToGlobal(Laya.Point.create()));
            e.removeSelf();
            if (obj.notFly) {
              return;
            }
            for (let x = 0; x < 5; x++) {
              let floatIcon = Laya.Pool.getItemByCreateFun("floatRewardIcon", this.floatRewardIcon.create, this.floatRewardIcon);
              floatIcon.skin = d.obj.icon;
              floatIcon.pos(localPosIcon.x + Math.random() * 20 * (Math.random() < 0.5 ? 1 : -1), localPosIcon.y + Math.random() * 20 * (Math.random() < 0.5 ? 1 : -1));
              floatIcon.scale(scale, scale);
              this.topLayerOnStage.addChild(floatIcon);
              floatIcon.zOrder = 999;
              let topIcon;
              switch (d.posType) {
                case 1:
                  topIcon = this.topGoldIcon;
                  break;
                case 2:
                  topIcon = this.topDiamondIcon;
                  break;
                case 3:
                  topIcon = this.warehouseBtn;
                  break;
              }
              let topGoldIconPos = topIcon.localToGlobal(new Laya.Point(topIcon.width / 2, topIcon.height / 2));
              let localPos = this.topLayerOnStage.globalToLocal(topGoldIconPos);
              Laya.Tween.to(floatIcon, { x: localPos.x, y: localPos.y }, 1e3, Laya.Ease.backIn, Laya.Handler.create(this, (e2) => {
                e2.removeSelf();
                Laya.Pool.recover("floatRewardIcon", e2);
              }, [floatIcon]), 150 * x);
            }
          });
        }, [node]), 50 * i, null, true);
      });
    }
    addGoldDiamondAni(node, count) {
      node.visible = true;
      node.alpha = 0;
      node.value = `+${count}`;
      node.y = 30;
      node.offAll();
      Laya.Tween.to(node, { alpha: 1, y: -30 }, 500, null, new Laya.Handler(this, () => {
        Laya.timer.once(2e3, this, () => {
          node.alpha = 0;
        });
      }));
    }
    playAdReward(target) {
      const reward = TableAnalyze_default.table("config").get("Videorewards").value;
      core_default.eventGlobal.event(EventMaps.play_get_reward, {
        node: target,
        list: [
          {
            obj: reward.obj,
            count: reward.count,
            posType: reward.obj.id == ConfigGame_default.goldId ? 1 : 2
          }
        ]
      });
    }
    updateTask() {
      const box = this.taskBox, icon = box.getChildByName("icon"), amountFont = icon.getChildByName("amountFont"), desc = box.getChildByName("lb"), list = TaskService_default.getList(), task = list[0];
      if (task.receive == 1 || this.isOuter) {
        box.visible = false;
        return;
      }
      box.visible = true;
      desc.text = `\u4EFB\u52A1:${task.base.desc}(${task.times > task.base.times ? task.base.times : task.times}/${task.base.times})`;
      amountFont.value = "x" + task.base.reward.count;
      icon.skin = task.base.reward.obj.icon;
      box.width = desc.width + 100;
    }
    goHome() {
      core_default.view.setOverView(true, () => {
        HttpControl.inst.send({
          api: ApiHttp.goHome,
          data: {}
        }).then(() => {
          this.goHomeNodeData();
        });
      });
    }
    goHomeNodeData(updateOutTime = false) {
      if (updateOutTime) {
        this.outerTime = Date.now();
      }
      this.isOuter = false;
      Laya.timer.once(300, this, () => {
        core_default.view.setOverView(false);
        this.goFriend(null);
        this.updateHitLandAdd();
      });
    }
    goToNeighbor() {
      this.hideGuideHand();
      core_default.view.setOverView(true, () => {
        HttpControl.inst.send({
          api: ApiHttp.neighbor,
          data: {
            type: ConfigGame_default.ApiTypeDefault
          }
        }).then((d) => {
          this.isOuter = true;
          this.goFriend(d);
          Laya.timer.once(300, this, () => {
            core_default.view.setOverView(false);
          });
        });
      });
    }
    goFriendListen(d, friendData) {
      this.outCountDownNumber = 60;
      this.isOuter = true;
      this.goFriend(d, friendData);
    }
    goFriend(d, friendData) {
      var _a;
      let lands = this.landList, userLands = LandService_default.list;
      let otherLands = new Map();
      if (this.isOuter) {
        d.lands.forEach((e) => {
          otherLands.set(e.id, e);
        });
        this.outerTime = Date.now();
        this.vitalityBox.visible = true;
        this.goHomeBtn.visible = true;
        this.anyDoor.visible = false;
      } else {
        userLands.forEach((d2) => {
          d2.matureTimeLeft -= (Date.now() - this.outerTime) / 1e3;
          if (d2.matureTimeLeft < 0)
            d2.matureTimeLeft = 0;
        });
        this.vitalityBox.visible = false;
        this.anyDoor.visible = true;
        this.goHomeBtn.visible = false;
      }
      for (let x = 0; x < lands.length; x++) {
        const land = lands[x];
        if (this.isOuter) {
          land.isOuter = true;
          land.stealUid = d.uid;
          land.updateData({ list: otherLands });
          if (d.protectedTime) {
            land.canSteal = false;
            land.topStateIconAni(false);
          } else {
            land.canSteal = true;
          }
        } else {
          land.canSteal = false;
          land.isOuter = false;
          land.stealUid = null;
          land.updateData({ list: null });
        }
        land.plantIconAni(Boolean((_a = land.data) == null ? void 0 : _a.productId));
      }
      this.updateAllStateIcon();
      if (this.isOuter) {
        this.taskBox.visible = false;
      } else {
        this.taskBox.visible = true;
      }
      this.updateFriendView(d == null ? void 0 : d.nickname, friendData, d == null ? void 0 : d.dogId);
    }
    updateFriendView(nickname = "", friendData, pedId) {
      const topBox = this.orderBox.parent, moneyBox = topBox.getChildByName("money_box"), countDown = topBox.getChildByName("count_down"), orderBox = this.orderBox.getChildByName("order_box"), friendName = this.orderBox.getChildByName("friend_name"), bottomList = [
        this.bottomBox.getChildByName("task"),
        this.bottomBox.getChildByName("signIn"),
        this.bottomBox.getChildByName("mail")
      ];
      if (this.isOuter) {
        friendName.text = `${nickname}\u7684\u519C\u573A`;
        orderBox.visible = false;
        friendName.visible = true;
        moneyBox.visible = false;
        countDown.visible = true;
        countDown.text = Tools.formatSeconds(this.outCountDownNumber);
        Laya.timer.loop(1e3, this, this.outCountDownEvent, [countDown]);
        if (friendData == null ? void 0 : friendData.avatar)
          this.avatarNode.skin = friendData == null ? void 0 : friendData.avatar;
        if (pedId) {
          this.petBox.visible = true;
          this.petBox.getChildByName("dog_ani").source = `res/dog_${pedId}.atlas`;
        } else {
          this.petBox.visible = false;
        }
        this.petBox.getChildByName("box").visible = false;
      } else {
        this.outCountDownNumber = 60;
        Laya.timer.clear(this, this.outCountDownEvent);
        orderBox.visible = true;
        friendName.visible = false;
        moneyBox.visible = true;
        countDown.visible = false;
        if (UserInfo_default.avatar) {
          this.avatarNode.skin = UserInfo_default.avatar;
        } else {
          this.avatarNode.skin = `main_scene/img_defaultPortrait.png`;
        }
        if (UserInfo_default.warePetId) {
          this.petBox.visible = true;
          this.petBox.getChildByName("dog_ani").source = `res/dog_${UserInfo_default.warePetId}.atlas`;
        } else {
          this.petBox.visible = false;
        }
        this.petBox.getChildByName("box").visible = true;
      }
      bottomList.forEach((e) => {
        e.disabled = this.isOuter;
      });
    }
    outCountDownEvent(lb) {
      this.outCountDownNumber--;
      lb.text = Tools.formatSeconds(this.outCountDownNumber);
      if (this.outCountDownNumber <= 0) {
        Laya.timer.clear(this, this.outCountDownEvent);
        this.goHome();
      }
    }
    onHdDestroy() {
      var _a;
      (_a = this.guidHandAni) == null ? void 0 : _a.destroy();
    }
  };
  var MainView = _MainView;
  __decorateClass([
    core_default.eventOn(EventMaps.plant_sow)
  ], MainView.prototype, "sow", 1);
  __decorateClass([
    core_default.eventOn(EventMaps.open_friend)
  ], MainView.prototype, "openFriend", 1);
  __decorateClass([
    core_default.eventOn(EventMaps.update_Order)
  ], MainView.prototype, "updateOrder", 1);
  __decorateClass([
    core_default.eventOn(EventMaps.play_get_reward)
  ], MainView.prototype, "playGetRewardAni", 1);
  __decorateClass([
    core_default.eventOn(EventMaps.play_ad_get_reward)
  ], MainView.prototype, "playAdReward", 1);
  __decorateClass([
    core_default.eventOn(EventMaps.update_task)
  ], MainView.prototype, "updateTask", 1);
  __decorateClass([
    core_default.eventOn(EventMaps.go_home)
  ], MainView.prototype, "goHomeNodeData", 1);
  __decorateClass([
    core_default.eventOn(EventMaps.go_friend_home)
  ], MainView.prototype, "goFriendListen", 1);

  // src/view/FriendsView.ts
  var FriendsView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.empty_lb = null;
      this.viewState = 1;
      this.friends = [];
      this.friendsList = [];
      this.canClick = true;
    }
    onOpened(data) {
      this.friends = data.friendData.list;
      this.friendsList = this.friends;
      this.updateListData();
      this.addBox.visible = false;
      this.addBox.active = false;
      this.itemList.array = this.friendsList;
      this.isEmpty();
      this.itemList.renderHandler = new Laya.Handler(this, this.itemRender);
      this.itemList.vScrollBarSkin = null;
      this.userKey.text = `\u6211\u7684\u53CB\u60C5\u7801\uFF1A${UserInfo_default.key}`;
      console.log(data.type);
      if (data.type && data.type == 1) {
        this.addFriendEvent();
      }
    }
    isEmpty() {
      this.empty_lb.visible = !this.itemList.array.length;
    }
    updateListData() {
      this.friendsList.sort((a, b) => {
        return b.applyIng * 1e5 - a.applyIng * 1e5;
      });
    }
    itemRender(cell, i) {
      const data = this.itemList.array[i];
      let newBox = cell.getChildByName("new_box"), heartBox = cell.getChildByName("heart_box"), goPlayBtn = cell.getChildByName("go_play_btn"), applyBtn = cell.getChildByName("apply_btn"), delBtn = cell.getChildByName("del_btn");
      heartBox.visible = false;
      goPlayBtn.visible = false;
      applyBtn.visible = false;
      delBtn.visible = false;
      console.log(data);
      if (data == null ? void 0 : data.avatar)
        cell.getChildByName("head").skin = data.avatar;
      cell.getChildByName("name").text = data.nickname;
      cell.getChildByName("lv").text = (data.orderLevel || 0) + "";
      heartBox.getChildByName("val").text = (data.intimacy || 0) + "";
      cell.getChildByName("reward_box").getChildByName("value").text = data.gainDiamond + "";
      cell.getChildByName("del_btn").dataSource = data;
      goPlayBtn.dataSource = data;
      switch (this.viewState) {
        case 1:
          goPlayBtn.visible = true;
          heartBox.visible = true;
          break;
        case 2:
          applyBtn.dataSource = data;
          applyBtn.visible = true;
          newBox.visible = false;
          newBox.active = false;
          break;
        case 3:
          heartBox.visible = true;
          delBtn.visible = true;
          break;
      }
      if (this.viewState == 1 || this.viewState == 3) {
        if (data.applyIng) {
          newBox.visible = true;
          newBox.active = true;
          newBox.getChildByName("past_btn").dataSource = data;
          newBox.getChildByName("ignore").dataSource = data;
          heartBox.visible = false;
          goPlayBtn.visible = false;
        } else {
          newBox.visible = false;
          newBox.active = false;
        }
      }
      console.log(this.viewState);
    }
    onClick(e) {
      if (!this.canClick)
        return;
      console.log(e.target.name);
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.FriendsView);
          break;
        case "add_friend":
          this.addFriendEvent();
          break;
        case "del_friend":
          this.deleteFriendEvent();
          break;
        case "desc_btn":
          core_default.view.open(Res_default.views.FriendsDescView);
          break;
        case "reward_btn":
          this.openReward();
          break;
        case "copy_btn":
          this.copy();
          break;
        case "search_btn":
          this.search();
          break;
        case "apply_btn":
          this.applyEvent(e.target);
          break;
        case "past_btn":
          this.allowFriend(e.target);
          break;
        case "del_btn":
          this.deleteFriend(e.target);
          break;
        case "ignore":
          this.ignore(e.target);
          break;
        case "go_play_btn":
          this.visitFriend(e.target);
          break;
        default:
          break;
      }
    }
    deleteFriendEvent() {
      if (this.viewState == 3)
        return;
      this.addBox.visible = false;
      this.addBox.active = false;
      this.viewState = 3;
      let newF = [];
      this.friends.forEach((d) => {
        if (!d.applyIng)
          newF.push(d);
      });
      this.itemList.array = newF;
      this.itemList.height = 914;
      this.itemList.refresh();
      this.isEmpty();
      this.addFriend.skin = `game/img_friendBtn.png`;
    }
    addFriendEvent() {
      if (this.viewState == 3 || this.viewState == 2) {
        console.log(this.viewState);
        this.viewState = 1;
        this.itemList.array = this.friends;
        this.itemList.height = 914;
        this.addFriend.skin = `game/img_addBtn.png`;
        this.addBox.visible = false;
        this.addBox.active = false;
        this.isEmpty();
      } else {
        this.viewState = 2;
        this.addBox.visible = true;
        this.addBox.active = true;
        this.itemList.array = [];
        this.itemList.height = 590;
        this.addFriend.skin = `game/img_friendBtn.png`;
        this.empty_lb.visible = false;
      }
      this.itemList.refresh();
    }
    ignore(target) {
      let data = target.dataSource;
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.friendDelete,
        data: {
          friendId: data.uid
        }
      }).then((e) => {
        for (let x = 0; x < this.friends.length; x++) {
          if (this.friends[x].uid == data.uid) {
            this.friends.splice(x, 1);
            break;
          }
        }
        this.canClick = true;
        this.itemList.refresh();
        this.isEmpty();
      }).catch(() => {
        this.canClick = true;
      });
    }
    openReward() {
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.friendInviteList,
        data: {}
      }).then((d) => {
        core_default.view.open(Res_default.views.FriendsRewardView, {
          parm: {
            list: d.list,
            call: () => {
              HttpControl.inst.send({
                api: ApiHttp.friendList
              }).then((d2) => {
                this.friends = d2.list;
                this.friendsList = this.friends;
                this.updateListData();
                this.itemList.array = this.friendsList;
                this.isEmpty();
                this.itemList.refresh();
              });
            }
          }
        });
        this.canClick = true;
      }).catch(() => {
        this.canClick = true;
      });
    }
    visitFriend(target) {
      this.canClick = false;
      core_default.view.setOverView(true, () => __async(this, null, function* () {
        let data = target.dataSource;
        if (MainView.inst.isOuter) {
          yield HttpControl.inst.send({
            api: ApiHttp.goHome,
            data: {}
          });
        }
        HttpControl.inst.send({
          api: ApiHttp.friendVisit,
          data: {
            friendId: data.uid
          }
        }).then((d) => {
          core_default.view.close(Res_default.views.FriendsView);
          core_default.eventGlobal.event(EventMaps.go_friend_home, [d, data]);
          setTimeout(() => {
            core_default.view.setOverView(false);
            this.canClick = true;
          }, 300);
        }).catch(() => {
          this.canClick = true;
          core_default.eventGlobal.event(EventMaps.go_home, [true]);
        });
      }));
    }
    deleteFriend(target) {
      core_default.view.openHint({
        text: "\u786E\u8BA4\u8981\u5220\u9664\u597D\u53CB\u5417\uFF1F",
        call: () => {
          let data = target.dataSource;
          HttpControl.inst.send({
            api: ApiHttp.friendDelete,
            data: {
              friendId: data.uid
            }
          }).then((e) => {
            for (let x = 0; x < this.friends.length; x++) {
              if (this.friends[x].uid == data.uid) {
                this.friends.splice(x, 1);
                break;
              }
            }
            this.itemList.array = this.friendsList;
            this.itemList.refresh();
            this.isEmpty();
          });
        },
        cancelCall: () => {
        }
      });
    }
    allowFriend(target) {
      this.canClick = false;
      let data = target.dataSource;
      HttpControl.inst.send({
        api: ApiHttp.friendAllow,
        data: {
          friendId: data.uid
        }
      }).then(() => {
        data.applyIng = 0;
        this.itemList.refresh();
        this.canClick = true;
        AppCore.runAppFunction({
          uri: AppEventMap.eventCount,
          data: { type: "Addfriends" }
        });
      }).catch(() => {
        this.canClick = true;
      });
    }
    applyEvent(target) {
      let data = target.dataSource;
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.friendApply,
        data: {
          friendId: data.uid
        }
      }).then((d) => {
        this.friendsList = [];
        this.itemList.array = this.friendsList;
        this.itemList.refresh();
        core_default.view.openHint({ text: "\u5DF2\u53D1\u9001\u6FC0\u60C5", call: () => {
        } });
        this.canClick = true;
        if (d.taskState) {
          TaskService_default.taskAddTimes(1009);
        }
      }).catch(() => {
        this.canClick = true;
      });
    }
    search() {
      if (!this.keyInputNode.text.length) {
        core_default.view.openHint({ text: "\u53CB\u60C5\u7801\u4E0D\u80FD\u4E3A\u7A7A", call: () => {
        } });
        return;
      }
      if (this.keyInputNode.text == UserInfo_default.key) {
        core_default.view.openHint({ text: "\u641C\u7D22\u81EA\u5DF1\u5E72\u5565", call: () => {
        } });
        return;
      }
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.friendSearch,
        data: {
          key: this.keyInputNode.text
        }
      }).then((d) => {
        this.friendsList = [d];
        this.itemList.array = this.friendsList;
        this.itemList.refresh();
        this.canClick = true;
      }).catch(() => {
        this.canClick = true;
      });
    }
    copy() {
      let a = document.createElement("input");
      document.body.appendChild(a);
      a.value = UserInfo_default.key;
      a.select();
      document.execCommand("copy");
      a.remove();
      core_default.view.openHint({ text: "\u590D\u5236\u6210\u529F", call: () => {
      } });
    }
  };

  // src/view/GuideView.ts
  var GuideView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.guideHand = null;
      this.descLb = null;
      this.nodeBox = null;
      this.textList = [
        "\u60A8\u7684\u94B1\u5305\u4F59\u989D",
        "\u8FD9\u91CC\u662F\u5E02\u626C\u8BA2\u5355,\u6309\u8981\u6C42\u5B8C\u6210\u540E\u4F1A\u81EA\u52A8\u8FDB\u5165\u4E0B\u4E00\u7EA7\u8BA2\u5355\u3002",
        "\u8FD9\u91CC\u662F\u4ED3\u5E93,\u6536\u83B7\u7684\u4F5C\u7269\u90FD\u5B58\u653E\u5728\u8FD9\u91CC\uFF0C\u51FA\u552E\u4F5C\u7269\u4E5F\u5728\u8FD9\u91CC\u3002",
        "\u8FD9\u91CC\u662F\u96C6\u5E02,\u8D2D\u4E70\u79CD\u5B50\u3001\u72D7\u7CAE\u7684\u5730\u65B9\u8FD8\u6709\u6700\u91CD\u8981\u7684\u94B1\u5E84\u4E5F\u5728\u8FD9\u91CC,\u63D0\u73B0\u7684\u65F6\u5019\u60A8\u4F1A\u7ECF\u5E38\u6765\u7684\u3002",
        "\u571F\u5730\u5347\u7EA7\u5728\u8FD9\u91CC,\u571F\u5730\u7B49\u7EA7\u8D8A\u9AD8,\u8D8A\u80A5\u6C83\uFF0C\u6536\u83B7\u5C31\u8D8A\u591A\u3002",
        "\u8FD9\u91CC\u662F\u60A8\u7684\u519C\u573A\u3002\u79CD\u690D\u3001\u6536\u83B7\u90FD\u5728\u8FD9\u91CC,\u6084\u6084\u544A\u8BC9\u4F60\u8FD9\u5757\u5730\u6536\u83B7\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u4EA7\u51FA\u94BB\u77F3\u54E6\u3002",
        "\u60A8\u7684\u4EFB\u52A1",
        "\u60A8\u7684\u4FE1\u4EF6",
        "\u8FD9\u91CC\u53EF\u4EE5\u53BB\u522B\u4EBA\u7684\u519C\u573A\u8F6C\u8F6C,\u5E2E\u522B\u4EBA\u6536\u7684\u83DC\u90FD\u5F52\u60A8,\u4F46\u662F\u8981\u5C0F\u5FC3\u72D7\u72D7\u54E6\u3002"
      ];
      this.step = 0;
      this.canClick = true;
    }
    onOpened(data) {
      if (!data)
        return;
      if (!data.nodeList)
        data.nodeList = [];
      this.data = data;
      this.guideHand.alpha = 0;
      this.userStep = UserInfo_default.guideData.split("");
      if (!this.userStep.length) {
        this.step = 0;
      } else {
        for (let x = 0; x < 9; x++) {
          if (!this.userStep[x] || this.userStep[x] == "0") {
            this.step = x;
            break;
          }
        }
      }
      this.guidHandAni();
      this.updateStep();
    }
    updateStep() {
      let pos;
      const preNode = this.data.nodeList[this.step - 1];
      if (preNode && this.oldParent) {
        pos = this.oldParent.globalToLocal(this.nodeBox.localToGlobal(new Laya.Point(preNode.x, preNode.y)));
        this.oldParent.addChildAt(preNode, this.oldZOrder);
        preNode.pos(pos.x, pos.y);
      }
      if (!this.textList[this.step]) {
        core_default.view.close(Res_default.views.GuideView);
        if (this.data.call)
          this.data.call();
        return;
      }
      const node = this.data.nodeList[this.step];
      this.oldZOrder = node.zOrder;
      this.oldParent = node.parent;
      pos = this.nodeBox.globalToLocal(this.oldParent.localToGlobal(new Laya.Point(node.x, node.y)));
      this.nodeBox.addChild(node);
      node.pos(pos.x, pos.y);
      this.guideHand.scaleX = 1;
      const textPosAdd = new Laya.Point();
      switch (this.step) {
        case 0:
          pos.x += 200;
          pos.y += 150;
          textPosAdd.setTo(-100, 80);
          break;
        case 1:
          pos.x += 200;
          pos.y += 250;
          textPosAdd.setTo(-300, 80);
          break;
        case 2:
          pos.x += 200;
          pos.y += 250;
          textPosAdd.setTo(-200, 80);
          break;
        case 3:
          pos.x += -100;
          pos.y += 250;
          this.guideHand.scaleX = -1;
          textPosAdd.setTo(-400, 80);
          break;
        case 4:
          pos.x += 200;
          pos.y += 250;
          textPosAdd.setTo(-200, 80);
          break;
        case 5:
          pos.x += 600;
          pos.y += 450;
          textPosAdd.setTo(-200, 80);
          break;
        case 6:
          pos.x += 160;
          pos.y += 100;
          textPosAdd.setTo(-200, -280);
          break;
        case 7:
          pos.x += 160;
          pos.y += 100;
          textPosAdd.setTo(-200, -280);
          break;
        case 8:
          pos.x += 140;
          pos.y += 100;
          textPosAdd.setTo(-560, -380);
          break;
      }
      Laya.Tween.to(this.guideHand, { x: pos.x, y: pos.y, alpha: 1 }, 300);
      this.descLb.alpha = 0;
      Laya.Tween.to(this.descLb, { alpha: 1 }, 150);
      this.descLb.pos(pos.x + textPosAdd.x, pos.y + textPosAdd.y);
      this.descLb.text = this.textList[this.step];
      this.step++;
    }
    onClick(e) {
      if (!this.canClick)
        return;
      this.canClick = false;
      this.userStep[this.step] = "1";
      HttpControl.inst.send({
        api: ApiHttp.guide,
        data: {
          data: this.userStep.join("")
        }
      }).then(() => {
        this.updateStep();
        this.canClick = true;
      }).catch(() => {
        this.canClick = true;
      });
    }
    guidHandAni() {
      this.guidAni = Laya.TimeLine.to(this.guideHand, { rotation: -15 }, 400, null).to(this.guideHand, { rotation: 0 }, 400);
      this.guidAni.play(null, true);
    }
    onHdDisable() {
      var _a;
      (_a = this.guidAni) == null ? void 0 : _a.destroy();
    }
  };

  // src/view/HintView.ts
  var HintView = class extends core_default.gameScript {
    onOpened(d) {
      var _a;
      this.data = d;
      this.text.text = ((_a = this.data) == null ? void 0 : _a.text) || "";
      if (this.data.call) {
        this.confirmBtn.visible = true;
      } else {
        this.confirmBtn.visible = false;
      }
      if (this.data.cancelCall) {
        this.cancelBtn.visible = true;
      } else {
        this.cancelBtn.visible = false;
      }
      if (this.data.call && this.data.cancelCall) {
        this.confirmBtn.x = 252;
      } else {
        this.confirmBtn.x = 458;
      }
    }
    onClick(e) {
      var _a, _b;
      switch (e.target.name) {
        case "cancel":
          if ((_a = this.data) == null ? void 0 : _a.cancelCall) {
            this.data.cancelCall();
          }
          core_default.view.close(Res_default.views.HintView);
          break;
        case "confirm":
          if ((_b = this.data) == null ? void 0 : _b.call) {
            this.data.call();
          }
          core_default.view.close(Res_default.views.HintView);
          break;
      }
    }
  };

  // src/view/LoginView.ts
  var LoginView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.loadBar = null;
      this.loadBox = null;
      this.loginBox = null;
      this.privacyBox = null;
      this.privacyCheckIcon = null;
      this.loadBarOldWidth = 0;
      this.canClick = true;
    }
    onOpened(d) {
      return __async(this, null, function* () {
        var _a;
        this.data = d;
        this.loginBox.visible = false;
        this.loadBox.visible = false;
        this.privacyBox.visible = false;
        yield this.version();
        if ((_a = LocalStorageService_default.getJSON()) == null ? void 0 : _a.isLogin) {
          this.login(false);
          this.loginBox.visible = false;
          this.loadBox.visible = true;
        } else {
          this.loginBox.visible = true;
          this.loadBox.visible = false;
          this.privacyBox.visible = true;
        }
      });
    }
    onHdAwake() {
      EventGlobal_default.on(EventMaps.load_progress, this, this.loadProgress);
    }
    onHdEnable() {
      this.loadBarOldWidth = this.loadBar.width;
      this.loadBar.width = 0;
    }
    getBuildType() {
      let buildType = null;
      switch ("debug") {
        case BuildType.debug:
          buildType = 3;
          break;
        case BuildType.test:
          buildType = 2;
          break;
        case BuildType.online:
          buildType = 1;
          break;
      }
      if (!buildType) {
        return core_default.view.openHint({
          text: "\u73AF\u5883type\u914D\u7F6E\u51FA\u9519",
          call: () => {
            AppCore.runAppFunction({
              uri: AppEventMap.clearCache,
              data: {}
            });
            location.reload();
          }
        });
      }
      return buildType;
    }
    version() {
      return __async(this, null, function* () {
        return new Promise((resolve) => {
          HttpControl.inst.send({
            api: ApiHttp.configClient,
            data: { id: this.getBuildType() }
          }).then((d) => {
            var _a;
            const version = Number((_a = LocalStorageService_default.getJSON().version) == null ? void 0 : _a.replace(/\./g, ""));
            if (!version) {
              resolve(null);
              LocalStorageService_default.setJSON("version", d.version);
              ConfigGame_default.version = d.version;
              return;
            }
            if (Number(d.version.replace(/\./g, "")) > version) {
              AppCore.runAppFunction({
                uri: AppEventMap.clearCache,
                data: {}
              });
              core_default.view.openHint({
                text: "\u68C0\u6D4B\u5230\u65B0\u7684\u7248\u672C\uFF0C\u8BF7\u66F4\u65B0\uFF01",
                call: () => {
                  LocalStorageService_default.setJSON("version", d.version);
                  AppCore.runAppFunction({
                    uri: AppEventMap.showBackground,
                    data: {}
                  });
                  location.reload();
                }
              });
            } else {
              ConfigGame_default.version = d.version;
              LocalStorageService_default.setJSON("version", d.version);
              resolve(null);
            }
          }).catch(() => {
            alert("\u7248\u672C\u68C0\u6D4B\u51FA\u9519");
            resolve(null);
          });
        });
      });
    }
    onClick(e) {
      switch (e.target.name) {
        case "login_btn":
          this.login(true);
          break;
        case "check_box":
          this.privacyCheckIcon.visible = !this.privacyCheckIcon.visible;
          break;
        case "privacy_lb":
          AppCore.runAppFunction({
            uri: AppEventMap.privacyAgreement,
            data: {}
          });
          break;
      }
    }
    login(isWx) {
      return __async(this, null, function* () {
        if (!this.canClick)
          return;
        this.canClick = false;
        if (LocalStorageService_default.getJSON().token) {
          HttpControl.inst.send({
            api: ApiHttp.loginToken,
            error: (code, data) => {
              LocalStorageService_default.clear();
              this.loginBox.visible = true;
              this.loadBox.visible = false;
            }
          }).then((d) => {
            var _a;
            if ((_a = this.data) == null ? void 0 : _a.call)
              this.data.call(d);
            this.loginBox.visible = false;
            this.loadBox.visible = true;
            this.canClick = true;
            AppCore.runAppFunction({
              uri: AppEventMap.loginSuccess,
              data: {
                user_id: Number(d.userInfo.key)
              },
              timestamp: Date.now()
            }).then((data) => {
              if (data == null ? void 0 : data.code) {
                core_default.view.openHint({ text: `\u767B\u5F55\u5931\u8D25[${data.code}]` });
              } else {
                if (data)
                  ConfigGame_default.channel = data.data["channel"];
              }
            });
            AppCore.runAppFunction({
              uri: AppEventMap.eventCount,
              data: { type: "Signin" }
            });
          }).catch(() => {
            this.canClick = true;
            this.loginBox.visible = true;
            this.loadBox.visible = false;
            this.privacyBox.visible = true;
          });
          this.privacyBox.visible = false;
        } else {
          this.privacyBox.visible = true;
          if (!this.privacyCheckIcon.visible) {
            core_default.view.openHint({
              text: "\u8BF7\u9605\u8BFB\u300A\u7528\u6237\u9690\u79C1\u534F\u8BAE\u300B",
              call: () => {
                LocalStorageService_default.clear();
                this.loginBox.visible = true;
                this.canClick = true;
                this.loadBox.visible = false;
              }
            });
            return;
          }
          let testK = location.search.match(/\?id=(.+)/), testKe = null;
          if (testK && testK.length > 1) {
            testKe = testK[1];
          }
          let wxOpenId = testKe, nickname = "", avatar = "";
          if (isWx && !wxOpenId) {
            const data = yield AppCore.runAppFunction({
              uri: AppEventMap.wxLogin,
              data: {},
              timestamp: Date.now()
            });
            if (data) {
              if (data.code) {
                core_default.view.openHint({
                  text: `\u5FAE\u4FE1\u767B\u5F55\u5931\u8D25[${data.code}]\uFF0C\u8BF7\u91CD\u8BD5`,
                  call: () => {
                    location.reload();
                  }
                });
              } else {
                wxOpenId = data.data["openid"];
                avatar = data.data["iconurl"];
                nickname = data.data["name"];
              }
            }
          }
          if (!wxOpenId) {
            core_default.view.openHint({ text: "\u672A\u83B7\u53D6\u5230\u5FAE\u4FE1id", call: () => {
            } });
            return;
          }
          this.privacyBox.visible = false;
          HttpControl.inst.send({
            api: ApiHttp.login,
            data: {
              wxId: wxOpenId,
              avatar,
              nickname
            },
            error: (code, data) => {
              LocalStorageService_default.clear();
              this.loginBox.visible = true;
              this.loadBox.visible = false;
              this.canClick = true;
            }
          }).then((d) => {
            var _a;
            if ((_a = this.data) == null ? void 0 : _a.call)
              this.data.call(d);
            this.loginBox.visible = false;
            this.loadBox.visible = true;
            this.canClick = true;
            if (!UserInfo_default.isFirstTime) {
              AppCore.runAppFunction({
                uri: AppEventMap.registerSuccess,
                data: {
                  user_id: Number(d.userInfo.key)
                }
              });
            }
            AppCore.runAppFunction({
              uri: AppEventMap.loginSuccess,
              data: {
                user_id: Number(d.userInfo.key)
              },
              timestamp: Date.now()
            }).then((data) => {
              if (data) {
                if (data.code) {
                  core_default.view.openHint({
                    text: `\u767B\u5F55\u5931\u8D25[${data.code}]`,
                    call: () => {
                      location.reload();
                    }
                  });
                } else {
                  ConfigGame_default.channel = data.data["channel"];
                }
              }
            });
            AppCore.runAppFunction({
              uri: AppEventMap.eventCount,
              data: { type: "Signin" }
            });
          }).catch(() => {
            this.canClick = true;
          });
        }
      });
    }
    loadProgress(v) {
      this.loadBar.width = v * this.loadBarOldWidth;
    }
    onHdDisable() {
      EventGlobal_default.off(EventMaps.load_progress, this, this.loadProgress);
    }
  };

  // src/view/MailDescView.ts
  var MailDescView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.mailId = null;
    }
    onOpened(d) {
      const data = d.data;
      this.call = d.call;
      this.mailId = d.data.id;
      this.centerPanel.vScrollBarSkin = null;
      this.title.text = `${data.message}\u6F5C\u5165\u4E86\u4F60\u7684\u83DC\u5730\u91C7\u9752`;
      console.log(d);
      const itemsLost = [], itemsBack = [];
      let lostDiamond = 0, lostGold = 0;
      Tools.parseString(data.itemsLost).map((_d) => {
        _d = Tools.parseString(_d, ":");
        console.log(_d);
        if (_d[0] == 1) {
          lostDiamond += Number(_d[2]);
          return;
        }
        let has = false;
        itemsLost.forEach((d2) => {
          if (d2.id == _d[1]) {
            has = true;
          }
        });
        if (!has) {
          itemsLost.push({ id: _d[1], amount: Number(_d[2]) });
          return;
        }
        for (let x = 0; x < itemsLost.length; x++) {
          if (itemsLost[x].id == _d[1]) {
            itemsLost[x].amount += Number(_d[2]);
            break;
          }
        }
      });
      Tools.parseString(data.items).map((_d) => {
        _d = Tools.parseString(_d, ":");
        let has = false;
        itemsBack.forEach((d2) => {
          if (d2.id == _d[1]) {
            has = true;
          }
        });
        if (!has) {
          itemsBack.push({ id: _d[1], amount: Number(_d[2]) });
          return;
        }
        for (let x = 0; x < itemsBack.length; x++) {
          if (itemsBack[x].id == _d[1]) {
            itemsBack[x].amount += Number(_d[2]);
            break;
          }
        }
      });
      let yAdd = 0, _x = 0;
      for (let x = 0; x < itemsLost.length; x++) {
        let itemNode = this.item.create();
        if (_x > 2 && !yAdd) {
          yAdd++;
          _x = -1;
        }
        if (yAdd && _x > 2) {
          yAdd++;
          _x = -1;
        }
        itemNode.x = 230 + _x * 190;
        itemNode.y = 105 + yAdd * 95;
        _x++;
        let plant = TableAnalyze_default.table("plant").get(itemsLost[x].id);
        const icon = itemNode.getChildByName("icon");
        icon.skin = plant.icon;
        icon.scale(0.7, 0.7);
        icon.anchorX = 0.5;
        itemNode.getChildByName("lb").text = `x${itemsLost[x].amount}`;
        plant.gain.forEach((d2) => {
          if (d2.obj.id == ConfigGame_default.diamondId)
            return;
          lostGold += d2.count * itemsLost[x].amount;
        });
        this.centerPanel.addChild(itemNode);
      }
      let yAddBack = 0;
      _x = 0;
      for (let x = 0; x < itemsBack.length; x++) {
        let itemNode = this.item.create();
        if (_x > 1 && !yAddBack) {
          yAddBack++;
          _x = -2;
        }
        if (yAddBack && _x > 1) {
          yAddBack++;
          _x = -2;
        }
        itemNode.x = 420 + _x * 190;
        itemNode.y = 208 + yAdd * 95 + yAddBack * 95;
        _x++;
        let plant = TableAnalyze_default.table("plant").get(itemsBack[x].id);
        const icon = itemNode.getChildByName("icon");
        icon.skin = plant.icon;
        icon.scale(0.7, 0.7);
        icon.anchorX = 0.5;
        itemNode.getChildByName("lb").text = `x${itemsBack[x].amount}`;
        this.centerPanel.addChild(itemNode);
      }
      this.lostLb.y = 114;
      this.backLb.y = 218 + yAdd * 95;
      this.bottomLb.y = 301 + yAdd * 95 + yAddBack * 95;
      this.bottomLb.text = `\u5171\u8BA1\u635F\u5931\u4E86${lostGold}\u91D1\u5E01\uFF0C${lostDiamond}\u94BB\u77F3`;
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.MailDescView);
          break;
        case "delete":
          HttpControl.inst.send({
            api: ApiHttp.mailDelete,
            data: { id: this.mailId }
          }).then(() => {
            if (this.call) {
              this.call(this.mailId);
            }
            Laya.timer.frameOnce(1, this, () => {
              core_default.view.close(Res_default.views.MailDescView);
            });
          });
          break;
      }
    }
  };

  // src/view/MailView.ts
  var MailView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.list = null;
      this.empty_lb = null;
      this.listData = [];
    }
    onHdAwake() {
      this.list.vScrollBarSkin = null;
      this.list.renderHandler = new Laya.Handler(this, this.renderItem);
    }
    onOpened(list = []) {
      this.listData = list;
      this.updateListData();
    }
    updateListData() {
      this.list.array = this.listData.sort((a, b) => {
        return b.createTime - (b.read ? 1e6 : 0) - (a.createTime - (a.read ? 1e6 : 0));
      });
      this.empty_lb.visible = !this.list.array.length;
    }
    renderItem(cell, index) {
      const data = this.listData[index];
      cell.getChildByName("title").text = "\u7CFB\u7EDF\u90AE\u4EF6";
      cell.getChildByName("desc").text = `${data.message}\u6F5C\u5165\u83DC\u5730\u5077\u83DC,\u88AB\u72D7\u72D7\u53D1\u73B0\u5E76\u8FFD\u52A0\u56DE\u4E86~~`;
      cell.getChildByName("time").text = `${new Date(data.createTime).toLocaleString("zh-CN", { hour12: false })}`;
      cell.getChildByName("read_icon").visible = !data.read;
      cell.dataSource = data;
    }
    onClick(e) {
      if (e.target.name.indexOf("item") > -1) {
        HttpControl.inst.send({
          api: ApiHttp.mailRead,
          data: {
            id: e.target["dataSource"].id
          }
        }).then(() => {
          e.target["dataSource"].read = 1;
          this.list.refresh();
          core_default.view.open(Res_default.views.MailDescView, {
            parm: {
              data: e.target["dataSource"],
              call: (mailId) => {
                for (let x = 0; x < this.listData.length; x++) {
                  if (this.listData[x].id == mailId) {
                    this.listData.splice(x, 1);
                    break;
                  }
                }
                this.list.refresh();
              }
            }
          });
        });
      }
      switch (e.target.name) {
        case "close":
          ViewManager.inst.close(Res_default.views.MailView);
          break;
      }
    }
  };

  // src/components/FigureAni.ts
  var FigureAni = class extends Laya.Script {
    constructor() {
      super();
      this._x = "0";
      this._y = "0";
      this.delay = "0";
      this.time = "10000";
    }
    onEnable() {
      let node = this.owner;
      node.alpha = 0;
      let oldPos = { x: node.x, y: node.y };
      let delay = Number(this.delay);
      Laya.Tween.to(node, { alpha: 1 }, 600, null, null, delay);
      Laya.Tween.to(node, { x: this._x, y: this._y }, Number(this.time), null, Laya.Handler.create(this, () => {
        node.pos(oldPos.x, oldPos.y);
        this.onEnable();
      }), delay);
    }
    onDisable() {
    }
  };

  // src/view/OrderView.ts
  var OrderView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.orderList = null;
      this.btnLockRes = null;
      this.btnResCur = null;
      this.topDesc = null;
    }
    onOpened() {
      this.dataList = TableAnalyze_default.table("order").list;
      let orderOldLv = UserInfo_default.orderLevel || 0;
      this.dataList.sort((a, b) => {
        return a.id + (a.id <= orderOldLv ? 2e3 : 0) - (b.id + (b.id <= orderOldLv ? 2e3 : 0));
      });
      this.orderList.array = this.dataList;
      this.orderList.renderHandler = new Laya.Handler(this, this.renderList);
      this.orderList.vScrollBarSkin = null;
      let step = 0, reward;
      for (let x = 0; x < this.dataList.length; x++) {
        if (this.dataList[x].id >= UserInfo_default.orderLevel) {
          step++;
          if (this.dataList[x].extraReward) {
            reward = this.dataList[x].extraReward;
            break;
          }
        }
      }
      if (step) {
        let withdrawal = TableAnalyze_default.table("config").get("withdrawal").value;
        this.topDesc.getChildAt(0).text = step == 1 ? "\u5B8C\u6210\u5F53\u524D\u8BA2\u5355\u53EF\u83B7\u5F97\u7EA2\u5305" : `\u518D\u5B8C\u6210${step}\u5355\u53EF\u83B7\u5F97\u7EA2\u5305`;
        this.topDesc.getChildAt(1).text = `${(Number(withdrawal[2]) / Number(withdrawal[1]) * reward.count).toString().match(/^\d+(?:\.\d{0,2})?/)}`;
      }
    }
    renderList(cell, i) {
      var _a;
      let d = this.dataList[i], reward, rewardCount = 0, curCount = 0, maxCount = 0, progress = 0, rewardBox = cell.getChildByName("reward_box"), order_lv = cell.getChildByName("order_lv");
      order_lv.text = `${d.id}\u7EA7\u8BA2\u5355`;
      for (let x = 0; x < 4; x++) {
        let item = cell.getChildByName("item_" + x);
        if (d.condition[x]) {
          curCount = ((_a = WarehouseService_default.getOne(d.condition[x].plant.id)) == null ? void 0 : _a.count) || 0;
          maxCount = d.condition[x].count;
          if (curCount >= maxCount) {
            progress++;
          }
          item.getChildByName("icon").skin = d.condition[x].plant.icon;
          if (d.id < UserInfo_default.orderLevel + 1) {
            item.getChildByName("num").text = `${maxCount}/${maxCount}`;
            item.getChildByName("bar").width = 87;
          } else {
            item.getChildByName("num").text = `${curCount}/${maxCount}`;
            item.getChildByName("bar").width = 87 * (curCount / maxCount > 1 ? 1 : curCount / maxCount);
          }
          item.visible = true;
          d.condition[x].plant.gain.forEach((e) => {
            if (e.obj.id === ConfigGame_default.goldId) {
              if (!reward) {
                reward = e;
              }
              rewardCount += e.count * d.condition[x].count;
            }
          });
        } else {
          item.visible = false;
        }
      }
      let diamond = cell.getChildByName("reward_box_diamond");
      let btn = cell.getChildByName("btn"), finishIcon = cell.getChildByName("finish"), curIcon = cell.getChildByName("cur_icon"), lv_box = cell.getChildByName("lv_box");
      finishIcon.visible = false;
      curIcon.visible = false;
      diamond.visible = false;
      btn.visible = true;
      rewardBox.y = 57;
      lv_box.visible = true;
      order_lv.visible = true;
      if (d.id > UserInfo_default.orderLevel + 1) {
        btn.skin = this.btnLockRes;
        btn.active = false;
        if (d.extraReward) {
          btn.visible = false;
          diamond.getChildByName("icon").skin = d.extraReward.obj.icon;
          diamond.getChildByName("value").text = `+${d.extraReward.count}`;
          diamond.visible = true;
        } else {
          btn.visible = true;
        }
      } else {
        if (d.id == UserInfo_default.orderLevel + 1) {
          if (d.extraReward) {
            curIcon.visible = true;
            lv_box.visible = false;
            btn.visible = false;
            order_lv.visible = false;
            diamond.getChildByName("icon").skin = d.extraReward.obj.icon;
            diamond.getChildByName("value").text = `+${d.extraReward.count}`;
            diamond.visible = true;
          } else {
            btn.skin = this.btnResCur;
          }
        } else {
          console.log("\u5DF2\u5B8C\u6210");
          btn.active = false;
          btn.visible = false;
          finishIcon.visible = true;
          if (d.extraReward) {
            rewardBox.y = 57;
          } else {
            rewardBox.y = 100;
          }
        }
      }
      if (reward) {
        rewardBox.getChildByName("icon").skin = reward.obj.icon;
        rewardBox.getChildByName("value").text = `+${rewardCount + Math.round(rewardCount * d.commission)}`;
      }
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.OrderView);
          break;
      }
    }
  };

  // src/view/OverView.ts
  var OverView = class extends core_default.gameScript {
    onHdEnable() {
    }
    onOpened(data) {
      if (data == null ? void 0 : data.call) {
        data.call(this);
      }
    }
    close(call) {
      this.leftBox.x = -987;
      this.rightBox.x = 1025;
      this.leftBox.alpha = 0;
      this.rightBox.alpha = 0;
      Laya.Tween.to(this.leftBox, { x: 0, alpha: 1 }, 500);
      Laya.Tween.to(this.rightBox, { x: 0, alpha: 1 }, 500, null, Laya.Handler.create(this, () => {
        if (call)
          call();
      }));
    }
    open(call) {
      Laya.Tween.to(this.leftBox, { x: -987, alpha: 0 }, 500);
      Laya.Tween.to(this.rightBox, { x: 1025, alpha: 0 }, 500, null, Laya.Handler.create(this, () => {
        if (call)
          call();
        core_default.view.close(Res_default.views.OverView);
      }));
    }
  };

  // src/view/SettingView.ts
  var SettingView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.musicNode = null;
      this.soundNode = null;
      this.avatarNode = null;
      this.nickname = null;
    }
    onOpened() {
      this.musicChange();
      this.soundChange();
      this.userKey.text = `\u9080\u8BF7\u7801\uFF1A${UserInfo_default.key}`;
      core_default.observableProperty.watch(UserInfo_default, this).key("avatar", (e) => {
        if (e)
          this.avatarNode.skin = e;
      }).key("nickname", (e) => {
        this.nickname.text = e;
      });
    }
    onClick(e) {
      console.log(e.target.name);
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.SettingView);
          break;
        case "music":
          core_default.audio.playSound(Res_default.audios.button_click);
          core_default.audio.musicMuted = !core_default.audio.musicMuted;
          LocalStorageService_default.setJSON("music", core_default.audio.musicMuted);
          this.musicChange();
          break;
        case "sound":
          core_default.audio.playSound(Res_default.audios.button_click);
          core_default.audio.soundMuted = !core_default.audio.soundMuted;
          LocalStorageService_default.setJSON("sound", core_default.audio.soundMuted);
          this.soundChange();
          break;
        case "sign_out":
          core_default.view.openHint({
            text: "\u786E\u8BA4\u8981\u9000\u51FA\u767B\u5F55\uFF1F",
            call: () => {
              LocalStorageService_default.setJSON("isLogin", false);
              LocalStorageService_default.setJSON("token", null);
              HttpDataControl_default.loginOut();
              Laya.timer.frameOnce(1, this, () => {
                core_default.view.loginOut();
                core_default.view.open(Res_default.views.LoginView, {
                  parm: {
                    call: () => {
                      core_default.eventGlobal.event(EventMaps.login_game);
                    }
                  }
                });
              });
            },
            cancelCall: () => {
            }
          });
          break;
        case "user_agreement":
          AppCore.runAppFunction({ uri: AppEventMap.serviceAgreement, data: {} });
          break;
        case "privacy":
          AppCore.runAppFunction({ uri: AppEventMap.privacyAgreement, data: {} });
          break;
        case "about":
          core_default.view.open(Res_default.views.AboutView);
          break;
        case "copy_btn":
          this.copy();
          break;
      }
    }
    copy() {
      let a = document.createElement("input");
      document.body.appendChild(a);
      a.value = UserInfo_default.key;
      a.select();
      document.execCommand("copy");
      a.remove();
      core_default.view.openHint({ text: "\u590D\u5236\u6210\u529F", call: () => {
      } });
    }
    musicChange() {
      const box = this.musicNode.getChildByName("box");
      const icon = box.getChildByName("icon");
      let music = core_default.audio.musicMuted;
      console.log(music);
      icon.x = !music ? -14 : 91;
      icon.skin = !music ? `game/img_musicOnBtn.png` : "game/img_musicOffBtn.png";
      box.skin = !music ? `game/img_switchOn.png` : "game/img_swithOff.png";
    }
    soundChange() {
      const box = this.soundNode.getChildByName("box");
      const icon = box.getChildByName("icon");
      let sound = core_default.audio.soundMuted;
      icon.x = !sound ? -14 : 91;
      icon.skin = !sound ? `game/img_musicOnBtn.png` : "game/img_musicOffBtn.png";
      box.skin = !sound ? `game/img_switchOn.png` : "game/img_swithOff.png";
    }
  };

  // src/dataService/FeedService.ts
  var FeedService = class {
    constructor() {
      this.list = [];
    }
    init() {
      TableAnalyze_default.table("feed").list.forEach((d) => {
        this.list.push({
          base: d,
          lock: false
        });
      });
    }
    clear() {
      this.list.length = 0;
    }
  };
  var FeedService_default = new FeedService();

  // src/view/ShopView.ts
  var ShopView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.itemList = null;
      this.btnBoxTop = null;
      this.bottomBox = null;
      this.seedDesc = null;
      this.matureTime = null;
      this.matureGainBox = null;
      this.lockBtnBox = null;
      this.itemBuyBtn = null;
      this.feedBuyBtn = null;
      this.feedDesc = null;
      this.petIcon = null;
      this.petDesc = null;
      this.petName = null;
      this.vitalityMax = null;
      this.petBuyBtn = null;
      this.goWatch = null;
      this.goRest = null;
      this.diamondFont = null;
      this.priceList = null;
      this.proportion = null;
      this.priceDataList = [];
      this.priceSelectIndex = null;
      this.btnTopResList = [
        ["game/img_seedsNormal.png", "game/img_seedsSelected.png"],
        ["game/img_petNormal.png", "game/img_petSelected.png"],
        ["game/img_foodnNormal.png", "game/img_foodnSelected.png"],
        ["game/img_bankNormal.png", "game/img_bankSelected.png"]
      ];
      this.topBtnSelectIndex = 0;
      this.itemListSelectIndex = 0;
      this.itemSelectBg = ["game/img_petbagNormal.png", "game/img_petbagSelected.png"];
      this.selectPetIndex = 0;
      this.isFirst = true;
      this.canClick = true;
    }
    onHdAwake() {
      this.itemList.renderHandler = new Laya.Handler(this, this.updateItem);
      this.itemList.selectHandler = new Laya.Handler(this, this.onSelect);
      this.itemList.vScrollBarSkin = null;
      this.priceList.renderHandler = new Laya.Handler(this, this.updatePriceItem);
      this.priceList.selectHandler = new Laya.Handler(this, this.onPriceSelect);
      core_default.observableProperty.watch(UserInfo_default, this).key("diamond", (v) => {
        this.diamondFont.value = v;
        console.log(TableAnalyze_default.table("config"));
        let withdrawal = TableAnalyze_default.table("config").get("withdrawal").value;
        this.proportion.text = ` = \xA5${(Number(withdrawal[2]) / Number(withdrawal[1]) * v).toString().match(/^\d+(?:\.\d{0,2})?/)}\u5143`;
      });
    }
    onOpened(e) {
      this.data = e;
      this.topBtnSelectIndex = (e == null ? void 0 : e.id) || 0;
      this.priceDataList = TableAnalyze_default.table("config").get("withdrawal_times").value;
      this.updateTopBtnState();
    }
    onSelect(e) {
      this.itemListSelectIndex = e;
    }
    getDataList() {
      if (this.topBtnSelectIndex == 0) {
        return PlantService_default.list;
      }
      if (this.topBtnSelectIndex == 2) {
        if (!FeedService_default.list.length)
          FeedService_default.init();
        return FeedService_default.list.sort((a, b) => a.base.vitality - b.base.vitality);
      }
    }
    updateItem(cell, index) {
      let d = this.getDataList()[index];
      let priceBox = cell.getChildByName("hbox"), lockIcon = cell.getChildByName("lock_icon");
      if (!d)
        return console.warn("\u6570\u636E\u4E22\u5931");
      if (d.lock) {
        lockIcon.visible = true;
        lockIcon.active = true;
        priceBox.visible = false;
        priceBox.active = false;
      } else {
        lockIcon.visible = false;
        lockIcon.active = false;
        priceBox.visible = true;
        priceBox.active = true;
        let count = 0, icon = "";
        if (this.topBtnSelectIndex == 0) {
          count = d.base.seed_price.count;
          icon = d.base.seed_price.obj.icon;
        } else {
          count = d.base.cost.count;
          icon = d.base.cost.obj.icon;
        }
        priceBox.getChildByName("num").value = count + "";
        priceBox.getChildByName("gold_icon").skin = icon;
      }
      cell.getChildByName("icon").skin = d.base.icon;
      cell.getChildByName("name").text = d.base.name;
      if (index == this.itemListSelectIndex) {
        cell.skin = this.itemSelectBg[1];
        this.updateSelectDesc();
        if (!this.isFirst) {
          core_default.audio.playSound(Res_default.audios.button_click);
        }
        this.isFirst = false;
      } else {
        cell.skin = this.itemSelectBg[0];
      }
    }
    updateSelectDesc() {
      var _a, _b, _c;
      let d = this.getDataList()[this.itemListSelectIndex];
      if (this.topBtnSelectIndex === 2) {
        this.seedDesc.parent.visible = false;
        this.feedDesc.text = d.base.desc.replace("&", d.base.vitality + "");
        this.feedDesc.visible = true;
        let box2 = this.feedBuyBtn.getChildByName("box");
        box2.getChildByName("icon").skin = d.base.cost.obj.icon;
        box2.getChildByName("value").value = d.base.cost.count + "";
        return;
      }
      let base = d.base;
      this.seedDesc.parent.visible = true;
      this.feedDesc.visible = false;
      this.seedDesc.text = base.desc;
      this.matureTime.text = Tools.formatSeconds(base.mature_time);
      this.itemBuyBtn.visible = !d.lock;
      this.lockBtnBox.visible = d.lock;
      this.lockBtnBox.active = d.lock;
      let gainList = base.gain;
      for (let x = 0; x < 3; x++) {
        let itemBox = this.matureGainBox.getChildAt(x), icon = null, count = 0, gainData = gainList[x - 1];
        if (x === 0) {
          count = base.harvest;
          icon = base.icon;
        } else if (gainData) {
          icon = gainData.obj.icon;
          count = gainData.count * base.harvest;
        }
        itemBox.getChildByName("icon").skin = icon;
        itemBox.getChildByName("count").text = "x" + count;
      }
      let box = this.lockBtnBox.getChildByName("unlock_buy").getChildByName("box");
      box.getChildByName("icon").skin = (_b = (_a = base.unlock_cost) == null ? void 0 : _a.obj) == null ? void 0 : _b.icon;
      box.getChildByName("value").value = ((_c = base.unlock_cost) == null ? void 0 : _c.count) + "";
    }
    onClick(e) {
      var _a, _b;
      switch (e.target.name) {
        case "close":
          ViewManager.inst.close(Res_default.views.ShopView);
          break;
        case "seed":
        case "pet":
        case "feed":
        case "bank":
          core_default.audio.playSound(Res_default.audios.button_click);
          let topBtnIndex = this.btnBoxTop.getChildIndex(e.target);
          if (this.topBtnSelectIndex != topBtnIndex) {
            this.topBtnSelectIndex = Number(topBtnIndex);
            this.updateTopBtnState();
          }
          break;
        case "buy_btn":
          if (!this.canClick) {
            return;
          }
          let landId = (_b = (_a = this.data) == null ? void 0 : _a.parm) == null ? void 0 : _b.landId;
          if (!landId) {
            landId = MainView.inst.getEmptyLandId();
          }
          if (!landId) {
            core_default.view.openHint({ text: "\u6CA1\u6709\u7A7A\u7684\u571F\u5730\u54E6\uFF01", call: () => {
            } });
            return;
          }
          this.canClick = false;
          HttpControl.inst.send({
            api: ApiHttp.landSow,
            data: {
              landId,
              plantId: this.getDataList()[this.itemListSelectIndex].base.id,
              type: ConfigGame_default.ApiTypeDefault
            }
          }).then(() => {
            var _a2;
            ViewManager.inst.close(Res_default.views.ShopView);
            if ((_a2 = this.data) == null ? void 0 : _a2.call) {
              this.data.call(this.getDataList()[this.itemListSelectIndex]);
            } else {
              core_default.eventGlobal.event(EventMaps.plant_sow, [
                true,
                this.getDataList()[this.itemListSelectIndex]
              ]);
            }
          }).catch(() => {
            this.canClick = true;
          });
          break;
        case "unlock_buy":
        case "ad_unlock":
          if (!this.canClick) {
            return;
          }
          this.canClick = false;
          HttpControl.inst.send({
            api: ApiHttp.seedsUnlock,
            data: {
              plantId: this.getDataList()[this.itemListSelectIndex].base.id,
              type: e.target.name == "ad_unlock" ? ConfigGame_default.ApiTypeAD : ConfigGame_default.ApiTypeDefault
            }
          }).then(() => {
            PlantService_default.list[this.itemListSelectIndex].lock = false;
            this.itemList.changeItem(this.itemListSelectIndex, PlantService_default.list[this.itemListSelectIndex]);
            this.canClick = true;
            if (e.target.name == "ad_unlock") {
              core_default.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
            } else {
              AppCore.runAppFunction({
                uri: AppEventMap.eventCount,
                data: { type: "Freeunlock" }
              });
            }
          }).catch(() => {
            this.canClick = true;
          });
          break;
        case "left":
          this.selectPetIndex--;
          if (this.selectPetIndex < 0) {
            this.selectPetIndex = PetService_default.list.length - 1;
          }
          this.updatePet();
          break;
        case "right":
          this.selectPetIndex++;
          if (this.selectPetIndex >= PetService_default.list.length) {
            this.selectPetIndex = 0;
          }
          this.updatePet();
          break;
        case "pet_btn":
          this.petBuy();
          break;
        case "go_watch":
          this.petGoWatch(PetService_default.list[this.selectPetIndex].base.id);
          break;
        case "go_rest":
          this.petGoWatch(1001);
          break;
        case "feed_buy":
          this.feedBuy();
          break;
        case "withdraw_btn":
          this.withdraw();
          break;
        case "record_btn":
          this.openWithdrawRecord();
          break;
      }
    }
    openWithdrawRecord() {
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.withdrawRecord,
        data: {}
      }).then((d) => {
        this.canClick = true;
        core_default.view.open(Res_default.views.WithdrawRecordView, { parm: d });
      });
    }
    feedBuy() {
      let feed = this.getDataList()[this.itemListSelectIndex];
      if (!feed)
        return;
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.feedBuy,
        data: {
          feedId: feed.base.id,
          type: ConfigGame_default.ApiTypeDefault
        }
      }).then(() => {
        this.canClick = true;
        UserInfo_default.petVitality += feed.base.vitality;
        core_default.eventGlobal.event(EventMaps.play_get_reward, {
          node: this.feedBuyBtn,
          list: [
            {
              obj: feed.base,
              count: 1,
              posType: 3
            }
          ],
          notFly: true
        });
      }).catch(() => {
        this.canClick = true;
      });
    }
    petGoWatch(petId) {
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.petWear,
        data: {
          petId,
          type: ConfigGame_default.ApiTypeDefault
        }
      }).then(() => {
        UserInfo_default.warePetId = petId;
        this.canClick = true;
        this.updatePet();
      }).catch(() => {
        this.canClick = true;
      });
    }
    petBuy() {
      let { base } = PetService_default.list[this.selectPetIndex];
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.petBuy,
        data: {
          petId: base.id,
          type: ConfigGame_default.ApiTypeDefault
        }
      }).then(() => {
        this.canClick = true;
        PetService_default.list[this.selectPetIndex].lock = false;
        this.updatePet();
        if (!UserInfo_default.warePetId)
          UserInfo_default.warePetId = base.id;
        if (!UserInfo_default.petVitality) {
          UserInfo_default.petVitality = base.vitality_max;
          UserInfo_default.digestCountDown = ConfigGame_default.petDigestIntervalTime;
        }
      }).catch(() => {
        this.canClick = true;
      });
    }
    updateTopBtnState() {
      for (let x = 0; x < this.btnBoxTop.numChildren; x++) {
        let btn = this.btnBoxTop.getChildAt(x), lb = btn.getChildAt(0);
        if (x === this.topBtnSelectIndex) {
          btn.skin = "game/img-menuselected.png";
          lb.skin = this.btnTopResList[x][1];
        } else {
          btn.skin = "game/img-menunormal.png";
          lb.skin = this.btnTopResList[x][0];
        }
      }
      this.updateBottom();
    }
    updateBottom() {
      for (let x = 0; x < this.bottomBox.numChildren; x++) {
        this.updateCenterBoxState(x, false);
      }
      let itemBuyBox = this.itemBuyBtn.parent;
      switch (this.topBtnSelectIndex) {
        case 0:
          this.isFirst = true;
          this.updateCenterBoxState(0, true);
          this.resetPetOrFeedList();
          this.feedBuyBtn.visible = false;
          itemBuyBox.visible = true;
          itemBuyBox.active = true;
          break;
        case 1:
          this.updateCenterBoxState(1, true);
          this.updatePet();
          break;
        case 2:
          this.isFirst = true;
          this.updateCenterBoxState(0, true);
          this.resetPetOrFeedList();
          this.feedBuyBtn.visible = true;
          itemBuyBox.visible = false;
          itemBuyBox.active = false;
          break;
        case 3:
          this.updateCenterBoxState(2, true);
          this.priceList.array = this.priceDataList;
          break;
      }
    }
    updatePet() {
      if (!PetService_default.list.length)
        PetService_default.init([]);
      let pet = PetService_default.list[this.selectPetIndex];
      this.petIcon.source = `res/dog_${pet.base.id}.atlas`;
      this.petName.text = pet.base.name;
      this.petDesc.text = pet.base.desc;
      this.vitalityMax.value = pet.base.vitality_max + "";
      let btn_box = this.petBuyBtn.getChildByName("btn_box");
      btn_box.getChildByName("icon").skin = pet.base.cost.obj.icon;
      btn_box.getChildByName("value").value = pet.base.cost.count + "";
      let petBox = this.bottomBox.getChildAt(1), findBox = petBox.getChildByName("find_box"), back_box = petBox.getChildByName("back_box"), starIcon;
      for (let x = 0; x < 5; x++) {
        starIcon = findBox.getChildAt(x);
        starIcon.visible = x * 20 < pet.base.sensitive;
        starIcon.skin = x * 20 + 10 < pet.base.sensitive ? "game/img_star.png" : "game/img_halfstar.png";
        starIcon = back_box.getChildAt(x);
        starIcon.visible = x * 20 < pet.base.ability;
        starIcon.skin = x * 20 + 10 < pet.base.ability ? "game/img_star.png" : "game/img_halfstar.png";
      }
      if (pet.lock) {
        this.petBuyBtn.visible = true;
        this.goRest.visible = false;
        this.goWatch.visible = false;
      } else {
        if (UserInfo_default.warePetId == pet.base.id) {
          if (PetService_default.getUnlockLen() === 1 || UserInfo_default.warePetId === 1001) {
            this.goRest.disabled = true;
          } else {
            this.goRest.disabled = false;
          }
          this.goRest.visible = true;
          this.goWatch.visible = false;
        } else {
          this.goWatch.visible = true;
          this.goRest.visible = false;
        }
        this.petBuyBtn.visible = false;
      }
    }
    resetPetOrFeedList() {
      this.itemListSelectIndex = 0;
      this.itemList.selectedIndex = 0;
      this.itemList.array = this.getDataList();
      this.itemList.refresh();
    }
    updateCenterBoxState(i, show) {
      this.bottomBox.getChildAt(i).visible = show;
      this.bottomBox.getChildAt(i).active = show;
    }
    onPriceSelect(e) {
      this.priceSelectIndex = e;
    }
    withdraw() {
      if (this.priceSelectIndex == null) {
        core_default.view.openHint({ text: "\u9009\u62E9\u8981\u63D0\u73B0\u7684\u91D1\u989D", call: () => {
        } });
        return;
      }
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.withdraw,
        data: { id: this.priceSelectIndex }
      }).then((d) => {
        this.canClick = true;
        core_default.view.openHint({ text: "\u63D0\u73B0\u6210\u529F", call: () => {
        } });
        UserInfo_default.withdraw = d.list;
        UserInfo_default.diamond = d.diamond;
        this.priceList.refresh();
        AppCore.runAppFunction({
          uri: AppEventMap.eventCount,
          data: { type: "Withdrawal" }
        });
      }).catch(() => {
        this.canClick = true;
      });
    }
    updatePriceItem(cell, i) {
      let data = this.priceDataList[i];
      let userData = { id: 0, times: 0 };
      const userDataList = UserInfo_default.withdraw;
      for (let x = 0; x < userDataList.length; x++) {
        if (userDataList[x].id == i) {
          userData = userDataList[x];
          break;
        }
      }
      cell.getChildByName("value").text = data.price + "\u5143";
      if (data.times) {
        let times = data.times - userData.times;
        cell.getChildByName("times_box").visible = true;
        cell.getChildByName("times_box").getChildByName("times").text = `\u5269\u4F59${times < 0 ? 0 : times}\u6B21`;
        if (times <= 0) {
          cell.disabled = true;
        }
      } else {
        cell.getChildByName("times_box").visible = false;
      }
      if (this.priceList.selectedIndex === i) {
        cell.getChildByName("bg").skin = "game/img_priceselected.png";
      } else {
        cell.getChildByName("bg").skin = "game/img_pricenormal.png";
      }
    }
  };

  // src/view/SignInDescView.ts
  var SignInDescView = class extends core_default.gameScript {
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.SignInDescView);
          break;
      }
    }
  };

  // src/view/SignInView.ts
  var SignInView = class extends GameScript {
    onOpened() {
      this.signInList.array = TableAnalyze_default.table("signIn").list;
      this.signInList.vScrollBarSkin = null;
      this.signInList.renderHandler = new Laya.Handler(this, this.updateItem);
      this.updateProgress();
    }
    updateProgress() {
      let scale = UserInfo_default.speedUpTimes / ConfigGame_default.ADSpeedUpTimes;
      if (scale > 1)
        scale = 1;
      this.signInProgressBar.width = 977 * scale;
      this.signInProgressLb.text = UserInfo_default.signInDays + "";
      this.progressDesc.text = `\u4ECA\u65E5\u7B7E\u5230\u8FDB\u5EA6\uFF08\u4F7F\u7528${UserInfo_default.speedUpTimes}/${ConfigGame_default.ADSpeedUpTimes}\u6B21\u52A0\u901F\uFF09`;
      this.finishIcon.visible = UserInfo_default.speedUpTimes >= ConfigGame_default.ADSpeedUpTimes;
    }
    updateItem(cell, i) {
      const bar = cell.getChildByName("bar"), obj = TableAnalyze_default.table("signIn").list[i];
      let scale = UserInfo_default.signInDays / obj.days;
      if (scale > 1)
        scale = 1;
      bar.width = 502 * scale;
      const rewardBox = cell.getChildByName("reward_box");
      rewardBox.getChildByName("icon").skin = obj.reward.obj.icon;
      rewardBox.getChildByName("amount").text = `x${obj.reward.count}`;
      cell.getChildByName("sign_days").text = `\u7B7E\u5230${obj.days}\u5929`;
      let skin = "", btn = cell.getChildByName("get_btn");
      btn.dataSource = obj.id;
      if (obj.id > UserInfo_default.signInId) {
        btn.active = true;
        btn.visible = false;
        rewardBox.y = 103;
        skin = `game/img_done.png`;
        if (UserInfo_default.signInDays >= obj.days) {
          if (!UserInfo_default.signInId) {
            if (obj.id == TableAnalyze_default.table("signIn").list[0].id) {
              skin = `game/img_get.png`;
              btn.visible = true;
              rewardBox.y = 57;
            }
          } else {
            if (obj.id - UserInfo_default.signInId == 1) {
              skin = `game/img_get.png`;
              btn.visible = true;
              rewardBox.y = 57;
            }
          }
        }
      } else {
        skin = `game/img_received.png`;
        btn.active = false;
        btn.visible = true;
        rewardBox.y = 57;
      }
      btn.skin = skin;
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          ViewManager.inst.close(Res_default.views.SignInView);
          break;
        case "desc_btn":
          core_default.view.open(Res_default.views.SignInDescView);
          break;
        case "get_btn":
          const signInId = e.target["dataSource"];
          HttpControl.inst.send({
            api: ApiHttp.signInReward,
            data: { type: ConfigGame_default.ApiTypeAD, signInId }
          }).then(() => {
            UserInfo_default.signInId = signInId;
            this.signInList.refresh();
            let reward = TableAnalyze_default.table("signIn").get(signInId).reward;
            core_default.eventGlobal.event(EventMaps.play_get_reward, {
              node: e.target,
              list: [
                {
                  obj: reward.obj,
                  count: reward.count,
                  posType: reward.obj.id == ConfigGame_default.goldId ? 1 : 2
                }
              ]
            });
          });
          break;
      }
    }
  };

  // src/view/SpeedUpView.ts
  var SpeedUpView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.canClick = true;
    }
    onOpened(data) {
      this.call = data.call;
      let time = TableAnalyze_default.table("config").get("all_speed_up_time").value;
      this.timeLb.text = `${Math.ceil(time / 60)}\u5206\u949F`;
      this.timesLb.text = `\u4ECA\u65E5\u5269\u4F59${UserInfo_default.advertiseTimes}\u6B21`;
      if (UserInfo_default.advertiseTimes <= 0) {
        this.speedUpBtn.disabled = true;
      }
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.SpeedUpView);
          break;
        case "speed_up":
          if (!this.canClick)
            return;
          this.canClick = false;
          HttpControl.inst.send({
            api: ApiHttp.landSpeedUp,
            data: { type: ConfigGame_default.ApiTypeAD }
          }).then((d) => {
            UserInfo_default.speedUpTimes = d.speedUpTimes;
            UserInfo_default.advertiseTimes = d.advertiseTimes;
            if (UserInfo_default.speedUpTimes == ConfigGame_default.ADSpeedUpTimes) {
              UserInfo_default.signInDays++;
              AppCore.runAppFunction({
                uri: AppEventMap.eventCount,
                data: { type: "punchtheclock" }
              });
            }
            AppCore.runAppFunction({
              uri: AppEventMap.eventCount,
              data: { type: "Advertisingacceleration" }
            });
            core_default.view.close(Res_default.views.SpeedUpView);
            core_default.eventGlobal.event(EventMaps.land_speed_up);
            core_default.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
            if (this.call)
              this.call();
          });
          break;
      }
    }
  };

  // src/view/TaskView.ts
  var TaskView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.taskList = null;
      this.canClick = true;
    }
    onOpened() {
      this.updateTaskList();
      this.taskList.renderHandler = new Laya.Handler(this, this.itemRender);
      this.taskList.vScrollBarSkin = null;
    }
    updateTaskList() {
      this.taskList.array = TaskService_default.getList();
    }
    itemRender(cell, i) {
      let obj = TaskService_default.list[i].base;
      const task = TaskService_default.getTask(obj.id);
      cell.getChildByName("icon").skin = obj.icon;
      cell.getChildByName("title").text = obj.title;
      cell.getChildByName("desc").text = `${obj.desc}(${((task == null ? void 0 : task.times) > obj.times ? obj.times : task == null ? void 0 : task.times) || 0}/${obj.times})`;
      const rewardBox = cell.getChildByName("reward");
      rewardBox.getChildByName("icon").skin = obj.reward.obj.icon;
      rewardBox.getChildByName("amount").text = "x" + obj.reward.count;
      const btn = cell.getChildByName("go_run");
      const btnObj = {
        id: obj.id,
        ok: false
      };
      if (task == null ? void 0 : task.receive) {
        btn.skin = "game/img_tomarow.png";
        btn.active = false;
        btn.disabled = true;
      } else {
        btn.active = true;
        btn.disabled = false;
        if ((task == null ? void 0 : task.times) >= obj.times) {
          btn.skin = "game/img_get.png";
          btnObj.ok = true;
        } else {
          btn.skin = "game/img_done.png";
        }
      }
      btn.dataSource = btnObj;
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          ViewManager.inst.close(Res_default.views.TaskView);
          break;
        case "go_run":
          if (!this.canClick)
            return;
          let btnObj = e.target["dataSource"];
          this.canClick = false;
          if (btnObj.ok) {
            HttpControl.inst.send({
              api: ApiHttp.taskReward,
              data: { type: ConfigGame_default.ApiTypeDefault, taskId: btnObj.id }
            }).then(() => {
              const task = TaskService_default.getTask(btnObj.id);
              task.receive = 1;
              btnObj.ok = false;
              this.canClick = true;
              Laya.timer.frameOnce(1, this, () => {
                this.updateTaskList();
                this.taskList.refresh();
                core_default.eventGlobal.event(EventMaps.update_task);
              });
              core_default.eventGlobal.event(EventMaps.play_get_reward, {
                node: e.target,
                list: [
                  {
                    obj: task.base.reward.obj,
                    count: task.base.reward.count,
                    posType: 2
                  }
                ]
              });
            });
          } else {
            this.jump(btnObj.id, e.target);
          }
          break;
      }
    }
    jump(id, target) {
      return __async(this, null, function* () {
        let adData;
        switch (id) {
          case 1012:
          case 1001:
            adData = yield AppCore.runAppFunction({
              uri: AppEventMap.ad,
              data: {},
              timestamp: Date.now()
            });
            if (adData == null ? void 0 : adData.code) {
              core_default.view.openHint({ text: `\u5E7F\u544A\u64AD\u653E\u5931\u8D25[${adData.code}]`, call: () => {
              } });
              this.canClick = true;
              return;
            }
            HttpControl.inst.send({
              api: ApiHttp.ad,
              data: {}
            }).then(() => {
              core_default.eventGlobal.event(EventMaps.play_ad_get_reward, target);
              this.taskList.refresh();
              TaskService_default.taskAddTimes(1001);
              TaskService_default.taskAddTimes(1012);
              this.canClick = true;
            });
            break;
          case 1002:
            adData = yield AppCore.runAppFunction({
              uri: AppEventMap.ad,
              data: {},
              timestamp: Date.now()
            });
            if (adData == null ? void 0 : adData.code) {
              core_default.view.openHint({
                text: `${adData.data["message"]}[${adData.code}]`,
                call: () => {
                }
              });
              this.canClick = true;
              return;
            }
            HttpControl.inst.send({
              api: ApiHttp.ad,
              data: {
                taskId: 1002
              }
            }).then(() => {
              core_default.eventGlobal.event(EventMaps.play_ad_get_reward, target);
              this.taskList.refresh();
              TaskService_default.taskAddTimes(1001);
              TaskService_default.taskAddTimes(1012);
              TaskService_default.taskAddTimes(1002);
              this.canClick = true;
            });
            break;
          case 1003:
            core_default.view.close(Res_default.views.TaskView);
            break;
          case 1004:
            core_default.view.close(Res_default.views.TaskView);
            core_default.eventGlobal.event(EventMaps.open_friend);
            break;
          case 1005:
            core_default.view.close(Res_default.views.TaskView);
            core_default.view.open(Res_default.views.ShopView, { parm: { id: 1 } });
            break;
          case 1006:
            core_default.view.close(Res_default.views.TaskView);
            core_default.view.open(Res_default.views.ShopView, { parm: { id: 1 } });
            break;
          case 1007:
            core_default.view.close(Res_default.views.TaskView);
            core_default.eventGlobal.event(EventMaps.plant_sow);
            break;
          case 1008:
            core_default.view.close(Res_default.views.TaskView);
            core_default.view.open(Res_default.views.WarehouseView);
            break;
          case 1009:
            core_default.view.close(Res_default.views.TaskView);
            core_default.eventGlobal.event(EventMaps.open_friend);
            break;
          case 1010:
            core_default.view.close(Res_default.views.TaskView);
            HttpControl.inst.send({
              api: ApiHttp.friendInviteList,
              data: {}
            }).then((d) => {
              core_default.view.open(Res_default.views.FriendsRewardView, {
                parm: {
                  list: d.list,
                  call: () => {
                  }
                }
              });
            });
            break;
          case 1011:
            core_default.view.close(Res_default.views.TaskView);
            core_default.eventGlobal.event(EventMaps.plant_sow);
            break;
        }
      });
    }
  };

  // src/view/WarehouseView.ts
  var WarehouseView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.itemList = null;
      this.itemName = null;
      this.itemDesc = null;
      this.itemIcon = null;
      this.itemSellCountLb = null;
      this.itemSellBox = null;
      this.itemSellGold = null;
      this.itemSellDiamond = null;
      this.sellBtn = null;
      this.sellAdBtn = null;
      this.empty_lb = null;
      this.dataList = [];
      this.selectItemIndex = "0,0";
      this.selectItemSellCount = 0;
      this.unitPriceGold = 0;
      this.unitPriceDiamond = 0;
      this.canClick = true;
    }
    onOpened() {
      core_default.audio.playSound(Res_default.audios.dakaicangku);
      this.sellAdBtn.disabled = !UserInfo_default.advertiseTimes;
      this.sellAdBtn.active = Boolean(UserInfo_default.advertiseTimes);
    }
    onHdAwake() {
      this.itemList.renderHandler = new Laya.Handler(this, this.renderItemList);
      this.itemList.vScrollBarSkin = null;
      this.updateList();
      this.updateDesc(null);
      this.itemSellGold.removeSelf();
      this.itemSellDiamond.removeSelf();
      this.itemSellCountLb.on(Laya.Event.INPUT, this, () => {
        this.selectItemSellCount = Number(this.itemSellCountLb.text);
        if (this.selectItemSellCount < 1) {
          this.selectItemSellCount = 1;
          this.itemSellCountLb.text = "1";
        }
        if (this.selectItemSellCount > this.selectItemData.count)
          this.selectItemSellCount = this.selectItemData.count;
        this.updateSelectSellCount();
      });
    }
    updateList() {
      let i = 0, y = 0, hasSelect = false;
      WarehouseService_default.list.forEach((d) => {
        var _a;
        if (!this.dataList[y])
          this.dataList[y] = [];
        this.dataList[y].push(d);
        if (d.base.id == ((_a = this.selectItemData) == null ? void 0 : _a.base.id)) {
          hasSelect = true;
        }
        i++;
        if (i > 2) {
          i = 0;
          y++;
        }
      });
      if (!hasSelect && this.dataList.length) {
        this.selectItemIndex = "0,0";
        this.itemList.selectedIndex = 0;
      }
      this.itemList.array = this.dataList;
      this.empty_lb.visible = !this.dataList.length;
    }
    renderItemList(cell, i) {
      let data = this.dataList[i];
      for (let x = 0; x < 3; x++) {
        let item = cell.getChildByName(`item_${x}`);
        if (data[x]) {
          item.visible = true;
          item.dataSource = `${i},${x}`;
          let icon = item.getChildByName("icon");
          icon.skin = data[x].base.icon;
          item.getChildByName("name").text = `${data[x].base.name}_${data[x].count}`;
          if (i == this.itemList.selectedIndex && this.selectItemIndex == item.dataSource) {
            Laya.Tween.to(icon, { y: 0 }, 150, null, null, null, false);
            this.selectItemData = data[x];
            this.updateDesc(data[x]);
          } else {
            if (icon.y != 56)
              Laya.Tween.to(icon, { y: 56 }, 150);
          }
        } else {
          item.visible = false;
        }
      }
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.WarehouseView);
          break;
        case "item_0":
        case "item_1":
        case "item_2":
          this.selectItemIndex = e.target["dataSource"];
          this.itemList.refresh();
          break;
        case "add":
          this.selectItemSellCount++;
          if (this.selectItemSellCount > this.selectItemData.count)
            this.selectItemSellCount = this.selectItemData.count;
          this.updateSelectSellCount();
          break;
        case "reduce":
          this.selectItemSellCount--;
          if (this.selectItemSellCount < 1)
            this.selectItemSellCount = 1;
          this.updateSelectSellCount();
          break;
        case "sellBtnAd":
        case "sellBtn":
          if (!this.canClick) {
            return;
          } else {
            this.canClick = false;
            let btnName = e.target.name, target = e.target;
            HttpControl.inst.send({
              api: ApiHttp.warehouseSell,
              data: {
                id: this.selectItemData.base.id,
                amount: this.selectItemSellCount,
                type: btnName == "sellBtn" ? ConfigGame_default.ApiTypeDefault : ConfigGame_default.ApiTypeAD
              }
            }).then(() => {
              this.sellAdBtn.disabled = !UserInfo_default.advertiseTimes;
              this.sellAdBtn.active = Boolean(UserInfo_default.advertiseTimes);
              this.canClick = true;
              WarehouseService_default.reduceAmount(this.selectItemData.base.id, this.selectItemSellCount);
              this.dataList = [];
              this.updateList();
              this.itemList.refresh();
              if (!this.dataList.length) {
                this.updateDesc(null);
              }
              let rewardList = [];
              if (this.unitPriceGold) {
                rewardList.push({
                  obj: TableAnalyze_default.table("currency").get(ConfigGame_default.goldId),
                  count: this.selectItemSellCount * this.unitPriceGold * (btnName == "sellBtnAd" ? 2 : 1),
                  posType: 1
                });
              }
              if (this.unitPriceDiamond) {
                rewardList.push({
                  obj: TableAnalyze_default.table("currency").get(ConfigGame_default.diamondId),
                  count: this.selectItemSellCount * this.unitPriceDiamond * (btnName == "sellBtnAd" ? 2 : 1),
                  posType: 2
                });
              }
              if (btnName == "sellBtnAd") {
                core_default.eventGlobal.event(EventMaps.play_ad_get_reward, target);
                AppCore.runAppFunction({
                  uri: AppEventMap.eventCount,
                  data: { type: "Doublesale" }
                });
              }
              core_default.eventGlobal.event(EventMaps.play_get_reward, {
                node: this.sellBtn,
                list: rewardList,
                callBack: () => {
                }
              });
            }).catch(() => {
              this.canClick = true;
            });
          }
          break;
      }
    }
    updateDesc(d) {
      if (!d) {
        this.itemIcon.parent.visible = false;
        return;
      }
      this.itemIcon.parent.visible = true;
      this.itemSellDiamond.removeSelf();
      this.itemSellGold.removeSelf();
      this.itemIcon.skin = d.base.icon;
      this.itemName.text = d.base.name;
      this.itemDesc.text = d.base.desc;
      let priceGold, priceDiamond;
      for (let x = 0; x < d.base.gain.length; x++) {
        if (!d.base.gain[x].count)
          continue;
        if (d.base.gain[x].obj.id == ConfigGame_default.goldId) {
          priceGold = d.base.gain[x];
          this.itemSellGold.getChildByName("icon").skin = d.base.gain[x].obj.icon;
          this.itemSellBox.addChild(this.itemSellGold);
        } else {
          priceDiamond = d.base.gain[x];
          this.itemSellDiamond.getChildByName("icon").skin = d.base.gain[x].obj.icon;
          this.itemSellBox.addChild(this.itemSellDiamond);
        }
      }
      this.selectItemSellCount = d.count;
      this.unitPriceGold = (priceGold == null ? void 0 : priceGold.count) || 0;
      this.unitPriceDiamond = (priceDiamond == null ? void 0 : priceDiamond.count) || 0;
      this.updateSelectSellCount();
    }
    updateSelectSellCount() {
      this.itemSellCountLb.text = this.selectItemSellCount + "";
      this.itemSellGold.getChildByName("price").text = this.selectItemSellCount * this.unitPriceGold + "";
      this.itemSellDiamond.getChildByName("price").text = this.selectItemSellCount * this.unitPriceDiamond + "";
    }
  };

  // src/view/WithdrawRecordView.ts
  var WithdrawRecordView = class extends core_default.gameScript {
    onOpened(e) {
      e.sort((a, b) => b.time - a.time);
      this.dataList = e;
      this.list.array = e;
      this.list.renderHandler = new Laya.Handler(this, this.itemRender);
      this.list.vScrollBarSkin = null;
      this.owner.getChildByName("empty_lb").visible = !e.length;
    }
    itemRender(cell, i) {
      const d = this.dataList[i];
      cell.getChildByName("reward_box").getChildByName("amount").text = `-${d.diamond}`;
      cell.getChildByName("time").text = `${new Date(d.time).toLocaleString("zh-CN", { hour12: false })}`;
      const state = cell.getChildByName("state_box").getChildByName("state");
      let withdrawal = TableAnalyze_default.table("config").get("withdrawal").value;
      cell.getChildByName("state_box").getChildByName("price").text = `${(Number(withdrawal[2]) / Number(withdrawal[1]) * d.diamond).toString().match(/^\d+(?:\.\d{0,2})?/)}\u5143`;
      state.text = `${d.state ? "\u5BA1\u6838\u4E2D" : "\u5DF2\u5230\u8D26"}`;
      state.color = d.state ? "#E93636" : "#5A3F2A";
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.WithdrawRecordView);
          break;
      }
    }
  };

  // src/GameConfig.ts
  var GameConfig = class {
    constructor() {
    }
    static init() {
      var reg = Laya.ClassUtils.regClass;
      reg("view/AboutView.ts", AboutView);
      reg("components/Button.ts", Button);
      reg("components/ViewShowAni.ts", ViewShowAni);
      reg("view/AddLandView.ts", AddLandView);
      reg("view/BuyVitalityView.ts", BuyVitalityView);
      reg("view/FieldLevelUpView.ts", FieldLevelUpView);
      reg("view/FriendsDescView.ts", FriendsDescView);
      reg("view/FriendsRewardView.ts", FriendsRewardView);
      reg("view/FriendsView.ts", FriendsView);
      reg("view/GuideView.ts", GuideView);
      reg("view/HintView.ts", HintView);
      reg("view/LoginView.ts", LoginView);
      reg("view/MailDescView.ts", MailDescView);
      reg("view/MailView.ts", MailView);
      reg("view/MainView.ts", MainView);
      reg("components/FigureAni.ts", FigureAni);
      reg("components/FieldComponent.ts", FieldComponent);
      reg("view/OrderView.ts", OrderView);
      reg("view/OverView.ts", OverView);
      reg("view/SettingView.ts", SettingView);
      reg("view/ShopView.ts", ShopView);
      reg("view/SignInDescView.ts", SignInDescView);
      reg("view/SignInView.ts", SignInView);
      reg("view/SpeedUpView.ts", SpeedUpView);
      reg("view/TaskView.ts", TaskView);
      reg("view/WarehouseView.ts", WarehouseView);
      reg("view/WithdrawRecordView.ts", WithdrawRecordView);
    }
  };
  GameConfig.width = 1080;
  GameConfig.height = 1920;
  GameConfig.scaleMode = "fixedwidth";
  GameConfig.screenMode = "none";
  GameConfig.alignV = "middle";
  GameConfig.alignH = "center";
  GameConfig.startScene = "scenes/views/MainView.scene";
  GameConfig.sceneRoot = "";
  GameConfig.debug = false;
  GameConfig.stat = false;
  GameConfig.physicsDebug = false;
  GameConfig.exportSceneToJson = true;
  GameConfig.init();

  // src/Main.ts
  var Main = class {
    constructor() {
      if (navigator.userAgent.indexOf("iPhone") > -1) {
        Config.useWebGL2 = false;
      }
      if (window["Laya3D"])
        Laya3D.init(GameConfig.width, GameConfig.height);
      else
        Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
      Laya["Physics"] && Laya["Physics"].enable();
      Laya["DebugPanel"] && Laya["DebugPanel"].enable();
      Laya.stage.scaleMode = GameConfig.scaleMode;
      Laya.stage.screenMode = GameConfig.screenMode;
      Laya.stage.alignV = GameConfig.alignV;
      Laya.stage.alignH = GameConfig.alignH;
      Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
      if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
        Laya.enableDebugPanel();
      if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
        Laya["PhysicsDebugDraw"].enable();
      if (GameConfig.stat)
        Laya.Stat.show();
      Laya.alertGlobalError(true);
      Laya.stage.bgColor = "#ffffff";
      BuildType.debug == "debug" && GameConfig.stat && Laya.Stat.show();
      Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    }
    onVersionLoaded() {
      Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    }
    onConfigLoaded() {
      return __async(this, null, function* () {
        Config["customRenderID"] = [];
        LocalStorageService_default.init();
        HttpControl.inst.init(ConfigGame_default.baseUrl);
        core_default.eventGlobal.on(EventMaps.login_game, this, this.loginGame);
        Laya.SoundManager.useAudioMusic = false;
        AppCore.listenAppFunction();
        yield new Promise((resolve) => {
          ViewManager.inst.open(Res_default.views.LoginView, {
            showLoad: false,
            parm: {
              call: (d) => {
                this.initGameData(d);
                resolve(null);
              }
            },
            complete: (e) => {
              Laya.timer.frameOnce(1, this, () => {
                AppCore.runAppFunction({ uri: AppEventMap.closeImage, data: {} });
              });
            }
          });
        });
        this.loginGame();
      });
    }
    loginGame() {
      Laya.loader.load(Res_default.scenes, Laya.Handler.create(this, () => {
        console.log("ok");
        core_default.audio.playMusic(Res_default.audios.BGM, 0);
        Laya.timer.frameOnce(1, this, () => {
          Laya.View.hideLoadingPage(1e3);
          ViewManager.inst.open(GameConfig.startScene);
        });
      }), Laya.Handler.create(this, (e) => {
        EventGlobal_default.event(EventMaps.load_progress, e);
      }, null, false));
    }
    initGameData(d) {
    }
  };
  Main.customRenderID = [];
  new Main();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Db25maWdHYW1lLnRzIiwgIi4uLy4uL3NyYy9jb3JlL0FwcC50cyIsICIuLi8uLi9zcmMvY29yZS9BdWRpb0NvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvcmUvaW5kZXgudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQWJvdXRWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVG9vbHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9UYWJsZUFuYWx5emUudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9Vc2VySW5mby50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL05ldE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9IdHRwRGF0YUNvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9IdHRwQ29udHJvbC50cyIsICIuLi8uLi9zcmMvdmlldy9BZGRMYW5kVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9CdXlWaXRhbGl0eVZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRmllbGRMZXZlbFVwVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GcmllbmRzRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9FcnJvckNvZGUudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvR3VpZGVWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0hpbnRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0xvZ2luVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9NYWlsRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpbFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmlndXJlQW5pLnRzIiwgIi4uLy4uL3NyYy92aWV3L09yZGVyVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9PdmVyVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TZXR0aW5nVmlldy50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvRmVlZFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2hvcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2lnbkluRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2lnbkluVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TcGVlZFVwVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9UYXNrVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9XYXJlaG91c2VWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1dpdGhkcmF3UmVjb3JkVmlldy50cyIsICIuLi8uLi9zcmMvR2FtZUNvbmZpZy50cyIsICIuLi8uLi9zcmMvTWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNlx1NTQwRFx1NzlGMFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gRXZlbnRNYXBzIHtcclxuICAgIC8qKiBsb2FkIFx1NzU0Q1x1OTc2Mlx1OEZEQlx1ODg0Q1x1NjZGNFx1NjVCMCAqL1xyXG4gICAgbG9hZF9wcm9ncmVzcyA9IFwibG9hZF9wcm9ncmVzc1wiLFxyXG5cclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTU3MUZcdTU3MzAgKi9cclxuICAgIHVwZGF0ZV9maWVsZCA9IFwidXBkYXRlX2ZpZWxkXCIsXHJcblxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NEUzQlx1OTg3NVx1OEJBMlx1NTM1NVx1NjU3MFx1NjM2RSAqL1xyXG4gICAgdXBkYXRlX09yZGVyID0gXCJ1cGRhdGVfT3JkZXJcIixcclxuXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MkEwXHU5MDFGICovXHJcbiAgICBsYW5kX3NwZWVkX3VwID0gXCJsYW5kX3NwZWVkX3VwXCIsXHJcblxyXG4gICAgLyoqIFx1OEZEQlx1NTE2NVx1NkUzOFx1NjIwRiAqL1xyXG4gICAgbG9naW5fZ2FtZSA9IFwibG9naW5fZ2FtZVwiLFxyXG4gICAgLyoqIFx1OTAwMFx1NTFGQVx1NkUzOFx1NjIwRiAqL1xyXG4gICAgbG9naW5fb3V0ID0gXCJsb2dpbl9vdXRcIixcclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTRFRkJcdTUyQTEgKi9cclxuICAgIHVwZGF0ZV90YXNrID0gXCJ1cGRhdGVfdGFza1wiLFxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NjVCMFx1NjI0Qlx1NEVGQlx1NTJBMVx1NjI0QiAqL1xyXG4gICAgdXBkYXRlX2d1aWRfaGFuZCA9IFwidXBkYXRlX2d1aWRfaGFuZFwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHU1MkE4XHU3NTNCXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgIHtcclxuICAgICAgICAvL1x1OTcwMFx1ODk4MVx1OThERVx1OTFEMVx1NUUwMVx1NzY4NFx1NTNDMlx1ODAwM1x1ODI4Mlx1NzBCOVxyXG4gICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgLy9cdTg5ODFcdTk4REVcdTc2ODRcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1RTI2aWNvblx1NzY4NFx1NjU3MFx1NjM2RVxyXG4gICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksXHJcbiAgICAgICAgICAgICAgICAvL1x1NjU3MFx1OTFDRlxyXG4gICAgICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgLy9cdTg5ODFcdTk4REVcdTUzQkJcdTc2ODRcdTRGNERcdTdGNkUgMSBcdTkxRDFcdTVFMDEgMiBcdTk0QkJcdTc3RjNcclxuICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfVxyXG4gICAgICovXHJcbiAgICBwbGF5X2dldF9yZXdhcmQgPSBcInBsYXlfZ2V0X3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1NzcwQlx1NUU3Rlx1NTQ0QVx1NjRBRFx1NjUzRVx1NTk1Nlx1NTJCMVx1ODNCN1x1ODNCN1x1NUY5N1x1NTJBOFx1NzUzQiAgXHU0RjIwXHU1MTY1XHU4MjgyXHU3MEI5ICovXHJcbiAgICBwbGF5X2FkX2dldF9yZXdhcmQgPSBcInBsYXlfYWRfZ2V0X3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1NTNCQlx1NTk3RFx1NTNDQlx1NUJCNiAqL1xyXG4gICAgZ29fZnJpZW5kX2hvbWUgPSBcImdvX2ZyaWVuZF9ob21lXCIsXHJcbiAgICAvKiogXHU1NkRFXHU1QkI2ICovXHJcbiAgICBnb19ob21lID0gXCJnb19ob21lXCIsXHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU1OTdEXHU1M0NCXHU3NTRDXHU5NzYyICovXHJcbiAgICBvcGVuX2ZyaWVuZCA9IFwib3Blbl9mcmllbmRcIixcclxuICAgIC8qKiBcdTc5Q0RcdTgzRENcdTRFM0JcdTc1NENcdTk3NjJcdThGREJcdTUxNjUgKi9cclxuICAgIHBsYW50X3NvdyA9IFwicGxhbnRfc293XCIsXHJcbiAgICAvKiogXHU2REZCXHU1MkEwXHU5NEJCXHU3N0YzXHU2MjE2XHU2NjJGXHU5MUQxXHU1RTAxICovXHJcbiAgICBhZGRfZGlhbW9uZF9nb2xkID0gXCJhZGRfZGlhbW9uZF9nb2xkXCIsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTRFMEVhcHBcdTRFQTRcdTRFOTJcdTRFOEJcdTRFRjZcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFwcEV2ZW50TWFwIHtcclxuICAgIC8qKiBcdTc3MEJcdTVFN0ZcdTU0NEEgKi9cclxuICAgIGFkID0gXCJhZFwiLFxyXG4gICAgLyoqIFx1NTE3M1x1OTVFRFx1NUI4OVx1NTM1M1x1NTQyRlx1NTJBOFx1OTA2RVx1N0Y2OSAqL1xyXG4gICAgY2xvc2VJbWFnZSA9IFwiY2xvc2VJbWFnZVwiLFxyXG4gICAgLyoqIFx1NUZBRVx1NEZFMVx1NzY3Qlx1NUY1NSAqL1xyXG4gICAgd3hMb2dpbiA9IFwid3hMb2dpblwiLFxyXG4gICAgLyoqIFx1NUZBRVx1NEZFMVx1NzY3Qlx1NUY1NVx1NjIxMFx1NTI5RiAqL1xyXG4gICAgd3hMb2dpblN1Y2Nlc3MgPSBcInd4TG9naW5TdWNjZXNzXCIsXHJcbiAgICAvKiogXHU1RkFFXHU0RkUxXHU1MjA2XHU0RUFCICovXHJcbiAgICB3eFNoYXJlID0gXCJ3eFNoYXJlXCIsXHJcbiAgICAvKiogXHU1M0NCXHU3NkRGXHU0RThCXHU0RUY2XHU3RURGXHU4QkExIFx1NjU3MFx1NjM2RVx1NjgzQ1x1NUYwRiB7dHlwZTpcdTVCRjlcdTVFOTRcdTg5ODFcdTdFREZcdThCQTFcdTc2ODRcdTcwQjl9ICovXHJcbiAgICBldmVudENvdW50ID0gXCJldmVudENvdW50XCIsXHJcbiAgICAvKiogXHU5NjkwXHU3OUMxXHU2NTNGXHU3QjU2ICovXHJcbiAgICBwcml2YWN5QWdyZWVtZW50ID0gXCJwcml2YWN5QWdyZWVtZW50XCIsXHJcbiAgICAvKiogXHU2NzBEXHU1MkExXHU1MzRGXHU4QkFFICovXHJcbiAgICBzZXJ2aWNlQWdyZWVtZW50ID0gXCJzZXJ2aWNlQWdyZWVtZW50XCIsXHJcbiAgICAvKiogXHU2Q0U4XHU1MThDXHU2MjEwXHU1MjlGICovXHJcbiAgICByZWdpc3RlclN1Y2Nlc3MgPSBcInJlZ2lzdGVyU3VjY2Vzc1wiLFxyXG4gICAgLyoqIFx1NzY3Qlx1NUY1NVx1NjIxMFx1NTI5RiAqL1xyXG4gICAgbG9naW5TdWNjZXNzID0gXCJMb2dpblN1Y2Nlc3NcIixcclxuICAgIC8qKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNTggKi9cclxuICAgIGNsZWFyQ2FjaGUgPSBcImNsZWFyQ2FjaGVcIixcclxuICAgIC8qKiBcdTYyNTNcdTVGMDBcdTkwNkVcdTdGNjlcdTgwQ0NcdTY2NkYgKi9cclxuICAgIHNob3dCYWNrZ3JvdW5kID0gXCJzaG93QmFja2dyb3VuZFwiLFxyXG59XHJcbiIsICIvL1x1NEVFM1x1NzgwMVx1NzUxRlx1NjIxMFx1RkYwQ1x1NEUwRFx1ODk4MVx1NjI0Qlx1NTJBOFx1NEZFRVx1NjUzOVxuXG4vKipcbiAqIFx1NzU0Q1x1OTc2Mlx1NTIxN1x1ODg2OFxuICovXG4gZXhwb3J0IGVudW0gdmlld3MgXG4gICAge1xuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0Fib3V0Vmlldy5zY2VuZSAqL1xuICAgICAgICBBYm91dFZpZXcgPSBcInNjZW5lcy92aWV3cy9BYm91dFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmUgKi9cbiAgICAgICAgQWRkTGFuZFZpZXcgPSBcInNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9CdXlWaXRhbGl0eVZpZXcuc2NlbmUgKi9cbiAgICAgICAgQnV5Vml0YWxpdHlWaWV3ID0gXCJzY2VuZXMvdmlld3MvQnV5Vml0YWxpdHlWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgRmllbGRMZXZlbFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lICovXG4gICAgICAgIEZyaWVuZHNEZXNjVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNEZXNjVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZSAqL1xuICAgICAgICBGcmllbmRzUmV3YXJkVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNSZXdhcmRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lICovXG4gICAgICAgIEZyaWVuZHNWaWV3ID0gXCJzY2VuZXMvdmlld3MvRnJpZW5kc1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvR3VpZGVWaWV3LnNjZW5lICovXG4gICAgICAgIEd1aWRlVmlldyA9IFwic2NlbmVzL3ZpZXdzL0d1aWRlVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9IaW50Vmlldy5zY2VuZSAqL1xuICAgICAgICBIaW50VmlldyA9IFwic2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZSAqL1xuICAgICAgICBMb2dpblZpZXcgPSBcInNjZW5lcy92aWV3cy9Mb2dpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpbERlc2NWaWV3LnNjZW5lICovXG4gICAgICAgIE1haWxEZXNjVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haWxEZXNjVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZSAqL1xuICAgICAgICBNYWlsVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lICovXG4gICAgICAgIE1haW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lICovXG4gICAgICAgIE9yZGVyVmlldyA9IFwic2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9PdmVyVmlldy5zY2VuZSAqL1xuICAgICAgICBPdmVyVmlldyA9IFwic2NlbmVzL3ZpZXdzL092ZXJWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NldHRpbmdWaWV3LnNjZW5lICovXG4gICAgICAgIFNldHRpbmdWaWV3ID0gXCJzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2hvcFZpZXcgPSBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaWduSW5EZXNjVmlldy5zY2VuZSAqL1xuICAgICAgICBTaWduSW5EZXNjVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NpZ25JbkRlc2NWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2lnbkluVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU3BlZWRVcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgU3BlZWRVcFZpZXcgPSBcInNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZSAqL1xuICAgICAgICBUYXNrVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1dhcmVob3VzZVZpZXcuc2NlbmUgKi9cbiAgICAgICAgV2FyZWhvdXNlVmlldyA9IFwic2NlbmVzL3ZpZXdzL1dhcmVob3VzZVZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvV2l0aGRyYXdSZWNvcmRWaWV3LnNjZW5lICovXG4gICAgICAgIFdpdGhkcmF3UmVjb3JkVmlldyA9IFwic2NlbmVzL3ZpZXdzL1dpdGhkcmF3UmVjb3JkVmlldy5zY2VuZVwiLCBcbiAgICB9XG5cbiBleHBvcnQgZW51bSBhdWRpb3MgXG4gICAge1xuICAgICAgICAvKiogYXVkaW8vemhvbmd6aGkubXAzICovXG4gICAgICAgIHpob25nemhpID0gXCJyZXMvYXVkaW8vemhvbmd6aGkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vdHVkaXNoZW5namkubXAzICovXG4gICAgICAgIHR1ZGlzaGVuZ2ppID0gXCJyZXMvYXVkaW8vdHVkaXNoZW5namkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vc2hvdWNhaS5tcDMgKi9cbiAgICAgICAgc2hvdWNhaSA9IFwicmVzL2F1ZGlvL3Nob3VjYWkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZ291amlhb3NoZW5nLm1wMyAqL1xuICAgICAgICBnb3VqaWFvc2hlbmcgPSBcInJlcy9hdWRpby9nb3VqaWFvc2hlbmcubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZGFrYWljYW5na3UubXAzICovXG4gICAgICAgIGRha2FpY2FuZ2t1ID0gXCJyZXMvYXVkaW8vZGFrYWljYW5na3UubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vYnV0dG9uX2NsaWNrLm1wMyAqL1xuICAgICAgICBidXR0b25fY2xpY2sgPSBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vQkdNLm1wMyAqL1xuICAgICAgICBCR00gPSBcInJlcy9hdWRpby9CR00ubXAzXCIsIFxuICAgIH1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9XaXRoZHJhd1JlY29yZFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1dhcmVob3VzZVZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2lnbkluRGVzY1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvT3ZlclZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWlsRGVzY1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0d1aWRlVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRnJpZW5kc1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNSZXdhcmRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GcmllbmRzRGVzY1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0J1eVZpdGFsaXR5Vmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0Fib3V0Vmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL01haWxJdGVtLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0dldFJld2FyZC5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9GbG9hdFJld2FyZEljb24ucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvRmllbGRQcmVmYWIucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9jb21wb25lbnRzL0J1dHRvbi5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL2FuaS9sYW5kVXAuYW5pXCIsXG4gICAgICAgICAgICBcInJlcy9sb2FkaW5nQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfd29vZHRpdGxlLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlSG91c2VCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZWJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3NoZWxmLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmdNYWluLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfbGFuZEJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob3VzZXRvcC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob25nYmFvYmFuLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmczLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcyLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2Zhcm1sYW5kTG9nby5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmU1LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmU0LnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlNC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTMuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTIucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUyLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAxMC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDEwLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwOS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA5LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwOC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA4LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA3LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA2LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA1LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA0LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwMy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDAzLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwMi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDAyLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDAxLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvdnMudnNcIixcbiAgICAgICAgICAgIFwicmVzL3NoYWRlci9wcy5mc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vemhvbmd6aGkubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby90dWRpc2hlbmdqaS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3Nob3VjYWkubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9nb3VqaWFvc2hlbmcubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9kYWthaWNhbmdrdS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2J1dHRvbl9jbGljay5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL0JHTS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BsYW50X2ljb24ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BldF9mZWVkLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9tYWluX3NjZW5lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbG9hZC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2xvYWQuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLmF0bGFzXCJdO1xuICAgIFxuXG4vKipcbiAqIFx1NjI0MFx1NjcwOVx1OEQ0NFx1NkU5MFxuICovXG5jb25zdCBSZXMgPSB7XG4gICAgdmlld3M6IHZpZXdzLFxuICAgIHNjZW5lczogc2NlbmVzLFxuICAgIGF1ZGlvczogYXVkaW9zLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzO1xuIiwgIi8qKlxyXG4gKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjZcclxuICovXHJcbmNvbnN0IEV2ZW50R2xvYmFsID0gbmV3IExheWEuRXZlbnREaXNwYXRjaGVyKCk7XHJcblxyXG4vKipcclxuICogXHU1MEE4XHU1QjU4XHU3Njg0XHU5NzAwXHU4OTgxXHU3RUQxXHU1QjlBXHU4QkEyXHU5NjA1XHU0RThCXHU0RUY2XHU3Njg0XHU3QzdCXHU3Njg0XHU1MzlGXHU1NzhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRXZlbnRDbGFzczogTWFwPGFueSwgeyBrZXk6IHN0cmluZzsgZm46IEZ1bmN0aW9uIH1bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50T24obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcclxuICAgICAgICBpZiAoIUV2ZW50Q2xhc3MuZ2V0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgRXZlbnRDbGFzcy5zZXQodGFyZ2V0LCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEV2ZW50Q2xhc3MuZ2V0KHRhcmdldCkucHVzaCh7IGtleTogbmFtZSwgZm46IGRlc2NyaXB0b3IudmFsdWUgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogXHU1MEE4XHU1QjU4XHU3Njg0XHU5NzAwXHU4OTgxXHU3RUQxXHU1QjlBXHU1QzVFXHU2MDI3XHU2N0U1XHU2MjdFXHU3RUQxXHU1QjlBXHU1NDBEXHU3OUYwXHU3Njg0XHU3QzdCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQmluZE5hbWVDbGFzczogTWFwPGFueSwgc3RyaW5nW10+ID0gbmV3IE1hcCgpO1xyXG5leHBvcnQgZnVuY3Rpb24gRmluZEJ5TmFtZSh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xyXG4gICAgLy8gICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcblxyXG4gICAgaWYgKCFCaW5kTmFtZUNsYXNzLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgQmluZE5hbWVDbGFzcy5zZXQodGFyZ2V0LCBbXSk7XHJcbiAgICB9XHJcbiAgICBCaW5kTmFtZUNsYXNzLmdldCh0YXJnZXQpLnB1c2gocHJvcGVydHlLZXkpO1xyXG4gICAgLy8gfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRHbG9iYWw7XHJcbiIsICJjb25zdCBjYWxsZXJzOiBNYXA8YW55LCBGdW5jdGlvbltdPiA9IG5ldyBNYXAoKTtcclxuXHJcbmNsYXNzIE9ic2VydmFibGVDb250cm9sPGNhbGwgZXh0ZW5kcyBMYXlhLlNjcmlwdD4ge1xyXG4gICAgcHJpdmF0ZSBrZXlFdmVudHM6IE1hcDxhbnksIE1hcDxzdHJpbmcsIEZ1bmN0aW9uW10+PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzZEMVx1NTQyQ1x1NUM1RVx1NjAyN1x1NTAzQ1x1NTNEOFx1NTMxNlxyXG4gICAgICogIFtcdTU3MjhcdTc1NENcdTk3NjJkZXN0cm95XHU3Njg0XHU2NUY2XHU1MDE5XHU0RjFBXHU4MUVBXHU1REYxXHU2Q0U4XHU5NTAwXHU3NkQxXHU1NDJDXVxyXG4gICAgICogQHBhcmFtIE9iaiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTc2ODRcdTVCRjlcdThDNjFcclxuICAgICAqL1xyXG4gICAgd2F0Y2g8VCBleHRlbmRzIHt9PihPYmo6IFQsIGNhbGxlcjogY2FsbCkge1xyXG4gICAgICAgIGlmICghY2FsbGVycy5oYXMoY2FsbGVyKSkge1xyXG4gICAgICAgICAgICBjYWxsZXJzLnNldChjYWxsZXIsIFtdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBrZXlFdmVudCA9IHRoaXMua2V5RXZlbnRzO1xyXG4gICAgICAgIGlmICgha2V5RXZlbnQuaGFzKE9iaikpIHtcclxuICAgICAgICAgICAga2V5RXZlbnQuc2V0KE9iaiwgbmV3IE1hcCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlx1NzY4NFx1NUM1RVx1NjAyN1x1NEU4Qlx1NEVGNlxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkgXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QzVFXHU2MDI3XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGwgXHU1NkRFXHU4QzAzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qga2V5QmluZCA9IDxLZXkgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEtleSAmIHN0cmluZywgY2FsbDogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IF9vYmogPSBrZXlFdmVudC5nZXQoT2JqKTtcclxuICAgICAgICAgICAgaWYgKCFfb2JqLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBfb2JqLnNldChrZXksIFtdKTtcclxuICAgICAgICAgICAgICAgIGlmIChPYmpbXCIjXCIgKyBrZXldID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9ialtcIiNcIiArIGtleV0gPSBPYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbXCIjXCIgKyBrZXldID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9vYmouZ2V0KGtleSkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tcIiNcIiArIGtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2FsbC5iaW5kKGNhbGwpO1xyXG4gICAgICAgICAgICBfb2JqLmdldChrZXkpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcikucHVzaChjYWxsKTtcclxuICAgICAgICAgICAgY2FsbChPYmpba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5MDFBXHU4RkM3XHU0RjIwXHU1MTY1XHU3Njg0Y2FsbGVyXHU1MjIwXHU5NjY0XHU1RjUzXHU1MjREXHU3RUQxXHU1QjlBXHU3Njg0XHU2MjQwXHU2NzA5XHU3Njg0XHU0RThCXHU0RUY2IFx1NjIxNlx1NjMwN1x1NUI5QVx1ODlFM1x1NTFCM1x1NkEyMVx1NEUyQVx1NUJGOVx1OEM2MVx1OERERlx1NUY1M1x1NTI0RGNhbGxlclx1N0VEMVx1NUI5QVx1NzY4NFx1NzZEMVx1NTQyQ1xyXG4gICAgICogQHBhcmFtIGNhbGxlciBcdTc2RDFcdTU0MkNcdTY1RjZcdTdFRDFcdTVCOUFcdTc2ODRcdTU3M0FcdTY2NkZcdTVCRjlcdThDNjFcclxuICAgICAqIEBwYXJhbSBvYmogXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUJ5Q2FsbGVyKGNhbGxlcjogY2FsbCwgb2JqOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgY2FsbGVycy5nZXQoY2FsbGVyKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZ2V0KG9iaikuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhPZiA9IGV2LmluZGV4T2YoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGsuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZiA+IC0xKSBldi5zcGxpY2UoaW5kZXhPZiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU3RUQxXHU1QjlBXHU1M0VGXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgT2JzZXJ2YWJsZUNvbnRyb2woKTtcclxuIiwgImltcG9ydCBFdmVudEdsb2JhbCwgeyBCaW5kTmFtZUNsYXNzLCBFdmVudENsYXNzIH0gZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JpcHQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vRXZlbnRPblx1ODhDNVx1OTk3MFx1NTY2OFx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QVxyXG4gICAgICAgIGxldCBiaW5kRXZlbnQgPSBFdmVudENsYXNzLmdldCh0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgYmluZEV2ZW50Py5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIEV2ZW50R2xvYmFsLm9uKGQua2V5LCB0aGlzLCBkLmZuKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZEF3YWtlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkF3YWtlKCkge1xyXG4gICAgICAgIC8vXHU3RUQ5XHU4OEM1XHU5OTcwXHU1NjY4XHU4QkIwXHU1RjU1XHU3Njg0XHU1QzVFXHU2MDI3XHVGRjBDXHU2N0U1XHU2MjdFXHU4MjgyXHU3MEI5XHJcbiAgICAgICAgQmluZE5hbWVDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpPy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXNbZV0gPSB0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub25IZEF3YWtlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTc1NENcdTk3NjJcdTRGMjBcdTUxNjVcdTUzQzJcdTY1NzBcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICogQHBhcmFtIGVcclxuICAgICAqL1xyXG4gICAgb25PcGVuZWQoZSkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NkZDMFx1NkQzQlx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkI2NFx1NjVGNlx1NjI0MFx1NjcwOVx1ODI4Mlx1NzBCOVx1NTQ4Q1x1N0VDNFx1NEVGNlx1NTc0N1x1NURGMlx1NTIxQlx1NUVGQVx1NUI4Q1x1NkJENVx1RkYwQ1x1NkIyMVx1NjVCOVx1NkNENVx1NTNFQVx1NjI2N1x1ODg0Q1x1NEUwMFx1NkIyMVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRBd2FrZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRFbmFibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMub25IZEVuYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU1NDJGXHU3NTI4XHU1NDBFXHU2MjY3XHU4ODRDXHVGRjBDXHU2QkQ0XHU1OTgyXHU4MjgyXHU3MEI5XHU4OEFCXHU2REZCXHU1MkEwXHU1MjMwXHU4MjFFXHU1M0YwXHU1NDBFXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZEVuYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRTdGFydFxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9uSGRTdGFydCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdCMkNcdTRFMDBcdTZCMjFcdTYyNjdcdTg4NEN1cGRhdGVcdTRFNEJcdTUyNERcdTYyNjdcdTg4NENcdUZGMENcdTUzRUFcdTRGMUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkU3RhcnQoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkVXBkYXRlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkJDRlx1NUUyN1x1NjZGNFx1NjVCMFx1NjVGNlx1NjI2N1x1ODg0Q1x1RkYwQ1x1NUMzRFx1OTFDRlx1NEUwRFx1ODk4MVx1NTcyOFx1OEZEOVx1OTFDQ1x1NTE5OVx1NTkyN1x1NUZBQVx1NzNBRlx1OTAzQlx1OEY5MVx1NjIxNlx1ODAwNVx1NEY3Rlx1NzUyOGdldENvbXBvbmVudFx1NjVCOVx1NkNENVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRVcGRhdGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRGlzYWJsZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMub25IZERpc2FibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1Nzk4MVx1NzUyOFx1NjVGNlx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1NEVDRVx1ODI4Mlx1NzBCOVx1NEVDRVx1ODIxRVx1NTNGMFx1NzlGQlx1OTY2NFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGREaXNhYmxlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERlc3Ryb3lcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vZmZBbGxDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkhkRGVzdHJveSgpO1xyXG4gICAgICAgIExheWEudGltZXIub25jZSgxLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU2RTA1XHU5NjY0XHU4RERGXHU1RjUzXHU1MjREXHU3QzdCXHU3RUQxXHU1QjlBXHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU4OUMyXHU1QkRGXHU2NUI5XHU2Q0Q1XHJcbiAgICAgICAgICAgIE9ic2VydmFibGVQcm9wZXJ0eS5yZW1vdmVCeUNhbGxlcih0aGlzKTtcclxuICAgICAgICAgICAgLy9cdTk1MDBcdTZCQzFcdTY1RjZcdTZFMDVcdTk2NjRcdTYyNDBcdTY3MDlcdTc2ODRcdTVDNUVcdTYwMjdcdTVGMTVcdTc1MjhcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXlzW3hdXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI0Qlx1NTJBOFx1OEMwM1x1NzUyOFx1ODI4Mlx1NzBCOVx1OTUwMFx1NkJDMVx1NjVGNlx1NjI2N1x1ODg0Q1xyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGREZXN0cm95KCkge31cclxuXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqIFx1NzU0Q1x1OTc2Mlx1NjI1M1x1NUYwMFx1NEVFNVx1NTQwRVx1NUUyNlx1NTE2NVx1NzY4NFx1NTNDMlx1NjU3MFxyXG4gICAgLy8gICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAvLyAgKi9cclxuICAgIC8vIG9uT3BlbmVkKGQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygxMTEpO1xyXG4gICAgLy8gfVxyXG59XHJcbiIsICJpbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5cclxuLy9jbGFzcyBWaWV3U2hvd0FuaSBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdTaG93QW5pIGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YmcsIHRpcHM6XCJcdTgwQ0NcdTY2NkZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgYmc6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvbnRlbnQsIHRpcHM6XCJcdTUxODVcdTVCQjlcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgY29udGVudDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFuaVR5cGUsdGlwczpcIlx1NTJBOFx1NzUzQlx1N0M3Qlx1NTc4QlwiLHR5cGU6RWRpdE9wdGlvbixvcHRpb246XCJib3R0b21Ub1Nob3csc2NhbGVTaG93XCJ9Ki9cclxuICAgIC8vIFx1OEZENFx1NTZERVx1NUI1N1x1N0IyNlx1NEUzMlxyXG4gICAgYW5pVHlwZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgdHdlZW5MaXN0OiBMYXlhLlR3ZWVuW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb09wZW4oKSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiAgXHU1MTczXHU5NUVEXHU2MjEwXHU1MjlGXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvQ2xvc2UoKSB7fVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuXHJcbiAgICAgICAgdGhpcy5iZy5hbHBoYSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnLFxyXG4gICAgICAgICAgICAgICAgeyBhbHBoYTogMC43NSB9LFxyXG4gICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYW5pVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic2NhbGVTaG93XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4uZnJvbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLCB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsIHNjYWxlWDogMCwgc2NhbGVZOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmJvdHRvbSA9IC10aGlzLmNvbnRlbnQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmNpcmNPdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVZpZXcoKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMub3duZXIgYXMgTGF5YS5WaWV3O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYW5pVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNjYWxlU2hvd1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogTGF5YS5zdGFnZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWDogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWTogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5IYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBib3R0b206IC10aGlzLmNvbnRlbnQuaGVpZ2h0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTVCOUVcdTRGOEJcdTUyMTdcdTg4NjhcclxuICovXHJcbmNvbnN0IGluc3RhbmNlTGlzdDogTWFwPG51bWJlciwgeyBuZXcgKCk6IHZvaWQgfT4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcclxuICogXHU1QjlFXHU0RjhCXHU3Njg0aWRcclxuICovXHJcbmxldCBpbnN0YW5jZUlkOiBudW1iZXIgPSAxMDA7XHJcblxyXG4vKipcclxuICogXHU1MzU1XHU0RjhCXHU4OEM1XHU5OTcwXHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSW5zdGFuY2UodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWluc3RhbmNlTGlzdC5oYXModGFyZ2V0W1wiI2luc3RhbmNlSWRcIl0pKSB7XHJcbiAgICAgICAgaW5zdGFuY2VJZCsrO1xyXG4gICAgICAgIHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdID0gaW5zdGFuY2VJZDtcclxuICAgICAgICBpbnN0YW5jZUxpc3Quc2V0KGluc3RhbmNlSWQsIG5ldyB0YXJnZXQoKSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXRba2V5XSA9IGluc3RhbmNlTGlzdC5nZXQoaW5zdGFuY2VJZCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgRmxvYXRWaWV3U2hvd0FuaSBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBIaW50Vmlld0RhdGEgfSBmcm9tIFwic3JjL3ZpZXcvSGludFZpZXdcIjtcclxuaW1wb3J0IE92ZXJWaWV3IGZyb20gXCJzcmMvdmlldy9PdmVyVmlld1wiO1xyXG5pbXBvcnQgUmVzLCB7IHZpZXdzIH0gZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFZpZXdTaG93QW5pIGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4vSW5zdGFuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTYyNTNcdTVGMDBcdTc1NENcdTk3NjJcdTk3MDBcdTg5ODFcdTVFMjZcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcclxuICovXHJcbmludGVyZmFjZSBWaWV3T3BlblBhcm0ge1xyXG4gICAgLyoqIFx1NjYzRVx1NzkzQWxvYWRcdTc1NENcdTk3NjIgKi9cclxuICAgIHNob3dMb2FkPzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0ICovXHJcbiAgICBzaG93TG9hZERlbGF5PzogbnVtYmVyO1xyXG4gICAgLyoqIFx1OTY5MFx1ODVDRmxvYWRcdTc1NENcdTk3NjJcdTVFRjZcdThGREZcdTY1RjZcdTk1RjQgXHU5RUQ4XHU4QkE0MCAqL1xyXG4gICAgaGlkZUxvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTUxNzNcdTk1RURcdTUxNzZcdTRFRDZcdTU3M0FcdTY2NkZcdUZGMENcdTlFRDhcdThCQTRcdTRFM0F0cnVlXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5XHVGRjBDXHUzMDEwXHU2Q0U4XHU2MTBGXHUzMDExXHU4OEFCXHU1MTczXHU5NUVEXHU3Njg0XHU1NzNBXHU2NjZGXHVGRjBDXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU4QkJFXHU3RjZFYXV0b0Rlc3Ryb3lBdFJlbW92ZWQ9dHJ1ZVx1RkYwQ1x1NTIxOVx1OEQ0NFx1NkU5MFx1NTNFRlx1ODBGRFx1NEUwRFx1ODBGRFx1ODhBQlx1NTZERVx1NjUzNlx1RkYwQ1x1OTcwMFx1ODk4MVx1ODFFQVx1NURGMVx1NjI0Qlx1NTJBOFx1NTZERVx1NjUzNlxyXG4gICAgICogdG9kbyBcdTczQjBcdTU3MjhcdThGRDlcdTRFMkFcdThDMDNcdTc1MjhcdTc2ODRcdTY2MkZcdTVGMTVcdTY0Q0VcdTgxRUFcdTVFMjZcdTc2ODRcdTY1QjlcdTZDRDVcdUZGMENcdTZDQTFcdTY3MDlcdThENzBcdThGRDlcdTkxQ0NcdTc2ODRcdTdGMTNcdTVCNThcdUZGMENcdTUzRUZcdTgwRkRcdTRGMUFcdTY3MDlcdTk1RUVcdTk4OThcdUZGMENcdTU0MEVcdTY3MUZcdTRGMThcdTUzMTZcclxuICAgICAqIFx1NzNCMFx1NTcyOFx1NTE2OFx1NjYyRmZhbHNlIFx1NTQwRVx1NjcxRlx1NjcwOVx1OTcwMFx1ODk4MVx1NTE4RFx1NEYxOFx1NTMxNlx1OEZEOVx1NEUyQVx1NEUxQ1x1ODk3Rlx1RkYwQ1x1NEUwRFx1ODBGRFx1NTE3M1x1OTVFRFx1NTE3Nlx1NUI4M1x1NjI0MFx1NjcwOVx1NzU0Q1x1OTc2Mlx1OEZEOFx1NjcyQVx1NUI5RVx1NzNCMFxyXG4gICAgICovXHJcbiAgICBjbG9zZU90aGVyPzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTYyNTNcdTVGMDBcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdUZGMENcdTRGMUFcdTRGMjBcdTkwMTJcdTdFRDlvbk9wZW5lZFx1NjVCOVx1NkNENVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcGFybT86IGFueTtcclxuICAgIC8qKiAgXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIGNvbXBsZXRlPzogRnVuY3Rpb247XHJcbiAgICAvKiogXHU1MkEwXHU4RjdEXHU4RkRCXHU1RUE2XHU1NkRFXHU4QzAzXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBwcm9ncmVzcz86IEhhbmRsZXI7XHJcbn1cclxuXHJcbmNvbnN0IHZpZXdNYXBzOiB7IHVybDogc3RyaW5nOyB2aWV3OiBMYXlhLlZpZXcgfVtdID0gW107XHJcblxyXG4vKipcclxuICogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmlld01hbmFnZXIge1xyXG4gICAgQEluc3RhbmNlXHJcbiAgICBzdGF0aWMgaW5zdDogVmlld01hbmFnZXI7XHJcblxyXG4gICAgbG9naW5PdXQoKSB7XHJcbiAgICAgICAgdmlld01hcHMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICB2LnZpZXcuZ2V0Q29tcG9uZW50cyhMYXlhLlNjcmlwdCkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9cdTU2REVcdTU5MzRcdTg5ODFcdTRGMThcdTUzMTZcdTRFMDBcdTRFMEJcdTUxNzZcdTVCODNcdTc1NENcdTk3NjJcdTc2ODRcdTUxNzNcdTk1RURcdUZGMENcdThGRDlcdTkxQ0NcdTY2MkZcdTRFMERcdTY2MkZcdTY3MDlcdTU0MENcdTY4MzdcdTc2ODRcdTk1RUVcdTk4OThcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuY2xlYXJBbGwoZSk7XHJcbiAgICAgICAgICAgICAgICBlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHYudmlldy51cmwsIHRydWUpO1xyXG4gICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU0RTAwXHU0RTJBXHU3NTRDXHU5NzYyXHJcbiAgICAgKiBAcGFyYW0gdXJsIFx1NzU0Q1x1OTc2Mlx1NTczMFx1NTc0MCBSZXMudmlld3NcdTkxQ0NcdTc2ODRcclxuICAgICAqIEBwYXJhbSBkYXRhIFx1NTNDMlx1NjU3MFxyXG4gICAgICovXHJcbiAgICBvcGVuKFxyXG4gICAgICAgIHVybDogdmlld3MsXHJcbiAgICAgICAgZGF0YTogVmlld09wZW5QYXJtID0ge1xyXG4gICAgICAgICAgICBjbG9zZU90aGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93TG9hZERlbGF5OiAxMDAsXHJcbiAgICAgICAgICAgIGhpZGVMb2FkRGVsYXk6IDAsXHJcbiAgICAgICAgfVxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibWlzcyBwYXRoIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEuc2hvd0xvYWQpIHtcclxuICAgICAgICAgICAgTGF5YS5WaWV3LnNob3dMb2FkaW5nUGFnZShudWxsLCBkYXRhLnNob3dMb2FkRGVsYXkpO1xyXG4gICAgICAgICAgICBpZiAodXJsICE9PSBSZXMudmlld3MuTG9naW5WaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZShkYXRhLmhpZGVMb2FkRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGEuY2xvc2VPdGhlciA9IGZhbHNlO1xyXG4gICAgICAgIExheWEuVmlldy5vcGVuKFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEuY2xvc2VPdGhlcixcclxuICAgICAgICAgICAgZGF0YS5wYXJtLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChlOiBMYXlhLlZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgIT0gUmVzLnZpZXdzLkxvZ2luVmlldykgdmlld01hcHMucHVzaCh7IHVybDogdXJsLCB2aWV3OiBlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb25MaXN0ID0gZS5nZXRDb21wb25lbnRzKExheWEuU2NyaXB0KTtcclxuICAgICAgICAgICAgICAgIGlmIChjb25MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uTGlzdC5mb3JFYWNoKChlKSA9PiBlLmVuYWJsZWQgJiYgZS5vbk9wZW5lZCAmJiBlLm9uT3BlbmVkKGRhdGEucGFybSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YS5jb21wbGV0ZSAmJiBkYXRhLmNvbXBsZXRlKGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgYCVjID09PiBvcGVuICVjJHt1cmwubWF0Y2goL1xcdysoPz1cXC4pLylbMF19IGAsXHJcbiAgICAgICAgICAgICAgICAgICAgYGNvbG9yOiM3ZWQ2ZGY7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgICAgICAgICAgYGNvbG9yOiMyMmE2YjM7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYXRhLnByb2dyZXNzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTE3M1x1OTVFRFx1ODlDNlx1NTZGRVxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gYWxsIFx1NTQwQ1x1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2Mlx1ODhBQiBcdTU5MUFcdTZCMjFcdTYyNTNcdTVGMDBcdUZGMENcdTUxNjhcdTUyMjBcdTk2NjRcdTc1MjhcdThGRDlcdTRFMkFcclxuICAgICAqIEBwYXJhbSBkZXN0cm95IFx1OTUwMFx1NkJDMSAgIFRPRE9cdUZGMDhcdTlFRDhcdThCQTRcdTRGMUFcdTk1MDBcdTZCQzFcdTYyNDBcdTY3MDlcdTVCNTBcdTgyODJcdTcwQjlcdUZGMENcdTY3MkFcdTZENEJcdThCRDVcdTY2MkZcdTU0MjZcdTY3MDlcdTk1RUVcdTk4OThcdUZGMDlcclxuICAgICAqL1xyXG4gICAgYXN5bmMgY2xvc2UoXHJcbiAgICAgICAgdXJsOiB2aWV3cyxcclxuICAgICAgICBhbGw6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBkZXN0cm95OiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgYW5pQ29tOiB0eXBlb2YgVmlld1Nob3dBbmkgfCB0eXBlb2YgRmxvYXRWaWV3U2hvd0FuaSA9IFZpZXdTaG93QW5pXHJcbiAgICApIHtcclxuICAgICAgICAvL1RPRE8gXHU4RkQ5XHU5MUNDXHU3M0IwXHU1NzI4XHU1MTY4XHU5MEU4XHU3NTI4ZGVzdHJveSBcdTVGMTVcdTY0Q0VyZW1vdmVcdTU5N0RcdTUwQ0ZcdTY3MDlcdTcwQjlcdTk1RUVcdTk4OThcdUZGMENcdTUxOERcdTkwMUFcdThGQzd2aWV3Lm9wZW5cdTRGMUFcdTkxQ0RcdTY1QjBcdTY3ODRcdTVFRkFcdTdFQzRcdTRFRjZcclxuICAgICAgICBkZXN0cm95ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHZBbmk6IFZpZXdTaG93QW5pO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAodXJsID09PSB2aWV3TWFwc1t4XS51cmwpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gdmlld01hcHNbeF07XHJcbiAgICAgICAgICAgICAgICB2aWV3TWFwcy5zcGxpY2UoeCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdkFuaSA9IHYudmlldy5nZXRDb21wb25lbnQoYW5pQ29tIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodkFuaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZBbmkuY2xvc2VWaWV3KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3RvZG9cdTk3MDBcdTg5ODFcdTRGMThcdTUzMTZcdUZGMENcdTc1NENcdTk3NjJcdTc2ODRtYXBcdTk3MDBcdTg5ODFcdTY1NzRcdTc0MDZcdTYyMTBcdUZGMENcdTUxNjhcdTVDNEZcdTU0OENcdTVGMzlcdTdBOTdcdTc2ODRcdTUzM0FcdTUyMkJcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT09IFJlcy52aWV3cy5IaW50VmlldykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghYWxsKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cdTRGRERcdThCQzFcdTU5ODJcdTY3OUNcdTU3M0FcdTY2NkZcdTVCOENcdTUxNjhcdTZDQTFcdTY3MDlcdTc1NENcdTk3NjJcdTg4QUJcdTYyNTNcdTVGMDBcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTVGQzVcdTYyNTNcdTVGMDBcdTRFM0JcdTU3M0FcdTY2NkZcclxuICAgICAgICBpZiAoIXZpZXdNYXBzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjbG9zZUxlbiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHZpZXdNYXBzLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XHJcbiAgICAgICAgICAgIGlmICghdmlld01hcHNbeF0udmlldy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTGVuKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZUxlbiA9PT0gdmlld01hcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZpZXdNYXBzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuTWFpblZpZXcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codmlld01hcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VWaWV3TG9nKHVybDogc3RyaW5nLCBkZXN0cm95OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYCVjIDw9PSAke2Rlc3Ryb3kgPyBcImRlc3Ryb3lcIiA6IFwiZGlzYWJsZVwifSAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2ZmNzk3OTtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNlYjRkNGI7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5IaW50KGRhdGE6IEhpbnRWaWV3RGF0YSkge1xyXG4gICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuSGludFZpZXcsIHsgcGFybTogZGF0YSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1OTY2NFx1N0YxM1x1NUI1OFx1NzU0Q1x1OTc2MlxyXG4gICAgICovXHJcbiAgICBjbGVhclZpZXdNYXBzKCkge1xyXG4gICAgICAgIHZpZXdNYXBzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvdmVyVmlld0NvbTogT3ZlclZpZXc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTUxNzNcdTk1RURcdThGQzdcdTVFQTZcdTc1NENcdTk3NjJcclxuICAgICAqL1xyXG4gICAgc2V0T3ZlclZpZXcob3BlbjogYm9vbGVhbiwgY2FsbD86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKFJlcy52aWV3cy5PdmVyVmlldywge1xyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICh2OiBPdmVyVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJWaWV3Q29tID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi5jbG9zZShjYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3ZlclZpZXdDb20pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlclZpZXdDb20ub3BlbihjYWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiZXhwb3J0IGNvbnN0IGVudW0gQnVpbGRUeXBlIHtcclxuICAgIC8qKiBcdTZENEJcdThCRDVcdTczQUZcdTU4ODMgKi9cclxuICAgIHRlc3QgPSBcInRlc3RcIixcclxuICAgIC8qKiBcdTdFQkZcdTRFMEFcdTczQUZcdTU4ODMgKi9cclxuICAgIG9ubGluZSA9IFwib25saW5lXCIsXHJcbiAgICAvKiogXHU2NzJDXHU1NzMwXHU1RjAwXHU1M0QxICovXHJcbiAgICBkZWJ1ZyA9IFwiZGVidWdcIixcclxufVxyXG5cclxuY29uc29sZS5sb2coQlVJTERfVFlQRSk7XHJcblxyXG5sZXQgYmFzZVVybCA9IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMDAwXCI7XHJcbnN3aXRjaCAoQlVJTERfVFlQRSkge1xyXG4gICAgY2FzZSBCdWlsZFR5cGUuZGVidWc6XHJcbiAgICAgICAgYmFzZVVybCA9IFwiLy8xOTIuMTY4LjEwMS41MDozMDAwXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEJ1aWxkVHlwZS5vbmxpbmU6XHJcbiAgICAgICAgYmFzZVVybCA9IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMTAwXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTZFMzhcdTYyMEZcdTkxNERcdTdGNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjNpZCAqL1xyXG4gICAgZGlhbW9uZElkOiAxMDAxLFxyXG4gICAgLyoqIFx1OTFEMVx1NUUwMWlkICovXHJcbiAgICBnb2xkSWQ6IDEwMDIsXHJcbiAgICAvKiogXHU3MkQ3XHU3MkQ3XHU2RDg4XHU1MzE2XHU5OERGXHU3MjY5XHU5NUY0XHU5Njk0XHU2NUY2XHU5NUY0IFx1NzlEMiAqL1xyXG4gICAgcGV0RGlnZXN0SW50ZXJ2YWxUaW1lOiA2MCxcclxuICAgIC8qKiBcdTZFMzhcdTYyMEZcdTY3MkNcdTU3MzBcdTUwQThcdTVCNThrZXkgKi9cclxuICAgIGxvY2FsS2V5OiBcImxvdmVfSERfZmFybVwiLFxyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NEY1M1x1NTI5Qlx1NEUwQVx1OTY1MCAqL1xyXG4gICAgdXNlclZpdGFsaXR5TGltaXQ6IDEwLFxyXG4gICAgLyoqIFx1NTM0Rlx1OEJBRVx1NTczMFx1NTc0MCAqL1xyXG4gICAgLy8gYmFzZVVybDogXCIvLzQ3LjEwOC4xOTIuMTgxOjgwOTIvIGZhcm1cIixcclxuICAgIGJhc2VVcmw6IGJhc2VVcmwsXHJcbiAgICAvLyBCVUlMRF9UWVBFID09IEJ1aWxkVHlwZS5kZWJ1ZyA/IFwiLy8xOTIuMTY4LjUwLjg3OjMwMDBcIiA6IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMDAwXCIsXHJcbiAgICAvLyBiYXNlVXJsOiBERUJVRyA/IFwiLy8xOTIuMTY4LjEwMS41MDozMDAwXCIgOiBcImh0dHA6Ly9nYW1lLmFoZDE2OC5jb206MzAwMFwiLFxyXG4gICAgLy8gYmFzZVVybDogXCJodHRwOi8vZ2FtZS5haGQxNjguY29tOjMwMDBcIixcclxuICAgIC8vIHRvZG8gXHU4RkQ5XHU5MUNDXHU3Njg0SXBcdTUzRUZcdTRFRTVcdThCQkZcdTk1RUVcdTUzRUZcdTgwRkRcdTY2MkZcdTY3MDlcdTk1RUVcdTk4OThcdTc2ODRcclxuICAgIC8vIGJhc2VVcmw6IFwiLy80Ny4xMDguMTkyLjE4MTozMDAwXCIsXHJcbiAgICAvKiogYXBpXHU4QkY3XHU2QzQyXHU3QzdCXHU1NzhCIFx1OUVEOFx1OEJBNCAqL1xyXG4gICAgQXBpVHlwZURlZmF1bHQ6IDEsXHJcbiAgICAvKiogYXBpXHU4QkY3XHU2QzQyXHU3QzdCXHU1NzhCIFx1NzcwQlx1NUU3Rlx1NTQ0QSAqL1xyXG4gICAgQXBpVHlwZUFEOiAyLFxyXG4gICAgLyoqIFx1NUU3Rlx1NTQ0QVx1Njc2MVx1NEVGNiBcdTUyQTBcdTkwMUZcdTRGN0ZcdTc1MjhcdTRFODY2XHU2QjIxICovXHJcbiAgICBBRFNwZWVkVXBUaW1lczogNixcclxuICAgIHZlcnNpb246IFwiMS4wLjBcIixcclxuICAgIC8qKlx1NkUyMFx1OTA1MyAqL1xyXG4gICAgY2hhbm5lbDogXCJcIixcclxufTtcclxuIiwgImltcG9ydCB7IEFwcEV2ZW50TWFwIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwic3RyZWFtL2NvbnN1bWVyc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNwYXRjaERhdGEge1xyXG4gICAgdXJpOiBBcHBFdmVudE1hcDtcclxuICAgIGRhdGE6IG9iamVjdDtcclxuICAgIHRpbWVzdGFtcD86IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNwYXRjaFJldHVybkRhdGEge1xyXG4gICAgLyoqIFx1NTM0Rlx1OEJBRVx1NzJCNlx1NjAwMVx1NzgwMSAwIFx1NEUzQVx1NkI2M1x1NUUzOCBcdTUxNzZcdTVCODNcdTRFM0FcdTk1MTlcdThCRUZcdTc4MDEgKi9cclxuICAgIGNvZGU6IG51bWJlcjtcclxuICAgIC8qKiBcdTUzNEZcdThCQUV1cmkgKi9cclxuICAgIHVyaTogQXBwRXZlbnRNYXA7XHJcbiAgICAvKiogXHU4RkQ0XHU1NkRFXHU1MTc3XHU0RjUzXHU3Njg0XHU2NTcwXHU2MzZFICovXHJcbiAgICBkYXRhOiBvYmplY3Q7XHJcbiAgICAvKiogXHU2ODA3XHU4QkM2ICovXHJcbiAgICB0aW1lc3RhbXA/OiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEV2ZW50TWFwOiBNYXA8c3RyaW5nIHwgbnVtYmVyLCBGdW5jdGlvbj4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcclxuICogd2ViIGFwcCBcdTRFQTRcdTRFOTJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvcmUge1xyXG4gICAgLyoqXHU4MkY5XHU2NzlDXHU3QzdCXHU1NzhCICovXHJcbiAgICBzdGF0aWMgdHlwZUlvczogbnVtYmVyID0gMTtcclxuICAgIC8qKlx1NUI4OVx1NTM1M1x1N0M3Qlx1NTc4QiAqL1xyXG4gICAgc3RhdGljIHR5cGVBbmRyb2lkOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjY3XHU4ODRDYXBwXHU0RUE0XHU0RTkyXHU2NUI5XHU2Q0Q1XHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcdTY1QjlcdTZDRDVcdTU0MERcdTc5RjBcclxuICAgICAqIEBwYXJhbSBkYXRhIFx1NEYyMFx1NTE2NVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcnVuQXBwRnVuY3Rpb24oZGF0YT86IEFwcERlc3BhdGNoRGF0YSk6IFByb21pc2U8QXBwRGVzcGF0Y2hSZXR1cm5EYXRhIHwgbnVsbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB3ZWJBcHBGdW5jdGlvbjtcclxuICAgICAgICAgICAgaWYgKExheWEuQnJvd3Nlci5vbklPUykge1xyXG4gICAgICAgICAgICAgICAgLy8gd2ViQXBwRnVuY3Rpb24gPSB0aGlzLmRldGVjdGlvbkhhc0Z1bmN0aW9uKHRoaXMudHlwZUlvcywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAod2ViQXBwRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBpZiAobmFtZSA9PSB0aGlzLmNsb3NlV2ViVmlldykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAvL1x1NTE3M1x1OTVFRHdlYnZpZXdcdTcyNzlcdTZCOEFcdTU5MDRcdTc0MDZcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgd2luZG93W1wid2Via2l0XCJdW1wibWVzc2FnZUhhbmRsZXJzXCJdW3RoaXMubGVhdmVDaGFubmVsXVtcInBvc3RNZXNzYWdlXCJdKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBzdGF0dXM6IDEgfSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgKTsgLy9cdTcyNzlcdTZCOEFcdTU5MDRcdTc0MDZcdTk3MDBcdTg5ODFcdTUxNDhcdTkwMDBcdTUxRkFcdTk4OTFcdTkwNTNcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gd2ViQXBwRnVuY3Rpb25bJ3Bvc3RNZXNzYWdlJ10oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwicnVuIDpcIiArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl1bXCJtZXNzYWdlSGFuZGxlcnNcIl1bbmFtZV1bXCJwb3N0TWVzc2FnZVwiXShkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl1bXCJtZXNzYWdlSGFuZGxlcnNcIl1bbmFtZV1bXCJwb3N0TWVzc2FnZVwiXShcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzOiAxIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQod2luZG93W1wiJEFwcFwiXSAmJiB3aW5kb3dbXCIkQXBwXCJdW1wid2ViUmVxdWVzdFwiXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93W1wiJEFwcFwiXSAmJiB3aW5kb3dbXCIkQXBwXCJdW1wid2ViUmVxdWVzdFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcIiRBcHBcIl1bXCJ3ZWJSZXF1ZXN0XCJdKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VuZCA9PiAke2RhdGF9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoYHNlbmQgPT4gJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50aW1lc3RhbXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRNYXAuc2V0KGRhdGEudGltZXN0YW1wLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUobnVsbCk7IC8vXHU1OTgyXHU2NzlDXHU1MTk5XHU4RkQ5XHU0RTJBXHU0RjFBXHU2MjEwXHU1MjlGXHVGRjBDXHU2MjQwXHU0RUU1XHU2QjYzXHU1RTM4XHU0RTBEXHU5MDFBXHU4RkM3XHU1RTk0XHU3NTI4XHVGRjBDXHU0RTAwXHU0RTlCXHU1MjlGXHU4MEZEXHU4RkQ5XHU5MUNDXHU0RTBEXHU4QkE5XHU3NTI4XHVGRjBDXHU1QzMxXHU2Q0U4XHU5MUNBXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3ZWJBcHBGdW5jdGlvbiA9IHRoaXMuZGV0ZWN0aW9uSGFzRnVuY3Rpb24odGhpcy50eXBlQW5kcm9pZCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAod2ViQXBwRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3dbXCJ3ZWJSZXF1ZXN0XCJdW25hbWVdKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHdpbmRvd1tcIndlYlJlcXVlc3RcIl1bbmFtZV0oKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzZEMVx1NTQyQ2FwcCBcdTYyNjdcdTg4NENoNSBcdTYzQTVcdTUzRTNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGxpc3RlbkFwcEZ1bmN0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIC8vXHU3NkQxXHU1NDJDXHU2MjRCXHU2NzNBXHU1MTczXHU5NUVEXHU0RThCXHU0RUY2XHU1NENEXHU1RTk0XHJcblxyXG4gICAgICAgIHdpbmRvd1tcImFwcFJlc3BvbnNlXCJdID0gKGQ6IEFwcERlc3BhdGNoUmV0dXJuRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBhbGVydChgYmFjayAke0pTT04uc3RyaW5naWZ5KGQpfWApO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogSlNPTi5zdHJpbmdpZnkoZCksIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAvLyBhbGVydChkPy50aW1lc3RhbXApO1xyXG4gICAgICAgICAgICBpZiAoRXZlbnRNYXAuaGFzKGQ/LnRpbWVzdGFtcCkpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50TWFwLmdldChkLnRpbWVzdGFtcCkoZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Db250cm9sIHtcclxuICAgIHBsYXlTb3VuZChcclxuICAgICAgICB1cmw6IHN0cmluZyxcclxuICAgICAgICBsb29wcz86IG51bWJlcixcclxuICAgICAgICBjb21wbGV0ZT86IEhhbmRsZXIsXHJcbiAgICAgICAgc291bmRDbGFzcz86IG5ldyAoKSA9PiBhbnksXHJcbiAgICAgICAgc3RhcnRUaW1lPzogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQodXJsLCBsb29wcywgY29tcGxldGUsIHNvdW5kQ2xhc3MsIHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcbiAgICBwbGF5TXVzaWModXJsOiBzdHJpbmcsIGxvb3BzID0gMCwgY29tcGxldGU/OiBIYW5kbGVyLCBzdGFydFRpbWU/OiBudW1iZXIpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5wbGF5TXVzaWModXJsLCBsb29wcywgY29tcGxldGUsIHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1NjI0MFx1NjcwOVx1OTdGM1x1NjU0OFx1RkYwOFx1NEUwRFx1NTMwNVx1NjJFQ1x1ODBDQ1x1NjY2Rlx1OTdGM1x1NEU1MFx1RkYwOVx1NjYyRlx1NTQyNlx1OTc1OVx1OTdGM1x1MzAwMiAqL1xyXG4gICAgc2V0IHNvdW5kTXV0ZWQoc3RhdGUpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zb3VuZE11dGVkID0gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBnZXQgc291bmRNdXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gTGF5YS5Tb3VuZE1hbmFnZXIuc291bmRNdXRlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MENDXHU2NjZGXHU5N0YzXHU0RTUwXHVGRjA4XHU0RTBEXHU1MzA1XHU2MkVDXHU5N0YzXHU2NTQ4XHVGRjA5XHU2NjJGXHU1NDI2XHU5NzU5XHU5N0YzICovXHJcbiAgICBzZXQgbXVzaWNNdXRlZChzdGF0ZSkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLm11c2ljTXV0ZWQgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIGdldCBtdXNpY011dGVkKCkge1xyXG4gICAgICAgIHJldHVybiBMYXlhLlNvdW5kTWFuYWdlci5tdXNpY011dGVkO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQXVkaW9Db250cm9sIGZyb20gXCIuL0F1ZGlvQ29udHJvbFwiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiwgRmluZEJ5TmFtZSB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCBDb3JlID0ge1xyXG4gICAgLyoqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNiAqL1xyXG4gICAgb2JzZXJ2YWJsZVByb3BlcnR5OiBPYnNlcnZhYmxlUHJvcGVydHksXHJcbiAgICAvKiogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4ICovXHJcbiAgICB2aWV3OiBWaWV3TWFuYWdlci5pbnN0LFxyXG4gICAgLyoqIFx1NUYxNVx1NjRDRVx1ODExQVx1NjcyQ1x1N0VDNFx1NEVGNiAqL1xyXG4gICAgZ2FtZVNjcmlwdDogR2FtZVNjcmlwdCxcclxuICAgIC8qKiBcdTUzNTVcdTRGOEJcdTg4QzVcdTk5NzBcdTU2NjggKi9cclxuICAgIGluc3RhbmNlOiBJbnN0YW5jZSxcclxuICAgIC8qKiBcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuICAgIGV2ZW50T246IEV2ZW50T24sXHJcbiAgICAvKiogdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZVx1NzY4NFx1NzcwMVx1NEU4Qlx1NTE5OVx1NkNENSBcdTUzRUFcdTgwRkRcdTY3RTVcdTYyN0VcdTRFMEJcdTRFMDBcdTdFQTdcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbiAgICBmaW5kQnlOYW1lOiBGaW5kQnlOYW1lLFxyXG4gICAgLyoqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNiAqL1xyXG4gICAgZXZlbnRHbG9iYWw6IEV2ZW50R2xvYmFsLFxyXG4gICAgLyoqXHU5N0YzXHU5ODkxICovXHJcbiAgICBhdWRpbzogbmV3IEF1ZGlvQ29udHJvbCgpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29yZTtcclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0VmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp2ZXJzaW9uLCB0aXBzOlwiXHU3M0E5XHU1QkI2XHU1NDBEXHU3OUYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2ZXJzaW9uOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjaGFubmVsLCB0aXBzOlwiXHU2RTIwXHU5MDUzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjaGFubmVsOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24udGV4dCA9IGBcdTcyNDhcdTY3MkNcdTUzRjdcdUZGMUFWJHtDb25maWdHYW1lLnZlcnNpb259YDtcclxuICAgICAgICB0aGlzLmNoYW5uZWwudGV4dCA9IGBcdTZFMjBcdTkwNTNcdTUzRjdcdUZGMUEke0NvbmZpZ0dhbWUuY2hhbm5lbH1gO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWJvdXRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidXNlcl9hZ3JlZW1lbnRcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU3NTI4XHU2MjM3XHU1MzRGXHU4QkFFXHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5zZXJ2aWNlQWdyZWVtZW50LCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJpdmFjeVwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTk2OTBcdTc5QzFcdTY1M0ZcdTdCNTZcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oeyB1cmk6IEFwcEV2ZW50TWFwLnByaXZhY3lBZ3JlZW1lbnQsIGRhdGE6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZWZhdWx0UmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZGVmYXVsdFJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkb3duUmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZG93blJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppc1NjYWxlLCB0aXBzOlwiXHU2NjJGXHU1NDI2XHU3RjI5XHU2NTNFXCIsdHlwZTpDaGVja30qL1xyXG4gICAgcHJpdmF0ZSBpc1NjYWxlID0gZmFsc2U7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2NhbGVWYWwsIHRpcHM6XCJcdTdGMjlcdTY1M0VcdTc2ODRcdTUwM0NcIix0eXBlOk51bWJlciwgZGVmYXVsdDowLjl9Ki9cclxuICAgIHByaXZhdGUgc2NhbGVWYWw6IG51bWJlciA9IDAuOTtcclxuXHJcbiAgICBwcml2YXRlIG9sZFNjYWxlWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVk6IG51bWJlcjtcclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyAodGhpcy5vd25lciBhcyBMYXlhLkJveCkuc2V0X2FuY2hvclgoMC41KTtcclxuICAgICAgICAvLyAodGhpcy5vd25lciBhcyBMYXlhLkJveCkuc2V0X2FuY2hvclkoMC41KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzU2NhbGUpO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5tb3VzZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2xkU2NhbGVYID0gKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLmdldF9zY2FsZVgoKTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWSA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZURvd24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZG93blJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkodGhpcy5zY2FsZVZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU91dCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuICAgIG9uTW91c2VVcCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFuaShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2NhbGUpIHJldHVybjtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICB7IHNjYWxlWDogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWCwgc2NhbGVZOiBzY2FsZSAqIHRoaXMub2xkU2NhbGVZIH0sXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTa2luKHNraW46IHN0cmluZykge1xyXG4gICAgICAgIGlmICghc2tpbikgcmV0dXJuO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuSW1hZ2UpLnNraW4gPSBza2luO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuXHJcbmNvbnN0IExvY2FsRGF0YSA9IHtcclxuICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgdG9rZW46IG51bGwsXHJcblxyXG4gICAgLyoqIHRydWUgXHU0RTNBXHU1MTczXHU5NUVEIGZhbHNlIFx1NEUzQVx1NjI1M1x1NUYwMCAqL1xyXG4gICAgc291bmQ6IGZhbHNlLFxyXG4gICAgLyoqIHRydWUgXHU0RTNBXHU1MTczXHU5NUVEIGZhbHNlIFx1NEUzQVx1NjI1M1x1NUYwMCAqL1xyXG4gICAgbXVzaWM6IGZhbHNlLFxyXG4gICAgLyoqIHZlcnNpb24gKi9cclxuICAgIHZlcnNpb246IFwiMC4wLjBcIixcclxufTtcclxuXHJcbi8qKlxyXG4gKiBcdTY3MkNcdTU3MzBcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQgbG9jYWxEYXRhIFx1NTcyOFx1OEZEOVx1NEUyQVx1OTFDQ1x1OTc2Mlx1NUI5QVx1NEU0OVx1NTk3RFxyXG4gKi9cclxuY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGxvY2FsRGF0YSA9IExvY2FsRGF0YTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhID0gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SlNPTihDb25maWdHYW1lLmxvY2FsS2V5KSB8fCBMb2NhbERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1ODNCN1x1NTNENlx1NjcyQ1x1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZ2V0SlNPTigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1OEJCRVx1N0Y2RVx1NjcyQ1x1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgc2V0SlNPTjxrZXkgZXh0ZW5kcyBrZXlvZiB0eXBlb2YgTG9jYWxEYXRhPihrZXk6IGtleSwgZGF0YTogdHlwZW9mIExvY2FsRGF0YVtrZXldKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbERhdGFba2V5XSA9IGRhdGE7XHJcbiAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTihDb25maWdHYW1lLmxvY2FsS2V5LCB0aGlzLmxvY2FsRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTihDb25maWdHYW1lLmxvY2FsS2V5LCB7IHZlcnNpb246IHRoaXMubG9jYWxEYXRhLnZlcnNpb24gfSk7XHJcbiAgICAgICAgdGhpcy5sb2NhbERhdGEgPSB7XHJcbiAgICAgICAgICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgICAgICAgICB0b2tlbjogbnVsbCxcclxuICAgICAgICAgICAgc291bmQ6IHRydWUsXHJcbiAgICAgICAgICAgIG11c2ljOiB0cnVlLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLmxvY2FsRGF0YS52ZXJzaW9uLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2NhbFN0b3JhZ2VTZXJ2aWNlKCk7XHJcbiIsICIvKiogXHU2MjQwXHU2NzA5XHU4ODY4ICovXHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFRhYmxlID0ge1widGFza1wiOlt7XCJpZFwiOjEwMDEsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MSxcInRpdGxlXCI6XCJcdTdCN0VcdTUyMzBcdTk4ODZcdTk0QkJcdTc3RjNcIixcImRlc2NcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MVx1N0I3RVx1NTIzMFwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwMixcInJld2FyZFwiOlwiMTAwMToxMDBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU4M0RDXHU1NzMwXHU2NUJEXHU4MEE1MTBcdTZCMjFcIixcImRlc2NcIjpcIlx1ODNEQ1x1NTczMFx1NTJBMFx1OTAxRjEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDAzLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1ODNEQ1x1NTczMFx1NjUzNlx1ODNCNzEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTgzRENcdTU3MzBcdTY1MzZcdTgzQjcxMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNCxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjo1LFwidGl0bGVcIjpcIlx1OEJCRlx1NTNDQjVcdTZCMjFcIixcImRlc2NcIjpcIlx1NTA3N1x1ODNEQzVcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDUsXCJyZXdhcmRcIjpcIjEwMDE6MjBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTU1ODJcdTUxN0JcdTcyRDdcdTcyRDczXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTU1ODJcdTUxN0JcdTcyRDdcdTcyRDczXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA2LFwicmV3YXJkXCI6XCIxMDAxOjIwXCIsXCJ0aW1lc1wiOjUsXCJ0aXRsZVwiOlwiXHU4RDJEXHU0RTcwXHU5OTcyXHU2NTk5NVx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4RDJEXHU0RTcwXHU5OTcyXHU2NTk5NVx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNyxcInJld2FyZFwiOlwiMTAwMToyMFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdThEMkRcdTRFNzBcdTc5Q0RcdTVCNTAxMFx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4RDJEXHU0RTcwXHU3OUNEXHU1QjUwMTBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDgsXCJyZXdhcmRcIjpcIjEwMDI6NTAwXCIsXCJ0aW1lc1wiOjMsXCJ0aXRsZVwiOlwiXHU1MUZBXHU1NTJFXHU0RjVDXHU3MjY5M1x1NkIyMVwiLFwiZGVzY1wiOlwiXHU1MUZBXHU1NTJFXHU0RjVDXHU3MjY5M1x1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwOSxcInJld2FyZFwiOlwiMTAwMToxMDBcIixcInRpbWVzXCI6NSxcInRpdGxlXCI6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0JcIixcImRlc2NcIjpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQjVcdTRFMkFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMTAsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MSxcInRpdGxlXCI6XCJcdTUyMDZcdTRFQUJcdTVGOTdcdTU5N0RcdTc5M0NcIixcImRlc2NcIjpcIlx1NTIwNlx1NEVBQlx1NEUwMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMSxcInJld2FyZFwiOlwiMTAwMjo1MDBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTYzMDdcdTVCOUFcdTc5Q0RcdTY5MERcIixcImRlc2NcIjpcIlx1NzlDRFx1NjkwRFx1NjMwN1x1NUI5QVx1NzlDRFx1NUI1MFwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMixcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjo1LFwidGl0bGVcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MVx1OTg4Nlx1Nzk4Rlx1NTIyOVwiLFwiZGVzY1wiOlwiXHU3NzBCXHU4OUM2XHU5ODkxNVx1NkIyMVwiLFwiaWNvblwiOm51bGx9XSxcInNpZ25JblwiOlt7XCJpZFwiOjEwMDEsXCJkYXlzXCI6NyxcInJld2FyZFwiOlwiMTAwMToyMDAwMFwifSx7XCJpZFwiOjEwMDIsXCJkYXlzXCI6MTAsXCJyZXdhcmRcIjpcIjEwMDE6MzAwMDBcIn0se1wiaWRcIjoxMDAzLFwiZGF5c1wiOjE1LFwicmV3YXJkXCI6XCIxMDAxOjUwMDAwXCJ9LHtcImlkXCI6MTAwNCxcImRheXNcIjoyMCxcInJld2FyZFwiOlwiMTAwMTo4MDAwMFwifSx7XCJpZFwiOjEwMDUsXCJkYXlzXCI6MzAsXCJyZXdhcmRcIjpcIjEwMDE6MTIwMDAwXCJ9LHtcImlkXCI6MTAwNixcImRheXNcIjo1MCxcInJld2FyZFwiOlwiMTAwMToxODAwMDBcIn0se1wiaWRcIjoxMDA3LFwiZGF5c1wiOjgwLFwicmV3YXJkXCI6XCIxMDAxOjMwMDAwMFwifSx7XCJpZFwiOjEwMDgsXCJkYXlzXCI6MTAwLFwicmV3YXJkXCI6XCIxMDAxOjM1MDAwMFwifSx7XCJpZFwiOjEwMDksXCJkYXlzXCI6MTUwLFwicmV3YXJkXCI6XCIxMDAxOjUwMDAwMFwifV0sXCJwbGFudFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTZDMzRcdTdBM0JcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwMl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTBcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjE4MFwiLFwidW5sb2NrX2Nvc3RcIjpudWxsLFwidW5sb2NrX3Jld2FyZFwiOm51bGwsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU1OTI3XHU4QzQ2XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDRfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwXCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIxODBcIixcInVubG9ja19jb3N0XCI6bnVsbCxcInVubG9ja19yZXdhcmRcIjpudWxsLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1NTkyN1x1ODQ5Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDEyX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MFwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMjQwXCIsXCJ1bmxvY2tfY29zdFwiOm51bGwsXCJ1bmxvY2tfcmV3YXJkXCI6bnVsbCxcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTUzMDVcdTVGQzNcdTgzRENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwNl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo3NVwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NzVcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjMwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNSxcIm5hbWVcIjpcIlx1NTcxRlx1OEM0NlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA3X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjc1XCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo3NVwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiMzAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU4NDFEXHU1MzVDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDVfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NzVcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjc1XCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCI0ODBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDcsXCJuYW1lXCI6XCJcdTVDMEZcdTlFQTZcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwMV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxMjBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjEyMFwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiNDgwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxNTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA4LFwibmFtZVwiOlwiXHU4RkEzXHU2OTEyXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTBfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MTIwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjoxMjBcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjYwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MjAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwOSxcIm5hbWVcIjpcIlx1OUVDNFx1NzREQ1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDExX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjIwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MjAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI3MjBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjMwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTAsXCJuYW1lXCI6XCJcdTgzMDRcdTVCNTBcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxM19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoyMDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjIwMFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiNzIwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjozNTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDExLFwibmFtZVwiOlwiXHU4MEUxXHU4NDFEXHU1MzVDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDhfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MzUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjozNTBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjkwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NDUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMixcIm5hbWVcIjpcIlx1NTM1N1x1NzREQ1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDE0X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjM1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MzUwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI5MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjUwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTMsXCJuYW1lXCI6XCJcdTczODlcdTdDNzNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwM19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwMFwiLFwiaGFydmVzdFwiOlwiM341XCIsXCJtYXR1cmVfdGltZVwiOlwiMTIwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NTUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxNCxcIm5hbWVcIjpcIlx1NzUxOFx1ODUxN1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDE1X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjVcIixcIm1hdHVyZV90aW1lXCI6XCIxMjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo2MDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDE1LFwibmFtZVwiOlwiXHU3NTZBXHU4MzA0XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDlfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MDBcIixcImhhcnZlc3RcIjpcIjN+NVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjY1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifV0sXCJwZXRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU2NUZBXHU4RDIyXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAxX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxMCxcImNvc3RcIjpcIjEwMDI6MzAwMFwiLFwiZGVzY1wiOlwiXHU3MjMxXHU1QjgzXHU1QzMxXHU0RTcwXHU1Qjgzflx1NUI4M1x1NUMzMVx1NjYyRlx1NjcwOVx1NzBCOVx1NjFEMn5cIixcInNlbnNpdGl2ZVwiOjM0LFwiYWJpbGl0eVwiOjQyfSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTZDNjRcdTU3MDZcIixcImljb25cIjpcInBldF9mZWVkLzEwMDdfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE1LFwiY29zdFwiOlwiMTAwMjo0MDAwXCIsXCJkZXNjXCI6XCJcdTk4OUNcdTUwM0NcdTMwMDFcdTY2N0FcdTU1NDZcdTUzQ0NcdTUzQ0NcdTU3MjhcdTdFQkZcIixcInNlbnNpdGl2ZVwiOjQwLFwiYWJpbGl0eVwiOjQ4fSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTgwODlcdTVFNzJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDlfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE2LFwiY29zdFwiOlwiMTAwMjo0NTAwXCIsXCJkZXNjXCI6XCJcdTY3MDBcdTVGRTBcdThCREFcdTc2ODRcdTRGMTlcdTRGMzRcIixcInNlbnNpdGl2ZVwiOjQ1LFwiYWJpbGl0eVwiOjU1fSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTRFOENcdTU0QzhcIixcImljb25cIjpcInBldF9mZWVkLzEwMDJfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE2LFwiY29zdFwiOlwiMTAwMjo1MDAwXCIsXCJkZXNjXCI6XCJcdTdFRERcdTRFMERcdTYyQzZcdTVCQjZcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjQ4LFwiYWJpbGl0eVwiOjYwfSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTU5MjdcdTc3M0NcdTc3NUJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDVfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE3LFwiY29zdFwiOlwiMTAwMjo3MDAwXCIsXCJkZXNjXCI6XCJcdTZEM0JcdTU5N0RcdTU0MDNcdTc2ODRcdTVDMTFcIixcInNlbnNpdGl2ZVwiOjUwLFwiYWJpbGl0eVwiOjc1fSx7XCJpZFwiOjEwMDYsXCJuYW1lXCI6XCJcdTVDMEZcdTVDM0VcdTVERjRcIixcImljb25cIjpcInBldF9mZWVkLzEwMDRfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE4LFwiY29zdFwiOlwiMTAwMjo3NTAwXCIsXCJkZXNjXCI6XCJcdTZCNjZcdTUyOUJcdTU5MjlcdThENEJcdTVERjJcdTcwQjlcdTZFRTF+XHU2MkZGXHU2MzRGXHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo2MCxcImFiaWxpdHlcIjo4MH0se1wiaWRcIjoxMDA3LFwibmFtZVwiOlwiXHU3NDAzXHU3NDAzXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA4X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6ODAwMFwiLFwiZGVzY1wiOlwiXHU1QzMxXHU0RTI0XHU0RTJBXHU1QjU3XHVGRjBDXHU1NDJDXHU4QkREXHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo2OSxcImFiaWxpdHlcIjo4NX0se1wiaWRcIjoxMDA4LFwibmFtZVwiOlwiXHU1QzBGXHU3NjdEXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAzX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6ODAwMFwiLFwiZGVzY1wiOlwiXHU3NzBCXHU1QkI2XHUzMDAxXHU3NzBCXHU4M0RDXHUzMDAxXHU3NzBCXHU1QjY5XHU1QjUwXCIsXCJzZW5zaXRpdmVcIjo3NixcImFiaWxpdHlcIjo4OH0se1wiaWRcIjoxMDA5LFwibmFtZVwiOlwiXHU3MEI5XHU3MEI5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA2X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOSxcImNvc3RcIjpcIjEwMDI6MTAwMDBcIixcImRlc2NcIjpcIlx1NEY2MFx1NTAzQ1x1NUY5N1x1NjJFNVx1NjcwOVx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6ODUsXCJhYmlsaXR5XCI6OTN9LHtcImlkXCI6MTAxMCxcIm5hbWVcIjpcIlx1OTVGN1x1NThBOVwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAxMF9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MzAsXCJjb3N0XCI6XCIxMDAyOjE1MDAwXCIsXCJkZXNjXCI6XCJcdTk1N0ZcdTVGOTdcdTVDMzFcdTVGODhcdTUxRjZcdUZGMENcdTYyOTNcdTVDMEZcdTUwNzdcdTY2RjRcdTUxRjZcIixcInNlbnNpdGl2ZVwiOjkwLFwiYWJpbGl0eVwiOjk5fV0sXCJvcmRlclwiOlt7XCJpZFwiOjEsXCJjb21taXNzaW9uXCI6XCIxLjEyXCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MlwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoyLFwiY29tbWlzc2lvblwiOlwiMC44N1wiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjEsMTAwMjoyXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjMsXCJjb21taXNzaW9uXCI6XCIwLjY5XCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MSwxMDAzOjIsMTAwMjozXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjQsXCJjb21taXNzaW9uXCI6XCIwLjYxXCIsXCJjb25kaXRpb25cIjpcIjEwMDI6NCwxMDAzOjMsMTAwNDozLDEwMDE6NFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo1LFwiY29tbWlzc2lvblwiOlwiMC42MVwiLFwiY29uZGl0aW9uXCI6XCIxMDA0OjYsMTAwMjo1LDEwMDU6NCwxMDAxOjVcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NixcImNvbW1pc3Npb25cIjpcIjAuNjhcIixcImNvbmRpdGlvblwiOlwiMTAwMzoxMCwxMDA0OjUsMTAwNTozLDEwMDY6M1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo3LFwiY29tbWlzc2lvblwiOlwiMC40M1wiLFwiY29uZGl0aW9uXCI6XCIxMDA3OjQsMTAwMzo1LDEwMDQ6NywxMDA2OjEwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjgsXCJjb21taXNzaW9uXCI6XCIwLjU2XCIsXCJjb25kaXRpb25cIjpcIjEwMDg6MTMsMTAwNzozLDEwMDU6NSwxMDAyOjVcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6OSxcImNvbW1pc3Npb25cIjpcIjAuMzlcIixcImNvbmRpdGlvblwiOlwiMTAwNjoyLDEwMDk6MTAsMTAwNzo4LDEwMDM6OFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoxMCxcImNvbW1pc3Npb25cIjpcIjAuMjJcIixcImNvbmRpdGlvblwiOlwiMTAwNjoxMCwxMDEwOjUsMTAwODoxMCwxMDA5OjZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo4MDBcIn0se1wiaWRcIjoxMSxcImNvbW1pc3Npb25cIjpcIjAuNzZcIixcImNvbmRpdGlvblwiOlwiMTAwOTo1LDEwMDQ6MTAsMTAwMTo5LDEwMDI6MTBcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MTIsXCJjb21taXNzaW9uXCI6XCIwLjQzXCIsXCJjb25kaXRpb25cIjpcIjEwMDc6NiwxMDAzOjExLDEwMTE6NiwxMDA1OjEwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjEzLFwiY29tbWlzc2lvblwiOlwiMC4xN1wiLFwiY29uZGl0aW9uXCI6XCIxMDEwOjUsMTAwNToxMywxMDAxOjgsMTAxMjo4XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjE0LFwiY29tbWlzc2lvblwiOlwiMC41NVwiLFwiY29uZGl0aW9uXCI6XCIxMDEzOjEwLDEwMDg6OCwxMDA2OjYsMTAwMToxMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoxNSxcImNvbW1pc3Npb25cIjpcIjAuNDhcIixcImNvbmRpdGlvblwiOlwiMTAwMjoxMCwxMDA1OjEwLDEwMTE6MTIsMTAwMToxMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoxNixcImNvbW1pc3Npb25cIjowLjI5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjExLDEwMTQ6NCwxMDA2OjgsMTAwNToxN1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoxNyxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDA2OjE0LDEwMDc6NiwxMDE1OjEyLDEwMDE6MTRcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MTgsXCJjb21taXNzaW9uXCI6MC40OCxcImNvbmRpdGlvblwiOlwiMTAwODoxNCwxMDExOjEyLDEwMDk6MTUsMTAwMjo1XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjE5LFwiY29tbWlzc2lvblwiOjAuNzUsXCJjb25kaXRpb25cIjpcIjEwMTM6MTAsMTAwMzoyMCwxMDE0OjExLDEwMDE6N1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoyMCxcImNvbW1pc3Npb25cIjowLjY3LFwiY29uZGl0aW9uXCI6XCIxMDAzOjEwLDEwMTE6MTcsMTAwMjoxNCwxMDA1OjEyXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6OTAwXCJ9LHtcImlkXCI6MjEsXCJjb21taXNzaW9uXCI6MC42NCxcImNvbmRpdGlvblwiOlwiMTAxMDoxMCwxMDAzOjE0LDEwMDU6MTYsMTAwNzoxNVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoyMixcImNvbW1pc3Npb25cIjpcIjAuNFwiLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE5LDEwMDc6MTIsMTAxMTo1LDEwMDQ6MTdcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MjMsXCJjb21taXNzaW9uXCI6XCIwLjRcIixcImNvbmRpdGlvblwiOlwiMTAwMzoxOSwxMDE0OjIyLDEwMTU6MTYsMTAwODoxNFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoyNCxcImNvbW1pc3Npb25cIjowLjc3LFwiY29uZGl0aW9uXCI6XCIxMDE0OjEzLDEwMDE6MTcsMTAwODoxOCwxMDA0OjE1XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjI1LFwiY29tbWlzc2lvblwiOlwiMC4zOVwiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjIzLDEwMTE6MTksMTAxMDoxNSwxMDE1OjIwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjI2LFwiY29tbWlzc2lvblwiOjAuMDMsXCJjb25kaXRpb25cIjpcIjEwMDI6MjEsMTAxMToxMiwxMDEyOjIyLDEwMDM6MTlcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MjcsXCJjb21taXNzaW9uXCI6MC40OSxcImNvbmRpdGlvblwiOlwiMTAwNzoxNiwxMDE0OjE2LDEwMDY6MjAsMTAxMToxN1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoyOCxcImNvbW1pc3Npb25cIjowLjUzLFwiY29uZGl0aW9uXCI6XCIxMDE0OjE3LDEwMDc6MTIsMTAxMToxNywxMDAzOjE3XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjI5LFwiY29tbWlzc2lvblwiOjAuNzcsXCJjb25kaXRpb25cIjpcIjEwMTI6MTAsMTAwNToxNiwxMDEwOjE0LDEwMTU6MThcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MzAsXCJjb21taXNzaW9uXCI6XCIwLjM0XCIsXCJjb25kaXRpb25cIjpcIjEwMTE6MTcsMTAxNDoxOSwxMDA2OjE0LDEwMDQ6MzBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDAwXCJ9LHtcImlkXCI6MzEsXCJjb21taXNzaW9uXCI6MC41MyxcImNvbmRpdGlvblwiOlwiMTAwNzoxOCwxMDEwOjE0LDEwMTM6MTksMTAwNjoxMVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjozMixcImNvbW1pc3Npb25cIjowLjQ2LFwiY29uZGl0aW9uXCI6XCIxMDEzOjE5LDEwMDU6MjIsMTAxMjoxMiwxMDA4OjIwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjMzLFwiY29tbWlzc2lvblwiOlwiMC40NFwiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE2LDEwMTM6MjAsMTAwMjoyMywxMDA5OjE2XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjM0LFwiY29tbWlzc2lvblwiOlwiMC40MlwiLFwiY29uZGl0aW9uXCI6XCIxMDA5OjE5LDEwMTA6MTIsMTAxMToxNCwxMDEyOjIwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjM1LFwiY29tbWlzc2lvblwiOlwiMC4zM1wiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjE4LDEwMDQ6MTksMTAxMzoxNiwxMDAzOjIwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjM2LFwiY29tbWlzc2lvblwiOjAuMjEsXCJjb25kaXRpb25cIjpcIjEwMDM6MTEsMTAwODoxNywxMDE0OjE3LDEwMDc6MTlcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MzcsXCJjb21taXNzaW9uXCI6MC40NCxcImNvbmRpdGlvblwiOlwiMTAxMjoxOSwxMDEwOjIwLDEwMDI6MTQsMTAxMToxMVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjozOCxcImNvbW1pc3Npb25cIjowLjIyLFwiY29uZGl0aW9uXCI6XCIxMDE0OjEzLDEwMDQ6MTksMTAwMjoxMSwxMDE1OjE4XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjM5LFwiY29tbWlzc2lvblwiOjAuMzYsXCJjb25kaXRpb25cIjpcIjEwMDc6MTgsMTAxMjoxMywxMDA0OjE2LDEwMDI6MjZcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NDAsXCJjb21taXNzaW9uXCI6MC4yOCxcImNvbmRpdGlvblwiOlwiMTAwNDozMCwxMDA1OjEwLDEwMDg6MTgsMTAxMToxNlwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEwMDBcIn0se1wiaWRcIjo0MSxcImNvbW1pc3Npb25cIjpcIjAuNDhcIixcImNvbmRpdGlvblwiOlwiMTAxMDoxOCwxMDA5OjE4LDEwMDg6MTcsMTAxMToyNlwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo0MixcImNvbW1pc3Npb25cIjowLjQzLFwiY29uZGl0aW9uXCI6XCIxMDA5OjIxLDEwMDU6MTgsMTAwNzoyMCwxMDAyOjIzXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjQzLFwiY29tbWlzc2lvblwiOlwiMC4yNFwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjMwLDEwMDQ6MTQsMTAxNDoxMSwxMDA4OjE1XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjQ0LFwiY29tbWlzc2lvblwiOjAuNjIsXCJjb25kaXRpb25cIjpcIjEwMDk6MTUsMTAwMzoyOCwxMDAyOjM0LDEwMDc6MTlcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NDUsXCJjb21taXNzaW9uXCI6XCIwLjQxXCIsXCJjb25kaXRpb25cIjpcIjEwMTI6MTUsMTAxMDoyMywxMDA3OjEzLDEwMTE6MTNcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NDYsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwMzoyMiwxMDA3OjIzLDEwMTA6MTYsMTAwMjoyNFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo0NyxcImNvbW1pc3Npb25cIjowLjQ5LFwiY29uZGl0aW9uXCI6XCIxMDEwOjI0LDEwMTU6MjAsMTAwMzoyNSwxMDE0OjE2XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjQ4LFwiY29tbWlzc2lvblwiOlwiMC4yNlwiLFwiY29uZGl0aW9uXCI6XCIxMDEzOjE3LDEwMDc6MjQsMTAwODozNywxMDAxOjMwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjQ5LFwiY29tbWlzc2lvblwiOjAuNDgsXCJjb25kaXRpb25cIjpcIjEwMDI6MjYsMTAwNDoyMSwxMDA5OjIyLDEwMDY6MjBcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NTAsXCJjb21taXNzaW9uXCI6XCIwLjI1XCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MjcsMTAxMjoxOSwxMDA4OjIwLDEwMTU6MTFcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMTAwXCJ9LHtcImlkXCI6NTEsXCJjb21taXNzaW9uXCI6XCIwLjM0XCIsXCJjb25kaXRpb25cIjpcIjEwMTE6MTgsMTAwNDoxOSwxMDAyOjI1LDEwMDM6MTFcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NTIsXCJjb21taXNzaW9uXCI6MC40MyxcImNvbmRpdGlvblwiOlwiMTAxNToxNSwxMDEzOjIwLDEwMDE6MjUsMTAwNDoyNlwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo1MyxcImNvbW1pc3Npb25cIjpcIjAuMjhcIixcImNvbmRpdGlvblwiOlwiMTAxNDoxNCwxMDEyOjEyLDEwMTA6MjAsMTAxNToxOFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo1NCxcImNvbW1pc3Npb25cIjowLjQ1LFwiY29uZGl0aW9uXCI6XCIxMDA1OjIyLDEwMDI6MzMsMTAwOToxNiwxMDE1OjE3XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjU1LFwiY29tbWlzc2lvblwiOlwiMC41NlwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjIzLDEwMTQ6MTksMTAwNToxNywxMDEwOjE1XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjU2LFwiY29tbWlzc2lvblwiOlwiMC4zNVwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjI3LDEwMDU6MjksMTAwOToxNywxMDAzOjE4XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjU3LFwiY29tbWlzc2lvblwiOjAuNjcsXCJjb25kaXRpb25cIjpcIjEwMDc6MjEsMTAwODoxNywxMDAyOjE2LDEwMDk6MjVcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NTgsXCJjb21taXNzaW9uXCI6MC4zMixcImNvbmRpdGlvblwiOlwiMTAwNjoyMCwxMDA4OjI1LDEwMDU6MjQsMTAwNzoxOVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo1OSxcImNvbW1pc3Npb25cIjowLjc5LFwiY29uZGl0aW9uXCI6XCIxMDEyOjI1LDEwMDk6MzAsMTAxMzoxNiwxMDA4OjE1XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjYwLFwiY29tbWlzc2lvblwiOjAuNjksXCJjb25kaXRpb25cIjpcIjEwMTU6MjYsMTAxMjoyNywxMDEwOjMxLDEwMDE6MjNcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMTAwXCJ9LHtcImlkXCI6NjEsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAxNToxMiwxMDA2OjI1LDEwMTE6MTUsMTAwMjoxN1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo2MixcImNvbW1pc3Npb25cIjowLjQ0LFwiY29uZGl0aW9uXCI6XCIxMDE1OjIxLDEwMDc6MTUsMTAxMToxOCwxMDA2OjI2XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjYzLFwiY29tbWlzc2lvblwiOjAuMDEsXCJjb25kaXRpb25cIjpcIjEwMTA6MTgsMTAwNToxNiwxMDA5OjEzLDEwMDM6MjdcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NjQsXCJjb21taXNzaW9uXCI6MC4yNyxcImNvbmRpdGlvblwiOlwiMTAwNzoxNywxMDA2OjEwLDEwMDU6MjksMTAwNDoyNVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo2NSxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMDM6MzAsMTAxNDoyMCwxMDA1OjE1XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjY2LFwiY29tbWlzc2lvblwiOjAuNzMsXCJjb25kaXRpb25cIjpcIjEwMDQ6MjUsMTAwODoyNSwxMDAyOjM0LDEwMTI6MTRcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NjcsXCJjb21taXNzaW9uXCI6MC4xMyxcImNvbmRpdGlvblwiOlwiMTAwMTozNiwxMDEyOjIwLDEwMTE6MjAsMTAwMzoyMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo2OCxcImNvbW1pc3Npb25cIjowLjY5LFwiY29uZGl0aW9uXCI6XCIxMDEzOjI0LDEwMDg6MjMsMTAwNjoxNiwxMDA3OjE3XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjY5LFwiY29tbWlzc2lvblwiOjAuMzcsXCJjb25kaXRpb25cIjpcIjEwMTU6MzAsMTAwNDoyOSwxMDEzOjE3LDEwMDk6MTBcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NzAsXCJjb21taXNzaW9uXCI6MC43MSxcImNvbmRpdGlvblwiOlwiMTAxMDoyMywxMDA0OjMxLDEwMTE6MTcsMTAxMjoxMVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEyMDBcIn0se1wiaWRcIjo3MSxcImNvbW1pc3Npb25cIjowLjI5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjExLDEwMDI6MjYsMTAwMzoyOCwxMDE1OjEzXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjcyLFwiY29tbWlzc2lvblwiOjAuMzEsXCJjb25kaXRpb25cIjpcIjEwMDU6MjUsMTAwMjozOCwxMDEyOjE5LDEwMTA6MTRcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NzMsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAxMjozNCwxMDA2OjIyLDEwMDM6MjcsMTAwNDoyMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo3NCxcImNvbW1pc3Npb25cIjowLjI2LFwiY29uZGl0aW9uXCI6XCIxMDAzOjIwLDEwMTI6MTgsMTAwMjozMCwxMDAxOjIwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjc1LFwiY29tbWlzc2lvblwiOjAuMTgsXCJjb25kaXRpb25cIjpcIjEwMDY6MzEsMTAxNDozMCwxMDA4OjEyLDEwMDI6MjVcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NzYsXCJjb21taXNzaW9uXCI6MC41MSxcImNvbmRpdGlvblwiOlwiMTAwNzoyMSwxMDEyOjIwLDEwMDQ6MTEsMTAxNDoyMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo3NyxcImNvbW1pc3Npb25cIjowLjIxLFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMDk6MTYsMTAxMjoyNCwxMDA3OjMwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjc4LFwiY29tbWlzc2lvblwiOjAuNzMsXCJjb25kaXRpb25cIjpcIjEwMTU6MTYsMTAxMjoxNiwxMDA2OjIwLDEwMDg6MjJcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NzksXCJjb21taXNzaW9uXCI6MC42NSxcImNvbmRpdGlvblwiOlwiMTAwNjoyNiwxMDA0OjE4LDEwMDc6MTIsMTAxMToyN1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo4MCxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDA5OjE1LDEwMDM6MTYsMTAwNDoxOSwxMDA3OjI0XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTIwMFwifSx7XCJpZFwiOjgxLFwiY29tbWlzc2lvblwiOjAuMTQsXCJjb25kaXRpb25cIjpcIjEwMTI6MjAsMTAxNToyOCwxMDAyOjI0LDEwMDM6MzhcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6ODIsXCJjb21taXNzaW9uXCI6MC4yLFwiY29uZGl0aW9uXCI6XCIxMDA1OjEyLDEwMTE6MTksMTAwOToxOCwxMDAyOjE0XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjgzLFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMTA6MTksMTAwMzozOCwxMDA3OjIyLDEwMTU6MjBcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6ODQsXCJjb21taXNzaW9uXCI6MC42MixcImNvbmRpdGlvblwiOlwiMTAwNToyOSwxMDE0OjI2LDEwMDI6MTgsMTAwNzozOFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo4NSxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDExOjIwLDEwMDE6MTcsMTAxMjoxMiwxMDA0OjMyXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjg2LFwiY29tbWlzc2lvblwiOjAuNTksXCJjb25kaXRpb25cIjpcIjEwMDk6MjUsMTAxMToyMCwxMDA2OjE0LDEwMTU6MjFcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6ODcsXCJjb21taXNzaW9uXCI6XCIwLjMxXCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MjYsMTAwNToxOSwxMDEzOjIwLDEwMTQ6MjlcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6ODgsXCJjb21taXNzaW9uXCI6XCIwLjQ4XCIsXCJjb25kaXRpb25cIjpcIjEwMDg6MzcsMTAxMToyNCwxMDE1OjEyLDEwMTQ6MTFcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6ODksXCJjb21taXNzaW9uXCI6XCIwLjIyXCIsXCJjb25kaXRpb25cIjpcIjEwMDI6MTcsMTAwMzoyOCwxMDA1OjIyLDEwMTA6MzFcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6OTAsXCJjb21taXNzaW9uXCI6MC4zMixcImNvbmRpdGlvblwiOlwiMTAwMjozOSwxMDEzOjI4LDEwMDc6MjUsMTAwMTozM1wiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEzMDBcIn0se1wiaWRcIjo5MSxcImNvbW1pc3Npb25cIjowLjE5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMTM6MjAsMTAxNDoxMCwxMDA3OjI2XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjkyLFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDQ6MzgsMTAxMToxMywxMDA4OjE1LDEwMDc6MjlcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6OTMsXCJjb21taXNzaW9uXCI6MC4zNCxcImNvbmRpdGlvblwiOlwiMTAxMzoxMiwxMDAxOjM5LDEwMDY6MzgsMTAwODozMVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo5NCxcImNvbW1pc3Npb25cIjowLjIyLFwiY29uZGl0aW9uXCI6XCIxMDAyOjM2LDEwMTQ6MjcsMTAxMzoxNiwxMDA1OjMxXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjk1LFwiY29tbWlzc2lvblwiOjAuMTUsXCJjb25kaXRpb25cIjpcIjEwMDU6MjYsMTAxMTozNCwxMDE1OjM0LDEwMDg6MTZcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6OTYsXCJjb21taXNzaW9uXCI6XCIwLjQ5XCIsXCJjb25kaXRpb25cIjpcIjEwMDM6MjQsMTAwMTozNCwxMDA3OjI4LDEwMDU6MzBcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6OTcsXCJjb21taXNzaW9uXCI6XCIwLjZcIixcImNvbmRpdGlvblwiOlwiMTAxMzozMiwxMDA5OjMzLDEwMDY6MzAsMTAxMTo0MFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjE1MDBcIn1dLFwibGFuZ1wiOltdLFwibGFuZExldmVsXCI6W3tcImlkXCI6MSxcInJld2FyZFwiOlwiMTAwMjowXCIsXCJjb3N0XCI6XCIxMDAyOjBcIixcImdhaW5cIjpudWxsLFwicHJvYmFiaWxpdHlcIjowLjAxLFwiZ2V0X2RpYW1vbmRcIjoxfSx7XCJpZFwiOjIsXCJyZXdhcmRcIjpcIjEwMDI6MTUwMFwiLFwiY29zdFwiOlwiMTAwMjoxMDAwMFwiLFwiZ2FpblwiOjAuMSxcInByb2JhYmlsaXR5XCI6MC4wMyxcImdldF9kaWFtb25kXCI6MX0se1wiaWRcIjozLFwicmV3YXJkXCI6XCIxMDAyOjIwMDBcIixcImNvc3RcIjpcIjEwMDI6MzAwMDBcIixcImdhaW5cIjowLjI1LFwicHJvYmFiaWxpdHlcIjowLjA1LFwiZ2V0X2RpYW1vbmRcIjoyfSx7XCJpZFwiOjQsXCJyZXdhcmRcIjpcIjEwMDI6MjUwMFwiLFwiY29zdFwiOlwiMTAwMjo1MDAwMFwiLFwiZ2FpblwiOjAuNCxcInByb2JhYmlsaXR5XCI6MC4wOCxcImdldF9kaWFtb25kXCI6M30se1wiaWRcIjo1LFwicmV3YXJkXCI6XCIxMDAyOjMwMDBcIixcImNvc3RcIjpcIjEwMDI6MTAwMDAwXCIsXCJnYWluXCI6MC41NSxcInByb2JhYmlsaXR5XCI6MC4xLFwiZ2V0X2RpYW1vbmRcIjo1fV0sXCJmZWVkXCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1OTk3Q1x1NUU3MlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwMV9mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjoxLFwiY29zdFwiOlwiMTAwMjozMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTU3NUFcdTY3OUNcIixcImljb25cIjpcInBldF9mZWVkLzEwMDJfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MixcImNvc3RcIjpcIjEwMDI6NTBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDAzLFwibmFtZVwiOlwiXHU3MDZCXHU4MTdGXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAzX2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjUsXCJjb3N0XCI6XCIxMDAyOjEwMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTcyNUJcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDRfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6NTAsXCJjb3N0XCI6XCIxMDAyOjkwMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTczMkFcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDVfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MjAsXCJjb3N0XCI6XCIxMDAyOjQ2MFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDYsXCJuYW1lXCI6XCJcdTlFMjFcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDZfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MTAsXCJjb3N0XCI6XCIxMDAyOjI3MFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifV0sXCJjdXJyZW5jeVwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTk0QkJcdTc3RjNcIixcImljb25cIjpcIm1haW5fc2NlbmUvaW1nX2RpYW1vbmQucG5nXCJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1OTFEMVx1NUUwMVwiLFwiaWNvblwiOlwibWFpbl9zY2VuZS9pbWdfY29pbi5wbmdcIn1dLFwiY29uZmlnXCI6W3tcImlkXCI6XCJhbGxfc3BlZWRfdXBfdGltZXNcIixcInZhbHVlXCI6MzB9LHtcImlkXCI6XCJhbGxfc3BlZWRfdXBfdGltZVwiLFwidmFsdWVcIjo2MDB9LHtcImlkXCI6XCJ1bmxvY2tfbGFuZF9jb3N0XCIsXCJ2YWx1ZVwiOlwiMTAwMjowLDEwMDI6MCwxMDAyOjUwMDAsMTAwMjoxMDAwMCwxMDAyOjIwMDAwLDEwMDI6MzAwMDAsMTAwMjo0MDAwMCwxMDAyOjUwMDAwLDEwMDI6NjAwMDBcIn0se1wiaWRcIjpcImdvbGREZWZhdWx0XCIsXCJ2YWx1ZVwiOlwiMTAwMjoxMDBcIn0se1wiaWRcIjpcImRpYW1vbmREZWZhdWx0XCIsXCJ2YWx1ZVwiOlwiMTAwMTo1MFwifSx7XCJpZFwiOlwiQURUaW1lc0xpbWl0XCIsXCJ2YWx1ZVwiOjUwfSx7XCJpZFwiOlwiQURTcGVlZFVwdGltZXNcIixcInZhbHVlXCI6Nn0se1wiaWRcIjpcInZpdGFsaXR5QnV5Q29zdEdvbGRcIixcInZhbHVlXCI6XCIxMDAyOjEwMDAwXCJ9LHtcImlkXCI6XCJ2aXRhbGl0eUxpbWl0XCIsXCJ2YWx1ZVwiOjEwfSx7XCJpZFwiOlwiSW5pdGlhbF9waHlzaWNhbF9zdHJlbmd0aFwiLFwidmFsdWVcIjoxMH0se1wiaWRcIjpcImxhbmRBbW91bnRNYXhcIixcInZhbHVlXCI6OX0se1wiaWRcIjpcInBldERlZmF1bHRWaXRhbGl0eVwiLFwidmFsdWVcIjoxMDB9LHtcImlkXCI6XCJwZXREaWdlc3RJbnRlcnZhbFRpbWVcIixcInZhbHVlXCI6MzYwMH0se1wiaWRcIjpcIlZpZGVvcmV3YXJkc1wiLFwidmFsdWVcIjpcIjEwMDE6MjAwXCJ9LHtcImlkXCI6XCJ3aXRoZHJhd2FsXCIsXCJ2YWx1ZVwiOlwiMTAwMToxMDAwMDoxXCJ9LHtcImlkXCI6XCJJbnZpdGF0aW9uX3Jld2FyZHNcIixcInZhbHVlXCI6XCIxMDAxOjUwMDBcIn0se1wiaWRcIjpcIndpdGhkcmF3YWxfdGltZXNcIixcInZhbHVlXCI6XCIwLjM6MywwLjU6Miw1OjAsMTA6MCw1MDowXCJ9XX07IiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xzIHtcclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU1QjU3XHU3QjI2XHJcbiAgICAgKiBAcGFyYW0gc3RyIFx1ODk4MVx1ODlFM1x1Njc5MFx1NzY4NFx1NUI1N1x1N0IyNlxyXG4gICAgICogQHBhcmFtIGZvcm1hdCBcdTUwNUFcdTRFM0FcdTUzQzJcdTgwMDNcdTc2ODRcdTVCNTdcdTdCMjZcdTlFRDhcdThCQTRcdTRFM0EsXHJcbiAgICAgKiBAcmV0dXJucyBcdTg5RTNcdTY3OTBcdTU5N0RcdTc2ODRcdTVCNTdcdTdCMjZcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBhcnNlU3RyaW5nKHN0cjogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyA9IFwiLFwiKSB7XHJcbiAgICAgICAgaWYgKCFzdHIpIHJldHVybiBbXTtcclxuICAgICAgICByZXR1cm4gc3RyLnNwbGl0KGZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc5RDJcdThGNkNcdTYzNjJcdTYyMTAwMDowMDowMFxyXG4gICAgICogQHBhcmFtIHMgXHU4RjZDXHU2MzYyXHU2NUY2XHU5NUY0XHU3Njg0XHU3OUQyXHJcbiAgICAgKiBAcmV0dXJucyAwMDowMDowMFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9ybWF0U2Vjb25kcyA9IChzKSA9PiBuZXcgRGF0ZShzICogMTAwMCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMTEsIDgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuL1RhYmxlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb25maWdCYXNlLFxyXG4gICAgQ3VycmVuY3lCYXNlLFxyXG4gICAgRmVlZEJhc2UsXHJcbiAgICBMYW5kTGV2ZWxCYXNlLFxyXG4gICAgT3JkZXJCYXNlLFxyXG4gICAgUGV0QmFzZSxcclxuICAgIFBsYW50QmFzZSxcclxuICAgIFJld2FyZEJhc2UsXHJcbiAgICBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICBTaWduSW5CYXNlLFxyXG4gICAgVGFza0Jhc2UsXHJcbn0gZnJvbSBcIi4vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCIuL1Rvb2xzXCI7XHJcblxyXG5jb25zdCBUYWJsZVByb3BlcnR5RXZlbnQgPSB7XHJcbiAgICBwZXQoZDogdHlwZW9mIFRhYmxlLnBldFswXSkge1xyXG4gICAgICAgIHJldHVybiA8UGV0QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbiB8fCBgcGV0X2ZlZWQvJHtkLmlkfV9kb2cucG5nYCxcclxuICAgICAgICAgICAgdml0YWxpdHlfbWF4OiBkLnZpdGFsaXR5X21heCxcclxuICAgICAgICAgICAgdml0YWxpdHlfY29uc3VtZTogZC52aXRhbGl0eV9jb25zdW1lLFxyXG4gICAgICAgICAgICBjb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5jb3N0KSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgICAgICBzZW5zaXRpdmU6IGQuc2Vuc2l0aXZlLFxyXG4gICAgICAgICAgICBhYmlsaXR5OiBkLmFiaWxpdHksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTk5NzJcdTY1OTlcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZmVlZChkOiB0eXBlb2YgVGFibGUuZmVlZFswXSkge1xyXG4gICAgICAgIHJldHVybiA8RmVlZEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYHBldF9mZWVkLyR7ZC5pZH1fZmVlZC5wbmdgLFxyXG4gICAgICAgICAgICB2aXRhbGl0eTogZC52aXRhbGl0eSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OEJBMlx1NTM1NVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIG9yZGVyKGQ6IHR5cGVvZiBUYWJsZS5vcmRlclswXSkge1xyXG4gICAgICAgIHJldHVybiA8T3JkZXJCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGNvbW1pc3Npb246IE51bWJlcihkLmNvbW1pc3Npb24pLFxyXG4gICAgICAgICAgICBjb25kaXRpb246IFRvb2xzLnBhcnNlU3RyaW5nKGQuY29uZGl0aW9uKS5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gVG9vbHMucGFyc2VTdHJpbmcoZSwgXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFudDogVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KE51bWJlcih2WzBdKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IE51bWJlcih2WzFdKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBleHRyYVJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuZXh0cmFfcmV3YXJkKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NjIxMFx1NzE5Rlx1NjkwRFx1NzI2OVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHBsYW50KGQ6IHR5cGVvZiBUYWJsZS5wbGFudFswXSkge1xyXG4gICAgICAgIHJldHVybiA8UGxhbnRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uLFxyXG4gICAgICAgICAgICBtYXR1cmVJY29uOiBgcGxhbnRfaWNvbi8ke2QuaWNvbi5tYXRjaCgvXFxkKy9nKVswXX1fbWF0dXJlLnBuZ2AsXHJcbiAgICAgICAgICAgIGdyb3dpbmdJY29uOiBgcGxhbnRfaWNvbi8ke2QuaWNvbi5tYXRjaCgvXFxkKy9nKVswXX1fZ3Jvd2luZy5wbmdgLFxyXG4gICAgICAgICAgICBnYWluOiBUb29scy5wYXJzZVN0cmluZyhkLmdhaW4pLm1hcCgoZSkgPT4gZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGUpKSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgICAgICBzZWVkX3ByaWNlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5zZWVkX3ByaWNlKSxcclxuICAgICAgICAgICAgaGFydmVzdDogTnVtYmVyKFRvb2xzLnBhcnNlU3RyaW5nKGQuaGFydmVzdCwgXCJ+XCIpWzFdKSxcclxuICAgICAgICAgICAgbWF0dXJlX3RpbWU6IE51bWJlcihkLm1hdHVyZV90aW1lKSxcclxuICAgICAgICAgICAgdW5sb2NrX2Nvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnVubG9ja19jb3N0KSxcclxuICAgICAgICAgICAgdW5sb2NrX3Jld2FyZDogVG9vbHMucGFyc2VTdHJpbmcoZC51bmxvY2tfcmV3YXJkKS5tYXAoKGUpID0+IGdldFJld2FyZEN1cnJlbmN5QmFzZShlKSksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBjdXJyZW5jeShkOiB0eXBlb2YgVGFibGUuY3VycmVuY3lbMF0pIHtcclxuICAgICAgICByZXR1cm4gPEN1cnJlbmN5QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24sXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NTcxRlx1NTczMFx1N0I0OVx1N0VBN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBsYW5kTGV2ZWwoZDogdHlwZW9mIFRhYmxlLmxhbmRMZXZlbFswXSkge1xyXG4gICAgICAgIHJldHVybiA8TGFuZExldmVsQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICByZXdhcmQ6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnJld2FyZCksXHJcbiAgICAgICAgICAgIGNvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLmNvc3QpLFxyXG4gICAgICAgICAgICBnYWluOiBkLmdhaW4sXHJcbiAgICAgICAgICAgIHByb2JhYmlsaXR5OiBkLnByb2JhYmlsaXR5LFxyXG4gICAgICAgICAgICBnZXREaWFtb25kOiBkLmdldF9kaWFtb25kLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbmZpZyhkOiB0eXBlb2YgVGFibGUuY29uZmlnWzBdKSB7XHJcbiAgICAgICAgc3dpdGNoIChkLmlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhbGxfc3BlZWRfdXBfdGltZXNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcImFsbF9zcGVlZF91cF90aW1lc1wiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFsbF9zcGVlZF91cF90aW1lXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJhbGxfc3BlZWRfdXBfdGltZVwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInVubG9ja19sYW5kX2Nvc3RcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidW5sb2NrX2xhbmRfY29zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBUb29scy5wYXJzZVN0cmluZyhkLnZhbHVlIGFzIHN0cmluZykubWFwKChkKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJnb2xkRGVmYXVsdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJnb2xkRGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcImRpYW1vbmREZWZhdWx0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImRpYW1vbmREZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykuY291bnQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiQURUaW1lc0xpbWl0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJBRFRpbWVzTGltaXRcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcIkFEU3BlZWRVcHRpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJBRFNwZWVkVXB0aW1lc1wiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwidml0YWxpdHlCdXlDb3N0R29sZFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykuY291bnQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwidml0YWxpdHlMaW1pdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwidml0YWxpdHlMaW1pdFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiSW5pdGlhbF9waHlzaWNhbF9zdHJlbmd0aFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiSW5pdGlhbF9waHlzaWNhbF9zdHJlbmd0aFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZEFtb3VudE1heFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwibGFuZEFtb3VudE1heFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwicGV0RGVmYXVsdFZpdGFsaXR5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJwZXREZWZhdWx0Vml0YWxpdHlcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcInBldERpZ2VzdEludGVydmFsVGltZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJWaWRlb3Jld2FyZHNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcIlZpZGVvcmV3YXJkc1wiLCB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwid2l0aGRyYXdhbFwiOiAvL1x1NjNEMFx1NzNCMFx1NkJENFx1NEY4QlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwid2l0aGRyYXdhbFwiLCB2YWx1ZTogVG9vbHMucGFyc2VTdHJpbmcoZC52YWx1ZSBhcyBzdHJpbmcsIFwiOlwiKSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiSW52aXRhdGlvbl9yZXdhcmRzXCI6IC8vXHU5MDgwXHU4QkY3XHU1OTdEXHU1M0NCXHU1OTU2XHU1MkIxXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIkludml0YXRpb25fcmV3YXJkc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcIndpdGhkcmF3YWxfdGltZXNcIjogLy9cdTYzRDBcdTczQjBcdTZCMjFcdTY1NzBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwid2l0aGRyYXdhbF90aW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBUb29scy5wYXJzZVN0cmluZyhkLnZhbHVlIGFzIHN0cmluZykubWFwKCh2OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IFRvb2xzLnBhcnNlU3RyaW5nKHYsIFwiOlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJpY2U6IE51bWJlcih2WzBdKSwgdGltZXM6IE51bWJlcih2WzFdKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU5NTAxXHU3QjdFXHU1MjMwXHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZFxyXG4gICAgICovXHJcbiAgICBzaWduSW4oZDogdHlwZW9mIFRhYmxlLnNpZ25JblswXSkge1xyXG4gICAgICAgIHJldHVybiA8U2lnbkluQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBkYXlzOiBkLmRheXMsXHJcbiAgICAgICAgICAgIHJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQucmV3YXJkKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NEVGQlx1NTJBMVx1ODg2OFxyXG4gICAgICovXHJcbiAgICB0YXNrKGQ6IHR5cGVvZiBUYWJsZS50YXNrWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxUYXNrQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICB0aW1lczogZC50aW1lcyxcclxuICAgICAgICAgICAgcmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5yZXdhcmQpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHRpdGxlOiBkLnRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYGdhbWUvaW1nX2Jhcm0ucG5nYCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcclxuICogQHBhcmFtIHN0ciBcdTg5RTNcdTY3OTBcdTc2ODRcdThEMjdcdTVFMDFcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQgaWQ6bnVtXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXdhcmRDdXJyZW5jeUJhc2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBsaXN0ID0gVG9vbHMucGFyc2VTdHJpbmcoc3RyLCBcIjpcIik7XHJcblxyXG4gICAgcmV0dXJuIDxSZXdhcmRDdXJyZW5jeUJhc2U+e1xyXG4gICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KE51bWJlcihsaXN0WzBdKSksXHJcbiAgICAgICAgY291bnQ6IE51bWJlcihsaXN0WzFdKSxcclxuICAgIH07XHJcbn1cclxuXHJcbnR5cGUgdHlwZVRhYmxlID0gdHlwZW9mIFRhYmxlUHJvcGVydHlFdmVudDtcclxuXHJcbmNsYXNzIFRhYmxlQ29udHJvbCB7XHJcbiAgICBwcml2YXRlIHRhYmxlQ2FjaGU6IE1hcDxrZXlvZiB0eXBlVGFibGUsIFJldHVyblR5cGU8dHlwZVRhYmxlW2tleW9mIHR5cGVUYWJsZV0+W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU3Njg0XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0ga2V5IFx1ODg2OFx1NzY4NGtleVxyXG4gICAgICovXHJcbiAgICB0YWJsZTxUIGV4dGVuZHMga2V5b2YgdHlwZVRhYmxlPihcclxuICAgICAgICBrZXk6IFRcclxuICAgICk6IHtcclxuICAgICAgICBsaXN0OiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT5bXTtcclxuICAgICAgICBnZXQ6IHsgKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT4gfTtcclxuICAgIH0ge1xyXG4gICAgICAgIC8vXHU4QkZCXHU1M0Q2XHU3RUM0XHU2MjEwXHJcbiAgICAgICAgaWYgKHRoaXMudGFibGVDYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJsZUJhY2sodGhpcy50YWJsZUNhY2hlLmdldChrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTg5RTNcdTY3OTBcdTY1NzBcdTYzNkVcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIFRhYmxlW2tleV0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goVGFibGVQcm9wZXJ0eUV2ZW50W2tleV0oZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHU3RjEzXHU1QjU4XHU4OUUzXHU2NzkwXHU4ODY4XHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgdGhpcy50YWJsZUNhY2hlLnNldChrZXksIGxpc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayhsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUyOFx1NEU4RXRhYmxlXHU2NUI5XHU2Q0Q1XHU4RkQ0XHU1NkRFXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGXHU1NDhDXHU2REZCXHU1MkEwXHU4M0I3XHU1M0Q2XHU1MzU1XHU0RTJBXHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTg5RTNcdTY3OTBcdTg4NjhcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zIFx1OEZENFx1NTZERVx1NjMwN1x1NUI5QVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRhYmxlQmFjayhsaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGlzdDogbGlzdCxcclxuICAgICAgICAgICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGxpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODg2OFx1NjgzQ1x1ODlFM1x1Njc5MFx1NURFNVx1NTE3N1xyXG4gKi9cclxuY29uc3QgVGFibGVBbmFseXplID0gbmV3IFRhYmxlQ29udHJvbCgpO1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUFuYWx5emU7XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgVGFza0Jhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFza0RhdGFPYmoge1xyXG4gICAgLyoqIFx1NEVGQlx1NTJBMWlkICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NUI4Q1x1NjIxMFx1NkIyMVx1NjU3MCAqL1xyXG4gICAgdGltZXM6IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk4ODZcdTUzRDZcdTU5NTZcdTUyQjEgMFx1NjcyQVx1OTg4Nlx1NTNENiAxXHU1REYyXHU5ODg2XHU1M0Q2ICovXHJcbiAgICByZWNlaXZlOiBudW1iZXI7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExXHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBUYXNrQmFzZTtcclxufVxyXG4vKipcclxuICogXHU0RUZCXHU1MkExXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBUYXNrU2VydmljZSB7XHJcbiAgICBsaXN0OiBUYXNrRGF0YU9ialtdID0gW107XHJcblxyXG4gICAgaW5pdChkOiBOZXRJbml0W1widGFza3NcIl0pIHtcclxuICAgICAgICBkLmZvckVhY2goKGUpID0+XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGltZXM6IGUudGltZXMsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlOiBlLnJlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChlLmlkKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU0RUZCXHU1MkExXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldFRhc2soaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFRkJcdTUyQTFcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0QSA9IHRoaXMuZ2V0VGFzayhhLmlkKSxcclxuICAgICAgICAgICAgICAgIHRCID0gdGhpcy5nZXRUYXNrKGIuaWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIGEuaWQgK1xyXG4gICAgICAgICAgICAgICAgKHRBPy5yZWNlaXZlID8gMTAwMCA6IDEpICtcclxuICAgICAgICAgICAgICAgICh0QT8udGltZXMgPj0gYS5iYXNlLnRpbWVzID8gMTAwIDogMTAwMCkgLVxyXG4gICAgICAgICAgICAgICAgKGIuaWQgKyAodEI/LnJlY2VpdmUgPyAxMDAwIDogMSkgKyAodEI/LnRpbWVzID49IGIuYmFzZS50aW1lcyA/IDEwMCA6IDEwMDApKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU0RUZCXHU1MkExXHU2REZCXHU1MkEwXHU2QjIxXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIHRhc2tBZGRUaW1lcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSB0aGlzLmdldFRhc2soaWQpO1xyXG4gICAgICAgIGlmICghdGFzaykge1xyXG4gICAgICAgICAgICAvL1x1OUVEOFx1OEJBNFx1NEUwRFx1NTIxQlx1NUVGQVx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICAvLyB0YXNrID0geyBpZDogaWQsIHRpbWVzOiAwLCByZWNlaXZlOiAwLCBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChpZCkgfTtcclxuICAgICAgICAgICAgLy8gdGhpcy5saXN0LnB1c2godGFzayk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhc2sudGltZXMrKztcclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfdGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhc2tTZXJ2aWNlKCk7XHJcbiIsICJleHBvcnQgdHlwZSBMYW5kT2JqID0gTmV0SW5pdFtcImxhbmRzXCJdWzBdO1xyXG5cclxuY2xhc3MgTGFuZFNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgbGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBpbml0KGxpc3Q6IExhbmRPYmpbXSkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExhbmQoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTU3NTdcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBpZCBcdTU3MUZcdTU3MzBpZFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGdldExhbmQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkRGQlx1NTJBMFx1NjIxNlx1NjYyRlx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGQgXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGFkZExhbmQoZDogTGFuZE9iaikge1xyXG4gICAgICAgIHRoaXMubGlzdC5zZXQoZC5pZCwgZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTdBN0FcdTU3MUZcdTU3MzBcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMYW5kU2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGV0QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBldERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTVCQTBcdTcyNjlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFBldEJhc2U7XHJcbiAgICAvKiogXHU5NTAxXHU1QjlBICovXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBQZXRTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFBldERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBpbml0KHBldHM6IG51bWJlcltdKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBkLFxyXG4gICAgICAgICAgICAgICAgbG9jazogIXBldHMuaW5jbHVkZXMoZC5pZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU1QkEwXHU3MjY5XHU4OUUzXHU5NTAxXHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIGdldFVubG9ja0xlbigpIHtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWQubG9jaykgbGVuKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBldFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYW50RGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogUGxhbnRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jbGFzcyBQbGFudFNlcnZpY2Uge1xyXG4gICAgbGlzdDogUGxhbnREYXRhQmFzZVtdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGxpc3QgXHU3OUNEXHU1QjUwaWRcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgaW5pdChsaXN0OiBudW1iZXJbXSkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7IGJhc2U6IGQsIGxvY2s6ICFsaXN0LmluY2x1ZGVzKGQuaWQpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gaWQgXHU2OTBEXHU3MjY5aWRcclxuICAgICAqIEByZXR1cm5zIFx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBnZXRQbGFudChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMubGlzdC5sZW5ndGggLSAxOyB4ID4gLTE7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBsYW50U2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi4vY29yZS9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2RlxyXG4gKi9cclxuY2xhc3MgVXNlckluZm8ge1xyXG4gICAgLyoqIFx1OEJBMlx1NTM1NVx1N0I0OVx1N0VBNyBcdTVERjJcdTVCOENcdTYyMTAgKi9cclxuICAgIG9yZGVyTGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1NDBEXHU3OUYwICovXHJcbiAgICBuaWNrbmFtZTogc3RyaW5nID0gXCJuYW1lXCI7XHJcbiAgICAvLyAvKiogXHU3NTI4XHU2MjM3aWQgKi9cclxuICAgIC8vIHVpZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTU1MkZcdTRFMDBcdTY4MDdcdThCQzYgKi9cclxuICAgIGtleTogc3RyaW5nID0gbnVsbDtcclxuICAgIC8qKiBcdTc1MjhcdTU0MERcdTU5MzRcdTUwQ0YgKi9cclxuICAgIGF2YXRhcjogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjMgKi9cclxuICAgIGRpYW1vbmQ6IG51bWJlciA9IDk5OTtcclxuICAgIC8qKiBcdTkxRDFcdTVFMDEgKi9cclxuICAgIGdvbGQ6IG51bWJlciA9IDk5OTtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTUzRUZcdTRFRTVcdTc3MEJcdTVFN0ZcdTU0NEFcdTc2ODRcdTZCMjFcdTY1NzAgKi9cclxuICAgIGFkdmVydGlzZVRpbWVzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzNBOVx1NUJCNlx1NEY2OVx1NjIzNFx1NzY4NFx1NUJBMFx1NzI2OSAqL1xyXG4gICAgd2FyZVBldElkOiBudW1iZXI7XHJcbiAgICAvKiogXHU1MjY5XHU0RjU5XHU0RjUzXHU1MjlCICovXHJcbiAgICBwZXRWaXRhbGl0eTogbnVtYmVyO1xyXG4gICAgLyoqIFx1NkQ4OFx1NTMxNlx1OThERlx1NzI2OVx1NTAxMlx1OEJBMVx1NjVGNiAqL1xyXG4gICAgZGlnZXN0Q291bnREb3duOiBudW1iZXI7XHJcbiAgICAvKiogXHU4RkRFXHU3RUVEXHU3QjdFXHU1MjMwXHU1OTI5XHU2NTcwICovXHJcbiAgICBzaWduSW5EYXlzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NEUwQVx1NEUwMFx1NkIyMVx1OTg4Nlx1NTNENlx1NzY4NFx1N0I3RVx1NTIzMFx1NTk1Nlx1NTJCMWlkICovXHJcbiAgICBzaWduSW5JZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTVERjJcdTdFQ0ZcdTUyQTBcdTkwMUZcdTZCMjFcdTY1NzAgKi9cclxuICAgIHNwZWVkVXBUaW1lczogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTRGNTNcdTUyOUIgKi9cclxuICAgIHZpdGFsaXR5OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTE1MVx1NjM2Mlx1NkJENFx1NEY4QiAqL1xyXG4gICAgcHJvcG9ydGlvbjogbnVtYmVyID0gMC4wMDAxO1xyXG4gICAgLyoqIFx1OTA4MFx1OEJGN1x1ODAwNSAqL1xyXG4gICAgaW52aXRlUGVvcGxlOiBzdHJpbmc7XHJcbiAgICAvKiogXHU3QjJDXHU0RTAwXHU2QjIxXHU3NjdCXHU1RjU1IDExIFx1ODg2OFx1NzkzQSBcdTYyNERcdTg4NjhcdTc5M0FcdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcdTVCOENcdTUxNjhcdTdFRDNcdTY3NUYgICovXHJcbiAgICBpc0ZpcnN0VGltZTogbnVtYmVyO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NjNEMFx1NzNCMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgd2l0aGRyYXc6IFdpdGhkcmF3RGF0YVtdO1xyXG4gICAgLyoqIFx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjU3MFx1NjM2RSAqL1xyXG4gICAgZ3VpZGVEYXRhOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGdldCB0dHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJMZXZlbDtcclxuICAgIH1cclxuICAgIHNldCB0dHQodikge1xyXG4gICAgICAgIHRoaXMub3JkZXJMZXZlbCA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VySW5mbygpO1xyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBXYXJlSG91c2VEYXRhIHtcclxuICAgIGJhc2U6IFBsYW50QmFzZTtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB0eXBlPzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFdhcmVob3VzZVNlcnZpY2Uge1xyXG4gICAgbGlzdDogV2FyZUhvdXNlRGF0YVtdID0gW107XHJcblxyXG4gICAgaW5pdChcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICkge1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJcdTk1MTlcdThCRUZcdTc2ODRpZCBcIiArIGQuaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoZC5pZCksXHJcbiAgICAgICAgICAgICAgICBjb3VudDogZC5hbW91bnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxQ0ZcdTVDMTFcdTcyNjlcdTU0QzFcdTY1NzBcdTkxQ0ZcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIGFtb3VudFxyXG4gICAgICovXHJcbiAgICByZWR1Y2VBbW91bnQoaWQ6IG51bWJlciwgYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFt4XS5jb3VudCAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTkwNTNcdTUxNzdcclxuICAgICAqL1xyXG4gICAgZ2V0T25lKGlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEl0ZW0oaWQpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2REZCXHU1MkEwXHU3MjY5XHU1NEMxXHJcbiAgICAgKi9cclxuICAgIGFkZChpZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLmNvdW50ICs9IGFtb3VudDtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX09yZGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlx1OTUxOVx1OEJFRlx1NzY4NGlkIFwiICsgaWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChpZCksXHJcbiAgICAgICAgICAgIGNvdW50OiBhbW91bnQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBXYXJlaG91c2VTZXJ2aWNlKCk7XHJcbiIsICIvKipcclxuICogXHU3N0VEXHU5NEZFXHU2M0E1XHU4QkY3XHU2QzQyXHU1MzRGXHU4QkFFXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBcGlIdHRwIHtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgKi9cclxuICAgIGxvZ2luID0gXCIvbG9naW5cIixcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgdG9rZW4gKi9cclxuICAgIGxvZ2luVG9rZW4gPSBcIi9sb2dpbi90b2tlblwiLFxyXG4gICAgLyoqIFx1OTg4Nlx1NTNENlx1OEJBMlx1NTM1NVx1NTk1Nlx1NTJCMSAqL1xyXG4gICAgb3JkZXJSZXdhcmQgPSBcIi9vcmRlci9yZXdhcmRcIixcclxuICAgIC8qKiBcdTk4ODZcdTUzRDZcdTdCN0VcdTUyMzBcdTU5NTZcdTUyQjEgKi9cclxuICAgIHNpZ25JblJld2FyZCA9IFwiL3NpZ25Jbi9yZXdhcmRcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTg5RTNcdTk1MDEgKi9cclxuICAgIGxhbmRVbmxvY2sgPSBcIi9sYW5kL3VubG9ja1wiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjRBRFx1NzlDRCAqL1xyXG4gICAgbGFuZFNvdyA9IFwiL2xhbmQvc293XCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU2NTM2XHU4M0I3ICovXHJcbiAgICBsYW5kR2F0aGVyID0gXCIvbGFuZC9nYXRoZXJcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTcgKi9cclxuICAgIGxhbmRVcGdyYWRlID0gXCIvbGFuZC91cGdyYWRlXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MkEwXHU5MDFGICovXHJcbiAgICBsYW5kU3BlZWRVcCA9IFwiL2xhbmQvc3BlZWRVcFwiLFxyXG4gICAgLyoqIFx1NzlDRFx1NUI1MFx1ODlFM1x1OTUwMSAqL1xyXG4gICAgc2VlZHNVbmxvY2sgPSBcIi9zZWVkcy91bmxvY2tcIixcclxuICAgIC8qKiBcdTgzQjdcdTUzRDZcdTgwQ0NcdTUzMDVcdTUyMTdcdTg4Njg9PiBcdTY2ODJcdTY1RjZcdThGRDlcdTRFMkFcdTYzQTVcdTUzRTNcdTRFMERcdTk3MDBcdTg5ODFcdTc1MjggKi9cclxuICAgIHdhcmVob3VzZSA9IFwiL3dhcmVob3VzZVwiLFxyXG4gICAgLyoqIFx1ODBDQ1x1NTMwNVx1NTU0Nlx1NTRDMVx1NTFGQVx1NTUyRSAqL1xyXG4gICAgd2FyZWhvdXNlU2VsbCA9IFwiL3dhcmVob3VzZS9zZWxsXCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU4RDJEXHU0RTcwICovXHJcbiAgICBwZXRCdXkgPSBcIi9wZXQvYnV5XCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU0RjY5XHU2MjM0ICovXHJcbiAgICBwZXRXZWFyID0gXCIvcGV0L3dlYXJcIixcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdThEMkRcdTRFNzAgKi9cclxuICAgIGZlZWRCdXkgPSBcIi9mZWVkL2J1eVwiLFxyXG4gICAgLyoqIFx1NEVGQlx1NTJBMVx1NTk1Nlx1NTJCMVx1OTg4Nlx1NTNENiAqL1xyXG4gICAgdGFza1Jld2FyZCA9IFwiL3Rhc2svcmV3YXJkXCIsXHJcbiAgICAvKiogXHU5MEJCXHU1QzQ1ICovXHJcbiAgICBuZWlnaGJvciA9IFwiL25laWdoYm9yXCIsXHJcbiAgICAvKiogXHU1MDc3XHU4M0RDICovXHJcbiAgICBsYW5kU3RlYWwgPSBcIi9sYW5kL3N0ZWFsXCIsXHJcbiAgICAvKiogXHU1MzU1XHU3MkVDXHU2N0U1XHU3NzBCXHU1RTdGXHU1NDRBICovXHJcbiAgICBhZCA9IFwiL2FkXCIsXHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU0RjUzXHU1MjlCXHU4RDJEXHU0RTcwICovXHJcbiAgICB2aXRhbGl0eUJ1eSA9IFwiL3ZpdGFsaXR5L2J1eVwiLFxyXG4gICAgLyoqIFx1NTZERVx1ODFFQVx1NURGMVx1NUJCNiAqL1xyXG4gICAgZ29Ib21lID0gXCIvZ29Ib21lXCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU1MjIwXHU5NjY0ICovXHJcbiAgICBmcmllbmREZWxldGUgPSBcIi9mcmllbmQvZGVsZXRlXCIsXHJcbiAgICAvKiogXHU5MDFBXHU4RkM3XHU1OTdEXHU1M0NCXHU3NTMzXHU4QkY3ICovXHJcbiAgICBmcmllbmRBbGxvdyA9IFwiL2ZyaWVuZC9hbGxvd1wiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1NzUzM1x1OEJGNyAqL1xyXG4gICAgZnJpZW5kQXBwbHkgPSBcIi9mcmllbmQvYXBwbHlcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTY0MUNcdTdEMjIgKi9cclxuICAgIGZyaWVuZFNlYXJjaCA9IFwiL2ZyaWVuZC9zZWFyY2hcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZExpc3QgPSBcIi9mcmllbmQvbGlzdFwiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1OTA4MFx1OEJGN1x1ODAwNVx1N0VEMVx1NUI5QSAqL1xyXG4gICAgZnJpZW5kSW52aXRlUGVvcGxlID0gXCIvZnJpZW5kL2ludml0ZS9wZW9wbGVcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZEludml0ZUxpc3QgPSBcIi9mcmllbmQvaW52aXRlL2xpc3RcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTU5NTZcdTUyQjFcdUZGMENcdTk4ODZcdTUzRDYgKi9cclxuICAgIGZyaWVuZEludml0ZVJlY2VpdmUgPSBcIi9mcmllbmQvaW52aXRlL3JlY2VpdmVcIixcclxuICAgIC8qKiBcdThCQkZcdTk1RUVcdTU5N0RcdTUzQ0JcdTVCQjZcdTkxQ0MgKi9cclxuICAgIGZyaWVuZFZpc2l0ID0gXCIvZnJpZW5kL3Zpc2l0XCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU1MjA2XHU0RUFCICovXHJcbiAgICBmcmllbmRTaGFyZSA9IFwiL2ZyaWVuZC9zaGFyZVwiLFxyXG4gICAgLyoqIFx1OTBBRVx1NEVGNlx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbWFpbExpc3QgPSBcIi9tYWlsL2xpc3RcIixcclxuICAgIC8qKiBcdTkwQUVcdTRFRjZcdTk2MDVcdThCRkIgKi9cclxuICAgIG1haWxSZWFkID0gXCIvbWFpbC9yZWFkXCIsXHJcbiAgICAvKiogXHU5MEFFXHU0RUY2XHU1MjIwXHU5NjY0ICovXHJcbiAgICBtYWlsRGVsZXRlID0gXCIvbWFpbC9kZWxldGVcIixcclxuICAgIC8qKiBcdTYzRDBcdTczQjAgKi9cclxuICAgIHdpdGhkcmF3ID0gXCIvd2l0aGRyYXdcIixcclxuICAgIC8qKiBcdTYzRDBcdTczQjBcdThCQjBcdTVGNTUqL1xyXG4gICAgd2l0aGRyYXdSZWNvcmQgPSBcIi93aXRoZHJhdy9yZWNvcmRcIixcclxuICAgIC8qKiBcdTVCQTJcdTYyMzdcdTdBRUZcdTcyNDhcdTY3MkMgKi9cclxuICAgIGNvbmZpZ0NsaWVudCA9IFwiL2NvbmZpZy9jbGllbnRcIixcclxuICAgIC8qKiBcdTVGMTVcdTVCRkNcdTY1NzBcdTYzNkUgKi9cclxuICAgIGd1aWRlID0gXCIvZ3VpZGVcIixcclxufVxyXG4iLCAiaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgUGV0U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BldFNlcnZpY2VcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCIuL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi9SZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTUzNEZcdThCQUVcdTY1NzBcdTYzNkVcdTU5MDRcdTc0MDZcclxuICovXHJcbmNsYXNzIEh0dHBEYXRhQ29udHJvbCB7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU4RjZDXHU1M0QxICovXHJcbiAgICBmb3J3YXJkKGQ6IHtcclxuICAgICAgICBhcGk6IEFwaUh0dHA7XHJcbiAgICAgICAgZGF0YTogYW55O1xyXG4gICAgICAgIHJlc29sdmVFdmVudD86IEZ1bmN0aW9uO1xyXG4gICAgICAgIC8vIFRPRE8gXHU4RkQ5XHU0RTJBXHU1M0VGXHU4MEZEXHU2NzA5XHU1RjAyXHU2QjY1XHU5MUNEXHU1OTBEXHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU2MzkyXHU2N0U1XHU0RTAwXHU0RTBCXHJcbiAgICAgICAgZXJyb3I/OiBGdW5jdGlvbjtcclxuICAgIH0pIHtcclxuICAgICAgICBzd2l0Y2ggKGQuYXBpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sb2dpbjpcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxvZ2luVG9rZW46XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRTcGVlZFVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5hZDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZEdhdGhlcjpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDAzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAuZmVlZEJ1eTpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA2KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFNvdzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAud2FyZWhvdXNlU2VsbDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA4KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnNlZWRzVW5sb2NrOlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRTb3c6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFVubG9jazpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5wZXRCdXk6XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC52aXRhbGl0eUJ1eTpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC50YXNrUmV3YXJkOlxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFVwZ3JhZGU6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAub3JkZXJSZXdhcmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGQucmVzb2x2ZUV2ZW50KSBkLnJlc29sdmVFdmVudChkLmRhdGEpO1xyXG5cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KGQuYXBpLCBkLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKGVycm9yQ29kZTogbnVtYmVyLCBkYXRhOiBhbnkpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAvLyB0ZXh0OiBgZXJyb3JDb2RlICR7ZXJyb3JDb2RlfSAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWAsXHJcbiAgICAgICAgICAgIHRleHQ6IGAke2RhdGE/Lm1lc3NhZ2V9YCxcclxuICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2N0JcdTVGNTVcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvZ2luKGQ6IE5ldEluaXQpIHtcclxuICAgICAgICBpZiAoIWQpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTc2N0JcdTVGNTVcdTk1MTlcdThCRUYsXHU4QkY3XHU5MUNEXHU4QkQ1XCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBsYW50U2VydmljZS5pbml0KGQuc2VlZHMpO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UuaW5pdChkLndhcmVob3VzZSk7XHJcbiAgICAgICAgVXNlckluZm8ua2V5ID0gZC51c2VySW5mby5rZXk7XHJcbiAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IGQudXNlckluZm8uZGlhbW9uZDtcclxuICAgICAgICBVc2VySW5mby5nb2xkID0gZC51c2VySW5mby5nb2xkO1xyXG4gICAgICAgIFVzZXJJbmZvLm5pY2tuYW1lID0gZC51c2VySW5mby5uaWNrbmFtZTtcclxuICAgICAgICBVc2VySW5mby5hdmF0YXIgPSBkLnVzZXJJbmZvLmF2YXRhcjtcclxuICAgICAgICBVc2VySW5mby5vcmRlckxldmVsID0gZC5vcmRlcklkIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8ud2FyZVBldElkID0gZC53ZWFyUGV0Py5pZDtcclxuICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IGQud2VhclBldD8udml0YWxpdHkgfHwgMDtcclxuICAgICAgICBVc2VySW5mby5kaWdlc3RDb3VudERvd24gPSBkLndlYXJQZXQ/LmRpZ2VzdENvdW50RG93biB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcyB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnNpZ25JbkRheXMgPSBkLnNpZ25JbkRheXMgfHwgMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5JZCA9IGQuc2lnbkluSWQ7XHJcbiAgICAgICAgVXNlckluZm8uc3BlZWRVcFRpbWVzID0gZC5zcGVlZFVwVGltZXM7XHJcbiAgICAgICAgVXNlckluZm8udml0YWxpdHkgPSBkLnVzZXJJbmZvLnZpdGFsaXR5O1xyXG4gICAgICAgIFVzZXJJbmZvLmludml0ZVBlb3BsZSA9IGQudXNlckluZm8uaW52aXRlUGVvcGxlO1xyXG4gICAgICAgIFVzZXJJbmZvLmlzRmlyc3RUaW1lID0gZC51c2VySW5mby5pc0ZpcnN0VGltZTtcclxuICAgICAgICBVc2VySW5mby5ndWlkZURhdGEgPSBkLnVzZXJJbmZvLmd1aWRlRGF0YSB8fCBcIlwiO1xyXG4gICAgICAgIFVzZXJJbmZvLndpdGhkcmF3ID0gZC53aXRoZHJhdztcclxuICAgICAgICBQZXRTZXJ2aWNlLmluaXQoZC5wZXRzKTtcclxuICAgICAgICBUYXNrU2VydmljZS5pbml0KGQudGFza3MpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGQudG9rZW4pIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInRva2VuXCIsIGQudG9rZW4pO1xyXG4gICAgICAgIExhbmRTZXJ2aWNlLmluaXQoZC5sYW5kcyk7XHJcblxyXG4gICAgICAgIENvcmUuYXVkaW8uc291bmRNdXRlZCA9IExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnNvdW5kO1xyXG4gICAgICAgIENvcmUuYXVkaW8ubXVzaWNNdXRlZCA9IExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLm11c2ljO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luT3V0KCkge1xyXG4gICAgICAgIFBsYW50U2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBQZXRTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgTGFuZFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBUYXNrU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgZmFsc2UpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInRva2VuXCIsIG51bGwpO1xyXG4gICAgICAgIFVzZXJJbmZvLmtleSA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8ubmlja25hbWUgPSBcIlwiO1xyXG4gICAgICAgIFVzZXJJbmZvLmF2YXRhciA9IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8ud2FyZVBldElkID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gMDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8udml0YWxpdHkgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmludml0ZVBlb3BsZSA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8uaXNGaXJzdFRpbWUgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLndpdGhkcmF3ID0gW107XHJcbiAgICAgICAgVXNlckluZm8uZ3VpZGVEYXRhID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OUVEOFx1OEJBNFx1NzUyOFx1Njc2NVx1NjZGNFx1NjVCMFx1NzUyOFx1NjIzN1x1OTFEMVx1NUUwMVx1N0I0OVxyXG4gICAgICogQHBhcmFtIGRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVVc2VySW5mbyhkOiBSZXR1cm5Vc2VySW5mbykge1xyXG4gICAgICAgIFVzZXJJbmZvLmdvbGQgPSBkLmdvbGQ7XHJcbiAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IGQuZGlhbW9uZDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IGQuYWR2ZXJ0aXNlVGltZXMgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NEVGQlx1NTJBMVx1OEZEQlx1NUVBNlxyXG4gICAgICogQHBhcmFtIGlkIFx1NEVGQlx1NTJBMWlkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGFza1VwZGF0ZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEh0dHBEYXRhQ29udHJvbCgpO1xyXG4iLCAiaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwic3JjL2NvcmUvSW5zdGFuY2VcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCIuL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCIuL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cERhdGFDb250cm9sIGZyb20gXCIuL0h0dHBEYXRhQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuaW50ZXJmYWNlIEh0dHBTZW5kRGF0YSB7XHJcbiAgICBhcGk6IEFwaUh0dHA7XHJcbiAgICBkYXRhPzogYW55O1xyXG4gICAgbWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nO1xyXG4gICAgaGVhZGVycz86IGFueVtdIHwgbnVsbDtcclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTk1MTlcdThCRUZcdTU2REVcdThDMDMgKi9cclxuICAgIGVycm9yPzogeyAoY29kZTogbnVtYmVyLCBkYXRhOiBhbnkpOiB2b2lkIH07XHJcbiAgICBiYXNlVXJsPzogc3RyaW5nO1xyXG4gICAgLyoqIFx1NTNEMVx1OEQ3N1x1OEJGN1x1NkM0Mlx1NTI0RCAqL1xyXG4gICAgYmVmb3JlPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTc3RURcdTk0RkVcdTYzQTVcdTYzQTdcdTUyMzZcdTU2NjhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBDb250cm9sIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IEh0dHBDb250cm9sO1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRGF0YTogSHR0cFNlbmREYXRhO1xyXG5cclxuICAgIC8qKiBcdTRFOEJcdTRFRjZcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgZXZlbnRNYXA6IE1hcDxzdHJpbmcsIFhNTEh0dHBSZXF1ZXN0PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBpbml0KHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSByZXNvbHZlXHJcbiAgICAgKiBAcGFyYW0gcmVqZWN0XHJcbiAgICAgKiBAcGFyYW0gYWQgXHU2NjJGXHU1NDI2XHU2NjJGXHU1RTdGXHU1NDRBXHU3Njg0XHU2NTcwXHU2MzZFXHU1MzRGXHU4QkFFXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVhocihyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgYWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHhtbGh0dHAuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHhtbGh0dHAucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAxMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVIYW5kbGVyKGRhdGEsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJPbmVJbkV2ZW50TWFwKHhtbGh0dHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhtbGh0dHAucmVzcG9uc2VUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZCA9IEpTT04ucGFyc2UoeG1saHR0cC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGAke3htbGh0dHAucmVzcG9uc2VUZXh0fSBcdThCRjdcdTkxQ0RcdThCRDVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5jb2RlID0gOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVIYW5kbGVyKGQsIHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyT25lSW5FdmVudE1hcCh4bWxodHRwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXhtbGh0dHAuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IDQwNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiBcIlx1NjcwRFx1NTJBMVx1NTY2OFx1NjcyQVx1NTRDRFx1NUU5NFx1RkYwQ1x1OEJGN1x1OTFDRFx1OEJENVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck9uZUluRXZlbnRNYXAoeG1saHR0cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB4bWxodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjIwXHU5NjY0XHU5NjFGXHU1MjE3XHU0RThCXHU0RUY2XHJcbiAgICAgKiBAcGFyYW0geG1sXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2xlYXJPbmVJbkV2ZW50TWFwKHhtbDogWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYXAuZm9yRWFjaCgoZSwgdikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgPT0geG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNlbmQoZGF0YTogSHR0cFNlbmREYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhLm1ldGhvZCkgZGF0YS5tZXRob2QgPSBcInBvc3RcIjtcclxuICAgICAgICBpZiAoIWRhdGEucmVzcG9uc2VUeXBlKSBkYXRhLnJlc3BvbnNlVHlwZSA9IFwianNvblwiO1xyXG4gICAgICAgIGlmICghZGF0YS5iYXNlVXJsKSBkYXRhLmJhc2VVcmwgPSB0aGlzLmJhc2VVcmw7XHJcblxyXG4gICAgICAgIGxldCB1cmkgPSBkYXRhLmJhc2VVcmwgKyBkYXRhLmFwaTtcclxuXHJcbiAgICAgICAgbGV0IHNlbmREYXRhOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5kYXRhKS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5wdXNoKGAke2R9PSR7ZGF0YS5kYXRhW2RdfWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VuZERhdGFTdHJpbmcgPSBzZW5kRGF0YS5qb2luKFwiJlwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRNYXAuZ2V0KHVyaSArIHNlbmREYXRhU3RyaW5nKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGE/LnR5cGUgPT0gQ29uZmlnR2FtZS5BcGlUeXBlQUQpIHtcclxuICAgICAgICAgICAgY29uc3QgYWREYXRhID0gYXdhaXQgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoYWREYXRhPy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGAke2FkRGF0YS5kYXRhW1wibWVzc2FnZVwiXX1bJHthZERhdGEuY29kZX1dYCxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeGhyID0gdGhpcy5jcmVhdGVYaHIocmVzb2x2ZSwgcmVqZWN0LCBhZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlbmREYXRhID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5iZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYmVmb3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YS5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmhlYWRlcnMgPSBbXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbn1gXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBgJWMgPT0+IHNlbmQgJWMke2RhdGEuYXBpfSAlYyR7SlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhKX1gLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiM4MmNjZGQ7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6I2ViNGQ0Yjtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojZjhjMjkxO2ZvbnQtd2VpZ2h0OjcwMDtgXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRhdGEuYXBpKSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuSGludFZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJtOiB7IHRleHQ6IGBodHRwIFx1NTczMFx1NTc0MFx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QWAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVyaSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBgQmVhcmVyICR7TG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkudG9rZW59YCk7XHJcblxyXG4gICAgICAgICAgICB4aHIuc2VuZChzZW5kRGF0YVN0cmluZyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFwLnNldCh1cmkgKyBzZW5kRGF0YVN0cmluZywgeGhyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXBsZXRlSGFuZGxlcihlLCByZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChlLmNvZGUpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGUuY29kZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbmREYXRhPy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kRGF0YS5lcnJvcihlLmNvZGUsIGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgSHR0cERhdGFDb250cm9sLmVycm9yKGUuY29kZSwgZS5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBgJWMgPD09IGJhY2sgJWMke3RoaXMuc2VuZERhdGEuYXBpfSBgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiNiOGU5OTQ7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6Izc4ZTA4Zjtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGUuZGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBIdHRwRGF0YUNvbnRyb2wuZm9yd2FyZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiB0aGlzLnNlbmREYXRhLmFwaSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUV2ZW50OiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHByb2Nlc3NIYW5kbGVyKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy8gIEFkZExhbmRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRMYW5kVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvc3RJY29uLCB0aXBzOlwiXHU0RUY3XHU2ODNDXHU1NkZFXHU2ODA3XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjb3N0SWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29zdEZvbnQsIHRpcHM6XCJcdTRFRjdcdTY4M0NGb250XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjb3N0Rm9udDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRCdG4sIHRpcHM6XCJcdTVFN0ZcdTU0NEFcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgaWQ6IG51bWJlcjsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBwcml2YXRlIGxhbmREYXRhOiBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZERhdGEgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwidW5sb2NrX2xhbmRfY29zdFwiKS52YWx1ZVtcclxuICAgICAgICAgICAgTGFuZFNlcnZpY2UubGlzdC5zaXplXHJcbiAgICAgICAgXSBhcyBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcbiAgICAgICAgdGhpcy5jb3N0SWNvbi5za2luID0gdGhpcy5sYW5kRGF0YS5vYmouaWNvbjtcclxuICAgICAgICB0aGlzLmNvc3RGb250LnZhbHVlID0gdGhpcy5sYW5kRGF0YS5jb3VudCArIFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYWRCdG4uZGlzYWJsZWQgPSAhVXNlckluZm8uYWR2ZXJ0aXNlVGltZXM7XHJcbiAgICAgICAgdGhpcy5hZEJ0bi5hY3RpdmUgPSBCb29sZWFuKFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFkZExhbmRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29zdF9nb2xkXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmREYXRhLmNvdW50ID4gVXNlckluZm8uZ29sZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEub2JqLmlkID09IENvbmZpZ0dhbWUuZGlhbW9uZElkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5jb3VudCA+IFVzZXJJbmZvLmRpYW1vbmRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5NEJCXHU3N0YzXHU0RTBEXHU4REIzXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVW5sb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZF9idG5cIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVW5sb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWRkTGFuZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgTGFuZE9iaiB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vICBCdXlWaXRhbGl0eVZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1eVZpdGFsaXR5VmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlTGFiZWwsIHRpcHM6XCJcdTRFRjdcdTY4M0NcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlTGFiZWw6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlSWNvbiwgdGlwczpcIlx1NEVGN1x1NjgzQ2ljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRCdG4sIHRpcHM6XCJcdTVFN0ZcdTU0NEFcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgY2FsbDogRnVuY3Rpb24gfTtcclxuICAgIHByaXZhdGUgY29zdEdvbGRDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIG9uT3BlbmVkKGU6IHsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgbGV0IGNvc3RHb2xkQ291bnQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwidml0YWxpdHlCdXlDb3N0R29sZFwiKS52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgdGhpcy5jb3N0R29sZENvdW50ID0gY29zdEdvbGRDb3VudDtcclxuICAgICAgICB0aGlzLnByaWNlTGFiZWwudGV4dCA9IGBcdTRFRjdcdTY4M0NcdUZGMUEke2Nvc3RHb2xkQ291bnR9YDtcclxuXHJcbiAgICAgICAgdGhpcy5hZEJ0bi5kaXNhYmxlZCA9ICFVc2VySW5mby5hZHZlcnRpc2VUaW1lcztcclxuICAgICAgICB0aGlzLmFkQnRuLmFjdGl2ZSA9IEJvb2xlYW4oVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5QWRCdG5cIjpcclxuICAgICAgICAgICAgY2FzZSBcImJ1eUJ0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnZpdGFsaXR5ID49IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ2aXRhbGl0eUxpbWl0XCIpLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTRGNTNcdTUyOUJcdTVERjJcdTZFRTFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gXCJidXlCdG5cIiAmJiBVc2VySW5mby5nb2xkIDwgdGhpcy5jb3N0R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC52aXRhbGl0eUJ1eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwiYnV5QnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBnb2xkOiAwOyBkaWFtb25kOiAwOyBhZHZlcnRpc2VUaW1lczogMDsgdml0YWxpdHk6IDAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudml0YWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwiYnV5QnRuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwicGh5c2ljYWxzdHJlbmd0aFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5CdXlWaXRhbGl0eVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy8gIEZpZWxkTGV2ZWxVcFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkTGV2ZWxVcFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxhYmVsLCB0aXBzOlwiXHU0RUY3XHU2ODNDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxhYmVsOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUljb24sIHRpcHM6XCJcdTRFRjdcdTY4M0NpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmx2LCB0aXBzOlwiXHU3QjQ5XHU3RUE3XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsdjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cmV3YXJkLCB0aXBzOlwiXHU1OTU2XHU1MkIxXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSByZXdhcmQ6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByb2JhYmlsaXR5LCB0aXBzOlwiXHU2OTgyXHU3Mzg3XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcm9iYWJpbGl0eTogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkQnRuLCB0aXBzOlwiXHU1RTdGXHU1NDRBXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7IG9iajogTGFuZE9iajsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBvbk9wZW5lZChlOiB7IG9iajogTGFuZE9iajsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgbGV0IG5leHRMYW5kID0gVGFibGVBbmFseXplLnRhYmxlKFwibGFuZExldmVsXCIpLmdldChlLm9iai5sZXZlbCArIDEpO1xyXG4gICAgICAgIHRoaXMucHJpY2VMYWJlbC50ZXh0ID0gYFx1NEVGN1x1NjgzQ1x1RkYxQSR7bmV4dExhbmQuY29zdC5jb3VudH1gO1xyXG4gICAgICAgIHRoaXMucHJpY2VJY29uLnNraW4gPSBuZXh0TGFuZC5jb3N0Lm9iai5pY29uO1xyXG5cclxuICAgICAgICB0aGlzLmx2LnRleHQgPSBgJHtlLm9iai5sZXZlbCArIDF9XHU3RUE3YDtcclxuICAgICAgICB0aGlzLnJld2FyZC50ZXh0ID0gYCske051bWJlcigobmV4dExhbmQuZ2FpbiAqIDEwMCkudG9GaXhlZCgyKSl9JWA7XHJcbiAgICAgICAgdGhpcy5wcm9iYWJpbGl0eS50ZXh0ID0gYCske051bWJlcigobmV4dExhbmQucHJvYmFiaWxpdHkgKiAxMDApLnRvRml4ZWQoMikpfSVgO1xyXG5cclxuICAgICAgICB0aGlzLmFkQnRuLmRpc2FibGVkID0gIVVzZXJJbmZvLmFkdmVydGlzZVRpbWVzO1xyXG4gICAgICAgIHRoaXMuYWRCdG4uYWN0aXZlID0gQm9vbGVhbihVc2VySW5mby5hZHZlcnRpc2VUaW1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GaWVsZExldmVsVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidXBncmFkZUJ0blwiOlxyXG4gICAgICAgICAgICBjYXNlIFwidXBncmFkZUFkQnRuXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFVwZ3JhZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZ2F0aGVyXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLm9iai5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQubmFtZSA9PSBcInVwZ3JhZGVCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBDb25maWdHYW1lLkFwaVR5cGVBRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gXCJ1cGdyYWRlQWRCdG5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCBlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcIkxhbmR1cGdyYWRpbmdcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNEZXNjVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc0Rlc2NWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwYW5lbE5vZGUsIHRpcHM6XCJcdTZFREFcdTUyQThcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgcGFuZWxOb2RlOiBMYXlhLlBhbmVsO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsTm9kZS52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCkge1xyXG4gICAgICAgIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgQXBwRXZlbnRNYXAgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNSZXdhcmRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzUmV3YXJkVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aW52aXRlQm94LCB0aXBzOlwiXHU2NTc0XHU2NTcwXHU3QzdCXHU1NzhCXHU3OTNBXHU0RjhCXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpbnZpdGVCb3g6IExheWEuQm94O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmludml0ZUlucHV0LCB0aXBzOlwiXHU4RjkzXHU1MTY1XHU5MDgwXHU4QkY3XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpbnZpdGVJbnB1dDogTGF5YS5UZXh0SW5wdXQ7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMaXN0LCB0aXBzOlwiXHU4RjkzXHU1MTY1XHU5MDgwXHU4QkY3XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxpc3Q6IExheWEuTGlzdDtcclxuXHJcbiAgICBwcml2YXRlIGludml0ZUxpc3Q6IEludml0ZURhdGFbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgcmV3YXJkVmFsdWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHByb3BvcnRpb246IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIGNhbGw6IEZ1bmN0aW9uO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QuYXJyYXkgPSBuZXcgQXJyYXkoMyk7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW5lZChkYXRhOiB7IGxpc3Q6IFtdOyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5pbnZpdGVMaXN0ID0gZGF0YS5saXN0IHx8IFtdO1xyXG4gICAgICAgIHRoaXMuY2FsbCA9IGRhdGEuY2FsbDtcclxuICAgICAgICBpZiAoVXNlckluZm8uaW52aXRlUGVvcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pbnZpdGVCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJld2FyZFZhbHVlID0gKFxyXG4gICAgICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiSW52aXRhdGlvbl9yZXdhcmRzXCIpLnZhbHVlIGFzIFJld2FyZEN1cnJlbmN5QmFzZVxyXG4gICAgICAgICkuY291bnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpdGhkcmF3YWwgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwid2l0aGRyYXdhbFwiKS52YWx1ZSBhcyBzdHJpbmdbXTtcclxuICAgICAgICB0aGlzLnByb3BvcnRpb24gPSBOdW1iZXIod2l0aGRyYXdhbFsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzUmV3YXJkVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImludml0ZV9idG5cIjpcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAud3hTaGFyZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBkLmRhdGFbXCJtZXNzYWdlXCJdLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBkLmRhdGFbXCJtZXNzYWdlXCJdLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRTaGFyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN1Ym1pdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gKGUudGFyZ2V0IGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpdGhkcmF3KGkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU3M0IwXHJcbiAgICAgKiBAcGFyYW0gaVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB3aXRoZHJhdyhpOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlUmVjZWl2ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgaW5kZXg6IGkgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjNEMFx1NzNCMFx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlTGlzdFtpXS5yZWNlaXZlZFJld2FyZCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidG9wXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU3QjJDJHtpICsgMX1cdTRGNERgO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZV9ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkVmFsdWUgLyB0aGlzLnByb3BvcnRpb25cclxuICAgICAgICB9YDtcclxuXHJcbiAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX2V4dHJhY3RBY3RpdmUucG5nXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaW52aXRlTGlzdC5sZW5ndGggPiBpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludml0ZUxpc3RbaV0ucmVjZWl2ZWRSZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfY2FzaERvbmUucG5nXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IGk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYzRDBcdTRFQTRcdTdFRDFcdTVCOUFcdTYyMTFcdTc2ODRcdTkwODBcdThCRjdcdTRFQkFcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnZpdGVJbnB1dC50ZXh0IHx8ICF0aGlzLmludml0ZUlucHV0LnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5MDgwXHU4QkY3XHU3ODAxXHU0RTBEXHU4MEZEXHU0RTNBXHU3QTdBXHVGRjAxXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRJbnZpdGVQZW9wbGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLmludml0ZUlucHV0LnRleHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5pbnZpdGVQZW9wbGUgPSB0aGlzLmludml0ZUlucHV0LnRleHQ7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1N0VEMVx1NUI5QVx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsKSB0aGlzLmNhbGwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIik7XHJcbiAgICB9XHJcbn1cclxuIiwgImNvbnN0IGVudW0gRXJyb3JDb2RlIHtcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTRFM0FcdTdBN0EgKi9cclxuICAgIF8yMDAxID0gMjAwMSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JDb2RlO1xyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgRXJyb3JDb2RlIGZyb20gXCJzcmMvY29tbW9uL0Vycm9yQ29kZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UsIHsgTGFuZE9iaiB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxhbnREYXRhQmFzZSB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgTWFpblZpZXcsIHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwic3JjL3ZpZXcvTWFpblZpZXdcIjtcclxuaW1wb3J0IHsgU2hvcFZpZXdEYXRhIH0gZnJvbSBcInNyYy92aWV3L1Nob3BWaWV3XCI7XHJcblxyXG4vLyAgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbi8qKlxyXG4gKiBcdTc1MzBcdTU3MzBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlpY29uICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1ODI4Mlx1NzBCOSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBmaWVsZE5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NjcwOVx1NjkwRFx1NzI2OVx1NjVGNlx1NzY4NFx1OTYzNFx1NUY3MSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBzaGFkb3c6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZWxkRW1wdHlSZXMsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTU0MEVcdTU3MUZcdTU3MzBcdTdFQjlcdTc0MDZcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBmaWVsZEVtcHR5UmVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIFx1N0I0OVx1N0VBN1x1NTZGRVx1NzI0NyAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBsdk5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTAxMlx1OEJBMVx1NjVGNlx1NUJCOVx1NTY2OCovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHRpbWVCb3g6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIFx1NTAxMlx1OEJBMVx1NjVGNmxhYmVsICovXHJcbiAgICBwcml2YXRlIGNvdW50RG93bkxiOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU4OEM1XHU5OTcwICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHRvcFN0YXRlSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1ODhDNVx1OTk3MCAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSB1cEFuaTogTGF5YS5BbmltYXRpb24gPSBudWxsO1xyXG4gICAgLyoqIFx1NTFDRlx1NjVGNlx1OTVGNFx1NjNEMFx1NzkzQSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSByZWR1Y2VUaW1lOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6dW5sb2NrSWNvbiwgdGlwczpcIlx1NjJEM1x1NUM1NVx1NTcxRlx1NTczMGljb25cdTU3MzBcdTU3NDBcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSB1bmxvY2tJY29uOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZWxkSWQsIHRpcHM6XCJcdTU3MUZcdTU3MzBpZFwiLCB0eXBlOk51bWJlcix9Ki9cclxuICAgIGZpZWxkSWQ6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOGljb25cdTZENkVcdTUyQThcdTUyQThcdTc1M0IgKi9cclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uVHdlZW46IExheWEuVGltZUxpbmU7XHJcbiAgICAvKiogXHU2OTBEXHU3MjY5XHU1MkE4XHU3NTNCICovXHJcbiAgICBwcml2YXRlIHBsYW50SWNvblR3ZWVuOiBMYXlhLlRpbWVMaW5lO1xyXG5cclxuICAgIC8qKiBcdTVFRkFcdTdCNTFcdTRFMkQgKi9cclxuICAgIGJ1aWxkSW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1NzI4XHU1OTE2XHU5NzYyICovXHJcbiAgICBpc091dGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1M0VGXHU1MDc3ICovXHJcbiAgICBjYW5TdGVhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1ODhBQlx1NTA3N1x1NEVCQVx1NzY4NHVpZCAqL1xyXG4gICAgc3RlYWxVaWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGRhdGE6IExhbmRPYmo7XHJcblxyXG4gICAgbWFpblZpZXdDb206IE1haW5WaWV3O1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgbGFuZExpc3Q6IE1hcDxudW1iZXIsIExhbmRPYmo+O1xyXG4gICAgLyoqIFx1NjIxMFx1NzE5Rlx1NzY4NFx1NjVGNlx1OTVGNCAqL1xyXG4gICAgcHJpdmF0ZSBtYXR1cmVUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLmZpZWxkTm9kZSA9IDxMYXlhLkltYWdlPnRoaXMub3duZXI7XHJcbiAgICAgICAgdGhpcy5jb3VudERvd25MYiA9IHRoaXMudGltZUJveC5nZXRDaGlsZEJ5TmFtZShcImNvdW50RG93bkxiXCIpIGFzIGFueTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuaWNvbi5za2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGltZUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sdk5vZGUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBBbmkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVkdWNlVGltZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cEFuaS5vbihMYXlhLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBBbmkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWF0dXJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMudXBkYXRlX2ZpZWxkKVxyXG4gICAgdXBkYXRlRGF0YShkYXRhPzogeyBsaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPiB9KSB7XHJcbiAgICAgICAgaWYgKGRhdGE/Lmxpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdCA9IGRhdGEubGlzdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0ID0gTGFuZFNlcnZpY2UubGlzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmljb24ueSA9IDE2NDtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkTm9kZS5za2luID0gdGhpcy5maWVsZEVtcHR5UmVzO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKEJvb2xlYW4odGhpcy5kYXRhLnByb2R1Y3RJZCkpO1xyXG4gICAgICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkICYmIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCAqIDEwMDAgKyBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgLy9cdTYyMTBcdTk1N0ZcdTRFMkRcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YS5wcm9kdWN0SWQpLmdyb3dpbmdJY29uO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVJY29uU2tpbigzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZE5vZGUuc2tpbiA9IGBtYWluX3NjZW5lL2ltZ193YXN0ZWxhbmQucG5nYDtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNraW4gPSB0aGlzLnVubG9ja0ljb247XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi55ID0gMTEzO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4uY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFaWNvblx1NzY4NFx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dJY29uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmljb24udmlzaWJsZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTcyQjZcdTYwMDFpY29uXHU3RUI5XHU3NDA2XHJcbiAgICAgKiBAcGFyYW0gc2tpblR5cGUgMSBcdTZENDdcdTZDMzRcdTUyQTBcdTkwMUZcdTcyQjZcdTYwMDEgMiBcdTVFRkFcdTdCNTFcdTcyQjZcdTYwMDEgMyBcdTYyMTBcdTcxOUZcdTcyQjZcdTYwMDFcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGVJY29uU2tpbihza2luVHlwZTogMSB8IDIgfCAzKSB7XHJcbiAgICAgICAgc3dpdGNoIChza2luVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19zcGVlZFVwLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2xhbmRVcGRhdGVCdG4yLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2hhcnZlc3QucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk4NzZcdTkwRThpY29uXHU1MkE4XHU3NTNCXHJcbiAgICAgKi9cclxuICAgIHRvcFN0YXRlSWNvbkFuaShwbGF5OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24ueSA9IC0xMDc7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRvcFN0YXRlSWNvblR3ZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4gPSBMYXlhLlRpbWVMaW5lLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24sXHJcbiAgICAgICAgICAgICAgICB7IHk6IHRoaXMudG9wU3RhdGVJY29uLnkgLSA1MCB9LFxyXG4gICAgICAgICAgICAgICAgODAwLFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICApLnRvKHRoaXMudG9wU3RhdGVJY29uLCB7IHk6IHRoaXMudG9wU3RhdGVJY29uLnkgfSwgODAwKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RlYWxVaWQgJiYgIXRoaXMuZGF0YT8uY2FuU3RlYWwpIHtcclxuICAgICAgICAgICAgcGxheSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gcGxheTtcclxuICAgICAgICBpZiAocGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuLnJlc3VtZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTY1RjZcdTk1RjRcdTVCQjlcdTU2NjhcdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93VGltZUJveChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU5NjM0XHU1RjcxXHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1NoYWRvd0ljb24oc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmFjdGl2ZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY5MERcdTcyNjlcdTUyQThcdTc1M0JcdTY0QURcdTY1M0VcclxuICAgICAqIEBwYXJhbSBwbGF5XHJcbiAgICAgKi9cclxuICAgIHBsYW50SWNvbkFuaShwbGF5OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYW50SWNvblR3ZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4gPSBMYXlhLlRpbWVMaW5lLnRvKHRoaXMuaWNvbiwgeyBza2V3WDogMyB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMuaWNvbiwgeyBza2V3WDogLTMgfSwgMjAwMClcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLmljb24sIHsgc2tld1g6IDAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaWNvbi5za2V3WCA9IDA7XHJcblxyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoTWF0aC5yYW5kb20oKSAqIDEwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucGxhbnRJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5wbGFudEljb25Ud2Vlbi5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNvdW50RG93bigpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93bkxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPSBNYXRoLmNlaWwoKHRoaXMubWF0dXJlVGltZSAtIERhdGUubm93KCkpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0IDwgMCkgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duTGIudGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NjIxMFx1NzE5RiBcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNraW4gPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQodGhpcy5kYXRhPy5wcm9kdWN0SWQpPy5tYXR1cmVJY29uO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnVpbGRJbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVJY29uU2tpbigzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU3QjQ5XHU3RUE3XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlTGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5sdk5vZGUuc2tpbiA9IGBtYWluX3NjZW5lL2ltZ19sZXZlbCR7dGhpcy5kYXRhLmxldmVsfS5wbmdgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MUNGXHU2NUY2XHU5NUY0XHU4ODY4XHU3M0IwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVkdWNlVGltZUFuaTogTGF5YS5UaW1lTGluZTtcclxuICAgIC8qKlxyXG4gICAgICogXHU1MkEwXHU5MDFGXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLmxhbmRfc3BlZWRfdXApXHJcbiAgICBwcml2YXRlIHNwZWVkVXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YT8ubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0IC09IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJhbGxfc3BlZWRfdXBfdGltZVwiKVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ICogMTAwMCArIERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKDExKTtcclxuXHJcbiAgICAgICAgICAgIC8vXHU1MUNGXHU2NUY2XHU5NUY0XHU2M0QwXHU3OTNBXHJcbiAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmFscGhhID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLnkgPSAtMzk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWR1Y2VUaW1lQW5pKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lQW5pID0gTGF5YS5UaW1lTGluZS50byhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgeyB5OiAtNjksIGFscGhhOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMzAwXHJcbiAgICAgICAgICAgICAgICApLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IC0xMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZUFuaS5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU3QTdBXHU1NzFGXHU1NzMwXHJcbiAgICAgKi9cclxuICAgIGNsZWFyRmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wcm9kdWN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaWNvbi5za2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNsaWNrKCkge1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVhbEZvb2QodGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICAvL1x1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1NEU4Qlx1NEVGNlxyXG4gICAgICAgICAgICBpZiAodGhpcy5idWlsZEluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRhYmxlQW5hbHl6ZS50YWJsZShcImxhbmRMZXZlbFwiKS5nZXQodGhpcy5kYXRhLmxldmVsICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHRoaXMuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEubGV2ZWwrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy50dWRpc2hlbmdqaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cEFuaS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwQW5pLnBsYXkoMCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTZFRTFcdTdFQTdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcdTVERjJcdTZFRTFcdTdFQTdgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLmhpZGVHdWlkZUhhbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NTJBMFx1OTAxRlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU3BlZWRVcFZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlQWxsU3RhdGVJY29uKHRoaXMuZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NjUzNlx1ODNCN1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhbnRBbW91bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkID0gdGhpcy5kYXRhLnByb2R1Y3RJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZEdhdGhlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZ2F0aGVyXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvbGQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2ZXJ0aXNlVGltZXM6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRBbW91bnQgPSBkLmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmFkZChwcm9kdWN0SWQsIGQuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnNob3VjYWkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmQgPSBkLnJld2FyZERpYW1vbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHU2NTM2XHU4M0I3XHU3Njg0XHU2OTBEXHU3MjY5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW50T2JqID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHByb2R1Y3RJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3Q6IGFueVtdID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogcGxhbnRPYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHBsYW50QW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1x1ODNCN1x1NUY5N1x1NzY4NFx1OTRCQlx1NzdGM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXdhcmREaWFtb25kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdHYW1lLmRpYW1vbmRJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmREaWFtb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0RmxvYXRSZXdhcmRPYmpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGxhbnRPYmouZ2Fpbi5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3dpdGNoIChkLm9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjYXNlIENvbmZpZ0dhbWUuZGlhbW9uZElkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgVXNlckluZm8uZGlhbW9uZCArPSBkLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgQ29uZmlnR2FtZS5nb2xkSWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBVc2VySW5mby5nb2xkICs9IGQuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NzlDRFx1ODNEQ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHU4OUUzXHU5NTAxXHU1NzFGXHU1NzMwXHJcbiAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20uaGlkZUd1aWRlSGFuZCgpO1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQWRkTGFuZFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5maWVsZElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZmllbGRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0dXJlVGltZUxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhbmRTZXJ2aWNlLmFkZExhbmQodGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlSGl0TGFuZEFkZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc293KCkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywge1xyXG4gICAgICAgICAgICBwYXJtOiA8U2hvcFZpZXdEYXRhPntcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgcGFybTogeyBsYW5kSWQ6IHRoaXMuZmllbGRJZCB9LFxyXG4gICAgICAgICAgICAgICAgY2FsbDogKGQ6IFBsYW50RGF0YUJhc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvd1BsYW50KGQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzb3dQbGFudChkOiBQbGFudERhdGFCYXNlKSB7XHJcbiAgICAgICAgdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKS5wcm9kdWN0SWQgPSBkLmJhc2UuaWQ7XHJcbiAgICAgICAgdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKS5tYXR1cmVUaW1lTGVmdCA9IGQuYmFzZS5tYXR1cmVfdGltZTtcclxuICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBkLmJhc2UubWF0dXJlX3RpbWUgKiAxMDAwICsgRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKTtcclxuICAgICAgICB0aGlzLnJlbmRlckRhdGEoKTtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnpob25nemhpKTtcclxuICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbih0aGlzLmRhdGEuaWQpO1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDExKTtcclxuICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwicGxhbnRcIiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MDc3XHU4M0RDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgc3RlYWxGb29kKGRhdGE6IExhbmRPYmopIHtcclxuICAgICAgICBpZiAoIWRhdGEucHJvZHVjdElkIHx8IGRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblN0ZWFsIHx8ICh0aGlzLnN0ZWFsVWlkICYmICF0aGlzLmRhdGE/LmNhblN0ZWFsKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NURGMlx1N0VDRlx1NEUwRFx1NTNFRlx1NTA3N1wiKTtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTdFRDlcdTYyMTFcdTc1NTlcdTcwQjlcdTU0MjdcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5nb3VqaWFvc2hlbmcpO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAvL1x1NTA3N1x1ODNEQ1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTdGVhbCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wibGFuZFN0ZWFsXCJdPntcclxuICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIHVpZDogdGhpcy5zdGVhbFVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFudElkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdml0YWxpdHk6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAvKiogXHU5ODlEXHU1OTE2XHU1OTU2XHU1MkIxICovXHJcbiAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJTdGVhbHZlZ2V0YWJsZXNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDA0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudml0YWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5TdGVhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NjUzNlx1ODNCN1x1NzY4NFx1NjkwRFx1NzI2OVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJld2FyZExpc3Q6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQucGxhbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnNob3VjYWkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmFkZCh0aGlzLmRhdGEucHJvZHVjdElkLCBkLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLnBsYW50SWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGQuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTk4OURcdUZGMENcdTg4QUJcdTcyRDdcdTU0QUNcdTRFODZ+fn5cdTZDQTFcdTUwNzdcdTc3NDB+XCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1x1OTg5RFx1NTkxNlx1NzY4NFx1OTRCQlx1NzdGM1x1NTk1Nlx1NTJCMVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkLnJld2FyZERpYW1vbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZGlhbW9uZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBkLnJld2FyZERpYW1vbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXdhcmRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5jYXRjaCgoY29kZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSBFcnJvckNvZGUuXzIwMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wbGFudEljb25Ud2VlbiA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgRmllbGRDb21wb25lbnQgZnJvbSBcInNyYy9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSwgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGFudERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1OThERVx1OTFEMVx1NUUwMVx1NjU3MFx1OTFDRlx1N0VEM1x1Njc4NFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBHZXRGbG9hdFJld2FyZE9iaiB7XHJcbiAgICAvKiogXHU4RDc3XHU3MEI5XHU1M0MyXHU4MDAzXHU4MjgyXHU3MEI5IFx1OUVEOFx1OEJBNFx1NEYxQVx1NjI4QVx1NjU3MFx1OTFDRlx1NzY4NFx1NEUxQ1x1ODk3Rlx1NTJBMFx1NTIzMFx1OEZEOVx1OTFDQ1x1RkYwQ1x1NjI0MFx1NEVFNVx1NEUwRFx1ODk4MVx1NkRGQkhCb3hcdTYyMTZcdTY2MkZWQm94ICovXHJcbiAgICBub2RlOiBMYXlhLkJveDtcclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIGxpc3Q6IHtcclxuICAgICAgICAvKiogXHU4OUUzXHU2NzkwXHU3Njg0XHU4RDQ0XHU2RTkwXHU2NTcwXHU2MzZFIFx1NUZDNVx1OTg3Qlx1ODk4MVx1NjcwOWljb24gKi9cclxuICAgICAgICBvYmo6IGFueTtcclxuICAgICAgICAvKiogXHU2NTcwXHU5MUNGICovXHJcbiAgICAgICAgY291bnQ6IG51bWJlcjtcclxuICAgICAgICAvKiogXHU3RUM4XHU3MEI5XHU0RjREXHU3RjZFIDEgXHU5MUQxXHU1RTAxIDIgXHU5NEJCXHU3N0YzIDMgXHU0RUQzXHU1RTkzICovXHJcbiAgICAgICAgcG9zVHlwZTogMSB8IDIgfCAzO1xyXG4gICAgfVtdO1xyXG4gICAgbm90Rmx5PzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTUyQThcdTc1M0JcdTY0QURcdTY1M0VcdTdFRDNcdTY3NUZcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbGxCYWNrPzogeyAoKTogdm9pZCB9O1xyXG59XHJcblxyXG4vLyAgTWFpblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5WaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIHN0YXRpYyBpbnN0OiBNYWluVmlldztcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkTGFuZExheWVyLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRMYW5kTGF5ZXI6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZE5vZGUsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmROb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb2xkTm9kZSwgdGlwczpcIlx1OTFEMVx1NUUwMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29sZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmF2YXRhck5vZGUsIHRpcHM6XCJcdTU5MzRcdTUwQ0ZcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGF2YXRhck5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRCb3gsIHRpcHM6XCJcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxhbmRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjZW50ZXJCb3gsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTUzM0FcdTU3REZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm9yZGVyQm94LCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJvdHRvbUJveCwgdGlwczpcIlx1NUU5NVx1OTBFOFx1NjMwOVx1OTRBRVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYm90dG9tQm94OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRVcExheWVyLCB0aXBzOlwiXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU3QTk3XHU1M0UzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsYW5kVXBMYXllcjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRvcExheWVyT25TdGFnZSwgdGlwczpcIlx1NTcyOFx1NEUzQlx1NTczQVx1NjY2Rlx1NEUwQVx1OTc2Mlx1NzY4NFx1NEUwMFx1NEUyQVx1NjcwMFx1NEUwQVx1NUM0Mlx1NzY4NFx1N0E3QVx1NUM0MlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdG9wTGF5ZXJPblN0YWdlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BHb2xkSWNvbiwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1OTFEMVx1NUUwMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcEdvbGRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BEaWFtb25kSWNvbiwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1OTRCQlx1NzdGM2ljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcERpYW1vbmRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp3YXJlaG91c2VCdG4sIHRpcHM6XCJcdTRFRDNcdTVFOTNcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHdhcmVob3VzZUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bW9uZXlMYiwgdGlwczpcIlx1N0VBMlx1NTMwNVx1NjU4N1x1Njg2M1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbW9uZXlMYjogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdUZGMENcdTk4REVcdTcyNjlcdTU0QzFcdTc2RjhcdTUxNzNcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnZXRSZXdhcmRQcmVmYWIsIHRpcHM6XCJcdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdTk4ODRcdThCQkVcIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgZ2V0UmV3YXJkUHJlZmFiOiBMYXlhLlByZWZhYiA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmxvYXRSZXdhcmRJY29uLCB0aXBzOlwiXHU1OTU2XHU1MkIxXHU5OERFXHU1MkE4XHU3NTNCaWNvblwiLCB0eXBlOlByZWZhYn0qL1xyXG4gICAgcHJpdmF0ZSBmbG9hdFJld2FyZEljb246IExheWEuUHJlZmFiID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb2xkQWRkLCB0aXBzOlwiXHU2REZCXHU1MkEwXHU5MUQxXHU1RTAxXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb2xkQWRkOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaWFtb25kQWRkLCB0aXBzOlwiXHU2REZCXHU1MkEwXHU5NEJCXHU3N0YzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkaWFtb25kQWRkOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6Z29Ib21lQnRuLCB0aXBzOlwiXHU4RkQ0XHU1NkRFXHU1QkI2XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb0hvbWVCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFueURvb3IsIHRpcHM6XCJcdTUzQkJcdThGNkNcdThGNkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFueURvb3I6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5Qm94LCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eUJveDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlCdXlCdG4sIHRpcHM6XCJcdTRGNTNcdTUyOUJcdThEMkRcdTRFNzBcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5QnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NUJBMFx1NzI2OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldEJveCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0Qm94OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTRFRkJcdTUyQTFcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0YXNrQm94LCB0aXBzOlwiXHU0RUZCXHU1MkExXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0YXNrQm94OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXAxLCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwMTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXAyLCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwMjogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXAzLCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwMzogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA0LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA1LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA2LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNjogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA3LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNzogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA4LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwODogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA5LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwOTogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTdFQzRcdTRFRjYgXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGxhbmRMaXN0OiBGaWVsZENvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgLyoqXHU2NjJGXHU1NDI2XHU1NzI4XHU1OTE2XHU5NzYyICovXHJcbiAgICBpc091dGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU3OUJCXHU1RjAwXHU1QkI2XHU3Njg0XHU2NUY2XHU5NUY0ICovXHJcbiAgICBwcml2YXRlIG91dGVyVGltZTogbnVtYmVyO1xyXG4gICAgLyoqXHU1M0JCXHU1OTdEXHU1M0NCIFx1NUJCNlx1NTAxMlx1OEJBMVx1NjVGNiAqL1xyXG4gICAgb3V0Q291bnREb3duTnVtYmVyID0gNjA7XHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICBNYWluVmlldy5pbnN0ID0gdGhpcztcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2xvYWRpbmdCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3dvb2R0aXRsZS5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX3N0b3JlSG91c2VCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlYmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19zaGVsZi5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmcucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2ltZ19sYW5kQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob3VzZXRvcC5wbmdcIixcclxuICAgICAgICAgICAgLy8gLy8gXCJyZXMvaW1nX2hvbWVwYWdlQmczLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyAvLyBcInJlcy9pbWdfaG9tZXBhZ2VCZzIucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIC8vIFwicmVzL2ltZ19ob21lcGFnZUJnMS5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX2Zhcm1sYW5kTG9nby5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUucG5nXCIsXHJcbiAgICAgICAgXS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmVuZHNXaXRoKFwicG5nXCIpKSBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHJcbiAgICAgICAgbGV0IG9rID0gZmFsc2UsXHJcbiAgICAgICAgICAgIHN0ZXAgPSAwO1xyXG4gICAgICAgIGlmIChVc2VySW5mby5ndWlkZURhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLmd1aWRlRGF0YS5zcGxpdChcIlwiKS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZCA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXArKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChzdGVwID49IDkpIHtcclxuICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVVzZXJJbmZvLmd1aWRlRGF0YS5sZW5ndGggfHwgIW9rKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5HdWlkZVZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA5LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVHdWlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVHdWlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ndWlkSGFuZEFuaW1hdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZ3VpZGVIYW5kLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnRvcExheWVyT25TdGFnZSk7XHJcbiAgICAgICAgKHRoaXMub3JkZXJCb3guZ2V0Q2hpbGRCeU5hbWUoXCJmcmllbmRfbmFtZVwiKSBhcyBMYXlhLkxhYmVsKS52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52aXRhbGl0eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nb0hvbWVCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGFuZEJveC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QucHVzaCh0aGlzLmxhbmRCb3guZ2V0Q2hpbGRBdCh4KS5nZXRDb21wb25lbnQoRmllbGRDb21wb25lbnQpKTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5tYWluVmlld0NvbSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhbmRMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuZmllbGRJZCAtIGIuZmllbGRJZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfZmllbGQpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhpdExhbmRBZGQoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGxTdGF0ZUljb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjcmVnaW9uIFx1NUY4NVx1NjczQVx1NUYxNVx1NUJGQ1xyXG5cclxuICAgIHByaXZhdGUgZ3VpZEhhbmRBbmk6IExheWEuVGltZUxpbmU7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z3VpZGVIYW5kLCB0aXBzOlwiXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHU2MjRCXHU2MzA3XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBndWlkZUhhbmQ6IExheWEuU3ByaXRlID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogXHU1Rjg1XHU2NzNBXHU1MjlGXHU4MEZEXHU1RjE1XHU1QkZDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGltZUd1aWRlKCkge1xyXG4gICAgICAgIExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLnRpbWVHdWlkZVRvdWNoKTtcclxuICAgICAgICB0aGlzLnRpbWVHdWlkZVRvdWNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lR3VpZGVUb3VjaCgpIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMudGltZUd1aWRlQWN0aW9uKTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTUwMDAsIHRoaXMsIHRoaXMudGltZUd1aWRlQWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGd1aWRJZExpc3QgPSBbMSwgMiwgMywgNV07XHJcbiAgICBwcml2YXRlIGhhc0d1aWRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lR3VpZGVBY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzR3VpZGUgfHwgdGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lR3VpZGVUb3VjaCgpO1xyXG4gICAgICAgIHRoaXMuZ3VpZGVIYW5kLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlR3VpZGVUYXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUd1aWRlSGFuZCgpIHtcclxuICAgICAgICB0aGlzLmd1aWRlSGFuZC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lR3VpZGUoKTtcclxuICAgICAgICB0aGlzLmhhc0d1aWRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVHdWlkZVRhc2soKSB7XHJcbiAgICAgICAgbGV0IGxhbmRFbXB0eSA9IGZhbHNlLFxyXG4gICAgICAgICAgICBsYW5kOiBGaWVsZENvbXBvbmVudCxcclxuICAgICAgICAgICAgdW5sb2NrTGFuZDogRmllbGRDb21wb25lbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhbmRMaXN0W3hdLmRhdGEgJiYgIXRoaXMubGFuZExpc3RbeF0uZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIGxhbmRFbXB0eSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhbmRMaXN0W3hdLmRhdGE/LnByb2R1Y3RJZCAmJiB0aGlzLmxhbmRMaXN0W3hdLmRhdGE/Lm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZCA9IHRoaXMubGFuZExpc3RbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTY4QzBcdTZENEJcdTY3MDlcdTZDQTFcdTY3MDlcdTY3MkFcdTg5RTNcdTk1MDFcdTdBN0FcdTU3MzBcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhbmRMaXN0W3hdLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHVubG9ja0xhbmQgPSB0aGlzLmxhbmRMaXN0W3hdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdW5sb2NrTGFuZCAmJiB0aGlzLmd1aWRJZExpc3QuaW5kZXhPZig1KSA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZElkTGlzdC5zcGxpY2UodGhpcy5ndWlkSWRMaXN0LmluZGV4T2YoNSksIDEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmd1aWRJZExpc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYXNHdWlkZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBvcyA9IHsgeDogMCwgeTogMCB9O1xyXG4gICAgICAgIGlmIChsYW5kRW1wdHkpIHtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5nZXROb2RlVG9wTGF5ZXJQb3ModGhpcy5zdGVwNCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFsYW5kKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLmd1aWRJZExpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ndWlkSWRMaXN0Lmxlbmd0aCldO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChpZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuZ2V0Tm9kZVRvcExheWVyUG9zKGxhbmQub3duZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy54ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3MueSArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gdGhpcy5nZXROb2RlVG9wTGF5ZXJQb3ModGhpcy5zdGVwOSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmdldE5vZGVUb3BMYXllclBvcyh0aGlzLnN0ZXA1KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3MueCArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuZ2V0Tm9kZVRvcExheWVyUG9zKHVubG9ja0xhbmQub3duZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy54ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3MueSArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3VpZGVIYW5kLnBvcyhwb3MueCwgcG9zLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Tm9kZVRvcExheWVyUG9zKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3BMYXllck9uU3RhZ2UuZ2xvYmFsVG9Mb2NhbChcclxuICAgICAgICAgICAgKG5vZGUucGFyZW50IGFzIGFueSkubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludChub2RlLngsIG5vZGUueSkpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1x1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGd1aWRIYW5kQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZEhhbmRBbmkgPSBMYXlhLlRpbWVMaW5lLnRvKHRoaXMuZ3VpZGVIYW5kLCB7IHJvdGF0aW9uOiAtMTUgfSwgNDAwLCBudWxsKS50byhcclxuICAgICAgICAgICAgdGhpcy5ndWlkZUhhbmQsXHJcbiAgICAgICAgICAgIHsgcm90YXRpb246IDAgfSxcclxuICAgICAgICAgICAgNDAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmd1aWRIYW5kQW5pLnBsYXkobnVsbCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYzRDBcdTc5M0FcdTY2M0VcdTc5M0FcdTYyNjlcdTVFRkFpY29uXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUhpdExhbmRBZGQoKSB7XHJcbiAgICAgICAgbGV0IGd1aWRMYW5kOiBGaWVsZENvbXBvbmVudDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sYW5kTGlzdFt4XS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWd1aWRMYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VpZExhbmQgPSB0aGlzLmxhbmRMaXN0W3hdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1MTY4XHU0RjUzXHU1MkEwXHU5MDFGaWNvbiBcdTU0OEMgXHU2NTM2XHU4M0RDaWNvbiBcdTY2ODJcdTY1RjZcdTYyOEFcdTRFMjRcdTRFMkFcdTY1QjlcdTZDRDVcdTUxOTlcdTU3MjhcdTRFMDBcdThENzdcdTRFODZcclxuICAgICAqL1xyXG4gICAgdXBkYXRlQWxsU3RhdGVJY29uKGxhbmRJZD86IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5sYW5kTGlzdFt4XS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaWQgPT0gbGFuZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFsYW5kSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5wcm9kdWN0SWQgJiYgZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0udG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMubGFuZExpc3RbeF0uZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnByb2R1Y3RJZCAmJiAhZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zZXRTdGF0ZUljb25Ta2luKDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0udG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGRFbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgQ29yZS5vYnNlcnZhYmxlUHJvcGVydHlcclxuICAgICAgICAgICAgLndhdGNoKFVzZXJJbmZvLCB0aGlzKVxyXG4gICAgICAgICAgICAua2V5KFwiZGlhbW9uZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFtb25kTm9kZS52YWx1ZSA9IGU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1vbmV5TGIudmFsdWUgPSAoZSAqIFVzZXJJbmZvLnByb3BvcnRpb24pLnRvRml4ZWQoMikgKyBcIlwiO1xyXG4gICAgICAgICAgICAgICAgLy9cdTRFMERcdTU2REJcdTgyMERcdTRFOTRcdTUxNjVcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uZXlMYi52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgKGUgKiBVc2VySW5mby5wcm9wb3J0aW9uKS50b1N0cmluZygpLm1hdGNoKC9eXFxkKyg/OlxcLlxcZHswLDJ9KT8vKSArIFwiXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJnb2xkXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvbGROb2RlLnZhbHVlID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImF2YXRhclwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcIndhcmVQZXRJZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBldEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LmdldENoaWxkQnlOYW1lKFwiZG9nX2FuaVwiKSBhcyBMYXlhLkFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICkuc291cmNlID0gYHJlcy9kb2dfJHtlfS5hdGxhc2A7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmdldChlKS5pY29uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBldEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJwZXRWaXRhbGl0eVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIC8vXHU2NkY0XHU2NUIwXHU1QkEwXHU3MjY5XHU0RjUzXHU1MjlCXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXRCb3gudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXIgPSB0aGlzLnBldEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidml0YWxpdHlfYmFyXCIpIGFzIExheWEuSW1hZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IGUgLyBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KFVzZXJJbmZvLndhcmVQZXRJZCkudml0YWxpdHlfbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2FsZSA+IDEpIHNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyLndpZHRoID0gMTMwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBldEJveC5nZXRDaGlsZEJ5TmFtZShcImJveFwiKS5nZXRDaGlsZEJ5TmFtZShcImh1bmdyeVwiKSBhcyBMYXlhLkltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgKS52aXNpYmxlID0gIWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJkaWdlc3RDb3VudERvd25cIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcywgdGhpcy5kaWdlc3RDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgLy9cdTVCQTBcdTcyNjlcdTk3MDBcdTg5ODFcdTZEODhcdTgwMTdcdTk4REZcdTcyNjlcdTUwMTJcdThCQTFcdTY1RjZcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBldEJveC52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKGUgKiAxMDAwLCB0aGlzLCB0aGlzLmRpZ2VzdENvdW50RG93bik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJ2aXRhbGl0eVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZpdGFsaXR5ID0gZSAvIENvbmZpZ0dhbWUudXNlclZpdGFsaXR5TGltaXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodml0YWxpdHkgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpdGFsaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5tb3VzZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5ncmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLm1vdXNlRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXRhbGl0eUJveC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSlcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy52aXRhbGl0eUJveC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9IDI2OCAqIHZpdGFsaXR5O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3JkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUJBMFx1NzI2OVx1N0IxMVx1NkQ4OFx1NTMxNlx1NUI5QVx1NjVGNlx1NTY2OFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRpZ2VzdENvdW50RG93bigpIHtcclxuICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHBldCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5nZXQoVXNlckluZm8ud2FyZVBldElkKTtcclxuICAgICAgICBpZiAoVXNlckluZm8ucGV0Vml0YWxpdHkgLSBwZXQudml0YWxpdHlfY29uc3VtZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSAtPSBwZXQudml0YWxpdHlfY29uc3VtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gQ29uZmlnR2FtZS5wZXREaWdlc3RJbnRlcnZhbFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaWduSW5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibWFpbFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlR3VpZGVIYW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImhlYWRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TZXR0aW5nVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndhcmVob3VzZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLldhcmVob3VzZVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidXlfZmVlZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDIgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG9nX2hvdXNlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb2dfYW5pXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkaWFtb25kX2JveFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwibW9uZXlfcmVkX2JveFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDMgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib3JkZXJfYm94XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZnJpZW5kc1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuRnJpZW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxhbmRcIjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZExldmVsVXBcIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc091dGVyKSB0aGlzLnN3aXRjaExhbmRMZXZlbFVwKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV91cFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hMYW5kTGV2ZWxVcChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFueV9kb29yXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9OZWlnaGJvcigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19ob21lXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvSG9tZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRfdml0YWxpdHlcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5Vml0YWxpdHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU3OUNEXHU4M0RDICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGFudF9zb3cpXHJcbiAgICBwcml2YXRlIHNvdyhzaG93VmlldzogYm9vbGVhbiA9IGZhbHNlLCBkOiBQbGFudERhdGFCYXNlKSB7XHJcbiAgICAgICAgbGV0IGVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sYW5kTGlzdFt4XT8uZGF0YT8ucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1ZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNvd1BsYW50KGQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTZDQTFcdTY3MDlcdTdBN0FcdTc2ODRcdTU3MUZcdTU3MzBcdTU0RTZcdUZGMDFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5TGFuZElkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZExpc3QpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFuZExpc3RbeF0uZGF0YSAmJiAhdGhpcy5sYW5kTGlzdFt4XS5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZExpc3RbeF0uZmllbGRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1OTBBRVx1NEVGNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9wZW5NYWlsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5tYWlsTGlzdCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IE1haWxSZXR1cm5EYXRhW10pID0+IHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5NYWlsVmlldywgeyBwYXJtOiBkIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU5N0RcdTUzQ0IgXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLm9wZW5fZnJpZW5kKVxyXG4gICAgcHJpdmF0ZSBvcGVuRnJpZW5kKHR5cGUgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZExpc3QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkOiBGcmllbmRMaXN0RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc1ZpZXcsIHsgcGFybTogeyBmcmllbmREYXRhOiBkLCB0eXBlOiB0eXBlIH0gfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThEMkRcdTRFNzBcdTRGNTNcdTUyOUJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidXlWaXRhbGl0eSgpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4QkEyXHU1MzU1XHU5NjFGXHU1MjE3ICovXHJcbiAgICBwcml2YXRlIG9yZGVyUXVldWVJbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU4QkEyXHU1MzU1XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcilcclxuICAgIHByaXZhdGUgdXBkYXRlT3JkZXIoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5vcmRlclF1ZXVlSW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBib3ggPSB0aGlzLm9yZGVyQm94LmdldENoaWxkQnlOYW1lKFwib3JkZXJfYm94XCIpLFxyXG4gICAgICAgICAgICAgICAgZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcIm9yZGVyXCIpLmdldChVc2VySW5mby5vcmRlckxldmVsICsgMSksXHJcbiAgICAgICAgICAgICAgICByZXdhcmQ6IFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgICAgICAgICAgICAgIHJld2FyZENvdW50OiBudW1iZXIgPSAwLFxyXG4gICAgICAgICAgICAgICAgY3VyQ291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICBpZiAoIWQpIHJldHVybiBjb25zb2xlLmxvZyhcIlx1N0I0OVx1N0VBN1x1NURGMlx1NUI4Q1wiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA0OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gYm94LmdldENoaWxkQnlOYW1lKFwiaXRlbV9cIiArIHgpIGFzIExheWEuQm94O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkLmNvbmRpdGlvblt4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ckNvdW50ID0gV2FyZWhvdXNlU2VydmljZS5nZXRPbmUoZC5jb25kaXRpb25beF0ucGxhbnQuaWQpPy5jb3VudCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heENvdW50ID0gZC5jb25kaXRpb25beF0uY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJDb3VudCA+PSBtYXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmNvbmRpdGlvblt4XS5wbGFudC5pY29uO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtjdXJDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgODcgKiAoY3VyQ291bnQgLyBtYXhDb3VudCA+IDEgPyAxIDogY3VyQ291bnQgLyBtYXhDb3VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGQuY29uZGl0aW9uW3hdLnBsYW50LmdhaW4uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5vYmouaWQgPT09IENvbmZpZ0dhbWUuZ29sZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZCA9IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArPSBlLmNvdW50ICogbWF4Q291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBnb2xkQm94ID0gYm94LmdldENoaWxkQnlOYW1lKFwiZ29sZF9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbW9uZEJveCA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImRpYW1vbmRfYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgICAgICAgICAgKGdvbGRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSByZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICAoZ29sZEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gYCR7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKyBNYXRoLnJvdW5kKHJld2FyZENvdW50ICogZC5jb21taXNzaW9uKVxyXG4gICAgICAgICAgICAgICAgfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGQuZXh0cmFSZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAoZGlhbW9uZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuZXh0cmFSZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFtb25kQm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcFxyXG4gICAgICAgICAgICAgICAgICAgICkudmFsdWUgPSBgJHtkLmV4dHJhUmV3YXJkLmNvdW50fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpYW1vbmRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29sZEJveC55ID0gNDY7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdvbGRCb3gueSA9IDY2O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYW1vbmRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwibmFtZV90aXRsZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1NUI4Q1x1NjIxMCR7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5vcmRlckxldmVsICsgMVxyXG4gICAgICAgICAgICB9XHU3RUE3XHU4QkEyXHU1MzU1YDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PSBkLmNvbmRpdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGQuY29uZGl0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlclF1ZXVlSW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5vcmRlclJld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJJZDogVXNlckluZm8ub3JkZXJMZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLnJlZHVjZUFtb3VudChlLnBsYW50LmlkLCBlLmNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJRdWV1ZUluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5vcmRlckxldmVsKys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5leHRyYVJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KGQuZXh0cmFSZXdhcmQub2JqLmlkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogZC5leHRyYVJld2FyZC5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUdldFJld2FyZEFuaSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBib3guZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkX2JveFwiKSBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlclF1ZXVlSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMDdcdTYzNjJcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN3aXRjaExhbmRMZXZlbFVwKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYmcgPSB0aGlzLmxhbmRVcExheWVyLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVHdWlkZUhhbmQoKTtcclxuICAgICAgICAgICAgYmcuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKGJnLCB7IGFscGhhOiAwLjc1IH0sIDE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYW5kX291dGVyXCIpLmFkZENoaWxkKHRoaXMubGFuZEJveCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRhYmxlQW5hbHl6ZS50YWJsZShcImxhbmRMZXZlbFwiKS5nZXQoZS5kYXRhLmxldmVsICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbigyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZS5idWlsZEluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBiZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyQm94LmFkZENoaWxkKHRoaXMubGFuZEJveCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1RpbWVCb3godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZS5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jbGVhckZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLmJ1aWxkSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oZS5kYXRhLm1hdHVyZVRpbWVMZWZ0ID8gMSA6IDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlLnRvcFN0YXRlSWNvbkFuaShCb29sZWFuKGUuZGF0YS5wcm9kdWN0SWQpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU4M0I3XHU1M0Q2XHU1OTU2XHU1MkIxXHU1MkE4XHU3NTNCXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZClcclxuICAgIHByaXZhdGUgcGxheUdldFJld2FyZEFuaShvYmo6IEdldEZsb2F0UmV3YXJkT2JqKSB7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iai5jYWxsQmFjaykgb2JqLmNhbGxCYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9iai5saXN0LmZvckVhY2goKGQsIGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IExheWEuQm94ID0gTGF5YS5Qb29sLmdldEl0ZW1CeUNyZWF0ZUZ1bihcclxuICAgICAgICAgICAgICAgIFwiZmxvYXRSZXdhcmRCb3hcIixcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmV3YXJkUHJlZmFiLmNyZWF0ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmV3YXJkUHJlZmFiXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBub2RlLnkgPSBvYmoubm9kZS5nZXRfaGVpZ2h0KCkgKiBvYmoubm9kZS5hbmNob3JZIC0gaSAqIDYwO1xyXG4gICAgICAgICAgICAvLyBub2RlLnggPSBvYmoubm9kZS5nZXRfd2lkdGgoKSAqIG9iai5ub2RlLmFuY2hvclg7XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgaWNvbi5za2luID0gZC5vYmo/Lmljb24gfHwgXCJcIjtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gODAgLyBpY29uLndpZHRoO1xyXG4gICAgICAgICAgICBpY29uLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmoubm9kZS5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KCkpKTtcclxuICAgICAgICAgICAgLy8gb2JqLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBub2RlTmV3UG9zID0gdGhpcy50b3BMYXllck9uU3RhZ2UuZ2xvYmFsVG9Mb2NhbChcclxuICAgICAgICAgICAgICAgIG9iai5ub2RlLmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQoKSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIG5vZGUucG9zKG5vZGVOZXdQb3MueCArIG9iai5ub2RlLmdldF93aWR0aCgpICogb2JqLm5vZGUuYW5jaG9yWCwgbm9kZU5ld1Bvcy55IC0gaSAqIDYwKTtcclxuICAgICAgICAgICAgdGhpcy50b3BMYXllck9uU3RhZ2UuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIChub2RlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBcInhcIiArIGQuY291bnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9iaj8ubm90Rmx5KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGQucG9zVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRHb2xkRGlhbW9uZEFuaSh0aGlzLmdvbGRBZGQsIGQuY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkR29sZERpYW1vbmRBbmkodGhpcy5kaWFtb25kQWRkLCBkLmNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAgICAgeyB5OiBub2RlLnkgLSA0MCwgYWxwaGE6IDEgfSxcclxuICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgKGU6IExheWEuQm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlcihcImZsb2F0UmV3YXJkQm94XCIsIGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvc0ljb24gPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubG9jYWxUb0dsb2JhbChMYXlhLlBvaW50LmNyZWF0ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoubm90Rmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsb2F0SWNvbjogTGF5YS5JbWFnZSA9IExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXRSZXdhcmRJY29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXRSZXdhcmRJY29uLmNyZWF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdFJld2FyZEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5za2luID0gZC5vYmouaWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnBvcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQb3NJY29uLnggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIwICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBvc0ljb24ueSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjAgKiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmFkZENoaWxkKGZsb2F0SWNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnpPcmRlciA9IDk5OTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcEljb246IExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkLnBvc1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wR29sZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wRGlhbW9uZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMud2FyZWhvdXNlQnRuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wR29sZEljb25Qb3MgPSB0b3BJY29uLmxvY2FsVG9HbG9iYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLlBvaW50KHRvcEljb24ud2lkdGggLyAyLCB0b3BJY29uLmhlaWdodCAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKHRvcEdvbGRJY29uUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IGxvY2FsUG9zLngsIHk6IGxvY2FsUG9zLnkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tJbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZTogTGF5YS5JbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKFwiZmxvYXRSZXdhcmRJY29uXCIsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmbG9hdEljb25dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MCAqIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFtub2RlXVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIDUwICogaSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRHb2xkRGlhbW9uZEFuaShub2RlLCBjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgbm9kZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLmFscGhhID0gMDtcclxuICAgICAgICBub2RlLnZhbHVlID0gYCske2NvdW50fWA7XHJcbiAgICAgICAgbm9kZS55ID0gMzA7XHJcbiAgICAgICAgbm9kZS5vZmZBbGwoKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICB7IGFscGhhOiAxLCB5OiAtMzAgfSxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgyMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU3NzBCXHU1RTdGXHU1NDRBXHU0RUU1XHU1NDBFXHU3Njg0XHU1OTU2XHU1MkIxXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZClcclxuICAgIHByaXZhdGUgcGxheUFkUmV3YXJkKHRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IHJld2FyZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJWaWRlb3Jld2FyZHNcIikudmFsdWUgYXMgUmV3YXJkQ3VycmVuY3lCYXNlO1xyXG5cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgIG5vZGU6IHRhcmdldCxcclxuICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iajogcmV3YXJkLm9iaixcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IHJld2FyZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgPyAxIDogMixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTRFRkJcdTUyQTFcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnVwZGF0ZV90YXNrKVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUYXNrKCkge1xyXG4gICAgICAgIGNvbnN0IGJveDogTGF5YS5JbWFnZSA9IHRoaXMudGFza0JveCxcclxuICAgICAgICAgICAgaWNvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgYW1vdW50Rm9udCA9IGljb24uZ2V0Q2hpbGRCeU5hbWUoXCJhbW91bnRGb250XCIpIGFzIExheWEuRm9udENsaXAsXHJcbiAgICAgICAgICAgIGRlc2MgPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsLFxyXG4gICAgICAgICAgICBsaXN0ID0gVGFza1NlcnZpY2UuZ2V0TGlzdCgpLFxyXG4gICAgICAgICAgICB0YXNrID0gbGlzdFswXTtcclxuICAgICAgICBpZiAodGFzay5yZWNlaXZlID09IDEgfHwgdGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGRlc2MudGV4dCA9IGBcdTRFRkJcdTUyQTE6JHt0YXNrLmJhc2UuZGVzY30oJHtcclxuICAgICAgICAgICAgdGFzay50aW1lcyA+IHRhc2suYmFzZS50aW1lcyA/IHRhc2suYmFzZS50aW1lcyA6IHRhc2sudGltZXNcclxuICAgICAgICB9LyR7dGFzay5iYXNlLnRpbWVzfSlgO1xyXG4gICAgICAgIGFtb3VudEZvbnQudmFsdWUgPSBcInhcIiArIHRhc2suYmFzZS5yZXdhcmQuY291bnQ7XHJcbiAgICAgICAgaWNvbi5za2luID0gdGFzay5iYXNlLnJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICBib3gud2lkdGggPSBkZXNjLndpZHRoICsgMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1NkRFXHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ29Ib21lKCkge1xyXG4gICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyh0cnVlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZ29Ib21lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NTZERVx1Njc2NVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ib21lTm9kZURhdGEoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLmdvX2hvbWUpXHJcbiAgICBwcml2YXRlIGdvSG9tZU5vZGVEYXRhKHVwZGF0ZU91dFRpbWUgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICh1cGRhdGVPdXRUaW1lKSB7XHJcbiAgICAgICAgICAgIC8vXHU4RkQ5XHU5MUNDXHU0RTNCXHU4OTgxXHU2NjJGXHU0RTNBXHU0RTg2XHU1OTA0XHU3NDA2XHU1OTdEXHU1M0NCXHU4QkJGXHU5NUVFXHU1OTMxXHU4RDI1XHVGRjBDXHU2NkY0XHU2NUIwXHU3OUJCXHU1RjAwXHU2NUY2XHU5NUY0XHJcbiAgICAgICAgICAgIHRoaXMub3V0ZXJUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc091dGVyID0gZmFsc2U7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmdvRnJpZW5kKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhpdExhbmRBZGQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTNCQlx1OTBCQlx1NUM0NVx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdvVG9OZWlnaGJvcigpIHtcclxuICAgICAgICB0aGlzLmhpZGVHdWlkZUhhbmQoKTtcclxuICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcodHJ1ZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm5laWdoYm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZ2F0aGVyXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkOiBSZXR1cm5OZWlnaGJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU3OUJCXHU1RjAwXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc091dGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvRnJpZW5kKGQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMzAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5nb19mcmllbmRfaG9tZSlcclxuICAgIHByaXZhdGUgZ29GcmllbmRMaXN0ZW4oZDogUmV0dXJuTmVpZ2hib3IsIGZyaWVuZERhdGE6IEZyaWVuZERhdGEpIHtcclxuICAgICAgICB0aGlzLm91dENvdW50RG93bk51bWJlciA9IDYwO1xyXG4gICAgICAgIHRoaXMuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nb0ZyaWVuZChkLCBmcmllbmREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTNCQlx1NjcwQlx1NTNDQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdvRnJpZW5kKGQ/OiBSZXR1cm5OZWlnaGJvciwgZnJpZW5kRGF0YT86IEZyaWVuZERhdGEpIHtcclxuICAgICAgICBsZXQgbGFuZHMgPSB0aGlzLmxhbmRMaXN0LFxyXG4gICAgICAgICAgICB1c2VyTGFuZHMgPSBMYW5kU2VydmljZS5saXN0O1xyXG4gICAgICAgIGxldCBvdGhlckxhbmRzOiBNYXA8bnVtYmVyLCBMYW5kT2JqPiA9IG5ldyBNYXAoKTtcclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGQubGFuZHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJMYW5kcy5zZXQoZS5pZCwgZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vdXRlclRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnZpdGFsaXR5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hbnlEb29yLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1c2VyTGFuZHMuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZC5tYXR1cmVUaW1lTGVmdCAtPSAoRGF0ZS5ub3coKSAtIHRoaXMub3V0ZXJUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5tYXR1cmVUaW1lTGVmdCA8IDApIGQubWF0dXJlVGltZUxlZnQgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYW55RG9vci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nb0hvbWVCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsYW5kcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsYW5kID0gbGFuZHNbeF07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBsYW5kLmlzT3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGFuZC5zdGVhbFVpZCA9IGQudWlkO1xyXG4gICAgICAgICAgICAgICAgbGFuZC51cGRhdGVEYXRhKHsgbGlzdDogb3RoZXJMYW5kcyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZC5wcm90ZWN0ZWRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZC5jYW5TdGVhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmQudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZC5jYW5TdGVhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsYW5kLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsYW5kLmlzT3V0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhbmQuc3RlYWxVaWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGFuZC51cGRhdGVEYXRhKHsgbGlzdDogbnVsbCB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFuZC5wbGFudEljb25BbmkoQm9vbGVhbihsYW5kLmRhdGE/LnByb2R1Y3RJZCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVBbGxTdGF0ZUljb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICAvL1x1OTY5MFx1ODVDRlx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICB0aGlzLnRhc2tCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHU2NjNFXHU3OTNBXHU0RUZCXHU1MkExXHJcbiAgICAgICAgICAgIHRoaXMudGFza0JveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRnJpZW5kVmlldyhkPy5uaWNrbmFtZSwgZnJpZW5kRGF0YSwgZD8uZG9nSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1M0JCXHU1OTdEXHU1M0NCXHU1QkI2XHU4RkQ4XHU2NjJGXHU4MUVBXHU1REYxXHU1QkI2XHU3Njg0XHU3NTRDXHU5NzYyXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlRnJpZW5kVmlldyhuaWNrbmFtZTogc3RyaW5nID0gXCJcIiwgZnJpZW5kRGF0YTogRnJpZW5kRGF0YSwgcGVkSWQ/OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB0b3BCb3ggPSB0aGlzLm9yZGVyQm94LnBhcmVudCBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgbW9uZXlCb3ggPSB0b3BCb3guZ2V0Q2hpbGRCeU5hbWUoXCJtb25leV9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGNvdW50RG93biA9IHRvcEJveC5nZXRDaGlsZEJ5TmFtZShcImNvdW50X2Rvd25cIikgYXMgTGF5YS5MYWJlbCxcclxuICAgICAgICAgICAgb3JkZXJCb3ggPSB0aGlzLm9yZGVyQm94LmdldENoaWxkQnlOYW1lKFwib3JkZXJfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBmcmllbmROYW1lID0gdGhpcy5vcmRlckJveC5nZXRDaGlsZEJ5TmFtZShcImZyaWVuZF9uYW1lXCIpIGFzIExheWEuTGFiZWwsXHJcbiAgICAgICAgICAgIGJvdHRvbUxpc3Q6IExheWEuSW1hZ2VbXSA9IFtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQm94LmdldENoaWxkQnlOYW1lKFwidGFza1wiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJzaWduSW5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYm90dG9tQm94LmdldENoaWxkQnlOYW1lKFwiZnJpZW5kc1wiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJtYWlsXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICBmcmllbmROYW1lLnRleHQgPSBgJHtuaWNrbmFtZX1cdTc2ODRcdTUxOUNcdTU3M0FgO1xyXG4gICAgICAgICAgICBvcmRlckJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZyaWVuZE5hbWUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1vbmV5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY291bnREb3duLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY291bnREb3duLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMub3V0Q291bnREb3duTnVtYmVyKTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5sb29wKDEwMDAsIHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQsIFtjb3VudERvd25dKTtcclxuICAgICAgICAgICAgaWYgKGZyaWVuZERhdGE/LmF2YXRhcikgdGhpcy5hdmF0YXJOb2RlLnNraW4gPSBmcmllbmREYXRhPy5hdmF0YXI7XHJcbiAgICAgICAgICAgIGlmIChwZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJkb2dfYW5pXCIpIGFzIExheWEuQW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICApLnNvdXJjZSA9IGByZXMvZG9nXyR7cGVkSWR9LmF0bGFzYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAodGhpcy5wZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIikgYXMgTGF5YS5JbWFnZSkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0Q291bnREb3duTnVtYmVyID0gNjA7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcywgdGhpcy5vdXRDb3VudERvd25FdmVudCk7XHJcbiAgICAgICAgICAgIG9yZGVyQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBmcmllbmROYW1lLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbW9uZXlCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvdW50RG93bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby5hdmF0YXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhdGFyTm9kZS5za2luID0gVXNlckluZm8uYXZhdGFyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdmF0YXJOb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfZGVmYXVsdFBvcnRyYWl0LnBuZ2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKFVzZXJJbmZvLndhcmVQZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJkb2dfYW5pXCIpIGFzIExheWEuQW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICApLnNvdXJjZSA9IGByZXMvZG9nXyR7VXNlckluZm8ud2FyZVBldElkfS5hdGxhc2A7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBldEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKHRoaXMucGV0Qm94LmdldENoaWxkQnlOYW1lKFwiYm94XCIpIGFzIExheWEuSW1hZ2UpLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3R0b21MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZS5kaXNhYmxlZCA9IHRoaXMuaXNPdXRlcjtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL1x1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MDEyXHU4QkExXHU2NUY2XHU3RUQzXHU2NzVGXHJcbiAgICAgKiBAcGFyYW0gbGJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvdXRDb3VudERvd25FdmVudChsYjogTGF5YS5MYWJlbCkge1xyXG4gICAgICAgIHRoaXMub3V0Q291bnREb3duTnVtYmVyLS07XHJcbiAgICAgICAgbGIudGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5vdXRDb3VudERvd25OdW1iZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLm91dENvdW50RG93bk51bWJlciA8PSAwKSB7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcywgdGhpcy5vdXRDb3VudERvd25FdmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ib21lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ3VpZEhhbmRBbmk/LmRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IE1haW5WaWV3IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkQm94LCB0aXBzOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRCb3g6IExheWEuQm94O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1MjE3XHU4ODY4XHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnVzZXJLZXksIHRpcHM6XCJcdTc1MjhcdTYyMzdcdTUzQ0JcdTYwQzVcdTc4MDFcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHVzZXJLZXk6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6a2V5SW5wdXROb2RlLCB0aXBzOlwiXHU5MDgwXHU4QkY3XHU3ODAxXHU4RjkzXHU1MTY1XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBrZXlJbnB1dE5vZGU6IExheWEuVGV4dElucHV0O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkZEZyaWVuZCwgdGlwczpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWRkRnJpZW5kOiBMYXlhLkltYWdlO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTplbXB0eV9sYiwgdGlwczpcIlx1N0E3QVx1NzY4NFx1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZW1wdHlfbGI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiAxXHU2NjJGXHU1OTdEXHU1M0NCXHU1MjE3XHU4ODY4IDIgXHU1MkEwXHU1OTdEXHU1M0NCICAzXHU1MjIwXHU5NjY0XHU1OTdEXHU1M0NCICovXHJcbiAgICBwcml2YXRlIHZpZXdTdGF0ZTogMSB8IDIgfCAzID0gMTtcclxuXHJcbiAgICAvL1x1OEZEOVx1NEUyNFx1NEUyQVx1NTk3RFx1NTNDQiBcdTY3MDlcdTcwQjlcdTRFNzFcdUZGMENcdTk3MDBcdTg5ODFcdTRGMThcdTUzMTZcclxuICAgIHByaXZhdGUgZnJpZW5kczogRnJpZW5kRGF0YVtdID0gW107XHJcbiAgICBwcml2YXRlIGZyaWVuZHNMaXN0OiBGcmllbmREYXRhW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbk9wZW5lZChkYXRhOiB7XHJcbiAgICAgICAgZnJpZW5kRGF0YTogRnJpZW5kTGlzdERhdGE7XHJcbiAgICAgICAgLyoqIHR5cGVcdTRFM0ExXHU2MjUzXHU1RjAwXHU1MkEwXHU1OTdEXHU1M0NCXHU3NTRDXHU5NzYyICovXHJcbiAgICAgICAgdHlwZTogbnVtYmVyO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuZnJpZW5kcyA9IGRhdGEuZnJpZW5kRGF0YS5saXN0O1xyXG4gICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSB0aGlzLmZyaWVuZHM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMuaXRlbVJlbmRlcik7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51c2VyS2V5LnRleHQgPSBgXHU2MjExXHU3Njg0XHU1M0NCXHU2MEM1XHU3ODAxXHVGRjFBJHtVc2VySW5mby5rZXl9YDtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnR5cGUpO1xyXG4gICAgICAgIGlmIChkYXRhLnR5cGUgJiYgZGF0YS50eXBlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRGcmllbmRFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzRW1wdHkoKSB7XHJcbiAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gIXRoaXMuaXRlbUxpc3QuYXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTGlzdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmFwcGx5SW5nICogMTAwMDAwIC0gYS5hcHBseUluZyAqIDEwMDAwMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGl0ZW1SZW5kZXIoY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLml0ZW1MaXN0LmFycmF5W2ldO1xyXG5cclxuICAgICAgICBsZXQgbmV3Qm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm5ld19ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGhlYXJ0Qm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImhlYXJ0X2JveFwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBnb1BsYXlCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZ29fcGxheV9idG5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgYXBwbHlCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYXBwbHlfYnRuXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGRlbEJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZWxfYnRuXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaGVhcnRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBkZWxCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICBpZiAoZGF0YT8uYXZhdGFyKSAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImhlYWRcIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGRhdGEuYXZhdGFyO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImx2XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSAoZGF0YS5vcmRlckxldmVsIHx8IDApICsgXCJcIjtcclxuICAgICAgICAoaGVhcnRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWxcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IChkYXRhLmludGltYWN5IHx8IDApICsgXCJcIjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID1cclxuICAgICAgICAgICAgZGF0YS5nYWluRGlhbW9uZCArIFwiXCI7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiZGVsX2J0blwiKSBhcyBMYXlhLkltYWdlKS5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICBnb1BsYXlCdG4uZGF0YVNvdXJjZSA9IGRhdGE7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy52aWV3U3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZ29QbGF5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaGVhcnRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgYXBwbHlCdG4uZGF0YVNvdXJjZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBhcHBseUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBuZXdCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgaGVhcnRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkZWxCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZXdTdGF0ZSA9PSAxIHx8IHRoaXMudmlld1N0YXRlID09IDMpIHtcclxuICAgICAgICAgICAgLy9cdTc1MzNcdThCRjcgXHU0RTJEXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmFwcGx5SW5nKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBuZXdCb3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIChuZXdCb3guZ2V0Q2hpbGRCeU5hbWUoXCJwYXN0X2J0blwiKSBhcyBMYXlhLkltYWdlKS5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIChuZXdCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpZ25vcmVcIikgYXMgTGF5YS5JbWFnZSkuZGF0YVNvdXJjZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9cdTVERjJcdTdFQ0ZcdTY2MkZcdTU5N0RcdTUzQ0JcclxuICAgICAgICAgICAgICAgIG5ld0JveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBuZXdCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy52aWV3U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRfZnJpZW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZyaWVuZEV2ZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWxfZnJpZW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUZyaWVuZEV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlc2NfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc0Rlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmV3YXJkX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuUmV3YXJkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvcHlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2VhcmNoX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYXBwbHlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5RXZlbnQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGFzdF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dGcmllbmQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVsX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVGcmllbmQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaWdub3JlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlnbm9yZShlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19wbGF5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpdEZyaWVuZChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVGcmllbmRFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDM7XHJcbiAgICAgICAgbGV0IG5ld0Y6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kcy5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZC5hcHBseUluZykgbmV3Ri5wdXNoKGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSBuZXdGO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuaGVpZ2h0ID0gOTE0O1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuYWRkRnJpZW5kLnNraW4gPSBgZ2FtZS9pbWdfZnJpZW5kQnRuLnBuZ2A7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRGcmllbmRFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMyB8fCB0aGlzLnZpZXdTdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmlld1N0YXRlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDkxNDtcclxuICAgICAgICAgICAgdGhpcy5hZGRGcmllbmQuc2tpbiA9IGBnYW1lL2ltZ19hZGRCdG4ucG5nYDtcclxuICAgICAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0VtcHR5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDU5MDsgLy85MTRcclxuICAgICAgICAgICAgdGhpcy5hZGRGcmllbmQuc2tpbiA9IGBnYW1lL2ltZ19mcmllbmRCdG4ucG5nYDtcclxuICAgICAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUZGRFx1NzU2NVx1NTk3RFx1NTNDQlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlnbm9yZSh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZERlbGV0ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmZyaWVuZHMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmllbmRzW3hdLnVpZCA9PSBkYXRhLnVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VtcHR5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9wZW5SZXdhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEludml0ZUxpc3QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IEludml0ZUxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzUmV3YXJkVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogZC5saXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkOiBGcmllbmRMaXN0RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMgPSBkLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSB0aGlzLmZyaWVuZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZnJpZW5kc0xpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRlx1OTVFRVx1NTk3RFx1NTNDQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHZpc2l0RnJpZW5kKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcodHJ1ZSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWFpblZpZXcuaW5zdC5pc091dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5nb0hvbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRWaXNpdCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMuZ29fZnJpZW5kX2hvbWUsIFtkLCBkYXRhXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5nb19ob21lLCBbdHJ1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMjBcdTk2NjRcdTU5N0RcdTUzQ0JcclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWxldGVGcmllbmQodGFyZ2V0OiBMYXlhLkltYWdlKSB7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgdGV4dDogXCJcdTc4NkVcdThCQTRcdTg5ODFcdTUyMjBcdTk2NjRcdTU5N0RcdTUzQ0JcdTU0MTdcdUZGMUZcIixcclxuICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZERlbGV0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kSWQ6IGRhdGEudWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmZyaWVuZHMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyaWVuZHNbeF0udWlkID09IGRhdGEudWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzLnNwbGljZSh4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZnJpZW5kc0xpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsQ2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkwMUFcdThGQzdcdTU5N0RcdTUzQ0JcdTc1MzNcdThCRjdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhbGxvd0ZyaWVuZCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEFsbG93LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYXBwbHlJbmcgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiQWRkZnJpZW5kc1wiIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUzM1x1OEJGN1x1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFwcGx5RXZlbnQodGFyZ2V0OiBMYXlhLkltYWdlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRBcHBseSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogeyBzdGF0dXM6IGJvb2xlYW47IHRhc2tTdGF0ZTogYm9vbGVhbiB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHNMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTVERjJcdTUzRDFcdTkwMDFcdTZGQzBcdTYwQzVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChkLnRhc2tTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDA5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjQxQ1x1N0QyMlx1NTk3RFx1NTNDQlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZWFyY2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleUlucHV0Tm9kZS50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NTNDQlx1NjBDNVx1NzgwMVx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5rZXlJbnB1dE5vZGUudGV4dCA9PSBVc2VySW5mby5rZXkpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTY0MUNcdTdEMjJcdTgxRUFcdTVERjFcdTVFNzJcdTU1NjVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRTZWFyY2gsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLmtleUlucHV0Tm9kZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IEZyaWVuZERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSBbZF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3B5KCkge1xyXG4gICAgICAgIGxldCBhOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgYS52YWx1ZSA9IFVzZXJJbmZvLmtleTtcclxuICAgICAgICBhLnNlbGVjdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgICAgICBhLnJlbW92ZSgpO1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU1OTBEXHU1MjM2XHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEd1aWRlVmlld0RhdGEge1xyXG4gICAgbm9kZUxpc3Q6IExheWEuSW1hZ2VbXTtcclxuICAgIGNhbGw6IEZ1bmN0aW9uO1xyXG59XHJcblxyXG4vL2RlZmF1bHQgY2xhc3MgR3VpZGVWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWlkZVZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLy9cdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpndWlkZUhhbmQsIHRpcHM6XCJcdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcdTYyNEJcdTYzMDdcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGd1aWRlSGFuZDogTGF5YS5TcHJpdGUgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRlc2NMYiwgdGlwczpcIlx1NjNDRlx1OEZGMFx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZGVzY0xiOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpub2RlQm94LCB0aXBzOlwiXHU2M0NGXHU4RkYwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBub2RlQm94OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBndWlkQW5pOiBMYXlhLlRpbWVMaW5lO1xyXG4gICAgcHJpdmF0ZSBvbGRQYXJlbnQ6IExheWEuQm94O1xyXG4gICAgcHJpdmF0ZSBvbGRaT3JkZXI6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHRleHRMaXN0ID0gW1xyXG4gICAgICAgIFwiXHU2MEE4XHU3Njg0XHU5NEIxXHU1MzA1XHU0RjU5XHU5ODlEXCIsXHJcbiAgICAgICAgXCJcdThGRDlcdTkxQ0NcdTY2MkZcdTVFMDJcdTYyNkNcdThCQTJcdTUzNTUsXHU2MzA5XHU4OTgxXHU2QzQyXHU1QjhDXHU2MjEwXHU1NDBFXHU0RjFBXHU4MUVBXHU1MkE4XHU4RkRCXHU1MTY1XHU0RTBCXHU0RTAwXHU3RUE3XHU4QkEyXHU1MzU1XHUzMDAyXCIsXHJcbiAgICAgICAgXCJcdThGRDlcdTkxQ0NcdTY2MkZcdTRFRDNcdTVFOTMsXHU2NTM2XHU4M0I3XHU3Njg0XHU0RjVDXHU3MjY5XHU5MEZEXHU1QjU4XHU2NTNFXHU1NzI4XHU4RkQ5XHU5MUNDXHVGRjBDXHU1MUZBXHU1NTJFXHU0RjVDXHU3MjY5XHU0RTVGXHU1NzI4XHU4RkQ5XHU5MUNDXHUzMDAyXCIsXHJcbiAgICAgICAgXCJcdThGRDlcdTkxQ0NcdTY2MkZcdTk2QzZcdTVFMDIsXHU4RDJEXHU0RTcwXHU3OUNEXHU1QjUwXHUzMDAxXHU3MkQ3XHU3Q0FFXHU3Njg0XHU1NzMwXHU2NUI5XHU4RkQ4XHU2NzA5XHU2NzAwXHU5MUNEXHU4OTgxXHU3Njg0XHU5NEIxXHU1RTg0XHU0RTVGXHU1NzI4XHU4RkQ5XHU5MUNDLFx1NjNEMFx1NzNCMFx1NzY4NFx1NjVGNlx1NTAxOVx1NjBBOFx1NEYxQVx1N0VDRlx1NUUzOFx1Njc2NVx1NzY4NFx1MzAwMlwiLFxyXG4gICAgICAgIFwiXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU1NzI4XHU4RkQ5XHU5MUNDLFx1NTcxRlx1NTczMFx1N0I0OVx1N0VBN1x1OEQ4QVx1OUFEOCxcdThEOEFcdTgwQTVcdTZDODNcdUZGMENcdTY1MzZcdTgzQjdcdTVDMzFcdThEOEFcdTU5MUFcdTMwMDJcIixcclxuICAgICAgICBcIlx1OEZEOVx1OTFDQ1x1NjYyRlx1NjBBOFx1NzY4NFx1NTE5Q1x1NTczQVx1MzAwMlx1NzlDRFx1NjkwRFx1MzAwMVx1NjUzNlx1ODNCN1x1OTBGRFx1NTcyOFx1OEZEOVx1OTFDQyxcdTYwODRcdTYwODRcdTU0NEFcdThCQzlcdTRGNjBcdThGRDlcdTU3NTdcdTU3MzBcdTY1MzZcdTgzQjdcdTc2ODRcdTY1RjZcdTUwMTlcdTUzRUZcdTgwRkRcdTRGMUFcdTRFQTdcdTUxRkFcdTk0QkJcdTc3RjNcdTU0RTZcdTMwMDJcIixcclxuICAgICAgICBcIlx1NjBBOFx1NzY4NFx1NEVGQlx1NTJBMVwiLFxyXG4gICAgICAgIFwiXHU2MEE4XHU3Njg0XHU0RkUxXHU0RUY2XCIsXHJcbiAgICAgICAgXCJcdThGRDlcdTkxQ0NcdTUzRUZcdTRFRTVcdTUzQkJcdTUyMkJcdTRFQkFcdTc2ODRcdTUxOUNcdTU3M0FcdThGNkNcdThGNkMsXHU1RTJFXHU1MjJCXHU0RUJBXHU2NTM2XHU3Njg0XHU4M0RDXHU5MEZEXHU1RjUyXHU2MEE4LFx1NEY0Nlx1NjYyRlx1ODk4MVx1NUMwRlx1NUZDM1x1NzJEN1x1NzJEN1x1NTRFNlx1MzAwMlwiLFxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IEd1aWRlVmlld0RhdGE7XHJcbiAgICBwcml2YXRlIHN0ZXA6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHVzZXJTdGVwOiBzdHJpbmdbXTtcclxuXHJcbiAgICBvbk9wZW5lZChkYXRhOiBHdWlkZVZpZXdEYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkYXRhLm5vZGVMaXN0KSBkYXRhLm5vZGVMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLmd1aWRlSGFuZC5hbHBoYSA9IDA7XHJcbiAgICAgICAgdGhpcy51c2VyU3RlcCA9IFVzZXJJbmZvLmd1aWRlRGF0YS5zcGxpdChcIlwiKTtcclxuICAgICAgICBpZiAoIXRoaXMudXNlclN0ZXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA5OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VyU3RlcFt4XSB8fCB0aGlzLnVzZXJTdGVwW3hdID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwID0geDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ndWlkSGFuZEFuaSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RlcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU3RlcCgpIHtcclxuICAgICAgICBsZXQgcG9zOiBMYXlhLlBvaW50O1xyXG4gICAgICAgIGNvbnN0IHByZU5vZGUgPSB0aGlzLmRhdGEubm9kZUxpc3RbdGhpcy5zdGVwIC0gMV07XHJcblxyXG4gICAgICAgIGlmIChwcmVOb2RlICYmIHRoaXMub2xkUGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMub2xkUGFyZW50Lmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVCb3gubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludChwcmVOb2RlLngsIHByZU5vZGUueSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMub2xkUGFyZW50LmFkZENoaWxkQXQocHJlTm9kZSwgdGhpcy5vbGRaT3JkZXIpO1xyXG4gICAgICAgICAgICBwcmVOb2RlLnBvcyhwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnRleHRMaXN0W3RoaXMuc3RlcF0pIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5HdWlkZVZpZXcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNhbGwpIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRhdGEubm9kZUxpc3RbdGhpcy5zdGVwXTtcclxuICAgICAgICB0aGlzLm9sZFpPcmRlciA9IG5vZGUuek9yZGVyO1xyXG4gICAgICAgIHRoaXMub2xkUGFyZW50ID0gbm9kZS5wYXJlbnQgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlQm94Lmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgIHRoaXMub2xkUGFyZW50LmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQobm9kZS54LCBub2RlLnkpKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZUJveC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICBub2RlLnBvcyhwb3MueCwgcG9zLnkpO1xyXG5cclxuICAgICAgICB0aGlzLmd1aWRlSGFuZC5zY2FsZVggPSAxO1xyXG4gICAgICAgIGNvbnN0IHRleHRQb3NBZGQ6IExheWEuUG9pbnQgPSBuZXcgTGF5YS5Qb2ludCgpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGVwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDE1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTEwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTMwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IC0xMDA7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSAyNTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlSGFuZC5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTQwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDYwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDQ1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDE2MDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zQWRkLnNldFRvKC0yMDAsIC0yODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDE2MDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgLTI4MCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgcG9zLnggKz0gMTQwO1xyXG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dFBvc0FkZC5zZXRUbygtNTYwLCAtMzgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMuZ3VpZGVIYW5kLCB7IHg6IHBvcy54LCB5OiBwb3MueSwgYWxwaGE6IDEgfSwgMzAwKTtcclxuICAgICAgICB0aGlzLmRlc2NMYi5hbHBoYSA9IDA7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLmRlc2NMYiwgeyBhbHBoYTogMSB9LCAxNTApO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnBvcyhwb3MueCArIHRleHRQb3NBZGQueCwgcG9zLnkgKyB0ZXh0UG9zQWRkLnkpO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnRleHQgPSB0aGlzLnRleHRMaXN0W3RoaXMuc3RlcF07XHJcbiAgICAgICAgdGhpcy5zdGVwKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljayA9IHRydWU7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VyU3RlcFt0aGlzLnN0ZXBdID0gXCIxXCI7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZ3VpZGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy51c2VyU3RlcC5qb2luKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1x1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGd1aWRIYW5kQW5pKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaSA9IExheWEuVGltZUxpbmUudG8odGhpcy5ndWlkZUhhbmQsIHsgcm90YXRpb246IC0xNSB9LCA0MDAsIG51bGwpLnRvKFxyXG4gICAgICAgICAgICB0aGlzLmd1aWRlSGFuZCxcclxuICAgICAgICAgICAgeyByb3RhdGlvbjogMCB9LFxyXG4gICAgICAgICAgICA0MDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaS5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGREaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaT8uZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGludFZpZXdEYXRhIHtcclxuICAgIC8qKiBcdTY1ODdcdTVCNTdcdTUxODVcdTVCQjkgKi9cclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIC8qKiBcdTc4NkVcdThCQTRcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTUzRDZcdTZEODhcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbmNlbENhbGw/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuLy9kZWZhdWx0IGNsYXNzIEhpbnRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGludFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRleHQsIHRpcHM6XCJcdTUxODVcdTVCQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRleHQ6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29uZmlybUJ0biwgdGlwczpcIlx1Nzg2RVx1OEJBNFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29uZmlybUJ0bjogTGF5YS5JbWFnZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjYW5jZWxCdG4sIHRpcHM6XCJcdTUzRDZcdTZEODhcdTYzMDlcdTk0QUVcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNhbmNlbEJ0bjogTGF5YS5JbWFnZTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IEhpbnRWaWV3RGF0YTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IHRoaXMuZGF0YT8udGV4dCB8fCBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYW5jZWxDYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCAmJiB0aGlzLmRhdGEuY2FuY2VsQ2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDI1MjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDQ1ODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbmNlbENhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FuY2VsQ2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5IaW50Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbmZpcm1cIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5IaW50Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lLCB7IEJ1aWxkVHlwZSB9IGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBBcHBDb3JlLCB7IEFwcERlc3BhdGNoUmV0dXJuRGF0YSB9IGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2FkQmFyLCB0aXBzOlwibG9hZCBiYXJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCYXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRCb3gsIHRpcHM6XCJcdTUyQTBcdThGN0RcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2dpbkJveCwgdGlwczpcIlx1NzY3Qlx1OTY0Nlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9naW5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcml2YWN5Qm94LCB0aXBzOlwiXHU5NjkwXHU3OUMxXHU1MzRGXHU4QkFFXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcml2YWN5Qm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpdmFjeUNoZWNrSWNvbiwgdGlwczpcIlx1OTY5MFx1NzlDMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaXZhY3lDaGVja0ljb246IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU4RkRCXHU1RUE2XHU2NzYxXHU5RUQ4XHU4QkE0XHU1QkJEXHU1RUE2ICAxKi9cclxuICAgIHByaXZhdGUgbG9hZEJhck9sZFdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIGFzeW5jIG9uT3BlbmVkKGQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG4gICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcml2YWN5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnZlcnNpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpPy5pc0xvZ2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxvYWRMYWJlbCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9hZExhYmVsLnRleHQgPSBcIkxvYWQuLi4uMCVcIjtcclxuICAgICAgICB0aGlzLmxvYWRCYXJPbGRXaWR0aCA9IHRoaXMubG9hZEJhci53aWR0aDtcclxuICAgICAgICB0aGlzLmxvYWRCYXIud2lkdGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QnVpbGRUeXBlKCkge1xyXG4gICAgICAgIGxldCBidWlsZFR5cGUgPSBudWxsO1xyXG4gICAgICAgIHN3aXRjaCAoQlVJTERfVFlQRSkge1xyXG4gICAgICAgICAgICBjYXNlIEJ1aWxkVHlwZS5kZWJ1ZzpcclxuICAgICAgICAgICAgICAgIGJ1aWxkVHlwZSA9IDM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCdWlsZFR5cGUudGVzdDpcclxuICAgICAgICAgICAgICAgIGJ1aWxkVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCdWlsZFR5cGUub25saW5lOlxyXG4gICAgICAgICAgICAgICAgYnVpbGRUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWJ1aWxkVHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU3M0FGXHU1ODgzdHlwZVx1OTE0RFx1N0Y2RVx1NTFGQVx1OTUxOVwiLFxyXG4gICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmNsZWFyQ2FjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWlsZFR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyB2ZXJzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmNvbmZpZ0NsaWVudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlkOiB0aGlzLmdldEJ1aWxkVHlwZSgpIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IENvbmZpZ0NsaWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb24gPSBOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnZlcnNpb24/LnJlcGxhY2UoL1xcLi9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ2ZXJzaW9uXCIsIGQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ0dhbWUudmVyc2lvbiA9IGQudmVyc2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoZC52ZXJzaW9uLnJlcGxhY2UoL1xcLi9nLCBcIlwiKSkgPiB2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5jbGVhckNhY2hlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTY4QzBcdTZENEJcdTUyMzBcdTY1QjBcdTc2ODRcdTcyNDhcdTY3MkNcdUZGMENcdThCRjdcdTY2RjRcdTY1QjBcdUZGMDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ2ZXJzaW9uXCIsIGQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuc2hvd0JhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnR2FtZS52ZXJzaW9uID0gZC52ZXJzaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ2ZXJzaW9uXCIsIGQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJcdTcyNDhcdTY3MkNcdTY4QzBcdTZENEJcdTUxRkFcdTk1MTlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibG9naW5fYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja19ib3hcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpdmFjeUNoZWNrSWNvbi52aXNpYmxlID0gIXRoaXMucHJpdmFjeUNoZWNrSWNvbi52aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcml2YWN5X2xiXCI6XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnByaXZhY3lBZ3JlZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGxvZ2luKGlzV3g6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnRva2VuKSB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubG9naW5Ub2tlbixcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGNvZGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkOiBOZXRJbml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkgdGhpcy5kYXRhLmNhbGwoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmxvZ2luU3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogTnVtYmVyKGQudXNlckluZm8ua2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGE/LmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IGBcdTc2N0JcdTVGNTVcdTU5MzFcdThEMjVbJHtkYXRhLmNvZGV9XWAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkgQ29uZmlnR2FtZS5jaGFubmVsID0gZGF0YS5kYXRhW1wiY2hhbm5lbFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiU2lnbmluXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wcml2YWN5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpc1d4KTtcclxuICAgICAgICAgICAgdGhpcy5wcml2YWN5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJpdmFjeUNoZWNrSWNvbi52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU4QkY3XHU5NjA1XHU4QkZCXHUzMDBBXHU3NTI4XHU2MjM3XHU5NjkwXHU3OUMxXHU1MzRGXHU4QkFFXHUzMDBCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRlc3RLID0gbG9jYXRpb24uc2VhcmNoLm1hdGNoKC9cXD9pZD0oLispLyksXHJcbiAgICAgICAgICAgICAgICB0ZXN0S2UgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGVzdEsgJiYgdGVzdEsubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGVzdEtlID0gdGVzdEtbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHd4T3BlbklkID0gdGVzdEtlLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWUgPSBcIlwiLFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKGlzV3ggJiYgIXd4T3BlbklkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC53eExvZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYFx1NUZBRVx1NEZFMVx1NzY3Qlx1NUY1NVx1NTkzMVx1OEQyNVske2RhdGEuY29kZX1dXHVGRjBDXHU4QkY3XHU5MUNEXHU4QkQ1YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4T3BlbklkID0gZGF0YS5kYXRhW1wib3BlbmlkXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXIgPSBkYXRhLmRhdGFbXCJpY29udXJsXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZSA9IGRhdGEuZGF0YVtcIm5hbWVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghd3hPcGVuSWQpIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2NzJBXHU4M0I3XHU1M0Q2XHU1MjMwXHU1RkFFXHU0RkUxaWRcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcml2YWN5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sb2dpbixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImxvZ2luXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWNjb3VudDogaXNXeCA/IG51bGwgOiB0aGlzLnVzZXJJbnB1dC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eElkOiB3eE9wZW5JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoY29kZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkOiBOZXRJbml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkgdGhpcy5kYXRhLmNhbGwoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmk6IEFwcEV2ZW50TWFwLnd4TG9naW5TdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLmlzRmlyc3RUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5yZWdpc3RlclN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogTnVtYmVyKGQudXNlckluZm8ua2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5sb2dpblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IE51bWJlcihkLnVzZXJJbmZvLmtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChkYXRhOiBBcHBEZXNwYXRjaFJldHVybkRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHU3NjdCXHU1RjU1XHU1OTMxXHU4RDI1WyR7ZGF0YS5jb2RlfV1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnR2FtZS5jaGFubmVsID0gZGF0YS5kYXRhW1wiY2hhbm5lbFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiU2lnbmluXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFByb2dyZXNzKHYpIHtcclxuICAgICAgICB0aGlzLmxvYWRCYXIud2lkdGggPSB2ICogdGhpcy5sb2FkQmFyT2xkV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBNYWlsRGVzY1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlsRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNlbnRlclBhbmVsLCB0aXBzOlwiXHU0RTJEXHU5NUY0XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjZW50ZXJQYW5lbDogTGF5YS5QYW5lbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aXRsZSwgdGlwczpcIlx1OTg3Nlx1NjgwN1x1OTg5OFx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGl0bGU6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9zdExiLCB0aXBzOlwiXHU1MDc3XHU4RDcwXHU0RTg2XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb3N0TGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YmFja0xiLCB0aXBzOlwiXHU2MjdFXHU1NkRFXHU2NzY1XHU3Njg0XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBiYWNrTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tTGIsIHRpcHM6XCJcdTVFOTVcdTkwRThcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJvdHRvbUxiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW0sIHRpcHM6XCJcdTcyNjlcdTU0QzFcdTgyODJcdTcwQjlcIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgaXRlbTogTGF5YS5QcmVmYWI7XHJcblxyXG4gICAgcHJpdmF0ZSBtYWlsSWQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNhbGw6IEZ1bmN0aW9uO1xyXG5cclxuICAgIG9uT3BlbmVkKGQ6IHsgZGF0YTogTWFpbFJldHVybkRhdGE7IGNhbGw6IEZ1bmN0aW9uIH0pIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZC5kYXRhO1xyXG4gICAgICAgIHRoaXMuY2FsbCA9IGQuY2FsbDtcclxuICAgICAgICB0aGlzLm1haWxJZCA9IGQuZGF0YS5pZDtcclxuICAgICAgICB0aGlzLmNlbnRlclBhbmVsLnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpdGxlLnRleHQgPSBgJHtkYXRhLm1lc3NhZ2V9XHU2RjVDXHU1MTY1XHU0RTg2XHU0RjYwXHU3Njg0XHU4M0RDXHU1NzMwXHU5MUM3XHU5NzUyYDtcclxuICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICBjb25zdCBpdGVtc0xvc3Q6IHsgaWQ6IG51bWJlcjsgYW1vdW50OiBudW1iZXIgfVtdID0gW10sXHJcbiAgICAgICAgICAgIGl0ZW1zQmFjazogeyBpZDogbnVtYmVyOyBhbW91bnQ6IG51bWJlciB9W10gPSBbXTtcclxuICAgICAgICBsZXQgbG9zdERpYW1vbmQgPSAwLFxyXG4gICAgICAgICAgICBsb3N0R29sZCA9IDA7XHJcbiAgICAgICAgLy8gYTpiOmMgIGE9dHlwZSAxXHU4RDI3XHU1RTAxIDIgXHU2OTBEXHU3MjY5XHJcblxyXG4gICAgICAgIFRvb2xzLnBhcnNlU3RyaW5nKGRhdGEuaXRlbXNMb3N0KS5tYXAoKF9kOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgX2QgPSBUb29scy5wYXJzZVN0cmluZyhfZCwgXCI6XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfZCk7XHJcbiAgICAgICAgICAgIGlmIChfZFswXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsb3N0RGlhbW9uZCArPSBOdW1iZXIoX2RbMl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGl0ZW1zTG9zdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5pZCA9PSBfZFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFoYXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zTG9zdC5wdXNoKHsgaWQ6IF9kWzFdLCBhbW91bnQ6IE51bWJlcihfZFsyXSkgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNMb3N0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXNMb3N0W3hdLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNMb3N0W3hdLmFtb3VudCArPSBOdW1iZXIoX2RbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFRvb2xzLnBhcnNlU3RyaW5nKGRhdGEuaXRlbXMpLm1hcCgoX2Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBfZCA9IFRvb2xzLnBhcnNlU3RyaW5nKF9kLCBcIjpcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGl0ZW1zQmFjay5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5pZCA9PSBfZFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFoYXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zQmFjay5wdXNoKHsgaWQ6IF9kWzFdLCBhbW91bnQ6IE51bWJlcihfZFsyXSkgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNCYWNrLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXNCYWNrW3hdLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNCYWNrW3hdLmFtb3VudCArPSBOdW1iZXIoX2RbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB5QWRkID0gMCxcclxuICAgICAgICAgICAgX3ggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNMb3N0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTm9kZTogTGF5YS5Cb3ggPSB0aGlzLml0ZW0uY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChfeCA+IDIgJiYgIXlBZGQpIHtcclxuICAgICAgICAgICAgICAgIHlBZGQrKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHlBZGQgJiYgX3ggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICB5QWRkKys7XHJcbiAgICAgICAgICAgICAgICBfeCA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW1Ob2RlLnggPSAyMzAgKyBfeCAqIDE5MDtcclxuICAgICAgICAgICAgaXRlbU5vZGUueSA9IDEwNSArIHlBZGQgKiA5NTtcclxuICAgICAgICAgICAgX3grKztcclxuICAgICAgICAgICAgbGV0IHBsYW50ID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KGl0ZW1zTG9zdFt4XS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBpdGVtTm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgaWNvbi5za2luID0gcGxhbnQuaWNvbjtcclxuICAgICAgICAgICAgaWNvbi5zY2FsZSgwLjcsIDAuNyk7XHJcbiAgICAgICAgICAgIGljb24uYW5jaG9yWCA9IDAuNTtcclxuICAgICAgICAgICAgKGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwibGJcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGB4JHtpdGVtc0xvc3RbeF0uYW1vdW50fWA7XHJcbiAgICAgICAgICAgIHBsYW50LmdhaW4uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGQub2JqLmlkID09IENvbmZpZ0dhbWUuZGlhbW9uZElkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsb3N0R29sZCArPSBkLmNvdW50ICogaXRlbXNMb3N0W3hdLmFtb3VudDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNlbnRlclBhbmVsLmFkZENoaWxkKGl0ZW1Ob2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB5QWRkQmFjayA9IDA7XHJcbiAgICAgICAgX3ggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNCYWNrLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTm9kZTogTGF5YS5JbWFnZSA9IHRoaXMuaXRlbS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgaWYgKF94ID4gMSAmJiAheUFkZEJhY2spIHtcclxuICAgICAgICAgICAgICAgIHlBZGRCYWNrKys7XHJcbiAgICAgICAgICAgICAgICBfeCA9IC0yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh5QWRkQmFjayAmJiBfeCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHlBZGRCYWNrKys7XHJcbiAgICAgICAgICAgICAgICBfeCA9IC0yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW1Ob2RlLnggPSA0MjAgKyBfeCAqIDE5MDtcclxuICAgICAgICAgICAgaXRlbU5vZGUueSA9IDIwOCArIHlBZGQgKiA5NSArIHlBZGRCYWNrICogOTU7XHJcbiAgICAgICAgICAgIF94Kys7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGxhbnQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaXRlbXNCYWNrW3hdLmlkKTtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpY29uLnNraW4gPSBwbGFudC5pY29uO1xyXG4gICAgICAgICAgICBpY29uLnNjYWxlKDAuNywgMC43KTtcclxuICAgICAgICAgICAgaWNvbi5hbmNob3JYID0gMC41O1xyXG4gICAgICAgICAgICAoaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke2l0ZW1zQmFja1t4XS5hbW91bnR9YDtcclxuICAgICAgICAgICAgLy8gcGxhbnQuZ2Fpbi5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5kaWFtb25kSWQpIHJldHVybjtcclxuICAgICAgICAgICAgLy8gICAgIGxvc3RHb2xkICs9IGQuY291bnQgKiBpdGVtc0JhY2tbeF0uYW1vdW50O1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyUGFuZWwuYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb3N0TGIueSA9IDExNDtcclxuICAgICAgICB0aGlzLmJhY2tMYi55ID0gMjE4ICsgeUFkZCAqIDk1O1xyXG4gICAgICAgIHRoaXMuYm90dG9tTGIueSA9IDMwMSArIHlBZGQgKiA5NSArIHlBZGRCYWNrICogOTU7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MYi50ZXh0ID0gYFx1NTE3MVx1OEJBMVx1NjM1Rlx1NTkzMVx1NEU4NiR7bG9zdEdvbGR9XHU5MUQxXHU1RTAxXHVGRjBDJHtsb3N0RGlhbW9uZH1cdTk0QkJcdTc3RjNgO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuTWFpbERlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm1haWxEZWxldGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQ6IHRoaXMubWFpbElkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbCh0aGlzLm1haWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5NYWlsRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuLy8gIE1haWxWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlsVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxpc3QsIHRpcHM6XCJcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmVtcHR5X2xiLCB0aXBzOlwiXHU3QTdBXHU3Njg0XHU2M0QwXHU3OTNBXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBlbXB0eV9sYjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0RGF0YTogTWFpbFJldHVybkRhdGFbXSA9IFtdO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLmxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnJlbmRlckl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmVkKGxpc3Q6IE1haWxSZXR1cm5EYXRhW10gPSBbXSkge1xyXG4gICAgICAgIHRoaXMubGlzdERhdGEgPSBsaXN0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxpc3REYXRhKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5hcnJheSA9IHRoaXMubGlzdERhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gKGEucmVhZCA/IDAgOiAxMDAwMDAgKyBiLmNyZWF0ZVRpbWUpIC0gKGIucmVhZCA/IDAgOiAxMDAwMDAgKyBhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYi5jcmVhdGVUaW1lIC0gKGIucmVhZCA/IDEwMDAwMDAgOiAwKSAtIChhLmNyZWF0ZVRpbWUgLSAoYS5yZWFkID8gMTAwMDAwMCA6IDApKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gIXRoaXMubGlzdC5hcnJheS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5saXN0RGF0YVtpbmRleF07XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gXCJcdTdDRkJcdTdFREZcdTkwQUVcdTRFRjZcIjtcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZXNjXCIpIGFzIExheWEuTGFiZWxcclxuICAgICAgICApLnRleHQgPSBgJHtkYXRhLm1lc3NhZ2V9XHU2RjVDXHU1MTY1XHU4M0RDXHU1NzMwXHU1MDc3XHU4M0RDLFx1ODhBQlx1NzJEN1x1NzJEN1x1NTNEMVx1NzNCMFx1NUU3Nlx1OEZGRFx1NTJBMFx1NTZERVx1NEU4Nn5+YDtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke25ldyBEYXRlKFxyXG4gICAgICAgICAgICBkYXRhLmNyZWF0ZVRpbWVcclxuICAgICAgICApLnRvTG9jYWxlU3RyaW5nKFwiemgtQ05cIiwgeyBob3VyMTI6IGZhbHNlIH0pfWA7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwicmVhZF9pY29uXCIpIGFzIExheWEuSW1hZ2UpLnZpc2libGUgPSAhZGF0YS5yZWFkO1xyXG5cclxuICAgICAgICBjZWxsLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lLmluZGV4T2YoXCJpdGVtXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5tYWlsUmVhZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXRbXCJkYXRhU291cmNlXCJdLnJlYWQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLk1haWxEZXNjVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAobWFpbElkOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdERhdGEubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdERhdGFbeF0uaWQgPT0gbWFpbElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhLnNwbGljZSh4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5NYWlsVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZ3VyZUFuaSBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpfeCwgdGlwczpcIlx1N0VDOFx1NzBCOVx1NTc1MFx1NjgwN1wiLCB0eXBlOnR5cGU6U3RyaW5nfSovXHJcbiAgICBwcml2YXRlIF94OiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpfeSwgdGlwczpcIlx1N0VDOFx1NzBCOVx1NTc1MFx1NjgwN1wiLCB0eXBlOnR5cGU6U3RyaW5nfSovXHJcbiAgICBwcml2YXRlIF95OiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZWxheSwgdGlwczpcIlx1NUVGNlx1OEZERlwiLCB0eXBlOnR5cGU6U3RyaW5nfSovXHJcbiAgICBwcml2YXRlIGRlbGF5OiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aW1lLCB0aXBzOlwiXHU2NUY2XHU5NUY0XCIsIHR5cGU6dHlwZTpTdHJpbmd9Ki9cclxuICAgIHByaXZhdGUgdGltZTogc3RyaW5nID0gXCIxMDAwMFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm93bmVyIGFzIExheWEuQW5pbWF0aW9uO1xyXG4gICAgICAgIG5vZGUuYWxwaGEgPSAwO1xyXG4gICAgICAgIGxldCBvbGRQb3MgPSB7IHg6IG5vZGUueCwgeTogbm9kZS55IH07XHJcbiAgICAgICAgbGV0IGRlbGF5ID0gTnVtYmVyKHRoaXMuZGVsYXkpO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8obm9kZSwgeyBhbHBoYTogMSB9LCA2MDAsIG51bGwsIG51bGwsIGRlbGF5KTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICB7IHg6IHRoaXMuX3gsIHk6IHRoaXMuX3kgfSxcclxuICAgICAgICAgICAgTnVtYmVyKHRoaXMudGltZSksXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wb3Mob2xkUG9zLngsIG9sZFBvcy55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbmFibGUoKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRlbGF5XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7fVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IE9yZGVyQmFzZSwgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5cclxuLy9jbGFzcyBPcmRlclZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm9yZGVyTGlzdCwgdGlwczpcIlx1OEJBMlx1NTM1NVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGUsfSovXHJcbiAgICBwcml2YXRlIG9yZGVyTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6YnRuTG9ja1JlcywgdGlwczpcIlx1OEJBMlx1NTM1NVx1NjMwOVx1OTRBRVx1NjcyQVx1NUI4Q1x1NjIxMFwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGJ0bkxvY2tSZXM6IHN0cmluZyA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YnRuUmVzQ3VyLCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU2MzA5XHU5NEFFXHU1RjUzXHU1MjREXHU3MkI2XHU2MDAxXHU2MzA5XHU5NEFFXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgYnRuUmVzQ3VyOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRvcERlc2MsIHRpcHM6XCJcdTk4NzZcdTkwRThcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcERlc2M6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBPcmRlckJhc2VbXTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gVGFibGVBbmFseXplLnRhYmxlKFwib3JkZXJcIikubGlzdDtcclxuICAgICAgICBsZXQgb3JkZXJPbGRMdiA9IFVzZXJJbmZvLm9yZGVyTGV2ZWwgfHwgMDtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGEuaWQgKiAoYi5pZCA8PSBvcmRlck9sZEx2ID8gLTEgOiAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIGEuaWQgKyAoYS5pZCA8PSBvcmRlck9sZEx2ID8gMjAwMCA6IDApIC0gKGIuaWQgKyAoYi5pZCA8PSBvcmRlck9sZEx2ID8gMjAwMCA6IDApKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LmFycmF5ID0gdGhpcy5kYXRhTGlzdDtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnJlbmRlckxpc3QpO1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICBsZXQgc3RlcCA9IDAsXHJcbiAgICAgICAgICAgIHJld2FyZDogUmV3YXJkQ3VycmVuY3lCYXNlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5kYXRhTGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhTGlzdFt4XS5pZCA+PSBVc2VySW5mby5vcmRlckxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwKys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhTGlzdFt4XS5leHRyYVJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJld2FyZCA9IHRoaXMuZGF0YUxpc3RbeF0uZXh0cmFSZXdhcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0ZXApIHtcclxuICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWwgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwid2l0aGRyYXdhbFwiKS52YWx1ZSBhcyBzdHJpbmdbXTtcclxuICAgICAgICAgICAgKHRoaXMudG9wRGVzYy5nZXRDaGlsZEF0KDApIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICAgICAgc3RlcCA9PSAxID8gXCJcdTVCOENcdTYyMTBcdTVGNTNcdTUyNERcdThCQTJcdTUzNTVcdTUzRUZcdTgzQjdcdTVGOTdcdTdFQTJcdTUzMDVcIiA6IGBcdTUxOERcdTVCOENcdTYyMTAke3N0ZXB9XHU1MzU1XHU1M0VGXHU4M0I3XHU1Rjk3XHU3RUEyXHU1MzA1YDtcclxuICAgICAgICAgICAgKHRoaXMudG9wRGVzYy5nZXRDaGlsZEF0KDEpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHsoXHJcbiAgICAgICAgICAgICAgICAoTnVtYmVyKHdpdGhkcmF3YWxbMl0pIC8gTnVtYmVyKHdpdGhkcmF3YWxbMV0pKSAqXHJcbiAgICAgICAgICAgICAgICByZXdhcmQuY291bnRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5tYXRjaCgvXlxcZCsoPzpcXC5cXGR7MCwyfSk/Lyl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJMaXN0KGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5kYXRhTGlzdFtpXSxcclxuICAgICAgICAgICAgcmV3YXJkOiBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICAgICAgICAgIHJld2FyZENvdW50OiBudW1iZXIgPSAwLFxyXG4gICAgICAgICAgICBjdXJDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIG1heENvdW50ID0gMCxcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwLFxyXG4gICAgICAgICAgICByZXdhcmRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgb3JkZXJfbHYgPSBjZWxsLmdldENoaWxkQnlOYW1lKFwib3JkZXJfbHZcIikgYXMgTGF5YS5MYWJlbDtcclxuICAgICAgICBvcmRlcl9sdi50ZXh0ID0gYCR7ZC5pZH1cdTdFQTdcdThCQTJcdTUzNTVgO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDQ7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtX1wiICsgeCkgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgICAgIGlmIChkLmNvbmRpdGlvblt4XSkge1xyXG4gICAgICAgICAgICAgICAgY3VyQ291bnQgPSBXYXJlaG91c2VTZXJ2aWNlLmdldE9uZShkLmNvbmRpdGlvblt4XS5wbGFudC5pZCk/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgICAgICAgICBtYXhDb3VudCA9IGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJDb3VudCA+PSBtYXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmNvbmRpdGlvblt4XS5wbGFudC5pY29uO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuaWQgPCBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHttYXhDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID0gODc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtjdXJDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgODcgKiAoY3VyQ291bnQgLyBtYXhDb3VudCA+IDEgPyAxIDogY3VyQ291bnQgLyBtYXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkLmNvbmRpdGlvblt4XS5wbGFudC5nYWluLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5vYmouaWQgPT09IENvbmZpZ0dhbWUuZ29sZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmQgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICs9IGUuY291bnQgKiBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGlhbW9uZCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRfYm94X2RpYW1vbmRcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBsZXQgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBmaW5pc2hJY29uID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaFwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBjdXJJY29uID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImN1cl9pY29uXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGx2X2JveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJsdl9ib3hcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBmaW5pc2hJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBjdXJJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBkaWFtb25kLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgcmV3YXJkQm94LnkgPSA1NztcclxuICAgICAgICBsdl9ib3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgb3JkZXJfbHYudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGQuaWQgPiBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAvL1x1NjcyQVx1NkZDMFx1NkQzQlxyXG4gICAgICAgICAgICBidG4uc2tpbiA9IHRoaXMuYnRuTG9ja1JlcztcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoZC5leHRyYVJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIChkaWFtb25kLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZC5leHRyYVJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIChkaWFtb25kLmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGArJHtkLmV4dHJhUmV3YXJkLmNvdW50fWA7XHJcbiAgICAgICAgICAgICAgICBkaWFtb25kLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGQuaWQgPT0gVXNlckluZm8ub3JkZXJMZXZlbCArIDEpIHtcclxuICAgICAgICAgICAgICAgIC8vXHU1RjUzXHU1MjREXHJcbiAgICAgICAgICAgICAgICBpZiAoZC5leHRyYVJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ckljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbHZfYm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBidG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyX2x2LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAoZGlhbW9uZC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuZXh0cmFSZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFtb25kLmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5MYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICkudGV4dCA9IGArJHtkLmV4dHJhUmV3YXJkLmNvdW50fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbW9uZC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLnNraW4gPSB0aGlzLmJ0blJlc0N1cjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1REYyXHU1QjhDXHU2MjEwXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9cdTVERjJcdTVCOENcdTYyMTBcclxuICAgICAgICAgICAgICAgIC8vIGJ0bi5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmaW5pc2hJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuZXh0cmFSZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDEwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJld2FyZCkge1xyXG4gICAgICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gcmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGArJHtcclxuICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICsgTWF0aC5yb3VuZChyZXdhcmRDb3VudCAqIGQuY29tbWlzc2lvbilcclxuICAgICAgICAgICAgfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVyVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlclZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxlZnRCb3gsIHRpcHM6XCJcdTRFOTFcdTVERTZcdThGQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBsZWZ0Qm94OiBMYXlhLkJveDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpyaWdodEJveCwgdGlwczpcIlx1NEU5MVx1NURFNlx1OEZCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHJpZ2h0Qm94OiBMYXlhLkJveDtcclxuXHJcbiAgICBvbkhkRW5hYmxlKCkge31cclxuXHJcbiAgICBvbk9wZW5lZChkYXRhOiB7IGNhbGw6IHsgKE92ZXJWaWV3KTogdm9pZCB9IH0pIHtcclxuICAgICAgICAvLyB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgaWYgKGRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgZGF0YS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZShjYWxsOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMubGVmdEJveC54ID0gLTk4NztcclxuICAgICAgICB0aGlzLnJpZ2h0Qm94LnggPSAxMDI1O1xyXG4gICAgICAgIHRoaXMubGVmdEJveC5hbHBoYSA9IDA7XHJcbiAgICAgICAgdGhpcy5yaWdodEJveC5hbHBoYSA9IDA7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLmxlZnRCb3gsIHsgeDogMCwgYWxwaGE6IDEgfSwgNTAwKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm94LFxyXG4gICAgICAgICAgICB7IHg6IDAsIGFscGhhOiAxIH0sXHJcbiAgICAgICAgICAgIDUwMCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbCkgY2FsbCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbihjYWxsOiBGdW5jdGlvbikge1xyXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5sZWZ0Qm94LCB7IHg6IC05ODcsIGFscGhhOiAwIH0sIDUwMCk7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJveCxcclxuICAgICAgICAgICAgeyB4OiAxMDI1LCBhbHBoYTogMCB9LFxyXG4gICAgICAgICAgICA1MDAsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGwpIGNhbGwoKTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuT3ZlclZpZXcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBEYXRhQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwRGF0YUNvbnRyb2xcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vL2NsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm11c2ljTm9kZSwgdGlwczpcIlx1OTdGM1x1NEU1MFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbXVzaWNOb2RlOiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c291bmROb2RlLCB0aXBzOlwiXHU5N0YzXHU2NTQ4XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzb3VuZE5vZGU6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphdmF0YXJOb2RlLCB0aXBzOlwiXHU3M0E5XHU1QkI2XHU1OTM0XHU1MENGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhdmF0YXJOb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpuaWNrbmFtZSwgdGlwczpcIlx1NzNBOVx1NUJCNlx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbmlja25hbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnVzZXJLZXksIHRpcHM6XCJcdTc1MjhcdTYyMzdcdTUzQ0JcdTYwQzVcdTc4MDFcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHVzZXJLZXk6IExheWEuTGFiZWw7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY0NoYW5nZSgpO1xyXG4gICAgICAgIHRoaXMuc291bmRDaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyS2V5LnRleHQgPSBgXHU5MDgwXHU4QkY3XHU3ODAxXHVGRjFBJHtVc2VySW5mby5rZXl9YDtcclxuXHJcbiAgICAgICAgQ29yZS5vYnNlcnZhYmxlUHJvcGVydHlcclxuICAgICAgICAgICAgLndhdGNoKFVzZXJJbmZvLCB0aGlzKVxyXG4gICAgICAgICAgICAua2V5KFwiYXZhdGFyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkgdGhpcy5hdmF0YXJOb2RlLnNraW4gPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwibmlja25hbWVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmlja25hbWUudGV4dCA9IGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU2V0dGluZ1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibXVzaWNcIjpcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ubXVzaWNNdXRlZCA9ICFDb3JlLmF1ZGlvLm11c2ljTXV0ZWQ7XHJcbiAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJtdXNpY1wiLCBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubXVzaWNDaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQgPSAhQ29yZS5hdWRpby5zb3VuZE11dGVkO1xyXG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwic291bmRcIiwgQ29yZS5hdWRpby5zb3VuZE11dGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwic2lnbl9vdXRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTc4NkVcdThCQTRcdTg5ODFcdTkwMDBcdTUxRkFcdTc2N0JcdTVGNTVcdUZGMUZcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ0b2tlblwiLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSHR0cERhdGFDb250cm9sLmxvZ2luT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5sb2dpbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkxvZ2luVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMubG9naW5fZ2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVzZXJfYWdyZWVtZW50XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1NzUyOFx1NjIzN1x1NTM0Rlx1OEJBRVxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAuc2VydmljZUFncmVlbWVudCwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByaXZhY3lcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5NjkwXHU3OUMxXHU2NTNGXHU3QjU2XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5wcml2YWN5QWdyZWVtZW50LCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWJvdXRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5BYm91dFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb3B5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3B5KCkge1xyXG4gICAgICAgIGxldCBhOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgYS52YWx1ZSA9IFVzZXJJbmZvLmtleTtcclxuICAgICAgICBhLnNlbGVjdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgICAgICBhLnJlbW92ZSgpO1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU1OTBEXHU1MjM2XHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbXVzaWNDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5tdXNpY05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBjb25zdCBpY29uID0gYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG5cclxuICAgICAgICBsZXQgbXVzaWMgPSBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXVzaWMpO1xyXG5cclxuICAgICAgICBpY29uLnggPSAhbXVzaWMgPyAtMTQgOiA5MTtcclxuICAgICAgICBpY29uLnNraW4gPSAhbXVzaWMgPyBgZ2FtZS9pbWdfbXVzaWNPbkJ0bi5wbmdgIDogXCJnYW1lL2ltZ19tdXNpY09mZkJ0bi5wbmdcIjtcclxuICAgICAgICBib3guc2tpbiA9ICFtdXNpYyA/IGBnYW1lL2ltZ19zd2l0Y2hPbi5wbmdgIDogXCJnYW1lL2ltZ19zd2l0aE9mZi5wbmdcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNvdW5kQ2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnN0IGJveCA9IHRoaXMuc291bmROb2RlLmdldENoaWxkQnlOYW1lKFwiYm94XCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBsZXQgc291bmQgPSBDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQ7XHJcbiAgICAgICAgaWNvbi54ID0gIXNvdW5kID8gLTE0IDogOTE7XHJcbiAgICAgICAgaWNvbi5za2luID0gIXNvdW5kID8gYGdhbWUvaW1nX211c2ljT25CdG4ucG5nYCA6IFwiZ2FtZS9pbWdfbXVzaWNPZmZCdG4ucG5nXCI7XHJcbiAgICAgICAgYm94LnNraW4gPSAhc291bmQgPyBgZ2FtZS9pbWdfc3dpdGNoT24ucG5nYCA6IFwiZ2FtZS9pbWdfc3dpdGhPZmYucG5nXCI7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IEZlZWRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVlZERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IEZlZWRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBGZWVkU2VydmljZSB7XHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBsaXN0OiBGZWVkRGF0YUJhc2VbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NTcwXHU2MzZFXHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwiZmVlZFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogZCxcclxuICAgICAgICAgICAgICAgIGxvY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZlZWRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgRmVlZEJhc2UsIFBsYW50QmFzZSwgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCJzcmMvY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBGZWVkU2VydmljZSwgeyBGZWVkRGF0YUJhc2UgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0ZlZWRTZXJ2aWNlXCI7XHJcbmltcG9ydCBQZXRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZVwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBNYWluVmlldywgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3BWaWV3RGF0YSB7XHJcbiAgICAvKiogXHU3NTRDXHU5NzYydGFnXHU0RTBCXHU2ODA3aWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFICovXHJcbiAgICBwYXJtPzogYW55O1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Cb3hUb3AsIHRpcHM6XCJcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTUyMTdcdTg4NjhcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJ0bkJveFRvcDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tQm94LCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21Cb3g6IExheWEuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWVkRGVzYywgdGlwczpcIlx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VlZERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZVRpbWUsIHRpcHM6XCJcdTYyMTBcdTcxOUZcdTY1RjZcdTk1RjRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZVRpbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZUdhaW5Cb3gsIHRpcHM6XCJcdTY1MzZcdTc2Q0FcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZUdhaW5Cb3g6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvY2tCdG5Cb3gsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTYzMDlcdTk0QUVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvY2tCdG5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtQnV5QnRuLCB0aXBzOlwiXHU4RDJEXHU0RTcwXHU2MzA5XHU5NEFFXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtQnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWRCdXlCdG4sIHRpcHM6XCJcdTk5NzJcdTY1OTlcdThEMkRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZlZWRCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWREZXNjLCB0aXBzOlwiXHU5OTcyXHU2NTk5XHU2M0NGXHU4RkYwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBmZWVkRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTVCQTBcdTcyNjlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRJY29uLCB0aXBzOlwiXHU1QkEwXHU3MjY5aWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0SWNvbjogTGF5YS5BbmltYXRpb24gPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldERlc2MsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldE5hbWUsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldE5hbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5TWF4LCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU0RTBBXHU5NjUwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eU1heDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0QnV5QnRuLCB0aXBzOlwiXHU4RDJEXHU0RTcwXHU1QkEwXHU3MjY5XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXRCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvV2F0Y2gsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTc3MEJcdTVCQjZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGdvV2F0Y2g6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvUmVzdCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NEYxMVx1NjA2RlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29SZXN0OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1OTRCMVx1NUU4NFxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRpYW1vbmRGb250LCB0aXBzOlwiXHU3NTI4XHU2MjM3XHU5NEJCXHU3N0YzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkaWFtb25kRm9udDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMaXN0LCB0aXBzOlwiXHU5NEIxXHU1RTg0XHU2M0QwXHU3M0IwXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJvcG9ydGlvbiwgdGlwczpcIlx1NTE1MVx1NjM2Mlx1NkJENFx1NEY4QlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJvcG9ydGlvbjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogXHU1M0VGXHU2M0QwXHU3M0IwXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIHByaWNlRGF0YUxpc3Q6IHsgcHJpY2U6IG51bWJlcjsgdGltZXM6IG51bWJlciB9W10gPSBbXTtcclxuICAgIC8qKiBcdTk0QjFcdTVFODRcdTkwMDlcdTYyRTlcdTc2ODRcdTUwM0MgXHU3Njg0XHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHByaWNlU2VsZWN0SW5kZXg6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NjU4N1x1NUI1N1x1OEQ0NFx1NkU5MFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBidG5Ub3BSZXNMaXN0OiBzdHJpbmdbXVtdID0gW1xyXG4gICAgICAgIFtcImdhbWUvaW1nX3NlZWRzTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3NlZWRzU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX3BldE5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19wZXRTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfZm9vZG5Ob3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfZm9vZG5TZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfYmFua05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19iYW5rU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgXTtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThcdTUyMDdcdTYzNjJcdTY4MDdcdTdCN0VcdTkwMDlcdTYyRTlcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgdG9wQnRuU2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU3MEI5XHU1MUZCXHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0U2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU4MENDXHU2NjZGXHU3RUI5XHU3NDA2ICovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxlY3RCZzogc3RyaW5nW10gPSBbXCJnYW1lL2ltZ19wZXRiYWdOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfcGV0YmFnU2VsZWN0ZWQucG5nXCJdO1xyXG5cclxuICAgIC8qKiBcdTVGNTNcdTUyNERcdTkwMDlcdTYyRTlcdTc2ODRcdTVCQTBcdTcyNjlcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0UGV0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGRhdGE6IFNob3BWaWV3RGF0YTtcclxuXHJcbiAgICBwcml2YXRlIGlzRmlyc3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlSXRlbSk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5zZWxlY3RIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLm9uU2VsZWN0KTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5wcmljZUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlUHJpY2VJdGVtKTtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC5zZWxlY3RIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLm9uUHJpY2VTZWxlY3QpO1xyXG5cclxuICAgICAgICBDb3JlLm9ic2VydmFibGVQcm9wZXJ0eS53YXRjaChVc2VySW5mbywgdGhpcykua2V5KFwiZGlhbW9uZFwiLCAodikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpYW1vbmRGb250LnZhbHVlID0gdjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3aXRoZHJhd2FsID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxcIikudmFsdWUgYXMgc3RyaW5nW107XHJcbiAgICAgICAgICAgIHRoaXMucHJvcG9ydGlvbi50ZXh0ID0gYCA9IFx1MDBBNSR7KChOdW1iZXIod2l0aGRyYXdhbFsyXSkgLyBOdW1iZXIod2l0aGRyYXdhbFsxXSkpICogdilcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2goL15cXGQrKD86XFwuXFxkezAsMn0pPy8pfVx1NTE0M2A7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQoZTogU2hvcFZpZXdEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICB0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID0gZT8uaWQgfHwgMDtcclxuXHJcbiAgICAgICAgdGhpcy5wcmljZURhdGFMaXN0ID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxfdGltZXNcIikudmFsdWUgYXMgYW55O1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1OTAwOVx1NEUyRFx1NjVGNlx1NzY4NFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHBhcmFtIGUgXHU5MDA5XHU0RTJEXHU3Njg0XHU0RTBCXHU2ODA3XHJcbiAgICAgKi9cclxuICAgIG9uU2VsZWN0KGUpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXggPSBlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU3OUNEXHU1QjUwXHU2MjE2XHU5OTZFXHU2NTk5XHU1MjE3XHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldERhdGFMaXN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBsYW50U2VydmljZS5saXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGlmICghRmVlZFNlcnZpY2UubGlzdC5sZW5ndGgpIEZlZWRTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIEZlZWRTZXJ2aWNlLmxpc3Quc29ydCgoYSwgYikgPT4gYS5iYXNlLnZpdGFsaXR5IC0gYi5iYXNlLnZpdGFsaXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMzJcdTY3RDNcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTc2ODRcdTUyMTdcdTg4NjhcclxuICAgICAqIEBwYXJhbSBjZWxsIFx1NTIxN1x1ODg2OFx1ODI4Mlx1NzBCOVxyXG4gICAgICogQHBhcmFtIGluZGV4IFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbaW5kZXhdO1xyXG4gICAgICAgIGxldCBwcmljZUJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBsb2NrSWNvbiA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrX2ljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoIWQpIHJldHVybiBjb25zb2xlLndhcm4oXCJcdTY1NzBcdTYzNkVcdTRFMjJcdTU5MzFcIik7XHJcbiAgICAgICAgaWYgKGQubG9jaykge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbG9ja0ljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICBpY29uID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPFBsYW50QmFzZT5kLmJhc2UpLnNlZWRfcHJpY2UuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gKDxQbGFudEJhc2U+ZC5iYXNlKS5zZWVkX3ByaWNlLm9iai5pY29uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5jb3VudDtcclxuICAgICAgICAgICAgICAgIGljb24gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKHByaWNlQm94LmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gY291bnQgKyBcIlwiO1xyXG4gICAgICAgICAgICAocHJpY2VCb3guZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkX2ljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGljb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuYmFzZS5pY29uO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gZC5iYXNlLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMV07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0RGVzYygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NEY0RVx1OTBFOFx1RkYwQ1x1OTAwOVx1NjJFOVx1NzI2OVx1NTRDMVx1NjVGNlx1NzY4NFx1NjU3MFx1NjM2RVx1NjYzRVx1NzkzQVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdERlc2MoKSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XTtcclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgICAgICAgICAodGhpcy5zZWVkRGVzYy5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2MucmVwbGFjZShcIiZcIiwgKDxGZWVkQmFzZT5kLmJhc2UpLnZpdGFsaXR5ICsgXCJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZERlc2MudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBib3ggPSB0aGlzLmZlZWRCdXlCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0LmNvdW50ICsgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgICAgICBsZXQgYmFzZSA9IGQuYmFzZSBhcyBQbGFudEJhc2U7XHJcbiAgICAgICAgKHRoaXMuc2VlZERlc2MucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZlZWREZXNjLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZWREZXNjLnRleHQgPSBiYXNlLmRlc2M7XHJcbiAgICAgICAgdGhpcy5tYXR1cmVUaW1lLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKGJhc2UubWF0dXJlX3RpbWUpO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtQnV5QnRuLnZpc2libGUgPSAhZC5sb2NrO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXRlbUJ1eUJ0bi52aXNpYmxlID0gIWQubG9jaztcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMubG9ja0J0bkJveC52aXNpYmxlID0gZC5sb2NrO1xyXG4gICAgICAgIHRoaXMubG9ja0J0bkJveC5hY3RpdmUgPSBkLmxvY2s7XHJcbiAgICAgICAgbGV0IGdhaW5MaXN0ID0gYmFzZS5nYWluO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQm94ID0gdGhpcy5tYXR1cmVHYWluQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgICAgICBpY29uID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgIGdhaW5EYXRhID0gZ2Fpbkxpc3RbeCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBiYXNlLmhhcnZlc3Q7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gYmFzZS5pY29uO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhaW5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gZ2FpbkRhdGEub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGdhaW5EYXRhLmNvdW50ICogYmFzZS5oYXJ2ZXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAoaXRlbUJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGljb247XHJcbiAgICAgICAgICAgIChpdGVtQm94LmdldENoaWxkQnlOYW1lKFwiY291bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IFwieFwiICsgY291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYm94ID0gdGhpcy5sb2NrQnRuQm94LmdldENoaWxkQnlOYW1lKFwidW5sb2NrX2J1eVwiKS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuXHJcbiAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGJhc2UudW5sb2NrX2Nvc3Q/Lm9iaj8uaWNvbjtcclxuICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBiYXNlLnVubG9ja19jb3N0Py5jb3VudCArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwic2VlZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicGV0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJmZWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYW5rXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wQnRuSW5kZXggPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEluZGV4KGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ICE9IHRvcEJ0bkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IE51bWJlcih0b3BCdG5JbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL1x1NjRBRFx1NzlDRFxyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsYW5kSWQgPSB0aGlzLmRhdGE/LnBhcm0/LmxhbmRJZDtcclxuICAgICAgICAgICAgICAgIGlmICghbGFuZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZElkID0gTWFpblZpZXcuaW5zdC5nZXRFbXB0eUxhbmRJZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFsYW5kSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NkNBMVx1NjcwOVx1N0E3QVx1NzY4NFx1NTcxRlx1NTczMFx1NTRFNlx1RkYwMVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wic293XCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogbGFuZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0uYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwodGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxhbnRfc293LCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9cdTVFN0ZcdTU0NEFcdTg5RTNcdTk1MDFcdUZGMENcdTYyMTZcdTY2MkZcdTkxRDFcdTVFMDFcdTg5RTNcdTk1MDExXHJcbiAgICAgICAgICAgIGNhc2UgXCJ1bmxvY2tfYnV5XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZF91bmxvY2tcIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5zZWVkc1VubG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJzZWVkc1VubG9ja1wiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFudElkOiB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwiYWRfdW5sb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVBRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYW50U2VydmljZS5saXN0W3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0ubG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmNoYW5nZUl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGFudFNlcnZpY2UubGlzdFt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gXCJhZF91bmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCBlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcIkZyZWV1bmxvY2tcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0UGV0SW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCA9IFBldFNlcnZpY2UubGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdFBldEluZGV4ID49IFBldFNlcnZpY2UubGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBldF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0QnV5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX3dhdGNoXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBldEdvV2F0Y2goUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdLmJhc2UuaWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19yZXN0XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OUVEOFx1OEJBNFx1NEY2OVx1NjIzNFx1N0IyQ1x1NEUwMFx1NEUyQVx1NUJBMFx1NzI2OVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRHb1dhdGNoKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmZWVkX2J1eVwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTk5NzJcdTY1OTlcdThEMkRcdTRFNzBcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJ1eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aXRoZHJhd19idG5cIjpcclxuICAgICAgICAgICAgICAgIC8vXHU2M0QwXHU3M0IwXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpdGhkcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWNvcmRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5XaXRoZHJhd1JlY29yZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3BlbldpdGhkcmF3UmVjb3JkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC53aXRoZHJhd1JlY29yZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuV2l0aGRyYXdSZWNvcmRWaWV3LCB7IHBhcm06IGQgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmVlZEJ1eSgpIHtcclxuICAgICAgICBsZXQgZmVlZCA9IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdIGFzIEZlZWREYXRhQmFzZTtcclxuICAgICAgICBpZiAoIWZlZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZmVlZEJ1eSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZmVlZEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlZElkOiBmZWVkLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgKz0gZmVlZC5iYXNlLnZpdGFsaXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLmZlZWRCdXlCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBmZWVkLmJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBub3RGbHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUJBMFx1NzI2OVx1NTNCQlx1NzcwQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBldEdvV2F0Y2gocGV0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5wZXRXZWFyLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJwZXRCdXlcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHBldElkOiBwZXRJZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ud2FyZVBldElkID0gcGV0SWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwZXRCdXkoKSB7XHJcbiAgICAgICAgbGV0IHsgYmFzZSB9ID0gUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdO1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5wZXRCdXksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInBldEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgcGV0SWQ6IGJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdLmxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIFVzZXJJbmZvLndhcmVQZXRJZCA9IGJhc2UuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLnBldFZpdGFsaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgPSBiYXNlLnZpdGFsaXR5X21heDtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5kaWdlc3RDb3VudERvd24gPSBDb25maWdHYW1lLnBldERpZ2VzdEludGVydmFsVGltZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NzBCOVx1NTFGQlx1NzBCOVx1NTFGQlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRvcEJ0blN0YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5idG5Cb3hUb3AubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgbGIgPSBidG4uZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nLW1lbnVzZWxlY3RlZC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudW5vcm1hbC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQm90dG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTVFOTVcdTkwRThcdTUxODVcdTVCQjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVCb3R0b20oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvdHRvbUJveC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoeCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXRlbUJ1eUJveCA9IHRoaXMuaXRlbUJ1eUJ0bi5wYXJlbnQgYXMgTGF5YS5Cb3g7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IC8vXHU3OUNEXHU1QjUwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQZXRPckZlZWRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8vXHU5OTcyXHU2NTk5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQZXRPckZlZWRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5hcnJheSA9IHRoaXMucHJpY2VEYXRhTGlzdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NUJBMFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBldCgpIHtcclxuICAgICAgICBpZiAoIVBldFNlcnZpY2UubGlzdC5sZW5ndGgpIFBldFNlcnZpY2UuaW5pdChbXSk7XHJcbiAgICAgICAgbGV0IHBldCA9IFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XTtcclxuICAgICAgICB0aGlzLnBldEljb24uc291cmNlID0gYHJlcy9kb2dfJHtwZXQuYmFzZS5pZH0uYXRsYXNgO1xyXG4gICAgICAgIHRoaXMucGV0TmFtZS50ZXh0ID0gcGV0LmJhc2UubmFtZTtcclxuICAgICAgICB0aGlzLnBldERlc2MudGV4dCA9IHBldC5iYXNlLmRlc2M7XHJcbiAgICAgICAgdGhpcy52aXRhbGl0eU1heC52YWx1ZSA9IHBldC5iYXNlLnZpdGFsaXR5X21heCArIFwiXCI7XHJcbiAgICAgICAgbGV0IGJ0bl9ib3ggPSB0aGlzLnBldEJ1eUJ0bi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKGJ0bl9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBwZXQuYmFzZS5jb3N0Lm9iai5pY29uO1xyXG4gICAgICAgIChidG5fYm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBwZXQuYmFzZS5jb3N0LmNvdW50ICsgXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IHBldEJveCA9IHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoMSksXHJcbiAgICAgICAgICAgIGZpbmRCb3ggPSBwZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5kX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgYmFja19ib3ggPSBwZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgc3Rhckljb246IExheWEuSW1hZ2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4KyspIHtcclxuICAgICAgICAgICAgc3Rhckljb24gPSBmaW5kQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgc3Rhckljb24udmlzaWJsZSA9IHggKiAyMCA8IHBldC5iYXNlLnNlbnNpdGl2ZTtcclxuICAgICAgICAgICAgc3Rhckljb24uc2tpbiA9XHJcbiAgICAgICAgICAgICAgICB4ICogMjAgKyAxMCA8IHBldC5iYXNlLnNlbnNpdGl2ZSA/IFwiZ2FtZS9pbWdfc3Rhci5wbmdcIiA6IFwiZ2FtZS9pbWdfaGFsZnN0YXIucG5nXCI7XHJcbiAgICAgICAgICAgIHN0YXJJY29uID0gYmFja19ib3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi52aXNpYmxlID0geCAqIDIwIDwgcGV0LmJhc2UuYWJpbGl0eTtcclxuICAgICAgICAgICAgc3Rhckljb24uc2tpbiA9XHJcbiAgICAgICAgICAgICAgICB4ICogMjAgKyAxMCA8IHBldC5iYXNlLmFiaWxpdHkgPyBcImdhbWUvaW1nX3N0YXIucG5nXCIgOiBcImdhbWUvaW1nX2hhbGZzdGFyLnBuZ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGV0LmxvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wZXRCdXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ29SZXN0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nb1dhdGNoLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8ud2FyZVBldElkID09IHBldC5iYXNlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoUGV0U2VydmljZS5nZXRVbmxvY2tMZW4oKSA9PT0gMSB8fCBVc2VySW5mby53YXJlUGV0SWQgPT09IDEwMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29XYXRjaC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvV2F0Y2gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucGV0QnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkxQ0RcdTdGNkVcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNldFBldE9yRmVlZExpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmdldERhdGFMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTRFMkRcdTk1RjRcdTUxODVcdTVCQjlcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTUyMDdcdTYzNjJcclxuICAgICAqIEBwYXJhbSBpIFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQ2VudGVyQm94U3RhdGUoaTogbnVtYmVyLCBzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoaSkgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KGkpIGFzIExheWEuQm94KS5hY3RpdmUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5NEIxXHU1RTg0XHU5MDA5XHU2MkU5XHJcbiAgICAgKiBAcGFyYW0gZSBcdTRFMEJcdTY4MDdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvblByaWNlU2VsZWN0KGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJpY2VTZWxlY3RJbmRleCA9IGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NzNCMFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHdpdGhkcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByaWNlU2VsZWN0SW5kZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTAwOVx1NjJFOVx1ODk4MVx1NjNEMFx1NzNCMFx1NzY4NFx1OTFEMVx1OTg5RFwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAud2l0aGRyYXcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGlkOiB0aGlzLnByaWNlU2VsZWN0SW5kZXggfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjNEMFx1NzNCMFx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLndpdGhkcmF3ID0gZC5saXN0O1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IGQuZGlhbW9uZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiV2l0aGRyYXdhbFwiIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTRCMVx1NUU4NFx1NjU3MFx1NjM2RVx1NkUzMlx1NjdEM1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVByaWNlSXRlbShjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMucHJpY2VEYXRhTGlzdFtpXTtcclxuXHJcbiAgICAgICAgbGV0IHVzZXJEYXRhOiBOZXRJbml0W1wid2l0aGRyYXdcIl1bMF0gPSB7IGlkOiAwLCB0aW1lczogMCB9O1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhTGlzdCA9IFVzZXJJbmZvLndpdGhkcmF3O1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdXNlckRhdGFMaXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyRGF0YUxpc3RbeF0uaWQgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgdXNlckRhdGEgPSB1c2VyRGF0YUxpc3RbeF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gZGF0YS5wcmljZSArIFwiXHU1MTQzXCI7XHJcbiAgICAgICAgaWYgKGRhdGEudGltZXMpIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVzID0gZGF0YS50aW1lcyAtIHVzZXJEYXRhLnRpbWVzO1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVzX2JveFwiKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZXNfYm94XCIpLmdldENoaWxkQnlOYW1lKFwidGltZXNcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTUyNjlcdTRGNTkke1xyXG4gICAgICAgICAgICAgICAgdGltZXMgPCAwID8gMCA6IHRpbWVzXHJcbiAgICAgICAgICAgIH1cdTZCMjFgO1xyXG4gICAgICAgICAgICBpZiAodGltZXMgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVzX2JveFwiKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJpY2VMaXN0LnNlbGVjdGVkSW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID0gXCJnYW1lL2ltZ19wcmljZXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IFwiZ2FtZS9pbWdfcHJpY2Vub3JtYWwucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbkluRGVzY1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JbkRlc2NWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU2lnbkluRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbi8vICBTaWduSW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5WaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluTGlzdCwgdGlwczpcIlx1N0I3RVx1NTIzMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25Jbkxpc3Q6IExheWEuTGlzdDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluUHJvZ3Jlc3NMYiwgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25JblByb2dyZXNzTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluUHJvZ3Jlc3NCYXIsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY3NjFcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBzaWduSW5Qcm9ncmVzc0JhcjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcm9ncmVzc0Rlc2MsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY1ODdcdTVCNTdcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBwcm9ncmVzc0Rlc2M6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmluaXNoSWNvbiwgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1NjU4N1x1NUI1N1x1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIGZpbmlzaEljb246IExheWEuSW1hZ2U7XHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QuYXJyYXkgPSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdDtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2lnbkluTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVByb2dyZXNzKCkge1xyXG4gICAgICAgIGxldCBzY2FsZSA9IFVzZXJJbmZvLnNwZWVkVXBUaW1lcyAvIENvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXM7XHJcbiAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuc2lnbkluUHJvZ3Jlc3NCYXIud2lkdGggPSA5NzcgKiBzY2FsZTtcclxuICAgICAgICB0aGlzLnNpZ25JblByb2dyZXNzTGIudGV4dCA9IFVzZXJJbmZvLnNpZ25JbkRheXMgKyBcIlwiO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NEZXNjLnRleHQgPSBgXHU0RUNBXHU2NUU1XHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHVGRjA4XHU0RjdGXHU3NTI4JHtVc2VySW5mby5zcGVlZFVwVGltZXN9LyR7Q29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lc31cdTZCMjFcdTUyQTBcdTkwMUZcdUZGMDlgO1xyXG4gICAgICAgIHRoaXMuZmluaXNoSWNvbi52aXNpYmxlID0gVXNlckluZm8uc3BlZWRVcFRpbWVzID49IENvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtKGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBiYXIgPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIG9iaiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5saXN0W2ldO1xyXG4gICAgICAgIGxldCBzY2FsZSA9IFVzZXJJbmZvLnNpZ25JbkRheXMgLyBvYmouZGF5cztcclxuICAgICAgICBpZiAoc2NhbGUgPiAxKSBzY2FsZSA9IDE7XHJcbiAgICAgICAgYmFyLndpZHRoID0gNTAyICogc2NhbGU7XHJcbiAgICAgICAgY29uc3QgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IG9iai5yZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImFtb3VudFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke29iai5yZXdhcmQuY291bnR9YDtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJzaWduX2RheXNcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTdCN0VcdTUyMzAke29iai5kYXlzfVx1NTkyOWA7XHJcblxyXG4gICAgICAgIGxldCBza2luOiBzdHJpbmcgPSBcIlwiLFxyXG4gICAgICAgICAgICBidG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZ2V0X2J0blwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGJ0bi5kYXRhU291cmNlID0gb2JqLmlkO1xyXG4gICAgICAgIGlmIChvYmouaWQgPiBVc2VySW5mby5zaWduSW5JZCkge1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LnkgPSAxMDM7XHJcbiAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfZG9uZS5wbmdgO1xyXG5cclxuICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnNpZ25JbkRheXMgPj0gb2JqLmRheXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uc2lnbkluSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmlkID09IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5saXN0WzBdLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfZ2V0LnBuZ2A7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmlkIC0gVXNlckluZm8uc2lnbkluSWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2dldC5wbmdgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfcmVjZWl2ZWQucG5nYDtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bi5za2luID0gc2tpbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVzY19idG5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaWduSW5EZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdldF9idG5cIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5ODg2XHU1M0Q2XHU1OTU2XHU1MkIxXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lnbkluSWQgPSBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnNpZ25JblJld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVBRCwgc2lnbkluSWQ6IHNpZ25JbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNpZ25JbklkID0gc2lnbkluSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbkluTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikuZ2V0KHNpZ25JbklkKS5yZXdhcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IGUudGFyZ2V0IGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogcmV3YXJkLm9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHJld2FyZC5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogcmV3YXJkLm9iai5pZCA9PSBDb25maWdHYW1lLmdvbGRJZCA/IDEgOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBTcGVlZFVwVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlZWRVcFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRpbWVMYiwgdGlwczpcIlx1NTJBMFx1OTAxRlx1NjVGNlx1OTVGNFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGltZUxiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRpbWVzTGIsIHRpcHM6XCJcdTUxNjhcdTRGNTNcdTUyQTBcdTkwMUZcdTUyNjlcdTRGNTlcdTZCMjFcdTY1NzBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRpbWVzTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3BlZWRVcEJ0biwgdGlwczpcIlx1NTE2OFx1NEY1M1x1NTJBMFx1OTAxRlx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3BlZWRVcEJ0bjogTGF5YS5MYWJlbDtcclxuXHJcbiAgICBwcml2YXRlIGNhbGw6IEZ1bmN0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKGRhdGE6IHsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuY2FsbCA9IGRhdGEuY2FsbDtcclxuICAgICAgICBsZXQgdGltZSA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJhbGxfc3BlZWRfdXBfdGltZVwiKS52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgdGhpcy50aW1lTGIudGV4dCA9IGAke01hdGguY2VpbCh0aW1lIC8gNjApfVx1NTIwNlx1OTQ5RmA7XHJcbiAgICAgICAgdGhpcy50aW1lc0xiLnRleHQgPSBgXHU0RUNBXHU2NUU1XHU1MjY5XHU0RjU5JHtVc2VySW5mby5hZHZlcnRpc2VUaW1lc31cdTZCMjFgO1xyXG4gICAgICAgIGlmIChVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRVcEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU3BlZWRVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzcGVlZF91cFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFNwZWVkVXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkOiB7IGFkdmVydGlzZVRpbWVzOiBudW1iZXI7IHNwZWVkVXBUaW1lczogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc3BlZWRVcFRpbWVzID0gZC5zcGVlZFVwVGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVc2VySW5mby5zcGVlZFVwVGltZXMgPT0gQ29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJwdW5jaHRoZWNsb2NrXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJBZHZlcnRpc2luZ2FjY2VsZXJhdGlvblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TcGVlZFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxhbmRfc3BlZWRfdXApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCBlLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsKSB0aGlzLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uIH0gZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4uL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuLi9jb3JlL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvbk9iaiB7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExaWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1QjhDXHU2MjEwICovXHJcbiAgICBvazogYm9vbGVhbjtcclxufVxyXG5cclxuLy8gIFRhc2tWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRhc2tMaXN0LCB0aXBzOlwiXHU0RUZCXHU1MkExXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0YXNrTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrID0gdHJ1ZTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRhc2tMaXN0KCk7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLml0ZW1SZW5kZXIpO1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhc2tMaXN0KCkge1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QuYXJyYXkgPSBUYXNrU2VydmljZS5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtUmVuZGVyKGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgb2JqID0gVGFza1NlcnZpY2UubGlzdFtpXS5iYXNlO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrU2VydmljZS5nZXRUYXNrKG9iai5pZCk7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmouaWNvbjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBvYmoudGl0bGU7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiZGVzY1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7b2JqLmRlc2N9KCR7XHJcbiAgICAgICAgICAgICh0YXNrPy50aW1lcyA+IG9iai50aW1lcyA/IG9iai50aW1lcyA6IHRhc2s/LnRpbWVzKSB8fCAwXHJcbiAgICAgICAgfS8ke29iai50aW1lc30pYDtcclxuXHJcbiAgICAgICAgY29uc3QgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gb2JqLnJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiYW1vdW50XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcInhcIiArIG9iai5yZXdhcmQuY291bnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJnb19ydW5cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuT2JqOiBCdXR0b25PYmogPSB7XHJcbiAgICAgICAgICAgIGlkOiBvYmouaWQsXHJcbiAgICAgICAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1x1NURGMlx1OTg4Nlx1NTNENlxyXG4gICAgICAgIGlmICh0YXNrPy5yZWNlaXZlKSB7XHJcbiAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ190b21hcm93LnBuZ1wiO1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL1x1NTNFRlx1OTg4Nlx1NTNENlxyXG4gICAgICAgICAgICBpZiAodGFzaz8udGltZXMgPj0gb2JqLnRpbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfZ2V0LnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnRuT2JqLm9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ19kb25lLnBuZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IGJ0bk9iajtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX3J1blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuT2JqOiBCdXR0b25PYmogPSBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJ0bk9iai5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU1OTU2XHU1MkIxXHJcbiAgICAgICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAudGFza1Jld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCwgdGFza0lkOiBidG5PYmouaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IFRhc2tTZXJ2aWNlLmdldFRhc2soYnRuT2JqLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucmVjZWl2ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5PYmoub2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhc2tMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX3Rhc2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHRhc2suYmFzZS5yZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRhc2suYmFzZS5yZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcChidG5PYmouaWQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBqdW1wKGlkLCB0YXJnZXQpIHtcclxuICAgICAgICBsZXQgYWREYXRhO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxMjpcclxuICAgICAgICAgICAgY2FzZSAxMDAxOlxyXG4gICAgICAgICAgICAgICAgYWREYXRhID0gYXdhaXQgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWREYXRhPy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogYFx1NUU3Rlx1NTQ0QVx1NjRBRFx1NjUzRVx1NTkzMVx1OEQyNVske2FkRGF0YS5jb2RlfV1gLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAxMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDI6XHJcbiAgICAgICAgICAgICAgICBhZERhdGEgPSBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhZERhdGE/LmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgJHthZERhdGEuZGF0YVtcIm1lc3NhZ2VcIl19WyR7YWREYXRhLmNvZGV9XWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJZDogMTAwMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAxMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDAzOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA0OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5vcGVuX2ZyaWVuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA1OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDEgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDc6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYW50X3Nvdyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA4OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA5OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5vcGVuX2ZyaWVuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDEwOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICAvLyBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5vcGVuX2ZyaWVuZCwgWzFdKTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRJbnZpdGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkOiBJbnZpdGVMaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzUmV3YXJkVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IGQubGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxMTpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxhbnRfc293KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlLCB7IFdhcmVIb3VzZURhdGEgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1xyXG4gKi9cclxuLy9GaWVsZExldmVsVXBWaWV3IFdhcmVob3VzZVZpZXcgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXJlaG91c2VWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTGlzdCwgdGlwczpcIlx1NzI2OVx1NTRDMVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbU5hbWUsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1OYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtRGVzYywgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbURlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1JY29uLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsQ291bnRMYiwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NTFGQVx1NTUyRVx1NjU3MFx1OTFDRlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxDb3VudExiOiBMYXlhLlRleHRJbnB1dCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxCb3gsIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTcyNjlcdTU0QzFcdTRFRjdcdTY4M0NcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsQm94OiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsR29sZCwgdGlwczpcIlx1OTFEMVx1NUUwMVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxHb2xkOiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsRGlhbW9uZCwgdGlwczpcIlx1OTRCQlx1NzdGM1x1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxEaWFtb25kOiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNlbGxCdG4sIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTc2ODRpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzZWxsQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWxsQWRCdG4sIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTc2ODRpY29uIFx1NUU3Rlx1NTQ0QVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VsbEFkQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTplbXB0eV9sYiwgdGlwczpcIlx1N0E3QVx1NzY4NFx1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZW1wdHlfbGI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgZGF0YUxpc3Q6IFdhcmVIb3VzZURhdGFbXVtdID0gW107XHJcbiAgICAvKiogXHU5MDA5XHU0RTJEXHU3Njg0XHU3MjY5XHU1NEMxIFx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtSW5kZXg6IHN0cmluZyA9IFwiMCwwXCI7XHJcbiAgICAvKiogXHU5MDA5XHU0RTJEXHU3Njg0XHU3MjY5XHU1NEMxXHU2NTcwXHU2MzZFICovXHJcbiAgICBwcml2YXRlIHNlbGVjdEl0ZW1EYXRhOiBXYXJlSG91c2VEYXRhO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NTFGQVx1NTUyRVx1NzI2OVx1NTRDMVx1NzY4NFx1NjU3MFx1OTFDRiAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtU2VsbENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTM1NVx1NEVGNyBcdTkxRDFcdTVFMDEgKi9cclxuICAgIHByaXZhdGUgdW5pdFByaWNlR29sZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUzNTVcdTRFRjcgXHU5NEJCXHU3N0YzICovXHJcbiAgICBwcml2YXRlIHVuaXRQcmljZURpYW1vbmQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5kYWthaWNhbmdrdSk7XHJcbiAgICAgICAgdGhpcy5zZWxsQWRCdG4uZGlzYWJsZWQgPSAhVXNlckluZm8uYWR2ZXJ0aXNlVGltZXM7XHJcbiAgICAgICAgdGhpcy5zZWxsQWRCdG4uYWN0aXZlID0gQm9vbGVhbihVc2VySW5mby5hZHZlcnRpc2VUaW1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJJdGVtTGlzdCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZURlc2MobnVsbCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxHb2xkLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsRGlhbW9uZC5yZW1vdmVTZWxmKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLm9uKExheWEuRXZlbnQuSU5QVVQsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gTnVtYmVyKHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA+IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMaXN0KCkge1xyXG4gICAgICAgIGxldCBpID0gMCxcclxuICAgICAgICAgICAgeSA9IDAsXHJcbiAgICAgICAgICAgIGhhc1NlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhTGlzdFt5XSkgdGhpcy5kYXRhTGlzdFt5XSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFMaXN0W3ldLnB1c2goZCk7XHJcbiAgICAgICAgICAgIGlmIChkLmJhc2UuaWQgPT0gdGhpcy5zZWxlY3RJdGVtRGF0YT8uYmFzZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgaGFzU2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGlmIChpID4gMikge1xyXG4gICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICB5Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFoYXNTZWxlY3QgJiYgdGhpcy5kYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtSW5kZXggPSBcIjAsMFwiO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZGF0YUxpc3Q7XHJcbiAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gIXRoaXMuZGF0YUxpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVySXRlbUxpc3QoY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhTGlzdFtpXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoYGl0ZW1fJHt4fWApIGFzIExheWEuQm94O1xyXG4gICAgICAgICAgICBpZiAoZGF0YVt4XSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGF0YVNvdXJjZSA9IGAke2l9LCR7eH1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGljb24gPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5za2luID0gZGF0YVt4XS5iYXNlLmljb247XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikgYXMgTGF5YS5MYWJlbFxyXG4gICAgICAgICAgICAgICAgKS50ZXh0ID0gYCR7ZGF0YVt4XS5iYXNlLm5hbWV9XyR7ZGF0YVt4XS5jb3VudH1gO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMuaXRlbUxpc3Quc2VsZWN0ZWRJbmRleCAmJiB0aGlzLnNlbGVjdEl0ZW1JbmRleCA9PSBpdGVtLmRhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKGljb24sIHsgeTogMCB9LCAxNTAsIG51bGwsIG51bGwsIG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1EYXRhID0gZGF0YVt4XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlc2MoZGF0YVt4XSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGljb24ueSA9IDU2O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpY29uLnkgIT0gNTYpIExheWEuVHdlZW4udG8oaWNvbiwgeyB5OiA1NiB9LCAxNTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8wXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzFcIjpcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtSW5kZXggPSBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTsgLy8gXHU4RkQ5XHU5MUNDXHU5NzAwXHU4OTgxXHU0RjE4XHU1MzE2XHU3M0IwXHU1NzI4XHU1MDVBXHU3Njg0XHU2NjJGXHU1MjM3XHU2NUIwXHU2NTc0XHU0RTJBXHU1MjE3XHU4ODY4XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID4gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVkdWNlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQtLTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPCAxKSB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2VsbEJ0bkFkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWxsQnRuXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYnRuTmFtZSA9IGUudGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLndhcmVob3VzZVNlbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcIndhcmVob3VzZVNlbGxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNlbGVjdEl0ZW1EYXRhLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuTmFtZSA9PSBcInNlbGxCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxsQWRCdG4uZGlzYWJsZWQgPSAhVXNlckluZm8uYWR2ZXJ0aXNlVGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGxBZEJ0bi5hY3RpdmUgPSBCb29sZWFuKFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5yZWR1Y2VBbW91bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtRGF0YS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZXNjKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmRMaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdFByaWNlR29sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0UHJpY2VHb2xkICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChidG5OYW1lID09IFwic2VsbEJ0bkFkXCIgPyAyIDogMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0UHJpY2VEaWFtb25kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5kaWFtb25kSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXRQcmljZURpYW1vbmQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJ0bk5hbWUgPT0gXCJzZWxsQnRuQWRcIiA/IDIgOiAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuTmFtZSA9PSBcInNlbGxCdG5BZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJEb3VibGVzYWxlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogdGhpcy5zZWxsQnRuIGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTFGQVx1NTFGQVx1NTUyRVx1NEZFMVx1NjA2Rlx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZURlc2MoZDogV2FyZUhvdXNlRGF0YSkge1xyXG4gICAgICAgIGlmICghZCkge1xyXG4gICAgICAgICAgICAodGhpcy5pdGVtSWNvbi5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKHRoaXMuaXRlbUljb24ucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbERpYW1vbmQucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxHb2xkLnJlbW92ZVNlbGYoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtSWNvbi5za2luID0gZC5iYXNlLmljb247XHJcbiAgICAgICAgdGhpcy5pdGVtTmFtZS50ZXh0ID0gZC5iYXNlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5pdGVtRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2M7XHJcbiAgICAgICAgbGV0IHByaWNlR29sZDogUmV3YXJkQ3VycmVuY3lCYXNlLCBwcmljZURpYW1vbmQ6IFJld2FyZEN1cnJlbmN5QmFzZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGQuYmFzZS5nYWluLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQuYmFzZS5nYWluW3hdKTtcclxuICAgICAgICAgICAgaWYgKCFkLmJhc2UuZ2Fpblt4XS5jb3VudCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChkLmJhc2UuZ2Fpblt4XS5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQpIHtcclxuICAgICAgICAgICAgICAgIHByaWNlR29sZCA9IGQuYmFzZS5nYWluW3hdO1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXRlbVNlbGxHb2xkLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID1cclxuICAgICAgICAgICAgICAgICAgICBkLmJhc2UuZ2Fpblt4XS5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGxCb3guYWRkQ2hpbGQodGhpcy5pdGVtU2VsbEdvbGQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJpY2VEaWFtb25kID0gZC5iYXNlLmdhaW5beF07XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pdGVtU2VsbERpYW1vbmQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgICAgIGQuYmFzZS5nYWluW3hdLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsbEJveC5hZGRDaGlsZCh0aGlzLml0ZW1TZWxsRGlhbW9uZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IGQuY291bnQ7XHJcbiAgICAgICAgdGhpcy51bml0UHJpY2VHb2xkID0gcHJpY2VHb2xkPy5jb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudW5pdFByaWNlRGlhbW9uZCA9IHByaWNlRGlhbW9uZD8uY291bnQgfHwgMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1M0VGXHU0RUU1XHU1MUZBXHU1NTJFXHU3Njg0XHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlU2VsZWN0U2VsbENvdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQgPSB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKyBcIlwiO1xyXG4gICAgICAgICh0aGlzLml0ZW1TZWxsR29sZC5nZXRDaGlsZEJ5TmFtZShcInByaWNlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKiB0aGlzLnVuaXRQcmljZUdvbGQgKyBcIlwiO1xyXG4gICAgICAgICh0aGlzLml0ZW1TZWxsRGlhbW9uZC5nZXRDaGlsZEJ5TmFtZShcInByaWNlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKiB0aGlzLnVuaXRQcmljZURpYW1vbmQgKyBcIlwiO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2l0aGRyYXdSZWNvcmRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXRoZHJhd1JlY29yZFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxpc3QsIHRpcHM6XCJcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxpc3Q6IExheWEuTGlzdDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBXaXRoZHJhd1JlY29yZERhdGFbXTtcclxuXHJcbiAgICBvbk9wZW5lZChlOiBXaXRoZHJhd1JlY29yZERhdGFbXSk6IHZvaWQge1xyXG4gICAgICAgIGUuc29ydCgoYSwgYikgPT4gYi50aW1lIC0gYS50aW1lKTtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZTtcclxuICAgICAgICB0aGlzLmxpc3QuYXJyYXkgPSBlO1xyXG4gICAgICAgIHRoaXMubGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLml0ZW1SZW5kZXIpO1xyXG4gICAgICAgIHRoaXMubGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgKHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoXCJlbXB0eV9sYlwiKSBhcyBMYXlhLkxhYmVsKS52aXNpYmxlID0gIWUubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXRlbVJlbmRlcihjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkID0gdGhpcy5kYXRhTGlzdFtpXTtcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRfYm94XCIpLmdldENoaWxkQnlOYW1lKFwiYW1vdW50XCIpIGFzIExheWEuTGFiZWxcclxuICAgICAgICApLnRleHQgPSBgLSR7ZC5kaWFtb25kfWA7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtuZXcgRGF0ZShkLnRpbWUpLnRvTG9jYWxlU3RyaW5nKFxyXG4gICAgICAgICAgICBcInpoLUNOXCIsXHJcbiAgICAgICAgICAgIHsgaG91cjEyOiBmYWxzZSB9XHJcbiAgICAgICAgKX1gO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInN0YXRlX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcInN0YXRlXCIpIGFzIExheWEuTGFiZWw7XHJcbiAgICAgICAgbGV0IHdpdGhkcmF3YWwgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwid2l0aGRyYXdhbFwiKS52YWx1ZSBhcyBzdHJpbmdbXTtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInN0YXRlX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcInByaWNlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHsoXHJcbiAgICAgICAgICAgIChOdW1iZXIod2l0aGRyYXdhbFsyXSkgLyBOdW1iZXIod2l0aGRyYXdhbFsxXSkpICpcclxuICAgICAgICAgICAgZC5kaWFtb25kXHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAubWF0Y2goL15cXGQrKD86XFwuXFxkezAsMn0pPy8pfVx1NTE0M2A7XHJcbiAgICAgICAgc3RhdGUudGV4dCA9IGAke2Quc3RhdGUgPyBcIlx1NUJBMVx1NjgzOFx1NEUyRFwiIDogXCJcdTVERjJcdTUyMzBcdThEMjZcIn1gO1xyXG4gICAgICAgIHN0YXRlLmNvbG9yID0gZC5zdGF0ZSA/IFwiI0U5MzYzNlwiIDogXCIjNUEzRjJBXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5XaXRoZHJhd1JlY29yZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IEFib3V0VmlldyBmcm9tIFwiLi92aWV3L0Fib3V0Vmlld1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQnV0dG9uXCJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi9jb21wb25lbnRzL1ZpZXdTaG93QW5pXCJcbmltcG9ydCBBZGRMYW5kVmlldyBmcm9tIFwiLi92aWV3L0FkZExhbmRWaWV3XCJcbmltcG9ydCBCdXlWaXRhbGl0eVZpZXcgZnJvbSBcIi4vdmlldy9CdXlWaXRhbGl0eVZpZXdcIlxuaW1wb3J0IEZpZWxkTGV2ZWxVcFZpZXcgZnJvbSBcIi4vdmlldy9GaWVsZExldmVsVXBWaWV3XCJcbmltcG9ydCBGcmllbmRzRGVzY1ZpZXcgZnJvbSBcIi4vdmlldy9GcmllbmRzRGVzY1ZpZXdcIlxuaW1wb3J0IEZyaWVuZHNSZXdhcmRWaWV3IGZyb20gXCIuL3ZpZXcvRnJpZW5kc1Jld2FyZFZpZXdcIlxuaW1wb3J0IEZyaWVuZHNWaWV3IGZyb20gXCIuL3ZpZXcvRnJpZW5kc1ZpZXdcIlxuaW1wb3J0IEd1aWRlVmlldyBmcm9tIFwiLi92aWV3L0d1aWRlVmlld1wiXG5pbXBvcnQgSGludFZpZXcgZnJvbSBcIi4vdmlldy9IaW50Vmlld1wiXG5pbXBvcnQgTG9naW5WaWV3IGZyb20gXCIuL3ZpZXcvTG9naW5WaWV3XCJcbmltcG9ydCBNYWlsRGVzY1ZpZXcgZnJvbSBcIi4vdmlldy9NYWlsRGVzY1ZpZXdcIlxuaW1wb3J0IE1haWxWaWV3IGZyb20gXCIuL3ZpZXcvTWFpbFZpZXdcIlxuaW1wb3J0IE1haW5WaWV3IGZyb20gXCIuL3ZpZXcvTWFpblZpZXdcIlxuaW1wb3J0IEZpZ3VyZUFuaSBmcm9tIFwiLi9jb21wb25lbnRzL0ZpZ3VyZUFuaVwiXG5pbXBvcnQgRmllbGRDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9GaWVsZENvbXBvbmVudFwiXG5pbXBvcnQgT3JkZXJWaWV3IGZyb20gXCIuL3ZpZXcvT3JkZXJWaWV3XCJcbmltcG9ydCBPdmVyVmlldyBmcm9tIFwiLi92aWV3L092ZXJWaWV3XCJcbmltcG9ydCBTZXR0aW5nVmlldyBmcm9tIFwiLi92aWV3L1NldHRpbmdWaWV3XCJcbmltcG9ydCBTaG9wVmlldyBmcm9tIFwiLi92aWV3L1Nob3BWaWV3XCJcbmltcG9ydCBTaWduSW5EZXNjVmlldyBmcm9tIFwiLi92aWV3L1NpZ25JbkRlc2NWaWV3XCJcbmltcG9ydCBTaWduSW5WaWV3IGZyb20gXCIuL3ZpZXcvU2lnbkluVmlld1wiXG5pbXBvcnQgU3BlZWRVcFZpZXcgZnJvbSBcIi4vdmlldy9TcGVlZFVwVmlld1wiXG5pbXBvcnQgVGFza1ZpZXcgZnJvbSBcIi4vdmlldy9UYXNrVmlld1wiXG5pbXBvcnQgV2FyZWhvdXNlVmlldyBmcm9tIFwiLi92aWV3L1dhcmVob3VzZVZpZXdcIlxuaW1wb3J0IFdpdGhkcmF3UmVjb3JkVmlldyBmcm9tIFwiLi92aWV3L1dpdGhkcmF3UmVjb3JkVmlld1wiXHJcbi8qXHJcbiogXHU2RTM4XHU2MjBGXHU1MjFEXHU1OUNCXHU1MzE2XHU5MTREXHU3RjZFO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xMDgwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTkyMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInZpZXcvQWJvdXRWaWV3LnRzXCIsQWJvdXRWaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9CdXR0b24udHNcIixCdXR0b24pO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL1ZpZXdTaG93QW5pLnRzXCIsVmlld1Nob3dBbmkpO1xuICAgICAgICByZWcoXCJ2aWV3L0FkZExhbmRWaWV3LnRzXCIsQWRkTGFuZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0J1eVZpdGFsaXR5Vmlldy50c1wiLEJ1eVZpdGFsaXR5Vmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRmllbGRMZXZlbFVwVmlldy50c1wiLEZpZWxkTGV2ZWxVcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNEZXNjVmlldy50c1wiLEZyaWVuZHNEZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHNcIixGcmllbmRzUmV3YXJkVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1ZpZXcudHNcIixGcmllbmRzVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvR3VpZGVWaWV3LnRzXCIsR3VpZGVWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9IaW50Vmlldy50c1wiLEhpbnRWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9Mb2dpblZpZXcudHNcIixMb2dpblZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haWxEZXNjVmlldy50c1wiLE1haWxEZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpbFZpZXcudHNcIixNYWlsVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpblZpZXcudHNcIixNYWluVmlldyk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvRmlndXJlQW5pLnRzXCIsRmlndXJlQW5pKTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9GaWVsZENvbXBvbmVudC50c1wiLEZpZWxkQ29tcG9uZW50KTtcbiAgICAgICAgcmVnKFwidmlldy9PcmRlclZpZXcudHNcIixPcmRlclZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L092ZXJWaWV3LnRzXCIsT3ZlclZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NldHRpbmdWaWV3LnRzXCIsU2V0dGluZ1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1Nob3BWaWV3LnRzXCIsU2hvcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NpZ25JbkRlc2NWaWV3LnRzXCIsU2lnbkluRGVzY1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NpZ25JblZpZXcudHNcIixTaWduSW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TcGVlZFVwVmlldy50c1wiLFNwZWVkVXBWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9UYXNrVmlldy50c1wiLFRhc2tWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9XYXJlaG91c2VWaWV3LnRzXCIsV2FyZWhvdXNlVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvV2l0aGRyYXdSZWNvcmRWaWV3LnRzXCIsV2l0aGRyYXdSZWNvcmRWaWV3KTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCAiaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCIuL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcIi4vY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IENvbmZpZ0dhbWUsIHsgQnVpbGRUeXBlIH0gZnJvbSBcIi4vY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcIi4vY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwiLi9jb3JlL0FwcFwiO1xyXG5jbGFzcyBNYWluIHtcclxuICAgIC8qKiBcdTgxRUFcdTVCOUFcdTRFNDlcdTZFMzJcdTY3RDNpZFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgc3RhdGljIGN1c3RvbVJlbmRlcklEOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJpUGhvbmVcIikgPiAtMSkge1xyXG4gICAgICAgICAgICBDb25maWcudXNlV2ViR0wyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1x1NjgzOVx1NjM2RUlERVx1OEJCRVx1N0Y2RVx1NTIxRFx1NTlDQlx1NTMxNlx1NUYxNVx1NjRDRVxyXG4gICAgICAgIGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuICAgICAgICBlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuICAgICAgICBMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcbiAgICAgICAgLy9cdTUxN0NcdTVCQjlcdTVGQUVcdTRGRTFcdTRFMERcdTY1MkZcdTYzMDFcdTUyQTBcdThGN0RzY2VuZVx1NTQwRVx1N0YwMFx1NTczQVx1NjY2RlxyXG4gICAgICAgIExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcbiAgICAgICAgLy9cdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDhcdTkwMUFcdThGQzdJREVcdThCQkVcdTdGNkVcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdUZGMENcdTYyMTZcdTgwMDV1cmxcdTU3MzBcdTU3NDBcdTU4OUVcdTUyQTBkZWJ1Zz10cnVlXHU1M0MyXHU2NTcwXHVGRjBDXHU1NzQ3XHU1M0VGXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA5XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcbiAgICAgICAgTGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYmdDb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG5cclxuICAgICAgICBCVUlMRF9UWVBFID09IEJ1aWxkVHlwZS5kZWJ1ZyAmJiBHYW1lQ29uZmlnLnN0YXQgJiYgTGF5YS5TdGF0LnNob3coKTtcclxuXHJcbiAgICAgICAgLy9cdTZGQzBcdTZEM0JcdThENDRcdTZFOTBcdTcyNDhcdTY3MkNcdTYzQTdcdTUyMzZcdUZGMEN2ZXJzaW9uLmpzb25cdTc1MzFJREVcdTUzRDFcdTVFMDNcdTUyOUZcdTgwRkRcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdUZGMENcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdTRFNUZcdTRFMERcdTVGNzFcdTU0Q0RcdTU0MEVcdTdFRURcdTZENDFcdTdBMEJcclxuICAgICAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXHJcbiAgICAgICAgICAgIFwidmVyc2lvbi5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLFxyXG4gICAgICAgICAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy9cdTZGQzBcdTZEM0JcdTU5MjdcdTVDMEZcdTU2RkVcdTY2MjBcdTVDMDRcdUZGMENcdTUyQTBcdThGN0RcdTVDMEZcdTU2RkVcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTU5ODJcdTY3OUNcdTUzRDFcdTczQjBcdTVDMEZcdTU2RkVcdTU3MjhcdTU5MjdcdTU2RkVcdTU0MDhcdTk2QzZcdTkxQ0NcdTk3NjJcdUZGMENcdTUyMTlcdTRGMThcdTUxNDhcdTUyQTBcdThGN0RcdTU5MjdcdTU2RkVcdTU0MDhcdTk2QzZcdUZGMENcdTgwMENcdTRFMERcdTY2MkZcdTVDMEZcdTU2RkVcclxuICAgICAgICBMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFxyXG4gICAgICAgICAgICBcImZpbGVjb25maWcuanNvblwiLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNvbmZpZ0xvYWRlZCgpIHtcclxuICAgICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTZFMzJcdTY3RDNpZFxyXG4gICAgICAgIENvbmZpZ1tcImN1c3RvbVJlbmRlcklEXCJdID0gW107XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5pbml0KCk7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5pbml0KENvbmZpZ0dhbWUuYmFzZVVybCk7XHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5vbihFdmVudE1hcHMubG9naW5fZ2FtZSwgdGhpcywgdGhpcy5sb2dpbkdhbWUpO1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnVzZUF1ZGlvTXVzaWMgPSBmYWxzZTtcclxuICAgICAgICBBcHBDb3JlLmxpc3RlbkFwcEZ1bmN0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIFZpZXdNYW5hZ2VyLmluc3QuaW5pdCgpO1xyXG5cclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oUmVzLnZpZXdzLkxvZ2luVmlldywge1xyXG4gICAgICAgICAgICAgICAgc2hvd0xvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEdhbWVEYXRhKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5jbG9zZUltYWdlLCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMYXlhLlZpZXcuc2V0TG9hZGluZ1BhZ2UoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL1x1NTQwRVx1NjcxRlx1NEYxOFx1NTMxNlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBMYXlhLlZpZXcuc2hvd0xvYWRpbmdQYWdlKG51bGwsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDk5OTk5OTk5OTk5OTk5OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkdhbWUoKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgUmVzLnNjZW5lcyxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVzLnNjZW5lcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5TXVzaWMoUmVzLmF1ZGlvcy5CR00sIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0R2FtZURhdGEoZDogTmV0SW5pdCkge31cclxufVxyXG4vL1x1NkZDMFx1NkQzQlx1NTQyRlx1NTJBOFx1N0M3QlxyXG5uZXcgTWFpbigpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR08sTUFBVztBQUFYLFlBQVcsWUFBWDtBQUVILGtDQUFnQjtBQUdoQixpQ0FBZTtBQUdmLGlDQUFlO0FBR2Ysa0NBQWdCO0FBR2hCLCtCQUFhO0FBRWIsOEJBQVk7QUFFWixnQ0FBYztBQUVkLHFDQUFtQjtBQXNCbkIsb0NBQWtCO0FBRWxCLHVDQUFxQjtBQUVyQixtQ0FBaUI7QUFFakIsNEJBQVU7QUFFVixnQ0FBYztBQUVkLDhCQUFZO0FBRVoscUNBQW1CO0FBQUEsS0F0REw7QUE0RFgsTUFBVztBQUFYLFlBQVcsY0FBWDtBQUVILHlCQUFLO0FBRUwsaUNBQWE7QUFFYiw4QkFBVTtBQUVWLHFDQUFpQjtBQUVqQiw4QkFBVTtBQUVWLGlDQUFhO0FBRWIsdUNBQW1CO0FBRW5CLHVDQUFtQjtBQUVuQixzQ0FBa0I7QUFFbEIsbUNBQWU7QUFFZixpQ0FBYTtBQUViLHFDQUFpQjtBQUFBLEtBeEJIOzs7QUMxRFYsTUFBSztBQUFMLFlBQUssUUFBTDtBQUdBLDBCQUFZO0FBRVosNEJBQWM7QUFFZCxnQ0FBa0I7QUFFbEIsaUNBQW1CO0FBRW5CLGdDQUFrQjtBQUVsQixrQ0FBb0I7QUFFcEIsNEJBQWM7QUFFZCwwQkFBWTtBQUVaLHlCQUFXO0FBRVgsMEJBQVk7QUFFWiw2QkFBZTtBQUVmLHlCQUFXO0FBRVgseUJBQVc7QUFFWCwwQkFBWTtBQUVaLHlCQUFXO0FBRVgsNEJBQWM7QUFFZCx5QkFBVztBQUVYLCtCQUFpQjtBQUVqQiwyQkFBYTtBQUViLDRCQUFjO0FBRWQseUJBQVc7QUFFWCw4QkFBZ0I7QUFFaEIsbUNBQXFCO0FBQUEsS0EvQ2hCO0FBa0RMLE1BQUs7QUFBTCxZQUFLLFNBQUw7QUFHQSwwQkFBVztBQUVYLDZCQUFjO0FBRWQseUJBQVU7QUFFViw4QkFBZTtBQUVmLDZCQUFjO0FBRWQsOEJBQWU7QUFFZixxQkFBTTtBQUFBLEtBZkQ7QUFxQkwsTUFBTSxTQUFTO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNHO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFB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QVksd0JBQXVCLGdCQUFlLFFBQU0sRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksK0JBQThCLGdCQUFlLFFBQU0sRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksK0JBQThCLGdCQUFlLFFBQU0sRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksZ0NBQStCLGdCQUFlLFFBQU0sRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksZ0NBQStCLGdCQUFlLFFBQU0sRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksZ0NBQStCLGdCQUFlLFFBQU0sRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksZ0NBQStCLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksaUNBQWdDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksaUNBQWdDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksaUNBQWdDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksZ0NBQStCLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksaUNBQWdDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksaUNBQWdDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWlDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWlDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWlDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksa0NBQWlDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcs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
