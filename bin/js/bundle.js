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
    EventMaps3["open_friend"] = "open_friend";
    EventMaps3["plant_sow"] = "plant_sow";
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
            console.log(`send => ${data}`);
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
  var Table = { "task": [{ "id": 1001, "reward": "1001:50", "times": 1, "title": "\u7B7E\u5230\u9886\u94BB\u77F3", "desc": "\u770B\u89C6\u9891\u7B7E\u5230", "icon": null }, { "id": 1002, "reward": "1001:100", "times": 10, "title": "\u83DC\u5730\u65BD\u80A510\u6B21", "desc": "\u83DC\u5730\u52A0\u901F10\u6B21", "icon": null }, { "id": 1003, "reward": "1001:50", "times": 10, "title": "\u83DC\u5730\u6536\u83B710\u6B21", "desc": "\u83DC\u5730\u6536\u83B710\u6B21", "icon": null }, { "id": 1004, "reward": "1001:50", "times": 5, "title": "\u8BBF\u53CB5\u6B21", "desc": "\u5077\u83DC5\u6B21", "icon": null }, { "id": 1005, "reward": "1001:20", "times": 3, "title": "\u5582\u517B\u72D7\u72D73\u6B21", "desc": "\u5582\u517B\u72D7\u72D73\u6B21", "icon": null }, { "id": 1006, "reward": "1001:20", "times": 5, "title": "\u8D2D\u4E70\u9972\u65995\u6B21", "desc": "\u8D2D\u4E70\u9972\u65995\u6B21", "icon": null }, { "id": 1007, "reward": "1001:20", "times": 10, "title": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "desc": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "icon": null }, { "id": 1008, "reward": "1002:500", "times": 3, "title": "\u51FA\u552E\u4F5C\u72693\u6B21", "desc": "\u51FA\u552E\u4F5C\u72693\u6B21", "icon": null }, { "id": 1009, "reward": "1001:100", "times": 5, "title": "\u6DFB\u52A0\u597D\u53CB", "desc": "\u6DFB\u52A0\u597D\u53CB5\u4E2A", "icon": null }, { "id": 1010, "reward": "1001:50", "times": 1, "title": "\u5206\u4EAB\u5F97\u597D\u793C", "desc": "\u5206\u4EAB\u4E00\u6B21", "icon": null }, { "id": 1011, "reward": "1002:500", "times": 3, "title": "\u6307\u5B9A\u79CD\u690D", "desc": "\u79CD\u690D\u6307\u5B9A\u79CD\u5B50", "icon": null }, { "id": 1012, "reward": "1001:50", "times": 10, "title": "\u770B\u89C6\u9891\u9886\u798F\u5229", "desc": "\u770B\u89C6\u989110\u6B21", "icon": null }], "signIn": [{ "id": 1001, "days": 7, "reward": "1001:20000" }, { "id": 1002, "days": 10, "reward": "1001:30000" }, { "id": 1003, "days": 15, "reward": "1001:50000" }, { "id": 1004, "days": 20, "reward": "1001:80000" }, { "id": 1005, "days": 30, "reward": "1001:120000" }, { "id": 1006, "days": 50, "reward": "1001:180000" }, { "id": 1007, "days": 80, "reward": "1001:300000" }, { "id": 1008, "days": 100, "reward": "1001:350000" }, { "id": 1009, "days": 150, "reward": "1001:500000" }], "plant": [{ "id": 1001, "name": "\u6C34\u7A3B", "icon": "plant_icon/1002_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1002, "name": "\u5927\u8C46", "icon": "plant_icon/1004_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1003, "name": "\u5927\u849C", "icon": "plant_icon/1012_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "240", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1004, "name": "\u5305\u5FC3\u83DC", "icon": "plant_icon/1006_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "1~2", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1005, "name": "\u571F\u8C46", "icon": "plant_icon/1007_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1006, "name": "\u841D\u535C", "icon": "plant_icon/1005_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1007, "name": "\u5C0F\u9EA6", "icon": "plant_icon/1001_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1008, "name": "\u8FA3\u6912", "icon": "plant_icon/1010_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "600", "unlock_cost": "1002:2000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1009, "name": "\u9EC4\u74DC", "icon": "plant_icon/1011_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1010, "name": "\u8304\u5B50", "icon": "plant_icon/1013_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1011, "name": "\u80E1\u841D\u535C", "icon": "plant_icon/1008_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:4500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1012, "name": "\u5357\u74DC", "icon": "plant_icon/1014_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:5000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1013, "name": "\u7389\u7C73", "icon": "plant_icon/1003_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:5500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1014, "name": "\u7518\u8517", "icon": "plant_icon/1015_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1015, "name": "\u756A\u8304", "icon": "plant_icon/1009_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }], "pet": [{ "id": 1001, "name": "\u65FA\u8D22", "icon": "pet_feed/1001_dog.png", "vitality_max": 100, "vitality_consume": 10, "cost": "1002:3000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 34, "ability": 42 }, { "id": 1002, "name": "\u6C64\u5706", "icon": "pet_feed/1007_dog.png", "vitality_max": 100, "vitality_consume": 15, "cost": "1002:4000", "desc": "\u989C\u503C\u3001\u667A\u5546\u53CC\u53CC\u5728\u7EBF", "sensitive": 40, "ability": 48 }, { "id": 1003, "name": "\u8089\u5E72", "icon": "pet_feed/1009_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:4500", "desc": "\u6700\u5FE0\u8BDA\u7684\u4F19\u4F34", "sensitive": 45, "ability": 55 }, { "id": 1004, "name": "\u4E8C\u54C8", "icon": "pet_feed/1002_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:5000", "desc": "\u7EDD\u4E0D\u62C6\u5BB6\uFF01", "sensitive": 48, "ability": 60 }, { "id": 1005, "name": "\u5927\u773C\u775B", "icon": "pet_feed/1005_dog.png", "vitality_max": 100, "vitality_consume": 17, "cost": "1002:7000", "desc": "\u6D3B\u597D\u5403\u7684\u5C11", "sensitive": 50, "ability": 75 }, { "id": 1006, "name": "\u5C0F\u5C3E\u5DF4", "icon": "pet_feed/1004_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:7500", "desc": "\u6B66\u529B\u5929\u8D4B\u5DF2\u70B9\u6EE1~\u62FF\u634F\uFF01", "sensitive": 60, "ability": 80 }, { "id": 1007, "name": "\u7403\u7403", "icon": "pet_feed/1008_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u5C31\u4E24\u4E2A\u5B57\uFF0C\u542C\u8BDD\uFF01", "sensitive": 69, "ability": 85 }, { "id": 1008, "name": "\u5C0F\u767D", "icon": "pet_feed/1003_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u770B\u5BB6\u3001\u770B\u83DC\u3001\u770B\u5B69\u5B50", "sensitive": 76, "ability": 88 }, { "id": 1009, "name": "\u70B9\u70B9", "icon": "pet_feed/1006_dog.png", "vitality_max": 100, "vitality_consume": 19, "cost": "1002:10000", "desc": "\u4F60\u503C\u5F97\u62E5\u6709\uFF01", "sensitive": 85, "ability": 93 }, { "id": 1010, "name": "\u95F7\u58A9", "icon": "pet_feed/1010_dog.png", "vitality_max": 100, "vitality_consume": 30, "cost": "1002:15000", "desc": "\u957F\u5F97\u5C31\u5F88\u51F6\uFF0C\u6293\u5C0F\u5077\u66F4\u51F6", "sensitive": 90, "ability": 99 }], "order": [{ "id": 1, "commission": "1.12", "condition": "1001:2", "extra_reward": null }, { "id": 2, "commission": "0.87", "condition": "1001:1,1002:2", "extra_reward": null }, { "id": 3, "commission": "0.69", "condition": "1001:1,1003:2,1002:3", "extra_reward": null }, { "id": 4, "commission": "0.61", "condition": "1002:4,1003:3,1004:3,1001:4", "extra_reward": null }, { "id": 5, "commission": "0.61", "condition": "1004:6,1002:5,1005:4,1001:5", "extra_reward": null }, { "id": 6, "commission": "0.68", "condition": "1003:10,1004:5,1005:3,1006:3", "extra_reward": null }, { "id": 7, "commission": "0.43", "condition": "1007:4,1003:5,1004:7,1006:10", "extra_reward": null }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:5,1002:5", "extra_reward": null }, { "id": 9, "commission": "0.39", "condition": "1006:2,1009:10,1007:8,1003:8", "extra_reward": null }, { "id": 10, "commission": "0.22", "condition": "1006:10,1010:5,1008:10,1009:6", "extra_reward": "1001:800" }, { "id": 11, "commission": "0.76", "condition": "1009:5,1004:10,1001:9,1002:10", "extra_reward": null }, { "id": 12, "commission": "0.43", "condition": "1007:6,1003:11,1011:6,1005:10", "extra_reward": null }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:8", "extra_reward": null }, { "id": 14, "commission": "0.55", "condition": "1013:10,1008:8,1006:6,1001:10", "extra_reward": null }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:10,1011:12,1001:10", "extra_reward": null }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17", "extra_reward": null }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:6,1015:12,1001:14", "extra_reward": null }, { "id": 18, "commission": 0.48, "condition": "1008:14,1011:12,1009:15,1002:5", "extra_reward": null }, { "id": 19, "commission": 0.75, "condition": "1013:10,1003:20,1014:11,1001:7", "extra_reward": null }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:12", "extra_reward": "1001:900" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:14,1005:16,1007:15", "extra_reward": null }, { "id": 22, "commission": "0.4", "condition": "1015:19,1007:12,1011:5,1004:17", "extra_reward": null }, { "id": 23, "commission": "0.4", "condition": "1003:19,1014:22,1015:16,1008:14", "extra_reward": null }, { "id": 24, "commission": 0.77, "condition": "1014:13,1001:17,1008:18,1004:15", "extra_reward": null }, { "id": 25, "commission": "0.39", "condition": "1012:23,1011:19,1010:15,1015:20", "extra_reward": null }, { "id": 26, "commission": 0.03, "condition": "1002:21,1011:12,1012:22,1003:19", "extra_reward": null }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:20,1011:17", "extra_reward": null }, { "id": 28, "commission": 0.53, "condition": "1014:17,1007:12,1011:17,1003:17", "extra_reward": null }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:18", "extra_reward": null }, { "id": 30, "commission": "0.34", "condition": "1011:17,1014:19,1006:14,1004:30", "extra_reward": "1001:1000" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:19,1006:11", "extra_reward": null }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:22,1012:12,1008:20", "extra_reward": null }, { "id": 33, "commission": "0.44", "condition": "1012:16,1013:20,1002:23,1009:16", "extra_reward": null }, { "id": 34, "commission": "0.42", "condition": "1009:19,1010:12,1011:14,1012:20", "extra_reward": null }, { "id": 35, "commission": "0.33", "condition": "1001:18,1004:19,1013:16,1003:20", "extra_reward": null }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:17,1007:19", "extra_reward": null }, { "id": 37, "commission": 0.44, "condition": "1012:19,1010:20,1002:14,1011:11", "extra_reward": null }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18", "extra_reward": null }, { "id": 39, "commission": 0.36, "condition": "1007:18,1012:13,1004:16,1002:26", "extra_reward": null }, { "id": 40, "commission": 0.28, "condition": "1004:30,1005:10,1008:18,1011:16", "extra_reward": "1001:1000" }, { "id": 41, "commission": "0.48", "condition": "1010:18,1009:18,1008:17,1011:26", "extra_reward": null }, { "id": 42, "commission": 0.43, "condition": "1009:21,1005:18,1007:20,1002:23", "extra_reward": null }, { "id": 43, "commission": "0.24", "condition": "1006:30,1004:14,1014:11,1008:15", "extra_reward": null }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:28,1002:34,1007:19", "extra_reward": null }, { "id": 45, "commission": "0.41", "condition": "1012:15,1010:23,1007:13,1011:13", "extra_reward": null }, { "id": 46, "commission": 0.39, "condition": "1003:22,1007:23,1010:16,1002:24", "extra_reward": null }, { "id": 47, "commission": 0.49, "condition": "1010:24,1015:20,1003:25,1014:16", "extra_reward": null }, { "id": 48, "commission": "0.26", "condition": "1013:17,1007:24,1008:37,1001:30", "extra_reward": null }, { "id": 49, "commission": 0.48, "condition": "1002:26,1004:21,1009:22,1006:20", "extra_reward": null }, { "id": 50, "commission": "0.25", "condition": "1006:27,1012:19,1008:20,1015:11", "extra_reward": "1001:1100" }, { "id": 51, "commission": "0.34", "condition": "1011:18,1004:19,1002:25,1003:11", "extra_reward": null }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:20,1001:25,1004:26", "extra_reward": null }, { "id": 53, "commission": "0.28", "condition": "1014:14,1012:12,1010:20,1015:18", "extra_reward": null }, { "id": 54, "commission": 0.45, "condition": "1005:22,1002:33,1009:16,1015:17", "extra_reward": null }, { "id": 55, "commission": "0.56", "condition": "1001:23,1014:19,1005:17,1010:15", "extra_reward": null }, { "id": 56, "commission": "0.35", "condition": "1006:27,1005:29,1009:17,1003:18", "extra_reward": null }, { "id": 57, "commission": 0.67, "condition": "1007:21,1008:17,1002:16,1009:25", "extra_reward": null }, { "id": 58, "commission": 0.32, "condition": "1006:20,1008:25,1005:24,1007:19", "extra_reward": null }, { "id": 59, "commission": 0.79, "condition": "1012:25,1009:30,1013:16,1008:15", "extra_reward": null }, { "id": 60, "commission": 0.69, "condition": "1015:26,1012:27,1010:31,1001:23", "extra_reward": "1001:1100" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:25,1011:15,1002:17", "extra_reward": null }, { "id": 62, "commission": 0.44, "condition": "1015:21,1007:15,1011:18,1006:26", "extra_reward": null }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:27", "extra_reward": null }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:29,1004:25", "extra_reward": null }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:30,1014:20,1005:15", "extra_reward": null }, { "id": 66, "commission": 0.73, "condition": "1004:25,1008:25,1002:34,1012:14", "extra_reward": null }, { "id": 67, "commission": 0.13, "condition": "1001:36,1012:20,1011:20,1003:20", "extra_reward": null }, { "id": 68, "commission": 0.69, "condition": "1013:24,1008:23,1006:16,1007:17", "extra_reward": null }, { "id": 69, "commission": 0.37, "condition": "1015:30,1004:29,1013:17,1009:10", "extra_reward": null }, { "id": 70, "commission": 0.71, "condition": "1010:23,1004:31,1011:17,1012:11", "extra_reward": "1001:1200" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:26,1003:28,1015:13", "extra_reward": null }, { "id": 72, "commission": 0.31, "condition": "1005:25,1002:38,1012:19,1010:14", "extra_reward": null }, { "id": 73, "commission": 0.39, "condition": "1012:34,1006:22,1003:27,1004:20", "extra_reward": null }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:30,1001:20", "extra_reward": null }, { "id": 75, "commission": 0.18, "condition": "1006:31,1014:30,1008:12,1002:25", "extra_reward": null }, { "id": 76, "commission": 0.51, "condition": "1007:21,1012:20,1004:11,1014:20", "extra_reward": null }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:16,1012:24,1007:30", "extra_reward": null }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:22", "extra_reward": null }, { "id": 79, "commission": 0.65, "condition": "1006:26,1004:18,1007:12,1011:27", "extra_reward": null }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:24", "extra_reward": "1001:1200" }, { "id": 81, "commission": 0.14, "condition": "1012:20,1015:28,1002:24,1003:38", "extra_reward": null }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14", "extra_reward": null }, { "id": 83, "commission": 0.53, "condition": "1010:19,1003:38,1007:22,1015:20", "extra_reward": null }, { "id": 84, "commission": 0.62, "condition": "1005:29,1014:26,1002:18,1007:38", "extra_reward": null }, { "id": 85, "commission": 0.37, "condition": "1011:20,1001:17,1012:12,1004:32", "extra_reward": null }, { "id": 86, "commission": 0.59, "condition": "1009:25,1011:20,1006:14,1015:21", "extra_reward": null }, { "id": 87, "commission": "0.31", "condition": "1006:26,1005:19,1013:20,1014:29", "extra_reward": null }, { "id": 88, "commission": "0.48", "condition": "1008:37,1011:24,1015:12,1014:11", "extra_reward": null }, { "id": 89, "commission": "0.22", "condition": "1002:17,1003:28,1005:22,1010:31", "extra_reward": null }, { "id": 90, "commission": 0.32, "condition": "1002:39,1013:28,1007:25,1001:33", "extra_reward": "1001:1300" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:20,1014:10,1007:26", "extra_reward": null }, { "id": 92, "commission": 0.13, "condition": "1004:38,1011:13,1008:15,1007:29", "extra_reward": null }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:39,1006:38,1008:31", "extra_reward": null }, { "id": 94, "commission": 0.22, "condition": "1002:36,1014:27,1013:16,1005:31", "extra_reward": null }, { "id": 95, "commission": 0.15, "condition": "1005:26,1011:34,1015:34,1008:16", "extra_reward": null }, { "id": 96, "commission": "0.49", "condition": "1003:24,1001:34,1007:28,1005:30", "extra_reward": null }, { "id": 97, "commission": "0.6", "condition": "1013:32,1009:33,1006:30,1011:40", "extra_reward": "1001:1500" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1002:0", "gain": null, "probability": 0.01, "get_diamond": 1 }, { "id": 2, "reward": "1002:1500", "cost": "1002:10000", "gain": 0.1, "probability": 0.03, "get_diamond": 1 }, { "id": 3, "reward": "1002:2000", "cost": "1002:30000", "gain": 0.25, "probability": 0.05, "get_diamond": 2 }, { "id": 4, "reward": "1002:2500", "cost": "1002:50000", "gain": 0.4, "probability": 0.08, "get_diamond": 3 }, { "id": 5, "reward": "1002:3000", "cost": "1002:100000", "gain": 0.55, "probability": 0.1, "get_diamond": 5 }], "feed": [{ "id": 1001, "name": "\u997C\u5E72", "icon": "pet_feed/1001_feed.png", "vitality": 1, "cost": "1002:30", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1002, "name": "\u575A\u679C", "icon": "pet_feed/1002_feed.png", "vitality": 2, "cost": "1002:50", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1003, "name": "\u706B\u817F", "icon": "pet_feed/1003_feed.png", "vitality": 5, "cost": "1002:100", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1004, "name": "\u725B\u8089", "icon": "pet_feed/1004_feed.png", "vitality": 50, "cost": "1002:900", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1005, "name": "\u732A\u8089", "icon": "pet_feed/1005_feed.png", "vitality": 20, "cost": "1002:460", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1006, "name": "\u9E21\u8089", "icon": "pet_feed/1006_feed.png", "vitality": 10, "cost": "1002:270", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }], "currency": [{ "id": 1001, "name": "\u94BB\u77F3", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "\u91D1\u5E01", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_times", "value": 30 }, { "id": "all_speed_up_time", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:5000,1002:10000,1002:20000,1002:30000,1002:40000,1002:50000,1002:60000" }, { "id": "goldDefault", "value": "1002:100" }, { "id": "diamondDefault", "value": "1001:50" }, { "id": "ADTimesLimit", "value": 30 }, { "id": "ADSpeedUptimes", "value": 6 }, { "id": "vitalityBuyCostGold", "value": "1002:10000" }, { "id": "vitalityLimit", "value": 10 }, { "id": "Initial_physical_strength", "value": 10 }, { "id": "landAmountMax", "value": 9 }, { "id": "petDefaultVitality", "value": 100 }, { "id": "petDigestIntervalTime", "value": 300 }, { "id": "Videorewards", "value": "1001:200" }, { "id": "withdrawal", "value": "1001:10000:1" }, { "id": "Invitation_rewards", "value": "1001:5000" }, { "id": "withdrawal_times", "value": "0.3:3,0.5:2,5:0,10:0,50:0" }] };

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
    ApiHttp2["mailList"] = "/mail/list";
    ApiHttp2["mailRead"] = "/mail/read";
    ApiHttp2["mailDelete"] = "/mail/delete";
    ApiHttp2["withdraw"] = "/withdraw";
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
    }
    onOpened(d) {
      this.data = d;
      this.landData = TableAnalyze_default.table("config").get("unlock_land_cost").value[LandService_default.list.size];
      this.costIcon.skin = this.landData.obj.icon;
      this.costFont.value = this.landData.count + "";
    }
    onClick(e) {
      switch (e.target.name) {
        case "closeAddLandLayer":
          core_default.view.close(Res_default.views.AddLandView);
          break;
        case "cost_gold":
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
          HttpControl.inst.send({
            api: ApiHttp.landUnlock,
            data: {
              landId: this.data.id,
              type: ConfigGame_default.ApiTypeDefault
            }
          }).then(() => {
            var _a;
            if ((_a = this.data) == null ? void 0 : _a.call) {
              this.data.call();
              core_default.view.close(Res_default.views.AddLandView);
            }
          });
          break;
        case "ad_btn":
          HttpControl.inst.send({
            api: ApiHttp.landUnlock,
            data: {
              landId: this.data.id,
              type: ConfigGame_default.ApiTypeAD
            }
          }).then(() => {
            var _a;
            if ((_a = this.data) == null ? void 0 : _a.call) {
              this.data.call();
              core_default.view.close(Res_default.views.AddLandView);
            }
            core_default.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
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
    }
    onOpened(e) {
      this.data = e;
      let costGoldCount = TableAnalyze_default.table("config").get("vitalityBuyCostGold").value;
      this.costGoldCount = costGoldCount;
      this.priceLabel.text = `\u4EF7\u683C\uFF1A${costGoldCount}`;
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
      this.desc = null;
    }
    onOpened(e) {
      this.data = e;
      let nextLand = TableAnalyze_default.table("landLevel").get(e.obj.level + 1);
      this.priceLabel.text = `\u4EF7\u683C\uFF1A${nextLand.cost.count}`;
      this.priceIcon.skin = nextLand.cost.obj.icon;
      console.log(e, nextLand);
      this.desc.text = `\u571F\u5730\u5347\u7EA7\u5230${e.obj.level + 1}\u7EA7\uFF0C\u6536\u76CA\u589E\u52A0${nextLand.gain * 100}% \u94BB\u77F3\u4EA7\u51FA\u6982\u7387\u589E\u52A0${Number((nextLand.probability * 100).toFixed(2))}%`;
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
        console.log(11);
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
      this.orderQueueIng = false;
    }
    onOpened() {
      _MainView.inst = this;
      [
        "res/loadingBg.png",
        "res/img_woodtitle.png",
        "res/img_storeHouseBg.png",
        "res/img_storebg.png",
        "res/img_shelf.png",
        "res/img_popUpBg.png",
        "res/img_landBg.png",
        "res/img_inviteBg1.png",
        "res/img_housetop.png",
        "res/img_farmlandLogo.png",
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
            }
          }
        });
      }
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
      this.figureAniEvent();
    }
    figureAniEvent() {
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
          this.petBox.getChildByName("dog").skin = TableAnalyze_default.table("pet").get(e).icon;
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
        case "dog":
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
          let btnBox = box.getChildByName("btn_box").getChildByName("box");
          btnBox.getChildByName("icon").skin = reward.obj.icon;
          btnBox.getChildByName("value").value = `${rewardCount + Math.round(rewardCount * d.commission)}`;
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
            this.playGetRewardAni({
              node: box.getChildByName("btn_box"),
              list: [
                {
                  obj: TableAnalyze_default.table("currency").get(ConfigGame_default.goldId),
                  count: rewardCount + Math.round(rewardCount * d.commission),
                  posType: 1
                }
              ],
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
          this.isOuter = false;
          Laya.timer.once(300, this, () => {
            core_default.view.setOverView(false);
            this.goFriend(null);
            this.updateHitLandAdd();
          });
        });
      });
    }
    goToNeighbor() {
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
          land.updateData({ list: userLands });
        }
        land.plantIconAni(Boolean((_a = land.data) == null ? void 0 : _a.productId));
      }
      this.updateAllStateIcon();
      if (this.isOuter) {
        this.petBox.visible = false;
        this.taskBox.visible = false;
      } else {
        if (UserInfo_default.warePetId)
          this.petBox.visible = true;
        this.taskBox.visible = true;
      }
      this.updateFriendView(d == null ? void 0 : d.nickname, friendData);
    }
    updateFriendView(nickname = "", friendData) {
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
      } else {
        this.outCountDownNumber = 60;
        Laya.timer.clear(this, this.outCountDownEvent);
        orderBox.visible = true;
        friendName.visible = false;
        moneyBox.visible = true;
        countDown.visible = false;
        if (UserInfo_default.avatar)
          this.avatarNode.skin = UserInfo_default.avatar;
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
      const data = this.friendsList[i];
      let newBox = cell.getChildByName("new_box"), heartBox = cell.getChildByName("heart_box"), goPlayBtn = cell.getChildByName("go_play_btn"), applyBtn = cell.getChildByName("apply_btn"), delBtn = cell.getChildByName("del_btn");
      heartBox.visible = false;
      goPlayBtn.visible = false;
      applyBtn.visible = false;
      delBtn.visible = false;
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
      }).then(() => {
        this.friendsList = [];
        this.itemList.array = this.friendsList;
        this.itemList.refresh();
        core_default.view.openHint({ text: "\u5DF2\u53D1\u9001\u6FC0\u60C5", call: () => {
        } });
        this.canClick = true;
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
      console.log("awake2");
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
                core_default.view.openHint({ text: `\u5FAE\u4FE1\u767B\u5F55\u5931\u8D25[${data.code}]` });
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
                  core_default.view.openHint({ text: `\u767B\u5F55\u5931\u8D25[${data.code}]` });
                } else {
                  ConfigGame_default.channel = data.data["channel"];
                }
              }
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
        plant.gain.forEach((d2) => {
          if (d2.obj.id == ConfigGame_default.diamondId)
            return;
          lostGold += d2.count * itemsBack[x].amount;
        });
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
    }
    onOpened() {
      this.dataList = TableAnalyze_default.table("order").list;
      let orderOldLv = UserInfo_default.orderLevel || 0;
      this.dataList.sort((a, b) => {
        return a.id * (b.id <= orderOldLv ? -1 : 1);
      });
      this.orderList.array = this.dataList;
      this.orderList.renderHandler = new Laya.Handler(this, this.renderList);
      this.orderList.vScrollBarSkin = null;
      console.log(this.dataList);
    }
    renderList(cell, i) {
      var _a;
      let d = this.dataList[i], reward, rewardCount = 0, curCount = 0, maxCount = 0, progress = 0, rewardBox = cell.getChildByName("reward_box");
      cell.getChildByName("order_lv").text = `${d.id}\u7EA7\u8BA2\u5355`;
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
      let btn = cell.getChildByName("btn");
      diamond.visible = false;
      btn.visible = true;
      if (d.id > UserInfo_default.orderLevel + 1) {
        btn.skin = this.btnLockRes;
        btn.active = false;
      } else {
        if (d.id == UserInfo_default.orderLevel + 1) {
          btn.skin = this.btnResCur;
        } else {
          console.log("\u5DF2\u5B8C\u6210");
          btn.active = false;
          btn.visible = false;
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
      }
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
              posType: 2
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
      this.petIcon.skin = pet.base.icon;
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
            }
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
          let btnObj = e.target["dataSource"];
          if (btnObj.ok) {
            HttpControl.inst.send({
              api: ApiHttp.taskReward,
              data: { type: ConfigGame_default.ApiTypeDefault, taskId: btnObj.id }
            }).then(() => {
              const task = TaskService_default.getTask(btnObj.id);
              task.receive = 1;
              btnObj.ok = false;
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
            core_default.eventGlobal.event(EventMaps.open_friend, [1]);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Db25maWdHYW1lLnRzIiwgIi4uLy4uL3NyYy9jb3JlL0FwcC50cyIsICIuLi8uLi9zcmMvY29yZS9BdWRpb0NvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvcmUvaW5kZXgudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQWJvdXRWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVG9vbHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9UYWJsZUFuYWx5emUudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9Vc2VySW5mby50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL05ldE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9IdHRwRGF0YUNvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9IdHRwQ29udHJvbC50cyIsICIuLi8uLi9zcmMvdmlldy9BZGRMYW5kVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9CdXlWaXRhbGl0eVZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRmllbGRMZXZlbFVwVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GcmllbmRzRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9FcnJvckNvZGUudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvR3VpZGVWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0hpbnRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0xvZ2luVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9NYWlsRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpbFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmlndXJlQW5pLnRzIiwgIi4uLy4uL3NyYy92aWV3L09yZGVyVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9PdmVyVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TZXR0aW5nVmlldy50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvRmVlZFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2hvcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2lnbkluRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2lnbkluVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TcGVlZFVwVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9UYXNrVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9XYXJlaG91c2VWaWV3LnRzIiwgIi4uLy4uL3NyYy9HYW1lQ29uZmlnLnRzIiwgIi4uLy4uL3NyYy9NYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHU1NDBEXHU3OUYwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBFdmVudE1hcHMge1xyXG4gICAgLyoqIGxvYWQgXHU3NTRDXHU5NzYyXHU4RkRCXHU4ODRDXHU2NkY0XHU2NUIwICovXHJcbiAgICBsb2FkX3Byb2dyZXNzID0gXCJsb2FkX3Byb2dyZXNzXCIsXHJcblxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMCAqL1xyXG4gICAgdXBkYXRlX2ZpZWxkID0gXCJ1cGRhdGVfZmllbGRcIixcclxuXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU0RTNCXHU5ODc1XHU4QkEyXHU1MzU1XHU2NTcwXHU2MzZFICovXHJcbiAgICB1cGRhdGVfT3JkZXIgPSBcInVwZGF0ZV9PcmRlclwiLFxyXG5cclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTUyQTBcdTkwMUYgKi9cclxuICAgIGxhbmRfc3BlZWRfdXAgPSBcImxhbmRfc3BlZWRfdXBcIixcclxuXHJcbiAgICAvKiogXHU4RkRCXHU1MTY1XHU2RTM4XHU2MjBGICovXHJcbiAgICBsb2dpbl9nYW1lID0gXCJsb2dpbl9nYW1lXCIsXHJcbiAgICAvKiogXHU5MDAwXHU1MUZBXHU2RTM4XHU2MjBGICovXHJcbiAgICBsb2dpbl9vdXQgPSBcImxvZ2luX291dFwiLFxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NEVGQlx1NTJBMSAqL1xyXG4gICAgdXBkYXRlX3Rhc2sgPSBcInVwZGF0ZV90YXNrXCIsXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU2NUIwXHU2MjRCXHU0RUZCXHU1MkExXHU2MjRCICovXHJcbiAgICB1cGRhdGVfZ3VpZF9oYW5kID0gXCJ1cGRhdGVfZ3VpZF9oYW5kXCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY0QURcdTY1M0VcdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdTUyQThcdTc1M0JcclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAge1xyXG4gICAgICAgIC8vXHU5NzAwXHU4OTgxXHU5OERFXHU5MUQxXHU1RTAxXHU3Njg0XHU1M0MyXHU4MDAzXHU4MjgyXHU3MEI5XHJcbiAgICAgICAgbm9kZTogdGhpcy5vd25lcixcclxuICAgICAgICAvL1x1ODk4MVx1OThERVx1NzY4NFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9cdTg5RTNcdTY3OTBcdTU5N0RcdTc2ODRcdTVFMjZpY29uXHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldCgxMDAxKSxcclxuICAgICAgICAgICAgICAgIC8vXHU2NTcwXHU5MUNGXHJcbiAgICAgICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgICAgICAgICAvL1x1ODk4MVx1OThERVx1NTNCQlx1NzY4NFx1NEY0RFx1N0Y2RSAxIFx1OTFEMVx1NUUwMSAyIFx1OTRCQlx1NzdGM1xyXG4gICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9XHJcbiAgICAgKi9cclxuICAgIHBsYXlfZ2V0X3Jld2FyZCA9IFwicGxheV9nZXRfcmV3YXJkXCIsXHJcbiAgICAvKiogXHU3NzBCXHU1RTdGXHU1NDRBXHU2NEFEXHU2NTNFXHU1OTU2XHU1MkIxXHU4M0I3XHU4M0I3XHU1Rjk3XHU1MkE4XHU3NTNCICBcdTRGMjBcdTUxNjVcdTgyODJcdTcwQjkgKi9cclxuICAgIHBsYXlfYWRfZ2V0X3Jld2FyZCA9IFwicGxheV9hZF9nZXRfcmV3YXJkXCIsXHJcbiAgICAvKiogXHU1M0JCXHU1OTdEXHU1M0NCXHU1QkI2ICovXHJcbiAgICBnb19mcmllbmRfaG9tZSA9IFwiZ29fZnJpZW5kX2hvbWVcIixcclxuICAgIC8qKiBcdTYyNTNcdTVGMDBcdTU5N0RcdTUzQ0JcdTc1NENcdTk3NjIgKi9cclxuICAgIG9wZW5fZnJpZW5kID0gXCJvcGVuX2ZyaWVuZFwiLFxyXG4gICAgLyoqIFx1NzlDRFx1ODNEQ1x1NEUzQlx1NzU0Q1x1OTc2Mlx1OEZEQlx1NTE2NSAqL1xyXG4gICAgcGxhbnRfc293ID0gXCJwbGFudF9zb3dcIixcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NEUwRWFwcFx1NEVBNFx1NEU5Mlx1NEU4Qlx1NEVGNlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQXBwRXZlbnRNYXAge1xyXG4gICAgLyoqIFx1NzcwQlx1NUU3Rlx1NTQ0QSAqL1xyXG4gICAgYWQgPSBcImFkXCIsXHJcbiAgICAvKiogXHU1MTczXHU5NUVEXHU1Qjg5XHU1MzUzXHU1NDJGXHU1MkE4XHU5MDZFXHU3RjY5ICovXHJcbiAgICBjbG9zZUltYWdlID0gXCJjbG9zZUltYWdlXCIsXHJcbiAgICAvKiogXHU1RkFFXHU0RkUxXHU3NjdCXHU1RjU1ICovXHJcbiAgICB3eExvZ2luID0gXCJ3eExvZ2luXCIsXHJcbiAgICAvKiogXHU1RkFFXHU0RkUxXHU3NjdCXHU1RjU1XHU2MjEwXHU1MjlGICovXHJcbiAgICB3eExvZ2luU3VjY2VzcyA9IFwid3hMb2dpblN1Y2Nlc3NcIixcclxuICAgIC8qKiBcdTVGQUVcdTRGRTFcdTUyMDZcdTRFQUIgKi9cclxuICAgIHd4U2hhcmUgPSBcInd4U2hhcmVcIixcclxuICAgIC8qKiBcdTUzQ0JcdTc2REZcdTRFOEJcdTRFRjZcdTdFREZcdThCQTEgXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGIHt0eXBlOlx1NUJGOVx1NUU5NFx1ODk4MVx1N0VERlx1OEJBMVx1NzY4NFx1NzBCOX0gKi9cclxuICAgIGV2ZW50Q291bnQgPSBcImV2ZW50Q291bnRcIixcclxuICAgIC8qKiBcdTk2OTBcdTc5QzFcdTY1M0ZcdTdCNTYgKi9cclxuICAgIHByaXZhY3lBZ3JlZW1lbnQgPSBcInByaXZhY3lBZ3JlZW1lbnRcIixcclxuICAgIC8qKiBcdTY3MERcdTUyQTFcdTUzNEZcdThCQUUgKi9cclxuICAgIHNlcnZpY2VBZ3JlZW1lbnQgPSBcInNlcnZpY2VBZ3JlZW1lbnRcIixcclxuICAgIC8qKiBcdTZDRThcdTUxOENcdTYyMTBcdTUyOUYgKi9cclxuICAgIHJlZ2lzdGVyU3VjY2VzcyA9IFwicmVnaXN0ZXJTdWNjZXNzXCIsXHJcbiAgICAvKiogXHU3NjdCXHU1RjU1XHU2MjEwXHU1MjlGICovXHJcbiAgICBsb2dpblN1Y2Nlc3MgPSBcIkxvZ2luU3VjY2Vzc1wiLFxyXG4gICAgLyoqIFx1NkUwNVx1OTY2NFx1N0YxM1x1NUI1OCAqL1xyXG4gICAgY2xlYXJDYWNoZSA9IFwiY2xlYXJDYWNoZVwiLFxyXG4gICAgLyoqIFx1NjI1M1x1NUYwMFx1OTA2RVx1N0Y2OVx1ODBDQ1x1NjY2RiAqL1xyXG4gICAgc2hvd0JhY2tncm91bmQgPSBcInNob3dCYWNrZ3JvdW5kXCIsXHJcbn1cclxuIiwgIi8vXHU0RUUzXHU3ODAxXHU3NTFGXHU2MjEwXHVGRjBDXHU0RTBEXHU4OTgxXHU2MjRCXHU1MkE4XHU0RkVFXHU2NTM5XG5cbi8qKlxuICogXHU3NTRDXHU5NzYyXHU1MjE3XHU4ODY4XG4gKi9cbiBleHBvcnQgZW51bSB2aWV3cyBcbiAgICB7XG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvQWJvdXRWaWV3LnNjZW5lICovXG4gICAgICAgIEFib3V0VmlldyA9IFwic2NlbmVzL3ZpZXdzL0Fib3V0Vmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZSAqL1xuICAgICAgICBBZGRMYW5kVmlldyA9IFwic2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0J1eVZpdGFsaXR5Vmlldy5zY2VuZSAqL1xuICAgICAgICBCdXlWaXRhbGl0eVZpZXcgPSBcInNjZW5lcy92aWV3cy9CdXlWaXRhbGl0eVZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBGaWVsZExldmVsVXBWaWV3ID0gXCJzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GcmllbmRzRGVzY1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc0Rlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZyaWVuZHNSZXdhcmRWaWV3LnNjZW5lICovXG4gICAgICAgIEZyaWVuZHNSZXdhcmRWaWV3ID0gXCJzY2VuZXMvdmlld3MvRnJpZW5kc1Jld2FyZFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRnJpZW5kc1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc1ZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9HdWlkZVZpZXcuc2NlbmUgKi9cbiAgICAgICAgR3VpZGVWaWV3ID0gXCJzY2VuZXMvdmlld3MvR3VpZGVWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lICovXG4gICAgICAgIEhpbnRWaWV3ID0gXCJzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTG9naW5WaWV3LnNjZW5lICovXG4gICAgICAgIExvZ2luVmlldyA9IFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWlsRGVzY1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpbERlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpbERlc2NWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lICovXG4gICAgICAgIE1haWxWaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpblZpZXcgPSBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmUgKi9cbiAgICAgICAgT3JkZXJWaWV3ID0gXCJzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL092ZXJWaWV3LnNjZW5lICovXG4gICAgICAgIE92ZXJWaWV3ID0gXCJzY2VuZXMvdmlld3MvT3ZlclZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2V0dGluZ1ZpZXcgPSBcInNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZSAqL1xuICAgICAgICBTaG9wVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NpZ25JbkRlc2NWaWV3LnNjZW5lICovXG4gICAgICAgIFNpZ25JbkRlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvU2lnbkluRGVzY1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZSAqL1xuICAgICAgICBTaWduSW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBTcGVlZFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NwZWVkVXBWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lICovXG4gICAgICAgIFRhc2tWaWV3ID0gXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZSAqL1xuICAgICAgICBXYXJlaG91c2VWaWV3ID0gXCJzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZVwiLCBcbiAgICB9XG5cbiBleHBvcnQgZW51bSBhdWRpb3MgXG4gICAge1xuICAgICAgICAvKiogYXVkaW8vemhvbmd6aGkubXAzICovXG4gICAgICAgIHpob25nemhpID0gXCJyZXMvYXVkaW8vemhvbmd6aGkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vdHVkaXNoZW5namkubXAzICovXG4gICAgICAgIHR1ZGlzaGVuZ2ppID0gXCJyZXMvYXVkaW8vdHVkaXNoZW5namkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vc2hvdWNhaS5tcDMgKi9cbiAgICAgICAgc2hvdWNhaSA9IFwicmVzL2F1ZGlvL3Nob3VjYWkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZ291amlhb3NoZW5nLm1wMyAqL1xuICAgICAgICBnb3VqaWFvc2hlbmcgPSBcInJlcy9hdWRpby9nb3VqaWFvc2hlbmcubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZGFrYWljYW5na3UubXAzICovXG4gICAgICAgIGRha2FpY2FuZ2t1ID0gXCJyZXMvYXVkaW8vZGFrYWljYW5na3UubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vYnV0dG9uX2NsaWNrLm1wMyAqL1xuICAgICAgICBidXR0b25fY2xpY2sgPSBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vQkdNLm1wMyAqL1xuICAgICAgICBCR00gPSBcInJlcy9hdWRpby9CR00ubXAzXCIsIFxuICAgIH1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9XYXJlaG91c2VWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU3BlZWRVcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NpZ25JbkRlc2NWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL092ZXJWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpbERlc2NWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9Mb2dpblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9HdWlkZVZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9CdXlWaXRhbGl0eVZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9BYm91dFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9NYWlsSXRlbS5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9HZXRSZXdhcmQucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvRmxvYXRSZXdhcmRJY29uLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0ZpZWxkUHJlZmFiLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvY29tcG9uZW50cy9CdXR0b24ucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9hbmkvbGFuZFVwLmFuaVwiLFxuICAgICAgICAgICAgXCJyZXMvbG9hZGluZ0JnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3dvb2R0aXRsZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZUhvdXNlQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmViZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zaGVsZi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnTWFpbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2xhbmRCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG91c2V0b3AucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9uZ2Jhb2Jhbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19mYXJtbGFuZExvZ28ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmU1LnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlNS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlNC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTQuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTMucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUzLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUyLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTEuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3ZzLnZzXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvcHMuZnNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3pob25nemhpLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vdHVkaXNoZW5namkubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9zaG91Y2FpLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZ291amlhb3NoZW5nLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZGFrYWljYW5na3UubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9CR00ubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2xvYWQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9sb2FkLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5hdGxhc1wiXTtcbiAgICBcblxuLyoqXG4gKiBcdTYyNDBcdTY3MDlcdThENDRcdTZFOTBcbiAqL1xuY29uc3QgUmVzID0ge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBzY2VuZXM6IHNjZW5lcyxcbiAgICBhdWRpb3M6IGF1ZGlvcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcztcbiIsICIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5jb25zdCBFdmVudEdsb2JhbCA9IG5ldyBMYXlhLkV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1OEJBMlx1OTYwNVx1NEU4Qlx1NEVGNlx1NzY4NFx1N0M3Qlx1NzY4NFx1NTM5Rlx1NTc4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV2ZW50Q2xhc3M6IE1hcDxhbnksIHsga2V5OiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFdmVudE9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcbiAgICAgICAgaWYgKCFFdmVudENsYXNzLmdldCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIEV2ZW50Q2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBFdmVudENsYXNzLmdldCh0YXJnZXQpLnB1c2goeyBrZXk6IG5hbWUsIGZuOiBkZXNjcmlwdG9yLnZhbHVlIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1NUM1RVx1NjAyN1x1NjdFNVx1NjI3RVx1N0VEMVx1NUI5QVx1NTQwRFx1NzlGMFx1NzY4NFx1N0M3Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJpbmROYW1lQ2xhc3M6IE1hcDxhbnksIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRCeU5hbWUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIC8vICAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG5cclxuICAgIGlmICghQmluZE5hbWVDbGFzcy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgIEJpbmROYW1lQ2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgfVxyXG4gICAgQmluZE5hbWVDbGFzcy5nZXQodGFyZ2V0KS5wdXNoKHByb3BlcnR5S2V5KTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50R2xvYmFsO1xyXG4iLCAiY29uc3QgY2FsbGVyczogTWFwPGFueSwgRnVuY3Rpb25bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG5jbGFzcyBPYnNlcnZhYmxlQ29udHJvbDxjYWxsIGV4dGVuZHMgTGF5YS5TY3JpcHQ+IHtcclxuICAgIHByaXZhdGUga2V5RXZlbnRzOiBNYXA8YW55LCBNYXA8c3RyaW5nLCBGdW5jdGlvbltdPj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNcdTVDNUVcdTYwMjdcdTUwM0NcdTUzRDhcdTUzMTZcclxuICAgICAqICBbXHU1NzI4XHU3NTRDXHU5NzYyZGVzdHJveVx1NzY4NFx1NjVGNlx1NTAxOVx1NEYxQVx1ODFFQVx1NURGMVx1NkNFOFx1OTUwMFx1NzZEMVx1NTQyQ11cclxuICAgICAqIEBwYXJhbSBPYmogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHdhdGNoPFQgZXh0ZW5kcyB7fT4oT2JqOiBULCBjYWxsZXI6IGNhbGwpIHtcclxuICAgICAgICBpZiAoIWNhbGxlcnMuaGFzKGNhbGxlcikpIHtcclxuICAgICAgICAgICAgY2FsbGVycy5zZXQoY2FsbGVyLCBbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQga2V5RXZlbnQgPSB0aGlzLmtleUV2ZW50cztcclxuICAgICAgICBpZiAoIWtleUV2ZW50LmhhcyhPYmopKSB7XHJcbiAgICAgICAgICAgIGtleUV2ZW50LnNldChPYmosIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcdTc2ODRcdTVDNUVcdTYwMjdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUM1RVx1NjAyN1xyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsIFx1NTZERVx1OEMwM1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGtleUJpbmQgPSA8S2V5IGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLZXkgJiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfb2JqID0ga2V5RXZlbnQuZ2V0KE9iaik7XHJcbiAgICAgICAgICAgIGlmICghX29iai5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgX29iai5zZXQoa2V5LCBbXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqW1wiI1wiICsga2V5XSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmpbXCIjXCIgKyBrZXldID0gT2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iaiwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1wiI1wiICsga2V5XSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb2JqLmdldChrZXkpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCIjXCIgKyBrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbGwuYmluZChjYWxsKTtcclxuICAgICAgICAgICAgX29iai5nZXQoa2V5KS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGwoT2JqW2tleV0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NEYyMFx1NTE2NVx1NzY4NGNhbGxlclx1NTIyMFx1OTY2NFx1NUY1M1x1NTI0RFx1N0VEMVx1NUI5QVx1NzY4NFx1NjI0MFx1NjcwOVx1NzY4NFx1NEU4Qlx1NEVGNiBcdTYyMTZcdTYzMDdcdTVCOUFcdTg5RTNcdTUxQjNcdTZBMjFcdTRFMkFcdTVCRjlcdThDNjFcdThEREZcdTVGNTNcdTUyNERjYWxsZXJcdTdFRDFcdTVCOUFcdTc2ODRcdTc2RDFcdTU0MkNcclxuICAgICAqIEBwYXJhbSBjYWxsZXIgXHU3NkQxXHU1NDJDXHU2NUY2XHU3RUQxXHU1QjlBXHU3Njg0XHU1NzNBXHU2NjZGXHU1QkY5XHU4QzYxXHJcbiAgICAgKiBAcGFyYW0gb2JqIFx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICByZW1vdmVCeUNhbGxlcihjYWxsZXI6IGNhbGwsIG9iajogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcik/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmdldChvYmopLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBrLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9ic2VydmFibGVDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgRXZlbnRHbG9iYWwsIHsgQmluZE5hbWVDbGFzcywgRXZlbnRDbGFzcyB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcblxyXG4vKipcclxuICogXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyaXB0IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvL0V2ZW50T25cdTg4QzVcdTk5NzBcdTU2NjhcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUFcclxuICAgICAgICBsZXQgYmluZEV2ZW50ID0gRXZlbnRDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIGJpbmRFdmVudD8uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBFdmVudEdsb2JhbC5vbihkLmtleSwgdGhpcywgZC5mbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRBd2FrZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25Bd2FrZSgpIHtcclxuICAgICAgICAvL1x1N0VEOVx1ODhDNVx1OTk3MFx1NTY2OFx1OEJCMFx1NUY1NVx1NzY4NFx1NUM1RVx1NjAyN1x1RkYwQ1x1NjdFNVx1NjI3RVx1ODI4Mlx1NzBCOVxyXG4gICAgICAgIEJpbmROYW1lQ2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2VdID0gdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uSGRBd2FrZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU0RjIwXHU1MTY1XHU1M0MyXHU2NTcwXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqIEBwYXJhbSBlXHJcbiAgICAgKi9cclxuICAgIG9uT3BlbmVkKGUpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTZGQzBcdTZEM0JcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCNjRcdTY1RjZcdTYyNDBcdTY3MDlcdTgyODJcdTcwQjlcdTU0OENcdTdFQzRcdTRFRjZcdTU3NDdcdTVERjJcdTUyMUJcdTVFRkFcdTVCOENcdTZCRDVcdUZGMENcdTZCMjFcdTY1QjlcdTZDRDVcdTUzRUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkQXdha2UoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRW5hYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRFbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NTQyRlx1NzUyOFx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1ODI4Mlx1NzBCOVx1ODhBQlx1NkRGQlx1NTJBMFx1NTIzMFx1ODIxRVx1NTNGMFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkU3RhcnRcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkU3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QjJDXHU0RTAwXHU2QjIxXHU2MjY3XHU4ODRDdXBkYXRlXHU0RTRCXHU1MjREXHU2MjY3XHU4ODRDXHVGRjBDXHU1M0VBXHU0RjFBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFN0YXJ0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFVwZGF0ZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCQ0ZcdTVFMjdcdTY2RjRcdTY1QjBcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTVDM0RcdTkxQ0ZcdTRFMERcdTg5ODFcdTU3MjhcdThGRDlcdTkxQ0NcdTUxOTlcdTU5MjdcdTVGQUFcdTczQUZcdTkwM0JcdThGOTFcdTYyMTZcdTgwMDVcdTRGN0ZcdTc1MjhnZXRDb21wb25lbnRcdTY1QjlcdTZDRDVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkVXBkYXRlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERpc2FibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGREaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTc5ODFcdTc1MjhcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTRFQ0VcdTgyODJcdTcwQjlcdTRFQ0VcdTgyMUVcdTUzRjBcdTc5RkJcdTk2NjRcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGlzYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREZXN0cm95XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25IZERlc3Ryb3koKTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NkUwNVx1OTY2NFx1OERERlx1NUY1M1x1NTI0RFx1N0M3Qlx1N0VEMVx1NUI5QVx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1ODlDMlx1NUJERlx1NjVCOVx1NkNENVxyXG4gICAgICAgICAgICBPYnNlcnZhYmxlUHJvcGVydHkucmVtb3ZlQnlDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIC8vXHU5NTAwXHU2QkMxXHU2NUY2XHU2RTA1XHU5NjY0XHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU1RjE1XHU3NTI4XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0ga2V5cy5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5c1t4XV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNEJcdTUyQThcdThDMDNcdTc1MjhcdTgyODJcdTcwQjlcdTk1MDBcdTZCQzFcdTY1RjZcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGVzdHJveSgpIHt9XHJcblxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiBcdTc1NENcdTk3NjJcdTYyNTNcdTVGMDBcdTRFRTVcdTU0MEVcdTVFMjZcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcclxuICAgIC8vICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgLy8gICovXHJcbiAgICAvLyBvbk9wZW5lZChkKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coMTExKTtcclxuICAgIC8vIH1cclxufVxyXG4iLCAiaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuXHJcbi8vY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U2hvd0FuaSBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJnLCB0aXBzOlwiXHU4MENDXHU2NjZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGJnOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb250ZW50LCB0aXBzOlwiXHU1MTg1XHU1QkI5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTphbmlUeXBlLHRpcHM6XCJcdTUyQThcdTc1M0JcdTdDN0JcdTU3OEJcIix0eXBlOkVkaXRPcHRpb24sb3B0aW9uOlwiYm90dG9tVG9TaG93LHNjYWxlU2hvd1wifSovXHJcbiAgICAvLyBcdThGRDRcdTU2REVcdTVCNTdcdTdCMjZcdTRFMzJcclxuICAgIGFuaVR5cGU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHR3ZWVuTGlzdDogTGF5YS5Ud2VlbltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9PcGVuKCkge31cclxuICAgIC8qKlxyXG4gICAgICogIFx1NTE3M1x1OTVFRFx1NjIxMFx1NTI5Rlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb0Nsb3NlKCkge31cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcblxyXG4gICAgICAgIHRoaXMuYmcuYWxwaGEgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAuNzUgfSxcclxuICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxlU2hvd1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLmZyb20oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMiwgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLCBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5ib3R0b20gPSAtdGhpcy5jb250ZW50LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJvdHRvbTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5jaXJjT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VWaWV3KCkge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY2FsZVNob3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVg6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVk6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAtdGhpcy5jb250ZW50LmhlaWdodCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi5jbGVhcihlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipcclxuICogXHU1QjlFXHU0RjhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jb25zdCBpbnN0YW5jZUxpc3Q6IE1hcDxudW1iZXIsIHsgbmV3ICgpOiB2b2lkIH0+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NzY4NGlkXHJcbiAqL1xyXG5sZXQgaW5zdGFuY2VJZDogbnVtYmVyID0gMTAwO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhbmNlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCFpbnN0YW5jZUxpc3QuaGFzKHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdKSkge1xyXG4gICAgICAgIGluc3RhbmNlSWQrKztcclxuICAgICAgICB0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSA9IGluc3RhbmNlSWQ7XHJcbiAgICAgICAgaW5zdGFuY2VMaXN0LnNldChpbnN0YW5jZUlkLCBuZXcgdGFyZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0W2tleV0gPSBpbnN0YW5jZUxpc3QuZ2V0KGluc3RhbmNlSWQpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IHsgSGludFZpZXdEYXRhIH0gZnJvbSBcInNyYy92aWV3L0hpbnRWaWV3XCI7XHJcbmltcG9ydCBPdmVyVmlldyBmcm9tIFwic3JjL3ZpZXcvT3ZlclZpZXdcIjtcclxuaW1wb3J0IFJlcywgeyB2aWV3cyB9IGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU5NzAwXHU4OTgxXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAqL1xyXG5pbnRlcmZhY2UgVmlld09wZW5QYXJtIHtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyICovXHJcbiAgICBzaG93TG9hZD86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCAqL1xyXG4gICAgc2hvd0xvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTk2OTBcdTg1Q0Zsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0IFx1OUVEOFx1OEJBNDAgKi9cclxuICAgIGhpZGVMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1MTczXHU5NUVEXHU1MTc2XHU0RUQ2XHU1NzNBXHU2NjZGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBdHJ1ZVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVx1RkYwQ1x1MzAxMFx1NkNFOFx1NjEwRlx1MzAxMVx1ODhBQlx1NTE3M1x1OTVFRFx1NzY4NFx1NTczQVx1NjY2Rlx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1OEJCRVx1N0Y2RWF1dG9EZXN0cm95QXRSZW1vdmVkPXRydWVcdUZGMENcdTUyMTlcdThENDRcdTZFOTBcdTUzRUZcdTgwRkRcdTRFMERcdTgwRkRcdTg4QUJcdTU2REVcdTY1MzZcdUZGMENcdTk3MDBcdTg5ODFcdTgxRUFcdTVERjFcdTYyNEJcdTUyQThcdTU2REVcdTY1MzZcclxuICAgICAqIHRvZG8gXHU3M0IwXHU1NzI4XHU4RkQ5XHU0RTJBXHU4QzAzXHU3NTI4XHU3Njg0XHU2NjJGXHU1RjE1XHU2NENFXHU4MUVBXHU1RTI2XHU3Njg0XHU2NUI5XHU2Q0Q1XHVGRjBDXHU2Q0ExXHU2NzA5XHU4RDcwXHU4RkQ5XHU5MUNDXHU3Njg0XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0VGXHU4MEZEXHU0RjFBXHU2NzA5XHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgKiBcdTczQjBcdTU3MjhcdTUxNjhcdTY2MkZmYWxzZSBcdTU0MEVcdTY3MUZcdTY3MDlcdTk3MDBcdTg5ODFcdTUxOERcdTRGMThcdTUzMTZcdThGRDlcdTRFMkFcdTRFMUNcdTg5N0ZcdUZGMENcdTRFMERcdTgwRkRcdTUxNzNcdTk1RURcdTUxNzZcdTVCODNcdTYyNDBcdTY3MDlcdTc1NENcdTk3NjJcdThGRDhcdTY3MkFcdTVCOUVcdTczQjBcclxuICAgICAqL1xyXG4gICAgY2xvc2VPdGhlcj86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHBhcm0/OiBhbnk7XHJcbiAgICAvKiogIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBjb21wbGV0ZT86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1NTJBMFx1OEY3RFx1OEZEQlx1NUVBNlx1NTZERVx1OEMwM1x1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcHJvZ3Jlc3M/OiBIYW5kbGVyO1xyXG59XHJcblxyXG5jb25zdCB2aWV3TWFwczogeyB1cmw6IHN0cmluZzsgdmlldzogTGF5YS5WaWV3IH1bXSA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpZXdNYW5hZ2VyIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IFZpZXdNYW5hZ2VyO1xyXG5cclxuICAgIGxvZ2luT3V0KCkge1xyXG4gICAgICAgIHZpZXdNYXBzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgdi52aWV3LmdldENvbXBvbmVudHMoTGF5YS5TY3JpcHQpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHU1NkRFXHU1OTM0XHU4OTgxXHU0RjE4XHU1MzE2XHU0RTAwXHU0RTBCXHU1MTc2XHU1QjgzXHU3NTRDXHU5NzYyXHU3Njg0XHU1MTczXHU5NUVEXHVGRjBDXHU4RkQ5XHU5MUNDXHU2NjJGXHU0RTBEXHU2NjJGXHU2NzA5XHU1NDBDXHU2ODM3XHU3Njg0XHU5NUVFXHU5ODk4XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKGUpO1xyXG4gICAgICAgICAgICAgICAgZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh2LnZpZXcudXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2MlxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcdTUzQzJcdTY1NzBcclxuICAgICAqL1xyXG4gICAgb3BlbihcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGRhdGE6IFZpZXdPcGVuUGFybSA9IHtcclxuICAgICAgICAgICAgY2xvc2VPdGhlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWREZWxheTogMTAwLFxyXG4gICAgICAgICAgICBoaWRlTG9hZERlbGF5OiAwLFxyXG4gICAgICAgIH1cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm1pc3MgcGF0aCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnNob3dMb2FkKSB7XHJcbiAgICAgICAgICAgIExheWEuVmlldy5zaG93TG9hZGluZ1BhZ2UobnVsbCwgZGF0YS5zaG93TG9hZERlbGF5KTtcclxuICAgICAgICAgICAgaWYgKHVybCAhPT0gUmVzLnZpZXdzLkxvZ2luVmlldykge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoZGF0YS5oaWRlTG9hZERlbGF5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhLmNsb3NlT3RoZXIgPSBmYWxzZTtcclxuICAgICAgICBMYXlhLlZpZXcub3BlbihcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLmNsb3NlT3RoZXIsXHJcbiAgICAgICAgICAgIGRhdGEucGFybSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoZTogTGF5YS5WaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsICE9IFJlcy52aWV3cy5Mb2dpblZpZXcpIHZpZXdNYXBzLnB1c2goeyB1cmw6IHVybCwgdmlldzogZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29uTGlzdCA9IGUuZ2V0Q29tcG9uZW50cyhMYXlhLlNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbkxpc3QuZm9yRWFjaCgoZSkgPT4gZS5lbmFibGVkICYmIGUub25PcGVuZWQgJiYgZS5vbk9wZW5lZChkYXRhLnBhcm0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGEuY29tcGxldGUgJiYgZGF0YS5jb21wbGV0ZShlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgIGAlYyA9PT4gb3BlbiAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojN2VkNmRmO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojMjJhNmIzO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YS5wcm9ncmVzc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxNzNcdTk1RURcdTg5QzZcdTU2RkVcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGFsbCBcdTU0MENcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcdTg4QUIgXHU1OTFBXHU2QjIxXHU2MjUzXHU1RjAwXHVGRjBDXHU1MTY4XHU1MjIwXHU5NjY0XHU3NTI4XHU4RkQ5XHU0RTJBXHJcbiAgICAgKiBAcGFyYW0gZGVzdHJveSBcdTk1MDBcdTZCQzEgICBUT0RPXHVGRjA4XHU5RUQ4XHU4QkE0XHU0RjFBXHU5NTAwXHU2QkMxXHU2MjQwXHU2NzA5XHU1QjUwXHU4MjgyXHU3MEI5XHVGRjBDXHU2NzJBXHU2RDRCXHU4QkQ1XHU2NjJGXHU1NDI2XHU2NzA5XHU5NUVFXHU5ODk4XHVGRjA5XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNsb3NlKFxyXG4gICAgICAgIHVybDogdmlld3MsXHJcbiAgICAgICAgYWxsOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGFuaUNvbTogdHlwZW9mIFZpZXdTaG93QW5pIHwgdHlwZW9mIEZsb2F0Vmlld1Nob3dBbmkgPSBWaWV3U2hvd0FuaVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy9UT0RPIFx1OEZEOVx1OTFDQ1x1NzNCMFx1NTcyOFx1NTE2OFx1OTBFOFx1NzUyOGRlc3Ryb3kgXHU1RjE1XHU2NENFcmVtb3ZlXHU1OTdEXHU1MENGXHU2NzA5XHU3MEI5XHU5NUVFXHU5ODk4XHVGRjBDXHU1MThEXHU5MDFBXHU4RkM3dmlldy5vcGVuXHU0RjFBXHU5MUNEXHU2NUIwXHU2Nzg0XHU1RUZBXHU3RUM0XHU0RUY2XHJcbiAgICAgICAgZGVzdHJveSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB2QW5pOiBWaWV3U2hvd0FuaTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0gdmlld01hcHNbeF0udXJsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHZpZXdNYXBzW3hdO1xyXG4gICAgICAgICAgICAgICAgdmlld01hcHMuc3BsaWNlKHgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZBbmkgPSB2LnZpZXcuZ2V0Q29tcG9uZW50KGFuaUNvbSBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZBbmkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2QW5pLmNsb3NlVmlldygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy90b2RvXHU5NzAwXHU4OTgxXHU0RjE4XHU1MzE2XHVGRjBDXHU3NTRDXHU5NzYyXHU3Njg0bWFwXHU5NzAwXHU4OTgxXHU2NTc0XHU3NDA2XHU2MjEwXHVGRjBDXHU1MTY4XHU1QzRGXHU1NDhDXHU1RjM5XHU3QTk3XHU3Njg0XHU1MzNBXHU1MjJCXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBSZXMudmlld3MuSGludFZpZXcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHU0RkREXHU4QkMxXHU1OTgyXHU2NzlDXHU1NzNBXHU2NjZGXHU1QjhDXHU1MTY4XHU2Q0ExXHU2NzA5XHU3NTRDXHU5NzYyXHU4OEFCXHU2MjUzXHU1RjAwXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1RkM1XHU2MjUzXHU1RjAwXHU0RTNCXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgaWYgKCF2aWV3TWFwcy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBsZXQgY2xvc2VMZW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAoIXZpZXdNYXBzW3hdLnZpZXcucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUxlbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VMZW4gPT09IHZpZXdNYXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLk1haW5WaWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdNYXBzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVmlld0xvZyh1cmw6IHN0cmluZywgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlYyA8PT0gJHtkZXN0cm95ID8gXCJkZXN0cm95XCIgOiBcImRpc2FibGVcIn0gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNmZjc5Nzk7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuSGludChkYXRhOiBIaW50Vmlld0RhdGEpIHtcclxuICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLkhpbnRWaWV3LCB7IHBhcm06IGRhdGEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNThcdTc1NENcdTk3NjJcclxuICAgICAqL1xyXG4gICAgY2xlYXJWaWV3TWFwcygpIHtcclxuICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3ZlclZpZXdDb206IE92ZXJWaWV3O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1MTczXHU5NUVEXHU4RkM3XHU1RUE2XHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIHNldE92ZXJWaWV3KG9wZW46IGJvb2xlYW4sIGNhbGw/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuT3ZlclZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAodjogT3ZlclZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyVmlld0NvbSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuY2xvc2UoY2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJWaWV3Q29tKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJWaWV3Q29tLm9wZW4oY2FsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBjb25zdCBlbnVtIEJ1aWxkVHlwZSB7XHJcbiAgICAvKiogXHU2RDRCXHU4QkQ1XHU3M0FGXHU1ODgzICovXHJcbiAgICB0ZXN0ID0gXCJ0ZXN0XCIsXHJcbiAgICAvKiogXHU3RUJGXHU0RTBBXHU3M0FGXHU1ODgzICovXHJcbiAgICBvbmxpbmUgPSBcIm9ubGluZVwiLFxyXG4gICAgLyoqIFx1NjcyQ1x1NTczMFx1NUYwMFx1NTNEMSAqL1xyXG4gICAgZGVidWcgPSBcImRlYnVnXCIsXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKEJVSUxEX1RZUEUpO1xyXG5cclxubGV0IGJhc2VVcmwgPSBcImh0dHA6Ly9nYW1lLmFoZDE2OC5jb206MzAwMFwiO1xyXG5zd2l0Y2ggKEJVSUxEX1RZUEUpIHtcclxuICAgIGNhc2UgQnVpbGRUeXBlLmRlYnVnOlxyXG4gICAgICAgIGJhc2VVcmwgPSBcIi8vMTkyLjE2OC4xMDEuNTA6MzAwMFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBCdWlsZFR5cGUub25saW5lOlxyXG4gICAgICAgIGJhc2VVcmwgPSBcImh0dHA6Ly9nYW1lLmFoZDE2OC5jb206MzEwMFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG59XHJcblxyXG4vKipcclxuICogXHU2RTM4XHU2MjBGXHU5MTREXHU3RjZFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKiogXHU5NEJCXHU3N0YzaWQgKi9cclxuICAgIGRpYW1vbmRJZDogMTAwMSxcclxuICAgIC8qKiBcdTkxRDFcdTVFMDFpZCAqL1xyXG4gICAgZ29sZElkOiAxMDAyLFxyXG4gICAgLyoqIFx1NzJEN1x1NzJEN1x1NkQ4OFx1NTMxNlx1OThERlx1NzI2OVx1OTVGNFx1OTY5NFx1NjVGNlx1OTVGNCBcdTc5RDIgKi9cclxuICAgIHBldERpZ2VzdEludGVydmFsVGltZTogNjAsXHJcbiAgICAvKiogXHU2RTM4XHU2MjBGXHU2NzJDXHU1NzMwXHU1MEE4XHU1QjU4a2V5ICovXHJcbiAgICBsb2NhbEtleTogXCJsb3ZlX0hEX2Zhcm1cIixcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTRGNTNcdTUyOUJcdTRFMEFcdTk2NTAgKi9cclxuICAgIHVzZXJWaXRhbGl0eUxpbWl0OiAxMCxcclxuICAgIC8qKiBcdTUzNEZcdThCQUVcdTU3MzBcdTU3NDAgKi9cclxuICAgIC8vIGJhc2VVcmw6IFwiLy80Ny4xMDguMTkyLjE4MTo4MDkyLyBmYXJtXCIsXHJcbiAgICBiYXNlVXJsOiBiYXNlVXJsLFxyXG4gICAgLy8gQlVJTERfVFlQRSA9PSBCdWlsZFR5cGUuZGVidWcgPyBcIi8vMTkyLjE2OC41MC44NzozMDAwXCIgOiBcImh0dHA6Ly9nYW1lLmFoZDE2OC5jb206MzAwMFwiLFxyXG4gICAgLy8gYmFzZVVybDogREVCVUcgPyBcIi8vMTkyLjE2OC4xMDEuNTA6MzAwMFwiIDogXCJodHRwOi8vZ2FtZS5haGQxNjguY29tOjMwMDBcIixcclxuICAgIC8vIGJhc2VVcmw6IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMDAwXCIsXHJcbiAgICAvLyB0b2RvIFx1OEZEOVx1OTFDQ1x1NzY4NElwXHU1M0VGXHU0RUU1XHU4QkJGXHU5NUVFXHU1M0VGXHU4MEZEXHU2NjJGXHU2NzA5XHU5NUVFXHU5ODk4XHU3Njg0XHJcbiAgICAvLyBiYXNlVXJsOiBcIi8vNDcuMTA4LjE5Mi4xODE6MzAwMFwiLFxyXG4gICAgLyoqIGFwaVx1OEJGN1x1NkM0Mlx1N0M3Qlx1NTc4QiBcdTlFRDhcdThCQTQgKi9cclxuICAgIEFwaVR5cGVEZWZhdWx0OiAxLFxyXG4gICAgLyoqIGFwaVx1OEJGN1x1NkM0Mlx1N0M3Qlx1NTc4QiBcdTc3MEJcdTVFN0ZcdTU0NEEgKi9cclxuICAgIEFwaVR5cGVBRDogMixcclxuICAgIC8qKiBcdTVFN0ZcdTU0NEFcdTY3NjFcdTRFRjYgXHU1MkEwXHU5MDFGXHU0RjdGXHU3NTI4XHU0RTg2Nlx1NkIyMSAqL1xyXG4gICAgQURTcGVlZFVwVGltZXM6IDYsXHJcbiAgICB2ZXJzaW9uOiBcIjEuMC4wXCIsXHJcbiAgICAvKipcdTZFMjBcdTkwNTMgKi9cclxuICAgIGNoYW5uZWw6IFwiXCIsXHJcbn07XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcInN0cmVhbS9jb25zdW1lcnNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRGVzcGF0Y2hEYXRhIHtcclxuICAgIHVyaTogQXBwRXZlbnRNYXA7XHJcbiAgICBkYXRhOiBvYmplY3Q7XHJcbiAgICB0aW1lc3RhbXA/OiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRGVzcGF0Y2hSZXR1cm5EYXRhIHtcclxuICAgIC8qKiBcdTUzNEZcdThCQUVcdTcyQjZcdTYwMDFcdTc4MDEgMCBcdTRFM0FcdTZCNjNcdTVFMzggXHU1MTc2XHU1QjgzXHU0RTNBXHU5NTE5XHU4QkVGXHU3ODAxICovXHJcbiAgICBjb2RlOiBudW1iZXI7XHJcbiAgICAvKiogXHU1MzRGXHU4QkFFdXJpICovXHJcbiAgICB1cmk6IEFwcEV2ZW50TWFwO1xyXG4gICAgLyoqIFx1OEZENFx1NTZERVx1NTE3N1x1NEY1M1x1NzY4NFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZGF0YTogb2JqZWN0O1xyXG4gICAgLyoqIFx1NjgwN1x1OEJDNiAqL1xyXG4gICAgdGltZXN0YW1wPzogc3RyaW5nIHwgbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBFdmVudE1hcDogTWFwPHN0cmluZyB8IG51bWJlciwgRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIHdlYiBhcHAgXHU0RUE0XHU0RTkyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb3JlIHtcclxuICAgIC8qKlx1ODJGOVx1Njc5Q1x1N0M3Qlx1NTc4QiAqL1xyXG4gICAgc3RhdGljIHR5cGVJb3M6IG51bWJlciA9IDE7XHJcbiAgICAvKipcdTVCODlcdTUzNTNcdTdDN0JcdTU3OEIgKi9cclxuICAgIHN0YXRpYyB0eXBlQW5kcm9pZDogbnVtYmVyID0gMjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI2N1x1ODg0Q2FwcFx1NEVBNFx1NEU5Mlx1NjVCOVx1NkNENVxyXG4gICAgICogQHBhcmFtIG5hbWUgXHU2NUI5XHU2Q0Q1XHU1NDBEXHU3OUYwXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcdTRGMjBcdTUxNjVcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJ1bkFwcEZ1bmN0aW9uKGRhdGE/OiBBcHBEZXNwYXRjaERhdGEpOiBQcm9taXNlPEFwcERlc3BhdGNoUmV0dXJuRGF0YSB8IG51bGw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgd2ViQXBwRnVuY3Rpb247XHJcbiAgICAgICAgICAgIGlmIChMYXlhLkJyb3dzZXIub25JT1MpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlYkFwcEZ1bmN0aW9uID0gdGhpcy5kZXRlY3Rpb25IYXNGdW5jdGlvbih0aGlzLnR5cGVJb3MsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHdlYkFwcEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gaWYgKG5hbWUgPT0gdGhpcy5jbG9zZVdlYlZpZXcpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgLy9cdTUxNzNcdTk1RUR3ZWJ2aWV3XHU3Mjc5XHU2QjhBXHU1OTA0XHU3NDA2XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgIHdpbmRvd1tcIndlYmtpdFwiXVtcIm1lc3NhZ2VIYW5kbGVyc1wiXVt0aGlzLmxlYXZlQ2hhbm5lbF1bXCJwb3N0TWVzc2FnZVwiXShcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzOiAxIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICk7IC8vXHU3Mjc5XHU2QjhBXHU1OTA0XHU3NDA2XHU5NzAwXHU4OTgxXHU1MTQ4XHU5MDAwXHU1MUZBXHU5ODkxXHU5MDUzXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIHdlYkFwcEZ1bmN0aW9uWydwb3N0TWVzc2FnZSddKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInJ1biA6XCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93W1wid2Via2l0XCJdW1wibWVzc2FnZUhhbmRsZXJzXCJdW25hbWVdW1wicG9zdE1lc3NhZ2VcIl0oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93W1wid2Via2l0XCJdW1wibWVzc2FnZUhhbmRsZXJzXCJdW25hbWVdW1wicG9zdE1lc3NhZ2VcIl0oXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHN0YXR1czogMSB9KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0KHdpbmRvd1tcIiRBcHBcIl0gJiYgd2luZG93W1wiJEFwcFwiXVtcIndlYlJlcXVlc3RcIl0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd1tcIiRBcHBcIl0gJiYgd2luZG93W1wiJEFwcFwiXVtcIndlYlJlcXVlc3RcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbXCIkQXBwXCJdW1wid2ViUmVxdWVzdFwiXShKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNlbmQgPT4gJHtkYXRhfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudE1hcC5zZXQoZGF0YS50aW1lc3RhbXAsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzb2x2ZShudWxsKTsgLy9cdTU5ODJcdTY3OUNcdTUxOTlcdThGRDlcdTRFMkFcdTRGMUFcdTYyMTBcdTUyOUZcdUZGMENcdTYyNDBcdTRFRTVcdTZCNjNcdTVFMzhcdTRFMERcdTkwMUFcdThGQzdcdTVFOTRcdTc1MjhcdUZGMENcdTRFMDBcdTRFOUJcdTUyOUZcdTgwRkRcdThGRDlcdTkxQ0NcdTRFMERcdThCQTlcdTc1MjhcdUZGMENcdTVDMzFcdTZDRThcdTkxQ0FcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHdlYkFwcEZ1bmN0aW9uID0gdGhpcy5kZXRlY3Rpb25IYXNGdW5jdGlvbih0aGlzLnR5cGVBbmRyb2lkLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICh3ZWJBcHBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHdpbmRvd1tcIndlYlJlcXVlc3RcIl1bbmFtZV0oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93W1wid2ViUmVxdWVzdFwiXVtuYW1lXSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NkQxXHU1NDJDYXBwIFx1NjI2N1x1ODg0Q2g1IFx1NjNBNVx1NTNFM1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbGlzdGVuQXBwRnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgLy9cdTc2RDFcdTU0MkNcdTYyNEJcdTY3M0FcdTUxNzNcdTk1RURcdTRFOEJcdTRFRjZcdTU0Q0RcdTVFOTRcclxuXHJcbiAgICAgICAgd2luZG93W1wiYXBwUmVzcG9uc2VcIl0gPSAoZDogQXBwRGVzcGF0Y2hSZXR1cm5EYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IEpTT04uc3RyaW5naWZ5KGQpLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoZD8udGltZXN0YW1wKTtcclxuICAgICAgICAgICAgaWYgKEV2ZW50TWFwLmhhcyhkPy50aW1lc3RhbXApKSB7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1hcC5nZXQoZC50aW1lc3RhbXApKGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvQ29udHJvbCB7XHJcbiAgICBwbGF5U291bmQoXHJcbiAgICAgICAgdXJsOiBzdHJpbmcsXHJcbiAgICAgICAgbG9vcHM/OiBudW1iZXIsXHJcbiAgICAgICAgY29tcGxldGU/OiBIYW5kbGVyLFxyXG4gICAgICAgIHNvdW5kQ2xhc3M/OiBuZXcgKCkgPT4gYW55LFxyXG4gICAgICAgIHN0YXJ0VGltZT86IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKHVybCwgbG9vcHMsIGNvbXBsZXRlLCBzb3VuZENsYXNzLCBzdGFydFRpbWUpO1xyXG4gICAgfVxyXG4gICAgcGxheU11c2ljKHVybDogc3RyaW5nLCBsb29wcyA9IDAsIGNvbXBsZXRlPzogSGFuZGxlciwgc3RhcnRUaW1lPzogbnVtYmVyKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKHVybCwgbG9vcHMsIGNvbXBsZXRlLCBzdGFydFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTYyNDBcdTY3MDlcdTk3RjNcdTY1NDhcdUZGMDhcdTRFMERcdTUzMDVcdTYyRUNcdTgwQ0NcdTY2NkZcdTk3RjNcdTRFNTBcdUZGMDlcdTY2MkZcdTU0MjZcdTk3NTlcdTk3RjNcdTMwMDIgKi9cclxuICAgIHNldCBzb3VuZE11dGVkKHN0YXRlKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc291bmRNdXRlZCA9IHN0YXRlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNvdW5kTXV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIExheWEuU291bmRNYW5hZ2VyLnNvdW5kTXV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1ODBDQ1x1NjY2Rlx1OTdGM1x1NEU1MFx1RkYwOFx1NEUwRFx1NTMwNVx1NjJFQ1x1OTdGM1x1NjU0OFx1RkYwOVx1NjYyRlx1NTQyNlx1OTc1OVx1OTdGMyAqL1xyXG4gICAgc2V0IG11c2ljTXV0ZWQoc3RhdGUpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5tdXNpY011dGVkID0gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBnZXQgbXVzaWNNdXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gTGF5YS5Tb3VuZE1hbmFnZXIubXVzaWNNdXRlZDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IEF1ZGlvQ29udHJvbCBmcm9tIFwiLi9BdWRpb0NvbnRyb2xcIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50T24sIEZpbmRCeU5hbWUgfSBmcm9tIFwiLi9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4vSW5zdGFuY2VcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9WaWV3TWFuYWdlclwiO1xyXG5cclxuY29uc3QgQ29yZSA9IHtcclxuICAgIC8qKiBcdTVCRjlcdThDNjFcdTVDNUVcdTYwMjdcdTdFRDFcdTVCOUFcdTUzRUZcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTYgKi9cclxuICAgIG9ic2VydmFibGVQcm9wZXJ0eTogT2JzZXJ2YWJsZVByb3BlcnR5LFxyXG4gICAgLyoqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OCAqL1xyXG4gICAgdmlldzogVmlld01hbmFnZXIuaW5zdCxcclxuICAgIC8qKiBcdTVGMTVcdTY0Q0VcdTgxMUFcdTY3MkNcdTdFQzRcdTRFRjYgKi9cclxuICAgIGdhbWVTY3JpcHQ6IEdhbWVTY3JpcHQsXHJcbiAgICAvKiogXHU1MzU1XHU0RjhCXHU4OEM1XHU5OTcwXHU1NjY4ICovXHJcbiAgICBpbnN0YW5jZTogSW5zdGFuY2UsXHJcbiAgICAvKiogXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbiAgICBldmVudE9uOiBFdmVudE9uLFxyXG4gICAgLyoqIHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWVcdTc2ODRcdTc3MDFcdTRFOEJcdTUxOTlcdTZDRDUgXHU1M0VBXHU4MEZEXHU2N0U1XHU2MjdFXHU0RTBCXHU0RTAwXHU3RUE3XHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG4gICAgZmluZEJ5TmFtZTogRmluZEJ5TmFtZSxcclxuICAgIC8qKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjYgKi9cclxuICAgIGV2ZW50R2xvYmFsOiBFdmVudEdsb2JhbCxcclxuICAgIC8qKlx1OTdGM1x1OTg5MSAqL1xyXG4gICAgYXVkaW86IG5ldyBBdWRpb0NvbnRyb2woKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcmU7XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0VmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dmVyc2lvbiwgdGlwczpcIlx1NzNBOVx1NUJCNlx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdmVyc2lvbjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y2hhbm5lbCwgdGlwczpcIlx1NkUyMFx1OTA1M1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY2hhbm5lbDogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy52ZXJzaW9uLnRleHQgPSBgXHU3MjQ4XHU2NzJDXHU1M0Y3XHVGRjFBViR7Q29uZmlnR2FtZS52ZXJzaW9ufWA7XHJcbiAgICAgICAgdGhpcy5jaGFubmVsLnRleHQgPSBgXHU2RTIwXHU5MDUzXHU1M0Y3XHVGRjFBJHtDb25maWdHYW1lLmNoYW5uZWx9YDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFib3V0Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVzZXJfYWdyZWVtZW50XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1NzUyOFx1NjIzN1x1NTM0Rlx1OEJBRVxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAuc2VydmljZUFncmVlbWVudCwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByaXZhY3lcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5NjkwXHU3OUMxXHU2NTNGXHU3QjU2XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5wcml2YWN5QWdyZWVtZW50LCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVmYXVsdFJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRlZmF1bHRSZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZG93blJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRvd25SZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXNTY2FsZSwgdGlwczpcIlx1NjYyRlx1NTQyNlx1N0YyOVx1NjUzRVwiLHR5cGU6Q2hlY2t9Ki9cclxuICAgIHByaXZhdGUgaXNTY2FsZSA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNjYWxlVmFsLCB0aXBzOlwiXHU3RjI5XHU2NTNFXHU3Njg0XHU1MDNDXCIsdHlwZTpOdW1iZXIsIGRlZmF1bHQ6MC45fSovXHJcbiAgICBwcml2YXRlIHNjYWxlVmFsOiBudW1iZXIgPSAwLjk7XHJcblxyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgb2xkU2NhbGVZOiBudW1iZXI7XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gKHRoaXMub3duZXIgYXMgTGF5YS5Cb3gpLnNldF9hbmNob3JYKDAuNSk7XHJcbiAgICAgICAgLy8gKHRoaXMub3duZXIgYXMgTGF5YS5Cb3gpLnNldF9hbmNob3JZKDAuNSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc1NjYWxlKTtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikubW91c2VFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWCA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVYKCk7XHJcbiAgICAgICAgdGhpcy5vbGRTY2FsZVkgPSAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikuZ2V0X3NjYWxlWSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VEb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRvd25SZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKHRoaXMuc2NhbGVWYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBbmkoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1NjYWxlKSByZXR1cm47XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5vd25lcixcclxuICAgICAgICAgICAgeyBzY2FsZVg6IHNjYWxlICogdGhpcy5vbGRTY2FsZVgsIHNjYWxlWTogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWSB9LFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2tpbihza2luOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXNraW4pIHJldHVybjtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkltYWdlKS5za2luID0gc2tpbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7fVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcblxyXG5jb25zdCBMb2NhbERhdGEgPSB7XHJcbiAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgIHRva2VuOiBudWxsLFxyXG5cclxuICAgIC8qKiB0cnVlIFx1NEUzQVx1NTE3M1x1OTVFRCBmYWxzZSBcdTRFM0FcdTYyNTNcdTVGMDAgKi9cclxuICAgIHNvdW5kOiBmYWxzZSxcclxuICAgIC8qKiB0cnVlIFx1NEUzQVx1NTE3M1x1OTVFRCBmYWxzZSBcdTRFM0FcdTYyNTNcdTVGMDAgKi9cclxuICAgIG11c2ljOiBmYWxzZSxcclxuICAgIC8qKiB2ZXJzaW9uICovXHJcbiAgICB2ZXJzaW9uOiBcIjAuMC4wXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogXHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0IGxvY2FsRGF0YSBcdTU3MjhcdThGRDlcdTRFMkFcdTkxQ0NcdTk3NjJcdTVCOUFcdTRFNDlcdTU5N0RcclxuICovXHJcbmNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBsb2NhbERhdGEgPSBMb2NhbERhdGE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSkgfHwgTG9jYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgzQjdcdTUzRDZcdTY3MkNcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGdldEpTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdThCQkVcdTdGNkVcdTY3MkNcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIHNldEpTT048a2V5IGV4dGVuZHMga2V5b2YgdHlwZW9mIExvY2FsRGF0YT4oa2V5OiBrZXksIGRhdGE6IHR5cGVvZiBMb2NhbERhdGFba2V5XSkge1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhW2tleV0gPSBkYXRhO1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSwgdGhpcy5sb2NhbERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSwgeyB2ZXJzaW9uOiB0aGlzLmxvY2FsRGF0YS52ZXJzaW9uIH0pO1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhID0ge1xyXG4gICAgICAgICAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgICAgICAgICAgdG9rZW46IG51bGwsXHJcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBtdXNpYzogdHJ1ZSxcclxuICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5sb2NhbERhdGEudmVyc2lvbixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9jYWxTdG9yYWdlU2VydmljZSgpO1xyXG4iLCAiLyoqIFx1NjI0MFx1NjcwOVx1ODg2OCAqL1xuICAgICAgICBleHBvcnQgY29uc3QgVGFibGUgPSB7XCJ0YXNrXCI6W3tcImlkXCI6MTAwMSxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxLFwidGl0bGVcIjpcIlx1N0I3RVx1NTIzMFx1OTg4Nlx1OTRCQlx1NzdGM1wiLFwiZGVzY1wiOlwiXHU3NzBCXHU4OUM2XHU5ODkxXHU3QjdFXHU1MjMwXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDAyLFwicmV3YXJkXCI6XCIxMDAxOjEwMFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdTgzRENcdTU3MzBcdTY1QkRcdTgwQTUxMFx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4M0RDXHU1NzMwXHU1MkEwXHU5MDFGMTBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDMsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU4M0RDXHU1NzMwXHU2NTM2XHU4M0I3MTBcdTZCMjFcIixcImRlc2NcIjpcIlx1ODNEQ1x1NTczMFx1NjUzNlx1ODNCNzEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA0LFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjUsXCJ0aXRsZVwiOlwiXHU4QkJGXHU1M0NCNVx1NkIyMVwiLFwiZGVzY1wiOlwiXHU1MDc3XHU4M0RDNVx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNSxcInJld2FyZFwiOlwiMTAwMToyMFwiLFwidGltZXNcIjozLFwidGl0bGVcIjpcIlx1NTU4Mlx1NTE3Qlx1NzJEN1x1NzJENzNcdTZCMjFcIixcImRlc2NcIjpcIlx1NTU4Mlx1NTE3Qlx1NzJEN1x1NzJENzNcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDYsXCJyZXdhcmRcIjpcIjEwMDE6MjBcIixcInRpbWVzXCI6NSxcInRpdGxlXCI6XCJcdThEMkRcdTRFNzBcdTk5NzJcdTY1OTk1XHU2QjIxXCIsXCJkZXNjXCI6XCJcdThEMkRcdTRFNzBcdTk5NzJcdTY1OTk1XHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA3LFwicmV3YXJkXCI6XCIxMDAxOjIwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1OEQyRFx1NEU3MFx1NzlDRFx1NUI1MDEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdThEMkRcdTRFNzBcdTc5Q0RcdTVCNTAxMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwOCxcInJld2FyZFwiOlwiMTAwMjo1MDBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTUxRkFcdTU1MkVcdTRGNUNcdTcyNjkzXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTUxRkFcdTU1MkVcdTRGNUNcdTcyNjkzXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA5LFwicmV3YXJkXCI6XCIxMDAxOjEwMFwiLFwidGltZXNcIjo1LFwidGl0bGVcIjpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlwiLFwiZGVzY1wiOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCNVx1NEUyQVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMCxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxLFwidGl0bGVcIjpcIlx1NTIwNlx1NEVBQlx1NUY5N1x1NTk3RFx1NzkzQ1wiLFwiZGVzY1wiOlwiXHU1MjA2XHU0RUFCXHU0RTAwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDExLFwicmV3YXJkXCI6XCIxMDAyOjUwMFwiLFwidGltZXNcIjozLFwidGl0bGVcIjpcIlx1NjMwN1x1NUI5QVx1NzlDRFx1NjkwRFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU2OTBEXHU2MzA3XHU1QjlBXHU3OUNEXHU1QjUwXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDEyLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MVx1OTg4Nlx1Nzk4Rlx1NTIyOVwiLFwiZGVzY1wiOlwiXHU3NzBCXHU4OUM2XHU5ODkxMTBcdTZCMjFcIixcImljb25cIjpudWxsfV0sXCJzaWduSW5cIjpbe1wiaWRcIjoxMDAxLFwiZGF5c1wiOjcsXCJyZXdhcmRcIjpcIjEwMDE6MjAwMDBcIn0se1wiaWRcIjoxMDAyLFwiZGF5c1wiOjEwLFwicmV3YXJkXCI6XCIxMDAxOjMwMDAwXCJ9LHtcImlkXCI6MTAwMyxcImRheXNcIjoxNSxcInJld2FyZFwiOlwiMTAwMTo1MDAwMFwifSx7XCJpZFwiOjEwMDQsXCJkYXlzXCI6MjAsXCJyZXdhcmRcIjpcIjEwMDE6ODAwMDBcIn0se1wiaWRcIjoxMDA1LFwiZGF5c1wiOjMwLFwicmV3YXJkXCI6XCIxMDAxOjEyMDAwMFwifSx7XCJpZFwiOjEwMDYsXCJkYXlzXCI6NTAsXCJyZXdhcmRcIjpcIjEwMDE6MTgwMDAwXCJ9LHtcImlkXCI6MTAwNyxcImRheXNcIjo4MCxcInJld2FyZFwiOlwiMTAwMTozMDAwMDBcIn0se1wiaWRcIjoxMDA4LFwiZGF5c1wiOjEwMCxcInJld2FyZFwiOlwiMTAwMTozNTAwMDBcIn0se1wiaWRcIjoxMDA5LFwiZGF5c1wiOjE1MCxcInJld2FyZFwiOlwiMTAwMTo1MDAwMDBcIn1dLFwicGxhbnRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU2QzM0XHU3QTNCXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDJfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwXCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIxODBcIixcInVubG9ja19jb3N0XCI6bnVsbCxcInVubG9ja19yZXdhcmRcIjpudWxsLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1NTkyN1x1OEM0NlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA0X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MFwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMTgwXCIsXCJ1bmxvY2tfY29zdFwiOm51bGwsXCJ1bmxvY2tfcmV3YXJkXCI6bnVsbCxcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTU5MjdcdTg0OUNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxMl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTBcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjI0MFwiLFwidW5sb2NrX2Nvc3RcIjpudWxsLFwidW5sb2NrX3Jld2FyZFwiOm51bGwsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU1MzA1XHU1RkMzXHU4M0RDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDZfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NzVcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjc1XCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIzMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTU3MUZcdThDNDZcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwN19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo3NVwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NzVcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjMwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNixcIm5hbWVcIjpcIlx1ODQxRFx1NTM1Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA1X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjc1XCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo3NVwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiNDgwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA3LFwibmFtZVwiOlwiXHU1QzBGXHU5RUE2XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDFfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MTIwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjoxMjBcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjQ4MFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwOCxcIm5hbWVcIjpcIlx1OEZBM1x1NjkxMlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDEwX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjEyMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MTIwXCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCI2MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjIwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDksXCJuYW1lXCI6XCJcdTlFQzRcdTc0RENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxMV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoyMDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjIwMFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiNzIwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjozMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDEwLFwibmFtZVwiOlwiXHU4MzA0XHU1QjUwXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTNfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MjAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjoyMDBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjcyMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MzUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMSxcIm5hbWVcIjpcIlx1ODBFMVx1ODQxRFx1NTM1Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA4X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjM1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MzUwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI5MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjQ1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTIsXCJuYW1lXCI6XCJcdTUzNTdcdTc0RENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxNF9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjozNTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjM1MFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiOTAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo1MDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDEzLFwibmFtZVwiOlwiXHU3Mzg5XHU3QzczXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDNfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MDBcIixcImhhcnZlc3RcIjpcIjN+NVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjU1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTQsXCJuYW1lXCI6XCJcdTc1MThcdTg1MTdcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxNV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwMFwiLFwiaGFydmVzdFwiOlwiM341XCIsXCJtYXR1cmVfdGltZVwiOlwiMTIwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NjAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxNSxcIm5hbWVcIjpcIlx1NzU2QVx1ODMwNFwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA5X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjVcIixcIm1hdHVyZV90aW1lXCI6XCIxMjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo2NTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn1dLFwicGV0XCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1NjVGQVx1OEQyMlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwMV9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTAsXCJjb3N0XCI6XCIxMDAyOjMwMDBcIixcImRlc2NcIjpcIlx1NzIzMVx1NUI4M1x1NUMzMVx1NEU3MFx1NUI4M35cdTVCODNcdTVDMzFcdTY2MkZcdTY3MDlcdTcwQjlcdTYxRDJ+XCIsXCJzZW5zaXRpdmVcIjozNCxcImFiaWxpdHlcIjo0Mn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU2QzY0XHU1NzA2XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA3X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNSxcImNvc3RcIjpcIjEwMDI6NDAwMFwiLFwiZGVzY1wiOlwiXHU5ODlDXHU1MDNDXHUzMDAxXHU2NjdBXHU1NTQ2XHU1M0NDXHU1M0NDXHU1NzI4XHU3RUJGXCIsXCJzZW5zaXRpdmVcIjo0MCxcImFiaWxpdHlcIjo0OH0se1wiaWRcIjoxMDAzLFwibmFtZVwiOlwiXHU4MDg5XHU1RTcyXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA5X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNixcImNvc3RcIjpcIjEwMDI6NDUwMFwiLFwiZGVzY1wiOlwiXHU2NzAwXHU1RkUwXHU4QkRBXHU3Njg0XHU0RjE5XHU0RjM0XCIsXCJzZW5zaXRpdmVcIjo0NSxcImFiaWxpdHlcIjo1NX0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU0RThDXHU1NEM4XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAyX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNixcImNvc3RcIjpcIjEwMDI6NTAwMFwiLFwiZGVzY1wiOlwiXHU3RUREXHU0RTBEXHU2MkM2XHU1QkI2XHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo0OCxcImFiaWxpdHlcIjo2MH0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU1OTI3XHU3NzNDXHU3NzVCXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA1X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNyxcImNvc3RcIjpcIjEwMDI6NzAwMFwiLFwiZGVzY1wiOlwiXHU2RDNCXHU1OTdEXHU1NDAzXHU3Njg0XHU1QzExXCIsXCJzZW5zaXRpdmVcIjo1MCxcImFiaWxpdHlcIjo3NX0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU1QzBGXHU1QzNFXHU1REY0XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA0X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6NzUwMFwiLFwiZGVzY1wiOlwiXHU2QjY2XHU1MjlCXHU1OTI5XHU4RDRCXHU1REYyXHU3MEI5XHU2RUUxflx1NjJGRlx1NjM0Rlx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6NjAsXCJhYmlsaXR5XCI6ODB9LHtcImlkXCI6MTAwNyxcIm5hbWVcIjpcIlx1NzQwM1x1NzQwM1wiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwOF9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTgsXCJjb3N0XCI6XCIxMDAyOjgwMDBcIixcImRlc2NcIjpcIlx1NUMzMVx1NEUyNFx1NEUyQVx1NUI1N1x1RkYwQ1x1NTQyQ1x1OEJERFx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6NjksXCJhYmlsaXR5XCI6ODV9LHtcImlkXCI6MTAwOCxcIm5hbWVcIjpcIlx1NUMwRlx1NzY3RFwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwM19kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTgsXCJjb3N0XCI6XCIxMDAyOjgwMDBcIixcImRlc2NcIjpcIlx1NzcwQlx1NUJCNlx1MzAwMVx1NzcwQlx1ODNEQ1x1MzAwMVx1NzcwQlx1NUI2OVx1NUI1MFwiLFwic2Vuc2l0aXZlXCI6NzYsXCJhYmlsaXR5XCI6ODh9LHtcImlkXCI6MTAwOSxcIm5hbWVcIjpcIlx1NzBCOVx1NzBCOVwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNl9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTksXCJjb3N0XCI6XCIxMDAyOjEwMDAwXCIsXCJkZXNjXCI6XCJcdTRGNjBcdTUwM0NcdTVGOTdcdTYyRTVcdTY3MDlcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjg1LFwiYWJpbGl0eVwiOjkzfSx7XCJpZFwiOjEwMTAsXCJuYW1lXCI6XCJcdTk1RjdcdTU4QTlcIixcImljb25cIjpcInBldF9mZWVkLzEwMTBfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjMwLFwiY29zdFwiOlwiMTAwMjoxNTAwMFwiLFwiZGVzY1wiOlwiXHU5NTdGXHU1Rjk3XHU1QzMxXHU1Rjg4XHU1MUY2XHVGRjBDXHU2MjkzXHU1QzBGXHU1MDc3XHU2NkY0XHU1MUY2XCIsXCJzZW5zaXRpdmVcIjo5MCxcImFiaWxpdHlcIjo5OX1dLFwib3JkZXJcIjpbe1wiaWRcIjoxLFwiY29tbWlzc2lvblwiOlwiMS4xMlwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjJcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MixcImNvbW1pc3Npb25cIjpcIjAuODdcIixcImNvbmRpdGlvblwiOlwiMTAwMToxLDEwMDI6MlwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjozLFwiY29tbWlzc2lvblwiOlwiMC42OVwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjEsMTAwMzoyLDEwMDI6M1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo0LFwiY29tbWlzc2lvblwiOlwiMC42MVwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjQsMTAwMzozLDEwMDQ6MywxMDAxOjRcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NSxcImNvbW1pc3Npb25cIjpcIjAuNjFcIixcImNvbmRpdGlvblwiOlwiMTAwNDo2LDEwMDI6NSwxMDA1OjQsMTAwMTo1XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjYsXCJjb21taXNzaW9uXCI6XCIwLjY4XCIsXCJjb25kaXRpb25cIjpcIjEwMDM6MTAsMTAwNDo1LDEwMDU6MywxMDA2OjNcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NyxcImNvbW1pc3Npb25cIjpcIjAuNDNcIixcImNvbmRpdGlvblwiOlwiMTAwNzo0LDEwMDM6NSwxMDA0OjcsMTAwNjoxMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo4LFwiY29tbWlzc2lvblwiOlwiMC41NlwiLFwiY29uZGl0aW9uXCI6XCIxMDA4OjEzLDEwMDc6MywxMDA1OjUsMTAwMjo1XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjksXCJjb21taXNzaW9uXCI6XCIwLjM5XCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MiwxMDA5OjEwLDEwMDc6OCwxMDAzOjhcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MTAsXCJjb21taXNzaW9uXCI6XCIwLjIyXCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MTAsMTAxMDo1LDEwMDg6MTAsMTAwOTo2XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6ODAwXCJ9LHtcImlkXCI6MTEsXCJjb21taXNzaW9uXCI6XCIwLjc2XCIsXCJjb25kaXRpb25cIjpcIjEwMDk6NSwxMDA0OjEwLDEwMDE6OSwxMDAyOjEwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjEyLFwiY29tbWlzc2lvblwiOlwiMC40M1wiLFwiY29uZGl0aW9uXCI6XCIxMDA3OjYsMTAwMzoxMSwxMDExOjYsMTAwNToxMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoxMyxcImNvbW1pc3Npb25cIjpcIjAuMTdcIixcImNvbmRpdGlvblwiOlwiMTAxMDo1LDEwMDU6MTMsMTAwMTo4LDEwMTI6OFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoxNCxcImNvbW1pc3Npb25cIjpcIjAuNTVcIixcImNvbmRpdGlvblwiOlwiMTAxMzoxMCwxMDA4OjgsMTAwNjo2LDEwMDE6MTBcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MTUsXCJjb21taXNzaW9uXCI6XCIwLjQ4XCIsXCJjb25kaXRpb25cIjpcIjEwMDI6MTAsMTAwNToxMCwxMDExOjEyLDEwMDE6MTBcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MTYsXCJjb21taXNzaW9uXCI6MC4yOSxcImNvbmRpdGlvblwiOlwiMTAwODoxMSwxMDE0OjQsMTAwNjo4LDEwMDU6MTdcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MTcsXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAwNjoxNCwxMDA3OjYsMTAxNToxMiwxMDAxOjE0XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjE4LFwiY29tbWlzc2lvblwiOjAuNDgsXCJjb25kaXRpb25cIjpcIjEwMDg6MTQsMTAxMToxMiwxMDA5OjE1LDEwMDI6NVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoxOSxcImNvbW1pc3Npb25cIjowLjc1LFwiY29uZGl0aW9uXCI6XCIxMDEzOjEwLDEwMDM6MjAsMTAxNDoxMSwxMDAxOjdcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MjAsXCJjb21taXNzaW9uXCI6MC42NyxcImNvbmRpdGlvblwiOlwiMTAwMzoxMCwxMDExOjE3LDEwMDI6MTQsMTAwNToxMlwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjkwMFwifSx7XCJpZFwiOjIxLFwiY29tbWlzc2lvblwiOjAuNjQsXCJjb25kaXRpb25cIjpcIjEwMTA6MTAsMTAwMzoxNCwxMDA1OjE2LDEwMDc6MTVcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MjIsXCJjb21taXNzaW9uXCI6XCIwLjRcIixcImNvbmRpdGlvblwiOlwiMTAxNToxOSwxMDA3OjEyLDEwMTE6NSwxMDA0OjE3XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjIzLFwiY29tbWlzc2lvblwiOlwiMC40XCIsXCJjb25kaXRpb25cIjpcIjEwMDM6MTksMTAxNDoyMiwxMDE1OjE2LDEwMDg6MTRcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MjQsXCJjb21taXNzaW9uXCI6MC43NyxcImNvbmRpdGlvblwiOlwiMTAxNDoxMywxMDAxOjE3LDEwMDg6MTgsMTAwNDoxNVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoyNSxcImNvbW1pc3Npb25cIjpcIjAuMzlcIixcImNvbmRpdGlvblwiOlwiMTAxMjoyMywxMDExOjE5LDEwMTA6MTUsMTAxNToyMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoyNixcImNvbW1pc3Npb25cIjowLjAzLFwiY29uZGl0aW9uXCI6XCIxMDAyOjIxLDEwMTE6MTIsMTAxMjoyMiwxMDAzOjE5XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjI3LFwiY29tbWlzc2lvblwiOjAuNDksXCJjb25kaXRpb25cIjpcIjEwMDc6MTYsMTAxNDoxNiwxMDA2OjIwLDEwMTE6MTdcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MjgsXCJjb21taXNzaW9uXCI6MC41MyxcImNvbmRpdGlvblwiOlwiMTAxNDoxNywxMDA3OjEyLDEwMTE6MTcsMTAwMzoxN1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjoyOSxcImNvbW1pc3Npb25cIjowLjc3LFwiY29uZGl0aW9uXCI6XCIxMDEyOjEwLDEwMDU6MTYsMTAxMDoxNCwxMDE1OjE4XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjMwLFwiY29tbWlzc2lvblwiOlwiMC4zNFwiLFwiY29uZGl0aW9uXCI6XCIxMDExOjE3LDEwMTQ6MTksMTAwNjoxNCwxMDA0OjMwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTAwMFwifSx7XCJpZFwiOjMxLFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMDc6MTgsMTAxMDoxNCwxMDEzOjE5LDEwMDY6MTFcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MzIsXCJjb21taXNzaW9uXCI6MC40NixcImNvbmRpdGlvblwiOlwiMTAxMzoxOSwxMDA1OjIyLDEwMTI6MTIsMTAwODoyMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjozMyxcImNvbW1pc3Npb25cIjpcIjAuNDRcIixcImNvbmRpdGlvblwiOlwiMTAxMjoxNiwxMDEzOjIwLDEwMDI6MjMsMTAwOToxNlwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjozNCxcImNvbW1pc3Npb25cIjpcIjAuNDJcIixcImNvbmRpdGlvblwiOlwiMTAwOToxOSwxMDEwOjEyLDEwMTE6MTQsMTAxMjoyMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjozNSxcImNvbW1pc3Npb25cIjpcIjAuMzNcIixcImNvbmRpdGlvblwiOlwiMTAwMToxOCwxMDA0OjE5LDEwMTM6MTYsMTAwMzoyMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjozNixcImNvbW1pc3Npb25cIjowLjIxLFwiY29uZGl0aW9uXCI6XCIxMDAzOjExLDEwMDg6MTcsMTAxNDoxNywxMDA3OjE5XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjM3LFwiY29tbWlzc2lvblwiOjAuNDQsXCJjb25kaXRpb25cIjpcIjEwMTI6MTksMTAxMDoyMCwxMDAyOjE0LDEwMTE6MTFcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6MzgsXCJjb21taXNzaW9uXCI6MC4yMixcImNvbmRpdGlvblwiOlwiMTAxNDoxMywxMDA0OjE5LDEwMDI6MTEsMTAxNToxOFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjozOSxcImNvbW1pc3Npb25cIjowLjM2LFwiY29uZGl0aW9uXCI6XCIxMDA3OjE4LDEwMTI6MTMsMTAwNDoxNiwxMDAyOjI2XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjQwLFwiY29tbWlzc2lvblwiOjAuMjgsXCJjb25kaXRpb25cIjpcIjEwMDQ6MzAsMTAwNToxMCwxMDA4OjE4LDEwMTE6MTZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDAwXCJ9LHtcImlkXCI6NDEsXCJjb21taXNzaW9uXCI6XCIwLjQ4XCIsXCJjb25kaXRpb25cIjpcIjEwMTA6MTgsMTAwOToxOCwxMDA4OjE3LDEwMTE6MjZcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NDIsXCJjb21taXNzaW9uXCI6MC40MyxcImNvbmRpdGlvblwiOlwiMTAwOToyMSwxMDA1OjE4LDEwMDc6MjAsMTAwMjoyM1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo0MyxcImNvbW1pc3Npb25cIjpcIjAuMjRcIixcImNvbmRpdGlvblwiOlwiMTAwNjozMCwxMDA0OjE0LDEwMTQ6MTEsMTAwODoxNVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo0NCxcImNvbW1pc3Npb25cIjowLjYyLFwiY29uZGl0aW9uXCI6XCIxMDA5OjE1LDEwMDM6MjgsMTAwMjozNCwxMDA3OjE5XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjQ1LFwiY29tbWlzc2lvblwiOlwiMC40MVwiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE1LDEwMTA6MjMsMTAwNzoxMywxMDExOjEzXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjQ2LFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMDM6MjIsMTAwNzoyMywxMDEwOjE2LDEwMDI6MjRcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NDcsXCJjb21taXNzaW9uXCI6MC40OSxcImNvbmRpdGlvblwiOlwiMTAxMDoyNCwxMDE1OjIwLDEwMDM6MjUsMTAxNDoxNlwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo0OCxcImNvbW1pc3Npb25cIjpcIjAuMjZcIixcImNvbmRpdGlvblwiOlwiMTAxMzoxNywxMDA3OjI0LDEwMDg6MzcsMTAwMTozMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo0OSxcImNvbW1pc3Npb25cIjowLjQ4LFwiY29uZGl0aW9uXCI6XCIxMDAyOjI2LDEwMDQ6MjEsMTAwOToyMiwxMDA2OjIwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjUwLFwiY29tbWlzc2lvblwiOlwiMC4yNVwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjI3LDEwMTI6MTksMTAwODoyMCwxMDE1OjExXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTEwMFwifSx7XCJpZFwiOjUxLFwiY29tbWlzc2lvblwiOlwiMC4zNFwiLFwiY29uZGl0aW9uXCI6XCIxMDExOjE4LDEwMDQ6MTksMTAwMjoyNSwxMDAzOjExXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjUyLFwiY29tbWlzc2lvblwiOjAuNDMsXCJjb25kaXRpb25cIjpcIjEwMTU6MTUsMTAxMzoyMCwxMDAxOjI1LDEwMDQ6MjZcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NTMsXCJjb21taXNzaW9uXCI6XCIwLjI4XCIsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTQsMTAxMjoxMiwxMDEwOjIwLDEwMTU6MThcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NTQsXCJjb21taXNzaW9uXCI6MC40NSxcImNvbmRpdGlvblwiOlwiMTAwNToyMiwxMDAyOjMzLDEwMDk6MTYsMTAxNToxN1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo1NSxcImNvbW1pc3Npb25cIjpcIjAuNTZcIixcImNvbmRpdGlvblwiOlwiMTAwMToyMywxMDE0OjE5LDEwMDU6MTcsMTAxMDoxNVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo1NixcImNvbW1pc3Npb25cIjpcIjAuMzVcIixcImNvbmRpdGlvblwiOlwiMTAwNjoyNywxMDA1OjI5LDEwMDk6MTcsMTAwMzoxOFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo1NyxcImNvbW1pc3Npb25cIjowLjY3LFwiY29uZGl0aW9uXCI6XCIxMDA3OjIxLDEwMDg6MTcsMTAwMjoxNiwxMDA5OjI1XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjU4LFwiY29tbWlzc2lvblwiOjAuMzIsXCJjb25kaXRpb25cIjpcIjEwMDY6MjAsMTAwODoyNSwxMDA1OjI0LDEwMDc6MTlcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NTksXCJjb21taXNzaW9uXCI6MC43OSxcImNvbmRpdGlvblwiOlwiMTAxMjoyNSwxMDA5OjMwLDEwMTM6MTYsMTAwODoxNVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo2MCxcImNvbW1pc3Npb25cIjowLjY5LFwiY29uZGl0aW9uXCI6XCIxMDE1OjI2LDEwMTI6MjcsMTAxMDozMSwxMDAxOjIzXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTEwMFwifSx7XCJpZFwiOjYxLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMTU6MTIsMTAwNjoyNSwxMDExOjE1LDEwMDI6MTdcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NjIsXCJjb21taXNzaW9uXCI6MC40NCxcImNvbmRpdGlvblwiOlwiMTAxNToyMSwxMDA3OjE1LDEwMTE6MTgsMTAwNjoyNlwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo2MyxcImNvbW1pc3Npb25cIjowLjAxLFwiY29uZGl0aW9uXCI6XCIxMDEwOjE4LDEwMDU6MTYsMTAwOToxMywxMDAzOjI3XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjY0LFwiY29tbWlzc2lvblwiOjAuMjcsXCJjb25kaXRpb25cIjpcIjEwMDc6MTcsMTAwNjoxMCwxMDA1OjI5LDEwMDQ6MjVcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NjUsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDAzOjMwLDEwMTQ6MjAsMTAwNToxNVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo2NixcImNvbW1pc3Npb25cIjowLjczLFwiY29uZGl0aW9uXCI6XCIxMDA0OjI1LDEwMDg6MjUsMTAwMjozNCwxMDEyOjE0XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjY3LFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDE6MzYsMTAxMjoyMCwxMDExOjIwLDEwMDM6MjBcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NjgsXCJjb21taXNzaW9uXCI6MC42OSxcImNvbmRpdGlvblwiOlwiMTAxMzoyNCwxMDA4OjIzLDEwMDY6MTYsMTAwNzoxN1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo2OSxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDE1OjMwLDEwMDQ6MjksMTAxMzoxNywxMDA5OjEwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjcwLFwiY29tbWlzc2lvblwiOjAuNzEsXCJjb25kaXRpb25cIjpcIjEwMTA6MjMsMTAwNDozMSwxMDExOjE3LDEwMTI6MTFcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMjAwXCJ9LHtcImlkXCI6NzEsXCJjb21taXNzaW9uXCI6MC4yOSxcImNvbmRpdGlvblwiOlwiMTAwODoxMSwxMDAyOjI2LDEwMDM6MjgsMTAxNToxM1wiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo3MixcImNvbW1pc3Npb25cIjowLjMxLFwiY29uZGl0aW9uXCI6XCIxMDA1OjI1LDEwMDI6MzgsMTAxMjoxOSwxMDEwOjE0XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjczLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMTI6MzQsMTAwNjoyMiwxMDAzOjI3LDEwMDQ6MjBcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NzQsXCJjb21taXNzaW9uXCI6MC4yNixcImNvbmRpdGlvblwiOlwiMTAwMzoyMCwxMDEyOjE4LDEwMDI6MzAsMTAwMToyMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo3NSxcImNvbW1pc3Npb25cIjowLjE4LFwiY29uZGl0aW9uXCI6XCIxMDA2OjMxLDEwMTQ6MzAsMTAwODoxMiwxMDAyOjI1XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjc2LFwiY29tbWlzc2lvblwiOjAuNTEsXCJjb25kaXRpb25cIjpcIjEwMDc6MjEsMTAxMjoyMCwxMDA0OjExLDEwMTQ6MjBcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6NzcsXCJjb21taXNzaW9uXCI6MC4yMSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDA5OjE2LDEwMTI6MjQsMTAwNzozMFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo3OCxcImNvbW1pc3Npb25cIjowLjczLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE2LDEwMTI6MTYsMTAwNjoyMCwxMDA4OjIyXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjc5LFwiY29tbWlzc2lvblwiOjAuNjUsXCJjb25kaXRpb25cIjpcIjEwMDY6MjYsMTAwNDoxOCwxMDA3OjEyLDEwMTE6MjdcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6ODAsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwOToxNSwxMDAzOjE2LDEwMDQ6MTksMTAwNzoyNFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEyMDBcIn0se1wiaWRcIjo4MSxcImNvbW1pc3Npb25cIjowLjE0LFwiY29uZGl0aW9uXCI6XCIxMDEyOjIwLDEwMTU6MjgsMTAwMjoyNCwxMDAzOjM4XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjgyLFwiY29tbWlzc2lvblwiOjAuMixcImNvbmRpdGlvblwiOlwiMTAwNToxMiwxMDExOjE5LDEwMDk6MTgsMTAwMjoxNFwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo4MyxcImNvbW1pc3Npb25cIjowLjUzLFwiY29uZGl0aW9uXCI6XCIxMDEwOjE5LDEwMDM6MzgsMTAwNzoyMiwxMDE1OjIwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjg0LFwiY29tbWlzc2lvblwiOjAuNjIsXCJjb25kaXRpb25cIjpcIjEwMDU6MjksMTAxNDoyNiwxMDAyOjE4LDEwMDc6MzhcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6ODUsXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAxMToyMCwxMDAxOjE3LDEwMTI6MTIsMTAwNDozMlwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo4NixcImNvbW1pc3Npb25cIjowLjU5LFwiY29uZGl0aW9uXCI6XCIxMDA5OjI1LDEwMTE6MjAsMTAwNjoxNCwxMDE1OjIxXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjg3LFwiY29tbWlzc2lvblwiOlwiMC4zMVwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjI2LDEwMDU6MTksMTAxMzoyMCwxMDE0OjI5XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjg4LFwiY29tbWlzc2lvblwiOlwiMC40OFwiLFwiY29uZGl0aW9uXCI6XCIxMDA4OjM3LDEwMTE6MjQsMTAxNToxMiwxMDE0OjExXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjg5LFwiY29tbWlzc2lvblwiOlwiMC4yMlwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjE3LDEwMDM6MjgsMTAwNToyMiwxMDEwOjMxXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjkwLFwiY29tbWlzc2lvblwiOjAuMzIsXCJjb25kaXRpb25cIjpcIjEwMDI6MzksMTAxMzoyOCwxMDA3OjI1LDEwMDE6MzNcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMzAwXCJ9LHtcImlkXCI6OTEsXCJjb21taXNzaW9uXCI6MC4xOSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDEzOjIwLDEwMTQ6MTAsMTAwNzoyNlwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo5MixcImNvbW1pc3Npb25cIjowLjEzLFwiY29uZGl0aW9uXCI6XCIxMDA0OjM4LDEwMTE6MTMsMTAwODoxNSwxMDA3OjI5XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjkzLFwiY29tbWlzc2lvblwiOjAuMzQsXCJjb25kaXRpb25cIjpcIjEwMTM6MTIsMTAwMTozOSwxMDA2OjM4LDEwMDg6MzFcIixcImV4dHJhX3Jld2FyZFwiOm51bGx9LHtcImlkXCI6OTQsXCJjb21taXNzaW9uXCI6MC4yMixcImNvbmRpdGlvblwiOlwiMTAwMjozNiwxMDE0OjI3LDEwMTM6MTYsMTAwNTozMVwiLFwiZXh0cmFfcmV3YXJkXCI6bnVsbH0se1wiaWRcIjo5NSxcImNvbW1pc3Npb25cIjowLjE1LFwiY29uZGl0aW9uXCI6XCIxMDA1OjI2LDEwMTE6MzQsMTAxNTozNCwxMDA4OjE2XCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjk2LFwiY29tbWlzc2lvblwiOlwiMC40OVwiLFwiY29uZGl0aW9uXCI6XCIxMDAzOjI0LDEwMDE6MzQsMTAwNzoyOCwxMDA1OjMwXCIsXCJleHRyYV9yZXdhcmRcIjpudWxsfSx7XCJpZFwiOjk3LFwiY29tbWlzc2lvblwiOlwiMC42XCIsXCJjb25kaXRpb25cIjpcIjEwMTM6MzIsMTAwOTozMywxMDA2OjMwLDEwMTE6NDBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNTAwXCJ9XSxcImxhbmdcIjpbXSxcImxhbmRMZXZlbFwiOlt7XCJpZFwiOjEsXCJyZXdhcmRcIjpcIjEwMDI6MFwiLFwiY29zdFwiOlwiMTAwMjowXCIsXCJnYWluXCI6bnVsbCxcInByb2JhYmlsaXR5XCI6MC4wMSxcImdldF9kaWFtb25kXCI6MX0se1wiaWRcIjoyLFwicmV3YXJkXCI6XCIxMDAyOjE1MDBcIixcImNvc3RcIjpcIjEwMDI6MTAwMDBcIixcImdhaW5cIjowLjEsXCJwcm9iYWJpbGl0eVwiOjAuMDMsXCJnZXRfZGlhbW9uZFwiOjF9LHtcImlkXCI6MyxcInJld2FyZFwiOlwiMTAwMjoyMDAwXCIsXCJjb3N0XCI6XCIxMDAyOjMwMDAwXCIsXCJnYWluXCI6MC4yNSxcInByb2JhYmlsaXR5XCI6MC4wNSxcImdldF9kaWFtb25kXCI6Mn0se1wiaWRcIjo0LFwicmV3YXJkXCI6XCIxMDAyOjI1MDBcIixcImNvc3RcIjpcIjEwMDI6NTAwMDBcIixcImdhaW5cIjowLjQsXCJwcm9iYWJpbGl0eVwiOjAuMDgsXCJnZXRfZGlhbW9uZFwiOjN9LHtcImlkXCI6NSxcInJld2FyZFwiOlwiMTAwMjozMDAwXCIsXCJjb3N0XCI6XCIxMDAyOjEwMDAwMFwiLFwiZ2FpblwiOjAuNTUsXCJwcm9iYWJpbGl0eVwiOjAuMSxcImdldF9kaWFtb25kXCI6NX1dLFwiZmVlZFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTk5N0NcdTVFNzJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDFfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MSxcImNvc3RcIjpcIjEwMDI6MzBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU1NzVBXHU2NzlDXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAyX2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjIsXCJjb3N0XCI6XCIxMDAyOjUwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1NzA2Qlx1ODE3RlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwM19mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjo1LFwiY29zdFwiOlwiMTAwMjoxMDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU3MjVCXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA0X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjUwLFwiY29zdFwiOlwiMTAwMjo5MDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU3MzJBXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA1X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjIwLFwiY29zdFwiOlwiMTAwMjo0NjBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU5RTIxXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA2X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjEwLFwiY29zdFwiOlwiMTAwMjoyNzBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn1dLFwiY3VycmVuY3lcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU5NEJCXHU3N0YzXCIsXCJpY29uXCI6XCJtYWluX3NjZW5lL2ltZ19kaWFtb25kLnBuZ1wifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTkxRDFcdTVFMDFcIixcImljb25cIjpcIm1haW5fc2NlbmUvaW1nX2NvaW4ucG5nXCJ9XSxcImNvbmZpZ1wiOlt7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVzXCIsXCJ2YWx1ZVwiOjMwfSx7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVcIixcInZhbHVlXCI6NjAwfSx7XCJpZFwiOlwidW5sb2NrX2xhbmRfY29zdFwiLFwidmFsdWVcIjpcIjEwMDI6MCwxMDAyOjAsMTAwMjo1MDAwLDEwMDI6MTAwMDAsMTAwMjoyMDAwMCwxMDAyOjMwMDAwLDEwMDI6NDAwMDAsMTAwMjo1MDAwMCwxMDAyOjYwMDAwXCJ9LHtcImlkXCI6XCJnb2xkRGVmYXVsdFwiLFwidmFsdWVcIjpcIjEwMDI6MTAwXCJ9LHtcImlkXCI6XCJkaWFtb25kRGVmYXVsdFwiLFwidmFsdWVcIjpcIjEwMDE6NTBcIn0se1wiaWRcIjpcIkFEVGltZXNMaW1pdFwiLFwidmFsdWVcIjozMH0se1wiaWRcIjpcIkFEU3BlZWRVcHRpbWVzXCIsXCJ2YWx1ZVwiOjZ9LHtcImlkXCI6XCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIsXCJ2YWx1ZVwiOlwiMTAwMjoxMDAwMFwifSx7XCJpZFwiOlwidml0YWxpdHlMaW1pdFwiLFwidmFsdWVcIjoxMH0se1wiaWRcIjpcIkluaXRpYWxfcGh5c2ljYWxfc3RyZW5ndGhcIixcInZhbHVlXCI6MTB9LHtcImlkXCI6XCJsYW5kQW1vdW50TWF4XCIsXCJ2YWx1ZVwiOjl9LHtcImlkXCI6XCJwZXREZWZhdWx0Vml0YWxpdHlcIixcInZhbHVlXCI6MTAwfSx7XCJpZFwiOlwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCIsXCJ2YWx1ZVwiOjMwMH0se1wiaWRcIjpcIlZpZGVvcmV3YXJkc1wiLFwidmFsdWVcIjpcIjEwMDE6MjAwXCJ9LHtcImlkXCI6XCJ3aXRoZHJhd2FsXCIsXCJ2YWx1ZVwiOlwiMTAwMToxMDAwMDoxXCJ9LHtcImlkXCI6XCJJbnZpdGF0aW9uX3Jld2FyZHNcIixcInZhbHVlXCI6XCIxMDAxOjUwMDBcIn0se1wiaWRcIjpcIndpdGhkcmF3YWxfdGltZXNcIixcInZhbHVlXCI6XCIwLjM6MywwLjU6Miw1OjAsMTA6MCw1MDowXCJ9XX07IiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xzIHtcclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU1QjU3XHU3QjI2XHJcbiAgICAgKiBAcGFyYW0gc3RyIFx1ODk4MVx1ODlFM1x1Njc5MFx1NzY4NFx1NUI1N1x1N0IyNlxyXG4gICAgICogQHBhcmFtIGZvcm1hdCBcdTUwNUFcdTRFM0FcdTUzQzJcdTgwMDNcdTc2ODRcdTVCNTdcdTdCMjZcdTlFRDhcdThCQTRcdTRFM0EsXHJcbiAgICAgKiBAcmV0dXJucyBcdTg5RTNcdTY3OTBcdTU5N0RcdTc2ODRcdTVCNTdcdTdCMjZcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBhcnNlU3RyaW5nKHN0cjogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyA9IFwiLFwiKSB7XHJcbiAgICAgICAgaWYgKCFzdHIpIHJldHVybiBbXTtcclxuICAgICAgICByZXR1cm4gc3RyLnNwbGl0KGZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc5RDJcdThGNkNcdTYzNjJcdTYyMTAwMDowMDowMFxyXG4gICAgICogQHBhcmFtIHMgXHU4RjZDXHU2MzYyXHU2NUY2XHU5NUY0XHU3Njg0XHU3OUQyXHJcbiAgICAgKiBAcmV0dXJucyAwMDowMDowMFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9ybWF0U2Vjb25kcyA9IChzKSA9PiBuZXcgRGF0ZShzICogMTAwMCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMTEsIDgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuL1RhYmxlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb25maWdCYXNlLFxyXG4gICAgQ3VycmVuY3lCYXNlLFxyXG4gICAgRmVlZEJhc2UsXHJcbiAgICBMYW5kTGV2ZWxCYXNlLFxyXG4gICAgT3JkZXJCYXNlLFxyXG4gICAgUGV0QmFzZSxcclxuICAgIFBsYW50QmFzZSxcclxuICAgIFJld2FyZEJhc2UsXHJcbiAgICBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICBTaWduSW5CYXNlLFxyXG4gICAgVGFza0Jhc2UsXHJcbn0gZnJvbSBcIi4vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCIuL1Rvb2xzXCI7XHJcblxyXG5jb25zdCBUYWJsZVByb3BlcnR5RXZlbnQgPSB7XHJcbiAgICBwZXQoZDogdHlwZW9mIFRhYmxlLnBldFswXSkge1xyXG4gICAgICAgIHJldHVybiA8UGV0QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbiB8fCBgcGV0X2ZlZWQvJHtkLmlkfV9kb2cucG5nYCxcclxuICAgICAgICAgICAgdml0YWxpdHlfbWF4OiBkLnZpdGFsaXR5X21heCxcclxuICAgICAgICAgICAgdml0YWxpdHlfY29uc3VtZTogZC52aXRhbGl0eV9jb25zdW1lLFxyXG4gICAgICAgICAgICBjb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5jb3N0KSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgICAgICBzZW5zaXRpdmU6IGQuc2Vuc2l0aXZlLFxyXG4gICAgICAgICAgICBhYmlsaXR5OiBkLmFiaWxpdHksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTk5NzJcdTY1OTlcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZmVlZChkOiB0eXBlb2YgVGFibGUuZmVlZFswXSkge1xyXG4gICAgICAgIHJldHVybiA8RmVlZEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYHBldF9mZWVkLyR7ZC5pZH1fZmVlZC5wbmdgLFxyXG4gICAgICAgICAgICB2aXRhbGl0eTogZC52aXRhbGl0eSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OEJBMlx1NTM1NVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIG9yZGVyKGQ6IHR5cGVvZiBUYWJsZS5vcmRlclswXSkge1xyXG4gICAgICAgIHJldHVybiA8T3JkZXJCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGNvbW1pc3Npb246IE51bWJlcihkLmNvbW1pc3Npb24pLFxyXG4gICAgICAgICAgICBjb25kaXRpb246IFRvb2xzLnBhcnNlU3RyaW5nKGQuY29uZGl0aW9uKS5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gVG9vbHMucGFyc2VTdHJpbmcoZSwgXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFudDogVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KE51bWJlcih2WzBdKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IE51bWJlcih2WzFdKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBleHRyYVJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuZXh0cmFfcmV3YXJkKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NjIxMFx1NzE5Rlx1NjkwRFx1NzI2OVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHBsYW50KGQ6IHR5cGVvZiBUYWJsZS5wbGFudFswXSkge1xyXG4gICAgICAgIHJldHVybiA8UGxhbnRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uLFxyXG4gICAgICAgICAgICBtYXR1cmVJY29uOiBgcGxhbnRfaWNvbi8ke2QuaWNvbi5tYXRjaCgvXFxkKy9nKVswXX1fbWF0dXJlLnBuZ2AsXHJcbiAgICAgICAgICAgIGdyb3dpbmdJY29uOiBgcGxhbnRfaWNvbi8ke2QuaWNvbi5tYXRjaCgvXFxkKy9nKVswXX1fZ3Jvd2luZy5wbmdgLFxyXG4gICAgICAgICAgICBnYWluOiBUb29scy5wYXJzZVN0cmluZyhkLmdhaW4pLm1hcCgoZSkgPT4gZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGUpKSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgICAgICBzZWVkX3ByaWNlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5zZWVkX3ByaWNlKSxcclxuICAgICAgICAgICAgaGFydmVzdDogTnVtYmVyKFRvb2xzLnBhcnNlU3RyaW5nKGQuaGFydmVzdCwgXCJ+XCIpWzFdKSxcclxuICAgICAgICAgICAgbWF0dXJlX3RpbWU6IE51bWJlcihkLm1hdHVyZV90aW1lKSxcclxuICAgICAgICAgICAgdW5sb2NrX2Nvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnVubG9ja19jb3N0KSxcclxuICAgICAgICAgICAgdW5sb2NrX3Jld2FyZDogVG9vbHMucGFyc2VTdHJpbmcoZC51bmxvY2tfcmV3YXJkKS5tYXAoKGUpID0+IGdldFJld2FyZEN1cnJlbmN5QmFzZShlKSksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBjdXJyZW5jeShkOiB0eXBlb2YgVGFibGUuY3VycmVuY3lbMF0pIHtcclxuICAgICAgICByZXR1cm4gPEN1cnJlbmN5QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24sXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NTcxRlx1NTczMFx1N0I0OVx1N0VBN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBsYW5kTGV2ZWwoZDogdHlwZW9mIFRhYmxlLmxhbmRMZXZlbFswXSkge1xyXG4gICAgICAgIHJldHVybiA8TGFuZExldmVsQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICByZXdhcmQ6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnJld2FyZCksXHJcbiAgICAgICAgICAgIGNvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLmNvc3QpLFxyXG4gICAgICAgICAgICBnYWluOiBkLmdhaW4sXHJcbiAgICAgICAgICAgIHByb2JhYmlsaXR5OiBkLnByb2JhYmlsaXR5LFxyXG4gICAgICAgICAgICBnZXREaWFtb25kOiBkLmdldF9kaWFtb25kLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbmZpZyhkOiB0eXBlb2YgVGFibGUuY29uZmlnWzBdKSB7XHJcbiAgICAgICAgc3dpdGNoIChkLmlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhbGxfc3BlZWRfdXBfdGltZXNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcImFsbF9zcGVlZF91cF90aW1lc1wiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFsbF9zcGVlZF91cF90aW1lXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJhbGxfc3BlZWRfdXBfdGltZVwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInVubG9ja19sYW5kX2Nvc3RcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidW5sb2NrX2xhbmRfY29zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBUb29scy5wYXJzZVN0cmluZyhkLnZhbHVlIGFzIHN0cmluZykubWFwKChkKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJnb2xkRGVmYXVsdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJnb2xkRGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcImRpYW1vbmREZWZhdWx0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImRpYW1vbmREZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykuY291bnQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiQURUaW1lc0xpbWl0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJBRFRpbWVzTGltaXRcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcIkFEU3BlZWRVcHRpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJBRFNwZWVkVXB0aW1lc1wiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwidml0YWxpdHlCdXlDb3N0R29sZFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykuY291bnQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwidml0YWxpdHlMaW1pdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwidml0YWxpdHlMaW1pdFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiSW5pdGlhbF9waHlzaWNhbF9zdHJlbmd0aFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiSW5pdGlhbF9waHlzaWNhbF9zdHJlbmd0aFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZEFtb3VudE1heFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwibGFuZEFtb3VudE1heFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwicGV0RGVmYXVsdFZpdGFsaXR5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJwZXREZWZhdWx0Vml0YWxpdHlcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcInBldERpZ2VzdEludGVydmFsVGltZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJWaWRlb3Jld2FyZHNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcIlZpZGVvcmV3YXJkc1wiLCB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwid2l0aGRyYXdhbFwiOiAvL1x1NjNEMFx1NzNCMFx1NkJENFx1NEY4QlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwid2l0aGRyYXdhbFwiLCB2YWx1ZTogVG9vbHMucGFyc2VTdHJpbmcoZC52YWx1ZSBhcyBzdHJpbmcsIFwiOlwiKSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiSW52aXRhdGlvbl9yZXdhcmRzXCI6IC8vXHU5MDgwXHU4QkY3XHU1OTdEXHU1M0NCXHU1OTU2XHU1MkIxXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIkludml0YXRpb25fcmV3YXJkc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcIndpdGhkcmF3YWxfdGltZXNcIjogLy9cdTYzRDBcdTczQjBcdTZCMjFcdTY1NzBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwid2l0aGRyYXdhbF90aW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBUb29scy5wYXJzZVN0cmluZyhkLnZhbHVlIGFzIHN0cmluZykubWFwKCh2OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IFRvb2xzLnBhcnNlU3RyaW5nKHYsIFwiOlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJpY2U6IE51bWJlcih2WzBdKSwgdGltZXM6IE51bWJlcih2WzFdKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU5NTAxXHU3QjdFXHU1MjMwXHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZFxyXG4gICAgICovXHJcbiAgICBzaWduSW4oZDogdHlwZW9mIFRhYmxlLnNpZ25JblswXSkge1xyXG4gICAgICAgIHJldHVybiA8U2lnbkluQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBkYXlzOiBkLmRheXMsXHJcbiAgICAgICAgICAgIHJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQucmV3YXJkKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NEVGQlx1NTJBMVx1ODg2OFxyXG4gICAgICovXHJcbiAgICB0YXNrKGQ6IHR5cGVvZiBUYWJsZS50YXNrWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxUYXNrQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICB0aW1lczogZC50aW1lcyxcclxuICAgICAgICAgICAgcmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5yZXdhcmQpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHRpdGxlOiBkLnRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYGdhbWUvaW1nX2Jhcm0ucG5nYCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcclxuICogQHBhcmFtIHN0ciBcdTg5RTNcdTY3OTBcdTc2ODRcdThEMjdcdTVFMDFcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQgaWQ6bnVtXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXdhcmRDdXJyZW5jeUJhc2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBsaXN0ID0gVG9vbHMucGFyc2VTdHJpbmcoc3RyLCBcIjpcIik7XHJcblxyXG4gICAgcmV0dXJuIDxSZXdhcmRDdXJyZW5jeUJhc2U+e1xyXG4gICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KE51bWJlcihsaXN0WzBdKSksXHJcbiAgICAgICAgY291bnQ6IE51bWJlcihsaXN0WzFdKSxcclxuICAgIH07XHJcbn1cclxuXHJcbnR5cGUgdHlwZVRhYmxlID0gdHlwZW9mIFRhYmxlUHJvcGVydHlFdmVudDtcclxuXHJcbmNsYXNzIFRhYmxlQ29udHJvbCB7XHJcbiAgICBwcml2YXRlIHRhYmxlQ2FjaGU6IE1hcDxrZXlvZiB0eXBlVGFibGUsIFJldHVyblR5cGU8dHlwZVRhYmxlW2tleW9mIHR5cGVUYWJsZV0+W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU3Njg0XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0ga2V5IFx1ODg2OFx1NzY4NGtleVxyXG4gICAgICovXHJcbiAgICB0YWJsZTxUIGV4dGVuZHMga2V5b2YgdHlwZVRhYmxlPihcclxuICAgICAgICBrZXk6IFRcclxuICAgICk6IHtcclxuICAgICAgICBsaXN0OiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT5bXTtcclxuICAgICAgICBnZXQ6IHsgKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT4gfTtcclxuICAgIH0ge1xyXG4gICAgICAgIC8vXHU4QkZCXHU1M0Q2XHU3RUM0XHU2MjEwXHJcbiAgICAgICAgaWYgKHRoaXMudGFibGVDYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJsZUJhY2sodGhpcy50YWJsZUNhY2hlLmdldChrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTg5RTNcdTY3OTBcdTY1NzBcdTYzNkVcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIFRhYmxlW2tleV0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goVGFibGVQcm9wZXJ0eUV2ZW50W2tleV0oZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHU3RjEzXHU1QjU4XHU4OUUzXHU2NzkwXHU4ODY4XHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgdGhpcy50YWJsZUNhY2hlLnNldChrZXksIGxpc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayhsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUyOFx1NEU4RXRhYmxlXHU2NUI5XHU2Q0Q1XHU4RkQ0XHU1NkRFXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGXHU1NDhDXHU2REZCXHU1MkEwXHU4M0I3XHU1M0Q2XHU1MzU1XHU0RTJBXHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTg5RTNcdTY3OTBcdTg4NjhcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zIFx1OEZENFx1NTZERVx1NjMwN1x1NUI5QVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRhYmxlQmFjayhsaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGlzdDogbGlzdCxcclxuICAgICAgICAgICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGxpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODg2OFx1NjgzQ1x1ODlFM1x1Njc5MFx1NURFNVx1NTE3N1xyXG4gKi9cclxuY29uc3QgVGFibGVBbmFseXplID0gbmV3IFRhYmxlQ29udHJvbCgpO1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUFuYWx5emU7XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgVGFza0Jhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFza0RhdGFPYmoge1xyXG4gICAgLyoqIFx1NEVGQlx1NTJBMWlkICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NUI4Q1x1NjIxMFx1NkIyMVx1NjU3MCAqL1xyXG4gICAgdGltZXM6IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk4ODZcdTUzRDZcdTU5NTZcdTUyQjEgMFx1NjcyQVx1OTg4Nlx1NTNENiAxXHU1REYyXHU5ODg2XHU1M0Q2ICovXHJcbiAgICByZWNlaXZlOiBudW1iZXI7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExXHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBUYXNrQmFzZTtcclxufVxyXG4vKipcclxuICogXHU0RUZCXHU1MkExXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBUYXNrU2VydmljZSB7XHJcbiAgICBsaXN0OiBUYXNrRGF0YU9ialtdID0gW107XHJcblxyXG4gICAgaW5pdChkOiBOZXRJbml0W1widGFza3NcIl0pIHtcclxuICAgICAgICBkLmZvckVhY2goKGUpID0+XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGltZXM6IGUudGltZXMsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlOiBlLnJlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChlLmlkKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU0RUZCXHU1MkExXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldFRhc2soaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFRkJcdTUyQTFcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0QSA9IHRoaXMuZ2V0VGFzayhhLmlkKSxcclxuICAgICAgICAgICAgICAgIHRCID0gdGhpcy5nZXRUYXNrKGIuaWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIGEuaWQgK1xyXG4gICAgICAgICAgICAgICAgKHRBPy5yZWNlaXZlID8gMTAwMCA6IDEpICtcclxuICAgICAgICAgICAgICAgICh0QT8udGltZXMgPj0gYS5iYXNlLnRpbWVzID8gMTAwIDogMTAwMCkgLVxyXG4gICAgICAgICAgICAgICAgKGIuaWQgKyAodEI/LnJlY2VpdmUgPyAxMDAwIDogMSkgKyAodEI/LnRpbWVzID49IGIuYmFzZS50aW1lcyA/IDEwMCA6IDEwMDApKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU0RUZCXHU1MkExXHU2REZCXHU1MkEwXHU2QjIxXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIHRhc2tBZGRUaW1lcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSB0aGlzLmdldFRhc2soaWQpO1xyXG4gICAgICAgIGlmICghdGFzaykge1xyXG4gICAgICAgICAgICAvL1x1OUVEOFx1OEJBNFx1NEUwRFx1NTIxQlx1NUVGQVx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICAvLyB0YXNrID0geyBpZDogaWQsIHRpbWVzOiAwLCByZWNlaXZlOiAwLCBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChpZCkgfTtcclxuICAgICAgICAgICAgLy8gdGhpcy5saXN0LnB1c2godGFzayk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhc2sudGltZXMrKztcclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfdGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhc2tTZXJ2aWNlKCk7XHJcbiIsICJleHBvcnQgdHlwZSBMYW5kT2JqID0gTmV0SW5pdFtcImxhbmRzXCJdWzBdO1xyXG5cclxuY2xhc3MgTGFuZFNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgbGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBpbml0KGxpc3Q6IExhbmRPYmpbXSkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExhbmQoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTU3NTdcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBpZCBcdTU3MUZcdTU3MzBpZFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGdldExhbmQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkRGQlx1NTJBMFx1NjIxNlx1NjYyRlx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGQgXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGFkZExhbmQoZDogTGFuZE9iaikge1xyXG4gICAgICAgIHRoaXMubGlzdC5zZXQoZC5pZCwgZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTdBN0FcdTU3MUZcdTU3MzBcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMYW5kU2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGV0QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBldERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTVCQTBcdTcyNjlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFBldEJhc2U7XHJcbiAgICAvKiogXHU5NTAxXHU1QjlBICovXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBQZXRTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFBldERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBpbml0KHBldHM6IG51bWJlcltdKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBkLFxyXG4gICAgICAgICAgICAgICAgbG9jazogIXBldHMuaW5jbHVkZXMoZC5pZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU1QkEwXHU3MjY5XHU4OUUzXHU5NTAxXHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIGdldFVubG9ja0xlbigpIHtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWQubG9jaykgbGVuKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBldFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYW50RGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogUGxhbnRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jbGFzcyBQbGFudFNlcnZpY2Uge1xyXG4gICAgbGlzdDogUGxhbnREYXRhQmFzZVtdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGxpc3QgXHU3OUNEXHU1QjUwaWRcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgaW5pdChsaXN0OiBudW1iZXJbXSkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7IGJhc2U6IGQsIGxvY2s6ICFsaXN0LmluY2x1ZGVzKGQuaWQpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gaWQgXHU2OTBEXHU3MjY5aWRcclxuICAgICAqIEByZXR1cm5zIFx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBnZXRQbGFudChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMubGlzdC5sZW5ndGggLSAxOyB4ID4gLTE7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBsYW50U2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi4vY29yZS9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2RlxyXG4gKi9cclxuY2xhc3MgVXNlckluZm8ge1xyXG4gICAgLyoqIFx1OEJBMlx1NTM1NVx1N0I0OVx1N0VBNyBcdTVERjJcdTVCOENcdTYyMTAgKi9cclxuICAgIG9yZGVyTGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1NDBEXHU3OUYwICovXHJcbiAgICBuaWNrbmFtZTogc3RyaW5nID0gXCJuYW1lXCI7XHJcbiAgICAvLyAvKiogXHU3NTI4XHU2MjM3aWQgKi9cclxuICAgIC8vIHVpZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTU1MkZcdTRFMDBcdTY4MDdcdThCQzYgKi9cclxuICAgIGtleTogc3RyaW5nID0gbnVsbDtcclxuICAgIC8qKiBcdTc1MjhcdTU0MERcdTU5MzRcdTUwQ0YgKi9cclxuICAgIGF2YXRhcjogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjMgKi9cclxuICAgIGRpYW1vbmQ6IG51bWJlciA9IDk5OTtcclxuICAgIC8qKiBcdTkxRDFcdTVFMDEgKi9cclxuICAgIGdvbGQ6IG51bWJlciA9IDk5OTtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTUzRUZcdTRFRTVcdTc3MEJcdTVFN0ZcdTU0NEFcdTc2ODRcdTZCMjFcdTY1NzAgKi9cclxuICAgIGFkdmVydGlzZVRpbWVzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzNBOVx1NUJCNlx1NEY2OVx1NjIzNFx1NzY4NFx1NUJBMFx1NzI2OSAqL1xyXG4gICAgd2FyZVBldElkOiBudW1iZXI7XHJcbiAgICAvKiogXHU1MjY5XHU0RjU5XHU0RjUzXHU1MjlCICovXHJcbiAgICBwZXRWaXRhbGl0eTogbnVtYmVyO1xyXG4gICAgLyoqIFx1NkQ4OFx1NTMxNlx1OThERlx1NzI2OVx1NTAxMlx1OEJBMVx1NjVGNiAqL1xyXG4gICAgZGlnZXN0Q291bnREb3duOiBudW1iZXI7XHJcbiAgICAvKiogXHU4RkRFXHU3RUVEXHU3QjdFXHU1MjMwXHU1OTI5XHU2NTcwICovXHJcbiAgICBzaWduSW5EYXlzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NEUwQVx1NEUwMFx1NkIyMVx1OTg4Nlx1NTNENlx1NzY4NFx1N0I3RVx1NTIzMFx1NTk1Nlx1NTJCMWlkICovXHJcbiAgICBzaWduSW5JZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTVERjJcdTdFQ0ZcdTUyQTBcdTkwMUZcdTZCMjFcdTY1NzAgKi9cclxuICAgIHNwZWVkVXBUaW1lczogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTRGNTNcdTUyOUIgKi9cclxuICAgIHZpdGFsaXR5OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTE1MVx1NjM2Mlx1NkJENFx1NEY4QiAqL1xyXG4gICAgcHJvcG9ydGlvbjogbnVtYmVyID0gMC4wMDAxO1xyXG4gICAgLyoqIFx1OTA4MFx1OEJGN1x1ODAwNSAqL1xyXG4gICAgaW52aXRlUGVvcGxlOiBzdHJpbmc7XHJcbiAgICAvKiogXHU3QjJDXHU0RTAwXHU2QjIxXHU3NjdCXHU1RjU1IDExIFx1ODg2OFx1NzkzQSBcdTYyNERcdTg4NjhcdTc5M0FcdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcdTVCOENcdTUxNjhcdTdFRDNcdTY3NUYgICovXHJcbiAgICBpc0ZpcnN0VGltZTogbnVtYmVyO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NjNEMFx1NzNCMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgd2l0aGRyYXc6IFdpdGhkcmF3RGF0YVtdO1xyXG4gICAgLyoqIFx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjU3MFx1NjM2RSAqL1xyXG4gICAgZ3VpZGVEYXRhOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGdldCB0dHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJMZXZlbDtcclxuICAgIH1cclxuICAgIHNldCB0dHQodikge1xyXG4gICAgICAgIHRoaXMub3JkZXJMZXZlbCA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VySW5mbygpO1xyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBXYXJlSG91c2VEYXRhIHtcclxuICAgIGJhc2U6IFBsYW50QmFzZTtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB0eXBlPzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFdhcmVob3VzZVNlcnZpY2Uge1xyXG4gICAgbGlzdDogV2FyZUhvdXNlRGF0YVtdID0gW107XHJcblxyXG4gICAgaW5pdChcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICkge1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJcdTk1MTlcdThCRUZcdTc2ODRpZCBcIiArIGQuaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoZC5pZCksXHJcbiAgICAgICAgICAgICAgICBjb3VudDogZC5hbW91bnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxQ0ZcdTVDMTFcdTcyNjlcdTU0QzFcdTY1NzBcdTkxQ0ZcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIGFtb3VudFxyXG4gICAgICovXHJcbiAgICByZWR1Y2VBbW91bnQoaWQ6IG51bWJlciwgYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFt4XS5jb3VudCAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTkwNTNcdTUxNzdcclxuICAgICAqL1xyXG4gICAgZ2V0T25lKGlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEl0ZW0oaWQpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2REZCXHU1MkEwXHU3MjY5XHU1NEMxXHJcbiAgICAgKi9cclxuICAgIGFkZChpZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLmNvdW50ICs9IGFtb3VudDtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX09yZGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlx1OTUxOVx1OEJFRlx1NzY4NGlkIFwiICsgaWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChpZCksXHJcbiAgICAgICAgICAgIGNvdW50OiBhbW91bnQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBXYXJlaG91c2VTZXJ2aWNlKCk7XHJcbiIsICIvKipcclxuICogXHU3N0VEXHU5NEZFXHU2M0E1XHU4QkY3XHU2QzQyXHU1MzRGXHU4QkFFXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBcGlIdHRwIHtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgKi9cclxuICAgIGxvZ2luID0gXCIvbG9naW5cIixcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgdG9rZW4gKi9cclxuICAgIGxvZ2luVG9rZW4gPSBcIi9sb2dpbi90b2tlblwiLFxyXG4gICAgLyoqIFx1OTg4Nlx1NTNENlx1OEJBMlx1NTM1NVx1NTk1Nlx1NTJCMSAqL1xyXG4gICAgb3JkZXJSZXdhcmQgPSBcIi9vcmRlci9yZXdhcmRcIixcclxuICAgIC8qKiBcdTk4ODZcdTUzRDZcdTdCN0VcdTUyMzBcdTU5NTZcdTUyQjEgKi9cclxuICAgIHNpZ25JblJld2FyZCA9IFwiL3NpZ25Jbi9yZXdhcmRcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTg5RTNcdTk1MDEgKi9cclxuICAgIGxhbmRVbmxvY2sgPSBcIi9sYW5kL3VubG9ja1wiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjRBRFx1NzlDRCAqL1xyXG4gICAgbGFuZFNvdyA9IFwiL2xhbmQvc293XCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU2NTM2XHU4M0I3ICovXHJcbiAgICBsYW5kR2F0aGVyID0gXCIvbGFuZC9nYXRoZXJcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTcgKi9cclxuICAgIGxhbmRVcGdyYWRlID0gXCIvbGFuZC91cGdyYWRlXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MkEwXHU5MDFGICovXHJcbiAgICBsYW5kU3BlZWRVcCA9IFwiL2xhbmQvc3BlZWRVcFwiLFxyXG4gICAgLyoqIFx1NzlDRFx1NUI1MFx1ODlFM1x1OTUwMSAqL1xyXG4gICAgc2VlZHNVbmxvY2sgPSBcIi9zZWVkcy91bmxvY2tcIixcclxuICAgIC8qKiBcdTgzQjdcdTUzRDZcdTgwQ0NcdTUzMDVcdTUyMTdcdTg4Njg9PiBcdTY2ODJcdTY1RjZcdThGRDlcdTRFMkFcdTYzQTVcdTUzRTNcdTRFMERcdTk3MDBcdTg5ODFcdTc1MjggKi9cclxuICAgIHdhcmVob3VzZSA9IFwiL3dhcmVob3VzZVwiLFxyXG4gICAgLyoqIFx1ODBDQ1x1NTMwNVx1NTU0Nlx1NTRDMVx1NTFGQVx1NTUyRSAqL1xyXG4gICAgd2FyZWhvdXNlU2VsbCA9IFwiL3dhcmVob3VzZS9zZWxsXCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU4RDJEXHU0RTcwICovXHJcbiAgICBwZXRCdXkgPSBcIi9wZXQvYnV5XCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU0RjY5XHU2MjM0ICovXHJcbiAgICBwZXRXZWFyID0gXCIvcGV0L3dlYXJcIixcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdThEMkRcdTRFNzAgKi9cclxuICAgIGZlZWRCdXkgPSBcIi9mZWVkL2J1eVwiLFxyXG4gICAgLyoqIFx1NEVGQlx1NTJBMVx1NTk1Nlx1NTJCMVx1OTg4Nlx1NTNENiAqL1xyXG4gICAgdGFza1Jld2FyZCA9IFwiL3Rhc2svcmV3YXJkXCIsXHJcbiAgICAvKiogXHU5MEJCXHU1QzQ1ICovXHJcbiAgICBuZWlnaGJvciA9IFwiL25laWdoYm9yXCIsXHJcbiAgICAvKiogXHU1MDc3XHU4M0RDICovXHJcbiAgICBsYW5kU3RlYWwgPSBcIi9sYW5kL3N0ZWFsXCIsXHJcbiAgICAvKiogXHU1MzU1XHU3MkVDXHU2N0U1XHU3NzBCXHU1RTdGXHU1NDRBICovXHJcbiAgICBhZCA9IFwiL2FkXCIsXHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU0RjUzXHU1MjlCXHU4RDJEXHU0RTcwICovXHJcbiAgICB2aXRhbGl0eUJ1eSA9IFwiL3ZpdGFsaXR5L2J1eVwiLFxyXG4gICAgLyoqIFx1NTZERVx1ODFFQVx1NURGMVx1NUJCNiAqL1xyXG4gICAgZ29Ib21lID0gXCIvZ29Ib21lXCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU1MjIwXHU5NjY0ICovXHJcbiAgICBmcmllbmREZWxldGUgPSBcIi9mcmllbmQvZGVsZXRlXCIsXHJcbiAgICAvKiogXHU5MDFBXHU4RkM3XHU1OTdEXHU1M0NCXHU3NTMzXHU4QkY3ICovXHJcbiAgICBmcmllbmRBbGxvdyA9IFwiL2ZyaWVuZC9hbGxvd1wiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1NzUzM1x1OEJGNyAqL1xyXG4gICAgZnJpZW5kQXBwbHkgPSBcIi9mcmllbmQvYXBwbHlcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTY0MUNcdTdEMjIgKi9cclxuICAgIGZyaWVuZFNlYXJjaCA9IFwiL2ZyaWVuZC9zZWFyY2hcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZExpc3QgPSBcIi9mcmllbmQvbGlzdFwiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1OTA4MFx1OEJGN1x1ODAwNVx1N0VEMVx1NUI5QSAqL1xyXG4gICAgZnJpZW5kSW52aXRlUGVvcGxlID0gXCIvZnJpZW5kL2ludml0ZS9wZW9wbGVcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZEludml0ZUxpc3QgPSBcIi9mcmllbmQvaW52aXRlL2xpc3RcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTU5NTZcdTUyQjFcdUZGMENcdTk4ODZcdTUzRDYgKi9cclxuICAgIGZyaWVuZEludml0ZVJlY2VpdmUgPSBcIi9mcmllbmQvaW52aXRlL3JlY2VpdmVcIixcclxuICAgIC8qKiBcdThCQkZcdTk1RUVcdTU5N0RcdTUzQ0JcdTVCQjZcdTkxQ0MgKi9cclxuICAgIGZyaWVuZFZpc2l0ID0gXCIvZnJpZW5kL3Zpc2l0XCIsXHJcbiAgICAvKiogXHU5MEFFXHU0RUY2XHU1MjE3XHU4ODY4ICovXHJcbiAgICBtYWlsTGlzdCA9IFwiL21haWwvbGlzdFwiLFxyXG4gICAgLyoqIFx1OTBBRVx1NEVGNlx1OTYwNVx1OEJGQiAqL1xyXG4gICAgbWFpbFJlYWQgPSBcIi9tYWlsL3JlYWRcIixcclxuICAgIC8qKiBcdTkwQUVcdTRFRjZcdTUyMjBcdTk2NjQgKi9cclxuICAgIG1haWxEZWxldGUgPSBcIi9tYWlsL2RlbGV0ZVwiLFxyXG4gICAgLyoqIFx1NjNEMFx1NzNCMCAqL1xyXG4gICAgd2l0aGRyYXcgPSBcIi93aXRoZHJhd1wiLFxyXG4gICAgLyoqIFx1NUJBMlx1NjIzN1x1N0FFRlx1NzI0OFx1NjcyQyAqL1xyXG4gICAgY29uZmlnQ2xpZW50ID0gXCIvY29uZmlnL2NsaWVudFwiLFxyXG4gICAgLyoqIFx1NUYxNVx1NUJGQ1x1NjU3MFx1NjM2RSAqL1xyXG4gICAgZ3VpZGUgPSBcIi9ndWlkZVwiLFxyXG59XHJcbiIsICJpbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBQZXRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZVwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM0Rlx1OEJBRVx1NjU3MFx1NjM2RVx1NTkwNFx1NzQwNlxyXG4gKi9cclxuY2xhc3MgSHR0cERhdGFDb250cm9sIHtcclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdThGNkNcdTUzRDEgKi9cclxuICAgIGZvcndhcmQoZDoge1xyXG4gICAgICAgIGFwaTogQXBpSHR0cDtcclxuICAgICAgICBkYXRhOiBhbnk7XHJcbiAgICAgICAgcmVzb2x2ZUV2ZW50PzogRnVuY3Rpb247XHJcbiAgICAgICAgLy8gVE9ETyBcdThGRDlcdTRFMkFcdTUzRUZcdTgwRkRcdTY3MDlcdTVGMDJcdTZCNjVcdTkxQ0RcdTU5MERcdTk1RUVcdTk4OThcdUZGMENcdTU0MEVcdTY3MUZcdTYzOTJcdTY3RTVcdTRFMDBcdTRFMEJcclxuICAgICAgICBlcnJvcj86IEZ1bmN0aW9uO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHN3aXRjaCAoZC5hcGkpIHtcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxvZ2luOlxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubG9naW5Ub2tlbjpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFNwZWVkVXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmFkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kR2F0aGVyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5mZWVkQnV5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDYpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kU293OlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC53YXJlaG91c2VTZWxsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAuc2VlZHNVbmxvY2s6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFNvdzpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kVW5sb2NrOlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnBldEJ1eTpcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnZpdGFsaXR5QnV5OlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnRhc2tSZXdhcmQ6XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kVXBncmFkZTpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5vcmRlclJld2FyZDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZC5yZXNvbHZlRXZlbnQpIGQucmVzb2x2ZUV2ZW50KGQuZGF0YSk7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoZC5hcGksIGQuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IoZXJyb3JDb2RlOiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgIC8vIHRleHQ6IGBlcnJvckNvZGUgJHtlcnJvckNvZGV9ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YCxcclxuICAgICAgICAgICAgdGV4dDogYCR7ZGF0YT8ubWVzc2FnZX1gLFxyXG4gICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzY3Qlx1NUY1NVxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9naW4oZDogTmV0SW5pdCkge1xyXG4gICAgICAgIGlmICghZCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NzY3Qlx1NUY1NVx1OTUxOVx1OEJFRixcdThCRjdcdTkxQ0RcdThCRDVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgUGxhbnRTZXJ2aWNlLmluaXQoZC5zZWVkcyk7XHJcbiAgICAgICAgV2FyZWhvdXNlU2VydmljZS5pbml0KGQud2FyZWhvdXNlKTtcclxuICAgICAgICBVc2VySW5mby5rZXkgPSBkLnVzZXJJbmZvLmtleTtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC51c2VySW5mby5kaWFtb25kO1xyXG4gICAgICAgIFVzZXJJbmZvLmdvbGQgPSBkLnVzZXJJbmZvLmdvbGQ7XHJcbiAgICAgICAgVXNlckluZm8ubmlja25hbWUgPSBkLnVzZXJJbmZvLm5pY2tuYW1lO1xyXG4gICAgICAgIFVzZXJJbmZvLmF2YXRhciA9IGQudXNlckluZm8uYXZhdGFyO1xyXG4gICAgICAgIFVzZXJJbmZvLm9yZGVyTGV2ZWwgPSBkLm9yZGVySWQgfHwgMDtcclxuICAgICAgICBVc2VySW5mby53YXJlUGV0SWQgPSBkLndlYXJQZXQ/LmlkO1xyXG4gICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gZC53ZWFyUGV0Py52aXRhbGl0eSB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IGQud2VhclBldD8uZGlnZXN0Q291bnREb3duIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPSBkLmFkdmVydGlzZVRpbWVzIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cyA9IGQuc2lnbkluRGF5cyB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnNpZ25JbklkID0gZC5zaWduSW5JZDtcclxuICAgICAgICBVc2VySW5mby5zcGVlZFVwVGltZXMgPSBkLnNwZWVkVXBUaW1lcztcclxuICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudXNlckluZm8udml0YWxpdHk7XHJcbiAgICAgICAgVXNlckluZm8uaW52aXRlUGVvcGxlID0gZC51c2VySW5mby5pbnZpdGVQZW9wbGU7XHJcbiAgICAgICAgVXNlckluZm8uaXNGaXJzdFRpbWUgPSBkLnVzZXJJbmZvLmlzRmlyc3RUaW1lO1xyXG4gICAgICAgIFVzZXJJbmZvLmd1aWRlRGF0YSA9IGQudXNlckluZm8uZ3VpZGVEYXRhIHx8IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBkLndpdGhkcmF3O1xyXG4gICAgICAgIFBldFNlcnZpY2UuaW5pdChkLnBldHMpO1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLmluaXQoZC50YXNrcyk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwiaXNMb2dpblwiLCB0cnVlKTtcclxuICAgICAgICBpZiAoZC50b2tlbikgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgZC50b2tlbik7XHJcbiAgICAgICAgTGFuZFNlcnZpY2UuaW5pdChkLmxhbmRzKTtcclxuXHJcbiAgICAgICAgQ29yZS5hdWRpby5zb3VuZE11dGVkID0gTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkuc291bmQ7XHJcbiAgICAgICAgQ29yZS5hdWRpby5tdXNpY011dGVkID0gTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkubXVzaWM7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5PdXQoKSB7XHJcbiAgICAgICAgUGxhbnRTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgV2FyZWhvdXNlU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFBldFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBMYW5kU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwiaXNMb2dpblwiLCBmYWxzZSk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgbnVsbCk7XHJcbiAgICAgICAgVXNlckluZm8ua2V5ID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gMDtcclxuICAgICAgICBVc2VySW5mby5nb2xkID0gMDtcclxuICAgICAgICBVc2VySW5mby5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8uYXZhdGFyID0gXCJcIjtcclxuICAgICAgICBVc2VySW5mby5vcmRlckxldmVsID0gMDtcclxuICAgICAgICBVc2VySW5mby53YXJlUGV0SWQgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gMDtcclxuICAgICAgICBVc2VySW5mby5kaWdlc3RDb3VudERvd24gPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5EYXlzID0gMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5JZCA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8uc3BlZWRVcFRpbWVzID0gMDtcclxuICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uaW52aXRlUGVvcGxlID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5pc0ZpcnN0VGltZSA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBbXTtcclxuICAgICAgICBVc2VySW5mby5ndWlkZURhdGEgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5RUQ4XHU4QkE0XHU3NTI4XHU2NzY1XHU2NkY0XHU2NUIwXHU3NTI4XHU2MjM3XHU5MUQxXHU1RTAxXHU3QjQ5XHJcbiAgICAgKiBAcGFyYW0gZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVVzZXJJbmZvKGQ6IFJldHVyblVzZXJJbmZvKSB7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IGQuZ29sZDtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC5kaWFtb25kO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcyB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExXHU4RkRCXHU1RUE2XHJcbiAgICAgKiBAcGFyYW0gaWQgXHU0RUZCXHU1MkExaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB0YXNrVXBkYXRlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSHR0cERhdGFDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCJzcmMvY29yZS9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcIi4vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcIi4vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwRGF0YUNvbnRyb2wgZnJvbSBcIi4vSHR0cERhdGFDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwiLi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vUmVzXCI7XHJcblxyXG5pbnRlcmZhY2UgSHR0cFNlbmREYXRhIHtcclxuICAgIGFwaTogQXBpSHR0cDtcclxuICAgIGRhdGE/OiBhbnk7XHJcbiAgICBtZXRob2Q/OiBzdHJpbmc7XHJcbiAgICByZXNwb25zZVR5cGU/OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzPzogYW55W10gfCBudWxsO1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1OTUxOVx1OEJFRlx1NTZERVx1OEMwMyAqL1xyXG4gICAgZXJyb3I/OiB7IChjb2RlOiBudW1iZXIsIGRhdGE6IGFueSk6IHZvaWQgfTtcclxuICAgIGJhc2VVcmw/OiBzdHJpbmc7XHJcbiAgICAvKiogXHU1M0QxXHU4RDc3XHU4QkY3XHU2QzQyXHU1MjREICovXHJcbiAgICBiZWZvcmU/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NzdFRFx1OTRGRVx1NjNBNVx1NjNBN1x1NTIzNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cENvbnRyb2wge1xyXG4gICAgQEluc3RhbmNlXHJcbiAgICBzdGF0aWMgaW5zdDogSHR0cENvbnRyb2w7XHJcblxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNlbmREYXRhOiBIdHRwU2VuZERhdGE7XHJcblxyXG4gICAgLyoqIFx1NEU4Qlx1NEVGNlx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBldmVudE1hcDogTWFwPHN0cmluZywgWE1MSHR0cFJlcXVlc3Q+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGluaXQodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJlc29sdmVcclxuICAgICAqIEBwYXJhbSByZWplY3RcclxuICAgICAqIEBwYXJhbSBhZCBcdTY2MkZcdTU0MjZcdTY2MkZcdTVFN0ZcdTU0NEFcdTc2ODRcdTY1NzBcdTYzNkVcdTUzNEZcdThCQUVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlWGhyKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhZDogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoeG1saHR0cC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeG1saHR0cC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDEyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoZGF0YSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck9uZUluRXZlbnRNYXAoeG1saHR0cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeG1saHR0cC5yZXNwb25zZVRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7eG1saHR0cC5yZXNwb25zZVRleHR9IFx1OEJGN1x1OTFDRFx1OEJENWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmNvZGUgPSA5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoZCwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJPbmVJbkV2ZW50TWFwKHhtbGh0dHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgheG1saHR0cC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogNDA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6IFwiXHU2NzBEXHU1MkExXHU1NjY4XHU2NzJBXHU1NENEXHU1RTk0XHVGRjBDXHU4QkY3XHU5MUNEXHU4QkQ1XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyT25lSW5FdmVudE1hcCh4bWxodHRwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHhtbGh0dHA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMjBcdTk2NjRcdTk2MUZcdTUyMTdcdTRFOEJcdTRFRjZcclxuICAgICAqIEBwYXJhbSB4bWxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjbGVhck9uZUluRXZlbnRNYXAoeG1sOiBYTUxIdHRwUmVxdWVzdCkge1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5mb3JFYWNoKChlLCB2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSA9PSB4bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFwLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2VuZChkYXRhOiBIdHRwU2VuZERhdGEpIHtcclxuICAgICAgICBpZiAoIWRhdGEubWV0aG9kKSBkYXRhLm1ldGhvZCA9IFwicG9zdFwiO1xyXG4gICAgICAgIGlmICghZGF0YS5yZXNwb25zZVR5cGUpIGRhdGEucmVzcG9uc2VUeXBlID0gXCJqc29uXCI7XHJcbiAgICAgICAgaWYgKCFkYXRhLmJhc2VVcmwpIGRhdGEuYmFzZVVybCA9IHRoaXMuYmFzZVVybDtcclxuXHJcbiAgICAgICAgbGV0IHVyaSA9IGRhdGEuYmFzZVVybCArIGRhdGEuYXBpO1xyXG5cclxuICAgICAgICBsZXQgc2VuZERhdGE6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhLmRhdGEpLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbmREYXRhLnB1c2goYCR7ZH09JHtkYXRhLmRhdGFbZF19YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZW5kRGF0YVN0cmluZyA9IHNlbmREYXRhLmpvaW4oXCImXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ldmVudE1hcC5nZXQodXJpICsgc2VuZERhdGFTdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YT8udHlwZSA9PSBDb25maWdHYW1lLkFwaVR5cGVBRCkge1xyXG4gICAgICAgICAgICBjb25zdCBhZERhdGEgPSBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChhZERhdGE/LmNvZGUpIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7YWREYXRhLmRhdGFbXCJtZXNzYWdlXCJdfVske2FkRGF0YS5jb2RlfV1gLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4aHIgPSB0aGlzLmNyZWF0ZVhocihyZXNvbHZlLCByZWplY3QsIGFkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VuZERhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGE/LmJlZm9yZSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5iZWZvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFkYXRhLmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuaGVhZGVycyA9IFtcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke0xvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnRva2VufWBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIGAlYyA9PT4gc2VuZCAlYyR7ZGF0YS5hcGl9ICVjJHtKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEpfWAsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6IzgyY2NkZDtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiNmOGMyOTE7Zm9udC13ZWlnaHQ6NzAwO2BcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YS5hcGkpIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5IaW50Vmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcm06IHsgdGV4dDogYGh0dHAgXHU1NzMwXHU1NzQwXHU0RTBEXHU4MEZEXHU0RTNBXHU3QTdBYCB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJpLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbn1gKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5zZW5kKHNlbmREYXRhU3RyaW5nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYXAuc2V0KHVyaSArIHNlbmREYXRhU3RyaW5nLCB4aHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGUsIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGUuY29kZSkge1xyXG4gICAgICAgICAgICByZWplY3QoZS5jb2RlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VuZERhdGE/LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmREYXRhLmVycm9yKGUuY29kZSwgZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBIdHRwRGF0YUNvbnRyb2wuZXJyb3IoZS5jb2RlLCBlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIGAlYyA8PT0gYmFjayAlYyR7dGhpcy5zZW5kRGF0YS5hcGl9IGAsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6I2I4ZTk5NDtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojNzhlMDhmO2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgZS5kYXRhXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5mb3J3YXJkKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IHRoaXMuc2VuZERhdGEuYXBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGUuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlRXZlbnQ6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcHJvY2Vzc0hhbmRsZXIoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vLyAgQWRkTGFuZFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZExhbmRWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29zdEljb24sIHRpcHM6XCJcdTRFRjdcdTY4M0NcdTU2RkVcdTY4MDdcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNvc3RJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb3N0Rm9udCwgdGlwczpcIlx1NEVGN1x1NjgzQ0ZvbnRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNvc3RGb250OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgaWQ6IG51bWJlcjsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBwcml2YXRlIGxhbmREYXRhOiBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcblxyXG4gICAgb25PcGVuZWQoZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZERhdGEgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwidW5sb2NrX2xhbmRfY29zdFwiKS52YWx1ZVtcclxuICAgICAgICAgICAgTGFuZFNlcnZpY2UubGlzdC5zaXplXHJcbiAgICAgICAgXSBhcyBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcbiAgICAgICAgdGhpcy5jb3N0SWNvbi5za2luID0gdGhpcy5sYW5kRGF0YS5vYmouaWNvbjtcclxuICAgICAgICB0aGlzLmNvc3RGb250LnZhbHVlID0gdGhpcy5sYW5kRGF0YS5jb3VudCArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvc3RfZ29sZFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5jb3VudCA+IFVzZXJJbmZvLmdvbGRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5MUQxXHU1RTAxXHU0RTBEXHU4REIzXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmREYXRhLm9iai5pZCA9PSBDb25maWdHYW1lLmRpYW1vbmRJZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEuY291bnQgPiBVc2VySW5mby5kaWFtb25kXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTRCQlx1NzdGM1x1NEUwRFx1OERCM1wiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFVubG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFVubG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVBRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWRkTGFuZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy8gIEJ1eVZpdGFsaXR5VmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV5Vml0YWxpdHlWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMYWJlbCwgdGlwczpcIlx1NEVGN1x1NjgzQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMYWJlbDogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VJY29uLCB0aXBzOlwiXHU0RUY3XHU2ODNDaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgY2FsbDogRnVuY3Rpb24gfTtcclxuICAgIHByaXZhdGUgY29zdEdvbGRDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIG9uT3BlbmVkKGU6IHsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgbGV0IGNvc3RHb2xkQ291bnQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwidml0YWxpdHlCdXlDb3N0R29sZFwiKS52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgdGhpcy5jb3N0R29sZENvdW50ID0gY29zdEdvbGRDb3VudDtcclxuICAgICAgICB0aGlzLnByaWNlTGFiZWwudGV4dCA9IGBcdTRFRjdcdTY4M0NcdUZGMUEke2Nvc3RHb2xkQ291bnR9YDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkJ1eVZpdGFsaXR5Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ1eUFkQnRuXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJidXlCdG5cIjpcclxuICAgICAgICAgICAgICAgIGlmIChVc2VySW5mby52aXRhbGl0eSA+PSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwidml0YWxpdHlMaW1pdFwiKS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU0RjUzXHU1MjlCXHU1REYyXHU2RUUxXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwiYnV5QnRuXCIgJiYgVXNlckluZm8uZ29sZCA8IHRoaXMuY29zdEdvbGRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5MUQxXHU1RTAxXHU0RTBEXHU4REIzXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAudml0YWxpdHlCdXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQubmFtZSA9PSBcImJ1eUJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGQ6IHsgZ29sZDogMDsgZGlhbW9uZDogMDsgYWR2ZXJ0aXNlVGltZXM6IDA7IHZpdGFsaXR5OiAwIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8udml0YWxpdHkgPSBkLnZpdGFsaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgTGFuZE9iaiB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuXHJcbi8vICBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMYWJlbCwgdGlwczpcIlx1NEVGN1x1NjgzQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMYWJlbDogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VJY29uLCB0aXBzOlwiXHU0RUY3XHU2ODNDaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZXNjLCB0aXBzOlwiXHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkZXNjOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgb2JqOiBMYW5kT2JqOyBjYWxsOiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIG9uT3BlbmVkKGU6IHsgb2JqOiBMYW5kT2JqOyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICBsZXQgbmV4dExhbmQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KGUub2JqLmxldmVsICsgMSk7XHJcbiAgICAgICAgdGhpcy5wcmljZUxhYmVsLnRleHQgPSBgXHU0RUY3XHU2ODNDXHVGRjFBJHtuZXh0TGFuZC5jb3N0LmNvdW50fWA7XHJcbiAgICAgICAgdGhpcy5wcmljZUljb24uc2tpbiA9IG5leHRMYW5kLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgY29uc29sZS5sb2coZSwgbmV4dExhbmQpO1xyXG4gICAgICAgIHRoaXMuZGVzYy50ZXh0ID0gYFx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1NTIzMCR7ZS5vYmoubGV2ZWwgKyAxfVx1N0VBN1x1RkYwQ1x1NjUzNlx1NzZDQVx1NTg5RVx1NTJBMCR7XHJcbiAgICAgICAgICAgIG5leHRMYW5kLmdhaW4gKiAxMDBcclxuICAgICAgICB9JSBcdTk0QkJcdTc3RjNcdTRFQTdcdTUxRkFcdTY5ODJcdTczODdcdTU4OUVcdTUyQTAke051bWJlcigobmV4dExhbmQucHJvYmFiaWxpdHkgKiAxMDApLnRvRml4ZWQoMikpfSVgO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVwZ3JhZGVCdG5cIjpcclxuICAgICAgICAgICAgY2FzZSBcInVwZ3JhZGVBZEJ0blwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRVcGdyYWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5vYmouaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUgPT0gXCJ1cGdyYWRlQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwidXBncmFkZUFkQnRuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GaWVsZExldmVsVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzRGVzY1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNEZXNjVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGFuZWxOb2RlLCB0aXBzOlwiXHU2RURBXHU1MkE4XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIHBhbmVsTm9kZTogTGF5YS5QYW5lbDtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbE5vZGUudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc0Rlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIik7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IEFwcEV2ZW50TWFwIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzUmV3YXJkVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1Jld2FyZFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmludml0ZUJveCwgdGlwczpcIlx1NjU3NFx1NjU3MFx1N0M3Qlx1NTc4Qlx1NzkzQVx1NEY4QlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaW52aXRlQm94OiBMYXlhLkJveDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppbnZpdGVJbnB1dCwgdGlwczpcIlx1OEY5M1x1NTE2NVx1OTA4MFx1OEJGN1x1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaW52aXRlSW5wdXQ6IExheWEuVGV4dElucHV0O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlTGlzdCwgdGlwczpcIlx1OEY5M1x1NTE2NVx1OTA4MFx1OEJGN1x1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMaXN0OiBMYXlhLkxpc3Q7XHJcblxyXG4gICAgcHJpdmF0ZSBpbnZpdGVMaXN0OiBJbnZpdGVEYXRhW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHJld2FyZFZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwcm9wb3J0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsOiBGdW5jdGlvbjtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LmFycmF5ID0gbmV3IEFycmF5KDMpO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVySXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQoZGF0YTogeyBsaXN0OiBbXTsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuaW52aXRlTGlzdCA9IGRhdGEubGlzdCB8fCBbXTtcclxuICAgICAgICB0aGlzLmNhbGwgPSBkYXRhLmNhbGw7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmludml0ZVBlb3BsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmludml0ZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZXdhcmRWYWx1ZSA9IChcclxuICAgICAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIkludml0YXRpb25fcmV3YXJkc1wiKS52YWx1ZSBhcyBSZXdhcmRDdXJyZW5jeUJhc2VcclxuICAgICAgICApLmNvdW50O1xyXG5cclxuICAgICAgICBjb25zdCB3aXRoZHJhd2FsID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxcIikudmFsdWUgYXMgc3RyaW5nW107XHJcbiAgICAgICAgdGhpcy5wcm9wb3J0aW9uID0gTnVtYmVyKHdpdGhkcmF3YWxbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1Jld2FyZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnZpdGVfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnd4U2hhcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN1Ym1pdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gKGUudGFyZ2V0IGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpdGhkcmF3KGkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU3M0IwXHJcbiAgICAgKiBAcGFyYW0gaVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB3aXRoZHJhdyhpOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlUmVjZWl2ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgaW5kZXg6IGkgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjNEMFx1NzNCMFx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlTGlzdFtpXS5yZWNlaXZlZFJld2FyZCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidG9wXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU3QjJDJHtpICsgMX1cdTRGNERgO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZV9ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkVmFsdWUgLyB0aGlzLnByb3BvcnRpb25cclxuICAgICAgICB9YDtcclxuXHJcbiAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX2V4dHJhY3RBY3RpdmUucG5nXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaW52aXRlTGlzdC5sZW5ndGggPiBpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludml0ZUxpc3RbaV0ucmVjZWl2ZWRSZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfY2FzaERvbmUucG5nXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IGk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYzRDBcdTRFQTRcdTdFRDFcdTVCOUFcdTYyMTFcdTc2ODRcdTkwODBcdThCRjdcdTRFQkFcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnZpdGVJbnB1dC50ZXh0IHx8ICF0aGlzLmludml0ZUlucHV0LnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5MDgwXHU4QkY3XHU3ODAxXHU0RTBEXHU4MEZEXHU0RTNBXHU3QTdBXHVGRjAxXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRJbnZpdGVQZW9wbGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLmludml0ZUlucHV0LnRleHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5pbnZpdGVQZW9wbGUgPSB0aGlzLmludml0ZUlucHV0LnRleHQ7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1N0VEMVx1NUI5QVx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsKSB0aGlzLmNhbGwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIik7XHJcbiAgICB9XHJcbn1cclxuIiwgImNvbnN0IGVudW0gRXJyb3JDb2RlIHtcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTRFM0FcdTdBN0EgKi9cclxuICAgIF8yMDAxID0gMjAwMSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JDb2RlO1xyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgRXJyb3JDb2RlIGZyb20gXCJzcmMvY29tbW9uL0Vycm9yQ29kZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UsIHsgTGFuZE9iaiB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxhbnREYXRhQmFzZSB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgTWFpblZpZXcsIHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwic3JjL3ZpZXcvTWFpblZpZXdcIjtcclxuaW1wb3J0IHsgU2hvcFZpZXdEYXRhIH0gZnJvbSBcInNyYy92aWV3L1Nob3BWaWV3XCI7XHJcblxyXG4vLyAgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbi8qKlxyXG4gKiBcdTc1MzBcdTU3MzBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlpY29uICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1ODI4Mlx1NzBCOSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBmaWVsZE5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NjcwOVx1NjkwRFx1NzI2OVx1NjVGNlx1NzY4NFx1OTYzNFx1NUY3MSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBzaGFkb3c6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZWxkRW1wdHlSZXMsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTU0MEVcdTU3MUZcdTU3MzBcdTdFQjlcdTc0MDZcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBmaWVsZEVtcHR5UmVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIFx1N0I0OVx1N0VBN1x1NTZGRVx1NzI0NyAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBsdk5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTAxMlx1OEJBMVx1NjVGNlx1NUJCOVx1NTY2OCovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHRpbWVCb3g6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIFx1NTAxMlx1OEJBMVx1NjVGNmxhYmVsICovXHJcbiAgICBwcml2YXRlIGNvdW50RG93bkxiOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU4OEM1XHU5OTcwICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHRvcFN0YXRlSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1ODhDNVx1OTk3MCAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSB1cEFuaTogTGF5YS5BbmltYXRpb24gPSBudWxsO1xyXG4gICAgLyoqIFx1NTFDRlx1NjVGNlx1OTVGNFx1NjNEMFx1NzkzQSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSByZWR1Y2VUaW1lOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6dW5sb2NrSWNvbiwgdGlwczpcIlx1NjJEM1x1NUM1NVx1NTcxRlx1NTczMGljb25cdTU3MzBcdTU3NDBcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSB1bmxvY2tJY29uOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZWxkSWQsIHRpcHM6XCJcdTU3MUZcdTU3MzBpZFwiLCB0eXBlOk51bWJlcix9Ki9cclxuICAgIGZpZWxkSWQ6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOGljb25cdTZENkVcdTUyQThcdTUyQThcdTc1M0IgKi9cclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uVHdlZW46IExheWEuVGltZUxpbmU7XHJcbiAgICAvKiogXHU2OTBEXHU3MjY5XHU1MkE4XHU3NTNCICovXHJcbiAgICBwcml2YXRlIHBsYW50SWNvblR3ZWVuOiBMYXlhLlRpbWVMaW5lO1xyXG5cclxuICAgIC8qKiBcdTVFRkFcdTdCNTFcdTRFMkQgKi9cclxuICAgIGJ1aWxkSW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1NzI4XHU1OTE2XHU5NzYyICovXHJcbiAgICBpc091dGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1M0VGXHU1MDc3ICovXHJcbiAgICBjYW5TdGVhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1ODhBQlx1NTA3N1x1NEVCQVx1NzY4NHVpZCAqL1xyXG4gICAgc3RlYWxVaWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGRhdGE6IExhbmRPYmo7XHJcblxyXG4gICAgbWFpblZpZXdDb206IE1haW5WaWV3O1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgbGFuZExpc3Q6IE1hcDxudW1iZXIsIExhbmRPYmo+O1xyXG4gICAgLyoqIFx1NjIxMFx1NzE5Rlx1NzY4NFx1NjVGNlx1OTVGNCAqL1xyXG4gICAgcHJpdmF0ZSBtYXR1cmVUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLmZpZWxkTm9kZSA9IDxMYXlhLkltYWdlPnRoaXMub3duZXI7XHJcbiAgICAgICAgdGhpcy5jb3VudERvd25MYiA9IHRoaXMudGltZUJveC5nZXRDaGlsZEJ5TmFtZShcImNvdW50RG93bkxiXCIpIGFzIGFueTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuaWNvbi5za2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGltZUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sdk5vZGUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBBbmkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVkdWNlVGltZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cEFuaS5vbihMYXlhLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBBbmkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWF0dXJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMudXBkYXRlX2ZpZWxkKVxyXG4gICAgdXBkYXRlRGF0YShkYXRhPzogeyBsaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPiB9KSB7XHJcbiAgICAgICAgaWYgKGRhdGE/Lmxpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdCA9IGRhdGEubGlzdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0ID0gTGFuZFNlcnZpY2UubGlzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmljb24ueSA9IDE2NDtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkTm9kZS5za2luID0gdGhpcy5maWVsZEVtcHR5UmVzO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKEJvb2xlYW4odGhpcy5kYXRhLnByb2R1Y3RJZCkpO1xyXG4gICAgICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhbnRJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCAmJiB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgKiAxMDAwICsgRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIC8vXHU2MjEwXHU5NTdGXHU0RTJEXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb24uc2tpbiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldCh0aGlzLmRhdGEucHJvZHVjdElkKS5ncm93aW5nSWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZUljb25Ta2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbnRJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfd2FzdGVsYW5kLnBuZ2A7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gdGhpcy51bmxvY2tJY29uO1xyXG4gICAgICAgICAgICB0aGlzLmljb24ueSA9IDExMztcclxuICAgICAgICAgICAgdGhpcy5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUaW1lQm94KGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuPy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RWljb25cdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93SWNvbihzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU3MkI2XHU2MDAxaWNvblx1N0VCOVx1NzQwNlxyXG4gICAgICogQHBhcmFtIHNraW5UeXBlIDEgXHU2RDQ3XHU2QzM0XHU1MkEwXHU5MDFGXHU3MkI2XHU2MDAxIDIgXHU1RUZBXHU3QjUxXHU3MkI2XHU2MDAxIDMgXHU2MjEwXHU3MTlGXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlSWNvblNraW4oc2tpblR5cGU6IDEgfCAyIHwgMykge1xyXG4gICAgICAgIHN3aXRjaCAoc2tpblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfc3BlZWRVcC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19sYW5kVXBkYXRlQnRuMi5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19oYXJ2ZXN0LnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5ODc2XHU5MEU4aWNvblx1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICB0b3BTdGF0ZUljb25BbmkocGxheTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnkgPSAtMTA3O1xyXG4gICAgICAgIGlmICghdGhpcy50b3BTdGF0ZUljb25Ud2Vlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuID0gTGF5YS5UaW1lTGluZS50byhcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLFxyXG4gICAgICAgICAgICAgICAgeyB5OiB0aGlzLnRvcFN0YXRlSWNvbi55IC0gNTAgfSxcclxuICAgICAgICAgICAgICAgIDgwMCxcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKS50byh0aGlzLnRvcFN0YXRlSWNvbiwgeyB5OiB0aGlzLnRvcFN0YXRlSWNvbi55IH0sIDgwMCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0ZWFsVWlkICYmICF0aGlzLmRhdGE/LmNhblN0ZWFsKSB7XHJcbiAgICAgICAgICAgIHBsYXkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IHBsYXk7XHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5yZXN1bWUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU2NUY2XHU5NUY0XHU1QkI5XHU1NjY4XHU3Njg0XHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1RpbWVCb3goc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RVx1OTYzNFx1NUY3MVx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dTaGFkb3dJY29uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNoYWRvdy52aXNpYmxlID0gc2hvdztcclxuICAgICAgICB0aGlzLnNoYWRvdy5hY3RpdmUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2OTBEXHU3MjY5XHU1MkE4XHU3NTNCXHU2NEFEXHU2NTNFXHJcbiAgICAgKiBAcGFyYW0gcGxheVxyXG4gICAgICovXHJcbiAgICBwbGFudEljb25BbmkocGxheTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGFudEljb25Ud2Vlbikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuID0gTGF5YS5UaW1lTGluZS50byh0aGlzLmljb24sIHsgc2tld1g6IDMgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLmljb24sIHsgc2tld1g6IC0zIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICAudG8odGhpcy5pY29uLCB7IHNrZXdYOiAwIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuLnBsYXkobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGxheSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmljb24uc2tld1ggPSAwO1xyXG5cclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKE1hdGgucmFuZG9tKCkgKiAxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYW50SWNvblR3ZWVuLnBsYXkobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxhbnRJY29uVHdlZW4ucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUwMTJcdThCQTFcdTY1RjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYi50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyh0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID0gTWF0aC5jZWlsKCh0aGlzLm1hdHVyZVRpbWUgLSBEYXRlLm5vdygpKSAvIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA8IDApIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93bkxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTYyMTBcdTcxOUYgXCIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YT8ucHJvZHVjdElkKT8ubWF0dXJlSWNvbjtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1aWxkSW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1N0I0OVx1N0VBN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxldmVsKCkge1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfbGV2ZWwke3RoaXMuZGF0YS5sZXZlbH0ucG5nYDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTFDRlx1NjVGNlx1OTVGNFx1ODg2OFx1NzNCMFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlZHVjZVRpbWVBbmk6IExheWEuVGltZUxpbmU7XHJcbiAgICAvKipcclxuICAgICAqIFx1NTJBMFx1OTAxRlxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5sYW5kX3NwZWVkX3VwKVxyXG4gICAgcHJpdmF0ZSBzcGVlZFVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGE/Lm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCAtPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiYWxsX3NwZWVkX3VwX3RpbWVcIilcclxuICAgICAgICAgICAgICAgIC52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCAqIDEwMDAgKyBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygxMSk7XHJcblxyXG4gICAgICAgICAgICAvL1x1NTFDRlx1NjVGNlx1OTVGNFx1NjNEMFx1NzkzQVxyXG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZS5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZS55ID0gLTM5O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVkdWNlVGltZUFuaSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZUFuaSA9IExheWEuVGltZUxpbmUudG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeTogLTY5LCBhbHBoYTogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDMwMFxyXG4gICAgICAgICAgICAgICAgKS50byhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAtMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMDBcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWVBbmkucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1N0E3QVx1NTcxRlx1NTczMFxyXG4gICAgICovXHJcbiAgICBjbGVhckZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGEucHJvZHVjdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmljb24uc2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DbGljaygpIHtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlYWxGb29kKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgLy9cdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVpbGRJbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KHRoaXMuZGF0YS5sZXZlbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxldmVsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MudHVkaXNoZW5namkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBBbmkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cEFuaS5wbGF5KDAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU2RUUxXHU3RUE3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHU1REYyXHU2RUUxXHU3RUE3YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTUyQTBcdTkwMUZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNwZWVkVXBWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbih0aGlzLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTY1MzZcdTgzQjdcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW50QW1vdW50ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZCA9IHRoaXMuZGF0YS5wcm9kdWN0SWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRHYXRoZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb2xkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmVydGlzZVRpbWVzOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50QW1vdW50ID0gZC5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5hZGQocHJvZHVjdElkLCBkLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5zaG91Y2FpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kID0gZC5yZXdhcmREaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1x1NjUzNlx1ODNCN1x1NzY4NFx1NjkwRFx1NzI2OVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGFudE9iaiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChwcm9kdWN0SWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0OiBhbnlbXSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHBsYW50T2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBwbGFudEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTgzQjdcdTVGOTdcdTc2ODRcdTk0QkJcdTc3RjNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV3YXJkRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnR2FtZS5kaWFtb25kSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkRGlhbW9uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldEZsb2F0UmV3YXJkT2JqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogdGhpcy5vd25lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBsYW50T2JqLmdhaW4uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN3aXRjaCAoZC5vYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2FzZSBDb25maWdHYW1lLmRpYW1vbmRJZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFVzZXJJbmZvLmRpYW1vbmQgKz0gZC5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjYXNlIENvbmZpZ0dhbWUuZ29sZElkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgVXNlckluZm8uZ29sZCArPSBkLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS51cGRhdGVBbGxTdGF0ZUljb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9cdTc5Q0RcdTgzRENcclxuICAgICAgICAgICAgICAgIHRoaXMuc293KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1x1ODlFM1x1OTUwMVx1NTcxRlx1NTczMFxyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQWRkTGFuZFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5maWVsZElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZmllbGRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0dXJlVGltZUxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhbmRTZXJ2aWNlLmFkZExhbmQodGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlSGl0TGFuZEFkZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc293KCkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywge1xyXG4gICAgICAgICAgICBwYXJtOiA8U2hvcFZpZXdEYXRhPntcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgcGFybTogeyBsYW5kSWQ6IHRoaXMuZmllbGRJZCB9LFxyXG4gICAgICAgICAgICAgICAgY2FsbDogKGQ6IFBsYW50RGF0YUJhc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvd1BsYW50KGQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzb3dQbGFudChkOiBQbGFudERhdGFCYXNlKSB7XHJcbiAgICAgICAgdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKS5wcm9kdWN0SWQgPSBkLmJhc2UuaWQ7XHJcbiAgICAgICAgdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKS5tYXR1cmVUaW1lTGVmdCA9IGQuYmFzZS5tYXR1cmVfdGltZTtcclxuICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBkLmJhc2UubWF0dXJlX3RpbWUgKiAxMDAwICsgRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKTtcclxuICAgICAgICB0aGlzLnJlbmRlckRhdGEoKTtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnpob25nemhpKTtcclxuICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbih0aGlzLmRhdGEuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MDc3XHU4M0RDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgc3RlYWxGb29kKGRhdGE6IExhbmRPYmopIHtcclxuICAgICAgICBpZiAoIWRhdGEucHJvZHVjdElkIHx8IGRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblN0ZWFsIHx8ICh0aGlzLnN0ZWFsVWlkICYmICF0aGlzLmRhdGE/LmNhblN0ZWFsKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NURGMlx1N0VDRlx1NEUwRFx1NTNFRlx1NTA3N1wiKTtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTdFRDlcdTYyMTFcdTc1NTlcdTcwQjlcdTU0MjdcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5nb3VqaWFvc2hlbmcpO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAvL1x1NTA3N1x1ODNEQ1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTdGVhbCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wibGFuZFN0ZWFsXCJdPntcclxuICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIHVpZDogdGhpcy5zdGVhbFVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFudElkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdml0YWxpdHk6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAvKiogXHU5ODlEXHU1OTE2XHU1OTU2XHU1MkIxICovXHJcbiAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gZC52aXRhbGl0eTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU2NTM2XHU4M0I3XHU3Njg0XHU2OTBEXHU3MjY5XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV3YXJkTGlzdDogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZC5wbGFudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3Muc2hvdWNhaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UuYWRkKHRoaXMuZGF0YS5wcm9kdWN0SWQsIGQuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KGQucGxhbnRJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogZC5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTg5RFx1RkYwQ1x1ODhBQlx1NzJEN1x1NTRBQ1x1NEU4Nn5+flx1NkNBMVx1NTA3N1x1Nzc0MH5cIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU5ODlEXHU1OTE2XHU3Njg0XHU5NEJCXHU3N0YzXHU1OTU2XHU1MkIxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQucmV3YXJkRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5kaWFtb25kSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGQucmV3YXJkRGlhbW9uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJld2FyZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKChjb2RlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IEVycm9yQ29kZS5fMjAwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIExheWEuVHdlZW4uY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbj8uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlLCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYW50RGF0YUJhc2UgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vKipcclxuICogXHU5OERFXHU5MUQxXHU1RTAxXHU2NTcwXHU5MUNGXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdldEZsb2F0UmV3YXJkT2JqIHtcclxuICAgIC8qKiBcdThENzdcdTcwQjlcdTUzQzJcdTgwMDNcdTgyODJcdTcwQjkgXHU5RUQ4XHU4QkE0XHU0RjFBXHU2MjhBXHU2NTcwXHU5MUNGXHU3Njg0XHU0RTFDXHU4OTdGXHU1MkEwXHU1MjMwXHU4RkQ5XHU5MUNDXHVGRjBDXHU2MjQwXHU0RUU1XHU0RTBEXHU4OTgxXHU2REZCSEJveFx1NjIxNlx1NjYyRlZCb3ggKi9cclxuICAgIG5vZGU6IExheWEuQm94O1xyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbGlzdDoge1xyXG4gICAgICAgIC8qKiBcdTg5RTNcdTY3OTBcdTc2ODRcdThENDRcdTZFOTBcdTY1NzBcdTYzNkUgXHU1RkM1XHU5ODdCXHU4OTgxXHU2NzA5aWNvbiAqL1xyXG4gICAgICAgIG9iajogYW55O1xyXG4gICAgICAgIC8qKiBcdTY1NzBcdTkxQ0YgKi9cclxuICAgICAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgICAgIC8qKiBcdTdFQzhcdTcwQjlcdTRGNERcdTdGNkUgMSBcdTkxRDFcdTVFMDEgMiBcdTk0QkJcdTc3RjMgMyBcdTRFRDNcdTVFOTMgKi9cclxuICAgICAgICBwb3NUeXBlOiAxIHwgMiB8IDM7XHJcbiAgICB9W107XHJcbiAgICBub3RGbHk/OiBib29sZWFuO1xyXG4gICAgLyoqIFx1NTJBOFx1NzUzQlx1NjRBRFx1NjUzRVx1N0VEM1x1Njc1Rlx1NTZERVx1OEMwMyAqL1xyXG4gICAgY2FsbEJhY2s/OiB7ICgpOiB2b2lkIH07XHJcbn1cclxuXHJcbi8vICBNYWluVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgc3RhdGljIGluc3Q6IE1haW5WaWV3O1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRMYW5kTGF5ZXIsIHRpcHM6XCJcdTYyRDNcdTVDNTVcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZExhbmRMYXllcjogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaWFtb25kTm9kZSwgdGlwczpcIlx1OTRCQlx1NzdGM1x1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZGlhbW9uZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvbGROb2RlLCB0aXBzOlwiXHU5MUQxXHU1RTAxXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb2xkTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YXZhdGFyTm9kZSwgdGlwczpcIlx1NTkzNFx1NTBDRlx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYXZhdGFyTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bGFuZEJveCwgdGlwczpcIlx1NTcxRlx1NTczMFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGFuZEJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNlbnRlckJveCwgdGlwczpcIlx1NEUyRFx1OTVGNFx1NTMzQVx1NTdERlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY2VudGVyQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6b3JkZXJCb3gsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG9yZGVyQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tQm94LCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2MzA5XHU5NEFFXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6bGFuZFVwTGF5ZXIsIHRpcHM6XCJcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTdBOTdcdTUzRTNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxhbmRVcExheWVyOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wTGF5ZXJPblN0YWdlLCB0aXBzOlwiXHU1NzI4XHU0RTNCXHU1NzNBXHU2NjZGXHU0RTBBXHU5NzYyXHU3Njg0XHU0RTAwXHU0RTJBXHU2NzAwXHU0RTBBXHU1QzQyXHU3Njg0XHU3QTdBXHU1QzQyXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BMYXllck9uU3RhZ2U6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRvcEdvbGRJY29uLCB0aXBzOlwiXHU5ODc2XHU5MEU4XHU5MUQxXHU1RTAxaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdG9wR29sZEljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRvcERpYW1vbmRJY29uLCB0aXBzOlwiXHU5ODc2XHU5MEU4XHU5NEJCXHU3N0YzaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdG9wRGlhbW9uZEljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOndhcmVob3VzZUJ0biwgdGlwczpcIlx1NEVEM1x1NUU5M1x1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgd2FyZWhvdXNlQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTptb25leUxiLCB0aXBzOlwiXHU3RUEyXHU1MzA1XHU2NTg3XHU2ODYzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBtb25leUxiOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuXHJcbiAgICAvL1x1ODNCN1x1NUY5N1x1NTk1Nlx1NTJCMVx1RkYwQ1x1OThERVx1NzI2OVx1NTRDMVx1NzZGOFx1NTE3M1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdldFJld2FyZFByZWZhYiwgdGlwczpcIlx1ODNCN1x1NUY5N1x1NTk1Nlx1NTJCMVx1OTg4NFx1OEJCRVwiLCB0eXBlOlByZWZhYn0qL1xyXG4gICAgcHJpdmF0ZSBnZXRSZXdhcmRQcmVmYWI6IExheWEuUHJlZmFiID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmbG9hdFJld2FyZEljb24sIHRpcHM6XCJcdTU5NTZcdTUyQjFcdTk4REVcdTUyQThcdTc1M0JpY29uXCIsIHR5cGU6UHJlZmFifSovXHJcbiAgICBwcml2YXRlIGZsb2F0UmV3YXJkSWNvbjogTGF5YS5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb0hvbWVCdG4sIHRpcHM6XCJcdThGRDRcdTU2REVcdTVCQjZcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGdvSG9tZUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YW55RG9vciwgdGlwczpcIlx1NTNCQlx1OEY2Q1x1OEY2Q1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYW55RG9vcjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlCb3gsIHRpcHM6XCJcdTRGNTNcdTUyOUJcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5Qm94OiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp2aXRhbGl0eUJ1eUJ0biwgdGlwczpcIlx1NEY1M1x1NTI5Qlx1OEQyRFx1NEU3MFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdml0YWxpdHlCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU1QkEwXHU3MjY5XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0Qm94LCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NEVGQlx1NTJBMVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRhc2tCb3gsIHRpcHM6XCJcdTRFRkJcdTUyQTFcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRhc2tCb3g6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHJcbiAgICAvKiogQHByb3Age25hbWU6c3RlcDEsIHRpcHM6XCJcdTk3MDBcdTg5ODFcdTVGMTVcdTVCRkNcdTc2ODRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHN0ZXAxOiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3RlcDIsIHRpcHM6XCJcdTk3MDBcdTg5ODFcdTVGMTVcdTVCRkNcdTc2ODRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHN0ZXAyOiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3RlcDMsIHRpcHM6XCJcdTk3MDBcdTg5ODFcdTVGMTVcdTVCRkNcdTc2ODRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHN0ZXAzOiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3RlcDQsIHRpcHM6XCJcdTk3MDBcdTg5ODFcdTVGMTVcdTVCRkNcdTc2ODRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHN0ZXA0OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3RlcDUsIHRpcHM6XCJcdTk3MDBcdTg5ODFcdTVGMTVcdTVCRkNcdTc2ODRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHN0ZXA1OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3RlcDYsIHRpcHM6XCJcdTk3MDBcdTg5ODFcdTVGMTVcdTVCRkNcdTc2ODRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHN0ZXA2OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3RlcDcsIHRpcHM6XCJcdTk3MDBcdTg5ODFcdTVGMTVcdTVCRkNcdTc2ODRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHN0ZXA3OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3RlcDgsIHRpcHM6XCJcdTk3MDBcdTg5ODFcdTVGMTVcdTVCRkNcdTc2ODRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHN0ZXA4OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3RlcDksIHRpcHM6XCJcdTk3MDBcdTg5ODFcdTVGMTVcdTVCRkNcdTc2ODRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHN0ZXA5OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1N0VDNFx1NEVGNiBcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgbGFuZExpc3Q6IEZpZWxkQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgICAvKipcdTY2MkZcdTU0MjZcdTU3MjhcdTU5MTZcdTk3NjIgKi9cclxuICAgIGlzT3V0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTc5QkJcdTVGMDBcdTVCQjZcdTc2ODRcdTY1RjZcdTk1RjQgKi9cclxuICAgIHByaXZhdGUgb3V0ZXJUaW1lOiBudW1iZXI7XHJcbiAgICAvKipcdTUzQkJcdTU5N0RcdTUzQ0IgXHU1QkI2XHU1MDEyXHU4QkExXHU2NUY2ICovXHJcbiAgICBvdXRDb3VudERvd25OdW1iZXIgPSA2MDtcclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIE1haW5WaWV3Lmluc3QgPSB0aGlzO1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJyZXMvbG9hZGluZ0JnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfd29vZHRpdGxlLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmVIb3VzZUJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmViZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3NoZWxmLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfcG9wVXBCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2xhbmRCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvdXNldG9wLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyBcInJlcy9pbWdfaG9tZXBhZ2VCZzMucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2ltZ19ob21lcGFnZUJnMi5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX2hvbWVwYWdlQmcxLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfZmFybWxhbmRMb2dvLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5wbmdcIixcclxuICAgICAgICBdLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZW5kc1dpdGgoXCJwbmdcIikpIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhc2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IG9rID0gZmFsc2UsXHJcbiAgICAgICAgICAgIHN0ZXAgPSAwO1xyXG4gICAgICAgIGlmIChVc2VySW5mby5ndWlkZURhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLmd1aWRlRGF0YS5zcGxpdChcIlwiKS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZCA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXArKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChzdGVwID49IDkpIHtcclxuICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVVzZXJJbmZvLmd1aWRlRGF0YS5sZW5ndGggfHwgIW9rKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5HdWlkZVZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA5LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy50b3BMYXllck9uU3RhZ2UpO1xyXG4gICAgICAgICh0aGlzLm9yZGVyQm94LmdldENoaWxkQnlOYW1lKFwiZnJpZW5kX25hbWVcIikgYXMgTGF5YS5MYWJlbCkudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudml0YWxpdHlCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ29Ib21lQnRuLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxhbmRCb3gubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LnB1c2godGhpcy5sYW5kQm94LmdldENoaWxkQXQoeCkuZ2V0Q29tcG9uZW50KEZpZWxkQ29tcG9uZW50KSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0ubWFpblZpZXdDb20gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYW5kTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmZpZWxkSWQgLSBiLmZpZWxkSWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX2ZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVIaXRMYW5kQWRkKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlndXJlQW5pRXZlbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpZ3VyZUFuaUV2ZW50KCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGZBbmkgPSB0aGlzLmZpZ3VyZUJveEFuaS5nZXRDaGlsZEJ5TmFtZShcImZpZ3VyZV9hbmlcIikgYXMgTGF5YS5BbmltYXRpb24sXHJcbiAgICAgICAgLy8gICAgIGZBbmkzID0gdGhpcy5maWd1cmVCb3hBbmkuZ2V0Q2hpbGRCeU5hbWUoXCJmaWd1cmUzX2FuaVwiKSBhcyBMYXlhLkFuaW1hdGlvbixcclxuICAgICAgICAvLyAgICAgZkFuaTQgPSB0aGlzLmZpZ3VyZUJveEFuaS5nZXRDaGlsZEJ5TmFtZShcImZpZ3VyZTRfYW5pXCIpIGFzIExheWEuQW5pbWF0aW9uLFxyXG4gICAgICAgIC8vICAgICBmQW5pMSA9IHRoaXMuZmlndXJlQm94MkFuaS5nZXRDaGlsZEJ5TmFtZShcImZpZ3VyZTFfYW5pXCIpIGFzIExheWEuQW5pbWF0aW9uLFxyXG4gICAgICAgIC8vICAgICBmQW5pMiA9IHRoaXMuZmlndXJlQm94MkFuaS5nZXRDaGlsZEJ5TmFtZShcImZpZ3VyZTJfYW5pXCIpIGFzIExheWEuQW5pbWF0aW9uLFxyXG4gICAgICAgIC8vICAgICBmQW5pNSA9IHRoaXMuZmlndXJlQm94MkFuaS5nZXRDaGlsZEJ5TmFtZShcImZpZ3VyZTVfYW5pXCIpIGFzIExheWEuQW5pbWF0aW9uO1xyXG4gICAgICAgIC8vIGZBbmkzLmFscGhhID0gMDtcclxuICAgICAgICAvLyBmQW5pNC5hbHBoYSA9IDA7XHJcbiAgICAgICAgLy8gZkFuaTEuYWxwaGEgPSAwO1xyXG4gICAgICAgIC8vIGZBbmkyLmFscGhhID0gMDtcclxuICAgICAgICAvLyBmQW5pNS5hbHBoYSA9IDA7XHJcbiAgICAgICAgLy8gZkFuaS5hbHBoYSA9IDA7XHJcbiAgICAgICAgLy8gTGF5YS5Ud2Vlbi50byhmQW5pLCB7IGFscGhhOiAxIH0sIDYwMCk7XHJcbiAgICAgICAgLy8gTGF5YS5Ud2Vlbi50byhmQW5pLCB7IHg6IC02MDAsIHk6IDMyOCB9LCAxMDAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYzRDBcdTc5M0FcdTY2M0VcdTc5M0FcdTYyNjlcdTVFRkFpY29uXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUhpdExhbmRBZGQoKSB7XHJcbiAgICAgICAgbGV0IGd1aWRMYW5kOiBGaWVsZENvbXBvbmVudDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sYW5kTGlzdFt4XS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWd1aWRMYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VpZExhbmQgPSB0aGlzLmxhbmRMaXN0W3hdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1MTY4XHU0RjUzXHU1MkEwXHU5MDFGaWNvbiBcdTU0OEMgXHU2NTM2XHU4M0RDaWNvbiBcdTY2ODJcdTY1RjZcdTYyOEFcdTRFMjRcdTRFMkFcdTY1QjlcdTZDRDVcdTUxOTlcdTU3MjhcdTRFMDBcdThENzdcdTRFODZcclxuICAgICAqL1xyXG4gICAgdXBkYXRlQWxsU3RhdGVJY29uKGxhbmRJZD86IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5sYW5kTGlzdFt4XS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaWQgPT0gbGFuZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFsYW5kSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5wcm9kdWN0SWQgJiYgZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0udG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMubGFuZExpc3RbeF0uZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnByb2R1Y3RJZCAmJiAhZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zZXRTdGF0ZUljb25Ta2luKDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0udG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGRFbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgQ29yZS5vYnNlcnZhYmxlUHJvcGVydHlcclxuICAgICAgICAgICAgLndhdGNoKFVzZXJJbmZvLCB0aGlzKVxyXG4gICAgICAgICAgICAua2V5KFwiZGlhbW9uZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFtb25kTm9kZS52YWx1ZSA9IGU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1vbmV5TGIudmFsdWUgPSAoZSAqIFVzZXJJbmZvLnByb3BvcnRpb24pLnRvRml4ZWQoMikgKyBcIlwiO1xyXG4gICAgICAgICAgICAgICAgLy9cdTRFMERcdTU2REJcdTgyMERcdTRFOTRcdTUxNjVcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uZXlMYi52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgKGUgKiBVc2VySW5mby5wcm9wb3J0aW9uKS50b1N0cmluZygpLm1hdGNoKC9eXFxkKyg/OlxcLlxcZHswLDJ9KT8vKSArIFwiXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJnb2xkXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvbGROb2RlLnZhbHVlID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImF2YXRhclwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcIndhcmVQZXRJZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBldEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJkb2dcIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5nZXQoZSkuaWNvbjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwicGV0Vml0YWxpdHlcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8ud2FyZVBldElkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAvL1x1NjZGNFx1NjVCMFx1NUJBMFx1NzI2OVx1NEY1M1x1NTI5QlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGV0Qm94LnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFyID0gdGhpcy5wZXRCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYm94XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInZpdGFsaXR5X2JhclwiKSBhcyBMYXlhLkltYWdlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSBlIC8gVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmdldChVc2VySW5mby53YXJlUGV0SWQpLnZpdGFsaXR5X21heDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NhbGUgPiAxKSBzY2FsZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhci53aWR0aCA9IDEzMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiZGlnZXN0Q291bnREb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMuZGlnZXN0Q291bnREb3duKTtcclxuICAgICAgICAgICAgICAgIC8vXHU1QkEwXHU3MjY5XHU5NzAwXHU4OTgxXHU2RDg4XHU4MDE3XHU5OERGXHU3MjY5XHU1MDEyXHU4QkExXHU2NUY2XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXRCb3gudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZShlICogMTAwMCwgdGhpcywgdGhpcy5kaWdlc3RDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwidml0YWxpdHlcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2aXRhbGl0eSA9IGUgLyBDb25maWdHYW1lLnVzZXJWaXRhbGl0eUxpbWl0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHZpdGFsaXR5ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXRhbGl0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudml0YWxpdHlCdXlCdG4ubW91c2VFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudml0YWxpdHlCdXlCdG4uZ3JheSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5tb3VzZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudml0YWxpdHlCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMudml0YWxpdHlCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPSAyNjggKiB2aXRhbGl0eTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTGFuZExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU9yZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVCQTBcdTcyNjlcdTdCMTFcdTZEODhcdTUzMTZcdTVCOUFcdTY1RjZcdTU2NjhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkaWdlc3RDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBwZXQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KFVzZXJJbmZvLndhcmVQZXRJZCk7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLnBldFZpdGFsaXR5IC0gcGV0LnZpdGFsaXR5X2NvbnN1bWUgPD0gMCkge1xyXG4gICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgLT0gcGV0LnZpdGFsaXR5X2NvbnN1bWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IENvbmZpZ0dhbWUucGV0RGlnZXN0SW50ZXJ2YWxUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTGFuZExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGFza1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2lnbkluXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2lnbkluVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1haWxcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1haWwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2hvcFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaGVhZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNldHRpbmdWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2FyZWhvdXNlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ1eV9mZWVkXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb2dfaG91c2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAxIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvZ1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDIgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlhbW9uZF9ib3hcIjpcclxuICAgICAgICAgICAgY2FzZSBcIm1vbmV5X3JlZF9ib3hcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAzIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9yZGVyX2JveFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLk9yZGVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZyaWVuZHNcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkZyaWVuZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kXCI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxhbmRMZXZlbFVwXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNPdXRlcikgdGhpcy5zd2l0Y2hMYW5kTGV2ZWxVcCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXlHZXRSZXdhcmRBbmkoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG5vZGU6IHRoaXMudGVzdEJ0biBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB7IG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KDEwMDEpLCBjb3VudDogMTAwLCBwb3NUeXBlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksIGNvdW50OiAxMDAsIHBvc1R5cGU6IDEgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeyBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldCgxMDAxKSwgY291bnQ6IDEwMCwgcG9zVHlwZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfdXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoTGFuZExldmVsVXAoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhbnlfZG9vclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvTmVpZ2hib3IoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29faG9tZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb0hvbWUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkX3ZpdGFsaXR5XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1eVZpdGFsaXR5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1NzlDRFx1ODNEQyAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMucGxhbnRfc293KVxyXG4gICAgcHJpdmF0ZSBzb3coc2hvd1ZpZXc6IGJvb2xlYW4gPSBmYWxzZSwgZDogUGxhbnREYXRhQmFzZSkge1xyXG4gICAgICAgIGxldCBlbXB0eSA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubGFuZExpc3RbeF0/LmRhdGE/LnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNob3dWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zb3dQbGFudChkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zb3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVtcHR5KSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2Q0ExXHU2NzA5XHU3QTdBXHU3Njg0XHU1NzFGXHU1NzMwXHU1NEU2XHVGRjAxXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRFbXB0eUxhbmRJZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhbmRMaXN0KTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhbmRMaXN0W3hdLmRhdGEgJiYgIXRoaXMubGFuZExpc3RbeF0uZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxhbmRMaXN0W3hdLmZpZWxkSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTkwQUVcdTRFRjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvcGVuTWFpbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubWFpbExpc3QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkOiBNYWlsUmV0dXJuRGF0YVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTWFpbFZpZXcsIHsgcGFybTogZCB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1OTdEXHU1M0NCIFx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5vcGVuX2ZyaWVuZClcclxuICAgIHByaXZhdGUgb3BlbkZyaWVuZCh0eXBlID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRMaXN0LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogRnJpZW5kTGlzdERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNWaWV3LCB7IHBhcm06IHsgZnJpZW5kRGF0YTogZCwgdHlwZTogdHlwZSB9IH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4RDJEXHU0RTcwXHU0RjUzXHU1MjlCXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYnV5Vml0YWxpdHkoKSB7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkJ1eVZpdGFsaXR5Vmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1OEJBMlx1NTM1NVx1OTYxRlx1NTIxNyAqL1xyXG4gICAgcHJpdmF0ZSBvcmRlclF1ZXVlSW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1OEJBMlx1NTM1NVxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfT3JkZXIpXHJcbiAgICBwcml2YXRlIHVwZGF0ZU9yZGVyKCkge1xyXG4gICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMub3JkZXJRdWV1ZUluZykge1xyXG4gICAgICAgICAgICBsZXQgYm94ID0gdGhpcy5vcmRlckJveC5nZXRDaGlsZEJ5TmFtZShcIm9yZGVyX2JveFwiKSxcclxuICAgICAgICAgICAgICAgIGQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJvcmRlclwiKS5nZXQoVXNlckluZm8ub3JkZXJMZXZlbCArIDEpLFxyXG4gICAgICAgICAgICAgICAgcmV3YXJkOiBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICAgICAgICAgICAgICByZXdhcmRDb3VudDogbnVtYmVyID0gMCxcclxuICAgICAgICAgICAgICAgIGN1ckNvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgIG1heENvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgaWYgKCFkKSByZXR1cm4gY29uc29sZS5sb2coXCJcdTdCNDlcdTdFQTdcdTVERjJcdTVCOENcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGJveC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fXCIgKyB4KSBhcyBMYXlhLkJveDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZC5jb25kaXRpb25beF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJDb3VudCA9IFdhcmVob3VzZVNlcnZpY2UuZ2V0T25lKGQuY29uZGl0aW9uW3hdLnBsYW50LmlkKT8uY291bnQgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXhDb3VudCA9IGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ291bnQgPj0gbWF4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZC5jb25kaXRpb25beF0ucGxhbnQuaWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7Y3VyQ291bnR9LyR7bWF4Q291bnR9YDtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDg3ICogKGN1ckNvdW50IC8gbWF4Q291bnQgPiAxID8gMSA6IGN1ckNvdW50IC8gbWF4Q291bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkLmNvbmRpdGlvblt4XS5wbGFudC5nYWluLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUub2JqLmlkID09PSBDb25maWdHYW1lLmdvbGRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmQgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKz0gZS5jb3VudCAqIG1heENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuQm94ID0gYm94LmdldENoaWxkQnlOYW1lKFwiYnRuX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuICAgICAgICAgICAgICAgIChidG5Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSByZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICAoYnRuQm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBgJHtcclxuICAgICAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgICAgICB9YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVfdGl0bGVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTVCOENcdTYyMTAke1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCArIDFcclxuICAgICAgICAgICAgfVx1N0VBN1x1OEJBMlx1NTM1NWA7XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT0gZC5jb25kaXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25kaXRpb24gPSBkLmNvbmRpdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJRdWV1ZUluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAub3JkZXJSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVySWQ6IFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb24uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5yZWR1Y2VBbW91bnQoZS5wbGFudC5pZCwgZS5jb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyUXVldWVJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5R2V0UmV3YXJkQW5pKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IGJveC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ib3hcIikgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5nb2xkSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkQ291bnQgKyBNYXRoLnJvdW5kKHJld2FyZENvdW50ICogZC5jb21taXNzaW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyUXVldWVJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIwN1x1NjM2Mlx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3dpdGNoTGFuZExldmVsVXAoc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCBiZyA9IHRoaXMubGFuZFVwTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgIGJnLmFscGhhID0gMDtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhiZywgeyBhbHBoYTogMC43NSB9LCAxNTApO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmdldENoaWxkQnlOYW1lKFwibGFuZF9vdXRlclwiKS5hZGRDaGlsZCh0aGlzLmxhbmRCb3gpO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KGUuZGF0YS5sZXZlbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dUaW1lQm94KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGUuYnVpbGRJbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgYmcsXHJcbiAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlckJveC5hZGRDaGlsZCh0aGlzLmxhbmRCb3gpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dUaW1lQm94KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5jbGVhckZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5idWlsZEluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKGUuZGF0YS5tYXR1cmVUaW1lTGVmdCA/IDEgOiAzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZS50b3BTdGF0ZUljb25BbmkoQm9vbGVhbihlLmRhdGEucHJvZHVjdElkKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbigxKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjRBRFx1NjUzRVx1ODNCN1x1NTNENlx1NTk1Nlx1NTJCMVx1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQpXHJcbiAgICBwcml2YXRlIHBsYXlHZXRSZXdhcmRBbmkob2JqOiBHZXRGbG9hdFJld2FyZE9iaikge1xyXG4gICAgICAgIExheWEudGltZXIub25jZSgyMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYmouY2FsbEJhY2spIG9iai5jYWxsQmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvYmoubGlzdC5mb3JFYWNoKChkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBMYXlhLkJveCA9IExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oXHJcbiAgICAgICAgICAgICAgICBcImZsb2F0UmV3YXJkQm94XCIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJld2FyZFByZWZhYi5jcmVhdGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJld2FyZFByZWZhYlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gbm9kZS55ID0gb2JqLm5vZGUuZ2V0X2hlaWdodCgpICogb2JqLm5vZGUuYW5jaG9yWSAtIGkgKiA2MDtcclxuICAgICAgICAgICAgLy8gbm9kZS54ID0gb2JqLm5vZGUuZ2V0X3dpZHRoKCkgKiBvYmoubm9kZS5hbmNob3JYO1xyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGljb24uc2tpbiA9IGQub2JqPy5pY29uIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDgwIC8gaWNvbi53aWR0aDtcclxuICAgICAgICAgICAgaWNvbi5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICBub2RlLmFscGhhID0gMDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqLm5vZGUubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludCgpKSk7XHJcbiAgICAgICAgICAgIC8vIG9iai5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZU5ld1BvcyA9IHRoaXMudG9wTGF5ZXJPblN0YWdlLmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgICAgICBvYmoubm9kZS5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KCkpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBub2RlLnBvcyhub2RlTmV3UG9zLnggKyBvYmoubm9kZS5nZXRfd2lkdGgoKSAqIG9iai5ub2RlLmFuY2hvclgsIG5vZGVOZXdQb3MueSAtIGkgKiA2MCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAobm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gXCJ4XCIgKyBkLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICAgICAgICB7IHk6IG5vZGUueSAtIDQwLCBhbHBoYTogMSB9LFxyXG4gICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAoZTogTGF5YS5Cb3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDEwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKFwiZmxvYXRSZXdhcmRCb3hcIiwgZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zSWNvbiA9IHRoaXMudG9wTGF5ZXJPblN0YWdlLmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5sb2NhbFRvR2xvYmFsKExheWEuUG9pbnQuY3JlYXRlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVTZWxmKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5ub3RGbHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmxvYXRJY29uOiBMYXlhLkltYWdlID0gTGF5YS5Qb29sLmdldEl0ZW1CeUNyZWF0ZUZ1bihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdFJld2FyZEljb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdFJld2FyZEljb24uY3JlYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb2F0UmV3YXJkSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnNraW4gPSBkLm9iai5pY29uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24ucG9zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBvc0ljb24ueCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjAgKiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUG9zSWNvbi55ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyMCAqIChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BMYXllck9uU3RhZ2UuYWRkQ2hpbGQoZmxvYXRJY29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24uek9yZGVyID0gOTk5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wSWNvbjogTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGQucG9zVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BJY29uID0gdGhpcy50b3BHb2xkSWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BJY29uID0gdGhpcy50b3BEaWFtb25kSWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BJY29uID0gdGhpcy53YXJlaG91c2VCdG47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3BHb2xkSWNvblBvcyA9IHRvcEljb24ubG9jYWxUb0dsb2JhbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuUG9pbnQodG9wSWNvbi53aWR0aCAvIDIsIHRvcEljb24uaGVpZ2h0IC8gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMudG9wTGF5ZXJPblN0YWdlLmdsb2JhbFRvTG9jYWwodG9wR29sZEljb25Qb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgeDogbG9jYWxQb3MueCwgeTogbG9jYWxQb3MueSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuYmFja0luLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlOiBMYXlhLkltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIoXCJmbG9hdFJld2FyZEljb25cIiwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zsb2F0SWNvbl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTUwICogeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgW25vZGVdXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgNTAgKiBpLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjRBRFx1NjUzRVx1NzcwQlx1NUU3Rlx1NTQ0QVx1NEVFNVx1NTQwRVx1NzY4NFx1NTk1Nlx1NTJCMVxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQpXHJcbiAgICBwcml2YXRlIHBsYXlBZFJld2FyZCh0YXJnZXQpIHtcclxuICAgICAgICBjb25zdCByZXdhcmQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiVmlkZW9yZXdhcmRzXCIpLnZhbHVlIGFzIFJld2FyZEN1cnJlbmN5QmFzZTtcclxuXHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICBub2RlOiB0YXJnZXQsXHJcbiAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmo6IHJld2FyZC5vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHJld2FyZC5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiByZXdhcmQub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkID8gMSA6IDIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfdGFzaylcclxuICAgIHByaXZhdGUgdXBkYXRlVGFzaygpIHtcclxuICAgICAgICBjb25zdCBib3g6IExheWEuSW1hZ2UgPSB0aGlzLnRhc2tCb3gsXHJcbiAgICAgICAgICAgIGljb24gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGFtb3VudEZvbnQgPSBpY29uLmdldENoaWxkQnlOYW1lKFwiYW1vdW50Rm9udFwiKSBhcyBMYXlhLkZvbnRDbGlwLFxyXG4gICAgICAgICAgICBkZXNjID0gYm94LmdldENoaWxkQnlOYW1lKFwibGJcIikgYXMgTGF5YS5MYWJlbCxcclxuICAgICAgICAgICAgbGlzdCA9IFRhc2tTZXJ2aWNlLmdldExpc3QoKSxcclxuICAgICAgICAgICAgdGFzayA9IGxpc3RbMF07XHJcbiAgICAgICAgaWYgKHRhc2sucmVjZWl2ZSA9PSAxIHx8IHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICBib3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBkZXNjLnRleHQgPSBgXHU0RUZCXHU1MkExOiR7dGFzay5iYXNlLmRlc2N9KCR7XHJcbiAgICAgICAgICAgIHRhc2sudGltZXMgPiB0YXNrLmJhc2UudGltZXMgPyB0YXNrLmJhc2UudGltZXMgOiB0YXNrLnRpbWVzXHJcbiAgICAgICAgfS8ke3Rhc2suYmFzZS50aW1lc30pYDtcclxuICAgICAgICBhbW91bnRGb250LnZhbHVlID0gXCJ4XCIgKyB0YXNrLmJhc2UucmV3YXJkLmNvdW50O1xyXG4gICAgICAgIGljb24uc2tpbiA9IHRhc2suYmFzZS5yZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgYm94LndpZHRoID0gZGVzYy53aWR0aCArIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTZERVx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdvSG9tZSgpIHtcclxuICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcodHJ1ZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmdvSG9tZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTU2REVcdTY3NjVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3V0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMzAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29GcmllbmQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSGl0TGFuZEFkZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUzQkJcdTkwQkJcdTVDNDVcdTVCQjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnb1RvTmVpZ2hib3IoKSB7XHJcbiAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KHRydWUsICgpID0+IHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5uZWlnaGJvcixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZDogUmV0dXJuTmVpZ2hib3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NzlCQlx1NUYwMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb0ZyaWVuZChkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMuZ29fZnJpZW5kX2hvbWUpXHJcbiAgICBwcml2YXRlIGdvRnJpZW5kTGlzdGVuKGQ6IFJldHVybk5laWdoYm9yLCBmcmllbmREYXRhOiBGcmllbmREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5vdXRDb3VudERvd25OdW1iZXIgPSA2MDtcclxuICAgICAgICB0aGlzLmlzT3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ29GcmllbmQoZCwgZnJpZW5kRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUzQkJcdTY3MEJcdTUzQ0JcdTVCQjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnb0ZyaWVuZChkPzogUmV0dXJuTmVpZ2hib3IsIGZyaWVuZERhdGE/OiBGcmllbmREYXRhKSB7XHJcbiAgICAgICAgbGV0IGxhbmRzID0gdGhpcy5sYW5kTGlzdCxcclxuICAgICAgICAgICAgdXNlckxhbmRzID0gTGFuZFNlcnZpY2UubGlzdDtcclxuICAgICAgICBsZXQgb3RoZXJMYW5kczogTWFwPG51bWJlciwgTGFuZE9iaj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgZC5sYW5kcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdGhlckxhbmRzLnNldChlLmlkLCBlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm91dGVyVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMudml0YWxpdHlCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ib21lQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFueURvb3IudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVzZXJMYW5kcy5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkLm1hdHVyZVRpbWVMZWZ0IC09IChEYXRlLm5vdygpIC0gdGhpcy5vdXRlclRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIGlmIChkLm1hdHVyZVRpbWVMZWZ0IDwgMCkgZC5tYXR1cmVUaW1lTGVmdCA9IDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnZpdGFsaXR5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hbnlEb29yLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxhbmRzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhbmQgPSBsYW5kc1t4XTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICAgICAgbGFuZC5pc091dGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxhbmQuc3RlYWxVaWQgPSBkLnVpZDtcclxuICAgICAgICAgICAgICAgIGxhbmQudXBkYXRlRGF0YSh7IGxpc3Q6IG90aGVyTGFuZHMgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGQucHJvdGVjdGVkVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmQuY2FuU3RlYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmQuY2FuU3RlYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFuZC5jYW5TdGVhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZC5pc091dGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnN0ZWFsVWlkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxhbmQudXBkYXRlRGF0YSh7IGxpc3Q6IHVzZXJMYW5kcyB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFuZC5wbGFudEljb25BbmkoQm9vbGVhbihsYW5kLmRhdGE/LnByb2R1Y3RJZCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVBbGxTdGF0ZUljb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICAvL1x1OTY5MFx1ODVDRlx1NUJBMFx1NzI2OVxyXG4gICAgICAgICAgICB0aGlzLnBldEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vXHU5NjkwXHU4NUNGXHU0RUZCXHU1MkExXHJcbiAgICAgICAgICAgIHRoaXMudGFza0JveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cdTY2M0VcdTc5M0EgXHU1QkEwXHU3MjY5XHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby53YXJlUGV0SWQpIHRoaXMucGV0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL1x1NjYzRVx1NzkzQVx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICB0aGlzLnRhc2tCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUZyaWVuZFZpZXcoZD8ubmlja25hbWUsIGZyaWVuZERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1M0JCXHU1OTdEXHU1M0NCXHU1QkI2XHU4RkQ4XHU2NjJGXHU4MUVBXHU1REYxXHU1QkI2XHU3Njg0XHU3NTRDXHU5NzYyXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlRnJpZW5kVmlldyhuaWNrbmFtZTogc3RyaW5nID0gXCJcIiwgZnJpZW5kRGF0YTogRnJpZW5kRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRvcEJveCA9IHRoaXMub3JkZXJCb3gucGFyZW50IGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBtb25leUJveCA9IHRvcEJveC5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5X2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgY291bnREb3duID0gdG9wQm94LmdldENoaWxkQnlOYW1lKFwiY291bnRfZG93blwiKSBhcyBMYXlhLkxhYmVsLFxyXG4gICAgICAgICAgICBvcmRlckJveCA9IHRoaXMub3JkZXJCb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmRlcl9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGZyaWVuZE5hbWUgPSB0aGlzLm9yZGVyQm94LmdldENoaWxkQnlOYW1lKFwiZnJpZW5kX25hbWVcIikgYXMgTGF5YS5MYWJlbCxcclxuICAgICAgICAgICAgYm90dG9tTGlzdDogTGF5YS5JbWFnZVtdID0gW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ0YXNrXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEJ5TmFtZShcInNpZ25JblwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmcmllbmRzXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEJ5TmFtZShcIm1haWxcIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGZyaWVuZE5hbWUudGV4dCA9IGAke25pY2tuYW1lfVx1NzY4NFx1NTE5Q1x1NTczQWA7XHJcbiAgICAgICAgICAgIG9yZGVyQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZnJpZW5kTmFtZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbW9uZXlCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb3VudERvd24udmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb3VudERvd24udGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5vdXRDb3VudERvd25OdW1iZXIpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmxvb3AoMTAwMCwgdGhpcywgdGhpcy5vdXRDb3VudERvd25FdmVudCwgW2NvdW50RG93bl0pO1xyXG4gICAgICAgICAgICBpZiAoZnJpZW5kRGF0YT8uYXZhdGFyKSB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IGZyaWVuZERhdGE/LmF2YXRhcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm91dENvdW50RG93bk51bWJlciA9IDYwO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQpO1xyXG4gICAgICAgICAgICBvcmRlckJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZnJpZW5kTmFtZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1vbmV5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb3VudERvd24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8uYXZhdGFyKSB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IFVzZXJJbmZvLmF2YXRhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm90dG9tTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuZGlzYWJsZWQgPSB0aGlzLmlzT3V0ZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cdTUwMTJcdThCQTFcdTY1RjZcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTAxMlx1OEJBMVx1NjVGNlx1N0VEM1x1Njc1RlxyXG4gICAgICogQHBhcmFtIGxiXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb3V0Q291bnREb3duRXZlbnQobGI6IExheWEuTGFiZWwpIHtcclxuICAgICAgICB0aGlzLm91dENvdW50RG93bk51bWJlci0tO1xyXG4gICAgICAgIGxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMub3V0Q291bnREb3duTnVtYmVyKTtcclxuICAgICAgICBpZiAodGhpcy5vdXRDb3VudERvd25OdW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IE1haW5WaWV3IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkQm94LCB0aXBzOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRCb3g6IExheWEuQm94O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1MjE3XHU4ODY4XHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnVzZXJLZXksIHRpcHM6XCJcdTc1MjhcdTYyMzdcdTUzQ0JcdTYwQzVcdTc4MDFcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHVzZXJLZXk6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6a2V5SW5wdXROb2RlLCB0aXBzOlwiXHU5MDgwXHU4QkY3XHU3ODAxXHU4RjkzXHU1MTY1XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBrZXlJbnB1dE5vZGU6IExheWEuVGV4dElucHV0O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkZEZyaWVuZCwgdGlwczpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWRkRnJpZW5kOiBMYXlhLkltYWdlO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTplbXB0eV9sYiwgdGlwczpcIlx1N0E3QVx1NzY4NFx1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZW1wdHlfbGI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiAxXHU2NjJGXHU1OTdEXHU1M0NCXHU1MjE3XHU4ODY4IDIgXHU1MkEwXHU1OTdEXHU1M0NCICAzXHU1MjIwXHU5NjY0XHU1OTdEXHU1M0NCICovXHJcbiAgICBwcml2YXRlIHZpZXdTdGF0ZTogMSB8IDIgfCAzID0gMTtcclxuXHJcbiAgICBwcml2YXRlIGZyaWVuZHM6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBmcmllbmRzTGlzdDogRnJpZW5kRGF0YVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoZGF0YToge1xyXG4gICAgICAgIGZyaWVuZERhdGE6IEZyaWVuZExpc3REYXRhO1xyXG4gICAgICAgIC8qKiB0eXBlXHU0RTNBMVx1NjI1M1x1NUYwMFx1NTJBMFx1NTk3RFx1NTNDQlx1NzU0Q1x1OTc2MiAqL1xyXG4gICAgICAgIHR5cGU6IG51bWJlcjtcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLmZyaWVuZHMgPSBkYXRhLmZyaWVuZERhdGEubGlzdDtcclxuICAgICAgICB0aGlzLmZyaWVuZHNMaXN0ID0gdGhpcy5mcmllbmRzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdERhdGEoKTtcclxuICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZnJpZW5kc0xpc3Q7XHJcbiAgICAgICAgdGhpcy5pc0VtcHR5KCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLml0ZW1SZW5kZXIpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudXNlcktleS50ZXh0ID0gYFx1NjIxMVx1NzY4NFx1NTNDQlx1NjBDNVx1NzgwMVx1RkYxQSR7VXNlckluZm8ua2V5fWA7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS50eXBlKTtcclxuICAgICAgICBpZiAoZGF0YS50eXBlICYmIGRhdGEudHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRnJpZW5kRXZlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0VtcHR5KCkge1xyXG4gICAgICAgIHRoaXMuZW1wdHlfbGIudmlzaWJsZSA9ICF0aGlzLml0ZW1MaXN0LmFycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxpc3REYXRhKCkge1xyXG4gICAgICAgIHRoaXMuZnJpZW5kc0xpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYi5hcHBseUluZyAqIDEwMDAwMCAtIGEuYXBwbHlJbmcgKiAxMDAwMDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtUmVuZGVyKGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5mcmllbmRzTGlzdFtpXTtcclxuXHJcbiAgICAgICAgbGV0IG5ld0JveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJuZXdfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBoZWFydEJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoZWFydF9ib3hcIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgZ29QbGF5QnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImdvX3BsYXlfYnRuXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGFwcGx5QnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImFwcGx5X2J0blwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBkZWxCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZGVsX2J0blwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZ29QbGF5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBhcHBseUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgZGVsQnRuLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGE/LmF2YXRhcikgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoZWFkXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkYXRhLmF2YXRhcjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGRhdGEubmlja25hbWU7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJsdlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gKGRhdGEub3JkZXJMZXZlbCB8fCAwKSArIFwiXCI7XHJcbiAgICAgICAgKGhlYXJ0Qm94LmdldENoaWxkQnlOYW1lKFwidmFsXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSAoZGF0YS5pbnRpbWFjeSB8fCAwKSArIFwiXCI7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRfYm94XCIpLmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9XHJcbiAgICAgICAgICAgIGRhdGEuZ2FpbkRpYW1vbmQgKyBcIlwiO1xyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImRlbF9idG5cIikgYXMgTGF5YS5JbWFnZSkuZGF0YVNvdXJjZSA9IGRhdGE7XHJcbiAgICAgICAgZ29QbGF5QnRuLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMudmlld1N0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGFwcGx5QnRuLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBuZXdCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGVsQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMSB8fCB0aGlzLnZpZXdTdGF0ZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIC8vXHU3NTMzXHU4QkY3IFx1NEUyRFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5hcHBseUluZykge1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAobmV3Qm94LmdldENoaWxkQnlOYW1lKFwicGFzdF9idG5cIikgYXMgTGF5YS5JbWFnZSkuZGF0YVNvdXJjZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAobmV3Qm94LmdldENoaWxkQnlOYW1lKFwiaWdub3JlXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgaGVhcnRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZ29QbGF5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vXHU1REYyXHU3RUNGXHU2NjJGXHU1OTdEXHU1M0NCXHJcbiAgICAgICAgICAgICAgICBuZXdCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRfZnJpZW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZyaWVuZEV2ZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWxfZnJpZW5kXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUZyaWVuZEV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlc2NfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc0Rlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmV3YXJkX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuUmV3YXJkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvcHlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2VhcmNoX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYXBwbHlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5RXZlbnQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGFzdF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dGcmllbmQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVsX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVGcmllbmQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaWdub3JlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlnbm9yZShlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19wbGF5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpdEZyaWVuZChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVGcmllbmRFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDM7XHJcbiAgICAgICAgbGV0IG5ld0Y6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kcy5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZC5hcHBseUluZykgbmV3Ri5wdXNoKGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSBuZXdGO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuaGVpZ2h0ID0gOTE0O1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuYWRkRnJpZW5kLnNraW4gPSBgZ2FtZS9pbWdfZnJpZW5kQnRuLnBuZ2A7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRGcmllbmRFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMyB8fCB0aGlzLnZpZXdTdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlld1N0YXRlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZnJpZW5kcztcclxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5oZWlnaHQgPSA5MTQ7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRnJpZW5kLnNraW4gPSBgZ2FtZS9pbWdfYWRkQnRuLnBuZ2A7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlld1N0YXRlID0gMjtcclxuICAgICAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQm94LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5oZWlnaHQgPSA1OTA7IC8vOTE0XHJcbiAgICAgICAgICAgIHRoaXMuYWRkRnJpZW5kLnNraW4gPSBgZ2FtZS9pbWdfZnJpZW5kQnRuLnBuZ2A7XHJcbiAgICAgICAgICAgIHRoaXMuZW1wdHlfbGIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVGRkRcdTc1NjVcdTU5N0RcdTUzQ0JcclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpZ25vcmUodGFyZ2V0OiBMYXlhLkltYWdlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmREZWxldGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJpZW5kSWQ6IGRhdGEudWlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5mcmllbmRzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJpZW5kc1t4XS51aWQgPT0gZGF0YS51aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzLnNwbGljZSh4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvcGVuUmV3YXJkKCkge1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRJbnZpdGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkOiBJbnZpdGVMaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc1Jld2FyZFZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IGQubGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogRnJpZW5kTGlzdERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzID0gZC5saXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHNMaXN0ID0gdGhpcy5mcmllbmRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3REYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkZcdTk1RUVcdTU5N0RcdTUzQ0JcdTVCQjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB2aXNpdEZyaWVuZCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KHRydWUsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG5cclxuICAgICAgICAgICAgaWYgKE1haW5WaWV3Lmluc3QuaXNPdXRlcikge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZ29Ib21lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kVmlzaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmdvX2ZyaWVuZF9ob21lLCBbZCwgZGF0YV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIyMFx1OTY2NFx1NTk3RFx1NTNDQlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlbGV0ZUZyaWVuZCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1Nzg2RVx1OEJBNFx1ODk4MVx1NTIyMFx1OTY2NFx1NTk3RFx1NTNDQlx1NTQxN1x1RkYxRlwiLFxyXG4gICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kRGVsZXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuZnJpZW5kcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJpZW5kc1t4XS51aWQgPT0gZGF0YS51aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWxDYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NTk3RFx1NTNDQlx1NzUzM1x1OEJGN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFsbG93RnJpZW5kKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kQWxsb3csXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJpZW5kSWQ6IGRhdGEudWlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5hcHBseUluZyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NTMzXHU4QkY3XHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXBwbHlFdmVudCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEFwcGx5LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NURGMlx1NTNEMVx1OTAwMVx1NkZDMFx1NjBDNVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NDFDXHU3RDIyXHU1OTdEXHU1M0NCXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlYXJjaCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMua2V5SW5wdXROb2RlLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU1M0NCXHU2MEM1XHU3ODAxXHU0RTBEXHU4MEZEXHU0RTNBXHU3QTdBXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmtleUlucHV0Tm9kZS50ZXh0ID09IFVzZXJJbmZvLmtleSkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjQxQ1x1N0QyMlx1ODFFQVx1NURGMVx1NUU3Mlx1NTU2NVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZFNlYXJjaCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IHRoaXMua2V5SW5wdXROb2RlLnRleHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogRnJpZW5kRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzTGlzdCA9IFtkXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvcHkoKSB7XHJcbiAgICAgICAgbGV0IGE6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICBhLnZhbHVlID0gVXNlckluZm8ua2V5O1xyXG4gICAgICAgIGEuc2VsZWN0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgICAgIGEucmVtb3ZlKCk7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTU5MERcdTUyMzZcdTYyMTBcdTUyOUZcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3VpZGVWaWV3RGF0YSB7XHJcbiAgICBub2RlTGlzdDogTGF5YS5JbWFnZVtdO1xyXG4gICAgY2FsbDogRnVuY3Rpb247XHJcbn1cclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBHdWlkZVZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvL1x1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmd1aWRlSGFuZCwgdGlwczpcIlx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ3VpZGVIYW5kOiBMYXlhLlNwcml0ZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVzY0xiLCB0aXBzOlwiXHU2M0NGXHU4RkYwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkZXNjTGI6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm5vZGVCb3gsIHRpcHM6XCJcdTYzQ0ZcdThGRjBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG5vZGVCb3g6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGd1aWRBbmk6IExheWEuVGltZUxpbmU7XHJcbiAgICBwcml2YXRlIG9sZFBhcmVudDogTGF5YS5Cb3g7XHJcbiAgICBwcml2YXRlIG9sZFpPcmRlcjogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdGV4dExpc3QgPSBbXHJcbiAgICAgICAgXCJcdTYwQThcdTc2ODRcdTk0QjFcdTUzMDVcdTRGNTlcdTk4OURcIixcclxuICAgICAgICBcIlx1OEZEOVx1OTFDQ1x1NjYyRlx1NUUwMlx1NjI2Q1x1OEJBMlx1NTM1NSxcdTYzMDlcdTg5ODFcdTZDNDJcdTVCOENcdTYyMTBcdTU0MEVcdTRGMUFcdTgxRUFcdTUyQThcdThGREJcdTUxNjVcdTRFMEJcdTRFMDBcdTdFQTdcdThCQTJcdTUzNTVcdTMwMDJcIixcclxuICAgICAgICBcIlx1OEZEOVx1OTFDQ1x1NjYyRlx1NEVEM1x1NUU5MyxcdTY1MzZcdTgzQjdcdTc2ODRcdTRGNUNcdTcyNjlcdTkwRkRcdTVCNThcdTY1M0VcdTU3MjhcdThGRDlcdTkxQ0NcdUZGMENcdTUxRkFcdTU1MkVcdTRGNUNcdTcyNjlcdTRFNUZcdTU3MjhcdThGRDlcdTkxQ0NcdTMwMDJcIixcclxuICAgICAgICBcIlx1OEZEOVx1OTFDQ1x1NjYyRlx1OTZDNlx1NUUwMixcdThEMkRcdTRFNzBcdTc5Q0RcdTVCNTBcdTMwMDFcdTcyRDdcdTdDQUVcdTc2ODRcdTU3MzBcdTY1QjlcdThGRDhcdTY3MDlcdTY3MDBcdTkxQ0RcdTg5ODFcdTc2ODRcdTk0QjFcdTVFODRcdTRFNUZcdTU3MjhcdThGRDlcdTkxQ0MsXHU2M0QwXHU3M0IwXHU3Njg0XHU2NUY2XHU1MDE5XHU2MEE4XHU0RjFBXHU3RUNGXHU1RTM4XHU2NzY1XHU3Njg0XHUzMDAyXCIsXHJcbiAgICAgICAgXCJcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTU3MjhcdThGRDlcdTkxQ0MsXHU1NzFGXHU1NzMwXHU3QjQ5XHU3RUE3XHU4RDhBXHU5QUQ4LFx1OEQ4QVx1ODBBNVx1NkM4M1x1RkYwQ1x1NjUzNlx1ODNCN1x1NUMzMVx1OEQ4QVx1NTkxQVx1MzAwMlwiLFxyXG4gICAgICAgIFwiXHU4RkQ5XHU5MUNDXHU2NjJGXHU2MEE4XHU3Njg0XHU1MTlDXHU1NzNBXHUzMDAyXHU3OUNEXHU2OTBEXHUzMDAxXHU2NTM2XHU4M0I3XHU5MEZEXHU1NzI4XHU4RkQ5XHU5MUNDLFx1NjA4NFx1NjA4NFx1NTQ0QVx1OEJDOVx1NEY2MFx1OEZEOVx1NTc1N1x1NTczMFx1NjUzNlx1ODNCN1x1NzY4NFx1NjVGNlx1NTAxOVx1NTNFRlx1ODBGRFx1NEYxQVx1NEVBN1x1NTFGQVx1OTRCQlx1NzdGM1x1NTRFNlx1MzAwMlwiLFxyXG4gICAgICAgIFwiXHU2MEE4XHU3Njg0XHU0RUZCXHU1MkExXCIsXHJcbiAgICAgICAgXCJcdTYwQThcdTc2ODRcdTRGRTFcdTRFRjZcIixcclxuICAgICAgICBcIlx1OEZEOVx1OTFDQ1x1NTNFRlx1NEVFNVx1NTNCQlx1NTIyQlx1NEVCQVx1NzY4NFx1NTE5Q1x1NTczQVx1OEY2Q1x1OEY2QyxcdTVFMkVcdTUyMkJcdTRFQkFcdTY1MzZcdTc2ODRcdTgzRENcdTkwRkRcdTVGNTJcdTYwQTgsXHU0RjQ2XHU2NjJGXHU4OTgxXHU1QzBGXHU1RkMzXHU3MkQ3XHU3MkQ3XHU1NEU2XHUzMDAyXCIsXHJcbiAgICBdO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogR3VpZGVWaWV3RGF0YTtcclxuICAgIHByaXZhdGUgc3RlcDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdXNlclN0ZXA6IHN0cmluZ1tdO1xyXG5cclxuICAgIG9uT3BlbmVkKGRhdGE6IEd1aWRlVmlld0RhdGEpIHtcclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybjtcclxuICAgICAgICBpZiAoIWRhdGEubm9kZUxpc3QpIGRhdGEubm9kZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuZ3VpZGVIYW5kLmFscGhhID0gMDtcclxuICAgICAgICB0aGlzLnVzZXJTdGVwID0gVXNlckluZm8uZ3VpZGVEYXRhLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyU3RlcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDk7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJTdGVwW3hdIHx8IHRoaXMudXNlclN0ZXBbeF0gPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmd1aWRIYW5kQW5pKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTdGVwKCkge1xyXG4gICAgICAgIGxldCBwb3M6IExheWEuUG9pbnQ7XHJcbiAgICAgICAgY29uc3QgcHJlTm9kZSA9IHRoaXMuZGF0YS5ub2RlTGlzdFt0aGlzLnN0ZXAgLSAxXTtcclxuXHJcbiAgICAgICAgaWYgKHByZU5vZGUgJiYgdGhpcy5vbGRQYXJlbnQpIHtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5vbGRQYXJlbnQuZ2xvYmFsVG9Mb2NhbChcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZUJveC5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KHByZU5vZGUueCwgcHJlTm9kZS55KSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5vbGRQYXJlbnQuYWRkQ2hpbGRBdChwcmVOb2RlLCB0aGlzLm9sZFpPcmRlcik7XHJcbiAgICAgICAgICAgIHByZU5vZGUucG9zKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudGV4dExpc3RbdGhpcy5zdGVwXSkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkd1aWRlVmlldyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRhdGEubm9kZUxpc3RbdGhpcy5zdGVwXTtcclxuICAgICAgICB0aGlzLm9sZFpPcmRlciA9IG5vZGUuek9yZGVyO1xyXG4gICAgICAgIHRoaXMub2xkUGFyZW50ID0gbm9kZS5wYXJlbnQgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlQm94Lmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgIHRoaXMub2xkUGFyZW50LmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQobm9kZS54LCBub2RlLnkpKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZUJveC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICBub2RlLnBvcyhwb3MueCwgcG9zLnkpO1xyXG5cclxuICAgICAgICB0aGlzLmd1aWRlSGFuZC5zY2FsZVggPSAxO1xyXG4gICAgICAgIGNvbnN0IHRleHRQb3NBZGQ6IExheWEuUG9pbnQgPSBuZXcgTGF5YS5Qb2ludCgpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGVwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDE1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTEwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTMwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IC0xMDA7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSAyNTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlSGFuZC5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTQwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDYwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDQ1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDE2MDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zQWRkLnNldFRvKC0yMDAsIC0yODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDE2MDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgLTI4MCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgcG9zLnggKz0gMTQwO1xyXG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dFBvc0FkZC5zZXRUbygtNTYwLCAtMzgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMuZ3VpZGVIYW5kLCB7IHg6IHBvcy54LCB5OiBwb3MueSwgYWxwaGE6IDEgfSwgMzAwKTtcclxuICAgICAgICB0aGlzLmRlc2NMYi5hbHBoYSA9IDA7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLmRlc2NMYiwgeyBhbHBoYTogMSB9LCAxNTApO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnBvcyhwb3MueCArIHRleHRQb3NBZGQueCwgcG9zLnkgKyB0ZXh0UG9zQWRkLnkpO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnRleHQgPSB0aGlzLnRleHRMaXN0W3RoaXMuc3RlcF07XHJcbiAgICAgICAgdGhpcy5zdGVwKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljayA9IHRydWU7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VyU3RlcFt0aGlzLnN0ZXBdID0gXCIxXCI7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZ3VpZGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy51c2VyU3RlcC5qb2luKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1x1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGd1aWRIYW5kQW5pKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaSA9IExheWEuVGltZUxpbmUudG8odGhpcy5ndWlkZUhhbmQsIHsgcm90YXRpb246IC0xNSB9LCA0MDAsIG51bGwpLnRvKFxyXG4gICAgICAgICAgICB0aGlzLmd1aWRlSGFuZCxcclxuICAgICAgICAgICAgeyByb3RhdGlvbjogMCB9LFxyXG4gICAgICAgICAgICA0MDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaS5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGREaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaT8uZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGludFZpZXdEYXRhIHtcclxuICAgIC8qKiBcdTY1ODdcdTVCNTdcdTUxODVcdTVCQjkgKi9cclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIC8qKiBcdTc4NkVcdThCQTRcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTUzRDZcdTZEODhcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbmNlbENhbGw/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuLy9kZWZhdWx0IGNsYXNzIEhpbnRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGludFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRleHQsIHRpcHM6XCJcdTUxODVcdTVCQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRleHQ6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29uZmlybUJ0biwgdGlwczpcIlx1Nzg2RVx1OEJBNFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29uZmlybUJ0bjogTGF5YS5JbWFnZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjYW5jZWxCdG4sIHRpcHM6XCJcdTUzRDZcdTZEODhcdTYzMDlcdTk0QUVcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNhbmNlbEJ0bjogTGF5YS5JbWFnZTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IEhpbnRWaWV3RGF0YTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IHRoaXMuZGF0YT8udGV4dCB8fCBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYW5jZWxDYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCAmJiB0aGlzLmRhdGEuY2FuY2VsQ2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDI1MjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDQ1ODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbmNlbENhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FuY2VsQ2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5IaW50Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbmZpcm1cIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5IaW50Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lLCB7IEJ1aWxkVHlwZSB9IGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBBcHBDb3JlLCB7IEFwcERlc3BhdGNoUmV0dXJuRGF0YSB9IGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2FkQmFyLCB0aXBzOlwibG9hZCBiYXJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCYXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRCb3gsIHRpcHM6XCJcdTUyQTBcdThGN0RcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2dpbkJveCwgdGlwczpcIlx1NzY3Qlx1OTY0Nlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9naW5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcml2YWN5Qm94LCB0aXBzOlwiXHU5NjkwXHU3OUMxXHU1MzRGXHU4QkFFXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcml2YWN5Qm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpdmFjeUNoZWNrSWNvbiwgdGlwczpcIlx1OTY5MFx1NzlDMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaXZhY3lDaGVja0ljb246IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU4RkRCXHU1RUE2XHU2NzYxXHU5RUQ4XHU4QkE0XHU1QkJEXHU1RUE2ICAxKi9cclxuICAgIHByaXZhdGUgbG9hZEJhck9sZFdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIGFzeW5jIG9uT3BlbmVkKGQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG4gICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcml2YWN5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBhd2FpdCB0aGlzLnZlcnNpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpPy5pc0xvZ2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhd2FrZTJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxvYWRMYWJlbCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9hZExhYmVsLnRleHQgPSBcIkxvYWQuLi4uMCVcIjtcclxuICAgICAgICB0aGlzLmxvYWRCYXJPbGRXaWR0aCA9IHRoaXMubG9hZEJhci53aWR0aDtcclxuICAgICAgICB0aGlzLmxvYWRCYXIud2lkdGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QnVpbGRUeXBlKCkge1xyXG4gICAgICAgIGxldCBidWlsZFR5cGUgPSBudWxsO1xyXG4gICAgICAgIHN3aXRjaCAoQlVJTERfVFlQRSkge1xyXG4gICAgICAgICAgICBjYXNlIEJ1aWxkVHlwZS5kZWJ1ZzpcclxuICAgICAgICAgICAgICAgIGJ1aWxkVHlwZSA9IDM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCdWlsZFR5cGUudGVzdDpcclxuICAgICAgICAgICAgICAgIGJ1aWxkVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCdWlsZFR5cGUub25saW5lOlxyXG4gICAgICAgICAgICAgICAgYnVpbGRUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWJ1aWxkVHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU3M0FGXHU1ODgzdHlwZVx1OTE0RFx1N0Y2RVx1NTFGQVx1OTUxOVwiLFxyXG4gICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmNsZWFyQ2FjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWlsZFR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyB2ZXJzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmNvbmZpZ0NsaWVudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlkOiB0aGlzLmdldEJ1aWxkVHlwZSgpIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IENvbmZpZ0NsaWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb24gPSBOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnZlcnNpb24/LnJlcGxhY2UoL1xcLi9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ2ZXJzaW9uXCIsIGQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ0dhbWUudmVyc2lvbiA9IGQudmVyc2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoZC52ZXJzaW9uLnJlcGxhY2UoL1xcLi9nLCBcIlwiKSkgPiB2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5jbGVhckNhY2hlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTY4QzBcdTZENEJcdTUyMzBcdTY1QjBcdTc2ODRcdTcyNDhcdTY3MkNcdUZGMENcdThCRjdcdTY2RjRcdTY1QjBcdUZGMDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ2ZXJzaW9uXCIsIGQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuc2hvd0JhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnR2FtZS52ZXJzaW9uID0gZC52ZXJzaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ2ZXJzaW9uXCIsIGQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJcdTcyNDhcdTY3MkNcdTY4QzBcdTZENEJcdTUxRkFcdTk1MTlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibG9naW5fYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja19ib3hcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpdmFjeUNoZWNrSWNvbi52aXNpYmxlID0gIXRoaXMucHJpdmFjeUNoZWNrSWNvbi52aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcml2YWN5X2xiXCI6XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnByaXZhY3lBZ3JlZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGxvZ2luKGlzV3g6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnRva2VuKSB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubG9naW5Ub2tlbixcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGNvZGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkOiBOZXRJbml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkgdGhpcy5kYXRhLmNhbGwoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmxvZ2luU3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogTnVtYmVyKGQudXNlckluZm8ua2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGE/LmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IGBcdTc2N0JcdTVGNTVcdTU5MzFcdThEMjVbJHtkYXRhLmNvZGV9XWAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkgQ29uZmlnR2FtZS5jaGFubmVsID0gZGF0YS5kYXRhW1wiY2hhbm5lbFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzV3gpO1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wcml2YWN5Q2hlY2tJY29uLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdThCRjdcdTk2MDVcdThCRkJcdTMwMEFcdTc1MjhcdTYyMzdcdTk2OTBcdTc5QzFcdTUzNEZcdThCQUVcdTMwMEJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVzdEsgPSBsb2NhdGlvbi5zZWFyY2gubWF0Y2goL1xcP2lkPSguKykvKSxcclxuICAgICAgICAgICAgICAgIHRlc3RLZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0ZXN0SyAmJiB0ZXN0Sy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0S2UgPSB0ZXN0S1sxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgd3hPcGVuSWQgPSB0ZXN0S2UsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA9IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXIgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoaXNXeCAmJiAhd3hPcGVuSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnd4TG9naW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IGBcdTVGQUVcdTRGRTFcdTc2N0JcdTVGNTVcdTU5MzFcdThEMjVbJHtkYXRhLmNvZGV9XWAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3hPcGVuSWQgPSBkYXRhLmRhdGFbXCJvcGVuaWRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhciA9IGRhdGEuZGF0YVtcImljb251cmxcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lID0gZGF0YS5kYXRhW1wibmFtZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF3eE9wZW5JZCkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTY3MkFcdTgzQjdcdTUzRDZcdTUyMzBcdTVGQUVcdTRGRTFpZFwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxvZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wibG9naW5cIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhY2NvdW50OiBpc1d4ID8gbnVsbCA6IHRoaXMudXNlcklucHV0LnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4SWQ6IHd4T3BlbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IGF2YXRhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChjb2RlLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IE5ldEluaXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB0aGlzLmRhdGEuY2FsbChkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVyaTogQXBwRXZlbnRNYXAud3hMb2dpblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uaXNGaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnJlZ2lzdGVyU3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiBOdW1iZXIoZC51c2VySW5mby5rZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmxvZ2luU3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogTnVtYmVyKGQudXNlckluZm8ua2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGRhdGE6IEFwcERlc3BhdGNoUmV0dXJuRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IGBcdTc2N0JcdTVGNTVcdTU5MzFcdThEMjVbJHtkYXRhLmNvZGV9XWAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ0dhbWUuY2hhbm5lbCA9IGRhdGEuZGF0YVtcImNoYW5uZWxcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFByb2dyZXNzKHYpIHtcclxuICAgICAgICB0aGlzLmxvYWRCYXIud2lkdGggPSB2ICogdGhpcy5sb2FkQmFyT2xkV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBNYWlsRGVzY1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlsRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNlbnRlclBhbmVsLCB0aXBzOlwiXHU0RTJEXHU5NUY0XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjZW50ZXJQYW5lbDogTGF5YS5QYW5lbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aXRsZSwgdGlwczpcIlx1OTg3Nlx1NjgwN1x1OTg5OFx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGl0bGU6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9zdExiLCB0aXBzOlwiXHU1MDc3XHU4RDcwXHU0RTg2XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb3N0TGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YmFja0xiLCB0aXBzOlwiXHU2MjdFXHU1NkRFXHU2NzY1XHU3Njg0XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBiYWNrTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tTGIsIHRpcHM6XCJcdTVFOTVcdTkwRThcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJvdHRvbUxiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW0sIHRpcHM6XCJcdTcyNjlcdTU0QzFcdTgyODJcdTcwQjlcIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgaXRlbTogTGF5YS5QcmVmYWI7XHJcblxyXG4gICAgcHJpdmF0ZSBtYWlsSWQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNhbGw6IEZ1bmN0aW9uO1xyXG5cclxuICAgIG9uT3BlbmVkKGQ6IHsgZGF0YTogTWFpbFJldHVybkRhdGE7IGNhbGw6IEZ1bmN0aW9uIH0pIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZC5kYXRhO1xyXG4gICAgICAgIHRoaXMuY2FsbCA9IGQuY2FsbDtcclxuICAgICAgICB0aGlzLm1haWxJZCA9IGQuZGF0YS5pZDtcclxuICAgICAgICB0aGlzLmNlbnRlclBhbmVsLnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpdGxlLnRleHQgPSBgJHtkYXRhLm1lc3NhZ2V9XHU2RjVDXHU1MTY1XHU0RTg2XHU0RjYwXHU3Njg0XHU4M0RDXHU1NzMwXHU5MUM3XHU5NzUyYDtcclxuICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICBjb25zdCBpdGVtc0xvc3Q6IHsgaWQ6IG51bWJlcjsgYW1vdW50OiBudW1iZXIgfVtdID0gW10sXHJcbiAgICAgICAgICAgIGl0ZW1zQmFjazogeyBpZDogbnVtYmVyOyBhbW91bnQ6IG51bWJlciB9W10gPSBbXTtcclxuICAgICAgICBsZXQgbG9zdERpYW1vbmQgPSAwLFxyXG4gICAgICAgICAgICBsb3N0R29sZCA9IDA7XHJcbiAgICAgICAgLy8gYTpiOmMgIGE9dHlwZSAxXHU4RDI3XHU1RTAxIDIgXHU2OTBEXHU3MjY5XHJcblxyXG4gICAgICAgIFRvb2xzLnBhcnNlU3RyaW5nKGRhdGEuaXRlbXNMb3N0KS5tYXAoKF9kOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgX2QgPSBUb29scy5wYXJzZVN0cmluZyhfZCwgXCI6XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfZCk7XHJcbiAgICAgICAgICAgIGlmIChfZFswXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsb3N0RGlhbW9uZCArPSBOdW1iZXIoX2RbMl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGl0ZW1zTG9zdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5pZCA9PSBfZFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFoYXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zTG9zdC5wdXNoKHsgaWQ6IF9kWzFdLCBhbW91bnQ6IE51bWJlcihfZFsyXSkgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNMb3N0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXNMb3N0W3hdLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNMb3N0W3hdLmFtb3VudCArPSBOdW1iZXIoX2RbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFRvb2xzLnBhcnNlU3RyaW5nKGRhdGEuaXRlbXMpLm1hcCgoX2Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBfZCA9IFRvb2xzLnBhcnNlU3RyaW5nKF9kLCBcIjpcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGl0ZW1zQmFjay5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5pZCA9PSBfZFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFoYXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zQmFjay5wdXNoKHsgaWQ6IF9kWzFdLCBhbW91bnQ6IE51bWJlcihfZFsyXSkgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNCYWNrLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXNCYWNrW3hdLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNCYWNrW3hdLmFtb3VudCArPSBOdW1iZXIoX2RbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB5QWRkID0gMCxcclxuICAgICAgICAgICAgX3ggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNMb3N0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTm9kZTogTGF5YS5Cb3ggPSB0aGlzLml0ZW0uY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChfeCA+IDIgJiYgIXlBZGQpIHtcclxuICAgICAgICAgICAgICAgIHlBZGQrKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHlBZGQgJiYgX3ggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICB5QWRkKys7XHJcbiAgICAgICAgICAgICAgICBfeCA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW1Ob2RlLnggPSAyMzAgKyBfeCAqIDE5MDtcclxuICAgICAgICAgICAgaXRlbU5vZGUueSA9IDEwNSArIHlBZGQgKiA5NTtcclxuICAgICAgICAgICAgX3grKztcclxuICAgICAgICAgICAgbGV0IHBsYW50ID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KGl0ZW1zTG9zdFt4XS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBpdGVtTm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgaWNvbi5za2luID0gcGxhbnQuaWNvbjtcclxuICAgICAgICAgICAgaWNvbi5zY2FsZSgwLjcsIDAuNyk7XHJcbiAgICAgICAgICAgIGljb24uYW5jaG9yWCA9IDAuNTtcclxuICAgICAgICAgICAgKGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwibGJcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGB4JHtpdGVtc0xvc3RbeF0uYW1vdW50fWA7XHJcbiAgICAgICAgICAgIHBsYW50LmdhaW4uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGQub2JqLmlkID09IENvbmZpZ0dhbWUuZGlhbW9uZElkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsb3N0R29sZCArPSBkLmNvdW50ICogaXRlbXNMb3N0W3hdLmFtb3VudDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNlbnRlclBhbmVsLmFkZENoaWxkKGl0ZW1Ob2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB5QWRkQmFjayA9IDA7XHJcbiAgICAgICAgX3ggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNCYWNrLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTm9kZTogTGF5YS5JbWFnZSA9IHRoaXMuaXRlbS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgaWYgKF94ID4gMSAmJiAheUFkZEJhY2spIHtcclxuICAgICAgICAgICAgICAgIHlBZGRCYWNrKys7XHJcbiAgICAgICAgICAgICAgICBfeCA9IC0yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh5QWRkQmFjayAmJiBfeCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHlBZGRCYWNrKys7XHJcbiAgICAgICAgICAgICAgICBfeCA9IC0yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW1Ob2RlLnggPSA0MjAgKyBfeCAqIDE5MDtcclxuICAgICAgICAgICAgaXRlbU5vZGUueSA9IDIwOCArIHlBZGQgKiA5NSArIHlBZGRCYWNrICogOTU7XHJcbiAgICAgICAgICAgIF94Kys7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGxhbnQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaXRlbXNCYWNrW3hdLmlkKTtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpY29uLnNraW4gPSBwbGFudC5pY29uO1xyXG4gICAgICAgICAgICBpY29uLnNjYWxlKDAuNywgMC43KTtcclxuICAgICAgICAgICAgaWNvbi5hbmNob3JYID0gMC41O1xyXG4gICAgICAgICAgICAoaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke2l0ZW1zQmFja1t4XS5hbW91bnR9YDtcclxuICAgICAgICAgICAgcGxhbnQuZ2Fpbi5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5kaWFtb25kSWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGxvc3RHb2xkICs9IGQuY291bnQgKiBpdGVtc0JhY2tbeF0uYW1vdW50O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyUGFuZWwuYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb3N0TGIueSA9IDExNDtcclxuICAgICAgICB0aGlzLmJhY2tMYi55ID0gMjE4ICsgeUFkZCAqIDk1O1xyXG4gICAgICAgIHRoaXMuYm90dG9tTGIueSA9IDMwMSArIHlBZGQgKiA5NSArIHlBZGRCYWNrICogOTU7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MYi50ZXh0ID0gYFx1NTE3MVx1OEJBMVx1NjM1Rlx1NTkzMVx1NEU4NiR7bG9zdEdvbGR9XHU5MUQxXHU1RTAxXHVGRjBDJHtsb3N0RGlhbW9uZH1cdTk0QkJcdTc3RjNgO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuTWFpbERlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm1haWxEZWxldGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQ6IHRoaXMubWFpbElkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbCh0aGlzLm1haWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5NYWlsRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuLy8gIE1haWxWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlsVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxpc3QsIHRpcHM6XCJcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmVtcHR5X2xiLCB0aXBzOlwiXHU3QTdBXHU3Njg0XHU2M0QwXHU3OTNBXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBlbXB0eV9sYjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0RGF0YTogTWFpbFJldHVybkRhdGFbXSA9IFtdO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLmxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnJlbmRlckl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmVkKGxpc3Q6IE1haWxSZXR1cm5EYXRhW10gPSBbXSkge1xyXG4gICAgICAgIHRoaXMubGlzdERhdGEgPSBsaXN0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxpc3REYXRhKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5hcnJheSA9IHRoaXMubGlzdERhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gKGEucmVhZCA/IDAgOiAxMDAwMDAgKyBiLmNyZWF0ZVRpbWUpIC0gKGIucmVhZCA/IDAgOiAxMDAwMDAgKyBhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYi5jcmVhdGVUaW1lIC0gKGIucmVhZCA/IDEwMDAwMDAgOiAwKSAtIChhLmNyZWF0ZVRpbWUgLSAoYS5yZWFkID8gMTAwMDAwMCA6IDApKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gIXRoaXMubGlzdC5hcnJheS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5saXN0RGF0YVtpbmRleF07XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gXCJcdTdDRkJcdTdFREZcdTkwQUVcdTRFRjZcIjtcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZXNjXCIpIGFzIExheWEuTGFiZWxcclxuICAgICAgICApLnRleHQgPSBgJHtkYXRhLm1lc3NhZ2V9XHU2RjVDXHU1MTY1XHU4M0RDXHU1NzMwXHU1MDc3XHU4M0RDLFx1ODhBQlx1NzJEN1x1NzJEN1x1NTNEMVx1NzNCMFx1NUU3Nlx1OEZGRFx1NTJBMFx1NTZERVx1NEU4Nn5+YDtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke25ldyBEYXRlKFxyXG4gICAgICAgICAgICBkYXRhLmNyZWF0ZVRpbWVcclxuICAgICAgICApLnRvTG9jYWxlU3RyaW5nKFwiemgtQ05cIiwgeyBob3VyMTI6IGZhbHNlIH0pfWA7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwicmVhZF9pY29uXCIpIGFzIExheWEuSW1hZ2UpLnZpc2libGUgPSAhZGF0YS5yZWFkO1xyXG5cclxuICAgICAgICBjZWxsLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lLmluZGV4T2YoXCJpdGVtXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5tYWlsUmVhZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXRbXCJkYXRhU291cmNlXCJdLnJlYWQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLk1haWxEZXNjVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAobWFpbElkOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdERhdGEubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdERhdGFbeF0uaWQgPT0gbWFpbElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhLnNwbGljZSh4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5NYWlsVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZ3VyZUFuaSBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpfeCwgdGlwczpcIlx1N0VDOFx1NzBCOVx1NTc1MFx1NjgwN1wiLCB0eXBlOnR5cGU6U3RyaW5nfSovXHJcbiAgICBwcml2YXRlIF94OiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpfeSwgdGlwczpcIlx1N0VDOFx1NzBCOVx1NTc1MFx1NjgwN1wiLCB0eXBlOnR5cGU6U3RyaW5nfSovXHJcbiAgICBwcml2YXRlIF95OiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZWxheSwgdGlwczpcIlx1NUVGNlx1OEZERlwiLCB0eXBlOnR5cGU6U3RyaW5nfSovXHJcbiAgICBwcml2YXRlIGRlbGF5OiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aW1lLCB0aXBzOlwiXHU2NUY2XHU5NUY0XCIsIHR5cGU6dHlwZTpTdHJpbmd9Ki9cclxuICAgIHByaXZhdGUgdGltZTogc3RyaW5nID0gXCIxMDAwMFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm93bmVyIGFzIExheWEuQW5pbWF0aW9uO1xyXG4gICAgICAgIG5vZGUuYWxwaGEgPSAwO1xyXG4gICAgICAgIGxldCBvbGRQb3MgPSB7IHg6IG5vZGUueCwgeTogbm9kZS55IH07XHJcbiAgICAgICAgbGV0IGRlbGF5ID0gTnVtYmVyKHRoaXMuZGVsYXkpO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8obm9kZSwgeyBhbHBoYTogMSB9LCA2MDAsIG51bGwsIG51bGwsIGRlbGF5KTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICB7IHg6IHRoaXMuX3gsIHk6IHRoaXMuX3kgfSxcclxuICAgICAgICAgICAgTnVtYmVyKHRoaXMudGltZSksXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wb3Mob2xkUG9zLngsIG9sZFBvcy55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbmFibGUoKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRlbGF5XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7fVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IE9yZGVyQmFzZSwgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5cclxuLy9jbGFzcyBPcmRlclZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm9yZGVyTGlzdCwgdGlwczpcIlx1OEJBMlx1NTM1NVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGUsfSovXHJcbiAgICBwcml2YXRlIG9yZGVyTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6YnRuTG9ja1JlcywgdGlwczpcIlx1OEJBMlx1NTM1NVx1NjMwOVx1OTRBRVx1NjcyQVx1NUI4Q1x1NjIxMFwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGJ0bkxvY2tSZXM6IHN0cmluZyA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YnRuUmVzQ3VyLCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU2MzA5XHU5NEFFXHU1RjUzXHU1MjREXHU3MkI2XHU2MDAxXHU2MzA5XHU5NEFFXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgYnRuUmVzQ3VyOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgZGF0YUxpc3Q6IE9yZGVyQmFzZVtdO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBUYWJsZUFuYWx5emUudGFibGUoXCJvcmRlclwiKS5saXN0O1xyXG4gICAgICAgIGxldCBvcmRlck9sZEx2ID0gVXNlckluZm8ub3JkZXJMZXZlbCB8fCAwO1xyXG4gICAgICAgIHRoaXMuZGF0YUxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5pZCAqIChiLmlkIDw9IG9yZGVyT2xkTHYgPyAtMSA6IDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LmFycmF5ID0gdGhpcy5kYXRhTGlzdDtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnJlbmRlckxpc3QpO1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckxpc3QoY2VsbDogTGF5YS5JbWFnZSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmRhdGFMaXN0W2ldLFxyXG4gICAgICAgICAgICByZXdhcmQ6IFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgICAgICAgICAgcmV3YXJkQ291bnQ6IG51bWJlciA9IDAsXHJcbiAgICAgICAgICAgIGN1ckNvdW50ID0gMCxcclxuICAgICAgICAgICAgbWF4Q291bnQgPSAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IDAsXHJcbiAgICAgICAgICAgIHJld2FyZEJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRfYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwib3JkZXJfbHZcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke2QuaWR9XHU3RUE3XHU4QkEyXHU1MzU1YDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA0OyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiaXRlbV9cIiArIHgpIGFzIExheWEuQm94O1xyXG4gICAgICAgICAgICBpZiAoZC5jb25kaXRpb25beF0pIHtcclxuICAgICAgICAgICAgICAgIGN1ckNvdW50ID0gV2FyZWhvdXNlU2VydmljZS5nZXRPbmUoZC5jb25kaXRpb25beF0ucGxhbnQuaWQpPy5jb3VudCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQgPSBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyQ291bnQgPj0gbWF4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZC5jb25kaXRpb25beF0ucGxhbnQuaWNvbjtcclxuICAgICAgICAgICAgICAgIGlmIChkLmlkIDwgVXNlckluZm8ub3JkZXJMZXZlbCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7bWF4Q291bnR9LyR7bWF4Q291bnR9YDtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9IDg3O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7Y3VyQ291bnR9LyR7bWF4Q291bnR9YDtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDg3ICogKGN1ckNvdW50IC8gbWF4Q291bnQgPiAxID8gMSA6IGN1ckNvdW50IC8gbWF4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZC5jb25kaXRpb25beF0ucGxhbnQuZ2Fpbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUub2JqLmlkID09PSBDb25maWdHYW1lLmdvbGRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkID0gZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArPSBlLmNvdW50ICogZC5jb25kaXRpb25beF0uY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRpYW1vbmQgPSBjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveF9kaWFtb25kXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgbGV0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBkaWFtb25kLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGQuaWQgPiBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAvL1x1NjcyQVx1NkZDMFx1NkQzQlxyXG4gICAgICAgICAgICBidG4uc2tpbiA9IHRoaXMuYnRuTG9ja1JlcztcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkLmlkID09IFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFxyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSB0aGlzLmJ0blJlc0N1cjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1REYyXHU1QjhDXHU2MjEwXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9cdTVERjJcdTVCOENcdTYyMTBcclxuICAgICAgICAgICAgICAgIC8vIGJ0bi5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXdhcmQpIHtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgKyR7XHJcbiAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgIH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk9yZGVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlclZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsZWZ0Qm94LCB0aXBzOlwiXHU0RTkxXHU1REU2XHU4RkI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgbGVmdEJveDogTGF5YS5Cb3g7XHJcbiAgICAvKiogQHByb3Age25hbWU6cmlnaHRCb3gsIHRpcHM6XCJcdTRFOTFcdTVERTZcdThGQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICByaWdodEJveDogTGF5YS5Cb3g7XHJcblxyXG4gICAgb25IZEVuYWJsZSgpIHt9XHJcblxyXG4gICAgb25PcGVuZWQoZGF0YTogeyBjYWxsOiB7IChPdmVyVmlldyk6IHZvaWQgfSB9KSB7XHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIGlmIChkYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGEuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoY2FsbDogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmxlZnRCb3gueCA9IC05ODc7XHJcbiAgICAgICAgdGhpcy5yaWdodEJveC54ID0gMTAyNTtcclxuICAgICAgICB0aGlzLmxlZnRCb3guYWxwaGEgPSAwO1xyXG4gICAgICAgIHRoaXMucmlnaHRCb3guYWxwaGEgPSAwO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5sZWZ0Qm94LCB7IHg6IDAsIGFscGhhOiAxIH0sIDUwMCk7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJveCxcclxuICAgICAgICAgICAgeyB4OiAwLCBhbHBoYTogMSB9LFxyXG4gICAgICAgICAgICA1MDAsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGwpIGNhbGwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oY2FsbDogRnVuY3Rpb24pIHtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubGVmdEJveCwgeyB4OiAtOTg3LCBhbHBoYTogMCB9LCA1MDApO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3gsXHJcbiAgICAgICAgICAgIHsgeDogMTAyNSwgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsKSBjYWxsKCk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk92ZXJWaWV3KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwRGF0YUNvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cERhdGFDb250cm9sXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9jbGFzcyBTZXR0aW5nVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTptdXNpY05vZGUsIHRpcHM6XCJcdTk3RjNcdTRFNTBcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG11c2ljTm9kZTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNvdW5kTm9kZSwgdGlwczpcIlx1OTdGM1x1NjU0OFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc291bmROb2RlOiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YXZhdGFyTm9kZSwgdGlwczpcIlx1NzNBOVx1NUJCNlx1NTkzNFx1NTBDRlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYXZhdGFyTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bmlja25hbWUsIHRpcHM6XCJcdTczQTlcdTVCQjZcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG5pY2tuYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1c2VyS2V5LCB0aXBzOlwiXHU3NTI4XHU2MjM3XHU1M0NCXHU2MEM1XHU3ODAxXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB1c2VyS2V5OiBMYXlhLkxhYmVsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNDaGFuZ2UoKTtcclxuICAgICAgICB0aGlzLnNvdW5kQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIHRoaXMudXNlcktleS50ZXh0ID0gYFx1OTA4MFx1OEJGN1x1NzgwMVx1RkYxQSR7VXNlckluZm8ua2V5fWA7XHJcblxyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImF2YXRhclwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcIm5pY2tuYW1lXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5pY2tuYW1lLnRleHQgPSBlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNldHRpbmdWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIm11c2ljXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQgPSAhQ29yZS5hdWRpby5tdXNpY011dGVkO1xyXG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwibXVzaWNcIiwgQ29yZS5hdWRpby5tdXNpY011dGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5zb3VuZE11dGVkID0gIUNvcmUuYXVkaW8uc291bmRNdXRlZDtcclxuICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInNvdW5kXCIsIENvcmUuYXVkaW8uc291bmRNdXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZENoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNpZ25fb3V0XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU3ODZFXHU4QkE0XHU4OTgxXHU5MDAwXHU1MUZBXHU3NjdCXHU1RjU1XHVGRjFGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJpc0xvZ2luXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5sb2dpbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcubG9naW5PdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5Mb2dpblZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvZ2luX2dhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1c2VyX2FncmVlbWVudFwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTc1MjhcdTYyMzdcdTUzNEZcdThCQUVcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oeyB1cmk6IEFwcEV2ZW50TWFwLnNlcnZpY2VBZ3JlZW1lbnQsIGRhdGE6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcml2YWN5XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OTY5MFx1NzlDMVx1NjUzRlx1N0I1NlxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAucHJpdmFjeUFncmVlbWVudCwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFib3V0XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQWJvdXRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29weV9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29weSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29weSgpIHtcclxuICAgICAgICBsZXQgYTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgIGEudmFsdWUgPSBVc2VySW5mby5rZXk7XHJcbiAgICAgICAgYS5zZWxlY3QoKTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAgICAgYS5yZW1vdmUoKTtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NTkwRFx1NTIzNlx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG11c2ljQ2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnN0IGJveCA9IHRoaXMubXVzaWNOb2RlLmdldENoaWxkQnlOYW1lKFwiYm94XCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgbGV0IG11c2ljID0gQ29yZS5hdWRpby5tdXNpY011dGVkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG11c2ljKTtcclxuXHJcbiAgICAgICAgaWNvbi54ID0gIW11c2ljID8gLTE0IDogOTE7XHJcbiAgICAgICAgaWNvbi5za2luID0gIW11c2ljID8gYGdhbWUvaW1nX211c2ljT25CdG4ucG5nYCA6IFwiZ2FtZS9pbWdfbXVzaWNPZmZCdG4ucG5nXCI7XHJcbiAgICAgICAgYm94LnNraW4gPSAhbXVzaWMgPyBgZ2FtZS9pbWdfc3dpdGNoT24ucG5nYCA6IFwiZ2FtZS9pbWdfc3dpdGhPZmYucG5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzb3VuZENoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCBib3ggPSB0aGlzLnNvdW5kTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgbGV0IHNvdW5kID0gQ29yZS5hdWRpby5zb3VuZE11dGVkO1xyXG4gICAgICAgIGljb24ueCA9ICFzb3VuZCA/IC0xNCA6IDkxO1xyXG4gICAgICAgIGljb24uc2tpbiA9ICFzb3VuZCA/IGBnYW1lL2ltZ19tdXNpY09uQnRuLnBuZ2AgOiBcImdhbWUvaW1nX211c2ljT2ZmQnRuLnBuZ1wiO1xyXG4gICAgICAgIGJveC5za2luID0gIXNvdW5kID8gYGdhbWUvaW1nX3N3aXRjaE9uLnBuZ2AgOiBcImdhbWUvaW1nX3N3aXRoT2ZmLnBuZ1wiO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBGZWVkQmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZlZWREYXRhQmFzZSB7XHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBGZWVkQmFzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk1MDFcdTVCOUEgKi9cclxuICAgIGxvY2s6IGJvb2xlYW47XHJcbn1cclxuLyoqXHJcbiAqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVxyXG4gKi9cclxuY2xhc3MgRmVlZFNlcnZpY2Uge1xyXG4gICAgLyoqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbGlzdDogRmVlZERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjU3MFx1NjM2RVx1NTIxRFx1NTlDQlx1NTMxNlxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcImZlZWRcIikubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IGQsXHJcbiAgICAgICAgICAgICAgICBsb2NrOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGZWVkU2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgRmVlZEJhc2UsIFBsYW50QmFzZSwgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCJzcmMvY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgRmVlZFNlcnZpY2UsIHsgRmVlZERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9GZWVkU2VydmljZVwiO1xyXG5pbXBvcnQgUGV0U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BldFNlcnZpY2VcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgTWFpblZpZXcsIHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaG9wVmlld0RhdGEge1xyXG4gICAgLyoqIFx1NzU0Q1x1OTc2MnRhZ1x1NEUwQlx1NjgwN2lkICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgcGFybT86IGFueTtcclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTGlzdCwgdGlwczpcIlx1NTU0Nlx1NTRDMVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YnRuQm94VG9wLCB0aXBzOlwiXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU1MjE3XHU4ODY4XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBidG5Cb3hUb3A6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJvdHRvbUJveCwgdGlwczpcIlx1NUU5NVx1OTBFOFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYm90dG9tQm94OiBMYXlhLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vXHU3OUNEXHU1QjUwXHJcbiAgICAvKiogQHByb3Age25hbWU6c2VlZERlc2MsIHRpcHM6XCJcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNlZWREZXNjOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTptYXR1cmVUaW1lLCB0aXBzOlwiXHU2MjEwXHU3MTlGXHU2NUY2XHU5NUY0XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBtYXR1cmVUaW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTptYXR1cmVHYWluQm94LCB0aXBzOlwiXHU2NTM2XHU3NkNBXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBtYXR1cmVHYWluQm94OiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2NrQnRuQm94LCB0aXBzOlwiXHU4OUUzXHU5NTAxXHU2MzA5XHU5NEFFXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb2NrQnRuQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUJ1eUJ0biwgdGlwczpcIlx1OEQyRFx1NEU3MFx1NjMwOVx1OTRBRVx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTk5NzJcdTY1OTlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmZWVkQnV5QnRuLCB0aXBzOlwiXHU5OTcyXHU2NTk5XHU4RDJEXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBmZWVkQnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmZWVkRGVzYywgdGlwczpcIlx1OTk3Mlx1NjU5OVx1NjNDRlx1OEZGMFx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZmVlZERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vXHU1QkEwXHU3MjY5XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0SWNvbiwgdGlwczpcIlx1NUJBMFx1NzI2OWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldEljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldERlc2MsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldE5hbWUsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldE5hbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5TWF4LCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU0RTBBXHU5NjUwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eU1heDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0QnV5QnRuLCB0aXBzOlwiXHU4RDJEXHU0RTcwXHU1QkEwXHU3MjY5XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXRCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvV2F0Y2gsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTc3MEJcdTVCQjZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGdvV2F0Y2g6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvUmVzdCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NEYxMVx1NjA2RlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29SZXN0OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1OTRCMVx1NUU4NFxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRpYW1vbmRGb250LCB0aXBzOlwiXHU3NTI4XHU2MjM3XHU5NEJCXHU3N0YzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkaWFtb25kRm9udDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMaXN0LCB0aXBzOlwiXHU5NEIxXHU1RTg0XHU2M0QwXHU3M0IwXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJvcG9ydGlvbiwgdGlwczpcIlx1NTE1MVx1NjM2Mlx1NkJENFx1NEY4QlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJvcG9ydGlvbjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogXHU1M0VGXHU2M0QwXHU3M0IwXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIHByaWNlRGF0YUxpc3Q6IHsgcHJpY2U6IG51bWJlcjsgdGltZXM6IG51bWJlciB9W10gPSBbXTtcclxuICAgIC8qKiBcdTk0QjFcdTVFODRcdTkwMDlcdTYyRTlcdTc2ODRcdTUwM0MgXHU3Njg0XHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHByaWNlU2VsZWN0SW5kZXg6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NjU4N1x1NUI1N1x1OEQ0NFx1NkU5MFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBidG5Ub3BSZXNMaXN0OiBzdHJpbmdbXVtdID0gW1xyXG4gICAgICAgIFtcImdhbWUvaW1nX3NlZWRzTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3NlZWRzU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX3BldE5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19wZXRTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfZm9vZG5Ob3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfZm9vZG5TZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfYmFua05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19iYW5rU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgXTtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThcdTUyMDdcdTYzNjJcdTY4MDdcdTdCN0VcdTkwMDlcdTYyRTlcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgdG9wQnRuU2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU3MEI5XHU1MUZCXHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0U2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU4MENDXHU2NjZGXHU3RUI5XHU3NDA2ICovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxlY3RCZzogc3RyaW5nW10gPSBbXCJnYW1lL2ltZ19wZXRiYWdOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfcGV0YmFnU2VsZWN0ZWQucG5nXCJdO1xyXG5cclxuICAgIC8qKiBcdTVGNTNcdTUyNERcdTkwMDlcdTYyRTlcdTc2ODRcdTVCQTBcdTcyNjlcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0UGV0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGRhdGE6IFNob3BWaWV3RGF0YTtcclxuXHJcbiAgICBwcml2YXRlIGlzRmlyc3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlSXRlbSk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5zZWxlY3RIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLm9uU2VsZWN0KTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5wcmljZUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlUHJpY2VJdGVtKTtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC5zZWxlY3RIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLm9uUHJpY2VTZWxlY3QpO1xyXG5cclxuICAgICAgICBDb3JlLm9ic2VydmFibGVQcm9wZXJ0eS53YXRjaChVc2VySW5mbywgdGhpcykua2V5KFwiZGlhbW9uZFwiLCAodikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpYW1vbmRGb250LnZhbHVlID0gdjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3aXRoZHJhd2FsID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxcIikudmFsdWUgYXMgc3RyaW5nW107XHJcbiAgICAgICAgICAgIHRoaXMucHJvcG9ydGlvbi50ZXh0ID0gYCA9IFx1MDBBNSR7KChOdW1iZXIod2l0aGRyYXdhbFsyXSkgLyBOdW1iZXIod2l0aGRyYXdhbFsxXSkpICogdilcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2goL15cXGQrKD86XFwuXFxkezAsMn0pPy8pfVx1NTE0M2A7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQoZTogU2hvcFZpZXdEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICB0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID0gZT8uaWQgfHwgMDtcclxuXHJcbiAgICAgICAgdGhpcy5wcmljZURhdGFMaXN0ID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxfdGltZXNcIikudmFsdWUgYXMgYW55O1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1OTAwOVx1NEUyRFx1NjVGNlx1NzY4NFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHBhcmFtIGUgXHU5MDA5XHU0RTJEXHU3Njg0XHU0RTBCXHU2ODA3XHJcbiAgICAgKi9cclxuICAgIG9uU2VsZWN0KGUpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXggPSBlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU3OUNEXHU1QjUwXHU2MjE2XHU5OTZFXHU2NTk5XHU1MjE3XHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldERhdGFMaXN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBsYW50U2VydmljZS5saXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGlmICghRmVlZFNlcnZpY2UubGlzdC5sZW5ndGgpIEZlZWRTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIEZlZWRTZXJ2aWNlLmxpc3Quc29ydCgoYSwgYikgPT4gYS5iYXNlLnZpdGFsaXR5IC0gYi5iYXNlLnZpdGFsaXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMzJcdTY3RDNcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTc2ODRcdTUyMTdcdTg4NjhcclxuICAgICAqIEBwYXJhbSBjZWxsIFx1NTIxN1x1ODg2OFx1ODI4Mlx1NzBCOVxyXG4gICAgICogQHBhcmFtIGluZGV4IFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbaW5kZXhdO1xyXG4gICAgICAgIGxldCBwcmljZUJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBsb2NrSWNvbiA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrX2ljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoIWQpIHJldHVybiBjb25zb2xlLndhcm4oXCJcdTY1NzBcdTYzNkVcdTRFMjJcdTU5MzFcIik7XHJcbiAgICAgICAgaWYgKGQubG9jaykge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbG9ja0ljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICBpY29uID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPFBsYW50QmFzZT5kLmJhc2UpLnNlZWRfcHJpY2UuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gKDxQbGFudEJhc2U+ZC5iYXNlKS5zZWVkX3ByaWNlLm9iai5pY29uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5jb3VudDtcclxuICAgICAgICAgICAgICAgIGljb24gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKHByaWNlQm94LmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gY291bnQgKyBcIlwiO1xyXG4gICAgICAgICAgICAocHJpY2VCb3guZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkX2ljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGljb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuYmFzZS5pY29uO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gZC5iYXNlLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMV07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0RGVzYygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NEY0RVx1OTBFOFx1RkYwQ1x1OTAwOVx1NjJFOVx1NzI2OVx1NTRDMVx1NjVGNlx1NzY4NFx1NjU3MFx1NjM2RVx1NjYzRVx1NzkzQVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdERlc2MoKSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XTtcclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgICAgICAgICAodGhpcy5zZWVkRGVzYy5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2MucmVwbGFjZShcIiZcIiwgKDxGZWVkQmFzZT5kLmJhc2UpLnZpdGFsaXR5ICsgXCJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZERlc2MudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBib3ggPSB0aGlzLmZlZWRCdXlCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0LmNvdW50ICsgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgICAgICBsZXQgYmFzZSA9IGQuYmFzZSBhcyBQbGFudEJhc2U7XHJcbiAgICAgICAgKHRoaXMuc2VlZERlc2MucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZlZWREZXNjLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZWREZXNjLnRleHQgPSBiYXNlLmRlc2M7XHJcbiAgICAgICAgdGhpcy5tYXR1cmVUaW1lLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKGJhc2UubWF0dXJlX3RpbWUpO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtQnV5QnRuLnZpc2libGUgPSAhZC5sb2NrO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXRlbUJ1eUJ0bi52aXNpYmxlID0gIWQubG9jaztcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMubG9ja0J0bkJveC52aXNpYmxlID0gZC5sb2NrO1xyXG4gICAgICAgIHRoaXMubG9ja0J0bkJveC5hY3RpdmUgPSBkLmxvY2s7XHJcbiAgICAgICAgbGV0IGdhaW5MaXN0ID0gYmFzZS5nYWluO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQm94ID0gdGhpcy5tYXR1cmVHYWluQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgICAgICBpY29uID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgIGdhaW5EYXRhID0gZ2Fpbkxpc3RbeCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBiYXNlLmhhcnZlc3Q7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gYmFzZS5pY29uO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhaW5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gZ2FpbkRhdGEub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGdhaW5EYXRhLmNvdW50ICogYmFzZS5oYXJ2ZXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAoaXRlbUJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGljb247XHJcbiAgICAgICAgICAgIChpdGVtQm94LmdldENoaWxkQnlOYW1lKFwiY291bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IFwieFwiICsgY291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYm94ID0gdGhpcy5sb2NrQnRuQm94LmdldENoaWxkQnlOYW1lKFwidW5sb2NrX2J1eVwiKS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuXHJcbiAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGJhc2UudW5sb2NrX2Nvc3Q/Lm9iaj8uaWNvbjtcclxuICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBiYXNlLnVubG9ja19jb3N0Py5jb3VudCArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwic2VlZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicGV0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJmZWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYW5rXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wQnRuSW5kZXggPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEluZGV4KGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ICE9IHRvcEJ0bkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IE51bWJlcih0b3BCdG5JbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL1x1NjRBRFx1NzlDRFxyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsYW5kSWQgPSB0aGlzLmRhdGE/LnBhcm0/LmxhbmRJZDtcclxuICAgICAgICAgICAgICAgIGlmICghbGFuZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZElkID0gTWFpblZpZXcuaW5zdC5nZXRFbXB0eUxhbmRJZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFsYW5kSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NkNBMVx1NjcwOVx1N0E3QVx1NzY4NFx1NTcxRlx1NTczMFx1NTRFNlx1RkYwMVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wic293XCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogbGFuZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0uYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwodGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxhbnRfc293LCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9cdTVFN0ZcdTU0NEFcdTg5RTNcdTk1MDFcdUZGMENcdTYyMTZcdTY2MkZcdTkxRDFcdTVFMDFcdTg5RTNcdTk1MDExXHJcbiAgICAgICAgICAgIGNhc2UgXCJ1bmxvY2tfYnV5XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZF91bmxvY2tcIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5zZWVkc1VubG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJzZWVkc1VubG9ja1wiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFudElkOiB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwiYWRfdW5sb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVBRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYW50U2VydmljZS5saXN0W3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0ubG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmNoYW5nZUl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGFudFNlcnZpY2UubGlzdFt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gXCJhZF91bmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCBlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0UGV0SW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCA9IFBldFNlcnZpY2UubGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdFBldEluZGV4ID49IFBldFNlcnZpY2UubGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBldF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0QnV5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX3dhdGNoXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBldEdvV2F0Y2goUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdLmJhc2UuaWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19yZXN0XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OUVEOFx1OEJBNFx1NEY2OVx1NjIzNFx1N0IyQ1x1NEUwMFx1NEUyQVx1NUJBMFx1NzI2OVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRHb1dhdGNoKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmZWVkX2J1eVwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTk5NzJcdTY1OTlcdThEMkRcdTRFNzBcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJ1eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aXRoZHJhd19idG5cIjpcclxuICAgICAgICAgICAgICAgIC8vXHU2M0QwXHU3M0IwXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpdGhkcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmZWVkQnV5KCkge1xyXG4gICAgICAgIGxldCBmZWVkID0gdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0gYXMgRmVlZERhdGFCYXNlO1xyXG4gICAgICAgIGlmICghZmVlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mZWVkQnV5LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJmZWVkQnV5XCJdPntcclxuICAgICAgICAgICAgICAgICAgICBmZWVkSWQ6IGZlZWQuYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSArPSBmZWVkLmJhc2Uudml0YWxpdHk7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMuZmVlZEJ1eUJ0biBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IGZlZWQuYmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdEZseTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1QkEwXHU3MjY5XHU1M0JCXHU3NzBCXHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGV0R29XYXRjaChwZXRJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnBldFdlYXIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInBldEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgcGV0SWQ6IHBldElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby53YXJlUGV0SWQgPSBwZXRJZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEQyRFx1NEU3MFx1NUJBMFx1NzI2OVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBldEJ1eSgpIHtcclxuICAgICAgICBsZXQgeyBiYXNlIH0gPSBQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF07XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnBldEJ1eSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wicGV0QnV5XCJdPntcclxuICAgICAgICAgICAgICAgICAgICBwZXRJZDogYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF0ubG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgVXNlckluZm8ud2FyZVBldElkID0gYmFzZS5pZDtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8ucGV0Vml0YWxpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IGJhc2Uudml0YWxpdHlfbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IENvbmZpZ0dhbWUucGV0RGlnZXN0SW50ZXJ2YWxUaW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU3MEI5XHU1MUZCXHU3MEI5XHU1MUZCXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlVG9wQnRuU3RhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJ0bkJveFRvcC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBsYiA9IGJ0bi5nZXRDaGlsZEF0KDApIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGlmICh4ID09PSB0aGlzLnRvcEJ0blNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVsxXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZy1tZW51bm9ybWFsLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVCb3R0b20oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NUU5NVx1OTBFOFx1NTE4NVx1NUJCOVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJvdHRvbSgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm90dG9tQm94Lm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSh4LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpdGVtQnV5Qm94ID0gdGhpcy5pdGVtQnV5QnRuLnBhcmVudCBhcyBMYXlhLkJveDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy9cdTc5Q0RcdTVCNTBcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBldE9yRmVlZExpc3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJ1eUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogLy9cdTk5NzJcdTY1OTlcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBldE9yRmVlZExpc3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJ1eUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VMaXN0LmFycmF5ID0gdGhpcy5wcmljZURhdGFMaXN0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUGV0KCkge1xyXG4gICAgICAgIGlmICghUGV0U2VydmljZS5saXN0Lmxlbmd0aCkgUGV0U2VydmljZS5pbml0KFtdKTtcclxuICAgICAgICBsZXQgcGV0ID0gUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdO1xyXG4gICAgICAgIHRoaXMucGV0SWNvbi5za2luID0gcGV0LmJhc2UuaWNvbjtcclxuICAgICAgICB0aGlzLnBldE5hbWUudGV4dCA9IHBldC5iYXNlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5wZXREZXNjLnRleHQgPSBwZXQuYmFzZS5kZXNjO1xyXG4gICAgICAgIHRoaXMudml0YWxpdHlNYXgudmFsdWUgPSBwZXQuYmFzZS52aXRhbGl0eV9tYXggKyBcIlwiO1xyXG4gICAgICAgIGxldCBidG5fYm94ID0gdGhpcy5wZXRCdXlCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChidG5fYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gcGV0LmJhc2UuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAoYnRuX2JveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gcGV0LmJhc2UuY29zdC5jb3VudCArIFwiXCI7XHJcblxyXG4gICAgICAgIGxldCBwZXRCb3ggPSB0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDEpLFxyXG4gICAgICAgICAgICBmaW5kQm94ID0gcGV0Qm94LmdldENoaWxkQnlOYW1lKFwiZmluZF9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGJhY2tfYm94ID0gcGV0Qm94LmdldENoaWxkQnlOYW1lKFwiYmFja19ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIHN0YXJJY29uOiBMYXlhLkltYWdlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcbiAgICAgICAgICAgIHN0YXJJY29uID0gZmluZEJveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnZpc2libGUgPSB4ICogMjAgPCBwZXQuYmFzZS5zZW5zaXRpdmU7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgeCAqIDIwICsgMTAgPCBwZXQuYmFzZS5zZW5zaXRpdmUgPyBcImdhbWUvaW1nX3N0YXIucG5nXCIgOiBcImdhbWUvaW1nX2hhbGZzdGFyLnBuZ1wiO1xyXG4gICAgICAgICAgICBzdGFySWNvbiA9IGJhY2tfYm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgc3Rhckljb24udmlzaWJsZSA9IHggKiAyMCA8IHBldC5iYXNlLmFiaWxpdHk7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgeCAqIDIwICsgMTAgPCBwZXQuYmFzZS5hYmlsaXR5ID8gXCJnYW1lL2ltZ19zdGFyLnBuZ1wiIDogXCJnYW1lL2ltZ19oYWxmc3Rhci5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBldC5sb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGV0QnV5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdvUmVzdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ29XYXRjaC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKFVzZXJJbmZvLndhcmVQZXRJZCA9PSBwZXQuYmFzZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFBldFNlcnZpY2UuZ2V0VW5sb2NrTGVuKCkgPT09IDEgfHwgVXNlckluZm8ud2FyZVBldElkID09PSAxMDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvV2F0Y2gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1dhdGNoLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBldEJ1eUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5MUNEXHU3RjZFXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVzZXRQZXRPckZlZWRMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5nZXREYXRhTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RTJEXHU5NUY0XHU1MTg1XHU1QkI5XHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU1MjA3XHU2MzYyXHJcbiAgICAgKiBAcGFyYW0gaSBcdTRFMEJcdTY4MDdcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNlbnRlckJveFN0YXRlKGk6IG51bWJlciwgc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KGkpIGFzIExheWEuQm94KS52aXNpYmxlID0gc2hvdztcclxuICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdChpKSBhcyBMYXlhLkJveCkuYWN0aXZlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTRCMVx1NUU4NFx1OTAwOVx1NjJFOVxyXG4gICAgICogQHBhcmFtIGUgXHU0RTBCXHU2ODA3XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25QcmljZVNlbGVjdChlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnByaWNlU2VsZWN0SW5kZXggPSBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYzRDBcdTczQjBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB3aXRoZHJhdygpIHtcclxuICAgICAgICBpZiAodGhpcy5wcmljZVNlbGVjdEluZGV4ID09IG51bGwpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkwMDlcdTYyRTlcdTg5ODFcdTYzRDBcdTczQjBcdTc2ODRcdTkxRDFcdTk4OURcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLndpdGhkcmF3LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBpZDogdGhpcy5wcmljZVNlbGVjdEluZGV4IH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTYzRDBcdTczQjBcdTYyMTBcdTUyOUZcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby53aXRoZHJhdyA9IGQubGlzdDtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLmRpYW1vbmQgPSBkLmRpYW1vbmQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk0QjFcdTVFODRcdTY1NzBcdTYzNkVcdTZFMzJcdTY3RDNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVQcmljZUl0ZW0oY2VsbDogTGF5YS5JbWFnZSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnByaWNlRGF0YUxpc3RbaV07XHJcblxyXG4gICAgICAgIGxldCB1c2VyRGF0YTogTmV0SW5pdFtcIndpdGhkcmF3XCJdWzBdID0geyBpZDogMCwgdGltZXM6IDAgfTtcclxuICAgICAgICBjb25zdCB1c2VyRGF0YUxpc3QgPSBVc2VySW5mby53aXRoZHJhdztcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHVzZXJEYXRhTGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodXNlckRhdGFMaXN0W3hdLmlkID09IGkpIHtcclxuICAgICAgICAgICAgICAgIHVzZXJEYXRhID0gdXNlckRhdGFMaXN0W3hdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGRhdGEucHJpY2UgKyBcIlx1NTE0M1wiO1xyXG4gICAgICAgIGlmIChkYXRhLnRpbWVzKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lcyA9IGRhdGEudGltZXMgLSB1c2VyRGF0YS50aW1lcztcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc19ib3hcIikgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVzX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcInRpbWVzXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU1MjY5XHU0RjU5JHtcclxuICAgICAgICAgICAgICAgIHRpbWVzIDwgMCA/IDAgOiB0aW1lc1xyXG4gICAgICAgICAgICB9XHU2QjIxYDtcclxuICAgICAgICAgICAgaWYgKHRpbWVzIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNlbGwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc19ib3hcIikgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByaWNlTGlzdC5zZWxlY3RlZEluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IFwiZ2FtZS9pbWdfcHJpY2VzZWxlY3RlZC5wbmdcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBcImdhbWUvaW1nX3ByaWNlbm9ybWFsLnBuZ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JbkRlc2NWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5EZXNjVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNpZ25JbkRlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG4vLyAgU2lnbkluVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbkluVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNpZ25Jbkxpc3QsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBzaWduSW5MaXN0OiBMYXlhLkxpc3Q7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNpZ25JblByb2dyZXNzTGIsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBzaWduSW5Qcm9ncmVzc0xiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNpZ25JblByb2dyZXNzQmFyLCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHU2NzYxXCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgc2lnbkluUHJvZ3Jlc3NCYXI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJvZ3Jlc3NEZXNjLCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHU2NTg3XHU1QjU3XHU2M0QwXHU3OTNBXCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgcHJvZ3Jlc3NEZXNjOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpbmlzaEljb24sIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY1ODdcdTVCNTdcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBmaW5pc2hJY29uOiBMYXlhLkltYWdlO1xyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zaWduSW5MaXN0LmFycmF5ID0gVGFibGVBbmFseXplLnRhYmxlKFwic2lnbkluXCIpLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5zaWduSW5MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVJdGVtKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVQcm9ncmVzcygpIHtcclxuICAgICAgICBsZXQgc2NhbGUgPSBVc2VySW5mby5zcGVlZFVwVGltZXMgLyBDb25maWdHYW1lLkFEU3BlZWRVcFRpbWVzO1xyXG4gICAgICAgIGlmIChzY2FsZSA+IDEpIHNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLnNpZ25JblByb2dyZXNzQmFyLndpZHRoID0gOTc3ICogc2NhbGU7XHJcbiAgICAgICAgdGhpcy5zaWduSW5Qcm9ncmVzc0xiLnRleHQgPSBVc2VySW5mby5zaWduSW5EYXlzICsgXCJcIjtcclxuICAgICAgICB0aGlzLnByb2dyZXNzRGVzYy50ZXh0ID0gYFx1NEVDQVx1NjVFNVx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1RkYwOFx1NEY3Rlx1NzUyOCR7VXNlckluZm8uc3BlZWRVcFRpbWVzfS8ke0NvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXN9XHU2QjIxXHU1MkEwXHU5MDFGXHVGRjA5YDtcclxuICAgICAgICB0aGlzLmZpbmlzaEljb24udmlzaWJsZSA9IFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA+PSBDb25maWdHYW1lLkFEU3BlZWRVcFRpbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlSXRlbShjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYmFyID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBvYmogPSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdFtpXTtcclxuICAgICAgICBsZXQgc2NhbGUgPSBVc2VySW5mby5zaWduSW5EYXlzIC8gb2JqLmRheXM7XHJcbiAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG4gICAgICAgIGJhci53aWR0aCA9IDUwMiAqIHNjYWxlO1xyXG4gICAgICAgIGNvbnN0IHJld2FyZEJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRfYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmoucmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJhbW91bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGB4JHtvYmoucmV3YXJkLmNvdW50fWA7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwic2lnbl9kYXlzXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU3QjdFXHU1MjMwJHtvYmouZGF5c31cdTU5MjlgO1xyXG5cclxuICAgICAgICBsZXQgc2tpbjogc3RyaW5nID0gXCJcIixcclxuICAgICAgICAgICAgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImdldF9idG5cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IG9iai5pZDtcclxuICAgICAgICBpZiAob2JqLmlkID4gVXNlckluZm8uc2lnbkluSWQpIHtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC55ID0gMTAzO1xyXG4gICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2RvbmUucG5nYDtcclxuXHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby5zaWduSW5EYXlzID49IG9iai5kYXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLnNpZ25JbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdFswXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2dldC5wbmdgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCAtIFVzZXJJbmZvLnNpZ25JbklkID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbiA9IGBnYW1lL2ltZ19nZXQucG5nYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQm94LnkgPSA1NztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX3JlY2VpdmVkLnBuZ2A7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG4uc2tpbiA9IHNraW47XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2lnbkluVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlc2NfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2lnbkluRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnZXRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OTg4Nlx1NTNENlx1NTk1Nlx1NTJCMVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25JbklkID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5zaWduSW5SZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsIHNpZ25JbklkOiBzaWduSW5JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5zaWduSW5JZCA9IHNpZ25JbklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25Jbkxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkID0gVGFibGVBbmFseXplLnRhYmxlKFwic2lnbkluXCIpLmdldChzaWduSW5JZCkucmV3YXJkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBlLnRhcmdldCBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHJld2FyZC5vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IHJld2FyZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgPyAxIDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vL2RlZmF1bHQgY2xhc3MgU3BlZWRVcFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWVkVXBWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aW1lTGIsIHRpcHM6XCJcdTUyQTBcdTkwMUZcdTY1RjZcdTk1RjRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRpbWVMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aW1lc0xiLCB0aXBzOlwiXHU1MTY4XHU0RjUzXHU1MkEwXHU5MDFGXHU1MjY5XHU0RjU5XHU2QjIxXHU2NTcwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0aW1lc0xiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNwZWVkVXBCdG4sIHRpcHM6XCJcdTUxNjhcdTRGNTNcdTUyQTBcdTkwMUZcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNwZWVkVXBCdG46IExheWEuTGFiZWw7XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbk9wZW5lZChkYXRhOiB7IGNhbGw6IEZ1bmN0aW9uIH0pIHtcclxuICAgICAgICB0aGlzLmNhbGwgPSBkYXRhLmNhbGw7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiYWxsX3NwZWVkX3VwX3RpbWVcIikudmFsdWUgYXMgbnVtYmVyO1xyXG4gICAgICAgIHRoaXMudGltZUxiLnRleHQgPSBgJHtNYXRoLmNlaWwodGltZSAvIDYwKX1cdTUyMDZcdTk0OUZgO1xyXG4gICAgICAgIHRoaXMudGltZXNMYi50ZXh0ID0gYFx1NEVDQVx1NjVFNVx1NTI2OVx1NEY1OSR7VXNlckluZm8uYWR2ZXJ0aXNlVGltZXN9XHU2QjIxYDtcclxuICAgICAgICBpZiAoVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkVXBCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNwZWVkVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3BlZWRfdXBcIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTcGVlZFVwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFEIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBhZHZlcnRpc2VUaW1lczogbnVtYmVyOyBzcGVlZFVwVGltZXM6IG51bWJlciB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9IGQuc3BlZWRVcFRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IGQuYWR2ZXJ0aXNlVGltZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVXNlckluZm8uc3BlZWRVcFRpbWVzID09IENvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNpZ25JbkRheXMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TcGVlZFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxhbmRfc3BlZWRfdXApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCBlLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsKSB0aGlzLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uIH0gZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4uL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuLi9jb3JlL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvbk9iaiB7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExaWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1QjhDXHU2MjEwICovXHJcbiAgICBvazogYm9vbGVhbjtcclxufVxyXG5cclxuLy8gIFRhc2tWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRhc2tMaXN0LCB0aXBzOlwiXHU0RUZCXHU1MkExXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0YXNrTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRhc2tMaXN0KCk7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLml0ZW1SZW5kZXIpO1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhc2tMaXN0KCkge1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QuYXJyYXkgPSBUYXNrU2VydmljZS5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtUmVuZGVyKGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgb2JqID0gVGFza1NlcnZpY2UubGlzdFtpXS5iYXNlO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrU2VydmljZS5nZXRUYXNrKG9iai5pZCk7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmouaWNvbjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBvYmoudGl0bGU7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiZGVzY1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7b2JqLmRlc2N9KCR7XHJcbiAgICAgICAgICAgICh0YXNrPy50aW1lcyA+IG9iai50aW1lcyA/IG9iai50aW1lcyA6IHRhc2s/LnRpbWVzKSB8fCAwXHJcbiAgICAgICAgfS8ke29iai50aW1lc30pYDtcclxuXHJcbiAgICAgICAgY29uc3QgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gb2JqLnJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiYW1vdW50XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcInhcIiArIG9iai5yZXdhcmQuY291bnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJnb19ydW5cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuT2JqOiBCdXR0b25PYmogPSB7XHJcbiAgICAgICAgICAgIGlkOiBvYmouaWQsXHJcbiAgICAgICAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1x1NURGMlx1OTg4Nlx1NTNENlxyXG4gICAgICAgIGlmICh0YXNrPy5yZWNlaXZlKSB7XHJcbiAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ190b21hcm93LnBuZ1wiO1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL1x1NTNFRlx1OTg4Nlx1NTNENlxyXG4gICAgICAgICAgICBpZiAodGFzaz8udGltZXMgPj0gb2JqLnRpbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfZ2V0LnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnRuT2JqLm9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ19kb25lLnBuZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IGJ0bk9iajtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX3J1blwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bk9iajogQnV0dG9uT2JqID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChidG5PYmoub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1ODNCN1x1NTNENlx1NTk1Nlx1NTJCMVxyXG4gICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnRhc2tSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsIHRhc2tJZDogYnRuT2JqLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrU2VydmljZS5nZXRUYXNrKGJ0bk9iai5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnJlY2VpdmUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuT2JqLm9rID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFza0xpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfdGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogdGFzay5iYXNlLnJld2FyZC5vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogdGFzay5iYXNlLnJld2FyZC5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKGJ0bk9iai5pZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGp1bXAoaWQsIHRhcmdldCkge1xyXG4gICAgICAgIGxldCBhZERhdGE7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgICAgY2FzZSAxMDEyOlxyXG4gICAgICAgICAgICBjYXNlIDEwMDE6XHJcbiAgICAgICAgICAgICAgICBhZERhdGEgPSBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhZERhdGE/LmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBgXHU1RTdGXHU1NDRBXHU2NEFEXHU2NTNFXHU1OTMxXHU4RDI1WyR7YWREYXRhLmNvZGV9XWAsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAwMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDEyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDAyOlxyXG4gICAgICAgICAgICAgICAgYWREYXRhID0gYXdhaXQgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWREYXRhPy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7YWREYXRhLmRhdGFbXCJtZXNzYWdlXCJdfVske2FkRGF0YS5jb2RlfV1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrSWQ6IDEwMDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAwMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDAzOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA0OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5vcGVuX2ZyaWVuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA1OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDEgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDc6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYW50X3Nvdyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA4OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA5OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5vcGVuX2ZyaWVuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDEwOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5vcGVuX2ZyaWVuZCwgWzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMTE6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYW50X3Nvdyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSwgeyBXYXJlSG91c2VEYXRhIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcclxuICovXHJcbi8vRmllbGRMZXZlbFVwVmlldyBXYXJlaG91c2VWaWV3IExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FyZWhvdXNlVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTcyNjlcdTU0QzFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1OYW1lLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxXHU1NDBEXHU3OUYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTmFtZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbURlc2MsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1EZXNjOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtSWNvbiwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1JY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbENvdW50TGIsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTUxRkFcdTU1MkVcdTY1NzBcdTkxQ0ZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsQ291bnRMYjogTGF5YS5UZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsQm94LCB0aXBzOlwiXHU1MUZBXHU1NTJFXHU3MjY5XHU1NEMxXHU0RUY3XHU2ODNDXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsbEJveDogTGF5YS5IQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbEdvbGQsIHRpcHM6XCJcdTkxRDFcdTVFMDFcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsR29sZDogTGF5YS5IQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbERpYW1vbmQsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsRGlhbW9uZDogTGF5YS5IQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWxsQnRuLCB0aXBzOlwiXHU1MUZBXHU1NTJFXHU3Njg0aWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VsbEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2VsbEFkQnRuLCB0aXBzOlwiXHU1MUZBXHU1NTJFXHU3Njg0aWNvbiBcdTVFN0ZcdTU0NEFcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNlbGxBZEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZW1wdHlfbGIsIHRpcHM6XCJcdTdBN0FcdTc2ODRcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGVtcHR5X2xiOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBXYXJlSG91c2VEYXRhW11bXSA9IFtdO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMSBcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbUluZGV4OiBzdHJpbmcgPSBcIjAsMFwiO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMVx1NjU3MFx1NjM2RSAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtRGF0YTogV2FyZUhvdXNlRGF0YTtcclxuICAgIC8qKiBcdTkwMDlcdTRFMkRcdTUxRkFcdTU1MkVcdTcyNjlcdTU0QzFcdTc2ODRcdTY1NzBcdTkxQ0YgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbVNlbGxDb3VudDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUzNTVcdTRFRjcgXHU5MUQxXHU1RTAxICovXHJcbiAgICBwcml2YXRlIHVuaXRQcmljZUdvbGQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1MzU1XHU0RUY3IFx1OTRCQlx1NzdGMyAqL1xyXG4gICAgcHJpdmF0ZSB1bml0UHJpY2VEaWFtb25kOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuZGFrYWljYW5na3UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVySXRlbUxpc3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXNjKG51bGwpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1TZWxsR29sZC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbERpYW1vbmQucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi5vbihMYXlhLkV2ZW50LklOUFVULCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IE51bWJlcih0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPiB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTGlzdCgpIHtcclxuICAgICAgICBsZXQgaSA9IDAsXHJcbiAgICAgICAgICAgIHkgPSAwLFxyXG4gICAgICAgICAgICBoYXNTZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YUxpc3RbeV0pIHRoaXMuZGF0YUxpc3RbeV0gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhTGlzdFt5XS5wdXNoKGQpO1xyXG4gICAgICAgICAgICBpZiAoZC5iYXNlLmlkID09IHRoaXMuc2VsZWN0SXRlbURhdGE/LmJhc2UuaWQpIHtcclxuICAgICAgICAgICAgICAgIGhhc1NlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBpZiAoaSA+IDIpIHtcclxuICAgICAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgeSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghaGFzU2VsZWN0ICYmIHRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbUluZGV4ID0gXCIwLDBcIjtcclxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmRhdGFMaXN0O1xyXG4gICAgICAgIHRoaXMuZW1wdHlfbGIudmlzaWJsZSA9ICF0aGlzLmRhdGFMaXN0Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckl0ZW1MaXN0KGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YUxpc3RbaV07XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjZWxsLmdldENoaWxkQnlOYW1lKGBpdGVtXyR7eH1gKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAgICAgaWYgKGRhdGFbeF0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmRhdGFTb3VyY2UgPSBgJHtpfSwke3h9YDtcclxuICAgICAgICAgICAgICAgIGxldCBpY29uID0gaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgICAgIGljb24uc2tpbiA9IGRhdGFbeF0uYmFzZS5pY29uO1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWxcclxuICAgICAgICAgICAgICAgICkudGV4dCA9IGAke2RhdGFbeF0uYmFzZS5uYW1lfV8ke2RhdGFbeF0uY291bnR9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggJiYgdGhpcy5zZWxlY3RJdGVtSW5kZXggPT0gaXRlbS5kYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhpY29uLCB7IHk6IDAgfSwgMTUwLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtRGF0YSA9IGRhdGFbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZXNjKGRhdGFbeF0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpY29uLnkgPSA1NjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbi55ICE9IDU2KSBMYXlhLlR3ZWVuLnRvKGljb24sIHsgeTogNTYgfSwgMTUwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8xXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbUluZGV4ID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7IC8vIFx1OEZEOVx1OTFDQ1x1OTcwMFx1ODk4MVx1NEYxOFx1NTMxNlx1NzNCMFx1NTcyOFx1NTA1QVx1NzY4NFx1NjYyRlx1NTIzN1x1NjVCMFx1NjU3NFx1NEUyQVx1NTIxN1x1ODg2OFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA+IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlZHVjZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50LS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50IDwgMSkgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlbGxCdG5BZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwic2VsbEJ0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bk5hbWUgPSBlLnRhcmdldC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC53YXJlaG91c2VTZWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJ3YXJlaG91c2VTZWxsXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5zZWxlY3RJdGVtRGF0YS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk5hbWUgPT0gXCJzZWxsQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBDb25maWdHYW1lLkFwaVR5cGVBRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5yZWR1Y2VBbW91bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtRGF0YS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZXNjKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmRMaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdFByaWNlR29sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0UHJpY2VHb2xkICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChidG5OYW1lID09IFwic2VsbEJ0bkFkXCIgPyAyIDogMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0UHJpY2VEaWFtb25kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5kaWFtb25kSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXRQcmljZURpYW1vbmQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJ0bk5hbWUgPT0gXCJzZWxsQnRuQWRcIiA/IDIgOiAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuTmFtZSA9PSBcInNlbGxCdG5BZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLnNlbGxCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJld2FyZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2s6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1MUZBXHU1MUZBXHU1NTJFXHU0RkUxXHU2MDZGXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlRGVzYyhkOiBXYXJlSG91c2VEYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkKSB7XHJcbiAgICAgICAgICAgICh0aGlzLml0ZW1JY29uLnBhcmVudCBhcyBMYXlhLkJveCkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAodGhpcy5pdGVtSWNvbi5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1TZWxsRGlhbW9uZC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbEdvbGQucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1JY29uLnNraW4gPSBkLmJhc2UuaWNvbjtcclxuICAgICAgICB0aGlzLml0ZW1OYW1lLnRleHQgPSBkLmJhc2UubmFtZTtcclxuICAgICAgICB0aGlzLml0ZW1EZXNjLnRleHQgPSBkLmJhc2UuZGVzYztcclxuICAgICAgICBsZXQgcHJpY2VHb2xkOiBSZXdhcmRDdXJyZW5jeUJhc2UsIHByaWNlRGlhbW9uZDogUmV3YXJkQ3VycmVuY3lCYXNlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZC5iYXNlLmdhaW4ubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZC5iYXNlLmdhaW5beF0pO1xyXG4gICAgICAgICAgICBpZiAoIWQuYmFzZS5nYWluW3hdLmNvdW50KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGQuYmFzZS5nYWluW3hdLm9iai5pZCA9PSBDb25maWdHYW1lLmdvbGRJZCkge1xyXG4gICAgICAgICAgICAgICAgcHJpY2VHb2xkID0gZC5iYXNlLmdhaW5beF07XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pdGVtU2VsbEdvbGQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgICAgIGQuYmFzZS5nYWluW3hdLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsbEJveC5hZGRDaGlsZCh0aGlzLml0ZW1TZWxsR29sZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZURpYW1vbmQgPSBkLmJhc2UuZ2Fpblt4XTtcclxuICAgICAgICAgICAgICAgICh0aGlzLml0ZW1TZWxsRGlhbW9uZC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgZC5iYXNlLmdhaW5beF0ub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxsQm94LmFkZENoaWxkKHRoaXMuaXRlbVNlbGxEaWFtb25kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gZC5jb3VudDtcclxuICAgICAgICB0aGlzLnVuaXRQcmljZUdvbGQgPSBwcmljZUdvbGQ/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgdGhpcy51bml0UHJpY2VEaWFtb25kID0gcHJpY2VEaWFtb25kPy5jb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUzRUZcdTRFRTVcdTUxRkFcdTU1MkVcdTc2ODRcdTY1NzBcdTkxQ0ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RTZWxsQ291bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbENvdW50TGIudGV4dCA9IHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCArIFwiXCI7XHJcbiAgICAgICAgKHRoaXMuaXRlbVNlbGxHb2xkLmdldENoaWxkQnlOYW1lKFwicHJpY2VcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqIHRoaXMudW5pdFByaWNlR29sZCArIFwiXCI7XHJcbiAgICAgICAgKHRoaXMuaXRlbVNlbGxEaWFtb25kLmdldENoaWxkQnlOYW1lKFwicHJpY2VcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqIHRoaXMudW5pdFByaWNlRGlhbW9uZCArIFwiXCI7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgQWJvdXRWaWV3IGZyb20gXCIuL3ZpZXcvQWJvdXRWaWV3XCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IFZpZXdTaG93QW5pIGZyb20gXCIuL2NvbXBvbmVudHMvVmlld1Nob3dBbmlcIlxuaW1wb3J0IEFkZExhbmRWaWV3IGZyb20gXCIuL3ZpZXcvQWRkTGFuZFZpZXdcIlxuaW1wb3J0IEJ1eVZpdGFsaXR5VmlldyBmcm9tIFwiLi92aWV3L0J1eVZpdGFsaXR5Vmlld1wiXG5pbXBvcnQgRmllbGRMZXZlbFVwVmlldyBmcm9tIFwiLi92aWV3L0ZpZWxkTGV2ZWxVcFZpZXdcIlxuaW1wb3J0IEZyaWVuZHNEZXNjVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNEZXNjVmlld1wiXG5pbXBvcnQgRnJpZW5kc1Jld2FyZFZpZXcgZnJvbSBcIi4vdmlldy9GcmllbmRzUmV3YXJkVmlld1wiXG5pbXBvcnQgRnJpZW5kc1ZpZXcgZnJvbSBcIi4vdmlldy9GcmllbmRzVmlld1wiXG5pbXBvcnQgR3VpZGVWaWV3IGZyb20gXCIuL3ZpZXcvR3VpZGVWaWV3XCJcbmltcG9ydCBIaW50VmlldyBmcm9tIFwiLi92aWV3L0hpbnRWaWV3XCJcbmltcG9ydCBMb2dpblZpZXcgZnJvbSBcIi4vdmlldy9Mb2dpblZpZXdcIlxuaW1wb3J0IE1haWxEZXNjVmlldyBmcm9tIFwiLi92aWV3L01haWxEZXNjVmlld1wiXG5pbXBvcnQgTWFpbFZpZXcgZnJvbSBcIi4vdmlldy9NYWlsVmlld1wiXG5pbXBvcnQgTWFpblZpZXcgZnJvbSBcIi4vdmlldy9NYWluVmlld1wiXG5pbXBvcnQgRmlndXJlQW5pIGZyb20gXCIuL2NvbXBvbmVudHMvRmlndXJlQW5pXCJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50XCJcbmltcG9ydCBPcmRlclZpZXcgZnJvbSBcIi4vdmlldy9PcmRlclZpZXdcIlxuaW1wb3J0IE92ZXJWaWV3IGZyb20gXCIuL3ZpZXcvT3ZlclZpZXdcIlxuaW1wb3J0IFNldHRpbmdWaWV3IGZyb20gXCIuL3ZpZXcvU2V0dGluZ1ZpZXdcIlxuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL3ZpZXcvU2hvcFZpZXdcIlxuaW1wb3J0IFNpZ25JbkRlc2NWaWV3IGZyb20gXCIuL3ZpZXcvU2lnbkluRGVzY1ZpZXdcIlxuaW1wb3J0IFNpZ25JblZpZXcgZnJvbSBcIi4vdmlldy9TaWduSW5WaWV3XCJcbmltcG9ydCBTcGVlZFVwVmlldyBmcm9tIFwiLi92aWV3L1NwZWVkVXBWaWV3XCJcbmltcG9ydCBUYXNrVmlldyBmcm9tIFwiLi92aWV3L1Rhc2tWaWV3XCJcbmltcG9ydCBXYXJlaG91c2VWaWV3IGZyb20gXCIuL3ZpZXcvV2FyZWhvdXNlVmlld1wiXHJcbi8qXHJcbiogXHU2RTM4XHU2MjBGXHU1MjFEXHU1OUNCXHU1MzE2XHU5MTREXHU3RjZFO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xMDgwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTkyMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInZpZXcvQWJvdXRWaWV3LnRzXCIsQWJvdXRWaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9CdXR0b24udHNcIixCdXR0b24pO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL1ZpZXdTaG93QW5pLnRzXCIsVmlld1Nob3dBbmkpO1xuICAgICAgICByZWcoXCJ2aWV3L0FkZExhbmRWaWV3LnRzXCIsQWRkTGFuZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0J1eVZpdGFsaXR5Vmlldy50c1wiLEJ1eVZpdGFsaXR5Vmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRmllbGRMZXZlbFVwVmlldy50c1wiLEZpZWxkTGV2ZWxVcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNEZXNjVmlldy50c1wiLEZyaWVuZHNEZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHNcIixGcmllbmRzUmV3YXJkVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1ZpZXcudHNcIixGcmllbmRzVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvR3VpZGVWaWV3LnRzXCIsR3VpZGVWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9IaW50Vmlldy50c1wiLEhpbnRWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9Mb2dpblZpZXcudHNcIixMb2dpblZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haWxEZXNjVmlldy50c1wiLE1haWxEZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpbFZpZXcudHNcIixNYWlsVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpblZpZXcudHNcIixNYWluVmlldyk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvRmlndXJlQW5pLnRzXCIsRmlndXJlQW5pKTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9GaWVsZENvbXBvbmVudC50c1wiLEZpZWxkQ29tcG9uZW50KTtcbiAgICAgICAgcmVnKFwidmlldy9PcmRlclZpZXcudHNcIixPcmRlclZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L092ZXJWaWV3LnRzXCIsT3ZlclZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NldHRpbmdWaWV3LnRzXCIsU2V0dGluZ1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1Nob3BWaWV3LnRzXCIsU2hvcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NpZ25JbkRlc2NWaWV3LnRzXCIsU2lnbkluRGVzY1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NpZ25JblZpZXcudHNcIixTaWduSW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TcGVlZFVwVmlldy50c1wiLFNwZWVkVXBWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9UYXNrVmlldy50c1wiLFRhc2tWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9XYXJlaG91c2VWaWV3LnRzXCIsV2FyZWhvdXNlVmlldyk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwgImltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwiLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCIuL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBDb25maWdHYW1lLCB7IEJ1aWxkVHlwZSB9IGZyb20gXCIuL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCIuL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcIi4vY29yZS9BcHBcIjtcclxuY2xhc3MgTWFpbiB7XHJcbiAgICAvKiogXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcdTUyMTdcdTg4NjggKi9cclxuICAgIHN0YXRpYyBjdXN0b21SZW5kZXJJRDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1x1NjgzOVx1NjM2RUlERVx1OEJCRVx1N0Y2RVx1NTIxRFx1NTlDQlx1NTMxNlx1NUYxNVx1NjRDRVxyXG4gICAgICAgIGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuICAgICAgICBlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuICAgICAgICBMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcbiAgICAgICAgLy9cdTUxN0NcdTVCQjlcdTVGQUVcdTRGRTFcdTRFMERcdTY1MkZcdTYzMDFcdTUyQTBcdThGN0RzY2VuZVx1NTQwRVx1N0YwMFx1NTczQVx1NjY2RlxyXG4gICAgICAgIExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcbiAgICAgICAgLy9cdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDhcdTkwMUFcdThGQzdJREVcdThCQkVcdTdGNkVcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdUZGMENcdTYyMTZcdTgwMDV1cmxcdTU3MzBcdTU3NDBcdTU4OUVcdTUyQTBkZWJ1Zz10cnVlXHU1M0MyXHU2NTcwXHVGRjBDXHU1NzQ3XHU1M0VGXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA5XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcbiAgICAgICAgTGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYmdDb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG5cclxuICAgICAgICBCVUlMRF9UWVBFID09IEJ1aWxkVHlwZS5kZWJ1ZyAmJiBHYW1lQ29uZmlnLnN0YXQgJiYgTGF5YS5TdGF0LnNob3coKTtcclxuXHJcbiAgICAgICAgLy9cdTZGQzBcdTZEM0JcdThENDRcdTZFOTBcdTcyNDhcdTY3MkNcdTYzQTdcdTUyMzZcdUZGMEN2ZXJzaW9uLmpzb25cdTc1MzFJREVcdTUzRDFcdTVFMDNcdTUyOUZcdTgwRkRcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdUZGMENcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdTRFNUZcdTRFMERcdTVGNzFcdTU0Q0RcdTU0MEVcdTdFRURcdTZENDFcdTdBMEJcclxuICAgICAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXHJcbiAgICAgICAgICAgIFwidmVyc2lvbi5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLFxyXG4gICAgICAgICAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy9cdTZGQzBcdTZEM0JcdTU5MjdcdTVDMEZcdTU2RkVcdTY2MjBcdTVDMDRcdUZGMENcdTUyQTBcdThGN0RcdTVDMEZcdTU2RkVcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTU5ODJcdTY3OUNcdTUzRDFcdTczQjBcdTVDMEZcdTU2RkVcdTU3MjhcdTU5MjdcdTU2RkVcdTU0MDhcdTk2QzZcdTkxQ0NcdTk3NjJcdUZGMENcdTUyMTlcdTRGMThcdTUxNDhcdTUyQTBcdThGN0RcdTU5MjdcdTU2RkVcdTU0MDhcdTk2QzZcdUZGMENcdTgwMENcdTRFMERcdTY2MkZcdTVDMEZcdTU2RkVcclxuICAgICAgICBMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFxyXG4gICAgICAgICAgICBcImZpbGVjb25maWcuanNvblwiLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNvbmZpZ0xvYWRlZCgpIHtcclxuICAgICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTZFMzJcdTY3RDNpZFxyXG4gICAgICAgIENvbmZpZ1tcImN1c3RvbVJlbmRlcklEXCJdID0gW107XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5pbml0KCk7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5pbml0KENvbmZpZ0dhbWUuYmFzZVVybCk7XHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5vbihFdmVudE1hcHMubG9naW5fZ2FtZSwgdGhpcywgdGhpcy5sb2dpbkdhbWUpO1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnVzZUF1ZGlvTXVzaWMgPSBmYWxzZTtcclxuICAgICAgICBBcHBDb3JlLmxpc3RlbkFwcEZ1bmN0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIFZpZXdNYW5hZ2VyLmluc3QuaW5pdCgpO1xyXG5cclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oUmVzLnZpZXdzLkxvZ2luVmlldywge1xyXG4gICAgICAgICAgICAgICAgc2hvd0xvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEdhbWVEYXRhKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5jbG9zZUltYWdlLCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMYXlhLlZpZXcuc2V0TG9hZGluZ1BhZ2UoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL1x1NTQwRVx1NjcxRlx1NEYxOFx1NTMxNlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBMYXlhLlZpZXcuc2hvd0xvYWRpbmdQYWdlKG51bGwsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDk5OTk5OTk5OTk5OTk5OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkdhbWUoKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgUmVzLnNjZW5lcyxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVzLnNjZW5lcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5TXVzaWMoUmVzLmF1ZGlvcy5CR00sIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0R2FtZURhdGEoZDogTmV0SW5pdCkge31cclxufVxyXG4vL1x1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LFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksaUNBQWdDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksaUNBQWdDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksaUNBQWdDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksZ0NBQStCLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksaUNBQWdDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksaUNBQWdDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWlDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWlDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWlDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksa0NBQWlDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLFFBQU0sRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLFFBQU8sSUFBRyxhQUFZLENBQUMsRUFBQyxNQUFLLEdBQUUsVUFBUyxVQUFTLFFBQU8sVUFBUyxRQUFPLE1BQUssZUFBYyxNQUFLLGVBQWMsS0FBRyxFQUFDLE1BQUssR0FBRSxVQUFTLGFBQVksUUFBTyxjQUFhLFFBQU8sS0FBSSxlQUFjLE1BQUssZUFBYyxLQUFHLEVBQUMsTUFBSyxHQUFFLFVBQVMsYUFBWSxRQUFPLGNBQWEsUUFBTyxNQUFLLGVBQWMsTUFBSyxlQUFjLEtBQUcsRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLEtBQUksZUFBYyxNQUFL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
