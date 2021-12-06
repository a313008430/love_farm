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
    views3["HintView"] = "scenes/views/HintView.scene";
    views3["LoginView"] = "scenes/views/LoginView.scene";
    views3["MailDescView"] = "scenes/views/MailDescView.scene";
    views3["MailView"] = "scenes/views/MailView.scene";
    views3["MainView"] = "scenes/views/MainView.scene";
    views3["OrderView"] = "scenes/views/OrderView.scene";
    views3["OverView"] = "scenes/views/OverView.scene";
    views3["SettingView"] = "scenes/views/SettingView.scene";
    views3["ShopView"] = "scenes/views/ShopView.scene";
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
    "scenes/views/ShopView.scene",
    "scenes/views/SettingView.scene",
    "scenes/views/OverView.scene",
    "scenes/views/OrderView.scene",
    "scenes/views/MainView.scene",
    "scenes/views/MailView.scene",
    "scenes/views/MailDescView.scene",
    "scenes/views/LoginView.scene",
    "scenes/views/HintView.scene",
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
  var ConfigGame_default = {
    diamondId: 1001,
    goldId: 1002,
    petDigestIntervalTime: 60,
    localKey: "love_HD_farm",
    userVitalityLimit: 10,
    baseUrl: true ? "//192.168.101.50:3000" : "http://game.ahd168.com:3000",
    ApiTypeDefault: 1,
    ApiTypeAD: 2,
    ADSpeedUpTimes: 6,
    version: "0.1.1"
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
    music: false
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
      Laya.LocalStorage.setJSON(ConfigGame_default.localKey, {});
      this.localData = { isLogin: false, token: null, sound: true, music: true };
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
              const data = JSON.parse(xmlhttp.responseText);
              if (!data.code) {
                if (ad) {
                  TaskService_default.taskAddTimes(1001);
                  TaskService_default.taskAddTimes(1012);
                }
              }
              this.completeHandler(data, resolve);
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
                  this.completeHandler(d, resolve);
                }
                this.clearOneInEventMap(xmlhttp);
                reject();
              }
              if (!xmlhttp.status) {
                this.completeHandler({
                  code: 404,
                  data: { message: "\u670D\u52A1\u5668\u672A\u54CD\u5E94\uFF0C\u8BF7\u91CD\u8BD5" },
                  uri: ""
                }, resolve);
                this.clearOneInEventMap(xmlhttp);
                reject();
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
    completeHandler(e, resolve) {
      var _a;
      if (e.code) {
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
    onOpened(list = []) {
      this.inviteList = list;
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
    onOpened(d) {
      this.friends = d.list;
      this.friendsList = this.friends;
      this.updateListData();
      this.addBox.visible = false;
      this.addBox.active = false;
      this.itemList.array = this.friendsList;
      this.isEmpty();
      this.itemList.renderHandler = new Laya.Handler(this, this.itemRender);
      this.itemList.vScrollBarSkin = null;
      this.userKey.text = `\u6211\u7684\u53CB\u60C5\u7801\uFF1A${UserInfo_default.key}`;
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
      if (data.avatar)
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
          break;
        case "del_friend":
          if (this.viewState == 3)
            break;
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
        core_default.view.open(Res_default.views.FriendsRewardView, { parm: d.list });
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
      var _a;
      this.data = d;
      if ((_a = LocalStorageService_default.getJSON()) == null ? void 0 : _a.isLogin) {
        this.login(false);
        this.loginBox.visible = false;
        this.loadBox.visible = true;
      } else {
        this.loginBox.visible = true;
        this.loadBox.visible = false;
      }
    }
    onHdAwake() {
      EventGlobal_default.on(EventMaps.load_progress, this, this.loadProgress);
      console.log("awake");
    }
    onHdEnable() {
      this.loadBarOldWidth = this.loadBar.width;
      this.loadBar.width = 0;
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
              data: {}
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
                data: {}
              });
            }
            AppCore.runAppFunction({
              uri: AppEventMap.loginSuccess,
              data: {}
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
      this.title.text = `${data.message}\u6F5C\u5165\u4E86\u4F60\u7684\u83DC\u5730`;
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
                    if (!UserInfo_default.isFirstTime) {
                      core_default.eventGlobal.event(EventMaps.update_guid_hand, [
                        true,
                        this.mainViewCom.owner.globalToLocal(this.owner.localToGlobal(new Laya.Point(300, 160))),
                        this.mainViewCom.owner
                      ]);
                    }
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
                if (!UserInfo_default.isFirstTime) {
                  UserInfo_default.isFirstTime = 1;
                }
              }).catch(() => {
                this.canClick = true;
              });
            }
          } else {
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
                  if (!UserInfo_default.isFirstTime) {
                    core_default.eventGlobal.event(EventMaps.update_guid_hand, [
                      true,
                      this.mainViewCom.owner.globalToLocal(this.owner.localToGlobal(new Laya.Point(300, 160))),
                      this.mainViewCom.owner
                    ]);
                  }
                }
              }
            });
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
        }).catch(() => {
          this.canClick = true;
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
      this.guideHand = null;
      this.figureAni = null;
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
      this.landList.sort((a2, b) => {
        return a2.fieldId - b.fieldId;
      });
      Laya.timer.frameOnce(1, this, () => {
        core_default.eventGlobal.event(EventMaps.update_field);
        this.updateHitLandAdd();
        this.updateAllStateIcon();
      });
      let a = Laya.Tween.to(this.figureAni, { x: -167, y: 435 }, 1e4);
      a.repeat = 0;
    }
    updateHitLandAdd() {
      let guidLand;
      for (let x = 0, l = this.landList.length; x < l; x++) {
        if (!this.landList[x].data) {
          this.landList[x].showIcon(true);
          break;
        } else {
          if (!UserInfo_default.isFirstTime && !guidLand) {
            guidLand = this.landList[x];
            this.updateGuidHandAttribute(true, this.topLayerOnStage.globalToLocal(guidLand.owner.localToGlobal(new Laya.Point(300, 160))), this.owner);
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
      }).key("isFirstTime", (e) => {
        var _a, _b;
        if (e) {
          (_a = this.guidAni) == null ? void 0 : _a.destroy();
          (_b = this.guideHand) == null ? void 0 : _b.destroy();
        } else {
          if (e === 0)
            this.guidHandAni();
        }
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
    openFriend() {
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.friendList
      }).then((d) => {
        this.canClick = true;
        core_default.view.open(Res_default.views.FriendsView, { parm: d });
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
    guidHandAni() {
      this.guidAni = Laya.TimeLine.to(this.guideHand, { rotation: -15 }, 400, null).to(this.guideHand, { rotation: 0 }, 400);
      this.guidAni.play(null, true);
    }
    updateGuidHandAttribute(show, pos, parent) {
      if (show) {
        this.guideHand.visible = true;
        this.guideHand.pos(pos.x, pos.y);
        if (parent) {
          parent.addChild(this.guideHand);
        } else {
          this.topLayerOnStage.addChild(this.guideHand);
        }
      } else {
        this.guideHand.visible = false;
        this.topLayerOnStage.addChild(this.guideHand);
      }
    }
  };
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
  __decorateClass([
    core_default.eventOn(EventMaps.update_guid_hand)
  ], MainView.prototype, "updateGuidHandAttribute", 1);

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
      if (!UserInfo_default.isFirstTime) {
        this.itemList.disabled = true;
        this.itemList.gray = false;
        Laya.timer.frameOnce(10, this, () => {
          core_default.eventGlobal.event(EventMaps.update_guid_hand, [
            true,
            this.owner.globalToLocal(this.itemBuyBtn.localToGlobal(new Laya.Point(300, 100)))
          ]);
        });
      }
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
          if (UserInfo_default.isFirstTime)
            ViewManager.inst.close(Res_default.views.ShopView);
          break;
        case "seed":
        case "pet":
        case "feed":
        case "bank":
          if (!UserInfo_default.isFirstTime)
            break;
          core_default.audio.playSound(Res_default.audios.button_click);
          let topBtnIndex = this.btnBoxTop.getChildIndex(e.target);
          if (this.topBtnSelectIndex != topBtnIndex) {
            this.topBtnSelectIndex = Number(topBtnIndex);
            this.updateTopBtnState();
          }
          break;
        case "buy_btn":
          if (!UserInfo_default.isFirstTime) {
            core_default.eventGlobal.event(EventMaps.update_guid_hand, [
              false,
              Laya.Point.create()
            ]);
          }
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
      if (!UserInfo_default.isFirstTime) {
        Laya.timer.frameOnce(10, this, () => {
          core_default.eventGlobal.event(EventMaps.update_guid_hand, [
            true,
            this.owner.globalToLocal(this.speedUpBtn.localToGlobal(new Laya.Point(250, 120)))
          ]);
        });
      }
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          if (UserInfo_default.isFirstTime)
            core_default.view.close(Res_default.views.SpeedUpView);
          break;
        case "speed_up":
          if (!this.canClick)
            return;
          this.canClick = false;
          if (!UserInfo_default.isFirstTime) {
            core_default.eventGlobal.event(EventMaps.update_guid_hand, [false]);
          }
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
            break;
          case 1003:
            break;
          case 1004:
            break;
          case 1005:
            break;
          case 1006:
            break;
          case 1007:
            break;
          case 1008:
            core_default.view.close(Res_default.views.TaskView);
            core_default.view.open(Res_default.views.WarehouseView);
            break;
          case 1009:
            break;
          case 1010:
            break;
          case 1011:
            break;
          case 1012:
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
      reg("view/HintView.ts", HintView);
      reg("view/LoginView.ts", LoginView);
      reg("view/MailDescView.ts", MailDescView);
      reg("view/MailView.ts", MailView);
      reg("view/MainView.ts", MainView);
      reg("components/FieldComponent.ts", FieldComponent);
      reg("view/OrderView.ts", OrderView);
      reg("view/OverView.ts", OverView);
      reg("view/SettingView.ts", SettingView);
      reg("view/ShopView.ts", ShopView);
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
      GameConfig.stat && Laya.Stat.show();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Db25maWdHYW1lLnRzIiwgIi4uLy4uL3NyYy9jb3JlL0FwcC50cyIsICIuLi8uLi9zcmMvY29yZS9BdWRpb0NvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvcmUvaW5kZXgudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQWJvdXRWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVG9vbHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9UYWJsZUFuYWx5emUudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9Vc2VySW5mby50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL05ldE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9IdHRwRGF0YUNvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9IdHRwQ29udHJvbC50cyIsICIuLi8uLi9zcmMvdmlldy9BZGRMYW5kVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9CdXlWaXRhbGl0eVZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRmllbGRMZXZlbFVwVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GcmllbmRzRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvSGludFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTG9naW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L01haWxEZXNjVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9NYWlsVmlldy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9GaWVsZENvbXBvbmVudC50cyIsICIuLi8uLi9zcmMvdmlldy9NYWluVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9PcmRlclZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvT3ZlclZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2V0dGluZ1ZpZXcudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL0ZlZWRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy92aWV3L1Nob3BWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NpZ25JblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU3BlZWRVcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvVGFza1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvV2FyZWhvdXNlVmlldy50cyIsICIuLi8uLi9zcmMvR2FtZUNvbmZpZy50cyIsICIuLi8uLi9zcmMvTWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNlx1NTQwRFx1NzlGMFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gRXZlbnRNYXBzIHtcclxuICAgIC8qKiBsb2FkIFx1NzU0Q1x1OTc2Mlx1OEZEQlx1ODg0Q1x1NjZGNFx1NjVCMCAqL1xyXG4gICAgbG9hZF9wcm9ncmVzcyA9IFwibG9hZF9wcm9ncmVzc1wiLFxyXG5cclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTU3MUZcdTU3MzAgKi9cclxuICAgIHVwZGF0ZV9maWVsZCA9IFwidXBkYXRlX2ZpZWxkXCIsXHJcblxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NEUzQlx1OTg3NVx1OEJBMlx1NTM1NVx1NjU3MFx1NjM2RSAqL1xyXG4gICAgdXBkYXRlX09yZGVyID0gXCJ1cGRhdGVfT3JkZXJcIixcclxuXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MkEwXHU5MDFGICovXHJcbiAgICBsYW5kX3NwZWVkX3VwID0gXCJsYW5kX3NwZWVkX3VwXCIsXHJcblxyXG4gICAgLyoqIFx1OEZEQlx1NTE2NVx1NkUzOFx1NjIwRiAqL1xyXG4gICAgbG9naW5fZ2FtZSA9IFwibG9naW5fZ2FtZVwiLFxyXG4gICAgLyoqIFx1OTAwMFx1NTFGQVx1NkUzOFx1NjIwRiAqL1xyXG4gICAgbG9naW5fb3V0ID0gXCJsb2dpbl9vdXRcIixcclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTRFRkJcdTUyQTEgKi9cclxuICAgIHVwZGF0ZV90YXNrID0gXCJ1cGRhdGVfdGFza1wiLFxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NjVCMFx1NjI0Qlx1NEVGQlx1NTJBMVx1NjI0QiAqL1xyXG4gICAgdXBkYXRlX2d1aWRfaGFuZCA9IFwidXBkYXRlX2d1aWRfaGFuZFwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHU1MkE4XHU3NTNCXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgIHtcclxuICAgICAgICAvL1x1OTcwMFx1ODk4MVx1OThERVx1OTFEMVx1NUUwMVx1NzY4NFx1NTNDMlx1ODAwM1x1ODI4Mlx1NzBCOVxyXG4gICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgLy9cdTg5ODFcdTk4REVcdTc2ODRcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1RTI2aWNvblx1NzY4NFx1NjU3MFx1NjM2RVxyXG4gICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksXHJcbiAgICAgICAgICAgICAgICAvL1x1NjU3MFx1OTFDRlxyXG4gICAgICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgLy9cdTg5ODFcdTk4REVcdTUzQkJcdTc2ODRcdTRGNERcdTdGNkUgMSBcdTkxRDFcdTVFMDEgMiBcdTk0QkJcdTc3RjNcclxuICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfVxyXG4gICAgICovXHJcbiAgICBwbGF5X2dldF9yZXdhcmQgPSBcInBsYXlfZ2V0X3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1NzcwQlx1NUU3Rlx1NTQ0QVx1NjRBRFx1NjUzRVx1NTk1Nlx1NTJCMVx1ODNCN1x1ODNCN1x1NUY5N1x1NTJBOFx1NzUzQiAgXHU0RjIwXHU1MTY1XHU4MjgyXHU3MEI5ICovXHJcbiAgICBwbGF5X2FkX2dldF9yZXdhcmQgPSBcInBsYXlfYWRfZ2V0X3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1NTNCQlx1NTk3RFx1NTNDQlx1NUJCNiAqL1xyXG4gICAgZ29fZnJpZW5kX2hvbWUgPSBcImdvX2ZyaWVuZF9ob21lXCIsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTRFMEVhcHBcdTRFQTRcdTRFOTJcdTRFOEJcdTRFRjZcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFwcEV2ZW50TWFwIHtcclxuICAgIC8qKiBcdTc3MEJcdTVFN0ZcdTU0NEEgKi9cclxuICAgIGFkID0gXCJhZFwiLFxyXG4gICAgLyoqIFx1NTE3M1x1OTVFRFx1NUI4OVx1NTM1M1x1NTQyRlx1NTJBOFx1OTA2RVx1N0Y2OSAqL1xyXG4gICAgY2xvc2VJbWFnZSA9IFwiY2xvc2VJbWFnZVwiLFxyXG4gICAgLyoqIFx1NUZBRVx1NEZFMVx1NzY3Qlx1NUY1NSAqL1xyXG4gICAgd3hMb2dpbiA9IFwid3hMb2dpblwiLFxyXG4gICAgLyoqIFx1NUZBRVx1NEZFMVx1NzY3Qlx1NUY1NVx1NjIxMFx1NTI5RiAqL1xyXG4gICAgd3hMb2dpblN1Y2Nlc3MgPSBcInd4TG9naW5TdWNjZXNzXCIsXHJcbiAgICAvKiogXHU1RkFFXHU0RkUxXHU1MjA2XHU0RUFCICovXHJcbiAgICB3eFNoYXJlID0gXCJ3eFNoYXJlXCIsXHJcbiAgICAvKiogXHU1M0NCXHU3NkRGXHU0RThCXHU0RUY2XHU3RURGXHU4QkExIFx1NjU3MFx1NjM2RVx1NjgzQ1x1NUYwRiB7dHlwZTpcdTVCRjlcdTVFOTRcdTg5ODFcdTdFREZcdThCQTFcdTc2ODRcdTcwQjl9ICovXHJcbiAgICBldmVudENvdW50ID0gXCJldmVudENvdW50XCIsXHJcbiAgICAvKiogXHU5NjkwXHU3OUMxXHU2NTNGXHU3QjU2ICovXHJcbiAgICBwcml2YWN5QWdyZWVtZW50ID0gXCJwcml2YWN5QWdyZWVtZW50XCIsXHJcbiAgICAvKiogXHU2NzBEXHU1MkExXHU1MzRGXHU4QkFFICovXHJcbiAgICBzZXJ2aWNlQWdyZWVtZW50ID0gXCJzZXJ2aWNlQWdyZWVtZW50XCIsXHJcbiAgICAvKiogXHU2Q0U4XHU1MThDXHU2MjEwXHU1MjlGICovXHJcbiAgICByZWdpc3RlclN1Y2Nlc3MgPSBcInJlZ2lzdGVyU3VjY2Vzc1wiLFxyXG4gICAgLyoqIFx1NzY3Qlx1NUY1NVx1NjIxMFx1NTI5RiAqL1xyXG4gICAgbG9naW5TdWNjZXNzID0gXCJMb2dpblN1Y2Nlc3NcIixcclxuICAgIC8qKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNTggKi9cclxuICAgIGNsZWFyQ2FjaGUgPSBcImNsZWFyQ2FjaGVcIixcclxuICAgIC8qKiBcdTYyNTNcdTVGMDBcdTkwNkVcdTdGNjlcdTgwQ0NcdTY2NkYgKi9cclxuICAgIHNob3dCYWNrZ3JvdW5kID0gXCJzaG93QmFja2dyb3VuZFwiLFxyXG59XHJcbiIsICIvL1x1NEVFM1x1NzgwMVx1NzUxRlx1NjIxMFx1RkYwQ1x1NEUwRFx1ODk4MVx1NjI0Qlx1NTJBOFx1NEZFRVx1NjUzOVxuXG4vKipcbiAqIFx1NzU0Q1x1OTc2Mlx1NTIxN1x1ODg2OFxuICovXG4gZXhwb3J0IGVudW0gdmlld3MgXG4gICAge1xuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0Fib3V0Vmlldy5zY2VuZSAqL1xuICAgICAgICBBYm91dFZpZXcgPSBcInNjZW5lcy92aWV3cy9BYm91dFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmUgKi9cbiAgICAgICAgQWRkTGFuZFZpZXcgPSBcInNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9CdXlWaXRhbGl0eVZpZXcuc2NlbmUgKi9cbiAgICAgICAgQnV5Vml0YWxpdHlWaWV3ID0gXCJzY2VuZXMvdmlld3MvQnV5Vml0YWxpdHlWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgRmllbGRMZXZlbFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lICovXG4gICAgICAgIEZyaWVuZHNEZXNjVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNEZXNjVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZSAqL1xuICAgICAgICBGcmllbmRzUmV3YXJkVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNSZXdhcmRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lICovXG4gICAgICAgIEZyaWVuZHNWaWV3ID0gXCJzY2VuZXMvdmlld3MvRnJpZW5kc1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmUgKi9cbiAgICAgICAgSGludFZpZXcgPSBcInNjZW5lcy92aWV3cy9IaW50Vmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9Mb2dpblZpZXcuc2NlbmUgKi9cbiAgICAgICAgTG9naW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvTG9naW5WaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haWxEZXNjVmlldy5zY2VuZSAqL1xuICAgICAgICBNYWlsRGVzY1ZpZXcgPSBcInNjZW5lcy92aWV3cy9NYWlsRGVzY1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpbFZpZXcgPSBcInNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZSAqL1xuICAgICAgICBNYWluVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZSAqL1xuICAgICAgICBPcmRlclZpZXcgPSBcInNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvT3ZlclZpZXcuc2NlbmUgKi9cbiAgICAgICAgT3ZlclZpZXcgPSBcInNjZW5lcy92aWV3cy9PdmVyVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZSAqL1xuICAgICAgICBTZXR0aW5nVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NldHRpbmdWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lICovXG4gICAgICAgIFNob3BWaWV3ID0gXCJzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZSAqL1xuICAgICAgICBTaWduSW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBTcGVlZFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NwZWVkVXBWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lICovXG4gICAgICAgIFRhc2tWaWV3ID0gXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZSAqL1xuICAgICAgICBXYXJlaG91c2VWaWV3ID0gXCJzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZVwiLCBcbiAgICB9XG5cbiBleHBvcnQgZW51bSBhdWRpb3MgXG4gICAge1xuICAgICAgICAvKiogYXVkaW8vemhvbmd6aGkubXAzICovXG4gICAgICAgIHpob25nemhpID0gXCJyZXMvYXVkaW8vemhvbmd6aGkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vdHVkaXNoZW5namkubXAzICovXG4gICAgICAgIHR1ZGlzaGVuZ2ppID0gXCJyZXMvYXVkaW8vdHVkaXNoZW5namkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vc2hvdWNhaS5tcDMgKi9cbiAgICAgICAgc2hvdWNhaSA9IFwicmVzL2F1ZGlvL3Nob3VjYWkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZ291amlhb3NoZW5nLm1wMyAqL1xuICAgICAgICBnb3VqaWFvc2hlbmcgPSBcInJlcy9hdWRpby9nb3VqaWFvc2hlbmcubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZGFrYWljYW5na3UubXAzICovXG4gICAgICAgIGRha2FpY2FuZ2t1ID0gXCJyZXMvYXVkaW8vZGFrYWljYW5na3UubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vYnV0dG9uX2NsaWNrLm1wMyAqL1xuICAgICAgICBidXR0b25fY2xpY2sgPSBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vQkdNLm1wMyAqL1xuICAgICAgICBCR00gPSBcInJlcy9hdWRpby9CR00ubXAzXCIsIFxuICAgIH1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9XYXJlaG91c2VWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU3BlZWRVcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvT3ZlclZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWlsRGVzY1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9CdXlWaXRhbGl0eVZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9BYm91dFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9NYWlsSXRlbS5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9HZXRSZXdhcmQucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvRmxvYXRSZXdhcmRJY29uLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0ZpZWxkUHJlZmFiLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvY29tcG9uZW50cy9CdXR0b24ucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9hbmkvbGFuZFVwLmFuaVwiLFxuICAgICAgICAgICAgXCJyZXMvbG9hZGluZ0JnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3dvb2R0aXRsZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZUhvdXNlQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmViZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zaGVsZi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnTWFpbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2xhbmRCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG91c2V0b3AucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9uZ2Jhb2Jhbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19mYXJtbGFuZExvZ28ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmU1LnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlNS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlNC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTQuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTMucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUzLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUyLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTEuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3ZzLnZzXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvcHMuZnNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3pob25nemhpLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vdHVkaXNoZW5namkubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9zaG91Y2FpLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZ291amlhb3NoZW5nLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZGFrYWljYW5na3UubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9CR00ubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2xvYWQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9sb2FkLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5hdGxhc1wiXTtcbiAgICBcblxuLyoqXG4gKiBcdTYyNDBcdTY3MDlcdThENDRcdTZFOTBcbiAqL1xuY29uc3QgUmVzID0ge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBzY2VuZXM6IHNjZW5lcyxcbiAgICBhdWRpb3M6IGF1ZGlvcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcztcbiIsICIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5jb25zdCBFdmVudEdsb2JhbCA9IG5ldyBMYXlhLkV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1OEJBMlx1OTYwNVx1NEU4Qlx1NEVGNlx1NzY4NFx1N0M3Qlx1NzY4NFx1NTM5Rlx1NTc4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV2ZW50Q2xhc3M6IE1hcDxhbnksIHsga2V5OiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFdmVudE9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcbiAgICAgICAgaWYgKCFFdmVudENsYXNzLmdldCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIEV2ZW50Q2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBFdmVudENsYXNzLmdldCh0YXJnZXQpLnB1c2goeyBrZXk6IG5hbWUsIGZuOiBkZXNjcmlwdG9yLnZhbHVlIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1NUM1RVx1NjAyN1x1NjdFNVx1NjI3RVx1N0VEMVx1NUI5QVx1NTQwRFx1NzlGMFx1NzY4NFx1N0M3Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJpbmROYW1lQ2xhc3M6IE1hcDxhbnksIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRCeU5hbWUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIC8vICAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG5cclxuICAgIGlmICghQmluZE5hbWVDbGFzcy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgIEJpbmROYW1lQ2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgfVxyXG4gICAgQmluZE5hbWVDbGFzcy5nZXQodGFyZ2V0KS5wdXNoKHByb3BlcnR5S2V5KTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50R2xvYmFsO1xyXG4iLCAiY29uc3QgY2FsbGVyczogTWFwPGFueSwgRnVuY3Rpb25bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG5jbGFzcyBPYnNlcnZhYmxlQ29udHJvbDxjYWxsIGV4dGVuZHMgTGF5YS5TY3JpcHQ+IHtcclxuICAgIHByaXZhdGUga2V5RXZlbnRzOiBNYXA8YW55LCBNYXA8c3RyaW5nLCBGdW5jdGlvbltdPj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNcdTVDNUVcdTYwMjdcdTUwM0NcdTUzRDhcdTUzMTZcclxuICAgICAqICBbXHU1NzI4XHU3NTRDXHU5NzYyZGVzdHJveVx1NzY4NFx1NjVGNlx1NTAxOVx1NEYxQVx1ODFFQVx1NURGMVx1NkNFOFx1OTUwMFx1NzZEMVx1NTQyQ11cclxuICAgICAqIEBwYXJhbSBPYmogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHdhdGNoPFQgZXh0ZW5kcyB7fT4oT2JqOiBULCBjYWxsZXI6IGNhbGwpIHtcclxuICAgICAgICBpZiAoIWNhbGxlcnMuaGFzKGNhbGxlcikpIHtcclxuICAgICAgICAgICAgY2FsbGVycy5zZXQoY2FsbGVyLCBbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQga2V5RXZlbnQgPSB0aGlzLmtleUV2ZW50cztcclxuICAgICAgICBpZiAoIWtleUV2ZW50LmhhcyhPYmopKSB7XHJcbiAgICAgICAgICAgIGtleUV2ZW50LnNldChPYmosIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcdTc2ODRcdTVDNUVcdTYwMjdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUM1RVx1NjAyN1xyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsIFx1NTZERVx1OEMwM1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGtleUJpbmQgPSA8S2V5IGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLZXkgJiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfb2JqID0ga2V5RXZlbnQuZ2V0KE9iaik7XHJcbiAgICAgICAgICAgIGlmICghX29iai5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgX29iai5zZXQoa2V5LCBbXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqW1wiI1wiICsga2V5XSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmpbXCIjXCIgKyBrZXldID0gT2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iaiwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1wiI1wiICsga2V5XSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb2JqLmdldChrZXkpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCIjXCIgKyBrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbGwuYmluZChjYWxsKTtcclxuICAgICAgICAgICAgX29iai5nZXQoa2V5KS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGwoT2JqW2tleV0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NEYyMFx1NTE2NVx1NzY4NGNhbGxlclx1NTIyMFx1OTY2NFx1NUY1M1x1NTI0RFx1N0VEMVx1NUI5QVx1NzY4NFx1NjI0MFx1NjcwOVx1NzY4NFx1NEU4Qlx1NEVGNiBcdTYyMTZcdTYzMDdcdTVCOUFcdTg5RTNcdTUxQjNcdTZBMjFcdTRFMkFcdTVCRjlcdThDNjFcdThEREZcdTVGNTNcdTUyNERjYWxsZXJcdTdFRDFcdTVCOUFcdTc2ODRcdTc2RDFcdTU0MkNcclxuICAgICAqIEBwYXJhbSBjYWxsZXIgXHU3NkQxXHU1NDJDXHU2NUY2XHU3RUQxXHU1QjlBXHU3Njg0XHU1NzNBXHU2NjZGXHU1QkY5XHU4QzYxXHJcbiAgICAgKiBAcGFyYW0gb2JqIFx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICByZW1vdmVCeUNhbGxlcihjYWxsZXI6IGNhbGwsIG9iajogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcik/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmdldChvYmopLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBrLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9ic2VydmFibGVDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgRXZlbnRHbG9iYWwsIHsgQmluZE5hbWVDbGFzcywgRXZlbnRDbGFzcyB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcblxyXG4vKipcclxuICogXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyaXB0IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvL0V2ZW50T25cdTg4QzVcdTk5NzBcdTU2NjhcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUFcclxuICAgICAgICBsZXQgYmluZEV2ZW50ID0gRXZlbnRDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIGJpbmRFdmVudD8uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBFdmVudEdsb2JhbC5vbihkLmtleSwgdGhpcywgZC5mbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRBd2FrZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25Bd2FrZSgpIHtcclxuICAgICAgICAvL1x1N0VEOVx1ODhDNVx1OTk3MFx1NTY2OFx1OEJCMFx1NUY1NVx1NzY4NFx1NUM1RVx1NjAyN1x1RkYwQ1x1NjdFNVx1NjI3RVx1ODI4Mlx1NzBCOVxyXG4gICAgICAgIEJpbmROYW1lQ2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2VdID0gdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uSGRBd2FrZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU0RjIwXHU1MTY1XHU1M0MyXHU2NTcwXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqIEBwYXJhbSBlXHJcbiAgICAgKi9cclxuICAgIG9uT3BlbmVkKGUpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTZGQzBcdTZEM0JcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCNjRcdTY1RjZcdTYyNDBcdTY3MDlcdTgyODJcdTcwQjlcdTU0OENcdTdFQzRcdTRFRjZcdTU3NDdcdTVERjJcdTUyMUJcdTVFRkFcdTVCOENcdTZCRDVcdUZGMENcdTZCMjFcdTY1QjlcdTZDRDVcdTUzRUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkQXdha2UoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRW5hYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRFbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NTQyRlx1NzUyOFx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1ODI4Mlx1NzBCOVx1ODhBQlx1NkRGQlx1NTJBMFx1NTIzMFx1ODIxRVx1NTNGMFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkU3RhcnRcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkU3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QjJDXHU0RTAwXHU2QjIxXHU2MjY3XHU4ODRDdXBkYXRlXHU0RTRCXHU1MjREXHU2MjY3XHU4ODRDXHVGRjBDXHU1M0VBXHU0RjFBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFN0YXJ0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFVwZGF0ZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCQ0ZcdTVFMjdcdTY2RjRcdTY1QjBcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTVDM0RcdTkxQ0ZcdTRFMERcdTg5ODFcdTU3MjhcdThGRDlcdTkxQ0NcdTUxOTlcdTU5MjdcdTVGQUFcdTczQUZcdTkwM0JcdThGOTFcdTYyMTZcdTgwMDVcdTRGN0ZcdTc1MjhnZXRDb21wb25lbnRcdTY1QjlcdTZDRDVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkVXBkYXRlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERpc2FibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGREaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTc5ODFcdTc1MjhcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTRFQ0VcdTgyODJcdTcwQjlcdTRFQ0VcdTgyMUVcdTUzRjBcdTc5RkJcdTk2NjRcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGlzYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREZXN0cm95XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25IZERlc3Ryb3koKTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NkUwNVx1OTY2NFx1OERERlx1NUY1M1x1NTI0RFx1N0M3Qlx1N0VEMVx1NUI5QVx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1ODlDMlx1NUJERlx1NjVCOVx1NkNENVxyXG4gICAgICAgICAgICBPYnNlcnZhYmxlUHJvcGVydHkucmVtb3ZlQnlDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIC8vXHU5NTAwXHU2QkMxXHU2NUY2XHU2RTA1XHU5NjY0XHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU1RjE1XHU3NTI4XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0ga2V5cy5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5c1t4XV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNEJcdTUyQThcdThDMDNcdTc1MjhcdTgyODJcdTcwQjlcdTk1MDBcdTZCQzFcdTY1RjZcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGVzdHJveSgpIHt9XHJcblxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiBcdTc1NENcdTk3NjJcdTYyNTNcdTVGMDBcdTRFRTVcdTU0MEVcdTVFMjZcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcclxuICAgIC8vICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgLy8gICovXHJcbiAgICAvLyBvbk9wZW5lZChkKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coMTExKTtcclxuICAgIC8vIH1cclxufVxyXG4iLCAiaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuXHJcbi8vY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U2hvd0FuaSBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJnLCB0aXBzOlwiXHU4MENDXHU2NjZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGJnOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb250ZW50LCB0aXBzOlwiXHU1MTg1XHU1QkI5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTphbmlUeXBlLHRpcHM6XCJcdTUyQThcdTc1M0JcdTdDN0JcdTU3OEJcIix0eXBlOkVkaXRPcHRpb24sb3B0aW9uOlwiYm90dG9tVG9TaG93LHNjYWxlU2hvd1wifSovXHJcbiAgICAvLyBcdThGRDRcdTU2REVcdTVCNTdcdTdCMjZcdTRFMzJcclxuICAgIGFuaVR5cGU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHR3ZWVuTGlzdDogTGF5YS5Ud2VlbltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9PcGVuKCkge31cclxuICAgIC8qKlxyXG4gICAgICogIFx1NTE3M1x1OTVFRFx1NjIxMFx1NTI5Rlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb0Nsb3NlKCkge31cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcblxyXG4gICAgICAgIHRoaXMuYmcuYWxwaGEgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAuNzUgfSxcclxuICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxlU2hvd1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLmZyb20oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMiwgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLCBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5ib3R0b20gPSAtdGhpcy5jb250ZW50LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJvdHRvbTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5jaXJjT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VWaWV3KCkge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY2FsZVNob3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVg6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVk6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAtdGhpcy5jb250ZW50LmhlaWdodCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi5jbGVhcihlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipcclxuICogXHU1QjlFXHU0RjhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jb25zdCBpbnN0YW5jZUxpc3Q6IE1hcDxudW1iZXIsIHsgbmV3ICgpOiB2b2lkIH0+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NzY4NGlkXHJcbiAqL1xyXG5sZXQgaW5zdGFuY2VJZDogbnVtYmVyID0gMTAwO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhbmNlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCFpbnN0YW5jZUxpc3QuaGFzKHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdKSkge1xyXG4gICAgICAgIGluc3RhbmNlSWQrKztcclxuICAgICAgICB0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSA9IGluc3RhbmNlSWQ7XHJcbiAgICAgICAgaW5zdGFuY2VMaXN0LnNldChpbnN0YW5jZUlkLCBuZXcgdGFyZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0W2tleV0gPSBpbnN0YW5jZUxpc3QuZ2V0KGluc3RhbmNlSWQpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IHsgSGludFZpZXdEYXRhIH0gZnJvbSBcInNyYy92aWV3L0hpbnRWaWV3XCI7XHJcbmltcG9ydCBPdmVyVmlldyBmcm9tIFwic3JjL3ZpZXcvT3ZlclZpZXdcIjtcclxuaW1wb3J0IFJlcywgeyB2aWV3cyB9IGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU5NzAwXHU4OTgxXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAqL1xyXG5pbnRlcmZhY2UgVmlld09wZW5QYXJtIHtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyICovXHJcbiAgICBzaG93TG9hZD86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCAqL1xyXG4gICAgc2hvd0xvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTk2OTBcdTg1Q0Zsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0IFx1OUVEOFx1OEJBNDAgKi9cclxuICAgIGhpZGVMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1MTczXHU5NUVEXHU1MTc2XHU0RUQ2XHU1NzNBXHU2NjZGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBdHJ1ZVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVx1RkYwQ1x1MzAxMFx1NkNFOFx1NjEwRlx1MzAxMVx1ODhBQlx1NTE3M1x1OTVFRFx1NzY4NFx1NTczQVx1NjY2Rlx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1OEJCRVx1N0Y2RWF1dG9EZXN0cm95QXRSZW1vdmVkPXRydWVcdUZGMENcdTUyMTlcdThENDRcdTZFOTBcdTUzRUZcdTgwRkRcdTRFMERcdTgwRkRcdTg4QUJcdTU2REVcdTY1MzZcdUZGMENcdTk3MDBcdTg5ODFcdTgxRUFcdTVERjFcdTYyNEJcdTUyQThcdTU2REVcdTY1MzZcclxuICAgICAqIHRvZG8gXHU3M0IwXHU1NzI4XHU4RkQ5XHU0RTJBXHU4QzAzXHU3NTI4XHU3Njg0XHU2NjJGXHU1RjE1XHU2NENFXHU4MUVBXHU1RTI2XHU3Njg0XHU2NUI5XHU2Q0Q1XHVGRjBDXHU2Q0ExXHU2NzA5XHU4RDcwXHU4RkQ5XHU5MUNDXHU3Njg0XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0VGXHU4MEZEXHU0RjFBXHU2NzA5XHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgKiBcdTczQjBcdTU3MjhcdTUxNjhcdTY2MkZmYWxzZSBcdTU0MEVcdTY3MUZcdTY3MDlcdTk3MDBcdTg5ODFcdTUxOERcdTRGMThcdTUzMTZcdThGRDlcdTRFMkFcdTRFMUNcdTg5N0ZcdUZGMENcdTRFMERcdTgwRkRcdTUxNzNcdTk1RURcdTUxNzZcdTVCODNcdTYyNDBcdTY3MDlcdTc1NENcdTk3NjJcdThGRDhcdTY3MkFcdTVCOUVcdTczQjBcclxuICAgICAqL1xyXG4gICAgY2xvc2VPdGhlcj86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHBhcm0/OiBhbnk7XHJcbiAgICAvKiogIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBjb21wbGV0ZT86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1NTJBMFx1OEY3RFx1OEZEQlx1NUVBNlx1NTZERVx1OEMwM1x1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcHJvZ3Jlc3M/OiBIYW5kbGVyO1xyXG59XHJcblxyXG5jb25zdCB2aWV3TWFwczogeyB1cmw6IHN0cmluZzsgdmlldzogTGF5YS5WaWV3IH1bXSA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpZXdNYW5hZ2VyIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IFZpZXdNYW5hZ2VyO1xyXG5cclxuICAgIGxvZ2luT3V0KCkge1xyXG4gICAgICAgIHZpZXdNYXBzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgdi52aWV3LmdldENvbXBvbmVudHMoTGF5YS5TY3JpcHQpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHU1NkRFXHU1OTM0XHU4OTgxXHU0RjE4XHU1MzE2XHU0RTAwXHU0RTBCXHU1MTc2XHU1QjgzXHU3NTRDXHU5NzYyXHU3Njg0XHU1MTczXHU5NUVEXHVGRjBDXHU4RkQ5XHU5MUNDXHU2NjJGXHU0RTBEXHU2NjJGXHU2NzA5XHU1NDBDXHU2ODM3XHU3Njg0XHU5NUVFXHU5ODk4XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKGUpO1xyXG4gICAgICAgICAgICAgICAgZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh2LnZpZXcudXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2MlxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcdTUzQzJcdTY1NzBcclxuICAgICAqL1xyXG4gICAgb3BlbihcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGRhdGE6IFZpZXdPcGVuUGFybSA9IHtcclxuICAgICAgICAgICAgY2xvc2VPdGhlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWREZWxheTogMTAwLFxyXG4gICAgICAgICAgICBoaWRlTG9hZERlbGF5OiAwLFxyXG4gICAgICAgIH1cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm1pc3MgcGF0aCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnNob3dMb2FkKSB7XHJcbiAgICAgICAgICAgIExheWEuVmlldy5zaG93TG9hZGluZ1BhZ2UobnVsbCwgZGF0YS5zaG93TG9hZERlbGF5KTtcclxuICAgICAgICAgICAgaWYgKHVybCAhPT0gUmVzLnZpZXdzLkxvZ2luVmlldykge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoZGF0YS5oaWRlTG9hZERlbGF5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhLmNsb3NlT3RoZXIgPSBmYWxzZTtcclxuICAgICAgICBMYXlhLlZpZXcub3BlbihcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLmNsb3NlT3RoZXIsXHJcbiAgICAgICAgICAgIGRhdGEucGFybSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoZTogTGF5YS5WaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsICE9IFJlcy52aWV3cy5Mb2dpblZpZXcpIHZpZXdNYXBzLnB1c2goeyB1cmw6IHVybCwgdmlldzogZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29uTGlzdCA9IGUuZ2V0Q29tcG9uZW50cyhMYXlhLlNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbkxpc3QuZm9yRWFjaCgoZSkgPT4gZS5lbmFibGVkICYmIGUub25PcGVuZWQgJiYgZS5vbk9wZW5lZChkYXRhLnBhcm0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGEuY29tcGxldGUgJiYgZGF0YS5jb21wbGV0ZShlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgIGAlYyA9PT4gb3BlbiAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojN2VkNmRmO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojMjJhNmIzO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YS5wcm9ncmVzc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxNzNcdTk1RURcdTg5QzZcdTU2RkVcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGFsbCBcdTU0MENcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcdTg4QUIgXHU1OTFBXHU2QjIxXHU2MjUzXHU1RjAwXHVGRjBDXHU1MTY4XHU1MjIwXHU5NjY0XHU3NTI4XHU4RkQ5XHU0RTJBXHJcbiAgICAgKiBAcGFyYW0gZGVzdHJveSBcdTk1MDBcdTZCQzEgICBUT0RPXHVGRjA4XHU5RUQ4XHU4QkE0XHU0RjFBXHU5NTAwXHU2QkMxXHU2MjQwXHU2NzA5XHU1QjUwXHU4MjgyXHU3MEI5XHVGRjBDXHU2NzJBXHU2RDRCXHU4QkQ1XHU2NjJGXHU1NDI2XHU2NzA5XHU5NUVFXHU5ODk4XHVGRjA5XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNsb3NlKFxyXG4gICAgICAgIHVybDogdmlld3MsXHJcbiAgICAgICAgYWxsOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGFuaUNvbTogdHlwZW9mIFZpZXdTaG93QW5pIHwgdHlwZW9mIEZsb2F0Vmlld1Nob3dBbmkgPSBWaWV3U2hvd0FuaVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy9UT0RPIFx1OEZEOVx1OTFDQ1x1NzNCMFx1NTcyOFx1NTE2OFx1OTBFOFx1NzUyOGRlc3Ryb3kgXHU1RjE1XHU2NENFcmVtb3ZlXHU1OTdEXHU1MENGXHU2NzA5XHU3MEI5XHU5NUVFXHU5ODk4XHVGRjBDXHU1MThEXHU5MDFBXHU4RkM3dmlldy5vcGVuXHU0RjFBXHU5MUNEXHU2NUIwXHU2Nzg0XHU1RUZBXHU3RUM0XHU0RUY2XHJcbiAgICAgICAgZGVzdHJveSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB2QW5pOiBWaWV3U2hvd0FuaTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0gdmlld01hcHNbeF0udXJsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHZpZXdNYXBzW3hdO1xyXG4gICAgICAgICAgICAgICAgdmlld01hcHMuc3BsaWNlKHgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZBbmkgPSB2LnZpZXcuZ2V0Q29tcG9uZW50KGFuaUNvbSBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZBbmkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2QW5pLmNsb3NlVmlldygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy90b2RvXHU5NzAwXHU4OTgxXHU0RjE4XHU1MzE2XHVGRjBDXHU3NTRDXHU5NzYyXHU3Njg0bWFwXHU5NzAwXHU4OTgxXHU2NTc0XHU3NDA2XHU2MjEwXHVGRjBDXHU1MTY4XHU1QzRGXHU1NDhDXHU1RjM5XHU3QTk3XHU3Njg0XHU1MzNBXHU1MjJCXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBSZXMudmlld3MuSGludFZpZXcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHU0RkREXHU4QkMxXHU1OTgyXHU2NzlDXHU1NzNBXHU2NjZGXHU1QjhDXHU1MTY4XHU2Q0ExXHU2NzA5XHU3NTRDXHU5NzYyXHU4OEFCXHU2MjUzXHU1RjAwXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1RkM1XHU2MjUzXHU1RjAwXHU0RTNCXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgaWYgKCF2aWV3TWFwcy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBsZXQgY2xvc2VMZW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAoIXZpZXdNYXBzW3hdLnZpZXcucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUxlbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VMZW4gPT09IHZpZXdNYXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLk1haW5WaWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdNYXBzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVmlld0xvZyh1cmw6IHN0cmluZywgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlYyA8PT0gJHtkZXN0cm95ID8gXCJkZXN0cm95XCIgOiBcImRpc2FibGVcIn0gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNmZjc5Nzk7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuSGludChkYXRhOiBIaW50Vmlld0RhdGEpIHtcclxuICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLkhpbnRWaWV3LCB7IHBhcm06IGRhdGEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNThcdTc1NENcdTk3NjJcclxuICAgICAqL1xyXG4gICAgY2xlYXJWaWV3TWFwcygpIHtcclxuICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3ZlclZpZXdDb206IE92ZXJWaWV3O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1MTczXHU5NUVEXHU4RkM3XHU1RUE2XHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIHNldE92ZXJWaWV3KG9wZW46IGJvb2xlYW4sIGNhbGw/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuT3ZlclZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAodjogT3ZlclZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyVmlld0NvbSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuY2xvc2UoY2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJWaWV3Q29tKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJWaWV3Q29tLm9wZW4oY2FsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTZFMzhcdTYyMEZcdTkxNERcdTdGNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjNpZCAqL1xyXG4gICAgZGlhbW9uZElkOiAxMDAxLFxyXG4gICAgLyoqIFx1OTFEMVx1NUUwMWlkICovXHJcbiAgICBnb2xkSWQ6IDEwMDIsXHJcbiAgICAvKiogXHU3MkQ3XHU3MkQ3XHU2RDg4XHU1MzE2XHU5OERGXHU3MjY5XHU5NUY0XHU5Njk0XHU2NUY2XHU5NUY0IFx1NzlEMiAqL1xyXG4gICAgcGV0RGlnZXN0SW50ZXJ2YWxUaW1lOiA2MCxcclxuICAgIC8qKiBcdTZFMzhcdTYyMEZcdTY3MkNcdTU3MzBcdTUwQThcdTVCNThrZXkgKi9cclxuICAgIGxvY2FsS2V5OiBcImxvdmVfSERfZmFybVwiLFxyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NEY1M1x1NTI5Qlx1NEUwQVx1OTY1MCAqL1xyXG4gICAgdXNlclZpdGFsaXR5TGltaXQ6IDEwLFxyXG4gICAgLyoqIFx1NTM0Rlx1OEJBRVx1NTczMFx1NTc0MCAqL1xyXG4gICAgLy8gYmFzZVVybDogXCIvLzQ3LjEwOC4xOTIuMTgxOjgwOTIvIGZhcm1cIixcclxuICAgIGJhc2VVcmw6IERFQlVHID8gXCIvLzE5Mi4xNjguMTAxLjUwOjMwMDBcIiA6IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMDAwXCIsXHJcbiAgICAvLyBiYXNlVXJsOiBERUJVRyA/IFwiLy8xOTIuMTY4LjEwMS41MDozMDAwXCIgOiBcImh0dHA6Ly9nYW1lLmFoZDE2OC5jb206MzAwMFwiLFxyXG4gICAgLy8gYmFzZVVybDogXCJodHRwOi8vZ2FtZS5haGQxNjguY29tOjMwMDBcIixcclxuICAgIC8vIHRvZG8gXHU4RkQ5XHU5MUNDXHU3Njg0SXBcdTUzRUZcdTRFRTVcdThCQkZcdTk1RUVcdTUzRUZcdTgwRkRcdTY2MkZcdTY3MDlcdTk1RUVcdTk4OThcdTc2ODRcclxuICAgIC8vIGJhc2VVcmw6IFwiLy80Ny4xMDguMTkyLjE4MTozMDAwXCIsXHJcbiAgICAvKiogYXBpXHU4QkY3XHU2QzQyXHU3QzdCXHU1NzhCIFx1OUVEOFx1OEJBNCAqL1xyXG4gICAgQXBpVHlwZURlZmF1bHQ6IDEsXHJcbiAgICAvKiogYXBpXHU4QkY3XHU2QzQyXHU3QzdCXHU1NzhCIFx1NzcwQlx1NUU3Rlx1NTQ0QSAqL1xyXG4gICAgQXBpVHlwZUFEOiAyLFxyXG4gICAgLyoqIFx1NUU3Rlx1NTQ0QVx1Njc2MVx1NEVGNiBcdTUyQTBcdTkwMUZcdTRGN0ZcdTc1MjhcdTRFODY2XHU2QjIxICovXHJcbiAgICBBRFNwZWVkVXBUaW1lczogNixcclxuICAgIHZlcnNpb246IFwiMC4xLjFcIixcclxufTtcclxuIiwgImltcG9ydCB7IEFwcEV2ZW50TWFwIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwic3RyZWFtL2NvbnN1bWVyc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNwYXRjaERhdGEge1xyXG4gICAgdXJpOiBBcHBFdmVudE1hcDtcclxuICAgIGRhdGE6IG9iamVjdDtcclxuICAgIHRpbWVzdGFtcD86IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNwYXRjaFJldHVybkRhdGEge1xyXG4gICAgLyoqIFx1NTM0Rlx1OEJBRVx1NzJCNlx1NjAwMVx1NzgwMSAwIFx1NEUzQVx1NkI2M1x1NUUzOCBcdTUxNzZcdTVCODNcdTRFM0FcdTk1MTlcdThCRUZcdTc4MDEgKi9cclxuICAgIGNvZGU6IG51bWJlcjtcclxuICAgIC8qKiBcdTUzNEZcdThCQUV1cmkgKi9cclxuICAgIHVyaTogQXBwRXZlbnRNYXA7XHJcbiAgICAvKiogXHU4RkQ0XHU1NkRFXHU1MTc3XHU0RjUzXHU3Njg0XHU2NTcwXHU2MzZFICovXHJcbiAgICBkYXRhOiBvYmplY3Q7XHJcbiAgICAvKiogXHU2ODA3XHU4QkM2ICovXHJcbiAgICB0aW1lc3RhbXA/OiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEV2ZW50TWFwOiBNYXA8c3RyaW5nIHwgbnVtYmVyLCBGdW5jdGlvbj4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcclxuICogd2ViIGFwcCBcdTRFQTRcdTRFOTJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvcmUge1xyXG4gICAgLyoqXHU4MkY5XHU2NzlDXHU3QzdCXHU1NzhCICovXHJcbiAgICBzdGF0aWMgdHlwZUlvczogbnVtYmVyID0gMTtcclxuICAgIC8qKlx1NUI4OVx1NTM1M1x1N0M3Qlx1NTc4QiAqL1xyXG4gICAgc3RhdGljIHR5cGVBbmRyb2lkOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjY3XHU4ODRDYXBwXHU0RUE0XHU0RTkyXHU2NUI5XHU2Q0Q1XHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcdTY1QjlcdTZDRDVcdTU0MERcdTc5RjBcclxuICAgICAqIEBwYXJhbSBkYXRhIFx1NEYyMFx1NTE2NVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcnVuQXBwRnVuY3Rpb24oZGF0YT86IEFwcERlc3BhdGNoRGF0YSk6IFByb21pc2U8QXBwRGVzcGF0Y2hSZXR1cm5EYXRhPiB7XHJcbiAgICAgICAgbGV0IHdlYkFwcEZ1bmN0aW9uO1xyXG4gICAgICAgIGlmIChMYXlhLkJyb3dzZXIub25JT1MpIHtcclxuICAgICAgICAgICAgLy8gd2ViQXBwRnVuY3Rpb24gPSB0aGlzLmRldGVjdGlvbkhhc0Z1bmN0aW9uKHRoaXMudHlwZUlvcywgbmFtZSk7XHJcbiAgICAgICAgICAgIC8vIGlmICh3ZWJBcHBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gaWYgKG5hbWUgPT0gdGhpcy5jbG9zZVdlYlZpZXcpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAvL1x1NTE3M1x1OTVFRHdlYnZpZXdcdTcyNzlcdTZCOEFcdTU5MDRcdTc0MDZcclxuICAgICAgICAgICAgLy8gICAgIC8vICAgICB3aW5kb3dbXCJ3ZWJraXRcIl1bXCJtZXNzYWdlSGFuZGxlcnNcIl1bdGhpcy5sZWF2ZUNoYW5uZWxdW1wicG9zdE1lc3NhZ2VcIl0oXHJcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzOiAxIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgKTsgLy9cdTcyNzlcdTZCOEFcdTU5MDRcdTc0MDZcdTk3MDBcdTg5ODFcdTUxNDhcdTkwMDBcdTUxRkFcdTk4OTFcdTkwNTNcclxuICAgICAgICAgICAgLy8gICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gd2ViQXBwRnVuY3Rpb25bJ3Bvc3RNZXNzYWdlJ10oZGF0YSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJydW4gOlwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93W1wid2Via2l0XCJdW1wibWVzc2FnZUhhbmRsZXJzXCJdW25hbWVdW1wicG9zdE1lc3NhZ2VcIl0oZGF0YSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXVtcIm1lc3NhZ2VIYW5kbGVyc1wiXVtuYW1lXVtcInBvc3RNZXNzYWdlXCJdKFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHN0YXR1czogMSB9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KHdpbmRvd1tcIiRBcHBcIl0gJiYgd2luZG93W1wiJEFwcFwiXVtcIndlYlJlcXVlc3RcIl0pO1xyXG4gICAgICAgICAgICBpZiAod2luZG93W1wiJEFwcFwiXSAmJiB3aW5kb3dbXCIkQXBwXCJdW1wid2ViUmVxdWVzdFwiXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W1wiJEFwcFwiXVtcIndlYlJlcXVlc3RcIl0oSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZW5kID0+ICR7ZGF0YX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50aW1lc3RhbXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRNYXAuc2V0KGRhdGEudGltZXN0YW1wLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gd2ViQXBwRnVuY3Rpb24gPSB0aGlzLmRldGVjdGlvbkhhc0Z1bmN0aW9uKHRoaXMudHlwZUFuZHJvaWQsIG5hbWUpO1xyXG4gICAgICAgICAgICAvLyBpZiAod2ViQXBwRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3dbXCJ3ZWJSZXF1ZXN0XCJdW25hbWVdKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3dbXCJ3ZWJSZXF1ZXN0XCJdW25hbWVdKCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNhcHAgXHU2MjY3XHU4ODRDaDUgXHU2M0E1XHU1M0UzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsaXN0ZW5BcHBGdW5jdGlvbigpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NzZEMVx1NTQyQ1x1NjI0Qlx1NjczQVx1NTE3M1x1OTVFRFx1NEU4Qlx1NEVGNlx1NTRDRFx1NUU5NFxyXG5cclxuICAgICAgICB3aW5kb3dbXCJhcHBSZXNwb25zZVwiXSA9IChkOiBBcHBEZXNwYXRjaFJldHVybkRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkoZCkpO1xyXG4gICAgICAgICAgICAvLyBhbGVydChkPy50aW1lc3RhbXApO1xyXG4gICAgICAgICAgICBpZiAoRXZlbnRNYXAuaGFzKGQ/LnRpbWVzdGFtcCkgJiYgIWQuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRNYXAuZ2V0KGQudGltZXN0YW1wKShkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb0NvbnRyb2wge1xyXG4gICAgcGxheVNvdW5kKFxyXG4gICAgICAgIHVybDogc3RyaW5nLFxyXG4gICAgICAgIGxvb3BzPzogbnVtYmVyLFxyXG4gICAgICAgIGNvbXBsZXRlPzogSGFuZGxlcixcclxuICAgICAgICBzb3VuZENsYXNzPzogbmV3ICgpID0+IGFueSxcclxuICAgICAgICBzdGFydFRpbWU/OiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZCh1cmwsIGxvb3BzLCBjb21wbGV0ZSwgc291bmRDbGFzcywgc3RhcnRUaW1lKTtcclxuICAgIH1cclxuICAgIHBsYXlNdXNpYyh1cmw6IHN0cmluZywgbG9vcHMgPSAwLCBjb21wbGV0ZT86IEhhbmRsZXIsIHN0YXJ0VGltZT86IG51bWJlcikge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyh1cmwsIGxvb3BzLCBjb21wbGV0ZSwgc3RhcnRUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU2MjQwXHU2NzA5XHU5N0YzXHU2NTQ4XHVGRjA4XHU0RTBEXHU1MzA1XHU2MkVDXHU4MENDXHU2NjZGXHU5N0YzXHU0RTUwXHVGRjA5XHU2NjJGXHU1NDI2XHU5NzU5XHU5N0YzXHUzMDAyICovXHJcbiAgICBzZXQgc291bmRNdXRlZChzdGF0ZSkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnNvdW5kTXV0ZWQgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIGdldCBzb3VuZE11dGVkKCkge1xyXG4gICAgICAgIHJldHVybiBMYXlhLlNvdW5kTWFuYWdlci5zb3VuZE11dGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgwQ0NcdTY2NkZcdTk3RjNcdTRFNTBcdUZGMDhcdTRFMERcdTUzMDVcdTYyRUNcdTk3RjNcdTY1NDhcdUZGMDlcdTY2MkZcdTU0MjZcdTk3NTlcdTk3RjMgKi9cclxuICAgIHNldCBtdXNpY011dGVkKHN0YXRlKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIubXVzaWNNdXRlZCA9IHN0YXRlO1xyXG4gICAgfVxyXG4gICAgZ2V0IG11c2ljTXV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIExheWEuU291bmRNYW5hZ2VyLm11c2ljTXV0ZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBBdWRpb0NvbnRyb2wgZnJvbSBcIi4vQXVkaW9Db250cm9sXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uLCBGaW5kQnlOYW1lIH0gZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4vR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vVmlld01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IENvcmUgPSB7XHJcbiAgICAvKiogXHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU3RUQxXHU1QjlBXHU1M0VGXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2ICovXHJcbiAgICBvYnNlcnZhYmxlUHJvcGVydHk6IE9ic2VydmFibGVQcm9wZXJ0eSxcclxuICAgIC8qKiBcdTc1NENcdTk3NjJcdTdCQTFcdTc0MDZcdTU2NjggKi9cclxuICAgIHZpZXc6IFZpZXdNYW5hZ2VyLmluc3QsXHJcbiAgICAvKiogXHU1RjE1XHU2NENFXHU4MTFBXHU2NzJDXHU3RUM0XHU0RUY2ICovXHJcbiAgICBnYW1lU2NyaXB0OiBHYW1lU2NyaXB0LFxyXG4gICAgLyoqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OCAqL1xyXG4gICAgaW5zdGFuY2U6IEluc3RhbmNlLFxyXG4gICAgLyoqIFx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QSA9PiBcdTdFRDFcdTVCOUFcdTUyMzBcdTg4QzVcdTk5NzBcdTU2NjhcdTRFMEEgXHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG4gICAgZXZlbnRPbjogRXZlbnRPbixcclxuICAgIC8qKiB0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lXHU3Njg0XHU3NzAxXHU0RThCXHU1MTk5XHU2Q0Q1IFx1NTNFQVx1ODBGRFx1NjdFNVx1NjI3RVx1NEUwQlx1NEUwMFx1N0VBN1x1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuICAgIGZpbmRCeU5hbWU6IEZpbmRCeU5hbWUsXHJcbiAgICAvKiogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2ICovXHJcbiAgICBldmVudEdsb2JhbDogRXZlbnRHbG9iYWwsXHJcbiAgICAvKipcdTk3RjNcdTk4OTEgKi9cclxuICAgIGF1ZGlvOiBuZXcgQXVkaW9Db250cm9sKCksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3JlO1xyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZlcnNpb24sIHRpcHM6XCJcdTczQTlcdTVCQjZcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZlcnNpb246IExheWEuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMudmVyc2lvbi50ZXh0ID0gYFx1NzI0OFx1NjcyQ1x1NTNGN1x1RkYxQVYke0NvbmZpZ0dhbWUudmVyc2lvbn1gO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWJvdXRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidXNlcl9hZ3JlZW1lbnRcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU3NTI4XHU2MjM3XHU1MzRGXHU4QkFFXHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5zZXJ2aWNlQWdyZWVtZW50LCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJpdmFjeVwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTk2OTBcdTc5QzFcdTY1M0ZcdTdCNTZcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oeyB1cmk6IEFwcEV2ZW50TWFwLnByaXZhY3lBZ3JlZW1lbnQsIGRhdGE6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZWZhdWx0UmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZGVmYXVsdFJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkb3duUmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZG93blJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppc1NjYWxlLCB0aXBzOlwiXHU2NjJGXHU1NDI2XHU3RjI5XHU2NTNFXCIsdHlwZTpDaGVja30qL1xyXG4gICAgcHJpdmF0ZSBpc1NjYWxlID0gZmFsc2U7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2NhbGVWYWwsIHRpcHM6XCJcdTdGMjlcdTY1M0VcdTc2ODRcdTUwM0NcIix0eXBlOk51bWJlciwgZGVmYXVsdDowLjl9Ki9cclxuICAgIHByaXZhdGUgc2NhbGVWYWw6IG51bWJlciA9IDAuOTtcclxuXHJcbiAgICBwcml2YXRlIG9sZFNjYWxlWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVk6IG51bWJlcjtcclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyAodGhpcy5vd25lciBhcyBMYXlhLkJveCkuc2V0X2FuY2hvclgoMC41KTtcclxuICAgICAgICAvLyAodGhpcy5vd25lciBhcyBMYXlhLkJveCkuc2V0X2FuY2hvclkoMC41KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzU2NhbGUpO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5tb3VzZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2xkU2NhbGVYID0gKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLmdldF9zY2FsZVgoKTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWSA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZURvd24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZG93blJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkodGhpcy5zY2FsZVZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU91dCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuICAgIG9uTW91c2VVcCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFuaShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2NhbGUpIHJldHVybjtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICB7IHNjYWxlWDogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWCwgc2NhbGVZOiBzY2FsZSAqIHRoaXMub2xkU2NhbGVZIH0sXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTa2luKHNraW46IHN0cmluZykge1xyXG4gICAgICAgIGlmICghc2tpbikgcmV0dXJuO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuSW1hZ2UpLnNraW4gPSBza2luO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuXHJcbmNvbnN0IExvY2FsRGF0YSA9IHtcclxuICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgdG9rZW46IG51bGwsXHJcblxyXG4gICAgLyoqIHRydWUgXHU0RTNBXHU1MTczXHU5NUVEIGZhbHNlIFx1NEUzQVx1NjI1M1x1NUYwMCAqL1xyXG4gICAgc291bmQ6IGZhbHNlLFxyXG4gICAgLyoqIHRydWUgXHU0RTNBXHU1MTczXHU5NUVEIGZhbHNlIFx1NEUzQVx1NjI1M1x1NUYwMCAqL1xyXG4gICAgbXVzaWM6IGZhbHNlLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFx1NjcyQ1x1NTczMFx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NCBsb2NhbERhdGEgXHU1NzI4XHU4RkQ5XHU0RTJBXHU5MUNDXHU5NzYyXHU1QjlBXHU0RTQ5XHU1OTdEXHJcbiAqL1xyXG5jbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9jYWxEYXRhID0gTG9jYWxEYXRhO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbERhdGEgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXkpIHx8IExvY2FsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4M0I3XHU1M0Q2XHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBnZXRKU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4QkJFXHU3RjZFXHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBzZXRKU09OPGtleSBleHRlbmRzIGtleW9mIHR5cGVvZiBMb2NhbERhdGE+KGtleToga2V5LCBkYXRhOiB0eXBlb2YgTG9jYWxEYXRhW2tleV0pIHtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YVtrZXldID0gZGF0YTtcclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXksIHRoaXMubG9jYWxEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXksIHt9KTtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IHsgaXNMb2dpbjogZmFsc2UsIHRva2VuOiBudWxsLCBzb3VuZDogdHJ1ZSwgbXVzaWM6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExvY2FsU3RvcmFnZVNlcnZpY2UoKTtcclxuIiwgIi8qKiBcdTYyNDBcdTY3MDlcdTg4NjggKi9cclxuICAgICAgICBleHBvcnQgY29uc3QgVGFibGUgPSB7XCJ0YXNrXCI6W3tcImlkXCI6MTAwMSxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxLFwidGl0bGVcIjpcIlx1N0I3RVx1NTIzMFx1OTg4Nlx1OTRCQlx1NzdGM1wiLFwiZGVzY1wiOlwiXHU3NzBCXHU4OUM2XHU5ODkxXHU3QjdFXHU1MjMwXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDAyLFwicmV3YXJkXCI6XCIxMDAxOjEwMFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdTgzRENcdTU3MzBcdTY1QkRcdTgwQTUxMFx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4M0RDXHU1NzMwXHU1MkEwXHU5MDFGMTBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDMsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU4M0RDXHU1NzMwXHU2NTM2XHU4M0I3MTBcdTZCMjFcIixcImRlc2NcIjpcIlx1ODNEQ1x1NTczMFx1NjUzNlx1ODNCNzEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA0LFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjUsXCJ0aXRsZVwiOlwiXHU4QkJGXHU1M0NCNVx1NkIyMVwiLFwiZGVzY1wiOlwiXHU1MDc3XHU4M0RDNVx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNSxcInJld2FyZFwiOlwiMTAwMToyMFwiLFwidGltZXNcIjozLFwidGl0bGVcIjpcIlx1NTU4Mlx1NTE3Qlx1NzJEN1x1NzJENzNcdTZCMjFcIixcImRlc2NcIjpcIlx1NTU4Mlx1NTE3Qlx1NzJEN1x1NzJENzNcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDYsXCJyZXdhcmRcIjpcIjEwMDE6MjBcIixcInRpbWVzXCI6NSxcInRpdGxlXCI6XCJcdThEMkRcdTRFNzBcdTk5NzJcdTY1OTk1XHU2QjIxXCIsXCJkZXNjXCI6XCJcdThEMkRcdTRFNzBcdTk5NzJcdTY1OTk1XHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA3LFwicmV3YXJkXCI6XCIxMDAxOjIwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1OEQyRFx1NEU3MFx1NzlDRFx1NUI1MDEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdThEMkRcdTRFNzBcdTc5Q0RcdTVCNTAxMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwOCxcInJld2FyZFwiOlwiMTAwMjo1MDBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTUxRkFcdTU1MkVcdTRGNUNcdTcyNjkzXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTUxRkFcdTU1MkVcdTRGNUNcdTcyNjkzXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA5LFwicmV3YXJkXCI6XCIxMDAxOjEwMFwiLFwidGltZXNcIjo1LFwidGl0bGVcIjpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlwiLFwiZGVzY1wiOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCNVx1NEUyQVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMCxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxLFwidGl0bGVcIjpcIlx1NTIwNlx1NEVBQlx1NUY5N1x1NTk3RFx1NzkzQ1wiLFwiZGVzY1wiOlwiXHU1MjA2XHU0RUFCXHU0RTAwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDExLFwicmV3YXJkXCI6XCIxMDAyOjUwMFwiLFwidGltZXNcIjozLFwidGl0bGVcIjpcIlx1NjMwN1x1NUI5QVx1NzlDRFx1NjkwRFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU2OTBEXHU2MzA3XHU1QjlBXHU3OUNEXHU1QjUwXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDEyLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MVx1OTg4Nlx1Nzk4Rlx1NTIyOVwiLFwiZGVzY1wiOlwiXHU3NzBCXHU4OUM2XHU5ODkxMTBcdTZCMjFcIixcImljb25cIjpudWxsfV0sXCJzaWduSW5cIjpbe1wiaWRcIjoxMDAxLFwiZGF5c1wiOjcsXCJyZXdhcmRcIjpcIjEwMDE6MjAwMDBcIn0se1wiaWRcIjoxMDAyLFwiZGF5c1wiOjEwLFwicmV3YXJkXCI6XCIxMDAxOjMwMDAwXCJ9LHtcImlkXCI6MTAwMyxcImRheXNcIjoxNSxcInJld2FyZFwiOlwiMTAwMTo1MDAwMFwifSx7XCJpZFwiOjEwMDQsXCJkYXlzXCI6MjAsXCJyZXdhcmRcIjpcIjEwMDE6ODAwMDBcIn0se1wiaWRcIjoxMDA1LFwiZGF5c1wiOjMwLFwicmV3YXJkXCI6XCIxMDAxOjEyMDAwMFwifSx7XCJpZFwiOjEwMDYsXCJkYXlzXCI6NTAsXCJyZXdhcmRcIjpcIjEwMDE6MTgwMDAwXCJ9LHtcImlkXCI6MTAwNyxcImRheXNcIjo4MCxcInJld2FyZFwiOlwiMTAwMTozMDAwMDBcIn0se1wiaWRcIjoxMDA4LFwiZGF5c1wiOjEwMCxcInJld2FyZFwiOlwiMTAwMTozNTAwMDBcIn0se1wiaWRcIjoxMDA5LFwiZGF5c1wiOjE1MCxcInJld2FyZFwiOlwiMTAwMTo1MDAwMDBcIn1dLFwicGxhbnRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU2QzM0XHU3QTNCXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDJfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwXCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIxODBcIixcInVubG9ja19jb3N0XCI6bnVsbCxcInVubG9ja19yZXdhcmRcIjpudWxsLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1NTkyN1x1OEM0NlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA0X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MFwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMTgwXCIsXCJ1bmxvY2tfY29zdFwiOm51bGwsXCJ1bmxvY2tfcmV3YXJkXCI6bnVsbCxcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTU5MjdcdTg0OUNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxMl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTBcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjI0MFwiLFwidW5sb2NrX2Nvc3RcIjpudWxsLFwidW5sb2NrX3Jld2FyZFwiOm51bGwsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU1MzA1XHU1RkMzXHU4M0RDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDZfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NzVcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjc1XCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIzMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTU3MUZcdThDNDZcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwN19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo3NVwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NzVcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjMwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNixcIm5hbWVcIjpcIlx1ODQxRFx1NTM1Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA1X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjc1XCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo3NVwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiNDgwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA3LFwibmFtZVwiOlwiXHU1QzBGXHU5RUE2XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDFfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MTIwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjoxMjBcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjQ4MFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwOCxcIm5hbWVcIjpcIlx1OEZBM1x1NjkxMlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDEwX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjEyMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MTIwXCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCI2MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjIwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDksXCJuYW1lXCI6XCJcdTlFQzRcdTc0RENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxMV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoyMDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjIwMFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiNzIwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjozMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDEwLFwibmFtZVwiOlwiXHU4MzA0XHU1QjUwXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTNfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MjAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjoyMDBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjcyMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MzUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMSxcIm5hbWVcIjpcIlx1ODBFMVx1ODQxRFx1NTM1Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA4X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjM1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MzUwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI5MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjQ1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTIsXCJuYW1lXCI6XCJcdTUzNTdcdTc0RENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxNF9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjozNTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjM1MFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiOTAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo1MDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDEzLFwibmFtZVwiOlwiXHU3Mzg5XHU3QzczXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDNfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MDBcIixcImhhcnZlc3RcIjpcIjN+NVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjU1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTQsXCJuYW1lXCI6XCJcdTc1MThcdTg1MTdcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxNV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwMFwiLFwiaGFydmVzdFwiOlwiM341XCIsXCJtYXR1cmVfdGltZVwiOlwiMTIwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NjAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxNSxcIm5hbWVcIjpcIlx1NzU2QVx1ODMwNFwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA5X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjVcIixcIm1hdHVyZV90aW1lXCI6XCIxMjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo2NTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn1dLFwicGV0XCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1NjVGQVx1OEQyMlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwMV9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTAsXCJjb3N0XCI6XCIxMDAyOjMwMDBcIixcImRlc2NcIjpcIlx1NzIzMVx1NUI4M1x1NUMzMVx1NEU3MFx1NUI4M35cdTVCODNcdTVDMzFcdTY2MkZcdTY3MDlcdTcwQjlcdTYxRDJ+XCIsXCJzZW5zaXRpdmVcIjozNCxcImFiaWxpdHlcIjo0Mn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU2QzY0XHU1NzA2XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA3X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNSxcImNvc3RcIjpcIjEwMDI6NDAwMFwiLFwiZGVzY1wiOlwiXHU5ODlDXHU1MDNDXHUzMDAxXHU2NjdBXHU1NTQ2XHU1M0NDXHU1M0NDXHU1NzI4XHU3RUJGXCIsXCJzZW5zaXRpdmVcIjo0MCxcImFiaWxpdHlcIjo0OH0se1wiaWRcIjoxMDAzLFwibmFtZVwiOlwiXHU4MDg5XHU1RTcyXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA5X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNixcImNvc3RcIjpcIjEwMDI6NDUwMFwiLFwiZGVzY1wiOlwiXHU2NzAwXHU1RkUwXHU4QkRBXHU3Njg0XHU0RjE5XHU0RjM0XCIsXCJzZW5zaXRpdmVcIjo0NSxcImFiaWxpdHlcIjo1NX0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU0RThDXHU1NEM4XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAyX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNixcImNvc3RcIjpcIjEwMDI6NTAwMFwiLFwiZGVzY1wiOlwiXHU3RUREXHU0RTBEXHU2MkM2XHU1QkI2XHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo0OCxcImFiaWxpdHlcIjo2MH0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU1OTI3XHU3NzNDXHU3NzVCXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA1X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNyxcImNvc3RcIjpcIjEwMDI6NzAwMFwiLFwiZGVzY1wiOlwiXHU2RDNCXHU1OTdEXHU1NDAzXHU3Njg0XHU1QzExXCIsXCJzZW5zaXRpdmVcIjo1MCxcImFiaWxpdHlcIjo3NX0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU1QzBGXHU1QzNFXHU1REY0XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA0X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6NzUwMFwiLFwiZGVzY1wiOlwiXHU2QjY2XHU1MjlCXHU1OTI5XHU4RDRCXHU1REYyXHU3MEI5XHU2RUUxflx1NjJGRlx1NjM0Rlx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6NjAsXCJhYmlsaXR5XCI6ODB9LHtcImlkXCI6MTAwNyxcIm5hbWVcIjpcIlx1NzQwM1x1NzQwM1wiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwOF9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTgsXCJjb3N0XCI6XCIxMDAyOjgwMDBcIixcImRlc2NcIjpcIlx1NUMzMVx1NEUyNFx1NEUyQVx1NUI1N1x1RkYwQ1x1NTQyQ1x1OEJERFx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6NjksXCJhYmlsaXR5XCI6ODV9LHtcImlkXCI6MTAwOCxcIm5hbWVcIjpcIlx1NUMwRlx1NzY3RFwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwM19kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTgsXCJjb3N0XCI6XCIxMDAyOjgwMDBcIixcImRlc2NcIjpcIlx1NzcwQlx1NUJCNlx1MzAwMVx1NzcwQlx1ODNEQ1x1MzAwMVx1NzcwQlx1NUI2OVx1NUI1MFwiLFwic2Vuc2l0aXZlXCI6NzYsXCJhYmlsaXR5XCI6ODh9LHtcImlkXCI6MTAwOSxcIm5hbWVcIjpcIlx1NzBCOVx1NzBCOVwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNl9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTksXCJjb3N0XCI6XCIxMDAyOjEwMDAwXCIsXCJkZXNjXCI6XCJcdTRGNjBcdTUwM0NcdTVGOTdcdTYyRTVcdTY3MDlcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjg1LFwiYWJpbGl0eVwiOjkzfSx7XCJpZFwiOjEwMTAsXCJuYW1lXCI6XCJcdTk1RjdcdTU4QTlcIixcImljb25cIjpcInBldF9mZWVkLzEwMTBfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjMwLFwiY29zdFwiOlwiMTAwMjoxNTAwMFwiLFwiZGVzY1wiOlwiXHU5NTdGXHU1Rjk3XHU1QzMxXHU1Rjg4XHU1MUY2XHVGRjBDXHU2MjkzXHU1QzBGXHU1MDc3XHU2NkY0XHU1MUY2XCIsXCJzZW5zaXRpdmVcIjo5MCxcImFiaWxpdHlcIjo5OX1dLFwib3JkZXJcIjpbe1wiaWRcIjoxLFwiY29tbWlzc2lvblwiOlwiMS4xMlwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjJcIn0se1wiaWRcIjoyLFwiY29tbWlzc2lvblwiOlwiMC44N1wiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjEsMTAwMjoyXCJ9LHtcImlkXCI6MyxcImNvbW1pc3Npb25cIjpcIjAuNjlcIixcImNvbmRpdGlvblwiOlwiMTAwMToxLDEwMDM6MiwxMDAyOjNcIn0se1wiaWRcIjo0LFwiY29tbWlzc2lvblwiOlwiMC42MVwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjQsMTAwMzozLDEwMDQ6MywxMDAxOjRcIn0se1wiaWRcIjo1LFwiY29tbWlzc2lvblwiOlwiMC42MVwiLFwiY29uZGl0aW9uXCI6XCIxMDA0OjYsMTAwMjo1LDEwMDU6NCwxMDAxOjVcIn0se1wiaWRcIjo2LFwiY29tbWlzc2lvblwiOlwiMC42OFwiLFwiY29uZGl0aW9uXCI6XCIxMDAzOjEwLDEwMDQ6NSwxMDA1OjMsMTAwNjozXCJ9LHtcImlkXCI6NyxcImNvbW1pc3Npb25cIjpcIjAuNDNcIixcImNvbmRpdGlvblwiOlwiMTAwNzo0LDEwMDM6NSwxMDA0OjcsMTAwNjoxMFwifSx7XCJpZFwiOjgsXCJjb21taXNzaW9uXCI6XCIwLjU2XCIsXCJjb25kaXRpb25cIjpcIjEwMDg6MTMsMTAwNzozLDEwMDU6NSwxMDAyOjVcIn0se1wiaWRcIjo5LFwiY29tbWlzc2lvblwiOlwiMC4zOVwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjIsMTAwOToxMCwxMDA3OjgsMTAwMzo4XCJ9LHtcImlkXCI6MTAsXCJjb21taXNzaW9uXCI6XCIwLjIyXCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MTAsMTAxMDo1LDEwMDg6MTAsMTAwOTo2XCJ9LHtcImlkXCI6MTEsXCJjb21taXNzaW9uXCI6XCIwLjc2XCIsXCJjb25kaXRpb25cIjpcIjEwMDk6NSwxMDA0OjEwLDEwMDE6OSwxMDAyOjEwXCJ9LHtcImlkXCI6MTIsXCJjb21taXNzaW9uXCI6XCIwLjQzXCIsXCJjb25kaXRpb25cIjpcIjEwMDc6NiwxMDAzOjExLDEwMTE6NiwxMDA1OjEwXCJ9LHtcImlkXCI6MTMsXCJjb21taXNzaW9uXCI6XCIwLjE3XCIsXCJjb25kaXRpb25cIjpcIjEwMTA6NSwxMDA1OjEzLDEwMDE6OCwxMDEyOjhcIn0se1wiaWRcIjoxNCxcImNvbW1pc3Npb25cIjpcIjAuNTVcIixcImNvbmRpdGlvblwiOlwiMTAxMzoxMCwxMDA4OjgsMTAwNjo2LDEwMDE6MTBcIn0se1wiaWRcIjoxNSxcImNvbW1pc3Npb25cIjpcIjAuNDhcIixcImNvbmRpdGlvblwiOlwiMTAwMjoxMCwxMDA1OjEwLDEwMTE6MTIsMTAwMToxMFwifSx7XCJpZFwiOjE2LFwiY29tbWlzc2lvblwiOjAuMjksXCJjb25kaXRpb25cIjpcIjEwMDg6MTEsMTAxNDo0LDEwMDY6OCwxMDA1OjE3XCJ9LHtcImlkXCI6MTcsXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAwNjoxNCwxMDA3OjYsMTAxNToxMiwxMDAxOjE0XCJ9LHtcImlkXCI6MTgsXCJjb21taXNzaW9uXCI6MC40OCxcImNvbmRpdGlvblwiOlwiMTAwODoxNCwxMDExOjEyLDEwMDk6MTUsMTAwMjo1XCJ9LHtcImlkXCI6MTksXCJjb21taXNzaW9uXCI6MC43NSxcImNvbmRpdGlvblwiOlwiMTAxMzoxMCwxMDAzOjIwLDEwMTQ6MTEsMTAwMTo3XCJ9LHtcImlkXCI6MjAsXCJjb21taXNzaW9uXCI6MC42NyxcImNvbmRpdGlvblwiOlwiMTAwMzoxMCwxMDExOjE3LDEwMDI6MTQsMTAwNToxMlwifSx7XCJpZFwiOjIxLFwiY29tbWlzc2lvblwiOjAuNjQsXCJjb25kaXRpb25cIjpcIjEwMTA6MTAsMTAwMzoxNCwxMDA1OjE2LDEwMDc6MTVcIn0se1wiaWRcIjoyMixcImNvbW1pc3Npb25cIjpcIjAuNFwiLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE5LDEwMDc6MTIsMTAxMTo1LDEwMDQ6MTdcIn0se1wiaWRcIjoyMyxcImNvbW1pc3Npb25cIjpcIjAuNFwiLFwiY29uZGl0aW9uXCI6XCIxMDAzOjE5LDEwMTQ6MjIsMTAxNToxNiwxMDA4OjE0XCJ9LHtcImlkXCI6MjQsXCJjb21taXNzaW9uXCI6MC43NyxcImNvbmRpdGlvblwiOlwiMTAxNDoxMywxMDAxOjE3LDEwMDg6MTgsMTAwNDoxNVwifSx7XCJpZFwiOjI1LFwiY29tbWlzc2lvblwiOlwiMC4zOVwiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjIzLDEwMTE6MTksMTAxMDoxNSwxMDE1OjIwXCJ9LHtcImlkXCI6MjYsXCJjb21taXNzaW9uXCI6MC4wMyxcImNvbmRpdGlvblwiOlwiMTAwMjoyMSwxMDExOjEyLDEwMTI6MjIsMTAwMzoxOVwifSx7XCJpZFwiOjI3LFwiY29tbWlzc2lvblwiOjAuNDksXCJjb25kaXRpb25cIjpcIjEwMDc6MTYsMTAxNDoxNiwxMDA2OjIwLDEwMTE6MTdcIn0se1wiaWRcIjoyOCxcImNvbW1pc3Npb25cIjowLjUzLFwiY29uZGl0aW9uXCI6XCIxMDE0OjE3LDEwMDc6MTIsMTAxMToxNywxMDAzOjE3XCJ9LHtcImlkXCI6MjksXCJjb21taXNzaW9uXCI6MC43NyxcImNvbmRpdGlvblwiOlwiMTAxMjoxMCwxMDA1OjE2LDEwMTA6MTQsMTAxNToxOFwifSx7XCJpZFwiOjMwLFwiY29tbWlzc2lvblwiOlwiMC4zNFwiLFwiY29uZGl0aW9uXCI6XCIxMDExOjE3LDEwMTQ6MTksMTAwNjoxNCwxMDA0OjMwXCJ9LHtcImlkXCI6MzEsXCJjb21taXNzaW9uXCI6MC41MyxcImNvbmRpdGlvblwiOlwiMTAwNzoxOCwxMDEwOjE0LDEwMTM6MTksMTAwNjoxMVwifSx7XCJpZFwiOjMyLFwiY29tbWlzc2lvblwiOjAuNDYsXCJjb25kaXRpb25cIjpcIjEwMTM6MTksMTAwNToyMiwxMDEyOjEyLDEwMDg6MjBcIn0se1wiaWRcIjozMyxcImNvbW1pc3Npb25cIjpcIjAuNDRcIixcImNvbmRpdGlvblwiOlwiMTAxMjoxNiwxMDEzOjIwLDEwMDI6MjMsMTAwOToxNlwifSx7XCJpZFwiOjM0LFwiY29tbWlzc2lvblwiOlwiMC40MlwiLFwiY29uZGl0aW9uXCI6XCIxMDA5OjE5LDEwMTA6MTIsMTAxMToxNCwxMDEyOjIwXCJ9LHtcImlkXCI6MzUsXCJjb21taXNzaW9uXCI6XCIwLjMzXCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MTgsMTAwNDoxOSwxMDEzOjE2LDEwMDM6MjBcIn0se1wiaWRcIjozNixcImNvbW1pc3Npb25cIjowLjIxLFwiY29uZGl0aW9uXCI6XCIxMDAzOjExLDEwMDg6MTcsMTAxNDoxNywxMDA3OjE5XCJ9LHtcImlkXCI6MzcsXCJjb21taXNzaW9uXCI6MC40NCxcImNvbmRpdGlvblwiOlwiMTAxMjoxOSwxMDEwOjIwLDEwMDI6MTQsMTAxMToxMVwifSx7XCJpZFwiOjM4LFwiY29tbWlzc2lvblwiOjAuMjIsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTMsMTAwNDoxOSwxMDAyOjExLDEwMTU6MThcIn0se1wiaWRcIjozOSxcImNvbW1pc3Npb25cIjowLjM2LFwiY29uZGl0aW9uXCI6XCIxMDA3OjE4LDEwMTI6MTMsMTAwNDoxNiwxMDAyOjI2XCJ9LHtcImlkXCI6NDAsXCJjb21taXNzaW9uXCI6MC4yOCxcImNvbmRpdGlvblwiOlwiMTAwNDozMCwxMDA1OjEwLDEwMDg6MTgsMTAxMToxNlwifSx7XCJpZFwiOjQxLFwiY29tbWlzc2lvblwiOlwiMC40OFwiLFwiY29uZGl0aW9uXCI6XCIxMDEwOjE4LDEwMDk6MTgsMTAwODoxNywxMDExOjI2XCJ9LHtcImlkXCI6NDIsXCJjb21taXNzaW9uXCI6MC40MyxcImNvbmRpdGlvblwiOlwiMTAwOToyMSwxMDA1OjE4LDEwMDc6MjAsMTAwMjoyM1wifSx7XCJpZFwiOjQzLFwiY29tbWlzc2lvblwiOlwiMC4yNFwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjMwLDEwMDQ6MTQsMTAxNDoxMSwxMDA4OjE1XCJ9LHtcImlkXCI6NDQsXCJjb21taXNzaW9uXCI6MC42MixcImNvbmRpdGlvblwiOlwiMTAwOToxNSwxMDAzOjI4LDEwMDI6MzQsMTAwNzoxOVwifSx7XCJpZFwiOjQ1LFwiY29tbWlzc2lvblwiOlwiMC40MVwiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE1LDEwMTA6MjMsMTAwNzoxMywxMDExOjEzXCJ9LHtcImlkXCI6NDYsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwMzoyMiwxMDA3OjIzLDEwMTA6MTYsMTAwMjoyNFwifSx7XCJpZFwiOjQ3LFwiY29tbWlzc2lvblwiOjAuNDksXCJjb25kaXRpb25cIjpcIjEwMTA6MjQsMTAxNToyMCwxMDAzOjI1LDEwMTQ6MTZcIn0se1wiaWRcIjo0OCxcImNvbW1pc3Npb25cIjpcIjAuMjZcIixcImNvbmRpdGlvblwiOlwiMTAxMzoxNywxMDA3OjI0LDEwMDg6MzcsMTAwMTozMFwifSx7XCJpZFwiOjQ5LFwiY29tbWlzc2lvblwiOjAuNDgsXCJjb25kaXRpb25cIjpcIjEwMDI6MjYsMTAwNDoyMSwxMDA5OjIyLDEwMDY6MjBcIn0se1wiaWRcIjo1MCxcImNvbW1pc3Npb25cIjpcIjAuMjVcIixcImNvbmRpdGlvblwiOlwiMTAwNjoyNywxMDEyOjE5LDEwMDg6MjAsMTAxNToxMVwifSx7XCJpZFwiOjUxLFwiY29tbWlzc2lvblwiOlwiMC4zNFwiLFwiY29uZGl0aW9uXCI6XCIxMDExOjE4LDEwMDQ6MTksMTAwMjoyNSwxMDAzOjExXCJ9LHtcImlkXCI6NTIsXCJjb21taXNzaW9uXCI6MC40MyxcImNvbmRpdGlvblwiOlwiMTAxNToxNSwxMDEzOjIwLDEwMDE6MjUsMTAwNDoyNlwifSx7XCJpZFwiOjUzLFwiY29tbWlzc2lvblwiOlwiMC4yOFwiLFwiY29uZGl0aW9uXCI6XCIxMDE0OjE0LDEwMTI6MTIsMTAxMDoyMCwxMDE1OjE4XCJ9LHtcImlkXCI6NTQsXCJjb21taXNzaW9uXCI6MC40NSxcImNvbmRpdGlvblwiOlwiMTAwNToyMiwxMDAyOjMzLDEwMDk6MTYsMTAxNToxN1wifSx7XCJpZFwiOjU1LFwiY29tbWlzc2lvblwiOlwiMC41NlwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjIzLDEwMTQ6MTksMTAwNToxNywxMDEwOjE1XCJ9LHtcImlkXCI6NTYsXCJjb21taXNzaW9uXCI6XCIwLjM1XCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MjcsMTAwNToyOSwxMDA5OjE3LDEwMDM6MThcIn0se1wiaWRcIjo1NyxcImNvbW1pc3Npb25cIjowLjY3LFwiY29uZGl0aW9uXCI6XCIxMDA3OjIxLDEwMDg6MTcsMTAwMjoxNiwxMDA5OjI1XCJ9LHtcImlkXCI6NTgsXCJjb21taXNzaW9uXCI6MC4zMixcImNvbmRpdGlvblwiOlwiMTAwNjoyMCwxMDA4OjI1LDEwMDU6MjQsMTAwNzoxOVwifSx7XCJpZFwiOjU5LFwiY29tbWlzc2lvblwiOjAuNzksXCJjb25kaXRpb25cIjpcIjEwMTI6MjUsMTAwOTozMCwxMDEzOjE2LDEwMDg6MTVcIn0se1wiaWRcIjo2MCxcImNvbW1pc3Npb25cIjowLjY5LFwiY29uZGl0aW9uXCI6XCIxMDE1OjI2LDEwMTI6MjcsMTAxMDozMSwxMDAxOjIzXCJ9LHtcImlkXCI6NjEsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAxNToxMiwxMDA2OjI1LDEwMTE6MTUsMTAwMjoxN1wifSx7XCJpZFwiOjYyLFwiY29tbWlzc2lvblwiOjAuNDQsXCJjb25kaXRpb25cIjpcIjEwMTU6MjEsMTAwNzoxNSwxMDExOjE4LDEwMDY6MjZcIn0se1wiaWRcIjo2MyxcImNvbW1pc3Npb25cIjowLjAxLFwiY29uZGl0aW9uXCI6XCIxMDEwOjE4LDEwMDU6MTYsMTAwOToxMywxMDAzOjI3XCJ9LHtcImlkXCI6NjQsXCJjb21taXNzaW9uXCI6MC4yNyxcImNvbmRpdGlvblwiOlwiMTAwNzoxNywxMDA2OjEwLDEwMDU6MjksMTAwNDoyNVwifSx7XCJpZFwiOjY1LFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMDg6MTUsMTAwMzozMCwxMDE0OjIwLDEwMDU6MTVcIn0se1wiaWRcIjo2NixcImNvbW1pc3Npb25cIjowLjczLFwiY29uZGl0aW9uXCI6XCIxMDA0OjI1LDEwMDg6MjUsMTAwMjozNCwxMDEyOjE0XCJ9LHtcImlkXCI6NjcsXCJjb21taXNzaW9uXCI6MC4xMyxcImNvbmRpdGlvblwiOlwiMTAwMTozNiwxMDEyOjIwLDEwMTE6MjAsMTAwMzoyMFwifSx7XCJpZFwiOjY4LFwiY29tbWlzc2lvblwiOjAuNjksXCJjb25kaXRpb25cIjpcIjEwMTM6MjQsMTAwODoyMywxMDA2OjE2LDEwMDc6MTdcIn0se1wiaWRcIjo2OSxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDE1OjMwLDEwMDQ6MjksMTAxMzoxNywxMDA5OjEwXCJ9LHtcImlkXCI6NzAsXCJjb21taXNzaW9uXCI6MC43MSxcImNvbmRpdGlvblwiOlwiMTAxMDoyMywxMDA0OjMxLDEwMTE6MTcsMTAxMjoxMVwifSx7XCJpZFwiOjcxLFwiY29tbWlzc2lvblwiOjAuMjksXCJjb25kaXRpb25cIjpcIjEwMDg6MTEsMTAwMjoyNiwxMDAzOjI4LDEwMTU6MTNcIn0se1wiaWRcIjo3MixcImNvbW1pc3Npb25cIjowLjMxLFwiY29uZGl0aW9uXCI6XCIxMDA1OjI1LDEwMDI6MzgsMTAxMjoxOSwxMDEwOjE0XCJ9LHtcImlkXCI6NzMsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAxMjozNCwxMDA2OjIyLDEwMDM6MjcsMTAwNDoyMFwifSx7XCJpZFwiOjc0LFwiY29tbWlzc2lvblwiOjAuMjYsXCJjb25kaXRpb25cIjpcIjEwMDM6MjAsMTAxMjoxOCwxMDAyOjMwLDEwMDE6MjBcIn0se1wiaWRcIjo3NSxcImNvbW1pc3Npb25cIjowLjE4LFwiY29uZGl0aW9uXCI6XCIxMDA2OjMxLDEwMTQ6MzAsMTAwODoxMiwxMDAyOjI1XCJ9LHtcImlkXCI6NzYsXCJjb21taXNzaW9uXCI6MC41MSxcImNvbmRpdGlvblwiOlwiMTAwNzoyMSwxMDEyOjIwLDEwMDQ6MTEsMTAxNDoyMFwifSx7XCJpZFwiOjc3LFwiY29tbWlzc2lvblwiOjAuMjEsXCJjb25kaXRpb25cIjpcIjEwMDg6MTUsMTAwOToxNiwxMDEyOjI0LDEwMDc6MzBcIn0se1wiaWRcIjo3OCxcImNvbW1pc3Npb25cIjowLjczLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE2LDEwMTI6MTYsMTAwNjoyMCwxMDA4OjIyXCJ9LHtcImlkXCI6NzksXCJjb21taXNzaW9uXCI6MC42NSxcImNvbmRpdGlvblwiOlwiMTAwNjoyNiwxMDA0OjE4LDEwMDc6MTIsMTAxMToyN1wifSx7XCJpZFwiOjgwLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMDk6MTUsMTAwMzoxNiwxMDA0OjE5LDEwMDc6MjRcIn0se1wiaWRcIjo4MSxcImNvbW1pc3Npb25cIjowLjE0LFwiY29uZGl0aW9uXCI6XCIxMDEyOjIwLDEwMTU6MjgsMTAwMjoyNCwxMDAzOjM4XCJ9LHtcImlkXCI6ODIsXCJjb21taXNzaW9uXCI6MC4yLFwiY29uZGl0aW9uXCI6XCIxMDA1OjEyLDEwMTE6MTksMTAwOToxOCwxMDAyOjE0XCJ9LHtcImlkXCI6ODMsXCJjb21taXNzaW9uXCI6MC41MyxcImNvbmRpdGlvblwiOlwiMTAxMDoxOSwxMDAzOjM4LDEwMDc6MjIsMTAxNToyMFwifSx7XCJpZFwiOjg0LFwiY29tbWlzc2lvblwiOjAuNjIsXCJjb25kaXRpb25cIjpcIjEwMDU6MjksMTAxNDoyNiwxMDAyOjE4LDEwMDc6MzhcIn0se1wiaWRcIjo4NSxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDExOjIwLDEwMDE6MTcsMTAxMjoxMiwxMDA0OjMyXCJ9LHtcImlkXCI6ODYsXCJjb21taXNzaW9uXCI6MC41OSxcImNvbmRpdGlvblwiOlwiMTAwOToyNSwxMDExOjIwLDEwMDY6MTQsMTAxNToyMVwifSx7XCJpZFwiOjg3LFwiY29tbWlzc2lvblwiOlwiMC4zMVwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjI2LDEwMDU6MTksMTAxMzoyMCwxMDE0OjI5XCJ9LHtcImlkXCI6ODgsXCJjb21taXNzaW9uXCI6XCIwLjQ4XCIsXCJjb25kaXRpb25cIjpcIjEwMDg6MzcsMTAxMToyNCwxMDE1OjEyLDEwMTQ6MTFcIn0se1wiaWRcIjo4OSxcImNvbW1pc3Npb25cIjpcIjAuMjJcIixcImNvbmRpdGlvblwiOlwiMTAwMjoxNywxMDAzOjI4LDEwMDU6MjIsMTAxMDozMVwifSx7XCJpZFwiOjkwLFwiY29tbWlzc2lvblwiOjAuMzIsXCJjb25kaXRpb25cIjpcIjEwMDI6MzksMTAxMzoyOCwxMDA3OjI1LDEwMDE6MzNcIn0se1wiaWRcIjo5MSxcImNvbW1pc3Npb25cIjowLjE5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMTM6MjAsMTAxNDoxMCwxMDA3OjI2XCJ9LHtcImlkXCI6OTIsXCJjb21taXNzaW9uXCI6MC4xMyxcImNvbmRpdGlvblwiOlwiMTAwNDozOCwxMDExOjEzLDEwMDg6MTUsMTAwNzoyOVwifSx7XCJpZFwiOjkzLFwiY29tbWlzc2lvblwiOjAuMzQsXCJjb25kaXRpb25cIjpcIjEwMTM6MTIsMTAwMTozOSwxMDA2OjM4LDEwMDg6MzFcIn0se1wiaWRcIjo5NCxcImNvbW1pc3Npb25cIjowLjIyLFwiY29uZGl0aW9uXCI6XCIxMDAyOjM2LDEwMTQ6MjcsMTAxMzoxNiwxMDA1OjMxXCJ9LHtcImlkXCI6OTUsXCJjb21taXNzaW9uXCI6MC4xNSxcImNvbmRpdGlvblwiOlwiMTAwNToyNiwxMDExOjM0LDEwMTU6MzQsMTAwODoxNlwifSx7XCJpZFwiOjk2LFwiY29tbWlzc2lvblwiOlwiMC40OVwiLFwiY29uZGl0aW9uXCI6XCIxMDAzOjI0LDEwMDE6MzQsMTAwNzoyOCwxMDA1OjMwXCJ9LHtcImlkXCI6OTcsXCJjb21taXNzaW9uXCI6XCIwLjZcIixcImNvbmRpdGlvblwiOlwiMTAxMzozMiwxMDA5OjMzLDEwMDY6MzAsMTAxMTo0MFwifV0sXCJsYW5nXCI6W10sXCJsYW5kTGV2ZWxcIjpbe1wiaWRcIjoxLFwicmV3YXJkXCI6XCIxMDAyOjBcIixcImNvc3RcIjpcIjEwMDI6MFwiLFwiZ2FpblwiOm51bGx9LHtcImlkXCI6MixcInJld2FyZFwiOlwiMTAwMjoxNTAwXCIsXCJjb3N0XCI6XCIxMDAyOjEwMDAwXCIsXCJnYWluXCI6MC4xfSx7XCJpZFwiOjMsXCJyZXdhcmRcIjpcIjEwMDI6MjAwMFwiLFwiY29zdFwiOlwiMTAwMjozMDAwMFwiLFwiZ2FpblwiOjAuMjV9LHtcImlkXCI6NCxcInJld2FyZFwiOlwiMTAwMjoyNTAwXCIsXCJjb3N0XCI6XCIxMDAyOjUwMDAwXCIsXCJnYWluXCI6MC40fSx7XCJpZFwiOjUsXCJyZXdhcmRcIjpcIjEwMDI6MzAwMFwiLFwiY29zdFwiOlwiMTAwMjoxMDAwMDBcIixcImdhaW5cIjowLjU1fV0sXCJmZWVkXCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1OTk3Q1x1NUU3MlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwMV9mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjoxLFwiY29zdFwiOlwiMTAwMjozMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTU3NUFcdTY3OUNcIixcImljb25cIjpcInBldF9mZWVkLzEwMDJfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MixcImNvc3RcIjpcIjEwMDI6NTBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDAzLFwibmFtZVwiOlwiXHU3MDZCXHU4MTdGXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAzX2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjUsXCJjb3N0XCI6XCIxMDAyOjEwMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTcyNUJcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDRfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6NTAsXCJjb3N0XCI6XCIxMDAyOjkwMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTczMkFcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDVfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MjAsXCJjb3N0XCI6XCIxMDAyOjQ2MFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDYsXCJuYW1lXCI6XCJcdTlFMjFcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDZfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MTAsXCJjb3N0XCI6XCIxMDAyOjI3MFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifV0sXCJjdXJyZW5jeVwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTk0QkJcdTc3RjNcIixcImljb25cIjpcIm1haW5fc2NlbmUvaW1nX2RpYW1vbmQucG5nXCJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1OTFEMVx1NUUwMVwiLFwiaWNvblwiOlwibWFpbl9zY2VuZS9pbWdfY29pbi5wbmdcIn1dLFwiY29uZmlnXCI6W3tcImlkXCI6XCJhbGxfc3BlZWRfdXBfdGltZXNcIixcInZhbHVlXCI6MzB9LHtcImlkXCI6XCJhbGxfc3BlZWRfdXBfdGltZVwiLFwidmFsdWVcIjo2MDB9LHtcImlkXCI6XCJ1bmxvY2tfbGFuZF9jb3N0XCIsXCJ2YWx1ZVwiOlwiMTAwMjowLDEwMDI6MCwxMDAyOjUwMDAsMTAwMjoxMDAwMCwxMDAyOjIwMDAwLDEwMDI6MzAwMDAsMTAwMjo0MDAwMCwxMDAyOjUwMDAwLDEwMDI6NjAwMDBcIn0se1wiaWRcIjpcImdvbGREZWZhdWx0XCIsXCJ2YWx1ZVwiOlwiMTAwMjoxMDBcIn0se1wiaWRcIjpcImRpYW1vbmREZWZhdWx0XCIsXCJ2YWx1ZVwiOlwiMTAwMTo1MFwifSx7XCJpZFwiOlwiQURUaW1lc0xpbWl0XCIsXCJ2YWx1ZVwiOjMwfSx7XCJpZFwiOlwiQURTcGVlZFVwdGltZXNcIixcInZhbHVlXCI6Nn0se1wiaWRcIjpcInZpdGFsaXR5QnV5Q29zdEdvbGRcIixcInZhbHVlXCI6XCIxMDAyOjEwMDAwXCJ9LHtcImlkXCI6XCJ2aXRhbGl0eUxpbWl0XCIsXCJ2YWx1ZVwiOjEwfSx7XCJpZFwiOlwibGFuZEFtb3VudE1heFwiLFwidmFsdWVcIjo5fSx7XCJpZFwiOlwicGV0RGVmYXVsdFZpdGFsaXR5XCIsXCJ2YWx1ZVwiOjEwMH0se1wiaWRcIjpcInBldERpZ2VzdEludGVydmFsVGltZVwiLFwidmFsdWVcIjo2MH0se1wiaWRcIjpcIlZpZGVvcmV3YXJkc1wiLFwidmFsdWVcIjpcIjEwMDE6MTAwXCJ9LHtcImlkXCI6XCJ3aXRoZHJhd2FsXCIsXCJ2YWx1ZVwiOlwiMTAwMToxMDAwMDoxXCJ9LHtcImlkXCI6XCJJbnZpdGF0aW9uX3Jld2FyZHNcIixcInZhbHVlXCI6XCIxMDAxOjUwMDBcIn0se1wiaWRcIjpcIndpdGhkcmF3YWxfdGltZXNcIixcInZhbHVlXCI6XCIwLjM6MywwLjU6Miw1OjAsMTA6MCw1MDowXCJ9XX07IiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xzIHtcclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU1QjU3XHU3QjI2XHJcbiAgICAgKiBAcGFyYW0gc3RyIFx1ODk4MVx1ODlFM1x1Njc5MFx1NzY4NFx1NUI1N1x1N0IyNlxyXG4gICAgICogQHBhcmFtIGZvcm1hdCBcdTUwNUFcdTRFM0FcdTUzQzJcdTgwMDNcdTc2ODRcdTVCNTdcdTdCMjZcdTlFRDhcdThCQTRcdTRFM0EsXHJcbiAgICAgKiBAcmV0dXJucyBcdTg5RTNcdTY3OTBcdTU5N0RcdTc2ODRcdTVCNTdcdTdCMjZcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBhcnNlU3RyaW5nKHN0cjogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyA9IFwiLFwiKSB7XHJcbiAgICAgICAgaWYgKCFzdHIpIHJldHVybiBbXTtcclxuICAgICAgICByZXR1cm4gc3RyLnNwbGl0KGZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc5RDJcdThGNkNcdTYzNjJcdTYyMTAwMDowMDowMFxyXG4gICAgICogQHBhcmFtIHMgXHU4RjZDXHU2MzYyXHU2NUY2XHU5NUY0XHU3Njg0XHU3OUQyXHJcbiAgICAgKiBAcmV0dXJucyAwMDowMDowMFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9ybWF0U2Vjb25kcyA9IChzKSA9PiBuZXcgRGF0ZShzICogMTAwMCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMTEsIDgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuL1RhYmxlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb25maWdCYXNlLFxyXG4gICAgQ3VycmVuY3lCYXNlLFxyXG4gICAgRmVlZEJhc2UsXHJcbiAgICBMYW5kTGV2ZWxCYXNlLFxyXG4gICAgT3JkZXJCYXNlLFxyXG4gICAgUGV0QmFzZSxcclxuICAgIFBsYW50QmFzZSxcclxuICAgIFJld2FyZEJhc2UsXHJcbiAgICBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICBTaWduSW5CYXNlLFxyXG4gICAgVGFza0Jhc2UsXHJcbn0gZnJvbSBcIi4vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCIuL1Rvb2xzXCI7XHJcblxyXG5jb25zdCBUYWJsZVByb3BlcnR5RXZlbnQgPSB7XHJcbiAgICBwZXQoZDogdHlwZW9mIFRhYmxlLnBldFswXSkge1xyXG4gICAgICAgIHJldHVybiA8UGV0QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbiB8fCBgcGV0X2ZlZWQvJHtkLmlkfV9kb2cucG5nYCxcclxuICAgICAgICAgICAgdml0YWxpdHlfbWF4OiBkLnZpdGFsaXR5X21heCxcclxuICAgICAgICAgICAgdml0YWxpdHlfY29uc3VtZTogZC52aXRhbGl0eV9jb25zdW1lLFxyXG4gICAgICAgICAgICBjb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5jb3N0KSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgICAgICBzZW5zaXRpdmU6IGQuc2Vuc2l0aXZlLFxyXG4gICAgICAgICAgICBhYmlsaXR5OiBkLmFiaWxpdHksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTk5NzJcdTY1OTlcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZmVlZChkOiB0eXBlb2YgVGFibGUuZmVlZFswXSkge1xyXG4gICAgICAgIHJldHVybiA8RmVlZEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYHBldF9mZWVkLyR7ZC5pZH1fZmVlZC5wbmdgLFxyXG4gICAgICAgICAgICB2aXRhbGl0eTogZC52aXRhbGl0eSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OEJBMlx1NTM1NVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIG9yZGVyKGQ6IHR5cGVvZiBUYWJsZS5vcmRlclswXSkge1xyXG4gICAgICAgIHJldHVybiA8T3JkZXJCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGNvbW1pc3Npb246IE51bWJlcihkLmNvbW1pc3Npb24pLFxyXG4gICAgICAgICAgICBjb25kaXRpb246IFRvb2xzLnBhcnNlU3RyaW5nKGQuY29uZGl0aW9uKS5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gVG9vbHMucGFyc2VTdHJpbmcoZSwgXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFudDogVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KE51bWJlcih2WzBdKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IE51bWJlcih2WzFdKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU2MjEwXHU3MTlGXHU2OTBEXHU3MjY5XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcGxhbnQoZDogdHlwZW9mIFRhYmxlLnBsYW50WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQbGFudEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24sXHJcbiAgICAgICAgICAgIG1hdHVyZUljb246IGBwbGFudF9pY29uLyR7ZC5pY29uLm1hdGNoKC9cXGQrL2cpWzBdfV9tYXR1cmUucG5nYCxcclxuICAgICAgICAgICAgZ3Jvd2luZ0ljb246IGBwbGFudF9pY29uLyR7ZC5pY29uLm1hdGNoKC9cXGQrL2cpWzBdfV9ncm93aW5nLnBuZ2AsXHJcbiAgICAgICAgICAgIGdhaW46IFRvb2xzLnBhcnNlU3RyaW5nKGQuZ2FpbikubWFwKChlKSA9PiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZSkpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHNlZWRfcHJpY2U6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnNlZWRfcHJpY2UpLFxyXG4gICAgICAgICAgICBoYXJ2ZXN0OiBOdW1iZXIoVG9vbHMucGFyc2VTdHJpbmcoZC5oYXJ2ZXN0LCBcIn5cIilbMV0pLFxyXG4gICAgICAgICAgICBtYXR1cmVfdGltZTogTnVtYmVyKGQubWF0dXJlX3RpbWUpLFxyXG4gICAgICAgICAgICB1bmxvY2tfY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudW5sb2NrX2Nvc3QpLFxyXG4gICAgICAgICAgICB1bmxvY2tfcmV3YXJkOiBUb29scy5wYXJzZVN0cmluZyhkLnVubG9ja19yZXdhcmQpLm1hcCgoZSkgPT4gZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGUpKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OEQyN1x1NUUwMVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbmN5KGQ6IHR5cGVvZiBUYWJsZS5jdXJyZW5jeVswXSkge1xyXG4gICAgICAgIHJldHVybiA8Q3VycmVuY3lCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbixcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU1NzFGXHU1NzMwXHU3QjQ5XHU3RUE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGxhbmRMZXZlbChkOiB0eXBlb2YgVGFibGUubGFuZExldmVsWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxMYW5kTGV2ZWxCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIHJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQucmV3YXJkKSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGdhaW46IGQuZ2FpbixcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25maWcoZDogdHlwZW9mIFRhYmxlLmNvbmZpZ1swXSkge1xyXG4gICAgICAgIHN3aXRjaCAoZC5pZCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYWxsX3NwZWVkX3VwX3RpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJhbGxfc3BlZWRfdXBfdGltZXNcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJhbGxfc3BlZWRfdXBfdGltZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiYWxsX3NwZWVkX3VwX3RpbWVcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJ1bmxvY2tfbGFuZF9jb3N0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInVubG9ja19sYW5kX2Nvc3RcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogVG9vbHMucGFyc2VTdHJpbmcoZC52YWx1ZSBhcyBzdHJpbmcpLm1hcCgoZCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQpXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZ29sZERlZmF1bHRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZERlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKS5jb3VudCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJkaWFtb25kRGVmYXVsdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJkaWFtb25kRGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcIkFEVGltZXNMaW1pdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiQURUaW1lc0xpbWl0XCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJBRFNwZWVkVXB0aW1lc1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiQURTcGVlZFVwdGltZXNcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcInZpdGFsaXR5QnV5Q29zdEdvbGRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidml0YWxpdHlCdXlDb3N0R29sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcInZpdGFsaXR5TGltaXRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcInZpdGFsaXR5TGltaXRcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcImxhbmRBbW91bnRNYXhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcImxhbmRBbW91bnRNYXhcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcInBldERlZmF1bHRWaXRhbGl0eVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwicGV0RGVmYXVsdFZpdGFsaXR5XCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXREaWdlc3RJbnRlcnZhbFRpbWVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcInBldERpZ2VzdEludGVydmFsVGltZVwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiVmlkZW9yZXdhcmRzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJWaWRlb3Jld2FyZHNcIiwgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykgfTtcclxuICAgICAgICAgICAgY2FzZSBcIndpdGhkcmF3YWxcIjogLy9cdTYzRDBcdTczQjBcdTZCRDRcdTRGOEJcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcIndpdGhkcmF3YWxcIiwgdmFsdWU6IFRvb2xzLnBhcnNlU3RyaW5nKGQudmFsdWUgYXMgc3RyaW5nLCBcIjpcIikgfTtcclxuICAgICAgICAgICAgY2FzZSBcIkludml0YXRpb25fcmV3YXJkc1wiOiAvL1x1OTA4MFx1OEJGN1x1NTk3RFx1NTNDQlx1NTk1Nlx1NTJCMVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJJbnZpdGF0aW9uX3Jld2FyZHNcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aXRoZHJhd2FsX3RpbWVzXCI6IC8vXHU2M0QwXHU3M0IwXHU2QjIxXHU2NTcwXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIndpdGhkcmF3YWxfdGltZXNcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogVG9vbHMucGFyc2VTdHJpbmcoZC52YWx1ZSBhcyBzdHJpbmcpLm1hcCgodjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBUb29scy5wYXJzZVN0cmluZyh2LCBcIjpcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHByaWNlOiBOdW1iZXIodlswXSksIHRpbWVzOiBOdW1iZXIodlsxXSkgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1OTUwMVx1N0I3RVx1NTIzMFx1ODg2OFxyXG4gICAgICogQHBhcmFtIGRcclxuICAgICAqL1xyXG4gICAgc2lnbkluKGQ6IHR5cGVvZiBUYWJsZS5zaWduSW5bMF0pIHtcclxuICAgICAgICByZXR1cm4gPFNpZ25JbkJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgZGF5czogZC5kYXlzLFxyXG4gICAgICAgICAgICByZXdhcmQ6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnJld2FyZCksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTRFRkJcdTUyQTFcdTg4NjhcclxuICAgICAqL1xyXG4gICAgdGFzayhkOiB0eXBlb2YgVGFibGUudGFza1swXSkge1xyXG4gICAgICAgIHJldHVybiA8VGFza0Jhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgdGltZXM6IGQudGltZXMsXHJcbiAgICAgICAgICAgIHJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQucmV3YXJkKSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgICAgICB0aXRsZTogZC50aXRsZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uIHx8IGBnYW1lL2ltZ19iYXJtLnBuZ2AsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbn07XHJcblxyXG4vKipcclxuICogXHU4OUUzXHU2NzkwXHU4RDI3XHU1RTAxXHJcbiAqIEBwYXJhbSBzdHIgXHU4OUUzXHU2NzkwXHU3Njg0XHU4RDI3XHU1RTAxXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0IGlkOm51bVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKHN0cjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN0cikgcmV0dXJuIG51bGw7XHJcbiAgICBsZXQgbGlzdCA9IFRvb2xzLnBhcnNlU3RyaW5nKHN0ciwgXCI6XCIpO1xyXG5cclxuICAgIHJldHVybiA8UmV3YXJkQ3VycmVuY3lCYXNlPntcclxuICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChOdW1iZXIobGlzdFswXSkpLFxyXG4gICAgICAgIGNvdW50OiBOdW1iZXIobGlzdFsxXSksXHJcbiAgICB9O1xyXG59XHJcblxyXG50eXBlIHR5cGVUYWJsZSA9IHR5cGVvZiBUYWJsZVByb3BlcnR5RXZlbnQ7XHJcblxyXG5jbGFzcyBUYWJsZUNvbnRyb2wge1xyXG4gICAgcHJpdmF0ZSB0YWJsZUNhY2hlOiBNYXA8a2V5b2YgdHlwZVRhYmxlLCBSZXR1cm5UeXBlPHR5cGVUYWJsZVtrZXlvZiB0eXBlVGFibGVdPltdPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NzY4NFx1ODg2OFxyXG4gICAgICogQHBhcmFtIGtleSBcdTg4NjhcdTc2ODRrZXlcclxuICAgICAqL1xyXG4gICAgdGFibGU8VCBleHRlbmRzIGtleW9mIHR5cGVUYWJsZT4oXHJcbiAgICAgICAga2V5OiBUXHJcbiAgICApOiB7XHJcbiAgICAgICAgbGlzdDogUmV0dXJuVHlwZTx0eXBlVGFibGVbVF0+W107XHJcbiAgICAgICAgZ2V0OiB7IChpZDogbnVtYmVyIHwgc3RyaW5nKTogUmV0dXJuVHlwZTx0eXBlVGFibGVbVF0+IH07XHJcbiAgICB9IHtcclxuICAgICAgICAvL1x1OEJGQlx1NTNENlx1N0VDNFx1NjIxMFxyXG4gICAgICAgIGlmICh0aGlzLnRhYmxlQ2FjaGUuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFibGVCYWNrKHRoaXMudGFibGVDYWNoZS5nZXQoa2V5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU4OUUzXHU2NzkwXHU2NTcwXHU2MzZFXHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBUYWJsZVtrZXldLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKFRhYmxlUHJvcGVydHlFdmVudFtrZXldKGUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL1x1N0YxM1x1NUI1OFx1ODlFM1x1Njc5MFx1ODg2OFx1NzY4NFx1NjU3MFx1NjM2RVxyXG4gICAgICAgIHRoaXMudGFibGVDYWNoZS5zZXQoa2V5LCBsaXN0KTtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWJsZUJhY2sobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc1MjhcdTRFOEV0YWJsZVx1NjVCOVx1NkNENVx1OEZENFx1NTZERVx1NjU3MFx1NjM2RVx1NjgzQ1x1NUYwRlx1NTQ4Q1x1NkRGQlx1NTJBMFx1ODNCN1x1NTNENlx1NTM1NVx1NEUyQVx1ODg2OFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGxpc3QgXHU4OUUzXHU2NzkwXHU4ODY4XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAgICAgKiBAcmV0dXJucyBcdThGRDRcdTU2REVcdTYzMDdcdTVCOUFcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB0YWJsZUJhY2sobGlzdCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGxpc3Q6IGxpc3QsXHJcbiAgICAgICAgICAgIGdldChpZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSBsaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0W3hdLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0W3hdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTg4NjhcdTY4M0NcdTg5RTNcdTY3OTBcdTVERTVcdTUxNzdcclxuICovXHJcbmNvbnN0IFRhYmxlQW5hbHl6ZSA9IG5ldyBUYWJsZUNvbnRyb2woKTtcclxuZXhwb3J0IGRlZmF1bHQgVGFibGVBbmFseXplO1xyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFRhc2tCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhc2tEYXRhT2JqIHtcclxuICAgIC8qKiBcdTRFRkJcdTUyQTFpZCAqL1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTVCOENcdTYyMTBcdTZCMjFcdTY1NzAgKi9cclxuICAgIHRpbWVzOiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU5ODg2XHU1M0Q2XHU1OTU2XHU1MkIxIDBcdTY3MkFcdTk4ODZcdTUzRDYgMVx1NURGMlx1OTg4Nlx1NTNENiAqL1xyXG4gICAgcmVjZWl2ZTogbnVtYmVyO1xyXG4gICAgLyoqIFx1NEVGQlx1NTJBMVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogVGFza0Jhc2U7XHJcbn1cclxuLyoqXHJcbiAqIFx1NEVGQlx1NTJBMVx1NjU3MFx1NjM2RVxyXG4gKi9cclxuY2xhc3MgVGFza1NlcnZpY2Uge1xyXG4gICAgbGlzdDogVGFza0RhdGFPYmpbXSA9IFtdO1xyXG5cclxuICAgIGluaXQoZDogTmV0SW5pdFtcInRhc2tzXCJdKSB7XHJcbiAgICAgICAgZC5mb3JFYWNoKChlKSA9PlxyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogZS5pZCxcclxuICAgICAgICAgICAgICAgIHRpbWVzOiBlLnRpbWVzLFxyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZTogZS5yZWNlaXZlLFxyXG4gICAgICAgICAgICAgICAgYmFzZTogVGFibGVBbmFseXplLnRhYmxlKFwidGFza1wiKS5nZXQoZS5pZCksXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEUwMFx1NEUyQVx1NEVGQlx1NTJBMVxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBnZXRUYXNrKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0W3hdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RUZCXHU1MkExXHU1MjE3XHU4ODY4XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBnZXRMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdEEgPSB0aGlzLmdldFRhc2soYS5pZCksXHJcbiAgICAgICAgICAgICAgICB0QiA9IHRoaXMuZ2V0VGFzayhiLmlkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBhLmlkICtcclxuICAgICAgICAgICAgICAgICh0QT8ucmVjZWl2ZSA/IDEwMDAgOiAxKSArXHJcbiAgICAgICAgICAgICAgICAodEE/LnRpbWVzID49IGEuYmFzZS50aW1lcyA/IDEwMCA6IDEwMDApIC1cclxuICAgICAgICAgICAgICAgIChiLmlkICsgKHRCPy5yZWNlaXZlID8gMTAwMCA6IDEpICsgKHRCPy50aW1lcyA+PSBiLmJhc2UudGltZXMgPyAxMDAgOiAxMDAwKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NEVGQlx1NTJBMVx1NkRGQlx1NTJBMFx1NkIyMVx1NjU3MFxyXG4gICAgICovXHJcbiAgICB0YXNrQWRkVGltZXMoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0YXNrID0gdGhpcy5nZXRUYXNrKGlkKTtcclxuICAgICAgICBpZiAoIXRhc2spIHtcclxuICAgICAgICAgICAgLy9cdTlFRDhcdThCQTRcdTRFMERcdTUyMUJcdTVFRkFcdTRFRkJcdTUyQTFcclxuICAgICAgICAgICAgLy8gdGFzayA9IHsgaWQ6IGlkLCB0aW1lczogMCwgcmVjZWl2ZTogMCwgYmFzZTogVGFibGVBbmFseXplLnRhYmxlKFwidGFza1wiKS5nZXQoaWQpIH07XHJcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdC5wdXNoKHRhc2spO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXNrLnRpbWVzKys7XHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX3Rhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBUYXNrU2VydmljZSgpO1xyXG4iLCAiZXhwb3J0IHR5cGUgTGFuZE9iaiA9IE5ldEluaXRbXCJsYW5kc1wiXVswXTtcclxuXHJcbmNsYXNzIExhbmRTZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGxpc3Q6IE1hcDxudW1iZXIsIExhbmRPYmo+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjFEXHU1OUNCXHU1MzE2XHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgaW5pdChsaXN0OiBMYW5kT2JqW10pIHtcclxuICAgICAgICBsaXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRMYW5kKGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU1NzU3XHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gaWQgXHU1NzFGXHU1NzMwaWRcclxuICAgICAqIEByZXR1cm5zIFx1OEZENFx1NTZERVx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBnZXRMYW5kKGlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmdldChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZERkJcdTUyQTBcdTYyMTZcdTY2MkZcdTY2RjRcdTY1QjBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBkIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBhZGRMYW5kKGQ6IExhbmRPYmopIHtcclxuICAgICAgICB0aGlzLmxpc3Quc2V0KGQuaWQsIGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU3QTdBXHU1NzFGXHU1NzMwXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgTGFuZFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBldEJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXREYXRhQmFzZSB7XHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBQZXRCYXNlO1xyXG4gICAgLyoqIFx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJBMFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gKi9cclxuY2xhc3MgUGV0U2VydmljZSB7XHJcbiAgICBsaXN0OiBQZXREYXRhQmFzZVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgaW5pdChwZXRzOiBudW1iZXJbXSkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogZCxcclxuICAgICAgICAgICAgICAgIGxvY2s6ICFwZXRzLmluY2x1ZGVzKGQuaWQpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NUJBMFx1NzI2OVx1ODlFM1x1OTUwMVx1NjU3MFx1OTFDRlxyXG4gICAgICovXHJcbiAgICBnZXRVbmxvY2tMZW4oKSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IDA7XHJcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFkLmxvY2spIGxlbisrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsZW47XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQZXRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBQbGFudEJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQbGFudERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFBsYW50QmFzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk1MDFcdTVCOUEgKi9cclxuICAgIGxvY2s6IGJvb2xlYW47XHJcbn1cclxuLyoqXHJcbiAqIFx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gKi9cclxuY2xhc3MgUGxhbnRTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFBsYW50RGF0YUJhc2VbXSA9IFtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1NzlDRFx1NUI1MGlkXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGluaXQobGlzdDogbnVtYmVyW10pIHtcclxuICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goeyBiYXNlOiBkLCBsb2NrOiAhbGlzdC5pbmNsdWRlcyhkLmlkKSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEUwMFx1NEUyQVx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGlkIFx1NjkwRFx1NzI2OWlkXHJcbiAgICAgKiBAcmV0dXJucyBcdTY5MERcdTcyNjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgZ2V0UGxhbnQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSB0aGlzLmxpc3QubGVuZ3RoIC0gMTsgeCA+IC0xOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFt4XS5iYXNlLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0W3hdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU5NjY0XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQbGFudFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4uL2NvcmUvSW5zdGFuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcclxuICovXHJcbmNsYXNzIFVzZXJJbmZvIHtcclxuICAgIC8qKiBcdThCQTJcdTUzNTVcdTdCNDlcdTdFQTcgXHU1REYyXHU1QjhDXHU2MjEwICovXHJcbiAgICBvcmRlckxldmVsOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NTQwRFx1NzlGMCAqL1xyXG4gICAgbmlja25hbWU6IHN0cmluZyA9IFwibmFtZVwiO1xyXG4gICAgLy8gLyoqIFx1NzUyOFx1NjIzN2lkICovXHJcbiAgICAvLyB1aWQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1NTJGXHU0RTAwXHU2ODA3XHU4QkM2ICovXHJcbiAgICBrZXk6IHN0cmluZyA9IG51bGw7XHJcbiAgICAvKiogXHU3NTI4XHU1NDBEXHU1OTM0XHU1MENGICovXHJcbiAgICBhdmF0YXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogXHU5NEJCXHU3N0YzICovXHJcbiAgICBkaWFtb25kOiBudW1iZXIgPSA5OTk7XHJcbiAgICAvKiogXHU5MUQxXHU1RTAxICovXHJcbiAgICBnb2xkOiBudW1iZXIgPSA5OTk7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1M0VGXHU0RUU1XHU3NzBCXHU1RTdGXHU1NDRBXHU3Njg0XHU2QjIxXHU2NTcwICovXHJcbiAgICBhZHZlcnRpc2VUaW1lczogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTczQTlcdTVCQjZcdTRGNjlcdTYyMzRcdTc2ODRcdTVCQTBcdTcyNjkgKi9cclxuICAgIHdhcmVQZXRJZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NTI2OVx1NEY1OVx1NEY1M1x1NTI5QiAqL1xyXG4gICAgcGV0Vml0YWxpdHk6IG51bWJlcjtcclxuICAgIC8qKiBcdTZEODhcdTUzMTZcdTk4REZcdTcyNjlcdTUwMTJcdThCQTFcdTY1RjYgKi9cclxuICAgIGRpZ2VzdENvdW50RG93bjogbnVtYmVyO1xyXG4gICAgLyoqIFx1OEZERVx1N0VFRFx1N0I3RVx1NTIzMFx1NTkyOVx1NjU3MCAqL1xyXG4gICAgc2lnbkluRGF5czogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTRFMEFcdTRFMDBcdTZCMjFcdTk4ODZcdTUzRDZcdTc2ODRcdTdCN0VcdTUyMzBcdTU5NTZcdTUyQjFpZCAqL1xyXG4gICAgc2lnbkluSWQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1REYyXHU3RUNGXHU1MkEwXHU5MDFGXHU2QjIxXHU2NTcwICovXHJcbiAgICBzcGVlZFVwVGltZXM6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU0RjUzXHU1MjlCICovXHJcbiAgICB2aXRhbGl0eTogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUxNTFcdTYzNjJcdTZCRDRcdTRGOEIgKi9cclxuICAgIHByb3BvcnRpb246IG51bWJlciA9IDAuMDAwMTtcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTgwMDUgKi9cclxuICAgIGludml0ZVBlb3BsZTogc3RyaW5nO1xyXG4gICAgLyoqIFx1N0IyQ1x1NEUwMFx1NkIyMVx1NzY3Qlx1NUY1NSAxMSBcdTg4NjhcdTc5M0EgXHU2MjREXHU4ODY4XHU3OTNBXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHU1QjhDXHU1MTY4XHU3RUQzXHU2NzVGICAqL1xyXG4gICAgaXNGaXJzdFRpbWU6IG51bWJlcjtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTYzRDBcdTczQjBcdTY1NzBcdTYzNkUgKi9cclxuICAgIHdpdGhkcmF3OiBXaXRoZHJhd0RhdGFbXTtcclxuXHJcbiAgICBnZXQgdHR0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVyTGV2ZWw7XHJcbiAgICB9XHJcbiAgICBzZXQgdHR0KHYpIHtcclxuICAgICAgICB0aGlzLm9yZGVyTGV2ZWwgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubmlja25hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckluZm8oKTtcclxuIiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBQbGFudEJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2FyZUhvdXNlRGF0YSB7XHJcbiAgICBiYXNlOiBQbGFudEJhc2U7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgdHlwZT86IG51bWJlcjtcclxufVxyXG4vKipcclxuICogXHU0RUQzXHU1RTkzXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBXYXJlaG91c2VTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFdhcmVIb3VzZURhdGFbXSA9IFtdO1xyXG5cclxuICAgIGluaXQoXHJcbiAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBudW1iZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICApIHtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoZC5pZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiXHU5NTE5XHU4QkVGXHU3Njg0aWQgXCIgKyBkLmlkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KGQuaWQpLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IGQuYW1vdW50LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU1MUNGXHU1QzExXHU3MjY5XHU1NEMxXHU2NTcwXHU5MUNGXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEBwYXJhbSBhbW91bnRcclxuICAgICAqL1xyXG4gICAgcmVkdWNlQW1vdW50KGlkOiBudW1iZXIsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFt4XS5iYXNlLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RbeF0uY291bnQgLT0gYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdFt4XS5jb3VudCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LnNwbGljZSh4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfT3JkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU5MDUzXHU1MTc3XHJcbiAgICAgKi9cclxuICAgIGdldE9uZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbShpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJdGVtKGlkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFt4XS5iYXNlLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0W3hdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkRGQlx1NTJBMFx1NzI2OVx1NTRDMVxyXG4gICAgICovXHJcbiAgICBhZGQoaWQ6IG51bWJlciwgYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0SXRlbShpZCk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgaXRlbS5jb3VudCArPSBhbW91bnQ7XHJcbiAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KGlkKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJcdTk1MTlcdThCRUZcdTc2ODRpZCBcIiArIGlkKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaWQpLFxyXG4gICAgICAgICAgICBjb3VudDogYW1vdW50LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfT3JkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgV2FyZWhvdXNlU2VydmljZSgpO1xyXG4iLCAiLyoqXHJcbiAqIFx1NzdFRFx1OTRGRVx1NjNBNVx1OEJGN1x1NkM0Mlx1NTM0Rlx1OEJBRVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQXBpSHR0cCB7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU3NjdCXHU1RjU1ICovXHJcbiAgICBsb2dpbiA9IFwiL2xvZ2luXCIsXHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU3NjdCXHU1RjU1IHRva2VuICovXHJcbiAgICBsb2dpblRva2VuID0gXCIvbG9naW4vdG9rZW5cIixcclxuICAgIC8qKiBcdTk4ODZcdTUzRDZcdThCQTJcdTUzNTVcdTU5NTZcdTUyQjEgKi9cclxuICAgIG9yZGVyUmV3YXJkID0gXCIvb3JkZXIvcmV3YXJkXCIsXHJcbiAgICAvKiogXHU5ODg2XHU1M0Q2XHU3QjdFXHU1MjMwXHU1OTU2XHU1MkIxICovXHJcbiAgICBzaWduSW5SZXdhcmQgPSBcIi9zaWduSW4vcmV3YXJkXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU4OUUzXHU5NTAxICovXHJcbiAgICBsYW5kVW5sb2NrID0gXCIvbGFuZC91bmxvY2tcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTY0QURcdTc5Q0QgKi9cclxuICAgIGxhbmRTb3cgPSBcIi9sYW5kL3Nvd1wiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjUzNlx1ODNCNyAqL1xyXG4gICAgbGFuZEdhdGhlciA9IFwiL2xhbmQvZ2F0aGVyXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3ICovXHJcbiAgICBsYW5kVXBncmFkZSA9IFwiL2xhbmQvdXBncmFkZVwiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NTJBMFx1OTAxRiAqL1xyXG4gICAgbGFuZFNwZWVkVXAgPSBcIi9sYW5kL3NwZWVkVXBcIixcclxuICAgIC8qKiBcdTc5Q0RcdTVCNTBcdTg5RTNcdTk1MDEgKi9cclxuICAgIHNlZWRzVW5sb2NrID0gXCIvc2VlZHMvdW5sb2NrXCIsXHJcbiAgICAvKiogXHU4M0I3XHU1M0Q2XHU4MENDXHU1MzA1XHU1MjE3XHU4ODY4PT4gXHU2NjgyXHU2NUY2XHU4RkQ5XHU0RTJBXHU2M0E1XHU1M0UzXHU0RTBEXHU5NzAwXHU4OTgxXHU3NTI4ICovXHJcbiAgICB3YXJlaG91c2UgPSBcIi93YXJlaG91c2VcIixcclxuICAgIC8qKiBcdTgwQ0NcdTUzMDVcdTU1NDZcdTU0QzFcdTUxRkFcdTU1MkUgKi9cclxuICAgIHdhcmVob3VzZVNlbGwgPSBcIi93YXJlaG91c2Uvc2VsbFwiLFxyXG4gICAgLyoqIFx1NUJBMFx1NzI2OVx1OEQyRFx1NEU3MCAqL1xyXG4gICAgcGV0QnV5ID0gXCIvcGV0L2J1eVwiLFxyXG4gICAgLyoqIFx1NUJBMFx1NzI2OVx1NEY2OVx1NjIzNCAqL1xyXG4gICAgcGV0V2VhciA9IFwiL3BldC93ZWFyXCIsXHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU4RDJEXHU0RTcwICovXHJcbiAgICBmZWVkQnV5ID0gXCIvZmVlZC9idXlcIixcclxuICAgIC8qKiBcdTRFRkJcdTUyQTFcdTU5NTZcdTUyQjFcdTk4ODZcdTUzRDYgKi9cclxuICAgIHRhc2tSZXdhcmQgPSBcIi90YXNrL3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1OTBCQlx1NUM0NSAqL1xyXG4gICAgbmVpZ2hib3IgPSBcIi9uZWlnaGJvclwiLFxyXG4gICAgLyoqIFx1NTA3N1x1ODNEQyAqL1xyXG4gICAgbGFuZFN0ZWFsID0gXCIvbGFuZC9zdGVhbFwiLFxyXG4gICAgLyoqIFx1NTM1NVx1NzJFQ1x1NjdFNVx1NzcwQlx1NUU3Rlx1NTQ0QSAqL1xyXG4gICAgYWQgPSBcIi9hZFwiLFxyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NEY1M1x1NTI5Qlx1OEQyRFx1NEU3MCAqL1xyXG4gICAgdml0YWxpdHlCdXkgPSBcIi92aXRhbGl0eS9idXlcIixcclxuICAgIC8qKiBcdTU2REVcdTgxRUFcdTVERjFcdTVCQjYgKi9cclxuICAgIGdvSG9tZSA9IFwiL2dvSG9tZVwiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1NTIyMFx1OTY2NCAqL1xyXG4gICAgZnJpZW5kRGVsZXRlID0gXCIvZnJpZW5kL2RlbGV0ZVwiLFxyXG4gICAgLyoqIFx1OTAxQVx1OEZDN1x1NTk3RFx1NTNDQlx1NzUzM1x1OEJGNyAqL1xyXG4gICAgZnJpZW5kQWxsb3cgPSBcIi9mcmllbmQvYWxsb3dcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTc1MzNcdThCRjcgKi9cclxuICAgIGZyaWVuZEFwcGx5ID0gXCIvZnJpZW5kL2FwcGx5XCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU2NDFDXHU3RDIyICovXHJcbiAgICBmcmllbmRTZWFyY2ggPSBcIi9mcmllbmQvc2VhcmNoXCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU1MjE3XHU4ODY4ICovXHJcbiAgICBmcmllbmRMaXN0ID0gXCIvZnJpZW5kL2xpc3RcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTkwODBcdThCRjdcdTgwMDVcdTdFRDFcdTVCOUEgKi9cclxuICAgIGZyaWVuZEludml0ZVBlb3BsZSA9IFwiL2ZyaWVuZC9pbnZpdGUvcGVvcGxlXCIsXHJcbiAgICAvKiogXHU5MDgwXHU4QkY3XHU3Njg0XHU1OTdEXHU1M0NCXHU1MjE3XHU4ODY4ICovXHJcbiAgICBmcmllbmRJbnZpdGVMaXN0ID0gXCIvZnJpZW5kL2ludml0ZS9saXN0XCIsXHJcbiAgICAvKiogXHU5MDgwXHU4QkY3XHU3Njg0XHU1OTdEXHU1M0NCXHU1OTU2XHU1MkIxXHVGRjBDXHU5ODg2XHU1M0Q2ICovXHJcbiAgICBmcmllbmRJbnZpdGVSZWNlaXZlID0gXCIvZnJpZW5kL2ludml0ZS9yZWNlaXZlXCIsXHJcbiAgICAvKiogXHU4QkJGXHU5NUVFXHU1OTdEXHU1M0NCXHU1QkI2XHU5MUNDICovXHJcbiAgICBmcmllbmRWaXNpdCA9IFwiL2ZyaWVuZC92aXNpdFwiLFxyXG4gICAgLyoqIFx1OTBBRVx1NEVGNlx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbWFpbExpc3QgPSBcIi9tYWlsL2xpc3RcIixcclxuICAgIC8qKiBcdTkwQUVcdTRFRjZcdTk2MDVcdThCRkIgKi9cclxuICAgIG1haWxSZWFkID0gXCIvbWFpbC9yZWFkXCIsXHJcbiAgICAvKiogXHU5MEFFXHU0RUY2XHU1MjIwXHU5NjY0ICovXHJcbiAgICBtYWlsRGVsZXRlID0gXCIvbWFpbC9kZWxldGVcIixcclxuICAgIC8qKiBcdTYzRDBcdTczQjAgKi9cclxuICAgIHdpdGhkcmF3ID0gXCIvd2l0aGRyYXdcIixcclxufVxyXG4iLCAiaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgUGV0U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BldFNlcnZpY2VcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCIuL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi9SZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTUzNEZcdThCQUVcdTY1NzBcdTYzNkVcdTU5MDRcdTc0MDZcclxuICovXHJcbmNsYXNzIEh0dHBEYXRhQ29udHJvbCB7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU4RjZDXHU1M0QxICovXHJcbiAgICBmb3J3YXJkKGQ6IHtcclxuICAgICAgICBhcGk6IEFwaUh0dHA7XHJcbiAgICAgICAgZGF0YTogYW55O1xyXG4gICAgICAgIHJlc29sdmVFdmVudD86IEZ1bmN0aW9uO1xyXG4gICAgICAgIC8vIFRPRE8gXHU4RkQ5XHU0RTJBXHU1M0VGXHU4MEZEXHU2NzA5XHU1RjAyXHU2QjY1XHU5MUNEXHU1OTBEXHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU2MzkyXHU2N0U1XHU0RTAwXHU0RTBCXHJcbiAgICAgICAgZXJyb3I/OiBGdW5jdGlvbjtcclxuICAgIH0pIHtcclxuICAgICAgICBzd2l0Y2ggKGQuYXBpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sb2dpbjpcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxvZ2luVG9rZW46XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRTcGVlZFVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5hZDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZEdhdGhlcjpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDAzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAuZmVlZEJ1eTpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA2KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFNvdzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAud2FyZWhvdXNlU2VsbDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA4KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnNlZWRzVW5sb2NrOlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRTb3c6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFVubG9jazpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5wZXRCdXk6XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC52aXRhbGl0eUJ1eTpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC50YXNrUmV3YXJkOlxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFVwZ3JhZGU6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAub3JkZXJSZXdhcmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGQucmVzb2x2ZUV2ZW50KSBkLnJlc29sdmVFdmVudChkLmRhdGEpO1xyXG5cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KGQuYXBpLCBkLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKGVycm9yQ29kZTogbnVtYmVyLCBkYXRhOiBhbnkpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAvLyB0ZXh0OiBgZXJyb3JDb2RlICR7ZXJyb3JDb2RlfSAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWAsXHJcbiAgICAgICAgICAgIHRleHQ6IGAke2RhdGE/Lm1lc3NhZ2V9YCxcclxuICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2N0JcdTVGNTVcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvZ2luKGQ6IE5ldEluaXQpIHtcclxuICAgICAgICBpZiAoIWQpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTc2N0JcdTVGNTVcdTk1MTlcdThCRUYsXHU4QkY3XHU5MUNEXHU4QkQ1XCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBsYW50U2VydmljZS5pbml0KGQuc2VlZHMpO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UuaW5pdChkLndhcmVob3VzZSk7XHJcbiAgICAgICAgVXNlckluZm8ua2V5ID0gZC51c2VySW5mby5rZXk7XHJcbiAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IGQudXNlckluZm8uZGlhbW9uZDtcclxuICAgICAgICBVc2VySW5mby5nb2xkID0gZC51c2VySW5mby5nb2xkO1xyXG4gICAgICAgIFVzZXJJbmZvLm5pY2tuYW1lID0gZC51c2VySW5mby5uaWNrbmFtZTtcclxuICAgICAgICBVc2VySW5mby5hdmF0YXIgPSBkLnVzZXJJbmZvLmF2YXRhcjtcclxuICAgICAgICBVc2VySW5mby5vcmRlckxldmVsID0gZC5vcmRlcklkIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8ud2FyZVBldElkID0gZC53ZWFyUGV0Py5pZDtcclxuICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IGQud2VhclBldD8udml0YWxpdHkgfHwgMDtcclxuICAgICAgICBVc2VySW5mby5kaWdlc3RDb3VudERvd24gPSBkLndlYXJQZXQ/LmRpZ2VzdENvdW50RG93biB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcyB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnNpZ25JbkRheXMgPSBkLnNpZ25JbkRheXMgfHwgMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5JZCA9IGQuc2lnbkluSWQ7XHJcbiAgICAgICAgVXNlckluZm8uc3BlZWRVcFRpbWVzID0gZC5zcGVlZFVwVGltZXM7XHJcbiAgICAgICAgVXNlckluZm8udml0YWxpdHkgPSBkLnVzZXJJbmZvLnZpdGFsaXR5O1xyXG4gICAgICAgIFVzZXJJbmZvLmludml0ZVBlb3BsZSA9IGQudXNlckluZm8uaW52aXRlUGVvcGxlO1xyXG4gICAgICAgIFVzZXJJbmZvLmlzRmlyc3RUaW1lID0gZC51c2VySW5mby5pc0ZpcnN0VGltZTtcclxuICAgICAgICBVc2VySW5mby53aXRoZHJhdyA9IGQud2l0aGRyYXc7XHJcbiAgICAgICAgUGV0U2VydmljZS5pbml0KGQucGV0cyk7XHJcbiAgICAgICAgVGFza1NlcnZpY2UuaW5pdChkLnRhc2tzKTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJpc0xvZ2luXCIsIHRydWUpO1xyXG4gICAgICAgIGlmIChkLnRva2VuKSBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ0b2tlblwiLCBkLnRva2VuKTtcclxuICAgICAgICBMYW5kU2VydmljZS5pbml0KGQubGFuZHMpO1xyXG5cclxuICAgICAgICBDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQgPSBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS5zb3VuZDtcclxuICAgICAgICBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQgPSBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS5tdXNpYztcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbk91dCgpIHtcclxuICAgICAgICBQbGFudFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgUGV0U2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIExhbmRTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgVGFza1NlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJpc0xvZ2luXCIsIGZhbHNlKTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ0b2tlblwiLCBudWxsKTtcclxuICAgICAgICBVc2VySW5mby5rZXkgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLmRpYW1vbmQgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmdvbGQgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLm5pY2tuYW1lID0gXCJcIjtcclxuICAgICAgICBVc2VySW5mby5hdmF0YXIgPSBcIlwiO1xyXG4gICAgICAgIFVzZXJJbmZvLm9yZGVyTGV2ZWwgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLndhcmVQZXRJZCA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnNpZ25JbkRheXMgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnNpZ25JbklkID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5zcGVlZFVwVGltZXMgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gMDtcclxuICAgICAgICBVc2VySW5mby5pbnZpdGVQZW9wbGUgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLmlzRmlyc3RUaW1lID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby53aXRoZHJhdyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5RUQ4XHU4QkE0XHU3NTI4XHU2NzY1XHU2NkY0XHU2NUIwXHU3NTI4XHU2MjM3XHU5MUQxXHU1RTAxXHU3QjQ5XHJcbiAgICAgKiBAcGFyYW0gZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVVzZXJJbmZvKGQ6IFJldHVyblVzZXJJbmZvKSB7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IGQuZ29sZDtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC5kaWFtb25kO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcyB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExXHU4RkRCXHU1RUE2XHJcbiAgICAgKiBAcGFyYW0gaWQgXHU0RUZCXHU1MkExaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB0YXNrVXBkYXRlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSHR0cERhdGFDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCJzcmMvY29yZS9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcIi4vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcIi4vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwRGF0YUNvbnRyb2wgZnJvbSBcIi4vSHR0cERhdGFDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwiLi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vUmVzXCI7XHJcblxyXG5pbnRlcmZhY2UgSHR0cFNlbmREYXRhIHtcclxuICAgIGFwaTogQXBpSHR0cDtcclxuICAgIGRhdGE/OiBhbnk7XHJcbiAgICBtZXRob2Q/OiBzdHJpbmc7XHJcbiAgICByZXNwb25zZVR5cGU/OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzPzogYW55W10gfCBudWxsO1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1OTUxOVx1OEJFRlx1NTZERVx1OEMwMyAqL1xyXG4gICAgZXJyb3I/OiB7IChjb2RlOiBudW1iZXIsIGRhdGE6IGFueSk6IHZvaWQgfTtcclxuICAgIGJhc2VVcmw/OiBzdHJpbmc7XHJcbiAgICAvKiogXHU1M0QxXHU4RDc3XHU4QkY3XHU2QzQyXHU1MjREICovXHJcbiAgICBiZWZvcmU/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NzdFRFx1OTRGRVx1NjNBNVx1NjNBN1x1NTIzNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cENvbnRyb2wge1xyXG4gICAgQEluc3RhbmNlXHJcbiAgICBzdGF0aWMgaW5zdDogSHR0cENvbnRyb2w7XHJcblxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNlbmREYXRhOiBIdHRwU2VuZERhdGE7XHJcblxyXG4gICAgLyoqIFx1NEU4Qlx1NEVGNlx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBldmVudE1hcDogTWFwPHN0cmluZywgWE1MSHR0cFJlcXVlc3Q+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGluaXQodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJlc29sdmVcclxuICAgICAqIEBwYXJhbSByZWplY3RcclxuICAgICAqIEBwYXJhbSBhZCBcdTY2MkZcdTU0MjZcdTY2MkZcdTVFN0ZcdTU0NEFcdTc2ODRcdTY1NzBcdTYzNkVcdTUzNEZcdThCQUVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlWGhyKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhZDogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoeG1saHR0cC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeG1saHR0cC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDEyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoZGF0YSwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJPbmVJbkV2ZW50TWFwKHhtbGh0dHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhtbGh0dHAucmVzcG9uc2VUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZCA9IEpTT04ucGFyc2UoeG1saHR0cC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuc3RhdHVzQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGAke3htbGh0dHAucmVzcG9uc2VUZXh0fSBcdThCRjdcdTkxQ0RcdThCRDVgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5jb2RlID0gOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVIYW5kbGVyKGQsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck9uZUluRXZlbnRNYXAoeG1saHR0cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF4bWxodHRwLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiA0MDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogXCJcdTY3MERcdTUyQTFcdTU2NjhcdTY3MkFcdTU0Q0RcdTVFOTRcdUZGMENcdThCRjdcdTkxQ0RcdThCRDVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck9uZUluRXZlbnRNYXAoeG1saHR0cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB4bWxodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjIwXHU5NjY0XHU5NjFGXHU1MjE3XHU0RThCXHU0RUY2XHJcbiAgICAgKiBAcGFyYW0geG1sXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2xlYXJPbmVJbkV2ZW50TWFwKHhtbDogWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYXAuZm9yRWFjaCgoZSwgdikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgPT0geG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNlbmQoZGF0YTogSHR0cFNlbmREYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhLm1ldGhvZCkgZGF0YS5tZXRob2QgPSBcInBvc3RcIjtcclxuICAgICAgICBpZiAoIWRhdGEucmVzcG9uc2VUeXBlKSBkYXRhLnJlc3BvbnNlVHlwZSA9IFwianNvblwiO1xyXG4gICAgICAgIGlmICghZGF0YS5iYXNlVXJsKSBkYXRhLmJhc2VVcmwgPSB0aGlzLmJhc2VVcmw7XHJcblxyXG4gICAgICAgIGxldCB1cmkgPSBkYXRhLmJhc2VVcmwgKyBkYXRhLmFwaTtcclxuXHJcbiAgICAgICAgbGV0IHNlbmREYXRhOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5kYXRhKS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5wdXNoKGAke2R9PSR7ZGF0YS5kYXRhW2RdfWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VuZERhdGFTdHJpbmcgPSBzZW5kRGF0YS5qb2luKFwiJlwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRNYXAuZ2V0KHVyaSArIHNlbmREYXRhU3RyaW5nKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhPy50eXBlID09IENvbmZpZ0dhbWUuQXBpVHlwZUFEKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeGhyID0gdGhpcy5jcmVhdGVYaHIocmVzb2x2ZSwgcmVqZWN0LCBhZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlbmREYXRhID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5iZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYmVmb3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YS5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmhlYWRlcnMgPSBbXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbn1gXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBgJWMgPT0+IHNlbmQgJWMke2RhdGEuYXBpfSAlYyR7SlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhKX1gLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiM4MmNjZGQ7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6I2ViNGQ0Yjtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojZjhjMjkxO2ZvbnQtd2VpZ2h0OjcwMDtgXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRhdGEuYXBpKSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuSGludFZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJtOiB7IHRleHQ6IGBodHRwIFx1NTczMFx1NTc0MFx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QWAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJpLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbn1gKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5zZW5kKHNlbmREYXRhU3RyaW5nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYXAuc2V0KHVyaSArIHNlbmREYXRhU3RyaW5nLCB4aHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGUsIHJlc29sdmU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGUuY29kZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZW5kRGF0YT8uZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZERhdGEuZXJyb3IoZS5jb2RlLCBlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5lcnJvcihlLmNvZGUsIGUuZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYCVjIDw9PSBiYWNrICVjJHt0aGlzLnNlbmREYXRhLmFwaX0gYCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojYjhlOTk0O2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiM3OGUwOGY7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBlLmRhdGFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgSHR0cERhdGFDb250cm9sLmZvcndhcmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogdGhpcy5zZW5kRGF0YS5hcGksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVFdmVudDogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzSGFuZGxlcihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vICBBZGRMYW5kVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkTGFuZFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb3N0SWNvbiwgdGlwczpcIlx1NEVGN1x1NjgzQ1x1NTZGRVx1NjgwN1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29zdEljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvc3RGb250LCB0aXBzOlwiXHU0RUY3XHU2ODNDRm9udFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29zdEZvbnQ6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBpZDogbnVtYmVyOyBjYWxsOiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIHByaXZhdGUgbGFuZERhdGE6IFJld2FyZEN1cnJlbmN5QmFzZTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5kRGF0YSA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ1bmxvY2tfbGFuZF9jb3N0XCIpLnZhbHVlW1xyXG4gICAgICAgICAgICBMYW5kU2VydmljZS5saXN0LnNpemVcclxuICAgICAgICBdIGFzIFJld2FyZEN1cnJlbmN5QmFzZTtcclxuICAgICAgICB0aGlzLmNvc3RJY29uLnNraW4gPSB0aGlzLmxhbmREYXRhLm9iai5pY29uO1xyXG4gICAgICAgIHRoaXMuY29zdEZvbnQudmFsdWUgPSB0aGlzLmxhbmREYXRhLmNvdW50ICsgXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFkZExhbmRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29zdF9nb2xkXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmREYXRhLmNvdW50ID4gVXNlckluZm8uZ29sZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEub2JqLmlkID09IENvbmZpZ0dhbWUuZGlhbW9uZElkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5jb3VudCA+IFVzZXJJbmZvLmRpYW1vbmRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5NEJCXHU3N0YzXHU0RTBEXHU4REIzXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVW5sb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFkZExhbmRWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZF9idG5cIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVW5sb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vLyAgQnV5Vml0YWxpdHlWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXlWaXRhbGl0eVZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxhYmVsLCB0aXBzOlwiXHU0RUY3XHU2ODNDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxhYmVsOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUljb24sIHRpcHM6XCJcdTRFRjdcdTY4M0NpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9O1xyXG4gICAgcHJpdmF0ZSBjb3N0R29sZENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgb25PcGVuZWQoZTogeyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICBsZXQgY29zdEdvbGRDb3VudCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIpLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICB0aGlzLmNvc3RHb2xkQ291bnQgPSBjb3N0R29sZENvdW50O1xyXG4gICAgICAgIHRoaXMucHJpY2VMYWJlbC50ZXh0ID0gYFx1NEVGN1x1NjgzQ1x1RkYxQSR7Y29zdEdvbGRDb3VudH1gO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5QWRCdG5cIjpcclxuICAgICAgICAgICAgY2FzZSBcImJ1eUJ0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnZpdGFsaXR5ID49IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ2aXRhbGl0eUxpbWl0XCIpLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTRGNTNcdTUyOUJcdTVERjJcdTZFRTFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gXCJidXlCdG5cIiAmJiBVc2VySW5mby5nb2xkIDwgdGhpcy5jb3N0R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC52aXRhbGl0eUJ1eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwiYnV5QnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBnb2xkOiAwOyBkaWFtb25kOiAwOyBhZHZlcnRpc2VUaW1lczogMDsgdml0YWxpdHk6IDAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudml0YWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5CdXlWaXRhbGl0eVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5cclxuLy8gIEZpZWxkTGV2ZWxVcFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkTGV2ZWxVcFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxhYmVsLCB0aXBzOlwiXHU0RUY3XHU2ODNDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxhYmVsOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUljb24sIHRpcHM6XCJcdTRFRjdcdTY4M0NpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBvYmo6IExhbmRPYmo7IGNhbGw6IEZ1bmN0aW9uIH07XHJcblxyXG4gICAgb25PcGVuZWQoZTogeyBvYmo6IExhbmRPYmo7IGNhbGw6IEZ1bmN0aW9uIH0pIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBlO1xyXG4gICAgICAgIGxldCBuZXh0TGFuZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImxhbmRMZXZlbFwiKS5nZXQoZS5vYmoubGV2ZWwgKyAxKTtcclxuICAgICAgICB0aGlzLnByaWNlTGFiZWwudGV4dCA9IGBcdTRFRjdcdTY4M0NcdUZGMUEke25leHRMYW5kLmNvc3QuY291bnR9YDtcclxuICAgICAgICB0aGlzLnByaWNlSWNvbi5za2luID0gbmV4dExhbmQuY29zdC5vYmouaWNvbjtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cGdyYWRlQnRuXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cGdyYWRlQWRCdG5cIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVXBncmFkZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJnYXRoZXJcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEub2JqLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwidXBncmFkZUJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PSBcInVwZ3JhZGVBZEJ0blwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc0Rlc2NWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBhbmVsTm9kZSwgdGlwczpcIlx1NkVEQVx1NTJBOFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBwYW5lbE5vZGU6IExheWEuUGFuZWw7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxOb2RlLnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1Jld2FyZFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNSZXdhcmRWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppbnZpdGVCb3gsIHRpcHM6XCJcdTY1NzRcdTY1NzBcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGludml0ZUJveDogTGF5YS5Cb3g7XHJcbiAgICAvKiogQHByb3Age25hbWU6aW52aXRlSW5wdXQsIHRpcHM6XCJcdThGOTNcdTUxNjVcdTkwODBcdThCRjdcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGludml0ZUlucHV0OiBMYXlhLlRleHRJbnB1dDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxpc3QsIHRpcHM6XCJcdThGOTNcdTUxNjVcdTkwODBcdThCRjdcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlTGlzdDogTGF5YS5MaXN0O1xyXG5cclxuICAgIHByaXZhdGUgaW52aXRlTGlzdDogSW52aXRlRGF0YVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSByZXdhcmRWYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcHJvcG9ydGlvbjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QuYXJyYXkgPSBuZXcgQXJyYXkoMyk7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW5lZChsaXN0OiBJbnZpdGVEYXRhW10gPSBbXSkge1xyXG4gICAgICAgIHRoaXMuaW52aXRlTGlzdCA9IGxpc3Q7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmludml0ZVBlb3BsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmludml0ZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZXdhcmRWYWx1ZSA9IChcclxuICAgICAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIkludml0YXRpb25fcmV3YXJkc1wiKS52YWx1ZSBhcyBSZXdhcmRDdXJyZW5jeUJhc2VcclxuICAgICAgICApLmNvdW50O1xyXG5cclxuICAgICAgICBjb25zdCB3aXRoZHJhd2FsID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxcIikudmFsdWUgYXMgc3RyaW5nW107XHJcbiAgICAgICAgdGhpcy5wcm9wb3J0aW9uID0gTnVtYmVyKHdpdGhkcmF3YWxbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1Jld2FyZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnZpdGVfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnd4U2hhcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN1Ym1pdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gKGUudGFyZ2V0IGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpdGhkcmF3KGkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU3M0IwXHJcbiAgICAgKiBAcGFyYW0gaVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB3aXRoZHJhdyhpOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlUmVjZWl2ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgaW5kZXg6IGkgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjNEMFx1NzNCMFx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlTGlzdFtpXS5yZWNlaXZlZFJld2FyZCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidG9wXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU3QjJDJHtpICsgMX1cdTRGNERgO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZV9ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkVmFsdWUgLyB0aGlzLnByb3BvcnRpb25cclxuICAgICAgICB9YDtcclxuXHJcbiAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX2V4dHJhY3RBY3RpdmUucG5nXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaW52aXRlTGlzdC5sZW5ndGggPiBpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludml0ZUxpc3RbaV0ucmVjZWl2ZWRSZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfY2FzaERvbmUucG5nXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IGk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYzRDBcdTRFQTRcdTdFRDFcdTVCOUFcdTYyMTFcdTc2ODRcdTkwODBcdThCRjdcdTRFQkFcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnZpdGVJbnB1dC50ZXh0IHx8ICF0aGlzLmludml0ZUlucHV0LnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5MDgwXHU4QkY3XHU3ODAxXHU0RTBEXHU4MEZEXHU0RTNBXHU3QTdBXHVGRjAxXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRJbnZpdGVQZW9wbGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLmludml0ZUlucHV0LnRleHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5pbnZpdGVQZW9wbGUgPSB0aGlzLmludml0ZUlucHV0LnRleHQ7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1N0VEMVx1NUI5QVx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkZEJveCwgdGlwczpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWRkQm94OiBMYXlhLkJveDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTGlzdCwgdGlwczpcIlx1NTIxN1x1ODg2OFx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUxpc3Q6IExheWEuTGlzdDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1c2VyS2V5LCB0aXBzOlwiXHU3NTI4XHU2MjM3XHU1M0NCXHU2MEM1XHU3ODAxXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB1c2VyS2V5OiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmtleUlucHV0Tm9kZSwgdGlwczpcIlx1OTA4MFx1OEJGN1x1NzgwMVx1OEY5M1x1NTE2NVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUga2V5SW5wdXROb2RlOiBMYXlhLlRleHRJbnB1dDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRGcmllbmQsIHRpcHM6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0JcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZEZyaWVuZDogTGF5YS5JbWFnZTtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZW1wdHlfbGIsIHRpcHM6XCJcdTdBN0FcdTc2ODRcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGVtcHR5X2xiOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogMVx1NjYyRlx1NTk3RFx1NTNDQlx1NTIxN1x1ODg2OCAyIFx1NTJBMFx1NTk3RFx1NTNDQiAgM1x1NTIyMFx1OTY2NFx1NTk3RFx1NTNDQiAqL1xyXG4gICAgcHJpdmF0ZSB2aWV3U3RhdGU6IDEgfCAyIHwgMyA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBmcmllbmRzOiBGcmllbmREYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgZnJpZW5kc0xpc3Q6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKGQ6IEZyaWVuZExpc3REYXRhKSB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzID0gZC5saXN0O1xyXG4gICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSB0aGlzLmZyaWVuZHM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMuaXRlbVJlbmRlcik7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51c2VyS2V5LnRleHQgPSBgXHU2MjExXHU3Njg0XHU1M0NCXHU2MEM1XHU3ODAxXHVGRjFBJHtVc2VySW5mby5rZXl9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzRW1wdHkoKSB7XHJcbiAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gIXRoaXMuaXRlbUxpc3QuYXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTGlzdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmFwcGx5SW5nICogMTAwMDAwIC0gYS5hcHBseUluZyAqIDEwMDAwMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGl0ZW1SZW5kZXIoY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZyaWVuZHNMaXN0W2ldO1xyXG5cclxuICAgICAgICBsZXQgbmV3Qm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm5ld19ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGhlYXJ0Qm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImhlYXJ0X2JveFwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBnb1BsYXlCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZ29fcGxheV9idG5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgYXBwbHlCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYXBwbHlfYnRuXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGRlbEJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZWxfYnRuXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaGVhcnRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBkZWxCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5hdmF0YXIpIChjZWxsLmdldENoaWxkQnlOYW1lKFwiaGVhZFwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZGF0YS5hdmF0YXI7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBkYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibHZcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IChkYXRhLm9yZGVyTGV2ZWwgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChoZWFydEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gKGRhdGEuaW50aW1hY3kgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICBkYXRhLmdhaW5EaWFtb25kICsgXCJcIjtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZWxfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgIGdvUGxheUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnZpZXdTdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBhcHBseUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRlbEJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IDEgfHwgdGhpcy52aWV3U3RhdGUgPT0gMykge1xyXG4gICAgICAgICAgICAvL1x1NzUzM1x1OEJGNyBcdTRFMkRcclxuICAgICAgICAgICAgaWYgKGRhdGEuYXBwbHlJbmcpIHtcclxuICAgICAgICAgICAgICAgIG5ld0JveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgKG5ld0JveC5nZXRDaGlsZEJ5TmFtZShcInBhc3RfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgKG5ld0JveC5nZXRDaGlsZEJ5TmFtZShcImlnbm9yZVwiKSBhcyBMYXlhLkltYWdlKS5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NURGMlx1N0VDRlx1NjYyRlx1NTk3RFx1NTNDQlxyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkX2ZyaWVuZFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IDMgfHwgdGhpcy52aWV3U3RhdGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuaGVpZ2h0ID0gOTE0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRnJpZW5kLnNraW4gPSBgZ2FtZS9pbWdfYWRkQnRuLnBuZ2A7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5oZWlnaHQgPSA1OTA7IC8vOTE0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRGcmllbmQuc2tpbiA9IGBnYW1lL2ltZ19mcmllbmRCdG4ucG5nYDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5X2xiLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBgZ2FtZS9pbWdfaGFuZ291dC5wbmdgXHJcbiAgICAgICAgICAgICAgICAvLyBpbWdfZnJpZW5kQnRuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlbF9mcmllbmRcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdTdGF0ZSA9PSAzKSBicmVhaztcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0Y6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWQuYXBwbHlJbmcpIG5ld0YucHVzaChkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IG5ld0Y7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDkxNDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZyaWVuZC5za2luID0gYGdhbWUvaW1nX2ZyaWVuZEJ0bi5wbmdgO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZXNjX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJld2FyZF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb3B5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlYXJjaF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFwcGx5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUV2ZW50KGUudGFyZ2V0IGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBhc3RfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93RnJpZW5kKGUudGFyZ2V0IGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlbF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJpZW5kKGUudGFyZ2V0IGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImlnbm9yZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pZ25vcmUoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fcGxheV9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaXRGcmllbmQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1RkZEXHU3NTY1XHU1OTdEXHU1M0NCXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaWdub3JlKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFTb3VyY2UgYXMgRnJpZW5kRGF0YTtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kRGVsZXRlLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuZnJpZW5kcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyaWVuZHNbeF0udWlkID09IGRhdGEudWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kcy5zcGxpY2UoeCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb3BlblJld2FyZCgpIHtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlTGlzdCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogSW52aXRlTGlzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNSZXdhcmRWaWV3LCB7IHBhcm06IGQubGlzdCB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJGXHU5NUVFXHU1OTdEXHU1M0NCXHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdmlzaXRGcmllbmQodGFyZ2V0OiBMYXlhLkltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyh0cnVlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFTb3VyY2UgYXMgRnJpZW5kRGF0YTtcclxuXHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kVmlzaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmdvX2ZyaWVuZF9ob21lLCBbZCwgZGF0YV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIyMFx1OTY2NFx1NTk3RFx1NTNDQlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlbGV0ZUZyaWVuZCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1Nzg2RVx1OEJBNFx1ODk4MVx1NTIyMFx1OTY2NFx1NTk3RFx1NTNDQlx1NTQxN1x1RkYxRlwiLFxyXG4gICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kRGVsZXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuZnJpZW5kcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJpZW5kc1t4XS51aWQgPT0gZGF0YS51aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsQ2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkwMUFcdThGQzdcdTU5N0RcdTUzQ0JcdTc1MzNcdThCRjdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhbGxvd0ZyaWVuZCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEFsbG93LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYXBwbHlJbmcgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUzM1x1OEJGN1x1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFwcGx5RXZlbnQodGFyZ2V0OiBMYXlhLkltYWdlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRBcHBseSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHNMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTVERjJcdTUzRDFcdTkwMDFcdTZGQzBcdTYwQzVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjQxQ1x1N0QyMlx1NTk3RFx1NTNDQlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZWFyY2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleUlucHV0Tm9kZS50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NTNDQlx1NjBDNVx1NzgwMVx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5rZXlJbnB1dE5vZGUudGV4dCA9PSBVc2VySW5mby5rZXkpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTY0MUNcdTdEMjJcdTgxRUFcdTVERjFcdTVFNzJcdTU1NjVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRTZWFyY2gsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLmtleUlucHV0Tm9kZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IEZyaWVuZERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSBbZF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3B5KCkge1xyXG4gICAgICAgIGxldCBhOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgYS52YWx1ZSA9IFVzZXJJbmZvLmtleTtcclxuICAgICAgICBhLnNlbGVjdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgICAgICBhLnJlbW92ZSgpO1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU1OTBEXHU1MjM2XHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGludFZpZXdEYXRhIHtcclxuICAgIC8qKiBcdTY1ODdcdTVCNTdcdTUxODVcdTVCQjkgKi9cclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIC8qKiBcdTc4NkVcdThCQTRcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTUzRDZcdTZEODhcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbmNlbENhbGw/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuLy9kZWZhdWx0IGNsYXNzIEhpbnRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGludFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRleHQsIHRpcHM6XCJcdTUxODVcdTVCQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRleHQ6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29uZmlybUJ0biwgdGlwczpcIlx1Nzg2RVx1OEJBNFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29uZmlybUJ0bjogTGF5YS5JbWFnZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjYW5jZWxCdG4sIHRpcHM6XCJcdTUzRDZcdTZEODhcdTYzMDlcdTk0QUVcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNhbmNlbEJ0bjogTGF5YS5JbWFnZTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IEhpbnRWaWV3RGF0YTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IHRoaXMuZGF0YT8udGV4dCB8fCBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYW5jZWxDYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCAmJiB0aGlzLmRhdGEuY2FuY2VsQ2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDI1MjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDQ1ODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbmNlbENhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FuY2VsQ2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5IaW50Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbmZpcm1cIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5IaW50Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2FkQmFyLCB0aXBzOlwibG9hZCBiYXJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCYXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRCb3gsIHRpcHM6XCJcdTUyQTBcdThGN0RcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2dpbkJveCwgdGlwczpcIlx1NzY3Qlx1OTY0Nlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9naW5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcml2YWN5Qm94LCB0aXBzOlwiXHU5NjkwXHU3OUMxXHU1MzRGXHU4QkFFXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcml2YWN5Qm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpdmFjeUNoZWNrSWNvbiwgdGlwczpcIlx1OTY5MFx1NzlDMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaXZhY3lDaGVja0ljb246IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU4RkRCXHU1RUE2XHU2NzYxXHU5RUQ4XHU4QkE0XHU1QkJEXHU1RUE2ICovXHJcbiAgICBwcml2YXRlIGxvYWRCYXJPbGRXaWR0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuXHJcbiAgICAgICAgaWYgKExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpPy5pc0xvZ2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vbihFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgdGhpcywgdGhpcy5sb2FkUHJvZ3Jlc3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXdha2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxvYWRMYWJlbCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9hZExhYmVsLnRleHQgPSBcIkxvYWQuLi4uMCVcIjtcclxuICAgICAgICB0aGlzLmxvYWRCYXJPbGRXaWR0aCA9IHRoaXMubG9hZEJhci53aWR0aDtcclxuICAgICAgICB0aGlzLmxvYWRCYXIud2lkdGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibG9naW5fYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja19ib3hcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpdmFjeUNoZWNrSWNvbi52aXNpYmxlID0gIXRoaXMucHJpdmFjeUNoZWNrSWNvbi52aXNpYmxlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHVyaTogQXBwRXZlbnRNYXAuY2xlYXJDYWNoZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnNob3dCYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIC8vIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8gYWxlcnQoMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcml2YWN5X2xiXCI6XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnByaXZhY3lBZ3JlZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGxvZ2luKGlzV3g6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnRva2VuKSB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubG9naW5Ub2tlbixcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGNvZGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkOiBOZXRJbml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkgdGhpcy5kYXRhLmNhbGwoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmxvZ2luU3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzV3gpO1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wcml2YWN5Q2hlY2tJY29uLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdThCRjdcdTk2MDVcdThCRkJcdTMwMEFcdTc1MjhcdTYyMzdcdTk2OTBcdTc5QzFcdTUzNEZcdThCQUVcdTMwMEJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVzdEsgPSBsb2NhdGlvbi5zZWFyY2gubWF0Y2goL1xcP2lkPSguKykvKSxcclxuICAgICAgICAgICAgICAgIHRlc3RLZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0ZXN0SyAmJiB0ZXN0Sy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0S2UgPSB0ZXN0S1sxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgd3hPcGVuSWQgPSB0ZXN0S2UsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA9IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXIgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoaXNXeCAmJiAhd3hPcGVuSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnd4TG9naW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eE9wZW5JZCA9IGRhdGEuZGF0YVtcIm9wZW5pZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXIgPSBkYXRhLmRhdGFbXCJpY29udXJsXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lID0gZGF0YS5kYXRhW1wibmFtZVwiXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXd4T3BlbklkKSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjcyQVx1ODNCN1x1NTNENlx1NTIzMFx1NUZBRVx1NEZFMWlkXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubG9naW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJsb2dpblwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFjY291bnQ6IGlzV3ggPyBudWxsIDogdGhpcy51c2VySW5wdXQudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3hJZDogd3hPcGVuSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogKGNvZGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZDogTmV0SW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHRoaXMuZGF0YS5jYWxsKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdXJpOiBBcHBFdmVudE1hcC53eExvZ2luU3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5pc0ZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAucmVnaXN0ZXJTdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5sb2dpblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUHJvZ3Jlc3Modikge1xyXG4gICAgICAgIHRoaXMubG9hZEJhci53aWR0aCA9IHYgKiB0aGlzLmxvYWRCYXJPbGRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vZmYoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIHRoaXMsIHRoaXMubG9hZFByb2dyZXNzKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9kZWZhdWx0IGNsYXNzIE1haWxEZXNjVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxEZXNjVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y2VudGVyUGFuZWwsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlclBhbmVsOiBMYXlhLlBhbmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRpdGxlLCB0aXBzOlwiXHU5ODc2XHU2ODA3XHU5ODk4XHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0aXRsZTogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb3N0TGIsIHRpcHM6XCJcdTUwNzdcdThENzBcdTRFODZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvc3RMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpiYWNrTGIsIHRpcHM6XCJcdTYyN0VcdTU2REVcdTY3NjVcdTc2ODRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJhY2tMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpib3R0b21MYiwgdGlwczpcIlx1NUU5NVx1OTBFOFx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYm90dG9tTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbSwgdGlwczpcIlx1NzI2OVx1NTRDMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOlByZWZhYn0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtOiBMYXlhLlByZWZhYjtcclxuXHJcbiAgICBwcml2YXRlIG1haWxJZDogbnVtYmVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2FsbDogRnVuY3Rpb247XHJcblxyXG4gICAgb25PcGVuZWQoZDogeyBkYXRhOiBNYWlsUmV0dXJuRGF0YTsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkLmRhdGE7XHJcbiAgICAgICAgdGhpcy5jYWxsID0gZC5jYWxsO1xyXG4gICAgICAgIHRoaXMubWFpbElkID0gZC5kYXRhLmlkO1xyXG4gICAgICAgIHRoaXMuY2VudGVyUGFuZWwudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGl0bGUudGV4dCA9IGAke2RhdGEubWVzc2FnZX1cdTZGNUNcdTUxNjVcdTRFODZcdTRGNjBcdTc2ODRcdTgzRENcdTU3MzBgO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zTG9zdDogeyBpZDogbnVtYmVyOyBhbW91bnQ6IG51bWJlciB9W10gPSBbXSxcclxuICAgICAgICAgICAgaXRlbXNCYWNrOiB7IGlkOiBudW1iZXI7IGFtb3VudDogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgICAgIGxldCBsb3N0RGlhbW9uZCA9IDAsXHJcbiAgICAgICAgICAgIGxvc3RHb2xkID0gMDtcclxuICAgICAgICAvLyBhOmI6YyAgYT10eXBlIDFcdThEMjdcdTVFMDEgMiBcdTY5MERcdTcyNjlcclxuXHJcbiAgICAgICAgVG9vbHMucGFyc2VTdHJpbmcoZGF0YS5pdGVtc0xvc3QpLm1hcCgoX2Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBfZCA9IFRvb2xzLnBhcnNlU3RyaW5nKF9kLCBcIjpcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9kKTtcclxuICAgICAgICAgICAgaWYgKF9kWzBdID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxvc3REaWFtb25kICs9IE51bWJlcihfZFsyXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBoYXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXRlbXNMb3N0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhcykge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNMb3N0LnB1c2goeyBpZDogX2RbMV0sIGFtb3VudDogTnVtYmVyKF9kWzJdKSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0xvc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtc0xvc3RbeF0uaWQgPT0gX2RbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc0xvc3RbeF0uYW1vdW50ICs9IE51bWJlcihfZFsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgVG9vbHMucGFyc2VTdHJpbmcoZGF0YS5pdGVtcykubWFwKChfZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIF9kID0gVG9vbHMucGFyc2VTdHJpbmcoX2QsIFwiOlwiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoYXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXRlbXNCYWNrLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhcykge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNCYWNrLnB1c2goeyBpZDogX2RbMV0sIGFtb3VudDogTnVtYmVyKF9kWzJdKSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0JhY2subGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtc0JhY2tbeF0uaWQgPT0gX2RbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc0JhY2tbeF0uYW1vdW50ICs9IE51bWJlcihfZFsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHlBZGQgPSAwLFxyXG4gICAgICAgICAgICBfeCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0xvc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlOiBMYXlhLkJveCA9IHRoaXMuaXRlbS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgaWYgKF94ID4gMiAmJiAheUFkZCkge1xyXG4gICAgICAgICAgICAgICAgeUFkZCsrO1xyXG4gICAgICAgICAgICAgICAgX3ggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeUFkZCAmJiBfeCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHlBZGQrKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbU5vZGUueCA9IDIzMCArIF94ICogMTkwO1xyXG4gICAgICAgICAgICBpdGVtTm9kZS55ID0gMTA1ICsgeUFkZCAqIDk1O1xyXG4gICAgICAgICAgICBfeCsrO1xyXG4gICAgICAgICAgICBsZXQgcGxhbnQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaXRlbXNMb3N0W3hdLmlkKTtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpY29uLnNraW4gPSBwbGFudC5pY29uO1xyXG4gICAgICAgICAgICBpY29uLnNjYWxlKDAuNywgMC43KTtcclxuICAgICAgICAgICAgaWNvbi5hbmNob3JYID0gMC41O1xyXG4gICAgICAgICAgICAoaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke2l0ZW1zTG9zdFt4XS5hbW91bnR9YDtcclxuICAgICAgICAgICAgcGxhbnQuZ2Fpbi5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5kaWFtb25kSWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGxvc3RHb2xkICs9IGQuY291bnQgKiBpdGVtc0xvc3RbeF0uYW1vdW50O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyUGFuZWwuYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHlBZGRCYWNrID0gMDtcclxuICAgICAgICBfeCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0JhY2subGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlOiBMYXlhLkltYWdlID0gdGhpcy5pdGVtLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoX3ggPiAxICYmICF5QWRkQmFjaykge1xyXG4gICAgICAgICAgICAgICAgeUFkZEJhY2srKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHlBZGRCYWNrICYmIF94ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgeUFkZEJhY2srKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbU5vZGUueCA9IDQyMCArIF94ICogMTkwO1xyXG4gICAgICAgICAgICBpdGVtTm9kZS55ID0gMjA4ICsgeUFkZCAqIDk1ICsgeUFkZEJhY2sgKiA5NTtcclxuICAgICAgICAgICAgX3grKztcclxuICAgICAgICAgICAgdGhpcy5jZW50ZXJQYW5lbC5hZGRDaGlsZChpdGVtTm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvc3RMYi55ID0gMTE0O1xyXG4gICAgICAgIHRoaXMuYmFja0xiLnkgPSAyMTggKyB5QWRkICogOTU7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MYi55ID0gMzAxICsgeUFkZCAqIDk1ICsgeUFkZEJhY2sgKiA5NTtcclxuICAgICAgICB0aGlzLmJvdHRvbUxiLnRleHQgPSBgXHU1MTcxXHU4QkExXHU2MzVGXHU1OTMxXHU0RTg2JHtsb3N0R29sZH1cdTkxRDFcdTVFMDFcdUZGMEMke2xvc3REaWFtb25kfVx1OTRCQlx1NzdGM2A7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5NYWlsRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZGVsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubWFpbERlbGV0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpZDogdGhpcy5tYWlsSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsKHRoaXMubWFpbElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk1haWxEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgTWFpbFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6bGlzdCwgdGlwczpcIlx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZW1wdHlfbGIsIHRpcHM6XCJcdTdBN0FcdTc2ODRcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGVtcHR5X2xiOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGxpc3REYXRhOiBNYWlsUmV0dXJuRGF0YVtdID0gW107XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVySXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQobGlzdDogTWFpbFJldHVybkRhdGFbXSA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RGF0YSA9IGxpc3Q7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTGlzdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmFycmF5ID0gdGhpcy5saXN0RGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiAoYS5yZWFkID8gMCA6IDEwMDAwMCArIGIuY3JlYXRlVGltZSkgLSAoYi5yZWFkID8gMCA6IDEwMDAwMCArIGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmNyZWF0ZVRpbWUgLSAoYi5yZWFkID8gMTAwMDAwMCA6IDApIC0gKGEuY3JlYXRlVGltZSAtIChhLnJlYWQgPyAxMDAwMDAwIDogMCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmVtcHR5X2xiLnZpc2libGUgPSAhdGhpcy5saXN0LmFycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckl0ZW0oY2VsbDogTGF5YS5JbWFnZSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxpc3REYXRhW2luZGV4XTtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcIlx1N0NGQlx1N0VERlx1OTBBRVx1NEVGNlwiO1xyXG4gICAgICAgIChcclxuICAgICAgICAgICAgY2VsbC5nZXRDaGlsZEJ5TmFtZShcImRlc2NcIikgYXMgTGF5YS5MYWJlbFxyXG4gICAgICAgICkudGV4dCA9IGAke2RhdGEubWVzc2FnZX1cdTZGNUNcdTUxNjVcdTgzRENcdTU3MzBcdTUwNzdcdTgzREMsXHU4OEFCXHU3MkQ3XHU3MkQ3XHU1M0QxXHU3M0IwXHU1RTc2XHU4RkZEXHU1MkEwXHU1NkRFXHU0RTg2fn5gO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7bmV3IERhdGUoXHJcbiAgICAgICAgICAgIGRhdGEuY3JlYXRlVGltZVxyXG4gICAgICAgICkudG9Mb2NhbGVTdHJpbmcoXCJ6aC1DTlwiLCB7IGhvdXIxMjogZmFsc2UgfSl9YDtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZWFkX2ljb25cIikgYXMgTGF5YS5JbWFnZSkudmlzaWJsZSA9ICFkYXRhLnJlYWQ7XHJcblxyXG4gICAgICAgIGNlbGwuZGF0YVNvdXJjZSA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUuaW5kZXhPZihcIml0ZW1cIikgPiAtMSkge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm1haWxSZWFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl0ucmVhZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTWFpbERlc2NWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6IChtYWlsSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0RGF0YS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0RGF0YVt4XS5pZCA9PSBtYWlsSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLk1haWxWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UsIHsgTGFuZE9iaiB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxhbnREYXRhQmFzZSB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgTWFpblZpZXcsIHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwic3JjL3ZpZXcvTWFpblZpZXdcIjtcclxuaW1wb3J0IHsgU2hvcFZpZXdEYXRhIH0gZnJvbSBcInNyYy92aWV3L1Nob3BWaWV3XCI7XHJcblxyXG4vLyAgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbi8qKlxyXG4gKiBcdTc1MzBcdTU3MzBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlpY29uICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1ODI4Mlx1NzBCOSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBmaWVsZE5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NjcwOVx1NjkwRFx1NzI2OVx1NjVGNlx1NzY4NFx1OTYzNFx1NUY3MSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBzaGFkb3c6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZWxkRW1wdHlSZXMsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTU0MEVcdTU3MUZcdTU3MzBcdTdFQjlcdTc0MDZcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBmaWVsZEVtcHR5UmVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIFx1N0I0OVx1N0VBN1x1NTZGRVx1NzI0NyAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBsdk5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTAxMlx1OEJBMVx1NjVGNlx1NUJCOVx1NTY2OCovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHRpbWVCb3g6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIFx1NTAxMlx1OEJBMVx1NjVGNmxhYmVsICovXHJcbiAgICBwcml2YXRlIGNvdW50RG93bkxiOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU4OEM1XHU5OTcwICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHRvcFN0YXRlSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1ODhDNVx1OTk3MCAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSB1cEFuaTogTGF5YS5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1bmxvY2tJY29uLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwaWNvblx1NTczMFx1NTc0MFwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIHVubG9ja0ljb246IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmllbGRJZCwgdGlwczpcIlx1NTcxRlx1NTczMGlkXCIsIHR5cGU6TnVtYmVyLH0qL1xyXG4gICAgZmllbGRJZDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1NkQ2RVx1NTJBOFx1NTJBOFx1NzUzQiAqL1xyXG4gICAgcHJpdmF0ZSB0b3BTdGF0ZUljb25Ud2VlbjogTGF5YS5UaW1lTGluZTtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlcdTUyQThcdTc1M0IgKi9cclxuICAgIHByaXZhdGUgcGxhbnRJY29uVHdlZW46IExheWEuVGltZUxpbmU7XHJcblxyXG4gICAgLyoqIFx1NUVGQVx1N0I1MVx1NEUyRCAqL1xyXG4gICAgYnVpbGRJbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTU3MjhcdTU5MTZcdTk3NjIgKi9cclxuICAgIGlzT3V0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTUzRUZcdTUwNzcgKi9cclxuICAgIGNhblN0ZWFsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU4OEFCXHU1MDc3XHU0RUJBXHU3Njg0dWlkICovXHJcbiAgICBzdGVhbFVpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZGF0YTogTGFuZE9iajtcclxuXHJcbiAgICBtYWluVmlld0NvbTogTWFpblZpZXc7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBsYW5kTGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj47XHJcbiAgICAvKiogXHU2MjEwXHU3MTlGXHU3Njg0XHU2NUY2XHU5NUY0ICovXHJcbiAgICBwcml2YXRlIG1hdHVyZVRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuZmllbGROb2RlID0gPExheWEuSW1hZ2U+dGhpcy5vd25lcjtcclxuICAgICAgICB0aGlzLmNvdW50RG93bkxiID0gdGhpcy50aW1lQm94LmdldENoaWxkQnlOYW1lKFwiY291bnREb3duTGJcIikgYXMgYW55O1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLnNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cEFuaS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cEFuaS5vbihMYXlhLkV2ZW50LkNPTVBMRVRFLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBBbmkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWF0dXJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMudXBkYXRlX2ZpZWxkKVxyXG4gICAgdXBkYXRlRGF0YShkYXRhPzogeyBsaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPiB9KSB7XHJcbiAgICAgICAgaWYgKGRhdGE/Lmxpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdCA9IGRhdGEubGlzdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0ID0gTGFuZFNlcnZpY2UubGlzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmljb24ueSA9IDE2NDtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkTm9kZS5za2luID0gdGhpcy5maWVsZEVtcHR5UmVzO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKEJvb2xlYW4odGhpcy5kYXRhLnByb2R1Y3RJZCkpO1xyXG4gICAgICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhbnRJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCAmJiB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgKiAxMDAwICsgRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIC8vXHU2MjEwXHU5NTdGXHU0RTJEXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb24uc2tpbiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldCh0aGlzLmRhdGEucHJvZHVjdElkKS5ncm93aW5nSWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZUljb25Ta2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbnRJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfd2FzdGVsYW5kLnBuZ2A7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gdGhpcy51bmxvY2tJY29uO1xyXG4gICAgICAgICAgICB0aGlzLmljb24ueSA9IDExMztcclxuICAgICAgICAgICAgdGhpcy5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUaW1lQm94KGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuPy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RWljb25cdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93SWNvbihzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU3MkI2XHU2MDAxaWNvblx1N0VCOVx1NzQwNlxyXG4gICAgICogQHBhcmFtIHNraW5UeXBlIDEgXHU2RDQ3XHU2QzM0XHU1MkEwXHU5MDFGXHU3MkI2XHU2MDAxIDIgXHU1RUZBXHU3QjUxXHU3MkI2XHU2MDAxIDMgXHU2MjEwXHU3MTlGXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlSWNvblNraW4oc2tpblR5cGU6IDEgfCAyIHwgMykge1xyXG4gICAgICAgIHN3aXRjaCAoc2tpblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfc3BlZWRVcC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19sYW5kVXBkYXRlQnRuMi5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19oYXJ2ZXN0LnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5ODc2XHU5MEU4aWNvblx1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICB0b3BTdGF0ZUljb25BbmkocGxheTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnkgPSAtMTA3O1xyXG4gICAgICAgIGlmICghdGhpcy50b3BTdGF0ZUljb25Ud2Vlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuID0gTGF5YS5UaW1lTGluZS50byhcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLFxyXG4gICAgICAgICAgICAgICAgeyB5OiB0aGlzLnRvcFN0YXRlSWNvbi55IC0gNTAgfSxcclxuICAgICAgICAgICAgICAgIDgwMCxcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKS50byh0aGlzLnRvcFN0YXRlSWNvbiwgeyB5OiB0aGlzLnRvcFN0YXRlSWNvbi55IH0sIDgwMCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0ZWFsVWlkICYmICF0aGlzLmRhdGE/LmNhblN0ZWFsKSB7XHJcbiAgICAgICAgICAgIHBsYXkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IHBsYXk7XHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5yZXN1bWUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU2NUY2XHU5NUY0XHU1QkI5XHU1NjY4XHU3Njg0XHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1RpbWVCb3goc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RVx1OTYzNFx1NUY3MVx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dTaGFkb3dJY29uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNoYWRvdy52aXNpYmxlID0gc2hvdztcclxuICAgICAgICB0aGlzLnNoYWRvdy5hY3RpdmUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2OTBEXHU3MjY5XHU1MkE4XHU3NTNCXHU2NEFEXHU2NTNFXHJcbiAgICAgKiBAcGFyYW0gcGxheVxyXG4gICAgICovXHJcbiAgICBwbGFudEljb25BbmkocGxheTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGFudEljb25Ud2Vlbikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuID0gTGF5YS5UaW1lTGluZS50byh0aGlzLmljb24sIHsgc2tld1g6IDMgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLmljb24sIHsgc2tld1g6IC0zIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICAudG8odGhpcy5pY29uLCB7IHNrZXdYOiAwIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuLnBsYXkobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGxheSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmljb24uc2tld1ggPSAwO1xyXG5cclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKE1hdGgucmFuZG9tKCkgKiAxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYW50SWNvblR3ZWVuLnBsYXkobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxhbnRJY29uVHdlZW4ucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUwMTJcdThCQTFcdTY1RjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYi50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyh0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID0gTWF0aC5jZWlsKCh0aGlzLm1hdHVyZVRpbWUgLSBEYXRlLm5vdygpKSAvIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA8IDApIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93bkxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTYyMTBcdTcxOUYgXCIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YT8ucHJvZHVjdElkKT8ubWF0dXJlSWNvbjtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1aWxkSW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1N0I0OVx1N0VBN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxldmVsKCkge1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfbGV2ZWwke3RoaXMuZGF0YS5sZXZlbH0ucG5nYDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTJBMFx1OTAxRlxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5sYW5kX3NwZWVkX3VwKVxyXG4gICAgcHJpdmF0ZSBzcGVlZFVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGE/Lm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCAtPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiYWxsX3NwZWVkX3VwX3RpbWVcIilcclxuICAgICAgICAgICAgICAgIC52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCAqIDEwMDAgKyBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1N0E3QVx1NTcxRlx1NTczMFxyXG4gICAgICovXHJcbiAgICBjbGVhckZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGEucHJvZHVjdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmljb24uc2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DbGljaygpIHtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlYWxGb29kKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgLy9cdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVpbGRJbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KHRoaXMuZGF0YS5sZXZlbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxldmVsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MudHVkaXNoZW5namkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBBbmkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cEFuaS5wbGF5KDAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU2RUUxXHU3RUE3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHU1REYyXHU2RUUxXHU3RUE3YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTUyQTBcdTkwMUZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNwZWVkVXBWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uaXNGaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX2d1aWRfaGFuZCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm1haW5WaWV3Q29tLm93bmVyIGFzIExheWEuQm94KS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuQm94KS5sb2NhbFRvR2xvYmFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5Qb2ludCgzMDAsIDE2MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS5vd25lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbih0aGlzLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTY1MzZcdTgzQjdcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW50QW1vdW50ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZCA9IHRoaXMuZGF0YS5wcm9kdWN0SWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRHYXRoZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb2xkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmVydGlzZVRpbWVzOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50QW1vdW50ID0gZC5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5hZGQocHJvZHVjdElkLCBkLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5zaG91Y2FpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kID0gZC5yZXdhcmREaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1x1NjUzNlx1ODNCN1x1NzY4NFx1NjkwRFx1NzI2OVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGFudE9iaiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChwcm9kdWN0SWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0OiBhbnlbXSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHBsYW50T2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBwbGFudEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTgzQjdcdTVGOTdcdTc2ODRcdTk0QkJcdTc3RjNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV3YXJkRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnR2FtZS5kaWFtb25kSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkRGlhbW9uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldEZsb2F0UmV3YXJkT2JqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogdGhpcy5vd25lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBsYW50T2JqLmdhaW4uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHN3aXRjaCAoZC5vYmouaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2FzZSBDb25maWdHYW1lLmRpYW1vbmRJZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFVzZXJJbmZvLmRpYW1vbmQgKz0gZC5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjYXNlIENvbmZpZ0dhbWUuZ29sZElkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgVXNlckluZm8uZ29sZCArPSBkLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS51cGRhdGVBbGxTdGF0ZUljb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5pc0ZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5pc0ZpcnN0VGltZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NzlDRFx1ODNEQ1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFybTogPFNob3BWaWV3RGF0YT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7IGxhbmRJZDogdGhpcy5maWVsZElkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiBQbGFudERhdGFCYXNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpLnByb2R1Y3RJZCA9IGQuYmFzZS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCkubWF0dXJlVGltZUxlZnQgPSBkLmJhc2UubWF0dXJlX3RpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBkLmJhc2UubWF0dXJlX3RpbWUgKiAxMDAwICsgRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnpob25nemhpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlQWxsU3RhdGVJY29uKHRoaXMuZGF0YS5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5pc0ZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9ndWlkX2hhbmQsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubWFpblZpZXdDb20ub3duZXIgYXMgTGF5YS5Cb3gpLmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkJveCkubG9jYWxUb0dsb2JhbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5Qb2ludCgzMDAsIDE2MClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS5vd25lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1x1ODlFM1x1OTUwMVx1NTcxRlx1NTczMFxyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQWRkTGFuZFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5maWVsZElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZmllbGRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0dXJlVGltZUxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhbmRTZXJ2aWNlLmFkZExhbmQodGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlSGl0TGFuZEFkZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUwNzdcdTgzRENcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBzdGVhbEZvb2QoZGF0YTogTGFuZE9iaikge1xyXG4gICAgICAgIGlmICghZGF0YS5wcm9kdWN0SWQgfHwgZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2FuU3RlYWwgfHwgKHRoaXMuc3RlYWxVaWQgJiYgIXRoaXMuZGF0YT8uY2FuU3RlYWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1REYyXHU3RUNGXHU0RTBEXHU1M0VGXHU1MDc3XCIpO1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1N0VEOVx1NjIxMVx1NzU1OVx1NzBCOVx1NTQyN1wiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmdvdWppYW9zaGVuZyk7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIC8vXHU1MDc3XHU4M0RDXHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFN0ZWFsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJsYW5kU3RlYWxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdWlkOiB0aGlzLnN0ZWFsVWlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAoZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW50SWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICB2aXRhbGl0eTogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qKiBcdTk4OURcdTU5MTZcdTU5NTZcdTUyQjEgKi9cclxuICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8udml0YWxpdHkgPSBkLnZpdGFsaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuU3RlYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UuYWRkKHRoaXMuZGF0YS5wcm9kdWN0SWQsIGQuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnNob3VjYWkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1x1NjUzNlx1ODNCN1x1NzY4NFx1NjkwRFx1NzI2OVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJld2FyZExpc3Q6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQucGxhbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoZC5wbGFudElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBkLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5ODlEXHVGRjBDXHU4OEFCXHU3MkQ3XHU1NEFDXHU0RTg2fn5+XHU2Q0ExXHU1MDc3XHU3NzQwflwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU5ODlEXHU1OTE2XHU3Njg0XHU5NEJCXHU3N0YzXHU1OTU2XHU1MkIxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQucmV3YXJkRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5kaWFtb25kSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGQucmV3YXJkRGlhbW9uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJld2FyZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIExheWEuVHdlZW4uY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbj8uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlLCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8qKlxyXG4gKiBcdTk4REVcdTkxRDFcdTVFMDFcdTY1NzBcdTkxQ0ZcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0RmxvYXRSZXdhcmRPYmoge1xyXG4gICAgLyoqIFx1OEQ3N1x1NzBCOVx1NTNDMlx1ODAwM1x1ODI4Mlx1NzBCOSBcdTlFRDhcdThCQTRcdTRGMUFcdTYyOEFcdTY1NzBcdTkxQ0ZcdTc2ODRcdTRFMUNcdTg5N0ZcdTUyQTBcdTUyMzBcdThGRDlcdTkxQ0NcdUZGMENcdTYyNDBcdTRFRTVcdTRFMERcdTg5ODFcdTZERkJIQm94XHU2MjE2XHU2NjJGVkJveCAqL1xyXG4gICAgbm9kZTogTGF5YS5Cb3g7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBsaXN0OiB7XHJcbiAgICAgICAgLyoqIFx1ODlFM1x1Njc5MFx1NzY4NFx1OEQ0NFx1NkU5MFx1NjU3MFx1NjM2RSBcdTVGQzVcdTk4N0JcdTg5ODFcdTY3MDlpY29uICovXHJcbiAgICAgICAgb2JqOiBhbnk7XHJcbiAgICAgICAgLyoqIFx1NjU3MFx1OTFDRiAqL1xyXG4gICAgICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICAgICAgLyoqIFx1N0VDOFx1NzBCOVx1NEY0RFx1N0Y2RSAxIFx1OTFEMVx1NUUwMSAyIFx1OTRCQlx1NzdGMyAzIFx1NEVEM1x1NUU5MyAqL1xyXG4gICAgICAgIHBvc1R5cGU6IDEgfCAyIHwgMztcclxuICAgIH1bXTtcclxuICAgIG5vdEZseT86IGJvb2xlYW47XHJcbiAgICAvKiogXHU1MkE4XHU3NTNCXHU2NEFEXHU2NTNFXHU3RUQzXHU2NzVGXHU1NkRFXHU4QzAzICovXHJcbiAgICBjYWxsQmFjaz86IHsgKCk6IHZvaWQgfTtcclxufVxyXG5cclxuLy8gIE1haW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkTGFuZExheWVyLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRMYW5kTGF5ZXI6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZE5vZGUsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmROb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb2xkTm9kZSwgdGlwczpcIlx1OTFEMVx1NUUwMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29sZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmF2YXRhck5vZGUsIHRpcHM6XCJcdTU5MzRcdTUwQ0ZcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGF2YXRhck5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRCb3gsIHRpcHM6XCJcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxhbmRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjZW50ZXJCb3gsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTUzM0FcdTU3REZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm9yZGVyQm94LCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJvdHRvbUJveCwgdGlwczpcIlx1NUU5NVx1OTBFOFx1NjMwOVx1OTRBRVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYm90dG9tQm94OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRVcExheWVyLCB0aXBzOlwiXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU3QTk3XHU1M0UzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsYW5kVXBMYXllcjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRvcExheWVyT25TdGFnZSwgdGlwczpcIlx1NTcyOFx1NEUzQlx1NTczQVx1NjY2Rlx1NEUwQVx1OTc2Mlx1NzY4NFx1NEUwMFx1NEUyQVx1NjcwMFx1NEUwQVx1NUM0Mlx1NzY4NFx1N0E3QVx1NUM0MlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdG9wTGF5ZXJPblN0YWdlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BHb2xkSWNvbiwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1OTFEMVx1NUUwMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcEdvbGRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BEaWFtb25kSWNvbiwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1OTRCQlx1NzdGM2ljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcERpYW1vbmRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp3YXJlaG91c2VCdG4sIHRpcHM6XCJcdTRFRDNcdTVFOTNcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHdhcmVob3VzZUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bW9uZXlMYiwgdGlwczpcIlx1N0VBMlx1NTMwNVx1NjU4N1x1Njg2M1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbW9uZXlMYjogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdUZGMENcdTk4REVcdTcyNjlcdTU0QzFcdTc2RjhcdTUxNzNcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnZXRSZXdhcmRQcmVmYWIsIHRpcHM6XCJcdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdTk4ODRcdThCQkVcIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgZ2V0UmV3YXJkUHJlZmFiOiBMYXlhLlByZWZhYiA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmxvYXRSZXdhcmRJY29uLCB0aXBzOlwiXHU1OTU2XHU1MkIxXHU5OERFXHU1MkE4XHU3NTNCaWNvblwiLCB0eXBlOlByZWZhYn0qL1xyXG4gICAgcHJpdmF0ZSBmbG9hdFJld2FyZEljb246IExheWEuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6Z29Ib21lQnRuLCB0aXBzOlwiXHU4RkQ0XHU1NkRFXHU1QkI2XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb0hvbWVCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFueURvb3IsIHRpcHM6XCJcdTUzQkJcdThGNkNcdThGNkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFueURvb3I6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5Qm94LCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eUJveDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlCdXlCdG4sIHRpcHM6XCJcdTRGNTNcdTUyOUJcdThEMkRcdTRFNzBcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5QnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NUJBMFx1NzI2OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldEJveCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0Qm94OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTRFRkJcdTUyQTFcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0YXNrQm94LCB0aXBzOlwiXHU0RUZCXHU1MkExXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0YXNrQm94OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmd1aWRlSGFuZCwgdGlwczpcIlx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ3VpZGVIYW5kOiBMYXlhLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZ3VyZUFuaSwgdGlwczpcIlx1NEVCQVx1NzI2OVx1NTJBOFx1NzUzQlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZmlndXJlQW5pOiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1N0VDNFx1NEVGNiBcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgbGFuZExpc3Q6IEZpZWxkQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgICAvKipcdTY2MkZcdTU0MjZcdTU3MjhcdTU5MTZcdTk3NjIgKi9cclxuICAgIHByaXZhdGUgaXNPdXRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1NzlCQlx1NUYwMFx1NUJCNlx1NzY4NFx1NjVGNlx1OTVGNCAqL1xyXG4gICAgcHJpdmF0ZSBvdXRlclRpbWU6IG51bWJlcjtcclxuICAgIC8qKlx1NTNCQlx1NTk3RFx1NTNDQiBcdTVCQjZcdTUwMTJcdThCQTFcdTY1RjYgKi9cclxuICAgIHByaXZhdGUgb3V0Q291bnREb3duTnVtYmVyID0gNjA7XHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwicmVzL2xvYWRpbmdCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3dvb2R0aXRsZS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlSG91c2VCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlYmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19zaGVsZi5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19sYW5kQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob3VzZXRvcC5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX2hvbWVwYWdlQmczLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyBcInJlcy9pbWdfaG9tZXBhZ2VCZzIucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2ltZ19ob21lcGFnZUJnMS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2Zhcm1sYW5kTG9nby5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUucG5nXCIsXHJcbiAgICAgICAgXS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmVuZHNXaXRoKFwicG5nXCIpKSBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy50b3BMYXllck9uU3RhZ2UpO1xyXG4gICAgICAgICh0aGlzLm9yZGVyQm94LmdldENoaWxkQnlOYW1lKFwiZnJpZW5kX25hbWVcIikgYXMgTGF5YS5MYWJlbCkudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudml0YWxpdHlCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ29Ib21lQnRuLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxhbmRCb3gubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LnB1c2godGhpcy5sYW5kQm94LmdldENoaWxkQXQoeCkuZ2V0Q29tcG9uZW50KEZpZWxkQ29tcG9uZW50KSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0ubWFpblZpZXdDb20gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYW5kTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmZpZWxkSWQgLSBiLmZpZWxkSWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX2ZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVIaXRMYW5kQWRkKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBhID0gTGF5YS5Ud2Vlbi50byh0aGlzLmZpZ3VyZUFuaSwgeyB4OiAtMTY3LCB5OiA0MzUgfSwgMTAwMDApO1xyXG4gICAgICAgIGEucmVwZWF0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NzkzQVx1NjYzRVx1NzkzQVx1NjI2OVx1NUVGQWljb25cclxuICAgICAqL1xyXG4gICAgdXBkYXRlSGl0TGFuZEFkZCgpIHtcclxuICAgICAgICBsZXQgZ3VpZExhbmQ6IEZpZWxkQ29tcG9uZW50O1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhbmRMaXN0W3hdLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uaXNGaXJzdFRpbWUgJiYgIWd1aWRMYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3VpZExhbmQgPSB0aGlzLmxhbmRMaXN0W3hdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlR3VpZEhhbmRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ3VpZExhbmQub3duZXIgYXMgTGF5YS5Cb3gpLmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQoMzAwLCAxNjApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTE2OFx1NEY1M1x1NTJBMFx1OTAxRmljb24gXHU1NDhDIFx1NjUzNlx1ODNEQ2ljb24gXHU2NjgyXHU2NUY2XHU2MjhBXHU0RTI0XHU0RTJBXHU2NUI5XHU2Q0Q1XHU1MTk5XHU1NzI4XHU0RTAwXHU4RDc3XHU0RTg2XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUFsbFN0YXRlSWNvbihsYW5kSWQ/OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0udG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMubGFuZExpc3RbeF0uZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlkID09IGxhbmRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zZXRTdGF0ZUljb25Ta2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0udG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbGFuZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucHJvZHVjdElkICYmIGRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zZXRTdGF0ZUljb25Ta2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxhbmRMaXN0W3hdLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wcm9kdWN0SWQgJiYgIWRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2V0U3RhdGVJY29uU2tpbigzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImRpYW1vbmRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbW9uZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb25leUxiLnZhbHVlID0gKGUgKiBVc2VySW5mby5wcm9wb3J0aW9uKS50b0ZpeGVkKDIpICsgXCJcIjtcclxuICAgICAgICAgICAgICAgIC8vXHU0RTBEXHU1NkRCXHU4MjBEXHU0RTk0XHU1MTY1XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbmV5TGIudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIChlICogVXNlckluZm8ucHJvcG9ydGlvbikudG9TdHJpbmcoKS5tYXRjaCgvXlxcZCsoPzpcXC5cXGR7MCwyfSk/LykgKyBcIlwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiZ29sZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb2xkTm9kZS52YWx1ZSA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJhdmF0YXJcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJ3YXJlUGV0SWRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucGV0Qm94LmdldENoaWxkQnlOYW1lKFwiZG9nXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KGUpLmljb247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcInBldFZpdGFsaXR5XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy9cdTY2RjRcdTY1QjBcdTVCQTBcdTcyNjlcdTRGNTNcdTUyOUJcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBldEJveC52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhciA9IHRoaXMucGV0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJveFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ2aXRhbGl0eV9iYXJcIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gZSAvIFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5nZXQoVXNlckluZm8ud2FyZVBldElkKS52aXRhbGl0eV9tYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXIud2lkdGggPSAxMzAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImRpZ2VzdENvdW50RG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLCB0aGlzLmRpZ2VzdENvdW50RG93bik7XHJcbiAgICAgICAgICAgICAgICAvL1x1NUJBMFx1NzI2OVx1OTcwMFx1ODk4MVx1NkQ4OFx1ODAxN1x1OThERlx1NzI2OVx1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGV0Qm94LnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoZSAqIDEwMDAsIHRoaXMsIHRoaXMuZGlnZXN0Q291bnREb3duKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcInZpdGFsaXR5XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdml0YWxpdHkgPSBlIC8gQ29uZmlnR2FtZS51c2VyVml0YWxpdHlMaW1pdDtcclxuICAgICAgICAgICAgICAgIGlmICh2aXRhbGl0eSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdml0YWxpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudml0YWxpdHlCdXlCdG4uZ3JheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLm1vdXNlRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLmdyYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudml0YWxpdHlCdXlCdG4ubW91c2VFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpdGFsaXR5Qm94LmdldENoaWxkQnlOYW1lKFwiYmFyXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnZpdGFsaXR5Qm94LmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID0gMjY4ICogdml0YWxpdHk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJpc0ZpcnN0VGltZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aWRBbmk/LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmd1aWRlSGFuZD8uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZSA9PT0gMCkgdGhpcy5ndWlkSGFuZEFuaSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3JkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUJBMFx1NzI2OVx1N0IxMVx1NkQ4OFx1NTMxNlx1NUI5QVx1NjVGNlx1NTY2OFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRpZ2VzdENvdW50RG93bigpIHtcclxuICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHBldCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5nZXQoVXNlckluZm8ud2FyZVBldElkKTtcclxuICAgICAgICBpZiAoVXNlckluZm8ucGV0Vml0YWxpdHkgLSBwZXQudml0YWxpdHlfY29uc3VtZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSAtPSBwZXQudml0YWxpdHlfY29uc3VtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gQ29uZmlnR2FtZS5wZXREaWdlc3RJbnRlcnZhbFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaWduSW5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibWFpbFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoZWFkXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2V0dGluZ1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YXJlaG91c2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2ZlZWRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAyIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvZ19ob3VzZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDEgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG9nXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkaWFtb25kX2JveFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwibW9uZXlfcmVkX2JveFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDMgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib3JkZXJfYm94XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZnJpZW5kc1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuRnJpZW5kKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kXCI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxhbmRMZXZlbFVwXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNPdXRlcikgdGhpcy5zd2l0Y2hMYW5kTGV2ZWxVcCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXlHZXRSZXdhcmRBbmkoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG5vZGU6IHRoaXMudGVzdEJ0biBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB7IG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KDEwMDEpLCBjb3VudDogMTAwLCBwb3NUeXBlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksIGNvdW50OiAxMDAsIHBvc1R5cGU6IDEgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeyBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldCgxMDAxKSwgY291bnQ6IDEwMCwgcG9zVHlwZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfdXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoTGFuZExldmVsVXAoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhbnlfZG9vclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvTmVpZ2hib3IoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29faG9tZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb0hvbWUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkX3ZpdGFsaXR5XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1eVZpdGFsaXR5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTkwQUVcdTRFRjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvcGVuTWFpbCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubWFpbExpc3QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkOiBNYWlsUmV0dXJuRGF0YVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTWFpbFZpZXcsIHsgcGFybTogZCB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1OTdEXHU1M0NCIFx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9wZW5GcmllbmQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZExpc3QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkOiBGcmllbmRMaXN0RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc1ZpZXcsIHsgcGFybTogZCB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEQyRFx1NEU3MFx1NEY1M1x1NTI5QlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGJ1eVZpdGFsaXR5KCkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5CdXlWaXRhbGl0eVZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdThCQTJcdTUzNTVcdTk2MUZcdTUyMTcgKi9cclxuICAgIHByaXZhdGUgb3JkZXJRdWV1ZUluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdThCQTJcdTUzNTVcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMudXBkYXRlX09yZGVyKVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVPcmRlcigpIHtcclxuICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLm9yZGVyUXVldWVJbmcpIHtcclxuICAgICAgICAgICAgbGV0IGJveCA9IHRoaXMub3JkZXJCb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmRlcl9ib3hcIiksXHJcbiAgICAgICAgICAgICAgICBkID0gVGFibGVBbmFseXplLnRhYmxlKFwib3JkZXJcIikuZ2V0KFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxKSxcclxuICAgICAgICAgICAgICAgIHJld2FyZDogUmV3YXJkQ3VycmVuY3lCYXNlLFxyXG4gICAgICAgICAgICAgICAgcmV3YXJkQ291bnQ6IG51bWJlciA9IDAsXHJcbiAgICAgICAgICAgICAgICBjdXJDb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICBtYXhDb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgICAgIGlmICghZCkgcmV0dXJuIGNvbnNvbGUubG9nKFwiXHU3QjQ5XHU3RUE3XHU1REYyXHU1QjhDXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDQ7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtX1wiICsgeCkgYXMgTGF5YS5Cb3g7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGQuY29uZGl0aW9uW3hdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyQ291bnQgPSBXYXJlaG91c2VTZXJ2aWNlLmdldE9uZShkLmNvbmRpdGlvblt4XS5wbGFudC5pZCk/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4Q291bnQgPSBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ckNvdW50ID49IG1heENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuY29uZGl0aW9uW3hdLnBsYW50Lmljb247XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke2N1ckNvdW50fS8ke21heENvdW50fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA4NyAqIChjdXJDb3VudCAvIG1heENvdW50ID4gMSA/IDEgOiBjdXJDb3VudCAvIG1heENvdW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZC5jb25kaXRpb25beF0ucGxhbnQuZ2Fpbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm9iai5pZCA9PT0gQ29uZmlnR2FtZS5nb2xkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkID0gZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICs9IGUuY291bnQgKiBtYXhDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bkJveCA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgICAgICAoYnRuQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gcmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgKGJ0bkJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gYCR7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKyBNYXRoLnJvdW5kKHJld2FyZENvdW50ICogZC5jb21taXNzaW9uKVxyXG4gICAgICAgICAgICAgICAgfWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lX3RpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU1QjhDXHU2MjEwJHtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxXHJcbiAgICAgICAgICAgIH1cdTdFQTdcdThCQTJcdTUzNTVgO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID09IGQuY29uZGl0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uID0gZC5jb25kaXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyUXVldWVJbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm9yZGVyUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcklkOiBVc2VySW5mby5vcmRlckxldmVsICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UucmVkdWNlQW1vdW50KGUucGxhbnQuaWQsIGUuY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlclF1ZXVlSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLm9yZGVyTGV2ZWwrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUdldFJld2FyZEFuaSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBib3guZ2V0Q2hpbGRCeU5hbWUoXCJidG5fYm94XCIpIGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHJld2FyZENvdW50ICsgTWF0aC5yb3VuZChyZXdhcmRDb3VudCAqIGQuY29tbWlzc2lvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlclF1ZXVlSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMDdcdTYzNjJcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN3aXRjaExhbmRMZXZlbFVwKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYmcgPSB0aGlzLmxhbmRVcExheWVyLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICBiZy5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oYmcsIHsgYWxwaGE6IDAuNzUgfSwgMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5nZXRDaGlsZEJ5TmFtZShcImxhbmRfb3V0ZXJcIikuYWRkQ2hpbGQodGhpcy5sYW5kQm94KTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVGFibGVBbmFseXplLnRhYmxlKFwibGFuZExldmVsXCIpLmdldChlLmRhdGEubGV2ZWwgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlLmJ1aWxkSW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIGJnLFxyXG4gICAgICAgICAgICAgICAgeyBhbHBoYTogMCB9LFxyXG4gICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJCb3guYWRkQ2hpbGQodGhpcy5sYW5kQm94KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93VGltZUJveCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUuYnVpbGRJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbihlLmRhdGEubWF0dXJlVGltZUxlZnQgPyAxIDogMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGUudG9wU3RhdGVJY29uQW5pKEJvb2xlYW4oZS5kYXRhLnByb2R1Y3RJZCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY0QURcdTY1M0VcdTgzQjdcdTUzRDZcdTU5NTZcdTUyQjFcdTUyQThcdTc1M0JcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkKVxyXG4gICAgcHJpdmF0ZSBwbGF5R2V0UmV3YXJkQW5pKG9iajogR2V0RmxvYXRSZXdhcmRPYmopIHtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqLmNhbGxCYWNrKSBvYmouY2FsbEJhY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb2JqLmxpc3QuZm9yRWFjaCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogTGF5YS5Cb3ggPSBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q3JlYXRlRnVuKFxyXG4gICAgICAgICAgICAgICAgXCJmbG9hdFJld2FyZEJveFwiLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZXdhcmRQcmVmYWIuY3JlYXRlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZXdhcmRQcmVmYWJcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5vZGUueSA9IG9iai5ub2RlLmdldF9oZWlnaHQoKSAqIG9iai5ub2RlLmFuY2hvclkgLSBpICogNjA7XHJcbiAgICAgICAgICAgIC8vIG5vZGUueCA9IG9iai5ub2RlLmdldF93aWR0aCgpICogb2JqLm5vZGUuYW5jaG9yWDtcclxuICAgICAgICAgICAgbGV0IGljb24gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpY29uLnNraW4gPSBkLm9iaj8uaWNvbiB8fCBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSA4MCAvIGljb24ud2lkdGg7XHJcbiAgICAgICAgICAgIGljb24uc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICAgICAgbm9kZS5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iai5ub2RlLmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQoKSkpO1xyXG4gICAgICAgICAgICAvLyBvYmoubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbGV0IG5vZGVOZXdQb3MgPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludCgpKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbm9kZS5wb3Mobm9kZU5ld1Bvcy54ICsgb2JqLm5vZGUuZ2V0X3dpZHRoKCkgKiBvYmoubm9kZS5hbmNob3JYLCBub2RlTmV3UG9zLnkgLSBpICogNjApO1xyXG4gICAgICAgICAgICB0aGlzLnRvcExheWVyT25TdGFnZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgKG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IFwieFwiICsgZC5jb3VudDtcclxuXHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAgICAgeyB5OiBub2RlLnkgLSA0MCwgYWxwaGE6IDEgfSxcclxuICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgKGU6IExheWEuQm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlcihcImZsb2F0UmV3YXJkQm94XCIsIGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvc0ljb24gPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubG9jYWxUb0dsb2JhbChMYXlhLlBvaW50LmNyZWF0ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoubm90Rmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsb2F0SWNvbjogTGF5YS5JbWFnZSA9IExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXRSZXdhcmRJY29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXRSZXdhcmRJY29uLmNyZWF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdFJld2FyZEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5za2luID0gZC5vYmouaWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnBvcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQb3NJY29uLnggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIwICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBvc0ljb24ueSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjAgKiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmFkZENoaWxkKGZsb2F0SWNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnpPcmRlciA9IDk5OTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcEljb246IExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkLnBvc1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wR29sZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wRGlhbW9uZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMud2FyZWhvdXNlQnRuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wR29sZEljb25Qb3MgPSB0b3BJY29uLmxvY2FsVG9HbG9iYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLlBvaW50KHRvcEljb24ud2lkdGggLyAyLCB0b3BJY29uLmhlaWdodCAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKHRvcEdvbGRJY29uUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IGxvY2FsUG9zLngsIHk6IGxvY2FsUG9zLnkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tJbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZTogTGF5YS5JbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKFwiZmxvYXRSZXdhcmRJY29uXCIsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmbG9hdEljb25dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MCAqIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFtub2RlXVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIDUwICogaSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY0QURcdTY1M0VcdTc3MEJcdTVFN0ZcdTU0NEFcdTRFRTVcdTU0MEVcdTc2ODRcdTU5NTZcdTUyQjFcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkKVxyXG4gICAgcHJpdmF0ZSBwbGF5QWRSZXdhcmQodGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgcmV3YXJkID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIlZpZGVvcmV3YXJkc1wiKS52YWx1ZSBhcyBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgbm9kZTogdGFyZ2V0LFxyXG4gICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqOiByZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogcmV3YXJkLm9iai5pZCA9PSBDb25maWdHYW1lLmdvbGRJZCA/IDEgOiAyLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NEVGQlx1NTJBMVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMudXBkYXRlX3Rhc2spXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRhc2soKSB7XHJcbiAgICAgICAgY29uc3QgYm94OiBMYXlhLkltYWdlID0gdGhpcy50YXNrQm94LFxyXG4gICAgICAgICAgICBpY29uID0gYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBhbW91bnRGb250ID0gaWNvbi5nZXRDaGlsZEJ5TmFtZShcImFtb3VudEZvbnRcIikgYXMgTGF5YS5Gb250Q2xpcCxcclxuICAgICAgICAgICAgZGVzYyA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImxiXCIpIGFzIExheWEuTGFiZWwsXHJcbiAgICAgICAgICAgIGxpc3QgPSBUYXNrU2VydmljZS5nZXRMaXN0KCksXHJcbiAgICAgICAgICAgIHRhc2sgPSBsaXN0WzBdO1xyXG4gICAgICAgIGlmICh0YXNrLnJlY2VpdmUgPT0gMSB8fCB0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgYm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgZGVzYy50ZXh0ID0gYFx1NEVGQlx1NTJBMToke3Rhc2suYmFzZS5kZXNjfSgke1xyXG4gICAgICAgICAgICB0YXNrLnRpbWVzID4gdGFzay5iYXNlLnRpbWVzID8gdGFzay5iYXNlLnRpbWVzIDogdGFzay50aW1lc1xyXG4gICAgICAgIH0vJHt0YXNrLmJhc2UudGltZXN9KWA7XHJcbiAgICAgICAgYW1vdW50Rm9udC52YWx1ZSA9IFwieFwiICsgdGFzay5iYXNlLnJld2FyZC5jb3VudDtcclxuICAgICAgICBpY29uLnNraW4gPSB0YXNrLmJhc2UucmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgIGJveC53aWR0aCA9IGRlc2Mud2lkdGggKyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU2REVcdTVCQjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnb0hvbWUoKSB7XHJcbiAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KHRydWUsICgpID0+IHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5nb0hvbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU1NkRFXHU2NzY1XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc091dGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvRnJpZW5kKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhpdExhbmRBZGQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1M0JCXHU5MEJCXHU1QzQ1XHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ29Ub05laWdoYm9yKCkge1xyXG4gICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyh0cnVlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubmVpZ2hib3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJnYXRoZXJcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IFJldHVybk5laWdoYm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTc5QkJcdTVGMDBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29GcmllbmQoZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgzMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLmdvX2ZyaWVuZF9ob21lKVxyXG4gICAgcHJpdmF0ZSBnb0ZyaWVuZExpc3RlbihkOiBSZXR1cm5OZWlnaGJvciwgZnJpZW5kRGF0YTogRnJpZW5kRGF0YSkge1xyXG4gICAgICAgIHRoaXMuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nb0ZyaWVuZChkLCBmcmllbmREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTNCQlx1NjcwQlx1NTNDQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdvRnJpZW5kKGQ/OiBSZXR1cm5OZWlnaGJvciwgZnJpZW5kRGF0YT86IEZyaWVuZERhdGEpIHtcclxuICAgICAgICBsZXQgbGFuZHMgPSB0aGlzLmxhbmRMaXN0LFxyXG4gICAgICAgICAgICB1c2VyTGFuZHMgPSBMYW5kU2VydmljZS5saXN0O1xyXG4gICAgICAgIGxldCBvdGhlckxhbmRzOiBNYXA8bnVtYmVyLCBMYW5kT2JqPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICBkLmxhbmRzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG90aGVyTGFuZHMuc2V0KGUuaWQsIGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3V0ZXJUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nb0hvbWVCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYW55RG9vci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXNlckxhbmRzLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGQubWF0dXJlVGltZUxlZnQgLT0gKERhdGUubm93KCkgLSB0aGlzLm91dGVyVGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQubWF0dXJlVGltZUxlZnQgPCAwKSBkLm1hdHVyZVRpbWVMZWZ0ID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudml0YWxpdHlCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFueURvb3IudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ib21lQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGFuZHMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgbGFuZCA9IGxhbmRzW3hdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBsYW5kLmlzT3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGFuZC5zdGVhbFVpZCA9IGQudWlkO1xyXG4gICAgICAgICAgICAgICAgbGFuZC51cGRhdGVEYXRhKHsgbGlzdDogb3RoZXJMYW5kcyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZC5wcm90ZWN0ZWRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZC5jYW5TdGVhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmQudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZC5jYW5TdGVhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsYW5kLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsYW5kLmlzT3V0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhbmQuc3RlYWxVaWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGFuZC51cGRhdGVEYXRhKHsgbGlzdDogdXNlckxhbmRzIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYW5kLnBsYW50SWNvbkFuaShCb29sZWFuKGxhbmQuZGF0YT8ucHJvZHVjdElkKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIC8vXHU5NjkwXHU4NUNGXHU1QkEwXHU3MjY5XHJcbiAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9cdTk2OTBcdTg1Q0ZcdTRFRkJcdTUyQTFcclxuICAgICAgICAgICAgdGhpcy50YXNrQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL1x1NjYzRVx1NzkzQSBcdTVCQTBcdTcyNjlcclxuICAgICAgICAgICAgaWYgKFVzZXJJbmZvLndhcmVQZXRJZCkgdGhpcy5wZXRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vXHU2NjNFXHU3OTNBXHU0RUZCXHU1MkExXHJcbiAgICAgICAgICAgIHRoaXMudGFza0JveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRnJpZW5kVmlldyhkPy5uaWNrbmFtZSwgZnJpZW5kRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUzQkJcdTU5N0RcdTUzQ0JcdTVCQjZcdThGRDhcdTY2MkZcdTgxRUFcdTVERjFcdTVCQjZcdTc2ODRcdTc1NENcdTk3NjJcdTcyQjZcdTYwMDFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVGcmllbmRWaWV3KG5pY2tuYW1lOiBzdHJpbmcgPSBcIlwiLCBmcmllbmREYXRhOiBGcmllbmREYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdG9wQm94ID0gdGhpcy5vcmRlckJveC5wYXJlbnQgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIG1vbmV5Qm94ID0gdG9wQm94LmdldENoaWxkQnlOYW1lKFwibW9uZXlfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBjb3VudERvd24gPSB0b3BCb3guZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudF9kb3duXCIpIGFzIExheWEuTGFiZWwsXHJcbiAgICAgICAgICAgIG9yZGVyQm94ID0gdGhpcy5vcmRlckJveC5nZXRDaGlsZEJ5TmFtZShcIm9yZGVyX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgZnJpZW5kTmFtZSA9IHRoaXMub3JkZXJCb3guZ2V0Q2hpbGRCeU5hbWUoXCJmcmllbmRfbmFtZVwiKSBhcyBMYXlhLkxhYmVsLFxyXG4gICAgICAgICAgICBib3R0b21MaXN0OiBMYXlhLkltYWdlW10gPSBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEJ5TmFtZShcInRhc2tcIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQm94LmdldENoaWxkQnlOYW1lKFwic2lnbkluXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEJ5TmFtZShcImZyaWVuZHNcIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQm94LmdldENoaWxkQnlOYW1lKFwibWFpbFwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgZnJpZW5kTmFtZS50ZXh0ID0gYCR7bmlja25hbWV9XHU3Njg0XHU1MTlDXHU1NzNBYDtcclxuICAgICAgICAgICAgb3JkZXJCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmcmllbmROYW1lLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBtb25leUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvdW50RG93bi52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvdW50RG93bi50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyh0aGlzLm91dENvdW50RG93bk51bWJlcik7XHJcbiAgICAgICAgICAgIExheWEudGltZXIubG9vcCgxMDAwLCB0aGlzLCB0aGlzLm91dENvdW50RG93bkV2ZW50LCBbY291bnREb3duXSk7XHJcbiAgICAgICAgICAgIGlmIChmcmllbmREYXRhPy5hdmF0YXIpIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZnJpZW5kRGF0YT8uYXZhdGFyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0Q291bnREb3duTnVtYmVyID0gNjA7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcywgdGhpcy5vdXRDb3VudERvd25FdmVudCk7XHJcbiAgICAgICAgICAgIG9yZGVyQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBmcmllbmROYW1lLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbW9uZXlCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvdW50RG93bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhdGFyTm9kZS5za2luID0gVXNlckluZm8uYXZhdGFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3R0b21MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZS5kaXNhYmxlZCA9IHRoaXMuaXNPdXRlcjtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL1x1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3V0Q291bnREb3duRXZlbnQobGI6IExheWEuTGFiZWwpIHtcclxuICAgICAgICB0aGlzLm91dENvdW50RG93bk51bWJlci0tO1xyXG4gICAgICAgIGxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMub3V0Q291bnREb3duTnVtYmVyKTtcclxuICAgICAgICBpZiAodGhpcy5vdXRDb3VudERvd25OdW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyNyZWdpb24gXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHU3NkY4XHU1MTczXHJcbiAgICBwcml2YXRlIGd1aWRBbmk6IExheWEuVGltZUxpbmU7XHJcbiAgICAvKipcclxuICAgICAqIFx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1x1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGd1aWRIYW5kQW5pKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaSA9IExheWEuVGltZUxpbmUudG8odGhpcy5ndWlkZUhhbmQsIHsgcm90YXRpb246IC0xNSB9LCA0MDAsIG51bGwpLnRvKFxyXG4gICAgICAgICAgICB0aGlzLmd1aWRlSGFuZCxcclxuICAgICAgICAgICAgeyByb3RhdGlvbjogMCB9LFxyXG4gICAgICAgICAgICA0MDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaS5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1RjE1XHU1QkZDXHU2MjRCXHU2MzA3XHU1QzVFXHU2MDI3XHJcbiAgICAgKiBAcGFyYW0gc2hvd1xyXG4gICAgICogQHBhcmFtIHBvc1xyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfZ3VpZF9oYW5kKVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVHdWlkSGFuZEF0dHJpYnV0ZShzaG93OiBib29sZWFuLCBwb3M/OiBMYXlhLlBvaW50LCBwYXJlbnQ/OiBMYXlhLk5vZGUpIHtcclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWRlSGFuZC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ndWlkZUhhbmQucG9zKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5hZGRDaGlsZCh0aGlzLmd1aWRlSGFuZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcExheWVyT25TdGFnZS5hZGRDaGlsZCh0aGlzLmd1aWRlSGFuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWRlSGFuZC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmFkZENoaWxkKHRoaXMuZ3VpZGVIYW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgT3JkZXJCYXNlLCBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcblxyXG4vL2NsYXNzIE9yZGVyVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6b3JkZXJMaXN0LCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZSx9Ki9cclxuICAgIHByaXZhdGUgb3JkZXJMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Mb2NrUmVzLCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU2MzA5XHU5NEFFXHU2NzJBXHU1QjhDXHU2MjEwXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgYnRuTG9ja1Jlczogc3RyaW5nID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5SZXNDdXIsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTYzMDlcdTk0QUVcdTVGNTNcdTUyNERcdTcyQjZcdTYwMDFcdTYzMDlcdTk0QUVcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBidG5SZXNDdXI6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBkYXRhTGlzdDogT3JkZXJCYXNlW107XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcIm9yZGVyXCIpLmxpc3Q7XHJcbiAgICAgICAgbGV0IG9yZGVyT2xkTHYgPSBVc2VySW5mby5vcmRlckxldmVsIHx8IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmlkICogKGIuaWQgPD0gb3JkZXJPbGRMdiA/IC0xIDogMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QuYXJyYXkgPSB0aGlzLmRhdGFMaXN0O1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVyTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyTGlzdChjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuZGF0YUxpc3RbaV0sXHJcbiAgICAgICAgICAgIHJld2FyZDogUmV3YXJkQ3VycmVuY3lCYXNlLFxyXG4gICAgICAgICAgICByZXdhcmRDb3VudDogbnVtYmVyID0gMCxcclxuICAgICAgICAgICAgY3VyQ291bnQgPSAwLFxyXG4gICAgICAgICAgICBtYXhDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gMCxcclxuICAgICAgICAgICAgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJvcmRlcl9sdlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7ZC5pZH1cdTdFQTdcdThCQTJcdTUzNTVgO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDQ7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtX1wiICsgeCkgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgICAgIGlmIChkLmNvbmRpdGlvblt4XSkge1xyXG4gICAgICAgICAgICAgICAgY3VyQ291bnQgPSBXYXJlaG91c2VTZXJ2aWNlLmdldE9uZShkLmNvbmRpdGlvblt4XS5wbGFudC5pZCk/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgICAgICAgICBtYXhDb3VudCA9IGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJDb3VudCA+PSBtYXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmNvbmRpdGlvblt4XS5wbGFudC5pY29uO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuaWQgPCBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHttYXhDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID0gODc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtjdXJDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgODcgKiAoY3VyQ291bnQgLyBtYXhDb3VudCA+IDEgPyAxIDogY3VyQ291bnQgLyBtYXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkLmNvbmRpdGlvblt4XS5wbGFudC5nYWluLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5vYmouaWQgPT09IENvbmZpZ0dhbWUuZ29sZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmQgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICs9IGUuY291bnQgKiBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGlmIChkLmlkID4gVXNlckluZm8ub3JkZXJMZXZlbCArIDEpIHtcclxuICAgICAgICAgICAgLy9cdTY3MkFcdTZGQzBcdTZEM0JcclxuICAgICAgICAgICAgYnRuLnNraW4gPSB0aGlzLmJ0bkxvY2tSZXM7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZC5pZCA9PSBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAgICAgLy9cdTVGNTNcdTUyNERcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gdGhpcy5idG5SZXNDdXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NURGMlx1NUI4Q1x1NjIxMFwiKTtcclxuICAgICAgICAgICAgICAgIC8vXHU1REYyXHU1QjhDXHU2MjEwXHJcbiAgICAgICAgICAgICAgICBidG4uZ3JheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXdhcmQpIHtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgKyR7XHJcbiAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgIH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk9yZGVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlclZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsZWZ0Qm94LCB0aXBzOlwiXHU0RTkxXHU1REU2XHU4RkI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgbGVmdEJveDogTGF5YS5Cb3g7XHJcbiAgICAvKiogQHByb3Age25hbWU6cmlnaHRCb3gsIHRpcHM6XCJcdTRFOTFcdTVERTZcdThGQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICByaWdodEJveDogTGF5YS5Cb3g7XHJcblxyXG4gICAgb25IZEVuYWJsZSgpIHt9XHJcblxyXG4gICAgb25PcGVuZWQoZGF0YTogeyBjYWxsOiB7IChPdmVyVmlldyk6IHZvaWQgfSB9KSB7XHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIGlmIChkYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGEuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoY2FsbDogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmxlZnRCb3gueCA9IC05ODc7XHJcbiAgICAgICAgdGhpcy5yaWdodEJveC54ID0gMTAyNTtcclxuICAgICAgICB0aGlzLmxlZnRCb3guYWxwaGEgPSAwO1xyXG4gICAgICAgIHRoaXMucmlnaHRCb3guYWxwaGEgPSAwO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5sZWZ0Qm94LCB7IHg6IDAsIGFscGhhOiAxIH0sIDUwMCk7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJveCxcclxuICAgICAgICAgICAgeyB4OiAwLCBhbHBoYTogMSB9LFxyXG4gICAgICAgICAgICA1MDAsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGwpIGNhbGwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oY2FsbDogRnVuY3Rpb24pIHtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubGVmdEJveCwgeyB4OiAtOTg3LCBhbHBoYTogMCB9LCA1MDApO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3gsXHJcbiAgICAgICAgICAgIHsgeDogMTAyNSwgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsKSBjYWxsKCk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk92ZXJWaWV3KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwRGF0YUNvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cERhdGFDb250cm9sXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9jbGFzcyBTZXR0aW5nVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTptdXNpY05vZGUsIHRpcHM6XCJcdTk3RjNcdTRFNTBcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG11c2ljTm9kZTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNvdW5kTm9kZSwgdGlwczpcIlx1OTdGM1x1NjU0OFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc291bmROb2RlOiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YXZhdGFyTm9kZSwgdGlwczpcIlx1NzNBOVx1NUJCNlx1NTkzNFx1NTBDRlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYXZhdGFyTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bmlja25hbWUsIHRpcHM6XCJcdTczQTlcdTVCQjZcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG5pY2tuYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1c2VyS2V5LCB0aXBzOlwiXHU3NTI4XHU2MjM3XHU1M0NCXHU2MEM1XHU3ODAxXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB1c2VyS2V5OiBMYXlhLkxhYmVsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNDaGFuZ2UoKTtcclxuICAgICAgICB0aGlzLnNvdW5kQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIHRoaXMudXNlcktleS50ZXh0ID0gYFx1OTA4MFx1OEJGN1x1NzgwMVx1RkYxQSR7VXNlckluZm8ua2V5fWA7XHJcblxyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImF2YXRhclwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcIm5pY2tuYW1lXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5pY2tuYW1lLnRleHQgPSBlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNldHRpbmdWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIm11c2ljXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQgPSAhQ29yZS5hdWRpby5tdXNpY011dGVkO1xyXG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwibXVzaWNcIiwgQ29yZS5hdWRpby5tdXNpY011dGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5zb3VuZE11dGVkID0gIUNvcmUuYXVkaW8uc291bmRNdXRlZDtcclxuICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInNvdW5kXCIsIENvcmUuYXVkaW8uc291bmRNdXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZENoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNpZ25fb3V0XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU3ODZFXHU4QkE0XHU4OTgxXHU5MDAwXHU1MUZBXHU3NjdCXHU1RjU1XHVGRjFGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJpc0xvZ2luXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5sb2dpbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcubG9naW5PdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5Mb2dpblZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvZ2luX2dhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1c2VyX2FncmVlbWVudFwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTc1MjhcdTYyMzdcdTUzNEZcdThCQUVcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oeyB1cmk6IEFwcEV2ZW50TWFwLnNlcnZpY2VBZ3JlZW1lbnQsIGRhdGE6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcml2YWN5XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OTY5MFx1NzlDMVx1NjUzRlx1N0I1NlxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAucHJpdmFjeUFncmVlbWVudCwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFib3V0XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQWJvdXRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29weV9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29weSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29weSgpIHtcclxuICAgICAgICBsZXQgYTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgIGEudmFsdWUgPSBVc2VySW5mby5rZXk7XHJcbiAgICAgICAgYS5zZWxlY3QoKTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAgICAgYS5yZW1vdmUoKTtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NTkwRFx1NTIzNlx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG11c2ljQ2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnN0IGJveCA9IHRoaXMubXVzaWNOb2RlLmdldENoaWxkQnlOYW1lKFwiYm94XCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgbGV0IG11c2ljID0gQ29yZS5hdWRpby5tdXNpY011dGVkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG11c2ljKTtcclxuXHJcbiAgICAgICAgaWNvbi54ID0gIW11c2ljID8gLTE0IDogOTE7XHJcbiAgICAgICAgaWNvbi5za2luID0gIW11c2ljID8gYGdhbWUvaW1nX211c2ljT25CdG4ucG5nYCA6IFwiZ2FtZS9pbWdfbXVzaWNPZmZCdG4ucG5nXCI7XHJcbiAgICAgICAgYm94LnNraW4gPSAhbXVzaWMgPyBgZ2FtZS9pbWdfc3dpdGNoT24ucG5nYCA6IFwiZ2FtZS9pbWdfc3dpdGhPZmYucG5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzb3VuZENoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCBib3ggPSB0aGlzLnNvdW5kTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgbGV0IHNvdW5kID0gQ29yZS5hdWRpby5zb3VuZE11dGVkO1xyXG4gICAgICAgIGljb24ueCA9ICFzb3VuZCA/IC0xNCA6IDkxO1xyXG4gICAgICAgIGljb24uc2tpbiA9ICFzb3VuZCA/IGBnYW1lL2ltZ19tdXNpY09uQnRuLnBuZ2AgOiBcImdhbWUvaW1nX211c2ljT2ZmQnRuLnBuZ1wiO1xyXG4gICAgICAgIGJveC5za2luID0gIXNvdW5kID8gYGdhbWUvaW1nX3N3aXRjaE9uLnBuZ2AgOiBcImdhbWUvaW1nX3N3aXRoT2ZmLnBuZ1wiO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBGZWVkQmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZlZWREYXRhQmFzZSB7XHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBGZWVkQmFzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk1MDFcdTVCOUEgKi9cclxuICAgIGxvY2s6IGJvb2xlYW47XHJcbn1cclxuLyoqXHJcbiAqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVxyXG4gKi9cclxuY2xhc3MgRmVlZFNlcnZpY2Uge1xyXG4gICAgLyoqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbGlzdDogRmVlZERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjU3MFx1NjM2RVx1NTIxRFx1NTlDQlx1NTMxNlxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcImZlZWRcIikubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IGQsXHJcbiAgICAgICAgICAgICAgICBsb2NrOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGZWVkU2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgRmVlZEJhc2UsIFBsYW50QmFzZSwgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCJzcmMvY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgRmVlZFNlcnZpY2UsIHsgRmVlZERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9GZWVkU2VydmljZVwiO1xyXG5pbXBvcnQgUGV0U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BldFNlcnZpY2VcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3BWaWV3RGF0YSB7XHJcbiAgICAvKiogXHU3NTRDXHU5NzYydGFnXHU0RTBCXHU2ODA3aWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFICovXHJcbiAgICBwYXJtPzogYW55O1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Cb3hUb3AsIHRpcHM6XCJcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTUyMTdcdTg4NjhcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJ0bkJveFRvcDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tQm94LCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21Cb3g6IExheWEuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWVkRGVzYywgdGlwczpcIlx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VlZERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZVRpbWUsIHRpcHM6XCJcdTYyMTBcdTcxOUZcdTY1RjZcdTk1RjRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZVRpbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZUdhaW5Cb3gsIHRpcHM6XCJcdTY1MzZcdTc2Q0FcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZUdhaW5Cb3g6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvY2tCdG5Cb3gsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTYzMDlcdTk0QUVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvY2tCdG5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtQnV5QnRuLCB0aXBzOlwiXHU4RDJEXHU0RTcwXHU2MzA5XHU5NEFFXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtQnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWRCdXlCdG4sIHRpcHM6XCJcdTk5NzJcdTY1OTlcdThEMkRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZlZWRCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWREZXNjLCB0aXBzOlwiXHU5OTcyXHU2NTk5XHU2M0NGXHU4RkYwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBmZWVkRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTVCQTBcdTcyNjlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRJY29uLCB0aXBzOlwiXHU1QkEwXHU3MjY5aWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0SWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0RGVzYywgdGlwczpcIlx1NUJBMFx1NzI2OVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0RGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0TmFtZSwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0TmFtZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlNYXgsIHRpcHM6XCJcdTRGNTNcdTUyOUJcdTRFMEFcdTk2NTBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5TWF4OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRCdXlCdG4sIHRpcHM6XCJcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldEJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z29XYXRjaCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NzcwQlx1NUJCNlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29XYXRjaDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z29SZXN0LCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU0RjExXHU2MDZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb1Jlc3Q6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU5NEIxXHU1RTg0XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZEZvbnQsIHRpcHM6XCJcdTc1MjhcdTYyMzdcdTk0QkJcdTc3RjNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmRGb250OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxpc3QsIHRpcHM6XCJcdTk0QjFcdTVFODRcdTYzRDBcdTczQjBcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcm9wb3J0aW9uLCB0aXBzOlwiXHU1MTUxXHU2MzYyXHU2QkQ0XHU0RjhCXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcm9wb3J0aW9uOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBcdTUzRUZcdTYzRDBcdTczQjBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgcHJpY2VEYXRhTGlzdDogeyBwcmljZTogbnVtYmVyOyB0aW1lczogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgLyoqIFx1OTRCMVx1NUU4NFx1OTAwOVx1NjJFOVx1NzY4NFx1NTAzQyBcdTc2ODRcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgcHJpY2VTZWxlY3RJbmRleDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU2NTg3XHU1QjU3XHU4RDQ0XHU2RTkwXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGJ0blRvcFJlc0xpc3Q6IHN0cmluZ1tdW10gPSBbXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfc2VlZHNOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfc2VlZHNTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfcGV0Tm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3BldFNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19mb29kbk5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19mb29kblNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19iYW5rTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX2JhbmtTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICBdO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NTIwN1x1NjM2Mlx1NjgwN1x1N0I3RVx1OTAwOVx1NjJFOVx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSB0b3BCdG5TZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTcwQjlcdTUxRkJcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgaXRlbUxpc3RTZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTgwQ0NcdTY2NkZcdTdFQjlcdTc0MDYgKi9cclxuICAgIHByaXZhdGUgaXRlbVNlbGVjdEJnOiBzdHJpbmdbXSA9IFtcImdhbWUvaW1nX3BldGJhZ05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19wZXRiYWdTZWxlY3RlZC5wbmdcIl07XHJcblxyXG4gICAgLyoqIFx1NUY1M1x1NTI0RFx1OTAwOVx1NjJFOVx1NzY4NFx1NUJBMFx1NzI2OVx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RQZXRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZGF0YTogU2hvcFZpZXdEYXRhO1xyXG5cclxuICAgIHByaXZhdGUgaXNGaXJzdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVJdGVtKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25TZWxlY3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnByaWNlTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVQcmljZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25QcmljZVNlbGVjdCk7XHJcblxyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5LndhdGNoKFVzZXJJbmZvLCB0aGlzKS5rZXkoXCJkaWFtb25kXCIsICh2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbW9uZEZvbnQudmFsdWUgPSB2O1xyXG5cclxuICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWwgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwid2l0aGRyYXdhbFwiKS52YWx1ZSBhcyBzdHJpbmdbXTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wb3J0aW9uLnRleHQgPSBgID0gXHUwMEE1JHsoKE51bWJlcih3aXRoZHJhd2FsWzJdKSAvIE51bWJlcih3aXRoZHJhd2FsWzFdKSkgKiB2KVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5tYXRjaCgvXlxcZCsoPzpcXC5cXGR7MCwyfSk/Lyl9XHU1MTQzYDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW5lZChlOiBTaG9wVmlld0RhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBlO1xyXG4gICAgICAgIHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPSBlPy5pZCB8fCAwO1xyXG5cclxuICAgICAgICB0aGlzLnByaWNlRGF0YUxpc3QgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwid2l0aGRyYXdhbF90aW1lc1wiKS52YWx1ZSBhcyBhbnk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3BCdG5TdGF0ZSgpO1xyXG5cclxuICAgICAgICBpZiAoIVVzZXJJbmZvLmlzRmlyc3RUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmdyYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMTAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9ndWlkX2hhbmQsIFtcclxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuQm94KS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1CdXlCdG4ubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludCgzMDAsIDEwMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1OTAwOVx1NEUyRFx1NjVGNlx1NzY4NFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHBhcmFtIGUgXHU5MDA5XHU0RTJEXHU3Njg0XHU0RTBCXHU2ODA3XHJcbiAgICAgKi9cclxuICAgIG9uU2VsZWN0KGUpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXggPSBlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU3OUNEXHU1QjUwXHU2MjE2XHU5OTZFXHU2NTk5XHU1MjE3XHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldERhdGFMaXN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBsYW50U2VydmljZS5saXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGlmICghRmVlZFNlcnZpY2UubGlzdC5sZW5ndGgpIEZlZWRTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIEZlZWRTZXJ2aWNlLmxpc3Quc29ydCgoYSwgYikgPT4gYS5iYXNlLnZpdGFsaXR5IC0gYi5iYXNlLnZpdGFsaXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMzJcdTY3RDNcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTc2ODRcdTUyMTdcdTg4NjhcclxuICAgICAqIEBwYXJhbSBjZWxsIFx1NTIxN1x1ODg2OFx1ODI4Mlx1NzBCOVxyXG4gICAgICogQHBhcmFtIGluZGV4IFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbaW5kZXhdO1xyXG4gICAgICAgIGxldCBwcmljZUJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBsb2NrSWNvbiA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrX2ljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoIWQpIHJldHVybiBjb25zb2xlLndhcm4oXCJcdTY1NzBcdTYzNkVcdTRFMjJcdTU5MzFcIik7XHJcbiAgICAgICAgaWYgKGQubG9jaykge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbG9ja0ljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICBpY29uID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPFBsYW50QmFzZT5kLmJhc2UpLnNlZWRfcHJpY2UuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gKDxQbGFudEJhc2U+ZC5iYXNlKS5zZWVkX3ByaWNlLm9iai5pY29uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5jb3VudDtcclxuICAgICAgICAgICAgICAgIGljb24gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKHByaWNlQm94LmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gY291bnQgKyBcIlwiO1xyXG4gICAgICAgICAgICAocHJpY2VCb3guZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkX2ljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGljb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuYmFzZS5pY29uO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gZC5iYXNlLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMV07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0RGVzYygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NEY0RVx1OTBFOFx1RkYwQ1x1OTAwOVx1NjJFOVx1NzI2OVx1NTRDMVx1NjVGNlx1NzY4NFx1NjU3MFx1NjM2RVx1NjYzRVx1NzkzQVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdERlc2MoKSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XTtcclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgICAgICAgICAodGhpcy5zZWVkRGVzYy5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2MucmVwbGFjZShcIiZcIiwgKDxGZWVkQmFzZT5kLmJhc2UpLnZpdGFsaXR5ICsgXCJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZERlc2MudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBib3ggPSB0aGlzLmZlZWRCdXlCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0LmNvdW50ICsgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgICAgICBsZXQgYmFzZSA9IGQuYmFzZSBhcyBQbGFudEJhc2U7XHJcbiAgICAgICAgKHRoaXMuc2VlZERlc2MucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZlZWREZXNjLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZWREZXNjLnRleHQgPSBiYXNlLmRlc2M7XHJcbiAgICAgICAgdGhpcy5tYXR1cmVUaW1lLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKGJhc2UubWF0dXJlX3RpbWUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUJ1eUJ0bi52aXNpYmxlID0gIWQubG9jaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1CdXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2NrQnRuQm94LnZpc2libGUgPSBkLmxvY2s7XHJcbiAgICAgICAgdGhpcy5sb2NrQnRuQm94LmFjdGl2ZSA9IGQubG9jaztcclxuICAgICAgICBsZXQgZ2Fpbkxpc3QgPSBiYXNlLmdhaW47XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Cb3ggPSB0aGlzLm1hdHVyZUdhaW5Cb3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgICAgIGljb24gPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgZ2FpbkRhdGEgPSBnYWluTGlzdFt4IC0gMV07XHJcbiAgICAgICAgICAgIGlmICh4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGJhc2UuaGFydmVzdDtcclxuICAgICAgICAgICAgICAgIGljb24gPSBiYXNlLmljb247XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FpbkRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGljb24gPSBnYWluRGF0YS5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gZ2FpbkRhdGEuY291bnQgKiBiYXNlLmhhcnZlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIChpdGVtQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gaWNvbjtcclxuICAgICAgICAgICAgKGl0ZW1Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gXCJ4XCIgKyBjb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBib3ggPSB0aGlzLmxvY2tCdG5Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ1bmxvY2tfYnV5XCIpLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xyXG5cclxuICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gYmFzZS51bmxvY2tfY29zdD8ub2JqPy5pY29uO1xyXG4gICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGJhc2UudW5sb2NrX2Nvc3Q/LmNvdW50ICsgXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoVXNlckluZm8uaXNGaXJzdFRpbWUpIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNlZWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInBldFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZmVlZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYmFua1wiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5pc0ZpcnN0VGltZSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wQnRuSW5kZXggPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEluZGV4KGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ICE9IHRvcEJ0bkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IE51bWJlcih0b3BCdG5JbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL1x1NjRBRFx1NzlDRFxyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5pc0ZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9ndWlkX2hhbmQsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuUG9pbnQuY3JlYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFNvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJzb3dcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEucGFybT8ubGFuZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0uYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL1x1NUU3Rlx1NTQ0QVx1ODlFM1x1OTUwMVx1RkYwQ1x1NjIxNlx1NjYyRlx1OTFEMVx1NUUwMVx1ODlFM1x1OTUwMVxyXG4gICAgICAgICAgICBjYXNlIFwidW5sb2NrX2J1eVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYWRfdW5sb2NrXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuc2VlZHNVbmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wic2VlZHNVbmxvY2tcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0uYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQubmFtZSA9PSBcImFkX3VubG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlQURcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFudFNlcnZpY2UubGlzdFt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdLmxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5jaGFuZ2VJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhbnRTZXJ2aWNlLmxpc3RbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwiYWRfdW5sb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdFBldEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXggPSBQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RQZXRJbmRleCA+PSBQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBldEJ1eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb193YXRjaFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRHb1dhdGNoKFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XS5iYXNlLmlkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fcmVzdFwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTlFRDhcdThCQTRcdTRGNjlcdTYyMzRcdTdCMkNcdTRFMDBcdTRFMkFcdTVCQTBcdTcyNjlcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0R29XYXRjaCgxMDAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmVlZF9idXlcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5OTcyXHU2NTk5XHU4RDJEXHU0RTcwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2l0aGRyYXdfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1NjNEMFx1NzNCMFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aXRoZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmVlZEJ1eSgpIHtcclxuICAgICAgICBsZXQgZmVlZCA9IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdIGFzIEZlZWREYXRhQmFzZTtcclxuICAgICAgICBpZiAoIWZlZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZmVlZEJ1eSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZmVlZEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlZElkOiBmZWVkLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgKz0gZmVlZC5iYXNlLnZpdGFsaXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLmZlZWRCdXlCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBmZWVkLmJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBub3RGbHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUJBMFx1NzI2OVx1NTNCQlx1NzcwQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBldEdvV2F0Y2gocGV0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5wZXRXZWFyLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJwZXRCdXlcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHBldElkOiBwZXRJZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ud2FyZVBldElkID0gcGV0SWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwZXRCdXkoKSB7XHJcbiAgICAgICAgbGV0IHsgYmFzZSB9ID0gUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdO1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5wZXRCdXksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInBldEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgcGV0SWQ6IGJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdLmxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIFVzZXJJbmZvLndhcmVQZXRJZCA9IGJhc2UuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLnBldFZpdGFsaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgPSBiYXNlLnZpdGFsaXR5X21heDtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5kaWdlc3RDb3VudERvd24gPSBDb25maWdHYW1lLnBldERpZ2VzdEludGVydmFsVGltZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NzBCOVx1NTFGQlx1NzBCOVx1NTFGQlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRvcEJ0blN0YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5idG5Cb3hUb3AubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgbGIgPSBidG4uZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nLW1lbnVzZWxlY3RlZC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudW5vcm1hbC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQm90dG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTVFOTVcdTkwRThcdTUxODVcdTVCQjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVCb3R0b20oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvdHRvbUJveC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoeCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXRlbUJ1eUJveCA9IHRoaXMuaXRlbUJ1eUJ0bi5wYXJlbnQgYXMgTGF5YS5Cb3g7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IC8vXHU3OUNEXHU1QjUwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQZXRPckZlZWRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8vXHU5OTcyXHU2NTk5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQZXRPckZlZWRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5hcnJheSA9IHRoaXMucHJpY2VEYXRhTGlzdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NUJBMFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBldCgpIHtcclxuICAgICAgICBpZiAoIVBldFNlcnZpY2UubGlzdC5sZW5ndGgpIFBldFNlcnZpY2UuaW5pdChbXSk7XHJcbiAgICAgICAgbGV0IHBldCA9IFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XTtcclxuICAgICAgICB0aGlzLnBldEljb24uc2tpbiA9IHBldC5iYXNlLmljb247XHJcbiAgICAgICAgdGhpcy5wZXROYW1lLnRleHQgPSBwZXQuYmFzZS5uYW1lO1xyXG4gICAgICAgIHRoaXMucGV0RGVzYy50ZXh0ID0gcGV0LmJhc2UuZGVzYztcclxuICAgICAgICB0aGlzLnZpdGFsaXR5TWF4LnZhbHVlID0gcGV0LmJhc2Uudml0YWxpdHlfbWF4ICsgXCJcIjtcclxuICAgICAgICBsZXQgYnRuX2JveCA9IHRoaXMucGV0QnV5QnRuLmdldENoaWxkQnlOYW1lKFwiYnRuX2JveFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAoYnRuX2JveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHBldC5iYXNlLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgKGJ0bl9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IHBldC5iYXNlLmNvc3QuY291bnQgKyBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgcGV0Qm94ID0gdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgxKSxcclxuICAgICAgICAgICAgZmluZEJveCA9IHBldEJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmRfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBiYWNrX2JveCA9IHBldEJveC5nZXRDaGlsZEJ5TmFtZShcImJhY2tfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBzdGFySWNvbjogTGF5YS5JbWFnZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHgrKykge1xyXG4gICAgICAgICAgICBzdGFySWNvbiA9IGZpbmRCb3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi52aXNpYmxlID0geCAqIDIwIDwgcGV0LmJhc2Uuc2Vuc2l0aXZlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi5za2luID1cclxuICAgICAgICAgICAgICAgIHggKiAyMCArIDEwIDwgcGV0LmJhc2Uuc2Vuc2l0aXZlID8gXCJnYW1lL2ltZ19zdGFyLnBuZ1wiIDogXCJnYW1lL2ltZ19oYWxmc3Rhci5wbmdcIjtcclxuICAgICAgICAgICAgc3Rhckljb24gPSBiYWNrX2JveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnZpc2libGUgPSB4ICogMjAgPCBwZXQuYmFzZS5hYmlsaXR5O1xyXG4gICAgICAgICAgICBzdGFySWNvbi5za2luID1cclxuICAgICAgICAgICAgICAgIHggKiAyMCArIDEwIDwgcGV0LmJhc2UuYWJpbGl0eSA/IFwiZ2FtZS9pbWdfc3Rhci5wbmdcIiA6IFwiZ2FtZS9pbWdfaGFsZnN0YXIucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwZXQubG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLnBldEJ1eUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nb1Jlc3QudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmdvV2F0Y2gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby53YXJlUGV0SWQgPT0gcGV0LmJhc2UuaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChQZXRTZXJ2aWNlLmdldFVubG9ja0xlbigpID09PSAxIHx8IFVzZXJJbmZvLndhcmVQZXRJZCA9PT0gMTAwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1dhdGNoLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29XYXRjaC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXRCdXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTFDRFx1N0Y2RVx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlc2V0UGV0T3JGZWVkTGlzdCgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZ2V0RGF0YUxpc3QoKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NEUyRFx1OTVGNFx1NTE4NVx1NUJCOVx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NTIwN1x1NjM2MlxyXG4gICAgICogQHBhcmFtIGkgXHU0RTBCXHU2ODA3XHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDZW50ZXJCb3hTdGF0ZShpOiBudW1iZXIsIHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdChpKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHNob3c7XHJcbiAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoaSkgYXMgTGF5YS5Cb3gpLmFjdGl2ZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk0QjFcdTVFODRcdTkwMDlcdTYyRTlcclxuICAgICAqIEBwYXJhbSBlIFx1NEUwQlx1NjgwN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9uUHJpY2VTZWxlY3QoZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wcmljZVNlbGVjdEluZGV4ID0gZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU3M0IwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgd2l0aGRyYXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJpY2VTZWxlY3RJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5MDA5XHU2MkU5XHU4OTgxXHU2M0QwXHU3M0IwXHU3Njg0XHU5MUQxXHU5ODlEXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC53aXRoZHJhdyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQ6IHRoaXMucHJpY2VTZWxlY3RJbmRleCB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2M0QwXHU3M0IwXHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBkLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC5kaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5NEIxXHU1RTg0XHU2NTcwXHU2MzZFXHU2RTMyXHU2N0QzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUHJpY2VJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5wcmljZURhdGFMaXN0W2ldO1xyXG5cclxuICAgICAgICBsZXQgdXNlckRhdGE6IE5ldEluaXRbXCJ3aXRoZHJhd1wiXVswXSA9IHsgaWQ6IDAsIHRpbWVzOiAwIH07XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGFMaXN0ID0gVXNlckluZm8ud2l0aGRyYXc7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB1c2VyRGF0YUxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJEYXRhTGlzdFt4XS5pZCA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyRGF0YSA9IHVzZXJEYXRhTGlzdFt4XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBkYXRhLnByaWNlICsgXCJcdTUxNDNcIjtcclxuICAgICAgICBpZiAoZGF0YS50aW1lcykge1xyXG4gICAgICAgICAgICBsZXQgdGltZXMgPSBkYXRhLnRpbWVzIC0gdXNlckRhdGEudGltZXM7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZXNfYm94XCIpIGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc19ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1NTI2OVx1NEY1OSR7XHJcbiAgICAgICAgICAgICAgICB0aW1lcyA8IDAgPyAwIDogdGltZXNcclxuICAgICAgICAgICAgfVx1NkIyMWA7XHJcbiAgICAgICAgICAgIGlmICh0aW1lcyA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZXNfYm94XCIpIGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcmljZUxpc3Quc2VsZWN0ZWRJbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBcImdhbWUvaW1nX3ByaWNlc2VsZWN0ZWQucG5nXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID0gXCJnYW1lL2ltZ19wcmljZW5vcm1hbC5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5cclxuLy8gIFNpZ25JblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzaWduSW5MaXN0LCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgc2lnbkluTGlzdDogTGF5YS5MaXN0O1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzaWduSW5Qcm9ncmVzc0xiLCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgc2lnbkluUHJvZ3Jlc3NMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzaWduSW5Qcm9ncmVzc0JhciwgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1Njc2MVwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25JblByb2dyZXNzQmFyOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByb2dyZXNzRGVzYywgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1NjU4N1x1NUI1N1x1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHByb2dyZXNzRGVzYzogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaW5pc2hJY29uLCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHU2NTg3XHU1QjU3XHU2M0QwXHU3OTNBXCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgZmluaXNoSWNvbjogTGF5YS5JbWFnZTtcclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMuc2lnbkluTGlzdC5hcnJheSA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5saXN0O1xyXG4gICAgICAgIHRoaXMuc2lnbkluTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaWduSW5MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlSXRlbSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gVXNlckluZm8uc3BlZWRVcFRpbWVzIC8gQ29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lcztcclxuICAgICAgICBpZiAoc2NhbGUgPiAxKSBzY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5zaWduSW5Qcm9ncmVzc0Jhci53aWR0aCA9IDk3NyAqIHNjYWxlO1xyXG4gICAgICAgIHRoaXMuc2lnbkluUHJvZ3Jlc3NMYi50ZXh0ID0gVXNlckluZm8uc2lnbkluRGF5cyArIFwiXCI7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Rlc2MudGV4dCA9IGBcdTRFQ0FcdTY1RTVcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdUZGMDhcdTRGN0ZcdTc1Mjgke1VzZXJJbmZvLnNwZWVkVXBUaW1lc30vJHtDb25maWdHYW1lLkFEU3BlZWRVcFRpbWVzfVx1NkIyMVx1NTJBMFx1OTAxRlx1RkYwOWA7XHJcbiAgICAgICAgdGhpcy5maW5pc2hJY29uLnZpc2libGUgPSBVc2VySW5mby5zcGVlZFVwVGltZXMgPj0gQ29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUl0ZW0oY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGJhciA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgb2JqID0gVGFibGVBbmFseXplLnRhYmxlKFwic2lnbkluXCIpLmxpc3RbaV07XHJcbiAgICAgICAgbGV0IHNjYWxlID0gVXNlckluZm8uc2lnbkluRGF5cyAvIG9iai5kYXlzO1xyXG4gICAgICAgIGlmIChzY2FsZSA+IDEpIHNjYWxlID0gMTtcclxuICAgICAgICBiYXIud2lkdGggPSA1MDIgKiBzY2FsZTtcclxuICAgICAgICBjb25zdCByZXdhcmRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gb2JqLnJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiYW1vdW50XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgeCR7b2JqLnJld2FyZC5jb3VudH1gO1xyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInNpZ25fZGF5c1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1N0I3RVx1NTIzMCR7b2JqLmRheXN9XHU1OTI5YDtcclxuXHJcbiAgICAgICAgbGV0IHNraW46IHN0cmluZyA9IFwiXCIsXHJcbiAgICAgICAgICAgIGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRfYnRuXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgYnRuLmRhdGFTb3VyY2UgPSBvYmouaWQ7XHJcbiAgICAgICAgaWYgKG9iai5pZCA+IFVzZXJJbmZvLnNpZ25JbklkKSB7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBidG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXdhcmRCb3gueSA9IDEwMztcclxuICAgICAgICAgICAgc2tpbiA9IGBnYW1lL2ltZ19kb25lLnBuZ2A7XHJcblxyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8uc2lnbkluRGF5cyA+PSBvYmouZGF5cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5zaWduSW5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaWQgPT0gVGFibGVBbmFseXplLnRhYmxlKFwic2lnbkluXCIpLmxpc3RbMF0uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbiA9IGBnYW1lL2ltZ19nZXQucG5nYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQm94LnkgPSA1NztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaWQgLSBVc2VySW5mby5zaWduSW5JZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfZ2V0LnBuZ2A7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2tpbiA9IGBnYW1lL2ltZ19yZWNlaXZlZC5wbmdgO1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LnkgPSA1NztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuLnNraW4gPSBza2luO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNpZ25JblZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnZXRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OTg4Nlx1NTNENlx1NTk1Nlx1NTJCMVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25JbklkID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5zaWduSW5SZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsIHNpZ25JbklkOiBzaWduSW5JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5zaWduSW5JZCA9IHNpZ25JbklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25Jbkxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkID0gVGFibGVBbmFseXplLnRhYmxlKFwic2lnbkluXCIpLmdldChzaWduSW5JZCkucmV3YXJkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBlLnRhcmdldCBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHJld2FyZC5vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IHJld2FyZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgPyAxIDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vL2RlZmF1bHQgY2xhc3MgU3BlZWRVcFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWVkVXBWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aW1lTGIsIHRpcHM6XCJcdTUyQTBcdTkwMUZcdTY1RjZcdTk1RjRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRpbWVMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aW1lc0xiLCB0aXBzOlwiXHU1MTY4XHU0RjUzXHU1MkEwXHU5MDFGXHU1MjY5XHU0RjU5XHU2QjIxXHU2NTcwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0aW1lc0xiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNwZWVkVXBCdG4sIHRpcHM6XCJcdTUxNjhcdTRGNTNcdTUyQTBcdTkwMUZcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNwZWVkVXBCdG46IExheWEuTGFiZWw7XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbk9wZW5lZChkYXRhOiB7IGNhbGw6IEZ1bmN0aW9uIH0pIHtcclxuICAgICAgICB0aGlzLmNhbGwgPSBkYXRhLmNhbGw7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiYWxsX3NwZWVkX3VwX3RpbWVcIikudmFsdWUgYXMgbnVtYmVyO1xyXG4gICAgICAgIHRoaXMudGltZUxiLnRleHQgPSBgJHtNYXRoLmNlaWwodGltZSAvIDYwKX1cdTUyMDZcdTk0OUZgO1xyXG4gICAgICAgIHRoaXMudGltZXNMYi50ZXh0ID0gYFx1NEVDQVx1NjVFNVx1NTI2OVx1NEY1OSR7VXNlckluZm8uYWR2ZXJ0aXNlVGltZXN9XHU2QjIxYDtcclxuICAgICAgICBpZiAoVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkVXBCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFVc2VySW5mby5pc0ZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX2d1aWRfaGFuZCwgW1xyXG4gICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5Cb3gpLmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRVcEJ0bi5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KDI1MCwgMTIwKSlcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoVXNlckluZm8uaXNGaXJzdFRpbWUpIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU3BlZWRVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzcGVlZF91cFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLmlzRmlyc3RUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX2d1aWRfaGFuZCwgW2ZhbHNlXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFNwZWVkVXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkOiB7IGFkdmVydGlzZVRpbWVzOiBudW1iZXI7IHNwZWVkVXBUaW1lczogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc3BlZWRVcFRpbWVzID0gZC5zcGVlZFVwVGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVc2VySW5mby5zcGVlZFVwVGltZXMgPT0gQ29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNwZWVkVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMubGFuZF9zcGVlZF91cCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGwpIHRoaXMuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50T24gfSBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi4vY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4uL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uT2JqIHtcclxuICAgIC8qKiBcdTRFRkJcdTUyQTFpZCAqL1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTVCOENcdTYyMTAgKi9cclxuICAgIG9rOiBib29sZWFuO1xyXG59XHJcblxyXG4vLyAgVGFza1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGFza0xpc3QsIHRpcHM6XCJcdTRFRkJcdTUyQTFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRhc2tMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGFza0xpc3QoKTtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMuaXRlbVJlbmRlcik7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFza0xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC5hcnJheSA9IFRhc2tTZXJ2aWNlLmdldExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGl0ZW1SZW5kZXIoY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBvYmogPSBUYXNrU2VydmljZS5saXN0W2ldLmJhc2U7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IFRhc2tTZXJ2aWNlLmdldFRhc2sob2JqLmlkKTtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IG9iai5pY29uO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IG9iai50aXRsZTtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZXNjXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtvYmouZGVzY30oJHtcclxuICAgICAgICAgICAgKHRhc2s/LnRpbWVzID4gb2JqLnRpbWVzID8gb2JqLnRpbWVzIDogdGFzaz8udGltZXMpIHx8IDBcclxuICAgICAgICB9LyR7b2JqLnRpbWVzfSlgO1xyXG5cclxuICAgICAgICBjb25zdCByZXdhcmRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkXCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmoucmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJhbW91bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IFwieFwiICsgb2JqLnJld2FyZC5jb3VudDtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImdvX3J1blwiKSBhcyBMYXlhLkltYWdlO1xyXG5cclxuICAgICAgICBjb25zdCBidG5PYmo6IEJ1dHRvbk9iaiA9IHtcclxuICAgICAgICAgICAgaWQ6IG9iai5pZCxcclxuICAgICAgICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vXHU1REYyXHU5ODg2XHU1M0Q2XHJcbiAgICAgICAgaWYgKHRhc2s/LnJlY2VpdmUpIHtcclxuICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX3RvbWFyb3cucG5nXCI7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vXHU1M0VGXHU5ODg2XHU1M0Q2XHJcbiAgICAgICAgICAgIGlmICh0YXNrPy50aW1lcyA+PSBvYmoudGltZXMpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ19nZXQucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBidG5PYmoub2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX2RvbmUucG5nXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ0bi5kYXRhU291cmNlID0gYnRuT2JqO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fcnVuXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuT2JqOiBCdXR0b25PYmogPSBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJ0bk9iai5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU4M0I3XHU1M0Q2XHU1OTU2XHU1MkIxXHJcbiAgICAgICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAudGFza1Jld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsIHRhc2tJZDogYnRuT2JqLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrU2VydmljZS5nZXRUYXNrKGJ0bk9iai5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnJlY2VpdmUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuT2JqLm9rID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFza0xpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfdGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogdGFzay5iYXNlLnJld2FyZC5vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogdGFzay5iYXNlLnJld2FyZC5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKGJ0bk9iai5pZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGp1bXAoaWQsIHRhcmdldCkge1xyXG4gICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgICAgY2FzZSAxMDAxOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDAzOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDU6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA2OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDg6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDk6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDEwOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxMTpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMTI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSwgeyBXYXJlSG91c2VEYXRhIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcclxuICovXHJcbi8vRmllbGRMZXZlbFVwVmlldyBXYXJlaG91c2VWaWV3IExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FyZWhvdXNlVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTcyNjlcdTU0QzFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1OYW1lLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxXHU1NDBEXHU3OUYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTmFtZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbURlc2MsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1EZXNjOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtSWNvbiwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1JY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbENvdW50TGIsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTUxRkFcdTU1MkVcdTY1NzBcdTkxQ0ZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsQ291bnRMYjogTGF5YS5UZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsQm94LCB0aXBzOlwiXHU1MUZBXHU1NTJFXHU3MjY5XHU1NEMxXHU0RUY3XHU2ODNDXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsbEJveDogTGF5YS5IQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbEdvbGQsIHRpcHM6XCJcdTkxRDFcdTVFMDFcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsR29sZDogTGF5YS5IQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbERpYW1vbmQsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsRGlhbW9uZDogTGF5YS5IQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWxsQnRuLCB0aXBzOlwiXHU1MUZBXHU1NTJFXHU3Njg0aWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VsbEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2VsbEFkQnRuLCB0aXBzOlwiXHU1MUZBXHU1NTJFXHU3Njg0aWNvbiBcdTVFN0ZcdTU0NEFcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNlbGxBZEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZW1wdHlfbGIsIHRpcHM6XCJcdTdBN0FcdTc2ODRcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGVtcHR5X2xiOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBXYXJlSG91c2VEYXRhW11bXSA9IFtdO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMSBcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbUluZGV4OiBzdHJpbmcgPSBcIjAsMFwiO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMVx1NjU3MFx1NjM2RSAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtRGF0YTogV2FyZUhvdXNlRGF0YTtcclxuICAgIC8qKiBcdTkwMDlcdTRFMkRcdTUxRkFcdTU1MkVcdTcyNjlcdTU0QzFcdTc2ODRcdTY1NzBcdTkxQ0YgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbVNlbGxDb3VudDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUzNTVcdTRFRjcgXHU5MUQxXHU1RTAxICovXHJcbiAgICBwcml2YXRlIHVuaXRQcmljZUdvbGQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1MzU1XHU0RUY3IFx1OTRCQlx1NzdGMyAqL1xyXG4gICAgcHJpdmF0ZSB1bml0UHJpY2VEaWFtb25kOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuZGFrYWljYW5na3UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVySXRlbUxpc3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXNjKG51bGwpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1TZWxsR29sZC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbERpYW1vbmQucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi5vbihMYXlhLkV2ZW50LklOUFVULCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IE51bWJlcih0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPiB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTGlzdCgpIHtcclxuICAgICAgICBsZXQgaSA9IDAsXHJcbiAgICAgICAgICAgIHkgPSAwLFxyXG4gICAgICAgICAgICBoYXNTZWxlY3QgPSBmYWxzZTtcclxuICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YUxpc3RbeV0pIHRoaXMuZGF0YUxpc3RbeV0gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhTGlzdFt5XS5wdXNoKGQpO1xyXG4gICAgICAgICAgICBpZiAoZC5iYXNlLmlkID09IHRoaXMuc2VsZWN0SXRlbURhdGE/LmJhc2UuaWQpIHtcclxuICAgICAgICAgICAgICAgIGhhc1NlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBpZiAoaSA+IDIpIHtcclxuICAgICAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgeSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghaGFzU2VsZWN0ICYmIHRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbUluZGV4ID0gXCIwLDBcIjtcclxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmRhdGFMaXN0O1xyXG4gICAgICAgIHRoaXMuZW1wdHlfbGIudmlzaWJsZSA9ICF0aGlzLmRhdGFMaXN0Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckl0ZW1MaXN0KGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YUxpc3RbaV07XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjZWxsLmdldENoaWxkQnlOYW1lKGBpdGVtXyR7eH1gKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAgICAgaWYgKGRhdGFbeF0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmRhdGFTb3VyY2UgPSBgJHtpfSwke3h9YDtcclxuICAgICAgICAgICAgICAgIGxldCBpY29uID0gaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgICAgIGljb24uc2tpbiA9IGRhdGFbeF0uYmFzZS5pY29uO1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWxcclxuICAgICAgICAgICAgICAgICkudGV4dCA9IGAke2RhdGFbeF0uYmFzZS5uYW1lfV8ke2RhdGFbeF0uY291bnR9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggJiYgdGhpcy5zZWxlY3RJdGVtSW5kZXggPT0gaXRlbS5kYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhpY29uLCB7IHk6IDAgfSwgMTUwLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtRGF0YSA9IGRhdGFbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZXNjKGRhdGFbeF0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpY29uLnkgPSA1NjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbi55ICE9IDU2KSBMYXlhLlR3ZWVuLnRvKGljb24sIHsgeTogNTYgfSwgMTUwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8xXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbUluZGV4ID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7IC8vIFx1OEZEOVx1OTFDQ1x1OTcwMFx1ODk4MVx1NEYxOFx1NTMxNlx1NzNCMFx1NTcyOFx1NTA1QVx1NzY4NFx1NjYyRlx1NTIzN1x1NjVCMFx1NjU3NFx1NEUyQVx1NTIxN1x1ODg2OFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA+IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlZHVjZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50LS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50IDwgMSkgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlbGxCdG5BZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwic2VsbEJ0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bk5hbWUgPSBlLnRhcmdldC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC53YXJlaG91c2VTZWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJ3YXJlaG91c2VTZWxsXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5zZWxlY3RJdGVtRGF0YS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk5hbWUgPT0gXCJzZWxsQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBDb25maWdHYW1lLkFwaVR5cGVBRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5yZWR1Y2VBbW91bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtRGF0YS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZXNjKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmRMaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdFByaWNlR29sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0UHJpY2VHb2xkICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChidG5OYW1lID09IFwic2VsbEJ0bkFkXCIgPyAyIDogMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0UHJpY2VEaWFtb25kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5kaWFtb25kSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXRQcmljZURpYW1vbmQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJ0bk5hbWUgPT0gXCJzZWxsQnRuQWRcIiA/IDIgOiAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuTmFtZSA9PSBcInNlbGxCdG5BZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLnNlbGxCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJld2FyZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2s6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1MUZBXHU1MUZBXHU1NTJFXHU0RkUxXHU2MDZGXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlRGVzYyhkOiBXYXJlSG91c2VEYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkKSB7XHJcbiAgICAgICAgICAgICh0aGlzLml0ZW1JY29uLnBhcmVudCBhcyBMYXlhLkJveCkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAodGhpcy5pdGVtSWNvbi5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1TZWxsRGlhbW9uZC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbEdvbGQucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1JY29uLnNraW4gPSBkLmJhc2UuaWNvbjtcclxuICAgICAgICB0aGlzLml0ZW1OYW1lLnRleHQgPSBkLmJhc2UubmFtZTtcclxuICAgICAgICB0aGlzLml0ZW1EZXNjLnRleHQgPSBkLmJhc2UuZGVzYztcclxuICAgICAgICBsZXQgcHJpY2VHb2xkOiBSZXdhcmRDdXJyZW5jeUJhc2UsIHByaWNlRGlhbW9uZDogUmV3YXJkQ3VycmVuY3lCYXNlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZC5iYXNlLmdhaW4ubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZC5iYXNlLmdhaW5beF0pO1xyXG4gICAgICAgICAgICBpZiAoIWQuYmFzZS5nYWluW3hdLmNvdW50KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGQuYmFzZS5nYWluW3hdLm9iai5pZCA9PSBDb25maWdHYW1lLmdvbGRJZCkge1xyXG4gICAgICAgICAgICAgICAgcHJpY2VHb2xkID0gZC5iYXNlLmdhaW5beF07XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pdGVtU2VsbEdvbGQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgICAgIGQuYmFzZS5nYWluW3hdLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsbEJveC5hZGRDaGlsZCh0aGlzLml0ZW1TZWxsR29sZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZURpYW1vbmQgPSBkLmJhc2UuZ2Fpblt4XTtcclxuICAgICAgICAgICAgICAgICh0aGlzLml0ZW1TZWxsRGlhbW9uZC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgZC5iYXNlLmdhaW5beF0ub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxsQm94LmFkZENoaWxkKHRoaXMuaXRlbVNlbGxEaWFtb25kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gZC5jb3VudDtcclxuICAgICAgICB0aGlzLnVuaXRQcmljZUdvbGQgPSBwcmljZUdvbGQ/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgdGhpcy51bml0UHJpY2VEaWFtb25kID0gcHJpY2VEaWFtb25kPy5jb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUzRUZcdTRFRTVcdTUxRkFcdTU1MkVcdTc2ODRcdTY1NzBcdTkxQ0ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RTZWxsQ291bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbENvdW50TGIudGV4dCA9IHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCArIFwiXCI7XHJcbiAgICAgICAgKHRoaXMuaXRlbVNlbGxHb2xkLmdldENoaWxkQnlOYW1lKFwicHJpY2VcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqIHRoaXMudW5pdFByaWNlR29sZCArIFwiXCI7XHJcbiAgICAgICAgKHRoaXMuaXRlbVNlbGxEaWFtb25kLmdldENoaWxkQnlOYW1lKFwicHJpY2VcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqIHRoaXMudW5pdFByaWNlRGlhbW9uZCArIFwiXCI7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgQWJvdXRWaWV3IGZyb20gXCIuL3ZpZXcvQWJvdXRWaWV3XCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IFZpZXdTaG93QW5pIGZyb20gXCIuL2NvbXBvbmVudHMvVmlld1Nob3dBbmlcIlxuaW1wb3J0IEFkZExhbmRWaWV3IGZyb20gXCIuL3ZpZXcvQWRkTGFuZFZpZXdcIlxuaW1wb3J0IEJ1eVZpdGFsaXR5VmlldyBmcm9tIFwiLi92aWV3L0J1eVZpdGFsaXR5Vmlld1wiXG5pbXBvcnQgRmllbGRMZXZlbFVwVmlldyBmcm9tIFwiLi92aWV3L0ZpZWxkTGV2ZWxVcFZpZXdcIlxuaW1wb3J0IEZyaWVuZHNEZXNjVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNEZXNjVmlld1wiXG5pbXBvcnQgRnJpZW5kc1Jld2FyZFZpZXcgZnJvbSBcIi4vdmlldy9GcmllbmRzUmV3YXJkVmlld1wiXG5pbXBvcnQgRnJpZW5kc1ZpZXcgZnJvbSBcIi4vdmlldy9GcmllbmRzVmlld1wiXG5pbXBvcnQgSGludFZpZXcgZnJvbSBcIi4vdmlldy9IaW50Vmlld1wiXG5pbXBvcnQgTG9naW5WaWV3IGZyb20gXCIuL3ZpZXcvTG9naW5WaWV3XCJcbmltcG9ydCBNYWlsRGVzY1ZpZXcgZnJvbSBcIi4vdmlldy9NYWlsRGVzY1ZpZXdcIlxuaW1wb3J0IE1haWxWaWV3IGZyb20gXCIuL3ZpZXcvTWFpbFZpZXdcIlxuaW1wb3J0IE1haW5WaWV3IGZyb20gXCIuL3ZpZXcvTWFpblZpZXdcIlxuaW1wb3J0IEZpZWxkQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIlxuaW1wb3J0IE9yZGVyVmlldyBmcm9tIFwiLi92aWV3L09yZGVyVmlld1wiXG5pbXBvcnQgT3ZlclZpZXcgZnJvbSBcIi4vdmlldy9PdmVyVmlld1wiXG5pbXBvcnQgU2V0dGluZ1ZpZXcgZnJvbSBcIi4vdmlldy9TZXR0aW5nVmlld1wiXG5pbXBvcnQgU2hvcFZpZXcgZnJvbSBcIi4vdmlldy9TaG9wVmlld1wiXG5pbXBvcnQgU2lnbkluVmlldyBmcm9tIFwiLi92aWV3L1NpZ25JblZpZXdcIlxuaW1wb3J0IFNwZWVkVXBWaWV3IGZyb20gXCIuL3ZpZXcvU3BlZWRVcFZpZXdcIlxuaW1wb3J0IFRhc2tWaWV3IGZyb20gXCIuL3ZpZXcvVGFza1ZpZXdcIlxuaW1wb3J0IFdhcmVob3VzZVZpZXcgZnJvbSBcIi4vdmlldy9XYXJlaG91c2VWaWV3XCJcclxuLypcclxuKiBcdTZFMzhcdTYyMEZcdTUyMURcdTU5Q0JcdTUzMTZcdTkxNERcdTdGNkU7XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTEwODA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xOTIwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cIm1pZGRsZVwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJjZW50ZXJcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbiAgICAgICAgcmVnKFwidmlldy9BYm91dFZpZXcudHNcIixBYm91dFZpZXcpO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL0J1dHRvbi50c1wiLEJ1dHRvbik7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvVmlld1Nob3dBbmkudHNcIixWaWV3U2hvd0FuaSk7XG4gICAgICAgIHJlZyhcInZpZXcvQWRkTGFuZFZpZXcudHNcIixBZGRMYW5kVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvQnV5Vml0YWxpdHlWaWV3LnRzXCIsQnV5Vml0YWxpdHlWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9GaWVsZExldmVsVXBWaWV3LnRzXCIsRmllbGRMZXZlbFVwVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc0Rlc2NWaWV3LnRzXCIsRnJpZW5kc0Rlc2NWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9GcmllbmRzUmV3YXJkVmlldy50c1wiLEZyaWVuZHNSZXdhcmRWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9GcmllbmRzVmlldy50c1wiLEZyaWVuZHNWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9IaW50Vmlldy50c1wiLEhpbnRWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9Mb2dpblZpZXcudHNcIixMb2dpblZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haWxEZXNjVmlldy50c1wiLE1haWxEZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpbFZpZXcudHNcIixNYWlsVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpblZpZXcudHNcIixNYWluVmlldyk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHNcIixGaWVsZENvbXBvbmVudCk7XG4gICAgICAgIHJlZyhcInZpZXcvT3JkZXJWaWV3LnRzXCIsT3JkZXJWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9PdmVyVmlldy50c1wiLE92ZXJWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TZXR0aW5nVmlldy50c1wiLFNldHRpbmdWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TaG9wVmlldy50c1wiLFNob3BWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TaWduSW5WaWV3LnRzXCIsU2lnbkluVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU3BlZWRVcFZpZXcudHNcIixTcGVlZFVwVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvVGFza1ZpZXcudHNcIixUYXNrVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvV2FyZWhvdXNlVmlldy50c1wiLFdhcmVob3VzZVZpZXcpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcIi4vY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBQbGFudFNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwiLi9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwiLi9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwiLi9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCIuL2NvcmUvQXBwXCI7XHJcbmNsYXNzIE1haW4ge1xyXG4gICAgLyoqIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHU1MjE3XHU4ODY4ICovXHJcbiAgICBzdGF0aWMgY3VzdG9tUmVuZGVySUQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9cdTY4MzlcdTYzNkVJREVcdThCQkVcdTdGNkVcdTUyMURcdTU5Q0JcdTUzMTZcdTVGMTVcdTY0Q0VcclxuICAgICAgICBpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcbiAgICAgICAgZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcbiAgICAgICAgTGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG4gICAgICAgIC8vXHU1MTdDXHU1QkI5XHU1RkFFXHU0RkUxXHU0RTBEXHU2NTJGXHU2MzAxXHU1MkEwXHU4RjdEc2NlbmVcdTU0MEVcdTdGMDBcdTU3M0FcdTY2NkZcclxuICAgICAgICBMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG4gICAgICAgIC8vXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA4XHU5MDFBXHU4RkM3SURFXHU4QkJFXHU3RjZFXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHVGRjBDXHU2MjE2XHU4MDA1dXJsXHU1NzMwXHU1NzQwXHU1ODlFXHU1MkEwZGVidWc9dHJ1ZVx1NTNDMlx1NjU3MFx1RkYwQ1x1NTc0N1x1NTNFRlx1NjI1M1x1NUYwMFx1OEMwM1x1OEJENVx1OTc2Mlx1Njc3Rlx1RkYwOVxyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIilcclxuICAgICAgICAgICAgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG4gICAgICAgIExheWEuYWxlcnRHbG9iYWxFcnJvcih0cnVlKTtcclxuICAgICAgICBMYXlhLnN0YWdlLmJnQ29sb3IgPSBcIiNmZmZmZmZcIjtcclxuXHJcbiAgICAgICAgREVCVUcgJiYgR2FtZUNvbmZpZy5zdGF0ICYmIExheWEuU3RhdC5zaG93KCk7XHJcblxyXG4gICAgICAgIC8vXHU2RkMwXHU2RDNCXHU4RDQ0XHU2RTkwXHU3MjQ4XHU2NzJDXHU2M0E3XHU1MjM2XHVGRjBDdmVyc2lvbi5qc29uXHU3NTMxSURFXHU1M0QxXHU1RTAzXHU1MjlGXHU4MEZEXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHVGRjBDXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU0RTVGXHU0RTBEXHU1RjcxXHU1NENEXHU1NDBFXHU3RUVEXHU2RDQxXHU3QTBCXHJcbiAgICAgICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFxyXG4gICAgICAgICAgICBcInZlcnNpb24uanNvblwiLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSxcclxuICAgICAgICAgICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vXHU2RkMwXHU2RDNCXHU1OTI3XHU1QzBGXHU1NkZFXHU2NjIwXHU1QzA0XHVGRjBDXHU1MkEwXHU4RjdEXHU1QzBGXHU1NkZFXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1OTgyXHU2NzlDXHU1M0QxXHU3M0IwXHU1QzBGXHU1NkZFXHU1NzI4XHU1OTI3XHU1NkZFXHU1NDA4XHU5NkM2XHU5MUNDXHU5NzYyXHVGRjBDXHU1MjE5XHU0RjE4XHU1MTQ4XHU1MkEwXHU4RjdEXHU1OTI3XHU1NkZFXHU1NDA4XHU5NkM2XHVGRjBDXHU4MDBDXHU0RTBEXHU2NjJGXHU1QzBGXHU1NkZFXHJcbiAgICAgICAgTGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcclxuICAgICAgICAgICAgXCJmaWxlY29uZmlnLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Db25maWdMb2FkZWQoKSB7XHJcbiAgICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcclxuICAgICAgICBDb25maWdbXCJjdXN0b21SZW5kZXJJRFwiXSA9IFtdO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuaW5pdCgpO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3QuaW5pdChDb25maWdHYW1lLmJhc2VVcmwpO1xyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwub24oRXZlbnRNYXBzLmxvZ2luX2dhbWUsIHRoaXMsIHRoaXMubG9naW5HYW1lKTtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci51c2VBdWRpb011c2ljID0gZmFsc2U7XHJcbiAgICAgICAgQXBwQ29yZS5saXN0ZW5BcHBGdW5jdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBWaWV3TWFuYWdlci5pbnN0LmluaXQoKTtcclxuXHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5vcGVuKFJlcy52aWV3cy5Mb2dpblZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRHYW1lRGF0YShkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAuY2xvc2VJbWFnZSwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5WaWV3LnNldExvYWRpbmdQYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9cdTU0MEVcdTY3MUZcdTRGMThcdTUzMTZcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS5WaWV3LnNob3dMb2FkaW5nUGFnZShudWxsLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSg5OTk5OTk5OTk5OTk5OTkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5HYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5HYW1lKCkge1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIFJlcy5zY2VuZXMsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlcy5zY2VuZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhlKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheU11c2ljKFJlcy5hdWRpb3MuQkdNLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSgxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCBlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEdhbWVEYXRhKGQ6IE5ldEluaXQpIHt9XHJcbn1cclxuLy9cdTZGQzBcdTZEM0JcdTU0MkZcdTUyQThcdTdDN0JcclxubmV3IE1haW4oKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLE1BQVc7QUFBWCxZQUFXLFlBQVg7QUFFSCxrQ0FBZ0I7QUFHaEIsaUNBQWU7QUFHZixpQ0FBZTtBQUdmLGtDQUFnQjtBQUdoQiwrQkFBYTtBQUViLDhCQUFZO0FBRVosZ0NBQWM7QUFFZCxxQ0FBbUI7QUFzQm5CLG9DQUFrQjtBQUVsQix1Q0FBcUI7QUFFckIsbUNBQWlCO0FBQUEsS0E5Q0g7QUFvRFgsTUFBVztBQUFYLFlBQVcsY0FBWDtBQUVILHlCQUFLO0FBRUwsaUNBQWE7QUFFYiw4QkFBVTtBQUVWLHFDQUFpQjtBQUVqQiw4QkFBVTtBQUVWLGlDQUFhO0FBRWIsdUNBQW1CO0FBRW5CLHVDQUFtQjtBQUVuQixzQ0FBa0I7QUFFbEIsbUNBQWU7QUFFZixpQ0FBYTtBQUViLHFDQUFpQjtBQUFBLEtBeEJIOzs7QUNsRFYsTUFBSztBQUFMLFlBQUssUUFBTDtBQUdBLDBCQUFZO0FBRVosNEJBQWM7QUFFZCxnQ0FBa0I7QUFFbEIsaUNBQW1CO0FBRW5CLGdDQUFrQjtBQUVsQixrQ0FBb0I7QUFFcEIsNEJBQWM7QUFFZCx5QkFBVztBQUVYLDBCQUFZO0FBRVosNkJBQWU7QUFFZix5QkFBVztBQUVY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QUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsT0FBTSxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksc0NBQW9DLFFBQU8sSUFBRyxhQUFZLENBQUMsRUFBQyxNQUFLLEdBQUUsVUFBUyxVQUFTLFFBQU8sVUFBUyxRQUFPLFFBQU0sRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLE9BQUssRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLFFBQU0sRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLE9BQUssRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sZUFBYyxRQUFPLFNBQU8sUUFBTyxDQUFDLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTywwQkFBeUIsWUFBVyxHQUFFLFFBQU8sV0FBVSxRQUFPLHVEQUFhLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTywwQkFBeUIsWUFBVyxHQUFFLFFBQU8sV0FBVSxRQUFPLHVEQUFhLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTywwQkFBeUIsWUFBVyxHQUFFLFFBQU8sWUFBVyxRQUFPLHVEQUFhLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTywwQkFBeUIsWUFB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
