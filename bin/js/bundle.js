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
    EventMaps2["play_get_reward"] = "play_get_reward";
  })(EventMaps || (EventMaps = {}));

  // src/common/Res.ts
  var views;
  (function(views3) {
    views3["AddLandView"] = "scenes/views/AddLandView.scene";
    views3["FieldLevelUpView"] = "scenes/views/FieldLevelUpView.scene";
    views3["FriendsDescView"] = "scenes/views/FriendsDescView.scene";
    views3["FriendsRewardView"] = "scenes/views/FriendsRewardView.scene";
    views3["FriendsView"] = "scenes/views/FriendsView.scene";
    views3["HintView"] = "scenes/views/HintView.scene";
    views3["LoginView"] = "scenes/views/LoginView.scene";
    views3["MailView"] = "scenes/views/MailView.scene";
    views3["MainView"] = "scenes/views/MainView.scene";
    views3["OrderView"] = "scenes/views/OrderView.scene";
    views3["SettingView"] = "scenes/views/SettingView.scene";
    views3["ShopView"] = "scenes/views/ShopView.scene";
    views3["SignInView"] = "scenes/views/SignInView.scene";
    views3["SpeedUpView"] = "scenes/views/SpeedUpView.scene";
    views3["TaskView"] = "scenes/views/TaskView.scene";
    views3["WarehouseView"] = "scenes/views/WarehouseView.scene";
  })(views || (views = {}));
  var audios;
  (function(audios2) {
    audios2["button_click"] = "res/audio/button_click.mp3";
  })(audios || (audios = {}));
  var scenes = [
    "scenes/views/WarehouseView.scene",
    "scenes/views/TaskView.scene",
    "scenes/views/SpeedUpView.scene",
    "scenes/views/SignInView.scene",
    "scenes/views/ShopView.scene",
    "scenes/views/SettingView.scene",
    "scenes/views/OrderView.scene",
    "scenes/views/MainView.scene",
    "scenes/views/MailView.scene",
    "scenes/views/LoginView.scene",
    "scenes/views/HintView.scene",
    "scenes/views/FriendsView.scene",
    "scenes/views/FriendsRewardView.scene",
    "scenes/views/FriendsDescView.scene",
    "scenes/views/FieldLevelUpView.scene",
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
    "res/audio/button_click.mp3",
    "res/atlas/plant_icon.png",
    "res/atlas/plant_icon.atlas",
    "res/atlas/pet_feed.png",
    "res/atlas/pet_feed.atlas",
    "res/atlas/main_scene1.png",
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
  };
  __decorateClass([
    Instance
  ], ViewManager, "inst", 2);

  // src/core/AudioControl.ts
  var AudioControl = class {
    playSound(url, loops, complete, soundClass, startTime) {
      Laya.SoundManager.playSound(url, loops, complete, soundClass, startTime);
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
    baseUrl: "//127.0.0.1:3000",
    ApiTypeDefault: 1,
    ApiTypeAD: 2,
    ADSpeedUpTimes: 6
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
  var Table = { "task": [{ "id": 1001, "reward": "1001:50", "times": 1, "title": "\u7B7E\u5230\u9886\u94BB\u77F3", "desc": "\u770B\u89C6\u9891\u7B7E\u5230", "icon": null }, { "id": 1002, "reward": "1001:100", "times": 10, "title": "\u83DC\u5730\u65BD\u80A510\u6B21", "desc": "\u83DC\u5730\u52A0\u901F10\u6B21", "icon": null }, { "id": 1003, "reward": "1001:50", "times": 10, "title": "\u83DC\u5730\u6536\u83B710\u6B21", "desc": "\u83DC\u5730\u6536\u83B710\u6B21", "icon": null }, { "id": 1004, "reward": "1001:50", "times": 5, "title": "\u8BBF\u53CB5\u6B21", "desc": "\u5077\u83DC5\u6B21", "icon": null }, { "id": 1005, "reward": "1001:20", "times": 3, "title": "\u5582\u517B\u72D7\u72D73\u6B21", "desc": "\u5582\u517B\u72D7\u72D73\u6B21", "icon": null }, { "id": 1006, "reward": "1001:20", "times": 5, "title": "\u8D2D\u4E70\u9972\u65995\u6B21", "desc": "\u8D2D\u4E70\u9972\u65995\u6B21", "icon": null }, { "id": 1007, "reward": "1001:20", "times": 10, "title": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "desc": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "icon": null }, { "id": 1008, "reward": "1001:30", "times": 3, "title": "\u51FA\u552E\u4F5C\u72693\u6B21", "desc": "\u51FA\u552E\u4F5C\u72693\u6B21", "icon": null }, { "id": 1009, "reward": "1001:100", "times": 5, "title": "\u6DFB\u52A0\u597D\u53CB", "desc": "\u6DFB\u52A0\u597D\u53CB5\u4E2A", "icon": null }, { "id": 1010, "reward": "1001:50", "times": 1, "title": "\u5206\u4EAB\u5F97\u597D\u793C", "desc": "\u5206\u4EAB\u4E00\u6B21", "icon": null }, { "id": 1011, "reward": "1001:30", "times": 3, "title": "\u6307\u5B9A\u79CD\u690D", "desc": "\u79CD\u690D\u6307\u5B9A\u79CD\u5B50", "icon": null }, { "id": 1012, "reward": "1001:50", "times": 10, "title": "\u770B\u89C6\u9891", "desc": "\u770B\u89C6\u989110\u6B21", "icon": null }], "signIn": [{ "id": 1001, "days": 7, "reward": "1001:20000" }, { "id": 1002, "days": 10, "reward": "1001:30000" }, { "id": 1003, "days": 15, "reward": "1001:50000" }, { "id": 1004, "days": 20, "reward": "1001:80000" }, { "id": 1005, "days": 30, "reward": "1001:120000" }, { "id": 1006, "days": 50, "reward": "1001:180000" }, { "id": 1007, "days": 80, "reward": "1001:300000" }, { "id": 1008, "days": 100, "reward": "1001:350000" }, { "id": 1009, "days": 150, "reward": "1001:500000" }], "plant": [{ "id": 1001, "name": "\u6C34\u7A3B", "icon": "plant_icon/1002_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1002, "name": "\u5927\u8C46", "icon": "plant_icon/1004_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1003, "name": "\u5927\u849C", "icon": "plant_icon/1012_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "240", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1004, "name": "\u5305\u5FC3\u83DC", "icon": "plant_icon/1006_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "1~2", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1005, "name": "\u571F\u8C46", "icon": "plant_icon/1007_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1006, "name": "\u841D\u535C", "icon": "plant_icon/1005_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1000", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1007, "name": "\u5C0F\u9EA6", "icon": "plant_icon/1001_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1500", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1008, "name": "\u8FA3\u6912", "icon": "plant_icon/1010_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "600", "unlock_cost": "1002:2000", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1009, "name": "\u9EC4\u74DC", "icon": "plant_icon/1011_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3000", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1010, "name": "\u8304\u5B50", "icon": "plant_icon/1013_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3500", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1011, "name": "\u80E1\u841D\u535C", "icon": "plant_icon/1008_seed.png", "seed_price": "1002:350", "gain": "1001:1,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:4500", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1012, "name": "\u5357\u74DC", "icon": "plant_icon/1014_seed.png", "seed_price": "1002:350", "gain": "1001:1,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:5000", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1013, "name": "\u7389\u7C73", "icon": "plant_icon/1003_seed.png", "seed_price": "1002:500", "gain": "1001:2,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:5500", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1014, "name": "\u7518\u8517", "icon": "plant_icon/1015_seed.png", "seed_price": "1002:500", "gain": "1001:2,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6000", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1015, "name": "\u756A\u8304", "icon": "plant_icon/1009_seed.png", "seed_price": "1002:500", "gain": "1001:2,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6500", "unlock_reward": "1001:1,1002:1000", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }], "pet": [{ "id": 1001, "name": "\u8FB9\u7267", "icon": "pet_feed/1001_dog.png", "vitality_max": 100, "vitality_consume": 10, "cost": "1002:3000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 34, "ability": 42 }, { "id": 1002, "name": "\u91D1\u6BDB", "icon": "pet_feed/1007_dog.png", "vitality_max": 100, "vitality_consume": 15, "cost": "1002:4000", "desc": "\u989C\u503C\u3001\u667A\u5546\u53CC\u53CC\u5728\u7EBF", "sensitive": 40, "ability": 48 }, { "id": 1003, "name": "\u79CB\u7530\u72AC", "icon": "pet_feed/1009_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:4500", "desc": "\u6700\u5FE0\u8BDA\u7684\u4F19\u4F34", "sensitive": 45, "ability": 55 }, { "id": 1004, "name": "\u54C8\u58EB\u5947", "icon": "pet_feed/1002_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:5000", "desc": "\u7EDD\u4E0D\u62C6\u5BB6\uFF01", "sensitive": 48, "ability": 60 }, { "id": 1005, "name": "\u5FB7\u56FD\u7267\u7F8A\u72AC", "icon": "pet_feed/1005_dog.png", "vitality_max": 100, "vitality_consume": 17, "cost": "1002:7000", "desc": "\u6D3B\u597D\u5403\u7684\u5C11", "sensitive": 50, "ability": 75 }, { "id": 1006, "name": "\u675C\u5BBE\u72AC", "icon": "pet_feed/1004_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:7500", "desc": "\u6B66\u529B\u5929\u8D4B\u5DF2\u70B9\u6EE1~\u62FF\u634F\uFF01", "sensitive": 60, "ability": 80 }, { "id": 1007, "name": "\u963F\u62C9\u65AF\u52A0\u72AC", "icon": "pet_feed/1008_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u5C31\u4E24\u4E2A\u5B57\uFF0C\u542C\u8BDD\uFF01", "sensitive": 69, "ability": 85 }, { "id": 1008, "name": "\u82CF\u683C\u5170\u7267\u7F8A\u72AC", "icon": "pet_feed/1003_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u770B\u5BB6\u3001\u770B\u83DC\u3001\u770B\u5B69\u5B50", "sensitive": 76, "ability": 88 }, { "id": 1009, "name": "\u6591\u70B9\u72D7", "icon": "pet_feed/1006_dog.png", "vitality_max": 100, "vitality_consume": 19, "cost": "1002:10000", "desc": "\u4F60\u503C\u5F97\u62E5\u6709\uFF01", "sensitive": 85, "ability": 93 }, { "id": 1010, "name": "\u85CF\u7352", "icon": "pet_feed/1010_dog.png", "vitality_max": 100, "vitality_consume": 30, "cost": "1002:15000", "desc": "\u957F\u5F97\u5C31\u5F88\u51F6\uFF0C\u6293\u5C0F\u5077\u66F4\u51F6", "sensitive": 90, "ability": 99 }], "order": [{ "id": 1, "commission": "0.5", "condition": "1001:2" }, { "id": 2, "commission": "0.1", "condition": "1001:1,1002:1,1003:1" }, { "id": 3, "commission": "0.03", "condition": "1012:18,1004:4,1003:5,1005:6" }, { "id": 4, "commission": "0.24", "condition": "1012:10,1003:3,1007:7,1015:9" }, { "id": 5, "commission": "0.61", "condition": "1014:6,1012:9,1010:19,1006:4" }, { "id": 6, "commission": "0.07", "condition": "1010:14,1004:2,1012:3,1001:8" }, { "id": 7, "commission": "0.43", "condition": "1012:18,1001:11,1007:7,1008:19" }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:2,1015:20" }, { "id": 9, "commission": "0.39", "condition": "1002:2,1015:10,1011:8,1003:18" }, { "id": 10, "commission": "0.22", "condition": "1006:12,1012:5,1011:14,1003:6" }, { "id": 11, "commission": "0.76", "condition": "1009:11,1004:20,1012:9,1002:10" }, { "id": 12, "commission": "0.43", "condition": "1007:16,1003:11,1012:16,1005:6" }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:18" }, { "id": 14, "commission": "0.7", "condition": "1015:18,1008:18,1006:16,1001:14" }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:1,1011:2,1001:10" }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17" }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:16,1012:19,1001:14" }, { "id": 18, "commission": 0.48, "condition": "1008:4,1011:2,1009:15,1002:5" }, { "id": 19, "commission": 0.75, "condition": "1013:1,1003:20,1014:11,1001:17" }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:2" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:4,1005:6,1007:5" }, { "id": 22, "commission": "0.4", "condition": "1015:9,1007:12,1011:5,1004:17" }, { "id": 23, "commission": 0.2, "condition": "1003:19,1014:2,1015:16,1001:14" }, { "id": 24, "commission": 0.77, "condition": "1014:3,1001:17,1008:18,1004:5" }, { "id": 25, "commission": 0.64, "condition": "1002:13,1011:1,1010:15,1007:20" }, { "id": 26, "commission": 0.03, "condition": "1002:11,1011:12,1012:2,1003:19" }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:10,1011:7" }, { "id": 28, "commission": 0.53, "condition": "1014:7,1007:12,1011:17,1003:17" }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:8" }, { "id": 30, "commission": 0.14, "condition": "1011:7,1014:9,1006:14,1004:3" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:9,1006:11" }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:2,1012:12,1008:20" }, { "id": 33, "commission": 0.2, "condition": "1012:6,1013:11,1002:13,1009:16" }, { "id": 34, "commission": 0.02, "condition": "1009:9,1010:12,1011:14,1012:2" }, { "id": 35, "commission": 0.13, "condition": "1001:18,1004:19,1013:6,1003:10" }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:7,1007:17" }, { "id": 37, "commission": 0.44, "condition": "1012:4,1010:20,1002:4,1011:11" }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18" }, { "id": 39, "commission": 0.36, "condition": "1007:8,1012:13,1004:16,1002:16" }, { "id": 40, "commission": 0.28, "condition": "1004:10,1005:10,1008:18,1011:16" }, { "id": 41, "commission": 0.18, "condition": "1010:8,1009:8,1008:7,1011:6" }, { "id": 42, "commission": 0.43, "condition": "1009:1,1005:8,1007:2,1002:13" }, { "id": 43, "commission": 0.14, "condition": "1006:1,1004:4,1014:11,1008:5" }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:18,1002:4,1007:9" }, { "id": 45, "commission": 0.11, "condition": "1012:15,1010:3,1007:3,1011:3" }, { "id": 46, "commission": 0.39, "condition": "1003:12,1007:3,1010:16,1002:14" }, { "id": 47, "commission": 0.49, "condition": "1010:14,1015:20,1003:15,1014:6" }, { "id": 48, "commission": 0.06, "condition": "1013:17,1007:14,1008:17,1001:10" }, { "id": 49, "commission": 0.48, "condition": "1002:6,1004:11,1009:12,1006:20" }, { "id": 50, "commission": 0.05, "condition": "1006:17,1012:9,1008:2,1015:11" }, { "id": 51, "commission": 0.04, "condition": "1011:8,1004:19,1002:5,1003:11" }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:10,1001:15,1004:6" }, { "id": 53, "commission": 0.08, "condition": "1014:14,1012:12,1010:1,1015:18" }, { "id": 54, "commission": 0.45, "condition": "1005:2,1002:13,1009:6,1015:17" }, { "id": 55, "commission": 0.7, "condition": "1001:3,1014:9,1005:7,1010:15" }, { "id": 56, "commission": 0.05, "condition": "1006:17,1005:19,1009:17,1003:18" }, { "id": 57, "commission": 0.67, "condition": "1007:1,1008:17,1002:16,1009:15" }, { "id": 58, "commission": 0.32, "condition": "1006:10,1008:5,1005:4,1007:9" }, { "id": 59, "commission": 0.79, "condition": "1012:5,1009:1,1013:6,1008:5" }, { "id": 60, "commission": 0.69, "condition": "1015:6,1012:7,1010:1,1001:3" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:5,1011:15,1002:7" }, { "id": 62, "commission": 0.44, "condition": "1015:1,1007:15,1011:8,1006:6" }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:7" }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:9,1004:5" }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:10,1014:20,1005:15" }, { "id": 66, "commission": 0.73, "condition": "1004:15,1008:5,1002:14,1012:14" }, { "id": 67, "commission": 0.13, "condition": "1001:16,1012:20,1011:20,1003:1" }, { "id": 68, "commission": 0.69, "condition": "1013:4,1008:3,1006:6,1007:17" }, { "id": 69, "commission": 0.37, "condition": "1015:3,1004:9,1013:7,1009:1" }, { "id": 70, "commission": 0.71, "condition": "1010:3,1004:1,1011:7,1012:11" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:6,1003:8,1015:13" }, { "id": 72, "commission": 0.31, "condition": "1005:2,1002:18,1012:19,1010:14" }, { "id": 73, "commission": 0.39, "condition": "1012:4,1006:2,1003:7,1004:2" }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:3,1001:20" }, { "id": 75, "commission": 0.18, "condition": "1006:1,1014:3,1008:12,1002:5" }, { "id": 76, "commission": 0.51, "condition": "1007:1,1012:2,1004:11,1014:2" }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:6,1012:4,1007:7" }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:12" }, { "id": 79, "commission": 0.65, "condition": "1006:6,1004:8,1007:12,1011:7" }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:4" }, { "id": 81, "commission": 0.14, "condition": "1012:10,1015:8,1002:4,1003:8" }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14" }, { "id": 83, "commission": 0.53, "condition": "1010:9,1003:8,1007:12,1015:20" }, { "id": 84, "commission": 0.62, "condition": "1005:9,1014:6,1002:18,1007:8" }, { "id": 85, "commission": 0.37, "condition": "1011:10,1001:7,1012:12,1004:12" }, { "id": 86, "commission": 0.59, "condition": "1009:5,1011:20,1006:4,1015:11" }, { "id": 87, "commission": 0.11, "condition": "1006:6,1005:9,1013:10,1014:9" }, { "id": 88, "commission": 0.08, "condition": "1008:7,1011:4,1015:12,1014:11" }, { "id": 89, "commission": 0.02, "condition": "1002:17,1003:2,1005:11,1010:14" }, { "id": 90, "commission": 0.32, "condition": "1002:19,1013:8,1007:5,1001:13" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:10,1014:10,1007:16" }, { "id": 92, "commission": 0.13, "condition": "1004:8,1011:13,1008:15,1007:9" }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:9,1006:8,1008:11" }, { "id": 94, "commission": 0.22, "condition": "1002:6,1001:17,1013:16,1005:11" }, { "id": 95, "commission": 0.15, "condition": "1005:6,1001:14,1015:4,1008:16" }, { "id": 96, "commission": 0.06, "condition": "1003:4,1001:8,1007:8,1005:18" }, { "id": 97, "commission": 0.74, "condition": "1013:12,1009:13,1006:2,1011:2" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1002:0", "gain": null }, { "id": 2, "reward": "1002:1500", "cost": "1002:10000", "gain": 0.1 }, { "id": 3, "reward": "1002:2000", "cost": "1002:30000", "gain": 0.25 }, { "id": 4, "reward": "1002:2500", "cost": "1002:50000", "gain": 0.4 }, { "id": 5, "reward": "1002:3000", "cost": "1002:100000", "gain": 0.55 }], "feed": [{ "id": 1001, "name": "\u997C\u5E72", "icon": "pet_feed/1001_feed.png", "vitality": 1, "cost": "1002:3", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1002, "name": "\u575A\u679C", "icon": "pet_feed/1002_feed.png", "vitality": 2, "cost": "1002:5", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1003, "name": "\u706B\u817F", "icon": "pet_feed/1003_feed.png", "vitality": 5, "cost": "1002:10", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1004, "name": "\u725B\u8089", "icon": "pet_feed/1004_feed.png", "vitality": 50, "cost": "1002:80", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1005, "name": "\u732A\u8089", "icon": "pet_feed/1005_feed.png", "vitality": 20, "cost": "1002:35", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1006, "name": "\u9E21\u8089", "icon": "pet_feed/1006_feed.png", "vitality": 10, "cost": "1002:18", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }], "currency": [{ "id": 1001, "name": "\u94BB\u77F3", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "\u91D1\u5E01", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_times", "value": 30 }, { "id": "all_speed_up_time", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:40000,1002:50000,1002:20000,1002:20000,1002:20000,1002:20000,1002:20000" }] };

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
    taskAddTimes(id) {
      let task = this.getTask(id);
      if (!task) {
        return;
      }
      task.times++;
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
      this.uid = 0;
      this.avatar = "";
      this.diamond = 999;
      this.gold = 999;
      this.advertiseTimes = 0;
      this.signInDays = 0;
      this.signInId = 0;
      this.speedUpTimes = 0;
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
        case ApiHttp.taskReward:
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
        text: `errorCode ${errorCode} ${JSON.stringify(data)}`,
        call: () => {
        }
      });
    }
    login(d) {
      var _a, _b, _c;
      PlantService_default.init(d.seeds);
      WarehouseService_default.init(d.warehouse);
      UserInfo_default.uid = d.userInfo.uid;
      UserInfo_default.diamond = d.userInfo.diamond;
      UserInfo_default.gold = d.userInfo.gold;
      UserInfo_default.nickname = d.userInfo.nickname;
      UserInfo_default.avatar = "";
      UserInfo_default.orderLevel = d.orderId || 0;
      UserInfo_default.warePetId = (_a = d.wearPet) == null ? void 0 : _a.id;
      UserInfo_default.petVitality = ((_b = d.wearPet) == null ? void 0 : _b.vitality) || 0;
      UserInfo_default.digestCountDown = ((_c = d.wearPet) == null ? void 0 : _c.digestCountDown) || 0;
      UserInfo_default.advertiseTimes = d.advertiseTimes || 0;
      UserInfo_default.signInDays = d.signInDays || 0;
      UserInfo_default.signInId = d.signInId;
      UserInfo_default.speedUpTimes = d.speedUpTimes;
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
      UserInfo_default.uid = null;
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
              this.completeHandler(JSON.parse(xmlhttp.responseText));
              break;
          }
        }
      };
      this.xhr = xmlhttp;
    }
    send(data) {
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
          TaskService_default.taskAddTimes(1001);
          TaskService_default.taskAddTimes(1012);
        }
      }
      this.xhr.send(sendData.join("&"));
      return new Promise((resolve) => {
        this.backResolveEvent = resolve;
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
    onOpened(d) {
      this.data = d;
    }
    onClick(e) {
      switch (e.target.name) {
        case "closeAddLandLayer":
          core_default.view.close(Res_default.views.AddLandView);
          break;
        case "cost_gold":
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
      Laya.loader.clearTextureRes("res/img_inviteBg1.png");
    }
  };

  // src/view/FriendsView.ts
  var FriendsView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.viewState = 1;
    }
    onOpened() {
      this.addBox.visible = false;
      this.addBox.active = false;
      this.itemList.array = new Array(20);
      this.itemList.renderHandler = new Laya.Handler(this, this.itemRender);
      this.itemList.vScrollBarSkin = null;
    }
    itemRender(cell, i) {
      let newBox = cell.getChildByName("new_box"), heartBox = cell.getChildByName("heart_box"), goPlayBtn = cell.getChildByName("go_play_btn"), applyBtn = cell.getChildByName("apply_btn"), delBtn = cell.getChildByName("del_btn");
      heartBox.visible = false;
      newBox.visible = false;
      newBox.active = false;
      goPlayBtn.visible = false;
      applyBtn.visible = false;
      delBtn.visible = false;
      switch (this.viewState) {
        case 1:
          goPlayBtn.visible = true;
          heartBox.visible = true;
          break;
        case 2:
          applyBtn.visible = true;
          break;
        case 3:
          heartBox.visible = true;
          delBtn.visible = true;
          break;
      }
    }
    onClick(e) {
      console.log(e.target.name);
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.FriendsView);
          break;
        case "add_friend":
          if (this.viewState == 2)
            break;
          this.viewState = 2;
          this.addBox.visible = true;
          this.addBox.active = true;
          this.itemList.height = 590;
          this.itemList.refresh();
          break;
        case "del_friend":
          if (this.viewState == 3)
            break;
          this.addBox.visible = false;
          this.addBox.active = false;
          this.viewState = 3;
          this.itemList.height = 914;
          this.itemList.refresh();
          break;
        case "desc_btn":
          core_default.view.open(Res_default.views.FriendsDescView);
          break;
        case "reward_btn":
          core_default.view.open(Res_default.views.FriendsRewardView);
          break;
        default:
          break;
      }
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
      this.loadBarOldWidth = 0;
    }
    onOpened(d) {
      var _a;
      this.data = d;
      if ((_a = LocalStorageService_default.getJSON()) == null ? void 0 : _a.isLogin) {
        this.login();
        this.loginBox.visible = false;
        this.loadBox.visible = true;
        this.userInput.visible = false;
      } else {
        this.loginBox.visible = true;
        this.loadBox.visible = false;
        this.userInput.visible = true;
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
          this.login();
          break;
      }
    }
    login() {
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
            this.userInput.visible = true;
          }
        });
      } else {
        HttpControl.inst.send({
          api: ApiHttp.login,
          data: {
            account: this.userInput.text
          },
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
            this.userInput.visible = true;
          }
        });
      }
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
    updateData() {
      this.landList = LandService_default.list;
      this.data = this.landList.get(this.fieldId);
      this.renderData();
    }
    renderData() {
      if (this.data) {
        this.showIcon(true);
        this.fieldNode.skin = this.fieldEmptyRes;
        this.showIcon(Boolean(this.data.productId));
        this.lvNode.visible = true;
        this.updateLevel();
        if (this.data.productId) {
          this.plantIconAni(true);
        }
        if (this.data.productId && this.data.matureTimeLeft) {
          this.timeBox.visible = true;
          this.timeBox.active = true;
          this.icon.skin = TableAnalyze_default.table("plant").get(this.data.productId).growingIcon;
          this.showShadowIcon(true);
          this.updateCountDown();
          this.topStateIcon.visible = true;
          this.topStateIconAni(true);
          this.setStateIconSkin(1);
        } else {
          if (this.data.productId) {
            this.topStateIcon.visible = true;
            this.showShadowIcon(true);
            this.topStateIconAni(true);
            this.updateCountDown();
          }
        }
      } else {
        this.icon.skin = this.unlockIcon;
        this.showIcon(false);
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
      if (!this.topStateIconTween) {
        this.topStateIconTween = Laya.TimeLine.to(this.topStateIcon, { y: this.topStateIcon.y - 50 }, 800, null).to(this.topStateIcon, { y: this.topStateIcon.y }, 800);
      }
      this.topStateIcon.visible = play;
      if (play) {
        this.topStateIconTween.play(null, true);
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
      }
      if (play) {
        Laya.timer.once(Math.random() * 1e3, this, () => {
          this.plantIconTween.play(null, true);
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
        if (this.data) {
          if (this.buildIng) {
            if (TableAnalyze_default.table("landLevel").get(this.data.level + 1)) {
              core_default.view.open(Res_default.views.FieldLevelUpView, {
                parm: {
                  obj: this.data,
                  call: () => {
                    this.data.level++;
                    this.updateLevel();
                  }
                }
              });
            } else {
              console.log("\u6EE1\u7EA7");
              this.topStateIconAni(false);
              core_default.view.open(Res_default.views.HintView, {
                parm: { text: `\u5DF2\u6EE1\u7EA7` }
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
              let plantAmount = 0;
              yield HttpControl.inst.send({
                api: ApiHttp.landGather,
                data: {
                  landId: this.data.id,
                  type: ConfigGame_default.ApiTypeDefault
                },
                call: (d) => {
                  plantAmount = d.amount;
                  WarehouseService_default.add(this.data.productId, d.amount);
                }
              });
              let plantObj = TableAnalyze_default.table("plant").get(this.data.productId), rewardList = [
                {
                  obj: plantObj,
                  count: plantAmount,
                  posType: 3
                }
              ];
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
      this.getRewardPrefab = null;
      this.floatRewardIcon = null;
      this.testBtn = null;
      this.petBox = null;
      this.landList = [];
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
          core_default.view.open(Res_default.views.FriendsView);
          break;
        case "land":
          break;
        case "landLevelUp":
          this.switchLandLevelUp(true);
          break;
        case "close_up":
          this.switchLandLevelUp(false);
          break;
      }
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

  // src/view/SettingView.ts
  var SettingView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.musicNode = null;
      this.soundNode = null;
    }
    onOpened() {
      this.musicChange();
      this.soundChange();
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
              core_default.view.loginOut();
              HttpDataControl_default.loginOut();
              core_default.view.open(Res_default.views.LoginView, {
                parm: {
                  call: () => {
                    core_default.eventGlobal.event(EventMaps.login_game);
                  }
                }
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
      let list = TaskService_default.list;
      list.sort((a, b) => {
        let tA = TaskService_default.getTask(a.id), tB = TaskService_default.getTask(b.id);
        return a.id + ((tA == null ? void 0 : tA.receive) ? 1e3 : 1) + ((tA == null ? void 0 : tA.times) >= a.times ? 100 : 1e3) - (b.id + ((tB == null ? void 0 : tB.receive) ? 1e3 : 1) + ((tB == null ? void 0 : tB.times) >= b.times ? 100 : 1e3));
      });
      this.taskList.array = list;
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
            this.jump(btnObj.id);
          }
          break;
      }
    }
    jump(id) {
      switch (id) {
        case 1001:
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvcmUvQXVkaW9Db250cm9sLnRzIiwgIi4uLy4uL3NyYy9jb3JlL2luZGV4LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi50cyIsICIuLi8uLi9zcmMvY29tbW9uL0NvbmZpZ0dhbWUudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9UYWJsZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL1Rvb2xzLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVGFibGVBbmFseXplLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1BldFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvVXNlckluZm8udHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9OZXRNYXBzLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vSHR0cERhdGFDb250cm9sLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vSHR0cENvbnRyb2wudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQWRkTGFuZFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRmllbGRMZXZlbFVwVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9GcmllbmRzRGVzY1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvSGludFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTG9naW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L01haWxWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50LnRzIiwgIi4uLy4uL3NyYy92aWV3L01haW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L09yZGVyVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TZXR0aW5nVmlldy50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvRmVlZFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2hvcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2lnbkluVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TcGVlZFVwVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9UYXNrVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9XYXJlaG91c2VWaWV3LnRzIiwgIi4uLy4uL3NyYy9HYW1lQ29uZmlnLnRzIiwgIi4uLy4uL3NyYy9NYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHU1NDBEXHU3OUYwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBFdmVudE1hcHMge1xyXG4gICAgLyoqIGxvYWQgXHU3NTRDXHU5NzYyXHU4RkRCXHU4ODRDXHU2NkY0XHU2NUIwICovXHJcbiAgICBsb2FkX3Byb2dyZXNzID0gXCJsb2FkX3Byb2dyZXNzXCIsXHJcblxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMCAqL1xyXG4gICAgdXBkYXRlX2ZpZWxkID0gXCJ1cGRhdGVfZmllbGRcIixcclxuXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU0RTNCXHU5ODc1XHU4QkEyXHU1MzU1XHU2NTcwXHU2MzZFICovXHJcbiAgICB1cGRhdGVfT3JkZXIgPSBcInVwZGF0ZV9PcmRlclwiLFxyXG5cclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTUyQTBcdTkwMUYgKi9cclxuICAgIGxhbmRfc3BlZWRfdXAgPSBcImxhbmRfc3BlZWRfdXBcIixcclxuXHJcbiAgICAvKiogXHU4RkRCXHU1MTY1XHU2RTM4XHU2MjBGICovXHJcbiAgICBsb2dpbl9nYW1lID0gXCJsb2dpbl9nYW1lXCIsXHJcbiAgICAvKiogXHU5MDAwXHU1MUZBXHU2RTM4XHU2MjBGICovXHJcbiAgICBsb2dpbl9vdXQgPSBcImxvZ2luX291dFwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHU1MkE4XHU3NTNCXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgIHtcclxuICAgICAgICAvL1x1OTcwMFx1ODk4MVx1OThERVx1OTFEMVx1NUUwMVx1NzY4NFx1NTNDMlx1ODAwM1x1ODI4Mlx1NzBCOVxyXG4gICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgLy9cdTg5ODFcdTk4REVcdTc2ODRcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1RTI2aWNvblx1NzY4NFx1NjU3MFx1NjM2RVxyXG4gICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksXHJcbiAgICAgICAgICAgICAgICAvL1x1NjU3MFx1OTFDRlxyXG4gICAgICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgLy9cdTg5ODFcdTk4REVcdTUzQkJcdTc2ODRcdTRGNERcdTdGNkUgMSBcdTkxRDFcdTVFMDEgMiBcdTk0QkJcdTc3RjNcclxuICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfVxyXG4gICAgICovXHJcbiAgICBwbGF5X2dldF9yZXdhcmQgPSBcInBsYXlfZ2V0X3Jld2FyZFwiLFxyXG59XHJcbiIsICIvL1x1NEVFM1x1NzgwMVx1NzUxRlx1NjIxMFx1RkYwQ1x1NEUwRFx1ODk4MVx1NjI0Qlx1NTJBOFx1NEZFRVx1NjUzOVxuXG4vKipcbiAqIFx1NzU0Q1x1OTc2Mlx1NTIxN1x1ODg2OFxuICovXG4gZXhwb3J0IGVudW0gdmlld3MgXG4gICAge1xuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lICovXG4gICAgICAgIEFkZExhbmRWaWV3ID0gXCJzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBGaWVsZExldmVsVXBWaWV3ID0gXCJzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GcmllbmRzRGVzY1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc0Rlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZyaWVuZHNSZXdhcmRWaWV3LnNjZW5lICovXG4gICAgICAgIEZyaWVuZHNSZXdhcmRWaWV3ID0gXCJzY2VuZXMvdmlld3MvRnJpZW5kc1Jld2FyZFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRnJpZW5kc1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc1ZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9IaW50Vmlldy5zY2VuZSAqL1xuICAgICAgICBIaW50VmlldyA9IFwic2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZSAqL1xuICAgICAgICBMb2dpblZpZXcgPSBcInNjZW5lcy92aWV3cy9Mb2dpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpbFZpZXcgPSBcInNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZSAqL1xuICAgICAgICBNYWluVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZSAqL1xuICAgICAgICBPcmRlclZpZXcgPSBcInNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2V0dGluZ1ZpZXcgPSBcInNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZSAqL1xuICAgICAgICBTaG9wVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2lnbkluVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU3BlZWRVcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgU3BlZWRVcFZpZXcgPSBcInNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZSAqL1xuICAgICAgICBUYXNrVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1dhcmVob3VzZVZpZXcuc2NlbmUgKi9cbiAgICAgICAgV2FyZWhvdXNlVmlldyA9IFwic2NlbmVzL3ZpZXdzL1dhcmVob3VzZVZpZXcuc2NlbmVcIiwgXG4gICAgfVxuXG4gZXhwb3J0IGVudW0gYXVkaW9zIFxuICAgIHtcbiAgICAgICAgLyoqIGF1ZGlvL2J1dHRvbl9jbGljay5tcDMgKi9cbiAgICAgICAgYnV0dG9uX2NsaWNrID0gXCJyZXMvYXVkaW8vYnV0dG9uX2NsaWNrLm1wM1wiLCBcbiAgICB9XG5cbi8qKlxuICogXHU3NTRDXHU5NzYyXHU1MjE3XHU4ODY4XG4gKi9cbiBleHBvcnQgY29uc3Qgc2NlbmVzID0gW1xuICAgICAgICAgXCJzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NwZWVkVXBWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TaWduSW5WaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9Mb2dpblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GcmllbmRzVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRnJpZW5kc1Jld2FyZFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNEZXNjVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9HZXRSZXdhcmQucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvRmxvYXRSZXdhcmRJY29uLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0ZpZWxkUHJlZmFiLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvY29tcG9uZW50cy9CdXR0b24ucHJlZmFiXCIsXG4gICAgICAgICAgICBcInJlcy9sb2FkaW5nQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfd29vZHRpdGxlLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlSG91c2VCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZWJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3NoZWxmLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfbGFuZEJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob3VzZXRvcC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19mYXJtbGFuZExvZ28ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvdnMudnNcIixcbiAgICAgICAgICAgIFwicmVzL3NoYWRlci9wcy5mc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vYnV0dG9uX2NsaWNrLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BsYW50X2ljb24uYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BldF9mZWVkLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLmF0bGFzXCJdO1xuICAgIFxuXG4vKipcbiAqIFx1NjI0MFx1NjcwOVx1OEQ0NFx1NkU5MFxuICovXG5jb25zdCBSZXMgPSB7XG4gICAgdmlld3M6IHZpZXdzLFxuICAgIHNjZW5lczogc2NlbmVzLFxuICAgIGF1ZGlvczogYXVkaW9zLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzO1xuIiwgIi8qKlxyXG4gKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjZcclxuICovXHJcbmNvbnN0IEV2ZW50R2xvYmFsID0gbmV3IExheWEuRXZlbnREaXNwYXRjaGVyKCk7XHJcblxyXG4vKipcclxuICogXHU1MEE4XHU1QjU4XHU3Njg0XHU5NzAwXHU4OTgxXHU3RUQxXHU1QjlBXHU4QkEyXHU5NjA1XHU0RThCXHU0RUY2XHU3Njg0XHU3QzdCXHU3Njg0XHU1MzlGXHU1NzhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRXZlbnRDbGFzczogTWFwPGFueSwgeyBrZXk6IHN0cmluZzsgZm46IEZ1bmN0aW9uIH1bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50T24obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcclxuICAgICAgICBpZiAoIUV2ZW50Q2xhc3MuZ2V0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgRXZlbnRDbGFzcy5zZXQodGFyZ2V0LCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEV2ZW50Q2xhc3MuZ2V0KHRhcmdldCkucHVzaCh7IGtleTogbmFtZSwgZm46IGRlc2NyaXB0b3IudmFsdWUgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogXHU1MEE4XHU1QjU4XHU3Njg0XHU5NzAwXHU4OTgxXHU3RUQxXHU1QjlBXHU1QzVFXHU2MDI3XHU2N0U1XHU2MjdFXHU3RUQxXHU1QjlBXHU1NDBEXHU3OUYwXHU3Njg0XHU3QzdCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQmluZE5hbWVDbGFzczogTWFwPGFueSwgc3RyaW5nW10+ID0gbmV3IE1hcCgpO1xyXG5leHBvcnQgZnVuY3Rpb24gRmluZEJ5TmFtZSh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xyXG4gICAgLy8gICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcblxyXG4gICAgaWYgKCFCaW5kTmFtZUNsYXNzLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgQmluZE5hbWVDbGFzcy5zZXQodGFyZ2V0LCBbXSk7XHJcbiAgICB9XHJcbiAgICBCaW5kTmFtZUNsYXNzLmdldCh0YXJnZXQpLnB1c2gocHJvcGVydHlLZXkpO1xyXG4gICAgLy8gfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRHbG9iYWw7XHJcbiIsICJjb25zdCBjYWxsZXJzOiBNYXA8YW55LCBGdW5jdGlvbltdPiA9IG5ldyBNYXAoKTtcclxuXHJcbmNsYXNzIE9ic2VydmFibGVDb250cm9sPGNhbGwgZXh0ZW5kcyBMYXlhLlNjcmlwdD4ge1xyXG4gICAgcHJpdmF0ZSBrZXlFdmVudHM6IE1hcDxhbnksIE1hcDxzdHJpbmcsIEZ1bmN0aW9uW10+PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzZEMVx1NTQyQ1x1NUM1RVx1NjAyN1x1NTAzQ1x1NTNEOFx1NTMxNlxyXG4gICAgICogIFtcdTU3MjhcdTc1NENcdTk3NjJkZXN0cm95XHU3Njg0XHU2NUY2XHU1MDE5XHU0RjFBXHU4MUVBXHU1REYxXHU2Q0U4XHU5NTAwXHU3NkQxXHU1NDJDXVxyXG4gICAgICogQHBhcmFtIE9iaiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTc2ODRcdTVCRjlcdThDNjFcclxuICAgICAqL1xyXG4gICAgd2F0Y2g8VCBleHRlbmRzIHt9PihPYmo6IFQsIGNhbGxlcjogY2FsbCkge1xyXG4gICAgICAgIGlmICghY2FsbGVycy5oYXMoY2FsbGVyKSkge1xyXG4gICAgICAgICAgICBjYWxsZXJzLnNldChjYWxsZXIsIFtdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBrZXlFdmVudCA9IHRoaXMua2V5RXZlbnRzO1xyXG4gICAgICAgIGlmICgha2V5RXZlbnQuaGFzKE9iaikpIHtcclxuICAgICAgICAgICAga2V5RXZlbnQuc2V0KE9iaiwgbmV3IE1hcCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlx1NzY4NFx1NUM1RVx1NjAyN1x1NEU4Qlx1NEVGNlxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkgXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QzVFXHU2MDI3XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGwgXHU1NkRFXHU4QzAzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qga2V5QmluZCA9IDxLZXkgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEtleSAmIHN0cmluZywgY2FsbDogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IF9vYmogPSBrZXlFdmVudC5nZXQoT2JqKTtcclxuICAgICAgICAgICAgaWYgKCFfb2JqLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBfb2JqLnNldChrZXksIFtdKTtcclxuICAgICAgICAgICAgICAgIGlmIChPYmpbXCIjXCIgKyBrZXldID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9ialtcIiNcIiArIGtleV0gPSBPYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbXCIjXCIgKyBrZXldID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9vYmouZ2V0KGtleSkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tcIiNcIiArIGtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2FsbC5iaW5kKGNhbGwpO1xyXG4gICAgICAgICAgICBfb2JqLmdldChrZXkpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcikucHVzaChjYWxsKTtcclxuICAgICAgICAgICAgY2FsbChPYmpba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5MDFBXHU4RkM3XHU0RjIwXHU1MTY1XHU3Njg0Y2FsbGVyXHU1MjIwXHU5NjY0XHU1RjUzXHU1MjREXHU3RUQxXHU1QjlBXHU3Njg0XHU2MjQwXHU2NzA5XHU3Njg0XHU0RThCXHU0RUY2IFx1NjIxNlx1NjMwN1x1NUI5QVx1ODlFM1x1NTFCM1x1NkEyMVx1NEUyQVx1NUJGOVx1OEM2MVx1OERERlx1NUY1M1x1NTI0RGNhbGxlclx1N0VEMVx1NUI5QVx1NzY4NFx1NzZEMVx1NTQyQ1xyXG4gICAgICogQHBhcmFtIGNhbGxlciBcdTc2RDFcdTU0MkNcdTY1RjZcdTdFRDFcdTVCOUFcdTc2ODRcdTU3M0FcdTY2NkZcdTVCRjlcdThDNjFcclxuICAgICAqIEBwYXJhbSBvYmogXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUJ5Q2FsbGVyKGNhbGxlcjogY2FsbCwgb2JqOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgY2FsbGVycy5nZXQoY2FsbGVyKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZ2V0KG9iaikuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhPZiA9IGV2LmluZGV4T2YoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGsuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZiA+IC0xKSBldi5zcGxpY2UoaW5kZXhPZiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU3RUQxXHU1QjlBXHU1M0VGXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgT2JzZXJ2YWJsZUNvbnRyb2woKTtcclxuIiwgImltcG9ydCBFdmVudEdsb2JhbCwgeyBCaW5kTmFtZUNsYXNzLCBFdmVudENsYXNzIH0gZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JpcHQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vRXZlbnRPblx1ODhDNVx1OTk3MFx1NTY2OFx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QVxyXG4gICAgICAgIGxldCBiaW5kRXZlbnQgPSBFdmVudENsYXNzLmdldCh0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgYmluZEV2ZW50Py5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIEV2ZW50R2xvYmFsLm9uKGQua2V5LCB0aGlzLCBkLmZuKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZEF3YWtlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkF3YWtlKCkge1xyXG4gICAgICAgIC8vXHU3RUQ5XHU4OEM1XHU5OTcwXHU1NjY4XHU4QkIwXHU1RjU1XHU3Njg0XHU1QzVFXHU2MDI3XHVGRjBDXHU2N0U1XHU2MjdFXHU4MjgyXHU3MEI5XHJcbiAgICAgICAgQmluZE5hbWVDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpPy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXNbZV0gPSB0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub25IZEF3YWtlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTc1NENcdTk3NjJcdTRGMjBcdTUxNjVcdTUzQzJcdTY1NzBcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICogQHBhcmFtIGVcclxuICAgICAqL1xyXG4gICAgb25PcGVuZWQoZSkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NkZDMFx1NkQzQlx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkI2NFx1NjVGNlx1NjI0MFx1NjcwOVx1ODI4Mlx1NzBCOVx1NTQ4Q1x1N0VDNFx1NEVGNlx1NTc0N1x1NURGMlx1NTIxQlx1NUVGQVx1NUI4Q1x1NkJENVx1RkYwQ1x1NkIyMVx1NjVCOVx1NkNENVx1NTNFQVx1NjI2N1x1ODg0Q1x1NEUwMFx1NkIyMVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRBd2FrZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRFbmFibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMub25IZEVuYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU1NDJGXHU3NTI4XHU1NDBFXHU2MjY3XHU4ODRDXHVGRjBDXHU2QkQ0XHU1OTgyXHU4MjgyXHU3MEI5XHU4OEFCXHU2REZCXHU1MkEwXHU1MjMwXHU4MjFFXHU1M0YwXHU1NDBFXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZEVuYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRTdGFydFxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9uSGRTdGFydCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdCMkNcdTRFMDBcdTZCMjFcdTYyNjdcdTg4NEN1cGRhdGVcdTRFNEJcdTUyNERcdTYyNjdcdTg4NENcdUZGMENcdTUzRUFcdTRGMUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkU3RhcnQoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkVXBkYXRlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkJDRlx1NUUyN1x1NjZGNFx1NjVCMFx1NjVGNlx1NjI2N1x1ODg0Q1x1RkYwQ1x1NUMzRFx1OTFDRlx1NEUwRFx1ODk4MVx1NTcyOFx1OEZEOVx1OTFDQ1x1NTE5OVx1NTkyN1x1NUZBQVx1NzNBRlx1OTAzQlx1OEY5MVx1NjIxNlx1ODAwNVx1NEY3Rlx1NzUyOGdldENvbXBvbmVudFx1NjVCOVx1NkNENVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRVcGRhdGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRGlzYWJsZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMub25IZERpc2FibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1Nzk4MVx1NzUyOFx1NjVGNlx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1NEVDRVx1ODI4Mlx1NzBCOVx1NEVDRVx1ODIxRVx1NTNGMFx1NzlGQlx1OTY2NFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGREaXNhYmxlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERlc3Ryb3lcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vZmZBbGxDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkhkRGVzdHJveSgpO1xyXG4gICAgICAgIExheWEudGltZXIub25jZSgxLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU2RTA1XHU5NjY0XHU4RERGXHU1RjUzXHU1MjREXHU3QzdCXHU3RUQxXHU1QjlBXHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU4OUMyXHU1QkRGXHU2NUI5XHU2Q0Q1XHJcbiAgICAgICAgICAgIE9ic2VydmFibGVQcm9wZXJ0eS5yZW1vdmVCeUNhbGxlcih0aGlzKTtcclxuICAgICAgICAgICAgLy9cdTk1MDBcdTZCQzFcdTY1RjZcdTZFMDVcdTk2NjRcdTYyNDBcdTY3MDlcdTc2ODRcdTVDNUVcdTYwMjdcdTVGMTVcdTc1MjhcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXlzW3hdXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI0Qlx1NTJBOFx1OEMwM1x1NzUyOFx1ODI4Mlx1NzBCOVx1OTUwMFx1NkJDMVx1NjVGNlx1NjI2N1x1ODg0Q1xyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGREZXN0cm95KCkge31cclxuXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqIFx1NzU0Q1x1OTc2Mlx1NjI1M1x1NUYwMFx1NEVFNVx1NTQwRVx1NUUyNlx1NTE2NVx1NzY4NFx1NTNDMlx1NjU3MFxyXG4gICAgLy8gICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAvLyAgKi9cclxuICAgIC8vIG9uT3BlbmVkKGQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygxMTEpO1xyXG4gICAgLy8gfVxyXG59XHJcbiIsICJpbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5cclxuLy9jbGFzcyBWaWV3U2hvd0FuaSBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdTaG93QW5pIGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YmcsIHRpcHM6XCJcdTgwQ0NcdTY2NkZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgYmc6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvbnRlbnQsIHRpcHM6XCJcdTUxODVcdTVCQjlcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgY29udGVudDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFuaVR5cGUsdGlwczpcIlx1NTJBOFx1NzUzQlx1N0M3Qlx1NTc4QlwiLHR5cGU6RWRpdE9wdGlvbixvcHRpb246XCJib3R0b21Ub1Nob3csc2NhbGVTaG93XCJ9Ki9cclxuICAgIC8vIFx1OEZENFx1NTZERVx1NUI1N1x1N0IyNlx1NEUzMlxyXG4gICAgYW5pVHlwZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgdHdlZW5MaXN0OiBMYXlhLlR3ZWVuW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb09wZW4oKSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiAgXHU1MTczXHU5NUVEXHU2MjEwXHU1MjlGXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvQ2xvc2UoKSB7fVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuXHJcbiAgICAgICAgdGhpcy5iZy5hbHBoYSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnLFxyXG4gICAgICAgICAgICAgICAgeyBhbHBoYTogMC43NSB9LFxyXG4gICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYW5pVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic2NhbGVTaG93XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4uZnJvbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLCB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsIHNjYWxlWDogMCwgc2NhbGVZOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmJvdHRvbSA9IC10aGlzLmNvbnRlbnQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmNpcmNPdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVZpZXcoKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMub3duZXIgYXMgTGF5YS5WaWV3O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYW5pVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNjYWxlU2hvd1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogTGF5YS5zdGFnZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWDogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWTogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5IYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBib3R0b206IC10aGlzLmNvbnRlbnQuaGVpZ2h0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTVCOUVcdTRGOEJcdTUyMTdcdTg4NjhcclxuICovXHJcbmNvbnN0IGluc3RhbmNlTGlzdDogTWFwPG51bWJlciwgeyBuZXcgKCk6IHZvaWQgfT4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcclxuICogXHU1QjlFXHU0RjhCXHU3Njg0aWRcclxuICovXHJcbmxldCBpbnN0YW5jZUlkOiBudW1iZXIgPSAxMDA7XHJcblxyXG4vKipcclxuICogXHU1MzU1XHU0RjhCXHU4OEM1XHU5OTcwXHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSW5zdGFuY2UodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWluc3RhbmNlTGlzdC5oYXModGFyZ2V0W1wiI2luc3RhbmNlSWRcIl0pKSB7XHJcbiAgICAgICAgaW5zdGFuY2VJZCsrO1xyXG4gICAgICAgIHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdID0gaW5zdGFuY2VJZDtcclxuICAgICAgICBpbnN0YW5jZUxpc3Quc2V0KGluc3RhbmNlSWQsIG5ldyB0YXJnZXQoKSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXRba2V5XSA9IGluc3RhbmNlTGlzdC5nZXQoaW5zdGFuY2VJZCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgRmxvYXRWaWV3U2hvd0FuaSBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBIaW50Vmlld0RhdGEgfSBmcm9tIFwic3JjL3ZpZXcvSGludFZpZXdcIjtcclxuaW1wb3J0IFJlcywgeyB2aWV3cyB9IGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NjI1M1x1NUYwMFx1NzU0Q1x1OTc2Mlx1OTcwMFx1ODk4MVx1NUUyNlx1NTE2NVx1NzY4NFx1NTNDMlx1NjU3MFxyXG4gKi9cclxuaW50ZXJmYWNlIFZpZXdPcGVuUGFybSB7XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2MiAqL1xyXG4gICAgc2hvd0xvYWQ/OiBib29sZWFuO1xyXG4gICAgLyoqIFx1NjYzRVx1NzkzQWxvYWRcdTc1NENcdTk3NjJcdTVFRjZcdThGREZcdTY1RjZcdTk1RjQgKi9cclxuICAgIHNob3dMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU5NjkwXHU4NUNGbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCBcdTlFRDhcdThCQTQwICovXHJcbiAgICBoaWRlTG9hZERlbGF5PzogbnVtYmVyO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1NTE3M1x1OTVFRFx1NTE3Nlx1NEVENlx1NTczQVx1NjY2Rlx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQXRydWVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDlcdUZGMENcdTMwMTBcdTZDRThcdTYxMEZcdTMwMTFcdTg4QUJcdTUxNzNcdTk1RURcdTc2ODRcdTU3M0FcdTY2NkZcdUZGMENcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdThCQkVcdTdGNkVhdXRvRGVzdHJveUF0UmVtb3ZlZD10cnVlXHVGRjBDXHU1MjE5XHU4RDQ0XHU2RTkwXHU1M0VGXHU4MEZEXHU0RTBEXHU4MEZEXHU4OEFCXHU1NkRFXHU2NTM2XHVGRjBDXHU5NzAwXHU4OTgxXHU4MUVBXHU1REYxXHU2MjRCXHU1MkE4XHU1NkRFXHU2NTM2XHJcbiAgICAgKiB0b2RvIFx1NzNCMFx1NTcyOFx1OEZEOVx1NEUyQVx1OEMwM1x1NzUyOFx1NzY4NFx1NjYyRlx1NUYxNVx1NjRDRVx1ODFFQVx1NUUyNlx1NzY4NFx1NjVCOVx1NkNENVx1RkYwQ1x1NkNBMVx1NjcwOVx1OEQ3MFx1OEZEOVx1OTFDQ1x1NzY4NFx1N0YxM1x1NUI1OFx1RkYwQ1x1NTNFRlx1ODBGRFx1NEYxQVx1NjcwOVx1OTVFRVx1OTg5OFx1RkYwQ1x1NTQwRVx1NjcxRlx1NEYxOFx1NTMxNlxyXG4gICAgICogXHU3M0IwXHU1NzI4XHU1MTY4XHU2NjJGZmFsc2UgXHU1NDBFXHU2NzFGXHU2NzA5XHU5NzAwXHU4OTgxXHU1MThEXHU0RjE4XHU1MzE2XHU4RkQ5XHU0RTJBXHU0RTFDXHU4OTdGXHVGRjBDXHU0RTBEXHU4MEZEXHU1MTczXHU5NUVEXHU1MTc2XHU1QjgzXHU2MjQwXHU2NzA5XHU3NTRDXHU5NzYyXHU4RkQ4XHU2NzJBXHU1QjlFXHU3M0IwXHJcbiAgICAgKi9cclxuICAgIGNsb3NlT3RoZXI/OiBib29sZWFuO1xyXG4gICAgLyoqIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBwYXJtPzogYW55O1xyXG4gICAgLyoqICBcdTYyNTNcdTVGMDBcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdUZGMENcdTRGMUFcdTRGMjBcdTkwMTJcdTdFRDlvbk9wZW5lZFx1NjVCOVx1NkNENVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgY29tcGxldGU/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTUyQTBcdThGN0RcdThGREJcdTVFQTZcdTU2REVcdThDMDNcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHByb2dyZXNzPzogSGFuZGxlcjtcclxufVxyXG5cclxuY29uc3Qgdmlld01hcHM6IHsgdXJsOiBzdHJpbmc7IHZpZXc6IExheWEuVmlldyB9W10gPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBcdTc1NENcdTk3NjJcdTdCQTFcdTc0MDZcdTU2NjhcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWaWV3TWFuYWdlciB7XHJcbiAgICBASW5zdGFuY2VcclxuICAgIHN0YXRpYyBpbnN0OiBWaWV3TWFuYWdlcjtcclxuXHJcbiAgICBsb2dpbk91dCgpIHtcclxuICAgICAgICB2aWV3TWFwcy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgIHYudmlldy5nZXRDb21wb25lbnRzKExheWEuU2NyaXB0KS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NTZERVx1NTkzNFx1ODk4MVx1NEYxOFx1NTMxNlx1NEUwMFx1NEUwQlx1NTE3Nlx1NUI4M1x1NzU0Q1x1OTc2Mlx1NzY4NFx1NTE3M1x1OTVFRFx1RkYwQ1x1OEZEOVx1OTFDQ1x1NjYyRlx1NEUwRFx1NjYyRlx1NjcwOVx1NTQwQ1x1NjgzN1x1NzY4NFx1OTVFRVx1OTg5OFxyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbChlKTtcclxuICAgICAgICAgICAgICAgIGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codi52aWV3LnVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZpZXdNYXBzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGRhdGEgXHU1M0MyXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIG9wZW4oXHJcbiAgICAgICAgdXJsOiB2aWV3cyxcclxuICAgICAgICBkYXRhOiBWaWV3T3BlblBhcm0gPSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3RoZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkRGVsYXk6IDEwMCxcclxuICAgICAgICAgICAgaGlkZUxvYWREZWxheTogMCxcclxuICAgICAgICB9XHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJtaXNzIHBhdGghXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5zaG93TG9hZCkge1xyXG4gICAgICAgICAgICBMYXlhLlZpZXcuc2hvd0xvYWRpbmdQYWdlKG51bGwsIGRhdGEuc2hvd0xvYWREZWxheSk7XHJcbiAgICAgICAgICAgIGlmICh1cmwgIT09IFJlcy52aWV3cy5Mb2dpblZpZXcpIHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKGRhdGEuaGlkZUxvYWREZWxheSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0YS5jbG9zZU90aGVyID0gZmFsc2U7XHJcbiAgICAgICAgTGF5YS5WaWV3Lm9wZW4oXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGF0YS5jbG9zZU90aGVyLFxyXG4gICAgICAgICAgICBkYXRhLnBhcm0sXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGU6IExheWEuVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybCAhPSBSZXMudmlld3MuTG9naW5WaWV3KSB2aWV3TWFwcy5wdXNoKHsgdXJsOiB1cmwsIHZpZXc6IGUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbkxpc3QgPSBlLmdldENvbXBvbmVudHMoTGF5YS5TY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbkxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25MaXN0LmZvckVhY2goKGUpID0+IGUuZW5hYmxlZCAmJiBlLm9uT3BlbmVkICYmIGUub25PcGVuZWQoZGF0YS5wYXJtKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNvbXBsZXRlICYmIGRhdGEuY29tcGxldGUoZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICBgJWMgPT0+IG9wZW4gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzdlZDZkZjtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzIyYTZiMztmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRhdGEucHJvZ3Jlc3NcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MTczXHU5NUVEXHU4OUM2XHU1NkZFXHJcbiAgICAgKiBAcGFyYW0gdXJsIFx1NzU0Q1x1OTc2Mlx1NTczMFx1NTc0MCBSZXMudmlld3NcdTkxQ0NcdTc2ODRcclxuICAgICAqIEBwYXJhbSBhbGwgXHU1NDBDXHU0RTAwXHU0RTJBXHU3NTRDXHU5NzYyXHU4OEFCIFx1NTkxQVx1NkIyMVx1NjI1M1x1NUYwMFx1RkYwQ1x1NTE2OFx1NTIyMFx1OTY2NFx1NzUyOFx1OEZEOVx1NEUyQVxyXG4gICAgICogQHBhcmFtIGRlc3Ryb3kgXHU5NTAwXHU2QkMxICAgVE9ET1x1RkYwOFx1OUVEOFx1OEJBNFx1NEYxQVx1OTUwMFx1NkJDMVx1NjI0MFx1NjcwOVx1NUI1MFx1ODI4Mlx1NzBCOVx1RkYwQ1x1NjcyQVx1NkQ0Qlx1OEJENVx1NjYyRlx1NTQyNlx1NjcwOVx1OTVFRVx1OTg5OFx1RkYwOVxyXG4gICAgICovXHJcbiAgICBhc3luYyBjbG9zZShcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGFsbDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBhbmlDb206IHR5cGVvZiBWaWV3U2hvd0FuaSB8IHR5cGVvZiBGbG9hdFZpZXdTaG93QW5pID0gVmlld1Nob3dBbmlcclxuICAgICkge1xyXG4gICAgICAgIC8vVE9ETyBcdThGRDlcdTkxQ0NcdTczQjBcdTU3MjhcdTUxNjhcdTkwRThcdTc1MjhkZXN0cm95IFx1NUYxNVx1NjRDRXJlbW92ZVx1NTk3RFx1NTBDRlx1NjcwOVx1NzBCOVx1OTVFRVx1OTg5OFx1RkYwQ1x1NTE4RFx1OTAxQVx1OEZDN3ZpZXcub3Blblx1NEYxQVx1OTFDRFx1NjVCMFx1Njc4NFx1NUVGQVx1N0VDNFx1NEVGNlxyXG4gICAgICAgIGRlc3Ryb3kgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgdkFuaTogVmlld1Nob3dBbmk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHZpZXdNYXBzLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT09IHZpZXdNYXBzW3hdLnVybCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSB2aWV3TWFwc1t4XTtcclxuICAgICAgICAgICAgICAgIHZpZXdNYXBzLnNwbGljZSh4LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2QW5pID0gdi52aWV3LmdldENvbXBvbmVudChhbmlDb20gYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGlmICh2QW5pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdkFuaS5jbG9zZVZpZXcoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vdG9kb1x1OTcwMFx1ODk4MVx1NEYxOFx1NTMxNlx1RkYwQ1x1NzU0Q1x1OTc2Mlx1NzY4NG1hcFx1OTcwMFx1ODk4MVx1NjU3NFx1NzQwNlx1NjIxMFx1RkYwQ1x1NTE2OFx1NUM0Rlx1NTQ4Q1x1NUYzOVx1N0E5N1x1NzY4NFx1NTMzQVx1NTIyQlxyXG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PT0gUmVzLnZpZXdzLkhpbnRWaWV3KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFhbGwpIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1x1NEZERFx1OEJDMVx1NTk4Mlx1Njc5Q1x1NTczQVx1NjY2Rlx1NUI4Q1x1NTE2OFx1NkNBMVx1NjcwOVx1NzU0Q1x1OTc2Mlx1ODhBQlx1NjI1M1x1NUYwMFx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NUZDNVx1NjI1M1x1NUYwMFx1NEUzQlx1NTczQVx1NjY2RlxyXG4gICAgICAgIGlmICghdmlld01hcHMubGVuZ3RoKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGNsb3NlTGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKCF2aWV3TWFwc1t4XS52aWV3LnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VMZW4rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlTGVuID09PSB2aWV3TWFwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKFJlcy52aWV3cy5NYWluVmlldyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh2aWV3TWFwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZVZpZXdMb2codXJsOiBzdHJpbmcsIGRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBgJWMgPD09ICR7ZGVzdHJveSA/IFwiZGVzdHJveVwiIDogXCJkaXNhYmxlXCJ9ICVjJHt1cmwubWF0Y2goL1xcdysoPz1cXC4pLylbMF19IGAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZmY3OTc5O2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2ViNGQ0Yjtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkhpbnQoZGF0YTogSGludFZpZXdEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuKFJlcy52aWV3cy5IaW50VmlldywgeyBwYXJtOiBkYXRhIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU5NjY0XHU3RjEzXHU1QjU4XHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIGNsZWFyVmlld01hcHMoKSB7XHJcbiAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9Db250cm9sIHtcclxuICAgIHBsYXlTb3VuZChcclxuICAgICAgICB1cmw6IHN0cmluZyxcclxuICAgICAgICBsb29wcz86IG51bWJlcixcclxuICAgICAgICBjb21wbGV0ZT86IEhhbmRsZXIsXHJcbiAgICAgICAgc291bmRDbGFzcz86IG5ldyAoKSA9PiBhbnksXHJcbiAgICAgICAgc3RhcnRUaW1lPzogbnVtYmVyXHJcbiAgICApIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQodXJsLCBsb29wcywgY29tcGxldGUsIHNvdW5kQ2xhc3MsIHN0YXJ0VGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1NjI0MFx1NjcwOVx1OTdGM1x1NjU0OFx1RkYwOFx1NEUwRFx1NTMwNVx1NjJFQ1x1ODBDQ1x1NjY2Rlx1OTdGM1x1NEU1MFx1RkYwOVx1NjYyRlx1NTQyNlx1OTc1OVx1OTdGM1x1MzAwMiAqL1xyXG4gICAgc2V0IHNvdW5kTXV0ZWQoc3RhdGUpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5zb3VuZE11dGVkID0gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBnZXQgc291bmRNdXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gTGF5YS5Tb3VuZE1hbmFnZXIuc291bmRNdXRlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4MENDXHU2NjZGXHU5N0YzXHU0RTUwXHVGRjA4XHU0RTBEXHU1MzA1XHU2MkVDXHU5N0YzXHU2NTQ4XHVGRjA5XHU2NjJGXHU1NDI2XHU5NzU5XHU5N0YzICovXHJcbiAgICBzZXQgbXVzaWNNdXRlZChzdGF0ZSkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLm11c2ljTXV0ZWQgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIGdldCBtdXNpY011dGVkKCkge1xyXG4gICAgICAgIHJldHVybiBMYXlhLlNvdW5kTWFuYWdlci5tdXNpY011dGVkO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQXVkaW9Db250cm9sIGZyb20gXCIuL0F1ZGlvQ29udHJvbFwiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiwgRmluZEJ5TmFtZSB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCBDb3JlID0ge1xyXG4gICAgLyoqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNiAqL1xyXG4gICAgb2JzZXJ2YWJsZVByb3BlcnR5OiBPYnNlcnZhYmxlUHJvcGVydHksXHJcbiAgICAvKiogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4ICovXHJcbiAgICB2aWV3OiBWaWV3TWFuYWdlci5pbnN0LFxyXG4gICAgLyoqIFx1NUYxNVx1NjRDRVx1ODExQVx1NjcyQ1x1N0VDNFx1NEVGNiAqL1xyXG4gICAgZ2FtZVNjcmlwdDogR2FtZVNjcmlwdCxcclxuICAgIC8qKiBcdTUzNTVcdTRGOEJcdTg4QzVcdTk5NzBcdTU2NjggKi9cclxuICAgIGluc3RhbmNlOiBJbnN0YW5jZSxcclxuICAgIC8qKiBcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuICAgIGV2ZW50T246IEV2ZW50T24sXHJcbiAgICAvKiogdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZVx1NzY4NFx1NzcwMVx1NEU4Qlx1NTE5OVx1NkNENSBcdTUzRUFcdTgwRkRcdTY3RTVcdTYyN0VcdTRFMEJcdTRFMDBcdTdFQTdcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbiAgICBmaW5kQnlOYW1lOiBGaW5kQnlOYW1lLFxyXG4gICAgLyoqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNiAqL1xyXG4gICAgZXZlbnRHbG9iYWw6IEV2ZW50R2xvYmFsLFxyXG4gICAgLyoqXHU5N0YzXHU5ODkxICovXHJcbiAgICBhdWRpbzogbmV3IEF1ZGlvQ29udHJvbCgpLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29yZTtcclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRlZmF1bHRSZXMsIHRpcHM6XCJcdThENDRcdTZFOTBcIix0eXBlOnN0cmluZ3MsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0UmVzO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRvd25SZXMsIHRpcHM6XCJcdThENDRcdTZFOTBcIix0eXBlOnN0cmluZ3MsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBkb3duUmVzO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmlzU2NhbGUsIHRpcHM6XCJcdTY2MkZcdTU0MjZcdTdGMjlcdTY1M0VcIix0eXBlOkNoZWNrfSovXHJcbiAgICBwcml2YXRlIGlzU2NhbGUgPSBmYWxzZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzY2FsZVZhbCwgdGlwczpcIlx1N0YyOVx1NjUzRVx1NzY4NFx1NTAzQ1wiLHR5cGU6TnVtYmVyLCBkZWZhdWx0OjAuOX0qL1xyXG4gICAgcHJpdmF0ZSBzY2FsZVZhbDogbnVtYmVyID0gMC45O1xyXG5cclxuICAgIHByaXZhdGUgb2xkU2NhbGVYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIG9sZFNjYWxlWTogbnVtYmVyO1xyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vICh0aGlzLm93bmVyIGFzIExheWEuQm94KS5zZXRfYW5jaG9yWCgwLjUpO1xyXG4gICAgICAgIC8vICh0aGlzLm93bmVyIGFzIExheWEuQm94KS5zZXRfYW5jaG9yWSgwLjUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNTY2FsZSk7XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLm1vdXNlRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vbGRTY2FsZVggPSAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikuZ2V0X3NjYWxlWCgpO1xyXG4gICAgICAgIHRoaXMub2xkU2NhbGVZID0gKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLmdldF9zY2FsZVkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRG93bigpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kb3duUmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSh0aGlzLnNjYWxlVmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlT3V0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRlZmF1bHRSZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKDEpO1xyXG4gICAgfVxyXG4gICAgb25Nb3VzZVVwKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRlZmF1bHRSZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QW5pKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNTY2FsZSkgcmV0dXJuO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgIHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgIHsgc2NhbGVYOiBzY2FsZSAqIHRoaXMub2xkU2NhbGVYLCBzY2FsZVk6IHNjYWxlICogdGhpcy5vbGRTY2FsZVkgfSxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFNraW4oc2tpbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFza2luKSByZXR1cm47XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHNraW47XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge31cclxufVxyXG4iLCAiLyoqXHJcbiAqIFx1NkUzOFx1NjIwRlx1OTE0RFx1N0Y2RVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqIFx1OTRCQlx1NzdGM2lkICovXHJcbiAgICBkaWFtb25kSWQ6IDEwMDEsXHJcbiAgICAvKiogXHU5MUQxXHU1RTAxaWQgKi9cclxuICAgIGdvbGRJZDogMTAwMixcclxuICAgIC8qKiBcdTcyRDdcdTcyRDdcdTZEODhcdTUzMTZcdTk4REZcdTcyNjlcdTk1RjRcdTk2OTRcdTY1RjZcdTk1RjQgXHU3OUQyICovXHJcbiAgICBwZXREaWdlc3RJbnRlcnZhbFRpbWU6IDYwLFxyXG4gICAgLyoqIFx1NkUzOFx1NjIwRlx1NjcyQ1x1NTczMFx1NTBBOFx1NUI1OGtleSAqL1xyXG4gICAgbG9jYWxLZXk6IFwibG92ZV9IRF9mYXJtXCIsXHJcbiAgICAvKiogXHU1MzRGXHU4QkFFXHU1NzMwXHU1NzQwICovXHJcbiAgICAvLyBiYXNlVXJsOiBcIi8vNDcuMTA4LjE5Mi4xODE6ODA5Mi9mYXJtXCIsXHJcbiAgICBiYXNlVXJsOiBcIi8vMTI3LjAuMC4xOjMwMDBcIixcclxuICAgIC8vIGJhc2VVcmw6IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMDAwXCIsXHJcbiAgICAvLyB0b2RvIFx1OEZEOVx1OTFDQ1x1NzY4NElwXHU1M0VGXHU0RUU1XHU4QkJGXHU5NUVFXHU1M0VGXHU4MEZEXHU2NjJGXHU2NzA5XHU5NUVFXHU5ODk4XHU3Njg0XHJcbiAgICAvLyBiYXNlVXJsOiBcIi8vNDcuMTA4LjE5Mi4xODE6MzAwMFwiLFxyXG4gICAgLyoqIGFwaVx1OEJGN1x1NkM0Mlx1N0M3Qlx1NTc4QiBcdTlFRDhcdThCQTQgKi9cclxuICAgIEFwaVR5cGVEZWZhdWx0OiAxLFxyXG4gICAgLyoqIGFwaVx1OEJGN1x1NkM0Mlx1N0M3Qlx1NTc4QiBcdTc3MEJcdTVFN0ZcdTU0NEEgKi9cclxuICAgIEFwaVR5cGVBRDogMixcclxuICAgIC8qKiBcdTVFN0ZcdTU0NEFcdTY3NjFcdTRFRjYgXHU1MkEwXHU5MDFGXHU0RjdGXHU3NTI4XHU0RTg2Nlx1NkIyMSAqL1xyXG4gICAgQURTcGVlZFVwVGltZXM6IDYsXHJcbn07XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcblxyXG5jb25zdCBMb2NhbERhdGEgPSB7XHJcbiAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgIHRva2VuOiBudWxsLFxyXG5cclxuICAgIC8qKiB0cnVlIFx1NEUzQVx1NTE3M1x1OTVFRCBmYWxzZSBcdTRFM0FcdTYyNTNcdTVGMDAgKi9cclxuICAgIHNvdW5kOiBmYWxzZSxcclxuICAgIC8qKiB0cnVlIFx1NEUzQVx1NTE3M1x1OTVFRCBmYWxzZSBcdTRFM0FcdTYyNTNcdTVGMDAgKi9cclxuICAgIG11c2ljOiBmYWxzZSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBcdTY3MkNcdTU3MzBcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQgbG9jYWxEYXRhIFx1NTcyOFx1OEZEOVx1NEUyQVx1OTFDQ1x1OTc2Mlx1NUI5QVx1NEU0OVx1NTk3RFxyXG4gKi9cclxuY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGxvY2FsRGF0YSA9IExvY2FsRGF0YTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhID0gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SlNPTihDb25maWdHYW1lLmxvY2FsS2V5KSB8fCBMb2NhbERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1ODNCN1x1NTNENlx1NjcyQ1x1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZ2V0SlNPTigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1OEJCRVx1N0Y2RVx1NjcyQ1x1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgc2V0SlNPTjxrZXkgZXh0ZW5kcyBrZXlvZiB0eXBlb2YgTG9jYWxEYXRhPihrZXk6IGtleSwgZGF0YTogdHlwZW9mIExvY2FsRGF0YVtrZXldKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbERhdGFba2V5XSA9IGRhdGE7XHJcbiAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTihDb25maWdHYW1lLmxvY2FsS2V5LCB0aGlzLmxvY2FsRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTihDb25maWdHYW1lLmxvY2FsS2V5LCB7fSk7XHJcbiAgICAgICAgdGhpcy5sb2NhbERhdGEgPSB7IGlzTG9naW46IGZhbHNlLCB0b2tlbjogbnVsbCwgc291bmQ6IHRydWUsIG11c2ljOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2NhbFN0b3JhZ2VTZXJ2aWNlKCk7XHJcbiIsICIvKiogXHU2MjQwXHU2NzA5XHU4ODY4ICovXG4gICAgICAgIGV4cG9ydCBjb25zdCBUYWJsZSA9IHtcInRhc2tcIjpbe1wiaWRcIjoxMDAxLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjEsXCJ0aXRsZVwiOlwiXHU3QjdFXHU1MjMwXHU5ODg2XHU5NEJCXHU3N0YzXCIsXCJkZXNjXCI6XCJcdTc3MEJcdTg5QzZcdTk4OTFcdTdCN0VcdTUyMzBcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDIsXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1ODNEQ1x1NTczMFx1NjVCRFx1ODBBNTEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTgzRENcdTU3MzBcdTUyQTBcdTkwMUYxMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwMyxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdTgzRENcdTU3MzBcdTY1MzZcdTgzQjcxMFx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4M0RDXHU1NzMwXHU2NTM2XHU4M0I3MTBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDQsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6NSxcInRpdGxlXCI6XCJcdThCQkZcdTUzQ0I1XHU2QjIxXCIsXCJkZXNjXCI6XCJcdTUwNzdcdTgzREM1XHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA1LFwicmV3YXJkXCI6XCIxMDAxOjIwXCIsXCJ0aW1lc1wiOjMsXCJ0aXRsZVwiOlwiXHU1NTgyXHU1MTdCXHU3MkQ3XHU3MkQ3M1x1NkIyMVwiLFwiZGVzY1wiOlwiXHU1NTgyXHU1MTdCXHU3MkQ3XHU3MkQ3M1x1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNixcInJld2FyZFwiOlwiMTAwMToyMFwiLFwidGltZXNcIjo1LFwidGl0bGVcIjpcIlx1OEQyRFx1NEU3MFx1OTk3Mlx1NjU5OTVcdTZCMjFcIixcImRlc2NcIjpcIlx1OEQyRFx1NEU3MFx1OTk3Mlx1NjU5OTVcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDcsXCJyZXdhcmRcIjpcIjEwMDE6MjBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU4RDJEXHU0RTcwXHU3OUNEXHU1QjUwMTBcdTZCMjFcIixcImRlc2NcIjpcIlx1OEQyRFx1NEU3MFx1NzlDRFx1NUI1MDEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA4LFwicmV3YXJkXCI6XCIxMDAxOjMwXCIsXCJ0aW1lc1wiOjMsXCJ0aXRsZVwiOlwiXHU1MUZBXHU1NTJFXHU0RjVDXHU3MjY5M1x1NkIyMVwiLFwiZGVzY1wiOlwiXHU1MUZBXHU1NTJFXHU0RjVDXHU3MjY5M1x1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwOSxcInJld2FyZFwiOlwiMTAwMToxMDBcIixcInRpbWVzXCI6NSxcInRpdGxlXCI6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0JcIixcImRlc2NcIjpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQjVcdTRFMkFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMTAsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MSxcInRpdGxlXCI6XCJcdTUyMDZcdTRFQUJcdTVGOTdcdTU5N0RcdTc5M0NcIixcImRlc2NcIjpcIlx1NTIwNlx1NEVBQlx1NEUwMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMSxcInJld2FyZFwiOlwiMTAwMTozMFwiLFwidGltZXNcIjozLFwidGl0bGVcIjpcIlx1NjMwN1x1NUI5QVx1NzlDRFx1NjkwRFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU2OTBEXHU2MzA3XHU1QjlBXHU3OUNEXHU1QjUwXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDEyLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MVwiLFwiZGVzY1wiOlwiXHU3NzBCXHU4OUM2XHU5ODkxMTBcdTZCMjFcIixcImljb25cIjpudWxsfV0sXCJzaWduSW5cIjpbe1wiaWRcIjoxMDAxLFwiZGF5c1wiOjcsXCJyZXdhcmRcIjpcIjEwMDE6MjAwMDBcIn0se1wiaWRcIjoxMDAyLFwiZGF5c1wiOjEwLFwicmV3YXJkXCI6XCIxMDAxOjMwMDAwXCJ9LHtcImlkXCI6MTAwMyxcImRheXNcIjoxNSxcInJld2FyZFwiOlwiMTAwMTo1MDAwMFwifSx7XCJpZFwiOjEwMDQsXCJkYXlzXCI6MjAsXCJyZXdhcmRcIjpcIjEwMDE6ODAwMDBcIn0se1wiaWRcIjoxMDA1LFwiZGF5c1wiOjMwLFwicmV3YXJkXCI6XCIxMDAxOjEyMDAwMFwifSx7XCJpZFwiOjEwMDYsXCJkYXlzXCI6NTAsXCJyZXdhcmRcIjpcIjEwMDE6MTgwMDAwXCJ9LHtcImlkXCI6MTAwNyxcImRheXNcIjo4MCxcInJld2FyZFwiOlwiMTAwMTozMDAwMDBcIn0se1wiaWRcIjoxMDA4LFwiZGF5c1wiOjEwMCxcInJld2FyZFwiOlwiMTAwMTozNTAwMDBcIn0se1wiaWRcIjoxMDA5LFwiZGF5c1wiOjE1MCxcInJld2FyZFwiOlwiMTAwMTo1MDAwMDBcIn1dLFwicGxhbnRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU2QzM0XHU3QTNCXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDJfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwXCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIxODBcIixcInVubG9ja19jb3N0XCI6bnVsbCxcInVubG9ja19yZXdhcmRcIjpudWxsLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1NTkyN1x1OEM0NlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA0X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MFwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMTgwXCIsXCJ1bmxvY2tfY29zdFwiOm51bGwsXCJ1bmxvY2tfcmV3YXJkXCI6bnVsbCxcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTU5MjdcdTg0OUNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxMl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTBcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjI0MFwiLFwidW5sb2NrX2Nvc3RcIjpudWxsLFwidW5sb2NrX3Jld2FyZFwiOm51bGwsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU1MzA1XHU1RkMzXHU4M0RDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDZfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NzVcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjc1XCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIzMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MSwxMDAyOjEwMDBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTU3MUZcdThDNDZcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwN19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo3NVwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NzVcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjMwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNixcIm5hbWVcIjpcIlx1ODQxRFx1NTM1Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA1X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjc1XCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo3NVwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiNDgwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjEsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA3LFwibmFtZVwiOlwiXHU1QzBGXHU5RUE2XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDFfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MTIwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjoxMjBcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjQ4MFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwOCxcIm5hbWVcIjpcIlx1OEZBM1x1NjkxMlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDEwX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjEyMFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6MTIwXCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCI2MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjIwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MSwxMDAyOjEwMDBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDksXCJuYW1lXCI6XCJcdTlFQzRcdTc0RENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxMV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoyMDBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjIwMFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiNzIwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjozMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjEsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDEwLFwibmFtZVwiOlwiXHU4MzA0XHU1QjUwXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTNfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MjAwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjoyMDBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjcyMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MzUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMSxcIm5hbWVcIjpcIlx1ODBFMVx1ODQxRFx1NTM1Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA4X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjM1MFwiLFwiZ2FpblwiOlwiMTAwMToxLDEwMDI6MzUwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI5MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjQ1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MSwxMDAyOjEwMDBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTIsXCJuYW1lXCI6XCJcdTUzNTdcdTc0RENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxNF9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjozNTBcIixcImdhaW5cIjpcIjEwMDE6MSwxMDAyOjM1MFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiOTAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo1MDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjEsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDEzLFwibmFtZVwiOlwiXHU3Mzg5XHU3QzczXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDNfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTAwXCIsXCJnYWluXCI6XCIxMDAxOjIsMTAwMjo1MDBcIixcImhhcnZlc3RcIjpcIjN+NVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjU1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MSwxMDAyOjEwMDBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTQsXCJuYW1lXCI6XCJcdTc1MThcdTg1MTdcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxNV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MDBcIixcImdhaW5cIjpcIjEwMDE6MiwxMDAyOjUwMFwiLFwiaGFydmVzdFwiOlwiM341XCIsXCJtYXR1cmVfdGltZVwiOlwiMTIwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NjAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxNSxcIm5hbWVcIjpcIlx1NzU2QVx1ODMwNFwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA5X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwMFwiLFwiZ2FpblwiOlwiMTAwMToyLDEwMDI6NTAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjVcIixcIm1hdHVyZV90aW1lXCI6XCIxMjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo2NTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjEsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn1dLFwicGV0XCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1OEZCOVx1NzI2N1wiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwMV9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTAsXCJjb3N0XCI6XCIxMDAyOjMwMDBcIixcImRlc2NcIjpcIlx1NzIzMVx1NUI4M1x1NUMzMVx1NEU3MFx1NUI4M35cdTVCODNcdTVDMzFcdTY2MkZcdTY3MDlcdTcwQjlcdTYxRDJ+XCIsXCJzZW5zaXRpdmVcIjozNCxcImFiaWxpdHlcIjo0Mn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU5MUQxXHU2QkRCXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA3X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNSxcImNvc3RcIjpcIjEwMDI6NDAwMFwiLFwiZGVzY1wiOlwiXHU5ODlDXHU1MDNDXHUzMDAxXHU2NjdBXHU1NTQ2XHU1M0NDXHU1M0NDXHU1NzI4XHU3RUJGXCIsXCJzZW5zaXRpdmVcIjo0MCxcImFiaWxpdHlcIjo0OH0se1wiaWRcIjoxMDAzLFwibmFtZVwiOlwiXHU3OUNCXHU3NTMwXHU3MkFDXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA5X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNixcImNvc3RcIjpcIjEwMDI6NDUwMFwiLFwiZGVzY1wiOlwiXHU2NzAwXHU1RkUwXHU4QkRBXHU3Njg0XHU0RjE5XHU0RjM0XCIsXCJzZW5zaXRpdmVcIjo0NSxcImFiaWxpdHlcIjo1NX0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU1NEM4XHU1OEVCXHU1OTQ3XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAyX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNixcImNvc3RcIjpcIjEwMDI6NTAwMFwiLFwiZGVzY1wiOlwiXHU3RUREXHU0RTBEXHU2MkM2XHU1QkI2XHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo0OCxcImFiaWxpdHlcIjo2MH0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU1RkI3XHU1NkZEXHU3MjY3XHU3RjhBXHU3MkFDXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA1X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNyxcImNvc3RcIjpcIjEwMDI6NzAwMFwiLFwiZGVzY1wiOlwiXHU2RDNCXHU1OTdEXHU1NDAzXHU3Njg0XHU1QzExXCIsXCJzZW5zaXRpdmVcIjo1MCxcImFiaWxpdHlcIjo3NX0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU2NzVDXHU1QkJFXHU3MkFDXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA0X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6NzUwMFwiLFwiZGVzY1wiOlwiXHU2QjY2XHU1MjlCXHU1OTI5XHU4RDRCXHU1REYyXHU3MEI5XHU2RUUxflx1NjJGRlx1NjM0Rlx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6NjAsXCJhYmlsaXR5XCI6ODB9LHtcImlkXCI6MTAwNyxcIm5hbWVcIjpcIlx1OTYzRlx1NjJDOVx1NjVBRlx1NTJBMFx1NzJBQ1wiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwOF9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTgsXCJjb3N0XCI6XCIxMDAyOjgwMDBcIixcImRlc2NcIjpcIlx1NUMzMVx1NEUyNFx1NEUyQVx1NUI1N1x1RkYwQ1x1NTQyQ1x1OEJERFx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6NjksXCJhYmlsaXR5XCI6ODV9LHtcImlkXCI6MTAwOCxcIm5hbWVcIjpcIlx1ODJDRlx1NjgzQ1x1NTE3MFx1NzI2N1x1N0Y4QVx1NzJBQ1wiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwM19kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTgsXCJjb3N0XCI6XCIxMDAyOjgwMDBcIixcImRlc2NcIjpcIlx1NzcwQlx1NUJCNlx1MzAwMVx1NzcwQlx1ODNEQ1x1MzAwMVx1NzcwQlx1NUI2OVx1NUI1MFwiLFwic2Vuc2l0aXZlXCI6NzYsXCJhYmlsaXR5XCI6ODh9LHtcImlkXCI6MTAwOSxcIm5hbWVcIjpcIlx1NjU5MVx1NzBCOVx1NzJEN1wiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNl9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTksXCJjb3N0XCI6XCIxMDAyOjEwMDAwXCIsXCJkZXNjXCI6XCJcdTRGNjBcdTUwM0NcdTVGOTdcdTYyRTVcdTY3MDlcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjg1LFwiYWJpbGl0eVwiOjkzfSx7XCJpZFwiOjEwMTAsXCJuYW1lXCI6XCJcdTg1Q0ZcdTczNTJcIixcImljb25cIjpcInBldF9mZWVkLzEwMTBfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjMwLFwiY29zdFwiOlwiMTAwMjoxNTAwMFwiLFwiZGVzY1wiOlwiXHU5NTdGXHU1Rjk3XHU1QzMxXHU1Rjg4XHU1MUY2XHVGRjBDXHU2MjkzXHU1QzBGXHU1MDc3XHU2NkY0XHU1MUY2XCIsXCJzZW5zaXRpdmVcIjo5MCxcImFiaWxpdHlcIjo5OX1dLFwib3JkZXJcIjpbe1wiaWRcIjoxLFwiY29tbWlzc2lvblwiOlwiMC41XCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MlwifSx7XCJpZFwiOjIsXCJjb21taXNzaW9uXCI6XCIwLjFcIixcImNvbmRpdGlvblwiOlwiMTAwMToxLDEwMDI6MSwxMDAzOjFcIn0se1wiaWRcIjozLFwiY29tbWlzc2lvblwiOlwiMC4wM1wiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE4LDEwMDQ6NCwxMDAzOjUsMTAwNTo2XCJ9LHtcImlkXCI6NCxcImNvbW1pc3Npb25cIjpcIjAuMjRcIixcImNvbmRpdGlvblwiOlwiMTAxMjoxMCwxMDAzOjMsMTAwNzo3LDEwMTU6OVwifSx7XCJpZFwiOjUsXCJjb21taXNzaW9uXCI6XCIwLjYxXCIsXCJjb25kaXRpb25cIjpcIjEwMTQ6NiwxMDEyOjksMTAxMDoxOSwxMDA2OjRcIn0se1wiaWRcIjo2LFwiY29tbWlzc2lvblwiOlwiMC4wN1wiLFwiY29uZGl0aW9uXCI6XCIxMDEwOjE0LDEwMDQ6MiwxMDEyOjMsMTAwMTo4XCJ9LHtcImlkXCI6NyxcImNvbW1pc3Npb25cIjpcIjAuNDNcIixcImNvbmRpdGlvblwiOlwiMTAxMjoxOCwxMDAxOjExLDEwMDc6NywxMDA4OjE5XCJ9LHtcImlkXCI6OCxcImNvbW1pc3Npb25cIjpcIjAuNTZcIixcImNvbmRpdGlvblwiOlwiMTAwODoxMywxMDA3OjMsMTAwNToyLDEwMTU6MjBcIn0se1wiaWRcIjo5LFwiY29tbWlzc2lvblwiOlwiMC4zOVwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjIsMTAxNToxMCwxMDExOjgsMTAwMzoxOFwifSx7XCJpZFwiOjEwLFwiY29tbWlzc2lvblwiOlwiMC4yMlwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjEyLDEwMTI6NSwxMDExOjE0LDEwMDM6NlwifSx7XCJpZFwiOjExLFwiY29tbWlzc2lvblwiOlwiMC43NlwiLFwiY29uZGl0aW9uXCI6XCIxMDA5OjExLDEwMDQ6MjAsMTAxMjo5LDEwMDI6MTBcIn0se1wiaWRcIjoxMixcImNvbW1pc3Npb25cIjpcIjAuNDNcIixcImNvbmRpdGlvblwiOlwiMTAwNzoxNiwxMDAzOjExLDEwMTI6MTYsMTAwNTo2XCJ9LHtcImlkXCI6MTMsXCJjb21taXNzaW9uXCI6XCIwLjE3XCIsXCJjb25kaXRpb25cIjpcIjEwMTA6NSwxMDA1OjEzLDEwMDE6OCwxMDEyOjE4XCJ9LHtcImlkXCI6MTQsXCJjb21taXNzaW9uXCI6XCIwLjdcIixcImNvbmRpdGlvblwiOlwiMTAxNToxOCwxMDA4OjE4LDEwMDY6MTYsMTAwMToxNFwifSx7XCJpZFwiOjE1LFwiY29tbWlzc2lvblwiOlwiMC40OFwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjEwLDEwMDU6MSwxMDExOjIsMTAwMToxMFwifSx7XCJpZFwiOjE2LFwiY29tbWlzc2lvblwiOjAuMjksXCJjb25kaXRpb25cIjpcIjEwMDg6MTEsMTAxNDo0LDEwMDY6OCwxMDA1OjE3XCJ9LHtcImlkXCI6MTcsXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAwNjoxNCwxMDA3OjE2LDEwMTI6MTksMTAwMToxNFwifSx7XCJpZFwiOjE4LFwiY29tbWlzc2lvblwiOjAuNDgsXCJjb25kaXRpb25cIjpcIjEwMDg6NCwxMDExOjIsMTAwOToxNSwxMDAyOjVcIn0se1wiaWRcIjoxOSxcImNvbW1pc3Npb25cIjowLjc1LFwiY29uZGl0aW9uXCI6XCIxMDEzOjEsMTAwMzoyMCwxMDE0OjExLDEwMDE6MTdcIn0se1wiaWRcIjoyMCxcImNvbW1pc3Npb25cIjowLjY3LFwiY29uZGl0aW9uXCI6XCIxMDAzOjEwLDEwMTE6MTcsMTAwMjoxNCwxMDA1OjJcIn0se1wiaWRcIjoyMSxcImNvbW1pc3Npb25cIjowLjY0LFwiY29uZGl0aW9uXCI6XCIxMDEwOjEwLDEwMDM6NCwxMDA1OjYsMTAwNzo1XCJ9LHtcImlkXCI6MjIsXCJjb21taXNzaW9uXCI6XCIwLjRcIixcImNvbmRpdGlvblwiOlwiMTAxNTo5LDEwMDc6MTIsMTAxMTo1LDEwMDQ6MTdcIn0se1wiaWRcIjoyMyxcImNvbW1pc3Npb25cIjowLjIsXCJjb25kaXRpb25cIjpcIjEwMDM6MTksMTAxNDoyLDEwMTU6MTYsMTAwMToxNFwifSx7XCJpZFwiOjI0LFwiY29tbWlzc2lvblwiOjAuNzcsXCJjb25kaXRpb25cIjpcIjEwMTQ6MywxMDAxOjE3LDEwMDg6MTgsMTAwNDo1XCJ9LHtcImlkXCI6MjUsXCJjb21taXNzaW9uXCI6MC42NCxcImNvbmRpdGlvblwiOlwiMTAwMjoxMywxMDExOjEsMTAxMDoxNSwxMDA3OjIwXCJ9LHtcImlkXCI6MjYsXCJjb21taXNzaW9uXCI6MC4wMyxcImNvbmRpdGlvblwiOlwiMTAwMjoxMSwxMDExOjEyLDEwMTI6MiwxMDAzOjE5XCJ9LHtcImlkXCI6MjcsXCJjb21taXNzaW9uXCI6MC40OSxcImNvbmRpdGlvblwiOlwiMTAwNzoxNiwxMDE0OjE2LDEwMDY6MTAsMTAxMTo3XCJ9LHtcImlkXCI6MjgsXCJjb21taXNzaW9uXCI6MC41MyxcImNvbmRpdGlvblwiOlwiMTAxNDo3LDEwMDc6MTIsMTAxMToxNywxMDAzOjE3XCJ9LHtcImlkXCI6MjksXCJjb21taXNzaW9uXCI6MC43NyxcImNvbmRpdGlvblwiOlwiMTAxMjoxMCwxMDA1OjE2LDEwMTA6MTQsMTAxNTo4XCJ9LHtcImlkXCI6MzAsXCJjb21taXNzaW9uXCI6MC4xNCxcImNvbmRpdGlvblwiOlwiMTAxMTo3LDEwMTQ6OSwxMDA2OjE0LDEwMDQ6M1wifSx7XCJpZFwiOjMxLFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMDc6MTgsMTAxMDoxNCwxMDEzOjksMTAwNjoxMVwifSx7XCJpZFwiOjMyLFwiY29tbWlzc2lvblwiOjAuNDYsXCJjb25kaXRpb25cIjpcIjEwMTM6MTksMTAwNToyLDEwMTI6MTIsMTAwODoyMFwifSx7XCJpZFwiOjMzLFwiY29tbWlzc2lvblwiOjAuMixcImNvbmRpdGlvblwiOlwiMTAxMjo2LDEwMTM6MTEsMTAwMjoxMywxMDA5OjE2XCJ9LHtcImlkXCI6MzQsXCJjb21taXNzaW9uXCI6MC4wMixcImNvbmRpdGlvblwiOlwiMTAwOTo5LDEwMTA6MTIsMTAxMToxNCwxMDEyOjJcIn0se1wiaWRcIjozNSxcImNvbW1pc3Npb25cIjowLjEzLFwiY29uZGl0aW9uXCI6XCIxMDAxOjE4LDEwMDQ6MTksMTAxMzo2LDEwMDM6MTBcIn0se1wiaWRcIjozNixcImNvbW1pc3Npb25cIjowLjIxLFwiY29uZGl0aW9uXCI6XCIxMDAzOjExLDEwMDg6MTcsMTAxNDo3LDEwMDc6MTdcIn0se1wiaWRcIjozNyxcImNvbW1pc3Npb25cIjowLjQ0LFwiY29uZGl0aW9uXCI6XCIxMDEyOjQsMTAxMDoyMCwxMDAyOjQsMTAxMToxMVwifSx7XCJpZFwiOjM4LFwiY29tbWlzc2lvblwiOjAuMjIsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTMsMTAwNDoxOSwxMDAyOjExLDEwMTU6MThcIn0se1wiaWRcIjozOSxcImNvbW1pc3Npb25cIjowLjM2LFwiY29uZGl0aW9uXCI6XCIxMDA3OjgsMTAxMjoxMywxMDA0OjE2LDEwMDI6MTZcIn0se1wiaWRcIjo0MCxcImNvbW1pc3Npb25cIjowLjI4LFwiY29uZGl0aW9uXCI6XCIxMDA0OjEwLDEwMDU6MTAsMTAwODoxOCwxMDExOjE2XCJ9LHtcImlkXCI6NDEsXCJjb21taXNzaW9uXCI6MC4xOCxcImNvbmRpdGlvblwiOlwiMTAxMDo4LDEwMDk6OCwxMDA4OjcsMTAxMTo2XCJ9LHtcImlkXCI6NDIsXCJjb21taXNzaW9uXCI6MC40MyxcImNvbmRpdGlvblwiOlwiMTAwOToxLDEwMDU6OCwxMDA3OjIsMTAwMjoxM1wifSx7XCJpZFwiOjQzLFwiY29tbWlzc2lvblwiOjAuMTQsXCJjb25kaXRpb25cIjpcIjEwMDY6MSwxMDA0OjQsMTAxNDoxMSwxMDA4OjVcIn0se1wiaWRcIjo0NCxcImNvbW1pc3Npb25cIjowLjYyLFwiY29uZGl0aW9uXCI6XCIxMDA5OjE1LDEwMDM6MTgsMTAwMjo0LDEwMDc6OVwifSx7XCJpZFwiOjQ1LFwiY29tbWlzc2lvblwiOjAuMTEsXCJjb25kaXRpb25cIjpcIjEwMTI6MTUsMTAxMDozLDEwMDc6MywxMDExOjNcIn0se1wiaWRcIjo0NixcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDAzOjEyLDEwMDc6MywxMDEwOjE2LDEwMDI6MTRcIn0se1wiaWRcIjo0NyxcImNvbW1pc3Npb25cIjowLjQ5LFwiY29uZGl0aW9uXCI6XCIxMDEwOjE0LDEwMTU6MjAsMTAwMzoxNSwxMDE0OjZcIn0se1wiaWRcIjo0OCxcImNvbW1pc3Npb25cIjowLjA2LFwiY29uZGl0aW9uXCI6XCIxMDEzOjE3LDEwMDc6MTQsMTAwODoxNywxMDAxOjEwXCJ9LHtcImlkXCI6NDksXCJjb21taXNzaW9uXCI6MC40OCxcImNvbmRpdGlvblwiOlwiMTAwMjo2LDEwMDQ6MTEsMTAwOToxMiwxMDA2OjIwXCJ9LHtcImlkXCI6NTAsXCJjb21taXNzaW9uXCI6MC4wNSxcImNvbmRpdGlvblwiOlwiMTAwNjoxNywxMDEyOjksMTAwODoyLDEwMTU6MTFcIn0se1wiaWRcIjo1MSxcImNvbW1pc3Npb25cIjowLjA0LFwiY29uZGl0aW9uXCI6XCIxMDExOjgsMTAwNDoxOSwxMDAyOjUsMTAwMzoxMVwifSx7XCJpZFwiOjUyLFwiY29tbWlzc2lvblwiOjAuNDMsXCJjb25kaXRpb25cIjpcIjEwMTU6MTUsMTAxMzoxMCwxMDAxOjE1LDEwMDQ6NlwifSx7XCJpZFwiOjUzLFwiY29tbWlzc2lvblwiOjAuMDgsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTQsMTAxMjoxMiwxMDEwOjEsMTAxNToxOFwifSx7XCJpZFwiOjU0LFwiY29tbWlzc2lvblwiOjAuNDUsXCJjb25kaXRpb25cIjpcIjEwMDU6MiwxMDAyOjEzLDEwMDk6NiwxMDE1OjE3XCJ9LHtcImlkXCI6NTUsXCJjb21taXNzaW9uXCI6MC43LFwiY29uZGl0aW9uXCI6XCIxMDAxOjMsMTAxNDo5LDEwMDU6NywxMDEwOjE1XCJ9LHtcImlkXCI6NTYsXCJjb21taXNzaW9uXCI6MC4wNSxcImNvbmRpdGlvblwiOlwiMTAwNjoxNywxMDA1OjE5LDEwMDk6MTcsMTAwMzoxOFwifSx7XCJpZFwiOjU3LFwiY29tbWlzc2lvblwiOjAuNjcsXCJjb25kaXRpb25cIjpcIjEwMDc6MSwxMDA4OjE3LDEwMDI6MTYsMTAwOToxNVwifSx7XCJpZFwiOjU4LFwiY29tbWlzc2lvblwiOjAuMzIsXCJjb25kaXRpb25cIjpcIjEwMDY6MTAsMTAwODo1LDEwMDU6NCwxMDA3OjlcIn0se1wiaWRcIjo1OSxcImNvbW1pc3Npb25cIjowLjc5LFwiY29uZGl0aW9uXCI6XCIxMDEyOjUsMTAwOToxLDEwMTM6NiwxMDA4OjVcIn0se1wiaWRcIjo2MCxcImNvbW1pc3Npb25cIjowLjY5LFwiY29uZGl0aW9uXCI6XCIxMDE1OjYsMTAxMjo3LDEwMTA6MSwxMDAxOjNcIn0se1wiaWRcIjo2MSxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDE1OjEyLDEwMDY6NSwxMDExOjE1LDEwMDI6N1wifSx7XCJpZFwiOjYyLFwiY29tbWlzc2lvblwiOjAuNDQsXCJjb25kaXRpb25cIjpcIjEwMTU6MSwxMDA3OjE1LDEwMTE6OCwxMDA2OjZcIn0se1wiaWRcIjo2MyxcImNvbW1pc3Npb25cIjowLjAxLFwiY29uZGl0aW9uXCI6XCIxMDEwOjE4LDEwMDU6MTYsMTAwOToxMywxMDAzOjdcIn0se1wiaWRcIjo2NCxcImNvbW1pc3Npb25cIjowLjI3LFwiY29uZGl0aW9uXCI6XCIxMDA3OjE3LDEwMDY6MTAsMTAwNTo5LDEwMDQ6NVwifSx7XCJpZFwiOjY1LFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMDg6MTUsMTAwMzoxMCwxMDE0OjIwLDEwMDU6MTVcIn0se1wiaWRcIjo2NixcImNvbW1pc3Npb25cIjowLjczLFwiY29uZGl0aW9uXCI6XCIxMDA0OjE1LDEwMDg6NSwxMDAyOjE0LDEwMTI6MTRcIn0se1wiaWRcIjo2NyxcImNvbW1pc3Npb25cIjowLjEzLFwiY29uZGl0aW9uXCI6XCIxMDAxOjE2LDEwMTI6MjAsMTAxMToyMCwxMDAzOjFcIn0se1wiaWRcIjo2OCxcImNvbW1pc3Npb25cIjowLjY5LFwiY29uZGl0aW9uXCI6XCIxMDEzOjQsMTAwODozLDEwMDY6NiwxMDA3OjE3XCJ9LHtcImlkXCI6NjksXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAxNTozLDEwMDQ6OSwxMDEzOjcsMTAwOToxXCJ9LHtcImlkXCI6NzAsXCJjb21taXNzaW9uXCI6MC43MSxcImNvbmRpdGlvblwiOlwiMTAxMDozLDEwMDQ6MSwxMDExOjcsMTAxMjoxMVwifSx7XCJpZFwiOjcxLFwiY29tbWlzc2lvblwiOjAuMjksXCJjb25kaXRpb25cIjpcIjEwMDg6MTEsMTAwMjo2LDEwMDM6OCwxMDE1OjEzXCJ9LHtcImlkXCI6NzIsXCJjb21taXNzaW9uXCI6MC4zMSxcImNvbmRpdGlvblwiOlwiMTAwNToyLDEwMDI6MTgsMTAxMjoxOSwxMDEwOjE0XCJ9LHtcImlkXCI6NzMsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAxMjo0LDEwMDY6MiwxMDAzOjcsMTAwNDoyXCJ9LHtcImlkXCI6NzQsXCJjb21taXNzaW9uXCI6MC4yNixcImNvbmRpdGlvblwiOlwiMTAwMzoyMCwxMDEyOjE4LDEwMDI6MywxMDAxOjIwXCJ9LHtcImlkXCI6NzUsXCJjb21taXNzaW9uXCI6MC4xOCxcImNvbmRpdGlvblwiOlwiMTAwNjoxLDEwMTQ6MywxMDA4OjEyLDEwMDI6NVwifSx7XCJpZFwiOjc2LFwiY29tbWlzc2lvblwiOjAuNTEsXCJjb25kaXRpb25cIjpcIjEwMDc6MSwxMDEyOjIsMTAwNDoxMSwxMDE0OjJcIn0se1wiaWRcIjo3NyxcImNvbW1pc3Npb25cIjowLjIxLFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMDk6NiwxMDEyOjQsMTAwNzo3XCJ9LHtcImlkXCI6NzgsXCJjb21taXNzaW9uXCI6MC43MyxcImNvbmRpdGlvblwiOlwiMTAxNToxNiwxMDEyOjE2LDEwMDY6MjAsMTAwODoxMlwifSx7XCJpZFwiOjc5LFwiY29tbWlzc2lvblwiOjAuNjUsXCJjb25kaXRpb25cIjpcIjEwMDY6NiwxMDA0OjgsMTAwNzoxMiwxMDExOjdcIn0se1wiaWRcIjo4MCxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDA5OjE1LDEwMDM6MTYsMTAwNDoxOSwxMDA3OjRcIn0se1wiaWRcIjo4MSxcImNvbW1pc3Npb25cIjowLjE0LFwiY29uZGl0aW9uXCI6XCIxMDEyOjEwLDEwMTU6OCwxMDAyOjQsMTAwMzo4XCJ9LHtcImlkXCI6ODIsXCJjb21taXNzaW9uXCI6MC4yLFwiY29uZGl0aW9uXCI6XCIxMDA1OjEyLDEwMTE6MTksMTAwOToxOCwxMDAyOjE0XCJ9LHtcImlkXCI6ODMsXCJjb21taXNzaW9uXCI6MC41MyxcImNvbmRpdGlvblwiOlwiMTAxMDo5LDEwMDM6OCwxMDA3OjEyLDEwMTU6MjBcIn0se1wiaWRcIjo4NCxcImNvbW1pc3Npb25cIjowLjYyLFwiY29uZGl0aW9uXCI6XCIxMDA1OjksMTAxNDo2LDEwMDI6MTgsMTAwNzo4XCJ9LHtcImlkXCI6ODUsXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAxMToxMCwxMDAxOjcsMTAxMjoxMiwxMDA0OjEyXCJ9LHtcImlkXCI6ODYsXCJjb21taXNzaW9uXCI6MC41OSxcImNvbmRpdGlvblwiOlwiMTAwOTo1LDEwMTE6MjAsMTAwNjo0LDEwMTU6MTFcIn0se1wiaWRcIjo4NyxcImNvbW1pc3Npb25cIjowLjExLFwiY29uZGl0aW9uXCI6XCIxMDA2OjYsMTAwNTo5LDEwMTM6MTAsMTAxNDo5XCJ9LHtcImlkXCI6ODgsXCJjb21taXNzaW9uXCI6MC4wOCxcImNvbmRpdGlvblwiOlwiMTAwODo3LDEwMTE6NCwxMDE1OjEyLDEwMTQ6MTFcIn0se1wiaWRcIjo4OSxcImNvbW1pc3Npb25cIjowLjAyLFwiY29uZGl0aW9uXCI6XCIxMDAyOjE3LDEwMDM6MiwxMDA1OjExLDEwMTA6MTRcIn0se1wiaWRcIjo5MCxcImNvbW1pc3Npb25cIjowLjMyLFwiY29uZGl0aW9uXCI6XCIxMDAyOjE5LDEwMTM6OCwxMDA3OjUsMTAwMToxM1wifSx7XCJpZFwiOjkxLFwiY29tbWlzc2lvblwiOjAuMTksXCJjb25kaXRpb25cIjpcIjEwMDg6MTUsMTAxMzoxMCwxMDE0OjEwLDEwMDc6MTZcIn0se1wiaWRcIjo5MixcImNvbW1pc3Npb25cIjowLjEzLFwiY29uZGl0aW9uXCI6XCIxMDA0OjgsMTAxMToxMywxMDA4OjE1LDEwMDc6OVwifSx7XCJpZFwiOjkzLFwiY29tbWlzc2lvblwiOjAuMzQsXCJjb25kaXRpb25cIjpcIjEwMTM6MTIsMTAwMTo5LDEwMDY6OCwxMDA4OjExXCJ9LHtcImlkXCI6OTQsXCJjb21taXNzaW9uXCI6MC4yMixcImNvbmRpdGlvblwiOlwiMTAwMjo2LDEwMDE6MTcsMTAxMzoxNiwxMDA1OjExXCJ9LHtcImlkXCI6OTUsXCJjb21taXNzaW9uXCI6MC4xNSxcImNvbmRpdGlvblwiOlwiMTAwNTo2LDEwMDE6MTQsMTAxNTo0LDEwMDg6MTZcIn0se1wiaWRcIjo5NixcImNvbW1pc3Npb25cIjowLjA2LFwiY29uZGl0aW9uXCI6XCIxMDAzOjQsMTAwMTo4LDEwMDc6OCwxMDA1OjE4XCJ9LHtcImlkXCI6OTcsXCJjb21taXNzaW9uXCI6MC43NCxcImNvbmRpdGlvblwiOlwiMTAxMzoxMiwxMDA5OjEzLDEwMDY6MiwxMDExOjJcIn1dLFwibGFuZ1wiOltdLFwibGFuZExldmVsXCI6W3tcImlkXCI6MSxcInJld2FyZFwiOlwiMTAwMjowXCIsXCJjb3N0XCI6XCIxMDAyOjBcIixcImdhaW5cIjpudWxsfSx7XCJpZFwiOjIsXCJyZXdhcmRcIjpcIjEwMDI6MTUwMFwiLFwiY29zdFwiOlwiMTAwMjoxMDAwMFwiLFwiZ2FpblwiOjAuMX0se1wiaWRcIjozLFwicmV3YXJkXCI6XCIxMDAyOjIwMDBcIixcImNvc3RcIjpcIjEwMDI6MzAwMDBcIixcImdhaW5cIjowLjI1fSx7XCJpZFwiOjQsXCJyZXdhcmRcIjpcIjEwMDI6MjUwMFwiLFwiY29zdFwiOlwiMTAwMjo1MDAwMFwiLFwiZ2FpblwiOjAuNH0se1wiaWRcIjo1LFwicmV3YXJkXCI6XCIxMDAyOjMwMDBcIixcImNvc3RcIjpcIjEwMDI6MTAwMDAwXCIsXCJnYWluXCI6MC41NX1dLFwiZmVlZFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTk5N0NcdTVFNzJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDFfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MSxcImNvc3RcIjpcIjEwMDI6M1wiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTU3NUFcdTY3OUNcIixcImljb25cIjpcInBldF9mZWVkLzEwMDJfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MixcImNvc3RcIjpcIjEwMDI6NVwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTcwNkJcdTgxN0ZcIixcImljb25cIjpcInBldF9mZWVkLzEwMDNfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6NSxcImNvc3RcIjpcIjEwMDI6MTBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU3MjVCXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA0X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjUwLFwiY29zdFwiOlwiMTAwMjo4MFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTczMkFcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDVfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MjAsXCJjb3N0XCI6XCIxMDAyOjM1XCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwNixcIm5hbWVcIjpcIlx1OUUyMVx1ODA4OVwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNl9mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjoxMCxcImNvc3RcIjpcIjEwMDI6MThcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn1dLFwiY3VycmVuY3lcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU5NEJCXHU3N0YzXCIsXCJpY29uXCI6XCJtYWluX3NjZW5lL2ltZ19kaWFtb25kLnBuZ1wifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTkxRDFcdTVFMDFcIixcImljb25cIjpcIm1haW5fc2NlbmUvaW1nX2NvaW4ucG5nXCJ9XSxcImNvbmZpZ1wiOlt7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVzXCIsXCJ2YWx1ZVwiOjMwfSx7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVcIixcInZhbHVlXCI6NjAwfSx7XCJpZFwiOlwidW5sb2NrX2xhbmRfY29zdFwiLFwidmFsdWVcIjpcIjEwMDI6MCwxMDAyOjAsMTAwMjo0MDAwMCwxMDAyOjUwMDAwLDEwMDI6MjAwMDAsMTAwMjoyMDAwMCwxMDAyOjIwMDAwLDEwMDI6MjAwMDAsMTAwMjoyMDAwMFwifV19OyIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29scyB7XHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NUI1N1x1N0IyNlxyXG4gICAgICogQHBhcmFtIHN0ciBcdTg5ODFcdTg5RTNcdTY3OTBcdTc2ODRcdTVCNTdcdTdCMjZcclxuICAgICAqIEBwYXJhbSBmb3JtYXQgXHU1MDVBXHU0RTNBXHU1M0MyXHU4MDAzXHU3Njg0XHU1QjU3XHU3QjI2XHU5RUQ4XHU4QkE0XHU0RTNBLFxyXG4gICAgICogQHJldHVybnMgXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1QjU3XHU3QjI2XHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVN0cmluZyhzdHI6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcgPSBcIixcIikge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHN0ci5zcGxpdChmb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3OUQyXHU4RjZDXHU2MzYyXHU2MjEwMDA6MDA6MDBcclxuICAgICAqIEBwYXJhbSBzIFx1OEY2Q1x1NjM2Mlx1NjVGNlx1OTVGNFx1NzY4NFx1NzlEMlxyXG4gICAgICogQHJldHVybnMgMDA6MDA6MDBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZvcm1hdFNlY29uZHMgPSAocykgPT4gbmV3IERhdGUocyAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDExLCA4KTtcclxufVxyXG4iLCAiaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi9UYWJsZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ29uZmlnQmFzZSxcclxuICAgIEN1cnJlbmN5QmFzZSxcclxuICAgIEZlZWRCYXNlLFxyXG4gICAgTGFuZExldmVsQmFzZSxcclxuICAgIE9yZGVyQmFzZSxcclxuICAgIFBldEJhc2UsXHJcbiAgICBQbGFudEJhc2UsXHJcbiAgICBSZXdhcmRCYXNlLFxyXG4gICAgUmV3YXJkQ3VycmVuY3lCYXNlLFxyXG4gICAgU2lnbkluQmFzZSxcclxuICAgIFRhc2tCYXNlLFxyXG59IGZyb20gXCIuL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwiLi9Ub29sc1wiO1xyXG5cclxuY29uc3QgVGFibGVQcm9wZXJ0eUV2ZW50ID0ge1xyXG4gICAgcGV0KGQ6IHR5cGVvZiBUYWJsZS5wZXRbMF0pIHtcclxuICAgICAgICByZXR1cm4gPFBldEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYHBldF9mZWVkLyR7ZC5pZH1fZG9nLnBuZ2AsXHJcbiAgICAgICAgICAgIHZpdGFsaXR5X21heDogZC52aXRhbGl0eV9tYXgsXHJcbiAgICAgICAgICAgIHZpdGFsaXR5X2NvbnN1bWU6IGQudml0YWxpdHlfY29uc3VtZSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICAgICAgc2Vuc2l0aXZlOiBkLnNlbnNpdGl2ZSxcclxuICAgICAgICAgICAgYWJpbGl0eTogZC5hYmlsaXR5LFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU5OTcyXHU2NTk5XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGZlZWQoZDogdHlwZW9mIFRhYmxlLmZlZWRbMF0pIHtcclxuICAgICAgICByZXR1cm4gPEZlZWRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uIHx8IGBwZXRfZmVlZC8ke2QuaWR9X2ZlZWQucG5nYCxcclxuICAgICAgICAgICAgdml0YWxpdHk6IGQudml0YWxpdHksXHJcbiAgICAgICAgICAgIGNvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLmNvc3QpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdThCQTJcdTUzNTVcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBvcmRlcihkOiB0eXBlb2YgVGFibGUub3JkZXJbMF0pIHtcclxuICAgICAgICByZXR1cm4gPE9yZGVyQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBjb21taXNzaW9uOiBOdW1iZXIoZC5jb21taXNzaW9uKSxcclxuICAgICAgICAgICAgY29uZGl0aW9uOiBUb29scy5wYXJzZVN0cmluZyhkLmNvbmRpdGlvbikubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IFRvb2xzLnBhcnNlU3RyaW5nKGUsIFwiOlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbnQ6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChOdW1iZXIodlswXSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBOdW1iZXIodlsxXSksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NjIxMFx1NzE5Rlx1NjkwRFx1NzI2OVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHBsYW50KGQ6IHR5cGVvZiBUYWJsZS5wbGFudFswXSkge1xyXG4gICAgICAgIHJldHVybiA8UGxhbnRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uLFxyXG4gICAgICAgICAgICBtYXR1cmVJY29uOiBgcGxhbnRfaWNvbi8ke2QuaWNvbi5tYXRjaCgvXFxkKy9nKVswXX1fbWF0dXJlLnBuZ2AsXHJcbiAgICAgICAgICAgIGdyb3dpbmdJY29uOiBgcGxhbnRfaWNvbi8ke2QuaWNvbi5tYXRjaCgvXFxkKy9nKVswXX1fZ3Jvd2luZy5wbmdgLFxyXG4gICAgICAgICAgICBnYWluOiBUb29scy5wYXJzZVN0cmluZyhkLmdhaW4pLm1hcCgoZSkgPT4gZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGUpKSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgICAgICBzZWVkX3ByaWNlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5zZWVkX3ByaWNlKSxcclxuICAgICAgICAgICAgaGFydmVzdDogTnVtYmVyKFRvb2xzLnBhcnNlU3RyaW5nKGQuaGFydmVzdCwgXCJ+XCIpWzFdKSxcclxuICAgICAgICAgICAgbWF0dXJlX3RpbWU6IE51bWJlcihkLm1hdHVyZV90aW1lKSxcclxuICAgICAgICAgICAgdW5sb2NrX2Nvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnVubG9ja19jb3N0KSxcclxuICAgICAgICAgICAgdW5sb2NrX3Jld2FyZDogVG9vbHMucGFyc2VTdHJpbmcoZC51bmxvY2tfcmV3YXJkKS5tYXAoKGUpID0+IGdldFJld2FyZEN1cnJlbmN5QmFzZShlKSksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBjdXJyZW5jeShkOiB0eXBlb2YgVGFibGUuY3VycmVuY3lbMF0pIHtcclxuICAgICAgICByZXR1cm4gPEN1cnJlbmN5QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24sXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NTcxRlx1NTczMFx1N0I0OVx1N0VBN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBsYW5kTGV2ZWwoZDogdHlwZW9mIFRhYmxlLmxhbmRMZXZlbFswXSkge1xyXG4gICAgICAgIHJldHVybiA8TGFuZExldmVsQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICByZXdhcmQ6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnJld2FyZCksXHJcbiAgICAgICAgICAgIGNvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLmNvc3QpLFxyXG4gICAgICAgICAgICBnYWluOiBkLmdhaW4sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uZmlnKGQ6IHR5cGVvZiBUYWJsZS5jb25maWdbMF0pIHtcclxuICAgICAgICBzd2l0Y2ggKGQuaWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcImFsbF9zcGVlZF91cF90aW1lc1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiYWxsX3NwZWVkX3VwX3RpbWVzXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYWxsX3NwZWVkX3VwX3RpbWVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcImFsbF9zcGVlZF91cF90aW1lXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidW5sb2NrX2xhbmRfY29zdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ1bmxvY2tfbGFuZF9jb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFRvb2xzLnBhcnNlU3RyaW5nKGQudmFsdWUgYXMgc3RyaW5nKS5tYXAoKGQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJld2FyZEN1cnJlbmN5QmFzZShkKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTk1MDFcdTdCN0VcdTUyMzBcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkXHJcbiAgICAgKi9cclxuICAgIHNpZ25JbihkOiB0eXBlb2YgVGFibGUuc2lnbkluWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxTaWduSW5CYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGRheXM6IGQuZGF5cyxcclxuICAgICAgICAgICAgcmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5yZXdhcmQpLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU0RUZCXHU1MkExXHU4ODY4XHJcbiAgICAgKi9cclxuICAgIHRhc2soZDogdHlwZW9mIFRhYmxlLnRhc2tbMF0pIHtcclxuICAgICAgICByZXR1cm4gPFRhc2tCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIHRpbWVzOiBkLnRpbWVzLFxyXG4gICAgICAgICAgICByZXdhcmQ6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnJld2FyZCksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICAgICAgdGl0bGU6IGQudGl0bGUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbiB8fCBgZ2FtZS9pbWdfYmFybS5wbmdgLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFx1ODlFM1x1Njc5MFx1OEQyN1x1NUUwMVxyXG4gKiBAcGFyYW0gc3RyIFx1ODlFM1x1Njc5MFx1NzY4NFx1OEQyN1x1NUUwMVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NCBpZDpudW1cclxuICovXHJcbmZ1bmN0aW9uIGdldFJld2FyZEN1cnJlbmN5QmFzZShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IGxpc3QgPSBUb29scy5wYXJzZVN0cmluZyhzdHIsIFwiOlwiKTtcclxuXHJcbiAgICByZXR1cm4gPFJld2FyZEN1cnJlbmN5QmFzZT57XHJcbiAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoTnVtYmVyKGxpc3RbMF0pKSxcclxuICAgICAgICBjb3VudDogTnVtYmVyKGxpc3RbMV0pLFxyXG4gICAgfTtcclxufVxyXG5cclxudHlwZSB0eXBlVGFibGUgPSB0eXBlb2YgVGFibGVQcm9wZXJ0eUV2ZW50O1xyXG5cclxuY2xhc3MgVGFibGVDb250cm9sIHtcclxuICAgIHByaXZhdGUgdGFibGVDYWNoZTogTWFwPGtleW9mIHR5cGVUYWJsZSwgUmV0dXJuVHlwZTx0eXBlVGFibGVba2V5b2YgdHlwZVRhYmxlXT5bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTc2ODRcdTg4NjhcclxuICAgICAqIEBwYXJhbSBrZXkgXHU4ODY4XHU3Njg0a2V5XHJcbiAgICAgKi9cclxuICAgIHRhYmxlPFQgZXh0ZW5kcyBrZXlvZiB0eXBlVGFibGU+KFxyXG4gICAgICAgIGtleTogVFxyXG4gICAgKToge1xyXG4gICAgICAgIGxpc3Q6IFJldHVyblR5cGU8dHlwZVRhYmxlW1RdPltdO1xyXG4gICAgICAgIGdldDogeyAoaWQ6IG51bWJlciB8IHN0cmluZyk6IFJldHVyblR5cGU8dHlwZVRhYmxlW1RdPiB9O1xyXG4gICAgfSB7XHJcbiAgICAgICAgLy9cdThCRkJcdTUzRDZcdTdFQzRcdTYyMTBcclxuICAgICAgICBpZiAodGhpcy50YWJsZUNhY2hlLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayh0aGlzLnRhYmxlQ2FjaGUuZ2V0KGtleSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1x1ODlFM1x1Njc5MFx1NjU3MFx1NjM2RVxyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgVGFibGVba2V5XS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChUYWJsZVByb3BlcnR5RXZlbnRba2V5XShlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cdTdGMTNcdTVCNThcdTg5RTNcdTY3OTBcdTg4NjhcdTc2ODRcdTY1NzBcdTYzNkVcclxuICAgICAgICB0aGlzLnRhYmxlQ2FjaGUuc2V0KGtleSwgbGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVCYWNrKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NTI4XHU0RThFdGFibGVcdTY1QjlcdTZDRDVcdThGRDRcdTU2REVcdTY1NzBcdTYzNkVcdTY4M0NcdTVGMEZcdTU0OENcdTZERkJcdTUyQTBcdTgzQjdcdTUzRDZcdTUzNTVcdTRFMkFcdTg4NjhcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1ODlFM1x1Njc5MFx1ODg2OFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU2MzA3XHU1QjlBXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGFibGVCYWNrKGxpc3QpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsaXN0OiBsaXN0LFxyXG4gICAgICAgICAgICBnZXQoaWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gbGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFt4XS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdFt4XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU4ODY4XHU2ODNDXHU4OUUzXHU2NzkwXHU1REU1XHU1MTc3XHJcbiAqL1xyXG5jb25zdCBUYWJsZUFuYWx5emUgPSBuZXcgVGFibGVDb250cm9sKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQW5hbHl6ZTtcclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFRhc2tCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFza0RhdGFPYmoge1xyXG4gICAgLyoqIFx1NEVGQlx1NTJBMWlkICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NUI4Q1x1NjIxMFx1NkIyMVx1NjU3MCAqL1xyXG4gICAgdGltZXM6IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk4ODZcdTUzRDZcdTU5NTZcdTUyQjEgMFx1NjcyQVx1OTg4Nlx1NTNENiAxXHU1REYyXHU5ODg2XHU1M0Q2ICovXHJcbiAgICByZWNlaXZlOiBudW1iZXI7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExXHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBUYXNrQmFzZTtcclxufVxyXG4vKipcclxuICogXHU0RUZCXHU1MkExXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBUYXNrU2VydmljZSB7XHJcbiAgICBsaXN0OiBUYXNrRGF0YU9ialtdID0gW107XHJcblxyXG4gICAgaW5pdChkOiBOZXRJbml0W1widGFza3NcIl0pIHtcclxuICAgICAgICBkLmZvckVhY2goKGUpID0+XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGltZXM6IGUudGltZXMsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlOiBlLnJlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChlLmlkKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU0RUZCXHU1MkExXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldFRhc2soaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTRFRkJcdTUyQTFcdTZERkJcdTUyQTBcdTZCMjFcdTY1NzBcclxuICAgICAqL1xyXG4gICAgdGFza0FkZFRpbWVzKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdGFzayA9IHRoaXMuZ2V0VGFzayhpZCk7XHJcbiAgICAgICAgaWYgKCF0YXNrKSB7XHJcbiAgICAgICAgICAgIC8vXHU5RUQ4XHU4QkE0XHU0RTBEXHU1MjFCXHU1RUZBXHU0RUZCXHU1MkExXHJcbiAgICAgICAgICAgIC8vIHRhc2sgPSB7IGlkOiBpZCwgdGltZXM6IDAsIHJlY2VpdmU6IDAsIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInRhc2tcIikuZ2V0KGlkKSB9O1xyXG4gICAgICAgICAgICAvLyB0aGlzLmxpc3QucHVzaCh0YXNrKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFzay50aW1lcysrO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBUYXNrU2VydmljZSgpO1xyXG4iLCAiZXhwb3J0IHR5cGUgTGFuZE9iaiA9IE5ldEluaXRbXCJsYW5kc1wiXVswXTtcclxuXHJcbmNsYXNzIExhbmRTZXJ2aWNlIHtcclxuICAgIC8qKlxyXG4gICAgICogXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGxpc3Q6IE1hcDxudW1iZXIsIExhbmRPYmo+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjFEXHU1OUNCXHU1MzE2XHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgaW5pdChsaXN0OiBMYW5kT2JqW10pIHtcclxuICAgICAgICBsaXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRMYW5kKGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU1NzU3XHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gaWQgXHU1NzFGXHU1NzMwaWRcclxuICAgICAqIEByZXR1cm5zIFx1OEZENFx1NTZERVx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBnZXRMYW5kKGlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmdldChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZERkJcdTUyQTBcdTYyMTZcdTY2MkZcdTY2RjRcdTY1QjBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBkIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBhZGRMYW5kKGQ6IExhbmRPYmopIHtcclxuICAgICAgICB0aGlzLmxpc3Quc2V0KGQuaWQsIGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU3QTdBXHU1NzFGXHU1NzMwXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgTGFuZFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBldEJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXREYXRhQmFzZSB7XHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBQZXRCYXNlO1xyXG4gICAgLyoqIFx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJBMFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gKi9cclxuY2xhc3MgUGV0U2VydmljZSB7XHJcbiAgICBsaXN0OiBQZXREYXRhQmFzZVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgaW5pdChwZXRzOiBudW1iZXJbXSkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogZCxcclxuICAgICAgICAgICAgICAgIGxvY2s6ICFwZXRzLmluY2x1ZGVzKGQuaWQpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NUJBMFx1NzI2OVx1ODlFM1x1OTUwMVx1NjU3MFx1OTFDRlxyXG4gICAgICovXHJcbiAgICBnZXRVbmxvY2tMZW4oKSB7XHJcbiAgICAgICAgbGV0IGxlbiA9IDA7XHJcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFkLmxvY2spIGxlbisrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsZW47XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQZXRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBQbGFudEJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQbGFudERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFBsYW50QmFzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk1MDFcdTVCOUEgKi9cclxuICAgIGxvY2s6IGJvb2xlYW47XHJcbn1cclxuLyoqXHJcbiAqIFx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gKi9cclxuY2xhc3MgUGxhbnRTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFBsYW50RGF0YUJhc2VbXSA9IFtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1NzlDRFx1NUI1MGlkXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGluaXQobGlzdDogbnVtYmVyW10pIHtcclxuICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goeyBiYXNlOiBkLCBsb2NrOiAhbGlzdC5pbmNsdWRlcyhkLmlkKSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEUwMFx1NEUyQVx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGlkIFx1NjkwRFx1NzI2OWlkXHJcbiAgICAgKiBAcmV0dXJucyBcdTY5MERcdTcyNjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgZ2V0UGxhbnQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSB0aGlzLmxpc3QubGVuZ3RoIC0gMTsgeCA+IC0xOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFt4XS5iYXNlLmlkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0W3hdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU5NjY0XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQbGFudFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4uL2NvcmUvSW5zdGFuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcclxuICovXHJcbmNsYXNzIFVzZXJJbmZvIHtcclxuICAgIC8qKiBcdThCQTJcdTUzNTVcdTdCNDlcdTdFQTcgXHU1REYyXHU1QjhDXHU2MjEwICovXHJcbiAgICBvcmRlckxldmVsOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NTQwRFx1NzlGMCAqL1xyXG4gICAgbmlja25hbWU6IHN0cmluZyA9IFwibmFtZVwiO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN2lkICovXHJcbiAgICB1aWQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU1NDBEXHU1OTM0XHU1MENGICovXHJcbiAgICBhdmF0YXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogXHU5NEJCXHU3N0YzICovXHJcbiAgICBkaWFtb25kOiBudW1iZXIgPSA5OTk7XHJcbiAgICAvKiogXHU5MUQxXHU1RTAxICovXHJcbiAgICBnb2xkOiBudW1iZXIgPSA5OTk7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1M0VGXHU0RUU1XHU3NzBCXHU1RTdGXHU1NDRBXHU3Njg0XHU2QjIxXHU2NTcwICovXHJcbiAgICBhZHZlcnRpc2VUaW1lczogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTczQTlcdTVCQjZcdTRGNjlcdTYyMzRcdTc2ODRcdTVCQTBcdTcyNjkgKi9cclxuICAgIHdhcmVQZXRJZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NTI2OVx1NEY1OVx1NEY1M1x1NTI5QiAqL1xyXG4gICAgcGV0Vml0YWxpdHk6IG51bWJlcjtcclxuICAgIC8qKiBcdTZEODhcdTUzMTZcdTk4REZcdTcyNjlcdTUwMTJcdThCQTFcdTY1RjYgKi9cclxuICAgIGRpZ2VzdENvdW50RG93bjogbnVtYmVyO1xyXG4gICAgLyoqIFx1OEZERVx1N0VFRFx1N0I3RVx1NTIzMFx1NTkyOVx1NjU3MCAqL1xyXG4gICAgc2lnbkluRGF5czogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTRFMEFcdTRFMDBcdTZCMjFcdTk4ODZcdTUzRDZcdTc2ODRcdTdCN0VcdTUyMzBcdTU5NTZcdTUyQjFpZCAqL1xyXG4gICAgc2lnbkluSWQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1REYyXHU3RUNGXHU1MkEwXHU5MDFGXHU2QjIxXHU2NTcwICovXHJcbiAgICBzcGVlZFVwVGltZXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZ2V0IHR0dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlckxldmVsO1xyXG4gICAgfVxyXG4gICAgc2V0IHR0dCh2KSB7XHJcbiAgICAgICAgdGhpcy5vcmRlckxldmVsID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLm5pY2tuYW1lID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJJbmZvKCk7XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGxhbnRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogXHU0RUQzXHU1RTkzXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFdhcmVIb3VzZURhdGEge1xyXG4gICAgYmFzZTogUGxhbnRCYXNlO1xyXG4gICAgY291bnQ6IG51bWJlcjtcclxuICAgIHR5cGU/OiBudW1iZXI7XHJcbn1cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1x1NjU3MFx1NjM2RVxyXG4gKi9cclxuY2xhc3MgV2FyZWhvdXNlU2VydmljZSB7XHJcbiAgICBsaXN0OiBXYXJlSG91c2VEYXRhW10gPSBbXTtcclxuXHJcbiAgICBpbml0KFxyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgdHlwZTogbnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgKSB7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLmlkKSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiBkLmFtb3VudCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1NTFDRlx1NUMxMVx1NzI2OVx1NTRDMVx1NjU3MFx1OTFDRlxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKiBAcGFyYW0gYW1vdW50XHJcbiAgICAgKi9cclxuICAgIHJlZHVjZUFtb3VudChpZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uYmFzZS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W3hdLmNvdW50IC09IGFtb3VudDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uY291bnQgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5zcGxpY2UoeCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX09yZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEUwMFx1NEUyQVx1OTA1M1x1NTE3N1xyXG4gICAgICovXHJcbiAgICBnZXRPbmUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW0oaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SXRlbShpZCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RbeF0uYmFzZS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZERkJcdTUyQTBcdTcyNjlcdTU0QzFcclxuICAgICAqL1xyXG4gICAgYWRkKGlkOiBudW1iZXIsIGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmdldEl0ZW0oaWQpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY291bnQgKz0gYW1vdW50O1xyXG4gICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfT3JkZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChpZCksXHJcbiAgICAgICAgICAgIGNvdW50OiBhbW91bnQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBXYXJlaG91c2VTZXJ2aWNlKCk7XHJcbiIsICIvKipcclxuICogXHU3N0VEXHU5NEZFXHU2M0E1XHU4QkY3XHU2QzQyXHU1MzRGXHU4QkFFXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBcGlIdHRwIHtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgKi9cclxuICAgIGxvZ2luID0gXCIvbG9naW5cIixcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgdG9rZW4gKi9cclxuICAgIGxvZ2luVG9rZW4gPSBcIi9sb2dpbi90b2tlblwiLFxyXG4gICAgLyoqIFx1OTg4Nlx1NTNENlx1OEJBMlx1NTM1NVx1NTk1Nlx1NTJCMSAqL1xyXG4gICAgb3JkZXJSZXdhcmQgPSBcIi9vcmRlci9yZXdhcmRcIixcclxuICAgIC8qKiBcdTk4ODZcdTUzRDZcdThCQTJcdTUzNTVcdTU5NTZcdTUyQjEgKi9cclxuICAgIHNpZ25JblJld2FyZCA9IFwiL3NpZ25Jbi9yZXdhcmRcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTg5RTNcdTk1MDEgKi9cclxuICAgIGxhbmRVbmxvY2sgPSBcIi9sYW5kL3VubG9ja1wiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjRBRFx1NzlDRCAqL1xyXG4gICAgbGFuZFNvdyA9IFwiL2xhbmQvc293XCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU2NTM2XHU4M0I3ICovXHJcbiAgICBsYW5kR2F0aGVyID0gXCIvbGFuZC9nYXRoZXJcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTcgKi9cclxuICAgIGxhbmRVcGdyYWRlID0gXCIvbGFuZC91cGdyYWRlXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MkEwXHU5MDFGICovXHJcbiAgICBsYW5kU3BlZWRVcCA9IFwiL2xhbmQvc3BlZWRVcFwiLFxyXG4gICAgLyoqIFx1NzlDRFx1NUI1MFx1ODlFM1x1OTUwMSAqL1xyXG4gICAgc2VlZHNVbmxvY2sgPSBcIi9zZWVkcy91bmxvY2tcIixcclxuICAgIC8qKiBcdTgzQjdcdTUzRDZcdTgwQ0NcdTUzMDVcdTUyMTdcdTg4Njg9PiBcdTY2ODJcdTY1RjZcdThGRDlcdTRFMkFcdTYzQTVcdTUzRTNcdTRFMERcdTk3MDBcdTg5ODFcdTc1MjggKi9cclxuICAgIHdhcmVob3VzZSA9IFwiL3dhcmVob3VzZVwiLFxyXG4gICAgLyoqIFx1ODBDQ1x1NTMwNVx1NTU0Nlx1NTRDMVx1NTFGQVx1NTUyRSAqL1xyXG4gICAgd2FyZWhvdXNlU2VsbCA9IFwiL3dhcmVob3VzZS9zZWxsXCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU4RDJEXHU0RTcwICovXHJcbiAgICBwZXRCdXkgPSBcIi9wZXQvYnV5XCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU0RjY5XHU2MjM0ICovXHJcbiAgICBwZXRXZWFyID0gXCIvcGV0L3dlYXJcIixcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdThEMkRcdTRFNzAgKi9cclxuICAgIGZlZWRCdXkgPSBcIi9mZWVkL2J1eVwiLFxyXG4gICAgLyoqIFx1NEVGQlx1NTJBMVx1NTk1Nlx1NTJCMVx1OTg4Nlx1NTNENiAqL1xyXG4gICAgdGFza1Jld2FyZCA9IFwiL3Rhc2svcmV3YXJkXCIsXHJcbn1cclxuIiwgImltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFBldFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9QZXRTZXJ2aWNlXCI7XHJcbmltcG9ydCBQbGFudFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwiLi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vUmVzXCI7XHJcblxyXG4vKipcclxuICogXHU1MzRGXHU4QkFFXHU2NTcwXHU2MzZFXHU1OTA0XHU3NDA2XHJcbiAqL1xyXG5jbGFzcyBIdHRwRGF0YUNvbnRyb2wge1xyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1OEY2Q1x1NTNEMSAqL1xyXG4gICAgZm9yd2FyZChkOiB7XHJcbiAgICAgICAgYXBpOiBBcGlIdHRwO1xyXG4gICAgICAgIGRhdGE6IGFueTtcclxuICAgICAgICBjYWxsPzogRnVuY3Rpb247XHJcbiAgICAgICAgcmVzb2x2ZUV2ZW50PzogRnVuY3Rpb247XHJcbiAgICAgICAgZXJyb3I/OiBGdW5jdGlvbjtcclxuICAgIH0pIHtcclxuICAgICAgICBzd2l0Y2ggKGQuYXBpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sb2dpbjpcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxvZ2luVG9rZW46XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRTcGVlZFVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kR2F0aGVyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5mZWVkQnV5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kU293OlxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC53YXJlaG91c2VTZWxsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAuc2VlZHNVbmxvY2s6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFNvdzpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kVW5sb2NrOlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnBldEJ1eTpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC50YXNrUmV3YXJkOlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLm9yZGVyUmV3YXJkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkLnJlc29sdmVFdmVudCkgZC5yZXNvbHZlRXZlbnQoZC5kYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKGQuY2FsbCkge1xyXG4gICAgICAgICAgICBkLmNhbGwoZC5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChkLmFwaSwgZC5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihlcnJvckNvZGU6IG51bWJlciwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgdGV4dDogYGVycm9yQ29kZSAke2Vycm9yQ29kZX0gJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gLFxyXG4gICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzY3Qlx1NUY1NVxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9naW4oZDogTmV0SW5pdCkge1xyXG4gICAgICAgIFBsYW50U2VydmljZS5pbml0KGQuc2VlZHMpO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UuaW5pdChkLndhcmVob3VzZSk7XHJcbiAgICAgICAgVXNlckluZm8udWlkID0gZC51c2VySW5mby51aWQ7XHJcbiAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IGQudXNlckluZm8uZGlhbW9uZDtcclxuICAgICAgICBVc2VySW5mby5nb2xkID0gZC51c2VySW5mby5nb2xkO1xyXG4gICAgICAgIFVzZXJJbmZvLm5pY2tuYW1lID0gZC51c2VySW5mby5uaWNrbmFtZTtcclxuICAgICAgICBVc2VySW5mby5hdmF0YXIgPSBcIlwiO1xyXG4gICAgICAgIFVzZXJJbmZvLm9yZGVyTGV2ZWwgPSBkLm9yZGVySWQgfHwgMDtcclxuICAgICAgICBVc2VySW5mby53YXJlUGV0SWQgPSBkLndlYXJQZXQ/LmlkO1xyXG4gICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gZC53ZWFyUGV0Py52aXRhbGl0eSB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IGQud2VhclBldD8uZGlnZXN0Q291bnREb3duIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPSBkLmFkdmVydGlzZVRpbWVzIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cyA9IGQuc2lnbkluRGF5cyB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnNpZ25JbklkID0gZC5zaWduSW5JZDtcclxuICAgICAgICBVc2VySW5mby5zcGVlZFVwVGltZXMgPSBkLnNwZWVkVXBUaW1lcztcclxuICAgICAgICBQZXRTZXJ2aWNlLmluaXQoZC5wZXRzKTtcclxuICAgICAgICBUYXNrU2VydmljZS5pbml0KGQudGFza3MpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGQudG9rZW4pIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInRva2VuXCIsIGQudG9rZW4pO1xyXG4gICAgICAgIExhbmRTZXJ2aWNlLmluaXQoZC5sYW5kcyk7XHJcblxyXG4gICAgICAgIENvcmUuYXVkaW8uc291bmRNdXRlZCA9IExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnNvdW5kO1xyXG4gICAgICAgIENvcmUuYXVkaW8ubXVzaWNNdXRlZCA9IExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLm11c2ljO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luT3V0KCkge1xyXG4gICAgICAgIFBsYW50U2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBQZXRTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgTGFuZFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBUYXNrU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgZmFsc2UpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInRva2VuXCIsIG51bGwpO1xyXG4gICAgICAgIFVzZXJJbmZvLnVpZCA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8ubmlja25hbWUgPSBcIlwiO1xyXG4gICAgICAgIFVzZXJJbmZvLmF2YXRhciA9IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCA9IDA7XHJcbiAgICAgICAgVXNlckluZm8ud2FyZVBldElkID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gMDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTlFRDhcdThCQTRcdTc1MjhcdTY3NjVcdTY2RjRcdTY1QjBcdTc1MjhcdTYyMzdcdTkxRDFcdTVFMDFcdTdCNDlcclxuICAgICAqIEBwYXJhbSBkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlVXNlckluZm8oZDogUmV0dXJuVXNlckluZm8pIHtcclxuICAgICAgICBVc2VySW5mby5nb2xkID0gZC5nb2xkO1xyXG4gICAgICAgIFVzZXJJbmZvLmRpYW1vbmQgPSBkLmRpYW1vbmQ7XHJcbiAgICAgICAgVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPSBkLmFkdmVydGlzZVRpbWVzIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTRFRkJcdTUyQTFcdThGREJcdTVFQTZcclxuICAgICAqIEBwYXJhbSBpZCBcdTRFRkJcdTUyQTFpZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRhc2tVcGRhdGUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcyhpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBIdHRwRGF0YUNvbnRyb2woKTtcclxuIiwgImltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCJzcmMvY29yZS9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcIi4vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cERhdGFDb250cm9sIGZyb20gXCIuL0h0dHBEYXRhQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuaW50ZXJmYWNlIEh0dHBTZW5kRGF0YSB7XHJcbiAgICBhcGk6IEFwaUh0dHA7XHJcbiAgICBkYXRhPzogYW55O1xyXG4gICAgbWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nO1xyXG4gICAgaGVhZGVycz86IGFueVtdIHwgbnVsbDtcclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTk1MTlcdThCRUZcdTU2REVcdThDMDMgKi9cclxuICAgIGVycm9yPzogeyAoY29kZTogbnVtYmVyLCBkYXRhOiBhbnkpOiB2b2lkIH07XHJcbiAgICBiYXNlVXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogXHU3N0VEXHU5NEZFXHU2M0E1XHU2M0E3XHU1MjM2XHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwQ29udHJvbCB7XHJcbiAgICBASW5zdGFuY2VcclxuICAgIHN0YXRpYyBpbnN0OiBIdHRwQ29udHJvbDtcclxuXHJcbiAgICB4aHI6IFhNTEh0dHBSZXF1ZXN0O1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRGF0YTogSHR0cFNlbmREYXRhO1xyXG5cclxuICAgIHByaXZhdGUgYmFja1Jlc29sdmVFdmVudDogRnVuY3Rpb247XHJcblxyXG4gICAgaW5pdCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9IHVybDtcclxuICAgICAgICBpZiAodGhpcy54aHIpIHJldHVybjtcclxuICAgICAgICAvLyBsZXQgeGhyID0gbmV3IExheWEuSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy54aHIuaHR0cC50aW1lb3V0ID0gMTAwMDA7IC8vXHU4RDg1XHU2NUY2XHU2NUY2XHU5NUY0XHJcbiAgICAgICAgLy8geGhyLm9uKExheWEuRXZlbnQuQ09NUExFVEUsIHRoaXMsIHRoaXMuY29tcGxldGVIYW5kbGVyKTtcclxuICAgICAgICAvLyB4aHIub24oTGF5YS5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5lcnJvckhhbmRsZXIpO1xyXG4gICAgICAgIC8vIHhoci5vbihMYXlhLkV2ZW50LlBST0dSRVNTLCB0aGlzLCB0aGlzLnByb2Nlc3NIYW5kbGVyKTtcclxuICAgICAgICAvLyB4aHIuc2VuZChcInJlcy9kYXRhLmRhdGFcIiwgXCJcIiwgXCJnZXRcIiwgXCJ0ZXh0XCIpO1xyXG5cclxuICAgICAgICBsZXQgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHhtbGh0dHAuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVIYW5kbGVyKEpTT04ucGFyc2UoeG1saHR0cC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMueGhyID0geG1saHR0cDtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kKGRhdGE6IEh0dHBTZW5kRGF0YSkge1xyXG4gICAgICAgIGlmICghZGF0YS5tZXRob2QpIGRhdGEubWV0aG9kID0gXCJwb3N0XCI7XHJcbiAgICAgICAgaWYgKCFkYXRhLnJlc3BvbnNlVHlwZSkgZGF0YS5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcclxuICAgICAgICBpZiAoIWRhdGEuYmFzZVVybCkgZGF0YS5iYXNlVXJsID0gdGhpcy5iYXNlVXJsO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmREYXRhID0gZGF0YTtcclxuXHJcbiAgICAgICAgLy8gaWYgKCFkYXRhLmRhdGE/LnVzZXJJZCkge1xyXG4gICAgICAgIC8vICAgICBkYXRhLmRhdGEudXNlcklkID0gVXNlckluZm8udWlkO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLmhlYWRlcnMpIHtcclxuICAgICAgICAgICAgZGF0YS5oZWFkZXJzID0gW1wiQXV0aG9yaXphdGlvblwiLCBgQmVhcmVyICR7TG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkudG9rZW59YF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYCVjID09PiBzZW5kICVjJHtkYXRhLmFwaX0gJWMke0pTT04uc3RyaW5naWZ5KGRhdGEuZGF0YSl9YCxcclxuICAgICAgICAgICAgYGNvbG9yOiM4MmNjZGQ7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2Y4YzI5MTtmb250LXdlaWdodDo3MDA7YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMueGhyLnNlbmQoXHJcbiAgICAgICAgLy8gICAgIGRhdGEuYmFzZVVybCArIGRhdGEuYXBpLFxyXG4gICAgICAgIC8vICAgICBkYXRhLmRhdGEsXHJcbiAgICAgICAgLy8gICAgIGRhdGEubWV0aG9kLFxyXG4gICAgICAgIC8vICAgICBkYXRhLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAvLyAgICAgZGF0YS5oZWFkZXJzXHJcbiAgICAgICAgLy8gKTtcclxuXHJcbiAgICAgICAgbGV0IHVyaSA9IGRhdGEuYmFzZVVybCArIGRhdGEuYXBpO1xyXG4gICAgICAgIGlmICghZGF0YS5hcGkpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkhpbnRWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7IHRleHQ6IGBodHRwIFx1NTczMFx1NTc0MFx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QWAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMueGhyLm9wZW4oXCJQT1NUXCIsIHVyaSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy54aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAvLyB0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC10eXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICB0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBgQmVhcmVyICR7TG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkudG9rZW59YCk7XHJcblxyXG4gICAgICAgIGxldCBzZW5kRGF0YTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEuZGF0YSkuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VuZERhdGEucHVzaChgJHtkfT0ke2RhdGEuZGF0YVtkXX1gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGE/LnR5cGUgPT0gQ29uZmlnR2FtZS5BcGlUeXBlQUQpIHtcclxuICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDAxKTtcclxuICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDEyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy54aHIuc2VuZChzZW5kRGF0YS5qb2luKFwiJlwiKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tSZXNvbHZlRXZlbnQgPSByZXNvbHZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAoZS5jb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbmREYXRhPy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kRGF0YS5lcnJvcihlLmNvZGUsIGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgSHR0cERhdGFDb250cm9sLmVycm9yKGUuY29kZSwgZS5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBgJWMgPD09IGJhY2sgJWMke3RoaXMuc2VuZERhdGEuYXBpfSBgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiNiOGU5OTQ7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6Izc4ZTA4Zjtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGUuZGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBIdHRwRGF0YUNvbnRyb2wuZm9yd2FyZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IHRoaXMuc2VuZERhdGEuYXBpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgY2FsbDogdGhpcy5zZW5kRGF0YT8uY2FsbCxcclxuICAgICAgICAgICAgICAgIHJlc29sdmVFdmVudDogdGhpcy5iYWNrUmVzb2x2ZUV2ZW50LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHByb2Nlc3NIYW5kbGVyKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5cclxuLy8gIEFkZExhbmRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRMYW5kVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgcHJpdmF0ZSBkYXRhOiB7IGlkOiBudW1iZXI7IGNhbGw6IEZ1bmN0aW9uIH07XHJcblxyXG4gICAgb25PcGVuZWQoZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvc3RfZ29sZFwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFVubG9jayxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWRkTGFuZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZF9idG5cIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRVbmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgTGFuZE9iaiB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuXHJcbi8vICBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMYWJlbCwgdGlwczpcIlx1NEVGN1x1NjgzQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMYWJlbDogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VJY29uLCB0aXBzOlwiXHU0RUY3XHU2ODNDaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgb2JqOiBMYW5kT2JqOyBjYWxsOiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIG9uT3BlbmVkKGU6IHsgb2JqOiBMYW5kT2JqOyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICBsZXQgbmV4dExhbmQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KGUub2JqLmxldmVsICsgMSk7XHJcbiAgICAgICAgdGhpcy5wcmljZUxhYmVsLnRleHQgPSBgXHU0RUY3XHU2ODNDXHVGRjFBJHtuZXh0TGFuZC5jb3N0LmNvdW50fWA7XHJcbiAgICAgICAgdGhpcy5wcmljZUljb24uc2tpbiA9IG5leHRMYW5kLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GaWVsZExldmVsVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidXBncmFkZUJ0blwiOlxyXG4gICAgICAgICAgICBjYXNlIFwidXBncmFkZUFkQnRuXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kVXBncmFkZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLm9iai5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUgPT0gXCJ1cGdyYWRlQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IFJldHVyblVzZXJJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzRGVzY1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNEZXNjVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGFuZWxOb2RlLCB0aXBzOlwiXHU2RURBXHU1MkE4XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIHBhbmVsTm9kZTogTGF5YS5QYW5lbDtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbE5vZGUudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc0Rlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIik7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzUmV3YXJkVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1Jld2FyZFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmludFR5cGUsIHRpcHM6XCJcdTY1NzRcdTY1NzBcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpJbnQsIGRlZmF1bHQ6MTAwMH0qL1xyXG4gICAgcHVibGljIGludFR5cGU6IG51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7fVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1Jld2FyZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCkge1xyXG4gICAgICAgIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkQm94LCB0aXBzOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRCb3g6IExheWEuQm94O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1MjE3XHU4ODY4XHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0O1xyXG5cclxuICAgIC8qKiAxXHU2NjJGXHU1OTdEXHU1M0NCXHU1MjE3XHU4ODY4IDIgXHU1MkEwXHU1OTdEXHU1M0NCICAzXHU1MjIwXHU5NjY0XHU1OTdEXHU1M0NCICovXHJcbiAgICBwcml2YXRlIHZpZXdTdGF0ZTogMSB8IDIgfCAzID0gMTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IG5ldyBBcnJheSgyMCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLml0ZW1SZW5kZXIpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXRlbVJlbmRlcihjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG5ld0JveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJuZXdfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBoZWFydEJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoZWFydF9ib3hcIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgZ29QbGF5QnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImdvX3BsYXlfYnRuXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGFwcGx5QnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImFwcGx5X2J0blwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBkZWxCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZGVsX2J0blwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBuZXdCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBkZWxCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMudmlld1N0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGVsQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRfZnJpZW5kXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMikgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQm94LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDU5MDsgLy85MTRcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWxfZnJpZW5kXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMykgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlID0gMztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuaGVpZ2h0ID0gOTE0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlc2NfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc0Rlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmV3YXJkX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNSZXdhcmRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGludFZpZXdEYXRhIHtcclxuICAgIC8qKiBcdTY1ODdcdTVCNTdcdTUxODVcdTVCQjkgKi9cclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIC8qKiBcdTc4NkVcdThCQTRcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTUzRDZcdTZEODhcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbmNlbENhbGw/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuLy9kZWZhdWx0IGNsYXNzIEhpbnRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGludFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRleHQsIHRpcHM6XCJcdTUxODVcdTVCQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRleHQ6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29uZmlybUJ0biwgdGlwczpcIlx1Nzg2RVx1OEJBNFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29uZmlybUJ0bjogTGF5YS5JbWFnZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjYW5jZWxCdG4sIHRpcHM6XCJcdTUzRDZcdTZEODhcdTYzMDlcdTk0QUVcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNhbmNlbEJ0bjogTGF5YS5JbWFnZTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IEhpbnRWaWV3RGF0YTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IHRoaXMuZGF0YT8udGV4dCB8fCBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYW5jZWxDYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCAmJiB0aGlzLmRhdGEuY2FuY2VsQ2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDI1MjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDQ1ODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbmNlbENhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FuY2VsQ2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5IaW50Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbmZpcm1cIjpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5IaW50Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2FkQmFyLCB0aXBzOlwibG9hZCBiYXJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCYXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRCb3gsIHRpcHM6XCJcdTUyQTBcdThGN0RcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2dpbkJveCwgdGlwczpcIlx1NzY3Qlx1OTY0Nlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9naW5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1c2VySW5wdXQsIHRpcHM6XCJcdTc2N0JcdTk2NDZcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHVzZXJJbnB1dDogTGF5YS5UZXh0SW5wdXQgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdThGREJcdTVFQTZcdTY3NjFcdTlFRDhcdThCQTRcdTVCQkRcdTVFQTYgKi9cclxuICAgIHByaXZhdGUgbG9hZEJhck9sZFdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIG9uT3BlbmVkKGQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG5cclxuICAgICAgICBpZiAoTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCk/LmlzTG9naW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNhbGxcIik7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhd2FrZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubG9hZExhYmVsKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5sb2FkTGFiZWwudGV4dCA9IFwiTG9hZC4uLi4wJVwiO1xyXG4gICAgICAgIHRoaXMubG9hZEJhck9sZFdpZHRoID0gdGhpcy5sb2FkQmFyLndpZHRoO1xyXG4gICAgICAgIHRoaXMubG9hZEJhci53aWR0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpbl9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ2luKCkge1xyXG4gICAgICAgIGlmIChMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbikge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxvZ2luVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoZDogTmV0SW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHRoaXMuZGF0YS5jYWxsKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogKGNvZGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklucHV0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sb2dpbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50OiB0aGlzLnVzZXJJbnB1dC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNhbGw6IChkOiBOZXRJbml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkgdGhpcy5kYXRhLmNhbGwoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiAoY29kZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5wdXQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUHJvZ3Jlc3Modikge1xyXG4gICAgICAgIHRoaXMubG9hZEJhci53aWR0aCA9IHYgKiB0aGlzLmxvYWRCYXJPbGRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vZmYoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIHRoaXMsIHRoaXMubG9hZFByb2dyZXNzKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuXHJcbi8vICBNYWlsVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLk1haWxWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UsIHsgTGFuZE9iaiB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxhbnREYXRhQmFzZSB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCJzcmMvdmlldy9NYWluVmlld1wiO1xyXG5pbXBvcnQgeyBTaG9wVmlld0RhdGEgfSBmcm9tIFwic3JjL3ZpZXcvU2hvcFZpZXdcIjtcclxuXHJcbi8vICBGaWVsZENvbXBvbmVudCBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuLyoqXHJcbiAqIFx1NzUzMFx1NTczMFx1N0VDNFx1NEVGNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OWljb24gKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgaWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU4MjgyXHU3MEI5ICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGZpZWxkTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU2NzA5XHU2OTBEXHU3MjY5XHU2NUY2XHU3Njg0XHU5NjM0XHU1RjcxICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHNoYWRvdzogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmllbGRFbXB0eVJlcywgdGlwczpcIlx1ODlFM1x1OTUwMVx1NTQwRVx1NTcxRlx1NTczMFx1N0VCOVx1NzQwNlwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGZpZWxkRW1wdHlSZXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogXHU3QjQ5XHU3RUE3XHU1NkZFXHU3MjQ3ICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGx2Tm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1MDEyXHU4QkExXHU2NUY2XHU1QkI5XHU1NjY4Ki9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgdGltZUJveDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogXHU1MDEyXHU4QkExXHU2NUY2bGFiZWwgKi9cclxuICAgIHByaXZhdGUgY291bnREb3duTGI6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOGljb25cdTg4QzVcdTk5NzAgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTYyMTBcdTcxOUZcdTUzRUZcdTY1MzZpY29uICovXHJcbiAgICBwcml2YXRlIG1hdHVyZU5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTNFRlx1NjRBRFx1NzlDRFx1N0E3QVx1NTczMGljb24gKi9cclxuICAgIHByaXZhdGUgZW1wdHlGaWVsZE5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnVubG9ja0ljb24sIHRpcHM6XCJcdTYyRDNcdTVDNTVcdTU3MUZcdTU3MzBpY29uXHU1NzMwXHU1NzQwXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgdW5sb2NrSWNvbjogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaWVsZElkLCB0aXBzOlwiXHU1NzFGXHU1NzMwaWRcIiwgdHlwZTpOdW1iZXIsfSovXHJcbiAgICBmaWVsZElkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU2RDZFXHU1MkE4XHU1MkE4XHU3NTNCICovXHJcbiAgICBwcml2YXRlIHRvcFN0YXRlSWNvblR3ZWVuOiBMYXlhLlRpbWVMaW5lO1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OVx1NTJBOFx1NzUzQiAqL1xyXG4gICAgcHJpdmF0ZSBwbGFudEljb25Ud2VlbjogTGF5YS5UaW1lTGluZTtcclxuXHJcbiAgICAvKiogXHU1RUZBXHU3QjUxXHU0RTJEICovXHJcbiAgICBidWlsZEluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZGF0YTogTGFuZE9iajtcclxuXHJcbiAgICBwcml2YXRlIGxhbmRMaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPjtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZE5vZGUgPSA8TGF5YS5JbWFnZT50aGlzLm93bmVyO1xyXG4gICAgICAgIHRoaXMuY291bnREb3duTGIgPSB0aGlzLnRpbWVCb3guZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudERvd25MYlwiKSBhcyBhbnk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmljb24uc2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1xyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfZmllbGQpXHJcbiAgICB1cGRhdGVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMubGFuZExpc3QgPSBMYW5kU2VydmljZS5saXN0O1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROb2RlLnNraW4gPSB0aGlzLmZpZWxkRW1wdHlSZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24oQm9vbGVhbih0aGlzLmRhdGEucHJvZHVjdElkKSk7XHJcbiAgICAgICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkICYmIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgLy9cdTYyMTBcdTk1N0ZcdTRFMkRcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YS5wcm9kdWN0SWQpLmdyb3dpbmdJY29uO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gdGhpcy51bmxvY2tJY29uO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVpY29uXHU3Njg0XHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd0ljb24oc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaWNvbi52aXNpYmxlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RVx1NzJCNlx1NjAwMWljb25cdTdFQjlcdTc0MDZcclxuICAgICAqIEBwYXJhbSBza2luVHlwZSAxIFx1NkQ0N1x1NkMzNFx1NTJBMFx1OTAxRlx1NzJCNlx1NjAwMSAyIFx1NUVGQVx1N0I1MVx1NzJCNlx1NjAwMSAzIFx1NjIxMFx1NzE5Rlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZUljb25Ta2luKHNraW5UeXBlOiAxIHwgMiB8IDMpIHtcclxuICAgICAgICBzd2l0Y2ggKHNraW5UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX3NwZWVkVXAucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfbGFuZFVwZGF0ZUJ0bjIucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfaGFydmVzdC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTg3Nlx1OTBFOGljb25cdTUyQThcdTc1M0JcclxuICAgICAqL1xyXG4gICAgdG9wU3RhdGVJY29uQW5pKHBsYXk6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMudG9wU3RhdGVJY29uVHdlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IExheWEuVGltZUxpbmUudG8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbixcclxuICAgICAgICAgICAgICAgIHsgeTogdGhpcy50b3BTdGF0ZUljb24ueSAtIDUwIH0sXHJcbiAgICAgICAgICAgICAgICA4MDAsXHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICkudG8odGhpcy50b3BTdGF0ZUljb24sIHsgeTogdGhpcy50b3BTdGF0ZUljb24ueSB9LCA4MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IHBsYXk7XHJcblxyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU2NUY2XHU5NUY0XHU1QkI5XHU1NjY4XHU3Njg0XHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1RpbWVCb3goc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RVx1OTYzNFx1NUY3MVx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dTaGFkb3dJY29uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNoYWRvdy52aXNpYmxlID0gc2hvdztcclxuICAgICAgICB0aGlzLnNoYWRvdy5hY3RpdmUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2OTBEXHU3MjY5XHU1MkE4XHU3NTNCXHU2NEFEXHU2NTNFXHJcbiAgICAgKiBAcGFyYW0gcGxheVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBsYW50SWNvbkFuaShwbGF5OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYW50SWNvblR3ZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4gPSBMYXlhLlRpbWVMaW5lLnRvKHRoaXMuaWNvbiwgeyBza2V3WDogNiB9LCA5MDApXHJcbiAgICAgICAgICAgICAgICAudG8odGhpcy5pY29uLCB7IHNrZXdYOiAtNiB9LCAxODAwKVxyXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMuaWNvbiwgeyBza2V3WDogMCB9LCA5MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKE1hdGgucmFuZG9tKCkgKiAxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuLnBsYXkobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUwMTJcdThCQTFcdTY1RjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYi50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyh0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0LS07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93bkxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID0gMDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTUwMTJcdThCQTFcdTY1RjZcdTdFRDNcdTY3NUYgXCIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YT8ucHJvZHVjdElkKT8ubWF0dXJlSWNvbjtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1aWxkSW5nKSB0aGlzLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1N0I0OVx1N0VBN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxldmVsKCkge1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfbGV2ZWwke3RoaXMuZGF0YS5sZXZlbH0ucG5nYDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTJBMFx1OTAxRlxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5sYW5kX3NwZWVkX3VwKVxyXG4gICAgcHJpdmF0ZSBzcGVlZFVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGE/Lm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCAtPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiYWxsX3NwZWVkX3VwX3RpbWVcIilcclxuICAgICAgICAgICAgICAgIC52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU3QTdBXHU1NzFGXHU1NzMwXHJcbiAgICAgKi9cclxuICAgIGNsZWFyRmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGF0YS5wcm9kdWN0SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaWNvbi5za2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmllbGRJZCwgdGhpcy5idWlsZEluZyk7XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgLy9cdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVpbGRJbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KHRoaXMuZGF0YS5sZXZlbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxldmVsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTZFRTFcdTdFQTdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5IaW50Vmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7IHRleHQ6IGBcdTVERjJcdTZFRTFcdTdFQTdgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1MkEwXHU5MDFGXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TcGVlZFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NjUzNlx1ODNCN1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW50QW1vdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZEdhdGhlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJnYXRoZXJcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29sZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2ZXJ0aXNlVGltZXM6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFudEFtb3VudCA9IGQuYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5hZGQodGhpcy5kYXRhLnByb2R1Y3RJZCwgZC5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL1x1NjUzNlx1ODNCN1x1NzY4NFx1NjkwRFx1NzI2OVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGFudE9iaiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldCh0aGlzLmRhdGEucHJvZHVjdElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdDogYW55W10gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBwbGFudE9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcGxhbnRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU4M0I3XHU1Rjk3XHU3Njg0XHU5MUQxXHU1RTAxXHU5NEJCXHU3N0YzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGxhbnRPYmouZ2Fpbi5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChkLm9iai5pZCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb3VudDogZC5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBvc1R5cGU6IENvbmZpZ0dhbWUuZGlhbW9uZElkID09IGQub2JqLmlkID8gMiA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJld2FyZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwbGFudE9iai5nYWluLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzd2l0Y2ggKGQub2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgQ29uZmlnR2FtZS5kaWFtb25kSWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBVc2VySW5mby5kaWFtb25kICs9IGQuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY2FzZSBDb25maWdHYW1lLmdvbGRJZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFVzZXJJbmZvLmdvbGQgKz0gZC5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vXHU3OUNEXHU4M0RDXHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywge1xyXG4gICAgICAgICAgICAgICAgcGFybTogPFNob3BWaWV3RGF0YT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFybTogeyBsYW5kSWQ6IHRoaXMuZmllbGRJZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiBQbGFudERhdGFCYXNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKS5wcm9kdWN0SWQgPSBkLmJhc2UuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCkubWF0dXJlVGltZUxlZnQgPSBkLmJhc2UubWF0dXJlX3RpbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgLy9cdTg5RTNcdTk1MDFcdTU3MUZcdTU3MzBcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkFkZExhbmRWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZmllbGRJZCxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHVyZVRpbWVMZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYW5kU2VydmljZS5hZGRMYW5kKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wbGFudEljb25Ud2VlbiA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8qKlxyXG4gKiBcdTk4REVcdTkxRDFcdTVFMDFcdTY1NzBcdTkxQ0ZcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0RmxvYXRSZXdhcmRPYmoge1xyXG4gICAgLyoqIFx1OEQ3N1x1NzBCOVx1NTNDMlx1ODAwM1x1ODI4Mlx1NzBCOSBcdTlFRDhcdThCQTRcdTRGMUFcdTYyOEFcdTY1NzBcdTkxQ0ZcdTc2ODRcdTRFMUNcdTg5N0ZcdTUyQTBcdTUyMzBcdThGRDlcdTkxQ0NcdUZGMENcdTYyNDBcdTRFRTVcdTRFMERcdTg5ODFcdTZERkJIQm94XHU2MjE2XHU2NjJGVkJveCAqL1xyXG4gICAgbm9kZTogTGF5YS5Cb3g7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBsaXN0OiB7XHJcbiAgICAgICAgLyoqIFx1ODlFM1x1Njc5MFx1NzY4NFx1OEQ0NFx1NkU5MFx1NjU3MFx1NjM2RSBcdTVGQzVcdTk4N0JcdTg5ODFcdTY3MDlpY29uICovXHJcbiAgICAgICAgb2JqOiBhbnk7XHJcbiAgICAgICAgLyoqIFx1NjU3MFx1OTFDRiAqL1xyXG4gICAgICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICAgICAgLyoqIFx1N0VDOFx1NzBCOVx1NEY0RFx1N0Y2RSAxIFx1OTFEMVx1NUUwMSAyIFx1OTRCQlx1NzdGMyAzIFx1NEVEM1x1NUU5MyAqL1xyXG4gICAgICAgIHBvc1R5cGU6IDEgfCAyIHwgMztcclxuICAgIH1bXTtcclxuICAgIG5vdEZseT86IGJvb2xlYW47XHJcbiAgICAvKiogXHU1MkE4XHU3NTNCXHU2NEFEXHU2NTNFXHU3RUQzXHU2NzVGXHU1NkRFXHU4QzAzICovXHJcbiAgICBjYWxsQmFjaz86IHsgKCk6IHZvaWQgfTtcclxufVxyXG5cclxuLy8gIE1haW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkTGFuZExheWVyLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRMYW5kTGF5ZXI6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZE5vZGUsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmROb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb2xkTm9kZSwgdGlwczpcIlx1OTFEMVx1NUUwMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29sZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmF2YXRhck5vZGUsIHRpcHM6XCJcdTU5MzRcdTUwQ0ZcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGF2YXRhck5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRCb3gsIHRpcHM6XCJcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxhbmRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjZW50ZXJCb3gsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTUzM0FcdTU3REZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm9yZGVyQm94LCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsYW5kVXBMYXllciwgdGlwczpcIlx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1N0E5N1x1NTNFM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGFuZFVwTGF5ZXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BMYXllck9uU3RhZ2UsIHRpcHM6XCJcdTU3MjhcdTRFM0JcdTU3M0FcdTY2NkZcdTRFMEFcdTk3NjJcdTc2ODRcdTRFMDBcdTRFMkFcdTY3MDBcdTRFMEFcdTVDNDJcdTc2ODRcdTdBN0FcdTVDNDJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcExheWVyT25TdGFnZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wR29sZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTkxRDFcdTVFMDFpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BHb2xkSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wRGlhbW9uZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTk0QkJcdTc3RjNpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BEaWFtb25kSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6d2FyZWhvdXNlQnRuLCB0aXBzOlwiXHU0RUQzXHU1RTkzXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB3YXJlaG91c2VCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHVGRjBDXHU5OERFXHU3MjY5XHU1NEMxXHU3NkY4XHU1MTczXHJcbiAgICAvKiogQHByb3Age25hbWU6Z2V0UmV3YXJkUHJlZmFiLCB0aXBzOlwiXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHU5ODg0XHU4QkJFXCIsIHR5cGU6UHJlZmFifSovXHJcbiAgICBwcml2YXRlIGdldFJld2FyZFByZWZhYjogTGF5YS5QcmVmYWIgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZsb2F0UmV3YXJkSWNvbiwgdGlwczpcIlx1NTk1Nlx1NTJCMVx1OThERVx1NTJBOFx1NzUzQmljb25cIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgZmxvYXRSZXdhcmRJY29uOiBMYXlhLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRlc3RCdG4sIHRpcHM6XCJcdTU5N0RcdTUzQ0JcdTZENEJcdThCRDVcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRlc3RCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU1QkEwXHU3MjY5XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0Qm94LCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU3RUM0XHU0RUY2IFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBsYW5kTGlzdDogRmllbGRDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJyZXMvbG9hZGluZ0JnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfd29vZHRpdGxlLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmVIb3VzZUJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmViZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3NoZWxmLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfcG9wVXBCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2xhbmRCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvdXNldG9wLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyBcInJlcy9pbWdfaG9tZXBhZ2VCZzMucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2ltZ19ob21lcGFnZUJnMi5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX2hvbWVwYWdlQmcxLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfZmFybWxhbmRMb2dvLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5wbmdcIixcclxuICAgICAgICBdLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZW5kc1dpdGgoXCJwbmdcIikpIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgLy8gUmVzLnNjZW5lcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChlLmVuZHNXaXRoKFwicG5nXCIpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMudG9wTGF5ZXJPblN0YWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxhbmRCb3gubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LnB1c2godGhpcy5sYW5kQm94LmdldENoaWxkQXQoeCkuZ2V0Q29tcG9uZW50KEZpZWxkQ29tcG9uZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhbmRMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuZmllbGRJZCAtIGIuZmllbGRJZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfZmllbGQpO1xyXG4gICAgICAgICAgICB0aGlzLmhpdExhbmRBZGQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NzkzQVx1NjYzRVx1NzkzQVx1NjI2OVx1NUVGQWljb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoaXRMYW5kQWRkKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhbmRMaXN0W3hdLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImRpYW1vbmRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbW9uZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiZ29sZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb2xkTm9kZS52YWx1ZSA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJhdmF0YXJcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJ3YXJlUGV0SWRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMucGV0Qm94LmdldENoaWxkQnlOYW1lKFwiZG9nXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KGUpLmljb247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcInBldFZpdGFsaXR5XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy9cdTY2RjRcdTY1QjBcdTVCQTBcdTcyNjlcdTRGNTNcdTUyOUJcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBldEJveC52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhciA9IHRoaXMucGV0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJveFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ2aXRhbGl0eV9iYXJcIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gZSAvIFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5nZXQoVXNlckluZm8ud2FyZVBldElkKS52aXRhbGl0eV9tYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXIud2lkdGggPSAxMzAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImRpZ2VzdENvdW50RG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLCB0aGlzLmRpZ2VzdENvdW50RG93bik7XHJcbiAgICAgICAgICAgICAgICAvL1x1NUJBMFx1NzI2OVx1OTcwMFx1ODk4MVx1NkQ4OFx1ODAxN1x1OThERlx1NzI2OVx1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGV0Qm94LnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoZSAqIDEwMDAsIHRoaXMsIHRoaXMuZGlnZXN0Q291bnREb3duKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTGFuZExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU9yZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVCQTBcdTcyNjlcdTdCMTFcdTZEODhcdTUzMTZcdTVCOUFcdTY1RjZcdTU2NjhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkaWdlc3RDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBwZXQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KFVzZXJJbmZvLndhcmVQZXRJZCk7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLnBldFZpdGFsaXR5IC0gcGV0LnZpdGFsaXR5X2NvbnN1bWUgPD0gMCkge1xyXG4gICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgLT0gcGV0LnZpdGFsaXR5X2NvbnN1bWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IENvbmZpZ0dhbWUucGV0RGlnZXN0SW50ZXJ2YWxUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oQXBpSHR0cC5sb2dpbilcclxuICAgIHByaXZhdGUgZ2FtZUluaXQoZDogTmV0SW5pdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG5cclxuICAgICAgICAvLyBsZXQgYSA9IGQuZGF0YS5sYW5kTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExhbmRMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRhc2tcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNpZ25JblwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNpZ25JblZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTWFpbFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoZWFkXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2V0dGluZ1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YXJlaG91c2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2ZlZWRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAyIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvZ1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDIgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib3JkZXJfYm94XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZnJpZW5kc1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZFwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kTGV2ZWxVcFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hMYW5kTGV2ZWxVcCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXlHZXRSZXdhcmRBbmkoe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIG5vZGU6IHRoaXMudGVzdEJ0biBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB7IG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KDEwMDEpLCBjb3VudDogMTAwLCBwb3NUeXBlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksIGNvdW50OiAxMDAsIHBvc1R5cGU6IDEgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeyBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldCgxMDAxKSwgY291bnQ6IDEwMCwgcG9zVHlwZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIF0sXHJcbiAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfdXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoTGFuZExldmVsVXAoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU4QkEyXHU1MzU1XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcilcclxuICAgIHByaXZhdGUgdXBkYXRlT3JkZXIoKSB7XHJcbiAgICAgICAgbGV0IGJveCA9IHRoaXMub3JkZXJCb3gsXHJcbiAgICAgICAgICAgIGQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJvcmRlclwiKS5nZXQoVXNlckluZm8ub3JkZXJMZXZlbCArIDEpLFxyXG4gICAgICAgICAgICByZXdhcmQ6IFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgICAgICAgICAgcmV3YXJkQ291bnQ6IG51bWJlciA9IDAsXHJcbiAgICAgICAgICAgIGN1ckNvdW50ID0gMCxcclxuICAgICAgICAgICAgbWF4Q291bnQgPSAwLFxyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgaWYgKCFkKSByZXR1cm4gY29uc29sZS5sb2coXCJcdTdCNDlcdTdFQTdcdTVERjJcdTVCOENcIik7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA0OyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtX1wiICsgeCkgYXMgTGF5YS5Cb3g7XHJcblxyXG4gICAgICAgICAgICBpZiAoZC5jb25kaXRpb25beF0pIHtcclxuICAgICAgICAgICAgICAgIGN1ckNvdW50ID0gV2FyZWhvdXNlU2VydmljZS5nZXRPbmUoZC5jb25kaXRpb25beF0ucGxhbnQuaWQpPy5jb3VudCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQgPSBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyQ291bnQgPj0gbWF4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZC5jb25kaXRpb25beF0ucGxhbnQuaWNvbjtcclxuICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtjdXJDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgICAgIDg3ICogKGN1ckNvdW50IC8gbWF4Q291bnQgPiAxID8gMSA6IGN1ckNvdW50IC8gbWF4Q291bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZC5jb25kaXRpb25beF0ucGxhbnQuZ2Fpbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUub2JqLmlkID09PSBDb25maWdHYW1lLmdvbGRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkID0gZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArPSBlLmNvdW50ICogbWF4Q291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJld2FyZCkge1xyXG4gICAgICAgICAgICBsZXQgYnRuQm94ID0gYm94LmdldENoaWxkQnlOYW1lKFwiYnRuX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuICAgICAgICAgICAgKGJ0bkJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKGJ0bkJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gYCR7XHJcbiAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgIH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVfdGl0bGVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTVCOENcdTYyMTAke1xyXG4gICAgICAgICAgICBVc2VySW5mby5vcmRlckxldmVsICsgMVxyXG4gICAgICAgIH1cdTdFQTdcdThCQTJcdTUzNTVgO1xyXG5cclxuICAgICAgICBpZiAocHJvZ3Jlc3MgPT0gZC5jb25kaXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAub3JkZXJSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJJZDogVXNlckluZm8ub3JkZXJMZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGQuY29uZGl0aW9uLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5yZWR1Y2VBbW91bnQoZS5wbGFudC5pZCwgZS5jb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUdldFJld2FyZEFuaSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IGJveC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ib3hcIikgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5nb2xkSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVPcmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5vcmRlckxldmVsKys7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMDdcdTYzNjJcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN3aXRjaExhbmRMZXZlbFVwKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYmcgPSB0aGlzLmxhbmRVcExheWVyLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICBiZy5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oYmcsIHsgYWxwaGE6IDAuNzUgfSwgMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5nZXRDaGlsZEJ5TmFtZShcImxhbmRfb3V0ZXJcIikuYWRkQ2hpbGQodGhpcy5sYW5kQm94KTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVGFibGVBbmFseXplLnRhYmxlKFwibGFuZExldmVsXCIpLmdldChlLmRhdGEubGV2ZWwgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlLmJ1aWxkSW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIGJnLFxyXG4gICAgICAgICAgICAgICAgeyBhbHBoYTogMCB9LFxyXG4gICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJCb3guYWRkQ2hpbGQodGhpcy5sYW5kQm94KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93VGltZUJveCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUuYnVpbGRJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbihlLmRhdGEubWF0dXJlVGltZUxlZnQgPyAxIDogMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGUudG9wU3RhdGVJY29uQW5pKEJvb2xlYW4oZS5kYXRhLnByb2R1Y3RJZCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY0QURcdTY1M0VcdTgzQjdcdTUzRDZcdTU5NTZcdTUyQjFcdTUyQThcdTc1M0JcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkKVxyXG4gICAgcHJpdmF0ZSBwbGF5R2V0UmV3YXJkQW5pKG9iajogR2V0RmxvYXRSZXdhcmRPYmopIHtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqLmNhbGxCYWNrKSBvYmouY2FsbEJhY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb2JqLmxpc3QuZm9yRWFjaCgoZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogTGF5YS5Cb3ggPSBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q3JlYXRlRnVuKFxyXG4gICAgICAgICAgICAgICAgXCJmbG9hdFJld2FyZEJveFwiLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZXdhcmRQcmVmYWIuY3JlYXRlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZXdhcmRQcmVmYWJcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5vZGUueSA9IG9iai5ub2RlLmdldF9oZWlnaHQoKSAqIG9iai5ub2RlLmFuY2hvclkgLSBpICogNjA7XHJcbiAgICAgICAgICAgIC8vIG5vZGUueCA9IG9iai5ub2RlLmdldF93aWR0aCgpICogb2JqLm5vZGUuYW5jaG9yWDtcclxuICAgICAgICAgICAgbGV0IGljb24gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpY29uLnNraW4gPSBkLm9iaj8uaWNvbiB8fCBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSA1MCAvIGljb24ud2lkdGg7XHJcbiAgICAgICAgICAgIGljb24uc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICAgICAgbm9kZS5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iai5ub2RlLmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQoKSkpO1xyXG4gICAgICAgICAgICAvLyBvYmoubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbGV0IG5vZGVOZXdQb3MgPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludCgpKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbm9kZS5wb3Mobm9kZU5ld1Bvcy54ICsgb2JqLm5vZGUuZ2V0X3dpZHRoKCkgKiBvYmoubm9kZS5hbmNob3JYLCBub2RlTmV3UG9zLnkgLSBpICogNjApO1xyXG4gICAgICAgICAgICB0aGlzLnRvcExheWVyT25TdGFnZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgKG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IFwieFwiICsgZC5jb3VudDtcclxuXHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAgICAgeyB5OiBub2RlLnkgLSA0MCwgYWxwaGE6IDEgfSxcclxuICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgKGU6IExheWEuQm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlcihcImZsb2F0UmV3YXJkQm94XCIsIGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvc0ljb24gPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubG9jYWxUb0dsb2JhbChMYXlhLlBvaW50LmNyZWF0ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoubm90Rmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsb2F0SWNvbjogTGF5YS5JbWFnZSA9IExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXRSZXdhcmRJY29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXRSZXdhcmRJY29uLmNyZWF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdFJld2FyZEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5za2luID0gZC5vYmouaWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnBvcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQb3NJY29uLnggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIwICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBvc0ljb24ueSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjAgKiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmFkZENoaWxkKGZsb2F0SWNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnpPcmRlciA9IDk5OTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcEljb246IExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkLnBvc1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wR29sZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wRGlhbW9uZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMud2FyZWhvdXNlQnRuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wR29sZEljb25Qb3MgPSB0b3BJY29uLmxvY2FsVG9HbG9iYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLlBvaW50KHRvcEljb24ud2lkdGggLyAyLCB0b3BJY29uLmhlaWdodCAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKHRvcEdvbGRJY29uUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IGxvY2FsUG9zLngsIHk6IGxvY2FsUG9zLnkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tJbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZTogTGF5YS5JbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKFwiZmxvYXRSZXdhcmRJY29uXCIsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmbG9hdEljb25dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MCAqIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFtub2RlXVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIDUwICogaSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgT3JkZXJCYXNlLCBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcblxyXG4vL2NsYXNzIE9yZGVyVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6b3JkZXJMaXN0LCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZSx9Ki9cclxuICAgIHByaXZhdGUgb3JkZXJMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Mb2NrUmVzLCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU2MzA5XHU5NEFFXHU2NzJBXHU1QjhDXHU2MjEwXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgYnRuTG9ja1Jlczogc3RyaW5nID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5SZXNDdXIsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTYzMDlcdTk0QUVcdTVGNTNcdTUyNERcdTcyQjZcdTYwMDFcdTYzMDlcdTk0QUVcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBidG5SZXNDdXI6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBkYXRhTGlzdDogT3JkZXJCYXNlW107XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcIm9yZGVyXCIpLmxpc3Q7XHJcbiAgICAgICAgbGV0IG9yZGVyT2xkTHYgPSBVc2VySW5mby5vcmRlckxldmVsIHx8IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmlkICogKGIuaWQgPD0gb3JkZXJPbGRMdiA/IC0xIDogMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QuYXJyYXkgPSB0aGlzLmRhdGFMaXN0O1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVyTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyTGlzdChjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuZGF0YUxpc3RbaV0sXHJcbiAgICAgICAgICAgIHJld2FyZDogUmV3YXJkQ3VycmVuY3lCYXNlLFxyXG4gICAgICAgICAgICByZXdhcmRDb3VudDogbnVtYmVyID0gMCxcclxuICAgICAgICAgICAgY3VyQ291bnQgPSAwLFxyXG4gICAgICAgICAgICBtYXhDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gMCxcclxuICAgICAgICAgICAgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJvcmRlcl9sdlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7ZC5pZH1cdTdFQTdcdThCQTJcdTUzNTVgO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDQ7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtX1wiICsgeCkgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgICAgIGlmIChkLmNvbmRpdGlvblt4XSkge1xyXG4gICAgICAgICAgICAgICAgY3VyQ291bnQgPSBXYXJlaG91c2VTZXJ2aWNlLmdldE9uZShkLmNvbmRpdGlvblt4XS5wbGFudC5pZCk/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgICAgICAgICBtYXhDb3VudCA9IGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJDb3VudCA+PSBtYXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmNvbmRpdGlvblt4XS5wbGFudC5pY29uO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuaWQgPCBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHttYXhDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID0gODc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtjdXJDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgODcgKiAoY3VyQ291bnQgLyBtYXhDb3VudCA+IDEgPyAxIDogY3VyQ291bnQgLyBtYXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkLmNvbmRpdGlvblt4XS5wbGFudC5nYWluLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5vYmouaWQgPT09IENvbmZpZ0dhbWUuZ29sZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmQgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICs9IGUuY291bnQgKiBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGlmIChkLmlkID4gVXNlckluZm8ub3JkZXJMZXZlbCArIDEpIHtcclxuICAgICAgICAgICAgLy9cdTY3MkFcdTZGQzBcdTZEM0JcclxuICAgICAgICAgICAgYnRuLnNraW4gPSB0aGlzLmJ0bkxvY2tSZXM7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZC5pZCA9PSBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAgICAgLy9cdTVGNTNcdTUyNERcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gdGhpcy5idG5SZXNDdXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NURGMlx1NUI4Q1x1NjIxMFwiKTtcclxuICAgICAgICAgICAgICAgIC8vXHU1REYyXHU1QjhDXHU2MjEwXHJcbiAgICAgICAgICAgICAgICBidG4uZ3JheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXdhcmQpIHtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgKyR7XHJcbiAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgIH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk9yZGVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cERhdGFDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBEYXRhQ29udHJvbFwiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcblxyXG4vL2NsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm11c2ljTm9kZSwgdGlwczpcIlx1OTdGM1x1NEU1MFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbXVzaWNOb2RlOiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c291bmROb2RlLCB0aXBzOlwiXHU5N0YzXHU2NTQ4XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzb3VuZE5vZGU6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLm11c2ljQ2hhbmdlKCk7XHJcbiAgICAgICAgdGhpcy5zb3VuZENoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU2V0dGluZ1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibXVzaWNcIjpcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ubXVzaWNNdXRlZCA9ICFDb3JlLmF1ZGlvLm11c2ljTXV0ZWQ7XHJcbiAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJtdXNpY1wiLCBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubXVzaWNDaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNvdW5kXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQgPSAhQ29yZS5hdWRpby5zb3VuZE11dGVkO1xyXG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwic291bmRcIiwgQ29yZS5hdWRpby5zb3VuZE11dGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdW5kQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwic2lnbl9vdXRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTc4NkVcdThCQTRcdTg5ODFcdTkwMDBcdTUxRkFcdTc2N0JcdTVGNTVcdUZGMUZcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ0b2tlblwiLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmxvZ2luT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5sb2dpbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTG9naW5WaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5sb2dpbl9nYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbXVzaWNDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5tdXNpY05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBjb25zdCBpY29uID0gYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG5cclxuICAgICAgICBsZXQgbXVzaWMgPSBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXVzaWMpO1xyXG5cclxuICAgICAgICBpY29uLnggPSAhbXVzaWMgPyAtMTQgOiA5MTtcclxuICAgICAgICBpY29uLnNraW4gPSAhbXVzaWMgPyBgZ2FtZS9pbWdfbXVzaWNPbkJ0bi5wbmdgIDogXCJnYW1lL2ltZ19tdXNpY09mZkJ0bi5wbmdcIjtcclxuICAgICAgICBib3guc2tpbiA9ICFtdXNpYyA/IGBnYW1lL2ltZ19zd2l0Y2hPbi5wbmdgIDogXCJnYW1lL2ltZ19zd2l0aE9mZi5wbmdcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNvdW5kQ2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnN0IGJveCA9IHRoaXMuc291bmROb2RlLmdldENoaWxkQnlOYW1lKFwiYm94XCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBsZXQgc291bmQgPSBDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQ7XHJcbiAgICAgICAgaWNvbi54ID0gIXNvdW5kID8gLTE0IDogOTE7XHJcbiAgICAgICAgaWNvbi5za2luID0gIXNvdW5kID8gYGdhbWUvaW1nX211c2ljT25CdG4ucG5nYCA6IFwiZ2FtZS9pbWdfbXVzaWNPZmZCdG4ucG5nXCI7XHJcbiAgICAgICAgYm94LnNraW4gPSAhc291bmQgPyBgZ2FtZS9pbWdfc3dpdGNoT24ucG5nYCA6IFwiZ2FtZS9pbWdfc3dpdGhPZmYucG5nXCI7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IEZlZWRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVlZERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IEZlZWRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBGZWVkU2VydmljZSB7XHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBsaXN0OiBGZWVkRGF0YUJhc2VbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NTcwXHU2MzZFXHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwiZmVlZFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogZCxcclxuICAgICAgICAgICAgICAgIGxvY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZlZWRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IHsgRmVlZEJhc2UsIFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgRmxvYXRWaWV3U2hvd0FuaSBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IEZlZWRTZXJ2aWNlLCB7IEZlZWREYXRhQmFzZSB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvRmVlZFNlcnZpY2VcIjtcclxuaW1wb3J0IFBldFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9QZXRTZXJ2aWNlXCI7XHJcbmltcG9ydCBQbGFudFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaG9wVmlld0RhdGEge1xyXG4gICAgLyoqIFx1NzU0Q1x1OTc2MnRhZ1x1NEUwQlx1NjgwN2lkICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgcGFybT86IGFueTtcclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTGlzdCwgdGlwczpcIlx1NTU0Nlx1NTRDMVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YnRuQm94VG9wLCB0aXBzOlwiXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU1MjE3XHU4ODY4XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBidG5Cb3hUb3A6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJvdHRvbUJveCwgdGlwczpcIlx1NUU5NVx1OTBFOFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYm90dG9tQm94OiBMYXlhLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8vXHU3OUNEXHU1QjUwXHJcbiAgICAvKiogQHByb3Age25hbWU6c2VlZERlc2MsIHRpcHM6XCJcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNlZWREZXNjOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTptYXR1cmVUaW1lLCB0aXBzOlwiXHU2MjEwXHU3MTlGXHU2NUY2XHU5NUY0XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBtYXR1cmVUaW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTptYXR1cmVHYWluQm94LCB0aXBzOlwiXHU2NTM2XHU3NkNBXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBtYXR1cmVHYWluQm94OiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2NrQnRuQm94LCB0aXBzOlwiXHU4OUUzXHU5NTAxXHU2MzA5XHU5NEFFXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb2NrQnRuQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUJ1eUJ0biwgdGlwczpcIlx1OEQyRFx1NEU3MFx1NjMwOVx1OTRBRVx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTk5NzJcdTY1OTlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmZWVkQnV5QnRuLCB0aXBzOlwiXHU5OTcyXHU2NTk5XHU4RDJEXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBmZWVkQnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmZWVkRGVzYywgdGlwczpcIlx1OTk3Mlx1NjU5OVx1NjNDRlx1OEZGMFx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZmVlZERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8vXHU1QkEwXHU3MjY5XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0SWNvbiwgdGlwczpcIlx1NUJBMFx1NzI2OWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldEljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldERlc2MsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldE5hbWUsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldE5hbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5TWF4LCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU0RTBBXHU5NjUwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eU1heDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0QnV5QnRuLCB0aXBzOlwiXHU4RDJEXHU0RTcwXHU1QkEwXHU3MjY5XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXRCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvV2F0Y2gsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTc3MEJcdTVCQjZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGdvV2F0Y2g6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvUmVzdCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NEYxMVx1NjA2RlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29SZXN0OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1OTRCMVx1NUU4NFxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRpYW1vbmRGb250LCB0aXBzOlwiXHU3NTI4XHU2MjM3XHU5NEJCXHU3N0YzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkaWFtb25kRm9udDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMaXN0LCB0aXBzOlwiXHU5NEIxXHU1RTg0XHU2M0QwXHU3M0IwXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NjU4N1x1NUI1N1x1OEQ0NFx1NkU5MFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBidG5Ub3BSZXNMaXN0OiBzdHJpbmdbXVtdID0gW1xyXG4gICAgICAgIFtcImdhbWUvaW1nX3NlZWRzTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3NlZWRzU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX3BldE5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19wZXRTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfZm9vZG5Ob3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfZm9vZG5TZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfYmFua05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19iYW5rU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgXTtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThcdTUyMDdcdTYzNjJcdTY4MDdcdTdCN0VcdTkwMDlcdTYyRTlcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgdG9wQnRuU2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU3MEI5XHU1MUZCXHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0U2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU4MENDXHU2NjZGXHU3RUI5XHU3NDA2ICovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxlY3RCZzogc3RyaW5nW10gPSBbXCJnYW1lL2ltZ19wZXRiYWdOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfcGV0YmFnU2VsZWN0ZWQucG5nXCJdO1xyXG5cclxuICAgIC8qKiBcdTVGNTNcdTUyNERcdTkwMDlcdTYyRTlcdTc2ODRcdTVCQTBcdTcyNjlcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0UGV0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGRhdGE6IFNob3BWaWV3RGF0YTtcclxuXHJcbiAgICBwcml2YXRlIGlzRmlyc3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlSXRlbSk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5zZWxlY3RIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLm9uU2VsZWN0KTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlUHJpY2VJdGVtKTtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC5zZWxlY3RIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLm9uUHJpY2VTZWxlY3QpO1xyXG5cclxuICAgICAgICBDb3JlLm9ic2VydmFibGVQcm9wZXJ0eS53YXRjaChVc2VySW5mbywgdGhpcykua2V5KFwiZGlhbW9uZFwiLCAodikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpYW1vbmRGb250LnZhbHVlID0gdjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW5lZChlOiBTaG9wVmlld0RhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBlO1xyXG4gICAgICAgIHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPSBlPy5pZCB8fCAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1OTAwOVx1NEUyRFx1NjVGNlx1NzY4NFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHBhcmFtIGUgXHU5MDA5XHU0RTJEXHU3Njg0XHU0RTBCXHU2ODA3XHJcbiAgICAgKi9cclxuICAgIG9uU2VsZWN0KGUpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXggPSBlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU3OUNEXHU1QjUwXHU2MjE2XHU5OTZFXHU2NTk5XHU1MjE3XHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldERhdGFMaXN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBsYW50U2VydmljZS5saXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGlmICghRmVlZFNlcnZpY2UubGlzdC5sZW5ndGgpIEZlZWRTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIEZlZWRTZXJ2aWNlLmxpc3Quc29ydCgoYSwgYikgPT4gYS5iYXNlLnZpdGFsaXR5IC0gYi5iYXNlLnZpdGFsaXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMzJcdTY3RDNcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTc2ODRcdTUyMTdcdTg4NjhcclxuICAgICAqIEBwYXJhbSBjZWxsIFx1NTIxN1x1ODg2OFx1ODI4Mlx1NzBCOVxyXG4gICAgICogQHBhcmFtIGluZGV4IFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbaW5kZXhdO1xyXG4gICAgICAgIGxldCBwcmljZUJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBsb2NrSWNvbiA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrX2ljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoIWQpIHJldHVybiBjb25zb2xlLndhcm4oXCJcdTY1NzBcdTYzNkVcdTRFMjJcdTU5MzFcIik7XHJcbiAgICAgICAgaWYgKGQubG9jaykge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbG9ja0ljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICBpY29uID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPFBsYW50QmFzZT5kLmJhc2UpLnNlZWRfcHJpY2UuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gKDxQbGFudEJhc2U+ZC5iYXNlKS5zZWVkX3ByaWNlLm9iai5pY29uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5jb3VudDtcclxuICAgICAgICAgICAgICAgIGljb24gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKHByaWNlQm94LmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gY291bnQgKyBcIlwiO1xyXG4gICAgICAgICAgICAocHJpY2VCb3guZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkX2ljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGljb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuYmFzZS5pY29uO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gZC5iYXNlLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMV07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0RGVzYygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NEY0RVx1OTBFOFx1RkYwQ1x1OTAwOVx1NjJFOVx1NzI2OVx1NTRDMVx1NjVGNlx1NzY4NFx1NjU3MFx1NjM2RVx1NjYzRVx1NzkzQVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdERlc2MoKSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XTtcclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgICAgICAgICAodGhpcy5zZWVkRGVzYy5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2MucmVwbGFjZShcIiZcIiwgKDxGZWVkQmFzZT5kLmJhc2UpLnZpdGFsaXR5ICsgXCJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZERlc2MudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBib3ggPSB0aGlzLmZlZWRCdXlCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0LmNvdW50ICsgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgICAgICBsZXQgYmFzZSA9IGQuYmFzZSBhcyBQbGFudEJhc2U7XHJcbiAgICAgICAgKHRoaXMuc2VlZERlc2MucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZlZWREZXNjLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZWREZXNjLnRleHQgPSBiYXNlLmRlc2M7XHJcbiAgICAgICAgdGhpcy5tYXR1cmVUaW1lLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKGJhc2UubWF0dXJlX3RpbWUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUJ1eUJ0bi52aXNpYmxlID0gIWQubG9jaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1CdXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2NrQnRuQm94LnZpc2libGUgPSBkLmxvY2s7XHJcbiAgICAgICAgdGhpcy5sb2NrQnRuQm94LmFjdGl2ZSA9IGQubG9jaztcclxuICAgICAgICBsZXQgZ2Fpbkxpc3QgPSBiYXNlLmdhaW47XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Cb3ggPSB0aGlzLm1hdHVyZUdhaW5Cb3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgICAgIGljb24gPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgZ2FpbkRhdGEgPSBnYWluTGlzdFt4IC0gMV07XHJcbiAgICAgICAgICAgIGlmICh4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGJhc2UuaGFydmVzdDtcclxuICAgICAgICAgICAgICAgIGljb24gPSBiYXNlLmljb247XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FpbkRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGljb24gPSBnYWluRGF0YS5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gZ2FpbkRhdGEuY291bnQgKiBiYXNlLmhhcnZlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIChpdGVtQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gaWNvbjtcclxuICAgICAgICAgICAgKGl0ZW1Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gXCJ4XCIgKyBjb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBib3ggPSB0aGlzLmxvY2tCdG5Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ1bmxvY2tfYnV5XCIpLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xyXG5cclxuICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gYmFzZS51bmxvY2tfY29zdD8ub2JqPy5pY29uO1xyXG4gICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGJhc2UudW5sb2NrX2Nvc3Q/LmNvdW50ICsgXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImZlZWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImJhbmtcIjpcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICAgICAgICAgIGxldCB0b3BCdG5JbmRleCA9IHRoaXMuYnRuQm94VG9wLmdldENoaWxkSW5kZXgoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggIT0gdG9wQnRuSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID0gTnVtYmVyKHRvcEJ0bkluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb3BCdG5TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vXHU2NEFEXHU3OUNEXHJcbiAgICAgICAgICAgIGNhc2UgXCJidXlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kU293LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wic293XCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEucGFybT8ubGFuZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFudElkOiB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IFJldHVyblVzZXJJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vXHU1RTdGXHU1NDRBXHU4OUUzXHU5NTAxXHVGRjBDXHU2MjE2XHU2NjJGXHU5MUQxXHU1RTAxXHU4OUUzXHU5NTAxXHJcbiAgICAgICAgICAgIGNhc2UgXCJ1bmxvY2tfYnV5XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZF91bmxvY2tcIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnNlZWRzVW5sb2NrLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wic2VlZHNVbmxvY2tcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFudElkOiB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQubmFtZSA9PSBcImFkX3VubG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVBRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiBSZXR1cm5Vc2VySW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFudFNlcnZpY2UubGlzdFt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdLmxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5jaGFuZ2VJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhbnRTZXJ2aWNlLmxpc3RbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdFBldEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXggPSBQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RQZXRJbmRleCA+PSBQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBldEJ1eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb193YXRjaFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRHb1dhdGNoKFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XS5iYXNlLmlkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fcmVzdFwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTlFRDhcdThCQTRcdTRGNjlcdTYyMzRcdTdCMkNcdTRFMDBcdTRFMkFcdTVCQTBcdTcyNjlcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0R29XYXRjaCgxMDAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmVlZF9idXlcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5OTcyXHU2NTk5XHU4RDJEXHU0RTcwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZlZWRCdXkoKSB7XHJcbiAgICAgICAgbGV0IGZlZWQgPSB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XSBhcyBGZWVkRGF0YUJhc2U7XHJcbiAgICAgICAgaWYgKCFmZWVkKSByZXR1cm47XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZlZWRCdXksXHJcbiAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZmVlZEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICBmZWVkSWQ6IGZlZWQuYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGw6IChkOiBSZXR1cm5Vc2VySW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgKz0gZmVlZC5iYXNlLnZpdGFsaXR5O1xyXG5cclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLmZlZWRCdXlCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBmZWVkLmJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBub3RGbHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUJBMFx1NzI2OVx1NTNCQlx1NzcwQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBldEdvV2F0Y2gocGV0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgIGFwaTogQXBpSHR0cC5wZXRXZWFyLFxyXG4gICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInBldEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICBwZXRJZDogcGV0SWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsOiAoZDogUmV0dXJuVXNlckluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLndhcmVQZXRJZCA9IHBldElkO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwZXRCdXkoKSB7XHJcbiAgICAgICAgbGV0IHsgYmFzZSB9ID0gUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgIGFwaTogQXBpSHR0cC5wZXRCdXksXHJcbiAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wicGV0QnV5XCJdPntcclxuICAgICAgICAgICAgICAgIHBldElkOiBiYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsbDogKGQ6IFJldHVyblVzZXJJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF0ubG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgVXNlckluZm8ud2FyZVBldElkID0gYmFzZS5pZDtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8ucGV0Vml0YWxpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IGJhc2Uudml0YWxpdHlfbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IENvbmZpZ0dhbWUucGV0RGlnZXN0SW50ZXJ2YWxUaW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU3MEI5XHU1MUZCXHU3MEI5XHU1MUZCXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlVG9wQnRuU3RhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJ0bkJveFRvcC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBsYiA9IGJ0bi5nZXRDaGlsZEF0KDApIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGlmICh4ID09PSB0aGlzLnRvcEJ0blNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVsxXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZy1tZW51bm9ybWFsLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVCb3R0b20oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NUU5NVx1OTBFOFx1NTE4NVx1NUJCOVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJvdHRvbSgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm90dG9tQm94Lm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSh4LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpdGVtQnV5Qm94ID0gdGhpcy5pdGVtQnV5QnRuLnBhcmVudCBhcyBMYXlhLkJveDtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudG9wQnRuU2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAvL1x1NzlDRFx1NUI1MFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGV0T3JGZWVkTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgxLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGV0T3JGZWVkTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQnV5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5hcnJheSA9IFssIDEsIDEsIDFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUGV0KCkge1xyXG4gICAgICAgIGlmICghUGV0U2VydmljZS5saXN0Lmxlbmd0aCkgUGV0U2VydmljZS5pbml0KFtdKTtcclxuICAgICAgICBsZXQgcGV0ID0gUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdO1xyXG4gICAgICAgIHRoaXMucGV0SWNvbi5za2luID0gcGV0LmJhc2UuaWNvbjtcclxuICAgICAgICB0aGlzLnBldE5hbWUudGV4dCA9IHBldC5iYXNlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5wZXREZXNjLnRleHQgPSBwZXQuYmFzZS5kZXNjO1xyXG4gICAgICAgIHRoaXMudml0YWxpdHlNYXgudmFsdWUgPSBwZXQuYmFzZS52aXRhbGl0eV9tYXggKyBcIlwiO1xyXG4gICAgICAgIGxldCBidG5fYm94ID0gdGhpcy5wZXRCdXlCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChidG5fYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gcGV0LmJhc2UuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAoYnRuX2JveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gcGV0LmJhc2UuY29zdC5jb3VudCArIFwiXCI7XHJcblxyXG4gICAgICAgIGxldCBwZXRCb3ggPSB0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDEpLFxyXG4gICAgICAgICAgICBmaW5kQm94ID0gcGV0Qm94LmdldENoaWxkQnlOYW1lKFwiZmluZF9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGJhY2tfYm94ID0gcGV0Qm94LmdldENoaWxkQnlOYW1lKFwiYmFja19ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIHN0YXJJY29uOiBMYXlhLkltYWdlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcbiAgICAgICAgICAgIHN0YXJJY29uID0gZmluZEJveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnZpc2libGUgPSB4ICogMjAgPCBwZXQuYmFzZS5zZW5zaXRpdmU7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgeCAqIDIwICsgMTAgPCBwZXQuYmFzZS5zZW5zaXRpdmUgPyBcImdhbWUvaW1nX3N0YXIucG5nXCIgOiBcImdhbWUvaW1nX2hhbGZzdGFyLnBuZ1wiO1xyXG4gICAgICAgICAgICBzdGFySWNvbiA9IGJhY2tfYm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgc3Rhckljb24udmlzaWJsZSA9IHggKiAyMCA8IHBldC5iYXNlLmFiaWxpdHk7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgeCAqIDIwICsgMTAgPCBwZXQuYmFzZS5hYmlsaXR5ID8gXCJnYW1lL2ltZ19zdGFyLnBuZ1wiIDogXCJnYW1lL2ltZ19oYWxmc3Rhci5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBldC5sb2NrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGV0QnV5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdvUmVzdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZ29XYXRjaC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKFVzZXJJbmZvLndhcmVQZXRJZCA9PSBwZXQuYmFzZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKFBldFNlcnZpY2UuZ2V0VW5sb2NrTGVuKCkgPT09IDEgfHwgVXNlckluZm8ud2FyZVBldElkID09PSAxMDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvV2F0Y2gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1dhdGNoLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBldEJ1eUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5MUNEXHU3RjZFXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVzZXRQZXRPckZlZWRMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5nZXREYXRhTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RTJEXHU5NUY0XHU1MTg1XHU1QkI5XHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU1MjA3XHU2MzYyXHJcbiAgICAgKiBAcGFyYW0gaSBcdTRFMEJcdTY4MDdcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNlbnRlckJveFN0YXRlKGk6IG51bWJlciwgc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KGkpIGFzIExheWEuQm94KS52aXNpYmxlID0gc2hvdztcclxuICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdChpKSBhcyBMYXlhLkJveCkuYWN0aXZlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTRCMVx1NUU4NFx1OTAwOVx1NjJFOVxyXG4gICAgICogQHBhcmFtIGUgXHU0RTBCXHU2ODA3XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25QcmljZVNlbGVjdChlOiBudW1iZXIpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk0QjFcdTVFODRcdTY1NzBcdTYzNkVcdTZFMzJcdTY3RDNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVQcmljZUl0ZW0oY2VsbDogTGF5YS5JbWFnZSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJpY2VMaXN0LnNlbGVjdGVkSW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID0gXCJnYW1lL2ltZ19wcmljZXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IFwiZ2FtZS9pbWdfcHJpY2Vub3JtYWwucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbi8vICBTaWduSW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5WaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluTGlzdCwgdGlwczpcIlx1N0I3RVx1NTIzMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25Jbkxpc3Q6IExheWEuTGlzdDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluUHJvZ3Jlc3NMYiwgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25JblByb2dyZXNzTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2lnbkluUHJvZ3Jlc3NCYXIsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY3NjFcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBzaWduSW5Qcm9ncmVzc0JhcjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcm9ncmVzc0Rlc2MsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY1ODdcdTVCNTdcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBwcm9ncmVzc0Rlc2M6IExheWEuTGFiZWw7XHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QuYXJyYXkgPSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdDtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2lnbkluTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVByb2dyZXNzKCkge1xyXG4gICAgICAgIGxldCBzY2FsZSA9IFVzZXJJbmZvLnNwZWVkVXBUaW1lcyAvIENvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXM7XHJcbiAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuc2lnbkluUHJvZ3Jlc3NCYXIud2lkdGggPSA5NzcgKiBzY2FsZTtcclxuICAgICAgICB0aGlzLnNpZ25JblByb2dyZXNzTGIudGV4dCA9IFVzZXJJbmZvLnNpZ25JbkRheXMgKyBcIlwiO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NEZXNjLnRleHQgPSBgXHU0RUNBXHU2NUU1XHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHVGRjA4XHU0RjdGXHU3NTI4JHtVc2VySW5mby5zcGVlZFVwVGltZXN9LyR7Q29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lc31cdTZCMjFcdTUyQTBcdTkwMUZcdUZGMDlgO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlSXRlbShjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYmFyID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBvYmogPSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdFtpXTtcclxuICAgICAgICBsZXQgc2NhbGUgPSBVc2VySW5mby5zaWduSW5EYXlzIC8gb2JqLmRheXM7XHJcbiAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG4gICAgICAgIGJhci53aWR0aCA9IDUwMiAqIHNjYWxlO1xyXG4gICAgICAgIGNvbnN0IHJld2FyZEJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRfYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmoucmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJhbW91bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGB4JHtvYmoucmV3YXJkLmNvdW50fWA7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwic2lnbl9kYXlzXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU3QjdFXHU1MjMwJHtvYmouZGF5c31cdTU5MjlgO1xyXG5cclxuICAgICAgICBsZXQgc2tpbjogc3RyaW5nID0gXCJcIixcclxuICAgICAgICAgICAgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImdldF9idG5cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IG9iai5pZDtcclxuICAgICAgICBpZiAob2JqLmlkID4gVXNlckluZm8uc2lnbkluSWQpIHtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC55ID0gMTAzO1xyXG4gICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2RvbmUucG5nYDtcclxuXHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby5zaWduSW5EYXlzID49IG9iai5kYXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLnNpZ25JbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdFswXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2dldC5wbmdgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCAtIFVzZXJJbmZvLnNpZ25JbklkID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbiA9IGBnYW1lL2ltZ19nZXQucG5nYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQm94LnkgPSA1NztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX3JlY2VpdmVkLnBuZ2A7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG4uc2tpbiA9IHNraW47XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2lnbkluVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdldF9idG5cIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5ODg2XHU1M0Q2XHU1OTU2XHU1MkIxXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2lnbkluSWQgPSBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuc2lnbkluUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsIHNpZ25JbklkOiBzaWduSW5JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiB7IGFkdmVydGlzZVRpbWVzOiBudW1iZXI7IHNwZWVkVXBUaW1lczogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBzaWduSW5JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduSW5MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJld2FyZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5nZXQoc2lnbkluSWQpLnJld2FyZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogZS50YXJnZXQgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiByZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiByZXdhcmQub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkID8gMSA6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBTcGVlZFVwVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlZWRVcFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRpbWVMYiwgdGlwczpcIlx1NTJBMFx1OTAxRlx1NjVGNlx1OTVGNFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGltZUxiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRpbWVzTGIsIHRpcHM6XCJcdTUxNjhcdTRGNTNcdTUyQTBcdTkwMUZcdTUyNjlcdTRGNTlcdTZCMjFcdTY1NzBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRpbWVzTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c3BlZWRVcEJ0biwgdGlwczpcIlx1NTE2OFx1NEY1M1x1NTJBMFx1OTAxRlx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3BlZWRVcEJ0bjogTGF5YS5MYWJlbDtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICBsZXQgdGltZSA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJhbGxfc3BlZWRfdXBfdGltZVwiKS52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgdGhpcy50aW1lTGIudGV4dCA9IGAke01hdGguY2VpbCh0aW1lIC8gNjApfVx1NTIwNlx1OTQ5RmA7XHJcbiAgICAgICAgdGhpcy50aW1lc0xiLnRleHQgPSBgXHU0RUNBXHU2NUU1XHU1MjY5XHU0RjU5JHtVc2VySW5mby5hZHZlcnRpc2VUaW1lc31cdTZCMjFgO1xyXG4gICAgICAgIGlmIChVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRVcEJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU3BlZWRVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzcGVlZF91cFwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFNwZWVkVXAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVBRCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiB7IGFkdmVydGlzZVRpbWVzOiBudW1iZXI7IHNwZWVkVXBUaW1lczogbnVtYmVyIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc3BlZWRVcFRpbWVzID0gZC5zcGVlZFVwVGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVc2VySW5mby5zcGVlZFVwVGltZXMgPT0gQ29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNwZWVkVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMubGFuZF9zcGVlZF91cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50T24gfSBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi4vY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4uL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uT2JqIHtcclxuICAgIC8qKiBcdTRFRkJcdTUyQTFpZCAqL1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTVCOENcdTYyMTAgKi9cclxuICAgIG9rOiBib29sZWFuO1xyXG59XHJcblxyXG4vLyAgVGFza1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGFza0xpc3QsIHRpcHM6XCJcdTRFRkJcdTUyQTFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRhc2tMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGFza0xpc3QoKTtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMuaXRlbVJlbmRlcik7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFza0xpc3QoKSB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBUYXNrU2VydmljZS5saXN0O1xyXG4gICAgICAgIGxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdEEgPSBUYXNrU2VydmljZS5nZXRUYXNrKGEuaWQpLFxyXG4gICAgICAgICAgICAgICAgdEIgPSBUYXNrU2VydmljZS5nZXRUYXNrKGIuaWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIGEuaWQgK1xyXG4gICAgICAgICAgICAgICAgKHRBPy5yZWNlaXZlID8gMTAwMCA6IDEpICtcclxuICAgICAgICAgICAgICAgICh0QT8udGltZXMgPj0gYS50aW1lcyA/IDEwMCA6IDEwMDApIC1cclxuICAgICAgICAgICAgICAgIChiLmlkICsgKHRCPy5yZWNlaXZlID8gMTAwMCA6IDEpICsgKHRCPy50aW1lcyA+PSBiLnRpbWVzID8gMTAwIDogMTAwMCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC5hcnJheSA9IGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtUmVuZGVyKGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgb2JqID0gVGFza1NlcnZpY2UubGlzdFtpXS5iYXNlO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrU2VydmljZS5nZXRUYXNrKG9iai5pZCk7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmouaWNvbjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBvYmoudGl0bGU7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiZGVzY1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7b2JqLmRlc2N9KCR7XHJcbiAgICAgICAgICAgICh0YXNrPy50aW1lcyA+IG9iai50aW1lcyA/IG9iai50aW1lcyA6IHRhc2s/LnRpbWVzKSB8fCAwXHJcbiAgICAgICAgfS8ke29iai50aW1lc30pYDtcclxuXHJcbiAgICAgICAgY29uc3QgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gb2JqLnJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiYW1vdW50XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcInhcIiArIG9iai5yZXdhcmQuY291bnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJnb19ydW5cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuT2JqOiBCdXR0b25PYmogPSB7XHJcbiAgICAgICAgICAgIGlkOiBvYmouaWQsXHJcbiAgICAgICAgICAgIG9rOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1x1NURGMlx1OTg4Nlx1NTNENlxyXG4gICAgICAgIGlmICh0YXNrPy5yZWNlaXZlKSB7XHJcbiAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ190b21hcm93LnBuZ1wiO1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL1x1NTNFRlx1OTg4Nlx1NTNENlxyXG4gICAgICAgICAgICBpZiAodGFzaz8udGltZXMgPj0gb2JqLnRpbWVzKSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfZ2V0LnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnRuT2JqLm9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ19kb25lLnBuZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IGJ0bk9iajtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX3J1blwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bk9iajogQnV0dG9uT2JqID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChidG5PYmoub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAudGFza1Jld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVBRCwgdGFza0lkOiBidG5PYmouaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IHsgZ29sZDogMDsgZGlhbW9uZDogMDsgYWR2ZXJ0aXNlVGltZXM6IDAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IFRhc2tTZXJ2aWNlLmdldFRhc2soYnRuT2JqLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucmVjZWl2ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5PYmoub2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHRhc2suYmFzZS5yZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRhc2suYmFzZS5yZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKGJ0bk9iai5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUganVtcChpZCkge1xyXG4gICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgICAgY2FzZSAxMDAxOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDM6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNTpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDY6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA3OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwODpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLldhcmVob3VzZVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwOTpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMTA6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDExOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxMjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlLCB7IFdhcmVIb3VzZURhdGEgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1xyXG4gKi9cclxuLy9GaWVsZExldmVsVXBWaWV3IFdhcmVob3VzZVZpZXcgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXJlaG91c2VWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTGlzdCwgdGlwczpcIlx1NzI2OVx1NTRDMVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbU5hbWUsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1OYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtRGVzYywgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbURlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1JY29uLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsQ291bnRMYiwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NTFGQVx1NTUyRVx1NjU3MFx1OTFDRlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxDb3VudExiOiBMYXlhLlRleHRJbnB1dCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxCb3gsIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTcyNjlcdTU0QzFcdTRFRjdcdTY4M0NcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsQm94OiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsR29sZCwgdGlwczpcIlx1OTFEMVx1NUUwMVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxHb2xkOiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsRGlhbW9uZCwgdGlwczpcIlx1OTRCQlx1NzdGM1x1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxEaWFtb25kOiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNlbGxCdG4sIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTc2ODRpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzZWxsQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWxsQWRCdG4sIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTc2ODRpY29uIFx1NUU3Rlx1NTQ0QVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VsbEFkQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBXYXJlSG91c2VEYXRhW11bXSA9IFtdO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMSBcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbUluZGV4OiBzdHJpbmcgPSBcIjAsMFwiO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMVx1NjU3MFx1NjM2RSAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtRGF0YTogV2FyZUhvdXNlRGF0YTtcclxuICAgIC8qKiBcdTkwMDlcdTRFMkRcdTUxRkFcdTU1MkVcdTcyNjlcdTU0QzFcdTc2ODRcdTY1NzBcdTkxQ0YgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbVNlbGxDb3VudDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUzNTVcdTRFRjcgXHU5MUQxXHU1RTAxICovXHJcbiAgICBwcml2YXRlIHVuaXRQcmljZUdvbGQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1MzU1XHU0RUY3IFx1OTRCQlx1NzdGMyAqL1xyXG4gICAgcHJpdmF0ZSB1bml0UHJpY2VEaWFtb25kOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVySXRlbUxpc3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXNjKG51bGwpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1TZWxsR29sZC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbERpYW1vbmQucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi5vbihMYXlhLkV2ZW50LklOUFVULCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IE51bWJlcih0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0ID0gXCIxXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPiB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTGlzdCgpIHtcclxuICAgICAgICBsZXQgaSA9IDAsXHJcbiAgICAgICAgICAgIHkgPSAwO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhTGlzdFt5XSkgdGhpcy5kYXRhTGlzdFt5XSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFMaXN0W3ldLnB1c2goZCk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaWYgKGkgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgICAgIHkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5kYXRhTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckl0ZW1MaXN0KGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YUxpc3RbaV07XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjZWxsLmdldENoaWxkQnlOYW1lKGBpdGVtXyR7eH1gKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAgICAgaWYgKGRhdGFbeF0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmRhdGFTb3VyY2UgPSBgJHtpfSwke3h9YDtcclxuICAgICAgICAgICAgICAgIGxldCBpY29uID0gaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgICAgIGljb24uc2tpbiA9IGRhdGFbeF0uYmFzZS5pY29uO1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWxcclxuICAgICAgICAgICAgICAgICkudGV4dCA9IGAke2RhdGFbeF0uYmFzZS5uYW1lfV8ke2RhdGFbeF0uY291bnR9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggJiYgdGhpcy5zZWxlY3RJdGVtSW5kZXggPT0gaXRlbS5kYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhpY29uLCB7IHk6IDAgfSwgMTUwLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtRGF0YSA9IGRhdGFbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZXNjKGRhdGFbeF0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpY29uLnkgPSA1NjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbi55ICE9IDU2KSBMYXlhLlR3ZWVuLnRvKGljb24sIHsgeTogNTYgfSwgMTUwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8xXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbUluZGV4ID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7IC8vIFx1OEZEOVx1OTFDQ1x1OTcwMFx1ODk4MVx1NEYxOFx1NTMxNlx1NzNCMFx1NTcyOFx1NTA1QVx1NzY4NFx1NjYyRlx1NTIzN1x1NjVCMFx1NjU3NFx1NEUyQVx1NTIxN1x1ODg2OFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA+IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlZHVjZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50LS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50IDwgMSkgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNlbGxCdG5BZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwic2VsbEJ0blwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAud2FyZWhvdXNlU2VsbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcIndhcmVob3VzZVNlbGxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5zZWxlY3RJdGVtRGF0YS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUgPT0gXCJzZWxsQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IFJldHVyblVzZXJJbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UucmVkdWNlQW1vdW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtRGF0YS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlc2MobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmRMaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0UHJpY2VHb2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0UHJpY2VHb2xkICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUudGFyZ2V0Lm5hbWUgPT0gXCJzZWxsQnRuQWRcIiA/IDIgOiAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdFByaWNlRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChDb25maWdHYW1lLmRpYW1vbmRJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdFByaWNlRGlhbW9uZCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlLnRhcmdldC5uYW1lID09IFwic2VsbEJ0bkFkXCIgPyAyIDogMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLnNlbGxCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTFGQVx1NTFGQVx1NTUyRVx1NEZFMVx1NjA2Rlx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZURlc2MoZDogV2FyZUhvdXNlRGF0YSkge1xyXG4gICAgICAgIGlmICghZCkge1xyXG4gICAgICAgICAgICAodGhpcy5pdGVtSWNvbi5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKHRoaXMuaXRlbUljb24ucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbERpYW1vbmQucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxHb2xkLnJlbW92ZVNlbGYoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtSWNvbi5za2luID0gZC5iYXNlLmljb247XHJcbiAgICAgICAgdGhpcy5pdGVtTmFtZS50ZXh0ID0gZC5iYXNlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5pdGVtRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2M7XHJcbiAgICAgICAgbGV0IHByaWNlR29sZDogUmV3YXJkQ3VycmVuY3lCYXNlLCBwcmljZURpYW1vbmQ6IFJld2FyZEN1cnJlbmN5QmFzZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGQuYmFzZS5nYWluLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQuYmFzZS5nYWluW3hdKTtcclxuICAgICAgICAgICAgaWYgKCFkLmJhc2UuZ2Fpblt4XS5jb3VudCkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChkLmJhc2UuZ2Fpblt4XS5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQpIHtcclxuICAgICAgICAgICAgICAgIHByaWNlR29sZCA9IGQuYmFzZS5nYWluW3hdO1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXRlbVNlbGxHb2xkLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID1cclxuICAgICAgICAgICAgICAgICAgICBkLmJhc2UuZ2Fpblt4XS5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGxCb3guYWRkQ2hpbGQodGhpcy5pdGVtU2VsbEdvbGQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJpY2VEaWFtb25kID0gZC5iYXNlLmdhaW5beF07XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pdGVtU2VsbERpYW1vbmQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgICAgIGQuYmFzZS5nYWluW3hdLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsbEJveC5hZGRDaGlsZCh0aGlzLml0ZW1TZWxsRGlhbW9uZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IE1hdGguY2VpbChkLmNvdW50IC8gMik7XHJcbiAgICAgICAgdGhpcy51bml0UHJpY2VHb2xkID0gcHJpY2VHb2xkPy5jb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudW5pdFByaWNlRGlhbW9uZCA9IHByaWNlRGlhbW9uZD8uY291bnQgfHwgMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1M0VGXHU0RUU1XHU1MUZBXHU1NTJFXHU3Njg0XHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlU2VsZWN0U2VsbENvdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQgPSB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKyBcIlwiO1xyXG4gICAgICAgICh0aGlzLml0ZW1TZWxsR29sZC5nZXRDaGlsZEJ5TmFtZShcInByaWNlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKiB0aGlzLnVuaXRQcmljZUdvbGQgKyBcIlwiO1xyXG4gICAgICAgICh0aGlzLml0ZW1TZWxsRGlhbW9uZC5nZXRDaGlsZEJ5TmFtZShcInByaWNlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKiB0aGlzLnVuaXRQcmljZURpYW1vbmQgKyBcIlwiO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblwiXG5pbXBvcnQgVmlld1Nob3dBbmkgZnJvbSBcIi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiXG5pbXBvcnQgQWRkTGFuZFZpZXcgZnJvbSBcIi4vdmlldy9BZGRMYW5kVmlld1wiXG5pbXBvcnQgRmllbGRMZXZlbFVwVmlldyBmcm9tIFwiLi92aWV3L0ZpZWxkTGV2ZWxVcFZpZXdcIlxuaW1wb3J0IEZyaWVuZHNEZXNjVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNEZXNjVmlld1wiXG5pbXBvcnQgRnJpZW5kc1Jld2FyZFZpZXcgZnJvbSBcIi4vdmlldy9GcmllbmRzUmV3YXJkVmlld1wiXG5pbXBvcnQgRnJpZW5kc1ZpZXcgZnJvbSBcIi4vdmlldy9GcmllbmRzVmlld1wiXG5pbXBvcnQgSGludFZpZXcgZnJvbSBcIi4vdmlldy9IaW50Vmlld1wiXG5pbXBvcnQgTG9naW5WaWV3IGZyb20gXCIuL3ZpZXcvTG9naW5WaWV3XCJcbmltcG9ydCBNYWlsVmlldyBmcm9tIFwiLi92aWV3L01haWxWaWV3XCJcbmltcG9ydCBNYWluVmlldyBmcm9tIFwiLi92aWV3L01haW5WaWV3XCJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50XCJcbmltcG9ydCBPcmRlclZpZXcgZnJvbSBcIi4vdmlldy9PcmRlclZpZXdcIlxuaW1wb3J0IFNldHRpbmdWaWV3IGZyb20gXCIuL3ZpZXcvU2V0dGluZ1ZpZXdcIlxuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL3ZpZXcvU2hvcFZpZXdcIlxuaW1wb3J0IFNpZ25JblZpZXcgZnJvbSBcIi4vdmlldy9TaWduSW5WaWV3XCJcbmltcG9ydCBTcGVlZFVwVmlldyBmcm9tIFwiLi92aWV3L1NwZWVkVXBWaWV3XCJcbmltcG9ydCBUYXNrVmlldyBmcm9tIFwiLi92aWV3L1Rhc2tWaWV3XCJcbmltcG9ydCBXYXJlaG91c2VWaWV3IGZyb20gXCIuL3ZpZXcvV2FyZWhvdXNlVmlld1wiXHJcbi8qXHJcbiogXHU2RTM4XHU2MjBGXHU1MjFEXHU1OUNCXHU1MzE2XHU5MTREXHU3RjZFO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xMDgwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTkyMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49dHJ1ZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9CdXR0b24udHNcIixCdXR0b24pO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL1ZpZXdTaG93QW5pLnRzXCIsVmlld1Nob3dBbmkpO1xuICAgICAgICByZWcoXCJ2aWV3L0FkZExhbmRWaWV3LnRzXCIsQWRkTGFuZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZpZWxkTGV2ZWxVcFZpZXcudHNcIixGaWVsZExldmVsVXBWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9GcmllbmRzRGVzY1ZpZXcudHNcIixGcmllbmRzRGVzY1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNSZXdhcmRWaWV3LnRzXCIsRnJpZW5kc1Jld2FyZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNWaWV3LnRzXCIsRnJpZW5kc1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0hpbnRWaWV3LnRzXCIsSGludFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0xvZ2luVmlldy50c1wiLExvZ2luVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpbFZpZXcudHNcIixNYWlsVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpblZpZXcudHNcIixNYWluVmlldyk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHNcIixGaWVsZENvbXBvbmVudCk7XG4gICAgICAgIHJlZyhcInZpZXcvT3JkZXJWaWV3LnRzXCIsT3JkZXJWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TZXR0aW5nVmlldy50c1wiLFNldHRpbmdWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TaG9wVmlldy50c1wiLFNob3BWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TaWduSW5WaWV3LnRzXCIsU2lnbkluVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU3BlZWRVcFZpZXcudHNcIixTcGVlZFVwVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvVGFza1ZpZXcudHNcIixUYXNrVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvV2FyZWhvdXNlVmlldy50c1wiLFdhcmVob3VzZVZpZXcpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwiLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCIuL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCIuL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCIuL2NvcmUvaW5kZXhcIjtcclxuY2xhc3MgTWFpbiB7XHJcbiAgICAvKiogXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcdTUyMTdcdTg4NjggKi9cclxuICAgIHN0YXRpYyBjdXN0b21SZW5kZXJJRDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1x1NjgzOVx1NjM2RUlERVx1OEJCRVx1N0Y2RVx1NTIxRFx1NTlDQlx1NTMxNlx1NUYxNVx1NjRDRVxyXG4gICAgICAgIGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuICAgICAgICBlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuICAgICAgICBMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcbiAgICAgICAgLy9cdTUxN0NcdTVCQjlcdTVGQUVcdTRGRTFcdTRFMERcdTY1MkZcdTYzMDFcdTUyQTBcdThGN0RzY2VuZVx1NTQwRVx1N0YwMFx1NTczQVx1NjY2RlxyXG4gICAgICAgIExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcbiAgICAgICAgLy9cdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDhcdTkwMUFcdThGQzdJREVcdThCQkVcdTdGNkVcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdUZGMENcdTYyMTZcdTgwMDV1cmxcdTU3MzBcdTU3NDBcdTU4OUVcdTUyQTBkZWJ1Zz10cnVlXHU1M0MyXHU2NTcwXHVGRjBDXHU1NzQ3XHU1M0VGXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA5XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcbiAgICAgICAgTGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG5cclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1OEQ0NFx1NkU5MFx1NzI0OFx1NjcyQ1x1NjNBN1x1NTIzNlx1RkYwQ3ZlcnNpb24uanNvblx1NzUzMUlERVx1NTNEMVx1NUUwM1x1NTI5Rlx1ODBGRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NEU1Rlx1NEUwRFx1NUY3MVx1NTRDRFx1NTQwRVx1N0VFRFx1NkQ0MVx1N0EwQlxyXG4gICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksXHJcbiAgICAgICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT05cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1NTkyN1x1NUMwRlx1NTZGRVx1NjYyMFx1NUMwNFx1RkYwQ1x1NTJBMFx1OEY3RFx1NUMwRlx1NTZGRVx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NTNEMVx1NzNCMFx1NUMwRlx1NTZGRVx1NTcyOFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1OTFDQ1x1OTc2Mlx1RkYwQ1x1NTIxOVx1NEYxOFx1NTE0OFx1NTJBMFx1OEY3RFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1RkYwQ1x1ODAwQ1x1NEUwRFx1NjYyRlx1NUMwRlx1NTZGRVxyXG4gICAgICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXHJcbiAgICAgICAgICAgIFwiZmlsZWNvbmZpZy5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ29uZmlnTG9hZGVkKCkge1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHJcbiAgICAgICAgQ29uZmlnW1wiY3VzdG9tUmVuZGVySURcIl0gPSBbXTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LmluaXQoQ29uZmlnR2FtZS5iYXNlVXJsKTtcclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2dpbl9nYW1lLCB0aGlzLCB0aGlzLmxvZ2luR2FtZSk7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIudXNlQXVkaW9NdXNpYyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFZpZXdNYW5hZ2VyLmluc3QuaW5pdCgpO1xyXG5cclxuICAgICAgICAvLyBMYXlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQoXCJyZXMvYXVkaW8vZHJhdy5tcDNcIik7XHJcbiAgICAgICAgLy9cdTU5ODJcdTY3OUNcdTkwMUFcdThGQzdcdThCQkVcdTU5MDdcdTk3NTlcdTk3RjNcdTk1MkVcdThCQTlcdTk3RjNcdTk4OTFcdTgxRUFcdTUyQThcdThEREZcdTk2OEZcdThCQkVcdTU5MDdcdTk3NTlcdTk3RjNcdTMwMDJcdTk3MDBcdTg5ODFcdTVDMDZ1c2VBdWRpb011c2ljXHU4QkJFXHU3RjZFXHU0RTNBZmFsc2VcdTMwMDJcclxuICAgICAgICAvLyBTb3VuZE1hbmFnZXIudXNlQXVkaW9NdXNpYz1mYWxzZVx1RkYxQlxyXG4gICAgICAgIC8vIExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyhSZXMuYXVkaW9zLndpbik7XHJcblxyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihSZXMudmlld3MuTG9naW5WaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0R2FtZURhdGEoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMYXlhLlZpZXcuc2V0TG9hZGluZ1BhZ2UoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvL1x1NTQwRVx1NjcxRlx1NEYxOFx1NTMxNlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBMYXlhLlZpZXcuc2hvd0xvYWRpbmdQYWdlKG51bGwsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDk5OTk5OTk5OTk5OTk5OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpbkdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbkdhbWUoKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgUmVzLnNjZW5lcyxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVzLnNjZW5lcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRHYW1lRGF0YShkOiBOZXRJbml0KSB7fVxyXG59XHJcbi8vXHU2RkMwXHU2RDNCXHU1NDJGXHU1MkE4XHU3QzdCXHJcbm5ldyBNYWluKCk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTyxNQUFXO0FBQVgsWUFBVyxZQUFYO0FBRUgsa0NBQWdCO0FBR2hCLGlDQUFlO0FBR2YsaUNBQWU7QUFHZixrQ0FBZ0I7QUFHaEIsK0JBQWE7QUFFYiw4QkFBWTtBQXNCWixvQ0FBa0I7QUFBQSxLQXRDSjs7O0FDRVYsTUFBSztBQUFMLFlBQUssUUFBTDtBQUdBLDRCQUFjO0FBRWQsaUNBQW1CO0FBRW5CLGdDQUFrQjtBQUVsQixrQ0FBb0I7QUFFcEIsNEJBQWM7QUFFZCx5QkFBVztBQUVYLDBCQUFZO0FBRVoseUJBQVc7QUFFWCx5QkFBVztBQUVYLDBCQUFZO0FBRVosNEJBQWM7QUFFZCx5QkFBVztBQUVYLDJCQUFhO0FBRWIsNEJBQWM7QUFFZCx5QkFBVztBQUVYLDhCQUFnQjtBQUFBLEtBakNYO0FBb0NMLE1BQUs7QUFBTCxZQUFLLFNBQUw7QUFHQSw4QkFBZTtBQUFBLEtBSFY7QUFTTCxNQUFNLFNBQVM7QUFBQSxJQUNkO0FBQUEsSUFDQTtBQUFB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QUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE9BQU0sYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsT0FBTSxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLEtBQUksYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFB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
