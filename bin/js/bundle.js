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
  })(AppEventMap || (AppEventMap = {}));

  // src/common/Res.ts
  var views;
  (function(views3) {
    views3["AddLandView"] = "scenes/views/AddLandView.scene";
    views3["BuyVitalityView"] = "scenes/views/BuyVitalityView.scene";
    views3["FieldLevelUpView"] = "scenes/views/FieldLevelUpView.scene";
    views3["FriendsDescView"] = "scenes/views/FriendsDescView.scene";
    views3["FriendsRewardView"] = "scenes/views/FriendsRewardView.scene";
    views3["FriendsView"] = "scenes/views/FriendsView.scene";
    views3["HintView"] = "scenes/views/HintView.scene";
    views3["LoginView"] = "scenes/views/LoginView.scene";
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
    "scenes/views/LoginView.scene",
    "scenes/views/HintView.scene",
    "scenes/views/FriendsView.scene",
    "scenes/views/FriendsRewardView.scene",
    "scenes/views/FriendsDescView.scene",
    "scenes/views/FieldLevelUpView.scene",
    "scenes/views/BuyVitalityView.scene",
    "scenes/views/AddLandView.scene",
    "scenes/prefab/GetReward.prefab",
    "scenes/prefab/FloatRewardIcon.prefab",
    "scenes/prefab/FieldPrefab.prefab",
    "scenes/components/Button.prefab",
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
    "res/img_homepageBg3.png",
    "res/img_homepageBg2.png",
    "res/img_homepageBg1.png",
    "res/img_farmlandLogo.png",
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
    ADSpeedUpTimes: 6
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
  var Table = { "task": [{ "id": 1001, "reward": "1001:50", "times": 1, "title": "\u7B7E\u5230\u9886\u94BB\u77F3", "desc": "\u770B\u89C6\u9891\u7B7E\u5230", "icon": null }, { "id": 1002, "reward": "1001:100", "times": 10, "title": "\u83DC\u5730\u65BD\u80A510\u6B21", "desc": "\u83DC\u5730\u52A0\u901F10\u6B21", "icon": null }, { "id": 1003, "reward": "1001:50", "times": 10, "title": "\u83DC\u5730\u6536\u83B710\u6B21", "desc": "\u83DC\u5730\u6536\u83B710\u6B21", "icon": null }, { "id": 1004, "reward": "1001:50", "times": 5, "title": "\u8BBF\u53CB5\u6B21", "desc": "\u5077\u83DC5\u6B21", "icon": null }, { "id": 1005, "reward": "1001:20", "times": 3, "title": "\u5582\u517B\u72D7\u72D73\u6B21", "desc": "\u5582\u517B\u72D7\u72D73\u6B21", "icon": null }, { "id": 1006, "reward": "1001:20", "times": 5, "title": "\u8D2D\u4E70\u9972\u65995\u6B21", "desc": "\u8D2D\u4E70\u9972\u65995\u6B21", "icon": null }, { "id": 1007, "reward": "1001:20", "times": 10, "title": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "desc": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "icon": null }, { "id": 1008, "reward": "1001:30", "times": 3, "title": "\u51FA\u552E\u4F5C\u72693\u6B21", "desc": "\u51FA\u552E\u4F5C\u72693\u6B21", "icon": null }, { "id": 1009, "reward": "1001:100", "times": 5, "title": "\u6DFB\u52A0\u597D\u53CB", "desc": "\u6DFB\u52A0\u597D\u53CB5\u4E2A", "icon": null }, { "id": 1010, "reward": "1001:50", "times": 1, "title": "\u5206\u4EAB\u5F97\u597D\u793C", "desc": "\u5206\u4EAB\u4E00\u6B21", "icon": null }, { "id": 1011, "reward": "1001:30", "times": 3, "title": "\u6307\u5B9A\u79CD\u690D", "desc": "\u79CD\u690D\u6307\u5B9A\u79CD\u5B50", "icon": null }, { "id": 1012, "reward": "1001:50", "times": 10, "title": "\u770B\u89C6\u9891", "desc": "\u770B\u89C6\u989110\u6B21", "icon": null }], "signIn": [{ "id": 1001, "days": 7, "reward": "1001:20000" }, { "id": 1002, "days": 10, "reward": "1001:30000" }, { "id": 1003, "days": 15, "reward": "1001:50000" }, { "id": 1004, "days": 20, "reward": "1001:80000" }, { "id": 1005, "days": 30, "reward": "1001:120000" }, { "id": 1006, "days": 50, "reward": "1001:180000" }, { "id": 1007, "days": 80, "reward": "1001:300000" }, { "id": 1008, "days": 100, "reward": "1001:350000" }, { "id": 1009, "days": 150, "reward": "1001:500000" }], "plant": [{ "id": 1001, "name": "\u6C34\u7A3B", "icon": "plant_icon/1002_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1002, "name": "\u5927\u8C46", "icon": "plant_icon/1004_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1003, "name": "\u5927\u849C", "icon": "plant_icon/1012_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "240", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1004, "name": "\u5305\u5FC3\u83DC", "icon": "plant_icon/1006_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "1~2", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1005, "name": "\u571F\u8C46", "icon": "plant_icon/1007_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1006, "name": "\u841D\u535C", "icon": "plant_icon/1005_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1007, "name": "\u5C0F\u9EA6", "icon": "plant_icon/1001_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1008, "name": "\u8FA3\u6912", "icon": "plant_icon/1010_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "600", "unlock_cost": "1002:2000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1009, "name": "\u9EC4\u74DC", "icon": "plant_icon/1011_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1010, "name": "\u8304\u5B50", "icon": "plant_icon/1013_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1011, "name": "\u80E1\u841D\u535C", "icon": "plant_icon/1008_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:4500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1012, "name": "\u5357\u74DC", "icon": "plant_icon/1014_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:5000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1013, "name": "\u7389\u7C73", "icon": "plant_icon/1003_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:5500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1014, "name": "\u7518\u8517", "icon": "plant_icon/1015_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1015, "name": "\u756A\u8304", "icon": "plant_icon/1009_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }], "pet": [{ "id": 1001, "name": "\u65FA\u8D22", "icon": "pet_feed/1001_dog.png", "vitality_max": 100, "vitality_consume": 10, "cost": "1002:3000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 34, "ability": 42 }, { "id": 1002, "name": "\u6C64\u5706", "icon": "pet_feed/1007_dog.png", "vitality_max": 100, "vitality_consume": 15, "cost": "1002:4000", "desc": "\u989C\u503C\u3001\u667A\u5546\u53CC\u53CC\u5728\u7EBF", "sensitive": 40, "ability": 48 }, { "id": 1003, "name": "\u8089\u5E72", "icon": "pet_feed/1009_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:4500", "desc": "\u6700\u5FE0\u8BDA\u7684\u4F19\u4F34", "sensitive": 45, "ability": 55 }, { "id": 1004, "name": "\u4E8C\u54C8", "icon": "pet_feed/1002_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:5000", "desc": "\u7EDD\u4E0D\u62C6\u5BB6\uFF01", "sensitive": 48, "ability": 60 }, { "id": 1005, "name": "\u5927\u773C\u775B", "icon": "pet_feed/1005_dog.png", "vitality_max": 100, "vitality_consume": 17, "cost": "1002:7000", "desc": "\u6D3B\u597D\u5403\u7684\u5C11", "sensitive": 50, "ability": 75 }, { "id": 1006, "name": "\u5C0F\u5C3E\u5DF4", "icon": "pet_feed/1004_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:7500", "desc": "\u6B66\u529B\u5929\u8D4B\u5DF2\u70B9\u6EE1~\u62FF\u634F\uFF01", "sensitive": 60, "ability": 80 }, { "id": 1007, "name": "\u7403\u7403", "icon": "pet_feed/1008_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u5C31\u4E24\u4E2A\u5B57\uFF0C\u542C\u8BDD\uFF01", "sensitive": 69, "ability": 85 }, { "id": 1008, "name": "\u5C0F\u767D", "icon": "pet_feed/1003_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u770B\u5BB6\u3001\u770B\u83DC\u3001\u770B\u5B69\u5B50", "sensitive": 76, "ability": 88 }, { "id": 1009, "name": "\u70B9\u70B9", "icon": "pet_feed/1006_dog.png", "vitality_max": 100, "vitality_consume": 19, "cost": "1002:10000", "desc": "\u4F60\u503C\u5F97\u62E5\u6709\uFF01", "sensitive": 85, "ability": 93 }, { "id": 1010, "name": "\u95F7\u58A9", "icon": "pet_feed/1010_dog.png", "vitality_max": 100, "vitality_consume": 30, "cost": "1002:15000", "desc": "\u957F\u5F97\u5C31\u5F88\u51F6\uFF0C\u6293\u5C0F\u5077\u66F4\u51F6", "sensitive": 90, "ability": 99 }], "order": [{ "id": 1, "commission": "0.5", "condition": "1001:2" }, { "id": 2, "commission": "0.48", "condition": "1001:1,1002:2" }, { "id": 3, "commission": "0.39", "condition": "1001:4,1003:2,1002:3" }, { "id": 4, "commission": "0.61", "condition": "1002:4,1003:3,1004:3,1001:4" }, { "id": 5, "commission": "0.61", "condition": "1004:6,1002:5,1005:4,1001:5" }, { "id": 6, "commission": "0.48", "condition": "1003:10,1004:5,1005:3,1006:3" }, { "id": 7, "commission": "0.43", "condition": "1007:4,1003:5,1004:7,1006:10" }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:5,1002:5" }, { "id": 9, "commission": "0.39", "condition": "1006:2,1009:10,1007:8,1003:8" }, { "id": 10, "commission": "0.22", "condition": "1006:10,1010:5,1008:10,1009:6" }, { "id": 11, "commission": "0.76", "condition": "1009:5,1004:10,1001:9,1002:10" }, { "id": 12, "commission": "0.43", "condition": "1007:6,1003:11,1011:6,1005:10" }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:8" }, { "id": 14, "commission": "0.7", "condition": "1013:10,1008:8,1006:6,1001:10" }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:10,1011:12,1001:10" }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17" }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:6,1015:12,1001:14" }, { "id": 18, "commission": 0.48, "condition": "1008:14,1011:12,1009:15,1002:5" }, { "id": 19, "commission": 0.75, "condition": "1013:10,1003:20,1014:11,1001:7" }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:12" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:14,1005:16,1007:15" }, { "id": 22, "commission": "0.4", "condition": "1015:19,1007:12,1011:5,1004:17" }, { "id": 23, "commission": 0.2, "condition": "1003:19,1014:2,1015:16,1001:14" }, { "id": 24, "commission": 0.77, "condition": "1014:13,1001:17,1008:18,1004:5" }, { "id": 25, "commission": 0.64, "condition": "1012:23,1011:19,1010:15,1015:20" }, { "id": 26, "commission": 0.03, "condition": "1002:21,1011:12,1012:22,1003:19" }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:10,1011:17" }, { "id": 28, "commission": 0.53, "condition": "1014:17,1007:12,1011:17,1003:17" }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:18" }, { "id": 30, "commission": 0.14, "condition": "1011:17,1014:19,1006:14,1004:30" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:19,1006:11" }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:22,1012:12,1008:20" }, { "id": 33, "commission": 0.2, "condition": "1012:16,1013:11,1002:23,1009:16" }, { "id": 34, "commission": 0.02, "condition": "1009:19,1010:12,1011:14,1012:20" }, { "id": 35, "commission": 0.13, "condition": "1001:18,1004:19,1013:16,1003:10" }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:17,1007:17" }, { "id": 37, "commission": 0.44, "condition": "1012:14,1010:20,1002:14,1011:11" }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18" }, { "id": 39, "commission": 0.36, "condition": "1007:18,1012:13,1004:16,1002:16" }, { "id": 40, "commission": 0.28, "condition": "1004:10,1005:10,1008:18,1011:16" }, { "id": 41, "commission": 0.18, "condition": "1010:18,1009:18,1008:17,1011:26" }, { "id": 42, "commission": 0.43, "condition": "1009:11,1005:18,1007:20,1002:13" }, { "id": 43, "commission": 0.14, "condition": "1006:10,1004:14,1014:11,1008:15" }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:18,1002:24,1007:19" }, { "id": 45, "commission": 0.11, "condition": "1012:15,1010:23,1007:13,1011:13" }, { "id": 46, "commission": 0.39, "condition": "1003:12,1007:23,1010:16,1002:14" }, { "id": 47, "commission": 0.49, "condition": "1010:14,1015:20,1003:15,1014:16" }, { "id": 48, "commission": 0.06, "condition": "1013:17,1007:14,1008:17,1001:10" }, { "id": 49, "commission": 0.48, "condition": "1002:26,1004:11,1009:12,1006:20" }, { "id": 50, "commission": 0.05, "condition": "1006:17,1012:19,1008:20,1015:11" }, { "id": 51, "commission": 0.04, "condition": "1011:18,1004:19,1002:25,1003:11" }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:10,1001:15,1004:26" }, { "id": 53, "commission": 0.08, "condition": "1014:14,1012:12,1010:20,1015:18" }, { "id": 54, "commission": 0.45, "condition": "1005:22,1002:13,1009:16,1015:17" }, { "id": 55, "commission": 0.7, "condition": "1001:23,1014:19,1005:17,1010:15" }, { "id": 56, "commission": 0.05, "condition": "1006:17,1005:19,1009:17,1003:18" }, { "id": 57, "commission": 0.67, "condition": "1007:21,1008:17,1002:16,1009:25" }, { "id": 58, "commission": 0.32, "condition": "1006:10,1008:25,1005:24,1007:19" }, { "id": 59, "commission": 0.79, "condition": "1012:25,1009:30,1013:16,1008:15" }, { "id": 60, "commission": 0.69, "condition": "1015:26,1012:27,1010:31,1001:23" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:25,1011:15,1002:17" }, { "id": 62, "commission": 0.44, "condition": "1015:21,1007:15,1011:18,1006:26" }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:27" }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:29,1004:25" }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:30,1014:20,1005:15" }, { "id": 66, "commission": 0.73, "condition": "1004:15,1008:25,1002:14,1012:14" }, { "id": 67, "commission": 0.13, "condition": "1001:16,1012:20,1011:20,1003:10" }, { "id": 68, "commission": 0.69, "condition": "1013:24,1008:23,1006:16,1007:17" }, { "id": 69, "commission": 0.37, "condition": "1015:30,1004:29,1013:17,1009:10" }, { "id": 70, "commission": 0.71, "condition": "1010:23,1004:31,1011:17,1012:11" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:26,1003:28,1015:13" }, { "id": 72, "commission": 0.31, "condition": "1005:25,1002:38,1012:19,1010:14" }, { "id": 73, "commission": 0.39, "condition": "1012:34,1006:22,1003:27,1004:20" }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:30,1001:20" }, { "id": 75, "commission": 0.18, "condition": "1006:31,1014:30,1008:12,1002:25" }, { "id": 76, "commission": 0.51, "condition": "1007:21,1012:20,1004:11,1014:20" }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:16,1012:24,1007:30" }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:12" }, { "id": 79, "commission": 0.65, "condition": "1006:26,1004:18,1007:12,1011:27" }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:24" }, { "id": 81, "commission": 0.14, "condition": "1012:10,1015:28,1002:14,1003:38" }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14" }, { "id": 83, "commission": 0.53, "condition": "1010:19,1003:38,1007:12,1015:20" }, { "id": 84, "commission": 0.62, "condition": "1005:29,1014:26,1002:18,1007:38" }, { "id": 85, "commission": 0.37, "condition": "1011:10,1001:17,1012:12,1004:12" }, { "id": 86, "commission": 0.59, "condition": "1009:25,1011:20,1006:14,1015:11" }, { "id": 87, "commission": 0.11, "condition": "1006:26,1005:19,1013:10,1014:29" }, { "id": 88, "commission": 0.08, "condition": "1008:37,1011:24,1015:12,1014:11" }, { "id": 89, "commission": 0.02, "condition": "1002:17,1003:28,1005:11,1010:14" }, { "id": 90, "commission": 0.32, "condition": "1002:19,1013:28,1007:25,1001:13" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:10,1014:10,1007:16" }, { "id": 92, "commission": 0.13, "condition": "1004:38,1011:13,1008:15,1007:29" }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:39,1006:38,1008:11" }, { "id": 94, "commission": 0.22, "condition": "1002:36,1001:17,1013:16,1005:31" }, { "id": 95, "commission": 0.15, "condition": "1005:16,1001:14,1015:34,1008:16" }, { "id": 96, "commission": 0.06, "condition": "1003:24,1001:32,1007:28,1005:18" }, { "id": 97, "commission": 0.74, "condition": "1013:32,1009:23,1006:30,1011:20" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1002:0", "gain": null }, { "id": 2, "reward": "1002:1500", "cost": "1002:10000", "gain": 0.1 }, { "id": 3, "reward": "1002:2000", "cost": "1002:30000", "gain": 0.25 }, { "id": 4, "reward": "1002:2500", "cost": "1002:50000", "gain": 0.4 }, { "id": 5, "reward": "1002:3000", "cost": "1002:100000", "gain": 0.55 }], "feed": [{ "id": 1001, "name": "\u997C\u5E72", "icon": "pet_feed/1001_feed.png", "vitality": 1, "cost": "1002:30", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1002, "name": "\u575A\u679C", "icon": "pet_feed/1002_feed.png", "vitality": 2, "cost": "1002:50", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1003, "name": "\u706B\u817F", "icon": "pet_feed/1003_feed.png", "vitality": 5, "cost": "1002:100", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1004, "name": "\u725B\u8089", "icon": "pet_feed/1004_feed.png", "vitality": 50, "cost": "1002:900", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1005, "name": "\u732A\u8089", "icon": "pet_feed/1005_feed.png", "vitality": 20, "cost": "1002:460", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1006, "name": "\u9E21\u8089", "icon": "pet_feed/1006_feed.png", "vitality": 10, "cost": "1002:270", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }], "currency": [{ "id": 1001, "name": "\u94BB\u77F3", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "\u91D1\u5E01", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_times", "value": 30 }, { "id": "all_speed_up_time", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:2000,1002:5000,1002:10000,1002:20000,1002:20000,1002:30000,1002:50000" }, { "id": "goldDefault", "value": "1002:100" }, { "id": "diamondDefault", "value": "1001:50" }, { "id": "ADTimesLimit", "value": 30 }, { "id": "ADSpeedUptimes", "value": 6 }, { "id": "vitalityBuyCostGold", "value": "1002:10000" }, { "id": "vitalityLimit", "value": 10 }, { "id": "landAmountMax", "value": 9 }, { "id": "petDefaultVitality", "value": 100 }, { "id": "petDigestIntervalTime", "value": 60 }, { "id": "Videorewards", "value": "1001:100" }] };

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
          this.taskUpdate(1002);
          this.updateUserInfo(d.data);
          break;
        case ApiHttp.ad:
          this.taskUpdate(1001);
          this.updateUserInfo(d.data);
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
      if (d.call) {
        d.call(d.data);
      }
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
    }
    init(url) {
      this.baseUrl = url;
      if (this.xhr)
        return;
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4) {
          switch (xmlhttp.status) {
            case 200:
              this.completeHandler(JSON.parse(xmlhttp.responseText));
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
                  this.completeHandler(d);
                }
              }
              if (!xmlhttp.status) {
                this.completeHandler({
                  code: 404,
                  data: { message: "\u670D\u52A1\u5668\u672A\u54CD\u5E94\uFF0C\u8BF7\u91CD\u8BD5" },
                  uri: ""
                });
              }
              break;
          }
        }
      };
      this.xhr = xmlhttp;
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
        this.sendData = data;
        if (!data.headers) {
          data.headers = ["Authorization", `Bearer ${LocalStorageService_default.getJSON().token}`];
        }
        console.log(`%c ==> send %c${data.api} %c${JSON.stringify(data.data)}`, `color:#82ccdd;font-weight:700;`, `color:#eb4d4b;font-weight:700;`, `color:#f8c291;font-weight:700;`);
        let uri = data.baseUrl + data.api;
        if (!data.api) {
          core_default.view.open(Res_default.views.HintView, {
            parm: { text: `http \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A` }
          });
          return;
        }
        this.xhr.open("POST", uri, true);
        this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        this.xhr.setRequestHeader("Authorization", `Bearer ${LocalStorageService_default.getJSON().token}`);
        let sendData = [];
        if (data.data) {
          Object.keys(data.data).forEach((d) => {
            sendData.push(`${d}=${data.data[d]}`);
          });
          if (((_a = data.data) == null ? void 0 : _a.type) == ConfigGame_default.ApiTypeAD) {
            yield AppCore.runAppFunction({
              uri: AppEventMap.ad,
              data: null,
              timestamp: Date.now()
            });
            TaskService_default.taskAddTimes(1001);
            TaskService_default.taskAddTimes(1012);
          }
        }
        this.xhr.send(sendData.join("&"));
        return new Promise((resolve) => {
          this.backResolveEvent = resolve;
        });
      });
    }
    completeHandler(e) {
      var _a, _b;
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
          call: (_b = this.sendData) == null ? void 0 : _b.call,
          resolveEvent: this.backResolveEvent
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
            },
            call: (d) => {
              var _a;
              if ((_a = this.data) == null ? void 0 : _a.call) {
                this.data.call();
                core_default.view.close(Res_default.views.AddLandView);
              }
            }
          });
          break;
        case "ad_btn":
          HttpControl.inst.send({
            api: ApiHttp.landUnlock,
            data: {
              landId: this.data.id,
              type: ConfigGame_default.ApiTypeAD
            },
            call: (d) => {
              var _a;
              if ((_a = this.data) == null ? void 0 : _a.call) {
                this.data.call();
                core_default.view.close(Res_default.views.AddLandView);
              }
              core_default.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
            }
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
            },
            call: (d) => {
              var _a;
              UserInfo_default.vitality = d.vitality;
              if ((_a = this.data) == null ? void 0 : _a.call) {
                this.data.call();
              }
              core_default.view.close(Res_default.views.BuyVitalityView);
            }
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
            },
            call: (d) => {
              if (e.target.name == "upgradeAdBtn") {
                core_default.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
              }
              if (this.data.call) {
                this.data.call();
              }
              core_default.view.close(Res_default.views.FieldLevelUpView);
            }
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
      this.intType = 1e3;
    }
    onOpened() {
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
      }
    }
    onHdDestroy() {
    }
  };

  // src/view/FriendsView.ts
  var FriendsView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.viewState = 1;
      this.friends = [];
      this.friendsList = [];
    }
    onOpened(d) {
      this.friends = d.list;
      this.friendsList = this.friends;
      this.updateListData();
      this.addBox.visible = false;
      this.addBox.active = false;
      this.itemList.array = this.friendsList;
      this.itemList.renderHandler = new Laya.Handler(this, this.itemRender);
      this.itemList.vScrollBarSkin = null;
      this.userKey.text = `\u6211\u7684\u53CB\u60C5\u7801\uFF1A${UserInfo_default.key}`;
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
          } else {
            this.viewState = 2;
            this.addBox.visible = true;
            this.addBox.active = true;
            this.itemList.array = [];
            this.itemList.height = 590;
            this.addFriend.skin = `game/img_friendBtn.png`;
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
          this.addFriend.skin = `game/img_friendBtn.png`;
          break;
        case "desc_btn":
          core_default.view.open(Res_default.views.FriendsDescView);
          break;
        case "reward_btn":
          core_default.view.open(Res_default.views.FriendsRewardView);
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
    visitFriend(target) {
      core_default.view.setOverView(true, () => {
        let data = target.dataSource;
        HttpControl.inst.send({
          api: ApiHttp.friendVisit,
          data: {
            friendId: data.uid
          },
          call: (d) => {
            core_default.view.close(Res_default.views.FriendsView);
            core_default.eventGlobal.event(EventMaps.go_friend_home, d);
            Laya.timer.once(300, this, () => {
              core_default.view.setOverView(false);
            });
          }
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
            },
            call: (d) => {
              for (let x = 0; x < this.friends.length; x++) {
                if (this.friends[x].uid == data.uid) {
                  this.friends.splice(x, 1);
                  break;
                }
              }
              this.itemList.refresh();
            }
          });
        },
        cancelCall: () => {
        }
      });
    }
    allowFriend(target) {
      let data = target.dataSource;
      HttpControl.inst.send({
        api: ApiHttp.friendAllow,
        data: {
          friendId: data.uid
        },
        call: (d) => {
          data.applyIng = 0;
          this.itemList.refresh();
        }
      });
    }
    applyEvent(target) {
      let data = target.dataSource;
      HttpControl.inst.send({
        api: ApiHttp.friendApply,
        data: {
          friendId: data.uid
        },
        call: (d) => {
          this.friendsList = [];
          this.itemList.array = this.friendsList;
          this.itemList.refresh();
          core_default.view.openHint({ text: "\u5DF2\u53D1\u9001\u6FC0\u60C5", call: () => {
          } });
        }
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
      HttpControl.inst.send({
        api: ApiHttp.friendSearch,
        data: {
          key: this.keyInputNode.text
        },
        call: (d) => {
          this.friendsList = [d];
          this.itemList.array = this.friendsList;
          this.itemList.refresh();
        }
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
      this.loadBarOldWidth = 0;
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
        case "test_btn":
          this.login(false);
          break;
      }
    }
    login(isWx) {
      return __async(this, null, function* () {
        if (LocalStorageService_default.getJSON().token) {
          HttpControl.inst.send({
            api: ApiHttp.loginToken,
            call: (d) => {
              var _a;
              if ((_a = this.data) == null ? void 0 : _a.call)
                this.data.call(d);
              this.loginBox.visible = false;
              this.loadBox.visible = true;
            },
            error: (code, data) => {
              LocalStorageService_default.clear();
              this.loginBox.visible = true;
              this.loadBox.visible = false;
            }
          });
        } else {
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
            console.log(data);
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
          HttpControl.inst.send({
            api: ApiHttp.login,
            data: {
              wxId: wxOpenId,
              avatar,
              nickname
            },
            call: (d) => {
              var _a;
              if ((_a = this.data) == null ? void 0 : _a.call)
                this.data.call(d);
              this.loginBox.visible = false;
              this.loadBox.visible = true;
              AppCore.runAppFunction({
                uri: AppEventMap.wxLoginSuccess,
                data: {}
              });
            },
            error: (code, data) => {
              LocalStorageService_default.clear();
              this.loginBox.visible = true;
              this.loadBox.visible = false;
            }
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

  // src/view/MailView.ts
  var MailView = class extends GameScript {
    onClick(e) {
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
      this.matureNode = null;
      this.emptyFieldNode = null;
      this.unlockIcon = "";
      this.fieldId = null;
      this.buildIng = false;
      this.isOuter = false;
      this.canSteal = false;
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
      var _a, _b;
      if (this.data) {
        this.showShadowIcon(false);
        this.topStateIconAni(false);
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
          this.timeBox.visible = true;
          this.timeBox.active = true;
          this.icon.skin = TableAnalyze_default.table("plant").get(this.data.productId).growingIcon;
          this.showShadowIcon(true);
          this.updateCountDown();
          this.topStateIcon.visible = true;
          this.topStateIconAni(true);
          if (this.isOuter) {
            this.topStateIcon.visible = false;
          } else {
            this.setStateIconSkin(1);
            this.plantIconAni(true);
          }
        } else {
          if (this.data.productId) {
            this.topStateIcon.visible = true;
            this.showShadowIcon(true);
            this.topStateIconAni(true);
            this.updateCountDown();
            this.setStateIconSkin(3);
          }
        }
      } else {
        this.lvNode.visible = false;
        this.fieldNode.skin = `main_scene/img_wasteland.png`;
        this.icon.skin = this.unlockIcon;
        this.showIcon(false);
        this.topStateIconAni(false);
        this.topStateIcon.visible = false;
        this.showTimeBox(false);
        this.showShadowIcon(false);
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        (_a = this.topStateIconTween) == null ? void 0 : _a.destroy();
        this.topStateIconTween = null;
        (_b = this.plantIconTween) == null ? void 0 : _b.destroy();
        this.plantIconTween = null;
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
      this.topStateIcon.y = -107;
      if (!this.topStateIconTween) {
        this.topStateIconTween = Laya.TimeLine.to(this.topStateIcon, { y: this.topStateIcon.y - 50 }, 800, null).to(this.topStateIcon, { y: this.topStateIcon.y }, 800);
        this.topStateIconTween.play(null, true);
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
        this.plantIconTween = Laya.TimeLine.to(this.icon, { skewX: 6 }, 900).to(this.icon, { skewX: -6 }, 1800).to(this.icon, { skewX: 0 }, 900);
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
          this.data.matureTimeLeft--;
          this.countDownLb.text = Tools.formatSeconds(this.data.matureTimeLeft);
          return this.updateCountDown();
        });
      } else {
        this.data.matureTimeLeft = 0;
        console.log("\u5012\u8BA1\u65F6\u7ED3\u675F ");
        this.icon.skin = (_b = TableAnalyze_default.table("plant").get((_a = this.data) == null ? void 0 : _a.productId)) == null ? void 0 : _b.matureIcon;
        if (!this.buildIng)
          this.setStateIconSkin(3);
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
        console.log(this.fieldId, this.buildIng);
        core_default.audio.playSound(Res_default.audios.button_click);
        if (this.isOuter) {
          console.log("\u5916\u51FA");
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
              core_default.view.open(Res_default.views.SpeedUpView);
              return;
            } else {
              console.log("\u6536\u83B7");
              let plantAmount = 0, rewardDiamond = 0;
              yield HttpControl.inst.send({
                api: ApiHttp.landGather,
                data: {
                  landId: this.data.id,
                  type: ConfigGame_default.ApiTypeDefault
                },
                call: (d) => {
                  plantAmount = d.amount;
                  WarehouseService_default.add(this.data.productId, d.amount);
                  core_default.audio.playSound(Res_default.audios.shoucai);
                  rewardDiamond = d.rewardDiamond;
                }
              });
              let plantObj = TableAnalyze_default.table("plant").get(this.data.productId), rewardList = [
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
              this.clearField();
              return;
            }
          }
          core_default.view.open(Res_default.views.ShopView, {
            parm: {
              id: 0,
              parm: { landId: this.fieldId },
              call: (d) => {
                console.log(d);
                this.landList.get(this.fieldId).productId = d.base.id;
                this.landList.get(this.fieldId).matureTimeLeft = d.base.mature_time;
                this.data = this.landList.get(this.fieldId);
                this.renderData();
                core_default.audio.playSound(Res_default.audios.zhongzhi);
              }
            }
          });
        } else {
          console.log(this.data);
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
                LandService_default.addLand(this.data);
                this.updateData();
              }
            }
          });
        }
      });
    }
    stealFood(data) {
      if (!data.productId || data.matureTimeLeft) {
        return;
      }
      if (!this.canSteal) {
        console.log("\u5DF2\u7ECF\u4E0D\u53EF\u5077");
        core_default.view.openHint({ text: "\u7ED9\u6211\u7559\u70B9\u5427", call: () => {
        } });
        return;
      }
      core_default.audio.playSound(Res_default.audios.goujiaosheng);
      HttpControl.inst.send({
        api: ApiHttp.landSteal,
        data: {
          landId: this.data.id,
          type: ConfigGame_default.ApiTypeDefault,
          uid: this.stealUid
        },
        call: (d) => {
          UserInfo_default.vitality = d.vitality;
          this.canSteal = false;
          this.topStateIconAni(false);
          WarehouseService_default.add(this.data.productId, d.amount);
          core_default.audio.playSound(Res_default.audios.shoucai);
          let plantObj = TableAnalyze_default.table("plant").get(d.plantId), rewardList = [
            {
              obj: plantObj,
              count: d.amount,
              posType: 3
            }
          ];
          core_default.eventGlobal.event(EventMaps.play_get_reward, {
            node: this.owner,
            list: rewardList
          });
        }
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
      this.landList = [];
      this.isOuter = false;
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
        "res/atlas/main_scene.png",
        "res/atlas/game.png"
      ].forEach((e) => {
        if (e.endsWith("png"))
          Laya.loader.clearTextureRes(e);
      });
    }
    onHdAwake() {
      Laya.stage.addChild(this.topLayerOnStage);
      this.landUpLayer.visible = false;
      this.landUpLayer.active = false;
      this.vitalityBox.visible = false;
      this.goHomeBtn.visible = false;
      for (let x = 0; x < this.landBox.numChildren; x++) {
        this.landList.push(this.landBox.getChildAt(x).getComponent(FieldComponent));
      }
      this.landList.sort((a, b) => {
        return a.fieldId - b.fieldId;
      });
      Laya.timer.frameOnce(1, this, () => {
        core_default.eventGlobal.event(EventMaps.update_field);
        this.hitLandAdd();
      });
    }
    hitLandAdd() {
      for (let x = 0, l = this.landList.length; x < l; x++) {
        if (!this.landList[x].data) {
          this.landList[x].showIcon(true);
          break;
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
      this.updateTask();
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
    gameInit(d) {
      console.log(d);
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
          core_default.view.open(Res_default.views.MailView);
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
        case "dog":
          core_default.view.open(Res_default.views.ShopView, { parm: { id: 2 } });
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
    openFriend() {
      HttpControl.inst.send({
        api: ApiHttp.friendList,
        call: (d) => {
          core_default.view.open(Res_default.views.FriendsView, { parm: d });
        }
      });
    }
    buyVitality() {
      core_default.view.open(Res_default.views.BuyVitalityView);
    }
    updateOrder() {
      var _a;
      let box = this.orderBox, d = TableAnalyze_default.table("order").get(UserInfo_default.orderLevel + 1), reward, rewardCount = 0, curCount = 0, maxCount = 0, progress = 0;
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
        HttpControl.inst.send({
          api: ApiHttp.orderReward,
          data: {
            orderId: UserInfo_default.orderLevel + 1
          },
          call: () => {
            d.condition.forEach((e) => {
              WarehouseService_default.reduceAmount(e.plant.id, e.count);
            });
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
            UserInfo_default.orderLevel++;
          }
        });
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
        let scale = 50 / icon.width;
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
          data: {},
          call: () => {
            this.isOuter = false;
            Laya.timer.once(300, this, () => {
              core_default.view.setOverView(false);
              this.goFriend(null);
            });
          }
        });
      });
    }
    goToNeighbor() {
      core_default.view.setOverView(true, () => {
        HttpControl.inst.send({
          api: ApiHttp.neighbor,
          data: {
            type: ConfigGame_default.ApiTypeDefault
          },
          call: (d) => {
            this.isOuter = true;
            this.goFriend(d);
            Laya.timer.once(300, this, () => {
              core_default.view.setOverView(false);
            });
          }
        });
      });
    }
    goFriendListen(d) {
      this.isOuter = true;
      this.goFriend(d);
    }
    goFriend(d) {
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
          land.updateData({ list: otherLands });
          land.stealUid = d.uid;
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
      }
      if (this.isOuter) {
        this.petBox.visible = false;
        this.taskBox.visible = false;
      } else {
        if (UserInfo_default.warePetId)
          this.petBox.visible = true;
        this.taskBox.visible = true;
      }
    }
  };
  __decorateClass([
    core_default.eventOn(ApiHttp.login)
  ], MainView.prototype, "gameInit", 1);
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
      }
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
    }
    onHdAwake() {
      this.itemList.renderHandler = new Laya.Handler(this, this.updateItem);
      this.itemList.selectHandler = new Laya.Handler(this, this.onSelect);
      this.itemList.vScrollBarSkin = null;
      this.priceList.vScrollBarSkin = null;
      this.priceList.renderHandler = new Laya.Handler(this, this.updatePriceItem);
      this.priceList.selectHandler = new Laya.Handler(this, this.onPriceSelect);
      core_default.observableProperty.watch(UserInfo_default, this).key("diamond", (v) => {
        this.diamondFont.value = v;
      });
    }
    onOpened(e) {
      console.log(e);
      this.data = e;
      this.topBtnSelectIndex = (e == null ? void 0 : e.id) || 0;
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
      console.log(e.target.name);
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
          HttpControl.inst.send({
            api: ApiHttp.landSow,
            data: {
              landId: (_a = this.data.parm) == null ? void 0 : _a.landId,
              plantId: this.getDataList()[this.itemListSelectIndex].base.id,
              type: ConfigGame_default.ApiTypeDefault
            },
            call: (d) => {
              var _a2;
              ViewManager.inst.close(Res_default.views.ShopView);
              if ((_a2 = this.data) == null ? void 0 : _a2.call)
                this.data.call(this.getDataList()[this.itemListSelectIndex]);
            }
          });
          break;
        case "unlock_buy":
        case "ad_unlock":
          HttpControl.inst.send({
            api: ApiHttp.seedsUnlock,
            data: {
              plantId: this.getDataList()[this.itemListSelectIndex].base.id,
              type: e.target.name == "ad_unlock" ? ConfigGame_default.ApiTypeAD : ConfigGame_default.ApiTypeDefault
            },
            call: (d) => {
              PlantService_default.list[this.itemListSelectIndex].lock = false;
              this.itemList.changeItem(this.itemListSelectIndex, PlantService_default.list[this.itemListSelectIndex]);
              if (e.target.name == "ad_unlock") {
                core_default.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
              }
            }
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
      }
    }
    feedBuy() {
      let feed = this.getDataList()[this.itemListSelectIndex];
      if (!feed)
        return;
      HttpControl.inst.send({
        api: ApiHttp.feedBuy,
        data: {
          feedId: feed.base.id,
          type: ConfigGame_default.ApiTypeDefault
        },
        call: (d) => {
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
        }
      });
    }
    petGoWatch(petId) {
      HttpControl.inst.send({
        api: ApiHttp.petWear,
        data: {
          petId,
          type: ConfigGame_default.ApiTypeDefault
        },
        call: (d) => {
          UserInfo_default.warePetId = petId;
          this.updatePet();
        }
      });
    }
    petBuy() {
      let { base } = PetService_default.list[this.selectPetIndex];
      HttpControl.inst.send({
        api: ApiHttp.petBuy,
        data: {
          petId: base.id,
          type: ConfigGame_default.ApiTypeDefault
        },
        call: (d) => {
          PetService_default.list[this.selectPetIndex].lock = false;
          this.updatePet();
          if (!UserInfo_default.warePetId)
            UserInfo_default.warePetId = base.id;
          if (!UserInfo_default.petVitality) {
            UserInfo_default.petVitality = base.vitality_max;
            UserInfo_default.digestCountDown = ConfigGame_default.petDigestIntervalTime;
          }
        }
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
          this.priceList.array = [, 1, 1, 1];
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
    }
    updatePriceItem(cell, i) {
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
            data: { type: ConfigGame_default.ApiTypeAD, signInId },
            call: (d) => {
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
            }
          });
          break;
      }
    }
  };

  // src/view/SpeedUpView.ts
  var SpeedUpView = class extends core_default.gameScript {
    onOpened() {
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
          HttpControl.inst.send({
            api: ApiHttp.landSpeedUp,
            data: { type: ConfigGame_default.ApiTypeAD },
            call: (d) => {
              UserInfo_default.speedUpTimes = d.speedUpTimes;
              UserInfo_default.advertiseTimes = d.advertiseTimes;
              if (UserInfo_default.speedUpTimes == ConfigGame_default.ADSpeedUpTimes) {
                UserInfo_default.signInDays++;
              }
              core_default.view.close(Res_default.views.SpeedUpView);
              core_default.eventGlobal.event(EventMaps.land_speed_up);
              core_default.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
            }
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
              data: { type: ConfigGame_default.ApiTypeAD, taskId: btnObj.id },
              call: (d) => {
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
              }
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
              data: null,
              timestamp: Date.now()
            });
            HttpControl.inst.send({
              api: ApiHttp.ad,
              data: {},
              call: (d) => {
                core_default.eventGlobal.event(EventMaps.play_ad_get_reward, target);
                this.taskList.refresh();
              }
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
      this.dataList = [];
      this.selectItemIndex = "0,0";
      this.selectItemSellCount = 0;
      this.unitPriceGold = 0;
      this.unitPriceDiamond = 0;
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
      let i = 0, y = 0;
      WarehouseService_default.list.forEach((d) => {
        if (!this.dataList[y])
          this.dataList[y] = [];
        this.dataList[y].push(d);
        i++;
        if (i > 2) {
          i = 0;
          y++;
        }
      });
      this.itemList.array = this.dataList;
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
          HttpControl.inst.send({
            api: ApiHttp.warehouseSell,
            data: {
              id: this.selectItemData.base.id,
              amount: this.selectItemSellCount,
              type: e.target.name == "sellBtn" ? ConfigGame_default.ApiTypeDefault : ConfigGame_default.ApiTypeAD
            },
            call: (d) => {
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
                  count: this.selectItemSellCount * this.unitPriceGold * (e.target.name == "sellBtnAd" ? 2 : 1),
                  posType: 1
                });
              }
              if (this.unitPriceDiamond) {
                rewardList.push({
                  obj: TableAnalyze_default.table("currency").get(ConfigGame_default.diamondId),
                  count: this.selectItemSellCount * this.unitPriceDiamond * (e.target.name == "sellBtnAd" ? 2 : 1),
                  posType: 2
                });
              }
              if (e.target.name == "sellBtnAd") {
                core_default.eventGlobal.event(EventMaps.play_ad_get_reward, e.target);
              }
              core_default.eventGlobal.event(EventMaps.play_get_reward, {
                node: this.sellBtn,
                list: rewardList,
                callBack: () => {
                }
              });
            }
          });
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
      this.selectItemSellCount = Math.ceil(d.count / 2);
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
                resolve(null);
                this.initGameData(d);
              }
            },
            complete: (e) => {
              AppCore.runAppFunction({ uri: AppEventMap.closeImage, data: {} });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvcmUvQXVkaW9Db250cm9sLnRzIiwgIi4uLy4uL3NyYy9jb3JlL2luZGV4LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi50cyIsICIuLi8uLi9zcmMvY29tbW9uL0NvbmZpZ0dhbWUudHMiLCAiLi4vLi4vc3JjL2NvcmUvQXBwLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVGFibGUudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Ub29scy50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlQW5hbHl6ZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9QZXRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vTmV0TWFwcy50cyIsICIuLi8uLi9zcmMvY29tbW9uL0h0dHBEYXRhQ29udHJvbC50cyIsICIuLi8uLi9zcmMvY29tbW9uL0h0dHBDb250cm9sLnRzIiwgIi4uLy4uL3NyYy92aWV3L0FkZExhbmRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0J1eVZpdGFsaXR5Vmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GaWVsZExldmVsVXBWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZyaWVuZHNEZXNjVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GcmllbmRzUmV3YXJkVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GcmllbmRzVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9IaW50Vmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9Mb2dpblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpbFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvT3JkZXJWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L092ZXJWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NldHRpbmdWaWV3LnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9GZWVkU2VydmljZS50cyIsICIuLi8uLi9zcmMvdmlldy9TaG9wVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TaWduSW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NwZWVkVXBWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1Rhc2tWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1dhcmVob3VzZVZpZXcudHMiLCAiLi4vLi4vc3JjL0dhbWVDb25maWcudHMiLCAiLi4vLi4vc3JjL01haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxyXG4gKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjZcdTU0MERcdTc5RjBcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEV2ZW50TWFwcyB7XHJcbiAgICAvKiogbG9hZCBcdTc1NENcdTk3NjJcdThGREJcdTg4NENcdTY2RjRcdTY1QjAgKi9cclxuICAgIGxvYWRfcHJvZ3Jlc3MgPSBcImxvYWRfcHJvZ3Jlc3NcIixcclxuXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU1NzFGXHU1NzMwICovXHJcbiAgICB1cGRhdGVfZmllbGQgPSBcInVwZGF0ZV9maWVsZFwiLFxyXG5cclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTRFM0JcdTk4NzVcdThCQTJcdTUzNTVcdTY1NzBcdTYzNkUgKi9cclxuICAgIHVwZGF0ZV9PcmRlciA9IFwidXBkYXRlX09yZGVyXCIsXHJcblxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NTJBMFx1OTAxRiAqL1xyXG4gICAgbGFuZF9zcGVlZF91cCA9IFwibGFuZF9zcGVlZF91cFwiLFxyXG5cclxuICAgIC8qKiBcdThGREJcdTUxNjVcdTZFMzhcdTYyMEYgKi9cclxuICAgIGxvZ2luX2dhbWUgPSBcImxvZ2luX2dhbWVcIixcclxuICAgIC8qKiBcdTkwMDBcdTUxRkFcdTZFMzhcdTYyMEYgKi9cclxuICAgIGxvZ2luX291dCA9IFwibG9naW5fb3V0XCIsXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExICovXHJcbiAgICB1cGRhdGVfdGFzayA9IFwidXBkYXRlX3Rhc2tcIixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjRBRFx1NjUzRVx1ODNCN1x1NUY5N1x1NTk1Nlx1NTJCMVx1NTJBOFx1NzUzQlxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICB7XHJcbiAgICAgICAgLy9cdTk3MDBcdTg5ODFcdTk4REVcdTkxRDFcdTVFMDFcdTc2ODRcdTUzQzJcdTgwMDNcdTgyODJcdTcwQjlcclxuICAgICAgICBub2RlOiB0aGlzLm93bmVyLFxyXG4gICAgICAgIC8vXHU4OTgxXHU5OERFXHU3Njg0XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL1x1ODlFM1x1Njc5MFx1NTk3RFx1NzY4NFx1NUUyNmljb25cdTc2ODRcdTY1NzBcdTYzNkVcclxuICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KDEwMDEpLFxyXG4gICAgICAgICAgICAgICAgLy9cdTY1NzBcdTkxQ0ZcclxuICAgICAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgICAgICAgIC8vXHU4OTgxXHU5OERFXHU1M0JCXHU3Njg0XHU0RjREXHU3RjZFIDEgXHU5MUQxXHU1RTAxIDIgXHU5NEJCXHU3N0YzXHJcbiAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH1cclxuICAgICAqL1xyXG4gICAgcGxheV9nZXRfcmV3YXJkID0gXCJwbGF5X2dldF9yZXdhcmRcIixcclxuICAgIC8qKiBcdTc3MEJcdTVFN0ZcdTU0NEFcdTY0QURcdTY1M0VcdTU5NTZcdTUyQjFcdTgzQjdcdTgzQjdcdTVGOTdcdTUyQThcdTc1M0IgIFx1NEYyMFx1NTE2NVx1ODI4Mlx1NzBCOSAqL1xyXG4gICAgcGxheV9hZF9nZXRfcmV3YXJkID0gXCJwbGF5X2FkX2dldF9yZXdhcmRcIixcclxuICAgIC8qKiBcdTUzQkJcdTU5N0RcdTUzQ0JcdTVCQjYgKi9cclxuICAgIGdvX2ZyaWVuZF9ob21lID0gXCJnb19mcmllbmRfaG9tZVwiLFxyXG59XHJcblxyXG4vKipcclxuICogXHU0RTBFYXBwXHU0RUE0XHU0RTkyXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBcHBFdmVudE1hcCB7XHJcbiAgICAvKiogXHU3NzBCXHU1RTdGXHU1NDRBICovXHJcbiAgICBhZCA9IFwiYWRcIixcclxuICAgIC8qKiBcdTUxNzNcdTk1RURcdTVCODlcdTUzNTNcdTU0MkZcdTUyQThcdTkwNkVcdTdGNjkgKi9cclxuICAgIGNsb3NlSW1hZ2UgPSBcImNsb3NlSW1hZ2VcIixcclxuICAgIC8qKiBcdTVGQUVcdTRGRTFcdTc2N0JcdTVGNTUgKi9cclxuICAgIHd4TG9naW4gPSBcInd4TG9naW5cIixcclxuICAgIC8qKiBcdTVGQUVcdTRGRTFcdTc2N0JcdTVGNTVcdTYyMTBcdTUyOUYgKi9cclxuICAgIHd4TG9naW5TdWNjZXNzID0gXCJ3eExvZ2luU3VjY2Vzc1wiLFxyXG4gICAgLyoqIFx1NUZBRVx1NEZFMVx1NTIwNlx1NEVBQiAqL1xyXG4gICAgd3hTaGFyZSA9IFwid3hTaGFyZVwiLFxyXG4gICAgLyoqIFx1NTNDQlx1NzZERlx1NEU4Qlx1NEVGNlx1N0VERlx1OEJBMSBcdTY1NzBcdTYzNkVcdTY4M0NcdTVGMEYge3R5cGU6XHU1QkY5XHU1RTk0XHU4OTgxXHU3RURGXHU4QkExXHU3Njg0XHU3MEI5fSAqL1xyXG4gICAgZXZlbnRDb3VudCA9IFwiZXZlbnRDb3VudFwiLFxyXG59XHJcbiIsICIvL1x1NEVFM1x1NzgwMVx1NzUxRlx1NjIxMFx1RkYwQ1x1NEUwRFx1ODk4MVx1NjI0Qlx1NTJBOFx1NEZFRVx1NjUzOVxuXG4vKipcbiAqIFx1NzU0Q1x1OTc2Mlx1NTIxN1x1ODg2OFxuICovXG4gZXhwb3J0IGVudW0gdmlld3MgXG4gICAge1xuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lICovXG4gICAgICAgIEFkZExhbmRWaWV3ID0gXCJzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvQnV5Vml0YWxpdHlWaWV3LnNjZW5lICovXG4gICAgICAgIEJ1eVZpdGFsaXR5VmlldyA9IFwic2NlbmVzL3ZpZXdzL0J1eVZpdGFsaXR5Vmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lICovXG4gICAgICAgIEZpZWxkTGV2ZWxVcFZpZXcgPSBcInNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZyaWVuZHNEZXNjVmlldy5zY2VuZSAqL1xuICAgICAgICBGcmllbmRzRGVzY1ZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzRGVzY1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRnJpZW5kc1Jld2FyZFZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc1Jld2FyZFZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GcmllbmRzVmlldy5zY2VuZSAqL1xuICAgICAgICBGcmllbmRzVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lICovXG4gICAgICAgIEhpbnRWaWV3ID0gXCJzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTG9naW5WaWV3LnNjZW5lICovXG4gICAgICAgIExvZ2luVmlldyA9IFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZSAqL1xuICAgICAgICBNYWlsVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lICovXG4gICAgICAgIE1haW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lICovXG4gICAgICAgIE9yZGVyVmlldyA9IFwic2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9PdmVyVmlldy5zY2VuZSAqL1xuICAgICAgICBPdmVyVmlldyA9IFwic2NlbmVzL3ZpZXdzL092ZXJWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NldHRpbmdWaWV3LnNjZW5lICovXG4gICAgICAgIFNldHRpbmdWaWV3ID0gXCJzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2hvcFZpZXcgPSBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaWduSW5WaWV3LnNjZW5lICovXG4gICAgICAgIFNpZ25JblZpZXcgPSBcInNjZW5lcy92aWV3cy9TaWduSW5WaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NwZWVkVXBWaWV3LnNjZW5lICovXG4gICAgICAgIFNwZWVkVXBWaWV3ID0gXCJzY2VuZXMvdmlld3MvU3BlZWRVcFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgVGFza1ZpZXcgPSBcInNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9XYXJlaG91c2VWaWV3LnNjZW5lICovXG4gICAgICAgIFdhcmVob3VzZVZpZXcgPSBcInNjZW5lcy92aWV3cy9XYXJlaG91c2VWaWV3LnNjZW5lXCIsIFxuICAgIH1cblxuIGV4cG9ydCBlbnVtIGF1ZGlvcyBcbiAgICB7XG4gICAgICAgIC8qKiBhdWRpby96aG9uZ3poaS5tcDMgKi9cbiAgICAgICAgemhvbmd6aGkgPSBcInJlcy9hdWRpby96aG9uZ3poaS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby90dWRpc2hlbmdqaS5tcDMgKi9cbiAgICAgICAgdHVkaXNoZW5namkgPSBcInJlcy9hdWRpby90dWRpc2hlbmdqaS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9zaG91Y2FpLm1wMyAqL1xuICAgICAgICBzaG91Y2FpID0gXCJyZXMvYXVkaW8vc2hvdWNhaS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9nb3VqaWFvc2hlbmcubXAzICovXG4gICAgICAgIGdvdWppYW9zaGVuZyA9IFwicmVzL2F1ZGlvL2dvdWppYW9zaGVuZy5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9kYWthaWNhbmdrdS5tcDMgKi9cbiAgICAgICAgZGFrYWljYW5na3UgPSBcInJlcy9hdWRpby9kYWthaWNhbmdrdS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9idXR0b25fY2xpY2subXAzICovXG4gICAgICAgIGJ1dHRvbl9jbGljayA9IFwicmVzL2F1ZGlvL2J1dHRvbl9jbGljay5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9CR00ubXAzICovXG4gICAgICAgIEJHTSA9IFwicmVzL2F1ZGlvL0JHTS5tcDNcIiwgXG4gICAgfVxuXG4vKipcbiAqIFx1NzU0Q1x1OTc2Mlx1NTIxN1x1ODg2OFxuICovXG4gZXhwb3J0IGNvbnN0IHNjZW5lcyA9IFtcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1dhcmVob3VzZVZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NldHRpbmdWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9PdmVyVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9CdXlWaXRhbGl0eVZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvR2V0UmV3YXJkLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0Zsb2F0UmV3YXJkSWNvbi5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9GaWVsZFByZWZhYi5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL2NvbXBvbmVudHMvQnV0dG9uLnByZWZhYlwiLFxuICAgICAgICAgICAgXCJyZXMvbG9hZGluZ0JnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3dvb2R0aXRsZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZUhvdXNlQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmViZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zaGVsZi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnTWFpbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2xhbmRCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG91c2V0b3AucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzMucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzIucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfZmFybWxhbmRMb2dvLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3ZzLnZzXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvcHMuZnNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3pob25nemhpLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vdHVkaXNoZW5namkubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9zaG91Y2FpLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZ291amlhb3NoZW5nLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZGFrYWljYW5na3UubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9CR00ubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2xvYWQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9sb2FkLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5hdGxhc1wiXTtcbiAgICBcblxuLyoqXG4gKiBcdTYyNDBcdTY3MDlcdThENDRcdTZFOTBcbiAqL1xuY29uc3QgUmVzID0ge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBzY2VuZXM6IHNjZW5lcyxcbiAgICBhdWRpb3M6IGF1ZGlvcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcztcbiIsICIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5jb25zdCBFdmVudEdsb2JhbCA9IG5ldyBMYXlhLkV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1OEJBMlx1OTYwNVx1NEU4Qlx1NEVGNlx1NzY4NFx1N0M3Qlx1NzY4NFx1NTM5Rlx1NTc4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV2ZW50Q2xhc3M6IE1hcDxhbnksIHsga2V5OiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFdmVudE9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcbiAgICAgICAgaWYgKCFFdmVudENsYXNzLmdldCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIEV2ZW50Q2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBFdmVudENsYXNzLmdldCh0YXJnZXQpLnB1c2goeyBrZXk6IG5hbWUsIGZuOiBkZXNjcmlwdG9yLnZhbHVlIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1NUM1RVx1NjAyN1x1NjdFNVx1NjI3RVx1N0VEMVx1NUI5QVx1NTQwRFx1NzlGMFx1NzY4NFx1N0M3Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJpbmROYW1lQ2xhc3M6IE1hcDxhbnksIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRCeU5hbWUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIC8vICAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG5cclxuICAgIGlmICghQmluZE5hbWVDbGFzcy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgIEJpbmROYW1lQ2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgfVxyXG4gICAgQmluZE5hbWVDbGFzcy5nZXQodGFyZ2V0KS5wdXNoKHByb3BlcnR5S2V5KTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50R2xvYmFsO1xyXG4iLCAiY29uc3QgY2FsbGVyczogTWFwPGFueSwgRnVuY3Rpb25bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG5jbGFzcyBPYnNlcnZhYmxlQ29udHJvbDxjYWxsIGV4dGVuZHMgTGF5YS5TY3JpcHQ+IHtcclxuICAgIHByaXZhdGUga2V5RXZlbnRzOiBNYXA8YW55LCBNYXA8c3RyaW5nLCBGdW5jdGlvbltdPj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNcdTVDNUVcdTYwMjdcdTUwM0NcdTUzRDhcdTUzMTZcclxuICAgICAqICBbXHU1NzI4XHU3NTRDXHU5NzYyZGVzdHJveVx1NzY4NFx1NjVGNlx1NTAxOVx1NEYxQVx1ODFFQVx1NURGMVx1NkNFOFx1OTUwMFx1NzZEMVx1NTQyQ11cclxuICAgICAqIEBwYXJhbSBPYmogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHdhdGNoPFQgZXh0ZW5kcyB7fT4oT2JqOiBULCBjYWxsZXI6IGNhbGwpIHtcclxuICAgICAgICBpZiAoIWNhbGxlcnMuaGFzKGNhbGxlcikpIHtcclxuICAgICAgICAgICAgY2FsbGVycy5zZXQoY2FsbGVyLCBbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQga2V5RXZlbnQgPSB0aGlzLmtleUV2ZW50cztcclxuICAgICAgICBpZiAoIWtleUV2ZW50LmhhcyhPYmopKSB7XHJcbiAgICAgICAgICAgIGtleUV2ZW50LnNldChPYmosIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcdTc2ODRcdTVDNUVcdTYwMjdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUM1RVx1NjAyN1xyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsIFx1NTZERVx1OEMwM1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGtleUJpbmQgPSA8S2V5IGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLZXkgJiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfb2JqID0ga2V5RXZlbnQuZ2V0KE9iaik7XHJcbiAgICAgICAgICAgIGlmICghX29iai5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgX29iai5zZXQoa2V5LCBbXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqW1wiI1wiICsga2V5XSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmpbXCIjXCIgKyBrZXldID0gT2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iaiwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1wiI1wiICsga2V5XSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb2JqLmdldChrZXkpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCIjXCIgKyBrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbGwuYmluZChjYWxsKTtcclxuICAgICAgICAgICAgX29iai5nZXQoa2V5KS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGwoT2JqW2tleV0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NEYyMFx1NTE2NVx1NzY4NGNhbGxlclx1NTIyMFx1OTY2NFx1NUY1M1x1NTI0RFx1N0VEMVx1NUI5QVx1NzY4NFx1NjI0MFx1NjcwOVx1NzY4NFx1NEU4Qlx1NEVGNiBcdTYyMTZcdTYzMDdcdTVCOUFcdTg5RTNcdTUxQjNcdTZBMjFcdTRFMkFcdTVCRjlcdThDNjFcdThEREZcdTVGNTNcdTUyNERjYWxsZXJcdTdFRDFcdTVCOUFcdTc2ODRcdTc2RDFcdTU0MkNcclxuICAgICAqIEBwYXJhbSBjYWxsZXIgXHU3NkQxXHU1NDJDXHU2NUY2XHU3RUQxXHU1QjlBXHU3Njg0XHU1NzNBXHU2NjZGXHU1QkY5XHU4QzYxXHJcbiAgICAgKiBAcGFyYW0gb2JqIFx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICByZW1vdmVCeUNhbGxlcihjYWxsZXI6IGNhbGwsIG9iajogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcik/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmdldChvYmopLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBrLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9ic2VydmFibGVDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgRXZlbnRHbG9iYWwsIHsgQmluZE5hbWVDbGFzcywgRXZlbnRDbGFzcyB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcblxyXG4vKipcclxuICogXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyaXB0IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvL0V2ZW50T25cdTg4QzVcdTk5NzBcdTU2NjhcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUFcclxuICAgICAgICBsZXQgYmluZEV2ZW50ID0gRXZlbnRDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIGJpbmRFdmVudD8uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBFdmVudEdsb2JhbC5vbihkLmtleSwgdGhpcywgZC5mbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRBd2FrZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25Bd2FrZSgpIHtcclxuICAgICAgICAvL1x1N0VEOVx1ODhDNVx1OTk3MFx1NTY2OFx1OEJCMFx1NUY1NVx1NzY4NFx1NUM1RVx1NjAyN1x1RkYwQ1x1NjdFNVx1NjI3RVx1ODI4Mlx1NzBCOVxyXG4gICAgICAgIEJpbmROYW1lQ2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2VdID0gdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uSGRBd2FrZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU0RjIwXHU1MTY1XHU1M0MyXHU2NTcwXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqIEBwYXJhbSBlXHJcbiAgICAgKi9cclxuICAgIG9uT3BlbmVkKGUpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTZGQzBcdTZEM0JcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCNjRcdTY1RjZcdTYyNDBcdTY3MDlcdTgyODJcdTcwQjlcdTU0OENcdTdFQzRcdTRFRjZcdTU3NDdcdTVERjJcdTUyMUJcdTVFRkFcdTVCOENcdTZCRDVcdUZGMENcdTZCMjFcdTY1QjlcdTZDRDVcdTUzRUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkQXdha2UoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRW5hYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRFbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NTQyRlx1NzUyOFx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1ODI4Mlx1NzBCOVx1ODhBQlx1NkRGQlx1NTJBMFx1NTIzMFx1ODIxRVx1NTNGMFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkU3RhcnRcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkU3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QjJDXHU0RTAwXHU2QjIxXHU2MjY3XHU4ODRDdXBkYXRlXHU0RTRCXHU1MjREXHU2MjY3XHU4ODRDXHVGRjBDXHU1M0VBXHU0RjFBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFN0YXJ0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFVwZGF0ZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCQ0ZcdTVFMjdcdTY2RjRcdTY1QjBcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTVDM0RcdTkxQ0ZcdTRFMERcdTg5ODFcdTU3MjhcdThGRDlcdTkxQ0NcdTUxOTlcdTU5MjdcdTVGQUFcdTczQUZcdTkwM0JcdThGOTFcdTYyMTZcdTgwMDVcdTRGN0ZcdTc1MjhnZXRDb21wb25lbnRcdTY1QjlcdTZDRDVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkVXBkYXRlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERpc2FibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGREaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTc5ODFcdTc1MjhcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTRFQ0VcdTgyODJcdTcwQjlcdTRFQ0VcdTgyMUVcdTUzRjBcdTc5RkJcdTk2NjRcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGlzYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREZXN0cm95XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25IZERlc3Ryb3koKTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NkUwNVx1OTY2NFx1OERERlx1NUY1M1x1NTI0RFx1N0M3Qlx1N0VEMVx1NUI5QVx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1ODlDMlx1NUJERlx1NjVCOVx1NkNENVxyXG4gICAgICAgICAgICBPYnNlcnZhYmxlUHJvcGVydHkucmVtb3ZlQnlDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIC8vXHU5NTAwXHU2QkMxXHU2NUY2XHU2RTA1XHU5NjY0XHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU1RjE1XHU3NTI4XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0ga2V5cy5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5c1t4XV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNEJcdTUyQThcdThDMDNcdTc1MjhcdTgyODJcdTcwQjlcdTk1MDBcdTZCQzFcdTY1RjZcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGVzdHJveSgpIHt9XHJcblxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiBcdTc1NENcdTk3NjJcdTYyNTNcdTVGMDBcdTRFRTVcdTU0MEVcdTVFMjZcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcclxuICAgIC8vICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgLy8gICovXHJcbiAgICAvLyBvbk9wZW5lZChkKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coMTExKTtcclxuICAgIC8vIH1cclxufVxyXG4iLCAiaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuXHJcbi8vY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U2hvd0FuaSBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJnLCB0aXBzOlwiXHU4MENDXHU2NjZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGJnOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb250ZW50LCB0aXBzOlwiXHU1MTg1XHU1QkI5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTphbmlUeXBlLHRpcHM6XCJcdTUyQThcdTc1M0JcdTdDN0JcdTU3OEJcIix0eXBlOkVkaXRPcHRpb24sb3B0aW9uOlwiYm90dG9tVG9TaG93LHNjYWxlU2hvd1wifSovXHJcbiAgICAvLyBcdThGRDRcdTU2REVcdTVCNTdcdTdCMjZcdTRFMzJcclxuICAgIGFuaVR5cGU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHR3ZWVuTGlzdDogTGF5YS5Ud2VlbltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9PcGVuKCkge31cclxuICAgIC8qKlxyXG4gICAgICogIFx1NTE3M1x1OTVFRFx1NjIxMFx1NTI5Rlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb0Nsb3NlKCkge31cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcblxyXG4gICAgICAgIHRoaXMuYmcuYWxwaGEgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAuNzUgfSxcclxuICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxlU2hvd1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLmZyb20oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMiwgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLCBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5ib3R0b20gPSAtdGhpcy5jb250ZW50LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJvdHRvbTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5jaXJjT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VWaWV3KCkge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY2FsZVNob3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVg6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVk6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAtdGhpcy5jb250ZW50LmhlaWdodCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi5jbGVhcihlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipcclxuICogXHU1QjlFXHU0RjhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jb25zdCBpbnN0YW5jZUxpc3Q6IE1hcDxudW1iZXIsIHsgbmV3ICgpOiB2b2lkIH0+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NzY4NGlkXHJcbiAqL1xyXG5sZXQgaW5zdGFuY2VJZDogbnVtYmVyID0gMTAwO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhbmNlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCFpbnN0YW5jZUxpc3QuaGFzKHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdKSkge1xyXG4gICAgICAgIGluc3RhbmNlSWQrKztcclxuICAgICAgICB0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSA9IGluc3RhbmNlSWQ7XHJcbiAgICAgICAgaW5zdGFuY2VMaXN0LnNldChpbnN0YW5jZUlkLCBuZXcgdGFyZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0W2tleV0gPSBpbnN0YW5jZUxpc3QuZ2V0KGluc3RhbmNlSWQpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IHsgSGludFZpZXdEYXRhIH0gZnJvbSBcInNyYy92aWV3L0hpbnRWaWV3XCI7XHJcbmltcG9ydCBPdmVyVmlldyBmcm9tIFwic3JjL3ZpZXcvT3ZlclZpZXdcIjtcclxuaW1wb3J0IFJlcywgeyB2aWV3cyB9IGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU5NzAwXHU4OTgxXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAqL1xyXG5pbnRlcmZhY2UgVmlld09wZW5QYXJtIHtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyICovXHJcbiAgICBzaG93TG9hZD86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCAqL1xyXG4gICAgc2hvd0xvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTk2OTBcdTg1Q0Zsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0IFx1OUVEOFx1OEJBNDAgKi9cclxuICAgIGhpZGVMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1MTczXHU5NUVEXHU1MTc2XHU0RUQ2XHU1NzNBXHU2NjZGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBdHJ1ZVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVx1RkYwQ1x1MzAxMFx1NkNFOFx1NjEwRlx1MzAxMVx1ODhBQlx1NTE3M1x1OTVFRFx1NzY4NFx1NTczQVx1NjY2Rlx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1OEJCRVx1N0Y2RWF1dG9EZXN0cm95QXRSZW1vdmVkPXRydWVcdUZGMENcdTUyMTlcdThENDRcdTZFOTBcdTUzRUZcdTgwRkRcdTRFMERcdTgwRkRcdTg4QUJcdTU2REVcdTY1MzZcdUZGMENcdTk3MDBcdTg5ODFcdTgxRUFcdTVERjFcdTYyNEJcdTUyQThcdTU2REVcdTY1MzZcclxuICAgICAqIHRvZG8gXHU3M0IwXHU1NzI4XHU4RkQ5XHU0RTJBXHU4QzAzXHU3NTI4XHU3Njg0XHU2NjJGXHU1RjE1XHU2NENFXHU4MUVBXHU1RTI2XHU3Njg0XHU2NUI5XHU2Q0Q1XHVGRjBDXHU2Q0ExXHU2NzA5XHU4RDcwXHU4RkQ5XHU5MUNDXHU3Njg0XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0VGXHU4MEZEXHU0RjFBXHU2NzA5XHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgKiBcdTczQjBcdTU3MjhcdTUxNjhcdTY2MkZmYWxzZSBcdTU0MEVcdTY3MUZcdTY3MDlcdTk3MDBcdTg5ODFcdTUxOERcdTRGMThcdTUzMTZcdThGRDlcdTRFMkFcdTRFMUNcdTg5N0ZcdUZGMENcdTRFMERcdTgwRkRcdTUxNzNcdTk1RURcdTUxNzZcdTVCODNcdTYyNDBcdTY3MDlcdTc1NENcdTk3NjJcdThGRDhcdTY3MkFcdTVCOUVcdTczQjBcclxuICAgICAqL1xyXG4gICAgY2xvc2VPdGhlcj86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHBhcm0/OiBhbnk7XHJcbiAgICAvKiogIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBjb21wbGV0ZT86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1NTJBMFx1OEY3RFx1OEZEQlx1NUVBNlx1NTZERVx1OEMwM1x1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcHJvZ3Jlc3M/OiBIYW5kbGVyO1xyXG59XHJcblxyXG5jb25zdCB2aWV3TWFwczogeyB1cmw6IHN0cmluZzsgdmlldzogTGF5YS5WaWV3IH1bXSA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpZXdNYW5hZ2VyIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IFZpZXdNYW5hZ2VyO1xyXG5cclxuICAgIGxvZ2luT3V0KCkge1xyXG4gICAgICAgIHZpZXdNYXBzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgdi52aWV3LmdldENvbXBvbmVudHMoTGF5YS5TY3JpcHQpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHU1NkRFXHU1OTM0XHU4OTgxXHU0RjE4XHU1MzE2XHU0RTAwXHU0RTBCXHU1MTc2XHU1QjgzXHU3NTRDXHU5NzYyXHU3Njg0XHU1MTczXHU5NUVEXHVGRjBDXHU4RkQ5XHU5MUNDXHU2NjJGXHU0RTBEXHU2NjJGXHU2NzA5XHU1NDBDXHU2ODM3XHU3Njg0XHU5NUVFXHU5ODk4XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKGUpO1xyXG4gICAgICAgICAgICAgICAgZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh2LnZpZXcudXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2MlxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcdTUzQzJcdTY1NzBcclxuICAgICAqL1xyXG4gICAgb3BlbihcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGRhdGE6IFZpZXdPcGVuUGFybSA9IHtcclxuICAgICAgICAgICAgY2xvc2VPdGhlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWREZWxheTogMTAwLFxyXG4gICAgICAgICAgICBoaWRlTG9hZERlbGF5OiAwLFxyXG4gICAgICAgIH1cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm1pc3MgcGF0aCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnNob3dMb2FkKSB7XHJcbiAgICAgICAgICAgIExheWEuVmlldy5zaG93TG9hZGluZ1BhZ2UobnVsbCwgZGF0YS5zaG93TG9hZERlbGF5KTtcclxuICAgICAgICAgICAgaWYgKHVybCAhPT0gUmVzLnZpZXdzLkxvZ2luVmlldykge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoZGF0YS5oaWRlTG9hZERlbGF5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhLmNsb3NlT3RoZXIgPSBmYWxzZTtcclxuICAgICAgICBMYXlhLlZpZXcub3BlbihcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLmNsb3NlT3RoZXIsXHJcbiAgICAgICAgICAgIGRhdGEucGFybSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoZTogTGF5YS5WaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsICE9IFJlcy52aWV3cy5Mb2dpblZpZXcpIHZpZXdNYXBzLnB1c2goeyB1cmw6IHVybCwgdmlldzogZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29uTGlzdCA9IGUuZ2V0Q29tcG9uZW50cyhMYXlhLlNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbkxpc3QuZm9yRWFjaCgoZSkgPT4gZS5lbmFibGVkICYmIGUub25PcGVuZWQgJiYgZS5vbk9wZW5lZChkYXRhLnBhcm0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGEuY29tcGxldGUgJiYgZGF0YS5jb21wbGV0ZShlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgIGAlYyA9PT4gb3BlbiAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojN2VkNmRmO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojMjJhNmIzO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YS5wcm9ncmVzc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxNzNcdTk1RURcdTg5QzZcdTU2RkVcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGFsbCBcdTU0MENcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcdTg4QUIgXHU1OTFBXHU2QjIxXHU2MjUzXHU1RjAwXHVGRjBDXHU1MTY4XHU1MjIwXHU5NjY0XHU3NTI4XHU4RkQ5XHU0RTJBXHJcbiAgICAgKiBAcGFyYW0gZGVzdHJveSBcdTk1MDBcdTZCQzEgICBUT0RPXHVGRjA4XHU5RUQ4XHU4QkE0XHU0RjFBXHU5NTAwXHU2QkMxXHU2MjQwXHU2NzA5XHU1QjUwXHU4MjgyXHU3MEI5XHVGRjBDXHU2NzJBXHU2RDRCXHU4QkQ1XHU2NjJGXHU1NDI2XHU2NzA5XHU5NUVFXHU5ODk4XHVGRjA5XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNsb3NlKFxyXG4gICAgICAgIHVybDogdmlld3MsXHJcbiAgICAgICAgYWxsOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGFuaUNvbTogdHlwZW9mIFZpZXdTaG93QW5pIHwgdHlwZW9mIEZsb2F0Vmlld1Nob3dBbmkgPSBWaWV3U2hvd0FuaVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy9UT0RPIFx1OEZEOVx1OTFDQ1x1NzNCMFx1NTcyOFx1NTE2OFx1OTBFOFx1NzUyOGRlc3Ryb3kgXHU1RjE1XHU2NENFcmVtb3ZlXHU1OTdEXHU1MENGXHU2NzA5XHU3MEI5XHU5NUVFXHU5ODk4XHVGRjBDXHU1MThEXHU5MDFBXHU4RkM3dmlldy5vcGVuXHU0RjFBXHU5MUNEXHU2NUIwXHU2Nzg0XHU1RUZBXHU3RUM0XHU0RUY2XHJcbiAgICAgICAgZGVzdHJveSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB2QW5pOiBWaWV3U2hvd0FuaTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0gdmlld01hcHNbeF0udXJsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHZpZXdNYXBzW3hdO1xyXG4gICAgICAgICAgICAgICAgdmlld01hcHMuc3BsaWNlKHgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZBbmkgPSB2LnZpZXcuZ2V0Q29tcG9uZW50KGFuaUNvbSBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZBbmkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2QW5pLmNsb3NlVmlldygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy90b2RvXHU5NzAwXHU4OTgxXHU0RjE4XHU1MzE2XHVGRjBDXHU3NTRDXHU5NzYyXHU3Njg0bWFwXHU5NzAwXHU4OTgxXHU2NTc0XHU3NDA2XHU2MjEwXHVGRjBDXHU1MTY4XHU1QzRGXHU1NDhDXHU1RjM5XHU3QTk3XHU3Njg0XHU1MzNBXHU1MjJCXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBSZXMudmlld3MuSGludFZpZXcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHU0RkREXHU4QkMxXHU1OTgyXHU2NzlDXHU1NzNBXHU2NjZGXHU1QjhDXHU1MTY4XHU2Q0ExXHU2NzA5XHU3NTRDXHU5NzYyXHU4OEFCXHU2MjUzXHU1RjAwXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1RkM1XHU2MjUzXHU1RjAwXHU0RTNCXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgaWYgKCF2aWV3TWFwcy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBsZXQgY2xvc2VMZW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAoIXZpZXdNYXBzW3hdLnZpZXcucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUxlbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VMZW4gPT09IHZpZXdNYXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLk1haW5WaWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdNYXBzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVmlld0xvZyh1cmw6IHN0cmluZywgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlYyA8PT0gJHtkZXN0cm95ID8gXCJkZXN0cm95XCIgOiBcImRpc2FibGVcIn0gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNmZjc5Nzk7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuSGludChkYXRhOiBIaW50Vmlld0RhdGEpIHtcclxuICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLkhpbnRWaWV3LCB7IHBhcm06IGRhdGEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNThcdTc1NENcdTk3NjJcclxuICAgICAqL1xyXG4gICAgY2xlYXJWaWV3TWFwcygpIHtcclxuICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3ZlclZpZXdDb206IE92ZXJWaWV3O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1MTczXHU5NUVEXHU4RkM3XHU1RUE2XHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIHNldE92ZXJWaWV3KG9wZW46IGJvb2xlYW4sIGNhbGw/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuT3ZlclZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAodjogT3ZlclZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyVmlld0NvbSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuY2xvc2UoY2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJWaWV3Q29tKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJWaWV3Q29tLm9wZW4oY2FsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvQ29udHJvbCB7XHJcbiAgICBwbGF5U291bmQoXHJcbiAgICAgICAgdXJsOiBzdHJpbmcsXHJcbiAgICAgICAgbG9vcHM/OiBudW1iZXIsXHJcbiAgICAgICAgY29tcGxldGU/OiBIYW5kbGVyLFxyXG4gICAgICAgIHNvdW5kQ2xhc3M/OiBuZXcgKCkgPT4gYW55LFxyXG4gICAgICAgIHN0YXJ0VGltZT86IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKHVybCwgbG9vcHMsIGNvbXBsZXRlLCBzb3VuZENsYXNzLCBzdGFydFRpbWUpO1xyXG4gICAgfVxyXG4gICAgcGxheU11c2ljKHVybDogc3RyaW5nLCBsb29wcyA9IDAsIGNvbXBsZXRlPzogSGFuZGxlciwgc3RhcnRUaW1lPzogbnVtYmVyKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKHVybCwgbG9vcHMsIGNvbXBsZXRlLCBzdGFydFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTYyNDBcdTY3MDlcdTk3RjNcdTY1NDhcdUZGMDhcdTRFMERcdTUzMDVcdTYyRUNcdTgwQ0NcdTY2NkZcdTk3RjNcdTRFNTBcdUZGMDlcdTY2MkZcdTU0MjZcdTk3NTlcdTk3RjNcdTMwMDIgKi9cclxuICAgIHNldCBzb3VuZE11dGVkKHN0YXRlKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc291bmRNdXRlZCA9IHN0YXRlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNvdW5kTXV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIExheWEuU291bmRNYW5hZ2VyLnNvdW5kTXV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1ODBDQ1x1NjY2Rlx1OTdGM1x1NEU1MFx1RkYwOFx1NEUwRFx1NTMwNVx1NjJFQ1x1OTdGM1x1NjU0OFx1RkYwOVx1NjYyRlx1NTQyNlx1OTc1OVx1OTdGMyAqL1xyXG4gICAgc2V0IG11c2ljTXV0ZWQoc3RhdGUpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5tdXNpY011dGVkID0gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBnZXQgbXVzaWNNdXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gTGF5YS5Tb3VuZE1hbmFnZXIubXVzaWNNdXRlZDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IEF1ZGlvQ29udHJvbCBmcm9tIFwiLi9BdWRpb0NvbnRyb2xcIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50T24sIEZpbmRCeU5hbWUgfSBmcm9tIFwiLi9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4vSW5zdGFuY2VcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9WaWV3TWFuYWdlclwiO1xyXG5cclxuY29uc3QgQ29yZSA9IHtcclxuICAgIC8qKiBcdTVCRjlcdThDNjFcdTVDNUVcdTYwMjdcdTdFRDFcdTVCOUFcdTUzRUZcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTYgKi9cclxuICAgIG9ic2VydmFibGVQcm9wZXJ0eTogT2JzZXJ2YWJsZVByb3BlcnR5LFxyXG4gICAgLyoqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OCAqL1xyXG4gICAgdmlldzogVmlld01hbmFnZXIuaW5zdCxcclxuICAgIC8qKiBcdTVGMTVcdTY0Q0VcdTgxMUFcdTY3MkNcdTdFQzRcdTRFRjYgKi9cclxuICAgIGdhbWVTY3JpcHQ6IEdhbWVTY3JpcHQsXHJcbiAgICAvKiogXHU1MzU1XHU0RjhCXHU4OEM1XHU5OTcwXHU1NjY4ICovXHJcbiAgICBpbnN0YW5jZTogSW5zdGFuY2UsXHJcbiAgICAvKiogXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbiAgICBldmVudE9uOiBFdmVudE9uLFxyXG4gICAgLyoqIHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWVcdTc2ODRcdTc3MDFcdTRFOEJcdTUxOTlcdTZDRDUgXHU1M0VBXHU4MEZEXHU2N0U1XHU2MjdFXHU0RTBCXHU0RTAwXHU3RUE3XHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG4gICAgZmluZEJ5TmFtZTogRmluZEJ5TmFtZSxcclxuICAgIC8qKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjYgKi9cclxuICAgIGV2ZW50R2xvYmFsOiBFdmVudEdsb2JhbCxcclxuICAgIC8qKlx1OTdGM1x1OTg5MSAqL1xyXG4gICAgYXVkaW86IG5ldyBBdWRpb0NvbnRyb2woKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcmU7XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZWZhdWx0UmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZGVmYXVsdFJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkb3duUmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZG93blJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppc1NjYWxlLCB0aXBzOlwiXHU2NjJGXHU1NDI2XHU3RjI5XHU2NTNFXCIsdHlwZTpDaGVja30qL1xyXG4gICAgcHJpdmF0ZSBpc1NjYWxlID0gZmFsc2U7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2NhbGVWYWwsIHRpcHM6XCJcdTdGMjlcdTY1M0VcdTc2ODRcdTUwM0NcIix0eXBlOk51bWJlciwgZGVmYXVsdDowLjl9Ki9cclxuICAgIHByaXZhdGUgc2NhbGVWYWw6IG51bWJlciA9IDAuOTtcclxuXHJcbiAgICBwcml2YXRlIG9sZFNjYWxlWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVk6IG51bWJlcjtcclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyAodGhpcy5vd25lciBhcyBMYXlhLkJveCkuc2V0X2FuY2hvclgoMC41KTtcclxuICAgICAgICAvLyAodGhpcy5vd25lciBhcyBMYXlhLkJveCkuc2V0X2FuY2hvclkoMC41KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzU2NhbGUpO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5tb3VzZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2xkU2NhbGVYID0gKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLmdldF9zY2FsZVgoKTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWSA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZURvd24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZG93blJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkodGhpcy5zY2FsZVZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU91dCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuICAgIG9uTW91c2VVcCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFuaShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2NhbGUpIHJldHVybjtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICB7IHNjYWxlWDogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWCwgc2NhbGVZOiBzY2FsZSAqIHRoaXMub2xkU2NhbGVZIH0sXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTa2luKHNraW46IHN0cmluZykge1xyXG4gICAgICAgIGlmICghc2tpbikgcmV0dXJuO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuSW1hZ2UpLnNraW4gPSBza2luO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTZFMzhcdTYyMEZcdTkxNERcdTdGNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjNpZCAqL1xyXG4gICAgZGlhbW9uZElkOiAxMDAxLFxyXG4gICAgLyoqIFx1OTFEMVx1NUUwMWlkICovXHJcbiAgICBnb2xkSWQ6IDEwMDIsXHJcbiAgICAvKiogXHU3MkQ3XHU3MkQ3XHU2RDg4XHU1MzE2XHU5OERGXHU3MjY5XHU5NUY0XHU5Njk0XHU2NUY2XHU5NUY0IFx1NzlEMiAqL1xyXG4gICAgcGV0RGlnZXN0SW50ZXJ2YWxUaW1lOiA2MCxcclxuICAgIC8qKiBcdTZFMzhcdTYyMEZcdTY3MkNcdTU3MzBcdTUwQThcdTVCNThrZXkgKi9cclxuICAgIGxvY2FsS2V5OiBcImxvdmVfSERfZmFybVwiLFxyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NEY1M1x1NTI5Qlx1NEUwQVx1OTY1MCAqL1xyXG4gICAgdXNlclZpdGFsaXR5TGltaXQ6IDEwLFxyXG4gICAgLyoqIFx1NTM0Rlx1OEJBRVx1NTczMFx1NTc0MCAqL1xyXG4gICAgLy8gYmFzZVVybDogXCIvLzQ3LjEwOC4xOTIuMTgxOjgwOTIvIGZhcm1cIixcclxuICAgIGJhc2VVcmw6IERFQlVHID8gXCIvLzE5Mi4xNjguMTAxLjUwOjMwMDBcIiA6IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMDAwXCIsXHJcbiAgICAvLyBiYXNlVXJsOiBcImh0dHA6Ly9nYW1lLmFoZDE2OC5jb206MzAwMFwiLFxyXG4gICAgLy8gdG9kbyBcdThGRDlcdTkxQ0NcdTc2ODRJcFx1NTNFRlx1NEVFNVx1OEJCRlx1OTVFRVx1NTNFRlx1ODBGRFx1NjYyRlx1NjcwOVx1OTVFRVx1OTg5OFx1NzY4NFxyXG4gICAgLy8gYmFzZVVybDogXCIvLzQ3LjEwOC4xOTIuMTgxOjMwMDBcIixcclxuICAgIC8qKiBhcGlcdThCRjdcdTZDNDJcdTdDN0JcdTU3OEIgXHU5RUQ4XHU4QkE0ICovXHJcbiAgICBBcGlUeXBlRGVmYXVsdDogMSxcclxuICAgIC8qKiBhcGlcdThCRjdcdTZDNDJcdTdDN0JcdTU3OEIgXHU3NzBCXHU1RTdGXHU1NDRBICovXHJcbiAgICBBcGlUeXBlQUQ6IDIsXHJcbiAgICAvKiogXHU1RTdGXHU1NDRBXHU2NzYxXHU0RUY2IFx1NTJBMFx1OTAxRlx1NEY3Rlx1NzUyOFx1NEU4NjZcdTZCMjEgKi9cclxuICAgIEFEU3BlZWRVcFRpbWVzOiA2LFxyXG59O1xyXG4iLCAiaW1wb3J0IHsgQXBwRXZlbnRNYXAgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IHsganNvbiB9IGZyb20gXCJzdHJlYW0vY29uc3VtZXJzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcERlc3BhdGNoRGF0YSB7XHJcbiAgICB1cmk6IEFwcEV2ZW50TWFwO1xyXG4gICAgZGF0YTogb2JqZWN0O1xyXG4gICAgdGltZXN0YW1wPzogc3RyaW5nIHwgbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcERlc3BhdGNoUmV0dXJuRGF0YSB7XHJcbiAgICAvKiogXHU1MzRGXHU4QkFFXHU3MkI2XHU2MDAxXHU3ODAxIDAgXHU0RTNBXHU2QjYzXHU1RTM4IFx1NTE3Nlx1NUI4M1x1NEUzQVx1OTUxOVx1OEJFRlx1NzgwMSAqL1xyXG4gICAgY29kZTogbnVtYmVyO1xyXG4gICAgLyoqIFx1NTM0Rlx1OEJBRXVyaSAqL1xyXG4gICAgdXJpOiBBcHBFdmVudE1hcDtcclxuICAgIC8qKiBcdThGRDRcdTU2REVcdTUxNzdcdTRGNTNcdTc2ODRcdTY1NzBcdTYzNkUgKi9cclxuICAgIGRhdGE6IG9iamVjdDtcclxuICAgIC8qKiBcdTY4MDdcdThCQzYgKi9cclxuICAgIHRpbWVzdGFtcD86IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgRXZlbnRNYXA6IE1hcDxzdHJpbmcgfCBudW1iZXIsIEZ1bmN0aW9uPiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiB3ZWIgYXBwIFx1NEVBNFx1NEU5MlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29yZSB7XHJcbiAgICAvKipcdTgyRjlcdTY3OUNcdTdDN0JcdTU3OEIgKi9cclxuICAgIHN0YXRpYyB0eXBlSW9zOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqXHU1Qjg5XHU1MzUzXHU3QzdCXHU1NzhCICovXHJcbiAgICBzdGF0aWMgdHlwZUFuZHJvaWQ6IG51bWJlciA9IDI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNjdcdTg4NENhcHBcdTRFQTRcdTRFOTJcdTY1QjlcdTZDRDVcclxuICAgICAqIEBwYXJhbSBuYW1lIFx1NjVCOVx1NkNENVx1NTQwRFx1NzlGMFxyXG4gICAgICogQHBhcmFtIGRhdGEgXHU0RjIwXHU1MTY1XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBydW5BcHBGdW5jdGlvbihkYXRhPzogQXBwRGVzcGF0Y2hEYXRhKTogUHJvbWlzZTxBcHBEZXNwYXRjaFJldHVybkRhdGE+IHtcclxuICAgICAgICBsZXQgd2ViQXBwRnVuY3Rpb247XHJcbiAgICAgICAgaWYgKExheWEuQnJvd3Nlci5vbklPUykge1xyXG4gICAgICAgICAgICAvLyB3ZWJBcHBGdW5jdGlvbiA9IHRoaXMuZGV0ZWN0aW9uSGFzRnVuY3Rpb24odGhpcy50eXBlSW9zLCBuYW1lKTtcclxuICAgICAgICAgICAgLy8gaWYgKHdlYkFwcEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBpZiAobmFtZSA9PSB0aGlzLmNsb3NlV2ViVmlldykge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgIC8vXHU1MTczXHU5NUVEd2Vidmlld1x1NzI3OVx1NkI4QVx1NTkwNFx1NzQwNlxyXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgIHdpbmRvd1tcIndlYmtpdFwiXVtcIm1lc3NhZ2VIYW5kbGVyc1wiXVt0aGlzLmxlYXZlQ2hhbm5lbF1bXCJwb3N0TWVzc2FnZVwiXShcclxuICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBzdGF0dXM6IDEgfSlcclxuICAgICAgICAgICAgLy8gICAgIC8vICAgICApOyAvL1x1NzI3OVx1NkI4QVx1NTkwNFx1NzQwNlx1OTcwMFx1ODk4MVx1NTE0OFx1OTAwMFx1NTFGQVx1OTg5MVx1OTA1M1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAvLyB3ZWJBcHBGdW5jdGlvblsncG9zdE1lc3NhZ2UnXShkYXRhKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInJ1biA6XCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl1bXCJtZXNzYWdlSGFuZGxlcnNcIl1bbmFtZV1bXCJwb3N0TWVzc2FnZVwiXShkYXRhKTtcclxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93W1wid2Via2l0XCJdW1wibWVzc2FnZUhhbmRsZXJzXCJdW25hbWVdW1wicG9zdE1lc3NhZ2VcIl0oXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzOiAxIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQod2luZG93W1wiJEFwcFwiXSAmJiB3aW5kb3dbXCIkQXBwXCJdW1wid2ViUmVxdWVzdFwiXSk7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3dbXCIkQXBwXCJdICYmIHdpbmRvd1tcIiRBcHBcIl1bXCJ3ZWJSZXF1ZXN0XCJdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbXCIkQXBwXCJdW1wid2ViUmVxdWVzdFwiXShKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHNlbmQgPT4gJHtkYXRhfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudE1hcC5zZXQoZGF0YS50aW1lc3RhbXAsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB3ZWJBcHBGdW5jdGlvbiA9IHRoaXMuZGV0ZWN0aW9uSGFzRnVuY3Rpb24odGhpcy50eXBlQW5kcm9pZCwgbmFtZSk7XHJcbiAgICAgICAgICAgIC8vIGlmICh3ZWJBcHBGdW5jdGlvbikge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHdpbmRvd1tcIndlYlJlcXVlc3RcIl1bbmFtZV0oZGF0YSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHdpbmRvd1tcIndlYlJlcXVlc3RcIl1bbmFtZV0oKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzZEMVx1NTQyQ2FwcCBcdTYyNjdcdTg4NENoNSBcdTYzQTVcdTUzRTNcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGxpc3RlbkFwcEZ1bmN0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIC8vXHU3NkQxXHU1NDJDXHU2MjRCXHU2NzNBXHU1MTczXHU5NUVEXHU0RThCXHU0RUY2XHU1NENEXHU1RTk0XHJcblxyXG4gICAgICAgIHdpbmRvd1tcImFwcFJlc3BvbnNlXCJdID0gKGQ6IEFwcERlc3BhdGNoUmV0dXJuRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBhbGVydChKU09OLnN0cmluZ2lmeShkKSk7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KGQ/LnRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgIGlmIChFdmVudE1hcC5oYXMoZD8udGltZXN0YW1wKSAmJiAhZC5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1hcC5nZXQoZC50aW1lc3RhbXApKGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuXHJcbmNvbnN0IExvY2FsRGF0YSA9IHtcclxuICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgdG9rZW46IG51bGwsXHJcblxyXG4gICAgLyoqIHRydWUgXHU0RTNBXHU1MTczXHU5NUVEIGZhbHNlIFx1NEUzQVx1NjI1M1x1NUYwMCAqL1xyXG4gICAgc291bmQ6IGZhbHNlLFxyXG4gICAgLyoqIHRydWUgXHU0RTNBXHU1MTczXHU5NUVEIGZhbHNlIFx1NEUzQVx1NjI1M1x1NUYwMCAqL1xyXG4gICAgbXVzaWM6IGZhbHNlLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFx1NjcyQ1x1NTczMFx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NCBsb2NhbERhdGEgXHU1NzI4XHU4RkQ5XHU0RTJBXHU5MUNDXHU5NzYyXHU1QjlBXHU0RTQ5XHU1OTdEXHJcbiAqL1xyXG5jbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9jYWxEYXRhID0gTG9jYWxEYXRhO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbERhdGEgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXkpIHx8IExvY2FsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4M0I3XHU1M0Q2XHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBnZXRKU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4QkJFXHU3RjZFXHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBzZXRKU09OPGtleSBleHRlbmRzIGtleW9mIHR5cGVvZiBMb2NhbERhdGE+KGtleToga2V5LCBkYXRhOiB0eXBlb2YgTG9jYWxEYXRhW2tleV0pIHtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YVtrZXldID0gZGF0YTtcclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXksIHRoaXMubG9jYWxEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXksIHt9KTtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IHsgaXNMb2dpbjogZmFsc2UsIHRva2VuOiBudWxsLCBzb3VuZDogdHJ1ZSwgbXVzaWM6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExvY2FsU3RvcmFnZVNlcnZpY2UoKTtcclxuIiwgIi8qKiBcdTYyNDBcdTY3MDlcdTg4NjggKi9cbiAgICAgICAgZXhwb3J0IGNvbnN0IFRhYmxlID0ge1widGFza1wiOlt7XCJpZFwiOjEwMDEsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MSxcInRpdGxlXCI6XCJcdTdCN0VcdTUyMzBcdTk4ODZcdTk0QkJcdTc3RjNcIixcImRlc2NcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MVx1N0I3RVx1NTIzMFwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwMixcInJld2FyZFwiOlwiMTAwMToxMDBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU4M0RDXHU1NzMwXHU2NUJEXHU4MEE1MTBcdTZCMjFcIixcImRlc2NcIjpcIlx1ODNEQ1x1NTczMFx1NTJBMFx1OTAxRjEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDAzLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1ODNEQ1x1NTczMFx1NjUzNlx1ODNCNzEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTgzRENcdTU3MzBcdTY1MzZcdTgzQjcxMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNCxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjo1LFwidGl0bGVcIjpcIlx1OEJCRlx1NTNDQjVcdTZCMjFcIixcImRlc2NcIjpcIlx1NTA3N1x1ODNEQzVcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDUsXCJyZXdhcmRcIjpcIjEwMDE6MjBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTU1ODJcdTUxN0JcdTcyRDdcdTcyRDczXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTU1ODJcdTUxN0JcdTcyRDdcdTcyRDczXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA2LFwicmV3YXJkXCI6XCIxMDAxOjIwXCIsXCJ0aW1lc1wiOjUsXCJ0aXRsZVwiOlwiXHU4RDJEXHU0RTcwXHU5OTcyXHU2NTk5NVx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4RDJEXHU0RTcwXHU5OTcyXHU2NTk5NVx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNyxcInJld2FyZFwiOlwiMTAwMToyMFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdThEMkRcdTRFNzBcdTc5Q0RcdTVCNTAxMFx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4RDJEXHU0RTcwXHU3OUNEXHU1QjUwMTBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDgsXCJyZXdhcmRcIjpcIjEwMDE6MzBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTUxRkFcdTU1MkVcdTRGNUNcdTcyNjkzXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTUxRkFcdTU1MkVcdTRGNUNcdTcyNjkzXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA5LFwicmV3YXJkXCI6XCIxMDAxOjEwMFwiLFwidGltZXNcIjo1LFwidGl0bGVcIjpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlwiLFwiZGVzY1wiOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCNVx1NEUyQVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMCxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxLFwidGl0bGVcIjpcIlx1NTIwNlx1NEVBQlx1NUY5N1x1NTk3RFx1NzkzQ1wiLFwiZGVzY1wiOlwiXHU1MjA2XHU0RUFCXHU0RTAwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDExLFwicmV3YXJkXCI6XCIxMDAxOjMwXCIsXCJ0aW1lc1wiOjMsXCJ0aXRsZVwiOlwiXHU2MzA3XHU1QjlBXHU3OUNEXHU2OTBEXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTY5MERcdTYzMDdcdTVCOUFcdTc5Q0RcdTVCNTBcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMTIsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU3NzBCXHU4OUM2XHU5ODkxXCIsXCJkZXNjXCI6XCJcdTc3MEJcdTg5QzZcdTk4OTExMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9XSxcInNpZ25JblwiOlt7XCJpZFwiOjEwMDEsXCJkYXlzXCI6NyxcInJld2FyZFwiOlwiMTAwMToyMDAwMFwifSx7XCJpZFwiOjEwMDIsXCJkYXlzXCI6MTAsXCJyZXdhcmRcIjpcIjEwMDE6MzAwMDBcIn0se1wiaWRcIjoxMDAzLFwiZGF5c1wiOjE1LFwicmV3YXJkXCI6XCIxMDAxOjUwMDAwXCJ9LHtcImlkXCI6MTAwNCxcImRheXNcIjoyMCxcInJld2FyZFwiOlwiMTAwMTo4MDAwMFwifSx7XCJpZFwiOjEwMDUsXCJkYXlzXCI6MzAsXCJyZXdhcmRcIjpcIjEwMDE6MTIwMDAwXCJ9LHtcImlkXCI6MTAwNixcImRheXNcIjo1MCxcInJld2FyZFwiOlwiMTAwMToxODAwMDBcIn0se1wiaWRcIjoxMDA3LFwiZGF5c1wiOjgwLFwicmV3YXJkXCI6XCIxMDAxOjMwMDAwMFwifSx7XCJpZFwiOjEwMDgsXCJkYXlzXCI6MTAwLFwicmV3YXJkXCI6XCIxMDAxOjM1MDAwMFwifSx7XCJpZFwiOjEwMDksXCJkYXlzXCI6MTUwLFwicmV3YXJkXCI6XCIxMDAxOjUwMDAwMFwifV0sXCJwbGFudFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTZDMzRcdTdBM0JcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwMl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTBcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjE4MFwiLFwidW5sb2NrX2Nvc3RcIjpudWxsLFwidW5sb2NrX3Jld2FyZFwiOm51bGwsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU1OTI3XHU4QzQ2XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDRfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwXCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIxODBcIixcInVubG9ja19jb3N0XCI6bnVsbCxcInVubG9ja19yZXdhcmRcIjpudWxsLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1NTkyN1x1ODQ5Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDEyX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MFwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMjQwXCIsXCJ1bmxvY2tfY29zdFwiOm51bGwsXCJ1bmxvY2tfcmV3YXJkXCI6bnVsbCxcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTUzMDVcdTVGQzNcdTgzRENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwNl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo3NVwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NzVcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjMwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNSxcIm5hbWVcIjpcIlx1NTcxRlx1OEM0NlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA3X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjc1XCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo3NVwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiMzAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU4NDFEXHU1MzVDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDVfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NzVcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjc1XCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCI0ODBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDcsXCJuYW1lXCI6XCJcdTVDMEZcdTlFQTZcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwMV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxMjBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjEyMFwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiNDgwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxNTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA4LFwibmFtZVwiOlwiXHU4RkEzXHU2OTEyXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTBfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MTIwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjoxMjBcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjYwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MjAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwOSxcIm5hbWVcIjpcIlx1OUVDNFx1NzREQ1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDExX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjIwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MjAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI3MjBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjMwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTAsXCJuYW1lXCI6XCJcdTgzMDRcdTVCNTBcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxM19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoyMDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjIwMFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiNzIwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjozNTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDExLFwibmFtZVwiOlwiXHU4MEUxXHU4NDFEXHU1MzVDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDhfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MzUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjozNTBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjkwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NDUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMixcIm5hbWVcIjpcIlx1NTM1N1x1NzREQ1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDE0X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjM1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MzUwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI5MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjUwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTMsXCJuYW1lXCI6XCJcdTczODlcdTdDNzNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwM19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwMFwiLFwiaGFydmVzdFwiOlwiM341XCIsXCJtYXR1cmVfdGltZVwiOlwiMTIwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NTUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxNCxcIm5hbWVcIjpcIlx1NzUxOFx1ODUxN1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDE1X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjVcIixcIm1hdHVyZV90aW1lXCI6XCIxMjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo2MDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDE1LFwibmFtZVwiOlwiXHU3NTZBXHU4MzA0XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDlfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MDBcIixcImhhcnZlc3RcIjpcIjN+NVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjY1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifV0sXCJwZXRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU2NUZBXHU4RDIyXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAxX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxMCxcImNvc3RcIjpcIjEwMDI6MzAwMFwiLFwiZGVzY1wiOlwiXHU3MjMxXHU1QjgzXHU1QzMxXHU0RTcwXHU1Qjgzflx1NUI4M1x1NUMzMVx1NjYyRlx1NjcwOVx1NzBCOVx1NjFEMn5cIixcInNlbnNpdGl2ZVwiOjM0LFwiYWJpbGl0eVwiOjQyfSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTZDNjRcdTU3MDZcIixcImljb25cIjpcInBldF9mZWVkLzEwMDdfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE1LFwiY29zdFwiOlwiMTAwMjo0MDAwXCIsXCJkZXNjXCI6XCJcdTk4OUNcdTUwM0NcdTMwMDFcdTY2N0FcdTU1NDZcdTUzQ0NcdTUzQ0NcdTU3MjhcdTdFQkZcIixcInNlbnNpdGl2ZVwiOjQwLFwiYWJpbGl0eVwiOjQ4fSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTgwODlcdTVFNzJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDlfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE2LFwiY29zdFwiOlwiMTAwMjo0NTAwXCIsXCJkZXNjXCI6XCJcdTY3MDBcdTVGRTBcdThCREFcdTc2ODRcdTRGMTlcdTRGMzRcIixcInNlbnNpdGl2ZVwiOjQ1LFwiYWJpbGl0eVwiOjU1fSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTRFOENcdTU0QzhcIixcImljb25cIjpcInBldF9mZWVkLzEwMDJfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE2LFwiY29zdFwiOlwiMTAwMjo1MDAwXCIsXCJkZXNjXCI6XCJcdTdFRERcdTRFMERcdTYyQzZcdTVCQjZcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjQ4LFwiYWJpbGl0eVwiOjYwfSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTU5MjdcdTc3M0NcdTc3NUJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDVfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE3LFwiY29zdFwiOlwiMTAwMjo3MDAwXCIsXCJkZXNjXCI6XCJcdTZEM0JcdTU5N0RcdTU0MDNcdTc2ODRcdTVDMTFcIixcInNlbnNpdGl2ZVwiOjUwLFwiYWJpbGl0eVwiOjc1fSx7XCJpZFwiOjEwMDYsXCJuYW1lXCI6XCJcdTVDMEZcdTVDM0VcdTVERjRcIixcImljb25cIjpcInBldF9mZWVkLzEwMDRfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE4LFwiY29zdFwiOlwiMTAwMjo3NTAwXCIsXCJkZXNjXCI6XCJcdTZCNjZcdTUyOUJcdTU5MjlcdThENEJcdTVERjJcdTcwQjlcdTZFRTF+XHU2MkZGXHU2MzRGXHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo2MCxcImFiaWxpdHlcIjo4MH0se1wiaWRcIjoxMDA3LFwibmFtZVwiOlwiXHU3NDAzXHU3NDAzXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA4X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6ODAwMFwiLFwiZGVzY1wiOlwiXHU1QzMxXHU0RTI0XHU0RTJBXHU1QjU3XHVGRjBDXHU1NDJDXHU4QkREXHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo2OSxcImFiaWxpdHlcIjo4NX0se1wiaWRcIjoxMDA4LFwibmFtZVwiOlwiXHU1QzBGXHU3NjdEXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAzX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6ODAwMFwiLFwiZGVzY1wiOlwiXHU3NzBCXHU1QkI2XHUzMDAxXHU3NzBCXHU4M0RDXHUzMDAxXHU3NzBCXHU1QjY5XHU1QjUwXCIsXCJzZW5zaXRpdmVcIjo3NixcImFiaWxpdHlcIjo4OH0se1wiaWRcIjoxMDA5LFwibmFtZVwiOlwiXHU3MEI5XHU3MEI5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA2X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOSxcImNvc3RcIjpcIjEwMDI6MTAwMDBcIixcImRlc2NcIjpcIlx1NEY2MFx1NTAzQ1x1NUY5N1x1NjJFNVx1NjcwOVx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6ODUsXCJhYmlsaXR5XCI6OTN9LHtcImlkXCI6MTAxMCxcIm5hbWVcIjpcIlx1OTVGN1x1NThBOVwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAxMF9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MzAsXCJjb3N0XCI6XCIxMDAyOjE1MDAwXCIsXCJkZXNjXCI6XCJcdTk1N0ZcdTVGOTdcdTVDMzFcdTVGODhcdTUxRjZcdUZGMENcdTYyOTNcdTVDMEZcdTUwNzdcdTY2RjRcdTUxRjZcIixcInNlbnNpdGl2ZVwiOjkwLFwiYWJpbGl0eVwiOjk5fV0sXCJvcmRlclwiOlt7XCJpZFwiOjEsXCJjb21taXNzaW9uXCI6XCIwLjVcIixcImNvbmRpdGlvblwiOlwiMTAwMToyXCJ9LHtcImlkXCI6MixcImNvbW1pc3Npb25cIjpcIjAuNDhcIixcImNvbmRpdGlvblwiOlwiMTAwMToxLDEwMDI6MlwifSx7XCJpZFwiOjMsXCJjb21taXNzaW9uXCI6XCIwLjM5XCIsXCJjb25kaXRpb25cIjpcIjEwMDE6NCwxMDAzOjIsMTAwMjozXCJ9LHtcImlkXCI6NCxcImNvbW1pc3Npb25cIjpcIjAuNjFcIixcImNvbmRpdGlvblwiOlwiMTAwMjo0LDEwMDM6MywxMDA0OjMsMTAwMTo0XCJ9LHtcImlkXCI6NSxcImNvbW1pc3Npb25cIjpcIjAuNjFcIixcImNvbmRpdGlvblwiOlwiMTAwNDo2LDEwMDI6NSwxMDA1OjQsMTAwMTo1XCJ9LHtcImlkXCI6NixcImNvbW1pc3Npb25cIjpcIjAuNDhcIixcImNvbmRpdGlvblwiOlwiMTAwMzoxMCwxMDA0OjUsMTAwNTozLDEwMDY6M1wifSx7XCJpZFwiOjcsXCJjb21taXNzaW9uXCI6XCIwLjQzXCIsXCJjb25kaXRpb25cIjpcIjEwMDc6NCwxMDAzOjUsMTAwNDo3LDEwMDY6MTBcIn0se1wiaWRcIjo4LFwiY29tbWlzc2lvblwiOlwiMC41NlwiLFwiY29uZGl0aW9uXCI6XCIxMDA4OjEzLDEwMDc6MywxMDA1OjUsMTAwMjo1XCJ9LHtcImlkXCI6OSxcImNvbW1pc3Npb25cIjpcIjAuMzlcIixcImNvbmRpdGlvblwiOlwiMTAwNjoyLDEwMDk6MTAsMTAwNzo4LDEwMDM6OFwifSx7XCJpZFwiOjEwLFwiY29tbWlzc2lvblwiOlwiMC4yMlwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjEwLDEwMTA6NSwxMDA4OjEwLDEwMDk6NlwifSx7XCJpZFwiOjExLFwiY29tbWlzc2lvblwiOlwiMC43NlwiLFwiY29uZGl0aW9uXCI6XCIxMDA5OjUsMTAwNDoxMCwxMDAxOjksMTAwMjoxMFwifSx7XCJpZFwiOjEyLFwiY29tbWlzc2lvblwiOlwiMC40M1wiLFwiY29uZGl0aW9uXCI6XCIxMDA3OjYsMTAwMzoxMSwxMDExOjYsMTAwNToxMFwifSx7XCJpZFwiOjEzLFwiY29tbWlzc2lvblwiOlwiMC4xN1wiLFwiY29uZGl0aW9uXCI6XCIxMDEwOjUsMTAwNToxMywxMDAxOjgsMTAxMjo4XCJ9LHtcImlkXCI6MTQsXCJjb21taXNzaW9uXCI6XCIwLjdcIixcImNvbmRpdGlvblwiOlwiMTAxMzoxMCwxMDA4OjgsMTAwNjo2LDEwMDE6MTBcIn0se1wiaWRcIjoxNSxcImNvbW1pc3Npb25cIjpcIjAuNDhcIixcImNvbmRpdGlvblwiOlwiMTAwMjoxMCwxMDA1OjEwLDEwMTE6MTIsMTAwMToxMFwifSx7XCJpZFwiOjE2LFwiY29tbWlzc2lvblwiOjAuMjksXCJjb25kaXRpb25cIjpcIjEwMDg6MTEsMTAxNDo0LDEwMDY6OCwxMDA1OjE3XCJ9LHtcImlkXCI6MTcsXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAwNjoxNCwxMDA3OjYsMTAxNToxMiwxMDAxOjE0XCJ9LHtcImlkXCI6MTgsXCJjb21taXNzaW9uXCI6MC40OCxcImNvbmRpdGlvblwiOlwiMTAwODoxNCwxMDExOjEyLDEwMDk6MTUsMTAwMjo1XCJ9LHtcImlkXCI6MTksXCJjb21taXNzaW9uXCI6MC43NSxcImNvbmRpdGlvblwiOlwiMTAxMzoxMCwxMDAzOjIwLDEwMTQ6MTEsMTAwMTo3XCJ9LHtcImlkXCI6MjAsXCJjb21taXNzaW9uXCI6MC42NyxcImNvbmRpdGlvblwiOlwiMTAwMzoxMCwxMDExOjE3LDEwMDI6MTQsMTAwNToxMlwifSx7XCJpZFwiOjIxLFwiY29tbWlzc2lvblwiOjAuNjQsXCJjb25kaXRpb25cIjpcIjEwMTA6MTAsMTAwMzoxNCwxMDA1OjE2LDEwMDc6MTVcIn0se1wiaWRcIjoyMixcImNvbW1pc3Npb25cIjpcIjAuNFwiLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE5LDEwMDc6MTIsMTAxMTo1LDEwMDQ6MTdcIn0se1wiaWRcIjoyMyxcImNvbW1pc3Npb25cIjowLjIsXCJjb25kaXRpb25cIjpcIjEwMDM6MTksMTAxNDoyLDEwMTU6MTYsMTAwMToxNFwifSx7XCJpZFwiOjI0LFwiY29tbWlzc2lvblwiOjAuNzcsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTMsMTAwMToxNywxMDA4OjE4LDEwMDQ6NVwifSx7XCJpZFwiOjI1LFwiY29tbWlzc2lvblwiOjAuNjQsXCJjb25kaXRpb25cIjpcIjEwMTI6MjMsMTAxMToxOSwxMDEwOjE1LDEwMTU6MjBcIn0se1wiaWRcIjoyNixcImNvbW1pc3Npb25cIjowLjAzLFwiY29uZGl0aW9uXCI6XCIxMDAyOjIxLDEwMTE6MTIsMTAxMjoyMiwxMDAzOjE5XCJ9LHtcImlkXCI6MjcsXCJjb21taXNzaW9uXCI6MC40OSxcImNvbmRpdGlvblwiOlwiMTAwNzoxNiwxMDE0OjE2LDEwMDY6MTAsMTAxMToxN1wifSx7XCJpZFwiOjI4LFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTcsMTAwNzoxMiwxMDExOjE3LDEwMDM6MTdcIn0se1wiaWRcIjoyOSxcImNvbW1pc3Npb25cIjowLjc3LFwiY29uZGl0aW9uXCI6XCIxMDEyOjEwLDEwMDU6MTYsMTAxMDoxNCwxMDE1OjE4XCJ9LHtcImlkXCI6MzAsXCJjb21taXNzaW9uXCI6MC4xNCxcImNvbmRpdGlvblwiOlwiMTAxMToxNywxMDE0OjE5LDEwMDY6MTQsMTAwNDozMFwifSx7XCJpZFwiOjMxLFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMDc6MTgsMTAxMDoxNCwxMDEzOjE5LDEwMDY6MTFcIn0se1wiaWRcIjozMixcImNvbW1pc3Npb25cIjowLjQ2LFwiY29uZGl0aW9uXCI6XCIxMDEzOjE5LDEwMDU6MjIsMTAxMjoxMiwxMDA4OjIwXCJ9LHtcImlkXCI6MzMsXCJjb21taXNzaW9uXCI6MC4yLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE2LDEwMTM6MTEsMTAwMjoyMywxMDA5OjE2XCJ9LHtcImlkXCI6MzQsXCJjb21taXNzaW9uXCI6MC4wMixcImNvbmRpdGlvblwiOlwiMTAwOToxOSwxMDEwOjEyLDEwMTE6MTQsMTAxMjoyMFwifSx7XCJpZFwiOjM1LFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDE6MTgsMTAwNDoxOSwxMDEzOjE2LDEwMDM6MTBcIn0se1wiaWRcIjozNixcImNvbW1pc3Npb25cIjowLjIxLFwiY29uZGl0aW9uXCI6XCIxMDAzOjExLDEwMDg6MTcsMTAxNDoxNywxMDA3OjE3XCJ9LHtcImlkXCI6MzcsXCJjb21taXNzaW9uXCI6MC40NCxcImNvbmRpdGlvblwiOlwiMTAxMjoxNCwxMDEwOjIwLDEwMDI6MTQsMTAxMToxMVwifSx7XCJpZFwiOjM4LFwiY29tbWlzc2lvblwiOjAuMjIsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTMsMTAwNDoxOSwxMDAyOjExLDEwMTU6MThcIn0se1wiaWRcIjozOSxcImNvbW1pc3Npb25cIjowLjM2LFwiY29uZGl0aW9uXCI6XCIxMDA3OjE4LDEwMTI6MTMsMTAwNDoxNiwxMDAyOjE2XCJ9LHtcImlkXCI6NDAsXCJjb21taXNzaW9uXCI6MC4yOCxcImNvbmRpdGlvblwiOlwiMTAwNDoxMCwxMDA1OjEwLDEwMDg6MTgsMTAxMToxNlwifSx7XCJpZFwiOjQxLFwiY29tbWlzc2lvblwiOjAuMTgsXCJjb25kaXRpb25cIjpcIjEwMTA6MTgsMTAwOToxOCwxMDA4OjE3LDEwMTE6MjZcIn0se1wiaWRcIjo0MixcImNvbW1pc3Npb25cIjowLjQzLFwiY29uZGl0aW9uXCI6XCIxMDA5OjExLDEwMDU6MTgsMTAwNzoyMCwxMDAyOjEzXCJ9LHtcImlkXCI6NDMsXCJjb21taXNzaW9uXCI6MC4xNCxcImNvbmRpdGlvblwiOlwiMTAwNjoxMCwxMDA0OjE0LDEwMTQ6MTEsMTAwODoxNVwifSx7XCJpZFwiOjQ0LFwiY29tbWlzc2lvblwiOjAuNjIsXCJjb25kaXRpb25cIjpcIjEwMDk6MTUsMTAwMzoxOCwxMDAyOjI0LDEwMDc6MTlcIn0se1wiaWRcIjo0NSxcImNvbW1pc3Npb25cIjowLjExLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE1LDEwMTA6MjMsMTAwNzoxMywxMDExOjEzXCJ9LHtcImlkXCI6NDYsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwMzoxMiwxMDA3OjIzLDEwMTA6MTYsMTAwMjoxNFwifSx7XCJpZFwiOjQ3LFwiY29tbWlzc2lvblwiOjAuNDksXCJjb25kaXRpb25cIjpcIjEwMTA6MTQsMTAxNToyMCwxMDAzOjE1LDEwMTQ6MTZcIn0se1wiaWRcIjo0OCxcImNvbW1pc3Npb25cIjowLjA2LFwiY29uZGl0aW9uXCI6XCIxMDEzOjE3LDEwMDc6MTQsMTAwODoxNywxMDAxOjEwXCJ9LHtcImlkXCI6NDksXCJjb21taXNzaW9uXCI6MC40OCxcImNvbmRpdGlvblwiOlwiMTAwMjoyNiwxMDA0OjExLDEwMDk6MTIsMTAwNjoyMFwifSx7XCJpZFwiOjUwLFwiY29tbWlzc2lvblwiOjAuMDUsXCJjb25kaXRpb25cIjpcIjEwMDY6MTcsMTAxMjoxOSwxMDA4OjIwLDEwMTU6MTFcIn0se1wiaWRcIjo1MSxcImNvbW1pc3Npb25cIjowLjA0LFwiY29uZGl0aW9uXCI6XCIxMDExOjE4LDEwMDQ6MTksMTAwMjoyNSwxMDAzOjExXCJ9LHtcImlkXCI6NTIsXCJjb21taXNzaW9uXCI6MC40MyxcImNvbmRpdGlvblwiOlwiMTAxNToxNSwxMDEzOjEwLDEwMDE6MTUsMTAwNDoyNlwifSx7XCJpZFwiOjUzLFwiY29tbWlzc2lvblwiOjAuMDgsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTQsMTAxMjoxMiwxMDEwOjIwLDEwMTU6MThcIn0se1wiaWRcIjo1NCxcImNvbW1pc3Npb25cIjowLjQ1LFwiY29uZGl0aW9uXCI6XCIxMDA1OjIyLDEwMDI6MTMsMTAwOToxNiwxMDE1OjE3XCJ9LHtcImlkXCI6NTUsXCJjb21taXNzaW9uXCI6MC43LFwiY29uZGl0aW9uXCI6XCIxMDAxOjIzLDEwMTQ6MTksMTAwNToxNywxMDEwOjE1XCJ9LHtcImlkXCI6NTYsXCJjb21taXNzaW9uXCI6MC4wNSxcImNvbmRpdGlvblwiOlwiMTAwNjoxNywxMDA1OjE5LDEwMDk6MTcsMTAwMzoxOFwifSx7XCJpZFwiOjU3LFwiY29tbWlzc2lvblwiOjAuNjcsXCJjb25kaXRpb25cIjpcIjEwMDc6MjEsMTAwODoxNywxMDAyOjE2LDEwMDk6MjVcIn0se1wiaWRcIjo1OCxcImNvbW1pc3Npb25cIjowLjMyLFwiY29uZGl0aW9uXCI6XCIxMDA2OjEwLDEwMDg6MjUsMTAwNToyNCwxMDA3OjE5XCJ9LHtcImlkXCI6NTksXCJjb21taXNzaW9uXCI6MC43OSxcImNvbmRpdGlvblwiOlwiMTAxMjoyNSwxMDA5OjMwLDEwMTM6MTYsMTAwODoxNVwifSx7XCJpZFwiOjYwLFwiY29tbWlzc2lvblwiOjAuNjksXCJjb25kaXRpb25cIjpcIjEwMTU6MjYsMTAxMjoyNywxMDEwOjMxLDEwMDE6MjNcIn0se1wiaWRcIjo2MSxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDE1OjEyLDEwMDY6MjUsMTAxMToxNSwxMDAyOjE3XCJ9LHtcImlkXCI6NjIsXCJjb21taXNzaW9uXCI6MC40NCxcImNvbmRpdGlvblwiOlwiMTAxNToyMSwxMDA3OjE1LDEwMTE6MTgsMTAwNjoyNlwifSx7XCJpZFwiOjYzLFwiY29tbWlzc2lvblwiOjAuMDEsXCJjb25kaXRpb25cIjpcIjEwMTA6MTgsMTAwNToxNiwxMDA5OjEzLDEwMDM6MjdcIn0se1wiaWRcIjo2NCxcImNvbW1pc3Npb25cIjowLjI3LFwiY29uZGl0aW9uXCI6XCIxMDA3OjE3LDEwMDY6MTAsMTAwNToyOSwxMDA0OjI1XCJ9LHtcImlkXCI6NjUsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDAzOjMwLDEwMTQ6MjAsMTAwNToxNVwifSx7XCJpZFwiOjY2LFwiY29tbWlzc2lvblwiOjAuNzMsXCJjb25kaXRpb25cIjpcIjEwMDQ6MTUsMTAwODoyNSwxMDAyOjE0LDEwMTI6MTRcIn0se1wiaWRcIjo2NyxcImNvbW1pc3Npb25cIjowLjEzLFwiY29uZGl0aW9uXCI6XCIxMDAxOjE2LDEwMTI6MjAsMTAxMToyMCwxMDAzOjEwXCJ9LHtcImlkXCI6NjgsXCJjb21taXNzaW9uXCI6MC42OSxcImNvbmRpdGlvblwiOlwiMTAxMzoyNCwxMDA4OjIzLDEwMDY6MTYsMTAwNzoxN1wifSx7XCJpZFwiOjY5LFwiY29tbWlzc2lvblwiOjAuMzcsXCJjb25kaXRpb25cIjpcIjEwMTU6MzAsMTAwNDoyOSwxMDEzOjE3LDEwMDk6MTBcIn0se1wiaWRcIjo3MCxcImNvbW1pc3Npb25cIjowLjcxLFwiY29uZGl0aW9uXCI6XCIxMDEwOjIzLDEwMDQ6MzEsMTAxMToxNywxMDEyOjExXCJ9LHtcImlkXCI6NzEsXCJjb21taXNzaW9uXCI6MC4yOSxcImNvbmRpdGlvblwiOlwiMTAwODoxMSwxMDAyOjI2LDEwMDM6MjgsMTAxNToxM1wifSx7XCJpZFwiOjcyLFwiY29tbWlzc2lvblwiOjAuMzEsXCJjb25kaXRpb25cIjpcIjEwMDU6MjUsMTAwMjozOCwxMDEyOjE5LDEwMTA6MTRcIn0se1wiaWRcIjo3MyxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDEyOjM0LDEwMDY6MjIsMTAwMzoyNywxMDA0OjIwXCJ9LHtcImlkXCI6NzQsXCJjb21taXNzaW9uXCI6MC4yNixcImNvbmRpdGlvblwiOlwiMTAwMzoyMCwxMDEyOjE4LDEwMDI6MzAsMTAwMToyMFwifSx7XCJpZFwiOjc1LFwiY29tbWlzc2lvblwiOjAuMTgsXCJjb25kaXRpb25cIjpcIjEwMDY6MzEsMTAxNDozMCwxMDA4OjEyLDEwMDI6MjVcIn0se1wiaWRcIjo3NixcImNvbW1pc3Npb25cIjowLjUxLFwiY29uZGl0aW9uXCI6XCIxMDA3OjIxLDEwMTI6MjAsMTAwNDoxMSwxMDE0OjIwXCJ9LHtcImlkXCI6NzcsXCJjb21taXNzaW9uXCI6MC4yMSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDA5OjE2LDEwMTI6MjQsMTAwNzozMFwifSx7XCJpZFwiOjc4LFwiY29tbWlzc2lvblwiOjAuNzMsXCJjb25kaXRpb25cIjpcIjEwMTU6MTYsMTAxMjoxNiwxMDA2OjIwLDEwMDg6MTJcIn0se1wiaWRcIjo3OSxcImNvbW1pc3Npb25cIjowLjY1LFwiY29uZGl0aW9uXCI6XCIxMDA2OjI2LDEwMDQ6MTgsMTAwNzoxMiwxMDExOjI3XCJ9LHtcImlkXCI6ODAsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwOToxNSwxMDAzOjE2LDEwMDQ6MTksMTAwNzoyNFwifSx7XCJpZFwiOjgxLFwiY29tbWlzc2lvblwiOjAuMTQsXCJjb25kaXRpb25cIjpcIjEwMTI6MTAsMTAxNToyOCwxMDAyOjE0LDEwMDM6MzhcIn0se1wiaWRcIjo4MixcImNvbW1pc3Npb25cIjowLjIsXCJjb25kaXRpb25cIjpcIjEwMDU6MTIsMTAxMToxOSwxMDA5OjE4LDEwMDI6MTRcIn0se1wiaWRcIjo4MyxcImNvbW1pc3Npb25cIjowLjUzLFwiY29uZGl0aW9uXCI6XCIxMDEwOjE5LDEwMDM6MzgsMTAwNzoxMiwxMDE1OjIwXCJ9LHtcImlkXCI6ODQsXCJjb21taXNzaW9uXCI6MC42MixcImNvbmRpdGlvblwiOlwiMTAwNToyOSwxMDE0OjI2LDEwMDI6MTgsMTAwNzozOFwifSx7XCJpZFwiOjg1LFwiY29tbWlzc2lvblwiOjAuMzcsXCJjb25kaXRpb25cIjpcIjEwMTE6MTAsMTAwMToxNywxMDEyOjEyLDEwMDQ6MTJcIn0se1wiaWRcIjo4NixcImNvbW1pc3Npb25cIjowLjU5LFwiY29uZGl0aW9uXCI6XCIxMDA5OjI1LDEwMTE6MjAsMTAwNjoxNCwxMDE1OjExXCJ9LHtcImlkXCI6ODcsXCJjb21taXNzaW9uXCI6MC4xMSxcImNvbmRpdGlvblwiOlwiMTAwNjoyNiwxMDA1OjE5LDEwMTM6MTAsMTAxNDoyOVwifSx7XCJpZFwiOjg4LFwiY29tbWlzc2lvblwiOjAuMDgsXCJjb25kaXRpb25cIjpcIjEwMDg6MzcsMTAxMToyNCwxMDE1OjEyLDEwMTQ6MTFcIn0se1wiaWRcIjo4OSxcImNvbW1pc3Npb25cIjowLjAyLFwiY29uZGl0aW9uXCI6XCIxMDAyOjE3LDEwMDM6MjgsMTAwNToxMSwxMDEwOjE0XCJ9LHtcImlkXCI6OTAsXCJjb21taXNzaW9uXCI6MC4zMixcImNvbmRpdGlvblwiOlwiMTAwMjoxOSwxMDEzOjI4LDEwMDc6MjUsMTAwMToxM1wifSx7XCJpZFwiOjkxLFwiY29tbWlzc2lvblwiOjAuMTksXCJjb25kaXRpb25cIjpcIjEwMDg6MTUsMTAxMzoxMCwxMDE0OjEwLDEwMDc6MTZcIn0se1wiaWRcIjo5MixcImNvbW1pc3Npb25cIjowLjEzLFwiY29uZGl0aW9uXCI6XCIxMDA0OjM4LDEwMTE6MTMsMTAwODoxNSwxMDA3OjI5XCJ9LHtcImlkXCI6OTMsXCJjb21taXNzaW9uXCI6MC4zNCxcImNvbmRpdGlvblwiOlwiMTAxMzoxMiwxMDAxOjM5LDEwMDY6MzgsMTAwODoxMVwifSx7XCJpZFwiOjk0LFwiY29tbWlzc2lvblwiOjAuMjIsXCJjb25kaXRpb25cIjpcIjEwMDI6MzYsMTAwMToxNywxMDEzOjE2LDEwMDU6MzFcIn0se1wiaWRcIjo5NSxcImNvbW1pc3Npb25cIjowLjE1LFwiY29uZGl0aW9uXCI6XCIxMDA1OjE2LDEwMDE6MTQsMTAxNTozNCwxMDA4OjE2XCJ9LHtcImlkXCI6OTYsXCJjb21taXNzaW9uXCI6MC4wNixcImNvbmRpdGlvblwiOlwiMTAwMzoyNCwxMDAxOjMyLDEwMDc6MjgsMTAwNToxOFwifSx7XCJpZFwiOjk3LFwiY29tbWlzc2lvblwiOjAuNzQsXCJjb25kaXRpb25cIjpcIjEwMTM6MzIsMTAwOToyMywxMDA2OjMwLDEwMTE6MjBcIn1dLFwibGFuZ1wiOltdLFwibGFuZExldmVsXCI6W3tcImlkXCI6MSxcInJld2FyZFwiOlwiMTAwMjowXCIsXCJjb3N0XCI6XCIxMDAyOjBcIixcImdhaW5cIjpudWxsfSx7XCJpZFwiOjIsXCJyZXdhcmRcIjpcIjEwMDI6MTUwMFwiLFwiY29zdFwiOlwiMTAwMjoxMDAwMFwiLFwiZ2FpblwiOjAuMX0se1wiaWRcIjozLFwicmV3YXJkXCI6XCIxMDAyOjIwMDBcIixcImNvc3RcIjpcIjEwMDI6MzAwMDBcIixcImdhaW5cIjowLjI1fSx7XCJpZFwiOjQsXCJyZXdhcmRcIjpcIjEwMDI6MjUwMFwiLFwiY29zdFwiOlwiMTAwMjo1MDAwMFwiLFwiZ2FpblwiOjAuNH0se1wiaWRcIjo1LFwicmV3YXJkXCI6XCIxMDAyOjMwMDBcIixcImNvc3RcIjpcIjEwMDI6MTAwMDAwXCIsXCJnYWluXCI6MC41NX1dLFwiZmVlZFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTk5N0NcdTVFNzJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDFfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MSxcImNvc3RcIjpcIjEwMDI6MzBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU1NzVBXHU2NzlDXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAyX2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjIsXCJjb3N0XCI6XCIxMDAyOjUwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1NzA2Qlx1ODE3RlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwM19mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjo1LFwiY29zdFwiOlwiMTAwMjoxMDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU3MjVCXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA0X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjUwLFwiY29zdFwiOlwiMTAwMjo5MDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU3MzJBXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA1X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjIwLFwiY29zdFwiOlwiMTAwMjo0NjBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU5RTIxXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA2X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjEwLFwiY29zdFwiOlwiMTAwMjoyNzBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn1dLFwiY3VycmVuY3lcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU5NEJCXHU3N0YzXCIsXCJpY29uXCI6XCJtYWluX3NjZW5lL2ltZ19kaWFtb25kLnBuZ1wifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTkxRDFcdTVFMDFcIixcImljb25cIjpcIm1haW5fc2NlbmUvaW1nX2NvaW4ucG5nXCJ9XSxcImNvbmZpZ1wiOlt7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVzXCIsXCJ2YWx1ZVwiOjMwfSx7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVcIixcInZhbHVlXCI6NjAwfSx7XCJpZFwiOlwidW5sb2NrX2xhbmRfY29zdFwiLFwidmFsdWVcIjpcIjEwMDI6MCwxMDAyOjAsMTAwMjoyMDAwLDEwMDI6NTAwMCwxMDAyOjEwMDAwLDEwMDI6MjAwMDAsMTAwMjoyMDAwMCwxMDAyOjMwMDAwLDEwMDI6NTAwMDBcIn0se1wiaWRcIjpcImdvbGREZWZhdWx0XCIsXCJ2YWx1ZVwiOlwiMTAwMjoxMDBcIn0se1wiaWRcIjpcImRpYW1vbmREZWZhdWx0XCIsXCJ2YWx1ZVwiOlwiMTAwMTo1MFwifSx7XCJpZFwiOlwiQURUaW1lc0xpbWl0XCIsXCJ2YWx1ZVwiOjMwfSx7XCJpZFwiOlwiQURTcGVlZFVwdGltZXNcIixcInZhbHVlXCI6Nn0se1wiaWRcIjpcInZpdGFsaXR5QnV5Q29zdEdvbGRcIixcInZhbHVlXCI6XCIxMDAyOjEwMDAwXCJ9LHtcImlkXCI6XCJ2aXRhbGl0eUxpbWl0XCIsXCJ2YWx1ZVwiOjEwfSx7XCJpZFwiOlwibGFuZEFtb3VudE1heFwiLFwidmFsdWVcIjo5fSx7XCJpZFwiOlwicGV0RGVmYXVsdFZpdGFsaXR5XCIsXCJ2YWx1ZVwiOjEwMH0se1wiaWRcIjpcInBldERpZ2VzdEludGVydmFsVGltZVwiLFwidmFsdWVcIjo2MH0se1wiaWRcIjpcIlZpZGVvcmV3YXJkc1wiLFwidmFsdWVcIjpcIjEwMDE6MTAwXCJ9XX07IiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xzIHtcclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU1QjU3XHU3QjI2XHJcbiAgICAgKiBAcGFyYW0gc3RyIFx1ODk4MVx1ODlFM1x1Njc5MFx1NzY4NFx1NUI1N1x1N0IyNlxyXG4gICAgICogQHBhcmFtIGZvcm1hdCBcdTUwNUFcdTRFM0FcdTUzQzJcdTgwMDNcdTc2ODRcdTVCNTdcdTdCMjZcdTlFRDhcdThCQTRcdTRFM0EsXHJcbiAgICAgKiBAcmV0dXJucyBcdTg5RTNcdTY3OTBcdTU5N0RcdTc2ODRcdTVCNTdcdTdCMjZcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHBhcnNlU3RyaW5nKHN0cjogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZyA9IFwiLFwiKSB7XHJcbiAgICAgICAgaWYgKCFzdHIpIHJldHVybiBbXTtcclxuICAgICAgICByZXR1cm4gc3RyLnNwbGl0KGZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc5RDJcdThGNkNcdTYzNjJcdTYyMTAwMDowMDowMFxyXG4gICAgICogQHBhcmFtIHMgXHU4RjZDXHU2MzYyXHU2NUY2XHU5NUY0XHU3Njg0XHU3OUQyXHJcbiAgICAgKiBAcmV0dXJucyAwMDowMDowMFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9ybWF0U2Vjb25kcyA9IChzKSA9PiBuZXcgRGF0ZShzICogMTAwMCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMTEsIDgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuL1RhYmxlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb25maWdCYXNlLFxyXG4gICAgQ3VycmVuY3lCYXNlLFxyXG4gICAgRmVlZEJhc2UsXHJcbiAgICBMYW5kTGV2ZWxCYXNlLFxyXG4gICAgT3JkZXJCYXNlLFxyXG4gICAgUGV0QmFzZSxcclxuICAgIFBsYW50QmFzZSxcclxuICAgIFJld2FyZEJhc2UsXHJcbiAgICBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICBTaWduSW5CYXNlLFxyXG4gICAgVGFza0Jhc2UsXHJcbn0gZnJvbSBcIi4vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCIuL1Rvb2xzXCI7XHJcblxyXG5jb25zdCBUYWJsZVByb3BlcnR5RXZlbnQgPSB7XHJcbiAgICBwZXQoZDogdHlwZW9mIFRhYmxlLnBldFswXSkge1xyXG4gICAgICAgIHJldHVybiA8UGV0QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbiB8fCBgcGV0X2ZlZWQvJHtkLmlkfV9kb2cucG5nYCxcclxuICAgICAgICAgICAgdml0YWxpdHlfbWF4OiBkLnZpdGFsaXR5X21heCxcclxuICAgICAgICAgICAgdml0YWxpdHlfY29uc3VtZTogZC52aXRhbGl0eV9jb25zdW1lLFxyXG4gICAgICAgICAgICBjb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5jb3N0KSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgICAgICBzZW5zaXRpdmU6IGQuc2Vuc2l0aXZlLFxyXG4gICAgICAgICAgICBhYmlsaXR5OiBkLmFiaWxpdHksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTk5NzJcdTY1OTlcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZmVlZChkOiB0eXBlb2YgVGFibGUuZmVlZFswXSkge1xyXG4gICAgICAgIHJldHVybiA8RmVlZEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYHBldF9mZWVkLyR7ZC5pZH1fZmVlZC5wbmdgLFxyXG4gICAgICAgICAgICB2aXRhbGl0eTogZC52aXRhbGl0eSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OEJBMlx1NTM1NVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIG9yZGVyKGQ6IHR5cGVvZiBUYWJsZS5vcmRlclswXSkge1xyXG4gICAgICAgIHJldHVybiA8T3JkZXJCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGNvbW1pc3Npb246IE51bWJlcihkLmNvbW1pc3Npb24pLFxyXG4gICAgICAgICAgICBjb25kaXRpb246IFRvb2xzLnBhcnNlU3RyaW5nKGQuY29uZGl0aW9uKS5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gVG9vbHMucGFyc2VTdHJpbmcoZSwgXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFudDogVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KE51bWJlcih2WzBdKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IE51bWJlcih2WzFdKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU2MjEwXHU3MTlGXHU2OTBEXHU3MjY5XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcGxhbnQoZDogdHlwZW9mIFRhYmxlLnBsYW50WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQbGFudEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24sXHJcbiAgICAgICAgICAgIG1hdHVyZUljb246IGBwbGFudF9pY29uLyR7ZC5pY29uLm1hdGNoKC9cXGQrL2cpWzBdfV9tYXR1cmUucG5nYCxcclxuICAgICAgICAgICAgZ3Jvd2luZ0ljb246IGBwbGFudF9pY29uLyR7ZC5pY29uLm1hdGNoKC9cXGQrL2cpWzBdfV9ncm93aW5nLnBuZ2AsXHJcbiAgICAgICAgICAgIGdhaW46IFRvb2xzLnBhcnNlU3RyaW5nKGQuZ2FpbikubWFwKChlKSA9PiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZSkpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHNlZWRfcHJpY2U6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnNlZWRfcHJpY2UpLFxyXG4gICAgICAgICAgICBoYXJ2ZXN0OiBOdW1iZXIoVG9vbHMucGFyc2VTdHJpbmcoZC5oYXJ2ZXN0LCBcIn5cIilbMV0pLFxyXG4gICAgICAgICAgICBtYXR1cmVfdGltZTogTnVtYmVyKGQubWF0dXJlX3RpbWUpLFxyXG4gICAgICAgICAgICB1bmxvY2tfY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudW5sb2NrX2Nvc3QpLFxyXG4gICAgICAgICAgICB1bmxvY2tfcmV3YXJkOiBUb29scy5wYXJzZVN0cmluZyhkLnVubG9ja19yZXdhcmQpLm1hcCgoZSkgPT4gZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGUpKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OEQyN1x1NUUwMVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbmN5KGQ6IHR5cGVvZiBUYWJsZS5jdXJyZW5jeVswXSkge1xyXG4gICAgICAgIHJldHVybiA8Q3VycmVuY3lCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbixcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU1NzFGXHU1NzMwXHU3QjQ5XHU3RUE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGxhbmRMZXZlbChkOiB0eXBlb2YgVGFibGUubGFuZExldmVsWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxMYW5kTGV2ZWxCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIHJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQucmV3YXJkKSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGdhaW46IGQuZ2FpbixcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25maWcoZDogdHlwZW9mIFRhYmxlLmNvbmZpZ1swXSkge1xyXG4gICAgICAgIHN3aXRjaCAoZC5pZCkge1xyXG4gICAgICAgICAgICBjYXNlIFwiYWxsX3NwZWVkX3VwX3RpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJhbGxfc3BlZWRfdXBfdGltZXNcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJhbGxfc3BlZWRfdXBfdGltZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiYWxsX3NwZWVkX3VwX3RpbWVcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJ1bmxvY2tfbGFuZF9jb3N0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInVubG9ja19sYW5kX2Nvc3RcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogVG9vbHMucGFyc2VTdHJpbmcoZC52YWx1ZSBhcyBzdHJpbmcpLm1hcCgoZCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQpXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZ29sZERlZmF1bHRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZ29sZERlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKS5jb3VudCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJkaWFtb25kRGVmYXVsdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJkaWFtb25kRGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcIkFEVGltZXNMaW1pdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiQURUaW1lc0xpbWl0XCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJBRFNwZWVkVXB0aW1lc1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiQURTcGVlZFVwdGltZXNcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcInZpdGFsaXR5QnV5Q29zdEdvbGRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidml0YWxpdHlCdXlDb3N0R29sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcInZpdGFsaXR5TGltaXRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcInZpdGFsaXR5TGltaXRcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcImxhbmRBbW91bnRNYXhcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcImxhbmRBbW91bnRNYXhcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcInBldERlZmF1bHRWaXRhbGl0eVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwicGV0RGVmYXVsdFZpdGFsaXR5XCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXREaWdlc3RJbnRlcnZhbFRpbWVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcInBldERpZ2VzdEludGVydmFsVGltZVwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiVmlkZW9yZXdhcmRzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJWaWRlb3Jld2FyZHNcIiwgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU5NTAxXHU3QjdFXHU1MjMwXHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZFxyXG4gICAgICovXHJcbiAgICBzaWduSW4oZDogdHlwZW9mIFRhYmxlLnNpZ25JblswXSkge1xyXG4gICAgICAgIHJldHVybiA8U2lnbkluQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBkYXlzOiBkLmRheXMsXHJcbiAgICAgICAgICAgIHJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQucmV3YXJkKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NEVGQlx1NTJBMVx1ODg2OFxyXG4gICAgICovXHJcbiAgICB0YXNrKGQ6IHR5cGVvZiBUYWJsZS50YXNrWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxUYXNrQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICB0aW1lczogZC50aW1lcyxcclxuICAgICAgICAgICAgcmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5yZXdhcmQpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHRpdGxlOiBkLnRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYGdhbWUvaW1nX2Jhcm0ucG5nYCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcclxuICogQHBhcmFtIHN0ciBcdTg5RTNcdTY3OTBcdTc2ODRcdThEMjdcdTVFMDFcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQgaWQ6bnVtXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXdhcmRDdXJyZW5jeUJhc2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBsaXN0ID0gVG9vbHMucGFyc2VTdHJpbmcoc3RyLCBcIjpcIik7XHJcblxyXG4gICAgcmV0dXJuIDxSZXdhcmRDdXJyZW5jeUJhc2U+e1xyXG4gICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KE51bWJlcihsaXN0WzBdKSksXHJcbiAgICAgICAgY291bnQ6IE51bWJlcihsaXN0WzFdKSxcclxuICAgIH07XHJcbn1cclxuXHJcbnR5cGUgdHlwZVRhYmxlID0gdHlwZW9mIFRhYmxlUHJvcGVydHlFdmVudDtcclxuXHJcbmNsYXNzIFRhYmxlQ29udHJvbCB7XHJcbiAgICBwcml2YXRlIHRhYmxlQ2FjaGU6IE1hcDxrZXlvZiB0eXBlVGFibGUsIFJldHVyblR5cGU8dHlwZVRhYmxlW2tleW9mIHR5cGVUYWJsZV0+W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU3Njg0XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0ga2V5IFx1ODg2OFx1NzY4NGtleVxyXG4gICAgICovXHJcbiAgICB0YWJsZTxUIGV4dGVuZHMga2V5b2YgdHlwZVRhYmxlPihcclxuICAgICAgICBrZXk6IFRcclxuICAgICk6IHtcclxuICAgICAgICBsaXN0OiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT5bXTtcclxuICAgICAgICBnZXQ6IHsgKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT4gfTtcclxuICAgIH0ge1xyXG4gICAgICAgIC8vXHU4QkZCXHU1M0Q2XHU3RUM0XHU2MjEwXHJcbiAgICAgICAgaWYgKHRoaXMudGFibGVDYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJsZUJhY2sodGhpcy50YWJsZUNhY2hlLmdldChrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTg5RTNcdTY3OTBcdTY1NzBcdTYzNkVcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIFRhYmxlW2tleV0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goVGFibGVQcm9wZXJ0eUV2ZW50W2tleV0oZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHU3RjEzXHU1QjU4XHU4OUUzXHU2NzkwXHU4ODY4XHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgdGhpcy50YWJsZUNhY2hlLnNldChrZXksIGxpc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayhsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUyOFx1NEU4RXRhYmxlXHU2NUI5XHU2Q0Q1XHU4RkQ0XHU1NkRFXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGXHU1NDhDXHU2REZCXHU1MkEwXHU4M0I3XHU1M0Q2XHU1MzU1XHU0RTJBXHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTg5RTNcdTY3OTBcdTg4NjhcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zIFx1OEZENFx1NTZERVx1NjMwN1x1NUI5QVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRhYmxlQmFjayhsaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGlzdDogbGlzdCxcclxuICAgICAgICAgICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGxpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODg2OFx1NjgzQ1x1ODlFM1x1Njc5MFx1NURFNVx1NTE3N1xyXG4gKi9cclxuY29uc3QgVGFibGVBbmFseXplID0gbmV3IFRhYmxlQ29udHJvbCgpO1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUFuYWx5emU7XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgVGFza0Jhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFza0RhdGFPYmoge1xyXG4gICAgLyoqIFx1NEVGQlx1NTJBMWlkICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NUI4Q1x1NjIxMFx1NkIyMVx1NjU3MCAqL1xyXG4gICAgdGltZXM6IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk4ODZcdTUzRDZcdTU5NTZcdTUyQjEgMFx1NjcyQVx1OTg4Nlx1NTNENiAxXHU1REYyXHU5ODg2XHU1M0Q2ICovXHJcbiAgICByZWNlaXZlOiBudW1iZXI7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExXHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBUYXNrQmFzZTtcclxufVxyXG4vKipcclxuICogXHU0RUZCXHU1MkExXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBUYXNrU2VydmljZSB7XHJcbiAgICBsaXN0OiBUYXNrRGF0YU9ialtdID0gW107XHJcblxyXG4gICAgaW5pdChkOiBOZXRJbml0W1widGFza3NcIl0pIHtcclxuICAgICAgICBkLmZvckVhY2goKGUpID0+XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGltZXM6IGUudGltZXMsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlOiBlLnJlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChlLmlkKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU0RUZCXHU1MkExXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldFRhc2soaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFRkJcdTUyQTFcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0QSA9IHRoaXMuZ2V0VGFzayhhLmlkKSxcclxuICAgICAgICAgICAgICAgIHRCID0gdGhpcy5nZXRUYXNrKGIuaWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIGEuaWQgK1xyXG4gICAgICAgICAgICAgICAgKHRBPy5yZWNlaXZlID8gMTAwMCA6IDEpICtcclxuICAgICAgICAgICAgICAgICh0QT8udGltZXMgPj0gYS5iYXNlLnRpbWVzID8gMTAwIDogMTAwMCkgLVxyXG4gICAgICAgICAgICAgICAgKGIuaWQgKyAodEI/LnJlY2VpdmUgPyAxMDAwIDogMSkgKyAodEI/LnRpbWVzID49IGIuYmFzZS50aW1lcyA/IDEwMCA6IDEwMDApKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU0RUZCXHU1MkExXHU2REZCXHU1MkEwXHU2QjIxXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIHRhc2tBZGRUaW1lcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSB0aGlzLmdldFRhc2soaWQpO1xyXG4gICAgICAgIGlmICghdGFzaykge1xyXG4gICAgICAgICAgICAvL1x1OUVEOFx1OEJBNFx1NEUwRFx1NTIxQlx1NUVGQVx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICAvLyB0YXNrID0geyBpZDogaWQsIHRpbWVzOiAwLCByZWNlaXZlOiAwLCBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChpZCkgfTtcclxuICAgICAgICAgICAgLy8gdGhpcy5saXN0LnB1c2godGFzayk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhc2sudGltZXMrKztcclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfdGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhc2tTZXJ2aWNlKCk7XHJcbiIsICJleHBvcnQgdHlwZSBMYW5kT2JqID0gTmV0SW5pdFtcImxhbmRzXCJdWzBdO1xyXG5cclxuY2xhc3MgTGFuZFNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgbGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBpbml0KGxpc3Q6IExhbmRPYmpbXSkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExhbmQoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTU3NTdcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBpZCBcdTU3MUZcdTU3MzBpZFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGdldExhbmQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkRGQlx1NTJBMFx1NjIxNlx1NjYyRlx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGQgXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGFkZExhbmQoZDogTGFuZE9iaikge1xyXG4gICAgICAgIHRoaXMubGlzdC5zZXQoZC5pZCwgZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTdBN0FcdTU3MUZcdTU3MzBcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMYW5kU2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGV0QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBldERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTVCQTBcdTcyNjlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFBldEJhc2U7XHJcbiAgICAvKiogXHU5NTAxXHU1QjlBICovXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBQZXRTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFBldERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBpbml0KHBldHM6IG51bWJlcltdKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBkLFxyXG4gICAgICAgICAgICAgICAgbG9jazogIXBldHMuaW5jbHVkZXMoZC5pZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU1QkEwXHU3MjY5XHU4OUUzXHU5NTAxXHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIGdldFVubG9ja0xlbigpIHtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWQubG9jaykgbGVuKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBldFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYW50RGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogUGxhbnRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jbGFzcyBQbGFudFNlcnZpY2Uge1xyXG4gICAgbGlzdDogUGxhbnREYXRhQmFzZVtdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGxpc3QgXHU3OUNEXHU1QjUwaWRcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgaW5pdChsaXN0OiBudW1iZXJbXSkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7IGJhc2U6IGQsIGxvY2s6ICFsaXN0LmluY2x1ZGVzKGQuaWQpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gaWQgXHU2OTBEXHU3MjY5aWRcclxuICAgICAqIEByZXR1cm5zIFx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBnZXRQbGFudChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMubGlzdC5sZW5ndGggLSAxOyB4ID4gLTE7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBsYW50U2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi4vY29yZS9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2RlxyXG4gKi9cclxuY2xhc3MgVXNlckluZm8ge1xyXG4gICAgLyoqIFx1OEJBMlx1NTM1NVx1N0I0OVx1N0VBNyBcdTVERjJcdTVCOENcdTYyMTAgKi9cclxuICAgIG9yZGVyTGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1NDBEXHU3OUYwICovXHJcbiAgICBuaWNrbmFtZTogc3RyaW5nID0gXCJuYW1lXCI7XHJcbiAgICAvLyAvKiogXHU3NTI4XHU2MjM3aWQgKi9cclxuICAgIC8vIHVpZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTU1MkZcdTRFMDBcdTY4MDdcdThCQzYgKi9cclxuICAgIGtleTogc3RyaW5nID0gbnVsbDtcclxuICAgIC8qKiBcdTc1MjhcdTU0MERcdTU5MzRcdTUwQ0YgKi9cclxuICAgIGF2YXRhcjogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjMgKi9cclxuICAgIGRpYW1vbmQ6IG51bWJlciA9IDk5OTtcclxuICAgIC8qKiBcdTkxRDFcdTVFMDEgKi9cclxuICAgIGdvbGQ6IG51bWJlciA9IDk5OTtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTUzRUZcdTRFRTVcdTc3MEJcdTVFN0ZcdTU0NEFcdTc2ODRcdTZCMjFcdTY1NzAgKi9cclxuICAgIGFkdmVydGlzZVRpbWVzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzNBOVx1NUJCNlx1NEY2OVx1NjIzNFx1NzY4NFx1NUJBMFx1NzI2OSAqL1xyXG4gICAgd2FyZVBldElkOiBudW1iZXI7XHJcbiAgICAvKiogXHU1MjY5XHU0RjU5XHU0RjUzXHU1MjlCICovXHJcbiAgICBwZXRWaXRhbGl0eTogbnVtYmVyO1xyXG4gICAgLyoqIFx1NkQ4OFx1NTMxNlx1OThERlx1NzI2OVx1NTAxMlx1OEJBMVx1NjVGNiAqL1xyXG4gICAgZGlnZXN0Q291bnREb3duOiBudW1iZXI7XHJcbiAgICAvKiogXHU4RkRFXHU3RUVEXHU3QjdFXHU1MjMwXHU1OTI5XHU2NTcwICovXHJcbiAgICBzaWduSW5EYXlzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NEUwQVx1NEUwMFx1NkIyMVx1OTg4Nlx1NTNENlx1NzY4NFx1N0I3RVx1NTIzMFx1NTk1Nlx1NTJCMWlkICovXHJcbiAgICBzaWduSW5JZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTVERjJcdTdFQ0ZcdTUyQTBcdTkwMUZcdTZCMjFcdTY1NzAgKi9cclxuICAgIHNwZWVkVXBUaW1lczogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTRGNTNcdTUyOUIgKi9cclxuICAgIHZpdGFsaXR5OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTE1MVx1NjM2Mlx1NkJENFx1NEY4QiAqL1xyXG4gICAgcHJvcG9ydGlvbjogbnVtYmVyID0gMC4wMDAxO1xyXG5cclxuICAgIGdldCB0dHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJMZXZlbDtcclxuICAgIH1cclxuICAgIHNldCB0dHQodikge1xyXG4gICAgICAgIHRoaXMub3JkZXJMZXZlbCA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VySW5mbygpO1xyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBXYXJlSG91c2VEYXRhIHtcclxuICAgIGJhc2U6IFBsYW50QmFzZTtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB0eXBlPzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFdhcmVob3VzZVNlcnZpY2Uge1xyXG4gICAgbGlzdDogV2FyZUhvdXNlRGF0YVtdID0gW107XHJcblxyXG4gICAgaW5pdChcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICkge1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoZC5pZCksXHJcbiAgICAgICAgICAgICAgICBjb3VudDogZC5hbW91bnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxQ0ZcdTVDMTFcdTcyNjlcdTU0QzFcdTY1NzBcdTkxQ0ZcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIGFtb3VudFxyXG4gICAgICovXHJcbiAgICByZWR1Y2VBbW91bnQoaWQ6IG51bWJlciwgYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFt4XS5jb3VudCAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTkwNTNcdTUxNzdcclxuICAgICAqL1xyXG4gICAgZ2V0T25lKGlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEl0ZW0oaWQpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2REZCXHU1MkEwXHU3MjY5XHU1NEMxXHJcbiAgICAgKi9cclxuICAgIGFkZChpZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLmNvdW50ICs9IGFtb3VudDtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX09yZGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaWQpLFxyXG4gICAgICAgICAgICBjb3VudDogYW1vdW50LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfT3JkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgV2FyZWhvdXNlU2VydmljZSgpO1xyXG4iLCAiLyoqXHJcbiAqIFx1NzdFRFx1OTRGRVx1NjNBNVx1OEJGN1x1NkM0Mlx1NTM0Rlx1OEJBRVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQXBpSHR0cCB7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU3NjdCXHU1RjU1ICovXHJcbiAgICBsb2dpbiA9IFwiL2xvZ2luXCIsXHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU3NjdCXHU1RjU1IHRva2VuICovXHJcbiAgICBsb2dpblRva2VuID0gXCIvbG9naW4vdG9rZW5cIixcclxuICAgIC8qKiBcdTk4ODZcdTUzRDZcdThCQTJcdTUzNTVcdTU5NTZcdTUyQjEgKi9cclxuICAgIG9yZGVyUmV3YXJkID0gXCIvb3JkZXIvcmV3YXJkXCIsXHJcbiAgICAvKiogXHU5ODg2XHU1M0Q2XHU4QkEyXHU1MzU1XHU1OTU2XHU1MkIxICovXHJcbiAgICBzaWduSW5SZXdhcmQgPSBcIi9zaWduSW4vcmV3YXJkXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU4OUUzXHU5NTAxICovXHJcbiAgICBsYW5kVW5sb2NrID0gXCIvbGFuZC91bmxvY2tcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTY0QURcdTc5Q0QgKi9cclxuICAgIGxhbmRTb3cgPSBcIi9sYW5kL3Nvd1wiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjUzNlx1ODNCNyAqL1xyXG4gICAgbGFuZEdhdGhlciA9IFwiL2xhbmQvZ2F0aGVyXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3ICovXHJcbiAgICBsYW5kVXBncmFkZSA9IFwiL2xhbmQvdXBncmFkZVwiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NTJBMFx1OTAxRiAqL1xyXG4gICAgbGFuZFNwZWVkVXAgPSBcIi9sYW5kL3NwZWVkVXBcIixcclxuICAgIC8qKiBcdTc5Q0RcdTVCNTBcdTg5RTNcdTk1MDEgKi9cclxuICAgIHNlZWRzVW5sb2NrID0gXCIvc2VlZHMvdW5sb2NrXCIsXHJcbiAgICAvKiogXHU4M0I3XHU1M0Q2XHU4MENDXHU1MzA1XHU1MjE3XHU4ODY4PT4gXHU2NjgyXHU2NUY2XHU4RkQ5XHU0RTJBXHU2M0E1XHU1M0UzXHU0RTBEXHU5NzAwXHU4OTgxXHU3NTI4ICovXHJcbiAgICB3YXJlaG91c2UgPSBcIi93YXJlaG91c2VcIixcclxuICAgIC8qKiBcdTgwQ0NcdTUzMDVcdTU1NDZcdTU0QzFcdTUxRkFcdTU1MkUgKi9cclxuICAgIHdhcmVob3VzZVNlbGwgPSBcIi93YXJlaG91c2Uvc2VsbFwiLFxyXG4gICAgLyoqIFx1NUJBMFx1NzI2OVx1OEQyRFx1NEU3MCAqL1xyXG4gICAgcGV0QnV5ID0gXCIvcGV0L2J1eVwiLFxyXG4gICAgLyoqIFx1NUJBMFx1NzI2OVx1NEY2OVx1NjIzNCAqL1xyXG4gICAgcGV0V2VhciA9IFwiL3BldC93ZWFyXCIsXHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU4RDJEXHU0RTcwICovXHJcbiAgICBmZWVkQnV5ID0gXCIvZmVlZC9idXlcIixcclxuICAgIC8qKiBcdTRFRkJcdTUyQTFcdTU5NTZcdTUyQjFcdTk4ODZcdTUzRDYgKi9cclxuICAgIHRhc2tSZXdhcmQgPSBcIi90YXNrL3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1OTBCQlx1NUM0NSAqL1xyXG4gICAgbmVpZ2hib3IgPSBcIi9uZWlnaGJvclwiLFxyXG4gICAgLyoqIFx1NTA3N1x1ODNEQyAqL1xyXG4gICAgbGFuZFN0ZWFsID0gXCIvbGFuZC9zdGVhbFwiLFxyXG4gICAgLyoqIFx1NTM1NVx1NzJFQ1x1NjdFNVx1NzcwQlx1NUU3Rlx1NTQ0QSAqL1xyXG4gICAgYWQgPSBcIi9hZFwiLFxyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NEY1M1x1NTI5Qlx1OEQyRFx1NEU3MCAqL1xyXG4gICAgdml0YWxpdHlCdXkgPSBcIi92aXRhbGl0eS9idXlcIixcclxuICAgIC8qKiBcdTU2REVcdTgxRUFcdTVERjFcdTVCQjYgKi9cclxuICAgIGdvSG9tZSA9IFwiL2dvSG9tZVwiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1NTIyMFx1OTY2NCAqL1xyXG4gICAgZnJpZW5kRGVsZXRlID0gXCIvZnJpZW5kL2RlbGV0ZVwiLFxyXG4gICAgLyoqIFx1OTAxQVx1OEZDN1x1NTk3RFx1NTNDQlx1NzUzM1x1OEJGNyAqL1xyXG4gICAgZnJpZW5kQWxsb3cgPSBcIi9mcmllbmQvYWxsb3dcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTc1MzNcdThCRjcgKi9cclxuICAgIGZyaWVuZEFwcGx5ID0gXCIvZnJpZW5kL2FwcGx5XCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU2NDFDXHU3RDIyICovXHJcbiAgICBmcmllbmRTZWFyY2ggPSBcIi9mcmllbmQvc2VhcmNoXCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU1MjE3XHU4ODY4ICovXHJcbiAgICBmcmllbmRMaXN0ID0gXCIvZnJpZW5kL2xpc3RcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTkwODBcdThCRjdcdTgwMDVcdTdFRDFcdTVCOUEgKi9cclxuICAgIGZyaWVuZEludml0ZVBlb3BsZSA9IFwiL2ZyaWVuZC9pbnZpdGUvcGVvcGxlXCIsXHJcbiAgICAvKiogXHU5MDgwXHU4QkY3XHU3Njg0XHU1OTdEXHU1M0NCXHU1MjE3XHU4ODY4ICovXHJcbiAgICBmcmllbmRJbnZpdGVMaXN0ID0gXCIvZnJpZW5kL2ludml0ZS9saXN0XCIsXHJcbiAgICAvKiogXHU5MDgwXHU4QkY3XHU3Njg0XHU1OTdEXHU1M0NCXHU1OTU2XHU1MkIxXHVGRjBDXHU5ODg2XHU1M0Q2ICovXHJcbiAgICBmcmllbmRJbnZpdGVSZWNlaXZlID0gXCIvZnJpZW5kL2ludml0ZS9yZWNlaXZlXCIsXHJcbiAgICAvKiogXHU4QkJGXHU5NUVFXHU1OTdEXHU1M0NCXHU1QkI2XHU5MUNDICovXHJcbiAgICBmcmllbmRWaXNpdCA9IFwiL2ZyaWVuZC92aXNpdFwiLFxyXG59XHJcbiIsICJpbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBQZXRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZVwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM0Rlx1OEJBRVx1NjU3MFx1NjM2RVx1NTkwNFx1NzQwNlxyXG4gKi9cclxuY2xhc3MgSHR0cERhdGFDb250cm9sIHtcclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdThGNkNcdTUzRDEgKi9cclxuICAgIGZvcndhcmQoZDoge1xyXG4gICAgICAgIGFwaTogQXBpSHR0cDtcclxuICAgICAgICBkYXRhOiBhbnk7XHJcbiAgICAgICAgY2FsbD86IEZ1bmN0aW9uO1xyXG4gICAgICAgIHJlc29sdmVFdmVudD86IEZ1bmN0aW9uO1xyXG4gICAgICAgIGVycm9yPzogRnVuY3Rpb247XHJcbiAgICB9KSB7XHJcbiAgICAgICAgc3dpdGNoIChkLmFwaSkge1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubG9naW46XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sb2dpblRva2VuOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbihkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kU3BlZWRVcDpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAuYWQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRHYXRoZXI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmZlZWRCdXk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwNik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRTb3c6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwNyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLndhcmVob3VzZVNlbGw6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwOCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5zZWVkc1VubG9jazpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kU293OlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRVbmxvY2s6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAucGV0QnV5OlxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAudml0YWxpdHlCdXk6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAudGFza1Jld2FyZDpcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRVcGdyYWRlOlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLm9yZGVyUmV3YXJkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkLnJlc29sdmVFdmVudCkgZC5yZXNvbHZlRXZlbnQoZC5kYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKGQuY2FsbCkge1xyXG4gICAgICAgICAgICBkLmNhbGwoZC5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChkLmFwaSwgZC5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihlcnJvckNvZGU6IG51bWJlciwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgLy8gdGV4dDogYGVycm9yQ29kZSAke2Vycm9yQ29kZX0gJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gLFxyXG4gICAgICAgICAgICB0ZXh0OiBgJHtkYXRhPy5tZXNzYWdlfWAsXHJcbiAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NjdCXHU1RjU1XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsb2dpbihkOiBOZXRJbml0KSB7XHJcbiAgICAgICAgaWYgKCFkKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU3NjdCXHU1RjU1XHU5NTE5XHU4QkVGLFx1OEJGN1x1OTFDRFx1OEJENVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQbGFudFNlcnZpY2UuaW5pdChkLnNlZWRzKTtcclxuICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmluaXQoZC53YXJlaG91c2UpO1xyXG4gICAgICAgIFVzZXJJbmZvLmtleSA9IGQudXNlckluZm8ua2V5O1xyXG4gICAgICAgIFVzZXJJbmZvLmRpYW1vbmQgPSBkLnVzZXJJbmZvLmRpYW1vbmQ7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IGQudXNlckluZm8uZ29sZDtcclxuICAgICAgICBVc2VySW5mby5uaWNrbmFtZSA9IGQudXNlckluZm8ubmlja25hbWU7XHJcbiAgICAgICAgVXNlckluZm8uYXZhdGFyID0gZC51c2VySW5mby5hdmF0YXI7XHJcbiAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCA9IGQub3JkZXJJZCB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLndhcmVQZXRJZCA9IGQud2VhclBldD8uaWQ7XHJcbiAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgPSBkLndlYXJQZXQ/LnZpdGFsaXR5IHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gZC53ZWFyUGV0Py5kaWdlc3RDb3VudERvd24gfHwgMDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IGQuYWR2ZXJ0aXNlVGltZXMgfHwgMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5EYXlzID0gZC5zaWduSW5EYXlzIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBkLnNpZ25JbklkO1xyXG4gICAgICAgIFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9IGQuc3BlZWRVcFRpbWVzO1xyXG4gICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gZC51c2VySW5mby52aXRhbGl0eTtcclxuICAgICAgICBQZXRTZXJ2aWNlLmluaXQoZC5wZXRzKTtcclxuICAgICAgICBUYXNrU2VydmljZS5pbml0KGQudGFza3MpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGQudG9rZW4pIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInRva2VuXCIsIGQudG9rZW4pO1xyXG4gICAgICAgIExhbmRTZXJ2aWNlLmluaXQoZC5sYW5kcyk7XHJcblxyXG4gICAgICAgIENvcmUuYXVkaW8uc291bmRNdXRlZCA9IExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnNvdW5kO1xyXG4gICAgICAgIENvcmUuYXVkaW8ubXVzaWNNdXRlZCA9IExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLm11c2ljO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luT3V0KCkge1xyXG4gICAgICAgIFBsYW50U2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBQZXRTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgTGFuZFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBUYXNrU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgZmFsc2UpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInRva2VuXCIsIG51bGwpO1xyXG4gICAgICAgIFVzZXJJbmZvLmtleSA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8ubmlja25hbWUgPSBcIlwiO1xyXG4gICAgICAgIFVzZXJJbmZvLmF2YXRhciA9IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8ud2FyZVBldElkID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gMDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8udml0YWxpdHkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5RUQ4XHU4QkE0XHU3NTI4XHU2NzY1XHU2NkY0XHU2NUIwXHU3NTI4XHU2MjM3XHU5MUQxXHU1RTAxXHU3QjQ5XHJcbiAgICAgKiBAcGFyYW0gZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVVzZXJJbmZvKGQ6IFJldHVyblVzZXJJbmZvKSB7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IGQuZ29sZDtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC5kaWFtb25kO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcyB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExXHU4RkRCXHU1RUE2XHJcbiAgICAgKiBAcGFyYW0gaWQgXHU0RUZCXHU1MkExaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB0YXNrVXBkYXRlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSHR0cERhdGFDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCJzcmMvY29yZS9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcIi4vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcIi4vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwRGF0YUNvbnRyb2wgZnJvbSBcIi4vSHR0cERhdGFDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwiLi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vUmVzXCI7XHJcblxyXG5pbnRlcmZhY2UgSHR0cFNlbmREYXRhIHtcclxuICAgIGFwaTogQXBpSHR0cDtcclxuICAgIGRhdGE/OiBhbnk7XHJcbiAgICBtZXRob2Q/OiBzdHJpbmc7XHJcbiAgICByZXNwb25zZVR5cGU/OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzPzogYW55W10gfCBudWxsO1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1OTUxOVx1OEJFRlx1NTZERVx1OEMwMyAqL1xyXG4gICAgZXJyb3I/OiB7IChjb2RlOiBudW1iZXIsIGRhdGE6IGFueSk6IHZvaWQgfTtcclxuICAgIGJhc2VVcmw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTc3RURcdTk0RkVcdTYzQTVcdTYzQTdcdTUyMzZcdTU2NjhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBDb250cm9sIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IEh0dHBDb250cm9sO1xyXG5cclxuICAgIHhocjogWE1MSHR0cFJlcXVlc3Q7XHJcblxyXG4gICAgYmFzZVVybDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNlbmREYXRhOiBIdHRwU2VuZERhdGE7XHJcblxyXG4gICAgcHJpdmF0ZSBiYWNrUmVzb2x2ZUV2ZW50OiBGdW5jdGlvbjtcclxuXHJcbiAgICBpbml0KHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gdXJsO1xyXG4gICAgICAgIGlmICh0aGlzLnhocikgcmV0dXJuO1xyXG4gICAgICAgIC8vIGxldCB4aHIgPSBuZXcgTGF5YS5IdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnhoci5odHRwLnRpbWVvdXQgPSAxMDAwMDsgLy9cdThEODVcdTY1RjZcdTY1RjZcdTk1RjRcclxuICAgICAgICAvLyB4aHIub24oTGF5YS5FdmVudC5DT01QTEVURSwgdGhpcywgdGhpcy5jb21wbGV0ZUhhbmRsZXIpO1xyXG4gICAgICAgIC8vIHhoci5vbihMYXlhLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLmVycm9ySGFuZGxlcik7XHJcbiAgICAgICAgLy8geGhyLm9uKExheWEuRXZlbnQuUFJPR1JFU1MsIHRoaXMsIHRoaXMucHJvY2Vzc0hhbmRsZXIpO1xyXG4gICAgICAgIC8vIHhoci5zZW5kKFwicmVzL2RhdGEuZGF0YVwiLCBcIlwiLCBcImdldFwiLCBcInRleHRcIik7XHJcblxyXG4gICAgICAgIGxldCB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoeG1saHR0cC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeG1saHR0cC5yZXNwb25zZVRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7eG1saHR0cC5yZXNwb25zZVRleHR9IFx1OEJGN1x1OTFDRFx1OEJENWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlSGFuZGxlcihkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF4bWxodHRwLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IDQwNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6IFwiXHU2NzBEXHU1MkExXHU1NjY4XHU2NzJBXHU1NENEXHU1RTk0XHVGRjBDXHU4QkY3XHU5MUNEXHU4QkQ1XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMueGhyID0geG1saHR0cDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZW5kKGRhdGE6IEh0dHBTZW5kRGF0YSkge1xyXG4gICAgICAgIGlmICghZGF0YS5tZXRob2QpIGRhdGEubWV0aG9kID0gXCJwb3N0XCI7XHJcbiAgICAgICAgaWYgKCFkYXRhLnJlc3BvbnNlVHlwZSkgZGF0YS5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcclxuICAgICAgICBpZiAoIWRhdGEuYmFzZVVybCkgZGF0YS5iYXNlVXJsID0gdGhpcy5iYXNlVXJsO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmREYXRhID0gZGF0YTtcclxuXHJcbiAgICAgICAgLy8gaWYgKCFkYXRhLmRhdGE/LnVzZXJJZCkge1xyXG4gICAgICAgIC8vICAgICBkYXRhLmRhdGEudXNlcklkID0gVXNlckluZm8udWlkO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgZGF0YS5oZWFkZXJzID0gW1wiQXV0aG9yaXphdGlvblwiLCBgQmVhcmVyICR7TG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkudG9rZW59YF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYCVjID09PiBzZW5kICVjJHtkYXRhLmFwaX0gJWMke0pTT04uc3RyaW5naWZ5KGRhdGEuZGF0YSl9YCxcclxuICAgICAgICAgICAgYGNvbG9yOiM4MmNjZGQ7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2Y4YzI5MTtmb250LXdlaWdodDo3MDA7YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMueGhyLnNlbmQoXHJcbiAgICAgICAgLy8gICAgIGRhdGEuYmFzZVVybCArIGRhdGEuYXBpLFxyXG4gICAgICAgIC8vICAgICBkYXRhLmRhdGEsXHJcbiAgICAgICAgLy8gICAgIGRhdGEubWV0aG9kLFxyXG4gICAgICAgIC8vICAgICBkYXRhLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAvLyAgICAgZGF0YS5oZWFkZXJzXHJcbiAgICAgICAgLy8gKTtcclxuXHJcbiAgICAgICAgbGV0IHVyaSA9IGRhdGEuYmFzZVVybCArIGRhdGEuYXBpO1xyXG4gICAgICAgIGlmICghZGF0YS5hcGkpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkhpbnRWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7IHRleHQ6IGBodHRwIFx1NTczMFx1NTc0MFx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QWAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMueGhyLm9wZW4oXCJQT1NUXCIsIHVyaSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy54aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAvLyB0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICB0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBgQmVhcmVyICR7TG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkudG9rZW59YCk7XHJcblxyXG4gICAgICAgIGxldCBzZW5kRGF0YTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEuZGF0YSkuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VuZERhdGEucHVzaChgJHtkfT0ke2RhdGEuZGF0YVtkXX1gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGE/LnR5cGUgPT0gQ29uZmlnR2FtZS5BcGlUeXBlQUQpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDAxKTtcclxuICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDEyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy54aHIuc2VuZChzZW5kRGF0YS5qb2luKFwiJlwiKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tSZXNvbHZlRXZlbnQgPSByZXNvbHZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAoZS5jb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbmREYXRhPy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kRGF0YS5lcnJvcihlLmNvZGUsIGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgSHR0cERhdGFDb250cm9sLmVycm9yKGUuY29kZSwgZS5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBgJWMgPD09IGJhY2sgJWMke3RoaXMuc2VuZERhdGEuYXBpfSBgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiNiOGU5OTQ7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6Izc4ZTA4Zjtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGUuZGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBIdHRwRGF0YUNvbnRyb2wuZm9yd2FyZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IHRoaXMuc2VuZERhdGEuYXBpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgY2FsbDogdGhpcy5zZW5kRGF0YT8uY2FsbCxcclxuICAgICAgICAgICAgICAgIHJlc29sdmVFdmVudDogdGhpcy5iYWNrUmVzb2x2ZUV2ZW50LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHByb2Nlc3NIYW5kbGVyKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy8gIEFkZExhbmRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRMYW5kVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvc3RJY29uLCB0aXBzOlwiXHU0RUY3XHU2ODNDXHU1NkZFXHU2ODA3XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjb3N0SWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29zdEZvbnQsIHRpcHM6XCJcdTRFRjdcdTY4M0NGb250XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjb3N0Rm9udDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7IGlkOiBudW1iZXI7IGNhbGw6IEZ1bmN0aW9uIH07XHJcblxyXG4gICAgcHJpdmF0ZSBsYW5kRGF0YTogUmV3YXJkQ3VycmVuY3lCYXNlO1xyXG5cclxuICAgIG9uT3BlbmVkKGQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmREYXRhID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcInVubG9ja19sYW5kX2Nvc3RcIikudmFsdWVbXHJcbiAgICAgICAgICAgIExhbmRTZXJ2aWNlLmxpc3Quc2l6ZVxyXG4gICAgICAgIF0gYXMgUmV3YXJkQ3VycmVuY3lCYXNlO1xyXG4gICAgICAgIHRoaXMuY29zdEljb24uc2tpbiA9IHRoaXMubGFuZERhdGEub2JqLmljb247XHJcbiAgICAgICAgdGhpcy5jb3N0Rm9udC52YWx1ZSA9IHRoaXMubGFuZERhdGEuY291bnQgKyBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWRkTGFuZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb3N0X2dvbGRcIjpcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmREYXRhLm9iai5pZCA9PSBDb25maWdHYW1lLmdvbGRJZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEuY291bnQgPiBVc2VySW5mby5nb2xkXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTFEMVx1NUUwMVx1NEUwRFx1OERCM1wiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5vYmouaWQgPT0gQ29uZmlnR2FtZS5kaWFtb25kSWQgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmREYXRhLmNvdW50ID4gVXNlckluZm8uZGlhbW9uZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTk0QkJcdTc3RjNcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFVubG9jayxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWRkTGFuZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZF9idG5cIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRVbmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy8gIEJ1eVZpdGFsaXR5VmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV5Vml0YWxpdHlWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMYWJlbCwgdGlwczpcIlx1NEVGN1x1NjgzQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMYWJlbDogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VJY29uLCB0aXBzOlwiXHU0RUY3XHU2ODNDaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgY2FsbDogRnVuY3Rpb24gfTtcclxuICAgIHByaXZhdGUgY29zdEdvbGRDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIG9uT3BlbmVkKGU6IHsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgbGV0IGNvc3RHb2xkQ291bnQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwidml0YWxpdHlCdXlDb3N0R29sZFwiKS52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgdGhpcy5jb3N0R29sZENvdW50ID0gY29zdEdvbGRDb3VudDtcclxuICAgICAgICB0aGlzLnByaWNlTGFiZWwudGV4dCA9IGBcdTRFRjdcdTY4M0NcdUZGMUEke2Nvc3RHb2xkQ291bnR9YDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkJ1eVZpdGFsaXR5Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ1eUFkQnRuXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJidXlCdG5cIjpcclxuICAgICAgICAgICAgICAgIGlmIChVc2VySW5mby52aXRhbGl0eSA+PSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwidml0YWxpdHlMaW1pdFwiKS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU0RjUzXHU1MjlCXHU1REYyXHU2RUUxXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwiYnV5QnRuXCIgJiYgVXNlckluZm8uZ29sZCA8IHRoaXMuY29zdEdvbGRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5MUQxXHU1RTAxXHU0RTBEXHU4REIzXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC52aXRhbGl0eUJ1eSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwiYnV5QnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IHsgZ29sZDogMDsgZGlhbW9uZDogMDsgYWR2ZXJ0aXNlVGltZXM6IDA7IHZpdGFsaXR5OiAwIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8udml0YWxpdHkgPSBkLnZpdGFsaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcblxyXG4vLyAgRmllbGRMZXZlbFVwVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRMZXZlbFVwVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlTGFiZWwsIHRpcHM6XCJcdTRFRjdcdTY4M0NcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlTGFiZWw6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlSWNvbiwgdGlwczpcIlx1NEVGN1x1NjgzQ2ljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7IG9iajogTGFuZE9iajsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBvbk9wZW5lZChlOiB7IG9iajogTGFuZE9iajsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgbGV0IG5leHRMYW5kID0gVGFibGVBbmFseXplLnRhYmxlKFwibGFuZExldmVsXCIpLmdldChlLm9iai5sZXZlbCArIDEpO1xyXG4gICAgICAgIHRoaXMucHJpY2VMYWJlbC50ZXh0ID0gYFx1NEVGN1x1NjgzQ1x1RkYxQSR7bmV4dExhbmQuY29zdC5jb3VudH1gO1xyXG4gICAgICAgIHRoaXMucHJpY2VJY29uLnNraW4gPSBuZXh0TGFuZC5jb3N0Lm9iai5pY29uO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVwZ3JhZGVCdG5cIjpcclxuICAgICAgICAgICAgY2FzZSBcInVwZ3JhZGVBZEJ0blwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFVwZ3JhZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJnYXRoZXJcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5vYmouaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwidXBncmFkZUJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBDb25maWdHYW1lLkFwaVR5cGVBRCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiBSZXR1cm5Vc2VySW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PSBcInVwZ3JhZGVBZEJ0blwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNEZXNjVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc0Rlc2NWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwYW5lbE5vZGUsIHRpcHM6XCJcdTZFREFcdTUyQThcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgcGFuZWxOb2RlOiBMYXlhLlBhbmVsO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsTm9kZS52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCkge1xyXG4gICAgICAgIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgQXBwRXZlbnRNYXAgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1Jld2FyZFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNSZXdhcmRWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppbnRUeXBlLCB0aXBzOlwiXHU2NTc0XHU2NTcwXHU3QzdCXHU1NzhCXHU3OTNBXHU0RjhCXCIsIHR5cGU6SW50LCBkZWZhdWx0OjEwMDB9Ki9cclxuICAgIHB1YmxpYyBpbnRUeXBlOiBudW1iZXIgPSAxMDAwO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge31cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNSZXdhcmRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaW52aXRlX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC53eFNoYXJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCkge1xyXG4gICAgICAgIC8vIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRCb3gsIHRpcHM6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0JcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZEJveDogTGF5YS5Cb3g7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTUyMTdcdTg4NjhcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3Q7XHJcbiAgICAvKiogQHByb3Age25hbWU6dXNlcktleSwgdGlwczpcIlx1NzUyOFx1NjIzN1x1NTNDQlx1NjBDNVx1NzgwMVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdXNlcktleTogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTprZXlJbnB1dE5vZGUsIHRpcHM6XCJcdTkwODBcdThCRjdcdTc4MDFcdThGOTNcdTUxNjVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGtleUlucHV0Tm9kZTogTGF5YS5UZXh0SW5wdXQ7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkRnJpZW5kLCB0aXBzOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRGcmllbmQ6IExheWEuSW1hZ2U7XHJcblxyXG4gICAgLyoqIDFcdTY2MkZcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggMiBcdTUyQTBcdTU5N0RcdTUzQ0IgIDNcdTUyMjBcdTk2NjRcdTU5N0RcdTUzQ0IgKi9cclxuICAgIHByaXZhdGUgdmlld1N0YXRlOiAxIHwgMiB8IDMgPSAxO1xyXG5cclxuICAgIHByaXZhdGUgZnJpZW5kczogRnJpZW5kRGF0YVtdID0gW107XHJcbiAgICBwcml2YXRlIGZyaWVuZHNMaXN0OiBGcmllbmREYXRhW10gPSBbXTtcclxuXHJcbiAgICBvbk9wZW5lZChkOiBGcmllbmRMaXN0RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZnJpZW5kcyA9IGQubGlzdDtcclxuICAgICAgICB0aGlzLmZyaWVuZHNMaXN0ID0gdGhpcy5mcmllbmRzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdERhdGEoKTtcclxuICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZnJpZW5kc0xpc3Q7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLml0ZW1SZW5kZXIpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudXNlcktleS50ZXh0ID0gYFx1NjIxMVx1NzY4NFx1NTNDQlx1NjBDNVx1NzgwMVx1RkYxQSR7VXNlckluZm8ua2V5fWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaXN0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLmZyaWVuZHNMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGIuYXBwbHlJbmcgKiAxMDAwMDAgLSBhLmFwcGx5SW5nICogMTAwMDAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXRlbVJlbmRlcihjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZnJpZW5kc0xpc3RbaV07XHJcblxyXG4gICAgICAgIGxldCBuZXdCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwibmV3X2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgaGVhcnRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiaGVhcnRfYm94XCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGdvUGxheUJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJnb19wbGF5X2J0blwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBhcHBseUJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJhcHBseV9idG5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgZGVsQnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImRlbF9idG5cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBoZWFydEJveC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgYXBwbHlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGRlbEJ0bi52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmF2YXRhcikgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoZWFkXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkYXRhLmF2YXRhcjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGRhdGEubmlja25hbWU7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJsdlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gKGRhdGEub3JkZXJMZXZlbCB8fCAwKSArIFwiXCI7XHJcbiAgICAgICAgKGhlYXJ0Qm94LmdldENoaWxkQnlOYW1lKFwidmFsXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSAoZGF0YS5pbnRpbWFjeSB8fCAwKSArIFwiXCI7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRfYm94XCIpLmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9XHJcbiAgICAgICAgICAgIGRhdGEuZ2FpbkRpYW1vbmQgKyBcIlwiO1xyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImRlbF9idG5cIikgYXMgTGF5YS5JbWFnZSkuZGF0YVNvdXJjZSA9IGRhdGE7XHJcbiAgICAgICAgZ29QbGF5QnRuLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMudmlld1N0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGFwcGx5QnRuLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgYXBwbHlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBuZXdCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGVsQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMSB8fCB0aGlzLnZpZXdTdGF0ZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIC8vXHU3NTMzXHU4QkY3IFx1NEUyRFxyXG4gICAgICAgICAgICBpZiAoZGF0YS5hcHBseUluZykge1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAobmV3Qm94LmdldENoaWxkQnlOYW1lKFwicGFzdF9idG5cIikgYXMgTGF5YS5JbWFnZSkuZGF0YVNvdXJjZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9cdTVERjJcdTdFQ0ZcdTY2MkZcdTU5N0RcdTUzQ0JcclxuICAgICAgICAgICAgICAgIG5ld0JveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBuZXdCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZF9mcmllbmRcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpZXdTdGF0ZSA9PSAzIHx8IHRoaXMudmlld1N0YXRlID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZnJpZW5kcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDkxNDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEZyaWVuZC5za2luID0gYGdhbWUvaW1nX2FkZEJ0bi5wbmdgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQm94LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuaGVpZ2h0ID0gNTkwOyAvLzkxNFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRnJpZW5kLnNraW4gPSBgZ2FtZS9pbWdfZnJpZW5kQnRuLnBuZ2A7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYGdhbWUvaW1nX2hhbmdvdXQucG5nYFxyXG4gICAgICAgICAgICAgICAgLy8gaW1nX2ZyaWVuZEJ0blxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWxfZnJpZW5kXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMykgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlID0gMztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDkxNDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGcmllbmQuc2tpbiA9IGBnYW1lL2ltZ19mcmllbmRCdG4ucG5nYDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVzY19idG5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZXdhcmRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc1Jld2FyZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb3B5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlYXJjaF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFwcGx5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUV2ZW50KGUudGFyZ2V0IGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBhc3RfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93RnJpZW5kKGUudGFyZ2V0IGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlbF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJpZW5kKGUudGFyZ2V0IGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX3BsYXlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2l0RnJpZW5kKGUudGFyZ2V0IGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRlx1OTVFRVx1NTk3RFx1NTNDQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHZpc2l0RnJpZW5kKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyh0cnVlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFTb3VyY2UgYXMgRnJpZW5kRGF0YTtcclxuXHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kVmlzaXQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJpZW5kSWQ6IGRhdGEudWlkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhbGw6IChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMuZ29fZnJpZW5kX2hvbWUsIGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgzMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjIwXHU5NjY0XHU1OTdEXHU1M0NCXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGVsZXRlRnJpZW5kKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiXHU3ODZFXHU4QkE0XHU4OTgxXHU1MjIwXHU5NjY0XHU1OTdEXHU1M0NCXHU1NDE3XHVGRjFGXCIsXHJcbiAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFTb3VyY2UgYXMgRnJpZW5kRGF0YTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZERlbGV0ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5mcmllbmRzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmllbmRzW3hdLnVpZCA9PSBkYXRhLnVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kcy5zcGxpY2UoeCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWxDYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NTk3RFx1NTNDQlx1NzUzM1x1OEJGN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFsbG93RnJpZW5kKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFTb3VyY2UgYXMgRnJpZW5kRGF0YTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kQWxsb3csXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbDogKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYXBwbHlJbmcgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc1MzNcdThCRjdcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0JcclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhcHBseUV2ZW50KHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFTb3VyY2UgYXMgRnJpZW5kRGF0YTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kQXBwbHksXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbDogKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NURGMlx1NTNEMVx1OTAwMVx1NkZDMFx1NjBDNVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjQxQ1x1N0QyMlx1NTk3RFx1NTNDQlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZWFyY2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleUlucHV0Tm9kZS50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NTNDQlx1NjBDNVx1NzgwMVx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5rZXlJbnB1dE5vZGUudGV4dCA9PSBVc2VySW5mby5rZXkpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTY0MUNcdTdEMjJcdTgxRUFcdTVERjFcdTVFNzJcdTU1NjVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRTZWFyY2gsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGtleTogdGhpcy5rZXlJbnB1dE5vZGUudGV4dCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbDogKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSBbZF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29weSgpIHtcclxuICAgICAgICBsZXQgYTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgIGEudmFsdWUgPSBVc2VySW5mby5rZXk7XHJcbiAgICAgICAgYS5zZWxlY3QoKTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAgICAgYS5yZW1vdmUoKTtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NTkwRFx1NTIzNlx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhpbnRWaWV3RGF0YSB7XHJcbiAgICAvKiogXHU2NTg3XHU1QjU3XHU1MTg1XHU1QkI5ICovXHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICAvKiogXHU3ODZFXHU4QkE0XHU1NkRFXHU4QzAzICovXHJcbiAgICBjYWxsPzogRnVuY3Rpb247XHJcbiAgICAvKiogXHU1M0Q2XHU2RDg4XHU1NkRFXHU4QzAzICovXHJcbiAgICBjYW5jZWxDYWxsPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBIaW50VmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpbnRWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0ZXh0LCB0aXBzOlwiXHU1MTg1XHU1QkI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvbmZpcm1CdG4sIHRpcHM6XCJcdTc4NkVcdThCQTRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNvbmZpcm1CdG46IExheWEuSW1hZ2U7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y2FuY2VsQnRuLCB0aXBzOlwiXHU1M0Q2XHU2RDg4XHU2MzA5XHU5NEFFXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjYW5jZWxCdG46IExheWEuSW1hZ2U7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhOiBIaW50Vmlld0RhdGE7XHJcblxyXG4gICAgb25PcGVuZWQoZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XHJcbiAgICAgICAgdGhpcy50ZXh0LnRleHQgPSB0aGlzLmRhdGE/LnRleHQgfHwgXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNhbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FuY2VsQ2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbEJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbEJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNhbGwgJiYgdGhpcy5kYXRhLmNhbmNlbENhbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtQnRuLnggPSAyNTI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtQnRuLnggPSA0NTg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2FuY2VsXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYW5jZWxDYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbmNlbENhbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuSGludFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb25maXJtXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuSGludFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5WaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9hZEJhciwgdGlwczpcImxvYWQgYmFyXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb2FkQmFyOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2FkQm94LCB0aXBzOlwiXHU1MkEwXHU4RjdEXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb2FkQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9naW5Cb3gsIHRpcHM6XCJcdTc2N0JcdTk2NDZcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvZ2luQm94OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OEZEQlx1NUVBNlx1Njc2MVx1OUVEOFx1OEJBNFx1NUJCRFx1NUVBNiAqL1xyXG4gICAgcHJpdmF0ZSBsb2FkQmFyT2xkV2lkdGg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7IGNhbGw6IEZ1bmN0aW9uIH07XHJcblxyXG4gICAgb25PcGVuZWQoZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XHJcblxyXG4gICAgICAgIGlmIChMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKT8uaXNMb2dpbikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub24oRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIHRoaXMsIHRoaXMubG9hZFByb2dyZXNzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImF3YWtlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRFbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sb2FkTGFiZWwpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmxvYWRMYWJlbC50ZXh0ID0gXCJMb2FkLi4uLjAlXCI7XHJcbiAgICAgICAgdGhpcy5sb2FkQmFyT2xkV2lkdGggPSB0aGlzLmxvYWRCYXIud2lkdGg7XHJcbiAgICAgICAgdGhpcy5sb2FkQmFyLndpZHRoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImxvZ2luX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGVzdF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgbG9naW4oaXNXeDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbikge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxvZ2luVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoZDogTmV0SW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHRoaXMuZGF0YS5jYWxsKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKGNvZGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzV3gpO1xyXG4gICAgICAgICAgICBsZXQgdGVzdEsgPSBsb2NhdGlvbi5zZWFyY2gubWF0Y2goL1xcP2lkPSguKykvKSxcclxuICAgICAgICAgICAgICAgIHRlc3RLZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0ZXN0SyAmJiB0ZXN0Sy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0S2UgPSB0ZXN0S1sxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgd3hPcGVuSWQgPSB0ZXN0S2UsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA9IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXIgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoaXNXeCAmJiAhd3hPcGVuSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnd4TG9naW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3hPcGVuSWQgPSBkYXRhLmRhdGFbXCJvcGVuaWRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyID0gZGF0YS5kYXRhW1wiaWNvbnVybFwiXTtcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZSA9IGRhdGEuZGF0YVtcIm5hbWVcIl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF3eE9wZW5JZCkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTY3MkFcdTgzQjdcdTUzRDZcdTUyMzBcdTVGQUVcdTRGRTFpZFwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sb2dpbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wibG9naW5cIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFjY291bnQ6IGlzV3ggPyBudWxsIDogdGhpcy51c2VySW5wdXQudGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB3eElkOiB3eE9wZW5JZCxcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IGF2YXRhcixcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FsbDogKGQ6IE5ldEluaXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB0aGlzLmRhdGEuY2FsbChkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAud3hMb2dpblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoY29kZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFByb2dyZXNzKHYpIHtcclxuICAgICAgICB0aGlzLmxvYWRCYXIud2lkdGggPSB2ICogdGhpcy5sb2FkQmFyT2xkV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgTWFpbFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5NYWlsVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlLCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYW50RGF0YUJhc2UgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwic3JjL3ZpZXcvTWFpblZpZXdcIjtcclxuaW1wb3J0IHsgU2hvcFZpZXdEYXRhIH0gZnJvbSBcInNyYy92aWV3L1Nob3BWaWV3XCI7XHJcblxyXG4vLyAgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbi8qKlxyXG4gKiBcdTc1MzBcdTU3MzBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlpY29uICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1ODI4Mlx1NzBCOSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBmaWVsZE5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NjcwOVx1NjkwRFx1NzI2OVx1NjVGNlx1NzY4NFx1OTYzNFx1NUY3MSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBzaGFkb3c6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZWxkRW1wdHlSZXMsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTU0MEVcdTU3MUZcdTU3MzBcdTdFQjlcdTc0MDZcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBmaWVsZEVtcHR5UmVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIFx1N0I0OVx1N0VBN1x1NTZGRVx1NzI0NyAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBsdk5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTAxMlx1OEJBMVx1NjVGNlx1NUJCOVx1NTY2OCovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHRpbWVCb3g6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIFx1NTAxMlx1OEJBMVx1NjVGNmxhYmVsICovXHJcbiAgICBwcml2YXRlIGNvdW50RG93bkxiOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU4OEM1XHU5OTcwICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHRvcFN0YXRlSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU2MjEwXHU3MTlGXHU1M0VGXHU2NTM2aWNvbiAqL1xyXG4gICAgcHJpdmF0ZSBtYXR1cmVOb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTUzRUZcdTY0QURcdTc5Q0RcdTdBN0FcdTU3MzBpY29uICovXHJcbiAgICBwcml2YXRlIGVtcHR5RmllbGROb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1bmxvY2tJY29uLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwaWNvblx1NTczMFx1NTc0MFwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIHVubG9ja0ljb246IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmllbGRJZCwgdGlwczpcIlx1NTcxRlx1NTczMGlkXCIsIHR5cGU6TnVtYmVyLH0qL1xyXG4gICAgZmllbGRJZDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1NkQ2RVx1NTJBOFx1NTJBOFx1NzUzQiAqL1xyXG4gICAgcHJpdmF0ZSB0b3BTdGF0ZUljb25Ud2VlbjogTGF5YS5UaW1lTGluZTtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlcdTUyQThcdTc1M0IgKi9cclxuICAgIHByaXZhdGUgcGxhbnRJY29uVHdlZW46IExheWEuVGltZUxpbmU7XHJcblxyXG4gICAgLyoqIFx1NUVGQVx1N0I1MVx1NEUyRCAqL1xyXG4gICAgYnVpbGRJbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTU3MjhcdTU5MTZcdTk3NjIgKi9cclxuICAgIGlzT3V0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTUzRUZcdTUwNzcgKi9cclxuICAgIGNhblN0ZWFsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU4OEFCXHU1MDc3XHU0RUJBXHU3Njg0dWlkICovXHJcbiAgICBzdGVhbFVpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZGF0YTogTGFuZE9iajtcclxuXHJcbiAgICBwcml2YXRlIGxhbmRMaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPjtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZE5vZGUgPSA8TGF5YS5JbWFnZT50aGlzLm93bmVyO1xyXG4gICAgICAgIHRoaXMuY291bnREb3duTGIgPSB0aGlzLnRpbWVCb3guZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudERvd25MYlwiKSBhcyBhbnk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmljb24uc2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfZmllbGQpXHJcbiAgICB1cGRhdGVEYXRhKGRhdGE/OiB7IGxpc3Q6IE1hcDxudW1iZXIsIExhbmRPYmo+IH0pIHtcclxuICAgICAgICBpZiAoZGF0YT8ubGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0ID0gZGF0YS5saXN0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QgPSBMYW5kU2VydmljZS5saXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5maWVsZE5vZGUuc2tpbiA9IHRoaXMuZmllbGRFbXB0eVJlcztcclxuICAgICAgICAgICAgdGhpcy5zaG93SWNvbihCb29sZWFuKHRoaXMuZGF0YS5wcm9kdWN0SWQpKTtcclxuICAgICAgICAgICAgdGhpcy5sdk5vZGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGV2ZWwoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW50SWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9kdWN0SWQgJiYgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy9cdTYyMTBcdTk1N0ZcdTRFMkRcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YS5wcm9kdWN0SWQpLmdyb3dpbmdJY29uO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfd2FzdGVsYW5kLnBuZ2A7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gdGhpcy51bmxvY2tJY29uO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4uY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5wbGFudEljb25Ud2VlbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFaWNvblx1NzY4NFx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dJY29uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmljb24udmlzaWJsZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTcyQjZcdTYwMDFpY29uXHU3RUI5XHU3NDA2XHJcbiAgICAgKiBAcGFyYW0gc2tpblR5cGUgMSBcdTZENDdcdTZDMzRcdTUyQTBcdTkwMUZcdTcyQjZcdTYwMDEgMiBcdTVFRkFcdTdCNTFcdTcyQjZcdTYwMDEgMyBcdTYyMTBcdTcxOUZcdTcyQjZcdTYwMDFcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGVJY29uU2tpbihza2luVHlwZTogMSB8IDIgfCAzKSB7XHJcbiAgICAgICAgc3dpdGNoIChza2luVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19zcGVlZFVwLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2xhbmRVcGRhdGVCdG4yLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2hhcnZlc3QucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk4NzZcdTkwRThpY29uXHU1MkE4XHU3NTNCXHJcbiAgICAgKi9cclxuICAgIHRvcFN0YXRlSWNvbkFuaShwbGF5OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24ueSA9IC0xMDc7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRvcFN0YXRlSWNvblR3ZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4gPSBMYXlhLlRpbWVMaW5lLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24sXHJcbiAgICAgICAgICAgICAgICB7IHk6IHRoaXMudG9wU3RhdGVJY29uLnkgLSA1MCB9LFxyXG4gICAgICAgICAgICAgICAgODAwLFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICApLnRvKHRoaXMudG9wU3RhdGVJY29uLCB7IHk6IHRoaXMudG9wU3RhdGVJY29uLnkgfSwgODAwKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IHBsYXk7XHJcblxyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucmVzdW1lKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RVx1NjVGNlx1OTVGNFx1NUJCOVx1NTY2OFx1NzY4NFx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dUaW1lQm94KHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTk2MzRcdTVGNzFcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93U2hhZG93SWNvbihzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cudmlzaWJsZSA9IHNob3c7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYWN0aXZlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjkwRFx1NzI2OVx1NTJBOFx1NzUzQlx1NjRBRFx1NjUzRVxyXG4gICAgICogQHBhcmFtIHBsYXlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwbGFudEljb25BbmkocGxheTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGFudEljb25Ud2Vlbikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuID0gTGF5YS5UaW1lTGluZS50byh0aGlzLmljb24sIHsgc2tld1g6IDYgfSwgOTAwKVxyXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMuaWNvbiwgeyBza2V3WDogLTYgfSwgMTgwMClcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLmljb24sIHsgc2tld1g6IDAgfSwgOTAwKTtcclxuICAgICAgICAgICAgdGhpcy5wbGFudEljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5pY29uLnNrZXdYID0gMDtcclxuXHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZShNYXRoLnJhbmRvbSgpICogMTAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wbGFudEljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25Ud2Vlbi5yZXN1bWUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFudEljb25Ud2Vlbi5wYXVzZSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYW50SWNvblR3ZWVuLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1MDEyXHU4QkExXHU2NUY2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQ291bnREb3duKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnREb3duTGIudGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0KTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDEwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdC0tO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYi50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyh0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1MDEyXHU4QkExXHU2NUY2XHU3RUQzXHU2NzVGIFwiKTtcclxuICAgICAgICAgICAgLy8gdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmljb24uc2tpbiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldCh0aGlzLmRhdGE/LnByb2R1Y3RJZCk/Lm1hdHVyZUljb247XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5idWlsZEluZykgdGhpcy5zZXRTdGF0ZUljb25Ta2luKDMpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUaW1lQm94KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTdCNDlcdTdFQTdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmx2Tm9kZS5za2luID0gYG1haW5fc2NlbmUvaW1nX2xldmVsJHt0aGlzLmRhdGEubGV2ZWx9LnBuZ2A7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyQTBcdTkwMUZcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMubGFuZF9zcGVlZF91cClcclxuICAgIHByaXZhdGUgc3BlZWRVcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhPy5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgLT0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcImFsbF9zcGVlZF91cF90aW1lXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsdWUgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1N0E3QVx1NTcxRlx1NTczMFxyXG4gICAgICovXHJcbiAgICBjbGVhckZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGEucHJvZHVjdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmljb24uc2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpZWxkSWQsIHRoaXMuYnVpbGRJbmcpO1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NTkxNlx1NTFGQVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlYWxGb29kKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgLy9cdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVpbGRJbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KHRoaXMuZGF0YS5sZXZlbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxldmVsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MudHVkaXNoZW5namkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTZFRTFcdTdFQTdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcdTVERjJcdTZFRTFcdTdFQTdgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTUyQTBcdTkwMUZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNwZWVkVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU2NTM2XHU4M0I3XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhbnRBbW91bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZEdhdGhlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJnYXRoZXJcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29sZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2ZXJ0aXNlVGltZXM6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRBbW91bnQgPSBkLmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UuYWRkKHRoaXMuZGF0YS5wcm9kdWN0SWQsIGQuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3Muc2hvdWNhaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kID0gZC5yZXdhcmREaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1x1NjUzNlx1ODNCN1x1NzY4NFx1NjkwRFx1NzI2OVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGFudE9iaiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldCh0aGlzLmRhdGEucHJvZHVjdElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdDogYW55W10gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBwbGFudE9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcGxhbnRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU4M0I3XHU1Rjk3XHU3Njg0XHU5NEJCXHU3N0YzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJld2FyZERpYW1vbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZGlhbW9uZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmREaWFtb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJld2FyZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwbGFudE9iai5nYWluLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzd2l0Y2ggKGQub2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgQ29uZmlnR2FtZS5kaWFtb25kSWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBVc2VySW5mby5kaWFtb25kICs9IGQuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2FzZSBDb25maWdHYW1lLmdvbGRJZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFVzZXJJbmZvLmdvbGQgKz0gZC5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vXHU3OUNEXHU4M0RDXHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywge1xyXG4gICAgICAgICAgICAgICAgcGFybTogPFNob3BWaWV3RGF0YT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFybTogeyBsYW5kSWQ6IHRoaXMuZmllbGRJZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiBQbGFudERhdGFCYXNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKS5wcm9kdWN0SWQgPSBkLmJhc2UuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCkubWF0dXJlVGltZUxlZnQgPSBkLmJhc2UubWF0dXJlX3RpbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy56aG9uZ3poaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vXHU4OUUzXHU5NTAxXHU1NzFGXHU1NzMwXHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5BZGRMYW5kVmlldywge1xyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5maWVsZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXR1cmVUaW1lTGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGFuZFNlcnZpY2UuYWRkTGFuZCh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MDc3XHU4M0RDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RlYWxGb29kKGRhdGE6IExhbmRPYmopIHtcclxuICAgICAgICBpZiAoIWRhdGEucHJvZHVjdElkIHx8IGRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblN0ZWFsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1REYyXHU3RUNGXHU0RTBEXHU1M0VGXHU1MDc3XCIpO1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1N0VEOVx1NjIxMVx1NzU1OVx1NzBCOVx1NTQyN1wiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmdvdWppYW9zaGVuZyk7XHJcbiAgICAgICAgLy9cdTUwNzdcdTgzRENcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFN0ZWFsLFxyXG4gICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImxhbmRTdGVhbFwiXT57XHJcbiAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICB1aWQ6IHRoaXMuc3RlYWxVaWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGw6IChkOiB7IHBsYW50SWQ6IDA7IGFtb3VudDogMDsgdml0YWxpdHkgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8udml0YWxpdHkgPSBkLnZpdGFsaXR5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5TdGVhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UuYWRkKHRoaXMuZGF0YS5wcm9kdWN0SWQsIGQuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3Muc2hvdWNhaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9cdTY1MzZcdTgzQjdcdTc2ODRcdTY5MERcdTcyNjlcclxuICAgICAgICAgICAgICAgIGxldCBwbGFudE9iaiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLnBsYW50SWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3Q6IGFueVtdID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHBsYW50T2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGQuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJld2FyZExpc3QsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpIHtcclxuICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIExheWEuVHdlZW4uY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbj8uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEZpZWxkQ29tcG9uZW50IGZyb20gXCJzcmMvY29tcG9uZW50cy9GaWVsZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UsIHsgTGFuZE9iaiB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1OThERVx1OTFEMVx1NUUwMVx1NjU3MFx1OTFDRlx1N0VEM1x1Njc4NFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBHZXRGbG9hdFJld2FyZE9iaiB7XHJcbiAgICAvKiogXHU4RDc3XHU3MEI5XHU1M0MyXHU4MDAzXHU4MjgyXHU3MEI5IFx1OUVEOFx1OEJBNFx1NEYxQVx1NjI4QVx1NjU3MFx1OTFDRlx1NzY4NFx1NEUxQ1x1ODk3Rlx1NTJBMFx1NTIzMFx1OEZEOVx1OTFDQ1x1RkYwQ1x1NjI0MFx1NEVFNVx1NEUwRFx1ODk4MVx1NkRGQkhCb3hcdTYyMTZcdTY2MkZWQm94ICovXHJcbiAgICBub2RlOiBMYXlhLkJveDtcclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIGxpc3Q6IHtcclxuICAgICAgICAvKiogXHU4OUUzXHU2NzkwXHU3Njg0XHU4RDQ0XHU2RTkwXHU2NTcwXHU2MzZFIFx1NUZDNVx1OTg3Qlx1ODk4MVx1NjcwOWljb24gKi9cclxuICAgICAgICBvYmo6IGFueTtcclxuICAgICAgICAvKiogXHU2NTcwXHU5MUNGICovXHJcbiAgICAgICAgY291bnQ6IG51bWJlcjtcclxuICAgICAgICAvKiogXHU3RUM4XHU3MEI5XHU0RjREXHU3RjZFIDEgXHU5MUQxXHU1RTAxIDIgXHU5NEJCXHU3N0YzIDMgXHU0RUQzXHU1RTkzICovXHJcbiAgICAgICAgcG9zVHlwZTogMSB8IDIgfCAzO1xyXG4gICAgfVtdO1xyXG4gICAgbm90Rmx5PzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTUyQThcdTc1M0JcdTY0QURcdTY1M0VcdTdFRDNcdTY3NUZcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbGxCYWNrPzogeyAoKTogdm9pZCB9O1xyXG59XHJcblxyXG4vLyAgTWFpblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5WaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRMYW5kTGF5ZXIsIHRpcHM6XCJcdTYyRDNcdTVDNTVcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZExhbmRMYXllcjogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaWFtb25kTm9kZSwgdGlwczpcIlx1OTRCQlx1NzdGM1x1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZGlhbW9uZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvbGROb2RlLCB0aXBzOlwiXHU5MUQxXHU1RTAxXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb2xkTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YXZhdGFyTm9kZSwgdGlwczpcIlx1NTkzNFx1NTBDRlx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYXZhdGFyTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bGFuZEJveCwgdGlwczpcIlx1NTcxRlx1NTczMFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGFuZEJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNlbnRlckJveCwgdGlwczpcIlx1NEUyRFx1OTVGNFx1NTMzQVx1NTdERlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY2VudGVyQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6b3JkZXJCb3gsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG9yZGVyQm94OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRVcExheWVyLCB0aXBzOlwiXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU3QTk3XHU1M0UzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsYW5kVXBMYXllcjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRvcExheWVyT25TdGFnZSwgdGlwczpcIlx1NTcyOFx1NEUzQlx1NTczQVx1NjY2Rlx1NEUwQVx1OTc2Mlx1NzY4NFx1NEUwMFx1NEUyQVx1NjcwMFx1NEUwQVx1NUM0Mlx1NzY4NFx1N0E3QVx1NUM0MlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdG9wTGF5ZXJPblN0YWdlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BHb2xkSWNvbiwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1OTFEMVx1NUUwMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcEdvbGRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BEaWFtb25kSWNvbiwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1OTRCQlx1NzdGM2ljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcERpYW1vbmRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp3YXJlaG91c2VCdG4sIHRpcHM6XCJcdTRFRDNcdTVFOTNcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHdhcmVob3VzZUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bW9uZXlMYiwgdGlwczpcIlx1N0VBMlx1NTMwNVx1NjU4N1x1Njg2M1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbW9uZXlMYjogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdUZGMENcdTk4REVcdTcyNjlcdTU0QzFcdTc2RjhcdTUxNzNcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnZXRSZXdhcmRQcmVmYWIsIHRpcHM6XCJcdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdTk4ODRcdThCQkVcIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgZ2V0UmV3YXJkUHJlZmFiOiBMYXlhLlByZWZhYiA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmxvYXRSZXdhcmRJY29uLCB0aXBzOlwiXHU1OTU2XHU1MkIxXHU5OERFXHU1MkE4XHU3NTNCaWNvblwiLCB0eXBlOlByZWZhYn0qL1xyXG4gICAgcHJpdmF0ZSBmbG9hdFJld2FyZEljb246IExheWEuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6Z29Ib21lQnRuLCB0aXBzOlwiXHU4RkQ0XHU1NkRFXHU1QkI2XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb0hvbWVCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFueURvb3IsIHRpcHM6XCJcdTUzQkJcdThGNkNcdThGNkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFueURvb3I6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5Qm94LCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eUJveDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlCdXlCdG4sIHRpcHM6XCJcdTRGNTNcdTUyOUJcdThEMkRcdTRFNzBcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5QnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NUJBMFx1NzI2OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldEJveCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0Qm94OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTRFRkJcdTUyQTFcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0YXNrQm94LCB0aXBzOlwiXHU0RUZCXHU1MkExXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0YXNrQm94OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU3RUM0XHU0RUY2IFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBsYW5kTGlzdDogRmllbGRDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICAgIC8qKlx1NjYyRlx1NTQyNlx1NTcyOFx1NTkxNlx1OTc2MiAqL1xyXG4gICAgcHJpdmF0ZSBpc091dGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU3OUJCXHU1RjAwXHU1QkI2XHU3Njg0XHU2NUY2XHU5NUY0ICovXHJcbiAgICBwcml2YXRlIG91dGVyVGltZTogbnVtYmVyO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJyZXMvbG9hZGluZ0JnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfd29vZHRpdGxlLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmVIb3VzZUJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmViZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3NoZWxmLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfcG9wVXBCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2xhbmRCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvdXNldG9wLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyBcInJlcy9pbWdfaG9tZXBhZ2VCZzMucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2ltZ19ob21lcGFnZUJnMi5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX2hvbWVwYWdlQmcxLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfZmFybWxhbmRMb2dvLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5wbmdcIixcclxuICAgICAgICBdLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZW5kc1dpdGgoXCJwbmdcIikpIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnRvcExheWVyT25TdGFnZSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52aXRhbGl0eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nb0hvbWVCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGFuZEJveC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QucHVzaCh0aGlzLmxhbmRCb3guZ2V0Q2hpbGRBdCh4KS5nZXRDb21wb25lbnQoRmllbGRDb21wb25lbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGFuZExpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5maWVsZElkIC0gYi5maWVsZElkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9maWVsZCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGl0TGFuZEFkZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU3OTNBXHU2NjNFXHU3OTNBXHU2MjY5XHU1RUZBaWNvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhpdExhbmRBZGQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubGFuZExpc3RbeF0uZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGRFbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgQ29yZS5vYnNlcnZhYmxlUHJvcGVydHlcclxuICAgICAgICAgICAgLndhdGNoKFVzZXJJbmZvLCB0aGlzKVxyXG4gICAgICAgICAgICAua2V5KFwiZGlhbW9uZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaWFtb25kTm9kZS52YWx1ZSA9IGU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1vbmV5TGIudmFsdWUgPSAoZSAqIFVzZXJJbmZvLnByb3BvcnRpb24pLnRvRml4ZWQoMikgKyBcIlwiO1xyXG4gICAgICAgICAgICAgICAgLy9cdTRFMERcdTU2REJcdTgyMERcdTRFOTRcdTUxNjVcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uZXlMYi52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgKGUgKiBVc2VySW5mby5wcm9wb3J0aW9uKS50b1N0cmluZygpLm1hdGNoKC9eXFxkKyg/OlxcLlxcZHswLDJ9KT8vKSArIFwiXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJnb2xkXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvbGROb2RlLnZhbHVlID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImF2YXRhclwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcIndhcmVQZXRJZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBldEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJkb2dcIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5nZXQoZSkuaWNvbjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwicGV0Vml0YWxpdHlcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8ud2FyZVBldElkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAvL1x1NjZGNFx1NjVCMFx1NUJBMFx1NzI2OVx1NEY1M1x1NTI5QlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGV0Qm94LnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFyID0gdGhpcy5wZXRCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYm94XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInZpdGFsaXR5X2JhclwiKSBhcyBMYXlhLkltYWdlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSBlIC8gVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmdldChVc2VySW5mby53YXJlUGV0SWQpLnZpdGFsaXR5X21heDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NhbGUgPiAxKSBzY2FsZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhci53aWR0aCA9IDEzMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiZGlnZXN0Q291bnREb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMuZGlnZXN0Q291bnREb3duKTtcclxuICAgICAgICAgICAgICAgIC8vXHU1QkEwXHU3MjY5XHU5NzAwXHU4OTgxXHU2RDg4XHU4MDE3XHU5OERGXHU3MjY5XHU1MDEyXHU4QkExXHU2NUY2XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXRCb3gudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZShlICogMTAwMCwgdGhpcywgdGhpcy5kaWdlc3RDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwidml0YWxpdHlcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2aXRhbGl0eSA9IGUgLyBDb25maWdHYW1lLnVzZXJWaXRhbGl0eUxpbWl0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHZpdGFsaXR5ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXRhbGl0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudml0YWxpdHlCdXlCdG4ubW91c2VFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudml0YWxpdHlCdXlCdG4uZ3JheSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5tb3VzZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudml0YWxpdHlCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMudml0YWxpdHlCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPSAyNjggKiB2aXRhbGl0eTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTGFuZExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU9yZGVyKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUYXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVCQTBcdTcyNjlcdTdCMTFcdTZEODhcdTUzMTZcdTVCOUFcdTY1RjZcdTU2NjhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkaWdlc3RDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBwZXQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KFVzZXJJbmZvLndhcmVQZXRJZCk7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLnBldFZpdGFsaXR5IC0gcGV0LnZpdGFsaXR5X2NvbnN1bWUgPD0gMCkge1xyXG4gICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgLT0gcGV0LnZpdGFsaXR5X2NvbnN1bWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IENvbmZpZ0dhbWUucGV0RGlnZXN0SW50ZXJ2YWxUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oQXBpSHR0cC5sb2dpbilcclxuICAgIHByaXZhdGUgZ2FtZUluaXQoZDogTmV0SW5pdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG5cclxuICAgICAgICAvLyBsZXQgYSA9IGQuZGF0YS5sYW5kTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExhbmRMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRhc2tcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNpZ25JblwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNpZ25JblZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTWFpbFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoZWFkXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2V0dGluZ1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YXJlaG91c2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2ZlZWRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAyIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvZ1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDIgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib3JkZXJfYm94XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZnJpZW5kc1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuRnJpZW5kKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kXCI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxhbmRMZXZlbFVwXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNPdXRlcikgdGhpcy5zd2l0Y2hMYW5kTGV2ZWxVcCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXlHZXRSZXdhcmRBbmkoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG5vZGU6IHRoaXMudGVzdEJ0biBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB7IG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KDEwMDEpLCBjb3VudDogMTAwLCBwb3NUeXBlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksIGNvdW50OiAxMDAsIHBvc1R5cGU6IDEgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeyBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldCgxMDAxKSwgY291bnQ6IDEwMCwgcG9zVHlwZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfdXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoTGFuZExldmVsVXAoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhbnlfZG9vclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvTmVpZ2hib3IoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29faG9tZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb0hvbWUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkX3ZpdGFsaXR5XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1eVZpdGFsaXR5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU5N0RcdTUzQ0IgXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb3BlbkZyaWVuZCgpIHtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kTGlzdCxcclxuICAgICAgICAgICAgY2FsbDogKGQ6IEZyaWVuZExpc3REYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc1ZpZXcsIHsgcGFybTogZCB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEQyRFx1NEU3MFx1NEY1M1x1NTI5QlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGJ1eVZpdGFsaXR5KCkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5CdXlWaXRhbGl0eVZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU4QkEyXHU1MzU1XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcilcclxuICAgIHByaXZhdGUgdXBkYXRlT3JkZXIoKSB7XHJcbiAgICAgICAgbGV0IGJveCA9IHRoaXMub3JkZXJCb3gsXHJcbiAgICAgICAgICAgIGQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJvcmRlclwiKS5nZXQoVXNlckluZm8ub3JkZXJMZXZlbCArIDEpLFxyXG4gICAgICAgICAgICByZXdhcmQ6IFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgICAgICAgICAgcmV3YXJkQ291bnQ6IG51bWJlciA9IDAsXHJcbiAgICAgICAgICAgIGN1ckNvdW50ID0gMCxcclxuICAgICAgICAgICAgbWF4Q291bnQgPSAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgaWYgKCFkKSByZXR1cm4gY29uc29sZS5sb2coXCJcdTdCNDlcdTdFQTdcdTVERjJcdTVCOENcIik7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA0OyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtX1wiICsgeCkgYXMgTGF5YS5Cb3g7XHJcblxyXG4gICAgICAgICAgICBpZiAoZC5jb25kaXRpb25beF0pIHtcclxuICAgICAgICAgICAgICAgIGN1ckNvdW50ID0gV2FyZWhvdXNlU2VydmljZS5nZXRPbmUoZC5jb25kaXRpb25beF0ucGxhbnQuaWQpPy5jb3VudCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQgPSBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyQ291bnQgPj0gbWF4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZC5jb25kaXRpb25beF0ucGxhbnQuaWNvbjtcclxuICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtjdXJDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgICAgIDg3ICogKGN1ckNvdW50IC8gbWF4Q291bnQgPiAxID8gMSA6IGN1ckNvdW50IC8gbWF4Q291bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZC5jb25kaXRpb25beF0ucGxhbnQuZ2Fpbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUub2JqLmlkID09PSBDb25maWdHYW1lLmdvbGRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkID0gZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArPSBlLmNvdW50ICogbWF4Q291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJld2FyZCkge1xyXG4gICAgICAgICAgICBsZXQgYnRuQm94ID0gYm94LmdldENoaWxkQnlOYW1lKFwiYnRuX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuICAgICAgICAgICAgKGJ0bkJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKGJ0bkJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gYCR7XHJcbiAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgIH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVfdGl0bGVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTVCOENcdTYyMTAke1xyXG4gICAgICAgICAgICBVc2VySW5mby5vcmRlckxldmVsICsgMVxyXG4gICAgICAgIH1cdTdFQTdcdThCQTJcdTUzNTVgO1xyXG5cclxuICAgICAgICBpZiAocHJvZ3Jlc3MgPT0gZC5jb25kaXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAub3JkZXJSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJJZDogVXNlckluZm8ub3JkZXJMZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGQuY29uZGl0aW9uLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5yZWR1Y2VBbW91bnQoZS5wbGFudC5pZCwgZS5jb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUdldFJld2FyZEFuaSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IGJveC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ib3hcIikgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5nb2xkSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5vcmRlckxldmVsKys7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMDdcdTYzNjJcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN3aXRjaExhbmRMZXZlbFVwKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYmcgPSB0aGlzLmxhbmRVcExheWVyLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICBiZy5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oYmcsIHsgYWxwaGE6IDAuNzUgfSwgMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5nZXRDaGlsZEJ5TmFtZShcImxhbmRfb3V0ZXJcIikuYWRkQ2hpbGQodGhpcy5sYW5kQm94KTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVGFibGVBbmFseXplLnRhYmxlKFwibGFuZExldmVsXCIpLmdldChlLmRhdGEubGV2ZWwgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlLmJ1aWxkSW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIGJnLFxyXG4gICAgICAgICAgICAgICAgeyBhbHBoYTogMCB9LFxyXG4gICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJCb3guYWRkQ2hpbGQodGhpcy5sYW5kQm94KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93VGltZUJveCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUuYnVpbGRJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbihlLmRhdGEubWF0dXJlVGltZUxlZnQgPyAxIDogMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGUudG9wU3RhdGVJY29uQW5pKEJvb2xlYW4oZS5kYXRhLnByb2R1Y3RJZCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY0QURcdTY1M0VcdTgzQjdcdTUzRDZcdTU5NTZcdTUyQjFcdTUyQThcdTc1M0JcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkKVxyXG4gICAgcHJpdmF0ZSBwbGF5R2V0UmV3YXJkQW5pKG9iajogR2V0RmxvYXRSZXdhcmRPYmopIHtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqLmNhbGxCYWNrKSBvYmouY2FsbEJhY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb2JqLmxpc3QuZm9yRWFjaCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogTGF5YS5Cb3ggPSBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q3JlYXRlRnVuKFxyXG4gICAgICAgICAgICAgICAgXCJmbG9hdFJld2FyZEJveFwiLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZXdhcmRQcmVmYWIuY3JlYXRlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZXdhcmRQcmVmYWJcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5vZGUueSA9IG9iai5ub2RlLmdldF9oZWlnaHQoKSAqIG9iai5ub2RlLmFuY2hvclkgLSBpICogNjA7XHJcbiAgICAgICAgICAgIC8vIG5vZGUueCA9IG9iai5ub2RlLmdldF93aWR0aCgpICogb2JqLm5vZGUuYW5jaG9yWDtcclxuICAgICAgICAgICAgbGV0IGljb24gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpY29uLnNraW4gPSBkLm9iaj8uaWNvbiB8fCBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSA1MCAvIGljb24ud2lkdGg7XHJcbiAgICAgICAgICAgIGljb24uc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICAgICAgbm9kZS5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iai5ub2RlLmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQoKSkpO1xyXG4gICAgICAgICAgICAvLyBvYmoubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbGV0IG5vZGVOZXdQb3MgPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludCgpKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbm9kZS5wb3Mobm9kZU5ld1Bvcy54ICsgb2JqLm5vZGUuZ2V0X3dpZHRoKCkgKiBvYmoubm9kZS5hbmNob3JYLCBub2RlTmV3UG9zLnkgLSBpICogNjApO1xyXG4gICAgICAgICAgICB0aGlzLnRvcExheWVyT25TdGFnZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgKG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IFwieFwiICsgZC5jb3VudDtcclxuXHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAgICAgeyB5OiBub2RlLnkgLSA0MCwgYWxwaGE6IDEgfSxcclxuICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgKGU6IExheWEuQm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlcihcImZsb2F0UmV3YXJkQm94XCIsIGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvc0ljb24gPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubG9jYWxUb0dsb2JhbChMYXlhLlBvaW50LmNyZWF0ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoubm90Rmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsb2F0SWNvbjogTGF5YS5JbWFnZSA9IExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXRSZXdhcmRJY29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXRSZXdhcmRJY29uLmNyZWF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdFJld2FyZEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5za2luID0gZC5vYmouaWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnBvcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQb3NJY29uLnggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIwICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBvc0ljb24ueSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjAgKiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmFkZENoaWxkKGZsb2F0SWNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnpPcmRlciA9IDk5OTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcEljb246IExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkLnBvc1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wR29sZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wRGlhbW9uZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMud2FyZWhvdXNlQnRuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wR29sZEljb25Qb3MgPSB0b3BJY29uLmxvY2FsVG9HbG9iYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLlBvaW50KHRvcEljb24ud2lkdGggLyAyLCB0b3BJY29uLmhlaWdodCAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKHRvcEdvbGRJY29uUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IGxvY2FsUG9zLngsIHk6IGxvY2FsUG9zLnkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tJbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZTogTGF5YS5JbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKFwiZmxvYXRSZXdhcmRJY29uXCIsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmbG9hdEljb25dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MCAqIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFtub2RlXVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIDUwICogaSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY0QURcdTY1M0VcdTc3MEJcdTVFN0ZcdTU0NEFcdTRFRTVcdTU0MEVcdTc2ODRcdTU5NTZcdTUyQjFcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkKVxyXG4gICAgcHJpdmF0ZSBwbGF5QWRSZXdhcmQodGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgcmV3YXJkID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIlZpZGVvcmV3YXJkc1wiKS52YWx1ZSBhcyBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgbm9kZTogdGFyZ2V0LFxyXG4gICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqOiByZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogcmV3YXJkLm9iai5pZCA9PSBDb25maWdHYW1lLmdvbGRJZCA/IDEgOiAyLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NEVGQlx1NTJBMVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMudXBkYXRlX3Rhc2spXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRhc2soKSB7XHJcbiAgICAgICAgY29uc3QgYm94OiBMYXlhLkltYWdlID0gdGhpcy50YXNrQm94LFxyXG4gICAgICAgICAgICBpY29uID0gYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBhbW91bnRGb250ID0gaWNvbi5nZXRDaGlsZEJ5TmFtZShcImFtb3VudEZvbnRcIikgYXMgTGF5YS5Gb250Q2xpcCxcclxuICAgICAgICAgICAgZGVzYyA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImxiXCIpIGFzIExheWEuTGFiZWwsXHJcbiAgICAgICAgICAgIGxpc3QgPSBUYXNrU2VydmljZS5nZXRMaXN0KCksXHJcbiAgICAgICAgICAgIHRhc2sgPSBsaXN0WzBdO1xyXG4gICAgICAgIGlmICh0YXNrLnJlY2VpdmUgPT0gMSB8fCB0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgYm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgZGVzYy50ZXh0ID0gYFx1NEVGQlx1NTJBMToke3Rhc2suYmFzZS5kZXNjfSgke1xyXG4gICAgICAgICAgICB0YXNrLnRpbWVzID4gdGFzay5iYXNlLnRpbWVzID8gdGFzay5iYXNlLnRpbWVzIDogdGFzay50aW1lc1xyXG4gICAgICAgIH0vJHt0YXNrLmJhc2UudGltZXN9KWA7XHJcbiAgICAgICAgYW1vdW50Rm9udC52YWx1ZSA9IFwieFwiICsgdGFzay5iYXNlLnJld2FyZC5jb3VudDtcclxuICAgICAgICBpY29uLnNraW4gPSB0YXNrLmJhc2UucmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgIGJveC53aWR0aCA9IGRlc2Mud2lkdGggKyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU2REVcdTVCQjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnb0hvbWUoKSB7XHJcbiAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KHRydWUsICgpID0+IHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5nb0hvbWUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NTZERVx1Njc2NVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPdXRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgzMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nb0ZyaWVuZChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1M0JCXHU5MEJCXHU1QzQ1XHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ29Ub05laWdoYm9yKCkge1xyXG4gICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyh0cnVlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubmVpZ2hib3IsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoZDogUmV0dXJuTmVpZ2hib3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NzlCQlx1NUYwMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb0ZyaWVuZChkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMuZ29fZnJpZW5kX2hvbWUpXHJcbiAgICBwcml2YXRlIGdvRnJpZW5kTGlzdGVuKGQ6IFJldHVybk5laWdoYm9yKSB7XHJcbiAgICAgICAgdGhpcy5pc091dGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdvRnJpZW5kKGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1M0JCXHU2NzBCXHU1M0NCXHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ29GcmllbmQoZD86IFJldHVybk5laWdoYm9yKSB7XHJcbiAgICAgICAgbGV0IGxhbmRzID0gdGhpcy5sYW5kTGlzdCxcclxuICAgICAgICAgICAgdXNlckxhbmRzID0gTGFuZFNlcnZpY2UubGlzdDtcclxuICAgICAgICBsZXQgb3RoZXJMYW5kczogTWFwPG51bWJlciwgTGFuZE9iaj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgZC5sYW5kcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdGhlckxhbmRzLnNldChlLmlkLCBlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm91dGVyVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMudml0YWxpdHlCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ib21lQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFueURvb3IudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVzZXJMYW5kcy5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkLm1hdHVyZVRpbWVMZWZ0IC09IChEYXRlLm5vdygpIC0gdGhpcy5vdXRlclRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIGlmIChkLm1hdHVyZVRpbWVMZWZ0IDwgMCkgZC5tYXR1cmVUaW1lTGVmdCA9IDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnZpdGFsaXR5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hbnlEb29yLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxhbmRzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhbmQgPSBsYW5kc1t4XTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICAgICAgbGFuZC5pc091dGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxhbmQudXBkYXRlRGF0YSh7IGxpc3Q6IG90aGVyTGFuZHMgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFuZC5zdGVhbFVpZCA9IGQudWlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQucHJvdGVjdGVkVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmQuY2FuU3RlYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmQuY2FuU3RlYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGFuZC5jYW5TdGVhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZC5pc091dGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnN0ZWFsVWlkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGxhbmQudXBkYXRlRGF0YSh7IGxpc3Q6IHVzZXJMYW5kcyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICAvL1x1OTY5MFx1ODVDRlx1NUJBMFx1NzI2OVxyXG4gICAgICAgICAgICB0aGlzLnBldEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vXHU5NjkwXHU4NUNGXHU0RUZCXHU1MkExXHJcbiAgICAgICAgICAgIHRoaXMudGFza0JveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cdTY2M0VcdTc5M0EgXHU1QkEwXHU3MjY5XHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby53YXJlUGV0SWQpIHRoaXMucGV0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL1x1NjYzRVx1NzkzQVx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICB0aGlzLnRhc2tCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IE9yZGVyQmFzZSwgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5cclxuLy9jbGFzcyBPcmRlclZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm9yZGVyTGlzdCwgdGlwczpcIlx1OEJBMlx1NTM1NVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGUsfSovXHJcbiAgICBwcml2YXRlIG9yZGVyTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6YnRuTG9ja1JlcywgdGlwczpcIlx1OEJBMlx1NTM1NVx1NjMwOVx1OTRBRVx1NjcyQVx1NUI4Q1x1NjIxMFwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGJ0bkxvY2tSZXM6IHN0cmluZyA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YnRuUmVzQ3VyLCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU2MzA5XHU5NEFFXHU1RjUzXHU1MjREXHU3MkI2XHU2MDAxXHU2MzA5XHU5NEFFXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgYnRuUmVzQ3VyOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgZGF0YUxpc3Q6IE9yZGVyQmFzZVtdO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBUYWJsZUFuYWx5emUudGFibGUoXCJvcmRlclwiKS5saXN0O1xyXG4gICAgICAgIGxldCBvcmRlck9sZEx2ID0gVXNlckluZm8ub3JkZXJMZXZlbCB8fCAwO1xyXG4gICAgICAgIHRoaXMuZGF0YUxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5pZCAqIChiLmlkIDw9IG9yZGVyT2xkTHYgPyAtMSA6IDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LmFycmF5ID0gdGhpcy5kYXRhTGlzdDtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnJlbmRlckxpc3QpO1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckxpc3QoY2VsbDogTGF5YS5JbWFnZSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmRhdGFMaXN0W2ldLFxyXG4gICAgICAgICAgICByZXdhcmQ6IFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgICAgICAgICAgcmV3YXJkQ291bnQ6IG51bWJlciA9IDAsXHJcbiAgICAgICAgICAgIGN1ckNvdW50ID0gMCxcclxuICAgICAgICAgICAgbWF4Q291bnQgPSAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IDAsXHJcbiAgICAgICAgICAgIHJld2FyZEJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRfYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwib3JkZXJfbHZcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke2QuaWR9XHU3RUE3XHU4QkEyXHU1MzU1YDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA0OyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiaXRlbV9cIiArIHgpIGFzIExheWEuQm94O1xyXG4gICAgICAgICAgICBpZiAoZC5jb25kaXRpb25beF0pIHtcclxuICAgICAgICAgICAgICAgIGN1ckNvdW50ID0gV2FyZWhvdXNlU2VydmljZS5nZXRPbmUoZC5jb25kaXRpb25beF0ucGxhbnQuaWQpPy5jb3VudCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQgPSBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyQ291bnQgPj0gbWF4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZC5jb25kaXRpb25beF0ucGxhbnQuaWNvbjtcclxuICAgICAgICAgICAgICAgIGlmIChkLmlkIDwgVXNlckluZm8ub3JkZXJMZXZlbCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7bWF4Q291bnR9LyR7bWF4Q291bnR9YDtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9IDg3O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7Y3VyQ291bnR9LyR7bWF4Q291bnR9YDtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDg3ICogKGN1ckNvdW50IC8gbWF4Q291bnQgPiAxID8gMSA6IGN1ckNvdW50IC8gbWF4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZC5jb25kaXRpb25beF0ucGxhbnQuZ2Fpbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUub2JqLmlkID09PSBDb25maWdHYW1lLmdvbGRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkID0gZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArPSBlLmNvdW50ICogZC5jb25kaXRpb25beF0uY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoZC5pZCA+IFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxKSB7XHJcbiAgICAgICAgICAgIC8vXHU2NzJBXHU2RkMwXHU2RDNCXHJcbiAgICAgICAgICAgIGJ0bi5za2luID0gdGhpcy5idG5Mb2NrUmVzO1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGQuaWQgPT0gVXNlckluZm8ub3JkZXJMZXZlbCArIDEpIHtcclxuICAgICAgICAgICAgICAgIC8vXHU1RjUzXHU1MjREXHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IHRoaXMuYnRuUmVzQ3VyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTVERjJcdTVCOENcdTYyMTBcIik7XHJcbiAgICAgICAgICAgICAgICAvL1x1NURGMlx1NUI4Q1x1NjIxMFxyXG4gICAgICAgICAgICAgICAgYnRuLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmV3YXJkKSB7XHJcbiAgICAgICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSByZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCske1xyXG4gICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKyBNYXRoLnJvdW5kKHJld2FyZENvdW50ICogZC5jb21taXNzaW9uKVxyXG4gICAgICAgICAgICB9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5PcmRlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVyVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6bGVmdEJveCwgdGlwczpcIlx1NEU5MVx1NURFNlx1OEZCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIGxlZnRCb3g6IExheWEuQm94O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnJpZ2h0Qm94LCB0aXBzOlwiXHU0RTkxXHU1REU2XHU4RkI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcmlnaHRCb3g6IExheWEuQm94O1xyXG5cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIG9uT3BlbmVkKGRhdGE6IHsgY2FsbDogeyAoT3ZlclZpZXcpOiB2b2lkIH0gfSkge1xyXG4gICAgICAgIC8vIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICBpZiAoZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICBkYXRhLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKGNhbGw6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0Qm94LnggPSAtOTg3O1xyXG4gICAgICAgIHRoaXMucmlnaHRCb3gueCA9IDEwMjU7XHJcbiAgICAgICAgdGhpcy5sZWZ0Qm94LmFscGhhID0gMDtcclxuICAgICAgICB0aGlzLnJpZ2h0Qm94LmFscGhhID0gMDtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubGVmdEJveCwgeyB4OiAwLCBhbHBoYTogMSB9LCA1MDApO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3gsXHJcbiAgICAgICAgICAgIHsgeDogMCwgYWxwaGE6IDEgfSxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsKSBjYWxsKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKGNhbGw6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLmxlZnRCb3gsIHsgeDogLTk4NywgYWxwaGE6IDAgfSwgNTAwKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm94LFxyXG4gICAgICAgICAgICB7IHg6IDEwMjUsIGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgIDUwMCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbCkgY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5PdmVyVmlldyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwRGF0YUNvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cERhdGFDb250cm9sXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vY2xhc3MgU2V0dGluZ1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6bXVzaWNOb2RlLCB0aXBzOlwiXHU5N0YzXHU0RTUwXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBtdXNpY05vZGU6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzb3VuZE5vZGUsIHRpcHM6XCJcdTk3RjNcdTY1NDhcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNvdW5kTm9kZTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmF2YXRhck5vZGUsIHRpcHM6XCJcdTczQTlcdTVCQjZcdTU5MzRcdTUwQ0ZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGF2YXRhck5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm5pY2tuYW1lLCB0aXBzOlwiXHU3M0E5XHU1QkI2XHU1NDBEXHU3OUYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBuaWNrbmFtZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY0NoYW5nZSgpO1xyXG4gICAgICAgIHRoaXMuc291bmRDaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgQ29yZS5vYnNlcnZhYmxlUHJvcGVydHlcclxuICAgICAgICAgICAgLndhdGNoKFVzZXJJbmZvLCB0aGlzKVxyXG4gICAgICAgICAgICAua2V5KFwiYXZhdGFyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkgdGhpcy5hdmF0YXJOb2RlLnNraW4gPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwibmlja25hbWVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmlja25hbWUudGV4dCA9IGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU2V0dGluZ1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibXVzaWNcIjpcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ubXVzaWNNdXRlZCA9ICFDb3JlLmF1ZGlvLm11c2ljTXV0ZWQ7XHJcbiAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJtdXNpY1wiLCBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubXVzaWNDaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQgPSAhQ29yZS5hdWRpby5zb3VuZE11dGVkO1xyXG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwic291bmRcIiwgQ29yZS5hdWRpby5zb3VuZE11dGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwic2lnbl9vdXRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTc4NkVcdThCQTRcdTg5ODFcdTkwMDBcdTUxRkFcdTc2N0JcdTVGNTVcdUZGMUZcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ0b2tlblwiLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSHR0cERhdGFDb250cm9sLmxvZ2luT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5sb2dpbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkxvZ2luVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMubG9naW5fZ2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtdXNpY0NoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCBib3ggPSB0aGlzLm11c2ljTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcblxyXG4gICAgICAgIGxldCBtdXNpYyA9IENvcmUuYXVkaW8ubXVzaWNNdXRlZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhtdXNpYyk7XHJcblxyXG4gICAgICAgIGljb24ueCA9ICFtdXNpYyA/IC0xNCA6IDkxO1xyXG4gICAgICAgIGljb24uc2tpbiA9ICFtdXNpYyA/IGBnYW1lL2ltZ19tdXNpY09uQnRuLnBuZ2AgOiBcImdhbWUvaW1nX211c2ljT2ZmQnRuLnBuZ1wiO1xyXG4gICAgICAgIGJveC5za2luID0gIW11c2ljID8gYGdhbWUvaW1nX3N3aXRjaE9uLnBuZ2AgOiBcImdhbWUvaW1nX3N3aXRoT2ZmLnBuZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc291bmRDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5zb3VuZE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBjb25zdCBpY29uID0gYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGxldCBzb3VuZCA9IENvcmUuYXVkaW8uc291bmRNdXRlZDtcclxuICAgICAgICBpY29uLnggPSAhc291bmQgPyAtMTQgOiA5MTtcclxuICAgICAgICBpY29uLnNraW4gPSAhc291bmQgPyBgZ2FtZS9pbWdfbXVzaWNPbkJ0bi5wbmdgIDogXCJnYW1lL2ltZ19tdXNpY09mZkJ0bi5wbmdcIjtcclxuICAgICAgICBib3guc2tpbiA9ICFzb3VuZCA/IGBnYW1lL2ltZ19zd2l0Y2hPbi5wbmdgIDogXCJnYW1lL2ltZ19zd2l0aE9mZi5wbmdcIjtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgRmVlZEJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGZWVkRGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1OTk3Mlx1NjU5OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogRmVlZEJhc2U7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU5NTAxXHU1QjlBICovXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG59XHJcbi8qKlxyXG4gKiBcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIEZlZWRTZXJ2aWNlIHtcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIGxpc3Q6IEZlZWREYXRhQmFzZVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY1NzBcdTYzNkVcdTUyMURcdTU5Q0JcdTUzMTZcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJmZWVkXCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBkLFxyXG4gICAgICAgICAgICAgICAgbG9jazogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRmVlZFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBGZWVkQmFzZSwgUGxhbnRCYXNlLCBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcInNyYy9jb21tb24vVG9vbHNcIjtcclxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBGZWVkU2VydmljZSwgeyBGZWVkRGF0YUJhc2UgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0ZlZWRTZXJ2aWNlXCI7XHJcbmltcG9ydCBQZXRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZVwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hvcFZpZXdEYXRhIHtcclxuICAgIC8qKiBcdTc1NENcdTk3NjJ0YWdcdTRFMEJcdTY4MDdpZCAqL1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTY1NzBcdTYzNkUgKi9cclxuICAgIHBhcm0/OiBhbnk7XHJcbiAgICBjYWxsPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0bkJveFRvcCwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NTIxN1x1ODg2OFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYnRuQm94VG9wOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpib3R0b21Cb3gsIHRpcHM6XCJcdTVFOTVcdTkwRThcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJvdHRvbUJveDogTGF5YS5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NzlDRFx1NUI1MFxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNlZWREZXNjLCB0aXBzOlwiXHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzZWVkRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bWF0dXJlVGltZSwgdGlwczpcIlx1NjIxMFx1NzE5Rlx1NjVGNlx1OTVGNFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbWF0dXJlVGltZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bWF0dXJlR2FpbkJveCwgdGlwczpcIlx1NjUzNlx1NzZDQVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbWF0dXJlR2FpbkJveDogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9ja0J0bkJveCwgdGlwczpcIlx1ODlFM1x1OTUwMVx1NjMwOVx1OTRBRVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9ja0J0bkJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1CdXlCdG4sIHRpcHM6XCJcdThEMkRcdTRFNzBcdTYzMDlcdTk0QUVcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1CdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU5OTcyXHU2NTk5XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmVlZEJ1eUJ0biwgdGlwczpcIlx1OTk3Mlx1NjU5OVx1OEQyRFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZmVlZEJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmVlZERlc2MsIHRpcHM6XCJcdTk5NzJcdTY1OTlcdTYzQ0ZcdThGRjBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZlZWREZXNjOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NUJBMFx1NzI2OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldEljb24sIHRpcHM6XCJcdTVCQTBcdTcyNjlpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXREZXNjLCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXREZXNjOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXROYW1lLCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU1NDBEXHU3OUYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXROYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp2aXRhbGl0eU1heCwgdGlwczpcIlx1NEY1M1x1NTI5Qlx1NEUwQVx1OTY1MFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdml0YWxpdHlNYXg6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldEJ1eUJ0biwgdGlwczpcIlx1OEQyRFx1NEU3MFx1NUJBMFx1NzI2OVx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0QnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb1dhdGNoLCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU3NzBCXHU1QkI2XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb1dhdGNoOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb1Jlc3QsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTRGMTFcdTYwNkZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGdvUmVzdDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTk0QjFcdTVFODRcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaWFtb25kRm9udCwgdGlwczpcIlx1NzUyOFx1NjIzN1x1OTRCQlx1NzdGM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZGlhbW9uZEZvbnQ6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlTGlzdCwgdGlwczpcIlx1OTRCMVx1NUU4NFx1NjNEMFx1NzNCMFx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTY1ODdcdTVCNTdcdThENDRcdTZFOTBcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgYnRuVG9wUmVzTGlzdDogc3RyaW5nW11bXSA9IFtcclxuICAgICAgICBbXCJnYW1lL2ltZ19zZWVkc05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19zZWVkc1NlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19wZXROb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfcGV0U2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX2Zvb2RuTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX2Zvb2RuU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX2JhbmtOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfYmFua1NlbGVjdGVkLnBuZ1wiXSxcclxuICAgIF07XHJcbiAgICAvKiogXHU5ODc2XHU5MEU4XHU1MjA3XHU2MzYyXHU2ODA3XHU3QjdFXHU5MDA5XHU2MkU5XHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHRvcEJ0blNlbGVjdEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTU0Nlx1NTRDMVx1NTIxN1x1ODg2OFx1NzBCOVx1NTFGQlx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdFNlbGVjdEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTU0Nlx1NTRDMVx1NTIxN1x1ODg2OFx1ODBDQ1x1NjY2Rlx1N0VCOVx1NzQwNiAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsZWN0Qmc6IHN0cmluZ1tdID0gW1wiZ2FtZS9pbWdfcGV0YmFnTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3BldGJhZ1NlbGVjdGVkLnBuZ1wiXTtcclxuXHJcbiAgICAvKiogXHU1RjUzXHU1MjREXHU5MDA5XHU2MkU5XHU3Njg0XHU1QkEwXHU3MjY5XHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHNlbGVjdFBldEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkYXRhOiBTaG9wVmlld0RhdGE7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0ZpcnN0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3Quc2VsZWN0SGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5vblNlbGVjdCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZVByaWNlSXRlbSk7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3Quc2VsZWN0SGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5vblByaWNlU2VsZWN0KTtcclxuXHJcbiAgICAgICAgQ29yZS5vYnNlcnZhYmxlUHJvcGVydHkud2F0Y2goVXNlckluZm8sIHRoaXMpLmtleShcImRpYW1vbmRcIiwgKHYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaWFtb25kRm9udC52YWx1ZSA9IHY7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQoZTogU2hvcFZpZXdEYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICB0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID0gZT8uaWQgfHwgMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvcEJ0blN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTkwMDlcdTRFMkRcdTY1RjZcdTc2ODRcdTRFMEJcdTY4MDdcclxuICAgICAqIEBwYXJhbSBlIFx1OTAwOVx1NEUyRFx1NzY4NFx1NEUwQlx1NjgwN1xyXG4gICAgICovXHJcbiAgICBvblNlbGVjdChlKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4ID0gZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NzlDRFx1NUI1MFx1NjIxNlx1OTk2RVx1NjU5OVx1NTIxN1x1ODg2OFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXREYXRhTGlzdCgpIHtcclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQbGFudFNlcnZpY2UubGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIUZlZWRTZXJ2aWNlLmxpc3QubGVuZ3RoKSBGZWVkU2VydmljZS5pbml0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBGZWVkU2VydmljZS5saXN0LnNvcnQoKGEsIGIpID0+IGEuYmFzZS52aXRhbGl0eSAtIGIuYmFzZS52aXRhbGl0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTMyXHU2N0QzXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU3Njg0XHU1MjE3XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gY2VsbCBcdTUyMTdcdTg4NjhcdTgyODJcdTcwQjlcclxuICAgICAqIEBwYXJhbSBpbmRleCBcdTRFMEJcdTY4MDdcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlSXRlbShjZWxsOiBMYXlhLkltYWdlLCBpbmRleCkge1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5nZXREYXRhTGlzdCgpW2luZGV4XTtcclxuICAgICAgICBsZXQgcHJpY2VCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiaGJveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgbG9ja0ljb24gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwibG9ja19pY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaWYgKCFkKSByZXR1cm4gY29uc29sZS53YXJuKFwiXHU2NTcwXHU2MzZFXHU0RTIyXHU1OTMxXCIpO1xyXG4gICAgICAgIGlmIChkLmxvY2spIHtcclxuICAgICAgICAgICAgbG9ja0ljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByaWNlQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcHJpY2VCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9ja0ljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsb2NrSWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcHJpY2VCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByaWNlQm94LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgaWNvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gKDxQbGFudEJhc2U+ZC5iYXNlKS5zZWVkX3ByaWNlLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9ICg8UGxhbnRCYXNlPmQuYmFzZSkuc2VlZF9wcmljZS5vYmouaWNvbjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3QuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIChwcmljZUJveC5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGNvdW50ICsgXCJcIjtcclxuICAgICAgICAgICAgKHByaWNlQm94LmdldENoaWxkQnlOYW1lKFwiZ29sZF9pY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBpY29uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmJhc2UuaWNvbjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGQuYmFzZS5uYW1lO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT0gdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzFdO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdERlc2MoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjZWxsLnNraW4gPSB0aGlzLml0ZW1TZWxlY3RCZ1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTRGNEVcdTkwRThcdUZGMENcdTkwMDlcdTYyRTlcdTcyNjlcdTU0QzFcdTY1RjZcdTc2ODRcdTY1NzBcdTYzNkVcdTY2M0VcdTc5M0FcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3REZXNjKCkge1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF07XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgLy9cdTk5NzJcdTY1OTlcclxuICAgICAgICAgICAgKHRoaXMuc2VlZERlc2MucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZERlc2MudGV4dCA9IGQuYmFzZS5kZXNjLnJlcGxhY2UoXCImXCIsICg8RmVlZEJhc2U+ZC5iYXNlKS52aXRhbGl0eSArIFwiXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmZlZWREZXNjLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgYm94ID0gdGhpcy5mZWVkQnV5QnRuLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xyXG4gICAgICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5jb3VudCArIFwiXCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU3OUNEXHU1QjUwXHJcbiAgICAgICAgbGV0IGJhc2UgPSBkLmJhc2UgYXMgUGxhbnRCYXNlO1xyXG4gICAgICAgICh0aGlzLnNlZWREZXNjLnBhcmVudCBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mZWVkRGVzYy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWVkRGVzYy50ZXh0ID0gYmFzZS5kZXNjO1xyXG4gICAgICAgIHRoaXMubWF0dXJlVGltZS50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyhiYXNlLm1hdHVyZV90aW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1CdXlCdG4udmlzaWJsZSA9ICFkLmxvY2s7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9ja0J0bkJveC52aXNpYmxlID0gZC5sb2NrO1xyXG4gICAgICAgIHRoaXMubG9ja0J0bkJveC5hY3RpdmUgPSBkLmxvY2s7XHJcbiAgICAgICAgbGV0IGdhaW5MaXN0ID0gYmFzZS5nYWluO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQm94ID0gdGhpcy5tYXR1cmVHYWluQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgICAgICBpY29uID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgIGdhaW5EYXRhID0gZ2Fpbkxpc3RbeCAtIDFdO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBiYXNlLmhhcnZlc3Q7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gYmFzZS5pY29uO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhaW5EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gZ2FpbkRhdGEub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGdhaW5EYXRhLmNvdW50ICogYmFzZS5oYXJ2ZXN0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAoaXRlbUJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGljb247XHJcbiAgICAgICAgICAgIChpdGVtQm94LmdldENoaWxkQnlOYW1lKFwiY291bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IFwieFwiICsgY291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYm94ID0gdGhpcy5sb2NrQnRuQm94LmdldENoaWxkQnlOYW1lKFwidW5sb2NrX2J1eVwiKS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuXHJcbiAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGJhc2UudW5sb2NrX2Nvc3Q/Lm9iaj8uaWNvbjtcclxuICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBiYXNlLnVubG9ja19jb3N0Py5jb3VudCArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwic2VlZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicGV0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJmZWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYW5rXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wQnRuSW5kZXggPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEluZGV4KGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ICE9IHRvcEJ0bkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IE51bWJlcih0b3BCdG5JbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL1x1NjRBRFx1NzlDRFxyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFNvdyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInNvd1wiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLnBhcm0/LmxhbmRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0uYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiBSZXR1cm5Vc2VySW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCh0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL1x1NUU3Rlx1NTQ0QVx1ODlFM1x1OTUwMVx1RkYwQ1x1NjIxNlx1NjYyRlx1OTFEMVx1NUUwMVx1ODlFM1x1OTUwMVxyXG4gICAgICAgICAgICBjYXNlIFwidW5sb2NrX2J1eVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYWRfdW5sb2NrXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5zZWVkc1VubG9jayxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInNlZWRzVW5sb2NrXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0uYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUgPT0gXCJhZF91bmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlQURcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZDogUmV0dXJuVXNlckluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxhbnRTZXJ2aWNlLmxpc3RbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XS5sb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuY2hhbmdlSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYW50U2VydmljZS5saXN0W3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwiYWRfdW5sb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0UGV0SW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCA9IFBldFNlcnZpY2UubGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdFBldEluZGV4ID49IFBldFNlcnZpY2UubGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBldF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0QnV5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX3dhdGNoXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBldEdvV2F0Y2goUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdLmJhc2UuaWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19yZXN0XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OUVEOFx1OEJBNFx1NEY2OVx1NjIzNFx1N0IyQ1x1NEUwMFx1NEUyQVx1NUJBMFx1NzI2OVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRHb1dhdGNoKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmZWVkX2J1eVwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTk5NzJcdTY1OTlcdThEMkRcdTRFNzBcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJ1eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmVlZEJ1eSgpIHtcclxuICAgICAgICBsZXQgZmVlZCA9IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdIGFzIEZlZWREYXRhQmFzZTtcclxuICAgICAgICBpZiAoIWZlZWQpIHJldHVybjtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICBhcGk6IEFwaUh0dHAuZmVlZEJ1eSxcclxuICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJmZWVkQnV5XCJdPntcclxuICAgICAgICAgICAgICAgIGZlZWRJZDogZmVlZC5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbDogKGQ6IFJldHVyblVzZXJJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSArPSBmZWVkLmJhc2Uudml0YWxpdHk7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMuZmVlZEJ1eUJ0biBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IGZlZWQuYmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdEZseTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1QkEwXHU3MjY5XHU1M0JCXHU3NzBCXHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGV0R29XYXRjaChwZXRJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnBldFdlYXIsXHJcbiAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wicGV0QnV5XCJdPntcclxuICAgICAgICAgICAgICAgIHBldElkOiBwZXRJZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGw6IChkOiBSZXR1cm5Vc2VySW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ud2FyZVBldElkID0gcGV0SWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEQyRFx1NEU3MFx1NUJBMFx1NzI2OVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBldEJ1eSgpIHtcclxuICAgICAgICBsZXQgeyBiYXNlIH0gPSBQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF07XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnBldEJ1eSxcclxuICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJwZXRCdXlcIl0+e1xyXG4gICAgICAgICAgICAgICAgcGV0SWQ6IGJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsOiAoZDogUmV0dXJuVXNlckluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgIFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XS5sb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8ud2FyZVBldElkKSBVc2VySW5mby53YXJlUGV0SWQgPSBiYXNlLmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5wZXRWaXRhbGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gYmFzZS52aXRhbGl0eV9tYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gQ29uZmlnR2FtZS5wZXREaWdlc3RJbnRlcnZhbFRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTcwQjlcdTUxRkJcdTcwQjlcdTUxRkJcdTcyQjZcdTYwMDFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVUb3BCdG5TdGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYnRuQm94VG9wLm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuYnRuQm94VG9wLmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgICAgIGxiID0gYnRuLmdldENoaWxkQXQoMCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgaWYgKHggPT09IHRoaXMudG9wQnRuU2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZy1tZW51c2VsZWN0ZWQucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBsYi5za2luID0gdGhpcy5idG5Ub3BSZXNMaXN0W3hdWzFdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nLW1lbnVub3JtYWwucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBsYi5za2luID0gdGhpcy5idG5Ub3BSZXNMaXN0W3hdWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUJvdHRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1RTk1XHU5MEU4XHU1MTg1XHU1QkI5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQm90dG9tKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5ib3R0b21Cb3gubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKHgsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGl0ZW1CdXlCb3ggPSB0aGlzLml0ZW1CdXlCdG4ucGFyZW50IGFzIExheWEuQm94O1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IC8vXHU3OUNEXHU1QjUwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQZXRPckZlZWRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8vXHU5OTcyXHU2NTk5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQZXRPckZlZWRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgyLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VMaXN0LmFycmF5ID0gWywgMSwgMSwgMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTVCQTBcdTcyNjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVQZXQoKSB7XHJcbiAgICAgICAgaWYgKCFQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoKSBQZXRTZXJ2aWNlLmluaXQoW10pO1xyXG4gICAgICAgIGxldCBwZXQgPSBQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF07XHJcbiAgICAgICAgdGhpcy5wZXRJY29uLnNraW4gPSBwZXQuYmFzZS5pY29uO1xyXG4gICAgICAgIHRoaXMucGV0TmFtZS50ZXh0ID0gcGV0LmJhc2UubmFtZTtcclxuICAgICAgICB0aGlzLnBldERlc2MudGV4dCA9IHBldC5iYXNlLmRlc2M7XHJcbiAgICAgICAgdGhpcy52aXRhbGl0eU1heC52YWx1ZSA9IHBldC5iYXNlLnZpdGFsaXR5X21heCArIFwiXCI7XHJcbiAgICAgICAgbGV0IGJ0bl9ib3ggPSB0aGlzLnBldEJ1eUJ0bi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKGJ0bl9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBwZXQuYmFzZS5jb3N0Lm9iai5pY29uO1xyXG4gICAgICAgIChidG5fYm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBwZXQuYmFzZS5jb3N0LmNvdW50ICsgXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IHBldEJveCA9IHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoMSksXHJcbiAgICAgICAgICAgIGZpbmRCb3ggPSBwZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5kX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgYmFja19ib3ggPSBwZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgc3Rhckljb246IExheWEuSW1hZ2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4KyspIHtcclxuICAgICAgICAgICAgc3Rhckljb24gPSBmaW5kQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgc3Rhckljb24udmlzaWJsZSA9IHggKiAyMCA8IHBldC5iYXNlLnNlbnNpdGl2ZTtcclxuICAgICAgICAgICAgc3Rhckljb24uc2tpbiA9XHJcbiAgICAgICAgICAgICAgICB4ICogMjAgKyAxMCA8IHBldC5iYXNlLnNlbnNpdGl2ZSA/IFwiZ2FtZS9pbWdfc3Rhci5wbmdcIiA6IFwiZ2FtZS9pbWdfaGFsZnN0YXIucG5nXCI7XHJcbiAgICAgICAgICAgIHN0YXJJY29uID0gYmFja19ib3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi52aXNpYmxlID0geCAqIDIwIDwgcGV0LmJhc2UuYWJpbGl0eTtcclxuICAgICAgICAgICAgc3Rhckljb24uc2tpbiA9XHJcbiAgICAgICAgICAgICAgICB4ICogMjAgKyAxMCA8IHBldC5iYXNlLmFiaWxpdHkgPyBcImdhbWUvaW1nX3N0YXIucG5nXCIgOiBcImdhbWUvaW1nX2hhbGZzdGFyLnBuZ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGV0LmxvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wZXRCdXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ29SZXN0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nb1dhdGNoLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8ud2FyZVBldElkID09IHBldC5iYXNlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoUGV0U2VydmljZS5nZXRVbmxvY2tMZW4oKSA9PT0gMSB8fCBVc2VySW5mby53YXJlUGV0SWQgPT09IDEwMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29XYXRjaC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvV2F0Y2gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucGV0QnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkxQ0RcdTdGNkVcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNldFBldE9yRmVlZExpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmdldERhdGFMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTRFMkRcdTk1RjRcdTUxODVcdTVCQjlcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTUyMDdcdTYzNjJcclxuICAgICAqIEBwYXJhbSBpIFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQ2VudGVyQm94U3RhdGUoaTogbnVtYmVyLCBzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoaSkgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KGkpIGFzIExheWEuQm94KS5hY3RpdmUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5NEIxXHU1RTg0XHU5MDA5XHU2MkU5XHJcbiAgICAgKiBAcGFyYW0gZSBcdTRFMEJcdTY4MDdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvblByaWNlU2VsZWN0KGU6IG51bWJlcikge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTRCMVx1NUU4NFx1NjU3MFx1NjM2RVx1NkUzMlx1NjdEM1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVByaWNlSXRlbShjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wcmljZUxpc3Quc2VsZWN0ZWRJbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBcImdhbWUvaW1nX3ByaWNlc2VsZWN0ZWQucG5nXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID0gXCJnYW1lL2ltZ19wcmljZW5vcm1hbC5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5cclxuLy8gIFNpZ25JblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzaWduSW5MaXN0LCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgc2lnbkluTGlzdDogTGF5YS5MaXN0O1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzaWduSW5Qcm9ncmVzc0xiLCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgc2lnbkluUHJvZ3Jlc3NMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzaWduSW5Qcm9ncmVzc0JhciwgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1Njc2MVwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25JblByb2dyZXNzQmFyOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByb2dyZXNzRGVzYywgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1NjU4N1x1NUI1N1x1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHByb2dyZXNzRGVzYzogTGF5YS5MYWJlbDtcclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMuc2lnbkluTGlzdC5hcnJheSA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5saXN0O1xyXG4gICAgICAgIHRoaXMuc2lnbkluTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaWduSW5MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlSXRlbSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gVXNlckluZm8uc3BlZWRVcFRpbWVzIC8gQ29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lcztcclxuICAgICAgICBpZiAoc2NhbGUgPiAxKSBzY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5zaWduSW5Qcm9ncmVzc0Jhci53aWR0aCA9IDk3NyAqIHNjYWxlO1xyXG4gICAgICAgIHRoaXMuc2lnbkluUHJvZ3Jlc3NMYi50ZXh0ID0gVXNlckluZm8uc2lnbkluRGF5cyArIFwiXCI7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Rlc2MudGV4dCA9IGBcdTRFQ0FcdTY1RTVcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdUZGMDhcdTRGN0ZcdTc1Mjgke1VzZXJJbmZvLnNwZWVkVXBUaW1lc30vJHtDb25maWdHYW1lLkFEU3BlZWRVcFRpbWVzfVx1NkIyMVx1NTJBMFx1OTAxRlx1RkYwOWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtKGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBiYXIgPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIG9iaiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5saXN0W2ldO1xyXG4gICAgICAgIGxldCBzY2FsZSA9IFVzZXJJbmZvLnNpZ25JbkRheXMgLyBvYmouZGF5cztcclxuICAgICAgICBpZiAoc2NhbGUgPiAxKSBzY2FsZSA9IDE7XHJcbiAgICAgICAgYmFyLndpZHRoID0gNTAyICogc2NhbGU7XHJcbiAgICAgICAgY29uc3QgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IG9iai5yZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImFtb3VudFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke29iai5yZXdhcmQuY291bnR9YDtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJzaWduX2RheXNcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTdCN0VcdTUyMzAke29iai5kYXlzfVx1NTkyOWA7XHJcblxyXG4gICAgICAgIGxldCBza2luOiBzdHJpbmcgPSBcIlwiLFxyXG4gICAgICAgICAgICBidG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZ2V0X2J0blwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGJ0bi5kYXRhU291cmNlID0gb2JqLmlkO1xyXG4gICAgICAgIGlmIChvYmouaWQgPiBVc2VySW5mby5zaWduSW5JZCkge1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LnkgPSAxMDM7XHJcbiAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfZG9uZS5wbmdgO1xyXG5cclxuICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnNpZ25JbkRheXMgPj0gb2JqLmRheXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uc2lnbkluSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmlkID09IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5saXN0WzBdLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfZ2V0LnBuZ2A7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmlkIC0gVXNlckluZm8uc2lnbkluSWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2dldC5wbmdgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfcmVjZWl2ZWQucG5nYDtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bi5za2luID0gc2tpbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ2V0X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTk4ODZcdTUzRDZcdTU5NTZcdTUyQjFcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWduSW5JZCA9IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5zaWduSW5SZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVBRCwgc2lnbkluSWQ6IHNpZ25JbklkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IHsgYWR2ZXJ0aXNlVGltZXM6IG51bWJlcjsgc3BlZWRVcFRpbWVzOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5zaWduSW5JZCA9IHNpZ25JbklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25Jbkxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkID0gVGFibGVBbmFseXplLnRhYmxlKFwic2lnbkluXCIpLmdldChzaWduSW5JZCkucmV3YXJkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBlLnRhcmdldCBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHJld2FyZC5vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IHJld2FyZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgPyAxIDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9kZWZhdWx0IGNsYXNzIFNwZWVkVXBWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVlZFVwVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGltZUxiLCB0aXBzOlwiXHU1MkEwXHU5MDFGXHU2NUY2XHU5NUY0XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0aW1lTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGltZXNMYiwgdGlwczpcIlx1NTE2OFx1NEY1M1x1NTJBMFx1OTAxRlx1NTI2OVx1NEY1OVx1NkIyMVx1NjU3MFx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGltZXNMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzcGVlZFVwQnRuLCB0aXBzOlwiXHU1MTY4XHU0RjUzXHU1MkEwXHU5MDFGXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzcGVlZFVwQnRuOiBMYXlhLkxhYmVsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIGxldCB0aW1lID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcImFsbF9zcGVlZF91cF90aW1lXCIpLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICB0aGlzLnRpbWVMYi50ZXh0ID0gYCR7TWF0aC5jZWlsKHRpbWUgLyA2MCl9XHU1MjA2XHU5NDlGYDtcclxuICAgICAgICB0aGlzLnRpbWVzTGIudGV4dCA9IGBcdTRFQ0FcdTY1RTVcdTUyNjlcdTRGNTkke1VzZXJJbmZvLmFkdmVydGlzZVRpbWVzfVx1NkIyMWA7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFVwQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TcGVlZFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNwZWVkX3VwXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kU3BlZWRVcCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFEIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IHsgYWR2ZXJ0aXNlVGltZXM6IG51bWJlcjsgc3BlZWRVcFRpbWVzOiBudW1iZXIgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5zcGVlZFVwVGltZXMgPSBkLnNwZWVkVXBUaW1lcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPSBkLmFkdmVydGlzZVRpbWVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9PSBDb25maWdHYW1lLkFEU3BlZWRVcFRpbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5zaWduSW5EYXlzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU3BlZWRVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5sYW5kX3NwZWVkX3VwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uIH0gZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4uL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuLi9jb3JlL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvbk9iaiB7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExaWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1QjhDXHU2MjEwICovXHJcbiAgICBvazogYm9vbGVhbjtcclxufVxyXG5cclxuLy8gIFRhc2tWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRhc2tMaXN0LCB0aXBzOlwiXHU0RUZCXHU1MkExXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0YXNrTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRhc2tMaXN0KCk7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLml0ZW1SZW5kZXIpO1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRhc2tMaXN0KCkge1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QuYXJyYXkgPSBUYXNrU2VydmljZS5nZXRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtUmVuZGVyKGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgb2JqID0gVGFza1NlcnZpY2UubGlzdFtpXS5iYXNlO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrU2VydmljZS5nZXRUYXNrKG9iai5pZCk7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmouaWNvbjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBvYmoudGl0bGU7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiZGVzY1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7b2JqLmRlc2N9KCR7XHJcbiAgICAgICAgICAgICh0YXNrPy50aW1lcyA+IG9iai50aW1lcyA/IG9iai50aW1lcyA6IHRhc2s/LnRpbWVzKSB8fCAwXHJcbiAgICAgICAgfS8ke29iai50aW1lc30pYDtcclxuXHJcbiAgICAgICAgY29uc3QgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gb2JqLnJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiYW1vdW50XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcInhcIiArIG9iai5yZXdhcmQuY291bnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJnb19ydW5cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuT2JqOiBCdXR0b25PYmogPSB7XHJcbiAgICAgICAgICAgIGlkOiBvYmouaWQsXHJcbiAgICAgICAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1x1NURGMlx1OTg4Nlx1NTNENlxyXG4gICAgICAgIGlmICh0YXNrPy5yZWNlaXZlKSB7XHJcbiAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ190b21hcm93LnBuZ1wiO1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL1x1NTNFRlx1OTg4Nlx1NTNENlxyXG4gICAgICAgICAgICBpZiAodGFzaz8udGltZXMgPj0gb2JqLnRpbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfZ2V0LnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnRuT2JqLm9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ19kb25lLnBuZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IGJ0bk9iajtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX3J1blwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bk9iajogQnV0dG9uT2JqID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChidG5PYmoub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1ODNCN1x1NTNENlx1NTk1Nlx1NTJCMVxyXG4gICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC50YXNrUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFELCB0YXNrSWQ6IGJ0bk9iai5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZDogeyBnb2xkOiAwOyBkaWFtb25kOiAwOyBhZHZlcnRpc2VUaW1lczogMCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gVGFza1NlcnZpY2UuZ2V0VGFzayhidG5PYmouaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5yZWNlaXZlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk9iai5vayA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhc2tMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX3Rhc2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHRhc2suYmFzZS5yZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRhc2suYmFzZS5yZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKGJ0bk9iai5pZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGp1bXAoaWQsIHRhcmdldCkge1xyXG4gICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgICAgY2FzZSAxMDAxOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IHsgZ29sZDogMDsgZGlhbW9uZDogMDsgYWR2ZXJ0aXNlVGltZXM6IDAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDAyOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA1OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA4OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA5OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxMDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMTE6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDEyOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBQbGFudFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UsIHsgV2FyZUhvdXNlRGF0YSB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG4vKipcclxuICogXHU0RUQzXHU1RTkzXHJcbiAqL1xyXG4vL0ZpZWxkTGV2ZWxVcFZpZXcgV2FyZWhvdXNlVmlldyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhcmVob3VzZVZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU3MjY5XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTmFtZSwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbU5hbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1EZXNjLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxXHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUljb24sIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxDb3VudExiLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxXHU1MUZBXHU1NTJFXHU2NTcwXHU5MUNGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsbENvdW50TGI6IExheWEuVGV4dElucHV0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbEJveCwgdGlwczpcIlx1NTFGQVx1NTUyRVx1NzI2OVx1NTRDMVx1NEVGN1x1NjgzQ1x1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxCb3g6IExheWEuSEJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxHb2xkLCB0aXBzOlwiXHU5MUQxXHU1RTAxXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsbEdvbGQ6IExheWEuSEJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxEaWFtb25kLCB0aXBzOlwiXHU5NEJCXHU3N0YzXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsbERpYW1vbmQ6IExheWEuSEJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2VsbEJ0biwgdGlwczpcIlx1NTFGQVx1NTUyRVx1NzY4NGljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNlbGxCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNlbGxBZEJ0biwgdGlwczpcIlx1NTFGQVx1NTUyRVx1NzY4NGljb24gXHU1RTdGXHU1NDRBXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzZWxsQWRCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgZGF0YUxpc3Q6IFdhcmVIb3VzZURhdGFbXVtdID0gW107XHJcbiAgICAvKiogXHU5MDA5XHU0RTJEXHU3Njg0XHU3MjY5XHU1NEMxIFx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtSW5kZXg6IHN0cmluZyA9IFwiMCwwXCI7XHJcbiAgICAvKiogXHU5MDA5XHU0RTJEXHU3Njg0XHU3MjY5XHU1NEMxXHU2NTcwXHU2MzZFICovXHJcbiAgICBwcml2YXRlIHNlbGVjdEl0ZW1EYXRhOiBXYXJlSG91c2VEYXRhO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NTFGQVx1NTUyRVx1NzI2OVx1NTRDMVx1NzY4NFx1NjU3MFx1OTFDRiAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtU2VsbENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTM1NVx1NEVGNyBcdTkxRDFcdTVFMDEgKi9cclxuICAgIHByaXZhdGUgdW5pdFByaWNlR29sZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUzNTVcdTRFRjcgXHU5NEJCXHU3N0YzICovXHJcbiAgICBwcml2YXRlIHVuaXRQcmljZURpYW1vbmQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5kYWthaWNhbmdrdSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJJdGVtTGlzdCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZURlc2MobnVsbCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxHb2xkLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsRGlhbW9uZC5yZW1vdmVTZWxmKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLm9uKExheWEuRXZlbnQuSU5QVVQsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gTnVtYmVyKHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA+IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMaXN0KCkge1xyXG4gICAgICAgIGxldCBpID0gMCxcclxuICAgICAgICAgICAgeSA9IDA7XHJcbiAgICAgICAgV2FyZWhvdXNlU2VydmljZS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGFMaXN0W3ldKSB0aGlzLmRhdGFMaXN0W3ldID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUxpc3RbeV0ucHVzaChkKTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBpZiAoaSA+IDIpIHtcclxuICAgICAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgeSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmRhdGFMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVySXRlbUxpc3QoY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhTGlzdFtpXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoYGl0ZW1fJHt4fWApIGFzIExheWEuQm94O1xyXG4gICAgICAgICAgICBpZiAoZGF0YVt4XSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGF0YVNvdXJjZSA9IGAke2l9LCR7eH1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGljb24gPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5za2luID0gZGF0YVt4XS5iYXNlLmljb247XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikgYXMgTGF5YS5MYWJlbFxyXG4gICAgICAgICAgICAgICAgKS50ZXh0ID0gYCR7ZGF0YVt4XS5iYXNlLm5hbWV9XyR7ZGF0YVt4XS5jb3VudH1gO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMuaXRlbUxpc3Quc2VsZWN0ZWRJbmRleCAmJiB0aGlzLnNlbGVjdEl0ZW1JbmRleCA9PSBpdGVtLmRhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKGljb24sIHsgeTogMCB9LCAxNTAsIG51bGwsIG51bGwsIG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1EYXRhID0gZGF0YVt4XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlc2MoZGF0YVt4XSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGljb24ueSA9IDU2O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpY29uLnkgIT0gNTYpIExheWEuVHdlZW4udG8oaWNvbiwgeyB5OiA1NiB9LCAxNTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8wXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzFcIjpcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtSW5kZXggPSBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTsgLy8gXHU4RkQ5XHU5MUNDXHU5NzAwXHU4OTgxXHU0RjE4XHU1MzE2XHU3M0IwXHU1NzI4XHU1MDVBXHU3Njg0XHU2NjJGXHU1MjM3XHU2NUIwXHU2NTc0XHU0RTJBXHU1MjE3XHU4ODY4XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID4gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVkdWNlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQtLTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPCAxKSB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2VsbEJ0bkFkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWxsQnRuXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC53YXJlaG91c2VTZWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wid2FyZWhvdXNlU2VsbFwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNlbGVjdEl0ZW1EYXRhLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQubmFtZSA9PSBcInNlbGxCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZDogUmV0dXJuVXNlckluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5yZWR1Y2VBbW91bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1EYXRhLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5kYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVzYyhudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJld2FyZExpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXRQcmljZUdvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5nb2xkSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXRQcmljZUdvbGQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZS50YXJnZXQubmFtZSA9PSBcInNlbGxCdG5BZFwiID8gMiA6IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0UHJpY2VEaWFtb25kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZGlhbW9uZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0UHJpY2VEaWFtb25kICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUudGFyZ2V0Lm5hbWUgPT0gXCJzZWxsQnRuQWRcIiA/IDIgOiAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwic2VsbEJ0bkFkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLnNlbGxCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTFGQVx1NTFGQVx1NTUyRVx1NEZFMVx1NjA2Rlx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZURlc2MoZDogV2FyZUhvdXNlRGF0YSkge1xyXG4gICAgICAgIGlmICghZCkge1xyXG4gICAgICAgICAgICAodGhpcy5pdGVtSWNvbi5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKHRoaXMuaXRlbUljb24ucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbERpYW1vbmQucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxHb2xkLnJlbW92ZVNlbGYoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtSWNvbi5za2luID0gZC5iYXNlLmljb247XHJcbiAgICAgICAgdGhpcy5pdGVtTmFtZS50ZXh0ID0gZC5iYXNlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5pdGVtRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2M7XHJcbiAgICAgICAgbGV0IHByaWNlR29sZDogUmV3YXJkQ3VycmVuY3lCYXNlLCBwcmljZURpYW1vbmQ6IFJld2FyZEN1cnJlbmN5QmFzZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGQuYmFzZS5nYWluLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQuYmFzZS5nYWluW3hdKTtcclxuICAgICAgICAgICAgaWYgKCFkLmJhc2UuZ2Fpblt4XS5jb3VudCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChkLmJhc2UuZ2Fpblt4XS5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQpIHtcclxuICAgICAgICAgICAgICAgIHByaWNlR29sZCA9IGQuYmFzZS5nYWluW3hdO1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXRlbVNlbGxHb2xkLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID1cclxuICAgICAgICAgICAgICAgICAgICBkLmJhc2UuZ2Fpblt4XS5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGxCb3guYWRkQ2hpbGQodGhpcy5pdGVtU2VsbEdvbGQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJpY2VEaWFtb25kID0gZC5iYXNlLmdhaW5beF07XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pdGVtU2VsbERpYW1vbmQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgICAgIGQuYmFzZS5nYWluW3hdLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsbEJveC5hZGRDaGlsZCh0aGlzLml0ZW1TZWxsRGlhbW9uZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IE1hdGguY2VpbChkLmNvdW50IC8gMik7XHJcbiAgICAgICAgdGhpcy51bml0UHJpY2VHb2xkID0gcHJpY2VHb2xkPy5jb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudW5pdFByaWNlRGlhbW9uZCA9IHByaWNlRGlhbW9uZD8uY291bnQgfHwgMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1M0VGXHU0RUU1XHU1MUZBXHU1NTJFXHU3Njg0XHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlU2VsZWN0U2VsbENvdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQgPSB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKyBcIlwiO1xyXG4gICAgICAgICh0aGlzLml0ZW1TZWxsR29sZC5nZXRDaGlsZEJ5TmFtZShcInByaWNlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKiB0aGlzLnVuaXRQcmljZUdvbGQgKyBcIlwiO1xyXG4gICAgICAgICh0aGlzLml0ZW1TZWxsRGlhbW9uZC5nZXRDaGlsZEJ5TmFtZShcInByaWNlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKiB0aGlzLnVuaXRQcmljZURpYW1vbmQgKyBcIlwiO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblwiXG5pbXBvcnQgVmlld1Nob3dBbmkgZnJvbSBcIi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiXG5pbXBvcnQgQWRkTGFuZFZpZXcgZnJvbSBcIi4vdmlldy9BZGRMYW5kVmlld1wiXG5pbXBvcnQgQnV5Vml0YWxpdHlWaWV3IGZyb20gXCIuL3ZpZXcvQnV5Vml0YWxpdHlWaWV3XCJcbmltcG9ydCBGaWVsZExldmVsVXBWaWV3IGZyb20gXCIuL3ZpZXcvRmllbGRMZXZlbFVwVmlld1wiXG5pbXBvcnQgRnJpZW5kc0Rlc2NWaWV3IGZyb20gXCIuL3ZpZXcvRnJpZW5kc0Rlc2NWaWV3XCJcbmltcG9ydCBGcmllbmRzUmV3YXJkVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNSZXdhcmRWaWV3XCJcbmltcG9ydCBGcmllbmRzVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNWaWV3XCJcbmltcG9ydCBIaW50VmlldyBmcm9tIFwiLi92aWV3L0hpbnRWaWV3XCJcbmltcG9ydCBMb2dpblZpZXcgZnJvbSBcIi4vdmlldy9Mb2dpblZpZXdcIlxuaW1wb3J0IE1haWxWaWV3IGZyb20gXCIuL3ZpZXcvTWFpbFZpZXdcIlxuaW1wb3J0IE1haW5WaWV3IGZyb20gXCIuL3ZpZXcvTWFpblZpZXdcIlxuaW1wb3J0IEZpZWxkQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIlxuaW1wb3J0IE9yZGVyVmlldyBmcm9tIFwiLi92aWV3L09yZGVyVmlld1wiXG5pbXBvcnQgT3ZlclZpZXcgZnJvbSBcIi4vdmlldy9PdmVyVmlld1wiXG5pbXBvcnQgU2V0dGluZ1ZpZXcgZnJvbSBcIi4vdmlldy9TZXR0aW5nVmlld1wiXG5pbXBvcnQgU2hvcFZpZXcgZnJvbSBcIi4vdmlldy9TaG9wVmlld1wiXG5pbXBvcnQgU2lnbkluVmlldyBmcm9tIFwiLi92aWV3L1NpZ25JblZpZXdcIlxuaW1wb3J0IFNwZWVkVXBWaWV3IGZyb20gXCIuL3ZpZXcvU3BlZWRVcFZpZXdcIlxuaW1wb3J0IFRhc2tWaWV3IGZyb20gXCIuL3ZpZXcvVGFza1ZpZXdcIlxuaW1wb3J0IFdhcmVob3VzZVZpZXcgZnJvbSBcIi4vdmlldy9XYXJlaG91c2VWaWV3XCJcclxuLypcclxuKiBcdTZFMzhcdTYyMEZcdTUyMURcdTU5Q0JcdTUzMTZcdTkxNERcdTdGNkU7XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTEwODA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xOTIwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cIm1pZGRsZVwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJjZW50ZXJcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9CdXR0b24udHNcIixCdXR0b24pO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL1ZpZXdTaG93QW5pLnRzXCIsVmlld1Nob3dBbmkpO1xuICAgICAgICByZWcoXCJ2aWV3L0FkZExhbmRWaWV3LnRzXCIsQWRkTGFuZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0J1eVZpdGFsaXR5Vmlldy50c1wiLEJ1eVZpdGFsaXR5Vmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRmllbGRMZXZlbFVwVmlldy50c1wiLEZpZWxkTGV2ZWxVcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNEZXNjVmlldy50c1wiLEZyaWVuZHNEZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHNcIixGcmllbmRzUmV3YXJkVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1ZpZXcudHNcIixGcmllbmRzVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvSGludFZpZXcudHNcIixIaW50Vmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTG9naW5WaWV3LnRzXCIsTG9naW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9NYWlsVmlldy50c1wiLE1haWxWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9NYWluVmlldy50c1wiLE1haW5WaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9GaWVsZENvbXBvbmVudC50c1wiLEZpZWxkQ29tcG9uZW50KTtcbiAgICAgICAgcmVnKFwidmlldy9PcmRlclZpZXcudHNcIixPcmRlclZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L092ZXJWaWV3LnRzXCIsT3ZlclZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NldHRpbmdWaWV3LnRzXCIsU2V0dGluZ1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1Nob3BWaWV3LnRzXCIsU2hvcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NpZ25JblZpZXcudHNcIixTaWduSW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TcGVlZFVwVmlldy50c1wiLFNwZWVkVXBWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9UYXNrVmlldy50c1wiLFRhc2tWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9XYXJlaG91c2VWaWV3LnRzXCIsV2FyZWhvdXNlVmlldyk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwgImltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwiLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCIuL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCIuL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCIuL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcIi4vY29yZS9BcHBcIjtcclxuY2xhc3MgTWFpbiB7XHJcbiAgICAvKiogXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcdTUyMTdcdTg4NjggKi9cclxuICAgIHN0YXRpYyBjdXN0b21SZW5kZXJJRDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1x1NjgzOVx1NjM2RUlERVx1OEJCRVx1N0Y2RVx1NTIxRFx1NTlDQlx1NTMxNlx1NUYxNVx1NjRDRVxyXG4gICAgICAgIGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuICAgICAgICBlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuICAgICAgICBMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcbiAgICAgICAgLy9cdTUxN0NcdTVCQjlcdTVGQUVcdTRGRTFcdTRFMERcdTY1MkZcdTYzMDFcdTUyQTBcdThGN0RzY2VuZVx1NTQwRVx1N0YwMFx1NTczQVx1NjY2RlxyXG4gICAgICAgIExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcbiAgICAgICAgLy9cdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDhcdTkwMUFcdThGQzdJREVcdThCQkVcdTdGNkVcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdUZGMENcdTYyMTZcdTgwMDV1cmxcdTU3MzBcdTU3NDBcdTU4OUVcdTUyQTBkZWJ1Zz10cnVlXHU1M0MyXHU2NTcwXHVGRjBDXHU1NzQ3XHU1M0VGXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA5XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcbiAgICAgICAgTGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYmdDb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG5cclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1OEQ0NFx1NkU5MFx1NzI0OFx1NjcyQ1x1NjNBN1x1NTIzNlx1RkYwQ3ZlcnNpb24uanNvblx1NzUzMUlERVx1NTNEMVx1NUUwM1x1NTI5Rlx1ODBGRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NEU1Rlx1NEUwRFx1NUY3MVx1NTRDRFx1NTQwRVx1N0VFRFx1NkQ0MVx1N0EwQlxyXG4gICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksXHJcbiAgICAgICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT05cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1NTkyN1x1NUMwRlx1NTZGRVx1NjYyMFx1NUMwNFx1RkYwQ1x1NTJBMFx1OEY3RFx1NUMwRlx1NTZGRVx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NTNEMVx1NzNCMFx1NUMwRlx1NTZGRVx1NTcyOFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1OTFDQ1x1OTc2Mlx1RkYwQ1x1NTIxOVx1NEYxOFx1NTE0OFx1NTJBMFx1OEY3RFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1RkYwQ1x1ODAwQ1x1NEUwRFx1NjYyRlx1NUMwRlx1NTZGRVxyXG4gICAgICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXHJcbiAgICAgICAgICAgIFwiZmlsZWNvbmZpZy5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ29uZmlnTG9hZGVkKCkge1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHJcbiAgICAgICAgQ29uZmlnW1wiY3VzdG9tUmVuZGVySURcIl0gPSBbXTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LmluaXQoQ29uZmlnR2FtZS5iYXNlVXJsKTtcclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2dpbl9nYW1lLCB0aGlzLCB0aGlzLmxvZ2luR2FtZSk7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIudXNlQXVkaW9NdXNpYyA9IGZhbHNlO1xyXG4gICAgICAgIEFwcENvcmUubGlzdGVuQXBwRnVuY3Rpb24oKTtcclxuXHJcbiAgICAgICAgLy8gVmlld01hbmFnZXIuaW5zdC5pbml0KCk7XHJcblxyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihSZXMudmlld3MuTG9naW5WaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0R2FtZURhdGEoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5jbG9zZUltYWdlLCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMYXlhLlZpZXcuc2V0TG9hZGluZ1BhZ2UoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL1x1NTQwRVx1NjcxRlx1NEYxOFx1NTMxNlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBMYXlhLlZpZXcuc2hvd0xvYWRpbmdQYWdlKG51bGwsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDk5OTk5OTk5OTk5OTk5OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkdhbWUoKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgUmVzLnNjZW5lcyxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVzLnNjZW5lcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5TXVzaWMoUmVzLmF1ZGlvcy5CR00sIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0R2FtZURhdGEoZDogTmV0SW5pdCkge31cclxufVxyXG4vL1x1NkZDMFx1NkQzQlx1NTQyRlx1NTJBOFx1N0M3QlxyXG5uZXcgTWFpbigpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR08sTUFBVztBQUFYLFlBQVcsWUFBWDtBQUVILGtDQUFnQjtBQUdoQixpQ0FBZTtBQUdmLGlDQUFlO0FBR2Ysa0NBQWdCO0FBR2hCLCtCQUFhO0FBRWIsOEJBQVk7QUFFWixnQ0FBYztBQXNCZCxvQ0FBa0I7QUFFbEIsdUNBQXFCO0FBRXJCLG1DQUFpQjtBQUFBLEtBNUNIO0FBa0RYLE1BQVc7QUFBWCxZQUFXLGNBQVg7QUFFSCx5QkFBSztBQUVMLGlDQUFhO0FBRWIsOEJBQVU7QUFFVixxQ0FBaUI7QUFFakIsOEJBQVU7QUFFVixpQ0FBYTtBQUFBLEtBWkM7OztBQ2hEVixNQUFLO0FBQUwsWUFBSyxRQUFMO0FBR0EsNEJBQWM7QUFFZCxnQ0FBa0I7QUFFbEIsaUNBQW1CO0FBRW5CLGdDQUFrQjtBQUVsQixrQ0FBb0I7QUFF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SyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsS0FBSSxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLEtBQUksYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLEtBQUksYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxzQ0FBb0MsUUFBTyxJQUFHLGFBQVksQ0FBQyxFQUFDLE1BQUssR0FBRSxVQUFTLFVBQVMsUUFBTyxVQUFTLFFBQU8sUUFBTSxFQUFDLE1BQUssR0FBRSxV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
