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
  var ConfigGame_default = {
    diamondId: 1001,
    goldId: 1002,
    petDigestIntervalTime: 60,
    localKey: "love_HD_farm",
    userVitalityLimit: 10,
    baseUrl: BuildType.debug == "debug" ? "//192.168.101.50:3000" : "http://game.ahd168.com:3000",
    ApiTypeDefault: 1,
    ApiTypeAD: 2,
    ADSpeedUpTimes: 6,
    version: "1.0.0"
  };

  // src/core/App.ts
  var EventMap = new Map();
  var AppCore = class {
    static runAppFunction(data) {
      let webAppFunction;
      if (Laya.Browser.onIOS) {
      } else {
        console.log(JSON.stringify(data));
        if (window["$App"] && window["$App"]["webRequest"]) {
          return new Promise((resolve) => {
            window["$App"]["webRequest"](JSON.stringify(data));
            console.log(`send => ${data}`);
            if (data.timestamp) {
              EventMap.set(data.timestamp, resolve);
            }
          });
        }
      }
    }
    static listenAppFunction() {
      window["appResponse"] = (d) => {
        if (EventMap.has(d == null ? void 0 : d.timestamp) && !d.code) {
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
    }
    onOpened() {
      this.version.text = `\u7248\u672C\u53F7\uFF1AV${ConfigGame_default.version}`;
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
  var Table = { "task": [{ "id": 1001, "reward": "1001:50", "times": 1, "title": "\u7B7E\u5230\u9886\u94BB\u77F3", "desc": "\u770B\u89C6\u9891\u7B7E\u5230", "icon": null }, { "id": 1002, "reward": "1001:100", "times": 10, "title": "\u83DC\u5730\u65BD\u80A510\u6B21", "desc": "\u83DC\u5730\u52A0\u901F10\u6B21", "icon": null }, { "id": 1003, "reward": "1001:50", "times": 10, "title": "\u83DC\u5730\u6536\u83B710\u6B21", "desc": "\u83DC\u5730\u6536\u83B710\u6B21", "icon": null }, { "id": 1004, "reward": "1001:50", "times": 5, "title": "\u8BBF\u53CB5\u6B21", "desc": "\u5077\u83DC5\u6B21", "icon": null }, { "id": 1005, "reward": "1001:20", "times": 3, "title": "\u5582\u517B\u72D7\u72D73\u6B21", "desc": "\u5582\u517B\u72D7\u72D73\u6B21", "icon": null }, { "id": 1006, "reward": "1001:20", "times": 5, "title": "\u8D2D\u4E70\u9972\u65995\u6B21", "desc": "\u8D2D\u4E70\u9972\u65995\u6B21", "icon": null }, { "id": 1007, "reward": "1001:20", "times": 10, "title": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "desc": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "icon": null }, { "id": 1008, "reward": "1002:500", "times": 3, "title": "\u51FA\u552E\u4F5C\u72693\u6B21", "desc": "\u51FA\u552E\u4F5C\u72693\u6B21", "icon": null }, { "id": 1009, "reward": "1001:100", "times": 5, "title": "\u6DFB\u52A0\u597D\u53CB", "desc": "\u6DFB\u52A0\u597D\u53CB5\u4E2A", "icon": null }, { "id": 1010, "reward": "1001:50", "times": 1, "title": "\u5206\u4EAB\u5F97\u597D\u793C", "desc": "\u5206\u4EAB\u4E00\u6B21", "icon": null }, { "id": 1011, "reward": "1002:500", "times": 3, "title": "\u6307\u5B9A\u79CD\u690D", "desc": "\u79CD\u690D\u6307\u5B9A\u79CD\u5B50", "icon": null }, { "id": 1012, "reward": "1001:50", "times": 10, "title": "\u770B\u89C6\u9891\u9886\u798F\u5229", "desc": "\u770B\u89C6\u989110\u6B21", "icon": null }], "signIn": [{ "id": 1001, "days": 7, "reward": "1001:20000" }, { "id": 1002, "days": 10, "reward": "1001:30000" }, { "id": 1003, "days": 15, "reward": "1001:50000" }, { "id": 1004, "days": 20, "reward": "1001:80000" }, { "id": 1005, "days": 30, "reward": "1001:120000" }, { "id": 1006, "days": 50, "reward": "1001:180000" }, { "id": 1007, "days": 80, "reward": "1001:300000" }, { "id": 1008, "days": 100, "reward": "1001:350000" }, { "id": 1009, "days": 150, "reward": "1001:500000" }], "plant": [{ "id": 1001, "name": "\u6C34\u7A3B", "icon": "plant_icon/1002_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1002, "name": "\u5927\u8C46", "icon": "plant_icon/1004_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1003, "name": "\u5927\u849C", "icon": "plant_icon/1012_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "240", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1004, "name": "\u5305\u5FC3\u83DC", "icon": "plant_icon/1006_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "1~2", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1005, "name": "\u571F\u8C46", "icon": "plant_icon/1007_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1006, "name": "\u841D\u535C", "icon": "plant_icon/1005_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1007, "name": "\u5C0F\u9EA6", "icon": "plant_icon/1001_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1008, "name": "\u8FA3\u6912", "icon": "plant_icon/1010_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "600", "unlock_cost": "1002:2000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1009, "name": "\u9EC4\u74DC", "icon": "plant_icon/1011_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1010, "name": "\u8304\u5B50", "icon": "plant_icon/1013_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1011, "name": "\u80E1\u841D\u535C", "icon": "plant_icon/1008_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:4500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1012, "name": "\u5357\u74DC", "icon": "plant_icon/1014_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:5000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1013, "name": "\u7389\u7C73", "icon": "plant_icon/1003_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:5500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1014, "name": "\u7518\u8517", "icon": "plant_icon/1015_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1015, "name": "\u756A\u8304", "icon": "plant_icon/1009_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }], "pet": [{ "id": 1001, "name": "\u65FA\u8D22", "icon": "pet_feed/1001_dog.png", "vitality_max": 100, "vitality_consume": 10, "cost": "1002:3000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 34, "ability": 42 }, { "id": 1002, "name": "\u6C64\u5706", "icon": "pet_feed/1007_dog.png", "vitality_max": 100, "vitality_consume": 15, "cost": "1002:4000", "desc": "\u989C\u503C\u3001\u667A\u5546\u53CC\u53CC\u5728\u7EBF", "sensitive": 40, "ability": 48 }, { "id": 1003, "name": "\u8089\u5E72", "icon": "pet_feed/1009_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:4500", "desc": "\u6700\u5FE0\u8BDA\u7684\u4F19\u4F34", "sensitive": 45, "ability": 55 }, { "id": 1004, "name": "\u4E8C\u54C8", "icon": "pet_feed/1002_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:5000", "desc": "\u7EDD\u4E0D\u62C6\u5BB6\uFF01", "sensitive": 48, "ability": 60 }, { "id": 1005, "name": "\u5927\u773C\u775B", "icon": "pet_feed/1005_dog.png", "vitality_max": 100, "vitality_consume": 17, "cost": "1002:7000", "desc": "\u6D3B\u597D\u5403\u7684\u5C11", "sensitive": 50, "ability": 75 }, { "id": 1006, "name": "\u5C0F\u5C3E\u5DF4", "icon": "pet_feed/1004_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:7500", "desc": "\u6B66\u529B\u5929\u8D4B\u5DF2\u70B9\u6EE1~\u62FF\u634F\uFF01", "sensitive": 60, "ability": 80 }, { "id": 1007, "name": "\u7403\u7403", "icon": "pet_feed/1008_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u5C31\u4E24\u4E2A\u5B57\uFF0C\u542C\u8BDD\uFF01", "sensitive": 69, "ability": 85 }, { "id": 1008, "name": "\u5C0F\u767D", "icon": "pet_feed/1003_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u770B\u5BB6\u3001\u770B\u83DC\u3001\u770B\u5B69\u5B50", "sensitive": 76, "ability": 88 }, { "id": 1009, "name": "\u70B9\u70B9", "icon": "pet_feed/1006_dog.png", "vitality_max": 100, "vitality_consume": 19, "cost": "1002:10000", "desc": "\u4F60\u503C\u5F97\u62E5\u6709\uFF01", "sensitive": 85, "ability": 93 }, { "id": 1010, "name": "\u95F7\u58A9", "icon": "pet_feed/1010_dog.png", "vitality_max": 100, "vitality_consume": 30, "cost": "1002:15000", "desc": "\u957F\u5F97\u5C31\u5F88\u51F6\uFF0C\u6293\u5C0F\u5077\u66F4\u51F6", "sensitive": 90, "ability": 99 }], "order": [{ "id": 1, "commission": "1.12", "condition": "1001:2" }, { "id": 2, "commission": "0.87", "condition": "1001:1,1002:2" }, { "id": 3, "commission": "0.69", "condition": "1001:1,1003:2,1002:3" }, { "id": 4, "commission": "0.61", "condition": "1002:4,1003:3,1004:3,1001:4" }, { "id": 5, "commission": "0.61", "condition": "1004:6,1002:5,1005:4,1001:5" }, { "id": 6, "commission": "0.68", "condition": "1003:10,1004:5,1005:3,1006:3" }, { "id": 7, "commission": "0.43", "condition": "1007:4,1003:5,1004:7,1006:10" }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:5,1002:5" }, { "id": 9, "commission": "0.39", "condition": "1006:2,1009:10,1007:8,1003:8" }, { "id": 10, "commission": "0.22", "condition": "1006:10,1010:5,1008:10,1009:6" }, { "id": 11, "commission": "0.76", "condition": "1009:5,1004:10,1001:9,1002:10" }, { "id": 12, "commission": "0.43", "condition": "1007:6,1003:11,1011:6,1005:10" }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:8" }, { "id": 14, "commission": "0.55", "condition": "1013:10,1008:8,1006:6,1001:10" }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:10,1011:12,1001:10" }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17" }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:6,1015:12,1001:14" }, { "id": 18, "commission": 0.48, "condition": "1008:14,1011:12,1009:15,1002:5" }, { "id": 19, "commission": 0.75, "condition": "1013:10,1003:20,1014:11,1001:7" }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:12" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:14,1005:16,1007:15" }, { "id": 22, "commission": "0.4", "condition": "1015:19,1007:12,1011:5,1004:17" }, { "id": 23, "commission": "0.4", "condition": "1003:19,1014:22,1015:16,1008:14" }, { "id": 24, "commission": 0.77, "condition": "1014:13,1001:17,1008:18,1004:15" }, { "id": 25, "commission": "0.39", "condition": "1012:23,1011:19,1010:15,1015:20" }, { "id": 26, "commission": 0.03, "condition": "1002:21,1011:12,1012:22,1003:19" }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:20,1011:17" }, { "id": 28, "commission": 0.53, "condition": "1014:17,1007:12,1011:17,1003:17" }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:18" }, { "id": 30, "commission": "0.34", "condition": "1011:17,1014:19,1006:14,1004:30" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:19,1006:11" }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:22,1012:12,1008:20" }, { "id": 33, "commission": "0.44", "condition": "1012:16,1013:20,1002:23,1009:16" }, { "id": 34, "commission": "0.42", "condition": "1009:19,1010:12,1011:14,1012:20" }, { "id": 35, "commission": "0.33", "condition": "1001:18,1004:19,1013:16,1003:20" }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:17,1007:19" }, { "id": 37, "commission": 0.44, "condition": "1012:19,1010:20,1002:14,1011:11" }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18" }, { "id": 39, "commission": 0.36, "condition": "1007:18,1012:13,1004:16,1002:26" }, { "id": 40, "commission": 0.28, "condition": "1004:30,1005:10,1008:18,1011:16" }, { "id": 41, "commission": "0.48", "condition": "1010:18,1009:18,1008:17,1011:26" }, { "id": 42, "commission": 0.43, "condition": "1009:21,1005:18,1007:20,1002:23" }, { "id": 43, "commission": "0.24", "condition": "1006:30,1004:14,1014:11,1008:15" }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:28,1002:34,1007:19" }, { "id": 45, "commission": "0.41", "condition": "1012:15,1010:23,1007:13,1011:13" }, { "id": 46, "commission": 0.39, "condition": "1003:22,1007:23,1010:16,1002:24" }, { "id": 47, "commission": 0.49, "condition": "1010:24,1015:20,1003:25,1014:16" }, { "id": 48, "commission": "0.26", "condition": "1013:17,1007:24,1008:37,1001:30" }, { "id": 49, "commission": 0.48, "condition": "1002:26,1004:21,1009:22,1006:20" }, { "id": 50, "commission": "0.25", "condition": "1006:27,1012:19,1008:20,1015:11" }, { "id": 51, "commission": "0.34", "condition": "1011:18,1004:19,1002:25,1003:11" }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:20,1001:25,1004:26" }, { "id": 53, "commission": "0.28", "condition": "1014:14,1012:12,1010:20,1015:18" }, { "id": 54, "commission": 0.45, "condition": "1005:22,1002:33,1009:16,1015:17" }, { "id": 55, "commission": "0.56", "condition": "1001:23,1014:19,1005:17,1010:15" }, { "id": 56, "commission": "0.35", "condition": "1006:27,1005:29,1009:17,1003:18" }, { "id": 57, "commission": 0.67, "condition": "1007:21,1008:17,1002:16,1009:25" }, { "id": 58, "commission": 0.32, "condition": "1006:20,1008:25,1005:24,1007:19" }, { "id": 59, "commission": 0.79, "condition": "1012:25,1009:30,1013:16,1008:15" }, { "id": 60, "commission": 0.69, "condition": "1015:26,1012:27,1010:31,1001:23" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:25,1011:15,1002:17" }, { "id": 62, "commission": 0.44, "condition": "1015:21,1007:15,1011:18,1006:26" }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:27" }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:29,1004:25" }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:30,1014:20,1005:15" }, { "id": 66, "commission": 0.73, "condition": "1004:25,1008:25,1002:34,1012:14" }, { "id": 67, "commission": 0.13, "condition": "1001:36,1012:20,1011:20,1003:20" }, { "id": 68, "commission": 0.69, "condition": "1013:24,1008:23,1006:16,1007:17" }, { "id": 69, "commission": 0.37, "condition": "1015:30,1004:29,1013:17,1009:10" }, { "id": 70, "commission": 0.71, "condition": "1010:23,1004:31,1011:17,1012:11" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:26,1003:28,1015:13" }, { "id": 72, "commission": 0.31, "condition": "1005:25,1002:38,1012:19,1010:14" }, { "id": 73, "commission": 0.39, "condition": "1012:34,1006:22,1003:27,1004:20" }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:30,1001:20" }, { "id": 75, "commission": 0.18, "condition": "1006:31,1014:30,1008:12,1002:25" }, { "id": 76, "commission": 0.51, "condition": "1007:21,1012:20,1004:11,1014:20" }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:16,1012:24,1007:30" }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:22" }, { "id": 79, "commission": 0.65, "condition": "1006:26,1004:18,1007:12,1011:27" }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:24" }, { "id": 81, "commission": 0.14, "condition": "1012:20,1015:28,1002:24,1003:38" }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14" }, { "id": 83, "commission": 0.53, "condition": "1010:19,1003:38,1007:22,1015:20" }, { "id": 84, "commission": 0.62, "condition": "1005:29,1014:26,1002:18,1007:38" }, { "id": 85, "commission": 0.37, "condition": "1011:20,1001:17,1012:12,1004:32" }, { "id": 86, "commission": 0.59, "condition": "1009:25,1011:20,1006:14,1015:21" }, { "id": 87, "commission": "0.31", "condition": "1006:26,1005:19,1013:20,1014:29" }, { "id": 88, "commission": "0.48", "condition": "1008:37,1011:24,1015:12,1014:11" }, { "id": 89, "commission": "0.22", "condition": "1002:17,1003:28,1005:22,1010:31" }, { "id": 90, "commission": 0.32, "condition": "1002:39,1013:28,1007:25,1001:33" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:20,1014:10,1007:26" }, { "id": 92, "commission": 0.13, "condition": "1004:38,1011:13,1008:15,1007:29" }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:39,1006:38,1008:31" }, { "id": 94, "commission": 0.22, "condition": "1002:36,1014:27,1013:16,1005:31" }, { "id": 95, "commission": 0.15, "condition": "1005:26,1011:34,1015:34,1008:16" }, { "id": 96, "commission": "0.49", "condition": "1003:24,1001:34,1007:28,1005:30" }, { "id": 97, "commission": "0.6", "condition": "1013:32,1009:33,1006:30,1011:40" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1002:0", "gain": null }, { "id": 2, "reward": "1002:1500", "cost": "1002:10000", "gain": 0.1 }, { "id": 3, "reward": "1002:2000", "cost": "1002:30000", "gain": 0.25 }, { "id": 4, "reward": "1002:2500", "cost": "1002:50000", "gain": 0.4 }, { "id": 5, "reward": "1002:3000", "cost": "1002:100000", "gain": 0.55 }], "feed": [{ "id": 1001, "name": "\u997C\u5E72", "icon": "pet_feed/1001_feed.png", "vitality": 1, "cost": "1002:30", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1002, "name": "\u575A\u679C", "icon": "pet_feed/1002_feed.png", "vitality": 2, "cost": "1002:50", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1003, "name": "\u706B\u817F", "icon": "pet_feed/1003_feed.png", "vitality": 5, "cost": "1002:100", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1004, "name": "\u725B\u8089", "icon": "pet_feed/1004_feed.png", "vitality": 50, "cost": "1002:900", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1005, "name": "\u732A\u8089", "icon": "pet_feed/1005_feed.png", "vitality": 20, "cost": "1002:460", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1006, "name": "\u9E21\u8089", "icon": "pet_feed/1006_feed.png", "vitality": 10, "cost": "1002:270", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }], "currency": [{ "id": 1001, "name": "\u94BB\u77F3", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "\u91D1\u5E01", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_times", "value": 30 }, { "id": "all_speed_up_time", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:5000,1002:10000,1002:20000,1002:30000,1002:40000,1002:50000,1002:60000" }, { "id": "goldDefault", "value": "1002:100" }, { "id": "diamondDefault", "value": "1001:50" }, { "id": "ADTimesLimit", "value": 30 }, { "id": "ADSpeedUptimes", "value": 6 }, { "id": "vitalityBuyCostGold", "value": "1002:10000" }, { "id": "vitalityLimit", "value": 10 }, { "id": "landAmountMax", "value": 9 }, { "id": "petDefaultVitality", "value": 100 }, { "id": "petDigestIntervalTime", "value": 60 }, { "id": "Videorewards", "value": "1001:100" }, { "id": "withdrawal", "value": "1001:10000:1" }, { "id": "Invitation_rewards", "value": "1001:5000" }, { "id": "withdrawal_times", "value": "0.3:3,0.5:2,5:0,10:0,50:0" }] };

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
        })
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
        gain: d.gain
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
          return;
        }
        let ad = false;
        if (((_a = data.data) == null ? void 0 : _a.type) == ConfigGame_default.ApiTypeAD) {
          yield AppCore.runAppFunction({
            uri: AppEventMap.ad,
            data: {},
            timestamp: Date.now()
          });
          ad = true;
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
            return;
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
    }
    onOpened(e) {
      this.data = e;
      let nextLand = TableAnalyze_default.table("landLevel").get(e.obj.level + 1);
      this.priceLabel.text = `\u4EF7\u683C\uFF1A${nextLand.cost.count}`;
      this.priceIcon.skin = nextLand.cost.obj.icon;
      console.log(e);
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
      core_default.view.setOverView(true, () => {
        let data = target.dataSource;
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
      });
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
      console.log("awake");
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
              }
            });
          }).catch(() => {
            this.canClick = true;
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
              wxOpenId = data.data["openid"];
              avatar = data.data["iconurl"];
              nickname = data.data["name"];
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
            this.landList.get(this.fieldId).productId = d.base.id;
            this.landList.get(this.fieldId).matureTimeLeft = d.base.mature_time;
            this.matureTime = d.base.mature_time * 1e3 + Date.now();
            this.data = this.landList.get(this.fieldId);
            this.renderData();
            core_default.audio.playSound(Res_default.audios.zhongzhi);
            this.mainViewCom.updateAllStateIcon(this.data.id);
          }
        }
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
          this.canClick = true;
          UserInfo_default.vitality = d.vitality;
          this.canSteal = false;
          this.topStateIconAni(false);
          WarehouseService_default.add(this.data.productId, d.amount);
          core_default.audio.playSound(Res_default.audios.shoucai);
          const rewardList = [];
          if (d.plantId) {
            rewardList.push({
              obj: TableAnalyze_default.table("plant").get(d.plantId),
              count: d.amount,
              posType: 3
            });
          } else {
            core_default.view.openHint({ text: "\u989D\uFF0C\u88AB\u72D7\u54AC\u4E86~~~\u6CA1\u5077\u7740~", call: () => {
            } });
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
  var MainView = class extends core_default.gameScript {
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
    sow() {
      var _a, _b;
      for (let x = 0, l = this.landList.length; x < l; x++) {
        if (!((_b = (_a = this.landList[x]) == null ? void 0 : _a.data) == null ? void 0 : _b.productId)) {
          this.landList[x].sow();
          break;
        }
      }
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
        this.bottomBox.getChildByName("friends"),
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
        if (!UserInfo_default.avatar)
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
      let btn = cell.getChildByName("btn");
      if (d.id > UserInfo_default.orderLevel + 1) {
        btn.skin = this.btnLockRes;
        btn.active = false;
      } else {
        if (d.id == UserInfo_default.orderLevel + 1) {
          btn.skin = this.btnResCur;
        } else {
          console.log("\u5DF2\u5B8C\u6210");
          btn.gray = true;
          btn.active = false;
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
      var _a, _b, _c, _d;
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
      if ((_a = this.data) == null ? void 0 : _a.call) {
        this.itemBuyBtn.visible = !d.lock;
      } else {
        this.itemBuyBtn.visible = false;
      }
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
      box.getChildByName("icon").skin = (_c = (_b = base.unlock_cost) == null ? void 0 : _b.obj) == null ? void 0 : _c.icon;
      box.getChildByName("value").value = ((_d = base.unlock_cost) == null ? void 0 : _d.count) + "";
    }
    onClick(e) {
      var _a;
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
          this.canClick = false;
          HttpControl.inst.send({
            api: ApiHttp.landSow,
            data: {
              landId: (_a = this.data.parm) == null ? void 0 : _a.landId,
              plantId: this.getDataList()[this.itemListSelectIndex].base.id,
              type: ConfigGame_default.ApiTypeDefault
            }
          }).then(() => {
            var _a2;
            ViewManager.inst.close(Res_default.views.ShopView);
            if ((_a2 = this.data) == null ? void 0 : _a2.call)
              this.data.call(this.getDataList()[this.itemListSelectIndex]);
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
              data: { type: ConfigGame_default.ApiTypeAD, taskId: btnObj.id }
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
        switch (id) {
          case 1012:
          case 1001:
            yield AppCore.runAppFunction({
              uri: AppEventMap.ad,
              data: {},
              timestamp: Date.now()
            });
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
            yield AppCore.runAppFunction({
              uri: AppEventMap.ad,
              data: {},
              timestamp: Date.now()
            });
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
  GameConfig.stat = true;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Db25maWdHYW1lLnRzIiwgIi4uLy4uL3NyYy9jb3JlL0FwcC50cyIsICIuLi8uLi9zcmMvY29yZS9BdWRpb0NvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvcmUvaW5kZXgudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQWJvdXRWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVG9vbHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9UYWJsZUFuYWx5emUudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9Vc2VySW5mby50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL05ldE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9IdHRwRGF0YUNvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9IdHRwQ29udHJvbC50cyIsICIuLi8uLi9zcmMvdmlldy9BZGRMYW5kVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9CdXlWaXRhbGl0eVZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRmllbGRMZXZlbFVwVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GcmllbmRzRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvR3VpZGVWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0hpbnRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0xvZ2luVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9NYWlsRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpbFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9FcnJvckNvZGUudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpblZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmlndXJlQW5pLnRzIiwgIi4uLy4uL3NyYy92aWV3L09yZGVyVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9PdmVyVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TZXR0aW5nVmlldy50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvRmVlZFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2hvcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2lnbkluRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2lnbkluVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TcGVlZFVwVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9UYXNrVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9XYXJlaG91c2VWaWV3LnRzIiwgIi4uLy4uL3NyYy9HYW1lQ29uZmlnLnRzIiwgIi4uLy4uL3NyYy9NYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHU1NDBEXHU3OUYwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBFdmVudE1hcHMge1xyXG4gICAgLyoqIGxvYWQgXHU3NTRDXHU5NzYyXHU4RkRCXHU4ODRDXHU2NkY0XHU2NUIwICovXHJcbiAgICBsb2FkX3Byb2dyZXNzID0gXCJsb2FkX3Byb2dyZXNzXCIsXHJcblxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMCAqL1xyXG4gICAgdXBkYXRlX2ZpZWxkID0gXCJ1cGRhdGVfZmllbGRcIixcclxuXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU0RTNCXHU5ODc1XHU4QkEyXHU1MzU1XHU2NTcwXHU2MzZFICovXHJcbiAgICB1cGRhdGVfT3JkZXIgPSBcInVwZGF0ZV9PcmRlclwiLFxyXG5cclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTUyQTBcdTkwMUYgKi9cclxuICAgIGxhbmRfc3BlZWRfdXAgPSBcImxhbmRfc3BlZWRfdXBcIixcclxuXHJcbiAgICAvKiogXHU4RkRCXHU1MTY1XHU2RTM4XHU2MjBGICovXHJcbiAgICBsb2dpbl9nYW1lID0gXCJsb2dpbl9nYW1lXCIsXHJcbiAgICAvKiogXHU5MDAwXHU1MUZBXHU2RTM4XHU2MjBGICovXHJcbiAgICBsb2dpbl9vdXQgPSBcImxvZ2luX291dFwiLFxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NEVGQlx1NTJBMSAqL1xyXG4gICAgdXBkYXRlX3Rhc2sgPSBcInVwZGF0ZV90YXNrXCIsXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU2NUIwXHU2MjRCXHU0RUZCXHU1MkExXHU2MjRCICovXHJcbiAgICB1cGRhdGVfZ3VpZF9oYW5kID0gXCJ1cGRhdGVfZ3VpZF9oYW5kXCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY0QURcdTY1M0VcdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdTUyQThcdTc1M0JcclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAge1xyXG4gICAgICAgIC8vXHU5NzAwXHU4OTgxXHU5OERFXHU5MUQxXHU1RTAxXHU3Njg0XHU1M0MyXHU4MDAzXHU4MjgyXHU3MEI5XHJcbiAgICAgICAgbm9kZTogdGhpcy5vd25lcixcclxuICAgICAgICAvL1x1ODk4MVx1OThERVx1NzY4NFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9cdTg5RTNcdTY3OTBcdTU5N0RcdTc2ODRcdTVFMjZpY29uXHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldCgxMDAxKSxcclxuICAgICAgICAgICAgICAgIC8vXHU2NTcwXHU5MUNGXHJcbiAgICAgICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgICAgICAgICAvL1x1ODk4MVx1OThERVx1NTNCQlx1NzY4NFx1NEY0RFx1N0Y2RSAxIFx1OTFEMVx1NUUwMSAyIFx1OTRCQlx1NzdGM1xyXG4gICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9XHJcbiAgICAgKi9cclxuICAgIHBsYXlfZ2V0X3Jld2FyZCA9IFwicGxheV9nZXRfcmV3YXJkXCIsXHJcbiAgICAvKiogXHU3NzBCXHU1RTdGXHU1NDRBXHU2NEFEXHU2NTNFXHU1OTU2XHU1MkIxXHU4M0I3XHU4M0I3XHU1Rjk3XHU1MkE4XHU3NTNCICBcdTRGMjBcdTUxNjVcdTgyODJcdTcwQjkgKi9cclxuICAgIHBsYXlfYWRfZ2V0X3Jld2FyZCA9IFwicGxheV9hZF9nZXRfcmV3YXJkXCIsXHJcbiAgICAvKiogXHU1M0JCXHU1OTdEXHU1M0NCXHU1QkI2ICovXHJcbiAgICBnb19mcmllbmRfaG9tZSA9IFwiZ29fZnJpZW5kX2hvbWVcIixcclxuICAgIC8qKiBcdTYyNTNcdTVGMDBcdTU5N0RcdTUzQ0JcdTc1NENcdTk3NjIgKi9cclxuICAgIG9wZW5fZnJpZW5kID0gXCJvcGVuX2ZyaWVuZFwiLFxyXG4gICAgLyoqIFx1NzlDRFx1ODNEQ1x1NEUzQlx1NzU0Q1x1OTc2Mlx1OEZEQlx1NTE2NSAqL1xyXG4gICAgcGxhbnRfc293ID0gXCJwbGFudF9zb3dcIixcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NEUwRWFwcFx1NEVBNFx1NEU5Mlx1NEU4Qlx1NEVGNlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQXBwRXZlbnRNYXAge1xyXG4gICAgLyoqIFx1NzcwQlx1NUU3Rlx1NTQ0QSAqL1xyXG4gICAgYWQgPSBcImFkXCIsXHJcbiAgICAvKiogXHU1MTczXHU5NUVEXHU1Qjg5XHU1MzUzXHU1NDJGXHU1MkE4XHU5MDZFXHU3RjY5ICovXHJcbiAgICBjbG9zZUltYWdlID0gXCJjbG9zZUltYWdlXCIsXHJcbiAgICAvKiogXHU1RkFFXHU0RkUxXHU3NjdCXHU1RjU1ICovXHJcbiAgICB3eExvZ2luID0gXCJ3eExvZ2luXCIsXHJcbiAgICAvKiogXHU1RkFFXHU0RkUxXHU3NjdCXHU1RjU1XHU2MjEwXHU1MjlGICovXHJcbiAgICB3eExvZ2luU3VjY2VzcyA9IFwid3hMb2dpblN1Y2Nlc3NcIixcclxuICAgIC8qKiBcdTVGQUVcdTRGRTFcdTUyMDZcdTRFQUIgKi9cclxuICAgIHd4U2hhcmUgPSBcInd4U2hhcmVcIixcclxuICAgIC8qKiBcdTUzQ0JcdTc2REZcdTRFOEJcdTRFRjZcdTdFREZcdThCQTEgXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGIHt0eXBlOlx1NUJGOVx1NUU5NFx1ODk4MVx1N0VERlx1OEJBMVx1NzY4NFx1NzBCOX0gKi9cclxuICAgIGV2ZW50Q291bnQgPSBcImV2ZW50Q291bnRcIixcclxuICAgIC8qKiBcdTk2OTBcdTc5QzFcdTY1M0ZcdTdCNTYgKi9cclxuICAgIHByaXZhY3lBZ3JlZW1lbnQgPSBcInByaXZhY3lBZ3JlZW1lbnRcIixcclxuICAgIC8qKiBcdTY3MERcdTUyQTFcdTUzNEZcdThCQUUgKi9cclxuICAgIHNlcnZpY2VBZ3JlZW1lbnQgPSBcInNlcnZpY2VBZ3JlZW1lbnRcIixcclxuICAgIC8qKiBcdTZDRThcdTUxOENcdTYyMTBcdTUyOUYgKi9cclxuICAgIHJlZ2lzdGVyU3VjY2VzcyA9IFwicmVnaXN0ZXJTdWNjZXNzXCIsXHJcbiAgICAvKiogXHU3NjdCXHU1RjU1XHU2MjEwXHU1MjlGICovXHJcbiAgICBsb2dpblN1Y2Nlc3MgPSBcIkxvZ2luU3VjY2Vzc1wiLFxyXG4gICAgLyoqIFx1NkUwNVx1OTY2NFx1N0YxM1x1NUI1OCAqL1xyXG4gICAgY2xlYXJDYWNoZSA9IFwiY2xlYXJDYWNoZVwiLFxyXG4gICAgLyoqIFx1NjI1M1x1NUYwMFx1OTA2RVx1N0Y2OVx1ODBDQ1x1NjY2RiAqL1xyXG4gICAgc2hvd0JhY2tncm91bmQgPSBcInNob3dCYWNrZ3JvdW5kXCIsXHJcbn1cclxuIiwgIi8vXHU0RUUzXHU3ODAxXHU3NTFGXHU2MjEwXHVGRjBDXHU0RTBEXHU4OTgxXHU2MjRCXHU1MkE4XHU0RkVFXHU2NTM5XG5cbi8qKlxuICogXHU3NTRDXHU5NzYyXHU1MjE3XHU4ODY4XG4gKi9cbiBleHBvcnQgZW51bSB2aWV3cyBcbiAgICB7XG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvQWJvdXRWaWV3LnNjZW5lICovXG4gICAgICAgIEFib3V0VmlldyA9IFwic2NlbmVzL3ZpZXdzL0Fib3V0Vmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZSAqL1xuICAgICAgICBBZGRMYW5kVmlldyA9IFwic2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0J1eVZpdGFsaXR5Vmlldy5zY2VuZSAqL1xuICAgICAgICBCdXlWaXRhbGl0eVZpZXcgPSBcInNjZW5lcy92aWV3cy9CdXlWaXRhbGl0eVZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBGaWVsZExldmVsVXBWaWV3ID0gXCJzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GcmllbmRzRGVzY1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc0Rlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZyaWVuZHNSZXdhcmRWaWV3LnNjZW5lICovXG4gICAgICAgIEZyaWVuZHNSZXdhcmRWaWV3ID0gXCJzY2VuZXMvdmlld3MvRnJpZW5kc1Jld2FyZFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRnJpZW5kc1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc1ZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9HdWlkZVZpZXcuc2NlbmUgKi9cbiAgICAgICAgR3VpZGVWaWV3ID0gXCJzY2VuZXMvdmlld3MvR3VpZGVWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lICovXG4gICAgICAgIEhpbnRWaWV3ID0gXCJzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTG9naW5WaWV3LnNjZW5lICovXG4gICAgICAgIExvZ2luVmlldyA9IFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWlsRGVzY1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpbERlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpbERlc2NWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lICovXG4gICAgICAgIE1haWxWaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpblZpZXcgPSBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmUgKi9cbiAgICAgICAgT3JkZXJWaWV3ID0gXCJzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL092ZXJWaWV3LnNjZW5lICovXG4gICAgICAgIE92ZXJWaWV3ID0gXCJzY2VuZXMvdmlld3MvT3ZlclZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2V0dGluZ1ZpZXcgPSBcInNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZSAqL1xuICAgICAgICBTaG9wVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NpZ25JbkRlc2NWaWV3LnNjZW5lICovXG4gICAgICAgIFNpZ25JbkRlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvU2lnbkluRGVzY1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZSAqL1xuICAgICAgICBTaWduSW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBTcGVlZFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NwZWVkVXBWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lICovXG4gICAgICAgIFRhc2tWaWV3ID0gXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZSAqL1xuICAgICAgICBXYXJlaG91c2VWaWV3ID0gXCJzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZVwiLCBcbiAgICB9XG5cbiBleHBvcnQgZW51bSBhdWRpb3MgXG4gICAge1xuICAgICAgICAvKiogYXVkaW8vemhvbmd6aGkubXAzICovXG4gICAgICAgIHpob25nemhpID0gXCJyZXMvYXVkaW8vemhvbmd6aGkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vdHVkaXNoZW5namkubXAzICovXG4gICAgICAgIHR1ZGlzaGVuZ2ppID0gXCJyZXMvYXVkaW8vdHVkaXNoZW5namkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vc2hvdWNhaS5tcDMgKi9cbiAgICAgICAgc2hvdWNhaSA9IFwicmVzL2F1ZGlvL3Nob3VjYWkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZ291amlhb3NoZW5nLm1wMyAqL1xuICAgICAgICBnb3VqaWFvc2hlbmcgPSBcInJlcy9hdWRpby9nb3VqaWFvc2hlbmcubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZGFrYWljYW5na3UubXAzICovXG4gICAgICAgIGRha2FpY2FuZ2t1ID0gXCJyZXMvYXVkaW8vZGFrYWljYW5na3UubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vYnV0dG9uX2NsaWNrLm1wMyAqL1xuICAgICAgICBidXR0b25fY2xpY2sgPSBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vQkdNLm1wMyAqL1xuICAgICAgICBCR00gPSBcInJlcy9hdWRpby9CR00ubXAzXCIsIFxuICAgIH1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9XYXJlaG91c2VWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU3BlZWRVcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NpZ25JbkRlc2NWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL092ZXJWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpbERlc2NWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9Mb2dpblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9HdWlkZVZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9CdXlWaXRhbGl0eVZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9BYm91dFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9NYWlsSXRlbS5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9HZXRSZXdhcmQucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvRmxvYXRSZXdhcmRJY29uLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0ZpZWxkUHJlZmFiLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvY29tcG9uZW50cy9CdXR0b24ucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9hbmkvbGFuZFVwLmFuaVwiLFxuICAgICAgICAgICAgXCJyZXMvbG9hZGluZ0JnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3dvb2R0aXRsZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZUhvdXNlQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmViZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zaGVsZi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnTWFpbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2xhbmRCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG91c2V0b3AucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9uZ2Jhb2Jhbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19mYXJtbGFuZExvZ28ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmU1LnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlNS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlNC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTQuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTMucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUzLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUyLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTEuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3ZzLnZzXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvcHMuZnNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3pob25nemhpLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vdHVkaXNoZW5namkubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9zaG91Y2FpLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZ291amlhb3NoZW5nLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZGFrYWljYW5na3UubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9CR00ubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2xvYWQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9sb2FkLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5hdGxhc1wiXTtcbiAgICBcblxuLyoqXG4gKiBcdTYyNDBcdTY3MDlcdThENDRcdTZFOTBcbiAqL1xuY29uc3QgUmVzID0ge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBzY2VuZXM6IHNjZW5lcyxcbiAgICBhdWRpb3M6IGF1ZGlvcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcztcbiIsICIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5jb25zdCBFdmVudEdsb2JhbCA9IG5ldyBMYXlhLkV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1OEJBMlx1OTYwNVx1NEU4Qlx1NEVGNlx1NzY4NFx1N0M3Qlx1NzY4NFx1NTM5Rlx1NTc4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV2ZW50Q2xhc3M6IE1hcDxhbnksIHsga2V5OiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFdmVudE9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcbiAgICAgICAgaWYgKCFFdmVudENsYXNzLmdldCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIEV2ZW50Q2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBFdmVudENsYXNzLmdldCh0YXJnZXQpLnB1c2goeyBrZXk6IG5hbWUsIGZuOiBkZXNjcmlwdG9yLnZhbHVlIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1NUM1RVx1NjAyN1x1NjdFNVx1NjI3RVx1N0VEMVx1NUI5QVx1NTQwRFx1NzlGMFx1NzY4NFx1N0M3Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJpbmROYW1lQ2xhc3M6IE1hcDxhbnksIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRCeU5hbWUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIC8vICAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG5cclxuICAgIGlmICghQmluZE5hbWVDbGFzcy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgIEJpbmROYW1lQ2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgfVxyXG4gICAgQmluZE5hbWVDbGFzcy5nZXQodGFyZ2V0KS5wdXNoKHByb3BlcnR5S2V5KTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50R2xvYmFsO1xyXG4iLCAiY29uc3QgY2FsbGVyczogTWFwPGFueSwgRnVuY3Rpb25bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG5jbGFzcyBPYnNlcnZhYmxlQ29udHJvbDxjYWxsIGV4dGVuZHMgTGF5YS5TY3JpcHQ+IHtcclxuICAgIHByaXZhdGUga2V5RXZlbnRzOiBNYXA8YW55LCBNYXA8c3RyaW5nLCBGdW5jdGlvbltdPj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNcdTVDNUVcdTYwMjdcdTUwM0NcdTUzRDhcdTUzMTZcclxuICAgICAqICBbXHU1NzI4XHU3NTRDXHU5NzYyZGVzdHJveVx1NzY4NFx1NjVGNlx1NTAxOVx1NEYxQVx1ODFFQVx1NURGMVx1NkNFOFx1OTUwMFx1NzZEMVx1NTQyQ11cclxuICAgICAqIEBwYXJhbSBPYmogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHdhdGNoPFQgZXh0ZW5kcyB7fT4oT2JqOiBULCBjYWxsZXI6IGNhbGwpIHtcclxuICAgICAgICBpZiAoIWNhbGxlcnMuaGFzKGNhbGxlcikpIHtcclxuICAgICAgICAgICAgY2FsbGVycy5zZXQoY2FsbGVyLCBbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQga2V5RXZlbnQgPSB0aGlzLmtleUV2ZW50cztcclxuICAgICAgICBpZiAoIWtleUV2ZW50LmhhcyhPYmopKSB7XHJcbiAgICAgICAgICAgIGtleUV2ZW50LnNldChPYmosIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcdTc2ODRcdTVDNUVcdTYwMjdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUM1RVx1NjAyN1xyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsIFx1NTZERVx1OEMwM1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGtleUJpbmQgPSA8S2V5IGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLZXkgJiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfb2JqID0ga2V5RXZlbnQuZ2V0KE9iaik7XHJcbiAgICAgICAgICAgIGlmICghX29iai5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgX29iai5zZXQoa2V5LCBbXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqW1wiI1wiICsga2V5XSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmpbXCIjXCIgKyBrZXldID0gT2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iaiwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1wiI1wiICsga2V5XSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb2JqLmdldChrZXkpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCIjXCIgKyBrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbGwuYmluZChjYWxsKTtcclxuICAgICAgICAgICAgX29iai5nZXQoa2V5KS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGwoT2JqW2tleV0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NEYyMFx1NTE2NVx1NzY4NGNhbGxlclx1NTIyMFx1OTY2NFx1NUY1M1x1NTI0RFx1N0VEMVx1NUI5QVx1NzY4NFx1NjI0MFx1NjcwOVx1NzY4NFx1NEU4Qlx1NEVGNiBcdTYyMTZcdTYzMDdcdTVCOUFcdTg5RTNcdTUxQjNcdTZBMjFcdTRFMkFcdTVCRjlcdThDNjFcdThEREZcdTVGNTNcdTUyNERjYWxsZXJcdTdFRDFcdTVCOUFcdTc2ODRcdTc2RDFcdTU0MkNcclxuICAgICAqIEBwYXJhbSBjYWxsZXIgXHU3NkQxXHU1NDJDXHU2NUY2XHU3RUQxXHU1QjlBXHU3Njg0XHU1NzNBXHU2NjZGXHU1QkY5XHU4QzYxXHJcbiAgICAgKiBAcGFyYW0gb2JqIFx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICByZW1vdmVCeUNhbGxlcihjYWxsZXI6IGNhbGwsIG9iajogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcik/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmdldChvYmopLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBrLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9ic2VydmFibGVDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgRXZlbnRHbG9iYWwsIHsgQmluZE5hbWVDbGFzcywgRXZlbnRDbGFzcyB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcblxyXG4vKipcclxuICogXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyaXB0IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvL0V2ZW50T25cdTg4QzVcdTk5NzBcdTU2NjhcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUFcclxuICAgICAgICBsZXQgYmluZEV2ZW50ID0gRXZlbnRDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIGJpbmRFdmVudD8uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBFdmVudEdsb2JhbC5vbihkLmtleSwgdGhpcywgZC5mbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRBd2FrZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25Bd2FrZSgpIHtcclxuICAgICAgICAvL1x1N0VEOVx1ODhDNVx1OTk3MFx1NTY2OFx1OEJCMFx1NUY1NVx1NzY4NFx1NUM1RVx1NjAyN1x1RkYwQ1x1NjdFNVx1NjI3RVx1ODI4Mlx1NzBCOVxyXG4gICAgICAgIEJpbmROYW1lQ2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2VdID0gdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uSGRBd2FrZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU0RjIwXHU1MTY1XHU1M0MyXHU2NTcwXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqIEBwYXJhbSBlXHJcbiAgICAgKi9cclxuICAgIG9uT3BlbmVkKGUpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTZGQzBcdTZEM0JcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCNjRcdTY1RjZcdTYyNDBcdTY3MDlcdTgyODJcdTcwQjlcdTU0OENcdTdFQzRcdTRFRjZcdTU3NDdcdTVERjJcdTUyMUJcdTVFRkFcdTVCOENcdTZCRDVcdUZGMENcdTZCMjFcdTY1QjlcdTZDRDVcdTUzRUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkQXdha2UoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRW5hYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRFbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NTQyRlx1NzUyOFx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1ODI4Mlx1NzBCOVx1ODhBQlx1NkRGQlx1NTJBMFx1NTIzMFx1ODIxRVx1NTNGMFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkU3RhcnRcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkU3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QjJDXHU0RTAwXHU2QjIxXHU2MjY3XHU4ODRDdXBkYXRlXHU0RTRCXHU1MjREXHU2MjY3XHU4ODRDXHVGRjBDXHU1M0VBXHU0RjFBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFN0YXJ0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFVwZGF0ZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCQ0ZcdTVFMjdcdTY2RjRcdTY1QjBcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTVDM0RcdTkxQ0ZcdTRFMERcdTg5ODFcdTU3MjhcdThGRDlcdTkxQ0NcdTUxOTlcdTU5MjdcdTVGQUFcdTczQUZcdTkwM0JcdThGOTFcdTYyMTZcdTgwMDVcdTRGN0ZcdTc1MjhnZXRDb21wb25lbnRcdTY1QjlcdTZDRDVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkVXBkYXRlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERpc2FibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGREaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTc5ODFcdTc1MjhcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTRFQ0VcdTgyODJcdTcwQjlcdTRFQ0VcdTgyMUVcdTUzRjBcdTc5RkJcdTk2NjRcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGlzYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREZXN0cm95XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25IZERlc3Ryb3koKTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NkUwNVx1OTY2NFx1OERERlx1NUY1M1x1NTI0RFx1N0M3Qlx1N0VEMVx1NUI5QVx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1ODlDMlx1NUJERlx1NjVCOVx1NkNENVxyXG4gICAgICAgICAgICBPYnNlcnZhYmxlUHJvcGVydHkucmVtb3ZlQnlDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIC8vXHU5NTAwXHU2QkMxXHU2NUY2XHU2RTA1XHU5NjY0XHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU1RjE1XHU3NTI4XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0ga2V5cy5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5c1t4XV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNEJcdTUyQThcdThDMDNcdTc1MjhcdTgyODJcdTcwQjlcdTk1MDBcdTZCQzFcdTY1RjZcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGVzdHJveSgpIHt9XHJcblxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiBcdTc1NENcdTk3NjJcdTYyNTNcdTVGMDBcdTRFRTVcdTU0MEVcdTVFMjZcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcclxuICAgIC8vICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgLy8gICovXHJcbiAgICAvLyBvbk9wZW5lZChkKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coMTExKTtcclxuICAgIC8vIH1cclxufVxyXG4iLCAiaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuXHJcbi8vY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U2hvd0FuaSBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJnLCB0aXBzOlwiXHU4MENDXHU2NjZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGJnOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb250ZW50LCB0aXBzOlwiXHU1MTg1XHU1QkI5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTphbmlUeXBlLHRpcHM6XCJcdTUyQThcdTc1M0JcdTdDN0JcdTU3OEJcIix0eXBlOkVkaXRPcHRpb24sb3B0aW9uOlwiYm90dG9tVG9TaG93LHNjYWxlU2hvd1wifSovXHJcbiAgICAvLyBcdThGRDRcdTU2REVcdTVCNTdcdTdCMjZcdTRFMzJcclxuICAgIGFuaVR5cGU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHR3ZWVuTGlzdDogTGF5YS5Ud2VlbltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9PcGVuKCkge31cclxuICAgIC8qKlxyXG4gICAgICogIFx1NTE3M1x1OTVFRFx1NjIxMFx1NTI5Rlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb0Nsb3NlKCkge31cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcblxyXG4gICAgICAgIHRoaXMuYmcuYWxwaGEgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAuNzUgfSxcclxuICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxlU2hvd1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLmZyb20oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMiwgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLCBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5ib3R0b20gPSAtdGhpcy5jb250ZW50LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJvdHRvbTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5jaXJjT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VWaWV3KCkge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY2FsZVNob3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVg6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVk6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAtdGhpcy5jb250ZW50LmhlaWdodCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi5jbGVhcihlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipcclxuICogXHU1QjlFXHU0RjhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jb25zdCBpbnN0YW5jZUxpc3Q6IE1hcDxudW1iZXIsIHsgbmV3ICgpOiB2b2lkIH0+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NzY4NGlkXHJcbiAqL1xyXG5sZXQgaW5zdGFuY2VJZDogbnVtYmVyID0gMTAwO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhbmNlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCFpbnN0YW5jZUxpc3QuaGFzKHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdKSkge1xyXG4gICAgICAgIGluc3RhbmNlSWQrKztcclxuICAgICAgICB0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSA9IGluc3RhbmNlSWQ7XHJcbiAgICAgICAgaW5zdGFuY2VMaXN0LnNldChpbnN0YW5jZUlkLCBuZXcgdGFyZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0W2tleV0gPSBpbnN0YW5jZUxpc3QuZ2V0KGluc3RhbmNlSWQpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IHsgSGludFZpZXdEYXRhIH0gZnJvbSBcInNyYy92aWV3L0hpbnRWaWV3XCI7XHJcbmltcG9ydCBPdmVyVmlldyBmcm9tIFwic3JjL3ZpZXcvT3ZlclZpZXdcIjtcclxuaW1wb3J0IFJlcywgeyB2aWV3cyB9IGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU5NzAwXHU4OTgxXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAqL1xyXG5pbnRlcmZhY2UgVmlld09wZW5QYXJtIHtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyICovXHJcbiAgICBzaG93TG9hZD86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCAqL1xyXG4gICAgc2hvd0xvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTk2OTBcdTg1Q0Zsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0IFx1OUVEOFx1OEJBNDAgKi9cclxuICAgIGhpZGVMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1MTczXHU5NUVEXHU1MTc2XHU0RUQ2XHU1NzNBXHU2NjZGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBdHJ1ZVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVx1RkYwQ1x1MzAxMFx1NkNFOFx1NjEwRlx1MzAxMVx1ODhBQlx1NTE3M1x1OTVFRFx1NzY4NFx1NTczQVx1NjY2Rlx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1OEJCRVx1N0Y2RWF1dG9EZXN0cm95QXRSZW1vdmVkPXRydWVcdUZGMENcdTUyMTlcdThENDRcdTZFOTBcdTUzRUZcdTgwRkRcdTRFMERcdTgwRkRcdTg4QUJcdTU2REVcdTY1MzZcdUZGMENcdTk3MDBcdTg5ODFcdTgxRUFcdTVERjFcdTYyNEJcdTUyQThcdTU2REVcdTY1MzZcclxuICAgICAqIHRvZG8gXHU3M0IwXHU1NzI4XHU4RkQ5XHU0RTJBXHU4QzAzXHU3NTI4XHU3Njg0XHU2NjJGXHU1RjE1XHU2NENFXHU4MUVBXHU1RTI2XHU3Njg0XHU2NUI5XHU2Q0Q1XHVGRjBDXHU2Q0ExXHU2NzA5XHU4RDcwXHU4RkQ5XHU5MUNDXHU3Njg0XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0VGXHU4MEZEXHU0RjFBXHU2NzA5XHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgKiBcdTczQjBcdTU3MjhcdTUxNjhcdTY2MkZmYWxzZSBcdTU0MEVcdTY3MUZcdTY3MDlcdTk3MDBcdTg5ODFcdTUxOERcdTRGMThcdTUzMTZcdThGRDlcdTRFMkFcdTRFMUNcdTg5N0ZcdUZGMENcdTRFMERcdTgwRkRcdTUxNzNcdTk1RURcdTUxNzZcdTVCODNcdTYyNDBcdTY3MDlcdTc1NENcdTk3NjJcdThGRDhcdTY3MkFcdTVCOUVcdTczQjBcclxuICAgICAqL1xyXG4gICAgY2xvc2VPdGhlcj86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHBhcm0/OiBhbnk7XHJcbiAgICAvKiogIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBjb21wbGV0ZT86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1NTJBMFx1OEY3RFx1OEZEQlx1NUVBNlx1NTZERVx1OEMwM1x1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcHJvZ3Jlc3M/OiBIYW5kbGVyO1xyXG59XHJcblxyXG5jb25zdCB2aWV3TWFwczogeyB1cmw6IHN0cmluZzsgdmlldzogTGF5YS5WaWV3IH1bXSA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpZXdNYW5hZ2VyIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IFZpZXdNYW5hZ2VyO1xyXG5cclxuICAgIGxvZ2luT3V0KCkge1xyXG4gICAgICAgIHZpZXdNYXBzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgdi52aWV3LmdldENvbXBvbmVudHMoTGF5YS5TY3JpcHQpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHU1NkRFXHU1OTM0XHU4OTgxXHU0RjE4XHU1MzE2XHU0RTAwXHU0RTBCXHU1MTc2XHU1QjgzXHU3NTRDXHU5NzYyXHU3Njg0XHU1MTczXHU5NUVEXHVGRjBDXHU4RkQ5XHU5MUNDXHU2NjJGXHU0RTBEXHU2NjJGXHU2NzA5XHU1NDBDXHU2ODM3XHU3Njg0XHU5NUVFXHU5ODk4XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKGUpO1xyXG4gICAgICAgICAgICAgICAgZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh2LnZpZXcudXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2MlxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcdTUzQzJcdTY1NzBcclxuICAgICAqL1xyXG4gICAgb3BlbihcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGRhdGE6IFZpZXdPcGVuUGFybSA9IHtcclxuICAgICAgICAgICAgY2xvc2VPdGhlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWREZWxheTogMTAwLFxyXG4gICAgICAgICAgICBoaWRlTG9hZERlbGF5OiAwLFxyXG4gICAgICAgIH1cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm1pc3MgcGF0aCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnNob3dMb2FkKSB7XHJcbiAgICAgICAgICAgIExheWEuVmlldy5zaG93TG9hZGluZ1BhZ2UobnVsbCwgZGF0YS5zaG93TG9hZERlbGF5KTtcclxuICAgICAgICAgICAgaWYgKHVybCAhPT0gUmVzLnZpZXdzLkxvZ2luVmlldykge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoZGF0YS5oaWRlTG9hZERlbGF5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhLmNsb3NlT3RoZXIgPSBmYWxzZTtcclxuICAgICAgICBMYXlhLlZpZXcub3BlbihcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLmNsb3NlT3RoZXIsXHJcbiAgICAgICAgICAgIGRhdGEucGFybSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoZTogTGF5YS5WaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsICE9IFJlcy52aWV3cy5Mb2dpblZpZXcpIHZpZXdNYXBzLnB1c2goeyB1cmw6IHVybCwgdmlldzogZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29uTGlzdCA9IGUuZ2V0Q29tcG9uZW50cyhMYXlhLlNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbkxpc3QuZm9yRWFjaCgoZSkgPT4gZS5lbmFibGVkICYmIGUub25PcGVuZWQgJiYgZS5vbk9wZW5lZChkYXRhLnBhcm0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGEuY29tcGxldGUgJiYgZGF0YS5jb21wbGV0ZShlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgIGAlYyA9PT4gb3BlbiAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojN2VkNmRmO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojMjJhNmIzO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YS5wcm9ncmVzc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxNzNcdTk1RURcdTg5QzZcdTU2RkVcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGFsbCBcdTU0MENcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcdTg4QUIgXHU1OTFBXHU2QjIxXHU2MjUzXHU1RjAwXHVGRjBDXHU1MTY4XHU1MjIwXHU5NjY0XHU3NTI4XHU4RkQ5XHU0RTJBXHJcbiAgICAgKiBAcGFyYW0gZGVzdHJveSBcdTk1MDBcdTZCQzEgICBUT0RPXHVGRjA4XHU5RUQ4XHU4QkE0XHU0RjFBXHU5NTAwXHU2QkMxXHU2MjQwXHU2NzA5XHU1QjUwXHU4MjgyXHU3MEI5XHVGRjBDXHU2NzJBXHU2RDRCXHU4QkQ1XHU2NjJGXHU1NDI2XHU2NzA5XHU5NUVFXHU5ODk4XHVGRjA5XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNsb3NlKFxyXG4gICAgICAgIHVybDogdmlld3MsXHJcbiAgICAgICAgYWxsOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGFuaUNvbTogdHlwZW9mIFZpZXdTaG93QW5pIHwgdHlwZW9mIEZsb2F0Vmlld1Nob3dBbmkgPSBWaWV3U2hvd0FuaVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy9UT0RPIFx1OEZEOVx1OTFDQ1x1NzNCMFx1NTcyOFx1NTE2OFx1OTBFOFx1NzUyOGRlc3Ryb3kgXHU1RjE1XHU2NENFcmVtb3ZlXHU1OTdEXHU1MENGXHU2NzA5XHU3MEI5XHU5NUVFXHU5ODk4XHVGRjBDXHU1MThEXHU5MDFBXHU4RkM3dmlldy5vcGVuXHU0RjFBXHU5MUNEXHU2NUIwXHU2Nzg0XHU1RUZBXHU3RUM0XHU0RUY2XHJcbiAgICAgICAgZGVzdHJveSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB2QW5pOiBWaWV3U2hvd0FuaTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0gdmlld01hcHNbeF0udXJsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHZpZXdNYXBzW3hdO1xyXG4gICAgICAgICAgICAgICAgdmlld01hcHMuc3BsaWNlKHgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZBbmkgPSB2LnZpZXcuZ2V0Q29tcG9uZW50KGFuaUNvbSBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZBbmkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2QW5pLmNsb3NlVmlldygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy90b2RvXHU5NzAwXHU4OTgxXHU0RjE4XHU1MzE2XHVGRjBDXHU3NTRDXHU5NzYyXHU3Njg0bWFwXHU5NzAwXHU4OTgxXHU2NTc0XHU3NDA2XHU2MjEwXHVGRjBDXHU1MTY4XHU1QzRGXHU1NDhDXHU1RjM5XHU3QTk3XHU3Njg0XHU1MzNBXHU1MjJCXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBSZXMudmlld3MuSGludFZpZXcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHU0RkREXHU4QkMxXHU1OTgyXHU2NzlDXHU1NzNBXHU2NjZGXHU1QjhDXHU1MTY4XHU2Q0ExXHU2NzA5XHU3NTRDXHU5NzYyXHU4OEFCXHU2MjUzXHU1RjAwXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1RkM1XHU2MjUzXHU1RjAwXHU0RTNCXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgaWYgKCF2aWV3TWFwcy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBsZXQgY2xvc2VMZW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAoIXZpZXdNYXBzW3hdLnZpZXcucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUxlbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VMZW4gPT09IHZpZXdNYXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLk1haW5WaWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdNYXBzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVmlld0xvZyh1cmw6IHN0cmluZywgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlYyA8PT0gJHtkZXN0cm95ID8gXCJkZXN0cm95XCIgOiBcImRpc2FibGVcIn0gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNmZjc5Nzk7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuSGludChkYXRhOiBIaW50Vmlld0RhdGEpIHtcclxuICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLkhpbnRWaWV3LCB7IHBhcm06IGRhdGEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNThcdTc1NENcdTk3NjJcclxuICAgICAqL1xyXG4gICAgY2xlYXJWaWV3TWFwcygpIHtcclxuICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3ZlclZpZXdDb206IE92ZXJWaWV3O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1MTczXHU5NUVEXHU4RkM3XHU1RUE2XHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIHNldE92ZXJWaWV3KG9wZW46IGJvb2xlYW4sIGNhbGw/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuT3ZlclZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAodjogT3ZlclZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyVmlld0NvbSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuY2xvc2UoY2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJWaWV3Q29tKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJWaWV3Q29tLm9wZW4oY2FsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBjb25zdCBlbnVtIEJ1aWxkVHlwZSB7XHJcbiAgICAvKiogXHU2RDRCXHU4QkQ1XHU3M0FGXHU1ODgzICovXHJcbiAgICB0ZXN0ID0gXCJ0ZXN0XCIsXHJcbiAgICAvKiogXHU3RUJGXHU0RTBBXHU3M0FGXHU1ODgzICovXHJcbiAgICBvbmxpbmUgPSBcIm9ubGluZVwiLFxyXG4gICAgLyoqIFx1NjcyQ1x1NTczMFx1NUYwMFx1NTNEMSAqL1xyXG4gICAgZGVidWcgPSBcImRlYnVnXCIsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTZFMzhcdTYyMEZcdTkxNERcdTdGNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjNpZCAqL1xyXG4gICAgZGlhbW9uZElkOiAxMDAxLFxyXG4gICAgLyoqIFx1OTFEMVx1NUUwMWlkICovXHJcbiAgICBnb2xkSWQ6IDEwMDIsXHJcbiAgICAvKiogXHU3MkQ3XHU3MkQ3XHU2RDg4XHU1MzE2XHU5OERGXHU3MjY5XHU5NUY0XHU5Njk0XHU2NUY2XHU5NUY0IFx1NzlEMiAqL1xyXG4gICAgcGV0RGlnZXN0SW50ZXJ2YWxUaW1lOiA2MCxcclxuICAgIC8qKiBcdTZFMzhcdTYyMEZcdTY3MkNcdTU3MzBcdTUwQThcdTVCNThrZXkgKi9cclxuICAgIGxvY2FsS2V5OiBcImxvdmVfSERfZmFybVwiLFxyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NEY1M1x1NTI5Qlx1NEUwQVx1OTY1MCAqL1xyXG4gICAgdXNlclZpdGFsaXR5TGltaXQ6IDEwLFxyXG4gICAgLyoqIFx1NTM0Rlx1OEJBRVx1NTczMFx1NTc0MCAqL1xyXG4gICAgLy8gYmFzZVVybDogXCIvLzQ3LjEwOC4xOTIuMTgxOjgwOTIvIGZhcm1cIixcclxuICAgIGJhc2VVcmw6XHJcbiAgICAgICAgQlVJTERfVFlQRSA9PSBCdWlsZFR5cGUuZGVidWcgPyBcIi8vMTkyLjE2OC4xMDEuNTA6MzAwMFwiIDogXCJodHRwOi8vZ2FtZS5haGQxNjguY29tOjMwMDBcIixcclxuICAgIC8vIGJhc2VVcmw6IERFQlVHID8gXCIvLzE5Mi4xNjguMTAxLjUwOjMwMDBcIiA6IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMDAwXCIsXHJcbiAgICAvLyBiYXNlVXJsOiBcImh0dHA6Ly9nYW1lLmFoZDE2OC5jb206MzAwMFwiLFxyXG4gICAgLy8gdG9kbyBcdThGRDlcdTkxQ0NcdTc2ODRJcFx1NTNFRlx1NEVFNVx1OEJCRlx1OTVFRVx1NTNFRlx1ODBGRFx1NjYyRlx1NjcwOVx1OTVFRVx1OTg5OFx1NzY4NFxyXG4gICAgLy8gYmFzZVVybDogXCIvLzQ3LjEwOC4xOTIuMTgxOjMwMDBcIixcclxuICAgIC8qKiBhcGlcdThCRjdcdTZDNDJcdTdDN0JcdTU3OEIgXHU5RUQ4XHU4QkE0ICovXHJcbiAgICBBcGlUeXBlRGVmYXVsdDogMSxcclxuICAgIC8qKiBhcGlcdThCRjdcdTZDNDJcdTdDN0JcdTU3OEIgXHU3NzBCXHU1RTdGXHU1NDRBICovXHJcbiAgICBBcGlUeXBlQUQ6IDIsXHJcbiAgICAvKiogXHU1RTdGXHU1NDRBXHU2NzYxXHU0RUY2IFx1NTJBMFx1OTAxRlx1NEY3Rlx1NzUyOFx1NEU4NjZcdTZCMjEgKi9cclxuICAgIEFEU3BlZWRVcFRpbWVzOiA2LFxyXG4gICAgdmVyc2lvbjogXCIxLjAuMFwiLFxyXG59O1xyXG4iLCAiaW1wb3J0IHsgQXBwRXZlbnRNYXAgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IHsganNvbiB9IGZyb20gXCJzdHJlYW0vY29uc3VtZXJzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcERlc3BhdGNoRGF0YSB7XHJcbiAgICB1cmk6IEFwcEV2ZW50TWFwO1xyXG4gICAgZGF0YTogb2JqZWN0O1xyXG4gICAgdGltZXN0YW1wPzogc3RyaW5nIHwgbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcERlc3BhdGNoUmV0dXJuRGF0YSB7XHJcbiAgICAvKiogXHU1MzRGXHU4QkFFXHU3MkI2XHU2MDAxXHU3ODAxIDAgXHU0RTNBXHU2QjYzXHU1RTM4IFx1NTE3Nlx1NUI4M1x1NEUzQVx1OTUxOVx1OEJFRlx1NzgwMSAqL1xyXG4gICAgY29kZTogbnVtYmVyO1xyXG4gICAgLyoqIFx1NTM0Rlx1OEJBRXVyaSAqL1xyXG4gICAgdXJpOiBBcHBFdmVudE1hcDtcclxuICAgIC8qKiBcdThGRDRcdTU2REVcdTUxNzdcdTRGNTNcdTc2ODRcdTY1NzBcdTYzNkUgKi9cclxuICAgIGRhdGE6IG9iamVjdDtcclxuICAgIC8qKiBcdTY4MDdcdThCQzYgKi9cclxuICAgIHRpbWVzdGFtcD86IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgRXZlbnRNYXA6IE1hcDxzdHJpbmcgfCBudW1iZXIsIEZ1bmN0aW9uPiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiB3ZWIgYXBwIFx1NEVBNFx1NEU5MlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29yZSB7XHJcbiAgICAvKipcdTgyRjlcdTY3OUNcdTdDN0JcdTU3OEIgKi9cclxuICAgIHN0YXRpYyB0eXBlSW9zOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHU1Qjg5XHU1MzUzXHU3QzdCXHU1NzhCICovXHJcbiAgICBzdGF0aWMgdHlwZUFuZHJvaWQ6IG51bWJlciA9IDI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNjdcdTg4NENhcHBcdTRFQTRcdTRFOTJcdTY1QjlcdTZDRDVcclxuICAgICAqIEBwYXJhbSBuYW1lIFx1NjVCOVx1NkNENVx1NTQwRFx1NzlGMFxyXG4gICAgICogQHBhcmFtIGRhdGEgXHU0RjIwXHU1MTY1XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBydW5BcHBGdW5jdGlvbihkYXRhPzogQXBwRGVzcGF0Y2hEYXRhKTogUHJvbWlzZTxBcHBEZXNwYXRjaFJldHVybkRhdGE+IHtcclxuICAgICAgICBsZXQgd2ViQXBwRnVuY3Rpb247XHJcbiAgICAgICAgaWYgKExheWEuQnJvd3Nlci5vbklPUykge1xyXG4gICAgICAgICAgICAvLyB3ZWJBcHBGdW5jdGlvbiA9IHRoaXMuZGV0ZWN0aW9uSGFzRnVuY3Rpb24odGhpcy50eXBlSW9zLCBuYW1lKTtcclxuICAgICAgICAgICAgLy8gaWYgKHdlYkFwcEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBpZiAobmFtZSA9PSB0aGlzLmNsb3NlV2ViVmlldykge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgIC8vXHU1MTczXHU5NUVEd2Vidmlld1x1NzI3OVx1NkI4QVx1NTkwNFx1NzQwNlxyXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgIHdpbmRvd1tcIndlYmtpdFwiXVtcIm1lc3NhZ2VIYW5kbGVyc1wiXVt0aGlzLmxlYXZlQ2hhbm5lbF1bXCJwb3N0TWVzc2FnZVwiXShcclxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBzdGF0dXM6IDEgfSlcclxuICAgICAgICAgICAgLy8gICAgIC8vICAgICApOyAvL1x1NzI3OVx1NkI4QVx1NTkwNFx1NzQwNlx1OTcwMFx1ODk4MVx1NTE0OFx1OTAwMFx1NTFGQVx1OTg5MVx1OTA1M1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAvLyB3ZWJBcHBGdW5jdGlvblsncG9zdE1lc3NhZ2UnXShkYXRhKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInJ1biA6XCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl1bXCJtZXNzYWdlSGFuZGxlcnNcIl1bbmFtZV1bXCJwb3N0TWVzc2FnZVwiXShkYXRhKTtcclxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93W1wid2Via2l0XCJdW1wibWVzc2FnZUhhbmRsZXJzXCJdW25hbWVdW1wicG9zdE1lc3NhZ2VcIl0oXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzOiAxIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAvLyBhbGVydCh3aW5kb3dbXCIkQXBwXCJdICYmIHdpbmRvd1tcIiRBcHBcIl1bXCJ3ZWJSZXF1ZXN0XCJdKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvd1tcIiRBcHBcIl0gJiYgd2luZG93W1wiJEFwcFwiXVtcIndlYlJlcXVlc3RcIl0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcIiRBcHBcIl1bXCJ3ZWJSZXF1ZXN0XCJdKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VuZCA9PiAke2RhdGF9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudGltZXN0YW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50TWFwLnNldChkYXRhLnRpbWVzdGFtcCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHdlYkFwcEZ1bmN0aW9uID0gdGhpcy5kZXRlY3Rpb25IYXNGdW5jdGlvbih0aGlzLnR5cGVBbmRyb2lkLCBuYW1lKTtcclxuICAgICAgICAgICAgLy8gaWYgKHdlYkFwcEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93W1wid2ViUmVxdWVzdFwiXVtuYW1lXShkYXRhKTtcclxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93W1wid2ViUmVxdWVzdFwiXVtuYW1lXSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NkQxXHU1NDJDYXBwIFx1NjI2N1x1ODg0Q2g1IFx1NjNBNVx1NTNFM1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbGlzdGVuQXBwRnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgLy9cdTc2RDFcdTU0MkNcdTYyNEJcdTY3M0FcdTUxNzNcdTk1RURcdTRFOEJcdTRFRjZcdTU0Q0RcdTVFOTRcclxuXHJcbiAgICAgICAgd2luZG93W1wiYXBwUmVzcG9uc2VcIl0gPSAoZDogQXBwRGVzcGF0Y2hSZXR1cm5EYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGQpKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoZD8udGltZXN0YW1wKTtcclxuICAgICAgICAgICAgaWYgKEV2ZW50TWFwLmhhcyhkPy50aW1lc3RhbXApICYmICFkLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50TWFwLmdldChkLnRpbWVzdGFtcCkoZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Db250cm9sIHtcclxuICAgIHBsYXlTb3VuZChcclxuICAgICAgICB1cmw6IHN0cmluZyxcclxuICAgICAgICBsb29wcz86IG51bWJlcixcclxuICAgICAgICBjb21wbGV0ZT86IEhhbmRsZXIsXHJcbiAgICAgICAgc291bmRDbGFzcz86IG5ldyAoKSA9PiBhbnksXHJcbiAgICAgICAgc3RhcnRUaW1lPzogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQodXJsLCBsb29wcywgY29tcGxldGUsIHNvdW5kQ2xhc3MsIHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcbiAgICBwbGF5TXVzaWModXJsOiBzdHJpbmcsIGxvb3BzID0gMCwgY29tcGxldGU/OiBIYW5kbGVyLCBzdGFydFRpbWU/OiBudW1iZXIpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5wbGF5TXVzaWModXJsLCBsb29wcywgY29tcGxldGUsIHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1NjI0MFx1NjcwOVx1OTdGM1x1NjU0OFx1RkYwOFx1NEUwRFx1NTMwNVx1NjJFQ1x1ODBDQ1x1NjY2Rlx1OTdGM1x1NEU1MFx1RkYwOVx1NjYyRlx1NTQyNlx1OTc1OVx1OTdGM1x1MzAwMiAqL1xyXG4gICAgc2V0IHNvdW5kTXV0ZWQoc3RhdGUpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zb3VuZE11dGVkID0gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBnZXQgc291bmRNdXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gTGF5YS5Tb3VuZE1hbmFnZXIuc291bmRNdXRlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MENDXHU2NjZGXHU5N0YzXHU0RTUwXHVGRjA4XHU0RTBEXHU1MzA1XHU2MkVDXHU5N0YzXHU2NTQ4XHVGRjA5XHU2NjJGXHU1NDI2XHU5NzU5XHU5N0YzICovXHJcbiAgICBzZXQgbXVzaWNNdXRlZChzdGF0ZSkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLm11c2ljTXV0ZWQgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIGdldCBtdXNpY011dGVkKCkge1xyXG4gICAgICAgIHJldHVybiBMYXlhLlNvdW5kTWFuYWdlci5tdXNpY011dGVkO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQXVkaW9Db250cm9sIGZyb20gXCIuL0F1ZGlvQ29udHJvbFwiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiwgRmluZEJ5TmFtZSB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCBDb3JlID0ge1xyXG4gICAgLyoqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNiAqL1xyXG4gICAgb2JzZXJ2YWJsZVByb3BlcnR5OiBPYnNlcnZhYmxlUHJvcGVydHksXHJcbiAgICAvKiogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4ICovXHJcbiAgICB2aWV3OiBWaWV3TWFuYWdlci5pbnN0LFxyXG4gICAgLyoqIFx1NUYxNVx1NjRDRVx1ODExQVx1NjcyQ1x1N0VDNFx1NEVGNiAqL1xyXG4gICAgZ2FtZVNjcmlwdDogR2FtZVNjcmlwdCxcclxuICAgIC8qKiBcdTUzNTVcdTRGOEJcdTg4QzVcdTk5NzBcdTU2NjggKi9cclxuICAgIGluc3RhbmNlOiBJbnN0YW5jZSxcclxuICAgIC8qKiBcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuICAgIGV2ZW50T246IEV2ZW50T24sXHJcbiAgICAvKiogdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZVx1NzY4NFx1NzcwMVx1NEU4Qlx1NTE5OVx1NkNENSBcdTUzRUFcdTgwRkRcdTY3RTVcdTYyN0VcdTRFMEJcdTRFMDBcdTdFQTdcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbiAgICBmaW5kQnlOYW1lOiBGaW5kQnlOYW1lLFxyXG4gICAgLyoqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNiAqL1xyXG4gICAgZXZlbnRHbG9iYWw6IEV2ZW50R2xvYmFsLFxyXG4gICAgLyoqXHU5N0YzXHU5ODkxICovXHJcbiAgICBhdWRpbzogbmV3IEF1ZGlvQ29udHJvbCgpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29yZTtcclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0VmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp2ZXJzaW9uLCB0aXBzOlwiXHU3M0E5XHU1QkI2XHU1NDBEXHU3OUYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2ZXJzaW9uOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24udGV4dCA9IGBcdTcyNDhcdTY3MkNcdTUzRjdcdUZGMUFWJHtDb25maWdHYW1lLnZlcnNpb259YDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFib3V0Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVzZXJfYWdyZWVtZW50XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1NzUyOFx1NjIzN1x1NTM0Rlx1OEJBRVxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAuc2VydmljZUFncmVlbWVudCwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByaXZhY3lcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5NjkwXHU3OUMxXHU2NTNGXHU3QjU2XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5wcml2YWN5QWdyZWVtZW50LCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVmYXVsdFJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRlZmF1bHRSZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZG93blJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRvd25SZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXNTY2FsZSwgdGlwczpcIlx1NjYyRlx1NTQyNlx1N0YyOVx1NjUzRVwiLHR5cGU6Q2hlY2t9Ki9cclxuICAgIHByaXZhdGUgaXNTY2FsZSA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNjYWxlVmFsLCB0aXBzOlwiXHU3RjI5XHU2NTNFXHU3Njg0XHU1MDNDXCIsdHlwZTpOdW1iZXIsIGRlZmF1bHQ6MC45fSovXHJcbiAgICBwcml2YXRlIHNjYWxlVmFsOiBudW1iZXIgPSAwLjk7XHJcblxyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgb2xkU2NhbGVZOiBudW1iZXI7XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gKHRoaXMub3duZXIgYXMgTGF5YS5Cb3gpLnNldF9hbmNob3JYKDAuNSk7XHJcbiAgICAgICAgLy8gKHRoaXMub3duZXIgYXMgTGF5YS5Cb3gpLnNldF9hbmNob3JZKDAuNSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc1NjYWxlKTtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikubW91c2VFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWCA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVYKCk7XHJcbiAgICAgICAgdGhpcy5vbGRTY2FsZVkgPSAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikuZ2V0X3NjYWxlWSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VEb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRvd25SZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKHRoaXMuc2NhbGVWYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBbmkoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1NjYWxlKSByZXR1cm47XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5vd25lcixcclxuICAgICAgICAgICAgeyBzY2FsZVg6IHNjYWxlICogdGhpcy5vbGRTY2FsZVgsIHNjYWxlWTogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWSB9LFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2tpbihza2luOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXNraW4pIHJldHVybjtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkltYWdlKS5za2luID0gc2tpbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7fVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcblxyXG5jb25zdCBMb2NhbERhdGEgPSB7XHJcbiAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgIHRva2VuOiBudWxsLFxyXG5cclxuICAgIC8qKiB0cnVlIFx1NEUzQVx1NTE3M1x1OTVFRCBmYWxzZSBcdTRFM0FcdTYyNTNcdTVGMDAgKi9cclxuICAgIHNvdW5kOiBmYWxzZSxcclxuICAgIC8qKiB0cnVlIFx1NEUzQVx1NTE3M1x1OTVFRCBmYWxzZSBcdTRFM0FcdTYyNTNcdTVGMDAgKi9cclxuICAgIG11c2ljOiBmYWxzZSxcclxuICAgIC8qKiB2ZXJzaW9uICovXHJcbiAgICB2ZXJzaW9uOiBcIjAuMC4wXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogXHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0IGxvY2FsRGF0YSBcdTU3MjhcdThGRDlcdTRFMkFcdTkxQ0NcdTk3NjJcdTVCOUFcdTRFNDlcdTU5N0RcclxuICovXHJcbmNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBsb2NhbERhdGEgPSBMb2NhbERhdGE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSkgfHwgTG9jYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgzQjdcdTUzRDZcdTY3MkNcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGdldEpTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdThCQkVcdTdGNkVcdTY3MkNcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIHNldEpTT048a2V5IGV4dGVuZHMga2V5b2YgdHlwZW9mIExvY2FsRGF0YT4oa2V5OiBrZXksIGRhdGE6IHR5cGVvZiBMb2NhbERhdGFba2V5XSkge1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhW2tleV0gPSBkYXRhO1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSwgdGhpcy5sb2NhbERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSwgeyB2ZXJzaW9uOiB0aGlzLmxvY2FsRGF0YS52ZXJzaW9uIH0pO1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhID0ge1xyXG4gICAgICAgICAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgICAgICAgICAgdG9rZW46IG51bGwsXHJcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBtdXNpYzogdHJ1ZSxcclxuICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5sb2NhbERhdGEudmVyc2lvbixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9jYWxTdG9yYWdlU2VydmljZSgpO1xyXG4iLCAiLyoqIFx1NjI0MFx1NjcwOVx1ODg2OCAqL1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBUYWJsZSA9IHtcInRhc2tcIjpbe1wiaWRcIjoxMDAxLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjEsXCJ0aXRsZVwiOlwiXHU3QjdFXHU1MjMwXHU5ODg2XHU5NEJCXHU3N0YzXCIsXCJkZXNjXCI6XCJcdTc3MEJcdTg5QzZcdTk4OTFcdTdCN0VcdTUyMzBcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDIsXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1ODNEQ1x1NTczMFx1NjVCRFx1ODBBNTEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTgzRENcdTU3MzBcdTUyQTBcdTkwMUYxMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwMyxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdTgzRENcdTU3MzBcdTY1MzZcdTgzQjcxMFx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4M0RDXHU1NzMwXHU2NTM2XHU4M0I3MTBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDQsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6NSxcInRpdGxlXCI6XCJcdThCQkZcdTUzQ0I1XHU2QjIxXCIsXCJkZXNjXCI6XCJcdTUwNzdcdTgzREM1XHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA1LFwicmV3YXJkXCI6XCIxMDAxOjIwXCIsXCJ0aW1lc1wiOjMsXCJ0aXRsZVwiOlwiXHU1NTgyXHU1MTdCXHU3MkQ3XHU3MkQ3M1x1NkIyMVwiLFwiZGVzY1wiOlwiXHU1NTgyXHU1MTdCXHU3MkQ3XHU3MkQ3M1x1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNixcInJld2FyZFwiOlwiMTAwMToyMFwiLFwidGltZXNcIjo1LFwidGl0bGVcIjpcIlx1OEQyRFx1NEU3MFx1OTk3Mlx1NjU5OTVcdTZCMjFcIixcImRlc2NcIjpcIlx1OEQyRFx1NEU3MFx1OTk3Mlx1NjU5OTVcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDcsXCJyZXdhcmRcIjpcIjEwMDE6MjBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU4RDJEXHU0RTcwXHU3OUNEXHU1QjUwMTBcdTZCMjFcIixcImRlc2NcIjpcIlx1OEQyRFx1NEU3MFx1NzlDRFx1NUI1MDEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA4LFwicmV3YXJkXCI6XCIxMDAyOjUwMFwiLFwidGltZXNcIjozLFwidGl0bGVcIjpcIlx1NTFGQVx1NTUyRVx1NEY1Q1x1NzI2OTNcdTZCMjFcIixcImRlc2NcIjpcIlx1NTFGQVx1NTUyRVx1NEY1Q1x1NzI2OTNcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDksXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCIsXCJ0aW1lc1wiOjUsXCJ0aXRsZVwiOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXCIsXCJkZXNjXCI6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0I1XHU0RTJBXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDEwLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjEsXCJ0aXRsZVwiOlwiXHU1MjA2XHU0RUFCXHU1Rjk3XHU1OTdEXHU3OTNDXCIsXCJkZXNjXCI6XCJcdTUyMDZcdTRFQUJcdTRFMDBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMTEsXCJyZXdhcmRcIjpcIjEwMDI6NTAwXCIsXCJ0aW1lc1wiOjMsXCJ0aXRsZVwiOlwiXHU2MzA3XHU1QjlBXHU3OUNEXHU2OTBEXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTY5MERcdTYzMDdcdTVCOUFcdTc5Q0RcdTVCNTBcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMTIsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU3NzBCXHU4OUM2XHU5ODkxXHU5ODg2XHU3OThGXHU1MjI5XCIsXCJkZXNjXCI6XCJcdTc3MEJcdTg5QzZcdTk4OTExMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9XSxcInNpZ25JblwiOlt7XCJpZFwiOjEwMDEsXCJkYXlzXCI6NyxcInJld2FyZFwiOlwiMTAwMToyMDAwMFwifSx7XCJpZFwiOjEwMDIsXCJkYXlzXCI6MTAsXCJyZXdhcmRcIjpcIjEwMDE6MzAwMDBcIn0se1wiaWRcIjoxMDAzLFwiZGF5c1wiOjE1LFwicmV3YXJkXCI6XCIxMDAxOjUwMDAwXCJ9LHtcImlkXCI6MTAwNCxcImRheXNcIjoyMCxcInJld2FyZFwiOlwiMTAwMTo4MDAwMFwifSx7XCJpZFwiOjEwMDUsXCJkYXlzXCI6MzAsXCJyZXdhcmRcIjpcIjEwMDE6MTIwMDAwXCJ9LHtcImlkXCI6MTAwNixcImRheXNcIjo1MCxcInJld2FyZFwiOlwiMTAwMToxODAwMDBcIn0se1wiaWRcIjoxMDA3LFwiZGF5c1wiOjgwLFwicmV3YXJkXCI6XCIxMDAxOjMwMDAwMFwifSx7XCJpZFwiOjEwMDgsXCJkYXlzXCI6MTAwLFwicmV3YXJkXCI6XCIxMDAxOjM1MDAwMFwifSx7XCJpZFwiOjEwMDksXCJkYXlzXCI6MTUwLFwicmV3YXJkXCI6XCIxMDAxOjUwMDAwMFwifV0sXCJwbGFudFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTZDMzRcdTdBM0JcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwMl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTBcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjE4MFwiLFwidW5sb2NrX2Nvc3RcIjpudWxsLFwidW5sb2NrX3Jld2FyZFwiOm51bGwsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU1OTI3XHU4QzQ2XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDRfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwXCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIxODBcIixcInVubG9ja19jb3N0XCI6bnVsbCxcInVubG9ja19yZXdhcmRcIjpudWxsLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1NTkyN1x1ODQ5Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDEyX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MFwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMjQwXCIsXCJ1bmxvY2tfY29zdFwiOm51bGwsXCJ1bmxvY2tfcmV3YXJkXCI6bnVsbCxcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTUzMDVcdTVGQzNcdTgzRENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwNl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo3NVwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NzVcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjMwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNSxcIm5hbWVcIjpcIlx1NTcxRlx1OEM0NlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA3X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjc1XCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo3NVwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiMzAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU4NDFEXHU1MzVDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDVfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NzVcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjc1XCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCI0ODBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDcsXCJuYW1lXCI6XCJcdTVDMEZcdTlFQTZcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwMV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxMjBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjEyMFwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiNDgwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxNTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA4LFwibmFtZVwiOlwiXHU4RkEzXHU2OTEyXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTBfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MTIwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjoxMjBcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjYwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MjAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwOSxcIm5hbWVcIjpcIlx1OUVDNFx1NzREQ1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDExX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjIwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MjAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI3MjBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjMwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTAsXCJuYW1lXCI6XCJcdTgzMDRcdTVCNTBcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxM19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoyMDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjIwMFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiNzIwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjozNTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDExLFwibmFtZVwiOlwiXHU4MEUxXHU4NDFEXHU1MzVDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDhfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MzUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjozNTBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjkwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NDUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMixcIm5hbWVcIjpcIlx1NTM1N1x1NzREQ1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDE0X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjM1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MzUwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI5MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjUwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTMsXCJuYW1lXCI6XCJcdTczODlcdTdDNzNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwM19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwMFwiLFwiaGFydmVzdFwiOlwiM341XCIsXCJtYXR1cmVfdGltZVwiOlwiMTIwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NTUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxNCxcIm5hbWVcIjpcIlx1NzUxOFx1ODUxN1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDE1X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjVcIixcIm1hdHVyZV90aW1lXCI6XCIxMjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo2MDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDE1LFwibmFtZVwiOlwiXHU3NTZBXHU4MzA0XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDlfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MDBcIixcImhhcnZlc3RcIjpcIjN+NVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjY1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifV0sXCJwZXRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU2NUZBXHU4RDIyXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAxX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxMCxcImNvc3RcIjpcIjEwMDI6MzAwMFwiLFwiZGVzY1wiOlwiXHU3MjMxXHU1QjgzXHU1QzMxXHU0RTcwXHU1Qjgzflx1NUI4M1x1NUMzMVx1NjYyRlx1NjcwOVx1NzBCOVx1NjFEMn5cIixcInNlbnNpdGl2ZVwiOjM0LFwiYWJpbGl0eVwiOjQyfSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTZDNjRcdTU3MDZcIixcImljb25cIjpcInBldF9mZWVkLzEwMDdfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE1LFwiY29zdFwiOlwiMTAwMjo0MDAwXCIsXCJkZXNjXCI6XCJcdTk4OUNcdTUwM0NcdTMwMDFcdTY2N0FcdTU1NDZcdTUzQ0NcdTUzQ0NcdTU3MjhcdTdFQkZcIixcInNlbnNpdGl2ZVwiOjQwLFwiYWJpbGl0eVwiOjQ4fSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTgwODlcdTVFNzJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDlfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE2LFwiY29zdFwiOlwiMTAwMjo0NTAwXCIsXCJkZXNjXCI6XCJcdTY3MDBcdTVGRTBcdThCREFcdTc2ODRcdTRGMTlcdTRGMzRcIixcInNlbnNpdGl2ZVwiOjQ1LFwiYWJpbGl0eVwiOjU1fSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTRFOENcdTU0QzhcIixcImljb25cIjpcInBldF9mZWVkLzEwMDJfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE2LFwiY29zdFwiOlwiMTAwMjo1MDAwXCIsXCJkZXNjXCI6XCJcdTdFRERcdTRFMERcdTYyQzZcdTVCQjZcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjQ4LFwiYWJpbGl0eVwiOjYwfSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTU5MjdcdTc3M0NcdTc3NUJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDVfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE3LFwiY29zdFwiOlwiMTAwMjo3MDAwXCIsXCJkZXNjXCI6XCJcdTZEM0JcdTU5N0RcdTU0MDNcdTc2ODRcdTVDMTFcIixcInNlbnNpdGl2ZVwiOjUwLFwiYWJpbGl0eVwiOjc1fSx7XCJpZFwiOjEwMDYsXCJuYW1lXCI6XCJcdTVDMEZcdTVDM0VcdTVERjRcIixcImljb25cIjpcInBldF9mZWVkLzEwMDRfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE4LFwiY29zdFwiOlwiMTAwMjo3NTAwXCIsXCJkZXNjXCI6XCJcdTZCNjZcdTUyOUJcdTU5MjlcdThENEJcdTVERjJcdTcwQjlcdTZFRTF+XHU2MkZGXHU2MzRGXHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo2MCxcImFiaWxpdHlcIjo4MH0se1wiaWRcIjoxMDA3LFwibmFtZVwiOlwiXHU3NDAzXHU3NDAzXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA4X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6ODAwMFwiLFwiZGVzY1wiOlwiXHU1QzMxXHU0RTI0XHU0RTJBXHU1QjU3XHVGRjBDXHU1NDJDXHU4QkREXHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo2OSxcImFiaWxpdHlcIjo4NX0se1wiaWRcIjoxMDA4LFwibmFtZVwiOlwiXHU1QzBGXHU3NjdEXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAzX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6ODAwMFwiLFwiZGVzY1wiOlwiXHU3NzBCXHU1QkI2XHUzMDAxXHU3NzBCXHU4M0RDXHUzMDAxXHU3NzBCXHU1QjY5XHU1QjUwXCIsXCJzZW5zaXRpdmVcIjo3NixcImFiaWxpdHlcIjo4OH0se1wiaWRcIjoxMDA5LFwibmFtZVwiOlwiXHU3MEI5XHU3MEI5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA2X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOSxcImNvc3RcIjpcIjEwMDI6MTAwMDBcIixcImRlc2NcIjpcIlx1NEY2MFx1NTAzQ1x1NUY5N1x1NjJFNVx1NjcwOVx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6ODUsXCJhYmlsaXR5XCI6OTN9LHtcImlkXCI6MTAxMCxcIm5hbWVcIjpcIlx1OTVGN1x1NThBOVwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAxMF9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MzAsXCJjb3N0XCI6XCIxMDAyOjE1MDAwXCIsXCJkZXNjXCI6XCJcdTk1N0ZcdTVGOTdcdTVDMzFcdTVGODhcdTUxRjZcdUZGMENcdTYyOTNcdTVDMEZcdTUwNzdcdTY2RjRcdTUxRjZcIixcInNlbnNpdGl2ZVwiOjkwLFwiYWJpbGl0eVwiOjk5fV0sXCJvcmRlclwiOlt7XCJpZFwiOjEsXCJjb21taXNzaW9uXCI6XCIxLjEyXCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MlwifSx7XCJpZFwiOjIsXCJjb21taXNzaW9uXCI6XCIwLjg3XCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MSwxMDAyOjJcIn0se1wiaWRcIjozLFwiY29tbWlzc2lvblwiOlwiMC42OVwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjEsMTAwMzoyLDEwMDI6M1wifSx7XCJpZFwiOjQsXCJjb21taXNzaW9uXCI6XCIwLjYxXCIsXCJjb25kaXRpb25cIjpcIjEwMDI6NCwxMDAzOjMsMTAwNDozLDEwMDE6NFwifSx7XCJpZFwiOjUsXCJjb21taXNzaW9uXCI6XCIwLjYxXCIsXCJjb25kaXRpb25cIjpcIjEwMDQ6NiwxMDAyOjUsMTAwNTo0LDEwMDE6NVwifSx7XCJpZFwiOjYsXCJjb21taXNzaW9uXCI6XCIwLjY4XCIsXCJjb25kaXRpb25cIjpcIjEwMDM6MTAsMTAwNDo1LDEwMDU6MywxMDA2OjNcIn0se1wiaWRcIjo3LFwiY29tbWlzc2lvblwiOlwiMC40M1wiLFwiY29uZGl0aW9uXCI6XCIxMDA3OjQsMTAwMzo1LDEwMDQ6NywxMDA2OjEwXCJ9LHtcImlkXCI6OCxcImNvbW1pc3Npb25cIjpcIjAuNTZcIixcImNvbmRpdGlvblwiOlwiMTAwODoxMywxMDA3OjMsMTAwNTo1LDEwMDI6NVwifSx7XCJpZFwiOjksXCJjb21taXNzaW9uXCI6XCIwLjM5XCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MiwxMDA5OjEwLDEwMDc6OCwxMDAzOjhcIn0se1wiaWRcIjoxMCxcImNvbW1pc3Npb25cIjpcIjAuMjJcIixcImNvbmRpdGlvblwiOlwiMTAwNjoxMCwxMDEwOjUsMTAwODoxMCwxMDA5OjZcIn0se1wiaWRcIjoxMSxcImNvbW1pc3Npb25cIjpcIjAuNzZcIixcImNvbmRpdGlvblwiOlwiMTAwOTo1LDEwMDQ6MTAsMTAwMTo5LDEwMDI6MTBcIn0se1wiaWRcIjoxMixcImNvbW1pc3Npb25cIjpcIjAuNDNcIixcImNvbmRpdGlvblwiOlwiMTAwNzo2LDEwMDM6MTEsMTAxMTo2LDEwMDU6MTBcIn0se1wiaWRcIjoxMyxcImNvbW1pc3Npb25cIjpcIjAuMTdcIixcImNvbmRpdGlvblwiOlwiMTAxMDo1LDEwMDU6MTMsMTAwMTo4LDEwMTI6OFwifSx7XCJpZFwiOjE0LFwiY29tbWlzc2lvblwiOlwiMC41NVwiLFwiY29uZGl0aW9uXCI6XCIxMDEzOjEwLDEwMDg6OCwxMDA2OjYsMTAwMToxMFwifSx7XCJpZFwiOjE1LFwiY29tbWlzc2lvblwiOlwiMC40OFwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjEwLDEwMDU6MTAsMTAxMToxMiwxMDAxOjEwXCJ9LHtcImlkXCI6MTYsXCJjb21taXNzaW9uXCI6MC4yOSxcImNvbmRpdGlvblwiOlwiMTAwODoxMSwxMDE0OjQsMTAwNjo4LDEwMDU6MTdcIn0se1wiaWRcIjoxNyxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDA2OjE0LDEwMDc6NiwxMDE1OjEyLDEwMDE6MTRcIn0se1wiaWRcIjoxOCxcImNvbW1pc3Npb25cIjowLjQ4LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE0LDEwMTE6MTIsMTAwOToxNSwxMDAyOjVcIn0se1wiaWRcIjoxOSxcImNvbW1pc3Npb25cIjowLjc1LFwiY29uZGl0aW9uXCI6XCIxMDEzOjEwLDEwMDM6MjAsMTAxNDoxMSwxMDAxOjdcIn0se1wiaWRcIjoyMCxcImNvbW1pc3Npb25cIjowLjY3LFwiY29uZGl0aW9uXCI6XCIxMDAzOjEwLDEwMTE6MTcsMTAwMjoxNCwxMDA1OjEyXCJ9LHtcImlkXCI6MjEsXCJjb21taXNzaW9uXCI6MC42NCxcImNvbmRpdGlvblwiOlwiMTAxMDoxMCwxMDAzOjE0LDEwMDU6MTYsMTAwNzoxNVwifSx7XCJpZFwiOjIyLFwiY29tbWlzc2lvblwiOlwiMC40XCIsXCJjb25kaXRpb25cIjpcIjEwMTU6MTksMTAwNzoxMiwxMDExOjUsMTAwNDoxN1wifSx7XCJpZFwiOjIzLFwiY29tbWlzc2lvblwiOlwiMC40XCIsXCJjb25kaXRpb25cIjpcIjEwMDM6MTksMTAxNDoyMiwxMDE1OjE2LDEwMDg6MTRcIn0se1wiaWRcIjoyNCxcImNvbW1pc3Npb25cIjowLjc3LFwiY29uZGl0aW9uXCI6XCIxMDE0OjEzLDEwMDE6MTcsMTAwODoxOCwxMDA0OjE1XCJ9LHtcImlkXCI6MjUsXCJjb21taXNzaW9uXCI6XCIwLjM5XCIsXCJjb25kaXRpb25cIjpcIjEwMTI6MjMsMTAxMToxOSwxMDEwOjE1LDEwMTU6MjBcIn0se1wiaWRcIjoyNixcImNvbW1pc3Npb25cIjowLjAzLFwiY29uZGl0aW9uXCI6XCIxMDAyOjIxLDEwMTE6MTIsMTAxMjoyMiwxMDAzOjE5XCJ9LHtcImlkXCI6MjcsXCJjb21taXNzaW9uXCI6MC40OSxcImNvbmRpdGlvblwiOlwiMTAwNzoxNiwxMDE0OjE2LDEwMDY6MjAsMTAxMToxN1wifSx7XCJpZFwiOjI4LFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTcsMTAwNzoxMiwxMDExOjE3LDEwMDM6MTdcIn0se1wiaWRcIjoyOSxcImNvbW1pc3Npb25cIjowLjc3LFwiY29uZGl0aW9uXCI6XCIxMDEyOjEwLDEwMDU6MTYsMTAxMDoxNCwxMDE1OjE4XCJ9LHtcImlkXCI6MzAsXCJjb21taXNzaW9uXCI6XCIwLjM0XCIsXCJjb25kaXRpb25cIjpcIjEwMTE6MTcsMTAxNDoxOSwxMDA2OjE0LDEwMDQ6MzBcIn0se1wiaWRcIjozMSxcImNvbW1pc3Npb25cIjowLjUzLFwiY29uZGl0aW9uXCI6XCIxMDA3OjE4LDEwMTA6MTQsMTAxMzoxOSwxMDA2OjExXCJ9LHtcImlkXCI6MzIsXCJjb21taXNzaW9uXCI6MC40NixcImNvbmRpdGlvblwiOlwiMTAxMzoxOSwxMDA1OjIyLDEwMTI6MTIsMTAwODoyMFwifSx7XCJpZFwiOjMzLFwiY29tbWlzc2lvblwiOlwiMC40NFwiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE2LDEwMTM6MjAsMTAwMjoyMywxMDA5OjE2XCJ9LHtcImlkXCI6MzQsXCJjb21taXNzaW9uXCI6XCIwLjQyXCIsXCJjb25kaXRpb25cIjpcIjEwMDk6MTksMTAxMDoxMiwxMDExOjE0LDEwMTI6MjBcIn0se1wiaWRcIjozNSxcImNvbW1pc3Npb25cIjpcIjAuMzNcIixcImNvbmRpdGlvblwiOlwiMTAwMToxOCwxMDA0OjE5LDEwMTM6MTYsMTAwMzoyMFwifSx7XCJpZFwiOjM2LFwiY29tbWlzc2lvblwiOjAuMjEsXCJjb25kaXRpb25cIjpcIjEwMDM6MTEsMTAwODoxNywxMDE0OjE3LDEwMDc6MTlcIn0se1wiaWRcIjozNyxcImNvbW1pc3Npb25cIjowLjQ0LFwiY29uZGl0aW9uXCI6XCIxMDEyOjE5LDEwMTA6MjAsMTAwMjoxNCwxMDExOjExXCJ9LHtcImlkXCI6MzgsXCJjb21taXNzaW9uXCI6MC4yMixcImNvbmRpdGlvblwiOlwiMTAxNDoxMywxMDA0OjE5LDEwMDI6MTEsMTAxNToxOFwifSx7XCJpZFwiOjM5LFwiY29tbWlzc2lvblwiOjAuMzYsXCJjb25kaXRpb25cIjpcIjEwMDc6MTgsMTAxMjoxMywxMDA0OjE2LDEwMDI6MjZcIn0se1wiaWRcIjo0MCxcImNvbW1pc3Npb25cIjowLjI4LFwiY29uZGl0aW9uXCI6XCIxMDA0OjMwLDEwMDU6MTAsMTAwODoxOCwxMDExOjE2XCJ9LHtcImlkXCI6NDEsXCJjb21taXNzaW9uXCI6XCIwLjQ4XCIsXCJjb25kaXRpb25cIjpcIjEwMTA6MTgsMTAwOToxOCwxMDA4OjE3LDEwMTE6MjZcIn0se1wiaWRcIjo0MixcImNvbW1pc3Npb25cIjowLjQzLFwiY29uZGl0aW9uXCI6XCIxMDA5OjIxLDEwMDU6MTgsMTAwNzoyMCwxMDAyOjIzXCJ9LHtcImlkXCI6NDMsXCJjb21taXNzaW9uXCI6XCIwLjI0XCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MzAsMTAwNDoxNCwxMDE0OjExLDEwMDg6MTVcIn0se1wiaWRcIjo0NCxcImNvbW1pc3Npb25cIjowLjYyLFwiY29uZGl0aW9uXCI6XCIxMDA5OjE1LDEwMDM6MjgsMTAwMjozNCwxMDA3OjE5XCJ9LHtcImlkXCI6NDUsXCJjb21taXNzaW9uXCI6XCIwLjQxXCIsXCJjb25kaXRpb25cIjpcIjEwMTI6MTUsMTAxMDoyMywxMDA3OjEzLDEwMTE6MTNcIn0se1wiaWRcIjo0NixcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDAzOjIyLDEwMDc6MjMsMTAxMDoxNiwxMDAyOjI0XCJ9LHtcImlkXCI6NDcsXCJjb21taXNzaW9uXCI6MC40OSxcImNvbmRpdGlvblwiOlwiMTAxMDoyNCwxMDE1OjIwLDEwMDM6MjUsMTAxNDoxNlwifSx7XCJpZFwiOjQ4LFwiY29tbWlzc2lvblwiOlwiMC4yNlwiLFwiY29uZGl0aW9uXCI6XCIxMDEzOjE3LDEwMDc6MjQsMTAwODozNywxMDAxOjMwXCJ9LHtcImlkXCI6NDksXCJjb21taXNzaW9uXCI6MC40OCxcImNvbmRpdGlvblwiOlwiMTAwMjoyNiwxMDA0OjIxLDEwMDk6MjIsMTAwNjoyMFwifSx7XCJpZFwiOjUwLFwiY29tbWlzc2lvblwiOlwiMC4yNVwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjI3LDEwMTI6MTksMTAwODoyMCwxMDE1OjExXCJ9LHtcImlkXCI6NTEsXCJjb21taXNzaW9uXCI6XCIwLjM0XCIsXCJjb25kaXRpb25cIjpcIjEwMTE6MTgsMTAwNDoxOSwxMDAyOjI1LDEwMDM6MTFcIn0se1wiaWRcIjo1MixcImNvbW1pc3Npb25cIjowLjQzLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE1LDEwMTM6MjAsMTAwMToyNSwxMDA0OjI2XCJ9LHtcImlkXCI6NTMsXCJjb21taXNzaW9uXCI6XCIwLjI4XCIsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTQsMTAxMjoxMiwxMDEwOjIwLDEwMTU6MThcIn0se1wiaWRcIjo1NCxcImNvbW1pc3Npb25cIjowLjQ1LFwiY29uZGl0aW9uXCI6XCIxMDA1OjIyLDEwMDI6MzMsMTAwOToxNiwxMDE1OjE3XCJ9LHtcImlkXCI6NTUsXCJjb21taXNzaW9uXCI6XCIwLjU2XCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MjMsMTAxNDoxOSwxMDA1OjE3LDEwMTA6MTVcIn0se1wiaWRcIjo1NixcImNvbW1pc3Npb25cIjpcIjAuMzVcIixcImNvbmRpdGlvblwiOlwiMTAwNjoyNywxMDA1OjI5LDEwMDk6MTcsMTAwMzoxOFwifSx7XCJpZFwiOjU3LFwiY29tbWlzc2lvblwiOjAuNjcsXCJjb25kaXRpb25cIjpcIjEwMDc6MjEsMTAwODoxNywxMDAyOjE2LDEwMDk6MjVcIn0se1wiaWRcIjo1OCxcImNvbW1pc3Npb25cIjowLjMyLFwiY29uZGl0aW9uXCI6XCIxMDA2OjIwLDEwMDg6MjUsMTAwNToyNCwxMDA3OjE5XCJ9LHtcImlkXCI6NTksXCJjb21taXNzaW9uXCI6MC43OSxcImNvbmRpdGlvblwiOlwiMTAxMjoyNSwxMDA5OjMwLDEwMTM6MTYsMTAwODoxNVwifSx7XCJpZFwiOjYwLFwiY29tbWlzc2lvblwiOjAuNjksXCJjb25kaXRpb25cIjpcIjEwMTU6MjYsMTAxMjoyNywxMDEwOjMxLDEwMDE6MjNcIn0se1wiaWRcIjo2MSxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDE1OjEyLDEwMDY6MjUsMTAxMToxNSwxMDAyOjE3XCJ9LHtcImlkXCI6NjIsXCJjb21taXNzaW9uXCI6MC40NCxcImNvbmRpdGlvblwiOlwiMTAxNToyMSwxMDA3OjE1LDEwMTE6MTgsMTAwNjoyNlwifSx7XCJpZFwiOjYzLFwiY29tbWlzc2lvblwiOjAuMDEsXCJjb25kaXRpb25cIjpcIjEwMTA6MTgsMTAwNToxNiwxMDA5OjEzLDEwMDM6MjdcIn0se1wiaWRcIjo2NCxcImNvbW1pc3Npb25cIjowLjI3LFwiY29uZGl0aW9uXCI6XCIxMDA3OjE3LDEwMDY6MTAsMTAwNToyOSwxMDA0OjI1XCJ9LHtcImlkXCI6NjUsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDAzOjMwLDEwMTQ6MjAsMTAwNToxNVwifSx7XCJpZFwiOjY2LFwiY29tbWlzc2lvblwiOjAuNzMsXCJjb25kaXRpb25cIjpcIjEwMDQ6MjUsMTAwODoyNSwxMDAyOjM0LDEwMTI6MTRcIn0se1wiaWRcIjo2NyxcImNvbW1pc3Npb25cIjowLjEzLFwiY29uZGl0aW9uXCI6XCIxMDAxOjM2LDEwMTI6MjAsMTAxMToyMCwxMDAzOjIwXCJ9LHtcImlkXCI6NjgsXCJjb21taXNzaW9uXCI6MC42OSxcImNvbmRpdGlvblwiOlwiMTAxMzoyNCwxMDA4OjIzLDEwMDY6MTYsMTAwNzoxN1wifSx7XCJpZFwiOjY5LFwiY29tbWlzc2lvblwiOjAuMzcsXCJjb25kaXRpb25cIjpcIjEwMTU6MzAsMTAwNDoyOSwxMDEzOjE3LDEwMDk6MTBcIn0se1wiaWRcIjo3MCxcImNvbW1pc3Npb25cIjowLjcxLFwiY29uZGl0aW9uXCI6XCIxMDEwOjIzLDEwMDQ6MzEsMTAxMToxNywxMDEyOjExXCJ9LHtcImlkXCI6NzEsXCJjb21taXNzaW9uXCI6MC4yOSxcImNvbmRpdGlvblwiOlwiMTAwODoxMSwxMDAyOjI2LDEwMDM6MjgsMTAxNToxM1wifSx7XCJpZFwiOjcyLFwiY29tbWlzc2lvblwiOjAuMzEsXCJjb25kaXRpb25cIjpcIjEwMDU6MjUsMTAwMjozOCwxMDEyOjE5LDEwMTA6MTRcIn0se1wiaWRcIjo3MyxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDEyOjM0LDEwMDY6MjIsMTAwMzoyNywxMDA0OjIwXCJ9LHtcImlkXCI6NzQsXCJjb21taXNzaW9uXCI6MC4yNixcImNvbmRpdGlvblwiOlwiMTAwMzoyMCwxMDEyOjE4LDEwMDI6MzAsMTAwMToyMFwifSx7XCJpZFwiOjc1LFwiY29tbWlzc2lvblwiOjAuMTgsXCJjb25kaXRpb25cIjpcIjEwMDY6MzEsMTAxNDozMCwxMDA4OjEyLDEwMDI6MjVcIn0se1wiaWRcIjo3NixcImNvbW1pc3Npb25cIjowLjUxLFwiY29uZGl0aW9uXCI6XCIxMDA3OjIxLDEwMTI6MjAsMTAwNDoxMSwxMDE0OjIwXCJ9LHtcImlkXCI6NzcsXCJjb21taXNzaW9uXCI6MC4yMSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDA5OjE2LDEwMTI6MjQsMTAwNzozMFwifSx7XCJpZFwiOjc4LFwiY29tbWlzc2lvblwiOjAuNzMsXCJjb25kaXRpb25cIjpcIjEwMTU6MTYsMTAxMjoxNiwxMDA2OjIwLDEwMDg6MjJcIn0se1wiaWRcIjo3OSxcImNvbW1pc3Npb25cIjowLjY1LFwiY29uZGl0aW9uXCI6XCIxMDA2OjI2LDEwMDQ6MTgsMTAwNzoxMiwxMDExOjI3XCJ9LHtcImlkXCI6ODAsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwOToxNSwxMDAzOjE2LDEwMDQ6MTksMTAwNzoyNFwifSx7XCJpZFwiOjgxLFwiY29tbWlzc2lvblwiOjAuMTQsXCJjb25kaXRpb25cIjpcIjEwMTI6MjAsMTAxNToyOCwxMDAyOjI0LDEwMDM6MzhcIn0se1wiaWRcIjo4MixcImNvbW1pc3Npb25cIjowLjIsXCJjb25kaXRpb25cIjpcIjEwMDU6MTIsMTAxMToxOSwxMDA5OjE4LDEwMDI6MTRcIn0se1wiaWRcIjo4MyxcImNvbW1pc3Npb25cIjowLjUzLFwiY29uZGl0aW9uXCI6XCIxMDEwOjE5LDEwMDM6MzgsMTAwNzoyMiwxMDE1OjIwXCJ9LHtcImlkXCI6ODQsXCJjb21taXNzaW9uXCI6MC42MixcImNvbmRpdGlvblwiOlwiMTAwNToyOSwxMDE0OjI2LDEwMDI6MTgsMTAwNzozOFwifSx7XCJpZFwiOjg1LFwiY29tbWlzc2lvblwiOjAuMzcsXCJjb25kaXRpb25cIjpcIjEwMTE6MjAsMTAwMToxNywxMDEyOjEyLDEwMDQ6MzJcIn0se1wiaWRcIjo4NixcImNvbW1pc3Npb25cIjowLjU5LFwiY29uZGl0aW9uXCI6XCIxMDA5OjI1LDEwMTE6MjAsMTAwNjoxNCwxMDE1OjIxXCJ9LHtcImlkXCI6ODcsXCJjb21taXNzaW9uXCI6XCIwLjMxXCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MjYsMTAwNToxOSwxMDEzOjIwLDEwMTQ6MjlcIn0se1wiaWRcIjo4OCxcImNvbW1pc3Npb25cIjpcIjAuNDhcIixcImNvbmRpdGlvblwiOlwiMTAwODozNywxMDExOjI0LDEwMTU6MTIsMTAxNDoxMVwifSx7XCJpZFwiOjg5LFwiY29tbWlzc2lvblwiOlwiMC4yMlwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjE3LDEwMDM6MjgsMTAwNToyMiwxMDEwOjMxXCJ9LHtcImlkXCI6OTAsXCJjb21taXNzaW9uXCI6MC4zMixcImNvbmRpdGlvblwiOlwiMTAwMjozOSwxMDEzOjI4LDEwMDc6MjUsMTAwMTozM1wifSx7XCJpZFwiOjkxLFwiY29tbWlzc2lvblwiOjAuMTksXCJjb25kaXRpb25cIjpcIjEwMDg6MTUsMTAxMzoyMCwxMDE0OjEwLDEwMDc6MjZcIn0se1wiaWRcIjo5MixcImNvbW1pc3Npb25cIjowLjEzLFwiY29uZGl0aW9uXCI6XCIxMDA0OjM4LDEwMTE6MTMsMTAwODoxNSwxMDA3OjI5XCJ9LHtcImlkXCI6OTMsXCJjb21taXNzaW9uXCI6MC4zNCxcImNvbmRpdGlvblwiOlwiMTAxMzoxMiwxMDAxOjM5LDEwMDY6MzgsMTAwODozMVwifSx7XCJpZFwiOjk0LFwiY29tbWlzc2lvblwiOjAuMjIsXCJjb25kaXRpb25cIjpcIjEwMDI6MzYsMTAxNDoyNywxMDEzOjE2LDEwMDU6MzFcIn0se1wiaWRcIjo5NSxcImNvbW1pc3Npb25cIjowLjE1LFwiY29uZGl0aW9uXCI6XCIxMDA1OjI2LDEwMTE6MzQsMTAxNTozNCwxMDA4OjE2XCJ9LHtcImlkXCI6OTYsXCJjb21taXNzaW9uXCI6XCIwLjQ5XCIsXCJjb25kaXRpb25cIjpcIjEwMDM6MjQsMTAwMTozNCwxMDA3OjI4LDEwMDU6MzBcIn0se1wiaWRcIjo5NyxcImNvbW1pc3Npb25cIjpcIjAuNlwiLFwiY29uZGl0aW9uXCI6XCIxMDEzOjMyLDEwMDk6MzMsMTAwNjozMCwxMDExOjQwXCJ9XSxcImxhbmdcIjpbXSxcImxhbmRMZXZlbFwiOlt7XCJpZFwiOjEsXCJyZXdhcmRcIjpcIjEwMDI6MFwiLFwiY29zdFwiOlwiMTAwMjowXCIsXCJnYWluXCI6bnVsbH0se1wiaWRcIjoyLFwicmV3YXJkXCI6XCIxMDAyOjE1MDBcIixcImNvc3RcIjpcIjEwMDI6MTAwMDBcIixcImdhaW5cIjowLjF9LHtcImlkXCI6MyxcInJld2FyZFwiOlwiMTAwMjoyMDAwXCIsXCJjb3N0XCI6XCIxMDAyOjMwMDAwXCIsXCJnYWluXCI6MC4yNX0se1wiaWRcIjo0LFwicmV3YXJkXCI6XCIxMDAyOjI1MDBcIixcImNvc3RcIjpcIjEwMDI6NTAwMDBcIixcImdhaW5cIjowLjR9LHtcImlkXCI6NSxcInJld2FyZFwiOlwiMTAwMjozMDAwXCIsXCJjb3N0XCI6XCIxMDAyOjEwMDAwMFwiLFwiZ2FpblwiOjAuNTV9XSxcImZlZWRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU5OTdDXHU1RTcyXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAxX2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjEsXCJjb3N0XCI6XCIxMDAyOjMwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1NTc1QVx1Njc5Q1wiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwMl9mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjoyLFwiY29zdFwiOlwiMTAwMjo1MFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTcwNkJcdTgxN0ZcIixcImljb25cIjpcInBldF9mZWVkLzEwMDNfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6NSxcImNvc3RcIjpcIjEwMDI6MTAwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwNCxcIm5hbWVcIjpcIlx1NzI1Qlx1ODA4OVwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNF9mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjo1MCxcImNvc3RcIjpcIjEwMDI6OTAwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwNSxcIm5hbWVcIjpcIlx1NzMyQVx1ODA4OVwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNV9mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjoyMCxcImNvc3RcIjpcIjEwMDI6NDYwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwNixcIm5hbWVcIjpcIlx1OUUyMVx1ODA4OVwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNl9mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjoxMCxcImNvc3RcIjpcIjEwMDI6MjcwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9XSxcImN1cnJlbmN5XCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1OTRCQlx1NzdGM1wiLFwiaWNvblwiOlwibWFpbl9zY2VuZS9pbWdfZGlhbW9uZC5wbmdcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU5MUQxXHU1RTAxXCIsXCJpY29uXCI6XCJtYWluX3NjZW5lL2ltZ19jb2luLnBuZ1wifV0sXCJjb25maWdcIjpbe1wiaWRcIjpcImFsbF9zcGVlZF91cF90aW1lc1wiLFwidmFsdWVcIjozMH0se1wiaWRcIjpcImFsbF9zcGVlZF91cF90aW1lXCIsXCJ2YWx1ZVwiOjYwMH0se1wiaWRcIjpcInVubG9ja19sYW5kX2Nvc3RcIixcInZhbHVlXCI6XCIxMDAyOjAsMTAwMjowLDEwMDI6NTAwMCwxMDAyOjEwMDAwLDEwMDI6MjAwMDAsMTAwMjozMDAwMCwxMDAyOjQwMDAwLDEwMDI6NTAwMDAsMTAwMjo2MDAwMFwifSx7XCJpZFwiOlwiZ29sZERlZmF1bHRcIixcInZhbHVlXCI6XCIxMDAyOjEwMFwifSx7XCJpZFwiOlwiZGlhbW9uZERlZmF1bHRcIixcInZhbHVlXCI6XCIxMDAxOjUwXCJ9LHtcImlkXCI6XCJBRFRpbWVzTGltaXRcIixcInZhbHVlXCI6MzB9LHtcImlkXCI6XCJBRFNwZWVkVXB0aW1lc1wiLFwidmFsdWVcIjo2fSx7XCJpZFwiOlwidml0YWxpdHlCdXlDb3N0R29sZFwiLFwidmFsdWVcIjpcIjEwMDI6MTAwMDBcIn0se1wiaWRcIjpcInZpdGFsaXR5TGltaXRcIixcInZhbHVlXCI6MTB9LHtcImlkXCI6XCJsYW5kQW1vdW50TWF4XCIsXCJ2YWx1ZVwiOjl9LHtcImlkXCI6XCJwZXREZWZhdWx0Vml0YWxpdHlcIixcInZhbHVlXCI6MTAwfSx7XCJpZFwiOlwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCIsXCJ2YWx1ZVwiOjYwfSx7XCJpZFwiOlwiVmlkZW9yZXdhcmRzXCIsXCJ2YWx1ZVwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjpcIndpdGhkcmF3YWxcIixcInZhbHVlXCI6XCIxMDAxOjEwMDAwOjFcIn0se1wiaWRcIjpcIkludml0YXRpb25fcmV3YXJkc1wiLFwidmFsdWVcIjpcIjEwMDE6NTAwMFwifSx7XCJpZFwiOlwid2l0aGRyYXdhbF90aW1lc1wiLFwidmFsdWVcIjpcIjAuMzozLDAuNToyLDU6MCwxMDowLDUwOjBcIn1dfTsiLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTVCNTdcdTdCMjZcclxuICAgICAqIEBwYXJhbSBzdHIgXHU4OTgxXHU4OUUzXHU2NzkwXHU3Njg0XHU1QjU3XHU3QjI2XHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IFx1NTA1QVx1NEUzQVx1NTNDMlx1ODAwM1x1NzY4NFx1NUI1N1x1N0IyNlx1OUVEOFx1OEJBNFx1NEUzQSxcclxuICAgICAqIEByZXR1cm5zIFx1ODlFM1x1Njc5MFx1NTk3RFx1NzY4NFx1NUI1N1x1N0IyNlx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VTdHJpbmcoc3RyOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nID0gXCIsXCIpIHtcclxuICAgICAgICBpZiAoIXN0cikgcmV0dXJuIFtdO1xyXG4gICAgICAgIHJldHVybiBzdHIuc3BsaXQoZm9ybWF0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzlEMlx1OEY2Q1x1NjM2Mlx1NjIxMDAwOjAwOjAwXHJcbiAgICAgKiBAcGFyYW0gcyBcdThGNkNcdTYzNjJcdTY1RjZcdTk1RjRcdTc2ODRcdTc5RDJcclxuICAgICAqIEByZXR1cm5zIDAwOjAwOjAwXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmb3JtYXRTZWNvbmRzID0gKHMpID0+IG5ldyBEYXRlKHMgKiAxMDAwKS50b0lTT1N0cmluZygpLnN1YnN0cigxMSwgOCk7XHJcbn1cclxuIiwgImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4vVGFibGVcIjtcclxuaW1wb3J0IHtcclxuICAgIENvbmZpZ0Jhc2UsXHJcbiAgICBDdXJyZW5jeUJhc2UsXHJcbiAgICBGZWVkQmFzZSxcclxuICAgIExhbmRMZXZlbEJhc2UsXHJcbiAgICBPcmRlckJhc2UsXHJcbiAgICBQZXRCYXNlLFxyXG4gICAgUGxhbnRCYXNlLFxyXG4gICAgUmV3YXJkQmFzZSxcclxuICAgIFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgIFNpZ25JbkJhc2UsXHJcbiAgICBUYXNrQmFzZSxcclxufSBmcm9tIFwiLi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcIi4vVG9vbHNcIjtcclxuXHJcbmNvbnN0IFRhYmxlUHJvcGVydHlFdmVudCA9IHtcclxuICAgIHBldChkOiB0eXBlb2YgVGFibGUucGV0WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQZXRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uIHx8IGBwZXRfZmVlZC8ke2QuaWR9X2RvZy5wbmdgLFxyXG4gICAgICAgICAgICB2aXRhbGl0eV9tYXg6IGQudml0YWxpdHlfbWF4LFxyXG4gICAgICAgICAgICB2aXRhbGl0eV9jb25zdW1lOiBkLnZpdGFsaXR5X2NvbnN1bWUsXHJcbiAgICAgICAgICAgIGNvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLmNvc3QpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHNlbnNpdGl2ZTogZC5zZW5zaXRpdmUsXHJcbiAgICAgICAgICAgIGFiaWxpdHk6IGQuYWJpbGl0eSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OTk3Mlx1NjU5OVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBmZWVkKGQ6IHR5cGVvZiBUYWJsZS5mZWVkWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxGZWVkQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbiB8fCBgcGV0X2ZlZWQvJHtkLmlkfV9mZWVkLnBuZ2AsXHJcbiAgICAgICAgICAgIHZpdGFsaXR5OiBkLnZpdGFsaXR5LFxyXG4gICAgICAgICAgICBjb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5jb3N0KSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU4QkEyXHU1MzU1XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgb3JkZXIoZDogdHlwZW9mIFRhYmxlLm9yZGVyWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxPcmRlckJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgY29tbWlzc2lvbjogTnVtYmVyKGQuY29tbWlzc2lvbiksXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbjogVG9vbHMucGFyc2VTdHJpbmcoZC5jb25kaXRpb24pLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBUb29scy5wYXJzZVN0cmluZyhlLCBcIjpcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW50OiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoTnVtYmVyKHZbMF0pKSxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogTnVtYmVyKHZbMV0pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTYyMTBcdTcxOUZcdTY5MERcdTcyNjlcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwbGFudChkOiB0eXBlb2YgVGFibGUucGxhbnRbMF0pIHtcclxuICAgICAgICByZXR1cm4gPFBsYW50QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbixcclxuICAgICAgICAgICAgbWF0dXJlSWNvbjogYHBsYW50X2ljb24vJHtkLmljb24ubWF0Y2goL1xcZCsvZylbMF19X21hdHVyZS5wbmdgLFxyXG4gICAgICAgICAgICBncm93aW5nSWNvbjogYHBsYW50X2ljb24vJHtkLmljb24ubWF0Y2goL1xcZCsvZylbMF19X2dyb3dpbmcucG5nYCxcclxuICAgICAgICAgICAgZ2FpbjogVG9vbHMucGFyc2VTdHJpbmcoZC5nYWluKS5tYXAoKGUpID0+IGdldFJld2FyZEN1cnJlbmN5QmFzZShlKSksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICAgICAgc2VlZF9wcmljZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuc2VlZF9wcmljZSksXHJcbiAgICAgICAgICAgIGhhcnZlc3Q6IE51bWJlcihUb29scy5wYXJzZVN0cmluZyhkLmhhcnZlc3QsIFwiflwiKVsxXSksXHJcbiAgICAgICAgICAgIG1hdHVyZV90aW1lOiBOdW1iZXIoZC5tYXR1cmVfdGltZSksXHJcbiAgICAgICAgICAgIHVubG9ja19jb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC51bmxvY2tfY29zdCksXHJcbiAgICAgICAgICAgIHVubG9ja19yZXdhcmQ6IFRvb2xzLnBhcnNlU3RyaW5nKGQudW5sb2NrX3Jld2FyZCkubWFwKChlKSA9PiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZSkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU4RDI3XHU1RTAxXHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgY3VycmVuY3koZDogdHlwZW9mIFRhYmxlLmN1cnJlbmN5WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxDdXJyZW5jeUJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTU3MUZcdTU3MzBcdTdCNDlcdTdFQTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgbGFuZExldmVsKGQ6IHR5cGVvZiBUYWJsZS5sYW5kTGV2ZWxbMF0pIHtcclxuICAgICAgICByZXR1cm4gPExhbmRMZXZlbEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgcmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5yZXdhcmQpLFxyXG4gICAgICAgICAgICBjb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5jb3N0KSxcclxuICAgICAgICAgICAgZ2FpbjogZC5nYWluLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbmZpZyhkOiB0eXBlb2YgVGFibGUuY29uZmlnWzBdKSB7XHJcbiAgICAgICAgc3dpdGNoIChkLmlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhbGxfc3BlZWRfdXBfdGltZXNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcImFsbF9zcGVlZF91cF90aW1lc1wiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFsbF9zcGVlZF91cF90aW1lXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJhbGxfc3BlZWRfdXBfdGltZVwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInVubG9ja19sYW5kX2Nvc3RcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidW5sb2NrX2xhbmRfY29zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBUb29scy5wYXJzZVN0cmluZyhkLnZhbHVlIGFzIHN0cmluZykubWFwKChkKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJnb2xkRGVmYXVsdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJnb2xkRGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcImRpYW1vbmREZWZhdWx0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImRpYW1vbmREZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykuY291bnQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiQURUaW1lc0xpbWl0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJBRFRpbWVzTGltaXRcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcIkFEU3BlZWRVcHRpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJBRFNwZWVkVXB0aW1lc1wiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwidml0YWxpdHlCdXlDb3N0R29sZFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykuY291bnQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwidml0YWxpdHlMaW1pdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwidml0YWxpdHlMaW1pdFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZEFtb3VudE1heFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwibGFuZEFtb3VudE1heFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwicGV0RGVmYXVsdFZpdGFsaXR5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJwZXREZWZhdWx0Vml0YWxpdHlcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcInBldERpZ2VzdEludGVydmFsVGltZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJWaWRlb3Jld2FyZHNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcIlZpZGVvcmV3YXJkc1wiLCB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwid2l0aGRyYXdhbFwiOiAvL1x1NjNEMFx1NzNCMFx1NkJENFx1NEY4QlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwid2l0aGRyYXdhbFwiLCB2YWx1ZTogVG9vbHMucGFyc2VTdHJpbmcoZC52YWx1ZSBhcyBzdHJpbmcsIFwiOlwiKSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiSW52aXRhdGlvbl9yZXdhcmRzXCI6IC8vXHU5MDgwXHU4QkY3XHU1OTdEXHU1M0NCXHU1OTU2XHU1MkIxXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIkludml0YXRpb25fcmV3YXJkc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcIndpdGhkcmF3YWxfdGltZXNcIjogLy9cdTYzRDBcdTczQjBcdTZCMjFcdTY1NzBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwid2l0aGRyYXdhbF90aW1lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBUb29scy5wYXJzZVN0cmluZyhkLnZhbHVlIGFzIHN0cmluZykubWFwKCh2OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IFRvb2xzLnBhcnNlU3RyaW5nKHYsIFwiOlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJpY2U6IE51bWJlcih2WzBdKSwgdGltZXM6IE51bWJlcih2WzFdKSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU5NTAxXHU3QjdFXHU1MjMwXHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZFxyXG4gICAgICovXHJcbiAgICBzaWduSW4oZDogdHlwZW9mIFRhYmxlLnNpZ25JblswXSkge1xyXG4gICAgICAgIHJldHVybiA8U2lnbkluQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBkYXlzOiBkLmRheXMsXHJcbiAgICAgICAgICAgIHJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQucmV3YXJkKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NEVGQlx1NTJBMVx1ODg2OFxyXG4gICAgICovXHJcbiAgICB0YXNrKGQ6IHR5cGVvZiBUYWJsZS50YXNrWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxUYXNrQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICB0aW1lczogZC50aW1lcyxcclxuICAgICAgICAgICAgcmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5yZXdhcmQpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHRpdGxlOiBkLnRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYGdhbWUvaW1nX2Jhcm0ucG5nYCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcclxuICogQHBhcmFtIHN0ciBcdTg5RTNcdTY3OTBcdTc2ODRcdThEMjdcdTVFMDFcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQgaWQ6bnVtXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXdhcmRDdXJyZW5jeUJhc2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBsaXN0ID0gVG9vbHMucGFyc2VTdHJpbmcoc3RyLCBcIjpcIik7XHJcblxyXG4gICAgcmV0dXJuIDxSZXdhcmRDdXJyZW5jeUJhc2U+e1xyXG4gICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KE51bWJlcihsaXN0WzBdKSksXHJcbiAgICAgICAgY291bnQ6IE51bWJlcihsaXN0WzFdKSxcclxuICAgIH07XHJcbn1cclxuXHJcbnR5cGUgdHlwZVRhYmxlID0gdHlwZW9mIFRhYmxlUHJvcGVydHlFdmVudDtcclxuXHJcbmNsYXNzIFRhYmxlQ29udHJvbCB7XHJcbiAgICBwcml2YXRlIHRhYmxlQ2FjaGU6IE1hcDxrZXlvZiB0eXBlVGFibGUsIFJldHVyblR5cGU8dHlwZVRhYmxlW2tleW9mIHR5cGVUYWJsZV0+W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU3Njg0XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0ga2V5IFx1ODg2OFx1NzY4NGtleVxyXG4gICAgICovXHJcbiAgICB0YWJsZTxUIGV4dGVuZHMga2V5b2YgdHlwZVRhYmxlPihcclxuICAgICAgICBrZXk6IFRcclxuICAgICk6IHtcclxuICAgICAgICBsaXN0OiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT5bXTtcclxuICAgICAgICBnZXQ6IHsgKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT4gfTtcclxuICAgIH0ge1xyXG4gICAgICAgIC8vXHU4QkZCXHU1M0Q2XHU3RUM0XHU2MjEwXHJcbiAgICAgICAgaWYgKHRoaXMudGFibGVDYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJsZUJhY2sodGhpcy50YWJsZUNhY2hlLmdldChrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTg5RTNcdTY3OTBcdTY1NzBcdTYzNkVcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIFRhYmxlW2tleV0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goVGFibGVQcm9wZXJ0eUV2ZW50W2tleV0oZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHU3RjEzXHU1QjU4XHU4OUUzXHU2NzkwXHU4ODY4XHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgdGhpcy50YWJsZUNhY2hlLnNldChrZXksIGxpc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayhsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUyOFx1NEU4RXRhYmxlXHU2NUI5XHU2Q0Q1XHU4RkQ0XHU1NkRFXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGXHU1NDhDXHU2REZCXHU1MkEwXHU4M0I3XHU1M0Q2XHU1MzU1XHU0RTJBXHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTg5RTNcdTY3OTBcdTg4NjhcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zIFx1OEZENFx1NTZERVx1NjMwN1x1NUI5QVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRhYmxlQmFjayhsaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGlzdDogbGlzdCxcclxuICAgICAgICAgICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGxpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODg2OFx1NjgzQ1x1ODlFM1x1Njc5MFx1NURFNVx1NTE3N1xyXG4gKi9cclxuY29uc3QgVGFibGVBbmFseXplID0gbmV3IFRhYmxlQ29udHJvbCgpO1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUFuYWx5emU7XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgVGFza0Jhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFza0RhdGFPYmoge1xyXG4gICAgLyoqIFx1NEVGQlx1NTJBMWlkICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NUI4Q1x1NjIxMFx1NkIyMVx1NjU3MCAqL1xyXG4gICAgdGltZXM6IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk4ODZcdTUzRDZcdTU5NTZcdTUyQjEgMFx1NjcyQVx1OTg4Nlx1NTNENiAxXHU1REYyXHU5ODg2XHU1M0Q2ICovXHJcbiAgICByZWNlaXZlOiBudW1iZXI7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExXHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBUYXNrQmFzZTtcclxufVxyXG4vKipcclxuICogXHU0RUZCXHU1MkExXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBUYXNrU2VydmljZSB7XHJcbiAgICBsaXN0OiBUYXNrRGF0YU9ialtdID0gW107XHJcblxyXG4gICAgaW5pdChkOiBOZXRJbml0W1widGFza3NcIl0pIHtcclxuICAgICAgICBkLmZvckVhY2goKGUpID0+XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGltZXM6IGUudGltZXMsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlOiBlLnJlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChlLmlkKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU0RUZCXHU1MkExXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldFRhc2soaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFRkJcdTUyQTFcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0QSA9IHRoaXMuZ2V0VGFzayhhLmlkKSxcclxuICAgICAgICAgICAgICAgIHRCID0gdGhpcy5nZXRUYXNrKGIuaWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIGEuaWQgK1xyXG4gICAgICAgICAgICAgICAgKHRBPy5yZWNlaXZlID8gMTAwMCA6IDEpICtcclxuICAgICAgICAgICAgICAgICh0QT8udGltZXMgPj0gYS5iYXNlLnRpbWVzID8gMTAwIDogMTAwMCkgLVxyXG4gICAgICAgICAgICAgICAgKGIuaWQgKyAodEI/LnJlY2VpdmUgPyAxMDAwIDogMSkgKyAodEI/LnRpbWVzID49IGIuYmFzZS50aW1lcyA/IDEwMCA6IDEwMDApKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU0RUZCXHU1MkExXHU2REZCXHU1MkEwXHU2QjIxXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIHRhc2tBZGRUaW1lcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSB0aGlzLmdldFRhc2soaWQpO1xyXG4gICAgICAgIGlmICghdGFzaykge1xyXG4gICAgICAgICAgICAvL1x1OUVEOFx1OEJBNFx1NEUwRFx1NTIxQlx1NUVGQVx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICAvLyB0YXNrID0geyBpZDogaWQsIHRpbWVzOiAwLCByZWNlaXZlOiAwLCBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChpZCkgfTtcclxuICAgICAgICAgICAgLy8gdGhpcy5saXN0LnB1c2godGFzayk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhc2sudGltZXMrKztcclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfdGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhc2tTZXJ2aWNlKCk7XHJcbiIsICJleHBvcnQgdHlwZSBMYW5kT2JqID0gTmV0SW5pdFtcImxhbmRzXCJdWzBdO1xyXG5cclxuY2xhc3MgTGFuZFNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgbGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBpbml0KGxpc3Q6IExhbmRPYmpbXSkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExhbmQoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTU3NTdcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBpZCBcdTU3MUZcdTU3MzBpZFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGdldExhbmQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkRGQlx1NTJBMFx1NjIxNlx1NjYyRlx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGQgXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGFkZExhbmQoZDogTGFuZE9iaikge1xyXG4gICAgICAgIHRoaXMubGlzdC5zZXQoZC5pZCwgZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTdBN0FcdTU3MUZcdTU3MzBcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMYW5kU2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGV0QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBldERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTVCQTBcdTcyNjlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFBldEJhc2U7XHJcbiAgICAvKiogXHU5NTAxXHU1QjlBICovXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBQZXRTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFBldERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBpbml0KHBldHM6IG51bWJlcltdKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBkLFxyXG4gICAgICAgICAgICAgICAgbG9jazogIXBldHMuaW5jbHVkZXMoZC5pZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU1QkEwXHU3MjY5XHU4OUUzXHU5NTAxXHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIGdldFVubG9ja0xlbigpIHtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWQubG9jaykgbGVuKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBldFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYW50RGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogUGxhbnRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jbGFzcyBQbGFudFNlcnZpY2Uge1xyXG4gICAgbGlzdDogUGxhbnREYXRhQmFzZVtdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGxpc3QgXHU3OUNEXHU1QjUwaWRcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgaW5pdChsaXN0OiBudW1iZXJbXSkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7IGJhc2U6IGQsIGxvY2s6ICFsaXN0LmluY2x1ZGVzKGQuaWQpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gaWQgXHU2OTBEXHU3MjY5aWRcclxuICAgICAqIEByZXR1cm5zIFx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBnZXRQbGFudChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMubGlzdC5sZW5ndGggLSAxOyB4ID4gLTE7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBsYW50U2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi4vY29yZS9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2RlxyXG4gKi9cclxuY2xhc3MgVXNlckluZm8ge1xyXG4gICAgLyoqIFx1OEJBMlx1NTM1NVx1N0I0OVx1N0VBNyBcdTVERjJcdTVCOENcdTYyMTAgKi9cclxuICAgIG9yZGVyTGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1NDBEXHU3OUYwICovXHJcbiAgICBuaWNrbmFtZTogc3RyaW5nID0gXCJuYW1lXCI7XHJcbiAgICAvLyAvKiogXHU3NTI4XHU2MjM3aWQgKi9cclxuICAgIC8vIHVpZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTU1MkZcdTRFMDBcdTY4MDdcdThCQzYgKi9cclxuICAgIGtleTogc3RyaW5nID0gbnVsbDtcclxuICAgIC8qKiBcdTc1MjhcdTU0MERcdTU5MzRcdTUwQ0YgKi9cclxuICAgIGF2YXRhcjogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjMgKi9cclxuICAgIGRpYW1vbmQ6IG51bWJlciA9IDk5OTtcclxuICAgIC8qKiBcdTkxRDFcdTVFMDEgKi9cclxuICAgIGdvbGQ6IG51bWJlciA9IDk5OTtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTUzRUZcdTRFRTVcdTc3MEJcdTVFN0ZcdTU0NEFcdTc2ODRcdTZCMjFcdTY1NzAgKi9cclxuICAgIGFkdmVydGlzZVRpbWVzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzNBOVx1NUJCNlx1NEY2OVx1NjIzNFx1NzY4NFx1NUJBMFx1NzI2OSAqL1xyXG4gICAgd2FyZVBldElkOiBudW1iZXI7XHJcbiAgICAvKiogXHU1MjY5XHU0RjU5XHU0RjUzXHU1MjlCICovXHJcbiAgICBwZXRWaXRhbGl0eTogbnVtYmVyO1xyXG4gICAgLyoqIFx1NkQ4OFx1NTMxNlx1OThERlx1NzI2OVx1NTAxMlx1OEJBMVx1NjVGNiAqL1xyXG4gICAgZGlnZXN0Q291bnREb3duOiBudW1iZXI7XHJcbiAgICAvKiogXHU4RkRFXHU3RUVEXHU3QjdFXHU1MjMwXHU1OTI5XHU2NTcwICovXHJcbiAgICBzaWduSW5EYXlzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NEUwQVx1NEUwMFx1NkIyMVx1OTg4Nlx1NTNENlx1NzY4NFx1N0I3RVx1NTIzMFx1NTk1Nlx1NTJCMWlkICovXHJcbiAgICBzaWduSW5JZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTVERjJcdTdFQ0ZcdTUyQTBcdTkwMUZcdTZCMjFcdTY1NzAgKi9cclxuICAgIHNwZWVkVXBUaW1lczogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTRGNTNcdTUyOUIgKi9cclxuICAgIHZpdGFsaXR5OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTE1MVx1NjM2Mlx1NkJENFx1NEY4QiAqL1xyXG4gICAgcHJvcG9ydGlvbjogbnVtYmVyID0gMC4wMDAxO1xyXG4gICAgLyoqIFx1OTA4MFx1OEJGN1x1ODAwNSAqL1xyXG4gICAgaW52aXRlUGVvcGxlOiBzdHJpbmc7XHJcbiAgICAvKiogXHU3QjJDXHU0RTAwXHU2QjIxXHU3NjdCXHU1RjU1IDExIFx1ODg2OFx1NzkzQSBcdTYyNERcdTg4NjhcdTc5M0FcdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcdTVCOENcdTUxNjhcdTdFRDNcdTY3NUYgICovXHJcbiAgICBpc0ZpcnN0VGltZTogbnVtYmVyO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NjNEMFx1NzNCMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgd2l0aGRyYXc6IFdpdGhkcmF3RGF0YVtdO1xyXG4gICAgLyoqIFx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjU3MFx1NjM2RSAqL1xyXG4gICAgZ3VpZGVEYXRhOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGdldCB0dHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJMZXZlbDtcclxuICAgIH1cclxuICAgIHNldCB0dHQodikge1xyXG4gICAgICAgIHRoaXMub3JkZXJMZXZlbCA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VySW5mbygpO1xyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBXYXJlSG91c2VEYXRhIHtcclxuICAgIGJhc2U6IFBsYW50QmFzZTtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB0eXBlPzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFdhcmVob3VzZVNlcnZpY2Uge1xyXG4gICAgbGlzdDogV2FyZUhvdXNlRGF0YVtdID0gW107XHJcblxyXG4gICAgaW5pdChcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICkge1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJcdTk1MTlcdThCRUZcdTc2ODRpZCBcIiArIGQuaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoZC5pZCksXHJcbiAgICAgICAgICAgICAgICBjb3VudDogZC5hbW91bnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxQ0ZcdTVDMTFcdTcyNjlcdTU0QzFcdTY1NzBcdTkxQ0ZcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIGFtb3VudFxyXG4gICAgICovXHJcbiAgICByZWR1Y2VBbW91bnQoaWQ6IG51bWJlciwgYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFt4XS5jb3VudCAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTkwNTNcdTUxNzdcclxuICAgICAqL1xyXG4gICAgZ2V0T25lKGlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEl0ZW0oaWQpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2REZCXHU1MkEwXHU3MjY5XHU1NEMxXHJcbiAgICAgKi9cclxuICAgIGFkZChpZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLmNvdW50ICs9IGFtb3VudDtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX09yZGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlx1OTUxOVx1OEJFRlx1NzY4NGlkIFwiICsgaWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChpZCksXHJcbiAgICAgICAgICAgIGNvdW50OiBhbW91bnQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBXYXJlaG91c2VTZXJ2aWNlKCk7XHJcbiIsICIvKipcclxuICogXHU3N0VEXHU5NEZFXHU2M0E1XHU4QkY3XHU2QzQyXHU1MzRGXHU4QkFFXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBcGlIdHRwIHtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgKi9cclxuICAgIGxvZ2luID0gXCIvbG9naW5cIixcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgdG9rZW4gKi9cclxuICAgIGxvZ2luVG9rZW4gPSBcIi9sb2dpbi90b2tlblwiLFxyXG4gICAgLyoqIFx1OTg4Nlx1NTNENlx1OEJBMlx1NTM1NVx1NTk1Nlx1NTJCMSAqL1xyXG4gICAgb3JkZXJSZXdhcmQgPSBcIi9vcmRlci9yZXdhcmRcIixcclxuICAgIC8qKiBcdTk4ODZcdTUzRDZcdTdCN0VcdTUyMzBcdTU5NTZcdTUyQjEgKi9cclxuICAgIHNpZ25JblJld2FyZCA9IFwiL3NpZ25Jbi9yZXdhcmRcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTg5RTNcdTk1MDEgKi9cclxuICAgIGxhbmRVbmxvY2sgPSBcIi9sYW5kL3VubG9ja1wiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjRBRFx1NzlDRCAqL1xyXG4gICAgbGFuZFNvdyA9IFwiL2xhbmQvc293XCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU2NTM2XHU4M0I3ICovXHJcbiAgICBsYW5kR2F0aGVyID0gXCIvbGFuZC9nYXRoZXJcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTcgKi9cclxuICAgIGxhbmRVcGdyYWRlID0gXCIvbGFuZC91cGdyYWRlXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MkEwXHU5MDFGICovXHJcbiAgICBsYW5kU3BlZWRVcCA9IFwiL2xhbmQvc3BlZWRVcFwiLFxyXG4gICAgLyoqIFx1NzlDRFx1NUI1MFx1ODlFM1x1OTUwMSAqL1xyXG4gICAgc2VlZHNVbmxvY2sgPSBcIi9zZWVkcy91bmxvY2tcIixcclxuICAgIC8qKiBcdTgzQjdcdTUzRDZcdTgwQ0NcdTUzMDVcdTUyMTdcdTg4Njg9PiBcdTY2ODJcdTY1RjZcdThGRDlcdTRFMkFcdTYzQTVcdTUzRTNcdTRFMERcdTk3MDBcdTg5ODFcdTc1MjggKi9cclxuICAgIHdhcmVob3VzZSA9IFwiL3dhcmVob3VzZVwiLFxyXG4gICAgLyoqIFx1ODBDQ1x1NTMwNVx1NTU0Nlx1NTRDMVx1NTFGQVx1NTUyRSAqL1xyXG4gICAgd2FyZWhvdXNlU2VsbCA9IFwiL3dhcmVob3VzZS9zZWxsXCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU4RDJEXHU0RTcwICovXHJcbiAgICBwZXRCdXkgPSBcIi9wZXQvYnV5XCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU0RjY5XHU2MjM0ICovXHJcbiAgICBwZXRXZWFyID0gXCIvcGV0L3dlYXJcIixcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdThEMkRcdTRFNzAgKi9cclxuICAgIGZlZWRCdXkgPSBcIi9mZWVkL2J1eVwiLFxyXG4gICAgLyoqIFx1NEVGQlx1NTJBMVx1NTk1Nlx1NTJCMVx1OTg4Nlx1NTNENiAqL1xyXG4gICAgdGFza1Jld2FyZCA9IFwiL3Rhc2svcmV3YXJkXCIsXHJcbiAgICAvKiogXHU5MEJCXHU1QzQ1ICovXHJcbiAgICBuZWlnaGJvciA9IFwiL25laWdoYm9yXCIsXHJcbiAgICAvKiogXHU1MDc3XHU4M0RDICovXHJcbiAgICBsYW5kU3RlYWwgPSBcIi9sYW5kL3N0ZWFsXCIsXHJcbiAgICAvKiogXHU1MzU1XHU3MkVDXHU2N0U1XHU3NzBCXHU1RTdGXHU1NDRBICovXHJcbiAgICBhZCA9IFwiL2FkXCIsXHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU0RjUzXHU1MjlCXHU4RDJEXHU0RTcwICovXHJcbiAgICB2aXRhbGl0eUJ1eSA9IFwiL3ZpdGFsaXR5L2J1eVwiLFxyXG4gICAgLyoqIFx1NTZERVx1ODFFQVx1NURGMVx1NUJCNiAqL1xyXG4gICAgZ29Ib21lID0gXCIvZ29Ib21lXCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU1MjIwXHU5NjY0ICovXHJcbiAgICBmcmllbmREZWxldGUgPSBcIi9mcmllbmQvZGVsZXRlXCIsXHJcbiAgICAvKiogXHU5MDFBXHU4RkM3XHU1OTdEXHU1M0NCXHU3NTMzXHU4QkY3ICovXHJcbiAgICBmcmllbmRBbGxvdyA9IFwiL2ZyaWVuZC9hbGxvd1wiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1NzUzM1x1OEJGNyAqL1xyXG4gICAgZnJpZW5kQXBwbHkgPSBcIi9mcmllbmQvYXBwbHlcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTY0MUNcdTdEMjIgKi9cclxuICAgIGZyaWVuZFNlYXJjaCA9IFwiL2ZyaWVuZC9zZWFyY2hcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZExpc3QgPSBcIi9mcmllbmQvbGlzdFwiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1OTA4MFx1OEJGN1x1ODAwNVx1N0VEMVx1NUI5QSAqL1xyXG4gICAgZnJpZW5kSW52aXRlUGVvcGxlID0gXCIvZnJpZW5kL2ludml0ZS9wZW9wbGVcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZEludml0ZUxpc3QgPSBcIi9mcmllbmQvaW52aXRlL2xpc3RcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTU5NTZcdTUyQjFcdUZGMENcdTk4ODZcdTUzRDYgKi9cclxuICAgIGZyaWVuZEludml0ZVJlY2VpdmUgPSBcIi9mcmllbmQvaW52aXRlL3JlY2VpdmVcIixcclxuICAgIC8qKiBcdThCQkZcdTk1RUVcdTU5N0RcdTUzQ0JcdTVCQjZcdTkxQ0MgKi9cclxuICAgIGZyaWVuZFZpc2l0ID0gXCIvZnJpZW5kL3Zpc2l0XCIsXHJcbiAgICAvKiogXHU5MEFFXHU0RUY2XHU1MjE3XHU4ODY4ICovXHJcbiAgICBtYWlsTGlzdCA9IFwiL21haWwvbGlzdFwiLFxyXG4gICAgLyoqIFx1OTBBRVx1NEVGNlx1OTYwNVx1OEJGQiAqL1xyXG4gICAgbWFpbFJlYWQgPSBcIi9tYWlsL3JlYWRcIixcclxuICAgIC8qKiBcdTkwQUVcdTRFRjZcdTUyMjBcdTk2NjQgKi9cclxuICAgIG1haWxEZWxldGUgPSBcIi9tYWlsL2RlbGV0ZVwiLFxyXG4gICAgLyoqIFx1NjNEMFx1NzNCMCAqL1xyXG4gICAgd2l0aGRyYXcgPSBcIi93aXRoZHJhd1wiLFxyXG4gICAgLyoqIFx1NUJBMlx1NjIzN1x1N0FFRlx1NzI0OFx1NjcyQyAqL1xyXG4gICAgY29uZmlnQ2xpZW50ID0gXCIvY29uZmlnL2NsaWVudFwiLFxyXG4gICAgLyoqIFx1NUYxNVx1NUJGQ1x1NjU3MFx1NjM2RSAqL1xyXG4gICAgZ3VpZGUgPSBcIi9ndWlkZVwiLFxyXG59XHJcbiIsICJpbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBQZXRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZVwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM0Rlx1OEJBRVx1NjU3MFx1NjM2RVx1NTkwNFx1NzQwNlxyXG4gKi9cclxuY2xhc3MgSHR0cERhdGFDb250cm9sIHtcclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdThGNkNcdTUzRDEgKi9cclxuICAgIGZvcndhcmQoZDoge1xyXG4gICAgICAgIGFwaTogQXBpSHR0cDtcclxuICAgICAgICBkYXRhOiBhbnk7XHJcbiAgICAgICAgcmVzb2x2ZUV2ZW50PzogRnVuY3Rpb247XHJcbiAgICAgICAgLy8gVE9ETyBcdThGRDlcdTRFMkFcdTUzRUZcdTgwRkRcdTY3MDlcdTVGMDJcdTZCNjVcdTkxQ0RcdTU5MERcdTk1RUVcdTk4OThcdUZGMENcdTU0MEVcdTY3MUZcdTYzOTJcdTY3RTVcdTRFMDBcdTRFMEJcclxuICAgICAgICBlcnJvcj86IEZ1bmN0aW9uO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHN3aXRjaCAoZC5hcGkpIHtcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxvZ2luOlxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubG9naW5Ub2tlbjpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFNwZWVkVXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmFkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kR2F0aGVyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5mZWVkQnV5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDYpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kU293OlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC53YXJlaG91c2VTZWxsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAuc2VlZHNVbmxvY2s6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFNvdzpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kVW5sb2NrOlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnBldEJ1eTpcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnZpdGFsaXR5QnV5OlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnRhc2tSZXdhcmQ6XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kVXBncmFkZTpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5vcmRlclJld2FyZDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZC5yZXNvbHZlRXZlbnQpIGQucmVzb2x2ZUV2ZW50KGQuZGF0YSk7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoZC5hcGksIGQuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IoZXJyb3JDb2RlOiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgIC8vIHRleHQ6IGBlcnJvckNvZGUgJHtlcnJvckNvZGV9ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YCxcclxuICAgICAgICAgICAgdGV4dDogYCR7ZGF0YT8ubWVzc2FnZX1gLFxyXG4gICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzY3Qlx1NUY1NVxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9naW4oZDogTmV0SW5pdCkge1xyXG4gICAgICAgIGlmICghZCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NzY3Qlx1NUY1NVx1OTUxOVx1OEJFRixcdThCRjdcdTkxQ0RcdThCRDVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgUGxhbnRTZXJ2aWNlLmluaXQoZC5zZWVkcyk7XHJcbiAgICAgICAgV2FyZWhvdXNlU2VydmljZS5pbml0KGQud2FyZWhvdXNlKTtcclxuICAgICAgICBVc2VySW5mby5rZXkgPSBkLnVzZXJJbmZvLmtleTtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC51c2VySW5mby5kaWFtb25kO1xyXG4gICAgICAgIFVzZXJJbmZvLmdvbGQgPSBkLnVzZXJJbmZvLmdvbGQ7XHJcbiAgICAgICAgVXNlckluZm8ubmlja25hbWUgPSBkLnVzZXJJbmZvLm5pY2tuYW1lO1xyXG4gICAgICAgIFVzZXJJbmZvLmF2YXRhciA9IGQudXNlckluZm8uYXZhdGFyO1xyXG4gICAgICAgIFVzZXJJbmZvLm9yZGVyTGV2ZWwgPSBkLm9yZGVySWQgfHwgMDtcclxuICAgICAgICBVc2VySW5mby53YXJlUGV0SWQgPSBkLndlYXJQZXQ/LmlkO1xyXG4gICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gZC53ZWFyUGV0Py52aXRhbGl0eSB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IGQud2VhclBldD8uZGlnZXN0Q291bnREb3duIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPSBkLmFkdmVydGlzZVRpbWVzIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cyA9IGQuc2lnbkluRGF5cyB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnNpZ25JbklkID0gZC5zaWduSW5JZDtcclxuICAgICAgICBVc2VySW5mby5zcGVlZFVwVGltZXMgPSBkLnNwZWVkVXBUaW1lcztcclxuICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudXNlckluZm8udml0YWxpdHk7XHJcbiAgICAgICAgVXNlckluZm8uaW52aXRlUGVvcGxlID0gZC51c2VySW5mby5pbnZpdGVQZW9wbGU7XHJcbiAgICAgICAgVXNlckluZm8uaXNGaXJzdFRpbWUgPSBkLnVzZXJJbmZvLmlzRmlyc3RUaW1lO1xyXG4gICAgICAgIFVzZXJJbmZvLmd1aWRlRGF0YSA9IGQudXNlckluZm8uZ3VpZGVEYXRhIHx8IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBkLndpdGhkcmF3O1xyXG4gICAgICAgIFBldFNlcnZpY2UuaW5pdChkLnBldHMpO1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLmluaXQoZC50YXNrcyk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwiaXNMb2dpblwiLCB0cnVlKTtcclxuICAgICAgICBpZiAoZC50b2tlbikgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgZC50b2tlbik7XHJcbiAgICAgICAgTGFuZFNlcnZpY2UuaW5pdChkLmxhbmRzKTtcclxuXHJcbiAgICAgICAgQ29yZS5hdWRpby5zb3VuZE11dGVkID0gTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkuc291bmQ7XHJcbiAgICAgICAgQ29yZS5hdWRpby5tdXNpY011dGVkID0gTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkubXVzaWM7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5PdXQoKSB7XHJcbiAgICAgICAgUGxhbnRTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgV2FyZWhvdXNlU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFBldFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBMYW5kU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwiaXNMb2dpblwiLCBmYWxzZSk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgbnVsbCk7XHJcbiAgICAgICAgVXNlckluZm8ua2V5ID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gMDtcclxuICAgICAgICBVc2VySW5mby5nb2xkID0gMDtcclxuICAgICAgICBVc2VySW5mby5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8uYXZhdGFyID0gXCJcIjtcclxuICAgICAgICBVc2VySW5mby5vcmRlckxldmVsID0gMDtcclxuICAgICAgICBVc2VySW5mby53YXJlUGV0SWQgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gMDtcclxuICAgICAgICBVc2VySW5mby5kaWdlc3RDb3VudERvd24gPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5EYXlzID0gMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5JZCA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8uc3BlZWRVcFRpbWVzID0gMDtcclxuICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uaW52aXRlUGVvcGxlID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5pc0ZpcnN0VGltZSA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBbXTtcclxuICAgICAgICBVc2VySW5mby5ndWlkZURhdGEgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5RUQ4XHU4QkE0XHU3NTI4XHU2NzY1XHU2NkY0XHU2NUIwXHU3NTI4XHU2MjM3XHU5MUQxXHU1RTAxXHU3QjQ5XHJcbiAgICAgKiBAcGFyYW0gZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVVzZXJJbmZvKGQ6IFJldHVyblVzZXJJbmZvKSB7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IGQuZ29sZDtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC5kaWFtb25kO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcyB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExXHU4RkRCXHU1RUE2XHJcbiAgICAgKiBAcGFyYW0gaWQgXHU0RUZCXHU1MkExaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB0YXNrVXBkYXRlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSHR0cERhdGFDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCJzcmMvY29yZS9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcIi4vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcIi4vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwRGF0YUNvbnRyb2wgZnJvbSBcIi4vSHR0cERhdGFDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwiLi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vUmVzXCI7XHJcblxyXG5pbnRlcmZhY2UgSHR0cFNlbmREYXRhIHtcclxuICAgIGFwaTogQXBpSHR0cDtcclxuICAgIGRhdGE/OiBhbnk7XHJcbiAgICBtZXRob2Q/OiBzdHJpbmc7XHJcbiAgICByZXNwb25zZVR5cGU/OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzPzogYW55W10gfCBudWxsO1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1OTUxOVx1OEJFRlx1NTZERVx1OEMwMyAqL1xyXG4gICAgZXJyb3I/OiB7IChjb2RlOiBudW1iZXIsIGRhdGE6IGFueSk6IHZvaWQgfTtcclxuICAgIGJhc2VVcmw/OiBzdHJpbmc7XHJcbiAgICAvKiogXHU1M0QxXHU4RDc3XHU4QkY3XHU2QzQyXHU1MjREICovXHJcbiAgICBiZWZvcmU/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NzdFRFx1OTRGRVx1NjNBNVx1NjNBN1x1NTIzNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cENvbnRyb2wge1xyXG4gICAgQEluc3RhbmNlXHJcbiAgICBzdGF0aWMgaW5zdDogSHR0cENvbnRyb2w7XHJcblxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNlbmREYXRhOiBIdHRwU2VuZERhdGE7XHJcblxyXG4gICAgLyoqIFx1NEU4Qlx1NEVGNlx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBldmVudE1hcDogTWFwPHN0cmluZywgWE1MSHR0cFJlcXVlc3Q+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGluaXQodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJlc29sdmVcclxuICAgICAqIEBwYXJhbSByZWplY3RcclxuICAgICAqIEBwYXJhbSBhZCBcdTY2MkZcdTU0MjZcdTY2MkZcdTVFN0ZcdTU0NEFcdTc2ODRcdTY1NzBcdTYzNkVcdTUzNEZcdThCQUVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlWGhyKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhZDogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoeG1saHR0cC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeG1saHR0cC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDEyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoZGF0YSwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck9uZUluRXZlbnRNYXAoeG1saHR0cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeG1saHR0cC5yZXNwb25zZVRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7eG1saHR0cC5yZXNwb25zZVRleHR9IFx1OEJGN1x1OTFDRFx1OEJENWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmNvZGUgPSA5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoZCwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJPbmVJbkV2ZW50TWFwKHhtbGh0dHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgheG1saHR0cC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogNDA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6IFwiXHU2NzBEXHU1MkExXHU1NjY4XHU2NzJBXHU1NENEXHU1RTk0XHVGRjBDXHU4QkY3XHU5MUNEXHU4QkQ1XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyT25lSW5FdmVudE1hcCh4bWxodHRwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHhtbGh0dHA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMjBcdTk2NjRcdTk2MUZcdTUyMTdcdTRFOEJcdTRFRjZcclxuICAgICAqIEBwYXJhbSB4bWxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjbGVhck9uZUluRXZlbnRNYXAoeG1sOiBYTUxIdHRwUmVxdWVzdCkge1xyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5mb3JFYWNoKChlLCB2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSA9PSB4bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFwLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2VuZChkYXRhOiBIdHRwU2VuZERhdGEpIHtcclxuICAgICAgICBpZiAoIWRhdGEubWV0aG9kKSBkYXRhLm1ldGhvZCA9IFwicG9zdFwiO1xyXG4gICAgICAgIGlmICghZGF0YS5yZXNwb25zZVR5cGUpIGRhdGEucmVzcG9uc2VUeXBlID0gXCJqc29uXCI7XHJcbiAgICAgICAgaWYgKCFkYXRhLmJhc2VVcmwpIGRhdGEuYmFzZVVybCA9IHRoaXMuYmFzZVVybDtcclxuXHJcbiAgICAgICAgbGV0IHVyaSA9IGRhdGEuYmFzZVVybCArIGRhdGEuYXBpO1xyXG5cclxuICAgICAgICBsZXQgc2VuZERhdGE6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhLmRhdGEpLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbmREYXRhLnB1c2goYCR7ZH09JHtkYXRhLmRhdGFbZF19YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZW5kRGF0YVN0cmluZyA9IHNlbmREYXRhLmpvaW4oXCImXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ldmVudE1hcC5nZXQodXJpICsgc2VuZERhdGFTdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGE/LnR5cGUgPT0gQ29uZmlnR2FtZS5BcGlUeXBlQUQpIHtcclxuICAgICAgICAgICAgYXdhaXQgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4aHIgPSB0aGlzLmNyZWF0ZVhocihyZXNvbHZlLCByZWplY3QsIGFkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VuZERhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGE/LmJlZm9yZSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5iZWZvcmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFkYXRhLmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuaGVhZGVycyA9IFtcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke0xvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnRva2VufWBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIGAlYyA9PT4gc2VuZCAlYyR7ZGF0YS5hcGl9ICVjJHtKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEpfWAsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6IzgyY2NkZDtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiNmOGMyOTE7Zm9udC13ZWlnaHQ6NzAwO2BcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YS5hcGkpIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5IaW50Vmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcm06IHsgdGV4dDogYGh0dHAgXHU1NzMwXHU1NzQwXHU0RTBEXHU4MEZEXHU0RTNBXHU3QTdBYCB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmksIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke0xvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnRva2VufWApO1xyXG5cclxuICAgICAgICAgICAgeGhyLnNlbmQoc2VuZERhdGFTdHJpbmcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5zZXQodXJpICsgc2VuZERhdGFTdHJpbmcsIHhocik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wbGV0ZUhhbmRsZXIoZSwgcmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAoZS5jb2RlKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlLmNvZGUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZW5kRGF0YT8uZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZERhdGEuZXJyb3IoZS5jb2RlLCBlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5lcnJvcihlLmNvZGUsIGUuZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYCVjIDw9PSBiYWNrICVjJHt0aGlzLnNlbmREYXRhLmFwaX0gYCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojYjhlOTk0O2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiM3OGUwOGY7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBlLmRhdGFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgSHR0cERhdGFDb250cm9sLmZvcndhcmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogdGhpcy5zZW5kRGF0YS5hcGksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVFdmVudDogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzSGFuZGxlcihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vICBBZGRMYW5kVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkTGFuZFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb3N0SWNvbiwgdGlwczpcIlx1NEVGN1x1NjgzQ1x1NTZGRVx1NjgwN1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29zdEljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvc3RGb250LCB0aXBzOlwiXHU0RUY3XHU2ODNDRm9udFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29zdEZvbnQ6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBpZDogbnVtYmVyOyBjYWxsOiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIHByaXZhdGUgbGFuZERhdGE6IFJld2FyZEN1cnJlbmN5QmFzZTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5kRGF0YSA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ1bmxvY2tfbGFuZF9jb3N0XCIpLnZhbHVlW1xyXG4gICAgICAgICAgICBMYW5kU2VydmljZS5saXN0LnNpemVcclxuICAgICAgICBdIGFzIFJld2FyZEN1cnJlbmN5QmFzZTtcclxuICAgICAgICB0aGlzLmNvc3RJY29uLnNraW4gPSB0aGlzLmxhbmREYXRhLm9iai5pY29uO1xyXG4gICAgICAgIHRoaXMuY29zdEZvbnQudmFsdWUgPSB0aGlzLmxhbmREYXRhLmNvdW50ICsgXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFkZExhbmRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29zdF9nb2xkXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmREYXRhLmNvdW50ID4gVXNlckluZm8uZ29sZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEub2JqLmlkID09IENvbmZpZ0dhbWUuZGlhbW9uZElkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5jb3VudCA+IFVzZXJJbmZvLmRpYW1vbmRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5NEJCXHU3N0YzXHU0RTBEXHU4REIzXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVW5sb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFkZExhbmRWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZF9idG5cIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVW5sb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vLyAgQnV5Vml0YWxpdHlWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXlWaXRhbGl0eVZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxhYmVsLCB0aXBzOlwiXHU0RUY3XHU2ODNDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxhYmVsOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUljb24sIHRpcHM6XCJcdTRFRjdcdTY4M0NpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9O1xyXG4gICAgcHJpdmF0ZSBjb3N0R29sZENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgb25PcGVuZWQoZTogeyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICBsZXQgY29zdEdvbGRDb3VudCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIpLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICB0aGlzLmNvc3RHb2xkQ291bnQgPSBjb3N0R29sZENvdW50O1xyXG4gICAgICAgIHRoaXMucHJpY2VMYWJlbC50ZXh0ID0gYFx1NEVGN1x1NjgzQ1x1RkYxQSR7Y29zdEdvbGRDb3VudH1gO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5QWRCdG5cIjpcclxuICAgICAgICAgICAgY2FzZSBcImJ1eUJ0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnZpdGFsaXR5ID49IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ2aXRhbGl0eUxpbWl0XCIpLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTRGNTNcdTUyOUJcdTVERjJcdTZFRTFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gXCJidXlCdG5cIiAmJiBVc2VySW5mby5nb2xkIDwgdGhpcy5jb3N0R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC52aXRhbGl0eUJ1eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwiYnV5QnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBnb2xkOiAwOyBkaWFtb25kOiAwOyBhZHZlcnRpc2VUaW1lczogMDsgdml0YWxpdHk6IDAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudml0YWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5CdXlWaXRhbGl0eVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5cclxuLy8gIEZpZWxkTGV2ZWxVcFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkTGV2ZWxVcFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxhYmVsLCB0aXBzOlwiXHU0RUY3XHU2ODNDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxhYmVsOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUljb24sIHRpcHM6XCJcdTRFRjdcdTY4M0NpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBvYmo6IExhbmRPYmo7IGNhbGw6IEZ1bmN0aW9uIH07XHJcblxyXG4gICAgb25PcGVuZWQoZTogeyBvYmo6IExhbmRPYmo7IGNhbGw6IEZ1bmN0aW9uIH0pIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBlO1xyXG4gICAgICAgIGxldCBuZXh0TGFuZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImxhbmRMZXZlbFwiKS5nZXQoZS5vYmoubGV2ZWwgKyAxKTtcclxuICAgICAgICB0aGlzLnByaWNlTGFiZWwudGV4dCA9IGBcdTRFRjdcdTY4M0NcdUZGMUEke25leHRMYW5kLmNvc3QuY291bnR9YDtcclxuICAgICAgICB0aGlzLnByaWNlSWNvbi5za2luID0gbmV4dExhbmQuY29zdC5vYmouaWNvbjtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cGdyYWRlQnRuXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cGdyYWRlQWRCdG5cIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVXBncmFkZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJnYXRoZXJcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEub2JqLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwidXBncmFkZUJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PSBcInVwZ3JhZGVBZEJ0blwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc0Rlc2NWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBhbmVsTm9kZSwgdGlwczpcIlx1NkVEQVx1NTJBOFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBwYW5lbE5vZGU6IExheWEuUGFuZWw7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxOb2RlLnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1Jld2FyZFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNSZXdhcmRWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppbnZpdGVCb3gsIHRpcHM6XCJcdTY1NzRcdTY1NzBcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGludml0ZUJveDogTGF5YS5Cb3g7XHJcbiAgICAvKiogQHByb3Age25hbWU6aW52aXRlSW5wdXQsIHRpcHM6XCJcdThGOTNcdTUxNjVcdTkwODBcdThCRjdcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGludml0ZUlucHV0OiBMYXlhLlRleHRJbnB1dDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxpc3QsIHRpcHM6XCJcdThGOTNcdTUxNjVcdTkwODBcdThCRjdcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlTGlzdDogTGF5YS5MaXN0O1xyXG5cclxuICAgIHByaXZhdGUgaW52aXRlTGlzdDogSW52aXRlRGF0YVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSByZXdhcmRWYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcHJvcG9ydGlvbjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgY2FsbDogRnVuY3Rpb247XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC5hcnJheSA9IG5ldyBBcnJheSgzKTtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnJlbmRlckl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmVkKGRhdGE6IHsgbGlzdDogW107IGNhbGw6IEZ1bmN0aW9uIH0pIHtcclxuICAgICAgICB0aGlzLmludml0ZUxpc3QgPSBkYXRhLmxpc3QgfHwgW107XHJcbiAgICAgICAgdGhpcy5jYWxsID0gZGF0YS5jYWxsO1xyXG4gICAgICAgIGlmIChVc2VySW5mby5pbnZpdGVQZW9wbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnZpdGVCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmludml0ZUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmV3YXJkVmFsdWUgPSAoXHJcbiAgICAgICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJJbnZpdGF0aW9uX3Jld2FyZHNcIikudmFsdWUgYXMgUmV3YXJkQ3VycmVuY3lCYXNlXHJcbiAgICAgICAgKS5jb3VudDtcclxuXHJcbiAgICAgICAgY29uc3Qgd2l0aGRyYXdhbCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ3aXRoZHJhd2FsXCIpLnZhbHVlIGFzIHN0cmluZ1tdO1xyXG4gICAgICAgIHRoaXMucHJvcG9ydGlvbiA9IE51bWJlcih3aXRoZHJhd2FsWzFdKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNSZXdhcmRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaW52aXRlX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC53eFNoYXJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdWJtaXRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0blwiOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IChlLnRhcmdldCBhcyBMYXlhLkltYWdlKS5kYXRhU291cmNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aXRoZHJhdyhpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NzNCMFxyXG4gICAgICogQHBhcmFtIGlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgd2l0aGRyYXcoaTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEludml0ZVJlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGluZGV4OiBpIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTYzRDBcdTczQjBcdTYyMTBcdTUyOUZcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludml0ZUxpc3RbaV0ucmVjZWl2ZWRSZXdhcmQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVySXRlbShjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1N0IyQyR7aSArIDF9XHU0RjREYDtcclxuICAgICAgICBjb25zdCBidG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpIGFzIExheWEuSW1hZ2U7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwicHJpY2VfYm94XCIpLmdldENoaWxkQnlOYW1lKFwicHJpY2VcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZFZhbHVlIC8gdGhpcy5wcm9wb3J0aW9uXHJcbiAgICAgICAgfWA7XHJcblxyXG4gICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ19leHRyYWN0QWN0aXZlLnBuZ1wiO1xyXG4gICAgICAgIGlmICh0aGlzLmludml0ZUxpc3QubGVuZ3RoID4gaSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnZpdGVMaXN0W2ldLnJlY2VpdmVkUmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX2Nhc2hEb25lLnBuZ1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnRuLmRhdGFTb3VyY2UgPSBpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU0RUE0XHU3RUQxXHU1QjlBXHU2MjExXHU3Njg0XHU5MDgwXHU4QkY3XHU0RUJBXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW52aXRlSW5wdXQudGV4dCB8fCAhdGhpcy5pbnZpdGVJbnB1dC50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTA4MFx1OEJGN1x1NzgwMVx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QVx1RkYwMVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlUGVvcGxlLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogdGhpcy5pbnZpdGVJbnB1dC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8uaW52aXRlUGVvcGxlID0gdGhpcy5pbnZpdGVJbnB1dC50ZXh0O1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTdFRDFcdTVCOUFcdTYyMTBcdTUyOUZcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludml0ZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludml0ZUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbCkgdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkZEJveCwgdGlwczpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWRkQm94OiBMYXlhLkJveDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTGlzdCwgdGlwczpcIlx1NTIxN1x1ODg2OFx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUxpc3Q6IExheWEuTGlzdDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1c2VyS2V5LCB0aXBzOlwiXHU3NTI4XHU2MjM3XHU1M0NCXHU2MEM1XHU3ODAxXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB1c2VyS2V5OiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmtleUlucHV0Tm9kZSwgdGlwczpcIlx1OTA4MFx1OEJGN1x1NzgwMVx1OEY5M1x1NTE2NVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUga2V5SW5wdXROb2RlOiBMYXlhLlRleHRJbnB1dDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRGcmllbmQsIHRpcHM6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0JcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZEZyaWVuZDogTGF5YS5JbWFnZTtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZW1wdHlfbGIsIHRpcHM6XCJcdTdBN0FcdTc2ODRcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGVtcHR5X2xiOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogMVx1NjYyRlx1NTk3RFx1NTNDQlx1NTIxN1x1ODg2OCAyIFx1NTJBMFx1NTk3RFx1NTNDQiAgM1x1NTIyMFx1OTY2NFx1NTk3RFx1NTNDQiAqL1xyXG4gICAgcHJpdmF0ZSB2aWV3U3RhdGU6IDEgfCAyIHwgMyA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBmcmllbmRzOiBGcmllbmREYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgZnJpZW5kc0xpc3Q6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKGRhdGE6IHtcclxuICAgICAgICBmcmllbmREYXRhOiBGcmllbmRMaXN0RGF0YTtcclxuICAgICAgICAvKiogdHlwZVx1NEUzQTFcdTYyNTNcdTVGMDBcdTUyQTBcdTU5N0RcdTUzQ0JcdTc1NENcdTk3NjIgKi9cclxuICAgICAgICB0eXBlOiBudW1iZXI7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzID0gZGF0YS5mcmllbmREYXRhLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzTGlzdCA9IHRoaXMuZnJpZW5kcztcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3REYXRhKCk7XHJcbiAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5pdGVtUmVuZGVyKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJLZXkudGV4dCA9IGBcdTYyMTFcdTc2ODRcdTUzQ0JcdTYwQzVcdTc4MDFcdUZGMUEke1VzZXJJbmZvLmtleX1gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEudHlwZSk7XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSAmJiBkYXRhLnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEZyaWVuZEV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNFbXB0eSgpIHtcclxuICAgICAgICB0aGlzLmVtcHR5X2xiLnZpc2libGUgPSAhdGhpcy5pdGVtTGlzdC5hcnJheS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaXN0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLmZyaWVuZHNMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGIuYXBwbHlJbmcgKiAxMDAwMDAgLSBhLmFwcGx5SW5nICogMTAwMDAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXRlbVJlbmRlcihjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZnJpZW5kc0xpc3RbaV07XHJcblxyXG4gICAgICAgIGxldCBuZXdCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwibmV3X2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgaGVhcnRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiaGVhcnRfYm94XCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGdvUGxheUJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJnb19wbGF5X2J0blwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBhcHBseUJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJhcHBseV9idG5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgZGVsQnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImRlbF9idG5cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBoZWFydEJveC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgYXBwbHlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGRlbEJ0bi52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChkYXRhPy5hdmF0YXIpIChjZWxsLmdldENoaWxkQnlOYW1lKFwiaGVhZFwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZGF0YS5hdmF0YXI7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBkYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibHZcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IChkYXRhLm9yZGVyTGV2ZWwgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChoZWFydEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gKGRhdGEuaW50aW1hY3kgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICBkYXRhLmdhaW5EaWFtb25kICsgXCJcIjtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZWxfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgIGdvUGxheUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnZpZXdTdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBhcHBseUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRlbEJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IDEgfHwgdGhpcy52aWV3U3RhdGUgPT0gMykge1xyXG4gICAgICAgICAgICAvL1x1NzUzM1x1OEJGNyBcdTRFMkRcclxuICAgICAgICAgICAgaWYgKGRhdGEuYXBwbHlJbmcpIHtcclxuICAgICAgICAgICAgICAgIG5ld0JveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgKG5ld0JveC5nZXRDaGlsZEJ5TmFtZShcInBhc3RfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgKG5ld0JveC5nZXRDaGlsZEJ5TmFtZShcImlnbm9yZVwiKSBhcyBMYXlhLkltYWdlKS5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NURGMlx1N0VDRlx1NjYyRlx1NTk3RFx1NTNDQlxyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkX2ZyaWVuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGcmllbmRFdmVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVsX2ZyaWVuZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVGcmllbmRFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZXNjX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJld2FyZF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb3B5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlYXJjaF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFwcGx5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUV2ZW50KGUudGFyZ2V0IGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBhc3RfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93RnJpZW5kKGUudGFyZ2V0IGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlbF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJpZW5kKGUudGFyZ2V0IGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImlnbm9yZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZ25vcmUoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fcGxheV9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaXRGcmllbmQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlRnJpZW5kRXZlbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IDMpIHJldHVybjtcclxuICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52aWV3U3RhdGUgPSAzO1xyXG4gICAgICAgIGxldCBuZXdGOiBGcmllbmREYXRhW10gPSBbXTtcclxuICAgICAgICB0aGlzLmZyaWVuZHMuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWQuYXBwbHlJbmcpIG5ld0YucHVzaChkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gbmV3RjtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDkxNDtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICB0aGlzLmFkZEZyaWVuZC5za2luID0gYGdhbWUvaW1nX2ZyaWVuZEJ0bi5wbmdgO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkRnJpZW5kRXZlbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IDMgfHwgdGhpcy52aWV3U3RhdGUgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHM7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuaGVpZ2h0ID0gOTE0O1xyXG4gICAgICAgICAgICB0aGlzLmFkZEZyaWVuZC5za2luID0gYGdhbWUvaW1nX2FkZEJ0bi5wbmdgO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuaGVpZ2h0ID0gNTkwOyAvLzkxNFxyXG4gICAgICAgICAgICB0aGlzLmFkZEZyaWVuZC5za2luID0gYGdhbWUvaW1nX2ZyaWVuZEJ0bi5wbmdgO1xyXG4gICAgICAgICAgICB0aGlzLmVtcHR5X2xiLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1RkZEXHU3NTY1XHU1OTdEXHU1M0NCXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaWdub3JlKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFTb3VyY2UgYXMgRnJpZW5kRGF0YTtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kRGVsZXRlLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuZnJpZW5kcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyaWVuZHNbeF0udWlkID09IGRhdGEudWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kcy5zcGxpY2UoeCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb3BlblJld2FyZCgpIHtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlTGlzdCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogSW52aXRlTGlzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNSZXdhcmRWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBkLmxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGQ6IEZyaWVuZExpc3REYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kcyA9IGQubGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzTGlzdCA9IHRoaXMuZnJpZW5kcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJGXHU5NUVFXHU1OTdEXHU1M0NCXHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdmlzaXRGcmllbmQodGFyZ2V0OiBMYXlhLkltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyh0cnVlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFTb3VyY2UgYXMgRnJpZW5kRGF0YTtcclxuXHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kVmlzaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmdvX2ZyaWVuZF9ob21lLCBbZCwgZGF0YV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIyMFx1OTY2NFx1NTk3RFx1NTNDQlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlbGV0ZUZyaWVuZCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1Nzg2RVx1OEJBNFx1ODk4MVx1NTIyMFx1OTY2NFx1NTk3RFx1NTNDQlx1NTQxN1x1RkYxRlwiLFxyXG4gICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kRGVsZXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuZnJpZW5kcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJpZW5kc1t4XS51aWQgPT0gZGF0YS51aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWxDYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NTk3RFx1NTNDQlx1NzUzM1x1OEJGN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFsbG93RnJpZW5kKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kQWxsb3csXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJpZW5kSWQ6IGRhdGEudWlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5hcHBseUluZyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NTMzXHU4QkY3XHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXBwbHlFdmVudCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEFwcGx5LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NURGMlx1NTNEMVx1OTAwMVx1NkZDMFx1NjBDNVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NDFDXHU3RDIyXHU1OTdEXHU1M0NCXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlYXJjaCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMua2V5SW5wdXROb2RlLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU1M0NCXHU2MEM1XHU3ODAxXHU0RTBEXHU4MEZEXHU0RTNBXHU3QTdBXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmtleUlucHV0Tm9kZS50ZXh0ID09IFVzZXJJbmZvLmtleSkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjQxQ1x1N0QyMlx1ODFFQVx1NURGMVx1NUU3Mlx1NTU2NVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZFNlYXJjaCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IHRoaXMua2V5SW5wdXROb2RlLnRleHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogRnJpZW5kRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzTGlzdCA9IFtkXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvcHkoKSB7XHJcbiAgICAgICAgbGV0IGE6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICBhLnZhbHVlID0gVXNlckluZm8ua2V5O1xyXG4gICAgICAgIGEuc2VsZWN0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgICAgIGEucmVtb3ZlKCk7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTU5MERcdTUyMzZcdTYyMTBcdTUyOUZcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3VpZGVWaWV3RGF0YSB7XHJcbiAgICBub2RlTGlzdDogTGF5YS5JbWFnZVtdO1xyXG4gICAgY2FsbDogRnVuY3Rpb247XHJcbn1cclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBHdWlkZVZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvL1x1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmd1aWRlSGFuZCwgdGlwczpcIlx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ3VpZGVIYW5kOiBMYXlhLlNwcml0ZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVzY0xiLCB0aXBzOlwiXHU2M0NGXHU4RkYwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkZXNjTGI6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm5vZGVCb3gsIHRpcHM6XCJcdTYzQ0ZcdThGRjBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG5vZGVCb3g6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGd1aWRBbmk6IExheWEuVGltZUxpbmU7XHJcbiAgICBwcml2YXRlIG9sZFBhcmVudDogTGF5YS5Cb3g7XHJcbiAgICBwcml2YXRlIG9sZFpPcmRlcjogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdGV4dExpc3QgPSBbXHJcbiAgICAgICAgXCJcdTYwQThcdTc2ODRcdTk0QjFcdTUzMDVcdTRGNTlcdTk4OURcIixcclxuICAgICAgICBcIlx1OEZEOVx1OTFDQ1x1NjYyRlx1NUUwMlx1NjI2Q1x1OEJBMlx1NTM1NSxcdTYzMDlcdTg5ODFcdTZDNDJcdTVCOENcdTYyMTBcdTU0MEVcdTRGMUFcdTgxRUFcdTUyQThcdThGREJcdTUxNjVcdTRFMEJcdTRFMDBcdTdFQTdcdThCQTJcdTUzNTVcdTMwMDJcIixcclxuICAgICAgICBcIlx1OEZEOVx1OTFDQ1x1NjYyRlx1NEVEM1x1NUU5MyxcdTY1MzZcdTgzQjdcdTc2ODRcdTRGNUNcdTcyNjlcdTkwRkRcdTVCNThcdTY1M0VcdTU3MjhcdThGRDlcdTkxQ0NcdUZGMENcdTUxRkFcdTU1MkVcdTRGNUNcdTcyNjlcdTRFNUZcdTU3MjhcdThGRDlcdTkxQ0NcdTMwMDJcIixcclxuICAgICAgICBcIlx1OEZEOVx1OTFDQ1x1NjYyRlx1OTZDNlx1NUUwMixcdThEMkRcdTRFNzBcdTc5Q0RcdTVCNTBcdTMwMDFcdTcyRDdcdTdDQUVcdTc2ODRcdTU3MzBcdTY1QjlcdThGRDhcdTY3MDlcdTY3MDBcdTkxQ0RcdTg5ODFcdTc2ODRcdTk0QjFcdTVFODRcdTRFNUZcdTU3MjhcdThGRDlcdTkxQ0MsXHU2M0QwXHU3M0IwXHU3Njg0XHU2NUY2XHU1MDE5XHU2MEE4XHU0RjFBXHU3RUNGXHU1RTM4XHU2NzY1XHU3Njg0XHUzMDAyXCIsXHJcbiAgICAgICAgXCJcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTU3MjhcdThGRDlcdTkxQ0MsXHU1NzFGXHU1NzMwXHU3QjQ5XHU3RUE3XHU4RDhBXHU5QUQ4LFx1OEQ4QVx1ODBBNVx1NkM4M1x1RkYwQ1x1NjUzNlx1ODNCN1x1NUMzMVx1OEQ4QVx1NTkxQVx1MzAwMlwiLFxyXG4gICAgICAgIFwiXHU4RkQ5XHU5MUNDXHU2NjJGXHU2MEE4XHU3Njg0XHU1MTlDXHU1NzNBXHUzMDAyXHU3OUNEXHU2OTBEXHUzMDAxXHU2NTM2XHU4M0I3XHU5MEZEXHU1NzI4XHU4RkQ5XHU5MUNDLFx1NjA4NFx1NjA4NFx1NTQ0QVx1OEJDOVx1NEY2MFx1OEZEOVx1NTc1N1x1NTczMFx1NjUzNlx1ODNCN1x1NzY4NFx1NjVGNlx1NTAxOVx1NTNFRlx1ODBGRFx1NEYxQVx1NEVBN1x1NTFGQVx1OTRCQlx1NzdGM1x1NTRFNlx1MzAwMlwiLFxyXG4gICAgICAgIFwiXHU2MEE4XHU3Njg0XHU0RUZCXHU1MkExXCIsXHJcbiAgICAgICAgXCJcdTYwQThcdTc2ODRcdTRGRTFcdTRFRjZcIixcclxuICAgICAgICBcIlx1OEZEOVx1OTFDQ1x1NTNFRlx1NEVFNVx1NTNCQlx1NTIyQlx1NEVCQVx1NzY4NFx1NTE5Q1x1NTczQVx1OEY2Q1x1OEY2QyxcdTVFMkVcdTUyMkJcdTRFQkFcdTY1MzZcdTc2ODRcdTgzRENcdTkwRkRcdTVGNTJcdTYwQTgsXHU0RjQ2XHU2NjJGXHU4OTgxXHU1QzBGXHU1RkMzXHU3MkQ3XHU3MkQ3XHU1NEU2XHUzMDAyXCIsXHJcbiAgICBdO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogR3VpZGVWaWV3RGF0YTtcclxuICAgIHByaXZhdGUgc3RlcDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdXNlclN0ZXA6IHN0cmluZ1tdO1xyXG5cclxuICAgIG9uT3BlbmVkKGRhdGE6IEd1aWRlVmlld0RhdGEpIHtcclxuICAgICAgICBpZiAoIWRhdGEpIHJldHVybjtcclxuICAgICAgICBpZiAoIWRhdGEubm9kZUxpc3QpIGRhdGEubm9kZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuZ3VpZGVIYW5kLmFscGhhID0gMDtcclxuICAgICAgICB0aGlzLnVzZXJTdGVwID0gVXNlckluZm8uZ3VpZGVEYXRhLnNwbGl0KFwiXCIpO1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyU3RlcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDk7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJTdGVwW3hdIHx8IHRoaXMudXNlclN0ZXBbeF0gPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAgPSB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmd1aWRIYW5kQW5pKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTdGVwKCkge1xyXG4gICAgICAgIGxldCBwb3M6IExheWEuUG9pbnQ7XHJcbiAgICAgICAgY29uc3QgcHJlTm9kZSA9IHRoaXMuZGF0YS5ub2RlTGlzdFt0aGlzLnN0ZXAgLSAxXTtcclxuXHJcbiAgICAgICAgaWYgKHByZU5vZGUgJiYgdGhpcy5vbGRQYXJlbnQpIHtcclxuICAgICAgICAgICAgcG9zID0gdGhpcy5vbGRQYXJlbnQuZ2xvYmFsVG9Mb2NhbChcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZUJveC5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KHByZU5vZGUueCwgcHJlTm9kZS55KSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5vbGRQYXJlbnQuYWRkQ2hpbGRBdChwcmVOb2RlLCB0aGlzLm9sZFpPcmRlcik7XHJcbiAgICAgICAgICAgIHByZU5vZGUucG9zKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudGV4dExpc3RbdGhpcy5zdGVwXSkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkd1aWRlVmlldyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRhdGEubm9kZUxpc3RbdGhpcy5zdGVwXTtcclxuICAgICAgICB0aGlzLm9sZFpPcmRlciA9IG5vZGUuek9yZGVyO1xyXG4gICAgICAgIHRoaXMub2xkUGFyZW50ID0gbm9kZS5wYXJlbnQgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlQm94Lmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgIHRoaXMub2xkUGFyZW50LmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQobm9kZS54LCBub2RlLnkpKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZUJveC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICBub2RlLnBvcyhwb3MueCwgcG9zLnkpO1xyXG5cclxuICAgICAgICB0aGlzLmd1aWRlSGFuZC5zY2FsZVggPSAxO1xyXG4gICAgICAgIGNvbnN0IHRleHRQb3NBZGQ6IExheWEuUG9pbnQgPSBuZXcgTGF5YS5Qb2ludCgpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGVwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDE1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTEwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTMwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IC0xMDA7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSAyNTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlSGFuZC5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTQwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDYwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDQ1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDE2MDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zQWRkLnNldFRvKC0yMDAsIC0yODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDE2MDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgLTI4MCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgcG9zLnggKz0gMTQwO1xyXG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dFBvc0FkZC5zZXRUbygtNTYwLCAtMzgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMuZ3VpZGVIYW5kLCB7IHg6IHBvcy54LCB5OiBwb3MueSwgYWxwaGE6IDEgfSwgMzAwKTtcclxuICAgICAgICB0aGlzLmRlc2NMYi5hbHBoYSA9IDA7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLmRlc2NMYiwgeyBhbHBoYTogMSB9LCAxNTApO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnBvcyhwb3MueCArIHRleHRQb3NBZGQueCwgcG9zLnkgKyB0ZXh0UG9zQWRkLnkpO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnRleHQgPSB0aGlzLnRleHRMaXN0W3RoaXMuc3RlcF07XHJcbiAgICAgICAgdGhpcy5zdGVwKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljayA9IHRydWU7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VyU3RlcFt0aGlzLnN0ZXBdID0gXCIxXCI7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZ3VpZGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy51c2VyU3RlcC5qb2luKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1x1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGd1aWRIYW5kQW5pKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaSA9IExheWEuVGltZUxpbmUudG8odGhpcy5ndWlkZUhhbmQsIHsgcm90YXRpb246IC0xNSB9LCA0MDAsIG51bGwpLnRvKFxyXG4gICAgICAgICAgICB0aGlzLmd1aWRlSGFuZCxcclxuICAgICAgICAgICAgeyByb3RhdGlvbjogMCB9LFxyXG4gICAgICAgICAgICA0MDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaS5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGREaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaT8uZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGludFZpZXdEYXRhIHtcclxuICAgIC8qKiBcdTY1ODdcdTVCNTdcdTUxODVcdTVCQjkgKi9cclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIC8qKiBcdTc4NkVcdThCQTRcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTUzRDZcdTZEODhcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbmNlbENhbGw/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuLy9kZWZhdWx0IGNsYXNzIEhpbnRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGludFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRleHQsIHRpcHM6XCJcdTUxODVcdTVCQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRleHQ6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29uZmlybUJ0biwgdGlwczpcIlx1Nzg2RVx1OEJBNFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29uZmlybUJ0bjogTGF5YS5JbWFnZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjYW5jZWxCdG4sIHRpcHM6XCJcdTUzRDZcdTZEODhcdTYzMDlcdTk0QUVcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNhbmNlbEJ0bjogTGF5YS5JbWFnZTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IEhpbnRWaWV3RGF0YTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IHRoaXMuZGF0YT8udGV4dCB8fCBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYW5jZWxDYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCAmJiB0aGlzLmRhdGEuY2FuY2VsQ2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDI1MjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDQ1ODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbmNlbENhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FuY2VsQ2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5IaW50Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbmZpcm1cIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5IaW50Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lLCB7IEJ1aWxkVHlwZSB9IGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2FkQmFyLCB0aXBzOlwibG9hZCBiYXJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCYXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRCb3gsIHRpcHM6XCJcdTUyQTBcdThGN0RcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2dpbkJveCwgdGlwczpcIlx1NzY3Qlx1OTY0Nlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9naW5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcml2YWN5Qm94LCB0aXBzOlwiXHU5NjkwXHU3OUMxXHU1MzRGXHU4QkFFXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcml2YWN5Qm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpdmFjeUNoZWNrSWNvbiwgdGlwczpcIlx1OTY5MFx1NzlDMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaXZhY3lDaGVja0ljb246IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU4RkRCXHU1RUE2XHU2NzYxXHU5RUQ4XHU4QkE0XHU1QkJEXHU1RUE2ICovXHJcbiAgICBwcml2YXRlIGxvYWRCYXJPbGRXaWR0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBhc3luYyBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgYXdhaXQgdGhpcy52ZXJzaW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKT8uaXNMb2dpbikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vbihFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgdGhpcywgdGhpcy5sb2FkUHJvZ3Jlc3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXdha2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxvYWRMYWJlbCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9hZExhYmVsLnRleHQgPSBcIkxvYWQuLi4uMCVcIjtcclxuICAgICAgICB0aGlzLmxvYWRCYXJPbGRXaWR0aCA9IHRoaXMubG9hZEJhci53aWR0aDtcclxuICAgICAgICB0aGlzLmxvYWRCYXIud2lkdGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QnVpbGRUeXBlKCkge1xyXG4gICAgICAgIGxldCBidWlsZFR5cGUgPSBudWxsO1xyXG4gICAgICAgIHN3aXRjaCAoQlVJTERfVFlQRSkge1xyXG4gICAgICAgICAgICBjYXNlIEJ1aWxkVHlwZS5kZWJ1ZzpcclxuICAgICAgICAgICAgICAgIGJ1aWxkVHlwZSA9IDM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCdWlsZFR5cGUudGVzdDpcclxuICAgICAgICAgICAgICAgIGJ1aWxkVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCdWlsZFR5cGUub25saW5lOlxyXG4gICAgICAgICAgICAgICAgYnVpbGRUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWJ1aWxkVHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU3M0FGXHU1ODgzdHlwZVx1OTE0RFx1N0Y2RVx1NTFGQVx1OTUxOVwiLFxyXG4gICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmNsZWFyQ2FjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWlsZFR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyB2ZXJzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmNvbmZpZ0NsaWVudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlkOiB0aGlzLmdldEJ1aWxkVHlwZSgpIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IENvbmZpZ0NsaWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb24gPSBOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnZlcnNpb24/LnJlcGxhY2UoL1xcLi9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ2ZXJzaW9uXCIsIGQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ0dhbWUudmVyc2lvbiA9IGQudmVyc2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoZC52ZXJzaW9uLnJlcGxhY2UoL1xcLi9nLCBcIlwiKSkgPiB2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5jbGVhckNhY2hlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTY4QzBcdTZENEJcdTUyMzBcdTY1QjBcdTc2ODRcdTcyNDhcdTY3MkNcdUZGMENcdThCRjdcdTY2RjRcdTY1QjBcdUZGMDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ2ZXJzaW9uXCIsIGQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuc2hvd0JhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnR2FtZS52ZXJzaW9uID0gZC52ZXJzaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiXHU3MjQ4XHU2NzJDXHU2OEMwXHU2RDRCXHU1MUZBXHU5NTE5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImxvZ2luX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tfYm94XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaXZhY3lDaGVja0ljb24udmlzaWJsZSA9ICF0aGlzLnByaXZhY3lDaGVja0ljb24udmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJpdmFjeV9sYlwiOlxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5wcml2YWN5QWdyZWVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBsb2dpbihpc1d4OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbikge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxvZ2luVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChjb2RlLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZDogTmV0SW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHRoaXMuZGF0YS5jYWxsKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5sb2dpblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IE51bWJlcihkLnVzZXJJbmZvLmtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzV3gpO1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wcml2YWN5Q2hlY2tJY29uLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdThCRjdcdTk2MDVcdThCRkJcdTMwMEFcdTc1MjhcdTYyMzdcdTk2OTBcdTc5QzFcdTUzNEZcdThCQUVcdTMwMEJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVzdEsgPSBsb2NhdGlvbi5zZWFyY2gubWF0Y2goL1xcP2lkPSguKykvKSxcclxuICAgICAgICAgICAgICAgIHRlc3RLZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0ZXN0SyAmJiB0ZXN0Sy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0S2UgPSB0ZXN0S1sxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgd3hPcGVuSWQgPSB0ZXN0S2UsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA9IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXIgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoaXNXeCAmJiAhd3hPcGVuSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnd4TG9naW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eE9wZW5JZCA9IGRhdGEuZGF0YVtcIm9wZW5pZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXIgPSBkYXRhLmRhdGFbXCJpY29udXJsXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lID0gZGF0YS5kYXRhW1wibmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXd4T3BlbklkKSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjcyQVx1ODNCN1x1NTNENlx1NTIzMFx1NUZBRVx1NEZFMWlkXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubG9naW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJsb2dpblwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFjY291bnQ6IGlzV3ggPyBudWxsIDogdGhpcy51c2VySW5wdXQudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3hJZDogd3hPcGVuSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGNvZGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZDogTmV0SW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHRoaXMuZGF0YS5jYWxsKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJpOiBBcHBFdmVudE1hcC53eExvZ2luU3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5pc0ZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAucmVnaXN0ZXJTdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IE51bWJlcihkLnVzZXJJbmZvLmtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAubG9naW5TdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiBOdW1iZXIoZC51c2VySW5mby5rZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUHJvZ3Jlc3Modikge1xyXG4gICAgICAgIHRoaXMubG9hZEJhci53aWR0aCA9IHYgKiB0aGlzLmxvYWRCYXJPbGRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vZmYoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIHRoaXMsIHRoaXMubG9hZFByb2dyZXNzKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9kZWZhdWx0IGNsYXNzIE1haWxEZXNjVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxEZXNjVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y2VudGVyUGFuZWwsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlclBhbmVsOiBMYXlhLlBhbmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRpdGxlLCB0aXBzOlwiXHU5ODc2XHU2ODA3XHU5ODk4XHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0aXRsZTogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb3N0TGIsIHRpcHM6XCJcdTUwNzdcdThENzBcdTRFODZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvc3RMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpiYWNrTGIsIHRpcHM6XCJcdTYyN0VcdTU2REVcdTY3NjVcdTc2ODRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJhY2tMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpib3R0b21MYiwgdGlwczpcIlx1NUU5NVx1OTBFOFx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYm90dG9tTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbSwgdGlwczpcIlx1NzI2OVx1NTRDMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOlByZWZhYn0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtOiBMYXlhLlByZWZhYjtcclxuXHJcbiAgICBwcml2YXRlIG1haWxJZDogbnVtYmVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2FsbDogRnVuY3Rpb247XHJcblxyXG4gICAgb25PcGVuZWQoZDogeyBkYXRhOiBNYWlsUmV0dXJuRGF0YTsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkLmRhdGE7XHJcbiAgICAgICAgdGhpcy5jYWxsID0gZC5jYWxsO1xyXG4gICAgICAgIHRoaXMubWFpbElkID0gZC5kYXRhLmlkO1xyXG4gICAgICAgIHRoaXMuY2VudGVyUGFuZWwudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGl0bGUudGV4dCA9IGAke2RhdGEubWVzc2FnZX1cdTZGNUNcdTUxNjVcdTRFODZcdTRGNjBcdTc2ODRcdTgzRENcdTU3MzBcdTkxQzdcdTk3NTJgO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zTG9zdDogeyBpZDogbnVtYmVyOyBhbW91bnQ6IG51bWJlciB9W10gPSBbXSxcclxuICAgICAgICAgICAgaXRlbXNCYWNrOiB7IGlkOiBudW1iZXI7IGFtb3VudDogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgICAgIGxldCBsb3N0RGlhbW9uZCA9IDAsXHJcbiAgICAgICAgICAgIGxvc3RHb2xkID0gMDtcclxuICAgICAgICAvLyBhOmI6YyAgYT10eXBlIDFcdThEMjdcdTVFMDEgMiBcdTY5MERcdTcyNjlcclxuXHJcbiAgICAgICAgVG9vbHMucGFyc2VTdHJpbmcoZGF0YS5pdGVtc0xvc3QpLm1hcCgoX2Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBfZCA9IFRvb2xzLnBhcnNlU3RyaW5nKF9kLCBcIjpcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9kKTtcclxuICAgICAgICAgICAgaWYgKF9kWzBdID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxvc3REaWFtb25kICs9IE51bWJlcihfZFsyXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBoYXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXRlbXNMb3N0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhcykge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNMb3N0LnB1c2goeyBpZDogX2RbMV0sIGFtb3VudDogTnVtYmVyKF9kWzJdKSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0xvc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtc0xvc3RbeF0uaWQgPT0gX2RbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc0xvc3RbeF0uYW1vdW50ICs9IE51bWJlcihfZFsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgVG9vbHMucGFyc2VTdHJpbmcoZGF0YS5pdGVtcykubWFwKChfZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIF9kID0gVG9vbHMucGFyc2VTdHJpbmcoX2QsIFwiOlwiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoYXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXRlbXNCYWNrLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhcykge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNCYWNrLnB1c2goeyBpZDogX2RbMV0sIGFtb3VudDogTnVtYmVyKF9kWzJdKSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0JhY2subGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtc0JhY2tbeF0uaWQgPT0gX2RbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc0JhY2tbeF0uYW1vdW50ICs9IE51bWJlcihfZFsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHlBZGQgPSAwLFxyXG4gICAgICAgICAgICBfeCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0xvc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlOiBMYXlhLkJveCA9IHRoaXMuaXRlbS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgaWYgKF94ID4gMiAmJiAheUFkZCkge1xyXG4gICAgICAgICAgICAgICAgeUFkZCsrO1xyXG4gICAgICAgICAgICAgICAgX3ggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeUFkZCAmJiBfeCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHlBZGQrKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbU5vZGUueCA9IDIzMCArIF94ICogMTkwO1xyXG4gICAgICAgICAgICBpdGVtTm9kZS55ID0gMTA1ICsgeUFkZCAqIDk1O1xyXG4gICAgICAgICAgICBfeCsrO1xyXG4gICAgICAgICAgICBsZXQgcGxhbnQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaXRlbXNMb3N0W3hdLmlkKTtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpY29uLnNraW4gPSBwbGFudC5pY29uO1xyXG4gICAgICAgICAgICBpY29uLnNjYWxlKDAuNywgMC43KTtcclxuICAgICAgICAgICAgaWNvbi5hbmNob3JYID0gMC41O1xyXG4gICAgICAgICAgICAoaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke2l0ZW1zTG9zdFt4XS5hbW91bnR9YDtcclxuICAgICAgICAgICAgcGxhbnQuZ2Fpbi5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5kaWFtb25kSWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGxvc3RHb2xkICs9IGQuY291bnQgKiBpdGVtc0xvc3RbeF0uYW1vdW50O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyUGFuZWwuYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHlBZGRCYWNrID0gMDtcclxuICAgICAgICBfeCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0JhY2subGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlOiBMYXlhLkltYWdlID0gdGhpcy5pdGVtLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoX3ggPiAxICYmICF5QWRkQmFjaykge1xyXG4gICAgICAgICAgICAgICAgeUFkZEJhY2srKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHlBZGRCYWNrICYmIF94ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgeUFkZEJhY2srKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbU5vZGUueCA9IDQyMCArIF94ICogMTkwO1xyXG4gICAgICAgICAgICBpdGVtTm9kZS55ID0gMjA4ICsgeUFkZCAqIDk1ICsgeUFkZEJhY2sgKiA5NTtcclxuICAgICAgICAgICAgX3grKztcclxuICAgICAgICAgICAgdGhpcy5jZW50ZXJQYW5lbC5hZGRDaGlsZChpdGVtTm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvc3RMYi55ID0gMTE0O1xyXG4gICAgICAgIHRoaXMuYmFja0xiLnkgPSAyMTggKyB5QWRkICogOTU7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MYi55ID0gMzAxICsgeUFkZCAqIDk1ICsgeUFkZEJhY2sgKiA5NTtcclxuICAgICAgICB0aGlzLmJvdHRvbUxiLnRleHQgPSBgXHU1MTcxXHU4QkExXHU2MzVGXHU1OTMxXHU0RTg2JHtsb3N0R29sZH1cdTkxRDFcdTVFMDFcdUZGMEMke2xvc3REaWFtb25kfVx1OTRCQlx1NzdGM2A7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5NYWlsRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZGVsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubWFpbERlbGV0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpZDogdGhpcy5tYWlsSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsKHRoaXMubWFpbElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk1haWxEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgTWFpbFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6bGlzdCwgdGlwczpcIlx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZW1wdHlfbGIsIHRpcHM6XCJcdTdBN0FcdTc2ODRcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGVtcHR5X2xiOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGxpc3REYXRhOiBNYWlsUmV0dXJuRGF0YVtdID0gW107XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVySXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQobGlzdDogTWFpbFJldHVybkRhdGFbXSA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RGF0YSA9IGxpc3Q7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTGlzdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmFycmF5ID0gdGhpcy5saXN0RGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiAoYS5yZWFkID8gMCA6IDEwMDAwMCArIGIuY3JlYXRlVGltZSkgLSAoYi5yZWFkID8gMCA6IDEwMDAwMCArIGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmNyZWF0ZVRpbWUgLSAoYi5yZWFkID8gMTAwMDAwMCA6IDApIC0gKGEuY3JlYXRlVGltZSAtIChhLnJlYWQgPyAxMDAwMDAwIDogMCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmVtcHR5X2xiLnZpc2libGUgPSAhdGhpcy5saXN0LmFycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckl0ZW0oY2VsbDogTGF5YS5JbWFnZSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxpc3REYXRhW2luZGV4XTtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcIlx1N0NGQlx1N0VERlx1OTBBRVx1NEVGNlwiO1xyXG4gICAgICAgIChcclxuICAgICAgICAgICAgY2VsbC5nZXRDaGlsZEJ5TmFtZShcImRlc2NcIikgYXMgTGF5YS5MYWJlbFxyXG4gICAgICAgICkudGV4dCA9IGAke2RhdGEubWVzc2FnZX1cdTZGNUNcdTUxNjVcdTgzRENcdTU3MzBcdTUwNzdcdTgzREMsXHU4OEFCXHU3MkQ3XHU3MkQ3XHU1M0QxXHU3M0IwXHU1RTc2XHU4RkZEXHU1MkEwXHU1NkRFXHU0RTg2fn5gO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7bmV3IERhdGUoXHJcbiAgICAgICAgICAgIGRhdGEuY3JlYXRlVGltZVxyXG4gICAgICAgICkudG9Mb2NhbGVTdHJpbmcoXCJ6aC1DTlwiLCB7IGhvdXIxMjogZmFsc2UgfSl9YDtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZWFkX2ljb25cIikgYXMgTGF5YS5JbWFnZSkudmlzaWJsZSA9ICFkYXRhLnJlYWQ7XHJcblxyXG4gICAgICAgIGNlbGwuZGF0YVNvdXJjZSA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUuaW5kZXhPZihcIml0ZW1cIikgPiAtMSkge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm1haWxSZWFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl0ucmVhZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTWFpbERlc2NWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6IChtYWlsSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0RGF0YS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0RGF0YVt4XS5pZCA9PSBtYWlsSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLk1haWxWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiY29uc3QgZW51bSBFcnJvckNvZGUge1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NEUzQVx1N0E3QSAqL1xyXG4gICAgXzIwMDEgPSAyMDAxLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvckNvZGU7XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBFcnJvckNvZGUgZnJvbSBcInNyYy9jb21tb24vRXJyb3JDb2RlXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcInNyYy9jb21tb24vVG9vbHNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSwgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGFudERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBNYWluVmlldywgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCJzcmMvdmlldy9NYWluVmlld1wiO1xyXG5pbXBvcnQgeyBTaG9wVmlld0RhdGEgfSBmcm9tIFwic3JjL3ZpZXcvU2hvcFZpZXdcIjtcclxuXHJcbi8vICBGaWVsZENvbXBvbmVudCBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuLyoqXHJcbiAqIFx1NzUzMFx1NTczMFx1N0VDNFx1NEVGNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OWljb24gKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgaWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU4MjgyXHU3MEI5ICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGZpZWxkTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU2NzA5XHU2OTBEXHU3MjY5XHU2NUY2XHU3Njg0XHU5NjM0XHU1RjcxICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHNoYWRvdzogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmllbGRFbXB0eVJlcywgdGlwczpcIlx1ODlFM1x1OTUwMVx1NTQwRVx1NTcxRlx1NTczMFx1N0VCOVx1NzQwNlwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGZpZWxkRW1wdHlSZXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogXHU3QjQ5XHU3RUE3XHU1NkZFXHU3MjQ3ICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGx2Tm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1MDEyXHU4QkExXHU2NUY2XHU1QkI5XHU1NjY4Ki9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgdGltZUJveDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogXHU1MDEyXHU4QkExXHU2NUY2bGFiZWwgKi9cclxuICAgIHByaXZhdGUgY291bnREb3duTGI6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOGljb25cdTg4QzVcdTk5NzAgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU4OEM1XHU5OTcwICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHVwQW5pOiBMYXlhLkFuaW1hdGlvbiA9IG51bGw7XHJcbiAgICAvKiogXHU1MUNGXHU2NUY2XHU5NUY0XHU2M0QwXHU3OTNBICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHJlZHVjZVRpbWU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1bmxvY2tJY29uLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwaWNvblx1NTczMFx1NTc0MFwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIHVubG9ja0ljb246IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmllbGRJZCwgdGlwczpcIlx1NTcxRlx1NTczMGlkXCIsIHR5cGU6TnVtYmVyLH0qL1xyXG4gICAgZmllbGRJZDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1NkQ2RVx1NTJBOFx1NTJBOFx1NzUzQiAqL1xyXG4gICAgcHJpdmF0ZSB0b3BTdGF0ZUljb25Ud2VlbjogTGF5YS5UaW1lTGluZTtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlcdTUyQThcdTc1M0IgKi9cclxuICAgIHByaXZhdGUgcGxhbnRJY29uVHdlZW46IExheWEuVGltZUxpbmU7XHJcblxyXG4gICAgLyoqIFx1NUVGQVx1N0I1MVx1NEUyRCAqL1xyXG4gICAgYnVpbGRJbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTU3MjhcdTU5MTZcdTk3NjIgKi9cclxuICAgIGlzT3V0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTUzRUZcdTUwNzcgKi9cclxuICAgIGNhblN0ZWFsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU4OEFCXHU1MDc3XHU0RUJBXHU3Njg0dWlkICovXHJcbiAgICBzdGVhbFVpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZGF0YTogTGFuZE9iajtcclxuXHJcbiAgICBtYWluVmlld0NvbTogTWFpblZpZXc7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBsYW5kTGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj47XHJcbiAgICAvKiogXHU2MjEwXHU3MTlGXHU3Njg0XHU2NUY2XHU5NUY0ICovXHJcbiAgICBwcml2YXRlIG1hdHVyZVRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuZmllbGROb2RlID0gPExheWEuSW1hZ2U+dGhpcy5vd25lcjtcclxuICAgICAgICB0aGlzLmNvdW50RG93bkxiID0gdGhpcy50aW1lQm94LmdldENoaWxkQnlOYW1lKFwiY291bnREb3duTGJcIikgYXMgYW55O1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLnNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cEFuaS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwQW5pLm9uKExheWEuRXZlbnQuQ09NUExFVEUsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cEFuaS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfZmllbGQpXHJcbiAgICB1cGRhdGVEYXRhKGRhdGE/OiB7IGxpc3Q6IE1hcDxudW1iZXIsIExhbmRPYmo+IH0pIHtcclxuICAgICAgICBpZiAoZGF0YT8ubGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0ID0gZGF0YS5saXN0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QgPSBMYW5kU2VydmljZS5saXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi55ID0gMTY0O1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROb2RlLnNraW4gPSB0aGlzLmZpZWxkRW1wdHlSZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24oQm9vbGVhbih0aGlzLmRhdGEucHJvZHVjdElkKSk7XHJcbiAgICAgICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkICYmIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCAqIDEwMDAgKyBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgLy9cdTYyMTBcdTk1N0ZcdTRFMkRcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YS5wcm9kdWN0SWQpLmdyb3dpbmdJY29uO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVJY29uU2tpbigzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZE5vZGUuc2tpbiA9IGBtYWluX3NjZW5lL2ltZ193YXN0ZWxhbmQucG5nYDtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNraW4gPSB0aGlzLnVubG9ja0ljb247XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi55ID0gMTEzO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4uY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFaWNvblx1NzY4NFx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dJY29uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmljb24udmlzaWJsZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTcyQjZcdTYwMDFpY29uXHU3RUI5XHU3NDA2XHJcbiAgICAgKiBAcGFyYW0gc2tpblR5cGUgMSBcdTZENDdcdTZDMzRcdTUyQTBcdTkwMUZcdTcyQjZcdTYwMDEgMiBcdTVFRkFcdTdCNTFcdTcyQjZcdTYwMDEgMyBcdTYyMTBcdTcxOUZcdTcyQjZcdTYwMDFcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGVJY29uU2tpbihza2luVHlwZTogMSB8IDIgfCAzKSB7XHJcbiAgICAgICAgc3dpdGNoIChza2luVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19zcGVlZFVwLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2xhbmRVcGRhdGVCdG4yLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2hhcnZlc3QucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk4NzZcdTkwRThpY29uXHU1MkE4XHU3NTNCXHJcbiAgICAgKi9cclxuICAgIHRvcFN0YXRlSWNvbkFuaShwbGF5OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24ueSA9IC0xMDc7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRvcFN0YXRlSWNvblR3ZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4gPSBMYXlhLlRpbWVMaW5lLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24sXHJcbiAgICAgICAgICAgICAgICB7IHk6IHRoaXMudG9wU3RhdGVJY29uLnkgLSA1MCB9LFxyXG4gICAgICAgICAgICAgICAgODAwLFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICApLnRvKHRoaXMudG9wU3RhdGVJY29uLCB7IHk6IHRoaXMudG9wU3RhdGVJY29uLnkgfSwgODAwKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RlYWxVaWQgJiYgIXRoaXMuZGF0YT8uY2FuU3RlYWwpIHtcclxuICAgICAgICAgICAgcGxheSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gcGxheTtcclxuICAgICAgICBpZiAocGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuLnJlc3VtZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTY1RjZcdTk1RjRcdTVCQjlcdTU2NjhcdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93VGltZUJveChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU5NjM0XHU1RjcxXHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1NoYWRvd0ljb24oc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmFjdGl2ZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY5MERcdTcyNjlcdTUyQThcdTc1M0JcdTY0QURcdTY1M0VcclxuICAgICAqIEBwYXJhbSBwbGF5XHJcbiAgICAgKi9cclxuICAgIHBsYW50SWNvbkFuaShwbGF5OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYW50SWNvblR3ZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4gPSBMYXlhLlRpbWVMaW5lLnRvKHRoaXMuaWNvbiwgeyBza2V3WDogMyB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMuaWNvbiwgeyBza2V3WDogLTMgfSwgMjAwMClcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLmljb24sIHsgc2tld1g6IDAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaWNvbi5za2V3WCA9IDA7XHJcblxyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoTWF0aC5yYW5kb20oKSAqIDEwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucGxhbnRJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5wbGFudEljb25Ud2Vlbi5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNvdW50RG93bigpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93bkxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPSBNYXRoLmNlaWwoKHRoaXMubWF0dXJlVGltZSAtIERhdGUubm93KCkpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0IDwgMCkgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duTGIudGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NjIxMFx1NzE5RiBcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNraW4gPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQodGhpcy5kYXRhPy5wcm9kdWN0SWQpPy5tYXR1cmVJY29uO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnVpbGRJbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVJY29uU2tpbigzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU3QjQ5XHU3RUE3XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlTGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5sdk5vZGUuc2tpbiA9IGBtYWluX3NjZW5lL2ltZ19sZXZlbCR7dGhpcy5kYXRhLmxldmVsfS5wbmdgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MUNGXHU2NUY2XHU5NUY0XHU4ODY4XHU3M0IwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVkdWNlVGltZUFuaTogTGF5YS5UaW1lTGluZTtcclxuICAgIC8qKlxyXG4gICAgICogXHU1MkEwXHU5MDFGXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLmxhbmRfc3BlZWRfdXApXHJcbiAgICBwcml2YXRlIHNwZWVkVXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YT8ubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0IC09IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJhbGxfc3BlZWRfdXBfdGltZVwiKVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ICogMTAwMCArIERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDExKTtcclxuXHJcbiAgICAgICAgICAgIC8vXHU1MUNGXHU2NUY2XHU5NUY0XHU2M0QwXHU3OTNBXHJcbiAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLmFscGhhID0gMDtcclxuICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLnkgPSAtMzk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWR1Y2VUaW1lQW5pKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lQW5pID0gTGF5YS5UaW1lTGluZS50byhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgeyB5OiAtNjksIGFscGhhOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMzAwXHJcbiAgICAgICAgICAgICAgICApLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IC0xMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZUFuaS5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU3QTdBXHU1NzFGXHU1NzMwXHJcbiAgICAgKi9cclxuICAgIGNsZWFyRmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wcm9kdWN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaWNvbi5za2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNsaWNrKCkge1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVhbEZvb2QodGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICAvL1x1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1NEU4Qlx1NEVGNlxyXG4gICAgICAgICAgICBpZiAodGhpcy5idWlsZEluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKFRhYmxlQW5hbHl6ZS50YWJsZShcImxhbmRMZXZlbFwiKS5nZXQodGhpcy5kYXRhLmxldmVsICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHRoaXMuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEubGV2ZWwrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy50dWRpc2hlbmdqaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cEFuaS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwQW5pLnBsYXkoMCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTZFRTFcdTdFQTdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcdTVERjJcdTZFRTFcdTdFQTdgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NTJBMFx1OTAxRlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU3BlZWRVcFZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlQWxsU3RhdGVJY29uKHRoaXMuZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NjUzNlx1ODNCN1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhbnRBbW91bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkID0gdGhpcy5kYXRhLnByb2R1Y3RJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZEdhdGhlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZ2F0aGVyXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvbGQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2ZXJ0aXNlVGltZXM6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRBbW91bnQgPSBkLmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmFkZChwcm9kdWN0SWQsIGQuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnNob3VjYWkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmQgPSBkLnJld2FyZERpYW1vbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHU2NTM2XHU4M0I3XHU3Njg0XHU2OTBEXHU3MjY5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW50T2JqID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHByb2R1Y3RJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3Q6IGFueVtdID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogcGxhbnRPYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHBsYW50QW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1x1ODNCN1x1NUY5N1x1NzY4NFx1OTRCQlx1NzdGM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXdhcmREaWFtb25kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdHYW1lLmRpYW1vbmRJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmREaWFtb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0RmxvYXRSZXdhcmRPYmpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGxhbnRPYmouZ2Fpbi5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3dpdGNoIChkLm9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjYXNlIENvbmZpZ0dhbWUuZGlhbW9uZElkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgVXNlckluZm8uZGlhbW9uZCArPSBkLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgQ29uZmlnR2FtZS5nb2xkSWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBVc2VySW5mby5nb2xkICs9IGQuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NzlDRFx1ODNEQ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHU4OUUzXHU5NTAxXHU1NzFGXHU1NzMwXHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5BZGRMYW5kVmlldywge1xyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5maWVsZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXR1cmVUaW1lTGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGFuZFNlcnZpY2UuYWRkTGFuZCh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS51cGRhdGVIaXRMYW5kQWRkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzb3coKSB7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7XHJcbiAgICAgICAgICAgIHBhcm06IDxTaG9wVmlld0RhdGE+e1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7IGxhbmRJZDogdGhpcy5maWVsZElkIH0sXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoZDogUGxhbnREYXRhQmFzZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCkucHJvZHVjdElkID0gZC5iYXNlLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCkubWF0dXJlVGltZUxlZnQgPSBkLmJhc2UubWF0dXJlX3RpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gZC5iYXNlLm1hdHVyZV90aW1lICogMTAwMCArIERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy56aG9uZ3poaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS51cGRhdGVBbGxTdGF0ZUljb24odGhpcy5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUwNzdcdTgzRENcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBzdGVhbEZvb2QoZGF0YTogTGFuZE9iaikge1xyXG4gICAgICAgIGlmICghZGF0YS5wcm9kdWN0SWQgfHwgZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2FuU3RlYWwgfHwgKHRoaXMuc3RlYWxVaWQgJiYgIXRoaXMuZGF0YT8uY2FuU3RlYWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1REYyXHU3RUNGXHU0RTBEXHU1M0VGXHU1MDc3XCIpO1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1N0VEOVx1NjIxMVx1NzU1OVx1NzBCOVx1NTQyN1wiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmdvdWppYW9zaGVuZyk7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIC8vXHU1MDc3XHU4M0RDXHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFN0ZWFsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJsYW5kU3RlYWxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdWlkOiB0aGlzLnN0ZWFsVWlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW50SWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICB2aXRhbGl0eTogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qKiBcdTk4OURcdTU5MTZcdTU5NTZcdTUyQjEgKi9cclxuICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8udml0YWxpdHkgPSBkLnZpdGFsaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuU3RlYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UuYWRkKHRoaXMuZGF0YS5wcm9kdWN0SWQsIGQuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnNob3VjYWkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1x1NjUzNlx1ODNCN1x1NzY4NFx1NjkwRFx1NzI2OVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJld2FyZExpc3Q6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQucGxhbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoZC5wbGFudElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBkLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5ODlEXHVGRjBDXHU4OEFCXHU3MkQ3XHU1NEFDXHU0RTg2fn5+XHU2Q0ExXHU1MDc3XHU3NzQwflwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU5ODlEXHU1OTE2XHU3Njg0XHU5NEJCXHU3N0YzXHU1OTU2XHU1MkIxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQucmV3YXJkRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5kaWFtb25kSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGQucmV3YXJkRGlhbW9uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJld2FyZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKChjb2RlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IEVycm9yQ29kZS5fMjAwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIExheWEuVHdlZW4uY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbj8uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlLCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8qKlxyXG4gKiBcdTk4REVcdTkxRDFcdTVFMDFcdTY1NzBcdTkxQ0ZcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0RmxvYXRSZXdhcmRPYmoge1xyXG4gICAgLyoqIFx1OEQ3N1x1NzBCOVx1NTNDMlx1ODAwM1x1ODI4Mlx1NzBCOSBcdTlFRDhcdThCQTRcdTRGMUFcdTYyOEFcdTY1NzBcdTkxQ0ZcdTc2ODRcdTRFMUNcdTg5N0ZcdTUyQTBcdTUyMzBcdThGRDlcdTkxQ0NcdUZGMENcdTYyNDBcdTRFRTVcdTRFMERcdTg5ODFcdTZERkJIQm94XHU2MjE2XHU2NjJGVkJveCAqL1xyXG4gICAgbm9kZTogTGF5YS5Cb3g7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBsaXN0OiB7XHJcbiAgICAgICAgLyoqIFx1ODlFM1x1Njc5MFx1NzY4NFx1OEQ0NFx1NkU5MFx1NjU3MFx1NjM2RSBcdTVGQzVcdTk4N0JcdTg5ODFcdTY3MDlpY29uICovXHJcbiAgICAgICAgb2JqOiBhbnk7XHJcbiAgICAgICAgLyoqIFx1NjU3MFx1OTFDRiAqL1xyXG4gICAgICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICAgICAgLyoqIFx1N0VDOFx1NzBCOVx1NEY0RFx1N0Y2RSAxIFx1OTFEMVx1NUUwMSAyIFx1OTRCQlx1NzdGMyAzIFx1NEVEM1x1NUU5MyAqL1xyXG4gICAgICAgIHBvc1R5cGU6IDEgfCAyIHwgMztcclxuICAgIH1bXTtcclxuICAgIG5vdEZseT86IGJvb2xlYW47XHJcbiAgICAvKiogXHU1MkE4XHU3NTNCXHU2NEFEXHU2NTNFXHU3RUQzXHU2NzVGXHU1NkRFXHU4QzAzICovXHJcbiAgICBjYWxsQmFjaz86IHsgKCk6IHZvaWQgfTtcclxufVxyXG5cclxuLy8gIE1haW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkTGFuZExheWVyLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRMYW5kTGF5ZXI6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZE5vZGUsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmROb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb2xkTm9kZSwgdGlwczpcIlx1OTFEMVx1NUUwMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29sZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmF2YXRhck5vZGUsIHRpcHM6XCJcdTU5MzRcdTUwQ0ZcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGF2YXRhck5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRCb3gsIHRpcHM6XCJcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxhbmRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjZW50ZXJCb3gsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTUzM0FcdTU3REZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm9yZGVyQm94LCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJvdHRvbUJveCwgdGlwczpcIlx1NUU5NVx1OTBFOFx1NjMwOVx1OTRBRVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYm90dG9tQm94OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRVcExheWVyLCB0aXBzOlwiXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU3QTk3XHU1M0UzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsYW5kVXBMYXllcjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRvcExheWVyT25TdGFnZSwgdGlwczpcIlx1NTcyOFx1NEUzQlx1NTczQVx1NjY2Rlx1NEUwQVx1OTc2Mlx1NzY4NFx1NEUwMFx1NEUyQVx1NjcwMFx1NEUwQVx1NUM0Mlx1NzY4NFx1N0E3QVx1NUM0MlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdG9wTGF5ZXJPblN0YWdlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BHb2xkSWNvbiwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1OTFEMVx1NUUwMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcEdvbGRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BEaWFtb25kSWNvbiwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1OTRCQlx1NzdGM2ljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcERpYW1vbmRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp3YXJlaG91c2VCdG4sIHRpcHM6XCJcdTRFRDNcdTVFOTNcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHdhcmVob3VzZUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bW9uZXlMYiwgdGlwczpcIlx1N0VBMlx1NTMwNVx1NjU4N1x1Njg2M1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbW9uZXlMYjogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdUZGMENcdTk4REVcdTcyNjlcdTU0QzFcdTc2RjhcdTUxNzNcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnZXRSZXdhcmRQcmVmYWIsIHRpcHM6XCJcdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdTk4ODRcdThCQkVcIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgZ2V0UmV3YXJkUHJlZmFiOiBMYXlhLlByZWZhYiA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmxvYXRSZXdhcmRJY29uLCB0aXBzOlwiXHU1OTU2XHU1MkIxXHU5OERFXHU1MkE4XHU3NTNCaWNvblwiLCB0eXBlOlByZWZhYn0qL1xyXG4gICAgcHJpdmF0ZSBmbG9hdFJld2FyZEljb246IExheWEuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6Z29Ib21lQnRuLCB0aXBzOlwiXHU4RkQ0XHU1NkRFXHU1QkI2XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb0hvbWVCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFueURvb3IsIHRpcHM6XCJcdTUzQkJcdThGNkNcdThGNkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFueURvb3I6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5Qm94LCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eUJveDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlCdXlCdG4sIHRpcHM6XCJcdTRGNTNcdTUyOUJcdThEMkRcdTRFNzBcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5QnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NUJBMFx1NzI2OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldEJveCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0Qm94OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTRFRkJcdTUyQTFcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0YXNrQm94LCB0aXBzOlwiXHU0RUZCXHU1MkExXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0YXNrQm94OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXAxLCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwMTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXAyLCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwMjogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXAzLCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwMzogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA0LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA1LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA2LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNjogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA3LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNzogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA4LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwODogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA5LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwOTogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTdFQzRcdTRFRjYgXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGxhbmRMaXN0OiBGaWVsZENvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgLyoqXHU2NjJGXHU1NDI2XHU1NzI4XHU1OTE2XHU5NzYyICovXHJcbiAgICBwcml2YXRlIGlzT3V0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTc5QkJcdTVGMDBcdTVCQjZcdTc2ODRcdTY1RjZcdTk1RjQgKi9cclxuICAgIHByaXZhdGUgb3V0ZXJUaW1lOiBudW1iZXI7XHJcbiAgICAvKipcdTUzQkJcdTU5N0RcdTUzQ0IgXHU1QkI2XHU1MDEyXHU4QkExXHU2NUY2ICovXHJcbiAgICBwcml2YXRlIG91dENvdW50RG93bk51bWJlciA9IDYwO1xyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcInJlcy9sb2FkaW5nQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ193b29kdGl0bGUucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZUhvdXNlQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZWJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfc2hlbGYucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfbGFuZEJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfaG91c2V0b3AucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2ltZ19ob21lcGFnZUJnMy5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX2hvbWVwYWdlQmcyLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyBcInJlcy9pbWdfaG9tZXBhZ2VCZzEucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19mYXJtbGFuZExvZ28ucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BsYW50X2ljb24ucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BldF9mZWVkLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9tYWluX3NjZW5lLnBuZ1wiLFxyXG4gICAgICAgIF0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5lbmRzV2l0aChcInBuZ1wiKSkgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFzaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgb2sgPSBmYWxzZSxcclxuICAgICAgICAgICAgc3RlcCA9IDA7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmd1aWRlRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgVXNlckluZm8uZ3VpZGVEYXRhLnNwbGl0KFwiXCIpLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkID09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHN0ZXAgPj0gOSkge1xyXG4gICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghVXNlckluZm8uZ3VpZGVEYXRhLmxlbmd0aCB8fCAhb2spIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkd1aWRlVmlldywge1xyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVMaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcDYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcDksXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnRvcExheWVyT25TdGFnZSk7XHJcbiAgICAgICAgKHRoaXMub3JkZXJCb3guZ2V0Q2hpbGRCeU5hbWUoXCJmcmllbmRfbmFtZVwiKSBhcyBMYXlhLkxhYmVsKS52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52aXRhbGl0eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nb0hvbWVCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGFuZEJveC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QucHVzaCh0aGlzLmxhbmRCb3guZ2V0Q2hpbGRBdCh4KS5nZXRDb21wb25lbnQoRmllbGRDb21wb25lbnQpKTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5tYWluVmlld0NvbSA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhbmRMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuZmllbGRJZCAtIGIuZmllbGRJZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfZmllbGQpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhpdExhbmRBZGQoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGxTdGF0ZUljb24oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5maWd1cmVBbmlFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlndXJlQW5pRXZlbnQoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgZkFuaSA9IHRoaXMuZmlndXJlQm94QW5pLmdldENoaWxkQnlOYW1lKFwiZmlndXJlX2FuaVwiKSBhcyBMYXlhLkFuaW1hdGlvbixcclxuICAgICAgICAvLyAgICAgZkFuaTMgPSB0aGlzLmZpZ3VyZUJveEFuaS5nZXRDaGlsZEJ5TmFtZShcImZpZ3VyZTNfYW5pXCIpIGFzIExheWEuQW5pbWF0aW9uLFxyXG4gICAgICAgIC8vICAgICBmQW5pNCA9IHRoaXMuZmlndXJlQm94QW5pLmdldENoaWxkQnlOYW1lKFwiZmlndXJlNF9hbmlcIikgYXMgTGF5YS5BbmltYXRpb24sXHJcbiAgICAgICAgLy8gICAgIGZBbmkxID0gdGhpcy5maWd1cmVCb3gyQW5pLmdldENoaWxkQnlOYW1lKFwiZmlndXJlMV9hbmlcIikgYXMgTGF5YS5BbmltYXRpb24sXHJcbiAgICAgICAgLy8gICAgIGZBbmkyID0gdGhpcy5maWd1cmVCb3gyQW5pLmdldENoaWxkQnlOYW1lKFwiZmlndXJlMl9hbmlcIikgYXMgTGF5YS5BbmltYXRpb24sXHJcbiAgICAgICAgLy8gICAgIGZBbmk1ID0gdGhpcy5maWd1cmVCb3gyQW5pLmdldENoaWxkQnlOYW1lKFwiZmlndXJlNV9hbmlcIikgYXMgTGF5YS5BbmltYXRpb247XHJcbiAgICAgICAgLy8gZkFuaTMuYWxwaGEgPSAwO1xyXG4gICAgICAgIC8vIGZBbmk0LmFscGhhID0gMDtcclxuICAgICAgICAvLyBmQW5pMS5hbHBoYSA9IDA7XHJcbiAgICAgICAgLy8gZkFuaTIuYWxwaGEgPSAwO1xyXG4gICAgICAgIC8vIGZBbmk1LmFscGhhID0gMDtcclxuICAgICAgICAvLyBmQW5pLmFscGhhID0gMDtcclxuICAgICAgICAvLyBMYXlhLlR3ZWVuLnRvKGZBbmksIHsgYWxwaGE6IDEgfSwgNjAwKTtcclxuICAgICAgICAvLyBMYXlhLlR3ZWVuLnRvKGZBbmksIHsgeDogLTYwMCwgeTogMzI4IH0sIDEwMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NzkzQVx1NjYzRVx1NzkzQVx1NjI2OVx1NUVGQWljb25cclxuICAgICAqL1xyXG4gICAgdXBkYXRlSGl0TGFuZEFkZCgpIHtcclxuICAgICAgICBsZXQgZ3VpZExhbmQ6IEZpZWxkQ29tcG9uZW50O1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhbmRMaXN0W3hdLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghZ3VpZExhbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBndWlkTGFuZCA9IHRoaXMubGFuZExpc3RbeF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUxNjhcdTRGNTNcdTUyQTBcdTkwMUZpY29uIFx1NTQ4QyBcdTY1MzZcdTgzRENpY29uIFx1NjY4Mlx1NjVGNlx1NjI4QVx1NEUyNFx1NEUyQVx1NjVCOVx1NkNENVx1NTE5OVx1NTcyOFx1NEUwMFx1OEQ3N1x1NEU4NlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVBbGxTdGF0ZUljb24obGFuZElkPzogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxhbmRMaXN0W3hdLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pZCA9PSBsYW5kSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2V0U3RhdGVJY29uU2tpbigxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWxhbmRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnByb2R1Y3RJZCAmJiBkYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2V0U3RhdGVJY29uU2tpbigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5sYW5kTGlzdFt4XS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHJvZHVjdElkICYmICFkYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBDb3JlLm9ic2VydmFibGVQcm9wZXJ0eVxyXG4gICAgICAgICAgICAud2F0Y2goVXNlckluZm8sIHRoaXMpXHJcbiAgICAgICAgICAgIC5rZXkoXCJkaWFtb25kXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYW1vbmROb2RlLnZhbHVlID0gZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubW9uZXlMYi52YWx1ZSA9IChlICogVXNlckluZm8ucHJvcG9ydGlvbikudG9GaXhlZCgyKSArIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAvL1x1NEUwRFx1NTZEQlx1ODIwRFx1NEU5NFx1NTE2NVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25leUxiLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAoZSAqIFVzZXJJbmZvLnByb3BvcnRpb24pLnRvU3RyaW5nKCkubWF0Y2goL15cXGQrKD86XFwuXFxkezAsMn0pPy8pICsgXCJcIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImdvbGRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29sZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiYXZhdGFyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkgdGhpcy5hdmF0YXJOb2RlLnNraW4gPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwid2FyZVBldElkXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnBldEJveC5nZXRDaGlsZEJ5TmFtZShcImRvZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmdldChlKS5pY29uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBldEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJwZXRWaXRhbGl0eVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIC8vXHU2NkY0XHU2NUIwXHU1QkEwXHU3MjY5XHU0RjUzXHU1MjlCXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXRCb3gudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXIgPSB0aGlzLnBldEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidml0YWxpdHlfYmFyXCIpIGFzIExheWEuSW1hZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IGUgLyBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KFVzZXJJbmZvLndhcmVQZXRJZCkudml0YWxpdHlfbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2FsZSA+IDEpIHNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyLndpZHRoID0gMTMwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJkaWdlc3RDb3VudERvd25cIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcywgdGhpcy5kaWdlc3RDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgLy9cdTVCQTBcdTcyNjlcdTk3MDBcdTg5ODFcdTZEODhcdTgwMTdcdTk4REZcdTcyNjlcdTUwMTJcdThCQTFcdTY1RjZcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBldEJveC52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKGUgKiAxMDAwLCB0aGlzLCB0aGlzLmRpZ2VzdENvdW50RG93bik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJ2aXRhbGl0eVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZpdGFsaXR5ID0gZSAvIENvbmZpZ0dhbWUudXNlclZpdGFsaXR5TGltaXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodml0YWxpdHkgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpdGFsaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5tb3VzZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5ncmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLm1vdXNlRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXRhbGl0eUJveC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSlcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy52aXRhbGl0eUJveC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9IDI2OCAqIHZpdGFsaXR5O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3JkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUJBMFx1NzI2OVx1N0IxMVx1NkQ4OFx1NTMxNlx1NUI5QVx1NjVGNlx1NTY2OFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRpZ2VzdENvdW50RG93bigpIHtcclxuICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHBldCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5nZXQoVXNlckluZm8ud2FyZVBldElkKTtcclxuICAgICAgICBpZiAoVXNlckluZm8ucGV0Vml0YWxpdHkgLSBwZXQudml0YWxpdHlfY29uc3VtZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSAtPSBwZXQudml0YWxpdHlfY29uc3VtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gQ29uZmlnR2FtZS5wZXREaWdlc3RJbnRlcnZhbFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaWduSW5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibWFpbFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoZWFkXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2V0dGluZ1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YXJlaG91c2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2ZlZWRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAyIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvZ19ob3VzZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDEgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG9nXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkaWFtb25kX2JveFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwibW9uZXlfcmVkX2JveFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDMgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib3JkZXJfYm94XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZnJpZW5kc1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuRnJpZW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxhbmRcIjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZExldmVsVXBcIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc091dGVyKSB0aGlzLnN3aXRjaExhbmRMZXZlbFVwKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucGxheUdldFJld2FyZEFuaSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbm9kZTogdGhpcy50ZXN0QnRuIGFzIGFueSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksIGNvdW50OiAxMDAsIHBvc1R5cGU6IDEgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeyBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldCgxMDAxKSwgY291bnQ6IDEwMCwgcG9zVHlwZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB7IG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KDEwMDEpLCBjb3VudDogMTAwLCBwb3NUeXBlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgXSxcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV91cFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hMYW5kTGV2ZWxVcChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFueV9kb29yXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9OZWlnaGJvcigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19ob21lXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvSG9tZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRfdml0YWxpdHlcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5Vml0YWxpdHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU3OUNEXHU4M0RDICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGFudF9zb3cpXHJcbiAgICBwcml2YXRlIHNvdygpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sYW5kTGlzdFt4XT8uZGF0YT8ucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNvdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTkwQUVcdTRFRjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvcGVuTWFpbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubWFpbExpc3QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkOiBNYWlsUmV0dXJuRGF0YVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTWFpbFZpZXcsIHsgcGFybTogZCB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1OTdEXHU1M0NCIFx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5vcGVuX2ZyaWVuZClcclxuICAgIHByaXZhdGUgb3BlbkZyaWVuZCh0eXBlID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRMaXN0LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogRnJpZW5kTGlzdERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNWaWV3LCB7IHBhcm06IHsgZnJpZW5kRGF0YTogZCwgdHlwZTogdHlwZSB9IH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4RDJEXHU0RTcwXHU0RjUzXHU1MjlCXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYnV5Vml0YWxpdHkoKSB7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkJ1eVZpdGFsaXR5Vmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1OEJBMlx1NTM1NVx1OTYxRlx1NTIxNyAqL1xyXG4gICAgcHJpdmF0ZSBvcmRlclF1ZXVlSW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1OEJBMlx1NTM1NVxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfT3JkZXIpXHJcbiAgICBwcml2YXRlIHVwZGF0ZU9yZGVyKCkge1xyXG4gICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMub3JkZXJRdWV1ZUluZykge1xyXG4gICAgICAgICAgICBsZXQgYm94ID0gdGhpcy5vcmRlckJveC5nZXRDaGlsZEJ5TmFtZShcIm9yZGVyX2JveFwiKSxcclxuICAgICAgICAgICAgICAgIGQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJvcmRlclwiKS5nZXQoVXNlckluZm8ub3JkZXJMZXZlbCArIDEpLFxyXG4gICAgICAgICAgICAgICAgcmV3YXJkOiBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICAgICAgICAgICAgICByZXdhcmRDb3VudDogbnVtYmVyID0gMCxcclxuICAgICAgICAgICAgICAgIGN1ckNvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgIG1heENvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgaWYgKCFkKSByZXR1cm4gY29uc29sZS5sb2coXCJcdTdCNDlcdTdFQTdcdTVERjJcdTVCOENcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGJveC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fXCIgKyB4KSBhcyBMYXlhLkJveDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZC5jb25kaXRpb25beF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJDb3VudCA9IFdhcmVob3VzZVNlcnZpY2UuZ2V0T25lKGQuY29uZGl0aW9uW3hdLnBsYW50LmlkKT8uY291bnQgfHwgMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXhDb3VudCA9IGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyQ291bnQgPj0gbWF4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZC5jb25kaXRpb25beF0ucGxhbnQuaWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7Y3VyQ291bnR9LyR7bWF4Q291bnR9YDtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDg3ICogKGN1ckNvdW50IC8gbWF4Q291bnQgPiAxID8gMSA6IGN1ckNvdW50IC8gbWF4Q291bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkLmNvbmRpdGlvblt4XS5wbGFudC5nYWluLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUub2JqLmlkID09PSBDb25maWdHYW1lLmdvbGRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmQgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKz0gZS5jb3VudCAqIG1heENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuQm94ID0gYm94LmdldENoaWxkQnlOYW1lKFwiYnRuX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuICAgICAgICAgICAgICAgIChidG5Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSByZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICAoYnRuQm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBgJHtcclxuICAgICAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgICAgICB9YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVfdGl0bGVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTVCOENcdTYyMTAke1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCArIDFcclxuICAgICAgICAgICAgfVx1N0VBN1x1OEJBMlx1NTM1NWA7XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT0gZC5jb25kaXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb25kaXRpb24gPSBkLmNvbmRpdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJRdWV1ZUluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAub3JkZXJSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVySWQ6IFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb24uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5yZWR1Y2VBbW91bnQoZS5wbGFudC5pZCwgZS5jb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyUXVldWVJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCsrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5R2V0UmV3YXJkQW5pKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IGJveC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ib3hcIikgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5nb2xkSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkQ291bnQgKyBNYXRoLnJvdW5kKHJld2FyZENvdW50ICogZC5jb21taXNzaW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyUXVldWVJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIwN1x1NjM2Mlx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3dpdGNoTGFuZExldmVsVXAoc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCBiZyA9IHRoaXMubGFuZFVwTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgIGJnLmFscGhhID0gMDtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhiZywgeyBhbHBoYTogMC43NSB9LCAxNTApO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmdldENoaWxkQnlOYW1lKFwibGFuZF9vdXRlclwiKS5hZGRDaGlsZCh0aGlzLmxhbmRCb3gpO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KGUuZGF0YS5sZXZlbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dUaW1lQm94KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGUuYnVpbGRJbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgYmcsXHJcbiAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlckJveC5hZGRDaGlsZCh0aGlzLmxhbmRCb3gpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dUaW1lQm94KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5jbGVhckZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5idWlsZEluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKGUuZGF0YS5tYXR1cmVUaW1lTGVmdCA/IDEgOiAzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZS50b3BTdGF0ZUljb25BbmkoQm9vbGVhbihlLmRhdGEucHJvZHVjdElkKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbigxKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjRBRFx1NjUzRVx1ODNCN1x1NTNENlx1NTk1Nlx1NTJCMVx1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQpXHJcbiAgICBwcml2YXRlIHBsYXlHZXRSZXdhcmRBbmkob2JqOiBHZXRGbG9hdFJld2FyZE9iaikge1xyXG4gICAgICAgIExheWEudGltZXIub25jZSgyMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYmouY2FsbEJhY2spIG9iai5jYWxsQmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvYmoubGlzdC5mb3JFYWNoKChkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBMYXlhLkJveCA9IExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oXHJcbiAgICAgICAgICAgICAgICBcImZsb2F0UmV3YXJkQm94XCIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJld2FyZFByZWZhYi5jcmVhdGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJld2FyZFByZWZhYlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gbm9kZS55ID0gb2JqLm5vZGUuZ2V0X2hlaWdodCgpICogb2JqLm5vZGUuYW5jaG9yWSAtIGkgKiA2MDtcclxuICAgICAgICAgICAgLy8gbm9kZS54ID0gb2JqLm5vZGUuZ2V0X3dpZHRoKCkgKiBvYmoubm9kZS5hbmNob3JYO1xyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGljb24uc2tpbiA9IGQub2JqPy5pY29uIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDgwIC8gaWNvbi53aWR0aDtcclxuICAgICAgICAgICAgaWNvbi5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICBub2RlLmFscGhhID0gMDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqLm5vZGUubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludCgpKSk7XHJcbiAgICAgICAgICAgIC8vIG9iai5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZU5ld1BvcyA9IHRoaXMudG9wTGF5ZXJPblN0YWdlLmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgICAgICBvYmoubm9kZS5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KCkpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBub2RlLnBvcyhub2RlTmV3UG9zLnggKyBvYmoubm9kZS5nZXRfd2lkdGgoKSAqIG9iai5ub2RlLmFuY2hvclgsIG5vZGVOZXdQb3MueSAtIGkgKiA2MCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAobm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gXCJ4XCIgKyBkLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICAgICAgICB7IHk6IG5vZGUueSAtIDQwLCBhbHBoYTogMSB9LFxyXG4gICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAoZTogTGF5YS5Cb3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDEwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKFwiZmxvYXRSZXdhcmRCb3hcIiwgZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zSWNvbiA9IHRoaXMudG9wTGF5ZXJPblN0YWdlLmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5sb2NhbFRvR2xvYmFsKExheWEuUG9pbnQuY3JlYXRlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVTZWxmKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5ub3RGbHkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmxvYXRJY29uOiBMYXlhLkltYWdlID0gTGF5YS5Qb29sLmdldEl0ZW1CeUNyZWF0ZUZ1bihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdFJld2FyZEljb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdFJld2FyZEljb24uY3JlYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb2F0UmV3YXJkSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnNraW4gPSBkLm9iai5pY29uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24ucG9zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBvc0ljb24ueCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjAgKiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUG9zSWNvbi55ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyMCAqIChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BMYXllck9uU3RhZ2UuYWRkQ2hpbGQoZmxvYXRJY29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24uek9yZGVyID0gOTk5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wSWNvbjogTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGQucG9zVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BJY29uID0gdGhpcy50b3BHb2xkSWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BJY29uID0gdGhpcy50b3BEaWFtb25kSWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BJY29uID0gdGhpcy53YXJlaG91c2VCdG47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3BHb2xkSWNvblBvcyA9IHRvcEljb24ubG9jYWxUb0dsb2JhbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuUG9pbnQodG9wSWNvbi53aWR0aCAvIDIsIHRvcEljb24uaGVpZ2h0IC8gMilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvcyA9IHRoaXMudG9wTGF5ZXJPblN0YWdlLmdsb2JhbFRvTG9jYWwodG9wR29sZEljb25Qb3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgeDogbG9jYWxQb3MueCwgeTogbG9jYWxQb3MueSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuYmFja0luLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlOiBMYXlhLkltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIoXCJmbG9hdFJld2FyZEljb25cIiwgZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zsb2F0SWNvbl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTUwICogeFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgW25vZGVdXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgNTAgKiBpLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjRBRFx1NjUzRVx1NzcwQlx1NUU3Rlx1NTQ0QVx1NEVFNVx1NTQwRVx1NzY4NFx1NTk1Nlx1NTJCMVxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQpXHJcbiAgICBwcml2YXRlIHBsYXlBZFJld2FyZCh0YXJnZXQpIHtcclxuICAgICAgICBjb25zdCByZXdhcmQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiVmlkZW9yZXdhcmRzXCIpLnZhbHVlIGFzIFJld2FyZEN1cnJlbmN5QmFzZTtcclxuXHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICBub2RlOiB0YXJnZXQsXHJcbiAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmo6IHJld2FyZC5vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHJld2FyZC5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiByZXdhcmQub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkID8gMSA6IDIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfdGFzaylcclxuICAgIHByaXZhdGUgdXBkYXRlVGFzaygpIHtcclxuICAgICAgICBjb25zdCBib3g6IExheWEuSW1hZ2UgPSB0aGlzLnRhc2tCb3gsXHJcbiAgICAgICAgICAgIGljb24gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGFtb3VudEZvbnQgPSBpY29uLmdldENoaWxkQnlOYW1lKFwiYW1vdW50Rm9udFwiKSBhcyBMYXlhLkZvbnRDbGlwLFxyXG4gICAgICAgICAgICBkZXNjID0gYm94LmdldENoaWxkQnlOYW1lKFwibGJcIikgYXMgTGF5YS5MYWJlbCxcclxuICAgICAgICAgICAgbGlzdCA9IFRhc2tTZXJ2aWNlLmdldExpc3QoKSxcclxuICAgICAgICAgICAgdGFzayA9IGxpc3RbMF07XHJcbiAgICAgICAgaWYgKHRhc2sucmVjZWl2ZSA9PSAxIHx8IHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICBib3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBkZXNjLnRleHQgPSBgXHU0RUZCXHU1MkExOiR7dGFzay5iYXNlLmRlc2N9KCR7XHJcbiAgICAgICAgICAgIHRhc2sudGltZXMgPiB0YXNrLmJhc2UudGltZXMgPyB0YXNrLmJhc2UudGltZXMgOiB0YXNrLnRpbWVzXHJcbiAgICAgICAgfS8ke3Rhc2suYmFzZS50aW1lc30pYDtcclxuICAgICAgICBhbW91bnRGb250LnZhbHVlID0gXCJ4XCIgKyB0YXNrLmJhc2UucmV3YXJkLmNvdW50O1xyXG4gICAgICAgIGljb24uc2tpbiA9IHRhc2suYmFzZS5yZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgYm94LndpZHRoID0gZGVzYy53aWR0aCArIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTZERVx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdvSG9tZSgpIHtcclxuICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcodHJ1ZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmdvSG9tZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTU2REVcdTY3NjVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3V0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMzAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29GcmllbmQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSGl0TGFuZEFkZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUzQkJcdTkwQkJcdTVDNDVcdTVCQjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnb1RvTmVpZ2hib3IoKSB7XHJcbiAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KHRydWUsICgpID0+IHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5uZWlnaGJvcixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZDogUmV0dXJuTmVpZ2hib3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NzlCQlx1NUYwMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb0ZyaWVuZChkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMuZ29fZnJpZW5kX2hvbWUpXHJcbiAgICBwcml2YXRlIGdvRnJpZW5kTGlzdGVuKGQ6IFJldHVybk5laWdoYm9yLCBmcmllbmREYXRhOiBGcmllbmREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5pc091dGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdvRnJpZW5kKGQsIGZyaWVuZERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1M0JCXHU2NzBCXHU1M0NCXHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ29GcmllbmQoZD86IFJldHVybk5laWdoYm9yLCBmcmllbmREYXRhPzogRnJpZW5kRGF0YSkge1xyXG4gICAgICAgIGxldCBsYW5kcyA9IHRoaXMubGFuZExpc3QsXHJcbiAgICAgICAgICAgIHVzZXJMYW5kcyA9IExhbmRTZXJ2aWNlLmxpc3Q7XHJcbiAgICAgICAgbGV0IG90aGVyTGFuZHM6IE1hcDxudW1iZXIsIExhbmRPYmo+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGQubGFuZHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJMYW5kcy5zZXQoZS5pZCwgZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vdXRlclRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnZpdGFsaXR5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hbnlEb29yLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1c2VyTGFuZHMuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZC5tYXR1cmVUaW1lTGVmdCAtPSAoRGF0ZS5ub3coKSAtIHRoaXMub3V0ZXJUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5tYXR1cmVUaW1lTGVmdCA8IDApIGQubWF0dXJlVGltZUxlZnQgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYW55RG9vci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nb0hvbWVCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsYW5kcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsYW5kID0gbGFuZHNbeF07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGxhbmQuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnN0ZWFsVWlkID0gZC51aWQ7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnVwZGF0ZURhdGEoeyBsaXN0OiBvdGhlckxhbmRzIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkLnByb3RlY3RlZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZC50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kLmNhblN0ZWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhbmQuY2FuU3RlYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhbmQuaXNPdXRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZC5zdGVhbFVpZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnVwZGF0ZURhdGEoeyBsaXN0OiB1c2VyTGFuZHMgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhbmQucGxhbnRJY29uQW5pKEJvb2xlYW4obGFuZC5kYXRhPy5wcm9kdWN0SWQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgLy9cdTk2OTBcdTg1Q0ZcdTVCQTBcdTcyNjlcclxuICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL1x1OTY5MFx1ODVDRlx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICB0aGlzLnRhc2tCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHU2NjNFXHU3OTNBIFx1NUJBMFx1NzI2OVxyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8ud2FyZVBldElkKSB0aGlzLnBldEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9cdTY2M0VcdTc5M0FcdTRFRkJcdTUyQTFcclxuICAgICAgICAgICAgdGhpcy50YXNrQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVGcmllbmRWaWV3KGQ/Lm5pY2tuYW1lLCBmcmllbmREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTNCQlx1NTk3RFx1NTNDQlx1NUJCNlx1OEZEOFx1NjYyRlx1ODFFQVx1NURGMVx1NUJCNlx1NzY4NFx1NzU0Q1x1OTc2Mlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZyaWVuZFZpZXcobmlja25hbWU6IHN0cmluZyA9IFwiXCIsIGZyaWVuZERhdGE6IEZyaWVuZERhdGEpIHtcclxuICAgICAgICBjb25zdCB0b3BCb3ggPSB0aGlzLm9yZGVyQm94LnBhcmVudCBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgbW9uZXlCb3ggPSB0b3BCb3guZ2V0Q2hpbGRCeU5hbWUoXCJtb25leV9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGNvdW50RG93biA9IHRvcEJveC5nZXRDaGlsZEJ5TmFtZShcImNvdW50X2Rvd25cIikgYXMgTGF5YS5MYWJlbCxcclxuICAgICAgICAgICAgb3JkZXJCb3ggPSB0aGlzLm9yZGVyQm94LmdldENoaWxkQnlOYW1lKFwib3JkZXJfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBmcmllbmROYW1lID0gdGhpcy5vcmRlckJveC5nZXRDaGlsZEJ5TmFtZShcImZyaWVuZF9uYW1lXCIpIGFzIExheWEuTGFiZWwsXHJcbiAgICAgICAgICAgIGJvdHRvbUxpc3Q6IExheWEuSW1hZ2VbXSA9IFtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQm94LmdldENoaWxkQnlOYW1lKFwidGFza1wiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJzaWduSW5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQm94LmdldENoaWxkQnlOYW1lKFwiZnJpZW5kc1wiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJtYWlsXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICBmcmllbmROYW1lLnRleHQgPSBgJHtuaWNrbmFtZX1cdTc2ODRcdTUxOUNcdTU3M0FgO1xyXG4gICAgICAgICAgICBvcmRlckJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZyaWVuZE5hbWUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1vbmV5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY291bnREb3duLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY291bnREb3duLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMub3V0Q291bnREb3duTnVtYmVyKTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5sb29wKDEwMDAsIHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQsIFtjb3VudERvd25dKTtcclxuICAgICAgICAgICAgaWYgKGZyaWVuZERhdGE/LmF2YXRhcikgdGhpcy5hdmF0YXJOb2RlLnNraW4gPSBmcmllbmREYXRhPy5hdmF0YXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRDb3VudERvd25OdW1iZXIgPSA2MDtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLCB0aGlzLm91dENvdW50RG93bkV2ZW50KTtcclxuICAgICAgICAgICAgb3JkZXJCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZyaWVuZE5hbWUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBtb25leUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY291bnREb3duLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCFVc2VySW5mby5hdmF0YXIpIHRoaXMuYXZhdGFyTm9kZS5za2luID0gVXNlckluZm8uYXZhdGFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3R0b21MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZS5kaXNhYmxlZCA9IHRoaXMuaXNPdXRlcjtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL1x1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MDEyXHU4QkExXHU2NUY2XHU3RUQzXHU2NzVGXHJcbiAgICAgKiBAcGFyYW0gbGJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvdXRDb3VudERvd25FdmVudChsYjogTGF5YS5MYWJlbCkge1xyXG4gICAgICAgIHRoaXMub3V0Q291bnREb3duTnVtYmVyLS07XHJcbiAgICAgICAgbGIudGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5vdXRDb3VudERvd25OdW1iZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLm91dENvdW50RG93bk51bWJlciA8PSAwKSB7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcywgdGhpcy5vdXRDb3VudERvd25FdmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ib21lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWd1cmVBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6X3gsIHRpcHM6XCJcdTdFQzhcdTcwQjlcdTU3NTBcdTY4MDdcIiwgdHlwZTp0eXBlOlN0cmluZ30qL1xyXG4gICAgcHJpdmF0ZSBfeDogc3RyaW5nID0gXCIwXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6X3ksIHRpcHM6XCJcdTdFQzhcdTcwQjlcdTU3NTBcdTY4MDdcIiwgdHlwZTp0eXBlOlN0cmluZ30qL1xyXG4gICAgcHJpdmF0ZSBfeTogc3RyaW5nID0gXCIwXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVsYXksIHRpcHM6XCJcdTVFRjZcdThGREZcIiwgdHlwZTp0eXBlOlN0cmluZ30qL1xyXG4gICAgcHJpdmF0ZSBkZWxheTogc3RyaW5nID0gXCIwXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGltZSwgdGlwczpcIlx1NjVGNlx1OTVGNFwiLCB0eXBlOnR5cGU6U3RyaW5nfSovXHJcbiAgICBwcml2YXRlIHRpbWU6IHN0cmluZyA9IFwiMTAwMDBcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5vd25lciBhcyBMYXlhLkFuaW1hdGlvbjtcclxuICAgICAgICBub2RlLmFscGhhID0gMDtcclxuICAgICAgICBsZXQgb2xkUG9zID0geyB4OiBub2RlLngsIHk6IG5vZGUueSB9O1xyXG4gICAgICAgIGxldCBkZWxheSA9IE51bWJlcih0aGlzLmRlbGF5KTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKG5vZGUsIHsgYWxwaGE6IDEgfSwgNjAwLCBudWxsLCBudWxsLCBkZWxheSk7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgeyB4OiB0aGlzLl94LCB5OiB0aGlzLl95IH0sXHJcbiAgICAgICAgICAgIE51bWJlcih0aGlzLnRpbWUpLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGUucG9zKG9sZFBvcy54LCBvbGRQb3MueSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW5hYmxlKCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkZWxheVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge31cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBPcmRlckJhc2UsIFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuXHJcbi8vY2xhc3MgT3JkZXJWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpvcmRlckxpc3QsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlLH0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlckxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0bkxvY2tSZXMsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTYzMDlcdTk0QUVcdTY3MkFcdTVCOENcdTYyMTBcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBidG5Mb2NrUmVzOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0blJlc0N1ciwgdGlwczpcIlx1OEJBMlx1NTM1NVx1NjMwOVx1OTRBRVx1NUY1M1x1NTI0RFx1NzJCNlx1NjAwMVx1NjMwOVx1OTRBRVwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGJ0blJlc0N1cjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBPcmRlckJhc2VbXTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gVGFibGVBbmFseXplLnRhYmxlKFwib3JkZXJcIikubGlzdDtcclxuICAgICAgICBsZXQgb3JkZXJPbGRMdiA9IFVzZXJJbmZvLm9yZGVyTGV2ZWwgfHwgMDtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuaWQgKiAoYi5pZCA8PSBvcmRlck9sZEx2ID8gLTEgOiAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC5hcnJheSA9IHRoaXMuZGF0YUxpc3Q7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJMaXN0KTtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJMaXN0KGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5kYXRhTGlzdFtpXSxcclxuICAgICAgICAgICAgcmV3YXJkOiBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICAgICAgICAgIHJld2FyZENvdW50OiBudW1iZXIgPSAwLFxyXG4gICAgICAgICAgICBjdXJDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIG1heENvdW50ID0gMCxcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwLFxyXG4gICAgICAgICAgICByZXdhcmRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm9yZGVyX2x2XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtkLmlkfVx1N0VBN1x1OEJBMlx1NTM1NWA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fXCIgKyB4KSBhcyBMYXlhLkJveDtcclxuICAgICAgICAgICAgaWYgKGQuY29uZGl0aW9uW3hdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJDb3VudCA9IFdhcmVob3VzZVNlcnZpY2UuZ2V0T25lKGQuY29uZGl0aW9uW3hdLnBsYW50LmlkKT8uY291bnQgfHwgMDtcclxuICAgICAgICAgICAgICAgIG1heENvdW50ID0gZC5jb25kaXRpb25beF0uY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1ckNvdW50ID49IG1heENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MrKztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuY29uZGl0aW9uW3hdLnBsYW50Lmljb247XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5pZCA8IFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke21heENvdW50fS8ke21heENvdW50fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPSA4NztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke2N1ckNvdW50fS8ke21heENvdW50fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA4NyAqIChjdXJDb3VudCAvIG1heENvdW50ID4gMSA/IDEgOiBjdXJDb3VudCAvIG1heENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGQuY29uZGl0aW9uW3hdLnBsYW50LmdhaW4uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLm9iai5pZCA9PT0gQ29uZmlnR2FtZS5nb2xkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZCA9IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKz0gZS5jb3VudCAqIGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBidG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaWYgKGQuaWQgPiBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAvL1x1NjcyQVx1NkZDMFx1NkQzQlxyXG4gICAgICAgICAgICBidG4uc2tpbiA9IHRoaXMuYnRuTG9ja1JlcztcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkLmlkID09IFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFxyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSB0aGlzLmJ0blJlc0N1cjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1REYyXHU1QjhDXHU2MjEwXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9cdTVERjJcdTVCOENcdTYyMTBcclxuICAgICAgICAgICAgICAgIGJ0bi5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJld2FyZCkge1xyXG4gICAgICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gcmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGArJHtcclxuICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICsgTWF0aC5yb3VuZChyZXdhcmRDb3VudCAqIGQuY29tbWlzc2lvbilcclxuICAgICAgICAgICAgfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVyVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlclZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxlZnRCb3gsIHRpcHM6XCJcdTRFOTFcdTVERTZcdThGQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBsZWZ0Qm94OiBMYXlhLkJveDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpyaWdodEJveCwgdGlwczpcIlx1NEU5MVx1NURFNlx1OEZCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHJpZ2h0Qm94OiBMYXlhLkJveDtcclxuXHJcbiAgICBvbkhkRW5hYmxlKCkge31cclxuXHJcbiAgICBvbk9wZW5lZChkYXRhOiB7IGNhbGw6IHsgKE92ZXJWaWV3KTogdm9pZCB9IH0pIHtcclxuICAgICAgICAvLyB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgaWYgKGRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgZGF0YS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZShjYWxsOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMubGVmdEJveC54ID0gLTk4NztcclxuICAgICAgICB0aGlzLnJpZ2h0Qm94LnggPSAxMDI1O1xyXG4gICAgICAgIHRoaXMubGVmdEJveC5hbHBoYSA9IDA7XHJcbiAgICAgICAgdGhpcy5yaWdodEJveC5hbHBoYSA9IDA7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLmxlZnRCb3gsIHsgeDogMCwgYWxwaGE6IDEgfSwgNTAwKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm94LFxyXG4gICAgICAgICAgICB7IHg6IDAsIGFscGhhOiAxIH0sXHJcbiAgICAgICAgICAgIDUwMCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbCkgY2FsbCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbihjYWxsOiBGdW5jdGlvbikge1xyXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5sZWZ0Qm94LCB7IHg6IC05ODcsIGFscGhhOiAwIH0sIDUwMCk7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJveCxcclxuICAgICAgICAgICAgeyB4OiAxMDI1LCBhbHBoYTogMCB9LFxyXG4gICAgICAgICAgICA1MDAsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGwpIGNhbGwoKTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuT3ZlclZpZXcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBEYXRhQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwRGF0YUNvbnRyb2xcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vL2NsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm11c2ljTm9kZSwgdGlwczpcIlx1OTdGM1x1NEU1MFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbXVzaWNOb2RlOiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c291bmROb2RlLCB0aXBzOlwiXHU5N0YzXHU2NTQ4XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzb3VuZE5vZGU6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphdmF0YXJOb2RlLCB0aXBzOlwiXHU3M0E5XHU1QkI2XHU1OTM0XHU1MENGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhdmF0YXJOb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpuaWNrbmFtZSwgdGlwczpcIlx1NzNBOVx1NUJCNlx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbmlja25hbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnVzZXJLZXksIHRpcHM6XCJcdTc1MjhcdTYyMzdcdTUzQ0JcdTYwQzVcdTc4MDFcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHVzZXJLZXk6IExheWEuTGFiZWw7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY0NoYW5nZSgpO1xyXG4gICAgICAgIHRoaXMuc291bmRDaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy51c2VyS2V5LnRleHQgPSBgXHU5MDgwXHU4QkY3XHU3ODAxXHVGRjFBJHtVc2VySW5mby5rZXl9YDtcclxuXHJcbiAgICAgICAgQ29yZS5vYnNlcnZhYmxlUHJvcGVydHlcclxuICAgICAgICAgICAgLndhdGNoKFVzZXJJbmZvLCB0aGlzKVxyXG4gICAgICAgICAgICAua2V5KFwiYXZhdGFyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkgdGhpcy5hdmF0YXJOb2RlLnNraW4gPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwibmlja25hbWVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmlja25hbWUudGV4dCA9IGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU2V0dGluZ1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibXVzaWNcIjpcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ubXVzaWNNdXRlZCA9ICFDb3JlLmF1ZGlvLm11c2ljTXV0ZWQ7XHJcbiAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJtdXNpY1wiLCBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubXVzaWNDaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQgPSAhQ29yZS5hdWRpby5zb3VuZE11dGVkO1xyXG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwic291bmRcIiwgQ29yZS5hdWRpby5zb3VuZE11dGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwic2lnbl9vdXRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTc4NkVcdThCQTRcdTg5ODFcdTkwMDBcdTUxRkFcdTc2N0JcdTVGNTVcdUZGMUZcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ0b2tlblwiLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSHR0cERhdGFDb250cm9sLmxvZ2luT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5sb2dpbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkxvZ2luVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMubG9naW5fZ2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVzZXJfYWdyZWVtZW50XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1NzUyOFx1NjIzN1x1NTM0Rlx1OEJBRVxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAuc2VydmljZUFncmVlbWVudCwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByaXZhY3lcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5NjkwXHU3OUMxXHU2NTNGXHU3QjU2XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5wcml2YWN5QWdyZWVtZW50LCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWJvdXRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5BYm91dFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb3B5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3B5KCkge1xyXG4gICAgICAgIGxldCBhOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgYS52YWx1ZSA9IFVzZXJJbmZvLmtleTtcclxuICAgICAgICBhLnNlbGVjdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgICAgICBhLnJlbW92ZSgpO1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU1OTBEXHU1MjM2XHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbXVzaWNDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5tdXNpY05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBjb25zdCBpY29uID0gYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG5cclxuICAgICAgICBsZXQgbXVzaWMgPSBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXVzaWMpO1xyXG5cclxuICAgICAgICBpY29uLnggPSAhbXVzaWMgPyAtMTQgOiA5MTtcclxuICAgICAgICBpY29uLnNraW4gPSAhbXVzaWMgPyBgZ2FtZS9pbWdfbXVzaWNPbkJ0bi5wbmdgIDogXCJnYW1lL2ltZ19tdXNpY09mZkJ0bi5wbmdcIjtcclxuICAgICAgICBib3guc2tpbiA9ICFtdXNpYyA/IGBnYW1lL2ltZ19zd2l0Y2hPbi5wbmdgIDogXCJnYW1lL2ltZ19zd2l0aE9mZi5wbmdcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNvdW5kQ2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnN0IGJveCA9IHRoaXMuc291bmROb2RlLmdldENoaWxkQnlOYW1lKFwiYm94XCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBsZXQgc291bmQgPSBDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQ7XHJcbiAgICAgICAgaWNvbi54ID0gIXNvdW5kID8gLTE0IDogOTE7XHJcbiAgICAgICAgaWNvbi5za2luID0gIXNvdW5kID8gYGdhbWUvaW1nX211c2ljT25CdG4ucG5nYCA6IFwiZ2FtZS9pbWdfbXVzaWNPZmZCdG4ucG5nXCI7XHJcbiAgICAgICAgYm94LnNraW4gPSAhc291bmQgPyBgZ2FtZS9pbWdfc3dpdGNoT24ucG5nYCA6IFwiZ2FtZS9pbWdfc3dpdGhPZmYucG5nXCI7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IEZlZWRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVlZERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IEZlZWRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBGZWVkU2VydmljZSB7XHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBsaXN0OiBGZWVkRGF0YUJhc2VbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NTcwXHU2MzZFXHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwiZmVlZFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogZCxcclxuICAgICAgICAgICAgICAgIGxvY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZlZWRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBGZWVkQmFzZSwgUGxhbnRCYXNlLCBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcInNyYy9jb21tb24vVG9vbHNcIjtcclxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBGZWVkU2VydmljZSwgeyBGZWVkRGF0YUJhc2UgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0ZlZWRTZXJ2aWNlXCI7XHJcbmltcG9ydCBQZXRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZVwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hvcFZpZXdEYXRhIHtcclxuICAgIC8qKiBcdTc1NENcdTk3NjJ0YWdcdTRFMEJcdTY4MDdpZCAqL1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTY1NzBcdTYzNkUgKi9cclxuICAgIHBhcm0/OiBhbnk7XHJcbiAgICBjYWxsPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0bkJveFRvcCwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NTIxN1x1ODg2OFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYnRuQm94VG9wOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpib3R0b21Cb3gsIHRpcHM6XCJcdTVFOTVcdTkwRThcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJvdHRvbUJveDogTGF5YS5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NzlDRFx1NUI1MFxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNlZWREZXNjLCB0aXBzOlwiXHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzZWVkRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bWF0dXJlVGltZSwgdGlwczpcIlx1NjIxMFx1NzE5Rlx1NjVGNlx1OTVGNFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbWF0dXJlVGltZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bWF0dXJlR2FpbkJveCwgdGlwczpcIlx1NjUzNlx1NzZDQVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbWF0dXJlR2FpbkJveDogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9ja0J0bkJveCwgdGlwczpcIlx1ODlFM1x1OTUwMVx1NjMwOVx1OTRBRVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9ja0J0bkJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1CdXlCdG4sIHRpcHM6XCJcdThEMkRcdTRFNzBcdTYzMDlcdTk0QUVcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1CdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU5OTcyXHU2NTk5XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmVlZEJ1eUJ0biwgdGlwczpcIlx1OTk3Mlx1NjU5OVx1OEQyRFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZmVlZEJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmVlZERlc2MsIHRpcHM6XCJcdTk5NzJcdTY1OTlcdTYzQ0ZcdThGRjBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZlZWREZXNjOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NUJBMFx1NzI2OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldEljb24sIHRpcHM6XCJcdTVCQTBcdTcyNjlpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXREZXNjLCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXREZXNjOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXROYW1lLCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU1NDBEXHU3OUYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXROYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp2aXRhbGl0eU1heCwgdGlwczpcIlx1NEY1M1x1NTI5Qlx1NEUwQVx1OTY1MFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdml0YWxpdHlNYXg6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldEJ1eUJ0biwgdGlwczpcIlx1OEQyRFx1NEU3MFx1NUJBMFx1NzI2OVx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0QnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb1dhdGNoLCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU3NzBCXHU1QkI2XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb1dhdGNoOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb1Jlc3QsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTRGMTFcdTYwNkZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGdvUmVzdDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTk0QjFcdTVFODRcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaWFtb25kRm9udCwgdGlwczpcIlx1NzUyOFx1NjIzN1x1OTRCQlx1NzdGM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZGlhbW9uZEZvbnQ6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlTGlzdCwgdGlwczpcIlx1OTRCMVx1NUU4NFx1NjNEMFx1NzNCMFx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByb3BvcnRpb24sIHRpcHM6XCJcdTUxNTFcdTYzNjJcdTZCRDRcdTRGOEJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByb3BvcnRpb246IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIFx1NTNFRlx1NjNEMFx1NzNCMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBwcmljZURhdGFMaXN0OiB7IHByaWNlOiBudW1iZXI7IHRpbWVzOiBudW1iZXIgfVtdID0gW107XHJcbiAgICAvKiogXHU5NEIxXHU1RTg0XHU5MDA5XHU2MkU5XHU3Njg0XHU1MDNDIFx1NzY4NFx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBwcmljZVNlbGVjdEluZGV4OiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTY1ODdcdTVCNTdcdThENDRcdTZFOTBcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgYnRuVG9wUmVzTGlzdDogc3RyaW5nW11bXSA9IFtcclxuICAgICAgICBbXCJnYW1lL2ltZ19zZWVkc05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19zZWVkc1NlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19wZXROb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfcGV0U2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX2Zvb2RuTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX2Zvb2RuU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX2JhbmtOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfYmFua1NlbGVjdGVkLnBuZ1wiXSxcclxuICAgIF07XHJcbiAgICAvKiogXHU5ODc2XHU5MEU4XHU1MjA3XHU2MzYyXHU2ODA3XHU3QjdFXHU5MDA5XHU2MkU5XHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHRvcEJ0blNlbGVjdEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTU0Nlx1NTRDMVx1NTIxN1x1ODg2OFx1NzBCOVx1NTFGQlx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdFNlbGVjdEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTU0Nlx1NTRDMVx1NTIxN1x1ODg2OFx1ODBDQ1x1NjY2Rlx1N0VCOVx1NzQwNiAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsZWN0Qmc6IHN0cmluZ1tdID0gW1wiZ2FtZS9pbWdfcGV0YmFnTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3BldGJhZ1NlbGVjdGVkLnBuZ1wiXTtcclxuXHJcbiAgICAvKiogXHU1RjUzXHU1MjREXHU5MDA5XHU2MkU5XHU3Njg0XHU1QkEwXHU3MjY5XHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHNlbGVjdFBldEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkYXRhOiBTaG9wVmlld0RhdGE7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0ZpcnN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3Quc2VsZWN0SGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5vblNlbGVjdCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHRoaXMucHJpY2VMaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZVByaWNlSXRlbSk7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3Quc2VsZWN0SGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5vblByaWNlU2VsZWN0KTtcclxuXHJcbiAgICAgICAgQ29yZS5vYnNlcnZhYmxlUHJvcGVydHkud2F0Y2goVXNlckluZm8sIHRoaXMpLmtleShcImRpYW1vbmRcIiwgKHYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaWFtb25kRm9udC52YWx1ZSA9IHY7XHJcblxyXG4gICAgICAgICAgICBsZXQgd2l0aGRyYXdhbCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ3aXRoZHJhd2FsXCIpLnZhbHVlIGFzIHN0cmluZ1tdO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BvcnRpb24udGV4dCA9IGAgPSBcdTAwQTUkeygoTnVtYmVyKHdpdGhkcmF3YWxbMl0pIC8gTnVtYmVyKHdpdGhkcmF3YWxbMV0pKSAqIHYpXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLm1hdGNoKC9eXFxkKyg/OlxcLlxcZHswLDJ9KT8vKX1cdTUxNDNgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmVkKGU6IFNob3BWaWV3RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IGU/LmlkIHx8IDA7XHJcblxyXG4gICAgICAgIHRoaXMucHJpY2VEYXRhTGlzdCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ3aXRoZHJhd2FsX3RpbWVzXCIpLnZhbHVlIGFzIGFueTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvcEJ0blN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTkwMDlcdTRFMkRcdTY1RjZcdTc2ODRcdTRFMEJcdTY4MDdcclxuICAgICAqIEBwYXJhbSBlIFx1OTAwOVx1NEUyRFx1NzY4NFx1NEUwQlx1NjgwN1xyXG4gICAgICovXHJcbiAgICBvblNlbGVjdChlKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4ID0gZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NzlDRFx1NUI1MFx1NjIxNlx1OTk2RVx1NjU5OVx1NTIxN1x1ODg2OFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXREYXRhTGlzdCgpIHtcclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQbGFudFNlcnZpY2UubGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIUZlZWRTZXJ2aWNlLmxpc3QubGVuZ3RoKSBGZWVkU2VydmljZS5pbml0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBGZWVkU2VydmljZS5saXN0LnNvcnQoKGEsIGIpID0+IGEuYmFzZS52aXRhbGl0eSAtIGIuYmFzZS52aXRhbGl0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTMyXHU2N0QzXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU3Njg0XHU1MjE3XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gY2VsbCBcdTUyMTdcdTg4NjhcdTgyODJcdTcwQjlcclxuICAgICAqIEBwYXJhbSBpbmRleCBcdTRFMEJcdTY4MDdcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlSXRlbShjZWxsOiBMYXlhLkltYWdlLCBpbmRleCkge1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5nZXREYXRhTGlzdCgpW2luZGV4XTtcclxuICAgICAgICBsZXQgcHJpY2VCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiaGJveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgbG9ja0ljb24gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwibG9ja19pY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaWYgKCFkKSByZXR1cm4gY29uc29sZS53YXJuKFwiXHU2NTcwXHU2MzZFXHU0RTIyXHU1OTMxXCIpO1xyXG4gICAgICAgIGlmIChkLmxvY2spIHtcclxuICAgICAgICAgICAgbG9ja0ljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByaWNlQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcHJpY2VCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9ja0ljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsb2NrSWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcHJpY2VCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByaWNlQm94LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgaWNvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gKDxQbGFudEJhc2U+ZC5iYXNlKS5zZWVkX3ByaWNlLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9ICg8UGxhbnRCYXNlPmQuYmFzZSkuc2VlZF9wcmljZS5vYmouaWNvbjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3QuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIChwcmljZUJveC5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGNvdW50ICsgXCJcIjtcclxuICAgICAgICAgICAgKHByaWNlQm94LmdldENoaWxkQnlOYW1lKFwiZ29sZF9pY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBpY29uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmJhc2UuaWNvbjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGQuYmFzZS5uYW1lO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT0gdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzFdO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdERlc2MoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjZWxsLnNraW4gPSB0aGlzLml0ZW1TZWxlY3RCZ1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTRGNEVcdTkwRThcdUZGMENcdTkwMDlcdTYyRTlcdTcyNjlcdTU0QzFcdTY1RjZcdTc2ODRcdTY1NzBcdTYzNkVcdTY2M0VcdTc5M0FcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3REZXNjKCkge1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF07XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgLy9cdTk5NzJcdTY1OTlcclxuICAgICAgICAgICAgKHRoaXMuc2VlZERlc2MucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZERlc2MudGV4dCA9IGQuYmFzZS5kZXNjLnJlcGxhY2UoXCImXCIsICg8RmVlZEJhc2U+ZC5iYXNlKS52aXRhbGl0eSArIFwiXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmZlZWREZXNjLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgYm94ID0gdGhpcy5mZWVkQnV5QnRuLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xyXG4gICAgICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5jb3VudCArIFwiXCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU3OUNEXHU1QjUwXHJcbiAgICAgICAgbGV0IGJhc2UgPSBkLmJhc2UgYXMgUGxhbnRCYXNlO1xyXG4gICAgICAgICh0aGlzLnNlZWREZXNjLnBhcmVudCBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mZWVkRGVzYy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWVkRGVzYy50ZXh0ID0gYmFzZS5kZXNjO1xyXG4gICAgICAgIHRoaXMubWF0dXJlVGltZS50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyhiYXNlLm1hdHVyZV90aW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1CdXlCdG4udmlzaWJsZSA9ICFkLmxvY2s7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9ja0J0bkJveC52aXNpYmxlID0gZC5sb2NrO1xyXG4gICAgICAgIHRoaXMubG9ja0J0bkJveC5hY3RpdmUgPSBkLmxvY2s7XHJcbiAgICAgICAgbGV0IGdhaW5MaXN0ID0gYmFzZS5nYWluO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQm94ID0gdGhpcy5tYXR1cmVHYWluQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgICAgICBpY29uID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgIGdhaW5EYXRhID0gZ2Fpbkxpc3RbeCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBiYXNlLmhhcnZlc3Q7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gYmFzZS5pY29uO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhaW5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gZ2FpbkRhdGEub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGdhaW5EYXRhLmNvdW50ICogYmFzZS5oYXJ2ZXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAoaXRlbUJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGljb247XHJcbiAgICAgICAgICAgIChpdGVtQm94LmdldENoaWxkQnlOYW1lKFwiY291bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IFwieFwiICsgY291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYm94ID0gdGhpcy5sb2NrQnRuQm94LmdldENoaWxkQnlOYW1lKFwidW5sb2NrX2J1eVwiKS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuXHJcbiAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGJhc2UudW5sb2NrX2Nvc3Q/Lm9iaj8uaWNvbjtcclxuICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBiYXNlLnVubG9ja19jb3N0Py5jb3VudCArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwic2VlZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicGV0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJmZWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYW5rXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wQnRuSW5kZXggPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEluZGV4KGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ICE9IHRvcEJ0bkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IE51bWJlcih0b3BCdG5JbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL1x1NjRBRFx1NzlDRFxyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wic293XCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLnBhcm0/LmxhbmRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50SWQ6IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCh0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9cdTVFN0ZcdTU0NEFcdTg5RTNcdTk1MDFcdUZGMENcdTYyMTZcdTY2MkZcdTkxRDFcdTVFMDFcdTg5RTNcdTk1MDFcclxuICAgICAgICAgICAgY2FzZSBcInVubG9ja19idXlcIjpcclxuICAgICAgICAgICAgY2FzZSBcImFkX3VubG9ja1wiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnNlZWRzVW5sb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInNlZWRzVW5sb2NrXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50SWQ6IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUgPT0gXCJhZF91bmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IENvbmZpZ0dhbWUuQXBpVHlwZUFEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxhbnRTZXJ2aWNlLmxpc3RbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XS5sb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuY2hhbmdlSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYW50U2VydmljZS5saXN0W3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PSBcImFkX3VubG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4LS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RQZXRJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4ID0gUGV0U2VydmljZS5saXN0Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0UGV0SW5kZXggPj0gUGV0U2VydmljZS5saXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGV0X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRCdXkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fd2F0Y2hcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0R29XYXRjaChQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF0uYmFzZS5pZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX3Jlc3RcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5RUQ4XHU4QkE0XHU0RjY5XHU2MjM0XHU3QjJDXHU0RTAwXHU0RTJBXHU1QkEwXHU3MjY5XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBldEdvV2F0Y2goMTAwMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZlZWRfYnV5XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OTk3Mlx1NjU5OVx1OEQyRFx1NEU3MFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQnV5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndpdGhkcmF3X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTYzRDBcdTczQjBcclxuICAgICAgICAgICAgICAgIHRoaXMud2l0aGRyYXcoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZlZWRCdXkoKSB7XHJcbiAgICAgICAgbGV0IGZlZWQgPSB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XSBhcyBGZWVkRGF0YUJhc2U7XHJcbiAgICAgICAgaWYgKCFmZWVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZlZWRCdXksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImZlZWRCdXlcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGZlZWRJZDogZmVlZC5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ICs9IGZlZWQuYmFzZS52aXRhbGl0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogdGhpcy5mZWVkQnV5QnRuIGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogZmVlZC5iYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbm90Rmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVCQTBcdTcyNjlcdTUzQkJcdTc3MEJcdTVCQjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwZXRHb1dhdGNoKHBldElkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAucGV0V2VhcixcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wicGV0QnV5XCJdPntcclxuICAgICAgICAgICAgICAgICAgICBwZXRJZDogcGV0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLndhcmVQZXRJZCA9IHBldElkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4RDJEXHU0RTcwXHU1QkEwXHU3MjY5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGV0QnV5KCkge1xyXG4gICAgICAgIGxldCB7IGJhc2UgfSA9IFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XTtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAucGV0QnV5LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJwZXRCdXlcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHBldElkOiBiYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XS5sb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8ud2FyZVBldElkKSBVc2VySW5mby53YXJlUGV0SWQgPSBiYXNlLmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5wZXRWaXRhbGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gYmFzZS52aXRhbGl0eV9tYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gQ29uZmlnR2FtZS5wZXREaWdlc3RJbnRlcnZhbFRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTcwQjlcdTUxRkJcdTcwQjlcdTUxRkJcdTcyQjZcdTYwMDFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVUb3BCdG5TdGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYnRuQm94VG9wLm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuYnRuQm94VG9wLmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgICAgIGxiID0gYnRuLmdldENoaWxkQXQoMCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgaWYgKHggPT09IHRoaXMudG9wQnRuU2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZy1tZW51c2VsZWN0ZWQucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBsYi5za2luID0gdGhpcy5idG5Ub3BSZXNMaXN0W3hdWzFdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nLW1lbnVub3JtYWwucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBsYi5za2luID0gdGhpcy5idG5Ub3BSZXNMaXN0W3hdWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUJvdHRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1RTk1XHU5MEU4XHU1MTg1XHU1QkI5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQm90dG9tKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5ib3R0b21Cb3gubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKHgsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGl0ZW1CdXlCb3ggPSB0aGlzLml0ZW1CdXlCdG4ucGFyZW50IGFzIExheWEuQm94O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMudG9wQnRuU2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAvL1x1NzlDRFx1NUI1MFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGV0T3JGZWVkTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgxLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGV0T3JGZWVkTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQnV5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUxpc3QuYXJyYXkgPSB0aGlzLnByaWNlRGF0YUxpc3Q7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTVCQTBcdTcyNjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVQZXQoKSB7XHJcbiAgICAgICAgaWYgKCFQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoKSBQZXRTZXJ2aWNlLmluaXQoW10pO1xyXG4gICAgICAgIGxldCBwZXQgPSBQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF07XHJcbiAgICAgICAgdGhpcy5wZXRJY29uLnNraW4gPSBwZXQuYmFzZS5pY29uO1xyXG4gICAgICAgIHRoaXMucGV0TmFtZS50ZXh0ID0gcGV0LmJhc2UubmFtZTtcclxuICAgICAgICB0aGlzLnBldERlc2MudGV4dCA9IHBldC5iYXNlLmRlc2M7XHJcbiAgICAgICAgdGhpcy52aXRhbGl0eU1heC52YWx1ZSA9IHBldC5iYXNlLnZpdGFsaXR5X21heCArIFwiXCI7XHJcbiAgICAgICAgbGV0IGJ0bl9ib3ggPSB0aGlzLnBldEJ1eUJ0bi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKGJ0bl9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBwZXQuYmFzZS5jb3N0Lm9iai5pY29uO1xyXG4gICAgICAgIChidG5fYm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBwZXQuYmFzZS5jb3N0LmNvdW50ICsgXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IHBldEJveCA9IHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoMSksXHJcbiAgICAgICAgICAgIGZpbmRCb3ggPSBwZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5kX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgYmFja19ib3ggPSBwZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgc3Rhckljb246IExheWEuSW1hZ2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4KyspIHtcclxuICAgICAgICAgICAgc3Rhckljb24gPSBmaW5kQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgc3Rhckljb24udmlzaWJsZSA9IHggKiAyMCA8IHBldC5iYXNlLnNlbnNpdGl2ZTtcclxuICAgICAgICAgICAgc3Rhckljb24uc2tpbiA9XHJcbiAgICAgICAgICAgICAgICB4ICogMjAgKyAxMCA8IHBldC5iYXNlLnNlbnNpdGl2ZSA/IFwiZ2FtZS9pbWdfc3Rhci5wbmdcIiA6IFwiZ2FtZS9pbWdfaGFsZnN0YXIucG5nXCI7XHJcbiAgICAgICAgICAgIHN0YXJJY29uID0gYmFja19ib3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi52aXNpYmxlID0geCAqIDIwIDwgcGV0LmJhc2UuYWJpbGl0eTtcclxuICAgICAgICAgICAgc3Rhckljb24uc2tpbiA9XHJcbiAgICAgICAgICAgICAgICB4ICogMjAgKyAxMCA8IHBldC5iYXNlLmFiaWxpdHkgPyBcImdhbWUvaW1nX3N0YXIucG5nXCIgOiBcImdhbWUvaW1nX2hhbGZzdGFyLnBuZ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGV0LmxvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wZXRCdXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ29SZXN0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nb1dhdGNoLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8ud2FyZVBldElkID09IHBldC5iYXNlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoUGV0U2VydmljZS5nZXRVbmxvY2tMZW4oKSA9PT0gMSB8fCBVc2VySW5mby53YXJlUGV0SWQgPT09IDEwMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29XYXRjaC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvV2F0Y2gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucGV0QnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkxQ0RcdTdGNkVcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNldFBldE9yRmVlZExpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmdldERhdGFMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTRFMkRcdTk1RjRcdTUxODVcdTVCQjlcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTUyMDdcdTYzNjJcclxuICAgICAqIEBwYXJhbSBpIFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQ2VudGVyQm94U3RhdGUoaTogbnVtYmVyLCBzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoaSkgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KGkpIGFzIExheWEuQm94KS5hY3RpdmUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5NEIxXHU1RTg0XHU5MDA5XHU2MkU5XHJcbiAgICAgKiBAcGFyYW0gZSBcdTRFMEJcdTY4MDdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvblByaWNlU2VsZWN0KGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJpY2VTZWxlY3RJbmRleCA9IGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NzNCMFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHdpdGhkcmF3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByaWNlU2VsZWN0SW5kZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTAwOVx1NjJFOVx1ODk4MVx1NjNEMFx1NzNCMFx1NzY4NFx1OTFEMVx1OTg5RFwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAud2l0aGRyYXcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGlkOiB0aGlzLnByaWNlU2VsZWN0SW5kZXggfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjNEMFx1NzNCMFx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLndpdGhkcmF3ID0gZC5saXN0O1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IGQuZGlhbW9uZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTRCMVx1NUU4NFx1NjU3MFx1NjM2RVx1NkUzMlx1NjdEM1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVByaWNlSXRlbShjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMucHJpY2VEYXRhTGlzdFtpXTtcclxuXHJcbiAgICAgICAgbGV0IHVzZXJEYXRhOiBOZXRJbml0W1wid2l0aGRyYXdcIl1bMF0gPSB7IGlkOiAwLCB0aW1lczogMCB9O1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhTGlzdCA9IFVzZXJJbmZvLndpdGhkcmF3O1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdXNlckRhdGFMaXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyRGF0YUxpc3RbeF0uaWQgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgdXNlckRhdGEgPSB1c2VyRGF0YUxpc3RbeF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gZGF0YS5wcmljZSArIFwiXHU1MTQzXCI7XHJcbiAgICAgICAgaWYgKGRhdGEudGltZXMpIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVzID0gZGF0YS50aW1lcyAtIHVzZXJEYXRhLnRpbWVzO1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVzX2JveFwiKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZXNfYm94XCIpLmdldENoaWxkQnlOYW1lKFwidGltZXNcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTUyNjlcdTRGNTkke1xyXG4gICAgICAgICAgICAgICAgdGltZXMgPCAwID8gMCA6IHRpbWVzXHJcbiAgICAgICAgICAgIH1cdTZCMjFgO1xyXG4gICAgICAgICAgICBpZiAodGltZXMgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVzX2JveFwiKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJpY2VMaXN0LnNlbGVjdGVkSW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID0gXCJnYW1lL2ltZ19wcmljZXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IFwiZ2FtZS9pbWdfcHJpY2Vub3JtYWwucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbkluRGVzY1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JbkRlc2NWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU2lnbkluRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbi8vICBTaWduSW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5WaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluTGlzdCwgdGlwczpcIlx1N0I3RVx1NTIzMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25Jbkxpc3Q6IExheWEuTGlzdDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluUHJvZ3Jlc3NMYiwgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25JblByb2dyZXNzTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluUHJvZ3Jlc3NCYXIsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY3NjFcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBzaWduSW5Qcm9ncmVzc0JhcjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcm9ncmVzc0Rlc2MsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY1ODdcdTVCNTdcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBwcm9ncmVzc0Rlc2M6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmluaXNoSWNvbiwgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1NjU4N1x1NUI1N1x1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIGZpbmlzaEljb246IExheWEuSW1hZ2U7XHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QuYXJyYXkgPSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdDtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2lnbkluTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVByb2dyZXNzKCkge1xyXG4gICAgICAgIGxldCBzY2FsZSA9IFVzZXJJbmZvLnNwZWVkVXBUaW1lcyAvIENvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXM7XHJcbiAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuc2lnbkluUHJvZ3Jlc3NCYXIud2lkdGggPSA5NzcgKiBzY2FsZTtcclxuICAgICAgICB0aGlzLnNpZ25JblByb2dyZXNzTGIudGV4dCA9IFVzZXJJbmZvLnNpZ25JbkRheXMgKyBcIlwiO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NEZXNjLnRleHQgPSBgXHU0RUNBXHU2NUU1XHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHVGRjA4XHU0RjdGXHU3NTI4JHtVc2VySW5mby5zcGVlZFVwVGltZXN9LyR7Q29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lc31cdTZCMjFcdTUyQTBcdTkwMUZcdUZGMDlgO1xyXG4gICAgICAgIHRoaXMuZmluaXNoSWNvbi52aXNpYmxlID0gVXNlckluZm8uc3BlZWRVcFRpbWVzID49IENvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtKGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBiYXIgPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIG9iaiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5saXN0W2ldO1xyXG4gICAgICAgIGxldCBzY2FsZSA9IFVzZXJJbmZvLnNpZ25JbkRheXMgLyBvYmouZGF5cztcclxuICAgICAgICBpZiAoc2NhbGUgPiAxKSBzY2FsZSA9IDE7XHJcbiAgICAgICAgYmFyLndpZHRoID0gNTAyICogc2NhbGU7XHJcbiAgICAgICAgY29uc3QgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IG9iai5yZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImFtb3VudFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke29iai5yZXdhcmQuY291bnR9YDtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJzaWduX2RheXNcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTdCN0VcdTUyMzAke29iai5kYXlzfVx1NTkyOWA7XHJcblxyXG4gICAgICAgIGxldCBza2luOiBzdHJpbmcgPSBcIlwiLFxyXG4gICAgICAgICAgICBidG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZ2V0X2J0blwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGJ0bi5kYXRhU291cmNlID0gb2JqLmlkO1xyXG4gICAgICAgIGlmIChvYmouaWQgPiBVc2VySW5mby5zaWduSW5JZCkge1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LnkgPSAxMDM7XHJcbiAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfZG9uZS5wbmdgO1xyXG5cclxuICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnNpZ25JbkRheXMgPj0gb2JqLmRheXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uc2lnbkluSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmlkID09IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5saXN0WzBdLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfZ2V0LnBuZ2A7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmlkIC0gVXNlckluZm8uc2lnbkluSWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2dldC5wbmdgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfcmVjZWl2ZWQucG5nYDtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bi5za2luID0gc2tpbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVzY19idG5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaWduSW5EZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdldF9idG5cIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5ODg2XHU1M0Q2XHU1OTU2XHU1MkIxXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lnbkluSWQgPSBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnNpZ25JblJld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVBRCwgc2lnbkluSWQ6IHNpZ25JbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNpZ25JbklkID0gc2lnbkluSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbkluTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikuZ2V0KHNpZ25JbklkKS5yZXdhcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IGUudGFyZ2V0IGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogcmV3YXJkLm9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHJld2FyZC5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogcmV3YXJkLm9iai5pZCA9PSBDb25maWdHYW1lLmdvbGRJZCA/IDEgOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBTcGVlZFVwVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlZWRVcFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRpbWVMYiwgdGlwczpcIlx1NTJBMFx1OTAxRlx1NjVGNlx1OTVGNFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGltZUxiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRpbWVzTGIsIHRpcHM6XCJcdTUxNjhcdTRGNTNcdTUyQTBcdTkwMUZcdTUyNjlcdTRGNTlcdTZCMjFcdTY1NzBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRpbWVzTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3BlZWRVcEJ0biwgdGlwczpcIlx1NTE2OFx1NEY1M1x1NTJBMFx1OTAxRlx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3BlZWRVcEJ0bjogTGF5YS5MYWJlbDtcclxuXHJcbiAgICBwcml2YXRlIGNhbGw6IEZ1bmN0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKGRhdGE6IHsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuY2FsbCA9IGRhdGEuY2FsbDtcclxuICAgICAgICBsZXQgdGltZSA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJhbGxfc3BlZWRfdXBfdGltZVwiKS52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgdGhpcy50aW1lTGIudGV4dCA9IGAke01hdGguY2VpbCh0aW1lIC8gNjApfVx1NTIwNlx1OTQ5RmA7XHJcbiAgICAgICAgdGhpcy50aW1lc0xiLnRleHQgPSBgXHU0RUNBXHU2NUU1XHU1MjY5XHU0RjU5JHtVc2VySW5mby5hZHZlcnRpc2VUaW1lc31cdTZCMjFgO1xyXG4gICAgICAgIGlmIChVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRVcEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU3BlZWRVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzcGVlZF91cFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFNwZWVkVXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkOiB7IGFkdmVydGlzZVRpbWVzOiBudW1iZXI7IHNwZWVkVXBUaW1lczogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc3BlZWRVcFRpbWVzID0gZC5zcGVlZFVwVGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVc2VySW5mby5zcGVlZFVwVGltZXMgPT0gQ29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNwZWVkVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMubGFuZF9zcGVlZF91cCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGwpIHRoaXMuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50T24gfSBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi4vY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4uL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uT2JqIHtcclxuICAgIC8qKiBcdTRFRkJcdTUyQTFpZCAqL1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTVCOENcdTYyMTAgKi9cclxuICAgIG9rOiBib29sZWFuO1xyXG59XHJcblxyXG4vLyAgVGFza1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGFza0xpc3QsIHRpcHM6XCJcdTRFRkJcdTUyQTFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRhc2tMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGFza0xpc3QoKTtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMuaXRlbVJlbmRlcik7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFza0xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC5hcnJheSA9IFRhc2tTZXJ2aWNlLmdldExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGl0ZW1SZW5kZXIoY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBvYmogPSBUYXNrU2VydmljZS5saXN0W2ldLmJhc2U7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IFRhc2tTZXJ2aWNlLmdldFRhc2sob2JqLmlkKTtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IG9iai5pY29uO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IG9iai50aXRsZTtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZXNjXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtvYmouZGVzY30oJHtcclxuICAgICAgICAgICAgKHRhc2s/LnRpbWVzID4gb2JqLnRpbWVzID8gb2JqLnRpbWVzIDogdGFzaz8udGltZXMpIHx8IDBcclxuICAgICAgICB9LyR7b2JqLnRpbWVzfSlgO1xyXG5cclxuICAgICAgICBjb25zdCByZXdhcmRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkXCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmoucmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJhbW91bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IFwieFwiICsgb2JqLnJld2FyZC5jb3VudDtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImdvX3J1blwiKSBhcyBMYXlhLkltYWdlO1xyXG5cclxuICAgICAgICBjb25zdCBidG5PYmo6IEJ1dHRvbk9iaiA9IHtcclxuICAgICAgICAgICAgaWQ6IG9iai5pZCxcclxuICAgICAgICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vXHU1REYyXHU5ODg2XHU1M0Q2XHJcbiAgICAgICAgaWYgKHRhc2s/LnJlY2VpdmUpIHtcclxuICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX3RvbWFyb3cucG5nXCI7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vXHU1M0VGXHU5ODg2XHU1M0Q2XHJcbiAgICAgICAgICAgIGlmICh0YXNrPy50aW1lcyA+PSBvYmoudGltZXMpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ19nZXQucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBidG5PYmoub2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX2RvbmUucG5nXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ0bi5kYXRhU291cmNlID0gYnRuT2JqO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fcnVuXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuT2JqOiBCdXR0b25PYmogPSBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJ0bk9iai5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU1OTU2XHU1MkIxXHJcbiAgICAgICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAudGFza1Jld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsIHRhc2tJZDogYnRuT2JqLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrU2VydmljZS5nZXRUYXNrKGJ0bk9iai5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnJlY2VpdmUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuT2JqLm9rID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFza0xpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfdGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogdGFzay5iYXNlLnJld2FyZC5vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogdGFzay5iYXNlLnJld2FyZC5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKGJ0bk9iai5pZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGp1bXAoaWQsIHRhcmdldCkge1xyXG4gICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgICAgY2FzZSAxMDEyOlxyXG4gICAgICAgICAgICBjYXNlIDEwMDE6XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAxMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMjpcclxuICAgICAgICAgICAgICAgIGF3YWl0IEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJZDogMTAwMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAxMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDM6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDQ6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLm9wZW5fZnJpZW5kKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDU6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAxIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA2OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNzpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxhbnRfc293KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDg6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDk6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLm9wZW5fZnJpZW5kKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMTA6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLm9wZW5fZnJpZW5kLCBbMV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxMTpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxhbnRfc293KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlLCB7IFdhcmVIb3VzZURhdGEgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1xyXG4gKi9cclxuLy9GaWVsZExldmVsVXBWaWV3IFdhcmVob3VzZVZpZXcgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXJlaG91c2VWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTGlzdCwgdGlwczpcIlx1NzI2OVx1NTRDMVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbU5hbWUsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1OYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtRGVzYywgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbURlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1JY29uLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsQ291bnRMYiwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NTFGQVx1NTUyRVx1NjU3MFx1OTFDRlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxDb3VudExiOiBMYXlhLlRleHRJbnB1dCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxCb3gsIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTcyNjlcdTU0QzFcdTRFRjdcdTY4M0NcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsQm94OiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsR29sZCwgdGlwczpcIlx1OTFEMVx1NUUwMVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxHb2xkOiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsRGlhbW9uZCwgdGlwczpcIlx1OTRCQlx1NzdGM1x1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxEaWFtb25kOiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNlbGxCdG4sIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTc2ODRpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzZWxsQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWxsQWRCdG4sIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTc2ODRpY29uIFx1NUU3Rlx1NTQ0QVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VsbEFkQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTplbXB0eV9sYiwgdGlwczpcIlx1N0E3QVx1NzY4NFx1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZW1wdHlfbGI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgZGF0YUxpc3Q6IFdhcmVIb3VzZURhdGFbXVtdID0gW107XHJcbiAgICAvKiogXHU5MDA5XHU0RTJEXHU3Njg0XHU3MjY5XHU1NEMxIFx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtSW5kZXg6IHN0cmluZyA9IFwiMCwwXCI7XHJcbiAgICAvKiogXHU5MDA5XHU0RTJEXHU3Njg0XHU3MjY5XHU1NEMxXHU2NTcwXHU2MzZFICovXHJcbiAgICBwcml2YXRlIHNlbGVjdEl0ZW1EYXRhOiBXYXJlSG91c2VEYXRhO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NTFGQVx1NTUyRVx1NzI2OVx1NTRDMVx1NzY4NFx1NjU3MFx1OTFDRiAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtU2VsbENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTM1NVx1NEVGNyBcdTkxRDFcdTVFMDEgKi9cclxuICAgIHByaXZhdGUgdW5pdFByaWNlR29sZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUzNTVcdTRFRjcgXHU5NEJCXHU3N0YzICovXHJcbiAgICBwcml2YXRlIHVuaXRQcmljZURpYW1vbmQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5kYWthaWNhbmdrdSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJJdGVtTGlzdCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZURlc2MobnVsbCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxHb2xkLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsRGlhbW9uZC5yZW1vdmVTZWxmKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLm9uKExheWEuRXZlbnQuSU5QVVQsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gTnVtYmVyKHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA+IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMaXN0KCkge1xyXG4gICAgICAgIGxldCBpID0gMCxcclxuICAgICAgICAgICAgeSA9IDAsXHJcbiAgICAgICAgICAgIGhhc1NlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhTGlzdFt5XSkgdGhpcy5kYXRhTGlzdFt5XSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFMaXN0W3ldLnB1c2goZCk7XHJcbiAgICAgICAgICAgIGlmIChkLmJhc2UuaWQgPT0gdGhpcy5zZWxlY3RJdGVtRGF0YT8uYmFzZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgaGFzU2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGlmIChpID4gMikge1xyXG4gICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICB5Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFoYXNTZWxlY3QgJiYgdGhpcy5kYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtSW5kZXggPSBcIjAsMFwiO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZGF0YUxpc3Q7XHJcbiAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gIXRoaXMuZGF0YUxpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVySXRlbUxpc3QoY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhTGlzdFtpXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoYGl0ZW1fJHt4fWApIGFzIExheWEuQm94O1xyXG4gICAgICAgICAgICBpZiAoZGF0YVt4XSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGF0YVNvdXJjZSA9IGAke2l9LCR7eH1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGljb24gPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5za2luID0gZGF0YVt4XS5iYXNlLmljb247XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikgYXMgTGF5YS5MYWJlbFxyXG4gICAgICAgICAgICAgICAgKS50ZXh0ID0gYCR7ZGF0YVt4XS5iYXNlLm5hbWV9XyR7ZGF0YVt4XS5jb3VudH1gO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMuaXRlbUxpc3Quc2VsZWN0ZWRJbmRleCAmJiB0aGlzLnNlbGVjdEl0ZW1JbmRleCA9PSBpdGVtLmRhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKGljb24sIHsgeTogMCB9LCAxNTAsIG51bGwsIG51bGwsIG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1EYXRhID0gZGF0YVt4XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlc2MoZGF0YVt4XSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGljb24ueSA9IDU2O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpY29uLnkgIT0gNTYpIExheWEuVHdlZW4udG8oaWNvbiwgeyB5OiA1NiB9LCAxNTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8wXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzFcIjpcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtSW5kZXggPSBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTsgLy8gXHU4RkQ5XHU5MUNDXHU5NzAwXHU4OTgxXHU0RjE4XHU1MzE2XHU3M0IwXHU1NzI4XHU1MDVBXHU3Njg0XHU2NjJGXHU1MjM3XHU2NUIwXHU2NTc0XHU0RTJBXHU1MjE3XHU4ODY4XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID4gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVkdWNlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQtLTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPCAxKSB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2VsbEJ0bkFkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWxsQnRuXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYnRuTmFtZSA9IGUudGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLndhcmVob3VzZVNlbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcIndhcmVob3VzZVNlbGxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNlbGVjdEl0ZW1EYXRhLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuTmFtZSA9PSBcInNlbGxCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLnJlZHVjZUFtb3VudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1EYXRhLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlc2MobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJld2FyZExpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0UHJpY2VHb2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5nb2xkSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXRQcmljZUdvbGQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJ0bk5hbWUgPT0gXCJzZWxsQnRuQWRcIiA/IDIgOiAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXRQcmljZURpYW1vbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChDb25maWdHYW1lLmRpYW1vbmRJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdFByaWNlRGlhbW9uZCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYnRuTmFtZSA9PSBcInNlbGxCdG5BZFwiID8gMiA6IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG5OYW1lID09IFwic2VsbEJ0bkFkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMuc2VsbEJ0biBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjazogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUxRkFcdTUxRkFcdTU1MkVcdTRGRTFcdTYwNkZcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVEZXNjKGQ6IFdhcmVIb3VzZURhdGEpIHtcclxuICAgICAgICBpZiAoIWQpIHtcclxuICAgICAgICAgICAgKHRoaXMuaXRlbUljb24ucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICh0aGlzLml0ZW1JY29uLnBhcmVudCBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxEaWFtb25kLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsR29sZC5yZW1vdmVTZWxmKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUljb24uc2tpbiA9IGQuYmFzZS5pY29uO1xyXG4gICAgICAgIHRoaXMuaXRlbU5hbWUudGV4dCA9IGQuYmFzZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuaXRlbURlc2MudGV4dCA9IGQuYmFzZS5kZXNjO1xyXG4gICAgICAgIGxldCBwcmljZUdvbGQ6IFJld2FyZEN1cnJlbmN5QmFzZSwgcHJpY2VEaWFtb25kOiBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkLmJhc2UuZ2Fpbi5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkLmJhc2UuZ2Fpblt4XSk7XHJcbiAgICAgICAgICAgIGlmICghZC5iYXNlLmdhaW5beF0uY291bnQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoZC5iYXNlLmdhaW5beF0ub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkKSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZUdvbGQgPSBkLmJhc2UuZ2Fpblt4XTtcclxuICAgICAgICAgICAgICAgICh0aGlzLml0ZW1TZWxsR29sZC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgZC5iYXNlLmdhaW5beF0ub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxsQm94LmFkZENoaWxkKHRoaXMuaXRlbVNlbGxHb2xkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByaWNlRGlhbW9uZCA9IGQuYmFzZS5nYWluW3hdO1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXRlbVNlbGxEaWFtb25kLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID1cclxuICAgICAgICAgICAgICAgICAgICBkLmJhc2UuZ2Fpblt4XS5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGxCb3guYWRkQ2hpbGQodGhpcy5pdGVtU2VsbERpYW1vbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSBkLmNvdW50O1xyXG4gICAgICAgIHRoaXMudW5pdFByaWNlR29sZCA9IHByaWNlR29sZD8uY291bnQgfHwgMDtcclxuICAgICAgICB0aGlzLnVuaXRQcmljZURpYW1vbmQgPSBwcmljZURpYW1vbmQ/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTNFRlx1NEVFNVx1NTFGQVx1NTUyRVx1NzY4NFx1NjU3MFx1OTFDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpIHtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0ID0gdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICsgXCJcIjtcclxuICAgICAgICAodGhpcy5pdGVtU2VsbEdvbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICogdGhpcy51bml0UHJpY2VHb2xkICsgXCJcIjtcclxuICAgICAgICAodGhpcy5pdGVtU2VsbERpYW1vbmQuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICogdGhpcy51bml0UHJpY2VEaWFtb25kICsgXCJcIjtcclxuICAgIH1cclxufVxyXG4iLCAiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBBYm91dFZpZXcgZnJvbSBcIi4vdmlldy9BYm91dFZpZXdcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblwiXG5pbXBvcnQgVmlld1Nob3dBbmkgZnJvbSBcIi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiXG5pbXBvcnQgQWRkTGFuZFZpZXcgZnJvbSBcIi4vdmlldy9BZGRMYW5kVmlld1wiXG5pbXBvcnQgQnV5Vml0YWxpdHlWaWV3IGZyb20gXCIuL3ZpZXcvQnV5Vml0YWxpdHlWaWV3XCJcbmltcG9ydCBGaWVsZExldmVsVXBWaWV3IGZyb20gXCIuL3ZpZXcvRmllbGRMZXZlbFVwVmlld1wiXG5pbXBvcnQgRnJpZW5kc0Rlc2NWaWV3IGZyb20gXCIuL3ZpZXcvRnJpZW5kc0Rlc2NWaWV3XCJcbmltcG9ydCBGcmllbmRzUmV3YXJkVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNSZXdhcmRWaWV3XCJcbmltcG9ydCBGcmllbmRzVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNWaWV3XCJcbmltcG9ydCBHdWlkZVZpZXcgZnJvbSBcIi4vdmlldy9HdWlkZVZpZXdcIlxuaW1wb3J0IEhpbnRWaWV3IGZyb20gXCIuL3ZpZXcvSGludFZpZXdcIlxuaW1wb3J0IExvZ2luVmlldyBmcm9tIFwiLi92aWV3L0xvZ2luVmlld1wiXG5pbXBvcnQgTWFpbERlc2NWaWV3IGZyb20gXCIuL3ZpZXcvTWFpbERlc2NWaWV3XCJcbmltcG9ydCBNYWlsVmlldyBmcm9tIFwiLi92aWV3L01haWxWaWV3XCJcbmltcG9ydCBNYWluVmlldyBmcm9tIFwiLi92aWV3L01haW5WaWV3XCJcbmltcG9ydCBGaWd1cmVBbmkgZnJvbSBcIi4vY29tcG9uZW50cy9GaWd1cmVBbmlcIlxuaW1wb3J0IEZpZWxkQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIlxuaW1wb3J0IE9yZGVyVmlldyBmcm9tIFwiLi92aWV3L09yZGVyVmlld1wiXG5pbXBvcnQgT3ZlclZpZXcgZnJvbSBcIi4vdmlldy9PdmVyVmlld1wiXG5pbXBvcnQgU2V0dGluZ1ZpZXcgZnJvbSBcIi4vdmlldy9TZXR0aW5nVmlld1wiXG5pbXBvcnQgU2hvcFZpZXcgZnJvbSBcIi4vdmlldy9TaG9wVmlld1wiXG5pbXBvcnQgU2lnbkluRGVzY1ZpZXcgZnJvbSBcIi4vdmlldy9TaWduSW5EZXNjVmlld1wiXG5pbXBvcnQgU2lnbkluVmlldyBmcm9tIFwiLi92aWV3L1NpZ25JblZpZXdcIlxuaW1wb3J0IFNwZWVkVXBWaWV3IGZyb20gXCIuL3ZpZXcvU3BlZWRVcFZpZXdcIlxuaW1wb3J0IFRhc2tWaWV3IGZyb20gXCIuL3ZpZXcvVGFza1ZpZXdcIlxuaW1wb3J0IFdhcmVob3VzZVZpZXcgZnJvbSBcIi4vdmlldy9XYXJlaG91c2VWaWV3XCJcclxuLypcclxuKiBcdTZFMzhcdTYyMEZcdTUyMURcdTU5Q0JcdTUzMTZcdTkxNERcdTdGNkU7XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTEwODA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xOTIwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cIm1pZGRsZVwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJjZW50ZXJcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj10cnVlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJ2aWV3L0Fib3V0Vmlldy50c1wiLEFib3V0Vmlldyk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvQnV0dG9uLnRzXCIsQnV0dG9uKTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9WaWV3U2hvd0FuaS50c1wiLFZpZXdTaG93QW5pKTtcbiAgICAgICAgcmVnKFwidmlldy9BZGRMYW5kVmlldy50c1wiLEFkZExhbmRWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9CdXlWaXRhbGl0eVZpZXcudHNcIixCdXlWaXRhbGl0eVZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZpZWxkTGV2ZWxVcFZpZXcudHNcIixGaWVsZExldmVsVXBWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9GcmllbmRzRGVzY1ZpZXcudHNcIixGcmllbmRzRGVzY1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNSZXdhcmRWaWV3LnRzXCIsRnJpZW5kc1Jld2FyZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNWaWV3LnRzXCIsRnJpZW5kc1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0d1aWRlVmlldy50c1wiLEd1aWRlVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvSGludFZpZXcudHNcIixIaW50Vmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTG9naW5WaWV3LnRzXCIsTG9naW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9NYWlsRGVzY1ZpZXcudHNcIixNYWlsRGVzY1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haWxWaWV3LnRzXCIsTWFpbFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haW5WaWV3LnRzXCIsTWFpblZpZXcpO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL0ZpZ3VyZUFuaS50c1wiLEZpZ3VyZUFuaSk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHNcIixGaWVsZENvbXBvbmVudCk7XG4gICAgICAgIHJlZyhcInZpZXcvT3JkZXJWaWV3LnRzXCIsT3JkZXJWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9PdmVyVmlldy50c1wiLE92ZXJWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TZXR0aW5nVmlldy50c1wiLFNldHRpbmdWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TaG9wVmlldy50c1wiLFNob3BWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TaWduSW5EZXNjVmlldy50c1wiLFNpZ25JbkRlc2NWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TaWduSW5WaWV3LnRzXCIsU2lnbkluVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU3BlZWRVcFZpZXcudHNcIixTcGVlZFVwVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvVGFza1ZpZXcudHNcIixUYXNrVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvV2FyZWhvdXNlVmlldy50c1wiLFdhcmVob3VzZVZpZXcpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcIi4vY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBQbGFudFNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwiLi9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnR2FtZSwgeyBCdWlsZFR5cGUgfSBmcm9tIFwiLi9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwiLi9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCIuL2NvcmUvQXBwXCI7XHJcbmNsYXNzIE1haW4ge1xyXG4gICAgLyoqIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHU1MjE3XHU4ODY4ICovXHJcbiAgICBzdGF0aWMgY3VzdG9tUmVuZGVySUQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9cdTY4MzlcdTYzNkVJREVcdThCQkVcdTdGNkVcdTUyMURcdTU5Q0JcdTUzMTZcdTVGMTVcdTY0Q0VcclxuICAgICAgICBpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcbiAgICAgICAgZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcbiAgICAgICAgTGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG4gICAgICAgIC8vXHU1MTdDXHU1QkI5XHU1RkFFXHU0RkUxXHU0RTBEXHU2NTJGXHU2MzAxXHU1MkEwXHU4RjdEc2NlbmVcdTU0MEVcdTdGMDBcdTU3M0FcdTY2NkZcclxuICAgICAgICBMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG4gICAgICAgIC8vXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA4XHU5MDFBXHU4RkM3SURFXHU4QkJFXHU3RjZFXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHVGRjBDXHU2MjE2XHU4MDA1dXJsXHU1NzMwXHU1NzQwXHU1ODlFXHU1MkEwZGVidWc9dHJ1ZVx1NTNDMlx1NjU3MFx1RkYwQ1x1NTc0N1x1NTNFRlx1NjI1M1x1NUYwMFx1OEMwM1x1OEJENVx1OTc2Mlx1Njc3Rlx1RkYwOVxyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIilcclxuICAgICAgICAgICAgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG4gICAgICAgIExheWEuYWxlcnRHbG9iYWxFcnJvcih0cnVlKTtcclxuICAgICAgICBMYXlhLnN0YWdlLmJnQ29sb3IgPSBcIiNmZmZmZmZcIjtcclxuXHJcbiAgICAgICAgQlVJTERfVFlQRSA9PSBCdWlsZFR5cGUuZGVidWcgJiYgR2FtZUNvbmZpZy5zdGF0ICYmIExheWEuU3RhdC5zaG93KCk7XHJcblxyXG4gICAgICAgIC8vXHU2RkMwXHU2RDNCXHU4RDQ0XHU2RTkwXHU3MjQ4XHU2NzJDXHU2M0E3XHU1MjM2XHVGRjBDdmVyc2lvbi5qc29uXHU3NTMxSURFXHU1M0QxXHU1RTAzXHU1MjlGXHU4MEZEXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHVGRjBDXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU0RTVGXHU0RTBEXHU1RjcxXHU1NENEXHU1NDBFXHU3RUVEXHU2RDQxXHU3QTBCXHJcbiAgICAgICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFxyXG4gICAgICAgICAgICBcInZlcnNpb24uanNvblwiLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSxcclxuICAgICAgICAgICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vXHU2RkMwXHU2RDNCXHU1OTI3XHU1QzBGXHU1NkZFXHU2NjIwXHU1QzA0XHVGRjBDXHU1MkEwXHU4RjdEXHU1QzBGXHU1NkZFXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1OTgyXHU2NzlDXHU1M0QxXHU3M0IwXHU1QzBGXHU1NkZFXHU1NzI4XHU1OTI3XHU1NkZFXHU1NDA4XHU5NkM2XHU5MUNDXHU5NzYyXHVGRjBDXHU1MjE5XHU0RjE4XHU1MTQ4XHU1MkEwXHU4RjdEXHU1OTI3XHU1NkZFXHU1NDA4XHU5NkM2XHVGRjBDXHU4MDBDXHU0RTBEXHU2NjJGXHU1QzBGXHU1NkZFXHJcbiAgICAgICAgTGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcclxuICAgICAgICAgICAgXCJmaWxlY29uZmlnLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Db25maWdMb2FkZWQoKSB7XHJcbiAgICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcclxuICAgICAgICBDb25maWdbXCJjdXN0b21SZW5kZXJJRFwiXSA9IFtdO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuaW5pdCgpO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3QuaW5pdChDb25maWdHYW1lLmJhc2VVcmwpO1xyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwub24oRXZlbnRNYXBzLmxvZ2luX2dhbWUsIHRoaXMsIHRoaXMubG9naW5HYW1lKTtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci51c2VBdWRpb011c2ljID0gZmFsc2U7XHJcbiAgICAgICAgQXBwQ29yZS5saXN0ZW5BcHBGdW5jdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBWaWV3TWFuYWdlci5pbnN0LmluaXQoKTtcclxuXHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5vcGVuKFJlcy52aWV3cy5Mb2dpblZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRHYW1lRGF0YShkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAuY2xvc2VJbWFnZSwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5WaWV3LnNldExvYWRpbmdQYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9cdTU0MEVcdTY3MUZcdTRGMThcdTUzMTZcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS5WaWV3LnNob3dMb2FkaW5nUGFnZShudWxsLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSg5OTk5OTk5OTk5OTk5OTkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5HYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5HYW1lKCkge1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIFJlcy5zY2VuZXMsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlcy5zY2VuZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhlKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheU11c2ljKFJlcy5hdWRpb3MuQkdNLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSgxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCBlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEdhbWVEYXRhKGQ6IE5ldEluaXQpIHt9XHJcbn1cclxuLy9cdTZGQzBcdTZEM0JcdTU0MkZcdTUyQThcdTdDN0JcclxubmV3IE1haW4oKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLE1BQVc7QUFBWCxZQUFXLFlBQVg7QUFFSCxrQ0FBZ0I7QUFHaEIsaUNBQWU7QUFHZixpQ0FBZTtBQUdmLGtDQUFnQjtBQUdoQiwrQkFBYTtBQUViLDhCQUFZO0FBRVosZ0NBQWM7QUFFZCxxQ0FBbUI7QUFzQm5CLG9DQUFrQjtBQUVsQix1Q0FBcUI7QUFFckIsbUNBQWlCO0FBRWpCLGdDQUFjO0FBRWQsOEJBQVk7QUFBQSxLQWxERTtBQXdEWCxNQUFXO0FBQVgsWUFBVyxjQUFYO0FBRUgseUJBQUs7QUFFTCxpQ0FBYTtBQUViLDhCQUFVO0FBRVYscUNBQWlCO0FBRWpCLDhCQUFVO0FBRVYsaUNBQWE7QUFFYix1Q0FBbUI7QUFFbkIsdUNBQW1CO0FBRW5CLHNDQUFrQjtBQUVsQixtQ0FBZTtBQUVmLGlDQUFhO0FBRWIscUNBQWlCO0FBQUEsS0F4Qkg7OztBQ3REVixNQUFLO0FBQUwsWUFBSyxRQUFMO0FBR0EsMEJBQVk7QUFFWiw0QkFBYztBQUVkLGdDQUFrQjtBQUVsQixpQ0FBbUI7QUFFbkIsZ0NBQWtCO0FBRWxCLGtDQUFvQjtBQUVwQiw0QkFBYztBQUVkLDBCQUFZO0FBRVoseUJBQVc7QUFFWCwwQkFBWTtBQUVaLDZCQUFlO0FBRWYseUJBQVc7QUFFWCx5QkFBVztBQUVYLDBCQUFZO0FBRVoseUJBQVc7QUFFWCw0QkFBYztBQUVkLHlCQUFXO0FBRVgsK0JBQWlCO0FBRWpCLDJCQUFhO0FBRWIsNEJBQWM7QUFFZCx5QkFBVztBQUVYLDhCQUFnQjtBQUFBLEtBN0NYO0FBZ0RMLE1BQUs7QUFBTCxZQUFLLFNBQUw7QUFHQSwwQkFBVztBQUVYLDZCQUFjO0FBRWQseUJBQVU7QUFFViw4QkFBZTtBQUVmLDZCQUFjO0FBRWQsOEJBQWU7QUFFZixxQkFBTTtBQUFBLEtBZkQ7QUFxQkwsTUFBTSxTQUFTO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0c7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQU1aLE1BQU0sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBO0FBR0osTUFBTyxjQUFROzs7QUM3SmYsTUFBTSxjQUFjLElBQUksS0FBSztBQUt0QixNQUFNLGFBQXdELElBQUk7QUFHbEUsbUJBQWlCLE1BQWM7QUFDbEMsV0FBTyxDQUFDLFFBQWEsYUFBcUIsZUFBbUM7QUFDekUsVUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTO0FBQ3pCLG1CQUFXLElBQUksUUFBUTtBQUFBO0FBRTNCLGlCQUFXLElBQUksUUFBUSxLQUFLLEVBQUUsS0FBSyxNQUFNLElBQUksV0FBVztBQUFBO0FBQUE7QUFPekQsTUFBTSxnQkFBb0MsSUFBSTtBQUM5QyxzQkFBb0IsUUFBYSxhQUFxQjtBQUd6RCxRQUFJLENBQUMsY0FBYyxJQUFJLFNBQVM7QUFDNUIsb0JBQWMsSUFBSSxRQUFRO0FBQUE7QUFFOUIsa0JBQWMsSUFBSSxRQUFRLEtBQUs7QUFBQTtBQUluQyxNQUFPLHNCQUFROzs7QUNsQ2YsTUFBTSxVQUFnQyxJQUFJO0FBRTFDLGdDQUFrRDtBQUFBLElBQWxELGNBRkE7QUFHWSx1QkFBK0MsSUFBSTtBQUFBO0FBQUEsSUFPM0QsTUFBb0IsS0FBUSxRQUFjO0FBQ3RDLFVBQUksQ0FBQyxRQUFRLElBQUksU0FBUztBQUN0QixnQkFBUSxJQUFJLFFBQVE7QUFBQTtBQUd4QixVQUFJLFdBQVcsS0FBSztBQUNwQixVQUFJLENBQUMsU0FBUyxJQUFJLE1BQU07QUFDcEIsaUJBQVMsSUFBSSxLQUFLLElBQUk7QUFBQTtBQVExQixZQUFNLFVBQVUsQ0FBc0IsS0FBbUIsU0FBbUI7QUFDeEUsWUFBSSxPQUFPLFNBQVMsSUFBSTtBQUN4QixZQUFJLENBQUMsS0FBSyxJQUFJLE1BQU07QUFDaEIsZUFBSyxJQUFJLEtBQUs7QUFDZCxjQUFJLElBQUksTUFBTSxRQUFRLFFBQVc7QUFDN0IsZ0JBQUksTUFBTSxPQUFPLElBQUk7QUFDckIsbUJBQU8sZUFBZSxLQUFLLEtBQUs7QUFBQSxjQUM1QixjQUFjO0FBQUEsY0FDZCxZQUFZO0FBQUEsY0FDWixLQUFLLFNBQVUsR0FBRztBQUNkLHFCQUFLLE1BQU0sT0FBTztBQUNsQixxQkFBSyxJQUFJLEtBQUssUUFBUSxDQUFDLE1BQU07QUFDekIsb0JBQUU7QUFBQTtBQUFBO0FBQUEsY0FHVixLQUFLLFdBQVk7QUFDYix1QkFBTyxLQUFLLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1sQyxhQUFLLElBQUksS0FBSyxLQUFLO0FBQ25CLGdCQUFRLElBQUksUUFBUSxLQUFLO0FBQ3pCLGFBQUssSUFBSTtBQUNULGVBQU8sRUFBRSxLQUFLO0FBQUE7QUFHbEIsYUFBTyxFQUFFLEtBQUs7QUFBQTtBQUFBLElBUWxCLGVBQWUsUUFBYyxNQUFXLE1BQU07QUE3RGxEO0FBOERRLG9CQUFRLElBQUksWUFBWixtQkFBcUIsUUFBUSxDQUFDLE1BQU07QUE5RDVDO0FBK0RZLFlBQUksS0FBSztBQUNMLHNCQUFLLGNBQUwsb0JBQWdCLElBQUksS0FBSyxRQUFRLENBQUMsT0FBTztBQUNyQyxnQkFBSSxVQUFVLEdBQUcsUUFBUTtBQUN6QixnQkFBSSxVQUFVO0FBQUksaUJBQUcsT0FBTyxTQUFTO0FBQUE7QUFBQSxlQUV0QztBQUNILHFCQUFLLGNBQUwsbUJBQWdCLFFBQVEsQ0FBQyxNQUFNO0FBQzNCLGNBQUUsUUFBUSxDQUFDLE9BQU87QUFDZCxrQkFBSSxVQUFVLEdBQUcsUUFBUTtBQUN6QixrQkFBSSxVQUFVO0FBQUksbUJBQUcsT0FBTyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVzdELE1BQU8sNkJBQVEsSUFBSTs7O0FDN0VuQixpQ0FBd0MsS0FBSyxPQUFPO0FBQUEsSUFDaEQsY0FBYztBQUNWO0FBRUEsVUFBSSxZQUFZLFdBQVcsSUFBSSxLQUFLLFlBQVk7QUFDaEQsNkNBQVcsUUFBUSxDQUFDLE1BQU07QUFDdEIsNEJBQVksR0FBRyxFQUFFLEtBQUssTUFBTSxFQUFFO0FBQUE7QUFBQTtBQUFBLElBUXRDLFVBQVU7QUFwQmQ7QUFzQlEsMEJBQWMsSUFBSSxLQUFLLFlBQVksZUFBbkMsbUJBQStDLFFBQVEsQ0FBQyxNQUFNO0FBQzFELGFBQUssS0FBSyxLQUFLLE1BQU0sZUFBZTtBQUFBO0FBRXhDLFdBQUs7QUFBQTtBQUFBLElBUVQsU0FBUyxHQUFHO0FBQUE7QUFBQSxJQU1aLFlBQVk7QUFBQTtBQUFBLElBTVosV0FBVztBQUNQLFdBQUs7QUFBQTtBQUFBLElBT1QsYUFBYTtBQUFBO0FBQUEsSUFNYixVQUFVO0FBQ04sV0FBSztBQUFBO0FBQUEsSUFNVCxZQUFZO0FBQUE7QUFBQSxJQU1aLFdBQVc7QUFDUCxXQUFLO0FBQUE7QUFBQSxJQU9ULGFBQWE7QUFBQTtBQUFBLElBTWIsWUFBWTtBQUNSLFdBQUs7QUFBQTtBQUFBLElBT1QsY0FBYztBQUFBO0FBQUEsSUFNZCxZQUFZO0FBQ1IsMEJBQVksYUFBYTtBQUN6QixXQUFLO0FBQ0wsV0FBSyxNQUFNLEtBQUssR0FBRyxNQUFNLE1BQU07QUFFM0IsbUNBQW1CLGVBQWU7QUFFbEMsWUFBSSxPQUFPLE9BQU8sb0JBQW9CO0FBQ3RDLGlCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSztBQUN6QyxlQUFLLEtBQUssTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUzVCLGNBQWM7QUFBQTtBQUFBOzs7QUNuSGxCLGtDQUF5QyxXQUFXO0FBQUEsSUFBcEQsY0FIQTtBQUdBO0FBRVcsZ0JBQWlCO0FBRWpCLHFCQUFzQjtBQU1yQix1QkFBMEI7QUFBQTtBQUFBLElBS2xDLFNBQVM7QUFBQTtBQUFBLElBSVQsVUFBVTtBQUFBO0FBQUEsSUFFVixXQUFpQjtBQUNiLFVBQUksU0FBUyxLQUFLO0FBRWxCLFdBQUssR0FBRyxRQUFRO0FBRWhCLFdBQUssVUFBVSxLQUNYLEtBQUssTUFBTSxHQUNQLEtBQUssSUFDTCxFQUFFLE9BQU8sUUFDVCxLQUNBLE1BQ0EsS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxVQUN4QyxHQUNBLE9BQ0E7QUFJUixjQUFRLEtBQUs7QUFBQSxhQUNKO0FBQ0QsZUFBSyxRQUFRLE1BQU0sR0FBRztBQUN0QixlQUFLLFVBQVUsS0FDWCxLQUFLLE1BQU0sS0FDUCxLQUFLLFNBQ0wsRUFBRSxHQUFHLEtBQUssTUFBTSxRQUFRLEdBQUcsR0FBRyxLQUFLLE1BQU0sU0FBUyxHQUFHLFFBQVEsR0FBRyxRQUFRLEtBQ3hFLEtBQ0EsS0FBSyxLQUFLLFNBQ1YsS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxVQUN4QyxHQUNBLE9BQ0E7QUFHUjtBQUFBO0FBRUEsZUFBSyxRQUFRLFNBQVMsQ0FBQyxLQUFLLFFBQVE7QUFDcEMsZUFBSyxVQUFVLEtBQ1gsS0FBSyxNQUFNLEdBQ1AsS0FBSyxTQUNMLEVBQUUsUUFBUSxLQUNWLEtBQ0EsS0FBSyxLQUFLLFNBQ1YsS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxVQUN4QyxHQUNBLE9BQ0E7QUFHUjtBQUFBO0FBQUE7QUFBQSxJQUlaLFlBQVk7QUFDUixVQUFJLFNBQVMsS0FBSztBQUNsQixhQUFPLElBQUksUUFBUSxDQUFDLFlBQVk7QUFDNUIsYUFBSyxVQUFVLEtBQ1gsS0FBSyxNQUFNLEdBQ1AsS0FBSyxJQUNMLEVBQUUsT0FBTyxLQUNULEtBQ0EsTUFDQSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLFVBQ3hDLEdBQ0EsT0FDQTtBQUdSLGdCQUFRLEtBQUs7QUFBQSxlQUNKO0FBQ0QsaUJBQUssVUFBVSxLQUNYLEtBQUssTUFBTSxHQUNQLEtBQUssU0FDTDtBQUFBLGNBQ0ksR0FBRyxLQUFLLE1BQU0sUUFBUTtBQUFBLGNBQ3RCLEdBQUcsS0FBSyxNQUFNLFNBQVM7QUFBQSxjQUN2QixRQUFRO0FBQUEsY0FDUixRQUFRO0FBQUEsY0FDUixPQUFPO0FBQUEsZUFFWCxLQUNBLE1BQ0EsSUFBSSxLQUFLLFFBQ0wsTUFDQSxNQUFNO0FBQ0YsbUJBQUs7QUFDTCxzQkFBUTtBQUFBLGVBRVosQ0FBQyxVQUdMLEdBQ0EsT0FDQTtBQUdSO0FBQUE7QUFFQSxpQkFBSyxVQUFVLEtBQ1gsS0FBSyxNQUFNLEdBQ1AsS0FBSyxTQUNMLEVBQUUsUUFBUSxDQUFDLEtBQUssUUFBUSxVQUN4QixLQUNBLE1BQ0EsSUFBSSxLQUFLLFFBQ0wsTUFDQSxNQUFNO0FBQ0YsbUJBQUs7QUFDTCxzQkFBUTtBQUFBLGVBRVosQ0FBQyxVQVdMLEdBQ0EsT0FDQTtBQUdSO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLaEIsWUFBa0I7QUFDZCxXQUFLLFVBQVUsUUFBUSxDQUFDLE1BQU07QUFDMUIsYUFBSyxNQUFNLE1BQU07QUFBQTtBQUVyQixXQUFLLFVBQVUsU0FBUztBQUFBO0FBQUE7OztBQzNKaEMsTUFBTSxlQUE4QyxJQUFJO0FBS3hELE1BQUksYUFBcUI7QUFLbEIsb0JBQWtCLFFBQWEsS0FBYTtBQUMvQyxRQUFJLENBQUMsYUFBYSxJQUFJLE9BQU8saUJBQWlCO0FBQzFDO0FBQ0EsYUFBTyxpQkFBaUI7QUFDeEIsbUJBQWEsSUFBSSxZQUFZLElBQUk7QUFBQTtBQUVyQyxXQUFPLE9BQU8sYUFBYSxJQUFJO0FBQUE7OztBQ1luQyxNQUFNLFdBQStDO0FBSzlDLDBCQUFrQjtBQUFBLElBSXJCLFdBQVc7QUFDUCxlQUFTLFFBQVEsQ0FBQyxNQUFNO0FBQ3BCLFVBQUUsS0FBSyxjQUFjLEtBQUssUUFBUSxRQUFRLENBQUMsTUFBTTtBQUU3QyxlQUFLLE1BQU0sU0FBUztBQUNwQixZQUFFO0FBQUE7QUFFTixhQUFLLGFBQWEsRUFBRSxLQUFLLEtBQUs7QUFDOUIsVUFBRSxLQUFLLFFBQVE7QUFBQTtBQUVuQixlQUFTLFNBQVM7QUFBQTtBQUFBLElBUXRCLEtBQ0ksS0FDQSxPQUFxQjtBQUFBLE1BQ2pCLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxNQUNmLGVBQWU7QUFBQSxPQUVmO0FBQ0osVUFBSSxDQUFDLEtBQUs7QUFDTixnQkFBUSxLQUFLO0FBQ2I7QUFBQTtBQUdKLFVBQUksS0FBSyxVQUFVO0FBQ2YsYUFBSyxLQUFLLGdCQUFnQixNQUFNLEtBQUs7QUFDckMsWUFBSSxRQUFRLFlBQUksTUFBTSxXQUFXO0FBQzdCLGVBQUssTUFBTSxVQUFVLEdBQUcsTUFBTSxNQUFNO0FBQ2hDLGlCQUFLLEtBQUssZ0JBQWdCLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFLM0MsV0FBSyxhQUFhO0FBQ2xCLFdBQUssS0FBSyxLQUNOLEtBQ0EsS0FBSyxZQUNMLEtBQUssTUFDTCxLQUFLLFFBQVEsT0FBTyxNQUFNLENBQUMsTUFBaUI7QUFDeEMsWUFBSSxPQUFPLFlBQUksTUFBTTtBQUFXLG1CQUFTLEtBQUssRUFBRSxLQUFVLE1BQU07QUFFaEUsWUFBSSxVQUFVLEVBQUUsY0FBYyxLQUFLO0FBQ25DLFlBQUksU0FBUztBQUNULGtCQUFRLFFBQVEsQ0FBQyxPQUFNLEdBQUUsV0FBVyxHQUFFLFlBQVksR0FBRSxTQUFTLEtBQUs7QUFBQTtBQUV0RSxhQUFLLFlBQVksS0FBSyxTQUFTO0FBQy9CLGdCQUFRLElBQ0osaUJBQWlCLElBQUksTUFBTSxhQUFhLE9BQ3hDLDBEQUNBO0FBQUEsVUFHUixLQUFLO0FBQUE7QUFBQSxJQVVQLE1BQ0YsSUFJRjtBQUFBLGlEQUpFLEtBQ0EsTUFBZSxPQUNmLFVBQW1CLE9BQ25CLFNBQXVELGFBQ3pEO0FBRUUsa0JBQVU7QUFFVixZQUFJO0FBQ0osaUJBQVMsSUFBSSxTQUFTLFNBQVMsR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQyxjQUFJLFFBQVEsU0FBUyxHQUFHLEtBQUs7QUFDekIsZ0JBQUksSUFBSSxTQUFTO0FBQ2pCLHFCQUFTLE9BQU8sR0FBRztBQUVuQixtQkFBTyxFQUFFLEtBQUssYUFBYTtBQUMzQixnQkFBSSxNQUFNO0FBQ04sbUJBQUssWUFBWSxLQUFLLE1BQU07QUFDeEIsb0JBQUksU0FBUztBQUNULG9CQUFFLEtBQUssUUFBUTtBQUNmLHVCQUFLLGFBQWEsS0FBSztBQUFBLHVCQUNwQjtBQUNILG9CQUFFLEtBQUs7QUFDUCx1QkFBSyxhQUFhO0FBQUE7QUFBQTtBQUFBLG1CQUd2QjtBQUNILGtCQUFJLFNBQVM7QUFDVCxrQkFBRSxLQUFLLFFBQVE7QUFDZixxQkFBSyxhQUFhLEtBQUs7QUFBQSxxQkFDcEI7QUFDSCxrQkFBRSxLQUFLO0FBQ1AscUJBQUssYUFBYTtBQUFBO0FBQUE7QUFLMUIsZ0JBQUksUUFBUSxZQUFJLE1BQU07QUFBVTtBQUVoQyxnQkFBSSxDQUFDO0FBQUs7QUFBQTtBQUFBO0FBS2xCLFlBQUksQ0FBQyxTQUFTO0FBQVE7QUFDdEIsWUFBSSxXQUFXO0FBQ2YsaUJBQVMsSUFBSSxTQUFTLFNBQVMsR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQyxjQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssUUFBUTtBQUMxQjtBQUFBO0FBQUE7QUFJUixZQUFJLGFBQWEsU0FBUyxRQUFRO0FBQzlCLG1CQUFTLFNBQVM7QUFDbEIsZUFBSyxLQUFLLFlBQUksTUFBTTtBQUFBO0FBR3hCLGdCQUFRLElBQUk7QUFBQTtBQUFBO0FBQUEsSUFHUixhQUFhLEtBQWEsVUFBbUIsT0FBTztBQUN4RCxjQUFRLElBQ0osVUFBVSxVQUFVLFlBQVksZUFBZSxJQUFJLE1BQU0sYUFBYSxPQUN0RSwwREFDQTtBQUFBO0FBQUEsSUFJUixTQUFTLE1BQW9CO0FBQ3pCLFdBQUssS0FBSyxZQUFJLE1BQU0sVUFBVSxFQUFFLE1BQU07QUFBQTtBQUFBLElBTTFDLGdCQUFnQjtBQUNaLGVBQVMsU0FBUztBQUFBO0FBQUEsSUFRdEIsWUFBWSxNQUFlLE1BQWlCO0FBQ3hDLFVBQUksTUFBTTtBQUNOLGFBQUssS0FBSyxZQUFJLE1BQU0sVUFBVTtBQUFBLFVBQzFCLE1BQU07QUFBQSxZQUNGLE1BQU0sQ0FBQyxNQUFnQjtBQUNuQixtQkFBSyxjQUFjO0FBQ25CLGdCQUFFLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUlqQjtBQUNILFlBQUksS0FBSyxhQUFhO0FBQ2xCLGVBQUssWUFBWSxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4SzNCO0FBQUEsSUFETjtBQUFBLEtBREUsYUFFSTs7O0FDdENKLE1BQVc7QUFBWCxZQUFXLFlBQVg7QUFFSCx5QkFBTztBQUVQLDJCQUFTO0FBRVQsMEJBQVE7QUFBQSxLQU5NO0FBWWxCLE1BQU8scUJBQVE7QUFBQSxJQUVYLFdBQVc7QUFBQSxJQUVYLFFBQVE7QUFBQSxJQUVSLHVCQUF1QjtBQUFBLElBRXZCLFVBQVU7QUFBQSxJQUVWLG1CQUFtQjtBQUFBLElBR25CLFNBQ0ksQUFBYyxVQUFVLFNBQXhCLFVBQWdDLDBCQUEwQjtBQUFBLElBTTlELGdCQUFnQjtBQUFBLElBRWhCLFdBQVc7QUFBQSxJQUVYLGdCQUFnQjtBQUFBLElBQ2hCLFNBQVM7QUFBQTs7O0FDakJiLE1BQU0sV0FBMkMsSUFBSTtBQUtyRCxzQkFBNkI7QUFBQSxXQVdsQixlQUFlLE1BQXdEO0FBQzFFLFVBQUk7QUFDSixVQUFJLEtBQUssUUFBUSxPQUFPO0FBQUEsYUFtQmpCO0FBQ0gsZ0JBQVEsSUFBSSxLQUFLLFVBQVU7QUFHM0IsWUFBSSxPQUFPLFdBQVcsT0FBTyxRQUFRLGVBQWU7QUFDaEQsaUJBQU8sSUFBSSxRQUFRLENBQUMsWUFBWTtBQUM1QixtQkFBTyxRQUFRLGNBQWMsS0FBSyxVQUFVO0FBQzVDLG9CQUFRLElBQUksV0FBVztBQUN2QixnQkFBSSxLQUFLLFdBQVc7QUFDaEIsdUJBQVMsSUFBSSxLQUFLLFdBQVc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FvQjFDLG9CQUEwQjtBQUc3QixhQUFPLGlCQUFpQixDQUFDLE1BQTZCO0FBR2xELFlBQUksU0FBUyxJQUFJLHVCQUFHLGNBQWMsQ0FBQyxFQUFFLE1BQU07QUFDdkMsbUJBQVMsSUFBSSxFQUFFLFdBQVc7QUFBQTtBQUU5QixnQkFBUSxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBcEViLEVBRlgsUUFFVyxVQUFrQjtBQUVsQixFQUpYLFFBSVcsY0FBc0I7OztBQzdCakMsMkJBQWtDO0FBQUEsSUFDOUIsVUFDSSxLQUNBLE9BQ0EsVUFDQSxZQUNBLFdBQ0Y7QUFDRSxXQUFLLGFBQWEsVUFBVSxLQUFLLE9BQU8sVUFBVSxZQUFZO0FBQUE7QUFBQSxJQUVsRSxVQUFVLEtBQWEsUUFBUSxHQUFHLFVBQW9CLFdBQW9CO0FBQ3RFLFdBQUssYUFBYSxVQUFVLEtBQUssT0FBTyxVQUFVO0FBQUE7QUFBQSxRQUlsRCxXQUFXLE9BQU87QUFDbEIsV0FBSyxhQUFhLGFBQWE7QUFBQTtBQUFBLFFBRS9CLGFBQWE7QUFDYixhQUFPLEtBQUssYUFBYTtBQUFBO0FBQUEsUUFJekIsV0FBVyxPQUFPO0FBQ2xCLFdBQUssYUFBYSxhQUFhO0FBQUE7QUFBQSxRQUUvQixhQUFhO0FBQ2IsYUFBTyxLQUFLLGFBQWE7QUFBQTtBQUFBOzs7QUNwQmpDLE1BQU0sT0FBTztBQUFBLElBRVQsb0JBQW9CO0FBQUEsSUFFcEIsTUFBTSxZQUFZO0FBQUEsSUFFbEIsWUFBWTtBQUFBLElBRVosVUFBVTtBQUFBLElBRVYsU0FBUztBQUFBLElBRVQsWUFBWTtBQUFBLElBRVosYUFBYTtBQUFBLElBRWIsT0FBTyxJQUFJO0FBQUE7QUFHZixNQUFPLGVBQVE7OztBQ25CZixnQ0FBdUMsYUFBSyxXQUFXO0FBQUEsSUFBdkQsY0FQQTtBQU9BO0FBRVkscUJBQXNCO0FBQUE7QUFBQSxJQUU5QixXQUFXO0FBQ1AsV0FBSyxRQUFRLE9BQU8sNEJBQVEsbUJBQVc7QUFBQTtBQUFBLElBRzNDLFFBQVEsR0FBZTtBQUNuQixjQUFRLEVBQUUsT0FBTztBQUFBLGFBQ1I7QUFDRCx1QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCO0FBQUEsYUFDQztBQUVELGtCQUFRLGVBQWUsRUFBRSxLQUFLLFlBQVksa0JBQWtCLE1BQU07QUFDbEU7QUFBQSxhQUNDO0FBRUQsa0JBQVEsZUFBZSxFQUFFLEtBQUssWUFBWSxrQkFBa0IsTUFBTTtBQUNsRTtBQUFBO0FBQUE7QUFBQTs7O0FDeEJoQiw2QkFBb0MsS0FBSyxPQUFPO0FBQUEsSUFBaEQsY0FIQTtBQUdBO0FBTVkscUJBQVU7QUFFVixzQkFBbUI7QUFBQTtBQUFBLElBSzNCLFdBQWlCO0FBSWIsTUFBQyxLQUFLLE1BQXNCLGVBQWU7QUFDM0MsV0FBSyxZQUFhLEtBQUssTUFBc0I7QUFDN0MsV0FBSyxZQUFhLEtBQUssTUFBc0I7QUFBQTtBQUFBLElBR2pELFVBQVU7QUFDTixtQkFBSyxNQUFNLFVBQVUsWUFBSSxPQUFPO0FBQUE7QUFBQSxJQUdwQyxjQUFjO0FBQ1YsV0FBSyxRQUFRLEtBQUs7QUFDbEIsV0FBSyxPQUFPLEtBQUs7QUFBQTtBQUFBLElBR3JCLGFBQWE7QUFDVCxXQUFLLFFBQVEsS0FBSztBQUNsQixXQUFLLE9BQU87QUFBQTtBQUFBLElBRWhCLFlBQVk7QUFDUixXQUFLLFFBQVEsS0FBSztBQUNsQixXQUFLLE9BQU87QUFBQTtBQUFBLElBR1IsT0FBTyxPQUFlO0FBQzFCLFVBQUksQ0FBQyxLQUFLO0FBQVM7QUFDbkIsV0FBSyxNQUFNLEdBQ1AsS0FBSyxPQUNMLEVBQUUsUUFBUSxRQUFRLEtBQUssV0FBVyxRQUFRLFFBQVEsS0FBSyxhQUN2RCxLQUNBLEtBQUssS0FBSyxTQUNWLE1BQ0EsR0FDQSxPQUNBO0FBQUE7QUFBQSxJQUlBLFFBQVEsTUFBYztBQUMxQixVQUFJLENBQUM7QUFBTTtBQUNYLE1BQUMsS0FBSyxNQUFxQixPQUFPO0FBQUE7QUFBQSxJQUd0QyxZQUFrQjtBQUFBO0FBQUE7OztBQzVEdEIsTUFBTSxZQUFZO0FBQUEsSUFDZCxTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFHUCxPQUFPO0FBQUEsSUFFUCxPQUFPO0FBQUEsSUFFUCxTQUFTO0FBQUE7QUFNYixrQ0FBMEI7QUFBQSxJQUExQixjQWpCQTtBQWtCWSx1QkFBWTtBQUFBO0FBQUEsSUFLcEIsT0FBTztBQUNILFdBQUssWUFBWSxLQUFLLGFBQWEsUUFBUSxtQkFBVyxhQUFhO0FBQUE7QUFBQSxJQUl2RSxVQUFVO0FBQ04sYUFBTyxLQUFLO0FBQUE7QUFBQSxJQUloQixRQUE0QyxLQUFVLE1BQTZCO0FBQy9FLFdBQUssVUFBVSxPQUFPO0FBQ3RCLFdBQUssYUFBYSxRQUFRLG1CQUFXLFVBQVUsS0FBSztBQUFBO0FBQUEsSUFHeEQsUUFBUTtBQUNKLFdBQUssYUFBYSxRQUFRLG1CQUFXLFVBQVUsRUFBRSxTQUFTLEtBQUssVUFBVTtBQUN6RSxXQUFLLFlBQVk7QUFBQSxRQUNiLFNBQVM7QUFBQSxRQUNULE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFNBQVMsS0FBSyxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBS3BDLE1BQU8sOEJBQVEsSUFBSTs7O0FDakRKLE1BQU0sUUFBUSxFQUFDLFFBQU8sQ0FBQyxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxHQUFFLFNBQVEsa0NBQVEsUUFBTyxrQ0FBUSxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxZQUFXLFNBQVEsSUFBRyxTQUFRLG9DQUFVLFFBQU8sb0NBQVUsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLElBQUcsU0FBUSxvQ0FBVSxRQUFPLG9DQUFVLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxHQUFFLFNBQVEsdUJBQU8sUUFBTyx1QkFBTyxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxXQUFVLFNBQVEsR0FBRSxTQUFRLG1DQUFTLFFBQU8sbUNBQVMsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLEdBQUUsU0FBUSxtQ0FBUyxRQUFPLG1DQUFTLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxJQUFHLFNBQVEsb0NBQVUsUUFBTyxvQ0FBVSxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxZQUFXLFNBQVEsR0FBRSxTQUFRLG1DQUFTLFFBQU8sbUNBQVMsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsWUFBVyxTQUFRLEdBQUUsU0FBUSw0QkFBTyxRQUFPLG1DQUFTLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxHQUFFLFNBQVEsa0NBQVEsUUFBTyw0QkFBTyxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxZQUFXLFNBQVEsR0FBRSxTQUFRLDRCQUFPLFFBQU8sd0NBQVMsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLElBQUcsU0FBUSx3Q0FBUyxRQUFPLDhCQUFTLFFBQU8sU0FBTyxVQUFTLENBQUMsRUFBQyxNQUFLLE1BQUssUUFBTyxHQUFFLFVBQVMsZ0JBQWMsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsZ0JBQWMsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsZ0JBQWMsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsZ0JBQWMsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsaUJBQWUsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsaUJBQWUsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsaUJBQWUsRUFBQyxNQUFLLE1BQUssUUFBTyxLQUFJLFVBQVMsaUJBQWUsRUFBQyxNQUFLLE1BQUssUUFBTyxLQUFJLFVBQVMsa0JBQWdCLFNBQVEsQ0FBQyxFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sNEJBQTJCLGNBQWEsV0FBVSxRQUFPLGtCQUFpQixXQUFVLE9BQU0sZUFBYyxPQUFNLGVBQWMsTUFBSyxpQkFBZ0IsTUFBSyxRQUFPLG9GQUFpQixFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sNEJBQTJCLGNBQWEsV0FBVSxRQUFPLGtCQUFpQixXQUFVLE9BQU0sZUFBYyxPQUFNLGVBQWMsTUFBSyxpQkFBZ0IsTUFBSyxRQUFPLG9GQUFpQixFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sNEJBQTJCLGNBQWEsV0FBVSxRQUFPLGtCQUFpQixXQUFVLE9BQU0sZUFBYyxPQUFNLGVBQWMsTUFBSyxpQkFBZ0IsTUFBSyxRQUFPLG9GQUFpQixFQUFDLE1BQUssTUFBSyxRQUFPLHNCQUFNLFFBQU8sNEJBQTJCLGNBQWEsV0FBVSxRQUFPLGtCQUFpQixXQUFVLE9BQU0sZUFBYyxPQUFNLGVBQWMsYUFBWSxpQkFBZ0IsaUJBQWdCLFFBQU8sb0ZBQWlCLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyw0QkFBMkIsY0FBYSxXQUFVLFFBQU8sa0JBQWlCLFdBQVUsT0FBTSxlQUFjLE9BQU0sZUFBYyxhQUFZLGlCQUFnQixpQkFBZ0IsUUFBTyxvRkFBaUIsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLDRCQUEyQixjQUFhLFdBQVUsUUFBTyxrQkFBaUIsV0FBVSxPQUFNLGVBQWMsT0FBTSxlQUFjLGFBQVksaUJBQWdCLGlCQUFnQixRQUFPLG9GQUFpQixFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sNEJBQTJCLGNBQWEsWUFBVyxRQUFPLG1CQUFrQixXQUFVLE9BQU0sZUFBYyxPQUFNLGVBQWMsYUFBWSxpQkFBZ0IsaUJBQWdCLFFBQU8sb0ZBQWlCLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyw0QkFBMkIsY0FBYSxZQUFXLFFBQU8sbUJBQWtCLFdBQVUsT0FBTSxlQUFjLE9BQU0sZUFBYyxhQUFZLGlCQUFnQixpQkFBZ0IsUUFBTyxvRkFBaUIsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLDRCQUEyQixjQUFhLFlBQVcsUUFBTyxtQkFBa0IsV0FBVSxPQUFNLGVBQWMsT0FBTSxlQUFjLGFBQVksaUJBQWdCLGlCQUFnQixRQUFPLG9GQUFpQixFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sNEJBQTJCLGNBQWEsWUFBVyxRQUFPLG1CQUFrQixXQUFVLE9BQU0sZUFBYyxPQUFNLGVBQWMsYUFBWSxpQkFBZ0IsaUJBQWdCLFFBQU8sb0ZBQWlCLEVBQUMsTUFBSyxNQUFLLFFBQU8sc0JBQU0sUUFBTyw0QkFBMkIsY0FBYSxZQUFXLFFBQU8sbUJBQWtCLFdBQVUsT0FBTSxlQUFjLE9BQU0sZUFBYyxhQUFZLGlCQUFnQixpQkFBZ0IsUUFBTyxvRkFBaUIsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLDRCQUEyQixjQUFhLFlBQVcsUUFBTyxtQkFBa0IsV0FBVSxPQUFNLGVBQWMsT0FBTSxlQUFjLGFBQVksaUJBQWdCLGlCQUFnQixRQUFPLG9GQUFpQixFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sNEJBQTJCLGNBQWEsWUFBVyxRQUFPLG1CQUFrQixXQUFVLE9BQU0sZUFBYyxRQUFPLGVBQWMsYUFBWSxpQkFBZ0IsaUJBQWdCLFFBQU8sb0ZBQWlCLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyw0QkFBMkIsY0FBYSxZQUFXLFFBQU8sbUJBQWtCLFdBQVUsT0FBTSxlQUFjLFFBQU8sZUFBYyxhQUFZLGlCQUFnQixpQkFBZ0IsUUFBTyxvRkFBaUIsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLDRCQUEyQixjQUFhLFlBQVcsUUFBTyxtQkFBa0IsV0FBVSxPQUFNLGVBQWMsUUFBTyxlQUFjLGFBQVksaUJBQWdCLGlCQUFnQixRQUFPLHFGQUFrQixPQUFNLENBQUMsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLHlCQUF3QixnQkFBZSxLQUFJLG9CQUFtQixJQUFHLFFBQU8sYUFBWSxRQUFPLHdFQUFnQixhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTywwREFBWSxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTyx3Q0FBUyxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTyxrQ0FBUSxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sc0JBQU0sUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTyxrQ0FBUSxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sc0JBQU0sUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTyxpRUFBYyxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTyxvREFBVyxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTywwREFBWSxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGNBQWEsUUFBTyx3Q0FBUyxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGNBQWEsUUFBTyxzRUFBYyxhQUFZLElBQUcsV0FBVSxPQUFLLFNBQVEsQ0FBQyxFQUFDLE1BQUssR0FBRSxjQUFhLFFBQU8sYUFBWSxZQUFVLEVBQUMsTUFBSyxHQUFFLGNBQWEsUUFBTyxhQUFZLG1CQUFpQixFQUFDLE1BQUssR0FBRSxjQUFhLFFBQU8sYUFBWSwwQkFBd0IsRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksaUNBQStCLEVBQUMsTUFBSyxHQUFFLGNBQWEsUUFBTyxhQUFZLGlDQUErQixFQUFDLE1BQUssR0FBRSxjQUFhLFFBQU8sYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxHQUFFLGNBQWEsUUFBTyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssR0FBRSxjQUFhLFFBQU8sYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsT0FBTSxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksc0NBQW9DLFFBQU8sSUFBRyxhQUFZLENBQUMsRUFBQyxNQUFLLEdBQUUsVUFBUyxVQUFTLFFBQU8sVUFBUyxRQUFPLFFBQU0sRUFBQyxNQUFL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LEtBQUs7QUFDL0IsV0FBSyxpQkFBaUI7QUFDdEIsV0FBSyxNQUFNLFVBQVU7QUFFckIsTUFBYyxVQUFVLFNBQXhCLFdBQWlDLFdBQVcsUUFBUSxLQUFLLEtBQUs7QUFHOUQsV0FBSyxnQkFBZ0IsT0FDakIsZ0JBQ0EsS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLGtCQUMvQixLQUFLLGdCQUFnQjtBQUFBO0FBQUEsSUFJN0Isa0JBQXdCO0FBRXBCLFdBQUssaUJBQWlCLE9BQ2xCLG1CQUNBLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSztBQUFBO0FBQUEsSUFJakMsaUJBQWlCO0FBQUE7QUFFbkIsZUFBTyxvQkFBb0I7QUFDM0Isb0NBQW9CO0FBQ3BCLG9CQUFZLEtBQUssS0FBSyxtQkFBVztBQUNqQyxxQkFBSyxZQUFZLEdBQUcsVUFBVSxZQUFZLE1BQU0sS0FBSztBQUNyRCxhQUFLLGFBQWEsZ0JBQWdCO0FBQ2xDLGdCQUFRO0FBSVIsY0FBTSxJQUFJLFFBQVEsQ0FBQyxZQUFZO0FBQzNCLHNCQUFZLEtBQUssS0FBSyxZQUFJLE1BQU0sV0FBVztBQUFBLFlBQ3ZDLFVBQVU7QUFBQSxZQUNWLE1BQU07QUFBQSxjQUNGLE1BQU0sQ0FBQyxNQUFNO0FBQ1QscUJBQUssYUFBYTtBQUNsQix3QkFBUTtBQUFBO0FBQUE7QUFBQSxZQUdoQixVQUFVLENBQUMsTUFBTTtBQUNiLG1CQUFLLE1BQU0sVUFBVSxHQUFHLE1BQU0sTUFBTTtBQUNoQyx3QkFBUSxlQUFlLEVBQUUsS0FBSyxZQUFZLFlBQVksTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYTVFLGFBQUs7QUFBQTtBQUFBO0FBQUEsSUFHVCxZQUFZO0FBQ1IsV0FBSyxPQUFPLEtBQ1IsWUFBSSxRQUNKLEtBQUssUUFBUSxPQUFPLE1BQU0sTUFBTTtBQUM1QixnQkFBUSxJQUFJO0FBS1oscUJBQUssTUFBTSxVQUFVLFlBQUksT0FBTyxLQUFLO0FBRXJDLGFBQUssTUFBTSxVQUFVLEdBQUcsTUFBTSxNQUFNO0FBQ2hDLGVBQUssS0FBSyxnQkFBZ0I7QUFDMUIsc0JBQVksS0FBSyxLQUFLLFdBQVc7QUFBQTtBQUFBLFVBR3pDLEtBQUssUUFBUSxPQUNULE1BQ0EsQ0FBQyxNQUFNO0FBQ0gsNEJBQVksTUFBTSxVQUFVLGVBQWU7QUFBQSxTQUUvQyxNQUNBO0FBQUE7QUFBQSxJQUtaLGFBQWEsR0FBWTtBQUFBO0FBQUE7QUExR2xCLEVBRlgsS0FFVyxpQkFBMkI7QUE2R3RDLE1BQUk7IiwKICAibmFtZXMiOiBbXQp9Cg==
