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
    EventMaps2["play_get_reward"] = "play_get_reward";
  })(EventMaps || (EventMaps = {}));

  // src/common/Res.ts
  var views;
  (function(views3) {
    views3["AddLandView"] = "scenes/views/AddLandView.scene";
    views3["FieldLevelUpView"] = "scenes/views/FieldLevelUpView.scene";
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
    audios2["win"] = "res/audio/win.mp3";
    audios2["ready"] = "res/audio/ready.mp3";
    audios2["move"] = "res/audio/move.mp3";
    audios2["go"] = "res/audio/go.mp3";
    audios2["fail"] = "res/audio/fail.mp3";
    audios2["draw"] = "res/audio/draw.mp3";
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
    "scenes/views/FieldLevelUpView.scene",
    "scenes/views/AddLandView.scene",
    "scenes/prefab/GetReward.prefab",
    "scenes/prefab/FloatRewardIcon.prefab",
    "scenes/prefab/FieldPrefab.prefab",
    "scenes/components/Button.prefab",
    "res/Xasdfasd.png",
    "res/rule_text.png",
    "res/loadingBg.png",
    "res/img_woodtitle.png",
    "res/img_storeHouseBg.png",
    "res/img_storebg.png",
    "res/img_shelf.png",
    "res/img_popUpBg.png",
    "res/img_landBg.png",
    "res/img_housetop.png",
    "res/img_homepageBg3.png",
    "res/img_homepageBg2.png",
    "res/img_homepageBg1.png",
    "res/img_homepageBg.png",
    "res/img_farmlandLogo.png",
    "res/bg1.png",
    "res/shader/vs.vs",
    "res/shader/ps.fs",
    "res/audio/win.mp3",
    "res/audio/ready.mp3",
    "res/audio/move.mp3",
    "res/audio/go.mp3",
    "res/audio/fail.mp3",
    "res/audio/draw.mp3",
    "res/audio/button_click.mp3",
    "res/atlas/plant_icon.png",
    "res/atlas/plant_icon.atlas",
    "res/atlas/pet_feed.png",
    "res/atlas/pet_feed.atlas",
    "res/atlas/main_scene.png",
    "res/atlas/main_scene.atlas",
    "res/atlas/game1.png",
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
      EventClass.set(target, { key: name, fn: descriptor.value });
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
              set: (v) => {
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
      bindEvent && EventGlobal_default.on(bindEvent.key, this, bindEvent.fn);
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
            if (!all)
              break;
          }
        }
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
    clearViewMaps() {
      viewMaps.length = 0;
    }
  };
  __decorateClass([
    Instance
  ], ViewManager, "inst", 2);

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

  // src/dataService/UserInfo.ts
  var UserInfo = class {
    constructor() {
      this.nickname = "name";
      this.uid = 0;
      this.avatar = "";
      this.diamond = 999;
      this.gold = 999;
    }
    clear() {
      this.nickname = "";
    }
  };
  var UserInfo_default = new UserInfo();

  // src/core/index.ts
  var Core = {
    observableProperty: ObservableProperty_default,
    view: ViewManager.inst,
    gameScript: GameScript,
    instance: Instance,
    eventOn: EventOn,
    findByName: FindByName,
    eventGlobal: EventGlobal_default
  };
  var core_default = Core;

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
      this.list.set(d.landId, d);
    }
    clear() {
      this.list.clear();
    }
  };
  var LandService_default = new LandService();

  // src/common/ConfigGame.ts
  var ConfigGame_default = {
    localKey: "love_HD_farm"
  };

  // src/dataService/LocalStorageService.ts
  var LocalStorageService = class {
    constructor() {
      this.localData = {
        isLogin: false
      };
    }
    init() {
      this.localData = Laya.LocalStorage.getJSON(ConfigGame_default.localKey) || this.localData;
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
    }
  };
  var LocalStorageService_default = new LocalStorageService();

  // src/common/Table.ts
  var Table = { "task": [{ "id": 1001, "reward": "1001:100", "times": 1, "title": "\u7B7E\u5230\u9886\u7EA2\u5305", "desc": "\u770B\u89C6\u9891\u7B7E\u5230\uFF0C\u6BCF\u65E51\u6B21", "icon": null }, { "id": 1002, "reward": "1001:200", "times": 10, "title": "\u83DC\u5730\u52A0\u901F10\u6B21", "desc": "\u8FD8\u5DEE&\u6B21", "icon": null }, { "id": 1003, "reward": "1001:300", "times": 10, "title": "\u83DC\u5730\u653610\u6B21", "desc": "\u8FD8\u5DEE&\u6B21", "icon": null }], "signIn": [{ "id": 1001, "days": 1, "reward": "1001:100" }, { "id": 1002, "days": 2, "reward": "1001:100" }, { "id": 1003, "days": 3, "reward": "1001:100" }, { "id": 1004, "days": 4, "reward": "1001:100" }, { "id": 1005, "days": 5, "reward": "1001:100" }, { "id": 1006, "days": 6, "reward": "1001:100" }, { "id": 1007, "days": 7, "reward": "1001:100" }, { "id": 1008, "days": 8, "reward": "1001:100" }, { "id": 1009, "days": 9, "reward": "1001:100" }, { "id": 1010, "days": 10, "reward": "1001:100" }], "plant": [{ "id": 1001, "name": "\u5C0F\u9EA6", "icon": null, "seed_price": "1002:10", "gain": "1001:5,1002:100", "harvest": "1", "mature_time": "60", "unlock_cost": null, "unlock_reward": null, "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1002, "name": "\u6C34\u7A3B", "icon": null, "seed_price": "1002:20", "gain": "1001:10,1002:200", "harvest": "1", "mature_time": "60", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1003, "name": "\u7389\u7C73", "icon": null, "seed_price": "1002:30", "gain": "1001:15,1002:300", "harvest": "1", "mature_time": "120", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1004, "name": "\u9EC4\u8C46", "icon": null, "seed_price": "1002:40", "gain": "1001:20,1002:400", "harvest": "1", "mature_time": "120", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1005, "name": "\u841D\u535C", "icon": null, "seed_price": "1002:50", "gain": "1001:15,1002:300", "harvest": "1", "mature_time": "180", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1006, "name": "\u9752\u83DC", "icon": null, "seed_price": "1002:60", "gain": "1001:5,1002:100", "harvest": "1", "mature_time": "180", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1007, "name": "\u571F\u8C46", "icon": null, "seed_price": "1002:70", "gain": "1001:5,1002:100", "harvest": "1", "mature_time": "240", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1008, "name": "\u80E1\u841D\u535C", "icon": null, "seed_price": "1002:80", "gain": "1001:10,1002:200", "harvest": "1", "mature_time": "240", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1009, "name": "\u897F\u7EA2\u67FF", "icon": null, "seed_price": "1002:90", "gain": "1001:10,1002:200", "harvest": "1", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1010, "name": "\u8FA3\u6912", "icon": null, "seed_price": "1002:100", "gain": "1001:15,1002:300", "harvest": "1", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1011, "name": "\u9EC4\u74DC", "icon": null, "seed_price": "1002:110", "gain": "1001:10,1002:200", "harvest": "1", "mature_time": "330", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1012, "name": "\u5927\u849C", "icon": null, "seed_price": "1002:120", "gain": "1001:20,1002:400", "harvest": "1", "mature_time": "330", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1013, "name": "\u7EA2\u85AF", "icon": null, "seed_price": "1002:130", "gain": "1001:10,1002:200", "harvest": "1", "mature_time": "330", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1014, "name": "\u5357\u74DC", "icon": null, "seed_price": "1002:140", "gain": "1001:20,1002:400", "harvest": "1", "mature_time": "360", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }, { "id": 1015, "name": "\u829D\u9EBB", "icon": null, "seed_price": "1002:150", "gain": "1001:15,1002:300", "harvest": "1", "mature_time": "360", "unlock_cost": "1002:1000", "unlock_reward": "1001:100,1002:1000", "desc": "\u8FD9\u662F\u4E00\u7C92\u5F88\u52AA\u529B\u7684\u5C0F\u9EA6\u5B50~\u5403\u4E86\u5B83\u5427" }], "pet": [{ "id": 1001, "name": "\u91D1\u6BDB\u72AC", "icon": null, "vitality_max": 100, "vitality_consume": 20, "cost": "1002:1000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 40, "ability": 40 }, { "id": 1002, "name": "\u8D35\u5BBE\u72AC", "icon": null, "vitality_max": 150, "vitality_consume": 21, "cost": "1002:10000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 50, "ability": 50 }, { "id": 1003, "name": "\u6CF0\u8FEA\u72AC", "icon": null, "vitality_max": 200, "vitality_consume": 22, "cost": "1002:20000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 60, "ability": 60 }, { "id": 1004, "name": "\u5FB7\u56FD\u7267\u7F8A\u72AC", "icon": null, "vitality_max": 250, "vitality_consume": 23, "cost": "1002:30000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 70, "ability": 70 }, { "id": 1005, "name": "\u8FB9\u955C\u7267\u7F8A\u72AC", "icon": null, "vitality_max": 300, "vitality_consume": 24, "cost": "1002:40000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 80, "ability": 80 }], "order": [{ "id": 1, "commission": "0.5", "condition": "1001:2" }, { "id": 2, "commission": "0.1", "condition": "1001:1,1002:1,1003:1" }, { "id": 3, "commission": "0.03", "condition": "1012:18,1004:4,1003:5,1005:6" }, { "id": 4, "commission": "0.24", "condition": "1012:10,1003:3,1007:7,1015:9" }, { "id": 5, "commission": "0.61", "condition": "1014:6,1012:9,1010:19,1006:4" }, { "id": 6, "commission": "0.07", "condition": "1010:14,1004:2,1012:3,1001:8" }, { "id": 7, "commission": "0.43", "condition": "1012:18,1001:11,1007:7,1008:19" }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:2,1015:20" }, { "id": 9, "commission": "0.39", "condition": "1002:2,1015:10,1011:8,1003:18" }, { "id": 10, "commission": "0.22", "condition": "1006:12,1012:5,1011:14,1003:6" }, { "id": 11, "commission": "0.76", "condition": "1009:11,1004:20,1012:9,1002:10" }, { "id": 12, "commission": "0.43", "condition": "1007:16,1003:11,1012:16,1005:6" }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:18" }, { "id": 14, "commission": "0.7", "condition": "1015:18,1008:18,1006:16,1001:14" }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:1,1011:2,1001:10" }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17" }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:16,1012:19,1001:14" }, { "id": 18, "commission": 0.48, "condition": "1008:4,1011:2,1009:15,1002:5" }, { "id": 19, "commission": 0.75, "condition": "1013:1,1003:20,1014:11,1001:17" }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:2" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:4,1005:6,1007:5" }, { "id": 22, "commission": "0.4", "condition": "1015:9,1007:12,1011:5,1004:17" }, { "id": 23, "commission": 0.2, "condition": "1003:19,1014:2,1015:16,1001:14" }, { "id": 24, "commission": 0.77, "condition": "1014:3,1001:17,1008:18,1004:5" }, { "id": 25, "commission": 0.64, "condition": "1002:13,1011:1,1010:15,1007:20" }, { "id": 26, "commission": 0.03, "condition": "1002:11,1011:12,1012:2,1003:19" }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:10,1011:7" }, { "id": 28, "commission": 0.53, "condition": "1014:7,1007:12,1011:17,1003:17" }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:8" }, { "id": 30, "commission": 0.14, "condition": "1011:7,1014:9,1006:14,1004:3" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:9,1006:11" }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:2,1012:12,1008:20" }, { "id": 33, "commission": 0.2, "condition": "1012:6,1013:11,1002:13,1009:16" }, { "id": 34, "commission": 0.02, "condition": "1009:9,1010:12,1011:14,1012:2" }, { "id": 35, "commission": 0.13, "condition": "1001:18,1004:19,1013:6,1003:10" }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:7,1007:17" }, { "id": 37, "commission": 0.44, "condition": "1012:4,1010:20,1002:4,1011:11" }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18" }, { "id": 39, "commission": 0.36, "condition": "1007:8,1012:13,1004:16,1002:16" }, { "id": 40, "commission": 0.28, "condition": "1004:10,1005:10,1008:18,1011:16" }, { "id": 41, "commission": 0.18, "condition": "1010:8,1009:8,1008:7,1011:6" }, { "id": 42, "commission": 0.43, "condition": "1009:1,1005:8,1007:2,1002:13" }, { "id": 43, "commission": 0.14, "condition": "1006:1,1004:4,1014:11,1008:5" }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:18,1002:4,1007:9" }, { "id": 45, "commission": 0.11, "condition": "1012:15,1010:3,1007:3,1011:3" }, { "id": 46, "commission": 0.39, "condition": "1003:12,1007:3,1010:16,1002:14" }, { "id": 47, "commission": 0.49, "condition": "1010:14,1015:20,1003:15,1014:6" }, { "id": 48, "commission": 0.06, "condition": "1013:17,1007:14,1008:17,1001:10" }, { "id": 49, "commission": 0.48, "condition": "1002:6,1004:11,1009:12,1006:20" }, { "id": 50, "commission": 0.05, "condition": "1006:17,1012:9,1008:2,1015:11" }, { "id": 51, "commission": 0.04, "condition": "1011:8,1004:19,1002:5,1003:11" }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:10,1001:15,1004:6" }, { "id": 53, "commission": 0.08, "condition": "1014:14,1012:12,1010:1,1015:18" }, { "id": 54, "commission": 0.45, "condition": "1005:2,1002:13,1009:6,1015:17" }, { "id": 55, "commission": 0.7, "condition": "1001:3,1014:9,1005:7,1010:15" }, { "id": 56, "commission": 0.05, "condition": "1006:17,1005:19,1009:17,1003:18" }, { "id": 57, "commission": 0.67, "condition": "1007:1,1008:17,1002:16,1009:15" }, { "id": 58, "commission": 0.32, "condition": "1006:10,1008:5,1005:4,1007:9" }, { "id": 59, "commission": 0.79, "condition": "1012:5,1009:1,1013:6,1008:5" }, { "id": 60, "commission": 0.69, "condition": "1015:6,1012:7,1010:1,1001:3" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:5,1011:15,1002:7" }, { "id": 62, "commission": 0.44, "condition": "1015:1,1007:15,1011:8,1006:6" }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:7" }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:9,1004:5" }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:10,1014:20,1005:15" }, { "id": 66, "commission": 0.73, "condition": "1004:15,1008:5,1002:14,1012:14" }, { "id": 67, "commission": 0.13, "condition": "1001:16,1012:20,1011:20,1003:1" }, { "id": 68, "commission": 0.69, "condition": "1013:4,1008:3,1006:6,1007:17" }, { "id": 69, "commission": 0.37, "condition": "1015:3,1004:9,1013:7,1009:1" }, { "id": 70, "commission": 0.71, "condition": "1010:3,1004:1,1011:7,1012:11" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:6,1003:8,1015:13" }, { "id": 72, "commission": 0.31, "condition": "1005:2,1002:18,1012:19,1010:14" }, { "id": 73, "commission": 0.39, "condition": "1012:4,1006:2,1003:7,1004:2" }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:3,1001:20" }, { "id": 75, "commission": 0.18, "condition": "1006:1,1014:3,1008:12,1002:5" }, { "id": 76, "commission": 0.51, "condition": "1007:1,1012:2,1004:11,1014:2" }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:6,1012:4,1007:7" }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:12" }, { "id": 79, "commission": 0.65, "condition": "1006:6,1004:8,1007:12,1011:7" }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:4" }, { "id": 81, "commission": 0.14, "condition": "1012:10,1015:8,1002:4,1003:8" }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14" }, { "id": 83, "commission": 0.53, "condition": "1010:9,1003:8,1007:12,1015:20" }, { "id": 84, "commission": 0.62, "condition": "1005:9,1014:6,1002:18,1007:8" }, { "id": 85, "commission": 0.37, "condition": "1011:10,1001:7,1012:12,1004:12" }, { "id": 86, "commission": 0.59, "condition": "1009:5,1011:20,1006:4,1015:11" }, { "id": 87, "commission": 0.11, "condition": "1006:6,1005:9,1013:10,1014:9" }, { "id": 88, "commission": 0.08, "condition": "1008:7,1011:4,1015:12,1014:11" }, { "id": 89, "commission": 0.02, "condition": "1002:17,1003:2,1005:11,1010:14" }, { "id": 90, "commission": 0.32, "condition": "1002:19,1013:8,1007:5,1001:13" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:10,1014:10,1007:16" }, { "id": 92, "commission": 0.13, "condition": "1004:8,1011:13,1008:15,1007:9" }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:9,1006:8,1008:11" }, { "id": 94, "commission": 0.22, "condition": "1002:6,1001:17,1013:16,1005:11" }, { "id": 95, "commission": 0.15, "condition": "1005:6,1001:14,1015:4,1008:16" }, { "id": 96, "commission": 0.06, "condition": "1003:4,1001:8,1007:8,1005:18" }, { "id": 97, "commission": 0.74, "condition": "1013:12,1009:13,1006:2,1011:2" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1001:0", "gain": null }, { "id": 2, "reward": "1002:1500", "cost": "1001:30000", "gain": 1 }, { "id": 3, "reward": "1002:2000", "cost": "1001:40000", "gain": 2 }, { "id": 4, "reward": "1002:2500", "cost": "1001:50000", "gain": 3 }, { "id": 5, "reward": "1002:3000", "cost": "1001:60000", "gain": 4 }, { "id": 6, "reward": "1002:3500", "cost": "1001:70000", "gain": 5 }, { "id": 7, "reward": "1002:4000", "cost": "1001:80000", "gain": 6 }, { "id": 8, "reward": "1002:4001", "cost": "1001:80001", "gain": 7 }, { "id": 9, "reward": "1002:4002", "cost": "1001:80002", "gain": 8 }, { "id": 10, "reward": "1002:4003", "cost": "1001:80003", "gain": 9 }], "feed": [{ "id": 1001, "name": "\u997C\u5E72", "icon": null, "vitality": 10, "cost": "1002:1000", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1002, "name": "\u575A\u679C", "icon": null, "vitality": 11, "cost": "1002:2000", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1003, "name": "\u706B\u817F", "icon": null, "vitality": 12, "cost": "1002:3000", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1004, "name": "\u725B\u8089", "icon": null, "vitality": 13, "cost": "1002:4000", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1005, "name": "\u732A\u8089", "icon": null, "vitality": 14, "cost": "1002:5000", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1006, "name": "\u9E21\u8089", "icon": null, "vitality": 15, "cost": "1002:6000", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }], "currency": [{ "id": 1001, "name": "\u94BB\u77F3", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "\u91D1\u5E01", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_time", "value": 30 }, { "id": "all_speed_up_times", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:40000,1002:50000,1002:20000,1002:20000,1002:20000,1002:20000,1002:20000" }] };

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
        icon: d.icon || `pet_feed/${d.id}.png`,
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
        icon: d.icon || `plant_icon/${d.id}_seed.png`,
        gain: Tools.parseString(d.gain).map((e) => getRewardCurrencyBase(e)),
        desc: d.desc,
        seed_price: getRewardCurrencyBase(d.seed_price),
        harvest: Number(d.harvest),
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

  // src/dataService/PlantService.ts
  var PlantService = class {
    constructor() {
      this.list = [];
    }
    init() {
      TableAnalyze_default.table("plant").list.forEach((d) => {
        this.list.push({ base: d, lock: d.unlock_cost ? true : false });
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

  // src/dataService/WarehouseService.ts
  var WarehouseService = class {
    constructor() {
      this.list = [];
    }
    init() {
      TableAnalyze_default.table("plant").list.forEach((d) => {
        this.list.push({
          base: d,
          count: Math.ceil(Math.random() * 100)
        });
      });
    }
    clear() {
      this.list.length = 0;
    }
  };
  var WarehouseService_default = new WarehouseService();

  // src/common/NetMaps.ts
  var ApiHttp;
  (function(ApiHttp2) {
    ApiHttp2["login"] = "/farmController/login";
    ApiHttp2["gather"] = "/farmController/gather";
    ApiHttp2["sow"] = "/farmController/sow";
    ApiHttp2["unlockLand"] = "farmController/unlockLand";
  })(ApiHttp || (ApiHttp = {}));

  // src/common/HttpDataControl.ts
  var HttpDataControl = class {
    forward(api, data, call) {
      switch (api) {
        case ApiHttp.login:
          this.login(data);
          break;
        default:
          break;
      }
      if (call) {
        call(data);
      }
      core_default.eventGlobal.event(api, data);
    }
    login(d) {
      PlantService_default.init();
      WarehouseService_default.init();
      UserInfo_default.uid = d.userId;
      UserInfo_default.diamond = d.diamond;
      UserInfo_default.gold = d.gold;
      UserInfo_default.nickname = d.nickName;
      UserInfo_default.avatar = d.profile || "";
      LocalStorageService_default.setJSON("isLogin", true);
      LandService_default.init(d.landList);
    }
  };
  var HttpDataControl_default = new HttpDataControl();

  // src/common/HttpControl.ts
  var HttpControl = class {
    constructor() {
      this.baseUrl = "//47.108.192.181:8092/farm";
    }
    init() {
      if (this.xhr)
        return;
      let xhr = new Laya.HttpRequest();
      xhr.on(Laya.Event.COMPLETE, this, this.completeHandler);
      xhr.on(Laya.Event.ERROR, this, this.errorHandler);
      xhr.on(Laya.Event.PROGRESS, this, this.processHandler);
      this.xhr = xhr;
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
      if (!((_a = data.data) == null ? void 0 : _a.userId)) {
        data.data.userId = UserInfo_default.uid;
      }
      console.log(`%c ==> send %c${data.api} `, `color:#82ccdd;font-weight:700;`, `color:#eb4d4b;font-weight:700;`);
      this.xhr.send(data.baseUrl + data.api, data.data, data.method, data.responseType, data.headers);
    }
    completeHandler(e) {
      var _a;
      if (e.resultCode) {
        return console.error(e);
      } else {
        console.log(`%c <== back %c${this.sendData.api} `, `color:#b8e994;font-weight:700;`, `color:#78e08f;font-weight:700;`, e.result);
        HttpDataControl_default.forward(this.sendData.api, e.result, (_a = this.sendData) == null ? void 0 : _a.call);
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
        case "ad_btn":
          HttpControl.inst.send({
            api: ApiHttp.unlockLand,
            data: {
              landId: this.data.id,
              seedsId: null,
              type: 1
            }
          });
          break;
      }
    }
  };

  // src/view/FieldLevelUpView.ts
  var FieldLevelUpView = class extends GameScript {
    onHdAwake() {
      console.log("awa");
    }
    onHdEnable() {
      console.log("en");
    }
    onOpened(e) {
      console.log(e);
    }
    onClick(e) {
      switch (e.target.name) {
        case "closeAddLandLayer":
          core_default.view.close(Res_default.views.FieldLevelUpView);
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
        this.login();
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
          this.login();
          break;
      }
    }
    login() {
      HttpControl.inst.send({
        api: ApiHttp.login,
        data: {
          wxId: "1111111111"
        },
        call: (d) => {
          var _a;
          if ((_a = this.data) == null ? void 0 : _a.call)
            this.data.call(d);
          this.loginBox.visible = false;
          this.loadBox.visible = true;
        }
      });
    }
    loadProgress(v) {
      this.loadBar.width = v * this.loadBarOldWidth;
    }
    onDisable() {
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
        this.showIcon(Boolean(this.data.farmseedsId));
        this.lvNode.visible = true;
        if (this.data.farmseedsId && this.data.growUpTime) {
          this.timeBox.visible = true;
          this.timeBox.active = true;
          this.icon.skin = TableAnalyze_default.table("plant").get(this.data.farmseedsId).icon;
          this.showShadowIcon(true);
          this.updateCountDown();
          this.updateLevel();
          this.topStateIcon.visible = true;
          this.topStateIconAni(true);
        } else {
          if (this.data.farmseedsId) {
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
    showTimeBox(show) {
      this.timeBox.visible = show;
    }
    showShadowIcon(show) {
      this.shadow.visible = show;
      this.shadow.active = show;
    }
    topStateIconAni(play) {
      if (!this.topStateIconTween) {
        this.topStateIconTween = Laya.TimeLine.to(this.topStateIcon, { y: this.topStateIcon.y - 50 }, 800, null).to(this.topStateIcon, { y: this.topStateIcon.y }, 800);
      }
      if (play) {
        this.topStateIconTween.play(null, true);
      } else {
        this.topStateIconTween.pause();
      }
    }
    updateCountDown() {
      if (this.data.growUpTime > 0) {
        this.countDownLb.text = Tools.formatSeconds(this.data.growUpTime);
        Laya.timer.once(1e3, this, () => {
          this.data.growUpTime--;
          this.countDownLb.text = Tools.formatSeconds(this.data.growUpTime);
          return this.updateCountDown();
        });
      } else {
        this.data.growUpTime = 0;
        console.log("\u5012\u8BA1\u65F6\u7ED3\u675F ");
        if (!this.buildIng)
          this.setStateIconSkin(3);
        this.showTimeBox(false);
      }
    }
    updateLevel() {
      this.lvNode.skin = `main_scene/img_level${this.data.level}.png`;
    }
    clearField() {
      this.topStateIcon.visible = false;
      this.data.farmseedsId = null;
      this.icon.skin = null;
      this.showIcon(false);
      this.showShadowIcon(false);
    }
    onClick() {
      console.log(this.fieldId, this.buildIng);
      if (this.data) {
        if (this.buildIng) {
          core_default.view.open(Res_default.views.FieldLevelUpView, { parm: this.fieldId });
          return;
        }
        if (this.data.farmseedsId) {
          if (this.data.growUpTime) {
            console.log("\u52A0\u901F");
            core_default.view.open(Res_default.views.SpeedUpView);
            return;
          } else {
            console.log("\u6536\u83B7");
            let plantObj = TableAnalyze_default.table("plant").get(this.data.farmseedsId), rewardList = [
              {
                obj: plantObj,
                count: plantObj.harvest,
                posType: 1
              }
            ];
            plantObj.gain.forEach((d) => {
              rewardList.push({
                obj: TableAnalyze_default.table("currency").get(d.obj.id),
                count: d.count,
                posType: d.obj.id == 1001 ? 2 : 1
              });
            });
            core_default.eventGlobal.event(EventMaps.play_get_reward, {
              node: this.owner,
              list: rewardList
            });
            this.clearField();
            return;
          }
        }
        core_default.view.open(Res_default.views.ShopView, {
          parm: {
            id: 0,
            call: (d) => {
              console.log(d);
              this.landList.get(this.fieldId).farmseedsId = d.base.id;
              this.landList.get(this.fieldId).growUpTime = 1;
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
              this.updateData();
              console.log(this.landList);
            }
          }
        });
      }
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
      this.landUpLayer = null;
      this.topLayerOnStage = null;
      this.topGoldIcon = null;
      this.topDiamondIcon = null;
      this.getRewardPrefab = null;
      this.floatRewardIcon = null;
      this.landList = [];
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
        this.avatarNode.skin = e;
      });
      this.addLandLayer.visible = false;
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
            e.showIcon(false);
          }
          e.setStateIconSkin(2);
          e.showTimeBox(false);
          e.showShadowIcon(false);
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
            if (e.data.landId && e.data.growUpTime) {
              e.showTimeBox(true);
              e.showShadowIcon(true);
            }
          }
          e.buildIng = false;
          if (e.data) {
            if (e.data.landId) {
              e.setStateIconSkin(e.data.growUpTime ? 1 : 3);
            }
          } else {
            e.setStateIconSkin(1);
          }
        });
      }
    }
    playGetRewardAni(obj) {
      obj.list.forEach((d, i) => {
        var _a;
        let node = Laya.Pool.getItemByCreateFun("floatRewardBox", this.getRewardPrefab.create, this.getRewardPrefab);
        node.y = obj.node.get_height() * obj.node.anchorY - i * 60;
        node.x = obj.node.get_width() * obj.node.anchorX;
        let icon = node.getChildByName("icon");
        icon.skin = ((_a = d.obj) == null ? void 0 : _a.icon) || "";
        let scale = 50 / icon.width;
        icon.scale(scale, scale);
        node.alpha = 0;
        obj.node.addChild(node);
        node.getChildByName("count").value = "x" + d.count;
        Laya.Tween.to(node, { y: node.y - 40, alpha: 1 }, 150, null, Laya.Handler.create(this, (e) => {
          Laya.timer.once(1e3, this, () => {
            Laya.Pool.recover("floatRewardBox", e);
            let localPosIcon = this.topLayerOnStage.globalToLocal(e.localToGlobal(Laya.Point.create()));
            e.removeSelf();
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
    core_default.eventOn(EventMaps.play_get_reward)
  ], MainView.prototype, "playGetRewardAni", 1);

  // src/view/OrderView.ts
  var OrderView = class extends core_default.gameScript {
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
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.SettingView);
          break;
      }
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

  // src/dataService/PetService.ts
  var PetService = class {
    constructor() {
      this.list = [];
    }
    init() {
      TableAnalyze_default.table("pet").list.forEach((d) => {
        this.list.push({
          base: d,
          lock: true
        });
      });
    }
    clear() {
      this.list.length = 0;
    }
  };
  var PetService_default = new PetService();

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
      this.petButBtn = null;
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
        return FeedService_default.list;
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
      } else {
        cell.skin = this.itemSelectBg[0];
      }
    }
    updateSelectDesc() {
      var _a, _b, _c;
      let d = this.getDataList()[this.itemListSelectIndex];
      console.log(d);
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
          let topBtnIndex = this.btnBoxTop.getChildIndex(e.target);
          if (this.topBtnSelectIndex != topBtnIndex) {
            this.topBtnSelectIndex = Number(topBtnIndex);
            this.updateTopBtnState();
          }
          break;
        case "buy_btn":
          ViewManager.inst.close(Res_default.views.ShopView);
          if ((_a = this.data) == null ? void 0 : _a.call)
            this.data.call(this.getDataList()[this.itemListSelectIndex]);
          break;
        case "unlock_buy":
        case "ad_unlock":
          PlantService_default.list[this.itemListSelectIndex].lock = false;
          this.itemList.changeItem(this.itemListSelectIndex, PlantService_default.list[this.itemListSelectIndex]);
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
      }
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
        PetService_default.init();
      let pet = PetService_default.list[this.selectPetIndex];
      this.petIcon.skin = pet.base.icon;
      this.petName.text = pet.base.name;
      this.petDesc.text = pet.base.desc;
      this.vitalityMax.value = pet.base.vitality_max + "";
      let btn_box = this.petButBtn.getChildByName("btn_box");
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
    onClick(e) {
      switch (e.target.name) {
        case "close":
          ViewManager.inst.close(Res_default.views.SignInView);
          break;
      }
    }
  };

  // src/view/SpeedUpView.ts
  var SpeedUpView = class extends core_default.gameScript {
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.SpeedUpView);
          break;
      }
    }
  };

  // src/view/TaskView.ts
  var TaskView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.image = null;
      this.game = "121212";
    }
    myEvent(e) {
      console.log("aa", e, this.image);
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          ViewManager.inst.close(Res_default.views.TaskView);
          break;
      }
    }
  };
  __decorateClass([
    EventOn("aa")
  ], TaskView.prototype, "myEvent", 1);

  // src/view/WarehouseView.ts
  var WarehouseView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.itemList = null;
      this.itemName = null;
      this.itemDesc = null;
      this.itemIcon = null;
      this.itemSellCountLb = null;
      this.itemSellPriceLb = null;
      this.itemSellPriceIcon = null;
      this.dataList = [];
      this.selectItemIndex = "0,0";
      this.selectItemSellCount = 0;
      this.unitPrice = 0;
    }
    onHdAwake() {
      this.itemList.renderHandler = new Laya.Handler(this, this.renderItemList);
      this.itemList.vScrollBarSkin = null;
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
      }
    }
    updateDesc(d) {
      this.itemIcon.skin = d.base.icon;
      this.itemName.text = d.base.name;
      this.itemDesc.text = d.base.desc;
      let price;
      for (let x = 0; x < d.base.gain.length; x++) {
        if (d.base.gain[x].obj.id == 1001) {
          price = d.base.gain[x];
          break;
        }
      }
      this.selectItemSellCount = Math.ceil(d.count / 2);
      this.unitPrice = price.count;
      this.itemSellPriceIcon.skin = price.obj.icon;
      this.updateSelectSellCount();
    }
    updateSelectSellCount() {
      this.itemSellCountLb.text = this.selectItemSellCount + "";
      this.itemSellPriceLb.text = "\u603B\u8BA1\uFF1A" + this.selectItemSellCount * this.unitPrice;
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
        HttpControl.inst.init();
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
        Laya.loader.load(Res_default.scenes, Laya.Handler.create(this, () => {
          console.log("ok");
          Laya.timer.frameOnce(1, this, () => {
            Laya.View.hideLoadingPage(300);
            ViewManager.inst.open(GameConfig.startScene);
          });
        }), Laya.Handler.create(this, (e) => {
          EventGlobal_default.event(EventMaps.load_progress, e);
        }, null, false));
      });
    }
    initGameData(d) {
    }
  };
  Main.customRenderID = [];
  new Main();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9Vc2VySW5mby50cyIsICIuLi8uLi9zcmMvY29yZS9pbmRleC50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Db25maWdHYW1lLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVGFibGUudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Ub29scy50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlQW5hbHl6ZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vTmV0TWFwcy50cyIsICIuLi8uLi9zcmMvY29tbW9uL0h0dHBEYXRhQ29udHJvbC50cyIsICIuLi8uLi9zcmMvY29tbW9uL0h0dHBDb250cm9sLnRzIiwgIi4uLy4uL3NyYy92aWV3L0FkZExhbmRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZpZWxkTGV2ZWxVcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTG9naW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L01haWxWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50LnRzIiwgIi4uLy4uL3NyYy92aWV3L01haW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L09yZGVyVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TZXR0aW5nVmlldy50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvRmVlZFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1BldFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2hvcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2lnbkluVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TcGVlZFVwVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9UYXNrVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9XYXJlaG91c2VWaWV3LnRzIiwgIi4uLy4uL3NyYy9HYW1lQ29uZmlnLnRzIiwgIi4uLy4uL3NyYy9NYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHU1NDBEXHU3OUYwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBFdmVudE1hcHMge1xyXG4gICAgLyoqIGxvYWQgXHU3NTRDXHU5NzYyXHU4RkRCXHU4ODRDXHU2NkY0XHU2NUIwICovXHJcbiAgICBsb2FkX3Byb2dyZXNzID0gXCJsb2FkX3Byb2dyZXNzXCIsXHJcblxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMCAqL1xyXG4gICAgdXBkYXRlX2ZpZWxkID0gXCJ1cGRhdGVfZmllbGRcIixcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjRBRFx1NjUzRVx1ODNCN1x1NUY5N1x1NTk1Nlx1NTJCMVx1NTJBOFx1NzUzQlxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICB7XHJcbiAgICAgICAgLy9cdTk3MDBcdTg5ODFcdTk4REVcdTkxRDFcdTVFMDFcdTc2ODRcdTUzQzJcdTgwMDNcdTgyODJcdTcwQjlcclxuICAgICAgICBub2RlOiB0aGlzLm93bmVyLFxyXG4gICAgICAgIC8vXHU4OTgxXHU5OERFXHU3Njg0XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL1x1ODlFM1x1Njc5MFx1NTk3RFx1NzY4NFx1NUUyNmljb25cdTc2ODRcdTY1NzBcdTYzNkVcclxuICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KDEwMDEpLFxyXG4gICAgICAgICAgICAgICAgLy9cdTY1NzBcdTkxQ0ZcclxuICAgICAgICAgICAgICAgIGNvdW50OiAyMCxcclxuICAgICAgICAgICAgICAgIC8vXHU4OTgxXHU5OERFXHU1M0JCXHU3Njg0XHU0RjREXHU3RjZFIDEgXHU5MUQxXHU1RTAxIDIgXHU5NEJCXHU3N0YzXHJcbiAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH1cclxuICAgICAqL1xyXG4gICAgcGxheV9nZXRfcmV3YXJkID0gXCJwbGF5X2dldF9yZXdhcmRcIixcclxufVxyXG4iLCAiLy9cdTRFRTNcdTc4MDFcdTc1MUZcdTYyMTBcdUZGMENcdTRFMERcdTg5ODFcdTYyNEJcdTUyQThcdTRGRUVcdTY1MzlcblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBlbnVtIHZpZXdzIFxuICAgIHtcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZSAqL1xuICAgICAgICBBZGRMYW5kVmlldyA9IFwic2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgRmllbGRMZXZlbFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTG9naW5WaWV3LnNjZW5lICovXG4gICAgICAgIExvZ2luVmlldyA9IFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZSAqL1xuICAgICAgICBNYWlsVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lICovXG4gICAgICAgIE1haW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lICovXG4gICAgICAgIE9yZGVyVmlldyA9IFwic2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZSAqL1xuICAgICAgICBTZXR0aW5nVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NldHRpbmdWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lICovXG4gICAgICAgIFNob3BWaWV3ID0gXCJzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZSAqL1xuICAgICAgICBTaWduSW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBTcGVlZFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NwZWVkVXBWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lICovXG4gICAgICAgIFRhc2tWaWV3ID0gXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZSAqL1xuICAgICAgICBXYXJlaG91c2VWaWV3ID0gXCJzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZVwiLCBcbiAgICB9XG5cbiBleHBvcnQgZW51bSBhdWRpb3MgXG4gICAge1xuICAgICAgICAvKiogYXVkaW8vd2luLm1wMyAqL1xuICAgICAgICB3aW4gPSBcInJlcy9hdWRpby93aW4ubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vcmVhZHkubXAzICovXG4gICAgICAgIHJlYWR5ID0gXCJyZXMvYXVkaW8vcmVhZHkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vbW92ZS5tcDMgKi9cbiAgICAgICAgbW92ZSA9IFwicmVzL2F1ZGlvL21vdmUubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZ28ubXAzICovXG4gICAgICAgIGdvID0gXCJyZXMvYXVkaW8vZ28ubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZmFpbC5tcDMgKi9cbiAgICAgICAgZmFpbCA9IFwicmVzL2F1ZGlvL2ZhaWwubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZHJhdy5tcDMgKi9cbiAgICAgICAgZHJhdyA9IFwicmVzL2F1ZGlvL2RyYXcubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vYnV0dG9uX2NsaWNrLm1wMyAqL1xuICAgICAgICBidXR0b25fY2xpY2sgPSBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsIFxuICAgIH1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9XYXJlaG91c2VWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU3BlZWRVcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9HZXRSZXdhcmQucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvRmxvYXRSZXdhcmRJY29uLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0ZpZWxkUHJlZmFiLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvY29tcG9uZW50cy9CdXR0b24ucHJlZmFiXCIsXG4gICAgICAgICAgICBcInJlcy9YYXNkZmFzZC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL3J1bGVfdGV4dC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2xvYWRpbmdCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ193b29kdGl0bGUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmVIb3VzZUJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlYmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc2hlbGYucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfcG9wVXBCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19sYW5kQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG91c2V0b3AucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzMucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzIucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19mYXJtbGFuZExvZ28ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9iZzEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvdnMudnNcIixcbiAgICAgICAgICAgIFwicmVzL3NoYWRlci9wcy5mc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vd2luLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vcmVhZHkubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9tb3ZlLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZ28ubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9mYWlsLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZHJhdy5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2J1dHRvbl9jbGljay5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BsYW50X2ljb24ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BldF9mZWVkLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9tYWluX3NjZW5lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZTEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5hdGxhc1wiXTtcbiAgICBcblxuLyoqXG4gKiBcdTYyNDBcdTY3MDlcdThENDRcdTZFOTBcbiAqL1xuY29uc3QgUmVzID0ge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBzY2VuZXM6IHNjZW5lcyxcbiAgICBhdWRpb3M6IGF1ZGlvcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcztcbiIsICIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5jb25zdCBFdmVudEdsb2JhbCA9IG5ldyBMYXlhLkV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1OEJBMlx1OTYwNVx1NEU4Qlx1NEVGNlx1NzY4NFx1N0M3Qlx1NzY4NFx1NTM5Rlx1NTc4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV2ZW50Q2xhc3M6IE1hcDxhbnksIHsga2V5OiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9PiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QSA9PiBcdTdFRDFcdTVCOUFcdTUyMzBcdTg4QzVcdTk5NzBcdTU2NjhcdTRFMEEgXHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRXZlbnRPbihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG4gICAgICAgIEV2ZW50Q2xhc3Muc2V0KHRhcmdldCwgeyBrZXk6IG5hbWUsIGZuOiBkZXNjcmlwdG9yLnZhbHVlIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1NUM1RVx1NjAyN1x1NjdFNVx1NjI3RVx1N0VEMVx1NUI5QVx1NTQwRFx1NzlGMFx1NzY4NFx1N0M3Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJpbmROYW1lQ2xhc3M6IE1hcDxhbnksIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRCeU5hbWUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIC8vICAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG5cclxuICAgIGlmICghQmluZE5hbWVDbGFzcy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgIEJpbmROYW1lQ2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgfVxyXG4gICAgQmluZE5hbWVDbGFzcy5nZXQodGFyZ2V0KS5wdXNoKHByb3BlcnR5S2V5KTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50R2xvYmFsO1xyXG4iLCAiY29uc3QgY2FsbGVyczogTWFwPGFueSwgRnVuY3Rpb25bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG5jbGFzcyBPYnNlcnZhYmxlQ29udHJvbDxjYWxsIGV4dGVuZHMgTGF5YS5TY3JpcHQ+IHtcclxuICAgIHByaXZhdGUga2V5RXZlbnRzOiBNYXA8YW55LCBNYXA8c3RyaW5nLCBGdW5jdGlvbltdPj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNcdTVDNUVcdTYwMjdcdTUwM0NcdTUzRDhcdTUzMTZcclxuICAgICAqICBbXHU1NzI4XHU3NTRDXHU5NzYyZGVzdHJveVx1NzY4NFx1NjVGNlx1NTAxOVx1NEYxQVx1ODFFQVx1NURGMVx1NkNFOFx1OTUwMFx1NzZEMVx1NTQyQ11cclxuICAgICAqIEBwYXJhbSBPYmogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHdhdGNoPFQgZXh0ZW5kcyB7fT4oT2JqOiBULCBjYWxsZXI6IGNhbGwpIHtcclxuICAgICAgICBpZiAoIWNhbGxlcnMuaGFzKGNhbGxlcikpIHtcclxuICAgICAgICAgICAgY2FsbGVycy5zZXQoY2FsbGVyLCBbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQga2V5RXZlbnQgPSB0aGlzLmtleUV2ZW50cztcclxuICAgICAgICBpZiAoIWtleUV2ZW50LmhhcyhPYmopKSB7XHJcbiAgICAgICAgICAgIGtleUV2ZW50LnNldChPYmosIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcdTc2ODRcdTVDNUVcdTYwMjdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUM1RVx1NjAyN1xyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsIFx1NTZERVx1OEMwM1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGtleUJpbmQgPSA8S2V5IGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLZXkgJiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfb2JqID0ga2V5RXZlbnQuZ2V0KE9iaik7XHJcbiAgICAgICAgICAgIGlmICghX29iai5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgX29iai5zZXQoa2V5LCBbXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqW1wiI1wiICsga2V5XSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmpbXCIjXCIgKyBrZXldID0gT2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iaiwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1wiI1wiICsga2V5XSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb2JqLmdldChrZXkpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCIjXCIgKyBrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbGwuYmluZChjYWxsKTtcclxuICAgICAgICAgICAgX29iai5nZXQoa2V5KS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGwoT2JqW2tleV0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NEYyMFx1NTE2NVx1NzY4NGNhbGxlclx1NTIyMFx1OTY2NFx1NUY1M1x1NTI0RFx1N0VEMVx1NUI5QVx1NzY4NFx1NjI0MFx1NjcwOVx1NzY4NFx1NEU4Qlx1NEVGNiBcdTYyMTZcdTYzMDdcdTVCOUFcdTg5RTNcdTUxQjNcdTZBMjFcdTRFMkFcdTVCRjlcdThDNjFcdThEREZcdTVGNTNcdTUyNERjYWxsZXJcdTdFRDFcdTVCOUFcdTc2ODRcdTc2RDFcdTU0MkNcclxuICAgICAqIEBwYXJhbSBjYWxsZXIgXHU3NkQxXHU1NDJDXHU2NUY2XHU3RUQxXHU1QjlBXHU3Njg0XHU1NzNBXHU2NjZGXHU1QkY5XHU4QzYxXHJcbiAgICAgKiBAcGFyYW0gb2JqIFx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICByZW1vdmVCeUNhbGxlcihjYWxsZXI6IGNhbGwsIG9iajogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcik/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmdldChvYmopLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBrLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9ic2VydmFibGVDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgRXZlbnRHbG9iYWwsIHsgQmluZE5hbWVDbGFzcywgRXZlbnRDbGFzcyB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcblxyXG4vKipcclxuICogXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyaXB0IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvL0V2ZW50T25cdTg4QzVcdTk5NzBcdTU2NjhcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUFcclxuICAgICAgICBsZXQgYmluZEV2ZW50ID0gRXZlbnRDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIGJpbmRFdmVudCAmJiBFdmVudEdsb2JhbC5vbihiaW5kRXZlbnQua2V5LCB0aGlzLCBiaW5kRXZlbnQuZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkQXdha2VcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uQXdha2UoKSB7XHJcbiAgICAgICAgLy9cdTdFRDlcdTg4QzVcdTk5NzBcdTU2NjhcdThCQjBcdTVGNTVcdTc2ODRcdTVDNUVcdTYwMjdcdUZGMENcdTY3RTVcdTYyN0VcdTgyODJcdTcwQjlcclxuICAgICAgICBCaW5kTmFtZUNsYXNzLmdldCh0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpc1tlXSA9IHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbkhkQXdha2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NzU0Q1x1OTc2Mlx1NEYyMFx1NTE2NVx1NTNDMlx1NjU3MFxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKiBAcGFyYW0gZVxyXG4gICAgICovXHJcbiAgICBvbk9wZW5lZChlKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU2RkMwXHU2RDNCXHU1NDBFXHU2MjY3XHU4ODRDXHVGRjBDXHU2QjY0XHU2NUY2XHU2MjQwXHU2NzA5XHU4MjgyXHU3MEI5XHU1NDhDXHU3RUM0XHU0RUY2XHU1NzQ3XHU1REYyXHU1MjFCXHU1RUZBXHU1QjhDXHU2QkQ1XHVGRjBDXHU2QjIxXHU2NUI5XHU2Q0Q1XHU1M0VBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZEF3YWtlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZEVuYWJsZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkRW5hYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTU0MkZcdTc1MjhcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTgyODJcdTcwQjlcdTg4QUJcdTZERkJcdTUyQTBcdTUyMzBcdTgyMUVcdTUzRjBcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRW5hYmxlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFN0YXJ0XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25IZFN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1N0IyQ1x1NEUwMFx1NkIyMVx1NjI2N1x1ODg0Q3VwZGF0ZVx1NEU0Qlx1NTI0RFx1NjI2N1x1ODg0Q1x1RkYwQ1x1NTNFQVx1NEYxQVx1NjI2N1x1ODg0Q1x1NEUwMFx1NkIyMVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRTdGFydCgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRVcGRhdGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMub25IZFVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QkNGXHU1RTI3XHU2NkY0XHU2NUIwXHU2NUY2XHU2MjY3XHU4ODRDXHVGRjBDXHU1QzNEXHU5MUNGXHU0RTBEXHU4OTgxXHU1NzI4XHU4RkQ5XHU5MUNDXHU1MTk5XHU1OTI3XHU1RkFBXHU3M0FGXHU5MDNCXHU4RjkxXHU2MjE2XHU4MDA1XHU0RjdGXHU3NTI4Z2V0Q29tcG9uZW50XHU2NUI5XHU2Q0Q1XHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFVwZGF0ZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREaXNhYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkRGlzYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU3OTgxXHU3NTI4XHU2NUY2XHU2MjY3XHU4ODRDXHVGRjBDXHU2QkQ0XHU1OTgyXHU0RUNFXHU4MjgyXHU3MEI5XHU0RUNFXHU4MjFFXHU1M0YwXHU3OUZCXHU5NjY0XHU1NDBFXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZERpc2FibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRGVzdHJveVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9mZkFsbENhbGxlcih0aGlzKTtcclxuICAgICAgICB0aGlzLm9uSGREZXN0cm95KCk7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDEsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTZFMDVcdTk2NjRcdThEREZcdTVGNTNcdTUyNERcdTdDN0JcdTdFRDFcdTVCOUFcdTYyNDBcdTY3MDlcdTc2ODRcdTVDNUVcdTYwMjdcdTg5QzJcdTVCREZcdTY1QjlcdTZDRDVcclxuICAgICAgICAgICAgT2JzZXJ2YWJsZVByb3BlcnR5LnJlbW92ZUJ5Q2FsbGVyKHRoaXMpO1xyXG4gICAgICAgICAgICAvL1x1OTUwMFx1NkJDMVx1NjVGNlx1NkUwNVx1OTY2NFx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1NUYxNVx1NzUyOFxyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGtleXMubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleXNbeF1dID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjRCXHU1MkE4XHU4QzAzXHU3NTI4XHU4MjgyXHU3MEI5XHU5NTAwXHU2QkMxXHU2NUY2XHU2MjY3XHU4ODRDXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZERlc3Ryb3koKSB7fVxyXG5cclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICogXHU3NTRDXHU5NzYyXHU2MjUzXHU1RjAwXHU0RUU1XHU1NDBFXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAgICAvLyAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgIC8vICAqL1xyXG4gICAgLy8gb25PcGVuZWQoZCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKDExMSk7XHJcbiAgICAvLyB9XHJcbn1cclxuIiwgImltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcblxyXG4vL2NsYXNzIFZpZXdTaG93QW5pIGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpiZywgdGlwczpcIlx1ODBDQ1x1NjY2RlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBiZzogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29udGVudCwgdGlwczpcIlx1NTE4NVx1NUJCOVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBjb250ZW50OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6YW5pVHlwZSx0aXBzOlwiXHU1MkE4XHU3NTNCXHU3QzdCXHU1NzhCXCIsdHlwZTpFZGl0T3B0aW9uLG9wdGlvbjpcImJvdHRvbVRvU2hvdyxzY2FsZVNob3dcIn0qL1xyXG4gICAgLy8gXHU4RkQ0XHU1NkRFXHU1QjU3XHU3QjI2XHU0RTMyXHJcbiAgICBhbmlUeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSB0d2Vlbkxpc3Q6IExheWEuVHdlZW5bXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvT3BlbigpIHt9XHJcbiAgICAvKipcclxuICAgICAqICBcdTUxNzNcdTk1RURcdTYyMTBcdTUyOUZcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9DbG9zZSgpIHt9XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMub3duZXIgYXMgTGF5YS5WaWV3O1xyXG5cclxuICAgICAgICB0aGlzLmJnLmFscGhhID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIHRoaXMuYmcsXHJcbiAgICAgICAgICAgICAgICB7IGFscGhhOiAwLjc1IH0sXHJcbiAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5hbmlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzY2FsZVNob3dcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5zY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi5mcm9tKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgeDogTGF5YS5zdGFnZS53aWR0aCAvIDIsIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMiwgc2NhbGVYOiAwLCBzY2FsZVk6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuYm90dG9tID0gLXRoaXMuY29udGVudC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBib3R0b206IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuY2lyY091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVmlldygpIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmcsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBhbHBoYTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hbmlUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2NhbGVTaG93XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVYOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVZOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGJvdHRvbTogLXRoaXMuY29udGVudC5oZWlnaHQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5IYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4uY2xlYXIoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG4iLCAiLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuY29uc3QgaW5zdGFuY2VMaXN0OiBNYXA8bnVtYmVyLCB7IG5ldyAoKTogdm9pZCB9PiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBcdTVCOUVcdTRGOEJcdTc2ODRpZFxyXG4gKi9cclxubGV0IGluc3RhbmNlSWQ6IG51bWJlciA9IDEwMDtcclxuXHJcbi8qKlxyXG4gKiBcdTUzNTVcdTRGOEJcdTg4QzVcdTk5NzBcdTU2NjhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnN0YW5jZSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghaW5zdGFuY2VMaXN0Lmhhcyh0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSkpIHtcclxuICAgICAgICBpbnN0YW5jZUlkKys7XHJcbiAgICAgICAgdGFyZ2V0W1wiI2luc3RhbmNlSWRcIl0gPSBpbnN0YW5jZUlkO1xyXG4gICAgICAgIGluc3RhbmNlTGlzdC5zZXQoaW5zdGFuY2VJZCwgbmV3IHRhcmdldCgpKTtcclxuICAgIH1cclxuICAgIHRhcmdldFtrZXldID0gaW5zdGFuY2VMaXN0LmdldChpbnN0YW5jZUlkKTtcclxufVxyXG4iLCAiaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IFJlcywgeyB2aWV3cyB9IGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU5NzAwXHU4OTgxXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAqL1xyXG5pbnRlcmZhY2UgVmlld09wZW5QYXJtIHtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyICovXHJcbiAgICBzaG93TG9hZD86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCAqL1xyXG4gICAgc2hvd0xvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTk2OTBcdTg1Q0Zsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0IFx1OUVEOFx1OEJBNDAgKi9cclxuICAgIGhpZGVMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1MTczXHU5NUVEXHU1MTc2XHU0RUQ2XHU1NzNBXHU2NjZGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBdHJ1ZVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVx1RkYwQ1x1MzAxMFx1NkNFOFx1NjEwRlx1MzAxMVx1ODhBQlx1NTE3M1x1OTVFRFx1NzY4NFx1NTczQVx1NjY2Rlx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1OEJCRVx1N0Y2RWF1dG9EZXN0cm95QXRSZW1vdmVkPXRydWVcdUZGMENcdTUyMTlcdThENDRcdTZFOTBcdTUzRUZcdTgwRkRcdTRFMERcdTgwRkRcdTg4QUJcdTU2REVcdTY1MzZcdUZGMENcdTk3MDBcdTg5ODFcdTgxRUFcdTVERjFcdTYyNEJcdTUyQThcdTU2REVcdTY1MzZcclxuICAgICAqIHRvZG8gXHU3M0IwXHU1NzI4XHU4RkQ5XHU0RTJBXHU4QzAzXHU3NTI4XHU3Njg0XHU2NjJGXHU1RjE1XHU2NENFXHU4MUVBXHU1RTI2XHU3Njg0XHU2NUI5XHU2Q0Q1XHVGRjBDXHU2Q0ExXHU2NzA5XHU4RDcwXHU4RkQ5XHU5MUNDXHU3Njg0XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0VGXHU4MEZEXHU0RjFBXHU2NzA5XHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgKiBcdTczQjBcdTU3MjhcdTUxNjhcdTY2MkZmYWxzZSBcdTU0MEVcdTY3MUZcdTY3MDlcdTk3MDBcdTg5ODFcdTUxOERcdTRGMThcdTUzMTZcdThGRDlcdTRFMkFcdTRFMUNcdTg5N0ZcdUZGMENcdTRFMERcdTgwRkRcdTUxNzNcdTk1RURcdTUxNzZcdTVCODNcdTYyNDBcdTY3MDlcdTc1NENcdTk3NjJcdThGRDhcdTY3MkFcdTVCOUVcdTczQjBcclxuICAgICAqL1xyXG4gICAgY2xvc2VPdGhlcj86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHBhcm0/OiBhbnk7XHJcbiAgICAvKiogIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBjb21wbGV0ZT86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1NTJBMFx1OEY3RFx1OEZEQlx1NUVBNlx1NTZERVx1OEMwM1x1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcHJvZ3Jlc3M/OiBIYW5kbGVyO1xyXG59XHJcblxyXG5jb25zdCB2aWV3TWFwczogeyB1cmw6IHN0cmluZzsgdmlldzogTGF5YS5WaWV3IH1bXSA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpZXdNYW5hZ2VyIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IFZpZXdNYW5hZ2VyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU0RTAwXHU0RTJBXHU3NTRDXHU5NzYyXHJcbiAgICAgKiBAcGFyYW0gdXJsIFx1NzU0Q1x1OTc2Mlx1NTczMFx1NTc0MCBSZXMudmlld3NcdTkxQ0NcdTc2ODRcclxuICAgICAqIEBwYXJhbSBkYXRhIFx1NTNDMlx1NjU3MFxyXG4gICAgICovXHJcbiAgICBvcGVuKFxyXG4gICAgICAgIHVybDogdmlld3MsXHJcbiAgICAgICAgZGF0YTogVmlld09wZW5QYXJtID0ge1xyXG4gICAgICAgICAgICBjbG9zZU90aGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93TG9hZERlbGF5OiAxMDAsXHJcbiAgICAgICAgICAgIGhpZGVMb2FkRGVsYXk6IDAsXHJcbiAgICAgICAgfVxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibWlzcyBwYXRoIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEuc2hvd0xvYWQpIHtcclxuICAgICAgICAgICAgTGF5YS5WaWV3LnNob3dMb2FkaW5nUGFnZShudWxsLCBkYXRhLnNob3dMb2FkRGVsYXkpO1xyXG4gICAgICAgICAgICBpZiAodXJsICE9PSBSZXMudmlld3MuTG9naW5WaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZShkYXRhLmhpZGVMb2FkRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGEuY2xvc2VPdGhlciA9IGZhbHNlO1xyXG4gICAgICAgIExheWEuVmlldy5vcGVuKFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEuY2xvc2VPdGhlcixcclxuICAgICAgICAgICAgZGF0YS5wYXJtLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChlOiBMYXlhLlZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgIT0gUmVzLnZpZXdzLkxvZ2luVmlldykgdmlld01hcHMucHVzaCh7IHVybDogdXJsLCB2aWV3OiBlIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbkxpc3QgPSBlLmdldENvbXBvbmVudHMoTGF5YS5TY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbkxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25MaXN0LmZvckVhY2goKGUpID0+IGUuZW5hYmxlZCAmJiBlLm9uT3BlbmVkICYmIGUub25PcGVuZWQoZGF0YS5wYXJtKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNvbXBsZXRlICYmIGRhdGEuY29tcGxldGUoZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICBgJWMgPT0+IG9wZW4gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzdlZDZkZjtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzIyYTZiMztmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRhdGEucHJvZ3Jlc3NcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MTczXHU5NUVEXHU4OUM2XHU1NkZFXHJcbiAgICAgKiBAcGFyYW0gdXJsIFx1NzU0Q1x1OTc2Mlx1NTczMFx1NTc0MCBSZXMudmlld3NcdTkxQ0NcdTc2ODRcclxuICAgICAqIEBwYXJhbSBhbGwgXHU1NDBDXHU0RTAwXHU0RTJBXHU3NTRDXHU5NzYyXHU4OEFCIFx1NTkxQVx1NkIyMVx1NjI1M1x1NUYwMFx1RkYwQ1x1NTE2OFx1NTIyMFx1OTY2NFx1NzUyOFx1OEZEOVx1NEUyQVxyXG4gICAgICogQHBhcmFtIGRlc3Ryb3kgXHU5NTAwXHU2QkMxICAgVE9ET1x1RkYwOFx1OUVEOFx1OEJBNFx1NEYxQVx1OTUwMFx1NkJDMVx1NjI0MFx1NjcwOVx1NUI1MFx1ODI4Mlx1NzBCOVx1RkYwQ1x1NjcyQVx1NkQ0Qlx1OEJENVx1NjYyRlx1NTQyNlx1NjcwOVx1OTVFRVx1OTg5OFx1RkYwOVxyXG4gICAgICovXHJcbiAgICBhc3luYyBjbG9zZShcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGFsbDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBhbmlDb206IHR5cGVvZiBWaWV3U2hvd0FuaSB8IHR5cGVvZiBGbG9hdFZpZXdTaG93QW5pID0gVmlld1Nob3dBbmlcclxuICAgICkge1xyXG4gICAgICAgIC8vVE9ETyBcdThGRDlcdTkxQ0NcdTczQjBcdTU3MjhcdTUxNjhcdTkwRThcdTc1MjhkZXN0cm95IFx1NUYxNVx1NjRDRXJlbW92ZVx1NTk3RFx1NTBDRlx1NjcwOVx1NzBCOVx1OTVFRVx1OTg5OFx1RkYwQ1x1NTE4RFx1OTAxQVx1OEZDN3ZpZXcub3Blblx1NEYxQVx1OTFDRFx1NjVCMFx1Njc4NFx1NUVGQVx1N0VDNFx1NEVGNlxyXG4gICAgICAgIGRlc3Ryb3kgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgdkFuaTogVmlld1Nob3dBbmk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHZpZXdNYXBzLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT09IHZpZXdNYXBzW3hdLnVybCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSB2aWV3TWFwc1t4XTtcclxuICAgICAgICAgICAgICAgIHZpZXdNYXBzLnNwbGljZSh4LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2QW5pID0gdi52aWV3LmdldENvbXBvbmVudChhbmlDb20gYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGlmICh2QW5pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdkFuaS5jbG9zZVZpZXcoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghYWxsKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cdTRGRERcdThCQzFcdTU5ODJcdTY3OUNcdTU3M0FcdTY2NkZcdTVCOENcdTUxNjhcdTZDQTFcdTY3MDlcdTc1NENcdTk3NjJcdTg4QUJcdTYyNTNcdTVGMDBcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTVGQzVcdTYyNTNcdTVGMDBcdTRFM0JcdTU3M0FcdTY2NkZcclxuICAgICAgICBsZXQgY2xvc2VMZW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAoIXZpZXdNYXBzW3hdLnZpZXcucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUxlbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VMZW4gPT09IHZpZXdNYXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLk1haW5WaWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdNYXBzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVmlld0xvZyh1cmw6IHN0cmluZywgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlYyA8PT0gJHtkZXN0cm95ID8gXCJkZXN0cm95XCIgOiBcImRpc2FibGVcIn0gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNmZjc5Nzk7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1OTY2NFx1N0YxM1x1NUI1OFx1NzU0Q1x1OTc2MlxyXG4gICAgICovXHJcbiAgICBjbGVhclZpZXdNYXBzKCkge1xyXG4gICAgICAgIHZpZXdNYXBzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZWZhdWx0UmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZGVmYXVsdFJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkb3duUmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZG93blJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppc1NjYWxlLCB0aXBzOlwiXHU2NjJGXHU1NDI2XHU3RjI5XHU2NTNFXCIsdHlwZTpDaGVja30qL1xyXG4gICAgcHJpdmF0ZSBpc1NjYWxlID0gZmFsc2U7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2NhbGVWYWwsIHRpcHM6XCJcdTdGMjlcdTY1M0VcdTc2ODRcdTUwM0NcIix0eXBlOk51bWJlciwgZGVmYXVsdDowLjl9Ki9cclxuICAgIHByaXZhdGUgc2NhbGVWYWw6IG51bWJlciA9IDAuOTtcclxuXHJcbiAgICBwcml2YXRlIG9sZFNjYWxlWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVk6IG51bWJlcjtcclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzU2NhbGUpO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5tb3VzZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2xkU2NhbGVYID0gKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLmdldF9zY2FsZVgoKTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWSA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZURvd24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZG93blJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkodGhpcy5zY2FsZVZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU91dCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuICAgIG9uTW91c2VVcCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFuaShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2NhbGUpIHJldHVybjtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICB7IHNjYWxlWDogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWCwgc2NhbGVZOiBzY2FsZSAqIHRoaXMub2xkU2NhbGVZIH0sXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTa2luKHNraW46IHN0cmluZykge1xyXG4gICAgICAgIGlmICghc2tpbikgcmV0dXJuO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuSW1hZ2UpLnNraW4gPSBza2luO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwgImltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4uL2NvcmUvSW5zdGFuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcclxuICovXHJcbmNsYXNzIFVzZXJJbmZvIHtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTU0MERcdTc5RjAgKi9cclxuICAgIG5pY2tuYW1lOiBzdHJpbmcgPSBcIm5hbWVcIjtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdpZCAqL1xyXG4gICAgdWlkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzUyOFx1NTQwRFx1NTkzNFx1NTBDRiAqL1xyXG4gICAgYXZhdGFyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIFx1OTRCQlx1NzdGMyAqL1xyXG4gICAgZGlhbW9uZDogbnVtYmVyID0gOTk5O1xyXG4gICAgLyoqIFx1OTFEMVx1NUUwMSAqL1xyXG4gICAgZ29sZDogbnVtYmVyID0gOTk5O1xyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubmlja25hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VySW5mbygpO1xyXG4iLCAiaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50T24sIEZpbmRCeU5hbWUgfSBmcm9tIFwiLi9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4vSW5zdGFuY2VcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9WaWV3TWFuYWdlclwiO1xyXG5cclxuY29uc3QgQ29yZSA9IHtcclxuICAgIC8qKiBcdTVCRjlcdThDNjFcdTVDNUVcdTYwMjdcdTdFRDFcdTVCOUFcdTUzRUZcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTYgKi9cclxuICAgIG9ic2VydmFibGVQcm9wZXJ0eTogT2JzZXJ2YWJsZVByb3BlcnR5LFxyXG4gICAgLyoqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OCAqL1xyXG4gICAgdmlldzogVmlld01hbmFnZXIuaW5zdCxcclxuICAgIC8qKiBcdTVGMTVcdTY0Q0VcdTgxMUFcdTY3MkNcdTdFQzRcdTRFRjYgKi9cclxuICAgIGdhbWVTY3JpcHQ6IEdhbWVTY3JpcHQsXHJcbiAgICAvKiogXHU1MzU1XHU0RjhCXHU4OEM1XHU5OTcwXHU1NjY4ICovXHJcbiAgICBpbnN0YW5jZTogSW5zdGFuY2UsXHJcbiAgICAvKiogXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbiAgICBldmVudE9uOiBFdmVudE9uLFxyXG4gICAgLyoqIHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWVcdTc2ODRcdTc3MDFcdTRFOEJcdTUxOTlcdTZDRDUgXHU1M0VBXHU4MEZEXHU2N0U1XHU2MjdFXHU0RTBCXHU0RTAwXHU3RUE3XHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG4gICAgZmluZEJ5TmFtZTogRmluZEJ5TmFtZSxcclxuICAgIC8qKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjYgKi9cclxuICAgIGV2ZW50R2xvYmFsOiBFdmVudEdsb2JhbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcmU7XHJcbiIsICJleHBvcnQgdHlwZSBMYW5kT2JqID0gTmV0SW5pdFtcImxhbmRMaXN0XCJdWzBdO1xyXG5cclxuY2xhc3MgTGFuZFNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgbGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBpbml0KGxpc3Q6IExhbmRPYmpbXSkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExhbmQoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTU3NTdcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBpZCBcdTU3MUZcdTU3MzBpZFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGdldExhbmQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkRGQlx1NTJBMFx1NjIxNlx1NjYyRlx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGQgXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGFkZExhbmQoZDogTGFuZE9iaikge1xyXG4gICAgICAgIHRoaXMubGlzdC5zZXQoZC5sYW5kSWQsIGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU3QTdBXHU1NzFGXHU1NzMwXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgTGFuZFNlcnZpY2UoKTtcclxuIiwgIi8qKlxyXG4gKiBcdTZFMzhcdTYyMEZcdTkxNERcdTdGNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKiBcdTZFMzhcdTYyMEZcdTY3MkNcdTU3MzBcdTUwQThcdTVCNThrZXkgKi9cclxuICAgIGxvY2FsS2V5OiBcImxvdmVfSERfZmFybVwiLFxyXG59O1xyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NjcyQ1x1NTczMFx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NCBsb2NhbERhdGEgXHU1NzI4XHU4RkQ5XHU0RTJBXHU5MUNDXHU5NzYyXHU1QjlBXHU0RTQ5XHU1OTdEXHJcbiAqL1xyXG5jbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9jYWxEYXRhID0ge1xyXG4gICAgICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhID0gTGF5YS5Mb2NhbFN0b3JhZ2UuZ2V0SlNPTihDb25maWdHYW1lLmxvY2FsS2V5KSB8fCB0aGlzLmxvY2FsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4M0I3XHU1M0Q2XHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBnZXRKU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4QkJFXHU3RjZFXHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBzZXRKU09OPGtleSBleHRlbmRzIGtleW9mIHR5cGVvZiB0aGlzLmxvY2FsRGF0YT4oa2V5OiBrZXksIGRhdGE6IHR5cGVvZiB0aGlzLmxvY2FsRGF0YVtrZXldKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbERhdGFba2V5XSA9IGRhdGE7XHJcbiAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTihDb25maWdHYW1lLmxvY2FsS2V5LCB0aGlzLmxvY2FsRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgTGF5YS5Mb2NhbFN0b3JhZ2Uuc2V0SlNPTihDb25maWdHYW1lLmxvY2FsS2V5LCB7fSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2NhbFN0b3JhZ2VTZXJ2aWNlKCk7XHJcbiIsICIvKiogXHU2MjQwXHU2NzA5XHU4ODY4ICovXG4gICAgICAgIGV4cG9ydCBjb25zdCBUYWJsZSA9IHtcInRhc2tcIjpbe1wiaWRcIjoxMDAxLFwicmV3YXJkXCI6XCIxMDAxOjEwMFwiLFwidGltZXNcIjoxLFwidGl0bGVcIjpcIlx1N0I3RVx1NTIzMFx1OTg4Nlx1N0VBMlx1NTMwNVwiLFwiZGVzY1wiOlwiXHU3NzBCXHU4OUM2XHU5ODkxXHU3QjdFXHU1MjMwXHVGRjBDXHU2QkNGXHU2NUU1MVx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwMixcInJld2FyZFwiOlwiMTAwMToyMDBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU4M0RDXHU1NzMwXHU1MkEwXHU5MDFGMTBcdTZCMjFcIixcImRlc2NcIjpcIlx1OEZEOFx1NURFRSZcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDMsXCJyZXdhcmRcIjpcIjEwMDE6MzAwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1ODNEQ1x1NTczMFx1NjUzNjEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdThGRDhcdTVERUUmXHU2QjIxXCIsXCJpY29uXCI6bnVsbH1dLFwic2lnbkluXCI6W3tcImlkXCI6MTAwMSxcImRheXNcIjoxLFwicmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjEwMDIsXCJkYXlzXCI6MixcInJld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxMDAzLFwiZGF5c1wiOjMsXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCJ9LHtcImlkXCI6MTAwNCxcImRheXNcIjo0LFwicmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjEwMDUsXCJkYXlzXCI6NSxcInJld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxMDA2LFwiZGF5c1wiOjYsXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCJ9LHtcImlkXCI6MTAwNyxcImRheXNcIjo3LFwicmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjEwMDgsXCJkYXlzXCI6OCxcInJld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxMDA5LFwiZGF5c1wiOjksXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCJ9LHtcImlkXCI6MTAxMCxcImRheXNcIjoxMCxcInJld2FyZFwiOlwiMTAwMToxMDBcIn1dLFwicGxhbnRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU1QzBGXHU5RUE2XCIsXCJpY29uXCI6bnVsbCxcInNlZWRfcHJpY2VcIjpcIjEwMDI6MTBcIixcImdhaW5cIjpcIjEwMDE6NSwxMDAyOjEwMFwiLFwiaGFydmVzdFwiOlwiMVwiLFwibWF0dXJlX3RpbWVcIjpcIjYwXCIsXCJ1bmxvY2tfY29zdFwiOm51bGwsXCJ1bmxvY2tfcmV3YXJkXCI6bnVsbCxcImRlc2NcIjpcIlx1OEZEOVx1NjYyRlx1NEUwMFx1N0M5Mlx1NUY4OFx1NTJBQVx1NTI5Qlx1NzY4NFx1NUMwRlx1OUVBNlx1NUI1MH5cdTU0MDNcdTRFODZcdTVCODNcdTU0MjdcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU2QzM0XHU3QTNCXCIsXCJpY29uXCI6bnVsbCxcInNlZWRfcHJpY2VcIjpcIjEwMDI6MjBcIixcImdhaW5cIjpcIjEwMDE6MTAsMTAwMjoyMDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCI2MFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxMDAsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1NzM4OVx1N0M3M1wiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjMwXCIsXCJnYWluXCI6XCIxMDAxOjE1LDEwMDI6MzAwXCIsXCJoYXJ2ZXN0XCI6XCIxXCIsXCJtYXR1cmVfdGltZVwiOlwiMTIwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjEwMCwxMDAyOjEwMDBcIixcImRlc2NcIjpcIlx1OEZEOVx1NjYyRlx1NEUwMFx1N0M5Mlx1NUY4OFx1NTJBQVx1NTI5Qlx1NzY4NFx1NUMwRlx1OUVBNlx1NUI1MH5cdTU0MDNcdTRFODZcdTVCODNcdTU0MjdcIn0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU5RUM0XHU4QzQ2XCIsXCJpY29uXCI6bnVsbCxcInNlZWRfcHJpY2VcIjpcIjEwMDI6NDBcIixcImdhaW5cIjpcIjEwMDE6MjAsMTAwMjo0MDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCIxMjBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTg0MURcdTUzNUNcIixcImljb25cIjpudWxsLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MFwiLFwiZ2FpblwiOlwiMTAwMToxNSwxMDAyOjMwMFwiLFwiaGFydmVzdFwiOlwiMVwiLFwibWF0dXJlX3RpbWVcIjpcIjE4MFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxMDAsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9LHtcImlkXCI6MTAwNixcIm5hbWVcIjpcIlx1OTc1Mlx1ODNEQ1wiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjYwXCIsXCJnYWluXCI6XCIxMDAxOjUsMTAwMjoxMDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCIxODBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifSx7XCJpZFwiOjEwMDcsXCJuYW1lXCI6XCJcdTU3MUZcdThDNDZcIixcImljb25cIjpudWxsLFwic2VlZF9wcmljZVwiOlwiMTAwMjo3MFwiLFwiZ2FpblwiOlwiMTAwMTo1LDEwMDI6MTAwXCIsXCJoYXJ2ZXN0XCI6XCIxXCIsXCJtYXR1cmVfdGltZVwiOlwiMjQwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjEwMCwxMDAyOjEwMDBcIixcImRlc2NcIjpcIlx1OEZEOVx1NjYyRlx1NEUwMFx1N0M5Mlx1NUY4OFx1NTJBQVx1NTI5Qlx1NzY4NFx1NUMwRlx1OUVBNlx1NUI1MH5cdTU0MDNcdTRFODZcdTVCODNcdTU0MjdcIn0se1wiaWRcIjoxMDA4LFwibmFtZVwiOlwiXHU4MEUxXHU4NDFEXHU1MzVDXCIsXCJpY29uXCI6bnVsbCxcInNlZWRfcHJpY2VcIjpcIjEwMDI6ODBcIixcImdhaW5cIjpcIjEwMDE6MTAsMTAwMjoyMDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCIyNDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifSx7XCJpZFwiOjEwMDksXCJuYW1lXCI6XCJcdTg5N0ZcdTdFQTJcdTY3RkZcIixcImljb25cIjpudWxsLFwic2VlZF9wcmljZVwiOlwiMTAwMjo5MFwiLFwiZ2FpblwiOlwiMTAwMToxMCwxMDAyOjIwMFwiLFwiaGFydmVzdFwiOlwiMVwiLFwibWF0dXJlX3RpbWVcIjpcIjMwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxMDAsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9LHtcImlkXCI6MTAxMCxcIm5hbWVcIjpcIlx1OEZBM1x1NjkxMlwiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjEwMFwiLFwiZ2FpblwiOlwiMTAwMToxNSwxMDAyOjMwMFwiLFwiaGFydmVzdFwiOlwiMVwiLFwibWF0dXJlX3RpbWVcIjpcIjMwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxMDAsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9LHtcImlkXCI6MTAxMSxcIm5hbWVcIjpcIlx1OUVDNFx1NzREQ1wiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjExMFwiLFwiZ2FpblwiOlwiMTAwMToxMCwxMDAyOjIwMFwiLFwiaGFydmVzdFwiOlwiMVwiLFwibWF0dXJlX3RpbWVcIjpcIjMzMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxMDAsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9LHtcImlkXCI6MTAxMixcIm5hbWVcIjpcIlx1NTkyN1x1ODQ5Q1wiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjEyMFwiLFwiZ2FpblwiOlwiMTAwMToyMCwxMDAyOjQwMFwiLFwiaGFydmVzdFwiOlwiMVwiLFwibWF0dXJlX3RpbWVcIjpcIjMzMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxMDAsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9LHtcImlkXCI6MTAxMyxcIm5hbWVcIjpcIlx1N0VBMlx1ODVBRlwiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjEzMFwiLFwiZ2FpblwiOlwiMTAwMToxMCwxMDAyOjIwMFwiLFwiaGFydmVzdFwiOlwiMVwiLFwibWF0dXJlX3RpbWVcIjpcIjMzMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxMDAsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9LHtcImlkXCI6MTAxNCxcIm5hbWVcIjpcIlx1NTM1N1x1NzREQ1wiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjE0MFwiLFwiZ2FpblwiOlwiMTAwMToyMCwxMDAyOjQwMFwiLFwiaGFydmVzdFwiOlwiMVwiLFwibWF0dXJlX3RpbWVcIjpcIjM2MFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxMDAsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9LHtcImlkXCI6MTAxNSxcIm5hbWVcIjpcIlx1ODI5RFx1OUVCQlwiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjE1MFwiLFwiZ2FpblwiOlwiMTAwMToxNSwxMDAyOjMwMFwiLFwiaGFydmVzdFwiOlwiMVwiLFwibWF0dXJlX3RpbWVcIjpcIjM2MFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxMDAsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9XSxcInBldFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTkxRDFcdTZCREJcdTcyQUNcIixcImljb25cIjpudWxsLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjIwLFwiY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdTcyMzFcdTVCODNcdTVDMzFcdTRFNzBcdTVCODN+XHU1QjgzXHU1QzMxXHU2NjJGXHU2NzA5XHU3MEI5XHU2MUQyflwiLFwic2Vuc2l0aXZlXCI6NDAsXCJhYmlsaXR5XCI6NDB9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1OEQzNVx1NUJCRVx1NzJBQ1wiLFwiaWNvblwiOm51bGwsXCJ2aXRhbGl0eV9tYXhcIjoxNTAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MjEsXCJjb3N0XCI6XCIxMDAyOjEwMDAwXCIsXCJkZXNjXCI6XCJcdTcyMzFcdTVCODNcdTVDMzFcdTRFNzBcdTVCODN+XHU1QjgzXHU1QzMxXHU2NjJGXHU2NzA5XHU3MEI5XHU2MUQyflwiLFwic2Vuc2l0aXZlXCI6NTAsXCJhYmlsaXR5XCI6NTB9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1NkNGMFx1OEZFQVx1NzJBQ1wiLFwiaWNvblwiOm51bGwsXCJ2aXRhbGl0eV9tYXhcIjoyMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MjIsXCJjb3N0XCI6XCIxMDAyOjIwMDAwXCIsXCJkZXNjXCI6XCJcdTcyMzFcdTVCODNcdTVDMzFcdTRFNzBcdTVCODN+XHU1QjgzXHU1QzMxXHU2NjJGXHU2NzA5XHU3MEI5XHU2MUQyflwiLFwic2Vuc2l0aXZlXCI6NjAsXCJhYmlsaXR5XCI6NjB9LHtcImlkXCI6MTAwNCxcIm5hbWVcIjpcIlx1NUZCN1x1NTZGRFx1NzI2N1x1N0Y4QVx1NzJBQ1wiLFwiaWNvblwiOm51bGwsXCJ2aXRhbGl0eV9tYXhcIjoyNTAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MjMsXCJjb3N0XCI6XCIxMDAyOjMwMDAwXCIsXCJkZXNjXCI6XCJcdTcyMzFcdTVCODNcdTVDMzFcdTRFNzBcdTVCODN+XHU1QjgzXHU1QzMxXHU2NjJGXHU2NzA5XHU3MEI5XHU2MUQyflwiLFwic2Vuc2l0aXZlXCI6NzAsXCJhYmlsaXR5XCI6NzB9LHtcImlkXCI6MTAwNSxcIm5hbWVcIjpcIlx1OEZCOVx1OTU1Q1x1NzI2N1x1N0Y4QVx1NzJBQ1wiLFwiaWNvblwiOm51bGwsXCJ2aXRhbGl0eV9tYXhcIjozMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MjQsXCJjb3N0XCI6XCIxMDAyOjQwMDAwXCIsXCJkZXNjXCI6XCJcdTcyMzFcdTVCODNcdTVDMzFcdTRFNzBcdTVCODN+XHU1QjgzXHU1QzMxXHU2NjJGXHU2NzA5XHU3MEI5XHU2MUQyflwiLFwic2Vuc2l0aXZlXCI6ODAsXCJhYmlsaXR5XCI6ODB9XSxcIm9yZGVyXCI6W3tcImlkXCI6MSxcImNvbW1pc3Npb25cIjpcIjAuNVwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjJcIn0se1wiaWRcIjoyLFwiY29tbWlzc2lvblwiOlwiMC4xXCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MSwxMDAyOjEsMTAwMzoxXCJ9LHtcImlkXCI6MyxcImNvbW1pc3Npb25cIjpcIjAuMDNcIixcImNvbmRpdGlvblwiOlwiMTAxMjoxOCwxMDA0OjQsMTAwMzo1LDEwMDU6NlwifSx7XCJpZFwiOjQsXCJjb21taXNzaW9uXCI6XCIwLjI0XCIsXCJjb25kaXRpb25cIjpcIjEwMTI6MTAsMTAwMzozLDEwMDc6NywxMDE1OjlcIn0se1wiaWRcIjo1LFwiY29tbWlzc2lvblwiOlwiMC42MVwiLFwiY29uZGl0aW9uXCI6XCIxMDE0OjYsMTAxMjo5LDEwMTA6MTksMTAwNjo0XCJ9LHtcImlkXCI6NixcImNvbW1pc3Npb25cIjpcIjAuMDdcIixcImNvbmRpdGlvblwiOlwiMTAxMDoxNCwxMDA0OjIsMTAxMjozLDEwMDE6OFwifSx7XCJpZFwiOjcsXCJjb21taXNzaW9uXCI6XCIwLjQzXCIsXCJjb25kaXRpb25cIjpcIjEwMTI6MTgsMTAwMToxMSwxMDA3OjcsMTAwODoxOVwifSx7XCJpZFwiOjgsXCJjb21taXNzaW9uXCI6XCIwLjU2XCIsXCJjb25kaXRpb25cIjpcIjEwMDg6MTMsMTAwNzozLDEwMDU6MiwxMDE1OjIwXCJ9LHtcImlkXCI6OSxcImNvbW1pc3Npb25cIjpcIjAuMzlcIixcImNvbmRpdGlvblwiOlwiMTAwMjoyLDEwMTU6MTAsMTAxMTo4LDEwMDM6MThcIn0se1wiaWRcIjoxMCxcImNvbW1pc3Npb25cIjpcIjAuMjJcIixcImNvbmRpdGlvblwiOlwiMTAwNjoxMiwxMDEyOjUsMTAxMToxNCwxMDAzOjZcIn0se1wiaWRcIjoxMSxcImNvbW1pc3Npb25cIjpcIjAuNzZcIixcImNvbmRpdGlvblwiOlwiMTAwOToxMSwxMDA0OjIwLDEwMTI6OSwxMDAyOjEwXCJ9LHtcImlkXCI6MTIsXCJjb21taXNzaW9uXCI6XCIwLjQzXCIsXCJjb25kaXRpb25cIjpcIjEwMDc6MTYsMTAwMzoxMSwxMDEyOjE2LDEwMDU6NlwifSx7XCJpZFwiOjEzLFwiY29tbWlzc2lvblwiOlwiMC4xN1wiLFwiY29uZGl0aW9uXCI6XCIxMDEwOjUsMTAwNToxMywxMDAxOjgsMTAxMjoxOFwifSx7XCJpZFwiOjE0LFwiY29tbWlzc2lvblwiOlwiMC43XCIsXCJjb25kaXRpb25cIjpcIjEwMTU6MTgsMTAwODoxOCwxMDA2OjE2LDEwMDE6MTRcIn0se1wiaWRcIjoxNSxcImNvbW1pc3Npb25cIjpcIjAuNDhcIixcImNvbmRpdGlvblwiOlwiMTAwMjoxMCwxMDA1OjEsMTAxMToyLDEwMDE6MTBcIn0se1wiaWRcIjoxNixcImNvbW1pc3Npb25cIjowLjI5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjExLDEwMTQ6NCwxMDA2OjgsMTAwNToxN1wifSx7XCJpZFwiOjE3LFwiY29tbWlzc2lvblwiOjAuMzcsXCJjb25kaXRpb25cIjpcIjEwMDY6MTQsMTAwNzoxNiwxMDEyOjE5LDEwMDE6MTRcIn0se1wiaWRcIjoxOCxcImNvbW1pc3Npb25cIjowLjQ4LFwiY29uZGl0aW9uXCI6XCIxMDA4OjQsMTAxMToyLDEwMDk6MTUsMTAwMjo1XCJ9LHtcImlkXCI6MTksXCJjb21taXNzaW9uXCI6MC43NSxcImNvbmRpdGlvblwiOlwiMTAxMzoxLDEwMDM6MjAsMTAxNDoxMSwxMDAxOjE3XCJ9LHtcImlkXCI6MjAsXCJjb21taXNzaW9uXCI6MC42NyxcImNvbmRpdGlvblwiOlwiMTAwMzoxMCwxMDExOjE3LDEwMDI6MTQsMTAwNToyXCJ9LHtcImlkXCI6MjEsXCJjb21taXNzaW9uXCI6MC42NCxcImNvbmRpdGlvblwiOlwiMTAxMDoxMCwxMDAzOjQsMTAwNTo2LDEwMDc6NVwifSx7XCJpZFwiOjIyLFwiY29tbWlzc2lvblwiOlwiMC40XCIsXCJjb25kaXRpb25cIjpcIjEwMTU6OSwxMDA3OjEyLDEwMTE6NSwxMDA0OjE3XCJ9LHtcImlkXCI6MjMsXCJjb21taXNzaW9uXCI6MC4yLFwiY29uZGl0aW9uXCI6XCIxMDAzOjE5LDEwMTQ6MiwxMDE1OjE2LDEwMDE6MTRcIn0se1wiaWRcIjoyNCxcImNvbW1pc3Npb25cIjowLjc3LFwiY29uZGl0aW9uXCI6XCIxMDE0OjMsMTAwMToxNywxMDA4OjE4LDEwMDQ6NVwifSx7XCJpZFwiOjI1LFwiY29tbWlzc2lvblwiOjAuNjQsXCJjb25kaXRpb25cIjpcIjEwMDI6MTMsMTAxMToxLDEwMTA6MTUsMTAwNzoyMFwifSx7XCJpZFwiOjI2LFwiY29tbWlzc2lvblwiOjAuMDMsXCJjb25kaXRpb25cIjpcIjEwMDI6MTEsMTAxMToxMiwxMDEyOjIsMTAwMzoxOVwifSx7XCJpZFwiOjI3LFwiY29tbWlzc2lvblwiOjAuNDksXCJjb25kaXRpb25cIjpcIjEwMDc6MTYsMTAxNDoxNiwxMDA2OjEwLDEwMTE6N1wifSx7XCJpZFwiOjI4LFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMTQ6NywxMDA3OjEyLDEwMTE6MTcsMTAwMzoxN1wifSx7XCJpZFwiOjI5LFwiY29tbWlzc2lvblwiOjAuNzcsXCJjb25kaXRpb25cIjpcIjEwMTI6MTAsMTAwNToxNiwxMDEwOjE0LDEwMTU6OFwifSx7XCJpZFwiOjMwLFwiY29tbWlzc2lvblwiOjAuMTQsXCJjb25kaXRpb25cIjpcIjEwMTE6NywxMDE0OjksMTAwNjoxNCwxMDA0OjNcIn0se1wiaWRcIjozMSxcImNvbW1pc3Npb25cIjowLjUzLFwiY29uZGl0aW9uXCI6XCIxMDA3OjE4LDEwMTA6MTQsMTAxMzo5LDEwMDY6MTFcIn0se1wiaWRcIjozMixcImNvbW1pc3Npb25cIjowLjQ2LFwiY29uZGl0aW9uXCI6XCIxMDEzOjE5LDEwMDU6MiwxMDEyOjEyLDEwMDg6MjBcIn0se1wiaWRcIjozMyxcImNvbW1pc3Npb25cIjowLjIsXCJjb25kaXRpb25cIjpcIjEwMTI6NiwxMDEzOjExLDEwMDI6MTMsMTAwOToxNlwifSx7XCJpZFwiOjM0LFwiY29tbWlzc2lvblwiOjAuMDIsXCJjb25kaXRpb25cIjpcIjEwMDk6OSwxMDEwOjEyLDEwMTE6MTQsMTAxMjoyXCJ9LHtcImlkXCI6MzUsXCJjb21taXNzaW9uXCI6MC4xMyxcImNvbmRpdGlvblwiOlwiMTAwMToxOCwxMDA0OjE5LDEwMTM6NiwxMDAzOjEwXCJ9LHtcImlkXCI6MzYsXCJjb21taXNzaW9uXCI6MC4yMSxcImNvbmRpdGlvblwiOlwiMTAwMzoxMSwxMDA4OjE3LDEwMTQ6NywxMDA3OjE3XCJ9LHtcImlkXCI6MzcsXCJjb21taXNzaW9uXCI6MC40NCxcImNvbmRpdGlvblwiOlwiMTAxMjo0LDEwMTA6MjAsMTAwMjo0LDEwMTE6MTFcIn0se1wiaWRcIjozOCxcImNvbW1pc3Npb25cIjowLjIyLFwiY29uZGl0aW9uXCI6XCIxMDE0OjEzLDEwMDQ6MTksMTAwMjoxMSwxMDE1OjE4XCJ9LHtcImlkXCI6MzksXCJjb21taXNzaW9uXCI6MC4zNixcImNvbmRpdGlvblwiOlwiMTAwNzo4LDEwMTI6MTMsMTAwNDoxNiwxMDAyOjE2XCJ9LHtcImlkXCI6NDAsXCJjb21taXNzaW9uXCI6MC4yOCxcImNvbmRpdGlvblwiOlwiMTAwNDoxMCwxMDA1OjEwLDEwMDg6MTgsMTAxMToxNlwifSx7XCJpZFwiOjQxLFwiY29tbWlzc2lvblwiOjAuMTgsXCJjb25kaXRpb25cIjpcIjEwMTA6OCwxMDA5OjgsMTAwODo3LDEwMTE6NlwifSx7XCJpZFwiOjQyLFwiY29tbWlzc2lvblwiOjAuNDMsXCJjb25kaXRpb25cIjpcIjEwMDk6MSwxMDA1OjgsMTAwNzoyLDEwMDI6MTNcIn0se1wiaWRcIjo0MyxcImNvbW1pc3Npb25cIjowLjE0LFwiY29uZGl0aW9uXCI6XCIxMDA2OjEsMTAwNDo0LDEwMTQ6MTEsMTAwODo1XCJ9LHtcImlkXCI6NDQsXCJjb21taXNzaW9uXCI6MC42MixcImNvbmRpdGlvblwiOlwiMTAwOToxNSwxMDAzOjE4LDEwMDI6NCwxMDA3OjlcIn0se1wiaWRcIjo0NSxcImNvbW1pc3Npb25cIjowLjExLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE1LDEwMTA6MywxMDA3OjMsMTAxMTozXCJ9LHtcImlkXCI6NDYsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwMzoxMiwxMDA3OjMsMTAxMDoxNiwxMDAyOjE0XCJ9LHtcImlkXCI6NDcsXCJjb21taXNzaW9uXCI6MC40OSxcImNvbmRpdGlvblwiOlwiMTAxMDoxNCwxMDE1OjIwLDEwMDM6MTUsMTAxNDo2XCJ9LHtcImlkXCI6NDgsXCJjb21taXNzaW9uXCI6MC4wNixcImNvbmRpdGlvblwiOlwiMTAxMzoxNywxMDA3OjE0LDEwMDg6MTcsMTAwMToxMFwifSx7XCJpZFwiOjQ5LFwiY29tbWlzc2lvblwiOjAuNDgsXCJjb25kaXRpb25cIjpcIjEwMDI6NiwxMDA0OjExLDEwMDk6MTIsMTAwNjoyMFwifSx7XCJpZFwiOjUwLFwiY29tbWlzc2lvblwiOjAuMDUsXCJjb25kaXRpb25cIjpcIjEwMDY6MTcsMTAxMjo5LDEwMDg6MiwxMDE1OjExXCJ9LHtcImlkXCI6NTEsXCJjb21taXNzaW9uXCI6MC4wNCxcImNvbmRpdGlvblwiOlwiMTAxMTo4LDEwMDQ6MTksMTAwMjo1LDEwMDM6MTFcIn0se1wiaWRcIjo1MixcImNvbW1pc3Npb25cIjowLjQzLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE1LDEwMTM6MTAsMTAwMToxNSwxMDA0OjZcIn0se1wiaWRcIjo1MyxcImNvbW1pc3Npb25cIjowLjA4LFwiY29uZGl0aW9uXCI6XCIxMDE0OjE0LDEwMTI6MTIsMTAxMDoxLDEwMTU6MThcIn0se1wiaWRcIjo1NCxcImNvbW1pc3Npb25cIjowLjQ1LFwiY29uZGl0aW9uXCI6XCIxMDA1OjIsMTAwMjoxMywxMDA5OjYsMTAxNToxN1wifSx7XCJpZFwiOjU1LFwiY29tbWlzc2lvblwiOjAuNyxcImNvbmRpdGlvblwiOlwiMTAwMTozLDEwMTQ6OSwxMDA1OjcsMTAxMDoxNVwifSx7XCJpZFwiOjU2LFwiY29tbWlzc2lvblwiOjAuMDUsXCJjb25kaXRpb25cIjpcIjEwMDY6MTcsMTAwNToxOSwxMDA5OjE3LDEwMDM6MThcIn0se1wiaWRcIjo1NyxcImNvbW1pc3Npb25cIjowLjY3LFwiY29uZGl0aW9uXCI6XCIxMDA3OjEsMTAwODoxNywxMDAyOjE2LDEwMDk6MTVcIn0se1wiaWRcIjo1OCxcImNvbW1pc3Npb25cIjowLjMyLFwiY29uZGl0aW9uXCI6XCIxMDA2OjEwLDEwMDg6NSwxMDA1OjQsMTAwNzo5XCJ9LHtcImlkXCI6NTksXCJjb21taXNzaW9uXCI6MC43OSxcImNvbmRpdGlvblwiOlwiMTAxMjo1LDEwMDk6MSwxMDEzOjYsMTAwODo1XCJ9LHtcImlkXCI6NjAsXCJjb21taXNzaW9uXCI6MC42OSxcImNvbmRpdGlvblwiOlwiMTAxNTo2LDEwMTI6NywxMDEwOjEsMTAwMTozXCJ9LHtcImlkXCI6NjEsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAxNToxMiwxMDA2OjUsMTAxMToxNSwxMDAyOjdcIn0se1wiaWRcIjo2MixcImNvbW1pc3Npb25cIjowLjQ0LFwiY29uZGl0aW9uXCI6XCIxMDE1OjEsMTAwNzoxNSwxMDExOjgsMTAwNjo2XCJ9LHtcImlkXCI6NjMsXCJjb21taXNzaW9uXCI6MC4wMSxcImNvbmRpdGlvblwiOlwiMTAxMDoxOCwxMDA1OjE2LDEwMDk6MTMsMTAwMzo3XCJ9LHtcImlkXCI6NjQsXCJjb21taXNzaW9uXCI6MC4yNyxcImNvbmRpdGlvblwiOlwiMTAwNzoxNywxMDA2OjEwLDEwMDU6OSwxMDA0OjVcIn0se1wiaWRcIjo2NSxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMDM6MTAsMTAxNDoyMCwxMDA1OjE1XCJ9LHtcImlkXCI6NjYsXCJjb21taXNzaW9uXCI6MC43MyxcImNvbmRpdGlvblwiOlwiMTAwNDoxNSwxMDA4OjUsMTAwMjoxNCwxMDEyOjE0XCJ9LHtcImlkXCI6NjcsXCJjb21taXNzaW9uXCI6MC4xMyxcImNvbmRpdGlvblwiOlwiMTAwMToxNiwxMDEyOjIwLDEwMTE6MjAsMTAwMzoxXCJ9LHtcImlkXCI6NjgsXCJjb21taXNzaW9uXCI6MC42OSxcImNvbmRpdGlvblwiOlwiMTAxMzo0LDEwMDg6MywxMDA2OjYsMTAwNzoxN1wifSx7XCJpZFwiOjY5LFwiY29tbWlzc2lvblwiOjAuMzcsXCJjb25kaXRpb25cIjpcIjEwMTU6MywxMDA0OjksMTAxMzo3LDEwMDk6MVwifSx7XCJpZFwiOjcwLFwiY29tbWlzc2lvblwiOjAuNzEsXCJjb25kaXRpb25cIjpcIjEwMTA6MywxMDA0OjEsMTAxMTo3LDEwMTI6MTFcIn0se1wiaWRcIjo3MSxcImNvbW1pc3Npb25cIjowLjI5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjExLDEwMDI6NiwxMDAzOjgsMTAxNToxM1wifSx7XCJpZFwiOjcyLFwiY29tbWlzc2lvblwiOjAuMzEsXCJjb25kaXRpb25cIjpcIjEwMDU6MiwxMDAyOjE4LDEwMTI6MTksMTAxMDoxNFwifSx7XCJpZFwiOjczLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMTI6NCwxMDA2OjIsMTAwMzo3LDEwMDQ6MlwifSx7XCJpZFwiOjc0LFwiY29tbWlzc2lvblwiOjAuMjYsXCJjb25kaXRpb25cIjpcIjEwMDM6MjAsMTAxMjoxOCwxMDAyOjMsMTAwMToyMFwifSx7XCJpZFwiOjc1LFwiY29tbWlzc2lvblwiOjAuMTgsXCJjb25kaXRpb25cIjpcIjEwMDY6MSwxMDE0OjMsMTAwODoxMiwxMDAyOjVcIn0se1wiaWRcIjo3NixcImNvbW1pc3Npb25cIjowLjUxLFwiY29uZGl0aW9uXCI6XCIxMDA3OjEsMTAxMjoyLDEwMDQ6MTEsMTAxNDoyXCJ9LHtcImlkXCI6NzcsXCJjb21taXNzaW9uXCI6MC4yMSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDA5OjYsMTAxMjo0LDEwMDc6N1wifSx7XCJpZFwiOjc4LFwiY29tbWlzc2lvblwiOjAuNzMsXCJjb25kaXRpb25cIjpcIjEwMTU6MTYsMTAxMjoxNiwxMDA2OjIwLDEwMDg6MTJcIn0se1wiaWRcIjo3OSxcImNvbW1pc3Npb25cIjowLjY1LFwiY29uZGl0aW9uXCI6XCIxMDA2OjYsMTAwNDo4LDEwMDc6MTIsMTAxMTo3XCJ9LHtcImlkXCI6ODAsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwOToxNSwxMDAzOjE2LDEwMDQ6MTksMTAwNzo0XCJ9LHtcImlkXCI6ODEsXCJjb21taXNzaW9uXCI6MC4xNCxcImNvbmRpdGlvblwiOlwiMTAxMjoxMCwxMDE1OjgsMTAwMjo0LDEwMDM6OFwifSx7XCJpZFwiOjgyLFwiY29tbWlzc2lvblwiOjAuMixcImNvbmRpdGlvblwiOlwiMTAwNToxMiwxMDExOjE5LDEwMDk6MTgsMTAwMjoxNFwifSx7XCJpZFwiOjgzLFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMTA6OSwxMDAzOjgsMTAwNzoxMiwxMDE1OjIwXCJ9LHtcImlkXCI6ODQsXCJjb21taXNzaW9uXCI6MC42MixcImNvbmRpdGlvblwiOlwiMTAwNTo5LDEwMTQ6NiwxMDAyOjE4LDEwMDc6OFwifSx7XCJpZFwiOjg1LFwiY29tbWlzc2lvblwiOjAuMzcsXCJjb25kaXRpb25cIjpcIjEwMTE6MTAsMTAwMTo3LDEwMTI6MTIsMTAwNDoxMlwifSx7XCJpZFwiOjg2LFwiY29tbWlzc2lvblwiOjAuNTksXCJjb25kaXRpb25cIjpcIjEwMDk6NSwxMDExOjIwLDEwMDY6NCwxMDE1OjExXCJ9LHtcImlkXCI6ODcsXCJjb21taXNzaW9uXCI6MC4xMSxcImNvbmRpdGlvblwiOlwiMTAwNjo2LDEwMDU6OSwxMDEzOjEwLDEwMTQ6OVwifSx7XCJpZFwiOjg4LFwiY29tbWlzc2lvblwiOjAuMDgsXCJjb25kaXRpb25cIjpcIjEwMDg6NywxMDExOjQsMTAxNToxMiwxMDE0OjExXCJ9LHtcImlkXCI6ODksXCJjb21taXNzaW9uXCI6MC4wMixcImNvbmRpdGlvblwiOlwiMTAwMjoxNywxMDAzOjIsMTAwNToxMSwxMDEwOjE0XCJ9LHtcImlkXCI6OTAsXCJjb21taXNzaW9uXCI6MC4zMixcImNvbmRpdGlvblwiOlwiMTAwMjoxOSwxMDEzOjgsMTAwNzo1LDEwMDE6MTNcIn0se1wiaWRcIjo5MSxcImNvbW1pc3Npb25cIjowLjE5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMTM6MTAsMTAxNDoxMCwxMDA3OjE2XCJ9LHtcImlkXCI6OTIsXCJjb21taXNzaW9uXCI6MC4xMyxcImNvbmRpdGlvblwiOlwiMTAwNDo4LDEwMTE6MTMsMTAwODoxNSwxMDA3OjlcIn0se1wiaWRcIjo5MyxcImNvbW1pc3Npb25cIjowLjM0LFwiY29uZGl0aW9uXCI6XCIxMDEzOjEyLDEwMDE6OSwxMDA2OjgsMTAwODoxMVwifSx7XCJpZFwiOjk0LFwiY29tbWlzc2lvblwiOjAuMjIsXCJjb25kaXRpb25cIjpcIjEwMDI6NiwxMDAxOjE3LDEwMTM6MTYsMTAwNToxMVwifSx7XCJpZFwiOjk1LFwiY29tbWlzc2lvblwiOjAuMTUsXCJjb25kaXRpb25cIjpcIjEwMDU6NiwxMDAxOjE0LDEwMTU6NCwxMDA4OjE2XCJ9LHtcImlkXCI6OTYsXCJjb21taXNzaW9uXCI6MC4wNixcImNvbmRpdGlvblwiOlwiMTAwMzo0LDEwMDE6OCwxMDA3OjgsMTAwNToxOFwifSx7XCJpZFwiOjk3LFwiY29tbWlzc2lvblwiOjAuNzQsXCJjb25kaXRpb25cIjpcIjEwMTM6MTIsMTAwOToxMywxMDA2OjIsMTAxMToyXCJ9XSxcImxhbmdcIjpbXSxcImxhbmRMZXZlbFwiOlt7XCJpZFwiOjEsXCJyZXdhcmRcIjpcIjEwMDI6MFwiLFwiY29zdFwiOlwiMTAwMTowXCIsXCJnYWluXCI6bnVsbH0se1wiaWRcIjoyLFwicmV3YXJkXCI6XCIxMDAyOjE1MDBcIixcImNvc3RcIjpcIjEwMDE6MzAwMDBcIixcImdhaW5cIjoxfSx7XCJpZFwiOjMsXCJyZXdhcmRcIjpcIjEwMDI6MjAwMFwiLFwiY29zdFwiOlwiMTAwMTo0MDAwMFwiLFwiZ2FpblwiOjJ9LHtcImlkXCI6NCxcInJld2FyZFwiOlwiMTAwMjoyNTAwXCIsXCJjb3N0XCI6XCIxMDAxOjUwMDAwXCIsXCJnYWluXCI6M30se1wiaWRcIjo1LFwicmV3YXJkXCI6XCIxMDAyOjMwMDBcIixcImNvc3RcIjpcIjEwMDE6NjAwMDBcIixcImdhaW5cIjo0fSx7XCJpZFwiOjYsXCJyZXdhcmRcIjpcIjEwMDI6MzUwMFwiLFwiY29zdFwiOlwiMTAwMTo3MDAwMFwiLFwiZ2FpblwiOjV9LHtcImlkXCI6NyxcInJld2FyZFwiOlwiMTAwMjo0MDAwXCIsXCJjb3N0XCI6XCIxMDAxOjgwMDAwXCIsXCJnYWluXCI6Nn0se1wiaWRcIjo4LFwicmV3YXJkXCI6XCIxMDAyOjQwMDFcIixcImNvc3RcIjpcIjEwMDE6ODAwMDFcIixcImdhaW5cIjo3fSx7XCJpZFwiOjksXCJyZXdhcmRcIjpcIjEwMDI6NDAwMlwiLFwiY29zdFwiOlwiMTAwMTo4MDAwMlwiLFwiZ2FpblwiOjh9LHtcImlkXCI6MTAsXCJyZXdhcmRcIjpcIjEwMDI6NDAwM1wiLFwiY29zdFwiOlwiMTAwMTo4MDAwM1wiLFwiZ2FpblwiOjl9XSxcImZlZWRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU5OTdDXHU1RTcyXCIsXCJpY29uXCI6bnVsbCxcInZpdGFsaXR5XCI6MTAsXCJjb3N0XCI6XCIxMDAyOjEwMDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU1NzVBXHU2NzlDXCIsXCJpY29uXCI6bnVsbCxcInZpdGFsaXR5XCI6MTEsXCJjb3N0XCI6XCIxMDAyOjIwMDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDAzLFwibmFtZVwiOlwiXHU3MDZCXHU4MTdGXCIsXCJpY29uXCI6bnVsbCxcInZpdGFsaXR5XCI6MTIsXCJjb3N0XCI6XCIxMDAyOjMwMDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU3MjVCXHU4MDg5XCIsXCJpY29uXCI6bnVsbCxcInZpdGFsaXR5XCI6MTMsXCJjb3N0XCI6XCIxMDAyOjQwMDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU3MzJBXHU4MDg5XCIsXCJpY29uXCI6bnVsbCxcInZpdGFsaXR5XCI6MTQsXCJjb3N0XCI6XCIxMDAyOjUwMDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU5RTIxXHU4MDg5XCIsXCJpY29uXCI6bnVsbCxcInZpdGFsaXR5XCI6MTUsXCJjb3N0XCI6XCIxMDAyOjYwMDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn1dLFwiY3VycmVuY3lcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU5NEJCXHU3N0YzXCIsXCJpY29uXCI6XCJtYWluX3NjZW5lL2ltZ19kaWFtb25kLnBuZ1wifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTkxRDFcdTVFMDFcIixcImljb25cIjpcIm1haW5fc2NlbmUvaW1nX2NvaW4ucG5nXCJ9XSxcImNvbmZpZ1wiOlt7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVcIixcInZhbHVlXCI6MzB9LHtcImlkXCI6XCJhbGxfc3BlZWRfdXBfdGltZXNcIixcInZhbHVlXCI6NjAwfSx7XCJpZFwiOlwidW5sb2NrX2xhbmRfY29zdFwiLFwidmFsdWVcIjpcIjEwMDI6MCwxMDAyOjAsMTAwMjo0MDAwMCwxMDAyOjUwMDAwLDEwMDI6MjAwMDAsMTAwMjoyMDAwMCwxMDAyOjIwMDAwLDEwMDI6MjAwMDAsMTAwMjoyMDAwMFwifV19OyIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29scyB7XHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NUI1N1x1N0IyNlxyXG4gICAgICogQHBhcmFtIHN0ciBcdTg5ODFcdTg5RTNcdTY3OTBcdTc2ODRcdTVCNTdcdTdCMjZcclxuICAgICAqIEBwYXJhbSBmb3JtYXQgXHU1MDVBXHU0RTNBXHU1M0MyXHU4MDAzXHU3Njg0XHU1QjU3XHU3QjI2XHU5RUQ4XHU4QkE0XHU0RTNBLFxyXG4gICAgICogQHJldHVybnMgXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1QjU3XHU3QjI2XHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVN0cmluZyhzdHI6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcgPSBcIixcIikge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHN0ci5zcGxpdChmb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3OUQyXHU4RjZDXHU2MzYyXHU2MjEwMDA6MDA6MDBcclxuICAgICAqIEBwYXJhbSBzIFx1OEY2Q1x1NjM2Mlx1NjVGNlx1OTVGNFx1NzY4NFx1NzlEMlxyXG4gICAgICogQHJldHVybnMgMDA6MDA6MDBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZvcm1hdFNlY29uZHMgPSAocykgPT4gbmV3IERhdGUocyAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDExLCA4KTtcclxufVxyXG4iLCAiaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi9UYWJsZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ3VycmVuY3lCYXNlLFxyXG4gICAgRmVlZEJhc2UsXHJcbiAgICBPcmRlckJhc2UsXHJcbiAgICBQZXRCYXNlLFxyXG4gICAgUGxhbnRCYXNlLFxyXG4gICAgUmV3YXJkQmFzZSxcclxuICAgIFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgIFRhc2tCYXNlLFxyXG59IGZyb20gXCIuL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwiLi9Ub29sc1wiO1xyXG5cclxuY29uc3QgVGFibGVQcm9wZXJ0eUV2ZW50ID0ge1xyXG4gICAgcGV0KGQ6IHR5cGVvZiBUYWJsZS5wZXRbMF0pIHtcclxuICAgICAgICByZXR1cm4gPFBldEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYHBldF9mZWVkLyR7ZC5pZH0ucG5nYCxcclxuICAgICAgICAgICAgdml0YWxpdHlfbWF4OiBkLnZpdGFsaXR5X21heCxcclxuICAgICAgICAgICAgdml0YWxpdHlfY29uc3VtZTogZC52aXRhbGl0eV9jb25zdW1lLFxyXG4gICAgICAgICAgICBjb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5jb3N0KSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgICAgICBzZW5zaXRpdmU6IGQuc2Vuc2l0aXZlLFxyXG4gICAgICAgICAgICBhYmlsaXR5OiBkLmFiaWxpdHksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTk5NzJcdTY1OTlcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZmVlZChkOiB0eXBlb2YgVGFibGUuZmVlZFswXSkge1xyXG4gICAgICAgIHJldHVybiA8RmVlZEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYHBldF9mZWVkLyR7ZC5pZH1fZmVlZC5wbmdgLFxyXG4gICAgICAgICAgICB2aXRhbGl0eTogZC52aXRhbGl0eSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OEJBMlx1NTM1NVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIG9yZGVyKGQ6IHR5cGVvZiBUYWJsZS5vcmRlclswXSkge1xyXG4gICAgICAgIHJldHVybiA8T3JkZXJCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGNvbW1pc3Npb246IE51bWJlcihkLmNvbW1pc3Npb24pLFxyXG4gICAgICAgICAgICBjb25kaXRpb246IFRvb2xzLnBhcnNlU3RyaW5nKGQuY29uZGl0aW9uKS5tYXAoKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gVG9vbHMucGFyc2VTdHJpbmcoZSwgXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGFudDogVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KE51bWJlcih2WzBdKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IE51bWJlcih2WzFdKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU2MjEwXHU3MTlGXHU2OTBEXHU3MjY5XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcGxhbnQoZDogdHlwZW9mIFRhYmxlLnBsYW50WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQbGFudEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYHBsYW50X2ljb24vJHtkLmlkfV9zZWVkLnBuZ2AsXHJcbiAgICAgICAgICAgIGdhaW46IFRvb2xzLnBhcnNlU3RyaW5nKGQuZ2FpbikubWFwKChlKSA9PiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZSkpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHNlZWRfcHJpY2U6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnNlZWRfcHJpY2UpLFxyXG4gICAgICAgICAgICBoYXJ2ZXN0OiBOdW1iZXIoZC5oYXJ2ZXN0KSxcclxuICAgICAgICAgICAgbWF0dXJlX3RpbWU6IE51bWJlcihkLm1hdHVyZV90aW1lKSxcclxuICAgICAgICAgICAgdW5sb2NrX2Nvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnVubG9ja19jb3N0KSxcclxuICAgICAgICAgICAgdW5sb2NrX3Jld2FyZDogVG9vbHMucGFyc2VTdHJpbmcoZC51bmxvY2tfcmV3YXJkKS5tYXAoKGUpID0+IGdldFJld2FyZEN1cnJlbmN5QmFzZShlKSksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBjdXJyZW5jeShkOiB0eXBlb2YgVGFibGUuY3VycmVuY3lbMF0pIHtcclxuICAgICAgICByZXR1cm4gPEN1cnJlbmN5QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24sXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcclxuICogQHBhcmFtIHN0ciBcdTg5RTNcdTY3OTBcdTc2ODRcdThEMjdcdTVFMDFcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQgaWQ6bnVtXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXdhcmRDdXJyZW5jeUJhc2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBsaXN0ID0gVG9vbHMucGFyc2VTdHJpbmcoc3RyLCBcIjpcIik7XHJcblxyXG4gICAgcmV0dXJuIDxSZXdhcmRDdXJyZW5jeUJhc2U+e1xyXG4gICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KE51bWJlcihsaXN0WzBdKSksXHJcbiAgICAgICAgY291bnQ6IE51bWJlcihsaXN0WzFdKSxcclxuICAgIH07XHJcbn1cclxuXHJcbnR5cGUgdHlwZVRhYmxlID0gdHlwZW9mIFRhYmxlUHJvcGVydHlFdmVudDtcclxuXHJcbmNsYXNzIFRhYmxlQ29udHJvbCB7XHJcbiAgICBwcml2YXRlIHRhYmxlQ2FjaGU6IE1hcDxrZXlvZiB0eXBlVGFibGUsIFJldHVyblR5cGU8dHlwZVRhYmxlW2tleW9mIHR5cGVUYWJsZV0+W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU3Njg0XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0ga2V5IFx1ODg2OFx1NzY4NGtleVxyXG4gICAgICovXHJcbiAgICB0YWJsZTxUIGV4dGVuZHMga2V5b2YgdHlwZVRhYmxlPihcclxuICAgICAgICBrZXk6IFRcclxuICAgICk6IHtcclxuICAgICAgICBsaXN0OiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT5bXTtcclxuICAgICAgICBnZXQ6IHsgKGlkOiBudW1iZXIpOiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT4gfTtcclxuICAgIH0ge1xyXG4gICAgICAgIC8vXHU4QkZCXHU1M0Q2XHU3RUM0XHU2MjEwXHJcbiAgICAgICAgaWYgKHRoaXMudGFibGVDYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJsZUJhY2sodGhpcy50YWJsZUNhY2hlLmdldChrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTg5RTNcdTY3OTBcdTY1NzBcdTYzNkVcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIFRhYmxlW2tleV0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goVGFibGVQcm9wZXJ0eUV2ZW50W2tleV0oZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHU3RjEzXHU1QjU4XHU4OUUzXHU2NzkwXHU4ODY4XHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgdGhpcy50YWJsZUNhY2hlLnNldChrZXksIGxpc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayhsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUyOFx1NEU4RXRhYmxlXHU2NUI5XHU2Q0Q1XHU4RkQ0XHU1NkRFXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGXHU1NDhDXHU2REZCXHU1MkEwXHU4M0I3XHU1M0Q2XHU1MzU1XHU0RTJBXHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTg5RTNcdTY3OTBcdTg4NjhcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zIFx1OEZENFx1NTZERVx1NjMwN1x1NUI5QVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRhYmxlQmFjayhsaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGlzdDogbGlzdCxcclxuICAgICAgICAgICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGxpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODg2OFx1NjgzQ1x1ODlFM1x1Njc5MFx1NURFNVx1NTE3N1xyXG4gKi9cclxuY29uc3QgVGFibGVBbmFseXplID0gbmV3IFRhYmxlQ29udHJvbCgpO1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUFuYWx5emU7XHJcbiIsICJpbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBQbGFudEJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQbGFudERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFBsYW50QmFzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk1MDFcdTVCOUEgKi9cclxuICAgIGxvY2s6IGJvb2xlYW47XHJcbn1cclxuLyoqXHJcbiAqIFx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gKi9cclxuY2xhc3MgUGxhbnRTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFBsYW50RGF0YUJhc2VbXSA9IFtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goeyBiYXNlOiBkLCBsb2NrOiBkLnVubG9ja19jb3N0ID8gdHJ1ZSA6IGZhbHNlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gaWQgXHU2OTBEXHU3MjY5aWRcclxuICAgICAqIEByZXR1cm5zIFx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBnZXRQbGFudChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMubGlzdC5sZW5ndGggLSAxOyB4ID4gLTE7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBsYW50U2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGxhbnRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2FyZUhvdXNlRGF0YSB7XHJcbiAgICBiYXNlOiBQbGFudEJhc2U7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFdhcmVob3VzZVNlcnZpY2Uge1xyXG4gICAgbGlzdDogV2FyZUhvdXNlRGF0YVtdID0gW107XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogZCxcclxuICAgICAgICAgICAgICAgIGNvdW50OiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgV2FyZWhvdXNlU2VydmljZSgpO1xyXG4iLCAiLyoqXHJcbiAqIFx1NzdFRFx1OTRGRVx1NjNBNVx1OEJGN1x1NkM0Mlx1NTM0Rlx1OEJBRVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQXBpSHR0cCB7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU3NjdCXHU1RjU1ICovXHJcbiAgICBsb2dpbiA9IFwiL2Zhcm1Db250cm9sbGVyL2xvZ2luXCIsXHJcbiAgICAvKiogXHU2NTM2XHU4M0RDICovXHJcbiAgICBnYXRoZXIgPSBcIi9mYXJtQ29udHJvbGxlci9nYXRoZXJcIixcclxuICAgIC8qKiBcdTc5Q0RcdTgzREMgKi9cclxuICAgIHNvdyA9IFwiL2Zhcm1Db250cm9sbGVyL3Nvd1wiLFxyXG4gICAgLyoqIFx1ODlFM1x1OTUwMVx1NTcxRlx1NTczMCAqL1xyXG4gICAgdW5sb2NrTGFuZCA9IFwiZmFybUNvbnRyb2xsZXIvdW5sb2NrTGFuZFwiLFxyXG59XHJcbiIsICJpbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBQbGFudFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwiLi9OZXRNYXBzXCI7XHJcblxyXG4vKipcclxuICogXHU1MzRGXHU4QkFFXHU2NTcwXHU2MzZFXHU1OTA0XHU3NDA2XHJcbiAqL1xyXG5jbGFzcyBIdHRwRGF0YUNvbnRyb2wge1xyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1OEY2Q1x1NTNEMSAqL1xyXG4gICAgZm9yd2FyZChhcGk6IEFwaUh0dHAsIGRhdGE6IGFueSwgY2FsbD86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoIChhcGkpIHtcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxvZ2luOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbihkYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2FsbCkge1xyXG4gICAgICAgICAgICBjYWxsKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KGFwaSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dpbihkOiBOZXRJbml0KSB7XHJcbiAgICAgICAgUGxhbnRTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBVc2VySW5mby51aWQgPSBkLnVzZXJJZDtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC5kaWFtb25kO1xyXG4gICAgICAgIFVzZXJJbmZvLmdvbGQgPSBkLmdvbGQ7XHJcbiAgICAgICAgVXNlckluZm8ubmlja25hbWUgPSBkLm5pY2tOYW1lO1xyXG4gICAgICAgIFVzZXJJbmZvLmF2YXRhciA9IGQucHJvZmlsZSB8fCBcIlwiO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgTGFuZFNlcnZpY2UuaW5pdChkLmxhbmRMaXN0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEh0dHBEYXRhQ29udHJvbCgpO1xyXG4iLCAiaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcInNyYy9jb3JlL0luc3RhbmNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBIdHRwRGF0YUNvbnRyb2wgZnJvbSBcIi4vSHR0cERhdGFDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwiLi9OZXRNYXBzXCI7XHJcblxyXG5pbnRlcmZhY2UgSHR0cFNlbmREYXRhIHtcclxuICAgIGFwaTogQXBpSHR0cDtcclxuICAgIGRhdGE/OiBhbnk7XHJcbiAgICBtZXRob2Q/OiBzdHJpbmc7XHJcbiAgICByZXNwb25zZVR5cGU/OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzPzogYW55W10gfCBudWxsO1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG4gICAgYmFzZVVybD86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NzdFRFx1OTRGRVx1NjNBNVx1NjNBN1x1NTIzNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cENvbnRyb2wge1xyXG4gICAgQEluc3RhbmNlXHJcbiAgICBzdGF0aWMgaW5zdDogSHR0cENvbnRyb2w7XHJcblxyXG4gICAgeGhyOiBMYXlhLkh0dHBSZXF1ZXN0O1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9IFwiLy80Ny4xMDguMTkyLjE4MTo4MDkyL2Zhcm1cIjtcclxuXHJcbiAgICBwcml2YXRlIHNlbmREYXRhOiBIdHRwU2VuZERhdGE7XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy54aHIpIHJldHVybjtcclxuICAgICAgICBsZXQgeGhyID0gbmV3IExheWEuSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAvLyB0aGlzLnhoci5odHRwLnRpbWVvdXQgPSAxMDAwMDsgLy9cdThEODVcdTY1RjZcdTY1RjZcdTk1RjRcclxuICAgICAgICB4aHIub24oTGF5YS5FdmVudC5DT01QTEVURSwgdGhpcywgdGhpcy5jb21wbGV0ZUhhbmRsZXIpO1xyXG4gICAgICAgIHhoci5vbihMYXlhLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLmVycm9ySGFuZGxlcik7XHJcbiAgICAgICAgeGhyLm9uKExheWEuRXZlbnQuUFJPR1JFU1MsIHRoaXMsIHRoaXMucHJvY2Vzc0hhbmRsZXIpO1xyXG4gICAgICAgIC8vIHhoci5zZW5kKFwicmVzL2RhdGEuZGF0YVwiLCBcIlwiLCBcImdldFwiLCBcInRleHRcIik7XHJcblxyXG4gICAgICAgIHRoaXMueGhyID0geGhyO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmQoZGF0YTogSHR0cFNlbmREYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhLm1ldGhvZCkgZGF0YS5tZXRob2QgPSBcInBvc3RcIjtcclxuICAgICAgICBpZiAoIWRhdGEucmVzcG9uc2VUeXBlKSBkYXRhLnJlc3BvbnNlVHlwZSA9IFwianNvblwiO1xyXG4gICAgICAgIGlmICghZGF0YS5iYXNlVXJsKSBkYXRhLmJhc2VVcmwgPSB0aGlzLmJhc2VVcmw7XHJcblxyXG4gICAgICAgIHRoaXMuc2VuZERhdGEgPSBkYXRhO1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEuZGF0YT8udXNlcklkKSB7XHJcbiAgICAgICAgICAgIGRhdGEuZGF0YS51c2VySWQgPSBVc2VySW5mby51aWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYCVjID09PiBzZW5kICVjJHtkYXRhLmFwaX0gYCxcclxuICAgICAgICAgICAgYGNvbG9yOiM4MmNjZGQ7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtgXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy54aHIuc2VuZChcclxuICAgICAgICAgICAgZGF0YS5iYXNlVXJsICsgZGF0YS5hcGksXHJcbiAgICAgICAgICAgIGRhdGEuZGF0YSxcclxuICAgICAgICAgICAgZGF0YS5tZXRob2QsXHJcbiAgICAgICAgICAgIGRhdGEucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBkYXRhLmhlYWRlcnNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAoZS5yZXN1bHRDb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYCVjIDw9PSBiYWNrICVjJHt0aGlzLnNlbmREYXRhLmFwaX0gYCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojYjhlOTk0O2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiM3OGUwOGY7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBlLnJlc3VsdFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBIdHRwRGF0YUNvbnRyb2wuZm9yd2FyZCh0aGlzLnNlbmREYXRhLmFwaSwgZS5yZXN1bHQsIHRoaXMuc2VuZERhdGE/LmNhbGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcHJvY2Vzc0hhbmRsZXIoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5cclxuLy8gIEFkZExhbmRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRMYW5kVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgcHJpdmF0ZSBkYXRhOiB7IGlkOiBudW1iZXI7IGNhbGw6IEZ1bmN0aW9uIH07XHJcblxyXG4gICAgb25PcGVuZWQoZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvc3RfZ29sZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYWRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC51bmxvY2tMYW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZWRzSWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWRkTGFuZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vICBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhd2FcIik7XHJcbiAgICB9XHJcbiAgICBvbkhkRW5hYmxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2FkQmFyLCB0aXBzOlwibG9hZCBiYXJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCYXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRCb3gsIHRpcHM6XCJcdTUyQTBcdThGN0RcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2dpbkJveCwgdGlwczpcIlx1NzY3Qlx1OTY0Nlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9naW5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU4RkRCXHU1RUE2XHU2NzYxXHU5RUQ4XHU4QkE0XHU1QkJEXHU1RUE2ICovXHJcbiAgICBwcml2YXRlIGxvYWRCYXJPbGRXaWR0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuXHJcbiAgICAgICAgaWYgKExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpPy5pc0xvZ2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5kYXRhLmNhbGwoKTtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2FsbFwiKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vbihFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgdGhpcywgdGhpcy5sb2FkUHJvZ3Jlc3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXdha2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxvYWRMYWJlbCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubG9hZExhYmVsLnRleHQgPSBcIkxvYWQuLi4uMCVcIjtcclxuICAgICAgICB0aGlzLmxvYWRCYXJPbGRXaWR0aCA9IHRoaXMubG9hZEJhci53aWR0aDtcclxuICAgICAgICB0aGlzLmxvYWRCYXIud2lkdGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibG9naW5fYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dpbigpIHtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICBhcGk6IEFwaUh0dHAubG9naW4sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHd4SWQ6IFwiMTExMTExMTExMVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWxsOiAoZDogTmV0SW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkgdGhpcy5kYXRhLmNhbGwoZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRQcm9ncmVzcyh2KSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQmFyLndpZHRoID0gdiAqIHRoaXMubG9hZEJhck9sZFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vZmYoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIHRoaXMsIHRoaXMubG9hZFByb2dyZXNzKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuXHJcbi8vICBNYWlsVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLk1haWxWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UsIHsgTGFuZE9iaiB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxhbnREYXRhQmFzZSB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcInNyYy92aWV3L01haW5WaWV3XCI7XHJcblxyXG4vLyAgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbi8qKlxyXG4gKiBcdTc1MzBcdTU3MzBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlpY29uICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1ODI4Mlx1NzBCOSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBmaWVsZE5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NjcwOVx1NjkwRFx1NzI2OVx1NjVGNlx1NzY4NFx1OTYzNFx1NUY3MSAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBzaGFkb3c6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZWxkRW1wdHlSZXMsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTU0MEVcdTU3MUZcdTU3MzBcdTdFQjlcdTc0MDZcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBmaWVsZEVtcHR5UmVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIFx1N0I0OVx1N0VBN1x1NTZGRVx1NzI0NyAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBsdk5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTAxMlx1OEJBMVx1NjVGNlx1NUJCOVx1NTY2OCovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHRpbWVCb3g6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIFx1NTAxMlx1OEJBMVx1NjVGNmxhYmVsICovXHJcbiAgICBwcml2YXRlIGNvdW50RG93bkxiOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU4OEM1XHU5OTcwICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHRvcFN0YXRlSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU2MjEwXHU3MTlGXHU1M0VGXHU2NTM2aWNvbiAqL1xyXG4gICAgcHJpdmF0ZSBtYXR1cmVOb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTUzRUZcdTY0QURcdTc5Q0RcdTdBN0FcdTU3MzBpY29uICovXHJcbiAgICBwcml2YXRlIGVtcHR5RmllbGROb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1bmxvY2tJY29uLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwaWNvblx1NTczMFx1NTc0MFwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIHVubG9ja0ljb246IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmllbGRJZCwgdGlwczpcIlx1NTcxRlx1NTczMGlkXCIsIHR5cGU6TnVtYmVyLH0qL1xyXG4gICAgZmllbGRJZDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1NkQ2RVx1NTJBOFx1NTJBOFx1NzUzQiAqL1xyXG4gICAgcHJpdmF0ZSB0b3BTdGF0ZUljb25Ud2VlbjogTGF5YS5UaW1lTGluZTtcclxuXHJcbiAgICAvKiogXHU1RUZBXHU3QjUxXHU0RTJEICovXHJcbiAgICBidWlsZEluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZGF0YTogTGFuZE9iajtcclxuXHJcbiAgICBwcml2YXRlIGxhbmRMaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPjtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZE5vZGUgPSA8TGF5YS5JbWFnZT50aGlzLm93bmVyO1xyXG4gICAgICAgIHRoaXMuY291bnREb3duTGIgPSB0aGlzLnRpbWVCb3guZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudERvd25MYlwiKSBhcyBhbnk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmljb24uc2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfZmllbGQpXHJcbiAgICB1cGRhdGVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMubGFuZExpc3QgPSBMYW5kU2VydmljZS5saXN0O1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROb2RlLnNraW4gPSB0aGlzLmZpZWxkRW1wdHlSZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24oQm9vbGVhbih0aGlzLmRhdGEuZmFybXNlZWRzSWQpKTtcclxuICAgICAgICAgICAgdGhpcy5sdk5vZGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZmFybXNlZWRzSWQgJiYgdGhpcy5kYXRhLmdyb3dVcFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUJveC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YS5mYXJtc2VlZHNJZCkuaWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmZhcm1zZWVkc0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNraW4gPSB0aGlzLnVubG9ja0ljb247XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RWljb25cdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93SWNvbihzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU3MkI2XHU2MDAxaWNvblx1N0VCOVx1NzQwNlxyXG4gICAgICogQHBhcmFtIHNraW5UeXBlIDEgXHU2RDQ3XHU2QzM0XHU1MkEwXHU5MDFGXHU3MkI2XHU2MDAxIDIgXHU1RUZBXHU3QjUxXHU3MkI2XHU2MDAxIDMgXHU2MjEwXHU3MTlGXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlSWNvblNraW4oc2tpblR5cGU6IDEgfCAyIHwgMykge1xyXG4gICAgICAgIHN3aXRjaCAoc2tpblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfc3BlZWRVcC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19sYW5kVXBkYXRlQnRuMi5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19oYXJ2ZXN0LnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU2NUY2XHU5NUY0XHU1QkI5XHU1NjY4XHU3Njg0XHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1RpbWVCb3goc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RVx1OTYzNFx1NUY3MVx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dTaGFkb3dJY29uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNoYWRvdy52aXNpYmxlID0gc2hvdztcclxuICAgICAgICB0aGlzLnNoYWRvdy5hY3RpdmUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5ODc2XHU5MEU4aWNvblx1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRvcFN0YXRlSWNvbkFuaShwbGF5OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRvcFN0YXRlSWNvblR3ZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4gPSBMYXlhLlRpbWVMaW5lLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24sXHJcbiAgICAgICAgICAgICAgICB7IHk6IHRoaXMudG9wU3RhdGVJY29uLnkgLSA1MCB9LFxyXG4gICAgICAgICAgICAgICAgODAwLFxyXG4gICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICApLnRvKHRoaXMudG9wU3RhdGVJY29uLCB7IHk6IHRoaXMudG9wU3RhdGVJY29uLnkgfSwgODAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1MDEyXHU4QkExXHU2NUY2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQ291bnREb3duKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZ3Jvd1VwVGltZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYi50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyh0aGlzLmRhdGEuZ3Jvd1VwVGltZSk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZ3Jvd1VwVGltZS0tO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYi50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyh0aGlzLmRhdGEuZ3Jvd1VwVGltZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmdyb3dVcFRpbWUgPSAwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NTAxMlx1OEJBMVx1NjVGNlx1N0VEM1x1Njc1RiBcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1aWxkSW5nKSB0aGlzLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1N0I0OVx1N0VBN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxldmVsKCkge1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfbGV2ZWwke3RoaXMuZGF0YS5sZXZlbH0ucG5nYDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1N0E3QVx1NTcxRlx1NTczMFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNsZWFyRmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGF0YS5mYXJtc2VlZHNJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pY29uLnNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2hvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWVsZElkLCB0aGlzLmJ1aWxkSW5nKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1aWxkSW5nKSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldywgeyBwYXJtOiB0aGlzLmZpZWxkSWQgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZmFybXNlZWRzSWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZ3Jvd1VwVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1MkEwXHU5MDFGXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TcGVlZFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NjUzNlx1ODNCN1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW50T2JqID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YS5mYXJtc2VlZHNJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3Q6IGFueVtdID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogcGxhbnRPYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHBsYW50T2JqLmhhcnZlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW50T2JqLmdhaW4uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoZC5vYmouaWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAxMDAxID09IGQub2JqLmlkID8gMiA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJld2FyZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQ6IFBsYW50RGF0YUJhc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpLmZhcm1zZWVkc0lkID0gZC5iYXNlLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpLmdyb3dVcFRpbWUgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5BZGRMYW5kVmlldywge1xyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYW5kU2VydmljZS5hZGRMYW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vXHU1NzFGXHU1NzMwaWRcdTVCRjlcdTVFOTRcdTc2ODRcdTRFNUZcdTY2MkZcdTRFMEJcdTY4MDdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvL1x1NTcxRlx1NTczMFx1N0I0OVx1N0VBN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV2ZWw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvL1x1NkI2M1x1NTcyOFx1NzUxRlx1OTU3Rlx1NzY4NFx1NEUxQ1x1ODk3Rlx1NzY4NGlkIFx1NzlDRFx1NUI1MGlkLCBcdTU5ODJcdTY3OUNcdTUyNjlcdTRGNTlcdTY1RjZcdTk1RjRcdTRFM0EwXHVGRjBDXHU4ODY4XHU3OTNBIFx1NURGMlx1NzE5Rlx1RkYwQ1x1NTI0RFx1N0FFRlx1ODFFQVx1NURGMVx1NTNCQlx1NjdFNVx1NUJGOVx1NUU5NFx1NTNFRlx1NzUxRlx1NEVBN1x1NzY4NFx1NEUxQ1x1ODk3Rlx1RkYwQ1x1NzEzNlx1NTQwRVx1NjUzOVx1NTNEOFx1NjYzRVx1NzkzQVx1NzJCNlx1NjAwMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmFybXNlZWRzSWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvL1x1NTI2OVx1NEY1OVx1NjVGNlx1OTVGNCBcdTU5ODJcdTY3OUNcdTRFM0EwIFx1NUMzMVx1NEUzQVx1NjIxMFx1NzE5RiBcdTUzNTVcdTRGNERcdTc5RDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGdyb3dVcFRpbWU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sYW5kTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IEZpZWxkQ29tcG9uZW50IGZyb20gXCJzcmMvY29tcG9uZW50cy9GaWVsZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vKipcclxuICogXHU5OERFXHU5MUQxXHU1RTAxXHU2NTcwXHU5MUNGXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdldEZsb2F0UmV3YXJkT2JqIHtcclxuICAgIC8qKiBcdThENzdcdTcwQjlcdTUzQzJcdTgwMDNcdTgyODJcdTcwQjkgKi9cclxuICAgIG5vZGU6IExheWEuQm94O1xyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbGlzdDoge1xyXG4gICAgICAgIC8qKiBcdTg5RTNcdTY3OTBcdTc2ODRcdThENDRcdTZFOTBcdTY1NzBcdTYzNkUgXHU1RkM1XHU5ODdCXHU4OTgxXHU2NzA5aWNvbiAqL1xyXG4gICAgICAgIG9iajogYW55O1xyXG4gICAgICAgIC8qKiBcdTY1NzBcdTkxQ0YgKi9cclxuICAgICAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgICAgIC8qKiBcdTdFQzhcdTcwQjlcdTRGNERcdTdGNkUgMSBcdTkxRDFcdTVFMDEgMiBcdTk0QkJcdTc3RjMgKi9cclxuICAgICAgICBwb3NUeXBlOiAxIHwgMjtcclxuICAgIH1bXTtcclxufVxyXG5cclxuLy8gIE1haW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkTGFuZExheWVyLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRMYW5kTGF5ZXI6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZE5vZGUsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmROb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb2xkTm9kZSwgdGlwczpcIlx1OTFEMVx1NUUwMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29sZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmF2YXRhck5vZGUsIHRpcHM6XCJcdTU5MzRcdTUwQ0ZcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGF2YXRhck5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRCb3gsIHRpcHM6XCJcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxhbmRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjZW50ZXJCb3gsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTUzM0FcdTU3REZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsYW5kVXBMYXllciwgdGlwczpcIlx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1N0E5N1x1NTNFM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGFuZFVwTGF5ZXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BMYXllck9uU3RhZ2UsIHRpcHM6XCJcdTU3MjhcdTRFM0JcdTU3M0FcdTY2NkZcdTRFMEFcdTk3NjJcdTc2ODRcdTRFMDBcdTRFMkFcdTY3MDBcdTRFMEFcdTVDNDJcdTc2ODRcdTdBN0FcdTVDNDJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcExheWVyT25TdGFnZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wR29sZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTkxRDFcdTVFMDFpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BHb2xkSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wRGlhbW9uZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTk0QkJcdTc3RjNpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BEaWFtb25kSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdUZGMENcdTk4REVcdTcyNjlcdTU0QzFcdTc2RjhcdTUxNzNcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnZXRSZXdhcmRQcmVmYWIsIHRpcHM6XCJcdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdTk4ODRcdThCQkVcIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgZ2V0UmV3YXJkUHJlZmFiOiBMYXlhLlByZWZhYiA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmxvYXRSZXdhcmRJY29uLCB0aXBzOlwiXHU1OTU2XHU1MkIxXHU5OERFXHU1MkE4XHU3NTNCaWNvblwiLCB0eXBlOlByZWZhYn0qL1xyXG4gICAgcHJpdmF0ZSBmbG9hdFJld2FyZEljb246IExheWEuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU3RUM0XHU0RUY2IFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBsYW5kTGlzdDogRmllbGRDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMudG9wTGF5ZXJPblN0YWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxhbmRCb3gubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LnB1c2godGhpcy5sYW5kQm94LmdldENoaWxkQXQoeCkuZ2V0Q29tcG9uZW50KEZpZWxkQ29tcG9uZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhbmRMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEuZmllbGRJZCAtIGIuZmllbGRJZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfZmllbGQpO1xyXG4gICAgICAgICAgICB0aGlzLmhpdExhbmRBZGQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NzkzQVx1NjYzRVx1NzkzQVx1NjI2OVx1NUVGQWljb25cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoaXRMYW5kQWRkKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhbmRMaXN0W3hdLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImRpYW1vbmRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbW9uZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiZ29sZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb2xkTm9kZS52YWx1ZSA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJhdmF0YXJcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTGFuZExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZS5ldmVudE9uKEFwaUh0dHAubG9naW4pXHJcbiAgICBwcml2YXRlIGdhbWVJbml0KGQ6IE5ldEluaXQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICAvLyBsZXQgYSA9IGQuZGF0YS5sYW5kTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExhbmRMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRhc2tcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNpZ25JblwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNpZ25JblZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTWFpbFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoZWFkXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2V0dGluZ1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YXJlaG91c2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2ZlZWRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAyIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvZ1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDIgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib3JkZXJfYm94XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZFwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kTGV2ZWxVcFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hMYW5kTGV2ZWxVcCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfdXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoTGFuZExldmVsVXAoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjA3XHU2MzYyXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzd2l0Y2hMYW5kTGV2ZWxVcChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGJnID0gdGhpcy5sYW5kVXBMYXllci5nZXRDaGlsZEJ5TmFtZShcImJnXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgYmcuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKGJnLCB7IGFscGhhOiAwLjc1IH0sIDE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYW5kX291dGVyXCIpLmFkZENoaWxkKHRoaXMubGFuZEJveCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMik7XHJcbiAgICAgICAgICAgICAgICBlLnNob3dUaW1lQm94KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGUuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZS5idWlsZEluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBiZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyQm94LmFkZENoaWxkKHRoaXMubGFuZEJveCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLmxhbmRJZCAmJiBlLmRhdGEuZ3Jvd1VwVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dUaW1lQm94KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUuYnVpbGRJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLmxhbmRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oZS5kYXRhLmdyb3dVcFRpbWUgPyAxIDogMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjRBRFx1NjUzRVx1ODNCN1x1NTNENlx1NTk1Nlx1NTJCMVx1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQpXHJcbiAgICBwcml2YXRlIHBsYXlHZXRSZXdhcmRBbmkob2JqOiBHZXRGbG9hdFJld2FyZE9iaikge1xyXG4gICAgICAgIG9iai5saXN0LmZvckVhY2goKGQsIGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IExheWEuQm94ID0gTGF5YS5Qb29sLmdldEl0ZW1CeUNyZWF0ZUZ1bihcclxuICAgICAgICAgICAgICAgIFwiZmxvYXRSZXdhcmRCb3hcIixcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmV3YXJkUHJlZmFiLmNyZWF0ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmV3YXJkUHJlZmFiXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBub2RlLnkgPSBvYmoubm9kZS5nZXRfaGVpZ2h0KCkgKiBvYmoubm9kZS5hbmNob3JZIC0gaSAqIDYwO1xyXG4gICAgICAgICAgICBub2RlLnggPSBvYmoubm9kZS5nZXRfd2lkdGgoKSAqIG9iai5ub2RlLmFuY2hvclg7XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgaWNvbi5za2luID0gZC5vYmo/Lmljb24gfHwgXCJcIjtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gNTAgLyBpY29uLndpZHRoO1xyXG4gICAgICAgICAgICBpY29uLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICBvYmoubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgKG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IFwieFwiICsgZC5jb3VudDtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICAgICAgICB7IHk6IG5vZGUueSAtIDQwLCBhbHBoYTogMSB9LFxyXG4gICAgICAgICAgICAgICAgMTUwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAoZTogTGF5YS5Cb3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDEwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKFwiZmxvYXRSZXdhcmRCb3hcIiwgZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zSWNvbiA9IHRoaXMudG9wTGF5ZXJPblN0YWdlLmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5sb2NhbFRvR2xvYmFsKExheWEuUG9pbnQuY3JlYXRlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5yZW1vdmVTZWxmKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmxvYXRJY29uOiBMYXlhLkltYWdlID0gTGF5YS5Qb29sLmdldEl0ZW1CeUNyZWF0ZUZ1bihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdFJld2FyZEljb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdFJld2FyZEljb24uY3JlYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb2F0UmV3YXJkSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnNraW4gPSBkLm9iai5pY29uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24ucG9zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBvc0ljb24ueCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjAgKiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUG9zSWNvbi55ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyMCAqIChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BMYXllck9uU3RhZ2UuYWRkQ2hpbGQoZmxvYXRJY29uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24uek9yZGVyID0gOTk5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wSWNvbjogTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGQucG9zVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BJY29uID0gdGhpcy50b3BHb2xkSWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BJY29uID0gdGhpcy50b3BEaWFtb25kSWNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcEdvbGRJY29uUG9zID0gdG9wSWNvbi5sb2NhbFRvR2xvYmFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5Qb2ludCh0b3BJY29uLndpZHRoIC8gMiwgdG9wSWNvbi5oZWlnaHQgLyAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy50b3BMYXllck9uU3RhZ2UuZ2xvYmFsVG9Mb2NhbCh0b3BHb2xkSWNvblBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiBsb2NhbFBvcy54LCB5OiBsb2NhbFBvcy55IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrSW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGU6IExheWEuSW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlcihcImZsb2F0UmV3YXJkSWNvblwiLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmxvYXRJY29uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNTAgKiB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbbm9kZV1cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICA1MCAqIGksXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vY2xhc3MgT3JkZXJWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vL2NsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TZXR0aW5nVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IEZlZWRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmVlZERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IEZlZWRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBGZWVkU2VydmljZSB7XHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBsaXN0OiBGZWVkRGF0YUJhc2VbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NTcwXHU2MzZFXHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwiZmVlZFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogZCxcclxuICAgICAgICAgICAgICAgIGxvY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEZlZWRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBQZXRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGV0RGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1NUJBMFx1NzI2OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogUGV0QmFzZTtcclxuICAgIC8qKiBcdTk1MDFcdTVCOUEgKi9cclxuICAgIGxvY2s6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTVCQTBcdTcyNjlcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFBldFNlcnZpY2Uge1xyXG4gICAgbGlzdDogUGV0RGF0YUJhc2VbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjFEXHU1OUNCXHU1MzE2XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBkLFxyXG4gICAgICAgICAgICAgICAgbG9jazogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQZXRTZXJ2aWNlKCk7XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgeyBGZWVkQmFzZSwgUGxhbnRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCJzcmMvY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgRmVlZFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9GZWVkU2VydmljZVwiO1xyXG5pbXBvcnQgUGV0U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BldFNlcnZpY2VcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuaW50ZXJmYWNlIFNob3BWaWV3RGF0YSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Cb3hUb3AsIHRpcHM6XCJcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTUyMTdcdTg4NjhcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJ0bkJveFRvcDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tQm94LCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21Cb3g6IExheWEuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWVkRGVzYywgdGlwczpcIlx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VlZERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZVRpbWUsIHRpcHM6XCJcdTYyMTBcdTcxOUZcdTY1RjZcdTk1RjRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZVRpbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZUdhaW5Cb3gsIHRpcHM6XCJcdTY1MzZcdTc2Q0FcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZUdhaW5Cb3g6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvY2tCdG5Cb3gsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTYzMDlcdTk0QUVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvY2tCdG5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtQnV5QnRuLCB0aXBzOlwiXHU4RDJEXHU0RTcwXHU2MzA5XHU5NEFFXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtQnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWRCdXlCdG4sIHRpcHM6XCJcdTk5NzJcdTY1OTlcdThEMkRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZlZWRCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWREZXNjLCB0aXBzOlwiXHU5OTcyXHU2NTk5XHU2M0NGXHU4RkYwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBmZWVkRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTVCQTBcdTcyNjlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRJY29uLCB0aXBzOlwiXHU1QkEwXHU3MjY5aWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0SWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0RGVzYywgdGlwczpcIlx1NUJBMFx1NzI2OVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0RGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0TmFtZSwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0TmFtZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlNYXgsIHRpcHM6XCJcdTRGNTNcdTUyOUJcdTRFMEFcdTk2NTBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5TWF4OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRCdXRCdG4sIHRpcHM6XCJcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldEJ1dEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTk0QjFcdTVFODRcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaWFtb25kRm9udCwgdGlwczpcIlx1NzUyOFx1NjIzN1x1OTRCQlx1NzdGM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZGlhbW9uZEZvbnQ6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlTGlzdCwgdGlwczpcIlx1OTRCMVx1NUU4NFx1NjNEMFx1NzNCMFx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTY1ODdcdTVCNTdcdThENDRcdTZFOTBcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgYnRuVG9wUmVzTGlzdDogc3RyaW5nW11bXSA9IFtcclxuICAgICAgICBbXCJnYW1lL2ltZ19zZWVkc05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19zZWVkc1NlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19wZXROb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfcGV0U2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX2Zvb2RuTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX2Zvb2RuU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX2JhbmtOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfYmFua1NlbGVjdGVkLnBuZ1wiXSxcclxuICAgIF07XHJcbiAgICAvKiogXHU5ODc2XHU5MEU4XHU1MjA3XHU2MzYyXHU2ODA3XHU3QjdFXHU5MDA5XHU2MkU5XHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHRvcEJ0blNlbGVjdEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTU0Nlx1NTRDMVx1NTIxN1x1ODg2OFx1NzBCOVx1NTFGQlx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdFNlbGVjdEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTU0Nlx1NTRDMVx1NTIxN1x1ODg2OFx1ODBDQ1x1NjY2Rlx1N0VCOVx1NzQwNiAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsZWN0Qmc6IHN0cmluZ1tdID0gW1wiZ2FtZS9pbWdfcGV0YmFnTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3BldGJhZ1NlbGVjdGVkLnBuZ1wiXTtcclxuXHJcbiAgICAvKiogXHU1RjUzXHU1MjREXHU5MDA5XHU2MkU5XHU3Njg0XHU1QkEwXHU3MjY5XHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHNlbGVjdFBldEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkYXRhOiBTaG9wVmlld0RhdGE7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVJdGVtKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25TZWxlY3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnByaWNlTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVQcmljZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25QcmljZVNlbGVjdCk7XHJcblxyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5LndhdGNoKFVzZXJJbmZvLCB0aGlzKS5rZXkoXCJkaWFtb25kXCIsICh2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbW9uZEZvbnQudmFsdWUgPSB2O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmVkKGU6IFNob3BWaWV3RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IGU/LmlkIHx8IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3BCdG5TdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU5MDA5XHU0RTJEXHU2NUY2XHU3Njg0XHU0RTBCXHU2ODA3XHJcbiAgICAgKiBAcGFyYW0gZSBcdTkwMDlcdTRFMkRcdTc2ODRcdTRFMEJcdTY4MDdcclxuICAgICAqL1xyXG4gICAgb25TZWxlY3QoZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCA9IGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTc5Q0RcdTVCNTBcdTYyMTZcdTk5NkVcdTY1OTlcdTUyMTdcdTg4NjhcdTY1NzBcdTYzNkVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0RGF0YUxpc3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUGxhbnRTZXJ2aWNlLmxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgaWYgKCFGZWVkU2VydmljZS5saXN0Lmxlbmd0aCkgRmVlZFNlcnZpY2UuaW5pdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gRmVlZFNlcnZpY2UubGlzdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMzJcdTY3RDNcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTc2ODRcdTUyMTdcdTg4NjhcclxuICAgICAqIEBwYXJhbSBjZWxsIFx1NTIxN1x1ODg2OFx1ODI4Mlx1NzBCOVxyXG4gICAgICogQHBhcmFtIGluZGV4IFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbaW5kZXhdO1xyXG4gICAgICAgIGxldCBwcmljZUJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBsb2NrSWNvbiA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrX2ljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoIWQpIHJldHVybiBjb25zb2xlLndhcm4oXCJcdTY1NzBcdTYzNkVcdTRFMjJcdTU5MzFcIik7XHJcbiAgICAgICAgaWYgKGQubG9jaykge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbG9ja0ljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICBpY29uID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPFBsYW50QmFzZT5kLmJhc2UpLnNlZWRfcHJpY2UuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gKDxQbGFudEJhc2U+ZC5iYXNlKS5zZWVkX3ByaWNlLm9iai5pY29uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5jb3VudDtcclxuICAgICAgICAgICAgICAgIGljb24gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKHByaWNlQm94LmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gY291bnQgKyBcIlwiO1xyXG4gICAgICAgICAgICAocHJpY2VCb3guZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkX2ljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGljb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuYmFzZS5pY29uO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gZC5iYXNlLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMV07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0RGVzYygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NEY0RVx1OTBFOFx1RkYwQ1x1OTAwOVx1NjJFOVx1NzI2OVx1NTRDMVx1NjVGNlx1NzY4NFx1NjU3MFx1NjM2RVx1NjYzRVx1NzkzQVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdERlc2MoKSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgICAgICAgICAodGhpcy5zZWVkRGVzYy5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2MucmVwbGFjZShcIiZcIiwgKDxGZWVkQmFzZT5kLmJhc2UpLnZpdGFsaXR5ICsgXCJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZERlc2MudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBib3ggPSB0aGlzLmZlZWRCdXlCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0LmNvdW50ICsgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgICAgICBsZXQgYmFzZSA9IGQuYmFzZSBhcyBQbGFudEJhc2U7XHJcbiAgICAgICAgKHRoaXMuc2VlZERlc2MucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZlZWREZXNjLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZWREZXNjLnRleHQgPSBiYXNlLmRlc2M7XHJcbiAgICAgICAgdGhpcy5tYXR1cmVUaW1lLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKGJhc2UubWF0dXJlX3RpbWUpO1xyXG4gICAgICAgIHRoaXMuaXRlbUJ1eUJ0bi52aXNpYmxlID0gIWQubG9jaztcclxuICAgICAgICB0aGlzLmxvY2tCdG5Cb3gudmlzaWJsZSA9IGQubG9jaztcclxuICAgICAgICB0aGlzLmxvY2tCdG5Cb3guYWN0aXZlID0gZC5sb2NrO1xyXG4gICAgICAgIGxldCBnYWluTGlzdCA9IGJhc2UuZ2FpbjtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUJveCA9IHRoaXMubWF0dXJlR2FpbkJveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICAgICAgaWNvbiA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICBnYWluRGF0YSA9IGdhaW5MaXN0W3ggLSAxXTtcclxuICAgICAgICAgICAgaWYgKHggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gYmFzZS5oYXJ2ZXN0O1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGJhc2UuaWNvbjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChnYWluRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGdhaW5EYXRhLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBnYWluRGF0YS5jb3VudCAqIGJhc2UuaGFydmVzdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKGl0ZW1Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBpY29uO1xyXG4gICAgICAgICAgICAoaXRlbUJveC5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcInhcIiArIGNvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJveCA9IHRoaXMubG9ja0J0bkJveC5nZXRDaGlsZEJ5TmFtZShcInVubG9ja19idXlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcblxyXG4gICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBiYXNlLnVubG9ja19jb3N0Py5vYmo/Lmljb247XHJcbiAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gYmFzZS51bmxvY2tfY29zdD8uY291bnQgKyBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNlZWRcIjpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImZlZWRcIjpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJiYW5rXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wQnRuSW5kZXggPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEluZGV4KGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ICE9IHRvcEJ0bkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IE51bWJlcih0b3BCdG5JbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkgdGhpcy5kYXRhLmNhbGwodGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1bmxvY2tfYnV5XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZF91bmxvY2tcIjpcclxuICAgICAgICAgICAgICAgIFBsYW50U2VydmljZS5saXN0W3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0ubG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5jaGFuZ2VJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBQbGFudFNlcnZpY2UubGlzdFt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0UGV0SW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCA9IFBldFNlcnZpY2UubGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXgrKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdFBldEluZGV4ID49IFBldFNlcnZpY2UubGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTcwQjlcdTUxRkJcdTcwQjlcdTUxRkJcdTcyQjZcdTYwMDFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVUb3BCdG5TdGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYnRuQm94VG9wLm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuYnRuQm94VG9wLmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgICAgIGxiID0gYnRuLmdldENoaWxkQXQoMCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgaWYgKHggPT09IHRoaXMudG9wQnRuU2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZy1tZW51c2VsZWN0ZWQucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBsYi5za2luID0gdGhpcy5idG5Ub3BSZXNMaXN0W3hdWzFdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nLW1lbnVub3JtYWwucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBsYi5za2luID0gdGhpcy5idG5Ub3BSZXNMaXN0W3hdWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUJvdHRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1RTk1XHU5MEU4XHU1MTg1XHU1QkI5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQm90dG9tKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5ib3R0b21Cb3gubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKHgsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGl0ZW1CdXlCb3ggPSB0aGlzLml0ZW1CdXlCdG4ucGFyZW50IGFzIExheWEuQm94O1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IC8vXHU3OUNEXHU1QjUwXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBldE9yRmVlZExpc3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJ1eUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogLy9cdTk5NzJcdTY1OTlcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGV0T3JGZWVkTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQnV5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5hcnJheSA9IFssIDEsIDEsIDFdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUGV0KCkge1xyXG4gICAgICAgIGlmICghUGV0U2VydmljZS5saXN0Lmxlbmd0aCkgUGV0U2VydmljZS5pbml0KCk7XHJcbiAgICAgICAgbGV0IHBldCA9IFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XTtcclxuICAgICAgICB0aGlzLnBldEljb24uc2tpbiA9IHBldC5iYXNlLmljb247XHJcbiAgICAgICAgdGhpcy5wZXROYW1lLnRleHQgPSBwZXQuYmFzZS5uYW1lO1xyXG4gICAgICAgIHRoaXMucGV0RGVzYy50ZXh0ID0gcGV0LmJhc2UuZGVzYztcclxuICAgICAgICB0aGlzLnZpdGFsaXR5TWF4LnZhbHVlID0gcGV0LmJhc2Uudml0YWxpdHlfbWF4ICsgXCJcIjtcclxuICAgICAgICBsZXQgYnRuX2JveCA9IHRoaXMucGV0QnV0QnRuLmdldENoaWxkQnlOYW1lKFwiYnRuX2JveFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAoYnRuX2JveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHBldC5iYXNlLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgKGJ0bl9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IHBldC5iYXNlLmNvc3QuY291bnQgKyBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgcGV0Qm94ID0gdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgxKSxcclxuICAgICAgICAgICAgZmluZEJveCA9IHBldEJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmRfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBiYWNrX2JveCA9IHBldEJveC5nZXRDaGlsZEJ5TmFtZShcImJhY2tfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBzdGFySWNvbjogTGF5YS5JbWFnZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHgrKykge1xyXG4gICAgICAgICAgICBzdGFySWNvbiA9IGZpbmRCb3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi52aXNpYmxlID0geCAqIDIwIDwgcGV0LmJhc2Uuc2Vuc2l0aXZlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi5za2luID1cclxuICAgICAgICAgICAgICAgIHggKiAyMCArIDEwIDwgcGV0LmJhc2Uuc2Vuc2l0aXZlID8gXCJnYW1lL2ltZ19zdGFyLnBuZ1wiIDogXCJnYW1lL2ltZ19oYWxmc3Rhci5wbmdcIjtcclxuICAgICAgICAgICAgc3Rhckljb24gPSBiYWNrX2JveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnZpc2libGUgPSB4ICogMjAgPCBwZXQuYmFzZS5hYmlsaXR5O1xyXG4gICAgICAgICAgICBzdGFySWNvbi5za2luID1cclxuICAgICAgICAgICAgICAgIHggKiAyMCArIDEwIDwgcGV0LmJhc2UuYWJpbGl0eSA/IFwiZ2FtZS9pbWdfc3Rhci5wbmdcIiA6IFwiZ2FtZS9pbWdfaGFsZnN0YXIucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5MUNEXHU3RjZFXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVzZXRQZXRPckZlZWRMaXN0KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5nZXREYXRhTGlzdCgpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RTJEXHU5NUY0XHU1MTg1XHU1QkI5XHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU1MjA3XHU2MzYyXHJcbiAgICAgKiBAcGFyYW0gaSBcdTRFMEJcdTY4MDdcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNlbnRlckJveFN0YXRlKGk6IG51bWJlciwgc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KGkpIGFzIExheWEuQm94KS52aXNpYmxlID0gc2hvdztcclxuICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdChpKSBhcyBMYXlhLkJveCkuYWN0aXZlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTRCMVx1NUU4NFx1OTAwOVx1NjJFOVxyXG4gICAgICogQHBhcmFtIGUgXHU0RTBCXHU2ODA3XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb25QcmljZVNlbGVjdChlOiBudW1iZXIpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk0QjFcdTVFODRcdTY1NzBcdTYzNkVcdTZFMzJcdTY3RDNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVQcmljZUl0ZW0oY2VsbDogTGF5YS5JbWFnZSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJpY2VMaXN0LnNlbGVjdGVkSW5kZXggPT09IGkpIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID0gXCJnYW1lL2ltZ19wcmljZXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IFwiZ2FtZS9pbWdfcHJpY2Vub3JtYWwucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuLy8gIFNpZ25JblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNpZ25JblZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBTcGVlZFVwVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlZWRVcFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TcGVlZFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiB9IGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuLi9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi4vY29yZS9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuLy8gIFRhc2tWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmltYWdlLCB0aXBzOlwiXHU1RTAzXHU1QzE0XHU3QzdCXHU1NzhCXHU3OTNBXHU0RjhCXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGltYWdlOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBnYW1lOiBzdHJpbmcgPSBcIjEyMTIxMlwiO1xyXG5cclxuICAgIEBFdmVudE9uKFwiYWFcIilcclxuICAgIG15RXZlbnQoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWFcIiwgZSwgdGhpcy5pbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UsIHsgV2FyZUhvdXNlRGF0YSB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1xyXG4gKi9cclxuLy9GaWVsZExldmVsVXBWaWV3IFdhcmVob3VzZVZpZXcgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXJlaG91c2VWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTGlzdCwgdGlwczpcIlx1NzI2OVx1NTRDMVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbU5hbWUsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1OYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtRGVzYywgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbURlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1JY29uLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsQ291bnRMYiwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NTFGQVx1NTUyRVx1NjU3MFx1OTFDRlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxDb3VudExiOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbFByaWNlTGIsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTUxRkFcdTU1MkVcdTRFRjdcdTY4M0NcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsUHJpY2VMYjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxQcmljZUljb24sIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTUxRkFcdTU1MkVcdTRFRjdcdTY4M0NpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsbFByaWNlSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBkYXRhTGlzdDogV2FyZUhvdXNlRGF0YVtdW10gPSBbXTtcclxuICAgIC8qKiBcdTkwMDlcdTRFMkRcdTc2ODRcdTcyNjlcdTU0QzEgXHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHNlbGVjdEl0ZW1JbmRleDogc3RyaW5nID0gXCIwLDBcIjtcclxuICAgIC8qKiBcdTkwMDlcdTRFMkRcdTc2ODRcdTcyNjlcdTU0QzFcdTY1NzBcdTYzNkUgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbURhdGE6IFdhcmVIb3VzZURhdGE7XHJcbiAgICAvKiogXHU5MDA5XHU0RTJEXHU1MUZBXHU1NTJFXHU3MjY5XHU1NEMxXHU3Njg0XHU2NTcwXHU5MUNGICovXHJcbiAgICBwcml2YXRlIHNlbGVjdEl0ZW1TZWxsQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1MzU1XHU0RUY3ICovXHJcbiAgICBwcml2YXRlIHVuaXRQcmljZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnJlbmRlckl0ZW1MaXN0KTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IGkgPSAwLFxyXG4gICAgICAgICAgICB5ID0gMDtcclxuICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YUxpc3RbeV0pIHRoaXMuZGF0YUxpc3RbeV0gPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhTGlzdFt5XS5wdXNoKGQpO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGlmIChpID4gMikge1xyXG4gICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICB5Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZGF0YUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJJdGVtTGlzdChjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFMaXN0W2ldO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShgaXRlbV8ke3h9YCkgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgICAgIGlmIChkYXRhW3hdKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kYXRhU291cmNlID0gYCR7aX0sJHt4fWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICBpY29uLnNraW4gPSBkYXRhW3hdLmJhc2UuaWNvbjtcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKSBhcyBMYXlhLkxhYmVsXHJcbiAgICAgICAgICAgICAgICApLnRleHQgPSBgJHtkYXRhW3hdLmJhc2UubmFtZX1fJHtkYXRhW3hdLmNvdW50fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5pdGVtTGlzdC5zZWxlY3RlZEluZGV4ICYmIHRoaXMuc2VsZWN0SXRlbUluZGV4ID09IGl0ZW0uZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oaWNvbiwgeyB5OiAwIH0sIDE1MCwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbURhdGEgPSBkYXRhW3hdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVzYyhkYXRhW3hdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWNvbi55ID0gNTY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGljb24ueSAhPSA1NikgTGF5YS5Ud2Vlbi50byhpY29uLCB7IHk6IDU2IH0sIDE1MCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLldhcmVob3VzZVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzBcIjpcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8yXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1JbmRleCA9IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpOyAvLyBcdThGRDlcdTkxQ0NcdTk3MDBcdTg5ODFcdTRGMThcdTUzMTZcdTczQjBcdTU3MjhcdTUwNUFcdTc2ODRcdTY2MkZcdTUyMzdcdTY1QjBcdTY1NzRcdTRFMkFcdTUyMTdcdTg4NjhcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQrKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPiB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWR1Y2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA8IDEpIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1MUZBXHU1MUZBXHU1NTJFXHU0RkUxXHU2MDZGXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlRGVzYyhkOiBXYXJlSG91c2VEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtSWNvbi5za2luID0gZC5iYXNlLmljb247XHJcbiAgICAgICAgdGhpcy5pdGVtTmFtZS50ZXh0ID0gZC5iYXNlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5pdGVtRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2M7XHJcbiAgICAgICAgbGV0IHByaWNlOiBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkLmJhc2UuZ2Fpbi5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAoZC5iYXNlLmdhaW5beF0ub2JqLmlkID09IDEwMDEpIHtcclxuICAgICAgICAgICAgICAgIHByaWNlID0gZC5iYXNlLmdhaW5beF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSBNYXRoLmNlaWwoZC5jb3VudCAvIDIpO1xyXG4gICAgICAgIHRoaXMudW5pdFByaWNlID0gcHJpY2UuY291bnQ7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbFByaWNlSWNvbi5za2luID0gcHJpY2Uub2JqLmljb247XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTNFRlx1NEVFNVx1NTFGQVx1NTUyRVx1NzY4NFx1NjU3MFx1OTFDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpIHtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0ID0gdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICsgXCJcIjtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsUHJpY2VMYi50ZXh0ID0gXCJcdTYwM0JcdThCQTFcdUZGMUFcIiArIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqIHRoaXMudW5pdFByaWNlO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblwiXG5pbXBvcnQgVmlld1Nob3dBbmkgZnJvbSBcIi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiXG5pbXBvcnQgQWRkTGFuZFZpZXcgZnJvbSBcIi4vdmlldy9BZGRMYW5kVmlld1wiXG5pbXBvcnQgRmllbGRMZXZlbFVwVmlldyBmcm9tIFwiLi92aWV3L0ZpZWxkTGV2ZWxVcFZpZXdcIlxuaW1wb3J0IExvZ2luVmlldyBmcm9tIFwiLi92aWV3L0xvZ2luVmlld1wiXG5pbXBvcnQgTWFpbFZpZXcgZnJvbSBcIi4vdmlldy9NYWlsVmlld1wiXG5pbXBvcnQgTWFpblZpZXcgZnJvbSBcIi4vdmlldy9NYWluVmlld1wiXG5pbXBvcnQgRmllbGRDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9GaWVsZENvbXBvbmVudFwiXG5pbXBvcnQgT3JkZXJWaWV3IGZyb20gXCIuL3ZpZXcvT3JkZXJWaWV3XCJcbmltcG9ydCBTZXR0aW5nVmlldyBmcm9tIFwiLi92aWV3L1NldHRpbmdWaWV3XCJcbmltcG9ydCBTaG9wVmlldyBmcm9tIFwiLi92aWV3L1Nob3BWaWV3XCJcbmltcG9ydCBTaWduSW5WaWV3IGZyb20gXCIuL3ZpZXcvU2lnbkluVmlld1wiXG5pbXBvcnQgU3BlZWRVcFZpZXcgZnJvbSBcIi4vdmlldy9TcGVlZFVwVmlld1wiXG5pbXBvcnQgVGFza1ZpZXcgZnJvbSBcIi4vdmlldy9UYXNrVmlld1wiXG5pbXBvcnQgV2FyZWhvdXNlVmlldyBmcm9tIFwiLi92aWV3L1dhcmVob3VzZVZpZXdcIlxyXG4vKlxyXG4qIFx1NkUzOFx1NjIwRlx1NTIxRFx1NTlDQlx1NTMxNlx1OTE0RFx1N0Y2RTtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9MTA4MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTE5MjA7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cImZpeGVkd2lkdGhcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwibWlkZGxlXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImNlbnRlclwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwic2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPXRydWU7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvQnV0dG9uLnRzXCIsQnV0dG9uKTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9WaWV3U2hvd0FuaS50c1wiLFZpZXdTaG93QW5pKTtcbiAgICAgICAgcmVnKFwidmlldy9BZGRMYW5kVmlldy50c1wiLEFkZExhbmRWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9GaWVsZExldmVsVXBWaWV3LnRzXCIsRmllbGRMZXZlbFVwVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTG9naW5WaWV3LnRzXCIsTG9naW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9NYWlsVmlldy50c1wiLE1haWxWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9NYWluVmlldy50c1wiLE1haW5WaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9GaWVsZENvbXBvbmVudC50c1wiLEZpZWxkQ29tcG9uZW50KTtcbiAgICAgICAgcmVnKFwidmlldy9PcmRlclZpZXcudHNcIixPcmRlclZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NldHRpbmdWaWV3LnRzXCIsU2V0dGluZ1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1Nob3BWaWV3LnRzXCIsU2hvcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NpZ25JblZpZXcudHNcIixTaWduSW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TcGVlZFVwVmlldy50c1wiLFNwZWVkVXBWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9UYXNrVmlldy50c1wiLFRhc2tWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9XYXJlaG91c2VWaWV3LnRzXCIsV2FyZWhvdXNlVmlldyk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCIuL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcIi4vY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuY2xhc3MgTWFpbiB7XHJcbiAgICAvKiogXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcdTUyMTdcdTg4NjggKi9cclxuICAgIHN0YXRpYyBjdXN0b21SZW5kZXJJRDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1x1NjgzOVx1NjM2RUlERVx1OEJCRVx1N0Y2RVx1NTIxRFx1NTlDQlx1NTMxNlx1NUYxNVx1NjRDRVxyXG4gICAgICAgIGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuICAgICAgICBlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuICAgICAgICBMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcbiAgICAgICAgLy9cdTUxN0NcdTVCQjlcdTVGQUVcdTRGRTFcdTRFMERcdTY1MkZcdTYzMDFcdTUyQTBcdThGN0RzY2VuZVx1NTQwRVx1N0YwMFx1NTczQVx1NjY2RlxyXG4gICAgICAgIExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcbiAgICAgICAgLy9cdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDhcdTkwMUFcdThGQzdJREVcdThCQkVcdTdGNkVcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdUZGMENcdTYyMTZcdTgwMDV1cmxcdTU3MzBcdTU3NDBcdTU4OUVcdTUyQTBkZWJ1Zz10cnVlXHU1M0MyXHU2NTcwXHVGRjBDXHU1NzQ3XHU1M0VGXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA5XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcbiAgICAgICAgTGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG5cclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1OEQ0NFx1NkU5MFx1NzI0OFx1NjcyQ1x1NjNBN1x1NTIzNlx1RkYwQ3ZlcnNpb24uanNvblx1NzUzMUlERVx1NTNEMVx1NUUwM1x1NTI5Rlx1ODBGRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NEU1Rlx1NEUwRFx1NUY3MVx1NTRDRFx1NTQwRVx1N0VFRFx1NkQ0MVx1N0EwQlxyXG4gICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksXHJcbiAgICAgICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT05cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1NTkyN1x1NUMwRlx1NTZGRVx1NjYyMFx1NUMwNFx1RkYwQ1x1NTJBMFx1OEY3RFx1NUMwRlx1NTZGRVx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NTNEMVx1NzNCMFx1NUMwRlx1NTZGRVx1NTcyOFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1OTFDQ1x1OTc2Mlx1RkYwQ1x1NTIxOVx1NEYxOFx1NTE0OFx1NTJBMFx1OEY3RFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1RkYwQ1x1ODAwQ1x1NEUwRFx1NjYyRlx1NUMwRlx1NTZGRVxyXG4gICAgICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXHJcbiAgICAgICAgICAgIFwiZmlsZWNvbmZpZy5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ29uZmlnTG9hZGVkKCkge1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHJcbiAgICAgICAgQ29uZmlnW1wiY3VzdG9tUmVuZGVySURcIl0gPSBbXTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LmluaXQoKTtcclxuXHJcbiAgICAgICAgLy8gTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL2F1ZGlvL2RyYXcubXAzXCIpO1xyXG4gICAgICAgIC8vXHU1OTgyXHU2NzlDXHU5MDFBXHU4RkM3XHU4QkJFXHU1OTA3XHU5NzU5XHU5N0YzXHU5NTJFXHU4QkE5XHU5N0YzXHU5ODkxXHU4MUVBXHU1MkE4XHU4RERGXHU5NjhGXHU4QkJFXHU1OTA3XHU5NzU5XHU5N0YzXHUzMDAyXHU5NzAwXHU4OTgxXHU1QzA2dXNlQXVkaW9NdXNpY1x1OEJCRVx1N0Y2RVx1NEUzQWZhbHNlXHUzMDAyXHJcbiAgICAgICAgLy8gU291bmRNYW5hZ2VyLnVzZUF1ZGlvTXVzaWM9ZmFsc2VcdUZGMUJcclxuICAgICAgICAvLyBMYXlhLlNvdW5kTWFuYWdlci5wbGF5TXVzaWMoUmVzLmF1ZGlvcy53aW4pO1xyXG5cclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oUmVzLnZpZXdzLkxvZ2luVmlldywge1xyXG4gICAgICAgICAgICAgICAgc2hvd0xvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEdhbWVEYXRhKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5WaWV3LnNldExvYWRpbmdQYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9cdTU0MEVcdTY3MUZcdTRGMThcdTUzMTZcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS5WaWV3LnNob3dMb2FkaW5nUGFnZShudWxsLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSg5OTk5OTk5OTk5OTk5OTkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIFJlcy5zY2VuZXMsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRHYW1lRGF0YShkOiBOZXRJbml0KSB7fVxyXG59XHJcbi8vXHU2RkMwXHU2RDNCXHU1NDJGXHU1MkE4XHU3QzdCXHJcbm5ldyBNYWluKCk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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VSxLQUFJLGVBQWMsT0FBTSxlQUFjLGFBQVksaUJBQWdCLHNCQUFxQixRQUFPLGlHQUFvQixFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sTUFBSyxjQUFhLFdBQVUsUUFBTyxvQkFBbUIsV0FBVSxLQUFJLGVBQWMsT0FBTSxlQUFjLGFBQVksaUJBQWdCLHNCQUFxQixRQUFPLGlHQUFvQixFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sTUFBSyxjQUFhLFdBQVUsUUFBTyxvQkFBbUIsV0FBVSxLQUFJLGVBQWMsT0FBTSxlQUFjLGFBQVksaUJBQWdCLHNCQUFxQixRQUFPLGlHQUFvQixFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sTUFBSyxjQUFhLFdBQVUsUUFBTyxtQkFBa0IsV0FBVSxLQUFJLGVBQWMsT0FBTSxlQUFjLGFBQVksaUJBQWdCLHNCQUFxQixRQUFPLGlHQUFvQixFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sTUFBSyxjQUFhLFdBQVUsUUFBTyxtQkFBa0IsV0FBVSxLQUFJLGVBQWMsT0FBTSxlQUFjLGFBQVksaUJBQWdCLHNCQUFxQixRQUFPLGlHQUFvQixFQUFDLE1BQUssTUFBSyxRQUFPLHNCQUFNLFFBQU8sTUFBSyxjQUFhLFdBQVUsUUFBTyxvQkFBbUIsV0FBVSxLQUFJLGVBQWMsT0FBTSxlQUFjLGFBQVksaUJBQWdCLHNCQUFxQixRQUFPLGlHQUFvQixFQUFDLE1BQUssTUFBSyxRQUFPLHNCQUFNLFFBQU8sTUFBSyxjQUFhLFdBQVUsUUFBTyxvQkFBbUIsV0FBVSxLQUFJLGVBQWMsT0FBTSxlQUFjLGFBQVksaUJBQWdCLHNCQUFxQixRQUFPLGlHQUFvQixFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sTUFBSyxjQUFhLFlBQVcsUUFBTyxvQkFBbUIsV0FBVSxLQUFJLGVBQWMsT0FBTSxlQUFjLGFBQVksaUJBQWdCLHNCQUFxQixRQUFPLGlHQUFvQixFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sTUFBSyxjQUFhLFlBQVcsUUFB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QUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsS0FBSSxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLEtBQUksYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGlDQUErQixFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGlDQUErQixFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxpQ0FBK0IsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxpQ0FBK0IsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksaUNBQStCLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLFFBQU8sSUFBRyxhQUFZLENBQUMsRUFBQyxNQUFLLEdBQUUsVUFBUyxVQUFTLFFBQU8sVUFBUyxRQUFPLFFBQU0sRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLEtBQUcsRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLEtBQUcsRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLEtBQUcsRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLEtBQUcsRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLEtBQUcsRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLEtBQUcsRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLEtBQUcsRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLEtBQUcsRUFBQyxNQUFLLElBQUcsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLE1BQUksUUFBTyxDQUFDLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyxNQUFLLFlBQVcsSUFBRyxRQUFPLGFBQVksUUFBTyx1REFBYSxFQUFDLE1BQUssTUFBSyxRQUFPLGdCQUFLLFFBQU8sTUFBSyxZQUFXLElBQUcsUUFBTyxhQUFZLFFBQU8sdURBQWEsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLE1BQUssWUFBVyxJQUFHLFFBQU8sYUFBWSxRQUFPLHVEQUFhLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyxNQUFLLFlBQVcsSUFBRyxRQUFPLGFBQVksUUFBTyx1REFBYSxFQUFDLE1BQUssTUFBSyxRQUFP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
