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
    baseUrl: false ? "//127.0.0.1:3000" : "http://game.ahd168.com:3000",
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
  var Table = { "task": [{ "id": 1001, "reward": "1001:50", "times": 1, "title": "\u7B7E\u5230\u9886\u94BB\u77F3", "desc": "\u770B\u89C6\u9891\u7B7E\u5230", "icon": null }, { "id": 1002, "reward": "1001:100", "times": 10, "title": "\u83DC\u5730\u65BD\u80A510\u6B21", "desc": "\u83DC\u5730\u52A0\u901F10\u6B21", "icon": null }, { "id": 1003, "reward": "1001:50", "times": 10, "title": "\u83DC\u5730\u6536\u83B710\u6B21", "desc": "\u83DC\u5730\u6536\u83B710\u6B21", "icon": null }, { "id": 1004, "reward": "1001:50", "times": 5, "title": "\u8BBF\u53CB5\u6B21", "desc": "\u5077\u83DC5\u6B21", "icon": null }, { "id": 1005, "reward": "1001:20", "times": 3, "title": "\u5582\u517B\u72D7\u72D73\u6B21", "desc": "\u5582\u517B\u72D7\u72D73\u6B21", "icon": null }, { "id": 1006, "reward": "1001:20", "times": 5, "title": "\u8D2D\u4E70\u9972\u65995\u6B21", "desc": "\u8D2D\u4E70\u9972\u65995\u6B21", "icon": null }, { "id": 1007, "reward": "1001:20", "times": 10, "title": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "desc": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "icon": null }, { "id": 1008, "reward": "1001:30", "times": 3, "title": "\u51FA\u552E\u4F5C\u72693\u6B21", "desc": "\u51FA\u552E\u4F5C\u72693\u6B21", "icon": null }, { "id": 1009, "reward": "1001:100", "times": 5, "title": "\u6DFB\u52A0\u597D\u53CB", "desc": "\u6DFB\u52A0\u597D\u53CB5\u4E2A", "icon": null }, { "id": 1010, "reward": "1001:50", "times": 1, "title": "\u5206\u4EAB\u5F97\u597D\u793C", "desc": "\u5206\u4EAB\u4E00\u6B21", "icon": null }, { "id": 1011, "reward": "1001:30", "times": 3, "title": "\u6307\u5B9A\u79CD\u690D", "desc": "\u79CD\u690D\u6307\u5B9A\u79CD\u5B50", "icon": null }, { "id": 1012, "reward": "1001:50", "times": 10, "title": "\u770B\u89C6\u9891", "desc": "\u770B\u89C6\u989110\u6B21", "icon": null }], "signIn": [{ "id": 1001, "days": 7, "reward": "1001:20000" }, { "id": 1002, "days": 10, "reward": "1001:30000" }, { "id": 1003, "days": 15, "reward": "1001:50000" }, { "id": 1004, "days": 20, "reward": "1001:80000" }, { "id": 1005, "days": 30, "reward": "1001:120000" }, { "id": 1006, "days": 50, "reward": "1001:180000" }, { "id": 1007, "days": 80, "reward": "1001:300000" }, { "id": 1008, "days": 100, "reward": "1001:350000" }, { "id": 1009, "days": 150, "reward": "1001:500000" }], "plant": [{ "id": 1001, "name": "\u6C34\u7A3B", "icon": "plant_icon/1002_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1002, "name": "\u5927\u8C46", "icon": "plant_icon/1004_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1003, "name": "\u5927\u849C", "icon": "plant_icon/1012_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "240", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1004, "name": "\u5305\u5FC3\u83DC", "icon": "plant_icon/1006_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "1~2", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1005, "name": "\u571F\u8C46", "icon": "plant_icon/1007_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1006, "name": "\u841D\u535C", "icon": "plant_icon/1005_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1007, "name": "\u5C0F\u9EA6", "icon": "plant_icon/1001_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1008, "name": "\u8FA3\u6912", "icon": "plant_icon/1010_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "600", "unlock_cost": "1002:2000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1009, "name": "\u9EC4\u74DC", "icon": "plant_icon/1011_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1010, "name": "\u8304\u5B50", "icon": "plant_icon/1013_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1011, "name": "\u80E1\u841D\u535C", "icon": "plant_icon/1008_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:4500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1012, "name": "\u5357\u74DC", "icon": "plant_icon/1014_seed.png", "seed_price": "1002:350", "gain": "1001:0,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:5000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1013, "name": "\u7389\u7C73", "icon": "plant_icon/1003_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:5500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1014, "name": "\u7518\u8517", "icon": "plant_icon/1015_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1015, "name": "\u756A\u8304", "icon": "plant_icon/1009_seed.png", "seed_price": "1002:500", "gain": "1001:0,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }], "pet": [{ "id": 1001, "name": "\u65FA\u8D22", "icon": "pet_feed/1001_dog.png", "vitality_max": 100, "vitality_consume": 10, "cost": "1002:3000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 34, "ability": 42 }, { "id": 1002, "name": "\u6C64\u5706", "icon": "pet_feed/1007_dog.png", "vitality_max": 100, "vitality_consume": 15, "cost": "1002:4000", "desc": "\u989C\u503C\u3001\u667A\u5546\u53CC\u53CC\u5728\u7EBF", "sensitive": 40, "ability": 48 }, { "id": 1003, "name": "\u8089\u5E72", "icon": "pet_feed/1009_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:4500", "desc": "\u6700\u5FE0\u8BDA\u7684\u4F19\u4F34", "sensitive": 45, "ability": 55 }, { "id": 1004, "name": "\u4E8C\u54C8", "icon": "pet_feed/1002_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:5000", "desc": "\u7EDD\u4E0D\u62C6\u5BB6\uFF01", "sensitive": 48, "ability": 60 }, { "id": 1005, "name": "\u5927\u773C\u775B", "icon": "pet_feed/1005_dog.png", "vitality_max": 100, "vitality_consume": 17, "cost": "1002:7000", "desc": "\u6D3B\u597D\u5403\u7684\u5C11", "sensitive": 50, "ability": 75 }, { "id": 1006, "name": "\u5C0F\u5C3E\u5DF4", "icon": "pet_feed/1004_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:7500", "desc": "\u6B66\u529B\u5929\u8D4B\u5DF2\u70B9\u6EE1~\u62FF\u634F\uFF01", "sensitive": 60, "ability": 80 }, { "id": 1007, "name": "\u7403\u7403", "icon": "pet_feed/1008_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u5C31\u4E24\u4E2A\u5B57\uFF0C\u542C\u8BDD\uFF01", "sensitive": 69, "ability": 85 }, { "id": 1008, "name": "\u5C0F\u767D", "icon": "pet_feed/1003_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u770B\u5BB6\u3001\u770B\u83DC\u3001\u770B\u5B69\u5B50", "sensitive": 76, "ability": 88 }, { "id": 1009, "name": "\u70B9\u70B9", "icon": "pet_feed/1006_dog.png", "vitality_max": 100, "vitality_consume": 19, "cost": "1002:10000", "desc": "\u4F60\u503C\u5F97\u62E5\u6709\uFF01", "sensitive": 85, "ability": 93 }, { "id": 1010, "name": "\u95F7\u58A9", "icon": "pet_feed/1010_dog.png", "vitality_max": 100, "vitality_consume": 30, "cost": "1002:15000", "desc": "\u957F\u5F97\u5C31\u5F88\u51F6\uFF0C\u6293\u5C0F\u5077\u66F4\u51F6", "sensitive": 90, "ability": 99 }], "order": [{ "id": 1, "commission": "0.5", "condition": "1001:2" }, { "id": 2, "commission": "0.1", "condition": "1001:1,1002:1,1003:1" }, { "id": 3, "commission": "0.03", "condition": "1012:18,1004:4,1003:5,1005:6" }, { "id": 4, "commission": "0.24", "condition": "1012:10,1003:3,1007:7,1015:9" }, { "id": 5, "commission": "0.61", "condition": "1014:6,1012:9,1010:19,1006:4" }, { "id": 6, "commission": "0.07", "condition": "1010:14,1004:2,1012:3,1001:8" }, { "id": 7, "commission": "0.43", "condition": "1012:18,1001:11,1007:7,1008:19" }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:2,1015:20" }, { "id": 9, "commission": "0.39", "condition": "1002:2,1015:10,1011:8,1003:18" }, { "id": 10, "commission": "0.22", "condition": "1006:12,1012:5,1011:14,1003:6" }, { "id": 11, "commission": "0.76", "condition": "1009:11,1004:20,1012:9,1002:10" }, { "id": 12, "commission": "0.43", "condition": "1007:16,1003:11,1012:16,1005:6" }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:18" }, { "id": 14, "commission": "0.7", "condition": "1015:18,1008:18,1006:16,1001:14" }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:1,1011:2,1001:10" }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17" }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:16,1012:19,1001:14" }, { "id": 18, "commission": 0.48, "condition": "1008:4,1011:2,1009:15,1002:5" }, { "id": 19, "commission": 0.75, "condition": "1013:1,1003:20,1014:11,1001:17" }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:2" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:4,1005:6,1007:5" }, { "id": 22, "commission": "0.4", "condition": "1015:9,1007:12,1011:5,1004:17" }, { "id": 23, "commission": 0.2, "condition": "1003:19,1014:2,1015:16,1001:14" }, { "id": 24, "commission": 0.77, "condition": "1014:3,1001:17,1008:18,1004:5" }, { "id": 25, "commission": 0.64, "condition": "1002:13,1011:1,1010:15,1007:20" }, { "id": 26, "commission": 0.03, "condition": "1002:11,1011:12,1012:2,1003:19" }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:10,1011:7" }, { "id": 28, "commission": 0.53, "condition": "1014:7,1007:12,1011:17,1003:17" }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:8" }, { "id": 30, "commission": 0.14, "condition": "1011:7,1014:9,1006:14,1004:3" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:9,1006:11" }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:2,1012:12,1008:20" }, { "id": 33, "commission": 0.2, "condition": "1012:6,1013:11,1002:13,1009:16" }, { "id": 34, "commission": 0.02, "condition": "1009:9,1010:12,1011:14,1012:2" }, { "id": 35, "commission": 0.13, "condition": "1001:18,1004:19,1013:6,1003:10" }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:7,1007:17" }, { "id": 37, "commission": 0.44, "condition": "1012:4,1010:20,1002:4,1011:11" }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18" }, { "id": 39, "commission": 0.36, "condition": "1007:8,1012:13,1004:16,1002:16" }, { "id": 40, "commission": 0.28, "condition": "1004:10,1005:10,1008:18,1011:16" }, { "id": 41, "commission": 0.18, "condition": "1010:8,1009:8,1008:7,1011:6" }, { "id": 42, "commission": 0.43, "condition": "1009:1,1005:8,1007:2,1002:13" }, { "id": 43, "commission": 0.14, "condition": "1006:1,1004:4,1014:11,1008:5" }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:18,1002:4,1007:9" }, { "id": 45, "commission": 0.11, "condition": "1012:15,1010:3,1007:3,1011:3" }, { "id": 46, "commission": 0.39, "condition": "1003:12,1007:3,1010:16,1002:14" }, { "id": 47, "commission": 0.49, "condition": "1010:14,1015:20,1003:15,1014:6" }, { "id": 48, "commission": 0.06, "condition": "1013:17,1007:14,1008:17,1001:10" }, { "id": 49, "commission": 0.48, "condition": "1002:6,1004:11,1009:12,1006:20" }, { "id": 50, "commission": 0.05, "condition": "1006:17,1012:9,1008:2,1015:11" }, { "id": 51, "commission": 0.04, "condition": "1011:8,1004:19,1002:5,1003:11" }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:10,1001:15,1004:6" }, { "id": 53, "commission": 0.08, "condition": "1014:14,1012:12,1010:1,1015:18" }, { "id": 54, "commission": 0.45, "condition": "1005:2,1002:13,1009:6,1015:17" }, { "id": 55, "commission": 0.7, "condition": "1001:3,1014:9,1005:7,1010:15" }, { "id": 56, "commission": 0.05, "condition": "1006:17,1005:19,1009:17,1003:18" }, { "id": 57, "commission": 0.67, "condition": "1007:1,1008:17,1002:16,1009:15" }, { "id": 58, "commission": 0.32, "condition": "1006:10,1008:5,1005:4,1007:9" }, { "id": 59, "commission": 0.79, "condition": "1012:5,1009:1,1013:6,1008:5" }, { "id": 60, "commission": 0.69, "condition": "1015:6,1012:7,1010:1,1001:3" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:5,1011:15,1002:7" }, { "id": 62, "commission": 0.44, "condition": "1015:1,1007:15,1011:8,1006:6" }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:7" }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:9,1004:5" }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:10,1014:20,1005:15" }, { "id": 66, "commission": 0.73, "condition": "1004:15,1008:5,1002:14,1012:14" }, { "id": 67, "commission": 0.13, "condition": "1001:16,1012:20,1011:20,1003:1" }, { "id": 68, "commission": 0.69, "condition": "1013:4,1008:3,1006:6,1007:17" }, { "id": 69, "commission": 0.37, "condition": "1015:3,1004:9,1013:7,1009:1" }, { "id": 70, "commission": 0.71, "condition": "1010:3,1004:1,1011:7,1012:11" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:6,1003:8,1015:13" }, { "id": 72, "commission": 0.31, "condition": "1005:2,1002:18,1012:19,1010:14" }, { "id": 73, "commission": 0.39, "condition": "1012:4,1006:2,1003:7,1004:2" }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:3,1001:20" }, { "id": 75, "commission": 0.18, "condition": "1006:1,1014:3,1008:12,1002:5" }, { "id": 76, "commission": 0.51, "condition": "1007:1,1012:2,1004:11,1014:2" }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:6,1012:4,1007:7" }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:12" }, { "id": 79, "commission": 0.65, "condition": "1006:6,1004:8,1007:12,1011:7" }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:4" }, { "id": 81, "commission": 0.14, "condition": "1012:10,1015:8,1002:4,1003:8" }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14" }, { "id": 83, "commission": 0.53, "condition": "1010:9,1003:8,1007:12,1015:20" }, { "id": 84, "commission": 0.62, "condition": "1005:9,1014:6,1002:18,1007:8" }, { "id": 85, "commission": 0.37, "condition": "1011:10,1001:7,1012:12,1004:12" }, { "id": 86, "commission": 0.59, "condition": "1009:5,1011:20,1006:4,1015:11" }, { "id": 87, "commission": 0.11, "condition": "1006:6,1005:9,1013:10,1014:9" }, { "id": 88, "commission": 0.08, "condition": "1008:7,1011:4,1015:12,1014:11" }, { "id": 89, "commission": 0.02, "condition": "1002:17,1003:2,1005:11,1010:14" }, { "id": 90, "commission": 0.32, "condition": "1002:19,1013:8,1007:5,1001:13" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:10,1014:10,1007:16" }, { "id": 92, "commission": 0.13, "condition": "1004:8,1011:13,1008:15,1007:9" }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:9,1006:8,1008:11" }, { "id": 94, "commission": 0.22, "condition": "1002:6,1001:17,1013:16,1005:11" }, { "id": 95, "commission": 0.15, "condition": "1005:6,1001:14,1015:4,1008:16" }, { "id": 96, "commission": 0.06, "condition": "1003:4,1001:8,1007:8,1005:18" }, { "id": 97, "commission": 0.74, "condition": "1013:12,1009:13,1006:2,1011:2" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1002:0", "gain": null }, { "id": 2, "reward": "1002:1500", "cost": "1002:10000", "gain": 0.1 }, { "id": 3, "reward": "1002:2000", "cost": "1002:30000", "gain": 0.25 }, { "id": 4, "reward": "1002:2500", "cost": "1002:50000", "gain": 0.4 }, { "id": 5, "reward": "1002:3000", "cost": "1002:100000", "gain": 0.55 }], "feed": [{ "id": 1001, "name": "\u997C\u5E72", "icon": "pet_feed/1001_feed.png", "vitality": 1, "cost": "1002:30", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1002, "name": "\u575A\u679C", "icon": "pet_feed/1002_feed.png", "vitality": 2, "cost": "1002:50", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1003, "name": "\u706B\u817F", "icon": "pet_feed/1003_feed.png", "vitality": 5, "cost": "1002:100", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1004, "name": "\u725B\u8089", "icon": "pet_feed/1004_feed.png", "vitality": 50, "cost": "1002:900", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1005, "name": "\u732A\u8089", "icon": "pet_feed/1005_feed.png", "vitality": 20, "cost": "1002:460", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1006, "name": "\u9E21\u8089", "icon": "pet_feed/1006_feed.png", "vitality": 10, "cost": "1002:270", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }], "currency": [{ "id": 1001, "name": "\u94BB\u77F3", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "\u91D1\u5E01", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_times", "value": 30 }, { "id": "all_speed_up_time", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:40000,1002:50000,1002:20000,1002:20000,1002:20000,1002:20000,1002:20000" }] };

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
    getList() {
      return this.list.sort((a, b) => {
        let tA = this.getTask(a.id), tB = this.getTask(b.id);
        return a.id + ((tA == null ? void 0 : tA.receive) ? 1e3 : 1) + ((tA == null ? void 0 : tA.times) >= a.times ? 100 : 1e3) - (b.id + ((tB == null ? void 0 : tB.receive) ? 1e3 : 1) + ((tB == null ? void 0 : tB.times) >= b.times ? 100 : 1e3));
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
      this.uid = 0;
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
            this.stealFood();
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
    stealFood() {
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
        this.vitalityBox.getChildByName("bar").width = 268 * e;
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
          core_default.view.open(Res_default.views.FriendsView);
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
          core_default.view.setOverView(true, () => {
            Laya.timer.once(300, this, () => {
              core_default.view.setOverView(false);
              this.goFriend(null);
            });
          });
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
    updateTask() {
      const box = this.taskBox, icon = box.getChildByName("icon"), amountFont = icon.getChildByName("amountFont"), desc = box.getChildByName("lb"), list = TaskService_default.getList(), task = list[0];
      if (task.receive == 1) {
        box.visible = false;
        return;
      }
      box.visible = true;
      desc.text = `\u4EFB\u52A1:${task.base.desc}(${task.times > task.base.times ? task.base.times : task.times}/${task.base.times})`;
      amountFont.value = "x" + task.base.reward.count;
      icon.skin = task.base.reward.obj.icon;
      box.width = desc.width + 100;
    }
    goToNeighbor() {
      core_default.view.setOverView(true, () => {
        HttpControl.inst.send({
          api: ApiHttp.neighbor,
          data: {
            type: ConfigGame_default.ApiTypeDefault
          },
          call: (d) => {
            this.goFriend(d);
            Laya.timer.once(300, this, () => {
              core_default.view.setOverView(false);
            });
          }
        });
      });
    }
    goFriend(d) {
      let lands = this.landList, userLands = LandService_default.list;
      let otherLands = new Map();
      if (this.isOuter) {
        this.isOuter = false;
        userLands.forEach((d2) => {
          d2.matureTimeLeft -= (Date.now() - this.outerTime) / 1e3;
          if (d2.matureTimeLeft < 0)
            d2.matureTimeLeft = 0;
        });
        this.vitalityBox.visible = false;
        this.anyDoor.visible = true;
        this.goHomeBtn.visible = false;
      } else {
        d.lands.forEach((e) => {
          otherLands.set(e.id, e);
        });
        this.isOuter = true;
        this.outerTime = Date.now();
        this.vitalityBox.visible = true;
        this.goHomeBtn.visible = true;
        this.anyDoor.visible = false;
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
    core_default.eventOn(EventMaps.update_task)
  ], MainView.prototype, "updateTask", 1);

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
