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
  var Table = { "task": [{ "id": 1001, "reward": "1001:50", "times": 1, "title": "\u7B7E\u5230\u9886\u94BB\u77F3", "desc": "\u770B\u89C6\u9891\u7B7E\u5230", "icon": null }, { "id": 1002, "reward": "1001:100", "times": 10, "title": "\u83DC\u5730\u65BD\u80A510\u6B21", "desc": "\u83DC\u5730\u52A0\u901F10\u6B21", "icon": null }, { "id": 1003, "reward": "1001:50", "times": 10, "title": "\u83DC\u5730\u6536\u83B710\u6B21", "desc": "\u83DC\u5730\u6536\u83B710\u6B21", "icon": null }, { "id": 1004, "reward": "1001:50", "times": 5, "title": "\u8BBF\u53CB5\u6B21", "desc": "\u5077\u83DC5\u6B21", "icon": null }, { "id": 1005, "reward": "1001:20", "times": 3, "title": "\u5582\u517B\u72D7\u72D73\u6B21", "desc": "\u5582\u517B\u72D7\u72D73\u6B21", "icon": null }, { "id": 1006, "reward": "1001:20", "times": 5, "title": "\u8D2D\u4E70\u9972\u65995\u6B21", "desc": "\u8D2D\u4E70\u9972\u65995\u6B21", "icon": null }, { "id": 1007, "reward": "1001:20", "times": 10, "title": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "desc": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "icon": null }, { "id": 1008, "reward": "1002:500", "times": 3, "title": "\u51FA\u552E\u4F5C\u72693\u6B21", "desc": "\u51FA\u552E\u4F5C\u72693\u6B21", "icon": null }, { "id": 1009, "reward": "1001:100", "times": 5, "title": "\u6DFB\u52A0\u597D\u53CB", "desc": "\u6DFB\u52A0\u597D\u53CB5\u4E2A", "icon": null }, { "id": 1010, "reward": "1001:50", "times": 1, "title": "\u5206\u4EAB\u5F97\u597D\u793C", "desc": "\u5206\u4EAB\u4E00\u6B21", "icon": null }, { "id": 1011, "reward": "1002:500", "times": 3, "title": "\u6307\u5B9A\u79CD\u690D", "desc": "\u79CD\u690D\u6307\u5B9A\u79CD\u5B50", "icon": null }, { "id": 1012, "reward": "1001:50", "times": 10, "title": "\u770B\u89C6\u9891\u9886\u798F\u5229", "desc": "\u770B\u89C6\u989110\u6B21", "icon": null }], "signIn": [{ "id": 1001, "days": 7, "reward": "1001:20000" }, { "id": 1002, "days": 10, "reward": "1001:30000" }, { "id": 1003, "days": 15, "reward": "1001:50000" }, { "id": 1004, "days": 20, "reward": "1001:80000" }, { "id": 1005, "days": 30, "reward": "1001:120000" }, { "id": 1006, "days": 50, "reward": "1001:180000" }, { "id": 1007, "days": 80, "reward": "1001:300000" }, { "id": 1008, "days": 100, "reward": "1001:350000" }, { "id": 1009, "days": 150, "reward": "1001:500000" }], "plant": [{ "id": 1001, "name": "\u6C34\u7A3B", "icon": "plant_icon/1002_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1002, "name": "\u5927\u8C46", "icon": "plant_icon/1004_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1003, "name": "\u5927\u849C", "icon": "plant_icon/1012_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "240", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1004, "name": "\u5305\u5FC3\u83DC", "icon": "plant_icon/1006_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "1~2", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1005, "name": "\u571F\u8C46", "icon": "plant_icon/1007_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1006, "name": "\u841D\u535C", "icon": "plant_icon/1005_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1007, "name": "\u5C0F\u9EA6", "icon": "plant_icon/1001_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1008, "name": "\u8FA3\u6912", "icon": "plant_icon/1010_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "600", "unlock_cost": "1002:2000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1009, "name": "\u9EC4\u74DC", "icon": "plant_icon/1011_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1010, "name": "\u8304\u5B50", "icon": "plant_icon/1013_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1011, "name": "\u80E1\u841D\u535C", "icon": "plant_icon/1008_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:4500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1012, "name": "\u5357\u74DC", "icon": "plant_icon/1014_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:5000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1013, "name": "\u7389\u7C73", "icon": "plant_icon/1003_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:5500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1014, "name": "\u7518\u8517", "icon": "plant_icon/1015_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1015, "name": "\u756A\u8304", "icon": "plant_icon/1009_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }], "pet": [{ "id": 1001, "name": "\u65FA\u8D22", "icon": "pet_feed/1001_dog.png", "vitality_max": 100, "vitality_consume": 10, "cost": "1002:3000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 34, "ability": 42 }, { "id": 1002, "name": "\u6C64\u5706", "icon": "pet_feed/1007_dog.png", "vitality_max": 100, "vitality_consume": 15, "cost": "1002:4000", "desc": "\u989C\u503C\u3001\u667A\u5546\u53CC\u53CC\u5728\u7EBF", "sensitive": 40, "ability": 48 }, { "id": 1003, "name": "\u8089\u5E72", "icon": "pet_feed/1009_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:4500", "desc": "\u6700\u5FE0\u8BDA\u7684\u4F19\u4F34", "sensitive": 45, "ability": 55 }, { "id": 1004, "name": "\u4E8C\u54C8", "icon": "pet_feed/1002_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:5000", "desc": "\u7EDD\u4E0D\u62C6\u5BB6\uFF01", "sensitive": 48, "ability": 60 }, { "id": 1005, "name": "\u5927\u773C\u775B", "icon": "pet_feed/1005_dog.png", "vitality_max": 100, "vitality_consume": 17, "cost": "1002:7000", "desc": "\u6D3B\u597D\u5403\u7684\u5C11", "sensitive": 50, "ability": 75 }, { "id": 1006, "name": "\u5C0F\u5C3E\u5DF4", "icon": "pet_feed/1004_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:7500", "desc": "\u6B66\u529B\u5929\u8D4B\u5DF2\u70B9\u6EE1~\u62FF\u634F\uFF01", "sensitive": 60, "ability": 80 }, { "id": 1007, "name": "\u7403\u7403", "icon": "pet_feed/1008_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u5C31\u4E24\u4E2A\u5B57\uFF0C\u542C\u8BDD\uFF01", "sensitive": 69, "ability": 85 }, { "id": 1008, "name": "\u5C0F\u767D", "icon": "pet_feed/1003_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u770B\u5BB6\u3001\u770B\u83DC\u3001\u770B\u5B69\u5B50", "sensitive": 76, "ability": 88 }, { "id": 1009, "name": "\u70B9\u70B9", "icon": "pet_feed/1006_dog.png", "vitality_max": 100, "vitality_consume": 19, "cost": "1002:10000", "desc": "\u4F60\u503C\u5F97\u62E5\u6709\uFF01", "sensitive": 85, "ability": 93 }, { "id": 1010, "name": "\u95F7\u58A9", "icon": "pet_feed/1010_dog.png", "vitality_max": 100, "vitality_consume": 30, "cost": "1002:15000", "desc": "\u957F\u5F97\u5C31\u5F88\u51F6\uFF0C\u6293\u5C0F\u5077\u66F4\u51F6", "sensitive": 90, "ability": 99 }], "order": [{ "id": 1, "commission": "0.5", "condition": "1001:2" }, { "id": 2, "commission": "0.76", "condition": "1001:1,1002:2" }, { "id": 3, "commission": "0.39", "condition": "1001:1,1003:2,1002:3" }, { "id": 4, "commission": "0.61", "condition": "1002:4,1003:3,1004:3,1001:4" }, { "id": 5, "commission": "0.61", "condition": "1004:6,1002:5,1005:4,1001:5" }, { "id": 6, "commission": "0.48", "condition": "1003:10,1004:5,1005:3,1006:3" }, { "id": 7, "commission": "0.43", "condition": "1007:4,1003:5,1004:7,1006:10" }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:5,1002:5" }, { "id": 9, "commission": "0.39", "condition": "1006:2,1009:10,1007:8,1003:8" }, { "id": 10, "commission": "0.22", "condition": "1006:10,1010:5,1008:10,1009:6" }, { "id": 11, "commission": "0.76", "condition": "1009:5,1004:10,1001:9,1002:10" }, { "id": 12, "commission": "0.43", "condition": "1007:6,1003:11,1011:6,1005:10" }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:8" }, { "id": 14, "commission": "0.7", "condition": "1013:10,1008:8,1006:6,1001:10" }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:10,1011:12,1001:10" }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17" }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:6,1015:12,1001:14" }, { "id": 18, "commission": 0.48, "condition": "1008:14,1011:12,1009:15,1002:5" }, { "id": 19, "commission": 0.75, "condition": "1013:10,1003:20,1014:11,1001:7" }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:12" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:14,1005:16,1007:15" }, { "id": 22, "commission": "0.4", "condition": "1015:19,1007:12,1011:5,1004:17" }, { "id": 23, "commission": 0.2, "condition": "1003:19,1014:2,1015:16,1001:14" }, { "id": 24, "commission": 0.77, "condition": "1014:13,1001:17,1008:18,1004:5" }, { "id": 25, "commission": "0.39", "condition": "1012:23,1011:19,1010:15,1015:20" }, { "id": 26, "commission": 0.03, "condition": "1002:21,1011:12,1012:22,1003:19" }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:10,1011:17" }, { "id": 28, "commission": 0.53, "condition": "1014:17,1007:12,1011:17,1003:17" }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:18" }, { "id": 30, "commission": 0.14, "condition": "1011:17,1014:19,1006:14,1004:30" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:19,1006:11" }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:22,1012:12,1008:20" }, { "id": 33, "commission": 0.2, "condition": "1012:16,1013:11,1002:23,1009:16" }, { "id": 34, "commission": 0.02, "condition": "1009:19,1010:12,1011:14,1012:20" }, { "id": 35, "commission": 0.13, "condition": "1001:18,1004:19,1013:16,1003:10" }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:17,1007:17" }, { "id": 37, "commission": 0.44, "condition": "1012:14,1010:20,1002:14,1011:11" }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18" }, { "id": 39, "commission": 0.36, "condition": "1007:18,1012:13,1004:16,1002:16" }, { "id": 40, "commission": 0.28, "condition": "1004:10,1005:10,1008:18,1011:16" }, { "id": 41, "commission": 0.18, "condition": "1010:18,1009:18,1008:17,1011:26" }, { "id": 42, "commission": 0.43, "condition": "1009:11,1005:18,1007:20,1002:13" }, { "id": 43, "commission": 0.14, "condition": "1006:10,1004:14,1014:11,1008:15" }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:18,1002:24,1007:19" }, { "id": 45, "commission": 0.11, "condition": "1012:15,1010:23,1007:13,1011:13" }, { "id": 46, "commission": 0.39, "condition": "1003:12,1007:23,1010:16,1002:14" }, { "id": 47, "commission": 0.49, "condition": "1010:14,1015:20,1003:15,1014:16" }, { "id": 48, "commission": 0.06, "condition": "1013:17,1007:14,1008:17,1001:10" }, { "id": 49, "commission": 0.48, "condition": "1002:26,1004:11,1009:12,1006:20" }, { "id": 50, "commission": 0.05, "condition": "1006:17,1012:19,1008:20,1015:11" }, { "id": 51, "commission": 0.04, "condition": "1011:18,1004:19,1002:25,1003:11" }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:10,1001:15,1004:26" }, { "id": 53, "commission": 0.08, "condition": "1014:14,1012:12,1010:20,1015:18" }, { "id": 54, "commission": 0.45, "condition": "1005:22,1002:13,1009:16,1015:17" }, { "id": 55, "commission": "0.56", "condition": "1001:23,1014:19,1005:17,1010:15" }, { "id": 56, "commission": 0.05, "condition": "1006:17,1005:19,1009:17,1003:18" }, { "id": 57, "commission": 0.67, "condition": "1007:21,1008:17,1002:16,1009:25" }, { "id": 58, "commission": 0.32, "condition": "1006:10,1008:25,1005:24,1007:19" }, { "id": 59, "commission": 0.79, "condition": "1012:25,1009:30,1013:16,1008:15" }, { "id": 60, "commission": 0.69, "condition": "1015:26,1012:27,1010:31,1001:23" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:25,1011:15,1002:17" }, { "id": 62, "commission": 0.44, "condition": "1015:21,1007:15,1011:18,1006:26" }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:27" }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:29,1004:25" }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:30,1014:20,1005:15" }, { "id": 66, "commission": 0.73, "condition": "1004:15,1008:25,1002:14,1012:14" }, { "id": 67, "commission": 0.13, "condition": "1001:16,1012:20,1011:20,1003:10" }, { "id": 68, "commission": 0.69, "condition": "1013:24,1008:23,1006:16,1007:17" }, { "id": 69, "commission": 0.37, "condition": "1015:30,1004:29,1013:17,1009:10" }, { "id": 70, "commission": 0.71, "condition": "1010:23,1004:31,1011:17,1012:11" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:26,1003:28,1015:13" }, { "id": 72, "commission": 0.31, "condition": "1005:25,1002:38,1012:19,1010:14" }, { "id": 73, "commission": 0.39, "condition": "1012:34,1006:22,1003:27,1004:20" }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:30,1001:20" }, { "id": 75, "commission": 0.18, "condition": "1006:31,1014:30,1008:12,1002:25" }, { "id": 76, "commission": 0.51, "condition": "1007:21,1012:20,1004:11,1014:20" }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:16,1012:24,1007:30" }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:12" }, { "id": 79, "commission": 0.65, "condition": "1006:26,1004:18,1007:12,1011:27" }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:24" }, { "id": 81, "commission": 0.14, "condition": "1012:10,1015:28,1002:14,1003:38" }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14" }, { "id": 83, "commission": 0.53, "condition": "1010:19,1003:38,1007:12,1015:20" }, { "id": 84, "commission": 0.62, "condition": "1005:29,1014:26,1002:18,1007:38" }, { "id": 85, "commission": 0.37, "condition": "1011:10,1001:17,1012:12,1004:12" }, { "id": 86, "commission": 0.59, "condition": "1009:25,1011:20,1006:14,1015:11" }, { "id": 87, "commission": 0.11, "condition": "1006:26,1005:19,1013:10,1014:29" }, { "id": 88, "commission": 0.08, "condition": "1008:37,1011:24,1015:12,1014:11" }, { "id": 89, "commission": 0.02, "condition": "1002:17,1003:28,1005:11,1010:14" }, { "id": 90, "commission": 0.32, "condition": "1002:19,1013:28,1007:25,1001:13" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:10,1014:10,1007:16" }, { "id": 92, "commission": 0.13, "condition": "1004:38,1011:13,1008:15,1007:29" }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:39,1006:38,1008:11" }, { "id": 94, "commission": 0.22, "condition": "1002:36,1001:17,1013:16,1005:31" }, { "id": 95, "commission": 0.15, "condition": "1005:16,1001:14,1015:34,1008:16" }, { "id": 96, "commission": "0.39", "condition": "1003:24,1001:32,1007:28,1005:18" }, { "id": 97, "commission": "0.7", "condition": "1013:32,1009:23,1006:30,1011:20" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1002:0", "gain": null }, { "id": 2, "reward": "1002:1500", "cost": "1002:10000", "gain": 0.1 }, { "id": 3, "reward": "1002:2000", "cost": "1002:30000", "gain": 0.25 }, { "id": 4, "reward": "1002:2500", "cost": "1002:50000", "gain": 0.4 }, { "id": 5, "reward": "1002:3000", "cost": "1002:100000", "gain": 0.55 }], "feed": [{ "id": 1001, "name": "\u997C\u5E72", "icon": "pet_feed/1001_feed.png", "vitality": 1, "cost": "1002:30", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1002, "name": "\u575A\u679C", "icon": "pet_feed/1002_feed.png", "vitality": 2, "cost": "1002:50", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1003, "name": "\u706B\u817F", "icon": "pet_feed/1003_feed.png", "vitality": 5, "cost": "1002:100", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1004, "name": "\u725B\u8089", "icon": "pet_feed/1004_feed.png", "vitality": 50, "cost": "1002:900", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1005, "name": "\u732A\u8089", "icon": "pet_feed/1005_feed.png", "vitality": 20, "cost": "1002:460", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1006, "name": "\u9E21\u8089", "icon": "pet_feed/1006_feed.png", "vitality": 10, "cost": "1002:270", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }], "currency": [{ "id": 1001, "name": "\u94BB\u77F3", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "\u91D1\u5E01", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_times", "value": 30 }, { "id": "all_speed_up_time", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:5000,1002:10000,1002:20000,1002:30000,1002:40000,1002:50000,1002:60000" }, { "id": "goldDefault", "value": "1002:100" }, { "id": "diamondDefault", "value": "1001:50" }, { "id": "ADTimesLimit", "value": 30 }, { "id": "ADSpeedUptimes", "value": 6 }, { "id": "vitalityBuyCostGold", "value": "1002:10000" }, { "id": "vitalityLimit", "value": 10 }, { "id": "landAmountMax", "value": 9 }, { "id": "petDefaultVitality", "value": 100 }, { "id": "petDigestIntervalTime", "value": 60 }, { "id": "Videorewards", "value": "1001:100" }, { "id": "withdrawal", "value": "1001:10000:1" }, { "id": "Invitation_rewards", "value": "1001:5000" }, { "id": "withdrawal_times", "value": "0.3:3,0.5:2,5:0,10:0,50:0" }] };

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
              if (ad) {
                TaskService_default.taskAddTimes(1001);
                TaskService_default.taskAddTimes(1012);
              }
              this.completeHandler(JSON.parse(xmlhttp.responseText), resolve);
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
        HttpDataControl_default.forward({
          api: this.sendData.api,
          data: e.data,
          resolveEvent: resolve
        });
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
          this.itemList.array = this.friends;
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
        case "go_play_btn":
          this.visitFriend(e.target);
          break;
        default:
          break;
      }
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
          core_default.eventGlobal.event(EventMaps.go_friend_home, d);
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
      return;
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
            this.updateOrder();
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
    goFriendListen(d) {
      this.isOuter = true;
      this.goFriend(d);
    }
    goFriend(d) {
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
      this.updateFriendView(d == null ? void 0 : d.nickname);
    }
    updateFriendView(nickname = "") {
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
      } else {
        this.outCountDownNumber = 60;
        Laya.timer.clear(this, this.outCountDownEvent);
        orderBox.visible = true;
        friendName.visible = false;
        moneyBox.visible = true;
        countDown.visible = false;
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
      });
    }
    onOpened(e) {
      this.data = e;
      this.topBtnSelectIndex = (e == null ? void 0 : e.id) || 0;
      this.priceDataList = TableAnalyze_default.table("config").get("withdrawal_times").value;
      this.updateTopBtnState();
      let withdrawal = TableAnalyze_default.table("config").get("withdrawal").value;
      this.proportion.text = `\u5151\u6362\u6BD4\u4F8B ${withdrawal[1]}:${withdrawal[2]}`;
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
          }).then(() => {
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
      console.log(userData);
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
        var _a, _b, _c;
        if (!this.dataList[y])
          this.dataList[y] = [];
        this.dataList[y].push(d);
        console.log(d.base.id, (_a = this.selectItemData) == null ? void 0 : _a.base.id, d.base.id == ((_b = this.selectItemData) == null ? void 0 : _b.base.id));
        if (d.base.id == ((_c = this.selectItemData) == null ? void 0 : _c.base.id)) {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Db25maWdHYW1lLnRzIiwgIi4uLy4uL3NyYy9jb3JlL0FwcC50cyIsICIuLi8uLi9zcmMvY29yZS9BdWRpb0NvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvcmUvaW5kZXgudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQWJvdXRWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVG9vbHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9UYWJsZUFuYWx5emUudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9Vc2VySW5mby50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL05ldE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9IdHRwRGF0YUNvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9IdHRwQ29udHJvbC50cyIsICIuLi8uLi9zcmMvdmlldy9BZGRMYW5kVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9CdXlWaXRhbGl0eVZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRmllbGRMZXZlbFVwVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GcmllbmRzRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvSGludFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTG9naW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L01haWxEZXNjVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9NYWlsVmlldy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9GaWVsZENvbXBvbmVudC50cyIsICIuLi8uLi9zcmMvdmlldy9NYWluVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9PcmRlclZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvT3ZlclZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2V0dGluZ1ZpZXcudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL0ZlZWRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy92aWV3L1Nob3BWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NpZ25JblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU3BlZWRVcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvVGFza1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvV2FyZWhvdXNlVmlldy50cyIsICIuLi8uLi9zcmMvR2FtZUNvbmZpZy50cyIsICIuLi8uLi9zcmMvTWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNlx1NTQwRFx1NzlGMFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gRXZlbnRNYXBzIHtcclxuICAgIC8qKiBsb2FkIFx1NzU0Q1x1OTc2Mlx1OEZEQlx1ODg0Q1x1NjZGNFx1NjVCMCAqL1xyXG4gICAgbG9hZF9wcm9ncmVzcyA9IFwibG9hZF9wcm9ncmVzc1wiLFxyXG5cclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTU3MUZcdTU3MzAgKi9cclxuICAgIHVwZGF0ZV9maWVsZCA9IFwidXBkYXRlX2ZpZWxkXCIsXHJcblxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NEUzQlx1OTg3NVx1OEJBMlx1NTM1NVx1NjU3MFx1NjM2RSAqL1xyXG4gICAgdXBkYXRlX09yZGVyID0gXCJ1cGRhdGVfT3JkZXJcIixcclxuXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MkEwXHU5MDFGICovXHJcbiAgICBsYW5kX3NwZWVkX3VwID0gXCJsYW5kX3NwZWVkX3VwXCIsXHJcblxyXG4gICAgLyoqIFx1OEZEQlx1NTE2NVx1NkUzOFx1NjIwRiAqL1xyXG4gICAgbG9naW5fZ2FtZSA9IFwibG9naW5fZ2FtZVwiLFxyXG4gICAgLyoqIFx1OTAwMFx1NTFGQVx1NkUzOFx1NjIwRiAqL1xyXG4gICAgbG9naW5fb3V0ID0gXCJsb2dpbl9vdXRcIixcclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTRFRkJcdTUyQTEgKi9cclxuICAgIHVwZGF0ZV90YXNrID0gXCJ1cGRhdGVfdGFza1wiLFxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NjVCMFx1NjI0Qlx1NEVGQlx1NTJBMVx1NjI0QiAqL1xyXG4gICAgdXBkYXRlX2d1aWRfaGFuZCA9IFwidXBkYXRlX2d1aWRfaGFuZFwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHU1MkE4XHU3NTNCXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgIHtcclxuICAgICAgICAvL1x1OTcwMFx1ODk4MVx1OThERVx1OTFEMVx1NUUwMVx1NzY4NFx1NTNDMlx1ODAwM1x1ODI4Mlx1NzBCOVxyXG4gICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgLy9cdTg5ODFcdTk4REVcdTc2ODRcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1RTI2aWNvblx1NzY4NFx1NjU3MFx1NjM2RVxyXG4gICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksXHJcbiAgICAgICAgICAgICAgICAvL1x1NjU3MFx1OTFDRlxyXG4gICAgICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgLy9cdTg5ODFcdTk4REVcdTUzQkJcdTc2ODRcdTRGNERcdTdGNkUgMSBcdTkxRDFcdTVFMDEgMiBcdTk0QkJcdTc3RjNcclxuICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfVxyXG4gICAgICovXHJcbiAgICBwbGF5X2dldF9yZXdhcmQgPSBcInBsYXlfZ2V0X3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1NzcwQlx1NUU3Rlx1NTQ0QVx1NjRBRFx1NjUzRVx1NTk1Nlx1NTJCMVx1ODNCN1x1ODNCN1x1NUY5N1x1NTJBOFx1NzUzQiAgXHU0RjIwXHU1MTY1XHU4MjgyXHU3MEI5ICovXHJcbiAgICBwbGF5X2FkX2dldF9yZXdhcmQgPSBcInBsYXlfYWRfZ2V0X3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1NTNCQlx1NTk3RFx1NTNDQlx1NUJCNiAqL1xyXG4gICAgZ29fZnJpZW5kX2hvbWUgPSBcImdvX2ZyaWVuZF9ob21lXCIsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTRFMEVhcHBcdTRFQTRcdTRFOTJcdTRFOEJcdTRFRjZcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFwcEV2ZW50TWFwIHtcclxuICAgIC8qKiBcdTc3MEJcdTVFN0ZcdTU0NEEgKi9cclxuICAgIGFkID0gXCJhZFwiLFxyXG4gICAgLyoqIFx1NTE3M1x1OTVFRFx1NUI4OVx1NTM1M1x1NTQyRlx1NTJBOFx1OTA2RVx1N0Y2OSAqL1xyXG4gICAgY2xvc2VJbWFnZSA9IFwiY2xvc2VJbWFnZVwiLFxyXG4gICAgLyoqIFx1NUZBRVx1NEZFMVx1NzY3Qlx1NUY1NSAqL1xyXG4gICAgd3hMb2dpbiA9IFwid3hMb2dpblwiLFxyXG4gICAgLyoqIFx1NUZBRVx1NEZFMVx1NzY3Qlx1NUY1NVx1NjIxMFx1NTI5RiAqL1xyXG4gICAgd3hMb2dpblN1Y2Nlc3MgPSBcInd4TG9naW5TdWNjZXNzXCIsXHJcbiAgICAvKiogXHU1RkFFXHU0RkUxXHU1MjA2XHU0RUFCICovXHJcbiAgICB3eFNoYXJlID0gXCJ3eFNoYXJlXCIsXHJcbiAgICAvKiogXHU1M0NCXHU3NkRGXHU0RThCXHU0RUY2XHU3RURGXHU4QkExIFx1NjU3MFx1NjM2RVx1NjgzQ1x1NUYwRiB7dHlwZTpcdTVCRjlcdTVFOTRcdTg5ODFcdTdFREZcdThCQTFcdTc2ODRcdTcwQjl9ICovXHJcbiAgICBldmVudENvdW50ID0gXCJldmVudENvdW50XCIsXHJcbiAgICAvKiogXHU5NjkwXHU3OUMxXHU2NTNGXHU3QjU2ICovXHJcbiAgICBwcml2YWN5QWdyZWVtZW50ID0gXCJwcml2YWN5QWdyZWVtZW50XCIsXHJcbiAgICAvKiogXHU2NzBEXHU1MkExXHU1MzRGXHU4QkFFICovXHJcbiAgICBzZXJ2aWNlQWdyZWVtZW50ID0gXCJzZXJ2aWNlQWdyZWVtZW50XCIsXHJcbiAgICAvKiogXHU2Q0U4XHU1MThDXHU2MjEwXHU1MjlGICovXHJcbiAgICByZWdpc3RlclN1Y2Nlc3MgPSBcInJlZ2lzdGVyU3VjY2Vzc1wiLFxyXG4gICAgLyoqIFx1NzY3Qlx1NUY1NVx1NjIxMFx1NTI5RiAqL1xyXG4gICAgbG9naW5TdWNjZXNzID0gXCJMb2dpblN1Y2Nlc3NcIixcclxufVxyXG4iLCAiLy9cdTRFRTNcdTc4MDFcdTc1MUZcdTYyMTBcdUZGMENcdTRFMERcdTg5ODFcdTYyNEJcdTUyQThcdTRGRUVcdTY1MzlcblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBlbnVtIHZpZXdzIFxuICAgIHtcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9BYm91dFZpZXcuc2NlbmUgKi9cbiAgICAgICAgQWJvdXRWaWV3ID0gXCJzY2VuZXMvdmlld3MvQWJvdXRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lICovXG4gICAgICAgIEFkZExhbmRWaWV3ID0gXCJzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvQnV5Vml0YWxpdHlWaWV3LnNjZW5lICovXG4gICAgICAgIEJ1eVZpdGFsaXR5VmlldyA9IFwic2NlbmVzL3ZpZXdzL0J1eVZpdGFsaXR5Vmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lICovXG4gICAgICAgIEZpZWxkTGV2ZWxVcFZpZXcgPSBcInNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZyaWVuZHNEZXNjVmlldy5zY2VuZSAqL1xuICAgICAgICBGcmllbmRzRGVzY1ZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzRGVzY1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRnJpZW5kc1Jld2FyZFZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc1Jld2FyZFZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GcmllbmRzVmlldy5zY2VuZSAqL1xuICAgICAgICBGcmllbmRzVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lICovXG4gICAgICAgIEhpbnRWaWV3ID0gXCJzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTG9naW5WaWV3LnNjZW5lICovXG4gICAgICAgIExvZ2luVmlldyA9IFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWlsRGVzY1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpbERlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpbERlc2NWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lICovXG4gICAgICAgIE1haWxWaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpblZpZXcgPSBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmUgKi9cbiAgICAgICAgT3JkZXJWaWV3ID0gXCJzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL092ZXJWaWV3LnNjZW5lICovXG4gICAgICAgIE92ZXJWaWV3ID0gXCJzY2VuZXMvdmlld3MvT3ZlclZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2V0dGluZ1ZpZXcgPSBcInNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZSAqL1xuICAgICAgICBTaG9wVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2lnbkluVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU3BlZWRVcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgU3BlZWRVcFZpZXcgPSBcInNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZSAqL1xuICAgICAgICBUYXNrVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1dhcmVob3VzZVZpZXcuc2NlbmUgKi9cbiAgICAgICAgV2FyZWhvdXNlVmlldyA9IFwic2NlbmVzL3ZpZXdzL1dhcmVob3VzZVZpZXcuc2NlbmVcIiwgXG4gICAgfVxuXG4gZXhwb3J0IGVudW0gYXVkaW9zIFxuICAgIHtcbiAgICAgICAgLyoqIGF1ZGlvL3pob25nemhpLm1wMyAqL1xuICAgICAgICB6aG9uZ3poaSA9IFwicmVzL2F1ZGlvL3pob25nemhpLm1wM1wiLCBcbiAgICAgICAgLyoqIGF1ZGlvL3R1ZGlzaGVuZ2ppLm1wMyAqL1xuICAgICAgICB0dWRpc2hlbmdqaSA9IFwicmVzL2F1ZGlvL3R1ZGlzaGVuZ2ppLm1wM1wiLCBcbiAgICAgICAgLyoqIGF1ZGlvL3Nob3VjYWkubXAzICovXG4gICAgICAgIHNob3VjYWkgPSBcInJlcy9hdWRpby9zaG91Y2FpLm1wM1wiLCBcbiAgICAgICAgLyoqIGF1ZGlvL2dvdWppYW9zaGVuZy5tcDMgKi9cbiAgICAgICAgZ291amlhb3NoZW5nID0gXCJyZXMvYXVkaW8vZ291amlhb3NoZW5nLm1wM1wiLCBcbiAgICAgICAgLyoqIGF1ZGlvL2Rha2FpY2FuZ2t1Lm1wMyAqL1xuICAgICAgICBkYWthaWNhbmdrdSA9IFwicmVzL2F1ZGlvL2Rha2FpY2FuZ2t1Lm1wM1wiLCBcbiAgICAgICAgLyoqIGF1ZGlvL2J1dHRvbl9jbGljay5tcDMgKi9cbiAgICAgICAgYnV0dG9uX2NsaWNrID0gXCJyZXMvYXVkaW8vYnV0dG9uX2NsaWNrLm1wM1wiLCBcbiAgICAgICAgLyoqIGF1ZGlvL0JHTS5tcDMgKi9cbiAgICAgICAgQkdNID0gXCJyZXMvYXVkaW8vQkdNLm1wM1wiLCBcbiAgICB9XG5cbi8qKlxuICogXHU3NTRDXHU5NzYyXHU1MjE3XHU4ODY4XG4gKi9cbiBleHBvcnQgY29uc3Qgc2NlbmVzID0gW1xuICAgICAgICAgXCJzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NwZWVkVXBWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TaWduSW5WaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL092ZXJWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpbERlc2NWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9Mb2dpblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GcmllbmRzVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRnJpZW5kc1Jld2FyZFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNEZXNjVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvQnV5Vml0YWxpdHlWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvQWJvdXRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvTWFpbEl0ZW0ucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvR2V0UmV3YXJkLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0Zsb2F0UmV3YXJkSWNvbi5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9GaWVsZFByZWZhYi5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL2NvbXBvbmVudHMvQnV0dG9uLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvYW5pL2xhbmRVcC5hbmlcIixcbiAgICAgICAgICAgIFwicmVzL2xvYWRpbmdCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ193b29kdGl0bGUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmVIb3VzZUJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlYmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc2hlbGYucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfcG9wVXBCZ01haW4ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfcG9wVXBCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19sYW5kQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvdXNldG9wLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbmdiYW9iYW4ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzMucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzIucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfZmFybWxhbmRMb2dvLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlNS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTUuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmU0LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUzLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMy5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTIuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUxLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL3NoYWRlci92cy52c1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3BzLmZzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby96aG9uZ3poaS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3R1ZGlzaGVuZ2ppLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vc2hvdWNhaS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2dvdWppYW9zaGVuZy5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2Rha2FpY2FuZ2t1Lm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vYnV0dG9uX2NsaWNrLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vQkdNLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BsYW50X2ljb24uYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BldF9mZWVkLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9tYWluX3NjZW5lLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9sb2FkLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbG9hZC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUuYXRsYXNcIl07XG4gICAgXG5cbi8qKlxuICogXHU2MjQwXHU2NzA5XHU4RDQ0XHU2RTkwXG4gKi9cbmNvbnN0IFJlcyA9IHtcbiAgICB2aWV3czogdmlld3MsXG4gICAgc2NlbmVzOiBzY2VuZXMsXG4gICAgYXVkaW9zOiBhdWRpb3MsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXM7XG4iLCAiLyoqXHJcbiAqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNlxyXG4gKi9cclxuY29uc3QgRXZlbnRHbG9iYWwgPSBuZXcgTGF5YS5FdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbi8qKlxyXG4gKiBcdTUwQThcdTVCNThcdTc2ODRcdTk3MDBcdTg5ODFcdTdFRDFcdTVCOUFcdThCQTJcdTk2MDVcdTRFOEJcdTRFRjZcdTc2ODRcdTdDN0JcdTc2ODRcdTUzOUZcdTU3OEJcdTUyMTdcdTg4NjhcclxuICovXHJcbmV4cG9ydCBjb25zdCBFdmVudENsYXNzOiBNYXA8YW55LCB7IGtleTogc3RyaW5nOyBmbjogRnVuY3Rpb24gfVtdPiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QSA9PiBcdTdFRDFcdTVCOUFcdTUyMzBcdTg4QzVcdTk5NzBcdTU2NjhcdTRFMEEgXHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRXZlbnRPbihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG4gICAgICAgIGlmICghRXZlbnRDbGFzcy5nZXQodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBFdmVudENsYXNzLnNldCh0YXJnZXQsIFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRXZlbnRDbGFzcy5nZXQodGFyZ2V0KS5wdXNoKHsga2V5OiBuYW1lLCBmbjogZGVzY3JpcHRvci52YWx1ZSB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTUwQThcdTVCNThcdTc2ODRcdTk3MDBcdTg5ODFcdTdFRDFcdTVCOUFcdTVDNUVcdTYwMjdcdTY3RTVcdTYyN0VcdTdFRDFcdTVCOUFcdTU0MERcdTc5RjBcdTc2ODRcdTdDN0JcdTUyMTdcdTg4NjhcclxuICovXHJcbmV4cG9ydCBjb25zdCBCaW5kTmFtZUNsYXNzOiBNYXA8YW55LCBzdHJpbmdbXT4gPSBuZXcgTWFwKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBGaW5kQnlOYW1lKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XHJcbiAgICAvLyAgKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcclxuXHJcbiAgICBpZiAoIUJpbmROYW1lQ2xhc3MuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICBCaW5kTmFtZUNsYXNzLnNldCh0YXJnZXQsIFtdKTtcclxuICAgIH1cclxuICAgIEJpbmROYW1lQ2xhc3MuZ2V0KHRhcmdldCkucHVzaChwcm9wZXJ0eUtleSk7XHJcbiAgICAvLyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudEdsb2JhbDtcclxuIiwgImNvbnN0IGNhbGxlcnM6IE1hcDxhbnksIEZ1bmN0aW9uW10+ID0gbmV3IE1hcCgpO1xyXG5cclxuY2xhc3MgT2JzZXJ2YWJsZUNvbnRyb2w8Y2FsbCBleHRlbmRzIExheWEuU2NyaXB0PiB7XHJcbiAgICBwcml2YXRlIGtleUV2ZW50czogTWFwPGFueSwgTWFwPHN0cmluZywgRnVuY3Rpb25bXT4+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NkQxXHU1NDJDXHU1QzVFXHU2MDI3XHU1MDNDXHU1M0Q4XHU1MzE2XHJcbiAgICAgKiAgW1x1NTcyOFx1NzU0Q1x1OTc2MmRlc3Ryb3lcdTc2ODRcdTY1RjZcdTUwMTlcdTRGMUFcdTgxRUFcdTVERjFcdTZDRThcdTk1MDBcdTc2RDFcdTU0MkNdXHJcbiAgICAgKiBAcGFyYW0gT2JqIFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICB3YXRjaDxUIGV4dGVuZHMge30+KE9iajogVCwgY2FsbGVyOiBjYWxsKSB7XHJcbiAgICAgICAgaWYgKCFjYWxsZXJzLmhhcyhjYWxsZXIpKSB7XHJcbiAgICAgICAgICAgIGNhbGxlcnMuc2V0KGNhbGxlciwgW10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGtleUV2ZW50ID0gdGhpcy5rZXlFdmVudHM7XHJcbiAgICAgICAgaWYgKCFrZXlFdmVudC5oYXMoT2JqKSkge1xyXG4gICAgICAgICAgICBrZXlFdmVudC5zZXQoT2JqLCBuZXcgTWFwKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2XHU3Njg0XHU1QzVFXHU2MDI3XHU0RThCXHU0RUY2XHJcbiAgICAgICAgICogQHBhcmFtIGtleSBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTc2ODRcdTVDNUVcdTYwMjdcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbCBcdTU2REVcdThDMDNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBrZXlCaW5kID0gPEtleSBleHRlbmRzIGtleW9mIFQ+KGtleTogS2V5ICYgc3RyaW5nLCBjYWxsOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgX29iaiA9IGtleUV2ZW50LmdldChPYmopO1xyXG4gICAgICAgICAgICBpZiAoIV9vYmouaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIF9vYmouc2V0KGtleSwgW10pO1xyXG4gICAgICAgICAgICAgICAgaWYgKE9ialtcIiNcIiArIGtleV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqW1wiI1wiICsga2V5XSA9IE9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmosIGtleSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tcIiNcIiArIGtleV0gPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX29iai5nZXQoa2V5KS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW1wiI1wiICsga2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYWxsLmJpbmQoY2FsbCk7XHJcbiAgICAgICAgICAgIF9vYmouZ2V0KGtleSkucHVzaChjYWxsKTtcclxuICAgICAgICAgICAgY2FsbGVycy5nZXQoY2FsbGVyKS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsKE9ialtrZXldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsga2V5OiBrZXlCaW5kIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsga2V5OiBrZXlCaW5kIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkwMUFcdThGQzdcdTRGMjBcdTUxNjVcdTc2ODRjYWxsZXJcdTUyMjBcdTk2NjRcdTVGNTNcdTUyNERcdTdFRDFcdTVCOUFcdTc2ODRcdTYyNDBcdTY3MDlcdTc2ODRcdTRFOEJcdTRFRjYgXHU2MjE2XHU2MzA3XHU1QjlBXHU4OUUzXHU1MUIzXHU2QTIxXHU0RTJBXHU1QkY5XHU4QzYxXHU4RERGXHU1RjUzXHU1MjREY2FsbGVyXHU3RUQxXHU1QjlBXHU3Njg0XHU3NkQxXHU1NDJDXHJcbiAgICAgKiBAcGFyYW0gY2FsbGVyIFx1NzZEMVx1NTQyQ1x1NjVGNlx1N0VEMVx1NUI5QVx1NzY4NFx1NTczQVx1NjY2Rlx1NUJGOVx1OEM2MVxyXG4gICAgICogQHBhcmFtIG9iaiBcdTc2RDFcdTU0MkNcdTc2ODRcdTVCRjlcdThDNjFcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQnlDYWxsZXIoY2FsbGVyOiBjYWxsLCBvYmo6IGFueSA9IG51bGwpIHtcclxuICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpPy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYmopIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RXZlbnRzPy5nZXQob2JqKS5mb3JFYWNoKChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZiA+IC0xKSBldi5zcGxpY2UoaW5kZXhPZiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RXZlbnRzPy5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgay5mb3JFYWNoKChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhPZiA9IGV2LmluZGV4T2YoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTVCRjlcdThDNjFcdTVDNUVcdTYwMjdcdTdFRDFcdTVCOUFcdTUzRUZcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBPYnNlcnZhYmxlQ29udHJvbCgpO1xyXG4iLCAiaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEJpbmROYW1lQ2xhc3MsIEV2ZW50Q2xhc3MgfSBmcm9tIFwiLi9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1N0VDNFx1NEVGNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmlwdCBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy9FdmVudE9uXHU4OEM1XHU5OTcwXHU1NjY4XHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBXHJcbiAgICAgICAgbGV0IGJpbmRFdmVudCA9IEV2ZW50Q2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKTtcclxuICAgICAgICBiaW5kRXZlbnQ/LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgRXZlbnRHbG9iYWwub24oZC5rZXksIHRoaXMsIGQuZm4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkQXdha2VcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uQXdha2UoKSB7XHJcbiAgICAgICAgLy9cdTdFRDlcdTg4QzVcdTk5NzBcdTU2NjhcdThCQjBcdTVGNTVcdTc2ODRcdTVDNUVcdTYwMjdcdUZGMENcdTY3RTVcdTYyN0VcdTgyODJcdTcwQjlcclxuICAgICAgICBCaW5kTmFtZUNsYXNzLmdldCh0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpc1tlXSA9IHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbkhkQXdha2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NzU0Q1x1OTc2Mlx1NEYyMFx1NTE2NVx1NTNDMlx1NjU3MFxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKiBAcGFyYW0gZVxyXG4gICAgICovXHJcbiAgICBvbk9wZW5lZChlKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU2RkMwXHU2RDNCXHU1NDBFXHU2MjY3XHU4ODRDXHVGRjBDXHU2QjY0XHU2NUY2XHU2MjQwXHU2NzA5XHU4MjgyXHU3MEI5XHU1NDhDXHU3RUM0XHU0RUY2XHU1NzQ3XHU1REYyXHU1MjFCXHU1RUZBXHU1QjhDXHU2QkQ1XHVGRjBDXHU2QjIxXHU2NUI5XHU2Q0Q1XHU1M0VBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZEF3YWtlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZEVuYWJsZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkRW5hYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTU0MkZcdTc1MjhcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTgyODJcdTcwQjlcdTg4QUJcdTZERkJcdTUyQTBcdTUyMzBcdTgyMUVcdTUzRjBcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRW5hYmxlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFN0YXJ0XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25IZFN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1N0IyQ1x1NEUwMFx1NkIyMVx1NjI2N1x1ODg0Q3VwZGF0ZVx1NEU0Qlx1NTI0RFx1NjI2N1x1ODg0Q1x1RkYwQ1x1NTNFQVx1NEYxQVx1NjI2N1x1ODg0Q1x1NEUwMFx1NkIyMVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRTdGFydCgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRVcGRhdGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMub25IZFVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QkNGXHU1RTI3XHU2NkY0XHU2NUIwXHU2NUY2XHU2MjY3XHU4ODRDXHVGRjBDXHU1QzNEXHU5MUNGXHU0RTBEXHU4OTgxXHU1NzI4XHU4RkQ5XHU5MUNDXHU1MTk5XHU1OTI3XHU1RkFBXHU3M0FGXHU5MDNCXHU4RjkxXHU2MjE2XHU4MDA1XHU0RjdGXHU3NTI4Z2V0Q29tcG9uZW50XHU2NUI5XHU2Q0Q1XHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFVwZGF0ZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREaXNhYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkRGlzYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU3OTgxXHU3NTI4XHU2NUY2XHU2MjY3XHU4ODRDXHVGRjBDXHU2QkQ0XHU1OTgyXHU0RUNFXHU4MjgyXHU3MEI5XHU0RUNFXHU4MjFFXHU1M0YwXHU3OUZCXHU5NjY0XHU1NDBFXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZERpc2FibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRGVzdHJveVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9mZkFsbENhbGxlcih0aGlzKTtcclxuICAgICAgICB0aGlzLm9uSGREZXN0cm95KCk7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDEsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTZFMDVcdTk2NjRcdThEREZcdTVGNTNcdTUyNERcdTdDN0JcdTdFRDFcdTVCOUFcdTYyNDBcdTY3MDlcdTc2ODRcdTVDNUVcdTYwMjdcdTg5QzJcdTVCREZcdTY1QjlcdTZDRDVcclxuICAgICAgICAgICAgT2JzZXJ2YWJsZVByb3BlcnR5LnJlbW92ZUJ5Q2FsbGVyKHRoaXMpO1xyXG4gICAgICAgICAgICAvL1x1OTUwMFx1NkJDMVx1NjVGNlx1NkUwNVx1OTY2NFx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1NUYxNVx1NzUyOFxyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGtleXMubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleXNbeF1dID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjRCXHU1MkE4XHU4QzAzXHU3NTI4XHU4MjgyXHU3MEI5XHU5NTAwXHU2QkMxXHU2NUY2XHU2MjY3XHU4ODRDXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZERlc3Ryb3koKSB7fVxyXG5cclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICogXHU3NTRDXHU5NzYyXHU2MjUzXHU1RjAwXHU0RUU1XHU1NDBFXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAgICAvLyAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgIC8vICAqL1xyXG4gICAgLy8gb25PcGVuZWQoZCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKDExMSk7XHJcbiAgICAvLyB9XHJcbn1cclxuIiwgImltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcblxyXG4vL2NsYXNzIFZpZXdTaG93QW5pIGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpiZywgdGlwczpcIlx1ODBDQ1x1NjY2RlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBiZzogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29udGVudCwgdGlwczpcIlx1NTE4NVx1NUJCOVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBjb250ZW50OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6YW5pVHlwZSx0aXBzOlwiXHU1MkE4XHU3NTNCXHU3QzdCXHU1NzhCXCIsdHlwZTpFZGl0T3B0aW9uLG9wdGlvbjpcImJvdHRvbVRvU2hvdyxzY2FsZVNob3dcIn0qL1xyXG4gICAgLy8gXHU4RkQ0XHU1NkRFXHU1QjU3XHU3QjI2XHU0RTMyXHJcbiAgICBhbmlUeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSB0d2Vlbkxpc3Q6IExheWEuVHdlZW5bXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvT3BlbigpIHt9XHJcbiAgICAvKipcclxuICAgICAqICBcdTUxNzNcdTk1RURcdTYyMTBcdTUyOUZcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9DbG9zZSgpIHt9XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMub3duZXIgYXMgTGF5YS5WaWV3O1xyXG5cclxuICAgICAgICB0aGlzLmJnLmFscGhhID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIHRoaXMuYmcsXHJcbiAgICAgICAgICAgICAgICB7IGFscGhhOiAwLjc1IH0sXHJcbiAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5hbmlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzY2FsZVNob3dcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5zY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi5mcm9tKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgeDogTGF5YS5zdGFnZS53aWR0aCAvIDIsIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMiwgc2NhbGVYOiAwLCBzY2FsZVk6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuYm90dG9tID0gLXRoaXMuY29udGVudC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBib3R0b206IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuY2lyY091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVmlldygpIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmcsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBhbHBoYTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hbmlUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2NhbGVTaG93XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVYOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVZOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGJvdHRvbTogLXRoaXMuY29udGVudC5oZWlnaHQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5IYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4uY2xlYXIoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG4iLCAiLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuY29uc3QgaW5zdGFuY2VMaXN0OiBNYXA8bnVtYmVyLCB7IG5ldyAoKTogdm9pZCB9PiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBcdTVCOUVcdTRGOEJcdTc2ODRpZFxyXG4gKi9cclxubGV0IGluc3RhbmNlSWQ6IG51bWJlciA9IDEwMDtcclxuXHJcbi8qKlxyXG4gKiBcdTUzNTVcdTRGOEJcdTg4QzVcdTk5NzBcdTU2NjhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnN0YW5jZSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghaW5zdGFuY2VMaXN0Lmhhcyh0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSkpIHtcclxuICAgICAgICBpbnN0YW5jZUlkKys7XHJcbiAgICAgICAgdGFyZ2V0W1wiI2luc3RhbmNlSWRcIl0gPSBpbnN0YW5jZUlkO1xyXG4gICAgICAgIGluc3RhbmNlTGlzdC5zZXQoaW5zdGFuY2VJZCwgbmV3IHRhcmdldCgpKTtcclxuICAgIH1cclxuICAgIHRhcmdldFtrZXldID0gaW5zdGFuY2VMaXN0LmdldChpbnN0YW5jZUlkKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCJzcmMvY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCB7IEhpbnRWaWV3RGF0YSB9IGZyb20gXCJzcmMvdmlldy9IaW50Vmlld1wiO1xyXG5pbXBvcnQgT3ZlclZpZXcgZnJvbSBcInNyYy92aWV3L092ZXJWaWV3XCI7XHJcbmltcG9ydCBSZXMsIHsgdmlld3MgfSBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVmlld1Nob3dBbmkgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NjI1M1x1NUYwMFx1NzU0Q1x1OTc2Mlx1OTcwMFx1ODk4MVx1NUUyNlx1NTE2NVx1NzY4NFx1NTNDMlx1NjU3MFxyXG4gKi9cclxuaW50ZXJmYWNlIFZpZXdPcGVuUGFybSB7XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2MiAqL1xyXG4gICAgc2hvd0xvYWQ/OiBib29sZWFuO1xyXG4gICAgLyoqIFx1NjYzRVx1NzkzQWxvYWRcdTc1NENcdTk3NjJcdTVFRjZcdThGREZcdTY1RjZcdTk1RjQgKi9cclxuICAgIHNob3dMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU5NjkwXHU4NUNGbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCBcdTlFRDhcdThCQTQwICovXHJcbiAgICBoaWRlTG9hZERlbGF5PzogbnVtYmVyO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1NTE3M1x1OTVFRFx1NTE3Nlx1NEVENlx1NTczQVx1NjY2Rlx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQXRydWVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDlcdUZGMENcdTMwMTBcdTZDRThcdTYxMEZcdTMwMTFcdTg4QUJcdTUxNzNcdTk1RURcdTc2ODRcdTU3M0FcdTY2NkZcdUZGMENcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdThCQkVcdTdGNkVhdXRvRGVzdHJveUF0UmVtb3ZlZD10cnVlXHVGRjBDXHU1MjE5XHU4RDQ0XHU2RTkwXHU1M0VGXHU4MEZEXHU0RTBEXHU4MEZEXHU4OEFCXHU1NkRFXHU2NTM2XHVGRjBDXHU5NzAwXHU4OTgxXHU4MUVBXHU1REYxXHU2MjRCXHU1MkE4XHU1NkRFXHU2NTM2XHJcbiAgICAgKiB0b2RvIFx1NzNCMFx1NTcyOFx1OEZEOVx1NEUyQVx1OEMwM1x1NzUyOFx1NzY4NFx1NjYyRlx1NUYxNVx1NjRDRVx1ODFFQVx1NUUyNlx1NzY4NFx1NjVCOVx1NkNENVx1RkYwQ1x1NkNBMVx1NjcwOVx1OEQ3MFx1OEZEOVx1OTFDQ1x1NzY4NFx1N0YxM1x1NUI1OFx1RkYwQ1x1NTNFRlx1ODBGRFx1NEYxQVx1NjcwOVx1OTVFRVx1OTg5OFx1RkYwQ1x1NTQwRVx1NjcxRlx1NEYxOFx1NTMxNlxyXG4gICAgICogXHU3M0IwXHU1NzI4XHU1MTY4XHU2NjJGZmFsc2UgXHU1NDBFXHU2NzFGXHU2NzA5XHU5NzAwXHU4OTgxXHU1MThEXHU0RjE4XHU1MzE2XHU4RkQ5XHU0RTJBXHU0RTFDXHU4OTdGXHVGRjBDXHU0RTBEXHU4MEZEXHU1MTczXHU5NUVEXHU1MTc2XHU1QjgzXHU2MjQwXHU2NzA5XHU3NTRDXHU5NzYyXHU4RkQ4XHU2NzJBXHU1QjlFXHU3M0IwXHJcbiAgICAgKi9cclxuICAgIGNsb3NlT3RoZXI/OiBib29sZWFuO1xyXG4gICAgLyoqIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBwYXJtPzogYW55O1xyXG4gICAgLyoqICBcdTYyNTNcdTVGMDBcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdUZGMENcdTRGMUFcdTRGMjBcdTkwMTJcdTdFRDlvbk9wZW5lZFx1NjVCOVx1NkNENVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgY29tcGxldGU/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTUyQTBcdThGN0RcdThGREJcdTVFQTZcdTU2REVcdThDMDNcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHByb2dyZXNzPzogSGFuZGxlcjtcclxufVxyXG5cclxuY29uc3Qgdmlld01hcHM6IHsgdXJsOiBzdHJpbmc7IHZpZXc6IExheWEuVmlldyB9W10gPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBcdTc1NENcdTk3NjJcdTdCQTFcdTc0MDZcdTU2NjhcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWaWV3TWFuYWdlciB7XHJcbiAgICBASW5zdGFuY2VcclxuICAgIHN0YXRpYyBpbnN0OiBWaWV3TWFuYWdlcjtcclxuXHJcbiAgICBsb2dpbk91dCgpIHtcclxuICAgICAgICB2aWV3TWFwcy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgIHYudmlldy5nZXRDb21wb25lbnRzKExheWEuU2NyaXB0KS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NTZERVx1NTkzNFx1ODk4MVx1NEYxOFx1NTMxNlx1NEUwMFx1NEUwQlx1NTE3Nlx1NUI4M1x1NzU0Q1x1OTc2Mlx1NzY4NFx1NTE3M1x1OTVFRFx1RkYwQ1x1OEZEOVx1OTFDQ1x1NjYyRlx1NEUwRFx1NjYyRlx1NjcwOVx1NTQwQ1x1NjgzN1x1NzY4NFx1OTVFRVx1OTg5OFxyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbChlKTtcclxuICAgICAgICAgICAgICAgIGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codi52aWV3LnVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZpZXdNYXBzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGRhdGEgXHU1M0MyXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIG9wZW4oXHJcbiAgICAgICAgdXJsOiB2aWV3cyxcclxuICAgICAgICBkYXRhOiBWaWV3T3BlblBhcm0gPSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3RoZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkRGVsYXk6IDEwMCxcclxuICAgICAgICAgICAgaGlkZUxvYWREZWxheTogMCxcclxuICAgICAgICB9XHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJtaXNzIHBhdGghXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5zaG93TG9hZCkge1xyXG4gICAgICAgICAgICBMYXlhLlZpZXcuc2hvd0xvYWRpbmdQYWdlKG51bGwsIGRhdGEuc2hvd0xvYWREZWxheSk7XHJcbiAgICAgICAgICAgIGlmICh1cmwgIT09IFJlcy52aWV3cy5Mb2dpblZpZXcpIHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKGRhdGEuaGlkZUxvYWREZWxheSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0YS5jbG9zZU90aGVyID0gZmFsc2U7XHJcbiAgICAgICAgTGF5YS5WaWV3Lm9wZW4oXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGF0YS5jbG9zZU90aGVyLFxyXG4gICAgICAgICAgICBkYXRhLnBhcm0sXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGU6IExheWEuVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybCAhPSBSZXMudmlld3MuTG9naW5WaWV3KSB2aWV3TWFwcy5wdXNoKHsgdXJsOiB1cmwsIHZpZXc6IGUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbkxpc3QgPSBlLmdldENvbXBvbmVudHMoTGF5YS5TY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbkxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25MaXN0LmZvckVhY2goKGUpID0+IGUuZW5hYmxlZCAmJiBlLm9uT3BlbmVkICYmIGUub25PcGVuZWQoZGF0YS5wYXJtKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNvbXBsZXRlICYmIGRhdGEuY29tcGxldGUoZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICBgJWMgPT0+IG9wZW4gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzdlZDZkZjtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzIyYTZiMztmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRhdGEucHJvZ3Jlc3NcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MTczXHU5NUVEXHU4OUM2XHU1NkZFXHJcbiAgICAgKiBAcGFyYW0gdXJsIFx1NzU0Q1x1OTc2Mlx1NTczMFx1NTc0MCBSZXMudmlld3NcdTkxQ0NcdTc2ODRcclxuICAgICAqIEBwYXJhbSBhbGwgXHU1NDBDXHU0RTAwXHU0RTJBXHU3NTRDXHU5NzYyXHU4OEFCIFx1NTkxQVx1NkIyMVx1NjI1M1x1NUYwMFx1RkYwQ1x1NTE2OFx1NTIyMFx1OTY2NFx1NzUyOFx1OEZEOVx1NEUyQVxyXG4gICAgICogQHBhcmFtIGRlc3Ryb3kgXHU5NTAwXHU2QkMxICAgVE9ET1x1RkYwOFx1OUVEOFx1OEJBNFx1NEYxQVx1OTUwMFx1NkJDMVx1NjI0MFx1NjcwOVx1NUI1MFx1ODI4Mlx1NzBCOVx1RkYwQ1x1NjcyQVx1NkQ0Qlx1OEJENVx1NjYyRlx1NTQyNlx1NjcwOVx1OTVFRVx1OTg5OFx1RkYwOVxyXG4gICAgICovXHJcbiAgICBhc3luYyBjbG9zZShcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGFsbDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBhbmlDb206IHR5cGVvZiBWaWV3U2hvd0FuaSB8IHR5cGVvZiBGbG9hdFZpZXdTaG93QW5pID0gVmlld1Nob3dBbmlcclxuICAgICkge1xyXG4gICAgICAgIC8vVE9ETyBcdThGRDlcdTkxQ0NcdTczQjBcdTU3MjhcdTUxNjhcdTkwRThcdTc1MjhkZXN0cm95IFx1NUYxNVx1NjRDRXJlbW92ZVx1NTk3RFx1NTBDRlx1NjcwOVx1NzBCOVx1OTVFRVx1OTg5OFx1RkYwQ1x1NTE4RFx1OTAxQVx1OEZDN3ZpZXcub3Blblx1NEYxQVx1OTFDRFx1NjVCMFx1Njc4NFx1NUVGQVx1N0VDNFx1NEVGNlxyXG4gICAgICAgIGRlc3Ryb3kgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgdkFuaTogVmlld1Nob3dBbmk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHZpZXdNYXBzLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT09IHZpZXdNYXBzW3hdLnVybCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSB2aWV3TWFwc1t4XTtcclxuICAgICAgICAgICAgICAgIHZpZXdNYXBzLnNwbGljZSh4LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2QW5pID0gdi52aWV3LmdldENvbXBvbmVudChhbmlDb20gYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGlmICh2QW5pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdkFuaS5jbG9zZVZpZXcoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vdG9kb1x1OTcwMFx1ODk4MVx1NEYxOFx1NTMxNlx1RkYwQ1x1NzU0Q1x1OTc2Mlx1NzY4NG1hcFx1OTcwMFx1ODk4MVx1NjU3NFx1NzQwNlx1NjIxMFx1RkYwQ1x1NTE2OFx1NUM0Rlx1NTQ4Q1x1NUYzOVx1N0E5N1x1NzY4NFx1NTMzQVx1NTIyQlxyXG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PT0gUmVzLnZpZXdzLkhpbnRWaWV3KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFhbGwpIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1x1NEZERFx1OEJDMVx1NTk4Mlx1Njc5Q1x1NTczQVx1NjY2Rlx1NUI4Q1x1NTE2OFx1NkNBMVx1NjcwOVx1NzU0Q1x1OTc2Mlx1ODhBQlx1NjI1M1x1NUYwMFx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NUZDNVx1NjI1M1x1NUYwMFx1NEUzQlx1NTczQVx1NjY2RlxyXG4gICAgICAgIGlmICghdmlld01hcHMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNsb3NlTGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKCF2aWV3TWFwc1t4XS52aWV3LnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VMZW4rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlTGVuID09PSB2aWV3TWFwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKFJlcy52aWV3cy5NYWluVmlldyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh2aWV3TWFwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZVZpZXdMb2codXJsOiBzdHJpbmcsIGRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBgJWMgPD09ICR7ZGVzdHJveSA/IFwiZGVzdHJveVwiIDogXCJkaXNhYmxlXCJ9ICVjJHt1cmwubWF0Y2goL1xcdysoPz1cXC4pLylbMF19IGAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZmY3OTc5O2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2ViNGQ0Yjtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkhpbnQoZGF0YTogSGludFZpZXdEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuKFJlcy52aWV3cy5IaW50VmlldywgeyBwYXJtOiBkYXRhIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU5NjY0XHU3RjEzXHU1QjU4XHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIGNsZWFyVmlld01hcHMoKSB7XHJcbiAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG92ZXJWaWV3Q29tOiBPdmVyVmlldztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NTE3M1x1OTVFRFx1OEZDN1x1NUVBNlx1NzU0Q1x1OTc2MlxyXG4gICAgICovXHJcbiAgICBzZXRPdmVyVmlldyhvcGVuOiBib29sZWFuLCBjYWxsPzogRnVuY3Rpb24pIHtcclxuICAgICAgICBpZiAob3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLk92ZXJWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKHY6IE92ZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlclZpZXdDb20gPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LmNsb3NlKGNhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vdmVyVmlld0NvbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdmVyVmlld0NvbS5vcGVuKGNhbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICIvKipcclxuICogXHU2RTM4XHU2MjBGXHU5MTREXHU3RjZFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICAvKiogXHU5NEJCXHU3N0YzaWQgKi9cclxuICAgIGRpYW1vbmRJZDogMTAwMSxcclxuICAgIC8qKiBcdTkxRDFcdTVFMDFpZCAqL1xyXG4gICAgZ29sZElkOiAxMDAyLFxyXG4gICAgLyoqIFx1NzJEN1x1NzJEN1x1NkQ4OFx1NTMxNlx1OThERlx1NzI2OVx1OTVGNFx1OTY5NFx1NjVGNlx1OTVGNCBcdTc5RDIgKi9cclxuICAgIHBldERpZ2VzdEludGVydmFsVGltZTogNjAsXHJcbiAgICAvKiogXHU2RTM4XHU2MjBGXHU2NzJDXHU1NzMwXHU1MEE4XHU1QjU4a2V5ICovXHJcbiAgICBsb2NhbEtleTogXCJsb3ZlX0hEX2Zhcm1cIixcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTRGNTNcdTUyOUJcdTRFMEFcdTk2NTAgKi9cclxuICAgIHVzZXJWaXRhbGl0eUxpbWl0OiAxMCxcclxuICAgIC8qKiBcdTUzNEZcdThCQUVcdTU3MzBcdTU3NDAgKi9cclxuICAgIC8vIGJhc2VVcmw6IFwiLy80Ny4xMDguMTkyLjE4MTo4MDkyLyBmYXJtXCIsXHJcbiAgICBiYXNlVXJsOiBERUJVRyA/IFwiLy8xOTIuMTY4LjEwMS41MDozMDAwXCIgOiBcImh0dHA6Ly9nYW1lLmFoZDE2OC5jb206MzAwMFwiLFxyXG4gICAgLy8gYmFzZVVybDogXCJodHRwOi8vZ2FtZS5haGQxNjguY29tOjMwMDBcIixcclxuICAgIC8vIHRvZG8gXHU4RkQ5XHU5MUNDXHU3Njg0SXBcdTUzRUZcdTRFRTVcdThCQkZcdTk1RUVcdTUzRUZcdTgwRkRcdTY2MkZcdTY3MDlcdTk1RUVcdTk4OThcdTc2ODRcclxuICAgIC8vIGJhc2VVcmw6IFwiLy80Ny4xMDguMTkyLjE4MTozMDAwXCIsXHJcbiAgICAvKiogYXBpXHU4QkY3XHU2QzQyXHU3QzdCXHU1NzhCIFx1OUVEOFx1OEJBNCAqL1xyXG4gICAgQXBpVHlwZURlZmF1bHQ6IDEsXHJcbiAgICAvKiogYXBpXHU4QkY3XHU2QzQyXHU3QzdCXHU1NzhCIFx1NzcwQlx1NUU3Rlx1NTQ0QSAqL1xyXG4gICAgQXBpVHlwZUFEOiAyLFxyXG4gICAgLyoqIFx1NUU3Rlx1NTQ0QVx1Njc2MVx1NEVGNiBcdTUyQTBcdTkwMUZcdTRGN0ZcdTc1MjhcdTRFODY2XHU2QjIxICovXHJcbiAgICBBRFNwZWVkVXBUaW1lczogNixcclxuICAgIHZlcnNpb246IFwiMC4xLjFcIixcclxufTtcclxuIiwgImltcG9ydCB7IEFwcEV2ZW50TWFwIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwic3RyZWFtL2NvbnN1bWVyc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNwYXRjaERhdGEge1xyXG4gICAgdXJpOiBBcHBFdmVudE1hcDtcclxuICAgIGRhdGE6IG9iamVjdDtcclxuICAgIHRpbWVzdGFtcD86IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNwYXRjaFJldHVybkRhdGEge1xyXG4gICAgLyoqIFx1NTM0Rlx1OEJBRVx1NzJCNlx1NjAwMVx1NzgwMSAwIFx1NEUzQVx1NkI2M1x1NUUzOCBcdTUxNzZcdTVCODNcdTRFM0FcdTk1MTlcdThCRUZcdTc4MDEgKi9cclxuICAgIGNvZGU6IG51bWJlcjtcclxuICAgIC8qKiBcdTUzNEZcdThCQUV1cmkgKi9cclxuICAgIHVyaTogQXBwRXZlbnRNYXA7XHJcbiAgICAvKiogXHU4RkQ0XHU1NkRFXHU1MTc3XHU0RjUzXHU3Njg0XHU2NTcwXHU2MzZFICovXHJcbiAgICBkYXRhOiBvYmplY3Q7XHJcbiAgICAvKiogXHU2ODA3XHU4QkM2ICovXHJcbiAgICB0aW1lc3RhbXA/OiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEV2ZW50TWFwOiBNYXA8c3RyaW5nIHwgbnVtYmVyLCBGdW5jdGlvbj4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcclxuICogd2ViIGFwcCBcdTRFQTRcdTRFOTJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvcmUge1xyXG4gICAgLyoqXHU4MkY5XHU2NzlDXHU3QzdCXHU1NzhCICovXHJcbiAgICBzdGF0aWMgdHlwZUlvczogbnVtYmVyID0gMTtcclxuICAgIC8qKlx1NUI4OVx1NTM1M1x1N0M3Qlx1NTc4QiAqL1xyXG4gICAgc3RhdGljIHR5cGVBbmRyb2lkOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjY3XHU4ODRDYXBwXHU0RUE0XHU0RTkyXHU2NUI5XHU2Q0Q1XHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcdTY1QjlcdTZDRDVcdTU0MERcdTc5RjBcclxuICAgICAqIEBwYXJhbSBkYXRhIFx1NEYyMFx1NTE2NVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcnVuQXBwRnVuY3Rpb24oZGF0YT86IEFwcERlc3BhdGNoRGF0YSk6IFByb21pc2U8QXBwRGVzcGF0Y2hSZXR1cm5EYXRhPiB7XHJcbiAgICAgICAgbGV0IHdlYkFwcEZ1bmN0aW9uO1xyXG4gICAgICAgIGlmIChMYXlhLkJyb3dzZXIub25JT1MpIHtcclxuICAgICAgICAgICAgLy8gd2ViQXBwRnVuY3Rpb24gPSB0aGlzLmRldGVjdGlvbkhhc0Z1bmN0aW9uKHRoaXMudHlwZUlvcywgbmFtZSk7XHJcbiAgICAgICAgICAgIC8vIGlmICh3ZWJBcHBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gaWYgKG5hbWUgPT0gdGhpcy5jbG9zZVdlYlZpZXcpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAvL1x1NTE3M1x1OTVFRHdlYnZpZXdcdTcyNzlcdTZCOEFcdTU5MDRcdTc0MDZcclxuICAgICAgICAgICAgLy8gICAgIC8vICAgICB3aW5kb3dbXCJ3ZWJraXRcIl1bXCJtZXNzYWdlSGFuZGxlcnNcIl1bdGhpcy5sZWF2ZUNoYW5uZWxdW1wicG9zdE1lc3NhZ2VcIl0oXHJcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzOiAxIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgKTsgLy9cdTcyNzlcdTZCOEFcdTU5MDRcdTc0MDZcdTk3MDBcdTg5ODFcdTUxNDhcdTkwMDBcdTUxRkFcdTk4OTFcdTkwNTNcclxuICAgICAgICAgICAgLy8gICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gd2ViQXBwRnVuY3Rpb25bJ3Bvc3RNZXNzYWdlJ10oZGF0YSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJydW4gOlwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93W1wid2Via2l0XCJdW1wibWVzc2FnZUhhbmRsZXJzXCJdW25hbWVdW1wicG9zdE1lc3NhZ2VcIl0oZGF0YSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXVtcIm1lc3NhZ2VIYW5kbGVyc1wiXVtuYW1lXVtcInBvc3RNZXNzYWdlXCJdKFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHN0YXR1czogMSB9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KHdpbmRvd1tcIiRBcHBcIl0gJiYgd2luZG93W1wiJEFwcFwiXVtcIndlYlJlcXVlc3RcIl0pO1xyXG4gICAgICAgICAgICBpZiAod2luZG93W1wiJEFwcFwiXSAmJiB3aW5kb3dbXCIkQXBwXCJdW1wid2ViUmVxdWVzdFwiXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W1wiJEFwcFwiXVtcIndlYlJlcXVlc3RcIl0oSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZW5kID0+ICR7ZGF0YX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50aW1lc3RhbXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRNYXAuc2V0KGRhdGEudGltZXN0YW1wLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gd2ViQXBwRnVuY3Rpb24gPSB0aGlzLmRldGVjdGlvbkhhc0Z1bmN0aW9uKHRoaXMudHlwZUFuZHJvaWQsIG5hbWUpO1xyXG4gICAgICAgICAgICAvLyBpZiAod2ViQXBwRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3dbXCJ3ZWJSZXF1ZXN0XCJdW25hbWVdKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3dbXCJ3ZWJSZXF1ZXN0XCJdW25hbWVdKCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNhcHAgXHU2MjY3XHU4ODRDaDUgXHU2M0E1XHU1M0UzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsaXN0ZW5BcHBGdW5jdGlvbigpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NzZEMVx1NTQyQ1x1NjI0Qlx1NjczQVx1NTE3M1x1OTVFRFx1NEU4Qlx1NEVGNlx1NTRDRFx1NUU5NFxyXG5cclxuICAgICAgICB3aW5kb3dbXCJhcHBSZXNwb25zZVwiXSA9IChkOiBBcHBEZXNwYXRjaFJldHVybkRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkoZCkpO1xyXG4gICAgICAgICAgICAvLyBhbGVydChkPy50aW1lc3RhbXApO1xyXG4gICAgICAgICAgICBpZiAoRXZlbnRNYXAuaGFzKGQ/LnRpbWVzdGFtcCkgJiYgIWQuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRNYXAuZ2V0KGQudGltZXN0YW1wKShkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb0NvbnRyb2wge1xyXG4gICAgcGxheVNvdW5kKFxyXG4gICAgICAgIHVybDogc3RyaW5nLFxyXG4gICAgICAgIGxvb3BzPzogbnVtYmVyLFxyXG4gICAgICAgIGNvbXBsZXRlPzogSGFuZGxlcixcclxuICAgICAgICBzb3VuZENsYXNzPzogbmV3ICgpID0+IGFueSxcclxuICAgICAgICBzdGFydFRpbWU/OiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZCh1cmwsIGxvb3BzLCBjb21wbGV0ZSwgc291bmRDbGFzcywgc3RhcnRUaW1lKTtcclxuICAgIH1cclxuICAgIHBsYXlNdXNpYyh1cmw6IHN0cmluZywgbG9vcHMgPSAwLCBjb21wbGV0ZT86IEhhbmRsZXIsIHN0YXJ0VGltZT86IG51bWJlcikge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyh1cmwsIGxvb3BzLCBjb21wbGV0ZSwgc3RhcnRUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU2MjQwXHU2NzA5XHU5N0YzXHU2NTQ4XHVGRjA4XHU0RTBEXHU1MzA1XHU2MkVDXHU4MENDXHU2NjZGXHU5N0YzXHU0RTUwXHVGRjA5XHU2NjJGXHU1NDI2XHU5NzU5XHU5N0YzXHUzMDAyICovXHJcbiAgICBzZXQgc291bmRNdXRlZChzdGF0ZSkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnNvdW5kTXV0ZWQgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIGdldCBzb3VuZE11dGVkKCkge1xyXG4gICAgICAgIHJldHVybiBMYXlhLlNvdW5kTWFuYWdlci5zb3VuZE11dGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgwQ0NcdTY2NkZcdTk3RjNcdTRFNTBcdUZGMDhcdTRFMERcdTUzMDVcdTYyRUNcdTk3RjNcdTY1NDhcdUZGMDlcdTY2MkZcdTU0MjZcdTk3NTlcdTk3RjMgKi9cclxuICAgIHNldCBtdXNpY011dGVkKHN0YXRlKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIubXVzaWNNdXRlZCA9IHN0YXRlO1xyXG4gICAgfVxyXG4gICAgZ2V0IG11c2ljTXV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIExheWEuU291bmRNYW5hZ2VyLm11c2ljTXV0ZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBBdWRpb0NvbnRyb2wgZnJvbSBcIi4vQXVkaW9Db250cm9sXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uLCBGaW5kQnlOYW1lIH0gZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4vR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vVmlld01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IENvcmUgPSB7XHJcbiAgICAvKiogXHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU3RUQxXHU1QjlBXHU1M0VGXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2ICovXHJcbiAgICBvYnNlcnZhYmxlUHJvcGVydHk6IE9ic2VydmFibGVQcm9wZXJ0eSxcclxuICAgIC8qKiBcdTc1NENcdTk3NjJcdTdCQTFcdTc0MDZcdTU2NjggKi9cclxuICAgIHZpZXc6IFZpZXdNYW5hZ2VyLmluc3QsXHJcbiAgICAvKiogXHU1RjE1XHU2NENFXHU4MTFBXHU2NzJDXHU3RUM0XHU0RUY2ICovXHJcbiAgICBnYW1lU2NyaXB0OiBHYW1lU2NyaXB0LFxyXG4gICAgLyoqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OCAqL1xyXG4gICAgaW5zdGFuY2U6IEluc3RhbmNlLFxyXG4gICAgLyoqIFx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QSA9PiBcdTdFRDFcdTVCOUFcdTUyMzBcdTg4QzVcdTk5NzBcdTU2NjhcdTRFMEEgXHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG4gICAgZXZlbnRPbjogRXZlbnRPbixcclxuICAgIC8qKiB0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lXHU3Njg0XHU3NzAxXHU0RThCXHU1MTk5XHU2Q0Q1IFx1NTNFQVx1ODBGRFx1NjdFNVx1NjI3RVx1NEUwQlx1NEUwMFx1N0VBN1x1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuICAgIGZpbmRCeU5hbWU6IEZpbmRCeU5hbWUsXHJcbiAgICAvKiogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2ICovXHJcbiAgICBldmVudEdsb2JhbDogRXZlbnRHbG9iYWwsXHJcbiAgICAvKipcdTk3RjNcdTk4OTEgKi9cclxuICAgIGF1ZGlvOiBuZXcgQXVkaW9Db250cm9sKCksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3JlO1xyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZlcnNpb24sIHRpcHM6XCJcdTczQTlcdTVCQjZcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZlcnNpb246IExheWEuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMudmVyc2lvbi50ZXh0ID0gYFx1NzI0OFx1NjcyQ1x1NTNGN1x1RkYxQVYke0NvbmZpZ0dhbWUudmVyc2lvbn1gO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWJvdXRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidXNlcl9hZ3JlZW1lbnRcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU3NTI4XHU2MjM3XHU1MzRGXHU4QkFFXHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5zZXJ2aWNlQWdyZWVtZW50LCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJpdmFjeVwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTk2OTBcdTc5QzFcdTY1M0ZcdTdCNTZcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oeyB1cmk6IEFwcEV2ZW50TWFwLnByaXZhY3lBZ3JlZW1lbnQsIGRhdGE6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZWZhdWx0UmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZGVmYXVsdFJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkb3duUmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZG93blJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppc1NjYWxlLCB0aXBzOlwiXHU2NjJGXHU1NDI2XHU3RjI5XHU2NTNFXCIsdHlwZTpDaGVja30qL1xyXG4gICAgcHJpdmF0ZSBpc1NjYWxlID0gZmFsc2U7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2NhbGVWYWwsIHRpcHM6XCJcdTdGMjlcdTY1M0VcdTc2ODRcdTUwM0NcIix0eXBlOk51bWJlciwgZGVmYXVsdDowLjl9Ki9cclxuICAgIHByaXZhdGUgc2NhbGVWYWw6IG51bWJlciA9IDAuOTtcclxuXHJcbiAgICBwcml2YXRlIG9sZFNjYWxlWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVk6IG51bWJlcjtcclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyAodGhpcy5vd25lciBhcyBMYXlhLkJveCkuc2V0X2FuY2hvclgoMC41KTtcclxuICAgICAgICAvLyAodGhpcy5vd25lciBhcyBMYXlhLkJveCkuc2V0X2FuY2hvclkoMC41KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzU2NhbGUpO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5tb3VzZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2xkU2NhbGVYID0gKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLmdldF9zY2FsZVgoKTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWSA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZURvd24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZG93blJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkodGhpcy5zY2FsZVZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU91dCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuICAgIG9uTW91c2VVcCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFuaShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2NhbGUpIHJldHVybjtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICB7IHNjYWxlWDogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWCwgc2NhbGVZOiBzY2FsZSAqIHRoaXMub2xkU2NhbGVZIH0sXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTa2luKHNraW46IHN0cmluZykge1xyXG4gICAgICAgIGlmICghc2tpbikgcmV0dXJuO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuSW1hZ2UpLnNraW4gPSBza2luO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuXHJcbmNvbnN0IExvY2FsRGF0YSA9IHtcclxuICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgdG9rZW46IG51bGwsXHJcblxyXG4gICAgLyoqIHRydWUgXHU0RTNBXHU1MTczXHU5NUVEIGZhbHNlIFx1NEUzQVx1NjI1M1x1NUYwMCAqL1xyXG4gICAgc291bmQ6IGZhbHNlLFxyXG4gICAgLyoqIHRydWUgXHU0RTNBXHU1MTczXHU5NUVEIGZhbHNlIFx1NEUzQVx1NjI1M1x1NUYwMCAqL1xyXG4gICAgbXVzaWM6IGZhbHNlLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFx1NjcyQ1x1NTczMFx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NCBsb2NhbERhdGEgXHU1NzI4XHU4RkQ5XHU0RTJBXHU5MUNDXHU5NzYyXHU1QjlBXHU0RTQ5XHU1OTdEXHJcbiAqL1xyXG5jbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9jYWxEYXRhID0gTG9jYWxEYXRhO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbERhdGEgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXkpIHx8IExvY2FsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4M0I3XHU1M0Q2XHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBnZXRKU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4QkJFXHU3RjZFXHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBzZXRKU09OPGtleSBleHRlbmRzIGtleW9mIHR5cGVvZiBMb2NhbERhdGE+KGtleToga2V5LCBkYXRhOiB0eXBlb2YgTG9jYWxEYXRhW2tleV0pIHtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YVtrZXldID0gZGF0YTtcclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXksIHRoaXMubG9jYWxEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXksIHt9KTtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IHsgaXNMb2dpbjogZmFsc2UsIHRva2VuOiBudWxsLCBzb3VuZDogdHJ1ZSwgbXVzaWM6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExvY2FsU3RvcmFnZVNlcnZpY2UoKTtcclxuIiwgIi8qKiBcdTYyNDBcdTY3MDlcdTg4NjggKi9cbiAgICAgICAgZXhwb3J0IGNvbnN0IFRhYmxlID0ge1widGFza1wiOlt7XCJpZFwiOjEwMDEsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MSxcInRpdGxlXCI6XCJcdTdCN0VcdTUyMzBcdTk4ODZcdTk0QkJcdTc3RjNcIixcImRlc2NcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MVx1N0I3RVx1NTIzMFwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwMixcInJld2FyZFwiOlwiMTAwMToxMDBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU4M0RDXHU1NzMwXHU2NUJEXHU4MEE1MTBcdTZCMjFcIixcImRlc2NcIjpcIlx1ODNEQ1x1NTczMFx1NTJBMFx1OTAxRjEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDAzLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1ODNEQ1x1NTczMFx1NjUzNlx1ODNCNzEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTgzRENcdTU3MzBcdTY1MzZcdTgzQjcxMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNCxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjo1LFwidGl0bGVcIjpcIlx1OEJCRlx1NTNDQjVcdTZCMjFcIixcImRlc2NcIjpcIlx1NTA3N1x1ODNEQzVcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDUsXCJyZXdhcmRcIjpcIjEwMDE6MjBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTU1ODJcdTUxN0JcdTcyRDdcdTcyRDczXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTU1ODJcdTUxN0JcdTcyRDdcdTcyRDczXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA2LFwicmV3YXJkXCI6XCIxMDAxOjIwXCIsXCJ0aW1lc1wiOjUsXCJ0aXRsZVwiOlwiXHU4RDJEXHU0RTcwXHU5OTcyXHU2NTk5NVx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4RDJEXHU0RTcwXHU5OTcyXHU2NTk5NVx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNyxcInJld2FyZFwiOlwiMTAwMToyMFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdThEMkRcdTRFNzBcdTc5Q0RcdTVCNTAxMFx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4RDJEXHU0RTcwXHU3OUNEXHU1QjUwMTBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDgsXCJyZXdhcmRcIjpcIjEwMDI6NTAwXCIsXCJ0aW1lc1wiOjMsXCJ0aXRsZVwiOlwiXHU1MUZBXHU1NTJFXHU0RjVDXHU3MjY5M1x1NkIyMVwiLFwiZGVzY1wiOlwiXHU1MUZBXHU1NTJFXHU0RjVDXHU3MjY5M1x1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwOSxcInJld2FyZFwiOlwiMTAwMToxMDBcIixcInRpbWVzXCI6NSxcInRpdGxlXCI6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0JcIixcImRlc2NcIjpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQjVcdTRFMkFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMTAsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MSxcInRpdGxlXCI6XCJcdTUyMDZcdTRFQUJcdTVGOTdcdTU5N0RcdTc5M0NcIixcImRlc2NcIjpcIlx1NTIwNlx1NEVBQlx1NEUwMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMSxcInJld2FyZFwiOlwiMTAwMjo1MDBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTYzMDdcdTVCOUFcdTc5Q0RcdTY5MERcIixcImRlc2NcIjpcIlx1NzlDRFx1NjkwRFx1NjMwN1x1NUI5QVx1NzlDRFx1NUI1MFwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMixcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdTc3MEJcdTg5QzZcdTk4OTFcdTk4ODZcdTc5OEZcdTUyMjlcIixcImRlc2NcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MTEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH1dLFwic2lnbkluXCI6W3tcImlkXCI6MTAwMSxcImRheXNcIjo3LFwicmV3YXJkXCI6XCIxMDAxOjIwMDAwXCJ9LHtcImlkXCI6MTAwMixcImRheXNcIjoxMCxcInJld2FyZFwiOlwiMTAwMTozMDAwMFwifSx7XCJpZFwiOjEwMDMsXCJkYXlzXCI6MTUsXCJyZXdhcmRcIjpcIjEwMDE6NTAwMDBcIn0se1wiaWRcIjoxMDA0LFwiZGF5c1wiOjIwLFwicmV3YXJkXCI6XCIxMDAxOjgwMDAwXCJ9LHtcImlkXCI6MTAwNSxcImRheXNcIjozMCxcInJld2FyZFwiOlwiMTAwMToxMjAwMDBcIn0se1wiaWRcIjoxMDA2LFwiZGF5c1wiOjUwLFwicmV3YXJkXCI6XCIxMDAxOjE4MDAwMFwifSx7XCJpZFwiOjEwMDcsXCJkYXlzXCI6ODAsXCJyZXdhcmRcIjpcIjEwMDE6MzAwMDAwXCJ9LHtcImlkXCI6MTAwOCxcImRheXNcIjoxMDAsXCJyZXdhcmRcIjpcIjEwMDE6MzUwMDAwXCJ9LHtcImlkXCI6MTAwOSxcImRheXNcIjoxNTAsXCJyZXdhcmRcIjpcIjEwMDE6NTAwMDAwXCJ9XSxcInBsYW50XCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1NkMzNFx1N0EzQlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDAyX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MFwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMTgwXCIsXCJ1bmxvY2tfY29zdFwiOm51bGwsXCJ1bmxvY2tfcmV3YXJkXCI6bnVsbCxcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTU5MjdcdThDNDZcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwNF9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTBcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjE4MFwiLFwidW5sb2NrX2Nvc3RcIjpudWxsLFwidW5sb2NrX3Jld2FyZFwiOm51bGwsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDAzLFwibmFtZVwiOlwiXHU1OTI3XHU4NDlDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTJfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwXCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIyNDBcIixcInVubG9ja19jb3N0XCI6bnVsbCxcInVubG9ja19yZXdhcmRcIjpudWxsLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNCxcIm5hbWVcIjpcIlx1NTMwNVx1NUZDM1x1ODNEQ1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA2X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjc1XCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo3NVwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMzAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU1NzFGXHU4QzQ2XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDdfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NzVcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjc1XCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCIzMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDYsXCJuYW1lXCI6XCJcdTg0MURcdTUzNUNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwNV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo3NVwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NzVcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjQ4MFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNyxcIm5hbWVcIjpcIlx1NUMwRlx1OUVBNlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDAxX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjEyMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MTIwXCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCI0ODBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjE1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDgsXCJuYW1lXCI6XCJcdThGQTNcdTY5MTJcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxMF9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxMjBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjEyMFwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiNjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoyMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA5LFwibmFtZVwiOlwiXHU5RUM0XHU3NERDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTFfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MjAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjoyMDBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjcyMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MzAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMCxcIm5hbWVcIjpcIlx1ODMwNFx1NUI1MFwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDEzX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjIwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MjAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI3MjBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjM1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTEsXCJuYW1lXCI6XCJcdTgwRTFcdTg0MURcdTUzNUNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwOF9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjozNTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjM1MFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiOTAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo0NTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDEyLFwibmFtZVwiOlwiXHU1MzU3XHU3NERDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTRfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MzUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjozNTBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjkwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMyxcIm5hbWVcIjpcIlx1NzM4OVx1N0M3M1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDAzX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjVcIixcIm1hdHVyZV90aW1lXCI6XCIxMjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo1NTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDE0LFwibmFtZVwiOlwiXHU3NTE4XHU4NTE3XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTVfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MDBcIixcImhhcnZlc3RcIjpcIjN+NVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjYwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTUsXCJuYW1lXCI6XCJcdTc1NkFcdTgzMDRcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwOV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwMFwiLFwiaGFydmVzdFwiOlwiM341XCIsXCJtYXR1cmVfdGltZVwiOlwiMTIwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NjUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9XSxcInBldFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTY1RkFcdThEMjJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDFfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjEwLFwiY29zdFwiOlwiMTAwMjozMDAwXCIsXCJkZXNjXCI6XCJcdTcyMzFcdTVCODNcdTVDMzFcdTRFNzBcdTVCODN+XHU1QjgzXHU1QzMxXHU2NjJGXHU2NzA5XHU3MEI5XHU2MUQyflwiLFwic2Vuc2l0aXZlXCI6MzQsXCJhYmlsaXR5XCI6NDJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1NkM2NFx1NTcwNlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwN19kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTUsXCJjb3N0XCI6XCIxMDAyOjQwMDBcIixcImRlc2NcIjpcIlx1OTg5Q1x1NTAzQ1x1MzAwMVx1NjY3QVx1NTU0Nlx1NTNDQ1x1NTNDQ1x1NTcyOFx1N0VCRlwiLFwic2Vuc2l0aXZlXCI6NDAsXCJhYmlsaXR5XCI6NDh9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1ODA4OVx1NUU3MlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwOV9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTYsXCJjb3N0XCI6XCIxMDAyOjQ1MDBcIixcImRlc2NcIjpcIlx1NjcwMFx1NUZFMFx1OEJEQVx1NzY4NFx1NEYxOVx1NEYzNFwiLFwic2Vuc2l0aXZlXCI6NDUsXCJhYmlsaXR5XCI6NTV9LHtcImlkXCI6MTAwNCxcIm5hbWVcIjpcIlx1NEU4Q1x1NTRDOFwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwMl9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTYsXCJjb3N0XCI6XCIxMDAyOjUwMDBcIixcImRlc2NcIjpcIlx1N0VERFx1NEUwRFx1NjJDNlx1NUJCNlx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6NDgsXCJhYmlsaXR5XCI6NjB9LHtcImlkXCI6MTAwNSxcIm5hbWVcIjpcIlx1NTkyN1x1NzczQ1x1Nzc1QlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNV9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTcsXCJjb3N0XCI6XCIxMDAyOjcwMDBcIixcImRlc2NcIjpcIlx1NkQzQlx1NTk3RFx1NTQwM1x1NzY4NFx1NUMxMVwiLFwic2Vuc2l0aXZlXCI6NTAsXCJhYmlsaXR5XCI6NzV9LHtcImlkXCI6MTAwNixcIm5hbWVcIjpcIlx1NUMwRlx1NUMzRVx1NURGNFwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNF9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTgsXCJjb3N0XCI6XCIxMDAyOjc1MDBcIixcImRlc2NcIjpcIlx1NkI2Nlx1NTI5Qlx1NTkyOVx1OEQ0Qlx1NURGMlx1NzBCOVx1NkVFMX5cdTYyRkZcdTYzNEZcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjYwLFwiYWJpbGl0eVwiOjgwfSx7XCJpZFwiOjEwMDcsXCJuYW1lXCI6XCJcdTc0MDNcdTc0MDNcIixcImljb25cIjpcInBldF9mZWVkLzEwMDhfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE4LFwiY29zdFwiOlwiMTAwMjo4MDAwXCIsXCJkZXNjXCI6XCJcdTVDMzFcdTRFMjRcdTRFMkFcdTVCNTdcdUZGMENcdTU0MkNcdThCRERcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjY5LFwiYWJpbGl0eVwiOjg1fSx7XCJpZFwiOjEwMDgsXCJuYW1lXCI6XCJcdTVDMEZcdTc2N0RcIixcImljb25cIjpcInBldF9mZWVkLzEwMDNfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE4LFwiY29zdFwiOlwiMTAwMjo4MDAwXCIsXCJkZXNjXCI6XCJcdTc3MEJcdTVCQjZcdTMwMDFcdTc3MEJcdTgzRENcdTMwMDFcdTc3MEJcdTVCNjlcdTVCNTBcIixcInNlbnNpdGl2ZVwiOjc2LFwiYWJpbGl0eVwiOjg4fSx7XCJpZFwiOjEwMDksXCJuYW1lXCI6XCJcdTcwQjlcdTcwQjlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDZfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE5LFwiY29zdFwiOlwiMTAwMjoxMDAwMFwiLFwiZGVzY1wiOlwiXHU0RjYwXHU1MDNDXHU1Rjk3XHU2MkU1XHU2NzA5XHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo4NSxcImFiaWxpdHlcIjo5M30se1wiaWRcIjoxMDEwLFwibmFtZVwiOlwiXHU5NUY3XHU1OEE5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDEwX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjozMCxcImNvc3RcIjpcIjEwMDI6MTUwMDBcIixcImRlc2NcIjpcIlx1OTU3Rlx1NUY5N1x1NUMzMVx1NUY4OFx1NTFGNlx1RkYwQ1x1NjI5M1x1NUMwRlx1NTA3N1x1NjZGNFx1NTFGNlwiLFwic2Vuc2l0aXZlXCI6OTAsXCJhYmlsaXR5XCI6OTl9XSxcIm9yZGVyXCI6W3tcImlkXCI6MSxcImNvbW1pc3Npb25cIjpcIjAuNVwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjJcIn0se1wiaWRcIjoyLFwiY29tbWlzc2lvblwiOlwiMC43NlwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjEsMTAwMjoyXCJ9LHtcImlkXCI6MyxcImNvbW1pc3Npb25cIjpcIjAuMzlcIixcImNvbmRpdGlvblwiOlwiMTAwMToxLDEwMDM6MiwxMDAyOjNcIn0se1wiaWRcIjo0LFwiY29tbWlzc2lvblwiOlwiMC42MVwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjQsMTAwMzozLDEwMDQ6MywxMDAxOjRcIn0se1wiaWRcIjo1LFwiY29tbWlzc2lvblwiOlwiMC42MVwiLFwiY29uZGl0aW9uXCI6XCIxMDA0OjYsMTAwMjo1LDEwMDU6NCwxMDAxOjVcIn0se1wiaWRcIjo2LFwiY29tbWlzc2lvblwiOlwiMC40OFwiLFwiY29uZGl0aW9uXCI6XCIxMDAzOjEwLDEwMDQ6NSwxMDA1OjMsMTAwNjozXCJ9LHtcImlkXCI6NyxcImNvbW1pc3Npb25cIjpcIjAuNDNcIixcImNvbmRpdGlvblwiOlwiMTAwNzo0LDEwMDM6NSwxMDA0OjcsMTAwNjoxMFwifSx7XCJpZFwiOjgsXCJjb21taXNzaW9uXCI6XCIwLjU2XCIsXCJjb25kaXRpb25cIjpcIjEwMDg6MTMsMTAwNzozLDEwMDU6NSwxMDAyOjVcIn0se1wiaWRcIjo5LFwiY29tbWlzc2lvblwiOlwiMC4zOVwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjIsMTAwOToxMCwxMDA3OjgsMTAwMzo4XCJ9LHtcImlkXCI6MTAsXCJjb21taXNzaW9uXCI6XCIwLjIyXCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MTAsMTAxMDo1LDEwMDg6MTAsMTAwOTo2XCJ9LHtcImlkXCI6MTEsXCJjb21taXNzaW9uXCI6XCIwLjc2XCIsXCJjb25kaXRpb25cIjpcIjEwMDk6NSwxMDA0OjEwLDEwMDE6OSwxMDAyOjEwXCJ9LHtcImlkXCI6MTIsXCJjb21taXNzaW9uXCI6XCIwLjQzXCIsXCJjb25kaXRpb25cIjpcIjEwMDc6NiwxMDAzOjExLDEwMTE6NiwxMDA1OjEwXCJ9LHtcImlkXCI6MTMsXCJjb21taXNzaW9uXCI6XCIwLjE3XCIsXCJjb25kaXRpb25cIjpcIjEwMTA6NSwxMDA1OjEzLDEwMDE6OCwxMDEyOjhcIn0se1wiaWRcIjoxNCxcImNvbW1pc3Npb25cIjpcIjAuN1wiLFwiY29uZGl0aW9uXCI6XCIxMDEzOjEwLDEwMDg6OCwxMDA2OjYsMTAwMToxMFwifSx7XCJpZFwiOjE1LFwiY29tbWlzc2lvblwiOlwiMC40OFwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjEwLDEwMDU6MTAsMTAxMToxMiwxMDAxOjEwXCJ9LHtcImlkXCI6MTYsXCJjb21taXNzaW9uXCI6MC4yOSxcImNvbmRpdGlvblwiOlwiMTAwODoxMSwxMDE0OjQsMTAwNjo4LDEwMDU6MTdcIn0se1wiaWRcIjoxNyxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDA2OjE0LDEwMDc6NiwxMDE1OjEyLDEwMDE6MTRcIn0se1wiaWRcIjoxOCxcImNvbW1pc3Npb25cIjowLjQ4LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE0LDEwMTE6MTIsMTAwOToxNSwxMDAyOjVcIn0se1wiaWRcIjoxOSxcImNvbW1pc3Npb25cIjowLjc1LFwiY29uZGl0aW9uXCI6XCIxMDEzOjEwLDEwMDM6MjAsMTAxNDoxMSwxMDAxOjdcIn0se1wiaWRcIjoyMCxcImNvbW1pc3Npb25cIjowLjY3LFwiY29uZGl0aW9uXCI6XCIxMDAzOjEwLDEwMTE6MTcsMTAwMjoxNCwxMDA1OjEyXCJ9LHtcImlkXCI6MjEsXCJjb21taXNzaW9uXCI6MC42NCxcImNvbmRpdGlvblwiOlwiMTAxMDoxMCwxMDAzOjE0LDEwMDU6MTYsMTAwNzoxNVwifSx7XCJpZFwiOjIyLFwiY29tbWlzc2lvblwiOlwiMC40XCIsXCJjb25kaXRpb25cIjpcIjEwMTU6MTksMTAwNzoxMiwxMDExOjUsMTAwNDoxN1wifSx7XCJpZFwiOjIzLFwiY29tbWlzc2lvblwiOjAuMixcImNvbmRpdGlvblwiOlwiMTAwMzoxOSwxMDE0OjIsMTAxNToxNiwxMDAxOjE0XCJ9LHtcImlkXCI6MjQsXCJjb21taXNzaW9uXCI6MC43NyxcImNvbmRpdGlvblwiOlwiMTAxNDoxMywxMDAxOjE3LDEwMDg6MTgsMTAwNDo1XCJ9LHtcImlkXCI6MjUsXCJjb21taXNzaW9uXCI6XCIwLjM5XCIsXCJjb25kaXRpb25cIjpcIjEwMTI6MjMsMTAxMToxOSwxMDEwOjE1LDEwMTU6MjBcIn0se1wiaWRcIjoyNixcImNvbW1pc3Npb25cIjowLjAzLFwiY29uZGl0aW9uXCI6XCIxMDAyOjIxLDEwMTE6MTIsMTAxMjoyMiwxMDAzOjE5XCJ9LHtcImlkXCI6MjcsXCJjb21taXNzaW9uXCI6MC40OSxcImNvbmRpdGlvblwiOlwiMTAwNzoxNiwxMDE0OjE2LDEwMDY6MTAsMTAxMToxN1wifSx7XCJpZFwiOjI4LFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTcsMTAwNzoxMiwxMDExOjE3LDEwMDM6MTdcIn0se1wiaWRcIjoyOSxcImNvbW1pc3Npb25cIjowLjc3LFwiY29uZGl0aW9uXCI6XCIxMDEyOjEwLDEwMDU6MTYsMTAxMDoxNCwxMDE1OjE4XCJ9LHtcImlkXCI6MzAsXCJjb21taXNzaW9uXCI6MC4xNCxcImNvbmRpdGlvblwiOlwiMTAxMToxNywxMDE0OjE5LDEwMDY6MTQsMTAwNDozMFwifSx7XCJpZFwiOjMxLFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMDc6MTgsMTAxMDoxNCwxMDEzOjE5LDEwMDY6MTFcIn0se1wiaWRcIjozMixcImNvbW1pc3Npb25cIjowLjQ2LFwiY29uZGl0aW9uXCI6XCIxMDEzOjE5LDEwMDU6MjIsMTAxMjoxMiwxMDA4OjIwXCJ9LHtcImlkXCI6MzMsXCJjb21taXNzaW9uXCI6MC4yLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE2LDEwMTM6MTEsMTAwMjoyMywxMDA5OjE2XCJ9LHtcImlkXCI6MzQsXCJjb21taXNzaW9uXCI6MC4wMixcImNvbmRpdGlvblwiOlwiMTAwOToxOSwxMDEwOjEyLDEwMTE6MTQsMTAxMjoyMFwifSx7XCJpZFwiOjM1LFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDE6MTgsMTAwNDoxOSwxMDEzOjE2LDEwMDM6MTBcIn0se1wiaWRcIjozNixcImNvbW1pc3Npb25cIjowLjIxLFwiY29uZGl0aW9uXCI6XCIxMDAzOjExLDEwMDg6MTcsMTAxNDoxNywxMDA3OjE3XCJ9LHtcImlkXCI6MzcsXCJjb21taXNzaW9uXCI6MC40NCxcImNvbmRpdGlvblwiOlwiMTAxMjoxNCwxMDEwOjIwLDEwMDI6MTQsMTAxMToxMVwifSx7XCJpZFwiOjM4LFwiY29tbWlzc2lvblwiOjAuMjIsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTMsMTAwNDoxOSwxMDAyOjExLDEwMTU6MThcIn0se1wiaWRcIjozOSxcImNvbW1pc3Npb25cIjowLjM2LFwiY29uZGl0aW9uXCI6XCIxMDA3OjE4LDEwMTI6MTMsMTAwNDoxNiwxMDAyOjE2XCJ9LHtcImlkXCI6NDAsXCJjb21taXNzaW9uXCI6MC4yOCxcImNvbmRpdGlvblwiOlwiMTAwNDoxMCwxMDA1OjEwLDEwMDg6MTgsMTAxMToxNlwifSx7XCJpZFwiOjQxLFwiY29tbWlzc2lvblwiOjAuMTgsXCJjb25kaXRpb25cIjpcIjEwMTA6MTgsMTAwOToxOCwxMDA4OjE3LDEwMTE6MjZcIn0se1wiaWRcIjo0MixcImNvbW1pc3Npb25cIjowLjQzLFwiY29uZGl0aW9uXCI6XCIxMDA5OjExLDEwMDU6MTgsMTAwNzoyMCwxMDAyOjEzXCJ9LHtcImlkXCI6NDMsXCJjb21taXNzaW9uXCI6MC4xNCxcImNvbmRpdGlvblwiOlwiMTAwNjoxMCwxMDA0OjE0LDEwMTQ6MTEsMTAwODoxNVwifSx7XCJpZFwiOjQ0LFwiY29tbWlzc2lvblwiOjAuNjIsXCJjb25kaXRpb25cIjpcIjEwMDk6MTUsMTAwMzoxOCwxMDAyOjI0LDEwMDc6MTlcIn0se1wiaWRcIjo0NSxcImNvbW1pc3Npb25cIjowLjExLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE1LDEwMTA6MjMsMTAwNzoxMywxMDExOjEzXCJ9LHtcImlkXCI6NDYsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwMzoxMiwxMDA3OjIzLDEwMTA6MTYsMTAwMjoxNFwifSx7XCJpZFwiOjQ3LFwiY29tbWlzc2lvblwiOjAuNDksXCJjb25kaXRpb25cIjpcIjEwMTA6MTQsMTAxNToyMCwxMDAzOjE1LDEwMTQ6MTZcIn0se1wiaWRcIjo0OCxcImNvbW1pc3Npb25cIjowLjA2LFwiY29uZGl0aW9uXCI6XCIxMDEzOjE3LDEwMDc6MTQsMTAwODoxNywxMDAxOjEwXCJ9LHtcImlkXCI6NDksXCJjb21taXNzaW9uXCI6MC40OCxcImNvbmRpdGlvblwiOlwiMTAwMjoyNiwxMDA0OjExLDEwMDk6MTIsMTAwNjoyMFwifSx7XCJpZFwiOjUwLFwiY29tbWlzc2lvblwiOjAuMDUsXCJjb25kaXRpb25cIjpcIjEwMDY6MTcsMTAxMjoxOSwxMDA4OjIwLDEwMTU6MTFcIn0se1wiaWRcIjo1MSxcImNvbW1pc3Npb25cIjowLjA0LFwiY29uZGl0aW9uXCI6XCIxMDExOjE4LDEwMDQ6MTksMTAwMjoyNSwxMDAzOjExXCJ9LHtcImlkXCI6NTIsXCJjb21taXNzaW9uXCI6MC40MyxcImNvbmRpdGlvblwiOlwiMTAxNToxNSwxMDEzOjEwLDEwMDE6MTUsMTAwNDoyNlwifSx7XCJpZFwiOjUzLFwiY29tbWlzc2lvblwiOjAuMDgsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTQsMTAxMjoxMiwxMDEwOjIwLDEwMTU6MThcIn0se1wiaWRcIjo1NCxcImNvbW1pc3Npb25cIjowLjQ1LFwiY29uZGl0aW9uXCI6XCIxMDA1OjIyLDEwMDI6MTMsMTAwOToxNiwxMDE1OjE3XCJ9LHtcImlkXCI6NTUsXCJjb21taXNzaW9uXCI6XCIwLjU2XCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MjMsMTAxNDoxOSwxMDA1OjE3LDEwMTA6MTVcIn0se1wiaWRcIjo1NixcImNvbW1pc3Npb25cIjowLjA1LFwiY29uZGl0aW9uXCI6XCIxMDA2OjE3LDEwMDU6MTksMTAwOToxNywxMDAzOjE4XCJ9LHtcImlkXCI6NTcsXCJjb21taXNzaW9uXCI6MC42NyxcImNvbmRpdGlvblwiOlwiMTAwNzoyMSwxMDA4OjE3LDEwMDI6MTYsMTAwOToyNVwifSx7XCJpZFwiOjU4LFwiY29tbWlzc2lvblwiOjAuMzIsXCJjb25kaXRpb25cIjpcIjEwMDY6MTAsMTAwODoyNSwxMDA1OjI0LDEwMDc6MTlcIn0se1wiaWRcIjo1OSxcImNvbW1pc3Npb25cIjowLjc5LFwiY29uZGl0aW9uXCI6XCIxMDEyOjI1LDEwMDk6MzAsMTAxMzoxNiwxMDA4OjE1XCJ9LHtcImlkXCI6NjAsXCJjb21taXNzaW9uXCI6MC42OSxcImNvbmRpdGlvblwiOlwiMTAxNToyNiwxMDEyOjI3LDEwMTA6MzEsMTAwMToyM1wifSx7XCJpZFwiOjYxLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMTU6MTIsMTAwNjoyNSwxMDExOjE1LDEwMDI6MTdcIn0se1wiaWRcIjo2MixcImNvbW1pc3Npb25cIjowLjQ0LFwiY29uZGl0aW9uXCI6XCIxMDE1OjIxLDEwMDc6MTUsMTAxMToxOCwxMDA2OjI2XCJ9LHtcImlkXCI6NjMsXCJjb21taXNzaW9uXCI6MC4wMSxcImNvbmRpdGlvblwiOlwiMTAxMDoxOCwxMDA1OjE2LDEwMDk6MTMsMTAwMzoyN1wifSx7XCJpZFwiOjY0LFwiY29tbWlzc2lvblwiOjAuMjcsXCJjb25kaXRpb25cIjpcIjEwMDc6MTcsMTAwNjoxMCwxMDA1OjI5LDEwMDQ6MjVcIn0se1wiaWRcIjo2NSxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMDM6MzAsMTAxNDoyMCwxMDA1OjE1XCJ9LHtcImlkXCI6NjYsXCJjb21taXNzaW9uXCI6MC43MyxcImNvbmRpdGlvblwiOlwiMTAwNDoxNSwxMDA4OjI1LDEwMDI6MTQsMTAxMjoxNFwifSx7XCJpZFwiOjY3LFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDE6MTYsMTAxMjoyMCwxMDExOjIwLDEwMDM6MTBcIn0se1wiaWRcIjo2OCxcImNvbW1pc3Npb25cIjowLjY5LFwiY29uZGl0aW9uXCI6XCIxMDEzOjI0LDEwMDg6MjMsMTAwNjoxNiwxMDA3OjE3XCJ9LHtcImlkXCI6NjksXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAxNTozMCwxMDA0OjI5LDEwMTM6MTcsMTAwOToxMFwifSx7XCJpZFwiOjcwLFwiY29tbWlzc2lvblwiOjAuNzEsXCJjb25kaXRpb25cIjpcIjEwMTA6MjMsMTAwNDozMSwxMDExOjE3LDEwMTI6MTFcIn0se1wiaWRcIjo3MSxcImNvbW1pc3Npb25cIjowLjI5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjExLDEwMDI6MjYsMTAwMzoyOCwxMDE1OjEzXCJ9LHtcImlkXCI6NzIsXCJjb21taXNzaW9uXCI6MC4zMSxcImNvbmRpdGlvblwiOlwiMTAwNToyNSwxMDAyOjM4LDEwMTI6MTksMTAxMDoxNFwifSx7XCJpZFwiOjczLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMTI6MzQsMTAwNjoyMiwxMDAzOjI3LDEwMDQ6MjBcIn0se1wiaWRcIjo3NCxcImNvbW1pc3Npb25cIjowLjI2LFwiY29uZGl0aW9uXCI6XCIxMDAzOjIwLDEwMTI6MTgsMTAwMjozMCwxMDAxOjIwXCJ9LHtcImlkXCI6NzUsXCJjb21taXNzaW9uXCI6MC4xOCxcImNvbmRpdGlvblwiOlwiMTAwNjozMSwxMDE0OjMwLDEwMDg6MTIsMTAwMjoyNVwifSx7XCJpZFwiOjc2LFwiY29tbWlzc2lvblwiOjAuNTEsXCJjb25kaXRpb25cIjpcIjEwMDc6MjEsMTAxMjoyMCwxMDA0OjExLDEwMTQ6MjBcIn0se1wiaWRcIjo3NyxcImNvbW1pc3Npb25cIjowLjIxLFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMDk6MTYsMTAxMjoyNCwxMDA3OjMwXCJ9LHtcImlkXCI6NzgsXCJjb21taXNzaW9uXCI6MC43MyxcImNvbmRpdGlvblwiOlwiMTAxNToxNiwxMDEyOjE2LDEwMDY6MjAsMTAwODoxMlwifSx7XCJpZFwiOjc5LFwiY29tbWlzc2lvblwiOjAuNjUsXCJjb25kaXRpb25cIjpcIjEwMDY6MjYsMTAwNDoxOCwxMDA3OjEyLDEwMTE6MjdcIn0se1wiaWRcIjo4MCxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDA5OjE1LDEwMDM6MTYsMTAwNDoxOSwxMDA3OjI0XCJ9LHtcImlkXCI6ODEsXCJjb21taXNzaW9uXCI6MC4xNCxcImNvbmRpdGlvblwiOlwiMTAxMjoxMCwxMDE1OjI4LDEwMDI6MTQsMTAwMzozOFwifSx7XCJpZFwiOjgyLFwiY29tbWlzc2lvblwiOjAuMixcImNvbmRpdGlvblwiOlwiMTAwNToxMiwxMDExOjE5LDEwMDk6MTgsMTAwMjoxNFwifSx7XCJpZFwiOjgzLFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMTA6MTksMTAwMzozOCwxMDA3OjEyLDEwMTU6MjBcIn0se1wiaWRcIjo4NCxcImNvbW1pc3Npb25cIjowLjYyLFwiY29uZGl0aW9uXCI6XCIxMDA1OjI5LDEwMTQ6MjYsMTAwMjoxOCwxMDA3OjM4XCJ9LHtcImlkXCI6ODUsXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAxMToxMCwxMDAxOjE3LDEwMTI6MTIsMTAwNDoxMlwifSx7XCJpZFwiOjg2LFwiY29tbWlzc2lvblwiOjAuNTksXCJjb25kaXRpb25cIjpcIjEwMDk6MjUsMTAxMToyMCwxMDA2OjE0LDEwMTU6MTFcIn0se1wiaWRcIjo4NyxcImNvbW1pc3Npb25cIjowLjExLFwiY29uZGl0aW9uXCI6XCIxMDA2OjI2LDEwMDU6MTksMTAxMzoxMCwxMDE0OjI5XCJ9LHtcImlkXCI6ODgsXCJjb21taXNzaW9uXCI6MC4wOCxcImNvbmRpdGlvblwiOlwiMTAwODozNywxMDExOjI0LDEwMTU6MTIsMTAxNDoxMVwifSx7XCJpZFwiOjg5LFwiY29tbWlzc2lvblwiOjAuMDIsXCJjb25kaXRpb25cIjpcIjEwMDI6MTcsMTAwMzoyOCwxMDA1OjExLDEwMTA6MTRcIn0se1wiaWRcIjo5MCxcImNvbW1pc3Npb25cIjowLjMyLFwiY29uZGl0aW9uXCI6XCIxMDAyOjE5LDEwMTM6MjgsMTAwNzoyNSwxMDAxOjEzXCJ9LHtcImlkXCI6OTEsXCJjb21taXNzaW9uXCI6MC4xOSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDEzOjEwLDEwMTQ6MTAsMTAwNzoxNlwifSx7XCJpZFwiOjkyLFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDQ6MzgsMTAxMToxMywxMDA4OjE1LDEwMDc6MjlcIn0se1wiaWRcIjo5MyxcImNvbW1pc3Npb25cIjowLjM0LFwiY29uZGl0aW9uXCI6XCIxMDEzOjEyLDEwMDE6MzksMTAwNjozOCwxMDA4OjExXCJ9LHtcImlkXCI6OTQsXCJjb21taXNzaW9uXCI6MC4yMixcImNvbmRpdGlvblwiOlwiMTAwMjozNiwxMDAxOjE3LDEwMTM6MTYsMTAwNTozMVwifSx7XCJpZFwiOjk1LFwiY29tbWlzc2lvblwiOjAuMTUsXCJjb25kaXRpb25cIjpcIjEwMDU6MTYsMTAwMToxNCwxMDE1OjM0LDEwMDg6MTZcIn0se1wiaWRcIjo5NixcImNvbW1pc3Npb25cIjpcIjAuMzlcIixcImNvbmRpdGlvblwiOlwiMTAwMzoyNCwxMDAxOjMyLDEwMDc6MjgsMTAwNToxOFwifSx7XCJpZFwiOjk3LFwiY29tbWlzc2lvblwiOlwiMC43XCIsXCJjb25kaXRpb25cIjpcIjEwMTM6MzIsMTAwOToyMywxMDA2OjMwLDEwMTE6MjBcIn1dLFwibGFuZ1wiOltdLFwibGFuZExldmVsXCI6W3tcImlkXCI6MSxcInJld2FyZFwiOlwiMTAwMjowXCIsXCJjb3N0XCI6XCIxMDAyOjBcIixcImdhaW5cIjpudWxsfSx7XCJpZFwiOjIsXCJyZXdhcmRcIjpcIjEwMDI6MTUwMFwiLFwiY29zdFwiOlwiMTAwMjoxMDAwMFwiLFwiZ2FpblwiOjAuMX0se1wiaWRcIjozLFwicmV3YXJkXCI6XCIxMDAyOjIwMDBcIixcImNvc3RcIjpcIjEwMDI6MzAwMDBcIixcImdhaW5cIjowLjI1fSx7XCJpZFwiOjQsXCJyZXdhcmRcIjpcIjEwMDI6MjUwMFwiLFwiY29zdFwiOlwiMTAwMjo1MDAwMFwiLFwiZ2FpblwiOjAuNH0se1wiaWRcIjo1LFwicmV3YXJkXCI6XCIxMDAyOjMwMDBcIixcImNvc3RcIjpcIjEwMDI6MTAwMDAwXCIsXCJnYWluXCI6MC41NX1dLFwiZmVlZFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTk5N0NcdTVFNzJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDFfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MSxcImNvc3RcIjpcIjEwMDI6MzBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU1NzVBXHU2NzlDXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAyX2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjIsXCJjb3N0XCI6XCIxMDAyOjUwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1NzA2Qlx1ODE3RlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwM19mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjo1LFwiY29zdFwiOlwiMTAwMjoxMDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU3MjVCXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA0X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjUwLFwiY29zdFwiOlwiMTAwMjo5MDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU3MzJBXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA1X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjIwLFwiY29zdFwiOlwiMTAwMjo0NjBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU5RTIxXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA2X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjEwLFwiY29zdFwiOlwiMTAwMjoyNzBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn1dLFwiY3VycmVuY3lcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU5NEJCXHU3N0YzXCIsXCJpY29uXCI6XCJtYWluX3NjZW5lL2ltZ19kaWFtb25kLnBuZ1wifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTkxRDFcdTVFMDFcIixcImljb25cIjpcIm1haW5fc2NlbmUvaW1nX2NvaW4ucG5nXCJ9XSxcImNvbmZpZ1wiOlt7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVzXCIsXCJ2YWx1ZVwiOjMwfSx7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVcIixcInZhbHVlXCI6NjAwfSx7XCJpZFwiOlwidW5sb2NrX2xhbmRfY29zdFwiLFwidmFsdWVcIjpcIjEwMDI6MCwxMDAyOjAsMTAwMjo1MDAwLDEwMDI6MTAwMDAsMTAwMjoyMDAwMCwxMDAyOjMwMDAwLDEwMDI6NDAwMDAsMTAwMjo1MDAwMCwxMDAyOjYwMDAwXCJ9LHtcImlkXCI6XCJnb2xkRGVmYXVsdFwiLFwidmFsdWVcIjpcIjEwMDI6MTAwXCJ9LHtcImlkXCI6XCJkaWFtb25kRGVmYXVsdFwiLFwidmFsdWVcIjpcIjEwMDE6NTBcIn0se1wiaWRcIjpcIkFEVGltZXNMaW1pdFwiLFwidmFsdWVcIjozMH0se1wiaWRcIjpcIkFEU3BlZWRVcHRpbWVzXCIsXCJ2YWx1ZVwiOjZ9LHtcImlkXCI6XCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIsXCJ2YWx1ZVwiOlwiMTAwMjoxMDAwMFwifSx7XCJpZFwiOlwidml0YWxpdHlMaW1pdFwiLFwidmFsdWVcIjoxMH0se1wiaWRcIjpcImxhbmRBbW91bnRNYXhcIixcInZhbHVlXCI6OX0se1wiaWRcIjpcInBldERlZmF1bHRWaXRhbGl0eVwiLFwidmFsdWVcIjoxMDB9LHtcImlkXCI6XCJwZXREaWdlc3RJbnRlcnZhbFRpbWVcIixcInZhbHVlXCI6NjB9LHtcImlkXCI6XCJWaWRlb3Jld2FyZHNcIixcInZhbHVlXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOlwid2l0aGRyYXdhbFwiLFwidmFsdWVcIjpcIjEwMDE6MTAwMDA6MVwifSx7XCJpZFwiOlwiSW52aXRhdGlvbl9yZXdhcmRzXCIsXCJ2YWx1ZVwiOlwiMTAwMTo1MDAwXCJ9LHtcImlkXCI6XCJ3aXRoZHJhd2FsX3RpbWVzXCIsXCJ2YWx1ZVwiOlwiMC4zOjMsMC41OjIsNTowLDEwOjAsNTA6MFwifV19OyIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29scyB7XHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NUI1N1x1N0IyNlxyXG4gICAgICogQHBhcmFtIHN0ciBcdTg5ODFcdTg5RTNcdTY3OTBcdTc2ODRcdTVCNTdcdTdCMjZcclxuICAgICAqIEBwYXJhbSBmb3JtYXQgXHU1MDVBXHU0RTNBXHU1M0MyXHU4MDAzXHU3Njg0XHU1QjU3XHU3QjI2XHU5RUQ4XHU4QkE0XHU0RTNBLFxyXG4gICAgICogQHJldHVybnMgXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1QjU3XHU3QjI2XHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVN0cmluZyhzdHI6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcgPSBcIixcIikge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHN0ci5zcGxpdChmb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3OUQyXHU4RjZDXHU2MzYyXHU2MjEwMDA6MDA6MDBcclxuICAgICAqIEBwYXJhbSBzIFx1OEY2Q1x1NjM2Mlx1NjVGNlx1OTVGNFx1NzY4NFx1NzlEMlxyXG4gICAgICogQHJldHVybnMgMDA6MDA6MDBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZvcm1hdFNlY29uZHMgPSAocykgPT4gbmV3IERhdGUocyAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDExLCA4KTtcclxufVxyXG4iLCAiaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi9UYWJsZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ29uZmlnQmFzZSxcclxuICAgIEN1cnJlbmN5QmFzZSxcclxuICAgIEZlZWRCYXNlLFxyXG4gICAgTGFuZExldmVsQmFzZSxcclxuICAgIE9yZGVyQmFzZSxcclxuICAgIFBldEJhc2UsXHJcbiAgICBQbGFudEJhc2UsXHJcbiAgICBSZXdhcmRCYXNlLFxyXG4gICAgUmV3YXJkQ3VycmVuY3lCYXNlLFxyXG4gICAgU2lnbkluQmFzZSxcclxuICAgIFRhc2tCYXNlLFxyXG59IGZyb20gXCIuL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwiLi9Ub29sc1wiO1xyXG5cclxuY29uc3QgVGFibGVQcm9wZXJ0eUV2ZW50ID0ge1xyXG4gICAgcGV0KGQ6IHR5cGVvZiBUYWJsZS5wZXRbMF0pIHtcclxuICAgICAgICByZXR1cm4gPFBldEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYHBldF9mZWVkLyR7ZC5pZH1fZG9nLnBuZ2AsXHJcbiAgICAgICAgICAgIHZpdGFsaXR5X21heDogZC52aXRhbGl0eV9tYXgsXHJcbiAgICAgICAgICAgIHZpdGFsaXR5X2NvbnN1bWU6IGQudml0YWxpdHlfY29uc3VtZSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICAgICAgc2Vuc2l0aXZlOiBkLnNlbnNpdGl2ZSxcclxuICAgICAgICAgICAgYWJpbGl0eTogZC5hYmlsaXR5LFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU5OTcyXHU2NTk5XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGZlZWQoZDogdHlwZW9mIFRhYmxlLmZlZWRbMF0pIHtcclxuICAgICAgICByZXR1cm4gPEZlZWRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uIHx8IGBwZXRfZmVlZC8ke2QuaWR9X2ZlZWQucG5nYCxcclxuICAgICAgICAgICAgdml0YWxpdHk6IGQudml0YWxpdHksXHJcbiAgICAgICAgICAgIGNvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLmNvc3QpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdThCQTJcdTUzNTVcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBvcmRlcihkOiB0eXBlb2YgVGFibGUub3JkZXJbMF0pIHtcclxuICAgICAgICByZXR1cm4gPE9yZGVyQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBjb21taXNzaW9uOiBOdW1iZXIoZC5jb21taXNzaW9uKSxcclxuICAgICAgICAgICAgY29uZGl0aW9uOiBUb29scy5wYXJzZVN0cmluZyhkLmNvbmRpdGlvbikubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IFRvb2xzLnBhcnNlU3RyaW5nKGUsIFwiOlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbnQ6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChOdW1iZXIodlswXSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBOdW1iZXIodlsxXSksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NjIxMFx1NzE5Rlx1NjkwRFx1NzI2OVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHBsYW50KGQ6IHR5cGVvZiBUYWJsZS5wbGFudFswXSkge1xyXG4gICAgICAgIHJldHVybiA8UGxhbnRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uLFxyXG4gICAgICAgICAgICBtYXR1cmVJY29uOiBgcGxhbnRfaWNvbi8ke2QuaWNvbi5tYXRjaCgvXFxkKy9nKVswXX1fbWF0dXJlLnBuZ2AsXHJcbiAgICAgICAgICAgIGdyb3dpbmdJY29uOiBgcGxhbnRfaWNvbi8ke2QuaWNvbi5tYXRjaCgvXFxkKy9nKVswXX1fZ3Jvd2luZy5wbmdgLFxyXG4gICAgICAgICAgICBnYWluOiBUb29scy5wYXJzZVN0cmluZyhkLmdhaW4pLm1hcCgoZSkgPT4gZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGUpKSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgICAgICBzZWVkX3ByaWNlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5zZWVkX3ByaWNlKSxcclxuICAgICAgICAgICAgaGFydmVzdDogTnVtYmVyKFRvb2xzLnBhcnNlU3RyaW5nKGQuaGFydmVzdCwgXCJ+XCIpWzFdKSxcclxuICAgICAgICAgICAgbWF0dXJlX3RpbWU6IE51bWJlcihkLm1hdHVyZV90aW1lKSxcclxuICAgICAgICAgICAgdW5sb2NrX2Nvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnVubG9ja19jb3N0KSxcclxuICAgICAgICAgICAgdW5sb2NrX3Jld2FyZDogVG9vbHMucGFyc2VTdHJpbmcoZC51bmxvY2tfcmV3YXJkKS5tYXAoKGUpID0+IGdldFJld2FyZEN1cnJlbmN5QmFzZShlKSksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBjdXJyZW5jeShkOiB0eXBlb2YgVGFibGUuY3VycmVuY3lbMF0pIHtcclxuICAgICAgICByZXR1cm4gPEN1cnJlbmN5QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24sXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NTcxRlx1NTczMFx1N0I0OVx1N0VBN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBsYW5kTGV2ZWwoZDogdHlwZW9mIFRhYmxlLmxhbmRMZXZlbFswXSkge1xyXG4gICAgICAgIHJldHVybiA8TGFuZExldmVsQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICByZXdhcmQ6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnJld2FyZCksXHJcbiAgICAgICAgICAgIGNvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLmNvc3QpLFxyXG4gICAgICAgICAgICBnYWluOiBkLmdhaW4sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uZmlnKGQ6IHR5cGVvZiBUYWJsZS5jb25maWdbMF0pIHtcclxuICAgICAgICBzd2l0Y2ggKGQuaWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcImFsbF9zcGVlZF91cF90aW1lc1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiYWxsX3NwZWVkX3VwX3RpbWVzXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYWxsX3NwZWVkX3VwX3RpbWVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcImFsbF9zcGVlZF91cF90aW1lXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidW5sb2NrX2xhbmRfY29zdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ1bmxvY2tfbGFuZF9jb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFRvb2xzLnBhcnNlU3RyaW5nKGQudmFsdWUgYXMgc3RyaW5nKS5tYXAoKGQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJld2FyZEN1cnJlbmN5QmFzZShkKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImdvbGREZWZhdWx0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImdvbGREZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykuY291bnQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlhbW9uZERlZmF1bHRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGlhbW9uZERlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKS5jb3VudCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJBRFRpbWVzTGltaXRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcIkFEVGltZXNMaW1pdFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiQURTcGVlZFVwdGltZXNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcIkFEU3BlZWRVcHRpbWVzXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInZpdGFsaXR5QnV5Q29zdEdvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKS5jb3VudCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2aXRhbGl0eUxpbWl0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJ2aXRhbGl0eUxpbWl0XCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kQW1vdW50TWF4XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJsYW5kQW1vdW50TWF4XCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXREZWZhdWx0Vml0YWxpdHlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcInBldERlZmF1bHRWaXRhbGl0eVwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJwZXREaWdlc3RJbnRlcnZhbFRpbWVcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcIlZpZGVvcmV3YXJkc1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiVmlkZW9yZXdhcmRzXCIsIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aXRoZHJhd2FsXCI6IC8vXHU2M0QwXHU3M0IwXHU2QkQ0XHU0RjhCXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJ3aXRoZHJhd2FsXCIsIHZhbHVlOiBUb29scy5wYXJzZVN0cmluZyhkLnZhbHVlIGFzIHN0cmluZywgXCI6XCIpIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJJbnZpdGF0aW9uX3Jld2FyZHNcIjogLy9cdTkwODBcdThCRjdcdTU5N0RcdTUzQ0JcdTU5NTZcdTUyQjFcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiSW52aXRhdGlvbl9yZXdhcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZyksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwid2l0aGRyYXdhbF90aW1lc1wiOiAvL1x1NjNEMFx1NzNCMFx1NkIyMVx1NjU3MFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ3aXRoZHJhd2FsX3RpbWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFRvb2xzLnBhcnNlU3RyaW5nKGQudmFsdWUgYXMgc3RyaW5nKS5tYXAoKHY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gVG9vbHMucGFyc2VTdHJpbmcodiwgXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBwcmljZTogTnVtYmVyKHZbMF0pLCB0aW1lczogTnVtYmVyKHZbMV0pIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTk1MDFcdTdCN0VcdTUyMzBcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkXHJcbiAgICAgKi9cclxuICAgIHNpZ25JbihkOiB0eXBlb2YgVGFibGUuc2lnbkluWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxTaWduSW5CYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGRheXM6IGQuZGF5cyxcclxuICAgICAgICAgICAgcmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5yZXdhcmQpLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU0RUZCXHU1MkExXHU4ODY4XHJcbiAgICAgKi9cclxuICAgIHRhc2soZDogdHlwZW9mIFRhYmxlLnRhc2tbMF0pIHtcclxuICAgICAgICByZXR1cm4gPFRhc2tCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIHRpbWVzOiBkLnRpbWVzLFxyXG4gICAgICAgICAgICByZXdhcmQ6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnJld2FyZCksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICAgICAgdGl0bGU6IGQudGl0bGUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbiB8fCBgZ2FtZS9pbWdfYmFybS5wbmdgLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFx1ODlFM1x1Njc5MFx1OEQyN1x1NUUwMVxyXG4gKiBAcGFyYW0gc3RyIFx1ODlFM1x1Njc5MFx1NzY4NFx1OEQyN1x1NUUwMVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NCBpZDpudW1cclxuICovXHJcbmZ1bmN0aW9uIGdldFJld2FyZEN1cnJlbmN5QmFzZShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IGxpc3QgPSBUb29scy5wYXJzZVN0cmluZyhzdHIsIFwiOlwiKTtcclxuXHJcbiAgICByZXR1cm4gPFJld2FyZEN1cnJlbmN5QmFzZT57XHJcbiAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoTnVtYmVyKGxpc3RbMF0pKSxcclxuICAgICAgICBjb3VudDogTnVtYmVyKGxpc3RbMV0pLFxyXG4gICAgfTtcclxufVxyXG5cclxudHlwZSB0eXBlVGFibGUgPSB0eXBlb2YgVGFibGVQcm9wZXJ0eUV2ZW50O1xyXG5cclxuY2xhc3MgVGFibGVDb250cm9sIHtcclxuICAgIHByaXZhdGUgdGFibGVDYWNoZTogTWFwPGtleW9mIHR5cGVUYWJsZSwgUmV0dXJuVHlwZTx0eXBlVGFibGVba2V5b2YgdHlwZVRhYmxlXT5bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTc2ODRcdTg4NjhcclxuICAgICAqIEBwYXJhbSBrZXkgXHU4ODY4XHU3Njg0a2V5XHJcbiAgICAgKi9cclxuICAgIHRhYmxlPFQgZXh0ZW5kcyBrZXlvZiB0eXBlVGFibGU+KFxyXG4gICAgICAgIGtleTogVFxyXG4gICAgKToge1xyXG4gICAgICAgIGxpc3Q6IFJldHVyblR5cGU8dHlwZVRhYmxlW1RdPltdO1xyXG4gICAgICAgIGdldDogeyAoaWQ6IG51bWJlciB8IHN0cmluZyk6IFJldHVyblR5cGU8dHlwZVRhYmxlW1RdPiB9O1xyXG4gICAgfSB7XHJcbiAgICAgICAgLy9cdThCRkJcdTUzRDZcdTdFQzRcdTYyMTBcclxuICAgICAgICBpZiAodGhpcy50YWJsZUNhY2hlLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayh0aGlzLnRhYmxlQ2FjaGUuZ2V0KGtleSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1x1ODlFM1x1Njc5MFx1NjU3MFx1NjM2RVxyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgVGFibGVba2V5XS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChUYWJsZVByb3BlcnR5RXZlbnRba2V5XShlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cdTdGMTNcdTVCNThcdTg5RTNcdTY3OTBcdTg4NjhcdTc2ODRcdTY1NzBcdTYzNkVcclxuICAgICAgICB0aGlzLnRhYmxlQ2FjaGUuc2V0KGtleSwgbGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVCYWNrKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NTI4XHU0RThFdGFibGVcdTY1QjlcdTZDRDVcdThGRDRcdTU2REVcdTY1NzBcdTYzNkVcdTY4M0NcdTVGMEZcdTU0OENcdTZERkJcdTUyQTBcdTgzQjdcdTUzRDZcdTUzNTVcdTRFMkFcdTg4NjhcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1ODlFM1x1Njc5MFx1ODg2OFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU2MzA3XHU1QjlBXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGFibGVCYWNrKGxpc3QpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsaXN0OiBsaXN0LFxyXG4gICAgICAgICAgICBnZXQoaWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gbGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFt4XS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdFt4XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU4ODY4XHU2ODNDXHU4OUUzXHU2NzkwXHU1REU1XHU1MTc3XHJcbiAqL1xyXG5jb25zdCBUYWJsZUFuYWx5emUgPSBuZXcgVGFibGVDb250cm9sKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQW5hbHl6ZTtcclxuIiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBUYXNrQmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYXNrRGF0YU9iaiB7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExaWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU1QjhDXHU2MjEwXHU2QjIxXHU2NTcwICovXHJcbiAgICB0aW1lczogbnVtYmVyO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTg4Nlx1NTNENlx1NTk1Nlx1NTJCMSAwXHU2NzJBXHU5ODg2XHU1M0Q2IDFcdTVERjJcdTk4ODZcdTUzRDYgKi9cclxuICAgIHJlY2VpdmU6IG51bWJlcjtcclxuICAgIC8qKiBcdTRFRkJcdTUyQTFcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFRhc2tCYXNlO1xyXG59XHJcbi8qKlxyXG4gKiBcdTRFRkJcdTUyQTFcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFRhc2tTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFRhc2tEYXRhT2JqW10gPSBbXTtcclxuXHJcbiAgICBpbml0KGQ6IE5ldEluaXRbXCJ0YXNrc1wiXSkge1xyXG4gICAgICAgIGQuZm9yRWFjaCgoZSkgPT5cclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGUuaWQsXHJcbiAgICAgICAgICAgICAgICB0aW1lczogZS50aW1lcyxcclxuICAgICAgICAgICAgICAgIHJlY2VpdmU6IGUucmVjZWl2ZSxcclxuICAgICAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInRhc2tcIikuZ2V0KGUuaWQpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTRFRkJcdTUyQTFcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0VGFzayhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFt4XS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRBID0gdGhpcy5nZXRUYXNrKGEuaWQpLFxyXG4gICAgICAgICAgICAgICAgdEIgPSB0aGlzLmdldFRhc2soYi5pZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgYS5pZCArXHJcbiAgICAgICAgICAgICAgICAodEE/LnJlY2VpdmUgPyAxMDAwIDogMSkgK1xyXG4gICAgICAgICAgICAgICAgKHRBPy50aW1lcyA+PSBhLmJhc2UudGltZXMgPyAxMDAgOiAxMDAwKSAtXHJcbiAgICAgICAgICAgICAgICAoYi5pZCArICh0Qj8ucmVjZWl2ZSA/IDEwMDAgOiAxKSArICh0Qj8udGltZXMgPj0gYi5iYXNlLnRpbWVzID8gMTAwIDogMTAwMCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTRFRkJcdTUyQTFcdTZERkJcdTUyQTBcdTZCMjFcdTY1NzBcclxuICAgICAqL1xyXG4gICAgdGFza0FkZFRpbWVzKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFzayA9IHRoaXMuZ2V0VGFzayhpZCk7XHJcbiAgICAgICAgaWYgKCF0YXNrKSB7XHJcbiAgICAgICAgICAgIC8vXHU5RUQ4XHU4QkE0XHU0RTBEXHU1MjFCXHU1RUZBXHU0RUZCXHU1MkExXHJcbiAgICAgICAgICAgIC8vIHRhc2sgPSB7IGlkOiBpZCwgdGltZXM6IDAsIHJlY2VpdmU6IDAsIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInRhc2tcIikuZ2V0KGlkKSB9O1xyXG4gICAgICAgICAgICAvLyB0aGlzLmxpc3QucHVzaCh0YXNrKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFzay50aW1lcysrO1xyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV90YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFza1NlcnZpY2UoKTtcclxuIiwgImV4cG9ydCB0eXBlIExhbmRPYmogPSBOZXRJbml0W1wibGFuZHNcIl1bMF07XHJcblxyXG5jbGFzcyBMYW5kU2VydmljZSB7XHJcbiAgICAvKipcclxuICAgICAqIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBsaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGxpc3QgXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGluaXQobGlzdDogTGFuZE9ialtdKSB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGFuZChkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEUwMFx1NTc1N1x1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGlkIFx1NTcxRlx1NTczMGlkXHJcbiAgICAgKiBAcmV0dXJucyBcdThGRDRcdTU2REVcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgZ2V0TGFuZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5nZXQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2REZCXHU1MkEwXHU2MjE2XHU2NjJGXHU2NkY0XHU2NUIwXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gZCBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgYWRkTGFuZChkOiBMYW5kT2JqKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LnNldChkLmlkLCBkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1N0E3QVx1NTcxRlx1NTczMFx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QuY2xlYXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExhbmRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBQZXRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGV0RGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1NUJBMFx1NzI2OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogUGV0QmFzZTtcclxuICAgIC8qKiBcdTk1MDFcdTVCOUEgKi9cclxuICAgIGxvY2s6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTVCQTBcdTcyNjlcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFBldFNlcnZpY2Uge1xyXG4gICAgbGlzdDogUGV0RGF0YUJhc2VbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjFEXHU1OUNCXHU1MzE2XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGluaXQocGV0czogbnVtYmVyW10pIHtcclxuICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IGQsXHJcbiAgICAgICAgICAgICAgICBsb2NrOiAhcGV0cy5pbmNsdWRlcyhkLmlkKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTVCQTBcdTcyNjlcdTg5RTNcdTk1MDFcdTY1NzBcdTkxQ0ZcclxuICAgICAqL1xyXG4gICAgZ2V0VW5sb2NrTGVuKCkge1xyXG4gICAgICAgIGxldCBsZW4gPSAwO1xyXG4gICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZC5sb2NrKSBsZW4rKztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGVuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUGV0U2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGxhbnRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGxhbnREYXRhQmFzZSB7XHJcbiAgICAvKiogXHU2OTBEXHU3MjY5XHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBQbGFudEJhc2U7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU5NTAxXHU1QjlBICovXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG59XHJcbi8qKlxyXG4gKiBcdTY5MERcdTcyNjlcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICovXHJcbmNsYXNzIFBsYW50U2VydmljZSB7XHJcbiAgICBsaXN0OiBQbGFudERhdGFCYXNlW10gPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICogXHU1MjFEXHU1OUNCXHU1MzE2XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTc5Q0RcdTVCNTBpZFx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBpbml0KGxpc3Q6IG51bWJlcltdKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHsgYmFzZTogZCwgbG9jazogIWxpc3QuaW5jbHVkZXMoZC5pZCkgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTY5MERcdTcyNjlcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBpZCBcdTY5MERcdTcyNjlpZFxyXG4gICAgICogQHJldHVybnMgXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGdldFBsYW50KGlkOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5saXN0Lmxlbmd0aCAtIDE7IHggPiAtMTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uYmFzZS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1OTY2NFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUGxhbnRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuLi9jb3JlL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU3NTI4XHU2MjM3XHU0RkUxXHU2MDZGXHJcbiAqL1xyXG5jbGFzcyBVc2VySW5mbyB7XHJcbiAgICAvKiogXHU4QkEyXHU1MzU1XHU3QjQ5XHU3RUE3IFx1NURGMlx1NUI4Q1x1NjIxMCAqL1xyXG4gICAgb3JkZXJMZXZlbDogbnVtYmVyID0gMTtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTU0MERcdTc5RjAgKi9cclxuICAgIG5pY2tuYW1lOiBzdHJpbmcgPSBcIm5hbWVcIjtcclxuICAgIC8vIC8qKiBcdTc1MjhcdTYyMzdpZCAqL1xyXG4gICAgLy8gdWlkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NTUyRlx1NEUwMFx1NjgwN1x1OEJDNiAqL1xyXG4gICAga2V5OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgLyoqIFx1NzUyOFx1NTQwRFx1NTkzNFx1NTBDRiAqL1xyXG4gICAgYXZhdGFyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIFx1OTRCQlx1NzdGMyAqL1xyXG4gICAgZGlhbW9uZDogbnVtYmVyID0gOTk5O1xyXG4gICAgLyoqIFx1OTFEMVx1NUUwMSAqL1xyXG4gICAgZ29sZDogbnVtYmVyID0gOTk5O1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NTNFRlx1NEVFNVx1NzcwQlx1NUU3Rlx1NTQ0QVx1NzY4NFx1NkIyMVx1NjU3MCAqL1xyXG4gICAgYWR2ZXJ0aXNlVGltZXM6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3M0E5XHU1QkI2XHU0RjY5XHU2MjM0XHU3Njg0XHU1QkEwXHU3MjY5ICovXHJcbiAgICB3YXJlUGV0SWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTUyNjlcdTRGNTlcdTRGNTNcdTUyOUIgKi9cclxuICAgIHBldFZpdGFsaXR5OiBudW1iZXI7XHJcbiAgICAvKiogXHU2RDg4XHU1MzE2XHU5OERGXHU3MjY5XHU1MDEyXHU4QkExXHU2NUY2ICovXHJcbiAgICBkaWdlc3RDb3VudERvd246IG51bWJlcjtcclxuICAgIC8qKiBcdThGREVcdTdFRURcdTdCN0VcdTUyMzBcdTU5MjlcdTY1NzAgKi9cclxuICAgIHNpZ25JbkRheXM6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU0RTBBXHU0RTAwXHU2QjIxXHU5ODg2XHU1M0Q2XHU3Njg0XHU3QjdFXHU1MjMwXHU1OTU2XHU1MkIxaWQgKi9cclxuICAgIHNpZ25JbklkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NURGMlx1N0VDRlx1NTJBMFx1OTAxRlx1NkIyMVx1NjU3MCAqL1xyXG4gICAgc3BlZWRVcFRpbWVzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NEY1M1x1NTI5QiAqL1xyXG4gICAgdml0YWxpdHk6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1MTUxXHU2MzYyXHU2QkQ0XHU0RjhCICovXHJcbiAgICBwcm9wb3J0aW9uOiBudW1iZXIgPSAwLjAwMDE7XHJcbiAgICAvKiogXHU5MDgwXHU4QkY3XHU4MDA1ICovXHJcbiAgICBpbnZpdGVQZW9wbGU6IHN0cmluZztcclxuICAgIC8qKiBcdTdCMkNcdTRFMDBcdTZCMjFcdTc2N0JcdTVGNTUgMTEgXHU4ODY4XHU3OTNBIFx1NjI0RFx1ODg2OFx1NzkzQVx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NUI4Q1x1NTE2OFx1N0VEM1x1Njc1RiAgKi9cclxuICAgIGlzRmlyc3RUaW1lOiBudW1iZXI7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU2M0QwXHU3M0IwXHU2NTcwXHU2MzZFICovXHJcbiAgICB3aXRoZHJhdzogV2l0aGRyYXdEYXRhW107XHJcblxyXG4gICAgZ2V0IHR0dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlckxldmVsO1xyXG4gICAgfVxyXG4gICAgc2V0IHR0dCh2KSB7XHJcbiAgICAgICAgdGhpcy5vcmRlckxldmVsID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLm5pY2tuYW1lID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJJbmZvKCk7XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGxhbnRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogXHU0RUQzXHU1RTkzXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFdhcmVIb3VzZURhdGEge1xyXG4gICAgYmFzZTogUGxhbnRCYXNlO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHR5cGU/OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1x1NjU3MFx1NjM2RVxyXG4gKi9cclxuY2xhc3MgV2FyZWhvdXNlU2VydmljZSB7XHJcbiAgICBsaXN0OiBXYXJlSG91c2VEYXRhW10gPSBbXTtcclxuXHJcbiAgICBpbml0KFxyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgdHlwZTogbnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgKSB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KGQuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIlx1OTUxOVx1OEJFRlx1NzY4NGlkIFwiICsgZC5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLmlkKSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiBkLmFtb3VudCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1NTFDRlx1NUMxMVx1NzI2OVx1NTRDMVx1NjU3MFx1OTFDRlxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKiBAcGFyYW0gYW1vdW50XHJcbiAgICAgKi9cclxuICAgIHJlZHVjZUFtb3VudChpZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uYmFzZS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W3hdLmNvdW50IC09IGFtb3VudDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uY291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5zcGxpY2UoeCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX09yZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEUwMFx1NEUyQVx1OTA1M1x1NTE3N1xyXG4gICAgICovXHJcbiAgICBnZXRPbmUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW0oaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SXRlbShpZCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uYmFzZS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZERkJcdTUyQTBcdTcyNjlcdTU0QzFcclxuICAgICAqL1xyXG4gICAgYWRkKGlkOiBudW1iZXIsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oaWQpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnQgKz0gYW1vdW50O1xyXG4gICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfT3JkZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIVRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChpZCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiXHU5NTE5XHU4QkVGXHU3Njg0aWQgXCIgKyBpZCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgYmFzZTogVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KGlkKSxcclxuICAgICAgICAgICAgY291bnQ6IGFtb3VudCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX09yZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFdhcmVob3VzZVNlcnZpY2UoKTtcclxuIiwgIi8qKlxyXG4gKiBcdTc3RURcdTk0RkVcdTYzQTVcdThCRjdcdTZDNDJcdTUzNEZcdThCQUVcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFwaUh0dHAge1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NzY3Qlx1NUY1NSAqL1xyXG4gICAgbG9naW4gPSBcIi9sb2dpblwiLFxyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NzY3Qlx1NUY1NSB0b2tlbiAqL1xyXG4gICAgbG9naW5Ub2tlbiA9IFwiL2xvZ2luL3Rva2VuXCIsXHJcbiAgICAvKiogXHU5ODg2XHU1M0Q2XHU4QkEyXHU1MzU1XHU1OTU2XHU1MkIxICovXHJcbiAgICBvcmRlclJld2FyZCA9IFwiL29yZGVyL3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1OTg4Nlx1NTNENlx1N0I3RVx1NTIzMFx1NTk1Nlx1NTJCMSAqL1xyXG4gICAgc2lnbkluUmV3YXJkID0gXCIvc2lnbkluL3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1ODlFM1x1OTUwMSAqL1xyXG4gICAgbGFuZFVubG9jayA9IFwiL2xhbmQvdW5sb2NrXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU2NEFEXHU3OUNEICovXHJcbiAgICBsYW5kU293ID0gXCIvbGFuZC9zb3dcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTY1MzZcdTgzQjcgKi9cclxuICAgIGxhbmRHYXRoZXIgPSBcIi9sYW5kL2dhdGhlclwiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NTM0N1x1N0VBNyAqL1xyXG4gICAgbGFuZFVwZ3JhZGUgPSBcIi9sYW5kL3VwZ3JhZGVcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTUyQTBcdTkwMUYgKi9cclxuICAgIGxhbmRTcGVlZFVwID0gXCIvbGFuZC9zcGVlZFVwXCIsXHJcbiAgICAvKiogXHU3OUNEXHU1QjUwXHU4OUUzXHU5NTAxICovXHJcbiAgICBzZWVkc1VubG9jayA9IFwiL3NlZWRzL3VubG9ja1wiLFxyXG4gICAgLyoqIFx1ODNCN1x1NTNENlx1ODBDQ1x1NTMwNVx1NTIxN1x1ODg2OD0+IFx1NjY4Mlx1NjVGNlx1OEZEOVx1NEUyQVx1NjNBNVx1NTNFM1x1NEUwRFx1OTcwMFx1ODk4MVx1NzUyOCAqL1xyXG4gICAgd2FyZWhvdXNlID0gXCIvd2FyZWhvdXNlXCIsXHJcbiAgICAvKiogXHU4MENDXHU1MzA1XHU1NTQ2XHU1NEMxXHU1MUZBXHU1NTJFICovXHJcbiAgICB3YXJlaG91c2VTZWxsID0gXCIvd2FyZWhvdXNlL3NlbGxcIixcclxuICAgIC8qKiBcdTVCQTBcdTcyNjlcdThEMkRcdTRFNzAgKi9cclxuICAgIHBldEJ1eSA9IFwiL3BldC9idXlcIixcclxuICAgIC8qKiBcdTVCQTBcdTcyNjlcdTRGNjlcdTYyMzQgKi9cclxuICAgIHBldFdlYXIgPSBcIi9wZXQvd2VhclwiLFxyXG4gICAgLyoqIFx1OTk3Mlx1NjU5OVx1OEQyRFx1NEU3MCAqL1xyXG4gICAgZmVlZEJ1eSA9IFwiL2ZlZWQvYnV5XCIsXHJcbiAgICAvKiogXHU0RUZCXHU1MkExXHU1OTU2XHU1MkIxXHU5ODg2XHU1M0Q2ICovXHJcbiAgICB0YXNrUmV3YXJkID0gXCIvdGFzay9yZXdhcmRcIixcclxuICAgIC8qKiBcdTkwQkJcdTVDNDUgKi9cclxuICAgIG5laWdoYm9yID0gXCIvbmVpZ2hib3JcIixcclxuICAgIC8qKiBcdTUwNzdcdTgzREMgKi9cclxuICAgIGxhbmRTdGVhbCA9IFwiL2xhbmQvc3RlYWxcIixcclxuICAgIC8qKiBcdTUzNTVcdTcyRUNcdTY3RTVcdTc3MEJcdTVFN0ZcdTU0NEEgKi9cclxuICAgIGFkID0gXCIvYWRcIixcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTRGNTNcdTUyOUJcdThEMkRcdTRFNzAgKi9cclxuICAgIHZpdGFsaXR5QnV5ID0gXCIvdml0YWxpdHkvYnV5XCIsXHJcbiAgICAvKiogXHU1NkRFXHU4MUVBXHU1REYxXHU1QkI2ICovXHJcbiAgICBnb0hvbWUgPSBcIi9nb0hvbWVcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTUyMjBcdTk2NjQgKi9cclxuICAgIGZyaWVuZERlbGV0ZSA9IFwiL2ZyaWVuZC9kZWxldGVcIixcclxuICAgIC8qKiBcdTkwMUFcdThGQzdcdTU5N0RcdTUzQ0JcdTc1MzNcdThCRjcgKi9cclxuICAgIGZyaWVuZEFsbG93ID0gXCIvZnJpZW5kL2FsbG93XCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU3NTMzXHU4QkY3ICovXHJcbiAgICBmcmllbmRBcHBseSA9IFwiL2ZyaWVuZC9hcHBseVwiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1NjQxQ1x1N0QyMiAqL1xyXG4gICAgZnJpZW5kU2VhcmNoID0gXCIvZnJpZW5kL3NlYXJjaFwiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1NTIxN1x1ODg2OCAqL1xyXG4gICAgZnJpZW5kTGlzdCA9IFwiL2ZyaWVuZC9saXN0XCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU5MDgwXHU4QkY3XHU4MDA1XHU3RUQxXHU1QjlBICovXHJcbiAgICBmcmllbmRJbnZpdGVQZW9wbGUgPSBcIi9mcmllbmQvaW52aXRlL3Blb3BsZVwiLFxyXG4gICAgLyoqIFx1OTA4MFx1OEJGN1x1NzY4NFx1NTk3RFx1NTNDQlx1NTIxN1x1ODg2OCAqL1xyXG4gICAgZnJpZW5kSW52aXRlTGlzdCA9IFwiL2ZyaWVuZC9pbnZpdGUvbGlzdFwiLFxyXG4gICAgLyoqIFx1OTA4MFx1OEJGN1x1NzY4NFx1NTk3RFx1NTNDQlx1NTk1Nlx1NTJCMVx1RkYwQ1x1OTg4Nlx1NTNENiAqL1xyXG4gICAgZnJpZW5kSW52aXRlUmVjZWl2ZSA9IFwiL2ZyaWVuZC9pbnZpdGUvcmVjZWl2ZVwiLFxyXG4gICAgLyoqIFx1OEJCRlx1OTVFRVx1NTk3RFx1NTNDQlx1NUJCNlx1OTFDQyAqL1xyXG4gICAgZnJpZW5kVmlzaXQgPSBcIi9mcmllbmQvdmlzaXRcIixcclxuICAgIC8qKiBcdTkwQUVcdTRFRjZcdTUyMTdcdTg4NjggKi9cclxuICAgIG1haWxMaXN0ID0gXCIvbWFpbC9saXN0XCIsXHJcbiAgICAvKiogXHU5MEFFXHU0RUY2XHU5NjA1XHU4QkZCICovXHJcbiAgICBtYWlsUmVhZCA9IFwiL21haWwvcmVhZFwiLFxyXG4gICAgLyoqIFx1OTBBRVx1NEVGNlx1NTIyMFx1OTY2NCAqL1xyXG4gICAgbWFpbERlbGV0ZSA9IFwiL21haWwvZGVsZXRlXCIsXHJcbiAgICAvKiogXHU2M0QwXHU3M0IwICovXHJcbiAgICB3aXRoZHJhdyA9IFwiL3dpdGhkcmF3XCIsXHJcbn1cclxuIiwgImltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFBldFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9QZXRTZXJ2aWNlXCI7XHJcbmltcG9ydCBQbGFudFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwiLi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vUmVzXCI7XHJcblxyXG4vKipcclxuICogXHU1MzRGXHU4QkFFXHU2NTcwXHU2MzZFXHU1OTA0XHU3NDA2XHJcbiAqL1xyXG5jbGFzcyBIdHRwRGF0YUNvbnRyb2wge1xyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1OEY2Q1x1NTNEMSAqL1xyXG4gICAgZm9yd2FyZChkOiB7XHJcbiAgICAgICAgYXBpOiBBcGlIdHRwO1xyXG4gICAgICAgIGRhdGE6IGFueTtcclxuICAgICAgICByZXNvbHZlRXZlbnQ/OiBGdW5jdGlvbjtcclxuICAgICAgICAvLyBUT0RPIFx1OEZEOVx1NEUyQVx1NTNFRlx1ODBGRFx1NjcwOVx1NUYwMlx1NkI2NVx1OTFDRFx1NTkwRFx1OTVFRVx1OTg5OFx1RkYwQ1x1NTQwRVx1NjcxRlx1NjM5Mlx1NjdFNVx1NEUwMFx1NEUwQlxyXG4gICAgICAgIGVycm9yPzogRnVuY3Rpb247XHJcbiAgICB9KSB7XHJcbiAgICAgICAgc3dpdGNoIChkLmFwaSkge1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubG9naW46XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sb2dpblRva2VuOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbihkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kU3BlZWRVcDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDAyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAuYWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRHYXRoZXI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwMyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmZlZWRCdXk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwNik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRTb3c6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwNyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLndhcmVob3VzZVNlbGw6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwOCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5zZWVkc1VubG9jazpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kU293OlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRVbmxvY2s6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAucGV0QnV5OlxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAudml0YWxpdHlCdXk6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAudGFza1Jld2FyZDpcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRVcGdyYWRlOlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLm9yZGVyUmV3YXJkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkLnJlc29sdmVFdmVudCkgZC5yZXNvbHZlRXZlbnQoZC5kYXRhKTtcclxuXHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChkLmFwaSwgZC5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihlcnJvckNvZGU6IG51bWJlciwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgLy8gdGV4dDogYGVycm9yQ29kZSAke2Vycm9yQ29kZX0gJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gLFxyXG4gICAgICAgICAgICB0ZXh0OiBgJHtkYXRhPy5tZXNzYWdlfWAsXHJcbiAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NjdCXHU1RjU1XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsb2dpbihkOiBOZXRJbml0KSB7XHJcbiAgICAgICAgaWYgKCFkKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU3NjdCXHU1RjU1XHU5NTE5XHU4QkVGLFx1OEJGN1x1OTFDRFx1OEJENVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQbGFudFNlcnZpY2UuaW5pdChkLnNlZWRzKTtcclxuICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmluaXQoZC53YXJlaG91c2UpO1xyXG4gICAgICAgIFVzZXJJbmZvLmtleSA9IGQudXNlckluZm8ua2V5O1xyXG4gICAgICAgIFVzZXJJbmZvLmRpYW1vbmQgPSBkLnVzZXJJbmZvLmRpYW1vbmQ7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IGQudXNlckluZm8uZ29sZDtcclxuICAgICAgICBVc2VySW5mby5uaWNrbmFtZSA9IGQudXNlckluZm8ubmlja25hbWU7XHJcbiAgICAgICAgVXNlckluZm8uYXZhdGFyID0gZC51c2VySW5mby5hdmF0YXI7XHJcbiAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCA9IGQub3JkZXJJZCB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLndhcmVQZXRJZCA9IGQud2VhclBldD8uaWQ7XHJcbiAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgPSBkLndlYXJQZXQ/LnZpdGFsaXR5IHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gZC53ZWFyUGV0Py5kaWdlc3RDb3VudERvd24gfHwgMDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IGQuYWR2ZXJ0aXNlVGltZXMgfHwgMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5EYXlzID0gZC5zaWduSW5EYXlzIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBkLnNpZ25JbklkO1xyXG4gICAgICAgIFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9IGQuc3BlZWRVcFRpbWVzO1xyXG4gICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gZC51c2VySW5mby52aXRhbGl0eTtcclxuICAgICAgICBVc2VySW5mby5pbnZpdGVQZW9wbGUgPSBkLnVzZXJJbmZvLmludml0ZVBlb3BsZTtcclxuICAgICAgICBVc2VySW5mby5pc0ZpcnN0VGltZSA9IGQudXNlckluZm8uaXNGaXJzdFRpbWU7XHJcbiAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBkLndpdGhkcmF3O1xyXG4gICAgICAgIFBldFNlcnZpY2UuaW5pdChkLnBldHMpO1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLmluaXQoZC50YXNrcyk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwiaXNMb2dpblwiLCB0cnVlKTtcclxuICAgICAgICBpZiAoZC50b2tlbikgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgZC50b2tlbik7XHJcbiAgICAgICAgTGFuZFNlcnZpY2UuaW5pdChkLmxhbmRzKTtcclxuXHJcbiAgICAgICAgQ29yZS5hdWRpby5zb3VuZE11dGVkID0gTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkuc291bmQ7XHJcbiAgICAgICAgQ29yZS5hdWRpby5tdXNpY011dGVkID0gTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkubXVzaWM7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5PdXQoKSB7XHJcbiAgICAgICAgUGxhbnRTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgV2FyZWhvdXNlU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFBldFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBMYW5kU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwiaXNMb2dpblwiLCBmYWxzZSk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgbnVsbCk7XHJcbiAgICAgICAgVXNlckluZm8ua2V5ID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gMDtcclxuICAgICAgICBVc2VySW5mby5nb2xkID0gMDtcclxuICAgICAgICBVc2VySW5mby5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8uYXZhdGFyID0gXCJcIjtcclxuICAgICAgICBVc2VySW5mby5vcmRlckxldmVsID0gMDtcclxuICAgICAgICBVc2VySW5mby53YXJlUGV0SWQgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gMDtcclxuICAgICAgICBVc2VySW5mby5kaWdlc3RDb3VudERvd24gPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5EYXlzID0gMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5JZCA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8uc3BlZWRVcFRpbWVzID0gMDtcclxuICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uaW52aXRlUGVvcGxlID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5pc0ZpcnN0VGltZSA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OUVEOFx1OEJBNFx1NzUyOFx1Njc2NVx1NjZGNFx1NjVCMFx1NzUyOFx1NjIzN1x1OTFEMVx1NUUwMVx1N0I0OVxyXG4gICAgICogQHBhcmFtIGRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVVc2VySW5mbyhkOiBSZXR1cm5Vc2VySW5mbykge1xyXG4gICAgICAgIFVzZXJJbmZvLmdvbGQgPSBkLmdvbGQ7XHJcbiAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IGQuZGlhbW9uZDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IGQuYWR2ZXJ0aXNlVGltZXMgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NEVGQlx1NTJBMVx1OEZEQlx1NUVBNlxyXG4gICAgICogQHBhcmFtIGlkIFx1NEVGQlx1NTJBMWlkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGFza1VwZGF0ZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEh0dHBEYXRhQ29udHJvbCgpO1xyXG4iLCAiaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwic3JjL2NvcmUvSW5zdGFuY2VcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCIuL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCIuL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cERhdGFDb250cm9sIGZyb20gXCIuL0h0dHBEYXRhQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuaW50ZXJmYWNlIEh0dHBTZW5kRGF0YSB7XHJcbiAgICBhcGk6IEFwaUh0dHA7XHJcbiAgICBkYXRhPzogYW55O1xyXG4gICAgbWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nO1xyXG4gICAgaGVhZGVycz86IGFueVtdIHwgbnVsbDtcclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTk1MTlcdThCRUZcdTU2REVcdThDMDMgKi9cclxuICAgIGVycm9yPzogeyAoY29kZTogbnVtYmVyLCBkYXRhOiBhbnkpOiB2b2lkIH07XHJcbiAgICBiYXNlVXJsPzogc3RyaW5nO1xyXG4gICAgLyoqIFx1NTNEMVx1OEQ3N1x1OEJGN1x1NkM0Mlx1NTI0RCAqL1xyXG4gICAgYmVmb3JlPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTc3RURcdTk0RkVcdTYzQTVcdTYzQTdcdTUyMzZcdTU2NjhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBDb250cm9sIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IEh0dHBDb250cm9sO1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRGF0YTogSHR0cFNlbmREYXRhO1xyXG5cclxuICAgIC8qKiBcdTRFOEJcdTRFRjZcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgZXZlbnRNYXA6IE1hcDxzdHJpbmcsIFhNTEh0dHBSZXF1ZXN0PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBpbml0KHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSByZXNvbHZlXHJcbiAgICAgKiBAcGFyYW0gcmVqZWN0XHJcbiAgICAgKiBAcGFyYW0gYWQgXHU2NjJGXHU1NDI2XHU2NjJGXHU1RTdGXHU1NDRBXHU3Njg0XHU2NTcwXHU2MzZFXHU1MzRGXHU4QkFFXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVhocihyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbiwgYWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHhtbGh0dHAuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVIYW5kbGVyKEpTT04ucGFyc2UoeG1saHR0cC5yZXNwb25zZVRleHQpLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck9uZUluRXZlbnRNYXAoeG1saHR0cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4bWxodHRwLnJlc3BvbnNlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBKU09OLnBhcnNlKHhtbGh0dHAucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgJHt4bWxodHRwLnJlc3BvbnNlVGV4dH0gXHU4QkY3XHU5MUNEXHU4QkQ1YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVIYW5kbGVyKGQsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck9uZUluRXZlbnRNYXAoeG1saHR0cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF4bWxodHRwLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiA0MDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogXCJcdTY3MERcdTUyQTFcdTU2NjhcdTY3MkFcdTU0Q0RcdTVFOTRcdUZGMENcdThCRjdcdTkxQ0RcdThCRDVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck9uZUluRXZlbnRNYXAoeG1saHR0cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB4bWxodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYXJPbmVJbkV2ZW50TWFwKHhtbDogWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYXAuZm9yRWFjaCgoZSwgdikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUgPT0geG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNlbmQoZGF0YTogSHR0cFNlbmREYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhLm1ldGhvZCkgZGF0YS5tZXRob2QgPSBcInBvc3RcIjtcclxuICAgICAgICBpZiAoIWRhdGEucmVzcG9uc2VUeXBlKSBkYXRhLnJlc3BvbnNlVHlwZSA9IFwianNvblwiO1xyXG4gICAgICAgIGlmICghZGF0YS5iYXNlVXJsKSBkYXRhLmJhc2VVcmwgPSB0aGlzLmJhc2VVcmw7XHJcblxyXG4gICAgICAgIGxldCB1cmkgPSBkYXRhLmJhc2VVcmwgKyBkYXRhLmFwaTtcclxuXHJcbiAgICAgICAgbGV0IHNlbmREYXRhOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5kYXRhKS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5wdXNoKGAke2R9PSR7ZGF0YS5kYXRhW2RdfWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VuZERhdGFTdHJpbmcgPSBzZW5kRGF0YS5qb2luKFwiJlwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRNYXAuZ2V0KHVyaSArIHNlbmREYXRhU3RyaW5nKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhPy50eXBlID09IENvbmZpZ0dhbWUuQXBpVHlwZUFEKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeGhyID0gdGhpcy5jcmVhdGVYaHIocmVzb2x2ZSwgcmVqZWN0LCBhZCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlbmREYXRhID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5iZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYmVmb3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YS5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmhlYWRlcnMgPSBbXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbn1gXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBgJWMgPT0+IHNlbmQgJWMke2RhdGEuYXBpfSAlYyR7SlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhKX1gLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiM4MmNjZGQ7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6I2ViNGQ0Yjtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojZjhjMjkxO2ZvbnQtd2VpZ2h0OjcwMDtgXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRhdGEuYXBpKSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuSGludFZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJtOiB7IHRleHQ6IGBodHRwIFx1NTczMFx1NTc0MFx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QWAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJpLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XHJcbiAgICAgICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbn1gKTtcclxuXHJcbiAgICAgICAgICAgIHhoci5zZW5kKHNlbmREYXRhU3RyaW5nKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYXAuc2V0KHVyaSArIHNlbmREYXRhU3RyaW5nLCB4aHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGUsIHJlc29sdmU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKGUuY29kZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZW5kRGF0YT8uZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZERhdGEuZXJyb3IoZS5jb2RlLCBlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5lcnJvcihlLmNvZGUsIGUuZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYCVjIDw9PSBiYWNrICVjJHt0aGlzLnNlbmREYXRhLmFwaX0gYCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojYjhlOTk0O2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiM3OGUwOGY7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBlLmRhdGFcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgSHR0cERhdGFDb250cm9sLmZvcndhcmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiB0aGlzLnNlbmREYXRhLmFwaSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGUuZGF0YSxcclxuICAgICAgICAgICAgICAgIHJlc29sdmVFdmVudDogcmVzb2x2ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzSGFuZGxlcihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vICBBZGRMYW5kVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkTGFuZFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb3N0SWNvbiwgdGlwczpcIlx1NEVGN1x1NjgzQ1x1NTZGRVx1NjgwN1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29zdEljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvc3RGb250LCB0aXBzOlwiXHU0RUY3XHU2ODNDRm9udFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29zdEZvbnQ6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBpZDogbnVtYmVyOyBjYWxsOiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIHByaXZhdGUgbGFuZERhdGE6IFJld2FyZEN1cnJlbmN5QmFzZTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5kRGF0YSA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ1bmxvY2tfbGFuZF9jb3N0XCIpLnZhbHVlW1xyXG4gICAgICAgICAgICBMYW5kU2VydmljZS5saXN0LnNpemVcclxuICAgICAgICBdIGFzIFJld2FyZEN1cnJlbmN5QmFzZTtcclxuICAgICAgICB0aGlzLmNvc3RJY29uLnNraW4gPSB0aGlzLmxhbmREYXRhLm9iai5pY29uO1xyXG4gICAgICAgIHRoaXMuY29zdEZvbnQudmFsdWUgPSB0aGlzLmxhbmREYXRhLmNvdW50ICsgXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFkZExhbmRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29zdF9nb2xkXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmREYXRhLmNvdW50ID4gVXNlckluZm8uZ29sZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEub2JqLmlkID09IENvbmZpZ0dhbWUuZGlhbW9uZElkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5jb3VudCA+IFVzZXJJbmZvLmRpYW1vbmRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5NEJCXHU3N0YzXHU0RTBEXHU4REIzXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVW5sb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFkZExhbmRWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZF9idG5cIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVW5sb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vLyAgQnV5Vml0YWxpdHlWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXlWaXRhbGl0eVZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxhYmVsLCB0aXBzOlwiXHU0RUY3XHU2ODNDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxhYmVsOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUljb24sIHRpcHM6XCJcdTRFRjdcdTY4M0NpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9O1xyXG4gICAgcHJpdmF0ZSBjb3N0R29sZENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgb25PcGVuZWQoZTogeyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICBsZXQgY29zdEdvbGRDb3VudCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIpLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICB0aGlzLmNvc3RHb2xkQ291bnQgPSBjb3N0R29sZENvdW50O1xyXG4gICAgICAgIHRoaXMucHJpY2VMYWJlbC50ZXh0ID0gYFx1NEVGN1x1NjgzQ1x1RkYxQSR7Y29zdEdvbGRDb3VudH1gO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5QWRCdG5cIjpcclxuICAgICAgICAgICAgY2FzZSBcImJ1eUJ0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnZpdGFsaXR5ID49IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ2aXRhbGl0eUxpbWl0XCIpLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTRGNTNcdTUyOUJcdTVERjJcdTZFRTFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gXCJidXlCdG5cIiAmJiBVc2VySW5mby5nb2xkIDwgdGhpcy5jb3N0R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC52aXRhbGl0eUJ1eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwiYnV5QnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBnb2xkOiAwOyBkaWFtb25kOiAwOyBhZHZlcnRpc2VUaW1lczogMDsgdml0YWxpdHk6IDAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudml0YWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5CdXlWaXRhbGl0eVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5cclxuLy8gIEZpZWxkTGV2ZWxVcFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkTGV2ZWxVcFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxhYmVsLCB0aXBzOlwiXHU0RUY3XHU2ODNDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxhYmVsOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUljb24sIHRpcHM6XCJcdTRFRjdcdTY4M0NpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBvYmo6IExhbmRPYmo7IGNhbGw6IEZ1bmN0aW9uIH07XHJcblxyXG4gICAgb25PcGVuZWQoZTogeyBvYmo6IExhbmRPYmo7IGNhbGw6IEZ1bmN0aW9uIH0pIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBlO1xyXG4gICAgICAgIGxldCBuZXh0TGFuZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImxhbmRMZXZlbFwiKS5nZXQoZS5vYmoubGV2ZWwgKyAxKTtcclxuICAgICAgICB0aGlzLnByaWNlTGFiZWwudGV4dCA9IGBcdTRFRjdcdTY4M0NcdUZGMUEke25leHRMYW5kLmNvc3QuY291bnR9YDtcclxuICAgICAgICB0aGlzLnByaWNlSWNvbi5za2luID0gbmV4dExhbmQuY29zdC5vYmouaWNvbjtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cGdyYWRlQnRuXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cGdyYWRlQWRCdG5cIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVXBncmFkZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJnYXRoZXJcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEub2JqLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwidXBncmFkZUJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PSBcInVwZ3JhZGVBZEJ0blwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc0Rlc2NWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBhbmVsTm9kZSwgdGlwczpcIlx1NkVEQVx1NTJBOFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBwYW5lbE5vZGU6IExheWEuUGFuZWw7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxOb2RlLnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1Jld2FyZFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNSZXdhcmRWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppbnZpdGVCb3gsIHRpcHM6XCJcdTY1NzRcdTY1NzBcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGludml0ZUJveDogTGF5YS5Cb3g7XHJcbiAgICAvKiogQHByb3Age25hbWU6aW52aXRlSW5wdXQsIHRpcHM6XCJcdThGOTNcdTUxNjVcdTkwODBcdThCRjdcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGludml0ZUlucHV0OiBMYXlhLlRleHRJbnB1dDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxpc3QsIHRpcHM6XCJcdThGOTNcdTUxNjVcdTkwODBcdThCRjdcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlTGlzdDogTGF5YS5MaXN0O1xyXG5cclxuICAgIHByaXZhdGUgaW52aXRlTGlzdDogSW52aXRlRGF0YVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSByZXdhcmRWYWx1ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcHJvcG9ydGlvbjogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QuYXJyYXkgPSBuZXcgQXJyYXkoMyk7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW5lZChsaXN0OiBJbnZpdGVEYXRhW10gPSBbXSkge1xyXG4gICAgICAgIHRoaXMuaW52aXRlTGlzdCA9IGxpc3Q7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmludml0ZVBlb3BsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmludml0ZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZXdhcmRWYWx1ZSA9IChcclxuICAgICAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIkludml0YXRpb25fcmV3YXJkc1wiKS52YWx1ZSBhcyBSZXdhcmRDdXJyZW5jeUJhc2VcclxuICAgICAgICApLmNvdW50O1xyXG5cclxuICAgICAgICBjb25zdCB3aXRoZHJhd2FsID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxcIikudmFsdWUgYXMgc3RyaW5nW107XHJcbiAgICAgICAgdGhpcy5wcm9wb3J0aW9uID0gTnVtYmVyKHdpdGhkcmF3YWxbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1Jld2FyZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnZpdGVfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnd4U2hhcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN1Ym1pdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gKGUudGFyZ2V0IGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpdGhkcmF3KGkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU3M0IwXHJcbiAgICAgKiBAcGFyYW0gaVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB3aXRoZHJhdyhpOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlUmVjZWl2ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgaW5kZXg6IGkgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjNEMFx1NzNCMFx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlTGlzdFtpXS5yZWNlaXZlZFJld2FyZCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidG9wXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU3QjJDJHtpICsgMX1cdTRGNERgO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZV9ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkVmFsdWUgLyB0aGlzLnByb3BvcnRpb25cclxuICAgICAgICB9YDtcclxuXHJcbiAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX2V4dHJhY3RBY3RpdmUucG5nXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaW52aXRlTGlzdC5sZW5ndGggPiBpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmludml0ZUxpc3RbaV0ucmVjZWl2ZWRSZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfY2FzaERvbmUucG5nXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IGk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYzRDBcdTRFQTRcdTdFRDFcdTVCOUFcdTYyMTFcdTc2ODRcdTkwODBcdThCRjdcdTRFQkFcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnZpdGVJbnB1dC50ZXh0IHx8ICF0aGlzLmludml0ZUlucHV0LnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5MDgwXHU4QkY3XHU3ODAxXHU0RTBEXHU4MEZEXHU0RTNBXHU3QTdBXHVGRjAxXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRJbnZpdGVQZW9wbGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLmludml0ZUlucHV0LnRleHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5pbnZpdGVQZW9wbGUgPSB0aGlzLmludml0ZUlucHV0LnRleHQ7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1N0VEMVx1NUI5QVx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkZEJveCwgdGlwczpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWRkQm94OiBMYXlhLkJveDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTGlzdCwgdGlwczpcIlx1NTIxN1x1ODg2OFx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUxpc3Q6IExheWEuTGlzdDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1c2VyS2V5LCB0aXBzOlwiXHU3NTI4XHU2MjM3XHU1M0NCXHU2MEM1XHU3ODAxXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB1c2VyS2V5OiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmtleUlucHV0Tm9kZSwgdGlwczpcIlx1OTA4MFx1OEJGN1x1NzgwMVx1OEY5M1x1NTE2NVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUga2V5SW5wdXROb2RlOiBMYXlhLlRleHRJbnB1dDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRGcmllbmQsIHRpcHM6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0JcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZEZyaWVuZDogTGF5YS5JbWFnZTtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZW1wdHlfbGIsIHRpcHM6XCJcdTdBN0FcdTc2ODRcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGVtcHR5X2xiOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogMVx1NjYyRlx1NTk3RFx1NTNDQlx1NTIxN1x1ODg2OCAyIFx1NTJBMFx1NTk3RFx1NTNDQiAgM1x1NTIyMFx1OTY2NFx1NTk3RFx1NTNDQiAqL1xyXG4gICAgcHJpdmF0ZSB2aWV3U3RhdGU6IDEgfCAyIHwgMyA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBmcmllbmRzOiBGcmllbmREYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgZnJpZW5kc0xpc3Q6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKGQ6IEZyaWVuZExpc3REYXRhKSB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzID0gZC5saXN0O1xyXG4gICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSB0aGlzLmZyaWVuZHM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMuaXRlbVJlbmRlcik7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51c2VyS2V5LnRleHQgPSBgXHU2MjExXHU3Njg0XHU1M0NCXHU2MEM1XHU3ODAxXHVGRjFBJHtVc2VySW5mby5rZXl9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzRW1wdHkoKSB7XHJcbiAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gIXRoaXMuaXRlbUxpc3QuYXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTGlzdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmFwcGx5SW5nICogMTAwMDAwIC0gYS5hcHBseUluZyAqIDEwMDAwMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGl0ZW1SZW5kZXIoY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZyaWVuZHNMaXN0W2ldO1xyXG5cclxuICAgICAgICBsZXQgbmV3Qm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm5ld19ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGhlYXJ0Qm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImhlYXJ0X2JveFwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBnb1BsYXlCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZ29fcGxheV9idG5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgYXBwbHlCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYXBwbHlfYnRuXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGRlbEJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZWxfYnRuXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaGVhcnRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBkZWxCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5hdmF0YXIpIChjZWxsLmdldENoaWxkQnlOYW1lKFwiaGVhZFwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZGF0YS5hdmF0YXI7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBkYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibHZcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IChkYXRhLm9yZGVyTGV2ZWwgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChoZWFydEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gKGRhdGEuaW50aW1hY3kgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICBkYXRhLmdhaW5EaWFtb25kICsgXCJcIjtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZWxfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgIGdvUGxheUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnZpZXdTdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBhcHBseUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRlbEJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IDEgfHwgdGhpcy52aWV3U3RhdGUgPT0gMykge1xyXG4gICAgICAgICAgICAvL1x1NzUzM1x1OEJGNyBcdTRFMkRcclxuICAgICAgICAgICAgaWYgKGRhdGEuYXBwbHlJbmcpIHtcclxuICAgICAgICAgICAgICAgIG5ld0JveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgKG5ld0JveC5nZXRDaGlsZEJ5TmFtZShcInBhc3RfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgaGVhcnRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZ29QbGF5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vXHU1REYyXHU3RUNGXHU2NjJGXHU1OTdEXHU1M0NCXHJcbiAgICAgICAgICAgICAgICBuZXdCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRfZnJpZW5kXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMyB8fCB0aGlzLnZpZXdTdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5oZWlnaHQgPSA5MTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRGcmllbmQuc2tpbiA9IGBnYW1lL2ltZ19hZGRCdG4ucG5nYDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDU5MDsgLy85MTRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEZyaWVuZC5za2luID0gYGdhbWUvaW1nX2ZyaWVuZEJ0bi5wbmdgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlfbGIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGBnYW1lL2ltZ19oYW5nb3V0LnBuZ2BcclxuICAgICAgICAgICAgICAgIC8vIGltZ19mcmllbmRCdG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVsX2ZyaWVuZFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IDMpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5oZWlnaHQgPSA5MTQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGcmllbmQuc2tpbiA9IGBnYW1lL2ltZ19mcmllbmRCdG4ucG5nYDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVzY19idG5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZXdhcmRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5SZXdhcmQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29weV9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29weSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWFyY2hfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhcHBseV9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlFdmVudChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwYXN0X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxvd0ZyaWVuZChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWxfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUZyaWVuZChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19wbGF5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpdEZyaWVuZChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9wZW5SZXdhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEludml0ZUxpc3QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IEludml0ZUxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzUmV3YXJkVmlldywgeyBwYXJtOiBkLmxpc3QgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRlx1OTVFRVx1NTk3RFx1NTNDQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHZpc2l0RnJpZW5kKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcodHJ1ZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcblxyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZFZpc2l0LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kSWQ6IGRhdGEudWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5nb19mcmllbmRfaG9tZSwgZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjIwXHU5NjY0XHU1OTdEXHU1M0NCXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGVsZXRlRnJpZW5kKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiXHU3ODZFXHU4QkE0XHU4OTgxXHU1MjIwXHU5NjY0XHU1OTdEXHU1M0NCXHU1NDE3XHVGRjFGXCIsXHJcbiAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFTb3VyY2UgYXMgRnJpZW5kRGF0YTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmREZWxldGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5mcmllbmRzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmllbmRzW3hdLnVpZCA9PSBkYXRhLnVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kcy5zcGxpY2UoeCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWxDYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NTk3RFx1NTNDQlx1NzUzM1x1OEJGN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFsbG93RnJpZW5kKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kQWxsb3csXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJpZW5kSWQ6IGRhdGEudWlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5hcHBseUluZyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NTMzXHU4QkY3XHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXBwbHlFdmVudCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEFwcGx5LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NURGMlx1NTNEMVx1OTAwMVx1NkZDMFx1NjBDNVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NDFDXHU3RDIyXHU1OTdEXHU1M0NCXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlYXJjaCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMua2V5SW5wdXROb2RlLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU1M0NCXHU2MEM1XHU3ODAxXHU0RTBEXHU4MEZEXHU0RTNBXHU3QTdBXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmtleUlucHV0Tm9kZS50ZXh0ID09IFVzZXJJbmZvLmtleSkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjQxQ1x1N0QyMlx1ODFFQVx1NURGMVx1NUU3Mlx1NTU2NVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZFNlYXJjaCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IHRoaXMua2V5SW5wdXROb2RlLnRleHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogRnJpZW5kRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzTGlzdCA9IFtkXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvcHkoKSB7XHJcbiAgICAgICAgbGV0IGE6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICBhLnZhbHVlID0gVXNlckluZm8ua2V5O1xyXG4gICAgICAgIGEuc2VsZWN0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgICAgIGEucmVtb3ZlKCk7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTU5MERcdTUyMzZcdTYyMTBcdTUyOUZcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaW50Vmlld0RhdGEge1xyXG4gICAgLyoqIFx1NjU4N1x1NUI1N1x1NTE4NVx1NUJCOSAqL1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgLyoqIFx1Nzg2RVx1OEJBNFx1NTZERVx1OEMwMyAqL1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1NTNENlx1NkQ4OFx1NTZERVx1OEMwMyAqL1xyXG4gICAgY2FuY2VsQ2FsbD86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG4vL2RlZmF1bHQgY2xhc3MgSGludFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaW50VmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGV4dCwgdGlwczpcIlx1NTE4NVx1NUJCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGV4dDogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb25maXJtQnRuLCB0aXBzOlwiXHU3ODZFXHU4QkE0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjb25maXJtQnRuOiBMYXlhLkltYWdlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNhbmNlbEJ0biwgdGlwczpcIlx1NTNENlx1NkQ4OFx1NjMwOVx1OTRBRVx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY2FuY2VsQnRuOiBMYXlhLkltYWdlO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogSGludFZpZXdEYXRhO1xyXG5cclxuICAgIG9uT3BlbmVkKGQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG4gICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy5kYXRhPy50ZXh0IHx8IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNhbmNlbENhbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsICYmIHRoaXMuZGF0YS5jYW5jZWxDYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUJ0bi54ID0gMjUyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUJ0bi54ID0gNDU4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNhbmNlbFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FuY2VsQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYW5jZWxDYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkhpbnRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29uZmlybVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkhpbnRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRCYXIsIHRpcHM6XCJsb2FkIGJhclwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9hZEJhcjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9hZEJveCwgdGlwczpcIlx1NTJBMFx1OEY3RFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9hZEJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvZ2luQm94LCB0aXBzOlwiXHU3NjdCXHU5NjQ2XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb2dpbkJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaXZhY3lCb3gsIHRpcHM6XCJcdTk2OTBcdTc5QzFcdTUzNEZcdThCQUVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaXZhY3lCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcml2YWN5Q2hlY2tJY29uLCB0aXBzOlwiXHU5NjkwXHU3OUMxaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpdmFjeUNoZWNrSWNvbjogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdThGREJcdTVFQTZcdTY3NjFcdTlFRDhcdThCQTRcdTVCQkRcdTVFQTYgKi9cclxuICAgIHByaXZhdGUgbG9hZEJhck9sZFdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIG9uT3BlbmVkKGQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG5cclxuICAgICAgICBpZiAoTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCk/LmlzTG9naW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbihmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhd2FrZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubG9hZExhYmVsKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5sb2FkTGFiZWwudGV4dCA9IFwiTG9hZC4uLi4wJVwiO1xyXG4gICAgICAgIHRoaXMubG9hZEJhck9sZFdpZHRoID0gdGhpcy5sb2FkQmFyLndpZHRoO1xyXG4gICAgICAgIHRoaXMubG9hZEJhci53aWR0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpbl9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoZWNrX2JveFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcml2YWN5Q2hlY2tJY29uLnZpc2libGUgPSAhdGhpcy5wcml2YWN5Q2hlY2tJY29uLnZpc2libGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByaXZhY3lfbGJcIjpcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAucHJpdmFjeUFncmVlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgbG9naW4oaXNXeDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBpZiAoTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkudG9rZW4pIHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sb2dpblRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoY29kZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IE5ldEluaXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB0aGlzLmRhdGEuY2FsbChkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAubG9naW5TdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXNXeCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnByaXZhY3lDaGVja0ljb24udmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1OEJGN1x1OTYwNVx1OEJGQlx1MzAwQVx1NzUyOFx1NjIzN1x1OTY5MFx1NzlDMVx1NTM0Rlx1OEJBRVx1MzAwQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0ZXN0SyA9IGxvY2F0aW9uLnNlYXJjaC5tYXRjaCgvXFw/aWQ9KC4rKS8pLFxyXG4gICAgICAgICAgICAgICAgdGVzdEtlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRlc3RLICYmIHRlc3RLLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRlc3RLZSA9IHRlc3RLWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB3eE9wZW5JZCA9IHRlc3RLZSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lID0gXCJcIixcclxuICAgICAgICAgICAgICAgIGF2YXRhciA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChpc1d4ICYmICF3eE9wZW5JZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAud3hMb2dpbixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4T3BlbklkID0gZGF0YS5kYXRhW1wib3BlbmlkXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhciA9IGRhdGEuZGF0YVtcImljb251cmxcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWUgPSBkYXRhLmRhdGFbXCJuYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghd3hPcGVuSWQpIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2NzJBXHU4M0I3XHU1M0Q2XHU1MjMwXHU1RkFFXHU0RkUxaWRcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcml2YWN5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sb2dpbixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImxvZ2luXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWNjb3VudDogaXNXeCA/IG51bGwgOiB0aGlzLnVzZXJJbnB1dC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eElkOiB3eE9wZW5JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoY29kZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkOiBOZXRJbml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkgdGhpcy5kYXRhLmNhbGwoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB1cmk6IEFwcEV2ZW50TWFwLnd4TG9naW5TdWNjZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLmlzRmlyc3RUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5yZWdpc3RlclN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmxvZ2luU3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRQcm9ncmVzcyh2KSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQmFyLndpZHRoID0gdiAqIHRoaXMubG9hZEJhck9sZFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGREaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9mZihFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgdGhpcywgdGhpcy5sb2FkUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcInNyYy9jb21tb24vVG9vbHNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vL2RlZmF1bHQgY2xhc3MgTWFpbERlc2NWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbERlc2NWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjZW50ZXJQYW5lbCwgdGlwczpcIlx1NEUyRFx1OTVGNFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY2VudGVyUGFuZWw6IExheWEuUGFuZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGl0bGUsIHRpcHM6XCJcdTk4NzZcdTY4MDdcdTk4OThcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRpdGxlOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvc3RMYiwgdGlwczpcIlx1NTA3N1x1OEQ3MFx1NEU4NlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9zdExiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJhY2tMYiwgdGlwczpcIlx1NjI3RVx1NTZERVx1Njc2NVx1NzY4NFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYmFja0xiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJvdHRvbUxiLCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21MYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtLCB0aXBzOlwiXHU3MjY5XHU1NEMxXHU4MjgyXHU3MEI5XCIsIHR5cGU6UHJlZmFifSovXHJcbiAgICBwcml2YXRlIGl0ZW06IExheWEuUHJlZmFiO1xyXG5cclxuICAgIHByaXZhdGUgbWFpbElkOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjYWxsOiBGdW5jdGlvbjtcclxuXHJcbiAgICBvbk9wZW5lZChkOiB7IGRhdGE6IE1haWxSZXR1cm5EYXRhOyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGQuZGF0YTtcclxuICAgICAgICB0aGlzLmNhbGwgPSBkLmNhbGw7XHJcbiAgICAgICAgdGhpcy5tYWlsSWQgPSBkLmRhdGEuaWQ7XHJcbiAgICAgICAgdGhpcy5jZW50ZXJQYW5lbC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy50aXRsZS50ZXh0ID0gYCR7ZGF0YS5tZXNzYWdlfVx1NkY1Q1x1NTE2NVx1NEU4Nlx1NEY2MFx1NzY4NFx1ODNEQ1x1NTczMGA7XHJcbiAgICAgICAgY29uc29sZS5sb2coZCk7XHJcbiAgICAgICAgY29uc3QgaXRlbXNMb3N0OiB7IGlkOiBudW1iZXI7IGFtb3VudDogbnVtYmVyIH1bXSA9IFtdLFxyXG4gICAgICAgICAgICBpdGVtc0JhY2s6IHsgaWQ6IG51bWJlcjsgYW1vdW50OiBudW1iZXIgfVtdID0gW107XHJcbiAgICAgICAgbGV0IGxvc3REaWFtb25kID0gMCxcclxuICAgICAgICAgICAgbG9zdEdvbGQgPSAwO1xyXG4gICAgICAgIC8vIGE6YjpjICBhPXR5cGUgMVx1OEQyN1x1NUUwMSAyIFx1NjkwRFx1NzI2OVxyXG5cclxuICAgICAgICBUb29scy5wYXJzZVN0cmluZyhkYXRhLml0ZW1zTG9zdCkubWFwKChfZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIF9kID0gVG9vbHMucGFyc2VTdHJpbmcoX2QsIFwiOlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coX2QpO1xyXG4gICAgICAgICAgICBpZiAoX2RbMF0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbG9zdERpYW1vbmQgKz0gTnVtYmVyKF9kWzJdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGhhcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpdGVtc0xvc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuaWQgPT0gX2RbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaGFzKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc0xvc3QucHVzaCh7IGlkOiBfZFsxXSwgYW1vdW50OiBOdW1iZXIoX2RbMl0pIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZW1zTG9zdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zTG9zdFt4XS5pZCA9PSBfZFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zTG9zdFt4XS5hbW91bnQgKz0gTnVtYmVyKF9kWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBUb29scy5wYXJzZVN0cmluZyhkYXRhLml0ZW1zKS5tYXAoKF9kOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgX2QgPSBUb29scy5wYXJzZVN0cmluZyhfZCwgXCI6XCIpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGhhcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpdGVtc0JhY2suZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuaWQgPT0gX2RbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaGFzKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc0JhY2sucHVzaCh7IGlkOiBfZFsxXSwgYW1vdW50OiBOdW1iZXIoX2RbMl0pIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZW1zQmFjay5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zQmFja1t4XS5pZCA9PSBfZFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zQmFja1t4XS5hbW91bnQgKz0gTnVtYmVyKF9kWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgeUFkZCA9IDAsXHJcbiAgICAgICAgICAgIF94ID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZW1zTG9zdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbU5vZGU6IExheWEuQm94ID0gdGhpcy5pdGVtLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoX3ggPiAyICYmICF5QWRkKSB7XHJcbiAgICAgICAgICAgICAgICB5QWRkKys7XHJcbiAgICAgICAgICAgICAgICBfeCA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh5QWRkICYmIF94ID4gMikge1xyXG4gICAgICAgICAgICAgICAgeUFkZCsrO1xyXG4gICAgICAgICAgICAgICAgX3ggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtTm9kZS54ID0gMjMwICsgX3ggKiAxOTA7XHJcbiAgICAgICAgICAgIGl0ZW1Ob2RlLnkgPSAxMDUgKyB5QWRkICogOTU7XHJcbiAgICAgICAgICAgIF94Kys7XHJcbiAgICAgICAgICAgIGxldCBwbGFudCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChpdGVtc0xvc3RbeF0uaWQpO1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGljb24uc2tpbiA9IHBsYW50Lmljb247XHJcbiAgICAgICAgICAgIGljb24uc2NhbGUoMC43LCAwLjcpO1xyXG4gICAgICAgICAgICBpY29uLmFuY2hvclggPSAwLjU7XHJcbiAgICAgICAgICAgIChpdGVtTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgeCR7aXRlbXNMb3N0W3hdLmFtb3VudH1gO1xyXG4gICAgICAgICAgICBwbGFudC5nYWluLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkLm9iai5pZCA9PSBDb25maWdHYW1lLmRpYW1vbmRJZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbG9zdEdvbGQgKz0gZC5jb3VudCAqIGl0ZW1zTG9zdFt4XS5hbW91bnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jZW50ZXJQYW5lbC5hZGRDaGlsZChpdGVtTm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgeUFkZEJhY2sgPSAwO1xyXG4gICAgICAgIF94ID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGl0ZW1zQmFjay5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbU5vZGU6IExheWEuSW1hZ2UgPSB0aGlzLml0ZW0uY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChfeCA+IDEgJiYgIXlBZGRCYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB5QWRkQmFjaysrO1xyXG4gICAgICAgICAgICAgICAgX3ggPSAtMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeUFkZEJhY2sgJiYgX3ggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB5QWRkQmFjaysrO1xyXG4gICAgICAgICAgICAgICAgX3ggPSAtMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtTm9kZS54ID0gNDIwICsgX3ggKiAxOTA7XHJcbiAgICAgICAgICAgIGl0ZW1Ob2RlLnkgPSAyMDggKyB5QWRkICogOTUgKyB5QWRkQmFjayAqIDk1O1xyXG4gICAgICAgICAgICBfeCsrO1xyXG4gICAgICAgICAgICB0aGlzLmNlbnRlclBhbmVsLmFkZENoaWxkKGl0ZW1Ob2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9zdExiLnkgPSAxMTQ7XHJcbiAgICAgICAgdGhpcy5iYWNrTGIueSA9IDIxOCArIHlBZGQgKiA5NTtcclxuICAgICAgICB0aGlzLmJvdHRvbUxiLnkgPSAzMDEgKyB5QWRkICogOTUgKyB5QWRkQmFjayAqIDk1O1xyXG4gICAgICAgIHRoaXMuYm90dG9tTGIudGV4dCA9IGBcdTUxNzFcdThCQTFcdTYzNUZcdTU5MzFcdTRFODYke2xvc3RHb2xkfVx1OTFEMVx1NUUwMVx1RkYwQyR7bG9zdERpYW1vbmR9XHU5NEJCXHU3N0YzYDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk1haWxEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWxldGVcIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5tYWlsRGVsZXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlkOiB0aGlzLm1haWxJZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGwodGhpcy5tYWlsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuTWFpbERlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuXHJcbi8vICBNYWlsVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsaXN0LCB0aXBzOlwiXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTplbXB0eV9sYiwgdGlwczpcIlx1N0E3QVx1NzY4NFx1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZW1wdHlfbGI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbGlzdERhdGE6IE1haWxSZXR1cm5EYXRhW10gPSBbXTtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW5lZChsaXN0OiBNYWlsUmV0dXJuRGF0YVtdID0gW10pIHtcclxuICAgICAgICB0aGlzLmxpc3REYXRhID0gbGlzdDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3REYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaXN0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLmxpc3QuYXJyYXkgPSB0aGlzLmxpc3REYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIChhLnJlYWQgPyAwIDogMTAwMDAwICsgYi5jcmVhdGVUaW1lKSAtIChiLnJlYWQgPyAwIDogMTAwMDAwICsgYS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGIuY3JlYXRlVGltZSAtIChiLnJlYWQgPyAxMDAwMDAwIDogMCkgLSAoYS5jcmVhdGVUaW1lIC0gKGEucmVhZCA/IDEwMDAwMDAgOiAwKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW1wdHlfbGIudmlzaWJsZSA9ICF0aGlzLmxpc3QuYXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVySXRlbShjZWxsOiBMYXlhLkltYWdlLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMubGlzdERhdGFbaW5kZXhdO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IFwiXHU3Q0ZCXHU3RURGXHU5MEFFXHU0RUY2XCI7XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICBjZWxsLmdldENoaWxkQnlOYW1lKFwiZGVzY1wiKSBhcyBMYXlhLkxhYmVsXHJcbiAgICAgICAgKS50ZXh0ID0gYCR7ZGF0YS5tZXNzYWdlfVx1NkY1Q1x1NTE2NVx1ODNEQ1x1NTczMFx1NTA3N1x1ODNEQyxcdTg4QUJcdTcyRDdcdTcyRDdcdTUzRDFcdTczQjBcdTVFNzZcdThGRkRcdTUyQTBcdTU2REVcdTRFODZ+fmA7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtuZXcgRGF0ZShcclxuICAgICAgICAgICAgZGF0YS5jcmVhdGVUaW1lXHJcbiAgICAgICAgKS50b0xvY2FsZVN0cmluZyhcInpoLUNOXCIsIHsgaG91cjEyOiBmYWxzZSB9KX1gO1xyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJlYWRfaWNvblwiKSBhcyBMYXlhLkltYWdlKS52aXNpYmxlID0gIWRhdGEucmVhZDtcclxuXHJcbiAgICAgICAgY2VsbC5kYXRhU291cmNlID0gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQubmFtZS5pbmRleE9mKFwiaXRlbVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubWFpbFJlYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZS50YXJnZXRbXCJkYXRhU291cmNlXCJdLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXS5yZWFkID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5NYWlsRGVzY1ZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZS50YXJnZXRbXCJkYXRhU291cmNlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKG1haWxJZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxpc3REYXRhLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhW3hdLmlkID09IG1haWxJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YS5zcGxpY2UoeCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuTWFpbFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcInNyYy9jb21tb24vVG9vbHNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSwgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGFudERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBNYWluVmlldywgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCJzcmMvdmlldy9NYWluVmlld1wiO1xyXG5pbXBvcnQgeyBTaG9wVmlld0RhdGEgfSBmcm9tIFwic3JjL3ZpZXcvU2hvcFZpZXdcIjtcclxuXHJcbi8vICBGaWVsZENvbXBvbmVudCBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuLyoqXHJcbiAqIFx1NzUzMFx1NTczMFx1N0VDNFx1NEVGNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OWljb24gKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgaWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU4MjgyXHU3MEI5ICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGZpZWxkTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU2NzA5XHU2OTBEXHU3MjY5XHU2NUY2XHU3Njg0XHU5NjM0XHU1RjcxICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHNoYWRvdzogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmllbGRFbXB0eVJlcywgdGlwczpcIlx1ODlFM1x1OTUwMVx1NTQwRVx1NTcxRlx1NTczMFx1N0VCOVx1NzQwNlwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGZpZWxkRW1wdHlSZXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogXHU3QjQ5XHU3RUE3XHU1NkZFXHU3MjQ3ICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGx2Tm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1MDEyXHU4QkExXHU2NUY2XHU1QkI5XHU1NjY4Ki9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgdGltZUJveDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogXHU1MDEyXHU4QkExXHU2NUY2bGFiZWwgKi9cclxuICAgIHByaXZhdGUgY291bnREb3duTGI6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOGljb25cdTg4QzVcdTk5NzAgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU4OEM1XHU5OTcwICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHVwQW5pOiBMYXlhLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnVubG9ja0ljb24sIHRpcHM6XCJcdTYyRDNcdTVDNTVcdTU3MUZcdTU3MzBpY29uXHU1NzMwXHU1NzQwXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgdW5sb2NrSWNvbjogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaWVsZElkLCB0aXBzOlwiXHU1NzFGXHU1NzMwaWRcIiwgdHlwZTpOdW1iZXIsfSovXHJcbiAgICBmaWVsZElkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU2RDZFXHU1MkE4XHU1MkE4XHU3NTNCICovXHJcbiAgICBwcml2YXRlIHRvcFN0YXRlSWNvblR3ZWVuOiBMYXlhLlRpbWVMaW5lO1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OVx1NTJBOFx1NzUzQiAqL1xyXG4gICAgcHJpdmF0ZSBwbGFudEljb25Ud2VlbjogTGF5YS5UaW1lTGluZTtcclxuXHJcbiAgICAvKiogXHU1RUZBXHU3QjUxXHU0RTJEICovXHJcbiAgICBidWlsZEluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1NTcyOFx1NTkxNlx1OTc2MiAqL1xyXG4gICAgaXNPdXRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1NTNFRlx1NTA3NyAqL1xyXG4gICAgY2FuU3RlYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTg4QUJcdTUwNzdcdTRFQkFcdTc2ODR1aWQgKi9cclxuICAgIHN0ZWFsVWlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBkYXRhOiBMYW5kT2JqO1xyXG5cclxuICAgIG1haW5WaWV3Q29tOiBNYWluVmlldztcclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIGxhbmRMaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPjtcclxuICAgIC8qKiBcdTYyMTBcdTcxOUZcdTc2ODRcdTY1RjZcdTk1RjQgKi9cclxuICAgIHByaXZhdGUgbWF0dXJlVGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZE5vZGUgPSA8TGF5YS5JbWFnZT50aGlzLm93bmVyO1xyXG4gICAgICAgIHRoaXMuY291bnREb3duTGIgPSB0aGlzLnRpbWVCb3guZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudERvd25MYlwiKSBhcyBhbnk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmljb24uc2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwQW5pLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwQW5pLm9uKExheWEuRXZlbnQuQ09NUExFVEUsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cEFuaS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfZmllbGQpXHJcbiAgICB1cGRhdGVEYXRhKGRhdGE/OiB7IGxpc3Q6IE1hcDxudW1iZXIsIExhbmRPYmo+IH0pIHtcclxuICAgICAgICBpZiAoZGF0YT8ubGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0ID0gZGF0YS5saXN0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QgPSBMYW5kU2VydmljZS5saXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi55ID0gMTY0O1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROb2RlLnNraW4gPSB0aGlzLmZpZWxkRW1wdHlSZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24oQm9vbGVhbih0aGlzLmRhdGEucHJvZHVjdElkKSk7XHJcbiAgICAgICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkICYmIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCAqIDEwMDAgKyBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgLy9cdTYyMTBcdTk1N0ZcdTRFMkRcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YS5wcm9kdWN0SWQpLmdyb3dpbmdJY29uO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVJY29uU2tpbigzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZE5vZGUuc2tpbiA9IGBtYWluX3NjZW5lL2ltZ193YXN0ZWxhbmQucG5nYDtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNraW4gPSB0aGlzLnVubG9ja0ljb247XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi55ID0gMTEzO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4uY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFaWNvblx1NzY4NFx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dJY29uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmljb24udmlzaWJsZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTcyQjZcdTYwMDFpY29uXHU3RUI5XHU3NDA2XHJcbiAgICAgKiBAcGFyYW0gc2tpblR5cGUgMSBcdTZENDdcdTZDMzRcdTUyQTBcdTkwMUZcdTcyQjZcdTYwMDEgMiBcdTVFRkFcdTdCNTFcdTcyQjZcdTYwMDEgMyBcdTYyMTBcdTcxOUZcdTcyQjZcdTYwMDFcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGVJY29uU2tpbihza2luVHlwZTogMSB8IDIgfCAzKSB7XHJcbiAgICAgICAgc3dpdGNoIChza2luVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19zcGVlZFVwLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2xhbmRVcGRhdGVCdG4yLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2hhcnZlc3QucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk4NzZcdTkwRThpY29uXHU1MkE4XHU3NTNCXHJcbiAgICAgKi9cclxuICAgIHRvcFN0YXRlSWNvbkFuaShwbGF5OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24ueSA9IC0xMDc7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRvcFN0YXRlSWNvblR3ZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4gPSBMYXlhLlRpbWVMaW5lLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24sXHJcbiAgICAgICAgICAgICAgICB7IHk6IHRoaXMudG9wU3RhdGVJY29uLnkgLSA1MCB9LFxyXG4gICAgICAgICAgICAgICAgODAwLFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICApLnRvKHRoaXMudG9wU3RhdGVJY29uLCB7IHk6IHRoaXMudG9wU3RhdGVJY29uLnkgfSwgODAwKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RlYWxVaWQgJiYgIXRoaXMuZGF0YT8uY2FuU3RlYWwpIHtcclxuICAgICAgICAgICAgcGxheSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gcGxheTtcclxuICAgICAgICBpZiAocGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuLnJlc3VtZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTY1RjZcdTk1RjRcdTVCQjlcdTU2NjhcdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93VGltZUJveChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU5NjM0XHU1RjcxXHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1NoYWRvd0ljb24oc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmFjdGl2ZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY5MERcdTcyNjlcdTUyQThcdTc1M0JcdTY0QURcdTY1M0VcclxuICAgICAqIEBwYXJhbSBwbGF5XHJcbiAgICAgKi9cclxuICAgIHBsYW50SWNvbkFuaShwbGF5OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYW50SWNvblR3ZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4gPSBMYXlhLlRpbWVMaW5lLnRvKHRoaXMuaWNvbiwgeyBza2V3WDogMyB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMuaWNvbiwgeyBza2V3WDogLTMgfSwgMjAwMClcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLmljb24sIHsgc2tld1g6IDAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaWNvbi5za2V3WCA9IDA7XHJcblxyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoTWF0aC5yYW5kb20oKSAqIDEwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucGxhbnRJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5wbGFudEljb25Ud2Vlbi5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNvdW50RG93bigpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93bkxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPSBNYXRoLmNlaWwoKHRoaXMubWF0dXJlVGltZSAtIERhdGUubm93KCkpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0IDwgMCkgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duTGIudGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NjIxMFx1NzE5RiBcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNraW4gPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQodGhpcy5kYXRhPy5wcm9kdWN0SWQpPy5tYXR1cmVJY29uO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnVpbGRJbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGVJY29uU2tpbigzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU3QjQ5XHU3RUE3XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlTGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5sdk5vZGUuc2tpbiA9IGBtYWluX3NjZW5lL2ltZ19sZXZlbCR7dGhpcy5kYXRhLmxldmVsfS5wbmdgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MkEwXHU5MDFGXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLmxhbmRfc3BlZWRfdXApXHJcbiAgICBwcml2YXRlIHNwZWVkVXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YT8ubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0IC09IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJhbGxfc3BlZWRfdXBfdGltZVwiKVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ICogMTAwMCArIERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU3QTdBXHU1NzFGXHU1NzMwXHJcbiAgICAgKi9cclxuICAgIGNsZWFyRmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wcm9kdWN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaWNvbi5za2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNsaWNrKCkge1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZWFsRm9vZCh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIC8vXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU0RThCXHU0RUY2XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1aWxkSW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVGFibGVBbmFseXplLnRhYmxlKFwibGFuZExldmVsXCIpLmdldCh0aGlzLmRhdGEubGV2ZWwgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GaWVsZExldmVsVXBWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sZXZlbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnR1ZGlzaGVuZ2ppKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwQW5pLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBBbmkucGxheSgwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NkVFMVx1N0VBN1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYFx1NURGMlx1NkVFMVx1N0VBN2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1MkEwXHU5MDFGXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TcGVlZFVwVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS51cGRhdGVBbGxTdGF0ZUljb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLmlzRmlyc3RUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9ndWlkX2hhbmQsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5tYWluVmlld0NvbS5vd25lciBhcyBMYXlhLkJveCkuZ2xvYmFsVG9Mb2NhbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkJveCkubG9jYWxUb0dsb2JhbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuUG9pbnQoMzAwLCAxNjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20ub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS51cGRhdGVBbGxTdGF0ZUljb24odGhpcy5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU2NTM2XHU4M0I3XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGFudEFtb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmQgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQgPSB0aGlzLmRhdGEucHJvZHVjdElkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kR2F0aGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJnYXRoZXJcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29sZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYW1vbmQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZlcnRpc2VUaW1lczogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFudEFtb3VudCA9IGQuYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UuYWRkKHByb2R1Y3RJZCwgZC5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3Muc2hvdWNhaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZCA9IGQucmV3YXJkRGlhbW9uZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTY1MzZcdTgzQjdcdTc2ODRcdTY5MERcdTcyNjlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxhbnRPYmogPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQocHJvZHVjdElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdDogYW55W10gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBwbGFudE9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcGxhbnRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHU4M0I3XHU1Rjk3XHU3Njg0XHU5NEJCXHU3N0YzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJld2FyZERpYW1vbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ0dhbWUuZGlhbW9uZElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHJld2FyZERpYW1vbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXRGbG9hdFJld2FyZE9ialxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJld2FyZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwbGFudE9iai5nYWluLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzd2l0Y2ggKGQub2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgQ29uZmlnR2FtZS5kaWFtb25kSWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBVc2VySW5mby5kaWFtb25kICs9IGQuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2FzZSBDb25maWdHYW1lLmdvbGRJZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFVzZXJJbmZvLmdvbGQgKz0gZC5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uaXNGaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uaXNGaXJzdFRpbWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9cdTc5Q0RcdTgzRENcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcm06IDxTaG9wVmlld0RhdGE+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFybTogeyBsYW5kSWQ6IHRoaXMuZmllbGRJZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZDogUGxhbnREYXRhQmFzZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKS5wcm9kdWN0SWQgPSBkLmJhc2UuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpLm1hdHVyZVRpbWVMZWZ0ID0gZC5iYXNlLm1hdHVyZV90aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gZC5iYXNlLm1hdHVyZV90aW1lICogMTAwMCArIERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy56aG9uZ3poaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbih0aGlzLmRhdGEuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uaXNGaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfZ3VpZF9oYW5kLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm1haW5WaWV3Q29tLm93bmVyIGFzIExheWEuQm94KS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5Cb3gpLmxvY2FsVG9HbG9iYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuUG9pbnQoMzAwLCAxNjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20ub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cdTg5RTNcdTk1MDFcdTU3MUZcdTU3MzBcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkFkZExhbmRWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZmllbGRJZCxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHVyZVRpbWVMZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYW5kU2VydmljZS5hZGRMYW5kKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUhpdExhbmRBZGQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MDc3XHU4M0RDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgc3RlYWxGb29kKGRhdGE6IExhbmRPYmopIHtcclxuICAgICAgICBpZiAoIWRhdGEucHJvZHVjdElkIHx8IGRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblN0ZWFsIHx8ICh0aGlzLnN0ZWFsVWlkICYmICF0aGlzLmRhdGE/LmNhblN0ZWFsKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NURGMlx1N0VDRlx1NEUwRFx1NTNFRlx1NTA3N1wiKTtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTdFRDlcdTYyMTFcdTc1NTlcdTcwQjlcdTU0MjdcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5nb3VqaWFvc2hlbmcpO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAvL1x1NTA3N1x1ODNEQ1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTdGVhbCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wibGFuZFN0ZWFsXCJdPntcclxuICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIHVpZDogdGhpcy5zdGVhbFVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFudElkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdml0YWxpdHk6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAvKiogXHU5ODlEXHU1OTE2XHU1OTU2XHU1MkIxICovXHJcbiAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gZC52aXRhbGl0eTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmFkZCh0aGlzLmRhdGEucHJvZHVjdElkLCBkLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5zaG91Y2FpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTY1MzZcdTgzQjdcdTc2ODRcdTY5MERcdTcyNjlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXdhcmRMaXN0OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkLnBsYW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KGQucGxhbnRJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogZC5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTg5RFx1RkYwQ1x1ODhBQlx1NzJEN1x1NTRBQ1x1NEU4Nn5+flx1NkNBMVx1NTA3N1x1Nzc0MH5cIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1x1OTg5RFx1NTkxNlx1NzY4NFx1OTRCQlx1NzdGM1x1NTk1Nlx1NTJCMVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkLnJld2FyZERpYW1vbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZGlhbW9uZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBkLnJld2FyZERpYW1vbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXdhcmRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wbGFudEljb25Ud2VlbiA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgRmllbGRDb21wb25lbnQgZnJvbSBcInNyYy9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSwgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vKipcclxuICogXHU5OERFXHU5MUQxXHU1RTAxXHU2NTcwXHU5MUNGXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdldEZsb2F0UmV3YXJkT2JqIHtcclxuICAgIC8qKiBcdThENzdcdTcwQjlcdTUzQzJcdTgwMDNcdTgyODJcdTcwQjkgXHU5RUQ4XHU4QkE0XHU0RjFBXHU2MjhBXHU2NTcwXHU5MUNGXHU3Njg0XHU0RTFDXHU4OTdGXHU1MkEwXHU1MjMwXHU4RkQ5XHU5MUNDXHVGRjBDXHU2MjQwXHU0RUU1XHU0RTBEXHU4OTgxXHU2REZCSEJveFx1NjIxNlx1NjYyRlZCb3ggKi9cclxuICAgIG5vZGU6IExheWEuQm94O1xyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbGlzdDoge1xyXG4gICAgICAgIC8qKiBcdTg5RTNcdTY3OTBcdTc2ODRcdThENDRcdTZFOTBcdTY1NzBcdTYzNkUgXHU1RkM1XHU5ODdCXHU4OTgxXHU2NzA5aWNvbiAqL1xyXG4gICAgICAgIG9iajogYW55O1xyXG4gICAgICAgIC8qKiBcdTY1NzBcdTkxQ0YgKi9cclxuICAgICAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgICAgIC8qKiBcdTdFQzhcdTcwQjlcdTRGNERcdTdGNkUgMSBcdTkxRDFcdTVFMDEgMiBcdTk0QkJcdTc3RjMgMyBcdTRFRDNcdTVFOTMgKi9cclxuICAgICAgICBwb3NUeXBlOiAxIHwgMiB8IDM7XHJcbiAgICB9W107XHJcbiAgICBub3RGbHk/OiBib29sZWFuO1xyXG4gICAgLyoqIFx1NTJBOFx1NzUzQlx1NjRBRFx1NjUzRVx1N0VEM1x1Njc1Rlx1NTZERVx1OEMwMyAqL1xyXG4gICAgY2FsbEJhY2s/OiB7ICgpOiB2b2lkIH07XHJcbn1cclxuXHJcbi8vICBNYWluVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkZExhbmRMYXllciwgdGlwczpcIlx1NjJEM1x1NUM1NVx1NTcxRlx1NTczMFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWRkTGFuZExheWVyOiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRpYW1vbmROb2RlLCB0aXBzOlwiXHU5NEJCXHU3N0YzXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkaWFtb25kTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z29sZE5vZGUsIHRpcHM6XCJcdTkxRDFcdTVFMDFcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGdvbGROb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphdmF0YXJOb2RlLCB0aXBzOlwiXHU1OTM0XHU1MENGXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhdmF0YXJOb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsYW5kQm94LCB0aXBzOlwiXHU1NzFGXHU1NzMwXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsYW5kQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y2VudGVyQm94LCB0aXBzOlwiXHU0RTJEXHU5NUY0XHU1MzNBXHU1N0RGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjZW50ZXJCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpvcmRlckJveCwgdGlwczpcIlx1OEJBMlx1NTM1NVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgb3JkZXJCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpib3R0b21Cb3gsIHRpcHM6XCJcdTVFOTVcdTkwRThcdTYzMDlcdTk0QUVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJvdHRvbUJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsYW5kVXBMYXllciwgdGlwczpcIlx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1N0E5N1x1NTNFM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGFuZFVwTGF5ZXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BMYXllck9uU3RhZ2UsIHRpcHM6XCJcdTU3MjhcdTRFM0JcdTU3M0FcdTY2NkZcdTRFMEFcdTk3NjJcdTc2ODRcdTRFMDBcdTRFMkFcdTY3MDBcdTRFMEFcdTVDNDJcdTc2ODRcdTdBN0FcdTVDNDJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcExheWVyT25TdGFnZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wR29sZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTkxRDFcdTVFMDFpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BHb2xkSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wRGlhbW9uZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTk0QkJcdTc3RjNpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BEaWFtb25kSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6d2FyZWhvdXNlQnRuLCB0aXBzOlwiXHU0RUQzXHU1RTkzXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB3YXJlaG91c2VCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1vbmV5TGIsIHRpcHM6XCJcdTdFQTJcdTUzMDVcdTY1ODdcdTY4NjNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1vbmV5TGI6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHVGRjBDXHU5OERFXHU3MjY5XHU1NEMxXHU3NkY4XHU1MTczXHJcbiAgICAvKiogQHByb3Age25hbWU6Z2V0UmV3YXJkUHJlZmFiLCB0aXBzOlwiXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHU5ODg0XHU4QkJFXCIsIHR5cGU6UHJlZmFifSovXHJcbiAgICBwcml2YXRlIGdldFJld2FyZFByZWZhYjogTGF5YS5QcmVmYWIgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZsb2F0UmV3YXJkSWNvbiwgdGlwczpcIlx1NTk1Nlx1NTJCMVx1OThERVx1NTJBOFx1NzUzQmljb25cIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgZmxvYXRSZXdhcmRJY29uOiBMYXlhLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvSG9tZUJ0biwgdGlwczpcIlx1OEZENFx1NTZERVx1NUJCNlx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29Ib21lQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphbnlEb29yLCB0aXBzOlwiXHU1M0JCXHU4RjZDXHU4RjZDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhbnlEb29yOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp2aXRhbGl0eUJveCwgdGlwczpcIlx1NEY1M1x1NTI5Qlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdml0YWxpdHlCb3g6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5QnV5QnRuLCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU4RDJEXHU0RTcwXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eUJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTVCQTBcdTcyNjlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRCb3gsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldEJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8vXHU0RUZCXHU1MkExXHJcbiAgICAvKiogQHByb3Age25hbWU6dGFza0JveCwgdGlwczpcIlx1NEVGQlx1NTJBMVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGFza0JveDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpndWlkZUhhbmQsIHRpcHM6XCJcdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcdTYyNEJcdTYzMDdcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGd1aWRlSGFuZDogTGF5YS5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaWd1cmVBbmksIHRpcHM6XCJcdTRFQkFcdTcyNjlcdTUyQThcdTc1M0JcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZpZ3VyZUFuaTogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTdFQzRcdTRFRjYgXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGxhbmRMaXN0OiBGaWVsZENvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgLyoqXHU2NjJGXHU1NDI2XHU1NzI4XHU1OTE2XHU5NzYyICovXHJcbiAgICBwcml2YXRlIGlzT3V0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTc5QkJcdTVGMDBcdTVCQjZcdTc2ODRcdTY1RjZcdTk1RjQgKi9cclxuICAgIHByaXZhdGUgb3V0ZXJUaW1lOiBudW1iZXI7XHJcbiAgICAvKipcdTUzQkJcdTU5N0RcdTUzQ0IgXHU1QkI2XHU1MDEyXHU4QkExXHU2NUY2ICovXHJcbiAgICBwcml2YXRlIG91dENvdW50RG93bk51bWJlciA9IDYwO1xyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBcInJlcy9sb2FkaW5nQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ193b29kdGl0bGUucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZUhvdXNlQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZWJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfc2hlbGYucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfbGFuZEJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfaG91c2V0b3AucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2ltZ19ob21lcGFnZUJnMy5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX2hvbWVwYWdlQmcyLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyBcInJlcy9pbWdfaG9tZXBhZ2VCZzEucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19mYXJtbGFuZExvZ28ucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BsYW50X2ljb24ucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BldF9mZWVkLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9tYWluX3NjZW5lLnBuZ1wiLFxyXG4gICAgICAgIF0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5lbmRzV2l0aChcInBuZ1wiKSkgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFzaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMudG9wTGF5ZXJPblN0YWdlKTtcclxuICAgICAgICAodGhpcy5vcmRlckJveC5nZXRDaGlsZEJ5TmFtZShcImZyaWVuZF9uYW1lXCIpIGFzIExheWEuTGFiZWwpLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnZpdGFsaXR5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdvSG9tZUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5sYW5kQm94Lm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5wdXNoKHRoaXMubGFuZEJveC5nZXRDaGlsZEF0KHgpLmdldENvbXBvbmVudChGaWVsZENvbXBvbmVudCkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLm1haW5WaWV3Q29tID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGFuZExpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5maWVsZElkIC0gYi5maWVsZElkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9maWVsZCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGl0TGFuZEFkZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgYSA9IExheWEuVHdlZW4udG8odGhpcy5maWd1cmVBbmksIHsgeDogLTE2NywgeTogNDM1IH0sIDEwMDAwKTtcclxuICAgICAgICBhLnJlcGVhdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYzRDBcdTc5M0FcdTY2M0VcdTc5M0FcdTYyNjlcdTVFRkFpY29uXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUhpdExhbmRBZGQoKSB7XHJcbiAgICAgICAgbGV0IGd1aWRMYW5kOiBGaWVsZENvbXBvbmVudDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sYW5kTGlzdFt4XS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLmlzRmlyc3RUaW1lICYmICFndWlkTGFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGd1aWRMYW5kID0gdGhpcy5sYW5kTGlzdFt4XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUd1aWRIYW5kQXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGd1aWRMYW5kLm93bmVyIGFzIExheWEuQm94KS5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KDMwMCwgMTYwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUxNjhcdTRGNTNcdTUyQTBcdTkwMUZpY29uIFx1NTQ4QyBcdTY1MzZcdTgzRENpY29uIFx1NjY4Mlx1NjVGNlx1NjI4QVx1NEUyNFx1NEUyQVx1NjVCOVx1NkNENVx1NTE5OVx1NTcyOFx1NEUwMFx1OEQ3N1x1NEU4NlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVBbGxTdGF0ZUljb24obGFuZElkPzogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxhbmRMaXN0W3hdLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pZCA9PSBsYW5kSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2V0U3RhdGVJY29uU2tpbigxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWxhbmRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnByb2R1Y3RJZCAmJiBkYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2V0U3RhdGVJY29uU2tpbigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5sYW5kTGlzdFt4XS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHJvZHVjdElkICYmICFkYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBDb3JlLm9ic2VydmFibGVQcm9wZXJ0eVxyXG4gICAgICAgICAgICAud2F0Y2goVXNlckluZm8sIHRoaXMpXHJcbiAgICAgICAgICAgIC5rZXkoXCJkaWFtb25kXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYW1vbmROb2RlLnZhbHVlID0gZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubW9uZXlMYi52YWx1ZSA9IChlICogVXNlckluZm8ucHJvcG9ydGlvbikudG9GaXhlZCgyKSArIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAvL1x1NEUwRFx1NTZEQlx1ODIwRFx1NEU5NFx1NTE2NVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25leUxiLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAoZSAqIFVzZXJJbmZvLnByb3BvcnRpb24pLnRvU3RyaW5nKCkubWF0Y2goL15cXGQrKD86XFwuXFxkezAsMn0pPy8pICsgXCJcIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImdvbGRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29sZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiYXZhdGFyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkgdGhpcy5hdmF0YXJOb2RlLnNraW4gPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwid2FyZVBldElkXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnBldEJveC5nZXRDaGlsZEJ5TmFtZShcImRvZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmdldChlKS5pY29uO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBldEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJwZXRWaXRhbGl0eVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIC8vXHU2NkY0XHU2NUIwXHU1QkEwXHU3MjY5XHU0RjUzXHU1MjlCXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXRCb3gudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXIgPSB0aGlzLnBldEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwidml0YWxpdHlfYmFyXCIpIGFzIExheWEuSW1hZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IGUgLyBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KFVzZXJJbmZvLndhcmVQZXRJZCkudml0YWxpdHlfbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2FsZSA+IDEpIHNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmFyLndpZHRoID0gMTMwICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJkaWdlc3RDb3VudERvd25cIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcywgdGhpcy5kaWdlc3RDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgLy9cdTVCQTBcdTcyNjlcdTk3MDBcdTg5ODFcdTZEODhcdTgwMTdcdTk4REZcdTcyNjlcdTUwMTJcdThCQTFcdTY1RjZcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBldEJveC52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKGUgKiAxMDAwLCB0aGlzLCB0aGlzLmRpZ2VzdENvdW50RG93bik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJ2aXRhbGl0eVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZpdGFsaXR5ID0gZSAvIENvbmZpZ0dhbWUudXNlclZpdGFsaXR5TGltaXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodml0YWxpdHkgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpdGFsaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5tb3VzZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5ncmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLm1vdXNlRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXRhbGl0eUJveC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSlcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy52aXRhbGl0eUJveC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9IDI2OCAqIHZpdGFsaXR5O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiaXNGaXJzdFRpbWVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlkQW5pPy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndWlkZUhhbmQ/LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUgPT09IDApIHRoaXMuZ3VpZEhhbmRBbmkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTGFuZExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU9yZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVCQTBcdTcyNjlcdTdCMTFcdTZEODhcdTUzMTZcdTVCOUFcdTY1RjZcdTU2NjhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkaWdlc3RDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBwZXQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KFVzZXJJbmZvLndhcmVQZXRJZCk7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLnBldFZpdGFsaXR5IC0gcGV0LnZpdGFsaXR5X2NvbnN1bWUgPD0gMCkge1xyXG4gICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgLT0gcGV0LnZpdGFsaXR5X2NvbnN1bWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IENvbmZpZ0dhbWUucGV0RGlnZXN0SW50ZXJ2YWxUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTGFuZExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGFza1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2lnbkluXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2lnbkluVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1haWxcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1haWwoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2hvcFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaGVhZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNldHRpbmdWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2FyZWhvdXNlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ1eV9mZWVkXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb2dfaG91c2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAxIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvZ1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDIgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlhbW9uZF9ib3hcIjpcclxuICAgICAgICAgICAgY2FzZSBcIm1vbmV5X3JlZF9ib3hcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAzIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9yZGVyX2JveFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLk9yZGVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZyaWVuZHNcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkZyaWVuZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZFwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kTGV2ZWxVcFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3V0ZXIpIHRoaXMuc3dpdGNoTGFuZExldmVsVXAodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5R2V0UmV3YXJkQW5pKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBub2RlOiB0aGlzLnRlc3RCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeyBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldCgxMDAxKSwgY291bnQ6IDEwMCwgcG9zVHlwZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB7IG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KDEwMDEpLCBjb3VudDogMTAwLCBwb3NUeXBlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksIGNvdW50OiAxMDAsIHBvc1R5cGU6IDEgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBdLFxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlX3VwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaExhbmRMZXZlbFVwKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYW55X2Rvb3JcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29Ub05laWdoYm9yKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX2hvbWVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29Ib21lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZF92aXRhbGl0eVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlWaXRhbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU5MEFFXHU0RUY2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb3Blbk1haWwoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm1haWxMaXN0LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogTWFpbFJldHVybkRhdGFbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLk1haWxWaWV3LCB7IHBhcm06IGQgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NTk3RFx1NTNDQiBcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvcGVuRnJpZW5kKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRMaXN0LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogRnJpZW5kTGlzdERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNWaWV3LCB7IHBhcm06IGQgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThEMkRcdTRFNzBcdTRGNTNcdTUyOUJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidXlWaXRhbGl0eSgpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4QkEyXHU1MzU1XHU5NjFGXHU1MjE3ICovXHJcbiAgICBwcml2YXRlIG9yZGVyUXVldWVJbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU4QkEyXHU1MzU1XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcilcclxuICAgIHByaXZhdGUgdXBkYXRlT3JkZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdGhpcy5vcmRlclF1ZXVlSW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBib3ggPSB0aGlzLm9yZGVyQm94LmdldENoaWxkQnlOYW1lKFwib3JkZXJfYm94XCIpLFxyXG4gICAgICAgICAgICAgICAgZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcIm9yZGVyXCIpLmdldChVc2VySW5mby5vcmRlckxldmVsICsgMSksXHJcbiAgICAgICAgICAgICAgICByZXdhcmQ6IFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgICAgICAgICAgICAgIHJld2FyZENvdW50OiBudW1iZXIgPSAwLFxyXG4gICAgICAgICAgICAgICAgY3VyQ291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICBpZiAoIWQpIHJldHVybiBjb25zb2xlLmxvZyhcIlx1N0I0OVx1N0VBN1x1NURGMlx1NUI4Q1wiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA0OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gYm94LmdldENoaWxkQnlOYW1lKFwiaXRlbV9cIiArIHgpIGFzIExheWEuQm94O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkLmNvbmRpdGlvblt4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ckNvdW50ID0gV2FyZWhvdXNlU2VydmljZS5nZXRPbmUoZC5jb25kaXRpb25beF0ucGxhbnQuaWQpPy5jb3VudCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heENvdW50ID0gZC5jb25kaXRpb25beF0uY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJDb3VudCA+PSBtYXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmNvbmRpdGlvblt4XS5wbGFudC5pY29uO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtjdXJDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgODcgKiAoY3VyQ291bnQgLyBtYXhDb3VudCA+IDEgPyAxIDogY3VyQ291bnQgLyBtYXhDb3VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGQuY29uZGl0aW9uW3hdLnBsYW50LmdhaW4uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5vYmouaWQgPT09IENvbmZpZ0dhbWUuZ29sZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZCA9IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArPSBlLmNvdW50ICogbWF4Q291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG5Cb3ggPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJidG5fYm94XCIpLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xyXG4gICAgICAgICAgICAgICAgKGJ0bkJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIChidG5Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGAke1xyXG4gICAgICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICsgTWF0aC5yb3VuZChyZXdhcmRDb3VudCAqIGQuY29tbWlzc2lvbilcclxuICAgICAgICAgICAgICAgIH1gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwibmFtZV90aXRsZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1NUI4Q1x1NjIxMCR7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5vcmRlckxldmVsICsgMVxyXG4gICAgICAgICAgICB9XHU3RUE3XHU4QkEyXHU1MzU1YDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PSBkLmNvbmRpdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGQuY29uZGl0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlclF1ZXVlSW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5vcmRlclJld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJJZDogVXNlckluZm8ub3JkZXJMZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLnJlZHVjZUFtb3VudChlLnBsYW50LmlkLCBlLmNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJRdWV1ZUluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5vcmRlckxldmVsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3JkZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUdldFJld2FyZEFuaSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBib3guZ2V0Q2hpbGRCeU5hbWUoXCJidG5fYm94XCIpIGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHJld2FyZENvdW50ICsgTWF0aC5yb3VuZChyZXdhcmRDb3VudCAqIGQuY29tbWlzc2lvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjazogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlclF1ZXVlSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMDdcdTYzNjJcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN3aXRjaExhbmRMZXZlbFVwKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYmcgPSB0aGlzLmxhbmRVcExheWVyLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICBiZy5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oYmcsIHsgYWxwaGE6IDAuNzUgfSwgMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5nZXRDaGlsZEJ5TmFtZShcImxhbmRfb3V0ZXJcIikuYWRkQ2hpbGQodGhpcy5sYW5kQm94KTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVGFibGVBbmFseXplLnRhYmxlKFwibGFuZExldmVsXCIpLmdldChlLmRhdGEubGV2ZWwgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlLmJ1aWxkSW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIGJnLFxyXG4gICAgICAgICAgICAgICAgeyBhbHBoYTogMCB9LFxyXG4gICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJCb3guYWRkQ2hpbGQodGhpcy5sYW5kQm94KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93VGltZUJveCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUuYnVpbGRJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbihlLmRhdGEubWF0dXJlVGltZUxlZnQgPyAxIDogMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGUudG9wU3RhdGVJY29uQW5pKEJvb2xlYW4oZS5kYXRhLnByb2R1Y3RJZCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY0QURcdTY1M0VcdTgzQjdcdTUzRDZcdTU5NTZcdTUyQjFcdTUyQThcdTc1M0JcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkKVxyXG4gICAgcHJpdmF0ZSBwbGF5R2V0UmV3YXJkQW5pKG9iajogR2V0RmxvYXRSZXdhcmRPYmopIHtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqLmNhbGxCYWNrKSBvYmouY2FsbEJhY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb2JqLmxpc3QuZm9yRWFjaCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogTGF5YS5Cb3ggPSBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q3JlYXRlRnVuKFxyXG4gICAgICAgICAgICAgICAgXCJmbG9hdFJld2FyZEJveFwiLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZXdhcmRQcmVmYWIuY3JlYXRlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZXdhcmRQcmVmYWJcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5vZGUueSA9IG9iai5ub2RlLmdldF9oZWlnaHQoKSAqIG9iai5ub2RlLmFuY2hvclkgLSBpICogNjA7XHJcbiAgICAgICAgICAgIC8vIG5vZGUueCA9IG9iai5ub2RlLmdldF93aWR0aCgpICogb2JqLm5vZGUuYW5jaG9yWDtcclxuICAgICAgICAgICAgbGV0IGljb24gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpY29uLnNraW4gPSBkLm9iaj8uaWNvbiB8fCBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSA4MCAvIGljb24ud2lkdGg7XHJcbiAgICAgICAgICAgIGljb24uc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICAgICAgbm9kZS5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iai5ub2RlLmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQoKSkpO1xyXG4gICAgICAgICAgICAvLyBvYmoubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbGV0IG5vZGVOZXdQb3MgPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludCgpKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbm9kZS5wb3Mobm9kZU5ld1Bvcy54ICsgb2JqLm5vZGUuZ2V0X3dpZHRoKCkgKiBvYmoubm9kZS5hbmNob3JYLCBub2RlTmV3UG9zLnkgLSBpICogNjApO1xyXG4gICAgICAgICAgICB0aGlzLnRvcExheWVyT25TdGFnZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgKG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IFwieFwiICsgZC5jb3VudDtcclxuXHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAgICAgeyB5OiBub2RlLnkgLSA0MCwgYWxwaGE6IDEgfSxcclxuICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgKGU6IExheWEuQm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlcihcImZsb2F0UmV3YXJkQm94XCIsIGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvc0ljb24gPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubG9jYWxUb0dsb2JhbChMYXlhLlBvaW50LmNyZWF0ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoubm90Rmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsb2F0SWNvbjogTGF5YS5JbWFnZSA9IExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXRSZXdhcmRJY29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXRSZXdhcmRJY29uLmNyZWF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdFJld2FyZEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5za2luID0gZC5vYmouaWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnBvcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQb3NJY29uLnggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIwICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBvc0ljb24ueSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjAgKiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmFkZENoaWxkKGZsb2F0SWNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnpPcmRlciA9IDk5OTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcEljb246IExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkLnBvc1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wR29sZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wRGlhbW9uZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMud2FyZWhvdXNlQnRuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wR29sZEljb25Qb3MgPSB0b3BJY29uLmxvY2FsVG9HbG9iYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLlBvaW50KHRvcEljb24ud2lkdGggLyAyLCB0b3BJY29uLmhlaWdodCAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKHRvcEdvbGRJY29uUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IGxvY2FsUG9zLngsIHk6IGxvY2FsUG9zLnkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tJbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZTogTGF5YS5JbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKFwiZmxvYXRSZXdhcmRJY29uXCIsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmbG9hdEljb25dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MCAqIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFtub2RlXVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIDUwICogaSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY0QURcdTY1M0VcdTc3MEJcdTVFN0ZcdTU0NEFcdTRFRTVcdTU0MEVcdTc2ODRcdTU5NTZcdTUyQjFcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkKVxyXG4gICAgcHJpdmF0ZSBwbGF5QWRSZXdhcmQodGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgcmV3YXJkID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIlZpZGVvcmV3YXJkc1wiKS52YWx1ZSBhcyBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgbm9kZTogdGFyZ2V0LFxyXG4gICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqOiByZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogcmV3YXJkLm9iai5pZCA9PSBDb25maWdHYW1lLmdvbGRJZCA/IDEgOiAyLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NEVGQlx1NTJBMVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMudXBkYXRlX3Rhc2spXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRhc2soKSB7XHJcbiAgICAgICAgY29uc3QgYm94OiBMYXlhLkltYWdlID0gdGhpcy50YXNrQm94LFxyXG4gICAgICAgICAgICBpY29uID0gYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBhbW91bnRGb250ID0gaWNvbi5nZXRDaGlsZEJ5TmFtZShcImFtb3VudEZvbnRcIikgYXMgTGF5YS5Gb250Q2xpcCxcclxuICAgICAgICAgICAgZGVzYyA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImxiXCIpIGFzIExheWEuTGFiZWwsXHJcbiAgICAgICAgICAgIGxpc3QgPSBUYXNrU2VydmljZS5nZXRMaXN0KCksXHJcbiAgICAgICAgICAgIHRhc2sgPSBsaXN0WzBdO1xyXG4gICAgICAgIGlmICh0YXNrLnJlY2VpdmUgPT0gMSB8fCB0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgYm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgZGVzYy50ZXh0ID0gYFx1NEVGQlx1NTJBMToke3Rhc2suYmFzZS5kZXNjfSgke1xyXG4gICAgICAgICAgICB0YXNrLnRpbWVzID4gdGFzay5iYXNlLnRpbWVzID8gdGFzay5iYXNlLnRpbWVzIDogdGFzay50aW1lc1xyXG4gICAgICAgIH0vJHt0YXNrLmJhc2UudGltZXN9KWA7XHJcbiAgICAgICAgYW1vdW50Rm9udC52YWx1ZSA9IFwieFwiICsgdGFzay5iYXNlLnJld2FyZC5jb3VudDtcclxuICAgICAgICBpY29uLnNraW4gPSB0YXNrLmJhc2UucmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgIGJveC53aWR0aCA9IGRlc2Mud2lkdGggKyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU2REVcdTVCQjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnb0hvbWUoKSB7XHJcbiAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KHRydWUsICgpID0+IHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5nb0hvbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU1NkRFXHU2NzY1XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc091dGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvRnJpZW5kKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhpdExhbmRBZGQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1M0JCXHU5MEJCXHU1QzQ1XHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ29Ub05laWdoYm9yKCkge1xyXG4gICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyh0cnVlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubmVpZ2hib3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJnYXRoZXJcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IFJldHVybk5laWdoYm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTc5QkJcdTVGMDBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29GcmllbmQoZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgzMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLmdvX2ZyaWVuZF9ob21lKVxyXG4gICAgcHJpdmF0ZSBnb0ZyaWVuZExpc3RlbihkOiBSZXR1cm5OZWlnaGJvcikge1xyXG4gICAgICAgIHRoaXMuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nb0ZyaWVuZChkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTNCQlx1NjcwQlx1NTNDQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdvRnJpZW5kKGQ/OiBSZXR1cm5OZWlnaGJvcikge1xyXG4gICAgICAgIGxldCBsYW5kcyA9IHRoaXMubGFuZExpc3QsXHJcbiAgICAgICAgICAgIHVzZXJMYW5kcyA9IExhbmRTZXJ2aWNlLmxpc3Q7XHJcbiAgICAgICAgbGV0IG90aGVyTGFuZHM6IE1hcDxudW1iZXIsIExhbmRPYmo+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGQubGFuZHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJMYW5kcy5zZXQoZS5pZCwgZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vdXRlclRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnZpdGFsaXR5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hbnlEb29yLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1c2VyTGFuZHMuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZC5tYXR1cmVUaW1lTGVmdCAtPSAoRGF0ZS5ub3coKSAtIHRoaXMub3V0ZXJUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5tYXR1cmVUaW1lTGVmdCA8IDApIGQubWF0dXJlVGltZUxlZnQgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYW55RG9vci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nb0hvbWVCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsYW5kcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsYW5kID0gbGFuZHNbeF07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGxhbmQuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnN0ZWFsVWlkID0gZC51aWQ7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnVwZGF0ZURhdGEoeyBsaXN0OiBvdGhlckxhbmRzIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkLnByb3RlY3RlZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZC50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kLmNhblN0ZWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhbmQuY2FuU3RlYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhbmQuaXNPdXRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZC5zdGVhbFVpZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnVwZGF0ZURhdGEoeyBsaXN0OiB1c2VyTGFuZHMgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhbmQucGxhbnRJY29uQW5pKEJvb2xlYW4obGFuZC5kYXRhPy5wcm9kdWN0SWQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgLy9cdTk2OTBcdTg1Q0ZcdTVCQTBcdTcyNjlcclxuICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL1x1OTY5MFx1ODVDRlx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICB0aGlzLnRhc2tCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHU2NjNFXHU3OTNBIFx1NUJBMFx1NzI2OVxyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8ud2FyZVBldElkKSB0aGlzLnBldEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9cdTY2M0VcdTc5M0FcdTRFRkJcdTUyQTFcclxuICAgICAgICAgICAgdGhpcy50YXNrQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVGcmllbmRWaWV3KGQ/Lm5pY2tuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTNCQlx1NTk3RFx1NTNDQlx1NUJCNlx1OEZEOFx1NjYyRlx1ODFFQVx1NURGMVx1NUJCNlx1NzY4NFx1NzU0Q1x1OTc2Mlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZyaWVuZFZpZXcobmlja25hbWU6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgICAgICBjb25zdCB0b3BCb3ggPSB0aGlzLm9yZGVyQm94LnBhcmVudCBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgbW9uZXlCb3ggPSB0b3BCb3guZ2V0Q2hpbGRCeU5hbWUoXCJtb25leV9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGNvdW50RG93biA9IHRvcEJveC5nZXRDaGlsZEJ5TmFtZShcImNvdW50X2Rvd25cIikgYXMgTGF5YS5MYWJlbCxcclxuICAgICAgICAgICAgb3JkZXJCb3ggPSB0aGlzLm9yZGVyQm94LmdldENoaWxkQnlOYW1lKFwib3JkZXJfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBmcmllbmROYW1lID0gdGhpcy5vcmRlckJveC5nZXRDaGlsZEJ5TmFtZShcImZyaWVuZF9uYW1lXCIpIGFzIExheWEuTGFiZWwsXHJcbiAgICAgICAgICAgIGJvdHRvbUxpc3Q6IExheWEuSW1hZ2VbXSA9IFtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQm94LmdldENoaWxkQnlOYW1lKFwidGFza1wiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJzaWduSW5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQm94LmdldENoaWxkQnlOYW1lKFwiZnJpZW5kc1wiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJtYWlsXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICBmcmllbmROYW1lLnRleHQgPSBgJHtuaWNrbmFtZX1cdTc2ODRcdTUxOUNcdTU3M0FgO1xyXG4gICAgICAgICAgICBvcmRlckJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZyaWVuZE5hbWUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1vbmV5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY291bnREb3duLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY291bnREb3duLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMub3V0Q291bnREb3duTnVtYmVyKTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5sb29wKDEwMDAsIHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQsIFtjb3VudERvd25dKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm91dENvdW50RG93bk51bWJlciA9IDYwO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQpO1xyXG4gICAgICAgICAgICBvcmRlckJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZnJpZW5kTmFtZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1vbmV5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb3VudERvd24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3R0b21MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZS5kaXNhYmxlZCA9IHRoaXMuaXNPdXRlcjtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL1x1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3V0Q291bnREb3duRXZlbnQobGI6IExheWEuTGFiZWwpIHtcclxuICAgICAgICB0aGlzLm91dENvdW50RG93bk51bWJlci0tO1xyXG4gICAgICAgIGxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMub3V0Q291bnREb3duTnVtYmVyKTtcclxuICAgICAgICBpZiAodGhpcy5vdXRDb3VudERvd25OdW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyNyZWdpb24gXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHU3NkY4XHU1MTczXHJcbiAgICBwcml2YXRlIGd1aWRBbmk6IExheWEuVGltZUxpbmU7XHJcbiAgICAvKipcclxuICAgICAqIFx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1x1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGd1aWRIYW5kQW5pKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaSA9IExheWEuVGltZUxpbmUudG8odGhpcy5ndWlkZUhhbmQsIHsgcm90YXRpb246IC0xNSB9LCA0MDAsIG51bGwpLnRvKFxyXG4gICAgICAgICAgICB0aGlzLmd1aWRlSGFuZCxcclxuICAgICAgICAgICAgeyByb3RhdGlvbjogMCB9LFxyXG4gICAgICAgICAgICA0MDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaS5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1RjE1XHU1QkZDXHU2MjRCXHU2MzA3XHU1QzVFXHU2MDI3XHJcbiAgICAgKiBAcGFyYW0gc2hvd1xyXG4gICAgICogQHBhcmFtIHBvc1xyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfZ3VpZF9oYW5kKVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVHdWlkSGFuZEF0dHJpYnV0ZShzaG93OiBib29sZWFuLCBwb3M/OiBMYXlhLlBvaW50LCBwYXJlbnQ/OiBMYXlhLk5vZGUpIHtcclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWRlSGFuZC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ndWlkZUhhbmQucG9zKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5hZGRDaGlsZCh0aGlzLmd1aWRlSGFuZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcExheWVyT25TdGFnZS5hZGRDaGlsZCh0aGlzLmd1aWRlSGFuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWRlSGFuZC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmFkZENoaWxkKHRoaXMuZ3VpZGVIYW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uXHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgT3JkZXJCYXNlLCBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcblxyXG4vL2NsYXNzIE9yZGVyVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6b3JkZXJMaXN0LCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZSx9Ki9cclxuICAgIHByaXZhdGUgb3JkZXJMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Mb2NrUmVzLCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU2MzA5XHU5NEFFXHU2NzJBXHU1QjhDXHU2MjEwXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgYnRuTG9ja1Jlczogc3RyaW5nID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5SZXNDdXIsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTYzMDlcdTk0QUVcdTVGNTNcdTUyNERcdTcyQjZcdTYwMDFcdTYzMDlcdTk0QUVcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBidG5SZXNDdXI6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBkYXRhTGlzdDogT3JkZXJCYXNlW107XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcIm9yZGVyXCIpLmxpc3Q7XHJcbiAgICAgICAgbGV0IG9yZGVyT2xkTHYgPSBVc2VySW5mby5vcmRlckxldmVsIHx8IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmlkICogKGIuaWQgPD0gb3JkZXJPbGRMdiA/IC0xIDogMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QuYXJyYXkgPSB0aGlzLmRhdGFMaXN0O1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVyTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyTGlzdChjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuZGF0YUxpc3RbaV0sXHJcbiAgICAgICAgICAgIHJld2FyZDogUmV3YXJkQ3VycmVuY3lCYXNlLFxyXG4gICAgICAgICAgICByZXdhcmRDb3VudDogbnVtYmVyID0gMCxcclxuICAgICAgICAgICAgY3VyQ291bnQgPSAwLFxyXG4gICAgICAgICAgICBtYXhDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gMCxcclxuICAgICAgICAgICAgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJvcmRlcl9sdlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7ZC5pZH1cdTdFQTdcdThCQTJcdTUzNTVgO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDQ7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtX1wiICsgeCkgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgICAgIGlmIChkLmNvbmRpdGlvblt4XSkge1xyXG4gICAgICAgICAgICAgICAgY3VyQ291bnQgPSBXYXJlaG91c2VTZXJ2aWNlLmdldE9uZShkLmNvbmRpdGlvblt4XS5wbGFudC5pZCk/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgICAgICAgICBtYXhDb3VudCA9IGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJDb3VudCA+PSBtYXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmNvbmRpdGlvblt4XS5wbGFudC5pY29uO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuaWQgPCBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHttYXhDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID0gODc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtjdXJDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgODcgKiAoY3VyQ291bnQgLyBtYXhDb3VudCA+IDEgPyAxIDogY3VyQ291bnQgLyBtYXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkLmNvbmRpdGlvblt4XS5wbGFudC5nYWluLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5vYmouaWQgPT09IENvbmZpZ0dhbWUuZ29sZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmQgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICs9IGUuY291bnQgKiBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGlmIChkLmlkID4gVXNlckluZm8ub3JkZXJMZXZlbCArIDEpIHtcclxuICAgICAgICAgICAgLy9cdTY3MkFcdTZGQzBcdTZEM0JcclxuICAgICAgICAgICAgYnRuLnNraW4gPSB0aGlzLmJ0bkxvY2tSZXM7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZC5pZCA9PSBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAgICAgLy9cdTVGNTNcdTUyNERcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gdGhpcy5idG5SZXNDdXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NURGMlx1NUI4Q1x1NjIxMFwiKTtcclxuICAgICAgICAgICAgICAgIC8vXHU1REYyXHU1QjhDXHU2MjEwXHJcbiAgICAgICAgICAgICAgICBidG4uZ3JheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXdhcmQpIHtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgKyR7XHJcbiAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgIH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk9yZGVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlclZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsZWZ0Qm94LCB0aXBzOlwiXHU0RTkxXHU1REU2XHU4RkI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgbGVmdEJveDogTGF5YS5Cb3g7XHJcbiAgICAvKiogQHByb3Age25hbWU6cmlnaHRCb3gsIHRpcHM6XCJcdTRFOTFcdTVERTZcdThGQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICByaWdodEJveDogTGF5YS5Cb3g7XHJcblxyXG4gICAgb25IZEVuYWJsZSgpIHt9XHJcblxyXG4gICAgb25PcGVuZWQoZGF0YTogeyBjYWxsOiB7IChPdmVyVmlldyk6IHZvaWQgfSB9KSB7XHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIGlmIChkYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGEuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoY2FsbDogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmxlZnRCb3gueCA9IC05ODc7XHJcbiAgICAgICAgdGhpcy5yaWdodEJveC54ID0gMTAyNTtcclxuICAgICAgICB0aGlzLmxlZnRCb3guYWxwaGEgPSAwO1xyXG4gICAgICAgIHRoaXMucmlnaHRCb3guYWxwaGEgPSAwO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5sZWZ0Qm94LCB7IHg6IDAsIGFscGhhOiAxIH0sIDUwMCk7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJveCxcclxuICAgICAgICAgICAgeyB4OiAwLCBhbHBoYTogMSB9LFxyXG4gICAgICAgICAgICA1MDAsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGwpIGNhbGwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oY2FsbDogRnVuY3Rpb24pIHtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubGVmdEJveCwgeyB4OiAtOTg3LCBhbHBoYTogMCB9LCA1MDApO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3gsXHJcbiAgICAgICAgICAgIHsgeDogMTAyNSwgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsKSBjYWxsKCk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk92ZXJWaWV3KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwRGF0YUNvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cERhdGFDb250cm9sXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9jbGFzcyBTZXR0aW5nVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTptdXNpY05vZGUsIHRpcHM6XCJcdTk3RjNcdTRFNTBcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG11c2ljTm9kZTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNvdW5kTm9kZSwgdGlwczpcIlx1OTdGM1x1NjU0OFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc291bmROb2RlOiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YXZhdGFyTm9kZSwgdGlwczpcIlx1NzNBOVx1NUJCNlx1NTkzNFx1NTBDRlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYXZhdGFyTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bmlja25hbWUsIHRpcHM6XCJcdTczQTlcdTVCQjZcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG5pY2tuYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1c2VyS2V5LCB0aXBzOlwiXHU3NTI4XHU2MjM3XHU1M0NCXHU2MEM1XHU3ODAxXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB1c2VyS2V5OiBMYXlhLkxhYmVsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNDaGFuZ2UoKTtcclxuICAgICAgICB0aGlzLnNvdW5kQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIHRoaXMudXNlcktleS50ZXh0ID0gYFx1OTA4MFx1OEJGN1x1NzgwMVx1RkYxQSR7VXNlckluZm8ua2V5fWA7XHJcblxyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImF2YXRhclwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcIm5pY2tuYW1lXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5pY2tuYW1lLnRleHQgPSBlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNldHRpbmdWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIm11c2ljXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQgPSAhQ29yZS5hdWRpby5tdXNpY011dGVkO1xyXG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwibXVzaWNcIiwgQ29yZS5hdWRpby5tdXNpY011dGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5zb3VuZE11dGVkID0gIUNvcmUuYXVkaW8uc291bmRNdXRlZDtcclxuICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInNvdW5kXCIsIENvcmUuYXVkaW8uc291bmRNdXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZENoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNpZ25fb3V0XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU3ODZFXHU4QkE0XHU4OTgxXHU5MDAwXHU1MUZBXHU3NjdCXHU1RjU1XHVGRjFGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJpc0xvZ2luXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5sb2dpbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcubG9naW5PdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5Mb2dpblZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvZ2luX2dhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1c2VyX2FncmVlbWVudFwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTc1MjhcdTYyMzdcdTUzNEZcdThCQUVcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oeyB1cmk6IEFwcEV2ZW50TWFwLnNlcnZpY2VBZ3JlZW1lbnQsIGRhdGE6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcml2YWN5XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OTY5MFx1NzlDMVx1NjUzRlx1N0I1NlxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAucHJpdmFjeUFncmVlbWVudCwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFib3V0XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQWJvdXRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29weV9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29weSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29weSgpIHtcclxuICAgICAgICBsZXQgYTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgIGEudmFsdWUgPSBVc2VySW5mby5rZXk7XHJcbiAgICAgICAgYS5zZWxlY3QoKTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAgICAgYS5yZW1vdmUoKTtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NTkwRFx1NTIzNlx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG11c2ljQ2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnN0IGJveCA9IHRoaXMubXVzaWNOb2RlLmdldENoaWxkQnlOYW1lKFwiYm94XCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgbGV0IG11c2ljID0gQ29yZS5hdWRpby5tdXNpY011dGVkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG11c2ljKTtcclxuXHJcbiAgICAgICAgaWNvbi54ID0gIW11c2ljID8gLTE0IDogOTE7XHJcbiAgICAgICAgaWNvbi5za2luID0gIW11c2ljID8gYGdhbWUvaW1nX211c2ljT25CdG4ucG5nYCA6IFwiZ2FtZS9pbWdfbXVzaWNPZmZCdG4ucG5nXCI7XHJcbiAgICAgICAgYm94LnNraW4gPSAhbXVzaWMgPyBgZ2FtZS9pbWdfc3dpdGNoT24ucG5nYCA6IFwiZ2FtZS9pbWdfc3dpdGhPZmYucG5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzb3VuZENoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCBib3ggPSB0aGlzLnNvdW5kTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgbGV0IHNvdW5kID0gQ29yZS5hdWRpby5zb3VuZE11dGVkO1xyXG4gICAgICAgIGljb24ueCA9ICFzb3VuZCA/IC0xNCA6IDkxO1xyXG4gICAgICAgIGljb24uc2tpbiA9ICFzb3VuZCA/IGBnYW1lL2ltZ19tdXNpY09uQnRuLnBuZ2AgOiBcImdhbWUvaW1nX211c2ljT2ZmQnRuLnBuZ1wiO1xyXG4gICAgICAgIGJveC5za2luID0gIXNvdW5kID8gYGdhbWUvaW1nX3N3aXRjaE9uLnBuZ2AgOiBcImdhbWUvaW1nX3N3aXRoT2ZmLnBuZ1wiO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBGZWVkQmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZlZWREYXRhQmFzZSB7XHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBGZWVkQmFzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk1MDFcdTVCOUEgKi9cclxuICAgIGxvY2s6IGJvb2xlYW47XHJcbn1cclxuLyoqXHJcbiAqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVxyXG4gKi9cclxuY2xhc3MgRmVlZFNlcnZpY2Uge1xyXG4gICAgLyoqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbGlzdDogRmVlZERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjU3MFx1NjM2RVx1NTIxRFx1NTlDQlx1NTMxNlxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcImZlZWRcIikubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IGQsXHJcbiAgICAgICAgICAgICAgICBsb2NrOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGZWVkU2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgRmVlZEJhc2UsIFBsYW50QmFzZSwgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCJzcmMvY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgRmVlZFNlcnZpY2UsIHsgRmVlZERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9GZWVkU2VydmljZVwiO1xyXG5pbXBvcnQgUGV0U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BldFNlcnZpY2VcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3BWaWV3RGF0YSB7XHJcbiAgICAvKiogXHU3NTRDXHU5NzYydGFnXHU0RTBCXHU2ODA3aWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFICovXHJcbiAgICBwYXJtPzogYW55O1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Cb3hUb3AsIHRpcHM6XCJcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTUyMTdcdTg4NjhcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJ0bkJveFRvcDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tQm94LCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21Cb3g6IExheWEuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWVkRGVzYywgdGlwczpcIlx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VlZERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZVRpbWUsIHRpcHM6XCJcdTYyMTBcdTcxOUZcdTY1RjZcdTk1RjRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZVRpbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZUdhaW5Cb3gsIHRpcHM6XCJcdTY1MzZcdTc2Q0FcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZUdhaW5Cb3g6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvY2tCdG5Cb3gsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTYzMDlcdTk0QUVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvY2tCdG5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtQnV5QnRuLCB0aXBzOlwiXHU4RDJEXHU0RTcwXHU2MzA5XHU5NEFFXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtQnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWRCdXlCdG4sIHRpcHM6XCJcdTk5NzJcdTY1OTlcdThEMkRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZlZWRCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWREZXNjLCB0aXBzOlwiXHU5OTcyXHU2NTk5XHU2M0NGXHU4RkYwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBmZWVkRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTVCQTBcdTcyNjlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRJY29uLCB0aXBzOlwiXHU1QkEwXHU3MjY5aWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0SWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0RGVzYywgdGlwczpcIlx1NUJBMFx1NzI2OVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0RGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0TmFtZSwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0TmFtZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlNYXgsIHRpcHM6XCJcdTRGNTNcdTUyOUJcdTRFMEFcdTk2NTBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5TWF4OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRCdXlCdG4sIHRpcHM6XCJcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldEJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z29XYXRjaCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NzcwQlx1NUJCNlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29XYXRjaDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z29SZXN0LCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU0RjExXHU2MDZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb1Jlc3Q6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU5NEIxXHU1RTg0XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZEZvbnQsIHRpcHM6XCJcdTc1MjhcdTYyMzdcdTk0QkJcdTc3RjNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmRGb250OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxpc3QsIHRpcHM6XCJcdTk0QjFcdTVFODRcdTYzRDBcdTczQjBcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcm9wb3J0aW9uLCB0aXBzOlwiXHU1MTUxXHU2MzYyXHU2QkQ0XHU0RjhCXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcm9wb3J0aW9uOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBcdTUzRUZcdTYzRDBcdTczQjBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgcHJpY2VEYXRhTGlzdDogeyBwcmljZTogbnVtYmVyOyB0aW1lczogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgLyoqIFx1OTRCMVx1NUU4NFx1OTAwOVx1NjJFOVx1NzY4NFx1NTAzQyBcdTc2ODRcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgcHJpY2VTZWxlY3RJbmRleDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU2NTg3XHU1QjU3XHU4RDQ0XHU2RTkwXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGJ0blRvcFJlc0xpc3Q6IHN0cmluZ1tdW10gPSBbXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfc2VlZHNOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfc2VlZHNTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfcGV0Tm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3BldFNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19mb29kbk5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19mb29kblNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19iYW5rTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX2JhbmtTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICBdO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NTIwN1x1NjM2Mlx1NjgwN1x1N0I3RVx1OTAwOVx1NjJFOVx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSB0b3BCdG5TZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTcwQjlcdTUxRkJcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgaXRlbUxpc3RTZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTgwQ0NcdTY2NkZcdTdFQjlcdTc0MDYgKi9cclxuICAgIHByaXZhdGUgaXRlbVNlbGVjdEJnOiBzdHJpbmdbXSA9IFtcImdhbWUvaW1nX3BldGJhZ05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19wZXRiYWdTZWxlY3RlZC5wbmdcIl07XHJcblxyXG4gICAgLyoqIFx1NUY1M1x1NTI0RFx1OTAwOVx1NjJFOVx1NzY4NFx1NUJBMFx1NzI2OVx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RQZXRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZGF0YTogU2hvcFZpZXdEYXRhO1xyXG5cclxuICAgIHByaXZhdGUgaXNGaXJzdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVJdGVtKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25TZWxlY3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnByaWNlTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVQcmljZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25QcmljZVNlbGVjdCk7XHJcblxyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5LndhdGNoKFVzZXJJbmZvLCB0aGlzKS5rZXkoXCJkaWFtb25kXCIsICh2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbW9uZEZvbnQudmFsdWUgPSB2O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmVkKGU6IFNob3BWaWV3RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IGU/LmlkIHx8IDA7XHJcblxyXG4gICAgICAgIHRoaXMucHJpY2VEYXRhTGlzdCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ3aXRoZHJhd2FsX3RpbWVzXCIpLnZhbHVlIGFzIGFueTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvcEJ0blN0YXRlKCk7XHJcbiAgICAgICAgbGV0IHdpdGhkcmF3YWwgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwid2l0aGRyYXdhbFwiKS52YWx1ZSBhcyBzdHJpbmdbXTtcclxuICAgICAgICB0aGlzLnByb3BvcnRpb24udGV4dCA9IGBcdTUxNTFcdTYzNjJcdTZCRDRcdTRGOEIgJHt3aXRoZHJhd2FsWzFdfToke3dpdGhkcmF3YWxbMl19YDtcclxuXHJcbiAgICAgICAgaWYgKCFVc2VySW5mby5pc0ZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5ncmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfZ3VpZF9oYW5kLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkJveCkuZ2xvYmFsVG9Mb2NhbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtQnV5QnRuLmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQoMzAwLCAxMDApKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5vd25lcixcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTkwMDlcdTRFMkRcdTY1RjZcdTc2ODRcdTRFMEJcdTY4MDdcclxuICAgICAqIEBwYXJhbSBlIFx1OTAwOVx1NEUyRFx1NzY4NFx1NEUwQlx1NjgwN1xyXG4gICAgICovXHJcbiAgICBvblNlbGVjdChlKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4ID0gZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NzlDRFx1NUI1MFx1NjIxNlx1OTk2RVx1NjU5OVx1NTIxN1x1ODg2OFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXREYXRhTGlzdCgpIHtcclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQbGFudFNlcnZpY2UubGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIUZlZWRTZXJ2aWNlLmxpc3QubGVuZ3RoKSBGZWVkU2VydmljZS5pbml0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBGZWVkU2VydmljZS5saXN0LnNvcnQoKGEsIGIpID0+IGEuYmFzZS52aXRhbGl0eSAtIGIuYmFzZS52aXRhbGl0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTMyXHU2N0QzXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU3Njg0XHU1MjE3XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gY2VsbCBcdTUyMTdcdTg4NjhcdTgyODJcdTcwQjlcclxuICAgICAqIEBwYXJhbSBpbmRleCBcdTRFMEJcdTY4MDdcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlSXRlbShjZWxsOiBMYXlhLkltYWdlLCBpbmRleCkge1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5nZXREYXRhTGlzdCgpW2luZGV4XTtcclxuICAgICAgICBsZXQgcHJpY2VCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiaGJveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgbG9ja0ljb24gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwibG9ja19pY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaWYgKCFkKSByZXR1cm4gY29uc29sZS53YXJuKFwiXHU2NTcwXHU2MzZFXHU0RTIyXHU1OTMxXCIpO1xyXG4gICAgICAgIGlmIChkLmxvY2spIHtcclxuICAgICAgICAgICAgbG9ja0ljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByaWNlQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcHJpY2VCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9ja0ljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsb2NrSWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcHJpY2VCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByaWNlQm94LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgaWNvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gKDxQbGFudEJhc2U+ZC5iYXNlKS5zZWVkX3ByaWNlLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9ICg8UGxhbnRCYXNlPmQuYmFzZSkuc2VlZF9wcmljZS5vYmouaWNvbjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3QuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIChwcmljZUJveC5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGNvdW50ICsgXCJcIjtcclxuICAgICAgICAgICAgKHByaWNlQm94LmdldENoaWxkQnlOYW1lKFwiZ29sZF9pY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBpY29uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmJhc2UuaWNvbjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGQuYmFzZS5uYW1lO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT0gdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzFdO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdERlc2MoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjZWxsLnNraW4gPSB0aGlzLml0ZW1TZWxlY3RCZ1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTRGNEVcdTkwRThcdUZGMENcdTkwMDlcdTYyRTlcdTcyNjlcdTU0QzFcdTY1RjZcdTc2ODRcdTY1NzBcdTYzNkVcdTY2M0VcdTc5M0FcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3REZXNjKCkge1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF07XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgLy9cdTk5NzJcdTY1OTlcclxuICAgICAgICAgICAgKHRoaXMuc2VlZERlc2MucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZERlc2MudGV4dCA9IGQuYmFzZS5kZXNjLnJlcGxhY2UoXCImXCIsICg8RmVlZEJhc2U+ZC5iYXNlKS52aXRhbGl0eSArIFwiXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmZlZWREZXNjLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgYm94ID0gdGhpcy5mZWVkQnV5QnRuLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xyXG4gICAgICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5jb3VudCArIFwiXCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU3OUNEXHU1QjUwXHJcbiAgICAgICAgbGV0IGJhc2UgPSBkLmJhc2UgYXMgUGxhbnRCYXNlO1xyXG4gICAgICAgICh0aGlzLnNlZWREZXNjLnBhcmVudCBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mZWVkRGVzYy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWVkRGVzYy50ZXh0ID0gYmFzZS5kZXNjO1xyXG4gICAgICAgIHRoaXMubWF0dXJlVGltZS50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyhiYXNlLm1hdHVyZV90aW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1CdXlCdG4udmlzaWJsZSA9ICFkLmxvY2s7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9ja0J0bkJveC52aXNpYmxlID0gZC5sb2NrO1xyXG4gICAgICAgIHRoaXMubG9ja0J0bkJveC5hY3RpdmUgPSBkLmxvY2s7XHJcbiAgICAgICAgbGV0IGdhaW5MaXN0ID0gYmFzZS5nYWluO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQm94ID0gdGhpcy5tYXR1cmVHYWluQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgICAgICBpY29uID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgIGdhaW5EYXRhID0gZ2Fpbkxpc3RbeCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBiYXNlLmhhcnZlc3Q7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gYmFzZS5pY29uO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhaW5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gZ2FpbkRhdGEub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGdhaW5EYXRhLmNvdW50ICogYmFzZS5oYXJ2ZXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAoaXRlbUJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGljb247XHJcbiAgICAgICAgICAgIChpdGVtQm94LmdldENoaWxkQnlOYW1lKFwiY291bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IFwieFwiICsgY291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYm94ID0gdGhpcy5sb2NrQnRuQm94LmdldENoaWxkQnlOYW1lKFwidW5sb2NrX2J1eVwiKS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuXHJcbiAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGJhc2UudW5sb2NrX2Nvc3Q/Lm9iaj8uaWNvbjtcclxuICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBiYXNlLnVubG9ja19jb3N0Py5jb3VudCArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLmlzRmlyc3RUaW1lKSBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImZlZWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImJhbmtcIjpcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uaXNGaXJzdFRpbWUpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvcEJ0bkluZGV4ID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRJbmRleChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCAhPSB0b3BCdG5JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPSBOdW1iZXIodG9wQnRuSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvcEJ0blN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9cdTY0QURcdTc5Q0RcclxuICAgICAgICAgICAgY2FzZSBcImJ1eV9idG5cIjpcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uaXNGaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfZ3VpZF9oYW5kLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlBvaW50LmNyZWF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wic293XCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLnBhcm0/LmxhbmRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50SWQ6IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCh0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL1x1NUU3Rlx1NTQ0QVx1ODlFM1x1OTUwMVx1RkYwQ1x1NjIxNlx1NjYyRlx1OTFEMVx1NUUwMVx1ODlFM1x1OTUwMVxyXG4gICAgICAgICAgICBjYXNlIFwidW5sb2NrX2J1eVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYWRfdW5sb2NrXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuc2VlZHNVbmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wic2VlZHNVbmxvY2tcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0uYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQubmFtZSA9PSBcImFkX3VubG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlQURcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFudFNlcnZpY2UubGlzdFt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdLmxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5jaGFuZ2VJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhbnRTZXJ2aWNlLmxpc3RbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwiYWRfdW5sb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdFBldEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXggPSBQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RQZXRJbmRleCA+PSBQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBldEJ1eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb193YXRjaFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRHb1dhdGNoKFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XS5iYXNlLmlkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fcmVzdFwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTlFRDhcdThCQTRcdTRGNjlcdTYyMzRcdTdCMkNcdTRFMDBcdTRFMkFcdTVCQTBcdTcyNjlcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0R29XYXRjaCgxMDAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmVlZF9idXlcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5OTcyXHU2NTk5XHU4RDJEXHU0RTcwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2l0aGRyYXdfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1NjNEMFx1NzNCMFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aXRoZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmVlZEJ1eSgpIHtcclxuICAgICAgICBsZXQgZmVlZCA9IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdIGFzIEZlZWREYXRhQmFzZTtcclxuICAgICAgICBpZiAoIWZlZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZmVlZEJ1eSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZmVlZEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlZElkOiBmZWVkLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgKz0gZmVlZC5iYXNlLnZpdGFsaXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLmZlZWRCdXlCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBmZWVkLmJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBub3RGbHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUJBMFx1NzI2OVx1NTNCQlx1NzcwQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBldEdvV2F0Y2gocGV0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5wZXRXZWFyLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJwZXRCdXlcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHBldElkOiBwZXRJZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ud2FyZVBldElkID0gcGV0SWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwZXRCdXkoKSB7XHJcbiAgICAgICAgbGV0IHsgYmFzZSB9ID0gUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdO1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5wZXRCdXksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInBldEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgcGV0SWQ6IGJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdLmxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIFVzZXJJbmZvLndhcmVQZXRJZCA9IGJhc2UuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLnBldFZpdGFsaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgPSBiYXNlLnZpdGFsaXR5X21heDtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5kaWdlc3RDb3VudERvd24gPSBDb25maWdHYW1lLnBldERpZ2VzdEludGVydmFsVGltZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NzBCOVx1NTFGQlx1NzBCOVx1NTFGQlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRvcEJ0blN0YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5idG5Cb3hUb3AubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgbGIgPSBidG4uZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nLW1lbnVzZWxlY3RlZC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudW5vcm1hbC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQm90dG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTVFOTVcdTkwRThcdTUxODVcdTVCQjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVCb3R0b20oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvdHRvbUJveC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoeCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXRlbUJ1eUJveCA9IHRoaXMuaXRlbUJ1eUJ0bi5wYXJlbnQgYXMgTGF5YS5Cb3g7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IC8vXHU3OUNEXHU1QjUwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQZXRPckZlZWRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8vXHU5OTcyXHU2NTk5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQZXRPckZlZWRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5hcnJheSA9IHRoaXMucHJpY2VEYXRhTGlzdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NUJBMFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBldCgpIHtcclxuICAgICAgICBpZiAoIVBldFNlcnZpY2UubGlzdC5sZW5ndGgpIFBldFNlcnZpY2UuaW5pdChbXSk7XHJcbiAgICAgICAgbGV0IHBldCA9IFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XTtcclxuICAgICAgICB0aGlzLnBldEljb24uc2tpbiA9IHBldC5iYXNlLmljb247XHJcbiAgICAgICAgdGhpcy5wZXROYW1lLnRleHQgPSBwZXQuYmFzZS5uYW1lO1xyXG4gICAgICAgIHRoaXMucGV0RGVzYy50ZXh0ID0gcGV0LmJhc2UuZGVzYztcclxuICAgICAgICB0aGlzLnZpdGFsaXR5TWF4LnZhbHVlID0gcGV0LmJhc2Uudml0YWxpdHlfbWF4ICsgXCJcIjtcclxuICAgICAgICBsZXQgYnRuX2JveCA9IHRoaXMucGV0QnV5QnRuLmdldENoaWxkQnlOYW1lKFwiYnRuX2JveFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAoYnRuX2JveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHBldC5iYXNlLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgKGJ0bl9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IHBldC5iYXNlLmNvc3QuY291bnQgKyBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgcGV0Qm94ID0gdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgxKSxcclxuICAgICAgICAgICAgZmluZEJveCA9IHBldEJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmRfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBiYWNrX2JveCA9IHBldEJveC5nZXRDaGlsZEJ5TmFtZShcImJhY2tfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBzdGFySWNvbjogTGF5YS5JbWFnZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHgrKykge1xyXG4gICAgICAgICAgICBzdGFySWNvbiA9IGZpbmRCb3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi52aXNpYmxlID0geCAqIDIwIDwgcGV0LmJhc2Uuc2Vuc2l0aXZlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi5za2luID1cclxuICAgICAgICAgICAgICAgIHggKiAyMCArIDEwIDwgcGV0LmJhc2Uuc2Vuc2l0aXZlID8gXCJnYW1lL2ltZ19zdGFyLnBuZ1wiIDogXCJnYW1lL2ltZ19oYWxmc3Rhci5wbmdcIjtcclxuICAgICAgICAgICAgc3Rhckljb24gPSBiYWNrX2JveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnZpc2libGUgPSB4ICogMjAgPCBwZXQuYmFzZS5hYmlsaXR5O1xyXG4gICAgICAgICAgICBzdGFySWNvbi5za2luID1cclxuICAgICAgICAgICAgICAgIHggKiAyMCArIDEwIDwgcGV0LmJhc2UuYWJpbGl0eSA/IFwiZ2FtZS9pbWdfc3Rhci5wbmdcIiA6IFwiZ2FtZS9pbWdfaGFsZnN0YXIucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwZXQubG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLnBldEJ1eUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nb1Jlc3QudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmdvV2F0Y2gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby53YXJlUGV0SWQgPT0gcGV0LmJhc2UuaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChQZXRTZXJ2aWNlLmdldFVubG9ja0xlbigpID09PSAxIHx8IFVzZXJJbmZvLndhcmVQZXRJZCA9PT0gMTAwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1dhdGNoLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29XYXRjaC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXRCdXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTFDRFx1N0Y2RVx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlc2V0UGV0T3JGZWVkTGlzdCgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZ2V0RGF0YUxpc3QoKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NEUyRFx1OTVGNFx1NTE4NVx1NUJCOVx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NTIwN1x1NjM2MlxyXG4gICAgICogQHBhcmFtIGkgXHU0RTBCXHU2ODA3XHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDZW50ZXJCb3hTdGF0ZShpOiBudW1iZXIsIHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdChpKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHNob3c7XHJcbiAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoaSkgYXMgTGF5YS5Cb3gpLmFjdGl2ZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk0QjFcdTVFODRcdTkwMDlcdTYyRTlcclxuICAgICAqIEBwYXJhbSBlIFx1NEUwQlx1NjgwN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9uUHJpY2VTZWxlY3QoZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wcmljZVNlbGVjdEluZGV4ID0gZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU3M0IwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgd2l0aGRyYXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJpY2VTZWxlY3RJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5MDA5XHU2MkU5XHU4OTgxXHU2M0QwXHU3M0IwXHU3Njg0XHU5MUQxXHU5ODlEXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC53aXRoZHJhdyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQ6IHRoaXMucHJpY2VTZWxlY3RJbmRleCB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2M0QwXHU3M0IwXHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBkLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC5kaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5NEIxXHU1RTg0XHU2NTcwXHU2MzZFXHU2RTMyXHU2N0QzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUHJpY2VJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5wcmljZURhdGFMaXN0W2ldO1xyXG5cclxuICAgICAgICBsZXQgdXNlckRhdGE6IE5ldEluaXRbXCJ3aXRoZHJhd1wiXVswXSA9IHsgaWQ6IDAsIHRpbWVzOiAwIH07XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGFMaXN0ID0gVXNlckluZm8ud2l0aGRyYXc7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB1c2VyRGF0YUxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJEYXRhTGlzdFt4XS5pZCA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyRGF0YSA9IHVzZXJEYXRhTGlzdFt4XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKTtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gZGF0YS5wcmljZSArIFwiXHU1MTQzXCI7XHJcbiAgICAgICAgaWYgKGRhdGEudGltZXMpIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVzID0gZGF0YS50aW1lcyAtIHVzZXJEYXRhLnRpbWVzO1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVzX2JveFwiKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZXNfYm94XCIpLmdldENoaWxkQnlOYW1lKFwidGltZXNcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTUyNjlcdTRGNTkke1xyXG4gICAgICAgICAgICAgICAgdGltZXMgPCAwID8gMCA6IHRpbWVzXHJcbiAgICAgICAgICAgIH1cdTZCMjFgO1xyXG4gICAgICAgICAgICBpZiAodGltZXMgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVzX2JveFwiKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJpY2VMaXN0LnNlbGVjdGVkSW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID0gXCJnYW1lL2ltZ19wcmljZXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IFwiZ2FtZS9pbWdfcHJpY2Vub3JtYWwucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbi8vICBTaWduSW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5WaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluTGlzdCwgdGlwczpcIlx1N0I3RVx1NTIzMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25Jbkxpc3Q6IExheWEuTGlzdDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluUHJvZ3Jlc3NMYiwgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25JblByb2dyZXNzTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluUHJvZ3Jlc3NCYXIsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY3NjFcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBzaWduSW5Qcm9ncmVzc0JhcjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcm9ncmVzc0Rlc2MsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY1ODdcdTVCNTdcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBwcm9ncmVzc0Rlc2M6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmluaXNoSWNvbiwgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1NjU4N1x1NUI1N1x1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIGZpbmlzaEljb246IExheWEuSW1hZ2U7XHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QuYXJyYXkgPSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdDtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2lnbkluTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVByb2dyZXNzKCkge1xyXG4gICAgICAgIGxldCBzY2FsZSA9IFVzZXJJbmZvLnNwZWVkVXBUaW1lcyAvIENvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXM7XHJcbiAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuc2lnbkluUHJvZ3Jlc3NCYXIud2lkdGggPSA5NzcgKiBzY2FsZTtcclxuICAgICAgICB0aGlzLnNpZ25JblByb2dyZXNzTGIudGV4dCA9IFVzZXJJbmZvLnNpZ25JbkRheXMgKyBcIlwiO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NEZXNjLnRleHQgPSBgXHU0RUNBXHU2NUU1XHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHVGRjA4XHU0RjdGXHU3NTI4JHtVc2VySW5mby5zcGVlZFVwVGltZXN9LyR7Q29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lc31cdTZCMjFcdTUyQTBcdTkwMUZcdUZGMDlgO1xyXG4gICAgICAgIHRoaXMuZmluaXNoSWNvbi52aXNpYmxlID0gVXNlckluZm8uc3BlZWRVcFRpbWVzID49IENvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtKGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBiYXIgPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIG9iaiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5saXN0W2ldO1xyXG4gICAgICAgIGxldCBzY2FsZSA9IFVzZXJJbmZvLnNpZ25JbkRheXMgLyBvYmouZGF5cztcclxuICAgICAgICBpZiAoc2NhbGUgPiAxKSBzY2FsZSA9IDE7XHJcbiAgICAgICAgYmFyLndpZHRoID0gNTAyICogc2NhbGU7XHJcbiAgICAgICAgY29uc3QgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IG9iai5yZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImFtb3VudFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke29iai5yZXdhcmQuY291bnR9YDtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJzaWduX2RheXNcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTdCN0VcdTUyMzAke29iai5kYXlzfVx1NTkyOWA7XHJcblxyXG4gICAgICAgIGxldCBza2luOiBzdHJpbmcgPSBcIlwiLFxyXG4gICAgICAgICAgICBidG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZ2V0X2J0blwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGJ0bi5kYXRhU291cmNlID0gb2JqLmlkO1xyXG4gICAgICAgIGlmIChvYmouaWQgPiBVc2VySW5mby5zaWduSW5JZCkge1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LnkgPSAxMDM7XHJcbiAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfZG9uZS5wbmdgO1xyXG5cclxuICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnNpZ25JbkRheXMgPj0gb2JqLmRheXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uc2lnbkluSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmlkID09IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5saXN0WzBdLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfZ2V0LnBuZ2A7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmlkIC0gVXNlckluZm8uc2lnbkluSWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2dldC5wbmdgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfcmVjZWl2ZWQucG5nYDtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bi5za2luID0gc2tpbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ2V0X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTk4ODZcdTUzRDZcdTU5NTZcdTUyQjFcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWduSW5JZCA9IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuc2lnbkluUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFELCBzaWduSW5JZDogc2lnbkluSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBzaWduSW5JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduSW5MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJld2FyZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5nZXQoc2lnbkluSWQpLnJld2FyZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogZS50YXJnZXQgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiByZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiByZXdhcmQub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkID8gMSA6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9kZWZhdWx0IGNsYXNzIFNwZWVkVXBWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVlZFVwVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGltZUxiLCB0aXBzOlwiXHU1MkEwXHU5MDFGXHU2NUY2XHU5NUY0XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0aW1lTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGltZXNMYiwgdGlwczpcIlx1NTE2OFx1NEY1M1x1NTJBMFx1OTAxRlx1NTI2OVx1NEY1OVx1NkIyMVx1NjU3MFx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGltZXNMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzcGVlZFVwQnRuLCB0aXBzOlwiXHU1MTY4XHU0RjUzXHU1MkEwXHU5MDFGXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzcGVlZFVwQnRuOiBMYXlhLkxhYmVsO1xyXG5cclxuICAgIHByaXZhdGUgY2FsbDogRnVuY3Rpb247XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5jYWxsID0gZGF0YS5jYWxsO1xyXG4gICAgICAgIGxldCB0aW1lID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcImFsbF9zcGVlZF91cF90aW1lXCIpLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICB0aGlzLnRpbWVMYi50ZXh0ID0gYCR7TWF0aC5jZWlsKHRpbWUgLyA2MCl9XHU1MjA2XHU5NDlGYDtcclxuICAgICAgICB0aGlzLnRpbWVzTGIudGV4dCA9IGBcdTRFQ0FcdTY1RTVcdTUyNjlcdTRGNTkke1VzZXJJbmZvLmFkdmVydGlzZVRpbWVzfVx1NkIyMWA7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFVwQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghVXNlckluZm8uaXNGaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMTAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9ndWlkX2hhbmQsIFtcclxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuQm94KS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkVXBCdG4ubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludCgyNTAsIDEyMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLmlzRmlyc3RUaW1lKSBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNwZWVkVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3BlZWRfdXBcIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5pc0ZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9ndWlkX2hhbmQsIFtmYWxzZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTcGVlZFVwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFEIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBhZHZlcnRpc2VUaW1lczogbnVtYmVyOyBzcGVlZFVwVGltZXM6IG51bWJlciB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9IGQuc3BlZWRVcFRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IGQuYWR2ZXJ0aXNlVGltZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVXNlckluZm8uc3BlZWRVcFRpbWVzID09IENvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNpZ25JbkRheXMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TcGVlZFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxhbmRfc3BlZWRfdXApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCBlLnRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsKSB0aGlzLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uIH0gZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4uL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuLi9jb3JlL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvbk9iaiB7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExaWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1QjhDXHU2MjEwICovXHJcbiAgICBvazogYm9vbGVhbjtcclxufVxyXG5cclxuLy8gIFRhc2tWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRhc2tMaXN0LCB0aXBzOlwiXHU0RUZCXHU1MkExXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0YXNrTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRhc2tMaXN0KCk7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLml0ZW1SZW5kZXIpO1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhc2tMaXN0KCkge1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QuYXJyYXkgPSBUYXNrU2VydmljZS5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtUmVuZGVyKGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgb2JqID0gVGFza1NlcnZpY2UubGlzdFtpXS5iYXNlO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrU2VydmljZS5nZXRUYXNrKG9iai5pZCk7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmouaWNvbjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBvYmoudGl0bGU7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiZGVzY1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7b2JqLmRlc2N9KCR7XHJcbiAgICAgICAgICAgICh0YXNrPy50aW1lcyA+IG9iai50aW1lcyA/IG9iai50aW1lcyA6IHRhc2s/LnRpbWVzKSB8fCAwXHJcbiAgICAgICAgfS8ke29iai50aW1lc30pYDtcclxuXHJcbiAgICAgICAgY29uc3QgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gb2JqLnJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiYW1vdW50XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcInhcIiArIG9iai5yZXdhcmQuY291bnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJnb19ydW5cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuT2JqOiBCdXR0b25PYmogPSB7XHJcbiAgICAgICAgICAgIGlkOiBvYmouaWQsXHJcbiAgICAgICAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1x1NURGMlx1OTg4Nlx1NTNENlxyXG4gICAgICAgIGlmICh0YXNrPy5yZWNlaXZlKSB7XHJcbiAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ190b21hcm93LnBuZ1wiO1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL1x1NTNFRlx1OTg4Nlx1NTNENlxyXG4gICAgICAgICAgICBpZiAodGFzaz8udGltZXMgPj0gb2JqLnRpbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfZ2V0LnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnRuT2JqLm9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ19kb25lLnBuZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IGJ0bk9iajtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX3J1blwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bk9iajogQnV0dG9uT2JqID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChidG5PYmoub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1ODNCN1x1NTNENlx1NTk1Nlx1NTJCMVxyXG4gICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnRhc2tSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFELCB0YXNrSWQ6IGJ0bk9iai5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gVGFza1NlcnZpY2UuZ2V0VGFzayhidG5PYmouaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5yZWNlaXZlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk9iai5vayA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhc2tMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX3Rhc2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHRhc2suYmFzZS5yZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRhc2suYmFzZS5yZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcChidG5PYmouaWQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBqdW1wKGlkLCB0YXJnZXQpIHtcclxuICAgICAgICBzd2l0Y2ggKGlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMTpcclxuICAgICAgICAgICAgICAgIGF3YWl0IEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAwMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDEyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDAyOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA1OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA4OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA5OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxMDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMTE6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDEyOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBQbGFudFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UsIHsgV2FyZUhvdXNlRGF0YSB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG4vKipcclxuICogXHU0RUQzXHU1RTkzXHJcbiAqL1xyXG4vL0ZpZWxkTGV2ZWxVcFZpZXcgV2FyZWhvdXNlVmlldyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhcmVob3VzZVZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU3MjY5XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTmFtZSwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbU5hbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1EZXNjLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxXHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUljb24sIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxDb3VudExiLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxXHU1MUZBXHU1NTJFXHU2NTcwXHU5MUNGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsbENvdW50TGI6IExheWEuVGV4dElucHV0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbEJveCwgdGlwczpcIlx1NTFGQVx1NTUyRVx1NzI2OVx1NTRDMVx1NEVGN1x1NjgzQ1x1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxCb3g6IExheWEuSEJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxHb2xkLCB0aXBzOlwiXHU5MUQxXHU1RTAxXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsbEdvbGQ6IExheWEuSEJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxEaWFtb25kLCB0aXBzOlwiXHU5NEJCXHU3N0YzXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsbERpYW1vbmQ6IExheWEuSEJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2VsbEJ0biwgdGlwczpcIlx1NTFGQVx1NTUyRVx1NzY4NGljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNlbGxCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNlbGxBZEJ0biwgdGlwczpcIlx1NTFGQVx1NTUyRVx1NzY4NGljb24gXHU1RTdGXHU1NDRBXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzZWxsQWRCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmVtcHR5X2xiLCB0aXBzOlwiXHU3QTdBXHU3Njg0XHU2M0QwXHU3OTNBXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBlbXB0eV9sYjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBkYXRhTGlzdDogV2FyZUhvdXNlRGF0YVtdW10gPSBbXTtcclxuICAgIC8qKiBcdTkwMDlcdTRFMkRcdTc2ODRcdTcyNjlcdTU0QzEgXHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHNlbGVjdEl0ZW1JbmRleDogc3RyaW5nID0gXCIwLDBcIjtcclxuICAgIC8qKiBcdTkwMDlcdTRFMkRcdTc2ODRcdTcyNjlcdTU0QzFcdTY1NzBcdTYzNkUgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbURhdGE6IFdhcmVIb3VzZURhdGE7XHJcbiAgICAvKiogXHU5MDA5XHU0RTJEXHU1MUZBXHU1NTJFXHU3MjY5XHU1NEMxXHU3Njg0XHU2NTcwXHU5MUNGICovXHJcbiAgICBwcml2YXRlIHNlbGVjdEl0ZW1TZWxsQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1MzU1XHU0RUY3IFx1OTFEMVx1NUUwMSAqL1xyXG4gICAgcHJpdmF0ZSB1bml0UHJpY2VHb2xkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTM1NVx1NEVGNyBcdTk0QkJcdTc3RjMgKi9cclxuICAgIHByaXZhdGUgdW5pdFByaWNlRGlhbW9uZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmRha2FpY2FuZ2t1KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnJlbmRlckl0ZW1MaXN0KTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0KCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRGVzYyhudWxsKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbEdvbGQucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxEaWFtb25kLnJlbW92ZVNlbGYoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbENvdW50TGIub24oTGF5YS5FdmVudC5JTlBVVCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSBOdW1iZXIodGhpcy5pdGVtU2VsbENvdW50TGIudGV4dCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsbENvdW50TGIudGV4dCA9IFwiMVwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID4gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxpc3QoKSB7XHJcbiAgICAgICAgbGV0IGkgPSAwLFxyXG4gICAgICAgICAgICB5ID0gMCxcclxuICAgICAgICAgICAgaGFzU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgV2FyZWhvdXNlU2VydmljZS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGFMaXN0W3ldKSB0aGlzLmRhdGFMaXN0W3ldID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUxpc3RbeV0ucHVzaChkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBkLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1EYXRhPy5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgZC5iYXNlLmlkID09IHRoaXMuc2VsZWN0SXRlbURhdGE/LmJhc2UuaWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGQuYmFzZS5pZCA9PSB0aGlzLnNlbGVjdEl0ZW1EYXRhPy5iYXNlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNTZWxlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaWYgKGkgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgICAgIHkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIWhhc1NlbGVjdCAmJiB0aGlzLmRhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1JbmRleCA9IFwiMCwwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5kYXRhTGlzdDtcclxuICAgICAgICB0aGlzLmVtcHR5X2xiLnZpc2libGUgPSAhdGhpcy5kYXRhTGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJJdGVtTGlzdChjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFMaXN0W2ldO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShgaXRlbV8ke3h9YCkgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgICAgIGlmIChkYXRhW3hdKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kYXRhU291cmNlID0gYCR7aX0sJHt4fWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICBpY29uLnNraW4gPSBkYXRhW3hdLmJhc2UuaWNvbjtcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKSBhcyBMYXlhLkxhYmVsXHJcbiAgICAgICAgICAgICAgICApLnRleHQgPSBgJHtkYXRhW3hdLmJhc2UubmFtZX1fJHtkYXRhW3hdLmNvdW50fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5pdGVtTGlzdC5zZWxlY3RlZEluZGV4ICYmIHRoaXMuc2VsZWN0SXRlbUluZGV4ID09IGl0ZW0uZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oaWNvbiwgeyB5OiAwIH0sIDE1MCwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbURhdGEgPSBkYXRhW3hdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVzYyhkYXRhW3hdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWNvbi55ID0gNTY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGljb24ueSAhPSA1NikgTGF5YS5Ud2Vlbi50byhpY29uLCB7IHk6IDU2IH0sIDE1MCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLldhcmVob3VzZVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzBcIjpcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8yXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1JbmRleCA9IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpOyAvLyBcdThGRDlcdTkxQ0NcdTk3MDBcdTg5ODFcdTRGMThcdTUzMTZcdTczQjBcdTU3MjhcdTUwNUFcdTc2ODRcdTY2MkZcdTUyMzdcdTY1QjBcdTY1NzRcdTRFMkFcdTUyMTdcdTg4NjhcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQrKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPiB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWR1Y2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA8IDEpIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWxsQnRuQWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInNlbGxCdG5cIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidG5OYW1lID0gZS50YXJnZXQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAud2FyZWhvdXNlU2VsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wid2FyZWhvdXNlU2VsbFwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2VsZWN0SXRlbURhdGEuYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5OYW1lID09IFwic2VsbEJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UucmVkdWNlQW1vdW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbURhdGEuYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVzYyhudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkTGlzdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXRQcmljZUdvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChDb25maWdHYW1lLmdvbGRJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdFByaWNlR29sZCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYnRuTmFtZSA9PSBcInNlbGxCdG5BZFwiID8gMiA6IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdFByaWNlRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZGlhbW9uZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0UHJpY2VEaWFtb25kICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChidG5OYW1lID09IFwic2VsbEJ0bkFkXCIgPyAyIDogMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bk5hbWUgPT0gXCJzZWxsQnRuQWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogdGhpcy5zZWxsQnRuIGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTFGQVx1NTFGQVx1NTUyRVx1NEZFMVx1NjA2Rlx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZURlc2MoZDogV2FyZUhvdXNlRGF0YSkge1xyXG4gICAgICAgIGlmICghZCkge1xyXG4gICAgICAgICAgICAodGhpcy5pdGVtSWNvbi5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKHRoaXMuaXRlbUljb24ucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbERpYW1vbmQucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxHb2xkLnJlbW92ZVNlbGYoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtSWNvbi5za2luID0gZC5iYXNlLmljb247XHJcbiAgICAgICAgdGhpcy5pdGVtTmFtZS50ZXh0ID0gZC5iYXNlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5pdGVtRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2M7XHJcbiAgICAgICAgbGV0IHByaWNlR29sZDogUmV3YXJkQ3VycmVuY3lCYXNlLCBwcmljZURpYW1vbmQ6IFJld2FyZEN1cnJlbmN5QmFzZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGQuYmFzZS5nYWluLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQuYmFzZS5nYWluW3hdKTtcclxuICAgICAgICAgICAgaWYgKCFkLmJhc2UuZ2Fpblt4XS5jb3VudCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChkLmJhc2UuZ2Fpblt4XS5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQpIHtcclxuICAgICAgICAgICAgICAgIHByaWNlR29sZCA9IGQuYmFzZS5nYWluW3hdO1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXRlbVNlbGxHb2xkLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID1cclxuICAgICAgICAgICAgICAgICAgICBkLmJhc2UuZ2Fpblt4XS5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGxCb3guYWRkQ2hpbGQodGhpcy5pdGVtU2VsbEdvbGQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJpY2VEaWFtb25kID0gZC5iYXNlLmdhaW5beF07XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pdGVtU2VsbERpYW1vbmQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgICAgIGQuYmFzZS5nYWluW3hdLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsbEJveC5hZGRDaGlsZCh0aGlzLml0ZW1TZWxsRGlhbW9uZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IGQuY291bnQ7XHJcbiAgICAgICAgdGhpcy51bml0UHJpY2VHb2xkID0gcHJpY2VHb2xkPy5jb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudW5pdFByaWNlRGlhbW9uZCA9IHByaWNlRGlhbW9uZD8uY291bnQgfHwgMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1M0VGXHU0RUU1XHU1MUZBXHU1NTJFXHU3Njg0XHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlU2VsZWN0U2VsbENvdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQgPSB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKyBcIlwiO1xyXG4gICAgICAgICh0aGlzLml0ZW1TZWxsR29sZC5nZXRDaGlsZEJ5TmFtZShcInByaWNlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKiB0aGlzLnVuaXRQcmljZUdvbGQgKyBcIlwiO1xyXG4gICAgICAgICh0aGlzLml0ZW1TZWxsRGlhbW9uZC5nZXRDaGlsZEJ5TmFtZShcInByaWNlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKiB0aGlzLnVuaXRQcmljZURpYW1vbmQgKyBcIlwiO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IEFib3V0VmlldyBmcm9tIFwiLi92aWV3L0Fib3V0Vmlld1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQnV0dG9uXCJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi9jb21wb25lbnRzL1ZpZXdTaG93QW5pXCJcbmltcG9ydCBBZGRMYW5kVmlldyBmcm9tIFwiLi92aWV3L0FkZExhbmRWaWV3XCJcbmltcG9ydCBCdXlWaXRhbGl0eVZpZXcgZnJvbSBcIi4vdmlldy9CdXlWaXRhbGl0eVZpZXdcIlxuaW1wb3J0IEZpZWxkTGV2ZWxVcFZpZXcgZnJvbSBcIi4vdmlldy9GaWVsZExldmVsVXBWaWV3XCJcbmltcG9ydCBGcmllbmRzRGVzY1ZpZXcgZnJvbSBcIi4vdmlldy9GcmllbmRzRGVzY1ZpZXdcIlxuaW1wb3J0IEZyaWVuZHNSZXdhcmRWaWV3IGZyb20gXCIuL3ZpZXcvRnJpZW5kc1Jld2FyZFZpZXdcIlxuaW1wb3J0IEZyaWVuZHNWaWV3IGZyb20gXCIuL3ZpZXcvRnJpZW5kc1ZpZXdcIlxuaW1wb3J0IEhpbnRWaWV3IGZyb20gXCIuL3ZpZXcvSGludFZpZXdcIlxuaW1wb3J0IExvZ2luVmlldyBmcm9tIFwiLi92aWV3L0xvZ2luVmlld1wiXG5pbXBvcnQgTWFpbERlc2NWaWV3IGZyb20gXCIuL3ZpZXcvTWFpbERlc2NWaWV3XCJcbmltcG9ydCBNYWlsVmlldyBmcm9tIFwiLi92aWV3L01haWxWaWV3XCJcbmltcG9ydCBNYWluVmlldyBmcm9tIFwiLi92aWV3L01haW5WaWV3XCJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50XCJcbmltcG9ydCBPcmRlclZpZXcgZnJvbSBcIi4vdmlldy9PcmRlclZpZXdcIlxuaW1wb3J0IE92ZXJWaWV3IGZyb20gXCIuL3ZpZXcvT3ZlclZpZXdcIlxuaW1wb3J0IFNldHRpbmdWaWV3IGZyb20gXCIuL3ZpZXcvU2V0dGluZ1ZpZXdcIlxuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL3ZpZXcvU2hvcFZpZXdcIlxuaW1wb3J0IFNpZ25JblZpZXcgZnJvbSBcIi4vdmlldy9TaWduSW5WaWV3XCJcbmltcG9ydCBTcGVlZFVwVmlldyBmcm9tIFwiLi92aWV3L1NwZWVkVXBWaWV3XCJcbmltcG9ydCBUYXNrVmlldyBmcm9tIFwiLi92aWV3L1Rhc2tWaWV3XCJcbmltcG9ydCBXYXJlaG91c2VWaWV3IGZyb20gXCIuL3ZpZXcvV2FyZWhvdXNlVmlld1wiXHJcbi8qXHJcbiogXHU2RTM4XHU2MjBGXHU1MjFEXHU1OUNCXHU1MzE2XHU5MTREXHU3RjZFO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xMDgwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTkyMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInZpZXcvQWJvdXRWaWV3LnRzXCIsQWJvdXRWaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9CdXR0b24udHNcIixCdXR0b24pO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL1ZpZXdTaG93QW5pLnRzXCIsVmlld1Nob3dBbmkpO1xuICAgICAgICByZWcoXCJ2aWV3L0FkZExhbmRWaWV3LnRzXCIsQWRkTGFuZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0J1eVZpdGFsaXR5Vmlldy50c1wiLEJ1eVZpdGFsaXR5Vmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRmllbGRMZXZlbFVwVmlldy50c1wiLEZpZWxkTGV2ZWxVcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNEZXNjVmlldy50c1wiLEZyaWVuZHNEZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHNcIixGcmllbmRzUmV3YXJkVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1ZpZXcudHNcIixGcmllbmRzVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvSGludFZpZXcudHNcIixIaW50Vmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTG9naW5WaWV3LnRzXCIsTG9naW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9NYWlsRGVzY1ZpZXcudHNcIixNYWlsRGVzY1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haWxWaWV3LnRzXCIsTWFpbFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haW5WaWV3LnRzXCIsTWFpblZpZXcpO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50LnRzXCIsRmllbGRDb21wb25lbnQpO1xuICAgICAgICByZWcoXCJ2aWV3L09yZGVyVmlldy50c1wiLE9yZGVyVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvT3ZlclZpZXcudHNcIixPdmVyVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU2V0dGluZ1ZpZXcudHNcIixTZXR0aW5nVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU2hvcFZpZXcudHNcIixTaG9wVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU2lnbkluVmlldy50c1wiLFNpZ25JblZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NwZWVkVXBWaWV3LnRzXCIsU3BlZWRVcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1Rhc2tWaWV3LnRzXCIsVGFza1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1dhcmVob3VzZVZpZXcudHNcIixXYXJlaG91c2VWaWV3KTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCAiaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCIuL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcIi4vY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcIi4vY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcIi4vY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwiLi9jb3JlL0FwcFwiO1xyXG5jbGFzcyBNYWluIHtcclxuICAgIC8qKiBcdTgxRUFcdTVCOUFcdTRFNDlcdTZFMzJcdTY3RDNpZFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgc3RhdGljIGN1c3RvbVJlbmRlcklEOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vXHU2ODM5XHU2MzZFSURFXHU4QkJFXHU3RjZFXHU1MjFEXHU1OUNCXHU1MzE2XHU1RjE1XHU2NENFXHJcbiAgICAgICAgaWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG4gICAgICAgIGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG4gICAgICAgIExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25WID0gR2FtZUNvbmZpZy5hbGlnblY7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSDtcclxuICAgICAgICAvL1x1NTE3Q1x1NUJCOVx1NUZBRVx1NEZFMVx1NEUwRFx1NjUyRlx1NjMwMVx1NTJBMFx1OEY3RHNjZW5lXHU1NDBFXHU3RjAwXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgTGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuICAgICAgICAvL1x1NjI1M1x1NUYwMFx1OEMwM1x1OEJENVx1OTc2Mlx1Njc3Rlx1RkYwOFx1OTAxQVx1OEZDN0lERVx1OEJCRVx1N0Y2RVx1OEMwM1x1OEJENVx1NkEyMVx1NUYwRlx1RkYwQ1x1NjIxNlx1ODAwNXVybFx1NTczMFx1NTc0MFx1NTg5RVx1NTJBMGRlYnVnPXRydWVcdTUzQzJcdTY1NzBcdUZGMENcdTU3NDdcdTUzRUZcdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDlcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuICAgICAgICBMYXlhLmFsZXJ0R2xvYmFsRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5iZ0NvbG9yID0gXCIjZmZmZmZmXCI7XHJcblxyXG4gICAgICAgIERFQlVHICYmIEdhbWVDb25maWcuc3RhdCAmJiBMYXlhLlN0YXQuc2hvdygpO1xyXG5cclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1OEQ0NFx1NkU5MFx1NzI0OFx1NjcyQ1x1NjNBN1x1NTIzNlx1RkYwQ3ZlcnNpb24uanNvblx1NzUzMUlERVx1NTNEMVx1NUUwM1x1NTI5Rlx1ODBGRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NEU1Rlx1NEUwRFx1NUY3MVx1NTRDRFx1NTQwRVx1N0VFRFx1NkQ0MVx1N0EwQlxyXG4gICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksXHJcbiAgICAgICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT05cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1NTkyN1x1NUMwRlx1NTZGRVx1NjYyMFx1NUMwNFx1RkYwQ1x1NTJBMFx1OEY3RFx1NUMwRlx1NTZGRVx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NTNEMVx1NzNCMFx1NUMwRlx1NTZGRVx1NTcyOFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1OTFDQ1x1OTc2Mlx1RkYwQ1x1NTIxOVx1NEYxOFx1NTE0OFx1NTJBMFx1OEY3RFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1RkYwQ1x1ODAwQ1x1NEUwRFx1NjYyRlx1NUMwRlx1NTZGRVxyXG4gICAgICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXHJcbiAgICAgICAgICAgIFwiZmlsZWNvbmZpZy5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ29uZmlnTG9hZGVkKCkge1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHJcbiAgICAgICAgQ29uZmlnW1wiY3VzdG9tUmVuZGVySURcIl0gPSBbXTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LmluaXQoQ29uZmlnR2FtZS5iYXNlVXJsKTtcclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2dpbl9nYW1lLCB0aGlzLCB0aGlzLmxvZ2luR2FtZSk7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIudXNlQXVkaW9NdXNpYyA9IGZhbHNlO1xyXG4gICAgICAgIEFwcENvcmUubGlzdGVuQXBwRnVuY3Rpb24oKTtcclxuXHJcbiAgICAgICAgLy8gVmlld01hbmFnZXIuaW5zdC5pbml0KCk7XHJcblxyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihSZXMudmlld3MuTG9naW5WaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0R2FtZURhdGEoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oeyB1cmk6IEFwcEV2ZW50TWFwLmNsb3NlSW1hZ2UsIGRhdGE6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExheWEuVmlldy5zZXRMb2FkaW5nUGFnZShlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIExheWEuVmlldy5zaG93TG9hZGluZ1BhZ2UobnVsbCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoOTk5OTk5OTk5OTk5OTk5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luR2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luR2FtZSgpIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgICBSZXMuc2NlbmVzLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2tcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXMuc2NlbmVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlNdXNpYyhSZXMuYXVkaW9zLkJHTSwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRHYW1lRGF0YShkOiBOZXRJbml0KSB7fVxyXG59XHJcbi8vXHU2RkMwXHU2RDNCXHU1NDJGXHU1MkE4XHU3QzdCXHJcbm5ldyBNYWluKCk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTyxNQUFXO0FBQVgsWUFBVyxZQUFYO0FBRUgsa0NBQWdCO0FBR2hCLGlDQUFlO0FBR2YsaUNBQWU7QUFHZixrQ0FBZ0I7QUFHaEIsK0JBQWE7QUFFYiw4QkFBWTtBQUVaLGdDQUFjO0FBRWQscUNBQW1CO0FBc0JuQixvQ0FBa0I7QUFFbEIsdUNBQXFCO0FBRXJCLG1DQUFpQjtBQUFBLEtBOUNIO0FBb0RYLE1BQVc7QUFBWCxZQUFXLGNBQVg7QUFFSCx5QkFBSztBQUVMLGlDQUFhO0FBRWIsOEJBQVU7QUFFVixxQ0FBaUI7QUFFakIsOEJBQVU7QUFFVixpQ0FBYTtBQUViLHVDQUFtQjtBQUVuQix1Q0FBbUI7QUFFbkIsc0NBQWtCO0FBRWxCLG1DQUFlO0FBQUEsS0FwQkQ7OztBQ2xEVixNQUFLO0FBQUwsWUFBSyxRQUFMO0FBR0EsMEJBQVk7QUFFWiw0QkFBYztBQUVkLGdDQUFrQjtBQUVsQixpQ0FBbUI7QUFFbkIsZ0NBQWtCO0FBRWxCLGtDQUFvQjtBQUVwQiw0QkFBYztBQUVkLHlCQUFXO0FBRVgsMEJBQVk7QUFFWiw2QkFBZTtBQUVmLHlCQUFXO0FBRVgseUJBQVc7QUFFWCwwQkFBWTtBQUVaLHlCQUFXO0FBRVgsNEJBQWM7QUFFZCx5QkFBVztBQUVYLDJCQUFhO0FBRWIsNEJBQWM7QUFFZCx5QkFBVztBQUVYLDhCQUFnQjtBQUFBLEtBekNYO0FBNENMLE1BQUs7QUFBTCxZQUFLLFNBQUw7QUFHQSwwQkFBVztBQUVYLDZCQUFjO0FBRWQseUJBQVU7QUFFViw4QkFBZTtBQUVmLDZCQUFjO0FBRWQsOEJBQWU7QUFFZixxQkFBTTtBQUFBLEtBZkQ7QUFxQkwsTUFBTSxTQUFTO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNHO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUE7QUFNWixNQUFNLE1BQU07QUFBQSxJQUNS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LEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLEdBQUUsU0FBUSxrQ0FBUSxRQUFPLGtDQUFRLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFlBQVcsU0FBUSxJQUFHLFNBQVEsb0NBQVUsUUFBTyxvQ0FBVSxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxXQUFVLFNBQVEsSUFBRyxTQUFRLG9DQUFVLFFBQU8sb0NBQVUsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLEdBQUUsU0FBUSx1QkFBTyxRQUFPLHVCQUFPLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxHQUFFLFNBQVEsbUNBQVMsUUFBTyxtQ0FBUyxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxXQUFVLFNBQVEsR0FBRSxTQUFRLG1DQUFTLFFBQU8sbUNBQVMsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLElBQUcsU0FBUSxvQ0FBVSxRQUFPLG9DQUFVLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFlBQVcsU0FBUSxHQUFFLFNBQVEsbUNBQVMsUUFBTyxtQ0FBUyxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxZQUFXLFNBQVEsR0FBRSxTQUFRLDRCQUFPLFFBQU8sbUNBQVMsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLEdBQUUsU0FBUSxrQ0FBUSxRQUFPLDRCQUFPLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFlBQVcsU0FBUSxHQUFFLFNBQVEsNEJBQU8sUUFBTyx3Q0FBUyxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxXQUFVLFNBQVEsSUFBRyxTQUFRLHdDQUFTLFFBQU8sOEJBQVMsUUFBTyxTQUFPLFVBQVMsQ0FBQyxFQUFDLE1BQUssTUFBSyxRQUFPLEdBQUUsVUFBUyxnQkFBYyxFQUFDLE1BQUssTUFBSyxRQUFPLElBQUcsVUFBUyxnQkFBYyxFQUFDLE1BQUssTUFB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QUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE9BQU0sYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsS0FBSSxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLEtBQUksYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxN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
