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
  (function(EventMaps2) {
    EventMaps2["load_progress"] = "load_progress";
    EventMaps2["update_field"] = "update_field";
    EventMaps2["update_Order"] = "update_Order";
    EventMaps2["land_speed_up"] = "land_speed_up";
    EventMaps2["login_game"] = "login_game";
    EventMaps2["login_out"] = "login_out";
    EventMaps2["update_task"] = "update_task";
    EventMaps2["play_get_reward"] = "play_get_reward";
    EventMaps2["play_ad_get_reward"] = "play_ad_get_reward";
    EventMaps2["go_friend_home"] = "go_friend_home";
  })(EventMaps || (EventMaps = {}));
  var AppEventMap;
  (function(AppEventMap2) {
    AppEventMap2["ad"] = "ad";
    AppEventMap2["wxLogin"] = "wxLogin";
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
    playMusic(url, loops, complete, startTime) {
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
        alert(JSON.stringify(d));
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
              if (xmlhttp.responseText)
                this.completeHandler(JSON.parse(xmlhttp.responseText));
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
      this.userInput = null;
      this.test_btn = null;
      this.loadBarOldWidth = 0;
    }
    onOpened(d) {
      var _a;
      this.data = d;
      if ((_a = LocalStorageService_default.getJSON()) == null ? void 0 : _a.isLogin) {
        this.login(false);
        this.loginBox.visible = false;
        this.loadBox.visible = true;
        this.userInput.visible = false;
        this.test_btn.visible = false;
      } else {
        this.loginBox.visible = true;
        this.loadBox.visible = false;
        this.userInput.visible = false;
        this.test_btn.visible = false;
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
              this.test_btn.visible = false;
            },
            error: (code, data) => {
              LocalStorageService_default.clear();
              this.loginBox.visible = true;
              this.test_btn.visible = true;
              this.loadBox.visible = false;
              this.userInput.visible = true;
            }
          });
        } else {
          console.log(isWx);
          let wxOpenId = null, nickname = "", avatar = "";
          if (isWx) {
            const data = yield AppCore.runAppFunction({
              uri: AppEventMap.wxLogin,
              data: {},
              timestamp: Date.now()
            });
            console.log(data);
            if (!data) {
              core_default.view.openHint({ text: "\u672A\u83B7\u53D6\u5230\u5FAE\u4FE1id", call: () => {
              } });
              return;
            }
            wxOpenId = data.data["openid"];
            avatar = data.data["iconurl"];
            nickname = data.data["name"];
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
              this.test_btn.visible = false;
              this.loadBox.visible = true;
            },
            error: (code, data) => {
              LocalStorageService_default.clear();
              this.loginBox.visible = true;
              this.test_btn.visible = true;
              this.loadBox.visible = false;
              this.userInput.visible = true;
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
      switch (id) {
        case 1001:
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvcmUvQXVkaW9Db250cm9sLnRzIiwgIi4uLy4uL3NyYy9jb3JlL2luZGV4LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi50cyIsICIuLi8uLi9zcmMvY29tbW9uL0NvbmZpZ0dhbWUudHMiLCAiLi4vLi4vc3JjL2NvcmUvQXBwLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVGFibGUudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Ub29scy50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlQW5hbHl6ZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9QZXRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vTmV0TWFwcy50cyIsICIuLi8uLi9zcmMvY29tbW9uL0h0dHBEYXRhQ29udHJvbC50cyIsICIuLi8uLi9zcmMvY29tbW9uL0h0dHBDb250cm9sLnRzIiwgIi4uLy4uL3NyYy92aWV3L0FkZExhbmRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0J1eVZpdGFsaXR5Vmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GaWVsZExldmVsVXBWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZyaWVuZHNEZXNjVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GcmllbmRzUmV3YXJkVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GcmllbmRzVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9IaW50Vmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9Mb2dpblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpbFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvT3JkZXJWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L092ZXJWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NldHRpbmdWaWV3LnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9GZWVkU2VydmljZS50cyIsICIuLi8uLi9zcmMvdmlldy9TaG9wVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TaWduSW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NwZWVkVXBWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1Rhc2tWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1dhcmVob3VzZVZpZXcudHMiLCAiLi4vLi4vc3JjL0dhbWVDb25maWcudHMiLCAiLi4vLi4vc3JjL01haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxyXG4gKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjZcdTU0MERcdTc5RjBcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEV2ZW50TWFwcyB7XHJcbiAgICAvKiogbG9hZCBcdTc1NENcdTk3NjJcdThGREJcdTg4NENcdTY2RjRcdTY1QjAgKi9cclxuICAgIGxvYWRfcHJvZ3Jlc3MgPSBcImxvYWRfcHJvZ3Jlc3NcIixcclxuXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU1NzFGXHU1NzMwICovXHJcbiAgICB1cGRhdGVfZmllbGQgPSBcInVwZGF0ZV9maWVsZFwiLFxyXG5cclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTRFM0JcdTk4NzVcdThCQTJcdTUzNTVcdTY1NzBcdTYzNkUgKi9cclxuICAgIHVwZGF0ZV9PcmRlciA9IFwidXBkYXRlX09yZGVyXCIsXHJcblxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NTJBMFx1OTAxRiAqL1xyXG4gICAgbGFuZF9zcGVlZF91cCA9IFwibGFuZF9zcGVlZF91cFwiLFxyXG5cclxuICAgIC8qKiBcdThGREJcdTUxNjVcdTZFMzhcdTYyMEYgKi9cclxuICAgIGxvZ2luX2dhbWUgPSBcImxvZ2luX2dhbWVcIixcclxuICAgIC8qKiBcdTkwMDBcdTUxRkFcdTZFMzhcdTYyMEYgKi9cclxuICAgIGxvZ2luX291dCA9IFwibG9naW5fb3V0XCIsXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExICovXHJcbiAgICB1cGRhdGVfdGFzayA9IFwidXBkYXRlX3Rhc2tcIixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjRBRFx1NjUzRVx1ODNCN1x1NUY5N1x1NTk1Nlx1NTJCMVx1NTJBOFx1NzUzQlxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICB7XHJcbiAgICAgICAgLy9cdTk3MDBcdTg5ODFcdTk4REVcdTkxRDFcdTVFMDFcdTc2ODRcdTUzQzJcdTgwMDNcdTgyODJcdTcwQjlcclxuICAgICAgICBub2RlOiB0aGlzLm93bmVyLFxyXG4gICAgICAgIC8vXHU4OTgxXHU5OERFXHU3Njg0XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL1x1ODlFM1x1Njc5MFx1NTk3RFx1NzY4NFx1NUUyNmljb25cdTc2ODRcdTY1NzBcdTYzNkVcclxuICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KDEwMDEpLFxyXG4gICAgICAgICAgICAgICAgLy9cdTY1NzBcdTkxQ0ZcclxuICAgICAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgICAgICAgIC8vXHU4OTgxXHU5OERFXHU1M0JCXHU3Njg0XHU0RjREXHU3RjZFIDEgXHU5MUQxXHU1RTAxIDIgXHU5NEJCXHU3N0YzXHJcbiAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH1cclxuICAgICAqL1xyXG4gICAgcGxheV9nZXRfcmV3YXJkID0gXCJwbGF5X2dldF9yZXdhcmRcIixcclxuICAgIC8qKiBcdTc3MEJcdTVFN0ZcdTU0NEFcdTY0QURcdTY1M0VcdTU5NTZcdTUyQjFcdTgzQjdcdTgzQjdcdTVGOTdcdTUyQThcdTc1M0IgIFx1NEYyMFx1NTE2NVx1ODI4Mlx1NzBCOSAqL1xyXG4gICAgcGxheV9hZF9nZXRfcmV3YXJkID0gXCJwbGF5X2FkX2dldF9yZXdhcmRcIixcclxuICAgIC8qKiBcdTUzQkJcdTU5N0RcdTUzQ0JcdTVCQjYgKi9cclxuICAgIGdvX2ZyaWVuZF9ob21lID0gXCJnb19mcmllbmRfaG9tZVwiLFxyXG59XHJcblxyXG4vKipcclxuICogXHU0RTBFYXBwXHU0RUE0XHU0RTkyXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBcHBFdmVudE1hcCB7XHJcbiAgICAvKiogXHU3NzBCXHU1RTdGXHU1NDRBICovXHJcbiAgICBhZCA9IFwiYWRcIixcclxuICAgIC8qKiBcdTVGQUVcdTRGRTFcdTc2N0JcdTVGNTUgKi9cclxuICAgIHd4TG9naW4gPSBcInd4TG9naW5cIixcclxuICAgIC8qKiBcdTVGQUVcdTRGRTFcdTUyMDZcdTRFQUIgKi9cclxuICAgIHd4U2hhcmUgPSBcInd4U2hhcmVcIixcclxuICAgIC8qKiBcdTUzQ0JcdTc2REZcdTRFOEJcdTRFRjZcdTdFREZcdThCQTEgXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGIHt0eXBlOlx1NUJGOVx1NUU5NFx1ODk4MVx1N0VERlx1OEJBMVx1NzY4NFx1NzBCOX0gKi9cclxuICAgIGV2ZW50Q291bnQgPSBcImV2ZW50Q291bnRcIixcclxufVxyXG4iLCAiLy9cdTRFRTNcdTc4MDFcdTc1MUZcdTYyMTBcdUZGMENcdTRFMERcdTg5ODFcdTYyNEJcdTUyQThcdTRGRUVcdTY1MzlcblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBlbnVtIHZpZXdzIFxuICAgIHtcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZSAqL1xuICAgICAgICBBZGRMYW5kVmlldyA9IFwic2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0J1eVZpdGFsaXR5Vmlldy5zY2VuZSAqL1xuICAgICAgICBCdXlWaXRhbGl0eVZpZXcgPSBcInNjZW5lcy92aWV3cy9CdXlWaXRhbGl0eVZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBGaWVsZExldmVsVXBWaWV3ID0gXCJzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GcmllbmRzRGVzY1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc0Rlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZyaWVuZHNSZXdhcmRWaWV3LnNjZW5lICovXG4gICAgICAgIEZyaWVuZHNSZXdhcmRWaWV3ID0gXCJzY2VuZXMvdmlld3MvRnJpZW5kc1Jld2FyZFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRnJpZW5kc1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc1ZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9IaW50Vmlldy5zY2VuZSAqL1xuICAgICAgICBIaW50VmlldyA9IFwic2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZSAqL1xuICAgICAgICBMb2dpblZpZXcgPSBcInNjZW5lcy92aWV3cy9Mb2dpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpbFZpZXcgPSBcInNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZSAqL1xuICAgICAgICBNYWluVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZSAqL1xuICAgICAgICBPcmRlclZpZXcgPSBcInNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvT3ZlclZpZXcuc2NlbmUgKi9cbiAgICAgICAgT3ZlclZpZXcgPSBcInNjZW5lcy92aWV3cy9PdmVyVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZSAqL1xuICAgICAgICBTZXR0aW5nVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NldHRpbmdWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lICovXG4gICAgICAgIFNob3BWaWV3ID0gXCJzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZSAqL1xuICAgICAgICBTaWduSW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBTcGVlZFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NwZWVkVXBWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lICovXG4gICAgICAgIFRhc2tWaWV3ID0gXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZSAqL1xuICAgICAgICBXYXJlaG91c2VWaWV3ID0gXCJzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZVwiLCBcbiAgICB9XG5cbiBleHBvcnQgZW51bSBhdWRpb3MgXG4gICAge1xuICAgICAgICAvKiogYXVkaW8vemhvbmd6aGkubXAzICovXG4gICAgICAgIHpob25nemhpID0gXCJyZXMvYXVkaW8vemhvbmd6aGkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vdHVkaXNoZW5namkubXAzICovXG4gICAgICAgIHR1ZGlzaGVuZ2ppID0gXCJyZXMvYXVkaW8vdHVkaXNoZW5namkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vc2hvdWNhaS5tcDMgKi9cbiAgICAgICAgc2hvdWNhaSA9IFwicmVzL2F1ZGlvL3Nob3VjYWkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZ291amlhb3NoZW5nLm1wMyAqL1xuICAgICAgICBnb3VqaWFvc2hlbmcgPSBcInJlcy9hdWRpby9nb3VqaWFvc2hlbmcubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZGFrYWljYW5na3UubXAzICovXG4gICAgICAgIGRha2FpY2FuZ2t1ID0gXCJyZXMvYXVkaW8vZGFrYWljYW5na3UubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vYnV0dG9uX2NsaWNrLm1wMyAqL1xuICAgICAgICBidXR0b25fY2xpY2sgPSBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vQkdNLm1wMyAqL1xuICAgICAgICBCR00gPSBcInJlcy9hdWRpby9CR00ubXAzXCIsIFxuICAgIH1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9XYXJlaG91c2VWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU3BlZWRVcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvT3ZlclZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9Mb2dpblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GcmllbmRzVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRnJpZW5kc1Jld2FyZFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNEZXNjVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvQnV5Vml0YWxpdHlWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0dldFJld2FyZC5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9GbG9hdFJld2FyZEljb24ucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvRmllbGRQcmVmYWIucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9jb21wb25lbnRzL0J1dHRvbi5wcmVmYWJcIixcbiAgICAgICAgICAgIFwicmVzL2xvYWRpbmdCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ193b29kdGl0bGUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmVIb3VzZUJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlYmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc2hlbGYucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfcG9wVXBCZ01haW4ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfcG9wVXBCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19sYW5kQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvdXNldG9wLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmczLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcyLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2Zhcm1sYW5kTG9nby5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL3NoYWRlci92cy52c1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3BzLmZzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby96aG9uZ3poaS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3R1ZGlzaGVuZ2ppLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vc2hvdWNhaS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2dvdWppYW9zaGVuZy5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2Rha2FpY2FuZ2t1Lm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vYnV0dG9uX2NsaWNrLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vQkdNLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BsYW50X2ljb24uYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BldF9mZWVkLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9tYWluX3NjZW5lLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5hdGxhc1wiXTtcbiAgICBcblxuLyoqXG4gKiBcdTYyNDBcdTY3MDlcdThENDRcdTZFOTBcbiAqL1xuY29uc3QgUmVzID0ge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBzY2VuZXM6IHNjZW5lcyxcbiAgICBhdWRpb3M6IGF1ZGlvcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcztcbiIsICIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5jb25zdCBFdmVudEdsb2JhbCA9IG5ldyBMYXlhLkV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1OEJBMlx1OTYwNVx1NEU4Qlx1NEVGNlx1NzY4NFx1N0M3Qlx1NzY4NFx1NTM5Rlx1NTc4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV2ZW50Q2xhc3M6IE1hcDxhbnksIHsga2V5OiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFdmVudE9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcbiAgICAgICAgaWYgKCFFdmVudENsYXNzLmdldCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIEV2ZW50Q2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBFdmVudENsYXNzLmdldCh0YXJnZXQpLnB1c2goeyBrZXk6IG5hbWUsIGZuOiBkZXNjcmlwdG9yLnZhbHVlIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1NUM1RVx1NjAyN1x1NjdFNVx1NjI3RVx1N0VEMVx1NUI5QVx1NTQwRFx1NzlGMFx1NzY4NFx1N0M3Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJpbmROYW1lQ2xhc3M6IE1hcDxhbnksIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRCeU5hbWUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIC8vICAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG5cclxuICAgIGlmICghQmluZE5hbWVDbGFzcy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgIEJpbmROYW1lQ2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgfVxyXG4gICAgQmluZE5hbWVDbGFzcy5nZXQodGFyZ2V0KS5wdXNoKHByb3BlcnR5S2V5KTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50R2xvYmFsO1xyXG4iLCAiY29uc3QgY2FsbGVyczogTWFwPGFueSwgRnVuY3Rpb25bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG5jbGFzcyBPYnNlcnZhYmxlQ29udHJvbDxjYWxsIGV4dGVuZHMgTGF5YS5TY3JpcHQ+IHtcclxuICAgIHByaXZhdGUga2V5RXZlbnRzOiBNYXA8YW55LCBNYXA8c3RyaW5nLCBGdW5jdGlvbltdPj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNcdTVDNUVcdTYwMjdcdTUwM0NcdTUzRDhcdTUzMTZcclxuICAgICAqICBbXHU1NzI4XHU3NTRDXHU5NzYyZGVzdHJveVx1NzY4NFx1NjVGNlx1NTAxOVx1NEYxQVx1ODFFQVx1NURGMVx1NkNFOFx1OTUwMFx1NzZEMVx1NTQyQ11cclxuICAgICAqIEBwYXJhbSBPYmogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHdhdGNoPFQgZXh0ZW5kcyB7fT4oT2JqOiBULCBjYWxsZXI6IGNhbGwpIHtcclxuICAgICAgICBpZiAoIWNhbGxlcnMuaGFzKGNhbGxlcikpIHtcclxuICAgICAgICAgICAgY2FsbGVycy5zZXQoY2FsbGVyLCBbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQga2V5RXZlbnQgPSB0aGlzLmtleUV2ZW50cztcclxuICAgICAgICBpZiAoIWtleUV2ZW50LmhhcyhPYmopKSB7XHJcbiAgICAgICAgICAgIGtleUV2ZW50LnNldChPYmosIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcdTc2ODRcdTVDNUVcdTYwMjdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUM1RVx1NjAyN1xyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsIFx1NTZERVx1OEMwM1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGtleUJpbmQgPSA8S2V5IGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLZXkgJiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfb2JqID0ga2V5RXZlbnQuZ2V0KE9iaik7XHJcbiAgICAgICAgICAgIGlmICghX29iai5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgX29iai5zZXQoa2V5LCBbXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqW1wiI1wiICsga2V5XSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmpbXCIjXCIgKyBrZXldID0gT2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iaiwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1wiI1wiICsga2V5XSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb2JqLmdldChrZXkpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCIjXCIgKyBrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbGwuYmluZChjYWxsKTtcclxuICAgICAgICAgICAgX29iai5nZXQoa2V5KS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGwoT2JqW2tleV0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NEYyMFx1NTE2NVx1NzY4NGNhbGxlclx1NTIyMFx1OTY2NFx1NUY1M1x1NTI0RFx1N0VEMVx1NUI5QVx1NzY4NFx1NjI0MFx1NjcwOVx1NzY4NFx1NEU4Qlx1NEVGNiBcdTYyMTZcdTYzMDdcdTVCOUFcdTg5RTNcdTUxQjNcdTZBMjFcdTRFMkFcdTVCRjlcdThDNjFcdThEREZcdTVGNTNcdTUyNERjYWxsZXJcdTdFRDFcdTVCOUFcdTc2ODRcdTc2RDFcdTU0MkNcclxuICAgICAqIEBwYXJhbSBjYWxsZXIgXHU3NkQxXHU1NDJDXHU2NUY2XHU3RUQxXHU1QjlBXHU3Njg0XHU1NzNBXHU2NjZGXHU1QkY5XHU4QzYxXHJcbiAgICAgKiBAcGFyYW0gb2JqIFx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICByZW1vdmVCeUNhbGxlcihjYWxsZXI6IGNhbGwsIG9iajogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcik/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmdldChvYmopLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBrLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9ic2VydmFibGVDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgRXZlbnRHbG9iYWwsIHsgQmluZE5hbWVDbGFzcywgRXZlbnRDbGFzcyB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcblxyXG4vKipcclxuICogXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyaXB0IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvL0V2ZW50T25cdTg4QzVcdTk5NzBcdTU2NjhcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUFcclxuICAgICAgICBsZXQgYmluZEV2ZW50ID0gRXZlbnRDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIGJpbmRFdmVudD8uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBFdmVudEdsb2JhbC5vbihkLmtleSwgdGhpcywgZC5mbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRBd2FrZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25Bd2FrZSgpIHtcclxuICAgICAgICAvL1x1N0VEOVx1ODhDNVx1OTk3MFx1NTY2OFx1OEJCMFx1NUY1NVx1NzY4NFx1NUM1RVx1NjAyN1x1RkYwQ1x1NjdFNVx1NjI3RVx1ODI4Mlx1NzBCOVxyXG4gICAgICAgIEJpbmROYW1lQ2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2VdID0gdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uSGRBd2FrZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU0RjIwXHU1MTY1XHU1M0MyXHU2NTcwXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqIEBwYXJhbSBlXHJcbiAgICAgKi9cclxuICAgIG9uT3BlbmVkKGUpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTZGQzBcdTZEM0JcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCNjRcdTY1RjZcdTYyNDBcdTY3MDlcdTgyODJcdTcwQjlcdTU0OENcdTdFQzRcdTRFRjZcdTU3NDdcdTVERjJcdTUyMUJcdTVFRkFcdTVCOENcdTZCRDVcdUZGMENcdTZCMjFcdTY1QjlcdTZDRDVcdTUzRUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkQXdha2UoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRW5hYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRFbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NTQyRlx1NzUyOFx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1ODI4Mlx1NzBCOVx1ODhBQlx1NkRGQlx1NTJBMFx1NTIzMFx1ODIxRVx1NTNGMFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkU3RhcnRcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkU3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QjJDXHU0RTAwXHU2QjIxXHU2MjY3XHU4ODRDdXBkYXRlXHU0RTRCXHU1MjREXHU2MjY3XHU4ODRDXHVGRjBDXHU1M0VBXHU0RjFBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFN0YXJ0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFVwZGF0ZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCQ0ZcdTVFMjdcdTY2RjRcdTY1QjBcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTVDM0RcdTkxQ0ZcdTRFMERcdTg5ODFcdTU3MjhcdThGRDlcdTkxQ0NcdTUxOTlcdTU5MjdcdTVGQUFcdTczQUZcdTkwM0JcdThGOTFcdTYyMTZcdTgwMDVcdTRGN0ZcdTc1MjhnZXRDb21wb25lbnRcdTY1QjlcdTZDRDVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkVXBkYXRlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERpc2FibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGREaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTc5ODFcdTc1MjhcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTRFQ0VcdTgyODJcdTcwQjlcdTRFQ0VcdTgyMUVcdTUzRjBcdTc5RkJcdTk2NjRcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGlzYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREZXN0cm95XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25IZERlc3Ryb3koKTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NkUwNVx1OTY2NFx1OERERlx1NUY1M1x1NTI0RFx1N0M3Qlx1N0VEMVx1NUI5QVx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1ODlDMlx1NUJERlx1NjVCOVx1NkNENVxyXG4gICAgICAgICAgICBPYnNlcnZhYmxlUHJvcGVydHkucmVtb3ZlQnlDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIC8vXHU5NTAwXHU2QkMxXHU2NUY2XHU2RTA1XHU5NjY0XHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU1RjE1XHU3NTI4XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0ga2V5cy5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5c1t4XV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNEJcdTUyQThcdThDMDNcdTc1MjhcdTgyODJcdTcwQjlcdTk1MDBcdTZCQzFcdTY1RjZcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGVzdHJveSgpIHt9XHJcblxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiBcdTc1NENcdTk3NjJcdTYyNTNcdTVGMDBcdTRFRTVcdTU0MEVcdTVFMjZcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcclxuICAgIC8vICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgLy8gICovXHJcbiAgICAvLyBvbk9wZW5lZChkKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coMTExKTtcclxuICAgIC8vIH1cclxufVxyXG4iLCAiaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuXHJcbi8vY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U2hvd0FuaSBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJnLCB0aXBzOlwiXHU4MENDXHU2NjZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGJnOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb250ZW50LCB0aXBzOlwiXHU1MTg1XHU1QkI5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTphbmlUeXBlLHRpcHM6XCJcdTUyQThcdTc1M0JcdTdDN0JcdTU3OEJcIix0eXBlOkVkaXRPcHRpb24sb3B0aW9uOlwiYm90dG9tVG9TaG93LHNjYWxlU2hvd1wifSovXHJcbiAgICAvLyBcdThGRDRcdTU2REVcdTVCNTdcdTdCMjZcdTRFMzJcclxuICAgIGFuaVR5cGU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHR3ZWVuTGlzdDogTGF5YS5Ud2VlbltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9PcGVuKCkge31cclxuICAgIC8qKlxyXG4gICAgICogIFx1NTE3M1x1OTVFRFx1NjIxMFx1NTI5Rlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb0Nsb3NlKCkge31cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcblxyXG4gICAgICAgIHRoaXMuYmcuYWxwaGEgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAuNzUgfSxcclxuICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxlU2hvd1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLmZyb20oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMiwgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLCBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5ib3R0b20gPSAtdGhpcy5jb250ZW50LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJvdHRvbTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5jaXJjT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VWaWV3KCkge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY2FsZVNob3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVg6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVk6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAtdGhpcy5jb250ZW50LmhlaWdodCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi5jbGVhcihlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipcclxuICogXHU1QjlFXHU0RjhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jb25zdCBpbnN0YW5jZUxpc3Q6IE1hcDxudW1iZXIsIHsgbmV3ICgpOiB2b2lkIH0+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NzY4NGlkXHJcbiAqL1xyXG5sZXQgaW5zdGFuY2VJZDogbnVtYmVyID0gMTAwO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhbmNlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCFpbnN0YW5jZUxpc3QuaGFzKHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdKSkge1xyXG4gICAgICAgIGluc3RhbmNlSWQrKztcclxuICAgICAgICB0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSA9IGluc3RhbmNlSWQ7XHJcbiAgICAgICAgaW5zdGFuY2VMaXN0LnNldChpbnN0YW5jZUlkLCBuZXcgdGFyZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0W2tleV0gPSBpbnN0YW5jZUxpc3QuZ2V0KGluc3RhbmNlSWQpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IHsgSGludFZpZXdEYXRhIH0gZnJvbSBcInNyYy92aWV3L0hpbnRWaWV3XCI7XHJcbmltcG9ydCBPdmVyVmlldyBmcm9tIFwic3JjL3ZpZXcvT3ZlclZpZXdcIjtcclxuaW1wb3J0IFJlcywgeyB2aWV3cyB9IGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU5NzAwXHU4OTgxXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAqL1xyXG5pbnRlcmZhY2UgVmlld09wZW5QYXJtIHtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyICovXHJcbiAgICBzaG93TG9hZD86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCAqL1xyXG4gICAgc2hvd0xvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTk2OTBcdTg1Q0Zsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0IFx1OUVEOFx1OEJBNDAgKi9cclxuICAgIGhpZGVMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1MTczXHU5NUVEXHU1MTc2XHU0RUQ2XHU1NzNBXHU2NjZGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBdHJ1ZVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVx1RkYwQ1x1MzAxMFx1NkNFOFx1NjEwRlx1MzAxMVx1ODhBQlx1NTE3M1x1OTVFRFx1NzY4NFx1NTczQVx1NjY2Rlx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1OEJCRVx1N0Y2RWF1dG9EZXN0cm95QXRSZW1vdmVkPXRydWVcdUZGMENcdTUyMTlcdThENDRcdTZFOTBcdTUzRUZcdTgwRkRcdTRFMERcdTgwRkRcdTg4QUJcdTU2REVcdTY1MzZcdUZGMENcdTk3MDBcdTg5ODFcdTgxRUFcdTVERjFcdTYyNEJcdTUyQThcdTU2REVcdTY1MzZcclxuICAgICAqIHRvZG8gXHU3M0IwXHU1NzI4XHU4RkQ5XHU0RTJBXHU4QzAzXHU3NTI4XHU3Njg0XHU2NjJGXHU1RjE1XHU2NENFXHU4MUVBXHU1RTI2XHU3Njg0XHU2NUI5XHU2Q0Q1XHVGRjBDXHU2Q0ExXHU2NzA5XHU4RDcwXHU4RkQ5XHU5MUNDXHU3Njg0XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0VGXHU4MEZEXHU0RjFBXHU2NzA5XHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgKiBcdTczQjBcdTU3MjhcdTUxNjhcdTY2MkZmYWxzZSBcdTU0MEVcdTY3MUZcdTY3MDlcdTk3MDBcdTg5ODFcdTUxOERcdTRGMThcdTUzMTZcdThGRDlcdTRFMkFcdTRFMUNcdTg5N0ZcdUZGMENcdTRFMERcdTgwRkRcdTUxNzNcdTk1RURcdTUxNzZcdTVCODNcdTYyNDBcdTY3MDlcdTc1NENcdTk3NjJcdThGRDhcdTY3MkFcdTVCOUVcdTczQjBcclxuICAgICAqL1xyXG4gICAgY2xvc2VPdGhlcj86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHBhcm0/OiBhbnk7XHJcbiAgICAvKiogIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBjb21wbGV0ZT86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1NTJBMFx1OEY3RFx1OEZEQlx1NUVBNlx1NTZERVx1OEMwM1x1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcHJvZ3Jlc3M/OiBIYW5kbGVyO1xyXG59XHJcblxyXG5jb25zdCB2aWV3TWFwczogeyB1cmw6IHN0cmluZzsgdmlldzogTGF5YS5WaWV3IH1bXSA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpZXdNYW5hZ2VyIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IFZpZXdNYW5hZ2VyO1xyXG5cclxuICAgIGxvZ2luT3V0KCkge1xyXG4gICAgICAgIHZpZXdNYXBzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgdi52aWV3LmdldENvbXBvbmVudHMoTGF5YS5TY3JpcHQpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHU1NkRFXHU1OTM0XHU4OTgxXHU0RjE4XHU1MzE2XHU0RTAwXHU0RTBCXHU1MTc2XHU1QjgzXHU3NTRDXHU5NzYyXHU3Njg0XHU1MTczXHU5NUVEXHVGRjBDXHU4RkQ5XHU5MUNDXHU2NjJGXHU0RTBEXHU2NjJGXHU2NzA5XHU1NDBDXHU2ODM3XHU3Njg0XHU5NUVFXHU5ODk4XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKGUpO1xyXG4gICAgICAgICAgICAgICAgZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh2LnZpZXcudXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2MlxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcdTUzQzJcdTY1NzBcclxuICAgICAqL1xyXG4gICAgb3BlbihcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGRhdGE6IFZpZXdPcGVuUGFybSA9IHtcclxuICAgICAgICAgICAgY2xvc2VPdGhlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWREZWxheTogMTAwLFxyXG4gICAgICAgICAgICBoaWRlTG9hZERlbGF5OiAwLFxyXG4gICAgICAgIH1cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm1pc3MgcGF0aCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnNob3dMb2FkKSB7XHJcbiAgICAgICAgICAgIExheWEuVmlldy5zaG93TG9hZGluZ1BhZ2UobnVsbCwgZGF0YS5zaG93TG9hZERlbGF5KTtcclxuICAgICAgICAgICAgaWYgKHVybCAhPT0gUmVzLnZpZXdzLkxvZ2luVmlldykge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoZGF0YS5oaWRlTG9hZERlbGF5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhLmNsb3NlT3RoZXIgPSBmYWxzZTtcclxuICAgICAgICBMYXlhLlZpZXcub3BlbihcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLmNsb3NlT3RoZXIsXHJcbiAgICAgICAgICAgIGRhdGEucGFybSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoZTogTGF5YS5WaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsICE9IFJlcy52aWV3cy5Mb2dpblZpZXcpIHZpZXdNYXBzLnB1c2goeyB1cmw6IHVybCwgdmlldzogZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29uTGlzdCA9IGUuZ2V0Q29tcG9uZW50cyhMYXlhLlNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbkxpc3QuZm9yRWFjaCgoZSkgPT4gZS5lbmFibGVkICYmIGUub25PcGVuZWQgJiYgZS5vbk9wZW5lZChkYXRhLnBhcm0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGEuY29tcGxldGUgJiYgZGF0YS5jb21wbGV0ZShlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgIGAlYyA9PT4gb3BlbiAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojN2VkNmRmO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojMjJhNmIzO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YS5wcm9ncmVzc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxNzNcdTk1RURcdTg5QzZcdTU2RkVcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGFsbCBcdTU0MENcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcdTg4QUIgXHU1OTFBXHU2QjIxXHU2MjUzXHU1RjAwXHVGRjBDXHU1MTY4XHU1MjIwXHU5NjY0XHU3NTI4XHU4RkQ5XHU0RTJBXHJcbiAgICAgKiBAcGFyYW0gZGVzdHJveSBcdTk1MDBcdTZCQzEgICBUT0RPXHVGRjA4XHU5RUQ4XHU4QkE0XHU0RjFBXHU5NTAwXHU2QkMxXHU2MjQwXHU2NzA5XHU1QjUwXHU4MjgyXHU3MEI5XHVGRjBDXHU2NzJBXHU2RDRCXHU4QkQ1XHU2NjJGXHU1NDI2XHU2NzA5XHU5NUVFXHU5ODk4XHVGRjA5XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNsb3NlKFxyXG4gICAgICAgIHVybDogdmlld3MsXHJcbiAgICAgICAgYWxsOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGFuaUNvbTogdHlwZW9mIFZpZXdTaG93QW5pIHwgdHlwZW9mIEZsb2F0Vmlld1Nob3dBbmkgPSBWaWV3U2hvd0FuaVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy9UT0RPIFx1OEZEOVx1OTFDQ1x1NzNCMFx1NTcyOFx1NTE2OFx1OTBFOFx1NzUyOGRlc3Ryb3kgXHU1RjE1XHU2NENFcmVtb3ZlXHU1OTdEXHU1MENGXHU2NzA5XHU3MEI5XHU5NUVFXHU5ODk4XHVGRjBDXHU1MThEXHU5MDFBXHU4RkM3dmlldy5vcGVuXHU0RjFBXHU5MUNEXHU2NUIwXHU2Nzg0XHU1RUZBXHU3RUM0XHU0RUY2XHJcbiAgICAgICAgZGVzdHJveSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB2QW5pOiBWaWV3U2hvd0FuaTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0gdmlld01hcHNbeF0udXJsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHZpZXdNYXBzW3hdO1xyXG4gICAgICAgICAgICAgICAgdmlld01hcHMuc3BsaWNlKHgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZBbmkgPSB2LnZpZXcuZ2V0Q29tcG9uZW50KGFuaUNvbSBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZBbmkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2QW5pLmNsb3NlVmlldygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy90b2RvXHU5NzAwXHU4OTgxXHU0RjE4XHU1MzE2XHVGRjBDXHU3NTRDXHU5NzYyXHU3Njg0bWFwXHU5NzAwXHU4OTgxXHU2NTc0XHU3NDA2XHU2MjEwXHVGRjBDXHU1MTY4XHU1QzRGXHU1NDhDXHU1RjM5XHU3QTk3XHU3Njg0XHU1MzNBXHU1MjJCXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBSZXMudmlld3MuSGludFZpZXcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHU0RkREXHU4QkMxXHU1OTgyXHU2NzlDXHU1NzNBXHU2NjZGXHU1QjhDXHU1MTY4XHU2Q0ExXHU2NzA5XHU3NTRDXHU5NzYyXHU4OEFCXHU2MjUzXHU1RjAwXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1RkM1XHU2MjUzXHU1RjAwXHU0RTNCXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgaWYgKCF2aWV3TWFwcy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBsZXQgY2xvc2VMZW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAoIXZpZXdNYXBzW3hdLnZpZXcucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUxlbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VMZW4gPT09IHZpZXdNYXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLk1haW5WaWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdNYXBzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVmlld0xvZyh1cmw6IHN0cmluZywgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlYyA8PT0gJHtkZXN0cm95ID8gXCJkZXN0cm95XCIgOiBcImRpc2FibGVcIn0gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNmZjc5Nzk7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuSGludChkYXRhOiBIaW50Vmlld0RhdGEpIHtcclxuICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLkhpbnRWaWV3LCB7IHBhcm06IGRhdGEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNThcdTc1NENcdTk3NjJcclxuICAgICAqL1xyXG4gICAgY2xlYXJWaWV3TWFwcygpIHtcclxuICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3ZlclZpZXdDb206IE92ZXJWaWV3O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1MTczXHU5NUVEXHU4RkM3XHU1RUE2XHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIHNldE92ZXJWaWV3KG9wZW46IGJvb2xlYW4sIGNhbGw/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuT3ZlclZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAodjogT3ZlclZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyVmlld0NvbSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuY2xvc2UoY2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJWaWV3Q29tKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJWaWV3Q29tLm9wZW4oY2FsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvQ29udHJvbCB7XHJcbiAgICBwbGF5U291bmQoXHJcbiAgICAgICAgdXJsOiBzdHJpbmcsXHJcbiAgICAgICAgbG9vcHM/OiBudW1iZXIsXHJcbiAgICAgICAgY29tcGxldGU/OiBIYW5kbGVyLFxyXG4gICAgICAgIHNvdW5kQ2xhc3M/OiBuZXcgKCkgPT4gYW55LFxyXG4gICAgICAgIHN0YXJ0VGltZT86IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKHVybCwgbG9vcHMsIGNvbXBsZXRlLCBzb3VuZENsYXNzLCBzdGFydFRpbWUpO1xyXG4gICAgfVxyXG4gICAgcGxheU11c2ljKHVybDogc3RyaW5nLCBsb29wcz86IG51bWJlciwgY29tcGxldGU/OiBIYW5kbGVyLCBzdGFydFRpbWU/OiBudW1iZXIpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5wbGF5TXVzaWModXJsLCBsb29wcywgY29tcGxldGUsIHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1NjI0MFx1NjcwOVx1OTdGM1x1NjU0OFx1RkYwOFx1NEUwRFx1NTMwNVx1NjJFQ1x1ODBDQ1x1NjY2Rlx1OTdGM1x1NEU1MFx1RkYwOVx1NjYyRlx1NTQyNlx1OTc1OVx1OTdGM1x1MzAwMiAqL1xyXG4gICAgc2V0IHNvdW5kTXV0ZWQoc3RhdGUpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zb3VuZE11dGVkID0gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBnZXQgc291bmRNdXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gTGF5YS5Tb3VuZE1hbmFnZXIuc291bmRNdXRlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MENDXHU2NjZGXHU5N0YzXHU0RTUwXHVGRjA4XHU0RTBEXHU1MzA1XHU2MkVDXHU5N0YzXHU2NTQ4XHVGRjA5XHU2NjJGXHU1NDI2XHU5NzU5XHU5N0YzICovXHJcbiAgICBzZXQgbXVzaWNNdXRlZChzdGF0ZSkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLm11c2ljTXV0ZWQgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIGdldCBtdXNpY011dGVkKCkge1xyXG4gICAgICAgIHJldHVybiBMYXlhLlNvdW5kTWFuYWdlci5tdXNpY011dGVkO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQXVkaW9Db250cm9sIGZyb20gXCIuL0F1ZGlvQ29udHJvbFwiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiwgRmluZEJ5TmFtZSB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCBDb3JlID0ge1xyXG4gICAgLyoqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNiAqL1xyXG4gICAgb2JzZXJ2YWJsZVByb3BlcnR5OiBPYnNlcnZhYmxlUHJvcGVydHksXHJcbiAgICAvKiogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4ICovXHJcbiAgICB2aWV3OiBWaWV3TWFuYWdlci5pbnN0LFxyXG4gICAgLyoqIFx1NUYxNVx1NjRDRVx1ODExQVx1NjcyQ1x1N0VDNFx1NEVGNiAqL1xyXG4gICAgZ2FtZVNjcmlwdDogR2FtZVNjcmlwdCxcclxuICAgIC8qKiBcdTUzNTVcdTRGOEJcdTg4QzVcdTk5NzBcdTU2NjggKi9cclxuICAgIGluc3RhbmNlOiBJbnN0YW5jZSxcclxuICAgIC8qKiBcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuICAgIGV2ZW50T246IEV2ZW50T24sXHJcbiAgICAvKiogdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZVx1NzY4NFx1NzcwMVx1NEU4Qlx1NTE5OVx1NkNENSBcdTUzRUFcdTgwRkRcdTY3RTVcdTYyN0VcdTRFMEJcdTRFMDBcdTdFQTdcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbiAgICBmaW5kQnlOYW1lOiBGaW5kQnlOYW1lLFxyXG4gICAgLyoqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNiAqL1xyXG4gICAgZXZlbnRHbG9iYWw6IEV2ZW50R2xvYmFsLFxyXG4gICAgLyoqXHU5N0YzXHU5ODkxICovXHJcbiAgICBhdWRpbzogbmV3IEF1ZGlvQ29udHJvbCgpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29yZTtcclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRlZmF1bHRSZXMsIHRpcHM6XCJcdThENDRcdTZFOTBcIix0eXBlOnN0cmluZ3MsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0UmVzO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRvd25SZXMsIHRpcHM6XCJcdThENDRcdTZFOTBcIix0eXBlOnN0cmluZ3MsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBkb3duUmVzO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmlzU2NhbGUsIHRpcHM6XCJcdTY2MkZcdTU0MjZcdTdGMjlcdTY1M0VcIix0eXBlOkNoZWNrfSovXHJcbiAgICBwcml2YXRlIGlzU2NhbGUgPSBmYWxzZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzY2FsZVZhbCwgdGlwczpcIlx1N0YyOVx1NjUzRVx1NzY4NFx1NTAzQ1wiLHR5cGU6TnVtYmVyLCBkZWZhdWx0OjAuOX0qL1xyXG4gICAgcHJpdmF0ZSBzY2FsZVZhbDogbnVtYmVyID0gMC45O1xyXG5cclxuICAgIHByaXZhdGUgb2xkU2NhbGVYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIG9sZFNjYWxlWTogbnVtYmVyO1xyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vICh0aGlzLm93bmVyIGFzIExheWEuQm94KS5zZXRfYW5jaG9yWCgwLjUpO1xyXG4gICAgICAgIC8vICh0aGlzLm93bmVyIGFzIExheWEuQm94KS5zZXRfYW5jaG9yWSgwLjUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNTY2FsZSk7XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLm1vdXNlRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vbGRTY2FsZVggPSAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikuZ2V0X3NjYWxlWCgpO1xyXG4gICAgICAgIHRoaXMub2xkU2NhbGVZID0gKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLmdldF9zY2FsZVkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRG93bigpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kb3duUmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSh0aGlzLnNjYWxlVmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlT3V0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRlZmF1bHRSZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKDEpO1xyXG4gICAgfVxyXG4gICAgb25Nb3VzZVVwKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRlZmF1bHRSZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QW5pKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNTY2FsZSkgcmV0dXJuO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgIHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgIHsgc2NhbGVYOiBzY2FsZSAqIHRoaXMub2xkU2NhbGVYLCBzY2FsZVk6IHNjYWxlICogdGhpcy5vbGRTY2FsZVkgfSxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFNraW4oc2tpbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFza2luKSByZXR1cm47XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHNraW47XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge31cclxufVxyXG4iLCAiLyoqXHJcbiAqIFx1NkUzOFx1NjIwRlx1OTE0RFx1N0Y2RVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqIFx1OTRCQlx1NzdGM2lkICovXHJcbiAgICBkaWFtb25kSWQ6IDEwMDEsXHJcbiAgICAvKiogXHU5MUQxXHU1RTAxaWQgKi9cclxuICAgIGdvbGRJZDogMTAwMixcclxuICAgIC8qKiBcdTcyRDdcdTcyRDdcdTZEODhcdTUzMTZcdTk4REZcdTcyNjlcdTk1RjRcdTk2OTRcdTY1RjZcdTk1RjQgXHU3OUQyICovXHJcbiAgICBwZXREaWdlc3RJbnRlcnZhbFRpbWU6IDYwLFxyXG4gICAgLyoqIFx1NkUzOFx1NjIwRlx1NjcyQ1x1NTczMFx1NTBBOFx1NUI1OGtleSAqL1xyXG4gICAgbG9jYWxLZXk6IFwibG92ZV9IRF9mYXJtXCIsXHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU0RjUzXHU1MjlCXHU0RTBBXHU5NjUwICovXHJcbiAgICB1c2VyVml0YWxpdHlMaW1pdDogMTAsXHJcbiAgICAvKiogXHU1MzRGXHU4QkFFXHU1NzMwXHU1NzQwICovXHJcbiAgICAvLyBiYXNlVXJsOiBcIi8vNDcuMTA4LjE5Mi4xODE6ODA5Mi8gZmFybVwiLFxyXG4gICAgYmFzZVVybDogREVCVUcgPyBcIi8vMTkyLjE2OC4xMDEuNTA6MzAwMFwiIDogXCJodHRwOi8vZ2FtZS5haGQxNjguY29tOjMwMDBcIixcclxuICAgIC8vIGJhc2VVcmw6IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMDAwXCIsXHJcbiAgICAvLyB0b2RvIFx1OEZEOVx1OTFDQ1x1NzY4NElwXHU1M0VGXHU0RUU1XHU4QkJGXHU5NUVFXHU1M0VGXHU4MEZEXHU2NjJGXHU2NzA5XHU5NUVFXHU5ODk4XHU3Njg0XHJcbiAgICAvLyBiYXNlVXJsOiBcIi8vNDcuMTA4LjE5Mi4xODE6MzAwMFwiLFxyXG4gICAgLyoqIGFwaVx1OEJGN1x1NkM0Mlx1N0M3Qlx1NTc4QiBcdTlFRDhcdThCQTQgKi9cclxuICAgIEFwaVR5cGVEZWZhdWx0OiAxLFxyXG4gICAgLyoqIGFwaVx1OEJGN1x1NkM0Mlx1N0M3Qlx1NTc4QiBcdTc3MEJcdTVFN0ZcdTU0NEEgKi9cclxuICAgIEFwaVR5cGVBRDogMixcclxuICAgIC8qKiBcdTVFN0ZcdTU0NEFcdTY3NjFcdTRFRjYgXHU1MkEwXHU5MDFGXHU0RjdGXHU3NTI4XHU0RTg2Nlx1NkIyMSAqL1xyXG4gICAgQURTcGVlZFVwVGltZXM6IDYsXHJcbn07XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcInN0cmVhbS9jb25zdW1lcnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRGVzcGF0Y2hEYXRhIHtcclxuICAgIHVyaTogQXBwRXZlbnRNYXA7XHJcbiAgICBkYXRhOiBvYmplY3Q7XHJcbiAgICB0aW1lc3RhbXA/OiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRGVzcGF0Y2hSZXR1cm5EYXRhIHtcclxuICAgIC8qKiBcdTUzNEZcdThCQUVcdTcyQjZcdTYwMDFcdTc4MDEgMCBcdTRFM0FcdTZCNjNcdTVFMzggXHU1MTc2XHU1QjgzXHU0RTNBXHU5NTE5XHU4QkVGXHU3ODAxICovXHJcbiAgICBjb2RlOiBudW1iZXI7XHJcbiAgICAvKiogXHU1MzRGXHU4QkFFdXJpICovXHJcbiAgICB1cmk6IEFwcEV2ZW50TWFwO1xyXG4gICAgLyoqIFx1OEZENFx1NTZERVx1NTE3N1x1NEY1M1x1NzY4NFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZGF0YTogb2JqZWN0O1xyXG4gICAgLyoqIFx1NjgwN1x1OEJDNiAqL1xyXG4gICAgdGltZXN0YW1wPzogc3RyaW5nIHwgbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBFdmVudE1hcDogTWFwPHN0cmluZyB8IG51bWJlciwgRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIHdlYiBhcHAgXHU0RUE0XHU0RTkyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb3JlIHtcclxuICAgIC8qKlx1ODJGOVx1Njc5Q1x1N0M3Qlx1NTc4QiAqL1xyXG4gICAgc3RhdGljIHR5cGVJb3M6IG51bWJlciA9IDE7XHJcbiAgICAvKipcdTVCODlcdTUzNTNcdTdDN0JcdTU3OEIgKi9cclxuICAgIHN0YXRpYyB0eXBlQW5kcm9pZDogbnVtYmVyID0gMjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI2N1x1ODg0Q2FwcFx1NEVBNFx1NEU5Mlx1NjVCOVx1NkNENVxyXG4gICAgICogQHBhcmFtIG5hbWUgXHU2NUI5XHU2Q0Q1XHU1NDBEXHU3OUYwXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcdTRGMjBcdTUxNjVcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJ1bkFwcEZ1bmN0aW9uKGRhdGE/OiBBcHBEZXNwYXRjaERhdGEpOiBQcm9taXNlPEFwcERlc3BhdGNoUmV0dXJuRGF0YT4ge1xyXG4gICAgICAgIGxldCB3ZWJBcHBGdW5jdGlvbjtcclxuICAgICAgICBpZiAoTGF5YS5Ccm93c2VyLm9uSU9TKSB7XHJcbiAgICAgICAgICAgIC8vIHdlYkFwcEZ1bmN0aW9uID0gdGhpcy5kZXRlY3Rpb25IYXNGdW5jdGlvbih0aGlzLnR5cGVJb3MsIG5hbWUpO1xyXG4gICAgICAgICAgICAvLyBpZiAod2ViQXBwRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGlmIChuYW1lID09IHRoaXMuY2xvc2VXZWJWaWV3KSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgLy9cdTUxNzNcdTk1RUR3ZWJ2aWV3XHU3Mjc5XHU2QjhBXHU1OTA0XHU3NDA2XHJcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgd2luZG93W1wid2Via2l0XCJdW1wibWVzc2FnZUhhbmRsZXJzXCJdW3RoaXMubGVhdmVDaGFubmVsXVtcInBvc3RNZXNzYWdlXCJdKFxyXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHN0YXR1czogMSB9KVxyXG4gICAgICAgICAgICAvLyAgICAgLy8gICAgICk7IC8vXHU3Mjc5XHU2QjhBXHU1OTA0XHU3NDA2XHU5NzAwXHU4OTgxXHU1MTQ4XHU5MDAwXHU1MUZBXHU5ODkxXHU5MDUzXHJcbiAgICAgICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIHdlYkFwcEZ1bmN0aW9uWydwb3N0TWVzc2FnZSddKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwicnVuIDpcIiArIG5hbWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHdpbmRvd1tcIndlYmtpdFwiXVtcIm1lc3NhZ2VIYW5kbGVyc1wiXVtuYW1lXVtcInBvc3RNZXNzYWdlXCJdKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB3aW5kb3dbXCJ3ZWJraXRcIl1bXCJtZXNzYWdlSGFuZGxlcnNcIl1bbmFtZV1bXCJwb3N0TWVzc2FnZVwiXShcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBzdGF0dXM6IDEgfSlcclxuICAgICAgICAgICAgLy8gICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAvLyBhbGVydCh3aW5kb3dbXCIkQXBwXCJdICYmIHdpbmRvd1tcIiRBcHBcIl1bXCJ3ZWJSZXF1ZXN0XCJdKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvd1tcIiRBcHBcIl0gJiYgd2luZG93W1wiJEFwcFwiXVtcIndlYlJlcXVlc3RcIl0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcIiRBcHBcIl1bXCJ3ZWJSZXF1ZXN0XCJdKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VuZCA9PiAke2RhdGF9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudGltZXN0YW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50TWFwLnNldChkYXRhLnRpbWVzdGFtcCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHdlYkFwcEZ1bmN0aW9uID0gdGhpcy5kZXRlY3Rpb25IYXNGdW5jdGlvbih0aGlzLnR5cGVBbmRyb2lkLCBuYW1lKTtcclxuICAgICAgICAgICAgLy8gaWYgKHdlYkFwcEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93W1wid2ViUmVxdWVzdFwiXVtuYW1lXShkYXRhKTtcclxuICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93W1wid2ViUmVxdWVzdFwiXVtuYW1lXSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NkQxXHU1NDJDYXBwIFx1NjI2N1x1ODg0Q2g1IFx1NjNBNVx1NTNFM1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbGlzdGVuQXBwRnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgLy9cdTc2RDFcdTU0MkNcdTYyNEJcdTY3M0FcdTUxNzNcdTk1RURcdTRFOEJcdTRFRjZcdTU0Q0RcdTVFOTRcclxuXHJcbiAgICAgICAgd2luZG93W1wiYXBwUmVzcG9uc2VcIl0gPSAoZDogQXBwRGVzcGF0Y2hSZXR1cm5EYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGQpKTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoZD8udGltZXN0YW1wKTtcclxuICAgICAgICAgICAgaWYgKEV2ZW50TWFwLmhhcyhkPy50aW1lc3RhbXApICYmICFkLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgIEV2ZW50TWFwLmdldChkLnRpbWVzdGFtcCkoZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5cclxuY29uc3QgTG9jYWxEYXRhID0ge1xyXG4gICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICB0b2tlbjogbnVsbCxcclxuXHJcbiAgICAvKiogdHJ1ZSBcdTRFM0FcdTUxNzNcdTk1RUQgZmFsc2UgXHU0RTNBXHU2MjUzXHU1RjAwICovXHJcbiAgICBzb3VuZDogZmFsc2UsXHJcbiAgICAvKiogdHJ1ZSBcdTRFM0FcdTUxNzNcdTk1RUQgZmFsc2UgXHU0RTNBXHU2MjUzXHU1RjAwICovXHJcbiAgICBtdXNpYzogZmFsc2UsXHJcbn07XHJcblxyXG4vKipcclxuICogXHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0IGxvY2FsRGF0YSBcdTU3MjhcdThGRDlcdTRFMkFcdTkxQ0NcdTk3NjJcdTVCOUFcdTRFNDlcdTU5N0RcclxuICovXHJcbmNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBsb2NhbERhdGEgPSBMb2NhbERhdGE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSkgfHwgTG9jYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgzQjdcdTUzRDZcdTY3MkNcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGdldEpTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdThCQkVcdTdGNkVcdTY3MkNcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIHNldEpTT048a2V5IGV4dGVuZHMga2V5b2YgdHlwZW9mIExvY2FsRGF0YT4oa2V5OiBrZXksIGRhdGE6IHR5cGVvZiBMb2NhbERhdGFba2V5XSkge1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhW2tleV0gPSBkYXRhO1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSwgdGhpcy5sb2NhbERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSwge30pO1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhID0geyBpc0xvZ2luOiBmYWxzZSwgdG9rZW46IG51bGwsIHNvdW5kOiB0cnVlLCBtdXNpYzogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9jYWxTdG9yYWdlU2VydmljZSgpO1xyXG4iLCAiLyoqIFx1NjI0MFx1NjcwOVx1ODg2OCAqL1xuICAgICAgICBleHBvcnQgY29uc3QgVGFibGUgPSB7XCJ0YXNrXCI6W3tcImlkXCI6MTAwMSxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxLFwidGl0bGVcIjpcIlx1N0I3RVx1NTIzMFx1OTg4Nlx1OTRCQlx1NzdGM1wiLFwiZGVzY1wiOlwiXHU3NzBCXHU4OUM2XHU5ODkxXHU3QjdFXHU1MjMwXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDAyLFwicmV3YXJkXCI6XCIxMDAxOjEwMFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdTgzRENcdTU3MzBcdTY1QkRcdTgwQTUxMFx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4M0RDXHU1NzMwXHU1MkEwXHU5MDFGMTBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDMsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU4M0RDXHU1NzMwXHU2NTM2XHU4M0I3MTBcdTZCMjFcIixcImRlc2NcIjpcIlx1ODNEQ1x1NTczMFx1NjUzNlx1ODNCNzEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA0LFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjUsXCJ0aXRsZVwiOlwiXHU4QkJGXHU1M0NCNVx1NkIyMVwiLFwiZGVzY1wiOlwiXHU1MDc3XHU4M0RDNVx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNSxcInJld2FyZFwiOlwiMTAwMToyMFwiLFwidGltZXNcIjozLFwidGl0bGVcIjpcIlx1NTU4Mlx1NTE3Qlx1NzJEN1x1NzJENzNcdTZCMjFcIixcImRlc2NcIjpcIlx1NTU4Mlx1NTE3Qlx1NzJEN1x1NzJENzNcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDYsXCJyZXdhcmRcIjpcIjEwMDE6MjBcIixcInRpbWVzXCI6NSxcInRpdGxlXCI6XCJcdThEMkRcdTRFNzBcdTk5NzJcdTY1OTk1XHU2QjIxXCIsXCJkZXNjXCI6XCJcdThEMkRcdTRFNzBcdTk5NzJcdTY1OTk1XHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA3LFwicmV3YXJkXCI6XCIxMDAxOjIwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1OEQyRFx1NEU3MFx1NzlDRFx1NUI1MDEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdThEMkRcdTRFNzBcdTc5Q0RcdTVCNTAxMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwOCxcInJld2FyZFwiOlwiMTAwMTozMFwiLFwidGltZXNcIjozLFwidGl0bGVcIjpcIlx1NTFGQVx1NTUyRVx1NEY1Q1x1NzI2OTNcdTZCMjFcIixcImRlc2NcIjpcIlx1NTFGQVx1NTUyRVx1NEY1Q1x1NzI2OTNcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDksXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCIsXCJ0aW1lc1wiOjUsXCJ0aXRsZVwiOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXCIsXCJkZXNjXCI6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0I1XHU0RTJBXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDEwLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjEsXCJ0aXRsZVwiOlwiXHU1MjA2XHU0RUFCXHU1Rjk3XHU1OTdEXHU3OTNDXCIsXCJkZXNjXCI6XCJcdTUyMDZcdTRFQUJcdTRFMDBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMTEsXCJyZXdhcmRcIjpcIjEwMDE6MzBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTYzMDdcdTVCOUFcdTc5Q0RcdTY5MERcIixcImRlc2NcIjpcIlx1NzlDRFx1NjkwRFx1NjMwN1x1NUI5QVx1NzlDRFx1NUI1MFwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMixcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdTc3MEJcdTg5QzZcdTk4OTFcIixcImRlc2NcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MTEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH1dLFwic2lnbkluXCI6W3tcImlkXCI6MTAwMSxcImRheXNcIjo3LFwicmV3YXJkXCI6XCIxMDAxOjIwMDAwXCJ9LHtcImlkXCI6MTAwMixcImRheXNcIjoxMCxcInJld2FyZFwiOlwiMTAwMTozMDAwMFwifSx7XCJpZFwiOjEwMDMsXCJkYXlzXCI6MTUsXCJyZXdhcmRcIjpcIjEwMDE6NTAwMDBcIn0se1wiaWRcIjoxMDA0LFwiZGF5c1wiOjIwLFwicmV3YXJkXCI6XCIxMDAxOjgwMDAwXCJ9LHtcImlkXCI6MTAwNSxcImRheXNcIjozMCxcInJld2FyZFwiOlwiMTAwMToxMjAwMDBcIn0se1wiaWRcIjoxMDA2LFwiZGF5c1wiOjUwLFwicmV3YXJkXCI6XCIxMDAxOjE4MDAwMFwifSx7XCJpZFwiOjEwMDcsXCJkYXlzXCI6ODAsXCJyZXdhcmRcIjpcIjEwMDE6MzAwMDAwXCJ9LHtcImlkXCI6MTAwOCxcImRheXNcIjoxMDAsXCJyZXdhcmRcIjpcIjEwMDE6MzUwMDAwXCJ9LHtcImlkXCI6MTAwOSxcImRheXNcIjoxNTAsXCJyZXdhcmRcIjpcIjEwMDE6NTAwMDAwXCJ9XSxcInBsYW50XCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1NkMzNFx1N0EzQlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDAyX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MFwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMTgwXCIsXCJ1bmxvY2tfY29zdFwiOm51bGwsXCJ1bmxvY2tfcmV3YXJkXCI6bnVsbCxcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTU5MjdcdThDNDZcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwNF9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTBcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjE4MFwiLFwidW5sb2NrX2Nvc3RcIjpudWxsLFwidW5sb2NrX3Jld2FyZFwiOm51bGwsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDAzLFwibmFtZVwiOlwiXHU1OTI3XHU4NDlDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTJfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwXCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIyNDBcIixcInVubG9ja19jb3N0XCI6bnVsbCxcInVubG9ja19yZXdhcmRcIjpudWxsLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNCxcIm5hbWVcIjpcIlx1NTMwNVx1NUZDM1x1ODNEQ1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA2X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjc1XCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo3NVwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMzAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU1NzFGXHU4QzQ2XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDdfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NzVcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjc1XCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCIzMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDYsXCJuYW1lXCI6XCJcdTg0MURcdTUzNUNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwNV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo3NVwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NzVcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjQ4MFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNyxcIm5hbWVcIjpcIlx1NUMwRlx1OUVBNlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDAxX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjEyMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MTIwXCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCI0ODBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjE1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDgsXCJuYW1lXCI6XCJcdThGQTNcdTY5MTJcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxMF9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxMjBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjEyMFwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiNjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoyMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA5LFwibmFtZVwiOlwiXHU5RUM0XHU3NERDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTFfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MjAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjoyMDBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjcyMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MzAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMCxcIm5hbWVcIjpcIlx1ODMwNFx1NUI1MFwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDEzX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjIwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MjAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI3MjBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjM1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTEsXCJuYW1lXCI6XCJcdTgwRTFcdTg0MURcdTUzNUNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwOF9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjozNTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjM1MFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiOTAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo0NTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDEyLFwibmFtZVwiOlwiXHU1MzU3XHU3NERDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTRfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MzUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjozNTBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjkwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMyxcIm5hbWVcIjpcIlx1NzM4OVx1N0M3M1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDAzX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjVcIixcIm1hdHVyZV90aW1lXCI6XCIxMjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo1NTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDE0LFwibmFtZVwiOlwiXHU3NTE4XHU4NTE3XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTVfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MDBcIixcImhhcnZlc3RcIjpcIjN+NVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjYwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTUsXCJuYW1lXCI6XCJcdTc1NkFcdTgzMDRcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwOV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwMFwiLFwiaGFydmVzdFwiOlwiM341XCIsXCJtYXR1cmVfdGltZVwiOlwiMTIwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NjUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9XSxcInBldFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTY1RkFcdThEMjJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDFfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjEwLFwiY29zdFwiOlwiMTAwMjozMDAwXCIsXCJkZXNjXCI6XCJcdTcyMzFcdTVCODNcdTVDMzFcdTRFNzBcdTVCODN+XHU1QjgzXHU1QzMxXHU2NjJGXHU2NzA5XHU3MEI5XHU2MUQyflwiLFwic2Vuc2l0aXZlXCI6MzQsXCJhYmlsaXR5XCI6NDJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1NkM2NFx1NTcwNlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwN19kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTUsXCJjb3N0XCI6XCIxMDAyOjQwMDBcIixcImRlc2NcIjpcIlx1OTg5Q1x1NTAzQ1x1MzAwMVx1NjY3QVx1NTU0Nlx1NTNDQ1x1NTNDQ1x1NTcyOFx1N0VCRlwiLFwic2Vuc2l0aXZlXCI6NDAsXCJhYmlsaXR5XCI6NDh9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1ODA4OVx1NUU3MlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwOV9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTYsXCJjb3N0XCI6XCIxMDAyOjQ1MDBcIixcImRlc2NcIjpcIlx1NjcwMFx1NUZFMFx1OEJEQVx1NzY4NFx1NEYxOVx1NEYzNFwiLFwic2Vuc2l0aXZlXCI6NDUsXCJhYmlsaXR5XCI6NTV9LHtcImlkXCI6MTAwNCxcIm5hbWVcIjpcIlx1NEU4Q1x1NTRDOFwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwMl9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTYsXCJjb3N0XCI6XCIxMDAyOjUwMDBcIixcImRlc2NcIjpcIlx1N0VERFx1NEUwRFx1NjJDNlx1NUJCNlx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6NDgsXCJhYmlsaXR5XCI6NjB9LHtcImlkXCI6MTAwNSxcIm5hbWVcIjpcIlx1NTkyN1x1NzczQ1x1Nzc1QlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNV9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTcsXCJjb3N0XCI6XCIxMDAyOjcwMDBcIixcImRlc2NcIjpcIlx1NkQzQlx1NTk3RFx1NTQwM1x1NzY4NFx1NUMxMVwiLFwic2Vuc2l0aXZlXCI6NTAsXCJhYmlsaXR5XCI6NzV9LHtcImlkXCI6MTAwNixcIm5hbWVcIjpcIlx1NUMwRlx1NUMzRVx1NURGNFwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNF9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTgsXCJjb3N0XCI6XCIxMDAyOjc1MDBcIixcImRlc2NcIjpcIlx1NkI2Nlx1NTI5Qlx1NTkyOVx1OEQ0Qlx1NURGMlx1NzBCOVx1NkVFMX5cdTYyRkZcdTYzNEZcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjYwLFwiYWJpbGl0eVwiOjgwfSx7XCJpZFwiOjEwMDcsXCJuYW1lXCI6XCJcdTc0MDNcdTc0MDNcIixcImljb25cIjpcInBldF9mZWVkLzEwMDhfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE4LFwiY29zdFwiOlwiMTAwMjo4MDAwXCIsXCJkZXNjXCI6XCJcdTVDMzFcdTRFMjRcdTRFMkFcdTVCNTdcdUZGMENcdTU0MkNcdThCRERcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjY5LFwiYWJpbGl0eVwiOjg1fSx7XCJpZFwiOjEwMDgsXCJuYW1lXCI6XCJcdTVDMEZcdTc2N0RcIixcImljb25cIjpcInBldF9mZWVkLzEwMDNfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE4LFwiY29zdFwiOlwiMTAwMjo4MDAwXCIsXCJkZXNjXCI6XCJcdTc3MEJcdTVCQjZcdTMwMDFcdTc3MEJcdTgzRENcdTMwMDFcdTc3MEJcdTVCNjlcdTVCNTBcIixcInNlbnNpdGl2ZVwiOjc2LFwiYWJpbGl0eVwiOjg4fSx7XCJpZFwiOjEwMDksXCJuYW1lXCI6XCJcdTcwQjlcdTcwQjlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDZfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE5LFwiY29zdFwiOlwiMTAwMjoxMDAwMFwiLFwiZGVzY1wiOlwiXHU0RjYwXHU1MDNDXHU1Rjk3XHU2MkU1XHU2NzA5XHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo4NSxcImFiaWxpdHlcIjo5M30se1wiaWRcIjoxMDEwLFwibmFtZVwiOlwiXHU5NUY3XHU1OEE5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDEwX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjozMCxcImNvc3RcIjpcIjEwMDI6MTUwMDBcIixcImRlc2NcIjpcIlx1OTU3Rlx1NUY5N1x1NUMzMVx1NUY4OFx1NTFGNlx1RkYwQ1x1NjI5M1x1NUMwRlx1NTA3N1x1NjZGNFx1NTFGNlwiLFwic2Vuc2l0aXZlXCI6OTAsXCJhYmlsaXR5XCI6OTl9XSxcIm9yZGVyXCI6W3tcImlkXCI6MSxcImNvbW1pc3Npb25cIjpcIjAuNVwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjJcIn0se1wiaWRcIjoyLFwiY29tbWlzc2lvblwiOlwiMC40OFwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjEsMTAwMjoyXCJ9LHtcImlkXCI6MyxcImNvbW1pc3Npb25cIjpcIjAuMzlcIixcImNvbmRpdGlvblwiOlwiMTAwMTo0LDEwMDM6MiwxMDAyOjNcIn0se1wiaWRcIjo0LFwiY29tbWlzc2lvblwiOlwiMC42MVwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjQsMTAwMzozLDEwMDQ6MywxMDAxOjRcIn0se1wiaWRcIjo1LFwiY29tbWlzc2lvblwiOlwiMC42MVwiLFwiY29uZGl0aW9uXCI6XCIxMDA0OjYsMTAwMjo1LDEwMDU6NCwxMDAxOjVcIn0se1wiaWRcIjo2LFwiY29tbWlzc2lvblwiOlwiMC40OFwiLFwiY29uZGl0aW9uXCI6XCIxMDAzOjEwLDEwMDQ6NSwxMDA1OjMsMTAwNjozXCJ9LHtcImlkXCI6NyxcImNvbW1pc3Npb25cIjpcIjAuNDNcIixcImNvbmRpdGlvblwiOlwiMTAwNzo0LDEwMDM6NSwxMDA0OjcsMTAwNjoxMFwifSx7XCJpZFwiOjgsXCJjb21taXNzaW9uXCI6XCIwLjU2XCIsXCJjb25kaXRpb25cIjpcIjEwMDg6MTMsMTAwNzozLDEwMDU6NSwxMDAyOjVcIn0se1wiaWRcIjo5LFwiY29tbWlzc2lvblwiOlwiMC4zOVwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjIsMTAwOToxMCwxMDA3OjgsMTAwMzo4XCJ9LHtcImlkXCI6MTAsXCJjb21taXNzaW9uXCI6XCIwLjIyXCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MTAsMTAxMDo1LDEwMDg6MTAsMTAwOTo2XCJ9LHtcImlkXCI6MTEsXCJjb21taXNzaW9uXCI6XCIwLjc2XCIsXCJjb25kaXRpb25cIjpcIjEwMDk6NSwxMDA0OjEwLDEwMDE6OSwxMDAyOjEwXCJ9LHtcImlkXCI6MTIsXCJjb21taXNzaW9uXCI6XCIwLjQzXCIsXCJjb25kaXRpb25cIjpcIjEwMDc6NiwxMDAzOjExLDEwMTE6NiwxMDA1OjEwXCJ9LHtcImlkXCI6MTMsXCJjb21taXNzaW9uXCI6XCIwLjE3XCIsXCJjb25kaXRpb25cIjpcIjEwMTA6NSwxMDA1OjEzLDEwMDE6OCwxMDEyOjhcIn0se1wiaWRcIjoxNCxcImNvbW1pc3Npb25cIjpcIjAuN1wiLFwiY29uZGl0aW9uXCI6XCIxMDEzOjEwLDEwMDg6OCwxMDA2OjYsMTAwMToxMFwifSx7XCJpZFwiOjE1LFwiY29tbWlzc2lvblwiOlwiMC40OFwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjEwLDEwMDU6MTAsMTAxMToxMiwxMDAxOjEwXCJ9LHtcImlkXCI6MTYsXCJjb21taXNzaW9uXCI6MC4yOSxcImNvbmRpdGlvblwiOlwiMTAwODoxMSwxMDE0OjQsMTAwNjo4LDEwMDU6MTdcIn0se1wiaWRcIjoxNyxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDA2OjE0LDEwMDc6NiwxMDE1OjEyLDEwMDE6MTRcIn0se1wiaWRcIjoxOCxcImNvbW1pc3Npb25cIjowLjQ4LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE0LDEwMTE6MTIsMTAwOToxNSwxMDAyOjVcIn0se1wiaWRcIjoxOSxcImNvbW1pc3Npb25cIjowLjc1LFwiY29uZGl0aW9uXCI6XCIxMDEzOjEwLDEwMDM6MjAsMTAxNDoxMSwxMDAxOjdcIn0se1wiaWRcIjoyMCxcImNvbW1pc3Npb25cIjowLjY3LFwiY29uZGl0aW9uXCI6XCIxMDAzOjEwLDEwMTE6MTcsMTAwMjoxNCwxMDA1OjEyXCJ9LHtcImlkXCI6MjEsXCJjb21taXNzaW9uXCI6MC42NCxcImNvbmRpdGlvblwiOlwiMTAxMDoxMCwxMDAzOjE0LDEwMDU6MTYsMTAwNzoxNVwifSx7XCJpZFwiOjIyLFwiY29tbWlzc2lvblwiOlwiMC40XCIsXCJjb25kaXRpb25cIjpcIjEwMTU6MTksMTAwNzoxMiwxMDExOjUsMTAwNDoxN1wifSx7XCJpZFwiOjIzLFwiY29tbWlzc2lvblwiOjAuMixcImNvbmRpdGlvblwiOlwiMTAwMzoxOSwxMDE0OjIsMTAxNToxNiwxMDAxOjE0XCJ9LHtcImlkXCI6MjQsXCJjb21taXNzaW9uXCI6MC43NyxcImNvbmRpdGlvblwiOlwiMTAxNDoxMywxMDAxOjE3LDEwMDg6MTgsMTAwNDo1XCJ9LHtcImlkXCI6MjUsXCJjb21taXNzaW9uXCI6MC42NCxcImNvbmRpdGlvblwiOlwiMTAxMjoyMywxMDExOjE5LDEwMTA6MTUsMTAxNToyMFwifSx7XCJpZFwiOjI2LFwiY29tbWlzc2lvblwiOjAuMDMsXCJjb25kaXRpb25cIjpcIjEwMDI6MjEsMTAxMToxMiwxMDEyOjIyLDEwMDM6MTlcIn0se1wiaWRcIjoyNyxcImNvbW1pc3Npb25cIjowLjQ5LFwiY29uZGl0aW9uXCI6XCIxMDA3OjE2LDEwMTQ6MTYsMTAwNjoxMCwxMDExOjE3XCJ9LHtcImlkXCI6MjgsXCJjb21taXNzaW9uXCI6MC41MyxcImNvbmRpdGlvblwiOlwiMTAxNDoxNywxMDA3OjEyLDEwMTE6MTcsMTAwMzoxN1wifSx7XCJpZFwiOjI5LFwiY29tbWlzc2lvblwiOjAuNzcsXCJjb25kaXRpb25cIjpcIjEwMTI6MTAsMTAwNToxNiwxMDEwOjE0LDEwMTU6MThcIn0se1wiaWRcIjozMCxcImNvbW1pc3Npb25cIjowLjE0LFwiY29uZGl0aW9uXCI6XCIxMDExOjE3LDEwMTQ6MTksMTAwNjoxNCwxMDA0OjMwXCJ9LHtcImlkXCI6MzEsXCJjb21taXNzaW9uXCI6MC41MyxcImNvbmRpdGlvblwiOlwiMTAwNzoxOCwxMDEwOjE0LDEwMTM6MTksMTAwNjoxMVwifSx7XCJpZFwiOjMyLFwiY29tbWlzc2lvblwiOjAuNDYsXCJjb25kaXRpb25cIjpcIjEwMTM6MTksMTAwNToyMiwxMDEyOjEyLDEwMDg6MjBcIn0se1wiaWRcIjozMyxcImNvbW1pc3Npb25cIjowLjIsXCJjb25kaXRpb25cIjpcIjEwMTI6MTYsMTAxMzoxMSwxMDAyOjIzLDEwMDk6MTZcIn0se1wiaWRcIjozNCxcImNvbW1pc3Npb25cIjowLjAyLFwiY29uZGl0aW9uXCI6XCIxMDA5OjE5LDEwMTA6MTIsMTAxMToxNCwxMDEyOjIwXCJ9LHtcImlkXCI6MzUsXCJjb21taXNzaW9uXCI6MC4xMyxcImNvbmRpdGlvblwiOlwiMTAwMToxOCwxMDA0OjE5LDEwMTM6MTYsMTAwMzoxMFwifSx7XCJpZFwiOjM2LFwiY29tbWlzc2lvblwiOjAuMjEsXCJjb25kaXRpb25cIjpcIjEwMDM6MTEsMTAwODoxNywxMDE0OjE3LDEwMDc6MTdcIn0se1wiaWRcIjozNyxcImNvbW1pc3Npb25cIjowLjQ0LFwiY29uZGl0aW9uXCI6XCIxMDEyOjE0LDEwMTA6MjAsMTAwMjoxNCwxMDExOjExXCJ9LHtcImlkXCI6MzgsXCJjb21taXNzaW9uXCI6MC4yMixcImNvbmRpdGlvblwiOlwiMTAxNDoxMywxMDA0OjE5LDEwMDI6MTEsMTAxNToxOFwifSx7XCJpZFwiOjM5LFwiY29tbWlzc2lvblwiOjAuMzYsXCJjb25kaXRpb25cIjpcIjEwMDc6MTgsMTAxMjoxMywxMDA0OjE2LDEwMDI6MTZcIn0se1wiaWRcIjo0MCxcImNvbW1pc3Npb25cIjowLjI4LFwiY29uZGl0aW9uXCI6XCIxMDA0OjEwLDEwMDU6MTAsMTAwODoxOCwxMDExOjE2XCJ9LHtcImlkXCI6NDEsXCJjb21taXNzaW9uXCI6MC4xOCxcImNvbmRpdGlvblwiOlwiMTAxMDoxOCwxMDA5OjE4LDEwMDg6MTcsMTAxMToyNlwifSx7XCJpZFwiOjQyLFwiY29tbWlzc2lvblwiOjAuNDMsXCJjb25kaXRpb25cIjpcIjEwMDk6MTEsMTAwNToxOCwxMDA3OjIwLDEwMDI6MTNcIn0se1wiaWRcIjo0MyxcImNvbW1pc3Npb25cIjowLjE0LFwiY29uZGl0aW9uXCI6XCIxMDA2OjEwLDEwMDQ6MTQsMTAxNDoxMSwxMDA4OjE1XCJ9LHtcImlkXCI6NDQsXCJjb21taXNzaW9uXCI6MC42MixcImNvbmRpdGlvblwiOlwiMTAwOToxNSwxMDAzOjE4LDEwMDI6MjQsMTAwNzoxOVwifSx7XCJpZFwiOjQ1LFwiY29tbWlzc2lvblwiOjAuMTEsXCJjb25kaXRpb25cIjpcIjEwMTI6MTUsMTAxMDoyMywxMDA3OjEzLDEwMTE6MTNcIn0se1wiaWRcIjo0NixcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDAzOjEyLDEwMDc6MjMsMTAxMDoxNiwxMDAyOjE0XCJ9LHtcImlkXCI6NDcsXCJjb21taXNzaW9uXCI6MC40OSxcImNvbmRpdGlvblwiOlwiMTAxMDoxNCwxMDE1OjIwLDEwMDM6MTUsMTAxNDoxNlwifSx7XCJpZFwiOjQ4LFwiY29tbWlzc2lvblwiOjAuMDYsXCJjb25kaXRpb25cIjpcIjEwMTM6MTcsMTAwNzoxNCwxMDA4OjE3LDEwMDE6MTBcIn0se1wiaWRcIjo0OSxcImNvbW1pc3Npb25cIjowLjQ4LFwiY29uZGl0aW9uXCI6XCIxMDAyOjI2LDEwMDQ6MTEsMTAwOToxMiwxMDA2OjIwXCJ9LHtcImlkXCI6NTAsXCJjb21taXNzaW9uXCI6MC4wNSxcImNvbmRpdGlvblwiOlwiMTAwNjoxNywxMDEyOjE5LDEwMDg6MjAsMTAxNToxMVwifSx7XCJpZFwiOjUxLFwiY29tbWlzc2lvblwiOjAuMDQsXCJjb25kaXRpb25cIjpcIjEwMTE6MTgsMTAwNDoxOSwxMDAyOjI1LDEwMDM6MTFcIn0se1wiaWRcIjo1MixcImNvbW1pc3Npb25cIjowLjQzLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE1LDEwMTM6MTAsMTAwMToxNSwxMDA0OjI2XCJ9LHtcImlkXCI6NTMsXCJjb21taXNzaW9uXCI6MC4wOCxcImNvbmRpdGlvblwiOlwiMTAxNDoxNCwxMDEyOjEyLDEwMTA6MjAsMTAxNToxOFwifSx7XCJpZFwiOjU0LFwiY29tbWlzc2lvblwiOjAuNDUsXCJjb25kaXRpb25cIjpcIjEwMDU6MjIsMTAwMjoxMywxMDA5OjE2LDEwMTU6MTdcIn0se1wiaWRcIjo1NSxcImNvbW1pc3Npb25cIjowLjcsXCJjb25kaXRpb25cIjpcIjEwMDE6MjMsMTAxNDoxOSwxMDA1OjE3LDEwMTA6MTVcIn0se1wiaWRcIjo1NixcImNvbW1pc3Npb25cIjowLjA1LFwiY29uZGl0aW9uXCI6XCIxMDA2OjE3LDEwMDU6MTksMTAwOToxNywxMDAzOjE4XCJ9LHtcImlkXCI6NTcsXCJjb21taXNzaW9uXCI6MC42NyxcImNvbmRpdGlvblwiOlwiMTAwNzoyMSwxMDA4OjE3LDEwMDI6MTYsMTAwOToyNVwifSx7XCJpZFwiOjU4LFwiY29tbWlzc2lvblwiOjAuMzIsXCJjb25kaXRpb25cIjpcIjEwMDY6MTAsMTAwODoyNSwxMDA1OjI0LDEwMDc6MTlcIn0se1wiaWRcIjo1OSxcImNvbW1pc3Npb25cIjowLjc5LFwiY29uZGl0aW9uXCI6XCIxMDEyOjI1LDEwMDk6MzAsMTAxMzoxNiwxMDA4OjE1XCJ9LHtcImlkXCI6NjAsXCJjb21taXNzaW9uXCI6MC42OSxcImNvbmRpdGlvblwiOlwiMTAxNToyNiwxMDEyOjI3LDEwMTA6MzEsMTAwMToyM1wifSx7XCJpZFwiOjYxLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMTU6MTIsMTAwNjoyNSwxMDExOjE1LDEwMDI6MTdcIn0se1wiaWRcIjo2MixcImNvbW1pc3Npb25cIjowLjQ0LFwiY29uZGl0aW9uXCI6XCIxMDE1OjIxLDEwMDc6MTUsMTAxMToxOCwxMDA2OjI2XCJ9LHtcImlkXCI6NjMsXCJjb21taXNzaW9uXCI6MC4wMSxcImNvbmRpdGlvblwiOlwiMTAxMDoxOCwxMDA1OjE2LDEwMDk6MTMsMTAwMzoyN1wifSx7XCJpZFwiOjY0LFwiY29tbWlzc2lvblwiOjAuMjcsXCJjb25kaXRpb25cIjpcIjEwMDc6MTcsMTAwNjoxMCwxMDA1OjI5LDEwMDQ6MjVcIn0se1wiaWRcIjo2NSxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMDM6MzAsMTAxNDoyMCwxMDA1OjE1XCJ9LHtcImlkXCI6NjYsXCJjb21taXNzaW9uXCI6MC43MyxcImNvbmRpdGlvblwiOlwiMTAwNDoxNSwxMDA4OjI1LDEwMDI6MTQsMTAxMjoxNFwifSx7XCJpZFwiOjY3LFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDE6MTYsMTAxMjoyMCwxMDExOjIwLDEwMDM6MTBcIn0se1wiaWRcIjo2OCxcImNvbW1pc3Npb25cIjowLjY5LFwiY29uZGl0aW9uXCI6XCIxMDEzOjI0LDEwMDg6MjMsMTAwNjoxNiwxMDA3OjE3XCJ9LHtcImlkXCI6NjksXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAxNTozMCwxMDA0OjI5LDEwMTM6MTcsMTAwOToxMFwifSx7XCJpZFwiOjcwLFwiY29tbWlzc2lvblwiOjAuNzEsXCJjb25kaXRpb25cIjpcIjEwMTA6MjMsMTAwNDozMSwxMDExOjE3LDEwMTI6MTFcIn0se1wiaWRcIjo3MSxcImNvbW1pc3Npb25cIjowLjI5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjExLDEwMDI6MjYsMTAwMzoyOCwxMDE1OjEzXCJ9LHtcImlkXCI6NzIsXCJjb21taXNzaW9uXCI6MC4zMSxcImNvbmRpdGlvblwiOlwiMTAwNToyNSwxMDAyOjM4LDEwMTI6MTksMTAxMDoxNFwifSx7XCJpZFwiOjczLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMTI6MzQsMTAwNjoyMiwxMDAzOjI3LDEwMDQ6MjBcIn0se1wiaWRcIjo3NCxcImNvbW1pc3Npb25cIjowLjI2LFwiY29uZGl0aW9uXCI6XCIxMDAzOjIwLDEwMTI6MTgsMTAwMjozMCwxMDAxOjIwXCJ9LHtcImlkXCI6NzUsXCJjb21taXNzaW9uXCI6MC4xOCxcImNvbmRpdGlvblwiOlwiMTAwNjozMSwxMDE0OjMwLDEwMDg6MTIsMTAwMjoyNVwifSx7XCJpZFwiOjc2LFwiY29tbWlzc2lvblwiOjAuNTEsXCJjb25kaXRpb25cIjpcIjEwMDc6MjEsMTAxMjoyMCwxMDA0OjExLDEwMTQ6MjBcIn0se1wiaWRcIjo3NyxcImNvbW1pc3Npb25cIjowLjIxLFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMDk6MTYsMTAxMjoyNCwxMDA3OjMwXCJ9LHtcImlkXCI6NzgsXCJjb21taXNzaW9uXCI6MC43MyxcImNvbmRpdGlvblwiOlwiMTAxNToxNiwxMDEyOjE2LDEwMDY6MjAsMTAwODoxMlwifSx7XCJpZFwiOjc5LFwiY29tbWlzc2lvblwiOjAuNjUsXCJjb25kaXRpb25cIjpcIjEwMDY6MjYsMTAwNDoxOCwxMDA3OjEyLDEwMTE6MjdcIn0se1wiaWRcIjo4MCxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDA5OjE1LDEwMDM6MTYsMTAwNDoxOSwxMDA3OjI0XCJ9LHtcImlkXCI6ODEsXCJjb21taXNzaW9uXCI6MC4xNCxcImNvbmRpdGlvblwiOlwiMTAxMjoxMCwxMDE1OjI4LDEwMDI6MTQsMTAwMzozOFwifSx7XCJpZFwiOjgyLFwiY29tbWlzc2lvblwiOjAuMixcImNvbmRpdGlvblwiOlwiMTAwNToxMiwxMDExOjE5LDEwMDk6MTgsMTAwMjoxNFwifSx7XCJpZFwiOjgzLFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMTA6MTksMTAwMzozOCwxMDA3OjEyLDEwMTU6MjBcIn0se1wiaWRcIjo4NCxcImNvbW1pc3Npb25cIjowLjYyLFwiY29uZGl0aW9uXCI6XCIxMDA1OjI5LDEwMTQ6MjYsMTAwMjoxOCwxMDA3OjM4XCJ9LHtcImlkXCI6ODUsXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAxMToxMCwxMDAxOjE3LDEwMTI6MTIsMTAwNDoxMlwifSx7XCJpZFwiOjg2LFwiY29tbWlzc2lvblwiOjAuNTksXCJjb25kaXRpb25cIjpcIjEwMDk6MjUsMTAxMToyMCwxMDA2OjE0LDEwMTU6MTFcIn0se1wiaWRcIjo4NyxcImNvbW1pc3Npb25cIjowLjExLFwiY29uZGl0aW9uXCI6XCIxMDA2OjI2LDEwMDU6MTksMTAxMzoxMCwxMDE0OjI5XCJ9LHtcImlkXCI6ODgsXCJjb21taXNzaW9uXCI6MC4wOCxcImNvbmRpdGlvblwiOlwiMTAwODozNywxMDExOjI0LDEwMTU6MTIsMTAxNDoxMVwifSx7XCJpZFwiOjg5LFwiY29tbWlzc2lvblwiOjAuMDIsXCJjb25kaXRpb25cIjpcIjEwMDI6MTcsMTAwMzoyOCwxMDA1OjExLDEwMTA6MTRcIn0se1wiaWRcIjo5MCxcImNvbW1pc3Npb25cIjowLjMyLFwiY29uZGl0aW9uXCI6XCIxMDAyOjE5LDEwMTM6MjgsMTAwNzoyNSwxMDAxOjEzXCJ9LHtcImlkXCI6OTEsXCJjb21taXNzaW9uXCI6MC4xOSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDEzOjEwLDEwMTQ6MTAsMTAwNzoxNlwifSx7XCJpZFwiOjkyLFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDQ6MzgsMTAxMToxMywxMDA4OjE1LDEwMDc6MjlcIn0se1wiaWRcIjo5MyxcImNvbW1pc3Npb25cIjowLjM0LFwiY29uZGl0aW9uXCI6XCIxMDEzOjEyLDEwMDE6MzksMTAwNjozOCwxMDA4OjExXCJ9LHtcImlkXCI6OTQsXCJjb21taXNzaW9uXCI6MC4yMixcImNvbmRpdGlvblwiOlwiMTAwMjozNiwxMDAxOjE3LDEwMTM6MTYsMTAwNTozMVwifSx7XCJpZFwiOjk1LFwiY29tbWlzc2lvblwiOjAuMTUsXCJjb25kaXRpb25cIjpcIjEwMDU6MTYsMTAwMToxNCwxMDE1OjM0LDEwMDg6MTZcIn0se1wiaWRcIjo5NixcImNvbW1pc3Npb25cIjowLjA2LFwiY29uZGl0aW9uXCI6XCIxMDAzOjI0LDEwMDE6MzIsMTAwNzoyOCwxMDA1OjE4XCJ9LHtcImlkXCI6OTcsXCJjb21taXNzaW9uXCI6MC43NCxcImNvbmRpdGlvblwiOlwiMTAxMzozMiwxMDA5OjIzLDEwMDY6MzAsMTAxMToyMFwifV0sXCJsYW5nXCI6W10sXCJsYW5kTGV2ZWxcIjpbe1wiaWRcIjoxLFwicmV3YXJkXCI6XCIxMDAyOjBcIixcImNvc3RcIjpcIjEwMDI6MFwiLFwiZ2FpblwiOm51bGx9LHtcImlkXCI6MixcInJld2FyZFwiOlwiMTAwMjoxNTAwXCIsXCJjb3N0XCI6XCIxMDAyOjEwMDAwXCIsXCJnYWluXCI6MC4xfSx7XCJpZFwiOjMsXCJyZXdhcmRcIjpcIjEwMDI6MjAwMFwiLFwiY29zdFwiOlwiMTAwMjozMDAwMFwiLFwiZ2FpblwiOjAuMjV9LHtcImlkXCI6NCxcInJld2FyZFwiOlwiMTAwMjoyNTAwXCIsXCJjb3N0XCI6XCIxMDAyOjUwMDAwXCIsXCJnYWluXCI6MC40fSx7XCJpZFwiOjUsXCJyZXdhcmRcIjpcIjEwMDI6MzAwMFwiLFwiY29zdFwiOlwiMTAwMjoxMDAwMDBcIixcImdhaW5cIjowLjU1fV0sXCJmZWVkXCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1OTk3Q1x1NUU3MlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwMV9mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjoxLFwiY29zdFwiOlwiMTAwMjozMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTU3NUFcdTY3OUNcIixcImljb25cIjpcInBldF9mZWVkLzEwMDJfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MixcImNvc3RcIjpcIjEwMDI6NTBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDAzLFwibmFtZVwiOlwiXHU3MDZCXHU4MTdGXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAzX2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjUsXCJjb3N0XCI6XCIxMDAyOjEwMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTcyNUJcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDRfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6NTAsXCJjb3N0XCI6XCIxMDAyOjkwMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTczMkFcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDVfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MjAsXCJjb3N0XCI6XCIxMDAyOjQ2MFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDYsXCJuYW1lXCI6XCJcdTlFMjFcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDZfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MTAsXCJjb3N0XCI6XCIxMDAyOjI3MFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifV0sXCJjdXJyZW5jeVwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTk0QkJcdTc3RjNcIixcImljb25cIjpcIm1haW5fc2NlbmUvaW1nX2RpYW1vbmQucG5nXCJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1OTFEMVx1NUUwMVwiLFwiaWNvblwiOlwibWFpbl9zY2VuZS9pbWdfY29pbi5wbmdcIn1dLFwiY29uZmlnXCI6W3tcImlkXCI6XCJhbGxfc3BlZWRfdXBfdGltZXNcIixcInZhbHVlXCI6MzB9LHtcImlkXCI6XCJhbGxfc3BlZWRfdXBfdGltZVwiLFwidmFsdWVcIjo2MDB9LHtcImlkXCI6XCJ1bmxvY2tfbGFuZF9jb3N0XCIsXCJ2YWx1ZVwiOlwiMTAwMjowLDEwMDI6MCwxMDAyOjIwMDAsMTAwMjo1MDAwLDEwMDI6MTAwMDAsMTAwMjoyMDAwMCwxMDAyOjIwMDAwLDEwMDI6MzAwMDAsMTAwMjo1MDAwMFwifSx7XCJpZFwiOlwiZ29sZERlZmF1bHRcIixcInZhbHVlXCI6XCIxMDAyOjEwMFwifSx7XCJpZFwiOlwiZGlhbW9uZERlZmF1bHRcIixcInZhbHVlXCI6XCIxMDAxOjUwXCJ9LHtcImlkXCI6XCJBRFRpbWVzTGltaXRcIixcInZhbHVlXCI6MzB9LHtcImlkXCI6XCJBRFNwZWVkVXB0aW1lc1wiLFwidmFsdWVcIjo2fSx7XCJpZFwiOlwidml0YWxpdHlCdXlDb3N0R29sZFwiLFwidmFsdWVcIjpcIjEwMDI6MTAwMDBcIn0se1wiaWRcIjpcInZpdGFsaXR5TGltaXRcIixcInZhbHVlXCI6MTB9LHtcImlkXCI6XCJsYW5kQW1vdW50TWF4XCIsXCJ2YWx1ZVwiOjl9LHtcImlkXCI6XCJwZXREZWZhdWx0Vml0YWxpdHlcIixcInZhbHVlXCI6MTAwfSx7XCJpZFwiOlwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCIsXCJ2YWx1ZVwiOjYwfSx7XCJpZFwiOlwiVmlkZW9yZXdhcmRzXCIsXCJ2YWx1ZVwiOlwiMTAwMToxMDBcIn1dfTsiLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTVCNTdcdTdCMjZcclxuICAgICAqIEBwYXJhbSBzdHIgXHU4OTgxXHU4OUUzXHU2NzkwXHU3Njg0XHU1QjU3XHU3QjI2XHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IFx1NTA1QVx1NEUzQVx1NTNDMlx1ODAwM1x1NzY4NFx1NUI1N1x1N0IyNlx1OUVEOFx1OEJBNFx1NEUzQSxcclxuICAgICAqIEByZXR1cm5zIFx1ODlFM1x1Njc5MFx1NTk3RFx1NzY4NFx1NUI1N1x1N0IyNlx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VTdHJpbmcoc3RyOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nID0gXCIsXCIpIHtcclxuICAgICAgICBpZiAoIXN0cikgcmV0dXJuIFtdO1xyXG4gICAgICAgIHJldHVybiBzdHIuc3BsaXQoZm9ybWF0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzlEMlx1OEY2Q1x1NjM2Mlx1NjIxMDAwOjAwOjAwXHJcbiAgICAgKiBAcGFyYW0gcyBcdThGNkNcdTYzNjJcdTY1RjZcdTk1RjRcdTc2ODRcdTc5RDJcclxuICAgICAqIEByZXR1cm5zIDAwOjAwOjAwXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmb3JtYXRTZWNvbmRzID0gKHMpID0+IG5ldyBEYXRlKHMgKiAxMDAwKS50b0lTT1N0cmluZygpLnN1YnN0cigxMSwgOCk7XHJcbn1cclxuIiwgImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4vVGFibGVcIjtcclxuaW1wb3J0IHtcclxuICAgIENvbmZpZ0Jhc2UsXHJcbiAgICBDdXJyZW5jeUJhc2UsXHJcbiAgICBGZWVkQmFzZSxcclxuICAgIExhbmRMZXZlbEJhc2UsXHJcbiAgICBPcmRlckJhc2UsXHJcbiAgICBQZXRCYXNlLFxyXG4gICAgUGxhbnRCYXNlLFxyXG4gICAgUmV3YXJkQmFzZSxcclxuICAgIFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgIFNpZ25JbkJhc2UsXHJcbiAgICBUYXNrQmFzZSxcclxufSBmcm9tIFwiLi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcIi4vVG9vbHNcIjtcclxuXHJcbmNvbnN0IFRhYmxlUHJvcGVydHlFdmVudCA9IHtcclxuICAgIHBldChkOiB0eXBlb2YgVGFibGUucGV0WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQZXRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uIHx8IGBwZXRfZmVlZC8ke2QuaWR9X2RvZy5wbmdgLFxyXG4gICAgICAgICAgICB2aXRhbGl0eV9tYXg6IGQudml0YWxpdHlfbWF4LFxyXG4gICAgICAgICAgICB2aXRhbGl0eV9jb25zdW1lOiBkLnZpdGFsaXR5X2NvbnN1bWUsXHJcbiAgICAgICAgICAgIGNvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLmNvc3QpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHNlbnNpdGl2ZTogZC5zZW5zaXRpdmUsXHJcbiAgICAgICAgICAgIGFiaWxpdHk6IGQuYWJpbGl0eSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OTk3Mlx1NjU5OVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBmZWVkKGQ6IHR5cGVvZiBUYWJsZS5mZWVkWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxGZWVkQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbiB8fCBgcGV0X2ZlZWQvJHtkLmlkfV9mZWVkLnBuZ2AsXHJcbiAgICAgICAgICAgIHZpdGFsaXR5OiBkLnZpdGFsaXR5LFxyXG4gICAgICAgICAgICBjb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5jb3N0KSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU4QkEyXHU1MzU1XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgb3JkZXIoZDogdHlwZW9mIFRhYmxlLm9yZGVyWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxPcmRlckJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgY29tbWlzc2lvbjogTnVtYmVyKGQuY29tbWlzc2lvbiksXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbjogVG9vbHMucGFyc2VTdHJpbmcoZC5jb25kaXRpb24pLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBUb29scy5wYXJzZVN0cmluZyhlLCBcIjpcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW50OiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoTnVtYmVyKHZbMF0pKSxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogTnVtYmVyKHZbMV0pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTYyMTBcdTcxOUZcdTY5MERcdTcyNjlcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwbGFudChkOiB0eXBlb2YgVGFibGUucGxhbnRbMF0pIHtcclxuICAgICAgICByZXR1cm4gPFBsYW50QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbixcclxuICAgICAgICAgICAgbWF0dXJlSWNvbjogYHBsYW50X2ljb24vJHtkLmljb24ubWF0Y2goL1xcZCsvZylbMF19X21hdHVyZS5wbmdgLFxyXG4gICAgICAgICAgICBncm93aW5nSWNvbjogYHBsYW50X2ljb24vJHtkLmljb24ubWF0Y2goL1xcZCsvZylbMF19X2dyb3dpbmcucG5nYCxcclxuICAgICAgICAgICAgZ2FpbjogVG9vbHMucGFyc2VTdHJpbmcoZC5nYWluKS5tYXAoKGUpID0+IGdldFJld2FyZEN1cnJlbmN5QmFzZShlKSksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICAgICAgc2VlZF9wcmljZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuc2VlZF9wcmljZSksXHJcbiAgICAgICAgICAgIGhhcnZlc3Q6IE51bWJlcihUb29scy5wYXJzZVN0cmluZyhkLmhhcnZlc3QsIFwiflwiKVsxXSksXHJcbiAgICAgICAgICAgIG1hdHVyZV90aW1lOiBOdW1iZXIoZC5tYXR1cmVfdGltZSksXHJcbiAgICAgICAgICAgIHVubG9ja19jb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC51bmxvY2tfY29zdCksXHJcbiAgICAgICAgICAgIHVubG9ja19yZXdhcmQ6IFRvb2xzLnBhcnNlU3RyaW5nKGQudW5sb2NrX3Jld2FyZCkubWFwKChlKSA9PiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZSkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU4RDI3XHU1RTAxXHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgY3VycmVuY3koZDogdHlwZW9mIFRhYmxlLmN1cnJlbmN5WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxDdXJyZW5jeUJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTU3MUZcdTU3MzBcdTdCNDlcdTdFQTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgbGFuZExldmVsKGQ6IHR5cGVvZiBUYWJsZS5sYW5kTGV2ZWxbMF0pIHtcclxuICAgICAgICByZXR1cm4gPExhbmRMZXZlbEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgcmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5yZXdhcmQpLFxyXG4gICAgICAgICAgICBjb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5jb3N0KSxcclxuICAgICAgICAgICAgZ2FpbjogZC5nYWluLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbmZpZyhkOiB0eXBlb2YgVGFibGUuY29uZmlnWzBdKSB7XHJcbiAgICAgICAgc3dpdGNoIChkLmlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhbGxfc3BlZWRfdXBfdGltZXNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcImFsbF9zcGVlZF91cF90aW1lc1wiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImFsbF9zcGVlZF91cF90aW1lXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJhbGxfc3BlZWRfdXBfdGltZVwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInVubG9ja19sYW5kX2Nvc3RcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwidW5sb2NrX2xhbmRfY29zdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBUb29scy5wYXJzZVN0cmluZyhkLnZhbHVlIGFzIHN0cmluZykubWFwKChkKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZClcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJnb2xkRGVmYXVsdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJnb2xkRGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBcImRpYW1vbmREZWZhdWx0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImRpYW1vbmREZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykuY291bnQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiQURUaW1lc0xpbWl0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJBRFRpbWVzTGltaXRcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcIkFEU3BlZWRVcHRpbWVzXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJBRFNwZWVkVXB0aW1lc1wiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwidml0YWxpdHlCdXlDb3N0R29sZFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykuY291bnQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwidml0YWxpdHlMaW1pdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwidml0YWxpdHlMaW1pdFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZEFtb3VudE1heFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwibGFuZEFtb3VudE1heFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwicGV0RGVmYXVsdFZpdGFsaXR5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJwZXREZWZhdWx0Vml0YWxpdHlcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcInBldERpZ2VzdEludGVydmFsVGltZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJWaWRlb3Jld2FyZHNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcIlZpZGVvcmV3YXJkc1wiLCB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKSB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTk1MDFcdTdCN0VcdTUyMzBcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkXHJcbiAgICAgKi9cclxuICAgIHNpZ25JbihkOiB0eXBlb2YgVGFibGUuc2lnbkluWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxTaWduSW5CYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGRheXM6IGQuZGF5cyxcclxuICAgICAgICAgICAgcmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5yZXdhcmQpLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU0RUZCXHU1MkExXHU4ODY4XHJcbiAgICAgKi9cclxuICAgIHRhc2soZDogdHlwZW9mIFRhYmxlLnRhc2tbMF0pIHtcclxuICAgICAgICByZXR1cm4gPFRhc2tCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIHRpbWVzOiBkLnRpbWVzLFxyXG4gICAgICAgICAgICByZXdhcmQ6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnJld2FyZCksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICAgICAgdGl0bGU6IGQudGl0bGUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbiB8fCBgZ2FtZS9pbWdfYmFybS5wbmdgLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFx1ODlFM1x1Njc5MFx1OEQyN1x1NUUwMVxyXG4gKiBAcGFyYW0gc3RyIFx1ODlFM1x1Njc5MFx1NzY4NFx1OEQyN1x1NUUwMVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NCBpZDpudW1cclxuICovXHJcbmZ1bmN0aW9uIGdldFJld2FyZEN1cnJlbmN5QmFzZShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IGxpc3QgPSBUb29scy5wYXJzZVN0cmluZyhzdHIsIFwiOlwiKTtcclxuXHJcbiAgICByZXR1cm4gPFJld2FyZEN1cnJlbmN5QmFzZT57XHJcbiAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoTnVtYmVyKGxpc3RbMF0pKSxcclxuICAgICAgICBjb3VudDogTnVtYmVyKGxpc3RbMV0pLFxyXG4gICAgfTtcclxufVxyXG5cclxudHlwZSB0eXBlVGFibGUgPSB0eXBlb2YgVGFibGVQcm9wZXJ0eUV2ZW50O1xyXG5cclxuY2xhc3MgVGFibGVDb250cm9sIHtcclxuICAgIHByaXZhdGUgdGFibGVDYWNoZTogTWFwPGtleW9mIHR5cGVUYWJsZSwgUmV0dXJuVHlwZTx0eXBlVGFibGVba2V5b2YgdHlwZVRhYmxlXT5bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTc2ODRcdTg4NjhcclxuICAgICAqIEBwYXJhbSBrZXkgXHU4ODY4XHU3Njg0a2V5XHJcbiAgICAgKi9cclxuICAgIHRhYmxlPFQgZXh0ZW5kcyBrZXlvZiB0eXBlVGFibGU+KFxyXG4gICAgICAgIGtleTogVFxyXG4gICAgKToge1xyXG4gICAgICAgIGxpc3Q6IFJldHVyblR5cGU8dHlwZVRhYmxlW1RdPltdO1xyXG4gICAgICAgIGdldDogeyAoaWQ6IG51bWJlciB8IHN0cmluZyk6IFJldHVyblR5cGU8dHlwZVRhYmxlW1RdPiB9O1xyXG4gICAgfSB7XHJcbiAgICAgICAgLy9cdThCRkJcdTUzRDZcdTdFQzRcdTYyMTBcclxuICAgICAgICBpZiAodGhpcy50YWJsZUNhY2hlLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayh0aGlzLnRhYmxlQ2FjaGUuZ2V0KGtleSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1x1ODlFM1x1Njc5MFx1NjU3MFx1NjM2RVxyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgVGFibGVba2V5XS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChUYWJsZVByb3BlcnR5RXZlbnRba2V5XShlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cdTdGMTNcdTVCNThcdTg5RTNcdTY3OTBcdTg4NjhcdTc2ODRcdTY1NzBcdTYzNkVcclxuICAgICAgICB0aGlzLnRhYmxlQ2FjaGUuc2V0KGtleSwgbGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVCYWNrKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NTI4XHU0RThFdGFibGVcdTY1QjlcdTZDRDVcdThGRDRcdTU2REVcdTY1NzBcdTYzNkVcdTY4M0NcdTVGMEZcdTU0OENcdTZERkJcdTUyQTBcdTgzQjdcdTUzRDZcdTUzNTVcdTRFMkFcdTg4NjhcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1ODlFM1x1Njc5MFx1ODg2OFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU2MzA3XHU1QjlBXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGFibGVCYWNrKGxpc3QpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsaXN0OiBsaXN0LFxyXG4gICAgICAgICAgICBnZXQoaWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gbGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFt4XS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdFt4XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU4ODY4XHU2ODNDXHU4OUUzXHU2NzkwXHU1REU1XHU1MTc3XHJcbiAqL1xyXG5jb25zdCBUYWJsZUFuYWx5emUgPSBuZXcgVGFibGVDb250cm9sKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQW5hbHl6ZTtcclxuIiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBUYXNrQmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYXNrRGF0YU9iaiB7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExaWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU1QjhDXHU2MjEwXHU2QjIxXHU2NTcwICovXHJcbiAgICB0aW1lczogbnVtYmVyO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTg4Nlx1NTNENlx1NTk1Nlx1NTJCMSAwXHU2NzJBXHU5ODg2XHU1M0Q2IDFcdTVERjJcdTk4ODZcdTUzRDYgKi9cclxuICAgIHJlY2VpdmU6IG51bWJlcjtcclxuICAgIC8qKiBcdTRFRkJcdTUyQTFcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFRhc2tCYXNlO1xyXG59XHJcbi8qKlxyXG4gKiBcdTRFRkJcdTUyQTFcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFRhc2tTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFRhc2tEYXRhT2JqW10gPSBbXTtcclxuXHJcbiAgICBpbml0KGQ6IE5ldEluaXRbXCJ0YXNrc1wiXSkge1xyXG4gICAgICAgIGQuZm9yRWFjaCgoZSkgPT5cclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGUuaWQsXHJcbiAgICAgICAgICAgICAgICB0aW1lczogZS50aW1lcyxcclxuICAgICAgICAgICAgICAgIHJlY2VpdmU6IGUucmVjZWl2ZSxcclxuICAgICAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInRhc2tcIikuZ2V0KGUuaWQpLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTRFRkJcdTUyQTFcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0VGFzayhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFt4XS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHRBID0gdGhpcy5nZXRUYXNrKGEuaWQpLFxyXG4gICAgICAgICAgICAgICAgdEIgPSB0aGlzLmdldFRhc2soYi5pZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgYS5pZCArXHJcbiAgICAgICAgICAgICAgICAodEE/LnJlY2VpdmUgPyAxMDAwIDogMSkgK1xyXG4gICAgICAgICAgICAgICAgKHRBPy50aW1lcyA+PSBhLmJhc2UudGltZXMgPyAxMDAgOiAxMDAwKSAtXHJcbiAgICAgICAgICAgICAgICAoYi5pZCArICh0Qj8ucmVjZWl2ZSA/IDEwMDAgOiAxKSArICh0Qj8udGltZXMgPj0gYi5iYXNlLnRpbWVzID8gMTAwIDogMTAwMCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTRFRkJcdTUyQTFcdTZERkJcdTUyQTBcdTZCMjFcdTY1NzBcclxuICAgICAqL1xyXG4gICAgdGFza0FkZFRpbWVzKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFzayA9IHRoaXMuZ2V0VGFzayhpZCk7XHJcbiAgICAgICAgaWYgKCF0YXNrKSB7XHJcbiAgICAgICAgICAgIC8vXHU5RUQ4XHU4QkE0XHU0RTBEXHU1MjFCXHU1RUZBXHU0RUZCXHU1MkExXHJcbiAgICAgICAgICAgIC8vIHRhc2sgPSB7IGlkOiBpZCwgdGltZXM6IDAsIHJlY2VpdmU6IDAsIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInRhc2tcIikuZ2V0KGlkKSB9O1xyXG4gICAgICAgICAgICAvLyB0aGlzLmxpc3QucHVzaCh0YXNrKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFzay50aW1lcysrO1xyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV90YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFza1NlcnZpY2UoKTtcclxuIiwgImV4cG9ydCB0eXBlIExhbmRPYmogPSBOZXRJbml0W1wibGFuZHNcIl1bMF07XHJcblxyXG5jbGFzcyBMYW5kU2VydmljZSB7XHJcbiAgICAvKipcclxuICAgICAqIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBsaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGxpc3QgXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGluaXQobGlzdDogTGFuZE9ialtdKSB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTGFuZChkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEUwMFx1NTc1N1x1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGlkIFx1NTcxRlx1NTczMGlkXHJcbiAgICAgKiBAcmV0dXJucyBcdThGRDRcdTU2REVcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgZ2V0TGFuZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5nZXQoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2REZCXHU1MkEwXHU2MjE2XHU2NjJGXHU2NkY0XHU2NUIwXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gZCBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgYWRkTGFuZChkOiBMYW5kT2JqKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LnNldChkLmlkLCBkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1N0E3QVx1NTcxRlx1NTczMFx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QuY2xlYXIoKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExhbmRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBQZXRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGV0RGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1NUJBMFx1NzI2OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogUGV0QmFzZTtcclxuICAgIC8qKiBcdTk1MDFcdTVCOUEgKi9cclxuICAgIGxvY2s6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTVCQTBcdTcyNjlcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFBldFNlcnZpY2Uge1xyXG4gICAgbGlzdDogUGV0RGF0YUJhc2VbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjFEXHU1OUNCXHU1MzE2XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGluaXQocGV0czogbnVtYmVyW10pIHtcclxuICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IGQsXHJcbiAgICAgICAgICAgICAgICBsb2NrOiAhcGV0cy5pbmNsdWRlcyhkLmlkKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTVCQTBcdTcyNjlcdTg5RTNcdTk1MDFcdTY1NzBcdTkxQ0ZcclxuICAgICAqL1xyXG4gICAgZ2V0VW5sb2NrTGVuKCkge1xyXG4gICAgICAgIGxldCBsZW4gPSAwO1xyXG4gICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZC5sb2NrKSBsZW4rKztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGVuO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUGV0U2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGxhbnRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGxhbnREYXRhQmFzZSB7XHJcbiAgICAvKiogXHU2OTBEXHU3MjY5XHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBQbGFudEJhc2U7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU5NTAxXHU1QjlBICovXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG59XHJcbi8qKlxyXG4gKiBcdTY5MERcdTcyNjlcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICovXHJcbmNsYXNzIFBsYW50U2VydmljZSB7XHJcbiAgICBsaXN0OiBQbGFudERhdGFCYXNlW10gPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICogXHU1MjFEXHU1OUNCXHU1MzE2XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTc5Q0RcdTVCNTBpZFx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBpbml0KGxpc3Q6IG51bWJlcltdKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHsgYmFzZTogZCwgbG9jazogIWxpc3QuaW5jbHVkZXMoZC5pZCkgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTY5MERcdTcyNjlcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBpZCBcdTY5MERcdTcyNjlpZFxyXG4gICAgICogQHJldHVybnMgXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGdldFBsYW50KGlkOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdGhpcy5saXN0Lmxlbmd0aCAtIDE7IHggPiAtMTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uYmFzZS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1OTY2NFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUGxhbnRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuLi9jb3JlL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU3NTI4XHU2MjM3XHU0RkUxXHU2MDZGXHJcbiAqL1xyXG5jbGFzcyBVc2VySW5mbyB7XHJcbiAgICAvKiogXHU4QkEyXHU1MzU1XHU3QjQ5XHU3RUE3IFx1NURGMlx1NUI4Q1x1NjIxMCAqL1xyXG4gICAgb3JkZXJMZXZlbDogbnVtYmVyID0gMTtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTU0MERcdTc5RjAgKi9cclxuICAgIG5pY2tuYW1lOiBzdHJpbmcgPSBcIm5hbWVcIjtcclxuICAgIC8vIC8qKiBcdTc1MjhcdTYyMzdpZCAqL1xyXG4gICAgLy8gdWlkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NTUyRlx1NEUwMFx1NjgwN1x1OEJDNiAqL1xyXG4gICAga2V5OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgLyoqIFx1NzUyOFx1NTQwRFx1NTkzNFx1NTBDRiAqL1xyXG4gICAgYXZhdGFyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIFx1OTRCQlx1NzdGMyAqL1xyXG4gICAgZGlhbW9uZDogbnVtYmVyID0gOTk5O1xyXG4gICAgLyoqIFx1OTFEMVx1NUUwMSAqL1xyXG4gICAgZ29sZDogbnVtYmVyID0gOTk5O1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NTNFRlx1NEVFNVx1NzcwQlx1NUU3Rlx1NTQ0QVx1NzY4NFx1NkIyMVx1NjU3MCAqL1xyXG4gICAgYWR2ZXJ0aXNlVGltZXM6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3M0E5XHU1QkI2XHU0RjY5XHU2MjM0XHU3Njg0XHU1QkEwXHU3MjY5ICovXHJcbiAgICB3YXJlUGV0SWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTUyNjlcdTRGNTlcdTRGNTNcdTUyOUIgKi9cclxuICAgIHBldFZpdGFsaXR5OiBudW1iZXI7XHJcbiAgICAvKiogXHU2RDg4XHU1MzE2XHU5OERGXHU3MjY5XHU1MDEyXHU4QkExXHU2NUY2ICovXHJcbiAgICBkaWdlc3RDb3VudERvd246IG51bWJlcjtcclxuICAgIC8qKiBcdThGREVcdTdFRURcdTdCN0VcdTUyMzBcdTU5MjlcdTY1NzAgKi9cclxuICAgIHNpZ25JbkRheXM6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU0RTBBXHU0RTAwXHU2QjIxXHU5ODg2XHU1M0Q2XHU3Njg0XHU3QjdFXHU1MjMwXHU1OTU2XHU1MkIxaWQgKi9cclxuICAgIHNpZ25JbklkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NURGMlx1N0VDRlx1NTJBMFx1OTAxRlx1NkIyMVx1NjU3MCAqL1xyXG4gICAgc3BlZWRVcFRpbWVzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NEY1M1x1NTI5QiAqL1xyXG4gICAgdml0YWxpdHk6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1MTUxXHU2MzYyXHU2QkQ0XHU0RjhCICovXHJcbiAgICBwcm9wb3J0aW9uOiBudW1iZXIgPSAwLjAwMDE7XHJcblxyXG4gICAgZ2V0IHR0dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlckxldmVsO1xyXG4gICAgfVxyXG4gICAgc2V0IHR0dCh2KSB7XHJcbiAgICAgICAgdGhpcy5vcmRlckxldmVsID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLm5pY2tuYW1lID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJJbmZvKCk7XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGxhbnRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogXHU0RUQzXHU1RTkzXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFdhcmVIb3VzZURhdGEge1xyXG4gICAgYmFzZTogUGxhbnRCYXNlO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHR5cGU/OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1x1NjU3MFx1NjM2RVxyXG4gKi9cclxuY2xhc3MgV2FyZWhvdXNlU2VydmljZSB7XHJcbiAgICBsaXN0OiBXYXJlSG91c2VEYXRhW10gPSBbXTtcclxuXHJcbiAgICBpbml0KFxyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgdHlwZTogbnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgKSB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLmlkKSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiBkLmFtb3VudCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1NTFDRlx1NUMxMVx1NzI2OVx1NTRDMVx1NjU3MFx1OTFDRlxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKiBAcGFyYW0gYW1vdW50XHJcbiAgICAgKi9cclxuICAgIHJlZHVjZUFtb3VudChpZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uYmFzZS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W3hdLmNvdW50IC09IGFtb3VudDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uY291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5zcGxpY2UoeCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX09yZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEUwMFx1NEUyQVx1OTA1M1x1NTE3N1xyXG4gICAgICovXHJcbiAgICBnZXRPbmUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW0oaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SXRlbShpZCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uYmFzZS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZERkJcdTUyQTBcdTcyNjlcdTU0QzFcclxuICAgICAqL1xyXG4gICAgYWRkKGlkOiBudW1iZXIsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oaWQpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnQgKz0gYW1vdW50O1xyXG4gICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfT3JkZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChpZCksXHJcbiAgICAgICAgICAgIGNvdW50OiBhbW91bnQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBXYXJlaG91c2VTZXJ2aWNlKCk7XHJcbiIsICIvKipcclxuICogXHU3N0VEXHU5NEZFXHU2M0E1XHU4QkY3XHU2QzQyXHU1MzRGXHU4QkFFXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBcGlIdHRwIHtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgKi9cclxuICAgIGxvZ2luID0gXCIvbG9naW5cIixcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgdG9rZW4gKi9cclxuICAgIGxvZ2luVG9rZW4gPSBcIi9sb2dpbi90b2tlblwiLFxyXG4gICAgLyoqIFx1OTg4Nlx1NTNENlx1OEJBMlx1NTM1NVx1NTk1Nlx1NTJCMSAqL1xyXG4gICAgb3JkZXJSZXdhcmQgPSBcIi9vcmRlci9yZXdhcmRcIixcclxuICAgIC8qKiBcdTk4ODZcdTUzRDZcdThCQTJcdTUzNTVcdTU5NTZcdTUyQjEgKi9cclxuICAgIHNpZ25JblJld2FyZCA9IFwiL3NpZ25Jbi9yZXdhcmRcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTg5RTNcdTk1MDEgKi9cclxuICAgIGxhbmRVbmxvY2sgPSBcIi9sYW5kL3VubG9ja1wiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjRBRFx1NzlDRCAqL1xyXG4gICAgbGFuZFNvdyA9IFwiL2xhbmQvc293XCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU2NTM2XHU4M0I3ICovXHJcbiAgICBsYW5kR2F0aGVyID0gXCIvbGFuZC9nYXRoZXJcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTcgKi9cclxuICAgIGxhbmRVcGdyYWRlID0gXCIvbGFuZC91cGdyYWRlXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MkEwXHU5MDFGICovXHJcbiAgICBsYW5kU3BlZWRVcCA9IFwiL2xhbmQvc3BlZWRVcFwiLFxyXG4gICAgLyoqIFx1NzlDRFx1NUI1MFx1ODlFM1x1OTUwMSAqL1xyXG4gICAgc2VlZHNVbmxvY2sgPSBcIi9zZWVkcy91bmxvY2tcIixcclxuICAgIC8qKiBcdTgzQjdcdTUzRDZcdTgwQ0NcdTUzMDVcdTUyMTdcdTg4Njg9PiBcdTY2ODJcdTY1RjZcdThGRDlcdTRFMkFcdTYzQTVcdTUzRTNcdTRFMERcdTk3MDBcdTg5ODFcdTc1MjggKi9cclxuICAgIHdhcmVob3VzZSA9IFwiL3dhcmVob3VzZVwiLFxyXG4gICAgLyoqIFx1ODBDQ1x1NTMwNVx1NTU0Nlx1NTRDMVx1NTFGQVx1NTUyRSAqL1xyXG4gICAgd2FyZWhvdXNlU2VsbCA9IFwiL3dhcmVob3VzZS9zZWxsXCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU4RDJEXHU0RTcwICovXHJcbiAgICBwZXRCdXkgPSBcIi9wZXQvYnV5XCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU0RjY5XHU2MjM0ICovXHJcbiAgICBwZXRXZWFyID0gXCIvcGV0L3dlYXJcIixcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdThEMkRcdTRFNzAgKi9cclxuICAgIGZlZWRCdXkgPSBcIi9mZWVkL2J1eVwiLFxyXG4gICAgLyoqIFx1NEVGQlx1NTJBMVx1NTk1Nlx1NTJCMVx1OTg4Nlx1NTNENiAqL1xyXG4gICAgdGFza1Jld2FyZCA9IFwiL3Rhc2svcmV3YXJkXCIsXHJcbiAgICAvKiogXHU5MEJCXHU1QzQ1ICovXHJcbiAgICBuZWlnaGJvciA9IFwiL25laWdoYm9yXCIsXHJcbiAgICAvKiogXHU1MDc3XHU4M0RDICovXHJcbiAgICBsYW5kU3RlYWwgPSBcIi9sYW5kL3N0ZWFsXCIsXHJcbiAgICAvKiogXHU1MzU1XHU3MkVDXHU2N0U1XHU3NzBCXHU1RTdGXHU1NDRBICovXHJcbiAgICBhZCA9IFwiL2FkXCIsXHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU0RjUzXHU1MjlCXHU4RDJEXHU0RTcwICovXHJcbiAgICB2aXRhbGl0eUJ1eSA9IFwiL3ZpdGFsaXR5L2J1eVwiLFxyXG4gICAgLyoqIFx1NTZERVx1ODFFQVx1NURGMVx1NUJCNiAqL1xyXG4gICAgZ29Ib21lID0gXCIvZ29Ib21lXCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU1MjIwXHU5NjY0ICovXHJcbiAgICBmcmllbmREZWxldGUgPSBcIi9mcmllbmQvZGVsZXRlXCIsXHJcbiAgICAvKiogXHU5MDFBXHU4RkM3XHU1OTdEXHU1M0NCXHU3NTMzXHU4QkY3ICovXHJcbiAgICBmcmllbmRBbGxvdyA9IFwiL2ZyaWVuZC9hbGxvd1wiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1NzUzM1x1OEJGNyAqL1xyXG4gICAgZnJpZW5kQXBwbHkgPSBcIi9mcmllbmQvYXBwbHlcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTY0MUNcdTdEMjIgKi9cclxuICAgIGZyaWVuZFNlYXJjaCA9IFwiL2ZyaWVuZC9zZWFyY2hcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZExpc3QgPSBcIi9mcmllbmQvbGlzdFwiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1OTA4MFx1OEJGN1x1ODAwNVx1N0VEMVx1NUI5QSAqL1xyXG4gICAgZnJpZW5kSW52aXRlUGVvcGxlID0gXCIvZnJpZW5kL2ludml0ZS9wZW9wbGVcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZEludml0ZUxpc3QgPSBcIi9mcmllbmQvaW52aXRlL2xpc3RcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTU5NTZcdTUyQjFcdUZGMENcdTk4ODZcdTUzRDYgKi9cclxuICAgIGZyaWVuZEludml0ZVJlY2VpdmUgPSBcIi9mcmllbmQvaW52aXRlL3JlY2VpdmVcIixcclxuICAgIC8qKiBcdThCQkZcdTk1RUVcdTU5N0RcdTUzQ0JcdTVCQjZcdTkxQ0MgKi9cclxuICAgIGZyaWVuZFZpc2l0ID0gXCIvZnJpZW5kL3Zpc2l0XCIsXHJcbn1cclxuIiwgImltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFBldFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9QZXRTZXJ2aWNlXCI7XHJcbmltcG9ydCBQbGFudFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwiLi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vUmVzXCI7XHJcblxyXG4vKipcclxuICogXHU1MzRGXHU4QkFFXHU2NTcwXHU2MzZFXHU1OTA0XHU3NDA2XHJcbiAqL1xyXG5jbGFzcyBIdHRwRGF0YUNvbnRyb2wge1xyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1OEY2Q1x1NTNEMSAqL1xyXG4gICAgZm9yd2FyZChkOiB7XHJcbiAgICAgICAgYXBpOiBBcGlIdHRwO1xyXG4gICAgICAgIGRhdGE6IGFueTtcclxuICAgICAgICBjYWxsPzogRnVuY3Rpb247XHJcbiAgICAgICAgcmVzb2x2ZUV2ZW50PzogRnVuY3Rpb247XHJcbiAgICAgICAgZXJyb3I/OiBGdW5jdGlvbjtcclxuICAgIH0pIHtcclxuICAgICAgICBzd2l0Y2ggKGQuYXBpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sb2dpbjpcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxvZ2luVG9rZW46XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRTcGVlZFVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5hZDpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZEdhdGhlcjpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDAzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAuZmVlZEJ1eTpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFNvdzpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA3KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAud2FyZWhvdXNlU2VsbDpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnNlZWRzVW5sb2NrOlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRTb3c6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFVubG9jazpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5wZXRCdXk6XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC52aXRhbGl0eUJ1eTpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC50YXNrUmV3YXJkOlxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFVwZ3JhZGU6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAub3JkZXJSZXdhcmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGQucmVzb2x2ZUV2ZW50KSBkLnJlc29sdmVFdmVudChkLmRhdGEpO1xyXG5cclxuICAgICAgICBpZiAoZC5jYWxsKSB7XHJcbiAgICAgICAgICAgIGQuY2FsbChkLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KGQuYXBpLCBkLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKGVycm9yQ29kZTogbnVtYmVyLCBkYXRhOiBhbnkpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAvLyB0ZXh0OiBgZXJyb3JDb2RlICR7ZXJyb3JDb2RlfSAke0pTT04uc3RyaW5naWZ5KGRhdGEpfWAsXHJcbiAgICAgICAgICAgIHRleHQ6IGAke2RhdGE/Lm1lc3NhZ2V9YCxcclxuICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2N0JcdTVGNTVcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvZ2luKGQ6IE5ldEluaXQpIHtcclxuICAgICAgICBQbGFudFNlcnZpY2UuaW5pdChkLnNlZWRzKTtcclxuICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmluaXQoZC53YXJlaG91c2UpO1xyXG4gICAgICAgIFVzZXJJbmZvLmtleSA9IGQudXNlckluZm8ua2V5O1xyXG4gICAgICAgIFVzZXJJbmZvLmRpYW1vbmQgPSBkLnVzZXJJbmZvLmRpYW1vbmQ7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IGQudXNlckluZm8uZ29sZDtcclxuICAgICAgICBVc2VySW5mby5uaWNrbmFtZSA9IGQudXNlckluZm8ubmlja25hbWU7XHJcbiAgICAgICAgVXNlckluZm8uYXZhdGFyID0gZC51c2VySW5mby5hdmF0YXI7XHJcbiAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCA9IGQub3JkZXJJZCB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLndhcmVQZXRJZCA9IGQud2VhclBldD8uaWQ7XHJcbiAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgPSBkLndlYXJQZXQ/LnZpdGFsaXR5IHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gZC53ZWFyUGV0Py5kaWdlc3RDb3VudERvd24gfHwgMDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IGQuYWR2ZXJ0aXNlVGltZXMgfHwgMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5EYXlzID0gZC5zaWduSW5EYXlzIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBkLnNpZ25JbklkO1xyXG4gICAgICAgIFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9IGQuc3BlZWRVcFRpbWVzO1xyXG4gICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gZC51c2VySW5mby52aXRhbGl0eTtcclxuICAgICAgICBQZXRTZXJ2aWNlLmluaXQoZC5wZXRzKTtcclxuICAgICAgICBUYXNrU2VydmljZS5pbml0KGQudGFza3MpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGQudG9rZW4pIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInRva2VuXCIsIGQudG9rZW4pO1xyXG4gICAgICAgIExhbmRTZXJ2aWNlLmluaXQoZC5sYW5kcyk7XHJcblxyXG4gICAgICAgIENvcmUuYXVkaW8uc291bmRNdXRlZCA9IExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnNvdW5kO1xyXG4gICAgICAgIENvcmUuYXVkaW8ubXVzaWNNdXRlZCA9IExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLm11c2ljO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luT3V0KCkge1xyXG4gICAgICAgIFBsYW50U2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBQZXRTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgTGFuZFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBUYXNrU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgZmFsc2UpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInRva2VuXCIsIG51bGwpO1xyXG4gICAgICAgIFVzZXJJbmZvLmtleSA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8ubmlja25hbWUgPSBcIlwiO1xyXG4gICAgICAgIFVzZXJJbmZvLmF2YXRhciA9IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8ud2FyZVBldElkID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gMDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8udml0YWxpdHkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5RUQ4XHU4QkE0XHU3NTI4XHU2NzY1XHU2NkY0XHU2NUIwXHU3NTI4XHU2MjM3XHU5MUQxXHU1RTAxXHU3QjQ5XHJcbiAgICAgKiBAcGFyYW0gZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVVzZXJJbmZvKGQ6IFJldHVyblVzZXJJbmZvKSB7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IGQuZ29sZDtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC5kaWFtb25kO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcyB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExXHU4RkRCXHU1RUE2XHJcbiAgICAgKiBAcGFyYW0gaWQgXHU0RUZCXHU1MkExaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB0YXNrVXBkYXRlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSHR0cERhdGFDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCJzcmMvY29yZS9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcIi4vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCIuL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cERhdGFDb250cm9sIGZyb20gXCIuL0h0dHBEYXRhQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuaW50ZXJmYWNlIEh0dHBTZW5kRGF0YSB7XHJcbiAgICBhcGk6IEFwaUh0dHA7XHJcbiAgICBkYXRhPzogYW55O1xyXG4gICAgbWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nO1xyXG4gICAgaGVhZGVycz86IGFueVtdIHwgbnVsbDtcclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTk1MTlcdThCRUZcdTU2REVcdThDMDMgKi9cclxuICAgIGVycm9yPzogeyAoY29kZTogbnVtYmVyLCBkYXRhOiBhbnkpOiB2b2lkIH07XHJcbiAgICBiYXNlVXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogXHU3N0VEXHU5NEZFXHU2M0E1XHU2M0E3XHU1MjM2XHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwQ29udHJvbCB7XHJcbiAgICBASW5zdGFuY2VcclxuICAgIHN0YXRpYyBpbnN0OiBIdHRwQ29udHJvbDtcclxuXHJcbiAgICB4aHI6IFhNTEh0dHBSZXF1ZXN0O1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRGF0YTogSHR0cFNlbmREYXRhO1xyXG5cclxuICAgIHByaXZhdGUgYmFja1Jlc29sdmVFdmVudDogRnVuY3Rpb247XHJcblxyXG4gICAgaW5pdCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9IHVybDtcclxuICAgICAgICBpZiAodGhpcy54aHIpIHJldHVybjtcclxuICAgICAgICAvLyBsZXQgeGhyID0gbmV3IExheWEuSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy54aHIuaHR0cC50aW1lb3V0ID0gMTAwMDA7IC8vXHU4RDg1XHU2NUY2XHU2NUY2XHU5NUY0XHJcbiAgICAgICAgLy8geGhyLm9uKExheWEuRXZlbnQuQ09NUExFVEUsIHRoaXMsIHRoaXMuY29tcGxldGVIYW5kbGVyKTtcclxuICAgICAgICAvLyB4aHIub24oTGF5YS5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5lcnJvckhhbmRsZXIpO1xyXG4gICAgICAgIC8vIHhoci5vbihMYXlhLkV2ZW50LlBST0dSRVNTLCB0aGlzLCB0aGlzLnByb2Nlc3NIYW5kbGVyKTtcclxuICAgICAgICAvLyB4aHIuc2VuZChcInJlcy9kYXRhLmRhdGFcIiwgXCJcIiwgXCJnZXRcIiwgXCJ0ZXh0XCIpO1xyXG5cclxuICAgICAgICBsZXQgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHhtbGh0dHAuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVIYW5kbGVyKEpTT04ucGFyc2UoeG1saHR0cC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhtbGh0dHAucmVzcG9uc2VUZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXhtbGh0dHAuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlSGFuZGxlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogNDA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogXCJcdTY3MERcdTUyQTFcdTU2NjhcdTY3MkFcdTU0Q0RcdTVFOTRcdUZGMENcdThCRjdcdTkxQ0RcdThCRDVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy54aHIgPSB4bWxodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNlbmQoZGF0YTogSHR0cFNlbmREYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhLm1ldGhvZCkgZGF0YS5tZXRob2QgPSBcInBvc3RcIjtcclxuICAgICAgICBpZiAoIWRhdGEucmVzcG9uc2VUeXBlKSBkYXRhLnJlc3BvbnNlVHlwZSA9IFwianNvblwiO1xyXG4gICAgICAgIGlmICghZGF0YS5iYXNlVXJsKSBkYXRhLmJhc2VVcmwgPSB0aGlzLmJhc2VVcmw7XHJcblxyXG4gICAgICAgIHRoaXMuc2VuZERhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICAvLyBpZiAoIWRhdGEuZGF0YT8udXNlcklkKSB7XHJcbiAgICAgICAgLy8gICAgIGRhdGEuZGF0YS51c2VySWQgPSBVc2VySW5mby51aWQ7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZiAoIWRhdGEuaGVhZGVycykge1xyXG4gICAgICAgICAgICBkYXRhLmhlYWRlcnMgPSBbXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbn1gXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBgJWMgPT0+IHNlbmQgJWMke2RhdGEuYXBpfSAlYyR7SlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhKX1gLFxyXG4gICAgICAgICAgICBgY29sb3I6IzgyY2NkZDtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgYGNvbG9yOiNlYjRkNGI7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZjhjMjkxO2ZvbnQtd2VpZ2h0OjcwMDtgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy54aHIuc2VuZChcclxuICAgICAgICAvLyAgICAgZGF0YS5iYXNlVXJsICsgZGF0YS5hcGksXHJcbiAgICAgICAgLy8gICAgIGRhdGEuZGF0YSxcclxuICAgICAgICAvLyAgICAgZGF0YS5tZXRob2QsXHJcbiAgICAgICAgLy8gICAgIGRhdGEucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgIC8vICAgICBkYXRhLmhlYWRlcnNcclxuICAgICAgICAvLyApO1xyXG5cclxuICAgICAgICBsZXQgdXJpID0gZGF0YS5iYXNlVXJsICsgZGF0YS5hcGk7XHJcbiAgICAgICAgaWYgKCFkYXRhLmFwaSkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuSGludFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHsgdGV4dDogYGh0dHAgXHU1NzMwXHU1NzQwXHU0RTBEXHU4MEZEXHU0RTNBXHU3QTdBYCB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy54aHIub3BlbihcIlBPU1RcIiwgdXJpLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xyXG4gICAgICAgIC8vIHRoaXMueGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHRoaXMueGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbn1gKTtcclxuXHJcbiAgICAgICAgbGV0IHNlbmREYXRhOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5kYXRhKS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5wdXNoKGAke2R9PSR7ZGF0YS5kYXRhW2RdfWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YT8udHlwZSA9PSBDb25maWdHYW1lLkFwaVR5cGVBRCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnhoci5zZW5kKHNlbmREYXRhLmpvaW4oXCImXCIpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja1Jlc29sdmVFdmVudCA9IHJlc29sdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wbGV0ZUhhbmRsZXIoZSkge1xyXG4gICAgICAgIGlmIChlLmNvZGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VuZERhdGE/LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmREYXRhLmVycm9yKGUuY29kZSwgZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBIdHRwRGF0YUNvbnRyb2wuZXJyb3IoZS5jb2RlLCBlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIGAlYyA8PT0gYmFjayAlYyR7dGhpcy5zZW5kRGF0YS5hcGl9IGAsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6I2I4ZTk5NDtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojNzhlMDhmO2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgZS5kYXRhXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5mb3J3YXJkKHtcclxuICAgICAgICAgICAgICAgIGFwaTogdGhpcy5zZW5kRGF0YS5hcGksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBjYWxsOiB0aGlzLnNlbmREYXRhPy5jYWxsLFxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZUV2ZW50OiB0aGlzLmJhY2tSZXNvbHZlRXZlbnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcHJvY2Vzc0hhbmRsZXIoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vLyAgQWRkTGFuZFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZExhbmRWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29zdEljb24sIHRpcHM6XCJcdTRFRjdcdTY4M0NcdTU2RkVcdTY4MDdcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNvc3RJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb3N0Rm9udCwgdGlwczpcIlx1NEVGN1x1NjgzQ0ZvbnRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNvc3RGb250OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgaWQ6IG51bWJlcjsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBwcml2YXRlIGxhbmREYXRhOiBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcblxyXG4gICAgb25PcGVuZWQoZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZERhdGEgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwidW5sb2NrX2xhbmRfY29zdFwiKS52YWx1ZVtcclxuICAgICAgICAgICAgTGFuZFNlcnZpY2UubGlzdC5zaXplXHJcbiAgICAgICAgXSBhcyBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcbiAgICAgICAgdGhpcy5jb3N0SWNvbi5za2luID0gdGhpcy5sYW5kRGF0YS5vYmouaWNvbjtcclxuICAgICAgICB0aGlzLmNvc3RGb250LnZhbHVlID0gdGhpcy5sYW5kRGF0YS5jb3VudCArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvc3RfZ29sZFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5jb3VudCA+IFVzZXJJbmZvLmdvbGRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5MUQxXHU1RTAxXHU0RTBEXHU4REIzXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmREYXRhLm9iai5pZCA9PSBDb25maWdHYW1lLmRpYW1vbmRJZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEuY291bnQgPiBVc2VySW5mby5kaWFtb25kXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTRCQlx1NzdGM1x1NEUwRFx1OERCM1wiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVW5sb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFVubG9jayxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVBRCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFkZExhbmRWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCBlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vLyAgQnV5Vml0YWxpdHlWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXlWaXRhbGl0eVZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxhYmVsLCB0aXBzOlwiXHU0RUY3XHU2ODNDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxhYmVsOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUljb24sIHRpcHM6XCJcdTRFRjdcdTY4M0NpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9O1xyXG4gICAgcHJpdmF0ZSBjb3N0R29sZENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgb25PcGVuZWQoZTogeyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICBsZXQgY29zdEdvbGRDb3VudCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIpLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICB0aGlzLmNvc3RHb2xkQ291bnQgPSBjb3N0R29sZENvdW50O1xyXG4gICAgICAgIHRoaXMucHJpY2VMYWJlbC50ZXh0ID0gYFx1NEVGN1x1NjgzQ1x1RkYxQSR7Y29zdEdvbGRDb3VudH1gO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5QWRCdG5cIjpcclxuICAgICAgICAgICAgY2FzZSBcImJ1eUJ0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnZpdGFsaXR5ID49IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ2aXRhbGl0eUxpbWl0XCIpLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTRGNTNcdTUyOUJcdTVERjJcdTZFRTFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gXCJidXlCdG5cIiAmJiBVc2VySW5mby5nb2xkIDwgdGhpcy5jb3N0R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnZpdGFsaXR5QnV5LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUgPT0gXCJidXlCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZDogeyBnb2xkOiAwOyBkaWFtb25kOiAwOyBhZHZlcnRpc2VUaW1lczogMDsgdml0YWxpdHk6IDAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudml0YWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5CdXlWaXRhbGl0eVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgTGFuZE9iaiB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuXHJcbi8vICBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMYWJlbCwgdGlwczpcIlx1NEVGN1x1NjgzQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMYWJlbDogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VJY29uLCB0aXBzOlwiXHU0RUY3XHU2ODNDaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgb2JqOiBMYW5kT2JqOyBjYWxsOiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIG9uT3BlbmVkKGU6IHsgb2JqOiBMYW5kT2JqOyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICBsZXQgbmV4dExhbmQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KGUub2JqLmxldmVsICsgMSk7XHJcbiAgICAgICAgdGhpcy5wcmljZUxhYmVsLnRleHQgPSBgXHU0RUY3XHU2ODNDXHVGRjFBJHtuZXh0TGFuZC5jb3N0LmNvdW50fWA7XHJcbiAgICAgICAgdGhpcy5wcmljZUljb24uc2tpbiA9IG5leHRMYW5kLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GaWVsZExldmVsVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidXBncmFkZUJ0blwiOlxyXG4gICAgICAgICAgICBjYXNlIFwidXBncmFkZUFkQnRuXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVXBncmFkZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLm9iai5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUgPT0gXCJ1cGdyYWRlQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IFJldHVyblVzZXJJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwidXBncmFkZUFkQnRuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GaWVsZExldmVsVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc0Rlc2NWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBhbmVsTm9kZSwgdGlwczpcIlx1NkVEQVx1NTJBOFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBwYW5lbE5vZGU6IExheWEuUGFuZWw7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxOb2RlLnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1Jld2FyZFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNSZXdhcmRWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppbnRUeXBlLCB0aXBzOlwiXHU2NTc0XHU2NTcwXHU3QzdCXHU1NzhCXHU3OTNBXHU0RjhCXCIsIHR5cGU6SW50LCBkZWZhdWx0OjEwMDB9Ki9cclxuICAgIHB1YmxpYyBpbnRUeXBlOiBudW1iZXIgPSAxMDAwO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge31cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNSZXdhcmRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIik7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkQm94LCB0aXBzOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRCb3g6IExheWEuQm94O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1MjE3XHU4ODY4XHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnVzZXJLZXksIHRpcHM6XCJcdTc1MjhcdTYyMzdcdTUzQ0JcdTYwQzVcdTc4MDFcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHVzZXJLZXk6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6a2V5SW5wdXROb2RlLCB0aXBzOlwiXHU5MDgwXHU4QkY3XHU3ODAxXHU4RjkzXHU1MTY1XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBrZXlJbnB1dE5vZGU6IExheWEuVGV4dElucHV0O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkZEZyaWVuZCwgdGlwczpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWRkRnJpZW5kOiBMYXlhLkltYWdlO1xyXG5cclxuICAgIC8qKiAxXHU2NjJGXHU1OTdEXHU1M0NCXHU1MjE3XHU4ODY4IDIgXHU1MkEwXHU1OTdEXHU1M0NCICAzXHU1MjIwXHU5NjY0XHU1OTdEXHU1M0NCICovXHJcbiAgICBwcml2YXRlIHZpZXdTdGF0ZTogMSB8IDIgfCAzID0gMTtcclxuXHJcbiAgICBwcml2YXRlIGZyaWVuZHM6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBmcmllbmRzTGlzdDogRnJpZW5kRGF0YVtdID0gW107XHJcblxyXG4gICAgb25PcGVuZWQoZDogRnJpZW5kTGlzdERhdGEpIHtcclxuICAgICAgICB0aGlzLmZyaWVuZHMgPSBkLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzTGlzdCA9IHRoaXMuZnJpZW5kcztcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3REYXRhKCk7XHJcbiAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5pdGVtUmVuZGVyKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJLZXkudGV4dCA9IGBcdTYyMTFcdTc2ODRcdTUzQ0JcdTYwQzVcdTc4MDFcdUZGMUEke1VzZXJJbmZvLmtleX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTGlzdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmFwcGx5SW5nICogMTAwMDAwIC0gYS5hcHBseUluZyAqIDEwMDAwMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGl0ZW1SZW5kZXIoY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZyaWVuZHNMaXN0W2ldO1xyXG5cclxuICAgICAgICBsZXQgbmV3Qm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm5ld19ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGhlYXJ0Qm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImhlYXJ0X2JveFwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBnb1BsYXlCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZ29fcGxheV9idG5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgYXBwbHlCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYXBwbHlfYnRuXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGRlbEJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZWxfYnRuXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaGVhcnRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBkZWxCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5hdmF0YXIpIChjZWxsLmdldENoaWxkQnlOYW1lKFwiaGVhZFwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZGF0YS5hdmF0YXI7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBkYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibHZcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IChkYXRhLm9yZGVyTGV2ZWwgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChoZWFydEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gKGRhdGEuaW50aW1hY3kgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICBkYXRhLmdhaW5EaWFtb25kICsgXCJcIjtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZWxfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgIGdvUGxheUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnZpZXdTdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBhcHBseUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRlbEJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IDEgfHwgdGhpcy52aWV3U3RhdGUgPT0gMykge1xyXG4gICAgICAgICAgICAvL1x1NzUzM1x1OEJGNyBcdTRFMkRcclxuICAgICAgICAgICAgaWYgKGRhdGEuYXBwbHlJbmcpIHtcclxuICAgICAgICAgICAgICAgIG5ld0JveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgKG5ld0JveC5nZXRDaGlsZEJ5TmFtZShcInBhc3RfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgaGVhcnRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZ29QbGF5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vXHU1REYyXHU3RUNGXHU2NjJGXHU1OTdEXHU1M0NCXHJcbiAgICAgICAgICAgICAgICBuZXdCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRfZnJpZW5kXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMyB8fCB0aGlzLnZpZXdTdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5oZWlnaHQgPSA5MTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRGcmllbmQuc2tpbiA9IGBnYW1lL2ltZ19hZGRCdG4ucG5nYDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDU5MDsgLy85MTRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEZyaWVuZC5za2luID0gYGdhbWUvaW1nX2ZyaWVuZEJ0bi5wbmdgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGBnYW1lL2ltZ19oYW5nb3V0LnBuZ2BcclxuICAgICAgICAgICAgICAgIC8vIGltZ19mcmllbmRCdG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVsX2ZyaWVuZFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IDMpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5oZWlnaHQgPSA5MTQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRnJpZW5kLnNraW4gPSBgZ2FtZS9pbWdfZnJpZW5kQnRuLnBuZ2A7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlc2NfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc0Rlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmV3YXJkX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNSZXdhcmRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29weV9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29weSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWFyY2hfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhcHBseV9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlFdmVudChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwYXN0X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxvd0ZyaWVuZChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWxfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUZyaWVuZChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19wbGF5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpdEZyaWVuZChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkZcdTk1RUVcdTU5N0RcdTUzQ0JcdTVCQjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB2aXNpdEZyaWVuZCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcodHJ1ZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcblxyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZFZpc2l0LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmdvX2ZyaWVuZF9ob21lLCBkKTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMzAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIyMFx1OTY2NFx1NTk3RFx1NTNDQlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlbGV0ZUZyaWVuZCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1Nzg2RVx1OEJBNFx1ODk4MVx1NTIyMFx1OTY2NFx1NTk3RFx1NTNDQlx1NTQxN1x1RkYxRlwiLFxyXG4gICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmREZWxldGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuZnJpZW5kcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJpZW5kc1t4XS51aWQgPT0gZGF0YS51aWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsQ2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkwMUFcdThGQzdcdTU5N0RcdTUzQ0JcdTc1MzNcdThCRjdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhbGxvd0ZyaWVuZCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEFsbG93LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGw6IChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGx5SW5nID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NTMzXHU4QkY3XHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXBwbHlFdmVudCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEFwcGx5LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGw6IChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHNMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTVERjJcdTUzRDFcdTkwMDFcdTZGQzBcdTYwQzVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY0MUNcdTdEMjJcdTU5N0RcdTUzQ0JcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2VhcmNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5rZXlJbnB1dE5vZGUudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTUzQ0JcdTYwQzVcdTc4MDFcdTRFMERcdTgwRkRcdTRFM0FcdTdBN0FcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMua2V5SW5wdXROb2RlLnRleHQgPT0gVXNlckluZm8ua2V5KSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2NDFDXHU3RDIyXHU4MUVBXHU1REYxXHU1RTcyXHU1NTY1XCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kU2VhcmNoLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMua2V5SW5wdXROb2RlLnRleHQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGw6IChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHNMaXN0ID0gW2RdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZnJpZW5kc0xpc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvcHkoKSB7XHJcbiAgICAgICAgbGV0IGE6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICBhLnZhbHVlID0gVXNlckluZm8ua2V5O1xyXG4gICAgICAgIGEuc2VsZWN0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgICAgIGEucmVtb3ZlKCk7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTU5MERcdTUyMzZcdTYyMTBcdTUyOUZcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaW50Vmlld0RhdGEge1xyXG4gICAgLyoqIFx1NjU4N1x1NUI1N1x1NTE4NVx1NUJCOSAqL1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgLyoqIFx1Nzg2RVx1OEJBNFx1NTZERVx1OEMwMyAqL1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1NTNENlx1NkQ4OFx1NTZERVx1OEMwMyAqL1xyXG4gICAgY2FuY2VsQ2FsbD86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG4vL2RlZmF1bHQgY2xhc3MgSGludFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaW50VmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGV4dCwgdGlwczpcIlx1NTE4NVx1NUJCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGV4dDogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb25maXJtQnRuLCB0aXBzOlwiXHU3ODZFXHU4QkE0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjb25maXJtQnRuOiBMYXlhLkltYWdlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNhbmNlbEJ0biwgdGlwczpcIlx1NTNENlx1NkQ4OFx1NjMwOVx1OTRBRVx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY2FuY2VsQnRuOiBMYXlhLkltYWdlO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogSGludFZpZXdEYXRhO1xyXG5cclxuICAgIG9uT3BlbmVkKGQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG4gICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy5kYXRhPy50ZXh0IHx8IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNhbmNlbENhbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsICYmIHRoaXMuZGF0YS5jYW5jZWxDYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUJ0bi54ID0gMjUyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUJ0bi54ID0gNDU4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNhbmNlbFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FuY2VsQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYW5jZWxDYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkhpbnRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29uZmlybVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkhpbnRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRCYXIsIHRpcHM6XCJsb2FkIGJhclwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9hZEJhcjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9hZEJveCwgdGlwczpcIlx1NTJBMFx1OEY3RFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9hZEJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvZ2luQm94LCB0aXBzOlwiXHU3NjdCXHU5NjQ2XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb2dpbkJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnVzZXJJbnB1dCwgdGlwczpcIlx1NzY3Qlx1OTY0Nlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdXNlcklucHV0OiBMYXlhLlRleHRJbnB1dCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGVzdF9idG4sIHRpcHM6XCJcdTZENEJcdThCRDVcdTc2N0JcdTVGNTVcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRlc3RfYnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU4RkRCXHU1RUE2XHU2NzYxXHU5RUQ4XHU4QkE0XHU1QkJEXHU1RUE2ICovXHJcbiAgICBwcml2YXRlIGxvYWRCYXJPbGRXaWR0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuICAgICAgICBpZiAoTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCk/LmlzTG9naW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbihmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy50ZXN0X2J0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNhbGxcIik7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudGVzdF9idG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudGVzdF9idG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub24oRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIHRoaXMsIHRoaXMubG9hZFByb2dyZXNzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImF3YWtlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRFbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sb2FkTGFiZWwpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmxvYWRMYWJlbC50ZXh0ID0gXCJMb2FkLi4uLjAlXCI7XHJcbiAgICAgICAgdGhpcy5sb2FkQmFyT2xkV2lkdGggPSB0aGlzLmxvYWRCYXIud2lkdGg7XHJcbiAgICAgICAgdGhpcy5sb2FkQmFyLndpZHRoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImxvZ2luX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGVzdF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgbG9naW4oaXNXeDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmIChMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbikge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxvZ2luVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoZDogTmV0SW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHRoaXMuZGF0YS5jYWxsKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3RfYnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKGNvZGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3RfYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpc1d4KTtcclxuICAgICAgICAgICAgbGV0IHd4T3BlbklkID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lID0gXCJcIixcclxuICAgICAgICAgICAgICAgIGF2YXRhciA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChpc1d4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC53eExvZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NjcyQVx1ODNCN1x1NTNENlx1NTIzMFx1NUZBRVx1NEZFMWlkXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB3eE9wZW5JZCA9IGRhdGEuZGF0YVtcIm9wZW5pZFwiXTtcclxuICAgICAgICAgICAgICAgIGF2YXRhciA9IGRhdGEuZGF0YVtcImljb251cmxcIl07XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA9IGRhdGEuZGF0YVtcIm5hbWVcIl07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubG9naW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImxvZ2luXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAvLyBhY2NvdW50OiBpc1d4ID8gbnVsbCA6IHRoaXMudXNlcklucHV0LnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgd3hJZDogd3hPcGVuSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhbGw6IChkOiBOZXRJbml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkgdGhpcy5kYXRhLmNhbGwoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXN0X2J0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoY29kZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVzdF9idG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRQcm9ncmVzcyh2KSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQmFyLndpZHRoID0gdiAqIHRoaXMubG9hZEJhck9sZFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGREaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9mZihFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgdGhpcywgdGhpcy5sb2FkUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuLy8gIE1haWxWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlsVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuTWFpbFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcInNyYy9jb21tb24vVG9vbHNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSwgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGFudERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcInNyYy92aWV3L01haW5WaWV3XCI7XHJcbmltcG9ydCB7IFNob3BWaWV3RGF0YSB9IGZyb20gXCJzcmMvdmlldy9TaG9wVmlld1wiO1xyXG5cclxuLy8gIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4vKipcclxuICogXHU3NTMwXHU1NzMwXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZENvbXBvbmVudCBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogXHU2OTBEXHU3MjY5aWNvbiAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBpY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTgyODJcdTcwQjkgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgZmllbGROb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTY3MDlcdTY5MERcdTcyNjlcdTY1RjZcdTc2ODRcdTk2MzRcdTVGNzEgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgc2hhZG93OiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaWVsZEVtcHR5UmVzLCB0aXBzOlwiXHU4OUUzXHU5NTAxXHU1NDBFXHU1NzFGXHU1NzMwXHU3RUI5XHU3NDA2XCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZmllbGRFbXB0eVJlczogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTdCNDlcdTdFQTdcdTU2RkVcdTcyNDcgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgbHZOb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTUwMTJcdThCQTFcdTY1RjZcdTVCQjlcdTU2NjgqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSB0aW1lQm94OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBcdTUwMTJcdThCQTFcdTY1RjZsYWJlbCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudERvd25MYjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1ODhDNVx1OTk3MCAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSB0b3BTdGF0ZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NjIxMFx1NzE5Rlx1NTNFRlx1NjUzNmljb24gKi9cclxuICAgIHByaXZhdGUgbWF0dXJlTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1M0VGXHU2NEFEXHU3OUNEXHU3QTdBXHU1NzMwaWNvbiAqL1xyXG4gICAgcHJpdmF0ZSBlbXB0eUZpZWxkTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dW5sb2NrSWNvbiwgdGlwczpcIlx1NjJEM1x1NUM1NVx1NTcxRlx1NTczMGljb25cdTU3MzBcdTU3NDBcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSB1bmxvY2tJY29uOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZWxkSWQsIHRpcHM6XCJcdTU3MUZcdTU3MzBpZFwiLCB0eXBlOk51bWJlcix9Ki9cclxuICAgIGZpZWxkSWQ6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOGljb25cdTZENkVcdTUyQThcdTUyQThcdTc1M0IgKi9cclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uVHdlZW46IExheWEuVGltZUxpbmU7XHJcbiAgICAvKiogXHU2OTBEXHU3MjY5XHU1MkE4XHU3NTNCICovXHJcbiAgICBwcml2YXRlIHBsYW50SWNvblR3ZWVuOiBMYXlhLlRpbWVMaW5lO1xyXG5cclxuICAgIC8qKiBcdTVFRkFcdTdCNTFcdTRFMkQgKi9cclxuICAgIGJ1aWxkSW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1NzI4XHU1OTE2XHU5NzYyICovXHJcbiAgICBpc091dGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1M0VGXHU1MDc3ICovXHJcbiAgICBjYW5TdGVhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1ODhBQlx1NTA3N1x1NEVCQVx1NzY4NHVpZCAqL1xyXG4gICAgc3RlYWxVaWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGRhdGE6IExhbmRPYmo7XHJcblxyXG4gICAgcHJpdmF0ZSBsYW5kTGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj47XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuZmllbGROb2RlID0gPExheWEuSW1hZ2U+dGhpcy5vd25lcjtcclxuICAgICAgICB0aGlzLmNvdW50RG93bkxiID0gdGhpcy50aW1lQm94LmdldENoaWxkQnlOYW1lKFwiY291bnREb3duTGJcIikgYXMgYW55O1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLnNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMudXBkYXRlX2ZpZWxkKVxyXG4gICAgdXBkYXRlRGF0YShkYXRhPzogeyBsaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPiB9KSB7XHJcbiAgICAgICAgaWYgKGRhdGE/Lmxpc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdCA9IGRhdGEubGlzdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0ID0gTGFuZFNlcnZpY2UubGlzdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROb2RlLnNraW4gPSB0aGlzLmZpZWxkRW1wdHlSZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24oQm9vbGVhbih0aGlzLmRhdGEucHJvZHVjdElkKSk7XHJcbiAgICAgICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkICYmIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vXHU2MjEwXHU5NTdGXHU0RTJEXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb24uc2tpbiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldCh0aGlzLmRhdGEucHJvZHVjdElkKS5ncm93aW5nSWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUljb25Ta2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbnRJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUljb25Ta2luKDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sdk5vZGUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkTm9kZS5za2luID0gYG1haW5fc2NlbmUvaW1nX3dhc3RlbGFuZC5wbmdgO1xyXG4gICAgICAgICAgICB0aGlzLmljb24uc2tpbiA9IHRoaXMudW5sb2NrSWNvbjtcclxuICAgICAgICAgICAgdGhpcy5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUaW1lQm94KGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuPy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4gPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuPy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RWljb25cdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93SWNvbihzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU3MkI2XHU2MDAxaWNvblx1N0VCOVx1NzQwNlxyXG4gICAgICogQHBhcmFtIHNraW5UeXBlIDEgXHU2RDQ3XHU2QzM0XHU1MkEwXHU5MDFGXHU3MkI2XHU2MDAxIDIgXHU1RUZBXHU3QjUxXHU3MkI2XHU2MDAxIDMgXHU2MjEwXHU3MTlGXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlSWNvblNraW4oc2tpblR5cGU6IDEgfCAyIHwgMykge1xyXG4gICAgICAgIHN3aXRjaCAoc2tpblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfc3BlZWRVcC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19sYW5kVXBkYXRlQnRuMi5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19oYXJ2ZXN0LnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5ODc2XHU5MEU4aWNvblx1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICB0b3BTdGF0ZUljb25BbmkocGxheTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnkgPSAtMTA3O1xyXG4gICAgICAgIGlmICghdGhpcy50b3BTdGF0ZUljb25Ud2Vlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuID0gTGF5YS5UaW1lTGluZS50byhcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLFxyXG4gICAgICAgICAgICAgICAgeyB5OiB0aGlzLnRvcFN0YXRlSWNvbi55IC0gNTAgfSxcclxuICAgICAgICAgICAgICAgIDgwMCxcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKS50byh0aGlzLnRvcFN0YXRlSWNvbiwgeyB5OiB0aGlzLnRvcFN0YXRlSWNvbi55IH0sIDgwMCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBwbGF5O1xyXG5cclxuICAgICAgICBpZiAocGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuLnJlc3VtZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTY1RjZcdTk1RjRcdTVCQjlcdTU2NjhcdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93VGltZUJveChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU5NjM0XHU1RjcxXHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1NoYWRvd0ljb24oc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmFjdGl2ZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY5MERcdTcyNjlcdTUyQThcdTc1M0JcdTY0QURcdTY1M0VcclxuICAgICAqIEBwYXJhbSBwbGF5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGxhbnRJY29uQW5pKHBsYXk6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhbnRJY29uVHdlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFudEljb25Ud2VlbiA9IExheWEuVGltZUxpbmUudG8odGhpcy5pY29uLCB7IHNrZXdYOiA2IH0sIDkwMClcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLmljb24sIHsgc2tld1g6IC02IH0sIDE4MDApXHJcbiAgICAgICAgICAgICAgICAudG8odGhpcy5pY29uLCB7IHNrZXdYOiAwIH0sIDkwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaWNvbi5za2V3WCA9IDA7XHJcblxyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoTWF0aC5yYW5kb20oKSAqIDEwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucGxhbnRJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5wbGFudEljb25Ud2Vlbi5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNvdW50RG93bigpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93bkxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQtLTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duTGIudGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPSAwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NTAxMlx1OEJBMVx1NjVGNlx1N0VEM1x1Njc1RiBcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNraW4gPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQodGhpcy5kYXRhPy5wcm9kdWN0SWQpPy5tYXR1cmVJY29uO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnVpbGRJbmcpIHRoaXMuc2V0U3RhdGVJY29uU2tpbigzKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU3QjQ5XHU3RUE3XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlTGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5sdk5vZGUuc2tpbiA9IGBtYWluX3NjZW5lL2ltZ19sZXZlbCR7dGhpcy5kYXRhLmxldmVsfS5wbmdgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MkEwXHU5MDFGXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLmxhbmRfc3BlZWRfdXApXHJcbiAgICBwcml2YXRlIHNwZWVkVXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YT8ubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0IC09IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJhbGxfc3BlZWRfdXBfdGltZVwiKVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTdBN0FcdTU3MUZcdTU3MzBcclxuICAgICAqL1xyXG4gICAgY2xlYXJGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhLnByb2R1Y3RJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pY29uLnNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2hvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWVsZElkLCB0aGlzLmJ1aWxkSW5nKTtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTU5MTZcdTUxRkFcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZWFsRm9vZCh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIC8vXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU0RThCXHU0RUY2XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1aWxkSW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVGFibGVBbmFseXplLnRhYmxlKFwibGFuZExldmVsXCIpLmdldCh0aGlzLmRhdGEubGV2ZWwgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GaWVsZExldmVsVXBWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sZXZlbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnR1ZGlzaGVuZ2ppKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU2RUUxXHU3RUE3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHU1REYyXHU2RUUxXHU3RUE3YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1MkEwXHU5MDFGXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TcGVlZFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NjUzNlx1ODNCN1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW50QW1vdW50ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRHYXRoZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZ2F0aGVyXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvbGQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYW1vbmQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmVydGlzZVRpbWVzOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50QW1vdW50ID0gZC5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmFkZCh0aGlzLmRhdGEucHJvZHVjdElkLCBkLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnNob3VjYWkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZCA9IGQucmV3YXJkRGlhbW9uZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTY1MzZcdTgzQjdcdTc2ODRcdTY5MERcdTcyNjlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhbnRPYmogPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQodGhpcy5kYXRhLnByb2R1Y3RJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3Q6IGFueVtdID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogcGxhbnRPYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHBsYW50QW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1x1ODNCN1x1NUY5N1x1NzY4NFx1OTRCQlx1NzdGM1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXdhcmREaWFtb25kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChDb25maWdHYW1lLmRpYW1vbmRJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkRGlhbW9uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGxhbnRPYmouZ2Fpbi5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3dpdGNoIChkLm9iai5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjYXNlIENvbmZpZ0dhbWUuZGlhbW9uZElkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgVXNlckluZm8uZGlhbW9uZCArPSBkLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgQ29uZmlnR2FtZS5nb2xkSWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBVc2VySW5mby5nb2xkICs9IGQuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1x1NzlDRFx1ODNEQ1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IDxTaG9wVmlld0RhdGE+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcm06IHsgbGFuZElkOiB0aGlzLmZpZWxkSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZDogUGxhbnREYXRhQmFzZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCkucHJvZHVjdElkID0gZC5iYXNlLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpLm1hdHVyZVRpbWVMZWZ0ID0gZC5iYXNlLm1hdHVyZV90aW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3Muemhvbmd6aGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAvL1x1ODlFM1x1OTUwMVx1NTcxRlx1NTczMFxyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQWRkTGFuZFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5maWVsZElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZmllbGRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0dXJlVGltZUxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhbmRTZXJ2aWNlLmFkZExhbmQodGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTA3N1x1ODNEQ1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0ZWFsRm9vZChkYXRhOiBMYW5kT2JqKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhLnByb2R1Y3RJZCB8fCBkYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jYW5TdGVhbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NURGMlx1N0VDRlx1NEUwRFx1NTNFRlx1NTA3N1wiKTtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTdFRDlcdTYyMTFcdTc1NTlcdTcwQjlcdTU0MjdcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5nb3VqaWFvc2hlbmcpO1xyXG4gICAgICAgIC8vXHU1MDc3XHU4M0RDXHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTdGVhbCxcclxuICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJsYW5kU3RlYWxcIl0+e1xyXG4gICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgdWlkOiB0aGlzLnN0ZWFsVWlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsOiAoZDogeyBwbGFudElkOiAwOyBhbW91bnQ6IDA7IHZpdGFsaXR5IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gZC52aXRhbGl0eTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuU3RlYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmFkZCh0aGlzLmRhdGEucHJvZHVjdElkLCBkLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnNob3VjYWkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vXHU2NTM2XHU4M0I3XHU3Njg0XHU2OTBEXHU3MjY5XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxhbnRPYmogPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoZC5wbGFudElkKSxcclxuICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0OiBhbnlbXSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBwbGFudE9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBkLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogdGhpcy5vd25lcixcclxuICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wbGFudEljb25Ud2VlbiA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlLCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8qKlxyXG4gKiBcdTk4REVcdTkxRDFcdTVFMDFcdTY1NzBcdTkxQ0ZcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0RmxvYXRSZXdhcmRPYmoge1xyXG4gICAgLyoqIFx1OEQ3N1x1NzBCOVx1NTNDMlx1ODAwM1x1ODI4Mlx1NzBCOSBcdTlFRDhcdThCQTRcdTRGMUFcdTYyOEFcdTY1NzBcdTkxQ0ZcdTc2ODRcdTRFMUNcdTg5N0ZcdTUyQTBcdTUyMzBcdThGRDlcdTkxQ0NcdUZGMENcdTYyNDBcdTRFRTVcdTRFMERcdTg5ODFcdTZERkJIQm94XHU2MjE2XHU2NjJGVkJveCAqL1xyXG4gICAgbm9kZTogTGF5YS5Cb3g7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBsaXN0OiB7XHJcbiAgICAgICAgLyoqIFx1ODlFM1x1Njc5MFx1NzY4NFx1OEQ0NFx1NkU5MFx1NjU3MFx1NjM2RSBcdTVGQzVcdTk4N0JcdTg5ODFcdTY3MDlpY29uICovXHJcbiAgICAgICAgb2JqOiBhbnk7XHJcbiAgICAgICAgLyoqIFx1NjU3MFx1OTFDRiAqL1xyXG4gICAgICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICAgICAgLyoqIFx1N0VDOFx1NzBCOVx1NEY0RFx1N0Y2RSAxIFx1OTFEMVx1NUUwMSAyIFx1OTRCQlx1NzdGMyAzIFx1NEVEM1x1NUU5MyAqL1xyXG4gICAgICAgIHBvc1R5cGU6IDEgfCAyIHwgMztcclxuICAgIH1bXTtcclxuICAgIG5vdEZseT86IGJvb2xlYW47XHJcbiAgICAvKiogXHU1MkE4XHU3NTNCXHU2NEFEXHU2NTNFXHU3RUQzXHU2NzVGXHU1NkRFXHU4QzAzICovXHJcbiAgICBjYWxsQmFjaz86IHsgKCk6IHZvaWQgfTtcclxufVxyXG5cclxuLy8gIE1haW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkTGFuZExheWVyLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRMYW5kTGF5ZXI6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZE5vZGUsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmROb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb2xkTm9kZSwgdGlwczpcIlx1OTFEMVx1NUUwMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29sZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmF2YXRhck5vZGUsIHRpcHM6XCJcdTU5MzRcdTUwQ0ZcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGF2YXRhck5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRCb3gsIHRpcHM6XCJcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxhbmRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjZW50ZXJCb3gsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTUzM0FcdTU3REZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm9yZGVyQm94LCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsYW5kVXBMYXllciwgdGlwczpcIlx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1N0E5N1x1NTNFM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGFuZFVwTGF5ZXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BMYXllck9uU3RhZ2UsIHRpcHM6XCJcdTU3MjhcdTRFM0JcdTU3M0FcdTY2NkZcdTRFMEFcdTk3NjJcdTc2ODRcdTRFMDBcdTRFMkFcdTY3MDBcdTRFMEFcdTVDNDJcdTc2ODRcdTdBN0FcdTVDNDJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcExheWVyT25TdGFnZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wR29sZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTkxRDFcdTVFMDFpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BHb2xkSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wRGlhbW9uZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTk0QkJcdTc3RjNpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BEaWFtb25kSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6d2FyZWhvdXNlQnRuLCB0aXBzOlwiXHU0RUQzXHU1RTkzXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB3YXJlaG91c2VCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1vbmV5TGIsIHRpcHM6XCJcdTdFQTJcdTUzMDVcdTY1ODdcdTY4NjNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1vbmV5TGI6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHVGRjBDXHU5OERFXHU3MjY5XHU1NEMxXHU3NkY4XHU1MTczXHJcbiAgICAvKiogQHByb3Age25hbWU6Z2V0UmV3YXJkUHJlZmFiLCB0aXBzOlwiXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHU5ODg0XHU4QkJFXCIsIHR5cGU6UHJlZmFifSovXHJcbiAgICBwcml2YXRlIGdldFJld2FyZFByZWZhYjogTGF5YS5QcmVmYWIgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZsb2F0UmV3YXJkSWNvbiwgdGlwczpcIlx1NTk1Nlx1NTJCMVx1OThERVx1NTJBOFx1NzUzQmljb25cIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgZmxvYXRSZXdhcmRJY29uOiBMYXlhLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvSG9tZUJ0biwgdGlwczpcIlx1OEZENFx1NTZERVx1NUJCNlx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29Ib21lQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphbnlEb29yLCB0aXBzOlwiXHU1M0JCXHU4RjZDXHU4RjZDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhbnlEb29yOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp2aXRhbGl0eUJveCwgdGlwczpcIlx1NEY1M1x1NTI5Qlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdml0YWxpdHlCb3g6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5QnV5QnRuLCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU4RDJEXHU0RTcwXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eUJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTVCQTBcdTcyNjlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRCb3gsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldEJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8vXHU0RUZCXHU1MkExXHJcbiAgICAvKiogQHByb3Age25hbWU6dGFza0JveCwgdGlwczpcIlx1NEVGQlx1NTJBMVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGFza0JveDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1N0VDNFx1NEVGNiBcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgbGFuZExpc3Q6IEZpZWxkQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgICAvKipcdTY2MkZcdTU0MjZcdTU3MjhcdTU5MTZcdTk3NjIgKi9cclxuICAgIHByaXZhdGUgaXNPdXRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1NzlCQlx1NUYwMFx1NUJCNlx1NzY4NFx1NjVGNlx1OTVGNCAqL1xyXG4gICAgcHJpdmF0ZSBvdXRlclRpbWU6IG51bWJlcjtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwicmVzL2xvYWRpbmdCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3dvb2R0aXRsZS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlSG91c2VCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlYmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19zaGVsZi5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19sYW5kQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob3VzZXRvcC5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX2hvbWVwYWdlQmczLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyBcInJlcy9pbWdfaG9tZXBhZ2VCZzIucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2ltZ19ob21lcGFnZUJnMS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2Zhcm1sYW5kTG9nby5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUucG5nXCIsXHJcbiAgICAgICAgXS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmVuZHNXaXRoKFwicG5nXCIpKSBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy50b3BMYXllck9uU3RhZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudml0YWxpdHlCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ29Ib21lQnRuLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxhbmRCb3gubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LnB1c2godGhpcy5sYW5kQm94LmdldENoaWxkQXQoeCkuZ2V0Q29tcG9uZW50KEZpZWxkQ29tcG9uZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhbmRMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuZmllbGRJZCAtIGIuZmllbGRJZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfZmllbGQpO1xyXG4gICAgICAgICAgICB0aGlzLmhpdExhbmRBZGQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NzkzQVx1NjYzRVx1NzkzQVx1NjI2OVx1NUVGQWljb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoaXRMYW5kQWRkKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhbmRMaXN0W3hdLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImRpYW1vbmRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbW9uZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb25leUxiLnZhbHVlID0gKGUgKiBVc2VySW5mby5wcm9wb3J0aW9uKS50b0ZpeGVkKDIpICsgXCJcIjtcclxuICAgICAgICAgICAgICAgIC8vXHU0RTBEXHU1NkRCXHU4MjBEXHU0RTk0XHU1MTY1XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbmV5TGIudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIChlICogVXNlckluZm8ucHJvcG9ydGlvbikudG9TdHJpbmcoKS5tYXRjaCgvXlxcZCsoPzpcXC5cXGR7MCwyfSk/LykgKyBcIlwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiZ29sZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb2xkTm9kZS52YWx1ZSA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJhdmF0YXJcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJ3YXJlUGV0SWRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucGV0Qm94LmdldENoaWxkQnlOYW1lKFwiZG9nXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KGUpLmljb247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcInBldFZpdGFsaXR5XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy9cdTY2RjRcdTY1QjBcdTVCQTBcdTcyNjlcdTRGNTNcdTUyOUJcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBldEJveC52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhciA9IHRoaXMucGV0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJveFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ2aXRhbGl0eV9iYXJcIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gZSAvIFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5nZXQoVXNlckluZm8ud2FyZVBldElkKS52aXRhbGl0eV9tYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXIud2lkdGggPSAxMzAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImRpZ2VzdENvdW50RG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLCB0aGlzLmRpZ2VzdENvdW50RG93bik7XHJcbiAgICAgICAgICAgICAgICAvL1x1NUJBMFx1NzI2OVx1OTcwMFx1ODk4MVx1NkQ4OFx1ODAxN1x1OThERlx1NzI2OVx1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGV0Qm94LnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoZSAqIDEwMDAsIHRoaXMsIHRoaXMuZGlnZXN0Q291bnREb3duKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcInZpdGFsaXR5XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdml0YWxpdHkgPSBlIC8gQ29uZmlnR2FtZS51c2VyVml0YWxpdHlMaW1pdDtcclxuICAgICAgICAgICAgICAgIGlmICh2aXRhbGl0eSA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdml0YWxpdHkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudml0YWxpdHlCdXlCdG4uZ3JheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLm1vdXNlRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLmdyYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudml0YWxpdHlCdXlCdG4ubW91c2VFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZpdGFsaXR5Qm94LmdldENoaWxkQnlOYW1lKFwiYmFyXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnZpdGFsaXR5Qm94LmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID0gMjY4ICogdml0YWxpdHk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFkZExhbmRMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcmRlcigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGFzaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1QkEwXHU3MjY5XHU3QjExXHU2RDg4XHU1MzE2XHU1QjlBXHU2NUY2XHU1NjY4XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGlnZXN0Q291bnREb3duKCkge1xyXG4gICAgICAgIGlmICghVXNlckluZm8ud2FyZVBldElkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgcGV0ID0gVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmdldChVc2VySW5mby53YXJlUGV0SWQpO1xyXG4gICAgICAgIGlmIChVc2VySW5mby5wZXRWaXRhbGl0eSAtIHBldC52aXRhbGl0eV9jb25zdW1lIDw9IDApIHtcclxuICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5IC09IHBldC52aXRhbGl0eV9jb25zdW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVc2VySW5mby5kaWdlc3RDb3VudERvd24gPSBDb25maWdHYW1lLnBldERpZ2VzdEludGVydmFsVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZS5ldmVudE9uKEFwaUh0dHAubG9naW4pXHJcbiAgICBwcml2YXRlIGdhbWVJbml0KGQ6IE5ldEluaXQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGEgPSBkLmRhdGEubGFuZExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaWduSW5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibWFpbFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLk1haWxWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2hvcFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaGVhZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNldHRpbmdWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2FyZWhvdXNlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ1eV9mZWVkXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb2dcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAyIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9yZGVyX2JveFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLk9yZGVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZyaWVuZHNcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkZyaWVuZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZFwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kTGV2ZWxVcFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3V0ZXIpIHRoaXMuc3dpdGNoTGFuZExldmVsVXAodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wbGF5R2V0UmV3YXJkQW5pKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBub2RlOiB0aGlzLnRlc3RCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeyBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldCgxMDAxKSwgY291bnQ6IDEwMCwgcG9zVHlwZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB7IG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KDEwMDEpLCBjb3VudDogMTAwLCBwb3NUeXBlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksIGNvdW50OiAxMDAsIHBvc1R5cGU6IDEgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBdLFxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlX3VwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaExhbmRMZXZlbFVwKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYW55X2Rvb3JcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29Ub05laWdoYm9yKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX2hvbWVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29Ib21lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZF92aXRhbGl0eVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlWaXRhbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1OTdEXHU1M0NCIFx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9wZW5GcmllbmQoKSB7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZExpc3QsXHJcbiAgICAgICAgICAgIGNhbGw6IChkOiBGcmllbmRMaXN0RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNWaWV3LCB7IHBhcm06IGQgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThEMkRcdTRFNzBcdTRGNTNcdTUyOUJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidXlWaXRhbGl0eSgpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1OEJBMlx1NTM1NVxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfT3JkZXIpXHJcbiAgICBwcml2YXRlIHVwZGF0ZU9yZGVyKCkge1xyXG4gICAgICAgIGxldCBib3ggPSB0aGlzLm9yZGVyQm94LFxyXG4gICAgICAgICAgICBkID0gVGFibGVBbmFseXplLnRhYmxlKFwib3JkZXJcIikuZ2V0KFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxKSxcclxuICAgICAgICAgICAgcmV3YXJkOiBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICAgICAgICAgIHJld2FyZENvdW50OiBudW1iZXIgPSAwLFxyXG4gICAgICAgICAgICBjdXJDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIG1heENvdW50ID0gMCxcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIGlmICghZCkgcmV0dXJuIGNvbnNvbGUubG9nKFwiXHU3QjQ5XHU3RUE3XHU1REYyXHU1QjhDXCIpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gYm94LmdldENoaWxkQnlOYW1lKFwiaXRlbV9cIiArIHgpIGFzIExheWEuQm94O1xyXG5cclxuICAgICAgICAgICAgaWYgKGQuY29uZGl0aW9uW3hdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJDb3VudCA9IFdhcmVob3VzZVNlcnZpY2UuZ2V0T25lKGQuY29uZGl0aW9uW3hdLnBsYW50LmlkKT8uY291bnQgfHwgMDtcclxuICAgICAgICAgICAgICAgIG1heENvdW50ID0gZC5jb25kaXRpb25beF0uY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1ckNvdW50ID49IG1heENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MrKztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuY29uZGl0aW9uW3hdLnBsYW50Lmljb247XHJcbiAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7Y3VyQ291bnR9LyR7bWF4Q291bnR9YDtcclxuICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID1cclxuICAgICAgICAgICAgICAgICAgICA4NyAqIChjdXJDb3VudCAvIG1heENvdW50ID4gMSA/IDEgOiBjdXJDb3VudCAvIG1heENvdW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGQuY29uZGl0aW9uW3hdLnBsYW50LmdhaW4uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLm9iai5pZCA9PT0gQ29uZmlnR2FtZS5nb2xkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZCA9IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKz0gZS5jb3VudCAqIG1heENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXdhcmQpIHtcclxuICAgICAgICAgICAgbGV0IGJ0bkJveCA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgIChidG5Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSByZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgIChidG5Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGAke1xyXG4gICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKyBNYXRoLnJvdW5kKHJld2FyZENvdW50ICogZC5jb21taXNzaW9uKVxyXG4gICAgICAgICAgICB9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lX3RpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU1QjhDXHU2MjEwJHtcclxuICAgICAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCArIDFcclxuICAgICAgICB9XHU3RUE3XHU4QkEyXHU1MzU1YDtcclxuXHJcbiAgICAgICAgaWYgKHByb2dyZXNzID09IGQuY29uZGl0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm9yZGVyUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVySWQ6IFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkLmNvbmRpdGlvbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UucmVkdWNlQW1vdW50KGUucGxhbnQuaWQsIGUuY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlHZXRSZXdhcmRBbmkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBib3guZ2V0Q2hpbGRCeU5hbWUoXCJidG5fYm94XCIpIGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkQ291bnQgKyBNYXRoLnJvdW5kKHJld2FyZENvdW50ICogZC5jb21taXNzaW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCsrO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjA3XHU2MzYyXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzd2l0Y2hMYW5kTGV2ZWxVcChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGJnID0gdGhpcy5sYW5kVXBMYXllci5nZXRDaGlsZEJ5TmFtZShcImJnXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgYmcuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKGJnLCB7IGFscGhhOiAwLjc1IH0sIDE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYW5kX291dGVyXCIpLmFkZENoaWxkKHRoaXMubGFuZEJveCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRhYmxlQW5hbHl6ZS50YWJsZShcImxhbmRMZXZlbFwiKS5nZXQoZS5kYXRhLmxldmVsICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbigyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZS5idWlsZEluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBiZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyQm94LmFkZENoaWxkKHRoaXMubGFuZEJveCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1RpbWVCb3godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZS5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jbGVhckZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLmJ1aWxkSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oZS5kYXRhLm1hdHVyZVRpbWVMZWZ0ID8gMSA6IDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlLnRvcFN0YXRlSWNvbkFuaShCb29sZWFuKGUuZGF0YS5wcm9kdWN0SWQpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU4M0I3XHU1M0Q2XHU1OTU2XHU1MkIxXHU1MkE4XHU3NTNCXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZClcclxuICAgIHByaXZhdGUgcGxheUdldFJld2FyZEFuaShvYmo6IEdldEZsb2F0UmV3YXJkT2JqKSB7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iai5jYWxsQmFjaykgb2JqLmNhbGxCYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9iai5saXN0LmZvckVhY2goKGQsIGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IExheWEuQm94ID0gTGF5YS5Qb29sLmdldEl0ZW1CeUNyZWF0ZUZ1bihcclxuICAgICAgICAgICAgICAgIFwiZmxvYXRSZXdhcmRCb3hcIixcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmV3YXJkUHJlZmFiLmNyZWF0ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmV3YXJkUHJlZmFiXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBub2RlLnkgPSBvYmoubm9kZS5nZXRfaGVpZ2h0KCkgKiBvYmoubm9kZS5hbmNob3JZIC0gaSAqIDYwO1xyXG4gICAgICAgICAgICAvLyBub2RlLnggPSBvYmoubm9kZS5nZXRfd2lkdGgoKSAqIG9iai5ub2RlLmFuY2hvclg7XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgaWNvbi5za2luID0gZC5vYmo/Lmljb24gfHwgXCJcIjtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gNTAgLyBpY29uLndpZHRoO1xyXG4gICAgICAgICAgICBpY29uLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmoubm9kZS5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KCkpKTtcclxuICAgICAgICAgICAgLy8gb2JqLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBub2RlTmV3UG9zID0gdGhpcy50b3BMYXllck9uU3RhZ2UuZ2xvYmFsVG9Mb2NhbChcclxuICAgICAgICAgICAgICAgIG9iai5ub2RlLmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQoKSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIG5vZGUucG9zKG5vZGVOZXdQb3MueCArIG9iai5ub2RlLmdldF93aWR0aCgpICogb2JqLm5vZGUuYW5jaG9yWCwgbm9kZU5ld1Bvcy55IC0gaSAqIDYwKTtcclxuICAgICAgICAgICAgdGhpcy50b3BMYXllck9uU3RhZ2UuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIChub2RlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBcInhcIiArIGQuY291bnQ7XHJcblxyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgICAgIHsgeTogbm9kZS55IC0gNDAsIGFscGhhOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIChlOiBMYXlhLkJveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIoXCJmbG9hdFJld2FyZEJveFwiLCBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3NJY29uID0gdGhpcy50b3BMYXllck9uU3RhZ2UuZ2xvYmFsVG9Mb2NhbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmxvY2FsVG9HbG9iYWwoTGF5YS5Qb2ludC5jcmVhdGUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZVNlbGYoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm5vdEZseSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbG9hdEljb246IExheWEuSW1hZ2UgPSBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q3JlYXRlRnVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsb2F0UmV3YXJkSWNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb2F0UmV3YXJkSWNvbi5jcmVhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXRSZXdhcmRJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24uc2tpbiA9IGQub2JqLmljb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5wb3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUG9zSWNvbi54ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyMCAqIChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQb3NJY29uLnkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIwICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24uc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcExheWVyT25TdGFnZS5hZGRDaGlsZChmbG9hdEljb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi56T3JkZXIgPSA5OTk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3BJY29uOiBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZC5wb3NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcEljb24gPSB0aGlzLnRvcEdvbGRJY29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcEljb24gPSB0aGlzLnRvcERpYW1vbmRJY29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcEljb24gPSB0aGlzLndhcmVob3VzZUJ0bjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcEdvbGRJY29uUG9zID0gdG9wSWNvbi5sb2NhbFRvR2xvYmFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5Qb2ludCh0b3BJY29uLndpZHRoIC8gMiwgdG9wSWNvbi5oZWlnaHQgLyAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy50b3BMYXllck9uU3RhZ2UuZ2xvYmFsVG9Mb2NhbCh0b3BHb2xkSWNvblBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiBsb2NhbFBvcy54LCB5OiBsb2NhbFBvcy55IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrSW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGU6IExheWEuSW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlcihcImZsb2F0UmV3YXJkSWNvblwiLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmxvYXRJY29uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNTAgKiB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbbm9kZV1cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICA1MCAqIGksXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU3NzBCXHU1RTdGXHU1NDRBXHU0RUU1XHU1NDBFXHU3Njg0XHU1OTU2XHU1MkIxXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZClcclxuICAgIHByaXZhdGUgcGxheUFkUmV3YXJkKHRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IHJld2FyZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJWaWRlb3Jld2FyZHNcIikudmFsdWUgYXMgUmV3YXJkQ3VycmVuY3lCYXNlO1xyXG5cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgIG5vZGU6IHRhcmdldCxcclxuICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iajogcmV3YXJkLm9iaixcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IHJld2FyZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgPyAxIDogMixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTRFRkJcdTUyQTFcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnVwZGF0ZV90YXNrKVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUYXNrKCkge1xyXG4gICAgICAgIGNvbnN0IGJveDogTGF5YS5JbWFnZSA9IHRoaXMudGFza0JveCxcclxuICAgICAgICAgICAgaWNvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgYW1vdW50Rm9udCA9IGljb24uZ2V0Q2hpbGRCeU5hbWUoXCJhbW91bnRGb250XCIpIGFzIExheWEuRm9udENsaXAsXHJcbiAgICAgICAgICAgIGRlc2MgPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsLFxyXG4gICAgICAgICAgICBsaXN0ID0gVGFza1NlcnZpY2UuZ2V0TGlzdCgpLFxyXG4gICAgICAgICAgICB0YXNrID0gbGlzdFswXTtcclxuICAgICAgICBpZiAodGFzay5yZWNlaXZlID09IDEgfHwgdGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGRlc2MudGV4dCA9IGBcdTRFRkJcdTUyQTE6JHt0YXNrLmJhc2UuZGVzY30oJHtcclxuICAgICAgICAgICAgdGFzay50aW1lcyA+IHRhc2suYmFzZS50aW1lcyA/IHRhc2suYmFzZS50aW1lcyA6IHRhc2sudGltZXNcclxuICAgICAgICB9LyR7dGFzay5iYXNlLnRpbWVzfSlgO1xyXG4gICAgICAgIGFtb3VudEZvbnQudmFsdWUgPSBcInhcIiArIHRhc2suYmFzZS5yZXdhcmQuY291bnQ7XHJcbiAgICAgICAgaWNvbi5za2luID0gdGFzay5iYXNlLnJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICBib3gud2lkdGggPSBkZXNjLndpZHRoICsgMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1NkRFXHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ29Ib21lKCkge1xyXG4gICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyh0cnVlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZ29Ib21lLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTU2REVcdTY3NjVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3V0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMzAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29GcmllbmQobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTNCQlx1OTBCQlx1NUM0NVx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdvVG9OZWlnaGJvcigpIHtcclxuICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcodHJ1ZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm5laWdoYm9yLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJnYXRoZXJcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FsbDogKGQ6IFJldHVybk5laWdoYm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTc5QkJcdTVGMDBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29GcmllbmQoZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgzMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLmdvX2ZyaWVuZF9ob21lKVxyXG4gICAgcHJpdmF0ZSBnb0ZyaWVuZExpc3RlbihkOiBSZXR1cm5OZWlnaGJvcikge1xyXG4gICAgICAgIHRoaXMuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nb0ZyaWVuZChkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTNCQlx1NjcwQlx1NTNDQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdvRnJpZW5kKGQ/OiBSZXR1cm5OZWlnaGJvcikge1xyXG4gICAgICAgIGxldCBsYW5kcyA9IHRoaXMubGFuZExpc3QsXHJcbiAgICAgICAgICAgIHVzZXJMYW5kcyA9IExhbmRTZXJ2aWNlLmxpc3Q7XHJcbiAgICAgICAgbGV0IG90aGVyTGFuZHM6IE1hcDxudW1iZXIsIExhbmRPYmo+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGQubGFuZHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJMYW5kcy5zZXQoZS5pZCwgZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vdXRlclRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnZpdGFsaXR5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hbnlEb29yLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1c2VyTGFuZHMuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZC5tYXR1cmVUaW1lTGVmdCAtPSAoRGF0ZS5ub3coKSAtIHRoaXMub3V0ZXJUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5tYXR1cmVUaW1lTGVmdCA8IDApIGQubWF0dXJlVGltZUxlZnQgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYW55RG9vci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nb0hvbWVCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsYW5kcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsYW5kID0gbGFuZHNbeF07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGxhbmQuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnVwZGF0ZURhdGEoeyBsaXN0OiBvdGhlckxhbmRzIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxhbmQuc3RlYWxVaWQgPSBkLnVpZDtcclxuICAgICAgICAgICAgICAgIGlmIChkLnByb3RlY3RlZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZC50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kLmNhblN0ZWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhbmQuY2FuU3RlYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhbmQuaXNPdXRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZC5zdGVhbFVpZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnVwZGF0ZURhdGEoeyBsaXN0OiB1c2VyTGFuZHMgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgLy9cdTk2OTBcdTg1Q0ZcdTVCQTBcdTcyNjlcclxuICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL1x1OTY5MFx1ODVDRlx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICB0aGlzLnRhc2tCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHU2NjNFXHU3OTNBIFx1NUJBMFx1NzI2OVxyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8ud2FyZVBldElkKSB0aGlzLnBldEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy9cdTY2M0VcdTc5M0FcdTRFRkJcdTUyQTFcclxuICAgICAgICAgICAgdGhpcy50YXNrQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBPcmRlckJhc2UsIFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuXHJcbi8vY2xhc3MgT3JkZXJWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpvcmRlckxpc3QsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlLH0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlckxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0bkxvY2tSZXMsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTYzMDlcdTk0QUVcdTY3MkFcdTVCOENcdTYyMTBcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBidG5Mb2NrUmVzOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0blJlc0N1ciwgdGlwczpcIlx1OEJBMlx1NTM1NVx1NjMwOVx1OTRBRVx1NUY1M1x1NTI0RFx1NzJCNlx1NjAwMVx1NjMwOVx1OTRBRVwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGJ0blJlc0N1cjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBPcmRlckJhc2VbXTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gVGFibGVBbmFseXplLnRhYmxlKFwib3JkZXJcIikubGlzdDtcclxuICAgICAgICBsZXQgb3JkZXJPbGRMdiA9IFVzZXJJbmZvLm9yZGVyTGV2ZWwgfHwgMDtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuaWQgKiAoYi5pZCA8PSBvcmRlck9sZEx2ID8gLTEgOiAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC5hcnJheSA9IHRoaXMuZGF0YUxpc3Q7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJMaXN0KTtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJMaXN0KGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5kYXRhTGlzdFtpXSxcclxuICAgICAgICAgICAgcmV3YXJkOiBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICAgICAgICAgIHJld2FyZENvdW50OiBudW1iZXIgPSAwLFxyXG4gICAgICAgICAgICBjdXJDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIG1heENvdW50ID0gMCxcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwLFxyXG4gICAgICAgICAgICByZXdhcmRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm9yZGVyX2x2XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtkLmlkfVx1N0VBN1x1OEJBMlx1NTM1NWA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fXCIgKyB4KSBhcyBMYXlhLkJveDtcclxuICAgICAgICAgICAgaWYgKGQuY29uZGl0aW9uW3hdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJDb3VudCA9IFdhcmVob3VzZVNlcnZpY2UuZ2V0T25lKGQuY29uZGl0aW9uW3hdLnBsYW50LmlkKT8uY291bnQgfHwgMDtcclxuICAgICAgICAgICAgICAgIG1heENvdW50ID0gZC5jb25kaXRpb25beF0uY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1ckNvdW50ID49IG1heENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MrKztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuY29uZGl0aW9uW3hdLnBsYW50Lmljb247XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5pZCA8IFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke21heENvdW50fS8ke21heENvdW50fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPSA4NztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke2N1ckNvdW50fS8ke21heENvdW50fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA4NyAqIChjdXJDb3VudCAvIG1heENvdW50ID4gMSA/IDEgOiBjdXJDb3VudCAvIG1heENvdW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGQuY29uZGl0aW9uW3hdLnBsYW50LmdhaW4uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLm9iai5pZCA9PT0gQ29uZmlnR2FtZS5nb2xkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZCA9IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKz0gZS5jb3VudCAqIGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBidG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaWYgKGQuaWQgPiBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAvL1x1NjcyQVx1NkZDMFx1NkQzQlxyXG4gICAgICAgICAgICBidG4uc2tpbiA9IHRoaXMuYnRuTG9ja1JlcztcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkLmlkID09IFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFxyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSB0aGlzLmJ0blJlc0N1cjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1REYyXHU1QjhDXHU2MjEwXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9cdTVERjJcdTVCOENcdTYyMTBcclxuICAgICAgICAgICAgICAgIGJ0bi5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJld2FyZCkge1xyXG4gICAgICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gcmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGArJHtcclxuICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICsgTWF0aC5yb3VuZChyZXdhcmRDb3VudCAqIGQuY29tbWlzc2lvbilcclxuICAgICAgICAgICAgfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVyVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlclZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxlZnRCb3gsIHRpcHM6XCJcdTRFOTFcdTVERTZcdThGQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBsZWZ0Qm94OiBMYXlhLkJveDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpyaWdodEJveCwgdGlwczpcIlx1NEU5MVx1NURFNlx1OEZCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHJpZ2h0Qm94OiBMYXlhLkJveDtcclxuXHJcbiAgICBvbkhkRW5hYmxlKCkge31cclxuXHJcbiAgICBvbk9wZW5lZChkYXRhOiB7IGNhbGw6IHsgKE92ZXJWaWV3KTogdm9pZCB9IH0pIHtcclxuICAgICAgICAvLyB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgaWYgKGRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgZGF0YS5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZShjYWxsOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMubGVmdEJveC54ID0gLTk4NztcclxuICAgICAgICB0aGlzLnJpZ2h0Qm94LnggPSAxMDI1O1xyXG4gICAgICAgIHRoaXMubGVmdEJveC5hbHBoYSA9IDA7XHJcbiAgICAgICAgdGhpcy5yaWdodEJveC5hbHBoYSA9IDA7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLmxlZnRCb3gsIHsgeDogMCwgYWxwaGE6IDEgfSwgNTAwKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm94LFxyXG4gICAgICAgICAgICB7IHg6IDAsIGFscGhhOiAxIH0sXHJcbiAgICAgICAgICAgIDUwMCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbCkgY2FsbCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbihjYWxsOiBGdW5jdGlvbikge1xyXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5sZWZ0Qm94LCB7IHg6IC05ODcsIGFscGhhOiAwIH0sIDUwMCk7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJveCxcclxuICAgICAgICAgICAgeyB4OiAxMDI1LCBhbHBoYTogMCB9LFxyXG4gICAgICAgICAgICA1MDAsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGwpIGNhbGwoKTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuT3ZlclZpZXcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cERhdGFDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBEYXRhQ29udHJvbFwiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vL2NsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm11c2ljTm9kZSwgdGlwczpcIlx1OTdGM1x1NEU1MFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbXVzaWNOb2RlOiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c291bmROb2RlLCB0aXBzOlwiXHU5N0YzXHU2NTQ4XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzb3VuZE5vZGU6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphdmF0YXJOb2RlLCB0aXBzOlwiXHU3M0E5XHU1QkI2XHU1OTM0XHU1MENGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhdmF0YXJOb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpuaWNrbmFtZSwgdGlwczpcIlx1NzNBOVx1NUJCNlx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbmlja25hbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNDaGFuZ2UoKTtcclxuICAgICAgICB0aGlzLnNvdW5kQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImF2YXRhclwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcIm5pY2tuYW1lXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5pY2tuYW1lLnRleHQgPSBlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNldHRpbmdWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIm11c2ljXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQgPSAhQ29yZS5hdWRpby5tdXNpY011dGVkO1xyXG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwibXVzaWNcIiwgQ29yZS5hdWRpby5tdXNpY011dGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5zb3VuZE11dGVkID0gIUNvcmUuYXVkaW8uc291bmRNdXRlZDtcclxuICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInNvdW5kXCIsIENvcmUuYXVkaW8uc291bmRNdXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZENoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNpZ25fb3V0XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU3ODZFXHU4QkE0XHU4OTgxXHU5MDAwXHU1MUZBXHU3NjdCXHU1RjU1XHVGRjFGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJpc0xvZ2luXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5sb2dpbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcubG9naW5PdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5Mb2dpblZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvZ2luX2dhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbXVzaWNDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5tdXNpY05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBjb25zdCBpY29uID0gYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG5cclxuICAgICAgICBsZXQgbXVzaWMgPSBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXVzaWMpO1xyXG5cclxuICAgICAgICBpY29uLnggPSAhbXVzaWMgPyAtMTQgOiA5MTtcclxuICAgICAgICBpY29uLnNraW4gPSAhbXVzaWMgPyBgZ2FtZS9pbWdfbXVzaWNPbkJ0bi5wbmdgIDogXCJnYW1lL2ltZ19tdXNpY09mZkJ0bi5wbmdcIjtcclxuICAgICAgICBib3guc2tpbiA9ICFtdXNpYyA/IGBnYW1lL2ltZ19zd2l0Y2hPbi5wbmdgIDogXCJnYW1lL2ltZ19zd2l0aE9mZi5wbmdcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNvdW5kQ2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnN0IGJveCA9IHRoaXMuc291bmROb2RlLmdldENoaWxkQnlOYW1lKFwiYm94XCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBsZXQgc291bmQgPSBDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQ7XHJcbiAgICAgICAgaWNvbi54ID0gIXNvdW5kID8gLTE0IDogOTE7XHJcbiAgICAgICAgaWNvbi5za2luID0gIXNvdW5kID8gYGdhbWUvaW1nX211c2ljT25CdG4ucG5nYCA6IFwiZ2FtZS9pbWdfbXVzaWNPZmZCdG4ucG5nXCI7XHJcbiAgICAgICAgYm94LnNraW4gPSAhc291bmQgPyBgZ2FtZS9pbWdfc3dpdGNoT24ucG5nYCA6IFwiZ2FtZS9pbWdfc3dpdGhPZmYucG5nXCI7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IEZlZWRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVlZERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IEZlZWRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBGZWVkU2VydmljZSB7XHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBsaXN0OiBGZWVkRGF0YUJhc2VbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NTcwXHU2MzZFXHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwiZmVlZFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogZCxcclxuICAgICAgICAgICAgICAgIGxvY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZlZWRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgRmVlZEJhc2UsIFBsYW50QmFzZSwgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCJzcmMvY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgRmVlZFNlcnZpY2UsIHsgRmVlZERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9GZWVkU2VydmljZVwiO1xyXG5pbXBvcnQgUGV0U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BldFNlcnZpY2VcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3BWaWV3RGF0YSB7XHJcbiAgICAvKiogXHU3NTRDXHU5NzYydGFnXHU0RTBCXHU2ODA3aWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFICovXHJcbiAgICBwYXJtPzogYW55O1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Cb3hUb3AsIHRpcHM6XCJcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTUyMTdcdTg4NjhcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJ0bkJveFRvcDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tQm94LCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21Cb3g6IExheWEuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWVkRGVzYywgdGlwczpcIlx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VlZERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZVRpbWUsIHRpcHM6XCJcdTYyMTBcdTcxOUZcdTY1RjZcdTk1RjRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZVRpbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZUdhaW5Cb3gsIHRpcHM6XCJcdTY1MzZcdTc2Q0FcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZUdhaW5Cb3g6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvY2tCdG5Cb3gsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTYzMDlcdTk0QUVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvY2tCdG5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtQnV5QnRuLCB0aXBzOlwiXHU4RDJEXHU0RTcwXHU2MzA5XHU5NEFFXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtQnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWRCdXlCdG4sIHRpcHM6XCJcdTk5NzJcdTY1OTlcdThEMkRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZlZWRCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWREZXNjLCB0aXBzOlwiXHU5OTcyXHU2NTk5XHU2M0NGXHU4RkYwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBmZWVkRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTVCQTBcdTcyNjlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRJY29uLCB0aXBzOlwiXHU1QkEwXHU3MjY5aWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0SWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0RGVzYywgdGlwczpcIlx1NUJBMFx1NzI2OVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0RGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0TmFtZSwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0TmFtZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlNYXgsIHRpcHM6XCJcdTRGNTNcdTUyOUJcdTRFMEFcdTk2NTBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5TWF4OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRCdXlCdG4sIHRpcHM6XCJcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldEJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z29XYXRjaCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NzcwQlx1NUJCNlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29XYXRjaDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z29SZXN0LCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU0RjExXHU2MDZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb1Jlc3Q6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU5NEIxXHU1RTg0XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZEZvbnQsIHRpcHM6XCJcdTc1MjhcdTYyMzdcdTk0QkJcdTc3RjNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmRGb250OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxpc3QsIHRpcHM6XCJcdTk0QjFcdTVFODRcdTYzRDBcdTczQjBcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU2NTg3XHU1QjU3XHU4RDQ0XHU2RTkwXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGJ0blRvcFJlc0xpc3Q6IHN0cmluZ1tdW10gPSBbXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfc2VlZHNOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfc2VlZHNTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfcGV0Tm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3BldFNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19mb29kbk5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19mb29kblNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19iYW5rTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX2JhbmtTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICBdO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NTIwN1x1NjM2Mlx1NjgwN1x1N0I3RVx1OTAwOVx1NjJFOVx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSB0b3BCdG5TZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTcwQjlcdTUxRkJcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgaXRlbUxpc3RTZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTgwQ0NcdTY2NkZcdTdFQjlcdTc0MDYgKi9cclxuICAgIHByaXZhdGUgaXRlbVNlbGVjdEJnOiBzdHJpbmdbXSA9IFtcImdhbWUvaW1nX3BldGJhZ05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19wZXRiYWdTZWxlY3RlZC5wbmdcIl07XHJcblxyXG4gICAgLyoqIFx1NUY1M1x1NTI0RFx1OTAwOVx1NjJFOVx1NzY4NFx1NUJBMFx1NzI2OVx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RQZXRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZGF0YTogU2hvcFZpZXdEYXRhO1xyXG5cclxuICAgIHByaXZhdGUgaXNGaXJzdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVJdGVtKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25TZWxlY3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnByaWNlTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVQcmljZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25QcmljZVNlbGVjdCk7XHJcblxyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5LndhdGNoKFVzZXJJbmZvLCB0aGlzKS5rZXkoXCJkaWFtb25kXCIsICh2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbW9uZEZvbnQudmFsdWUgPSB2O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmVkKGU6IFNob3BWaWV3RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IGU/LmlkIHx8IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3BCdG5TdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU5MDA5XHU0RTJEXHU2NUY2XHU3Njg0XHU0RTBCXHU2ODA3XHJcbiAgICAgKiBAcGFyYW0gZSBcdTkwMDlcdTRFMkRcdTc2ODRcdTRFMEJcdTY4MDdcclxuICAgICAqL1xyXG4gICAgb25TZWxlY3QoZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCA9IGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTc5Q0RcdTVCNTBcdTYyMTZcdTk5NkVcdTY1OTlcdTUyMTdcdTg4NjhcdTY1NzBcdTYzNkVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0RGF0YUxpc3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUGxhbnRTZXJ2aWNlLmxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgaWYgKCFGZWVkU2VydmljZS5saXN0Lmxlbmd0aCkgRmVlZFNlcnZpY2UuaW5pdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gRmVlZFNlcnZpY2UubGlzdC5zb3J0KChhLCBiKSA9PiBhLmJhc2Uudml0YWxpdHkgLSBiLmJhc2Uudml0YWxpdHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUzMlx1NjdEM1x1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NzY4NFx1NTIxN1x1ODg2OFxyXG4gICAgICogQHBhcmFtIGNlbGwgXHU1MjE3XHU4ODY4XHU4MjgyXHU3MEI5XHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHU0RTBCXHU2ODA3XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUl0ZW0oY2VsbDogTGF5YS5JbWFnZSwgaW5kZXgpIHtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuZ2V0RGF0YUxpc3QoKVtpbmRleF07XHJcbiAgICAgICAgbGV0IHByaWNlQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImhib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGxvY2tJY29uID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImxvY2tfaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGlmICghZCkgcmV0dXJuIGNvbnNvbGUud2FybihcIlx1NjU3MFx1NjM2RVx1NEUyMlx1NTkzMVwiKTtcclxuICAgICAgICBpZiAoZC5sb2NrKSB7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsb2NrSWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcmljZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHByaWNlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbG9ja0ljb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHByaWNlQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcmljZUJveC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgIGljb24gPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9ICg8UGxhbnRCYXNlPmQuYmFzZSkuc2VlZF9wcmljZS5jb3VudDtcclxuICAgICAgICAgICAgICAgIGljb24gPSAoPFBsYW50QmFzZT5kLmJhc2UpLnNlZWRfcHJpY2Uub2JqLmljb247XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9ICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0LmNvdW50O1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9ICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0Lm9iai5pY29uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAocHJpY2VCb3guZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBjb3VudCArIFwiXCI7XHJcbiAgICAgICAgICAgIChwcmljZUJveC5nZXRDaGlsZEJ5TmFtZShcImdvbGRfaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gaWNvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZC5iYXNlLmljb247XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBkLmJhc2UubmFtZTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09IHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBjZWxsLnNraW4gPSB0aGlzLml0ZW1TZWxlY3RCZ1sxXTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3REZXNjKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU0RjRFXHU5MEU4XHVGRjBDXHU5MDA5XHU2MkU5XHU3MjY5XHU1NEMxXHU2NUY2XHU3Njg0XHU2NTcwXHU2MzZFXHU2NjNFXHU3OTNBXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlU2VsZWN0RGVzYygpIHtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdO1xyXG4gICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgIC8vXHU5OTcyXHU2NTk5XHJcbiAgICAgICAgICAgICh0aGlzLnNlZWREZXNjLnBhcmVudCBhcyBMYXlhLkJveCkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmZlZWREZXNjLnRleHQgPSBkLmJhc2UuZGVzYy5yZXBsYWNlKFwiJlwiLCAoPEZlZWRCYXNlPmQuYmFzZSkudml0YWxpdHkgKyBcIlwiKTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkRGVzYy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGJveCA9IHRoaXMuZmVlZEJ1eUJ0bi5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuICAgICAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9ICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0Lm9iai5pY29uO1xyXG4gICAgICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3QuY291bnQgKyBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1x1NzlDRFx1NUI1MFxyXG4gICAgICAgIGxldCBiYXNlID0gZC5iYXNlIGFzIFBsYW50QmFzZTtcclxuICAgICAgICAodGhpcy5zZWVkRGVzYy5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmVlZERlc2MudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VlZERlc2MudGV4dCA9IGJhc2UuZGVzYztcclxuICAgICAgICB0aGlzLm1hdHVyZVRpbWUudGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHMoYmFzZS5tYXR1cmVfdGltZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQnV5QnRuLnZpc2libGUgPSAhZC5sb2NrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUJ1eUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvY2tCdG5Cb3gudmlzaWJsZSA9IGQubG9jaztcclxuICAgICAgICB0aGlzLmxvY2tCdG5Cb3guYWN0aXZlID0gZC5sb2NrO1xyXG4gICAgICAgIGxldCBnYWluTGlzdCA9IGJhc2UuZ2FpbjtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUJveCA9IHRoaXMubWF0dXJlR2FpbkJveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICAgICAgaWNvbiA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICBnYWluRGF0YSA9IGdhaW5MaXN0W3ggLSAxXTtcclxuICAgICAgICAgICAgaWYgKHggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gYmFzZS5oYXJ2ZXN0O1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGJhc2UuaWNvbjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChnYWluRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGdhaW5EYXRhLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBnYWluRGF0YS5jb3VudCAqIGJhc2UuaGFydmVzdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKGl0ZW1Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBpY29uO1xyXG4gICAgICAgICAgICAoaXRlbUJveC5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcInhcIiArIGNvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJveCA9IHRoaXMubG9ja0J0bkJveC5nZXRDaGlsZEJ5TmFtZShcInVubG9ja19idXlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcblxyXG4gICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBiYXNlLnVubG9ja19jb3N0Py5vYmo/Lmljb247XHJcbiAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gYmFzZS51bmxvY2tfY29zdD8uY291bnQgKyBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNlZWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInBldFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZmVlZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYmFua1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvcEJ0bkluZGV4ID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRJbmRleChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCAhPSB0b3BCdG5JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPSBOdW1iZXIodG9wQnRuSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvcEJ0blN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9cdTY0QURcdTc5Q0RcclxuICAgICAgICAgICAgY2FzZSBcImJ1eV9idG5cIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTb3csXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJzb3dcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5wYXJtPy5sYW5kSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50SWQ6IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZDogUmV0dXJuVXNlckluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwodGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9cdTVFN0ZcdTU0NEFcdTg5RTNcdTk1MDFcdUZGMENcdTYyMTZcdTY2MkZcdTkxRDFcdTVFMDFcdTg5RTNcdTk1MDFcclxuICAgICAgICAgICAgY2FzZSBcInVubG9ja19idXlcIjpcclxuICAgICAgICAgICAgY2FzZSBcImFkX3VubG9ja1wiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuc2VlZHNVbmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJzZWVkc1VubG9ja1wiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50SWQ6IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwiYWRfdW5sb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IENvbmZpZ0dhbWUuQXBpVHlwZUFEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IFJldHVyblVzZXJJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYW50U2VydmljZS5saXN0W3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0ubG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmNoYW5nZUl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGFudFNlcnZpY2UubGlzdFt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PSBcImFkX3VubG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdFBldEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXggPSBQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RQZXRJbmRleCA+PSBQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBldEJ1eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb193YXRjaFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRHb1dhdGNoKFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XS5iYXNlLmlkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fcmVzdFwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTlFRDhcdThCQTRcdTRGNjlcdTYyMzRcdTdCMkNcdTRFMDBcdTRFMkFcdTVCQTBcdTcyNjlcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0R29XYXRjaCgxMDAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmVlZF9idXlcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5OTcyXHU2NTk5XHU4RDJEXHU0RTcwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZlZWRCdXkoKSB7XHJcbiAgICAgICAgbGV0IGZlZWQgPSB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XSBhcyBGZWVkRGF0YUJhc2U7XHJcbiAgICAgICAgaWYgKCFmZWVkKSByZXR1cm47XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZlZWRCdXksXHJcbiAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZmVlZEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICBmZWVkSWQ6IGZlZWQuYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGw6IChkOiBSZXR1cm5Vc2VySW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgKz0gZmVlZC5iYXNlLnZpdGFsaXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLmZlZWRCdXlCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBmZWVkLmJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBub3RGbHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUJBMFx1NzI2OVx1NTNCQlx1NzcwQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBldEdvV2F0Y2gocGV0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgIGFwaTogQXBpSHR0cC5wZXRXZWFyLFxyXG4gICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInBldEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICBwZXRJZDogcGV0SWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsOiAoZDogUmV0dXJuVXNlckluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLndhcmVQZXRJZCA9IHBldElkO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwZXRCdXkoKSB7XHJcbiAgICAgICAgbGV0IHsgYmFzZSB9ID0gUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgIGFwaTogQXBpSHR0cC5wZXRCdXksXHJcbiAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wicGV0QnV5XCJdPntcclxuICAgICAgICAgICAgICAgIHBldElkOiBiYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbDogKGQ6IFJldHVyblVzZXJJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF0ubG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgVXNlckluZm8ud2FyZVBldElkID0gYmFzZS5pZDtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8ucGV0Vml0YWxpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IGJhc2Uudml0YWxpdHlfbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IENvbmZpZ0dhbWUucGV0RGlnZXN0SW50ZXJ2YWxUaW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU3MEI5XHU1MUZCXHU3MEI5XHU1MUZCXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlVG9wQnRuU3RhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJ0bkJveFRvcC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBsYiA9IGJ0bi5nZXRDaGlsZEF0KDApIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGlmICh4ID09PSB0aGlzLnRvcEJ0blNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVsxXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZy1tZW51bm9ybWFsLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVCb3R0b20oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NUU5NVx1OTBFOFx1NTE4NVx1NUJCOVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJvdHRvbSgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm90dG9tQm94Lm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSh4LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpdGVtQnV5Qm94ID0gdGhpcy5pdGVtQnV5QnRuLnBhcmVudCBhcyBMYXlhLkJveDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudG9wQnRuU2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAvL1x1NzlDRFx1NUI1MFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGV0T3JGZWVkTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgxLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGV0T3JGZWVkTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQnV5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5hcnJheSA9IFssIDEsIDEsIDFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUGV0KCkge1xyXG4gICAgICAgIGlmICghUGV0U2VydmljZS5saXN0Lmxlbmd0aCkgUGV0U2VydmljZS5pbml0KFtdKTtcclxuICAgICAgICBsZXQgcGV0ID0gUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdO1xyXG4gICAgICAgIHRoaXMucGV0SWNvbi5za2luID0gcGV0LmJhc2UuaWNvbjtcclxuICAgICAgICB0aGlzLnBldE5hbWUudGV4dCA9IHBldC5iYXNlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5wZXREZXNjLnRleHQgPSBwZXQuYmFzZS5kZXNjO1xyXG4gICAgICAgIHRoaXMudml0YWxpdHlNYXgudmFsdWUgPSBwZXQuYmFzZS52aXRhbGl0eV9tYXggKyBcIlwiO1xyXG4gICAgICAgIGxldCBidG5fYm94ID0gdGhpcy5wZXRCdXlCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChidG5fYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gcGV0LmJhc2UuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAoYnRuX2JveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gcGV0LmJhc2UuY29zdC5jb3VudCArIFwiXCI7XHJcblxyXG4gICAgICAgIGxldCBwZXRCb3ggPSB0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDEpLFxyXG4gICAgICAgICAgICBmaW5kQm94ID0gcGV0Qm94LmdldENoaWxkQnlOYW1lKFwiZmluZF9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGJhY2tfYm94ID0gcGV0Qm94LmdldENoaWxkQnlOYW1lKFwiYmFja19ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIHN0YXJJY29uOiBMYXlhLkltYWdlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcbiAgICAgICAgICAgIHN0YXJJY29uID0gZmluZEJveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnZpc2libGUgPSB4ICogMjAgPCBwZXQuYmFzZS5zZW5zaXRpdmU7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgeCAqIDIwICsgMTAgPCBwZXQuYmFzZS5zZW5zaXRpdmUgPyBcImdhbWUvaW1nX3N0YXIucG5nXCIgOiBcImdhbWUvaW1nX2hhbGZzdGFyLnBuZ1wiO1xyXG4gICAgICAgICAgICBzdGFySWNvbiA9IGJhY2tfYm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgc3Rhckljb24udmlzaWJsZSA9IHggKiAyMCA8IHBldC5iYXNlLmFiaWxpdHk7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgeCAqIDIwICsgMTAgPCBwZXQuYmFzZS5hYmlsaXR5ID8gXCJnYW1lL2ltZ19zdGFyLnBuZ1wiIDogXCJnYW1lL2ltZ19oYWxmc3Rhci5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBldC5sb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGV0QnV5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdvUmVzdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ29XYXRjaC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKFVzZXJJbmZvLndhcmVQZXRJZCA9PSBwZXQuYmFzZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFBldFNlcnZpY2UuZ2V0VW5sb2NrTGVuKCkgPT09IDEgfHwgVXNlckluZm8ud2FyZVBldElkID09PSAxMDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvV2F0Y2gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1dhdGNoLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBldEJ1eUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5MUNEXHU3RjZFXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVzZXRQZXRPckZlZWRMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5nZXREYXRhTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RTJEXHU5NUY0XHU1MTg1XHU1QkI5XHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU1MjA3XHU2MzYyXHJcbiAgICAgKiBAcGFyYW0gaSBcdTRFMEJcdTY4MDdcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNlbnRlckJveFN0YXRlKGk6IG51bWJlciwgc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KGkpIGFzIExheWEuQm94KS52aXNpYmxlID0gc2hvdztcclxuICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdChpKSBhcyBMYXlhLkJveCkuYWN0aXZlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTRCMVx1NUU4NFx1OTAwOVx1NjJFOVxyXG4gICAgICogQHBhcmFtIGUgXHU0RTBCXHU2ODA3XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25QcmljZVNlbGVjdChlOiBudW1iZXIpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk0QjFcdTVFODRcdTY1NzBcdTYzNkVcdTZFMzJcdTY3RDNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVQcmljZUl0ZW0oY2VsbDogTGF5YS5JbWFnZSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJpY2VMaXN0LnNlbGVjdGVkSW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID0gXCJnYW1lL2ltZ19wcmljZXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IFwiZ2FtZS9pbWdfcHJpY2Vub3JtYWwucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbi8vICBTaWduSW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5WaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluTGlzdCwgdGlwczpcIlx1N0I3RVx1NTIzMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25Jbkxpc3Q6IExheWEuTGlzdDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluUHJvZ3Jlc3NMYiwgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25JblByb2dyZXNzTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluUHJvZ3Jlc3NCYXIsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY3NjFcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBzaWduSW5Qcm9ncmVzc0JhcjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcm9ncmVzc0Rlc2MsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY1ODdcdTVCNTdcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBwcm9ncmVzc0Rlc2M6IExheWEuTGFiZWw7XHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QuYXJyYXkgPSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdDtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2lnbkluTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVByb2dyZXNzKCkge1xyXG4gICAgICAgIGxldCBzY2FsZSA9IFVzZXJJbmZvLnNwZWVkVXBUaW1lcyAvIENvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXM7XHJcbiAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuc2lnbkluUHJvZ3Jlc3NCYXIud2lkdGggPSA5NzcgKiBzY2FsZTtcclxuICAgICAgICB0aGlzLnNpZ25JblByb2dyZXNzTGIudGV4dCA9IFVzZXJJbmZvLnNpZ25JbkRheXMgKyBcIlwiO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NEZXNjLnRleHQgPSBgXHU0RUNBXHU2NUU1XHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHVGRjA4XHU0RjdGXHU3NTI4JHtVc2VySW5mby5zcGVlZFVwVGltZXN9LyR7Q29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lc31cdTZCMjFcdTUyQTBcdTkwMUZcdUZGMDlgO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlSXRlbShjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYmFyID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBvYmogPSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdFtpXTtcclxuICAgICAgICBsZXQgc2NhbGUgPSBVc2VySW5mby5zaWduSW5EYXlzIC8gb2JqLmRheXM7XHJcbiAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG4gICAgICAgIGJhci53aWR0aCA9IDUwMiAqIHNjYWxlO1xyXG4gICAgICAgIGNvbnN0IHJld2FyZEJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRfYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmoucmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJhbW91bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGB4JHtvYmoucmV3YXJkLmNvdW50fWA7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwic2lnbl9kYXlzXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU3QjdFXHU1MjMwJHtvYmouZGF5c31cdTU5MjlgO1xyXG5cclxuICAgICAgICBsZXQgc2tpbjogc3RyaW5nID0gXCJcIixcclxuICAgICAgICAgICAgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImdldF9idG5cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IG9iai5pZDtcclxuICAgICAgICBpZiAob2JqLmlkID4gVXNlckluZm8uc2lnbkluSWQpIHtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC55ID0gMTAzO1xyXG4gICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2RvbmUucG5nYDtcclxuXHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby5zaWduSW5EYXlzID49IG9iai5kYXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLnNpZ25JbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdFswXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2dldC5wbmdgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCAtIFVzZXJJbmZvLnNpZ25JbklkID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbiA9IGBnYW1lL2ltZ19nZXQucG5nYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQm94LnkgPSA1NztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX3JlY2VpdmVkLnBuZ2A7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG4uc2tpbiA9IHNraW47XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2lnbkluVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdldF9idG5cIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5ODg2XHU1M0Q2XHU1OTU2XHU1MkIxXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lnbkluSWQgPSBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuc2lnbkluUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsIHNpZ25JbklkOiBzaWduSW5JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiB7IGFkdmVydGlzZVRpbWVzOiBudW1iZXI7IHNwZWVkVXBUaW1lczogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBzaWduSW5JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduSW5MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJld2FyZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5nZXQoc2lnbkluSWQpLnJld2FyZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogZS50YXJnZXQgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiByZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiByZXdhcmQub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkID8gMSA6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBTcGVlZFVwVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlZWRVcFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRpbWVMYiwgdGlwczpcIlx1NTJBMFx1OTAxRlx1NjVGNlx1OTVGNFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGltZUxiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRpbWVzTGIsIHRpcHM6XCJcdTUxNjhcdTRGNTNcdTUyQTBcdTkwMUZcdTUyNjlcdTRGNTlcdTZCMjFcdTY1NzBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRpbWVzTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3BlZWRVcEJ0biwgdGlwczpcIlx1NTE2OFx1NEY1M1x1NTJBMFx1OTAxRlx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3BlZWRVcEJ0bjogTGF5YS5MYWJlbDtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICBsZXQgdGltZSA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJhbGxfc3BlZWRfdXBfdGltZVwiKS52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgdGhpcy50aW1lTGIudGV4dCA9IGAke01hdGguY2VpbCh0aW1lIC8gNjApfVx1NTIwNlx1OTQ5RmA7XHJcbiAgICAgICAgdGhpcy50aW1lc0xiLnRleHQgPSBgXHU0RUNBXHU2NUU1XHU1MjY5XHU0RjU5JHtVc2VySW5mby5hZHZlcnRpc2VUaW1lc31cdTZCMjFgO1xyXG4gICAgICAgIGlmIChVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRVcEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU3BlZWRVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzcGVlZF91cFwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFNwZWVkVXAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVBRCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiB7IGFkdmVydGlzZVRpbWVzOiBudW1iZXI7IHNwZWVkVXBUaW1lczogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc3BlZWRVcFRpbWVzID0gZC5zcGVlZFVwVGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVc2VySW5mby5zcGVlZFVwVGltZXMgPT0gQ29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNwZWVkVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMubGFuZF9zcGVlZF91cCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiB9IGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuLi9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi4vY29yZS9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbmludGVyZmFjZSBCdXR0b25PYmoge1xyXG4gICAgLyoqIFx1NEVGQlx1NTJBMWlkICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1NUI4Q1x1NjIxMCAqL1xyXG4gICAgb2s6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vICBUYXNrVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1ZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0YXNrTGlzdCwgdGlwczpcIlx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGFza0xpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUYXNrTGlzdCgpO1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5pdGVtUmVuZGVyKTtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYXNrTGlzdCgpIHtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0LmFycmF5ID0gVGFza1NlcnZpY2UuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXRlbVJlbmRlcihjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IFRhc2tTZXJ2aWNlLmxpc3RbaV0uYmFzZTtcclxuICAgICAgICBjb25zdCB0YXNrID0gVGFza1NlcnZpY2UuZ2V0VGFzayhvYmouaWQpO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gb2JqLmljb247XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gb2JqLnRpdGxlO1xyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImRlc2NcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke29iai5kZXNjfSgke1xyXG4gICAgICAgICAgICAodGFzaz8udGltZXMgPiBvYmoudGltZXMgPyBvYmoudGltZXMgOiB0YXNrPy50aW1lcykgfHwgMFxyXG4gICAgICAgIH0vJHtvYmoudGltZXN9KWA7XHJcblxyXG4gICAgICAgIGNvbnN0IHJld2FyZEJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IG9iai5yZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImFtb3VudFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gXCJ4XCIgKyBvYmoucmV3YXJkLmNvdW50O1xyXG5cclxuICAgICAgICBjb25zdCBidG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZ29fcnVuXCIpIGFzIExheWEuSW1hZ2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bk9iajogQnV0dG9uT2JqID0ge1xyXG4gICAgICAgICAgICBpZDogb2JqLmlkLFxyXG4gICAgICAgICAgICBvazogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9cdTVERjJcdTk4ODZcdTUzRDZcclxuICAgICAgICBpZiAodGFzaz8ucmVjZWl2ZSkge1xyXG4gICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfdG9tYXJvdy5wbmdcIjtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9cdTUzRUZcdTk4ODZcdTUzRDZcclxuICAgICAgICAgICAgaWYgKHRhc2s/LnRpbWVzID49IG9iai50aW1lcykge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX2dldC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJ0bk9iai5vayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfZG9uZS5wbmdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnRuLmRhdGFTb3VyY2UgPSBidG5PYmo7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19ydW5cIjpcclxuICAgICAgICAgICAgICAgIGxldCBidG5PYmo6IEJ1dHRvbk9iaiA9IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuT2JqLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTgzQjdcdTUzRDZcdTU5NTZcdTUyQjFcclxuICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAudGFza1Jld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVBRCwgdGFza0lkOiBidG5PYmouaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IHsgZ29sZDogMDsgZGlhbW9uZDogMDsgYWR2ZXJ0aXNlVGltZXM6IDAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IFRhc2tTZXJ2aWNlLmdldFRhc2soYnRuT2JqLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucmVjZWl2ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5PYmoub2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV90YXNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiB0YXNrLmJhc2UucmV3YXJkLm9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiB0YXNrLmJhc2UucmV3YXJkLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVtcChidG5PYmouaWQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wKGlkLCB0YXJnZXQpIHtcclxuICAgICAgICBzd2l0Y2ggKGlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMTpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiB7IGdvbGQ6IDA7IGRpYW1vbmQ6IDA7IGFkdmVydGlzZVRpbWVzOiAwIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDM6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNTpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDY6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA3OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwODpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLldhcmVob3VzZVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwOTpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMTA6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDExOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxMjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlLCB7IFdhcmVIb3VzZURhdGEgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1xyXG4gKi9cclxuLy9GaWVsZExldmVsVXBWaWV3IFdhcmVob3VzZVZpZXcgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXJlaG91c2VWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTGlzdCwgdGlwczpcIlx1NzI2OVx1NTRDMVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbU5hbWUsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1OYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtRGVzYywgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbURlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1JY29uLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsQ291bnRMYiwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NTFGQVx1NTUyRVx1NjU3MFx1OTFDRlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxDb3VudExiOiBMYXlhLlRleHRJbnB1dCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxCb3gsIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTcyNjlcdTU0QzFcdTRFRjdcdTY4M0NcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsQm94OiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsR29sZCwgdGlwczpcIlx1OTFEMVx1NUUwMVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxHb2xkOiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsRGlhbW9uZCwgdGlwczpcIlx1OTRCQlx1NzdGM1x1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxEaWFtb25kOiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNlbGxCdG4sIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTc2ODRpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzZWxsQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWxsQWRCdG4sIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTc2ODRpY29uIFx1NUU3Rlx1NTQ0QVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VsbEFkQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBXYXJlSG91c2VEYXRhW11bXSA9IFtdO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMSBcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbUluZGV4OiBzdHJpbmcgPSBcIjAsMFwiO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMVx1NjU3MFx1NjM2RSAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtRGF0YTogV2FyZUhvdXNlRGF0YTtcclxuICAgIC8qKiBcdTkwMDlcdTRFMkRcdTUxRkFcdTU1MkVcdTcyNjlcdTU0QzFcdTc2ODRcdTY1NzBcdTkxQ0YgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbVNlbGxDb3VudDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUzNTVcdTRFRjcgXHU5MUQxXHU1RTAxICovXHJcbiAgICBwcml2YXRlIHVuaXRQcmljZUdvbGQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1MzU1XHU0RUY3IFx1OTRCQlx1NzdGMyAqL1xyXG4gICAgcHJpdmF0ZSB1bml0UHJpY2VEaWFtb25kOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuZGFrYWljYW5na3UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVySXRlbUxpc3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXNjKG51bGwpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1TZWxsR29sZC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbERpYW1vbmQucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi5vbihMYXlhLkV2ZW50LklOUFVULCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IE51bWJlcih0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPiB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTGlzdCgpIHtcclxuICAgICAgICBsZXQgaSA9IDAsXHJcbiAgICAgICAgICAgIHkgPSAwO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhTGlzdFt5XSkgdGhpcy5kYXRhTGlzdFt5XSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFMaXN0W3ldLnB1c2goZCk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaWYgKGkgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgICAgIHkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5kYXRhTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckl0ZW1MaXN0KGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YUxpc3RbaV07XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjZWxsLmdldENoaWxkQnlOYW1lKGBpdGVtXyR7eH1gKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAgICAgaWYgKGRhdGFbeF0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmRhdGFTb3VyY2UgPSBgJHtpfSwke3h9YDtcclxuICAgICAgICAgICAgICAgIGxldCBpY29uID0gaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgICAgIGljb24uc2tpbiA9IGRhdGFbeF0uYmFzZS5pY29uO1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWxcclxuICAgICAgICAgICAgICAgICkudGV4dCA9IGAke2RhdGFbeF0uYmFzZS5uYW1lfV8ke2RhdGFbeF0uY291bnR9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggJiYgdGhpcy5zZWxlY3RJdGVtSW5kZXggPT0gaXRlbS5kYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhpY29uLCB7IHk6IDAgfSwgMTUwLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtRGF0YSA9IGRhdGFbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZXNjKGRhdGFbeF0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpY29uLnkgPSA1NjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbi55ICE9IDU2KSBMYXlhLlR3ZWVuLnRvKGljb24sIHsgeTogNTYgfSwgMTUwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8xXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbUluZGV4ID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7IC8vIFx1OEZEOVx1OTFDQ1x1OTcwMFx1ODk4MVx1NEYxOFx1NTMxNlx1NzNCMFx1NTcyOFx1NTA1QVx1NzY4NFx1NjYyRlx1NTIzN1x1NjVCMFx1NjU3NFx1NEUyQVx1NTIxN1x1ODg2OFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA+IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlZHVjZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50LS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50IDwgMSkgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlbGxCdG5BZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwic2VsbEJ0blwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAud2FyZWhvdXNlU2VsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcIndhcmVob3VzZVNlbGxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5zZWxlY3RJdGVtRGF0YS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUgPT0gXCJzZWxsQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IFJldHVyblVzZXJJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UucmVkdWNlQW1vdW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtRGF0YS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlc2MobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmRMaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0UHJpY2VHb2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0UHJpY2VHb2xkICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUudGFyZ2V0Lm5hbWUgPT0gXCJzZWxsQnRuQWRcIiA/IDIgOiAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdFByaWNlRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChDb25maWdHYW1lLmRpYW1vbmRJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdFByaWNlRGlhbW9uZCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLnRhcmdldC5uYW1lID09IFwic2VsbEJ0bkFkXCIgPyAyIDogMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PSBcInNlbGxCdG5BZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogdGhpcy5zZWxsQnRuIGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJld2FyZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjazogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUxRkFcdTUxRkFcdTU1MkVcdTRGRTFcdTYwNkZcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVEZXNjKGQ6IFdhcmVIb3VzZURhdGEpIHtcclxuICAgICAgICBpZiAoIWQpIHtcclxuICAgICAgICAgICAgKHRoaXMuaXRlbUljb24ucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICh0aGlzLml0ZW1JY29uLnBhcmVudCBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxEaWFtb25kLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsR29sZC5yZW1vdmVTZWxmKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUljb24uc2tpbiA9IGQuYmFzZS5pY29uO1xyXG4gICAgICAgIHRoaXMuaXRlbU5hbWUudGV4dCA9IGQuYmFzZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuaXRlbURlc2MudGV4dCA9IGQuYmFzZS5kZXNjO1xyXG4gICAgICAgIGxldCBwcmljZUdvbGQ6IFJld2FyZEN1cnJlbmN5QmFzZSwgcHJpY2VEaWFtb25kOiBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkLmJhc2UuZ2Fpbi5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkLmJhc2UuZ2Fpblt4XSk7XHJcbiAgICAgICAgICAgIGlmICghZC5iYXNlLmdhaW5beF0uY291bnQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoZC5iYXNlLmdhaW5beF0ub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkKSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZUdvbGQgPSBkLmJhc2UuZ2Fpblt4XTtcclxuICAgICAgICAgICAgICAgICh0aGlzLml0ZW1TZWxsR29sZC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgZC5iYXNlLmdhaW5beF0ub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxsQm94LmFkZENoaWxkKHRoaXMuaXRlbVNlbGxHb2xkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByaWNlRGlhbW9uZCA9IGQuYmFzZS5nYWluW3hdO1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXRlbVNlbGxEaWFtb25kLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID1cclxuICAgICAgICAgICAgICAgICAgICBkLmJhc2UuZ2Fpblt4XS5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGxCb3guYWRkQ2hpbGQodGhpcy5pdGVtU2VsbERpYW1vbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSBNYXRoLmNlaWwoZC5jb3VudCAvIDIpO1xyXG4gICAgICAgIHRoaXMudW5pdFByaWNlR29sZCA9IHByaWNlR29sZD8uY291bnQgfHwgMDtcclxuICAgICAgICB0aGlzLnVuaXRQcmljZURpYW1vbmQgPSBwcmljZURpYW1vbmQ/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTNFRlx1NEVFNVx1NTFGQVx1NTUyRVx1NzY4NFx1NjU3MFx1OTFDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpIHtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0ID0gdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICsgXCJcIjtcclxuICAgICAgICAodGhpcy5pdGVtU2VsbEdvbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICogdGhpcy51bml0UHJpY2VHb2xkICsgXCJcIjtcclxuICAgICAgICAodGhpcy5pdGVtU2VsbERpYW1vbmQuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICogdGhpcy51bml0UHJpY2VEaWFtb25kICsgXCJcIjtcclxuICAgIH1cclxufVxyXG4iLCAiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IFZpZXdTaG93QW5pIGZyb20gXCIuL2NvbXBvbmVudHMvVmlld1Nob3dBbmlcIlxuaW1wb3J0IEFkZExhbmRWaWV3IGZyb20gXCIuL3ZpZXcvQWRkTGFuZFZpZXdcIlxuaW1wb3J0IEJ1eVZpdGFsaXR5VmlldyBmcm9tIFwiLi92aWV3L0J1eVZpdGFsaXR5Vmlld1wiXG5pbXBvcnQgRmllbGRMZXZlbFVwVmlldyBmcm9tIFwiLi92aWV3L0ZpZWxkTGV2ZWxVcFZpZXdcIlxuaW1wb3J0IEZyaWVuZHNEZXNjVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNEZXNjVmlld1wiXG5pbXBvcnQgRnJpZW5kc1Jld2FyZFZpZXcgZnJvbSBcIi4vdmlldy9GcmllbmRzUmV3YXJkVmlld1wiXG5pbXBvcnQgRnJpZW5kc1ZpZXcgZnJvbSBcIi4vdmlldy9GcmllbmRzVmlld1wiXG5pbXBvcnQgSGludFZpZXcgZnJvbSBcIi4vdmlldy9IaW50Vmlld1wiXG5pbXBvcnQgTG9naW5WaWV3IGZyb20gXCIuL3ZpZXcvTG9naW5WaWV3XCJcbmltcG9ydCBNYWlsVmlldyBmcm9tIFwiLi92aWV3L01haWxWaWV3XCJcbmltcG9ydCBNYWluVmlldyBmcm9tIFwiLi92aWV3L01haW5WaWV3XCJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50XCJcbmltcG9ydCBPcmRlclZpZXcgZnJvbSBcIi4vdmlldy9PcmRlclZpZXdcIlxuaW1wb3J0IE92ZXJWaWV3IGZyb20gXCIuL3ZpZXcvT3ZlclZpZXdcIlxuaW1wb3J0IFNldHRpbmdWaWV3IGZyb20gXCIuL3ZpZXcvU2V0dGluZ1ZpZXdcIlxuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL3ZpZXcvU2hvcFZpZXdcIlxuaW1wb3J0IFNpZ25JblZpZXcgZnJvbSBcIi4vdmlldy9TaWduSW5WaWV3XCJcbmltcG9ydCBTcGVlZFVwVmlldyBmcm9tIFwiLi92aWV3L1NwZWVkVXBWaWV3XCJcbmltcG9ydCBUYXNrVmlldyBmcm9tIFwiLi92aWV3L1Rhc2tWaWV3XCJcbmltcG9ydCBXYXJlaG91c2VWaWV3IGZyb20gXCIuL3ZpZXcvV2FyZWhvdXNlVmlld1wiXHJcbi8qXHJcbiogXHU2RTM4XHU2MjBGXHU1MjFEXHU1OUNCXHU1MzE2XHU5MTREXHU3RjZFO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xMDgwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTkyMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvQnV0dG9uLnRzXCIsQnV0dG9uKTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9WaWV3U2hvd0FuaS50c1wiLFZpZXdTaG93QW5pKTtcbiAgICAgICAgcmVnKFwidmlldy9BZGRMYW5kVmlldy50c1wiLEFkZExhbmRWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9CdXlWaXRhbGl0eVZpZXcudHNcIixCdXlWaXRhbGl0eVZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZpZWxkTGV2ZWxVcFZpZXcudHNcIixGaWVsZExldmVsVXBWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9GcmllbmRzRGVzY1ZpZXcudHNcIixGcmllbmRzRGVzY1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNSZXdhcmRWaWV3LnRzXCIsRnJpZW5kc1Jld2FyZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNWaWV3LnRzXCIsRnJpZW5kc1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0hpbnRWaWV3LnRzXCIsSGludFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0xvZ2luVmlldy50c1wiLExvZ2luVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpbFZpZXcudHNcIixNYWlsVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpblZpZXcudHNcIixNYWluVmlldyk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHNcIixGaWVsZENvbXBvbmVudCk7XG4gICAgICAgIHJlZyhcInZpZXcvT3JkZXJWaWV3LnRzXCIsT3JkZXJWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9PdmVyVmlldy50c1wiLE92ZXJWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TZXR0aW5nVmlldy50c1wiLFNldHRpbmdWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TaG9wVmlldy50c1wiLFNob3BWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TaWduSW5WaWV3LnRzXCIsU2lnbkluVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU3BlZWRVcFZpZXcudHNcIixTcGVlZFVwVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvVGFza1ZpZXcudHNcIixUYXNrVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvV2FyZWhvdXNlVmlldy50c1wiLFdhcmVob3VzZVZpZXcpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwiLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCIuL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCIuL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCIuL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcIi4vY29yZS9BcHBcIjtcclxuY2xhc3MgTWFpbiB7XHJcbiAgICAvKiogXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcdTUyMTdcdTg4NjggKi9cclxuICAgIHN0YXRpYyBjdXN0b21SZW5kZXJJRDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1x1NjgzOVx1NjM2RUlERVx1OEJCRVx1N0Y2RVx1NTIxRFx1NTlDQlx1NTMxNlx1NUYxNVx1NjRDRVxyXG4gICAgICAgIGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuICAgICAgICBlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuICAgICAgICBMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcbiAgICAgICAgLy9cdTUxN0NcdTVCQjlcdTVGQUVcdTRGRTFcdTRFMERcdTY1MkZcdTYzMDFcdTUyQTBcdThGN0RzY2VuZVx1NTQwRVx1N0YwMFx1NTczQVx1NjY2RlxyXG4gICAgICAgIExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcbiAgICAgICAgLy9cdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDhcdTkwMUFcdThGQzdJREVcdThCQkVcdTdGNkVcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdUZGMENcdTYyMTZcdTgwMDV1cmxcdTU3MzBcdTU3NDBcdTU4OUVcdTUyQTBkZWJ1Zz10cnVlXHU1M0MyXHU2NTcwXHVGRjBDXHU1NzQ3XHU1M0VGXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA5XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcbiAgICAgICAgTGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG5cclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1OEQ0NFx1NkU5MFx1NzI0OFx1NjcyQ1x1NjNBN1x1NTIzNlx1RkYwQ3ZlcnNpb24uanNvblx1NzUzMUlERVx1NTNEMVx1NUUwM1x1NTI5Rlx1ODBGRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NEU1Rlx1NEUwRFx1NUY3MVx1NTRDRFx1NTQwRVx1N0VFRFx1NkQ0MVx1N0EwQlxyXG4gICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksXHJcbiAgICAgICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT05cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1NTkyN1x1NUMwRlx1NTZGRVx1NjYyMFx1NUMwNFx1RkYwQ1x1NTJBMFx1OEY3RFx1NUMwRlx1NTZGRVx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NTNEMVx1NzNCMFx1NUMwRlx1NTZGRVx1NTcyOFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1OTFDQ1x1OTc2Mlx1RkYwQ1x1NTIxOVx1NEYxOFx1NTE0OFx1NTJBMFx1OEY3RFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1RkYwQ1x1ODAwQ1x1NEUwRFx1NjYyRlx1NUMwRlx1NTZGRVxyXG4gICAgICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXHJcbiAgICAgICAgICAgIFwiZmlsZWNvbmZpZy5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ29uZmlnTG9hZGVkKCkge1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHJcbiAgICAgICAgQ29uZmlnW1wiY3VzdG9tUmVuZGVySURcIl0gPSBbXTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LmluaXQoQ29uZmlnR2FtZS5iYXNlVXJsKTtcclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2dpbl9nYW1lLCB0aGlzLCB0aGlzLmxvZ2luR2FtZSk7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIudXNlQXVkaW9NdXNpYyA9IGZhbHNlO1xyXG4gICAgICAgIEFwcENvcmUubGlzdGVuQXBwRnVuY3Rpb24oKTtcclxuICAgICAgICAvLyBWaWV3TWFuYWdlci5pbnN0LmluaXQoKTtcclxuXHJcbiAgICAgICAgLy8gTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL2F1ZGlvL2RyYXcubXAzXCIpO1xyXG4gICAgICAgIC8vXHU1OTgyXHU2NzlDXHU5MDFBXHU4RkM3XHU4QkJFXHU1OTA3XHU5NzU5XHU5N0YzXHU5NTJFXHU4QkE5XHU5N0YzXHU5ODkxXHU4MUVBXHU1MkE4XHU4RERGXHU5NjhGXHU4QkJFXHU1OTA3XHU5NzU5XHU5N0YzXHUzMDAyXHU5NzAwXHU4OTgxXHU1QzA2dXNlQXVkaW9NdXNpY1x1OEJCRVx1N0Y2RVx1NEUzQWZhbHNlXHUzMDAyXHJcbiAgICAgICAgLy8gU291bmRNYW5hZ2VyLnVzZUF1ZGlvTXVzaWM9ZmFsc2VcdUZGMUJcclxuICAgICAgICAvLyBMYXlhLlNvdW5kTWFuYWdlci5wbGF5TXVzaWMoUmVzLmF1ZGlvcy53aW4pO1xyXG5cclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oUmVzLnZpZXdzLkxvZ2luVmlldywge1xyXG4gICAgICAgICAgICAgICAgc2hvd0xvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEdhbWVEYXRhKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5WaWV3LnNldExvYWRpbmdQYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9cdTU0MEVcdTY3MUZcdTRGMThcdTUzMTZcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS5WaWV3LnNob3dMb2FkaW5nUGFnZShudWxsLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSg5OTk5OTk5OTk5OTk5OTkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5HYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5HYW1lKCkge1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIFJlcy5zY2VuZXMsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlcy5zY2VuZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhlKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheU11c2ljKFJlcy5hdWRpb3MuQkdNLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSgxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCBlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEdhbWVEYXRhKGQ6IE5ldEluaXQpIHt9XHJcbn1cclxuLy9cdTZGQzBcdTZEM0JcdTU0MkZcdTUyQThcdTdDN0JcclxubmV3IE1haW4oKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLE1BQVc7QUFBWCxZQUFXLFlBQVg7QUFFSCxrQ0FBZ0I7QUFHaEIsaUNBQWU7QUFHZixpQ0FBZTtBQUdmLGtDQUFnQjtBQUdoQiwrQkFBYTtBQUViLDhCQUFZO0FBRVosZ0NBQWM7QUFzQmQsb0NBQWtCO0FBRWxCLHVDQUFxQjtBQUVyQixtQ0FBaUI7QUFBQSxLQTVDSDtBQWtEWCxNQUFXO0FBQVgsWUFBVyxjQUFYO0FBRUgseUJBQUs7QUFFTCw4QkFBVTtBQUVW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QUFLLE1BQUssVUFBUyxXQUFVLFNBQVEsR0FBRSxTQUFRLG1DQUFTLFFBQU8sbUNBQVMsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLEdBQUUsU0FBUSxtQ0FBUyxRQUFPLG1DQUFTLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxJQUFHLFNBQVEsb0NBQVUsUUFBTyxvQ0FBVSxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxXQUFVLFNBQVEsR0FBRSxTQUFRLG1DQUFTLFFBQU8sbUNBQVMsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsWUFBVyxTQUFRLEdBQUUsU0FBUSw0QkFBTyxRQUFPLG1DQUFTLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxHQUFFLFNBQVEsa0NBQVEsUUFBTyw0QkFBTyxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxXQUFVLFNBQVEsR0FBRSxTQUFRLDRCQUFPLFFBQU8sd0NBQVMsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLElBQUcsU0FBUSxzQkFBTSxRQUFPLDhCQUFTLFFBQU8sU0FBTyxVQUFTLENBQUMsRUFBQyxNQUFLLE1BQUssUUFBTyxHQUFFLFVBQVMsZ0JBQWMsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsZ0JBQWMsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsZ0JBQWMsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsZ0JBQWMsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsaUJBQWUsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsaUJBQWUsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMsaUJBQWUsRUFBQyxNQUFLLE1BQUssUUFBTyxLQUFJLFVBQVMsaUJBQWUsRUFBQyxNQUFLLE1BQUssUUFBTyxLQUFJLFVBQVMsa0JBQWdCLFNBQVEsQ0FBQyxFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFL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QixhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTywwREFBWSxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTyx3Q0FBUyxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTyxrQ0FBUSxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sc0JBQU0sUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTyxrQ0FBUSxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sc0JBQU0sUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTyxpRUFBYyxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTyxvREFBVyxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGFBQVksUUFBTywwREFBWSxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGNBQWEsUUFBTyx3Q0FBUyxhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyx5QkFBd0IsZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGNBQWEsUUFBTyxzRUFBYyxhQUFZLElBQUcsV0FBVSxPQUFLLFNBQVEsQ0FBQyxFQUFDLE1BQUssR0FBRSxjQUFhLE9BQU0sYUFBWSxZQUFVLEVBQUMsTUFBSyxHQUFFLGNBQWEsUUFBTyxhQUFZLG1CQUFpQixFQUFDLE1BQUssR0FBRSxjQUFhLFFBQU8sYUFBWSwwQkFBd0IsRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksaUNBQStCLEVBQUMsTUFBSyxHQUFFLGNBQWEsUUFBTyxhQUFZLGlDQUErQixFQUFDLE1BQUssR0FBRSxjQUFhLFFBQU8sYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxHQUFFLGNBQWEsUUFBTyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssR0FBRSxjQUFhLFFBQU8sYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsT0FBTSxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsS0FBSSxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLEtBQUksYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMs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
