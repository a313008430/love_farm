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
    EventMaps3["update_friend_share_guide"] = "update_friend_share_guide";
    EventMaps3["update_red_dot"] = "update_red_dot";
    EventMaps3["play_get_reward"] = "play_get_reward";
    EventMaps3["play_ad_get_reward"] = "play_ad_get_reward";
    EventMaps3["go_friend_home"] = "go_friend_home";
    EventMaps3["go_home"] = "go_home";
    EventMaps3["open_friend"] = "open_friend";
    EventMaps3["plant_sow"] = "plant_sow";
    EventMaps3["add_diamond_gold"] = "add_diamond_gold";
  })(EventMaps || (EventMaps = {}));
  var AppEventMap;
  (function(AppEventMap2) {
    AppEventMap2["ad"] = "ad";
    AppEventMap2["closeAd"] = "closeAd";
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
    views3["GatherDescView"] = "scenes/views/GatherDescView.scene";
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
    views3["WithdrawRecordView"] = "scenes/views/WithdrawRecordView.scene";
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
    "scenes/views/WithdrawRecordView.scene",
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
    "scenes/views/GatherDescView.scene",
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
    "res/dog_1010.png",
    "res/dog_1010.atlas",
    "res/dog_1009.png",
    "res/dog_1009.atlas",
    "res/dog_1008.png",
    "res/dog_1008.atlas",
    "res/dog_1007.png",
    "res/dog_1007.atlas",
    "res/dog_1006.png",
    "res/dog_1006.atlas",
    "res/dog_1005.png",
    "res/dog_1005.atlas",
    "res/dog_1004.png",
    "res/dog_1004.atlas",
    "res/dog_1003.png",
    "res/dog_1003.atlas",
    "res/dog_1002.png",
    "res/dog_1002.atlas",
    "res/dog_1001.png",
    "res/dog_1001.atlas",
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
      baseUrl = "//192.168.101.50:3100";
      break;
    case BuildType.online:
      baseUrl = "http://game.ahd168.com:3100";
      break;
  }
  var ConfigGame_default = {
    diamondId: 1001,
    goldId: 1002,
    petDigestIntervalTime: 60 * 3600,
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
        if (Laya.Browser.onIOS) {
          if (window["webRequest"]) {
            window["webRequest"].postMessage(JSON.stringify(data));
            if (data.timestamp) {
              EventMap.set(data.timestamp, resolve);
            }
          } else {
            resolve(null);
          }
        } else {
          if (window["$App"] && window["$App"]["webRequest"]) {
            window["$App"]["webRequest"](JSON.stringify(data));
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
  var Table = { "task": [{ "id": 1001, "reward": "1001:50", "times": 1, "title": "\u7B7E\u5230\u9886\u94BB\u77F3", "desc": "\u770B\u89C6\u9891\u7B7E\u5230", "icon": null }, { "id": 1002, "reward": "1001:100", "times": 10, "title": "\u83DC\u5730\u65BD\u80A510\u6B21", "desc": "\u83DC\u5730\u52A0\u901F10\u6B21", "icon": null }, { "id": 1003, "reward": "1001:50", "times": 10, "title": "\u83DC\u5730\u6536\u83B710\u6B21", "desc": "\u83DC\u5730\u6536\u83B710\u6B21", "icon": null }, { "id": 1004, "reward": "1001:50", "times": 5, "title": "\u5077\u83DC5\u6B21", "desc": "\u5077\u83DC5\u6B21", "icon": null }, { "id": 1005, "reward": "1002:200", "times": 3, "title": "\u5582\u517B\u72D7\u72D73\u6B21", "desc": "\u5582\u517B\u72D7\u72D73\u6B21", "icon": null }, { "id": 1013, "reward": "1001:50", "times": 5, "title": "\u9080\u8BF7\u597D\u53CB", "desc": "\u9080\u8BF75\u4E2A\u597D\u53CB", "icon": null }, { "id": 1007, "reward": "1001:20", "times": 10, "title": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "desc": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "icon": null }, { "id": 1008, "reward": "1002:500", "times": 3, "title": "\u51FA\u552E\u4F5C\u72693\u6B21", "desc": "\u51FA\u552E\u4F5C\u72693\u6B21", "icon": null }, { "id": 1009, "reward": "1001:100", "times": 5, "title": "\u6DFB\u52A0\u597D\u53CB", "desc": "\u6DFB\u52A0\u597D\u53CB5\u4E2A", "icon": null }, { "id": 1010, "reward": "1001:100", "times": 10, "title": "\u5206\u4EAB\u5F97\u597D\u793C", "desc": "\u5206\u4EAB10\u6B21", "icon": null }, { "id": 1011, "reward": "1002:500", "times": 3, "title": "\u4EFB\u610F\u79CD\u690D", "desc": "\u4EFB\u610F\u79CD\u690D3\u6B21", "icon": null }, { "id": 1012, "reward": "1001:50", "times": 5, "title": "\u770B\u89C6\u9891\u9886\u798F\u5229", "desc": "\u770B\u89C6\u98915\u6B21", "icon": null }], "signIn": [{ "id": 1001, "days": 7, "reward": "1001:20000" }, { "id": 1002, "days": 10, "reward": "1001:30000" }, { "id": 1003, "days": 15, "reward": "1001:50000" }, { "id": 1004, "days": 20, "reward": "1001:80000" }, { "id": 1005, "days": 30, "reward": "1001:120000" }, { "id": 1006, "days": 50, "reward": "1001:180000" }, { "id": 1007, "days": 80, "reward": "1001:300000" }, { "id": 1008, "days": 100, "reward": "1001:350000" }, { "id": 1009, "days": 150, "reward": "1001:500000" }], "plant": [{ "id": 1001, "name": "\u6C34\u7A3B", "icon": "plant_icon/1002_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1002, "name": "\u5927\u8C46", "icon": "plant_icon/1004_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1003, "name": "\u5927\u849C", "icon": "plant_icon/1012_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "240", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1004, "name": "\u5305\u5FC3\u83DC", "icon": "plant_icon/1006_seed.png", "seed_price": "1002:75", "gain": "1001:1,1002:75", "harvest": "1~2", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1005, "name": "\u571F\u8C46", "icon": "plant_icon/1007_seed.png", "seed_price": "1002:75", "gain": "1001:1,1002:75", "harvest": "2~3", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1006, "name": "\u841D\u535C", "icon": "plant_icon/1005_seed.png", "seed_price": "1002:75", "gain": "1001:1,1002:75", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1007, "name": "\u5C0F\u9EA6", "icon": "plant_icon/1001_seed.png", "seed_price": "1002:120", "gain": "1001:3,1002:120", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1008, "name": "\u8FA3\u6912", "icon": "plant_icon/1010_seed.png", "seed_price": "1002:120", "gain": "1001:3,1002:120", "harvest": "2~3", "mature_time": "600", "unlock_cost": "1002:2000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1009, "name": "\u9EC4\u74DC", "icon": "plant_icon/1011_seed.png", "seed_price": "1002:200", "gain": "1001:5,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1010, "name": "\u8304\u5B50", "icon": "plant_icon/1013_seed.png", "seed_price": "1002:200", "gain": "1001:5,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1011, "name": "\u80E1\u841D\u535C", "icon": "plant_icon/1008_seed.png", "seed_price": "1002:350", "gain": "1001:7,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:4500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1012, "name": "\u5357\u74DC", "icon": "plant_icon/1014_seed.png", "seed_price": "1002:350", "gain": "1001:7,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:5000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1013, "name": "\u7389\u7C73", "icon": "plant_icon/1003_seed.png", "seed_price": "1002:500", "gain": "1001:10,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:5500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1014, "name": "\u7518\u8517", "icon": "plant_icon/1015_seed.png", "seed_price": "1002:500", "gain": "1001:10,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1015, "name": "\u756A\u8304", "icon": "plant_icon/1009_seed.png", "seed_price": "1002:500", "gain": "1001:10,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }], "pet": [{ "id": 1001, "name": "\u65FA\u8D22", "icon": "pet_feed/1001_dog.png", "vitality_max": 100, "vitality_consume": 10, "cost": "1002:3000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 34, "ability": 42 }, { "id": 1002, "name": "\u6C64\u5706", "icon": "pet_feed/1007_dog.png", "vitality_max": 100, "vitality_consume": 15, "cost": "1002:4000", "desc": "\u989C\u503C\u3001\u667A\u5546\u53CC\u53CC\u5728\u7EBF", "sensitive": 40, "ability": 48 }, { "id": 1003, "name": "\u8089\u5E72", "icon": "pet_feed/1009_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:4500", "desc": "\u6700\u5FE0\u8BDA\u7684\u4F19\u4F34", "sensitive": 45, "ability": 55 }, { "id": 1004, "name": "\u4E8C\u54C8", "icon": "pet_feed/1002_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:5000", "desc": "\u7EDD\u4E0D\u62C6\u5BB6\uFF01", "sensitive": 48, "ability": 60 }, { "id": 1005, "name": "\u5927\u773C\u775B", "icon": "pet_feed/1005_dog.png", "vitality_max": 100, "vitality_consume": 17, "cost": "1002:7000", "desc": "\u6D3B\u597D\u5403\u7684\u5C11", "sensitive": 50, "ability": 75 }, { "id": 1006, "name": "\u5C0F\u5C3E\u5DF4", "icon": "pet_feed/1004_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:7500", "desc": "\u6B66\u529B\u5929\u8D4B\u5DF2\u70B9\u6EE1~\u62FF\u634F\uFF01", "sensitive": 60, "ability": 80 }, { "id": 1007, "name": "\u7403\u7403", "icon": "pet_feed/1008_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u5C31\u4E24\u4E2A\u5B57\uFF0C\u542C\u8BDD\uFF01", "sensitive": 69, "ability": 85 }, { "id": 1008, "name": "\u5C0F\u767D", "icon": "pet_feed/1003_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u770B\u5BB6\u3001\u770B\u83DC\u3001\u770B\u5B69\u5B50", "sensitive": 76, "ability": 88 }, { "id": 1009, "name": "\u70B9\u70B9", "icon": "pet_feed/1006_dog.png", "vitality_max": 100, "vitality_consume": 19, "cost": "1002:10000", "desc": "\u4F60\u503C\u5F97\u62E5\u6709\uFF01", "sensitive": 85, "ability": 93 }, { "id": 1010, "name": "\u95F7\u58A9", "icon": "pet_feed/1010_dog.png", "vitality_max": 100, "vitality_consume": 30, "cost": "1002:15000", "desc": "\u957F\u5F97\u5C31\u5F88\u51F6\uFF0C\u6293\u5C0F\u5077\u66F4\u51F6", "sensitive": 90, "ability": 99 }], "order": [{ "id": 1, "commission": "1.12", "condition": "1001:2", "extra_reward": "1001:80" }, { "id": 2, "commission": "0.87", "condition": "1001:1,1002:2", "extra_reward": "1001:80" }, { "id": 3, "commission": "0.69", "condition": "1001:1,1003:2,1002:3", "extra_reward": "1001:80" }, { "id": 4, "commission": "0.61", "condition": "1002:4,1003:3,1004:3,1001:4", "extra_reward": "1001:80" }, { "id": 5, "commission": "0.61", "condition": "1004:6,1002:5,1005:4,1001:5", "extra_reward": "1001:80" }, { "id": 6, "commission": "0.68", "condition": "1003:10,1004:5,1005:3,1006:3", "extra_reward": "1001:80" }, { "id": 7, "commission": "0.43", "condition": "1007:4,1003:5,1004:7,1006:10", "extra_reward": "1001:80" }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:5,1002:5", "extra_reward": "1001:80" }, { "id": 9, "commission": "0.39", "condition": "1006:2,1009:10,1007:8,1003:8", "extra_reward": "1001:80" }, { "id": 10, "commission": "0.22", "condition": "1006:10,1010:5,1008:10,1009:6", "extra_reward": "1001:80" }, { "id": 11, "commission": "0.76", "condition": "1009:5,1004:10,1001:9,1002:10", "extra_reward": "1001:100" }, { "id": 12, "commission": "0.43", "condition": "1007:6,1003:11,1011:6,1005:10", "extra_reward": "1001:100" }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:8", "extra_reward": "1001:100" }, { "id": 14, "commission": "0.55", "condition": "1013:10,1008:8,1006:6,1001:10", "extra_reward": "1001:100" }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:10,1011:12,1001:10", "extra_reward": "1001:100" }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17", "extra_reward": "1001:100" }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:6,1015:12,1001:14", "extra_reward": "1001:100" }, { "id": 18, "commission": 0.48, "condition": "1008:14,1011:12,1009:15,1002:5", "extra_reward": "1001:100" }, { "id": 19, "commission": 0.75, "condition": "1013:10,1003:20,1014:11,1001:7", "extra_reward": "1001:100" }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:12", "extra_reward": "1001:100" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:14,1005:16,1007:15", "extra_reward": "1001:120" }, { "id": 22, "commission": "0.4", "condition": "1015:19,1007:12,1011:5,1004:17", "extra_reward": "1001:120" }, { "id": 23, "commission": "0.4", "condition": "1003:19,1014:22,1015:16,1008:14", "extra_reward": "1001:120" }, { "id": 24, "commission": 0.77, "condition": "1014:13,1001:17,1008:18,1004:15", "extra_reward": "1001:120" }, { "id": 25, "commission": "0.39", "condition": "1012:23,1011:19,1010:15,1015:20", "extra_reward": "1001:120" }, { "id": 26, "commission": 0.03, "condition": "1002:21,1011:12,1012:22,1003:19", "extra_reward": "1001:120" }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:20,1011:17", "extra_reward": "1001:120" }, { "id": 28, "commission": 0.53, "condition": "1014:17,1007:12,1011:17,1003:17", "extra_reward": "1001:120" }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:18", "extra_reward": "1001:120" }, { "id": 30, "commission": "0.34", "condition": "1011:17,1014:19,1006:14,1004:30", "extra_reward": "1001:120" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:19,1006:11", "extra_reward": "1001:150" }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:22,1012:12,1008:20", "extra_reward": "1001:150" }, { "id": 33, "commission": "0.44", "condition": "1012:16,1013:20,1002:23,1009:16", "extra_reward": "1001:150" }, { "id": 34, "commission": "0.42", "condition": "1009:19,1010:12,1011:14,1012:20", "extra_reward": "1001:150" }, { "id": 35, "commission": "0.33", "condition": "1001:18,1004:19,1013:16,1003:20", "extra_reward": "1001:150" }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:17,1007:19", "extra_reward": "1001:150" }, { "id": 37, "commission": 0.44, "condition": "1012:19,1010:20,1002:14,1011:11", "extra_reward": "1001:150" }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18", "extra_reward": "1001:150" }, { "id": 39, "commission": 0.36, "condition": "1007:18,1012:13,1004:16,1002:26", "extra_reward": "1001:150" }, { "id": 40, "commission": 0.28, "condition": "1004:30,1005:10,1008:18,1011:16", "extra_reward": "1001:150" }, { "id": 41, "commission": "0.48", "condition": "1010:18,1009:18,1008:17,1011:26", "extra_reward": "1001:500" }, { "id": 42, "commission": 0.43, "condition": "1009:21,1005:18,1007:20,1002:23", "extra_reward": "1001:800" }, { "id": 43, "commission": "0.24", "condition": "1006:30,1004:14,1014:11,1008:15", "extra_reward": "1001:1000" }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:28,1002:34,1007:19", "extra_reward": "1001:1600" }, { "id": 45, "commission": "0.41", "condition": "1012:15,1010:23,1007:13,1011:13", "extra_reward": "1001:2200" }, { "id": 46, "commission": 0.39, "condition": "1003:22,1007:23,1010:16,1002:24", "extra_reward": "1001:2800" }, { "id": 47, "commission": 0.49, "condition": "1010:24,1015:20,1003:25,1014:16", "extra_reward": "1001:3400" }, { "id": 48, "commission": "0.26", "condition": "1013:17,1007:24,1008:37,1001:30", "extra_reward": "1001:4000" }, { "id": 49, "commission": 0.48, "condition": "1002:26,1004:21,1009:22,1006:20", "extra_reward": "1001:4600" }, { "id": 50, "commission": "0.25", "condition": "1006:27,1012:19,1008:20,1015:11", "extra_reward": "1001:5200" }, { "id": 51, "commission": "0.34", "condition": "1011:18,1004:19,1002:25,1003:11", "extra_reward": "1001:5800" }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:20,1001:25,1004:26", "extra_reward": "1001:6400" }, { "id": 53, "commission": "0.28", "condition": "1014:14,1012:12,1010:20,1015:18", "extra_reward": "1001:7000" }, { "id": 54, "commission": 0.45, "condition": "1005:22,1002:33,1009:16,1015:17", "extra_reward": "1001:7600" }, { "id": 55, "commission": "0.56", "condition": "1001:23,1014:19,1005:17,1010:15", "extra_reward": "1001:8200" }, { "id": 56, "commission": "0.35", "condition": "1006:27,1005:29,1009:17,1003:18", "extra_reward": "1001:8800" }, { "id": 57, "commission": 0.67, "condition": "1007:21,1008:17,1002:16,1009:25", "extra_reward": "1001:9400" }, { "id": 58, "commission": 0.32, "condition": "1006:20,1008:25,1005:24,1007:19", "extra_reward": "1001:10000" }, { "id": 59, "commission": 0.79, "condition": "1012:25,1009:30,1013:16,1008:15", "extra_reward": "1001:10600" }, { "id": 60, "commission": 0.69, "condition": "1015:26,1012:27,1010:31,1001:23", "extra_reward": "1001:11200" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:25,1011:15,1002:17", "extra_reward": "1001:11800" }, { "id": 62, "commission": 0.44, "condition": "1015:21,1007:15,1011:18,1006:26", "extra_reward": "1001:12400" }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:27", "extra_reward": "1001:13000" }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:29,1004:25", "extra_reward": "1001:13600" }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:30,1014:20,1005:15", "extra_reward": "1001:14200" }, { "id": 66, "commission": 0.73, "condition": "1004:25,1008:25,1002:34,1012:14", "extra_reward": "1001:14800" }, { "id": 67, "commission": 0.13, "condition": "1001:36,1012:20,1011:20,1003:20", "extra_reward": "1001:15400" }, { "id": 68, "commission": 0.69, "condition": "1013:24,1008:23,1006:16,1007:17", "extra_reward": "1001:16000" }, { "id": 69, "commission": 0.37, "condition": "1015:30,1004:29,1013:17,1009:10", "extra_reward": "1001:16600" }, { "id": 70, "commission": 0.71, "condition": "1010:23,1004:31,1011:17,1012:11", "extra_reward": "1001:17200" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:26,1003:28,1015:13", "extra_reward": "1001:17800" }, { "id": 72, "commission": 0.31, "condition": "1005:25,1002:38,1012:19,1010:14", "extra_reward": "1001:18400" }, { "id": 73, "commission": 0.39, "condition": "1012:34,1006:22,1003:27,1004:20", "extra_reward": "1001:19000" }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:30,1001:20", "extra_reward": "1001:19600" }, { "id": 75, "commission": 0.18, "condition": "1006:31,1014:30,1008:12,1002:25", "extra_reward": "1001:20200" }, { "id": 76, "commission": 0.51, "condition": "1007:21,1012:20,1004:11,1014:20", "extra_reward": "1001:20800" }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:16,1012:24,1007:30", "extra_reward": "1001:21400" }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:22", "extra_reward": "1001:22000" }, { "id": 79, "commission": 0.65, "condition": "1006:26,1004:18,1007:12,1011:27", "extra_reward": "1001:22600" }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:24", "extra_reward": "1001:23200" }, { "id": 81, "commission": 0.14, "condition": "1012:20,1015:28,1002:24,1003:38", "extra_reward": "1001:23800" }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14", "extra_reward": "1001:24400" }, { "id": 83, "commission": 0.53, "condition": "1010:19,1003:38,1007:22,1015:20", "extra_reward": "1001:25000" }, { "id": 84, "commission": 0.62, "condition": "1005:29,1014:26,1002:18,1007:38", "extra_reward": "1001:25600" }, { "id": 85, "commission": 0.37, "condition": "1011:20,1001:17,1012:12,1004:32", "extra_reward": "1001:26200" }, { "id": 86, "commission": 0.59, "condition": "1009:25,1011:20,1006:14,1015:21", "extra_reward": "1001:26800" }, { "id": 87, "commission": "0.31", "condition": "1006:26,1005:19,1013:20,1014:29", "extra_reward": "1001:27400" }, { "id": 88, "commission": "0.48", "condition": "1008:37,1011:24,1015:12,1014:11", "extra_reward": "1001:28000" }, { "id": 89, "commission": "0.22", "condition": "1002:17,1003:28,1005:22,1010:31", "extra_reward": "1001:28600" }, { "id": 90, "commission": 0.32, "condition": "1002:39,1013:28,1007:25,1001:33", "extra_reward": "1001:29200" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:20,1014:10,1007:26", "extra_reward": "1001:29800" }, { "id": 92, "commission": 0.13, "condition": "1004:38,1011:13,1008:15,1007:29", "extra_reward": "1001:30400" }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:39,1006:38,1008:31", "extra_reward": "1001:31000" }, { "id": 94, "commission": 0.22, "condition": "1002:36,1014:27,1013:16,1005:31", "extra_reward": "1001:31600" }, { "id": 95, "commission": 0.15, "condition": "1005:26,1011:34,1015:34,1008:16", "extra_reward": "1001:32200" }, { "id": 96, "commission": "0.49", "condition": "1003:24,1001:34,1007:28,1005:30", "extra_reward": "1001:32800" }, { "id": 97, "commission": "0.6", "condition": "1013:32,1009:33,1006:30,1011:40", "extra_reward": "1001:33400" }, { "id": 98, "commission": "0.35", "condition": "1014:40,1009:43,1015:33,1012:45", "extra_reward": "1001:34000" }, { "id": 99, "commission": "0.44", "condition": "1011:39,1008:37,1009:30,1013:42", "extra_reward": "1001:34600" }, { "id": 100, "commission": "0.49", "condition": "1012:40,1010:33,1013:30,1011:40", "extra_reward": "1001:35200" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1002:0", "gain": null, "probability": 0.1, "get_diamond": 1 }, { "id": 2, "reward": "1002:1500", "cost": "1002:5000", "gain": 0.1, "probability": 0.13, "get_diamond": 1 }, { "id": 3, "reward": "1002:2000", "cost": "1002:10000", "gain": 0.25, "probability": 0.25, "get_diamond": 2 }, { "id": 4, "reward": "1002:2500", "cost": "1002:20000", "gain": 0.4, "probability": 0.38, "get_diamond": 3 }, { "id": 5, "reward": "1002:3000", "cost": "1002:50000", "gain": 0.55, "probability": 0.5, "get_diamond": 5 }], "feed": [{ "id": 1001, "name": "\u997C\u5E72", "icon": "pet_feed/1001_feed.png", "vitality": 1, "cost": "1002:30", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1002, "name": "\u575A\u679C", "icon": "pet_feed/1002_feed.png", "vitality": 2, "cost": "1002:50", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1003, "name": "\u706B\u817F", "icon": "pet_feed/1003_feed.png", "vitality": 5, "cost": "1002:100", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1004, "name": "\u725B\u8089", "icon": "pet_feed/1004_feed.png", "vitality": 50, "cost": "1002:900", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1005, "name": "\u732A\u8089", "icon": "pet_feed/1005_feed.png", "vitality": 20, "cost": "1002:460", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1006, "name": "\u9E21\u8089", "icon": "pet_feed/1006_feed.png", "vitality": 10, "cost": "1002:270", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }], "currency": [{ "id": 1001, "name": "\u94BB\u77F3", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "\u91D1\u5E01", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_times", "value": 30 }, { "id": "all_speed_up_time", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:5000,1002:10000,1002:20000,1002:30000,1002:40000,1002:50000,1002:60000" }, { "id": "goldDefault", "value": "1002:100" }, { "id": "diamondDefault", "value": "1001:50" }, { "id": "ADTimesLimit", "value": 50 }, { "id": "ADSpeedUptimes", "value": 6 }, { "id": "vitalityBuyCostGold", "value": "1002:10000" }, { "id": "vitalityLimit", "value": 10 }, { "id": "Initial_physical_strength", "value": 10 }, { "id": "landAmountMax", "value": 9 }, { "id": "petDefaultVitality", "value": 100 }, { "id": "petDigestIntervalTime", "value": 3600 }, { "id": "Videorewards", "value": "1001:450:600,1001:250:350,1001:200:300,1001:100:200,1001:80:100" }, { "id": "withdrawal", "value": "1001:10000:1" }, { "id": "Invitation_rewards", "value": "1001:5000" }, { "id": "withdrawal_times", "value": "0.3:1:0:0,5:1:6:30,10:1:15:60,50:1:50:80,100:1:100:90,200:0:200:97" }] };

  // src/common/Tools.ts
  var Tools = class {
    static parseString(str, format = ",") {
      if (!str)
        return [];
      return str.split(format);
    }
    static formatMoney(num) {
      return num.toString().match(/^\d+(?:\.\d{0,2})?/);
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
              return {
                price: Number(v[0]) || 0,
                times: Number(v[1]) || 0,
                inviteAmount: Number(v[2]) || 0,
                orderLv: Number(v[3]) || 0
              };
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

  // src/components/RedDotComponent.ts
  var RedDotType;
  (function(RedDotType2) {
    RedDotType2["task"] = "task";
    RedDotType2["friend"] = "friend";
    RedDotType2["mail"] = "mail";
    RedDotType2["anyDoor"] = "anyDoor";
    RedDotType2["order"] = "order";
  })(RedDotType || (RedDotType = {}));
  var RedDotComponent = class extends core_default.gameScript {
    onHdAwake() {
      let node = this.owner;
      node.visible = false;
      node.anchorX = 0.5;
      node.anchorY = 0.5;
    }
    updateRedDot(type, show) {
      if (this.redDotType == type) {
        let node = this.owner;
        if (show) {
          if (!node.visible) {
            node.scale(0, 0);
            node.y -= 40;
            Laya.Tween.clearAll(node);
            Laya.Tween.to(node, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut, new Laya.Handler(this, () => {
              Laya.Tween.to(node, { y: node.y + 40 }, 300, Laya.Ease.backOut, null, 200);
            }));
          }
          node.visible = show;
        } else {
          if (node.visible)
            Laya.Tween.to(node, { scaleX: 0, scaleY: 0 }, 300, Laya.Ease.backIn, new Laya.Handler(this, () => {
              node.visible = show;
            }));
        }
      }
    }
  };
  __decorateClass([
    core_default.eventOn(EventMaps.update_red_dot)
  ], RedDotComponent.prototype, "updateRedDot", 1);

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
      this.updateRedDot();
      for (let x = 0; x < this.list.length; x++) {
        if (this.list[x].id == id) {
          return this.list[x];
        }
      }
      return null;
    }
    getList() {
      this.updateRedDot();
      return this.list.sort((a, b) => {
        var _a, _b;
        let tA = this.getTask(a.id), tB = this.getTask(b.id);
        return a.id + ((tA == null ? void 0 : tA.receive) ? 1e3 : 1) + ((tA == null ? void 0 : tA.times) >= ((_a = a.base) == null ? void 0 : _a.times) ? 100 : 1e3) - (b.id + ((tB == null ? void 0 : tB.receive) ? 1e3 : 1) + ((tB == null ? void 0 : tB.times) >= ((_b = b.base) == null ? void 0 : _b.times) ? 100 : 1e3));
      });
    }
    taskAddTimes(id) {
      let task = this.getTask(id);
      if (!task) {
        return;
      }
      task.times++;
      core_default.eventGlobal.event(EventMaps.update_task);
      this.updateRedDot();
    }
    updateRedDot() {
      var _a;
      let hasReward = false;
      for (let x = 0; x < this.list.length; x++) {
        if (!this.list[x].receive && this.list[x].times >= ((_a = TableAnalyze_default.table("task").get(this.list[x].id)) == null ? void 0 : _a.times)) {
          hasReward = true;
          break;
        }
      }
      core_default.eventGlobal.event(EventMaps.update_red_dot, [RedDotType.task, hasReward]);
    }
    clear() {
      this.list.length = 0;
    }
  };
  var TaskService_default = new TaskService();

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
      this.days = 0;
      this.adTimes = 0;
      this.continuousAdTimes = 0;
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
    ApiHttp2["friendShare"] = "/friend/share";
    ApiHttp2["mailList"] = "/mail/list";
    ApiHttp2["mailRead"] = "/mail/read";
    ApiHttp2["mailDelete"] = "/mail/delete";
    ApiHttp2["withdraw"] = "/withdraw";
    ApiHttp2["withdrawRecord"] = "/withdraw/record";
    ApiHttp2["configClient"] = "/config/client";
    ApiHttp2["guide"] = "/guide";
    ApiHttp2["adRecordNotClick"] = "/ad/record/not/click";
  })(ApiHttp || (ApiHttp = {}));

  // src/common/Heartbeat.ts
  var HeartbeatControl = class {
    constructor() {
      this.intervalTime = 60;
    }
    init() {
      setTimeout(() => {
        this.updateMsg();
      }, 2e3);
      this.updateTime();
    }
    updateTime() {
      if (this.timeId) {
        clearTimeout(this.timeId);
      }
      this.timeId = setTimeout(() => {
        this.updateMsg();
        this.updateTime();
      }, this.intervalTime * 1e3);
    }
    updateMsg() {
      return __async(this, null, function* () {
        let d = yield HttpControl.inst.send({
          api: ApiHttp.mailList
        });
        let hasRed = false;
        for (let x = 0; x < d.length; x++) {
          if (!d[x].read) {
            hasRed = true;
            break;
          }
        }
        core_default.eventGlobal.event(EventMaps.update_red_dot, [RedDotType.mail, hasRed]);
        let friendData = yield HttpControl.inst.send({
          api: ApiHttp.friendList
        });
        hasRed = false;
        for (let x = 0; x < friendData.list.length; x++) {
          if (friendData.list[x].steal || friendData.list[x].applyIng) {
            hasRed = true;
            break;
          }
        }
        core_default.eventGlobal.event(EventMaps.update_red_dot, [RedDotType.friend, hasRed]);
      });
    }
    destroy() {
      clearTimeout(this.timeId);
    }
  };
  var Heartbeat_default = new HeartbeatControl();

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
        case ApiHttp.landSteal:
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
      core_default.eventGlobal.event(d.api, d.data);
    }
    error(errorCode, data) {
      core_default.view.openHint({
        text: `${data == null ? void 0 : data.message} 
 ${(data == null ? void 0 : data.error) || ""}`,
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
      UserInfo_default.days = d.days + 1;
      UserInfo_default.adTimes = d.userInfo.adTimes;
      UserInfo_default.continuousAdTimes = d.userInfo.continuousAdTimes;
      PetService_default.init(d.pets);
      TaskService_default.init(d.tasks);
      LocalStorageService_default.setJSON("isLogin", true);
      if (d.token)
        LocalStorageService_default.setJSON("token", d.token);
      LandService_default.init(d.lands);
      core_default.audio.soundMuted = LocalStorageService_default.getJSON().sound;
      core_default.audio.musicMuted = LocalStorageService_default.getJSON().music;
      Heartbeat_default.init();
    }
    loginOut() {
      Heartbeat_default.destroy();
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
      UserInfo_default.days = 0;
      UserInfo_default.adTimes = 0;
      UserInfo_default.continuousAdTimes = 0;
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
  var _HttpControl = class {
    constructor() {
      this.baseUrl = null;
      this.sendData = [];
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
                }
              }
              this.completeHandler(data, resolve, reject, xmlhttp);
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
                  this.completeHandler(d, resolve, reject, xmlhttp);
                }
                this.clearOneInEventMap(xmlhttp);
              }
              if (!xmlhttp.status) {
                this.completeHandler({
                  code: 404,
                  data: { message: "\u670D\u52A1\u5668\u672A\u54CD\u5E94\uFF0C\u8BF7\u91CD\u8BD5" },
                  uri: ""
                }, resolve, reject, xmlhttp);
                this.clearOneInEventMap(xmlhttp);
              }
              break;
          }
        }
      };
      return xmlhttp;
    }
    clearOneInEventMap(xml) {
      this.eventMap.forEach((e, v) => {
        if (e == xml) {
          this.eventMap.delete(v);
        }
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
            UserInfo_default.adTimes++;
            if (adData == null ? void 0 : adData.data["hasClicked"]) {
              UserInfo_default.continuousAdTimes = 0;
            } else {
              UserInfo_default.continuousAdTimes++;
            }
            _HttpControl.inst.send({
              api: ApiHttp.adRecordNotClick,
              data: { times: UserInfo_default.continuousAdTimes }
            });
          }
        }
        return new Promise((resolve, reject) => __async(this, null, function* () {
          const xhr = this.createXhr(resolve, reject, ad);
          this.eventMap.set(uri + sendDataString, xhr);
          this.sendData.push({ xhr, data });
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
        }));
      });
    }
    completeHandler(e, resolve, reject, xhr) {
      let curData;
      for (let x = 0; x < this.sendData.length; x++) {
        if (this.sendData[x].xhr == xhr) {
          curData = this.sendData[x].data;
          this.sendData.slice(x, 1);
          break;
        }
      }
      if (e.code) {
        reject(e.code);
        if (curData == null ? void 0 : curData.error) {
          curData.error(e.code, e.data);
        }
        HttpDataControl_default.error(e.code, e.data);
        return console.error(e);
      } else {
        let api = curData.api;
        console.log(`%c <== back %c${api} `, `color:#b8e994;font-weight:700;`, `color:#78e08f;font-weight:700;`, e.data);
        if (e.code === 0) {
          HttpDataControl_default.forward({
            api,
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
  var HttpControl = _HttpControl;
  __decorateClass([
    Instance
  ], HttpControl, "inst", 2);

  // src/view/AddLandView.ts
  var AddLandView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.costIcon = null;
      this.costFont = null;
      this.adBtn = null;
      this.canClick = true;
    }
    onOpened(d) {
      this.data = d;
      this.landData = TableAnalyze_default.table("config").get("unlock_land_cost").value[LandService_default.list.size];
      this.costIcon.skin = this.landData.obj.icon;
      this.costFont.value = this.landData.count + "";
      this.adBtn.disabled = !UserInfo_default.advertiseTimes;
      this.adBtn.active = Boolean(UserInfo_default.advertiseTimes);
      if (UserInfo_default.adTimes > 100 || UserInfo_default.continuousAdTimes > 20) {
        Laya.timer.once(300, this, () => {
          AppCore.runAppFunction({
            uri: AppEventMap.ad,
            data: { adType: 2 }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.ad,
            data: { adType: 3 }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.eventCount,
            data: { type: "half_screen_advertisement" }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.eventCount,
            data: { type: "bottom_advertisement" }
          });
        });
      }
    }
    onHdAwake() {
      if (UserInfo_default.adTimes > 100 || UserInfo_default.continuousAdTimes > 20) {
        this.owner.getChildByName("center").centerY = -310;
      }
    }
    onClick(e) {
      switch (e.target.name) {
        case "closeAddLandLayer":
          core_default.view.close(Res_default.views.AddLandView);
          break;
        case "cost_gold":
          if (!this.canClick) {
            return;
          }
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
          this.canClick = false;
          HttpControl.inst.send({
            api: ApiHttp.landUnlock,
            data: {
              landId: this.data.id,
              type: ConfigGame_default.ApiTypeDefault
            }
          }).then(() => {
            var _a;
            this.canClick = true;
            if ((_a = this.data) == null ? void 0 : _a.call) {
              this.data.call();
              core_default.view.close(Res_default.views.AddLandView);
            }
          }).catch(() => {
            this.canClick = true;
          });
          break;
        case "ad_btn":
          if (!this.canClick) {
            return;
          }
          this.canClick = false;
          HttpControl.inst.send({
            api: ApiHttp.landUnlock,
            data: {
              landId: this.data.id,
              type: ConfigGame_default.ApiTypeAD
            }
          }).then((d) => {
            var _a;
            this.canClick = true;
            if ((_a = this.data) == null ? void 0 : _a.call) {
              this.data.call();
              core_default.view.close(Res_default.views.AddLandView);
            }
            core_default.eventGlobal.event(EventMaps.play_ad_get_reward, [
              e.target,
              d.adReward
            ]);
          }).catch(() => {
            this.canClick = true;
          });
          break;
      }
    }
    onHdDestroy() {
      AppCore.runAppFunction({
        uri: AppEventMap.closeAd,
        data: {}
      });
    }
  };

  // src/view/BuyVitalityView.ts
  var BuyVitalityView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.priceLabel = null;
      this.priceIcon = null;
      this.adBtn = null;
    }
    onOpened(e) {
      this.data = e;
      let costGoldCount = TableAnalyze_default.table("config").get("vitalityBuyCostGold").value;
      this.costGoldCount = costGoldCount;
      this.priceLabel.text = `\u4EF7\u683C\uFF1A${costGoldCount}`;
      this.adBtn.disabled = !UserInfo_default.advertiseTimes;
      this.adBtn.active = Boolean(UserInfo_default.advertiseTimes);
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
            if (e.target.name == "buyBtn") {
              AppCore.runAppFunction({
                uri: AppEventMap.eventCount,
                data: { type: "physicalstrength" }
              });
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
      this.lv = null;
      this.reward = null;
      this.probability = null;
      this.adBtn = null;
    }
    onOpened(e) {
      this.data = e;
      let nextLand = TableAnalyze_default.table("landLevel").get(e.obj.level + 1);
      this.priceLabel.text = `\u4EF7\u683C\uFF1A${nextLand.cost.count}`;
      this.priceIcon.skin = nextLand.cost.obj.icon;
      this.lv.text = `${e.obj.level + 1}\u7EA7`;
      this.reward.text = `+${Number((nextLand.gain * 100).toFixed(2))}%`;
      this.probability.text = `+${Number((nextLand.probability * 100).toFixed(2))}%`;
      this.adBtn.disabled = !UserInfo_default.advertiseTimes;
      this.adBtn.active = Boolean(UserInfo_default.advertiseTimes);
      if (UserInfo_default.adTimes > 100 || UserInfo_default.continuousAdTimes > 20) {
        Laya.timer.once(300, this, () => {
          AppCore.runAppFunction({
            uri: AppEventMap.ad,
            data: { adType: 2 }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.ad,
            data: { adType: 3 }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.eventCount,
            data: { type: "half_screen_advertisement" }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.eventCount,
            data: { type: "bottom_advertisement" }
          });
        });
      }
    }
    onHdAwake() {
      if (UserInfo_default.adTimes > 100 || UserInfo_default.continuousAdTimes > 20) {
        this.owner.getChildByName("center").centerY = -310;
      }
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
          }).then((d) => {
            if (e.target.name == "upgradeAdBtn") {
              core_default.eventGlobal.event(EventMaps.play_ad_get_reward, [
                e.target,
                d.adReward
              ]);
            } else {
              AppCore.runAppFunction({
                uri: AppEventMap.eventCount,
                data: { type: "Landupgrading" }
              });
            }
            if (this.data.call) {
              this.data.call();
            }
            core_default.view.close(Res_default.views.FieldLevelUpView);
          });
          break;
      }
    }
    onHdDestroy() {
      AppCore.runAppFunction({
        uri: AppEventMap.closeImage,
        data: {}
      });
    }
  };

  // src/view/FriendsDescView.ts
  var FriendsDescView = class extends core_default.gameScript {
    onOpened(e) {
      this.call = e == null ? void 0 : e.call;
    }
    onHdAwake() {
      this.panelNode.vScrollBarSkin = null;
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.FriendsDescView);
          break;
        case "invite_btn":
          core_default.view.close(Res_default.views.FriendsDescView);
          if (this.call) {
            this.call();
            core_default.view.close(Res_default.views.FriendsView);
          }
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
      this.priceList.array = new Array(6);
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
          }).then((d) => {
            if (!d || (d == null ? void 0 : d.code)) {
              core_default.view.openHint({ text: d.data["message"], call: () => {
              } });
            } else {
              core_default.view.openHint({ text: d.data["message"], call: () => {
              } });
              HttpControl.inst.send({
                api: ApiHttp.friendShare
              }).then(() => {
                TaskService_default.taskAddTimes(1010);
                AppCore.runAppFunction({
                  uri: AppEventMap.eventCount,
                  data: { type: "share" }
                });
              });
            }
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
        core_default.eventGlobal.event(EventMaps.update_friend_share_guide, [this.inviteList]);
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
      if (i > 2) {
        btn.disabled = false;
        btn.visible = false;
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
              this.mainViewCom.hideGuideHand();
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
              this.gather();
            }
          } else {
            this.sow();
          }
        } else {
          this.mainViewCom.hideGuideHand();
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
    gather() {
      if (!this.canClick)
        return;
      this.canClick = false;
      let plantAmount = 0, rewardDiamond = 0, productId = this.data.productId;
      return new Promise((resolve) => {
        HttpControl.inst.send({
          api: ApiHttp.landGather,
          data: {
            landId: [this.data.id],
            type: ConfigGame_default.ApiTypeDefault
          }
        }).then((data) => {
          let d = data.list[0];
          resolve({ plantId: productId, amount: d.amount, diamond: rewardDiamond });
          plantAmount = d.amount;
          WarehouseService_default.add(productId, d.amount);
          rewardDiamond = d.rewardDiamond;
          this.canClick = true;
          this.gatherEvent(productId, plantAmount, rewardDiamond);
          Laya.timer.frameOnce(1, this, () => {
            this.mainViewCom.updateAllStateIcon();
          });
        }).catch(() => {
          this.canClick = true;
          resolve(null);
        });
      });
    }
    gatherEvent(productId, plantAmount, rewardDiamond = 0) {
      core_default.audio.playSound(Res_default.audios.shoucai);
      this.clearField();
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
      if (UserInfo_default.adTimes > 100 || UserInfo_default.continuousAdTimes > 20) {
        AppCore.runAppFunction({
          uri: AppEventMap.ad,
          data: { adType: 1 }
        });
        AppCore.runAppFunction({
          uri: AppEventMap.ad,
          data: { adType: 3 }
        });
        AppCore.runAppFunction({
          uri: AppEventMap.eventCount,
          data: { type: "full_Screen" }
        });
        AppCore.runAppFunction({
          uri: AppEventMap.eventCount,
          data: { type: "bottom_advertisement" }
        });
      }
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
      TaskService_default.taskAddTimes(1011);
      AppCore.runAppFunction({
        uri: AppEventMap.eventCount,
        data: { type: "plant" }
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
            landId: [this.data.id],
            type: ConfigGame_default.ApiTypeDefault,
            uid: this.stealUid
          }
        }).then((d) => {
          this.canClick = true;
          UserInfo_default.vitality = d.vitality;
          this.stealFoodEvent(d.list[0]);
        }).catch((code) => {
          this.canClick = true;
          if (code === ErrorCode_default._2001) {
            this.clearField();
          }
        });
      });
    }
    stealFoodEvent(d, dog = true) {
      this.data.canSteal = 0;
      AppCore.runAppFunction({
        uri: AppEventMap.eventCount,
        data: { type: "Stealvegetables" }
      });
      TaskService_default.taskAddTimes(1004);
      this.canSteal = false;
      this.topStateIconAni(false);
      MainView.inst.stealAll.rewardDiamond += d.rewardDiamond;
      const rewardList = [];
      if (d.plantId) {
        core_default.audio.playSound(Res_default.audios.shoucai);
        WarehouseService_default.add(this.data.productId, d.amount);
        rewardList.push({
          obj: TableAnalyze_default.table("plant").get(d.plantId),
          count: d.amount,
          posType: 3
        });
        let has = false;
        for (let x = 0; x < MainView.inst.stealAll.list.length; x++) {
          if (MainView.inst.stealAll.list[x].plantId == d.plantId) {
            MainView.inst.stealAll.list[x].amount += d.amount;
            has = true;
            break;
          }
        }
        if (!has) {
          MainView.inst.stealAll.list.push({
            plantId: d.plantId,
            amount: d.amount
          });
        }
      } else {
        if (!dog) {
          return;
        }
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
      this.rewardShareGuide = null;
      this.landUpLayer = null;
      this.fastGetBtn = null;
      this.topLayerOnStage = null;
      this.topGoldIcon = null;
      this.topDiamondIcon = null;
      this.warehouseBtn = null;
      this.moneyLb = null;
      this.figureBox = null;
      this.figureBox2 = null;
      this.getRewardPrefab = null;
      this.floatRewardIcon = null;
      this.goldAdd = null;
      this.diamondAdd = null;
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
      this.guideHand = null;
      this.guidIdList = [1, 2, 3, 5];
      this.hasGuide = false;
      this.clickTimes = 0;
      this.stealAll = { list: [], rewardDiamond: 0, nickname: null };
      this.orderQueueIng = false;
      this.hindOrderLevel = null;
      this.friendInviteData = [];
    }
    onOpened() {
      _MainView.inst = this;
      [
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
              this.timeGuide();
            }
          }
        });
      } else {
        this.timeGuide();
      }
      this.guidHandAnimation();
      this.guideHand.visible = false;
      this.friendShareGuide(true);
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
    }
    timeGuide() {
      Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.timeGuideTouch);
      this.timeGuideTouch();
    }
    timeGuideTouch() {
      Laya.timer.clear(this, this.timeGuideAction);
      Laya.timer.once(15e3, this, this.timeGuideAction);
    }
    timeGuideAction() {
      if (this.hasGuide || this.isOuter) {
        return;
      }
      this.timeGuideTouch();
      this.guideHand.visible = true;
      this.updateGuideTask();
    }
    hideGuideHand() {
      this.guideHand.visible = false;
      this.timeGuide();
      this.hasGuide = false;
    }
    updateGuideTask() {
      var _a, _b;
      let landEmpty = false, land, unlockLand;
      for (let x = 0; x < this.landList.length; x++) {
        if (this.landList[x].data && !this.landList[x].data.productId) {
          landEmpty = true;
          break;
        } else {
          if (((_a = this.landList[x].data) == null ? void 0 : _a.productId) && ((_b = this.landList[x].data) == null ? void 0 : _b.matureTimeLeft)) {
            land = this.landList[x];
            break;
          }
        }
      }
      for (let x = 0; x < this.landList.length; x++) {
        if (!this.landList[x].data) {
          unlockLand = this.landList[x];
          break;
        }
      }
      if (!unlockLand && this.guidIdList.indexOf(5) > -1) {
        this.guidIdList.splice(this.guidIdList.indexOf(5), 1);
        console.log(this.guidIdList);
      }
      this.hasGuide = true;
      let pos = { x: 0, y: 0 };
      if (landEmpty) {
        pos = this.getNodeTopLayerPos(this.step4);
      } else {
        if (!land) {
          return null;
        }
        let id = this.guidIdList[Math.floor(Math.random() * this.guidIdList.length)];
        switch (id) {
          case 1:
            pos = this.getNodeTopLayerPos(land.owner);
            pos.x += 100;
            pos.y += 100;
            break;
          case 2:
            pos = this.getNodeTopLayerPos(this.step9);
            pos.x += 100;
            pos.y += 100;
            break;
          case 3:
            pos = this.getNodeTopLayerPos(this.step5);
            pos.x += 100;
            pos.y += 100;
            break;
          case 5:
            pos = this.getNodeTopLayerPos(unlockLand.owner);
            pos.x += 100;
            pos.y += 100;
            break;
        }
      }
      this.guideHand.pos(pos.x, pos.y);
    }
    getNodeTopLayerPos(node) {
      return this.topLayerOnStage.globalToLocal(node.parent.localToGlobal(new Laya.Point(node.x, node.y)));
    }
    guidHandAnimation() {
      this.guidHandAni = Laya.TimeLine.to(this.guideHand, { rotation: -15 }, 400, null).to(this.guideHand, { rotation: 0 }, 400);
      this.guidHandAni.play(null, true);
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
          this.petBox.getChildByName("dog_ani").source = `res/dog_${e}.atlas`;
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
          this.petBox.getChildByName("box").getChildByName("hungry").visible = !e;
        }
      }).key("digestCountDown", (e) => {
        Laya.timer.clear(this, this.digestCountDown);
        if (this.petBox.visible) {
          Laya.timer.once(e * 1e3, this, this.digestCountDown);
        }
      }).key("vitality", (e) => {
        let vitality = e / ConfigGame_default.userVitalityLimit;
        Laya.timer.frameOnce(1, this, () => {
          core_default.eventGlobal.event(EventMaps.update_red_dot, [
            RedDotType.anyDoor,
            Boolean(e)
          ]);
        });
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
      if (UserInfo_default.adTimes > 100 || UserInfo_default.continuousAdTimes > 20) {
        this.clickTimes++;
        if (!(this.clickTimes % 5)) {
          AppCore.runAppFunction({
            uri: AppEventMap.ad,
            data: { adType: 1 }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.ad,
            data: { adType: 3 }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.eventCount,
            data: { type: "full_Screen" }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.eventCount,
            data: { type: "bottom_advertisement" }
          });
        }
      }
      switch (e.target.name) {
        case "closeAddLandLayer":
          this.addLandLayer.visible = false;
          break;
        case "task":
          core_default.view.open(Res_default.views.TaskView);
          break;
          break;
        case "mail":
          this.openMail();
          break;
        case "shop":
          core_default.view.open(Res_default.views.ShopView);
          this.hideGuideHand();
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
        case "dog_ani":
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
        case "reward_share_guide":
          this.goFriendRewardView();
          break;
        case "fast_get":
          this.fastGet();
          break;
      }
    }
    fastGet() {
      return __async(this, null, function* () {
        var _a, _b, _c, _d, _e;
        if (!this.canClick) {
          return;
        }
        this.canClick = false;
        if (this.isOuter) {
          let lands = [], landComList = [];
          for (let x = 0; x < this.landList.length; x++) {
            if (((_a = this.landList[x].data) == null ? void 0 : _a.productId) && !((_b = this.landList[x].data) == null ? void 0 : _b.matureTimeLeft) && ((_c = this.landList[x].data) == null ? void 0 : _c.canSteal)) {
              lands.push(this.landList[x].data.id);
              landComList.push(this.landList[x]);
            }
          }
          if (!lands.length) {
            core_default.view.openHint({ text: "\u6CA1\u6709\u53EF\u4EE5\u5077\u7684", call: () => {
            } });
            this.canClick = true;
            return;
          }
          HttpControl.inst.send({
            api: ApiHttp.landSteal,
            data: {
              landId: lands,
              type: ConfigGame_default.ApiTypeDefault,
              uid: landComList[0].stealUid
            }
          }).then((d) => {
            this.canClick = true;
            UserInfo_default.vitality = d.vitality;
            d.list.forEach((data, i) => {
              landComList[i].stealFoodEvent(data, false);
            });
          }).catch(() => {
            this.canClick = true;
          });
        } else {
          let diamond = 0, list = [], lands = [], landComList = [];
          for (let x = 0; x < this.landList.length; x++) {
            if (((_d = this.landList[x].data) == null ? void 0 : _d.productId) && !((_e = this.landList[x].data) == null ? void 0 : _e.matureTimeLeft)) {
              lands.push(this.landList[x].data.id);
              landComList.push(this.landList[x]);
            }
          }
          if (!lands.length) {
            core_default.view.openHint({ text: "\u6CA1\u6709\u6210\u719F\u7684\u519C\u4F5C\u7269", call: () => {
            } });
            this.canClick = true;
            return;
          }
          HttpControl.inst.send({
            api: ApiHttp.landGather,
            data: {
              landId: lands,
              type: ConfigGame_default.ApiTypeDefault
            }
          }).then((d) => {
            this.canClick = true;
            d.list.forEach((data) => {
              diamond += data.rewardDiamond;
              WarehouseService_default.add(data.plantId, data.amount);
              for (let x = 0; x < list.length; x++) {
                if (list[x].plantId == data.plantId) {
                  list[x].amount += data.amount;
                  return;
                }
              }
              list.push({
                plantId: data.plantId,
                amount: data.amount
              });
            });
            core_default.view.open(Res_default.views.GatherDescView, {
              parm: {
                type: 3,
                data: list,
                diamond,
                call: (double) => {
                  let mul = 1;
                  if (double) {
                    mul = 2;
                  }
                  d.list.forEach((data, i) => {
                    if (double)
                      WarehouseService_default.add(data.plantId, data.amount);
                    landComList[i].gatherEvent(data.plantId, data.amount * mul, data.rewardDiamond * mul);
                  });
                }
              }
            });
          });
        }
      });
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
      if (this.isOuter)
        return;
      let box = this.orderBox.getChildByName("order_box"), d = TableAnalyze_default.table("order").get(UserInfo_default.orderLevel + 1), reward, rewardCount = 0, rewardDiamondCount = 0, curCount = 0, maxCount = 0, progress = 0;
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
            } else {
              rewardDiamondCount += e.count * maxCount;
            }
          });
        } else {
          item.visible = false;
        }
      }
      if (reward) {
        let goldBox = box.getChildByName("gold_box"), diamondBox = box.getChildByName("diamond_box");
        goldBox.getChildByName("icon").skin = reward.obj.icon;
        goldBox.getChildByName("value").value = `${rewardCount + Math.round(rewardCount * d.commission)}`;
        if (d.extraReward) {
          diamondBox.getChildByName("icon").skin = d.extraReward.obj.icon;
          diamondBox.getChildByName("value").value = `${d.extraReward.count + rewardDiamondCount + Math.round(rewardDiamondCount * d.commission)}`;
          diamondBox.visible = true;
          goldBox.y = 46;
        } else {
          goldBox.y = 66;
          diamondBox.visible = false;
        }
      }
      box.getChildByName("name_title").text = `\u5B8C\u6210${UserInfo_default.orderLevel + 1}\u7EA7\u8BA2\u5355`;
      if (!this.orderQueueIng) {
        if (progress == d.condition.length) {
          const condition = d.condition;
          this.orderQueueIng = true;
          let adDiamond = d.extraReward.count + rewardDiamondCount + Math.round(rewardDiamondCount * d.commission), adGold = rewardCount + Math.round(rewardCount * d.commission);
          Laya.timer.frameOnce(1, this, () => {
            core_default.eventGlobal.event(EventMaps.update_red_dot, [RedDotType.order, true]);
          });
          if (this.hindOrderLevel) {
            this.orderQueueIng = false;
            return;
          }
          this.hindOrderLevel = 1;
          core_default.view.open(Res_default.views.GatherDescView, {
            parm: {
              type: 1,
              data: {
                diamond: adDiamond,
                gold: adGold
              },
              call: (double) => {
                this.hindOrderLevel = 0;
                condition.forEach((e) => {
                  WarehouseService_default.reduceAmount(e.plant.id, e.count);
                });
                this.orderQueueIng = false;
                UserInfo_default.orderLevel++;
                let reward2 = [];
                reward2.push({
                  obj: TableAnalyze_default.table("currency").get(ConfigGame_default.goldId),
                  count: adGold * (double ? 2 : 1),
                  posType: 1
                });
                if (d.extraReward) {
                  reward2.push({
                    obj: TableAnalyze_default.table("currency").get(d.extraReward.obj.id),
                    count: adDiamond * (double ? 2 : 1),
                    posType: 2
                  });
                }
                this.playGetRewardAni({
                  node: box.getChildByName("gold_box"),
                  list: reward2,
                  callBack: () => {
                    this.updateOrder();
                  }
                });
                if (!double && !(UserInfo_default.orderLevel % 3)) {
                  Laya.timer.once(300, this, () => {
                    AppCore.runAppFunction({
                      uri: AppEventMap.ad,
                      data: { adType: 1 }
                    });
                    AppCore.runAppFunction({
                      uri: AppEventMap.eventCount,
                      data: { type: "full_Screen" }
                    });
                  });
                }
              },
              closeEvent: () => {
                this.orderQueueIng = false;
              }
            }
          });
        } else {
          Laya.timer.frameOnce(1, this, () => {
            core_default.eventGlobal.event(EventMaps.update_red_dot, [RedDotType.order, false]);
          });
        }
      }
    }
    switchLandLevelUp(show) {
      let bg = this.landUpLayer.getChildByName("bg");
      if (show) {
        this.hideGuideHand();
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
        if (!(obj == null ? void 0 : obj.notFly)) {
          switch (d.posType) {
            case 1:
              this.addGoldDiamondAni(this.goldAdd, d.count);
              break;
            case 2:
              this.addGoldDiamondAni(this.diamondAdd, d.count);
              break;
          }
        }
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
    addGoldDiamondAni(node, count) {
      node.visible = true;
      node.alpha = 0;
      node.value = `+${count}`;
      node.y = 30;
      node.offAll();
      Laya.Tween.to(node, { alpha: 1, y: -30 }, 500, null, new Laya.Handler(this, () => {
        Laya.timer.once(2e3, this, () => {
          node.alpha = 0;
        });
      }));
    }
    playAdReward(target, adReward) {
      let rewardList = [];
      adReward == null ? void 0 : adReward.forEach((d) => {
        console.log(d.id == ConfigGame_default.goldId ? 2 : 1);
        rewardList.push({
          obj: TableAnalyze_default.table("currency").get(d.id),
          count: d.amount,
          posType: d.id == ConfigGame_default.goldId ? 1 : 2
        });
      });
      core_default.eventGlobal.event(EventMaps.play_get_reward, {
        node: target,
        list: rewardList
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
          data: { clear: true }
        }).then(() => {
          this.goHomeNodeData();
        });
      });
    }
    goHomeNodeData(updateOutTime = false) {
      if (updateOutTime) {
        this.outerTime = Date.now();
      }
      this.isOuter = false;
      Laya.timer.once(300, this, () => {
        core_default.view.setOverView(false);
        this.goFriend(null);
        this.updateHitLandAdd();
        if (this.stealAll.list.length) {
          if (UserInfo_default.adTimes > 100 || UserInfo_default.continuousAdTimes > 20) {
            AppCore.runAppFunction({
              uri: AppEventMap.ad,
              data: { adType: 1 }
            });
            AppCore.runAppFunction({
              uri: AppEventMap.ad,
              data: { adType: 3 }
            });
            AppCore.runAppFunction({
              uri: AppEventMap.eventCount,
              data: { type: "full_Screen" }
            });
            AppCore.runAppFunction({
              uri: AppEventMap.eventCount,
              data: { type: "bottom_advertisement" }
            });
          }
          core_default.view.open(Res_default.views.GatherDescView, {
            parm: {
              type: 2,
              data: this.stealAll.list,
              diamond: this.stealAll.rewardDiamond,
              nickname: this.stealAll.nickname,
              call: (double, target) => __async(this, null, function* () {
                if (double) {
                  let data = yield HttpControl.inst.send({
                    api: ApiHttp.landSteal,
                    data: {
                      landId: [],
                      type: ConfigGame_default.ApiTypeAD,
                      uid: 0
                    }
                  });
                  let addDiamond = 0;
                  const rewardList = [];
                  data.list.forEach((d) => {
                    WarehouseService_default.add(d.plantId, d.amount);
                    UserInfo_default.diamond += d.rewardDiamond;
                    addDiamond += d.rewardDiamond;
                    rewardList.push({
                      obj: TableAnalyze_default.table("plant").get(d.plantId),
                      count: d.amount,
                      posType: 3
                    });
                  });
                  if (rewardList.length) {
                    core_default.eventGlobal.event(EventMaps.play_get_reward, {
                      node: target,
                      list: rewardList
                    });
                  }
                  data.adReward.forEach((data2, i) => {
                    if (addDiamond && data2.id == ConfigGame_default.diamondId) {
                      data2.amount += addDiamond;
                    }
                  });
                  core_default.eventGlobal.event(EventMaps.play_ad_get_reward, [
                    target,
                    data.adReward
                  ]);
                  core_default.view.close(Res_default.views.GatherDescView);
                }
              })
            }
          });
        }
      });
    }
    goToNeighbor() {
      this.hideGuideHand();
      core_default.view.setOverView(true, () => {
        this.stealAll = { list: [], rewardDiamond: 0, nickname: null };
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
      if (!this.isOuter) {
        this.stealAll = { list: [], rewardDiamond: 0, nickname: null };
      }
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
          land.updateData({ list: null });
        }
        land.plantIconAni(Boolean((_a = land.data) == null ? void 0 : _a.productId));
      }
      this.updateAllStateIcon();
      if (this.isOuter) {
        this.taskBox.visible = false;
      } else {
        this.taskBox.visible = true;
      }
      this.updateFriendView(d, friendData);
    }
    updateFriendView(d, friendData) {
      const nickname = d == null ? void 0 : d.nickname, pedId = d == null ? void 0 : d.dogId, avatar = (friendData == null ? void 0 : friendData.avatar) || (d == null ? void 0 : d.avatar);
      console.log(avatar);
      const topBox = this.orderBox.parent, moneyBox = topBox.getChildByName("money_box"), countDown = topBox.getChildByName("count_down"), orderBox = this.orderBox.getChildByName("order_box"), friendName = this.orderBox.getChildByName("friend_name"), bottomList = [
        this.bottomBox.getChildByName("task"),
        this.bottomBox.getChildByName("order_box"),
        this.bottomBox.getChildByName("mail")
      ];
      if (this.isOuter) {
        friendName.text = `${nickname}\u7684\u519C\u573A`;
        orderBox.visible = false;
        friendName.visible = true;
        moneyBox.visible = false;
        countDown.visible = true;
        this.stealAll.nickname = nickname;
        countDown.text = Tools.formatSeconds(this.outCountDownNumber);
        Laya.timer.loop(1e3, this, this.outCountDownEvent, [countDown]);
        if (avatar)
          this.avatarNode.skin = avatar;
        if (pedId) {
          this.petBox.visible = true;
          this.petBox.getChildByName("dog_ani").source = `res/dog_${pedId}.atlas`;
        } else {
          this.petBox.visible = false;
        }
        this.petBox.getChildByName("box").visible = false;
        this.figureBox.visible = false;
        this.figureBox2.visible = false;
        this.fastGetBtn.skin = "main_scene/img_ongkeySteel.png";
      } else {
        this.fastGetBtn.skin = "main_scene/img_ongkeyGet.png";
        this.figureBox.visible = true;
        this.figureBox2.visible = true;
        this.outCountDownNumber = 60;
        Laya.timer.clear(this, this.outCountDownEvent);
        orderBox.visible = true;
        friendName.visible = false;
        moneyBox.visible = true;
        countDown.visible = false;
        if (UserInfo_default.avatar) {
          this.avatarNode.skin = UserInfo_default.avatar;
        } else {
          this.avatarNode.skin = `main_scene/img_defaultPortrait.png`;
        }
        if (UserInfo_default.warePetId) {
          this.petBox.visible = true;
          this.petBox.getChildByName("dog_ani").source = `res/dog_${UserInfo_default.warePetId}.atlas`;
        } else {
          this.petBox.visible = false;
        }
        this.petBox.getChildByName("box").visible = true;
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
    onHdDestroy() {
      var _a;
      (_a = this.guidHandAni) == null ? void 0 : _a.destroy();
      this.rewardShareIconAni(false);
    }
    goFriendRewardView() {
      core_default.view.open(Res_default.views.FriendsRewardView, {
        parm: {
          list: this.friendInviteData,
          call: () => {
          }
        }
      });
    }
    friendShareGuide(init, data) {
      return __async(this, null, function* () {
        if (init) {
          let d = yield HttpControl.inst.send({
            api: ApiHttp.friendInviteList,
            data: {}
          });
          data = d.list;
        }
        this.friendInviteData = data;
        if (data.length < 3) {
          this.rewardShareIconAni(true);
          return;
        }
        let hasReward = false;
        for (let x = 0; x < 3; x++) {
          if (!data[x].receivedReward) {
            hasReward = true;
            break;
          }
        }
        this.rewardShareIconAni(hasReward);
      });
    }
    rewardShareIconAni(show) {
      var _a;
      if (show) {
        this.rewardShareGuide.visible = true;
        if (!this.rewardShareGuideAnimation) {
          this.rewardShareGuideAnimation = Laya.TimeLine.to(this.rewardShareGuide, { rotation: 15 }, 150, null, 5e3).to(this.rewardShareGuide, { rotation: -15 }, 300, null).to(this.rewardShareGuide, { rotation: 15 }, 300, null).to(this.rewardShareGuide, { rotation: 0 }, 150, null);
        }
        this.rewardShareGuideAnimation.play(null, true);
      } else {
        (_a = this.rewardShareGuideAnimation) == null ? void 0 : _a.destroy();
        this.rewardShareGuideAnimation = null;
        this.rewardShareGuide.visible = false;
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
    core_default.eventOn(EventMaps.go_home)
  ], MainView.prototype, "goHomeNodeData", 1);
  __decorateClass([
    core_default.eventOn(EventMaps.go_friend_home)
  ], MainView.prototype, "goFriendListen", 1);
  __decorateClass([
    core_default.eventOn(EventMaps.update_friend_share_guide)
  ], MainView.prototype, "friendShareGuide", 1);

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
      const data = this.itemList.array[i];
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
          core_default.view.open(Res_default.views.FriendsDescView, {
            parm: {
              call: () => {
                this.openReward();
              }
            }
          });
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
        console.log(this.viewState);
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
        Heartbeat_default.updateMsg();
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
          core_default.eventGlobal.event(EventMaps.go_home, [true]);
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
        AppCore.runAppFunction({
          uri: AppEventMap.eventCount,
          data: { type: "Addfriends" }
        });
        Heartbeat_default.updateMsg();
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
      }).then((d) => {
        this.friendsList = [];
        this.itemList.array = this.friendsList;
        this.itemList.refresh();
        core_default.view.openHint({ text: "\u5DF2\u53D1\u9001\u6FC0\u60C5", call: () => {
        } });
        this.canClick = true;
        if (d.taskState) {
          TaskService_default.taskAddTimes(1009);
        }
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

  // src/view/GatherDescView.ts
  var GatherDescView = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.canClick = true;
    }
    onOpened(d) {
      var _a;
      this.stealGet.visible = false;
      this.order.visible = false;
      this.data = d;
      this.stealGet.vScrollBarSkin = null;
      this.order.vScrollBarSkin = null;
      Laya.timer.once(300, this, () => {
        AppCore.runAppFunction({
          uri: AppEventMap.ad,
          data: { adType: 3 }
        });
        AppCore.runAppFunction({
          uri: AppEventMap.ad,
          data: { adType: 2 }
        });
        AppCore.runAppFunction({
          uri: AppEventMap.eventCount,
          data: { type: "half_screen_advertisement" }
        });
        AppCore.runAppFunction({
          uri: AppEventMap.eventCount,
          data: { type: "bottom_advertisement" }
        });
      });
      switch (d.type) {
        case 1:
          this.order.visible = true;
          this.order.getChildByName("desc").getChildByName("lb2").text = `${UserInfo_default.orderLevel + 1}`;
          this.order.getChildByName("price_box").getChildAt(0).getChildByName("icon").skin = TableAnalyze_default.table("currency").get(ConfigGame_default.goldId).icon;
          this.order.getChildByName("price_box").getChildAt(0).getChildByName("lb").text = "x" + d.data.gold;
          this.order.getChildByName("price_box").getChildAt(1).getChildByName("lb").text = "x" + d.data.diamond;
          this.order.getChildByName("price_box").getChildAt(1).getChildByName("icon").skin = TableAnalyze_default.table("currency").get(ConfigGame_default.diamondId).icon;
          break;
        case 2:
          this.stealGet.visible = true;
          this.stealGet.getChildByName("title").text = "\u5077\u83DC\u6210\u529F";
          this.stealGet.getChildByName("top_lb").text = `\u4F60\u6F5C\u5165\u4E86${((_a = this.data) == null ? void 0 : _a.nickname) || ""}...\u7684\u83DC\u5730\uFF0C\u5077\u8D70\u4E86\uFF1A`;
          this.updateDescList();
          break;
        case 3:
          this.stealGet.visible = true;
          this.stealGet.getChildByName("title").text = "\u519C\u4F5C\u7269\u6210\u719F";
          this.stealGet.getChildByName("top_lb").text = "\u901A\u8FC7\u60A8\u8F9B\u52E4\u52B3\u4F5C\uFF0C\u6536\u83B7\u4E86\uFF1A";
          this.updateDescList();
          break;
      }
    }
    updateDescList() {
      var _a;
      let list = this.data.data;
      let _x = 0, _y = 0;
      for (let x = 0; x < list.length; x++) {
        let itemNode = this.item.create();
        if (_x > 3) {
          _y += 1;
          _x = 0;
        }
        itemNode.x = 28 + _x * 190;
        itemNode.y = 203 + _y * 95;
        let plant = TableAnalyze_default.table("plant").get(list[x].plantId);
        const icon = itemNode.getChildByName("icon");
        icon.skin = plant.icon;
        icon.scale(0.7, 0.7);
        icon.anchorX = 0.5;
        itemNode.getChildByName("lb").text = `x${list[x].amount}`;
        this.stealGet.addChild(itemNode);
        _x++;
      }
      let lb = this.stealGet.getChildByName("bottom_lb");
      lb.y += _y * 95;
      lb.getChildByName("diamond").getChildByName("icon").skin = TableAnalyze_default.table("currency").get(ConfigGame_default.diamondId).icon;
      lb.getChildByName("diamond").getChildByName("lb").text = `x${((_a = this.data) == null ? void 0 : _a.diamond) || 0}`;
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.GatherDescView);
          if (this.data.type != 1) {
            if (this.data.call) {
              this.data.call(false);
            }
          }
          break;
        case "receive":
        case "receive_double":
          if (!this.canClick) {
            return;
          }
          this.canClick = false;
          if (this.data.type == 1) {
            HttpControl.inst.send({
              api: ApiHttp.orderReward,
              data: {
                orderId: UserInfo_default.orderLevel + 1,
                type: e.target.name == "receive" ? ConfigGame_default.ApiTypeDefault : ConfigGame_default.ApiTypeAD
              }
            }).then(() => {
              core_default.view.close(Res_default.views.GatherDescView);
              this.canClick = true;
              if (this.data.call) {
                this.data.call(e.target.name != "receive");
              }
            }).catch(() => {
              this.canClick = true;
            });
          } else {
            if (e.target.name == "receive_double") {
              if (this.data.type == 2) {
                this.data.call(true, e.target);
              } else {
                HttpControl.inst.send({
                  api: ApiHttp.landGather,
                  data: {
                    landId: [],
                    type: ConfigGame_default.ApiTypeAD
                  }
                }).then((d) => {
                  if (this.data.call) {
                    this.data.call(true);
                    d.adReward.forEach((data, i) => {
                      if (this.data.diamond && data.id == ConfigGame_default.diamondId) {
                        data.amount += this.data.diamond * 2;
                      }
                    });
                    core_default.eventGlobal.event(EventMaps.play_ad_get_reward, [
                      e.target,
                      d.adReward
                    ]);
                  }
                  core_default.view.close(Res_default.views.GatherDescView);
                });
              }
            } else {
              if (this.data.call) {
                this.data.call(false);
              }
              core_default.view.close(Res_default.views.GatherDescView);
            }
          }
          break;
      }
    }
    onHdDestroy() {
      AppCore.runAppFunction({
        uri: AppEventMap.closeAd,
        data: {}
      });
      if (this.data.closeEvent) {
        this.data.closeEvent();
      }
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
        "\u5B8C\u6210\u8BA2\u5355\u83B7\u5F97\u94BB\u77F3\u53EF\u4EE5\u5151\u6362\u7EA2\u5305\u3002",
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
        if (this.data.call)
          this.data.call();
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
      if (UserInfo_default.adTimes > 100 || UserInfo_default.continuousAdTimes > 20) {
        Laya.timer.once(300, this, () => {
          AppCore.runAppFunction({
            uri: AppEventMap.ad,
            data: { adType: 2 }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.ad,
            data: { adType: 3 }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.eventCount,
            data: { type: "half_screen_advertisement" }
          });
          AppCore.runAppFunction({
            uri: AppEventMap.eventCount,
            data: { type: "bottom_advertisement" }
          });
        });
      }
    }
    onHdAwake() {
      if (UserInfo_default.adTimes > 100 || UserInfo_default.continuousAdTimes > 20) {
        this.owner.getChildByName("center").centerY = -310;
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
    onHdDestroy() {
      AppCore.runAppFunction({
        uri: AppEventMap.closeAd,
        data: {}
      });
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
            AppCore.runAppFunction({
              uri: AppEventMap.eventCount,
              data: { type: "Signin" }
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
          if (testK && testK.length > 1 && BuildType.online != "debug") {
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
                core_default.view.openHint({
                  text: `\u5FAE\u4FE1\u767B\u5F55\u5931\u8D25[${data.code}]\uFF0C\u8BF7\u91CD\u8BD5`,
                  call: () => {
                    location.reload();
                  }
                });
              } else {
                wxOpenId = data.data["openid"];
                avatar = data.data["iconurl"];
                nickname = data.data["name"];
              }
            }
          }
          if (!wxOpenId) {
            core_default.view.openHint({
              text: "\u672A\u83B7\u53D6\u5230\u5FAE\u4FE1id",
              call: () => {
                this.canClick = true;
              }
            });
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
                  core_default.view.openHint({
                    text: `\u767B\u5F55\u5931\u8D25[${data.code}]`,
                    call: () => {
                      location.reload();
                    }
                  });
                } else {
                  ConfigGame_default.channel = data.data["channel"];
                }
              }
            });
            AppCore.runAppFunction({
              uri: AppEventMap.eventCount,
              data: { type: "Signin" }
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
      this.title.text = `${data.message}\u6F5C\u5165\u4E86\u4F60\u7684\u83DC\u5730\u5077\u83DC`;
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
          Heartbeat_default.updateMsg();
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
      this.topDesc = null;
    }
    onOpened() {
      this.dataList = TableAnalyze_default.table("order").list;
      let orderOldLv = UserInfo_default.orderLevel || 0;
      this.dataList.sort((a, b) => {
        return a.id + (a.id <= orderOldLv ? 2e3 : 0) - (b.id + (b.id <= orderOldLv ? 2e3 : 0));
      });
      this.orderList.array = this.dataList;
      this.orderList.renderHandler = new Laya.Handler(this, this.renderList);
      this.orderList.vScrollBarSkin = null;
      let reward = 0;
      for (let x = 0; x < this.dataList.length; x++) {
        let addDiamond = 0;
        this.dataList[x].condition.forEach((d) => {
          d.plant.gain.forEach((p) => {
            if (p.obj.id === ConfigGame_default.diamondId) {
              addDiamond += p.count * d.count;
            }
          });
        });
        reward += this.dataList[x].extraReward.count + addDiamond + Math.round(addDiamond * this.dataList[x].commission);
      }
      let withdrawal = TableAnalyze_default.table("config").get("withdrawal").value;
      this.topDesc.getChildAt(0).text = "\u5B8C\u6210\u6240\u6709\u8BA2\u5355\u53EF\u83B7\u5F97";
      this.topDesc.getChildAt(1).text = `${reward}`;
    }
    renderList(cell, i) {
      var _a;
      let d = this.dataList[i], reward, rewardCount = 0, rewardDiamondCount = 0, curCount = 0, maxCount = 0, progress = 0, rewardBox = cell.getChildByName("reward_box"), order_lv = cell.getChildByName("order_lv");
      order_lv.text = `${d.id}\u7EA7\u8BA2\u5355`;
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
            } else {
              rewardDiamondCount += e.count * d.condition[x].count;
            }
          });
        } else {
          item.visible = false;
        }
      }
      let diamond = cell.getChildByName("reward_box_diamond");
      let btn = cell.getChildByName("btn"), finishIcon = cell.getChildByName("finish"), curIcon = cell.getChildByName("cur_icon"), receiveBtn = cell.getChildByName("receive_btn"), lv_box = cell.getChildByName("lv_box");
      finishIcon.visible = false;
      curIcon.visible = false;
      diamond.visible = false;
      btn.visible = true;
      rewardBox.y = 57;
      rewardBox.visible = true;
      lv_box.visible = true;
      order_lv.visible = true;
      receiveBtn.visible = false;
      if (d.id > UserInfo_default.orderLevel + 1) {
        btn.skin = this.btnLockRes;
        btn.active = false;
        if (d.extraReward) {
          btn.visible = false;
          diamond.getChildByName("icon").skin = d.extraReward.obj.icon;
          diamond.getChildByName("value").text = `+${d.extraReward.count + rewardDiamondCount + Math.round(rewardDiamondCount * d.commission)}`;
          diamond.visible = true;
        } else {
          btn.visible = true;
        }
      } else {
        if (d.id == UserInfo_default.orderLevel + 1) {
          if (d.extraReward) {
            curIcon.visible = true;
            lv_box.visible = false;
            btn.visible = false;
            order_lv.visible = false;
            diamond.getChildByName("icon").skin = d.extraReward.obj.icon;
            diamond.getChildByName("value").text = `+${d.extraReward.count + rewardDiamondCount + Math.round(rewardDiamondCount * d.commission)}`;
            diamond.visible = true;
          } else {
            btn.skin = this.btnResCur;
          }
          if (progress == d.condition.length) {
            receiveBtn.visible = true;
            rewardBox.visible = false;
            diamond.visible = false;
          }
        } else {
          console.log("\u5DF2\u5B8C\u6210");
          btn.active = false;
          btn.visible = false;
          finishIcon.visible = true;
          if (d.extraReward) {
            rewardBox.y = 57;
          } else {
            rewardBox.y = 100;
          }
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
        case "receive_btn":
          MainView.inst.hindOrderLevel = 0;
          core_default.eventGlobal.event(EventMaps.update_Order);
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
      AppCore.runAppFunction({
        uri: AppEventMap.ad,
        data: { adType: 3 }
      });
      AppCore.runAppFunction({
        uri: AppEventMap.eventCount,
        data: { type: "bottom_advertisement" }
      });
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
    onHdDestroy() {
      AppCore.runAppFunction({
        uri: AppEventMap.closeAd,
        data: {}
      });
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
      this.descPriceBox = null;
      this.conditionBox = null;
      this.priceDataList = [];
      this.priceSelectIndex = null;
      this.inviteNum = 0;
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
      this.canPrice = true;
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
      this.canClick = false;
      HttpControl.inst.send({ api: ApiHttp.friendInviteList }).then((d) => {
        this.canClick = true;
        this.inviteNum = d.list.length;
      }).catch(() => {
        this.canClick = true;
      });
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
      cell.getChildByName("name").text = d.base.name + (this.topBtnSelectIndex ? "" : "\u79CD\u5B50");
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
          }).then((d) => {
            PlantService_default.list[this.itemListSelectIndex].lock = false;
            this.itemList.changeItem(this.itemListSelectIndex, PlantService_default.list[this.itemListSelectIndex]);
            this.canClick = true;
            if (e.target.name == "ad_unlock") {
              core_default.eventGlobal.event(EventMaps.play_ad_get_reward, [
                e.target,
                d.adReward
              ]);
            } else {
              AppCore.runAppFunction({
                uri: AppEventMap.eventCount,
                data: { type: "Freeunlock" }
              });
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
        case "record_btn":
          this.openWithdrawRecord();
          break;
        case "go_jump":
          this.priceGoJump(e.target);
          break;
      }
    }
    priceGoJump(node) {
      if (node.dataSource == 1) {
        core_default.view.close(Res_default.views.ShopView);
      } else if (node.dataSource == 2) {
        core_default.view.close(Res_default.views.ShopView);
        HttpControl.inst.send({
          api: ApiHttp.friendInviteList,
          data: {}
        }).then((d) => {
          core_default.view.open(Res_default.views.FriendsRewardView, {
            parm: {
              list: d.list,
              call: () => {
              }
            }
          });
        });
      }
    }
    openWithdrawRecord() {
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      HttpControl.inst.send({
        api: ApiHttp.withdrawRecord,
        data: {}
      }).then((d) => {
        this.canClick = true;
        core_default.view.open(Res_default.views.WithdrawRecordView, { parm: d });
      });
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
              posType: 3
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
          UserInfo_default.digestCountDown = TableAnalyze_default.table("config").get("petDigestIntervalTime").value;
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
      this.petIcon.source = `res/dog_${pet.base.id}.atlas`;
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
      this.updatePriceDesc();
    }
    updatePriceDesc() {
      let data = TableAnalyze_default.table("config").get("withdrawal_times").value[this.priceSelectIndex];
      let desc = this.conditionBox.getChildByName("desc");
      let barBox = this.conditionBox.getChildByName("bar_box");
      let btn = this.conditionBox.getChildByName("go_jump");
      this.conditionBox.visible = false;
      if (UserInfo_default.orderLevel < data.orderLv) {
        this.conditionBox.visible = true;
        this.descPriceBox.visible = false;
        desc.getChildByName("lb1").text = `\u8BA2\u5355`;
        desc.getChildByName("lb2").text = `${data.orderLv}`;
        desc.getChildByName("lb3").text = `\u7EA7\u5373\u53EF\u63D0\u73B0`;
        barBox.getChildByName("bar").width = (UserInfo_default.orderLevel > data.orderLv ? 1 : UserInfo_default.orderLevel / data.orderLv) * 434;
        barBox.getChildByName("lb").text = `${UserInfo_default.orderLevel > data.orderLv ? data.orderLv : UserInfo_default.orderLevel}/${data.orderLv}`;
        btn.skin = `game/img_goToWork.png`;
        btn.dataSource = 1;
        this.canPrice = false;
        return;
      }
      if (this.inviteNum < data.inviteAmount) {
        this.conditionBox.visible = true;
        this.descPriceBox.visible = false;
        desc.getChildByName("lb1").text = `\u9080\u8BF7`;
        desc.getChildByName("lb2").text = `${data.inviteAmount}`;
        desc.getChildByName("lb3").text = `\u4E2A\u5373\u53EF\u63D0\u73B0`;
        barBox.getChildByName("bar").width = (this.inviteNum > data.inviteAmount ? 1 : this.inviteNum / data.inviteAmount) * 434;
        barBox.getChildByName("lb").text = `${this.inviteNum > data.inviteAmount ? data.inviteAmount : this.inviteNum}/${data.inviteAmount}`;
        btn.skin = `game/img_goToInvite.png`;
        btn.dataSource = 2;
        this.canPrice = false;
        return;
      }
      this.canPrice = true;
      this.descPriceBox.visible = true;
    }
    withdraw() {
      if (!this.canPrice) {
        core_default.view.openHint({ text: "\u63D0\u73B0\u6761\u4EF6\u4E0D\u6EE1\u8DB3", call: () => {
        } });
        return;
      }
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
        AppCore.runAppFunction({
          uri: AppEventMap.eventCount,
          data: { type: "Withdrawal" }
        });
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
        cell.getChildByName("times_box").getChildByName("times").text = `\u65B0\u624B\u5956\u52B1`;
        if (times <= 0) {
          cell.disabled = true;
        }
        if (data.price > 0.3)
          cell.getChildByName("times_box").visible = false;
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
      Laya.timer.once(300, this, () => {
        AppCore.runAppFunction({
          uri: AppEventMap.ad,
          data: { adType: 3 }
        });
        AppCore.runAppFunction({
          uri: AppEventMap.ad,
          data: { adType: 2 }
        });
        AppCore.runAppFunction({
          uri: AppEventMap.eventCount,
          data: { type: "half_screen_advertisement" }
        });
        AppCore.runAppFunction({
          uri: AppEventMap.eventCount,
          data: { type: "bottom_advertisement" }
        });
      });
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
              AppCore.runAppFunction({
                uri: AppEventMap.eventCount,
                data: { type: "punchtheclock" }
              });
            }
            AppCore.runAppFunction({
              uri: AppEventMap.eventCount,
              data: { type: "Advertisingacceleration" }
            });
            core_default.view.close(Res_default.views.SpeedUpView);
            core_default.eventGlobal.event(EventMaps.land_speed_up);
            core_default.eventGlobal.event(EventMaps.play_ad_get_reward, [
              e.target,
              d.adReward
            ]);
            if (this.call)
              this.call();
          });
          break;
      }
    }
    onHdDestroy() {
      AppCore.runAppFunction({
        uri: AppEventMap.closeAd,
        data: {}
      });
    }
  };

  // src/view/TaskView.ts
  var TaskView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.taskList = null;
      this.canClick = true;
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
      const task = TaskService_default.getTask(obj == null ? void 0 : obj.id);
      if (!task) {
        core_default.view.openHint({ text: `\u4EFB\u52A1\u914D\u7F6E\u51FA\u9519,\u914D\u7F6E\u4E0D\u5B58\u5728`, call: () => {
        } });
        return;
      }
      cell.getChildByName("icon").skin = obj.icon;
      cell.getChildByName("title").text = obj.title;
      cell.getChildByName("desc").text = `${obj.desc}(${((task == null ? void 0 : task.times) > obj.times ? obj.times : task == null ? void 0 : task.times) || 0}/${obj.times})`;
      const rewardBox = cell.getChildByName("reward");
      rewardBox.getChildByName("icon").skin = obj.reward.obj.icon;
      if (obj.id === 1012) {
        const reward = TableAnalyze_default.table("config").get("Videorewards").value.count;
        let price = obj.reward.count + (obj.times - ((task == null ? void 0 : task.times) || 0)) * reward;
        if (price < obj.reward.count) {
          price = obj.reward.count;
        }
        rewardBox.getChildByName("amount").text = "x" + price;
      } else {
        rewardBox.getChildByName("amount").text = "x" + obj.reward.count;
      }
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
          if (!this.canClick)
            return;
          let btnObj = e.target["dataSource"];
          this.canClick = false;
          if (btnObj.ok) {
            HttpControl.inst.send({
              api: ApiHttp.taskReward,
              data: { type: ConfigGame_default.ApiTypeDefault, taskId: btnObj.id }
            }).then(() => {
              const task = TaskService_default.getTask(btnObj.id);
              task.receive = 1;
              btnObj.ok = false;
              this.canClick = true;
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
                    posType: task.base.reward.obj.id == ConfigGame_default.diamondId ? 2 : 1
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
              this.canClick = true;
              return;
            }
            HttpControl.inst.send({
              api: ApiHttp.ad,
              data: {
                taskId: id == 1012 ? 1012 : null
              }
            }).then((d) => {
              core_default.eventGlobal.event(EventMaps.play_ad_get_reward, [target, d.adReward]);
              this.taskList.refresh();
              TaskService_default.taskAddTimes(1001);
              if (id == 1012)
                TaskService_default.taskAddTimes(1012);
              this.canClick = true;
            });
            if (adData == null ? void 0 : adData.data["hasClicked"]) {
              UserInfo_default.continuousAdTimes = 0;
            } else {
              UserInfo_default.continuousAdTimes++;
            }
            HttpControl.inst.send({
              api: ApiHttp.adRecordNotClick,
              data: { times: UserInfo_default.continuousAdTimes }
            });
            break;
          case 1002:
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
            AppCore.runAppFunction({
              uri: AppEventMap.wxShare,
              data: {},
              timestamp: Date.now()
            }).then((d) => {
              if (!d || (d == null ? void 0 : d.code)) {
                core_default.view.openHint({ text: d.data["message"], call: () => {
                } });
              } else {
                core_default.view.openHint({ text: d.data["message"], call: () => {
                } });
                HttpControl.inst.send({
                  api: ApiHttp.friendShare
                }).then(() => {
                  TaskService_default.taskAddTimes(1010);
                  AppCore.runAppFunction({
                    uri: AppEventMap.eventCount,
                    data: { type: "share" }
                  });
                });
              }
            });
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
  var sellNum = 0;
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
      this.sellAdBtn.disabled = !UserInfo_default.advertiseTimes;
      this.sellAdBtn.active = Boolean(UserInfo_default.advertiseTimes);
      AppCore.runAppFunction({
        uri: AppEventMap.ad,
        data: { adType: 3 }
      });
      AppCore.runAppFunction({
        uri: AppEventMap.eventCount,
        data: { type: "bottom_advertisement" }
      });
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
            if (btnName == "sellBtn") {
              if (sellNum && !(sellNum % 10)) {
                AppCore.runAppFunction({
                  uri: AppEventMap.ad,
                  data: { adType: 1 }
                });
                AppCore.runAppFunction({
                  uri: AppEventMap.eventCount,
                  data: { type: "full_Screen" }
                });
              }
              sellNum++;
            }
            HttpControl.inst.send({
              api: ApiHttp.warehouseSell,
              data: {
                id: this.selectItemData.base.id,
                amount: this.selectItemSellCount,
                type: btnName == "sellBtn" ? ConfigGame_default.ApiTypeDefault : ConfigGame_default.ApiTypeAD
              }
            }).then((d) => {
              this.sellAdBtn.disabled = !UserInfo_default.advertiseTimes;
              this.sellAdBtn.active = Boolean(UserInfo_default.advertiseTimes);
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
                core_default.eventGlobal.event(EventMaps.play_ad_get_reward, [
                  target,
                  d.adReward
                ]);
                AppCore.runAppFunction({
                  uri: AppEventMap.eventCount,
                  data: { type: "Doublesale" }
                });
              }
              core_default.eventGlobal.event(EventMaps.play_get_reward, {
                node: this.sellBtn,
                list: rewardList,
                callBack: () => {
                }
              });
              if (UserInfo_default.adTimes > 100 || UserInfo_default.continuousAdTimes > 20) {
                AppCore.runAppFunction({
                  uri: AppEventMap.ad,
                  data: { adType: 1 }
                });
                AppCore.runAppFunction({
                  uri: AppEventMap.ad,
                  data: { adType: 3 }
                });
                AppCore.runAppFunction({
                  uri: AppEventMap.eventCount,
                  data: { type: "full_Screen" }
                });
                AppCore.runAppFunction({
                  uri: AppEventMap.eventCount,
                  data: { type: "bottom_advertisement" }
                });
              }
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
    onHdDestroy() {
      AppCore.runAppFunction({
        uri: AppEventMap.closeAd,
        data: {}
      });
    }
  };

  // src/view/WithdrawRecordView.ts
  var WithdrawRecordView = class extends core_default.gameScript {
    onOpened(e) {
      e.sort((a, b) => b.time - a.time);
      this.dataList = e;
      this.list.array = e;
      this.list.renderHandler = new Laya.Handler(this, this.itemRender);
      this.list.vScrollBarSkin = null;
      this.owner.getChildByName("empty_lb").visible = !e.length;
    }
    itemRender(cell, i) {
      const d = this.dataList[i];
      cell.getChildByName("reward_box").getChildByName("amount").text = `-${d.diamond}`;
      cell.getChildByName("time").text = `${new Date(d.time).toLocaleString("zh-CN", { hour12: false })}`;
      const state = cell.getChildByName("state_box").getChildByName("state");
      let withdrawal = TableAnalyze_default.table("config").get("withdrawal").value;
      cell.getChildByName("state_box").getChildByName("price").text = `${(Number(withdrawal[2]) / Number(withdrawal[1]) * d.diamond).toString().match(/^\d+(?:\.\d{0,2})?/)}\u5143`;
      state.text = `${d.state ? "\u5BA1\u6838\u4E2D" : "\u5DF2\u5230\u8D26"}`;
      state.color = d.state ? "#E93636" : "#5A3F2A";
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.WithdrawRecordView);
          break;
      }
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
      reg("view/GatherDescView.ts", GatherDescView);
      reg("view/GuideView.ts", GuideView);
      reg("view/HintView.ts", HintView);
      reg("view/LoginView.ts", LoginView);
      reg("view/MailDescView.ts", MailDescView);
      reg("view/MailView.ts", MailView);
      reg("view/MainView.ts", MainView);
      reg("components/FigureAni.ts", FigureAni);
      reg("components/FieldComponent.ts", FieldComponent);
      reg("components/RedDotComponent.ts", RedDotComponent);
      reg("view/OrderView.ts", OrderView);
      reg("view/OverView.ts", OverView);
      reg("view/SettingView.ts", SettingView);
      reg("view/ShopView.ts", ShopView);
      reg("view/SignInDescView.ts", SignInDescView);
      reg("view/SignInView.ts", SignInView);
      reg("view/SpeedUpView.ts", SpeedUpView);
      reg("view/TaskView.ts", TaskView);
      reg("view/WarehouseView.ts", WarehouseView);
      reg("view/WithdrawRecordView.ts", WithdrawRecordView);
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
      if (navigator.userAgent.indexOf("iPhone") > -1) {
        Config.useWebGL2 = false;
      }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Db25maWdHYW1lLnRzIiwgIi4uLy4uL3NyYy9jb3JlL0FwcC50cyIsICIuLi8uLi9zcmMvY29yZS9BdWRpb0NvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvcmUvaW5kZXgudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQWJvdXRWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVG9vbHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9UYWJsZUFuYWx5emUudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvUmVkRG90Q29tcG9uZW50LnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvVXNlckluZm8udHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9QZXRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9OZXRNYXBzLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vSGVhcnRiZWF0LnRzIiwgIi4uLy4uL3NyYy9jb21tb24vSHR0cERhdGFDb250cm9sLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vSHR0cENvbnRyb2wudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQWRkTGFuZFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQnV5Vml0YWxpdHlWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZpZWxkTGV2ZWxVcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc0Rlc2NWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZyaWVuZHNSZXdhcmRWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21tb24vRXJyb3JDb2RlLnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50LnRzIiwgIi4uLy4uL3NyYy92aWV3L01haW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZyaWVuZHNWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0dhdGhlckRlc2NWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0d1aWRlVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9IaW50Vmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9Mb2dpblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpbERlc2NWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L01haWxWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0ZpZ3VyZUFuaS50cyIsICIuLi8uLi9zcmMvdmlldy9PcmRlclZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvT3ZlclZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2V0dGluZ1ZpZXcudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL0ZlZWRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy92aWV3L1Nob3BWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NpZ25JbkRlc2NWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NpZ25JblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU3BlZWRVcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvVGFza1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvV2FyZWhvdXNlVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9XaXRoZHJhd1JlY29yZFZpZXcudHMiLCAiLi4vLi4vc3JjL0dhbWVDb25maWcudHMiLCAiLi4vLi4vc3JjL01haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxyXG4gKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjZcdTU0MERcdTc5RjBcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEV2ZW50TWFwcyB7XHJcbiAgICAvKiogbG9hZCBcdTc1NENcdTk3NjJcdThGREJcdTg4NENcdTY2RjRcdTY1QjAgKi9cclxuICAgIGxvYWRfcHJvZ3Jlc3MgPSBcImxvYWRfcHJvZ3Jlc3NcIixcclxuXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU1NzFGXHU1NzMwICovXHJcbiAgICB1cGRhdGVfZmllbGQgPSBcInVwZGF0ZV9maWVsZFwiLFxyXG5cclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTRFM0JcdTk4NzVcdThCQTJcdTUzNTVcdTY1NzBcdTYzNkUgKi9cclxuICAgIHVwZGF0ZV9PcmRlciA9IFwidXBkYXRlX09yZGVyXCIsXHJcblxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NTJBMFx1OTAxRiAqL1xyXG4gICAgbGFuZF9zcGVlZF91cCA9IFwibGFuZF9zcGVlZF91cFwiLFxyXG5cclxuICAgIC8qKiBcdThGREJcdTUxNjVcdTZFMzhcdTYyMEYgKi9cclxuICAgIGxvZ2luX2dhbWUgPSBcImxvZ2luX2dhbWVcIixcclxuICAgIC8qKiBcdTkwMDBcdTUxRkFcdTZFMzhcdTYyMEYgKi9cclxuICAgIGxvZ2luX291dCA9IFwibG9naW5fb3V0XCIsXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExICovXHJcbiAgICB1cGRhdGVfdGFzayA9IFwidXBkYXRlX3Rhc2tcIixcclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTY1QjBcdTYyNEJcdTRFRkJcdTUyQTFcdTYyNEIgKi9cclxuICAgIHVwZGF0ZV9ndWlkX2hhbmQgPSBcInVwZGF0ZV9ndWlkX2hhbmRcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTUyMDZcdTRFQUJcdTVGMTVcdTVCRkMgKi9cclxuICAgIHVwZGF0ZV9mcmllbmRfc2hhcmVfZ3VpZGUgPSBcInVwZGF0ZV9mcmllbmRfc2hhcmVfZ3VpZGVcIixcclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTdFQTJcdTcwQjkgKi9cclxuICAgIHVwZGF0ZV9yZWRfZG90ID0gXCJ1cGRhdGVfcmVkX2RvdFwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHU1MkE4XHU3NTNCXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgIHtcclxuICAgICAgICAvL1x1OTcwMFx1ODk4MVx1OThERVx1OTFEMVx1NUUwMVx1NzY4NFx1NTNDMlx1ODAwM1x1ODI4Mlx1NzBCOVxyXG4gICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgLy9cdTg5ODFcdTk4REVcdTc2ODRcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1RTI2aWNvblx1NzY4NFx1NjU3MFx1NjM2RVxyXG4gICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksXHJcbiAgICAgICAgICAgICAgICAvL1x1NjU3MFx1OTFDRlxyXG4gICAgICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgLy9cdTg5ODFcdTk4REVcdTUzQkJcdTc2ODRcdTRGNERcdTdGNkUgMSBcdTkxRDFcdTVFMDEgMiBcdTk0QkJcdTc3RjNcclxuICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfVxyXG4gICAgICovXHJcbiAgICBwbGF5X2dldF9yZXdhcmQgPSBcInBsYXlfZ2V0X3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1NzcwQlx1NUU3Rlx1NTQ0QVx1NjRBRFx1NjUzRVx1NTk1Nlx1NTJCMVx1ODNCN1x1ODNCN1x1NUY5N1x1NTJBOFx1NzUzQiAgXHU0RjIwXHU1MTY1XHU4MjgyXHU3MEI5ICovXHJcbiAgICBwbGF5X2FkX2dldF9yZXdhcmQgPSBcInBsYXlfYWRfZ2V0X3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1NTNCQlx1NTk3RFx1NTNDQlx1NUJCNiAqL1xyXG4gICAgZ29fZnJpZW5kX2hvbWUgPSBcImdvX2ZyaWVuZF9ob21lXCIsXHJcbiAgICAvKiogXHU1NkRFXHU1QkI2ICovXHJcbiAgICBnb19ob21lID0gXCJnb19ob21lXCIsXHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU1OTdEXHU1M0NCXHU3NTRDXHU5NzYyICovXHJcbiAgICBvcGVuX2ZyaWVuZCA9IFwib3Blbl9mcmllbmRcIixcclxuICAgIC8qKiBcdTc5Q0RcdTgzRENcdTRFM0JcdTc1NENcdTk3NjJcdThGREJcdTUxNjUgKi9cclxuICAgIHBsYW50X3NvdyA9IFwicGxhbnRfc293XCIsXHJcbiAgICAvKiogXHU2REZCXHU1MkEwXHU5NEJCXHU3N0YzXHU2MjE2XHU2NjJGXHU5MUQxXHU1RTAxICovXHJcbiAgICBhZGRfZGlhbW9uZF9nb2xkID0gXCJhZGRfZGlhbW9uZF9nb2xkXCIsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTRFMEVhcHBcdTRFQTRcdTRFOTJcdTRFOEJcdTRFRjZcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFwcEV2ZW50TWFwIHtcclxuICAgIC8qKiBcdTc3MEJcdTVFN0ZcdTU0NEEgKi9cclxuICAgIGFkID0gXCJhZFwiLFxyXG4gICAgLyoqIFx1NTE3M1x1OTVFRFx1NUU3Rlx1NTQ0QSAqL1xyXG4gICAgY2xvc2VBZCA9IFwiY2xvc2VBZFwiLFxyXG4gICAgLyoqIFx1NTE3M1x1OTVFRFx1NUI4OVx1NTM1M1x1NTQyRlx1NTJBOFx1OTA2RVx1N0Y2OSAqL1xyXG4gICAgY2xvc2VJbWFnZSA9IFwiY2xvc2VJbWFnZVwiLFxyXG4gICAgLyoqIFx1NUZBRVx1NEZFMVx1NzY3Qlx1NUY1NSAqL1xyXG4gICAgd3hMb2dpbiA9IFwid3hMb2dpblwiLFxyXG4gICAgLyoqIFx1NUZBRVx1NEZFMVx1NzY3Qlx1NUY1NVx1NjIxMFx1NTI5RiAqL1xyXG4gICAgd3hMb2dpblN1Y2Nlc3MgPSBcInd4TG9naW5TdWNjZXNzXCIsXHJcbiAgICAvKiogXHU1RkFFXHU0RkUxXHU1MjA2XHU0RUFCICovXHJcbiAgICB3eFNoYXJlID0gXCJ3eFNoYXJlXCIsXHJcbiAgICAvKiogXHU1M0NCXHU3NkRGXHU0RThCXHU0RUY2XHU3RURGXHU4QkExIFx1NjU3MFx1NjM2RVx1NjgzQ1x1NUYwRiB7dHlwZTpcdTVCRjlcdTVFOTRcdTg5ODFcdTdFREZcdThCQTFcdTc2ODRcdTcwQjl9ICovXHJcbiAgICBldmVudENvdW50ID0gXCJldmVudENvdW50XCIsXHJcbiAgICAvKiogXHU5NjkwXHU3OUMxXHU2NTNGXHU3QjU2ICovXHJcbiAgICBwcml2YWN5QWdyZWVtZW50ID0gXCJwcml2YWN5QWdyZWVtZW50XCIsXHJcbiAgICAvKiogXHU2NzBEXHU1MkExXHU1MzRGXHU4QkFFICovXHJcbiAgICBzZXJ2aWNlQWdyZWVtZW50ID0gXCJzZXJ2aWNlQWdyZWVtZW50XCIsXHJcbiAgICAvKiogXHU2Q0U4XHU1MThDXHU2MjEwXHU1MjlGICovXHJcbiAgICByZWdpc3RlclN1Y2Nlc3MgPSBcInJlZ2lzdGVyU3VjY2Vzc1wiLFxyXG4gICAgLyoqIFx1NzY3Qlx1NUY1NVx1NjIxMFx1NTI5RiAqL1xyXG4gICAgbG9naW5TdWNjZXNzID0gXCJMb2dpblN1Y2Nlc3NcIixcclxuICAgIC8qKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNTggKi9cclxuICAgIGNsZWFyQ2FjaGUgPSBcImNsZWFyQ2FjaGVcIixcclxuICAgIC8qKiBcdTYyNTNcdTVGMDBcdTkwNkVcdTdGNjlcdTgwQ0NcdTY2NkYgKi9cclxuICAgIHNob3dCYWNrZ3JvdW5kID0gXCJzaG93QmFja2dyb3VuZFwiLFxyXG59XHJcbiIsICIvL1x1NEVFM1x1NzgwMVx1NzUxRlx1NjIxMFx1RkYwQ1x1NEUwRFx1ODk4MVx1NjI0Qlx1NTJBOFx1NEZFRVx1NjUzOVxuXG4vKipcbiAqIFx1NzU0Q1x1OTc2Mlx1NTIxN1x1ODg2OFxuICovXG4gZXhwb3J0IGVudW0gdmlld3MgXG4gICAge1xuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0Fib3V0Vmlldy5zY2VuZSAqL1xuICAgICAgICBBYm91dFZpZXcgPSBcInNjZW5lcy92aWV3cy9BYm91dFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmUgKi9cbiAgICAgICAgQWRkTGFuZFZpZXcgPSBcInNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9CdXlWaXRhbGl0eVZpZXcuc2NlbmUgKi9cbiAgICAgICAgQnV5Vml0YWxpdHlWaWV3ID0gXCJzY2VuZXMvdmlld3MvQnV5Vml0YWxpdHlWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgRmllbGRMZXZlbFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lICovXG4gICAgICAgIEZyaWVuZHNEZXNjVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNEZXNjVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZSAqL1xuICAgICAgICBGcmllbmRzUmV3YXJkVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNSZXdhcmRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lICovXG4gICAgICAgIEZyaWVuZHNWaWV3ID0gXCJzY2VuZXMvdmlld3MvRnJpZW5kc1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvR2F0aGVyRGVzY1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgR2F0aGVyRGVzY1ZpZXcgPSBcInNjZW5lcy92aWV3cy9HYXRoZXJEZXNjVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9HdWlkZVZpZXcuc2NlbmUgKi9cbiAgICAgICAgR3VpZGVWaWV3ID0gXCJzY2VuZXMvdmlld3MvR3VpZGVWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lICovXG4gICAgICAgIEhpbnRWaWV3ID0gXCJzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTG9naW5WaWV3LnNjZW5lICovXG4gICAgICAgIExvZ2luVmlldyA9IFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWlsRGVzY1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpbERlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpbERlc2NWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lICovXG4gICAgICAgIE1haWxWaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpblZpZXcgPSBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmUgKi9cbiAgICAgICAgT3JkZXJWaWV3ID0gXCJzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL092ZXJWaWV3LnNjZW5lICovXG4gICAgICAgIE92ZXJWaWV3ID0gXCJzY2VuZXMvdmlld3MvT3ZlclZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2V0dGluZ1ZpZXcgPSBcInNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZSAqL1xuICAgICAgICBTaG9wVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NpZ25JbkRlc2NWaWV3LnNjZW5lICovXG4gICAgICAgIFNpZ25JbkRlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvU2lnbkluRGVzY1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZSAqL1xuICAgICAgICBTaWduSW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBTcGVlZFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NwZWVkVXBWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lICovXG4gICAgICAgIFRhc2tWaWV3ID0gXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZSAqL1xuICAgICAgICBXYXJlaG91c2VWaWV3ID0gXCJzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9XaXRoZHJhd1JlY29yZFZpZXcuc2NlbmUgKi9cbiAgICAgICAgV2l0aGRyYXdSZWNvcmRWaWV3ID0gXCJzY2VuZXMvdmlld3MvV2l0aGRyYXdSZWNvcmRWaWV3LnNjZW5lXCIsIFxuICAgIH1cblxuIGV4cG9ydCBlbnVtIGF1ZGlvcyBcbiAgICB7XG4gICAgICAgIC8qKiBhdWRpby96aG9uZ3poaS5tcDMgKi9cbiAgICAgICAgemhvbmd6aGkgPSBcInJlcy9hdWRpby96aG9uZ3poaS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby90dWRpc2hlbmdqaS5tcDMgKi9cbiAgICAgICAgdHVkaXNoZW5namkgPSBcInJlcy9hdWRpby90dWRpc2hlbmdqaS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9zaG91Y2FpLm1wMyAqL1xuICAgICAgICBzaG91Y2FpID0gXCJyZXMvYXVkaW8vc2hvdWNhaS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9nb3VqaWFvc2hlbmcubXAzICovXG4gICAgICAgIGdvdWppYW9zaGVuZyA9IFwicmVzL2F1ZGlvL2dvdWppYW9zaGVuZy5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9kYWthaWNhbmdrdS5tcDMgKi9cbiAgICAgICAgZGFrYWljYW5na3UgPSBcInJlcy9hdWRpby9kYWthaWNhbmdrdS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9idXR0b25fY2xpY2subXAzICovXG4gICAgICAgIGJ1dHRvbl9jbGljayA9IFwicmVzL2F1ZGlvL2J1dHRvbl9jbGljay5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9CR00ubXAzICovXG4gICAgICAgIEJHTSA9IFwicmVzL2F1ZGlvL0JHTS5tcDNcIiwgXG4gICAgfVxuXG4vKipcbiAqIFx1NzU0Q1x1OTc2Mlx1NTIxN1x1ODg2OFxuICovXG4gZXhwb3J0IGNvbnN0IHNjZW5lcyA9IFtcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1dpdGhkcmF3UmVjb3JkVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NwZWVkVXBWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TaWduSW5WaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TaWduSW5EZXNjVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NldHRpbmdWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9PdmVyVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haWxEZXNjVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTG9naW5WaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9IaW50Vmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvR3VpZGVWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9HYXRoZXJEZXNjVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRnJpZW5kc1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNSZXdhcmRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GcmllbmRzRGVzY1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0J1eVZpdGFsaXR5Vmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0Fib3V0Vmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL01haWxJdGVtLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0dldFJld2FyZC5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9GbG9hdFJld2FyZEljb24ucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvRmllbGRQcmVmYWIucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9jb21wb25lbnRzL0J1dHRvbi5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL2FuaS9sYW5kVXAuYW5pXCIsXG4gICAgICAgICAgICBcInJlcy9sb2FkaW5nQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfd29vZHRpdGxlLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlSG91c2VCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZWJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3NoZWxmLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmdNYWluLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfbGFuZEJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2ludml0ZUJnMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob3VzZXRvcC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob25nYmFvYmFuLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmczLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcyLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2Zhcm1sYW5kTG9nby5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmU1LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmU0LnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlNC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTMuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTIucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUyLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAxMC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDEwLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwOS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA5LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwOC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA4LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA3LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA2LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA1LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDA0LmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwMy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDAzLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwMi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDAyLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2RvZ18xMDAxLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvdnMudnNcIixcbiAgICAgICAgICAgIFwicmVzL3NoYWRlci9wcy5mc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vemhvbmd6aGkubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby90dWRpc2hlbmdqaS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3Nob3VjYWkubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9nb3VqaWFvc2hlbmcubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9kYWthaWNhbmdrdS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2J1dHRvbl9jbGljay5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL0JHTS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BsYW50X2ljb24ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BldF9mZWVkLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9tYWluX3NjZW5lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbG9hZC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2xvYWQuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLmF0bGFzXCJdO1xuICAgIFxuXG4vKipcbiAqIFx1NjI0MFx1NjcwOVx1OEQ0NFx1NkU5MFxuICovXG5jb25zdCBSZXMgPSB7XG4gICAgdmlld3M6IHZpZXdzLFxuICAgIHNjZW5lczogc2NlbmVzLFxuICAgIGF1ZGlvczogYXVkaW9zLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzO1xuIiwgIi8qKlxyXG4gKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjZcclxuICovXHJcbmNvbnN0IEV2ZW50R2xvYmFsID0gbmV3IExheWEuRXZlbnREaXNwYXRjaGVyKCk7XHJcblxyXG4vKipcclxuICogXHU1MEE4XHU1QjU4XHU3Njg0XHU5NzAwXHU4OTgxXHU3RUQxXHU1QjlBXHU4QkEyXHU5NjA1XHU0RThCXHU0RUY2XHU3Njg0XHU3QzdCXHU3Njg0XHU1MzlGXHU1NzhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRXZlbnRDbGFzczogTWFwPGFueSwgeyBrZXk6IHN0cmluZzsgZm46IEZ1bmN0aW9uIH1bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50T24obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcclxuICAgICAgICBpZiAoIUV2ZW50Q2xhc3MuZ2V0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgRXZlbnRDbGFzcy5zZXQodGFyZ2V0LCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEV2ZW50Q2xhc3MuZ2V0KHRhcmdldCkucHVzaCh7IGtleTogbmFtZSwgZm46IGRlc2NyaXB0b3IudmFsdWUgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogXHU1MEE4XHU1QjU4XHU3Njg0XHU5NzAwXHU4OTgxXHU3RUQxXHU1QjlBXHU1QzVFXHU2MDI3XHU2N0U1XHU2MjdFXHU3RUQxXHU1QjlBXHU1NDBEXHU3OUYwXHU3Njg0XHU3QzdCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQmluZE5hbWVDbGFzczogTWFwPGFueSwgc3RyaW5nW10+ID0gbmV3IE1hcCgpO1xyXG5leHBvcnQgZnVuY3Rpb24gRmluZEJ5TmFtZSh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xyXG4gICAgLy8gICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcblxyXG4gICAgaWYgKCFCaW5kTmFtZUNsYXNzLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgQmluZE5hbWVDbGFzcy5zZXQodGFyZ2V0LCBbXSk7XHJcbiAgICB9XHJcbiAgICBCaW5kTmFtZUNsYXNzLmdldCh0YXJnZXQpLnB1c2gocHJvcGVydHlLZXkpO1xyXG4gICAgLy8gfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRHbG9iYWw7XHJcbiIsICJjb25zdCBjYWxsZXJzOiBNYXA8YW55LCBGdW5jdGlvbltdPiA9IG5ldyBNYXAoKTtcclxuXHJcbmNsYXNzIE9ic2VydmFibGVDb250cm9sPGNhbGwgZXh0ZW5kcyBMYXlhLlNjcmlwdD4ge1xyXG4gICAgcHJpdmF0ZSBrZXlFdmVudHM6IE1hcDxhbnksIE1hcDxzdHJpbmcsIEZ1bmN0aW9uW10+PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzZEMVx1NTQyQ1x1NUM1RVx1NjAyN1x1NTAzQ1x1NTNEOFx1NTMxNlxyXG4gICAgICogIFtcdTU3MjhcdTc1NENcdTk3NjJkZXN0cm95XHU3Njg0XHU2NUY2XHU1MDE5XHU0RjFBXHU4MUVBXHU1REYxXHU2Q0U4XHU5NTAwXHU3NkQxXHU1NDJDXVxyXG4gICAgICogQHBhcmFtIE9iaiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTc2ODRcdTVCRjlcdThDNjFcclxuICAgICAqL1xyXG4gICAgd2F0Y2g8VCBleHRlbmRzIHt9PihPYmo6IFQsIGNhbGxlcjogY2FsbCkge1xyXG4gICAgICAgIGlmICghY2FsbGVycy5oYXMoY2FsbGVyKSkge1xyXG4gICAgICAgICAgICBjYWxsZXJzLnNldChjYWxsZXIsIFtdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBrZXlFdmVudCA9IHRoaXMua2V5RXZlbnRzO1xyXG4gICAgICAgIGlmICgha2V5RXZlbnQuaGFzKE9iaikpIHtcclxuICAgICAgICAgICAga2V5RXZlbnQuc2V0KE9iaiwgbmV3IE1hcCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlx1NzY4NFx1NUM1RVx1NjAyN1x1NEU4Qlx1NEVGNlxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkgXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QzVFXHU2MDI3XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGwgXHU1NkRFXHU4QzAzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qga2V5QmluZCA9IDxLZXkgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEtleSAmIHN0cmluZywgY2FsbDogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IF9vYmogPSBrZXlFdmVudC5nZXQoT2JqKTtcclxuICAgICAgICAgICAgaWYgKCFfb2JqLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBfb2JqLnNldChrZXksIFtdKTtcclxuICAgICAgICAgICAgICAgIGlmIChPYmpbXCIjXCIgKyBrZXldID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9ialtcIiNcIiArIGtleV0gPSBPYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbXCIjXCIgKyBrZXldID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9vYmouZ2V0KGtleSkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tcIiNcIiArIGtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2FsbC5iaW5kKGNhbGwpO1xyXG4gICAgICAgICAgICBfb2JqLmdldChrZXkpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcikucHVzaChjYWxsKTtcclxuICAgICAgICAgICAgY2FsbChPYmpba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5MDFBXHU4RkM3XHU0RjIwXHU1MTY1XHU3Njg0Y2FsbGVyXHU1MjIwXHU5NjY0XHU1RjUzXHU1MjREXHU3RUQxXHU1QjlBXHU3Njg0XHU2MjQwXHU2NzA5XHU3Njg0XHU0RThCXHU0RUY2IFx1NjIxNlx1NjMwN1x1NUI5QVx1ODlFM1x1NTFCM1x1NkEyMVx1NEUyQVx1NUJGOVx1OEM2MVx1OERERlx1NUY1M1x1NTI0RGNhbGxlclx1N0VEMVx1NUI5QVx1NzY4NFx1NzZEMVx1NTQyQ1xyXG4gICAgICogQHBhcmFtIGNhbGxlciBcdTc2RDFcdTU0MkNcdTY1RjZcdTdFRDFcdTVCOUFcdTc2ODRcdTU3M0FcdTY2NkZcdTVCRjlcdThDNjFcclxuICAgICAqIEBwYXJhbSBvYmogXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUJ5Q2FsbGVyKGNhbGxlcjogY2FsbCwgb2JqOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgY2FsbGVycy5nZXQoY2FsbGVyKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZ2V0KG9iaikuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhPZiA9IGV2LmluZGV4T2YoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGsuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZiA+IC0xKSBldi5zcGxpY2UoaW5kZXhPZiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU3RUQxXHU1QjlBXHU1M0VGXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgT2JzZXJ2YWJsZUNvbnRyb2woKTtcclxuIiwgImltcG9ydCBFdmVudEdsb2JhbCwgeyBCaW5kTmFtZUNsYXNzLCBFdmVudENsYXNzIH0gZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JpcHQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vRXZlbnRPblx1ODhDNVx1OTk3MFx1NTY2OFx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QVxyXG4gICAgICAgIGxldCBiaW5kRXZlbnQgPSBFdmVudENsYXNzLmdldCh0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgYmluZEV2ZW50Py5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIEV2ZW50R2xvYmFsLm9uKGQua2V5LCB0aGlzLCBkLmZuKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZEF3YWtlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkF3YWtlKCkge1xyXG4gICAgICAgIC8vXHU3RUQ5XHU4OEM1XHU5OTcwXHU1NjY4XHU4QkIwXHU1RjU1XHU3Njg0XHU1QzVFXHU2MDI3XHVGRjBDXHU2N0U1XHU2MjdFXHU4MjgyXHU3MEI5XHJcbiAgICAgICAgQmluZE5hbWVDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpPy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXNbZV0gPSB0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub25IZEF3YWtlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTc1NENcdTk3NjJcdTRGMjBcdTUxNjVcdTUzQzJcdTY1NzBcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICogQHBhcmFtIGVcclxuICAgICAqL1xyXG4gICAgb25PcGVuZWQoZSkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NkZDMFx1NkQzQlx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkI2NFx1NjVGNlx1NjI0MFx1NjcwOVx1ODI4Mlx1NzBCOVx1NTQ4Q1x1N0VDNFx1NEVGNlx1NTc0N1x1NURGMlx1NTIxQlx1NUVGQVx1NUI4Q1x1NkJENVx1RkYwQ1x1NkIyMVx1NjVCOVx1NkNENVx1NTNFQVx1NjI2N1x1ODg0Q1x1NEUwMFx1NkIyMVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRBd2FrZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRFbmFibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMub25IZEVuYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU1NDJGXHU3NTI4XHU1NDBFXHU2MjY3XHU4ODRDXHVGRjBDXHU2QkQ0XHU1OTgyXHU4MjgyXHU3MEI5XHU4OEFCXHU2REZCXHU1MkEwXHU1MjMwXHU4MjFFXHU1M0YwXHU1NDBFXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZEVuYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRTdGFydFxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9uSGRTdGFydCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdCMkNcdTRFMDBcdTZCMjFcdTYyNjdcdTg4NEN1cGRhdGVcdTRFNEJcdTUyNERcdTYyNjdcdTg4NENcdUZGMENcdTUzRUFcdTRGMUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkU3RhcnQoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkVXBkYXRlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkJDRlx1NUUyN1x1NjZGNFx1NjVCMFx1NjVGNlx1NjI2N1x1ODg0Q1x1RkYwQ1x1NUMzRFx1OTFDRlx1NEUwRFx1ODk4MVx1NTcyOFx1OEZEOVx1OTFDQ1x1NTE5OVx1NTkyN1x1NUZBQVx1NzNBRlx1OTAzQlx1OEY5MVx1NjIxNlx1ODAwNVx1NEY3Rlx1NzUyOGdldENvbXBvbmVudFx1NjVCOVx1NkNENVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRVcGRhdGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRGlzYWJsZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMub25IZERpc2FibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1Nzk4MVx1NzUyOFx1NjVGNlx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1NEVDRVx1ODI4Mlx1NzBCOVx1NEVDRVx1ODIxRVx1NTNGMFx1NzlGQlx1OTY2NFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGREaXNhYmxlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERlc3Ryb3lcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vZmZBbGxDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkhkRGVzdHJveSgpO1xyXG4gICAgICAgIExheWEudGltZXIub25jZSgxLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU2RTA1XHU5NjY0XHU4RERGXHU1RjUzXHU1MjREXHU3QzdCXHU3RUQxXHU1QjlBXHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU4OUMyXHU1QkRGXHU2NUI5XHU2Q0Q1XHJcbiAgICAgICAgICAgIE9ic2VydmFibGVQcm9wZXJ0eS5yZW1vdmVCeUNhbGxlcih0aGlzKTtcclxuICAgICAgICAgICAgLy9cdTk1MDBcdTZCQzFcdTY1RjZcdTZFMDVcdTk2NjRcdTYyNDBcdTY3MDlcdTc2ODRcdTVDNUVcdTYwMjdcdTVGMTVcdTc1MjhcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXlzW3hdXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI0Qlx1NTJBOFx1OEMwM1x1NzUyOFx1ODI4Mlx1NzBCOVx1OTUwMFx1NkJDMVx1NjVGNlx1NjI2N1x1ODg0Q1xyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGREZXN0cm95KCkge31cclxuXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqIFx1NzU0Q1x1OTc2Mlx1NjI1M1x1NUYwMFx1NEVFNVx1NTQwRVx1NUUyNlx1NTE2NVx1NzY4NFx1NTNDMlx1NjU3MFxyXG4gICAgLy8gICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAvLyAgKi9cclxuICAgIC8vIG9uT3BlbmVkKGQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygxMTEpO1xyXG4gICAgLy8gfVxyXG59XHJcbiIsICJpbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5cclxuLy9jbGFzcyBWaWV3U2hvd0FuaSBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdTaG93QW5pIGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YmcsIHRpcHM6XCJcdTgwQ0NcdTY2NkZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgYmc6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvbnRlbnQsIHRpcHM6XCJcdTUxODVcdTVCQjlcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgY29udGVudDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFuaVR5cGUsdGlwczpcIlx1NTJBOFx1NzUzQlx1N0M3Qlx1NTc4QlwiLHR5cGU6RWRpdE9wdGlvbixvcHRpb246XCJib3R0b21Ub1Nob3csc2NhbGVTaG93XCJ9Ki9cclxuICAgIC8vIFx1OEZENFx1NTZERVx1NUI1N1x1N0IyNlx1NEUzMlxyXG4gICAgYW5pVHlwZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgdHdlZW5MaXN0OiBMYXlhLlR3ZWVuW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb09wZW4oKSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiAgXHU1MTczXHU5NUVEXHU2MjEwXHU1MjlGXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvQ2xvc2UoKSB7fVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuXHJcbiAgICAgICAgdGhpcy5iZy5hbHBoYSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnLFxyXG4gICAgICAgICAgICAgICAgeyBhbHBoYTogMC43NSB9LFxyXG4gICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYW5pVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic2NhbGVTaG93XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4uZnJvbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLCB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsIHNjYWxlWDogMCwgc2NhbGVZOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmJvdHRvbSA9IC10aGlzLmNvbnRlbnQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmNpcmNPdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVZpZXcoKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMub3duZXIgYXMgTGF5YS5WaWV3O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYW5pVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNjYWxlU2hvd1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogTGF5YS5zdGFnZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWDogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWTogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5IYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBib3R0b206IC10aGlzLmNvbnRlbnQuaGVpZ2h0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTVCOUVcdTRGOEJcdTUyMTdcdTg4NjhcclxuICovXHJcbmNvbnN0IGluc3RhbmNlTGlzdDogTWFwPG51bWJlciwgeyBuZXcgKCk6IHZvaWQgfT4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcclxuICogXHU1QjlFXHU0RjhCXHU3Njg0aWRcclxuICovXHJcbmxldCBpbnN0YW5jZUlkOiBudW1iZXIgPSAxMDA7XHJcblxyXG4vKipcclxuICogXHU1MzU1XHU0RjhCXHU4OEM1XHU5OTcwXHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSW5zdGFuY2UodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWluc3RhbmNlTGlzdC5oYXModGFyZ2V0W1wiI2luc3RhbmNlSWRcIl0pKSB7XHJcbiAgICAgICAgaW5zdGFuY2VJZCsrO1xyXG4gICAgICAgIHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdID0gaW5zdGFuY2VJZDtcclxuICAgICAgICBpbnN0YW5jZUxpc3Quc2V0KGluc3RhbmNlSWQsIG5ldyB0YXJnZXQoKSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXRba2V5XSA9IGluc3RhbmNlTGlzdC5nZXQoaW5zdGFuY2VJZCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgRmxvYXRWaWV3U2hvd0FuaSBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBIaW50Vmlld0RhdGEgfSBmcm9tIFwic3JjL3ZpZXcvSGludFZpZXdcIjtcclxuaW1wb3J0IE92ZXJWaWV3IGZyb20gXCJzcmMvdmlldy9PdmVyVmlld1wiO1xyXG5pbXBvcnQgUmVzLCB7IHZpZXdzIH0gZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFZpZXdTaG93QW5pIGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4vSW5zdGFuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTYyNTNcdTVGMDBcdTc1NENcdTk3NjJcdTk3MDBcdTg5ODFcdTVFMjZcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcclxuICovXHJcbmludGVyZmFjZSBWaWV3T3BlblBhcm0ge1xyXG4gICAgLyoqIFx1NjYzRVx1NzkzQWxvYWRcdTc1NENcdTk3NjIgKi9cclxuICAgIHNob3dMb2FkPzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0ICovXHJcbiAgICBzaG93TG9hZERlbGF5PzogbnVtYmVyO1xyXG4gICAgLyoqIFx1OTY5MFx1ODVDRmxvYWRcdTc1NENcdTk3NjJcdTVFRjZcdThGREZcdTY1RjZcdTk1RjQgXHU5RUQ4XHU4QkE0MCAqL1xyXG4gICAgaGlkZUxvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTUxNzNcdTk1RURcdTUxNzZcdTRFRDZcdTU3M0FcdTY2NkZcdUZGMENcdTlFRDhcdThCQTRcdTRFM0F0cnVlXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5XHVGRjBDXHUzMDEwXHU2Q0U4XHU2MTBGXHUzMDExXHU4OEFCXHU1MTczXHU5NUVEXHU3Njg0XHU1NzNBXHU2NjZGXHVGRjBDXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU4QkJFXHU3RjZFYXV0b0Rlc3Ryb3lBdFJlbW92ZWQ9dHJ1ZVx1RkYwQ1x1NTIxOVx1OEQ0NFx1NkU5MFx1NTNFRlx1ODBGRFx1NEUwRFx1ODBGRFx1ODhBQlx1NTZERVx1NjUzNlx1RkYwQ1x1OTcwMFx1ODk4MVx1ODFFQVx1NURGMVx1NjI0Qlx1NTJBOFx1NTZERVx1NjUzNlxyXG4gICAgICogdG9kbyBcdTczQjBcdTU3MjhcdThGRDlcdTRFMkFcdThDMDNcdTc1MjhcdTc2ODRcdTY2MkZcdTVGMTVcdTY0Q0VcdTgxRUFcdTVFMjZcdTc2ODRcdTY1QjlcdTZDRDVcdUZGMENcdTZDQTFcdTY3MDlcdThENzBcdThGRDlcdTkxQ0NcdTc2ODRcdTdGMTNcdTVCNThcdUZGMENcdTUzRUZcdTgwRkRcdTRGMUFcdTY3MDlcdTk1RUVcdTk4OThcdUZGMENcdTU0MEVcdTY3MUZcdTRGMThcdTUzMTZcclxuICAgICAqIFx1NzNCMFx1NTcyOFx1NTE2OFx1NjYyRmZhbHNlIFx1NTQwRVx1NjcxRlx1NjcwOVx1OTcwMFx1ODk4MVx1NTE4RFx1NEYxOFx1NTMxNlx1OEZEOVx1NEUyQVx1NEUxQ1x1ODk3Rlx1RkYwQ1x1NEUwRFx1ODBGRFx1NTE3M1x1OTVFRFx1NTE3Nlx1NUI4M1x1NjI0MFx1NjcwOVx1NzU0Q1x1OTc2Mlx1OEZEOFx1NjcyQVx1NUI5RVx1NzNCMFxyXG4gICAgICovXHJcbiAgICBjbG9zZU90aGVyPzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTYyNTNcdTVGMDBcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdUZGMENcdTRGMUFcdTRGMjBcdTkwMTJcdTdFRDlvbk9wZW5lZFx1NjVCOVx1NkNENVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcGFybT86IGFueTtcclxuICAgIC8qKiAgXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIGNvbXBsZXRlPzogRnVuY3Rpb247XHJcbiAgICAvKiogXHU1MkEwXHU4RjdEXHU4RkRCXHU1RUE2XHU1NkRFXHU4QzAzXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBwcm9ncmVzcz86IEhhbmRsZXI7XHJcbn1cclxuXHJcbmNvbnN0IHZpZXdNYXBzOiB7IHVybDogc3RyaW5nOyB2aWV3OiBMYXlhLlZpZXcgfVtdID0gW107XHJcblxyXG4vKipcclxuICogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmlld01hbmFnZXIge1xyXG4gICAgQEluc3RhbmNlXHJcbiAgICBzdGF0aWMgaW5zdDogVmlld01hbmFnZXI7XHJcblxyXG4gICAgbG9naW5PdXQoKSB7XHJcbiAgICAgICAgdmlld01hcHMuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICB2LnZpZXcuZ2V0Q29tcG9uZW50cyhMYXlhLlNjcmlwdCkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9cdTU2REVcdTU5MzRcdTg5ODFcdTRGMThcdTUzMTZcdTRFMDBcdTRFMEJcdTUxNzZcdTVCODNcdTc1NENcdTk3NjJcdTc2ODRcdTUxNzNcdTk1RURcdUZGMENcdThGRDlcdTkxQ0NcdTY2MkZcdTRFMERcdTY2MkZcdTY3MDlcdTU0MENcdTY4MzdcdTc2ODRcdTk1RUVcdTk4OThcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuY2xlYXJBbGwoZSk7XHJcbiAgICAgICAgICAgICAgICBlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHYudmlldy51cmwsIHRydWUpO1xyXG4gICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU0RTAwXHU0RTJBXHU3NTRDXHU5NzYyXHJcbiAgICAgKiBAcGFyYW0gdXJsIFx1NzU0Q1x1OTc2Mlx1NTczMFx1NTc0MCBSZXMudmlld3NcdTkxQ0NcdTc2ODRcclxuICAgICAqIEBwYXJhbSBkYXRhIFx1NTNDMlx1NjU3MFxyXG4gICAgICovXHJcbiAgICBvcGVuKFxyXG4gICAgICAgIHVybDogdmlld3MsXHJcbiAgICAgICAgZGF0YTogVmlld09wZW5QYXJtID0ge1xyXG4gICAgICAgICAgICBjbG9zZU90aGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93TG9hZERlbGF5OiAxMDAsXHJcbiAgICAgICAgICAgIGhpZGVMb2FkRGVsYXk6IDAsXHJcbiAgICAgICAgfVxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibWlzcyBwYXRoIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEuc2hvd0xvYWQpIHtcclxuICAgICAgICAgICAgTGF5YS5WaWV3LnNob3dMb2FkaW5nUGFnZShudWxsLCBkYXRhLnNob3dMb2FkRGVsYXkpO1xyXG4gICAgICAgICAgICBpZiAodXJsICE9PSBSZXMudmlld3MuTG9naW5WaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZShkYXRhLmhpZGVMb2FkRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGEuY2xvc2VPdGhlciA9IGZhbHNlO1xyXG4gICAgICAgIExheWEuVmlldy5vcGVuKFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEuY2xvc2VPdGhlcixcclxuICAgICAgICAgICAgZGF0YS5wYXJtLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChlOiBMYXlhLlZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgIT0gUmVzLnZpZXdzLkxvZ2luVmlldykgdmlld01hcHMucHVzaCh7IHVybDogdXJsLCB2aWV3OiBlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb25MaXN0ID0gZS5nZXRDb21wb25lbnRzKExheWEuU2NyaXB0KTtcclxuICAgICAgICAgICAgICAgIGlmIChjb25MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uTGlzdC5mb3JFYWNoKChlKSA9PiBlLmVuYWJsZWQgJiYgZS5vbk9wZW5lZCAmJiBlLm9uT3BlbmVkKGRhdGEucGFybSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YS5jb21wbGV0ZSAmJiBkYXRhLmNvbXBsZXRlKGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgYCVjID09PiBvcGVuICVjJHt1cmwubWF0Y2goL1xcdysoPz1cXC4pLylbMF19IGAsXHJcbiAgICAgICAgICAgICAgICAgICAgYGNvbG9yOiM3ZWQ2ZGY7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgICAgICAgICAgYGNvbG9yOiMyMmE2YjM7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYXRhLnByb2dyZXNzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTE3M1x1OTVFRFx1ODlDNlx1NTZGRVxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gYWxsIFx1NTQwQ1x1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2Mlx1ODhBQiBcdTU5MUFcdTZCMjFcdTYyNTNcdTVGMDBcdUZGMENcdTUxNjhcdTUyMjBcdTk2NjRcdTc1MjhcdThGRDlcdTRFMkFcclxuICAgICAqIEBwYXJhbSBkZXN0cm95IFx1OTUwMFx1NkJDMSAgIFRPRE9cdUZGMDhcdTlFRDhcdThCQTRcdTRGMUFcdTk1MDBcdTZCQzFcdTYyNDBcdTY3MDlcdTVCNTBcdTgyODJcdTcwQjlcdUZGMENcdTY3MkFcdTZENEJcdThCRDVcdTY2MkZcdTU0MjZcdTY3MDlcdTk1RUVcdTk4OThcdUZGMDlcclxuICAgICAqL1xyXG4gICAgYXN5bmMgY2xvc2UoXHJcbiAgICAgICAgdXJsOiB2aWV3cyxcclxuICAgICAgICBhbGw6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBkZXN0cm95OiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgYW5pQ29tOiB0eXBlb2YgVmlld1Nob3dBbmkgfCB0eXBlb2YgRmxvYXRWaWV3U2hvd0FuaSA9IFZpZXdTaG93QW5pXHJcbiAgICApIHtcclxuICAgICAgICAvL1RPRE8gXHU4RkQ5XHU5MUNDXHU3M0IwXHU1NzI4XHU1MTY4XHU5MEU4XHU3NTI4ZGVzdHJveSBcdTVGMTVcdTY0Q0VyZW1vdmVcdTU5N0RcdTUwQ0ZcdTY3MDlcdTcwQjlcdTk1RUVcdTk4OThcdUZGMENcdTUxOERcdTkwMUFcdThGQzd2aWV3Lm9wZW5cdTRGMUFcdTkxQ0RcdTY1QjBcdTY3ODRcdTVFRkFcdTdFQzRcdTRFRjZcclxuICAgICAgICBkZXN0cm95ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHZBbmk6IFZpZXdTaG93QW5pO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAodXJsID09PSB2aWV3TWFwc1t4XS51cmwpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gdmlld01hcHNbeF07XHJcbiAgICAgICAgICAgICAgICB2aWV3TWFwcy5zcGxpY2UoeCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdkFuaSA9IHYudmlldy5nZXRDb21wb25lbnQoYW5pQ29tIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodkFuaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZBbmkuY2xvc2VWaWV3KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3RvZG9cdTk3MDBcdTg5ODFcdTRGMThcdTUzMTZcdUZGMENcdTc1NENcdTk3NjJcdTc2ODRtYXBcdTk3MDBcdTg5ODFcdTY1NzRcdTc0MDZcdTYyMTBcdUZGMENcdTUxNjhcdTVDNEZcdTU0OENcdTVGMzlcdTdBOTdcdTc2ODRcdTUzM0FcdTUyMkJcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT09IFJlcy52aWV3cy5IaW50VmlldykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghYWxsKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cdTRGRERcdThCQzFcdTU5ODJcdTY3OUNcdTU3M0FcdTY2NkZcdTVCOENcdTUxNjhcdTZDQTFcdTY3MDlcdTc1NENcdTk3NjJcdTg4QUJcdTYyNTNcdTVGMDBcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTVGQzVcdTYyNTNcdTVGMDBcdTRFM0JcdTU3M0FcdTY2NkZcclxuICAgICAgICBpZiAoIXZpZXdNYXBzLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjbG9zZUxlbiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHZpZXdNYXBzLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XHJcbiAgICAgICAgICAgIGlmICghdmlld01hcHNbeF0udmlldy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTGVuKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZUxlbiA9PT0gdmlld01hcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZpZXdNYXBzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuTWFpblZpZXcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codmlld01hcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VWaWV3TG9nKHVybDogc3RyaW5nLCBkZXN0cm95OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYCVjIDw9PSAke2Rlc3Ryb3kgPyBcImRlc3Ryb3lcIiA6IFwiZGlzYWJsZVwifSAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2ZmNzk3OTtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNlYjRkNGI7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5IaW50KGRhdGE6IEhpbnRWaWV3RGF0YSkge1xyXG4gICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuSGludFZpZXcsIHsgcGFybTogZGF0YSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1OTY2NFx1N0YxM1x1NUI1OFx1NzU0Q1x1OTc2MlxyXG4gICAgICovXHJcbiAgICBjbGVhclZpZXdNYXBzKCkge1xyXG4gICAgICAgIHZpZXdNYXBzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvdmVyVmlld0NvbTogT3ZlclZpZXc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTUxNzNcdTk1RURcdThGQzdcdTVFQTZcdTc1NENcdTk3NjJcclxuICAgICAqL1xyXG4gICAgc2V0T3ZlclZpZXcob3BlbjogYm9vbGVhbiwgY2FsbD86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKFJlcy52aWV3cy5PdmVyVmlldywge1xyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICh2OiBPdmVyVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJWaWV3Q29tID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi5jbG9zZShjYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3ZlclZpZXdDb20pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3ZlclZpZXdDb20ub3BlbihjYWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiZXhwb3J0IGNvbnN0IGVudW0gQnVpbGRUeXBlIHtcclxuICAgIC8qKiBcdTZENEJcdThCRDVcdTczQUZcdTU4ODMgKi9cclxuICAgIHRlc3QgPSBcInRlc3RcIixcclxuICAgIC8qKiBcdTdFQkZcdTRFMEFcdTczQUZcdTU4ODMgKi9cclxuICAgIG9ubGluZSA9IFwib25saW5lXCIsXHJcbiAgICAvKiogXHU2NzJDXHU1NzMwXHU1RjAwXHU1M0QxICovXHJcbiAgICBkZWJ1ZyA9IFwiZGVidWdcIixcclxufVxyXG5cclxuY29uc29sZS5sb2coQlVJTERfVFlQRSk7XHJcblxyXG5sZXQgYmFzZVVybCA9IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMDAwXCI7XHJcbnN3aXRjaCAoQlVJTERfVFlQRSkge1xyXG4gICAgY2FzZSBCdWlsZFR5cGUuZGVidWc6XHJcbiAgICAgICAgYmFzZVVybCA9IFwiLy8xOTIuMTY4LjEwMS41MDozMDAwXCI7XHJcbiAgICAgICAgYmFzZVVybCA9IFwiLy8xOTIuMTY4LjEwMS41MDozMTAwXCI7XHJcbiAgICAgICAgLy8gYmFzZVVybCA9IFwiLy8xOTIuMTY4LjUwLjg3OjMwMDBcIjtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgQnVpbGRUeXBlLm9ubGluZTpcclxuICAgICAgICBiYXNlVXJsID0gXCJodHRwOi8vZ2FtZS5haGQxNjguY29tOjMxMDBcIjtcclxuICAgICAgICBicmVhaztcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NkUzOFx1NjIwRlx1OTE0RFx1N0Y2RVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgLyoqIFx1OTRCQlx1NzdGM2lkICovXHJcbiAgICBkaWFtb25kSWQ6IDEwMDEsXHJcbiAgICAvKiogXHU5MUQxXHU1RTAxaWQgKi9cclxuICAgIGdvbGRJZDogMTAwMixcclxuICAgIC8qKiBcdTcyRDdcdTcyRDdcdTZEODhcdTUzMTZcdTk4REZcdTcyNjlcdTk1RjRcdTk2OTRcdTY1RjZcdTk1RjQgXHU3OUQyICovXHJcbiAgICBwZXREaWdlc3RJbnRlcnZhbFRpbWU6IDYwICogMzYwMCxcclxuICAgIC8qKiBcdTZFMzhcdTYyMEZcdTY3MkNcdTU3MzBcdTUwQThcdTVCNThrZXkgKi9cclxuICAgIGxvY2FsS2V5OiBcImxvdmVfSERfZmFybVwiLFxyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NEY1M1x1NTI5Qlx1NEUwQVx1OTY1MCAqL1xyXG4gICAgdXNlclZpdGFsaXR5TGltaXQ6IDEwLFxyXG4gICAgLyoqIFx1NTM0Rlx1OEJBRVx1NTczMFx1NTc0MCAqL1xyXG4gICAgLy8gYmFzZVVybDogXCIvLzQ3LjEwOC4xOTIuMTgxOjgwOTIvIGZhcm1cIixcclxuICAgIGJhc2VVcmw6IGJhc2VVcmwsXHJcbiAgICAvLyBCVUlMRF9UWVBFID09IEJ1aWxkVHlwZS5kZWJ1ZyA/IFwiLy8xOTIuMTY4LjUwLjg3OjMwMDBcIiA6IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMDAwXCIsXHJcbiAgICAvLyBiYXNlVXJsOiBERUJVRyA/IFwiLy8xOTIuMTY4LjEwMS41MDozMDAwXCIgOiBcImh0dHA6Ly9nYW1lLmFoZDE2OC5jb206MzAwMFwiLFxyXG4gICAgLy8gYmFzZVVybDogXCJodHRwOi8vZ2FtZS5haGQxNjguY29tOjMwMDBcIixcclxuICAgIC8vIHRvZG8gXHU4RkQ5XHU5MUNDXHU3Njg0SXBcdTUzRUZcdTRFRTVcdThCQkZcdTk1RUVcdTUzRUZcdTgwRkRcdTY2MkZcdTY3MDlcdTk1RUVcdTk4OThcdTc2ODRcclxuICAgIC8vIGJhc2VVcmw6IFwiLy80Ny4xMDguMTkyLjE4MTozMDAwXCIsXHJcbiAgICAvKiogYXBpXHU4QkY3XHU2QzQyXHU3QzdCXHU1NzhCIFx1OUVEOFx1OEJBNCAqL1xyXG4gICAgQXBpVHlwZURlZmF1bHQ6IDEsXHJcbiAgICAvKiogYXBpXHU4QkY3XHU2QzQyXHU3QzdCXHU1NzhCIFx1NzcwQlx1NUU3Rlx1NTQ0QSAqL1xyXG4gICAgQXBpVHlwZUFEOiAyLFxyXG4gICAgLyoqIFx1NUU3Rlx1NTQ0QVx1Njc2MVx1NEVGNiBcdTUyQTBcdTkwMUZcdTRGN0ZcdTc1MjhcdTRFODY2XHU2QjIxICovXHJcbiAgICBBRFNwZWVkVXBUaW1lczogNixcclxuICAgIHZlcnNpb246IFwiMS4wLjBcIixcclxuICAgIC8qKlx1NkUyMFx1OTA1MyAqL1xyXG4gICAgY2hhbm5lbDogXCJcIixcclxufTtcclxuIiwgImltcG9ydCB7IEFwcEV2ZW50TWFwIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwic3RyZWFtL2NvbnN1bWVyc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNwYXRjaERhdGEge1xyXG4gICAgdXJpOiBBcHBFdmVudE1hcDtcclxuICAgIGRhdGE6IG9iamVjdDtcclxuICAgIHRpbWVzdGFtcD86IHN0cmluZyB8IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBEZXNwYXRjaFJldHVybkRhdGEge1xyXG4gICAgLyoqIFx1NTM0Rlx1OEJBRVx1NzJCNlx1NjAwMVx1NzgwMSAwIFx1NEUzQVx1NkI2M1x1NUUzOCBcdTUxNzZcdTVCODNcdTRFM0FcdTk1MTlcdThCRUZcdTc4MDEgKi9cclxuICAgIGNvZGU6IG51bWJlcjtcclxuICAgIC8qKiBcdTUzNEZcdThCQUV1cmkgKi9cclxuICAgIHVyaTogQXBwRXZlbnRNYXA7XHJcbiAgICAvKiogXHU4RkQ0XHU1NkRFXHU1MTc3XHU0RjUzXHU3Njg0XHU2NTcwXHU2MzZFICovXHJcbiAgICBkYXRhOiBvYmplY3Q7XHJcbiAgICAvKiogXHU2ODA3XHU4QkM2ICovXHJcbiAgICB0aW1lc3RhbXA/OiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IEV2ZW50TWFwOiBNYXA8c3RyaW5nIHwgbnVtYmVyLCBGdW5jdGlvbj4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcclxuICogd2ViIGFwcCBcdTRFQTRcdTRFOTJcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvcmUge1xyXG4gICAgLyoqXHU4MkY5XHU2NzlDXHU3QzdCXHU1NzhCICovXHJcbiAgICBzdGF0aWMgdHlwZUlvczogbnVtYmVyID0gMTtcclxuICAgIC8qKlx1NUI4OVx1NTM1M1x1N0M3Qlx1NTc4QiAqL1xyXG4gICAgc3RhdGljIHR5cGVBbmRyb2lkOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjY3XHU4ODRDYXBwXHU0RUE0XHU0RTkyXHU2NUI5XHU2Q0Q1XHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcdTY1QjlcdTZDRDVcdTU0MERcdTc5RjBcclxuICAgICAqIEBwYXJhbSBkYXRhIFx1NEYyMFx1NTE2NVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcnVuQXBwRnVuY3Rpb24oZGF0YT86IEFwcERlc3BhdGNoRGF0YSk6IFByb21pc2U8QXBwRGVzcGF0Y2hSZXR1cm5EYXRhIHwgbnVsbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChMYXlhLkJyb3dzZXIub25JT1MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbXCJ3ZWJSZXF1ZXN0XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W1wid2ViUmVxdWVzdFwiXS5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudGltZXN0YW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50TWFwLnNldChkYXRhLnRpbWVzdGFtcCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQod2luZG93W1wiJEFwcFwiXSAmJiB3aW5kb3dbXCIkQXBwXCJdW1wid2ViUmVxdWVzdFwiXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93W1wiJEFwcFwiXSAmJiB3aW5kb3dbXCIkQXBwXCJdW1wid2ViUmVxdWVzdFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcIiRBcHBcIl1bXCJ3ZWJSZXF1ZXN0XCJdKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgc2VuZCA9PiAke2RhdGF9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoYHNlbmQgPT4gJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50aW1lc3RhbXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRNYXAuc2V0KGRhdGEudGltZXN0YW1wLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUobnVsbCk7IC8vXHU1OTgyXHU2NzlDXHU1MTk5XHU4RkQ5XHU0RTJBXHU0RjFBXHU2MjEwXHU1MjlGXHVGRjBDXHU2MjQwXHU0RUU1XHU2QjYzXHU1RTM4XHU0RTBEXHU5MDFBXHU4RkM3XHU1RTk0XHU3NTI4XHVGRjBDXHU0RTAwXHU0RTlCXHU1MjlGXHU4MEZEXHU4RkQ5XHU5MUNDXHU0RTBEXHU4QkE5XHU3NTI4XHVGRjBDXHU1QzMxXHU2Q0U4XHU5MUNBXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NkQxXHU1NDJDYXBwIFx1NjI2N1x1ODg0Q2g1IFx1NjNBNVx1NTNFM1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbGlzdGVuQXBwRnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgLy9cdTc2RDFcdTU0MkNcdTYyNEJcdTY3M0FcdTUxNzNcdTk1RURcdTRFOEJcdTRFRjZcdTU0Q0RcdTVFOTRcclxuXHJcbiAgICAgICAgd2luZG93W1wiYXBwUmVzcG9uc2VcIl0gPSAoZDogQXBwRGVzcGF0Y2hSZXR1cm5EYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KGBiYWNrICR7SlNPTi5zdHJpbmdpZnkoZCl9YCk7XHJcblxyXG4gICAgICAgICAgICAvLyBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBKU09OLnN0cmluZ2lmeShkKSwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KGQ/LnRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgIGlmIChFdmVudE1hcC5oYXMoZD8udGltZXN0YW1wKSkge1xyXG4gICAgICAgICAgICAgICAgRXZlbnRNYXAuZ2V0KGQudGltZXN0YW1wKShkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb0NvbnRyb2wge1xyXG4gICAgcGxheVNvdW5kKFxyXG4gICAgICAgIHVybDogc3RyaW5nLFxyXG4gICAgICAgIGxvb3BzPzogbnVtYmVyLFxyXG4gICAgICAgIGNvbXBsZXRlPzogSGFuZGxlcixcclxuICAgICAgICBzb3VuZENsYXNzPzogbmV3ICgpID0+IGFueSxcclxuICAgICAgICBzdGFydFRpbWU/OiBudW1iZXJcclxuICAgICkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZCh1cmwsIGxvb3BzLCBjb21wbGV0ZSwgc291bmRDbGFzcywgc3RhcnRUaW1lKTtcclxuICAgIH1cclxuICAgIHBsYXlNdXNpYyh1cmw6IHN0cmluZywgbG9vcHMgPSAwLCBjb21wbGV0ZT86IEhhbmRsZXIsIHN0YXJ0VGltZT86IG51bWJlcikge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyh1cmwsIGxvb3BzLCBjb21wbGV0ZSwgc3RhcnRUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU2MjQwXHU2NzA5XHU5N0YzXHU2NTQ4XHVGRjA4XHU0RTBEXHU1MzA1XHU2MkVDXHU4MENDXHU2NjZGXHU5N0YzXHU0RTUwXHVGRjA5XHU2NjJGXHU1NDI2XHU5NzU5XHU5N0YzXHUzMDAyICovXHJcbiAgICBzZXQgc291bmRNdXRlZChzdGF0ZSkge1xyXG4gICAgICAgIExheWEuU291bmRNYW5hZ2VyLnNvdW5kTXV0ZWQgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIGdldCBzb3VuZE11dGVkKCkge1xyXG4gICAgICAgIHJldHVybiBMYXlhLlNvdW5kTWFuYWdlci5zb3VuZE11dGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgwQ0NcdTY2NkZcdTk3RjNcdTRFNTBcdUZGMDhcdTRFMERcdTUzMDVcdTYyRUNcdTk3RjNcdTY1NDhcdUZGMDlcdTY2MkZcdTU0MjZcdTk3NTlcdTk3RjMgKi9cclxuICAgIHNldCBtdXNpY011dGVkKHN0YXRlKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIubXVzaWNNdXRlZCA9IHN0YXRlO1xyXG4gICAgfVxyXG4gICAgZ2V0IG11c2ljTXV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIExheWEuU291bmRNYW5hZ2VyLm11c2ljTXV0ZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBBdWRpb0NvbnRyb2wgZnJvbSBcIi4vQXVkaW9Db250cm9sXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uLCBGaW5kQnlOYW1lIH0gZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4vR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vVmlld01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IENvcmUgPSB7XHJcbiAgICAvKiogXHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU3RUQxXHU1QjlBXHU1M0VGXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2ICovXHJcbiAgICBvYnNlcnZhYmxlUHJvcGVydHk6IE9ic2VydmFibGVQcm9wZXJ0eSxcclxuICAgIC8qKiBcdTc1NENcdTk3NjJcdTdCQTFcdTc0MDZcdTU2NjggKi9cclxuICAgIHZpZXc6IFZpZXdNYW5hZ2VyLmluc3QsXHJcbiAgICAvKiogXHU1RjE1XHU2NENFXHU4MTFBXHU2NzJDXHU3RUM0XHU0RUY2ICovXHJcbiAgICBnYW1lU2NyaXB0OiBHYW1lU2NyaXB0LFxyXG4gICAgLyoqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OCAqL1xyXG4gICAgaW5zdGFuY2U6IEluc3RhbmNlLFxyXG4gICAgLyoqIFx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QSA9PiBcdTdFRDFcdTVCOUFcdTUyMzBcdTg4QzVcdTk5NzBcdTU2NjhcdTRFMEEgXHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG4gICAgZXZlbnRPbjogRXZlbnRPbixcclxuICAgIC8qKiB0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lXHU3Njg0XHU3NzAxXHU0RThCXHU1MTk5XHU2Q0Q1IFx1NTNFQVx1ODBGRFx1NjdFNVx1NjI3RVx1NEUwQlx1NEUwMFx1N0VBN1x1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuICAgIGZpbmRCeU5hbWU6IEZpbmRCeU5hbWUsXHJcbiAgICAvKiogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2ICovXHJcbiAgICBldmVudEdsb2JhbDogRXZlbnRHbG9iYWwsXHJcbiAgICAvKipcdTk3RjNcdTk4OTEgKi9cclxuICAgIGF1ZGlvOiBuZXcgQXVkaW9Db250cm9sKCksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3JlO1xyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJvdXRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZlcnNpb24sIHRpcHM6XCJcdTczQTlcdTVCQjZcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZlcnNpb246IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNoYW5uZWwsIHRpcHM6XCJcdTZFMjBcdTkwNTNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNoYW5uZWw6IExheWEuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMudmVyc2lvbi50ZXh0ID0gYFx1NzI0OFx1NjcyQ1x1NTNGN1x1RkYxQVYke0NvbmZpZ0dhbWUudmVyc2lvbn1gO1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbC50ZXh0ID0gYFx1NkUyMFx1OTA1M1x1NTNGN1x1RkYxQSR7Q29uZmlnR2FtZS5jaGFubmVsfWA7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BYm91dFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1c2VyX2FncmVlbWVudFwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTc1MjhcdTYyMzdcdTUzNEZcdThCQUVcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oeyB1cmk6IEFwcEV2ZW50TWFwLnNlcnZpY2VBZ3JlZW1lbnQsIGRhdGE6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcml2YWN5XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OTY5MFx1NzlDMVx1NjUzRlx1N0I1NlxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAucHJpdmFjeUFncmVlbWVudCwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRlZmF1bHRSZXMsIHRpcHM6XCJcdThENDRcdTZFOTBcIix0eXBlOnN0cmluZ3MsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0UmVzO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRvd25SZXMsIHRpcHM6XCJcdThENDRcdTZFOTBcIix0eXBlOnN0cmluZ3MsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBkb3duUmVzO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmlzU2NhbGUsIHRpcHM6XCJcdTY2MkZcdTU0MjZcdTdGMjlcdTY1M0VcIix0eXBlOkNoZWNrfSovXHJcbiAgICBwcml2YXRlIGlzU2NhbGUgPSBmYWxzZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzY2FsZVZhbCwgdGlwczpcIlx1N0YyOVx1NjUzRVx1NzY4NFx1NTAzQ1wiLHR5cGU6TnVtYmVyLCBkZWZhdWx0OjAuOX0qL1xyXG4gICAgcHJpdmF0ZSBzY2FsZVZhbDogbnVtYmVyID0gMC45O1xyXG5cclxuICAgIHByaXZhdGUgb2xkU2NhbGVYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIG9sZFNjYWxlWTogbnVtYmVyO1xyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vICh0aGlzLm93bmVyIGFzIExheWEuQm94KS5zZXRfYW5jaG9yWCgwLjUpO1xyXG4gICAgICAgIC8vICh0aGlzLm93bmVyIGFzIExheWEuQm94KS5zZXRfYW5jaG9yWSgwLjUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNTY2FsZSk7XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLm1vdXNlRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vbGRTY2FsZVggPSAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikuZ2V0X3NjYWxlWCgpO1xyXG4gICAgICAgIHRoaXMub2xkU2NhbGVZID0gKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLmdldF9zY2FsZVkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRG93bigpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kb3duUmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSh0aGlzLnNjYWxlVmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlT3V0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRlZmF1bHRSZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKDEpO1xyXG4gICAgfVxyXG4gICAgb25Nb3VzZVVwKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRlZmF1bHRSZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QW5pKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNTY2FsZSkgcmV0dXJuO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgIHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgIHsgc2NhbGVYOiBzY2FsZSAqIHRoaXMub2xkU2NhbGVYLCBzY2FsZVk6IHNjYWxlICogdGhpcy5vbGRTY2FsZVkgfSxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFNraW4oc2tpbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFza2luKSByZXR1cm47XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHNraW47XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge31cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5cclxuY29uc3QgTG9jYWxEYXRhID0ge1xyXG4gICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICB0b2tlbjogbnVsbCxcclxuXHJcbiAgICAvKiogdHJ1ZSBcdTRFM0FcdTUxNzNcdTk1RUQgZmFsc2UgXHU0RTNBXHU2MjUzXHU1RjAwICovXHJcbiAgICBzb3VuZDogZmFsc2UsXHJcbiAgICAvKiogdHJ1ZSBcdTRFM0FcdTUxNzNcdTk1RUQgZmFsc2UgXHU0RTNBXHU2MjUzXHU1RjAwICovXHJcbiAgICBtdXNpYzogZmFsc2UsXHJcbiAgICAvKiogdmVyc2lvbiAqL1xyXG4gICAgdmVyc2lvbjogXCIwLjAuMFwiLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFx1NjcyQ1x1NTczMFx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NCBsb2NhbERhdGEgXHU1NzI4XHU4RkQ5XHU0RTJBXHU5MUNDXHU5NzYyXHU1QjlBXHU0RTQ5XHU1OTdEXHJcbiAqL1xyXG5jbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9jYWxEYXRhID0gTG9jYWxEYXRhO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjFEXHU1OUNCXHU1MzE2XHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbERhdGEgPSBMYXlhLkxvY2FsU3RvcmFnZS5nZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXkpIHx8IExvY2FsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4M0I3XHU1M0Q2XHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBnZXRKU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4QkJFXHU3RjZFXHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBzZXRKU09OPGtleSBleHRlbmRzIGtleW9mIHR5cGVvZiBMb2NhbERhdGE+KGtleToga2V5LCBkYXRhOiB0eXBlb2YgTG9jYWxEYXRhW2tleV0pIHtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YVtrZXldID0gZGF0YTtcclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXksIHRoaXMubG9jYWxEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICBMYXlhLkxvY2FsU3RvcmFnZS5zZXRKU09OKENvbmZpZ0dhbWUubG9jYWxLZXksIHsgdmVyc2lvbjogdGhpcy5sb2NhbERhdGEudmVyc2lvbiB9KTtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IHtcclxuICAgICAgICAgICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRva2VuOiBudWxsLFxyXG4gICAgICAgICAgICBzb3VuZDogdHJ1ZSxcclxuICAgICAgICAgICAgbXVzaWM6IHRydWUsXHJcbiAgICAgICAgICAgIHZlcnNpb246IHRoaXMubG9jYWxEYXRhLnZlcnNpb24sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExvY2FsU3RvcmFnZVNlcnZpY2UoKTtcclxuIiwgIi8qKiBcdTYyNDBcdTY3MDlcdTg4NjggKi9cclxuICAgICAgICBleHBvcnQgY29uc3QgVGFibGUgPSB7XCJ0YXNrXCI6W3tcImlkXCI6MTAwMSxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxLFwidGl0bGVcIjpcIlx1N0I3RVx1NTIzMFx1OTg4Nlx1OTRCQlx1NzdGM1wiLFwiZGVzY1wiOlwiXHU3NzBCXHU4OUM2XHU5ODkxXHU3QjdFXHU1MjMwXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDAyLFwicmV3YXJkXCI6XCIxMDAxOjEwMFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdTgzRENcdTU3MzBcdTY1QkRcdTgwQTUxMFx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4M0RDXHU1NzMwXHU1MkEwXHU5MDFGMTBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDMsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU4M0RDXHU1NzMwXHU2NTM2XHU4M0I3MTBcdTZCMjFcIixcImRlc2NcIjpcIlx1ODNEQ1x1NTczMFx1NjUzNlx1ODNCNzEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA0LFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjUsXCJ0aXRsZVwiOlwiXHU1MDc3XHU4M0RDNVx1NkIyMVwiLFwiZGVzY1wiOlwiXHU1MDc3XHU4M0RDNVx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwNSxcInJld2FyZFwiOlwiMTAwMjoyMDBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTU1ODJcdTUxN0JcdTcyRDdcdTcyRDczXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTU1ODJcdTUxN0JcdTcyRDdcdTcyRDczXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDEzLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjUsXCJ0aXRsZVwiOlwiXHU5MDgwXHU4QkY3XHU1OTdEXHU1M0NCXCIsXCJkZXNjXCI6XCJcdTkwODBcdThCRjc1XHU0RTJBXHU1OTdEXHU1M0NCXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA3LFwicmV3YXJkXCI6XCIxMDAxOjIwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1OEQyRFx1NEU3MFx1NzlDRFx1NUI1MDEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdThEMkRcdTRFNzBcdTc5Q0RcdTVCNTAxMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwOCxcInJld2FyZFwiOlwiMTAwMjo1MDBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTUxRkFcdTU1MkVcdTRGNUNcdTcyNjkzXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTUxRkFcdTU1MkVcdTRGNUNcdTcyNjkzXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA5LFwicmV3YXJkXCI6XCIxMDAxOjEwMFwiLFwidGltZXNcIjo1LFwidGl0bGVcIjpcIlx1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlwiLFwiZGVzY1wiOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCNVx1NEUyQVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMCxcInJld2FyZFwiOlwiMTAwMToxMDBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU1MjA2XHU0RUFCXHU1Rjk3XHU1OTdEXHU3OTNDXCIsXCJkZXNjXCI6XCJcdTUyMDZcdTRFQUIxMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMSxcInJld2FyZFwiOlwiMTAwMjo1MDBcIixcInRpbWVzXCI6MyxcInRpdGxlXCI6XCJcdTRFRkJcdTYxMEZcdTc5Q0RcdTY5MERcIixcImRlc2NcIjpcIlx1NEVGQlx1NjEwRlx1NzlDRFx1NjkwRDNcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMTIsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6NSxcInRpdGxlXCI6XCJcdTc3MEJcdTg5QzZcdTk4OTFcdTk4ODZcdTc5OEZcdTUyMjlcIixcImRlc2NcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MTVcdTZCMjFcIixcImljb25cIjpudWxsfV0sXCJzaWduSW5cIjpbe1wiaWRcIjoxMDAxLFwiZGF5c1wiOjcsXCJyZXdhcmRcIjpcIjEwMDE6MjAwMDBcIn0se1wiaWRcIjoxMDAyLFwiZGF5c1wiOjEwLFwicmV3YXJkXCI6XCIxMDAxOjMwMDAwXCJ9LHtcImlkXCI6MTAwMyxcImRheXNcIjoxNSxcInJld2FyZFwiOlwiMTAwMTo1MDAwMFwifSx7XCJpZFwiOjEwMDQsXCJkYXlzXCI6MjAsXCJyZXdhcmRcIjpcIjEwMDE6ODAwMDBcIn0se1wiaWRcIjoxMDA1LFwiZGF5c1wiOjMwLFwicmV3YXJkXCI6XCIxMDAxOjEyMDAwMFwifSx7XCJpZFwiOjEwMDYsXCJkYXlzXCI6NTAsXCJyZXdhcmRcIjpcIjEwMDE6MTgwMDAwXCJ9LHtcImlkXCI6MTAwNyxcImRheXNcIjo4MCxcInJld2FyZFwiOlwiMTAwMTozMDAwMDBcIn0se1wiaWRcIjoxMDA4LFwiZGF5c1wiOjEwMCxcInJld2FyZFwiOlwiMTAwMTozNTAwMDBcIn0se1wiaWRcIjoxMDA5LFwiZGF5c1wiOjE1MCxcInJld2FyZFwiOlwiMTAwMTo1MDAwMDBcIn1dLFwicGxhbnRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU2QzM0XHU3QTNCXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDJfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwXCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIxODBcIixcInVubG9ja19jb3N0XCI6bnVsbCxcInVubG9ja19yZXdhcmRcIjpudWxsLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1NTkyN1x1OEM0NlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA0X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MFwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMTgwXCIsXCJ1bmxvY2tfY29zdFwiOm51bGwsXCJ1bmxvY2tfcmV3YXJkXCI6bnVsbCxcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTU5MjdcdTg0OUNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxMl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTBcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjI0MFwiLFwidW5sb2NrX2Nvc3RcIjpudWxsLFwidW5sb2NrX3Jld2FyZFwiOm51bGwsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU1MzA1XHU1RkMzXHU4M0RDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDZfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NzVcIixcImdhaW5cIjpcIjEwMDE6MSwxMDAyOjc1XCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIzMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTU3MUZcdThDNDZcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwN19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo3NVwiLFwiZ2FpblwiOlwiMTAwMToxLDEwMDI6NzVcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjMwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNixcIm5hbWVcIjpcIlx1ODQxRFx1NTM1Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA1X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjc1XCIsXCJnYWluXCI6XCIxMDAxOjEsMTAwMjo3NVwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiNDgwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA3LFwibmFtZVwiOlwiXHU1QzBGXHU5RUE2XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDFfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MTIwXCIsXCJnYWluXCI6XCIxMDAxOjMsMTAwMjoxMjBcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjQ4MFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwOCxcIm5hbWVcIjpcIlx1OEZBM1x1NjkxMlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDEwX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjEyMFwiLFwiZ2FpblwiOlwiMTAwMTozLDEwMDI6MTIwXCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCI2MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjIwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDksXCJuYW1lXCI6XCJcdTlFQzRcdTc0RENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxMV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoyMDBcIixcImdhaW5cIjpcIjEwMDE6NSwxMDAyOjIwMFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiNzIwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjozMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDEwLFwibmFtZVwiOlwiXHU4MzA0XHU1QjUwXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTNfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MjAwXCIsXCJnYWluXCI6XCIxMDAxOjUsMTAwMjoyMDBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjcyMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MzUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMSxcIm5hbWVcIjpcIlx1ODBFMVx1ODQxRFx1NTM1Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA4X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjM1MFwiLFwiZ2FpblwiOlwiMTAwMTo3LDEwMDI6MzUwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI5MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjQ1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTIsXCJuYW1lXCI6XCJcdTUzNTdcdTc0RENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxNF9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjozNTBcIixcImdhaW5cIjpcIjEwMDE6NywxMDAyOjM1MFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiOTAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo1MDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDEzLFwibmFtZVwiOlwiXHU3Mzg5XHU3QzczXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDNfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTAwXCIsXCJnYWluXCI6XCIxMDAxOjEwLDEwMDI6NTAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjVcIixcIm1hdHVyZV90aW1lXCI6XCIxMjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo1NTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDE0LFwibmFtZVwiOlwiXHU3NTE4XHU4NTE3XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTVfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTAwXCIsXCJnYWluXCI6XCIxMDAxOjEwLDEwMDI6NTAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjVcIixcIm1hdHVyZV90aW1lXCI6XCIxMjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo2MDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDE1LFwibmFtZVwiOlwiXHU3NTZBXHU4MzA0XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDlfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTAwXCIsXCJnYWluXCI6XCIxMDAxOjEwLDEwMDI6NTAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjVcIixcIm1hdHVyZV90aW1lXCI6XCIxMjAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjo2NTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn1dLFwicGV0XCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1NjVGQVx1OEQyMlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwMV9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTAsXCJjb3N0XCI6XCIxMDAyOjMwMDBcIixcImRlc2NcIjpcIlx1NzIzMVx1NUI4M1x1NUMzMVx1NEU3MFx1NUI4M35cdTVCODNcdTVDMzFcdTY2MkZcdTY3MDlcdTcwQjlcdTYxRDJ+XCIsXCJzZW5zaXRpdmVcIjozNCxcImFiaWxpdHlcIjo0Mn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU2QzY0XHU1NzA2XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA3X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNSxcImNvc3RcIjpcIjEwMDI6NDAwMFwiLFwiZGVzY1wiOlwiXHU5ODlDXHU1MDNDXHUzMDAxXHU2NjdBXHU1NTQ2XHU1M0NDXHU1M0NDXHU1NzI4XHU3RUJGXCIsXCJzZW5zaXRpdmVcIjo0MCxcImFiaWxpdHlcIjo0OH0se1wiaWRcIjoxMDAzLFwibmFtZVwiOlwiXHU4MDg5XHU1RTcyXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA5X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNixcImNvc3RcIjpcIjEwMDI6NDUwMFwiLFwiZGVzY1wiOlwiXHU2NzAwXHU1RkUwXHU4QkRBXHU3Njg0XHU0RjE5XHU0RjM0XCIsXCJzZW5zaXRpdmVcIjo0NSxcImFiaWxpdHlcIjo1NX0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU0RThDXHU1NEM4XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAyX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNixcImNvc3RcIjpcIjEwMDI6NTAwMFwiLFwiZGVzY1wiOlwiXHU3RUREXHU0RTBEXHU2MkM2XHU1QkI2XHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo0OCxcImFiaWxpdHlcIjo2MH0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU1OTI3XHU3NzNDXHU3NzVCXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA1X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxNyxcImNvc3RcIjpcIjEwMDI6NzAwMFwiLFwiZGVzY1wiOlwiXHU2RDNCXHU1OTdEXHU1NDAzXHU3Njg0XHU1QzExXCIsXCJzZW5zaXRpdmVcIjo1MCxcImFiaWxpdHlcIjo3NX0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU1QzBGXHU1QzNFXHU1REY0XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA0X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6NzUwMFwiLFwiZGVzY1wiOlwiXHU2QjY2XHU1MjlCXHU1OTI5XHU4RDRCXHU1REYyXHU3MEI5XHU2RUUxflx1NjJGRlx1NjM0Rlx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6NjAsXCJhYmlsaXR5XCI6ODB9LHtcImlkXCI6MTAwNyxcIm5hbWVcIjpcIlx1NzQwM1x1NzQwM1wiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwOF9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTgsXCJjb3N0XCI6XCIxMDAyOjgwMDBcIixcImRlc2NcIjpcIlx1NUMzMVx1NEUyNFx1NEUyQVx1NUI1N1x1RkYwQ1x1NTQyQ1x1OEJERFx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6NjksXCJhYmlsaXR5XCI6ODV9LHtcImlkXCI6MTAwOCxcIm5hbWVcIjpcIlx1NUMwRlx1NzY3RFwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwM19kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTgsXCJjb3N0XCI6XCIxMDAyOjgwMDBcIixcImRlc2NcIjpcIlx1NzcwQlx1NUJCNlx1MzAwMVx1NzcwQlx1ODNEQ1x1MzAwMVx1NzcwQlx1NUI2OVx1NUI1MFwiLFwic2Vuc2l0aXZlXCI6NzYsXCJhYmlsaXR5XCI6ODh9LHtcImlkXCI6MTAwOSxcIm5hbWVcIjpcIlx1NzBCOVx1NzBCOVwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwNl9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MTksXCJjb3N0XCI6XCIxMDAyOjEwMDAwXCIsXCJkZXNjXCI6XCJcdTRGNjBcdTUwM0NcdTVGOTdcdTYyRTVcdTY3MDlcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjg1LFwiYWJpbGl0eVwiOjkzfSx7XCJpZFwiOjEwMTAsXCJuYW1lXCI6XCJcdTk1RjdcdTU4QTlcIixcImljb25cIjpcInBldF9mZWVkLzEwMTBfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjMwLFwiY29zdFwiOlwiMTAwMjoxNTAwMFwiLFwiZGVzY1wiOlwiXHU5NTdGXHU1Rjk3XHU1QzMxXHU1Rjg4XHU1MUY2XHVGRjBDXHU2MjkzXHU1QzBGXHU1MDc3XHU2NkY0XHU1MUY2XCIsXCJzZW5zaXRpdmVcIjo5MCxcImFiaWxpdHlcIjo5OX1dLFwib3JkZXJcIjpbe1wiaWRcIjoxLFwiY29tbWlzc2lvblwiOlwiMS4xMlwiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjJcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo4MFwifSx7XCJpZFwiOjIsXCJjb21taXNzaW9uXCI6XCIwLjg3XCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MSwxMDAyOjJcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo4MFwifSx7XCJpZFwiOjMsXCJjb21taXNzaW9uXCI6XCIwLjY5XCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MSwxMDAzOjIsMTAwMjozXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6ODBcIn0se1wiaWRcIjo0LFwiY29tbWlzc2lvblwiOlwiMC42MVwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjQsMTAwMzozLDEwMDQ6MywxMDAxOjRcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo4MFwifSx7XCJpZFwiOjUsXCJjb21taXNzaW9uXCI6XCIwLjYxXCIsXCJjb25kaXRpb25cIjpcIjEwMDQ6NiwxMDAyOjUsMTAwNTo0LDEwMDE6NVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjgwXCJ9LHtcImlkXCI6NixcImNvbW1pc3Npb25cIjpcIjAuNjhcIixcImNvbmRpdGlvblwiOlwiMTAwMzoxMCwxMDA0OjUsMTAwNTozLDEwMDY6M1wiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjgwXCJ9LHtcImlkXCI6NyxcImNvbW1pc3Npb25cIjpcIjAuNDNcIixcImNvbmRpdGlvblwiOlwiMTAwNzo0LDEwMDM6NSwxMDA0OjcsMTAwNjoxMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjgwXCJ9LHtcImlkXCI6OCxcImNvbW1pc3Npb25cIjpcIjAuNTZcIixcImNvbmRpdGlvblwiOlwiMTAwODoxMywxMDA3OjMsMTAwNTo1LDEwMDI6NVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjgwXCJ9LHtcImlkXCI6OSxcImNvbW1pc3Npb25cIjpcIjAuMzlcIixcImNvbmRpdGlvblwiOlwiMTAwNjoyLDEwMDk6MTAsMTAwNzo4LDEwMDM6OFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjgwXCJ9LHtcImlkXCI6MTAsXCJjb21taXNzaW9uXCI6XCIwLjIyXCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MTAsMTAxMDo1LDEwMDg6MTAsMTAwOTo2XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6ODBcIn0se1wiaWRcIjoxMSxcImNvbW1pc3Npb25cIjpcIjAuNzZcIixcImNvbmRpdGlvblwiOlwiMTAwOTo1LDEwMDQ6MTAsMTAwMTo5LDEwMDI6MTBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxMixcImNvbW1pc3Npb25cIjpcIjAuNDNcIixcImNvbmRpdGlvblwiOlwiMTAwNzo2LDEwMDM6MTEsMTAxMTo2LDEwMDU6MTBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxMyxcImNvbW1pc3Npb25cIjpcIjAuMTdcIixcImNvbmRpdGlvblwiOlwiMTAxMDo1LDEwMDU6MTMsMTAwMTo4LDEwMTI6OFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjE0LFwiY29tbWlzc2lvblwiOlwiMC41NVwiLFwiY29uZGl0aW9uXCI6XCIxMDEzOjEwLDEwMDg6OCwxMDA2OjYsMTAwMToxMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjE1LFwiY29tbWlzc2lvblwiOlwiMC40OFwiLFwiY29uZGl0aW9uXCI6XCIxMDAyOjEwLDEwMDU6MTAsMTAxMToxMiwxMDAxOjEwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTAwXCJ9LHtcImlkXCI6MTYsXCJjb21taXNzaW9uXCI6MC4yOSxcImNvbmRpdGlvblwiOlwiMTAwODoxMSwxMDE0OjQsMTAwNjo4LDEwMDU6MTdcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxNyxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDA2OjE0LDEwMDc6NiwxMDE1OjEyLDEwMDE6MTRcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxOCxcImNvbW1pc3Npb25cIjowLjQ4LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE0LDEwMTE6MTIsMTAwOToxNSwxMDAyOjVcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxOSxcImNvbW1pc3Npb25cIjowLjc1LFwiY29uZGl0aW9uXCI6XCIxMDEzOjEwLDEwMDM6MjAsMTAxNDoxMSwxMDAxOjdcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoyMCxcImNvbW1pc3Npb25cIjowLjY3LFwiY29uZGl0aW9uXCI6XCIxMDAzOjEwLDEwMTE6MTcsMTAwMjoxNCwxMDA1OjEyXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTAwXCJ9LHtcImlkXCI6MjEsXCJjb21taXNzaW9uXCI6MC42NCxcImNvbmRpdGlvblwiOlwiMTAxMDoxMCwxMDAzOjE0LDEwMDU6MTYsMTAwNzoxNVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEyMFwifSx7XCJpZFwiOjIyLFwiY29tbWlzc2lvblwiOlwiMC40XCIsXCJjb25kaXRpb25cIjpcIjEwMTU6MTksMTAwNzoxMiwxMDExOjUsMTAwNDoxN1wiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEyMFwifSx7XCJpZFwiOjIzLFwiY29tbWlzc2lvblwiOlwiMC40XCIsXCJjb25kaXRpb25cIjpcIjEwMDM6MTksMTAxNDoyMiwxMDE1OjE2LDEwMDg6MTRcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMjBcIn0se1wiaWRcIjoyNCxcImNvbW1pc3Npb25cIjowLjc3LFwiY29uZGl0aW9uXCI6XCIxMDE0OjEzLDEwMDE6MTcsMTAwODoxOCwxMDA0OjE1XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTIwXCJ9LHtcImlkXCI6MjUsXCJjb21taXNzaW9uXCI6XCIwLjM5XCIsXCJjb25kaXRpb25cIjpcIjEwMTI6MjMsMTAxMToxOSwxMDEwOjE1LDEwMTU6MjBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMjBcIn0se1wiaWRcIjoyNixcImNvbW1pc3Npb25cIjowLjAzLFwiY29uZGl0aW9uXCI6XCIxMDAyOjIxLDEwMTE6MTIsMTAxMjoyMiwxMDAzOjE5XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTIwXCJ9LHtcImlkXCI6MjcsXCJjb21taXNzaW9uXCI6MC40OSxcImNvbmRpdGlvblwiOlwiMTAwNzoxNiwxMDE0OjE2LDEwMDY6MjAsMTAxMToxN1wiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEyMFwifSx7XCJpZFwiOjI4LFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTcsMTAwNzoxMiwxMDExOjE3LDEwMDM6MTdcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMjBcIn0se1wiaWRcIjoyOSxcImNvbW1pc3Npb25cIjowLjc3LFwiY29uZGl0aW9uXCI6XCIxMDEyOjEwLDEwMDU6MTYsMTAxMDoxNCwxMDE1OjE4XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTIwXCJ9LHtcImlkXCI6MzAsXCJjb21taXNzaW9uXCI6XCIwLjM0XCIsXCJjb25kaXRpb25cIjpcIjEwMTE6MTcsMTAxNDoxOSwxMDA2OjE0LDEwMDQ6MzBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMjBcIn0se1wiaWRcIjozMSxcImNvbW1pc3Npb25cIjowLjUzLFwiY29uZGl0aW9uXCI6XCIxMDA3OjE4LDEwMTA6MTQsMTAxMzoxOSwxMDA2OjExXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTUwXCJ9LHtcImlkXCI6MzIsXCJjb21taXNzaW9uXCI6MC40NixcImNvbmRpdGlvblwiOlwiMTAxMzoxOSwxMDA1OjIyLDEwMTI6MTIsMTAwODoyMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjE1MFwifSx7XCJpZFwiOjMzLFwiY29tbWlzc2lvblwiOlwiMC40NFwiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE2LDEwMTM6MjAsMTAwMjoyMywxMDA5OjE2XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTUwXCJ9LHtcImlkXCI6MzQsXCJjb21taXNzaW9uXCI6XCIwLjQyXCIsXCJjb25kaXRpb25cIjpcIjEwMDk6MTksMTAxMDoxMiwxMDExOjE0LDEwMTI6MjBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNTBcIn0se1wiaWRcIjozNSxcImNvbW1pc3Npb25cIjpcIjAuMzNcIixcImNvbmRpdGlvblwiOlwiMTAwMToxOCwxMDA0OjE5LDEwMTM6MTYsMTAwMzoyMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjE1MFwifSx7XCJpZFwiOjM2LFwiY29tbWlzc2lvblwiOjAuMjEsXCJjb25kaXRpb25cIjpcIjEwMDM6MTEsMTAwODoxNywxMDE0OjE3LDEwMDc6MTlcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNTBcIn0se1wiaWRcIjozNyxcImNvbW1pc3Npb25cIjowLjQ0LFwiY29uZGl0aW9uXCI6XCIxMDEyOjE5LDEwMTA6MjAsMTAwMjoxNCwxMDExOjExXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTUwXCJ9LHtcImlkXCI6MzgsXCJjb21taXNzaW9uXCI6MC4yMixcImNvbmRpdGlvblwiOlwiMTAxNDoxMywxMDA0OjE5LDEwMDI6MTEsMTAxNToxOFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjE1MFwifSx7XCJpZFwiOjM5LFwiY29tbWlzc2lvblwiOjAuMzYsXCJjb25kaXRpb25cIjpcIjEwMDc6MTgsMTAxMjoxMywxMDA0OjE2LDEwMDI6MjZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNTBcIn0se1wiaWRcIjo0MCxcImNvbW1pc3Npb25cIjowLjI4LFwiY29uZGl0aW9uXCI6XCIxMDA0OjMwLDEwMDU6MTAsMTAwODoxOCwxMDExOjE2XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTUwXCJ9LHtcImlkXCI6NDEsXCJjb21taXNzaW9uXCI6XCIwLjQ4XCIsXCJjb25kaXRpb25cIjpcIjEwMTA6MTgsMTAwOToxOCwxMDA4OjE3LDEwMTE6MjZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo1MDBcIn0se1wiaWRcIjo0MixcImNvbW1pc3Npb25cIjowLjQzLFwiY29uZGl0aW9uXCI6XCIxMDA5OjIxLDEwMDU6MTgsMTAwNzoyMCwxMDAyOjIzXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6ODAwXCJ9LHtcImlkXCI6NDMsXCJjb21taXNzaW9uXCI6XCIwLjI0XCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MzAsMTAwNDoxNCwxMDE0OjExLDEwMDg6MTVcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDAwXCJ9LHtcImlkXCI6NDQsXCJjb21taXNzaW9uXCI6MC42MixcImNvbmRpdGlvblwiOlwiMTAwOToxNSwxMDAzOjI4LDEwMDI6MzQsMTAwNzoxOVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjE2MDBcIn0se1wiaWRcIjo0NSxcImNvbW1pc3Npb25cIjpcIjAuNDFcIixcImNvbmRpdGlvblwiOlwiMTAxMjoxNSwxMDEwOjIzLDEwMDc6MTMsMTAxMToxM1wiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjIyMDBcIn0se1wiaWRcIjo0NixcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDAzOjIyLDEwMDc6MjMsMTAxMDoxNiwxMDAyOjI0XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MjgwMFwifSx7XCJpZFwiOjQ3LFwiY29tbWlzc2lvblwiOjAuNDksXCJjb25kaXRpb25cIjpcIjEwMTA6MjQsMTAxNToyMCwxMDAzOjI1LDEwMTQ6MTZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTozNDAwXCJ9LHtcImlkXCI6NDgsXCJjb21taXNzaW9uXCI6XCIwLjI2XCIsXCJjb25kaXRpb25cIjpcIjEwMTM6MTcsMTAwNzoyNCwxMDA4OjM3LDEwMDE6MzBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo0MDAwXCJ9LHtcImlkXCI6NDksXCJjb21taXNzaW9uXCI6MC40OCxcImNvbmRpdGlvblwiOlwiMTAwMjoyNiwxMDA0OjIxLDEwMDk6MjIsMTAwNjoyMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjQ2MDBcIn0se1wiaWRcIjo1MCxcImNvbW1pc3Npb25cIjpcIjAuMjVcIixcImNvbmRpdGlvblwiOlwiMTAwNjoyNywxMDEyOjE5LDEwMDg6MjAsMTAxNToxMVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjUyMDBcIn0se1wiaWRcIjo1MSxcImNvbW1pc3Npb25cIjpcIjAuMzRcIixcImNvbmRpdGlvblwiOlwiMTAxMToxOCwxMDA0OjE5LDEwMDI6MjUsMTAwMzoxMVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjU4MDBcIn0se1wiaWRcIjo1MixcImNvbW1pc3Npb25cIjowLjQzLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE1LDEwMTM6MjAsMTAwMToyNSwxMDA0OjI2XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6NjQwMFwifSx7XCJpZFwiOjUzLFwiY29tbWlzc2lvblwiOlwiMC4yOFwiLFwiY29uZGl0aW9uXCI6XCIxMDE0OjE0LDEwMTI6MTIsMTAxMDoyMCwxMDE1OjE4XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6NzAwMFwifSx7XCJpZFwiOjU0LFwiY29tbWlzc2lvblwiOjAuNDUsXCJjb25kaXRpb25cIjpcIjEwMDU6MjIsMTAwMjozMywxMDA5OjE2LDEwMTU6MTdcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo3NjAwXCJ9LHtcImlkXCI6NTUsXCJjb21taXNzaW9uXCI6XCIwLjU2XCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MjMsMTAxNDoxOSwxMDA1OjE3LDEwMTA6MTVcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo4MjAwXCJ9LHtcImlkXCI6NTYsXCJjb21taXNzaW9uXCI6XCIwLjM1XCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MjcsMTAwNToyOSwxMDA5OjE3LDEwMDM6MThcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo4ODAwXCJ9LHtcImlkXCI6NTcsXCJjb21taXNzaW9uXCI6MC42NyxcImNvbmRpdGlvblwiOlwiMTAwNzoyMSwxMDA4OjE3LDEwMDI6MTYsMTAwOToyNVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjk0MDBcIn0se1wiaWRcIjo1OCxcImNvbW1pc3Npb25cIjowLjMyLFwiY29uZGl0aW9uXCI6XCIxMDA2OjIwLDEwMDg6MjUsMTAwNToyNCwxMDA3OjE5XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTAwMDBcIn0se1wiaWRcIjo1OSxcImNvbW1pc3Npb25cIjowLjc5LFwiY29uZGl0aW9uXCI6XCIxMDEyOjI1LDEwMDk6MzAsMTAxMzoxNiwxMDA4OjE1XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTA2MDBcIn0se1wiaWRcIjo2MCxcImNvbW1pc3Npb25cIjowLjY5LFwiY29uZGl0aW9uXCI6XCIxMDE1OjI2LDEwMTI6MjcsMTAxMDozMSwxMDAxOjIzXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTEyMDBcIn0se1wiaWRcIjo2MSxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDE1OjEyLDEwMDY6MjUsMTAxMToxNSwxMDAyOjE3XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTE4MDBcIn0se1wiaWRcIjo2MixcImNvbW1pc3Npb25cIjowLjQ0LFwiY29uZGl0aW9uXCI6XCIxMDE1OjIxLDEwMDc6MTUsMTAxMToxOCwxMDA2OjI2XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTI0MDBcIn0se1wiaWRcIjo2MyxcImNvbW1pc3Npb25cIjowLjAxLFwiY29uZGl0aW9uXCI6XCIxMDEwOjE4LDEwMDU6MTYsMTAwOToxMywxMDAzOjI3XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTMwMDBcIn0se1wiaWRcIjo2NCxcImNvbW1pc3Npb25cIjowLjI3LFwiY29uZGl0aW9uXCI6XCIxMDA3OjE3LDEwMDY6MTAsMTAwNToyOSwxMDA0OjI1XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTM2MDBcIn0se1wiaWRcIjo2NSxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMDM6MzAsMTAxNDoyMCwxMDA1OjE1XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTQyMDBcIn0se1wiaWRcIjo2NixcImNvbW1pc3Npb25cIjowLjczLFwiY29uZGl0aW9uXCI6XCIxMDA0OjI1LDEwMDg6MjUsMTAwMjozNCwxMDEyOjE0XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTQ4MDBcIn0se1wiaWRcIjo2NyxcImNvbW1pc3Npb25cIjowLjEzLFwiY29uZGl0aW9uXCI6XCIxMDAxOjM2LDEwMTI6MjAsMTAxMToyMCwxMDAzOjIwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTU0MDBcIn0se1wiaWRcIjo2OCxcImNvbW1pc3Npb25cIjowLjY5LFwiY29uZGl0aW9uXCI6XCIxMDEzOjI0LDEwMDg6MjMsMTAwNjoxNiwxMDA3OjE3XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTYwMDBcIn0se1wiaWRcIjo2OSxcImNvbW1pc3Npb25cIjowLjM3LFwiY29uZGl0aW9uXCI6XCIxMDE1OjMwLDEwMDQ6MjksMTAxMzoxNywxMDA5OjEwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTY2MDBcIn0se1wiaWRcIjo3MCxcImNvbW1pc3Npb25cIjowLjcxLFwiY29uZGl0aW9uXCI6XCIxMDEwOjIzLDEwMDQ6MzEsMTAxMToxNywxMDEyOjExXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTcyMDBcIn0se1wiaWRcIjo3MSxcImNvbW1pc3Npb25cIjowLjI5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjExLDEwMDI6MjYsMTAwMzoyOCwxMDE1OjEzXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTc4MDBcIn0se1wiaWRcIjo3MixcImNvbW1pc3Npb25cIjowLjMxLFwiY29uZGl0aW9uXCI6XCIxMDA1OjI1LDEwMDI6MzgsMTAxMjoxOSwxMDEwOjE0XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTg0MDBcIn0se1wiaWRcIjo3MyxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDEyOjM0LDEwMDY6MjIsMTAwMzoyNywxMDA0OjIwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTkwMDBcIn0se1wiaWRcIjo3NCxcImNvbW1pc3Npb25cIjowLjI2LFwiY29uZGl0aW9uXCI6XCIxMDAzOjIwLDEwMTI6MTgsMTAwMjozMCwxMDAxOjIwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTk2MDBcIn0se1wiaWRcIjo3NSxcImNvbW1pc3Npb25cIjowLjE4LFwiY29uZGl0aW9uXCI6XCIxMDA2OjMxLDEwMTQ6MzAsMTAwODoxMiwxMDAyOjI1XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MjAyMDBcIn0se1wiaWRcIjo3NixcImNvbW1pc3Npb25cIjowLjUxLFwiY29uZGl0aW9uXCI6XCIxMDA3OjIxLDEwMTI6MjAsMTAwNDoxMSwxMDE0OjIwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MjA4MDBcIn0se1wiaWRcIjo3NyxcImNvbW1pc3Npb25cIjowLjIxLFwiY29uZGl0aW9uXCI6XCIxMDA4OjE1LDEwMDk6MTYsMTAxMjoyNCwxMDA3OjMwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MjE0MDBcIn0se1wiaWRcIjo3OCxcImNvbW1pc3Npb25cIjowLjczLFwiY29uZGl0aW9uXCI6XCIxMDE1OjE2LDEwMTI6MTYsMTAwNjoyMCwxMDA4OjIyXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MjIwMDBcIn0se1wiaWRcIjo3OSxcImNvbW1pc3Npb25cIjowLjY1LFwiY29uZGl0aW9uXCI6XCIxMDA2OjI2LDEwMDQ6MTgsMTAwNzoxMiwxMDExOjI3XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MjI2MDBcIn0se1wiaWRcIjo4MCxcImNvbW1pc3Npb25cIjowLjM5LFwiY29uZGl0aW9uXCI6XCIxMDA5OjE1LDEwMDM6MTYsMTAwNDoxOSwxMDA3OjI0XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MjMyMDBcIn0se1wiaWRcIjo4MSxcImNvbW1pc3Npb25cIjowLjE0LFwiY29uZGl0aW9uXCI6XCIxMDEyOjIwLDEwMTU6MjgsMTAwMjoyNCwxMDAzOjM4XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MjM4MDBcIn0se1wiaWRcIjo4MixcImNvbW1pc3Npb25cIjowLjIsXCJjb25kaXRpb25cIjpcIjEwMDU6MTIsMTAxMToxOSwxMDA5OjE4LDEwMDI6MTRcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyNDQwMFwifSx7XCJpZFwiOjgzLFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMTA6MTksMTAwMzozOCwxMDA3OjIyLDEwMTU6MjBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyNTAwMFwifSx7XCJpZFwiOjg0LFwiY29tbWlzc2lvblwiOjAuNjIsXCJjb25kaXRpb25cIjpcIjEwMDU6MjksMTAxNDoyNiwxMDAyOjE4LDEwMDc6MzhcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyNTYwMFwifSx7XCJpZFwiOjg1LFwiY29tbWlzc2lvblwiOjAuMzcsXCJjb25kaXRpb25cIjpcIjEwMTE6MjAsMTAwMToxNywxMDEyOjEyLDEwMDQ6MzJcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyNjIwMFwifSx7XCJpZFwiOjg2LFwiY29tbWlzc2lvblwiOjAuNTksXCJjb25kaXRpb25cIjpcIjEwMDk6MjUsMTAxMToyMCwxMDA2OjE0LDEwMTU6MjFcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyNjgwMFwifSx7XCJpZFwiOjg3LFwiY29tbWlzc2lvblwiOlwiMC4zMVwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjI2LDEwMDU6MTksMTAxMzoyMCwxMDE0OjI5XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6Mjc0MDBcIn0se1wiaWRcIjo4OCxcImNvbW1pc3Npb25cIjpcIjAuNDhcIixcImNvbmRpdGlvblwiOlwiMTAwODozNywxMDExOjI0LDEwMTU6MTIsMTAxNDoxMVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjI4MDAwXCJ9LHtcImlkXCI6ODksXCJjb21taXNzaW9uXCI6XCIwLjIyXCIsXCJjb25kaXRpb25cIjpcIjEwMDI6MTcsMTAwMzoyOCwxMDA1OjIyLDEwMTA6MzFcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyODYwMFwifSx7XCJpZFwiOjkwLFwiY29tbWlzc2lvblwiOjAuMzIsXCJjb25kaXRpb25cIjpcIjEwMDI6MzksMTAxMzoyOCwxMDA3OjI1LDEwMDE6MzNcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyOTIwMFwifSx7XCJpZFwiOjkxLFwiY29tbWlzc2lvblwiOjAuMTksXCJjb25kaXRpb25cIjpcIjEwMDg6MTUsMTAxMzoyMCwxMDE0OjEwLDEwMDc6MjZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyOTgwMFwifSx7XCJpZFwiOjkyLFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDQ6MzgsMTAxMToxMywxMDA4OjE1LDEwMDc6MjlcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTozMDQwMFwifSx7XCJpZFwiOjkzLFwiY29tbWlzc2lvblwiOjAuMzQsXCJjb25kaXRpb25cIjpcIjEwMTM6MTIsMTAwMTozOSwxMDA2OjM4LDEwMDg6MzFcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTozMTAwMFwifSx7XCJpZFwiOjk0LFwiY29tbWlzc2lvblwiOjAuMjIsXCJjb25kaXRpb25cIjpcIjEwMDI6MzYsMTAxNDoyNywxMDEzOjE2LDEwMDU6MzFcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTozMTYwMFwifSx7XCJpZFwiOjk1LFwiY29tbWlzc2lvblwiOjAuMTUsXCJjb25kaXRpb25cIjpcIjEwMDU6MjYsMTAxMTozNCwxMDE1OjM0LDEwMDg6MTZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTozMjIwMFwifSx7XCJpZFwiOjk2LFwiY29tbWlzc2lvblwiOlwiMC40OVwiLFwiY29uZGl0aW9uXCI6XCIxMDAzOjI0LDEwMDE6MzQsMTAwNzoyOCwxMDA1OjMwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MzI4MDBcIn0se1wiaWRcIjo5NyxcImNvbW1pc3Npb25cIjpcIjAuNlwiLFwiY29uZGl0aW9uXCI6XCIxMDEzOjMyLDEwMDk6MzMsMTAwNjozMCwxMDExOjQwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MzM0MDBcIn0se1wiaWRcIjo5OCxcImNvbW1pc3Npb25cIjpcIjAuMzVcIixcImNvbmRpdGlvblwiOlwiMTAxNDo0MCwxMDA5OjQzLDEwMTU6MzMsMTAxMjo0NVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjM0MDAwXCJ9LHtcImlkXCI6OTksXCJjb21taXNzaW9uXCI6XCIwLjQ0XCIsXCJjb25kaXRpb25cIjpcIjEwMTE6MzksMTAwODozNywxMDA5OjMwLDEwMTM6NDJcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTozNDYwMFwifSx7XCJpZFwiOjEwMCxcImNvbW1pc3Npb25cIjpcIjAuNDlcIixcImNvbmRpdGlvblwiOlwiMTAxMjo0MCwxMDEwOjMzLDEwMTM6MzAsMTAxMTo0MFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjM1MjAwXCJ9XSxcImxhbmdcIjpbXSxcImxhbmRMZXZlbFwiOlt7XCJpZFwiOjEsXCJyZXdhcmRcIjpcIjEwMDI6MFwiLFwiY29zdFwiOlwiMTAwMjowXCIsXCJnYWluXCI6bnVsbCxcInByb2JhYmlsaXR5XCI6MC4xLFwiZ2V0X2RpYW1vbmRcIjoxfSx7XCJpZFwiOjIsXCJyZXdhcmRcIjpcIjEwMDI6MTUwMFwiLFwiY29zdFwiOlwiMTAwMjo1MDAwXCIsXCJnYWluXCI6MC4xLFwicHJvYmFiaWxpdHlcIjowLjEzLFwiZ2V0X2RpYW1vbmRcIjoxfSx7XCJpZFwiOjMsXCJyZXdhcmRcIjpcIjEwMDI6MjAwMFwiLFwiY29zdFwiOlwiMTAwMjoxMDAwMFwiLFwiZ2FpblwiOjAuMjUsXCJwcm9iYWJpbGl0eVwiOjAuMjUsXCJnZXRfZGlhbW9uZFwiOjJ9LHtcImlkXCI6NCxcInJld2FyZFwiOlwiMTAwMjoyNTAwXCIsXCJjb3N0XCI6XCIxMDAyOjIwMDAwXCIsXCJnYWluXCI6MC40LFwicHJvYmFiaWxpdHlcIjowLjM4LFwiZ2V0X2RpYW1vbmRcIjozfSx7XCJpZFwiOjUsXCJyZXdhcmRcIjpcIjEwMDI6MzAwMFwiLFwiY29zdFwiOlwiMTAwMjo1MDAwMFwiLFwiZ2FpblwiOjAuNTUsXCJwcm9iYWJpbGl0eVwiOjAuNSxcImdldF9kaWFtb25kXCI6NX1dLFwiZmVlZFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTk5N0NcdTVFNzJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDFfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MSxcImNvc3RcIjpcIjEwMDI6MzBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU1NzVBXHU2NzlDXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAyX2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjIsXCJjb3N0XCI6XCIxMDAyOjUwXCIsXCJkZXNjXCI6XCJcdTUzRUZcdTU4OUVcdTUyQTBcdTVCQTBcdTcyNjkmXHU3MEI5XHU0RjUzXHU1MjlCXCJ9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1NzA2Qlx1ODE3RlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwM19mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjo1LFwiY29zdFwiOlwiMTAwMjoxMDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA0LFwibmFtZVwiOlwiXHU3MjVCXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA0X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjUwLFwiY29zdFwiOlwiMTAwMjo5MDBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA1LFwibmFtZVwiOlwiXHU3MzJBXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA1X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjIwLFwiY29zdFwiOlwiMTAwMjo0NjBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU5RTIxXHU4MDg5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA2X2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjEwLFwiY29zdFwiOlwiMTAwMjoyNzBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn1dLFwiY3VycmVuY3lcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU5NEJCXHU3N0YzXCIsXCJpY29uXCI6XCJtYWluX3NjZW5lL2ltZ19kaWFtb25kLnBuZ1wifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTkxRDFcdTVFMDFcIixcImljb25cIjpcIm1haW5fc2NlbmUvaW1nX2NvaW4ucG5nXCJ9XSxcImNvbmZpZ1wiOlt7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVzXCIsXCJ2YWx1ZVwiOjMwfSx7XCJpZFwiOlwiYWxsX3NwZWVkX3VwX3RpbWVcIixcInZhbHVlXCI6NjAwfSx7XCJpZFwiOlwidW5sb2NrX2xhbmRfY29zdFwiLFwidmFsdWVcIjpcIjEwMDI6MCwxMDAyOjAsMTAwMjo1MDAwLDEwMDI6MTAwMDAsMTAwMjoyMDAwMCwxMDAyOjMwMDAwLDEwMDI6NDAwMDAsMTAwMjo1MDAwMCwxMDAyOjYwMDAwXCJ9LHtcImlkXCI6XCJnb2xkRGVmYXVsdFwiLFwidmFsdWVcIjpcIjEwMDI6MTAwXCJ9LHtcImlkXCI6XCJkaWFtb25kRGVmYXVsdFwiLFwidmFsdWVcIjpcIjEwMDE6NTBcIn0se1wiaWRcIjpcIkFEVGltZXNMaW1pdFwiLFwidmFsdWVcIjo1MH0se1wiaWRcIjpcIkFEU3BlZWRVcHRpbWVzXCIsXCJ2YWx1ZVwiOjZ9LHtcImlkXCI6XCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIsXCJ2YWx1ZVwiOlwiMTAwMjoxMDAwMFwifSx7XCJpZFwiOlwidml0YWxpdHlMaW1pdFwiLFwidmFsdWVcIjoxMH0se1wiaWRcIjpcIkluaXRpYWxfcGh5c2ljYWxfc3RyZW5ndGhcIixcInZhbHVlXCI6MTB9LHtcImlkXCI6XCJsYW5kQW1vdW50TWF4XCIsXCJ2YWx1ZVwiOjl9LHtcImlkXCI6XCJwZXREZWZhdWx0Vml0YWxpdHlcIixcInZhbHVlXCI6MTAwfSx7XCJpZFwiOlwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCIsXCJ2YWx1ZVwiOjM2MDB9LHtcImlkXCI6XCJWaWRlb3Jld2FyZHNcIixcInZhbHVlXCI6XCIxMDAxOjQ1MDo2MDAsMTAwMToyNTA6MzUwLDEwMDE6MjAwOjMwMCwxMDAxOjEwMDoyMDAsMTAwMTo4MDoxMDBcIn0se1wiaWRcIjpcIndpdGhkcmF3YWxcIixcInZhbHVlXCI6XCIxMDAxOjEwMDAwOjFcIn0se1wiaWRcIjpcIkludml0YXRpb25fcmV3YXJkc1wiLFwidmFsdWVcIjpcIjEwMDE6NTAwMFwifSx7XCJpZFwiOlwid2l0aGRyYXdhbF90aW1lc1wiLFwidmFsdWVcIjpcIjAuMzoxOjA6MCw1OjE6NjozMCwxMDoxOjE1OjYwLDUwOjE6NTA6ODAsMTAwOjE6MTAwOjkwLDIwMDowOjIwMDo5N1wifV19OyIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29scyB7XHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NUI1N1x1N0IyNlxyXG4gICAgICogQHBhcmFtIHN0ciBcdTg5ODFcdTg5RTNcdTY3OTBcdTc2ODRcdTVCNTdcdTdCMjZcclxuICAgICAqIEBwYXJhbSBmb3JtYXQgXHU1MDVBXHU0RTNBXHU1M0MyXHU4MDAzXHU3Njg0XHU1QjU3XHU3QjI2XHU5RUQ4XHU4QkE0XHU0RTNBLFxyXG4gICAgICogQHJldHVybnMgXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1QjU3XHU3QjI2XHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVN0cmluZyhzdHI6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcgPSBcIixcIikge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHN0ci5zcGxpdChmb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3OUQyXHU4RjZDXHU2MzYyXHU2MjEwMDA6MDA6MDBcclxuICAgICAqIEBwYXJhbSBzIFx1OEY2Q1x1NjM2Mlx1NjVGNlx1OTVGNFx1NzY4NFx1NzlEMlxyXG4gICAgICogQHJldHVybnMgMDA6MDA6MDBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZvcm1hdFNlY29uZHMgPSAocykgPT4gbmV3IERhdGUocyAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDExLCA4KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEY2Q1x1NjM2Mlx1OTFEMVx1NUUwMVx1MzAwMlx1NjgzQ1x1NUYwRlx1NEUzQVx1NEUyNFx1NEY0RFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9ybWF0TW9uZXkobnVtOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkubWF0Y2goL15cXGQrKD86XFwuXFxkezAsMn0pPy8pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuL1RhYmxlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb25maWdCYXNlLFxyXG4gICAgQ3VycmVuY3lCYXNlLFxyXG4gICAgRmVlZEJhc2UsXHJcbiAgICBMYW5kTGV2ZWxCYXNlLFxyXG4gICAgT3JkZXJCYXNlLFxyXG4gICAgUGV0QmFzZSxcclxuICAgIFBsYW50QmFzZSxcclxuICAgIFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgIFNpZ25JbkJhc2UsXHJcbiAgICBUYXNrQmFzZSxcclxufSBmcm9tIFwiLi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcIi4vVG9vbHNcIjtcclxuXHJcbmNvbnN0IFRhYmxlUHJvcGVydHlFdmVudCA9IHtcclxuICAgIHBldChkOiB0eXBlb2YgVGFibGUucGV0WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQZXRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uIHx8IGBwZXRfZmVlZC8ke2QuaWR9X2RvZy5wbmdgLFxyXG4gICAgICAgICAgICB2aXRhbGl0eV9tYXg6IGQudml0YWxpdHlfbWF4LFxyXG4gICAgICAgICAgICB2aXRhbGl0eV9jb25zdW1lOiBkLnZpdGFsaXR5X2NvbnN1bWUsXHJcbiAgICAgICAgICAgIGNvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLmNvc3QpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHNlbnNpdGl2ZTogZC5zZW5zaXRpdmUsXHJcbiAgICAgICAgICAgIGFiaWxpdHk6IGQuYWJpbGl0eSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OTk3Mlx1NjU5OVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBmZWVkKGQ6IHR5cGVvZiBUYWJsZS5mZWVkWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxGZWVkQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbiB8fCBgcGV0X2ZlZWQvJHtkLmlkfV9mZWVkLnBuZ2AsXHJcbiAgICAgICAgICAgIHZpdGFsaXR5OiBkLnZpdGFsaXR5LFxyXG4gICAgICAgICAgICBjb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5jb3N0KSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU4QkEyXHU1MzU1XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgb3JkZXIoZDogdHlwZW9mIFRhYmxlLm9yZGVyWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxPcmRlckJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgY29tbWlzc2lvbjogTnVtYmVyKGQuY29tbWlzc2lvbiksXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbjogVG9vbHMucGFyc2VTdHJpbmcoZC5jb25kaXRpb24pLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBUb29scy5wYXJzZVN0cmluZyhlLCBcIjpcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW50OiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoTnVtYmVyKHZbMF0pKSxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogTnVtYmVyKHZbMV0pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGV4dHJhUmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5leHRyYV9yZXdhcmQpLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU2MjEwXHU3MTlGXHU2OTBEXHU3MjY5XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcGxhbnQoZDogdHlwZW9mIFRhYmxlLnBsYW50WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQbGFudEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24sXHJcbiAgICAgICAgICAgIG1hdHVyZUljb246IGBwbGFudF9pY29uLyR7ZC5pY29uLm1hdGNoKC9cXGQrL2cpWzBdfV9tYXR1cmUucG5nYCxcclxuICAgICAgICAgICAgZ3Jvd2luZ0ljb246IGBwbGFudF9pY29uLyR7ZC5pY29uLm1hdGNoKC9cXGQrL2cpWzBdfV9ncm93aW5nLnBuZ2AsXHJcbiAgICAgICAgICAgIGdhaW46IFRvb2xzLnBhcnNlU3RyaW5nKGQuZ2FpbikubWFwKChlKSA9PiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZSkpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHNlZWRfcHJpY2U6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnNlZWRfcHJpY2UpLFxyXG4gICAgICAgICAgICBoYXJ2ZXN0OiBOdW1iZXIoVG9vbHMucGFyc2VTdHJpbmcoZC5oYXJ2ZXN0LCBcIn5cIilbMV0pLFxyXG4gICAgICAgICAgICBtYXR1cmVfdGltZTogTnVtYmVyKGQubWF0dXJlX3RpbWUpLFxyXG4gICAgICAgICAgICB1bmxvY2tfY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudW5sb2NrX2Nvc3QpLFxyXG4gICAgICAgICAgICB1bmxvY2tfcmV3YXJkOiBUb29scy5wYXJzZVN0cmluZyhkLnVubG9ja19yZXdhcmQpLm1hcCgoZSkgPT4gZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGUpKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OEQyN1x1NUUwMVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbmN5KGQ6IHR5cGVvZiBUYWJsZS5jdXJyZW5jeVswXSkge1xyXG4gICAgICAgIHJldHVybiA8Q3VycmVuY3lCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbixcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU1NzFGXHU1NzMwXHU3QjQ5XHU3RUE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGxhbmRMZXZlbChkOiB0eXBlb2YgVGFibGUubGFuZExldmVsWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxMYW5kTGV2ZWxCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIHJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQucmV3YXJkKSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGdhaW46IGQuZ2FpbixcclxuICAgICAgICAgICAgcHJvYmFiaWxpdHk6IGQucHJvYmFiaWxpdHksXHJcbiAgICAgICAgICAgIGdldERpYW1vbmQ6IGQuZ2V0X2RpYW1vbmQsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uZmlnKGQ6IHR5cGVvZiBUYWJsZS5jb25maWdbMF0pIHtcclxuICAgICAgICBzd2l0Y2ggKGQuaWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcImFsbF9zcGVlZF91cF90aW1lc1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiYWxsX3NwZWVkX3VwX3RpbWVzXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYWxsX3NwZWVkX3VwX3RpbWVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcImFsbF9zcGVlZF91cF90aW1lXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidW5sb2NrX2xhbmRfY29zdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ1bmxvY2tfbGFuZF9jb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFRvb2xzLnBhcnNlU3RyaW5nKGQudmFsdWUgYXMgc3RyaW5nKS5tYXAoKGQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJld2FyZEN1cnJlbmN5QmFzZShkKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImdvbGREZWZhdWx0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImdvbGREZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykuY291bnQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlhbW9uZERlZmF1bHRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGlhbW9uZERlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKS5jb3VudCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJBRFRpbWVzTGltaXRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcIkFEVGltZXNMaW1pdFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiQURTcGVlZFVwdGltZXNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcIkFEU3BlZWRVcHRpbWVzXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInZpdGFsaXR5QnV5Q29zdEdvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKS5jb3VudCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2aXRhbGl0eUxpbWl0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJ2aXRhbGl0eUxpbWl0XCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJJbml0aWFsX3BoeXNpY2FsX3N0cmVuZ3RoXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJJbml0aWFsX3BoeXNpY2FsX3N0cmVuZ3RoXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kQW1vdW50TWF4XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJsYW5kQW1vdW50TWF4XCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXREZWZhdWx0Vml0YWxpdHlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcInBldERlZmF1bHRWaXRhbGl0eVwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJwZXREaWdlc3RJbnRlcnZhbFRpbWVcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcIlZpZGVvcmV3YXJkc1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiVmlkZW9yZXdhcmRzXCIsIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aXRoZHJhd2FsXCI6IC8vXHU2M0QwXHU3M0IwXHU2QkQ0XHU0RjhCXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJ3aXRoZHJhd2FsXCIsIHZhbHVlOiBUb29scy5wYXJzZVN0cmluZyhkLnZhbHVlIGFzIHN0cmluZywgXCI6XCIpIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJJbnZpdGF0aW9uX3Jld2FyZHNcIjogLy9cdTkwODBcdThCRjdcdTU5N0RcdTUzQ0JcdTU5NTZcdTUyQjFcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiSW52aXRhdGlvbl9yZXdhcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZyksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwid2l0aGRyYXdhbF90aW1lc1wiOiAvL1x1NjNEMFx1NzNCMFx1NkIyMVx1NjU3MFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ3aXRoZHJhd2FsX3RpbWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFRvb2xzLnBhcnNlU3RyaW5nKGQudmFsdWUgYXMgc3RyaW5nKS5tYXAoKHY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gVG9vbHMucGFyc2VTdHJpbmcodiwgXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IE51bWJlcih2WzBdKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXM6IE51bWJlcih2WzFdKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52aXRlQW1vdW50OiBOdW1iZXIodlsyXSkgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyTHY6IE51bWJlcih2WzNdKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU5NTAxXHU3QjdFXHU1MjMwXHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZFxyXG4gICAgICovXHJcbiAgICBzaWduSW4oZDogdHlwZW9mIFRhYmxlLnNpZ25JblswXSkge1xyXG4gICAgICAgIHJldHVybiA8U2lnbkluQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBkYXlzOiBkLmRheXMsXHJcbiAgICAgICAgICAgIHJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQucmV3YXJkKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NEVGQlx1NTJBMVx1ODg2OFxyXG4gICAgICovXHJcbiAgICB0YXNrKGQ6IHR5cGVvZiBUYWJsZS50YXNrWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxUYXNrQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICB0aW1lczogZC50aW1lcyxcclxuICAgICAgICAgICAgcmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5yZXdhcmQpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHRpdGxlOiBkLnRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYGdhbWUvaW1nX2Jhcm0ucG5nYCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcclxuICogQHBhcmFtIHN0ciBcdTg5RTNcdTY3OTBcdTc2ODRcdThEMjdcdTVFMDFcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQgaWQ6bnVtXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXdhcmRDdXJyZW5jeUJhc2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBsaXN0ID0gVG9vbHMucGFyc2VTdHJpbmcoc3RyLCBcIjpcIik7XHJcblxyXG4gICAgcmV0dXJuIDxSZXdhcmRDdXJyZW5jeUJhc2U+e1xyXG4gICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KE51bWJlcihsaXN0WzBdKSksXHJcbiAgICAgICAgY291bnQ6IE51bWJlcihsaXN0WzFdKSxcclxuICAgIH07XHJcbn1cclxuXHJcbnR5cGUgdHlwZVRhYmxlID0gdHlwZW9mIFRhYmxlUHJvcGVydHlFdmVudDtcclxuXHJcbmNsYXNzIFRhYmxlQ29udHJvbCB7XHJcbiAgICBwcml2YXRlIHRhYmxlQ2FjaGU6IE1hcDxrZXlvZiB0eXBlVGFibGUsIFJldHVyblR5cGU8dHlwZVRhYmxlW2tleW9mIHR5cGVUYWJsZV0+W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU3Njg0XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0ga2V5IFx1ODg2OFx1NzY4NGtleVxyXG4gICAgICovXHJcbiAgICB0YWJsZTxUIGV4dGVuZHMga2V5b2YgdHlwZVRhYmxlPihcclxuICAgICAgICBrZXk6IFRcclxuICAgICk6IHtcclxuICAgICAgICBsaXN0OiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT5bXTtcclxuICAgICAgICBnZXQ6IHsgKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT4gfTtcclxuICAgIH0ge1xyXG4gICAgICAgIC8vXHU4QkZCXHU1M0Q2XHU3RUM0XHU2MjEwXHJcbiAgICAgICAgaWYgKHRoaXMudGFibGVDYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJsZUJhY2sodGhpcy50YWJsZUNhY2hlLmdldChrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTg5RTNcdTY3OTBcdTY1NzBcdTYzNkVcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIFRhYmxlW2tleV0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goVGFibGVQcm9wZXJ0eUV2ZW50W2tleV0oZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHU3RjEzXHU1QjU4XHU4OUUzXHU2NzkwXHU4ODY4XHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgdGhpcy50YWJsZUNhY2hlLnNldChrZXksIGxpc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayhsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUyOFx1NEU4RXRhYmxlXHU2NUI5XHU2Q0Q1XHU4RkQ0XHU1NkRFXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGXHU1NDhDXHU2REZCXHU1MkEwXHU4M0I3XHU1M0Q2XHU1MzU1XHU0RTJBXHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTg5RTNcdTY3OTBcdTg4NjhcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zIFx1OEZENFx1NTZERVx1NjMwN1x1NUI5QVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRhYmxlQmFjayhsaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGlzdDogbGlzdCxcclxuICAgICAgICAgICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGxpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODg2OFx1NjgzQ1x1ODlFM1x1Njc5MFx1NURFNVx1NTE3N1xyXG4gKi9cclxuY29uc3QgVGFibGVBbmFseXplID0gbmV3IFRhYmxlQ29udHJvbCgpO1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUFuYWx5emU7XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBSZWREb3RUeXBlIHtcclxuICAgIHRhc2sgPSBcInRhc2tcIixcclxuICAgIGZyaWVuZCA9IFwiZnJpZW5kXCIsXHJcbiAgICBtYWlsID0gXCJtYWlsXCIsXHJcbiAgICBhbnlEb29yID0gXCJhbnlEb29yXCIsXHJcbiAgICBvcmRlciA9IFwib3JkZXJcIixcclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkRG90Q29tcG9uZW50IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWREb3RDb21wb25lbnQgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnJlZERvdFR5cGUsIHRpcHM6XCJcdTVFMDNcdTVDMTRcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpFZGl0T3B0aW9uLCBvcHRpb246XCJ0YXNrLGZyaWVuZCxtYWlsLGFueURvb3Isb3JkZXJcIn0qL1xyXG4gICAgcmVkRG90VHlwZTogc3RyaW5nO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMub3duZXIgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBub2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBub2RlLmFuY2hvclggPSAwLjU7XHJcbiAgICAgICAgbm9kZS5hbmNob3JZID0gMC41O1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnVwZGF0ZV9yZWRfZG90KVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVSZWREb3QodHlwZTogc3RyaW5nLCBzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVkRG90VHlwZSA9PSB0eXBlKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5vd25lciBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNjYWxlKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUueSAtPSA0MDtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc2NhbGVYOiAxLCBzY2FsZVk6IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB5OiBub2RlLnkgKyA0MCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gc2hvdztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLnZpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrSW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gc2hvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgVGFza0Jhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBSZWREb3RUeXBlIH0gZnJvbSBcInNyYy9jb21wb25lbnRzL1JlZERvdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFza0RhdGFPYmoge1xyXG4gICAgLyoqIFx1NEVGQlx1NTJBMWlkICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NUI4Q1x1NjIxMFx1NkIyMVx1NjU3MCAqL1xyXG4gICAgdGltZXM6IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk4ODZcdTUzRDZcdTU5NTZcdTUyQjEgMFx1NjcyQVx1OTg4Nlx1NTNENiAxXHU1REYyXHU5ODg2XHU1M0Q2ICovXHJcbiAgICByZWNlaXZlOiBudW1iZXI7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExXHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBUYXNrQmFzZTtcclxufVxyXG4vKipcclxuICogXHU0RUZCXHU1MkExXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBUYXNrU2VydmljZSB7XHJcbiAgICBsaXN0OiBUYXNrRGF0YU9ialtdID0gW107XHJcblxyXG4gICAgaW5pdChkOiBOZXRJbml0W1widGFza3NcIl0pIHtcclxuICAgICAgICBkLmZvckVhY2goKGUpID0+XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGltZXM6IGUudGltZXMsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlOiBlLnJlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChlLmlkKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU0RUZCXHU1MkExXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldFRhc2soaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVkRG90KCk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFt4XS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlZERvdCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdEEgPSB0aGlzLmdldFRhc2soYS5pZCksXHJcbiAgICAgICAgICAgICAgICB0QiA9IHRoaXMuZ2V0VGFzayhiLmlkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBhLmlkICtcclxuICAgICAgICAgICAgICAgICh0QT8ucmVjZWl2ZSA/IDEwMDAgOiAxKSArXHJcbiAgICAgICAgICAgICAgICAodEE/LnRpbWVzID49IGEuYmFzZT8udGltZXMgPyAxMDAgOiAxMDAwKSAtXHJcbiAgICAgICAgICAgICAgICAoYi5pZCArICh0Qj8ucmVjZWl2ZSA/IDEwMDAgOiAxKSArICh0Qj8udGltZXMgPj0gYi5iYXNlPy50aW1lcyA/IDEwMCA6IDEwMDApKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU0RUZCXHU1MkExXHU2REZCXHU1MkEwXHU2QjIxXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIHRhc2tBZGRUaW1lcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSB0aGlzLmdldFRhc2soaWQpO1xyXG4gICAgICAgIGlmICghdGFzaykge1xyXG4gICAgICAgICAgICAvL1x1OUVEOFx1OEJBNFx1NEUwRFx1NTIxQlx1NUVGQVx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICAvLyB0YXNrID0geyBpZDogaWQsIHRpbWVzOiAwLCByZWNlaXZlOiAwLCBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChpZCkgfTtcclxuICAgICAgICAgICAgLy8gdGhpcy5saXN0LnB1c2godGFzayk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhc2sudGltZXMrKztcclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfdGFzayk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZWREb3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1N0VBMlx1NzBCOVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVSZWREb3QoKSB7XHJcbiAgICAgICAgbGV0IGhhc1Jld2FyZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICF0aGlzLmxpc3RbeF0ucmVjZWl2ZSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W3hdLnRpbWVzID49IFRhYmxlQW5hbHl6ZS50YWJsZShcInRhc2tcIikuZ2V0KHRoaXMubGlzdFt4XS5pZCk/LnRpbWVzXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaGFzUmV3YXJkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9yZWRfZG90LCBbUmVkRG90VHlwZS50YXNrLCBoYXNSZXdhcmRdKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFza1NlcnZpY2UoKTtcclxuIiwgImltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4uL2NvcmUvSW5zdGFuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcclxuICovXHJcbmNsYXNzIFVzZXJJbmZvIHtcclxuICAgIC8qKiBcdThCQTJcdTUzNTVcdTdCNDlcdTdFQTcgXHU1REYyXHU1QjhDXHU2MjEwICovXHJcbiAgICBvcmRlckxldmVsOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NTQwRFx1NzlGMCAqL1xyXG4gICAgbmlja25hbWU6IHN0cmluZyA9IFwibmFtZVwiO1xyXG4gICAgLy8gLyoqIFx1NzUyOFx1NjIzN2lkICovXHJcbiAgICAvLyB1aWQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1NTJGXHU0RTAwXHU2ODA3XHU4QkM2ICovXHJcbiAgICBrZXk6IHN0cmluZyA9IG51bGw7XHJcbiAgICAvKiogXHU3NTI4XHU1NDBEXHU1OTM0XHU1MENGICovXHJcbiAgICBhdmF0YXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogXHU5NEJCXHU3N0YzICovXHJcbiAgICBkaWFtb25kOiBudW1iZXIgPSA5OTk7XHJcbiAgICAvKiogXHU5MUQxXHU1RTAxICovXHJcbiAgICBnb2xkOiBudW1iZXIgPSA5OTk7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1M0VGXHU0RUU1XHU3NzBCXHU1RTdGXHU1NDRBXHU3Njg0XHU2QjIxXHU2NTcwICovXHJcbiAgICBhZHZlcnRpc2VUaW1lczogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTczQTlcdTVCQjZcdTRGNjlcdTYyMzRcdTc2ODRcdTVCQTBcdTcyNjkgKi9cclxuICAgIHdhcmVQZXRJZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NTI2OVx1NEY1OVx1NEY1M1x1NTI5QiAqL1xyXG4gICAgcGV0Vml0YWxpdHk6IG51bWJlcjtcclxuICAgIC8qKiBcdTZEODhcdTUzMTZcdTk4REZcdTcyNjlcdTUwMTJcdThCQTFcdTY1RjYgKi9cclxuICAgIGRpZ2VzdENvdW50RG93bjogbnVtYmVyO1xyXG4gICAgLyoqIFx1OEZERVx1N0VFRFx1N0I3RVx1NTIzMFx1NTkyOVx1NjU3MCAqL1xyXG4gICAgc2lnbkluRGF5czogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTRFMEFcdTRFMDBcdTZCMjFcdTk4ODZcdTUzRDZcdTc2ODRcdTdCN0VcdTUyMzBcdTU5NTZcdTUyQjFpZCAqL1xyXG4gICAgc2lnbkluSWQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1REYyXHU3RUNGXHU1MkEwXHU5MDFGXHU2QjIxXHU2NTcwICovXHJcbiAgICBzcGVlZFVwVGltZXM6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU0RjUzXHU1MjlCICovXHJcbiAgICB2aXRhbGl0eTogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUxNTFcdTYzNjJcdTZCRDRcdTRGOEIgKi9cclxuICAgIHByb3BvcnRpb246IG51bWJlciA9IDAuMDAwMTtcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTgwMDUgKi9cclxuICAgIGludml0ZVBlb3BsZTogc3RyaW5nO1xyXG4gICAgLyoqIFx1N0IyQ1x1NEUwMFx1NkIyMVx1NzY3Qlx1NUY1NSAxMSBcdTg4NjhcdTc5M0EgXHU2MjREXHU4ODY4XHU3OTNBXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHU1QjhDXHU1MTY4XHU3RUQzXHU2NzVGICAqL1xyXG4gICAgaXNGaXJzdFRpbWU6IG51bWJlcjtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTYzRDBcdTczQjBcdTY1NzBcdTYzNkUgKi9cclxuICAgIHdpdGhkcmF3OiBXaXRoZHJhd0RhdGFbXTtcclxuICAgIC8qKiBcdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcdTY1NzBcdTYzNkUgKi9cclxuICAgIGd1aWRlRGF0YTogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTczQTlcdTVCQjZcdTU3MjhcdTdFQkZcdTU5MjlcdTY1NzAgKi9cclxuICAgIGRheXM6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU3NzBCXHU1RTdGXHU1NDRBXHU2MDNCXHU2QjIxXHU2NTcwICovXHJcbiAgICBhZFRpbWVzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1OEZERVx1N0VFRFx1NjcyQVx1NzBCOVx1NTFGQlx1NkIyMVx1NjU3MCAqL1xyXG4gICAgY29udGludW91c0FkVGltZXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZ2V0IHR0dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlckxldmVsO1xyXG4gICAgfVxyXG4gICAgc2V0IHR0dCh2KSB7XHJcbiAgICAgICAgdGhpcy5vcmRlckxldmVsID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLm5pY2tuYW1lID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJJbmZvKCk7XHJcbiIsICJleHBvcnQgdHlwZSBMYW5kT2JqID0gTmV0SW5pdFtcImxhbmRzXCJdWzBdO1xyXG5cclxuY2xhc3MgTGFuZFNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgbGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBpbml0KGxpc3Q6IExhbmRPYmpbXSkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExhbmQoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTU3NTdcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBpZCBcdTU3MUZcdTU3MzBpZFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGdldExhbmQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkRGQlx1NTJBMFx1NjIxNlx1NjYyRlx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGQgXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGFkZExhbmQoZDogTGFuZE9iaikge1xyXG4gICAgICAgIHRoaXMubGlzdC5zZXQoZC5pZCwgZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTdBN0FcdTU3MUZcdTU3MzBcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMYW5kU2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGV0QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBldERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTVCQTBcdTcyNjlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFBldEJhc2U7XHJcbiAgICAvKiogXHU5NTAxXHU1QjlBICovXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBQZXRTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFBldERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBpbml0KHBldHM6IG51bWJlcltdKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBkLFxyXG4gICAgICAgICAgICAgICAgbG9jazogIXBldHMuaW5jbHVkZXMoZC5pZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU1QkEwXHU3MjY5XHU4OUUzXHU5NTAxXHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIGdldFVubG9ja0xlbigpIHtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWQubG9jaykgbGVuKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBldFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYW50RGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogUGxhbnRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jbGFzcyBQbGFudFNlcnZpY2Uge1xyXG4gICAgbGlzdDogUGxhbnREYXRhQmFzZVtdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGxpc3QgXHU3OUNEXHU1QjUwaWRcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgaW5pdChsaXN0OiBudW1iZXJbXSkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7IGJhc2U6IGQsIGxvY2s6ICFsaXN0LmluY2x1ZGVzKGQuaWQpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gaWQgXHU2OTBEXHU3MjY5aWRcclxuICAgICAqIEByZXR1cm5zIFx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBnZXRQbGFudChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMubGlzdC5sZW5ndGggLSAxOyB4ID4gLTE7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBsYW50U2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBXYXJlSG91c2VEYXRhIHtcclxuICAgIGJhc2U6IFBsYW50QmFzZTtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB0eXBlPzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFdhcmVob3VzZVNlcnZpY2Uge1xyXG4gICAgbGlzdDogV2FyZUhvdXNlRGF0YVtdID0gW107XHJcblxyXG4gICAgaW5pdChcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICkge1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJcdTk1MTlcdThCRUZcdTc2ODRpZCBcIiArIGQuaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoZC5pZCksXHJcbiAgICAgICAgICAgICAgICBjb3VudDogZC5hbW91bnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxQ0ZcdTVDMTFcdTcyNjlcdTU0QzFcdTY1NzBcdTkxQ0ZcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIGFtb3VudFxyXG4gICAgICovXHJcbiAgICByZWR1Y2VBbW91bnQoaWQ6IG51bWJlciwgYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFt4XS5jb3VudCAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTkwNTNcdTUxNzdcclxuICAgICAqL1xyXG4gICAgZ2V0T25lKGlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEl0ZW0oaWQpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2REZCXHU1MkEwXHU3MjY5XHU1NEMxXHJcbiAgICAgKi9cclxuICAgIGFkZChpZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLmNvdW50ICs9IGFtb3VudDtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX09yZGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlx1OTUxOVx1OEJFRlx1NzY4NGlkIFwiICsgaWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChpZCksXHJcbiAgICAgICAgICAgIGNvdW50OiBhbW91bnQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBXYXJlaG91c2VTZXJ2aWNlKCk7XHJcbiIsICIvKipcclxuICogXHU3N0VEXHU5NEZFXHU2M0E1XHU4QkY3XHU2QzQyXHU1MzRGXHU4QkFFXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBcGlIdHRwIHtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgKi9cclxuICAgIGxvZ2luID0gXCIvbG9naW5cIixcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgdG9rZW4gKi9cclxuICAgIGxvZ2luVG9rZW4gPSBcIi9sb2dpbi90b2tlblwiLFxyXG4gICAgLyoqIFx1OTg4Nlx1NTNENlx1OEJBMlx1NTM1NVx1NTk1Nlx1NTJCMSAqL1xyXG4gICAgb3JkZXJSZXdhcmQgPSBcIi9vcmRlci9yZXdhcmRcIixcclxuICAgIC8qKiBcdTk4ODZcdTUzRDZcdTdCN0VcdTUyMzBcdTU5NTZcdTUyQjEgKi9cclxuICAgIHNpZ25JblJld2FyZCA9IFwiL3NpZ25Jbi9yZXdhcmRcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTg5RTNcdTk1MDEgKi9cclxuICAgIGxhbmRVbmxvY2sgPSBcIi9sYW5kL3VubG9ja1wiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjRBRFx1NzlDRCAqL1xyXG4gICAgbGFuZFNvdyA9IFwiL2xhbmQvc293XCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU2NTM2XHU4M0I3ICovXHJcbiAgICBsYW5kR2F0aGVyID0gXCIvbGFuZC9nYXRoZXJcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTcgKi9cclxuICAgIGxhbmRVcGdyYWRlID0gXCIvbGFuZC91cGdyYWRlXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MkEwXHU5MDFGICovXHJcbiAgICBsYW5kU3BlZWRVcCA9IFwiL2xhbmQvc3BlZWRVcFwiLFxyXG4gICAgLyoqIFx1NzlDRFx1NUI1MFx1ODlFM1x1OTUwMSAqL1xyXG4gICAgc2VlZHNVbmxvY2sgPSBcIi9zZWVkcy91bmxvY2tcIixcclxuICAgIC8qKiBcdTgzQjdcdTUzRDZcdTgwQ0NcdTUzMDVcdTUyMTdcdTg4Njg9PiBcdTY2ODJcdTY1RjZcdThGRDlcdTRFMkFcdTYzQTVcdTUzRTNcdTRFMERcdTk3MDBcdTg5ODFcdTc1MjggKi9cclxuICAgIHdhcmVob3VzZSA9IFwiL3dhcmVob3VzZVwiLFxyXG4gICAgLyoqIFx1ODBDQ1x1NTMwNVx1NTU0Nlx1NTRDMVx1NTFGQVx1NTUyRSAqL1xyXG4gICAgd2FyZWhvdXNlU2VsbCA9IFwiL3dhcmVob3VzZS9zZWxsXCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU4RDJEXHU0RTcwICovXHJcbiAgICBwZXRCdXkgPSBcIi9wZXQvYnV5XCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU0RjY5XHU2MjM0ICovXHJcbiAgICBwZXRXZWFyID0gXCIvcGV0L3dlYXJcIixcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdThEMkRcdTRFNzAgKi9cclxuICAgIGZlZWRCdXkgPSBcIi9mZWVkL2J1eVwiLFxyXG4gICAgLyoqIFx1NEVGQlx1NTJBMVx1NTk1Nlx1NTJCMVx1OTg4Nlx1NTNENiAqL1xyXG4gICAgdGFza1Jld2FyZCA9IFwiL3Rhc2svcmV3YXJkXCIsXHJcbiAgICAvKiogXHU5MEJCXHU1QzQ1ICovXHJcbiAgICBuZWlnaGJvciA9IFwiL25laWdoYm9yXCIsXHJcbiAgICAvKiogXHU1MDc3XHU4M0RDICovXHJcbiAgICBsYW5kU3RlYWwgPSBcIi9sYW5kL3N0ZWFsXCIsXHJcbiAgICAvKiogXHU1MzU1XHU3MkVDXHU2N0U1XHU3NzBCXHU1RTdGXHU1NDRBICovXHJcbiAgICBhZCA9IFwiL2FkXCIsXHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU0RjUzXHU1MjlCXHU4RDJEXHU0RTcwICovXHJcbiAgICB2aXRhbGl0eUJ1eSA9IFwiL3ZpdGFsaXR5L2J1eVwiLFxyXG4gICAgLyoqIFx1NTZERVx1ODFFQVx1NURGMVx1NUJCNiAqL1xyXG4gICAgZ29Ib21lID0gXCIvZ29Ib21lXCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU1MjIwXHU5NjY0ICovXHJcbiAgICBmcmllbmREZWxldGUgPSBcIi9mcmllbmQvZGVsZXRlXCIsXHJcbiAgICAvKiogXHU5MDFBXHU4RkM3XHU1OTdEXHU1M0NCXHU3NTMzXHU4QkY3ICovXHJcbiAgICBmcmllbmRBbGxvdyA9IFwiL2ZyaWVuZC9hbGxvd1wiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1NzUzM1x1OEJGNyAqL1xyXG4gICAgZnJpZW5kQXBwbHkgPSBcIi9mcmllbmQvYXBwbHlcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTY0MUNcdTdEMjIgKi9cclxuICAgIGZyaWVuZFNlYXJjaCA9IFwiL2ZyaWVuZC9zZWFyY2hcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZExpc3QgPSBcIi9mcmllbmQvbGlzdFwiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1OTA4MFx1OEJGN1x1ODAwNVx1N0VEMVx1NUI5QSAqL1xyXG4gICAgZnJpZW5kSW52aXRlUGVvcGxlID0gXCIvZnJpZW5kL2ludml0ZS9wZW9wbGVcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZEludml0ZUxpc3QgPSBcIi9mcmllbmQvaW52aXRlL2xpc3RcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTU5NTZcdTUyQjFcdUZGMENcdTk4ODZcdTUzRDYgKi9cclxuICAgIGZyaWVuZEludml0ZVJlY2VpdmUgPSBcIi9mcmllbmQvaW52aXRlL3JlY2VpdmVcIixcclxuICAgIC8qKiBcdThCQkZcdTk1RUVcdTU5N0RcdTUzQ0JcdTVCQjZcdTkxQ0MgKi9cclxuICAgIGZyaWVuZFZpc2l0ID0gXCIvZnJpZW5kL3Zpc2l0XCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU1MjA2XHU0RUFCICovXHJcbiAgICBmcmllbmRTaGFyZSA9IFwiL2ZyaWVuZC9zaGFyZVwiLFxyXG4gICAgLyoqIFx1OTBBRVx1NEVGNlx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbWFpbExpc3QgPSBcIi9tYWlsL2xpc3RcIixcclxuICAgIC8qKiBcdTkwQUVcdTRFRjZcdTk2MDVcdThCRkIgKi9cclxuICAgIG1haWxSZWFkID0gXCIvbWFpbC9yZWFkXCIsXHJcbiAgICAvKiogXHU5MEFFXHU0RUY2XHU1MjIwXHU5NjY0ICovXHJcbiAgICBtYWlsRGVsZXRlID0gXCIvbWFpbC9kZWxldGVcIixcclxuICAgIC8qKiBcdTYzRDBcdTczQjAgKi9cclxuICAgIHdpdGhkcmF3ID0gXCIvd2l0aGRyYXdcIixcclxuICAgIC8qKiBcdTYzRDBcdTczQjBcdThCQjBcdTVGNTUqL1xyXG4gICAgd2l0aGRyYXdSZWNvcmQgPSBcIi93aXRoZHJhdy9yZWNvcmRcIixcclxuICAgIC8qKiBcdTVCQTJcdTYyMzdcdTdBRUZcdTcyNDhcdTY3MkMgKi9cclxuICAgIGNvbmZpZ0NsaWVudCA9IFwiL2NvbmZpZy9jbGllbnRcIixcclxuICAgIC8qKiBcdTVGMTVcdTVCRkNcdTY1NzBcdTYzNkUgKi9cclxuICAgIGd1aWRlID0gXCIvZ3VpZGVcIixcclxuICAgIC8qKiBcdTdFREZcdThCQTFcdTY3MkFcdTcwQjlcdTUxRkJcdTZCMjFcdTY1NzAgKi9cclxuICAgIGFkUmVjb3JkTm90Q2xpY2sgPSBcIi9hZC9yZWNvcmQvbm90L2NsaWNrXCIsXHJcbn1cclxuIiwgImltcG9ydCB7IFJlZERvdFR5cGUgfSBmcm9tIFwic3JjL2NvbXBvbmVudHMvUmVkRG90Q29tcG9uZW50XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwiLi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCIuL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwiLi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vUmVzXCI7XHJcblxyXG4vKipcclxuICogXHU1RkMzXHU4REYzXHJcbiAqL1xyXG5jbGFzcyBIZWFydGJlYXRDb250cm9sIHtcclxuICAgIC8qKiBcdTVGQzNcdThERjNcdTk1RjRcdTk2OTQgKi9cclxuICAgIGludGVydmFsVGltZSA9IDYwO1xyXG5cclxuICAgIHByaXZhdGUgdGltZUlkO1xyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTXNnKCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUaW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVJZCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1zZygpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcclxuICAgICAgICB9LCB0aGlzLmludGVydmFsVGltZSAqIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTYyNDBcdTY3MDlcdTdFQTJcdTcwQjkgKi9cclxuICAgIGFzeW5jIHVwZGF0ZU1zZygpIHtcclxuICAgICAgICAvL1x1OTBBRVx1NEVGNlxyXG4gICAgICAgIGxldCBkOiBNYWlsUmV0dXJuRGF0YVtdID0gYXdhaXQgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm1haWxMaXN0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBoYXNSZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGQubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKCFkW3hdLnJlYWQpIHtcclxuICAgICAgICAgICAgICAgIGhhc1JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfcmVkX2RvdCwgW1JlZERvdFR5cGUubWFpbCwgaGFzUmVkXSk7XHJcbiAgICAgICAgbGV0IGZyaWVuZERhdGE6IEZyaWVuZExpc3REYXRhID0gYXdhaXQgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZExpc3QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaGFzUmVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBmcmllbmREYXRhLmxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKGZyaWVuZERhdGEubGlzdFt4XS5zdGVhbCB8fCBmcmllbmREYXRhLmxpc3RbeF0uYXBwbHlJbmcpIHtcclxuICAgICAgICAgICAgICAgIGhhc1JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfcmVkX2RvdCwgW1JlZERvdFR5cGUuZnJpZW5kLCBoYXNSZWRdKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBIZWFydGJlYXRDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBQZXRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZVwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgSGVhcnRiZWF0IGZyb20gXCIuL0hlYXJ0YmVhdFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM0Rlx1OEJBRVx1NjU3MFx1NjM2RVx1NTkwNFx1NzQwNlxyXG4gKi9cclxuY2xhc3MgSHR0cERhdGFDb250cm9sIHtcclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdThGNkNcdTUzRDEgKi9cclxuICAgIGZvcndhcmQoZDoge1xyXG4gICAgICAgIGFwaTogQXBpSHR0cDtcclxuICAgICAgICBkYXRhOiBhbnk7XHJcbiAgICAgICAgcmVzb2x2ZUV2ZW50PzogRnVuY3Rpb247XHJcbiAgICAgICAgLy8gVE9ETyBcdThGRDlcdTRFMkFcdTUzRUZcdTgwRkRcdTY3MDlcdTVGMDJcdTZCNjVcdTkxQ0RcdTU5MERcdTk1RUVcdTk4OThcdUZGMENcdTU0MEVcdTY3MUZcdTYzOTJcdTY3RTVcdTRFMDBcdTRFMEJcclxuICAgICAgICBlcnJvcj86IEZ1bmN0aW9uO1xyXG4gICAgfSkge1xyXG4gICAgICAgIHN3aXRjaCAoZC5hcGkpIHtcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxvZ2luOlxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubG9naW5Ub2tlbjpcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW4oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFNwZWVkVXA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tVcGRhdGUoMTAwMik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmFkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kR2F0aGVyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5mZWVkQnV5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDYpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kU293OlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC53YXJlaG91c2VTZWxsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kU3RlYWw6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJJbmZvKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5zZWVkc1VubG9jazpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kU293OlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRVbmxvY2s6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAucGV0QnV5OlxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAudml0YWxpdHlCdXk6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAudGFza1Jld2FyZDpcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRVcGdyYWRlOlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLm9yZGVyUmV3YXJkOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkLnJlc29sdmVFdmVudCkgZC5yZXNvbHZlRXZlbnQoZC5kYXRhKTtcclxuXHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChkLmFwaSwgZC5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihlcnJvckNvZGU6IG51bWJlciwgZGF0YTogYW55KSB7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgLy8gdGV4dDogYGVycm9yQ29kZSAke2Vycm9yQ29kZX0gJHtKU09OLnN0cmluZ2lmeShkYXRhKX1gLFxyXG4gICAgICAgICAgICB0ZXh0OiBgJHtkYXRhPy5tZXNzYWdlfSBcXG4gJHtkYXRhPy5lcnJvciB8fCBcIlwifWAsXHJcbiAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NjdCXHU1RjU1XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsb2dpbihkOiBOZXRJbml0KSB7XHJcbiAgICAgICAgaWYgKCFkKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU3NjdCXHU1RjU1XHU5NTE5XHU4QkVGLFx1OEJGN1x1OTFDRFx1OEJENVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQbGFudFNlcnZpY2UuaW5pdChkLnNlZWRzKTtcclxuICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmluaXQoZC53YXJlaG91c2UpO1xyXG4gICAgICAgIFVzZXJJbmZvLmtleSA9IGQudXNlckluZm8ua2V5O1xyXG4gICAgICAgIFVzZXJJbmZvLmRpYW1vbmQgPSBkLnVzZXJJbmZvLmRpYW1vbmQ7XHJcbiAgICAgICAgVXNlckluZm8uZ29sZCA9IGQudXNlckluZm8uZ29sZDtcclxuICAgICAgICBVc2VySW5mby5uaWNrbmFtZSA9IGQudXNlckluZm8ubmlja25hbWU7XHJcbiAgICAgICAgVXNlckluZm8uYXZhdGFyID0gZC51c2VySW5mby5hdmF0YXI7XHJcbiAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCA9IGQub3JkZXJJZCB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLndhcmVQZXRJZCA9IGQud2VhclBldD8uaWQ7XHJcbiAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgPSBkLndlYXJQZXQ/LnZpdGFsaXR5IHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gZC53ZWFyUGV0Py5kaWdlc3RDb3VudERvd24gfHwgMDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IGQuYWR2ZXJ0aXNlVGltZXMgfHwgMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5EYXlzID0gZC5zaWduSW5EYXlzIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBkLnNpZ25JbklkO1xyXG4gICAgICAgIFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9IGQuc3BlZWRVcFRpbWVzO1xyXG4gICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gZC51c2VySW5mby52aXRhbGl0eTtcclxuICAgICAgICBVc2VySW5mby5pbnZpdGVQZW9wbGUgPSBkLnVzZXJJbmZvLmludml0ZVBlb3BsZTtcclxuICAgICAgICBVc2VySW5mby5pc0ZpcnN0VGltZSA9IGQudXNlckluZm8uaXNGaXJzdFRpbWU7XHJcbiAgICAgICAgVXNlckluZm8uZ3VpZGVEYXRhID0gZC51c2VySW5mby5ndWlkZURhdGEgfHwgXCJcIjtcclxuICAgICAgICBVc2VySW5mby53aXRoZHJhdyA9IGQud2l0aGRyYXc7XHJcbiAgICAgICAgVXNlckluZm8uZGF5cyA9IGQuZGF5cyArIDE7XHJcbiAgICAgICAgVXNlckluZm8uYWRUaW1lcyA9IGQudXNlckluZm8uYWRUaW1lcztcclxuICAgICAgICBVc2VySW5mby5jb250aW51b3VzQWRUaW1lcyA9IGQudXNlckluZm8uY29udGludW91c0FkVGltZXM7XHJcbiAgICAgICAgUGV0U2VydmljZS5pbml0KGQucGV0cyk7XHJcbiAgICAgICAgVGFza1NlcnZpY2UuaW5pdChkLnRhc2tzKTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJpc0xvZ2luXCIsIHRydWUpO1xyXG4gICAgICAgIGlmIChkLnRva2VuKSBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ0b2tlblwiLCBkLnRva2VuKTtcclxuICAgICAgICBMYW5kU2VydmljZS5pbml0KGQubGFuZHMpO1xyXG5cclxuICAgICAgICBDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQgPSBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS5zb3VuZDtcclxuICAgICAgICBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQgPSBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS5tdXNpYztcclxuICAgICAgICBIZWFydGJlYXQuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luT3V0KCkge1xyXG4gICAgICAgIEhlYXJ0YmVhdC5kZXN0cm95KCk7XHJcbiAgICAgICAgUGxhbnRTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgV2FyZWhvdXNlU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFBldFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBMYW5kU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwiaXNMb2dpblwiLCBmYWxzZSk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgbnVsbCk7XHJcbiAgICAgICAgVXNlckluZm8ua2V5ID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gMDtcclxuICAgICAgICBVc2VySW5mby5nb2xkID0gMDtcclxuICAgICAgICBVc2VySW5mby5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8uYXZhdGFyID0gXCJcIjtcclxuICAgICAgICBVc2VySW5mby5vcmRlckxldmVsID0gMDtcclxuICAgICAgICBVc2VySW5mby53YXJlUGV0SWQgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gMDtcclxuICAgICAgICBVc2VySW5mby5kaWdlc3RDb3VudERvd24gPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5EYXlzID0gMDtcclxuICAgICAgICBVc2VySW5mby5zaWduSW5JZCA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8uc3BlZWRVcFRpbWVzID0gMDtcclxuICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uaW52aXRlUGVvcGxlID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5pc0ZpcnN0VGltZSA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBbXTtcclxuICAgICAgICBVc2VySW5mby5ndWlkZURhdGEgPSBcIlwiO1xyXG4gICAgICAgIFVzZXJJbmZvLmRheXMgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkVGltZXMgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OUVEOFx1OEJBNFx1NzUyOFx1Njc2NVx1NjZGNFx1NjVCMFx1NzUyOFx1NjIzN1x1OTFEMVx1NUUwMVx1N0I0OVxyXG4gICAgICogQHBhcmFtIGRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVVc2VySW5mbyhkOiBSZXR1cm5Vc2VySW5mbykge1xyXG4gICAgICAgIFVzZXJJbmZvLmdvbGQgPSBkLmdvbGQ7XHJcbiAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IGQuZGlhbW9uZDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IGQuYWR2ZXJ0aXNlVGltZXMgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NEVGQlx1NTJBMVx1OEZEQlx1NUVBNlxyXG4gICAgICogQHBhcmFtIGlkIFx1NEVGQlx1NTJBMWlkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGFza1VwZGF0ZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEh0dHBEYXRhQ29udHJvbCgpO1xyXG4iLCAiaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwic3JjL2NvcmUvSW5zdGFuY2VcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCIuL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCIuL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cERhdGFDb250cm9sIGZyb20gXCIuL0h0dHBEYXRhQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuaW50ZXJmYWNlIEh0dHBTZW5kRGF0YSB7XHJcbiAgICBhcGk6IEFwaUh0dHA7XHJcbiAgICBkYXRhPzogYW55O1xyXG4gICAgbWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nO1xyXG4gICAgaGVhZGVycz86IGFueVtdIHwgbnVsbDtcclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTk1MTlcdThCRUZcdTU2REVcdThDMDMgKi9cclxuICAgIGVycm9yPzogeyAoY29kZTogbnVtYmVyLCBkYXRhOiBhbnkpOiB2b2lkIH07XHJcbiAgICBiYXNlVXJsPzogc3RyaW5nO1xyXG4gICAgLyoqIFx1NTNEMVx1OEQ3N1x1OEJGN1x1NkM0Mlx1NTI0RCAqL1xyXG4gICAgYmVmb3JlPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTc3RURcdTk0RkVcdTYzQTVcdTYzQTdcdTUyMzZcdTU2NjhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBDb250cm9sIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IEh0dHBDb250cm9sO1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRGF0YTogeyB4aHI6IFhNTEh0dHBSZXF1ZXN0OyBkYXRhOiBIdHRwU2VuZERhdGEgfVtdID0gW107XHJcblxyXG4gICAgLyoqIFx1NEU4Qlx1NEVGNlx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBldmVudE1hcDogTWFwPHN0cmluZywgWE1MSHR0cFJlcXVlc3Q+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGluaXQodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJlc29sdmVcclxuICAgICAqIEBwYXJhbSByZWplY3RcclxuICAgICAqIEBwYXJhbSBhZCBcdTY2MkZcdTU0MjZcdTY2MkZcdTVFN0ZcdTU0NEFcdTc2ODRcdTY1NzBcdTYzNkVcdTUzNEZcdThCQUVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlWGhyKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhZDogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoeG1saHR0cC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeG1saHR0cC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlSGFuZGxlcihkYXRhLCByZXNvbHZlLCByZWplY3QsIHhtbGh0dHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyT25lSW5FdmVudE1hcCh4bWxodHRwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4bWxodHRwLnJlc3BvbnNlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBKU09OLnBhcnNlKHhtbGh0dHAucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLnN0YXR1c0NvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgJHt4bWxodHRwLnJlc3BvbnNlVGV4dH0gXHU4QkY3XHU5MUNEXHU4QkQ1YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuY29kZSA9IDk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlSGFuZGxlcihkLCByZXNvbHZlLCByZWplY3QsIHhtbGh0dHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck9uZUluRXZlbnRNYXAoeG1saHR0cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF4bWxodHRwLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiA0MDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogXCJcdTY3MERcdTUyQTFcdTU2NjhcdTY3MkFcdTU0Q0RcdTVFOTRcdUZGMENcdThCRjdcdTkxQ0RcdThCRDVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxodHRwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhck9uZUluRXZlbnRNYXAoeG1saHR0cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB4bWxodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjIwXHU5NjY0XHU5NjFGXHU1MjE3XHU0RThCXHU0RUY2XHJcbiAgICAgKiBAcGFyYW0geG1sXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2xlYXJPbmVJbkV2ZW50TWFwKHhtbDogWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgICAgICAvLyBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ldmVudE1hcC5mb3JFYWNoKChlLCB2KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlID09IHhtbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5kZWxldGUodik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZW5kKGRhdGE6IEh0dHBTZW5kRGF0YSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgaWYgKCFkYXRhLm1ldGhvZCkgZGF0YS5tZXRob2QgPSBcInBvc3RcIjtcclxuICAgICAgICBpZiAoIWRhdGEucmVzcG9uc2VUeXBlKSBkYXRhLnJlc3BvbnNlVHlwZSA9IFwianNvblwiO1xyXG4gICAgICAgIGlmICghZGF0YS5iYXNlVXJsKSBkYXRhLmJhc2VVcmwgPSB0aGlzLmJhc2VVcmw7XHJcblxyXG4gICAgICAgIGxldCB1cmkgPSBkYXRhLmJhc2VVcmwgKyBkYXRhLmFwaTtcclxuXHJcbiAgICAgICAgbGV0IHNlbmREYXRhOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGEpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZGF0YS5kYXRhKS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5wdXNoKGAke2R9PSR7ZGF0YS5kYXRhW2RdfWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2VuZERhdGFTdHJpbmcgPSBzZW5kRGF0YS5qb2luKFwiJlwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRNYXAuZ2V0KHVyaSArIHNlbmREYXRhU3RyaW5nKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGE/LnR5cGUgPT0gQ29uZmlnR2FtZS5BcGlUeXBlQUQpIHtcclxuICAgICAgICAgICAgY29uc3QgYWREYXRhID0gYXdhaXQgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoYWREYXRhPy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGAke2FkRGF0YS5kYXRhW1wibWVzc2FnZVwiXX1bJHthZERhdGEuY29kZX1dYCxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLmFkVGltZXMrKztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWREYXRhPy5kYXRhW1wiaGFzQ2xpY2tlZFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzID0gMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uY29udGludW91c0FkVGltZXMrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmFkUmVjb3JkTm90Q2xpY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aW1lczogVXNlckluZm8uY29udGludW91c0FkVGltZXMgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4aHIgPSB0aGlzLmNyZWF0ZVhocihyZXNvbHZlLCByZWplY3QsIGFkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRNYXAuc2V0KHVyaSArIHNlbmREYXRhU3RyaW5nLCB4aHIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZW5kRGF0YS5wdXNoKHsgeGhyOiB4aHIsIGRhdGE6IGRhdGEgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YT8uYmVmb3JlKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmJlZm9yZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWRhdGEuaGVhZGVycykge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5oZWFkZXJzID0gW1wiQXV0aG9yaXphdGlvblwiLCBgQmVhcmVyICR7TG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCkudG9rZW59YF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYCVjID09PiBzZW5kICVjJHtkYXRhLmFwaX0gJWMke0pTT04uc3RyaW5naWZ5KGRhdGEuZGF0YSl9YCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojODJjY2RkO2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiNlYjRkNGI7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6I2Y4YzI5MTtmb250LXdlaWdodDo3MDA7YFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFkYXRhLmFwaSkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkhpbnRWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFybTogeyB0ZXh0OiBgaHR0cCBcdTU3MzBcdTU3NDBcdTRFMERcdTgwRkRcdTRFM0FcdTdBN0FgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmksIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke0xvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnRva2VufWApO1xyXG5cclxuICAgICAgICAgICAgeGhyLnNlbmQoc2VuZERhdGFTdHJpbmcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGxldGVIYW5kbGVyKGUsIHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCB4aHIpIHtcclxuICAgICAgICAvLyBUT0RPIFx1NEUzNFx1NjVGNlx1NTkwNFx1NzQwNlx1NjVCOVx1NkNENVx1RkYwQ1x1OEZEOVx1OTFDQ1x1NzY4NFx1OTYxRlx1NTIxNyBcdTZDQTFcdTY3MDlcdTU5MDRcdTc0MDZcdTU5N0RcdUZGMENcdTZEODhcdTYwNkZcdTRGNTNcdTU2REVcdTY3NjVcdUZGMENcdTRGMUFcdTg5ODZcdTc2RDZcdTRFNEJcdTUyNERcdTc2ODRcdTUzNEZcdThCQUVcdUZGMENcclxuICAgICAgICBsZXQgY3VyRGF0YTogSHR0cFNlbmREYXRhO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zZW5kRGF0YS5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZW5kRGF0YVt4XS54aHIgPT0geGhyKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJEYXRhID0gdGhpcy5zZW5kRGF0YVt4XS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kRGF0YS5zbGljZSh4LCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmNvZGUpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGUuY29kZSk7XHJcbiAgICAgICAgICAgIGlmIChjdXJEYXRhPy5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY3VyRGF0YS5lcnJvcihlLmNvZGUsIGUuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgSHR0cERhdGFDb250cm9sLmVycm9yKGUuY29kZSwgZS5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGFwaSA9IGN1ckRhdGEuYXBpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIGAlYyA8PT0gYmFjayAlYyR7YXBpfSBgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiNiOGU5OTQ7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6Izc4ZTA4Zjtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGUuZGF0YVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBIdHRwRGF0YUNvbnRyb2wuZm9yd2FyZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBhcGksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVFdmVudDogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXIoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzSGFuZGxlcihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vICBBZGRMYW5kVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkTGFuZFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb3N0SWNvbiwgdGlwczpcIlx1NEVGN1x1NjgzQ1x1NTZGRVx1NjgwN1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29zdEljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvc3RGb250LCB0aXBzOlwiXHU0RUY3XHU2ODNDRm9udFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29zdEZvbnQ6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkQnRuLCB0aXBzOlwiXHU1RTdGXHU1NDRBXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7IGlkOiBudW1iZXI7IGNhbGw6IEZ1bmN0aW9uIH07XHJcblxyXG4gICAgcHJpdmF0ZSBsYW5kRGF0YTogUmV3YXJkQ3VycmVuY3lCYXNlO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKGQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmREYXRhID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcInVubG9ja19sYW5kX2Nvc3RcIikudmFsdWVbXHJcbiAgICAgICAgICAgIExhbmRTZXJ2aWNlLmxpc3Quc2l6ZVxyXG4gICAgICAgIF0gYXMgUmV3YXJkQ3VycmVuY3lCYXNlO1xyXG4gICAgICAgIHRoaXMuY29zdEljb24uc2tpbiA9IHRoaXMubGFuZERhdGEub2JqLmljb247XHJcbiAgICAgICAgdGhpcy5jb3N0Rm9udC52YWx1ZSA9IHRoaXMubGFuZERhdGEuY291bnQgKyBcIlwiO1xyXG5cclxuICAgICAgICB0aGlzLmFkQnRuLmRpc2FibGVkID0gIVVzZXJJbmZvLmFkdmVydGlzZVRpbWVzO1xyXG4gICAgICAgIHRoaXMuYWRCdG4uYWN0aXZlID0gQm9vbGVhbihVc2VySW5mby5hZHZlcnRpc2VUaW1lcyk7XHJcblxyXG4gICAgICAgIGlmIChVc2VySW5mby5hZFRpbWVzID4gMTAwIHx8IFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzID4gMjApIHtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMiB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMyB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImhhbGZfc2NyZWVuX2FkdmVydGlzZW1lbnRcIiB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImJvdHRvbV9hZHZlcnRpc2VtZW50XCIgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChVc2VySW5mby5hZFRpbWVzID4gMTAwIHx8IFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzID4gMjApIHtcclxuICAgICAgICAgICAgKHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjZW50ZXJcIikgYXMgTGF5YS5JbWFnZSkuY2VudGVyWSA9IC0zMTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWRkTGFuZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb3N0X2dvbGRcIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmREYXRhLm9iai5pZCA9PSBDb25maWdHYW1lLmdvbGRJZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEuY291bnQgPiBVc2VySW5mby5nb2xkXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTFEMVx1NUUwMVx1NEUwRFx1OERCM1wiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5vYmouaWQgPT0gQ29uZmlnR2FtZS5kaWFtb25kSWQgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmREYXRhLmNvdW50ID4gVXNlckluZm8uZGlhbW9uZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTk0QkJcdTc3RjNcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRVbmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFkZExhbmRWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRVbmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogdGhpcy5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBhZFJld2FyZDogUmV0dXJuVXNlckluZm9bXCJhZFJld2FyZFwiXSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmFkUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5jbG9zZUFkLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgTGFuZE9iaiB9IGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTGFuZFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vICBCdXlWaXRhbGl0eVZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1eVZpdGFsaXR5VmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlTGFiZWwsIHRpcHM6XCJcdTRFRjdcdTY4M0NcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlTGFiZWw6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlSWNvbiwgdGlwczpcIlx1NEVGN1x1NjgzQ2ljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRCdG4sIHRpcHM6XCJcdTVFN0ZcdTU0NEFcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgY2FsbDogRnVuY3Rpb24gfTtcclxuICAgIHByaXZhdGUgY29zdEdvbGRDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIG9uT3BlbmVkKGU6IHsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgbGV0IGNvc3RHb2xkQ291bnQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwidml0YWxpdHlCdXlDb3N0R29sZFwiKS52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgdGhpcy5jb3N0R29sZENvdW50ID0gY29zdEdvbGRDb3VudDtcclxuICAgICAgICB0aGlzLnByaWNlTGFiZWwudGV4dCA9IGBcdTRFRjdcdTY4M0NcdUZGMUEke2Nvc3RHb2xkQ291bnR9YDtcclxuXHJcbiAgICAgICAgdGhpcy5hZEJ0bi5kaXNhYmxlZCA9ICFVc2VySW5mby5hZHZlcnRpc2VUaW1lcztcclxuICAgICAgICB0aGlzLmFkQnRuLmFjdGl2ZSA9IEJvb2xlYW4oVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5QWRCdG5cIjpcclxuICAgICAgICAgICAgY2FzZSBcImJ1eUJ0blwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnZpdGFsaXR5ID49IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ2aXRhbGl0eUxpbWl0XCIpLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTRGNTNcdTUyOUJcdTVERjJcdTZFRTFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gXCJidXlCdG5cIiAmJiBVc2VySW5mby5nb2xkIDwgdGhpcy5jb3N0R29sZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC52aXRhbGl0eUJ1eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwiYnV5QnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBnb2xkOiAwOyBkaWFtb25kOiAwOyBhZHZlcnRpc2VUaW1lczogMDsgdml0YWxpdHk6IDAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudml0YWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwiYnV5QnRuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwicGh5c2ljYWxzdHJlbmd0aFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5CdXlWaXRhbGl0eVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy8gIEZpZWxkTGV2ZWxVcFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkTGV2ZWxVcFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxhYmVsLCB0aXBzOlwiXHU0RUY3XHU2ODNDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxhYmVsOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUljb24sIHRpcHM6XCJcdTRFRjdcdTY4M0NpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmx2LCB0aXBzOlwiXHU3QjQ5XHU3RUE3XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsdjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cmV3YXJkLCB0aXBzOlwiXHU1OTU2XHU1MkIxXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSByZXdhcmQ6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByb2JhYmlsaXR5LCB0aXBzOlwiXHU2OTgyXHU3Mzg3XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcm9iYWJpbGl0eTogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkQnRuLCB0aXBzOlwiXHU1RTdGXHU1NDRBXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7IG9iajogTGFuZE9iajsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBvbk9wZW5lZChlOiB7IG9iajogTGFuZE9iajsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGU7XHJcbiAgICAgICAgbGV0IG5leHRMYW5kID0gVGFibGVBbmFseXplLnRhYmxlKFwibGFuZExldmVsXCIpLmdldChlLm9iai5sZXZlbCArIDEpO1xyXG4gICAgICAgIHRoaXMucHJpY2VMYWJlbC50ZXh0ID0gYFx1NEVGN1x1NjgzQ1x1RkYxQSR7bmV4dExhbmQuY29zdC5jb3VudH1gO1xyXG4gICAgICAgIHRoaXMucHJpY2VJY29uLnNraW4gPSBuZXh0TGFuZC5jb3N0Lm9iai5pY29uO1xyXG5cclxuICAgICAgICB0aGlzLmx2LnRleHQgPSBgJHtlLm9iai5sZXZlbCArIDF9XHU3RUE3YDtcclxuICAgICAgICB0aGlzLnJld2FyZC50ZXh0ID0gYCske051bWJlcigobmV4dExhbmQuZ2FpbiAqIDEwMCkudG9GaXhlZCgyKSl9JWA7XHJcbiAgICAgICAgdGhpcy5wcm9iYWJpbGl0eS50ZXh0ID0gYCske051bWJlcigobmV4dExhbmQucHJvYmFiaWxpdHkgKiAxMDApLnRvRml4ZWQoMikpfSVgO1xyXG5cclxuICAgICAgICB0aGlzLmFkQnRuLmRpc2FibGVkID0gIVVzZXJJbmZvLmFkdmVydGlzZVRpbWVzO1xyXG4gICAgICAgIHRoaXMuYWRCdG4uYWN0aXZlID0gQm9vbGVhbihVc2VySW5mby5hZHZlcnRpc2VUaW1lcyk7XHJcblxyXG4gICAgICAgIGlmIChVc2VySW5mby5hZFRpbWVzID4gMTAwIHx8IFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzID4gMjApIHtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMiB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMyB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImhhbGZfc2NyZWVuX2FkdmVydGlzZW1lbnRcIiB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImJvdHRvbV9hZHZlcnRpc2VtZW50XCIgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChVc2VySW5mby5hZFRpbWVzID4gMTAwIHx8IFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzID4gMjApIHtcclxuICAgICAgICAgICAgKHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjZW50ZXJcIikgYXMgTGF5YS5JbWFnZSkuY2VudGVyWSA9IC0zMTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVwZ3JhZGVCdG5cIjpcclxuICAgICAgICAgICAgY2FzZSBcInVwZ3JhZGVBZEJ0blwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRVcGdyYWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5vYmouaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUgPT0gXCJ1cGdyYWRlQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBhZFJld2FyZDogUmV0dXJuVXNlckluZm9bXCJhZFJld2FyZFwiXSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwidXBncmFkZUFkQnRuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuYWRSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiTGFuZHVwZ3JhZGluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmNsb3NlSW1hZ2UsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc0Rlc2NWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBhbmVsTm9kZSwgdGlwczpcIlx1NkVEQVx1NTJBOFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBwYW5lbE5vZGU6IExheWEuUGFuZWw7XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsOiBGdW5jdGlvbjtcclxuXHJcbiAgICBvbk9wZW5lZChlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGwgPSBlPy5jYWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsTm9kZS52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnZpdGVfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzVmlldyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzUmV3YXJkVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1Jld2FyZFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmludml0ZUJveCwgdGlwczpcIlx1NjU3NFx1NjU3MFx1N0M3Qlx1NTc4Qlx1NzkzQVx1NEY4QlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaW52aXRlQm94OiBMYXlhLkJveDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppbnZpdGVJbnB1dCwgdGlwczpcIlx1OEY5M1x1NTE2NVx1OTA4MFx1OEJGN1x1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaW52aXRlSW5wdXQ6IExheWEuVGV4dElucHV0O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlTGlzdCwgdGlwczpcIlx1OEY5M1x1NTE2NVx1OTA4MFx1OEJGN1x1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMaXN0OiBMYXlhLkxpc3Q7XHJcblxyXG4gICAgcHJpdmF0ZSBpbnZpdGVMaXN0OiBJbnZpdGVEYXRhW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHJld2FyZFZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwcm9wb3J0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsOiBGdW5jdGlvbjtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LmFycmF5ID0gbmV3IEFycmF5KDYpO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVySXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQoZGF0YTogeyBsaXN0OiBbXTsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIHRoaXMuaW52aXRlTGlzdCA9IGRhdGEubGlzdCB8fCBbXTtcclxuICAgICAgICB0aGlzLmNhbGwgPSBkYXRhLmNhbGw7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmludml0ZVBlb3BsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmludml0ZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZXdhcmRWYWx1ZSA9IChcclxuICAgICAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIkludml0YXRpb25fcmV3YXJkc1wiKS52YWx1ZSBhcyBSZXdhcmRDdXJyZW5jeUJhc2VcclxuICAgICAgICApLmNvdW50O1xyXG5cclxuICAgICAgICBjb25zdCB3aXRoZHJhd2FsID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxcIikudmFsdWUgYXMgc3RyaW5nW107XHJcbiAgICAgICAgdGhpcy5wcm9wb3J0aW9uID0gTnVtYmVyKHdpdGhkcmF3YWxbMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRnJpZW5kc1Jld2FyZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnZpdGVfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnd4U2hhcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZCB8fCBkPy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IGQuZGF0YVtcIm1lc3NhZ2VcIl0sIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IGQuZGF0YVtcIm1lc3NhZ2VcIl0sIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZFNoYXJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcInNoYXJlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdWJtaXRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ0blwiOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgaSA9IChlLnRhcmdldCBhcyBMYXlhLkltYWdlKS5kYXRhU291cmNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aXRoZHJhdyhpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NzNCMFxyXG4gICAgICogQHBhcmFtIGlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgd2l0aGRyYXcoaTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEludml0ZVJlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGluZGV4OiBpIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTYzRDBcdTczQjBcdTYyMTBcdTUyOUZcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludml0ZUxpc3RbaV0ucmVjZWl2ZWRSZXdhcmQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX2ZyaWVuZF9zaGFyZV9ndWlkZSwgW3RoaXMuaW52aXRlTGlzdF0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVySXRlbShjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1N0IyQyR7aSArIDF9XHU0RjREYDtcclxuICAgICAgICBjb25zdCBidG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpIGFzIExheWEuSW1hZ2U7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwicHJpY2VfYm94XCIpLmdldENoaWxkQnlOYW1lKFwicHJpY2VcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZFZhbHVlIC8gdGhpcy5wcm9wb3J0aW9uXHJcbiAgICAgICAgfWA7XHJcblxyXG4gICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ19leHRyYWN0QWN0aXZlLnBuZ1wiO1xyXG4gICAgICAgIGlmICh0aGlzLmludml0ZUxpc3QubGVuZ3RoID4gaSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnZpdGVMaXN0W2ldLnJlY2VpdmVkUmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX2Nhc2hEb25lLnBuZ1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGkgPiAyKSB7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBidG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnRuLmRhdGFTb3VyY2UgPSBpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU0RUE0XHU3RUQxXHU1QjlBXHU2MjExXHU3Njg0XHU5MDgwXHU4QkY3XHU0RUJBXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW52aXRlSW5wdXQudGV4dCB8fCAhdGhpcy5pbnZpdGVJbnB1dC50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTA4MFx1OEJGN1x1NzgwMVx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QVx1RkYwMVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlUGVvcGxlLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleTogdGhpcy5pbnZpdGVJbnB1dC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8uaW52aXRlUGVvcGxlID0gdGhpcy5pbnZpdGVJbnB1dC50ZXh0O1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTdFRDFcdTVCOUFcdTYyMTBcdTUyOUZcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludml0ZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludml0ZUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbCkgdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJjb25zdCBlbnVtIEVycm9yQ29kZSB7XHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU0RTNBXHU3QTdBICovXHJcbiAgICBfMjAwMSA9IDIwMDEsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yQ29kZTtcclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEVycm9yQ29kZSBmcm9tIFwic3JjL2NvbW1vbi9FcnJvckNvZGVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcInNyYy9jb21tb24vVG9vbHNcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlLCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYW50RGF0YUJhc2UgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IE1haW5WaWV3LCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcInNyYy92aWV3L01haW5WaWV3XCI7XHJcbmltcG9ydCB7IFNob3BWaWV3RGF0YSB9IGZyb20gXCJzcmMvdmlldy9TaG9wVmlld1wiO1xyXG5cclxuLy8gIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4vKipcclxuICogXHU3NTMwXHU1NzMwXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZENvbXBvbmVudCBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogXHU2OTBEXHU3MjY5aWNvbiAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBpY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTgyODJcdTcwQjkgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgZmllbGROb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTY3MDlcdTY5MERcdTcyNjlcdTY1RjZcdTc2ODRcdTk2MzRcdTVGNzEgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgc2hhZG93OiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaWVsZEVtcHR5UmVzLCB0aXBzOlwiXHU4OUUzXHU5NTAxXHU1NDBFXHU1NzFGXHU1NzMwXHU3RUI5XHU3NDA2XCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZmllbGRFbXB0eVJlczogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTdCNDlcdTdFQTdcdTU2RkVcdTcyNDcgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgbHZOb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTUwMTJcdThCQTFcdTY1RjZcdTVCQjlcdTU2NjgqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSB0aW1lQm94OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBcdTUwMTJcdThCQTFcdTY1RjZsYWJlbCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudERvd25MYjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1ODhDNVx1OTk3MCAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSB0b3BTdGF0ZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOGljb25cdTg4QzVcdTk5NzAgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgdXBBbmk6IExheWEuQW5pbWF0aW9uID0gbnVsbDtcclxuICAgIC8qKiBcdTUxQ0ZcdTY1RjZcdTk1RjRcdTYzRDBcdTc5M0EgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgcmVkdWNlVGltZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnVubG9ja0ljb24sIHRpcHM6XCJcdTYyRDNcdTVDNTVcdTU3MUZcdTU3MzBpY29uXHU1NzMwXHU1NzQwXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgdW5sb2NrSWNvbjogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaWVsZElkLCB0aXBzOlwiXHU1NzFGXHU1NzMwaWRcIiwgdHlwZTpOdW1iZXIsfSovXHJcbiAgICBmaWVsZElkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU2RDZFXHU1MkE4XHU1MkE4XHU3NTNCICovXHJcbiAgICBwcml2YXRlIHRvcFN0YXRlSWNvblR3ZWVuOiBMYXlhLlRpbWVMaW5lO1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OVx1NTJBOFx1NzUzQiAqL1xyXG4gICAgcHJpdmF0ZSBwbGFudEljb25Ud2VlbjogTGF5YS5UaW1lTGluZTtcclxuXHJcbiAgICAvKiogXHU1RUZBXHU3QjUxXHU0RTJEICovXHJcbiAgICBidWlsZEluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1NTcyOFx1NTkxNlx1OTc2MiAqL1xyXG4gICAgaXNPdXRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1NTNFRlx1NTA3NyAqL1xyXG4gICAgY2FuU3RlYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTg4QUJcdTUwNzdcdTRFQkFcdTc2ODR1aWQgKi9cclxuICAgIHN0ZWFsVWlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFICovXHJcbiAgICBkYXRhOiBMYW5kT2JqO1xyXG5cclxuICAgIG1haW5WaWV3Q29tOiBNYWluVmlldztcclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIGxhbmRMaXN0OiBNYXA8bnVtYmVyLCBMYW5kT2JqPjtcclxuICAgIC8qKiBcdTYyMTBcdTcxOUZcdTc2ODRcdTY1RjZcdTk1RjQgKi9cclxuICAgIHByaXZhdGUgbWF0dXJlVGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZE5vZGUgPSA8TGF5YS5JbWFnZT50aGlzLm93bmVyO1xyXG4gICAgICAgIHRoaXMuY291bnREb3duTGIgPSB0aGlzLnRpbWVCb3guZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudERvd25MYlwiKSBhcyBhbnk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmljb24uc2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwQW5pLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlZHVjZVRpbWUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBBbmkub24oTGF5YS5FdmVudC5DT01QTEVURSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwQW5pLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnVwZGF0ZV9maWVsZClcclxuICAgIHVwZGF0ZURhdGEoZGF0YT86IHsgbGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj4gfSkge1xyXG4gICAgICAgIGlmIChkYXRhPy5saXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QgPSBkYXRhLmxpc3Q7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdCA9IExhbmRTZXJ2aWNlLmxpc3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckRhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckRhdGEoKSB7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnkgPSAxNjQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5maWVsZE5vZGUuc2tpbiA9IHRoaXMuZmllbGRFbXB0eVJlcztcclxuICAgICAgICAgICAgdGhpcy5zaG93SWNvbihCb29sZWFuKHRoaXMuZGF0YS5wcm9kdWN0SWQpKTtcclxuICAgICAgICAgICAgdGhpcy5sdk5vZGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGV2ZWwoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhbnRJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCAmJiB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgKiAxMDAwICsgRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIC8vXHU2MjEwXHU5NTdGXHU0RTJEXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb24uc2tpbiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldCh0aGlzLmRhdGEucHJvZHVjdElkKS5ncm93aW5nSWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZUljb25Ta2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbnRJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfd2FzdGVsYW5kLnBuZ2A7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gdGhpcy51bmxvY2tJY29uO1xyXG4gICAgICAgICAgICB0aGlzLmljb24ueSA9IDExMztcclxuICAgICAgICAgICAgdGhpcy5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUaW1lQm94KGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuPy5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RWljb25cdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93SWNvbihzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU3MkI2XHU2MDAxaWNvblx1N0VCOVx1NzQwNlxyXG4gICAgICogQHBhcmFtIHNraW5UeXBlIDEgXHU2RDQ3XHU2QzM0XHU1MkEwXHU5MDFGXHU3MkI2XHU2MDAxIDIgXHU1RUZBXHU3QjUxXHU3MkI2XHU2MDAxIDMgXHU2MjEwXHU3MTlGXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlSWNvblNraW4oc2tpblR5cGU6IDEgfCAyIHwgMykge1xyXG4gICAgICAgIHN3aXRjaCAoc2tpblR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfc3BlZWRVcC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19sYW5kVXBkYXRlQnRuMi5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19oYXJ2ZXN0LnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5ODc2XHU5MEU4aWNvblx1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICB0b3BTdGF0ZUljb25BbmkocGxheTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnkgPSAtMTA3O1xyXG4gICAgICAgIGlmICghdGhpcy50b3BTdGF0ZUljb25Ud2Vlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuID0gTGF5YS5UaW1lTGluZS50byhcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLFxyXG4gICAgICAgICAgICAgICAgeyB5OiB0aGlzLnRvcFN0YXRlSWNvbi55IC0gNTAgfSxcclxuICAgICAgICAgICAgICAgIDgwMCxcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKS50byh0aGlzLnRvcFN0YXRlSWNvbiwgeyB5OiB0aGlzLnRvcFN0YXRlSWNvbi55IH0sIDgwMCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGxheShudWxsLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0ZWFsVWlkICYmICF0aGlzLmRhdGE/LmNhblN0ZWFsKSB7XHJcbiAgICAgICAgICAgIHBsYXkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IHBsYXk7XHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5yZXN1bWUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU2NUY2XHU5NUY0XHU1QkI5XHU1NjY4XHU3Njg0XHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1RpbWVCb3goc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RVx1OTYzNFx1NUY3MVx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dTaGFkb3dJY29uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnNoYWRvdy52aXNpYmxlID0gc2hvdztcclxuICAgICAgICB0aGlzLnNoYWRvdy5hY3RpdmUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2OTBEXHU3MjY5XHU1MkE4XHU3NTNCXHU2NEFEXHU2NTNFXHJcbiAgICAgKiBAcGFyYW0gcGxheVxyXG4gICAgICovXHJcbiAgICBwbGFudEljb25BbmkocGxheTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICghdGhpcy5wbGFudEljb25Ud2Vlbikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuID0gTGF5YS5UaW1lTGluZS50byh0aGlzLmljb24sIHsgc2tld1g6IDMgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgIC50byh0aGlzLmljb24sIHsgc2tld1g6IC0zIH0sIDIwMDApXHJcbiAgICAgICAgICAgICAgICAudG8odGhpcy5pY29uLCB7IHNrZXdYOiAwIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuLnBsYXkobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGxheSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmljb24uc2tld1ggPSAwO1xyXG5cclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKE1hdGgucmFuZG9tKCkgKiAxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYW50SWNvblR3ZWVuLnBsYXkobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucGxhbnRJY29uVHdlZW4ucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUwMTJcdThCQTFcdTY1RjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYi50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyh0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID0gTWF0aC5jZWlsKCh0aGlzLm1hdHVyZVRpbWUgLSBEYXRlLm5vdygpKSAvIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA8IDApIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93bkxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTYyMTBcdTcxOUYgXCIpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KHRoaXMuZGF0YT8ucHJvZHVjdElkKT8ubWF0dXJlSWNvbjtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1aWxkSW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1N0I0OVx1N0VBN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxldmVsKCkge1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfbGV2ZWwke3RoaXMuZGF0YS5sZXZlbH0ucG5nYDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTFDRlx1NjVGNlx1OTVGNFx1ODg2OFx1NzNCMFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlZHVjZVRpbWVBbmk6IExheWEuVGltZUxpbmU7XHJcbiAgICAvKipcclxuICAgICAqIFx1NTJBMFx1OTAxRlxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5sYW5kX3NwZWVkX3VwKVxyXG4gICAgcHJpdmF0ZSBzcGVlZFVwKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGE/Lm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCAtPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiYWxsX3NwZWVkX3VwX3RpbWVcIilcclxuICAgICAgICAgICAgICAgIC52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCAqIDEwMDAgKyBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygxMSk7XHJcblxyXG4gICAgICAgICAgICAvL1x1NTFDRlx1NjVGNlx1OTVGNFx1NjNEMFx1NzkzQVxyXG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZS5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZS55ID0gLTM5O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVkdWNlVGltZUFuaSlcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZUFuaSA9IExheWEuVGltZUxpbmUudG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgeTogLTY5LCBhbHBoYTogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDMwMFxyXG4gICAgICAgICAgICAgICAgKS50byhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAtMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMDBcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWVBbmkucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1N0E3QVx1NTcxRlx1NTczMFxyXG4gICAgICovXHJcbiAgICBjbGVhckZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGEucHJvZHVjdElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmljb24uc2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25DbGljaygpIHtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlYWxGb29kKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgLy9cdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVpbGRJbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmIChUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KHRoaXMuZGF0YS5sZXZlbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiB0aGlzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxldmVsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MudHVkaXNoZW5namkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBBbmkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cEFuaS5wbGF5KDAsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU2RUUxXHU3RUE3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHU1REYyXHU2RUUxXHU3RUE3YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS5oaWRlR3VpZGVIYW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTUyQTBcdTkwMUZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNwZWVkVXBWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbih0aGlzLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTY1MzZcdTgzQjdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXRoZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vXHU3OUNEXHU4M0RDXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cdTg5RTNcdTk1MDFcdTU3MUZcdTU3MzBcclxuICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS5oaWRlR3VpZGVIYW5kKCk7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5BZGRMYW5kVmlldywge1xyXG4gICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmZpZWxkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5maWVsZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXR1cmVUaW1lTGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGFuZFNlcnZpY2UuYWRkTGFuZCh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS51cGRhdGVIaXRMYW5kQWRkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjUzNlx1ODNEQ1xyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2F0aGVyKCk6IFByb21pc2U8eyBwbGFudElkOiBudW1iZXI7IGFtb3VudDogbnVtYmVyOyBkaWFtb25kOiBudW1iZXIgfSB8IG51bGw+IHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBwbGFudEFtb3VudCA9IDAsXHJcbiAgICAgICAgICAgIHJld2FyZERpYW1vbmQgPSAwLFxyXG4gICAgICAgICAgICBwcm9kdWN0SWQgPSB0aGlzLmRhdGEucHJvZHVjdElkO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kR2F0aGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZ2F0aGVyXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiBbdGhpcy5kYXRhLmlkXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIChkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZHZlcnRpc2VUaW1lczogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiB7IHBsYW50SWQ6IG51bWJlcjsgYW1vdW50OiBudW1iZXI7IHJld2FyZERpYW1vbmQ6IG51bWJlciB9W107XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZCA9IGRhdGEubGlzdFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7IHBsYW50SWQ6IHByb2R1Y3RJZCwgYW1vdW50OiBkLmFtb3VudCwgZGlhbW9uZDogcmV3YXJkRGlhbW9uZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRBbW91bnQgPSBkLmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5hZGQocHJvZHVjdElkLCBkLmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmQgPSBkLnJld2FyZERpYW1vbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXRoZXJFdmVudChwcm9kdWN0SWQsIHBsYW50QW1vdW50LCByZXdhcmREaWFtb25kKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdhdGhlckV2ZW50KHByb2R1Y3RJZCwgcGxhbnRBbW91bnQsIHJld2FyZERpYW1vbmQgPSAwKSB7XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5zaG91Y2FpKTtcclxuICAgICAgICB0aGlzLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAvL1x1NjUzNlx1ODNCN1x1NzY4NFx1NjkwRFx1NzI2OVxyXG4gICAgICAgIGxldCBwbGFudE9iaiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChwcm9kdWN0SWQpLFxyXG4gICAgICAgICAgICByZXdhcmRMaXN0OiBhbnlbXSA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmo6IHBsYW50T2JqLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBwbGFudEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy9cdTgzQjdcdTVGOTdcdTc2ODRcdTk0QkJcdTc3RjNcclxuICAgICAgICBpZiAocmV3YXJkRGlhbW9uZCkge1xyXG4gICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5kaWFtb25kSWQpLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IHJld2FyZERpYW1vbmQsXHJcbiAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgbm9kZTogdGhpcy5vd25lcixcclxuICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICAgICAgY2FsbEJhY2s6ICgpID0+IHt9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoVXNlckluZm8uYWRUaW1lcyA+IDEwMCB8fCBVc2VySW5mby5jb250aW51b3VzQWRUaW1lcyA+IDIwKSB7XHJcbiAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAxIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhZFR5cGU6IDMgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJmdWxsX1NjcmVlblwiIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJib3R0b21fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzb3coKSB7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7XHJcbiAgICAgICAgICAgIHBhcm06IDxTaG9wVmlld0RhdGE+e1xyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7IGxhbmRJZDogdGhpcy5maWVsZElkIH0sXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoZDogUGxhbnREYXRhQmFzZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc293UGxhbnQoZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNvd1BsYW50KGQ6IFBsYW50RGF0YUJhc2UpIHtcclxuICAgICAgICB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpLnByb2R1Y3RJZCA9IGQuYmFzZS5pZDtcclxuICAgICAgICB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpLm1hdHVyZVRpbWVMZWZ0ID0gZC5iYXNlLm1hdHVyZV90aW1lO1xyXG4gICAgICAgIHRoaXMubWF0dXJlVGltZSA9IGQuYmFzZS5tYXR1cmVfdGltZSAqIDEwMDAgKyBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmxhbmRMaXN0LmdldCh0aGlzLmZpZWxkSWQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSgpO1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3Muemhvbmd6aGkpO1xyXG4gICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlQWxsU3RhdGVJY29uKHRoaXMuZGF0YS5pZCk7XHJcbiAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMTEpO1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJwbGFudFwiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUwNzdcdTgzRENcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBzdGVhbEZvb2QoZGF0YTogTGFuZE9iaikge1xyXG4gICAgICAgIGlmICghZGF0YS5wcm9kdWN0SWQgfHwgZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2FuU3RlYWwgfHwgKHRoaXMuc3RlYWxVaWQgJiYgIXRoaXMuZGF0YT8uY2FuU3RlYWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1REYyXHU3RUNGXHU0RTBEXHU1M0VGXHU1MDc3XCIpO1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1N0VEOVx1NjIxMVx1NzU1OVx1NzBCOVx1NTQyN1wiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmdvdWppYW9zaGVuZyk7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIC8vXHU1MDc3XHU4M0RDXHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFN0ZWFsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJsYW5kU3RlYWxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRJZDogW3RoaXMuZGF0YS5pZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICB1aWQ6IHRoaXMuc3RlYWxVaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIChkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpdGFsaXR5OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogeyBwbGFudElkOiBudW1iZXI7IGFtb3VudDogbnVtYmVyOyByZXdhcmREaWFtb25kOiBudW1iZXIgfVtdO1xyXG4gICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gZC52aXRhbGl0eTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZWFsRm9vZEV2ZW50KGQubGlzdFswXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKChjb2RlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IEVycm9yQ29kZS5fMjAwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTA3N1x1ODNEQ1x1NEU4Qlx1NEVGNlxyXG4gICAgICogQHBhcmFtIGRcclxuICAgICAqIEBwYXJhbSBkb2dcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHN0ZWFsRm9vZEV2ZW50KFxyXG4gICAgICAgIGQ6IHtcclxuICAgICAgICAgICAgcGxhbnRJZDogbnVtYmVyO1xyXG4gICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgLyoqIFx1OTg5RFx1NTkxNlx1NTk1Nlx1NTJCMSAqL1xyXG4gICAgICAgICAgICByZXdhcmREaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkb2c6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmRhdGEuY2FuU3RlYWwgPSAwO1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJTdGVhbHZlZ2V0YWJsZXNcIiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDA0KTtcclxuICAgICAgICB0aGlzLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG5cclxuICAgICAgICBNYWluVmlldy5pbnN0LnN0ZWFsQWxsLnJld2FyZERpYW1vbmQgKz0gZC5yZXdhcmREaWFtb25kO1xyXG5cclxuICAgICAgICAvL1x1NjUzNlx1ODNCN1x1NzY4NFx1NjkwRFx1NzI2OVxyXG4gICAgICAgIGNvbnN0IHJld2FyZExpc3Q6IGFueVtdID0gW107XHJcbiAgICAgICAgaWYgKGQucGxhbnRJZCkge1xyXG4gICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnNob3VjYWkpO1xyXG4gICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmFkZCh0aGlzLmRhdGEucHJvZHVjdElkLCBkLmFtb3VudCk7XHJcbiAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLnBsYW50SWQpLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IGQuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcG9zVHlwZTogMyxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL1x1OEJCMFx1NUY1NVx1NTIzMFx1NUM1NVx1NzkzQVxyXG4gICAgICAgICAgICBsZXQgaGFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgTWFpblZpZXcuaW5zdC5zdGVhbEFsbC5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWFpblZpZXcuaW5zdC5zdGVhbEFsbC5saXN0W3hdLnBsYW50SWQgPT0gZC5wbGFudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTWFpblZpZXcuaW5zdC5zdGVhbEFsbC5saXN0W3hdLmFtb3VudCArPSBkLmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBoYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaGFzKSB7XHJcbiAgICAgICAgICAgICAgICBNYWluVmlldy5pbnN0LnN0ZWFsQWxsLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogZC5wbGFudElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZC5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghZG9nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTk4OURcdUZGMENcdTg4QUJcdTcyRDdcdTU0QUNcdTRFODZ+fn5cdTZDQTFcdTUwNzdcdTc3NDB+XCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1x1OTg5RFx1NTkxNlx1NzY4NFx1OTRCQlx1NzdGM1x1NTk1Nlx1NTJCMVxyXG4gICAgICAgIGlmIChkLnJld2FyZERpYW1vbmQpIHtcclxuICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZGlhbW9uZElkKSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiBkLnJld2FyZERpYW1vbmQsXHJcbiAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXdhcmRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICBub2RlOiB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCkge1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXJBbGwodGhpcyk7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5wbGFudEljb25Ud2Vlbj8uZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGxhbnRJY29uVHdlZW4gPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgRmllbGRDb21wb25lbnQgZnJvbSBcInNyYy9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlZERvdFR5cGUgfSBmcm9tIFwic3JjL2NvbXBvbmVudHMvUmVkRG90Q29tcG9uZW50XCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSwgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGFudERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1OThERVx1OTFEMVx1NUUwMVx1NjU3MFx1OTFDRlx1N0VEM1x1Njc4NFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBHZXRGbG9hdFJld2FyZE9iaiB7XHJcbiAgICAvKiogXHU4RDc3XHU3MEI5XHU1M0MyXHU4MDAzXHU4MjgyXHU3MEI5IFx1OUVEOFx1OEJBNFx1NEYxQVx1NjI4QVx1NjU3MFx1OTFDRlx1NzY4NFx1NEUxQ1x1ODk3Rlx1NTJBMFx1NTIzMFx1OEZEOVx1OTFDQ1x1RkYwQ1x1NjI0MFx1NEVFNVx1NEUwRFx1ODk4MVx1NkRGQkhCb3hcdTYyMTZcdTY2MkZWQm94ICovXHJcbiAgICBub2RlOiBMYXlhLkJveDtcclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIGxpc3Q6IHtcclxuICAgICAgICAvKiogXHU4OUUzXHU2NzkwXHU3Njg0XHU4RDQ0XHU2RTkwXHU2NTcwXHU2MzZFIFx1NUZDNVx1OTg3Qlx1ODk4MVx1NjcwOWljb24gKi9cclxuICAgICAgICBvYmo6IGFueTtcclxuICAgICAgICAvKiogXHU2NTcwXHU5MUNGICovXHJcbiAgICAgICAgY291bnQ6IG51bWJlcjtcclxuICAgICAgICAvKiogXHU3RUM4XHU3MEI5XHU0RjREXHU3RjZFIDEgXHU5MUQxXHU1RTAxIDIgXHU5NEJCXHU3N0YzIDMgXHU0RUQzXHU1RTkzICovXHJcbiAgICAgICAgcG9zVHlwZTogMSB8IDIgfCAzO1xyXG4gICAgfVtdO1xyXG4gICAgbm90Rmx5PzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTUyQThcdTc1M0JcdTY0QURcdTY1M0VcdTdFRDNcdTY3NUZcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbGxCYWNrPzogeyAoKTogdm9pZCB9O1xyXG59XHJcblxyXG4vLyAgTWFpblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5WaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIHN0YXRpYyBpbnN0OiBNYWluVmlldztcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkTGFuZExheWVyLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRMYW5kTGF5ZXI6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZE5vZGUsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmROb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb2xkTm9kZSwgdGlwczpcIlx1OTFEMVx1NUUwMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29sZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmF2YXRhck5vZGUsIHRpcHM6XCJcdTU5MzRcdTUwQ0ZcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGF2YXRhck5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRCb3gsIHRpcHM6XCJcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxhbmRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjZW50ZXJCb3gsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTUzM0FcdTU3REZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm9yZGVyQm94LCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJvdHRvbUJveCwgdGlwczpcIlx1NUU5NVx1OTBFOFx1NjMwOVx1OTRBRVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYm90dG9tQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cmV3YXJkU2hhcmVHdWlkZSwgdGlwczpcIlx1NTk1Nlx1NTJCMVx1NUYxNVx1NUJGQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcmV3YXJkU2hhcmVHdWlkZTogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsYW5kVXBMYXllciwgdGlwczpcIlx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1N0E5N1x1NTNFM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGFuZFVwTGF5ZXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZhc3RHZXRCdG4sIHRpcHM6XCJcdTRFMDBcdTk1MkVcdTUwNzdcdTY1MzZcdTgzRENcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZhc3RHZXRCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BMYXllck9uU3RhZ2UsIHRpcHM6XCJcdTU3MjhcdTRFM0JcdTU3M0FcdTY2NkZcdTRFMEFcdTk3NjJcdTc2ODRcdTRFMDBcdTRFMkFcdTY3MDBcdTRFMEFcdTVDNDJcdTc2ODRcdTdBN0FcdTVDNDJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcExheWVyT25TdGFnZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wR29sZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTkxRDFcdTVFMDFpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BHb2xkSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dG9wRGlhbW9uZEljb24sIHRpcHM6XCJcdTk4NzZcdTkwRThcdTk0QkJcdTc3RjNpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BEaWFtb25kSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6d2FyZWhvdXNlQnRuLCB0aXBzOlwiXHU0RUQzXHU1RTkzXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB3YXJlaG91c2VCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1vbmV5TGIsIHRpcHM6XCJcdTdFQTJcdTUzMDVcdTY1ODdcdTY4NjNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1vbmV5TGI6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZ3VyZUJveCwgdGlwczpcIlx1NEVCQVx1NzI2OVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZmlndXJlQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmlndXJlQm94MiwgdGlwczpcIlx1NEVCQVx1NzI2OVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZmlndXJlQm94MjogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8vXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHVGRjBDXHU5OERFXHU3MjY5XHU1NEMxXHU3NkY4XHU1MTczXHJcbiAgICAvKiogQHByb3Age25hbWU6Z2V0UmV3YXJkUHJlZmFiLCB0aXBzOlwiXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHU5ODg0XHU4QkJFXCIsIHR5cGU6UHJlZmFifSovXHJcbiAgICBwcml2YXRlIGdldFJld2FyZFByZWZhYjogTGF5YS5QcmVmYWIgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZsb2F0UmV3YXJkSWNvbiwgdGlwczpcIlx1NTk1Nlx1NTJCMVx1OThERVx1NTJBOFx1NzUzQmljb25cIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgZmxvYXRSZXdhcmRJY29uOiBMYXlhLlByZWZhYiA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z29sZEFkZCwgdGlwczpcIlx1NkRGQlx1NTJBMFx1OTFEMVx1NUUwMVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29sZEFkZDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZEFkZCwgdGlwczpcIlx1NkRGQlx1NTJBMFx1OTRCQlx1NzdGM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZGlhbW9uZEFkZDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvSG9tZUJ0biwgdGlwczpcIlx1OEZENFx1NTZERVx1NUJCNlx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29Ib21lQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphbnlEb29yLCB0aXBzOlwiXHU1M0JCXHU4RjZDXHU4RjZDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhbnlEb29yOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp2aXRhbGl0eUJveCwgdGlwczpcIlx1NEY1M1x1NTI5Qlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdml0YWxpdHlCb3g6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5QnV5QnRuLCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU4RDJEXHU0RTcwXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eUJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTVCQTBcdTcyNjlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRCb3gsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldEJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8vXHU0RUZCXHU1MkExXHJcbiAgICAvKiogQHByb3Age25hbWU6dGFza0JveCwgdGlwczpcIlx1NEVGQlx1NTJBMVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGFza0JveDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzdGVwMSwgdGlwczpcIlx1OTcwMFx1ODk4MVx1NUYxNVx1NUJGQ1x1NzY4NFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3RlcDE6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzdGVwMiwgdGlwczpcIlx1OTcwMFx1ODk4MVx1NUYxNVx1NUJGQ1x1NzY4NFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3RlcDI6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzdGVwMywgdGlwczpcIlx1OTcwMFx1ODk4MVx1NUYxNVx1NUJGQ1x1NzY4NFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3RlcDM6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzdGVwNCwgdGlwczpcIlx1OTcwMFx1ODk4MVx1NUYxNVx1NUJGQ1x1NzY4NFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3RlcDQ6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzdGVwNSwgdGlwczpcIlx1OTcwMFx1ODk4MVx1NUYxNVx1NUJGQ1x1NzY4NFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3RlcDU6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzdGVwNiwgdGlwczpcIlx1OTcwMFx1ODk4MVx1NUYxNVx1NUJGQ1x1NzY4NFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3RlcDY6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzdGVwNywgdGlwczpcIlx1OTcwMFx1ODk4MVx1NUYxNVx1NUJGQ1x1NzY4NFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3RlcDc6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzdGVwOCwgdGlwczpcIlx1OTcwMFx1ODk4MVx1NUYxNVx1NUJGQ1x1NzY4NFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3RlcDg6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzdGVwOSwgdGlwczpcIlx1OTcwMFx1ODk4MVx1NUYxNVx1NUJGQ1x1NzY4NFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc3RlcDk6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU3RUM0XHU0RUY2IFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBsYW5kTGlzdDogRmllbGRDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICAgIC8qKlx1NjYyRlx1NTQyNlx1NTcyOFx1NTkxNlx1OTc2MiAqL1xyXG4gICAgaXNPdXRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLyoqIFx1NzlCQlx1NUYwMFx1NUJCNlx1NzY4NFx1NjVGNlx1OTVGNCAqL1xyXG4gICAgcHJpdmF0ZSBvdXRlclRpbWU6IG51bWJlcjtcclxuICAgIC8qKlx1NTNCQlx1NTk3RFx1NTNDQiBcdTVCQjZcdTUwMTJcdThCQTFcdTY1RjYgKi9cclxuICAgIG91dENvdW50RG93bk51bWJlciA9IDYwO1xyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgTWFpblZpZXcuaW5zdCA9IHRoaXM7XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAvLyBcInJlcy9sb2FkaW5nQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ193b29kdGl0bGUucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZUhvdXNlQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZWJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfc2hlbGYucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfbGFuZEJnLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9pbWdfaG91c2V0b3AucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2ltZ19ob21lcGFnZUJnMy5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX2hvbWVwYWdlQmcyLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyBcInJlcy9pbWdfaG9tZXBhZ2VCZzEucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19mYXJtbGFuZExvZ28ucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BsYW50X2ljb24ucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL3BldF9mZWVkLnBuZ1wiLFxyXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9tYWluX3NjZW5lLnBuZ1wiLFxyXG4gICAgICAgIF0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5lbmRzV2l0aChcInBuZ1wiKSkgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFzaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL1x1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1xyXG4gICAgICAgIGxldCBvayA9IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGVwID0gMDtcclxuICAgICAgICBpZiAoVXNlckluZm8uZ3VpZGVEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBVc2VySW5mby5ndWlkZURhdGEuc3BsaXQoXCJcIikuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGQgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGVwKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoc3RlcCA+PSA5KSB7XHJcbiAgICAgICAgICAgICAgICBvayA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFVc2VySW5mby5ndWlkZURhdGEubGVuZ3RoIHx8ICFvaykge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuR3VpZGVWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZUxpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwNixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwNyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwOSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lR3VpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lR3VpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3VpZEhhbmRBbmltYXRpb24oKTtcclxuICAgICAgICB0aGlzLmd1aWRlSGFuZC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mcmllbmRTaGFyZUd1aWRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMudG9wTGF5ZXJPblN0YWdlKTtcclxuICAgICAgICAodGhpcy5vcmRlckJveC5nZXRDaGlsZEJ5TmFtZShcImZyaWVuZF9uYW1lXCIpIGFzIExheWEuTGFiZWwpLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnZpdGFsaXR5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdvSG9tZUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5sYW5kQm94Lm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5wdXNoKHRoaXMubGFuZEJveC5nZXRDaGlsZEF0KHgpLmdldENvbXBvbmVudChGaWVsZENvbXBvbmVudCkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLm1haW5WaWV3Q29tID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGFuZExpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5maWVsZElkIC0gYi5maWVsZElkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9maWVsZCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGl0TGFuZEFkZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNyZWdpb24gXHU1Rjg1XHU2NzNBXHU1RjE1XHU1QkZDXHJcblxyXG4gICAgcHJpdmF0ZSBndWlkSGFuZEFuaTogTGF5YS5UaW1lTGluZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpndWlkZUhhbmQsIHRpcHM6XCJcdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcdTYyNEJcdTYzMDdcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGd1aWRlSGFuZDogTGF5YS5TcHJpdGUgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVGODVcdTY3M0FcdTUyOUZcdTgwRkRcdTVGMTVcdTVCRkNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB0aW1lR3VpZGUoKSB7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMudGltZUd1aWRlVG91Y2gpO1xyXG4gICAgICAgIHRoaXMudGltZUd1aWRlVG91Y2goKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRpbWVHdWlkZVRvdWNoKCkge1xyXG4gICAgICAgIExheWEudGltZXIuY2xlYXIodGhpcywgdGhpcy50aW1lR3VpZGVBY3Rpb24pO1xyXG4gICAgICAgIExheWEudGltZXIub25jZSgxNTAwMCwgdGhpcywgdGhpcy50aW1lR3VpZGVBY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ3VpZElkTGlzdCA9IFsxLCAyLCAzLCA1XTtcclxuICAgIHByaXZhdGUgaGFzR3VpZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVHdWlkZUFjdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXNHdWlkZSB8fCB0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVHdWlkZVRvdWNoKCk7XHJcbiAgICAgICAgdGhpcy5ndWlkZUhhbmQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVHdWlkZVRhc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlR3VpZGVIYW5kKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZGVIYW5kLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVHdWlkZSgpO1xyXG4gICAgICAgIHRoaXMuaGFzR3VpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUd1aWRlVGFzaygpIHtcclxuICAgICAgICBsZXQgbGFuZEVtcHR5ID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGxhbmQ6IEZpZWxkQ29tcG9uZW50LFxyXG4gICAgICAgICAgICB1bmxvY2tMYW5kOiBGaWVsZENvbXBvbmVudDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFuZExpc3RbeF0uZGF0YSAmJiAhdGhpcy5sYW5kTGlzdFt4XS5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgbGFuZEVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGFuZExpc3RbeF0uZGF0YT8ucHJvZHVjdElkICYmIHRoaXMubGFuZExpc3RbeF0uZGF0YT8ubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kID0gdGhpcy5sYW5kTGlzdFt4XTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL1x1NjhDMFx1NkQ0Qlx1NjcwOVx1NkNBMVx1NjcwOVx1NjcyQVx1ODlFM1x1OTUwMVx1N0E3QVx1NTczMFxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubGFuZExpc3RbeF0uZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdW5sb2NrTGFuZCA9IHRoaXMubGFuZExpc3RbeF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF1bmxvY2tMYW5kICYmIHRoaXMuZ3VpZElkTGlzdC5pbmRleE9mKDUpID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5ndWlkSWRMaXN0LnNwbGljZSh0aGlzLmd1aWRJZExpc3QuaW5kZXhPZig1KSwgMSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3VpZElkTGlzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhc0d1aWRlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcG9zID0geyB4OiAwLCB5OiAwIH07XHJcbiAgICAgICAgaWYgKGxhbmRFbXB0eSkge1xyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLmdldE5vZGVUb3BMYXllclBvcyh0aGlzLnN0ZXA0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWxhbmQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuZ3VpZElkTGlzdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmd1aWRJZExpc3QubGVuZ3RoKV07XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gdGhpcy5nZXROb2RlVG9wTGF5ZXJQb3MobGFuZC5vd25lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmdldE5vZGVUb3BMYXllclBvcyh0aGlzLnN0ZXA5KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3MueCArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuZ2V0Tm9kZVRvcExheWVyUG9zKHRoaXMuc3RlcDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy54ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3MueSArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gdGhpcy5nZXROb2RlVG9wTGF5ZXJQb3ModW5sb2NrTGFuZC5vd25lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ndWlkZUhhbmQucG9zKHBvcy54LCBwb3MueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROb2RlVG9wTGF5ZXJQb3Mobm9kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAobm9kZS5wYXJlbnQgYXMgYW55KS5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KG5vZGUueCwgbm9kZS55KSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHU2MjRCXHU2MzA3XHU1MkE4XHU3NTNCXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ3VpZEhhbmRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5ndWlkSGFuZEFuaSA9IExheWEuVGltZUxpbmUudG8odGhpcy5ndWlkZUhhbmQsIHsgcm90YXRpb246IC0xNSB9LCA0MDAsIG51bGwpLnRvKFxyXG4gICAgICAgICAgICB0aGlzLmd1aWRlSGFuZCxcclxuICAgICAgICAgICAgeyByb3RhdGlvbjogMCB9LFxyXG4gICAgICAgICAgICA0MDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ3VpZEhhbmRBbmkucGxheShudWxsLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb25cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NzkzQVx1NjYzRVx1NzkzQVx1NjI2OVx1NUVGQWljb25cclxuICAgICAqL1xyXG4gICAgdXBkYXRlSGl0TGFuZEFkZCgpIHtcclxuICAgICAgICBsZXQgZ3VpZExhbmQ6IEZpZWxkQ29tcG9uZW50O1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxhbmRMaXN0W3hdLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghZ3VpZExhbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBndWlkTGFuZCA9IHRoaXMubGFuZExpc3RbeF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUxNjhcdTRGNTNcdTUyQTBcdTkwMUZpY29uIFx1NTQ4QyBcdTY1MzZcdTgzRENpY29uIFx1NjY4Mlx1NjVGNlx1NjI4QVx1NEUyNFx1NEUyQVx1NjVCOVx1NkNENVx1NTE5OVx1NTcyOFx1NEUwMFx1OEQ3N1x1NEU4NlxyXG4gICAgICovXHJcbiAgICB1cGRhdGVBbGxTdGF0ZUljb24obGFuZElkPzogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxhbmRMaXN0W3hdLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pZCA9PSBsYW5kSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2V0U3RhdGVJY29uU2tpbigxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWxhbmRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnByb2R1Y3RJZCAmJiBkYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2V0U3RhdGVJY29uU2tpbigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5sYW5kTGlzdFt4XS5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHJvZHVjdElkICYmICFkYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBDb3JlLm9ic2VydmFibGVQcm9wZXJ0eVxyXG4gICAgICAgICAgICAud2F0Y2goVXNlckluZm8sIHRoaXMpXHJcbiAgICAgICAgICAgIC5rZXkoXCJkaWFtb25kXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYW1vbmROb2RlLnZhbHVlID0gZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubW9uZXlMYi52YWx1ZSA9IChlICogVXNlckluZm8ucHJvcG9ydGlvbikudG9GaXhlZCgyKSArIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAvL1x1NEUwRFx1NTZEQlx1ODIwRFx1NEU5NFx1NTE2NVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25leUxiLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAoZSAqIFVzZXJJbmZvLnByb3BvcnRpb24pLnRvU3RyaW5nKCkubWF0Y2goL15cXGQrKD86XFwuXFxkezAsMn0pPy8pICsgXCJcIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImdvbGRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29sZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiYXZhdGFyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkgdGhpcy5hdmF0YXJOb2RlLnNraW4gPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwid2FyZVBldElkXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJkb2dfYW5pXCIpIGFzIExheWEuQW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgKS5zb3VyY2UgPSBgcmVzL2RvZ18ke2V9LmF0bGFzYDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KGUpLmljb247XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcInBldFZpdGFsaXR5XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy9cdTY2RjRcdTY1QjBcdTVCQTBcdTcyNjlcdTRGNTNcdTUyOUJcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBldEJveC52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhciA9IHRoaXMucGV0Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImJveFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJ2aXRhbGl0eV9iYXJcIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gZSAvIFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5nZXQoVXNlckluZm8ud2FyZVBldElkKS52aXRhbGl0eV9tYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBiYXIud2lkdGggPSAxMzAgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LmdldENoaWxkQnlOYW1lKFwiYm94XCIpLmdldENoaWxkQnlOYW1lKFwiaHVuZ3J5XCIpIGFzIExheWEuSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICApLnZpc2libGUgPSAhZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImRpZ2VzdENvdW50RG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLCB0aGlzLmRpZ2VzdENvdW50RG93bik7XHJcbiAgICAgICAgICAgICAgICAvL1x1NUJBMFx1NzI2OVx1OTcwMFx1ODk4MVx1NkQ4OFx1ODAxN1x1OThERlx1NzI2OVx1NTAxMlx1OEJBMVx1NjVGNlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGV0Qm94LnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoZSAqIDEwMDAsIHRoaXMsIHRoaXMuZGlnZXN0Q291bnREb3duKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcInZpdGFsaXR5XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdml0YWxpdHkgPSBlIC8gQ29uZmlnR2FtZS51c2VyVml0YWxpdHlMaW1pdDtcclxuXHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX3JlZF9kb3QsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVkRG90VHlwZS5hbnlEb29yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGUpLFxyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZpdGFsaXR5ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXRhbGl0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudml0YWxpdHlCdXlCdG4ubW91c2VFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudml0YWxpdHlCdXlCdG4uZ3JheSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5tb3VzZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudml0YWxpdHlCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMudml0YWxpdHlCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPSAyNjggKiB2aXRhbGl0eTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTGFuZExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU9yZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVCQTBcdTcyNjlcdTdCMTFcdTZEODhcdTUzMTZcdTVCOUFcdTY1RjZcdTU2NjhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkaWdlc3RDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBwZXQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwZXRcIikuZ2V0KFVzZXJJbmZvLndhcmVQZXRJZCk7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLnBldFZpdGFsaXR5IC0gcGV0LnZpdGFsaXR5X2NvbnN1bWUgPD0gMCkge1xyXG4gICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgLT0gcGV0LnZpdGFsaXR5X2NvbnN1bWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IENvbmZpZ0dhbWUucGV0RGlnZXN0SW50ZXJ2YWxUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTRFM0JcdTc1NENcdTk3NjJcdTcwQjlcdTUxRkJcdTZCMjFcdTY1NzAgKi9cclxuICAgIHByaXZhdGUgY2xpY2tUaW1lcyA9IDA7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmFkVGltZXMgPiAxMDAgfHwgVXNlckluZm8uY29udGludW91c0FkVGltZXMgPiAyMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrVGltZXMrKztcclxuICAgICAgICAgICAgaWYgKCEodGhpcy5jbGlja1RpbWVzICUgNSkpIHtcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBhZFR5cGU6IDEgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBhZFR5cGU6IDMgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJmdWxsX1NjcmVlblwiIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiYm90dG9tX2FkdmVydGlzZW1lbnRcIiB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTGFuZExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidGFza1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gY2FzZSBcInNpZ25JblwiOlxyXG4gICAgICAgICAgICAgICAgLy8gICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibWFpbFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlR3VpZGVIYW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImhlYWRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TZXR0aW5nVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndhcmVob3VzZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLldhcmVob3VzZVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidXlfZmVlZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDIgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG9nX2hvdXNlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb2dfYW5pXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkaWFtb25kX2JveFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwibW9uZXlfcmVkX2JveFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDMgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib3JkZXJfYm94XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZnJpZW5kc1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuRnJpZW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxhbmRcIjpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZExldmVsVXBcIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc091dGVyKSB0aGlzLnN3aXRjaExhbmRMZXZlbFVwKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV91cFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hMYW5kTGV2ZWxVcChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFueV9kb29yXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9OZWlnaGJvcigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19ob21lXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvSG9tZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRfdml0YWxpdHlcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5Vml0YWxpdHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmV3YXJkX3NoYXJlX2d1aWRlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvRnJpZW5kUmV3YXJkVmlldygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmYXN0X2dldFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5mYXN0R2V0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxRkFcdTUzQkJcdTRFMDBcdTZCMjFcdTUwNzdcdTc2ODRcdTYyNDBcdTY3MDlcdTRFMUNcdTg5N0ZcdTk2QzZcdTU0MDhcclxuICAgICAqL1xyXG4gICAgc3RlYWxBbGw6IHtcclxuICAgICAgICBsaXN0OiB7IHBsYW50SWQ6IG51bWJlcjsgYW1vdW50OiBudW1iZXIgfVtdO1xyXG4gICAgICAgIHJld2FyZERpYW1vbmQ6IG51bWJlcjtcclxuICAgICAgICBuaWNrbmFtZTogc3RyaW5nO1xyXG4gICAgfSA9IHsgbGlzdDogW10sIHJld2FyZERpYW1vbmQ6IDAsIG5pY2tuYW1lOiBudWxsIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTRFMDBcdTk1MkVcdTY1MzZcdTUwNzdcdTkxQzdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBmYXN0R2V0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIC8vXHU1MDc3XHU4M0RDXHJcbiAgICAgICAgICAgIGxldCBsYW5kczogbnVtYmVyW10gPSBbXSxcclxuICAgICAgICAgICAgICAgIGxhbmRDb21MaXN0OiBGaWVsZENvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLmRhdGE/LnByb2R1Y3RJZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmxhbmRMaXN0W3hdLmRhdGE/Lm1hdHVyZVRpbWVMZWZ0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5kYXRhPy5jYW5TdGVhbFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZHMucHVzaCh0aGlzLmxhbmRMaXN0W3hdLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRDb21MaXN0LnB1c2godGhpcy5sYW5kTGlzdFt4XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFsYW5kcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2Q0ExXHU2NzA5XHU1M0VGXHU0RUU1XHU1MDc3XHU3Njg0XCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kU3RlYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJsYW5kU3RlYWxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IGxhbmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGxhbmRDb21MaXN0WzBdLnN0ZWFsVWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgKGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdml0YWxpdHk6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudml0YWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQubGlzdC5mb3JFYWNoKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kQ29tTGlzdFtpXS5zdGVhbEZvb2RFdmVudChkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZGlhbW9uZCA9IDAsXHJcbiAgICAgICAgICAgICAgICBsaXN0OiB7IHBsYW50SWQ6IG51bWJlcjsgYW1vdW50OiBudW1iZXIgfVtdID0gW10sXHJcbiAgICAgICAgICAgICAgICBsYW5kczogbnVtYmVyW10gPSBbXSxcclxuICAgICAgICAgICAgICAgIGxhbmRDb21MaXN0OiBGaWVsZENvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhbmRMaXN0W3hdLmRhdGE/LnByb2R1Y3RJZCAmJiAhdGhpcy5sYW5kTGlzdFt4XS5kYXRhPy5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRzLnB1c2godGhpcy5sYW5kTGlzdFt4XS5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kQ29tTGlzdC5wdXNoKHRoaXMubGFuZExpc3RbeF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxhbmRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTZDQTFcdTY3MDlcdTYyMTBcdTcxOUZcdTc2ODRcdTUxOUNcdTRGNUNcdTcyNjlcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kR2F0aGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZ2F0aGVyXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiBsYW5kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIChkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZHZlcnRpc2VUaW1lczogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFudElkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQubGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFtb25kICs9IGRhdGEucmV3YXJkRGlhbW9uZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UuYWRkKGRhdGEucGxhbnRJZCwgZGF0YS5hbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0W3hdLnBsYW50SWQgPT0gZGF0YS5wbGFudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RbeF0uYW1vdW50ICs9IGRhdGEuYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogZGF0YS5wbGFudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuR2F0aGVyRGVzY1ZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbW9uZDogZGlhbW9uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZG91YmxlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtdWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG91YmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQubGlzdC5mb3JFYWNoKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG91YmxlKSBXYXJlaG91c2VTZXJ2aWNlLmFkZChkYXRhLnBsYW50SWQsIGRhdGEuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRDb21MaXN0W2ldLmdhdGhlckV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucGxhbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFtb3VudCAqIG11bCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJld2FyZERpYW1vbmQgKiBtdWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU3OUNEXHU4M0RDICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGFudF9zb3cpXHJcbiAgICBwcml2YXRlIHNvdyhzaG93VmlldzogYm9vbGVhbiA9IGZhbHNlLCBkOiBQbGFudERhdGFCYXNlKSB7XHJcbiAgICAgICAgbGV0IGVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sYW5kTGlzdFt4XT8uZGF0YT8ucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1ZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNvd1BsYW50KGQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTZDQTFcdTY3MDlcdTdBN0FcdTc2ODRcdTU3MUZcdTU3MzBcdTU0RTZcdUZGMDFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5TGFuZElkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZExpc3QpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFuZExpc3RbeF0uZGF0YSAmJiAhdGhpcy5sYW5kTGlzdFt4XS5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZExpc3RbeF0uZmllbGRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1OTBBRVx1NEVGNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9wZW5NYWlsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5tYWlsTGlzdCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IE1haWxSZXR1cm5EYXRhW10pID0+IHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5NYWlsVmlldywgeyBwYXJtOiBkIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU5N0RcdTUzQ0IgXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLm9wZW5fZnJpZW5kKVxyXG4gICAgcHJpdmF0ZSBvcGVuRnJpZW5kKHR5cGUgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZExpc3QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkOiBGcmllbmRMaXN0RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc1ZpZXcsIHsgcGFybTogeyBmcmllbmREYXRhOiBkLCB0eXBlOiB0eXBlIH0gfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThEMkRcdTRFNzBcdTRGNTNcdTUyOUJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidXlWaXRhbGl0eSgpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4QkEyXHU1MzU1XHU5NjFGXHU1MjE3ICovXHJcbiAgICBwcml2YXRlIG9yZGVyUXVldWVJbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTRFMERcdTkxQ0RcdTU5MERcdTVGMzlcdTk4ODZcdTUzRDZcdThCQTJcdTUzNTVcdTU5NTZcdTUyQjFcdTVGMzlcdTdBOTcgKi9cclxuICAgIGhpbmRPcmRlckxldmVsOiBudW1iZXIgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdThCQTJcdTUzNTVcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMudXBkYXRlX09yZGVyKVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVPcmRlcigpIHtcclxuICAgICAgICAvLyByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGJveCA9IHRoaXMub3JkZXJCb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmRlcl9ib3hcIiksXHJcbiAgICAgICAgICAgIGQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJvcmRlclwiKS5nZXQoVXNlckluZm8ub3JkZXJMZXZlbCArIDEpLFxyXG4gICAgICAgICAgICByZXdhcmQ6IFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgICAgICAgICAgcmV3YXJkQ291bnQ6IG51bWJlciA9IDAsXHJcbiAgICAgICAgICAgIHJld2FyZERpYW1vbmRDb3VudDogbnVtYmVyID0gMCxcclxuICAgICAgICAgICAgY3VyQ291bnQgPSAwLFxyXG4gICAgICAgICAgICBtYXhDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gMDtcclxuICAgICAgICBpZiAoIWQpIHJldHVybiBjb25zb2xlLmxvZyhcIlx1N0I0OVx1N0VBN1x1NURGMlx1NUI4Q1wiKTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDQ7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGJveC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fXCIgKyB4KSBhcyBMYXlhLkJveDtcclxuXHJcbiAgICAgICAgICAgIGlmIChkLmNvbmRpdGlvblt4XSkge1xyXG4gICAgICAgICAgICAgICAgY3VyQ291bnQgPSBXYXJlaG91c2VTZXJ2aWNlLmdldE9uZShkLmNvbmRpdGlvblt4XS5wbGFudC5pZCk/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgICAgICAgICBtYXhDb3VudCA9IGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJDb3VudCA+PSBtYXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmNvbmRpdGlvblt4XS5wbGFudC5pY29uO1xyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke2N1ckNvdW50fS8ke21heENvdW50fWA7XHJcbiAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICAgICAgODcgKiAoY3VyQ291bnQgLyBtYXhDb3VudCA+IDEgPyAxIDogY3VyQ291bnQgLyBtYXhDb3VudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkLmNvbmRpdGlvblt4XS5wbGFudC5nYWluLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5vYmouaWQgPT09IENvbmZpZ0dhbWUuZ29sZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmQgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICs9IGUuY291bnQgKiBtYXhDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kQ291bnQgKz0gZS5jb3VudCAqIG1heENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXdhcmQpIHtcclxuICAgICAgICAgICAgbGV0IGdvbGRCb3ggPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgICAgIGRpYW1vbmRCb3ggPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJkaWFtb25kX2JveFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAgICAgKGdvbGRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSByZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgIChnb2xkQm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBgJHtcclxuICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICsgTWF0aC5yb3VuZChyZXdhcmRDb3VudCAqIGQuY29tbWlzc2lvbilcclxuICAgICAgICAgICAgfWA7XHJcblxyXG4gICAgICAgICAgICBpZiAoZC5leHRyYVJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgKGRpYW1vbmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmV4dHJhUmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgKGRpYW1vbmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGAke1xyXG4gICAgICAgICAgICAgICAgICAgIGQuZXh0cmFSZXdhcmQuY291bnQgK1xyXG4gICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmRDb3VudCArXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChyZXdhcmREaWFtb25kQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgICAgICB9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBkaWFtb25kQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZ29sZEJveC55ID0gNDY7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnb2xkQm94LnkgPSA2NjtcclxuICAgICAgICAgICAgICAgIGRpYW1vbmRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwibmFtZV90aXRsZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1NUI4Q1x1NjIxMCR7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxXHJcbiAgICAgICAgfVx1N0VBN1x1OEJBMlx1NTM1NWA7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5vcmRlclF1ZXVlSW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PSBkLmNvbmRpdGlvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGQuY29uZGl0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlclF1ZXVlSW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBhZERpYW1vbmQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmV4dHJhUmV3YXJkLmNvdW50ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZENvdW50ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChyZXdhcmREaWFtb25kQ291bnQgKiBkLmNvbW1pc3Npb24pLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkR29sZCA9IHJld2FyZENvdW50ICsgTWF0aC5yb3VuZChyZXdhcmRDb3VudCAqIGQuY29tbWlzc2lvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9yZWRfZG90LCBbUmVkRG90VHlwZS5vcmRlciwgdHJ1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGluZE9yZGVyTGV2ZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyUXVldWVJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5oaW5kT3JkZXJMZXZlbCA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkdhdGhlckRlc2NWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFtb25kOiBhZERpYW1vbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb2xkOiBhZEdvbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6IChkb3VibGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGluZE9yZGVyTGV2ZWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLnJlZHVjZUFtb3VudChlLnBsYW50LmlkLCBlLmNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlclF1ZXVlSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5vcmRlckxldmVsKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5nb2xkSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBhZEdvbGQgKiAoZG91YmxlID8gMiA6IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkLmV4dHJhUmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChkLmV4dHJhUmV3YXJkLm9iai5pZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBhZERpYW1vbmQgKiAoZG91YmxlID8gMiA6IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5R2V0UmV3YXJkQW5pKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBib3guZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkX2JveFwiKSBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb3VibGUgJiYgIShVc2VySW5mby5vcmRlckxldmVsICUgMykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMzAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJmdWxsX1NjcmVlblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUV2ZW50OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyUXVldWVJbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX3JlZF9kb3QsIFtSZWREb3RUeXBlLm9yZGVyLCBmYWxzZV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMDdcdTYzNjJcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN3aXRjaExhbmRMZXZlbFVwKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYmcgPSB0aGlzLmxhbmRVcExheWVyLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVHdWlkZUhhbmQoKTtcclxuICAgICAgICAgICAgYmcuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKGJnLCB7IGFscGhhOiAwLjc1IH0sIDE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYW5kX291dGVyXCIpLmFkZENoaWxkKHRoaXMubGFuZEJveCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRhYmxlQW5hbHl6ZS50YWJsZShcImxhbmRMZXZlbFwiKS5nZXQoZS5kYXRhLmxldmVsICsgMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbigyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50b3BTdGF0ZUljb25BbmkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZS5idWlsZEluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBiZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyQm94LmFkZENoaWxkKHRoaXMubGFuZEJveCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd1RpbWVCb3godHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZS5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jbGVhckZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNsZWFyRmllbGQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLmJ1aWxkSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oZS5kYXRhLm1hdHVyZVRpbWVMZWZ0ID8gMSA6IDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlLnRvcFN0YXRlSWNvbkFuaShCb29sZWFuKGUuZGF0YS5wcm9kdWN0SWQpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU4M0I3XHU1M0Q2XHU1OTU2XHU1MkIxXHU1MkE4XHU3NTNCXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZClcclxuICAgIHByaXZhdGUgcGxheUdldFJld2FyZEFuaShvYmo6IEdldEZsb2F0UmV3YXJkT2JqKSB7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iai5jYWxsQmFjaykgb2JqLmNhbGxCYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9iai5saXN0LmZvckVhY2goKGQsIGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IExheWEuQm94ID0gTGF5YS5Qb29sLmdldEl0ZW1CeUNyZWF0ZUZ1bihcclxuICAgICAgICAgICAgICAgIFwiZmxvYXRSZXdhcmRCb3hcIixcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmV3YXJkUHJlZmFiLmNyZWF0ZSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmV3YXJkUHJlZmFiXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBub2RlLnkgPSBvYmoubm9kZS5nZXRfaGVpZ2h0KCkgKiBvYmoubm9kZS5hbmNob3JZIC0gaSAqIDYwO1xyXG4gICAgICAgICAgICAvLyBub2RlLnggPSBvYmoubm9kZS5nZXRfd2lkdGgoKSAqIG9iai5ub2RlLmFuY2hvclg7XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgaWNvbi5za2luID0gZC5vYmo/Lmljb24gfHwgXCJcIjtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gODAgLyBpY29uLndpZHRoO1xyXG4gICAgICAgICAgICBpY29uLnNjYWxlKHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgICAgIG5vZGUuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmoubm9kZS5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KCkpKTtcclxuICAgICAgICAgICAgLy8gb2JqLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBub2RlTmV3UG9zID0gdGhpcy50b3BMYXllck9uU3RhZ2UuZ2xvYmFsVG9Mb2NhbChcclxuICAgICAgICAgICAgICAgIG9iai5ub2RlLmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQoKSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIG5vZGUucG9zKG5vZGVOZXdQb3MueCArIG9iai5ub2RlLmdldF93aWR0aCgpICogb2JqLm5vZGUuYW5jaG9yWCwgbm9kZU5ld1Bvcy55IC0gaSAqIDYwKTtcclxuICAgICAgICAgICAgdGhpcy50b3BMYXllck9uU3RhZ2UuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIChub2RlLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBcInhcIiArIGQuY291bnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9iaj8ubm90Rmx5KSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGQucG9zVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRHb2xkRGlhbW9uZEFuaSh0aGlzLmdvbGRBZGQsIGQuY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkR29sZERpYW1vbmRBbmkodGhpcy5kaWFtb25kQWRkLCBkLmNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICAgICAgeyB5OiBub2RlLnkgLSA0MCwgYWxwaGE6IDEgfSxcclxuICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgKGU6IExheWEuQm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlcihcImZsb2F0UmV3YXJkQm94XCIsIGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb2NhbFBvc0ljb24gPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUubG9jYWxUb0dsb2JhbChMYXlhLlBvaW50LmNyZWF0ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoubm90Rmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsb2F0SWNvbjogTGF5YS5JbWFnZSA9IExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXRSZXdhcmRJY29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXRSZXdhcmRJY29uLmNyZWF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9hdFJld2FyZEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5za2luID0gZC5vYmouaWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnBvcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQb3NJY29uLnggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIwICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFBvc0ljb24ueSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjAgKiAoTWF0aC5yYW5kb20oKSA8IDAuNSA/IDEgOiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmFkZENoaWxkKGZsb2F0SWNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLnpPcmRlciA9IDk5OTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcEljb246IExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkLnBvc1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wR29sZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMudG9wRGlhbW9uZEljb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wSWNvbiA9IHRoaXMud2FyZWhvdXNlQnRuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wR29sZEljb25Qb3MgPSB0b3BJY29uLmxvY2FsVG9HbG9iYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLlBvaW50KHRvcEljb24ud2lkdGggLyAyLCB0b3BJY29uLmhlaWdodCAvIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3MgPSB0aGlzLnRvcExheWVyT25TdGFnZS5nbG9iYWxUb0xvY2FsKHRvcEdvbGRJY29uUG9zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRJY29uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IGxvY2FsUG9zLngsIHk6IGxvY2FsUG9zLnkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tJbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZTogTGF5YS5JbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuUG9vbC5yZWNvdmVyKFwiZmxvYXRSZXdhcmRJY29uXCIsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmbG9hdEljb25dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1MCAqIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFtub2RlXVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIDUwICogaSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRHb2xkRGlhbW9uZEFuaShub2RlLCBjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgbm9kZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBub2RlLmFscGhhID0gMDtcclxuICAgICAgICBub2RlLnZhbHVlID0gYCske2NvdW50fWA7XHJcbiAgICAgICAgbm9kZS55ID0gMzA7XHJcbiAgICAgICAgbm9kZS5vZmZBbGwoKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICB7IGFscGhhOiAxLCB5OiAtMzAgfSxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgyMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hbHBoYSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU3NzBCXHU1RTdGXHU1NDRBXHU0RUU1XHU1NDBFXHU3Njg0XHU1OTU2XHU1MkIxXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZClcclxuICAgIHByaXZhdGUgcGxheUFkUmV3YXJkKHRhcmdldCwgYWRSZXdhcmQ6IFJldHVyblVzZXJJbmZvW1wiYWRSZXdhcmRcIl0pIHtcclxuICAgICAgICBsZXQgcmV3YXJkTGlzdCA9IFtdO1xyXG4gICAgICAgIGFkUmV3YXJkPy5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQuaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgPyAyIDogMSk7XHJcbiAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChkLmlkKSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiBkLmFtb3VudCxcclxuICAgICAgICAgICAgICAgIHBvc1R5cGU6IGQuaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgPyAxIDogMixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgbm9kZTogdGFyZ2V0LFxyXG4gICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfdGFzaylcclxuICAgIHByaXZhdGUgdXBkYXRlVGFzaygpIHtcclxuICAgICAgICBjb25zdCBib3g6IExheWEuSW1hZ2UgPSB0aGlzLnRhc2tCb3gsXHJcbiAgICAgICAgICAgIGljb24gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGFtb3VudEZvbnQgPSBpY29uLmdldENoaWxkQnlOYW1lKFwiYW1vdW50Rm9udFwiKSBhcyBMYXlhLkZvbnRDbGlwLFxyXG4gICAgICAgICAgICBkZXNjID0gYm94LmdldENoaWxkQnlOYW1lKFwibGJcIikgYXMgTGF5YS5MYWJlbCxcclxuICAgICAgICAgICAgbGlzdCA9IFRhc2tTZXJ2aWNlLmdldExpc3QoKSxcclxuICAgICAgICAgICAgdGFzayA9IGxpc3RbMF07XHJcbiAgICAgICAgaWYgKHRhc2sucmVjZWl2ZSA9PSAxIHx8IHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICBib3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBkZXNjLnRleHQgPSBgXHU0RUZCXHU1MkExOiR7dGFzay5iYXNlLmRlc2N9KCR7XHJcbiAgICAgICAgICAgIHRhc2sudGltZXMgPiB0YXNrLmJhc2UudGltZXMgPyB0YXNrLmJhc2UudGltZXMgOiB0YXNrLnRpbWVzXHJcbiAgICAgICAgfS8ke3Rhc2suYmFzZS50aW1lc30pYDtcclxuICAgICAgICBhbW91bnRGb250LnZhbHVlID0gXCJ4XCIgKyB0YXNrLmJhc2UucmV3YXJkLmNvdW50O1xyXG4gICAgICAgIGljb24uc2tpbiA9IHRhc2suYmFzZS5yZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgYm94LndpZHRoID0gZGVzYy53aWR0aCArIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTZERVx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdvSG9tZSgpIHtcclxuICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcodHJ1ZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmdvSG9tZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGNsZWFyOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU1NkRFXHU2NzY1XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb0hvbWVOb2RlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU2REVcdTVCQjZcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMuZ29faG9tZSlcclxuICAgIHByaXZhdGUgZ29Ib21lTm9kZURhdGEodXBkYXRlT3V0VGltZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHVwZGF0ZU91dFRpbWUpIHtcclxuICAgICAgICAgICAgLy9cdThGRDlcdTkxQ0NcdTRFM0JcdTg5ODFcdTY2MkZcdTRFM0FcdTRFODZcdTU5MDRcdTc0MDZcdTU5N0RcdTUzQ0JcdThCQkZcdTk1RUVcdTU5MzFcdThEMjVcdUZGMENcdTY2RjRcdTY1QjBcdTc5QkJcdTVGMDBcdTY1RjZcdTk1RjRcclxuICAgICAgICAgICAgdGhpcy5vdXRlclRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzT3V0ZXIgPSBmYWxzZTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMzAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29GcmllbmQobnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSGl0TGFuZEFkZCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RlYWxBbGwubGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChVc2VySW5mby5hZFRpbWVzID4gMTAwIHx8IFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzID4gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBhZFR5cGU6IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImZ1bGxfU2NyZWVuXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiYm90dG9tX2FkdmVydGlzZW1lbnRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5HYXRoZXJEZXNjVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5zdGVhbEFsbC5saXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFtb25kOiB0aGlzLnN0ZWFsQWxsLnJld2FyZERpYW1vbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiB0aGlzLnN0ZWFsQWxsLm5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiBhc3luYyAoZG91YmxlOiBib29sZWFuLCB0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb3VibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFudElkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFJld2FyZDogeyBpZDogbnVtYmVyOyBhbW91bnQ6IG51bWJlciB9W107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmVydGlzZVRpbWVzOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYW1vbmQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29sZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gPSBhd2FpdCBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFN0ZWFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImxhbmRTdGVhbFwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGREaWFtb25kID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1x1NjUzNlx1ODNCN1x1NzY4NFx1NjkwRFx1NzI2OVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJld2FyZExpc3Q6IGFueVtdID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UuYWRkKGQucGxhbnRJZCwgZC5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5kaWFtb25kICs9IGQucmV3YXJkRGlhbW9uZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkRGlhbW9uZCArPSBkLnJld2FyZERpYW1vbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLnBsYW50SWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGQuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXdhcmRMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldEZsb2F0UmV3YXJkT2JqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYWRSZXdhcmQuZm9yRWFjaCgoZGF0YSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkRGlhbW9uZCAmJiBkYXRhLmlkID09IENvbmZpZ0dhbWUuZGlhbW9uZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFtb3VudCArPSBhZGREaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuYWRSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuR2F0aGVyRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1M0JCXHU5MEJCXHU1QzQ1XHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ29Ub05laWdoYm9yKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUd1aWRlSGFuZCgpO1xyXG4gICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyh0cnVlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlYWxBbGwgPSB7IGxpc3Q6IFtdLCByZXdhcmREaWFtb25kOiAwLCBuaWNrbmFtZTogbnVsbCB9O1xyXG5cclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5uZWlnaGJvcixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZDogUmV0dXJuTmVpZ2hib3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NzlCQlx1NUYwMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb0ZyaWVuZChkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMuZ29fZnJpZW5kX2hvbWUpXHJcbiAgICBwcml2YXRlIGdvRnJpZW5kTGlzdGVuKGQ6IFJldHVybk5laWdoYm9yLCBmcmllbmREYXRhOiBGcmllbmREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5vdXRDb3VudERvd25OdW1iZXIgPSA2MDtcclxuICAgICAgICBpZiAoIXRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZWFsQWxsID0geyBsaXN0OiBbXSwgcmV3YXJkRGlhbW9uZDogMCwgbmlja25hbWU6IG51bGwgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc091dGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdvRnJpZW5kKGQsIGZyaWVuZERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1M0JCXHU2NzBCXHU1M0NCXHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ29GcmllbmQoZD86IFJldHVybk5laWdoYm9yLCBmcmllbmREYXRhPzogRnJpZW5kRGF0YSkge1xyXG4gICAgICAgIGxldCBsYW5kcyA9IHRoaXMubGFuZExpc3QsXHJcbiAgICAgICAgICAgIHVzZXJMYW5kcyA9IExhbmRTZXJ2aWNlLmxpc3Q7XHJcbiAgICAgICAgbGV0IG90aGVyTGFuZHM6IE1hcDxudW1iZXIsIExhbmRPYmo+ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgZC5sYW5kcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvdGhlckxhbmRzLnNldChlLmlkLCBlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm91dGVyVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMudml0YWxpdHlCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ib21lQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFueURvb3IudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVzZXJMYW5kcy5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkLm1hdHVyZVRpbWVMZWZ0IC09IChEYXRlLm5vdygpIC0gdGhpcy5vdXRlclRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIGlmIChkLm1hdHVyZVRpbWVMZWZ0IDwgMCkgZC5tYXR1cmVUaW1lTGVmdCA9IDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnZpdGFsaXR5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hbnlEb29yLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxhbmRzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhbmQgPSBsYW5kc1t4XTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGxhbmQuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnN0ZWFsVWlkID0gZC51aWQ7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnVwZGF0ZURhdGEoeyBsaXN0OiBvdGhlckxhbmRzIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkLnByb3RlY3RlZFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZC50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kLmNhblN0ZWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxhbmQuY2FuU3RlYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhbmQuaXNPdXRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZC5zdGVhbFVpZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBsYW5kLnVwZGF0ZURhdGEoeyBsaXN0OiBudWxsIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYW5kLnBsYW50SWNvbkFuaShCb29sZWFuKGxhbmQuZGF0YT8ucHJvZHVjdElkKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIC8vXHU5NjkwXHU4NUNGXHU0RUZCXHU1MkExXHJcbiAgICAgICAgICAgIHRoaXMudGFza0JveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9cdTY2M0VcdTc5M0FcdTRFRkJcdTUyQTFcclxuICAgICAgICAgICAgdGhpcy50YXNrQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVGcmllbmRWaWV3KGQsIGZyaWVuZERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1M0JCXHU1OTdEXHU1M0NCXHU1QkI2XHU4RkQ4XHU2NjJGXHU4MUVBXHU1REYxXHU1QkI2XHU3Njg0XHU3NTRDXHU5NzYyXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlRnJpZW5kVmlldyhkPzogUmV0dXJuTmVpZ2hib3IsIGZyaWVuZERhdGE/OiBGcmllbmREYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgbmlja25hbWUgPSBkPy5uaWNrbmFtZSxcclxuICAgICAgICAgICAgcGVkSWQgPSBkPy5kb2dJZCxcclxuICAgICAgICAgICAgYXZhdGFyID0gZnJpZW5kRGF0YT8uYXZhdGFyIHx8IGQ/LmF2YXRhcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhhdmF0YXIpO1xyXG5cclxuICAgICAgICBjb25zdCB0b3BCb3ggPSB0aGlzLm9yZGVyQm94LnBhcmVudCBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgbW9uZXlCb3ggPSB0b3BCb3guZ2V0Q2hpbGRCeU5hbWUoXCJtb25leV9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGNvdW50RG93biA9IHRvcEJveC5nZXRDaGlsZEJ5TmFtZShcImNvdW50X2Rvd25cIikgYXMgTGF5YS5MYWJlbCxcclxuICAgICAgICAgICAgb3JkZXJCb3ggPSB0aGlzLm9yZGVyQm94LmdldENoaWxkQnlOYW1lKFwib3JkZXJfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBmcmllbmROYW1lID0gdGhpcy5vcmRlckJveC5nZXRDaGlsZEJ5TmFtZShcImZyaWVuZF9uYW1lXCIpIGFzIExheWEuTGFiZWwsXHJcbiAgICAgICAgICAgIGJvdHRvbUxpc3Q6IExheWEuSW1hZ2VbXSA9IFtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tQm94LmdldENoaWxkQnlOYW1lKFwidGFza1wiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmRlcl9ib3hcIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYm90dG9tQm94LmdldENoaWxkQnlOYW1lKFwiZnJpZW5kc1wiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJtYWlsXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICBmcmllbmROYW1lLnRleHQgPSBgJHtuaWNrbmFtZX1cdTc2ODRcdTUxOUNcdTU3M0FgO1xyXG4gICAgICAgICAgICBvcmRlckJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZyaWVuZE5hbWUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1vbmV5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY291bnREb3duLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGVhbEFsbC5uaWNrbmFtZSA9IG5pY2tuYW1lO1xyXG5cclxuICAgICAgICAgICAgY291bnREb3duLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMub3V0Q291bnREb3duTnVtYmVyKTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5sb29wKDEwMDAsIHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQsIFtjb3VudERvd25dKTtcclxuICAgICAgICAgICAgaWYgKGF2YXRhcikgdGhpcy5hdmF0YXJOb2RlLnNraW4gPSBhdmF0YXI7XHJcbiAgICAgICAgICAgIGlmIChwZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJkb2dfYW5pXCIpIGFzIExheWEuQW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICApLnNvdXJjZSA9IGByZXMvZG9nXyR7cGVkSWR9LmF0bGFzYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAodGhpcy5wZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIikgYXMgTGF5YS5JbWFnZSkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmZpZ3VyZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmlndXJlQm94Mi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmFzdEdldEJ0bi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19vbmdrZXlTdGVlbC5wbmdcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhc3RHZXRCdG4uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfb25na2V5R2V0LnBuZ1wiO1xyXG4gICAgICAgICAgICB0aGlzLmZpZ3VyZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWd1cmVCb3gyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm91dENvdW50RG93bk51bWJlciA9IDYwO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQpO1xyXG4gICAgICAgICAgICBvcmRlckJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZnJpZW5kTmFtZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1vbmV5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb3VudERvd24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8uYXZhdGFyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IFVzZXJJbmZvLmF2YXRhcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhdGFyTm9kZS5za2luID0gYG1haW5fc2NlbmUvaW1nX2RlZmF1bHRQb3J0cmFpdC5wbmdgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby53YXJlUGV0SWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LmdldENoaWxkQnlOYW1lKFwiZG9nX2FuaVwiKSBhcyBMYXlhLkFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgKS5zb3VyY2UgPSBgcmVzL2RvZ18ke1VzZXJJbmZvLndhcmVQZXRJZH0uYXRsYXNgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICh0aGlzLnBldEJveC5nZXRDaGlsZEJ5TmFtZShcImJveFwiKSBhcyBMYXlhLkltYWdlKS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm90dG9tTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuZGlzYWJsZWQgPSB0aGlzLmlzT3V0ZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cdTUwMTJcdThCQTFcdTY1RjZcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTAxMlx1OEJBMVx1NjVGNlx1N0VEM1x1Njc1RlxyXG4gICAgICogQHBhcmFtIGxiXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb3V0Q291bnREb3duRXZlbnQobGI6IExheWEuTGFiZWwpIHtcclxuICAgICAgICB0aGlzLm91dENvdW50RG93bk51bWJlci0tO1xyXG4gICAgICAgIGxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMub3V0Q291bnREb3duTnVtYmVyKTtcclxuICAgICAgICBpZiAodGhpcy5vdXRDb3VudERvd25OdW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmd1aWRIYW5kQW5pPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRTaGFyZUljb25BbmkoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNyZWdpb24gXHU1OTdEXHU1M0NCXHU1OTU2XHU1MkIxXHU2M0QwXHU3OTNBXHU1MjlGXHU4MEZEXHJcbiAgICAvKipcclxuICAgICAqIFx1NTk3RFx1NTNDQlx1OTA4MFx1OEJGN1x1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGZyaWVuZEludml0ZURhdGE6IEludml0ZURhdGFbXSA9IFtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU5NTZcdTUyQjFcdTVGMTVcdTVCRkNcdTUyQThcdTc1M0JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXdhcmRTaGFyZUd1aWRlQW5pbWF0aW9uOiBMYXlhLlRpbWVMaW5lO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1M0JCXHU1OTdEXHU1M0NCXHU1OTU2XHU1MkIxXHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ29GcmllbmRSZXdhcmRWaWV3KCkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzUmV3YXJkVmlldywge1xyXG4gICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0OiB0aGlzLmZyaWVuZEludml0ZURhdGEsXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU1OTdEXHU1M0NCXHU1MjA2XHU0RUFCXHU1RjE1XHU1QkZDXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnVwZGF0ZV9mcmllbmRfc2hhcmVfZ3VpZGUpXHJcbiAgICBwcml2YXRlIGFzeW5jIGZyaWVuZFNoYXJlR3VpZGUoaW5pdDogYm9vbGVhbiwgZGF0YT86IEludml0ZURhdGFbXSkge1xyXG4gICAgICAgIGlmIChpbml0KSB7XHJcbiAgICAgICAgICAgIGxldCBkID0gKGF3YWl0IEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlTGlzdCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICB9KSkgYXMgSW52aXRlTGlzdDtcclxuICAgICAgICAgICAgZGF0YSA9IGQubGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mcmllbmRJbnZpdGVEYXRhID0gZGF0YTtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkU2hhcmVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoYXNSZXdhcmQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAoIWRhdGFbeF0ucmVjZWl2ZWRSZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgIGhhc1Jld2FyZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJld2FyZFNoYXJlSWNvbkFuaShoYXNSZXdhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1OTU2XHU1MkIxXHU1RjE1XHU1QkZDXHU1MkE4XHU3NTNCXHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHJcbiAgICAgKiBAcGFyYW0gc2hvd1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJld2FyZFNoYXJlSWNvbkFuaShzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXdhcmRTaGFyZUd1aWRlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmV3YXJkU2hhcmVHdWlkZUFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRTaGFyZUd1aWRlQW5pbWF0aW9uID0gTGF5YS5UaW1lTGluZS50byhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJld2FyZFNoYXJlR3VpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgeyByb3RhdGlvbjogMTUgfSxcclxuICAgICAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICA1MDAwXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKHRoaXMucmV3YXJkU2hhcmVHdWlkZSwgeyByb3RhdGlvbjogLTE1IH0sIDMwMCwgbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAudG8odGhpcy5yZXdhcmRTaGFyZUd1aWRlLCB7IHJvdGF0aW9uOiAxNSB9LCAzMDAsIG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKHRoaXMucmV3YXJkU2hhcmVHdWlkZSwgeyByb3RhdGlvbjogMCB9LCAxNTAsIG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkU2hhcmVHdWlkZUFuaW1hdGlvbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkU2hhcmVHdWlkZUFuaW1hdGlvbj8uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZFNoYXJlR3VpZGVBbmltYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZFNoYXJlR3VpZGUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2VuZHJlZ2lvblxyXG59XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIZWFydGJlYXQgZnJvbSBcInNyYy9jb21tb24vSGVhcnRiZWF0XCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgTWFpblZpZXcgZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRCb3gsIHRpcHM6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0JcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZEJveDogTGF5YS5Cb3g7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTUyMTdcdTg4NjhcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3Q7XHJcbiAgICAvKiogQHByb3Age25hbWU6dXNlcktleSwgdGlwczpcIlx1NzUyOFx1NjIzN1x1NTNDQlx1NjBDNVx1NzgwMVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdXNlcktleTogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTprZXlJbnB1dE5vZGUsIHRpcHM6XCJcdTkwODBcdThCRjdcdTc4MDFcdThGOTNcdTUxNjVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGtleUlucHV0Tm9kZTogTGF5YS5UZXh0SW5wdXQ7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkRnJpZW5kLCB0aXBzOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRGcmllbmQ6IExheWEuSW1hZ2U7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmVtcHR5X2xiLCB0aXBzOlwiXHU3QTdBXHU3Njg0XHU2M0QwXHU3OTNBXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBlbXB0eV9sYjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIDFcdTY2MkZcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggMiBcdTUyQTBcdTU5N0RcdTUzQ0IgIDNcdTUyMjBcdTk2NjRcdTU5N0RcdTUzQ0IgKi9cclxuICAgIHByaXZhdGUgdmlld1N0YXRlOiAxIHwgMiB8IDMgPSAxO1xyXG5cclxuICAgIC8vXHU4RkQ5XHU0RTI0XHU0RTJBXHU1OTdEXHU1M0NCIFx1NjcwOVx1NzBCOVx1NEU3MVx1RkYwQ1x1OTcwMFx1ODk4MVx1NEYxOFx1NTMxNlxyXG4gICAgcHJpdmF0ZSBmcmllbmRzOiBGcmllbmREYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgZnJpZW5kc0xpc3Q6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKGRhdGE6IHtcclxuICAgICAgICBmcmllbmREYXRhOiBGcmllbmRMaXN0RGF0YTtcclxuICAgICAgICAvKiogdHlwZVx1NEUzQTFcdTYyNTNcdTVGMDBcdTUyQTBcdTU5N0RcdTUzQ0JcdTc1NENcdTk3NjIgKi9cclxuICAgICAgICB0eXBlOiBudW1iZXI7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzID0gZGF0YS5mcmllbmREYXRhLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzTGlzdCA9IHRoaXMuZnJpZW5kcztcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3REYXRhKCk7XHJcbiAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5pdGVtUmVuZGVyKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJLZXkudGV4dCA9IGBcdTYyMTFcdTc2ODRcdTUzQ0JcdTYwQzVcdTc4MDFcdUZGMUEke1VzZXJJbmZvLmtleX1gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEudHlwZSk7XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSAmJiBkYXRhLnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEZyaWVuZEV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNFbXB0eSgpIHtcclxuICAgICAgICB0aGlzLmVtcHR5X2xiLnZpc2libGUgPSAhdGhpcy5pdGVtTGlzdC5hcnJheS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaXN0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLmZyaWVuZHNMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGIuYXBwbHlJbmcgKiAxMDAwMDAgLSBhLmFwcGx5SW5nICogMTAwMDAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXRlbVJlbmRlcihjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlbUxpc3QuYXJyYXlbaV07XHJcblxyXG4gICAgICAgIGxldCBuZXdCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwibmV3X2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgaGVhcnRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiaGVhcnRfYm94XCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGdvUGxheUJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJnb19wbGF5X2J0blwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBhcHBseUJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJhcHBseV9idG5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgZGVsQnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImRlbF9idG5cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBoZWFydEJveC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgYXBwbHlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGRlbEJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhPy5hdmF0YXIpIChjZWxsLmdldENoaWxkQnlOYW1lKFwiaGVhZFwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZGF0YS5hdmF0YXI7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBkYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibHZcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IChkYXRhLm9yZGVyTGV2ZWwgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChoZWFydEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gKGRhdGEuaW50aW1hY3kgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICBkYXRhLmdhaW5EaWFtb25kICsgXCJcIjtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZWxfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgIGdvUGxheUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnZpZXdTdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBhcHBseUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRlbEJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IDEgfHwgdGhpcy52aWV3U3RhdGUgPT0gMykge1xyXG4gICAgICAgICAgICAvL1x1NzUzM1x1OEJGNyBcdTRFMkRcclxuICAgICAgICAgICAgaWYgKGRhdGEuYXBwbHlJbmcpIHtcclxuICAgICAgICAgICAgICAgIG5ld0JveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgKG5ld0JveC5nZXRDaGlsZEJ5TmFtZShcInBhc3RfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgKG5ld0JveC5nZXRDaGlsZEJ5TmFtZShcImlnbm9yZVwiKSBhcyBMYXlhLkltYWdlKS5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NURGMlx1N0VDRlx1NjYyRlx1NTk3RFx1NTNDQlxyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZpZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZF9mcmllbmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRnJpZW5kRXZlbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlbF9mcmllbmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJpZW5kRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVzY19idG5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzRGVzY1ZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmV3YXJkX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuUmV3YXJkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvcHlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2VhcmNoX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYXBwbHlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5RXZlbnQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGFzdF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dGcmllbmQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVsX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVGcmllbmQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaWdub3JlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlnbm9yZShlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19wbGF5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpdEZyaWVuZChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVGcmllbmRFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDM7XHJcbiAgICAgICAgbGV0IG5ld0Y6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kcy5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZC5hcHBseUluZykgbmV3Ri5wdXNoKGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSBuZXdGO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuaGVpZ2h0ID0gOTE0O1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuYWRkRnJpZW5kLnNraW4gPSBgZ2FtZS9pbWdfZnJpZW5kQnRuLnBuZ2A7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRGcmllbmRFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMyB8fCB0aGlzLnZpZXdTdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmlld1N0YXRlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDkxNDtcclxuICAgICAgICAgICAgdGhpcy5hZGRGcmllbmQuc2tpbiA9IGBnYW1lL2ltZ19hZGRCdG4ucG5nYDtcclxuICAgICAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0VtcHR5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDU5MDsgLy85MTRcclxuICAgICAgICAgICAgdGhpcy5hZGRGcmllbmQuc2tpbiA9IGBnYW1lL2ltZ19mcmllbmRCdG4ucG5nYDtcclxuICAgICAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUZGRFx1NzU2NVx1NTk3RFx1NTNDQlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlnbm9yZSh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZERlbGV0ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmZyaWVuZHMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmllbmRzW3hdLnVpZCA9PSBkYXRhLnVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICBIZWFydGJlYXQudXBkYXRlTXNnKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9wZW5SZXdhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEludml0ZUxpc3QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IEludml0ZUxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzUmV3YXJkVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogZC5saXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkOiBGcmllbmRMaXN0RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMgPSBkLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSB0aGlzLmZyaWVuZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZnJpZW5kc0xpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRlx1OTVFRVx1NTk3RFx1NTNDQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHZpc2l0RnJpZW5kKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcodHJ1ZSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWFpblZpZXcuaW5zdC5pc091dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5nb0hvbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRWaXNpdCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMuZ29fZnJpZW5kX2hvbWUsIFtkLCBkYXRhXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5nb19ob21lLCBbdHJ1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMjBcdTk2NjRcdTU5N0RcdTUzQ0JcclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWxldGVGcmllbmQodGFyZ2V0OiBMYXlhLkltYWdlKSB7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgdGV4dDogXCJcdTc4NkVcdThCQTRcdTg5ODFcdTUyMjBcdTk2NjRcdTU5N0RcdTUzQ0JcdTU0MTdcdUZGMUZcIixcclxuICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZERlbGV0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kSWQ6IGRhdGEudWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmZyaWVuZHMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyaWVuZHNbeF0udWlkID09IGRhdGEudWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzLnNwbGljZSh4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZnJpZW5kc0xpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsQ2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkwMUFcdThGQzdcdTU5N0RcdTUzQ0JcdTc1MzNcdThCRjdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhbGxvd0ZyaWVuZCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEFsbG93LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYXBwbHlJbmcgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiQWRkZnJpZW5kc1wiIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIEhlYXJ0YmVhdC51cGRhdGVNc2coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUzM1x1OEJGN1x1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFwcGx5RXZlbnQodGFyZ2V0OiBMYXlhLkltYWdlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRBcHBseSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogeyBzdGF0dXM6IGJvb2xlYW47IHRhc2tTdGF0ZTogYm9vbGVhbiB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHNMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTVERjJcdTUzRDFcdTkwMDFcdTZGQzBcdTYwQzVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChkLnRhc2tTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDA5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjQxQ1x1N0QyMlx1NTk3RFx1NTNDQlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZWFyY2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleUlucHV0Tm9kZS50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NTNDQlx1NjBDNVx1NzgwMVx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5rZXlJbnB1dE5vZGUudGV4dCA9PSBVc2VySW5mby5rZXkpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTY0MUNcdTdEMjJcdTgxRUFcdTVERjFcdTVFNzJcdTU1NjVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRTZWFyY2gsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLmtleUlucHV0Tm9kZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IEZyaWVuZERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSBbZF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3B5KCkge1xyXG4gICAgICAgIGxldCBhOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgYS52YWx1ZSA9IFVzZXJJbmZvLmtleTtcclxuICAgICAgICBhLnNlbGVjdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgICAgICBhLnJlbW92ZSgpO1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU1OTBEXHU1MjM2XHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBHYXRoZXJEZXNjVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2F0aGVyRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZWFsR2V0LCB0aXBzOlwiXHU1MDc3XHU4M0RDXHU2MjE2XHU4M0I3XHU1Rjk3XCIsIHR5cGU6Tm9kZSx9Ki9cclxuICAgIHByaXZhdGUgc3RlYWxHZXQ6IExheWEuUGFuZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6b3JkZXIsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTgzQjdcdTVGOTdcIiwgdHlwZTpOb2RlLH0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlcjogTGF5YS5QYW5lbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjbG9zZUJ0biwgdGlwczpcIlx1NTE3M1x1OTVFRFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGUsfSovXHJcbiAgICBwcml2YXRlIGNsb3NlQnRuOiBMYXlhLkltYWdlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW0sIHRpcHM6XCJcdTcyNjlcdTU0QzFcdTgyODJcdTcwQjlcIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgaXRlbTogTGF5YS5QcmVmYWI7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7XHJcbiAgICAgICAgdHlwZTogbnVtYmVyO1xyXG4gICAgICAgIGRhdGE6IGFueTtcclxuICAgICAgICBjYWxsOiBGdW5jdGlvbjtcclxuICAgICAgICBkaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgY2xvc2VFdmVudDogRnVuY3Rpb247XHJcbiAgICAgICAgbmlja25hbWU6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbk9wZW5lZChkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGVhbEdldC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcmRlci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuXHJcbiAgICAgICAgdGhpcy5zdGVhbEdldC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vcmRlci52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcblxyXG4gICAgICAgIExheWEudGltZXIub25jZSgzMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhZFR5cGU6IDMgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAyIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJoYWxmX3NjcmVlbl9hZHZlcnRpc2VtZW50XCIgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImJvdHRvbV9hZHZlcnRpc2VtZW50XCIgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIC8vXHU4QkEyXHU1MzU1XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jbG9zZUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAodGhpcy5vcmRlci5nZXRDaGlsZEJ5TmFtZShcImRlc2NcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYjJcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxXHJcbiAgICAgICAgICAgICAgICB9YDtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBvcmRlciA9IFRhYmxlQW5hbHl6ZS50YWJsZShcIm9yZGVyXCIpLmdldChVc2VySW5mby5vcmRlckxldmVsICsgMSk7XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZV9ib3hcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQXQoMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlXHJcbiAgICAgICAgICAgICAgICApLnNraW4gPSBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5nb2xkSWQpLmljb247XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZV9ib3hcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQXQoMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwibGJcIikgYXMgTGF5YS5MYWJlbFxyXG4gICAgICAgICAgICAgICAgKS50ZXh0ID0gXCJ4XCIgKyBkLmRhdGEuZ29sZDtcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInByaWNlX2JveFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRBdCgxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsXHJcbiAgICAgICAgICAgICAgICApLnRleHQgPSBcInhcIiArIGQuZGF0YS5kaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicHJpY2VfYm94XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEF0KDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZVxyXG4gICAgICAgICAgICAgICAgKS5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZGlhbW9uZElkKS5pY29uO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAvL1x1NTA3N1x1ODNEQ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVhbEdldC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICh0aGlzLnN0ZWFsR2V0LmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IFwiXHU1MDc3XHU4M0RDXHU2MjEwXHU1MjlGXCI7XHJcbiAgICAgICAgICAgICAgICAodGhpcy5zdGVhbEdldC5nZXRDaGlsZEJ5TmFtZShcInRvcF9sYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1NEY2MFx1NkY1Q1x1NTE2NVx1NEU4NiR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhPy5uaWNrbmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgICB9Li4uXHU3Njg0XHU4M0RDXHU1NzMwXHVGRjBDXHU1MDc3XHU4RDcwXHU0RTg2XHVGRjFBYDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVzY0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAvL1x1NjUzNlx1ODNEQ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVhbEdldC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICh0aGlzLnN0ZWFsR2V0LmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IFwiXHU1MTlDXHU0RjVDXHU3MjY5XHU2MjEwXHU3MTlGXCI7XHJcbiAgICAgICAgICAgICAgICAodGhpcy5zdGVhbEdldC5nZXRDaGlsZEJ5TmFtZShcInRvcF9sYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID1cclxuICAgICAgICAgICAgICAgICAgICBcIlx1OTAxQVx1OEZDN1x1NjBBOFx1OEY5Qlx1NTJFNFx1NTJCM1x1NEY1Q1x1RkYwQ1x1NjUzNlx1ODNCN1x1NEU4Nlx1RkYxQVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZXNjTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTMyXHU2N0QzXHU1MDc3XHU4RDcwXHU2MjE2XHU2NjJGXHU2NTM2XHU4M0I3XHU3Njg0XHU1MTlDXHU0RjVDXHU3MjY5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlRGVzY0xpc3QoKSB7XHJcbiAgICAgICAgLy8yOCAgMjAzXHJcbiAgICAgICAgbGV0IGxpc3Q6IHsgcGxhbnRJZDogbnVtYmVyOyBhbW91bnQ6IG51bWJlciB9W10gPSB0aGlzLmRhdGEuZGF0YTtcclxuICAgICAgICBsZXQgX3ggPSAwLFxyXG4gICAgICAgICAgICBfeSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsaXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTm9kZTogTGF5YS5Cb3ggPSB0aGlzLml0ZW0uY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChfeCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIF95ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBfeCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGl0ZW1Ob2RlLnggPSAyOCArIF94ICogMTkwO1xyXG4gICAgICAgICAgICBpdGVtTm9kZS55ID0gMjAzICsgX3kgKiA5NTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwbGFudCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChsaXN0W3hdLnBsYW50SWQpO1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGljb24uc2tpbiA9IHBsYW50Lmljb247XHJcbiAgICAgICAgICAgIGljb24uc2NhbGUoMC43LCAwLjcpO1xyXG4gICAgICAgICAgICBpY29uLmFuY2hvclggPSAwLjU7XHJcbiAgICAgICAgICAgIChpdGVtTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgeCR7bGlzdFt4XS5hbW91bnR9YDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RlYWxHZXQuYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG5cclxuICAgICAgICAgICAgX3grKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYiA9IHRoaXMuc3RlYWxHZXQuZ2V0Q2hpbGRCeU5hbWUoXCJib3R0b21fbGJcIikgYXMgTGF5YS5MYWJlbDtcclxuICAgICAgICBsYi55ICs9IF95ICogOTU7XHJcbiAgICAgICAgKGxiLmdldENoaWxkQnlOYW1lKFwiZGlhbW9uZFwiKS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9XHJcbiAgICAgICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChDb25maWdHYW1lLmRpYW1vbmRJZCkuaWNvbjtcclxuXHJcbiAgICAgICAgKGxiLmdldENoaWxkQnlOYW1lKFwiZGlhbW9uZFwiKS5nZXRDaGlsZEJ5TmFtZShcImxiXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgeCR7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YT8uZGlhbW9uZCB8fCAwXHJcbiAgICAgICAgfWA7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5HYXRoZXJEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnR5cGUgIT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVjZWl2ZVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicmVjZWl2ZV9kb3VibGVcIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTk4ODZcdTUzRDZcdThCQTJcdTUzNTVcclxuICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5vcmRlclJld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcklkOiBVc2VySW5mby5vcmRlckxldmVsICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwicmVjZWl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkdhdGhlckRlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoZS50YXJnZXQubmFtZSAhPSBcInJlY2VpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwicmVjZWl2ZV9kb3VibGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwodHJ1ZSwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTY1MzZcdTgzRENcdTUzQ0NcdTUwMERcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kR2F0aGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkUmV3YXJkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5hZFJld2FyZC5mb3JFYWNoKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5kaWFtb25kICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmlkID09IENvbmZpZ0dhbWUuZGlhbW9uZElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hbW91bnQgKz0gdGhpcy5kYXRhLmRpYW1vbmQgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5hZFJld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuR2F0aGVyRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuR2F0aGVyRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuY2xvc2VBZCxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2xvc2VFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuY2xvc2VFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHdWlkZVZpZXdEYXRhIHtcclxuICAgIG5vZGVMaXN0OiBMYXlhLkltYWdlW107XHJcbiAgICBjYWxsOiBGdW5jdGlvbjtcclxufVxyXG5cclxuLy9kZWZhdWx0IGNsYXNzIEd1aWRlVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8vXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHJcbiAgICAvKiogQHByb3Age25hbWU6Z3VpZGVIYW5kLCB0aXBzOlwiXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHU2MjRCXHU2MzA3XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBndWlkZUhhbmQ6IExheWEuU3ByaXRlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZXNjTGIsIHRpcHM6XCJcdTYzQ0ZcdThGRjBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRlc2NMYjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bm9kZUJveCwgdGlwczpcIlx1NjNDRlx1OEZGMFx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbm9kZUJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZ3VpZEFuaTogTGF5YS5UaW1lTGluZTtcclxuICAgIHByaXZhdGUgb2xkUGFyZW50OiBMYXlhLkJveDtcclxuICAgIHByaXZhdGUgb2xkWk9yZGVyOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXh0TGlzdCA9IFtcclxuICAgICAgICBcIlx1NjBBOFx1NzY4NFx1OTRCMVx1NTMwNVx1NEY1OVx1OTg5RFwiLFxyXG4gICAgICAgIFwiXHU1QjhDXHU2MjEwXHU4QkEyXHU1MzU1XHU4M0I3XHU1Rjk3XHU5NEJCXHU3N0YzXHU1M0VGXHU0RUU1XHU1MTUxXHU2MzYyXHU3RUEyXHU1MzA1XHUzMDAyXCIsXHJcbiAgICAgICAgXCJcdThGRDlcdTkxQ0NcdTY2MkZcdTRFRDNcdTVFOTMsXHU2NTM2XHU4M0I3XHU3Njg0XHU0RjVDXHU3MjY5XHU5MEZEXHU1QjU4XHU2NTNFXHU1NzI4XHU4RkQ5XHU5MUNDXHVGRjBDXHU1MUZBXHU1NTJFXHU0RjVDXHU3MjY5XHU0RTVGXHU1NzI4XHU4RkQ5XHU5MUNDXHUzMDAyXCIsXHJcbiAgICAgICAgXCJcdThGRDlcdTkxQ0NcdTY2MkZcdTk2QzZcdTVFMDIsXHU4RDJEXHU0RTcwXHU3OUNEXHU1QjUwXHUzMDAxXHU3MkQ3XHU3Q0FFXHU3Njg0XHU1NzMwXHU2NUI5XHU4RkQ4XHU2NzA5XHU2NzAwXHU5MUNEXHU4OTgxXHU3Njg0XHU5NEIxXHU1RTg0XHU0RTVGXHU1NzI4XHU4RkQ5XHU5MUNDLFx1NjNEMFx1NzNCMFx1NzY4NFx1NjVGNlx1NTAxOVx1NjBBOFx1NEYxQVx1N0VDRlx1NUUzOFx1Njc2NVx1NzY4NFx1MzAwMlwiLFxyXG4gICAgICAgIFwiXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU1NzI4XHU4RkQ5XHU5MUNDLFx1NTcxRlx1NTczMFx1N0I0OVx1N0VBN1x1OEQ4QVx1OUFEOCxcdThEOEFcdTgwQTVcdTZDODNcdUZGMENcdTY1MzZcdTgzQjdcdTVDMzFcdThEOEFcdTU5MUFcdTMwMDJcIixcclxuICAgICAgICBcIlx1OEZEOVx1OTFDQ1x1NjYyRlx1NjBBOFx1NzY4NFx1NTE5Q1x1NTczQVx1MzAwMlx1NzlDRFx1NjkwRFx1MzAwMVx1NjUzNlx1ODNCN1x1OTBGRFx1NTcyOFx1OEZEOVx1OTFDQyxcdTYwODRcdTYwODRcdTU0NEFcdThCQzlcdTRGNjBcdThGRDlcdTU3NTdcdTU3MzBcdTY1MzZcdTgzQjdcdTc2ODRcdTY1RjZcdTUwMTlcdTUzRUZcdTgwRkRcdTRGMUFcdTRFQTdcdTUxRkFcdTk0QkJcdTc3RjNcdTU0RTZcdTMwMDJcIixcclxuICAgICAgICBcIlx1NjBBOFx1NzY4NFx1NEVGQlx1NTJBMVwiLFxyXG4gICAgICAgIFwiXHU2MEE4XHU3Njg0XHU0RkUxXHU0RUY2XCIsXHJcbiAgICAgICAgXCJcdThGRDlcdTkxQ0NcdTUzRUZcdTRFRTVcdTUzQkJcdTUyMkJcdTRFQkFcdTc2ODRcdTUxOUNcdTU3M0FcdThGNkNcdThGNkMsXHU1RTJFXHU1MjJCXHU0RUJBXHU2NTM2XHU3Njg0XHU4M0RDXHU5MEZEXHU1RjUyXHU2MEE4LFx1NEY0Nlx1NjYyRlx1ODk4MVx1NUMwRlx1NUZDM1x1NzJEN1x1NzJEN1x1NTRFNlx1MzAwMlwiLFxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IEd1aWRlVmlld0RhdGE7XHJcbiAgICBwcml2YXRlIHN0ZXA6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHVzZXJTdGVwOiBzdHJpbmdbXTtcclxuXHJcbiAgICBvbk9wZW5lZChkYXRhOiBHdWlkZVZpZXdEYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFkYXRhLm5vZGVMaXN0KSBkYXRhLm5vZGVMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLmd1aWRlSGFuZC5hbHBoYSA9IDA7XHJcbiAgICAgICAgdGhpcy51c2VyU3RlcCA9IFVzZXJJbmZvLmd1aWRlRGF0YS5zcGxpdChcIlwiKTtcclxuICAgICAgICBpZiAoIXRoaXMudXNlclN0ZXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA5OyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VyU3RlcFt4XSB8fCB0aGlzLnVzZXJTdGVwW3hdID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwID0geDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ndWlkSGFuZEFuaSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RlcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU3RlcCgpIHtcclxuICAgICAgICBsZXQgcG9zOiBMYXlhLlBvaW50O1xyXG4gICAgICAgIGNvbnN0IHByZU5vZGUgPSB0aGlzLmRhdGEubm9kZUxpc3RbdGhpcy5zdGVwIC0gMV07XHJcblxyXG4gICAgICAgIGlmIChwcmVOb2RlICYmIHRoaXMub2xkUGFyZW50KSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMub2xkUGFyZW50Lmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVCb3gubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludChwcmVOb2RlLngsIHByZU5vZGUueSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMub2xkUGFyZW50LmFkZENoaWxkQXQocHJlTm9kZSwgdGhpcy5vbGRaT3JkZXIpO1xyXG4gICAgICAgICAgICBwcmVOb2RlLnBvcyhwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnRleHRMaXN0W3RoaXMuc3RlcF0pIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5HdWlkZVZpZXcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNhbGwpIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmRhdGEubm9kZUxpc3RbdGhpcy5zdGVwXTtcclxuICAgICAgICB0aGlzLm9sZFpPcmRlciA9IG5vZGUuek9yZGVyO1xyXG4gICAgICAgIHRoaXMub2xkUGFyZW50ID0gbm9kZS5wYXJlbnQgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgcG9zID0gdGhpcy5ub2RlQm94Lmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgIHRoaXMub2xkUGFyZW50LmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQobm9kZS54LCBub2RlLnkpKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZUJveC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICBub2RlLnBvcyhwb3MueCwgcG9zLnkpO1xyXG5cclxuICAgICAgICB0aGlzLmd1aWRlSGFuZC5zY2FsZVggPSAxO1xyXG4gICAgICAgIGNvbnN0IHRleHRQb3NBZGQ6IExheWEuUG9pbnQgPSBuZXcgTGF5YS5Qb2ludCgpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGVwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDE1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTEwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTMwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IC0xMDA7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSAyNTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlSGFuZC5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTQwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDI1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDYwMDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDQ1MDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDE2MDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zQWRkLnNldFRvKC0yMDAsIC0yODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDE2MDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTIwMCwgLTI4MCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgcG9zLnggKz0gMTQwO1xyXG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dFBvc0FkZC5zZXRUbygtNTYwLCAtMzgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMuZ3VpZGVIYW5kLCB7IHg6IHBvcy54LCB5OiBwb3MueSwgYWxwaGE6IDEgfSwgMzAwKTtcclxuICAgICAgICB0aGlzLmRlc2NMYi5hbHBoYSA9IDA7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLmRlc2NMYiwgeyBhbHBoYTogMSB9LCAxNTApO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnBvcyhwb3MueCArIHRleHRQb3NBZGQueCwgcG9zLnkgKyB0ZXh0UG9zQWRkLnkpO1xyXG4gICAgICAgIHRoaXMuZGVzY0xiLnRleHQgPSB0aGlzLnRleHRMaXN0W3RoaXMuc3RlcF07XHJcbiAgICAgICAgdGhpcy5zdGVwKys7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljayA9IHRydWU7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51c2VyU3RlcFt0aGlzLnN0ZXBdID0gXCIxXCI7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZ3VpZGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy51c2VyU3RlcC5qb2luKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGVwKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1x1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGd1aWRIYW5kQW5pKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaSA9IExheWEuVGltZUxpbmUudG8odGhpcy5ndWlkZUhhbmQsIHsgcm90YXRpb246IC0xNSB9LCA0MDAsIG51bGwpLnRvKFxyXG4gICAgICAgICAgICB0aGlzLmd1aWRlSGFuZCxcclxuICAgICAgICAgICAgeyByb3RhdGlvbjogMCB9LFxyXG4gICAgICAgICAgICA0MDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaS5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGREaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZ3VpZEFuaT8uZGVzdHJveSgpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaW50Vmlld0RhdGEge1xyXG4gICAgLyoqIFx1NjU4N1x1NUI1N1x1NTE4NVx1NUJCOSAqL1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgLyoqIFx1Nzg2RVx1OEJBNFx1NTZERVx1OEMwMyAqL1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1NTNENlx1NkQ4OFx1NTZERVx1OEMwMyAqL1xyXG4gICAgY2FuY2VsQ2FsbD86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG4vL2RlZmF1bHQgY2xhc3MgSGludFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIaW50VmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGV4dCwgdGlwczpcIlx1NTE4NVx1NUJCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGV4dDogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb25maXJtQnRuLCB0aXBzOlwiXHU3ODZFXHU4QkE0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjb25maXJtQnRuOiBMYXlhLkltYWdlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNhbmNlbEJ0biwgdGlwczpcIlx1NTNENlx1NkQ4OFx1NjMwOVx1OTRBRVx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY2FuY2VsQnRuOiBMYXlhLkltYWdlO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogSGludFZpZXdEYXRhO1xyXG5cclxuICAgIG9uT3BlbmVkKGQpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG4gICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy5kYXRhPy50ZXh0IHx8IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmNhbmNlbENhbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWxCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsICYmIHRoaXMuZGF0YS5jYW5jZWxDYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUJ0bi54ID0gMjUyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUJ0bi54ID0gNDU4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmFkVGltZXMgPiAxMDAgfHwgVXNlckluZm8uY29udGludW91c0FkVGltZXMgPiAyMCkge1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMzAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAyIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAzIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImhhbGZfc2NyZWVuX2FkdmVydGlzZW1lbnRcIiB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImJvdHRvbV9hZHZlcnRpc2VtZW50XCIgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChVc2VySW5mby5hZFRpbWVzID4gMTAwIHx8IFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzID4gMjApIHtcclxuICAgICAgICAgICAgKHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjZW50ZXJcIikgYXMgTGF5YS5JbWFnZSkuY2VudGVyWSA9IC0zMTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2FuY2VsXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYW5jZWxDYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbmNlbENhbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuSGludFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb25maXJtXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuSGludFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmNsb3NlQWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSwgeyBCdWlsZFR5cGUgfSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgQXBwQ29yZSwgeyBBcHBEZXNwYXRjaFJldHVybkRhdGEgfSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5WaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9hZEJhciwgdGlwczpcImxvYWQgYmFyXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb2FkQmFyOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2FkQm94LCB0aXBzOlwiXHU1MkEwXHU4RjdEXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb2FkQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9naW5Cb3gsIHRpcHM6XCJcdTc2N0JcdTk2NDZcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvZ2luQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpdmFjeUJveCwgdGlwczpcIlx1OTY5MFx1NzlDMVx1NTM0Rlx1OEJBRVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpdmFjeUJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaXZhY3lDaGVja0ljb24sIHRpcHM6XCJcdTk2OTBcdTc5QzFpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcml2YWN5Q2hlY2tJY29uOiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OEZEQlx1NUVBNlx1Njc2MVx1OUVEOFx1OEJBNFx1NUJCRFx1NUVBNiAgMSovXHJcbiAgICBwcml2YXRlIGxvYWRCYXJPbGRXaWR0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBhc3luYyBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgYXdhaXQgdGhpcy52ZXJzaW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKT8uaXNMb2dpbikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vbihFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgdGhpcywgdGhpcy5sb2FkUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRFbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sb2FkTGFiZWwpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmxvYWRMYWJlbC50ZXh0ID0gXCJMb2FkLi4uLjAlXCI7XHJcbiAgICAgICAgdGhpcy5sb2FkQmFyT2xkV2lkdGggPSB0aGlzLmxvYWRCYXIud2lkdGg7XHJcbiAgICAgICAgdGhpcy5sb2FkQmFyLndpZHRoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEJ1aWxkVHlwZSgpIHtcclxuICAgICAgICBsZXQgYnVpbGRUeXBlID0gbnVsbDtcclxuICAgICAgICBzd2l0Y2ggKEJVSUxEX1RZUEUpIHtcclxuICAgICAgICAgICAgY2FzZSBCdWlsZFR5cGUuZGVidWc6XHJcbiAgICAgICAgICAgICAgICBidWlsZFR5cGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQnVpbGRUeXBlLnRlc3Q6XHJcbiAgICAgICAgICAgICAgICBidWlsZFR5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQnVpbGRUeXBlLm9ubGluZTpcclxuICAgICAgICAgICAgICAgIGJ1aWxkVHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFidWlsZFR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1NzNBRlx1NTg4M3R5cGVcdTkxNERcdTdGNkVcdTUxRkFcdTk1MTlcIixcclxuICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5jbGVhckNhY2hlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVpbGRUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgdmVyc2lvbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5jb25maWdDbGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpZDogdGhpcy5nZXRCdWlsZFR5cGUoKSB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkOiBDb25maWdDbGllbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2ZXJzaW9uID0gTnVtYmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS52ZXJzaW9uPy5yZXBsYWNlKC9cXC4vZywgXCJcIilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidmVyc2lvblwiLCBkLnZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdHYW1lLnZlcnNpb24gPSBkLnZlcnNpb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGQudmVyc2lvbi5yZXBsYWNlKC9cXC4vZywgXCJcIikpID4gdmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuY2xlYXJDYWNoZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU2OEMwXHU2RDRCXHU1MjMwXHU2NUIwXHU3Njg0XHU3MjQ4XHU2NzJDXHVGRjBDXHU4QkY3XHU2NkY0XHU2NUIwXHVGRjAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidmVyc2lvblwiLCBkLnZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnNob3dCYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ0dhbWUudmVyc2lvbiA9IGQudmVyc2lvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidmVyc2lvblwiLCBkLnZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiXHU3MjQ4XHU2NzJDXHU2OEMwXHU2RDRCXHU1MUZBXHU5NTE5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImxvZ2luX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tfYm94XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaXZhY3lDaGVja0ljb24udmlzaWJsZSA9ICF0aGlzLnByaXZhY3lDaGVja0ljb24udmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJpdmFjeV9sYlwiOlxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5wcml2YWN5QWdyZWVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBsb2dpbihpc1d4OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbikge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxvZ2luVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChjb2RlLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZDogTmV0SW5pdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHRoaXMuZGF0YS5jYWxsKGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5sb2dpblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IE51bWJlcihkLnVzZXJJbmZvLmtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhPy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBgXHU3NjdCXHU1RjU1XHU1OTMxXHU4RDI1WyR7ZGF0YS5jb2RlfV1gIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIENvbmZpZ0dhbWUuY2hhbm5lbCA9IGRhdGEuZGF0YVtcImNoYW5uZWxcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcIlNpZ25pblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcml2YWN5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXNXeCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnByaXZhY3lDaGVja0ljb24udmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1OEJGN1x1OTYwNVx1OEJGQlx1MzAwQVx1NzUyOFx1NjIzN1x1OTY5MFx1NzlDMVx1NTM0Rlx1OEJBRVx1MzAwQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0ZXN0SyA9IGxvY2F0aW9uLnNlYXJjaC5tYXRjaCgvXFw/aWQ9KC4rKS8pLFxyXG4gICAgICAgICAgICAgICAgdGVzdEtlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXN0SyAmJiB0ZXN0Sy5sZW5ndGggPiAxICYmIEJVSUxEX1RZUEUgIT0gQnVpbGRUeXBlLm9ubGluZSkge1xyXG4gICAgICAgICAgICAgICAgdGVzdEtlID0gdGVzdEtbMV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB3eE9wZW5JZCA9IHRlc3RLZSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lID0gXCJcIixcclxuICAgICAgICAgICAgICAgIGF2YXRhciA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChpc1d4ICYmICF3eE9wZW5JZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAud3hMb2dpbixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcdTVGQUVcdTRGRTFcdTc2N0JcdTVGNTVcdTU5MzFcdThEMjVbJHtkYXRhLmNvZGV9XVx1RkYwQ1x1OEJGN1x1OTFDRFx1OEJENWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eE9wZW5JZCA9IGRhdGEuZGF0YVtcIm9wZW5pZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyID0gZGF0YS5kYXRhW1wiaWNvbnVybFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWUgPSBkYXRhLmRhdGFbXCJuYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXd4T3BlbklkKSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU2NzJBXHU4M0I3XHU1M0Q2XHU1MjMwXHU1RkFFXHU0RkUxaWRcIixcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxvZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wibG9naW5cIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhY2NvdW50OiBpc1d4ID8gbnVsbCA6IHRoaXMudXNlcklucHV0LnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4SWQ6IHd4T3BlbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IGF2YXRhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChjb2RlLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IE5ldEluaXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB0aGlzLmRhdGEuY2FsbChkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHVyaTogQXBwRXZlbnRNYXAud3hMb2dpblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8uaXNGaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnJlZ2lzdGVyU3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiBOdW1iZXIoZC51c2VySW5mby5rZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmxvZ2luU3VjY2VzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogTnVtYmVyKGQudXNlckluZm8ua2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGRhdGE6IEFwcERlc3BhdGNoUmV0dXJuRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcdTc2N0JcdTVGNTVcdTU5MzFcdThEMjVbJHtkYXRhLmNvZGV9XWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdHYW1lLmNoYW5uZWwgPSBkYXRhLmRhdGFbXCJjaGFubmVsXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJTaWduaW5cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUHJvZ3Jlc3Modikge1xyXG4gICAgICAgIHRoaXMubG9hZEJhci53aWR0aCA9IHYgKiB0aGlzLmxvYWRCYXJPbGRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vZmYoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIHRoaXMsIHRoaXMubG9hZFByb2dyZXNzKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9kZWZhdWx0IGNsYXNzIE1haWxEZXNjVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxEZXNjVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y2VudGVyUGFuZWwsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlclBhbmVsOiBMYXlhLlBhbmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRpdGxlLCB0aXBzOlwiXHU5ODc2XHU2ODA3XHU5ODk4XHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0aXRsZTogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb3N0TGIsIHRpcHM6XCJcdTUwNzdcdThENzBcdTRFODZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvc3RMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpiYWNrTGIsIHRpcHM6XCJcdTYyN0VcdTU2REVcdTY3NjVcdTc2ODRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJhY2tMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpib3R0b21MYiwgdGlwczpcIlx1NUU5NVx1OTBFOFx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYm90dG9tTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbSwgdGlwczpcIlx1NzI2OVx1NTRDMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOlByZWZhYn0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtOiBMYXlhLlByZWZhYjtcclxuXHJcbiAgICBwcml2YXRlIG1haWxJZDogbnVtYmVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgY2FsbDogRnVuY3Rpb247XHJcblxyXG4gICAgb25PcGVuZWQoZDogeyBkYXRhOiBNYWlsUmV0dXJuRGF0YTsgY2FsbDogRnVuY3Rpb24gfSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkLmRhdGE7XHJcbiAgICAgICAgdGhpcy5jYWxsID0gZC5jYWxsO1xyXG4gICAgICAgIHRoaXMubWFpbElkID0gZC5kYXRhLmlkO1xyXG4gICAgICAgIHRoaXMuY2VudGVyUGFuZWwudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGl0bGUudGV4dCA9IGAke2RhdGEubWVzc2FnZX1cdTZGNUNcdTUxNjVcdTRFODZcdTRGNjBcdTc2ODRcdTgzRENcdTU3MzBcdTUwNzdcdTgzRENgO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zTG9zdDogeyBpZDogbnVtYmVyOyBhbW91bnQ6IG51bWJlciB9W10gPSBbXSxcclxuICAgICAgICAgICAgaXRlbXNCYWNrOiB7IGlkOiBudW1iZXI7IGFtb3VudDogbnVtYmVyIH1bXSA9IFtdO1xyXG4gICAgICAgIGxldCBsb3N0RGlhbW9uZCA9IDAsXHJcbiAgICAgICAgICAgIGxvc3RHb2xkID0gMDtcclxuICAgICAgICAvLyBhOmI6YyAgYT10eXBlIDFcdThEMjdcdTVFMDEgMiBcdTY5MERcdTcyNjlcclxuXHJcbiAgICAgICAgVG9vbHMucGFyc2VTdHJpbmcoZGF0YS5pdGVtc0xvc3QpLm1hcCgoX2Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBfZCA9IFRvb2xzLnBhcnNlU3RyaW5nKF9kLCBcIjpcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF9kKTtcclxuICAgICAgICAgICAgaWYgKF9kWzBdID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxvc3REaWFtb25kICs9IE51bWJlcihfZFsyXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBoYXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXRlbXNMb3N0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhcykge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNMb3N0LnB1c2goeyBpZDogX2RbMV0sIGFtb3VudDogTnVtYmVyKF9kWzJdKSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0xvc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtc0xvc3RbeF0uaWQgPT0gX2RbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc0xvc3RbeF0uYW1vdW50ICs9IE51bWJlcihfZFsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgVG9vbHMucGFyc2VTdHJpbmcoZGF0YS5pdGVtcykubWFwKChfZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIF9kID0gVG9vbHMucGFyc2VTdHJpbmcoX2QsIFwiOlwiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBoYXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgaXRlbXNCYWNrLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhcykge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNCYWNrLnB1c2goeyBpZDogX2RbMV0sIGFtb3VudDogTnVtYmVyKF9kWzJdKSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0JhY2subGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtc0JhY2tbeF0uaWQgPT0gX2RbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc0JhY2tbeF0uYW1vdW50ICs9IE51bWJlcihfZFsyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHlBZGQgPSAwLFxyXG4gICAgICAgICAgICBfeCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0xvc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlOiBMYXlhLkJveCA9IHRoaXMuaXRlbS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgaWYgKF94ID4gMiAmJiAheUFkZCkge1xyXG4gICAgICAgICAgICAgICAgeUFkZCsrO1xyXG4gICAgICAgICAgICAgICAgX3ggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeUFkZCAmJiBfeCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHlBZGQrKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbU5vZGUueCA9IDIzMCArIF94ICogMTkwO1xyXG4gICAgICAgICAgICBpdGVtTm9kZS55ID0gMTA1ICsgeUFkZCAqIDk1O1xyXG4gICAgICAgICAgICBfeCsrO1xyXG4gICAgICAgICAgICBsZXQgcGxhbnQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaXRlbXNMb3N0W3hdLmlkKTtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpY29uLnNraW4gPSBwbGFudC5pY29uO1xyXG4gICAgICAgICAgICBpY29uLnNjYWxlKDAuNywgMC43KTtcclxuICAgICAgICAgICAgaWNvbi5hbmNob3JYID0gMC41O1xyXG4gICAgICAgICAgICAoaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke2l0ZW1zTG9zdFt4XS5hbW91bnR9YDtcclxuICAgICAgICAgICAgcGxhbnQuZ2Fpbi5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5kaWFtb25kSWQpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGxvc3RHb2xkICs9IGQuY291bnQgKiBpdGVtc0xvc3RbeF0uYW1vdW50O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyUGFuZWwuYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHlBZGRCYWNrID0gMDtcclxuICAgICAgICBfeCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBpdGVtc0JhY2subGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlOiBMYXlhLkltYWdlID0gdGhpcy5pdGVtLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoX3ggPiAxICYmICF5QWRkQmFjaykge1xyXG4gICAgICAgICAgICAgICAgeUFkZEJhY2srKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHlBZGRCYWNrICYmIF94ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgeUFkZEJhY2srKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbU5vZGUueCA9IDQyMCArIF94ICogMTkwO1xyXG4gICAgICAgICAgICBpdGVtTm9kZS55ID0gMjA4ICsgeUFkZCAqIDk1ICsgeUFkZEJhY2sgKiA5NTtcclxuICAgICAgICAgICAgX3grKztcclxuXHJcbiAgICAgICAgICAgIGxldCBwbGFudCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChpdGVtc0JhY2tbeF0uaWQpO1xyXG4gICAgICAgICAgICBjb25zdCBpY29uID0gaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGljb24uc2tpbiA9IHBsYW50Lmljb247XHJcbiAgICAgICAgICAgIGljb24uc2NhbGUoMC43LCAwLjcpO1xyXG4gICAgICAgICAgICBpY29uLmFuY2hvclggPSAwLjU7XHJcbiAgICAgICAgICAgIChpdGVtTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgeCR7aXRlbXNCYWNrW3hdLmFtb3VudH1gO1xyXG4gICAgICAgICAgICAvLyBwbGFudC5nYWluLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChkLm9iai5pZCA9PSBDb25maWdHYW1lLmRpYW1vbmRJZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyAgICAgbG9zdEdvbGQgKz0gZC5jb3VudCAqIGl0ZW1zQmFja1t4XS5hbW91bnQ7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jZW50ZXJQYW5lbC5hZGRDaGlsZChpdGVtTm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvc3RMYi55ID0gMTE0O1xyXG4gICAgICAgIHRoaXMuYmFja0xiLnkgPSAyMTggKyB5QWRkICogOTU7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MYi55ID0gMzAxICsgeUFkZCAqIDk1ICsgeUFkZEJhY2sgKiA5NTtcclxuICAgICAgICB0aGlzLmJvdHRvbUxiLnRleHQgPSBgXHU1MTcxXHU4QkExXHU2MzVGXHU1OTMxXHU0RTg2JHtsb3N0R29sZH1cdTkxRDFcdTVFMDFcdUZGMEMke2xvc3REaWFtb25kfVx1OTRCQlx1NzdGM2A7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5NYWlsRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZGVsZXRlXCI6XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubWFpbERlbGV0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpZDogdGhpcy5tYWlsSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsKHRoaXMubWFpbElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk1haWxEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgSGVhcnRiZWF0IGZyb20gXCJzcmMvY29tbW9uL0hlYXJ0YmVhdFwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgTWFpbFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6bGlzdCwgdGlwczpcIlx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZW1wdHlfbGIsIHRpcHM6XCJcdTdBN0FcdTc2ODRcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGVtcHR5X2xiOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGxpc3REYXRhOiBNYWlsUmV0dXJuRGF0YVtdID0gW107XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMucmVuZGVySXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQobGlzdDogTWFpbFJldHVybkRhdGFbXSA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RGF0YSA9IGxpc3Q7XHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlTGlzdERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmFycmF5ID0gdGhpcy5saXN0RGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiAoYS5yZWFkID8gMCA6IDEwMDAwMCArIGIuY3JlYXRlVGltZSkgLSAoYi5yZWFkID8gMCA6IDEwMDAwMCArIGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBiLmNyZWF0ZVRpbWUgLSAoYi5yZWFkID8gMTAwMDAwMCA6IDApIC0gKGEuY3JlYXRlVGltZSAtIChhLnJlYWQgPyAxMDAwMDAwIDogMCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmVtcHR5X2xiLnZpc2libGUgPSAhdGhpcy5saXN0LmFycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckl0ZW0oY2VsbDogTGF5YS5JbWFnZSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxpc3REYXRhW2luZGV4XTtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcIlx1N0NGQlx1N0VERlx1OTBBRVx1NEVGNlwiO1xyXG4gICAgICAgIChcclxuICAgICAgICAgICAgY2VsbC5nZXRDaGlsZEJ5TmFtZShcImRlc2NcIikgYXMgTGF5YS5MYWJlbFxyXG4gICAgICAgICkudGV4dCA9IGAke2RhdGEubWVzc2FnZX1cdTZGNUNcdTUxNjVcdTgzRENcdTU3MzBcdTUwNzdcdTgzREMsXHU4OEFCXHU3MkQ3XHU3MkQ3XHU1M0QxXHU3M0IwXHU1RTc2XHU4RkZEXHU1MkEwXHU1NkRFXHU0RTg2fn5gO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7bmV3IERhdGUoXHJcbiAgICAgICAgICAgIGRhdGEuY3JlYXRlVGltZVxyXG4gICAgICAgICkudG9Mb2NhbGVTdHJpbmcoXCJ6aC1DTlwiLCB7IGhvdXIxMjogZmFsc2UgfSl9YDtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZWFkX2ljb25cIikgYXMgTGF5YS5JbWFnZSkudmlzaWJsZSA9ICFkYXRhLnJlYWQ7XHJcblxyXG4gICAgICAgIGNlbGwuZGF0YVNvdXJjZSA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUuaW5kZXhPZihcIml0ZW1cIikgPiAtMSkge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm1haWxSZWFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl0ucmVhZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICBIZWFydGJlYXQudXBkYXRlTXNnKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLk1haWxEZXNjVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAobWFpbElkOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdERhdGEubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdERhdGFbeF0uaWQgPT0gbWFpbElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhLnNwbGljZSh4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5NYWlsVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZ3VyZUFuaSBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpfeCwgdGlwczpcIlx1N0VDOFx1NzBCOVx1NTc1MFx1NjgwN1wiLCB0eXBlOnR5cGU6U3RyaW5nfSovXHJcbiAgICBwcml2YXRlIF94OiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpfeSwgdGlwczpcIlx1N0VDOFx1NzBCOVx1NTc1MFx1NjgwN1wiLCB0eXBlOnR5cGU6U3RyaW5nfSovXHJcbiAgICBwcml2YXRlIF95OiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZWxheSwgdGlwczpcIlx1NUVGNlx1OEZERlwiLCB0eXBlOnR5cGU6U3RyaW5nfSovXHJcbiAgICBwcml2YXRlIGRlbGF5OiBzdHJpbmcgPSBcIjBcIjtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aW1lLCB0aXBzOlwiXHU2NUY2XHU5NUY0XCIsIHR5cGU6dHlwZTpTdHJpbmd9Ki9cclxuICAgIHByaXZhdGUgdGltZTogc3RyaW5nID0gXCIxMDAwMFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLm93bmVyIGFzIExheWEuQW5pbWF0aW9uO1xyXG4gICAgICAgIG5vZGUuYWxwaGEgPSAwO1xyXG4gICAgICAgIGxldCBvbGRQb3MgPSB7IHg6IG5vZGUueCwgeTogbm9kZS55IH07XHJcbiAgICAgICAgbGV0IGRlbGF5ID0gTnVtYmVyKHRoaXMuZGVsYXkpO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8obm9kZSwgeyBhbHBoYTogMSB9LCA2MDAsIG51bGwsIG51bGwsIGRlbGF5KTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgICB7IHg6IHRoaXMuX3gsIHk6IHRoaXMuX3kgfSxcclxuICAgICAgICAgICAgTnVtYmVyKHRoaXMudGltZSksXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wb3Mob2xkUG9zLngsIG9sZFBvcy55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbmFibGUoKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRlbGF5XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7fVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBPcmRlckJhc2UsIFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBNYWluVmlldyBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5cclxuLy9jbGFzcyBPcmRlclZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlclZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm9yZGVyTGlzdCwgdGlwczpcIlx1OEJBMlx1NTM1NVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGUsfSovXHJcbiAgICBwcml2YXRlIG9yZGVyTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6YnRuTG9ja1JlcywgdGlwczpcIlx1OEJBMlx1NTM1NVx1NjMwOVx1OTRBRVx1NjcyQVx1NUI4Q1x1NjIxMFwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGJ0bkxvY2tSZXM6IHN0cmluZyA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YnRuUmVzQ3VyLCB0aXBzOlwiXHU4QkEyXHU1MzU1XHU2MzA5XHU5NEFFXHU1RjUzXHU1MjREXHU3MkI2XHU2MDAxXHU2MzA5XHU5NEFFXCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgYnRuUmVzQ3VyOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRvcERlc2MsIHRpcHM6XCJcdTk4NzZcdTkwRThcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcERlc2M6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBPcmRlckJhc2VbXTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gVGFibGVBbmFseXplLnRhYmxlKFwib3JkZXJcIikubGlzdDtcclxuICAgICAgICBsZXQgb3JkZXJPbGRMdiA9IFVzZXJJbmZvLm9yZGVyTGV2ZWwgfHwgMDtcclxuICAgICAgICB0aGlzLmRhdGFMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGEuaWQgKiAoYi5pZCA8PSBvcmRlck9sZEx2ID8gLTEgOiAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIGEuaWQgKyAoYS5pZCA8PSBvcmRlck9sZEx2ID8gMjAwMCA6IDApIC0gKGIuaWQgKyAoYi5pZCA8PSBvcmRlck9sZEx2ID8gMjAwMCA6IDApKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LmFycmF5ID0gdGhpcy5kYXRhTGlzdDtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnJlbmRlckxpc3QpO1xyXG4gICAgICAgIHRoaXMub3JkZXJMaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICBsZXQgcmV3YXJkOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5kYXRhTGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5kYXRhTGlzdFt4XS5pZCA+PSBVc2VySW5mby5vcmRlckxldmVsKSB7XHJcbiAgICAgICAgICAgIGxldCBhZGREaWFtb25kID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhTGlzdFt4XS5jb25kaXRpb24uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZC5wbGFudC5nYWluLmZvckVhY2goKHApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocC5vYmouaWQgPT09IENvbmZpZ0dhbWUuZGlhbW9uZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZERpYW1vbmQgKz0gcC5jb3VudCAqIGQuY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV3YXJkICs9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFMaXN0W3hdLmV4dHJhUmV3YXJkLmNvdW50ICtcclxuICAgICAgICAgICAgICAgIGFkZERpYW1vbmQgK1xyXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChhZGREaWFtb25kICogdGhpcy5kYXRhTGlzdFt4XS5jb21taXNzaW9uKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHdpdGhkcmF3YWwgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwid2l0aGRyYXdhbFwiKS52YWx1ZSBhcyBzdHJpbmdbXTtcclxuXHJcbiAgICAgICAgKHRoaXMudG9wRGVzYy5nZXRDaGlsZEF0KDApIGFzIExheWEuTGFiZWwpLnRleHQgPSBcIlx1NUI4Q1x1NjIxMFx1NjI0MFx1NjcwOVx1OEJBMlx1NTM1NVx1NTNFRlx1ODNCN1x1NUY5N1wiO1xyXG5cclxuICAgICAgICAodGhpcy50b3BEZXNjLmdldENoaWxkQXQoMSkgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke3Jld2FyZH1gO1xyXG4gICAgICAgIC8vICh0aGlzLnRvcERlc2MuZ2V0Q2hpbGRBdCgxKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7VG9vbHMuZm9ybWF0TW9uZXkoXHJcbiAgICAgICAgLy8gICAgIChOdW1iZXIod2l0aGRyYXdhbFsyXSkgLyBOdW1iZXIod2l0aGRyYXdhbFsxXSkpICogcmV3YXJkXHJcbiAgICAgICAgLy8gKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyTGlzdChjZWxsOiBMYXlhLkltYWdlLCBpOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuZGF0YUxpc3RbaV0sXHJcbiAgICAgICAgICAgIHJld2FyZDogUmV3YXJkQ3VycmVuY3lCYXNlLFxyXG4gICAgICAgICAgICByZXdhcmRDb3VudDogbnVtYmVyID0gMCxcclxuICAgICAgICAgICAgcmV3YXJkRGlhbW9uZENvdW50OiBudW1iZXIgPSAwLFxyXG4gICAgICAgICAgICBjdXJDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIG1heENvdW50ID0gMCxcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwLFxyXG4gICAgICAgICAgICByZXdhcmRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgb3JkZXJfbHYgPSBjZWxsLmdldENoaWxkQnlOYW1lKFwib3JkZXJfbHZcIikgYXMgTGF5YS5MYWJlbDtcclxuICAgICAgICBvcmRlcl9sdi50ZXh0ID0gYCR7ZC5pZH1cdTdFQTdcdThCQTJcdTUzNTVgO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDQ7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtX1wiICsgeCkgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgICAgIGlmIChkLmNvbmRpdGlvblt4XSkge1xyXG4gICAgICAgICAgICAgICAgY3VyQ291bnQgPSBXYXJlaG91c2VTZXJ2aWNlLmdldE9uZShkLmNvbmRpdGlvblt4XS5wbGFudC5pZCk/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgICAgICAgICBtYXhDb3VudCA9IGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJDb3VudCA+PSBtYXhDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgKGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmNvbmRpdGlvblt4XS5wbGFudC5pY29uO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuaWQgPCBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHttYXhDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID0gODc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtjdXJDb3VudH0vJHttYXhDb3VudH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgODcgKiAoY3VyQ291bnQgLyBtYXhDb3VudCA+IDEgPyAxIDogY3VyQ291bnQgLyBtYXhDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkLmNvbmRpdGlvblt4XS5wbGFudC5nYWluLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5vYmouaWQgPT09IENvbmZpZ0dhbWUuZ29sZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmQgPSBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZENvdW50ICs9IGUuY291bnQgKiBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kQ291bnQgKz0gZS5jb3VudCAqIGQuY29uZGl0aW9uW3hdLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkaWFtb25kID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hfZGlhbW9uZFwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGxldCBidG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGZpbmlzaEljb24gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZmluaXNoXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGN1ckljb24gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiY3VyX2ljb25cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgcmVjZWl2ZUJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZWNlaXZlX2J0blwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBsdl9ib3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwibHZfYm94XCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgZmluaXNoSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgY3VySWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgZGlhbW9uZC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgcmV3YXJkQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGx2X2JveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBvcmRlcl9sdi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICByZWNlaXZlQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZC5pZCA+IFVzZXJJbmZvLm9yZGVyTGV2ZWwgKyAxKSB7XHJcbiAgICAgICAgICAgIC8vXHU2NzJBXHU2RkMwXHU2RDNCXHJcbiAgICAgICAgICAgIGJ0bi5za2luID0gdGhpcy5idG5Mb2NrUmVzO1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChkLmV4dHJhUmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICBidG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgKGRpYW1vbmQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmV4dHJhUmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgKGRpYW1vbmQuZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCske1xyXG4gICAgICAgICAgICAgICAgICAgIGQuZXh0cmFSZXdhcmQuY291bnQgK1xyXG4gICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmRDb3VudCArXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChyZXdhcmREaWFtb25kQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgICAgICB9YDtcclxuICAgICAgICAgICAgICAgIGRpYW1vbmQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZC5pZCA9PSBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAgICAgLy9cdTVGNTNcdTUyNERcclxuICAgICAgICAgICAgICAgIGlmIChkLmV4dHJhUmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsdl9ib3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyX2x2LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAoZGlhbW9uZC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuZXh0cmFSZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICAgICAgKGRpYW1vbmQuZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCske1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLmV4dHJhUmV3YXJkLmNvdW50ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZENvdW50ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChyZXdhcmREaWFtb25kQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgICAgICAgICAgfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbW9uZC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLnNraW4gPSB0aGlzLmJ0blJlc0N1cjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT0gZC5jb25kaXRpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYW1vbmQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcdTVERjJcdTVCOENcdTYyMTBcIik7XHJcbiAgICAgICAgICAgICAgICAvL1x1NURGMlx1NUI4Q1x1NjIxMFxyXG4gICAgICAgICAgICAgICAgLy8gYnRuLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZpbmlzaEljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5leHRyYVJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJld2FyZEJveC55ID0gMTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXdhcmQpIHtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgKyR7XHJcbiAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArIE1hdGgucm91bmQocmV3YXJkQ291bnQgKiBkLmNvbW1pc3Npb24pXHJcbiAgICAgICAgICAgIH1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk9yZGVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlY2VpdmVfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBNYWluVmlldy5pbnN0LmhpbmRPcmRlckxldmVsID0gMDtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk9yZGVyVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlclZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsZWZ0Qm94LCB0aXBzOlwiXHU0RTkxXHU1REU2XHU4RkI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgbGVmdEJveDogTGF5YS5Cb3g7XHJcbiAgICAvKiogQHByb3Age25hbWU6cmlnaHRCb3gsIHRpcHM6XCJcdTRFOTFcdTVERTZcdThGQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICByaWdodEJveDogTGF5YS5Cb3g7XHJcblxyXG4gICAgb25IZEVuYWJsZSgpIHt9XHJcblxyXG4gICAgb25PcGVuZWQoZGF0YTogeyBjYWxsOiB7IChPdmVyVmlldyk6IHZvaWQgfSB9KSB7XHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIGlmIChkYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgICAgIGRhdGEuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoY2FsbDogRnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmxlZnRCb3gueCA9IC05ODc7XHJcbiAgICAgICAgdGhpcy5yaWdodEJveC54ID0gMTAyNTtcclxuICAgICAgICB0aGlzLmxlZnRCb3guYWxwaGEgPSAwO1xyXG4gICAgICAgIHRoaXMucmlnaHRCb3guYWxwaGEgPSAwO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5sZWZ0Qm94LCB7IHg6IDAsIGFscGhhOiAxIH0sIDUwMCk7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5yaWdodEJveCxcclxuICAgICAgICAgICAgeyB4OiAwLCBhbHBoYTogMSB9LFxyXG4gICAgICAgICAgICA1MDAsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGwpIGNhbGwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oY2FsbDogRnVuY3Rpb24pIHtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubGVmdEJveCwgeyB4OiAtOTg3LCBhbHBoYTogMCB9LCA1MDApO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3gsXHJcbiAgICAgICAgICAgIHsgeDogMTAyNSwgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsKSBjYWxsKCk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLk92ZXJWaWV3KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwRGF0YUNvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cERhdGFDb250cm9sXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9jbGFzcyBTZXR0aW5nVmlldyBleHRlbmRzIExheWEuU2NyaXB0XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTptdXNpY05vZGUsIHRpcHM6XCJcdTk3RjNcdTRFNTBcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG11c2ljTm9kZTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNvdW5kTm9kZSwgdGlwczpcIlx1OTdGM1x1NjU0OFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc291bmROb2RlOiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YXZhdGFyTm9kZSwgdGlwczpcIlx1NzNBOVx1NUJCNlx1NTkzNFx1NTBDRlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYXZhdGFyTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bmlja25hbWUsIHRpcHM6XCJcdTczQTlcdTVCQjZcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG5pY2tuYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1c2VyS2V5LCB0aXBzOlwiXHU3NTI4XHU2MjM3XHU1M0NCXHU2MEM1XHU3ODAxXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB1c2VyS2V5OiBMYXlhLkxhYmVsO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNDaGFuZ2UoKTtcclxuICAgICAgICB0aGlzLnNvdW5kQ2hhbmdlKCk7XHJcbiAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAzIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJib3R0b21fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudXNlcktleS50ZXh0ID0gYFx1OTA4MFx1OEJGN1x1NzgwMVx1RkYxQSR7VXNlckluZm8ua2V5fWA7XHJcblxyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImF2YXRhclwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUpIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcIm5pY2tuYW1lXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5pY2tuYW1lLnRleHQgPSBlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNldHRpbmdWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcIm11c2ljXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLmJ1dHRvbl9jbGljayk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLm11c2ljTXV0ZWQgPSAhQ29yZS5hdWRpby5tdXNpY011dGVkO1xyXG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwibXVzaWNcIiwgQ29yZS5hdWRpby5tdXNpY011dGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljQ2hhbmdlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzb3VuZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5zb3VuZE11dGVkID0gIUNvcmUuYXVkaW8uc291bmRNdXRlZDtcclxuICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInNvdW5kXCIsIENvcmUuYXVkaW8uc291bmRNdXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VuZENoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNpZ25fb3V0XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU3ODZFXHU4QkE0XHU4OTgxXHU5MDAwXHU1MUZBXHU3NjdCXHU1RjU1XHVGRjFGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJpc0xvZ2luXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwidG9rZW5cIiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5sb2dpbk91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcubG9naW5PdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5Mb2dpblZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvZ2luX2dhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxDYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1c2VyX2FncmVlbWVudFwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTc1MjhcdTYyMzdcdTUzNEZcdThCQUVcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oeyB1cmk6IEFwcEV2ZW50TWFwLnNlcnZpY2VBZ3JlZW1lbnQsIGRhdGE6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcml2YWN5XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OTY5MFx1NzlDMVx1NjUzRlx1N0I1NlxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAucHJpdmFjeUFncmVlbWVudCwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFib3V0XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQWJvdXRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29weV9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29weSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29weSgpIHtcclxuICAgICAgICBsZXQgYTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgIGEudmFsdWUgPSBVc2VySW5mby5rZXk7XHJcbiAgICAgICAgYS5zZWxlY3QoKTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAgICAgYS5yZW1vdmUoKTtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NTkwRFx1NTIzNlx1NjIxMFx1NTI5RlwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG11c2ljQ2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnN0IGJveCA9IHRoaXMubXVzaWNOb2RlLmdldENoaWxkQnlOYW1lKFwiYm94XCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuXHJcbiAgICAgICAgbGV0IG11c2ljID0gQ29yZS5hdWRpby5tdXNpY011dGVkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG11c2ljKTtcclxuXHJcbiAgICAgICAgaWNvbi54ID0gIW11c2ljID8gLTE0IDogOTE7XHJcbiAgICAgICAgaWNvbi5za2luID0gIW11c2ljID8gYGdhbWUvaW1nX211c2ljT25CdG4ucG5nYCA6IFwiZ2FtZS9pbWdfbXVzaWNPZmZCdG4ucG5nXCI7XHJcbiAgICAgICAgYm94LnNraW4gPSAhbXVzaWMgPyBgZ2FtZS9pbWdfc3dpdGNoT24ucG5nYCA6IFwiZ2FtZS9pbWdfc3dpdGhPZmYucG5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzb3VuZENoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCBib3ggPSB0aGlzLnNvdW5kTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgbGV0IHNvdW5kID0gQ29yZS5hdWRpby5zb3VuZE11dGVkO1xyXG4gICAgICAgIGljb24ueCA9ICFzb3VuZCA/IC0xNCA6IDkxO1xyXG4gICAgICAgIGljb24uc2tpbiA9ICFzb3VuZCA/IGBnYW1lL2ltZ19tdXNpY09uQnRuLnBuZ2AgOiBcImdhbWUvaW1nX211c2ljT2ZmQnRuLnBuZ1wiO1xyXG4gICAgICAgIGJveC5za2luID0gIXNvdW5kID8gYGdhbWUvaW1nX3N3aXRjaE9uLnBuZ2AgOiBcImdhbWUvaW1nX3N3aXRoT2ZmLnBuZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmNsb3NlQWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBGZWVkQmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG4vKipcclxuICogXHU5OTcyXHU2NTk5XHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZlZWREYXRhQmFzZSB7XHJcbiAgICAvKiogXHU5OTcyXHU2NTk5XHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBGZWVkQmFzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk1MDFcdTVCOUEgKi9cclxuICAgIGxvY2s6IGJvb2xlYW47XHJcbn1cclxuLyoqXHJcbiAqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVxyXG4gKi9cclxuY2xhc3MgRmVlZFNlcnZpY2Uge1xyXG4gICAgLyoqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbGlzdDogRmVlZERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjU3MFx1NjM2RVx1NTIxRFx1NTlDQlx1NTMxNlxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcImZlZWRcIikubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IGQsXHJcbiAgICAgICAgICAgICAgICBsb2NrOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBGZWVkU2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBGZWVkQmFzZSwgUGxhbnRCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBGZWVkU2VydmljZSwgeyBGZWVkRGF0YUJhc2UgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0ZlZWRTZXJ2aWNlXCI7XHJcbmltcG9ydCBQZXRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGV0U2VydmljZVwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBNYWluVmlldywgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNob3BWaWV3RGF0YSB7XHJcbiAgICAvKiogXHU3NTRDXHU5NzYydGFnXHU0RTBCXHU2ODA3aWQgKi9cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFICovXHJcbiAgICBwYXJtPzogYW55O1xyXG4gICAgY2FsbD86IEZ1bmN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Cb3hUb3AsIHRpcHM6XCJcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTUyMTdcdTg4NjhcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJ0bkJveFRvcDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tQm94LCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21Cb3g6IExheWEuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWVkRGVzYywgdGlwczpcIlx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VlZERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZVRpbWUsIHRpcHM6XCJcdTYyMTBcdTcxOUZcdTY1RjZcdTk1RjRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZVRpbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm1hdHVyZUdhaW5Cb3gsIHRpcHM6XCJcdTY1MzZcdTc2Q0FcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG1hdHVyZUdhaW5Cb3g6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvY2tCdG5Cb3gsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTYzMDlcdTk0QUVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvY2tCdG5Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtQnV5QnRuLCB0aXBzOlwiXHU4RDJEXHU0RTcwXHU2MzA5XHU5NEFFXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtQnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWRCdXlCdG4sIHRpcHM6XCJcdTk5NzJcdTY1OTlcdThEMkRcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZlZWRCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZlZWREZXNjLCB0aXBzOlwiXHU5OTcyXHU2NTk5XHU2M0NGXHU4RkYwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBmZWVkRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTVCQTBcdTcyNjlcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRJY29uLCB0aXBzOlwiXHU1QkEwXHU3MjY5aWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0SWNvbjogTGF5YS5BbmltYXRpb24gPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldERlc2MsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldERlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldE5hbWUsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldE5hbWU6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5TWF4LCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU0RTBBXHU5NjUwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eU1heDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0QnV5QnRuLCB0aXBzOlwiXHU4RDJEXHU0RTcwXHU1QkEwXHU3MjY5XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXRCdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvV2F0Y2gsIHRpcHM6XCJcdTVCQTBcdTcyNjlcdTc3MEJcdTVCQjZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGdvV2F0Y2g6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvUmVzdCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NEYxMVx1NjA2RlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29SZXN0OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1OTRCMVx1NUU4NFxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRpYW1vbmRGb250LCB0aXBzOlwiXHU3NTI4XHU2MjM3XHU5NEJCXHU3N0YzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkaWFtb25kRm9udDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMaXN0LCB0aXBzOlwiXHU5NEIxXHU1RTg0XHU2M0QwXHU3M0IwXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJvcG9ydGlvbiwgdGlwczpcIlx1NTE1MVx1NjM2Mlx1NkJENFx1NEY4QlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJvcG9ydGlvbjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVzY1ByaWNlQm94LCB0aXBzOlwiXHU4M0I3XHU1M0Q2XHU5NEJCXHU3N0YzXHU5MDE0XHU1Rjg0XHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkZXNjUHJpY2VCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb25kaXRpb25Cb3gsIHRpcHM6XCJcdTYzRDBcdTczQjBcdTY3NjFcdTRFRjZcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNvbmRpdGlvbkJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIFx1NTNFRlx1NjNEMFx1NzNCMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBwcmljZURhdGFMaXN0OiB7IHByaWNlOiBudW1iZXI7IHRpbWVzOiBudW1iZXIgfVtdID0gW107XHJcbiAgICAvKiogXHU5NEIxXHU1RTg0XHU5MDA5XHU2MkU5XHU3Njg0XHU1MDNDIFx1NzY4NFx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBwcmljZVNlbGVjdEluZGV4OiBudW1iZXIgPSBudWxsO1xyXG4gICAgLyoqIFx1OTA4MFx1OEJGN1x1NTk3RFx1NTNDQlx1NzY4NFx1NjU3MFx1OTFDRiAqL1xyXG4gICAgcHJpdmF0ZSBpbnZpdGVOdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NjU4N1x1NUI1N1x1OEQ0NFx1NkU5MFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBidG5Ub3BSZXNMaXN0OiBzdHJpbmdbXVtdID0gW1xyXG4gICAgICAgIFtcImdhbWUvaW1nX3NlZWRzTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3NlZWRzU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX3BldE5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19wZXRTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfZm9vZG5Ob3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfZm9vZG5TZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfYmFua05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19iYW5rU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgXTtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThcdTUyMDdcdTYzNjJcdTY4MDdcdTdCN0VcdTkwMDlcdTYyRTlcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgdG9wQnRuU2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU3MEI5XHU1MUZCXHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0U2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU4MENDXHU2NjZGXHU3RUI5XHU3NDA2ICovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxlY3RCZzogc3RyaW5nW10gPSBbXCJnYW1lL2ltZ19wZXRiYWdOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfcGV0YmFnU2VsZWN0ZWQucG5nXCJdO1xyXG5cclxuICAgIC8qKiBcdTVGNTNcdTUyNERcdTkwMDlcdTYyRTlcdTc2ODRcdTVCQTBcdTcyNjlcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0UGV0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGRhdGE6IFNob3BWaWV3RGF0YTtcclxuXHJcbiAgICBwcml2YXRlIGlzRmlyc3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlSXRlbSk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5zZWxlY3RIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLm9uU2VsZWN0KTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5wcmljZUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlUHJpY2VJdGVtKTtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC5zZWxlY3RIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLm9uUHJpY2VTZWxlY3QpO1xyXG5cclxuICAgICAgICBDb3JlLm9ic2VydmFibGVQcm9wZXJ0eS53YXRjaChVc2VySW5mbywgdGhpcykua2V5KFwiZGlhbW9uZFwiLCAodikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpYW1vbmRGb250LnZhbHVlID0gdjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3aXRoZHJhd2FsID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxcIikudmFsdWUgYXMgc3RyaW5nW107XHJcbiAgICAgICAgICAgIHRoaXMucHJvcG9ydGlvbi50ZXh0ID0gYCA9IFx1MDBBNSR7KChOdW1iZXIod2l0aGRyYXdhbFsyXSkgLyBOdW1iZXIod2l0aGRyYXdhbFsxXSkpICogdilcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2goL15cXGQrKD86XFwuXFxkezAsMn0pPy8pfVx1NTE0M2A7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQoZTogU2hvcFZpZXdEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICB0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID0gZT8uaWQgfHwgMDtcclxuXHJcbiAgICAgICAgdGhpcy5wcmljZURhdGFMaXN0ID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxfdGltZXNcIikudmFsdWUgYXMgYW55O1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoeyBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlTGlzdCB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogRnJpZW5kTGlzdERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZpdGVOdW0gPSBkLmxpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU5MDA5XHU0RTJEXHU2NUY2XHU3Njg0XHU0RTBCXHU2ODA3XHJcbiAgICAgKiBAcGFyYW0gZSBcdTkwMDlcdTRFMkRcdTc2ODRcdTRFMEJcdTY4MDdcclxuICAgICAqL1xyXG4gICAgb25TZWxlY3QoZSkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCA9IGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTc5Q0RcdTVCNTBcdTYyMTZcdTk5NkVcdTY1OTlcdTUyMTdcdTg4NjhcdTY1NzBcdTYzNkVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0RGF0YUxpc3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUGxhbnRTZXJ2aWNlLmxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgaWYgKCFGZWVkU2VydmljZS5saXN0Lmxlbmd0aCkgRmVlZFNlcnZpY2UuaW5pdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gRmVlZFNlcnZpY2UubGlzdC5zb3J0KChhLCBiKSA9PiBhLmJhc2Uudml0YWxpdHkgLSBiLmJhc2Uudml0YWxpdHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUzMlx1NjdEM1x1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NzY4NFx1NTIxN1x1ODg2OFxyXG4gICAgICogQHBhcmFtIGNlbGwgXHU1MjE3XHU4ODY4XHU4MjgyXHU3MEI5XHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHU0RTBCXHU2ODA3XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUl0ZW0oY2VsbDogTGF5YS5JbWFnZSwgaW5kZXgpIHtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuZ2V0RGF0YUxpc3QoKVtpbmRleF07XHJcbiAgICAgICAgbGV0IHByaWNlQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImhib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGxvY2tJY29uID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImxvY2tfaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGlmICghZCkgcmV0dXJuIGNvbnNvbGUud2FybihcIlx1NjU3MFx1NjM2RVx1NEUyMlx1NTkzMVwiKTtcclxuICAgICAgICBpZiAoZC5sb2NrKSB7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsb2NrSWNvbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcmljZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHByaWNlQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbG9ja0ljb24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHByaWNlQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcmljZUJveC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMCxcclxuICAgICAgICAgICAgICAgIGljb24gPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9ICg8UGxhbnRCYXNlPmQuYmFzZSkuc2VlZF9wcmljZS5jb3VudDtcclxuICAgICAgICAgICAgICAgIGljb24gPSAoPFBsYW50QmFzZT5kLmJhc2UpLnNlZWRfcHJpY2Uub2JqLmljb247XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9ICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0LmNvdW50O1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9ICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0Lm9iai5pY29uO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAocHJpY2VCb3guZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBjb3VudCArIFwiXCI7XHJcbiAgICAgICAgICAgIChwcmljZUJveC5nZXRDaGlsZEJ5TmFtZShcImdvbGRfaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gaWNvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZC5iYXNlLmljb247XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICBkLmJhc2UubmFtZSArICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID8gXCJcIiA6IFwiXHU3OUNEXHU1QjUwXCIpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT0gdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzFdO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdERlc2MoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjZWxsLnNraW4gPSB0aGlzLml0ZW1TZWxlY3RCZ1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTRGNEVcdTkwRThcdUZGMENcdTkwMDlcdTYyRTlcdTcyNjlcdTU0QzFcdTY1RjZcdTc2ODRcdTY1NzBcdTYzNkVcdTY2M0VcdTc5M0FcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3REZXNjKCkge1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF07XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgLy9cdTk5NzJcdTY1OTlcclxuICAgICAgICAgICAgKHRoaXMuc2VlZERlc2MucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZERlc2MudGV4dCA9IGQuYmFzZS5kZXNjLnJlcGxhY2UoXCImXCIsICg8RmVlZEJhc2U+ZC5iYXNlKS52aXRhbGl0eSArIFwiXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmZlZWREZXNjLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgYm94ID0gdGhpcy5mZWVkQnV5QnRuLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xyXG4gICAgICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5jb3VudCArIFwiXCI7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU3OUNEXHU1QjUwXHJcbiAgICAgICAgbGV0IGJhc2UgPSBkLmJhc2UgYXMgUGxhbnRCYXNlO1xyXG4gICAgICAgICh0aGlzLnNlZWREZXNjLnBhcmVudCBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mZWVkRGVzYy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWVkRGVzYy50ZXh0ID0gYmFzZS5kZXNjO1xyXG4gICAgICAgIHRoaXMubWF0dXJlVGltZS50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyhiYXNlLm1hdHVyZV90aW1lKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUJ1eUJ0bi52aXNpYmxlID0gIWQubG9jaztcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLml0ZW1CdXlCdG4udmlzaWJsZSA9ICFkLmxvY2s7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLmxvY2tCdG5Cb3gudmlzaWJsZSA9IGQubG9jaztcclxuICAgICAgICB0aGlzLmxvY2tCdG5Cb3guYWN0aXZlID0gZC5sb2NrO1xyXG4gICAgICAgIGxldCBnYWluTGlzdCA9IGJhc2UuZ2FpbjtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUJveCA9IHRoaXMubWF0dXJlR2FpbkJveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICAgICAgaWNvbiA9IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IDAsXHJcbiAgICAgICAgICAgICAgICBnYWluRGF0YSA9IGdhaW5MaXN0W3ggLSAxXTtcclxuICAgICAgICAgICAgaWYgKHggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gYmFzZS5oYXJ2ZXN0O1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGJhc2UuaWNvbjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChnYWluRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9IGdhaW5EYXRhLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBnYWluRGF0YS5jb3VudCAqIGJhc2UuaGFydmVzdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKGl0ZW1Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBpY29uO1xyXG4gICAgICAgICAgICAoaXRlbUJveC5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcInhcIiArIGNvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGJveCA9IHRoaXMubG9ja0J0bkJveC5nZXRDaGlsZEJ5TmFtZShcInVubG9ja19idXlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcblxyXG4gICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBiYXNlLnVubG9ja19jb3N0Py5vYmo/Lmljb247XHJcbiAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gYmFzZS51bmxvY2tfY29zdD8uY291bnQgKyBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNlZWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInBldFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZmVlZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYmFua1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvcEJ0bkluZGV4ID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRJbmRleChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCAhPSB0b3BCdG5JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPSBOdW1iZXIodG9wQnRuSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvcEJ0blN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9cdTY0QURcdTc5Q0RcclxuICAgICAgICAgICAgY2FzZSBcImJ1eV9idG5cIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGFuZElkID0gdGhpcy5kYXRhPy5wYXJtPy5sYW5kSWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxhbmRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRJZCA9IE1haW5WaWV3Lmluc3QuZ2V0RW1wdHlMYW5kSWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghbGFuZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTZDQTFcdTY3MDlcdTdBN0FcdTc2ODRcdTU3MUZcdTU3MzBcdTU0RTZcdUZGMDFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kU293LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInNvd1wiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IGxhbmRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50SWQ6IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYW50X3NvdywgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vXHU1RTdGXHU1NDRBXHU4OUUzXHU5NTAxXHVGRjBDXHU2MjE2XHU2NjJGXHU5MUQxXHU1RTAxXHU4OUUzXHU5NTAxMVxyXG4gICAgICAgICAgICBjYXNlIFwidW5sb2NrX2J1eVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYWRfdW5sb2NrXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuc2VlZHNVbmxvY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wic2VlZHNVbmxvY2tcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0uYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQubmFtZSA9PSBcImFkX3VubG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlQURcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGQ6IHsgYWRSZXdhcmQ6IFJldHVyblVzZXJJbmZvW1wiYWRSZXdhcmRcIl0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFudFNlcnZpY2UubGlzdFt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdLmxvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5jaGFuZ2VJdGVtKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhbnRTZXJ2aWNlLmxpc3RbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwiYWRfdW5sb2NrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuYWRSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiRnJlZXVubG9ja1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4LS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RQZXRJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4ID0gUGV0U2VydmljZS5saXN0Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0UGV0SW5kZXggPj0gUGV0U2VydmljZS5saXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGV0X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRCdXkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fd2F0Y2hcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0R29XYXRjaChQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF0uYmFzZS5pZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX3Jlc3RcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5RUQ4XHU4QkE0XHU0RjY5XHU2MjM0XHU3QjJDXHU0RTAwXHU0RTJBXHU1QkEwXHU3MjY5XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBldEdvV2F0Y2goMTAwMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZlZWRfYnV5XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OTk3Mlx1NjU5OVx1OEQyRFx1NEU3MFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQnV5KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndpdGhkcmF3X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTYzRDBcdTczQjBcclxuICAgICAgICAgICAgICAgIHRoaXMud2l0aGRyYXcoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInJlY29yZF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbldpdGhkcmF3UmVjb3JkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX2p1bXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VHb0p1bXAoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NzNCMFx1Njc2MVx1NEVGNlx1OERGM1x1OEY2Q1xyXG4gICAgICogQHBhcmFtIG5vZGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwcmljZUdvSnVtcChub2RlOiBMYXlhLkltYWdlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUuZGF0YVNvdXJjZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vXHU4REYzXHU4QkEyXHU1MzU1XHJcbiAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5kYXRhU291cmNlID09IDIpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgICAgIC8vXHU4REYzXHU1OTdEXHU1M0NCXHU5MDgwXHU4QkY3XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoZDogSW52aXRlTGlzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzUmV3YXJkVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBkLmxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9wZW5XaXRoZHJhd1JlY29yZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAud2l0aGRyYXdSZWNvcmQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLldpdGhkcmF3UmVjb3JkVmlldywgeyBwYXJtOiBkIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZlZWRCdXkoKSB7XHJcbiAgICAgICAgbGV0IGZlZWQgPSB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XSBhcyBGZWVkRGF0YUJhc2U7XHJcbiAgICAgICAgaWYgKCFmZWVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZlZWRCdXksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImZlZWRCdXlcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGZlZWRJZDogZmVlZC5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ICs9IGZlZWQuYmFzZS52aXRhbGl0eTtcclxuXHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogdGhpcy5mZWVkQnV5QnRuIGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogZmVlZC5iYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbm90Rmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTVCQTBcdTcyNjlcdTUzQkJcdTc3MEJcdTVCQjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwZXRHb1dhdGNoKHBldElkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAucGV0V2VhcixcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wicGV0QnV5XCJdPntcclxuICAgICAgICAgICAgICAgICAgICBwZXRJZDogcGV0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLndhcmVQZXRJZCA9IHBldElkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4RDJEXHU0RTcwXHU1QkEwXHU3MjY5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGV0QnV5KCkge1xyXG4gICAgICAgIGxldCB7IGJhc2UgfSA9IFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XTtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAucGV0QnV5LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJwZXRCdXlcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHBldElkOiBiYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XS5sb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8ud2FyZVBldElkKSBVc2VySW5mby53YXJlUGV0SWQgPSBiYXNlLmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5wZXRWaXRhbGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gYmFzZS52aXRhbGl0eV9tYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXREaWdlc3RJbnRlcnZhbFRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICkudmFsdWUgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU3MEI5XHU1MUZCXHU3MEI5XHU1MUZCXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlVG9wQnRuU3RhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJ0bkJveFRvcC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBsYiA9IGJ0bi5nZXRDaGlsZEF0KDApIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGlmICh4ID09PSB0aGlzLnRvcEJ0blNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVsxXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZy1tZW51bm9ybWFsLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVCb3R0b20oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NUU5NVx1OTBFOFx1NTE4NVx1NUJCOVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJvdHRvbSgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm90dG9tQm94Lm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSh4LCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpdGVtQnV5Qm94ID0gdGhpcy5pdGVtQnV5QnRuLnBhcmVudCBhcyBMYXlhLkJveDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy9cdTc5Q0RcdTVCNTBcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBldE9yRmVlZExpc3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJ1eUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjogLy9cdTk5NzJcdTY1OTlcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBldE9yRmVlZExpc3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJ1eUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VMaXN0LmFycmF5ID0gdGhpcy5wcmljZURhdGFMaXN0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUGV0KCkge1xyXG4gICAgICAgIGlmICghUGV0U2VydmljZS5saXN0Lmxlbmd0aCkgUGV0U2VydmljZS5pbml0KFtdKTtcclxuICAgICAgICBsZXQgcGV0ID0gUGV0U2VydmljZS5saXN0W3RoaXMuc2VsZWN0UGV0SW5kZXhdO1xyXG4gICAgICAgIHRoaXMucGV0SWNvbi5zb3VyY2UgPSBgcmVzL2RvZ18ke3BldC5iYXNlLmlkfS5hdGxhc2A7XHJcbiAgICAgICAgdGhpcy5wZXROYW1lLnRleHQgPSBwZXQuYmFzZS5uYW1lO1xyXG4gICAgICAgIHRoaXMucGV0RGVzYy50ZXh0ID0gcGV0LmJhc2UuZGVzYztcclxuICAgICAgICB0aGlzLnZpdGFsaXR5TWF4LnZhbHVlID0gcGV0LmJhc2Uudml0YWxpdHlfbWF4ICsgXCJcIjtcclxuICAgICAgICBsZXQgYnRuX2JveCA9IHRoaXMucGV0QnV5QnRuLmdldENoaWxkQnlOYW1lKFwiYnRuX2JveFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAoYnRuX2JveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHBldC5iYXNlLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgKGJ0bl9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IHBldC5iYXNlLmNvc3QuY291bnQgKyBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgcGV0Qm94ID0gdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgxKSxcclxuICAgICAgICAgICAgZmluZEJveCA9IHBldEJveC5nZXRDaGlsZEJ5TmFtZShcImZpbmRfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBiYWNrX2JveCA9IHBldEJveC5nZXRDaGlsZEJ5TmFtZShcImJhY2tfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBzdGFySWNvbjogTGF5YS5JbWFnZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHgrKykge1xyXG4gICAgICAgICAgICBzdGFySWNvbiA9IGZpbmRCb3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi52aXNpYmxlID0geCAqIDIwIDwgcGV0LmJhc2Uuc2Vuc2l0aXZlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi5za2luID1cclxuICAgICAgICAgICAgICAgIHggKiAyMCArIDEwIDwgcGV0LmJhc2Uuc2Vuc2l0aXZlID8gXCJnYW1lL2ltZ19zdGFyLnBuZ1wiIDogXCJnYW1lL2ltZ19oYWxmc3Rhci5wbmdcIjtcclxuICAgICAgICAgICAgc3Rhckljb24gPSBiYWNrX2JveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIHN0YXJJY29uLnZpc2libGUgPSB4ICogMjAgPCBwZXQuYmFzZS5hYmlsaXR5O1xyXG4gICAgICAgICAgICBzdGFySWNvbi5za2luID1cclxuICAgICAgICAgICAgICAgIHggKiAyMCArIDEwIDwgcGV0LmJhc2UuYWJpbGl0eSA/IFwiZ2FtZS9pbWdfc3Rhci5wbmdcIiA6IFwiZ2FtZS9pbWdfaGFsZnN0YXIucG5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwZXQubG9jaykge1xyXG4gICAgICAgICAgICB0aGlzLnBldEJ1eUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nb1Jlc3QudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmdvV2F0Y2gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby53YXJlUGV0SWQgPT0gcGV0LmJhc2UuaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChQZXRTZXJ2aWNlLmdldFVubG9ja0xlbigpID09PSAxIHx8IFVzZXJJbmZvLndhcmVQZXRJZCA9PT0gMTAwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1Jlc3QuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1dhdGNoLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29XYXRjaC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXRCdXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTFDRFx1N0Y2RVx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlc2V0UGV0T3JGZWVkTGlzdCgpIHtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZ2V0RGF0YUxpc3QoKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NEUyRFx1OTVGNFx1NTE4NVx1NUJCOVx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NTIwN1x1NjM2MlxyXG4gICAgICogQHBhcmFtIGkgXHU0RTBCXHU2ODA3XHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDZW50ZXJCb3hTdGF0ZShpOiBudW1iZXIsIHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdChpKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHNob3c7XHJcbiAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoaSkgYXMgTGF5YS5Cb3gpLmFjdGl2ZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk0QjFcdTVFODRcdTkwMDlcdTYyRTlcclxuICAgICAqIEBwYXJhbSBlIFx1NEUwQlx1NjgwN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9uUHJpY2VTZWxlY3QoZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wcmljZVNlbGVjdEluZGV4ID0gZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByaWNlRGVzYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FuUHJpY2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1RTk1XHU5MEU4XHU1M0Q2XHU3M0IwXHU2M0NGXHU4RkYwXHU3QjQ5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUHJpY2VEZXNjKCkge1xyXG4gICAgICAgIGxldCBkYXRhID1cclxuICAgICAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxfdGltZXNcIikudmFsdWVbdGhpcy5wcmljZVNlbGVjdEluZGV4XTtcclxuICAgICAgICBsZXQgZGVzYyA9IHRoaXMuY29uZGl0aW9uQm94LmdldENoaWxkQnlOYW1lKFwiZGVzY1wiKTtcclxuICAgICAgICBsZXQgYmFyQm94ID0gdGhpcy5jb25kaXRpb25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYXJfYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIGxldCBidG4gPSB0aGlzLmNvbmRpdGlvbkJveC5nZXRDaGlsZEJ5TmFtZShcImdvX2p1bXBcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbkJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLm9yZGVyTGV2ZWwgPCBkYXRhLm9yZGVyTHYpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25kaXRpb25Cb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY1ByaWNlQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgKGRlc2MuZ2V0Q2hpbGRCeU5hbWUoXCJsYjFcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdThCQTJcdTUzNTVgO1xyXG4gICAgICAgICAgICAoZGVzYy5nZXRDaGlsZEJ5TmFtZShcImxiMlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7ZGF0YS5vcmRlckx2fWA7XHJcbiAgICAgICAgICAgIChkZXNjLmdldENoaWxkQnlOYW1lKFwibGIzXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU3RUE3XHU1MzczXHU1M0VGXHU2M0QwXHU3M0IwYDtcclxuICAgICAgICAgICAgKGJhckJveC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICAoVXNlckluZm8ub3JkZXJMZXZlbCA+IGRhdGEub3JkZXJMdiA/IDEgOiBVc2VySW5mby5vcmRlckxldmVsIC8gZGF0YS5vcmRlckx2KSAqIDQzNDtcclxuICAgICAgICAgICAgKGJhckJveC5nZXRDaGlsZEJ5TmFtZShcImxiXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLm9yZGVyTGV2ZWwgPiBkYXRhLm9yZGVyTHYgPyBkYXRhLm9yZGVyTHYgOiBVc2VySW5mby5vcmRlckxldmVsXHJcbiAgICAgICAgICAgIH0vJHtkYXRhLm9yZGVyTHZ9YDtcclxuICAgICAgICAgICAgYnRuLnNraW4gPSBgZ2FtZS9pbWdfZ29Ub1dvcmsucG5nYDtcclxuICAgICAgICAgICAgYnRuLmRhdGFTb3VyY2UgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmNhblByaWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmludml0ZU51bSA8IGRhdGEuaW52aXRlQW1vdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NQcmljZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIChkZXNjLmdldENoaWxkQnlOYW1lKFwibGIxXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU5MDgwXHU4QkY3YDtcclxuICAgICAgICAgICAgKGRlc2MuZ2V0Q2hpbGRCeU5hbWUoXCJsYjJcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke2RhdGEuaW52aXRlQW1vdW50fWA7XHJcbiAgICAgICAgICAgIChkZXNjLmdldENoaWxkQnlOYW1lKFwibGIzXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU0RTJBXHU1MzczXHU1M0VGXHU2M0QwXHU3M0IwYDtcclxuICAgICAgICAgICAgKGJhckJveC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pbnZpdGVOdW0gPiBkYXRhLmludml0ZUFtb3VudCA/IDEgOiB0aGlzLmludml0ZU51bSAvIGRhdGEuaW52aXRlQW1vdW50KSAqIDQzNDtcclxuICAgICAgICAgICAgKGJhckJveC5nZXRDaGlsZEJ5TmFtZShcImxiXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52aXRlTnVtID4gZGF0YS5pbnZpdGVBbW91bnQgPyBkYXRhLmludml0ZUFtb3VudCA6IHRoaXMuaW52aXRlTnVtXHJcbiAgICAgICAgICAgIH0vJHtkYXRhLmludml0ZUFtb3VudH1gO1xyXG4gICAgICAgICAgICBidG4uc2tpbiA9IGBnYW1lL2ltZ19nb1RvSW52aXRlLnBuZ2A7XHJcbiAgICAgICAgICAgIGJ0bi5kYXRhU291cmNlID0gMjtcclxuICAgICAgICAgICAgdGhpcy5jYW5QcmljZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuUHJpY2UgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGVzY1ByaWNlQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYzRDBcdTczQjBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB3aXRoZHJhdygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuUHJpY2UpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTYzRDBcdTczQjBcdTY3NjFcdTRFRjZcdTRFMERcdTZFRTFcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJpY2VTZWxlY3RJbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU5MDA5XHU2MkU5XHU4OTgxXHU2M0QwXHU3M0IwXHU3Njg0XHU5MUQxXHU5ODlEXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC53aXRoZHJhdyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQ6IHRoaXMucHJpY2VTZWxlY3RJbmRleCB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2M0QwXHU3M0IwXHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBkLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC5kaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJXaXRoZHJhd2FsXCIgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5NEIxXHU1RTg0XHU2NTcwXHU2MzZFXHU2RTMyXHU2N0QzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUHJpY2VJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5wcmljZURhdGFMaXN0W2ldO1xyXG5cclxuICAgICAgICBsZXQgdXNlckRhdGE6IE5ldEluaXRbXCJ3aXRoZHJhd1wiXVswXSA9IHsgaWQ6IDAsIHRpbWVzOiAwIH07XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGFMaXN0ID0gVXNlckluZm8ud2l0aGRyYXc7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB1c2VyRGF0YUxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJEYXRhTGlzdFt4XS5pZCA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyRGF0YSA9IHVzZXJEYXRhTGlzdFt4XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBkYXRhLnByaWNlICsgXCJcdTUxNDNcIjtcclxuICAgICAgICBpZiAoZGF0YS50aW1lcykge1xyXG4gICAgICAgICAgICBsZXQgdGltZXMgPSBkYXRhLnRpbWVzIC0gdXNlckRhdGEudGltZXM7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZXNfYm94XCIpIGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc19ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1NTI2OVx1NEY1OSR7XHJcbiAgICAgICAgICAgIC8vICAgICB0aW1lcyA8IDAgPyAwIDogdGltZXNcclxuICAgICAgICAgICAgLy8gfVx1NkIyMWA7XHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc19ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc1wiKSBhcyBMYXlhLkxhYmVsXHJcbiAgICAgICAgICAgICkudGV4dCA9IGBcdTY1QjBcdTYyNEJcdTU5NTZcdTUyQjFgO1xyXG4gICAgICAgICAgICBpZiAodGltZXMgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnByaWNlID4gMC4zKSAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVzX2JveFwiKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZXNfYm94XCIpIGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcmljZUxpc3Quc2VsZWN0ZWRJbmRleCA9PT0gaSkge1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBcImdhbWUvaW1nX3ByaWNlc2VsZWN0ZWQucG5nXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlKS5za2luID0gXCJnYW1lL2ltZ19wcmljZW5vcm1hbC5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5EZXNjVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbkluRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TaWduSW5EZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5cclxuLy8gIFNpZ25JblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzaWduSW5MaXN0LCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgc2lnbkluTGlzdDogTGF5YS5MaXN0O1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzaWduSW5Qcm9ncmVzc0xiLCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgc2lnbkluUHJvZ3Jlc3NMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzaWduSW5Qcm9ncmVzc0JhciwgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1Njc2MVwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHNpZ25JblByb2dyZXNzQmFyOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByb2dyZXNzRGVzYywgdGlwczpcIlx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1NjU4N1x1NUI1N1x1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9ICovXHJcbiAgICBwcml2YXRlIHByb2dyZXNzRGVzYzogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaW5pc2hJY29uLCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHU2NTg3XHU1QjU3XHU2M0QwXHU3OTNBXCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgZmluaXNoSWNvbjogTGF5YS5JbWFnZTtcclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMuc2lnbkluTGlzdC5hcnJheSA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5saXN0O1xyXG4gICAgICAgIHRoaXMuc2lnbkluTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zaWduSW5MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlSXRlbSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gVXNlckluZm8uc3BlZWRVcFRpbWVzIC8gQ29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lcztcclxuICAgICAgICBpZiAoc2NhbGUgPiAxKSBzY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5zaWduSW5Qcm9ncmVzc0Jhci53aWR0aCA9IDk3NyAqIHNjYWxlO1xyXG4gICAgICAgIHRoaXMuc2lnbkluUHJvZ3Jlc3NMYi50ZXh0ID0gVXNlckluZm8uc2lnbkluRGF5cyArIFwiXCI7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Rlc2MudGV4dCA9IGBcdTRFQ0FcdTY1RTVcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdUZGMDhcdTRGN0ZcdTc1Mjgke1VzZXJJbmZvLnNwZWVkVXBUaW1lc30vJHtDb25maWdHYW1lLkFEU3BlZWRVcFRpbWVzfVx1NkIyMVx1NTJBMFx1OTAxRlx1RkYwOWA7XHJcbiAgICAgICAgdGhpcy5maW5pc2hJY29uLnZpc2libGUgPSBVc2VySW5mby5zcGVlZFVwVGltZXMgPj0gQ29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUl0ZW0oY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGJhciA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgb2JqID0gVGFibGVBbmFseXplLnRhYmxlKFwic2lnbkluXCIpLmxpc3RbaV07XHJcbiAgICAgICAgbGV0IHNjYWxlID0gVXNlckluZm8uc2lnbkluRGF5cyAvIG9iai5kYXlzO1xyXG4gICAgICAgIGlmIChzY2FsZSA+IDEpIHNjYWxlID0gMTtcclxuICAgICAgICBiYXIud2lkdGggPSA1MDIgKiBzY2FsZTtcclxuICAgICAgICBjb25zdCByZXdhcmRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gb2JqLnJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiYW1vdW50XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgeCR7b2JqLnJld2FyZC5jb3VudH1gO1xyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInNpZ25fZGF5c1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1N0I3RVx1NTIzMCR7b2JqLmRheXN9XHU1OTI5YDtcclxuXHJcbiAgICAgICAgbGV0IHNraW46IHN0cmluZyA9IFwiXCIsXHJcbiAgICAgICAgICAgIGJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRfYnRuXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgYnRuLmRhdGFTb3VyY2UgPSBvYmouaWQ7XHJcbiAgICAgICAgaWYgKG9iai5pZCA+IFVzZXJJbmZvLnNpZ25JbklkKSB7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBidG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXdhcmRCb3gueSA9IDEwMztcclxuICAgICAgICAgICAgc2tpbiA9IGBnYW1lL2ltZ19kb25lLnBuZ2A7XHJcblxyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8uc2lnbkluRGF5cyA+PSBvYmouZGF5cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVc2VySW5mby5zaWduSW5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaWQgPT0gVGFibGVBbmFseXplLnRhYmxlKFwic2lnbkluXCIpLmxpc3RbMF0uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbiA9IGBnYW1lL2ltZ19nZXQucG5nYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQm94LnkgPSA1NztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaWQgLSBVc2VySW5mby5zaWduSW5JZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraW4gPSBgZ2FtZS9pbWdfZ2V0LnBuZ2A7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZEJveC55ID0gNTc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2tpbiA9IGBnYW1lL2ltZ19yZWNlaXZlZC5wbmdgO1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LnkgPSA1NztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuLnNraW4gPSBza2luO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNpZ25JblZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkZXNjX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNpZ25JbkRlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ2V0X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTk4ODZcdTUzRDZcdTU5NTZcdTUyQjFcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaWduSW5JZCA9IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuc2lnbkluUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFELCBzaWduSW5JZDogc2lnbkluSWQgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uc2lnbkluSWQgPSBzaWduSW5JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduSW5MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJld2FyZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInNpZ25JblwiKS5nZXQoc2lnbkluSWQpLnJld2FyZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogZS50YXJnZXQgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiByZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogcmV3YXJkLmNvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiByZXdhcmQub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkID8gMSA6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy9kZWZhdWx0IGNsYXNzIFNwZWVkVXBWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVlZFVwVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGltZUxiLCB0aXBzOlwiXHU1MkEwXHU5MDFGXHU2NUY2XHU5NUY0XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0aW1lTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGltZXNMYiwgdGlwczpcIlx1NTE2OFx1NEY1M1x1NTJBMFx1OTAxRlx1NTI2OVx1NEY1OVx1NkIyMVx1NjU3MFx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGltZXNMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzcGVlZFVwQnRuLCB0aXBzOlwiXHU1MTY4XHU0RjUzXHU1MkEwXHU5MDFGXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzcGVlZFVwQnRuOiBMYXlhLkxhYmVsO1xyXG5cclxuICAgIHByaXZhdGUgY2FsbDogRnVuY3Rpb247XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5jYWxsID0gZGF0YS5jYWxsO1xyXG4gICAgICAgIGxldCB0aW1lID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcImFsbF9zcGVlZF91cF90aW1lXCIpLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICB0aGlzLnRpbWVMYi50ZXh0ID0gYCR7TWF0aC5jZWlsKHRpbWUgLyA2MCl9XHU1MjA2XHU5NDlGYDtcclxuICAgICAgICB0aGlzLnRpbWVzTGIudGV4dCA9IGBcdTRFQ0FcdTY1RTVcdTUyNjlcdTRGNTkke1VzZXJJbmZvLmFkdmVydGlzZVRpbWVzfVx1NkIyMWA7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFVwQnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMyB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhZFR5cGU6IDIgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImhhbGZfc2NyZWVuX2FkdmVydGlzZW1lbnRcIiB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiYm90dG9tX2FkdmVydGlzZW1lbnRcIiB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNwZWVkVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3BlZWRfdXBcIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTcGVlZFVwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFEIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkdmVydGlzZVRpbWVzOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZFVwVGltZXM6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkUmV3YXJkOiBSZXR1cm5Vc2VySW5mb1tcImFkUmV3YXJkXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5zcGVlZFVwVGltZXMgPSBkLnNwZWVkVXBUaW1lcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzID0gZC5hZHZlcnRpc2VUaW1lcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVXNlckluZm8uc3BlZWRVcFRpbWVzID09IENvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5zaWduSW5EYXlzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcInB1bmNodGhlY2xvY2tcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiQWR2ZXJ0aXNpbmdhY2NlbGVyYXRpb25cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TcGVlZFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5sYW5kX3NwZWVkX3VwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmFkUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsbCkgdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmNsb3NlQWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50T24gfSBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi4vY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4uL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uT2JqIHtcclxuICAgIC8qKiBcdTRFRkJcdTUyQTFpZCAqL1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTVCOENcdTYyMTAgKi9cclxuICAgIG9rOiBib29sZWFuO1xyXG59XHJcblxyXG4vLyAgVGFza1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGFza0xpc3QsIHRpcHM6XCJcdTRFRkJcdTUyQTFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRhc2tMaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2sgPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGFza0xpc3QoKTtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMuaXRlbVJlbmRlcik7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFza0xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC5hcnJheSA9IFRhc2tTZXJ2aWNlLmdldExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGl0ZW1SZW5kZXIoY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBvYmogPSBUYXNrU2VydmljZS5saXN0W2ldLmJhc2U7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IFRhc2tTZXJ2aWNlLmdldFRhc2sob2JqPy5pZCk7XHJcbiAgICAgICAgaWYgKCF0YXNrKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IGBcdTRFRkJcdTUyQTFcdTkxNERcdTdGNkVcdTUxRkFcdTk1MTksXHU5MTREXHU3RjZFXHU0RTBEXHU1QjU4XHU1NzI4YCwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmouaWNvbjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBvYmoudGl0bGU7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiZGVzY1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7b2JqLmRlc2N9KCR7XHJcbiAgICAgICAgICAgICh0YXNrPy50aW1lcyA+IG9iai50aW1lcyA/IG9iai50aW1lcyA6IHRhc2s/LnRpbWVzKSB8fCAwXHJcbiAgICAgICAgfS8ke29iai50aW1lc30pYDtcclxuXHJcbiAgICAgICAgY29uc3QgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gb2JqLnJld2FyZC5vYmouaWNvbjtcclxuXHJcbiAgICAgICAgaWYgKG9iai5pZCA9PT0gMTAxMikge1xyXG4gICAgICAgICAgICBjb25zdCByZXdhcmQgPSAoXHJcbiAgICAgICAgICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiVmlkZW9yZXdhcmRzXCIpLnZhbHVlIGFzIFJld2FyZEN1cnJlbmN5QmFzZVxyXG4gICAgICAgICAgICApLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgbGV0IHByaWNlID0gb2JqLnJld2FyZC5jb3VudCArIChvYmoudGltZXMgLSAodGFzaz8udGltZXMgfHwgMCkpICogcmV3YXJkO1xyXG4gICAgICAgICAgICBpZiAocHJpY2UgPCBvYmoucmV3YXJkLmNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZSA9IG9iai5yZXdhcmQuY291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJhbW91bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IFwieFwiICsgcHJpY2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImFtb3VudFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gXCJ4XCIgKyBvYmoucmV3YXJkLmNvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImdvX3J1blwiKSBhcyBMYXlhLkltYWdlO1xyXG5cclxuICAgICAgICBjb25zdCBidG5PYmo6IEJ1dHRvbk9iaiA9IHtcclxuICAgICAgICAgICAgaWQ6IG9iai5pZCxcclxuICAgICAgICAgICAgb2s6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vXHU1REYyXHU5ODg2XHU1M0Q2XHJcbiAgICAgICAgaWYgKHRhc2s/LnJlY2VpdmUpIHtcclxuICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX3RvbWFyb3cucG5nXCI7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vXHU1M0VGXHU5ODg2XHU1M0Q2XHJcbiAgICAgICAgICAgIGlmICh0YXNrPy50aW1lcyA+PSBvYmoudGltZXMpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ19nZXQucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBidG5PYmoub2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX2RvbmUucG5nXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ0bi5kYXRhU291cmNlID0gYnRuT2JqO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fcnVuXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGxldCBidG5PYmo6IEJ1dHRvbk9iaiA9IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuT2JqLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTgzQjdcdTUzRDZcdTU5NTZcdTUyQjFcclxuICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC50YXNrUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LCB0YXNrSWQ6IGJ0bk9iai5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gVGFza1NlcnZpY2UuZ2V0VGFzayhidG5PYmouaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5yZWNlaXZlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk9iai5vayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFza0xpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfdGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHRhc2suYmFzZS5yZXdhcmQub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IHRhc2suYmFzZS5yZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suYmFzZS5yZXdhcmQub2JqLmlkID09IENvbmZpZ0dhbWUuZGlhbW9uZElkID8gMiA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wKGJ0bk9iai5pZCwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGp1bXAoaWQsIHRhcmdldCkge1xyXG4gICAgICAgIGxldCBhZERhdGE7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgICAgY2FzZSAxMDEyOlxyXG4gICAgICAgICAgICBjYXNlIDEwMDE6XHJcbiAgICAgICAgICAgICAgICBhZERhdGEgPSBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhZERhdGE/LmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBgXHU1RTdGXHU1NDRBXHU2NEFEXHU2NTNFXHU1OTMxXHU4RDI1WyR7YWREYXRhLmNvZGV9XWAsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJZDogaWQgPT0gMTAxMiA/IDEwMTIgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGQ6IHsgYWRSZXdhcmQ6IFJldHVyblVzZXJJbmZvW1wiYWRSZXdhcmRcIl0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIFt0YXJnZXQsIGQuYWRSZXdhcmRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09IDEwMTIpIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDEyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFkRGF0YT8uZGF0YVtcImhhc0NsaWNrZWRcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5jb250aW51b3VzQWRUaW1lcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5hZFJlY29yZE5vdENsaWNrLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGltZXM6IFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDAyOlxyXG4gICAgICAgICAgICAvLyBhZERhdGEgPSBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgLy8gICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgIC8vICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgLy8gICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoYWREYXRhPy5jb2RlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRleHQ6IGAke2FkRGF0YS5kYXRhW1wibWVzc2FnZVwiXX1bJHthZERhdGEuY29kZX1dYCxcclxuICAgICAgICAgICAgLy8gICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLy8gICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBhcGk6IEFwaUh0dHAuYWQsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0YXNrSWQ6IDEwMDIsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAudGhlbigoZDogeyBhZFJld2FyZDogUmV0dXJuVXNlckluZm9bXCJhZFJld2FyZFwiXSB9KSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCBbdGFyZ2V0LCBkLmFkUmV3YXJkXSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy50YXNrTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDEyKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAwMik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMzpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNDpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMub3Blbl9mcmllbmQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNTpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDEgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDY6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAxIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA3OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGFudF9zb3cpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwODpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLldhcmVob3VzZVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwOTpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMub3Blbl9mcmllbmQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxMDpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC53eFNoYXJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWQgfHwgZD8uY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBkLmRhdGFbXCJtZXNzYWdlXCJdLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBkLmRhdGFbXCJtZXNzYWdlXCJdLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRTaGFyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJzaGFyZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMTE6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYW50X3Nvdyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSwgeyBXYXJlSG91c2VEYXRhIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbmxldCBzZWxsTnVtID0gMDtcclxuXHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcclxuICovXHJcbi8vRmllbGRMZXZlbFVwVmlldyBXYXJlaG91c2VWaWV3IExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FyZWhvdXNlVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTcyNjlcdTU0QzFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1OYW1lLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxXHU1NDBEXHU3OUYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTmFtZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbURlc2MsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1EZXNjOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtSWNvbiwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1JY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbENvdW50TGIsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTUxRkFcdTU1MkVcdTY1NzBcdTkxQ0ZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsQ291bnRMYjogTGF5YS5UZXh0SW5wdXQgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsQm94LCB0aXBzOlwiXHU1MUZBXHU1NTJFXHU3MjY5XHU1NEMxXHU0RUY3XHU2ODNDXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtU2VsbEJveDogTGF5YS5IQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbEdvbGQsIHRpcHM6XCJcdTkxRDFcdTVFMDFcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsR29sZDogTGF5YS5IQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtU2VsbERpYW1vbmQsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsRGlhbW9uZDogTGF5YS5IQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWxsQnRuLCB0aXBzOlwiXHU1MUZBXHU1NTJFXHU3Njg0aWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VsbEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2VsbEFkQnRuLCB0aXBzOlwiXHU1MUZBXHU1NTJFXHU3Njg0aWNvbiBcdTVFN0ZcdTU0NEFcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNlbGxBZEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZW1wdHlfbGIsIHRpcHM6XCJcdTdBN0FcdTc2ODRcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGVtcHR5X2xiOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGRhdGFMaXN0OiBXYXJlSG91c2VEYXRhW11bXSA9IFtdO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMSBcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbUluZGV4OiBzdHJpbmcgPSBcIjAsMFwiO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NzY4NFx1NzI2OVx1NTRDMVx1NjU3MFx1NjM2RSAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtRGF0YTogV2FyZUhvdXNlRGF0YTtcclxuICAgIC8qKiBcdTkwMDlcdTRFMkRcdTUxRkFcdTU1MkVcdTcyNjlcdTU0QzFcdTc2ODRcdTY1NzBcdTkxQ0YgKi9cclxuICAgIHByaXZhdGUgc2VsZWN0SXRlbVNlbGxDb3VudDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUzNTVcdTRFRjcgXHU5MUQxXHU1RTAxICovXHJcbiAgICBwcml2YXRlIHVuaXRQcmljZUdvbGQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1MzU1XHU0RUY3IFx1OTRCQlx1NzdGMyAqL1xyXG4gICAgcHJpdmF0ZSB1bml0UHJpY2VEaWFtb25kOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKCkge1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuZGFrYWljYW5na3UpO1xyXG4gICAgICAgIHRoaXMuc2VsbEFkQnRuLmRpc2FibGVkID0gIVVzZXJJbmZvLmFkdmVydGlzZVRpbWVzO1xyXG4gICAgICAgIHRoaXMuc2VsbEFkQnRuLmFjdGl2ZSA9IEJvb2xlYW4oVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMpO1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMyB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJib3R0b21fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJJdGVtTGlzdCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdCgpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZURlc2MobnVsbCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxHb2xkLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsRGlhbW9uZC5yZW1vdmVTZWxmKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLm9uKExheWEuRXZlbnQuSU5QVVQsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gTnVtYmVyKHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGxDb3VudExiLnRleHQgPSBcIjFcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA+IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMaXN0KCkge1xyXG4gICAgICAgIGxldCBpID0gMCxcclxuICAgICAgICAgICAgeSA9IDAsXHJcbiAgICAgICAgICAgIGhhc1NlbGVjdCA9IGZhbHNlO1xyXG4gICAgICAgIFdhcmVob3VzZVNlcnZpY2UubGlzdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhTGlzdFt5XSkgdGhpcy5kYXRhTGlzdFt5XSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFMaXN0W3ldLnB1c2goZCk7XHJcbiAgICAgICAgICAgIGlmIChkLmJhc2UuaWQgPT0gdGhpcy5zZWxlY3RJdGVtRGF0YT8uYmFzZS5pZCkge1xyXG4gICAgICAgICAgICAgICAgaGFzU2VsZWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIGlmIChpID4gMikge1xyXG4gICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgICAgICB5Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFoYXNTZWxlY3QgJiYgdGhpcy5kYXRhTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtSW5kZXggPSBcIjAsMFwiO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZGF0YUxpc3Q7XHJcbiAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gIXRoaXMuZGF0YUxpc3QubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVySXRlbUxpc3QoY2VsbDogTGF5YS5Cb3gsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhTGlzdFtpXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoYGl0ZW1fJHt4fWApIGFzIExheWEuQm94O1xyXG4gICAgICAgICAgICBpZiAoZGF0YVt4XSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZGF0YVNvdXJjZSA9IGAke2l9LCR7eH1gO1xyXG4gICAgICAgICAgICAgICAgbGV0IGljb24gPSBpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICAgICAgaWNvbi5za2luID0gZGF0YVt4XS5iYXNlLmljb247XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikgYXMgTGF5YS5MYWJlbFxyXG4gICAgICAgICAgICAgICAgKS50ZXh0ID0gYCR7ZGF0YVt4XS5iYXNlLm5hbWV9XyR7ZGF0YVt4XS5jb3VudH1gO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpID09IHRoaXMuaXRlbUxpc3Quc2VsZWN0ZWRJbmRleCAmJiB0aGlzLnNlbGVjdEl0ZW1JbmRleCA9PSBpdGVtLmRhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKGljb24sIHsgeTogMCB9LCAxNTAsIG51bGwsIG51bGwsIG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1EYXRhID0gZGF0YVt4XTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlc2MoZGF0YVt4XSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGljb24ueSA9IDU2O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpY29uLnkgIT0gNTYpIExheWEuVHdlZW4udG8oaWNvbiwgeyB5OiA1NiB9LCAxNTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8wXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzFcIjpcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtSW5kZXggPSBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl07XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTsgLy8gXHU4RkQ5XHU5MUNDXHU5NzAwXHU4OTgxXHU0RjE4XHU1MzE2XHU3M0IwXHU1NzI4XHU1MDVBXHU3Njg0XHU2NjJGXHU1MjM3XHU2NUIwXHU2NTc0XHU0RTJBXHU1MjE3XHU4ODY4XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID4gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVkdWNlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQtLTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPCAxKSB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2VsbEJ0bkFkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWxsQnRuXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYnRuTmFtZSA9IGUudGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuTmFtZSA9PSBcInNlbGxCdG5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsbE51bSAmJiAhKHNlbGxOdW0gJSAxMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBhZFR5cGU6IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJmdWxsX1NjcmVlblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxsTnVtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC53YXJlaG91c2VTZWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJ3YXJlaG91c2VTZWxsXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5zZWxlY3RJdGVtRGF0YS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bk5hbWUgPT0gXCJzZWxsQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBDb25maWdHYW1lLkFwaVR5cGVBRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkOiB7IGFkUmV3YXJkOiBSZXR1cm5Vc2VySW5mb1tcImFkUmV3YXJkXCJdIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsbEFkQnRuLmRpc2FibGVkID0gIVVzZXJJbmZvLmFkdmVydGlzZVRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxsQWRCdG4uYWN0aXZlID0gQm9vbGVhbihVc2VySW5mby5hZHZlcnRpc2VUaW1lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UucmVkdWNlQW1vdW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbURhdGEuYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVzYyhudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkTGlzdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuaXRQcmljZUdvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChDb25maWdHYW1lLmdvbGRJZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdFByaWNlR29sZCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYnRuTmFtZSA9PSBcInNlbGxCdG5BZFwiID8gMiA6IDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NUeXBlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdFByaWNlRGlhbW9uZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZGlhbW9uZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0UHJpY2VEaWFtb25kICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChidG5OYW1lID09IFwic2VsbEJ0bkFkXCIgPyAyIDogMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bk5hbWUgPT0gXCJzZWxsQnRuQWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuYWRSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcIkRvdWJsZXNhbGVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0aGlzLnNlbGxCdG4gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJld2FyZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2s6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLmFkVGltZXMgPiAxMDAgfHwgVXNlckluZm8uY29udGludW91c0FkVGltZXMgPiAyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBhZFR5cGU6IDMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiZnVsbF9TY3JlZW5cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJib3R0b21fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1MUZBXHU1MUZBXHU1NTJFXHU0RkUxXHU2MDZGXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlRGVzYyhkOiBXYXJlSG91c2VEYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkKSB7XHJcbiAgICAgICAgICAgICh0aGlzLml0ZW1JY29uLnBhcmVudCBhcyBMYXlhLkJveCkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAodGhpcy5pdGVtSWNvbi5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1TZWxsRGlhbW9uZC5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbEdvbGQucmVtb3ZlU2VsZigpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1JY29uLnNraW4gPSBkLmJhc2UuaWNvbjtcclxuICAgICAgICB0aGlzLml0ZW1OYW1lLnRleHQgPSBkLmJhc2UubmFtZTtcclxuICAgICAgICB0aGlzLml0ZW1EZXNjLnRleHQgPSBkLmJhc2UuZGVzYztcclxuICAgICAgICBsZXQgcHJpY2VHb2xkOiBSZXdhcmRDdXJyZW5jeUJhc2UsIHByaWNlRGlhbW9uZDogUmV3YXJkQ3VycmVuY3lCYXNlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZC5iYXNlLmdhaW4ubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZC5iYXNlLmdhaW5beF0pO1xyXG4gICAgICAgICAgICBpZiAoIWQuYmFzZS5nYWluW3hdLmNvdW50KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGQuYmFzZS5nYWluW3hdLm9iai5pZCA9PSBDb25maWdHYW1lLmdvbGRJZCkge1xyXG4gICAgICAgICAgICAgICAgcHJpY2VHb2xkID0gZC5iYXNlLmdhaW5beF07XHJcbiAgICAgICAgICAgICAgICAodGhpcy5pdGVtU2VsbEdvbGQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPVxyXG4gICAgICAgICAgICAgICAgICAgIGQuYmFzZS5nYWluW3hdLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsbEJveC5hZGRDaGlsZCh0aGlzLml0ZW1TZWxsR29sZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZURpYW1vbmQgPSBkLmJhc2UuZ2Fpblt4XTtcclxuICAgICAgICAgICAgICAgICh0aGlzLml0ZW1TZWxsRGlhbW9uZC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgZC5iYXNlLmdhaW5beF0ub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxsQm94LmFkZENoaWxkKHRoaXMuaXRlbVNlbGxEaWFtb25kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID0gZC5jb3VudDtcclxuICAgICAgICB0aGlzLnVuaXRQcmljZUdvbGQgPSBwcmljZUdvbGQ/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgdGhpcy51bml0UHJpY2VEaWFtb25kID0gcHJpY2VEaWFtb25kPy5jb3VudCB8fCAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0U2VsbENvdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUzRUZcdTRFRTVcdTUxRkFcdTU1MkVcdTc2ODRcdTY1NzBcdTkxQ0ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTZWxlY3RTZWxsQ291bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbENvdW50TGIudGV4dCA9IHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCArIFwiXCI7XHJcbiAgICAgICAgKHRoaXMuaXRlbVNlbGxHb2xkLmdldENoaWxkQnlOYW1lKFwicHJpY2VcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqIHRoaXMudW5pdFByaWNlR29sZCArIFwiXCI7XHJcbiAgICAgICAgKHRoaXMuaXRlbVNlbGxEaWFtb25kLmdldENoaWxkQnlOYW1lKFwicHJpY2VcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqIHRoaXMudW5pdFByaWNlRGlhbW9uZCArIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuY2xvc2VBZCxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXRoZHJhd1JlY29yZFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpdGhkcmF3UmVjb3JkVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6bGlzdCwgdGlwczpcIlx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGlzdDogTGF5YS5MaXN0O1xyXG5cclxuICAgIHByaXZhdGUgZGF0YUxpc3Q6IFdpdGhkcmF3UmVjb3JkRGF0YVtdO1xyXG5cclxuICAgIG9uT3BlbmVkKGU6IFdpdGhkcmF3UmVjb3JkRGF0YVtdKTogdm9pZCB7XHJcbiAgICAgICAgZS5zb3J0KChhLCBiKSA9PiBiLnRpbWUgLSBhLnRpbWUpO1xyXG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBlO1xyXG4gICAgICAgIHRoaXMubGlzdC5hcnJheSA9IGU7XHJcbiAgICAgICAgdGhpcy5saXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMuaXRlbVJlbmRlcik7XHJcbiAgICAgICAgdGhpcy5saXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICAodGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShcImVtcHR5X2xiXCIpIGFzIExheWEuTGFiZWwpLnZpc2libGUgPSAhZS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtUmVuZGVyKGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmRhdGFMaXN0W2ldO1xyXG4gICAgICAgIChcclxuICAgICAgICAgICAgY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJhbW91bnRcIikgYXMgTGF5YS5MYWJlbFxyXG4gICAgICAgICkudGV4dCA9IGAtJHtkLmRpYW1vbmR9YDtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke25ldyBEYXRlKGQudGltZSkudG9Mb2NhbGVTdHJpbmcoXHJcbiAgICAgICAgICAgIFwiemgtQ05cIixcclxuICAgICAgICAgICAgeyBob3VyMTI6IGZhbHNlIH1cclxuICAgICAgICApfWA7XHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBjZWxsLmdldENoaWxkQnlOYW1lKFwic3RhdGVfYm94XCIpLmdldENoaWxkQnlOYW1lKFwic3RhdGVcIikgYXMgTGF5YS5MYWJlbDtcclxuICAgICAgICBsZXQgd2l0aGRyYXdhbCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ3aXRoZHJhd2FsXCIpLnZhbHVlIGFzIHN0cmluZ1tdO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwic3RhdGVfYm94XCIpLmdldENoaWxkQnlOYW1lKFwicHJpY2VcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAkeyhcclxuICAgICAgICAgICAgKE51bWJlcih3aXRoZHJhd2FsWzJdKSAvIE51bWJlcih3aXRoZHJhd2FsWzFdKSkgKlxyXG4gICAgICAgICAgICBkLmRpYW1vbmRcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIC5tYXRjaCgvXlxcZCsoPzpcXC5cXGR7MCwyfSk/Lyl9XHU1MTQzYDtcclxuICAgICAgICBzdGF0ZS50ZXh0ID0gYCR7ZC5zdGF0ZSA/IFwiXHU1QkExXHU2ODM4XHU0RTJEXCIgOiBcIlx1NURGMlx1NTIzMFx1OEQyNlwifWA7XHJcbiAgICAgICAgc3RhdGUuY29sb3IgPSBkLnN0YXRlID8gXCIjRTkzNjM2XCIgOiBcIiM1QTNGMkFcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLldpdGhkcmF3UmVjb3JkVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgQWJvdXRWaWV3IGZyb20gXCIuL3ZpZXcvQWJvdXRWaWV3XCJcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblwiXHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi9jb21wb25lbnRzL1ZpZXdTaG93QW5pXCJcclxuaW1wb3J0IEFkZExhbmRWaWV3IGZyb20gXCIuL3ZpZXcvQWRkTGFuZFZpZXdcIlxyXG5pbXBvcnQgQnV5Vml0YWxpdHlWaWV3IGZyb20gXCIuL3ZpZXcvQnV5Vml0YWxpdHlWaWV3XCJcclxuaW1wb3J0IEZpZWxkTGV2ZWxVcFZpZXcgZnJvbSBcIi4vdmlldy9GaWVsZExldmVsVXBWaWV3XCJcclxuaW1wb3J0IEZyaWVuZHNEZXNjVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNEZXNjVmlld1wiXHJcbmltcG9ydCBGcmllbmRzUmV3YXJkVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNSZXdhcmRWaWV3XCJcclxuaW1wb3J0IEZyaWVuZHNWaWV3IGZyb20gXCIuL3ZpZXcvRnJpZW5kc1ZpZXdcIlxyXG5pbXBvcnQgR2F0aGVyRGVzY1ZpZXcgZnJvbSBcIi4vdmlldy9HYXRoZXJEZXNjVmlld1wiXHJcbmltcG9ydCBHdWlkZVZpZXcgZnJvbSBcIi4vdmlldy9HdWlkZVZpZXdcIlxyXG5pbXBvcnQgSGludFZpZXcgZnJvbSBcIi4vdmlldy9IaW50Vmlld1wiXHJcbmltcG9ydCBMb2dpblZpZXcgZnJvbSBcIi4vdmlldy9Mb2dpblZpZXdcIlxyXG5pbXBvcnQgTWFpbERlc2NWaWV3IGZyb20gXCIuL3ZpZXcvTWFpbERlc2NWaWV3XCJcclxuaW1wb3J0IE1haWxWaWV3IGZyb20gXCIuL3ZpZXcvTWFpbFZpZXdcIlxyXG5pbXBvcnQgTWFpblZpZXcgZnJvbSBcIi4vdmlldy9NYWluVmlld1wiXHJcbmltcG9ydCBGaWd1cmVBbmkgZnJvbSBcIi4vY29tcG9uZW50cy9GaWd1cmVBbmlcIlxyXG5pbXBvcnQgRmllbGRDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9GaWVsZENvbXBvbmVudFwiXHJcbmltcG9ydCBSZWREb3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9SZWREb3RDb21wb25lbnRcIlxyXG5pbXBvcnQgT3JkZXJWaWV3IGZyb20gXCIuL3ZpZXcvT3JkZXJWaWV3XCJcclxuaW1wb3J0IE92ZXJWaWV3IGZyb20gXCIuL3ZpZXcvT3ZlclZpZXdcIlxyXG5pbXBvcnQgU2V0dGluZ1ZpZXcgZnJvbSBcIi4vdmlldy9TZXR0aW5nVmlld1wiXHJcbmltcG9ydCBTaG9wVmlldyBmcm9tIFwiLi92aWV3L1Nob3BWaWV3XCJcclxuaW1wb3J0IFNpZ25JbkRlc2NWaWV3IGZyb20gXCIuL3ZpZXcvU2lnbkluRGVzY1ZpZXdcIlxyXG5pbXBvcnQgU2lnbkluVmlldyBmcm9tIFwiLi92aWV3L1NpZ25JblZpZXdcIlxyXG5pbXBvcnQgU3BlZWRVcFZpZXcgZnJvbSBcIi4vdmlldy9TcGVlZFVwVmlld1wiXHJcbmltcG9ydCBUYXNrVmlldyBmcm9tIFwiLi92aWV3L1Rhc2tWaWV3XCJcclxuaW1wb3J0IFdhcmVob3VzZVZpZXcgZnJvbSBcIi4vdmlldy9XYXJlaG91c2VWaWV3XCJcclxuaW1wb3J0IFdpdGhkcmF3UmVjb3JkVmlldyBmcm9tIFwiLi92aWV3L1dpdGhkcmF3UmVjb3JkVmlld1wiXHJcbi8qXHJcbiogXHU2RTM4XHU2MjBGXHU1MjFEXHU1OUNCXHU1MzE2XHU5MTREXHU3RjZFO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xMDgwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTkyMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInZpZXcvQWJvdXRWaWV3LnRzXCIsQWJvdXRWaWV3KTtcclxuICAgICAgICByZWcoXCJjb21wb25lbnRzL0J1dHRvbi50c1wiLEJ1dHRvbik7XHJcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9WaWV3U2hvd0FuaS50c1wiLFZpZXdTaG93QW5pKTtcclxuICAgICAgICByZWcoXCJ2aWV3L0FkZExhbmRWaWV3LnRzXCIsQWRkTGFuZFZpZXcpO1xyXG4gICAgICAgIHJlZyhcInZpZXcvQnV5Vml0YWxpdHlWaWV3LnRzXCIsQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgICAgICByZWcoXCJ2aWV3L0ZpZWxkTGV2ZWxVcFZpZXcudHNcIixGaWVsZExldmVsVXBWaWV3KTtcclxuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNEZXNjVmlldy50c1wiLEZyaWVuZHNEZXNjVmlldyk7XHJcbiAgICAgICAgcmVnKFwidmlldy9GcmllbmRzUmV3YXJkVmlldy50c1wiLEZyaWVuZHNSZXdhcmRWaWV3KTtcclxuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNWaWV3LnRzXCIsRnJpZW5kc1ZpZXcpO1xyXG4gICAgICAgIHJlZyhcInZpZXcvR2F0aGVyRGVzY1ZpZXcudHNcIixHYXRoZXJEZXNjVmlldyk7XHJcbiAgICAgICAgcmVnKFwidmlldy9HdWlkZVZpZXcudHNcIixHdWlkZVZpZXcpO1xyXG4gICAgICAgIHJlZyhcInZpZXcvSGludFZpZXcudHNcIixIaW50Vmlldyk7XHJcbiAgICAgICAgcmVnKFwidmlldy9Mb2dpblZpZXcudHNcIixMb2dpblZpZXcpO1xyXG4gICAgICAgIHJlZyhcInZpZXcvTWFpbERlc2NWaWV3LnRzXCIsTWFpbERlc2NWaWV3KTtcclxuICAgICAgICByZWcoXCJ2aWV3L01haWxWaWV3LnRzXCIsTWFpbFZpZXcpO1xyXG4gICAgICAgIHJlZyhcInZpZXcvTWFpblZpZXcudHNcIixNYWluVmlldyk7XHJcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9GaWd1cmVBbmkudHNcIixGaWd1cmVBbmkpO1xyXG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHNcIixGaWVsZENvbXBvbmVudCk7XHJcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9SZWREb3RDb21wb25lbnQudHNcIixSZWREb3RDb21wb25lbnQpO1xyXG4gICAgICAgIHJlZyhcInZpZXcvT3JkZXJWaWV3LnRzXCIsT3JkZXJWaWV3KTtcclxuICAgICAgICByZWcoXCJ2aWV3L092ZXJWaWV3LnRzXCIsT3ZlclZpZXcpO1xyXG4gICAgICAgIHJlZyhcInZpZXcvU2V0dGluZ1ZpZXcudHNcIixTZXR0aW5nVmlldyk7XHJcbiAgICAgICAgcmVnKFwidmlldy9TaG9wVmlldy50c1wiLFNob3BWaWV3KTtcclxuICAgICAgICByZWcoXCJ2aWV3L1NpZ25JbkRlc2NWaWV3LnRzXCIsU2lnbkluRGVzY1ZpZXcpO1xyXG4gICAgICAgIHJlZyhcInZpZXcvU2lnbkluVmlldy50c1wiLFNpZ25JblZpZXcpO1xyXG4gICAgICAgIHJlZyhcInZpZXcvU3BlZWRVcFZpZXcudHNcIixTcGVlZFVwVmlldyk7XHJcbiAgICAgICAgcmVnKFwidmlldy9UYXNrVmlldy50c1wiLFRhc2tWaWV3KTtcclxuICAgICAgICByZWcoXCJ2aWV3L1dhcmVob3VzZVZpZXcudHNcIixXYXJlaG91c2VWaWV3KTtcclxuICAgICAgICByZWcoXCJ2aWV3L1dpdGhkcmF3UmVjb3JkVmlldy50c1wiLFdpdGhkcmF3UmVjb3JkVmlldyk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwgImltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwiLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCIuL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBDb25maWdHYW1lLCB7IEJ1aWxkVHlwZSB9IGZyb20gXCIuL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCIuL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcIi4vY29yZS9BcHBcIjtcclxuY2xhc3MgTWFpbiB7XHJcbiAgICAvKiogXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcdTUyMTdcdTg4NjggKi9cclxuICAgIHN0YXRpYyBjdXN0b21SZW5kZXJJRDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiaVBob25lXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgQ29uZmlnLnVzZVdlYkdMMiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cdTY4MzlcdTYzNkVJREVcdThCQkVcdTdGNkVcdTUyMURcdTU5Q0JcdTUzMTZcdTVGMTVcdTY0Q0VcclxuICAgICAgICBpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcbiAgICAgICAgZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcbiAgICAgICAgTGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG4gICAgICAgIC8vXHU1MTdDXHU1QkI5XHU1RkFFXHU0RkUxXHU0RTBEXHU2NTJGXHU2MzAxXHU1MkEwXHU4RjdEc2NlbmVcdTU0MEVcdTdGMDBcdTU3M0FcdTY2NkZcclxuICAgICAgICBMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG4gICAgICAgIC8vXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA4XHU5MDFBXHU4RkM3SURFXHU4QkJFXHU3RjZFXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHVGRjBDXHU2MjE2XHU4MDA1dXJsXHU1NzMwXHU1NzQwXHU1ODlFXHU1MkEwZGVidWc9dHJ1ZVx1NTNDMlx1NjU3MFx1RkYwQ1x1NTc0N1x1NTNFRlx1NjI1M1x1NUYwMFx1OEMwM1x1OEJENVx1OTc2Mlx1Njc3Rlx1RkYwOVxyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIilcclxuICAgICAgICAgICAgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG4gICAgICAgIExheWEuYWxlcnRHbG9iYWxFcnJvcih0cnVlKTtcclxuICAgICAgICBMYXlhLnN0YWdlLmJnQ29sb3IgPSBcIiNmZmZmZmZcIjtcclxuXHJcbiAgICAgICAgQlVJTERfVFlQRSA9PSBCdWlsZFR5cGUuZGVidWcgJiYgR2FtZUNvbmZpZy5zdGF0ICYmIExheWEuU3RhdC5zaG93KCk7XHJcblxyXG4gICAgICAgIC8vXHU2RkMwXHU2RDNCXHU4RDQ0XHU2RTkwXHU3MjQ4XHU2NzJDXHU2M0E3XHU1MjM2XHVGRjBDdmVyc2lvbi5qc29uXHU3NTMxSURFXHU1M0QxXHU1RTAzXHU1MjlGXHU4MEZEXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHVGRjBDXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU0RTVGXHU0RTBEXHU1RjcxXHU1NENEXHU1NDBFXHU3RUVEXHU2RDQxXHU3QTBCXHJcbiAgICAgICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFxyXG4gICAgICAgICAgICBcInZlcnNpb24uanNvblwiLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSxcclxuICAgICAgICAgICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vXHU2RkMwXHU2RDNCXHU1OTI3XHU1QzBGXHU1NkZFXHU2NjIwXHU1QzA0XHVGRjBDXHU1MkEwXHU4RjdEXHU1QzBGXHU1NkZFXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1OTgyXHU2NzlDXHU1M0QxXHU3M0IwXHU1QzBGXHU1NkZFXHU1NzI4XHU1OTI3XHU1NkZFXHU1NDA4XHU5NkM2XHU5MUNDXHU5NzYyXHVGRjBDXHU1MjE5XHU0RjE4XHU1MTQ4XHU1MkEwXHU4RjdEXHU1OTI3XHU1NkZFXHU1NDA4XHU5NkM2XHVGRjBDXHU4MDBDXHU0RTBEXHU2NjJGXHU1QzBGXHU1NkZFXHJcbiAgICAgICAgTGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcclxuICAgICAgICAgICAgXCJmaWxlY29uZmlnLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Db25maWdMb2FkZWQoKSB7XHJcbiAgICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcclxuICAgICAgICBDb25maWdbXCJjdXN0b21SZW5kZXJJRFwiXSA9IFtdO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuaW5pdCgpO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3QuaW5pdChDb25maWdHYW1lLmJhc2VVcmwpO1xyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwub24oRXZlbnRNYXBzLmxvZ2luX2dhbWUsIHRoaXMsIHRoaXMubG9naW5HYW1lKTtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci51c2VBdWRpb011c2ljID0gZmFsc2U7XHJcbiAgICAgICAgQXBwQ29yZS5saXN0ZW5BcHBGdW5jdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBWaWV3TWFuYWdlci5pbnN0LmluaXQoKTtcclxuXHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5vcGVuKFJlcy52aWV3cy5Mb2dpblZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRHYW1lRGF0YShkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAuY2xvc2VJbWFnZSwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5WaWV3LnNldExvYWRpbmdQYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy9cdTU0MEVcdTY3MUZcdTRGMThcdTUzMTZcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS5WaWV3LnNob3dMb2FkaW5nUGFnZShudWxsLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSg5OTk5OTk5OTk5OTk5OTkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5HYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5HYW1lKCkge1xyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIFJlcy5zY2VuZXMsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlcy5zY2VuZXMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhlKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheU11c2ljKFJlcy5hdWRpb3MuQkdNLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSgxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCBlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEdhbWVEYXRhKGQ6IE5ldEluaXQpIHt9XHJcbn1cclxuLy9cdTZGQzBcdTZEM0JcdTU0MkZcdTUyQThcdTdDN0JcclxubmV3IE1haW4oKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLE1BQVc7QUFBWCxZQUFXLFlBQVg7QUFFSCxrQ0FBZ0I7QUFHaEIsaUNBQWU7QUFHZixpQ0FBZTtBQUdmLGtDQUFnQjtBQUdoQiwrQkFBYTtBQUViLDhCQUFZO0FBRVosZ0NBQWM7QUFFZCxxQ0FBbUI7QUFFbkIsOENBQTRCO0FBRTVCLG1DQUFpQjtBQXNCakIsb0NBQWtCO0FBRWxCLHVDQUFxQjtBQUVyQixtQ0FBaUI7QUFFakIsNEJBQVU7QUFFVixnQ0FBYztBQUVkLDhCQUFZO0FBRVoscUNBQW1CO0FBQUEsS0ExREw7QUFnRVgsTUFBVztBQUFYLFlBQVcsY0FBWDtBQUVILHlCQUFLO0FBRUwsOEJBQVU7QUFFVixpQ0FBYTtBQUViLDhCQUFVO0FBRVYscUNBQWlCO0FBRWpCLDhCQUFVO0FBRVYsaUNBQWE7QUFFYix1Q0FBbUI7QUFFbkIsdUNBQW1CO0FBRW5CLHNDQUFrQjtBQUVsQixtQ0FBZTtBQUVmLGlDQUFhO0FBRWIscUNBQWlCO0FBQUEsS0ExQkg7OztBQzlEVixNQUFLO0FBQUwsWUFBSyxRQUFMO0FBR0EsMEJBQVk7QUFFWiw0QkFBYztBQUVkLGdDQUFrQjtBQUVsQixpQ0FBbUI7QUFFbkIsZ0NBQWtCO0FBRWxCLGtDQUFvQjtBQUVwQiw0QkFBYztBQUVkLCtCQUFpQjtBQUVqQiwwQkFBWTtBQUVaLHlCQUFXO0FBRVgsMEJBQVk7QUFFWiw2QkFBZTtBQUVmLHlCQUFXO0FBRVgseUJBQVc7QUFFWCww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LFdBQVUsU0FBUSxJQUFHLFNBQVEsb0NBQVUsUUFBTyxvQ0FBVSxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxXQUFVLFNBQVEsR0FBRSxTQUFRLHVCQUFPLFFBQU8sdUJBQU8sUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsWUFBVyxTQUFRLEdBQUUsU0FBUSxtQ0FBUyxRQUFPLG1DQUFTLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxHQUFFLFNBQVEsNEJBQU8sUUFBTyxtQ0FBUyxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxXQUFVLFNBQVEsSUFBRyxTQUFRLG9DQUFVLFFBQU8sb0NBQVUsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsWUFBVyxTQUFRLEdBQUUsU0FBUSxtQ0FBUyxRQUFPLG1DQUFTLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFlBQVcsU0FBUSxHQUFFLFNBQVEsNEJBQU8sUUFBTyxtQ0FBUyxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxZQUFXLFNBQVEsSUFBRyxTQUFRLGtDQUFRLFFBQU8sd0JBQVEsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsWUFBVyxTQUFRLEdBQUUsU0FBUSw0QkFBTyxRQUFPLG1DQUFTLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxHQUFFLFNBQVEsd0NBQVMsUUFBTyw2QkFBUSxRQUFPLFNBQU8sVUFBUyxDQUFDLEVBQUMsTUFBSyxNQUFLLFFBQU8sR0FBRSxVQUFTLGdCQUFjLEVBQUMsTUFBSyxNQUFLLFFBQU8sSUFBRyxVQUFTLGdCQUFjLEVBQUMsTUFBSyxNQUFLLFFBQU8sSUFBRyxVQUFTLGdCQUFjLEVBQUMsTUFBSyxNQUFLLFFBQU8sSUFBRyxVQUFTLGdCQUFjLEVBQUMsTUFBSyxNQUFLLFFBQU8sSUFBRyxVQUFTLGlCQUFlLEVBQUMsTUFBSyxNQUFLLFFBQU8sSUFBRyxVQUFTLGlCQUFlLEVBQUMsTUFBSyxNQUFLLFFBQU8sSUFB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QUFHLGNBQWEsTUFBSyxhQUFZLGlDQUFnQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFpQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFpQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLGtDQUFpQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsT0FBTSxhQUFZLGtDQUFpQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsT0FBTSxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxjQUFZLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxlQUFhLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsS0FBSSxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsT0FBTSxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxLQUFJLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxpQkFBZSxRQUFPLElBQUcsYUFBWSxDQUFDLEVBQUMsTUFBSyxHQUFFLFVBQVMsVUFBUyxRQUFPLFVBQVMsUUFBTyxNQUFLLGVBQWMsS0FBSSxlQUFjLEtBQUcsRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sYUFBWSxRQUFPLEtBQUksZUFBYyxNQUFLLGVBQWMsS0FBRyxFQUFDLE1BQUssR0FBRSxVQUFTLGFBQVksUUFBTyxjQUFhLFFBQU8sTUFBSyxlQUFjLE1BQUssZUFBYyxLQUFHLEVBQUMsTUFBSyxHQUFFLFVBQVMsYUFBWSxRQUFPLGNBQWEsUUFBTyxLQUFJLGVBQWMsTUFBSyxlQUFjLEtBQUcsRUFBQyxNQUFLLEdBQUUsVUFBUyxhQUFZLFFBQU8sY0FBYSxRQUFPLE1BQUssZUFBYyxLQUFJLGVBQWMsTUFBSSxRQUFPLENBQUMsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLDBCQUF5QixZQUFXLEdBQUUsUUFBTyxXQUFVLFFBQU8sdURBQWEsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLDBCQUF5QixZQUFXLEdBQUUsUUFBTyxXQUFVLFFBQU8sdURBQWEsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLDBCQUF5QixZQUFXLEdBQUUsUUFBTyxZQUFXLFFBQU8sdURBQWEsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLDBCQUF5QixZQUFXLElBQUcsUUFBTyxZQUFXLFFBQU8sdURBQWEsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLDBCQUF5QixZQUFXLElBQUcsUUFBTyxZQUFXLFFBQU8sdURBQWEsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLDBCQUF5QixZQUFXLElBQUcsUUFBTyxZQUFXLFFBQU8sd0RBQWMsWUFBVyxDQUFDLEVBQUMsTUFBSyxNQUFLLFFBQU8sZ0JBQUssUUFBTyxnQ0FBOEIsRUFBQyxNQUFLLE1BQUssUUFBTyxnQkFBSyxRQUFPLDhCQUE0QixVQUFTLENBQUMsRUFBQyxNQUFLLHNCQUFxQixTQUFRLE1BQUksRUFBQyxNQUFLLHFCQUFvQixTQUFRLE9BQUssRUFBQyxNQUFLLG9CQUFtQixTQUFRLCtGQUE2RixFQUFDLE1BQUssZUFBYyxTQUFRLGNBQVksRUFBQyxNQUFLLGtCQUFpQixTQUFRLGFBQVcsRUFBQyxNQUFLLGdCQUFlLFNBQVEsTUFBSSxFQUFDLE1BQUssa0JBQWlCLFNBQVEsS0FBRyxFQUFDLE1BQUssdUJBQXNCLFNBQVEsZ0JBQWMsRUFBQyxNQUFLLGlCQUFnQixTQUFRLE1BQUksRUFBQyxNQUFLLDZCQUE0QixTQUFRLE1BQUksRUFBQyxNQUFLLGlCQUFnQixTQUFRLEtBQUcsRUFBQyxNQUFLLHNCQUFxQixTQUFRLE9BQUssRUFBQyxNQUFLLHlCQUF3QixTQUFRLFFBQU0sRUFBQyxNQUFLLGdCQUFlLFNBQVEscUVBQW1FLEVBQUMsTUFBSyxjQUFhLFNBQVEsa0JBQWdCLEVBQUMsTUFBSyxzQkFBcUIsU0FBUSxlQUFhLEVBQUMsTUFBSyxvQkFBbUIsU0FBUTs7O0FDRHpxa0Isb0JBQTJCO0FBQUEsV0FPaEIsWUFBWSxLQUFhLFNBQWlCLEtBQUs7QUFDbEQsVUFBSSxDQUFDO0FBQUssZUFBTztBQUNqQixhQUFPLElBQUksTUFBTTtBQUFBO0FBQUEsV0FhZCxZQUFZLEtBQWE7QUFDNUIsYUFBTyxJQUFJLFdBQVcsTUFBTTtBQUFBO0FBQUE7QUFOekIsRUFqQlgsTUFpQlcsZ0JBQWdCLENBQUMsTUFBTSxJQUFJLEtBQUssSUFBSSxLQUFNLGNBQWMsT0FBTyxJQUFJOzs7QUNGOUUsTUFBTSxxQkFBcUI7QUFBQSxJQUN2QixJQUFJLEdBQXdCO0FBQ3hCLGFBQWdCO0FBQUEsUUFDWixJQUFJLEVBQUU7QUFBQSxRQUNOLE1BQU0sRUFBRTtBQUFBLFFBQ1IsTUFBTSxFQUFFLFFBQVEsWUFBWSxFQUFFO0FBQUEsUUFDOUIsY0FBYyxFQUFFO0FBQUEsUUFDaEIsa0JBQWtCLEVBQUU7QUFBQSxRQUNwQixNQUFNLHNCQUFzQixFQUFFO0FBQUEsUUFDOUIsTUFBTSxFQUFFO0FBQUEsUUFDUixXQUFXLEVBQUU7QUFBQSxRQUNiLFNBQVMsRUFBRTtBQUFBO0FBQUE7QUFBQSxJQVNuQixLQUFLLEdBQXlCO0FBQzFCLGFBQWlCO0FBQUEsUUFDYixJQUFJLEVBQUU7QUFBQSxRQUNOLE1BQU0sRUFBRTtBQUFBLFFBQ1IsTUFBTSxFQUFFLFFBQVEsWUFBWSxFQUFFO0FBQUEsUUFDOUIsVUFBVSxFQUFFO0FBQUEsUUFDWixNQUFNLHNCQUFzQixFQUFFO0FBQUEsUUFDOUIsTUFBTSxFQUFFO0FBQUE7QUFBQTtBQUFBLElBUWhCLE1BQU0sR0FBMEI7QUFDNUIsYUFBa0I7QUFBQSxRQUNkLElBQUksRUFBRTtBQUFBLFFBQ04sWUFBWSxPQUFPLEVBQUU7QUFBQSxRQUNyQixXQUFXLE1BQU0sWUFBWSxFQUFFLFdBQVcsSUFBSSxDQUFDLE1BQU07QUFDakQsY0FBSSxJQUFJLE1BQU0sWUFBWSxHQUFHO0FBQzdCLGlCQUFPO0FBQUEsWUFDSCxPQUFPLGFBQWEsTUFBTSxTQUFTLElBQUksT0FBTyxFQUFFO0FBQUEsWUFDaEQsT0FBTyxPQUFPLEVBQUU7QUFBQTtBQUFBO0FBQUEsUUFHeEIsYUFBYSxzQkFBc0IsRUFBRTtBQUFBO0FBQUE7QUFBQSxJQVE3QyxNQUFNLEdBQTBCO0FBQzVCLGFBQWtCO0FBQUEsUUFDZCxJQUFJLEVBQUU7QUFBQSxRQUNOLE1BQU0sRUFBRTtBQUFBLFFBQ1IsTUFBTSxFQUFFO0FBQUEsUUFDUixZQUFZLGNBQWMsRUFBRSxLQUFLLE1BQU0sUUFBUTtBQUFBLFFBQy9DLGFBQWEsY0FBYyxFQUFFLEtBQUssTUFBTSxRQUFRO0FBQUEsUUFDaEQsTUFBTSxNQUFNLFlBQVksRUFBRSxNQUFNLElBQUksQ0FBQyxNQUFNLHNCQUFzQjtBQUFBLFFBQ2pFLE1BQU0sRUFBRTtBQUFBLFFBQ1IsWUFBWSxzQkFBc0IsRUFBRTtBQUFBLFFBQ3BDLFNBQVMsT0FBTyxNQUFNLFlBQVksRUFBRSxTQUFTLEtBQUs7QUFBQSxRQUNsRCxhQUFhLE9BQU8sRUFBRTtBQUFBLFFBQ3RCLGFBQWEsc0JBQXNCLEVBQUU7QUFBQSxRQUNyQyxlQUFlLE1BQU0sWUFBWSxFQUFFLGVBQWUsSUFBSSxDQUFDLE1BQU0sc0JBQXNCO0FBQUE7QUFBQTtBQUFBLElBUTNGLFNBQVMsR0FBNkI7QUFDbEMsYUFBcUI7QUFBQSxRQUNqQixJQUFJLEVBQUU7QUFBQSxRQUNOLE1BQU0sRUFBRTtBQUFBLFFBQ1IsTUFBTSxFQUFFO0FBQUE7QUFBQTtBQUFBLElBT2hCLFVBQVUsR0FBOEI7QUFDcEMsYUFBc0I7QUFBQSxRQUNsQixJQUFJLEVBQUU7QUFBQSxRQUNOLFFBQVEsc0JBQXNCLEVBQUU7QUFBQSxRQUNoQyxNQUFNLHNCQUFzQixFQUFFO0FBQUEsUUFDOUIsTUFBTSxFQUFFO0FBQUEsUUFDUixhQUFhLEVBQUU7QUFBQSxRQUNmLFlBQVksRUFBRTtBQUFBO0FBQUE7QUFBQSxJQU90QixPQUFPLEdBQTJCO0FBQzlCLGNBQVEsRUFBRTtBQUFBLGFBQ0Q7QUFDRCxpQkFBTyxFQUFFLElBQUksc0JBQXNCLE9BQU8sRUFBRTtBQUFBLGFBRTNDO0FBQ0QsaUJBQU8sRUFBRSxJQUFJLHFCQUFxQixPQUFPLEVBQUU7QUFBQSxhQUUxQztBQUNELGlCQUFPO0FBQUEsWUFDSCxJQUFJO0FBQUEsWUFDSixPQUFPLE1BQU0sWUFBWSxFQUFFLE9BQWlCLElBQUksQ0FBQyxPQUM3QyxzQkFBc0I7QUFBQTtBQUFBLGFBSTdCO0FBQ0QsaUJBQU87QUFBQSxZQUNILElBQUk7QUFBQSxZQUNKLE9BQU8sc0JBQXNCLEVBQUUsT0FBaUI7QUFBQTtBQUFBLGFBRW5EO0FBQ0QsaUJBQU87QUFBQSxZQUNILElBQUk7QUFBQSxZQUNKLE9BQU8sc0JBQXNCLEVBQUUsT0FBaUI7QUFBQTtBQUFBLGFBRW5EO0FBQ0QsaUJBQU8sRUFBRSxJQUFJLGdCQUFnQixPQUFPLEVBQUU7QUFBQSxhQUNyQztBQUNELGlCQUFPLEVBQUUsSUFBSSxrQkFBa0IsT0FBTyxFQUFFO0FBQUEsYUFDdkM7QUFDRCxpQkFBTztBQUFBLFlBQ0gsSUFBSTtBQUFBLFlBQ0osT0FBTyxzQkFBc0IsRUFBRSxPQUFpQjtBQUFBO0FBQUEsYUFFbkQ7QUFDRCxpQkFBTyxFQUFFLElBQUksaUJBQWlCLE9BQU8sRUFBRTtBQUFBLGFBQ3RDO0FBQ0QsaUJBQU8sRUFBRSxJQUFJLDZCQUE2QixPQUFPLEVBQUU7QUFBQSxhQUNsRDtBQUNELGlCQUFPLEVBQUUsSUFBSSxpQkFBaUIsT0FBTyxFQUFFO0FBQUEsYUFDdEM7QUFDRCxpQkFBTyxFQUFFLElBQUksc0JBQXNCLE9BQU8sRUFBRTtBQUFBLGFBQzNDO0FBQ0QsaUJBQU8sRUFBRSxJQUFJLHlCQUF5QixPQUFPLEVBQUU7QUFBQSxhQUM5QztBQUNELGlCQUFPLEVBQUUsSUFBSSxnQkFBZ0IsT0FBTyxzQkFBc0IsRUFBRTtBQUFBLGFBQzNEO0FBQ0QsaUJBQU8sRUFBRSxJQUFJLGNBQWMsT0FBTyxNQUFNLFlBQVksRUFBRSxPQUFpQjtBQUFBLGFBQ3RFO0FBQ0QsaUJBQU87QUFBQSxZQUNILElBQUk7QUFBQSxZQUNKLE9BQU8sc0JBQXNCLEVBQUU7QUFBQTtBQUFBLGFBRWxDO0FBQ0QsaUJBQU87QUFBQSxZQUNILElBQUk7QUFBQSxZQUNKLE9BQU8sTUFBTSxZQUFZLEVBQUUsT0FBaUIsSUFBSSxDQUFDLE1BQVc7QUFDeEQsa0JBQUksTUFBTSxZQUFZLEdBQUc7QUFDekIscUJBQU87QUFBQSxnQkFDSCxPQUFPLE9BQU8sRUFBRSxPQUFPO0FBQUEsZ0JBQ3ZCLE9BQU8sT0FBTyxFQUFFLE9BQU87QUFBQSxnQkFDdkIsY0FBYyxPQUFPLEVBQUUsT0FBTztBQUFBLGdCQUM5QixTQUFTLE9BQU8sRUFBRSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBV2pELE9BQU8sR0FBMkI7QUFDOUIsYUFBbUI7QUFBQSxRQUNmLElBQUksRUFBRTtBQUFBLFFBQ04sTUFBTSxFQUFFO0FBQUEsUUFDUixRQUFRLHNCQUFzQixFQUFFO0FBQUE7QUFBQTtBQUFBLElBT3hDLEtBQUssR0FBeUI7QUFDMUIsYUFBaUI7QUFBQSxRQUNiLElBQUksRUFBRTtBQUFBLFFBQ04sT0FBTyxFQUFFO0FBQUEsUUFDVCxRQUFRLHNCQUFzQixFQUFFO0FBQUEsUUFDaEMsTUFBTSxFQUFFO0FBQUEsUUFDUixPQUFPLEVBQUU7QUFBQSxRQUNULE1BQU0sRUFBRSxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBUzVCLGlDQUErQixLQUFhO0FBQ3hDLFFBQUksQ0FBQztBQUFLLGFBQU87QUFDakIsUUFBSSxPQUFPLE1BQU0sWUFBWSxLQUFLO0FBRWxDLFdBQTJCO0FBQUEsTUFDdkIsS0FBSyxhQUFhLE1BQU0sWUFBWSxJQUFJLE9BQU8sS0FBSztBQUFBLE1BQ3BELE9BQU8sT0FBTyxLQUFLO0FBQUE7QUFBQTtBQU0zQiwyQkFBbUI7QUFBQSxJQUFuQixjQXBPQTtBQXFPWSx3QkFBNkUsSUFBSTtBQUFBO0FBQUEsSUFNekYsTUFDSSxLQUlGO0FBRUUsVUFBSSxLQUFLLFdBQVcsSUFBSSxNQUFNO0FBQzFCLGVBQU8sS0FBSyxVQUFVLEtBQUssV0FBVyxJQUFJO0FBQUE7QUFHOUMsVUFBSSxPQUFPO0FBQ1gsWUFBTSxLQUFLLFFBQVEsQ0FBQyxNQUFNO0FBQ3RCLGFBQUssS0FBSyxtQkFBbUIsS0FBSztBQUFBO0FBR3RDLFdBQUssV0FBVyxJQUFJLEtBQUs7QUFDekIsYUFBTyxLQUFLLFVBQVU7QUFBQTtBQUFBLElBUWxCLFVBQVUsTUFBTTtBQUNwQixhQUFPO0FBQUEsUUFDSDtBQUFBLFFBQ0EsSUFBSSxJQUFJO0FBQ0osbUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLElBQUksR0FBRyxLQUFLO0FBQ3pDLGdCQUFJLEtBQUssR0FBRyxNQUFNLElBQUk7QUFDbEIscUJBQU8sS0FBSztBQUFBO0FBQUE7QUFHcEIsaUJBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVN2QixNQUFNLGVBQWUsSUFBSTtBQUN6QixNQUFPLHVCQUFROzs7QUNwUlIsTUFBVztBQUFYLFlBQVcsYUFBWDtBQUNILDBCQUFPO0FBQ1AsNEJBQVM7QUFDVCwwQkFBTztBQUNQLDZCQUFVO0FBQ1YsMkJBQVE7QUFBQSxLQUxNO0FBU2xCLHNDQUE2QyxhQUFLLFdBQVc7QUFBQSxJQUl6RCxZQUFrQjtBQUNkLFVBQUksT0FBTyxLQUFLO0FBQ2hCLFdBQUssVUFBVTtBQUNmLFdBQUssVUFBVTtBQUNmLFdBQUssVUFBVTtBQUFBO0FBQUEsSUFJWCxhQUFhLE1BQWMsTUFBZTtBQUM5QyxVQUFJLEtBQUssY0FBYyxNQUFNO0FBQ3pCLFlBQUksT0FBTyxLQUFLO0FBQ2hCLFlBQUksTUFBTTtBQUNOLGNBQUksQ0FBQyxLQUFLLFNBQVM7QUFDZixpQkFBSyxNQUFNLEdBQUc7QUFDZCxpQkFBSyxLQUFLO0FBQ1YsaUJBQUssTUFBTSxTQUFTO0FBQ3BCLGlCQUFLLE1BQU0sR0FDUCxNQUNBLEVBQUUsUUFBUSxHQUFHLFFBQVEsS0FDckIsS0FDQSxLQUFLLEtBQUssU0FDVixJQUFJLEtBQUssUUFBUSxNQUFNLE1BQU07QUFDekIsbUJBQUssTUFBTSxHQUNQLE1BQ0EsRUFBRSxHQUFHLEtBQUssSUFBSSxNQUNkLEtBQ0EsS0FBSyxLQUFLLFNBQ1YsTUFDQTtBQUFBO0FBQUE7QUFLaEIsZUFBSyxVQUFVO0FBQUEsZUFDWjtBQUNILGNBQUksS0FBSztBQUNMLGlCQUFLLE1BQU0sR0FDUCxNQUNBLEVBQUUsUUFBUSxHQUFHLFFBQVEsS0FDckIsS0FDQSxLQUFLLEtBQUssUUFDVixJQUFJLEtBQUssUUFBUSxNQUFNLE1BQU07QUFDekIsbUJBQUssVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQy9CO0FBQUEsSUFEUCxhQUFLLFFBQVEsVUFBVTtBQUFBLEtBQ2hCLEFBWlosZ0JBWVk7OztBQ0xaLDBCQUFrQjtBQUFBLElBQWxCLGNBbkJBO0FBb0JJLGtCQUFzQjtBQUFBO0FBQUEsSUFFdEIsS0FBSyxHQUFxQjtBQUN0QixRQUFFLFFBQVEsQ0FBQyxNQUNQLEtBQUssS0FBSyxLQUFLO0FBQUEsUUFDWCxJQUFJLEVBQUU7QUFBQSxRQUNOLE9BQU8sRUFBRTtBQUFBLFFBQ1QsU0FBUyxFQUFFO0FBQUEsUUFDWCxNQUFNLHFCQUFhLE1BQU0sUUFBUSxJQUFJLEVBQUU7QUFBQTtBQUFBO0FBQUEsSUFVbkQsUUFBUSxJQUFZO0FBQ2hCLFdBQUs7QUFDTCxlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxRQUFRLEtBQUs7QUFDdkMsWUFBSSxLQUFLLEtBQUssR0FBRyxNQUFNLElBQUk7QUFDdkIsaUJBQU8sS0FBSyxLQUFLO0FBQUE7QUFBQTtBQUd6QixhQUFPO0FBQUE7QUFBQSxJQU9YLFVBQVU7QUFDTixXQUFLO0FBQ0wsYUFBTyxLQUFLLEtBQUssS0FBSyxDQUFDLEdBQUcsTUFBTTtBQXREeEM7QUF1RFksWUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFLEtBQ3BCLEtBQUssS0FBSyxRQUFRLEVBQUU7QUFFeEIsZUFDSSxFQUFFLEtBQ0QsMkJBQUksV0FBVSxNQUFPLEtBQ3JCLDJCQUFJLFVBQVMsU0FBRSxTQUFGLG1CQUFRLFNBQVEsTUFBTSxPQUNuQyxHQUFFLEtBQU0sMkJBQUksV0FBVSxNQUFPLEtBQU0sMkJBQUksVUFBUyxTQUFFLFNBQUYsbUJBQVEsU0FBUSxNQUFNO0FBQUE7QUFBQTtBQUFBLElBUW5GLGFBQWEsSUFBWTtBQUNyQixVQUFJLE9BQU8sS0FBSyxRQUFRO0FBQ3hCLFVBQUksQ0FBQyxNQUFNO0FBS1A7QUFBQTtBQUVKLFdBQUs7QUFDTCxtQkFBSyxZQUFZLE1BQU0sVUFBVTtBQUNqQyxXQUFLO0FBQUE7QUFBQSxJQU1ULGVBQWU7QUF2Rm5CO0FBd0ZRLFVBQUksWUFBWTtBQUNoQixlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxRQUFRLEtBQUs7QUFDdkMsWUFDSSxDQUFDLEtBQUssS0FBSyxHQUFHLFdBQ2QsS0FBSyxLQUFLLEdBQUcsU0FBUyw0QkFBYSxNQUFNLFFBQVEsSUFBSSxLQUFLLEtBQUssR0FBRyxRQUE1QyxtQkFBaUQsUUFDekU7QUFDRSxzQkFBWTtBQUNaO0FBQUE7QUFBQTtBQUdSLG1CQUFLLFlBQVksTUFBTSxVQUFVLGdCQUFnQixDQUFDLFdBQVcsTUFBTTtBQUFBO0FBQUEsSUFHdkUsUUFBUTtBQUNKLFdBQUssS0FBSyxTQUFTO0FBQUE7QUFBQTtBQUczQixNQUFPLHNCQUFRLElBQUk7OztBQ3BHbkIsdUJBQWU7QUFBQSxJQUFmLGNBTEE7QUFPSSx3QkFBcUI7QUFFckIsc0JBQW1CO0FBSW5CLGlCQUFjO0FBRWQsb0JBQWlCO0FBRWpCLHFCQUFrQjtBQUVsQixrQkFBZTtBQUVmLDRCQUF5QjtBQVF6Qix3QkFBcUI7QUFFckIsc0JBQW1CO0FBRW5CLDBCQUF1QjtBQUV2QixzQkFBbUI7QUFFbkIsd0JBQXFCO0FBUXJCLHVCQUFvQjtBQUVwQixrQkFBZTtBQUVmLHFCQUFrQjtBQUVsQiwrQkFBNEI7QUFBQTtBQUFBLFFBRXhCLE1BQU07QUFDTixhQUFPLEtBQUs7QUFBQTtBQUFBLFFBRVosSUFBSSxHQUFHO0FBQ1AsV0FBSyxhQUFhO0FBQUE7QUFBQSxJQUd0QixRQUFRO0FBQ0osV0FBSyxXQUFXO0FBQUE7QUFBQTtBQUl4QixNQUFPLG1CQUFRLElBQUk7OztBQy9EbkIsMEJBQWtCO0FBQUEsSUFBbEIsY0FGQTtBQU1JLGtCQUE2QixJQUFJO0FBQUE7QUFBQSxJQU1qQyxLQUFLLE1BQWlCO0FBQ2xCLFdBQUssUUFBUSxDQUFDLE1BQU07QUFDaEIsYUFBSyxRQUFRO0FBQUE7QUFBQTtBQUFBLElBU3JCLFFBQVEsSUFBWTtBQUNoQixhQUFPLEtBQUssS0FBSyxJQUFJO0FBQUE7QUFBQSxJQU96QixRQUFRLEdBQVk7QUFDaEIsV0FBSyxLQUFLLElBQUksRUFBRSxJQUFJO0FBQUE7QUFBQSxJQU14QixRQUFRO0FBQ0osV0FBSyxLQUFLO0FBQUE7QUFBQTtBQU9sQixNQUFPLHNCQUFRLElBQUk7OztBQ2pDbkIseUJBQWlCO0FBQUEsSUFBakIsY0FiQTtBQWNJLGtCQUFzQjtBQUFBO0FBQUEsSUFLdEIsS0FBSyxNQUFnQjtBQUNqQiwyQkFBYSxNQUFNLE9BQU8sS0FBSyxRQUFRLENBQUMsTUFBTTtBQUMxQyxhQUFLLEtBQUssS0FBSztBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sTUFBTSxDQUFDLEtBQUssU0FBUyxFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFRbkMsZUFBZTtBQUNYLFVBQUksTUFBTTtBQUNWLFdBQUssS0FBSyxRQUFRLENBQUMsTUFBTTtBQUNyQixZQUFJLENBQUMsRUFBRTtBQUFNO0FBQUE7QUFFakIsYUFBTztBQUFBO0FBQUEsSUFHWCxRQUFRO0FBQ0osV0FBSyxLQUFLLFNBQVM7QUFBQTtBQUFBO0FBSTNCLE1BQU8scUJBQVEsSUFBSTs7O0FDaENuQiwyQkFBbUI7QUFBQSxJQUFuQixjQVpBO0FBYUksa0JBQXdCO0FBQUE7QUFBQSxJQUt4QixLQUFLLE1BQWdCO0FBQ2pCLDJCQUFhLE1BQU0sU0FBUyxLQUFLLFFBQVEsQ0FBQyxNQUFNO0FBQzVDLGFBQUssS0FBSyxLQUFLLEVBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUFBO0FBQUE7QUFBQSxJQVN6RCxTQUFTLElBQVk7QUFDakIsZUFBUyxJQUFJLEtBQUssS0FBSyxTQUFTLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDNUMsWUFBSSxLQUFLLEtBQUssR0FBRyxLQUFLLE1BQU0sSUFBSTtBQUM1QixpQkFBTyxLQUFLLEtBQUs7QUFBQTtBQUFBO0FBR3pCLGFBQU87QUFBQTtBQUFBLElBTVgsUUFBUTtBQUNKLFdBQUssS0FBSyxTQUFTO0FBQUE7QUFBQTtBQUczQixNQUFPLHVCQUFRLElBQUk7OztBQzdCbkIsK0JBQXVCO0FBQUEsSUFBdkIsY0FoQkE7QUFpQkksa0JBQXdCO0FBQUE7QUFBQSxJQUV4QixLQUNJLE1BT0Y7QUFDRSxXQUFLLFFBQVEsQ0FBQyxNQUFNO0FBQ2hCLFlBQUksQ0FBQyxxQkFBYSxNQUFNLFNBQVMsSUFBSSxFQUFFLEtBQUs7QUFDeEMsaUJBQU8sUUFBUSxNQUFNLDBCQUFXLEVBQUU7QUFBQTtBQUd0QyxhQUFLLEtBQUssS0FBSztBQUFBLFVBQ1gsTUFBTSxxQkFBYSxNQUFNLFNBQVMsSUFBSSxFQUFFO0FBQUEsVUFDeEMsT0FBTyxFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFTckIsYUFBYSxJQUFZLFFBQWdCO0FBQ3JDLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLFFBQVEsS0FBSztBQUN2QyxZQUFJLEtBQUssS0FBSyxHQUFHLEtBQUssTUFBTSxJQUFJO0FBQzVCLGVBQUssS0FBSyxHQUFHLFNBQVM7QUFDdEIsY0FBSSxLQUFLLEtBQUssR0FBRyxTQUFTLEdBQUc7QUFDekIsaUJBQUssS0FBSyxPQUFPLEdBQUc7QUFBQTtBQUV4QjtBQUFBO0FBQUE7QUFJUixtQkFBSyxZQUFZLE1BQU0sVUFBVTtBQUFBO0FBQUEsSUFNckMsT0FBTyxJQUFZO0FBQ2YsYUFBTyxLQUFLLFFBQVE7QUFBQTtBQUFBLElBR2hCLFFBQVEsSUFBSTtBQUNoQixlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxRQUFRLEtBQUs7QUFDdkMsWUFBSSxLQUFLLEtBQUssR0FBRyxLQUFLLE1BQU0sSUFBSTtBQUM1QixpQkFBTyxLQUFLLEtBQUs7QUFBQTtBQUFBO0FBSXpCLGFBQU87QUFBQTtBQUFBLElBTVgsSUFBSSxJQUFZLFFBQWdCO0FBQzVCLFVBQUksT0FBTyxLQUFLLFFBQVE7QUFDeEIsVUFBSSxNQUFNO0FBQ04sYUFBSyxTQUFTO0FBQ2QscUJBQUssWUFBWSxNQUFNLFVBQVU7QUFDakM7QUFBQTtBQUdKLFVBQUksQ0FBQyxxQkFBYSxNQUFNLFNBQVMsSUFBSSxLQUFLO0FBQ3RDLGdCQUFRLEtBQUssMEJBQVc7QUFDeEI7QUFBQTtBQUdKLFdBQUssS0FBSyxLQUFLO0FBQUEsUUFDWCxNQUFNLHFCQUFhLE1BQU0sU0FBUyxJQUFJO0FBQUEsUUFDdEMsT0FBTztBQUFBO0FBR1gsbUJBQUssWUFBWSxNQUFNLFVBQVU7QUFBQTtBQUFBLElBR3JDLFFBQVE7QUFDSixXQUFLLEtBQUssU0FBUztBQUFBO0FBQUE7QUFJM0IsTUFBTywyQkFBUSxJQUFJOzs7QUNyR1osTUFBVztBQUFYLFlBQVcsVUFBWDtBQUVILHdCQUFRO0FBRVIsNkJBQWE7QUFFYiw4QkFBYztBQUVkLCtCQUFlO0FBRWYsNkJBQWE7QUFFYiwwQkFBVTtBQUVWLDZCQUFhO0FBRWIsOEJBQWM7QUFFZCw4QkFBYztBQUVkLDhCQUFjO0FBRWQsNEJBQVk7QUFFWixnQ0FBZ0I7QUFFaEIseUJBQVM7QUFFVCwwQkFBVTtBQUVWLDBCQUFVO0FBRVYsNkJBQWE7QUFFYiwyQkFBVztBQUVYLDRCQUFZO0FBRVoscUJBQUs7QUFFTCw4QkFBYztBQUVkLHlCQUFTO0FBRVQsK0JBQWU7QUFFZiw4QkFBYztBQUVkLDhCQUFjO0FBRWQsK0JBQWU7QUFFZiw2QkFBYTtBQUViLHFDQUFxQjtBQUVyQixtQ0FBbUI7QUFFbkIsc0NBQXNCO0FBRXRCLDhCQUFjO0FBRWQsOEJBQWM7QUFFZCwyQkFBVztBQUVYLDJCQUFXO0FBRVgsNkJBQWE7QUFFYiwyQkFBVztBQUVYLGlDQUFpQjtBQUVqQiwrQkFBZTtBQUVmLHdCQUFRO0FBRVIsbUNBQW1CO0FBQUEsS0E5RUw7OztBQ09sQiwrQkFBdUI7QUFBQSxJQUF2QixjQVZBO0FBWUksMEJBQWU7QUFBQTtBQUFBLElBSWYsT0FBTztBQUNILGlCQUFXLE1BQU07QUFDYixhQUFLO0FBQUEsU0FDTjtBQUNILFdBQUs7QUFBQTtBQUFBLElBR0QsYUFBYTtBQUNqQixVQUFJLEtBQUssUUFBUTtBQUNiLHFCQUFhLEtBQUs7QUFBQTtBQUV0QixXQUFLLFNBQVMsV0FBVyxNQUFNO0FBQzNCLGFBQUs7QUFDTCxhQUFLO0FBQUEsU0FDTixLQUFLLGVBQWU7QUFBQTtBQUFBLElBSXJCLFlBQVk7QUFBQTtBQUVkLFlBQUksSUFBc0IsTUFBTSxZQUFZLEtBQUssS0FBSztBQUFBLFVBQ2xELEtBQUssUUFBUTtBQUFBO0FBRWpCLFlBQUksU0FBUztBQUNiLGlCQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxLQUFLO0FBQy9CLGNBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTTtBQUNaLHFCQUFTO0FBQ1Q7QUFBQTtBQUFBO0FBR1IscUJBQUssWUFBWSxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsV0FBVyxNQUFNO0FBQ25FLFlBQUksYUFBNkIsTUFBTSxZQUFZLEtBQUssS0FBSztBQUFBLFVBQ3pELEtBQUssUUFBUTtBQUFBO0FBRWpCLGlCQUFTO0FBQ1QsaUJBQVMsSUFBSSxHQUFHLElBQUksV0FBVyxLQUFLLFFBQVEsS0FBSztBQUM3QyxjQUFJLFdBQVcsS0FBSyxHQUFHLFNBQVMsV0FBVyxLQUFLLEdBQUcsVUFBVTtBQUN6RCxxQkFBUztBQUNUO0FBQUE7QUFBQTtBQUdSLHFCQUFLLFlBQVksTUFBTSxVQUFVLGdCQUFnQixDQUFDLFdBQVcsUUFBUTtBQUFBO0FBQUE7QUFBQSxJQUd6RSxVQUFVO0FBQ04sbUJBQWEsS0FBSztBQUFBO0FBQUE7QUFJMUIsTUFBTyxvQkFBUSxJQUFJOzs7QUNsRG5CLDhCQUFzQjtBQUFBLElBRWxCLFFBQVEsR0FNTDtBQUNDLGNBQVEsRUFBRTtBQUFBLGFBQ0QsUUFBUTtBQUFBLGFBQ1IsUUFBUTtBQUNULGVBQUssTUFBTSxFQUFFO0FBQ2I7QUFBQSxhQUNDLFFBQVE7QUFDVCxlQUFLLGVBQWUsRUFBRTtBQUN0QixlQUFLLFdBQVc7QUFDaEI7QUFBQSxhQUNDLFFBQVE7QUFDVCxlQUFLLGVBQWUsRUFBRTtBQUN0QixlQUFLLFdBQVc7QUFDaEI7QUFBQSxhQUNDLFFBQVE7QUFDVCxlQUFLLGVBQWUsRUFBRTtBQUN0QixlQUFLLFdBQVc7QUFDaEI7QUFBQSxhQUNDLFFBQVE7QUFDVCxlQUFLLGVBQWUsRUFBRTtBQUN0QixlQUFLLFdBQVc7QUFDaEIsZUFBSyxXQUFXO0FBQ2hCO0FBQUEsYUFDQyxRQUFRO0FBQ1QsZUFBSyxlQUFlLEVBQUU7QUFDdEIsZUFBSyxXQUFXO0FBQ2hCO0FBQUEsYUFDQyxRQUFRO0FBQ1QsZUFBSyxlQUFlLEVBQUU7QUFDdEIsZUFBSyxXQUFXO0FBQ2hCO0FBQUEsYUFDQyxRQUFRO0FBQ1QsZUFBSyxlQUFlLEVBQUU7QUFDdEI7QUFBQSxhQUVDLFFBQVE7QUFBQSxhQUVSLFFBQVE7QUFBQSxhQUVSLFFBQVE7QUFBQSxhQUVSLFFBQVE7QUFBQSxhQUNSLFFBQVE7QUFBQSxhQUVSLFFBQVE7QUFBQSxhQUNSLFFBQVE7QUFBQSxhQUVSLFFBQVE7QUFDVCxlQUFLLGVBQWUsRUFBRTtBQUN0QjtBQUFBO0FBRUE7QUFBQTtBQUdSLFVBQUksRUFBRTtBQUFjLFVBQUUsYUFBYSxFQUFFO0FBRXJDLG1CQUFLLFlBQVksTUFBTSxFQUFFLEtBQUssRUFBRTtBQUFBO0FBQUEsSUFHcEMsTUFBTSxXQUFtQixNQUFXO0FBQ2hDLG1CQUFLLEtBQUssU0FBUztBQUFBLFFBRWYsTUFBTSxHQUFHLDZCQUFNO0FBQUEsR0FBYyw4QkFBTSxVQUFTO0FBQUEsUUFDNUMsTUFBTSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFRWixNQUFNLEdBQVk7QUE5RjlCO0FBK0ZRLFVBQUksQ0FBQyxHQUFHO0FBQ0oscUJBQUssS0FBSyxTQUFTLEVBQUUsTUFBTSwrQ0FBWSxNQUFNLE1BQU07QUFBQTtBQUNuRDtBQUFBO0FBRUosMkJBQWEsS0FBSyxFQUFFO0FBQ3BCLCtCQUFpQixLQUFLLEVBQUU7QUFDeEIsdUJBQVMsTUFBTSxFQUFFLFNBQVM7QUFDMUIsdUJBQVMsVUFBVSxFQUFFLFNBQVM7QUFDOUIsdUJBQVMsT0FBTyxFQUFFLFNBQVM7QUFDM0IsdUJBQVMsV0FBVyxFQUFFLFNBQVM7QUFDL0IsdUJBQVMsU0FBUyxFQUFFLFNBQVM7QUFDN0IsdUJBQVMsYUFBYSxFQUFFLFdBQVc7QUFDbkMsdUJBQVMsWUFBWSxRQUFFLFlBQUYsbUJBQVc7QUFDaEMsdUJBQVMsY0FBYyxTQUFFLFlBQUYsbUJBQVcsYUFBWTtBQUM5Qyx1QkFBUyxrQkFBa0IsU0FBRSxZQUFGLG1CQUFXLG9CQUFtQjtBQUN6RCx1QkFBUyxpQkFBaUIsRUFBRSxrQkFBa0I7QUFDOUMsdUJBQVMsYUFBYSxFQUFFLGNBQWM7QUFDdEMsdUJBQVMsV0FBVyxFQUFFO0FBQ3RCLHVCQUFTLGVBQWUsRUFBRTtBQUMxQix1QkFBUyxXQUFXLEVBQUUsU0FBUztBQUMvQix1QkFBUyxlQUFlLEVBQUUsU0FBUztBQUNuQyx1QkFBUyxjQUFjLEVBQUUsU0FBUztBQUNsQyx1QkFBUyxZQUFZLEVBQUUsU0FBUyxhQUFhO0FBQzdDLHVCQUFTLFdBQVcsRUFBRTtBQUN0Qix1QkFBUyxPQUFPLEVBQUUsT0FBTztBQUN6Qix1QkFBUyxVQUFVLEVBQUUsU0FBUztBQUM5Qix1QkFBUyxvQkFBb0IsRUFBRSxTQUFTO0FBQ3hDLHlCQUFXLEtBQUssRUFBRTtBQUNsQiwwQkFBWSxLQUFLLEVBQUU7QUFDbkIsa0NBQW9CLFFBQVEsV0FBVztBQUN2QyxVQUFJLEVBQUU7QUFBTyxvQ0FBb0IsUUFBUSxTQUFTLEVBQUU7QUFDcEQsMEJBQVksS0FBSyxFQUFFO0FBRW5CLG1CQUFLLE1BQU0sYUFBYSw0QkFBb0IsVUFBVTtBQUN0RCxtQkFBSyxNQUFNLGFBQWEsNEJBQW9CLFVBQVU7QUFDdEQsd0JBQVU7QUFBQTtBQUFBLElBR2QsV0FBVztBQUNQLHdCQUFVO0FBQ1YsMkJBQWE7QUFDYiwrQkFBaUI7QUFDakIseUJBQVc7QUFDWCwwQkFBWTtBQUNaLDBCQUFZO0FBQ1osa0NBQW9CLFFBQVEsV0FBVztBQUN2QyxrQ0FBb0IsUUFBUSxTQUFTO0FBQ3JDLHVCQUFTLE1BQU07QUFDZix1QkFBUyxVQUFVO0FBQ25CLHVCQUFTLE9BQU87QUFDaEIsdUJBQVMsV0FBVztBQUNwQix1QkFBUyxTQUFTO0FBQ2xCLHVCQUFTLGFBQWE7QUFDdEIsdUJBQVMsWUFBWTtBQUNyQix1QkFBUyxjQUFjO0FBQ3ZCLHVCQUFTLGtCQUFrQjtBQUMzQix1QkFBUyxpQkFBaUI7QUFDMUIsdUJBQVMsYUFBYTtBQUN0Qix1QkFBUyxXQUFXO0FBQ3BCLHVCQUFTLGVBQWU7QUFDeEIsdUJBQVMsV0FBVztBQUNwQix1QkFBUyxlQUFlO0FBQ3hCLHVCQUFTLGNBQWM7QUFDdkIsdUJBQVMsV0FBVztBQUNwQix1QkFBUyxZQUFZO0FBQ3JCLHVCQUFTLE9BQU87QUFDaEIsdUJBQVMsVUFBVTtBQUNuQix1QkFBUyxvQkFBb0I7QUFBQTtBQUFBLElBT3pCLGVBQWUsR0FBbUI7QUFDdEMsdUJBQVMsT0FBTyxFQUFFO0FBQ2xCLHVCQUFTLFVBQVUsRUFBRTtBQUNyQix1QkFBUyxpQkFBaUIsRUFBRSxrQkFBa0I7QUFBQTtBQUFBLElBTzFDLFdBQVcsSUFBWTtBQUMzQiwwQkFBWSxhQUFhO0FBQUE7QUFBQTtBQUlqQyxNQUFPLDBCQUFRLElBQUk7OztBQzNKbkIsMkJBQWlDO0FBQUEsSUFBakMsY0E3QkE7QUFpQ0kscUJBQWtCO0FBRVYsc0JBQTBEO0FBRzFELHNCQUF3QyxJQUFJO0FBQUE7QUFBQSxJQUVwRCxLQUFLLEtBQWE7QUFDZCxXQUFLLFVBQVU7QUFBQTtBQUFBLElBVVgsVUFBVSxTQUFtQixRQUFrQixJQUFhO0FBQ2hFLFVBQUksVUFBVSxJQUFJO0FBRWxCLGNBQVEscUJBQXFCLE1BQU07QUFDL0IsWUFBSSxRQUFRLGNBQWMsR0FBRztBQUN6QixrQkFBUSxRQUFRO0FBQUEsaUJBQ1A7QUFBQSxpQkFDQTtBQUNELG9CQUFNLE9BQU8sS0FBSyxNQUFNLFFBQVE7QUFDaEMsa0JBQUksQ0FBQyxLQUFLLE1BQU07QUFDWixvQkFBSSxJQUFJO0FBQ0osc0NBQVksYUFBYTtBQUFBO0FBQUE7QUFJakMsbUJBQUssZ0JBQWdCLE1BQU0sU0FBUyxRQUFRO0FBQzVDLG1CQUFLLG1CQUFtQjtBQUN4QjtBQUFBO0FBR0Esa0JBQUksUUFBUSxjQUFjO0FBQ3RCLG9CQUFJLElBQUksS0FBSyxNQUFNLFFBQVE7QUFDM0Isb0JBQUksRUFBRSxZQUFZO0FBQ2QsK0JBQUssS0FBSyxTQUFTO0FBQUEsb0JBQ2YsTUFBTSxHQUFHLFFBQVE7QUFBQSxvQkFDakIsTUFBTSxNQUFNO0FBQUE7QUFBQTtBQUFBLHVCQUViO0FBRUgsb0JBQUUsT0FBTztBQUNULHVCQUFLLGdCQUFnQixHQUFHLFNBQVMsUUFBUTtBQUFBO0FBRTdDLHFCQUFLLG1CQUFtQjtBQUFBO0FBSTVCLGtCQUFJLENBQUMsUUFBUSxRQUFRO0FBQ2pCLHFCQUFLLGdCQUNEO0FBQUEsa0JBQ0ksTUFBTTtBQUFBLGtCQUNOLE1BQU0sRUFBRSxTQUFTO0FBQUEsa0JBQ2pCLEtBQUs7QUFBQSxtQkFFVCxTQUNBLFFBQ0E7QUFFSixxQkFBSyxtQkFBbUI7QUFBQTtBQUc1QjtBQUFBO0FBQUE7QUFBQTtBQUtoQixhQUFPO0FBQUE7QUFBQSxJQU9ILG1CQUFtQixLQUFxQjtBQUU1QyxXQUFLLFNBQVMsUUFBUSxDQUFDLEdBQUcsTUFBTTtBQUM1QixZQUFJLEtBQUssS0FBSztBQUNWLGVBQUssU0FBUyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNM0IsS0FBSyxNQUFrQztBQUFBO0FBM0hqRDtBQTRIUSxZQUFJLENBQUMsS0FBSztBQUFRLGVBQUssU0FBUztBQUNoQyxZQUFJLENBQUMsS0FBSztBQUFjLGVBQUssZUFBZTtBQUM1QyxZQUFJLENBQUMsS0FBSztBQUFTLGVBQUssVUFBVSxLQUFLO0FBRXZDLFlBQUksTUFBTSxLQUFLLFVBQVUsS0FBSztBQUU5QixZQUFJLFdBQXFCO0FBQ3pCLFlBQUksS0FBSyxNQUFNO0FBQ1gsaUJBQU8sS0FBSyxLQUFLLE1BQU0sUUFBUSxDQUFDLE1BQU07QUFDbEMscUJBQVMsS0FBSyxHQUFHLEtBQUssS0FBSyxLQUFLO0FBQUE7QUFBQTtBQUd4QyxjQUFNLGlCQUFpQixTQUFTLEtBQUs7QUFFckMsWUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLGlCQUFpQjtBQUN6QyxpQkFBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDcEMsbUJBQU87QUFBQTtBQUFBO0FBSWYsWUFBSSxLQUFLO0FBQ1QsWUFBSSxZQUFLLFNBQUwsbUJBQVcsU0FBUSxtQkFBVyxXQUFXO0FBQ3pDLGdCQUFNLFNBQVMsTUFBTSxRQUFRLGVBQWU7QUFBQSxZQUN4QyxLQUFLLFlBQVk7QUFBQSxZQUNqQixNQUFNO0FBQUEsWUFDTixXQUFXLEtBQUs7QUFBQTtBQUVwQixjQUFJLGlDQUFRLE1BQU07QUFDZCx5QkFBSyxLQUFLLFNBQVM7QUFBQSxjQUNmLE1BQU0sR0FBRyxPQUFPLEtBQUssY0FBYyxPQUFPO0FBQUEsY0FDMUMsTUFBTSxNQUFNO0FBQUE7QUFBQTtBQUVoQixtQkFBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFDcEMscUJBQU87QUFBQTtBQUFBLGlCQUVSO0FBQ0gsaUJBQUs7QUFDTCw2QkFBUztBQUVULGdCQUFJLGlDQUFRLEtBQUssZUFBZTtBQUM1QiwrQkFBUyxvQkFBb0I7QUFBQSxtQkFDMUI7QUFDSCwrQkFBUztBQUFBO0FBRWIseUJBQVksS0FBSyxLQUFLO0FBQUEsY0FDbEIsS0FBSyxRQUFRO0FBQUEsY0FDYixNQUFNLEVBQUUsT0FBTyxpQkFBUztBQUFBO0FBQUE7QUFBQTtBQUtwQyxlQUFPLElBQUksUUFBUSxDQUFPLFNBQVMsV0FBVztBQUMxQyxnQkFBTSxNQUFNLEtBQUssVUFBVSxTQUFTLFFBQVE7QUFFNUMsZUFBSyxTQUFTLElBQUksTUFBTSxnQkFBZ0I7QUFFeEMsZUFBSyxTQUFTLEtBQUssRUFBRSxLQUFVO0FBRS9CLGNBQUksNkJBQU0sUUFBUTtBQUNkLGlCQUFLO0FBQUE7QUFHVCxjQUFJLENBQUMsS0FBSyxTQUFTO0FBQ2YsaUJBQUssVUFBVSxDQUFDLGlCQUFpQixVQUFVLDRCQUFvQixVQUFVO0FBQUE7QUFHN0Usa0JBQVEsSUFDSixpQkFBaUIsS0FBSyxTQUFTLEtBQUssVUFBVSxLQUFLLFNBQ25ELGtDQUNBLGtDQUNBO0FBR0osY0FBSSxDQUFDLEtBQUssS0FBSztBQUNYLHlCQUFLLEtBQUssS0FBSyxZQUFJLE1BQU0sVUFBVTtBQUFBLGNBQy9CLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFFbEIsbUJBQU8sT0FBTztBQUFBO0FBR2xCLGNBQUksS0FBSyxRQUFRLEtBQUs7QUFDdEIsY0FBSSxpQkFBaUIsZ0JBQWdCO0FBRXJDLGNBQUksaUJBQWlCLGlCQUFpQixVQUFVLDRCQUFvQixVQUFVO0FBRTlFLGNBQUksS0FBSztBQUFBO0FBQUE7QUFBQTtBQUFBLElBSVQsZ0JBQWdCLEdBQUcsU0FBbUIsUUFBa0IsS0FBSztBQUVqRSxVQUFJO0FBQ0osZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFNBQVMsUUFBUSxLQUFLO0FBQzNDLFlBQUksS0FBSyxTQUFTLEdBQUcsT0FBTyxLQUFLO0FBQzdCLG9CQUFVLEtBQUssU0FBUyxHQUFHO0FBQzNCLGVBQUssU0FBUyxNQUFNLEdBQUc7QUFDdkI7QUFBQTtBQUFBO0FBR1IsVUFBSSxFQUFFLE1BQU07QUFDUixlQUFPLEVBQUU7QUFDVCxZQUFJLG1DQUFTLE9BQU87QUFDaEIsa0JBQVEsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUFBO0FBRTVCLGdDQUFnQixNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ2hDLGVBQU8sUUFBUSxNQUFNO0FBQUEsYUFDbEI7QUFDSCxZQUFJLE1BQU0sUUFBUTtBQUNsQixnQkFBUSxJQUNKLGlCQUFpQixRQUNqQixrQ0FDQSxrQ0FDQSxFQUFFO0FBRU4sWUFBSSxFQUFFLFNBQVMsR0FBRztBQUNkLGtDQUFnQixRQUFRO0FBQUEsWUFDcEI7QUFBQSxZQUNBLE1BQU0sRUFBRTtBQUFBLFlBQ1IsY0FBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLdEIsYUFBYSxHQUFHO0FBQ3BCLGNBQVEsSUFBSTtBQUFBO0FBQUEsSUFFUixlQUFlLEdBQUc7QUFDdEIsY0FBUSxJQUFJO0FBQUE7QUFBQTtBQTlOcEI7QUFFVztBQUFBLElBRE47QUFBQSxLQURMLGFBRVc7OztBQ2pCWCxrQ0FBeUMsV0FBVztBQUFBLElBQXBELGNBZEE7QUFjQTtBQUVZLHNCQUF1QjtBQUV2QixzQkFBMEI7QUFFMUIsbUJBQW9CO0FBTXBCLHNCQUFvQjtBQUFBO0FBQUEsSUFFNUIsU0FBUyxHQUFHO0FBQ1IsV0FBSyxPQUFPO0FBRVosV0FBSyxXQUFXLHFCQUFhLE1BQU0sVUFBVSxJQUFJLG9CQUFvQixNQUNqRSxvQkFBWSxLQUFLO0FBRXJCLFdBQUssU0FBUyxPQUFPLEtBQUssU0FBUyxJQUFJO0FBQ3ZDLFdBQUssU0FBUyxRQUFRLEtBQUssU0FBUyxRQUFRO0FBRTVDLFdBQUssTUFBTSxXQUFXLENBQUMsaUJBQVM7QUFDaEMsV0FBSyxNQUFNLFNBQVMsUUFBUSxpQkFBUztBQUVyQyxVQUFJLGlCQUFTLFVBQVUsT0FBTyxpQkFBUyxvQkFBb0IsSUFBSTtBQUMzRCxhQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTTtBQUM3QixrQkFBUSxlQUFlO0FBQUEsWUFDbkIsS0FBSyxZQUFZO0FBQUEsWUFDakIsTUFBTSxFQUFFLFFBQVE7QUFBQTtBQUdwQixrQkFBUSxlQUFlO0FBQUEsWUFDbkIsS0FBSyxZQUFZO0FBQUEsWUFDakIsTUFBTSxFQUFFLFFBQVE7QUFBQTtBQUVwQixrQkFBUSxlQUFlO0FBQUEsWUFDbkIsS0FBSyxZQUFZO0FBQUEsWUFDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUVsQixrQkFBUSxlQUFlO0FBQUEsWUFDbkIsS0FBSyxZQUFZO0FBQUEsWUFDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTTlCLFlBQWtCO0FBQ2QsVUFBSSxpQkFBUyxVQUFVLE9BQU8saUJBQVMsb0JBQW9CLElBQUk7QUFDM0QsUUFBQyxLQUFLLE1BQU0sZUFBZSxVQUF5QixVQUFVO0FBQUE7QUFBQTtBQUFBLElBSXRFLFFBQVEsR0FBZTtBQUNuQixjQUFRLEVBQUUsT0FBTztBQUFBLGFBQ1I7QUFDRCx1QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCO0FBQUEsYUFDQztBQUNELGNBQUksQ0FBQyxLQUFLLFVBQVU7QUFDaEI7QUFBQTtBQUVKLGNBQ0ksS0FBSyxTQUFTLElBQUksTUFBTSxtQkFBVyxVQUNuQyxLQUFLLFNBQVMsUUFBUSxpQkFBUyxNQUNqQztBQUNFLHlCQUFLLEtBQUssU0FBUyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxNQUFNO0FBQUE7QUFDL0M7QUFBQTtBQUVKLGNBQ0ksS0FBSyxTQUFTLElBQUksTUFBTSxtQkFBVyxhQUNuQyxLQUFLLFNBQVMsUUFBUSxpQkFBUyxTQUNqQztBQUNFLHlCQUFLLEtBQUssU0FBUyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxNQUFNO0FBQUE7QUFDL0M7QUFBQTtBQUVKLGVBQUssV0FBVztBQUNoQixzQkFBWSxLQUNQLEtBQUs7QUFBQSxZQUNGLEtBQUssUUFBUTtBQUFBLFlBQ2IsTUFBTTtBQUFBLGNBQ0YsUUFBUSxLQUFLLEtBQUs7QUFBQSxjQUNsQixNQUFNLG1CQUFXO0FBQUE7QUFBQSxhQUd4QixLQUFLLE1BQU07QUFyR2hDO0FBc0d3QixpQkFBSyxXQUFXO0FBQ2hCLGdCQUFJLFdBQUssU0FBTCxtQkFBVyxNQUFNO0FBQ2pCLG1CQUFLLEtBQUs7QUFDViwyQkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQUE7QUFBQSxhQUdqQyxNQUFNLE1BQU07QUFDVCxpQkFBSyxXQUFXO0FBQUE7QUFFeEI7QUFBQSxhQUNDO0FBQ0QsY0FBSSxDQUFDLEtBQUssVUFBVTtBQUNoQjtBQUFBO0FBRUosZUFBSyxXQUFXO0FBQ2hCLHNCQUFZLEtBQ1AsS0FBSztBQUFBLFlBQ0YsS0FBSyxRQUFRO0FBQUEsWUFDYixNQUFNO0FBQUEsY0FDRixRQUFRLEtBQUssS0FBSztBQUFBLGNBQ2xCLE1BQU0sbUJBQVc7QUFBQTtBQUFBLGFBR3hCLEtBQUssQ0FBQyxNQUFnRDtBQTdIM0U7QUE4SHdCLGlCQUFLLFdBQVc7QUFDaEIsZ0JBQUksV0FBSyxTQUFMLG1CQUFXLE1BQU07QUFDakIsbUJBQUssS0FBSztBQUNWLDJCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFBQTtBQUc5Qix5QkFBSyxZQUFZLE1BQU0sVUFBVSxvQkFBb0I7QUFBQSxjQUNqRCxFQUFFO0FBQUEsY0FDRixFQUFFO0FBQUE7QUFBQSxhQUdULE1BQU0sTUFBTTtBQUNULGlCQUFLLFdBQVc7QUFBQTtBQUd4QjtBQUFBO0FBQUE7QUFBQSxJQUlaLGNBQW9CO0FBQ2hCLGNBQVEsZUFBZTtBQUFBLFFBQ25CLEtBQUssWUFBWTtBQUFBLFFBQ2pCLE1BQU07QUFBQTtBQUFBO0FBQUE7OztBQ3RJbEIsc0NBQTZDLFdBQVc7QUFBQSxJQUF4RCxjQWRBO0FBY0E7QUFFWSx3QkFBeUI7QUFFekIsdUJBQXdCO0FBRXhCLG1CQUFvQjtBQUFBO0FBQUEsSUFLNUIsU0FBUyxHQUF1QjtBQUM1QixXQUFLLE9BQU87QUFDWixVQUFJLGdCQUFnQixxQkFBYSxNQUFNLFVBQVUsSUFBSSx1QkFBdUI7QUFDNUUsV0FBSyxnQkFBZ0I7QUFDckIsV0FBSyxXQUFXLE9BQU8scUJBQU07QUFFN0IsV0FBSyxNQUFNLFdBQVcsQ0FBQyxpQkFBUztBQUNoQyxXQUFLLE1BQU0sU0FBUyxRQUFRLGlCQUFTO0FBQUE7QUFBQSxJQUd6QyxRQUFRLEdBQWU7QUFDbkIsY0FBUSxFQUFFLE9BQU87QUFBQSxhQUNSO0FBQ0QsdUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUMxQjtBQUFBLGFBQ0M7QUFBQSxhQUNBO0FBQ0QsY0FBSSxpQkFBUyxZQUFZLHFCQUFhLE1BQU0sVUFBVSxJQUFJLGlCQUFpQixPQUFPO0FBQzlFLHlCQUFLLEtBQUssU0FBUyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxNQUFNO0FBQUE7QUFDL0M7QUFBQTtBQUVKLGNBQUksRUFBRSxPQUFPLFFBQVEsWUFBWSxpQkFBUyxPQUFPLEtBQUssZUFBZTtBQUNqRSx5QkFBSyxLQUFLLFNBQVMsRUFBRSxNQUFNLDRCQUFRLE1BQU0sTUFBTTtBQUFBO0FBQy9DO0FBQUE7QUFHSixzQkFBWSxLQUNQLEtBQUs7QUFBQSxZQUNGLEtBQUssUUFBUTtBQUFBLFlBQ2IsTUFBTTtBQUFBLGNBQ0YsTUFDSSxFQUFFLE9BQU8sUUFBUSxXQUNYLG1CQUFXLGlCQUNYLG1CQUFXO0FBQUE7QUFBQSxhQUc1QixLQUFLLENBQUMsTUFBK0Q7QUE3RDFGO0FBOER3Qiw2QkFBUyxXQUFXLEVBQUU7QUFDdEIsZ0JBQUksV0FBSyxTQUFMLG1CQUFXLE1BQU07QUFDakIsbUJBQUssS0FBSztBQUFBO0FBR2QsZ0JBQUksRUFBRSxPQUFPLFFBQVEsVUFBVTtBQUMzQixzQkFBUSxlQUFlO0FBQUEsZ0JBQ25CLEtBQUssWUFBWTtBQUFBLGdCQUNqQixNQUFNLEVBQUUsTUFBTTtBQUFBO0FBQUE7QUFJdEIseUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUFBO0FBR2xDO0FBQUE7QUFBQTtBQUFBOzs7QUNoRWhCLHVDQUE4QyxXQUFXO0FBQUEsSUFBekQsY0FiQTtBQWFBO0FBRVksd0JBQXlCO0FBRXpCLHVCQUF3QjtBQUV4QixnQkFBaUI7QUFFakIsb0JBQXFCO0FBRXJCLHlCQUEwQjtBQUcxQixtQkFBb0I7QUFBQTtBQUFBLElBSTVCLFNBQVMsR0FBcUM7QUFDMUMsV0FBSyxPQUFPO0FBQ1osVUFBSSxXQUFXLHFCQUFhLE1BQU0sYUFBYSxJQUFJLEVBQUUsSUFBSSxRQUFRO0FBQ2pFLFdBQUssV0FBVyxPQUFPLHFCQUFNLFNBQVMsS0FBSztBQUMzQyxXQUFLLFVBQVUsT0FBTyxTQUFTLEtBQUssSUFBSTtBQUV4QyxXQUFLLEdBQUcsT0FBTyxHQUFHLEVBQUUsSUFBSSxRQUFRO0FBQ2hDLFdBQUssT0FBTyxPQUFPLElBQUksT0FBUSxVQUFTLE9BQU8sS0FBSyxRQUFRO0FBQzVELFdBQUssWUFBWSxPQUFPLElBQUksT0FBUSxVQUFTLGNBQWMsS0FBSyxRQUFRO0FBRXhFLFdBQUssTUFBTSxXQUFXLENBQUMsaUJBQVM7QUFDaEMsV0FBSyxNQUFNLFNBQVMsUUFBUSxpQkFBUztBQUVyQyxVQUFJLGlCQUFTLFVBQVUsT0FBTyxpQkFBUyxvQkFBb0IsSUFBSTtBQUMzRCxhQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTTtBQUM3QixrQkFBUSxlQUFlO0FBQUEsWUFDbkIsS0FBSyxZQUFZO0FBQUEsWUFDakIsTUFBTSxFQUFFLFFBQVE7QUFBQTtBQUdwQixrQkFBUSxlQUFlO0FBQUEsWUFDbkIsS0FBSyxZQUFZO0FBQUEsWUFDakIsTUFBTSxFQUFFLFFBQVE7QUFBQTtBQUVwQixrQkFBUSxlQUFlO0FBQUEsWUFDbkIsS0FBSyxZQUFZO0FBQUEsWUFDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUVsQixrQkFBUSxlQUFlO0FBQUEsWUFDbkIsS0FBSyxZQUFZO0FBQUEsWUFDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTTlCLFlBQWtCO0FBQ2QsVUFBSSxpQkFBUyxVQUFVLE9BQU8saUJBQVMsb0JBQW9CLElBQUk7QUFDM0QsUUFBQyxLQUFLLE1BQU0sZUFBZSxVQUF5QixVQUFVO0FBQUE7QUFBQTtBQUFBLElBSXRFLFFBQVEsR0FBZTtBQUNuQixjQUFRLEVBQUUsT0FBTztBQUFBLGFBQ1I7QUFDRCx1QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCO0FBQUEsYUFDQztBQUFBLGFBQ0E7QUFDRCxzQkFBWSxLQUNQLEtBQUs7QUFBQSxZQUNGLEtBQUssUUFBUTtBQUFBLFlBQ2IsTUFBTTtBQUFBLGNBQ0YsUUFBUSxLQUFLLEtBQUssSUFBSTtBQUFBLGNBQ3RCLE1BQ0ksRUFBRSxPQUFPLFFBQVEsZUFDWCxtQkFBVyxpQkFDWCxtQkFBVztBQUFBO0FBQUEsYUFHNUIsS0FBSyxDQUFDLE1BQWdEO0FBQ25ELGdCQUFJLEVBQUUsT0FBTyxRQUFRLGdCQUFnQjtBQUNqQywyQkFBSyxZQUFZLE1BQU0sVUFBVSxvQkFBb0I7QUFBQSxnQkFDakQsRUFBRTtBQUFBLGdCQUNGLEVBQUU7QUFBQTtBQUFBLG1CQUVIO0FBQ0gsc0JBQVEsZUFBZTtBQUFBLGdCQUNuQixLQUFLLFlBQVk7QUFBQSxnQkFDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUFBO0FBSXRCLGdCQUFJLEtBQUssS0FBSyxNQUFNO0FBQ2hCLG1CQUFLLEtBQUs7QUFBQTtBQUVkLHlCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFBQTtBQUdsQztBQUFBO0FBQUE7QUFBQSxJQUlaLGNBQW9CO0FBQ2hCLGNBQVEsZUFBZTtBQUFBLFFBQ25CLEtBQUssWUFBWTtBQUFBLFFBQ2pCLE1BQU07QUFBQTtBQUFBO0FBQUE7OztBQ2hIbEIsc0NBQTZDLGFBQUssV0FBVztBQUFBLElBTXpELFNBQVMsR0FBYztBQUNuQixXQUFLLE9BQU8sdUJBQUc7QUFBQTtBQUFBLElBR25CLFlBQVk7QUFDUixXQUFLLFVBQVUsaUJBQWlCO0FBQUE7QUFBQSxJQUdwQyxRQUFRLEdBQWU7QUFDbkIsY0FBUSxFQUFFLE9BQU87QUFBQSxhQUNSO0FBQ0QsdUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUMxQjtBQUFBLGFBQ0M7QUFDRCx1QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCLGNBQUksS0FBSyxNQUFNO0FBQ1gsaUJBQUs7QUFDTCx5QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQUE7QUFFOUI7QUFBQTtBQUFBO0FBQUEsSUFJWixjQUFjO0FBQ1YsV0FBSyxPQUFPLGdCQUFnQjtBQUFBO0FBQUE7OztBQ3RCcEMsd0NBQStDLGFBQUssV0FBVztBQUFBLElBQS9ELGNBWkE7QUFZQTtBQVFZLHdCQUEyQjtBQUUzQix5QkFBc0I7QUFDdEIsd0JBQXFCO0FBQ3JCLHNCQUFvQjtBQUFBO0FBQUEsSUFJNUIsWUFBWTtBQUNSLFdBQUssVUFBVSxpQkFBaUI7QUFDaEMsV0FBSyxVQUFVLFFBQVEsSUFBSSxNQUFNO0FBQ2pDLFdBQUssVUFBVSxnQkFBZ0IsSUFBSSxLQUFLLFFBQVEsTUFBTSxLQUFLO0FBQUE7QUFBQSxJQUcvRCxTQUFTLE1BQW9DO0FBQ3pDLFdBQUssYUFBYSxLQUFLLFFBQVE7QUFDL0IsV0FBSyxPQUFPLEtBQUs7QUFDakIsVUFBSSxpQkFBUyxjQUFjO0FBQ3ZCLGFBQUssVUFBVSxVQUFVO0FBQ3pCLGFBQUssVUFBVSxTQUFTO0FBQUE7QUFHNUIsV0FBSyxjQUNELHFCQUFhLE1BQU0sVUFBVSxJQUFJLHNCQUFzQixNQUN6RDtBQUVGLFlBQU0sYUFBYSxxQkFBYSxNQUFNLFVBQVUsSUFBSSxjQUFjO0FBQ2xFLFdBQUssYUFBYSxPQUFPLFdBQVc7QUFBQTtBQUFBLElBR3hDLFFBQVEsR0FBZTtBQUNuQixjQUFRLEVBQUUsT0FBTztBQUFBLGFBQ1I7QUFDRCx1QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCO0FBQUEsYUFDQztBQUNELGtCQUFRLGVBQWU7QUFBQSxZQUNuQixLQUFLLFlBQVk7QUFBQSxZQUNqQixNQUFNO0FBQUEsWUFDTixXQUFXLEtBQUs7QUFBQSxhQUNqQixLQUFLLENBQUMsTUFBTTtBQUNYLGdCQUFJLENBQUMsS0FBSyx3QkFBRyxPQUFNO0FBQ2YsMkJBQUssS0FBSyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssWUFBWSxNQUFNLE1BQU07QUFBQTtBQUFBLG1CQUN2RDtBQUNILDJCQUFLLEtBQUssU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLFlBQVksTUFBTSxNQUFNO0FBQUE7QUFDMUQsMEJBQVksS0FDUCxLQUFLO0FBQUEsZ0JBQ0YsS0FBSyxRQUFRO0FBQUEsaUJBRWhCLEtBQUssTUFBTTtBQUNSLG9DQUFZLGFBQWE7QUFDekIsd0JBQVEsZUFBZTtBQUFBLGtCQUNuQixLQUFLLFlBQVk7QUFBQSxrQkFDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtsQztBQUFBLGFBQ0M7QUFDRCxlQUFLO0FBQ0w7QUFBQSxhQUNDO0FBQ0QsZ0JBQU0sSUFBSyxFQUFFLE9BQXNCO0FBQ25DLGVBQUssU0FBUztBQUNkO0FBQUE7QUFBQTtBQUFBLElBU0osU0FBUyxHQUFXO0FBQ3hCLFVBQUksQ0FBQyxLQUFLO0FBQVU7QUFDcEIsV0FBSyxXQUFXO0FBQ2hCLGtCQUFZLEtBQ1AsS0FBSztBQUFBLFFBQ0YsS0FBSyxRQUFRO0FBQUEsUUFDYixNQUFNLEVBQUUsT0FBTztBQUFBLFNBRWxCLEtBQUssTUFBTTtBQUNSLGFBQUssV0FBVztBQUNoQixxQkFBSyxLQUFLLFNBQVMsRUFBRSxNQUFNLDRCQUFRLE1BQU0sTUFBTTtBQUFBO0FBQy9DLGFBQUssV0FBVyxHQUFHLGlCQUFpQjtBQUNwQyxhQUFLLFVBQVU7QUFDZixxQkFBSyxZQUFZLE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxLQUFLO0FBQUEsU0FFckUsTUFBTSxNQUFNO0FBQ1QsYUFBSyxXQUFXO0FBQUE7QUFBQTtBQUFBLElBSXBCLFdBQVcsTUFBa0IsR0FBVztBQUM1QyxNQUFDLEtBQUssZUFBZSxPQUFzQixPQUFPLFNBQUksSUFBSTtBQUMxRCxZQUFNLE1BQU0sS0FBSyxlQUFlO0FBRWhDLE1BQUMsS0FBSyxlQUFlLGFBQWEsZUFBZSxTQUF3QixPQUFPLEdBQzVFLEtBQUssY0FBYyxLQUFLO0FBRzVCLFVBQUksT0FBTztBQUNYLFVBQUksS0FBSyxXQUFXLFNBQVMsR0FBRztBQUM1QixZQUFJLEtBQUssV0FBVyxHQUFHLGdCQUFnQjtBQUNuQyxjQUFJLFdBQVc7QUFDZixjQUFJLE9BQU87QUFBQSxlQUNSO0FBQ0gsY0FBSSxXQUFXO0FBQUE7QUFBQSxhQUVoQjtBQUNILFlBQUksV0FBVztBQUFBO0FBR25CLFVBQUksSUFBSSxHQUFHO0FBQ1AsWUFBSSxXQUFXO0FBQ2YsWUFBSSxVQUFVO0FBQUE7QUFHbEIsVUFBSSxhQUFhO0FBQUE7QUFBQSxJQU9iLFNBQVM7QUFDYixVQUFJLENBQUMsS0FBSyxZQUFZLFFBQVEsQ0FBQyxLQUFLLFlBQVksS0FBSyxRQUFRO0FBQ3pELHFCQUFLLEtBQUssU0FBUyxFQUFFLE1BQU0sb0RBQVksTUFBTSxNQUFNO0FBQUE7QUFDbkQ7QUFBQTtBQUVKLFVBQUksQ0FBQyxLQUFLO0FBQVU7QUFDcEIsV0FBSyxXQUFXO0FBQ2hCLGtCQUFZLEtBQ1AsS0FBSztBQUFBLFFBQ0YsS0FBSyxRQUFRO0FBQUEsUUFDYixNQUFNO0FBQUEsVUFDRixLQUFLLEtBQUssWUFBWTtBQUFBO0FBQUEsU0FHN0IsS0FBSyxNQUFNO0FBQ1IseUJBQVMsZUFBZSxLQUFLLFlBQVk7QUFDekMscUJBQUssS0FBSyxTQUFTLEVBQUUsTUFBTSw0QkFBUSxNQUFNLE1BQU07QUFBQTtBQUMvQyxhQUFLLFVBQVUsVUFBVTtBQUN6QixhQUFLLFVBQVUsU0FBUztBQUN4QixhQUFLLFdBQVc7QUFDaEIsWUFBSSxLQUFLO0FBQU0sZUFBSztBQUFBLFNBRXZCLE1BQU0sTUFBTTtBQUNULGFBQUssV0FBVztBQUFBO0FBQUE7QUFBQSxJQUk1QixjQUFjO0FBQUE7QUFBQTs7O0FDN0tsQixNQUFXO0FBQVgsWUFBVyxZQUFYO0FBRUkscUNBQVEsUUFBUjtBQUFBLEtBRk87QUFLWCxNQUFPLG9CQUFROzs7QUNrQmYscUNBQTRDLGFBQUssV0FBVztBQUFBLElBQTVELGNBdkJBO0FBdUJBO0FBR1ksa0JBQW1CO0FBR25CLHVCQUF3QjtBQUd4QixvQkFBcUI7QUFFckIsMkJBQXdCO0FBR3hCLG9CQUFxQjtBQUdyQixxQkFBeUI7QUFFekIseUJBQTBCO0FBRzFCLDBCQUEyQjtBQUczQixtQkFBd0I7QUFHeEIsd0JBQXlCO0FBR3pCLHdCQUFxQjtBQUU3QixxQkFBa0I7QUFRbEIsc0JBQW9CO0FBRXBCLHFCQUFtQjtBQUVuQixzQkFBb0I7QUFRWixzQkFBb0I7QUFJcEIsd0JBQXFCO0FBQUE7QUFBQSxJQUU3QixZQUFZO0FBQ1IsV0FBSyxZQUF3QixLQUFLO0FBQ2xDLFdBQUssY0FBYyxLQUFLLFFBQVEsZUFBZTtBQUMvQyxXQUFLO0FBQUE7QUFBQSxJQUdULE9BQU87QUFDSCxXQUFLLEtBQUssT0FBTztBQUNqQixXQUFLLGVBQWU7QUFDcEIsV0FBSyxRQUFRLFVBQVU7QUFDdkIsV0FBSyxRQUFRLFNBQVM7QUFDdEIsV0FBSyxhQUFhLFVBQVU7QUFDNUIsV0FBSyxPQUFPLFVBQVU7QUFDdEIsV0FBSyxNQUFNLFVBQVU7QUFDckIsV0FBSyxXQUFXLFVBQVU7QUFDMUIsV0FBSyxNQUFNLEdBQUcsS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNO0FBQzNDLGFBQUssTUFBTSxVQUFVO0FBQUE7QUFFekIsV0FBSyxhQUFhLEtBQUs7QUFBQTtBQUFBLElBTzNCLFdBQVcsTUFBdUM7QUFDOUMsVUFBSSw2QkFBTSxNQUFNO0FBQ1osYUFBSyxXQUFXLEtBQUs7QUFBQSxhQUNsQjtBQUNILGFBQUssV0FBVyxvQkFBWTtBQUFBO0FBR2hDLFdBQUssT0FBTyxLQUFLLFNBQVMsSUFBSSxLQUFLO0FBRW5DLFdBQUs7QUFBQTtBQUFBLElBR0QsYUFBYTtBQXZIekI7QUF3SFEsV0FBSyxnQkFBZ0I7QUFDckIsVUFBSSxLQUFLLE1BQU07QUFDWCxhQUFLLEtBQUssSUFBSTtBQUNkLGFBQUssZUFBZTtBQUVwQixhQUFLLGFBQWEsVUFBVTtBQUU1QixhQUFLLFVBQVUsT0FBTyxLQUFLO0FBQzNCLGFBQUssU0FBUyxRQUFRLEtBQUssS0FBSztBQUNoQyxhQUFLLE9BQU8sVUFBVTtBQUN0QixhQUFLO0FBQ0wsYUFBSyxRQUFRLFVBQVU7QUFDdkIsWUFBSSxLQUFLLEtBQUssV0FBVztBQUNyQixlQUFLLGFBQWE7QUFBQTtBQUd0QixZQUFJLEtBQUssS0FBSyxhQUFhLEtBQUssS0FBSyxpQkFBaUIsR0FBRztBQUNyRCxlQUFLLGFBQWEsS0FBSyxLQUFLLGlCQUFpQixNQUFPLEtBQUs7QUFFekQsZUFBSyxRQUFRLFVBQVU7QUFDdkIsZUFBSyxRQUFRLFNBQVM7QUFFdEIsZUFBSyxLQUFLLE9BQU8scUJBQWEsTUFBTSxTQUFTLElBQUksS0FBSyxLQUFLLFdBQVc7QUFFdEUsZUFBSyxlQUFlO0FBQ3BCLGVBQUs7QUFJTCxjQUFJLEtBQUssU0FBUztBQUNkLGlCQUFLLGFBQWEsVUFBVTtBQUFBLGlCQUN6QjtBQUVILGlCQUFLLGFBQWE7QUFBQTtBQUFBLGVBRW5CO0FBQ0gsY0FBSSxLQUFLLEtBQUssV0FBVztBQUNyQixpQkFBSyxhQUFhLEtBQUs7QUFDdkIsaUJBQUssYUFBYSxVQUFVO0FBQzVCLGlCQUFLLGVBQWU7QUFFcEIsaUJBQUs7QUFDTCxpQkFBSyxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsYUFHM0I7QUFDSCxhQUFLLE9BQU8sVUFBVTtBQUN0QixhQUFLLFVBQVUsT0FBTztBQUN0QixhQUFLLEtBQUssT0FBTyxLQUFLO0FBQ3RCLGFBQUssS0FBSyxJQUFJO0FBQ2QsYUFBSyxTQUFTO0FBQ2QsYUFBSyxnQkFBZ0I7QUFDckIsYUFBSyxhQUFhLFVBQVU7QUFDNUIsYUFBSyxZQUFZO0FBQ2pCLGFBQUssZUFBZTtBQUVwQixhQUFLLE1BQU0sU0FBUztBQUNwQixhQUFLLE1BQU0sU0FBUztBQUNwQixtQkFBSyxzQkFBTCxtQkFBd0I7QUFDeEIsYUFBSyxvQkFBb0I7QUFBQTtBQUFBO0FBQUEsSUFRakMsU0FBUyxNQUFlO0FBQ3BCLFdBQUssS0FBSyxVQUFVO0FBQUE7QUFBQSxJQU94QixpQkFBaUIsVUFBcUI7QUFDbEMsY0FBUTtBQUFBLGFBQ0M7QUFDRCxlQUFLLGFBQWEsT0FBTztBQUN6QjtBQUFBLGFBQ0M7QUFDRCxlQUFLLGFBQWEsT0FBTztBQUN6QjtBQUFBLGFBQ0M7QUFDRCxlQUFLLGFBQWEsT0FBTztBQUN6QjtBQUFBO0FBQUE7QUFBQSxJQU9aLGdCQUFnQixNQUFlO0FBcE5uQztBQXFOUSxXQUFLLGFBQWEsSUFBSTtBQUN0QixVQUFJLENBQUMsS0FBSyxtQkFBbUI7QUFDekIsYUFBSyxvQkFBb0IsS0FBSyxTQUFTLEdBQ25DLEtBQUssY0FDTCxFQUFFLEdBQUcsS0FBSyxhQUFhLElBQUksTUFDM0IsS0FDQSxNQUNGLEdBQUcsS0FBSyxjQUFjLEVBQUUsR0FBRyxLQUFLLGFBQWEsS0FBSztBQUNwRCxhQUFLLGtCQUFrQixLQUFLLE1BQU07QUFBQTtBQUd0QyxVQUFJLEtBQUssWUFBWSxDQUFDLFlBQUssU0FBTCxtQkFBVyxXQUFVO0FBQ3ZDLGVBQU87QUFBQTtBQUVYLFdBQUssYUFBYSxVQUFVO0FBQzVCLFVBQUksTUFBTTtBQUNOLGFBQUssa0JBQWtCO0FBQUEsYUFDcEI7QUFDSCxhQUFLLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxJQVEvQixZQUFZLE1BQWU7QUFDdkIsV0FBSyxRQUFRLFVBQVU7QUFBQTtBQUFBLElBTzNCLGVBQWUsTUFBZTtBQUMxQixXQUFLLE9BQU8sVUFBVTtBQUN0QixXQUFLLE9BQU8sU0FBUztBQUFBO0FBQUEsSUFPekIsYUFBYSxNQUFlO0FBQ3hCLFVBQUksQ0FBQyxLQUFLLGdCQUFnQjtBQUN0QixhQUFLLGlCQUFpQixLQUFLLFNBQVMsR0FBRyxLQUFLLE1BQU0sRUFBRSxPQUFPLEtBQUssS0FDM0QsR0FBRyxLQUFLLE1BQU0sRUFBRSxPQUFPLE1BQU0sS0FDN0IsR0FBRyxLQUFLLE1BQU0sRUFBRSxPQUFPLEtBQUs7QUFDakMsYUFBSyxlQUFlLEtBQUssTUFBTTtBQUFBO0FBR25DLFVBQUksTUFBTTtBQUdOLGFBQUssTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFNLE1BQU0sTUFBTTtBQUU5QyxlQUFLLGVBQWU7QUFBQTtBQUFBLGFBRXJCO0FBQ0gsYUFBSyxlQUFlO0FBQUE7QUFBQTtBQUFBLElBUXBCLGtCQUFrQjtBQXhSOUI7QUF5UlEsVUFBSSxLQUFLLEtBQUssaUJBQWlCLEdBQUc7QUFDOUIsYUFBSyxZQUFZLE9BQU8sTUFBTSxjQUFjLEtBQUssS0FBSztBQUN0RCxhQUFLLE1BQU0sU0FBUztBQUNwQixhQUFLLE1BQU0sS0FBSyxLQUFNLE1BQU0sTUFBTTtBQUM5QixlQUFLLEtBQUssaUJBQWlCLEtBQUssS0FBTSxNQUFLLGFBQWEsS0FBSyxTQUFTO0FBQ3RFLGNBQUksS0FBSyxLQUFLLGlCQUFpQjtBQUFHLGlCQUFLLEtBQUssaUJBQWlCO0FBQzdELGVBQUssWUFBWSxPQUFPLE1BQU0sY0FBYyxLQUFLLEtBQUs7QUFDdEQsaUJBQU8sS0FBSztBQUFBO0FBQUEsYUFFYjtBQUNILGFBQUssS0FBSyxpQkFBaUI7QUFDM0IsYUFBSyxhQUFhLEtBQUs7QUFDdkIsZ0JBQVEsSUFBSTtBQUVaLGFBQUssS0FBSyxPQUFPLDJCQUFhLE1BQU0sU0FBUyxJQUFJLFdBQUssU0FBTCxtQkFBVyxlQUEzQyxtQkFBdUQ7QUFDeEUsWUFBSSxDQUFDLEtBQUssVUFBVTtBQUNoQixlQUFLLGlCQUFpQjtBQUN0QixlQUFLLFlBQVk7QUFBQTtBQUVyQixhQUFLLFlBQVk7QUFBQTtBQUFBO0FBQUEsSUFPakIsY0FBYztBQUNsQixXQUFLLE9BQU8sT0FBTyx1QkFBdUIsS0FBSyxLQUFLO0FBQUE7QUFBQSxJQVdoRCxVQUFVO0FBL1R0QjtBQWdVUSxVQUFJLFdBQUssU0FBTCxtQkFBVyxnQkFBZ0I7QUFDM0IsYUFBSyxLQUFLLGtCQUFrQixxQkFBYSxNQUFNLFVBQVUsSUFBSSxxQkFDeEQ7QUFDTCxhQUFLLGFBQWEsS0FBSyxLQUFLLGlCQUFpQixNQUFPLEtBQUs7QUFDekQsYUFBSztBQUlMLGFBQUssV0FBVyxVQUFVO0FBQzFCLGFBQUssV0FBVyxRQUFRO0FBQ3hCLGFBQUssV0FBVyxJQUFJO0FBQ3BCLFlBQUksQ0FBQyxLQUFLO0FBQ04sZUFBSyxnQkFBZ0IsS0FBSyxTQUFTLEdBQy9CLEtBQUssWUFDTCxFQUFFLEdBQUcsS0FBSyxPQUFPLEtBQ2pCLEtBQ0YsR0FDRSxLQUFLLFlBQ0w7QUFBQSxZQUNJLEdBQUc7QUFBQSxZQUNILE9BQU87QUFBQSxhQUVYLEtBQ0EsTUFDQTtBQUdSLGFBQUssY0FBYztBQUFBO0FBQUE7QUFBQSxJQU8zQixhQUFhO0FBQ1QsV0FBSyxhQUFhLFVBQVU7QUFDNUIsV0FBSyxLQUFLLFlBQVk7QUFDdEIsV0FBSyxLQUFLLE9BQU87QUFDakIsV0FBSyxTQUFTO0FBQ2QsV0FBSyxlQUFlO0FBQUE7QUFBQSxJQUdsQixVQUFVO0FBQUE7QUFDWixxQkFBSyxNQUFNLFVBQVUsWUFBSSxPQUFPO0FBRWhDLFlBQUksQ0FBQyxLQUFLO0FBQVU7QUFFcEIsWUFBSSxLQUFLLFNBQVM7QUFDZCxjQUFJLEtBQUssTUFBTTtBQUNYLGlCQUFLLFVBQVUsS0FBSztBQUFBO0FBR3hCO0FBQUE7QUFHSixZQUFJLEtBQUssTUFBTTtBQUVYLGNBQUksS0FBSyxVQUFVO0FBQ2YsZ0JBQUkscUJBQWEsTUFBTSxhQUFhLElBQUksS0FBSyxLQUFLLFFBQVEsSUFBSTtBQUMxRCwyQkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNLGtCQUFrQjtBQUFBLGdCQUN2QyxNQUFNO0FBQUEsa0JBQ0YsS0FBSyxLQUFLO0FBQUEsa0JBQ1YsTUFBTSxNQUFNO0FBQ1IseUJBQUssS0FBSztBQUNWLHlCQUFLO0FBQ0wsaUNBQUssTUFBTSxVQUFVLFlBQUksT0FBTztBQUNoQyx5QkFBSyxNQUFNLFVBQVU7QUFDckIseUJBQUssTUFBTSxLQUFLLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFJNUI7QUFDSCxzQkFBUSxJQUFJO0FBQ1osbUJBQUssZ0JBQWdCO0FBQ3JCLDJCQUFLLEtBQUssU0FBUztBQUFBLGdCQUNmLE1BQU07QUFBQSxnQkFDTixNQUFNLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFHcEI7QUFBQTtBQUdKLGNBQUksS0FBSyxLQUFLLFdBQVc7QUFDckIsZ0JBQUksS0FBSyxLQUFLLGdCQUFnQjtBQUMxQixtQkFBSyxZQUFZO0FBQ2pCLHNCQUFRLElBQUk7QUFDWiwyQkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNLGFBQWE7QUFBQSxnQkFDbEMsTUFBTTtBQUFBLGtCQUNGLE1BQU0sTUFBTTtBQUNSLHlCQUFLLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFJN0IsbUJBQUssWUFBWSxtQkFBbUIsS0FBSyxLQUFLO0FBQzlDO0FBQUEsbUJBQ0c7QUFDSCxzQkFBUSxJQUFJO0FBQ1osbUJBQUs7QUFBQTtBQUFBLGlCQUVOO0FBRUgsaUJBQUs7QUFBQTtBQUFBLGVBRU47QUFFSCxlQUFLLFlBQVk7QUFDakIsdUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTSxhQUFhO0FBQUEsWUFDbEMsTUFBTTtBQUFBLGNBQ0YsSUFBSSxLQUFLO0FBQUEsY0FDVCxNQUFNLE1BQU07QUFDUixxQkFBSyxPQUFPO0FBQUEsa0JBQ1IsSUFBSSxLQUFLO0FBQUEsa0JBQ1QsT0FBTztBQUFBLGtCQUNQLGdCQUFnQjtBQUFBLGtCQUNoQixXQUFXO0FBQUE7QUFFZixxQkFBSyxhQUFhLEtBQUs7QUFDdkIsb0NBQVksUUFBUSxLQUFLO0FBQ3pCLHFCQUFLO0FBQ0wscUJBQUssWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBV3JDLFNBQStFO0FBQzNFLFVBQUksQ0FBQyxLQUFLO0FBQVU7QUFDcEIsV0FBSyxXQUFXO0FBRWhCLFVBQUksY0FBYyxHQUNkLGdCQUFnQixHQUNoQixZQUFZLEtBQUssS0FBSztBQUUxQixhQUFPLElBQUksUUFBUSxDQUFDLFlBQVk7QUFDNUIsb0JBQVksS0FDUCxLQUFLO0FBQUEsVUFDRixLQUFLLFFBQVE7QUFBQSxVQUNiLE1BQTRCO0FBQUEsWUFDeEIsUUFBUSxDQUFDLEtBQUssS0FBSztBQUFBLFlBQ25CLE1BQU0sbUJBQVc7QUFBQTtBQUFBLFdBR3hCLEtBQ0csQ0FBQyxTQUtLO0FBQ0YsY0FBSSxJQUFJLEtBQUssS0FBSztBQUNsQixrQkFBUSxFQUFFLFNBQVMsV0FBVyxRQUFRLEVBQUUsUUFBUSxTQUFTO0FBQ3pELHdCQUFjLEVBQUU7QUFDaEIsbUNBQWlCLElBQUksV0FBVyxFQUFFO0FBQ2xDLDBCQUFnQixFQUFFO0FBRWxCLGVBQUssV0FBVztBQUNoQixlQUFLLFlBQVksV0FBVyxhQUFhO0FBRXpDLGVBQUssTUFBTSxVQUFVLEdBQUcsTUFBTSxNQUFNO0FBQ2hDLGlCQUFLLFlBQVk7QUFBQTtBQUFBLFdBSTVCLE1BQU0sTUFBTTtBQUNULGVBQUssV0FBVztBQUNoQixrQkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS3hCLFlBQVksV0FBVyxhQUFhLGdCQUFnQixHQUFHO0FBQ25ELG1CQUFLLE1BQU0sVUFBVSxZQUFJLE9BQU87QUFDaEMsV0FBSztBQUVMLFVBQUksV0FBVyxxQkFBYSxNQUFNLFNBQVMsSUFBSSxZQUMzQyxhQUFvQjtBQUFBLFFBQ2hCO0FBQUEsVUFDSSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUE7QUFBQTtBQUtyQixVQUFJLGVBQWU7QUFDZixtQkFBVyxLQUFLO0FBQUEsVUFDWixLQUFLLHFCQUFhLE1BQU0sWUFBWSxJQUFJLG1CQUFXO0FBQUEsVUFDbkQsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBO0FBQUE7QUFJakIsbUJBQUssWUFBWSxNQUFNLFVBQVUsaUJBQW9DO0FBQUEsUUFDakUsTUFBTSxLQUFLO0FBQUEsUUFDWCxNQUFNO0FBQUEsUUFDTixVQUFVLE1BQU07QUFBQTtBQUFBO0FBR3BCLFVBQUksaUJBQVMsVUFBVSxPQUFPLGlCQUFTLG9CQUFvQixJQUFJO0FBQzNELGdCQUFRLGVBQWU7QUFBQSxVQUNuQixLQUFLLFlBQVk7QUFBQSxVQUNqQixNQUFNLEVBQUUsUUFBUTtBQUFBO0FBR3BCLGdCQUFRLGVBQWU7QUFBQSxVQUNuQixLQUFLLFlBQVk7QUFBQSxVQUNqQixNQUFNLEVBQUUsUUFBUTtBQUFBO0FBR3BCLGdCQUFRLGVBQWU7QUFBQSxVQUNuQixLQUFLLFlBQVk7QUFBQSxVQUNqQixNQUFNLEVBQUUsTUFBTTtBQUFBO0FBRWxCLGdCQUFRLGVBQWU7QUFBQSxVQUNuQixLQUFLLFlBQVk7QUFBQSxVQUNqQixNQUFNLEVBQUUsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSzFCLE1BQU07QUFDRixtQkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNLFVBQVU7QUFBQSxRQUMvQixNQUFvQjtBQUFBLFVBQ2hCLElBQUk7QUFBQSxVQUNKLE1BQU0sRUFBRSxRQUFRLEtBQUs7QUFBQSxVQUNyQixNQUFNLENBQUMsTUFBcUI7QUFDeEIsaUJBQUssU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFNOUIsU0FBUyxHQUFrQjtBQUN2QixXQUFLLFNBQVMsSUFBSSxLQUFLLFNBQVMsWUFBWSxFQUFFLEtBQUs7QUFDbkQsV0FBSyxTQUFTLElBQUksS0FBSyxTQUFTLGlCQUFpQixFQUFFLEtBQUs7QUFDeEQsV0FBSyxhQUFhLEVBQUUsS0FBSyxjQUFjLE1BQU8sS0FBSztBQUVuRCxXQUFLLE9BQU8sS0FBSyxTQUFTLElBQUksS0FBSztBQUNuQyxXQUFLO0FBQ0wsbUJBQUssTUFBTSxVQUFVLFlBQUksT0FBTztBQUNoQyxXQUFLLFlBQVksbUJBQW1CLEtBQUssS0FBSztBQUM5QywwQkFBWSxhQUFhO0FBQ3pCLGNBQVEsZUFBZTtBQUFBLFFBQ25CLEtBQUssWUFBWTtBQUFBLFFBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFBQTtBQUFBLElBT1IsVUFBVSxNQUFlO0FBQUE7QUFoa0IzQztBQWlrQlEsWUFBSSxDQUFDLEtBQUssYUFBYSxLQUFLLGdCQUFnQjtBQUN4QztBQUFBO0FBR0osWUFBSSxDQUFDLEtBQUssWUFBYSxLQUFLLFlBQVksQ0FBQyxZQUFLLFNBQUwsbUJBQVcsV0FBVztBQUMzRCxrQkFBUSxJQUFJO0FBQ1osdUJBQUssS0FBSyxTQUFTLEVBQUUsTUFBTSxrQ0FBUyxNQUFNLE1BQU07QUFBQTtBQUNoRDtBQUFBO0FBRUoscUJBQUssTUFBTSxVQUFVLFlBQUksT0FBTztBQUNoQyxhQUFLLFdBQVc7QUFFaEIsb0JBQVksS0FDUCxLQUFLO0FBQUEsVUFDRixLQUFLLFFBQVE7QUFBQSxVQUNiLE1BQStCO0FBQUEsWUFDM0IsUUFBUSxDQUFDLEtBQUssS0FBSztBQUFBLFlBQ25CLE1BQU0sbUJBQVc7QUFBQSxZQUNqQixLQUFLLEtBQUs7QUFBQTtBQUFBLFdBR2pCLEtBQ0csQ0FBQyxNQUtLO0FBQ0YsZUFBSyxXQUFXO0FBQ2hCLDJCQUFTLFdBQVcsRUFBRTtBQUN0QixlQUFLLGVBQWUsRUFBRSxLQUFLO0FBQUEsV0FHbEMsTUFBTSxDQUFDLFNBQWlCO0FBQ3JCLGVBQUssV0FBVztBQUNoQixjQUFJLFNBQVMsa0JBQVUsT0FBTztBQUMxQixpQkFBSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFXckIsZUFDSSxHQU1BLE1BQWUsTUFDakI7QUFDRSxXQUFLLEtBQUssV0FBVztBQUNyQixjQUFRLGVBQWU7QUFBQSxRQUNuQixLQUFLLFlBQVk7QUFBQSxRQUNqQixNQUFNLEVBQUUsTUFBTTtBQUFBO0FBRWxCLDBCQUFZLGFBQWE7QUFDekIsV0FBSyxXQUFXO0FBQ2hCLFdBQUssZ0JBQWdCO0FBRXJCLGVBQVMsS0FBSyxTQUFTLGlCQUFpQixFQUFFO0FBRzFDLFlBQU0sYUFBb0I7QUFDMUIsVUFBSSxFQUFFLFNBQVM7QUFDWCxxQkFBSyxNQUFNLFVBQVUsWUFBSSxPQUFPO0FBQ2hDLGlDQUFpQixJQUFJLEtBQUssS0FBSyxXQUFXLEVBQUU7QUFDNUMsbUJBQVcsS0FBSztBQUFBLFVBQ1osS0FBSyxxQkFBYSxNQUFNLFNBQVMsSUFBSSxFQUFFO0FBQUEsVUFDdkMsT0FBTyxFQUFFO0FBQUEsVUFDVCxTQUFTO0FBQUE7QUFJYixZQUFJLE1BQU07QUFDVixpQkFBUyxJQUFJLEdBQUcsSUFBSSxTQUFTLEtBQUssU0FBUyxLQUFLLFFBQVEsS0FBSztBQUN6RCxjQUFJLFNBQVMsS0FBSyxTQUFTLEtBQUssR0FBRyxXQUFXLEVBQUUsU0FBUztBQUNyRCxxQkFBUyxLQUFLLFNBQVMsS0FBSyxHQUFHLFVBQVUsRUFBRTtBQUMzQyxrQkFBTTtBQUNOO0FBQUE7QUFBQTtBQUdSLFlBQUksQ0FBQyxLQUFLO0FBQ04sbUJBQVMsS0FBSyxTQUFTLEtBQUssS0FBSztBQUFBLFlBQzdCLFNBQVMsRUFBRTtBQUFBLFlBQ1gsUUFBUSxFQUFFO0FBQUE7QUFBQTtBQUFBLGFBR2Y7QUFDSCxZQUFJLENBQUMsS0FBSztBQUNOO0FBQUE7QUFFSixxQkFBSyxLQUFLLFNBQVMsRUFBRSxNQUFNLDhEQUFpQixNQUFNLE1BQU07QUFBQTtBQUN4RDtBQUFBO0FBSUosVUFBSSxFQUFFLGVBQWU7QUFDakIsbUJBQVcsS0FBSztBQUFBLFVBQ1osS0FBSyxxQkFBYSxNQUFNLFlBQVksSUFBSSxtQkFBVztBQUFBLFVBQ25ELE9BQU8sRUFBRTtBQUFBLFVBQ1QsU0FBUztBQUFBO0FBQUE7QUFJakIsVUFBSSxXQUFXLFFBQVE7QUFDbkIscUJBQUssWUFBWSxNQUFNLFVBQVUsaUJBQW9DO0FBQUEsVUFDakUsTUFBTSxLQUFLO0FBQUEsVUFDWCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLbEIsY0FBYztBQXZyQmxCO0FBd3JCUSxXQUFLLE1BQU0sU0FBUztBQUNwQixXQUFLLE1BQU0sU0FBUztBQUNwQixpQkFBSyxzQkFBTCxtQkFBd0I7QUFDeEIsaUJBQUssbUJBQUwsbUJBQXFCO0FBQ3JCLFdBQUssb0JBQW9CO0FBQ3pCLFdBQUssaUJBQWlCO0FBQUE7QUFBQTtBQW5xQmxCO0FBQUEsSUFEUCxhQUFLO0FBQUEsS0FDRSxBQUhaLGVBR1k7QUFHQTtBQUFBLElBRFAsYUFBSztBQUFBLEtBQ0UsQUFOWixlQU1ZO0FBR0E7QUFBQSxJQURQLGFBQUs7QUFBQSxLQUNFLEFBVFosZUFTWTtBQUtBO0FBQUEsSUFEUCxhQUFLO0FBQUEsS0FDRSxBQWRaLGVBY1k7QUFHQTtBQUFBLElBRFAsYUFBSztBQUFBLEtBQ0UsQUFqQlosZUFpQlk7QUFLQTtBQUFBLElBRFAsYUFBSztBQUFBLEtBQ0UsQUF0QlosZUFzQlk7QUFHQTtBQUFBLElBRFAsYUFBSztBQUFBLEtBQ0UsQUF6QlosZUF5Qlk7QUFHQTtBQUFBLElBRFAsYUFBSztBQUFBLEtBQ0UsQUE1QlosZUE0Qlk7QUF3RFI7QUFBQSxJQURDLGFBQUssUUFBUSxVQUFVO0FBQUEsS0FDeEIsQUFwRkosZUFvRkk7QUFvTlE7QUFBQSxJQURQLGFBQUssUUFBUSxVQUFVO0FBQUEsS0FDaEIsQUF4U1osZUF3U1k7OztBQ3hSWixnQ0FBc0MsYUFBSyxXQUFXO0FBQUEsSUFBdEQsY0F2Q0E7QUF1Q0E7QUFJWSwwQkFBeUI7QUFHekIseUJBQTZCO0FBRTdCLHNCQUEwQjtBQUUxQix3QkFBNEI7QUFFNUIscUJBQW9CO0FBRXBCLHVCQUFzQjtBQUV0QixzQkFBcUI7QUFFckIsdUJBQXNCO0FBRXRCLDhCQUE2QjtBQUc3Qix5QkFBMEI7QUFFMUIsd0JBQXlCO0FBR3pCLDZCQUE4QjtBQUU5Qix5QkFBMEI7QUFFMUIsNEJBQTZCO0FBRTdCLDBCQUEyQjtBQUUzQixxQkFBeUI7QUFFekIsdUJBQXNCO0FBRXRCLHdCQUF1QjtBQUl2Qiw2QkFBK0I7QUFFL0IsNkJBQStCO0FBRS9CLHFCQUF5QjtBQUV6Qix3QkFBNEI7QUFHNUIsdUJBQXdCO0FBRXhCLHFCQUFzQjtBQUV0Qix5QkFBMEI7QUFFMUIsNEJBQTZCO0FBSTdCLG9CQUFtQjtBQUluQixxQkFBc0I7QUFJdEIsbUJBQWtCO0FBRWxCLG1CQUFrQjtBQUVsQixtQkFBa0I7QUFFbEIsbUJBQWtCO0FBRWxCLG1CQUFrQjtBQUVsQixtQkFBa0I7QUFFbEIsbUJBQWtCO0FBRWxCLG1CQUFrQjtBQUVsQixtQkFBa0I7QUFHbEIsc0JBQTZCO0FBR3JDLHFCQUFtQjtBQUluQixnQ0FBcUI7QUFDYixzQkFBb0I7QUFtR3BCLHVCQUF5QjtBQWN6Qix3QkFBYSxDQUFDLEdBQUcsR0FBRyxHQUFHO0FBQ3ZCLHNCQUFvQjtBQStQcEIsd0JBQWE7QUFrR3JCLHNCQUlJLEVBQUUsTUFBTSxJQUFJLGVBQWUsR0FBRyxVQUFVO0FBOE5wQywyQkFBeUI7QUFFakMsNEJBQXlCO0FBdXVCakIsOEJBQWlDO0FBQUE7QUFBQSxJQTU1Q3pDLFdBQVc7QUFDUCxnQkFBUyxPQUFPO0FBQ2hCO0FBQUEsUUFFSTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUlBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDRixRQUFRLENBQUMsTUFBTTtBQUNiLFlBQUksRUFBRSxTQUFTO0FBQVEsZUFBSyxPQUFPLGdCQUFnQjtBQUFBO0FBR3ZELFdBQUssTUFBTSxVQUFVLEdBQUcsTUFBTSxNQUFNO0FBQ2hDLGFBQUs7QUFBQTtBQUlULFVBQUksS0FBSyxPQUNMLE9BQU87QUFDWCxVQUFJLGlCQUFTLFVBQVUsUUFBUTtBQUMzQix5QkFBUyxVQUFVLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTTtBQUN4QyxjQUFJLEtBQUssS0FBSztBQUNWO0FBQUE7QUFBQTtBQUdSLFlBQUksUUFBUSxHQUFHO0FBQ1gsZUFBSztBQUFBO0FBQUE7QUFHYixVQUFJLENBQUMsaUJBQVMsVUFBVSxVQUFVLENBQUMsSUFBSTtBQUNuQyxxQkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNLFdBQVc7QUFBQSxVQUNoQyxNQUFNO0FBQUEsWUFDRixVQUFVO0FBQUEsY0FDTixLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUEsY0FDTCxLQUFLO0FBQUE7QUFBQSxZQUVULE1BQU0sTUFBTTtBQUNSLG1CQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFJZDtBQUNILGFBQUs7QUFBQTtBQUdULFdBQUs7QUFDTCxXQUFLLFVBQVUsVUFBVTtBQUN6QixXQUFLLGlCQUFpQjtBQUFBO0FBQUEsSUFHMUIsWUFBWTtBQUNSLFdBQUssTUFBTSxTQUFTLEtBQUs7QUFDekIsTUFBQyxLQUFLLFNBQVMsZUFBZSxlQUE4QixVQUFVO0FBRXRFLFdBQUssWUFBWSxVQUFVO0FBQzNCLFdBQUssWUFBWSxTQUFTO0FBQzFCLFdBQUssWUFBWSxVQUFVO0FBQzNCLFdBQUssVUFBVSxVQUFVO0FBRXpCLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLGFBQWEsS0FBSztBQUMvQyxhQUFLLFNBQVMsS0FBSyxLQUFLLFFBQVEsV0FBVyxHQUFHLGFBQWE7QUFDM0QsYUFBSyxTQUFTLEdBQUcsY0FBYztBQUFBO0FBR25DLFdBQUssU0FBUyxLQUFLLENBQUMsR0FBRyxNQUFNO0FBQ3pCLGVBQU8sRUFBRSxVQUFVLEVBQUU7QUFBQTtBQUd6QixXQUFLLE1BQU0sVUFBVSxHQUFHLE1BQU0sTUFBTTtBQUNoQyxxQkFBSyxZQUFZLE1BQU0sVUFBVTtBQUNqQyxhQUFLO0FBQ0wsYUFBSztBQUFBO0FBQUE7QUFBQSxJQVlMLFlBQVk7QUFDaEIsV0FBSyxNQUFNLEdBQUcsS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLO0FBQ2hELFdBQUs7QUFBQTtBQUFBLElBR0QsaUJBQWlCO0FBQ3JCLFdBQUssTUFBTSxNQUFNLE1BQU0sS0FBSztBQUM1QixXQUFLLE1BQU0sS0FBSyxNQUFPLE1BQU0sS0FBSztBQUFBO0FBQUEsSUFNOUIsa0JBQWtCO0FBQ3RCLFVBQUksS0FBSyxZQUFZLEtBQUssU0FBUztBQUMvQjtBQUFBO0FBRUosV0FBSztBQUNMLFdBQUssVUFBVSxVQUFVO0FBQ3pCLFdBQUs7QUFBQTtBQUFBLElBR1QsZ0JBQWdCO0FBQ1osV0FBSyxVQUFVLFVBQVU7QUFDekIsV0FBSztBQUNMLFdBQUssV0FBVztBQUFBO0FBQUEsSUFHWixrQkFBa0I7QUE3UTlCO0FBOFFRLFVBQUksWUFBWSxPQUNaLE1BQ0E7QUFDSixlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssU0FBUyxRQUFRLEtBQUs7QUFDM0MsWUFBSSxLQUFLLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxTQUFTLEdBQUcsS0FBSyxXQUFXO0FBQzNELHNCQUFZO0FBQ1o7QUFBQSxlQUNHO0FBQ0gsY0FBSSxZQUFLLFNBQVMsR0FBRyxTQUFqQixtQkFBdUIsY0FBYSxZQUFLLFNBQVMsR0FBRyxTQUFqQixtQkFBdUIsaUJBQWdCO0FBQzNFLG1CQUFPLEtBQUssU0FBUztBQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUtaLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxTQUFTLFFBQVEsS0FBSztBQUMzQyxZQUFJLENBQUMsS0FBSyxTQUFTLEdBQUcsTUFBTTtBQUN4Qix1QkFBYSxLQUFLLFNBQVM7QUFDM0I7QUFBQTtBQUFBO0FBSVIsVUFBSSxDQUFDLGNBQWMsS0FBSyxXQUFXLFFBQVEsS0FBSyxJQUFJO0FBQ2hELGFBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxRQUFRLElBQUk7QUFDbkQsZ0JBQVEsSUFBSSxLQUFLO0FBQUE7QUFHckIsV0FBSyxXQUFXO0FBQ2hCLFVBQUksTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHO0FBQ3JCLFVBQUksV0FBVztBQUNYLGNBQU0sS0FBSyxtQkFBbUIsS0FBSztBQUFBLGFBQ2hDO0FBQ0gsWUFBSSxDQUFDLE1BQU07QUFDUCxpQkFBTztBQUFBO0FBRVgsWUFBSSxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssV0FBVztBQUVwRSxnQkFBUTtBQUFBLGVBQ0M7QUFDRCxrQkFBTSxLQUFLLG1CQUFtQixLQUFLO0FBQ25DLGdCQUFJLEtBQUs7QUFDVCxnQkFBSSxLQUFLO0FBQ1Q7QUFBQSxlQUNDO0FBQ0Qsa0JBQU0sS0FBSyxtQkFBbUIsS0FBSztBQUNuQyxnQkFBSSxLQUFLO0FBQ1QsZ0JBQUksS0FBSztBQUNUO0FBQUEsZUFDQztBQUNELGtCQUFNLEtBQUssbUJBQW1CLEtBQUs7QUFDbkMsZ0JBQUksS0FBSztBQUNULGdCQUFJLEtBQUs7QUFDVDtBQUFBLGVBQ0M7QUFDRCxrQkFBTSxLQUFLLG1CQUFtQixXQUFXO0FBQ3pDLGdCQUFJLEtBQUs7QUFDVCxnQkFBSSxLQUFLO0FBQ1Q7QUFBQTtBQUFBO0FBSVosV0FBSyxVQUFVLElBQUksSUFBSSxHQUFHLElBQUk7QUFBQTtBQUFBLElBRzFCLG1CQUFtQixNQUFNO0FBQzdCLGFBQU8sS0FBSyxnQkFBZ0IsY0FDdkIsS0FBSyxPQUFlLGNBQWMsSUFBSSxLQUFLLE1BQU0sS0FBSyxHQUFHLEtBQUs7QUFBQTtBQUFBLElBTy9ELG9CQUFvQjtBQUN4QixXQUFLLGNBQWMsS0FBSyxTQUFTLEdBQUcsS0FBSyxXQUFXLEVBQUUsVUFBVSxPQUFPLEtBQUssTUFBTSxHQUM5RSxLQUFLLFdBQ0wsRUFBRSxVQUFVLEtBQ1o7QUFFSixXQUFLLFlBQVksS0FBSyxNQUFNO0FBQUE7QUFBQSxJQVFoQyxtQkFBbUI7QUFDZixVQUFJO0FBQ0osZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFNBQVMsUUFBUSxJQUFJLEdBQUcsS0FBSztBQUNsRCxZQUFJLENBQUMsS0FBSyxTQUFTLEdBQUcsTUFBTTtBQUN4QixlQUFLLFNBQVMsR0FBRyxTQUFTO0FBQzFCO0FBQUEsZUFDRztBQUNILGNBQUksQ0FBQyxVQUFVO0FBQ1gsdUJBQVcsS0FBSyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVN6QyxtQkFBbUIsUUFBaUI7QUFDaEMsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFNBQVMsUUFBUSxJQUFJLEdBQUcsS0FBSztBQUNsRCxhQUFLLFNBQVMsR0FBRyxnQkFBZ0I7QUFBQTtBQUdyQyxlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssU0FBUyxRQUFRLElBQUksR0FBRyxLQUFLO0FBQ2xELGNBQU0sT0FBTyxLQUFLLFNBQVMsR0FBRztBQUM5QixZQUFJLE1BQU07QUFDTixjQUFJLEtBQUssTUFBTSxRQUFRO0FBQ25CLGlCQUFLLFNBQVMsR0FBRyxTQUFTO0FBQzFCLGlCQUFLLFNBQVMsR0FBRyxpQkFBaUI7QUFDbEMsaUJBQUssU0FBUyxHQUFHLGdCQUFnQjtBQUNqQztBQUFBLHFCQUNPLENBQUMsUUFBUTtBQUNoQixnQkFBSSxLQUFLLGFBQWEsS0FBSyxnQkFBZ0I7QUFDdkMsbUJBQUssU0FBUyxHQUFHLFNBQVM7QUFDMUIsbUJBQUssU0FBUyxHQUFHLGlCQUFpQjtBQUNsQyxtQkFBSyxTQUFTLEdBQUcsZ0JBQWdCO0FBQ2pDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNaEIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFNBQVMsUUFBUSxJQUFJLEdBQUcsS0FBSztBQUNsRCxjQUFNLE9BQU8sS0FBSyxTQUFTLEdBQUc7QUFDOUIsWUFBSSxNQUFNO0FBQ04sY0FBSSxLQUFLLGFBQWEsQ0FBQyxLQUFLLGdCQUFnQjtBQUN4QyxpQkFBSyxTQUFTLEdBQUcsU0FBUztBQUMxQixpQkFBSyxTQUFTLEdBQUcsaUJBQWlCO0FBQ2xDLGlCQUFLLFNBQVMsR0FBRyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBT2pELGFBQW1CO0FBQ2YsbUJBQUssbUJBQ0EsTUFBTSxrQkFBVSxNQUNoQixJQUFJLFdBQVcsQ0FBQyxNQUFNO0FBQ25CLGFBQUssWUFBWSxRQUFRO0FBR3pCLGFBQUssUUFBUSxRQUNSLEtBQUksaUJBQVMsWUFBWSxXQUFXLE1BQU0sd0JBQXdCO0FBQUEsU0FFMUUsSUFBSSxRQUFRLENBQUMsTUFBTTtBQUNoQixhQUFLLFNBQVMsUUFBUTtBQUFBLFNBRXpCLElBQUksVUFBVSxDQUFDLE1BQU07QUFDbEIsWUFBSTtBQUFHLGVBQUssV0FBVyxPQUFPO0FBQUEsU0FFakMsSUFBSSxhQUFhLENBQUMsTUFBTTtBQUNyQixZQUFJLEdBQUc7QUFDSCxlQUFLLE9BQU8sVUFBVTtBQUN0QixVQUNJLEtBQUssT0FBTyxlQUFlLFdBQzdCLFNBQVMsV0FBVztBQUFBLGVBRW5CO0FBQ0gsZUFBSyxPQUFPLFVBQVU7QUFBQTtBQUFBLFNBRzdCLElBQUksZUFBZSxDQUFDLE1BQU07QUFDdkIsWUFBSSxDQUFDLGlCQUFTO0FBQVc7QUFFekIsWUFBSSxLQUFLLE9BQU8sU0FBUztBQUNyQixjQUFJLE1BQU0sS0FBSyxPQUNWLGVBQWUsT0FDZixlQUFlO0FBRXBCLGNBQUksUUFBUSxJQUFJLHFCQUFhLE1BQU0sT0FBTyxJQUFJLGlCQUFTLFdBQVc7QUFDbEUsY0FBSSxRQUFRO0FBQUcsb0JBQVE7QUFFdkIsY0FBSSxRQUFRLE1BQU07QUFDbEIsVUFDSSxLQUFLLE9BQU8sZUFBZSxPQUFPLGVBQWUsVUFDbkQsVUFBVSxDQUFDO0FBQUE7QUFBQSxTQUdwQixJQUFJLG1CQUFtQixDQUFDLE1BQU07QUFDM0IsYUFBSyxNQUFNLE1BQU0sTUFBTSxLQUFLO0FBRTVCLFlBQUksS0FBSyxPQUFPLFNBQVM7QUFDckIsZUFBSyxNQUFNLEtBQUssSUFBSSxLQUFNLE1BQU0sS0FBSztBQUFBO0FBQUEsU0FHNUMsSUFBSSxZQUFZLENBQUMsTUFBTTtBQUNwQixZQUFJLFdBQVcsSUFBSSxtQkFBVztBQUU5QixhQUFLLE1BQU0sVUFBVSxHQUFHLE1BQU0sTUFBTTtBQUNoQyx1QkFBSyxZQUFZLE1BQU0sVUFBVSxnQkFBZ0I7QUFBQSxZQUM3QyxXQUFXO0FBQUEsWUFDWCxRQUFRO0FBQUE7QUFBQTtBQUloQixZQUFJLFlBQVksR0FBRztBQUNmLHFCQUFXO0FBQ1gsZUFBSyxlQUFlLE9BQU87QUFDM0IsZUFBSyxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU07QUFDaEMsaUJBQUssZUFBZSxlQUFlO0FBQUE7QUFBQSxlQUVwQztBQUNILGVBQUssZUFBZSxPQUFPO0FBQzNCLGVBQUssTUFBTSxVQUFVLEdBQUcsTUFBTSxNQUFNO0FBQ2hDLGlCQUFLLGVBQWUsZUFBZTtBQUFBO0FBQUE7QUFHM0MsWUFBSSxLQUFLLFlBQVksZUFBZTtBQUNoQyxVQUFDLEtBQUssWUFBWSxlQUFlLE9BQXNCLFFBQVEsTUFBTTtBQUFBO0FBR2pGLFdBQUssYUFBYSxVQUFVO0FBQzVCLFdBQUs7QUFBQTtBQUFBLElBTUQsa0JBQWtCO0FBQ3RCLFVBQUksQ0FBQyxpQkFBUztBQUFXO0FBQ3pCLFlBQU0sTUFBTSxxQkFBYSxNQUFNLE9BQU8sSUFBSSxpQkFBUztBQUNuRCxVQUFJLGlCQUFTLGNBQWMsSUFBSSxvQkFBb0IsR0FBRztBQUNsRCx5QkFBUyxjQUFjO0FBQUEsYUFDcEI7QUFDSCx5QkFBUyxlQUFlLElBQUk7QUFBQTtBQUVoQyx1QkFBUyxrQkFBa0IsbUJBQVc7QUFBQTtBQUFBLElBSzFDLFFBQVEsR0FBZTtBQUNuQixjQUFRLElBQUksRUFBRSxPQUFPO0FBRXJCLFVBQUksaUJBQVMsVUFBVSxPQUFPLGlCQUFTLG9CQUFvQixJQUFJO0FBQzNELGFBQUs7QUFDTCxZQUFJLENBQUUsTUFBSyxhQUFhLElBQUk7QUFDeEIsa0JBQVEsZUFBZTtBQUFBLFlBQ25CLEtBQUssWUFBWTtBQUFBLFlBQ2pCLE1BQU0sRUFBRSxRQUFRO0FBQUE7QUFHcEIsa0JBQVEsZUFBZTtBQUFBLFlBQ25CLEtBQUssWUFBWTtBQUFBLFlBQ2pCLE1BQU0sRUFBRSxRQUFRO0FBQUE7QUFFcEIsa0JBQVEsZUFBZTtBQUFBLFlBQ25CLEtBQUssWUFBWTtBQUFBLFlBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFFbEIsa0JBQVEsZUFBZTtBQUFBLFlBQ25CLEtBQUssWUFBWTtBQUFBLFlBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBSzFCLGNBQVEsRUFBRSxPQUFPO0FBQUEsYUFDUjtBQUNELGVBQUssYUFBYSxVQUFVO0FBQzVCO0FBQUEsYUFDQztBQUNELHVCQUFLLEtBQUssS0FBSyxZQUFJLE1BQU07QUFDekI7QUFHQTtBQUFBLGFBQ0M7QUFDRCxlQUFLO0FBQ0w7QUFBQSxhQUNDO0FBQ0QsdUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTTtBQUN6QixlQUFLO0FBQ0w7QUFBQSxhQUNDO0FBQ0QsdUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTTtBQUN6QjtBQUFBLGFBQ0M7QUFDRCx1QkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNO0FBQ3pCO0FBQUEsYUFDQztBQUNELHVCQUFLLEtBQUssS0FBSyxZQUFJLE1BQU0sVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJO0FBQ2pEO0FBQUEsYUFDQztBQUNELHVCQUFLLEtBQUssS0FBSyxZQUFJLE1BQU0sVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJO0FBQ2pEO0FBQUEsYUFDQztBQUNELHVCQUFLLEtBQUssS0FBSyxZQUFJLE1BQU0sVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJO0FBQ2pEO0FBQUEsYUFDQztBQUFBLGFBQ0E7QUFDRCx1QkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSTtBQUNqRDtBQUFBLGFBQ0M7QUFDRCx1QkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNO0FBQ3pCO0FBQUEsYUFDQztBQUNELGVBQUs7QUFDTDtBQUFBLGFBQ0M7QUFDRDtBQUFBLGFBQ0M7QUFDRCxjQUFJLENBQUMsS0FBSztBQUFTLGlCQUFLLGtCQUFrQjtBQUMxQztBQUFBLGFBQ0M7QUFDRCxlQUFLLGtCQUFrQjtBQUN2QjtBQUFBLGFBQ0M7QUFDRCxlQUFLO0FBQ0w7QUFBQSxhQUNDO0FBQ0QsZUFBSztBQUNMO0FBQUEsYUFDQztBQUNELGVBQUs7QUFDTDtBQUFBLGFBQ0M7QUFDRCxlQUFLO0FBQ0w7QUFBQSxhQUNDO0FBQ0QsZUFBSztBQUNMO0FBQUE7QUFBQTtBQUFBLElBZ0JFLFVBQVU7QUFBQTtBQXRtQjVCO0FBdW1CUSxZQUFJLENBQUMsS0FBSyxVQUFVO0FBQ2hCO0FBQUE7QUFFSixhQUFLLFdBQVc7QUFDaEIsWUFBSSxLQUFLLFNBQVM7QUFFZCxjQUFJLFFBQWtCLElBQ2xCLGNBQWdDO0FBRXBDLG1CQUFTLElBQUksR0FBRyxJQUFJLEtBQUssU0FBUyxRQUFRLEtBQUs7QUFDM0MsZ0JBQ0ksWUFBSyxTQUFTLEdBQUcsU0FBakIsbUJBQXVCLGNBQ3ZCLENBQUMsWUFBSyxTQUFTLEdBQUcsU0FBakIsbUJBQXVCLG1CQUN4QixZQUFLLFNBQVMsR0FBRyxTQUFqQixtQkFBdUIsV0FDekI7QUFDRSxvQkFBTSxLQUFLLEtBQUssU0FBUyxHQUFHLEtBQUs7QUFDakMsMEJBQVksS0FBSyxLQUFLLFNBQVM7QUFBQTtBQUFBO0FBR3ZDLGNBQUksQ0FBQyxNQUFNLFFBQVE7QUFDZix5QkFBSyxLQUFLLFNBQVMsRUFBRSxNQUFNLHdDQUFVLE1BQU0sTUFBTTtBQUFBO0FBQ2pELGlCQUFLLFdBQVc7QUFDaEI7QUFBQTtBQUVKLHNCQUFZLEtBQ1AsS0FBSztBQUFBLFlBQ0YsS0FBSyxRQUFRO0FBQUEsWUFDYixNQUErQjtBQUFBLGNBQzNCLFFBQVE7QUFBQSxjQUNSLE1BQU0sbUJBQVc7QUFBQSxjQUNqQixLQUFLLFlBQVksR0FBRztBQUFBO0FBQUEsYUFHM0IsS0FDRyxDQUFDLE1BT0s7QUFDRixpQkFBSyxXQUFXO0FBQ2hCLDZCQUFTLFdBQVcsRUFBRTtBQUN0QixjQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sTUFBTTtBQUN4QiwwQkFBWSxHQUFHLGVBQWUsTUFBTTtBQUFBO0FBQUEsYUFJL0MsTUFBTSxNQUFNO0FBQ1QsaUJBQUssV0FBVztBQUFBO0FBQUEsZUFFckI7QUFDSCxjQUFJLFVBQVUsR0FDVixPQUE4QyxJQUM5QyxRQUFrQixJQUNsQixjQUFnQztBQUVwQyxtQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFNBQVMsUUFBUSxLQUFLO0FBQzNDLGdCQUFJLFlBQUssU0FBUyxHQUFHLFNBQWpCLG1CQUF1QixjQUFhLENBQUMsWUFBSyxTQUFTLEdBQUcsU0FBakIsbUJBQXVCLGlCQUFnQjtBQUM1RSxvQkFBTSxLQUFLLEtBQUssU0FBUyxHQUFHLEtBQUs7QUFDakMsMEJBQVksS0FBSyxLQUFLLFNBQVM7QUFBQTtBQUFBO0FBSXZDLGNBQUksQ0FBQyxNQUFNLFFBQVE7QUFDZix5QkFBSyxLQUFLLFNBQVMsRUFBRSxNQUFNLG9EQUFZLE1BQU0sTUFBTTtBQUFBO0FBQ25ELGlCQUFLLFdBQVc7QUFDaEI7QUFBQTtBQUdKLHNCQUFZLEtBQ1AsS0FBSztBQUFBLFlBQ0YsS0FBSyxRQUFRO0FBQUEsWUFDYixNQUE0QjtBQUFBLGNBQ3hCLFFBQVE7QUFBQSxjQUNSLE1BQU0sbUJBQVc7QUFBQTtBQUFBLGFBR3hCLEtBQ0csQ0FBQyxNQVNLO0FBQ0YsaUJBQUssV0FBVztBQUNoQixjQUFFLEtBQUssUUFBUSxDQUFDLFNBQVM7QUFDckIseUJBQVcsS0FBSztBQUNoQix1Q0FBaUIsSUFBSSxLQUFLLFNBQVMsS0FBSztBQUV4Qyx1QkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNsQyxvQkFBSSxLQUFLLEdBQUcsV0FBVyxLQUFLLFNBQVM7QUFDakMsdUJBQUssR0FBRyxVQUFVLEtBQUs7QUFDdkI7QUFBQTtBQUFBO0FBSVIsbUJBQUssS0FBSztBQUFBLGdCQUNOLFNBQVMsS0FBSztBQUFBLGdCQUNkLFFBQVEsS0FBSztBQUFBO0FBQUE7QUFJckIseUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTSxnQkFBZ0I7QUFBQSxjQUNyQyxNQUFNO0FBQUEsZ0JBQ0YsTUFBTTtBQUFBLGdCQUNOLE1BQU07QUFBQSxnQkFDTjtBQUFBLGdCQUNBLE1BQU0sQ0FBQyxXQUFvQjtBQUN2QixzQkFBSSxNQUFNO0FBQ1Ysc0JBQUksUUFBUTtBQUNSLDBCQUFNO0FBQUE7QUFFVixvQkFBRSxLQUFLLFFBQVEsQ0FBQyxNQUFNLE1BQU07QUFDeEIsd0JBQUk7QUFBUSwrQ0FBaUIsSUFBSSxLQUFLLFNBQVMsS0FBSztBQUNwRCxnQ0FBWSxHQUFHLFlBQ1gsS0FBSyxTQUNMLEtBQUssU0FBUyxLQUNkLEtBQUssZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYXJELElBQUksV0FBb0IsT0FBTyxHQUFrQjtBQS91QjdEO0FBZ3ZCUSxVQUFJLFFBQVE7QUFDWixlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssU0FBUyxRQUFRLElBQUksR0FBRyxLQUFLO0FBQ2xELFlBQUksQ0FBQyxrQkFBSyxTQUFTLE9BQWQsbUJBQWtCLFNBQWxCLG1CQUF3QixZQUFXO0FBQ3BDLGNBQUksVUFBVTtBQUNWLGlCQUFLLFNBQVMsR0FBRyxTQUFTO0FBQUEsaUJBQ3ZCO0FBQ0gsaUJBQUssU0FBUyxHQUFHO0FBQUE7QUFHckIsa0JBQVE7QUFDUjtBQUFBO0FBQUE7QUFHUixVQUFJLE9BQU87QUFDUCxxQkFBSyxLQUFLLFNBQVMsRUFBRSxNQUFNLG9EQUFZLE1BQU0sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSTNELGlCQUFpQjtBQUNiLGNBQVEsSUFBSSxLQUFLO0FBQ2pCLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxTQUFTLFFBQVEsSUFBSSxHQUFHLEtBQUs7QUFDbEQsWUFBSSxLQUFLLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxTQUFTLEdBQUcsS0FBSyxXQUFXO0FBQzNELGlCQUFPLEtBQUssU0FBUyxHQUFHO0FBQUE7QUFBQTtBQUdoQyxhQUFPO0FBQUE7QUFBQSxJQU1ILFdBQVc7QUFDZixVQUFJLENBQUMsS0FBSyxVQUFVO0FBQ2hCO0FBQUE7QUFFSixXQUFLLFdBQVc7QUFDaEIsa0JBQVksS0FDUCxLQUFLO0FBQUEsUUFDRixLQUFLLFFBQVE7QUFBQSxTQUVoQixLQUFLLENBQUMsTUFBd0I7QUFDM0IscUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTSxVQUFVLEVBQUUsTUFBTTtBQUMzQyxhQUFLLFdBQVc7QUFBQSxTQUVuQixNQUFNLE1BQU07QUFDVCxhQUFLLFdBQVc7QUFBQTtBQUFBO0FBQUEsSUFRcEIsV0FBVyxPQUFPLE1BQU07QUFDNUIsVUFBSSxDQUFDLEtBQUssVUFBVTtBQUNoQjtBQUFBO0FBRUosV0FBSyxXQUFXO0FBQ2hCLGtCQUFZLEtBQ1AsS0FBSztBQUFBLFFBQ0YsS0FBSyxRQUFRO0FBQUEsU0FFaEIsS0FBSyxDQUFDLE1BQXNCO0FBQ3pCLGFBQUssV0FBVztBQUNoQixxQkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNLGFBQWEsRUFBRSxNQUFNLEVBQUUsWUFBWSxHQUFHO0FBQUEsU0FFbEUsTUFBTSxNQUFNO0FBQ1QsYUFBSyxXQUFXO0FBQUE7QUFBQTtBQUFBLElBT3BCLGNBQWM7QUFDbEIsbUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTTtBQUFBO0FBQUEsSUFXckIsY0FBYztBQXQwQjFCO0FBeTBCUSxVQUFJLEtBQUs7QUFBUztBQUVsQixVQUFJLE1BQU0sS0FBSyxTQUFTLGVBQWUsY0FDbkMsSUFBSSxxQkFBYSxNQUFNLFNBQVMsSUFBSSxpQkFBUyxhQUFhLElBQzFELFFBQ0EsY0FBc0IsR0FDdEIscUJBQTZCLEdBQzdCLFdBQVcsR0FDWCxXQUFXLEdBQ1gsV0FBVztBQUNmLFVBQUksQ0FBQztBQUFHLGVBQU8sUUFBUSxJQUFJO0FBQzNCLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQ3hCLFlBQUksT0FBTyxJQUFJLGVBQWUsVUFBVTtBQUV4QyxZQUFJLEVBQUUsVUFBVSxJQUFJO0FBQ2hCLHFCQUFXLGdDQUFpQixPQUFPLEVBQUUsVUFBVSxHQUFHLE1BQU0sUUFBN0MsbUJBQWtELFVBQVM7QUFDdEUscUJBQVcsRUFBRSxVQUFVLEdBQUc7QUFFMUIsY0FBSSxZQUFZLFVBQVU7QUFDdEI7QUFBQTtBQUdKLFVBQUMsS0FBSyxlQUFlLFFBQXVCLE9BQU8sRUFBRSxVQUFVLEdBQUcsTUFBTTtBQUN4RSxVQUFDLEtBQUssZUFBZSxPQUFzQixPQUFPLEdBQUcsWUFBWTtBQUNqRSxVQUFDLEtBQUssZUFBZSxPQUFzQixRQUN2QyxLQUFNLFlBQVcsV0FBVyxJQUFJLElBQUksV0FBVztBQUVuRCxlQUFLLFVBQVU7QUFFZixZQUFFLFVBQVUsR0FBRyxNQUFNLEtBQUssUUFBUSxDQUFDLE1BQU07QUFDckMsZ0JBQUksRUFBRSxJQUFJLE9BQU8sbUJBQVcsUUFBUTtBQUNoQyxrQkFBSSxDQUFDLFFBQVE7QUFDVCx5QkFBUztBQUFBO0FBRWIsNkJBQWUsRUFBRSxRQUFRO0FBQUEsbUJBQ3RCO0FBQ0gsb0NBQXNCLEVBQUUsUUFBUTtBQUFBO0FBQUE7QUFBQSxlQUdyQztBQUNILGVBQUssVUFBVTtBQUFBO0FBQUE7QUFJdkIsVUFBSSxRQUFRO0FBQ1IsWUFBSSxVQUFVLElBQUksZUFBZSxhQUM3QixhQUFhLElBQUksZUFBZTtBQUNwQyxRQUFDLFFBQVEsZUFBZSxRQUF1QixPQUFPLE9BQU8sSUFBSTtBQUNqRSxRQUFDLFFBQVEsZUFBZSxTQUEyQixRQUFRLEdBQ3ZELGNBQWMsS0FBSyxNQUFNLGNBQWMsRUFBRTtBQUc3QyxZQUFJLEVBQUUsYUFBYTtBQUNmLFVBQUMsV0FBVyxlQUFlLFFBQXVCLE9BQU8sRUFBRSxZQUFZLElBQUk7QUFDM0UsVUFBQyxXQUFXLGVBQWUsU0FBMkIsUUFBUSxHQUMxRCxFQUFFLFlBQVksUUFDZCxxQkFDQSxLQUFLLE1BQU0scUJBQXFCLEVBQUU7QUFHdEMscUJBQVcsVUFBVTtBQUNyQixrQkFBUSxJQUFJO0FBQUEsZUFDVDtBQUNILGtCQUFRLElBQUk7QUFDWixxQkFBVyxVQUFVO0FBQUE7QUFBQTtBQUk3QixNQUFDLElBQUksZUFBZSxjQUE2QixPQUFPLGVBQ3BELGlCQUFTLGFBQWE7QUFHMUIsVUFBSSxDQUFDLEtBQUssZUFBZTtBQUNyQixZQUFJLFlBQVksRUFBRSxVQUFVLFFBQVE7QUFDaEMsZ0JBQU0sWUFBWSxFQUFFO0FBQ3BCLGVBQUssZ0JBQWdCO0FBQ3JCLGNBQUksWUFDSSxFQUFFLFlBQVksUUFDZCxxQkFDQSxLQUFLLE1BQU0scUJBQXFCLEVBQUUsYUFDdEMsU0FBUyxjQUFjLEtBQUssTUFBTSxjQUFjLEVBQUU7QUFFdEQsZUFBSyxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU07QUFDaEMseUJBQUssWUFBWSxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsV0FBVyxPQUFPO0FBQUE7QUFHeEUsY0FBSSxLQUFLLGdCQUFnQjtBQUNyQixpQkFBSyxnQkFBZ0I7QUFDckI7QUFBQTtBQUdKLGVBQUssaUJBQWlCO0FBRXRCLHVCQUFLLEtBQUssS0FBSyxZQUFJLE1BQU0sZ0JBQWdCO0FBQUEsWUFDckMsTUFBTTtBQUFBLGNBQ0YsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLGdCQUNGLFNBQVM7QUFBQSxnQkFDVCxNQUFNO0FBQUE7QUFBQSxjQUVWLE1BQU0sQ0FBQyxXQUFvQjtBQUN2QixxQkFBSyxpQkFBaUI7QUFDdEIsMEJBQVUsUUFBUSxDQUFDLE1BQU07QUFDckIsMkNBQWlCLGFBQWEsRUFBRSxNQUFNLElBQUksRUFBRTtBQUFBO0FBRWhELHFCQUFLLGdCQUFnQjtBQUNyQixpQ0FBUztBQUNULG9CQUFJLFVBQVM7QUFDYix3QkFBTyxLQUFLO0FBQUEsa0JBQ1IsS0FBSyxxQkFBYSxNQUFNLFlBQVksSUFBSSxtQkFBVztBQUFBLGtCQUNuRCxPQUFPLFNBQVUsVUFBUyxJQUFJO0FBQUEsa0JBQzlCLFNBQVM7QUFBQTtBQUViLG9CQUFJLEVBQUUsYUFBYTtBQUNmLDBCQUFPLEtBQUs7QUFBQSxvQkFDUixLQUFLLHFCQUFhLE1BQU0sWUFBWSxJQUFJLEVBQUUsWUFBWSxJQUFJO0FBQUEsb0JBQzFELE9BQU8sWUFBYSxVQUFTLElBQUk7QUFBQSxvQkFDakMsU0FBUztBQUFBO0FBQUE7QUFHakIscUJBQUssaUJBQWlCO0FBQUEsa0JBQ2xCLE1BQU0sSUFBSSxlQUFlO0FBQUEsa0JBQ3pCLE1BQU07QUFBQSxrQkFDTixVQUFVLE1BQU07QUFDWix5QkFBSztBQUFBO0FBQUE7QUFJYixvQkFBSSxDQUFDLFVBQVUsQ0FBRSxrQkFBUyxhQUFhLElBQUk7QUFDdkMsdUJBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNO0FBQzdCLDRCQUFRLGVBQWU7QUFBQSxzQkFDbkIsS0FBSyxZQUFZO0FBQUEsc0JBQ2pCLE1BQU0sRUFBRSxRQUFRO0FBQUE7QUFFcEIsNEJBQVEsZUFBZTtBQUFBLHNCQUNuQixLQUFLLFlBQVk7QUFBQSxzQkFDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSzlCLFlBQVksTUFBTTtBQUNkLHFCQUFLLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSTlCO0FBQ0gsZUFBSyxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU07QUFDaEMseUJBQUssWUFBWSxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsV0FBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVU1RSxrQkFBa0IsTUFBZTtBQUNyQyxVQUFJLEtBQUssS0FBSyxZQUFZLGVBQWU7QUFDekMsVUFBSSxNQUFNO0FBQ04sYUFBSztBQUNMLFdBQUcsUUFBUTtBQUNYLGFBQUssTUFBTSxHQUFHLElBQUksRUFBRSxPQUFPLFFBQVE7QUFDbkMsYUFBSyxZQUFZLGVBQWUsY0FBYyxTQUFTLEtBQUs7QUFDNUQsYUFBSyxZQUFZLFNBQVM7QUFDMUIsYUFBSyxZQUFZLFVBQVU7QUFDM0IsYUFBSyxTQUFTLFFBQVEsQ0FBQyxNQUFNO0FBQ3pCLGNBQUksRUFBRSxNQUFNO0FBQ1IsZ0JBQUkscUJBQWEsTUFBTSxhQUFhLElBQUksRUFBRSxLQUFLLFFBQVEsSUFBSTtBQUN2RCxnQkFBRSxTQUFTO0FBQ1gsZ0JBQUUsaUJBQWlCO0FBQ25CLGdCQUFFLGdCQUFnQjtBQUNsQixnQkFBRSxZQUFZO0FBQ2QsZ0JBQUUsZUFBZTtBQUFBO0FBQUE7QUFJekIsWUFBRSxXQUFXO0FBQUE7QUFBQSxhQUVkO0FBQ0gsYUFBSyxNQUFNLEdBQ1AsSUFDQSxFQUFFLE9BQU8sS0FDVCxLQUNBLE1BQ0EsS0FBSyxRQUFRLE9BQU8sTUFBTSxNQUFNO0FBQzVCLGVBQUssWUFBWSxTQUFTO0FBQzFCLGVBQUssWUFBWSxVQUFVO0FBQzNCLGVBQUssVUFBVSxTQUFTLEtBQUs7QUFBQTtBQUlyQyxhQUFLLFNBQVMsUUFBUSxDQUFDLE1BQU07QUFDekIsY0FBSSxFQUFFLE1BQU07QUFDUixjQUFFLFNBQVM7QUFDWCxnQkFBSSxFQUFFLEtBQUssSUFBSTtBQUNYLGtCQUFJLEVBQUUsS0FBSyxnQkFBZ0I7QUFDdkIsa0JBQUUsWUFBWTtBQUNkLGtCQUFFLGVBQWU7QUFBQTtBQUVyQixrQkFBSSxDQUFDLEVBQUUsS0FBSyxXQUFXO0FBQ25CLGtCQUFFO0FBQUE7QUFBQSxtQkFFSDtBQUNILGdCQUFFO0FBQUE7QUFBQTtBQUdWLFlBQUUsV0FBVztBQUNiLGNBQUksRUFBRSxNQUFNO0FBQ1IsZ0JBQUksRUFBRSxLQUFLLElBQUk7QUFDWCxnQkFBRSxpQkFBaUIsRUFBRSxLQUFLLGlCQUFpQixJQUFJO0FBQUE7QUFFbkQsY0FBRSxnQkFBZ0IsUUFBUSxFQUFFLEtBQUs7QUFBQSxpQkFDOUI7QUFDSCxjQUFFLGlCQUFpQjtBQUNuQixjQUFFLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFVMUIsaUJBQWlCLEtBQXdCO0FBQzdDLFdBQUssTUFBTSxLQUFLLEtBQU0sTUFBTSxNQUFNO0FBQzlCLFlBQUksSUFBSTtBQUFVLGNBQUk7QUFBQTtBQUcxQixVQUFJLEtBQUssUUFBUSxDQUFDLEdBQUcsTUFBTTtBQWhqQ25DO0FBaWpDWSxZQUFJLE9BQWlCLEtBQUssS0FBSyxtQkFDM0Isa0JBQ0EsS0FBSyxnQkFBZ0IsUUFDckIsS0FBSztBQUtULFlBQUksT0FBTyxLQUFLLGVBQWU7QUFDL0IsYUFBSyxPQUFPLFNBQUUsUUFBRixtQkFBTyxTQUFRO0FBQzNCLFlBQUksUUFBUSxLQUFLLEtBQUs7QUFDdEIsYUFBSyxNQUFNLE9BQU87QUFDbEIsYUFBSyxRQUFRO0FBR2IsWUFBSSxhQUFhLEtBQUssZ0JBQWdCLGNBQ2xDLElBQUksS0FBSyxjQUFjLElBQUksS0FBSztBQUdwQyxhQUFLLElBQUksV0FBVyxJQUFJLElBQUksS0FBSyxjQUFjLElBQUksS0FBSyxTQUFTLFdBQVcsSUFBSSxJQUFJO0FBQ3BGLGFBQUssZ0JBQWdCLFNBQVM7QUFDOUIsUUFBQyxLQUFLLGVBQWUsU0FBMkIsUUFBUSxNQUFNLEVBQUU7QUFFaEUsWUFBSSxDQUFDLDRCQUFLLFNBQVE7QUFDZCxrQkFBUSxFQUFFO0FBQUEsaUJBQ0Q7QUFDRCxtQkFBSyxrQkFBa0IsS0FBSyxTQUFTLEVBQUU7QUFDdkM7QUFBQSxpQkFDQztBQUNELG1CQUFLLGtCQUFrQixLQUFLLFlBQVksRUFBRTtBQUMxQztBQUFBO0FBQUE7QUFJWixhQUFLLE1BQU0sR0FDUCxNQUNBLEVBQUUsR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQ3pCLEtBQ0EsTUFDQSxLQUFLLFFBQVEsT0FDVCxNQUNBLENBQUMsTUFBZ0I7QUFDYixlQUFLLE1BQU0sS0FBSyxLQUFNLE1BQU0sTUFBTTtBQUM5QixpQkFBSyxLQUFLLFFBQVEsa0JBQWtCO0FBRXBDLGdCQUFJLGVBQWUsS0FBSyxnQkFBZ0IsY0FDcEMsRUFBRSxjQUFjLEtBQUssTUFBTTtBQUUvQixjQUFFO0FBRUYsZ0JBQUksSUFBSSxRQUFRO0FBQ1o7QUFBQTtBQUdKLHFCQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUN4QixrQkFBSSxZQUF3QixLQUFLLEtBQUssbUJBQ2xDLG1CQUNBLEtBQUssZ0JBQWdCLFFBQ3JCLEtBQUs7QUFFVCx3QkFBVSxPQUFPLEVBQUUsSUFBSTtBQUV2Qix3QkFBVSxJQUNOLGFBQWEsSUFDVCxLQUFLLFdBQVcsS0FBTSxNQUFLLFdBQVcsTUFBTSxJQUFJLEtBQ3BELGFBQWEsSUFDVCxLQUFLLFdBQVcsS0FBTSxNQUFLLFdBQVcsTUFBTSxJQUFJO0FBRXhELHdCQUFVLE1BQU0sT0FBTztBQUN2QixtQkFBSyxnQkFBZ0IsU0FBUztBQUM5Qix3QkFBVSxTQUFTO0FBRW5CLGtCQUFJO0FBQ0osc0JBQVEsRUFBRTtBQUFBLHFCQUNEO0FBQ0QsNEJBQVUsS0FBSztBQUNmO0FBQUEscUJBQ0M7QUFDRCw0QkFBVSxLQUFLO0FBQ2Y7QUFBQSxxQkFDQztBQUNELDRCQUFVLEtBQUs7QUFDZjtBQUFBO0FBR1Isa0JBQUksaUJBQWlCLFFBQVEsY0FDekIsSUFBSSxLQUFLLE1BQU0sUUFBUSxRQUFRLEdBQUcsUUFBUSxTQUFTO0FBRXZELGtCQUFJLFdBQVcsS0FBSyxnQkFBZ0IsY0FBYztBQUVsRCxtQkFBSyxNQUFNLEdBQ1AsV0FDQSxFQUFFLEdBQUcsU0FBUyxHQUFHLEdBQUcsU0FBUyxLQUM3QixLQUNBLEtBQUssS0FBSyxRQUNWLEtBQUssUUFBUSxPQUNULE1BQ0EsQ0FBQyxPQUFrQjtBQUNmLG1CQUFFO0FBQ0YscUJBQUssS0FBSyxRQUFRLG1CQUFtQjtBQUFBLGlCQUV6QyxDQUFDLGFBRUwsTUFBTTtBQUFBO0FBQUE7QUFBQSxXQUt0QixDQUFDLFFBRUwsS0FBSyxHQUNMLE1BQ0E7QUFBQTtBQUFBO0FBQUEsSUFLSixrQkFBa0IsTUFBTSxPQUFlO0FBQzNDLFdBQUssVUFBVTtBQUNmLFdBQUssUUFBUTtBQUNiLFdBQUssUUFBUSxJQUFJO0FBQ2pCLFdBQUssSUFBSTtBQUNULFdBQUs7QUFDTCxXQUFLLE1BQU0sR0FDUCxNQUNBLEVBQUUsT0FBTyxHQUFHLEdBQUcsT0FDZixLQUNBLE1BQ0EsSUFBSSxLQUFLLFFBQVEsTUFBTSxNQUFNO0FBQ3pCLGFBQUssTUFBTSxLQUFLLEtBQU0sTUFBTSxNQUFNO0FBQzlCLGVBQUssUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVXJCLGFBQWEsUUFBUSxVQUFzQztBQUMvRCxVQUFJLGFBQWE7QUFDakIsMkNBQVUsUUFBUSxDQUFDLE1BQU07QUFDckIsZ0JBQVEsSUFBSSxFQUFFLE1BQU0sbUJBQVcsU0FBUyxJQUFJO0FBQzVDLG1CQUFXLEtBQUs7QUFBQSxVQUNaLEtBQUsscUJBQWEsTUFBTSxZQUFZLElBQUksRUFBRTtBQUFBLFVBQzFDLE9BQU8sRUFBRTtBQUFBLFVBQ1QsU0FBUyxFQUFFLE1BQU0sbUJBQVcsU0FBUyxJQUFJO0FBQUE7QUFBQTtBQUlqRCxtQkFBSyxZQUFZLE1BQU0sVUFBVSxpQkFBb0M7QUFBQSxRQUNqRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBLElBU04sYUFBYTtBQUNqQixZQUFNLE1BQWtCLEtBQUssU0FDekIsT0FBTyxJQUFJLGVBQWUsU0FDMUIsYUFBYSxLQUFLLGVBQWUsZUFDakMsT0FBTyxJQUFJLGVBQWUsT0FDMUIsT0FBTyxvQkFBWSxXQUNuQixPQUFPLEtBQUs7QUFDaEIsVUFBSSxLQUFLLFdBQVcsS0FBSyxLQUFLLFNBQVM7QUFDbkMsWUFBSSxVQUFVO0FBQ2Q7QUFBQTtBQUVKLFVBQUksVUFBVTtBQUNkLFdBQUssT0FBTyxnQkFBTSxLQUFLLEtBQUssUUFDeEIsS0FBSyxRQUFRLEtBQUssS0FBSyxRQUFRLEtBQUssS0FBSyxRQUFRLEtBQUssU0FDdEQsS0FBSyxLQUFLO0FBQ2QsaUJBQVcsUUFBUSxNQUFNLEtBQUssS0FBSyxPQUFPO0FBQzFDLFdBQUssT0FBTyxLQUFLLEtBQUssT0FBTyxJQUFJO0FBQ2pDLFVBQUksUUFBUSxLQUFLLFFBQVE7QUFBQTtBQUFBLElBTXJCLFNBQVM7QUFDYixtQkFBSyxLQUFLLFlBQVksTUFBTSxNQUFNO0FBQzlCLG9CQUFZLEtBQ1AsS0FBSztBQUFBLFVBQ0YsS0FBSyxRQUFRO0FBQUEsVUFDYixNQUFNLEVBQUUsT0FBTztBQUFBLFdBRWxCLEtBQUssTUFBTTtBQUVSLGVBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVNiLGVBQWUsZ0JBQWdCLE9BQU87QUFDMUMsVUFBSSxlQUFlO0FBRWYsYUFBSyxZQUFZLEtBQUs7QUFBQTtBQUUxQixXQUFLLFVBQVU7QUFDZixXQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTTtBQUM3QixxQkFBSyxLQUFLLFlBQVk7QUFDdEIsYUFBSyxTQUFTO0FBQ2QsYUFBSztBQUVMLFlBQUksS0FBSyxTQUFTLEtBQUssUUFBUTtBQUMzQixjQUFJLGlCQUFTLFVBQVUsT0FBTyxpQkFBUyxvQkFBb0IsSUFBSTtBQUMzRCxvQkFBUSxlQUFlO0FBQUEsY0FDbkIsS0FBSyxZQUFZO0FBQUEsY0FDakIsTUFBTSxFQUFFLFFBQVE7QUFBQTtBQUdwQixvQkFBUSxlQUFlO0FBQUEsY0FDbkIsS0FBSyxZQUFZO0FBQUEsY0FDakIsTUFBTSxFQUFFLFFBQVE7QUFBQTtBQUVwQixvQkFBUSxlQUFlO0FBQUEsY0FDbkIsS0FBSyxZQUFZO0FBQUEsY0FDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUVsQixvQkFBUSxlQUFlO0FBQUEsY0FDbkIsS0FBSyxZQUFZO0FBQUEsY0FDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUFBO0FBSXRCLHVCQUFLLEtBQUssS0FBSyxZQUFJLE1BQU0sZ0JBQWdCO0FBQUEsWUFDckMsTUFBTTtBQUFBLGNBQ0YsTUFBTTtBQUFBLGNBQ04sTUFBTSxLQUFLLFNBQVM7QUFBQSxjQUNwQixTQUFTLEtBQUssU0FBUztBQUFBLGNBQ3ZCLFVBQVUsS0FBSyxTQUFTO0FBQUEsY0FDeEIsTUFBTSxDQUFPLFFBQWlCLFdBQVc7QUFDckMsb0JBQUksUUFBUTtBQUNSLHNCQUFJLE9BVUEsTUFBTSxZQUFZLEtBQUssS0FBSztBQUFBLG9CQUM1QixLQUFLLFFBQVE7QUFBQSxvQkFDYixNQUErQjtBQUFBLHNCQUMzQixRQUFRO0FBQUEsc0JBQ1IsTUFBTSxtQkFBVztBQUFBLHNCQUNqQixLQUFLO0FBQUE7QUFBQTtBQUliLHNCQUFJLGFBQWE7QUFFakIsd0JBQU0sYUFBb0I7QUFFMUIsdUJBQUssS0FBSyxRQUFRLENBQUMsTUFBTTtBQUNyQiw2Q0FBaUIsSUFBSSxFQUFFLFNBQVMsRUFBRTtBQUNsQyxxQ0FBUyxXQUFXLEVBQUU7QUFDdEIsa0NBQWMsRUFBRTtBQUNoQiwrQkFBVyxLQUFLO0FBQUEsc0JBQ1osS0FBSyxxQkFBYSxNQUFNLFNBQVMsSUFBSSxFQUFFO0FBQUEsc0JBQ3ZDLE9BQU8sRUFBRTtBQUFBLHNCQUNULFNBQVM7QUFBQTtBQUFBO0FBSWpCLHNCQUFJLFdBQVcsUUFBUTtBQUNuQixpQ0FBSyxZQUFZLE1BQU0sVUFBVSxpQkFFaEM7QUFBQSxzQkFDRyxNQUFNO0FBQUEsc0JBQ04sTUFBTTtBQUFBO0FBQUE7QUFJZCx1QkFBSyxTQUFTLFFBQVEsQ0FBQyxPQUFNLE1BQU07QUFDL0Isd0JBQUksY0FBYyxNQUFLLE1BQU0sbUJBQVcsV0FBVztBQUMvQyw0QkFBSyxVQUFVO0FBQUE7QUFBQTtBQUl2QiwrQkFBSyxZQUFZLE1BQU0sVUFBVSxvQkFBb0I7QUFBQSxvQkFDakQ7QUFBQSxvQkFDQSxLQUFLO0FBQUE7QUFHVCwrQkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVk5QyxlQUFlO0FBQ25CLFdBQUs7QUFDTCxtQkFBSyxLQUFLLFlBQVksTUFBTSxNQUFNO0FBQzlCLGFBQUssV0FBVyxFQUFFLE1BQU0sSUFBSSxlQUFlLEdBQUcsVUFBVTtBQUV4RCxvQkFBWSxLQUNQLEtBQUs7QUFBQSxVQUNGLEtBQUssUUFBUTtBQUFBLFVBQ2IsTUFBNEI7QUFBQSxZQUN4QixNQUFNLG1CQUFXO0FBQUE7QUFBQSxXQUd4QixLQUFLLENBQUMsTUFBc0I7QUFFekIsZUFBSyxVQUFVO0FBQ2YsZUFBSyxTQUFTO0FBRWQsZUFBSyxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU07QUFDN0IseUJBQUssS0FBSyxZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU9sQyxlQUFlLEdBQW1CLFlBQXdCO0FBQzlELFdBQUsscUJBQXFCO0FBQzFCLFVBQUksQ0FBQyxLQUFLLFNBQVM7QUFDZixhQUFLLFdBQVcsRUFBRSxNQUFNLElBQUksZUFBZSxHQUFHLFVBQVU7QUFBQTtBQUU1RCxXQUFLLFVBQVU7QUFDZixXQUFLLFNBQVMsR0FBRztBQUFBO0FBQUEsSUFNYixTQUFTLEdBQW9CLFlBQXlCO0FBMzRDbEU7QUE0NENRLFVBQUksUUFBUSxLQUFLLFVBQ2IsWUFBWSxvQkFBWTtBQUM1QixVQUFJLGFBQW1DLElBQUk7QUFDM0MsVUFBSSxLQUFLLFNBQVM7QUFDZCxVQUFFLE1BQU0sUUFBUSxDQUFDLE1BQU07QUFDbkIscUJBQVcsSUFBSSxFQUFFLElBQUk7QUFBQTtBQUd6QixhQUFLLFlBQVksS0FBSztBQUN0QixhQUFLLFlBQVksVUFBVTtBQUMzQixhQUFLLFVBQVUsVUFBVTtBQUN6QixhQUFLLFFBQVEsVUFBVTtBQUFBLGFBQ3BCO0FBQ0gsa0JBQVUsUUFBUSxDQUFDLE9BQU07QUFDckIsYUFBRSxrQkFBbUIsTUFBSyxRQUFRLEtBQUssYUFBYTtBQUNwRCxjQUFJLEdBQUUsaUJBQWlCO0FBQUcsZUFBRSxpQkFBaUI7QUFBQTtBQUVqRCxhQUFLLFlBQVksVUFBVTtBQUMzQixhQUFLLFFBQVEsVUFBVTtBQUN2QixhQUFLLFVBQVUsVUFBVTtBQUFBO0FBRzdCLGVBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFDbkMsY0FBTSxPQUFPLE1BQU07QUFFbkIsWUFBSSxLQUFLLFNBQVM7QUFDZCxlQUFLLFVBQVU7QUFDZixlQUFLLFdBQVcsRUFBRTtBQUNsQixlQUFLLFdBQVcsRUFBRSxNQUFNO0FBRXhCLGNBQUksRUFBRSxlQUFlO0FBQ2pCLGlCQUFLLFdBQVc7QUFDaEIsaUJBQUssZ0JBQWdCO0FBQUEsaUJBQ2xCO0FBQ0gsaUJBQUssV0FBVztBQUFBO0FBQUEsZUFFakI7QUFDSCxlQUFLLFdBQVc7QUFDaEIsZUFBSyxVQUFVO0FBQ2YsZUFBSyxXQUFXO0FBQ2hCLGVBQUssV0FBVyxFQUFFLE1BQU07QUFBQTtBQUc1QixhQUFLLGFBQWEsUUFBUSxXQUFLLFNBQUwsbUJBQVc7QUFBQTtBQUd6QyxXQUFLO0FBRUwsVUFBSSxLQUFLLFNBQVM7QUFFZCxhQUFLLFFBQVEsVUFBVTtBQUFBLGFBQ3BCO0FBRUgsYUFBSyxRQUFRLFVBQVU7QUFBQTtBQUczQixXQUFLLGlCQUFpQixHQUFHO0FBQUE7QUFBQSxJQU1yQixpQkFBaUIsR0FBb0IsWUFBeUI7QUFDbEUsWUFBTSxXQUFXLHVCQUFHLFVBQ2hCLFFBQVEsdUJBQUcsT0FDWCxTQUFTLDBDQUFZLFdBQVUsd0JBQUc7QUFDdEMsY0FBUSxJQUFJO0FBRVosWUFBTSxTQUFTLEtBQUssU0FBUyxRQUN6QixXQUFXLE9BQU8sZUFBZSxjQUNqQyxZQUFZLE9BQU8sZUFBZSxlQUNsQyxXQUFXLEtBQUssU0FBUyxlQUFlLGNBQ3hDLGFBQWEsS0FBSyxTQUFTLGVBQWUsZ0JBQzFDLGFBQTJCO0FBQUEsUUFDdkIsS0FBSyxVQUFVLGVBQWU7QUFBQSxRQUM5QixLQUFLLFVBQVUsZUFBZTtBQUFBLFFBRTlCLEtBQUssVUFBVSxlQUFlO0FBQUE7QUFFdEMsVUFBSSxLQUFLLFNBQVM7QUFDZCxtQkFBVyxPQUFPLEdBQUc7QUFDckIsaUJBQVMsVUFBVTtBQUNuQixtQkFBVyxVQUFVO0FBQ3JCLGlCQUFTLFVBQVU7QUFDbkIsa0JBQVUsVUFBVTtBQUVwQixhQUFLLFNBQVMsV0FBVztBQUV6QixrQkFBVSxPQUFPLE1BQU0sY0FBYyxLQUFLO0FBQzFDLGFBQUssTUFBTSxLQUFLLEtBQU0sTUFBTSxLQUFLLG1CQUFtQixDQUFDO0FBQ3JELFlBQUk7QUFBUSxlQUFLLFdBQVcsT0FBTztBQUNuQyxZQUFJLE9BQU87QUFDUCxlQUFLLE9BQU8sVUFBVTtBQUN0QixVQUNJLEtBQUssT0FBTyxlQUFlLFdBQzdCLFNBQVMsV0FBVztBQUFBLGVBQ25CO0FBQ0gsZUFBSyxPQUFPLFVBQVU7QUFBQTtBQUUxQixRQUFDLEtBQUssT0FBTyxlQUFlLE9BQXNCLFVBQVU7QUFDNUQsYUFBSyxVQUFVLFVBQVU7QUFDekIsYUFBSyxXQUFXLFVBQVU7QUFDMUIsYUFBSyxXQUFXLE9BQU87QUFBQSxhQUNwQjtBQUNILGFBQUssV0FBVyxPQUFPO0FBQ3ZCLGFBQUssVUFBVSxVQUFVO0FBQ3pCLGFBQUssV0FBVyxVQUFVO0FBQzFCLGFBQUsscUJBQXFCO0FBQzFCLGFBQUssTUFBTSxNQUFNLE1BQU0sS0FBSztBQUM1QixpQkFBUyxVQUFVO0FBQ25CLG1CQUFXLFVBQVU7QUFDckIsaUJBQVMsVUFBVTtBQUNuQixrQkFBVSxVQUFVO0FBQ3BCLFlBQUksaUJBQVMsUUFBUTtBQUNqQixlQUFLLFdBQVcsT0FBTyxpQkFBUztBQUFBLGVBQzdCO0FBQ0gsZUFBSyxXQUFXLE9BQU87QUFBQTtBQUUzQixZQUFJLGlCQUFTLFdBQVc7QUFDcEIsZUFBSyxPQUFPLFVBQVU7QUFDdEIsVUFDSSxLQUFLLE9BQU8sZUFBZSxXQUM3QixTQUFTLFdBQVcsaUJBQVM7QUFBQSxlQUM1QjtBQUNILGVBQUssT0FBTyxVQUFVO0FBQUE7QUFFMUIsUUFBQyxLQUFLLE9BQU8sZUFBZSxPQUFzQixVQUFVO0FBQUE7QUFFaEUsaUJBQVcsUUFBUSxDQUFDLE1BQU07QUFDdEIsVUFBRSxXQUFXLEtBQUs7QUFBQTtBQUFBO0FBQUEsSUFTbEIsa0JBQWtCLElBQWdCO0FBQ3RDLFdBQUs7QUFDTCxTQUFHLE9BQU8sTUFBTSxjQUFjLEtBQUs7QUFDbkMsVUFBSSxLQUFLLHNCQUFzQixHQUFHO0FBQzlCLGFBQUssTUFBTSxNQUFNLE1BQU0sS0FBSztBQUM1QixhQUFLO0FBQUE7QUFBQTtBQUFBLElBSWIsY0FBb0I7QUEvaER4QjtBQWdpRFEsaUJBQUssZ0JBQUwsbUJBQWtCO0FBQ2xCLFdBQUssbUJBQW1CO0FBQUE7QUFBQSxJQWdCcEIscUJBQXFCO0FBQ3pCLG1CQUFLLEtBQUssS0FBSyxZQUFJLE1BQU0sbUJBQW1CO0FBQUEsUUFDeEMsTUFBTTtBQUFBLFVBQ0YsTUFBTSxLQUFLO0FBQUEsVUFDWCxNQUFNLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUVYsaUJBQWlCLE1BQWUsTUFBcUI7QUFBQTtBQUMvRCxZQUFJLE1BQU07QUFDTixjQUFJLElBQUssTUFBTSxZQUFZLEtBQUssS0FBSztBQUFBLFlBQ2pDLEtBQUssUUFBUTtBQUFBLFlBQ2IsTUFBTTtBQUFBO0FBRVYsaUJBQU8sRUFBRTtBQUFBO0FBRWIsYUFBSyxtQkFBbUI7QUFDeEIsWUFBSSxLQUFLLFNBQVMsR0FBRztBQUNqQixlQUFLLG1CQUFtQjtBQUN4QjtBQUFBO0FBRUosWUFBSSxZQUFZO0FBQ2hCLGlCQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUN4QixjQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQjtBQUN6Qix3QkFBWTtBQUNaO0FBQUE7QUFBQTtBQUdSLGFBQUssbUJBQW1CO0FBQUE7QUFBQTtBQUFBLElBT3BCLG1CQUFtQixNQUFlO0FBeGxEOUM7QUF5bERRLFVBQUksTUFBTTtBQUNOLGFBQUssaUJBQWlCLFVBQVU7QUFDaEMsWUFBSSxDQUFDLEtBQUssMkJBQTJCO0FBQ2pDLGVBQUssNEJBQTRCLEtBQUssU0FBUyxHQUMzQyxLQUFLLGtCQUNMLEVBQUUsVUFBVSxNQUNaLEtBQ0EsTUFDQSxLQUVDLEdBQUcsS0FBSyxrQkFBa0IsRUFBRSxVQUFVLE9BQU8sS0FBSyxNQUNsRCxHQUFHLEtBQUssa0JBQWtCLEVBQUUsVUFBVSxNQUFNLEtBQUssTUFDakQsR0FBRyxLQUFLLGtCQUFrQixFQUFFLFVBQVUsS0FBSyxLQUFLO0FBQUE7QUFFekQsYUFBSywwQkFBMEIsS0FBSyxNQUFNO0FBQUEsYUFDdkM7QUFDSCxtQkFBSyw4QkFBTCxtQkFBZ0M7QUFDaEMsYUFBSyw0QkFBNEI7QUFDakMsYUFBSyxpQkFBaUIsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQXBrRDVDO0FBd3NCWTtBQUFBLElBRFAsYUFBSyxRQUFRLFVBQVU7QUFBQSxLQUNoQixBQXhzQlosU0F3c0JZO0FBc0RBO0FBQUEsSUFEUCxhQUFLLFFBQVEsVUFBVTtBQUFBLEtBQ2hCLEFBOXZCWixTQTh2Qlk7QUFpQ0E7QUFBQSxJQURQLGFBQUssUUFBUSxVQUFVO0FBQUEsS0FDaEIsQUEveEJaLFNBK3hCWTtBQXFPQTtBQUFBLElBRFAsYUFBSyxRQUFRLFVBQVU7QUFBQSxLQUNoQixBQXBnQ1osU0FvZ0NZO0FBa0pBO0FBQUEsSUFEUCxhQUFLLFFBQVEsVUFBVTtBQUFBLEtBQ2hCLEFBdHBDWixTQXNwQ1k7QUFzQkE7QUFBQSxJQURQLGFBQUssUUFBUSxVQUFVO0FBQUEsS0FDaEIsQUE1cUNaLFNBNHFDWTtBQXlDQTtBQUFBLElBRFAsYUFBSyxRQUFRLFVBQVU7QUFBQSxLQUNoQixBQXJ0Q1osU0FxdENZO0FBbUlBO0FBQUEsSUFEUCxhQUFLLFFBQVEsVUFBVTtBQUFBLEtBQ2hCLEFBeDFDWixTQXcxQ1k7QUE4TE07QUFBQSxJQURiLGFBQUssUUFBUSxVQUFVO0FBQUEsS0FDVixBQXRoRGxCLFNBc2hEa0I7OztBQ2pqRGxCLGtDQUF5QyxhQUFLLFdBQVc7QUFBQSxJQUF6RCxjQVpBO0FBWUE7QUFhWSxzQkFBdUI7QUFHdkIsdUJBQXVCO0FBR3ZCLHFCQUF3QjtBQUN4Qix5QkFBNEI7QUFFNUIsc0JBQW9CO0FBQUE7QUFBQSxJQUU1QixTQUFTLE1BSU47QUFDQyxXQUFLLFVBQVUsS0FBSyxXQUFXO0FBQy9CLFdBQUssY0FBYyxLQUFLO0FBQ3hCLFdBQUs7QUFDTCxXQUFLLE9BQU8sVUFBVTtBQUN0QixXQUFLLE9BQU8sU0FBUztBQUNyQixXQUFLLFNBQVMsUUFBUSxLQUFLO0FBQzNCLFdBQUs7QUFDTCxXQUFLLFNBQVMsZ0JBQWdCLElBQUksS0FBSyxRQUFRLE1BQU0sS0FBSztBQUMxRCxXQUFLLFNBQVMsaUJBQWlCO0FBQy9CLFdBQUssUUFBUSxPQUFPLHVDQUFTLGlCQUFTO0FBQ3RDLGNBQVEsSUFBSSxLQUFLO0FBQ2pCLFVBQUksS0FBSyxRQUFRLEtBQUssUUFBUSxHQUFHO0FBQzdCLGFBQUs7QUFBQTtBQUFBO0FBQUEsSUFJTCxVQUFVO0FBQ2QsV0FBSyxTQUFTLFVBQVUsQ0FBQyxLQUFLLFNBQVMsTUFBTTtBQUFBO0FBQUEsSUFHekMsaUJBQWlCO0FBQ3JCLFdBQUssWUFBWSxLQUFLLENBQUMsR0FBRyxNQUFNO0FBQzVCLGVBQU8sRUFBRSxXQUFXLE1BQVMsRUFBRSxXQUFXO0FBQUE7QUFBQTtBQUFBLElBSTFDLFdBQVcsTUFBZ0IsR0FBVztBQUMxQyxZQUFNLE9BQU8sS0FBSyxTQUFTLE1BQU07QUFFakMsVUFBSSxTQUFTLEtBQUssZUFBZSxZQUM3QixXQUFXLEtBQUssZUFBZSxjQUMvQixZQUFZLEtBQUssZUFBZSxnQkFDaEMsV0FBVyxLQUFLLGVBQWUsY0FDL0IsU0FBUyxLQUFLLGVBQWU7QUFDakMsZUFBUyxVQUFVO0FBRW5CLGdCQUFVLFVBQVU7QUFDcEIsZUFBUyxVQUFVO0FBQ25CLGFBQU8sVUFBVTtBQUdqQixVQUFJLDZCQUFNO0FBQVEsUUFBQyxLQUFLLGVBQWUsUUFBdUIsT0FBTyxLQUFLO0FBQzFFLE1BQUMsS0FBSyxlQUFlLFFBQXVCLE9BQU8sS0FBSztBQUN4RCxNQUFDLEtBQUssZUFBZSxNQUFxQixPQUFRLE1BQUssY0FBYyxLQUFLO0FBQzFFLE1BQUMsU0FBUyxlQUFlLE9BQXNCLE9BQVEsTUFBSyxZQUFZLEtBQUs7QUFDN0UsTUFBQyxLQUFLLGVBQWUsY0FBYyxlQUFlLFNBQXdCLE9BQ3RFLEtBQUssY0FBYztBQUV2QixNQUFDLEtBQUssZUFBZSxXQUEwQixhQUFhO0FBQzVELGdCQUFVLGFBQWE7QUFFdkIsY0FBUSxLQUFLO0FBQUEsYUFDSjtBQUNELG9CQUFVLFVBQVU7QUFDcEIsbUJBQVMsVUFBVTtBQUNuQjtBQUFBLGFBQ0M7QUFDRCxtQkFBUyxhQUFhO0FBQ3RCLG1CQUFTLFVBQVU7QUFDbkIsaUJBQU8sVUFBVTtBQUNqQixpQkFBTyxTQUFTO0FBQ2hCO0FBQUEsYUFDQztBQUNELG1CQUFTLFVBQVU7QUFDbkIsaUJBQU8sVUFBVTtBQUNqQjtBQUFBO0FBR1IsVUFBSSxLQUFLLGFBQWEsS0FBSyxLQUFLLGFBQWEsR0FBRztBQUU1QyxZQUFJLEtBQUssVUFBVTtBQUNmLGlCQUFPLFVBQVU7QUFDakIsaUJBQU8sU0FBUztBQUNoQixVQUFDLE9BQU8sZUFBZSxZQUEyQixhQUFhO0FBQy9ELFVBQUMsT0FBTyxlQUFlLFVBQXlCLGFBQWE7QUFDN0QsbUJBQVMsVUFBVTtBQUNuQixvQkFBVSxVQUFVO0FBQUEsZUFDakI7QUFFSCxpQkFBTyxVQUFVO0FBQ2pCLGlCQUFPLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU01QixRQUFRLEdBQWU7QUFDbkIsVUFBSSxDQUFDLEtBQUs7QUFBVTtBQUNwQixjQUFRLElBQUksRUFBRSxPQUFPO0FBQ3JCLGNBQVEsRUFBRSxPQUFPO0FBQUEsYUFDUjtBQUNELHVCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFDMUI7QUFBQSxhQUNDO0FBQ0QsZUFBSztBQUVMO0FBQUEsYUFDQztBQUNELGVBQUs7QUFDTDtBQUFBLGFBQ0M7QUFDRCx1QkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNLGlCQUFpQjtBQUFBLFlBQ3RDLE1BQU07QUFBQSxjQUNGLE1BQU0sTUFBTTtBQUNSLHFCQUFLO0FBQUE7QUFBQTtBQUFBO0FBSWpCO0FBQUEsYUFDQztBQUNELGVBQUs7QUFDTDtBQUFBLGFBQ0M7QUFDRCxlQUFLO0FBQ0w7QUFBQSxhQUNDO0FBQ0QsZUFBSztBQUNMO0FBQUEsYUFDQztBQUNELGVBQUssV0FBVyxFQUFFO0FBQ2xCO0FBQUEsYUFDQztBQUNELGVBQUssWUFBWSxFQUFFO0FBQ25CO0FBQUEsYUFDQztBQUNELGVBQUssYUFBYSxFQUFFO0FBQ3BCO0FBQUEsYUFDQztBQUNELGVBQUssT0FBTyxFQUFFO0FBQ2Q7QUFBQSxhQUNDO0FBQ0QsZUFBSyxZQUFZLEVBQUU7QUFDbkI7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBLElBSUosb0JBQW9CO0FBQ3hCLFVBQUksS0FBSyxhQUFhO0FBQUc7QUFDekIsV0FBSyxPQUFPLFVBQVU7QUFDdEIsV0FBSyxPQUFPLFNBQVM7QUFDckIsV0FBSyxZQUFZO0FBQ2pCLFVBQUksT0FBcUI7QUFDekIsV0FBSyxRQUFRLFFBQVEsQ0FBQyxNQUFNO0FBQ3hCLFlBQUksQ0FBQyxFQUFFO0FBQVUsZUFBSyxLQUFLO0FBQUE7QUFFL0IsV0FBSyxTQUFTLFFBQVE7QUFDdEIsV0FBSyxTQUFTLFNBQVM7QUFDdkIsV0FBSyxTQUFTO0FBQ2QsV0FBSztBQUNMLFdBQUssVUFBVSxPQUFPO0FBQUE7QUFBQSxJQUdsQixpQkFBaUI7QUFDckIsVUFBSSxLQUFLLGFBQWEsS0FBSyxLQUFLLGFBQWEsR0FBRztBQUM1QyxnQkFBUSxJQUFJLEtBQUs7QUFDakIsYUFBSyxZQUFZO0FBQ2pCLGFBQUssU0FBUyxRQUFRLEtBQUs7QUFDM0IsYUFBSyxTQUFTLFNBQVM7QUFDdkIsYUFBSyxVQUFVLE9BQU87QUFDdEIsYUFBSyxPQUFPLFVBQVU7QUFDdEIsYUFBSyxPQUFPLFNBQVM7QUFDckIsYUFBSztBQUFBLGFBQ0Y7QUFDSCxhQUFLLFlBQVk7QUFDakIsYUFBSyxPQUFPLFVBQVU7QUFDdEIsYUFBSyxPQUFPLFNBQVM7QUFDckIsYUFBSyxTQUFTLFFBQVE7QUFDdEIsYUFBSyxTQUFTLFNBQVM7QUFDdkIsYUFBSyxVQUFVLE9BQU87QUFDdEIsYUFBSyxTQUFTLFVBQVU7QUFBQTtBQUc1QixXQUFLLFNBQVM7QUFBQTtBQUFBLElBT1YsT0FBTyxRQUFvQjtBQUMvQixVQUFJLE9BQU8sT0FBTztBQUNsQixXQUFLLFdBQVc7QUFDaEIsa0JBQVksS0FDUCxLQUFLO0FBQUEsUUFDRixLQUFLLFFBQVE7QUFBQSxRQUNiLE1BQU07QUFBQSxVQUNGLFVBQVUsS0FBSztBQUFBO0FBQUEsU0FHdEIsS0FBSyxDQUFDLE1BQU07QUFDVCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsUUFBUSxLQUFLO0FBQzFDLGNBQUksS0FBSyxRQUFRLEdBQUcsT0FBTyxLQUFLLEtBQUs7QUFDakMsaUJBQUssUUFBUSxPQUFPLEdBQUc7QUFDdkI7QUFBQTtBQUFBO0FBR1IsYUFBSyxXQUFXO0FBQ2hCLGFBQUssU0FBUztBQUNkLGFBQUs7QUFDTCwwQkFBVTtBQUFBLFNBRWIsTUFBTSxNQUFNO0FBQ1QsYUFBSyxXQUFXO0FBQUE7QUFBQTtBQUFBLElBT3BCLGFBQWE7QUFDakIsV0FBSyxXQUFXO0FBQ2hCLGtCQUFZLEtBQ1AsS0FBSztBQUFBLFFBQ0YsS0FBSyxRQUFRO0FBQUEsUUFDYixNQUFNO0FBQUEsU0FFVCxLQUFLLENBQUMsTUFBa0I7QUFDckIscUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTSxtQkFBbUI7QUFBQSxVQUN4QyxNQUFNO0FBQUEsWUFDRixNQUFNLEVBQUU7QUFBQSxZQUNSLE1BQU0sTUFBTTtBQUNSLDBCQUFZLEtBQ1AsS0FBSztBQUFBLGdCQUNGLEtBQUssUUFBUTtBQUFBLGlCQUVoQixLQUFLLENBQUMsT0FBc0I7QUFDekIscUJBQUssVUFBVSxHQUFFO0FBQ2pCLHFCQUFLLGNBQWMsS0FBSztBQUN4QixxQkFBSztBQUNMLHFCQUFLLFNBQVMsUUFBUSxLQUFLO0FBQzNCLHFCQUFLO0FBQ0wscUJBQUssU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS2xDLGFBQUssV0FBVztBQUFBLFNBRW5CLE1BQU0sTUFBTTtBQUNULGFBQUssV0FBVztBQUFBO0FBQUE7QUFBQSxJQU9wQixZQUFZLFFBQW9CO0FBQ3BDLFdBQUssV0FBVztBQUNoQixtQkFBSyxLQUFLLFlBQVksTUFBTSxNQUFZO0FBQ3BDLFlBQUksT0FBTyxPQUFPO0FBRWxCLFlBQUksU0FBUyxLQUFLLFNBQVM7QUFDdkIsZ0JBQU0sWUFBWSxLQUFLLEtBQUs7QUFBQSxZQUN4QixLQUFLLFFBQVE7QUFBQSxZQUNiLE1BQU07QUFBQTtBQUFBO0FBSWQsb0JBQVksS0FDUCxLQUFLO0FBQUEsVUFDRixLQUFLLFFBQVE7QUFBQSxVQUNiLE1BQU07QUFBQSxZQUNGLFVBQVUsS0FBSztBQUFBO0FBQUEsV0FHdEIsS0FBSyxDQUFDLE1BQU07QUFDVCx1QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCLHVCQUFLLFlBQVksTUFBTSxVQUFVLGdCQUFnQixDQUFDLEdBQUc7QUFDckQscUJBQVcsTUFBTTtBQUNiLHlCQUFLLEtBQUssWUFBWTtBQUN0QixpQkFBSyxXQUFXO0FBQUEsYUFDakI7QUFBQSxXQUVOLE1BQU0sTUFBTTtBQUNULGVBQUssV0FBVztBQUNoQix1QkFBSyxZQUFZLE1BQU0sVUFBVSxTQUFTLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVNuRCxhQUFhLFFBQW9CO0FBQ3JDLG1CQUFLLEtBQUssU0FBUztBQUFBLFFBQ2YsTUFBTTtBQUFBLFFBQ04sTUFBTSxNQUFNO0FBQ1IsY0FBSSxPQUFPLE9BQU87QUFDbEIsc0JBQVksS0FDUCxLQUFLO0FBQUEsWUFDRixLQUFLLFFBQVE7QUFBQSxZQUNiLE1BQU07QUFBQSxjQUNGLFVBQVUsS0FBSztBQUFBO0FBQUEsYUFHdEIsS0FBSyxDQUFDLE1BQU07QUFDVCxxQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsUUFBUSxLQUFLO0FBQzFDLGtCQUFJLEtBQUssUUFBUSxHQUFHLE9BQU8sS0FBSyxLQUFLO0FBQ2pDLHFCQUFLLFFBQVEsT0FBTyxHQUFHO0FBQ3ZCO0FBQUE7QUFBQTtBQUlSLGlCQUFLLFNBQVMsUUFBUSxLQUFLO0FBQzNCLGlCQUFLLFNBQVM7QUFDZCxpQkFBSztBQUFBO0FBQUE7QUFBQSxRQUdqQixZQUFZLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU9sQixZQUFZLFFBQW9CO0FBQ3BDLFdBQUssV0FBVztBQUNoQixVQUFJLE9BQU8sT0FBTztBQUNsQixrQkFBWSxLQUNQLEtBQUs7QUFBQSxRQUNGLEtBQUssUUFBUTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFVBQ0YsVUFBVSxLQUFLO0FBQUE7QUFBQSxTQUd0QixLQUFLLE1BQU07QUFDUixhQUFLLFdBQVc7QUFDaEIsYUFBSyxTQUFTO0FBQ2QsYUFBSyxXQUFXO0FBQ2hCLGdCQUFRLGVBQWU7QUFBQSxVQUNuQixLQUFLLFlBQVk7QUFBQSxVQUNqQixNQUFNLEVBQUUsTUFBTTtBQUFBO0FBRWxCLDBCQUFVO0FBQUEsU0FFYixNQUFNLE1BQU07QUFDVCxhQUFLLFdBQVc7QUFBQTtBQUFBO0FBQUEsSUFRcEIsV0FBVyxRQUFvQjtBQUNuQyxVQUFJLE9BQU8sT0FBTztBQUNsQixXQUFLLFdBQVc7QUFDaEIsa0JBQVksS0FDUCxLQUFLO0FBQUEsUUFDRixLQUFLLFFBQVE7QUFBQSxRQUNiLE1BQU07QUFBQSxVQUNGLFVBQVUsS0FBSztBQUFBO0FBQUEsU0FHdEIsS0FBSyxDQUFDLE1BQStDO0FBQ2xELGFBQUssY0FBYztBQUNuQixhQUFLLFNBQVMsUUFBUSxLQUFLO0FBQzNCLGFBQUssU0FBUztBQUNkLHFCQUFLLEtBQUssU0FBUyxFQUFFLE1BQU0sa0NBQVMsTUFBTSxNQUFNO0FBQUE7QUFDaEQsYUFBSyxXQUFXO0FBQ2hCLFlBQUksRUFBRSxXQUFXO0FBQ2IsOEJBQVksYUFBYTtBQUFBO0FBQUEsU0FHaEMsTUFBTSxNQUFNO0FBQ1QsYUFBSyxXQUFXO0FBQUE7QUFBQTtBQUFBLElBUXBCLFNBQVM7QUFDYixVQUFJLENBQUMsS0FBSyxhQUFhLEtBQUssUUFBUTtBQUNoQyxxQkFBSyxLQUFLLFNBQVMsRUFBRSxNQUFNLDhDQUFXLE1BQU0sTUFBTTtBQUFBO0FBQ2xEO0FBQUE7QUFFSixVQUFJLEtBQUssYUFBYSxRQUFRLGlCQUFTLEtBQUs7QUFDeEMscUJBQUssS0FBSyxTQUFTLEVBQUUsTUFBTSx3Q0FBVSxNQUFNLE1BQU07QUFBQTtBQUNqRDtBQUFBO0FBR0osV0FBSyxXQUFXO0FBQ2hCLGtCQUFZLEtBQ1AsS0FBSztBQUFBLFFBQ0YsS0FBSyxRQUFRO0FBQUEsUUFDYixNQUFNO0FBQUEsVUFDRixLQUFLLEtBQUssYUFBYTtBQUFBO0FBQUEsU0FHOUIsS0FBSyxDQUFDLE1BQWtCO0FBQ3JCLGFBQUssY0FBYyxDQUFDO0FBQ3BCLGFBQUssU0FBUyxRQUFRLEtBQUs7QUFDM0IsYUFBSyxTQUFTO0FBQ2QsYUFBSyxXQUFXO0FBQUEsU0FFbkIsTUFBTSxNQUFNO0FBQ1QsYUFBSyxXQUFXO0FBQUE7QUFBQTtBQUFBLElBSXBCLE9BQU87QUFDWCxVQUFJLElBQXNCLFNBQVMsY0FBYztBQUNqRCxlQUFTLEtBQUssWUFBWTtBQUMxQixRQUFFLFFBQVEsaUJBQVM7QUFDbkIsUUFBRTtBQUNGLGVBQVMsWUFBWTtBQUNyQixRQUFFO0FBQ0YsbUJBQUssS0FBSyxTQUFTLEVBQUUsTUFBTSw0QkFBUSxNQUFNLE1BQU07QUFBQTtBQUFBO0FBQUE7OztBQzFidkQscUNBQTRDLGFBQUssV0FBVztBQUFBLElBQTVELGNBWEE7QUFXQTtBQWtCWSxzQkFBb0I7QUFBQTtBQUFBLElBRTVCLFNBQVMsR0FBUztBQS9CdEI7QUFnQ1EsV0FBSyxTQUFTLFVBQVU7QUFDeEIsV0FBSyxNQUFNLFVBQVU7QUFDckIsV0FBSyxPQUFPO0FBRVosV0FBSyxTQUFTLGlCQUFpQjtBQUMvQixXQUFLLE1BQU0saUJBQWlCO0FBRTVCLFdBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNO0FBQzdCLGdCQUFRLGVBQWU7QUFBQSxVQUNuQixLQUFLLFlBQVk7QUFBQSxVQUNqQixNQUFNLEVBQUUsUUFBUTtBQUFBO0FBRXBCLGdCQUFRLGVBQWU7QUFBQSxVQUNuQixLQUFLLFlBQVk7QUFBQSxVQUNqQixNQUFNLEVBQUUsUUFBUTtBQUFBO0FBRXBCLGdCQUFRLGVBQWU7QUFBQSxVQUNuQixLQUFLLFlBQVk7QUFBQSxVQUNqQixNQUFNLEVBQUUsTUFBTTtBQUFBO0FBRWxCLGdCQUFRLGVBQWU7QUFBQSxVQUNuQixLQUFLLFlBQVk7QUFBQSxVQUNqQixNQUFNLEVBQUUsTUFBTTtBQUFBO0FBQUE7QUFJdEIsY0FBUSxFQUFFO0FBQUEsYUFDRDtBQUVELGVBQUssTUFBTSxVQUFVO0FBRXJCLFVBQUMsS0FBSyxNQUFNLGVBQWUsUUFBUSxlQUFlLE9BQXNCLE9BQU8sR0FDM0UsaUJBQVMsYUFBYTtBQUcxQixVQUNJLEtBQUssTUFDQSxlQUFlLGFBQ2YsV0FBVyxHQUNYLGVBQWUsUUFDdEIsT0FBTyxxQkFBYSxNQUFNLFlBQVksSUFBSSxtQkFBVyxRQUFRO0FBQy9ELFVBQ0ksS0FBSyxNQUNBLGVBQWUsYUFDZixXQUFXLEdBQ1gsZUFBZSxNQUN0QixPQUFPLE1BQU0sRUFBRSxLQUFLO0FBQ3RCLFVBQ0ksS0FBSyxNQUNBLGVBQWUsYUFDZixXQUFXLEdBQ1gsZUFBZSxNQUN0QixPQUFPLE1BQU0sRUFBRSxLQUFLO0FBQ3RCLFVBQ0ksS0FBSyxNQUNBLGVBQWUsYUFDZixXQUFXLEdBQ1gsZUFBZSxRQUN0QixPQUFPLHFCQUFhLE1BQU0sWUFBWSxJQUFJLG1CQUFXLFdBQVc7QUFFbEU7QUFBQSxhQUNDO0FBRUQsZUFBSyxTQUFTLFVBQVU7QUFDeEIsVUFBQyxLQUFLLFNBQVMsZUFBZSxTQUF3QixPQUFPO0FBQzdELFVBQUMsS0FBSyxTQUFTLGVBQWUsVUFBeUIsT0FBTywyQkFDMUQsWUFBSyxTQUFMLG1CQUFXLGFBQVk7QUFFM0IsZUFBSztBQUNMO0FBQUEsYUFDQztBQUVELGVBQUssU0FBUyxVQUFVO0FBQ3hCLFVBQUMsS0FBSyxTQUFTLGVBQWUsU0FBd0IsT0FBTztBQUM3RCxVQUFDLEtBQUssU0FBUyxlQUFlLFVBQXlCLE9BQ25EO0FBQ0osZUFBSztBQUNMO0FBQUE7QUFBQTtBQUFBLElBT0osaUJBQWlCO0FBcEg3QjtBQXNIUSxVQUFJLE9BQThDLEtBQUssS0FBSztBQUM1RCxVQUFJLEtBQUssR0FDTCxLQUFLO0FBQ1QsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNsQyxZQUFJLFdBQXFCLEtBQUssS0FBSztBQUNuQyxZQUFJLEtBQUssR0FBRztBQUNSLGdCQUFNO0FBQ04sZUFBSztBQUFBO0FBR1QsaUJBQVMsSUFBSSxLQUFLLEtBQUs7QUFDdkIsaUJBQVMsSUFBSSxNQUFNLEtBQUs7QUFFeEIsWUFBSSxRQUFRLHFCQUFhLE1BQU0sU0FBUyxJQUFJLEtBQUssR0FBRztBQUNwRCxjQUFNLE9BQU8sU0FBUyxlQUFlO0FBQ3JDLGFBQUssT0FBTyxNQUFNO0FBQ2xCLGFBQUssTUFBTSxLQUFLO0FBQ2hCLGFBQUssVUFBVTtBQUNmLFFBQUMsU0FBUyxlQUFlLE1BQXFCLE9BQU8sSUFBSSxLQUFLLEdBQUc7QUFFakUsYUFBSyxTQUFTLFNBQVM7QUFFdkI7QUFBQTtBQUdKLFVBQUksS0FBSyxLQUFLLFNBQVMsZUFBZTtBQUN0QyxTQUFHLEtBQUssS0FBSztBQUNiLE1BQUMsR0FBRyxlQUFlLFdBQVcsZUFBZSxRQUF1QixPQUNoRSxxQkFBYSxNQUFNLFlBQVksSUFBSSxtQkFBVyxXQUFXO0FBRTdELE1BQUMsR0FBRyxlQUFlLFdBQVcsZUFBZSxNQUFxQixPQUFPLElBQ3JFLFlBQUssU0FBTCxtQkFBVyxZQUFXO0FBQUE7QUFBQSxJQUk5QixRQUFRLEdBQXFCO0FBQ3pCLGNBQVEsRUFBRSxPQUFPO0FBQUEsYUFDUjtBQUNELHVCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFDMUIsY0FBSSxLQUFLLEtBQUssUUFBUSxHQUFHO0FBQ3JCLGdCQUFJLEtBQUssS0FBSyxNQUFNO0FBQ2hCLG1CQUFLLEtBQUssS0FBSztBQUFBO0FBQUE7QUFJdkI7QUFBQSxhQUNDO0FBQUEsYUFDQTtBQUNELGNBQUksQ0FBQyxLQUFLLFVBQVU7QUFDaEI7QUFBQTtBQUVKLGVBQUssV0FBVztBQUNoQixjQUFJLEtBQUssS0FBSyxRQUFRLEdBQUc7QUFFckIsd0JBQVksS0FDUCxLQUFLO0FBQUEsY0FDRixLQUFLLFFBQVE7QUFBQSxjQUNiLE1BQU07QUFBQSxnQkFDRixTQUFTLGlCQUFTLGFBQWE7QUFBQSxnQkFDL0IsTUFDSSxFQUFFLE9BQU8sUUFBUSxZQUNYLG1CQUFXLGlCQUNYLG1CQUFXO0FBQUE7QUFBQSxlQUc1QixLQUFLLE1BQU07QUFDUiwyQkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCLG1CQUFLLFdBQVc7QUFDaEIsa0JBQUksS0FBSyxLQUFLLE1BQU07QUFDaEIscUJBQUssS0FBSyxLQUFLLEVBQUUsT0FBTyxRQUFRO0FBQUE7QUFBQSxlQUd2QyxNQUFNLE1BQU07QUFDVCxtQkFBSyxXQUFXO0FBQUE7QUFBQSxpQkFFckI7QUFDSCxnQkFBSSxFQUFFLE9BQU8sUUFBUSxrQkFBa0I7QUFDbkMsa0JBQUksS0FBSyxLQUFLLFFBQVEsR0FBRztBQUNyQixxQkFBSyxLQUFLLEtBQUssTUFBTSxFQUFFO0FBQUEscUJBQ3BCO0FBRUgsNEJBQVksS0FDUCxLQUFLO0FBQUEsa0JBQ0YsS0FBSyxRQUFRO0FBQUEsa0JBQ2IsTUFBNEI7QUFBQSxvQkFDeEIsUUFBUTtBQUFBLG9CQUNSLE1BQU0sbUJBQVc7QUFBQTtBQUFBLG1CQUd4QixLQUNHLENBQUMsTUFPSztBQUNGLHNCQUFJLEtBQUssS0FBSyxNQUFNO0FBQ2hCLHlCQUFLLEtBQUssS0FBSztBQUVmLHNCQUFFLFNBQVMsUUFBUSxDQUFDLE1BQU0sTUFBTTtBQUM1QiwwQkFDSSxLQUFLLEtBQUssV0FDVixLQUFLLE1BQU0sbUJBQVcsV0FDeEI7QUFDRSw2QkFBSyxVQUFVLEtBQUssS0FBSyxVQUFVO0FBQUE7QUFBQTtBQUkzQyxpQ0FBSyxZQUFZLE1BQU0sVUFBVSxvQkFBb0I7QUFBQSxzQkFDakQsRUFBRTtBQUFBLHNCQUNGLEVBQUU7QUFBQTtBQUFBO0FBR1YsK0JBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUFBO0FBQUE7QUFBQSxtQkFJdkM7QUFDSCxrQkFBSSxLQUFLLEtBQUssTUFBTTtBQUNoQixxQkFBSyxLQUFLLEtBQUs7QUFBQTtBQUVuQiwyQkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQUE7QUFBQTtBQUlsQztBQUFBO0FBQUE7QUFBQSxJQUlaLGNBQW9CO0FBQ2hCLGNBQVEsZUFBZTtBQUFBLFFBQ25CLEtBQUssWUFBWTtBQUFBLFFBQ2pCLE1BQU07QUFBQTtBQUdWLFVBQUksS0FBSyxLQUFLLFlBQVk7QUFDdEIsYUFBSyxLQUFLO0FBQUE7QUFBQTtBQUFBOzs7QUNwUHRCLGdDQUF1QyxhQUFLLFdBQVc7QUFBQSxJQUF2RCxjQVpBO0FBWUE7QUFHWSx1QkFBeUI7QUFFekIsb0JBQXFCO0FBRXJCLHFCQUFvQjtBQU1wQixzQkFBVztBQUFBLFFBQ2Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBSUksa0JBQWU7QUErR2Ysc0JBQVc7QUFBQTtBQUFBLElBNUduQixTQUFTLE1BQXFCO0FBQzFCLFVBQUksQ0FBQztBQUFNO0FBQ1gsVUFBSSxDQUFDLEtBQUs7QUFBVSxhQUFLLFdBQVc7QUFDcEMsV0FBSyxPQUFPO0FBQ1osV0FBSyxVQUFVLFFBQVE7QUFDdkIsV0FBSyxXQUFXLGlCQUFTLFVBQVUsTUFBTTtBQUN6QyxVQUFJLENBQUMsS0FBSyxTQUFTLFFBQVE7QUFDdkIsYUFBSyxPQUFPO0FBQUEsYUFDVDtBQUNILGlCQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUN4QixjQUFJLENBQUMsS0FBSyxTQUFTLE1BQU0sS0FBSyxTQUFTLE1BQU0sS0FBSztBQUM5QyxpQkFBSyxPQUFPO0FBQ1o7QUFBQTtBQUFBO0FBQUE7QUFLWixXQUFLO0FBQ0wsV0FBSztBQUFBO0FBQUEsSUFHRCxhQUFhO0FBQ2pCLFVBQUk7QUFDSixZQUFNLFVBQVUsS0FBSyxLQUFLLFNBQVMsS0FBSyxPQUFPO0FBRS9DLFVBQUksV0FBVyxLQUFLLFdBQVc7QUFDM0IsY0FBTSxLQUFLLFVBQVUsY0FDakIsS0FBSyxRQUFRLGNBQWMsSUFBSSxLQUFLLE1BQU0sUUFBUSxHQUFHLFFBQVE7QUFFakUsYUFBSyxVQUFVLFdBQVcsU0FBUyxLQUFLO0FBQ3hDLGdCQUFRLElBQUksSUFBSSxHQUFHLElBQUk7QUFBQTtBQUczQixVQUFJLENBQUMsS0FBSyxTQUFTLEtBQUssT0FBTztBQUMzQixxQkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCLFlBQUksS0FBSyxLQUFLO0FBQU0sZUFBSyxLQUFLO0FBQzlCO0FBQUE7QUFHSixZQUFNLE9BQU8sS0FBSyxLQUFLLFNBQVMsS0FBSztBQUNyQyxXQUFLLFlBQVksS0FBSztBQUN0QixXQUFLLFlBQVksS0FBSztBQUN0QixZQUFNLEtBQUssUUFBUSxjQUNmLEtBQUssVUFBVSxjQUFjLElBQUksS0FBSyxNQUFNLEtBQUssR0FBRyxLQUFLO0FBRzdELFdBQUssUUFBUSxTQUFTO0FBQ3RCLFdBQUssSUFBSSxJQUFJLEdBQUcsSUFBSTtBQUVwQixXQUFLLFVBQVUsU0FBUztBQUN4QixZQUFNLGFBQXlCLElBQUksS0FBSztBQUN4QyxjQUFRLEtBQUs7QUFBQSxhQUNKO0FBQ0QsY0FBSSxLQUFLO0FBQ1QsY0FBSSxLQUFLO0FBQ1QscUJBQVcsTUFBTSxNQUFNO0FBQ3ZCO0FBQUEsYUFDQztBQUNELGNBQUksS0FBSztBQUNULGNBQUksS0FBSztBQUNULHFCQUFXLE1BQU0sTUFBTTtBQUN2QjtBQUFBLGFBQ0M7QUFDRCxjQUFJLEtBQUs7QUFDVCxjQUFJLEtBQUs7QUFDVCxxQkFBVyxNQUFNLE1BQU07QUFDdkI7QUFBQSxhQUNDO0FBQ0QsY0FBSSxLQUFLO0FBQ1QsY0FBSSxLQUFLO0FBQ1QsZUFBSyxVQUFVLFNBQVM7QUFDeEIscUJBQVcsTUFBTSxNQUFNO0FBQ3ZCO0FBQUEsYUFDQztBQUNELGNBQUksS0FBSztBQUNULGNBQUksS0FBSztBQUNULHFCQUFXLE1BQU0sTUFBTTtBQUN2QjtBQUFBLGFBQ0M7QUFDRCxjQUFJLEtBQUs7QUFDVCxjQUFJLEtBQUs7QUFDVCxxQkFBVyxNQUFNLE1BQU07QUFDdkI7QUFBQSxhQUNDO0FBQ0QsY0FBSSxLQUFLO0FBQ1QsY0FBSSxLQUFLO0FBRVQscUJBQVcsTUFBTSxNQUFNO0FBQ3ZCO0FBQUEsYUFDQztBQUNELGNBQUksS0FBSztBQUNULGNBQUksS0FBSztBQUNULHFCQUFXLE1BQU0sTUFBTTtBQUN2QjtBQUFBLGFBQ0M7QUFDRCxjQUFJLEtBQUs7QUFDVCxjQUFJLEtBQUs7QUFDVCxxQkFBVyxNQUFNLE1BQU07QUFDdkI7QUFBQTtBQUVSLFdBQUssTUFBTSxHQUFHLEtBQUssV0FBVyxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLE9BQU8sS0FBSztBQUNoRSxXQUFLLE9BQU8sUUFBUTtBQUNwQixXQUFLLE1BQU0sR0FBRyxLQUFLLFFBQVEsRUFBRSxPQUFPLEtBQUs7QUFDekMsV0FBSyxPQUFPLElBQUksSUFBSSxJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksV0FBVztBQUN6RCxXQUFLLE9BQU8sT0FBTyxLQUFLLFNBQVMsS0FBSztBQUN0QyxXQUFLO0FBQUE7QUFBQSxJQUlULFFBQVEsR0FBZTtBQUNuQixVQUFJLENBQUMsS0FBSztBQUFVO0FBQ3BCLFdBQUssV0FBVztBQUNoQixXQUFLLFNBQVMsS0FBSyxRQUFRO0FBQzNCLGtCQUFZLEtBQ1AsS0FBSztBQUFBLFFBQ0YsS0FBSyxRQUFRO0FBQUEsUUFDYixNQUFNO0FBQUEsVUFDRixNQUFNLEtBQUssU0FBUyxLQUFLO0FBQUE7QUFBQSxTQUdoQyxLQUFLLE1BQU07QUFDUixhQUFLO0FBQ0wsYUFBSyxXQUFXO0FBQUEsU0FFbkIsTUFBTSxNQUFNO0FBQ1QsYUFBSyxXQUFXO0FBQUE7QUFBQTtBQUFBLElBT3BCLGNBQWM7QUFDbEIsV0FBSyxVQUFVLEtBQUssU0FBUyxHQUFHLEtBQUssV0FBVyxFQUFFLFVBQVUsT0FBTyxLQUFLLE1BQU0sR0FDMUUsS0FBSyxXQUNMLEVBQUUsVUFBVSxLQUNaO0FBRUosV0FBSyxRQUFRLEtBQUssTUFBTTtBQUFBO0FBQUEsSUFHNUIsY0FBYztBQXRMbEI7QUF1TFEsaUJBQUssWUFBTCxtQkFBYztBQUFBO0FBQUE7OztBQ3ZLdEIsK0JBQXNDLGFBQUssV0FBVztBQUFBLElBVWxELFNBQVMsR0FBRztBQTFCaEI7QUEyQlEsV0FBSyxPQUFPO0FBQ1osV0FBSyxLQUFLLE9BQU8sWUFBSyxTQUFMLG1CQUFXLFNBQVE7QUFDcEMsVUFBSSxLQUFLLEtBQUssTUFBTTtBQUNoQixhQUFLLFdBQVcsVUFBVTtBQUFBLGFBQ3ZCO0FBQ0gsYUFBSyxXQUFXLFVBQVU7QUFBQTtBQUU5QixVQUFJLEtBQUssS0FBSyxZQUFZO0FBQ3RCLGFBQUssVUFBVSxVQUFVO0FBQUEsYUFDdEI7QUFDSCxhQUFLLFVBQVUsVUFBVTtBQUFBO0FBRzdCLFVBQUksS0FBSyxLQUFLLFFBQVEsS0FBSyxLQUFLLFlBQVk7QUFDeEMsYUFBSyxXQUFXLElBQUk7QUFBQSxhQUNqQjtBQUNILGFBQUssV0FBVyxJQUFJO0FBQUE7QUFHeEIsVUFBSSxpQkFBUyxVQUFVLE9BQU8saUJBQVMsb0JBQW9CLElBQUk7QUFDM0QsYUFBSyxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU07QUFDN0Isa0JBQVEsZUFBZTtBQUFBLFlBQ25CLEtBQUssWUFBWTtBQUFBLFlBQ2pCLE1BQU0sRUFBRSxRQUFRO0FBQUE7QUFHcEIsa0JBQVEsZUFBZTtBQUFBLFlBQ25CLEtBQUssWUFBWTtBQUFBLFlBQ2pCLE1BQU0sRUFBRSxRQUFRO0FBQUE7QUFHcEIsa0JBQVEsZUFBZTtBQUFBLFlBQ25CLEtBQUssWUFBWTtBQUFBLFlBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFFbEIsa0JBQVEsZUFBZTtBQUFBLFlBQ25CLEtBQUssWUFBWTtBQUFBLFlBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU05QixZQUFrQjtBQUNkLFVBQUksaUJBQVMsVUFBVSxPQUFPLGlCQUFTLG9CQUFvQixJQUFJO0FBQzNELFFBQUMsS0FBSyxNQUFNLGVBQWUsVUFBeUIsVUFBVTtBQUFBO0FBQUE7QUFBQSxJQUl0RSxRQUFRLEdBQWU7QUE1RTNCO0FBNkVRLGNBQVEsRUFBRSxPQUFPO0FBQUEsYUFDUjtBQUNELGNBQUksV0FBSyxTQUFMLG1CQUFXLFlBQVk7QUFDdkIsaUJBQUssS0FBSztBQUFBO0FBRWQsdUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUMxQjtBQUFBLGFBQ0M7QUFDRCxjQUFJLFdBQUssU0FBTCxtQkFBVyxNQUFNO0FBQ2pCLGlCQUFLLEtBQUs7QUFBQTtBQUVkLHVCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFDMUI7QUFBQTtBQUFBO0FBQUEsSUFJWixjQUFvQjtBQUNoQixjQUFRLGVBQWU7QUFBQSxRQUNuQixLQUFLLFlBQVk7QUFBQSxRQUNqQixNQUFNO0FBQUE7QUFBQTtBQUFBOzs7QUNyRmxCLGdDQUF1QyxXQUFXO0FBQUEsSUFBbEQsY0FYQTtBQVdBO0FBRVkscUJBQXNCO0FBRXRCLHFCQUFvQjtBQUVwQixzQkFBcUI7QUFFckIsd0JBQXVCO0FBRXZCLDhCQUE2QjtBQUc3Qiw2QkFBMEI7QUFFMUIsc0JBQW9CO0FBQUE7QUFBQSxJQUl0QixTQUFTLEdBQUc7QUFBQTtBQTlCdEI7QUErQlEsYUFBSyxPQUFPO0FBQ1osYUFBSyxTQUFTLFVBQVU7QUFDeEIsYUFBSyxRQUFRLFVBQVU7QUFDdkIsYUFBSyxXQUFXLFVBQVU7QUFDMUIsY0FBTSxLQUFLO0FBRVgsWUFBSSxrQ0FBb0IsY0FBcEIsbUJBQStCLFNBQVM7QUFDeEMsZUFBSyxNQUFNO0FBQ1gsZUFBSyxTQUFTLFVBQVU7QUFDeEIsZUFBSyxRQUFRLFVBQVU7QUFBQSxlQUNwQjtBQUNILGVBQUssU0FBUyxVQUFVO0FBQ3hCLGVBQUssUUFBUSxVQUFVO0FBQ3ZCLGVBQUssV0FBVyxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJbEMsWUFBWTtBQUNSLDBCQUFZLEdBQUcsVUFBVSxlQUFlLE1BQU0sS0FBSztBQUFBO0FBQUEsSUFHdkQsYUFBbUI7QUFJZixXQUFLLGtCQUFrQixLQUFLLFFBQVE7QUFDcEMsV0FBSyxRQUFRLFFBQVE7QUFBQTtBQUFBLElBR2pCLGVBQWU7QUFDbkIsVUFBSSxZQUFZO0FBQ2hCLGNBQVE7QUFBQSxhQUNDLFVBQVU7QUFDWCxzQkFBWTtBQUNaO0FBQUEsYUFDQyxVQUFVO0FBQ1gsc0JBQVk7QUFDWjtBQUFBLGFBQ0MsVUFBVTtBQUNYLHNCQUFZO0FBQ1o7QUFBQTtBQUVSLFVBQUksQ0FBQyxXQUFXO0FBQ1osZUFBTyxhQUFLLEtBQUssU0FBUztBQUFBLFVBQ3RCLE1BQU07QUFBQSxVQUNOLE1BQU0sTUFBTTtBQUNSLG9CQUFRLGVBQWU7QUFBQSxjQUNuQixLQUFLLFlBQVk7QUFBQSxjQUNqQixNQUFNO0FBQUE7QUFFVixxQkFBUztBQUFBO0FBQUE7QUFBQTtBQUlyQixhQUFPO0FBQUE7QUFBQSxJQUdHLFVBQVU7QUFBQTtBQUNwQixlQUFPLElBQUksUUFBUSxDQUFDLFlBQVk7QUFDNUIsc0JBQVksS0FDUCxLQUFLO0FBQUEsWUFDRixLQUFLLFFBQVE7QUFBQSxZQUNiLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFBQSxhQUVwQixLQUFLLENBQUMsTUFBb0I7QUEvRjNDO0FBZ0dvQixrQkFBTSxVQUFVLE9BQ1osa0NBQW9CLFVBQVUsWUFBOUIsbUJBQXVDLFFBQVEsT0FBTztBQUcxRCxnQkFBSSxDQUFDLFNBQVM7QUFDVixzQkFBUTtBQUNSLDBDQUFvQixRQUFRLFdBQVcsRUFBRTtBQUN6QyxpQ0FBVyxVQUFVLEVBQUU7QUFFdkI7QUFBQTtBQUdKLGdCQUFJLE9BQU8sRUFBRSxRQUFRLFFBQVEsT0FBTyxPQUFPLFNBQVM7QUFDaEQsc0JBQVEsZUFBZTtBQUFBLGdCQUNuQixLQUFLLFlBQVk7QUFBQSxnQkFDakIsTUFBTTtBQUFBO0FBRVYsMkJBQUssS0FBSyxTQUFTO0FBQUEsZ0JBQ2YsTUFBTTtBQUFBLGdCQUNOLE1BQU0sTUFBTTtBQUNSLDhDQUFvQixRQUFRLFdBQVcsRUFBRTtBQUN6QywwQkFBUSxlQUFlO0FBQUEsb0JBQ25CLEtBQUssWUFBWTtBQUFBLG9CQUNqQixNQUFNO0FBQUE7QUFFViwyQkFBUztBQUFBO0FBQUE7QUFBQSxtQkFHZDtBQUNILGlDQUFXLFVBQVUsRUFBRTtBQUN2QiwwQ0FBb0IsUUFBUSxXQUFXLEVBQUU7QUFDekMsc0JBQVE7QUFBQTtBQUFBLGFBR2YsTUFBTSxNQUFNO0FBQ1Qsa0JBQU07QUFDTixvQkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLeEIsUUFBUSxHQUFlO0FBQ25CLGNBQVEsRUFBRSxPQUFPO0FBQUEsYUFDUjtBQUNELGVBQUssTUFBTTtBQUNYO0FBQUEsYUFDQztBQUNELGVBQUssaUJBQWlCLFVBQVUsQ0FBQyxLQUFLLGlCQUFpQjtBQUN2RDtBQUFBLGFBQ0M7QUFDRCxrQkFBUSxlQUFlO0FBQUEsWUFDbkIsS0FBSyxZQUFZO0FBQUEsWUFDakIsTUFBTTtBQUFBO0FBRVY7QUFBQTtBQUFBO0FBQUEsSUFJRSxNQUFNLE1BQWU7QUFBQTtBQUMvQixZQUFJLENBQUMsS0FBSztBQUFVO0FBQ3BCLGFBQUssV0FBVztBQUNoQixZQUFJLDRCQUFvQixVQUFVLE9BQU87QUFDckMsc0JBQVksS0FDUCxLQUFLO0FBQUEsWUFDRixLQUFLLFFBQVE7QUFBQSxZQUNiLE9BQU8sQ0FBQyxNQUFNLFNBQVM7QUFDbkIsMENBQW9CO0FBQ3BCLG1CQUFLLFNBQVMsVUFBVTtBQUV4QixtQkFBSyxRQUFRLFVBQVU7QUFBQTtBQUFBLGFBRzlCLEtBQUssQ0FBQyxNQUFlO0FBeEt0QztBQXlLb0IsZ0JBQUksV0FBSyxTQUFMLG1CQUFXO0FBQU0sbUJBQUssS0FBSyxLQUFLO0FBQ3BDLGlCQUFLLFNBQVMsVUFBVTtBQUN4QixpQkFBSyxRQUFRLFVBQVU7QUFDdkIsaUJBQUssV0FBVztBQUNoQixvQkFBUSxlQUFlO0FBQUEsY0FDbkIsS0FBSyxZQUFZO0FBQUEsY0FDakIsTUFBTTtBQUFBLGdCQUNGLFNBQVMsT0FBTyxFQUFFLFNBQVM7QUFBQTtBQUFBLGNBRS9CLFdBQVcsS0FBSztBQUFBLGVBQ2pCLEtBQUssQ0FBQyxTQUFTO0FBQ2Qsa0JBQUksNkJBQU0sTUFBTTtBQUNaLDZCQUFLLEtBQUssU0FBUyxFQUFFLE1BQU0sNEJBQVEsS0FBSztBQUFBLHFCQUNyQztBQUNILG9CQUFJO0FBQU0scUNBQVcsVUFBVSxLQUFLLEtBQUs7QUFBQTtBQUFBO0FBSWpELG9CQUFRLGVBQWU7QUFBQSxjQUNuQixLQUFLLFlBQVk7QUFBQSxjQUNqQixNQUFNLEVBQUUsTUFBTTtBQUFBO0FBQUEsYUFHckIsTUFBTSxNQUFNO0FBQ1QsaUJBQUssV0FBVztBQUNoQixpQkFBSyxTQUFTLFVBQVU7QUFDeEIsaUJBQUssUUFBUSxVQUFVO0FBQ3ZCLGlCQUFLLFdBQVcsVUFBVTtBQUFBO0FBRWxDLGVBQUssV0FBVyxVQUFVO0FBQUEsZUFDdkI7QUFFSCxlQUFLLFdBQVcsVUFBVTtBQUMxQixjQUFJLENBQUMsS0FBSyxpQkFBaUIsU0FBUztBQUNoQyx5QkFBSyxLQUFLLFNBQVM7QUFBQSxjQUNmLE1BQU07QUFBQSxjQUNOLE1BQU0sTUFBTTtBQUNSLDRDQUFvQjtBQUNwQixxQkFBSyxTQUFTLFVBQVU7QUFDeEIscUJBQUssV0FBVztBQUNoQixxQkFBSyxRQUFRLFVBQVU7QUFBQTtBQUFBO0FBRy9CO0FBQUE7QUFHSixjQUFJLFFBQVEsU0FBUyxPQUFPLE1BQU0sY0FDOUIsU0FBUztBQUViLGNBQUksU0FBUyxNQUFNLFNBQVMsS0FBSyxBQUFjLFVBQVUsVUFBeEIsU0FBZ0M7QUFDN0QscUJBQVMsTUFBTTtBQUFBO0FBR25CLGNBQUksV0FBVyxRQUNYLFdBQVcsSUFDWCxTQUFTO0FBQ2IsY0FBSSxRQUFRLENBQUMsVUFBVTtBQUNuQixrQkFBTSxPQUFPLE1BQU0sUUFBUSxlQUFlO0FBQUEsY0FDdEMsS0FBSyxZQUFZO0FBQUEsY0FDakIsTUFBTTtBQUFBLGNBQ04sV0FBVyxLQUFLO0FBQUE7QUFHcEIsZ0JBQUksTUFBTTtBQUNOLGtCQUFJLEtBQUssTUFBTTtBQUNYLDZCQUFLLEtBQUssU0FBUztBQUFBLGtCQUNmLE1BQU0sd0NBQVUsS0FBSztBQUFBLGtCQUNyQixNQUFNLE1BQU07QUFDUiw2QkFBUztBQUFBO0FBQUE7QUFBQSxxQkFHZDtBQUNILDJCQUFXLEtBQUssS0FBSztBQUNyQix5QkFBUyxLQUFLLEtBQUs7QUFDbkIsMkJBQVcsS0FBSyxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBSWpDLGNBQUksQ0FBQyxVQUFVO0FBQ1gseUJBQUssS0FBSyxTQUFTO0FBQUEsY0FDZixNQUFNO0FBQUEsY0FDTixNQUFNLE1BQU07QUFDUixxQkFBSyxXQUFXO0FBQUE7QUFBQTtBQUd4QjtBQUFBO0FBRUosZUFBSyxXQUFXLFVBQVU7QUFDMUIsc0JBQVksS0FDUCxLQUFLO0FBQUEsWUFDRixLQUFLLFFBQVE7QUFBQSxZQUNiLE1BQTJCO0FBQUEsY0FFdkIsTUFBTTtBQUFBLGNBQ047QUFBQSxjQUNBO0FBQUE7QUFBQSxZQUVKLE9BQU8sQ0FBQyxNQUFNLFNBQVM7QUFDbkIsMENBQW9CO0FBQ3BCLG1CQUFLLFNBQVMsVUFBVTtBQUV4QixtQkFBSyxRQUFRLFVBQVU7QUFDdkIsbUJBQUssV0FBVztBQUFBO0FBQUEsYUFHdkIsS0FBSyxDQUFDLE1BQWU7QUFsUnRDO0FBbVJvQixnQkFBSSxXQUFLLFNBQUwsbUJBQVc7QUFBTSxtQkFBSyxLQUFLLEtBQUs7QUFDcEMsaUJBQUssU0FBUyxVQUFVO0FBQ3hCLGlCQUFLLFFBQVEsVUFBVTtBQUN2QixpQkFBSyxXQUFXO0FBS2hCLGdCQUFJLENBQUMsaUJBQVMsYUFBYTtBQUN2QixzQkFBUSxlQUFlO0FBQUEsZ0JBQ25CLEtBQUssWUFBWTtBQUFBLGdCQUNqQixNQUFNO0FBQUEsa0JBQ0YsU0FBUyxPQUFPLEVBQUUsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUl2QyxvQkFBUSxlQUFlO0FBQUEsY0FDbkIsS0FBSyxZQUFZO0FBQUEsY0FDakIsTUFBTTtBQUFBLGdCQUNGLFNBQVMsT0FBTyxFQUFFLFNBQVM7QUFBQTtBQUFBLGNBRS9CLFdBQVcsS0FBSztBQUFBLGVBQ2pCLEtBQUssQ0FBQyxTQUFnQztBQUNyQyxrQkFBSSxNQUFNO0FBQ04sb0JBQUksS0FBSyxNQUFNO0FBQ1gsK0JBQUssS0FBSyxTQUFTO0FBQUEsb0JBQ2YsTUFBTSw0QkFBUSxLQUFLO0FBQUEsb0JBQ25CLE1BQU0sTUFBTTtBQUNSLCtCQUFTO0FBQUE7QUFBQTtBQUFBLHVCQUdkO0FBQ0gscUNBQVcsVUFBVSxLQUFLLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFLM0Msb0JBQVEsZUFBZTtBQUFBLGNBQ25CLEtBQUssWUFBWTtBQUFBLGNBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFBQSxhQUdyQixNQUFNLE1BQU07QUFDVCxpQkFBSyxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUt4QixhQUFhLEdBQUc7QUFDcEIsV0FBSyxRQUFRLFFBQVEsSUFBSSxLQUFLO0FBQUE7QUFBQSxJQUdsQyxjQUFvQjtBQUNoQiwwQkFBWSxJQUFJLFVBQVUsZUFBZSxNQUFNLEtBQUs7QUFBQTtBQUFBOzs7QUMvVDVELG1DQUEwQyxhQUFLLFdBQVc7QUFBQSxJQUExRCxjQVRBO0FBU0E7QUFjWSxvQkFBaUI7QUFBQTtBQUFBLElBR3pCLFNBQVMsR0FBNkM7QUFDbEQsWUFBTSxPQUFPLEVBQUU7QUFDZixXQUFLLE9BQU8sRUFBRTtBQUNkLFdBQUssU0FBUyxFQUFFLEtBQUs7QUFDckIsV0FBSyxZQUFZLGlCQUFpQjtBQUNsQyxXQUFLLE1BQU0sT0FBTyxHQUFHLEtBQUs7QUFDMUIsY0FBUSxJQUFJO0FBQ1osWUFBTSxZQUE4QyxJQUNoRCxZQUE4QztBQUNsRCxVQUFJLGNBQWMsR0FDZCxXQUFXO0FBR2YsWUFBTSxZQUFZLEtBQUssV0FBVyxJQUFJLENBQUMsT0FBWTtBQUMvQyxhQUFLLE1BQU0sWUFBWSxJQUFJO0FBQzNCLGdCQUFRLElBQUk7QUFDWixZQUFJLEdBQUcsTUFBTSxHQUFHO0FBQ1oseUJBQWUsT0FBTyxHQUFHO0FBQ3pCO0FBQUE7QUFHSixZQUFJLE1BQU07QUFDVixrQkFBVSxRQUFRLENBQUMsT0FBTTtBQUNyQixjQUFJLEdBQUUsTUFBTSxHQUFHLElBQUk7QUFDZixrQkFBTTtBQUFBO0FBQUE7QUFJZCxZQUFJLENBQUMsS0FBSztBQUNOLG9CQUFVLEtBQUssRUFBRSxJQUFJLEdBQUcsSUFBSSxRQUFRLE9BQU8sR0FBRztBQUM5QztBQUFBO0FBR0osaUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDdkMsY0FBSSxVQUFVLEdBQUcsTUFBTSxHQUFHLElBQUk7QUFDMUIsc0JBQVUsR0FBRyxVQUFVLE9BQU8sR0FBRztBQUNqQztBQUFBO0FBQUE7QUFBQTtBQUtaLFlBQU0sWUFBWSxLQUFLLE9BQU8sSUFBSSxDQUFDLE9BQVk7QUFDM0MsYUFBSyxNQUFNLFlBQVksSUFBSTtBQUUzQixZQUFJLE1BQU07QUFDVixrQkFBVSxRQUFRLENBQUMsT0FBTTtBQUNyQixjQUFJLEdBQUUsTUFBTSxHQUFHLElBQUk7QUFDZixrQkFBTTtBQUFBO0FBQUE7QUFJZCxZQUFJLENBQUMsS0FBSztBQUNOLG9CQUFVLEtBQUssRUFBRSxJQUFJLEdBQUcsSUFBSSxRQUFRLE9BQU8sR0FBRztBQUM5QztBQUFBO0FBR0osaUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDdkMsY0FBSSxVQUFVLEdBQUcsTUFBTSxHQUFHLElBQUk7QUFDMUIsc0JBQVUsR0FBRyxVQUFVLE9BQU8sR0FBRztBQUNqQztBQUFBO0FBQUE7QUFBQTtBQUtaLFVBQUksT0FBTyxHQUNQLEtBQUs7QUFDVCxlQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQ3ZDLFlBQUksV0FBcUIsS0FBSyxLQUFLO0FBQ25DLFlBQUksS0FBSyxLQUFLLENBQUMsTUFBTTtBQUNqQjtBQUNBLGVBQUs7QUFBQTtBQUVULFlBQUksUUFBUSxLQUFLLEdBQUc7QUFDaEI7QUFDQSxlQUFLO0FBQUE7QUFFVCxpQkFBUyxJQUFJLE1BQU0sS0FBSztBQUN4QixpQkFBUyxJQUFJLE1BQU0sT0FBTztBQUMxQjtBQUNBLFlBQUksUUFBUSxxQkFBYSxNQUFNLFNBQVMsSUFBSSxVQUFVLEdBQUc7QUFDekQsY0FBTSxPQUFPLFNBQVMsZUFBZTtBQUNyQyxhQUFLLE9BQU8sTUFBTTtBQUNsQixhQUFLLE1BQU0sS0FBSztBQUNoQixhQUFLLFVBQVU7QUFDZixRQUFDLFNBQVMsZUFBZSxNQUFxQixPQUFPLElBQUksVUFBVSxHQUFHO0FBQ3RFLGNBQU0sS0FBSyxRQUFRLENBQUMsT0FBTTtBQUN0QixjQUFJLEdBQUUsSUFBSSxNQUFNLG1CQUFXO0FBQVc7QUFDdEMsc0JBQVksR0FBRSxRQUFRLFVBQVUsR0FBRztBQUFBO0FBR3ZDLGFBQUssWUFBWSxTQUFTO0FBQUE7QUFHOUIsVUFBSSxXQUFXO0FBQ2YsV0FBSztBQUNMLGVBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxRQUFRLEtBQUs7QUFDdkMsWUFBSSxXQUF1QixLQUFLLEtBQUs7QUFDckMsWUFBSSxLQUFLLEtBQUssQ0FBQyxVQUFVO0FBQ3JCO0FBQ0EsZUFBSztBQUFBO0FBRVQsWUFBSSxZQUFZLEtBQUssR0FBRztBQUNwQjtBQUNBLGVBQUs7QUFBQTtBQUVULGlCQUFTLElBQUksTUFBTSxLQUFLO0FBQ3hCLGlCQUFTLElBQUksTUFBTSxPQUFPLEtBQUssV0FBVztBQUMxQztBQUVBLFlBQUksUUFBUSxxQkFBYSxNQUFNLFNBQVMsSUFBSSxVQUFVLEdBQUc7QUFDekQsY0FBTSxPQUFPLFNBQVMsZUFBZTtBQUNyQyxhQUFLLE9BQU8sTUFBTTtBQUNsQixhQUFLLE1BQU0sS0FBSztBQUNoQixhQUFLLFVBQVU7QUFDZixRQUFDLFNBQVMsZUFBZSxNQUFxQixPQUFPLElBQUksVUFBVSxHQUFHO0FBTXRFLGFBQUssWUFBWSxTQUFTO0FBQUE7QUFHOUIsV0FBSyxPQUFPLElBQUk7QUFDaEIsV0FBSyxPQUFPLElBQUksTUFBTSxPQUFPO0FBQzdCLFdBQUssU0FBUyxJQUFJLE1BQU0sT0FBTyxLQUFLLFdBQVc7QUFDL0MsV0FBSyxTQUFTLE9BQU8saUNBQVEsNkJBQWM7QUFBQTtBQUFBLElBRy9DLFFBQVEsR0FBZTtBQUNuQixjQUFRLEVBQUUsT0FBTztBQUFBLGFBQ1I7QUFDRCx1QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCO0FBQUEsYUFFQztBQUNELHNCQUFZLEtBQ1AsS0FBSztBQUFBLFlBQ0YsS0FBSyxRQUFRO0FBQUEsWUFDYixNQUFNLEVBQUUsSUFBSSxLQUFLO0FBQUEsYUFFcEIsS0FBSyxNQUFNO0FBQ1IsZ0JBQUksS0FBSyxNQUFNO0FBQ1gsbUJBQUssS0FBSyxLQUFLO0FBQUE7QUFFbkIsaUJBQUssTUFBTSxVQUFVLEdBQUcsTUFBTSxNQUFNO0FBQ2hDLDJCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFBQTtBQUFBO0FBR3RDO0FBQUE7QUFBQTtBQUFBOzs7QUN0S2hCLCtCQUFzQyxXQUFXO0FBQUEsSUFBakQsY0FUQTtBQVNBO0FBRVksa0JBQWtCO0FBR2xCLHNCQUF1QjtBQUV2QixzQkFBNkI7QUFBQTtBQUFBLElBRXJDLFlBQVk7QUFDUixXQUFLLEtBQUssaUJBQWlCO0FBQzNCLFdBQUssS0FBSyxnQkFBZ0IsSUFBSSxLQUFLLFFBQVEsTUFBTSxLQUFLO0FBQUE7QUFBQSxJQUcxRCxTQUFTLE9BQXlCLElBQUk7QUFDbEMsV0FBSyxXQUFXO0FBQ2hCLFdBQUs7QUFBQTtBQUFBLElBR0QsaUJBQWlCO0FBQ3JCLFdBQUssS0FBSyxRQUFRLEtBQUssU0FBUyxLQUFLLENBQUMsR0FBRyxNQUFNO0FBRTNDLGVBQU8sRUFBRSxhQUFjLEdBQUUsT0FBTyxNQUFVLEtBQU0sR0FBRSxhQUFjLEdBQUUsT0FBTyxNQUFVO0FBQUE7QUFHdkYsV0FBSyxTQUFTLFVBQVUsQ0FBQyxLQUFLLEtBQUssTUFBTTtBQUFBO0FBQUEsSUFHckMsV0FBVyxNQUFrQixPQUFlO0FBQ2hELFlBQU0sT0FBTyxLQUFLLFNBQVM7QUFDM0IsTUFBQyxLQUFLLGVBQWUsU0FBd0IsT0FBTztBQUNwRCxNQUNJLEtBQUssZUFBZSxRQUN0QixPQUFPLEdBQUcsS0FBSztBQUNqQixNQUFDLEtBQUssZUFBZSxRQUF1QixPQUFPLEdBQUcsSUFBSSxLQUN0RCxLQUFLLFlBQ1AsZUFBZSxTQUFTLEVBQUUsUUFBUTtBQUVwQyxNQUFDLEtBQUssZUFBZSxhQUE0QixVQUFVLENBQUMsS0FBSztBQUVqRSxXQUFLLGFBQWE7QUFBQTtBQUFBLElBR3RCLFFBQVEsR0FBZTtBQUNuQixVQUFJLEVBQUUsT0FBTyxLQUFLLFFBQVEsVUFBVSxJQUFJO0FBQ3BDLG9CQUFZLEtBQ1AsS0FBSztBQUFBLFVBQ0YsS0FBSyxRQUFRO0FBQUEsVUFDYixNQUFNO0FBQUEsWUFDRixJQUFJLEVBQUUsT0FBTyxjQUFjO0FBQUE7QUFBQSxXQUdsQyxLQUFLLE1BQU07QUFDUixZQUFFLE9BQU8sY0FBYyxPQUFPO0FBQzlCLGVBQUssS0FBSztBQUNWLDRCQUFVO0FBQ1YsdUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTSxjQUFjO0FBQUEsWUFDbkMsTUFBTTtBQUFBLGNBQ0YsTUFBTSxFQUFFLE9BQU87QUFBQSxjQUNmLE1BQU0sQ0FBQyxXQUFtQjtBQUN0Qix5QkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFNBQVMsUUFBUSxLQUFLO0FBQzNDLHNCQUFJLEtBQUssU0FBUyxHQUFHLE1BQU0sUUFBUTtBQUMvQix5QkFBSyxTQUFTLE9BQU8sR0FBRztBQUN4QjtBQUFBO0FBQUE7QUFHUixxQkFBSyxLQUFLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9sQyxjQUFRLEVBQUUsT0FBTztBQUFBLGFBQ1I7QUFDRCxzQkFBWSxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQ2pDO0FBQUE7QUFBQTtBQUFBOzs7QUNyRmhCLGdDQUF1QyxLQUFLLE9BQU87QUFBQSxJQVUvQyxjQUFjO0FBQ1Y7QUFUSSxnQkFBYTtBQUViLGdCQUFhO0FBRWIsbUJBQWdCO0FBRWhCLGtCQUFlO0FBQUE7QUFBQSxJQU12QixXQUFpQjtBQUNiLFVBQUksT0FBTyxLQUFLO0FBQ2hCLFdBQUssUUFBUTtBQUNiLFVBQUksU0FBUyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsS0FBSztBQUNsQyxVQUFJLFFBQVEsT0FBTyxLQUFLO0FBQ3hCLFdBQUssTUFBTSxHQUFHLE1BQU0sRUFBRSxPQUFPLEtBQUssS0FBSyxNQUFNLE1BQU07QUFDbkQsV0FBSyxNQUFNLEdBQ1AsTUFDQSxFQUFFLEdBQUcsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUN0QixPQUFPLEtBQUssT0FDWixNQUNBLEtBQUssUUFBUSxPQUFPLE1BQU0sTUFBTTtBQUM1QixhQUFLLElBQUksT0FBTyxHQUFHLE9BQU87QUFDMUIsYUFBSztBQUFBLFVBRVQ7QUFBQTtBQUFBLElBSVIsWUFBa0I7QUFBQTtBQUFBOzs7QUNyQnRCLGdDQUF1QyxhQUFLLFdBQVc7QUFBQSxJQUF2RCxjQVpBO0FBWUE7QUFFWSx1QkFBdUI7QUFHdkIsd0JBQXFCO0FBRXJCLHVCQUFvQjtBQUVwQixxQkFBb0I7QUFBQTtBQUFBLElBSzVCLFdBQVc7QUFDUCxXQUFLLFdBQVcscUJBQWEsTUFBTSxTQUFTO0FBQzVDLFVBQUksYUFBYSxpQkFBUyxjQUFjO0FBQ3hDLFdBQUssU0FBUyxLQUFLLENBQUMsR0FBRyxNQUFNO0FBRXpCLGVBQ0ksRUFBRSxLQUFNLEdBQUUsTUFBTSxhQUFhLE1BQU8sS0FBTSxHQUFFLEtBQU0sR0FBRSxNQUFNLGFBQWEsTUFBTztBQUFBO0FBR3RGLFdBQUssVUFBVSxRQUFRLEtBQUs7QUFDNUIsV0FBSyxVQUFVLGdCQUFnQixJQUFJLEtBQUssUUFBUSxNQUFNLEtBQUs7QUFDM0QsV0FBSyxVQUFVLGlCQUFpQjtBQUNoQyxVQUFJLFNBQWlCO0FBQ3JCLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxTQUFTLFFBQVEsS0FBSztBQUUzQyxZQUFJLGFBQWE7QUFDakIsYUFBSyxTQUFTLEdBQUcsVUFBVSxRQUFRLENBQUMsTUFBTTtBQUN0QyxZQUFFLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTTtBQUN4QixnQkFBSSxFQUFFLElBQUksT0FBTyxtQkFBVyxXQUFXO0FBQ25DLDRCQUFjLEVBQUUsUUFBUSxFQUFFO0FBQUE7QUFBQTtBQUFBO0FBS3RDLGtCQUNJLEtBQUssU0FBUyxHQUFHLFlBQVksUUFDN0IsYUFDQSxLQUFLLE1BQU0sYUFBYSxLQUFLLFNBQVMsR0FBRztBQUFBO0FBSWpELFVBQUksYUFBYSxxQkFBYSxNQUFNLFVBQVUsSUFBSSxjQUFjO0FBRWhFLE1BQUMsS0FBSyxRQUFRLFdBQVcsR0FBa0IsT0FBTztBQUVsRCxNQUFDLEtBQUssUUFBUSxXQUFXLEdBQWtCLE9BQU8sR0FBRztBQUFBO0FBQUEsSUFNakQsV0FBVyxNQUFrQixHQUFXO0FBbkVwRDtBQW9FUSxVQUFJLElBQUksS0FBSyxTQUFTLElBQ2xCLFFBQ0EsY0FBc0IsR0FDdEIscUJBQTZCLEdBQzdCLFdBQVcsR0FDWCxXQUFXLEdBQ1gsV0FBVyxHQUNYLFlBQVksS0FBSyxlQUFlLGVBQ2hDLFdBQVcsS0FBSyxlQUFlO0FBQ25DLGVBQVMsT0FBTyxHQUFHLEVBQUU7QUFFckIsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDeEIsWUFBSSxPQUFPLEtBQUssZUFBZSxVQUFVO0FBQ3pDLFlBQUksRUFBRSxVQUFVLElBQUk7QUFDaEIscUJBQVcsZ0NBQWlCLE9BQU8sRUFBRSxVQUFVLEdBQUcsTUFBTSxRQUE3QyxtQkFBa0QsVUFBUztBQUN0RSxxQkFBVyxFQUFFLFVBQVUsR0FBRztBQUUxQixjQUFJLFlBQVksVUFBVTtBQUN0QjtBQUFBO0FBR0osVUFBQyxLQUFLLGVBQWUsUUFBdUIsT0FBTyxFQUFFLFVBQVUsR0FBRyxNQUFNO0FBQ3hFLGNBQUksRUFBRSxLQUFLLGlCQUFTLGFBQWEsR0FBRztBQUNoQyxZQUFDLEtBQUssZUFBZSxPQUFzQixPQUFPLEdBQUcsWUFBWTtBQUNqRSxZQUFDLEtBQUssZUFBZSxPQUFzQixRQUFRO0FBQUEsaUJBQ2hEO0FBQ0gsWUFBQyxLQUFLLGVBQWUsT0FBc0IsT0FBTyxHQUFHLFlBQVk7QUFDakUsWUFBQyxLQUFLLGVBQWUsT0FBc0IsUUFDdkMsS0FBTSxZQUFXLFdBQVcsSUFBSSxJQUFJLFdBQVc7QUFBQTtBQUd2RCxlQUFLLFVBQVU7QUFFZixZQUFFLFVBQVUsR0FBRyxNQUFNLEtBQUssUUFBUSxDQUFDLE1BQU07QUFDckMsZ0JBQUksRUFBRSxJQUFJLE9BQU8sbUJBQVcsUUFBUTtBQUNoQyxrQkFBSSxDQUFDLFFBQVE7QUFDVCx5QkFBUztBQUFBO0FBRWIsNkJBQWUsRUFBRSxRQUFRLEVBQUUsVUFBVSxHQUFHO0FBQUEsbUJBQ3JDO0FBQ0gsb0NBQXNCLEVBQUUsUUFBUSxFQUFFLFVBQVUsR0FBRztBQUFBO0FBQUE7QUFBQSxlQUdwRDtBQUNILGVBQUssVUFBVTtBQUFBO0FBQUE7QUFJdkIsVUFBSSxVQUFVLEtBQUssZUFBZTtBQUNsQyxVQUFJLE1BQU0sS0FBSyxlQUFlLFFBQzFCLGFBQWEsS0FBSyxlQUFlLFdBQ2pDLFVBQVUsS0FBSyxlQUFlLGFBQzlCLGFBQWEsS0FBSyxlQUFlLGdCQUNqQyxTQUFTLEtBQUssZUFBZTtBQUNqQyxpQkFBVyxVQUFVO0FBQ3JCLGNBQVEsVUFBVTtBQUNsQixjQUFRLFVBQVU7QUFDbEIsVUFBSSxVQUFVO0FBQ2QsZ0JBQVUsSUFBSTtBQUNkLGdCQUFVLFVBQVU7QUFDcEIsYUFBTyxVQUFVO0FBQ2pCLGVBQVMsVUFBVTtBQUNuQixpQkFBVyxVQUFVO0FBQ3JCLFVBQUksRUFBRSxLQUFLLGlCQUFTLGFBQWEsR0FBRztBQUVoQyxZQUFJLE9BQU8sS0FBSztBQUNoQixZQUFJLFNBQVM7QUFDYixZQUFJLEVBQUUsYUFBYTtBQUNmLGNBQUksVUFBVTtBQUNkLFVBQUMsUUFBUSxlQUFlLFFBQXVCLE9BQU8sRUFBRSxZQUFZLElBQUk7QUFDeEUsVUFBQyxRQUFRLGVBQWUsU0FBd0IsT0FBTyxJQUNuRCxFQUFFLFlBQVksUUFDZCxxQkFDQSxLQUFLLE1BQU0scUJBQXFCLEVBQUU7QUFFdEMsa0JBQVEsVUFBVTtBQUFBLGVBQ2Y7QUFDSCxjQUFJLFVBQVU7QUFBQTtBQUFBLGFBRWY7QUFDSCxZQUFJLEVBQUUsTUFBTSxpQkFBUyxhQUFhLEdBQUc7QUFFakMsY0FBSSxFQUFFLGFBQWE7QUFDZixvQkFBUSxVQUFVO0FBQ2xCLG1CQUFPLFVBQVU7QUFDakIsZ0JBQUksVUFBVTtBQUVkLHFCQUFTLFVBQVU7QUFDbkIsWUFBQyxRQUFRLGVBQWUsUUFBdUIsT0FBTyxFQUFFLFlBQVksSUFBSTtBQUN4RSxZQUFDLFFBQVEsZUFBZSxTQUF3QixPQUFPLElBQ25ELEVBQUUsWUFBWSxRQUNkLHFCQUNBLEtBQUssTUFBTSxxQkFBcUIsRUFBRTtBQUV0QyxvQkFBUSxVQUFVO0FBQUEsaUJBQ2Y7QUFDSCxnQkFBSSxPQUFPLEtBQUs7QUFBQTtBQUdwQixjQUFJLFlBQVksRUFBRSxVQUFVLFFBQVE7QUFDaEMsdUJBQVcsVUFBVTtBQUNyQixzQkFBVSxVQUFVO0FBQ3BCLG9CQUFRLFVBQVU7QUFBQTtBQUFBLGVBRW5CO0FBQ0gsa0JBQVEsSUFBSTtBQUdaLGNBQUksU0FBUztBQUNiLGNBQUksVUFBVTtBQUNkLHFCQUFXLFVBQVU7QUFDckIsY0FBSSxFQUFFLGFBQWE7QUFDZixzQkFBVSxJQUFJO0FBQUEsaUJBQ1g7QUFDSCxzQkFBVSxJQUFJO0FBQUE7QUFBQTtBQUFBO0FBSTFCLFVBQUksUUFBUTtBQUNSLFFBQUMsVUFBVSxlQUFlLFFBQXVCLE9BQU8sT0FBTyxJQUFJO0FBQ25FLFFBQUMsVUFBVSxlQUFlLFNBQXdCLE9BQU8sSUFDckQsY0FBYyxLQUFLLE1BQU0sY0FBYyxFQUFFO0FBQUE7QUFBQTtBQUFBLElBS3JELFFBQVEsR0FBZTtBQUNuQixjQUFRLEVBQUUsT0FBTztBQUFBLGFBQ1I7QUFDRCx1QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCO0FBQUEsYUFDQztBQUNELG1CQUFTLEtBQUssaUJBQWlCO0FBQy9CLHVCQUFLLFlBQVksTUFBTSxVQUFVO0FBQ2pDLHVCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFDMUI7QUFBQTtBQUFBO0FBQUE7OztBQ3ZNaEIsK0JBQXNDLGFBQUssV0FBVztBQUFBLElBTWxELGFBQWE7QUFBQTtBQUFBLElBRWIsU0FBUyxNQUFzQztBQUUzQyxVQUFJLDZCQUFNLE1BQU07QUFDWixhQUFLLEtBQUs7QUFBQTtBQUFBO0FBQUEsSUFJbEIsTUFBTSxNQUFnQjtBQUNsQixXQUFLLFFBQVEsSUFBSTtBQUNqQixXQUFLLFNBQVMsSUFBSTtBQUNsQixXQUFLLFFBQVEsUUFBUTtBQUNyQixXQUFLLFNBQVMsUUFBUTtBQUN0QixXQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsRUFBRSxHQUFHLEdBQUcsT0FBTyxLQUFLO0FBQ2hELFdBQUssTUFBTSxHQUNQLEtBQUssVUFDTCxFQUFFLEdBQUcsR0FBRyxPQUFPLEtBQ2YsS0FDQSxNQUNBLEtBQUssUUFBUSxPQUFPLE1BQU0sTUFBTTtBQUM1QixZQUFJO0FBQU07QUFBQTtBQUFBO0FBQUEsSUFLdEIsS0FBSyxNQUFnQjtBQUNqQixXQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsRUFBRSxHQUFHLE1BQU0sT0FBTyxLQUFLO0FBQ25ELFdBQUssTUFBTSxHQUNQLEtBQUssVUFDTCxFQUFFLEdBQUcsTUFBTSxPQUFPLEtBQ2xCLEtBQ0EsTUFDQSxLQUFLLFFBQVEsT0FBTyxNQUFNLE1BQU07QUFDNUIsWUFBSTtBQUFNO0FBQ1YscUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUFBO0FBQUE7QUFBQTs7O0FDcEMxQyxrQ0FBeUMsYUFBSyxXQUFXO0FBQUEsSUFBekQsY0FUQTtBQVNBO0FBRVksdUJBQXNCO0FBRXRCLHVCQUFzQjtBQUV0Qix3QkFBeUI7QUFFekIsc0JBQXVCO0FBQUE7QUFBQSxJQUkvQixXQUFXO0FBQ1AsV0FBSztBQUNMLFdBQUs7QUFDTCxjQUFRLGVBQWU7QUFBQSxRQUNuQixLQUFLLFlBQVk7QUFBQSxRQUNqQixNQUFNLEVBQUUsUUFBUTtBQUFBO0FBR3BCLGNBQVEsZUFBZTtBQUFBLFFBQ25CLEtBQUssWUFBWTtBQUFBLFFBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFHbEIsV0FBSyxRQUFRLE9BQU8sMkJBQU8saUJBQVM7QUFFcEMsbUJBQUssbUJBQ0EsTUFBTSxrQkFBVSxNQUNoQixJQUFJLFVBQVUsQ0FBQyxNQUFNO0FBQ2xCLFlBQUk7QUFBRyxlQUFLLFdBQVcsT0FBTztBQUFBLFNBRWpDLElBQUksWUFBWSxDQUFDLE1BQU07QUFDcEIsYUFBSyxTQUFTLE9BQU87QUFBQTtBQUFBO0FBQUEsSUFJakMsUUFBUSxHQUFlO0FBQ25CLGNBQVEsSUFBSSxFQUFFLE9BQU87QUFDckIsY0FBUSxFQUFFLE9BQU87QUFBQSxhQUNSO0FBQ0QsdUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUMxQjtBQUFBLGFBRUM7QUFDRCx1QkFBSyxNQUFNLFVBQVUsWUFBSSxPQUFPO0FBQ2hDLHVCQUFLLE1BQU0sYUFBYSxDQUFDLGFBQUssTUFBTTtBQUNwQyxzQ0FBb0IsUUFBUSxTQUFTLGFBQUssTUFBTTtBQUVoRCxlQUFLO0FBRUw7QUFBQSxhQUNDO0FBQ0QsdUJBQUssTUFBTSxVQUFVLFlBQUksT0FBTztBQUNoQyx1QkFBSyxNQUFNLGFBQWEsQ0FBQyxhQUFLLE1BQU07QUFDcEMsc0NBQW9CLFFBQVEsU0FBUyxhQUFLLE1BQU07QUFFaEQsZUFBSztBQUVMO0FBQUEsYUFFQztBQUNELHVCQUFLLEtBQUssU0FBUztBQUFBLFlBQ2YsTUFBTTtBQUFBLFlBQ04sTUFBTSxNQUFNO0FBQ1IsMENBQW9CLFFBQVEsV0FBVztBQUN2QywwQ0FBb0IsUUFBUSxTQUFTO0FBQ3JDLHNDQUFnQjtBQUNoQixtQkFBSyxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU07QUFDaEMsNkJBQUssS0FBSztBQUNWLDZCQUFLLEtBQUssS0FBSyxZQUFJLE1BQU0sV0FBVztBQUFBLGtCQUNoQyxNQUFNO0FBQUEsb0JBQ0YsTUFBTSxNQUFNO0FBQ1IsbUNBQUssWUFBWSxNQUFNLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFNckQsWUFBWSxNQUFNO0FBQUE7QUFBQTtBQUV0QjtBQUFBLGFBQ0M7QUFFRCxrQkFBUSxlQUFlLEVBQUUsS0FBSyxZQUFZLGtCQUFrQixNQUFNO0FBQ2xFO0FBQUEsYUFDQztBQUVELGtCQUFRLGVBQWUsRUFBRSxLQUFLLFlBQVksa0JBQWtCLE1BQU07QUFDbEU7QUFBQSxhQUNDO0FBQ0QsdUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTTtBQUN6QjtBQUFBLGFBQ0M7QUFDRCxlQUFLO0FBQ0w7QUFBQTtBQUFBO0FBQUEsSUFJSixPQUFPO0FBQ1gsVUFBSSxJQUFzQixTQUFTLGNBQWM7QUFDakQsZUFBUyxLQUFLLFlBQVk7QUFDMUIsUUFBRSxRQUFRLGlCQUFTO0FBQ25CLFFBQUU7QUFDRixlQUFTLFlBQVk7QUFDckIsUUFBRTtBQUNGLG1CQUFLLEtBQUssU0FBUyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxNQUFNO0FBQUE7QUFBQTtBQUFBLElBRzNDLGNBQWM7QUFDbEIsWUFBTSxNQUFNLEtBQUssVUFBVSxlQUFlO0FBQzFDLFlBQU0sT0FBTyxJQUFJLGVBQWU7QUFFaEMsVUFBSSxRQUFRLGFBQUssTUFBTTtBQUN2QixjQUFRLElBQUk7QUFFWixXQUFLLElBQUksQ0FBQyxRQUFRLE1BQU07QUFDeEIsV0FBSyxPQUFPLENBQUMsUUFBUSw0QkFBNEI7QUFDakQsVUFBSSxPQUFPLENBQUMsUUFBUSwwQkFBMEI7QUFBQTtBQUFBLElBRzFDLGNBQWM7QUFDbEIsWUFBTSxNQUFNLEtBQUssVUFBVSxlQUFlO0FBQzFDLFlBQU0sT0FBTyxJQUFJLGVBQWU7QUFDaEMsVUFBSSxRQUFRLGFBQUssTUFBTTtBQUN2QixXQUFLLElBQUksQ0FBQyxRQUFRLE1BQU07QUFDeEIsV0FBSyxPQUFPLENBQUMsUUFBUSw0QkFBNEI7QUFDakQsVUFBSSxPQUFPLENBQUMsUUFBUSwwQkFBMEI7QUFBQTtBQUFBLElBR2xELGNBQW9CO0FBQ2hCLGNBQVEsZUFBZTtBQUFBLFFBQ25CLEtBQUssWUFBWTtBQUFBLFFBQ2pCLE1BQU07QUFBQTtBQUFBO0FBQUE7OztBQy9IbEIsMEJBQWtCO0FBQUEsSUFBbEIsY0FmQTtBQWlCSSxrQkFBdUI7QUFBQTtBQUFBLElBS3ZCLE9BQU87QUFDSCwyQkFBYSxNQUFNLFFBQVEsS0FBSyxRQUFRLENBQUMsTUFBTTtBQUMzQyxhQUFLLEtBQUssS0FBSztBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS2xCLFFBQVE7QUFDSixXQUFLLEtBQUssU0FBUztBQUFBO0FBQUE7QUFJM0IsTUFBTyxzQkFBUSxJQUFJOzs7QUNWbkIsK0JBQXNDLFdBQVc7QUFBQSxJQUFqRCxjQTFCQTtBQTBCQTtBQUVZLHNCQUFzQjtBQUV0Qix1QkFBd0I7QUFFeEIsdUJBQXVCO0FBSXZCLHNCQUF1QjtBQUV2Qix3QkFBeUI7QUFFekIsMkJBQTRCO0FBRTVCLHdCQUF1QjtBQUV2Qix3QkFBeUI7QUFJekIsd0JBQXlCO0FBRXpCLHNCQUF1QjtBQUl2QixxQkFBMEI7QUFFMUIscUJBQXNCO0FBRXRCLHFCQUFzQjtBQUV0Qix5QkFBNkI7QUFFN0IsdUJBQXdCO0FBRXhCLHFCQUFzQjtBQUV0QixvQkFBcUI7QUFJckIseUJBQTZCO0FBRTdCLHVCQUF1QjtBQUV2Qix3QkFBeUI7QUFFekIsMEJBQXlCO0FBRXpCLDBCQUF5QjtBQUV6QiwyQkFBb0Q7QUFFcEQsOEJBQTJCO0FBRTNCLHVCQUFvQjtBQUdwQiwyQkFBNEI7QUFBQSxRQUNoQyxDQUFDLDRCQUE0QjtBQUFBLFFBQzdCLENBQUMsMEJBQTBCO0FBQUEsUUFDM0IsQ0FBQyw0QkFBNEI7QUFBQSxRQUM3QixDQUFDLDJCQUEyQjtBQUFBO0FBR3hCLCtCQUE0QjtBQUU1QixpQ0FBOEI7QUFFOUIsMEJBQXlCLENBQUMsNkJBQTZCO0FBR3ZELDRCQUF5QjtBQUd6QixxQkFBbUI7QUFnbEJuQixzQkFBb0I7QUFpRHBCLHNCQUFvQjtBQUFBO0FBQUEsSUEvbkI1QixZQUFZO0FBQ1IsV0FBSyxTQUFTLGdCQUFnQixJQUFJLEtBQUssUUFBUSxNQUFNLEtBQUs7QUFDMUQsV0FBSyxTQUFTLGdCQUFnQixJQUFJLEtBQUssUUFBUSxNQUFNLEtBQUs7QUFDMUQsV0FBSyxTQUFTLGlCQUFpQjtBQUcvQixXQUFLLFVBQVUsZ0JBQWdCLElBQUksS0FBSyxRQUFRLE1BQU0sS0FBSztBQUMzRCxXQUFLLFVBQVUsZ0JBQWdCLElBQUksS0FBSyxRQUFRLE1BQU0sS0FBSztBQUUzRCxtQkFBSyxtQkFBbUIsTUFBTSxrQkFBVSxNQUFNLElBQUksV0FBVyxDQUFDLE1BQU07QUFDaEUsYUFBSyxZQUFZLFFBQVE7QUFDekIsZ0JBQVEsSUFBSSxxQkFBYSxNQUFNO0FBRS9CLFlBQUksYUFBYSxxQkFBYSxNQUFNLFVBQVUsSUFBSSxjQUFjO0FBQ2hFLGFBQUssV0FBVyxPQUFPLFVBQVMsUUFBTyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU8sR0FDNUUsV0FDQSxNQUFNO0FBQUE7QUFBQTtBQUFBLElBSW5CLFNBQVMsR0FBaUI7QUFDdEIsV0FBSyxPQUFPO0FBQ1osV0FBSyxvQkFBb0Isd0JBQUcsT0FBTTtBQUVsQyxXQUFLLGdCQUFnQixxQkFBYSxNQUFNLFVBQVUsSUFBSSxvQkFBb0I7QUFDMUUsV0FBSztBQUVMLFdBQUssV0FBVztBQUNoQixrQkFBWSxLQUNQLEtBQUssRUFBRSxLQUFLLFFBQVEsb0JBQ3BCLEtBQUssQ0FBQyxNQUFzQjtBQUN6QixhQUFLLFdBQVc7QUFDaEIsYUFBSyxZQUFZLEVBQUUsS0FBSztBQUFBLFNBRTNCLE1BQU0sTUFBTTtBQUNULGFBQUssV0FBVztBQUFBO0FBQUE7QUFBQSxJQVE1QixTQUFTLEdBQUc7QUFDUixXQUFLLHNCQUFzQjtBQUFBO0FBQUEsSUFPdkIsY0FBYztBQUNsQixVQUFJLEtBQUsscUJBQXFCLEdBQUc7QUFDN0IsZUFBTyxxQkFBYTtBQUFBO0FBRXhCLFVBQUksS0FBSyxxQkFBcUIsR0FBRztBQUM3QixZQUFJLENBQUMsb0JBQVksS0FBSztBQUFRLDhCQUFZO0FBQzFDLGVBQU8sb0JBQVksS0FBSyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsS0FBSyxXQUFXLEVBQUUsS0FBSztBQUFBO0FBQUE7QUFBQSxJQVVoRSxXQUFXLE1BQWtCLE9BQU87QUFDeEMsVUFBSSxJQUFJLEtBQUssY0FBYztBQUMzQixVQUFJLFdBQVcsS0FBSyxlQUFlLFNBQy9CLFdBQVcsS0FBSyxlQUFlO0FBQ25DLFVBQUksQ0FBQztBQUFHLGVBQU8sUUFBUSxLQUFLO0FBQzVCLFVBQUksRUFBRSxNQUFNO0FBQ1IsaUJBQVMsVUFBVTtBQUNuQixpQkFBUyxTQUFTO0FBQ2xCLGlCQUFTLFVBQVU7QUFDbkIsaUJBQVMsU0FBUztBQUFBLGFBQ2Y7QUFDSCxpQkFBUyxVQUFVO0FBQ25CLGlCQUFTLFNBQVM7QUFDbEIsaUJBQVMsVUFBVTtBQUNuQixpQkFBUyxTQUFTO0FBRWxCLFlBQUksUUFBUSxHQUNSLE9BQU87QUFDWCxZQUFJLEtBQUsscUJBQXFCLEdBQUc7QUFDN0Isa0JBQW9CLEVBQUUsS0FBTSxXQUFXO0FBQ3ZDLGlCQUFtQixFQUFFLEtBQU0sV0FBVyxJQUFJO0FBQUEsZUFDdkM7QUFDSCxrQkFBbUIsRUFBRSxLQUFNLEtBQUs7QUFDaEMsaUJBQWtCLEVBQUUsS0FBTSxLQUFLLElBQUk7QUFBQTtBQUd2QyxRQUFDLFNBQVMsZUFBZSxPQUF5QixRQUFRLFFBQVE7QUFDbEUsUUFBQyxTQUFTLGVBQWUsYUFBNEIsT0FBTztBQUFBO0FBR2hFLE1BQUMsS0FBSyxlQUFlLFFBQXVCLE9BQU8sRUFBRSxLQUFLO0FBQzFELE1BQUMsS0FBSyxlQUFlLFFBQXVCLE9BQ3hDLEVBQUUsS0FBSyxPQUFRLE1BQUssb0JBQW9CLEtBQUs7QUFFakQsVUFBSSxTQUFTLEtBQUsscUJBQXFCO0FBQ25DLGFBQUssT0FBTyxLQUFLLGFBQWE7QUFDOUIsYUFBSztBQUNMLFlBQUksQ0FBQyxLQUFLLFNBQVM7QUFDZix1QkFBSyxNQUFNLFVBQVUsWUFBSSxPQUFPO0FBQUE7QUFFcEMsYUFBSyxVQUFVO0FBQUEsYUFDWjtBQUNILGFBQUssT0FBTyxLQUFLLGFBQWE7QUFBQTtBQUFBO0FBQUEsSUFPOUIsbUJBQW1CO0FBOU4vQjtBQStOUSxVQUFJLElBQUksS0FBSyxjQUFjLEtBQUs7QUFDaEMsVUFBSSxLQUFLLHNCQUFzQixHQUFHO0FBRTlCLFFBQUMsS0FBSyxTQUFTLE9BQW9CLFVBQVU7QUFDN0MsYUFBSyxTQUFTLE9BQU8sRUFBRSxLQUFLLEtBQUssUUFBUSxLQUFnQixFQUFFLEtBQU0sV0FBVztBQUM1RSxhQUFLLFNBQVMsVUFBVTtBQUN4QixZQUFJLE9BQU0sS0FBSyxXQUFXLGVBQWU7QUFDekMsUUFBQyxLQUFJLGVBQWUsUUFBdUIsT0FBa0IsRUFBRSxLQUFNLEtBQUssSUFBSTtBQUM5RSxRQUFDLEtBQUksZUFBZSxTQUEyQixRQUNoQyxFQUFFLEtBQU0sS0FBSyxRQUFRO0FBRXBDO0FBQUE7QUFHSixVQUFJLE9BQU8sRUFBRTtBQUNiLE1BQUMsS0FBSyxTQUFTLE9BQW9CLFVBQVU7QUFDN0MsV0FBSyxTQUFTLFVBQVU7QUFDeEIsV0FBSyxTQUFTLE9BQU8sS0FBSztBQUMxQixXQUFLLFdBQVcsT0FBTyxNQUFNLGNBQWMsS0FBSztBQUdoRCxXQUFLLFdBQVcsVUFBVSxDQUFDLEVBQUU7QUFLN0IsV0FBSyxXQUFXLFVBQVUsRUFBRTtBQUM1QixXQUFLLFdBQVcsU0FBUyxFQUFFO0FBQzNCLFVBQUksV0FBVyxLQUFLO0FBQ3BCLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQ3hCLFlBQUksVUFBVSxLQUFLLGNBQWMsV0FBVyxJQUN4QyxPQUFPLE1BQ1AsUUFBUSxHQUNSLFdBQVcsU0FBUyxJQUFJO0FBQzVCLFlBQUksTUFBTSxHQUFHO0FBQ1Qsa0JBQVEsS0FBSztBQUNiLGlCQUFPLEtBQUs7QUFBQSxtQkFDTCxVQUFVO0FBQ2pCLGlCQUFPLFNBQVMsSUFBSTtBQUNwQixrQkFBUSxTQUFTLFFBQVEsS0FBSztBQUFBO0FBR2xDLFFBQUMsUUFBUSxlQUFlLFFBQXVCLE9BQU87QUFDdEQsUUFBQyxRQUFRLGVBQWUsU0FBd0IsT0FBTyxNQUFNO0FBQUE7QUFHakUsVUFBSSxNQUFNLEtBQUssV0FBVyxlQUFlLGNBQWMsZUFBZTtBQUV0RSxNQUFDLElBQUksZUFBZSxRQUF1QixPQUFPLGlCQUFLLGdCQUFMLG1CQUFrQixRQUFsQixtQkFBdUI7QUFDekUsTUFBQyxJQUFJLGVBQWUsU0FBMkIsUUFBUSxZQUFLLGdCQUFMLG1CQUFrQixTQUFRO0FBQUE7QUFBQSxJQUdyRixRQUFRLEdBQWU7QUFuUjNCO0FBcVJRLGNBQVEsRUFBRSxPQUFPO0FBQUEsYUFDUjtBQUNELHNCQUFZLEtBQUssTUFBTSxZQUFJLE1BQU07QUFDakM7QUFBQSxhQUVDO0FBQUEsYUFDQTtBQUFBLGFBQ0E7QUFBQSxhQUNBO0FBQ0QsdUJBQUssTUFBTSxVQUFVLFlBQUksT0FBTztBQUNoQyxjQUFJLGNBQWMsS0FBSyxVQUFVLGNBQWMsRUFBRTtBQUNqRCxjQUFJLEtBQUsscUJBQXFCLGFBQWE7QUFDdkMsaUJBQUssb0JBQW9CLE9BQU87QUFFaEMsaUJBQUs7QUFBQTtBQUVUO0FBQUEsYUFFQztBQUNELGNBQUksQ0FBQyxLQUFLLFVBQVU7QUFDaEI7QUFBQTtBQUdKLGNBQUksU0FBUyxpQkFBSyxTQUFMLG1CQUFXLFNBQVgsbUJBQWlCO0FBQzlCLGNBQUksQ0FBQyxRQUFRO0FBQ1QscUJBQVMsU0FBUyxLQUFLO0FBQUE7QUFFM0IsY0FBSSxDQUFDLFFBQVE7QUFDVCx5QkFBSyxLQUFLLFNBQVMsRUFBRSxNQUFNLG9EQUFZLE1BQU0sTUFBTTtBQUFBO0FBQ25EO0FBQUE7QUFHSixlQUFLLFdBQVc7QUFDaEIsc0JBQVksS0FDUCxLQUFLO0FBQUEsWUFDRixLQUFLLFFBQVE7QUFBQSxZQUNiLE1BQXlCO0FBQUEsY0FDckI7QUFBQSxjQUNBLFNBQVMsS0FBSyxjQUFjLEtBQUsscUJBQXFCLEtBQUs7QUFBQSxjQUMzRCxNQUFNLG1CQUFXO0FBQUE7QUFBQSxhQUd4QixLQUFLLE1BQU07QUEvVGhDO0FBZ1V3Qix3QkFBWSxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQ2pDLGdCQUFJLFlBQUssU0FBTCxvQkFBVyxNQUFNO0FBQ2pCLG1CQUFLLEtBQUssS0FBSyxLQUFLLGNBQWMsS0FBSztBQUFBLG1CQUNwQztBQUNILDJCQUFLLFlBQVksTUFBTSxVQUFVLFdBQVc7QUFBQSxnQkFDeEM7QUFBQSxnQkFDQSxLQUFLLGNBQWMsS0FBSztBQUFBO0FBQUE7QUFBQSxhQUluQyxNQUFNLE1BQU07QUFDVCxpQkFBSyxXQUFXO0FBQUE7QUFHeEI7QUFBQSxhQUVDO0FBQUEsYUFDQTtBQUNELGNBQUksQ0FBQyxLQUFLLFVBQVU7QUFDaEI7QUFBQTtBQUVKLGVBQUssV0FBVztBQUNoQixzQkFBWSxLQUNQLEtBQUs7QUFBQSxZQUNGLEtBQUssUUFBUTtBQUFBLFlBQ2IsTUFBaUM7QUFBQSxjQUM3QixTQUFTLEtBQUssY0FBYyxLQUFLLHFCQUFxQixLQUFLO0FBQUEsY0FDM0QsTUFDSSxFQUFFLE9BQU8sUUFBUSxjQUNYLG1CQUFXLFlBQ1gsbUJBQVc7QUFBQTtBQUFBLGFBRzVCLEtBQUssQ0FBQyxNQUFnRDtBQUNuRCxpQ0FBYSxLQUFLLEtBQUsscUJBQXFCLE9BQU87QUFDbkQsaUJBQUssU0FBUyxXQUNWLEtBQUsscUJBQ0wscUJBQWEsS0FBSyxLQUFLO0FBRTNCLGlCQUFLLFdBQVc7QUFFaEIsZ0JBQUksRUFBRSxPQUFPLFFBQVEsYUFBYTtBQUM5QiwyQkFBSyxZQUFZLE1BQU0sVUFBVSxvQkFBb0I7QUFBQSxnQkFDakQsRUFBRTtBQUFBLGdCQUNGLEVBQUU7QUFBQTtBQUFBLG1CQUVIO0FBQ0gsc0JBQVEsZUFBZTtBQUFBLGdCQUNuQixLQUFLLFlBQVk7QUFBQSxnQkFDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUEsYUFJekIsTUFBTSxNQUFNO0FBQ1QsaUJBQUssV0FBVztBQUFBO0FBRXhCO0FBQUEsYUFFQztBQUNELGVBQUs7QUFDTCxjQUFJLEtBQUssaUJBQWlCLEdBQUc7QUFDekIsaUJBQUssaUJBQWlCLG1CQUFXLEtBQUssU0FBUztBQUFBO0FBRW5ELGVBQUs7QUFDTDtBQUFBLGFBQ0M7QUFDRCxlQUFLO0FBQ0wsY0FBSSxLQUFLLGtCQUFrQixtQkFBVyxLQUFLLFFBQVE7QUFDL0MsaUJBQUssaUJBQWlCO0FBQUE7QUFFMUIsZUFBSztBQUNMO0FBQUEsYUFDQztBQUNELGVBQUs7QUFDTDtBQUFBLGFBQ0M7QUFDRCxlQUFLLFdBQVcsbUJBQVcsS0FBSyxLQUFLLGdCQUFnQixLQUFLO0FBQzFEO0FBQUEsYUFDQztBQUVELGVBQUssV0FBVztBQUNoQjtBQUFBLGFBQ0M7QUFFRCxlQUFLO0FBQ0w7QUFBQSxhQUNDO0FBRUQsZUFBSztBQUNMO0FBQUEsYUFFQztBQUNELGVBQUs7QUFDTDtBQUFBLGFBQ0M7QUFDRCxlQUFLLFlBQVksRUFBRTtBQUNuQjtBQUFBO0FBQUE7QUFBQSxJQVFKLFlBQVksTUFBa0I7QUFDbEMsVUFBSSxLQUFLLGNBQWMsR0FBRztBQUV0QixxQkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQUEsaUJBQ25CLEtBQUssY0FBYyxHQUFHO0FBQzdCLHFCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFFMUIsb0JBQVksS0FDUCxLQUFLO0FBQUEsVUFDRixLQUFLLFFBQVE7QUFBQSxVQUNiLE1BQU07QUFBQSxXQUVULEtBQUssQ0FBQyxNQUFrQjtBQUNyQix1QkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNLG1CQUFtQjtBQUFBLFlBQ3hDLE1BQU07QUFBQSxjQUNGLE1BQU0sRUFBRTtBQUFBLGNBQ1IsTUFBTSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFPNUIscUJBQXFCO0FBQ3pCLFVBQUksQ0FBQyxLQUFLLFVBQVU7QUFDaEI7QUFBQTtBQUVKLFdBQUssV0FBVztBQUNoQixrQkFBWSxLQUNQLEtBQUs7QUFBQSxRQUNGLEtBQUssUUFBUTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFNBRVQsS0FBSyxDQUFDLE1BQU07QUFDVCxhQUFLLFdBQVc7QUFDaEIscUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTSxvQkFBb0IsRUFBRSxNQUFNO0FBQUE7QUFBQTtBQUFBLElBSXpELFVBQVU7QUFDZCxVQUFJLE9BQU8sS0FBSyxjQUFjLEtBQUs7QUFDbkMsVUFBSSxDQUFDO0FBQU07QUFDWCxVQUFJLENBQUMsS0FBSyxVQUFVO0FBQ2hCO0FBQUE7QUFFSixXQUFLLFdBQVc7QUFDaEIsa0JBQVksS0FDUCxLQUFLO0FBQUEsUUFDRixLQUFLLFFBQVE7QUFBQSxRQUNiLE1BQTZCO0FBQUEsVUFDekIsUUFBUSxLQUFLLEtBQUs7QUFBQSxVQUNsQixNQUFNLG1CQUFXO0FBQUE7QUFBQSxTQUd4QixLQUFLLE1BQU07QUFDUixhQUFLLFdBQVc7QUFDaEIseUJBQVMsZUFBZSxLQUFLLEtBQUs7QUFFbEMscUJBQUssWUFBWSxNQUFNLFVBQVUsaUJBQW9DO0FBQUEsVUFDakUsTUFBTSxLQUFLO0FBQUEsVUFDWCxNQUFNO0FBQUEsWUFDRjtBQUFBLGNBQ0ksS0FBSyxLQUFLO0FBQUEsY0FDVixPQUFPO0FBQUEsY0FDUCxTQUFTO0FBQUE7QUFBQTtBQUFBLFVBR2pCLFFBQVE7QUFBQTtBQUFBLFNBR2YsTUFBTSxNQUFNO0FBQ1QsYUFBSyxXQUFXO0FBQUE7QUFBQTtBQUFBLElBT3BCLFdBQVcsT0FBZTtBQUM5QixVQUFJLENBQUMsS0FBSyxVQUFVO0FBQ2hCO0FBQUE7QUFFSixXQUFLLFdBQVc7QUFDaEIsa0JBQVksS0FDUCxLQUFLO0FBQUEsUUFDRixLQUFLLFFBQVE7QUFBQSxRQUNiLE1BQTRCO0FBQUEsVUFDeEI7QUFBQSxVQUNBLE1BQU0sbUJBQVc7QUFBQTtBQUFBLFNBR3hCLEtBQUssTUFBTTtBQUNSLHlCQUFTLFlBQVk7QUFDckIsYUFBSyxXQUFXO0FBQ2hCLGFBQUs7QUFBQSxTQUVSLE1BQU0sTUFBTTtBQUNULGFBQUssV0FBVztBQUFBO0FBQUE7QUFBQSxJQU9wQixTQUFTO0FBQ2IsVUFBSSxFQUFFLFNBQVMsbUJBQVcsS0FBSyxLQUFLO0FBQ3BDLFVBQUksQ0FBQyxLQUFLLFVBQVU7QUFDaEI7QUFBQTtBQUVKLFdBQUssV0FBVztBQUNoQixrQkFBWSxLQUNQLEtBQUs7QUFBQSxRQUNGLEtBQUssUUFBUTtBQUFBLFFBQ2IsTUFBNEI7QUFBQSxVQUN4QixPQUFPLEtBQUs7QUFBQSxVQUNaLE1BQU0sbUJBQVc7QUFBQTtBQUFBLFNBR3hCLEtBQUssTUFBTTtBQUNSLGFBQUssV0FBVztBQUNoQiwyQkFBVyxLQUFLLEtBQUssZ0JBQWdCLE9BQU87QUFDNUMsYUFBSztBQUVMLFlBQUksQ0FBQyxpQkFBUztBQUFXLDJCQUFTLFlBQVksS0FBSztBQUNuRCxZQUFJLENBQUMsaUJBQVMsYUFBYTtBQUN2QiwyQkFBUyxjQUFjLEtBQUs7QUFDNUIsMkJBQVMsa0JBQWtCLHFCQUFhLE1BQU0sVUFBVSxJQUNwRCx5QkFDRjtBQUFBO0FBQUEsU0FHVCxNQUFNLE1BQU07QUFDVCxhQUFLLFdBQVc7QUFBQTtBQUFBO0FBQUEsSUFPcEIsb0JBQW9CO0FBQ3hCLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxVQUFVLGFBQWEsS0FBSztBQUNqRCxZQUFJLE1BQU0sS0FBSyxVQUFVLFdBQVcsSUFDaEMsS0FBSyxJQUFJLFdBQVc7QUFDeEIsWUFBSSxNQUFNLEtBQUssbUJBQW1CO0FBQzlCLGNBQUksT0FBTztBQUNYLGFBQUcsT0FBTyxLQUFLLGNBQWMsR0FBRztBQUFBLGVBQzdCO0FBQ0gsY0FBSSxPQUFPO0FBQ1gsYUFBRyxPQUFPLEtBQUssY0FBYyxHQUFHO0FBQUE7QUFBQTtBQUl4QyxXQUFLO0FBQUE7QUFBQSxJQU1ELGVBQWU7QUFDbkIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFVBQVUsYUFBYSxLQUFLO0FBQ2pELGFBQUsscUJBQXFCLEdBQUc7QUFBQTtBQUVqQyxVQUFJLGFBQWEsS0FBSyxXQUFXO0FBRWpDLGNBQVEsS0FBSztBQUFBLGFBQ0o7QUFDRCxlQUFLLFVBQVU7QUFDZixlQUFLLHFCQUFxQixHQUFHO0FBQzdCLGVBQUs7QUFDTCxlQUFLLFdBQVcsVUFBVTtBQUMxQixxQkFBVyxVQUFVO0FBQ3JCLHFCQUFXLFNBQVM7QUFDcEI7QUFBQSxhQUNDO0FBQ0QsZUFBSyxxQkFBcUIsR0FBRztBQUM3QixlQUFLO0FBQ0w7QUFBQSxhQUNDO0FBQ0QsZUFBSyxVQUFVO0FBQ2YsZUFBSyxxQkFBcUIsR0FBRztBQUM3QixlQUFLO0FBQ0wsZUFBSyxXQUFXLFVBQVU7QUFDMUIscUJBQVcsVUFBVTtBQUNyQixxQkFBVyxTQUFTO0FBQ3BCO0FBQUEsYUFDQztBQUNELGVBQUsscUJBQXFCLEdBQUc7QUFFN0IsZUFBSyxVQUFVLFFBQVEsS0FBSztBQUM1QjtBQUFBO0FBQUE7QUFBQSxJQU9KLFlBQVk7QUFDaEIsVUFBSSxDQUFDLG1CQUFXLEtBQUs7QUFBUSwyQkFBVyxLQUFLO0FBQzdDLFVBQUksTUFBTSxtQkFBVyxLQUFLLEtBQUs7QUFDL0IsV0FBSyxRQUFRLFNBQVMsV0FBVyxJQUFJLEtBQUs7QUFDMUMsV0FBSyxRQUFRLE9BQU8sSUFBSSxLQUFLO0FBQzdCLFdBQUssUUFBUSxPQUFPLElBQUksS0FBSztBQUM3QixXQUFLLFlBQVksUUFBUSxJQUFJLEtBQUssZUFBZTtBQUNqRCxVQUFJLFVBQVUsS0FBSyxVQUFVLGVBQWU7QUFDNUMsTUFBQyxRQUFRLGVBQWUsUUFBdUIsT0FBTyxJQUFJLEtBQUssS0FBSyxJQUFJO0FBQ3hFLE1BQUMsUUFBUSxlQUFlLFNBQTJCLFFBQVEsSUFBSSxLQUFLLEtBQUssUUFBUTtBQUVqRixVQUFJLFNBQVMsS0FBSyxVQUFVLFdBQVcsSUFDbkMsVUFBVSxPQUFPLGVBQWUsYUFDaEMsV0FBVyxPQUFPLGVBQWUsYUFDakM7QUFDSixlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUN4QixtQkFBVyxRQUFRLFdBQVc7QUFDOUIsaUJBQVMsVUFBVSxJQUFJLEtBQUssSUFBSSxLQUFLO0FBQ3JDLGlCQUFTLE9BQ0wsSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLFlBQVksc0JBQXNCO0FBQzdELG1CQUFXLFNBQVMsV0FBVztBQUMvQixpQkFBUyxVQUFVLElBQUksS0FBSyxJQUFJLEtBQUs7QUFDckMsaUJBQVMsT0FDTCxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUssVUFBVSxzQkFBc0I7QUFBQTtBQUUvRCxVQUFJLElBQUksTUFBTTtBQUNWLGFBQUssVUFBVSxVQUFVO0FBQ3pCLGFBQUssT0FBTyxVQUFVO0FBQ3RCLGFBQUssUUFBUSxVQUFVO0FBQUEsYUFDcEI7QUFDSCxZQUFJLGlCQUFTLGFBQWEsSUFBSSxLQUFLLElBQUk7QUFDbkMsY0FBSSxtQkFBVyxtQkFBbUIsS0FBSyxpQkFBUyxjQUFjLE1BQU07QUFDaEUsaUJBQUssT0FBTyxXQUFXO0FBQUEsaUJBQ3BCO0FBQ0gsaUJBQUssT0FBTyxXQUFXO0FBQUE7QUFFM0IsZUFBSyxPQUFPLFVBQVU7QUFDdEIsZUFBSyxRQUFRLFVBQVU7QUFBQSxlQUNwQjtBQUNILGVBQUssUUFBUSxVQUFVO0FBQ3ZCLGVBQUssT0FBTyxVQUFVO0FBQUE7QUFHMUIsYUFBSyxVQUFVLFVBQVU7QUFBQTtBQUFBO0FBQUEsSUFPekIscUJBQXFCO0FBQ3pCLFdBQUssc0JBQXNCO0FBQzNCLFdBQUssU0FBUyxnQkFBZ0I7QUFDOUIsV0FBSyxTQUFTLFFBQVEsS0FBSztBQUMzQixXQUFLLFNBQVM7QUFBQTtBQUFBLElBUVYscUJBQXFCLEdBQVcsTUFBZTtBQUNuRCxNQUFDLEtBQUssVUFBVSxXQUFXLEdBQWdCLFVBQVU7QUFDckQsTUFBQyxLQUFLLFVBQVUsV0FBVyxHQUFnQixTQUFTO0FBQUE7QUFBQSxJQU9oRCxjQUFjLEdBQVc7QUFDN0IsV0FBSyxtQkFBbUI7QUFDeEIsV0FBSztBQUFBO0FBQUEsSUFRRCxrQkFBa0I7QUFDdEIsVUFBSSxPQUNBLHFCQUFhLE1BQU0sVUFBVSxJQUFJLG9CQUFvQixNQUFNLEtBQUs7QUFDcEUsVUFBSSxPQUFPLEtBQUssYUFBYSxlQUFlO0FBQzVDLFVBQUksU0FBUyxLQUFLLGFBQWEsZUFBZTtBQUM5QyxVQUFJLE1BQU0sS0FBSyxhQUFhLGVBQWU7QUFDM0MsV0FBSyxhQUFhLFVBQVU7QUFDNUIsVUFBSSxpQkFBUyxhQUFhLEtBQUssU0FBUztBQUNwQyxhQUFLLGFBQWEsVUFBVTtBQUM1QixhQUFLLGFBQWEsVUFBVTtBQUM1QixRQUFDLEtBQUssZUFBZSxPQUFzQixPQUFPO0FBQ2xELFFBQUMsS0FBSyxlQUFlLE9BQXNCLE9BQU8sR0FBRyxLQUFLO0FBQzFELFFBQUMsS0FBSyxlQUFlLE9BQXNCLE9BQU87QUFDbEQsUUFBQyxPQUFPLGVBQWUsT0FBc0IsUUFDeEMsa0JBQVMsYUFBYSxLQUFLLFVBQVUsSUFBSSxpQkFBUyxhQUFhLEtBQUssV0FBVztBQUNwRixRQUFDLE9BQU8sZUFBZSxNQUFxQixPQUFPLEdBQy9DLGlCQUFTLGFBQWEsS0FBSyxVQUFVLEtBQUssVUFBVSxpQkFBUyxjQUM3RCxLQUFLO0FBQ1QsWUFBSSxPQUFPO0FBQ1gsWUFBSSxhQUFhO0FBQ2pCLGFBQUssV0FBVztBQUNoQjtBQUFBO0FBR0osVUFBSSxLQUFLLFlBQVksS0FBSyxjQUFjO0FBQ3BDLGFBQUssYUFBYSxVQUFVO0FBQzVCLGFBQUssYUFBYSxVQUFVO0FBQzVCLFFBQUMsS0FBSyxlQUFlLE9BQXNCLE9BQU87QUFDbEQsUUFBQyxLQUFLLGVBQWUsT0FBc0IsT0FBTyxHQUFHLEtBQUs7QUFDMUQsUUFBQyxLQUFLLGVBQWUsT0FBc0IsT0FBTztBQUNsRCxRQUFDLE9BQU8sZUFBZSxPQUFzQixRQUN4QyxNQUFLLFlBQVksS0FBSyxlQUFlLElBQUksS0FBSyxZQUFZLEtBQUssZ0JBQWdCO0FBQ3BGLFFBQUMsT0FBTyxlQUFlLE1BQXFCLE9BQU8sR0FDL0MsS0FBSyxZQUFZLEtBQUssZUFBZSxLQUFLLGVBQWUsS0FBSyxhQUM5RCxLQUFLO0FBQ1QsWUFBSSxPQUFPO0FBQ1gsWUFBSSxhQUFhO0FBQ2pCLGFBQUssV0FBVztBQUNoQjtBQUFBO0FBRUosV0FBSyxXQUFXO0FBQ2hCLFdBQUssYUFBYSxVQUFVO0FBQUE7QUFBQSxJQU94QixXQUFXO0FBQ2YsVUFBSSxDQUFDLEtBQUssVUFBVTtBQUNoQixxQkFBSyxLQUFLLFNBQVMsRUFBRSxNQUFNLDhDQUFXLE1BQU0sTUFBTTtBQUFBO0FBQ2xEO0FBQUE7QUFFSixVQUFJLEtBQUssb0JBQW9CLE1BQU07QUFDL0IscUJBQUssS0FBSyxTQUFTLEVBQUUsTUFBTSxvREFBWSxNQUFNLE1BQU07QUFBQTtBQUNuRDtBQUFBO0FBRUosVUFBSSxDQUFDLEtBQUssVUFBVTtBQUNoQjtBQUFBO0FBRUosV0FBSyxXQUFXO0FBQ2hCLGtCQUFZLEtBQ1AsS0FBSztBQUFBLFFBQ0YsS0FBSyxRQUFRO0FBQUEsUUFDYixNQUFNLEVBQUUsSUFBSSxLQUFLO0FBQUEsU0FFcEIsS0FBSyxDQUFDLE1BQVc7QUFDZCxhQUFLLFdBQVc7QUFDaEIscUJBQUssS0FBSyxTQUFTLEVBQUUsTUFBTSw0QkFBUSxNQUFNLE1BQU07QUFBQTtBQUMvQyx5QkFBUyxXQUFXLEVBQUU7QUFDdEIseUJBQVMsVUFBVSxFQUFFO0FBQ3JCLGFBQUssVUFBVTtBQUNmLGdCQUFRLGVBQWU7QUFBQSxVQUNuQixLQUFLLFlBQVk7QUFBQSxVQUNqQixNQUFNLEVBQUUsTUFBTTtBQUFBO0FBQUEsU0FHckIsTUFBTSxNQUFNO0FBQ1QsYUFBSyxXQUFXO0FBQUE7QUFBQTtBQUFBLElBT3BCLGdCQUFnQixNQUFrQixHQUFXO0FBQ2pELFVBQUksT0FBTyxLQUFLLGNBQWM7QUFFOUIsVUFBSSxXQUFtQyxFQUFFLElBQUksR0FBRyxPQUFPO0FBQ3ZELFlBQU0sZUFBZSxpQkFBUztBQUM5QixlQUFTLElBQUksR0FBRyxJQUFJLGFBQWEsUUFBUSxLQUFLO0FBQzFDLFlBQUksYUFBYSxHQUFHLE1BQU0sR0FBRztBQUN6QixxQkFBVyxhQUFhO0FBQ3hCO0FBQUE7QUFBQTtBQUlSLE1BQUMsS0FBSyxlQUFlLFNBQXdCLE9BQU8sS0FBSyxRQUFRO0FBQ2pFLFVBQUksS0FBSyxPQUFPO0FBQ1osWUFBSSxRQUFRLEtBQUssUUFBUSxTQUFTO0FBQ2xDLFFBQUMsS0FBSyxlQUFlLGFBQTBCLFVBQVU7QUFJekQsUUFDSSxLQUFLLGVBQWUsYUFBYSxlQUFlLFNBQ2xELE9BQU87QUFDVCxZQUFJLFNBQVMsR0FBRztBQUNaLGVBQUssV0FBVztBQUFBO0FBR3BCLFlBQUksS0FBSyxRQUFRO0FBQUssVUFBQyxLQUFLLGVBQWUsYUFBMEIsVUFBVTtBQUFBLGFBQzVFO0FBQ0gsUUFBQyxLQUFLLGVBQWUsYUFBMEIsVUFBVTtBQUFBO0FBRzdELFVBQUksS0FBSyxVQUFVLGtCQUFrQixHQUFHO0FBQ3BDLFFBQUMsS0FBSyxlQUFlLE1BQXFCLE9BQU87QUFBQSxhQUM5QztBQUNILFFBQUMsS0FBSyxlQUFlLE1BQXFCLE9BQU87QUFBQTtBQUFBO0FBQUE7OztBQ2h6QjdELHFDQUE0QyxhQUFLLFdBQVc7QUFBQSxJQUN4RCxRQUFRLEdBQWU7QUFDbkIsY0FBUSxFQUFFLE9BQU87QUFBQSxhQUNSO0FBQ0QsdUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUMxQjtBQUFBO0FBQUE7QUFBQTs7O0FDSWhCLGlDQUF3QyxXQUFXO0FBQUEsSUFZL0MsV0FBVztBQUNQLFdBQUssV0FBVyxRQUFRLHFCQUFhLE1BQU0sVUFBVTtBQUNyRCxXQUFLLFdBQVcsaUJBQWlCO0FBQ2pDLFdBQUssV0FBVyxnQkFBZ0IsSUFBSSxLQUFLLFFBQVEsTUFBTSxLQUFLO0FBQzVELFdBQUs7QUFBQTtBQUFBLElBR0QsaUJBQWlCO0FBQ3JCLFVBQUksUUFBUSxpQkFBUyxlQUFlLG1CQUFXO0FBQy9DLFVBQUksUUFBUTtBQUFHLGdCQUFRO0FBQ3ZCLFdBQUssa0JBQWtCLFFBQVEsTUFBTTtBQUNyQyxXQUFLLGlCQUFpQixPQUFPLGlCQUFTLGFBQWE7QUFDbkQsV0FBSyxhQUFhLE9BQU8seURBQVksaUJBQVMsZ0JBQWdCLG1CQUFXO0FBQ3pFLFdBQUssV0FBVyxVQUFVLGlCQUFTLGdCQUFnQixtQkFBVztBQUFBO0FBQUEsSUFHMUQsV0FBVyxNQUFnQixHQUFXO0FBQzFDLFlBQU0sTUFBTSxLQUFLLGVBQWUsUUFDNUIsTUFBTSxxQkFBYSxNQUFNLFVBQVUsS0FBSztBQUM1QyxVQUFJLFFBQVEsaUJBQVMsYUFBYSxJQUFJO0FBQ3RDLFVBQUksUUFBUTtBQUFHLGdCQUFRO0FBQ3ZCLFVBQUksUUFBUSxNQUFNO0FBQ2xCLFlBQU0sWUFBWSxLQUFLLGVBQWU7QUFDdEMsTUFBQyxVQUFVLGVBQWUsUUFBdUIsT0FBTyxJQUFJLE9BQU8sSUFBSTtBQUN2RSxNQUFDLFVBQVUsZUFBZSxVQUF5QixPQUFPLElBQUksSUFBSSxPQUFPO0FBRXpFLE1BQUMsS0FBSyxlQUFlLGFBQTRCLE9BQU8sZUFBSyxJQUFJO0FBRWpFLFVBQUksT0FBZSxJQUNmLE1BQU0sS0FBSyxlQUFlO0FBQzlCLFVBQUksYUFBYSxJQUFJO0FBQ3JCLFVBQUksSUFBSSxLQUFLLGlCQUFTLFVBQVU7QUFDNUIsWUFBSSxTQUFTO0FBQ2IsWUFBSSxVQUFVO0FBQ2Qsa0JBQVUsSUFBSTtBQUNkLGVBQU87QUFFUCxZQUFJLGlCQUFTLGNBQWMsSUFBSSxNQUFNO0FBQ2pDLGNBQUksQ0FBQyxpQkFBUyxVQUFVO0FBQ3BCLGdCQUFJLElBQUksTUFBTSxxQkFBYSxNQUFNLFVBQVUsS0FBSyxHQUFHLElBQUk7QUFDbkQscUJBQU87QUFFUCxrQkFBSSxVQUFVO0FBQ2Qsd0JBQVUsSUFBSTtBQUFBO0FBQUEsaUJBRWY7QUFDSCxnQkFBSSxJQUFJLEtBQUssaUJBQVMsWUFBWSxHQUFHO0FBQ2pDLHFCQUFPO0FBRVAsa0JBQUksVUFBVTtBQUNkLHdCQUFVLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUl2QjtBQUNILGVBQU87QUFDUCxZQUFJLFNBQVM7QUFDYixZQUFJLFVBQVU7QUFDZCxrQkFBVSxJQUFJO0FBQUE7QUFFbEIsVUFBSSxPQUFPO0FBQUE7QUFBQSxJQUdmLFFBQVEsR0FBZTtBQUNuQixjQUFRLEVBQUUsT0FBTztBQUFBLGFBQ1I7QUFDRCxzQkFBWSxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQ2pDO0FBQUEsYUFDQztBQUNELHVCQUFLLEtBQUssS0FBSyxZQUFJLE1BQU07QUFDekI7QUFBQSxhQUNDO0FBR0QsZ0JBQU0sV0FBVyxFQUFFLE9BQU87QUFFMUIsc0JBQVksS0FDUCxLQUFLO0FBQUEsWUFDRixLQUFLLFFBQVE7QUFBQSxZQUNiLE1BQU0sRUFBRSxNQUFNLG1CQUFXLFdBQVc7QUFBQSxhQUV2QyxLQUFLLE1BQU07QUFDUiw2QkFBUyxXQUFXO0FBQ3BCLGlCQUFLLFdBQVc7QUFDaEIsZ0JBQUksU0FBUyxxQkFBYSxNQUFNLFVBQVUsSUFBSSxVQUFVO0FBQ3hELHlCQUFLLFlBQVksTUFBTSxVQUFVLGlCQUFvQztBQUFBLGNBQ2pFLE1BQU0sRUFBRTtBQUFBLGNBQ1IsTUFBTTtBQUFBLGdCQUNGO0FBQUEsa0JBQ0ksS0FBSyxPQUFPO0FBQUEsa0JBQ1osT0FBTyxPQUFPO0FBQUEsa0JBQ2QsU0FBUyxPQUFPLElBQUksTUFBTSxtQkFBVyxTQUFTLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU10RTtBQUFBO0FBQUE7QUFBQTs7O0FDL0doQixrQ0FBeUMsYUFBSyxXQUFXO0FBQUEsSUFBekQsY0FYQTtBQVdBO0FBVVksc0JBQW9CO0FBQUE7QUFBQSxJQUU1QixTQUFTLE1BQTBCO0FBQy9CLFdBQUssT0FBTyxLQUFLO0FBQ2pCLFVBQUksT0FBTyxxQkFBYSxNQUFNLFVBQVUsSUFBSSxxQkFBcUI7QUFDakUsV0FBSyxPQUFPLE9BQU8sR0FBRyxLQUFLLEtBQUssT0FBTztBQUN2QyxXQUFLLFFBQVEsT0FBTywyQkFBTyxpQkFBUztBQUNwQyxVQUFJLGlCQUFTLGtCQUFrQixHQUFHO0FBQzlCLGFBQUssV0FBVyxXQUFXO0FBQUE7QUFFL0IsV0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU07QUFDN0IsZ0JBQVEsZUFBZTtBQUFBLFVBQ25CLEtBQUssWUFBWTtBQUFBLFVBQ2pCLE1BQU0sRUFBRSxRQUFRO0FBQUE7QUFFcEIsZ0JBQVEsZUFBZTtBQUFBLFVBQ25CLEtBQUssWUFBWTtBQUFBLFVBQ2pCLE1BQU0sRUFBRSxRQUFRO0FBQUE7QUFFcEIsZ0JBQVEsZUFBZTtBQUFBLFVBQ25CLEtBQUssWUFBWTtBQUFBLFVBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFFbEIsZ0JBQVEsZUFBZTtBQUFBLFVBQ25CLEtBQUssWUFBWTtBQUFBLFVBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFLMUIsUUFBUSxHQUFlO0FBQ25CLGNBQVEsRUFBRSxPQUFPO0FBQUEsYUFDUjtBQUNELHVCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFDMUI7QUFBQSxhQUNDO0FBQ0QsY0FBSSxDQUFDLEtBQUs7QUFBVTtBQUNwQixlQUFLLFdBQVc7QUFDaEIsc0JBQVksS0FDUCxLQUFLO0FBQUEsWUFDRixLQUFLLFFBQVE7QUFBQSxZQUNiLE1BQU0sRUFBRSxNQUFNLG1CQUFXO0FBQUEsYUFFNUIsS0FDRyxDQUFDLE1BSUs7QUFDRiw2QkFBUyxlQUFlLEVBQUU7QUFDMUIsNkJBQVMsaUJBQWlCLEVBQUU7QUFFNUIsZ0JBQUksaUJBQVMsZ0JBQWdCLG1CQUFXLGdCQUFnQjtBQUNwRCwrQkFBUztBQUNULHNCQUFRLGVBQWU7QUFBQSxnQkFDbkIsS0FBSyxZQUFZO0FBQUEsZ0JBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFBQTtBQUl0QixvQkFBUSxlQUFlO0FBQUEsY0FDbkIsS0FBSyxZQUFZO0FBQUEsY0FDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUdsQix5QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCLHlCQUFLLFlBQVksTUFBTSxVQUFVO0FBRWpDLHlCQUFLLFlBQVksTUFBTSxVQUFVLG9CQUFvQjtBQUFBLGNBQ2pELEVBQUU7QUFBQSxjQUNGLEVBQUU7QUFBQTtBQUdOLGdCQUFJLEtBQUs7QUFBTSxtQkFBSztBQUFBO0FBR2hDO0FBQUE7QUFBQTtBQUFBLElBSVosY0FBb0I7QUFDaEIsY0FBUSxlQUFlO0FBQUEsUUFDbkIsS0FBSyxZQUFZO0FBQUEsUUFDakIsTUFBTTtBQUFBO0FBQUE7QUFBQTs7O0FDL0VsQiwrQkFBc0MsV0FBVztBQUFBLElBQWpELGNBekJBO0FBeUJBO0FBRVksc0JBQXNCO0FBRXRCLHNCQUFXO0FBQUE7QUFBQSxJQUVuQixXQUFXO0FBQ1AsV0FBSztBQUNMLFdBQUssU0FBUyxnQkFBZ0IsSUFBSSxLQUFLLFFBQVEsTUFBTSxLQUFLO0FBQzFELFdBQUssU0FBUyxpQkFBaUI7QUFBQTtBQUFBLElBR25DLGlCQUFpQjtBQUNiLFdBQUssU0FBUyxRQUFRLG9CQUFZO0FBQUE7QUFBQSxJQUc5QixXQUFXLE1BQWdCLEdBQVc7QUFDMUMsVUFBSSxNQUFNLG9CQUFZLEtBQUssR0FBRztBQUM5QixZQUFNLE9BQU8sb0JBQVksUUFBUSwyQkFBSztBQUN0QyxVQUFJLENBQUMsTUFBTTtBQUNQLHFCQUFLLEtBQUssU0FBUyxFQUFFLE1BQU0sdUVBQWdCLE1BQU0sTUFBTTtBQUFBO0FBQ3ZEO0FBQUE7QUFFSixNQUFDLEtBQUssZUFBZSxRQUF1QixPQUFPLElBQUk7QUFDdkQsTUFBQyxLQUFLLGVBQWUsU0FBd0IsT0FBTyxJQUFJO0FBRXhELE1BQUMsS0FBSyxlQUFlLFFBQXVCLE9BQU8sR0FBRyxJQUFJLFFBQ3JELCtCQUFNLFNBQVEsSUFBSSxRQUFRLElBQUksUUFBUSw2QkFBTSxVQUFVLEtBQ3ZELElBQUk7QUFFUixZQUFNLFlBQVksS0FBSyxlQUFlO0FBQ3RDLE1BQUMsVUFBVSxlQUFlLFFBQXVCLE9BQU8sSUFBSSxPQUFPLElBQUk7QUFFdkUsVUFBSSxJQUFJLE9BQU8sTUFBTTtBQUNqQixjQUFNLFNBQ0YscUJBQWEsTUFBTSxVQUFVLElBQUksZ0JBQWdCLE1BQ25EO0FBRUYsWUFBSSxRQUFRLElBQUksT0FBTyxRQUFTLEtBQUksUUFBUywrQkFBTSxVQUFTLE1BQU07QUFDbEUsWUFBSSxRQUFRLElBQUksT0FBTyxPQUFPO0FBQzFCLGtCQUFRLElBQUksT0FBTztBQUFBO0FBR3ZCLFFBQUMsVUFBVSxlQUFlLFVBQXlCLE9BQU8sTUFBTTtBQUFBLGFBQzdEO0FBQ0gsUUFBQyxVQUFVLGVBQWUsVUFBeUIsT0FBTyxNQUFNLElBQUksT0FBTztBQUFBO0FBRy9FLFlBQU0sTUFBTSxLQUFLLGVBQWU7QUFFaEMsWUFBTSxTQUFvQjtBQUFBLFFBQ3RCLElBQUksSUFBSTtBQUFBLFFBQ1IsSUFBSTtBQUFBO0FBSVIsVUFBSSw2QkFBTSxTQUFTO0FBQ2YsWUFBSSxPQUFPO0FBQ1gsWUFBSSxTQUFTO0FBQ2IsWUFBSSxXQUFXO0FBQUEsYUFDWjtBQUNILFlBQUksU0FBUztBQUNiLFlBQUksV0FBVztBQUVmLFlBQUksOEJBQU0sVUFBUyxJQUFJLE9BQU87QUFDMUIsY0FBSSxPQUFPO0FBQ1gsaUJBQU8sS0FBSztBQUFBLGVBQ1Q7QUFDSCxjQUFJLE9BQU87QUFBQTtBQUFBO0FBSW5CLFVBQUksYUFBYTtBQUFBO0FBQUEsSUFHckIsUUFBUSxHQUFlO0FBQ25CLGNBQVEsRUFBRSxPQUFPO0FBQUEsYUFDUjtBQUNELHNCQUFZLEtBQUssTUFBTSxZQUFJLE1BQU07QUFDakM7QUFBQSxhQUNDO0FBQ0QsY0FBSSxDQUFDLEtBQUs7QUFBVTtBQUNwQixjQUFJLFNBQW9CLEVBQUUsT0FBTztBQUNqQyxlQUFLLFdBQVc7QUFFaEIsY0FBSSxPQUFPLElBQUk7QUFFWCx3QkFBWSxLQUNQLEtBQUs7QUFBQSxjQUNGLEtBQUssUUFBUTtBQUFBLGNBQ2IsTUFBTSxFQUFFLE1BQU0sbUJBQVcsZ0JBQWdCLFFBQVEsT0FBTztBQUFBLGVBRTNELEtBQUssTUFBTTtBQUNSLG9CQUFNLE9BQU8sb0JBQVksUUFBUSxPQUFPO0FBQ3hDLG1CQUFLLFVBQVU7QUFDZixxQkFBTyxLQUFLO0FBQ1osbUJBQUssV0FBVztBQUVoQixtQkFBSyxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU07QUFDaEMscUJBQUs7QUFDTCxxQkFBSyxTQUFTO0FBQ2QsNkJBQUssWUFBWSxNQUFNLFVBQVU7QUFBQTtBQUdyQywyQkFBSyxZQUFZLE1BQU0sVUFBVSxpQkFBb0M7QUFBQSxnQkFDakUsTUFBTSxFQUFFO0FBQUEsZ0JBQ1IsTUFBTTtBQUFBLGtCQUNGO0FBQUEsb0JBQ0ksS0FBSyxLQUFLLEtBQUssT0FBTztBQUFBLG9CQUN0QixPQUFPLEtBQUssS0FBSyxPQUFPO0FBQUEsb0JBQ3hCLFNBQ0ksS0FBSyxLQUFLLE9BQU8sSUFBSSxNQUFNLG1CQUFXLFlBQVksSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSzNFO0FBQ0gsaUJBQUssS0FBSyxPQUFPLElBQUksRUFBRTtBQUFBO0FBRzNCO0FBQUE7QUFBQTtBQUFBLElBSUUsS0FBSyxJQUFJLFFBQVE7QUFBQTtBQUMzQixZQUFJO0FBRUosZ0JBQVE7QUFBQSxlQUNDO0FBQUEsZUFDQTtBQUNELHFCQUFTLE1BQU0sUUFBUSxlQUFlO0FBQUEsY0FDbEMsS0FBSyxZQUFZO0FBQUEsY0FDakIsTUFBTTtBQUFBLGNBQ04sV0FBVyxLQUFLO0FBQUE7QUFHcEIsZ0JBQUksaUNBQVEsTUFBTTtBQUNkLDJCQUFLLEtBQUssU0FBUyxFQUFFLE1BQU0sd0NBQVUsT0FBTyxTQUFTLE1BQU0sTUFBTTtBQUFBO0FBQ2pFLG1CQUFLLFdBQVc7QUFDaEI7QUFBQTtBQUdKLHdCQUFZLEtBQ1AsS0FBSztBQUFBLGNBQ0YsS0FBSyxRQUFRO0FBQUEsY0FDYixNQUFNO0FBQUEsZ0JBQ0YsUUFBUSxNQUFNLE9BQU8sT0FBTztBQUFBO0FBQUEsZUFHbkMsS0FBSyxDQUFDLE1BQWdEO0FBQ25ELDJCQUFLLFlBQVksTUFBTSxVQUFVLG9CQUFvQixDQUFDLFFBQVEsRUFBRTtBQUNoRSxtQkFBSyxTQUFTO0FBQ2Qsa0NBQVksYUFBYTtBQUN6QixrQkFBSSxNQUFNO0FBQU0sb0NBQVksYUFBYTtBQUN6QyxtQkFBSyxXQUFXO0FBQUE7QUFHeEIsZ0JBQUksaUNBQVEsS0FBSyxlQUFlO0FBQzVCLCtCQUFTLG9CQUFvQjtBQUFBLG1CQUMxQjtBQUNILCtCQUFTO0FBQUE7QUFFYix3QkFBWSxLQUFLLEtBQUs7QUFBQSxjQUNsQixLQUFLLFFBQVE7QUFBQSxjQUNiLE1BQU0sRUFBRSxPQUFPLGlCQUFTO0FBQUE7QUFHNUI7QUFBQSxlQUNDO0FBQUEsZUFnQ0E7QUFDRCx5QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCO0FBQUEsZUFDQztBQUNELHlCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFDMUIseUJBQUssWUFBWSxNQUFNLFVBQVU7QUFDakM7QUFBQSxlQUNDO0FBQ0QseUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUMxQix5QkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSTtBQUNqRDtBQUFBLGVBQ0M7QUFDRCx5QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCLHlCQUFLLEtBQUssS0FBSyxZQUFJLE1BQU0sVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJO0FBQ2pEO0FBQUEsZUFDQztBQUNELHlCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFDMUIseUJBQUssWUFBWSxNQUFNLFVBQVU7QUFDakM7QUFBQSxlQUNDO0FBQ0QseUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUMxQix5QkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNO0FBQ3pCO0FBQUEsZUFDQztBQUNELHlCQUFLLEtBQUssTUFBTSxZQUFJLE1BQU07QUFDMUIseUJBQUssWUFBWSxNQUFNLFVBQVU7QUFDakM7QUFBQSxlQUNDO0FBQ0QseUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUMxQixvQkFBUSxlQUFlO0FBQUEsY0FDbkIsS0FBSyxZQUFZO0FBQUEsY0FDakIsTUFBTTtBQUFBLGNBQ04sV0FBVyxLQUFLO0FBQUEsZUFDakIsS0FBSyxDQUFDLE1BQU07QUFDWCxrQkFBSSxDQUFDLEtBQUssd0JBQUcsT0FBTTtBQUNmLDZCQUFLLEtBQUssU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLFlBQVksTUFBTSxNQUFNO0FBQUE7QUFBQSxxQkFDdkQ7QUFDSCw2QkFBSyxLQUFLLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxZQUFZLE1BQU0sTUFBTTtBQUFBO0FBQzFELDRCQUFZLEtBQ1AsS0FBSztBQUFBLGtCQUNGLEtBQUssUUFBUTtBQUFBLG1CQUVoQixLQUFLLE1BQU07QUFDUixzQ0FBWSxhQUFhO0FBQ3pCLDBCQUFRLGVBQWU7QUFBQSxvQkFDbkIsS0FBSyxZQUFZO0FBQUEsb0JBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLbEM7QUFBQSxlQUNDO0FBQ0QseUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUMxQix5QkFBSyxZQUFZLE1BQU0sVUFBVTtBQUNqQztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUMxUWhCLE1BQUksVUFBVTtBQU1kLG9DQUEyQyxhQUFLLFdBQVc7QUFBQSxJQUEzRCxjQXBCQTtBQW9CQTtBQUVZLHNCQUFzQjtBQUV0QixzQkFBdUI7QUFFdkIsc0JBQXVCO0FBRXZCLHNCQUF1QjtBQUV2Qiw2QkFBa0M7QUFFbEMseUJBQXlCO0FBRXpCLDBCQUEwQjtBQUUxQiw2QkFBNkI7QUFFN0IscUJBQXNCO0FBRXRCLHVCQUF3QjtBQUV4QixzQkFBdUI7QUFHdkIsc0JBQThCO0FBRTlCLDZCQUEwQjtBQUkxQixpQ0FBOEI7QUFFOUIsMkJBQXdCO0FBRXhCLDhCQUEyQjtBQUUzQixzQkFBb0I7QUFBQTtBQUFBLElBRTVCLFdBQVc7QUFDUCxtQkFBSyxNQUFNLFVBQVUsWUFBSSxPQUFPO0FBQ2hDLFdBQUssVUFBVSxXQUFXLENBQUMsaUJBQVM7QUFDcEMsV0FBSyxVQUFVLFNBQVMsUUFBUSxpQkFBUztBQUN6QyxjQUFRLGVBQWU7QUFBQSxRQUNuQixLQUFLLFlBQVk7QUFBQSxRQUNqQixNQUFNLEVBQUUsUUFBUTtBQUFBO0FBRXBCLGNBQVEsZUFBZTtBQUFBLFFBQ25CLEtBQUssWUFBWTtBQUFBLFFBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFBQTtBQUFBLElBSXRCLFlBQVk7QUFDUixXQUFLLFNBQVMsZ0JBQWdCLElBQUksS0FBSyxRQUFRLE1BQU0sS0FBSztBQUMxRCxXQUFLLFNBQVMsaUJBQWlCO0FBRS9CLFdBQUs7QUFFTCxXQUFLLFdBQVc7QUFFaEIsV0FBSyxhQUFhO0FBQ2xCLFdBQUssZ0JBQWdCO0FBRXJCLFdBQUssZ0JBQWdCLEdBQUcsS0FBSyxNQUFNLE9BQU8sTUFBTSxNQUFNO0FBQ2xELGFBQUssc0JBQXNCLE9BQU8sS0FBSyxnQkFBZ0I7QUFDdkQsWUFBSSxLQUFLLHNCQUFzQixHQUFHO0FBQzlCLGVBQUssc0JBQXNCO0FBQzNCLGVBQUssZ0JBQWdCLE9BQU87QUFBQTtBQUdoQyxZQUFJLEtBQUssc0JBQXNCLEtBQUssZUFBZTtBQUMvQyxlQUFLLHNCQUFzQixLQUFLLGVBQWU7QUFFbkQsYUFBSztBQUFBO0FBQUE7QUFBQSxJQUliLGFBQWE7QUFDVCxVQUFJLElBQUksR0FDSixJQUFJLEdBQ0osWUFBWTtBQUNoQiwrQkFBaUIsS0FBSyxRQUFRLENBQUMsTUFBTTtBQXRHN0M7QUF1R1ksWUFBSSxDQUFDLEtBQUssU0FBUztBQUFJLGVBQUssU0FBUyxLQUFLO0FBQzFDLGFBQUssU0FBUyxHQUFHLEtBQUs7QUFDdEIsWUFBSSxFQUFFLEtBQUssTUFBTSxZQUFLLG1CQUFMLG1CQUFxQixLQUFLLEtBQUk7QUFDM0Msc0JBQVk7QUFBQTtBQUVoQjtBQUNBLFlBQUksSUFBSSxHQUFHO0FBQ1AsY0FBSTtBQUNKO0FBQUE7QUFBQTtBQUlSLFVBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxRQUFRO0FBQ3BDLGFBQUssa0JBQWtCO0FBQ3ZCLGFBQUssU0FBUyxnQkFBZ0I7QUFBQTtBQUdsQyxXQUFLLFNBQVMsUUFBUSxLQUFLO0FBQzNCLFdBQUssU0FBUyxVQUFVLENBQUMsS0FBSyxTQUFTO0FBQUE7QUFBQSxJQUduQyxlQUFlLE1BQWdCLEdBQVc7QUFDOUMsVUFBSSxPQUFPLEtBQUssU0FBUztBQUN6QixlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUN4QixZQUFJLE9BQU8sS0FBSyxlQUFlLFFBQVE7QUFDdkMsWUFBSSxLQUFLLElBQUk7QUFDVCxlQUFLLFVBQVU7QUFDZixlQUFLLGFBQWEsR0FBRyxLQUFLO0FBQzFCLGNBQUksT0FBTyxLQUFLLGVBQWU7QUFDL0IsZUFBSyxPQUFPLEtBQUssR0FBRyxLQUFLO0FBQ3pCLFVBQ0ksS0FBSyxlQUFlLFFBQ3RCLE9BQU8sR0FBRyxLQUFLLEdBQUcsS0FBSyxRQUFRLEtBQUssR0FBRztBQUV6QyxjQUFJLEtBQUssS0FBSyxTQUFTLGlCQUFpQixLQUFLLG1CQUFtQixLQUFLLFlBQVk7QUFDN0UsaUJBQUssTUFBTSxHQUFHLE1BQU0sRUFBRSxHQUFHLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTTtBQUNyRCxpQkFBSyxpQkFBaUIsS0FBSztBQUMzQixpQkFBSyxXQUFXLEtBQUs7QUFBQSxpQkFDbEI7QUFFSCxnQkFBSSxLQUFLLEtBQUs7QUFBSSxtQkFBSyxNQUFNLEdBQUcsTUFBTSxFQUFFLEdBQUcsTUFBTTtBQUFBO0FBQUEsZUFFbEQ7QUFDSCxlQUFLLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUszQixRQUFRLEdBQWU7QUFDbkIsY0FBUSxFQUFFLE9BQU87QUFBQSxhQUNSO0FBQ0QsdUJBQUssS0FBSyxNQUFNLFlBQUksTUFBTTtBQUMxQjtBQUFBLGFBQ0M7QUFBQSxhQUNBO0FBQUEsYUFDQTtBQUNELGVBQUssa0JBQWtCLEVBQUUsT0FBTztBQUNoQyxlQUFLLFNBQVM7QUFDZDtBQUFBLGFBQ0M7QUFDRCxlQUFLO0FBQ0wsY0FBSSxLQUFLLHNCQUFzQixLQUFLLGVBQWU7QUFDL0MsaUJBQUssc0JBQXNCLEtBQUssZUFBZTtBQUNuRCxlQUFLO0FBQ0w7QUFBQSxhQUNDO0FBQ0QsZUFBSztBQUNMLGNBQUksS0FBSyxzQkFBc0I7QUFBRyxpQkFBSyxzQkFBc0I7QUFDN0QsZUFBSztBQUNMO0FBQUEsYUFDQztBQUFBLGFBQ0E7QUFDRCxjQUFJLENBQUMsS0FBSyxVQUFVO0FBQ2hCO0FBQUEsaUJBQ0c7QUFDSCxpQkFBSyxXQUFXO0FBQ2hCLGdCQUFJLFVBQVUsRUFBRSxPQUFPLE1BQ25CLFNBQVMsRUFBRTtBQUVmLGdCQUFJLFdBQVcsV0FBVztBQUN0QixrQkFBSSxXQUFXLENBQUUsV0FBVSxLQUFLO0FBQzVCLHdCQUFRLGVBQWU7QUFBQSxrQkFDbkIsS0FBSyxZQUFZO0FBQUEsa0JBQ2pCLE1BQU0sRUFBRSxRQUFRO0FBQUE7QUFFcEIsd0JBQVEsZUFBZTtBQUFBLGtCQUNuQixLQUFLLFlBQVk7QUFBQSxrQkFDakIsTUFBTSxFQUFFLE1BQU07QUFBQTtBQUFBO0FBR3RCO0FBQUE7QUFHSix3QkFBWSxLQUNQLEtBQUs7QUFBQSxjQUNGLEtBQUssUUFBUTtBQUFBLGNBQ2IsTUFBbUM7QUFBQSxnQkFDL0IsSUFBSSxLQUFLLGVBQWUsS0FBSztBQUFBLGdCQUM3QixRQUFRLEtBQUs7QUFBQSxnQkFDYixNQUNJLFdBQVcsWUFDTCxtQkFBVyxpQkFDWCxtQkFBVztBQUFBO0FBQUEsZUFHNUIsS0FBSyxDQUFDLE1BQWdEO0FBQ25ELG1CQUFLLFVBQVUsV0FBVyxDQUFDLGlCQUFTO0FBQ3BDLG1CQUFLLFVBQVUsU0FBUyxRQUFRLGlCQUFTO0FBQ3pDLG1CQUFLLFdBQVc7QUFDaEIsdUNBQWlCLGFBQ2IsS0FBSyxlQUFlLEtBQUssSUFDekIsS0FBSztBQUVULG1CQUFLLFdBQVc7QUFDaEIsbUJBQUs7QUFDTCxtQkFBSyxTQUFTO0FBQ2Qsa0JBQUksQ0FBQyxLQUFLLFNBQVMsUUFBUTtBQUN2QixxQkFBSyxXQUFXO0FBQUE7QUFHcEIsa0JBQUksYUFBYTtBQUVqQixrQkFBSSxLQUFLLGVBQWU7QUFDcEIsMkJBQVcsS0FBSztBQUFBLGtCQUNaLEtBQUsscUJBQWEsTUFBTSxZQUFZLElBQUksbUJBQVc7QUFBQSxrQkFDbkQsT0FDSSxLQUFLLHNCQUNMLEtBQUssZ0JBQ0osWUFBVyxjQUFjLElBQUk7QUFBQSxrQkFDbEMsU0FBUztBQUFBO0FBQUE7QUFHakIsa0JBQUksS0FBSyxrQkFBa0I7QUFDdkIsMkJBQVcsS0FBSztBQUFBLGtCQUNaLEtBQUsscUJBQWEsTUFBTSxZQUFZLElBQUksbUJBQVc7QUFBQSxrQkFDbkQsT0FDSSxLQUFLLHNCQUNMLEtBQUssbUJBQ0osWUFBVyxjQUFjLElBQUk7QUFBQSxrQkFDbEMsU0FBUztBQUFBO0FBQUE7QUFJakIsa0JBQUksV0FBVyxhQUFhO0FBQ3hCLDZCQUFLLFlBQVksTUFBTSxVQUFVLG9CQUFvQjtBQUFBLGtCQUNqRDtBQUFBLGtCQUNBLEVBQUU7QUFBQTtBQUVOLHdCQUFRLGVBQWU7QUFBQSxrQkFDbkIsS0FBSyxZQUFZO0FBQUEsa0JBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFBQTtBQUl0QiwyQkFBSyxZQUFZLE1BQU0sVUFBVSxpQkFBb0M7QUFBQSxnQkFDakUsTUFBTSxLQUFLO0FBQUEsZ0JBQ1gsTUFBTTtBQUFBLGdCQUNOLFVBQVUsTUFBTTtBQUFBO0FBQUE7QUFHcEIsa0JBQUksaUJBQVMsVUFBVSxPQUFPLGlCQUFTLG9CQUFvQixJQUFJO0FBQzNELHdCQUFRLGVBQWU7QUFBQSxrQkFDbkIsS0FBSyxZQUFZO0FBQUEsa0JBQ2pCLE1BQU0sRUFBRSxRQUFRO0FBQUE7QUFHcEIsd0JBQVEsZUFBZTtBQUFBLGtCQUNuQixLQUFLLFlBQVk7QUFBQSxrQkFDakIsTUFBTSxFQUFFLFFBQVE7QUFBQTtBQUVwQix3QkFBUSxlQUFlO0FBQUEsa0JBQ25CLEtBQUssWUFBWTtBQUFBLGtCQUNqQixNQUFNLEVBQUUsTUFBTTtBQUFBO0FBRWxCLHdCQUFRLGVBQWU7QUFBQSxrQkFDbkIsS0FBSyxZQUFZO0FBQUEsa0JBQ2pCLE1BQU0sRUFBRSxNQUFNO0FBQUE7QUFBQTtBQUFBLGVBSXpCLE1BQU0sTUFBTTtBQUNULG1CQUFLLFdBQVc7QUFBQTtBQUFBO0FBSTVCO0FBQUE7QUFBQTtBQUFBLElBT0osV0FBVyxHQUFrQjtBQUNqQyxVQUFJLENBQUMsR0FBRztBQUNKLFFBQUMsS0FBSyxTQUFTLE9BQW9CLFVBQVU7QUFDN0M7QUFBQTtBQUdKLE1BQUMsS0FBSyxTQUFTLE9BQW9CLFVBQVU7QUFFN0MsV0FBSyxnQkFBZ0I7QUFDckIsV0FBSyxhQUFhO0FBRWxCLFdBQUssU0FBUyxPQUFPLEVBQUUsS0FBSztBQUM1QixXQUFLLFNBQVMsT0FBTyxFQUFFLEtBQUs7QUFDNUIsV0FBSyxTQUFTLE9BQU8sRUFBRSxLQUFLO0FBQzVCLFVBQUksV0FBK0I7QUFDbkMsZUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLEtBQUssS0FBSyxRQUFRLEtBQUs7QUFFekMsWUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLEdBQUc7QUFBTztBQUMzQixZQUFJLEVBQUUsS0FBSyxLQUFLLEdBQUcsSUFBSSxNQUFNLG1CQUFXLFFBQVE7QUFDNUMsc0JBQVksRUFBRSxLQUFLLEtBQUs7QUFDeEIsVUFBQyxLQUFLLGFBQWEsZUFBZSxRQUF1QixPQUNyRCxFQUFFLEtBQUssS0FBSyxHQUFHLElBQUk7QUFDdkIsZUFBSyxZQUFZLFNBQVMsS0FBSztBQUFBLGVBQzVCO0FBQ0gseUJBQWUsRUFBRSxLQUFLLEtBQUs7QUFDM0IsVUFBQyxLQUFLLGdCQUFnQixlQUFlLFFBQXVCLE9BQ3hELEVBQUUsS0FBSyxLQUFLLEdBQUcsSUFBSTtBQUN2QixlQUFLLFlBQVksU0FBUyxLQUFLO0FBQUE7QUFBQTtBQUl2QyxXQUFLLHNCQUFzQixFQUFFO0FBQzdCLFdBQUssZ0JBQWdCLHdDQUFXLFVBQVM7QUFDekMsV0FBSyxtQkFBbUIsOENBQWMsVUFBUztBQUMvQyxXQUFLO0FBQUE7QUFBQSxJQU1ELHdCQUF3QjtBQUM1QixXQUFLLGdCQUFnQixPQUFPLEtBQUssc0JBQXNCO0FBQ3ZELE1BQUMsS0FBSyxhQUFhLGVBQWUsU0FBd0IsT0FDdEQsS0FBSyxzQkFBc0IsS0FBSyxnQkFBZ0I7QUFDcEQsTUFBQyxLQUFLLGdCQUFnQixlQUFlLFNBQXdCLE9BQ3pELEtBQUssc0JBQXNCLEtBQUssbUJBQW1CO0FBQUE7QUFBQSxJQUczRCxjQUFvQjtBQUNoQixjQUFRLGVBQWU7QUFBQSxRQUNuQixLQUFLLFlBQVk7QUFBQSxRQUNqQixNQUFNO0FBQUE7QUFBQTtBQUFBOzs7QUNyVmxCLHlDQUFnRCxhQUFLLFdBQVc7QUFBQSxJQU01RCxTQUFTLEdBQStCO0FBQ3BDLFFBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLE9BQU8sRUFBRTtBQUM1QixXQUFLLFdBQVc7QUFDaEIsV0FBSyxLQUFLLFFBQVE7QUFDbEIsV0FBSyxLQUFLLGdCQUFnQixJQUFJLEtBQUssUUFBUSxNQUFNLEtBQUs7QUFDdEQsV0FBSyxLQUFLLGlCQUFpQjtBQUMzQixNQUFDLEtBQUssTUFBTSxlQUFlLFlBQTJCLFVBQVUsQ0FBQyxFQUFFO0FBQUE7QUFBQSxJQUcvRCxXQUFXLE1BQWtCLEdBQVc7QUFDNUMsWUFBTSxJQUFJLEtBQUssU0FBUztBQUN4QixNQUNJLEtBQUssZUFBZSxjQUFjLGVBQWUsVUFDbkQsT0FBTyxJQUFJLEVBQUU7QUFDZixNQUFDLEtBQUssZUFBZSxRQUF1QixPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUUsTUFBTSxlQUNuRSxTQUNBLEVBQUUsUUFBUTtBQUVkLFlBQU0sUUFBUSxLQUFLLGVBQWUsYUFBYSxlQUFlO0FBQzlELFVBQUksYUFBYSxxQkFBYSxNQUFNLFVBQVUsSUFBSSxjQUFjO0FBQ2hFLE1BQUMsS0FBSyxlQUFlLGFBQWEsZUFBZSxTQUF3QixPQUFPLEdBQzNFLFFBQU8sV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUMzQyxFQUFFLFNBRUQsV0FDQSxNQUFNO0FBQ1gsWUFBTSxPQUFPLEdBQUcsRUFBRSxRQUFRLHVCQUFRO0FBQ2xDLFlBQU0sUUFBUSxFQUFFLFFBQVEsWUFBWTtBQUFBO0FBQUEsSUFHeEMsUUFBUSxHQUFxQjtBQUN6QixjQUFRLEVBQUUsT0FBTztBQUFBLGFBQ1I7QUFDRCx1QkFBSyxLQUFLLE1BQU0sWUFBSSxNQUFNO0FBQzFCO0FBQUE7QUFBQTtBQUFBOzs7QUNaaEIseUJBQStCO0FBQUEsSUFhM0IsY0FBYTtBQUFBO0FBQUEsV0FDTixPQUFNO0FBQ1QsVUFBSSxNQUFnQixLQUFLLFdBQVc7QUFDcEMsVUFBSSxxQkFBb0I7QUFDeEIsVUFBSSx3QkFBdUI7QUFDM0IsVUFBSSw2QkFBNEI7QUFDaEMsVUFBSSx1QkFBc0I7QUFDMUIsVUFBSSwyQkFBMEI7QUFDOUIsVUFBSSw0QkFBMkI7QUFDL0IsVUFBSSwyQkFBMEI7QUFDOUIsVUFBSSw2QkFBNEI7QUFDaEMsVUFBSSx1QkFBc0I7QUFDMUIsVUFBSSwwQkFBeUI7QUFDN0IsVUFBSSxxQkFBb0I7QUFDeEIsVUFBSSxvQkFBbUI7QUFDdkIsVUFBSSxxQkFBb0I7QUFDeEIsVUFBSSx3QkFBdUI7QUFDM0IsVUFBSSxvQkFBbUI7QUFDdkIsVUFBSSxvQkFBbUI7QUFDdkIsVUFBSSwyQkFBMEI7QUFDOUIsVUFBSSxnQ0FBK0I7QUFDbkMsVUFBSSxpQ0FBZ0M7QUFDcEMsVUFBSSxxQkFBb0I7QUFDeEIsVUFBSSxvQkFBbUI7QUFDdkIsVUFBSSx1QkFBc0I7QUFDMUIsVUFBSSxvQkFBbUI7QUFDdkIsVUFBSSwwQkFBeUI7QUFDN0IsVUFBSSxzQkFBcUI7QUFDekIsVUFBSSx1QkFBc0I7QUFDMUIsVUFBSSxvQkFBbUI7QUFDdkIsVUFBSSx5QkFBd0I7QUFDNUIsVUFBSSw4QkFBNkI7QUFBQTtBQUFBO0FBM0M5QixFQURYLFdBQ1csUUFBYTtBQUNiLEVBRlgsV0FFVyxTQUFjO0FBQ2QsRUFIWCxXQUdXLFlBQWlCO0FBQ2pCLEVBSlgsV0FJVyxhQUFrQjtBQUNsQixFQUxYLFdBS1csU0FBYztBQUNkLEVBTlgsV0FNVyxTQUFjO0FBQ2QsRUFQWCxXQU9XLGFBQWU7QUFDZixFQVJYLFdBUVcsWUFBaUI7QUFDakIsRUFUWCxXQVNXLFFBQWM7QUFDZCxFQVZYLFdBVVcsT0FBYTtBQUNiLEVBWFgsV0FXVyxlQUFxQjtBQUNyQixFQVpYLFdBWVcsb0JBQTBCO0FBbUNyQyxhQUFXOzs7QUNsRVgsbUJBQVc7QUFBQSxJQUlQLGNBQWM7QUFDVixVQUFJLFVBQVUsVUFBVSxRQUFRLFlBQVksSUFBSTtBQUM1QyxlQUFPLFlBQVk7QUFBQTtBQUl2QixVQUFJLE9BQU87QUFBVyxlQUFPLEtBQUssV0FBVyxPQUFPLFdBQVc7QUFBQTtBQUMxRCxhQUFLLEtBQUssV0FBVyxPQUFPLFdBQVcsUUFBUSxLQUFLO0FBQ3pELFdBQUssY0FBYyxLQUFLLFdBQVc7QUFDbkMsV0FBSyxpQkFBaUIsS0FBSyxjQUFjO0FBQ3pDLFdBQUssTUFBTSxZQUFZLFdBQVc7QUFDbEMsV0FBSyxNQUFNLGFBQWEsV0FBVztBQUNuQyxXQUFLLE1BQU0sU0FBUyxXQUFXO0FBQy9CLFdBQUssTUFBTSxTQUFTLFdBQVc7QUFFL0IsV0FBSyxJQUFJLG9CQUFvQixXQUFXO0FBR3hDLFVBQUksV0FBVyxTQUFTLEtBQUssTUFBTSxlQUFlLFlBQVk7QUFDMUQsYUFBSztBQUNULFVBQUksV0FBVyxnQkFBZ0IsS0FBSztBQUFxQixhQUFLLG9CQUFvQjtBQUNsRixVQUFJLFdBQVc7QUFBTSxhQUFLLEtBQUs7QUFDL0IsV0FBSyxpQkFBaUI7QUFDdEIsV0FBSyxNQUFNLFVBQVU7QUFFckIsTUFBYyxVQUFVLFNBQXhCLFdBQWlDLFdBQVcsUUFBUSxLQUFLLEtBQUs7QUFHOUQsV0FBSyxnQkFBZ0IsT0FDakIsZ0JBQ0EsS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLGtCQUMvQixLQUFLLGdCQUFnQjtBQUFBO0FBQUEsSUFJN0Isa0JBQXdCO0FBRXBCLFdBQUssaUJBQWlCLE9BQ2xCLG1CQUNBLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSztBQUFBO0FBQUEsSUFJakMsaUJBQWlCO0FBQUE7QUFFbkIsZUFBTyxvQkFBb0I7QUFDM0Isb0NBQW9CO0FBQ3BCLG9CQUFZLEtBQUssS0FBSyxtQkFBVztBQUNqQyxxQkFBSyxZQUFZLEdBQUcsVUFBVSxZQUFZLE1BQU0sS0FBSztBQUNyRCxhQUFLLGFBQWEsZ0JBQWdCO0FBQ2xDLGdCQUFRO0FBSVIsY0FBTSxJQUFJLFFBQVEsQ0FBQyxZQUFZO0FBQzNCLHNCQUFZLEtBQUssS0FBSyxZQUFJLE1BQU0sV0FBVztBQUFBLFlBQ3ZDLFVBQVU7QUFBQSxZQUNWLE1BQU07QUFBQSxjQUNGLE1BQU0sQ0FBQyxNQUFNO0FBQ1QscUJBQUssYUFBYTtBQUNsQix3QkFBUTtBQUFBO0FBQUE7QUFBQSxZQUdoQixVQUFVLENBQUMsTUFBTTtBQUNiLG1CQUFLLE1BQU0sVUFBVSxHQUFHLE1BQU0sTUFBTTtBQUNoQyx3QkFBUSxlQUFlLEVBQUUsS0FBSyxZQUFZLFlBQVksTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYTVFLGFBQUs7QUFBQTtBQUFBO0FBQUEsSUFHVCxZQUFZO0FBQ1IsV0FBSyxPQUFPLEtBQ1IsWUFBSSxRQUNKLEtBQUssUUFBUSxPQUFPLE1BQU0sTUFBTTtBQUM1QixnQkFBUSxJQUFJO0FBS1oscUJBQUssTUFBTSxVQUFVLFlBQUksT0FBTyxLQUFLO0FBRXJDLGFBQUssTUFBTSxVQUFVLEdBQUcsTUFBTSxNQUFNO0FBQ2hDLGVBQUssS0FBSyxnQkFBZ0I7QUFDMUIsc0JBQVksS0FBSyxLQUFLLFdBQVc7QUFBQTtBQUFBLFVBR3pDLEtBQUssUUFBUSxPQUNULE1BQ0EsQ0FBQyxNQUFNO0FBQ0gsNEJBQVksTUFBTSxVQUFVLGVBQWU7QUFBQSxTQUUvQyxNQUNBO0FBQUE7QUFBQSxJQUtaLGFBQWEsR0FBWTtBQUFBO0FBQUE7QUE5R2xCLEVBRlgsS0FFVyxpQkFBMkI7QUFpSHRDLE1BQUk7IiwKICAibmFtZXMiOiBbXQp9Cg==
