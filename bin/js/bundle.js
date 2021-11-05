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
            if (url === Res_default.views.HintView)
              return;
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
      this.orderLevel = 2;
      this.nickname = "name";
      this.uid = 0;
      this.avatar = "";
      this.diamond = 999;
      this.gold = 999;
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
    diamondId: 1001,
    goldId: 1002,
    localKey: "love_HD_farm",
    baseUrl: "//47.108.192.181:8092/farm"
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
        matureIcon: d.icon || `plant_icon/${d.id}_mature.png`,
        growingIcon: d.icon || `plant_icon/${d.id}_growing.png`,
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
    ApiHttp2["unlockLand"] = "/farmController/unlockLand";
  })(ApiHttp || (ApiHttp = {}));

  // src/common/HttpDataControl.ts
  var HttpDataControl = class {
    forward(d) {
      switch (d.api) {
        case ApiHttp.login:
          this.login(d.data);
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
      core_default.view.open(Res_default.views.HintView, { parm: { text: `errorCode ${errorCode}` } });
    }
    login(d) {
      PlantService_default.init(d.seedsList);
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
      this.baseUrl = null;
    }
    init(url) {
      this.baseUrl = url;
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
      console.log(`%c ==> send %c${data.api} %c${JSON.stringify(data.data)}`, `color:#82ccdd;font-weight:700;`, `color:#eb4d4b;font-weight:700;`, `color:#f8c291;font-weight:700;`);
      this.xhr.send(data.baseUrl + data.api, data.data, data.method, data.responseType, data.headers);
      return new Promise((resolve) => {
        this.backResolveEvent = resolve;
      });
    }
    completeHandler(e) {
      var _a, _b;
      if (e.resultCode) {
        if ((_a = this.sendData) == null ? void 0 : _a.error) {
          this.sendData.error(e.resultCode, e.result);
        }
        HttpDataControl_default.error(e.resultCode, e.result);
        return console.error(e);
      } else {
        console.log(`%c <== back %c${this.sendData.api} `, `color:#b8e994;font-weight:700;`, `color:#78e08f;font-weight:700;`, e.result);
        HttpDataControl_default.forward({
          api: this.sendData.api,
          data: e.result,
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
        case "ad_btn":
          HttpControl.inst.send({
            api: ApiHttp.unlockLand,
            data: {
              landId: this.data.id,
              seedsId: null,
              type: 2
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
    }
    onClick(e) {
      var _a;
      switch (e.target.name) {
        case "close":
          if ((_a = this.data) == null ? void 0 : _a.call) {
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
        },
        error: (code, data) => {
          LocalStorageService_default.clear();
          this.loginBox.visible = true;
          this.loadBox.visible = false;
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
          this.icon.skin = TableAnalyze_default.table("plant").get(this.data.farmseedsId).growingIcon;
          this.plantIconAni(true);
          this.showShadowIcon(true);
          this.updateCountDown();
          this.updateLevel();
          this.topStateIcon.visible = true;
          this.topStateIconAni(true);
          this.setStateIconSkin(1);
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
        this.icon.skin = TableAnalyze_default.table("plant").get(this.data.farmseedsId).matureIcon;
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
      return __async(this, null, function* () {
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
              yield HttpControl.inst.send({
                api: ApiHttp.gather,
                data: {
                  landId: this.data.landId
                }
              });
              let plantObj = TableAnalyze_default.table("plant").get(this.data.farmseedsId), rewardList = [
                {
                  obj: plantObj,
                  count: plantObj.harvest,
                  posType: 3
                }
              ];
              plantObj.gain.forEach((d) => {
                rewardList.push({
                  obj: TableAnalyze_default.table("currency").get(d.obj.id),
                  count: d.count,
                  posType: ConfigGame_default.diamondId == d.obj.id ? 2 : 1
                });
              });
              core_default.eventGlobal.event(EventMaps.play_get_reward, {
                node: this.owner,
                list: rewardList,
                callBack: () => {
                  plantObj.gain.forEach((d) => {
                    switch (d.obj.id) {
                      case ConfigGame_default.diamondId:
                        UserInfo_default.diamond += d.count;
                        break;
                      case ConfigGame_default.goldId:
                        UserInfo_default.gold += d.count;
                        break;
                    }
                  });
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
                this.landList.get(this.fieldId).farmseedsId = d.base.id;
                this.landList.get(this.fieldId).growUpTime = d.base.mature_time;
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
                LandService_default.addLand({
                  id: null,
                  landId: this.fieldId,
                  level: 1,
                  plantTime: "",
                  growUpTime: 0,
                  farmseedsId: null,
                  userId: null
                });
                this.updateData();
              }
            }
          });
        }
      });
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
      this.orderBox = null;
      this.landUpLayer = null;
      this.topLayerOnStage = null;
      this.topGoldIcon = null;
      this.topDiamondIcon = null;
      this.warehouseBtn = null;
      this.getRewardPrefab = null;
      this.floatRewardIcon = null;
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
      Res_default.scenes.forEach((e) => {
        if (e.endsWith("png")) {
          console.log(e);
        }
      });
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
      this.updateOrder();
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
      let box = this.orderBox, d = TableAnalyze_default.table("order").get(UserInfo_default.orderLevel), reward, rewardCount = 0;
      for (let x = 0; x < 4; x++) {
        let item = box.getChildByName("item_" + x);
        if (d.condition[x]) {
          item.getChildByName("icon").skin = d.condition[x].plant.icon;
          item.getChildByName("num").text = `0/${d.condition[x].count}`;
          item.getChildByName("bar").width = 87 * (0 / d.condition[x].count);
          item.visible = true;
          d.condition[x].plant.gain.forEach((e) => {
            if (e.obj.id === ConfigGame_default.diamondId) {
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
      if (reward) {
        let btnBox = box.getChildByName("btn_box").getChildByName("box");
        btnBox.getChildByName("icon").skin = reward.obj.icon;
        btnBox.getChildByName("value").value = `${rewardCount + Math.round(rewardCount * d.commission)}`;
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
          e.topStateIconAni(true);
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
            e.topStateIconAni(Boolean(e.data.farmseedsId));
          } else {
            e.setStateIconSkin(1);
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
      this.orderList.array = this.dataList;
      this.orderList.renderHandler = new Laya.Handler(this, this.renderList);
      this.orderList.vScrollBarSkin = null;
    }
    renderList(cell, i) {
      let d = this.dataList[i], reward, rewardCount = 0, rewardBox = cell.getChildByName("reward_box");
      cell.getChildByName("order_lv").text = `${d.id}\u7EA7\u8BA2\u5355`;
      for (let x = 0; x < 4; x++) {
        let item = cell.getChildByName("item_" + x);
        if (d.condition[x]) {
          item.getChildByName("icon").skin = d.condition[x].plant.icon;
          if (d.id < UserInfo_default.orderLevel) {
            item.getChildByName("num").text = `${d.condition[x].count}/${d.condition[x].count}`;
            item.getChildByName("bar").width = 87;
          } else {
            item.getChildByName("num").text = `0/${d.condition[x].count}`;
            item.getChildByName("bar").width = 87 * (0 / d.condition[x].count);
          }
          item.visible = true;
          d.condition[x].plant.gain.forEach((e) => {
            if (e.obj.id === ConfigGame_default.diamondId) {
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
      if (d.id > UserInfo_default.orderLevel) {
        btn.skin = this.btnLockRes;
        btn.active = false;
      } else {
        if (d.id == UserInfo_default.orderLevel) {
          btn.skin = this.btnResCur;
        } else {
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
      var _a, _b, _c, _d;
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
          let topBtnIndex = this.btnBoxTop.getChildIndex(e.target);
          if (this.topBtnSelectIndex != topBtnIndex) {
            this.topBtnSelectIndex = Number(topBtnIndex);
            this.updateTopBtnState();
          }
          break;
        case "buy_btn":
          HttpControl.inst.send({
            api: ApiHttp.sow,
            data: {
              landId: (_a = this.data.parm) == null ? void 0 : _a.landId,
              seedsId: this.getDataList()[this.itemListSelectIndex].base.id
            },
            call: () => {
              var _a2;
              ViewManager.inst.close(Res_default.views.ShopView);
              if ((_a2 = this.data) == null ? void 0 : _a2.call)
                this.data.call(this.getDataList()[this.itemListSelectIndex]);
            }
          });
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
            Laya.View.hideLoadingPage(1e3);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9Vc2VySW5mby50cyIsICIuLi8uLi9zcmMvY29yZS9pbmRleC50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Db25maWdHYW1lLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVGFibGUudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Ub29scy50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlQW5hbHl6ZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vTmV0TWFwcy50cyIsICIuLi8uLi9zcmMvY29tbW9uL0h0dHBEYXRhQ29udHJvbC50cyIsICIuLi8uLi9zcmMvY29tbW9uL0h0dHBDb250cm9sLnRzIiwgIi4uLy4uL3NyYy92aWV3L0FkZExhbmRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZpZWxkTGV2ZWxVcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc0Rlc2NWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZyaWVuZHNSZXdhcmRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZyaWVuZHNWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0hpbnRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0xvZ2luVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9NYWlsVmlldy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9GaWVsZENvbXBvbmVudC50cyIsICIuLi8uLi9zcmMvdmlldy9NYWluVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9PcmRlclZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2V0dGluZ1ZpZXcudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL0ZlZWRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9QZXRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy92aWV3L1Nob3BWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NpZ25JblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU3BlZWRVcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvVGFza1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvV2FyZWhvdXNlVmlldy50cyIsICIuLi8uLi9zcmMvR2FtZUNvbmZpZy50cyIsICIuLi8uLi9zcmMvTWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNlx1NTQwRFx1NzlGMFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gRXZlbnRNYXBzIHtcclxuICAgIC8qKiBsb2FkIFx1NzU0Q1x1OTc2Mlx1OEZEQlx1ODg0Q1x1NjZGNFx1NjVCMCAqL1xyXG4gICAgbG9hZF9wcm9ncmVzcyA9IFwibG9hZF9wcm9ncmVzc1wiLFxyXG5cclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTU3MUZcdTU3MzAgKi9cclxuICAgIHVwZGF0ZV9maWVsZCA9IFwidXBkYXRlX2ZpZWxkXCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY0QURcdTY1M0VcdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdTUyQThcdTc1M0JcclxuICAgICAqXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAge1xyXG4gICAgICAgIC8vXHU5NzAwXHU4OTgxXHU5OERFXHU5MUQxXHU1RTAxXHU3Njg0XHU1M0MyXHU4MDAzXHU4MjgyXHU3MEI5XHJcbiAgICAgICAgbm9kZTogdGhpcy5vd25lcixcclxuICAgICAgICAvL1x1ODk4MVx1OThERVx1NzY4NFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9cdTg5RTNcdTY3OTBcdTU5N0RcdTc2ODRcdTVFMjZpY29uXHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldCgxMDAxKSxcclxuICAgICAgICAgICAgICAgIC8vXHU2NTcwXHU5MUNGXHJcbiAgICAgICAgICAgICAgICBjb3VudDogMjAsXHJcbiAgICAgICAgICAgICAgICAvL1x1ODk4MVx1OThERVx1NTNCQlx1NzY4NFx1NEY0RFx1N0Y2RSAxIFx1OTFEMVx1NUUwMSAyIFx1OTRCQlx1NzdGM1xyXG4gICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9XHJcbiAgICAgKi9cclxuICAgIHBsYXlfZ2V0X3Jld2FyZCA9IFwicGxheV9nZXRfcmV3YXJkXCIsXHJcbn1cclxuIiwgIi8vXHU0RUUzXHU3ODAxXHU3NTFGXHU2MjEwXHVGRjBDXHU0RTBEXHU4OTgxXHU2MjRCXHU1MkE4XHU0RkVFXHU2NTM5XG5cbi8qKlxuICogXHU3NTRDXHU5NzYyXHU1MjE3XHU4ODY4XG4gKi9cbiBleHBvcnQgZW51bSB2aWV3cyBcbiAgICB7XG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmUgKi9cbiAgICAgICAgQWRkTGFuZFZpZXcgPSBcInNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lICovXG4gICAgICAgIEZpZWxkTGV2ZWxVcFZpZXcgPSBcInNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZyaWVuZHNEZXNjVmlldy5zY2VuZSAqL1xuICAgICAgICBGcmllbmRzRGVzY1ZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzRGVzY1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRnJpZW5kc1Jld2FyZFZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc1Jld2FyZFZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GcmllbmRzVmlldy5zY2VuZSAqL1xuICAgICAgICBGcmllbmRzVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lICovXG4gICAgICAgIEhpbnRWaWV3ID0gXCJzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTG9naW5WaWV3LnNjZW5lICovXG4gICAgICAgIExvZ2luVmlldyA9IFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZSAqL1xuICAgICAgICBNYWlsVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lICovXG4gICAgICAgIE1haW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lICovXG4gICAgICAgIE9yZGVyVmlldyA9IFwic2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZSAqL1xuICAgICAgICBTZXR0aW5nVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NldHRpbmdWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lICovXG4gICAgICAgIFNob3BWaWV3ID0gXCJzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZSAqL1xuICAgICAgICBTaWduSW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBTcGVlZFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NwZWVkVXBWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lICovXG4gICAgICAgIFRhc2tWaWV3ID0gXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZSAqL1xuICAgICAgICBXYXJlaG91c2VWaWV3ID0gXCJzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZVwiLCBcbiAgICB9XG5cbiBleHBvcnQgZW51bSBhdWRpb3MgXG4gICAge1xuICAgIH1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9XYXJlaG91c2VWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU3BlZWRVcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0dldFJld2FyZC5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9GbG9hdFJld2FyZEljb24ucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvRmllbGRQcmVmYWIucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9jb21wb25lbnRzL0J1dHRvbi5wcmVmYWJcIixcbiAgICAgICAgICAgIFwicmVzL2xvYWRpbmdCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ193b29kdGl0bGUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmVIb3VzZUJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlYmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc2hlbGYucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfcG9wVXBCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19sYW5kQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvdXNldG9wLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmczLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcyLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2Zhcm1sYW5kTG9nby5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL3NoYWRlci92cy52c1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3BzLmZzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLmF0bGFzXCJdO1xuICAgIFxuXG4vKipcbiAqIFx1NjI0MFx1NjcwOVx1OEQ0NFx1NkU5MFxuICovXG5jb25zdCBSZXMgPSB7XG4gICAgdmlld3M6IHZpZXdzLFxuICAgIHNjZW5lczogc2NlbmVzLFxuICAgIGF1ZGlvczogYXVkaW9zLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzO1xuIiwgIi8qKlxyXG4gKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjZcclxuICovXHJcbmNvbnN0IEV2ZW50R2xvYmFsID0gbmV3IExheWEuRXZlbnREaXNwYXRjaGVyKCk7XHJcblxyXG4vKipcclxuICogXHU1MEE4XHU1QjU4XHU3Njg0XHU5NzAwXHU4OTgxXHU3RUQxXHU1QjlBXHU4QkEyXHU5NjA1XHU0RThCXHU0RUY2XHU3Njg0XHU3QzdCXHU3Njg0XHU1MzlGXHU1NzhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRXZlbnRDbGFzczogTWFwPGFueSwgeyBrZXk6IHN0cmluZzsgZm46IEZ1bmN0aW9uIH0+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFdmVudE9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcbiAgICAgICAgRXZlbnRDbGFzcy5zZXQodGFyZ2V0LCB7IGtleTogbmFtZSwgZm46IGRlc2NyaXB0b3IudmFsdWUgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogXHU1MEE4XHU1QjU4XHU3Njg0XHU5NzAwXHU4OTgxXHU3RUQxXHU1QjlBXHU1QzVFXHU2MDI3XHU2N0U1XHU2MjdFXHU3RUQxXHU1QjlBXHU1NDBEXHU3OUYwXHU3Njg0XHU3QzdCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQmluZE5hbWVDbGFzczogTWFwPGFueSwgc3RyaW5nW10+ID0gbmV3IE1hcCgpO1xyXG5leHBvcnQgZnVuY3Rpb24gRmluZEJ5TmFtZSh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xyXG4gICAgLy8gICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcblxyXG4gICAgaWYgKCFCaW5kTmFtZUNsYXNzLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgQmluZE5hbWVDbGFzcy5zZXQodGFyZ2V0LCBbXSk7XHJcbiAgICB9XHJcbiAgICBCaW5kTmFtZUNsYXNzLmdldCh0YXJnZXQpLnB1c2gocHJvcGVydHlLZXkpO1xyXG4gICAgLy8gfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRHbG9iYWw7XHJcbiIsICJjb25zdCBjYWxsZXJzOiBNYXA8YW55LCBGdW5jdGlvbltdPiA9IG5ldyBNYXAoKTtcclxuXHJcbmNsYXNzIE9ic2VydmFibGVDb250cm9sPGNhbGwgZXh0ZW5kcyBMYXlhLlNjcmlwdD4ge1xyXG4gICAgcHJpdmF0ZSBrZXlFdmVudHM6IE1hcDxhbnksIE1hcDxzdHJpbmcsIEZ1bmN0aW9uW10+PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzZEMVx1NTQyQ1x1NUM1RVx1NjAyN1x1NTAzQ1x1NTNEOFx1NTMxNlxyXG4gICAgICogIFtcdTU3MjhcdTc1NENcdTk3NjJkZXN0cm95XHU3Njg0XHU2NUY2XHU1MDE5XHU0RjFBXHU4MUVBXHU1REYxXHU2Q0U4XHU5NTAwXHU3NkQxXHU1NDJDXVxyXG4gICAgICogQHBhcmFtIE9iaiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTc2ODRcdTVCRjlcdThDNjFcclxuICAgICAqL1xyXG4gICAgd2F0Y2g8VCBleHRlbmRzIHt9PihPYmo6IFQsIGNhbGxlcjogY2FsbCkge1xyXG4gICAgICAgIGlmICghY2FsbGVycy5oYXMoY2FsbGVyKSkge1xyXG4gICAgICAgICAgICBjYWxsZXJzLnNldChjYWxsZXIsIFtdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBrZXlFdmVudCA9IHRoaXMua2V5RXZlbnRzO1xyXG4gICAgICAgIGlmICgha2V5RXZlbnQuaGFzKE9iaikpIHtcclxuICAgICAgICAgICAga2V5RXZlbnQuc2V0KE9iaiwgbmV3IE1hcCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlx1NzY4NFx1NUM1RVx1NjAyN1x1NEU4Qlx1NEVGNlxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkgXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QzVFXHU2MDI3XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGwgXHU1NkRFXHU4QzAzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qga2V5QmluZCA9IDxLZXkgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEtleSAmIHN0cmluZywgY2FsbDogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IF9vYmogPSBrZXlFdmVudC5nZXQoT2JqKTtcclxuICAgICAgICAgICAgaWYgKCFfb2JqLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBfb2JqLnNldChrZXksIFtdKTtcclxuICAgICAgICAgICAgICAgIGlmIChPYmpbXCIjXCIgKyBrZXldID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9ialtcIiNcIiArIGtleV0gPSBPYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbXCIjXCIgKyBrZXldID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9vYmouZ2V0KGtleSkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tcIiNcIiArIGtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2FsbC5iaW5kKGNhbGwpO1xyXG4gICAgICAgICAgICBfb2JqLmdldChrZXkpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcikucHVzaChjYWxsKTtcclxuICAgICAgICAgICAgY2FsbChPYmpba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5MDFBXHU4RkM3XHU0RjIwXHU1MTY1XHU3Njg0Y2FsbGVyXHU1MjIwXHU5NjY0XHU1RjUzXHU1MjREXHU3RUQxXHU1QjlBXHU3Njg0XHU2MjQwXHU2NzA5XHU3Njg0XHU0RThCXHU0RUY2IFx1NjIxNlx1NjMwN1x1NUI5QVx1ODlFM1x1NTFCM1x1NkEyMVx1NEUyQVx1NUJGOVx1OEM2MVx1OERERlx1NUY1M1x1NTI0RGNhbGxlclx1N0VEMVx1NUI5QVx1NzY4NFx1NzZEMVx1NTQyQ1xyXG4gICAgICogQHBhcmFtIGNhbGxlciBcdTc2RDFcdTU0MkNcdTY1RjZcdTdFRDFcdTVCOUFcdTc2ODRcdTU3M0FcdTY2NkZcdTVCRjlcdThDNjFcclxuICAgICAqIEBwYXJhbSBvYmogXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUJ5Q2FsbGVyKGNhbGxlcjogY2FsbCwgb2JqOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgY2FsbGVycy5nZXQoY2FsbGVyKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZ2V0KG9iaikuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhPZiA9IGV2LmluZGV4T2YoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGsuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZiA+IC0xKSBldi5zcGxpY2UoaW5kZXhPZiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU3RUQxXHU1QjlBXHU1M0VGXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgT2JzZXJ2YWJsZUNvbnRyb2woKTtcclxuIiwgImltcG9ydCBFdmVudEdsb2JhbCwgeyBCaW5kTmFtZUNsYXNzLCBFdmVudENsYXNzIH0gZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JpcHQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vRXZlbnRPblx1ODhDNVx1OTk3MFx1NTY2OFx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QVxyXG4gICAgICAgIGxldCBiaW5kRXZlbnQgPSBFdmVudENsYXNzLmdldCh0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgYmluZEV2ZW50ICYmIEV2ZW50R2xvYmFsLm9uKGJpbmRFdmVudC5rZXksIHRoaXMsIGJpbmRFdmVudC5mbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRBd2FrZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25Bd2FrZSgpIHtcclxuICAgICAgICAvL1x1N0VEOVx1ODhDNVx1OTk3MFx1NTY2OFx1OEJCMFx1NUY1NVx1NzY4NFx1NUM1RVx1NjAyN1x1RkYwQ1x1NjdFNVx1NjI3RVx1ODI4Mlx1NzBCOVxyXG4gICAgICAgIEJpbmROYW1lQ2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2VdID0gdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uSGRBd2FrZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU0RjIwXHU1MTY1XHU1M0MyXHU2NTcwXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqIEBwYXJhbSBlXHJcbiAgICAgKi9cclxuICAgIG9uT3BlbmVkKGUpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTZGQzBcdTZEM0JcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCNjRcdTY1RjZcdTYyNDBcdTY3MDlcdTgyODJcdTcwQjlcdTU0OENcdTdFQzRcdTRFRjZcdTU3NDdcdTVERjJcdTUyMUJcdTVFRkFcdTVCOENcdTZCRDVcdUZGMENcdTZCMjFcdTY1QjlcdTZDRDVcdTUzRUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkQXdha2UoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRW5hYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRFbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NTQyRlx1NzUyOFx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1ODI4Mlx1NzBCOVx1ODhBQlx1NkRGQlx1NTJBMFx1NTIzMFx1ODIxRVx1NTNGMFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkU3RhcnRcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkU3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QjJDXHU0RTAwXHU2QjIxXHU2MjY3XHU4ODRDdXBkYXRlXHU0RTRCXHU1MjREXHU2MjY3XHU4ODRDXHVGRjBDXHU1M0VBXHU0RjFBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFN0YXJ0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFVwZGF0ZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCQ0ZcdTVFMjdcdTY2RjRcdTY1QjBcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTVDM0RcdTkxQ0ZcdTRFMERcdTg5ODFcdTU3MjhcdThGRDlcdTkxQ0NcdTUxOTlcdTU5MjdcdTVGQUFcdTczQUZcdTkwM0JcdThGOTFcdTYyMTZcdTgwMDVcdTRGN0ZcdTc1MjhnZXRDb21wb25lbnRcdTY1QjlcdTZDRDVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkVXBkYXRlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERpc2FibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGREaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTc5ODFcdTc1MjhcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTRFQ0VcdTgyODJcdTcwQjlcdTRFQ0VcdTgyMUVcdTUzRjBcdTc5RkJcdTk2NjRcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGlzYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREZXN0cm95XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25IZERlc3Ryb3koKTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NkUwNVx1OTY2NFx1OERERlx1NUY1M1x1NTI0RFx1N0M3Qlx1N0VEMVx1NUI5QVx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1ODlDMlx1NUJERlx1NjVCOVx1NkNENVxyXG4gICAgICAgICAgICBPYnNlcnZhYmxlUHJvcGVydHkucmVtb3ZlQnlDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIC8vXHU5NTAwXHU2QkMxXHU2NUY2XHU2RTA1XHU5NjY0XHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU1RjE1XHU3NTI4XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0ga2V5cy5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5c1t4XV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNEJcdTUyQThcdThDMDNcdTc1MjhcdTgyODJcdTcwQjlcdTk1MDBcdTZCQzFcdTY1RjZcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGVzdHJveSgpIHt9XHJcblxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiBcdTc1NENcdTk3NjJcdTYyNTNcdTVGMDBcdTRFRTVcdTU0MEVcdTVFMjZcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcclxuICAgIC8vICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgLy8gICovXHJcbiAgICAvLyBvbk9wZW5lZChkKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coMTExKTtcclxuICAgIC8vIH1cclxufVxyXG4iLCAiaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuXHJcbi8vY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U2hvd0FuaSBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJnLCB0aXBzOlwiXHU4MENDXHU2NjZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGJnOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb250ZW50LCB0aXBzOlwiXHU1MTg1XHU1QkI5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTphbmlUeXBlLHRpcHM6XCJcdTUyQThcdTc1M0JcdTdDN0JcdTU3OEJcIix0eXBlOkVkaXRPcHRpb24sb3B0aW9uOlwiYm90dG9tVG9TaG93LHNjYWxlU2hvd1wifSovXHJcbiAgICAvLyBcdThGRDRcdTU2REVcdTVCNTdcdTdCMjZcdTRFMzJcclxuICAgIGFuaVR5cGU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHR3ZWVuTGlzdDogTGF5YS5Ud2VlbltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9PcGVuKCkge31cclxuICAgIC8qKlxyXG4gICAgICogIFx1NTE3M1x1OTVFRFx1NjIxMFx1NTI5Rlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb0Nsb3NlKCkge31cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcblxyXG4gICAgICAgIHRoaXMuYmcuYWxwaGEgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAuNzUgfSxcclxuICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxlU2hvd1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLmZyb20oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMiwgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLCBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5ib3R0b20gPSAtdGhpcy5jb250ZW50LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJvdHRvbTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5jaXJjT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VWaWV3KCkge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY2FsZVNob3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVg6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVk6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAtdGhpcy5jb250ZW50LmhlaWdodCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi5jbGVhcihlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipcclxuICogXHU1QjlFXHU0RjhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jb25zdCBpbnN0YW5jZUxpc3Q6IE1hcDxudW1iZXIsIHsgbmV3ICgpOiB2b2lkIH0+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NzY4NGlkXHJcbiAqL1xyXG5sZXQgaW5zdGFuY2VJZDogbnVtYmVyID0gMTAwO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhbmNlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCFpbnN0YW5jZUxpc3QuaGFzKHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdKSkge1xyXG4gICAgICAgIGluc3RhbmNlSWQrKztcclxuICAgICAgICB0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSA9IGluc3RhbmNlSWQ7XHJcbiAgICAgICAgaW5zdGFuY2VMaXN0LnNldChpbnN0YW5jZUlkLCBuZXcgdGFyZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0W2tleV0gPSBpbnN0YW5jZUxpc3QuZ2V0KGluc3RhbmNlSWQpO1xyXG59XHJcbiIsICJpbXBvcnQgRmxvYXRWaWV3U2hvd0FuaSBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgUmVzLCB7IHZpZXdzIH0gZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFZpZXdTaG93QW5pIGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4vSW5zdGFuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTYyNTNcdTVGMDBcdTc1NENcdTk3NjJcdTk3MDBcdTg5ODFcdTVFMjZcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcclxuICovXHJcbmludGVyZmFjZSBWaWV3T3BlblBhcm0ge1xyXG4gICAgLyoqIFx1NjYzRVx1NzkzQWxvYWRcdTc1NENcdTk3NjIgKi9cclxuICAgIHNob3dMb2FkPzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0ICovXHJcbiAgICBzaG93TG9hZERlbGF5PzogbnVtYmVyO1xyXG4gICAgLyoqIFx1OTY5MFx1ODVDRmxvYWRcdTc1NENcdTk3NjJcdTVFRjZcdThGREZcdTY1RjZcdTk1RjQgXHU5RUQ4XHU4QkE0MCAqL1xyXG4gICAgaGlkZUxvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTUxNzNcdTk1RURcdTUxNzZcdTRFRDZcdTU3M0FcdTY2NkZcdUZGMENcdTlFRDhcdThCQTRcdTRFM0F0cnVlXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5XHVGRjBDXHUzMDEwXHU2Q0U4XHU2MTBGXHUzMDExXHU4OEFCXHU1MTczXHU5NUVEXHU3Njg0XHU1NzNBXHU2NjZGXHVGRjBDXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU4QkJFXHU3RjZFYXV0b0Rlc3Ryb3lBdFJlbW92ZWQ9dHJ1ZVx1RkYwQ1x1NTIxOVx1OEQ0NFx1NkU5MFx1NTNFRlx1ODBGRFx1NEUwRFx1ODBGRFx1ODhBQlx1NTZERVx1NjUzNlx1RkYwQ1x1OTcwMFx1ODk4MVx1ODFFQVx1NURGMVx1NjI0Qlx1NTJBOFx1NTZERVx1NjUzNlxyXG4gICAgICogdG9kbyBcdTczQjBcdTU3MjhcdThGRDlcdTRFMkFcdThDMDNcdTc1MjhcdTc2ODRcdTY2MkZcdTVGMTVcdTY0Q0VcdTgxRUFcdTVFMjZcdTc2ODRcdTY1QjlcdTZDRDVcdUZGMENcdTZDQTFcdTY3MDlcdThENzBcdThGRDlcdTkxQ0NcdTc2ODRcdTdGMTNcdTVCNThcdUZGMENcdTUzRUZcdTgwRkRcdTRGMUFcdTY3MDlcdTk1RUVcdTk4OThcdUZGMENcdTU0MEVcdTY3MUZcdTRGMThcdTUzMTZcclxuICAgICAqIFx1NzNCMFx1NTcyOFx1NTE2OFx1NjYyRmZhbHNlIFx1NTQwRVx1NjcxRlx1NjcwOVx1OTcwMFx1ODk4MVx1NTE4RFx1NEYxOFx1NTMxNlx1OEZEOVx1NEUyQVx1NEUxQ1x1ODk3Rlx1RkYwQ1x1NEUwRFx1ODBGRFx1NTE3M1x1OTVFRFx1NTE3Nlx1NUI4M1x1NjI0MFx1NjcwOVx1NzU0Q1x1OTc2Mlx1OEZEOFx1NjcyQVx1NUI5RVx1NzNCMFxyXG4gICAgICovXHJcbiAgICBjbG9zZU90aGVyPzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTYyNTNcdTVGMDBcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdUZGMENcdTRGMUFcdTRGMjBcdTkwMTJcdTdFRDlvbk9wZW5lZFx1NjVCOVx1NkNENVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcGFybT86IGFueTtcclxuICAgIC8qKiAgXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIGNvbXBsZXRlPzogRnVuY3Rpb247XHJcbiAgICAvKiogXHU1MkEwXHU4RjdEXHU4RkRCXHU1RUE2XHU1NkRFXHU4QzAzXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBwcm9ncmVzcz86IEhhbmRsZXI7XHJcbn1cclxuXHJcbmNvbnN0IHZpZXdNYXBzOiB7IHVybDogc3RyaW5nOyB2aWV3OiBMYXlhLlZpZXcgfVtdID0gW107XHJcblxyXG4vKipcclxuICogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmlld01hbmFnZXIge1xyXG4gICAgQEluc3RhbmNlXHJcbiAgICBzdGF0aWMgaW5zdDogVmlld01hbmFnZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGRhdGEgXHU1M0MyXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIG9wZW4oXHJcbiAgICAgICAgdXJsOiB2aWV3cyxcclxuICAgICAgICBkYXRhOiBWaWV3T3BlblBhcm0gPSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3RoZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkRGVsYXk6IDEwMCxcclxuICAgICAgICAgICAgaGlkZUxvYWREZWxheTogMCxcclxuICAgICAgICB9XHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJtaXNzIHBhdGghXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5zaG93TG9hZCkge1xyXG4gICAgICAgICAgICBMYXlhLlZpZXcuc2hvd0xvYWRpbmdQYWdlKG51bGwsIGRhdGEuc2hvd0xvYWREZWxheSk7XHJcbiAgICAgICAgICAgIGlmICh1cmwgIT09IFJlcy52aWV3cy5Mb2dpblZpZXcpIHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKGRhdGEuaGlkZUxvYWREZWxheSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0YS5jbG9zZU90aGVyID0gZmFsc2U7XHJcbiAgICAgICAgTGF5YS5WaWV3Lm9wZW4oXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGF0YS5jbG9zZU90aGVyLFxyXG4gICAgICAgICAgICBkYXRhLnBhcm0sXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGU6IExheWEuVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybCAhPSBSZXMudmlld3MuTG9naW5WaWV3KSB2aWV3TWFwcy5wdXNoKHsgdXJsOiB1cmwsIHZpZXc6IGUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbkxpc3QgPSBlLmdldENvbXBvbmVudHMoTGF5YS5TY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbkxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25MaXN0LmZvckVhY2goKGUpID0+IGUuZW5hYmxlZCAmJiBlLm9uT3BlbmVkICYmIGUub25PcGVuZWQoZGF0YS5wYXJtKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNvbXBsZXRlICYmIGRhdGEuY29tcGxldGUoZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICBgJWMgPT0+IG9wZW4gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzdlZDZkZjtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzIyYTZiMztmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRhdGEucHJvZ3Jlc3NcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MTczXHU5NUVEXHU4OUM2XHU1NkZFXHJcbiAgICAgKiBAcGFyYW0gdXJsIFx1NzU0Q1x1OTc2Mlx1NTczMFx1NTc0MCBSZXMudmlld3NcdTkxQ0NcdTc2ODRcclxuICAgICAqIEBwYXJhbSBhbGwgXHU1NDBDXHU0RTAwXHU0RTJBXHU3NTRDXHU5NzYyXHU4OEFCIFx1NTkxQVx1NkIyMVx1NjI1M1x1NUYwMFx1RkYwQ1x1NTE2OFx1NTIyMFx1OTY2NFx1NzUyOFx1OEZEOVx1NEUyQVxyXG4gICAgICogQHBhcmFtIGRlc3Ryb3kgXHU5NTAwXHU2QkMxICAgVE9ET1x1RkYwOFx1OUVEOFx1OEJBNFx1NEYxQVx1OTUwMFx1NkJDMVx1NjI0MFx1NjcwOVx1NUI1MFx1ODI4Mlx1NzBCOVx1RkYwQ1x1NjcyQVx1NkQ0Qlx1OEJENVx1NjYyRlx1NTQyNlx1NjcwOVx1OTVFRVx1OTg5OFx1RkYwOVxyXG4gICAgICovXHJcbiAgICBhc3luYyBjbG9zZShcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGFsbDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBhbmlDb206IHR5cGVvZiBWaWV3U2hvd0FuaSB8IHR5cGVvZiBGbG9hdFZpZXdTaG93QW5pID0gVmlld1Nob3dBbmlcclxuICAgICkge1xyXG4gICAgICAgIC8vVE9ETyBcdThGRDlcdTkxQ0NcdTczQjBcdTU3MjhcdTUxNjhcdTkwRThcdTc1MjhkZXN0cm95IFx1NUYxNVx1NjRDRXJlbW92ZVx1NTk3RFx1NTBDRlx1NjcwOVx1NzBCOVx1OTVFRVx1OTg5OFx1RkYwQ1x1NTE4RFx1OTAxQVx1OEZDN3ZpZXcub3Blblx1NEYxQVx1OTFDRFx1NjVCMFx1Njc4NFx1NUVGQVx1N0VDNFx1NEVGNlxyXG4gICAgICAgIGRlc3Ryb3kgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgdkFuaTogVmlld1Nob3dBbmk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHZpZXdNYXBzLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT09IHZpZXdNYXBzW3hdLnVybCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSB2aWV3TWFwc1t4XTtcclxuICAgICAgICAgICAgICAgIHZpZXdNYXBzLnNwbGljZSh4LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2QW5pID0gdi52aWV3LmdldENvbXBvbmVudChhbmlDb20gYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGlmICh2QW5pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdkFuaS5jbG9zZVZpZXcoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vdG9kb1x1OTcwMFx1ODk4MVx1NEYxOFx1NTMxNlx1RkYwQ1x1NzU0Q1x1OTc2Mlx1NzY4NG1hcFx1OTcwMFx1ODk4MVx1NjU3NFx1NzQwNlx1NjIxMFx1RkYwQ1x1NTE2OFx1NUM0Rlx1NTQ4Q1x1NUYzOVx1N0E5N1x1NzY4NFx1NTMzQVx1NTIyQlxyXG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PT0gUmVzLnZpZXdzLkhpbnRWaWV3KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFhbGwpIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1x1NEZERFx1OEJDMVx1NTk4Mlx1Njc5Q1x1NTczQVx1NjY2Rlx1NUI4Q1x1NTE2OFx1NkNBMVx1NjcwOVx1NzU0Q1x1OTc2Mlx1ODhBQlx1NjI1M1x1NUYwMFx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NUZDNVx1NjI1M1x1NUYwMFx1NEUzQlx1NTczQVx1NjY2RlxyXG4gICAgICAgIGxldCBjbG9zZUxlbiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHZpZXdNYXBzLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XHJcbiAgICAgICAgICAgIGlmICghdmlld01hcHNbeF0udmlldy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTGVuKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZUxlbiA9PT0gdmlld01hcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZpZXdNYXBzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuTWFpblZpZXcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codmlld01hcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VWaWV3TG9nKHVybDogc3RyaW5nLCBkZXN0cm95OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYCVjIDw9PSAke2Rlc3Ryb3kgPyBcImRlc3Ryb3lcIiA6IFwiZGlzYWJsZVwifSAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2ZmNzk3OTtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNlYjRkNGI7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU5NjY0XHU3RjEzXHU1QjU4XHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIGNsZWFyVmlld01hcHMoKSB7XHJcbiAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRlZmF1bHRSZXMsIHRpcHM6XCJcdThENDRcdTZFOTBcIix0eXBlOnN0cmluZ3MsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0UmVzO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRvd25SZXMsIHRpcHM6XCJcdThENDRcdTZFOTBcIix0eXBlOnN0cmluZ3MsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBkb3duUmVzO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmlzU2NhbGUsIHRpcHM6XCJcdTY2MkZcdTU0MjZcdTdGMjlcdTY1M0VcIix0eXBlOkNoZWNrfSovXHJcbiAgICBwcml2YXRlIGlzU2NhbGUgPSBmYWxzZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzY2FsZVZhbCwgdGlwczpcIlx1N0YyOVx1NjUzRVx1NzY4NFx1NTAzQ1wiLHR5cGU6TnVtYmVyLCBkZWZhdWx0OjAuOX0qL1xyXG4gICAgcHJpdmF0ZSBzY2FsZVZhbDogbnVtYmVyID0gMC45O1xyXG5cclxuICAgIHByaXZhdGUgb2xkU2NhbGVYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIG9sZFNjYWxlWTogbnVtYmVyO1xyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vICh0aGlzLm93bmVyIGFzIExheWEuQm94KS5zZXRfYW5jaG9yWCgwLjUpO1xyXG4gICAgICAgIC8vICh0aGlzLm93bmVyIGFzIExheWEuQm94KS5zZXRfYW5jaG9yWSgwLjUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNTY2FsZSk7XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLm1vdXNlRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vbGRTY2FsZVggPSAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikuZ2V0X3NjYWxlWCgpO1xyXG4gICAgICAgIHRoaXMub2xkU2NhbGVZID0gKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLmdldF9zY2FsZVkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRG93bigpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kb3duUmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSh0aGlzLnNjYWxlVmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlT3V0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRlZmF1bHRSZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKDEpO1xyXG4gICAgfVxyXG4gICAgb25Nb3VzZVVwKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRlZmF1bHRSZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QW5pKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNTY2FsZSkgcmV0dXJuO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgIHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgIHsgc2NhbGVYOiBzY2FsZSAqIHRoaXMub2xkU2NhbGVYLCBzY2FsZVk6IHNjYWxlICogdGhpcy5vbGRTY2FsZVkgfSxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFNraW4oc2tpbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFza2luKSByZXR1cm47XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHNraW47XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge31cclxufVxyXG4iLCAiaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi4vY29yZS9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2RlxyXG4gKi9cclxuY2xhc3MgVXNlckluZm8ge1xyXG4gICAgLyoqIFx1OEJBMlx1NTM1NVx1N0I0OVx1N0VBNyAqL1xyXG4gICAgb3JkZXJMZXZlbDogbnVtYmVyID0gMjtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTU0MERcdTc5RjAgKi9cclxuICAgIG5pY2tuYW1lOiBzdHJpbmcgPSBcIm5hbWVcIjtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdpZCAqL1xyXG4gICAgdWlkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzUyOFx1NTQwRFx1NTkzNFx1NTBDRiAqL1xyXG4gICAgYXZhdGFyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIFx1OTRCQlx1NzdGMyAqL1xyXG4gICAgZGlhbW9uZDogbnVtYmVyID0gOTk5O1xyXG4gICAgLyoqIFx1OTFEMVx1NUUwMSAqL1xyXG4gICAgZ29sZDogbnVtYmVyID0gOTk5O1xyXG5cclxuICAgIGdldCB0dHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJMZXZlbDtcclxuICAgIH1cclxuICAgIHNldCB0dHQodikge1xyXG4gICAgICAgIHRoaXMub3JkZXJMZXZlbCA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VySW5mbygpO1xyXG4iLCAiaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50T24sIEZpbmRCeU5hbWUgfSBmcm9tIFwiLi9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4vSW5zdGFuY2VcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9WaWV3TWFuYWdlclwiO1xyXG5cclxuY29uc3QgQ29yZSA9IHtcclxuICAgIC8qKiBcdTVCRjlcdThDNjFcdTVDNUVcdTYwMjdcdTdFRDFcdTVCOUFcdTUzRUZcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTYgKi9cclxuICAgIG9ic2VydmFibGVQcm9wZXJ0eTogT2JzZXJ2YWJsZVByb3BlcnR5LFxyXG4gICAgLyoqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OCAqL1xyXG4gICAgdmlldzogVmlld01hbmFnZXIuaW5zdCxcclxuICAgIC8qKiBcdTVGMTVcdTY0Q0VcdTgxMUFcdTY3MkNcdTdFQzRcdTRFRjYgKi9cclxuICAgIGdhbWVTY3JpcHQ6IEdhbWVTY3JpcHQsXHJcbiAgICAvKiogXHU1MzU1XHU0RjhCXHU4OEM1XHU5OTcwXHU1NjY4ICovXHJcbiAgICBpbnN0YW5jZTogSW5zdGFuY2UsXHJcbiAgICAvKiogXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbiAgICBldmVudE9uOiBFdmVudE9uLFxyXG4gICAgLyoqIHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWVcdTc2ODRcdTc3MDFcdTRFOEJcdTUxOTlcdTZDRDUgXHU1M0VBXHU4MEZEXHU2N0U1XHU2MjdFXHU0RTBCXHU0RTAwXHU3RUE3XHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG4gICAgZmluZEJ5TmFtZTogRmluZEJ5TmFtZSxcclxuICAgIC8qKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjYgKi9cclxuICAgIGV2ZW50R2xvYmFsOiBFdmVudEdsb2JhbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcmU7XHJcbiIsICJleHBvcnQgdHlwZSBMYW5kT2JqID0gTmV0SW5pdFtcImxhbmRMaXN0XCJdWzBdO1xyXG5cclxuY2xhc3MgTGFuZFNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgbGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBpbml0KGxpc3Q6IExhbmRPYmpbXSkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExhbmQoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTU3NTdcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBpZCBcdTU3MUZcdTU3MzBpZFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGdldExhbmQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkRGQlx1NTJBMFx1NjIxNlx1NjYyRlx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGQgXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGFkZExhbmQoZDogTGFuZE9iaikge1xyXG4gICAgICAgIHRoaXMubGlzdC5zZXQoZC5sYW5kSWQsIGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU3QTdBXHU1NzFGXHU1NzMwXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5jbGVhcigpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgTGFuZFNlcnZpY2UoKTtcclxuIiwgIi8qKlxyXG4gKiBcdTZFMzhcdTYyMEZcdTkxNERcdTdGNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjNpZCAqL1xyXG4gICAgZGlhbW9uZElkOiAxMDAxLFxyXG4gICAgLyoqIFx1OTFEMVx1NUUwMWlkICovXHJcbiAgICBnb2xkSWQ6IDEwMDIsXHJcbiAgICAvKiogXHU2RTM4XHU2MjBGXHU2NzJDXHU1NzMwXHU1MEE4XHU1QjU4a2V5ICovXHJcbiAgICBsb2NhbEtleTogXCJsb3ZlX0hEX2Zhcm1cIixcclxuICAgIC8qKiBcdTUzNEZcdThCQUVcdTU3MzBcdTU3NDAgKi9cclxuICAgIGJhc2VVcmw6IFwiLy80Ny4xMDguMTkyLjE4MTo4MDkyL2Zhcm1cIixcclxufTtcclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTY3MkNcdTU3MzBcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQgbG9jYWxEYXRhIFx1NTcyOFx1OEZEOVx1NEUyQVx1OTFDQ1x1OTc2Mlx1NUI5QVx1NEU0OVx1NTk3RFxyXG4gKi9cclxuY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGxvY2FsRGF0YSA9IHtcclxuICAgICAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSkgfHwgdGhpcy5sb2NhbERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1ODNCN1x1NTNENlx1NjcyQ1x1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZ2V0SlNPTigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1OEJCRVx1N0Y2RVx1NjcyQ1x1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgc2V0SlNPTjxrZXkgZXh0ZW5kcyBrZXlvZiB0eXBlb2YgdGhpcy5sb2NhbERhdGE+KGtleToga2V5LCBkYXRhOiB0eXBlb2YgdGhpcy5sb2NhbERhdGFba2V5XSkge1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhW2tleV0gPSBkYXRhO1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSwgdGhpcy5sb2NhbERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSwge30pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9jYWxTdG9yYWdlU2VydmljZSgpO1xyXG4iLCAiLyoqIFx1NjI0MFx1NjcwOVx1ODg2OCAqL1xuICAgICAgICBleHBvcnQgY29uc3QgVGFibGUgPSB7XCJ0YXNrXCI6W3tcImlkXCI6MTAwMSxcInJld2FyZFwiOlwiMTAwMToxMDBcIixcInRpbWVzXCI6MSxcInRpdGxlXCI6XCJcdTdCN0VcdTUyMzBcdTk4ODZcdTdFQTJcdTUzMDVcIixcImRlc2NcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MVx1N0I3RVx1NTIzMFx1RkYwQ1x1NkJDRlx1NjVFNTFcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDIsXCJyZXdhcmRcIjpcIjEwMDE6MjAwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1ODNEQ1x1NTczMFx1NTJBMFx1OTAxRjEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdThGRDhcdTVERUUmXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDAzLFwicmV3YXJkXCI6XCIxMDAxOjMwMFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdTgzRENcdTU3MzBcdTY1MzYxMFx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4RkQ4XHU1REVFJlx1NkIyMVwiLFwiaWNvblwiOm51bGx9XSxcInNpZ25JblwiOlt7XCJpZFwiOjEwMDEsXCJkYXlzXCI6MSxcInJld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxMDAyLFwiZGF5c1wiOjIsXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCJ9LHtcImlkXCI6MTAwMyxcImRheXNcIjozLFwicmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjEwMDQsXCJkYXlzXCI6NCxcInJld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxMDA1LFwiZGF5c1wiOjUsXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCJ9LHtcImlkXCI6MTAwNixcImRheXNcIjo2LFwicmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjEwMDcsXCJkYXlzXCI6NyxcInJld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxMDA4LFwiZGF5c1wiOjgsXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCJ9LHtcImlkXCI6MTAwOSxcImRheXNcIjo5LFwicmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjEwMTAsXCJkYXlzXCI6MTAsXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCJ9XSxcInBsYW50XCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1NUMwRlx1OUVBNlwiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjEwXCIsXCJnYWluXCI6XCIxMDAxOjUsMTAwMjoxMDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCI2MFwiLFwidW5sb2NrX2Nvc3RcIjpudWxsLFwidW5sb2NrX3Jld2FyZFwiOm51bGwsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1NkMzNFx1N0EzQlwiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjIwXCIsXCJnYWluXCI6XCIxMDAxOjEwLDEwMDI6MjAwXCIsXCJoYXJ2ZXN0XCI6XCIxXCIsXCJtYXR1cmVfdGltZVwiOlwiNjBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTczODlcdTdDNzNcIixcImljb25cIjpudWxsLFwic2VlZF9wcmljZVwiOlwiMTAwMjozMFwiLFwiZ2FpblwiOlwiMTAwMToxNSwxMDAyOjMwMFwiLFwiaGFydmVzdFwiOlwiMVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxMDAsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9LHtcImlkXCI6MTAwNCxcIm5hbWVcIjpcIlx1OUVDNFx1OEM0NlwiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjQwXCIsXCJnYWluXCI6XCIxMDAxOjIwLDEwMDI6NDAwXCIsXCJoYXJ2ZXN0XCI6XCIxXCIsXCJtYXR1cmVfdGltZVwiOlwiMTIwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjEwMCwxMDAyOjEwMDBcIixcImRlc2NcIjpcIlx1OEZEOVx1NjYyRlx1NEUwMFx1N0M5Mlx1NUY4OFx1NTJBQVx1NTI5Qlx1NzY4NFx1NUMwRlx1OUVBNlx1NUI1MH5cdTU0MDNcdTRFODZcdTVCODNcdTU0MjdcIn0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU4NDFEXHU1MzVDXCIsXCJpY29uXCI6bnVsbCxcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTBcIixcImdhaW5cIjpcIjEwMDE6MTUsMTAwMjozMDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCIxODBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifSx7XCJpZFwiOjEwMDYsXCJuYW1lXCI6XCJcdTk3NTJcdTgzRENcIixcImljb25cIjpudWxsLFwic2VlZF9wcmljZVwiOlwiMTAwMjo2MFwiLFwiZ2FpblwiOlwiMTAwMTo1LDEwMDI6MTAwXCIsXCJoYXJ2ZXN0XCI6XCIxXCIsXCJtYXR1cmVfdGltZVwiOlwiMTgwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjEwMCwxMDAyOjEwMDBcIixcImRlc2NcIjpcIlx1OEZEOVx1NjYyRlx1NEUwMFx1N0M5Mlx1NUY4OFx1NTJBQVx1NTI5Qlx1NzY4NFx1NUMwRlx1OUVBNlx1NUI1MH5cdTU0MDNcdTRFODZcdTVCODNcdTU0MjdcIn0se1wiaWRcIjoxMDA3LFwibmFtZVwiOlwiXHU1NzFGXHU4QzQ2XCIsXCJpY29uXCI6bnVsbCxcInNlZWRfcHJpY2VcIjpcIjEwMDI6NzBcIixcImdhaW5cIjpcIjEwMDE6NSwxMDAyOjEwMFwiLFwiaGFydmVzdFwiOlwiMVwiLFwibWF0dXJlX3RpbWVcIjpcIjI0MFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMToxMDAsMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdThGRDlcdTY2MkZcdTRFMDBcdTdDOTJcdTVGODhcdTUyQUFcdTUyOUJcdTc2ODRcdTVDMEZcdTlFQTZcdTVCNTB+XHU1NDAzXHU0RTg2XHU1QjgzXHU1NDI3XCJ9LHtcImlkXCI6MTAwOCxcIm5hbWVcIjpcIlx1ODBFMVx1ODQxRFx1NTM1Q1wiLFwiaWNvblwiOm51bGwsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjgwXCIsXCJnYWluXCI6XCIxMDAxOjEwLDEwMDI6MjAwXCIsXCJoYXJ2ZXN0XCI6XCIxXCIsXCJtYXR1cmVfdGltZVwiOlwiMjQwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjEwMCwxMDAyOjEwMDBcIixcImRlc2NcIjpcIlx1OEZEOVx1NjYyRlx1NEUwMFx1N0M5Mlx1NUY4OFx1NTJBQVx1NTI5Qlx1NzY4NFx1NUMwRlx1OUVBNlx1NUI1MH5cdTU0MDNcdTRFODZcdTVCODNcdTU0MjdcIn0se1wiaWRcIjoxMDA5LFwibmFtZVwiOlwiXHU4OTdGXHU3RUEyXHU2N0ZGXCIsXCJpY29uXCI6bnVsbCxcInNlZWRfcHJpY2VcIjpcIjEwMDI6OTBcIixcImdhaW5cIjpcIjEwMDE6MTAsMTAwMjoyMDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCIzMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifSx7XCJpZFwiOjEwMTAsXCJuYW1lXCI6XCJcdThGQTNcdTY5MTJcIixcImljb25cIjpudWxsLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxMDBcIixcImdhaW5cIjpcIjEwMDE6MTUsMTAwMjozMDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCIzMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifSx7XCJpZFwiOjEwMTEsXCJuYW1lXCI6XCJcdTlFQzRcdTc0RENcIixcImljb25cIjpudWxsLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxMTBcIixcImdhaW5cIjpcIjEwMDE6MTAsMTAwMjoyMDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCIzMzBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifSx7XCJpZFwiOjEwMTIsXCJuYW1lXCI6XCJcdTU5MjdcdTg0OUNcIixcImljb25cIjpudWxsLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxMjBcIixcImdhaW5cIjpcIjEwMDE6MjAsMTAwMjo0MDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCIzMzBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifSx7XCJpZFwiOjEwMTMsXCJuYW1lXCI6XCJcdTdFQTJcdTg1QUZcIixcImljb25cIjpudWxsLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxMzBcIixcImdhaW5cIjpcIjEwMDE6MTAsMTAwMjoyMDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCIzMzBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifSx7XCJpZFwiOjEwMTQsXCJuYW1lXCI6XCJcdTUzNTdcdTc0RENcIixcImljb25cIjpudWxsLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxNDBcIixcImdhaW5cIjpcIjEwMDE6MjAsMTAwMjo0MDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCIzNjBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifSx7XCJpZFwiOjEwMTUsXCJuYW1lXCI6XCJcdTgyOURcdTlFQkJcIixcImljb25cIjpudWxsLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxNTBcIixcImdhaW5cIjpcIjEwMDE6MTUsMTAwMjozMDBcIixcImhhcnZlc3RcIjpcIjFcIixcIm1hdHVyZV90aW1lXCI6XCIzNjBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MTAwLDEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU4RkQ5XHU2NjJGXHU0RTAwXHU3QzkyXHU1Rjg4XHU1MkFBXHU1MjlCXHU3Njg0XHU1QzBGXHU5RUE2XHU1QjUwflx1NTQwM1x1NEU4Nlx1NUI4M1x1NTQyN1wifV0sXCJwZXRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU5MUQxXHU2QkRCXHU3MkFDXCIsXCJpY29uXCI6bnVsbCxcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoyMCxcImNvc3RcIjpcIjEwMDI6MTAwMFwiLFwiZGVzY1wiOlwiXHU3MjMxXHU1QjgzXHU1QzMxXHU0RTcwXHU1Qjgzflx1NUI4M1x1NUMzMVx1NjYyRlx1NjcwOVx1NzBCOVx1NjFEMn5cIixcInNlbnNpdGl2ZVwiOjQwLFwiYWJpbGl0eVwiOjQwfSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdThEMzVcdTVCQkVcdTcyQUNcIixcImljb25cIjpudWxsLFwidml0YWxpdHlfbWF4XCI6MTUwLFwidml0YWxpdHlfY29uc3VtZVwiOjIxLFwiY29zdFwiOlwiMTAwMjoxMDAwMFwiLFwiZGVzY1wiOlwiXHU3MjMxXHU1QjgzXHU1QzMxXHU0RTcwXHU1Qjgzflx1NUI4M1x1NUMzMVx1NjYyRlx1NjcwOVx1NzBCOVx1NjFEMn5cIixcInNlbnNpdGl2ZVwiOjUwLFwiYWJpbGl0eVwiOjUwfSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTZDRjBcdThGRUFcdTcyQUNcIixcImljb25cIjpudWxsLFwidml0YWxpdHlfbWF4XCI6MjAwLFwidml0YWxpdHlfY29uc3VtZVwiOjIyLFwiY29zdFwiOlwiMTAwMjoyMDAwMFwiLFwiZGVzY1wiOlwiXHU3MjMxXHU1QjgzXHU1QzMxXHU0RTcwXHU1Qjgzflx1NUI4M1x1NUMzMVx1NjYyRlx1NjcwOVx1NzBCOVx1NjFEMn5cIixcInNlbnNpdGl2ZVwiOjYwLFwiYWJpbGl0eVwiOjYwfSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTVGQjdcdTU2RkRcdTcyNjdcdTdGOEFcdTcyQUNcIixcImljb25cIjpudWxsLFwidml0YWxpdHlfbWF4XCI6MjUwLFwidml0YWxpdHlfY29uc3VtZVwiOjIzLFwiY29zdFwiOlwiMTAwMjozMDAwMFwiLFwiZGVzY1wiOlwiXHU3MjMxXHU1QjgzXHU1QzMxXHU0RTcwXHU1Qjgzflx1NUI4M1x1NUMzMVx1NjYyRlx1NjcwOVx1NzBCOVx1NjFEMn5cIixcInNlbnNpdGl2ZVwiOjcwLFwiYWJpbGl0eVwiOjcwfSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdThGQjlcdTk1NUNcdTcyNjdcdTdGOEFcdTcyQUNcIixcImljb25cIjpudWxsLFwidml0YWxpdHlfbWF4XCI6MzAwLFwidml0YWxpdHlfY29uc3VtZVwiOjI0LFwiY29zdFwiOlwiMTAwMjo0MDAwMFwiLFwiZGVzY1wiOlwiXHU3MjMxXHU1QjgzXHU1QzMxXHU0RTcwXHU1Qjgzflx1NUI4M1x1NUMzMVx1NjYyRlx1NjcwOVx1NzBCOVx1NjFEMn5cIixcInNlbnNpdGl2ZVwiOjgwLFwiYWJpbGl0eVwiOjgwfV0sXCJvcmRlclwiOlt7XCJpZFwiOjEsXCJjb21taXNzaW9uXCI6XCIwLjVcIixcImNvbmRpdGlvblwiOlwiMTAwMToyXCJ9LHtcImlkXCI6MixcImNvbW1pc3Npb25cIjpcIjAuMVwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjEsMTAwMjoxLDEwMDM6MVwifSx7XCJpZFwiOjMsXCJjb21taXNzaW9uXCI6XCIwLjAzXCIsXCJjb25kaXRpb25cIjpcIjEwMTI6MTgsMTAwNDo0LDEwMDM6NSwxMDA1OjZcIn0se1wiaWRcIjo0LFwiY29tbWlzc2lvblwiOlwiMC4yNFwiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjEwLDEwMDM6MywxMDA3OjcsMTAxNTo5XCJ9LHtcImlkXCI6NSxcImNvbW1pc3Npb25cIjpcIjAuNjFcIixcImNvbmRpdGlvblwiOlwiMTAxNDo2LDEwMTI6OSwxMDEwOjE5LDEwMDY6NFwifSx7XCJpZFwiOjYsXCJjb21taXNzaW9uXCI6XCIwLjA3XCIsXCJjb25kaXRpb25cIjpcIjEwMTA6MTQsMTAwNDoyLDEwMTI6MywxMDAxOjhcIn0se1wiaWRcIjo3LFwiY29tbWlzc2lvblwiOlwiMC40M1wiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE4LDEwMDE6MTEsMTAwNzo3LDEwMDg6MTlcIn0se1wiaWRcIjo4LFwiY29tbWlzc2lvblwiOlwiMC41NlwiLFwiY29uZGl0aW9uXCI6XCIxMDA4OjEzLDEwMDc6MywxMDA1OjIsMTAxNToyMFwifSx7XCJpZFwiOjksXCJjb21taXNzaW9uXCI6XCIwLjM5XCIsXCJjb25kaXRpb25cIjpcIjEwMDI6MiwxMDE1OjEwLDEwMTE6OCwxMDAzOjE4XCJ9LHtcImlkXCI6MTAsXCJjb21taXNzaW9uXCI6XCIwLjIyXCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MTIsMTAxMjo1LDEwMTE6MTQsMTAwMzo2XCJ9LHtcImlkXCI6MTEsXCJjb21taXNzaW9uXCI6XCIwLjc2XCIsXCJjb25kaXRpb25cIjpcIjEwMDk6MTEsMTAwNDoyMCwxMDEyOjksMTAwMjoxMFwifSx7XCJpZFwiOjEyLFwiY29tbWlzc2lvblwiOlwiMC40M1wiLFwiY29uZGl0aW9uXCI6XCIxMDA3OjE2LDEwMDM6MTEsMTAxMjoxNiwxMDA1OjZcIn0se1wiaWRcIjoxMyxcImNvbW1pc3Npb25cIjpcIjAuMTdcIixcImNvbmRpdGlvblwiOlwiMTAxMDo1LDEwMDU6MTMsMTAwMTo4LDEwMTI6MThcIn0se1wiaWRcIjoxNCxcImNvbW1pc3Npb25cIjpcIjAuN1wiLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE4LDEwMDg6MTgsMTAwNjoxNiwxMDAxOjE0XCJ9LHtcImlkXCI6MTUsXCJjb21taXNzaW9uXCI6XCIwLjQ4XCIsXCJjb25kaXRpb25cIjpcIjEwMDI6MTAsMTAwNToxLDEwMTE6MiwxMDAxOjEwXCJ9LHtcImlkXCI6MTYsXCJjb21taXNzaW9uXCI6MC4yOSxcImNvbmRpdGlvblwiOlwiMTAwODoxMSwxMDE0OjQsMTAwNjo4LDEwMDU6MTdcIn0se1wiaWRcIjoxNyxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDA2OjE0LDEwMDc6MTYsMTAxMjoxOSwxMDAxOjE0XCJ9LHtcImlkXCI6MTgsXCJjb21taXNzaW9uXCI6MC40OCxcImNvbmRpdGlvblwiOlwiMTAwODo0LDEwMTE6MiwxMDA5OjE1LDEwMDI6NVwifSx7XCJpZFwiOjE5LFwiY29tbWlzc2lvblwiOjAuNzUsXCJjb25kaXRpb25cIjpcIjEwMTM6MSwxMDAzOjIwLDEwMTQ6MTEsMTAwMToxN1wifSx7XCJpZFwiOjIwLFwiY29tbWlzc2lvblwiOjAuNjcsXCJjb25kaXRpb25cIjpcIjEwMDM6MTAsMTAxMToxNywxMDAyOjE0LDEwMDU6MlwifSx7XCJpZFwiOjIxLFwiY29tbWlzc2lvblwiOjAuNjQsXCJjb25kaXRpb25cIjpcIjEwMTA6MTAsMTAwMzo0LDEwMDU6NiwxMDA3OjVcIn0se1wiaWRcIjoyMixcImNvbW1pc3Npb25cIjpcIjAuNFwiLFwiY29uZGl0aW9uXCI6XCIxMDE1OjksMTAwNzoxMiwxMDExOjUsMTAwNDoxN1wifSx7XCJpZFwiOjIzLFwiY29tbWlzc2lvblwiOjAuMixcImNvbmRpdGlvblwiOlwiMTAwMzoxOSwxMDE0OjIsMTAxNToxNiwxMDAxOjE0XCJ9LHtcImlkXCI6MjQsXCJjb21taXNzaW9uXCI6MC43NyxcImNvbmRpdGlvblwiOlwiMTAxNDozLDEwMDE6MTcsMTAwODoxOCwxMDA0OjVcIn0se1wiaWRcIjoyNSxcImNvbW1pc3Npb25cIjowLjY0LFwiY29uZGl0aW9uXCI6XCIxMDAyOjEzLDEwMTE6MSwxMDEwOjE1LDEwMDc6MjBcIn0se1wiaWRcIjoyNixcImNvbW1pc3Npb25cIjowLjAzLFwiY29uZGl0aW9uXCI6XCIxMDAyOjExLDEwMTE6MTIsMTAxMjoyLDEwMDM6MTlcIn0se1wiaWRcIjoyNyxcImNvbW1pc3Npb25cIjowLjQ5LFwiY29uZGl0aW9uXCI6XCIxMDA3OjE2LDEwMTQ6MTYsMTAwNjoxMCwxMDExOjdcIn0se1wiaWRcIjoyOCxcImNvbW1pc3Npb25cIjowLjUzLFwiY29uZGl0aW9uXCI6XCIxMDE0OjcsMTAwNzoxMiwxMDExOjE3LDEwMDM6MTdcIn0se1wiaWRcIjoyOSxcImNvbW1pc3Npb25cIjowLjc3LFwiY29uZGl0aW9uXCI6XCIxMDEyOjEwLDEwMDU6MTYsMTAxMDoxNCwxMDE1OjhcIn0se1wiaWRcIjozMCxcImNvbW1pc3Npb25cIjowLjE0LFwiY29uZGl0aW9uXCI6XCIxMDExOjcsMTAxNDo5LDEwMDY6MTQsMTAwNDozXCJ9LHtcImlkXCI6MzEsXCJjb21taXNzaW9uXCI6MC41MyxcImNvbmRpdGlvblwiOlwiMTAwNzoxOCwxMDEwOjE0LDEwMTM6OSwxMDA2OjExXCJ9LHtcImlkXCI6MzIsXCJjb21taXNzaW9uXCI6MC40NixcImNvbmRpdGlvblwiOlwiMTAxMzoxOSwxMDA1OjIsMTAxMjoxMiwxMDA4OjIwXCJ9LHtcImlkXCI6MzMsXCJjb21taXNzaW9uXCI6MC4yLFwiY29uZGl0aW9uXCI6XCIxMDEyOjYsMTAxMzoxMSwxMDAyOjEzLDEwMDk6MTZcIn0se1wiaWRcIjozNCxcImNvbW1pc3Npb25cIjowLjAyLFwiY29uZGl0aW9uXCI6XCIxMDA5OjksMTAxMDoxMiwxMDExOjE0LDEwMTI6MlwifSx7XCJpZFwiOjM1LFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDE6MTgsMTAwNDoxOSwxMDEzOjYsMTAwMzoxMFwifSx7XCJpZFwiOjM2LFwiY29tbWlzc2lvblwiOjAuMjEsXCJjb25kaXRpb25cIjpcIjEwMDM6MTEsMTAwODoxNywxMDE0OjcsMTAwNzoxN1wifSx7XCJpZFwiOjM3LFwiY29tbWlzc2lvblwiOjAuNDQsXCJjb25kaXRpb25cIjpcIjEwMTI6NCwxMDEwOjIwLDEwMDI6NCwxMDExOjExXCJ9LHtcImlkXCI6MzgsXCJjb21taXNzaW9uXCI6MC4yMixcImNvbmRpdGlvblwiOlwiMTAxNDoxMywxMDA0OjE5LDEwMDI6MTEsMTAxNToxOFwifSx7XCJpZFwiOjM5LFwiY29tbWlzc2lvblwiOjAuMzYsXCJjb25kaXRpb25cIjpcIjEwMDc6OCwxMDEyOjEzLDEwMDQ6MTYsMTAwMjoxNlwifSx7XCJpZFwiOjQwLFwiY29tbWlzc2lvblwiOjAuMjgsXCJjb25kaXRpb25cIjpcIjEwMDQ6MTAsMTAwNToxMCwxMDA4OjE4LDEwMTE6MTZcIn0se1wiaWRcIjo0MSxcImNvbW1pc3Npb25cIjowLjE4LFwiY29uZGl0aW9uXCI6XCIxMDEwOjgsMTAwOTo4LDEwMDg6NywxMDExOjZcIn0se1wiaWRcIjo0MixcImNvbW1pc3Npb25cIjowLjQzLFwiY29uZGl0aW9uXCI6XCIxMDA5OjEsMTAwNTo4LDEwMDc6MiwxMDAyOjEzXCJ9LHtcImlkXCI6NDMsXCJjb21taXNzaW9uXCI6MC4xNCxcImNvbmRpdGlvblwiOlwiMTAwNjoxLDEwMDQ6NCwxMDE0OjExLDEwMDg6NVwifSx7XCJpZFwiOjQ0LFwiY29tbWlzc2lvblwiOjAuNjIsXCJjb25kaXRpb25cIjpcIjEwMDk6MTUsMTAwMzoxOCwxMDAyOjQsMTAwNzo5XCJ9LHtcImlkXCI6NDUsXCJjb21taXNzaW9uXCI6MC4xMSxcImNvbmRpdGlvblwiOlwiMTAxMjoxNSwxMDEwOjMsMTAwNzozLDEwMTE6M1wifSx7XCJpZFwiOjQ2LFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMDM6MTIsMTAwNzozLDEwMTA6MTYsMTAwMjoxNFwifSx7XCJpZFwiOjQ3LFwiY29tbWlzc2lvblwiOjAuNDksXCJjb25kaXRpb25cIjpcIjEwMTA6MTQsMTAxNToyMCwxMDAzOjE1LDEwMTQ6NlwifSx7XCJpZFwiOjQ4LFwiY29tbWlzc2lvblwiOjAuMDYsXCJjb25kaXRpb25cIjpcIjEwMTM6MTcsMTAwNzoxNCwxMDA4OjE3LDEwMDE6MTBcIn0se1wiaWRcIjo0OSxcImNvbW1pc3Npb25cIjowLjQ4LFwiY29uZGl0aW9uXCI6XCIxMDAyOjYsMTAwNDoxMSwxMDA5OjEyLDEwMDY6MjBcIn0se1wiaWRcIjo1MCxcImNvbW1pc3Npb25cIjowLjA1LFwiY29uZGl0aW9uXCI6XCIxMDA2OjE3LDEwMTI6OSwxMDA4OjIsMTAxNToxMVwifSx7XCJpZFwiOjUxLFwiY29tbWlzc2lvblwiOjAuMDQsXCJjb25kaXRpb25cIjpcIjEwMTE6OCwxMDA0OjE5LDEwMDI6NSwxMDAzOjExXCJ9LHtcImlkXCI6NTIsXCJjb21taXNzaW9uXCI6MC40MyxcImNvbmRpdGlvblwiOlwiMTAxNToxNSwxMDEzOjEwLDEwMDE6MTUsMTAwNDo2XCJ9LHtcImlkXCI6NTMsXCJjb21taXNzaW9uXCI6MC4wOCxcImNvbmRpdGlvblwiOlwiMTAxNDoxNCwxMDEyOjEyLDEwMTA6MSwxMDE1OjE4XCJ9LHtcImlkXCI6NTQsXCJjb21taXNzaW9uXCI6MC40NSxcImNvbmRpdGlvblwiOlwiMTAwNToyLDEwMDI6MTMsMTAwOTo2LDEwMTU6MTdcIn0se1wiaWRcIjo1NSxcImNvbW1pc3Npb25cIjowLjcsXCJjb25kaXRpb25cIjpcIjEwMDE6MywxMDE0OjksMTAwNTo3LDEwMTA6MTVcIn0se1wiaWRcIjo1NixcImNvbW1pc3Npb25cIjowLjA1LFwiY29uZGl0aW9uXCI6XCIxMDA2OjE3LDEwMDU6MTksMTAwOToxNywxMDAzOjE4XCJ9LHtcImlkXCI6NTcsXCJjb21taXNzaW9uXCI6MC42NyxcImNvbmRpdGlvblwiOlwiMTAwNzoxLDEwMDg6MTcsMTAwMjoxNiwxMDA5OjE1XCJ9LHtcImlkXCI6NTgsXCJjb21taXNzaW9uXCI6MC4zMixcImNvbmRpdGlvblwiOlwiMTAwNjoxMCwxMDA4OjUsMTAwNTo0LDEwMDc6OVwifSx7XCJpZFwiOjU5LFwiY29tbWlzc2lvblwiOjAuNzksXCJjb25kaXRpb25cIjpcIjEwMTI6NSwxMDA5OjEsMTAxMzo2LDEwMDg6NVwifSx7XCJpZFwiOjYwLFwiY29tbWlzc2lvblwiOjAuNjksXCJjb25kaXRpb25cIjpcIjEwMTU6NiwxMDEyOjcsMTAxMDoxLDEwMDE6M1wifSx7XCJpZFwiOjYxLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMTU6MTIsMTAwNjo1LDEwMTE6MTUsMTAwMjo3XCJ9LHtcImlkXCI6NjIsXCJjb21taXNzaW9uXCI6MC40NCxcImNvbmRpdGlvblwiOlwiMTAxNToxLDEwMDc6MTUsMTAxMTo4LDEwMDY6NlwifSx7XCJpZFwiOjYzLFwiY29tbWlzc2lvblwiOjAuMDEsXCJjb25kaXRpb25cIjpcIjEwMTA6MTgsMTAwNToxNiwxMDA5OjEzLDEwMDM6N1wifSx7XCJpZFwiOjY0LFwiY29tbWlzc2lvblwiOjAuMjcsXCJjb25kaXRpb25cIjpcIjEwMDc6MTcsMTAwNjoxMCwxMDA1OjksMTAwNDo1XCJ9LHtcImlkXCI6NjUsXCJjb21taXNzaW9uXCI6MC4zOSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDAzOjEwLDEwMTQ6MjAsMTAwNToxNVwifSx7XCJpZFwiOjY2LFwiY29tbWlzc2lvblwiOjAuNzMsXCJjb25kaXRpb25cIjpcIjEwMDQ6MTUsMTAwODo1LDEwMDI6MTQsMTAxMjoxNFwifSx7XCJpZFwiOjY3LFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDE6MTYsMTAxMjoyMCwxMDExOjIwLDEwMDM6MVwifSx7XCJpZFwiOjY4LFwiY29tbWlzc2lvblwiOjAuNjksXCJjb25kaXRpb25cIjpcIjEwMTM6NCwxMDA4OjMsMTAwNjo2LDEwMDc6MTdcIn0se1wiaWRcIjo2OSxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDE1OjMsMTAwNDo5LDEwMTM6NywxMDA5OjFcIn0se1wiaWRcIjo3MCxcImNvbW1pc3Npb25cIjowLjcxLFwiY29uZGl0aW9uXCI6XCIxMDEwOjMsMTAwNDoxLDEwMTE6NywxMDEyOjExXCJ9LHtcImlkXCI6NzEsXCJjb21taXNzaW9uXCI6MC4yOSxcImNvbmRpdGlvblwiOlwiMTAwODoxMSwxMDAyOjYsMTAwMzo4LDEwMTU6MTNcIn0se1wiaWRcIjo3MixcImNvbW1pc3Npb25cIjowLjMxLFwiY29uZGl0aW9uXCI6XCIxMDA1OjIsMTAwMjoxOCwxMDEyOjE5LDEwMTA6MTRcIn0se1wiaWRcIjo3MyxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDEyOjQsMTAwNjoyLDEwMDM6NywxMDA0OjJcIn0se1wiaWRcIjo3NCxcImNvbW1pc3Npb25cIjowLjI2LFwiY29uZGl0aW9uXCI6XCIxMDAzOjIwLDEwMTI6MTgsMTAwMjozLDEwMDE6MjBcIn0se1wiaWRcIjo3NSxcImNvbW1pc3Npb25cIjowLjE4LFwiY29uZGl0aW9uXCI6XCIxMDA2OjEsMTAxNDozLDEwMDg6MTIsMTAwMjo1XCJ9LHtcImlkXCI6NzYsXCJjb21taXNzaW9uXCI6MC41MSxcImNvbmRpdGlvblwiOlwiMTAwNzoxLDEwMTI6MiwxMDA0OjExLDEwMTQ6MlwifSx7XCJpZFwiOjc3LFwiY29tbWlzc2lvblwiOjAuMjEsXCJjb25kaXRpb25cIjpcIjEwMDg6MTUsMTAwOTo2LDEwMTI6NCwxMDA3OjdcIn0se1wiaWRcIjo3OCxcImNvbW1pc3Npb25cIjowLjczLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE2LDEwMTI6MTYsMTAwNjoyMCwxMDA4OjEyXCJ9LHtcImlkXCI6NzksXCJjb21taXNzaW9uXCI6MC42NSxcImNvbmRpdGlvblwiOlwiMTAwNjo2LDEwMDQ6OCwxMDA3OjEyLDEwMTE6N1wifSx7XCJpZFwiOjgwLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMDk6MTUsMTAwMzoxNiwxMDA0OjE5LDEwMDc6NFwifSx7XCJpZFwiOjgxLFwiY29tbWlzc2lvblwiOjAuMTQsXCJjb25kaXRpb25cIjpcIjEwMTI6MTAsMTAxNTo4LDEwMDI6NCwxMDAzOjhcIn0se1wiaWRcIjo4MixcImNvbW1pc3Npb25cIjowLjIsXCJjb25kaXRpb25cIjpcIjEwMDU6MTIsMTAxMToxOSwxMDA5OjE4LDEwMDI6MTRcIn0se1wiaWRcIjo4MyxcImNvbW1pc3Npb25cIjowLjUzLFwiY29uZGl0aW9uXCI6XCIxMDEwOjksMTAwMzo4LDEwMDc6MTIsMTAxNToyMFwifSx7XCJpZFwiOjg0LFwiY29tbWlzc2lvblwiOjAuNjIsXCJjb25kaXRpb25cIjpcIjEwMDU6OSwxMDE0OjYsMTAwMjoxOCwxMDA3OjhcIn0se1wiaWRcIjo4NSxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDExOjEwLDEwMDE6NywxMDEyOjEyLDEwMDQ6MTJcIn0se1wiaWRcIjo4NixcImNvbW1pc3Npb25cIjowLjU5LFwiY29uZGl0aW9uXCI6XCIxMDA5OjUsMTAxMToyMCwxMDA2OjQsMTAxNToxMVwifSx7XCJpZFwiOjg3LFwiY29tbWlzc2lvblwiOjAuMTEsXCJjb25kaXRpb25cIjpcIjEwMDY6NiwxMDA1OjksMTAxMzoxMCwxMDE0OjlcIn0se1wiaWRcIjo4OCxcImNvbW1pc3Npb25cIjowLjA4LFwiY29uZGl0aW9uXCI6XCIxMDA4OjcsMTAxMTo0LDEwMTU6MTIsMTAxNDoxMVwifSx7XCJpZFwiOjg5LFwiY29tbWlzc2lvblwiOjAuMDIsXCJjb25kaXRpb25cIjpcIjEwMDI6MTcsMTAwMzoyLDEwMDU6MTEsMTAxMDoxNFwifSx7XCJpZFwiOjkwLFwiY29tbWlzc2lvblwiOjAuMzIsXCJjb25kaXRpb25cIjpcIjEwMDI6MTksMTAxMzo4LDEwMDc6NSwxMDAxOjEzXCJ9LHtcImlkXCI6OTEsXCJjb21taXNzaW9uXCI6MC4xOSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDEzOjEwLDEwMTQ6MTAsMTAwNzoxNlwifSx7XCJpZFwiOjkyLFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDQ6OCwxMDExOjEzLDEwMDg6MTUsMTAwNzo5XCJ9LHtcImlkXCI6OTMsXCJjb21taXNzaW9uXCI6MC4zNCxcImNvbmRpdGlvblwiOlwiMTAxMzoxMiwxMDAxOjksMTAwNjo4LDEwMDg6MTFcIn0se1wiaWRcIjo5NCxcImNvbW1pc3Npb25cIjowLjIyLFwiY29uZGl0aW9uXCI6XCIxMDAyOjYsMTAwMToxNywxMDEzOjE2LDEwMDU6MTFcIn0se1wiaWRcIjo5NSxcImNvbW1pc3Npb25cIjowLjE1LFwiY29uZGl0aW9uXCI6XCIxMDA1OjYsMTAwMToxNCwxMDE1OjQsMTAwODoxNlwifSx7XCJpZFwiOjk2LFwiY29tbWlzc2lvblwiOjAuMDYsXCJjb25kaXRpb25cIjpcIjEwMDM6NCwxMDAxOjgsMTAwNzo4LDEwMDU6MThcIn0se1wiaWRcIjo5NyxcImNvbW1pc3Npb25cIjowLjc0LFwiY29uZGl0aW9uXCI6XCIxMDEzOjEyLDEwMDk6MTMsMTAwNjoyLDEwMTE6MlwifV0sXCJsYW5nXCI6W10sXCJsYW5kTGV2ZWxcIjpbe1wiaWRcIjoxLFwicmV3YXJkXCI6XCIxMDAyOjBcIixcImNvc3RcIjpcIjEwMDE6MFwiLFwiZ2FpblwiOm51bGx9LHtcImlkXCI6MixcInJld2FyZFwiOlwiMTAwMjoxNTAwXCIsXCJjb3N0XCI6XCIxMDAxOjMwMDAwXCIsXCJnYWluXCI6MX0se1wiaWRcIjozLFwicmV3YXJkXCI6XCIxMDAyOjIwMDBcIixcImNvc3RcIjpcIjEwMDE6NDAwMDBcIixcImdhaW5cIjoyfSx7XCJpZFwiOjQsXCJyZXdhcmRcIjpcIjEwMDI6MjUwMFwiLFwiY29zdFwiOlwiMTAwMTo1MDAwMFwiLFwiZ2FpblwiOjN9LHtcImlkXCI6NSxcInJld2FyZFwiOlwiMTAwMjozMDAwXCIsXCJjb3N0XCI6XCIxMDAxOjYwMDAwXCIsXCJnYWluXCI6NH0se1wiaWRcIjo2LFwicmV3YXJkXCI6XCIxMDAyOjM1MDBcIixcImNvc3RcIjpcIjEwMDE6NzAwMDBcIixcImdhaW5cIjo1fSx7XCJpZFwiOjcsXCJyZXdhcmRcIjpcIjEwMDI6NDAwMFwiLFwiY29zdFwiOlwiMTAwMTo4MDAwMFwiLFwiZ2FpblwiOjZ9LHtcImlkXCI6OCxcInJld2FyZFwiOlwiMTAwMjo0MDAxXCIsXCJjb3N0XCI6XCIxMDAxOjgwMDAxXCIsXCJnYWluXCI6N30se1wiaWRcIjo5LFwicmV3YXJkXCI6XCIxMDAyOjQwMDJcIixcImNvc3RcIjpcIjEwMDE6ODAwMDJcIixcImdhaW5cIjo4fSx7XCJpZFwiOjEwLFwicmV3YXJkXCI6XCIxMDAyOjQwMDNcIixcImNvc3RcIjpcIjEwMDE6ODAwMDNcIixcImdhaW5cIjo5fV0sXCJmZWVkXCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1OTk3Q1x1NUU3MlwiLFwiaWNvblwiOm51bGwsXCJ2aXRhbGl0eVwiOjEwLFwiY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1NTc1QVx1Njc5Q1wiLFwiaWNvblwiOm51bGwsXCJ2aXRhbGl0eVwiOjExLFwiY29zdFwiOlwiMTAwMjoyMDAwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1NzA2Qlx1ODE3RlwiLFwiaWNvblwiOm51bGwsXCJ2aXRhbGl0eVwiOjEyLFwiY29zdFwiOlwiMTAwMjozMDAwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwNCxcIm5hbWVcIjpcIlx1NzI1Qlx1ODA4OVwiLFwiaWNvblwiOm51bGwsXCJ2aXRhbGl0eVwiOjEzLFwiY29zdFwiOlwiMTAwMjo0MDAwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwNSxcIm5hbWVcIjpcIlx1NzMyQVx1ODA4OVwiLFwiaWNvblwiOm51bGwsXCJ2aXRhbGl0eVwiOjE0LFwiY29zdFwiOlwiMTAwMjo1MDAwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwNixcIm5hbWVcIjpcIlx1OUUyMVx1ODA4OVwiLFwiaWNvblwiOm51bGwsXCJ2aXRhbGl0eVwiOjE1LFwiY29zdFwiOlwiMTAwMjo2MDAwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9XSxcImN1cnJlbmN5XCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1OTRCQlx1NzdGM1wiLFwiaWNvblwiOlwibWFpbl9zY2VuZS9pbWdfZGlhbW9uZC5wbmdcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU5MUQxXHU1RTAxXCIsXCJpY29uXCI6XCJtYWluX3NjZW5lL2ltZ19jb2luLnBuZ1wifV0sXCJjb25maWdcIjpbe1wiaWRcIjpcImFsbF9zcGVlZF91cF90aW1lXCIsXCJ2YWx1ZVwiOjMwfSx7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVzXCIsXCJ2YWx1ZVwiOjYwMH0se1wiaWRcIjpcInVubG9ja19sYW5kX2Nvc3RcIixcInZhbHVlXCI6XCIxMDAyOjAsMTAwMjowLDEwMDI6NDAwMDAsMTAwMjo1MDAwMCwxMDAyOjIwMDAwLDEwMDI6MjAwMDAsMTAwMjoyMDAwMCwxMDAyOjIwMDAwLDEwMDI6MjAwMDBcIn1dfTsiLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTVCNTdcdTdCMjZcclxuICAgICAqIEBwYXJhbSBzdHIgXHU4OTgxXHU4OUUzXHU2NzkwXHU3Njg0XHU1QjU3XHU3QjI2XHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IFx1NTA1QVx1NEUzQVx1NTNDMlx1ODAwM1x1NzY4NFx1NUI1N1x1N0IyNlx1OUVEOFx1OEJBNFx1NEUzQSxcclxuICAgICAqIEByZXR1cm5zIFx1ODlFM1x1Njc5MFx1NTk3RFx1NzY4NFx1NUI1N1x1N0IyNlx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VTdHJpbmcoc3RyOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nID0gXCIsXCIpIHtcclxuICAgICAgICBpZiAoIXN0cikgcmV0dXJuIFtdO1xyXG4gICAgICAgIHJldHVybiBzdHIuc3BsaXQoZm9ybWF0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzlEMlx1OEY2Q1x1NjM2Mlx1NjIxMDAwOjAwOjAwXHJcbiAgICAgKiBAcGFyYW0gcyBcdThGNkNcdTYzNjJcdTY1RjZcdTk1RjRcdTc2ODRcdTc5RDJcclxuICAgICAqIEByZXR1cm5zIDAwOjAwOjAwXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBmb3JtYXRTZWNvbmRzID0gKHMpID0+IG5ldyBEYXRlKHMgKiAxMDAwKS50b0lTT1N0cmluZygpLnN1YnN0cigxMSwgOCk7XHJcbn1cclxuIiwgImltcG9ydCB7IFRhYmxlIH0gZnJvbSBcIi4vVGFibGVcIjtcclxuaW1wb3J0IHtcclxuICAgIEN1cnJlbmN5QmFzZSxcclxuICAgIEZlZWRCYXNlLFxyXG4gICAgT3JkZXJCYXNlLFxyXG4gICAgUGV0QmFzZSxcclxuICAgIFBsYW50QmFzZSxcclxuICAgIFJld2FyZEJhc2UsXHJcbiAgICBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICBUYXNrQmFzZSxcclxufSBmcm9tIFwiLi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcIi4vVG9vbHNcIjtcclxuXHJcbmNvbnN0IFRhYmxlUHJvcGVydHlFdmVudCA9IHtcclxuICAgIHBldChkOiB0eXBlb2YgVGFibGUucGV0WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQZXRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uIHx8IGBwZXRfZmVlZC8ke2QuaWR9LnBuZ2AsXHJcbiAgICAgICAgICAgIHZpdGFsaXR5X21heDogZC52aXRhbGl0eV9tYXgsXHJcbiAgICAgICAgICAgIHZpdGFsaXR5X2NvbnN1bWU6IGQudml0YWxpdHlfY29uc3VtZSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICAgICAgc2Vuc2l0aXZlOiBkLnNlbnNpdGl2ZSxcclxuICAgICAgICAgICAgYWJpbGl0eTogZC5hYmlsaXR5LFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU5OTcyXHU2NTk5XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGZlZWQoZDogdHlwZW9mIFRhYmxlLmZlZWRbMF0pIHtcclxuICAgICAgICByZXR1cm4gPEZlZWRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uIHx8IGBwZXRfZmVlZC8ke2QuaWR9X2ZlZWQucG5nYCxcclxuICAgICAgICAgICAgdml0YWxpdHk6IGQudml0YWxpdHksXHJcbiAgICAgICAgICAgIGNvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLmNvc3QpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdThCQTJcdTUzNTVcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBvcmRlcihkOiB0eXBlb2YgVGFibGUub3JkZXJbMF0pIHtcclxuICAgICAgICByZXR1cm4gPE9yZGVyQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBjb21taXNzaW9uOiBOdW1iZXIoZC5jb21taXNzaW9uKSxcclxuICAgICAgICAgICAgY29uZGl0aW9uOiBUb29scy5wYXJzZVN0cmluZyhkLmNvbmRpdGlvbikubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IFRvb2xzLnBhcnNlU3RyaW5nKGUsIFwiOlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbnQ6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChOdW1iZXIodlswXSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBOdW1iZXIodlsxXSksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NjIxMFx1NzE5Rlx1NjkwRFx1NzI2OVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHBsYW50KGQ6IHR5cGVvZiBUYWJsZS5wbGFudFswXSkge1xyXG4gICAgICAgIHJldHVybiA8UGxhbnRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uIHx8IGBwbGFudF9pY29uLyR7ZC5pZH1fc2VlZC5wbmdgLFxyXG4gICAgICAgICAgICBtYXR1cmVJY29uOiBkLmljb24gfHwgYHBsYW50X2ljb24vJHtkLmlkfV9tYXR1cmUucG5nYCxcclxuICAgICAgICAgICAgZ3Jvd2luZ0ljb246IGQuaWNvbiB8fCBgcGxhbnRfaWNvbi8ke2QuaWR9X2dyb3dpbmcucG5nYCxcclxuICAgICAgICAgICAgZ2FpbjogVG9vbHMucGFyc2VTdHJpbmcoZC5nYWluKS5tYXAoKGUpID0+IGdldFJld2FyZEN1cnJlbmN5QmFzZShlKSksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICAgICAgc2VlZF9wcmljZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuc2VlZF9wcmljZSksXHJcbiAgICAgICAgICAgIGhhcnZlc3Q6IE51bWJlcihkLmhhcnZlc3QpLFxyXG4gICAgICAgICAgICBtYXR1cmVfdGltZTogTnVtYmVyKGQubWF0dXJlX3RpbWUpLFxyXG4gICAgICAgICAgICB1bmxvY2tfY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudW5sb2NrX2Nvc3QpLFxyXG4gICAgICAgICAgICB1bmxvY2tfcmV3YXJkOiBUb29scy5wYXJzZVN0cmluZyhkLnVubG9ja19yZXdhcmQpLm1hcCgoZSkgPT4gZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGUpKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OEQyN1x1NUUwMVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbmN5KGQ6IHR5cGVvZiBUYWJsZS5jdXJyZW5jeVswXSkge1xyXG4gICAgICAgIHJldHVybiA8Q3VycmVuY3lCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbixcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFx1ODlFM1x1Njc5MFx1OEQyN1x1NUUwMVxyXG4gKiBAcGFyYW0gc3RyIFx1ODlFM1x1Njc5MFx1NzY4NFx1OEQyN1x1NUUwMVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NCBpZDpudW1cclxuICovXHJcbmZ1bmN0aW9uIGdldFJld2FyZEN1cnJlbmN5QmFzZShzdHI6IHN0cmluZykge1xyXG4gICAgaWYgKCFzdHIpIHJldHVybiBudWxsO1xyXG4gICAgbGV0IGxpc3QgPSBUb29scy5wYXJzZVN0cmluZyhzdHIsIFwiOlwiKTtcclxuXHJcbiAgICByZXR1cm4gPFJld2FyZEN1cnJlbmN5QmFzZT57XHJcbiAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoTnVtYmVyKGxpc3RbMF0pKSxcclxuICAgICAgICBjb3VudDogTnVtYmVyKGxpc3RbMV0pLFxyXG4gICAgfTtcclxufVxyXG5cclxudHlwZSB0eXBlVGFibGUgPSB0eXBlb2YgVGFibGVQcm9wZXJ0eUV2ZW50O1xyXG5cclxuY2xhc3MgVGFibGVDb250cm9sIHtcclxuICAgIHByaXZhdGUgdGFibGVDYWNoZTogTWFwPGtleW9mIHR5cGVUYWJsZSwgUmV0dXJuVHlwZTx0eXBlVGFibGVba2V5b2YgdHlwZVRhYmxlXT5bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTc2ODRcdTg4NjhcclxuICAgICAqIEBwYXJhbSBrZXkgXHU4ODY4XHU3Njg0a2V5XHJcbiAgICAgKi9cclxuICAgIHRhYmxlPFQgZXh0ZW5kcyBrZXlvZiB0eXBlVGFibGU+KFxyXG4gICAgICAgIGtleTogVFxyXG4gICAgKToge1xyXG4gICAgICAgIGxpc3Q6IFJldHVyblR5cGU8dHlwZVRhYmxlW1RdPltdO1xyXG4gICAgICAgIGdldDogeyAoaWQ6IG51bWJlcik6IFJldHVyblR5cGU8dHlwZVRhYmxlW1RdPiB9O1xyXG4gICAgfSB7XHJcbiAgICAgICAgLy9cdThCRkJcdTUzRDZcdTdFQzRcdTYyMTBcclxuICAgICAgICBpZiAodGhpcy50YWJsZUNhY2hlLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayh0aGlzLnRhYmxlQ2FjaGUuZ2V0KGtleSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1x1ODlFM1x1Njc5MFx1NjU3MFx1NjM2RVxyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgVGFibGVba2V5XS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChUYWJsZVByb3BlcnR5RXZlbnRba2V5XShlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cdTdGMTNcdTVCNThcdTg5RTNcdTY3OTBcdTg4NjhcdTc2ODRcdTY1NzBcdTYzNkVcclxuICAgICAgICB0aGlzLnRhYmxlQ2FjaGUuc2V0KGtleSwgbGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVCYWNrKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NTI4XHU0RThFdGFibGVcdTY1QjlcdTZDRDVcdThGRDRcdTU2REVcdTY1NzBcdTYzNkVcdTY4M0NcdTVGMEZcdTU0OENcdTZERkJcdTUyQTBcdTgzQjdcdTUzRDZcdTUzNTVcdTRFMkFcdTg4NjhcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1ODlFM1x1Njc5MFx1ODg2OFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU2MzA3XHU1QjlBXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGFibGVCYWNrKGxpc3QpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsaXN0OiBsaXN0LFxyXG4gICAgICAgICAgICBnZXQoaWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gbGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFt4XS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlzdFt4XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU4ODY4XHU2ODNDXHU4OUUzXHU2NzkwXHU1REU1XHU1MTc3XHJcbiAqL1xyXG5jb25zdCBUYWJsZUFuYWx5emUgPSBuZXcgVGFibGVDb250cm9sKCk7XHJcbmV4cG9ydCBkZWZhdWx0IFRhYmxlQW5hbHl6ZTtcclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYW50RGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogUGxhbnRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jbGFzcyBQbGFudFNlcnZpY2Uge1xyXG4gICAgbGlzdDogUGxhbnREYXRhQmFzZVtdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGxpc3QgXHU3OUNEXHU1QjUwaWRcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgaW5pdChsaXN0OiBudW1iZXJbXSkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7IGJhc2U6IGQsIGxvY2s6ICFsaXN0LmluY2x1ZGVzKGQuaWQpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gaWQgXHU2OTBEXHU3MjY5aWRcclxuICAgICAqIEByZXR1cm5zIFx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBnZXRQbGFudChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMubGlzdC5sZW5ndGggLSAxOyB4ID4gLTE7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBsYW50U2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGxhbnRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2FyZUhvdXNlRGF0YSB7XHJcbiAgICBiYXNlOiBQbGFudEJhc2U7XHJcbiAgICBjb3VudDogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFdhcmVob3VzZVNlcnZpY2Uge1xyXG4gICAgbGlzdDogV2FyZUhvdXNlRGF0YVtdID0gW107XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogZCxcclxuICAgICAgICAgICAgICAgIGNvdW50OiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgV2FyZWhvdXNlU2VydmljZSgpO1xyXG4iLCAiLyoqXHJcbiAqIFx1NzdFRFx1OTRGRVx1NjNBNVx1OEJGN1x1NkM0Mlx1NTM0Rlx1OEJBRVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gQXBpSHR0cCB7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU3NjdCXHU1RjU1ICovXHJcbiAgICBsb2dpbiA9IFwiL2Zhcm1Db250cm9sbGVyL2xvZ2luXCIsXHJcbiAgICAvKiogXHU2NTM2XHU4M0RDICovXHJcbiAgICBnYXRoZXIgPSBcIi9mYXJtQ29udHJvbGxlci9nYXRoZXJcIixcclxuICAgIC8qKiBcdTc5Q0RcdTgzREMgKi9cclxuICAgIHNvdyA9IFwiL2Zhcm1Db250cm9sbGVyL3Nvd1wiLFxyXG4gICAgLyoqIFx1ODlFM1x1OTUwMVx1NTcxRlx1NTczMCAqL1xyXG4gICAgdW5sb2NrTGFuZCA9IFwiL2Zhcm1Db250cm9sbGVyL3VubG9ja0xhbmRcIixcclxufVxyXG4iLCAiaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM0Rlx1OEJBRVx1NjU3MFx1NjM2RVx1NTkwNFx1NzQwNlxyXG4gKi9cclxuY2xhc3MgSHR0cERhdGFDb250cm9sIHtcclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdThGNkNcdTUzRDEgKi9cclxuICAgIGZvcndhcmQoZDoge1xyXG4gICAgICAgIGFwaTogQXBpSHR0cDtcclxuICAgICAgICBkYXRhOiBhbnk7XHJcbiAgICAgICAgY2FsbD86IEZ1bmN0aW9uO1xyXG4gICAgICAgIHJlc29sdmVFdmVudD86IEZ1bmN0aW9uO1xyXG4gICAgICAgIGVycm9yPzogRnVuY3Rpb247XHJcbiAgICB9KSB7XHJcbiAgICAgICAgc3dpdGNoIChkLmFwaSkge1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubG9naW46XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGQucmVzb2x2ZUV2ZW50KSBkLnJlc29sdmVFdmVudChkLmRhdGEpO1xyXG5cclxuICAgICAgICBpZiAoZC5jYWxsKSB7XHJcbiAgICAgICAgICAgIGQuY2FsbChkLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KGQuYXBpLCBkLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKGVycm9yQ29kZTogbnVtYmVyLCBkYXRhOiBhbnkpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuSGludFZpZXcsIHsgcGFybTogeyB0ZXh0OiBgZXJyb3JDb2RlICR7ZXJyb3JDb2RlfWAgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzY3Qlx1NUY1NVxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9naW4oZDogTmV0SW5pdCkge1xyXG4gICAgICAgIFBsYW50U2VydmljZS5pbml0KGQuc2VlZHNMaXN0KTtcclxuICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBVc2VySW5mby51aWQgPSBkLnVzZXJJZDtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC5kaWFtb25kO1xyXG4gICAgICAgIFVzZXJJbmZvLmdvbGQgPSBkLmdvbGQ7XHJcbiAgICAgICAgVXNlckluZm8ubmlja25hbWUgPSBkLm5pY2tOYW1lO1xyXG4gICAgICAgIFVzZXJJbmZvLmF2YXRhciA9IGQucHJvZmlsZSB8fCBcIlwiO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgTGFuZFNlcnZpY2UuaW5pdChkLmxhbmRMaXN0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEh0dHBEYXRhQ29udHJvbCgpO1xyXG4iLCAiaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcInNyYy9jb3JlL0luc3RhbmNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBIdHRwRGF0YUNvbnRyb2wgZnJvbSBcIi4vSHR0cERhdGFDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwiLi9OZXRNYXBzXCI7XHJcblxyXG5pbnRlcmZhY2UgSHR0cFNlbmREYXRhIHtcclxuICAgIGFwaTogQXBpSHR0cDtcclxuICAgIGRhdGE/OiBhbnk7XHJcbiAgICBtZXRob2Q/OiBzdHJpbmc7XHJcbiAgICByZXNwb25zZVR5cGU/OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJzPzogYW55W10gfCBudWxsO1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1OTUxOVx1OEJFRlx1NTZERVx1OEMwMyAqL1xyXG4gICAgZXJyb3I/OiB7IChjb2RlOiBudW1iZXIsIGRhdGE6IGFueSk6IHZvaWQgfTtcclxuICAgIGJhc2VVcmw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTc3RURcdTk0RkVcdTYzQTVcdTYzQTdcdTUyMzZcdTU2NjhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBDb250cm9sIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IEh0dHBDb250cm9sO1xyXG5cclxuICAgIHhocjogTGF5YS5IdHRwUmVxdWVzdDtcclxuXHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc2VuZERhdGE6IEh0dHBTZW5kRGF0YTtcclxuXHJcbiAgICBwcml2YXRlIGJhY2tSZXNvbHZlRXZlbnQ6IEZ1bmN0aW9uO1xyXG5cclxuICAgIGluaXQodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XHJcbiAgICAgICAgaWYgKHRoaXMueGhyKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBMYXlhLkh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgLy8gdGhpcy54aHIuaHR0cC50aW1lb3V0ID0gMTAwMDA7IC8vXHU4RDg1XHU2NUY2XHU2NUY2XHU5NUY0XHJcbiAgICAgICAgeGhyLm9uKExheWEuRXZlbnQuQ09NUExFVEUsIHRoaXMsIHRoaXMuY29tcGxldGVIYW5kbGVyKTtcclxuICAgICAgICB4aHIub24oTGF5YS5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5lcnJvckhhbmRsZXIpO1xyXG4gICAgICAgIHhoci5vbihMYXlhLkV2ZW50LlBST0dSRVNTLCB0aGlzLCB0aGlzLnByb2Nlc3NIYW5kbGVyKTtcclxuICAgICAgICAvLyB4aHIuc2VuZChcInJlcy9kYXRhLmRhdGFcIiwgXCJcIiwgXCJnZXRcIiwgXCJ0ZXh0XCIpO1xyXG5cclxuICAgICAgICB0aGlzLnhociA9IHhocjtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kKGRhdGE6IEh0dHBTZW5kRGF0YSkge1xyXG4gICAgICAgIGlmICghZGF0YS5tZXRob2QpIGRhdGEubWV0aG9kID0gXCJwb3N0XCI7XHJcbiAgICAgICAgaWYgKCFkYXRhLnJlc3BvbnNlVHlwZSkgZGF0YS5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcclxuICAgICAgICBpZiAoIWRhdGEuYmFzZVVybCkgZGF0YS5iYXNlVXJsID0gdGhpcy5iYXNlVXJsO1xyXG5cclxuICAgICAgICB0aGlzLnNlbmREYXRhID0gZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhLmRhdGE/LnVzZXJJZCkge1xyXG4gICAgICAgICAgICBkYXRhLmRhdGEudXNlcklkID0gVXNlckluZm8udWlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlYyA9PT4gc2VuZCAlYyR7ZGF0YS5hcGl9ICVjJHtKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEpfWAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojODJjY2RkO2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2ViNGQ0Yjtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgYGNvbG9yOiNmOGMyOTE7Zm9udC13ZWlnaHQ6NzAwO2BcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnhoci5zZW5kKFxyXG4gICAgICAgICAgICBkYXRhLmJhc2VVcmwgKyBkYXRhLmFwaSxcclxuICAgICAgICAgICAgZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhLm1ldGhvZCxcclxuICAgICAgICAgICAgZGF0YS5yZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgIGRhdGEuaGVhZGVyc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tSZXNvbHZlRXZlbnQgPSByZXNvbHZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAoZS5yZXN1bHRDb2RlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbmREYXRhPy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kRGF0YS5lcnJvcihlLnJlc3VsdENvZGUsIGUucmVzdWx0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBIdHRwRGF0YUNvbnRyb2wuZXJyb3IoZS5yZXN1bHRDb2RlLCBlLnJlc3VsdCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYCVjIDw9PSBiYWNrICVjJHt0aGlzLnNlbmREYXRhLmFwaX0gYCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojYjhlOTk0O2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiM3OGUwOGY7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBlLnJlc3VsdFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBIdHRwRGF0YUNvbnRyb2wuZm9yd2FyZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IHRoaXMuc2VuZERhdGEuYXBpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZS5yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICBjYWxsOiB0aGlzLnNlbmREYXRhPy5jYWxsLFxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZUV2ZW50OiB0aGlzLmJhY2tSZXNvbHZlRXZlbnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgcHJvY2Vzc0hhbmRsZXIoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5cclxuLy8gIEFkZExhbmRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRMYW5kVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgcHJpdmF0ZSBkYXRhOiB7IGlkOiBudW1iZXI7IGNhbGw6IEZ1bmN0aW9uIH07XHJcblxyXG4gICAgb25PcGVuZWQoZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvc3RfZ29sZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYWRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC51bmxvY2tMYW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZWRzSWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vICBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhd2FcIik7XHJcbiAgICB9XHJcbiAgICBvbkhkRW5hYmxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzRGVzY1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNEZXNjVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGFuZWxOb2RlLCB0aXBzOlwiXHU2RURBXHU1MkE4XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIHBhbmVsTm9kZTogTGF5YS5QYW5lbDtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbE5vZGUudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc0Rlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIik7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzUmV3YXJkVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1Jld2FyZFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmludFR5cGUsIHRpcHM6XCJcdTY1NzRcdTY1NzBcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpJbnQsIGRlZmF1bHQ6MTAwMH0qL1xyXG4gICAgcHVibGljIGludFR5cGU6IG51bWJlciA9IDEwMDA7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7fVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1Jld2FyZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCkge1xyXG4gICAgICAgIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkQm94LCB0aXBzOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRCb3g6IExheWEuQm94O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1MjE3XHU4ODY4XHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0O1xyXG5cclxuICAgIC8qKiAxXHU2NjJGXHU1OTdEXHU1M0NCXHU1MjE3XHU4ODY4IDIgXHU1MkEwXHU1OTdEXHU1M0NCICAzXHU1MjIwXHU5NjY0XHU1OTdEXHU1M0NCICovXHJcbiAgICBwcml2YXRlIHZpZXdTdGF0ZTogMSB8IDIgfCAzID0gMTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IG5ldyBBcnJheSgyMCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLml0ZW1SZW5kZXIpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXRlbVJlbmRlcihjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG5ld0JveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJuZXdfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBoZWFydEJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoZWFydF9ib3hcIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgZ29QbGF5QnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImdvX3BsYXlfYnRuXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGFwcGx5QnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImFwcGx5X2J0blwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBkZWxCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZGVsX2J0blwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBuZXdCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBkZWxCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMudmlld1N0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGVsQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRfZnJpZW5kXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMikgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQm94LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDU5MDsgLy85MTRcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZWxfZnJpZW5kXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMykgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1N0YXRlID0gMztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QuaGVpZ2h0ID0gOTE0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlc2NfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc0Rlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmV3YXJkX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNSZXdhcmRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBIaW50VmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpbnRWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0ZXh0LCB0aXBzOlwiXHU1MTg1XHU1QkI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBMYXlhLkxhYmVsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyB0ZXh0OiBzdHJpbmc7IGNhbGw/OiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIG9uT3BlbmVkKGQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG4gICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy5kYXRhPy50ZXh0IHx8IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkhpbnRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRCYXIsIHRpcHM6XCJsb2FkIGJhclwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9hZEJhcjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9hZEJveCwgdGlwczpcIlx1NTJBMFx1OEY3RFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9hZEJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvZ2luQm94LCB0aXBzOlwiXHU3NjdCXHU5NjQ2XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb2dpbkJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdThGREJcdTVFQTZcdTY3NjFcdTlFRDhcdThCQTRcdTVCQkRcdTVFQTYgKi9cclxuICAgIHByaXZhdGUgbG9hZEJhck9sZFdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9O1xyXG5cclxuICAgIG9uT3BlbmVkKGQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG5cclxuICAgICAgICBpZiAoTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCk/LmlzTG9naW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJjYWxsXCIpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhd2FrZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubG9hZExhYmVsKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5sb2FkTGFiZWwudGV4dCA9IFwiTG9hZC4uLi4wJVwiO1xyXG4gICAgICAgIHRoaXMubG9hZEJhck9sZFdpZHRoID0gdGhpcy5sb2FkQmFyLndpZHRoO1xyXG4gICAgICAgIHRoaXMubG9hZEJhci53aWR0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpbl9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ2luKCkge1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sb2dpbixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgd3hJZDogXCIxMTExMTExMTExXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbGw6IChkOiBOZXRJbml0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB0aGlzLmRhdGEuY2FsbChkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogKGNvZGUsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFByb2dyZXNzKHYpIHtcclxuICAgICAgICB0aGlzLmxvYWRCYXIud2lkdGggPSB2ICogdGhpcy5sb2FkQmFyT2xkV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgTWFpbFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5NYWlsVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlLCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYW50RGF0YUJhc2UgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCJzcmMvdmlldy9NYWluVmlld1wiO1xyXG5pbXBvcnQgeyBTaG9wVmlld0RhdGEgfSBmcm9tIFwic3JjL3ZpZXcvU2hvcFZpZXdcIjtcclxuXHJcbi8vICBGaWVsZENvbXBvbmVudCBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuLyoqXHJcbiAqIFx1NzUzMFx1NTczMFx1N0VDNFx1NEVGNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OWljb24gKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgaWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU4MjgyXHU3MEI5ICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGZpZWxkTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU2NzA5XHU2OTBEXHU3MjY5XHU2NUY2XHU3Njg0XHU5NjM0XHU1RjcxICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHNoYWRvdzogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmllbGRFbXB0eVJlcywgdGlwczpcIlx1ODlFM1x1OTUwMVx1NTQwRVx1NTcxRlx1NTczMFx1N0VCOVx1NzQwNlwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGZpZWxkRW1wdHlSZXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogXHU3QjQ5XHU3RUE3XHU1NkZFXHU3MjQ3ICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGx2Tm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1MDEyXHU4QkExXHU2NUY2XHU1QkI5XHU1NjY4Ki9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgdGltZUJveDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogXHU1MDEyXHU4QkExXHU2NUY2bGFiZWwgKi9cclxuICAgIHByaXZhdGUgY291bnREb3duTGI6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOGljb25cdTg4QzVcdTk5NzAgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTYyMTBcdTcxOUZcdTUzRUZcdTY1MzZpY29uICovXHJcbiAgICBwcml2YXRlIG1hdHVyZU5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTNFRlx1NjRBRFx1NzlDRFx1N0E3QVx1NTczMGljb24gKi9cclxuICAgIHByaXZhdGUgZW1wdHlGaWVsZE5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnVubG9ja0ljb24sIHRpcHM6XCJcdTYyRDNcdTVDNTVcdTU3MUZcdTU3MzBpY29uXHU1NzMwXHU1NzQwXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgdW5sb2NrSWNvbjogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaWVsZElkLCB0aXBzOlwiXHU1NzFGXHU1NzMwaWRcIiwgdHlwZTpOdW1iZXIsfSovXHJcbiAgICBmaWVsZElkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU2RDZFXHU1MkE4XHU1MkE4XHU3NTNCICovXHJcbiAgICBwcml2YXRlIHRvcFN0YXRlSWNvblR3ZWVuOiBMYXlhLlRpbWVMaW5lO1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OVx1NTJBOFx1NzUzQiAqL1xyXG4gICAgcHJpdmF0ZSBwbGFudEljb25Ud2VlbjogTGF5YS5UaW1lTGluZTtcclxuXHJcbiAgICAvKiogXHU1RUZBXHU3QjUxXHU0RTJEICovXHJcbiAgICBidWlsZEluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZGF0YTogTGFuZE9iajtcclxuXHJcbiAgICBwcml2YXRlIGxhbmRMaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPjtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZE5vZGUgPSA8TGF5YS5JbWFnZT50aGlzLm93bmVyO1xyXG4gICAgICAgIHRoaXMuY291bnREb3duTGIgPSB0aGlzLnRpbWVCb3guZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudERvd25MYlwiKSBhcyBhbnk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmljb24uc2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfZmllbGQpXHJcbiAgICB1cGRhdGVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMubGFuZExpc3QgPSBMYW5kU2VydmljZS5saXN0O1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMubGFuZExpc3QuZ2V0KHRoaXMuZmllbGRJZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyRGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROb2RlLnNraW4gPSB0aGlzLmZpZWxkRW1wdHlSZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24oQm9vbGVhbih0aGlzLmRhdGEuZmFybXNlZWRzSWQpKTtcclxuICAgICAgICAgICAgdGhpcy5sdk5vZGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZmFybXNlZWRzSWQgJiYgdGhpcy5kYXRhLmdyb3dVcFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIC8vXHU2MjEwXHU5NTdGXHU0RTJEXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb24uc2tpbiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldCh0aGlzLmRhdGEuZmFybXNlZWRzSWQpLmdyb3dpbmdJY29uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmZhcm1zZWVkc0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNraW4gPSB0aGlzLnVubG9ja0ljb247XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RWljb25cdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93SWNvbihzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU3MkI2XHU2MDAxaWNvblx1N0VCOVx1NzQwNlxyXG4gICAgICogQHBhcmFtIHNraW5UeXBlIDEgXHU2RDQ3XHU2QzM0XHU1MkEwXHU5MDFGXHU3MkI2XHU2MDAxIDIgXHU1RUZBXHU3QjUxXHU3MkI2XHU2MDAxIDMgXHU2MjEwXHU3MTlGXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlSWNvblNraW4oc2tpblR5cGU6IDEgfCAyIHwgMykge1xyXG4gICAgICAgIHN3aXRjaCAoc2tpblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfc3BlZWRVcC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19sYW5kVXBkYXRlQnRuMi5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19oYXJ2ZXN0LnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5ODc2XHU5MEU4aWNvblx1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICB0b3BTdGF0ZUljb25BbmkocGxheTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy50b3BTdGF0ZUljb25Ud2Vlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuID0gTGF5YS5UaW1lTGluZS50byhcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLFxyXG4gICAgICAgICAgICAgICAgeyB5OiB0aGlzLnRvcFN0YXRlSWNvbi55IC0gNTAgfSxcclxuICAgICAgICAgICAgICAgIDgwMCxcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKS50byh0aGlzLnRvcFN0YXRlSWNvbiwgeyB5OiB0aGlzLnRvcFN0YXRlSWNvbi55IH0sIDgwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gcGxheTtcclxuXHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTY1RjZcdTk1RjRcdTVCQjlcdTU2NjhcdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93VGltZUJveChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU5NjM0XHU1RjcxXHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1NoYWRvd0ljb24oc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmFjdGl2ZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwbGFudEljb25BbmkocGxheTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGFudEljb25Ud2Vlbikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuID0gTGF5YS5UaW1lTGluZS50byh0aGlzLmljb24sIHsgc2tld1g6IDYgfSwgOTAwKVxyXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMuaWNvbiwgeyBza2V3WDogLTYgfSwgMTgwMClcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLmljb24sIHsgc2tld1g6IDAgfSwgOTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZShNYXRoLnJhbmRvbSgpICogMTAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1MDEyXHU4QkExXHU2NUY2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQ291bnREb3duKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZ3Jvd1VwVGltZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYi50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyh0aGlzLmRhdGEuZ3Jvd1VwVGltZSk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZ3Jvd1VwVGltZS0tO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYi50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyh0aGlzLmRhdGEuZ3Jvd1VwVGltZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmdyb3dVcFRpbWUgPSAwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NTAxMlx1OEJBMVx1NjVGNlx1N0VEM1x1Njc1RiBcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnNraW4gPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQodGhpcy5kYXRhLmZhcm1zZWVkc0lkKS5tYXR1cmVJY29uO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYnVpbGRJbmcpIHRoaXMuc2V0U3RhdGVJY29uU2tpbigzKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU3QjQ5XHU3RUE3XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlTGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5sdk5vZGUuc2tpbiA9IGBtYWluX3NjZW5lL2ltZ19sZXZlbCR7dGhpcy5kYXRhLmxldmVsfS5wbmdgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU3QTdBXHU1NzFGXHU1NzMwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2xlYXJGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhLmZhcm1zZWVkc0lkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmljb24uc2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpZWxkSWQsIHRoaXMuYnVpbGRJbmcpO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVpbGRJbmcpIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GaWVsZExldmVsVXBWaWV3LCB7IHBhcm06IHRoaXMuZmllbGRJZCB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5mYXJtc2VlZHNJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5ncm93VXBUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTUyQTBcdTkwMUZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNwZWVkVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU2NTM2XHU4M0I3XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZ2F0aGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5sYW5kSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU2NTM2XHU4M0I3XHU3Njg0XHU2OTBEXHU3MjY5XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW50T2JqID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YS5mYXJtc2VlZHNJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3Q6IGFueVtdID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogcGxhbnRPYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHBsYW50T2JqLmhhcnZlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU4M0I3XHU1Rjk3XHU3Njg0XHU5MUQxXHU1RTAxXHU5NEJCXHU3N0YzXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbnRPYmouZ2Fpbi5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChkLm9iai5pZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogZC5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IENvbmZpZ0dhbWUuZGlhbW9uZElkID09IGQub2JqLmlkID8gMiA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJld2FyZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFudE9iai5nYWluLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGQub2JqLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQ29uZmlnR2FtZS5kaWFtb25kSWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5kaWFtb25kICs9IGQuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBDb25maWdHYW1lLmdvbGRJZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmdvbGQgKz0gZC5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vXHU3OUNEXHU4M0RDXHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywge1xyXG4gICAgICAgICAgICAgICAgcGFybTogPFNob3BWaWV3RGF0YT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFybTogeyBsYW5kSWQ6IHRoaXMuZmllbGRJZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkOiBQbGFudERhdGFCYXNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKS5mYXJtc2VlZHNJZCA9IGQuYmFzZS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKS5ncm93VXBUaW1lID0gZC5iYXNlLm1hdHVyZV90aW1lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vXHU4OUUzXHU5NTAxXHU1NzFGXHU1NzMwXHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5BZGRMYW5kVmlldywge1xyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYW5kU2VydmljZS5hZGRMYW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50VGltZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3dVcFRpbWU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXJtc2VlZHNJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEZpZWxkQ29tcG9uZW50IGZyb20gXCJzcmMvY29tcG9uZW50cy9GaWVsZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vKipcclxuICogXHU5OERFXHU5MUQxXHU1RTAxXHU2NTcwXHU5MUNGXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdldEZsb2F0UmV3YXJkT2JqIHtcclxuICAgIC8qKiBcdThENzdcdTcwQjlcdTUzQzJcdTgwMDNcdTgyODJcdTcwQjkgKi9cclxuICAgIG5vZGU6IExheWEuQm94O1xyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbGlzdDoge1xyXG4gICAgICAgIC8qKiBcdTg5RTNcdTY3OTBcdTc2ODRcdThENDRcdTZFOTBcdTY1NzBcdTYzNkUgXHU1RkM1XHU5ODdCXHU4OTgxXHU2NzA5aWNvbiAqL1xyXG4gICAgICAgIG9iajogYW55O1xyXG4gICAgICAgIC8qKiBcdTY1NzBcdTkxQ0YgKi9cclxuICAgICAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgICAgIC8qKiBcdTdFQzhcdTcwQjlcdTRGNERcdTdGNkUgMSBcdTkxRDFcdTVFMDEgMiBcdTk0QkJcdTc3RjMgMyBcdTRFRDNcdTVFOTMgKi9cclxuICAgICAgICBwb3NUeXBlOiAxIHwgMiB8IDM7XHJcbiAgICB9W107XHJcbiAgICAvKiogXHU1MkE4XHU3NTNCXHU2NEFEXHU2NTNFXHU3RUQzXHU2NzVGXHU1NkRFXHU4QzAzICovXHJcbiAgICBjYWxsQmFjaz86IHsgKCk6IHZvaWQgfTtcclxufVxyXG5cclxuLy8gIE1haW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkTGFuZExheWVyLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRMYW5kTGF5ZXI6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZE5vZGUsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmROb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb2xkTm9kZSwgdGlwczpcIlx1OTFEMVx1NUUwMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29sZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmF2YXRhck5vZGUsIHRpcHM6XCJcdTU5MzRcdTUwQ0ZcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGF2YXRhck5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRCb3gsIHRpcHM6XCJcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxhbmRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjZW50ZXJCb3gsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTUzM0FcdTU3REZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm9yZGVyQm94LCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsYW5kVXBMYXllciwgdGlwczpcIlx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1N0E5N1x1NTNFM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGFuZFVwTGF5ZXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BMYXllck9uU3RhZ2UsIHRpcHM6XCJcdTU3MjhcdTRFM0JcdTU3M0FcdTY2NkZcdTRFMEFcdTk3NjJcdTc2ODRcdTRFMDBcdTRFMkFcdTY3MDBcdTRFMEFcdTVDNDJcdTc2ODRcdTdBN0FcdTVDNDJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcExheWVyT25TdGFnZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wR29sZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTkxRDFcdTVFMDFpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BHb2xkSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wRGlhbW9uZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTk0QkJcdTc3RjNpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BEaWFtb25kSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6d2FyZWhvdXNlQnRuLCB0aXBzOlwiXHU0RUQzXHU1RTkzXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB3YXJlaG91c2VCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHVGRjBDXHU5OERFXHU3MjY5XHU1NEMxXHU3NkY4XHU1MTczXHJcbiAgICAvKiogQHByb3Age25hbWU6Z2V0UmV3YXJkUHJlZmFiLCB0aXBzOlwiXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHU5ODg0XHU4QkJFXCIsIHR5cGU6UHJlZmFifSovXHJcbiAgICBwcml2YXRlIGdldFJld2FyZFByZWZhYjogTGF5YS5QcmVmYWIgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZsb2F0UmV3YXJkSWNvbiwgdGlwczpcIlx1NTk1Nlx1NTJCMVx1OThERVx1NTJBOFx1NzUzQmljb25cIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgZmxvYXRSZXdhcmRJY29uOiBMYXlhLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1N0VDNFx1NEVGNiBcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgbGFuZExpc3Q6IEZpZWxkQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwicmVzL2xvYWRpbmdCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3dvb2R0aXRsZS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlSG91c2VCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlYmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19zaGVsZi5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19sYW5kQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob3VzZXRvcC5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX2hvbWVwYWdlQmczLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyBcInJlcy9pbWdfaG9tZXBhZ2VCZzIucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2ltZ19ob21lcGFnZUJnMS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2Zhcm1sYW5kTG9nby5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUucG5nXCIsXHJcbiAgICAgICAgXS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmVuZHNXaXRoKFwicG5nXCIpKSBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIFJlcy5zY2VuZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5lbmRzV2l0aChcInBuZ1wiKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnRvcExheWVyT25TdGFnZSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5sYW5kQm94Lm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5wdXNoKHRoaXMubGFuZEJveC5nZXRDaGlsZEF0KHgpLmdldENvbXBvbmVudChGaWVsZENvbXBvbmVudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYW5kTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmZpZWxkSWQgLSBiLmZpZWxkSWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX2ZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy5oaXRMYW5kQWRkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYzRDBcdTc5M0FcdTY2M0VcdTc5M0FcdTYyNjlcdTVFRkFpY29uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGl0TGFuZEFkZCgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sYW5kTGlzdFt4XS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBDb3JlLm9ic2VydmFibGVQcm9wZXJ0eVxyXG4gICAgICAgICAgICAud2F0Y2goVXNlckluZm8sIHRoaXMpXHJcbiAgICAgICAgICAgIC5rZXkoXCJkaWFtb25kXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYW1vbmROb2RlLnZhbHVlID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImdvbGRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29sZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiYXZhdGFyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFkZExhbmRMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cGRhdGVPcmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oQXBpSHR0cC5sb2dpbilcclxuICAgIHByaXZhdGUgZ2FtZUluaXQoZDogTmV0SW5pdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgICAgIC8vIGxldCBhID0gZC5kYXRhLmxhbmRMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTGFuZExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGFza1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2lnbkluXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2lnbkluVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm1haWxcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5NYWlsVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNob3BcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImhlYWRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TZXR0aW5nVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndhcmVob3VzZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLldhcmVob3VzZVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidXlfZmVlZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDIgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG9nXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcmRlcl9ib3hcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5PcmRlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmcmllbmRzXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kXCI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxhbmRMZXZlbFVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaExhbmRMZXZlbFVwKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV91cFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hMYW5kTGV2ZWxVcChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdThCQTJcdTUzNTVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVPcmRlcigpIHtcclxuICAgICAgICBsZXQgYm94ID0gdGhpcy5vcmRlckJveCxcclxuICAgICAgICAgICAgZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcIm9yZGVyXCIpLmdldChVc2VySW5mby5vcmRlckxldmVsKSxcclxuICAgICAgICAgICAgcmV3YXJkOiBSZXdhcmRDdXJyZW5jeUJhc2UsXHJcbiAgICAgICAgICAgIHJld2FyZENvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDQ7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGJveC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fXCIgKyB4KSBhcyBMYXlhLkJveDtcclxuICAgICAgICAgICAgaWYgKGQuY29uZGl0aW9uW3hdKSB7XHJcbiAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuY29uZGl0aW9uW3hdLnBsYW50Lmljb247XHJcblxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAwLyR7ZC5jb25kaXRpb25beF0uY291bnR9YDtcclxuICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID0gODcgKiAoMCAvIGQuY29uZGl0aW9uW3hdLmNvdW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGQuY29uZGl0aW9uW3hdLnBsYW50LmdhaW4uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLm9iai5pZCA9PT0gQ29uZmlnR2FtZS5kaWFtb25kSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZCA9IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKz0gZS5jb3VudCAqIGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXdhcmQpIHtcclxuICAgICAgICAgICAgbGV0IGJ0bkJveCA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgIChidG5Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSByZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgIChidG5Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGAke1xyXG4gICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKyBNYXRoLnJvdW5kKHJld2FyZENvdW50ICogZC5jb21taXNzaW9uKVxyXG4gICAgICAgICAgICB9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMDdcdTYzNjJcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN3aXRjaExhbmRMZXZlbFVwKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYmcgPSB0aGlzLmxhbmRVcExheWVyLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICBiZy5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oYmcsIHsgYWxwaGE6IDAuNzUgfSwgMTUwKTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5nZXRDaGlsZEJ5TmFtZShcImxhbmRfb3V0ZXJcIikuYWRkQ2hpbGQodGhpcy5sYW5kQm94KTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNob3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbigyKTtcclxuICAgICAgICAgICAgICAgIGUudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZS5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBlLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGUuYnVpbGRJbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgYmcsXHJcbiAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlckJveC5hZGRDaGlsZCh0aGlzLmxhbmRCb3gpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5sYW5kSWQgJiYgZS5kYXRhLmdyb3dVcFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93VGltZUJveCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLmJ1aWxkSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5sYW5kSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKGUuZGF0YS5ncm93VXBUaW1lID8gMSA6IDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlLnRvcFN0YXRlSWNvbkFuaShCb29sZWFuKGUuZGF0YS5mYXJtc2VlZHNJZCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjRBRFx1NjUzRVx1ODNCN1x1NTNENlx1NTk1Nlx1NTJCMVx1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQpXHJcbiAgICBwcml2YXRlIHBsYXlHZXRSZXdhcmRBbmkob2JqOiBHZXRGbG9hdFJld2FyZE9iaikge1xyXG4gICAgICAgIExheWEudGltZXIub25jZSgyMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYmouY2FsbEJhY2spIG9iai5jYWxsQmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvYmoubGlzdC5mb3JFYWNoKChkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBMYXlhLkJveCA9IExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oXHJcbiAgICAgICAgICAgICAgICBcImZsb2F0UmV3YXJkQm94XCIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJld2FyZFByZWZhYi5jcmVhdGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJld2FyZFByZWZhYlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgbm9kZS55ID0gb2JqLm5vZGUuZ2V0X2hlaWdodCgpICogb2JqLm5vZGUuYW5jaG9yWSAtIGkgKiA2MDtcclxuICAgICAgICAgICAgbm9kZS54ID0gb2JqLm5vZGUuZ2V0X3dpZHRoKCkgKiBvYmoubm9kZS5hbmNob3JYO1xyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGljb24uc2tpbiA9IGQub2JqPy5pY29uIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDUwIC8gaWNvbi53aWR0aDtcclxuICAgICAgICAgICAgaWNvbi5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICBub2RlLmFscGhhID0gMDtcclxuICAgICAgICAgICAgb2JqLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIChub2RlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBcInhcIiArIGQuY291bnQ7XHJcblxyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgICAgIHsgeTogbm9kZS55IC0gNDAsIGFscGhhOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIChlOiBMYXlhLkJveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIoXCJmbG9hdFJld2FyZEJveFwiLCBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3NJY29uID0gdGhpcy50b3BMYXllck9uU3RhZ2UuZ2xvYmFsVG9Mb2NhbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmxvY2FsVG9HbG9iYWwoTGF5YS5Qb2ludC5jcmVhdGUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZVNlbGYoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbG9hdEljb246IExheWEuSW1hZ2UgPSBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q3JlYXRlRnVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsb2F0UmV3YXJkSWNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb2F0UmV3YXJkSWNvbi5jcmVhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXRSZXdhcmRJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24uc2tpbiA9IGQub2JqLmljb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5wb3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUG9zSWNvbi54ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyMCAqIChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQb3NJY29uLnkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIwICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24uc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcExheWVyT25TdGFnZS5hZGRDaGlsZChmbG9hdEljb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi56T3JkZXIgPSA5OTk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3BJY29uOiBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZC5wb3NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcEljb24gPSB0aGlzLnRvcEdvbGRJY29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcEljb24gPSB0aGlzLnRvcERpYW1vbmRJY29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcEljb24gPSB0aGlzLndhcmVob3VzZUJ0bjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcEdvbGRJY29uUG9zID0gdG9wSWNvbi5sb2NhbFRvR2xvYmFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5Qb2ludCh0b3BJY29uLndpZHRoIC8gMiwgdG9wSWNvbi5oZWlnaHQgLyAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy50b3BMYXllck9uU3RhZ2UuZ2xvYmFsVG9Mb2NhbCh0b3BHb2xkSWNvblBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiBsb2NhbFBvcy54LCB5OiBsb2NhbFBvcy55IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrSW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGU6IExheWEuSW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlcihcImZsb2F0UmV3YXJkSWNvblwiLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmxvYXRJY29uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNTAgKiB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbbm9kZV1cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICA1MCAqIGksXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IE9yZGVyQmFzZSwgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vL2NsYXNzIE9yZGVyVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6b3JkZXJMaXN0LCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZSx9Ki9cclxuICAgIHByaXZhdGUgb3JkZXJMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Mb2NrUmVzLCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU2MzA5XHU5NEFFXHU2NzJBXHU1QjhDXHU2MjEwXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgYnRuTG9ja1Jlczogc3RyaW5nID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5SZXNDdXIsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTYzMDlcdTk0QUVcdTVGNTNcdTUyNERcdTcyQjZcdTYwMDFcdTYzMDlcdTk0QUVcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBidG5SZXNDdXI6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBkYXRhTGlzdDogT3JkZXJCYXNlW107XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcIm9yZGVyXCIpLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QuYXJyYXkgPSB0aGlzLmRhdGFMaXN0O1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVyTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyTGlzdChjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuZGF0YUxpc3RbaV0sXHJcbiAgICAgICAgICAgIHJld2FyZDogUmV3YXJkQ3VycmVuY3lCYXNlLFxyXG4gICAgICAgICAgICByZXdhcmRDb3VudDogbnVtYmVyID0gMCxcclxuICAgICAgICAgICAgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJvcmRlcl9sdlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7ZC5pZH1cdTdFQTdcdThCQTJcdTUzNTVgO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDQ7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtX1wiICsgeCkgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgICAgIGlmIChkLmNvbmRpdGlvblt4XSkge1xyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmNvbmRpdGlvblt4XS5wbGFudC5pY29uO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuaWQgPCBVc2VySW5mby5vcmRlckxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWxcclxuICAgICAgICAgICAgICAgICAgICApLnRleHQgPSBgJHtkLmNvbmRpdGlvblt4XS5jb3VudH0vJHtkLmNvbmRpdGlvblt4XS5jb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID0gODc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgMC8ke2QuY29uZGl0aW9uW3hdLmNvdW50fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA4NyAqICgwIC8gZC5jb25kaXRpb25beF0uY291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZC5jb25kaXRpb25beF0ucGxhbnQuZ2Fpbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUub2JqLmlkID09PSBDb25maWdHYW1lLmRpYW1vbmRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkID0gZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArPSBlLmNvdW50ICogZC5jb25kaXRpb25beF0uY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoZC5pZCA+IFVzZXJJbmZvLm9yZGVyTGV2ZWwpIHtcclxuICAgICAgICAgICAgLy9cdTY3MkFcdTZGQzBcdTZEM0JcclxuICAgICAgICAgICAgYnRuLnNraW4gPSB0aGlzLmJ0bkxvY2tSZXM7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZC5pZCA9PSBVc2VySW5mby5vcmRlckxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NUY1M1x1NTI0RFxyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSB0aGlzLmJ0blJlc0N1cjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vXHU1REYyXHU1QjhDXHU2MjEwXHJcbiAgICAgICAgICAgICAgICBidG4uZ3JheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXdhcmQpIHtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgKyR7XHJcbiAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgIH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk9yZGVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9jbGFzcyBTZXR0aW5nVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU2V0dGluZ1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBGZWVkQmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZlZWREYXRhQmFzZSB7XHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBGZWVkQmFzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk1MDFcdTVCOUEgKi9cclxuICAgIGxvY2s6IGJvb2xlYW47XHJcbn1cclxuLyoqXHJcbiAqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVxyXG4gKi9cclxuY2xhc3MgRmVlZFNlcnZpY2Uge1xyXG4gICAgLyoqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbGlzdDogRmVlZERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjU3MFx1NjM2RVx1NTIxRFx1NTlDQlx1NTMxNlxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcImZlZWRcIikubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IGQsXHJcbiAgICAgICAgICAgICAgICBsb2NrOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGZWVkU2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGV0QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBldERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTVCQTBcdTcyNjlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFBldEJhc2U7XHJcbiAgICAvKiogXHU5NTAxXHU1QjlBICovXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBQZXRTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFBldERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYmFzZTogZCxcclxuICAgICAgICAgICAgICAgIGxvY2s6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUGV0U2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCB7IEZlZWRCYXNlLCBQbGFudEJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcInNyYy9jb21tb24vVG9vbHNcIjtcclxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBGZWVkU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0ZlZWRTZXJ2aWNlXCI7XHJcbmltcG9ydCBQZXRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZVwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3BWaWV3RGF0YSB7XHJcbiAgICAvKiogXHU3NTRDXHU5NzYydGFnXHU0RTBCXHU2ODA3aWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFICovXHJcbiAgICBwYXJtPzogYW55O1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Cb3hUb3AsIHRpcHM6XCJcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTUyMTdcdTg4NjhcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJ0bkJveFRvcDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tQm94LCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21Cb3g6IExheWEuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWVkRGVzYywgdGlwczpcIlx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VlZERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZVRpbWUsIHRpcHM6XCJcdTYyMTBcdTcxOUZcdTY1RjZcdTk1RjRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZVRpbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZUdhaW5Cb3gsIHRpcHM6XCJcdTY1MzZcdTc2Q0FcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZUdhaW5Cb3g6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvY2tCdG5Cb3gsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTYzMDlcdTk0QUVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvY2tCdG5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtQnV5QnRuLCB0aXBzOlwiXHU4RDJEXHU0RTcwXHU2MzA5XHU5NEFFXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtQnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWRCdXlCdG4sIHRpcHM6XCJcdTk5NzJcdTY1OTlcdThEMkRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZlZWRCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWREZXNjLCB0aXBzOlwiXHU5OTcyXHU2NTk5XHU2M0NGXHU4RkYwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBmZWVkRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTVCQTBcdTcyNjlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRJY29uLCB0aXBzOlwiXHU1QkEwXHU3MjY5aWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0SWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0RGVzYywgdGlwczpcIlx1NUJBMFx1NzI2OVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0RGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0TmFtZSwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0TmFtZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlNYXgsIHRpcHM6XCJcdTRGNTNcdTUyOUJcdTRFMEFcdTk2NTBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5TWF4OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRCdXRCdG4sIHRpcHM6XCJcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldEJ1dEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTk0QjFcdTVFODRcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaWFtb25kRm9udCwgdGlwczpcIlx1NzUyOFx1NjIzN1x1OTRCQlx1NzdGM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZGlhbW9uZEZvbnQ6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlTGlzdCwgdGlwczpcIlx1OTRCMVx1NUU4NFx1NjNEMFx1NzNCMFx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTY1ODdcdTVCNTdcdThENDRcdTZFOTBcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgYnRuVG9wUmVzTGlzdDogc3RyaW5nW11bXSA9IFtcclxuICAgICAgICBbXCJnYW1lL2ltZ19zZWVkc05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19zZWVkc1NlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19wZXROb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfcGV0U2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX2Zvb2RuTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX2Zvb2RuU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX2JhbmtOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfYmFua1NlbGVjdGVkLnBuZ1wiXSxcclxuICAgIF07XHJcbiAgICAvKiogXHU5ODc2XHU5MEU4XHU1MjA3XHU2MzYyXHU2ODA3XHU3QjdFXHU5MDA5XHU2MkU5XHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHRvcEJ0blNlbGVjdEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTU0Nlx1NTRDMVx1NTIxN1x1ODg2OFx1NzBCOVx1NTFGQlx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdFNlbGVjdEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTU0Nlx1NTRDMVx1NTIxN1x1ODg2OFx1ODBDQ1x1NjY2Rlx1N0VCOVx1NzQwNiAqL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsZWN0Qmc6IHN0cmluZ1tdID0gW1wiZ2FtZS9pbWdfcGV0YmFnTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3BldGJhZ1NlbGVjdGVkLnBuZ1wiXTtcclxuXHJcbiAgICAvKiogXHU1RjUzXHU1MjREXHU5MDA5XHU2MkU5XHU3Njg0XHU1QkEwXHU3MjY5XHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHNlbGVjdFBldEluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkYXRhOiBTaG9wVmlld0RhdGE7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVJdGVtKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25TZWxlY3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnByaWNlTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVQcmljZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25QcmljZVNlbGVjdCk7XHJcblxyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5LndhdGNoKFVzZXJJbmZvLCB0aGlzKS5rZXkoXCJkaWFtb25kXCIsICh2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbW9uZEZvbnQudmFsdWUgPSB2O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmVkKGU6IFNob3BWaWV3RGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IGU/LmlkIHx8IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3BCdG5TdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU5MDA5XHU0RTJEXHU2NUY2XHU3Njg0XHU0RTBCXHU2ODA3XHJcbiAgICAgKiBAcGFyYW0gZSBcdTkwMDlcdTRFMkRcdTc2ODRcdTRFMEJcdTY4MDdcclxuICAgICAqL1xyXG4gICAgb25TZWxlY3QoZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCA9IGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTc5Q0RcdTVCNTBcdTYyMTZcdTk5NkVcdTY1OTlcdTUyMTdcdTg4NjhcdTY1NzBcdTYzNkVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0RGF0YUxpc3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUGxhbnRTZXJ2aWNlLmxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgaWYgKCFGZWVkU2VydmljZS5saXN0Lmxlbmd0aCkgRmVlZFNlcnZpY2UuaW5pdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gRmVlZFNlcnZpY2UubGlzdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMzJcdTY3RDNcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTc2ODRcdTUyMTdcdTg4NjhcclxuICAgICAqIEBwYXJhbSBjZWxsIFx1NTIxN1x1ODg2OFx1ODI4Mlx1NzBCOVxyXG4gICAgICogQHBhcmFtIGluZGV4IFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGluZGV4KSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbaW5kZXhdO1xyXG4gICAgICAgIGxldCBwcmljZUJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBsb2NrSWNvbiA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJsb2NrX2ljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoIWQpIHJldHVybiBjb25zb2xlLndhcm4oXCJcdTY1NzBcdTYzNkVcdTRFMjJcdTU5MzFcIik7XHJcbiAgICAgICAgaWYgKGQubG9jaykge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbG9ja0ljb24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NrSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcmljZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJpY2VCb3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICBpY29uID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPFBsYW50QmFzZT5kLmJhc2UpLnNlZWRfcHJpY2UuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gKDxQbGFudEJhc2U+ZC5iYXNlKS5zZWVkX3ByaWNlLm9iai5pY29uO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5jb3VudDtcclxuICAgICAgICAgICAgICAgIGljb24gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKHByaWNlQm94LmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gY291bnQgKyBcIlwiO1xyXG4gICAgICAgICAgICAocHJpY2VCb3guZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkX2ljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGljb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuYmFzZS5pY29uO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gZC5iYXNlLm5hbWU7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMV07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0RGVzYygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NEY0RVx1OTBFOFx1RkYwQ1x1OTAwOVx1NjJFOVx1NzI2OVx1NTRDMVx1NjVGNlx1NzY4NFx1NjU3MFx1NjM2RVx1NjYzRVx1NzkzQVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdERlc2MoKSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgICAgICAgICAodGhpcy5zZWVkRGVzYy5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2MucmVwbGFjZShcIiZcIiwgKDxGZWVkQmFzZT5kLmJhc2UpLnZpdGFsaXR5ICsgXCJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZERlc2MudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBib3ggPSB0aGlzLmZlZWRCdXlCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0LmNvdW50ICsgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgICAgICBsZXQgYmFzZSA9IGQuYmFzZSBhcyBQbGFudEJhc2U7XHJcbiAgICAgICAgKHRoaXMuc2VlZERlc2MucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZlZWREZXNjLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZWREZXNjLnRleHQgPSBiYXNlLmRlc2M7XHJcbiAgICAgICAgdGhpcy5tYXR1cmVUaW1lLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKGJhc2UubWF0dXJlX3RpbWUpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUJ1eUJ0bi52aXNpYmxlID0gIWQubG9jaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1CdXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2NrQnRuQm94LnZpc2libGUgPSBkLmxvY2s7XHJcbiAgICAgICAgdGhpcy5sb2NrQnRuQm94LmFjdGl2ZSA9IGQubG9jaztcclxuICAgICAgICBsZXQgZ2Fpbkxpc3QgPSBiYXNlLmdhaW47XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Cb3ggPSB0aGlzLm1hdHVyZUdhaW5Cb3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgICAgIGljb24gPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgZ2FpbkRhdGEgPSBnYWluTGlzdFt4IC0gMV07XHJcbiAgICAgICAgICAgIGlmICh4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGJhc2UuaGFydmVzdDtcclxuICAgICAgICAgICAgICAgIGljb24gPSBiYXNlLmljb247XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FpbkRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGljb24gPSBnYWluRGF0YS5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gZ2FpbkRhdGEuY291bnQgKiBiYXNlLmhhcnZlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIChpdGVtQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gaWNvbjtcclxuICAgICAgICAgICAgKGl0ZW1Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gXCJ4XCIgKyBjb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBib3ggPSB0aGlzLmxvY2tCdG5Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ1bmxvY2tfYnV5XCIpLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xyXG5cclxuICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gYmFzZS51bmxvY2tfY29zdD8ub2JqPy5pY29uO1xyXG4gICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGJhc2UudW5sb2NrX2Nvc3Q/LmNvdW50ICsgXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWVkXCI6XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwicGV0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJmZWVkXCI6XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYmFua1wiOlxyXG4gICAgICAgICAgICAgICAgbGV0IHRvcEJ0bkluZGV4ID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRJbmRleChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCAhPSB0b3BCdG5JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPSBOdW1iZXIodG9wQnRuSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvcEJ0blN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ1eV9idG5cIjpcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnNvdyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInNvd1wiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLnBhcm0/LmxhbmRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VlZHNJZDogdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0uYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwodGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVubG9ja19idXlcIjpcclxuICAgICAgICAgICAgY2FzZSBcImFkX3VubG9ja1wiOlxyXG4gICAgICAgICAgICAgICAgUGxhbnRTZXJ2aWNlLmxpc3RbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XS5sb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmNoYW5nZUl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIFBsYW50U2VydmljZS5saXN0W3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4LS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RQZXRJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4ID0gUGV0U2VydmljZS5saXN0Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0UGV0SW5kZXggPj0gUGV0U2VydmljZS5saXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NzBCOVx1NTFGQlx1NzBCOVx1NTFGQlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRvcEJ0blN0YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5idG5Cb3hUb3AubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgbGIgPSBidG4uZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nLW1lbnVzZWxlY3RlZC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudW5vcm1hbC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQm90dG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTVFOTVcdTkwRThcdTUxODVcdTVCQjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVCb3R0b20oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvdHRvbUJveC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoeCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXRlbUJ1eUJveCA9IHRoaXMuaXRlbUJ1eUJ0bi5wYXJlbnQgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy9cdTc5Q0RcdTVCNTBcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGV0T3JGZWVkTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgxLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQZXRPckZlZWRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgyLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VMaXN0LmFycmF5ID0gWywgMSwgMSwgMV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTVCQTBcdTcyNjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVQZXQoKSB7XHJcbiAgICAgICAgaWYgKCFQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoKSBQZXRTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBsZXQgcGV0ID0gUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdO1xyXG4gICAgICAgIHRoaXMucGV0SWNvbi5za2luID0gcGV0LmJhc2UuaWNvbjtcclxuICAgICAgICB0aGlzLnBldE5hbWUudGV4dCA9IHBldC5iYXNlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5wZXREZXNjLnRleHQgPSBwZXQuYmFzZS5kZXNjO1xyXG4gICAgICAgIHRoaXMudml0YWxpdHlNYXgudmFsdWUgPSBwZXQuYmFzZS52aXRhbGl0eV9tYXggKyBcIlwiO1xyXG4gICAgICAgIGxldCBidG5fYm94ID0gdGhpcy5wZXRCdXRCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChidG5fYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gcGV0LmJhc2UuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAoYnRuX2JveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gcGV0LmJhc2UuY29zdC5jb3VudCArIFwiXCI7XHJcblxyXG4gICAgICAgIGxldCBwZXRCb3ggPSB0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDEpLFxyXG4gICAgICAgICAgICBmaW5kQm94ID0gcGV0Qm94LmdldENoaWxkQnlOYW1lKFwiZmluZF9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGJhY2tfYm94ID0gcGV0Qm94LmdldENoaWxkQnlOYW1lKFwiYmFja19ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIHN0YXJJY29uOiBMYXlhLkltYWdlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcbiAgICAgICAgICAgIHN0YXJJY29uID0gZmluZEJveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnZpc2libGUgPSB4ICogMjAgPCBwZXQuYmFzZS5zZW5zaXRpdmU7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgeCAqIDIwICsgMTAgPCBwZXQuYmFzZS5zZW5zaXRpdmUgPyBcImdhbWUvaW1nX3N0YXIucG5nXCIgOiBcImdhbWUvaW1nX2hhbGZzdGFyLnBuZ1wiO1xyXG4gICAgICAgICAgICBzdGFySWNvbiA9IGJhY2tfYm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgc3Rhckljb24udmlzaWJsZSA9IHggKiAyMCA8IHBldC5iYXNlLmFiaWxpdHk7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgeCAqIDIwICsgMTAgPCBwZXQuYmFzZS5hYmlsaXR5ID8gXCJnYW1lL2ltZ19zdGFyLnBuZ1wiIDogXCJnYW1lL2ltZ19oYWxmc3Rhci5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkxQ0RcdTdGNkVcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNldFBldE9yRmVlZExpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmdldERhdGFMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTRFMkRcdTk1RjRcdTUxODVcdTVCQjlcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTUyMDdcdTYzNjJcclxuICAgICAqIEBwYXJhbSBpIFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQ2VudGVyQm94U3RhdGUoaTogbnVtYmVyLCBzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoaSkgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KGkpIGFzIExheWEuQm94KS5hY3RpdmUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5NEIxXHU1RTg0XHU5MDA5XHU2MkU5XHJcbiAgICAgKiBAcGFyYW0gZSBcdTRFMEJcdTY4MDdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvblByaWNlU2VsZWN0KGU6IG51bWJlcikge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTRCMVx1NUU4NFx1NjU3MFx1NjM2RVx1NkUzMlx1NjdEM1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVByaWNlSXRlbShjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wcmljZUxpc3Quc2VsZWN0ZWRJbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBcImdhbWUvaW1nX3ByaWNlc2VsZWN0ZWQucG5nXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID0gXCJnYW1lL2ltZ19wcmljZW5vcm1hbC5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgU2lnbkluVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbkluVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2lnbkluVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9kZWZhdWx0IGNsYXNzIFNwZWVkVXBWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVlZFVwVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNwZWVkVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uIH0gZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4uL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuLi9jb3JlL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgVGFza1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aW1hZ2UsIHRpcHM6XCJcdTVFMDNcdTVDMTRcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgaW1hZ2U6IExheWEuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGdhbWU6IHN0cmluZyA9IFwiMTIxMjEyXCI7XHJcblxyXG4gICAgQEV2ZW50T24oXCJhYVwiKVxyXG4gICAgbXlFdmVudChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhYVwiLCBlLCB0aGlzLmltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSwgeyBXYXJlSG91c2VEYXRhIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcblxyXG4vKipcclxuICogXHU0RUQzXHU1RTkzXHJcbiAqL1xyXG4vL0ZpZWxkTGV2ZWxVcFZpZXcgV2FyZWhvdXNlVmlldyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhcmVob3VzZVZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU3MjY5XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTmFtZSwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbU5hbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1EZXNjLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxXHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUljb24sIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxDb3VudExiLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxXHU1MUZBXHU1NTJFXHU2NTcwXHU5MUNGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsbENvdW50TGI6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsUHJpY2VMYiwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NTFGQVx1NTUyRVx1NEVGN1x1NjgzQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxQcmljZUxiOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbFByaWNlSWNvbiwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NTFGQVx1NTUyRVx1NEVGN1x1NjgzQ2ljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsUHJpY2VJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBXYXJlSG91c2VEYXRhW11bXSA9IFtdO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMSBcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbUluZGV4OiBzdHJpbmcgPSBcIjAsMFwiO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMVx1NjU3MFx1NjM2RSAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtRGF0YTogV2FyZUhvdXNlRGF0YTtcclxuICAgIC8qKiBcdTkwMDlcdTRFMkRcdTUxRkFcdTU1MkVcdTcyNjlcdTU0QzFcdTc2ODRcdTY1NzBcdTkxQ0YgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbVNlbGxDb3VudDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUzNTVcdTRFRjcgKi9cclxuICAgIHByaXZhdGUgdW5pdFByaWNlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVySXRlbUxpc3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG5cclxuICAgICAgICBsZXQgaSA9IDAsXHJcbiAgICAgICAgICAgIHkgPSAwO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhTGlzdFt5XSkgdGhpcy5kYXRhTGlzdFt5XSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFMaXN0W3ldLnB1c2goZCk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaWYgKGkgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgICAgIHkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5kYXRhTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckl0ZW1MaXN0KGNlbGw6IExheWEuQm94LCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YUxpc3RbaV07XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjZWxsLmdldENoaWxkQnlOYW1lKGBpdGVtXyR7eH1gKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAgICAgaWYgKGRhdGFbeF0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmRhdGFTb3VyY2UgPSBgJHtpfSwke3h9YDtcclxuICAgICAgICAgICAgICAgIGxldCBpY29uID0gaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgICAgIGljb24uc2tpbiA9IGRhdGFbeF0uYmFzZS5pY29uO1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWxcclxuICAgICAgICAgICAgICAgICkudGV4dCA9IGAke2RhdGFbeF0uYmFzZS5uYW1lfV8ke2RhdGFbeF0uY291bnR9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggJiYgdGhpcy5zZWxlY3RJdGVtSW5kZXggPT0gaXRlbS5kYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhpY29uLCB7IHk6IDAgfSwgMTUwLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtRGF0YSA9IGRhdGFbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZXNjKGRhdGFbeF0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpY29uLnkgPSA1NjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWNvbi55ICE9IDU2KSBMYXlhLlR3ZWVuLnRvKGljb24sIHsgeTogNTYgfSwgMTUwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8xXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbUluZGV4ID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7IC8vIFx1OEZEOVx1OTFDQ1x1OTcwMFx1ODk4MVx1NEYxOFx1NTMxNlx1NzNCMFx1NTcyOFx1NTA1QVx1NzY4NFx1NjYyRlx1NTIzN1x1NjVCMFx1NjU3NFx1NEUyQVx1NTIxN1x1ODg2OFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA+IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlZHVjZVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50LS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50IDwgMSkgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUxRkFcdTUxRkFcdTU1MkVcdTRGRTFcdTYwNkZcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVEZXNjKGQ6IFdhcmVIb3VzZURhdGEpIHtcclxuICAgICAgICB0aGlzLml0ZW1JY29uLnNraW4gPSBkLmJhc2UuaWNvbjtcclxuICAgICAgICB0aGlzLml0ZW1OYW1lLnRleHQgPSBkLmJhc2UubmFtZTtcclxuICAgICAgICB0aGlzLml0ZW1EZXNjLnRleHQgPSBkLmJhc2UuZGVzYztcclxuICAgICAgICBsZXQgcHJpY2U6IFJld2FyZEN1cnJlbmN5QmFzZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGQuYmFzZS5nYWluLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkLmJhc2UuZ2Fpblt4XS5vYmouaWQgPT0gMTAwMSkge1xyXG4gICAgICAgICAgICAgICAgcHJpY2UgPSBkLmJhc2UuZ2Fpblt4XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IE1hdGguY2VpbChkLmNvdW50IC8gMik7XHJcbiAgICAgICAgdGhpcy51bml0UHJpY2UgPSBwcmljZS5jb3VudDtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsUHJpY2VJY29uLnNraW4gPSBwcmljZS5vYmouaWNvbjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1M0VGXHU0RUU1XHU1MUZBXHU1NTJFXHU3Njg0XHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlU2VsZWN0U2VsbENvdW50KCkge1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQgPSB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKyBcIlwiO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxQcmljZUxiLnRleHQgPSBcIlx1NjAzQlx1OEJBMVx1RkYxQVwiICsgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICogdGhpcy51bml0UHJpY2U7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQnV0dG9uXCJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi9jb21wb25lbnRzL1ZpZXdTaG93QW5pXCJcbmltcG9ydCBBZGRMYW5kVmlldyBmcm9tIFwiLi92aWV3L0FkZExhbmRWaWV3XCJcbmltcG9ydCBGaWVsZExldmVsVXBWaWV3IGZyb20gXCIuL3ZpZXcvRmllbGRMZXZlbFVwVmlld1wiXG5pbXBvcnQgRnJpZW5kc0Rlc2NWaWV3IGZyb20gXCIuL3ZpZXcvRnJpZW5kc0Rlc2NWaWV3XCJcbmltcG9ydCBGcmllbmRzUmV3YXJkVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNSZXdhcmRWaWV3XCJcbmltcG9ydCBGcmllbmRzVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNWaWV3XCJcbmltcG9ydCBIaW50VmlldyBmcm9tIFwiLi92aWV3L0hpbnRWaWV3XCJcbmltcG9ydCBMb2dpblZpZXcgZnJvbSBcIi4vdmlldy9Mb2dpblZpZXdcIlxuaW1wb3J0IE1haWxWaWV3IGZyb20gXCIuL3ZpZXcvTWFpbFZpZXdcIlxuaW1wb3J0IE1haW5WaWV3IGZyb20gXCIuL3ZpZXcvTWFpblZpZXdcIlxuaW1wb3J0IEZpZWxkQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIlxuaW1wb3J0IE9yZGVyVmlldyBmcm9tIFwiLi92aWV3L09yZGVyVmlld1wiXG5pbXBvcnQgU2V0dGluZ1ZpZXcgZnJvbSBcIi4vdmlldy9TZXR0aW5nVmlld1wiXG5pbXBvcnQgU2hvcFZpZXcgZnJvbSBcIi4vdmlldy9TaG9wVmlld1wiXG5pbXBvcnQgU2lnbkluVmlldyBmcm9tIFwiLi92aWV3L1NpZ25JblZpZXdcIlxuaW1wb3J0IFNwZWVkVXBWaWV3IGZyb20gXCIuL3ZpZXcvU3BlZWRVcFZpZXdcIlxuaW1wb3J0IFRhc2tWaWV3IGZyb20gXCIuL3ZpZXcvVGFza1ZpZXdcIlxuaW1wb3J0IFdhcmVob3VzZVZpZXcgZnJvbSBcIi4vdmlldy9XYXJlaG91c2VWaWV3XCJcclxuLypcclxuKiBcdTZFMzhcdTYyMEZcdTUyMURcdTU5Q0JcdTUzMTZcdTkxNERcdTdGNkU7XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTEwODA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xOTIwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cIm1pZGRsZVwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJjZW50ZXJcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj10cnVlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJjb21wb25lbnRzL0J1dHRvbi50c1wiLEJ1dHRvbik7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvVmlld1Nob3dBbmkudHNcIixWaWV3U2hvd0FuaSk7XG4gICAgICAgIHJlZyhcInZpZXcvQWRkTGFuZFZpZXcudHNcIixBZGRMYW5kVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRmllbGRMZXZlbFVwVmlldy50c1wiLEZpZWxkTGV2ZWxVcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNEZXNjVmlldy50c1wiLEZyaWVuZHNEZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHNcIixGcmllbmRzUmV3YXJkVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1ZpZXcudHNcIixGcmllbmRzVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvSGludFZpZXcudHNcIixIaW50Vmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTG9naW5WaWV3LnRzXCIsTG9naW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9NYWlsVmlldy50c1wiLE1haWxWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9NYWluVmlldy50c1wiLE1haW5WaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9GaWVsZENvbXBvbmVudC50c1wiLEZpZWxkQ29tcG9uZW50KTtcbiAgICAgICAgcmVnKFwidmlldy9PcmRlclZpZXcudHNcIixPcmRlclZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NldHRpbmdWaWV3LnRzXCIsU2V0dGluZ1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1Nob3BWaWV3LnRzXCIsU2hvcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NpZ25JblZpZXcudHNcIixTaWduSW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9TcGVlZFVwVmlldy50c1wiLFNwZWVkVXBWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9UYXNrVmlldy50c1wiLFRhc2tWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9XYXJlaG91c2VWaWV3LnRzXCIsV2FyZWhvdXNlVmlldyk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCIuL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcIi4vY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcIi4vY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuY2xhc3MgTWFpbiB7XHJcbiAgICAvKiogXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcdTUyMTdcdTg4NjggKi9cclxuICAgIHN0YXRpYyBjdXN0b21SZW5kZXJJRDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1x1NjgzOVx1NjM2RUlERVx1OEJCRVx1N0Y2RVx1NTIxRFx1NTlDQlx1NTMxNlx1NUYxNVx1NjRDRVxyXG4gICAgICAgIGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuICAgICAgICBlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuICAgICAgICBMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcbiAgICAgICAgLy9cdTUxN0NcdTVCQjlcdTVGQUVcdTRGRTFcdTRFMERcdTY1MkZcdTYzMDFcdTUyQTBcdThGN0RzY2VuZVx1NTQwRVx1N0YwMFx1NTczQVx1NjY2RlxyXG4gICAgICAgIExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcbiAgICAgICAgLy9cdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDhcdTkwMUFcdThGQzdJREVcdThCQkVcdTdGNkVcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdUZGMENcdTYyMTZcdTgwMDV1cmxcdTU3MzBcdTU3NDBcdTU4OUVcdTUyQTBkZWJ1Zz10cnVlXHU1M0MyXHU2NTcwXHVGRjBDXHU1NzQ3XHU1M0VGXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA5XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcbiAgICAgICAgTGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG5cclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1OEQ0NFx1NkU5MFx1NzI0OFx1NjcyQ1x1NjNBN1x1NTIzNlx1RkYwQ3ZlcnNpb24uanNvblx1NzUzMUlERVx1NTNEMVx1NUUwM1x1NTI5Rlx1ODBGRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NEU1Rlx1NEUwRFx1NUY3MVx1NTRDRFx1NTQwRVx1N0VFRFx1NkQ0MVx1N0EwQlxyXG4gICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksXHJcbiAgICAgICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT05cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1NTkyN1x1NUMwRlx1NTZGRVx1NjYyMFx1NUMwNFx1RkYwQ1x1NTJBMFx1OEY3RFx1NUMwRlx1NTZGRVx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NTNEMVx1NzNCMFx1NUMwRlx1NTZGRVx1NTcyOFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1OTFDQ1x1OTc2Mlx1RkYwQ1x1NTIxOVx1NEYxOFx1NTE0OFx1NTJBMFx1OEY3RFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1RkYwQ1x1ODAwQ1x1NEUwRFx1NjYyRlx1NUMwRlx1NTZGRVxyXG4gICAgICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXHJcbiAgICAgICAgICAgIFwiZmlsZWNvbmZpZy5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ29uZmlnTG9hZGVkKCkge1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHJcbiAgICAgICAgQ29uZmlnW1wiY3VzdG9tUmVuZGVySURcIl0gPSBbXTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LmluaXQoQ29uZmlnR2FtZS5iYXNlVXJsKTtcclxuXHJcbiAgICAgICAgLy8gTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL2F1ZGlvL2RyYXcubXAzXCIpO1xyXG4gICAgICAgIC8vXHU1OTgyXHU2NzlDXHU5MDFBXHU4RkM3XHU4QkJFXHU1OTA3XHU5NzU5XHU5N0YzXHU5NTJFXHU4QkE5XHU5N0YzXHU5ODkxXHU4MUVBXHU1MkE4XHU4RERGXHU5NjhGXHU4QkJFXHU1OTA3XHU5NzU5XHU5N0YzXHUzMDAyXHU5NzAwXHU4OTgxXHU1QzA2dXNlQXVkaW9NdXNpY1x1OEJCRVx1N0Y2RVx1NEUzQWZhbHNlXHUzMDAyXHJcbiAgICAgICAgLy8gU291bmRNYW5hZ2VyLnVzZUF1ZGlvTXVzaWM9ZmFsc2VcdUZGMUJcclxuICAgICAgICAvLyBMYXlhLlNvdW5kTWFuYWdlci5wbGF5TXVzaWMoUmVzLmF1ZGlvcy53aW4pO1xyXG5cclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oUmVzLnZpZXdzLkxvZ2luVmlldywge1xyXG4gICAgICAgICAgICAgICAgc2hvd0xvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6IChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdEdhbWVEYXRhKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5WaWV3LnNldExvYWRpbmdQYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9cdTU0MEVcdTY3MUZcdTRGMThcdTUzMTZcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS5WaWV3LnNob3dMb2FkaW5nUGFnZShudWxsLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSg5OTk5OTk5OTk5OTk5OTkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIFJlcy5zY2VuZXMsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlcy5zY2VuZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhlKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0R2FtZURhdGEoZDogTmV0SW5pdCkge31cclxufVxyXG4vL1x1NkZDMFx1NkQzQlx1NTQyRlx1NTJBOFx1N0M3QlxyXG5uZXcgTWFpbigpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR08sTUFBVztBQUFYLFlBQVcsWUFBWDtBQUVILGtDQUFnQjtBQUdoQixpQ0FBZTtBQXNCZixvQ0FBa0I7QUFBQSxLQTNCSjs7O0FDRVYsTUFBSztBQUFMLFlBQUssUUFBTDtBQUdBLDRCQUFjO0FBRWQsaUNBQW1CO0FBRW5CLGdDQUFrQjtBQUVsQixrQ0FBb0I7QUFFcEIsNEJBQWM7QUFFZCx5QkFBVztBQUVYLDBCQUFZO0FBRVoseUJBQVc7QUFFWCx5QkFBVztBQUVYLDBCQUFZO0FBRVosNEJBQWM7QUFFZCx5QkFBVztBQUVYLDJCQUFhO0FBRWIsNEJBQWM7QUFFZCx5QkFBVztBQUVYLDhCQUFnQjtBQUFBLEtBakNYO0FBb0NMLE1BQUs7QUFBTCxZQUFLLFNBQUw7QUFBQSxLQUFLO0FBT0wsTUFBTSxTQUFTO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNHO0FBQUEsSUFDQTtB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TUFBSyxNQUFLLFFBQU8sc0JBQU0sUUFBTyxNQUFLLGNBQWEsV0FBVSxRQUFPLG9CQUFtQixXQUFVLEtBQUksZUFBYyxPQUFNLGVBQWMsYUFBWSxpQkFBZ0Isc0JBQXFCLFFBQU8saUdBQW9CLEVBQUMsTUFBSyxNQUFLLFFBQU8sc0JBQU0sUUFBTyxNQUFLLGNBQWEsV0FBVSxRQUFPLG9CQUFtQixXQUFVLEtBQUksZUFBYyxPQUFNLGVBQWMsYUFBWSxpQkFBZ0Isc0JBQXFCLFFBQU8saUdBQW9CLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyxNQUFLLGNBQWEsWUFBVyxRQUFPLG9CQUFtQixXQUFVLEtBQUksZUFBYyxPQUFNLGVBQWMsYUFBWSxpQkFBZ0Isc0JBQXFCLFFBQU8saUdBQW9CLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyxNQUFLLGNBQWEsWUFBVyxRQUFPLG9CQUFtQixXQUFVLEtBQUksZUFBYyxPQUFNLGVBQWMsYUFBWSxpQkFBZ0Isc0JBQXFCLFFBQU8saUdBQW9CLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyxNQUFLLGNBQWEsWUFBVyxRQUFPLG9CQUFtQixXQUFVLEtBQUksZUFBYyxPQUFNLGVBQWMsYUFBWSxpQkFBZ0Isc0JBQXFCLFFBQU8saUdBQW9CLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyxNQUFLLGNBQWEsWUFBVyxRQUFPLG9CQUFtQixXQUFVLEtBQUksZUFBYyxPQUFNLGVBQWMsYUFBWSxpQkFBZ0Isc0JBQXFCLFFBQU8saUdBQW9CLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyxNQUFLLGNBQWEsWUFBVyxRQUFPLG9CQUFtQixXQUFVLEtBQUksZUFBYyxPQUFNLGVBQWMsYUFBWSxpQkFBZ0Isc0JBQXFCLFFBQU8saUdBQW9CLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyxNQUFLLGNBQWEsWUFBVyxRQUFPLG9CQUFtQixXQUFVLEtBQUksZUFBYyxPQUFNLGVBQWMsYUFBWSxpQkFBZ0Isc0JBQXFCLFFBQU8sa0dBQXFCLE9BQU0sQ0FBQyxFQUFDLE1BQUssTUFBSyxRQUFPLHNCQUFNLFFBQU8sTUFBSyxnQkFBZSxLQUFJLG9CQUFtQixJQUFHLFFBQU8sYUFBWSxRQUFPLHdFQUFnQixhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sc0JBQU0sUUFBTyxNQUFLLGdCQUFlLEtBQUksb0JBQW1CLElBQUcsUUFBTyxjQUFhLFFBQU8sd0VBQWdCLGFBQVksSUFBRyxXQUFVLE1BQUksRUFBQyxNQUFLLE1BQUssUUFBTyxzQkFBTSxRQUFPLE1BQUssZ0JBQWUsS0FBSSxvQkFBbUIsSUFBRyxRQUFPLGNBQWEsUUFBTyx3RUFBZ0IsYUFBWSxJQUFHLFdBQVUsTUFBSSxFQUFDLE1BQUssTUFBSyxRQUFPLGtDQUFRLFFBQU8sTUFBSyxnQkFBZSxLQUFJLG9CQUFtQixJQUFHLFFBQU8sY0FBYSxRQUFPLHdFQUFnQixhQUFZLElBQUcsV0FBVSxNQUFJLEVBQUMsTUFBSyxNQUFLLFFBQU8sa0NBQVEsUUFBTyxNQUFLLGdCQUFlLEtBQUksb0JBQW1CLElBQUcsUUFBTyxjQUFhLFFBQU8sd0VBQWdCLGFBQVksSUFBRyxXQUFVLE9BQUssU0FBUSxDQUFDLEVBQUMsTUFBSyxHQUFFLGNBQWEsT0FBTSxhQUFZLFlBQVUsRUFBQyxNQUFLLEdBQUUsY0FBYSxPQUFNLGFBQVksMEJBQXdCLEVBQUMsTUFBSyxHQUFFLGNBQWEsUUFBTyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssR0FBRSxjQUFhLFFBQU8sYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxHQUFFLGNBQWEsUUFBTyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssR0FBRSxjQUFhLFFBQU8sYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLEdBQUUsY0FBYSxRQUFPLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxHQUFFLGNBQWEsUUFBTyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE9BQU0sYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsS0FBSSxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksaUNBQStCLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLEtBQUksYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksaUNBQStCLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGlDQUErQixFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVkscUNBQW1DLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGlDQUErQixFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG9DQUFrQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxpQ0FBK0IsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWdDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLHFDQUFtQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxrQ0FBZ0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLEtBQUksYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBaUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksb0NBQWtDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxxQ0FBbUMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFpQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWlDLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFnQyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxvQ0FBa0MsUUFBTyxJQUFHLGFBQVksQ0FBQyxFQUFDLE1BQUssR0FBRSxVQUFTLFVBQVMsUUFBTyxVQUFTLFFBQU8sUUFBTSxFQUFDLE1BQUssR0FBRSxVQUFTLGFBQVksUUFBTyxjQUFhLFFBQU8sS0FBRyxFQUFDLE1BQUssR0FBRSxVQUFTLGFBQVksUUFBTyxjQUFhLFFBQU8sS0FBRyxFQUFDLE1BQUssR0FBRSxVQUFTLGFBQVksUUFBTyxjQUFhLFFBQU8sS0FBRyxFQUFDLE1BQUssR0FBRSxVQUFTLGFBQVksUUFBTyxjQUFhLFFBQU8sS0FBRyxFQUFDLE1BQUssR0FBRSxVQUFTLGFBQVksUUFBTyxjQUFhLFFBQU8sS0FBRyxFQUFDLE1BQUssR0FBRSxVQUFTLGFBQVksUUFBTyxjQUFhLFFBQU8sS0FBRyxFQUFDLE1BQUssR0FBRSxVQUFTLGFBQVksUUFBTyxjQUFhLFFBQU8sS0FBRyxF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
