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
    AppEventMap2["appleLogin"] = "appleLogin";
    AppEventMap2["wxLogin"] = "wxLogin";
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
  console.log("test");
  var baseUrl = "http://game.ahd168.com:3000";
  switch ("test") {
    case BuildType.debug:
      baseUrl = "//192.168.101.50:3000";
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
  var Table = { "task": [{ "id": 1001, "reward": "1001:50", "times": 1, "title": "\u7B7E\u5230\u9886\u94BB\u77F3", "desc": "\u770B\u89C6\u9891\u7B7E\u5230", "icon": null }, { "id": 1002, "reward": "1001:100", "times": 10, "title": "\u83DC\u5730\u65BD\u80A510\u6B21", "desc": "\u83DC\u5730\u52A0\u901F10\u6B21", "icon": null }, { "id": 1003, "reward": "1001:50", "times": 10, "title": "\u83DC\u5730\u6536\u83B710\u6B21", "desc": "\u83DC\u5730\u6536\u83B710\u6B21", "icon": null }, { "id": 1004, "reward": "1001:50", "times": 5, "title": "\u5077\u83DC5\u6B21", "desc": "\u5077\u83DC5\u6B21", "icon": null }, { "id": 1005, "reward": "1002:200", "times": 3, "title": "\u5582\u517B\u72D7\u72D73\u6B21", "desc": "\u5582\u517B\u72D7\u72D73\u6B21", "icon": null }, { "id": 1013, "reward": "1001:50", "times": 5, "title": "\u9080\u8BF7\u597D\u53CB", "desc": "\u9080\u8BF75\u4E2A\u597D\u53CB", "icon": null }, { "id": 1007, "reward": "1001:20", "times": 10, "title": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "desc": "\u8D2D\u4E70\u79CD\u5B5010\u6B21", "icon": null }, { "id": 1008, "reward": "1002:500", "times": 3, "title": "\u51FA\u552E\u4F5C\u72693\u6B21", "desc": "\u51FA\u552E\u4F5C\u72693\u6B21", "icon": null }, { "id": 1009, "reward": "1001:100", "times": 5, "title": "\u6DFB\u52A0\u597D\u53CB", "desc": "\u6DFB\u52A0\u597D\u53CB5\u4E2A", "icon": null }, { "id": 1010, "reward": "1001:100", "times": 10, "title": "\u5206\u4EAB\u5F97\u597D\u793C", "desc": "\u5206\u4EAB10\u6B21", "icon": null }, { "id": 1011, "reward": "1002:500", "times": 3, "title": "\u4EFB\u610F\u79CD\u690D", "desc": "\u4EFB\u610F\u79CD\u690D3\u6B21", "icon": null }, { "id": 1012, "reward": "1001:50", "times": 5, "title": "\u770B\u89C6\u9891\u9886\u798F\u5229", "desc": "\u770B\u89C6\u98915\u6B21", "icon": null }], "signIn": [{ "id": 1001, "days": 7, "reward": "1001:20000" }, { "id": 1002, "days": 10, "reward": "1001:30000" }, { "id": 1003, "days": 15, "reward": "1001:50000" }, { "id": 1004, "days": 20, "reward": "1001:80000" }, { "id": 1005, "days": 30, "reward": "1001:120000" }, { "id": 1006, "days": 50, "reward": "1001:180000" }, { "id": 1007, "days": 80, "reward": "1001:300000" }, { "id": 1008, "days": 100, "reward": "1001:350000" }, { "id": 1009, "days": 150, "reward": "1001:500000" }], "plant": [{ "id": 1001, "name": "\u6C34\u7A3B", "icon": "plant_icon/1002_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1002, "name": "\u5927\u8C46", "icon": "plant_icon/1004_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1003, "name": "\u5927\u849C", "icon": "plant_icon/1012_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "240", "unlock_cost": null, "unlock_reward": null, "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1004, "name": "\u5305\u5FC3\u83DC", "icon": "plant_icon/1006_seed.png", "seed_price": "1002:75", "gain": "1001:1,1002:75", "harvest": "1~2", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1005, "name": "\u571F\u8C46", "icon": "plant_icon/1007_seed.png", "seed_price": "1002:75", "gain": "1001:1,1002:75", "harvest": "2~3", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1006, "name": "\u841D\u535C", "icon": "plant_icon/1005_seed.png", "seed_price": "1002:75", "gain": "1001:1,1002:75", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1007, "name": "\u5C0F\u9EA6", "icon": "plant_icon/1001_seed.png", "seed_price": "1002:120", "gain": "1001:3,1002:120", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1008, "name": "\u8FA3\u6912", "icon": "plant_icon/1010_seed.png", "seed_price": "1002:120", "gain": "1001:3,1002:120", "harvest": "2~3", "mature_time": "600", "unlock_cost": "1002:2000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1009, "name": "\u9EC4\u74DC", "icon": "plant_icon/1011_seed.png", "seed_price": "1002:200", "gain": "1001:5,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1010, "name": "\u8304\u5B50", "icon": "plant_icon/1013_seed.png", "seed_price": "1002:200", "gain": "1001:5,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1011, "name": "\u80E1\u841D\u535C", "icon": "plant_icon/1008_seed.png", "seed_price": "1002:350", "gain": "1001:7,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:4500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1012, "name": "\u5357\u74DC", "icon": "plant_icon/1014_seed.png", "seed_price": "1002:350", "gain": "1001:7,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:5000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1013, "name": "\u7389\u7C73", "icon": "plant_icon/1003_seed.png", "seed_price": "1002:500", "gain": "1001:10,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:5500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1014, "name": "\u7518\u8517", "icon": "plant_icon/1015_seed.png", "seed_price": "1002:500", "gain": "1001:10,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6000", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }, { "id": 1015, "name": "\u756A\u8304", "icon": "plant_icon/1009_seed.png", "seed_price": "1002:500", "gain": "1001:10,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6500", "unlock_reward": "1001:0,1002:0", "desc": "\u79CD\u4E0B\u4E00\u7C92\u79CD\u5B50\uFF0C\u6536\u83B7\u6574\u4E2A\u4E16\u754C" }], "pet": [{ "id": 1001, "name": "\u65FA\u8D22", "icon": "pet_feed/1001_dog.png", "vitality_max": 100, "vitality_consume": 10, "cost": "1002:3000", "desc": "\u7231\u5B83\u5C31\u4E70\u5B83~\u5B83\u5C31\u662F\u6709\u70B9\u61D2~", "sensitive": 30, "ability": 35 }, { "id": 1002, "name": "\u6C64\u5706", "icon": "pet_feed/1007_dog.png", "vitality_max": 100, "vitality_consume": 15, "cost": "1002:4000", "desc": "\u989C\u503C\u3001\u667A\u5546\u53CC\u53CC\u5728\u7EBF", "sensitive": 35, "ability": 35 }, { "id": 1003, "name": "\u8089\u5E72", "icon": "pet_feed/1009_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:4500", "desc": "\u6700\u5FE0\u8BDA\u7684\u4F19\u4F34", "sensitive": 40, "ability": 40 }, { "id": 1004, "name": "\u4E8C\u54C8", "icon": "pet_feed/1002_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:5000", "desc": "\u7EDD\u4E0D\u62C6\u5BB6\uFF01", "sensitive": 45, "ability": 45 }, { "id": 1005, "name": "\u5927\u773C\u775B", "icon": "pet_feed/1005_dog.png", "vitality_max": 100, "vitality_consume": 17, "cost": "1002:7000", "desc": "\u6D3B\u597D\u5403\u7684\u5C11", "sensitive": 50, "ability": 50 }, { "id": 1006, "name": "\u5C0F\u5C3E\u5DF4", "icon": "pet_feed/1004_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:7500", "desc": "\u6B66\u529B\u5929\u8D4B\u5DF2\u70B9\u6EE1~\u62FF\u634F\uFF01", "sensitive": 50, "ability": 55 }, { "id": 1007, "name": "\u7403\u7403", "icon": "pet_feed/1008_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u5C31\u4E24\u4E2A\u5B57\uFF0C\u542C\u8BDD\uFF01", "sensitive": 53, "ability": 60 }, { "id": 1008, "name": "\u5C0F\u767D", "icon": "pet_feed/1003_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "\u770B\u5BB6\u3001\u770B\u83DC\u3001\u770B\u5B69\u5B50", "sensitive": 58, "ability": 65 }, { "id": 1009, "name": "\u70B9\u70B9", "icon": "pet_feed/1006_dog.png", "vitality_max": 100, "vitality_consume": 19, "cost": "1002:10000", "desc": "\u4F60\u503C\u5F97\u62E5\u6709\uFF01", "sensitive": 60, "ability": 70 }, { "id": 1010, "name": "\u95F7\u58A9", "icon": "pet_feed/1010_dog.png", "vitality_max": 100, "vitality_consume": 30, "cost": "1002:15000", "desc": "\u957F\u5F97\u5C31\u5F88\u51F6\uFF0C\u6293\u5C0F\u5077\u66F4\u51F6", "sensitive": 65, "ability": 80 }], "order": [{ "id": 1, "commission": "1.12", "condition": "1001:2", "extra_reward": "1001:80" }, { "id": 2, "commission": "0.87", "condition": "1001:1,1002:2", "extra_reward": "1001:80" }, { "id": 3, "commission": "0.69", "condition": "1001:1,1003:2,1002:3", "extra_reward": "1001:80" }, { "id": 4, "commission": "0.61", "condition": "1002:4,1003:3,1004:3,1001:4", "extra_reward": "1001:80" }, { "id": 5, "commission": "0.61", "condition": "1004:6,1002:5,1005:4,1001:5", "extra_reward": "1001:80" }, { "id": 6, "commission": "0.68", "condition": "1003:10,1004:5,1005:3,1006:3", "extra_reward": "1001:80" }, { "id": 7, "commission": "0.43", "condition": "1007:4,1003:5,1004:7,1006:10", "extra_reward": "1001:80" }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:5,1002:5", "extra_reward": "1001:80" }, { "id": 9, "commission": "0.39", "condition": "1006:2,1009:10,1007:8,1003:8", "extra_reward": "1001:80" }, { "id": 10, "commission": "0.22", "condition": "1006:10,1010:5,1008:10,1009:6", "extra_reward": "1001:80" }, { "id": 11, "commission": "0.76", "condition": "1009:5,1004:10,1001:9,1002:10", "extra_reward": "1001:100" }, { "id": 12, "commission": "0.43", "condition": "1007:6,1003:11,1011:6,1005:10", "extra_reward": "1001:100" }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:8", "extra_reward": "1001:100" }, { "id": 14, "commission": "0.55", "condition": "1013:10,1008:8,1006:6,1001:10", "extra_reward": "1001:100" }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:10,1011:12,1001:10", "extra_reward": "1001:100" }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17", "extra_reward": "1001:100" }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:6,1015:12,1001:14", "extra_reward": "1001:100" }, { "id": 18, "commission": 0.48, "condition": "1008:14,1011:12,1009:15,1002:5", "extra_reward": "1001:100" }, { "id": 19, "commission": 0.75, "condition": "1013:10,1003:20,1014:11,1001:7", "extra_reward": "1001:100" }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:12", "extra_reward": "1001:100" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:14,1005:16,1007:15", "extra_reward": "1001:120" }, { "id": 22, "commission": "0.4", "condition": "1015:19,1007:12,1011:5,1004:17", "extra_reward": "1001:120" }, { "id": 23, "commission": "0.4", "condition": "1003:19,1014:22,1015:16,1008:14", "extra_reward": "1001:120" }, { "id": 24, "commission": 0.77, "condition": "1014:13,1001:17,1008:18,1004:15", "extra_reward": "1001:120" }, { "id": 25, "commission": "0.39", "condition": "1012:23,1011:19,1010:15,1015:20", "extra_reward": "1001:120" }, { "id": 26, "commission": 0.03, "condition": "1002:21,1011:12,1012:22,1003:19", "extra_reward": "1001:120" }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:20,1011:17", "extra_reward": "1001:120" }, { "id": 28, "commission": 0.53, "condition": "1014:17,1007:12,1011:17,1003:17", "extra_reward": "1001:120" }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:18", "extra_reward": "1001:120" }, { "id": 30, "commission": "0.34", "condition": "1011:17,1014:19,1006:14,1004:30", "extra_reward": "1001:120" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:19,1006:11", "extra_reward": "1001:150" }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:22,1012:12,1008:20", "extra_reward": "1001:150" }, { "id": 33, "commission": "0.44", "condition": "1012:16,1013:20,1002:23,1009:16", "extra_reward": "1001:150" }, { "id": 34, "commission": "0.42", "condition": "1009:19,1010:12,1011:14,1012:20", "extra_reward": "1001:150" }, { "id": 35, "commission": "0.33", "condition": "1001:18,1004:19,1013:16,1003:20", "extra_reward": "1001:150" }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:17,1007:19", "extra_reward": "1001:150" }, { "id": 37, "commission": 0.44, "condition": "1012:19,1010:20,1002:14,1011:11", "extra_reward": "1001:150" }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18", "extra_reward": "1001:150" }, { "id": 39, "commission": 0.36, "condition": "1007:18,1012:13,1004:16,1002:26", "extra_reward": "1001:150" }, { "id": 40, "commission": 0.28, "condition": "1004:30,1005:10,1008:18,1011:16", "extra_reward": "1001:150" }, { "id": 41, "commission": "0.48", "condition": "1010:18,1009:18,1008:17,1011:26", "extra_reward": "1001:500" }, { "id": 42, "commission": 0.43, "condition": "1009:21,1005:18,1007:20,1002:23", "extra_reward": "1001:800" }, { "id": 43, "commission": "0.24", "condition": "1006:30,1004:14,1014:11,1008:15", "extra_reward": "1001:1000" }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:28,1002:34,1007:19", "extra_reward": "1001:1600" }, { "id": 45, "commission": "0.41", "condition": "1012:15,1010:23,1007:13,1011:13", "extra_reward": "1001:2200" }, { "id": 46, "commission": 0.39, "condition": "1003:22,1007:23,1010:16,1002:24", "extra_reward": "1001:2800" }, { "id": 47, "commission": 0.49, "condition": "1010:24,1015:20,1003:25,1014:16", "extra_reward": "1001:3400" }, { "id": 48, "commission": "0.26", "condition": "1013:17,1007:24,1008:37,1001:30", "extra_reward": "1001:4000" }, { "id": 49, "commission": 0.48, "condition": "1002:26,1004:21,1009:22,1006:20", "extra_reward": "1001:4600" }, { "id": 50, "commission": "0.25", "condition": "1006:27,1012:19,1008:20,1015:11", "extra_reward": "1001:5200" }, { "id": 51, "commission": "0.34", "condition": "1011:18,1004:19,1002:25,1003:11", "extra_reward": "1001:5800" }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:20,1001:25,1004:26", "extra_reward": "1001:6400" }, { "id": 53, "commission": "0.28", "condition": "1014:14,1012:12,1010:20,1015:18", "extra_reward": "1001:7000" }, { "id": 54, "commission": 0.45, "condition": "1005:22,1002:33,1009:16,1015:17", "extra_reward": "1001:7600" }, { "id": 55, "commission": "0.56", "condition": "1001:23,1014:19,1005:17,1010:15", "extra_reward": "1001:8200" }, { "id": 56, "commission": "0.35", "condition": "1006:27,1005:29,1009:17,1003:18", "extra_reward": "1001:8800" }, { "id": 57, "commission": 0.67, "condition": "1007:21,1008:17,1002:16,1009:25", "extra_reward": "1001:9400" }, { "id": 58, "commission": 0.32, "condition": "1006:20,1008:25,1005:24,1007:19", "extra_reward": "1001:10000" }, { "id": 59, "commission": 0.79, "condition": "1012:25,1009:30,1013:16,1008:15", "extra_reward": "1001:10600" }, { "id": 60, "commission": 0.69, "condition": "1015:26,1012:27,1010:31,1001:23", "extra_reward": "1001:11200" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:25,1011:15,1002:17", "extra_reward": "1001:11800" }, { "id": 62, "commission": 0.44, "condition": "1015:21,1007:15,1011:18,1006:26", "extra_reward": "1001:12400" }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:27", "extra_reward": "1001:13000" }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:29,1004:25", "extra_reward": "1001:13600" }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:30,1014:20,1005:15", "extra_reward": "1001:14200" }, { "id": 66, "commission": 0.73, "condition": "1004:25,1008:25,1002:34,1012:14", "extra_reward": "1001:14800" }, { "id": 67, "commission": 0.13, "condition": "1001:36,1012:20,1011:20,1003:20", "extra_reward": "1001:15400" }, { "id": 68, "commission": 0.69, "condition": "1013:24,1008:23,1006:16,1007:17", "extra_reward": "1001:16000" }, { "id": 69, "commission": 0.37, "condition": "1015:30,1004:29,1013:17,1009:10", "extra_reward": "1001:16600" }, { "id": 70, "commission": 0.71, "condition": "1010:23,1004:31,1011:17,1012:11", "extra_reward": "1001:17200" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:26,1003:28,1015:13", "extra_reward": "1001:17800" }, { "id": 72, "commission": 0.31, "condition": "1005:25,1002:38,1012:19,1010:14", "extra_reward": "1001:18400" }, { "id": 73, "commission": 0.39, "condition": "1012:34,1006:22,1003:27,1004:20", "extra_reward": "1001:19000" }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:30,1001:20", "extra_reward": "1001:19600" }, { "id": 75, "commission": 0.18, "condition": "1006:31,1014:30,1008:12,1002:25", "extra_reward": "1001:20200" }, { "id": 76, "commission": 0.51, "condition": "1007:21,1012:20,1004:11,1014:20", "extra_reward": "1001:20800" }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:16,1012:24,1007:30", "extra_reward": "1001:21400" }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:22", "extra_reward": "1001:22000" }, { "id": 79, "commission": 0.65, "condition": "1006:26,1004:18,1007:12,1011:27", "extra_reward": "1001:22600" }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:24", "extra_reward": "1001:23200" }, { "id": 81, "commission": 0.14, "condition": "1012:20,1015:28,1002:24,1003:38", "extra_reward": "1001:23800" }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14", "extra_reward": "1001:24400" }, { "id": 83, "commission": 0.53, "condition": "1010:19,1003:38,1007:22,1015:20", "extra_reward": "1001:25000" }, { "id": 84, "commission": 0.62, "condition": "1005:29,1014:26,1002:18,1007:38", "extra_reward": "1001:25600" }, { "id": 85, "commission": 0.37, "condition": "1011:20,1001:17,1012:12,1004:32", "extra_reward": "1001:26200" }, { "id": 86, "commission": 0.59, "condition": "1009:25,1011:20,1006:14,1015:21", "extra_reward": "1001:26800" }, { "id": 87, "commission": "0.31", "condition": "1006:26,1005:19,1013:20,1014:29", "extra_reward": "1001:27400" }, { "id": 88, "commission": "0.48", "condition": "1008:37,1011:24,1015:12,1014:11", "extra_reward": "1001:28000" }, { "id": 89, "commission": "0.22", "condition": "1002:17,1003:28,1005:22,1010:31", "extra_reward": "1001:28600" }, { "id": 90, "commission": 0.32, "condition": "1002:39,1013:28,1007:25,1001:33", "extra_reward": "1001:29200" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:20,1014:10,1007:26", "extra_reward": "1001:29800" }, { "id": 92, "commission": 0.13, "condition": "1004:38,1011:13,1008:15,1007:29", "extra_reward": "1001:30400" }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:39,1006:38,1008:31", "extra_reward": "1001:31000" }, { "id": 94, "commission": 0.22, "condition": "1002:36,1014:27,1013:16,1005:31", "extra_reward": "1001:31600" }, { "id": 95, "commission": 0.15, "condition": "1005:26,1011:34,1015:34,1008:16", "extra_reward": "1001:32200" }, { "id": 96, "commission": "0.49", "condition": "1003:24,1001:34,1007:28,1005:30", "extra_reward": "1001:32800" }, { "id": 97, "commission": "0.6", "condition": "1013:32,1009:33,1006:30,1011:40", "extra_reward": "1001:33400" }, { "id": 98, "commission": "0.35", "condition": "1014:40,1009:43,1015:33,1012:45", "extra_reward": "1001:34000" }, { "id": 99, "commission": "0.44", "condition": "1011:39,1008:37,1009:30,1013:42", "extra_reward": "1001:34600" }, { "id": 100, "commission": "0.49", "condition": "1012:40,1010:33,1013:30,1011:40", "extra_reward": "1001:35200" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1002:0", "gain": null, "probability": 0.1, "get_diamond": 1 }, { "id": 2, "reward": "1002:1500", "cost": "1002:5000", "gain": 0.1, "probability": 0.13, "get_diamond": 1 }, { "id": 3, "reward": "1002:2000", "cost": "1002:10000", "gain": 0.25, "probability": 0.25, "get_diamond": 2 }, { "id": 4, "reward": "1002:2500", "cost": "1002:20000", "gain": 0.4, "probability": 0.38, "get_diamond": 3 }, { "id": 5, "reward": "1002:3000", "cost": "1002:50000", "gain": 0.55, "probability": 0.5, "get_diamond": 5 }], "feed": [{ "id": 1001, "name": "\u997C\u5E72", "icon": "pet_feed/1001_feed.png", "vitality": 1, "cost": "1002:30", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1002, "name": "\u575A\u679C", "icon": "pet_feed/1002_feed.png", "vitality": 2, "cost": "1002:50", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1003, "name": "\u706B\u817F", "icon": "pet_feed/1003_feed.png", "vitality": 5, "cost": "1002:100", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1004, "name": "\u725B\u8089", "icon": "pet_feed/1004_feed.png", "vitality": 50, "cost": "1002:900", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1005, "name": "\u732A\u8089", "icon": "pet_feed/1005_feed.png", "vitality": 20, "cost": "1002:460", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }, { "id": 1006, "name": "\u9E21\u8089", "icon": "pet_feed/1006_feed.png", "vitality": 10, "cost": "1002:270", "desc": "\u53EF\u589E\u52A0\u5BA0\u7269&\u70B9\u4F53\u529B" }], "currency": [{ "id": 1001, "name": "\u94BB\u77F3", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "\u91D1\u5E01", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_times", "value": 30 }, { "id": "all_speed_up_time", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:5000,1002:10000,1002:20000,1002:30000,1002:40000,1002:50000,1002:60000" }, { "id": "goldDefault", "value": "1002:100" }, { "id": "diamondDefault", "value": "1001:50" }, { "id": "ADTimesLimit", "value": 50 }, { "id": "ADSpeedUptimes", "value": 6 }, { "id": "vitalityBuyCostGold", "value": "1002:10000" }, { "id": "vitalityLimit", "value": 3 }, { "id": "Initial_physical_strength", "value": 3 }, { "id": "landAmountMax", "value": 9 }, { "id": "petDefaultVitality", "value": 100 }, { "id": "petDigestIntervalTime", "value": 3600 }, { "id": "Videorewards", "value": "1001:450:600,1001:250:350,1001:200:300,1001:100:200,1001:80:100" }, { "id": "withdrawal", "value": "1001:10000:1" }, { "id": "Invitation_rewards", "value": "1001:5000" }, { "id": "withdrawal_times", "value": "0.3:1:0:0,5:1:6:30,10:1:15:60,50:1:50:80,100:1:100:90,200:0:200:97" }] };

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
      this.isBindWx = 0;
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
    ApiHttp2["userBind"] = "/user/bind";
  })(ApiHttp || (ApiHttp = {}));

  // src/common/Heartbeat.ts
  var HeartbeatControl = class {
    constructor() {
      this.intervalTime = 60;
    }
    init() {
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
        }).catch(() => {
          this.error();
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
        }).catch(() => {
          this.error();
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
    error() {
      if (this.timeId) {
        clearTimeout(this.timeId);
      }
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
      UserInfo_default.isBindWx = d.userInfo.isBindWx;
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
      UserInfo_default.isBindWx = 0;
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
      this.xhrList = [];
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
              this.queueXhrEvent();
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
              this.queueXhrEvent();
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
            if (UserInfo_default.days > 1) {
              if (adData == null ? void 0 : adData.data["hasClicked"]) {
                UserInfo_default.continuousAdTimes = 0;
              } else {
                UserInfo_default.continuousAdTimes++;
              }
              Laya.timer.once(100, this, () => {
                _HttpControl.inst.send({
                  api: ApiHttp.adRecordNotClick,
                  data: { times: UserInfo_default.continuousAdTimes }
                });
              });
            }
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
          if (!data.api) {
            core_default.view.open(Res_default.views.HintView, {
              parm: { text: `http \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A` }
            });
            return reject(null);
          }
          xhr.open("POST", uri, true);
          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhr.setRequestHeader("Authorization", `Bearer ${LocalStorageService_default.getJSON().token}`);
          this.xhrList.push({ xhr, data: sendDataString, sendData: data });
          if (this.xhrList.length > 1) {
            return;
          }
          this.queueXhrEvent(true);
        }));
      });
    }
    queueXhrEvent(first = false) {
      if (!first)
        this.xhrList.splice(0, 1);
      if (this.xhrList.length) {
        console.log(`%c ==> send %c${this.xhrList[0].sendData.api} %c${JSON.stringify(this.xhrList[0].sendData.data)}`, `color:#82ccdd;font-weight:700;`, `color:#eb4d4b;font-weight:700;`, `color:#f8c291;font-weight:700;`);
        this.xhrList[0].xhr.send(this.xhrList[0].data);
      }
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
            core_default.view.openHint({
              text: "\u91D1\u5E01\u4E0D\u8DB3\uFF0C\u53BB\u4ED3\u5E93\u51FA\u552E\u53EF\u4EE5\u83B7\u5F97\u91D1\u5E01\uFF0C\u5077\u83DC\u83B7\u5F97\u7684\u852C\u83DC\u4E5F\u53EF\u4EE5\u51FA\u552E\u83B7\u5F97\u91D1\u5E01\u54E6",
              call: () => {
              }
            });
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
            core_default.view.openHint({
              text: "\u91D1\u5E01\u4E0D\u8DB3\uFF0C\u53BB\u4ED3\u5E93\u51FA\u552E\u53EF\u4EE5\u83B7\u5F97\u91D1\u5E01\uFF0C\u5077\u83DC\u83B7\u5F97\u7684\u852C\u83DC\u4E5F\u53EF\u4EE5\u51FA\u552E\u83B7\u5F97\u91D1\u5E01\u54E6",
              call: () => {
              }
            });
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
      this.cost = 0;
    }
    onOpened(e) {
      this.data = e;
      let nextLand = TableAnalyze_default.table("landLevel").get(e.obj.level + 1);
      this.priceLabel.text = `\u4EF7\u683C\uFF1A${nextLand.cost.count}`;
      this.priceIcon.skin = nextLand.cost.obj.icon;
      this.cost = nextLand.cost.count;
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
          if (e.target.name == "upgradeBtn" && this.cost > UserInfo_default.gold) {
            core_default.view.openHint({
              text: "\u91D1\u5E01\u4E0D\u8DB3\uFF0C\u53BB\u4ED3\u5E93\u51FA\u552E\u53EF\u4EE5\u83B7\u5F97\u91D1\u5E01\uFF0C\u5077\u83DC\u83B7\u5F97\u7684\u852C\u83DC\u4E5F\u53EF\u4EE5\u51FA\u552E\u83B7\u5F97\u91D1\u5E01\u54E6",
              call: () => {
              }
            });
            return;
          }
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

  // src/common/BindWx.ts
  var WxBindControl = class {
    get isBindWx() {
      if (!UserInfo_default.isBindWx) {
        core_default.view.openHint({
          text: "\u63D0\u73B0\u9700\u8981\u7ED1\u5B9A\u5FAE\u4FE1\u8D26\u53F7",
          call: () => {
            this.bindWx();
          },
          cancelCall: () => {
          }
        });
      }
      return UserInfo_default.isBindWx;
    }
    bindWx() {
      return __async(this, null, function* () {
        const data = yield AppCore.runAppFunction({
          uri: AppEventMap.wxLogin,
          data: {},
          timestamp: Date.now()
        });
        if (data) {
          if (data.code) {
            core_default.view.openHint({
              text: `\u83B7\u53D6\u5FAE\u4FE1openid\u5931\u8D25[${data.code}]\uFF0C\u8BF7\u91CD\u8BD5`,
              call: () => {
                this.bindWx();
              },
              cancelCall: () => {
              }
            });
          } else {
            HttpControl.inst.send({
              api: ApiHttp.userBind,
              data: {
                openid: data.data["openid"],
                avatar: data.data["iconurl"],
                nickname: data.data["name"]
              }
            }).then(() => {
              UserInfo_default.isBindWx = 1;
              if (data.data["name"])
                UserInfo_default.nickname = data.data["name"];
              if (data.data["iconurl"])
                UserInfo_default.avatar = data.data["iconurl"];
              core_default.view.openHint({
                text: `\u7ED1\u5B9A\u6210\u529F`,
                call: () => {
                }
              });
            }).catch(() => {
              core_default.view.openHint({
                text: `\u7ED1\u5B9A\u5931\u8D25\uFF0C\u662F\u5426\u91CD\u8BD5\uFF1F`,
                call: () => {
                  this.bindWx();
                },
                cancelCall: () => {
                }
              });
            });
          }
        }
      });
    }
  };
  var BindWx_default = new WxBindControl();

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
      if (!BindWx_default.isBindWx) {
        return;
      }
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
        if (UserInfo_default.vitality <= 0) {
          core_default.view.openHint({ text: "\u4F53\u529B\u4E0D\u8DB3", call: () => {
          } });
          this.canClick = true;
          return;
        }
        if (!this.canSteal || this.stealUid && !((_a = this.data) == null ? void 0 : _a.canSteal)) {
          console.log("\u5DF2\u7ECF\u4E0D\u53EF\u5077");
          core_default.view.openHint({ text: "\u7ED9\u6211\u7559\u70B9\u5427", call: () => {
          } });
          return;
        }
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
        core_default.audio.playSound(Res_default.audios.goujiaosheng);
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
        let vitality = e / TableAnalyze_default.table("config").get("vitalityLimit").value;
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
          if (UserInfo_default.vitality <= 0) {
            core_default.view.openHint({ text: "\u4F53\u529B\u4E0D\u8DB3", call: () => {
            } });
            this.canClick = true;
            return;
          }
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
          Laya.timer.once(500, this, () => {
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
        if (!d.obj)
          return;
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
      const nickname = d == null ? void 0 : d.nickname, pedId = d == null ? void 0 : d.dogId, avatar = (friendData == null ? void 0 : friendData.avatar) || (d == null ? void 0 : d.avatar) || "main_scene/img_defaultPortrait.png";
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
        Laya.timer.loop(1e3, this, this.outCountDownEvent, [countDown]);
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
      this.adBtn.disabled = !UserInfo_default.advertiseTimes;
      this.adBtn.active = Boolean(UserInfo_default.advertiseTimes);
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
              AppCore.runAppFunction({
                uri: AppEventMap.closeAd,
                data: {}
              });
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
                }).catch(() => {
                  AppCore.runAppFunction({
                    uri: AppEventMap.closeAd,
                    data: {}
                  });
                  this.canClick = true;
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
      if (this.data.type == 2) {
        core_default.eventGlobal.event(EventMaps.update_Order);
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
      this.appleBtn = null;
      this.privacyBox = null;
      this.privacyCheckIcon = null;
      this.loadBarOldWidth = 0;
      this.canClick = true;
    }
    onOpened(d) {
      return __async(this, null, function* () {
        var _a;
        this.data = d;
        this.setLoginBtnState(false);
        this.loadBox.visible = false;
        this.privacyBox.visible = false;
        yield this.version();
        if ((_a = LocalStorageService_default.getJSON()) == null ? void 0 : _a.isLogin) {
          this.login(false);
          this.loadBox.visible = true;
        } else {
          this.setLoginBtnState(true);
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
    setLoginBtnState(show) {
      if (show) {
        if (Laya.Browser.onIOS) {
          this.appleBtn.visible = true;
        } else {
          this.loginBox.visible = true;
        }
      } else {
        this.loginBox.visible = false;
        this.appleBtn.visible = false;
      }
    }
    getBuildType() {
      let buildType = null;
      switch ("test") {
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
        case "apple_btn":
          this.login(false);
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
              this.setLoginBtnState(true);
              this.loadBox.visible = false;
            }
          }).then((d) => {
            var _a;
            if ((_a = this.data) == null ? void 0 : _a.call)
              this.data.call(d);
            this.setLoginBtnState(false);
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
            this.setLoginBtnState(true);
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
                this.setLoginBtnState(true);
                this.canClick = true;
                this.loadBox.visible = false;
              }
            });
            return;
          }
          let testK = location.search.match(/\?id=(.+)/), testKe = null;
          if (testK && testK.length > 1 && BuildType.online != "test") {
            testKe = testK[1];
          }
          let loginOpenId = testKe, nickname = "", avatar = "", loginData = { account: loginOpenId, avatar, nickname };
          if (isWx) {
            if (!loginOpenId) {
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
                  loginOpenId = data.data["openid"];
                  avatar = data.data["iconurl"];
                  nickname = data.data["name"];
                }
              }
              loginData = {
                wxId: loginOpenId,
                avatar,
                nickname
              };
            }
          } else {
            if (Laya.Browser.onIOS) {
              const data = yield AppCore.runAppFunction({
                uri: AppEventMap.appleLogin,
                data: {},
                timestamp: Date.now()
              });
              if (data) {
                if (data.code) {
                  core_default.view.openHint({
                    text: `\u82F9\u679C\u767B\u5F55\u5931\u8D25[${data.code}]\uFF0C\u8BF7\u91CD\u8BD5`,
                    call: () => {
                      location.reload();
                    }
                  });
                } else {
                  loginOpenId = data.data["openid"];
                }
              }
            }
            loginData = {
              account: loginOpenId,
              avatar,
              nickname
            };
          }
          if (!loginOpenId) {
            core_default.view.openHint({
              text: "\u672A\u83B7\u53D6\u5230\u8D26\u53F7id",
              call: () => {
                this.canClick = true;
              }
            });
            return;
          }
          this.privacyBox.visible = false;
          HttpControl.inst.send({
            api: ApiHttp.login,
            data: loginData,
            error: (code, data) => {
              LocalStorageService_default.clear();
              this.setLoginBtnState(true);
              this.loadBox.visible = false;
              this.canClick = true;
            }
          }).then((d) => {
            var _a;
            if ((_a = this.data) == null ? void 0 : _a.call)
              this.data.call(d);
            this.setLoginBtnState(false);
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
      this.lockBtnBox.getChildByName("ad_unlock").disabled = !UserInfo_default.advertiseTimes;
      this.lockBtnBox.getChildByName("ad_unlock").active = Boolean(UserInfo_default.advertiseTimes);
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
      if (MainView.inst.isOuter) {
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
          if (this.getDataList()[this.itemListSelectIndex].base.seed_price.count > UserInfo_default.gold) {
            core_default.view.openHint({
              text: "\u91D1\u5E01\u4E0D\u8DB3\uFF0C\u53BB\u4ED3\u5E93\u51FA\u552E\u53EF\u4EE5\u83B7\u5F97\u91D1\u5E01\uFF0C\u5077\u83DC\u83B7\u5F97\u7684\u852C\u83DC\u4E5F\u53EF\u4EE5\u51FA\u552E\u83B7\u5F97\u91D1\u5E01\u54E6",
              call: () => {
              }
            });
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
          if (e.target.name == "unlock_buy" && this.getDataList()[this.itemListSelectIndex].base.unlock_cost.count > UserInfo_default.gold) {
            core_default.view.openHint({
              text: "\u91D1\u5E01\u4E0D\u8DB3\uFF0C\u53BB\u4ED3\u5E93\u51FA\u552E\u53EF\u4EE5\u83B7\u5F97\u91D1\u5E01\uFF0C\u5077\u83DC\u83B7\u5F97\u7684\u852C\u83DC\u4E5F\u53EF\u4EE5\u51FA\u552E\u83B7\u5F97\u91D1\u5E01\u54E6",
              call: () => {
              }
            });
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
      if (!UserInfo_default.warePetId) {
        core_default.view.openHint({ text: "\u60A8\u8FD8\u6CA1\u6709\u8D2D\u4E70\u5BA0\u7269\u54E6\uFF01", call: () => {
        } });
        return;
      }
      if (feed.base.cost.count > UserInfo_default.gold) {
        core_default.view.openHint({
          text: "\u91D1\u5E01\u4E0D\u8DB3\uFF0C\u53BB\u4ED3\u5E93\u51FA\u552E\u53EF\u4EE5\u83B7\u5F97\u91D1\u5E01\uFF0C\u5077\u83DC\u83B7\u5F97\u7684\u852C\u83DC\u4E5F\u53EF\u4EE5\u51FA\u552E\u83B7\u5F97\u91D1\u5E01\u54E6",
          call: () => {
          }
        });
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
      if (PetService_default.list[this.selectPetIndex].base.cost.count > UserInfo_default.gold) {
        core_default.view.openHint({
          text: "\u91D1\u5E01\u4E0D\u8DB3\uFF0C\u53BB\u4ED3\u5E93\u51FA\u552E\u53EF\u4EE5\u83B7\u5F97\u91D1\u5E01\uFF0C\u5077\u83DC\u83B7\u5F97\u7684\u852C\u83DC\u4E5F\u53EF\u4EE5\u51FA\u552E\u83B7\u5F97\u91D1\u5E01\u54E6",
          call: () => {
          }
        });
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
        desc.getChildByName("lb3").text = `\u4E2A\u597D\u53CB\u5373\u53EF\u63D0\u73B0`;
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
      if (!BindWx_default.isBindWx) {
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
        if (times <= 0) {
          cell.disabled = true;
        }
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
              if (UserInfo_default.days > 1) {
                HttpControl.inst.send({
                  api: ApiHttp.adRecordNotClick,
                  data: { times: UserInfo_default.continuousAdTimes }
                });
              }
            });
            if (adData == null ? void 0 : adData.data["hasClicked"]) {
              UserInfo_default.continuousAdTimes = 0;
            } else {
              UserInfo_default.continuousAdTimes++;
            }
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
      BuildType.debug == "test" && GameConfig.stat && Laya.Stat.show();
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
          console.log(1);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Db25maWdHYW1lLnRzIiwgIi4uLy4uL3NyYy9jb3JlL0FwcC50cyIsICIuLi8uLi9zcmMvY29yZS9BdWRpb0NvbnRyb2wudHMiLCAiLi4vLi4vc3JjL2NvcmUvaW5kZXgudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQWJvdXRWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVG9vbHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9UYWJsZUFuYWx5emUudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvUmVkRG90Q29tcG9uZW50LnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZS50cyIsICIuLi8uLi9zcmMvZGF0YVNlcnZpY2UvVXNlckluZm8udHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9QZXRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2UudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9OZXRNYXBzLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vSGVhcnRiZWF0LnRzIiwgIi4uLy4uL3NyYy9jb21tb24vSHR0cERhdGFDb250cm9sLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vSHR0cENvbnRyb2wudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQWRkTGFuZFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvQnV5Vml0YWxpdHlWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZpZWxkTGV2ZWxVcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvRnJpZW5kc0Rlc2NWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21tb24vQmluZFd4LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZyaWVuZHNSZXdhcmRWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21tb24vRXJyb3JDb2RlLnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50LnRzIiwgIi4uLy4uL3NyYy92aWV3L01haW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZyaWVuZHNWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0dhdGhlckRlc2NWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0d1aWRlVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9IaW50Vmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9Mb2dpblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpbERlc2NWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L01haWxWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0ZpZ3VyZUFuaS50cyIsICIuLi8uLi9zcmMvdmlldy9PcmRlclZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvT3ZlclZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2V0dGluZ1ZpZXcudHMiLCAiLi4vLi4vc3JjL2RhdGFTZXJ2aWNlL0ZlZWRTZXJ2aWNlLnRzIiwgIi4uLy4uL3NyYy92aWV3L1Nob3BWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NpZ25JbkRlc2NWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NpZ25JblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU3BlZWRVcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvVGFza1ZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvV2FyZWhvdXNlVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9XaXRoZHJhd1JlY29yZFZpZXcudHMiLCAiLi4vLi4vc3JjL0dhbWVDb25maWcudHMiLCAiLi4vLi4vc3JjL01haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxyXG4gKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjZcdTU0MERcdTc5RjBcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEV2ZW50TWFwcyB7XHJcbiAgICAvKiogbG9hZCBcdTc1NENcdTk3NjJcdThGREJcdTg4NENcdTY2RjRcdTY1QjAgKi9cclxuICAgIGxvYWRfcHJvZ3Jlc3MgPSBcImxvYWRfcHJvZ3Jlc3NcIixcclxuXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU1NzFGXHU1NzMwICovXHJcbiAgICB1cGRhdGVfZmllbGQgPSBcInVwZGF0ZV9maWVsZFwiLFxyXG5cclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTRFM0JcdTk4NzVcdThCQTJcdTUzNTVcdTY1NzBcdTYzNkUgKi9cclxuICAgIHVwZGF0ZV9PcmRlciA9IFwidXBkYXRlX09yZGVyXCIsXHJcblxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NTJBMFx1OTAxRiAqL1xyXG4gICAgbGFuZF9zcGVlZF91cCA9IFwibGFuZF9zcGVlZF91cFwiLFxyXG5cclxuICAgIC8qKiBcdThGREJcdTUxNjVcdTZFMzhcdTYyMEYgKi9cclxuICAgIGxvZ2luX2dhbWUgPSBcImxvZ2luX2dhbWVcIixcclxuICAgIC8qKiBcdTkwMDBcdTUxRkFcdTZFMzhcdTYyMEYgKi9cclxuICAgIGxvZ2luX291dCA9IFwibG9naW5fb3V0XCIsXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU0RUZCXHU1MkExICovXHJcbiAgICB1cGRhdGVfdGFzayA9IFwidXBkYXRlX3Rhc2tcIixcclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTY1QjBcdTYyNEJcdTRFRkJcdTUyQTFcdTYyNEIgKi9cclxuICAgIHVwZGF0ZV9ndWlkX2hhbmQgPSBcInVwZGF0ZV9ndWlkX2hhbmRcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTUyMDZcdTRFQUJcdTVGMTVcdTVCRkMgKi9cclxuICAgIHVwZGF0ZV9mcmllbmRfc2hhcmVfZ3VpZGUgPSBcInVwZGF0ZV9mcmllbmRfc2hhcmVfZ3VpZGVcIixcclxuICAgIC8qKiBcdTY2RjRcdTY1QjBcdTdFQTJcdTcwQjkgKi9cclxuICAgIHVwZGF0ZV9yZWRfZG90ID0gXCJ1cGRhdGVfcmVkX2RvdFwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NEFEXHU2NTNFXHU4M0I3XHU1Rjk3XHU1OTU2XHU1MkIxXHU1MkE4XHU3NTNCXHJcbiAgICAgKlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgIHtcclxuICAgICAgICAvL1x1OTcwMFx1ODk4MVx1OThERVx1OTFEMVx1NUUwMVx1NzY4NFx1NTNDMlx1ODAwM1x1ODI4Mlx1NzBCOVxyXG4gICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgLy9cdTg5ODFcdTk4REVcdTc2ODRcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1RTI2aWNvblx1NzY4NFx1NjU3MFx1NjM2RVxyXG4gICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoMTAwMSksXHJcbiAgICAgICAgICAgICAgICAvL1x1NjU3MFx1OTFDRlxyXG4gICAgICAgICAgICAgICAgY291bnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgLy9cdTg5ODFcdTk4REVcdTUzQkJcdTc2ODRcdTRGNERcdTdGNkUgMSBcdTkxRDFcdTVFMDEgMiBcdTk0QkJcdTc3RjNcclxuICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfVxyXG4gICAgICovXHJcbiAgICBwbGF5X2dldF9yZXdhcmQgPSBcInBsYXlfZ2V0X3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1NzcwQlx1NUU3Rlx1NTQ0QVx1NjRBRFx1NjUzRVx1NTk1Nlx1NTJCMVx1ODNCN1x1ODNCN1x1NUY5N1x1NTJBOFx1NzUzQiAgXHU0RjIwXHU1MTY1XHU4MjgyXHU3MEI5ICovXHJcbiAgICBwbGF5X2FkX2dldF9yZXdhcmQgPSBcInBsYXlfYWRfZ2V0X3Jld2FyZFwiLFxyXG4gICAgLyoqIFx1NTNCQlx1NTk3RFx1NTNDQlx1NUJCNiAqL1xyXG4gICAgZ29fZnJpZW5kX2hvbWUgPSBcImdvX2ZyaWVuZF9ob21lXCIsXHJcbiAgICAvKiogXHU1NkRFXHU1QkI2ICovXHJcbiAgICBnb19ob21lID0gXCJnb19ob21lXCIsXHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU1OTdEXHU1M0NCXHU3NTRDXHU5NzYyICovXHJcbiAgICBvcGVuX2ZyaWVuZCA9IFwib3Blbl9mcmllbmRcIixcclxuICAgIC8qKiBcdTc5Q0RcdTgzRENcdTRFM0JcdTc1NENcdTk3NjJcdThGREJcdTUxNjUgKi9cclxuICAgIHBsYW50X3NvdyA9IFwicGxhbnRfc293XCIsXHJcbiAgICAvKiogXHU2REZCXHU1MkEwXHU5NEJCXHU3N0YzXHU2MjE2XHU2NjJGXHU5MUQxXHU1RTAxICovXHJcbiAgICBhZGRfZGlhbW9uZF9nb2xkID0gXCJhZGRfZGlhbW9uZF9nb2xkXCIsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTRFMEVhcHBcdTRFQTRcdTRFOTJcdTRFOEJcdTRFRjZcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFwcEV2ZW50TWFwIHtcclxuICAgIC8qKiBcdTc3MEJcdTVFN0ZcdTU0NEEgKi9cclxuICAgIGFkID0gXCJhZFwiLFxyXG4gICAgLyoqIFx1NTE3M1x1OTVFRFx1NUU3Rlx1NTQ0QSAqL1xyXG4gICAgY2xvc2VBZCA9IFwiY2xvc2VBZFwiLFxyXG4gICAgLyoqIFx1NTE3M1x1OTVFRFx1NUI4OVx1NTM1M1x1NTQyRlx1NTJBOFx1OTA2RVx1N0Y2OSAqL1xyXG4gICAgY2xvc2VJbWFnZSA9IFwiY2xvc2VJbWFnZVwiLFxyXG4gICAgLyoqIFx1ODJGOVx1Njc5Q1x1NzY3Qlx1NUY1NSAqL1xyXG4gICAgYXBwbGVMb2dpbiA9IFwiYXBwbGVMb2dpblwiLFxyXG4gICAgLyoqIFx1NUZBRVx1NEZFMVx1NzY3Qlx1NUY1NSAqL1xyXG4gICAgd3hMb2dpbiA9IFwid3hMb2dpblwiLFxyXG4gICAgLyoqIFx1NUZBRVx1NEZFMVx1NTIwNlx1NEVBQiAqL1xyXG4gICAgd3hTaGFyZSA9IFwid3hTaGFyZVwiLFxyXG4gICAgLyoqIFx1NTNDQlx1NzZERlx1NEU4Qlx1NEVGNlx1N0VERlx1OEJBMSBcdTY1NzBcdTYzNkVcdTY4M0NcdTVGMEYge3R5cGU6XHU1QkY5XHU1RTk0XHU4OTgxXHU3RURGXHU4QkExXHU3Njg0XHU3MEI5fSAqL1xyXG4gICAgZXZlbnRDb3VudCA9IFwiZXZlbnRDb3VudFwiLFxyXG4gICAgLyoqIFx1OTY5MFx1NzlDMVx1NjUzRlx1N0I1NiAqL1xyXG4gICAgcHJpdmFjeUFncmVlbWVudCA9IFwicHJpdmFjeUFncmVlbWVudFwiLFxyXG4gICAgLyoqIFx1NjcwRFx1NTJBMVx1NTM0Rlx1OEJBRSAqL1xyXG4gICAgc2VydmljZUFncmVlbWVudCA9IFwic2VydmljZUFncmVlbWVudFwiLFxyXG4gICAgLyoqIFx1NkNFOFx1NTE4Q1x1NjIxMFx1NTI5RiAqL1xyXG4gICAgcmVnaXN0ZXJTdWNjZXNzID0gXCJyZWdpc3RlclN1Y2Nlc3NcIixcclxuICAgIC8qKiBcdTc2N0JcdTVGNTVcdTYyMTBcdTUyOUYgKi9cclxuICAgIGxvZ2luU3VjY2VzcyA9IFwiTG9naW5TdWNjZXNzXCIsXHJcbiAgICAvKiogXHU2RTA1XHU5NjY0XHU3RjEzXHU1QjU4ICovXHJcbiAgICBjbGVhckNhY2hlID0gXCJjbGVhckNhY2hlXCIsXHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU5MDZFXHU3RjY5XHU4MENDXHU2NjZGICovXHJcbiAgICBzaG93QmFja2dyb3VuZCA9IFwic2hvd0JhY2tncm91bmRcIixcclxufVxyXG4iLCAiLy9cdTRFRTNcdTc4MDFcdTc1MUZcdTYyMTBcdUZGMENcdTRFMERcdTg5ODFcdTYyNEJcdTUyQThcdTRGRUVcdTY1MzlcblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBlbnVtIHZpZXdzIFxuICAgIHtcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9BYm91dFZpZXcuc2NlbmUgKi9cbiAgICAgICAgQWJvdXRWaWV3ID0gXCJzY2VuZXMvdmlld3MvQWJvdXRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lICovXG4gICAgICAgIEFkZExhbmRWaWV3ID0gXCJzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvQnV5Vml0YWxpdHlWaWV3LnNjZW5lICovXG4gICAgICAgIEJ1eVZpdGFsaXR5VmlldyA9IFwic2NlbmVzL3ZpZXdzL0J1eVZpdGFsaXR5Vmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lICovXG4gICAgICAgIEZpZWxkTGV2ZWxVcFZpZXcgPSBcInNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZyaWVuZHNEZXNjVmlldy5zY2VuZSAqL1xuICAgICAgICBGcmllbmRzRGVzY1ZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzRGVzY1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRnJpZW5kc1Jld2FyZFZpZXcuc2NlbmUgKi9cbiAgICAgICAgRnJpZW5kc1Jld2FyZFZpZXcgPSBcInNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9GcmllbmRzVmlldy5zY2VuZSAqL1xuICAgICAgICBGcmllbmRzVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0dhdGhlckRlc2NWaWV3LnNjZW5lICovXG4gICAgICAgIEdhdGhlckRlc2NWaWV3ID0gXCJzY2VuZXMvdmlld3MvR2F0aGVyRGVzY1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvR3VpZGVWaWV3LnNjZW5lICovXG4gICAgICAgIEd1aWRlVmlldyA9IFwic2NlbmVzL3ZpZXdzL0d1aWRlVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9IaW50Vmlldy5zY2VuZSAqL1xuICAgICAgICBIaW50VmlldyA9IFwic2NlbmVzL3ZpZXdzL0hpbnRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZSAqL1xuICAgICAgICBMb2dpblZpZXcgPSBcInNjZW5lcy92aWV3cy9Mb2dpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpbERlc2NWaWV3LnNjZW5lICovXG4gICAgICAgIE1haWxEZXNjVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haWxEZXNjVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZSAqL1xuICAgICAgICBNYWlsVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lICovXG4gICAgICAgIE1haW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lICovXG4gICAgICAgIE9yZGVyVmlldyA9IFwic2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9PdmVyVmlldy5zY2VuZSAqL1xuICAgICAgICBPdmVyVmlldyA9IFwic2NlbmVzL3ZpZXdzL092ZXJWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NldHRpbmdWaWV3LnNjZW5lICovXG4gICAgICAgIFNldHRpbmdWaWV3ID0gXCJzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2hvcFZpZXcgPSBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaWduSW5EZXNjVmlldy5zY2VuZSAqL1xuICAgICAgICBTaWduSW5EZXNjVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NpZ25JbkRlc2NWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2lnbkluVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU3BlZWRVcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgU3BlZWRVcFZpZXcgPSBcInNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZSAqL1xuICAgICAgICBUYXNrVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1dhcmVob3VzZVZpZXcuc2NlbmUgKi9cbiAgICAgICAgV2FyZWhvdXNlVmlldyA9IFwic2NlbmVzL3ZpZXdzL1dhcmVob3VzZVZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvV2l0aGRyYXdSZWNvcmRWaWV3LnNjZW5lICovXG4gICAgICAgIFdpdGhkcmF3UmVjb3JkVmlldyA9IFwic2NlbmVzL3ZpZXdzL1dpdGhkcmF3UmVjb3JkVmlldy5zY2VuZVwiLCBcbiAgICB9XG5cbiBleHBvcnQgZW51bSBhdWRpb3MgXG4gICAge1xuICAgICAgICAvKiogYXVkaW8vemhvbmd6aGkubXAzICovXG4gICAgICAgIHpob25nemhpID0gXCJyZXMvYXVkaW8vemhvbmd6aGkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vdHVkaXNoZW5namkubXAzICovXG4gICAgICAgIHR1ZGlzaGVuZ2ppID0gXCJyZXMvYXVkaW8vdHVkaXNoZW5namkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vc2hvdWNhaS5tcDMgKi9cbiAgICAgICAgc2hvdWNhaSA9IFwicmVzL2F1ZGlvL3Nob3VjYWkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZ291amlhb3NoZW5nLm1wMyAqL1xuICAgICAgICBnb3VqaWFvc2hlbmcgPSBcInJlcy9hdWRpby9nb3VqaWFvc2hlbmcubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZGFrYWljYW5na3UubXAzICovXG4gICAgICAgIGRha2FpY2FuZ2t1ID0gXCJyZXMvYXVkaW8vZGFrYWljYW5na3UubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vYnV0dG9uX2NsaWNrLm1wMyAqL1xuICAgICAgICBidXR0b25fY2xpY2sgPSBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vQkdNLm1wMyAqL1xuICAgICAgICBCR00gPSBcInJlcy9hdWRpby9CR00ubXAzXCIsIFxuICAgIH1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9XaXRoZHJhd1JlY29yZFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1dhcmVob3VzZVZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TcGVlZFVwVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2lnbkluRGVzY1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TZXR0aW5nVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvT3ZlclZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL09yZGVyVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWlsRGVzY1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0xvZ2luVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvSGludFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0d1aWRlVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvR2F0aGVyRGVzY1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0ZyaWVuZHNWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GcmllbmRzUmV3YXJkVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRnJpZW5kc0Rlc2NWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9GaWVsZExldmVsVXBWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9CdXlWaXRhbGl0eVZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9BYm91dFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9NYWlsSXRlbS5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9HZXRSZXdhcmQucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9wcmVmYWIvRmxvYXRSZXdhcmRJY29uLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0ZpZWxkUHJlZmFiLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvY29tcG9uZW50cy9CdXR0b24ucHJlZmFiXCIsXG4gICAgICAgICBcInNjZW5lcy9hbmkvbGFuZFVwLmFuaVwiLFxuICAgICAgICAgICAgXCJyZXMvbG9hZGluZ0JnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3dvb2R0aXRsZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZUhvdXNlQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfc3RvcmViZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zaGVsZi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnTWFpbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19wb3BVcEJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2xhbmRCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG91c2V0b3AucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9uZ2Jhb2Jhbi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMi5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19mYXJtbGFuZExvZ28ucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmU1LnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlNS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlNC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTQuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTMucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUzLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9maWd1cmUyLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZmlndXJlMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZTEuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ZpZ3VyZS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZG9nXzEwMTAucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAxMC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZG9nXzEwMDkucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwOS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZG9nXzEwMDgucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwOC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZG9nXzEwMDcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNy5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZG9nXzEwMDYucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZG9nXzEwMDUucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZG9nXzEwMDQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwNC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZG9nXzEwMDMucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwMy5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZG9nXzEwMDIucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwMi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvZG9nXzEwMDEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9kb2dfMTAwMS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3ZzLnZzXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvcHMuZnNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3pob25nemhpLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vdHVkaXNoZW5namkubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9zaG91Y2FpLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZ291amlhb3NoZW5nLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZGFrYWljYW5na3UubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9idXR0b25fY2xpY2subXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9CR00ubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wbGFudF9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9wZXRfZmVlZC5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2xvYWQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9sb2FkLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5hdGxhc1wiXTtcbiAgICBcblxuLyoqXG4gKiBcdTYyNDBcdTY3MDlcdThENDRcdTZFOTBcbiAqL1xuY29uc3QgUmVzID0ge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBzY2VuZXM6IHNjZW5lcyxcbiAgICBhdWRpb3M6IGF1ZGlvcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcztcbiIsICIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5jb25zdCBFdmVudEdsb2JhbCA9IG5ldyBMYXlhLkV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1OEJBMlx1OTYwNVx1NEU4Qlx1NEVGNlx1NzY4NFx1N0M3Qlx1NzY4NFx1NTM5Rlx1NTc4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV2ZW50Q2xhc3M6IE1hcDxhbnksIHsga2V5OiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFdmVudE9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcbiAgICAgICAgaWYgKCFFdmVudENsYXNzLmdldCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIEV2ZW50Q2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBFdmVudENsYXNzLmdldCh0YXJnZXQpLnB1c2goeyBrZXk6IG5hbWUsIGZuOiBkZXNjcmlwdG9yLnZhbHVlIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1NUM1RVx1NjAyN1x1NjdFNVx1NjI3RVx1N0VEMVx1NUI5QVx1NTQwRFx1NzlGMFx1NzY4NFx1N0M3Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJpbmROYW1lQ2xhc3M6IE1hcDxhbnksIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRCeU5hbWUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIC8vICAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG5cclxuICAgIGlmICghQmluZE5hbWVDbGFzcy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgIEJpbmROYW1lQ2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgfVxyXG4gICAgQmluZE5hbWVDbGFzcy5nZXQodGFyZ2V0KS5wdXNoKHByb3BlcnR5S2V5KTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50R2xvYmFsO1xyXG4iLCAiY29uc3QgY2FsbGVyczogTWFwPGFueSwgRnVuY3Rpb25bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG5jbGFzcyBPYnNlcnZhYmxlQ29udHJvbDxjYWxsIGV4dGVuZHMgTGF5YS5TY3JpcHQ+IHtcclxuICAgIHByaXZhdGUga2V5RXZlbnRzOiBNYXA8YW55LCBNYXA8c3RyaW5nLCBGdW5jdGlvbltdPj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNcdTVDNUVcdTYwMjdcdTUwM0NcdTUzRDhcdTUzMTZcclxuICAgICAqICBbXHU1NzI4XHU3NTRDXHU5NzYyZGVzdHJveVx1NzY4NFx1NjVGNlx1NTAxOVx1NEYxQVx1ODFFQVx1NURGMVx1NkNFOFx1OTUwMFx1NzZEMVx1NTQyQ11cclxuICAgICAqIEBwYXJhbSBPYmogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHdhdGNoPFQgZXh0ZW5kcyB7fT4oT2JqOiBULCBjYWxsZXI6IGNhbGwpIHtcclxuICAgICAgICBpZiAoIWNhbGxlcnMuaGFzKGNhbGxlcikpIHtcclxuICAgICAgICAgICAgY2FsbGVycy5zZXQoY2FsbGVyLCBbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQga2V5RXZlbnQgPSB0aGlzLmtleUV2ZW50cztcclxuICAgICAgICBpZiAoIWtleUV2ZW50LmhhcyhPYmopKSB7XHJcbiAgICAgICAgICAgIGtleUV2ZW50LnNldChPYmosIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcdTc2ODRcdTVDNUVcdTYwMjdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUM1RVx1NjAyN1xyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsIFx1NTZERVx1OEMwM1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGtleUJpbmQgPSA8S2V5IGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLZXkgJiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfb2JqID0ga2V5RXZlbnQuZ2V0KE9iaik7XHJcbiAgICAgICAgICAgIGlmICghX29iai5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgX29iai5zZXQoa2V5LCBbXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqW1wiI1wiICsga2V5XSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmpbXCIjXCIgKyBrZXldID0gT2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iaiwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1wiI1wiICsga2V5XSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb2JqLmdldChrZXkpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCIjXCIgKyBrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbGwuYmluZChjYWxsKTtcclxuICAgICAgICAgICAgX29iai5nZXQoa2V5KS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGwoT2JqW2tleV0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NEYyMFx1NTE2NVx1NzY4NGNhbGxlclx1NTIyMFx1OTY2NFx1NUY1M1x1NTI0RFx1N0VEMVx1NUI5QVx1NzY4NFx1NjI0MFx1NjcwOVx1NzY4NFx1NEU4Qlx1NEVGNiBcdTYyMTZcdTYzMDdcdTVCOUFcdTg5RTNcdTUxQjNcdTZBMjFcdTRFMkFcdTVCRjlcdThDNjFcdThEREZcdTVGNTNcdTUyNERjYWxsZXJcdTdFRDFcdTVCOUFcdTc2ODRcdTc2RDFcdTU0MkNcclxuICAgICAqIEBwYXJhbSBjYWxsZXIgXHU3NkQxXHU1NDJDXHU2NUY2XHU3RUQxXHU1QjlBXHU3Njg0XHU1NzNBXHU2NjZGXHU1QkY5XHU4QzYxXHJcbiAgICAgKiBAcGFyYW0gb2JqIFx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICByZW1vdmVCeUNhbGxlcihjYWxsZXI6IGNhbGwsIG9iajogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcik/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmdldChvYmopLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBrLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9ic2VydmFibGVDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgRXZlbnRHbG9iYWwsIHsgQmluZE5hbWVDbGFzcywgRXZlbnRDbGFzcyB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcblxyXG4vKipcclxuICogXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyaXB0IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvL0V2ZW50T25cdTg4QzVcdTk5NzBcdTU2NjhcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUFcclxuICAgICAgICBsZXQgYmluZEV2ZW50ID0gRXZlbnRDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIGJpbmRFdmVudD8uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBFdmVudEdsb2JhbC5vbihkLmtleSwgdGhpcywgZC5mbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRBd2FrZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25Bd2FrZSgpIHtcclxuICAgICAgICAvL1x1N0VEOVx1ODhDNVx1OTk3MFx1NTY2OFx1OEJCMFx1NUY1NVx1NzY4NFx1NUM1RVx1NjAyN1x1RkYwQ1x1NjdFNVx1NjI3RVx1ODI4Mlx1NzBCOVxyXG4gICAgICAgIEJpbmROYW1lQ2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2VdID0gdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uSGRBd2FrZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU0RjIwXHU1MTY1XHU1M0MyXHU2NTcwXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqIEBwYXJhbSBlXHJcbiAgICAgKi9cclxuICAgIG9uT3BlbmVkKGUpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTZGQzBcdTZEM0JcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCNjRcdTY1RjZcdTYyNDBcdTY3MDlcdTgyODJcdTcwQjlcdTU0OENcdTdFQzRcdTRFRjZcdTU3NDdcdTVERjJcdTUyMUJcdTVFRkFcdTVCOENcdTZCRDVcdUZGMENcdTZCMjFcdTY1QjlcdTZDRDVcdTUzRUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkQXdha2UoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRW5hYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRFbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NTQyRlx1NzUyOFx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1ODI4Mlx1NzBCOVx1ODhBQlx1NkRGQlx1NTJBMFx1NTIzMFx1ODIxRVx1NTNGMFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkU3RhcnRcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkU3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QjJDXHU0RTAwXHU2QjIxXHU2MjY3XHU4ODRDdXBkYXRlXHU0RTRCXHU1MjREXHU2MjY3XHU4ODRDXHVGRjBDXHU1M0VBXHU0RjFBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFN0YXJ0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFVwZGF0ZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCQ0ZcdTVFMjdcdTY2RjRcdTY1QjBcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTVDM0RcdTkxQ0ZcdTRFMERcdTg5ODFcdTU3MjhcdThGRDlcdTkxQ0NcdTUxOTlcdTU5MjdcdTVGQUFcdTczQUZcdTkwM0JcdThGOTFcdTYyMTZcdTgwMDVcdTRGN0ZcdTc1MjhnZXRDb21wb25lbnRcdTY1QjlcdTZDRDVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkVXBkYXRlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERpc2FibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGREaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTc5ODFcdTc1MjhcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTRFQ0VcdTgyODJcdTcwQjlcdTRFQ0VcdTgyMUVcdTUzRjBcdTc5RkJcdTk2NjRcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGlzYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREZXN0cm95XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25IZERlc3Ryb3koKTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NkUwNVx1OTY2NFx1OERERlx1NUY1M1x1NTI0RFx1N0M3Qlx1N0VEMVx1NUI5QVx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1ODlDMlx1NUJERlx1NjVCOVx1NkNENVxyXG4gICAgICAgICAgICBPYnNlcnZhYmxlUHJvcGVydHkucmVtb3ZlQnlDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIC8vXHU5NTAwXHU2QkMxXHU2NUY2XHU2RTA1XHU5NjY0XHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU1RjE1XHU3NTI4XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0ga2V5cy5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5c1t4XV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNEJcdTUyQThcdThDMDNcdTc1MjhcdTgyODJcdTcwQjlcdTk1MDBcdTZCQzFcdTY1RjZcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGVzdHJveSgpIHt9XHJcblxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiBcdTc1NENcdTk3NjJcdTYyNTNcdTVGMDBcdTRFRTVcdTU0MEVcdTVFMjZcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcclxuICAgIC8vICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgLy8gICovXHJcbiAgICAvLyBvbk9wZW5lZChkKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coMTExKTtcclxuICAgIC8vIH1cclxufVxyXG4iLCAiaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuXHJcbi8vY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U2hvd0FuaSBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJnLCB0aXBzOlwiXHU4MENDXHU2NjZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGJnOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb250ZW50LCB0aXBzOlwiXHU1MTg1XHU1QkI5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTphbmlUeXBlLHRpcHM6XCJcdTUyQThcdTc1M0JcdTdDN0JcdTU3OEJcIix0eXBlOkVkaXRPcHRpb24sb3B0aW9uOlwiYm90dG9tVG9TaG93LHNjYWxlU2hvd1wifSovXHJcbiAgICAvLyBcdThGRDRcdTU2REVcdTVCNTdcdTdCMjZcdTRFMzJcclxuICAgIGFuaVR5cGU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHR3ZWVuTGlzdDogTGF5YS5Ud2VlbltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9PcGVuKCkge31cclxuICAgIC8qKlxyXG4gICAgICogIFx1NTE3M1x1OTVFRFx1NjIxMFx1NTI5Rlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb0Nsb3NlKCkge31cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcblxyXG4gICAgICAgIHRoaXMuYmcuYWxwaGEgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAuNzUgfSxcclxuICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNjYWxlU2hvd1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLmZyb20oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMiwgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLCBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5ib3R0b20gPSAtdGhpcy5jb250ZW50LmhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGJvdHRvbTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5jaXJjT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VWaWV3KCkge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFuaVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzY2FsZVNob3dcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVg6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVk6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAtdGhpcy5jb250ZW50LmhlaWdodCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi5jbGVhcihlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipcclxuICogXHU1QjlFXHU0RjhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jb25zdCBpbnN0YW5jZUxpc3Q6IE1hcDxudW1iZXIsIHsgbmV3ICgpOiB2b2lkIH0+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NzY4NGlkXHJcbiAqL1xyXG5sZXQgaW5zdGFuY2VJZDogbnVtYmVyID0gMTAwO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhbmNlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCFpbnN0YW5jZUxpc3QuaGFzKHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdKSkge1xyXG4gICAgICAgIGluc3RhbmNlSWQrKztcclxuICAgICAgICB0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSA9IGluc3RhbmNlSWQ7XHJcbiAgICAgICAgaW5zdGFuY2VMaXN0LnNldChpbnN0YW5jZUlkLCBuZXcgdGFyZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0W2tleV0gPSBpbnN0YW5jZUxpc3QuZ2V0KGluc3RhbmNlSWQpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IHsgSGludFZpZXdEYXRhIH0gZnJvbSBcInNyYy92aWV3L0hpbnRWaWV3XCI7XHJcbmltcG9ydCBPdmVyVmlldyBmcm9tIFwic3JjL3ZpZXcvT3ZlclZpZXdcIjtcclxuaW1wb3J0IFJlcywgeyB2aWV3cyB9IGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU5NzAwXHU4OTgxXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAqL1xyXG5pbnRlcmZhY2UgVmlld09wZW5QYXJtIHtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyICovXHJcbiAgICBzaG93TG9hZD86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCAqL1xyXG4gICAgc2hvd0xvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTk2OTBcdTg1Q0Zsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0IFx1OUVEOFx1OEJBNDAgKi9cclxuICAgIGhpZGVMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1MTczXHU5NUVEXHU1MTc2XHU0RUQ2XHU1NzNBXHU2NjZGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBdHJ1ZVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVx1RkYwQ1x1MzAxMFx1NkNFOFx1NjEwRlx1MzAxMVx1ODhBQlx1NTE3M1x1OTVFRFx1NzY4NFx1NTczQVx1NjY2Rlx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1OEJCRVx1N0Y2RWF1dG9EZXN0cm95QXRSZW1vdmVkPXRydWVcdUZGMENcdTUyMTlcdThENDRcdTZFOTBcdTUzRUZcdTgwRkRcdTRFMERcdTgwRkRcdTg4QUJcdTU2REVcdTY1MzZcdUZGMENcdTk3MDBcdTg5ODFcdTgxRUFcdTVERjFcdTYyNEJcdTUyQThcdTU2REVcdTY1MzZcclxuICAgICAqIHRvZG8gXHU3M0IwXHU1NzI4XHU4RkQ5XHU0RTJBXHU4QzAzXHU3NTI4XHU3Njg0XHU2NjJGXHU1RjE1XHU2NENFXHU4MUVBXHU1RTI2XHU3Njg0XHU2NUI5XHU2Q0Q1XHVGRjBDXHU2Q0ExXHU2NzA5XHU4RDcwXHU4RkQ5XHU5MUNDXHU3Njg0XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0VGXHU4MEZEXHU0RjFBXHU2NzA5XHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgKiBcdTczQjBcdTU3MjhcdTUxNjhcdTY2MkZmYWxzZSBcdTU0MEVcdTY3MUZcdTY3MDlcdTk3MDBcdTg5ODFcdTUxOERcdTRGMThcdTUzMTZcdThGRDlcdTRFMkFcdTRFMUNcdTg5N0ZcdUZGMENcdTRFMERcdTgwRkRcdTUxNzNcdTk1RURcdTUxNzZcdTVCODNcdTYyNDBcdTY3MDlcdTc1NENcdTk3NjJcdThGRDhcdTY3MkFcdTVCOUVcdTczQjBcclxuICAgICAqL1xyXG4gICAgY2xvc2VPdGhlcj86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHBhcm0/OiBhbnk7XHJcbiAgICAvKiogIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBjb21wbGV0ZT86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1NTJBMFx1OEY3RFx1OEZEQlx1NUVBNlx1NTZERVx1OEMwM1x1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcHJvZ3Jlc3M/OiBIYW5kbGVyO1xyXG59XHJcblxyXG5jb25zdCB2aWV3TWFwczogeyB1cmw6IHN0cmluZzsgdmlldzogTGF5YS5WaWV3IH1bXSA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpZXdNYW5hZ2VyIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IFZpZXdNYW5hZ2VyO1xyXG5cclxuICAgIGxvZ2luT3V0KCkge1xyXG4gICAgICAgIHZpZXdNYXBzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgdi52aWV3LmdldENvbXBvbmVudHMoTGF5YS5TY3JpcHQpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHU1NkRFXHU1OTM0XHU4OTgxXHU0RjE4XHU1MzE2XHU0RTAwXHU0RTBCXHU1MTc2XHU1QjgzXHU3NTRDXHU5NzYyXHU3Njg0XHU1MTczXHU5NUVEXHVGRjBDXHU4RkQ5XHU5MUNDXHU2NjJGXHU0RTBEXHU2NjJGXHU2NzA5XHU1NDBDXHU2ODM3XHU3Njg0XHU5NUVFXHU5ODk4XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyQWxsKGUpO1xyXG4gICAgICAgICAgICAgICAgZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh2LnZpZXcudXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2MlxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcdTUzQzJcdTY1NzBcclxuICAgICAqL1xyXG4gICAgb3BlbihcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGRhdGE6IFZpZXdPcGVuUGFybSA9IHtcclxuICAgICAgICAgICAgY2xvc2VPdGhlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWREZWxheTogMTAwLFxyXG4gICAgICAgICAgICBoaWRlTG9hZERlbGF5OiAwLFxyXG4gICAgICAgIH1cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm1pc3MgcGF0aCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnNob3dMb2FkKSB7XHJcbiAgICAgICAgICAgIExheWEuVmlldy5zaG93TG9hZGluZ1BhZ2UobnVsbCwgZGF0YS5zaG93TG9hZERlbGF5KTtcclxuICAgICAgICAgICAgaWYgKHVybCAhPT0gUmVzLnZpZXdzLkxvZ2luVmlldykge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoZGF0YS5oaWRlTG9hZERlbGF5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhLmNsb3NlT3RoZXIgPSBmYWxzZTtcclxuICAgICAgICBMYXlhLlZpZXcub3BlbihcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLmNsb3NlT3RoZXIsXHJcbiAgICAgICAgICAgIGRhdGEucGFybSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoZTogTGF5YS5WaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsICE9IFJlcy52aWV3cy5Mb2dpblZpZXcpIHZpZXdNYXBzLnB1c2goeyB1cmw6IHVybCwgdmlldzogZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY29uTGlzdCA9IGUuZ2V0Q29tcG9uZW50cyhMYXlhLlNjcmlwdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbkxpc3QuZm9yRWFjaCgoZSkgPT4gZS5lbmFibGVkICYmIGUub25PcGVuZWQgJiYgZS5vbk9wZW5lZChkYXRhLnBhcm0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGEuY29tcGxldGUgJiYgZGF0YS5jb21wbGV0ZShlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgIGAlYyA9PT4gb3BlbiAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojN2VkNmRmO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojMjJhNmIzO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YS5wcm9ncmVzc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxNzNcdTk1RURcdTg5QzZcdTU2RkVcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGFsbCBcdTU0MENcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcdTg4QUIgXHU1OTFBXHU2QjIxXHU2MjUzXHU1RjAwXHVGRjBDXHU1MTY4XHU1MjIwXHU5NjY0XHU3NTI4XHU4RkQ5XHU0RTJBXHJcbiAgICAgKiBAcGFyYW0gZGVzdHJveSBcdTk1MDBcdTZCQzEgICBUT0RPXHVGRjA4XHU5RUQ4XHU4QkE0XHU0RjFBXHU5NTAwXHU2QkMxXHU2MjQwXHU2NzA5XHU1QjUwXHU4MjgyXHU3MEI5XHVGRjBDXHU2NzJBXHU2RDRCXHU4QkQ1XHU2NjJGXHU1NDI2XHU2NzA5XHU5NUVFXHU5ODk4XHVGRjA5XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNsb3NlKFxyXG4gICAgICAgIHVybDogdmlld3MsXHJcbiAgICAgICAgYWxsOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGFuaUNvbTogdHlwZW9mIFZpZXdTaG93QW5pIHwgdHlwZW9mIEZsb2F0Vmlld1Nob3dBbmkgPSBWaWV3U2hvd0FuaVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy9UT0RPIFx1OEZEOVx1OTFDQ1x1NzNCMFx1NTcyOFx1NTE2OFx1OTBFOFx1NzUyOGRlc3Ryb3kgXHU1RjE1XHU2NENFcmVtb3ZlXHU1OTdEXHU1MENGXHU2NzA5XHU3MEI5XHU5NUVFXHU5ODk4XHVGRjBDXHU1MThEXHU5MDFBXHU4RkM3dmlldy5vcGVuXHU0RjFBXHU5MUNEXHU2NUIwXHU2Nzg0XHU1RUZBXHU3RUM0XHU0RUY2XHJcbiAgICAgICAgZGVzdHJveSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB2QW5pOiBWaWV3U2hvd0FuaTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0gdmlld01hcHNbeF0udXJsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHZpZXdNYXBzW3hdO1xyXG4gICAgICAgICAgICAgICAgdmlld01hcHMuc3BsaWNlKHgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZBbmkgPSB2LnZpZXcuZ2V0Q29tcG9uZW50KGFuaUNvbSBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZBbmkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2QW5pLmNsb3NlVmlldygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy90b2RvXHU5NzAwXHU4OTgxXHU0RjE4XHU1MzE2XHVGRjBDXHU3NTRDXHU5NzYyXHU3Njg0bWFwXHU5NzAwXHU4OTgxXHU2NTc0XHU3NDA2XHU2MjEwXHVGRjBDXHU1MTY4XHU1QzRGXHU1NDhDXHU1RjM5XHU3QTk3XHU3Njg0XHU1MzNBXHU1MjJCXHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBSZXMudmlld3MuSGludFZpZXcpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHU0RkREXHU4QkMxXHU1OTgyXHU2NzlDXHU1NzNBXHU2NjZGXHU1QjhDXHU1MTY4XHU2Q0ExXHU2NzA5XHU3NTRDXHU5NzYyXHU4OEFCXHU2MjUzXHU1RjAwXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1RkM1XHU2MjUzXHU1RjAwXHU0RTNCXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgaWYgKCF2aWV3TWFwcy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICBsZXQgY2xvc2VMZW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAoIXZpZXdNYXBzW3hdLnZpZXcucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUxlbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VMZW4gPT09IHZpZXdNYXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLk1haW5WaWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdNYXBzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVmlld0xvZyh1cmw6IHN0cmluZywgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlYyA8PT0gJHtkZXN0cm95ID8gXCJkZXN0cm95XCIgOiBcImRpc2FibGVcIn0gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNmZjc5Nzk7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuSGludChkYXRhOiBIaW50Vmlld0RhdGEpIHtcclxuICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLkhpbnRWaWV3LCB7IHBhcm06IGRhdGEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNThcdTc1NENcdTk3NjJcclxuICAgICAqL1xyXG4gICAgY2xlYXJWaWV3TWFwcygpIHtcclxuICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3ZlclZpZXdDb206IE92ZXJWaWV3O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1MTczXHU5NUVEXHU4RkM3XHU1RUE2XHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIHNldE92ZXJWaWV3KG9wZW46IGJvb2xlYW4sIGNhbGw/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuT3ZlclZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsOiAodjogT3ZlclZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVyVmlld0NvbSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYuY2xvc2UoY2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm92ZXJWaWV3Q29tKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm92ZXJWaWV3Q29tLm9wZW4oY2FsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBjb25zdCBlbnVtIEJ1aWxkVHlwZSB7XHJcbiAgICAvKiogXHU2RDRCXHU4QkQ1XHU3M0FGXHU1ODgzICovXHJcbiAgICB0ZXN0ID0gXCJ0ZXN0XCIsXHJcbiAgICAvKiogXHU3RUJGXHU0RTBBXHU3M0FGXHU1ODgzICovXHJcbiAgICBvbmxpbmUgPSBcIm9ubGluZVwiLFxyXG4gICAgLyoqIFx1NjcyQ1x1NTczMFx1NUYwMFx1NTNEMSAqL1xyXG4gICAgZGVidWcgPSBcImRlYnVnXCIsXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKEJVSUxEX1RZUEUpO1xyXG5cclxubGV0IGJhc2VVcmwgPSBcImh0dHA6Ly9nYW1lLmFoZDE2OC5jb206MzAwMFwiO1xyXG5zd2l0Y2ggKEJVSUxEX1RZUEUpIHtcclxuICAgIGNhc2UgQnVpbGRUeXBlLmRlYnVnOlxyXG4gICAgICAgIGJhc2VVcmwgPSBcIi8vMTkyLjE2OC4xMDEuNTA6MzAwMFwiO1xyXG4gICAgICAgIC8vIGJhc2VVcmwgPSBcIi8vMTkyLjE2OC4xMDEuNTA6MzEwMFwiO1xyXG4gICAgICAgIC8vIGJhc2VVcmwgPSBcIi8vMTkyLjE2OC41MC44NzozMDAwXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEJ1aWxkVHlwZS5vbmxpbmU6XHJcbiAgICAgICAgYmFzZVVybCA9IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMTAwXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTZFMzhcdTYyMEZcdTkxNERcdTdGNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjNpZCAqL1xyXG4gICAgZGlhbW9uZElkOiAxMDAxLFxyXG4gICAgLyoqIFx1OTFEMVx1NUUwMWlkICovXHJcbiAgICBnb2xkSWQ6IDEwMDIsXHJcbiAgICAvKiogXHU3MkQ3XHU3MkQ3XHU2RDg4XHU1MzE2XHU5OERGXHU3MjY5XHU5NUY0XHU5Njk0XHU2NUY2XHU5NUY0IFx1NzlEMiAqL1xyXG4gICAgcGV0RGlnZXN0SW50ZXJ2YWxUaW1lOiA2MCAqIDM2MDAsXHJcbiAgICAvKiogXHU2RTM4XHU2MjBGXHU2NzJDXHU1NzMwXHU1MEE4XHU1QjU4a2V5ICovXHJcbiAgICBsb2NhbEtleTogXCJsb3ZlX0hEX2Zhcm1cIixcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTRGNTNcdTUyOUJcdTRFMEFcdTk2NTAgKi9cclxuICAgIHVzZXJWaXRhbGl0eUxpbWl0OiAxMCxcclxuICAgIC8qKiBcdTUzNEZcdThCQUVcdTU3MzBcdTU3NDAgKi9cclxuICAgIC8vIGJhc2VVcmw6IFwiLy80Ny4xMDguMTkyLjE4MTo4MDkyLyBmYXJtXCIsXHJcbiAgICBiYXNlVXJsOiBiYXNlVXJsLFxyXG4gICAgLy8gQlVJTERfVFlQRSA9PSBCdWlsZFR5cGUuZGVidWcgPyBcIi8vMTkyLjE2OC41MC44NzozMDAwXCIgOiBcImh0dHA6Ly9nYW1lLmFoZDE2OC5jb206MzAwMFwiLFxyXG4gICAgLy8gYmFzZVVybDogREVCVUcgPyBcIi8vMTkyLjE2OC4xMDEuNTA6MzAwMFwiIDogXCJodHRwOi8vZ2FtZS5haGQxNjguY29tOjMwMDBcIixcclxuICAgIC8vIGJhc2VVcmw6IFwiaHR0cDovL2dhbWUuYWhkMTY4LmNvbTozMDAwXCIsXHJcbiAgICAvLyB0b2RvIFx1OEZEOVx1OTFDQ1x1NzY4NElwXHU1M0VGXHU0RUU1XHU4QkJGXHU5NUVFXHU1M0VGXHU4MEZEXHU2NjJGXHU2NzA5XHU5NUVFXHU5ODk4XHU3Njg0XHJcbiAgICAvLyBiYXNlVXJsOiBcIi8vNDcuMTA4LjE5Mi4xODE6MzAwMFwiLFxyXG4gICAgLyoqIGFwaVx1OEJGN1x1NkM0Mlx1N0M3Qlx1NTc4QiBcdTlFRDhcdThCQTQgKi9cclxuICAgIEFwaVR5cGVEZWZhdWx0OiAxLFxyXG4gICAgLyoqIGFwaVx1OEJGN1x1NkM0Mlx1N0M3Qlx1NTc4QiBcdTc3MEJcdTVFN0ZcdTU0NEEgKi9cclxuICAgIEFwaVR5cGVBRDogMixcclxuICAgIC8qKiBcdTVFN0ZcdTU0NEFcdTY3NjFcdTRFRjYgXHU1MkEwXHU5MDFGXHU0RjdGXHU3NTI4XHU0RTg2Nlx1NkIyMSAqL1xyXG4gICAgQURTcGVlZFVwVGltZXM6IDYsXHJcbiAgICB2ZXJzaW9uOiBcIjEuMC4wXCIsXHJcbiAgICAvKipcdTZFMjBcdTkwNTMgKi9cclxuICAgIGNoYW5uZWw6IFwiXCIsXHJcbn07XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcInN0cmVhbS9jb25zdW1lcnNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRGVzcGF0Y2hEYXRhIHtcclxuICAgIHVyaTogQXBwRXZlbnRNYXA7XHJcbiAgICBkYXRhOiBvYmplY3Q7XHJcbiAgICB0aW1lc3RhbXA/OiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwRGVzcGF0Y2hSZXR1cm5EYXRhIHtcclxuICAgIC8qKiBcdTUzNEZcdThCQUVcdTcyQjZcdTYwMDFcdTc4MDEgMCBcdTRFM0FcdTZCNjNcdTVFMzggXHU1MTc2XHU1QjgzXHU0RTNBXHU5NTE5XHU4QkVGXHU3ODAxICovXHJcbiAgICBjb2RlOiBudW1iZXI7XHJcbiAgICAvKiogXHU1MzRGXHU4QkFFdXJpICovXHJcbiAgICB1cmk6IEFwcEV2ZW50TWFwO1xyXG4gICAgLyoqIFx1OEZENFx1NTZERVx1NTE3N1x1NEY1M1x1NzY4NFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZGF0YTogb2JqZWN0O1xyXG4gICAgLyoqIFx1NjgwN1x1OEJDNiAqL1xyXG4gICAgdGltZXN0YW1wPzogc3RyaW5nIHwgbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBFdmVudE1hcDogTWFwPHN0cmluZyB8IG51bWJlciwgRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIHdlYiBhcHAgXHU0RUE0XHU0RTkyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb3JlIHtcclxuICAgIC8qKlx1ODJGOVx1Njc5Q1x1N0M3Qlx1NTc4QiAqL1xyXG4gICAgc3RhdGljIHR5cGVJb3M6IG51bWJlciA9IDE7XHJcbiAgICAvKipcdTVCODlcdTUzNTNcdTdDN0JcdTU3OEIgKi9cclxuICAgIHN0YXRpYyB0eXBlQW5kcm9pZDogbnVtYmVyID0gMjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI2N1x1ODg0Q2FwcFx1NEVBNFx1NEU5Mlx1NjVCOVx1NkNENVxyXG4gICAgICogQHBhcmFtIG5hbWUgXHU2NUI5XHU2Q0Q1XHU1NDBEXHU3OUYwXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcdTRGMjBcdTUxNjVcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJ1bkFwcEZ1bmN0aW9uKGRhdGE/OiBBcHBEZXNwYXRjaERhdGEpOiBQcm9taXNlPEFwcERlc3BhdGNoUmV0dXJuRGF0YSB8IG51bGw+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoTGF5YS5Ccm93c2VyLm9uSU9TKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93W1wid2ViUmVxdWVzdFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tcIndlYlJlcXVlc3RcIl0ucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFdmVudE1hcC5zZXQoZGF0YS50aW1lc3RhbXAsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbXCIkQXBwXCJdICYmIHdpbmRvd1tcIiRBcHBcIl1bXCJ3ZWJSZXF1ZXN0XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W1wiJEFwcFwiXVtcIndlYlJlcXVlc3RcIl0oSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50aW1lc3RhbXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRNYXAuc2V0KGRhdGEudGltZXN0YW1wLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdmUobnVsbCk7IC8vXHU1OTgyXHU2NzlDXHU1MTk5XHU4RkQ5XHU0RTJBXHU0RjFBXHU2MjEwXHU1MjlGXHVGRjBDXHU2MjQwXHU0RUU1XHU2QjYzXHU1RTM4XHU0RTBEXHU5MDFBXHU4RkM3XHU1RTk0XHU3NTI4XHVGRjBDXHU0RTAwXHU0RTlCXHU1MjlGXHU4MEZEXHU4RkQ5XHU5MUNDXHU0RTBEXHU4QkE5XHU3NTI4XHVGRjBDXHU1QzMxXHU2Q0U4XHU5MUNBXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93W1wid2ViUmVxdWVzdFwiXSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvd1tcIndlYlJlcXVlc3RcIl0ucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChkYXRhLnRpbWVzdGFtcCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBFdmVudE1hcC5zZXQoZGF0YS50aW1lc3RhbXAsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gcmVzb2x2ZShudWxsKTsgLy9cdTU5ODJcdTY3OUNcdTUxOTlcdThGRDlcdTRFMkFcdTRGMUFcdTYyMTBcdTUyOUZcdUZGMENcdTYyNDBcdTRFRTVcdTZCNjNcdTVFMzhcdTRFMERcdTkwMUFcdThGQzdcdTVFOTRcdTc1MjhcdUZGMENcdTRFMDBcdTRFOUJcdTUyOUZcdTgwRkRcdThGRDlcdTkxQ0NcdTRFMERcdThCQTlcdTc1MjhcdUZGMENcdTVDMzFcdTZDRThcdTkxQ0FcclxuICAgICAgICAgICAgICAgIC8vICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNhcHAgXHU2MjY3XHU4ODRDaDUgXHU2M0E1XHU1M0UzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBsaXN0ZW5BcHBGdW5jdGlvbigpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NzZEMVx1NTQyQ1x1NjI0Qlx1NjczQVx1NTE3M1x1OTVFRFx1NEU4Qlx1NEVGNlx1NTRDRFx1NUU5NFxyXG5cclxuICAgICAgICB3aW5kb3dbXCJhcHBSZXNwb25zZVwiXSA9IChkOiBBcHBEZXNwYXRjaFJldHVybkRhdGEpID0+IHtcclxuICAgICAgICAgICAgLy8gYWxlcnQoYGJhY2sgJHtKU09OLnN0cmluZ2lmeShkKX1gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IEpTT04uc3RyaW5naWZ5KGQpLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgLy8gYWxlcnQoZD8udGltZXN0YW1wKTtcclxuICAgICAgICAgICAgaWYgKEV2ZW50TWFwLmhhcyhkPy50aW1lc3RhbXApKSB7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1hcC5nZXQoZC50aW1lc3RhbXApKGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvQ29udHJvbCB7XHJcbiAgICBwbGF5U291bmQoXHJcbiAgICAgICAgdXJsOiBzdHJpbmcsXHJcbiAgICAgICAgbG9vcHM/OiBudW1iZXIsXHJcbiAgICAgICAgY29tcGxldGU/OiBIYW5kbGVyLFxyXG4gICAgICAgIHNvdW5kQ2xhc3M/OiBuZXcgKCkgPT4gYW55LFxyXG4gICAgICAgIHN0YXJ0VGltZT86IG51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKHVybCwgbG9vcHMsIGNvbXBsZXRlLCBzb3VuZENsYXNzLCBzdGFydFRpbWUpO1xyXG4gICAgfVxyXG4gICAgcGxheU11c2ljKHVybDogc3RyaW5nLCBsb29wcyA9IDAsIGNvbXBsZXRlPzogSGFuZGxlciwgc3RhcnRUaW1lPzogbnVtYmVyKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKHVybCwgbG9vcHMsIGNvbXBsZXRlLCBzdGFydFRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTYyNDBcdTY3MDlcdTk3RjNcdTY1NDhcdUZGMDhcdTRFMERcdTUzMDVcdTYyRUNcdTgwQ0NcdTY2NkZcdTk3RjNcdTRFNTBcdUZGMDlcdTY2MkZcdTU0MjZcdTk3NTlcdTk3RjNcdTMwMDIgKi9cclxuICAgIHNldCBzb3VuZE11dGVkKHN0YXRlKSB7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIuc291bmRNdXRlZCA9IHN0YXRlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNvdW5kTXV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIExheWEuU291bmRNYW5hZ2VyLnNvdW5kTXV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1ODBDQ1x1NjY2Rlx1OTdGM1x1NEU1MFx1RkYwOFx1NEUwRFx1NTMwNVx1NjJFQ1x1OTdGM1x1NjU0OFx1RkYwOVx1NjYyRlx1NTQyNlx1OTc1OVx1OTdGMyAqL1xyXG4gICAgc2V0IG11c2ljTXV0ZWQoc3RhdGUpIHtcclxuICAgICAgICBMYXlhLlNvdW5kTWFuYWdlci5tdXNpY011dGVkID0gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBnZXQgbXVzaWNNdXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gTGF5YS5Tb3VuZE1hbmFnZXIubXVzaWNNdXRlZDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IEF1ZGlvQ29udHJvbCBmcm9tIFwiLi9BdWRpb0NvbnRyb2xcIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50T24sIEZpbmRCeU5hbWUgfSBmcm9tIFwiLi9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4vSW5zdGFuY2VcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9WaWV3TWFuYWdlclwiO1xyXG5cclxuY29uc3QgQ29yZSA9IHtcclxuICAgIC8qKiBcdTVCRjlcdThDNjFcdTVDNUVcdTYwMjdcdTdFRDFcdTVCOUFcdTUzRUZcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTYgKi9cclxuICAgIG9ic2VydmFibGVQcm9wZXJ0eTogT2JzZXJ2YWJsZVByb3BlcnR5LFxyXG4gICAgLyoqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OCAqL1xyXG4gICAgdmlldzogVmlld01hbmFnZXIuaW5zdCxcclxuICAgIC8qKiBcdTVGMTVcdTY0Q0VcdTgxMUFcdTY3MkNcdTdFQzRcdTRFRjYgKi9cclxuICAgIGdhbWVTY3JpcHQ6IEdhbWVTY3JpcHQsXHJcbiAgICAvKiogXHU1MzU1XHU0RjhCXHU4OEM1XHU5OTcwXHU1NjY4ICovXHJcbiAgICBpbnN0YW5jZTogSW5zdGFuY2UsXHJcbiAgICAvKiogXHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBID0+IFx1N0VEMVx1NUI5QVx1NTIzMFx1ODhDNVx1OTk3MFx1NTY2OFx1NEUwQSBcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbiAgICBldmVudE9uOiBFdmVudE9uLFxyXG4gICAgLyoqIHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWVcdTc2ODRcdTc3MDFcdTRFOEJcdTUxOTlcdTZDRDUgXHU1M0VBXHU4MEZEXHU2N0U1XHU2MjdFXHU0RTBCXHU0RTAwXHU3RUE3XHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG4gICAgZmluZEJ5TmFtZTogRmluZEJ5TmFtZSxcclxuICAgIC8qKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjYgKi9cclxuICAgIGV2ZW50R2xvYmFsOiBFdmVudEdsb2JhbCxcclxuICAgIC8qKlx1OTdGM1x1OTg5MSAqL1xyXG4gICAgYXVkaW86IG5ldyBBdWRpb0NvbnRyb2woKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcmU7XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBBYm91dFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFib3V0VmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6dmVyc2lvbiwgdGlwczpcIlx1NzNBOVx1NUJCNlx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdmVyc2lvbjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y2hhbm5lbCwgdGlwczpcIlx1NkUyMFx1OTA1M1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY2hhbm5lbDogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy52ZXJzaW9uLnRleHQgPSBgXHU3MjQ4XHU2NzJDXHU1M0Y3XHVGRjFBViR7Q29uZmlnR2FtZS52ZXJzaW9ufWA7XHJcbiAgICAgICAgdGhpcy5jaGFubmVsLnRleHQgPSBgXHU2RTIwXHU5MDUzXHU1M0Y3XHVGRjFBJHtDb25maWdHYW1lLmNoYW5uZWx9YDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFib3V0Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInVzZXJfYWdyZWVtZW50XCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1NzUyOFx1NjIzN1x1NTM0Rlx1OEJBRVxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7IHVyaTogQXBwRXZlbnRNYXAuc2VydmljZUFncmVlbWVudCwgZGF0YToge30gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByaXZhY3lcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5NjkwXHU3OUMxXHU2NTNGXHU3QjU2XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5wcml2YWN5QWdyZWVtZW50LCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVmYXVsdFJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRlZmF1bHRSZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZG93blJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRvd25SZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXNTY2FsZSwgdGlwczpcIlx1NjYyRlx1NTQyNlx1N0YyOVx1NjUzRVwiLHR5cGU6Q2hlY2t9Ki9cclxuICAgIHByaXZhdGUgaXNTY2FsZSA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNjYWxlVmFsLCB0aXBzOlwiXHU3RjI5XHU2NTNFXHU3Njg0XHU1MDNDXCIsdHlwZTpOdW1iZXIsIGRlZmF1bHQ6MC45fSovXHJcbiAgICBwcml2YXRlIHNjYWxlVmFsOiBudW1iZXIgPSAwLjk7XHJcblxyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgb2xkU2NhbGVZOiBudW1iZXI7XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gKHRoaXMub3duZXIgYXMgTGF5YS5Cb3gpLnNldF9hbmNob3JYKDAuNSk7XHJcbiAgICAgICAgLy8gKHRoaXMub3duZXIgYXMgTGF5YS5Cb3gpLnNldF9hbmNob3JZKDAuNSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc1NjYWxlKTtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikubW91c2VFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWCA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVYKCk7XHJcbiAgICAgICAgdGhpcy5vbGRTY2FsZVkgPSAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikuZ2V0X3NjYWxlWSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VEb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRvd25SZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKHRoaXMuc2NhbGVWYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBbmkoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1NjYWxlKSByZXR1cm47XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5vd25lcixcclxuICAgICAgICAgICAgeyBzY2FsZVg6IHNjYWxlICogdGhpcy5vbGRTY2FsZVgsIHNjYWxlWTogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWSB9LFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2tpbihza2luOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXNraW4pIHJldHVybjtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkltYWdlKS5za2luID0gc2tpbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7fVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcblxyXG5jb25zdCBMb2NhbERhdGEgPSB7XHJcbiAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgIHRva2VuOiBudWxsLFxyXG5cclxuICAgIC8qKiB0cnVlIFx1NEUzQVx1NTE3M1x1OTVFRCBmYWxzZSBcdTRFM0FcdTYyNTNcdTVGMDAgKi9cclxuICAgIHNvdW5kOiBmYWxzZSxcclxuICAgIC8qKiB0cnVlIFx1NEUzQVx1NTE3M1x1OTVFRCBmYWxzZSBcdTRFM0FcdTYyNTNcdTVGMDAgKi9cclxuICAgIG11c2ljOiBmYWxzZSxcclxuICAgIC8qKiB2ZXJzaW9uICovXHJcbiAgICB2ZXJzaW9uOiBcIjAuMC4wXCIsXHJcbn07XHJcblxyXG4vKipcclxuICogXHU2NzJDXHU1NzMwXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0IGxvY2FsRGF0YSBcdTU3MjhcdThGRDlcdTRFMkFcdTkxQ0NcdTk3NjJcdTVCOUFcdTRFNDlcdTU5N0RcclxuICovXHJcbmNsYXNzIExvY2FsU3RvcmFnZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBsb2NhbERhdGEgPSBMb2NhbERhdGE7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IExheWEuTG9jYWxTdG9yYWdlLmdldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSkgfHwgTG9jYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTgzQjdcdTUzRDZcdTY3MkNcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGdldEpTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdThCQkVcdTdGNkVcdTY3MkNcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIHNldEpTT048a2V5IGV4dGVuZHMga2V5b2YgdHlwZW9mIExvY2FsRGF0YT4oa2V5OiBrZXksIGRhdGE6IHR5cGVvZiBMb2NhbERhdGFba2V5XSkge1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhW2tleV0gPSBkYXRhO1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSwgdGhpcy5sb2NhbERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIExheWEuTG9jYWxTdG9yYWdlLnNldEpTT04oQ29uZmlnR2FtZS5sb2NhbEtleSwgeyB2ZXJzaW9uOiB0aGlzLmxvY2FsRGF0YS52ZXJzaW9uIH0pO1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhID0ge1xyXG4gICAgICAgICAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgICAgICAgICAgdG9rZW46IG51bGwsXHJcbiAgICAgICAgICAgIHNvdW5kOiB0cnVlLFxyXG4gICAgICAgICAgICBtdXNpYzogdHJ1ZSxcclxuICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5sb2NhbERhdGEudmVyc2lvbixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9jYWxTdG9yYWdlU2VydmljZSgpO1xyXG4iLCAiLyoqIFx1NjI0MFx1NjcwOVx1ODg2OCAqL1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBUYWJsZSA9IHtcInRhc2tcIjpbe1wiaWRcIjoxMDAxLFwicmV3YXJkXCI6XCIxMDAxOjUwXCIsXCJ0aW1lc1wiOjEsXCJ0aXRsZVwiOlwiXHU3QjdFXHU1MjMwXHU5ODg2XHU5NEJCXHU3N0YzXCIsXCJkZXNjXCI6XCJcdTc3MEJcdTg5QzZcdTk4OTFcdTdCN0VcdTUyMzBcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDIsXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCIsXCJ0aW1lc1wiOjEwLFwidGl0bGVcIjpcIlx1ODNEQ1x1NTczMFx1NjVCRFx1ODBBNTEwXHU2QjIxXCIsXCJkZXNjXCI6XCJcdTgzRENcdTU3MzBcdTUyQTBcdTkwMUYxMFx1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAwMyxcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdTgzRENcdTU3MzBcdTY1MzZcdTgzQjcxMFx1NkIyMVwiLFwiZGVzY1wiOlwiXHU4M0RDXHU1NzMwXHU2NTM2XHU4M0I3MTBcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDQsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6NSxcInRpdGxlXCI6XCJcdTUwNzdcdTgzREM1XHU2QjIxXCIsXCJkZXNjXCI6XCJcdTUwNzdcdTgzREM1XHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA1LFwicmV3YXJkXCI6XCIxMDAyOjIwMFwiLFwidGltZXNcIjozLFwidGl0bGVcIjpcIlx1NTU4Mlx1NTE3Qlx1NzJEN1x1NzJENzNcdTZCMjFcIixcImRlc2NcIjpcIlx1NTU4Mlx1NTE3Qlx1NzJEN1x1NzJENzNcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMTMsXCJyZXdhcmRcIjpcIjEwMDE6NTBcIixcInRpbWVzXCI6NSxcInRpdGxlXCI6XCJcdTkwODBcdThCRjdcdTU5N0RcdTUzQ0JcIixcImRlc2NcIjpcIlx1OTA4MFx1OEJGNzVcdTRFMkFcdTU5N0RcdTUzQ0JcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDcsXCJyZXdhcmRcIjpcIjEwMDE6MjBcIixcInRpbWVzXCI6MTAsXCJ0aXRsZVwiOlwiXHU4RDJEXHU0RTcwXHU3OUNEXHU1QjUwMTBcdTZCMjFcIixcImRlc2NcIjpcIlx1OEQyRFx1NEU3MFx1NzlDRFx1NUI1MDEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDA4LFwicmV3YXJkXCI6XCIxMDAyOjUwMFwiLFwidGltZXNcIjozLFwidGl0bGVcIjpcIlx1NTFGQVx1NTUyRVx1NEY1Q1x1NzI2OTNcdTZCMjFcIixcImRlc2NcIjpcIlx1NTFGQVx1NTUyRVx1NEY1Q1x1NzI2OTNcdTZCMjFcIixcImljb25cIjpudWxsfSx7XCJpZFwiOjEwMDksXCJyZXdhcmRcIjpcIjEwMDE6MTAwXCIsXCJ0aW1lc1wiOjUsXCJ0aXRsZVwiOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXCIsXCJkZXNjXCI6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0I1XHU0RTJBXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDEwLFwicmV3YXJkXCI6XCIxMDAxOjEwMFwiLFwidGltZXNcIjoxMCxcInRpdGxlXCI6XCJcdTUyMDZcdTRFQUJcdTVGOTdcdTU5N0RcdTc5M0NcIixcImRlc2NcIjpcIlx1NTIwNlx1NEVBQjEwXHU2QjIxXCIsXCJpY29uXCI6bnVsbH0se1wiaWRcIjoxMDExLFwicmV3YXJkXCI6XCIxMDAyOjUwMFwiLFwidGltZXNcIjozLFwidGl0bGVcIjpcIlx1NEVGQlx1NjEwRlx1NzlDRFx1NjkwRFwiLFwiZGVzY1wiOlwiXHU0RUZCXHU2MTBGXHU3OUNEXHU2OTBEM1x1NkIyMVwiLFwiaWNvblwiOm51bGx9LHtcImlkXCI6MTAxMixcInJld2FyZFwiOlwiMTAwMTo1MFwiLFwidGltZXNcIjo1LFwidGl0bGVcIjpcIlx1NzcwQlx1ODlDNlx1OTg5MVx1OTg4Nlx1Nzk4Rlx1NTIyOVwiLFwiZGVzY1wiOlwiXHU3NzBCXHU4OUM2XHU5ODkxNVx1NkIyMVwiLFwiaWNvblwiOm51bGx9XSxcInNpZ25JblwiOlt7XCJpZFwiOjEwMDEsXCJkYXlzXCI6NyxcInJld2FyZFwiOlwiMTAwMToyMDAwMFwifSx7XCJpZFwiOjEwMDIsXCJkYXlzXCI6MTAsXCJyZXdhcmRcIjpcIjEwMDE6MzAwMDBcIn0se1wiaWRcIjoxMDAzLFwiZGF5c1wiOjE1LFwicmV3YXJkXCI6XCIxMDAxOjUwMDAwXCJ9LHtcImlkXCI6MTAwNCxcImRheXNcIjoyMCxcInJld2FyZFwiOlwiMTAwMTo4MDAwMFwifSx7XCJpZFwiOjEwMDUsXCJkYXlzXCI6MzAsXCJyZXdhcmRcIjpcIjEwMDE6MTIwMDAwXCJ9LHtcImlkXCI6MTAwNixcImRheXNcIjo1MCxcInJld2FyZFwiOlwiMTAwMToxODAwMDBcIn0se1wiaWRcIjoxMDA3LFwiZGF5c1wiOjgwLFwicmV3YXJkXCI6XCIxMDAxOjMwMDAwMFwifSx7XCJpZFwiOjEwMDgsXCJkYXlzXCI6MTAwLFwicmV3YXJkXCI6XCIxMDAxOjM1MDAwMFwifSx7XCJpZFwiOjEwMDksXCJkYXlzXCI6MTUwLFwicmV3YXJkXCI6XCIxMDAxOjUwMDAwMFwifV0sXCJwbGFudFwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTZDMzRcdTdBM0JcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwMl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MFwiLFwiZ2FpblwiOlwiMTAwMTowLDEwMDI6NTBcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjE4MFwiLFwidW5sb2NrX2Nvc3RcIjpudWxsLFwidW5sb2NrX3Jld2FyZFwiOm51bGwsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDAyLFwibmFtZVwiOlwiXHU1OTI3XHU4QzQ2XCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDRfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NTBcIixcImdhaW5cIjpcIjEwMDE6MCwxMDAyOjUwXCIsXCJoYXJ2ZXN0XCI6XCIxfjJcIixcIm1hdHVyZV90aW1lXCI6XCIxODBcIixcInVubG9ja19jb3N0XCI6bnVsbCxcInVubG9ja19yZXdhcmRcIjpudWxsLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwMyxcIm5hbWVcIjpcIlx1NTkyN1x1ODQ5Q1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDEyX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjUwXCIsXCJnYWluXCI6XCIxMDAxOjAsMTAwMjo1MFwiLFwiaGFydmVzdFwiOlwiMX4yXCIsXCJtYXR1cmVfdGltZVwiOlwiMjQwXCIsXCJ1bmxvY2tfY29zdFwiOm51bGwsXCJ1bmxvY2tfcmV3YXJkXCI6bnVsbCxcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTUzMDVcdTVGQzNcdTgzRENcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwNl9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo3NVwiLFwiZ2FpblwiOlwiMTAwMToxLDEwMDI6NzVcIixcImhhcnZlc3RcIjpcIjF+MlwiLFwibWF0dXJlX3RpbWVcIjpcIjMwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MTAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwNSxcIm5hbWVcIjpcIlx1NTcxRlx1OEM0NlwiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDA3X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjc1XCIsXCJnYWluXCI6XCIxMDAxOjEsMTAwMjo3NVwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiMzAwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxMDAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA2LFwibmFtZVwiOlwiXHU4NDFEXHU1MzVDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDVfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6NzVcIixcImdhaW5cIjpcIjEwMDE6MSwxMDAyOjc1XCIsXCJoYXJ2ZXN0XCI6XCIyfjNcIixcIm1hdHVyZV90aW1lXCI6XCI0ODBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjEwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMDcsXCJuYW1lXCI6XCJcdTVDMEZcdTlFQTZcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwMV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoxMjBcIixcImdhaW5cIjpcIjEwMDE6MywxMDAyOjEyMFwiLFwiaGFydmVzdFwiOlwiMn4zXCIsXCJtYXR1cmVfdGltZVwiOlwiNDgwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjoxNTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDA4LFwibmFtZVwiOlwiXHU4RkEzXHU2OTEyXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMTBfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MTIwXCIsXCJnYWluXCI6XCIxMDAxOjMsMTAwMjoxMjBcIixcImhhcnZlc3RcIjpcIjJ+M1wiLFwibWF0dXJlX3RpbWVcIjpcIjYwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6MjAwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAwOSxcIm5hbWVcIjpcIlx1OUVDNFx1NzREQ1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDExX3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjIwMFwiLFwiZ2FpblwiOlwiMTAwMTo1LDEwMDI6MjAwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI3MjBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjMwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTAsXCJuYW1lXCI6XCJcdTgzMDRcdTVCNTBcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxM19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjoyMDBcIixcImdhaW5cIjpcIjEwMDE6NSwxMDAyOjIwMFwiLFwiaGFydmVzdFwiOlwiM340XCIsXCJtYXR1cmVfdGltZVwiOlwiNzIwXCIsXCJ1bmxvY2tfY29zdFwiOlwiMTAwMjozNTAwXCIsXCJ1bmxvY2tfcmV3YXJkXCI6XCIxMDAxOjAsMTAwMjowXCIsXCJkZXNjXCI6XCJcdTc5Q0RcdTRFMEJcdTRFMDBcdTdDOTJcdTc5Q0RcdTVCNTBcdUZGMENcdTY1MzZcdTgzQjdcdTY1NzRcdTRFMkFcdTRFMTZcdTc1NENcIn0se1wiaWRcIjoxMDExLFwibmFtZVwiOlwiXHU4MEUxXHU4NDFEXHU1MzVDXCIsXCJpY29uXCI6XCJwbGFudF9pY29uLzEwMDhfc2VlZC5wbmdcIixcInNlZWRfcHJpY2VcIjpcIjEwMDI6MzUwXCIsXCJnYWluXCI6XCIxMDAxOjcsMTAwMjozNTBcIixcImhhcnZlc3RcIjpcIjN+NFwiLFwibWF0dXJlX3RpbWVcIjpcIjkwMFwiLFwidW5sb2NrX2Nvc3RcIjpcIjEwMDI6NDUwMFwiLFwidW5sb2NrX3Jld2FyZFwiOlwiMTAwMTowLDEwMDI6MFwiLFwiZGVzY1wiOlwiXHU3OUNEXHU0RTBCXHU0RTAwXHU3QzkyXHU3OUNEXHU1QjUwXHVGRjBDXHU2NTM2XHU4M0I3XHU2NTc0XHU0RTJBXHU0RTE2XHU3NTRDXCJ9LHtcImlkXCI6MTAxMixcIm5hbWVcIjpcIlx1NTM1N1x1NzREQ1wiLFwiaWNvblwiOlwicGxhbnRfaWNvbi8xMDE0X3NlZWQucG5nXCIsXCJzZWVkX3ByaWNlXCI6XCIxMDAyOjM1MFwiLFwiZ2FpblwiOlwiMTAwMTo3LDEwMDI6MzUwXCIsXCJoYXJ2ZXN0XCI6XCIzfjRcIixcIm1hdHVyZV90aW1lXCI6XCI5MDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjUwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTMsXCJuYW1lXCI6XCJcdTczODlcdTdDNzNcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwM19zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MDBcIixcImdhaW5cIjpcIjEwMDE6MTAsMTAwMjo1MDBcIixcImhhcnZlc3RcIjpcIjN+NVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjU1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTQsXCJuYW1lXCI6XCJcdTc1MThcdTg1MTdcIixcImljb25cIjpcInBsYW50X2ljb24vMTAxNV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MDBcIixcImdhaW5cIjpcIjEwMDE6MTAsMTAwMjo1MDBcIixcImhhcnZlc3RcIjpcIjN+NVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjYwMDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifSx7XCJpZFwiOjEwMTUsXCJuYW1lXCI6XCJcdTc1NkFcdTgzMDRcIixcImljb25cIjpcInBsYW50X2ljb24vMTAwOV9zZWVkLnBuZ1wiLFwic2VlZF9wcmljZVwiOlwiMTAwMjo1MDBcIixcImdhaW5cIjpcIjEwMDE6MTAsMTAwMjo1MDBcIixcImhhcnZlc3RcIjpcIjN+NVwiLFwibWF0dXJlX3RpbWVcIjpcIjEyMDBcIixcInVubG9ja19jb3N0XCI6XCIxMDAyOjY1MDBcIixcInVubG9ja19yZXdhcmRcIjpcIjEwMDE6MCwxMDAyOjBcIixcImRlc2NcIjpcIlx1NzlDRFx1NEUwQlx1NEUwMFx1N0M5Mlx1NzlDRFx1NUI1MFx1RkYwQ1x1NjUzNlx1ODNCN1x1NjU3NFx1NEUyQVx1NEUxNlx1NzU0Q1wifV0sXCJwZXRcIjpbe1wiaWRcIjoxMDAxLFwibmFtZVwiOlwiXHU2NUZBXHU4RDIyXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAxX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxMCxcImNvc3RcIjpcIjEwMDI6MzAwMFwiLFwiZGVzY1wiOlwiXHU3MjMxXHU1QjgzXHU1QzMxXHU0RTcwXHU1Qjgzflx1NUI4M1x1NUMzMVx1NjYyRlx1NjcwOVx1NzBCOVx1NjFEMn5cIixcInNlbnNpdGl2ZVwiOjMwLFwiYWJpbGl0eVwiOjM1fSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTZDNjRcdTU3MDZcIixcImljb25cIjpcInBldF9mZWVkLzEwMDdfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE1LFwiY29zdFwiOlwiMTAwMjo0MDAwXCIsXCJkZXNjXCI6XCJcdTk4OUNcdTUwM0NcdTMwMDFcdTY2N0FcdTU1NDZcdTUzQ0NcdTUzQ0NcdTU3MjhcdTdFQkZcIixcInNlbnNpdGl2ZVwiOjM1LFwiYWJpbGl0eVwiOjM1fSx7XCJpZFwiOjEwMDMsXCJuYW1lXCI6XCJcdTgwODlcdTVFNzJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDlfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE2LFwiY29zdFwiOlwiMTAwMjo0NTAwXCIsXCJkZXNjXCI6XCJcdTY3MDBcdTVGRTBcdThCREFcdTc2ODRcdTRGMTlcdTRGMzRcIixcInNlbnNpdGl2ZVwiOjQwLFwiYWJpbGl0eVwiOjQwfSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTRFOENcdTU0QzhcIixcImljb25cIjpcInBldF9mZWVkLzEwMDJfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE2LFwiY29zdFwiOlwiMTAwMjo1MDAwXCIsXCJkZXNjXCI6XCJcdTdFRERcdTRFMERcdTYyQzZcdTVCQjZcdUZGMDFcIixcInNlbnNpdGl2ZVwiOjQ1LFwiYWJpbGl0eVwiOjQ1fSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTU5MjdcdTc3M0NcdTc3NUJcIixcImljb25cIjpcInBldF9mZWVkLzEwMDVfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE3LFwiY29zdFwiOlwiMTAwMjo3MDAwXCIsXCJkZXNjXCI6XCJcdTZEM0JcdTU5N0RcdTU0MDNcdTc2ODRcdTVDMTFcIixcInNlbnNpdGl2ZVwiOjUwLFwiYWJpbGl0eVwiOjUwfSx7XCJpZFwiOjEwMDYsXCJuYW1lXCI6XCJcdTVDMEZcdTVDM0VcdTVERjRcIixcImljb25cIjpcInBldF9mZWVkLzEwMDRfZG9nLnBuZ1wiLFwidml0YWxpdHlfbWF4XCI6MTAwLFwidml0YWxpdHlfY29uc3VtZVwiOjE4LFwiY29zdFwiOlwiMTAwMjo3NTAwXCIsXCJkZXNjXCI6XCJcdTZCNjZcdTUyOUJcdTU5MjlcdThENEJcdTVERjJcdTcwQjlcdTZFRTF+XHU2MkZGXHU2MzRGXHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo1MCxcImFiaWxpdHlcIjo1NX0se1wiaWRcIjoxMDA3LFwibmFtZVwiOlwiXHU3NDAzXHU3NDAzXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA4X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6ODAwMFwiLFwiZGVzY1wiOlwiXHU1QzMxXHU0RTI0XHU0RTJBXHU1QjU3XHVGRjBDXHU1NDJDXHU4QkREXHVGRjAxXCIsXCJzZW5zaXRpdmVcIjo1MyxcImFiaWxpdHlcIjo2MH0se1wiaWRcIjoxMDA4LFwibmFtZVwiOlwiXHU1QzBGXHU3NjdEXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAzX2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOCxcImNvc3RcIjpcIjEwMDI6ODAwMFwiLFwiZGVzY1wiOlwiXHU3NzBCXHU1QkI2XHUzMDAxXHU3NzBCXHU4M0RDXHUzMDAxXHU3NzBCXHU1QjY5XHU1QjUwXCIsXCJzZW5zaXRpdmVcIjo1OCxcImFiaWxpdHlcIjo2NX0se1wiaWRcIjoxMDA5LFwibmFtZVwiOlwiXHU3MEI5XHU3MEI5XCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDA2X2RvZy5wbmdcIixcInZpdGFsaXR5X21heFwiOjEwMCxcInZpdGFsaXR5X2NvbnN1bWVcIjoxOSxcImNvc3RcIjpcIjEwMDI6MTAwMDBcIixcImRlc2NcIjpcIlx1NEY2MFx1NTAzQ1x1NUY5N1x1NjJFNVx1NjcwOVx1RkYwMVwiLFwic2Vuc2l0aXZlXCI6NjAsXCJhYmlsaXR5XCI6NzB9LHtcImlkXCI6MTAxMCxcIm5hbWVcIjpcIlx1OTVGN1x1NThBOVwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAxMF9kb2cucG5nXCIsXCJ2aXRhbGl0eV9tYXhcIjoxMDAsXCJ2aXRhbGl0eV9jb25zdW1lXCI6MzAsXCJjb3N0XCI6XCIxMDAyOjE1MDAwXCIsXCJkZXNjXCI6XCJcdTk1N0ZcdTVGOTdcdTVDMzFcdTVGODhcdTUxRjZcdUZGMENcdTYyOTNcdTVDMEZcdTUwNzdcdTY2RjRcdTUxRjZcIixcInNlbnNpdGl2ZVwiOjY1LFwiYWJpbGl0eVwiOjgwfV0sXCJvcmRlclwiOlt7XCJpZFwiOjEsXCJjb21taXNzaW9uXCI6XCIxLjEyXCIsXCJjb25kaXRpb25cIjpcIjEwMDE6MlwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjgwXCJ9LHtcImlkXCI6MixcImNvbW1pc3Npb25cIjpcIjAuODdcIixcImNvbmRpdGlvblwiOlwiMTAwMToxLDEwMDI6MlwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjgwXCJ9LHtcImlkXCI6MyxcImNvbW1pc3Npb25cIjpcIjAuNjlcIixcImNvbmRpdGlvblwiOlwiMTAwMToxLDEwMDM6MiwxMDAyOjNcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo4MFwifSx7XCJpZFwiOjQsXCJjb21taXNzaW9uXCI6XCIwLjYxXCIsXCJjb25kaXRpb25cIjpcIjEwMDI6NCwxMDAzOjMsMTAwNDozLDEwMDE6NFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjgwXCJ9LHtcImlkXCI6NSxcImNvbW1pc3Npb25cIjpcIjAuNjFcIixcImNvbmRpdGlvblwiOlwiMTAwNDo2LDEwMDI6NSwxMDA1OjQsMTAwMTo1XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6ODBcIn0se1wiaWRcIjo2LFwiY29tbWlzc2lvblwiOlwiMC42OFwiLFwiY29uZGl0aW9uXCI6XCIxMDAzOjEwLDEwMDQ6NSwxMDA1OjMsMTAwNjozXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6ODBcIn0se1wiaWRcIjo3LFwiY29tbWlzc2lvblwiOlwiMC40M1wiLFwiY29uZGl0aW9uXCI6XCIxMDA3OjQsMTAwMzo1LDEwMDQ6NywxMDA2OjEwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6ODBcIn0se1wiaWRcIjo4LFwiY29tbWlzc2lvblwiOlwiMC41NlwiLFwiY29uZGl0aW9uXCI6XCIxMDA4OjEzLDEwMDc6MywxMDA1OjUsMTAwMjo1XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6ODBcIn0se1wiaWRcIjo5LFwiY29tbWlzc2lvblwiOlwiMC4zOVwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjIsMTAwOToxMCwxMDA3OjgsMTAwMzo4XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6ODBcIn0se1wiaWRcIjoxMCxcImNvbW1pc3Npb25cIjpcIjAuMjJcIixcImNvbmRpdGlvblwiOlwiMTAwNjoxMCwxMDEwOjUsMTAwODoxMCwxMDA5OjZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo4MFwifSx7XCJpZFwiOjExLFwiY29tbWlzc2lvblwiOlwiMC43NlwiLFwiY29uZGl0aW9uXCI6XCIxMDA5OjUsMTAwNDoxMCwxMDAxOjksMTAwMjoxMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjEyLFwiY29tbWlzc2lvblwiOlwiMC40M1wiLFwiY29uZGl0aW9uXCI6XCIxMDA3OjYsMTAwMzoxMSwxMDExOjYsMTAwNToxMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjEzLFwiY29tbWlzc2lvblwiOlwiMC4xN1wiLFwiY29uZGl0aW9uXCI6XCIxMDEwOjUsMTAwNToxMywxMDAxOjgsMTAxMjo4XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTAwXCJ9LHtcImlkXCI6MTQsXCJjb21taXNzaW9uXCI6XCIwLjU1XCIsXCJjb25kaXRpb25cIjpcIjEwMTM6MTAsMTAwODo4LDEwMDY6NiwxMDAxOjEwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTAwXCJ9LHtcImlkXCI6MTUsXCJjb21taXNzaW9uXCI6XCIwLjQ4XCIsXCJjb25kaXRpb25cIjpcIjEwMDI6MTAsMTAwNToxMCwxMDExOjEyLDEwMDE6MTBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoxNixcImNvbW1pc3Npb25cIjowLjI5LFwiY29uZGl0aW9uXCI6XCIxMDA4OjExLDEwMTQ6NCwxMDA2OjgsMTAwNToxN1wiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjE3LFwiY29tbWlzc2lvblwiOjAuMzcsXCJjb25kaXRpb25cIjpcIjEwMDY6MTQsMTAwNzo2LDEwMTU6MTIsMTAwMToxNFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjE4LFwiY29tbWlzc2lvblwiOjAuNDgsXCJjb25kaXRpb25cIjpcIjEwMDg6MTQsMTAxMToxMiwxMDA5OjE1LDEwMDI6NVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjE5LFwiY29tbWlzc2lvblwiOjAuNzUsXCJjb25kaXRpb25cIjpcIjEwMTM6MTAsMTAwMzoyMCwxMDE0OjExLDEwMDE6N1wiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEwMFwifSx7XCJpZFwiOjIwLFwiY29tbWlzc2lvblwiOjAuNjcsXCJjb25kaXRpb25cIjpcIjEwMDM6MTAsMTAxMToxNywxMDAyOjE0LDEwMDU6MTJcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDBcIn0se1wiaWRcIjoyMSxcImNvbW1pc3Npb25cIjowLjY0LFwiY29uZGl0aW9uXCI6XCIxMDEwOjEwLDEwMDM6MTQsMTAwNToxNiwxMDA3OjE1XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTIwXCJ9LHtcImlkXCI6MjIsXCJjb21taXNzaW9uXCI6XCIwLjRcIixcImNvbmRpdGlvblwiOlwiMTAxNToxOSwxMDA3OjEyLDEwMTE6NSwxMDA0OjE3XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTIwXCJ9LHtcImlkXCI6MjMsXCJjb21taXNzaW9uXCI6XCIwLjRcIixcImNvbmRpdGlvblwiOlwiMTAwMzoxOSwxMDE0OjIyLDEwMTU6MTYsMTAwODoxNFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEyMFwifSx7XCJpZFwiOjI0LFwiY29tbWlzc2lvblwiOjAuNzcsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTMsMTAwMToxNywxMDA4OjE4LDEwMDQ6MTVcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMjBcIn0se1wiaWRcIjoyNSxcImNvbW1pc3Npb25cIjpcIjAuMzlcIixcImNvbmRpdGlvblwiOlwiMTAxMjoyMywxMDExOjE5LDEwMTA6MTUsMTAxNToyMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEyMFwifSx7XCJpZFwiOjI2LFwiY29tbWlzc2lvblwiOjAuMDMsXCJjb25kaXRpb25cIjpcIjEwMDI6MjEsMTAxMToxMiwxMDEyOjIyLDEwMDM6MTlcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMjBcIn0se1wiaWRcIjoyNyxcImNvbW1pc3Npb25cIjowLjQ5LFwiY29uZGl0aW9uXCI6XCIxMDA3OjE2LDEwMTQ6MTYsMTAwNjoyMCwxMDExOjE3XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTIwXCJ9LHtcImlkXCI6MjgsXCJjb21taXNzaW9uXCI6MC41MyxcImNvbmRpdGlvblwiOlwiMTAxNDoxNywxMDA3OjEyLDEwMTE6MTcsMTAwMzoxN1wiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEyMFwifSx7XCJpZFwiOjI5LFwiY29tbWlzc2lvblwiOjAuNzcsXCJjb25kaXRpb25cIjpcIjEwMTI6MTAsMTAwNToxNiwxMDEwOjE0LDEwMTU6MThcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMjBcIn0se1wiaWRcIjozMCxcImNvbW1pc3Npb25cIjpcIjAuMzRcIixcImNvbmRpdGlvblwiOlwiMTAxMToxNywxMDE0OjE5LDEwMDY6MTQsMTAwNDozMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEyMFwifSx7XCJpZFwiOjMxLFwiY29tbWlzc2lvblwiOjAuNTMsXCJjb25kaXRpb25cIjpcIjEwMDc6MTgsMTAxMDoxNCwxMDEzOjE5LDEwMDY6MTFcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNTBcIn0se1wiaWRcIjozMixcImNvbW1pc3Npb25cIjowLjQ2LFwiY29uZGl0aW9uXCI6XCIxMDEzOjE5LDEwMDU6MjIsMTAxMjoxMiwxMDA4OjIwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTUwXCJ9LHtcImlkXCI6MzMsXCJjb21taXNzaW9uXCI6XCIwLjQ0XCIsXCJjb25kaXRpb25cIjpcIjEwMTI6MTYsMTAxMzoyMCwxMDAyOjIzLDEwMDk6MTZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNTBcIn0se1wiaWRcIjozNCxcImNvbW1pc3Npb25cIjpcIjAuNDJcIixcImNvbmRpdGlvblwiOlwiMTAwOToxOSwxMDEwOjEyLDEwMTE6MTQsMTAxMjoyMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjE1MFwifSx7XCJpZFwiOjM1LFwiY29tbWlzc2lvblwiOlwiMC4zM1wiLFwiY29uZGl0aW9uXCI6XCIxMDAxOjE4LDEwMDQ6MTksMTAxMzoxNiwxMDAzOjIwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTUwXCJ9LHtcImlkXCI6MzYsXCJjb21taXNzaW9uXCI6MC4yMSxcImNvbmRpdGlvblwiOlwiMTAwMzoxMSwxMDA4OjE3LDEwMTQ6MTcsMTAwNzoxOVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjE1MFwifSx7XCJpZFwiOjM3LFwiY29tbWlzc2lvblwiOjAuNDQsXCJjb25kaXRpb25cIjpcIjEwMTI6MTksMTAxMDoyMCwxMDAyOjE0LDEwMTE6MTFcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNTBcIn0se1wiaWRcIjozOCxcImNvbW1pc3Npb25cIjowLjIyLFwiY29uZGl0aW9uXCI6XCIxMDE0OjEzLDEwMDQ6MTksMTAwMjoxMSwxMDE1OjE4XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTUwXCJ9LHtcImlkXCI6MzksXCJjb21taXNzaW9uXCI6MC4zNixcImNvbmRpdGlvblwiOlwiMTAwNzoxOCwxMDEyOjEzLDEwMDQ6MTYsMTAwMjoyNlwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjE1MFwifSx7XCJpZFwiOjQwLFwiY29tbWlzc2lvblwiOjAuMjgsXCJjb25kaXRpb25cIjpcIjEwMDQ6MzAsMTAwNToxMCwxMDA4OjE4LDEwMTE6MTZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNTBcIn0se1wiaWRcIjo0MSxcImNvbW1pc3Npb25cIjpcIjAuNDhcIixcImNvbmRpdGlvblwiOlwiMTAxMDoxOCwxMDA5OjE4LDEwMDg6MTcsMTAxMToyNlwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjUwMFwifSx7XCJpZFwiOjQyLFwiY29tbWlzc2lvblwiOjAuNDMsXCJjb25kaXRpb25cIjpcIjEwMDk6MjEsMTAwNToxOCwxMDA3OjIwLDEwMDI6MjNcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo4MDBcIn0se1wiaWRcIjo0MyxcImNvbW1pc3Npb25cIjpcIjAuMjRcIixcImNvbmRpdGlvblwiOlwiMTAwNjozMCwxMDA0OjE0LDEwMTQ6MTEsMTAwODoxNVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjEwMDBcIn0se1wiaWRcIjo0NCxcImNvbW1pc3Npb25cIjowLjYyLFwiY29uZGl0aW9uXCI6XCIxMDA5OjE1LDEwMDM6MjgsMTAwMjozNCwxMDA3OjE5XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MTYwMFwifSx7XCJpZFwiOjQ1LFwiY29tbWlzc2lvblwiOlwiMC40MVwiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjE1LDEwMTA6MjMsMTAwNzoxMywxMDExOjEzXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MjIwMFwifSx7XCJpZFwiOjQ2LFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMDM6MjIsMTAwNzoyMywxMDEwOjE2LDEwMDI6MjRcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyODAwXCJ9LHtcImlkXCI6NDcsXCJjb21taXNzaW9uXCI6MC40OSxcImNvbmRpdGlvblwiOlwiMTAxMDoyNCwxMDE1OjIwLDEwMDM6MjUsMTAxNDoxNlwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjM0MDBcIn0se1wiaWRcIjo0OCxcImNvbW1pc3Npb25cIjpcIjAuMjZcIixcImNvbmRpdGlvblwiOlwiMTAxMzoxNywxMDA3OjI0LDEwMDg6MzcsMTAwMTozMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjQwMDBcIn0se1wiaWRcIjo0OSxcImNvbW1pc3Npb25cIjowLjQ4LFwiY29uZGl0aW9uXCI6XCIxMDAyOjI2LDEwMDQ6MjEsMTAwOToyMiwxMDA2OjIwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6NDYwMFwifSx7XCJpZFwiOjUwLFwiY29tbWlzc2lvblwiOlwiMC4yNVwiLFwiY29uZGl0aW9uXCI6XCIxMDA2OjI3LDEwMTI6MTksMTAwODoyMCwxMDE1OjExXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6NTIwMFwifSx7XCJpZFwiOjUxLFwiY29tbWlzc2lvblwiOlwiMC4zNFwiLFwiY29uZGl0aW9uXCI6XCIxMDExOjE4LDEwMDQ6MTksMTAwMjoyNSwxMDAzOjExXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6NTgwMFwifSx7XCJpZFwiOjUyLFwiY29tbWlzc2lvblwiOjAuNDMsXCJjb25kaXRpb25cIjpcIjEwMTU6MTUsMTAxMzoyMCwxMDAxOjI1LDEwMDQ6MjZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo2NDAwXCJ9LHtcImlkXCI6NTMsXCJjb21taXNzaW9uXCI6XCIwLjI4XCIsXCJjb25kaXRpb25cIjpcIjEwMTQ6MTQsMTAxMjoxMiwxMDEwOjIwLDEwMTU6MThcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTo3MDAwXCJ9LHtcImlkXCI6NTQsXCJjb21taXNzaW9uXCI6MC40NSxcImNvbmRpdGlvblwiOlwiMTAwNToyMiwxMDAyOjMzLDEwMDk6MTYsMTAxNToxN1wiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjc2MDBcIn0se1wiaWRcIjo1NSxcImNvbW1pc3Npb25cIjpcIjAuNTZcIixcImNvbmRpdGlvblwiOlwiMTAwMToyMywxMDE0OjE5LDEwMDU6MTcsMTAxMDoxNVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjgyMDBcIn0se1wiaWRcIjo1NixcImNvbW1pc3Npb25cIjpcIjAuMzVcIixcImNvbmRpdGlvblwiOlwiMTAwNjoyNywxMDA1OjI5LDEwMDk6MTcsMTAwMzoxOFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjg4MDBcIn0se1wiaWRcIjo1NyxcImNvbW1pc3Npb25cIjowLjY3LFwiY29uZGl0aW9uXCI6XCIxMDA3OjIxLDEwMDg6MTcsMTAwMjoxNiwxMDA5OjI1XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6OTQwMFwifSx7XCJpZFwiOjU4LFwiY29tbWlzc2lvblwiOjAuMzIsXCJjb25kaXRpb25cIjpcIjEwMDY6MjAsMTAwODoyNSwxMDA1OjI0LDEwMDc6MTlcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDAwMFwifSx7XCJpZFwiOjU5LFwiY29tbWlzc2lvblwiOjAuNzksXCJjb25kaXRpb25cIjpcIjEwMTI6MjUsMTAwOTozMCwxMDEzOjE2LDEwMDg6MTVcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMDYwMFwifSx7XCJpZFwiOjYwLFwiY29tbWlzc2lvblwiOjAuNjksXCJjb25kaXRpb25cIjpcIjEwMTU6MjYsMTAxMjoyNywxMDEwOjMxLDEwMDE6MjNcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMTIwMFwifSx7XCJpZFwiOjYxLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMTU6MTIsMTAwNjoyNSwxMDExOjE1LDEwMDI6MTdcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMTgwMFwifSx7XCJpZFwiOjYyLFwiY29tbWlzc2lvblwiOjAuNDQsXCJjb25kaXRpb25cIjpcIjEwMTU6MjEsMTAwNzoxNSwxMDExOjE4LDEwMDY6MjZcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMjQwMFwifSx7XCJpZFwiOjYzLFwiY29tbWlzc2lvblwiOjAuMDEsXCJjb25kaXRpb25cIjpcIjEwMTA6MTgsMTAwNToxNiwxMDA5OjEzLDEwMDM6MjdcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMzAwMFwifSx7XCJpZFwiOjY0LFwiY29tbWlzc2lvblwiOjAuMjcsXCJjb25kaXRpb25cIjpcIjEwMDc6MTcsMTAwNjoxMCwxMDA1OjI5LDEwMDQ6MjVcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxMzYwMFwifSx7XCJpZFwiOjY1LFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMDg6MTUsMTAwMzozMCwxMDE0OjIwLDEwMDU6MTVcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNDIwMFwifSx7XCJpZFwiOjY2LFwiY29tbWlzc2lvblwiOjAuNzMsXCJjb25kaXRpb25cIjpcIjEwMDQ6MjUsMTAwODoyNSwxMDAyOjM0LDEwMTI6MTRcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNDgwMFwifSx7XCJpZFwiOjY3LFwiY29tbWlzc2lvblwiOjAuMTMsXCJjb25kaXRpb25cIjpcIjEwMDE6MzYsMTAxMjoyMCwxMDExOjIwLDEwMDM6MjBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNTQwMFwifSx7XCJpZFwiOjY4LFwiY29tbWlzc2lvblwiOjAuNjksXCJjb25kaXRpb25cIjpcIjEwMTM6MjQsMTAwODoyMywxMDA2OjE2LDEwMDc6MTdcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNjAwMFwifSx7XCJpZFwiOjY5LFwiY29tbWlzc2lvblwiOjAuMzcsXCJjb25kaXRpb25cIjpcIjEwMTU6MzAsMTAwNDoyOSwxMDEzOjE3LDEwMDk6MTBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNjYwMFwifSx7XCJpZFwiOjcwLFwiY29tbWlzc2lvblwiOjAuNzEsXCJjb25kaXRpb25cIjpcIjEwMTA6MjMsMTAwNDozMSwxMDExOjE3LDEwMTI6MTFcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNzIwMFwifSx7XCJpZFwiOjcxLFwiY29tbWlzc2lvblwiOjAuMjksXCJjb25kaXRpb25cIjpcIjEwMDg6MTEsMTAwMjoyNiwxMDAzOjI4LDEwMTU6MTNcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxNzgwMFwifSx7XCJpZFwiOjcyLFwiY29tbWlzc2lvblwiOjAuMzEsXCJjb25kaXRpb25cIjpcIjEwMDU6MjUsMTAwMjozOCwxMDEyOjE5LDEwMTA6MTRcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxODQwMFwifSx7XCJpZFwiOjczLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMTI6MzQsMTAwNjoyMiwxMDAzOjI3LDEwMDQ6MjBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxOTAwMFwifSx7XCJpZFwiOjc0LFwiY29tbWlzc2lvblwiOjAuMjYsXCJjb25kaXRpb25cIjpcIjEwMDM6MjAsMTAxMjoxOCwxMDAyOjMwLDEwMDE6MjBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToxOTYwMFwifSx7XCJpZFwiOjc1LFwiY29tbWlzc2lvblwiOjAuMTgsXCJjb25kaXRpb25cIjpcIjEwMDY6MzEsMTAxNDozMCwxMDA4OjEyLDEwMDI6MjVcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyMDIwMFwifSx7XCJpZFwiOjc2LFwiY29tbWlzc2lvblwiOjAuNTEsXCJjb25kaXRpb25cIjpcIjEwMDc6MjEsMTAxMjoyMCwxMDA0OjExLDEwMTQ6MjBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyMDgwMFwifSx7XCJpZFwiOjc3LFwiY29tbWlzc2lvblwiOjAuMjEsXCJjb25kaXRpb25cIjpcIjEwMDg6MTUsMTAwOToxNiwxMDEyOjI0LDEwMDc6MzBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyMTQwMFwifSx7XCJpZFwiOjc4LFwiY29tbWlzc2lvblwiOjAuNzMsXCJjb25kaXRpb25cIjpcIjEwMTU6MTYsMTAxMjoxNiwxMDA2OjIwLDEwMDg6MjJcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyMjAwMFwifSx7XCJpZFwiOjc5LFwiY29tbWlzc2lvblwiOjAuNjUsXCJjb25kaXRpb25cIjpcIjEwMDY6MjYsMTAwNDoxOCwxMDA3OjEyLDEwMTE6MjdcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyMjYwMFwifSx7XCJpZFwiOjgwLFwiY29tbWlzc2lvblwiOjAuMzksXCJjb25kaXRpb25cIjpcIjEwMDk6MTUsMTAwMzoxNiwxMDA0OjE5LDEwMDc6MjRcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyMzIwMFwifSx7XCJpZFwiOjgxLFwiY29tbWlzc2lvblwiOjAuMTQsXCJjb25kaXRpb25cIjpcIjEwMTI6MjAsMTAxNToyOCwxMDAyOjI0LDEwMDM6MzhcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyMzgwMFwifSx7XCJpZFwiOjgyLFwiY29tbWlzc2lvblwiOjAuMixcImNvbmRpdGlvblwiOlwiMTAwNToxMiwxMDExOjE5LDEwMDk6MTgsMTAwMjoxNFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjI0NDAwXCJ9LHtcImlkXCI6ODMsXCJjb21taXNzaW9uXCI6MC41MyxcImNvbmRpdGlvblwiOlwiMTAxMDoxOSwxMDAzOjM4LDEwMDc6MjIsMTAxNToyMFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjI1MDAwXCJ9LHtcImlkXCI6ODQsXCJjb21taXNzaW9uXCI6MC42MixcImNvbmRpdGlvblwiOlwiMTAwNToyOSwxMDE0OjI2LDEwMDI6MTgsMTAwNzozOFwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjI1NjAwXCJ9LHtcImlkXCI6ODUsXCJjb21taXNzaW9uXCI6MC4zNyxcImNvbmRpdGlvblwiOlwiMTAxMToyMCwxMDAxOjE3LDEwMTI6MTIsMTAwNDozMlwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjI2MjAwXCJ9LHtcImlkXCI6ODYsXCJjb21taXNzaW9uXCI6MC41OSxcImNvbmRpdGlvblwiOlwiMTAwOToyNSwxMDExOjIwLDEwMDY6MTQsMTAxNToyMVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjI2ODAwXCJ9LHtcImlkXCI6ODcsXCJjb21taXNzaW9uXCI6XCIwLjMxXCIsXCJjb25kaXRpb25cIjpcIjEwMDY6MjYsMTAwNToxOSwxMDEzOjIwLDEwMTQ6MjlcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMToyNzQwMFwifSx7XCJpZFwiOjg4LFwiY29tbWlzc2lvblwiOlwiMC40OFwiLFwiY29uZGl0aW9uXCI6XCIxMDA4OjM3LDEwMTE6MjQsMTAxNToxMiwxMDE0OjExXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MjgwMDBcIn0se1wiaWRcIjo4OSxcImNvbW1pc3Npb25cIjpcIjAuMjJcIixcImNvbmRpdGlvblwiOlwiMTAwMjoxNywxMDAzOjI4LDEwMDU6MjIsMTAxMDozMVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjI4NjAwXCJ9LHtcImlkXCI6OTAsXCJjb21taXNzaW9uXCI6MC4zMixcImNvbmRpdGlvblwiOlwiMTAwMjozOSwxMDEzOjI4LDEwMDc6MjUsMTAwMTozM1wiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjI5MjAwXCJ9LHtcImlkXCI6OTEsXCJjb21taXNzaW9uXCI6MC4xOSxcImNvbmRpdGlvblwiOlwiMTAwODoxNSwxMDEzOjIwLDEwMTQ6MTAsMTAwNzoyNlwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjI5ODAwXCJ9LHtcImlkXCI6OTIsXCJjb21taXNzaW9uXCI6MC4xMyxcImNvbmRpdGlvblwiOlwiMTAwNDozOCwxMDExOjEzLDEwMDg6MTUsMTAwNzoyOVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjMwNDAwXCJ9LHtcImlkXCI6OTMsXCJjb21taXNzaW9uXCI6MC4zNCxcImNvbmRpdGlvblwiOlwiMTAxMzoxMiwxMDAxOjM5LDEwMDY6MzgsMTAwODozMVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjMxMDAwXCJ9LHtcImlkXCI6OTQsXCJjb21taXNzaW9uXCI6MC4yMixcImNvbmRpdGlvblwiOlwiMTAwMjozNiwxMDE0OjI3LDEwMTM6MTYsMTAwNTozMVwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjMxNjAwXCJ9LHtcImlkXCI6OTUsXCJjb21taXNzaW9uXCI6MC4xNSxcImNvbmRpdGlvblwiOlwiMTAwNToyNiwxMDExOjM0LDEwMTU6MzQsMTAwODoxNlwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjMyMjAwXCJ9LHtcImlkXCI6OTYsXCJjb21taXNzaW9uXCI6XCIwLjQ5XCIsXCJjb25kaXRpb25cIjpcIjEwMDM6MjQsMTAwMTozNCwxMDA3OjI4LDEwMDU6MzBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTozMjgwMFwifSx7XCJpZFwiOjk3LFwiY29tbWlzc2lvblwiOlwiMC42XCIsXCJjb25kaXRpb25cIjpcIjEwMTM6MzIsMTAwOTozMywxMDA2OjMwLDEwMTE6NDBcIixcImV4dHJhX3Jld2FyZFwiOlwiMTAwMTozMzQwMFwifSx7XCJpZFwiOjk4LFwiY29tbWlzc2lvblwiOlwiMC4zNVwiLFwiY29uZGl0aW9uXCI6XCIxMDE0OjQwLDEwMDk6NDMsMTAxNTozMywxMDEyOjQ1XCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MzQwMDBcIn0se1wiaWRcIjo5OSxcImNvbW1pc3Npb25cIjpcIjAuNDRcIixcImNvbmRpdGlvblwiOlwiMTAxMTozOSwxMDA4OjM3LDEwMDk6MzAsMTAxMzo0MlwiLFwiZXh0cmFfcmV3YXJkXCI6XCIxMDAxOjM0NjAwXCJ9LHtcImlkXCI6MTAwLFwiY29tbWlzc2lvblwiOlwiMC40OVwiLFwiY29uZGl0aW9uXCI6XCIxMDEyOjQwLDEwMTA6MzMsMTAxMzozMCwxMDExOjQwXCIsXCJleHRyYV9yZXdhcmRcIjpcIjEwMDE6MzUyMDBcIn1dLFwibGFuZ1wiOltdLFwibGFuZExldmVsXCI6W3tcImlkXCI6MSxcInJld2FyZFwiOlwiMTAwMjowXCIsXCJjb3N0XCI6XCIxMDAyOjBcIixcImdhaW5cIjpudWxsLFwicHJvYmFiaWxpdHlcIjowLjEsXCJnZXRfZGlhbW9uZFwiOjF9LHtcImlkXCI6MixcInJld2FyZFwiOlwiMTAwMjoxNTAwXCIsXCJjb3N0XCI6XCIxMDAyOjUwMDBcIixcImdhaW5cIjowLjEsXCJwcm9iYWJpbGl0eVwiOjAuMTMsXCJnZXRfZGlhbW9uZFwiOjF9LHtcImlkXCI6MyxcInJld2FyZFwiOlwiMTAwMjoyMDAwXCIsXCJjb3N0XCI6XCIxMDAyOjEwMDAwXCIsXCJnYWluXCI6MC4yNSxcInByb2JhYmlsaXR5XCI6MC4yNSxcImdldF9kaWFtb25kXCI6Mn0se1wiaWRcIjo0LFwicmV3YXJkXCI6XCIxMDAyOjI1MDBcIixcImNvc3RcIjpcIjEwMDI6MjAwMDBcIixcImdhaW5cIjowLjQsXCJwcm9iYWJpbGl0eVwiOjAuMzgsXCJnZXRfZGlhbW9uZFwiOjN9LHtcImlkXCI6NSxcInJld2FyZFwiOlwiMTAwMjozMDAwXCIsXCJjb3N0XCI6XCIxMDAyOjUwMDAwXCIsXCJnYWluXCI6MC41NSxcInByb2JhYmlsaXR5XCI6MC41LFwiZ2V0X2RpYW1vbmRcIjo1fV0sXCJmZWVkXCI6W3tcImlkXCI6MTAwMSxcIm5hbWVcIjpcIlx1OTk3Q1x1NUU3MlwiLFwiaWNvblwiOlwicGV0X2ZlZWQvMTAwMV9mZWVkLnBuZ1wiLFwidml0YWxpdHlcIjoxLFwiY29zdFwiOlwiMTAwMjozMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDIsXCJuYW1lXCI6XCJcdTU3NUFcdTY3OUNcIixcImljb25cIjpcInBldF9mZWVkLzEwMDJfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MixcImNvc3RcIjpcIjEwMDI6NTBcIixcImRlc2NcIjpcIlx1NTNFRlx1NTg5RVx1NTJBMFx1NUJBMFx1NzI2OSZcdTcwQjlcdTRGNTNcdTUyOUJcIn0se1wiaWRcIjoxMDAzLFwibmFtZVwiOlwiXHU3MDZCXHU4MTdGXCIsXCJpY29uXCI6XCJwZXRfZmVlZC8xMDAzX2ZlZWQucG5nXCIsXCJ2aXRhbGl0eVwiOjUsXCJjb3N0XCI6XCIxMDAyOjEwMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDQsXCJuYW1lXCI6XCJcdTcyNUJcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDRfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6NTAsXCJjb3N0XCI6XCIxMDAyOjkwMFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDUsXCJuYW1lXCI6XCJcdTczMkFcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDVfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MjAsXCJjb3N0XCI6XCIxMDAyOjQ2MFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifSx7XCJpZFwiOjEwMDYsXCJuYW1lXCI6XCJcdTlFMjFcdTgwODlcIixcImljb25cIjpcInBldF9mZWVkLzEwMDZfZmVlZC5wbmdcIixcInZpdGFsaXR5XCI6MTAsXCJjb3N0XCI6XCIxMDAyOjI3MFwiLFwiZGVzY1wiOlwiXHU1M0VGXHU1ODlFXHU1MkEwXHU1QkEwXHU3MjY5Jlx1NzBCOVx1NEY1M1x1NTI5QlwifV0sXCJjdXJyZW5jeVwiOlt7XCJpZFwiOjEwMDEsXCJuYW1lXCI6XCJcdTk0QkJcdTc3RjNcIixcImljb25cIjpcIm1haW5fc2NlbmUvaW1nX2RpYW1vbmQucG5nXCJ9LHtcImlkXCI6MTAwMixcIm5hbWVcIjpcIlx1OTFEMVx1NUUwMVwiLFwiaWNvblwiOlwibWFpbl9zY2VuZS9pbWdfY29pbi5wbmdcIn1dLFwiY29uZmlnXCI6W3tcImlkXCI6XCJhbGxfc3BlZWRfdXBfdGltZXNcIixcInZhbHVlXCI6MzB9LHtcImlkXCI6XCJhbGxfc3BlZWRfdXBfdGltZVwiLFwidmFsdWVcIjo2MDB9LHtcImlkXCI6XCJ1bmxvY2tfbGFuZF9jb3N0XCIsXCJ2YWx1ZVwiOlwiMTAwMjowLDEwMDI6MCwxMDAyOjUwMDAsMTAwMjoxMDAwMCwxMDAyOjIwMDAwLDEwMDI6MzAwMDAsMTAwMjo0MDAwMCwxMDAyOjUwMDAwLDEwMDI6NjAwMDBcIn0se1wiaWRcIjpcImdvbGREZWZhdWx0XCIsXCJ2YWx1ZVwiOlwiMTAwMjoxMDBcIn0se1wiaWRcIjpcImRpYW1vbmREZWZhdWx0XCIsXCJ2YWx1ZVwiOlwiMTAwMTo1MFwifSx7XCJpZFwiOlwiQURUaW1lc0xpbWl0XCIsXCJ2YWx1ZVwiOjUwfSx7XCJpZFwiOlwiQURTcGVlZFVwdGltZXNcIixcInZhbHVlXCI6Nn0se1wiaWRcIjpcInZpdGFsaXR5QnV5Q29zdEdvbGRcIixcInZhbHVlXCI6XCIxMDAyOjEwMDAwXCJ9LHtcImlkXCI6XCJ2aXRhbGl0eUxpbWl0XCIsXCJ2YWx1ZVwiOjN9LHtcImlkXCI6XCJJbml0aWFsX3BoeXNpY2FsX3N0cmVuZ3RoXCIsXCJ2YWx1ZVwiOjN9LHtcImlkXCI6XCJsYW5kQW1vdW50TWF4XCIsXCJ2YWx1ZVwiOjl9LHtcImlkXCI6XCJwZXREZWZhdWx0Vml0YWxpdHlcIixcInZhbHVlXCI6MTAwfSx7XCJpZFwiOlwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCIsXCJ2YWx1ZVwiOjM2MDB9LHtcImlkXCI6XCJWaWRlb3Jld2FyZHNcIixcInZhbHVlXCI6XCIxMDAxOjQ1MDo2MDAsMTAwMToyNTA6MzUwLDEwMDE6MjAwOjMwMCwxMDAxOjEwMDoyMDAsMTAwMTo4MDoxMDBcIn0se1wiaWRcIjpcIndpdGhkcmF3YWxcIixcInZhbHVlXCI6XCIxMDAxOjEwMDAwOjFcIn0se1wiaWRcIjpcIkludml0YXRpb25fcmV3YXJkc1wiLFwidmFsdWVcIjpcIjEwMDE6NTAwMFwifSx7XCJpZFwiOlwid2l0aGRyYXdhbF90aW1lc1wiLFwidmFsdWVcIjpcIjAuMzoxOjA6MCw1OjE6NjozMCwxMDoxOjE1OjYwLDUwOjE6NTA6ODAsMTAwOjE6MTAwOjkwLDIwMDowOjIwMDo5N1wifV19OyIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29scyB7XHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NUI1N1x1N0IyNlxyXG4gICAgICogQHBhcmFtIHN0ciBcdTg5ODFcdTg5RTNcdTY3OTBcdTc2ODRcdTVCNTdcdTdCMjZcclxuICAgICAqIEBwYXJhbSBmb3JtYXQgXHU1MDVBXHU0RTNBXHU1M0MyXHU4MDAzXHU3Njg0XHU1QjU3XHU3QjI2XHU5RUQ4XHU4QkE0XHU0RTNBLFxyXG4gICAgICogQHJldHVybnMgXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1QjU3XHU3QjI2XHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVN0cmluZyhzdHI6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcgPSBcIixcIikge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gW107XHJcbiAgICAgICAgcmV0dXJuIHN0ci5zcGxpdChmb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3OUQyXHU4RjZDXHU2MzYyXHU2MjEwMDA6MDA6MDBcclxuICAgICAqIEBwYXJhbSBzIFx1OEY2Q1x1NjM2Mlx1NjVGNlx1OTVGNFx1NzY4NFx1NzlEMlxyXG4gICAgICogQHJldHVybnMgMDA6MDA6MDBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGZvcm1hdFNlY29uZHMgPSAocykgPT4gbmV3IERhdGUocyAqIDEwMDApLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDExLCA4KTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEY2Q1x1NjM2Mlx1OTFEMVx1NUUwMVx1MzAwMlx1NjgzQ1x1NUYwRlx1NEUzQVx1NEUyNFx1NEY0RFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9ybWF0TW9uZXkobnVtOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCkubWF0Y2goL15cXGQrKD86XFwuXFxkezAsMn0pPy8pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuL1RhYmxlXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb25maWdCYXNlLFxyXG4gICAgQ3VycmVuY3lCYXNlLFxyXG4gICAgRmVlZEJhc2UsXHJcbiAgICBMYW5kTGV2ZWxCYXNlLFxyXG4gICAgT3JkZXJCYXNlLFxyXG4gICAgUGV0QmFzZSxcclxuICAgIFBsYW50QmFzZSxcclxuICAgIFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgIFNpZ25JbkJhc2UsXHJcbiAgICBUYXNrQmFzZSxcclxufSBmcm9tIFwiLi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcIi4vVG9vbHNcIjtcclxuXHJcbmNvbnN0IFRhYmxlUHJvcGVydHlFdmVudCA9IHtcclxuICAgIHBldChkOiB0eXBlb2YgVGFibGUucGV0WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQZXRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uIHx8IGBwZXRfZmVlZC8ke2QuaWR9X2RvZy5wbmdgLFxyXG4gICAgICAgICAgICB2aXRhbGl0eV9tYXg6IGQudml0YWxpdHlfbWF4LFxyXG4gICAgICAgICAgICB2aXRhbGl0eV9jb25zdW1lOiBkLnZpdGFsaXR5X2NvbnN1bWUsXHJcbiAgICAgICAgICAgIGNvc3Q6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLmNvc3QpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHNlbnNpdGl2ZTogZC5zZW5zaXRpdmUsXHJcbiAgICAgICAgICAgIGFiaWxpdHk6IGQuYWJpbGl0eSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OTk3Mlx1NjU5OVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBmZWVkKGQ6IHR5cGVvZiBUYWJsZS5mZWVkWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxGZWVkQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkLm5hbWUsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbiB8fCBgcGV0X2ZlZWQvJHtkLmlkfV9mZWVkLnBuZ2AsXHJcbiAgICAgICAgICAgIHZpdGFsaXR5OiBkLnZpdGFsaXR5LFxyXG4gICAgICAgICAgICBjb3N0OiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5jb3N0KSxcclxuICAgICAgICAgICAgZGVzYzogZC5kZXNjLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU4QkEyXHU1MzU1XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgb3JkZXIoZDogdHlwZW9mIFRhYmxlLm9yZGVyWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxPcmRlckJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgY29tbWlzc2lvbjogTnVtYmVyKGQuY29tbWlzc2lvbiksXHJcbiAgICAgICAgICAgIGNvbmRpdGlvbjogVG9vbHMucGFyc2VTdHJpbmcoZC5jb25kaXRpb24pLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBUb29scy5wYXJzZVN0cmluZyhlLCBcIjpcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW50OiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoTnVtYmVyKHZbMF0pKSxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogTnVtYmVyKHZbMV0pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGV4dHJhUmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5leHRyYV9yZXdhcmQpLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU2MjEwXHU3MTlGXHU2OTBEXHU3MjY5XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZCBcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcGxhbnQoZDogdHlwZW9mIFRhYmxlLnBsYW50WzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQbGFudEJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24sXHJcbiAgICAgICAgICAgIG1hdHVyZUljb246IGBwbGFudF9pY29uLyR7ZC5pY29uLm1hdGNoKC9cXGQrL2cpWzBdfV9tYXR1cmUucG5nYCxcclxuICAgICAgICAgICAgZ3Jvd2luZ0ljb246IGBwbGFudF9pY29uLyR7ZC5pY29uLm1hdGNoKC9cXGQrL2cpWzBdfV9ncm93aW5nLnBuZ2AsXHJcbiAgICAgICAgICAgIGdhaW46IFRvb2xzLnBhcnNlU3RyaW5nKGQuZ2FpbikubWFwKChlKSA9PiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZSkpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHNlZWRfcHJpY2U6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnNlZWRfcHJpY2UpLFxyXG4gICAgICAgICAgICBoYXJ2ZXN0OiBOdW1iZXIoVG9vbHMucGFyc2VTdHJpbmcoZC5oYXJ2ZXN0LCBcIn5cIilbMV0pLFxyXG4gICAgICAgICAgICBtYXR1cmVfdGltZTogTnVtYmVyKGQubWF0dXJlX3RpbWUpLFxyXG4gICAgICAgICAgICB1bmxvY2tfY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudW5sb2NrX2Nvc3QpLFxyXG4gICAgICAgICAgICB1bmxvY2tfcmV3YXJkOiBUb29scy5wYXJzZVN0cmluZyhkLnVubG9ja19yZXdhcmQpLm1hcCgoZSkgPT4gZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGUpKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1OEQyN1x1NUUwMVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbmN5KGQ6IHR5cGVvZiBUYWJsZS5jdXJyZW5jeVswXSkge1xyXG4gICAgICAgIHJldHVybiA8Q3VycmVuY3lCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIGljb246IGQuaWNvbixcclxuICAgICAgICAgICAgbmFtZTogZC5uYW1lLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU1NzFGXHU1NzMwXHU3QjQ5XHU3RUE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIGxhbmRMZXZlbChkOiB0eXBlb2YgVGFibGUubGFuZExldmVsWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxMYW5kTGV2ZWxCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIHJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQucmV3YXJkKSxcclxuICAgICAgICAgICAgY29zdDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQuY29zdCksXHJcbiAgICAgICAgICAgIGdhaW46IGQuZ2FpbixcclxuICAgICAgICAgICAgcHJvYmFiaWxpdHk6IGQucHJvYmFiaWxpdHksXHJcbiAgICAgICAgICAgIGdldERpYW1vbmQ6IGQuZ2V0X2RpYW1vbmQsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uZmlnKGQ6IHR5cGVvZiBUYWJsZS5jb25maWdbMF0pIHtcclxuICAgICAgICBzd2l0Y2ggKGQuaWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcImFsbF9zcGVlZF91cF90aW1lc1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiYWxsX3NwZWVkX3VwX3RpbWVzXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYWxsX3NwZWVkX3VwX3RpbWVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcImFsbF9zcGVlZF91cF90aW1lXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidW5sb2NrX2xhbmRfY29zdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ1bmxvY2tfbGFuZF9jb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFRvb2xzLnBhcnNlU3RyaW5nKGQudmFsdWUgYXMgc3RyaW5nKS5tYXAoKGQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJld2FyZEN1cnJlbmN5QmFzZShkKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImdvbGREZWZhdWx0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImdvbGREZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZykuY291bnQsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiZGlhbW9uZERlZmF1bHRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGlhbW9uZERlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKS5jb3VudCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJBRFRpbWVzTGltaXRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcIkFEVGltZXNMaW1pdFwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwiQURTcGVlZFVwdGltZXNcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcIkFEU3BlZWRVcHRpbWVzXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcInZpdGFsaXR5QnV5Q29zdEdvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQudmFsdWUgYXMgc3RyaW5nKS5jb3VudCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2aXRhbGl0eUxpbWl0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJ2aXRhbGl0eUxpbWl0XCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJJbml0aWFsX3BoeXNpY2FsX3N0cmVuZ3RoXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJJbml0aWFsX3BoeXNpY2FsX3N0cmVuZ3RoXCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kQW1vdW50TWF4XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJsYW5kQW1vdW50TWF4XCIsIHZhbHVlOiBkLnZhbHVlIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXREZWZhdWx0Vml0YWxpdHlcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGlkOiBcInBldERlZmF1bHRWaXRhbGl0eVwiLCB2YWx1ZTogZC52YWx1ZSB9O1xyXG4gICAgICAgICAgICBjYXNlIFwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJwZXREaWdlc3RJbnRlcnZhbFRpbWVcIiwgdmFsdWU6IGQudmFsdWUgfTtcclxuICAgICAgICAgICAgY2FzZSBcIlZpZGVvcmV3YXJkc1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IFwiVmlkZW9yZXdhcmRzXCIsIHZhbHVlOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC52YWx1ZSBhcyBzdHJpbmcpIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aXRoZHJhd2FsXCI6IC8vXHU2M0QwXHU3M0IwXHU2QkQ0XHU0RjhCXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBpZDogXCJ3aXRoZHJhd2FsXCIsIHZhbHVlOiBUb29scy5wYXJzZVN0cmluZyhkLnZhbHVlIGFzIHN0cmluZywgXCI6XCIpIH07XHJcbiAgICAgICAgICAgIGNhc2UgXCJJbnZpdGF0aW9uX3Jld2FyZHNcIjogLy9cdTkwODBcdThCRjdcdTU5N0RcdTUzQ0JcdTU5NTZcdTUyQjFcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiSW52aXRhdGlvbl9yZXdhcmRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFJld2FyZEN1cnJlbmN5QmFzZShkLnZhbHVlIGFzIHN0cmluZyksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFwid2l0aGRyYXdhbF90aW1lc1wiOiAvL1x1NjNEMFx1NzNCMFx1NkIyMVx1NjU3MFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJ3aXRoZHJhd2FsX3RpbWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFRvb2xzLnBhcnNlU3RyaW5nKGQudmFsdWUgYXMgc3RyaW5nKS5tYXAoKHY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gVG9vbHMucGFyc2VTdHJpbmcodiwgXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IE51bWJlcih2WzBdKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXM6IE51bWJlcih2WzFdKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52aXRlQW1vdW50OiBOdW1iZXIodlsyXSkgfHwgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyTHY6IE51bWJlcih2WzNdKSB8fCAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU5NTAxXHU3QjdFXHU1MjMwXHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gZFxyXG4gICAgICovXHJcbiAgICBzaWduSW4oZDogdHlwZW9mIFRhYmxlLnNpZ25JblswXSkge1xyXG4gICAgICAgIHJldHVybiA8U2lnbkluQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBkYXlzOiBkLmRheXMsXHJcbiAgICAgICAgICAgIHJld2FyZDogZ2V0UmV3YXJkQ3VycmVuY3lCYXNlKGQucmV3YXJkKSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NEVGQlx1NTJBMVx1ODg2OFxyXG4gICAgICovXHJcbiAgICB0YXNrKGQ6IHR5cGVvZiBUYWJsZS50YXNrWzBdKSB7XHJcbiAgICAgICAgcmV0dXJuIDxUYXNrQmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICB0aW1lczogZC50aW1lcyxcclxuICAgICAgICAgICAgcmV3YXJkOiBnZXRSZXdhcmRDdXJyZW5jeUJhc2UoZC5yZXdhcmQpLFxyXG4gICAgICAgICAgICBkZXNjOiBkLmRlc2MsXHJcbiAgICAgICAgICAgIHRpdGxlOiBkLnRpdGxlLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24gfHwgYGdhbWUvaW1nX2Jhcm0ucG5nYCxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcclxuICogQHBhcmFtIHN0ciBcdTg5RTNcdTY3OTBcdTc2ODRcdThEMjdcdTVFMDFcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQgaWQ6bnVtXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXdhcmRDdXJyZW5jeUJhc2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIGlmICghc3RyKSByZXR1cm4gbnVsbDtcclxuICAgIGxldCBsaXN0ID0gVG9vbHMucGFyc2VTdHJpbmcoc3RyLCBcIjpcIik7XHJcblxyXG4gICAgcmV0dXJuIDxSZXdhcmRDdXJyZW5jeUJhc2U+e1xyXG4gICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KE51bWJlcihsaXN0WzBdKSksXHJcbiAgICAgICAgY291bnQ6IE51bWJlcihsaXN0WzFdKSxcclxuICAgIH07XHJcbn1cclxuXHJcbnR5cGUgdHlwZVRhYmxlID0gdHlwZW9mIFRhYmxlUHJvcGVydHlFdmVudDtcclxuXHJcbmNsYXNzIFRhYmxlQ29udHJvbCB7XHJcbiAgICBwcml2YXRlIHRhYmxlQ2FjaGU6IE1hcDxrZXlvZiB0eXBlVGFibGUsIFJldHVyblR5cGU8dHlwZVRhYmxlW2tleW9mIHR5cGVUYWJsZV0+W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU3Njg0XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0ga2V5IFx1ODg2OFx1NzY4NGtleVxyXG4gICAgICovXHJcbiAgICB0YWJsZTxUIGV4dGVuZHMga2V5b2YgdHlwZVRhYmxlPihcclxuICAgICAgICBrZXk6IFRcclxuICAgICk6IHtcclxuICAgICAgICBsaXN0OiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT5bXTtcclxuICAgICAgICBnZXQ6IHsgKGlkOiBudW1iZXIgfCBzdHJpbmcpOiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT4gfTtcclxuICAgIH0ge1xyXG4gICAgICAgIC8vXHU4QkZCXHU1M0Q2XHU3RUM0XHU2MjEwXHJcbiAgICAgICAgaWYgKHRoaXMudGFibGVDYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJsZUJhY2sodGhpcy50YWJsZUNhY2hlLmdldChrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTg5RTNcdTY3OTBcdTY1NzBcdTYzNkVcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIFRhYmxlW2tleV0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goVGFibGVQcm9wZXJ0eUV2ZW50W2tleV0oZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHU3RjEzXHU1QjU4XHU4OUUzXHU2NzkwXHU4ODY4XHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgdGhpcy50YWJsZUNhY2hlLnNldChrZXksIGxpc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayhsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUyOFx1NEU4RXRhYmxlXHU2NUI5XHU2Q0Q1XHU4RkQ0XHU1NkRFXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGXHU1NDhDXHU2REZCXHU1MkEwXHU4M0I3XHU1M0Q2XHU1MzU1XHU0RTJBXHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTg5RTNcdTY3OTBcdTg4NjhcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zIFx1OEZENFx1NTZERVx1NjMwN1x1NUI5QVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRhYmxlQmFjayhsaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGlzdDogbGlzdCxcclxuICAgICAgICAgICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGxpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODg2OFx1NjgzQ1x1ODlFM1x1Njc5MFx1NURFNVx1NTE3N1xyXG4gKi9cclxuY29uc3QgVGFibGVBbmFseXplID0gbmV3IFRhYmxlQ29udHJvbCgpO1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUFuYWx5emU7XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBSZWREb3RUeXBlIHtcclxuICAgIHRhc2sgPSBcInRhc2tcIixcclxuICAgIGZyaWVuZCA9IFwiZnJpZW5kXCIsXHJcbiAgICBtYWlsID0gXCJtYWlsXCIsXHJcbiAgICBhbnlEb29yID0gXCJhbnlEb29yXCIsXHJcbiAgICBvcmRlciA9IFwib3JkZXJcIixcclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkRG90Q29tcG9uZW50IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWREb3RDb21wb25lbnQgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnJlZERvdFR5cGUsIHRpcHM6XCJcdTVFMDNcdTVDMTRcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpFZGl0T3B0aW9uLCBvcHRpb246XCJ0YXNrLGZyaWVuZCxtYWlsLGFueURvb3Isb3JkZXJcIn0qL1xyXG4gICAgcmVkRG90VHlwZTogc3RyaW5nO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMub3duZXIgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBub2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBub2RlLmFuY2hvclggPSAwLjU7XHJcbiAgICAgICAgbm9kZS5hbmNob3JZID0gMC41O1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnVwZGF0ZV9yZWRfZG90KVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVSZWREb3QodHlwZTogc3RyaW5nLCBzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVkRG90VHlwZSA9PSB0eXBlKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5vd25lciBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNjYWxlKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUueSAtPSA0MDtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc2NhbGVYOiAxLCBzY2FsZVk6IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB5OiBub2RlLnkgKyA0MCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gc2hvdztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLnZpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrSW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS52aXNpYmxlID0gc2hvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgVGFza0Jhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBSZWREb3RUeXBlIH0gZnJvbSBcInNyYy9jb21wb25lbnRzL1JlZERvdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFza0RhdGFPYmoge1xyXG4gICAgLyoqIFx1NEVGQlx1NTJBMWlkICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NUI4Q1x1NjIxMFx1NkIyMVx1NjU3MCAqL1xyXG4gICAgdGltZXM6IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTk4ODZcdTUzRDZcdTU5NTZcdTUyQjEgMFx1NjcyQVx1OTg4Nlx1NTNENiAxXHU1REYyXHU5ODg2XHU1M0Q2ICovXHJcbiAgICByZWNlaXZlOiBudW1iZXI7XHJcbiAgICAvKiogXHU0RUZCXHU1MkExXHU1N0ZBXHU3ODQwXHU2NTcwXHU2MzZFICovXHJcbiAgICBiYXNlOiBUYXNrQmFzZTtcclxufVxyXG4vKipcclxuICogXHU0RUZCXHU1MkExXHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBUYXNrU2VydmljZSB7XHJcbiAgICBsaXN0OiBUYXNrRGF0YU9ialtdID0gW107XHJcblxyXG4gICAgaW5pdChkOiBOZXRJbml0W1widGFza3NcIl0pIHtcclxuICAgICAgICBkLmZvckVhY2goKGUpID0+XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBlLmlkLFxyXG4gICAgICAgICAgICAgICAgdGltZXM6IGUudGltZXMsXHJcbiAgICAgICAgICAgICAgICByZWNlaXZlOiBlLnJlY2VpdmUsXHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChlLmlkKSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU0RUZCXHU1MkExXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldFRhc2soaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVkRG90KCk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFt4XS5pZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdFt4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlZERvdCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdEEgPSB0aGlzLmdldFRhc2soYS5pZCksXHJcbiAgICAgICAgICAgICAgICB0QiA9IHRoaXMuZ2V0VGFzayhiLmlkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBhLmlkICtcclxuICAgICAgICAgICAgICAgICh0QT8ucmVjZWl2ZSA/IDEwMDAgOiAxKSArXHJcbiAgICAgICAgICAgICAgICAodEE/LnRpbWVzID49IGEuYmFzZT8udGltZXMgPyAxMDAgOiAxMDAwKSAtXHJcbiAgICAgICAgICAgICAgICAoYi5pZCArICh0Qj8ucmVjZWl2ZSA/IDEwMDAgOiAxKSArICh0Qj8udGltZXMgPj0gYi5iYXNlPy50aW1lcyA/IDEwMCA6IDEwMDApKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU0RUZCXHU1MkExXHU2REZCXHU1MkEwXHU2QjIxXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIHRhc2tBZGRUaW1lcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSB0aGlzLmdldFRhc2soaWQpO1xyXG4gICAgICAgIGlmICghdGFzaykge1xyXG4gICAgICAgICAgICAvL1x1OUVEOFx1OEJBNFx1NEUwRFx1NTIxQlx1NUVGQVx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICAvLyB0YXNrID0geyBpZDogaWQsIHRpbWVzOiAwLCByZWNlaXZlOiAwLCBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJ0YXNrXCIpLmdldChpZCkgfTtcclxuICAgICAgICAgICAgLy8gdGhpcy5saXN0LnB1c2godGFzayk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhc2sudGltZXMrKztcclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfdGFzayk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZWREb3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1N0VBMlx1NzBCOVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVSZWREb3QoKSB7XHJcbiAgICAgICAgbGV0IGhhc1Jld2FyZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICF0aGlzLmxpc3RbeF0ucmVjZWl2ZSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0W3hdLnRpbWVzID49IFRhYmxlQW5hbHl6ZS50YWJsZShcInRhc2tcIikuZ2V0KHRoaXMubGlzdFt4XS5pZCk/LnRpbWVzXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgaGFzUmV3YXJkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9yZWRfZG90LCBbUmVkRG90VHlwZS50YXNrLCBoYXNSZXdhcmRdKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFza1NlcnZpY2UoKTtcclxuIiwgImltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4uL2NvcmUvSW5zdGFuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcclxuICovXHJcbmNsYXNzIFVzZXJJbmZvIHtcclxuICAgIC8qKiBcdThCQTJcdTUzNTVcdTdCNDlcdTdFQTcgXHU1REYyXHU1QjhDXHU2MjEwICovXHJcbiAgICBvcmRlckxldmVsOiBudW1iZXIgPSAxO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NTQwRFx1NzlGMCAqL1xyXG4gICAgbmlja25hbWU6IHN0cmluZyA9IFwibmFtZVwiO1xyXG4gICAgLy8gLyoqIFx1NzUyOFx1NjIzN2lkICovXHJcbiAgICAvLyB1aWQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1NTJGXHU0RTAwXHU2ODA3XHU4QkM2ICovXHJcbiAgICBrZXk6IHN0cmluZyA9IG51bGw7XHJcbiAgICAvKiogXHU3NTI4XHU1NDBEXHU1OTM0XHU1MENGICovXHJcbiAgICBhdmF0YXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogXHU5NEJCXHU3N0YzICovXHJcbiAgICBkaWFtb25kOiBudW1iZXIgPSA5OTk7XHJcbiAgICAvKiogXHU5MUQxXHU1RTAxICovXHJcbiAgICBnb2xkOiBudW1iZXIgPSA5OTk7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1M0VGXHU0RUU1XHU3NzBCXHU1RTdGXHU1NDRBXHU3Njg0XHU2QjIxXHU2NTcwICovXHJcbiAgICBhZHZlcnRpc2VUaW1lczogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTczQTlcdTVCQjZcdTRGNjlcdTYyMzRcdTc2ODRcdTVCQTBcdTcyNjkgKi9cclxuICAgIHdhcmVQZXRJZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NTI2OVx1NEY1OVx1NEY1M1x1NTI5QiAqL1xyXG4gICAgcGV0Vml0YWxpdHk6IG51bWJlcjtcclxuICAgIC8qKiBcdTZEODhcdTUzMTZcdTk4REZcdTcyNjlcdTUwMTJcdThCQTFcdTY1RjYgKi9cclxuICAgIGRpZ2VzdENvdW50RG93bjogbnVtYmVyO1xyXG4gICAgLyoqIFx1OEZERVx1N0VFRFx1N0I3RVx1NTIzMFx1NTkyOVx1NjU3MCAqL1xyXG4gICAgc2lnbkluRGF5czogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTRFMEFcdTRFMDBcdTZCMjFcdTk4ODZcdTUzRDZcdTc2ODRcdTdCN0VcdTUyMzBcdTU5NTZcdTUyQjFpZCAqL1xyXG4gICAgc2lnbkluSWQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1REYyXHU3RUNGXHU1MkEwXHU5MDFGXHU2QjIxXHU2NTcwICovXHJcbiAgICBzcGVlZFVwVGltZXM6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU0RjUzXHU1MjlCICovXHJcbiAgICB2aXRhbGl0eTogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUxNTFcdTYzNjJcdTZCRDRcdTRGOEIgKi9cclxuICAgIHByb3BvcnRpb246IG51bWJlciA9IDAuMDAwMTtcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTgwMDUgKi9cclxuICAgIGludml0ZVBlb3BsZTogc3RyaW5nO1xyXG4gICAgLyoqIFx1N0IyQ1x1NEUwMFx1NkIyMVx1NzY3Qlx1NUY1NSAxMSBcdTg4NjhcdTc5M0EgXHU2MjREXHU4ODY4XHU3OTNBXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHU1QjhDXHU1MTY4XHU3RUQzXHU2NzVGICB0b2RvIFx1OEZEOVx1OTFDQ1x1NURGMlx1NjUzOVx1NTJBOCAqL1xyXG4gICAgaXNGaXJzdFRpbWU6IG51bWJlcjtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTYzRDBcdTczQjBcdTY1NzBcdTYzNkUgKi9cclxuICAgIHdpdGhkcmF3OiBXaXRoZHJhd0RhdGFbXTtcclxuICAgIC8qKiBcdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcdTY1NzBcdTYzNkUgKi9cclxuICAgIGd1aWRlRGF0YTogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTczQTlcdTVCQjZcdTU3MjhcdTdFQkZcdTU5MjlcdTY1NzAgXHU5RUQ4XHU4QkE0XHU3QjJDXHU0RTAwXHU1OTI5XHU0RTNBMSovXHJcbiAgICBkYXlzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NzcwQlx1NUU3Rlx1NTQ0QVx1NjAzQlx1NkIyMVx1NjU3MCAqL1xyXG4gICAgYWRUaW1lczogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdThGREVcdTdFRURcdTY3MkFcdTcwQjlcdTUxRkJcdTZCMjFcdTY1NzAgKi9cclxuICAgIGNvbnRpbnVvdXNBZFRpbWVzOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1N0VEMVx1NUI5QVx1NUZBRVx1NEZFMSAqL1xyXG4gICAgaXNCaW5kV3g6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZ2V0IHR0dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlckxldmVsO1xyXG4gICAgfVxyXG4gICAgc2V0IHR0dCh2KSB7XHJcbiAgICAgICAgdGhpcy5vcmRlckxldmVsID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLm5pY2tuYW1lID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJJbmZvKCk7XHJcbiIsICJleHBvcnQgdHlwZSBMYW5kT2JqID0gTmV0SW5pdFtcImxhbmRzXCJdWzBdO1xyXG5cclxuY2xhc3MgTGFuZFNlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgbGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBsaXN0IFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBpbml0KGxpc3Q6IExhbmRPYmpbXSkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExhbmQoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTU3NTdcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICAgICAqIEBwYXJhbSBpZCBcdTU3MUZcdTU3MzBpZFxyXG4gICAgICogQHJldHVybnMgXHU4RkQ0XHU1NkRFXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGdldExhbmQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QuZ2V0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkRGQlx1NTJBMFx1NjIxNlx1NjYyRlx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGQgXHU1NzFGXHU1NzMwXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIGFkZExhbmQoZDogTGFuZE9iaikge1xyXG4gICAgICAgIHRoaXMubGlzdC5zZXQoZC5pZCwgZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTdBN0FcdTU3MUZcdTU3MzBcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0LmNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkVcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMYW5kU2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUGV0QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBldERhdGFCYXNlIHtcclxuICAgIC8qKiBcdTVCQTBcdTcyNjlcdTU3RkFcdTc4NDBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGJhc2U6IFBldEJhc2U7XHJcbiAgICAvKiogXHU5NTAxXHU1QjlBICovXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogXHU1QkEwXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAqL1xyXG5jbGFzcyBQZXRTZXJ2aWNlIHtcclxuICAgIGxpc3Q6IFBldERhdGFCYXNlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBpbml0KHBldHM6IG51bWJlcltdKSB7XHJcbiAgICAgICAgVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBkLFxyXG4gICAgICAgICAgICAgICAgbG9jazogIXBldHMuaW5jbHVkZXMoZC5pZCksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU1QkEwXHU3MjY5XHU4OUUzXHU5NTAxXHU2NTcwXHU5MUNGXHJcbiAgICAgKi9cclxuICAgIGdldFVubG9ja0xlbigpIHtcclxuICAgICAgICBsZXQgbGVuID0gMDtcclxuICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWQubG9jaykgbGVuKys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxlbjtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBldFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBsYW50RGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogUGxhbnRCYXNlO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1OTUwMVx1NUI5QSAqL1xyXG4gICAgbG9jazogYm9vbGVhbjtcclxufVxyXG4vKipcclxuICogXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jbGFzcyBQbGFudFNlcnZpY2Uge1xyXG4gICAgbGlzdDogUGxhbnREYXRhQmFzZVtdID0gW107XHJcbiAgICAvKipcclxuICAgICAqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NjU3MFx1NjM2RVxyXG4gICAgICogQHBhcmFtIGxpc3QgXHU3OUNEXHU1QjUwaWRcdTUyMTdcdTg4NjhcclxuICAgICAqL1xyXG4gICAgaW5pdChsaXN0OiBudW1iZXJbXSkge1xyXG4gICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7IGJhc2U6IGQsIGxvY2s6ICFsaXN0LmluY2x1ZGVzKGQuaWQpIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4M0I3XHU1M0Q2XHU0RTAwXHU0RTJBXHU2OTBEXHU3MjY5XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gaWQgXHU2OTBEXHU3MjY5aWRcclxuICAgICAqIEByZXR1cm5zIFx1NjkwRFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBnZXRQbGFudChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHRoaXMubGlzdC5sZW5ndGggLSAxOyB4ID4gLTE7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFBsYW50U2VydmljZSgpO1xyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1x1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBXYXJlSG91c2VEYXRhIHtcclxuICAgIGJhc2U6IFBsYW50QmFzZTtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB0eXBlPzogbnVtYmVyO1xyXG59XHJcbi8qKlxyXG4gKiBcdTRFRDNcdTVFOTNcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIFdhcmVob3VzZVNlcnZpY2Uge1xyXG4gICAgbGlzdDogV2FyZUhvdXNlRGF0YVtdID0gW107XHJcblxyXG4gICAgaW5pdChcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICkge1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIVRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJcdTk1MTlcdThCRUZcdTc2ODRpZCBcIiArIGQuaWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoZC5pZCksXHJcbiAgICAgICAgICAgICAgICBjb3VudDogZC5hbW91bnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxQ0ZcdTVDMTFcdTcyNjlcdTU0QzFcdTY1NzBcdTkxQ0ZcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIGFtb3VudFxyXG4gICAgICovXHJcbiAgICByZWR1Y2VBbW91bnQoaWQ6IG51bWJlciwgYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFt4XS5jb3VudCAtPSBhbW91bnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmNvdW50IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTgzQjdcdTUzRDZcdTRFMDBcdTRFMkFcdTkwNTNcdTUxNzdcclxuICAgICAqL1xyXG4gICAgZ2V0T25lKGlkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEl0ZW0oaWQpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0W3hdLmJhc2UuaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2REZCXHU1MkEwXHU3MjY5XHU1NEMxXHJcbiAgICAgKi9cclxuICAgIGFkZChpZDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRJdGVtKGlkKTtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLmNvdW50ICs9IGFtb3VudDtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX09yZGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlx1OTUxOVx1OEJFRlx1NzY4NGlkIFwiICsgaWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgIGJhc2U6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChpZCksXHJcbiAgICAgICAgICAgIGNvdW50OiBhbW91bnQsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9PcmRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBXYXJlaG91c2VTZXJ2aWNlKCk7XHJcbiIsICIvKipcclxuICogXHU3N0VEXHU5NEZFXHU2M0E1XHU4QkY3XHU2QzQyXHU1MzRGXHU4QkFFXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBcGlIdHRwIHtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgKi9cclxuICAgIGxvZ2luID0gXCIvbG9naW5cIixcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTUgdG9rZW4gKi9cclxuICAgIGxvZ2luVG9rZW4gPSBcIi9sb2dpbi90b2tlblwiLFxyXG4gICAgLyoqIFx1OTg4Nlx1NTNENlx1OEJBMlx1NTM1NVx1NTk1Nlx1NTJCMSAqL1xyXG4gICAgb3JkZXJSZXdhcmQgPSBcIi9vcmRlci9yZXdhcmRcIixcclxuICAgIC8qKiBcdTk4ODZcdTUzRDZcdTdCN0VcdTUyMzBcdTU5NTZcdTUyQjEgKi9cclxuICAgIHNpZ25JblJld2FyZCA9IFwiL3NpZ25Jbi9yZXdhcmRcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTg5RTNcdTk1MDEgKi9cclxuICAgIGxhbmRVbmxvY2sgPSBcIi9sYW5kL3VubG9ja1wiLFxyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjRBRFx1NzlDRCAqL1xyXG4gICAgbGFuZFNvdyA9IFwiL2xhbmQvc293XCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU2NTM2XHU4M0I3ICovXHJcbiAgICBsYW5kR2F0aGVyID0gXCIvbGFuZC9nYXRoZXJcIixcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTcgKi9cclxuICAgIGxhbmRVcGdyYWRlID0gXCIvbGFuZC91cGdyYWRlXCIsXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU1MkEwXHU5MDFGICovXHJcbiAgICBsYW5kU3BlZWRVcCA9IFwiL2xhbmQvc3BlZWRVcFwiLFxyXG4gICAgLyoqIFx1NzlDRFx1NUI1MFx1ODlFM1x1OTUwMSAqL1xyXG4gICAgc2VlZHNVbmxvY2sgPSBcIi9zZWVkcy91bmxvY2tcIixcclxuICAgIC8qKiBcdTgzQjdcdTUzRDZcdTgwQ0NcdTUzMDVcdTUyMTdcdTg4Njg9PiBcdTY2ODJcdTY1RjZcdThGRDlcdTRFMkFcdTYzQTVcdTUzRTNcdTRFMERcdTk3MDBcdTg5ODFcdTc1MjggKi9cclxuICAgIHdhcmVob3VzZSA9IFwiL3dhcmVob3VzZVwiLFxyXG4gICAgLyoqIFx1ODBDQ1x1NTMwNVx1NTU0Nlx1NTRDMVx1NTFGQVx1NTUyRSAqL1xyXG4gICAgd2FyZWhvdXNlU2VsbCA9IFwiL3dhcmVob3VzZS9zZWxsXCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU4RDJEXHU0RTcwICovXHJcbiAgICBwZXRCdXkgPSBcIi9wZXQvYnV5XCIsXHJcbiAgICAvKiogXHU1QkEwXHU3MjY5XHU0RjY5XHU2MjM0ICovXHJcbiAgICBwZXRXZWFyID0gXCIvcGV0L3dlYXJcIixcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdThEMkRcdTRFNzAgKi9cclxuICAgIGZlZWRCdXkgPSBcIi9mZWVkL2J1eVwiLFxyXG4gICAgLyoqIFx1NEVGQlx1NTJBMVx1NTk1Nlx1NTJCMVx1OTg4Nlx1NTNENiAqL1xyXG4gICAgdGFza1Jld2FyZCA9IFwiL3Rhc2svcmV3YXJkXCIsXHJcbiAgICAvKiogXHU5MEJCXHU1QzQ1ICovXHJcbiAgICBuZWlnaGJvciA9IFwiL25laWdoYm9yXCIsXHJcbiAgICAvKiogXHU1MDc3XHU4M0RDICovXHJcbiAgICBsYW5kU3RlYWwgPSBcIi9sYW5kL3N0ZWFsXCIsXHJcbiAgICAvKiogXHU1MzU1XHU3MkVDXHU2N0U1XHU3NzBCXHU1RTdGXHU1NDRBICovXHJcbiAgICBhZCA9IFwiL2FkXCIsXHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU0RjUzXHU1MjlCXHU4RDJEXHU0RTcwICovXHJcbiAgICB2aXRhbGl0eUJ1eSA9IFwiL3ZpdGFsaXR5L2J1eVwiLFxyXG4gICAgLyoqIFx1NTZERVx1ODFFQVx1NURGMVx1NUJCNiAqL1xyXG4gICAgZ29Ib21lID0gXCIvZ29Ib21lXCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU1MjIwXHU5NjY0ICovXHJcbiAgICBmcmllbmREZWxldGUgPSBcIi9mcmllbmQvZGVsZXRlXCIsXHJcbiAgICAvKiogXHU5MDFBXHU4RkM3XHU1OTdEXHU1M0NCXHU3NTMzXHU4QkY3ICovXHJcbiAgICBmcmllbmRBbGxvdyA9IFwiL2ZyaWVuZC9hbGxvd1wiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1NzUzM1x1OEJGNyAqL1xyXG4gICAgZnJpZW5kQXBwbHkgPSBcIi9mcmllbmQvYXBwbHlcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTY0MUNcdTdEMjIgKi9cclxuICAgIGZyaWVuZFNlYXJjaCA9IFwiL2ZyaWVuZC9zZWFyY2hcIixcclxuICAgIC8qKiBcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZExpc3QgPSBcIi9mcmllbmQvbGlzdFwiLFxyXG4gICAgLyoqIFx1NTk3RFx1NTNDQlx1OTA4MFx1OEJGN1x1ODAwNVx1N0VEMVx1NUI5QSAqL1xyXG4gICAgZnJpZW5kSW52aXRlUGVvcGxlID0gXCIvZnJpZW5kL2ludml0ZS9wZW9wbGVcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggKi9cclxuICAgIGZyaWVuZEludml0ZUxpc3QgPSBcIi9mcmllbmQvaW52aXRlL2xpc3RcIixcclxuICAgIC8qKiBcdTkwODBcdThCRjdcdTc2ODRcdTU5N0RcdTUzQ0JcdTU5NTZcdTUyQjFcdUZGMENcdTk4ODZcdTUzRDYgKi9cclxuICAgIGZyaWVuZEludml0ZVJlY2VpdmUgPSBcIi9mcmllbmQvaW52aXRlL3JlY2VpdmVcIixcclxuICAgIC8qKiBcdThCQkZcdTk1RUVcdTU5N0RcdTUzQ0JcdTVCQjZcdTkxQ0MgKi9cclxuICAgIGZyaWVuZFZpc2l0ID0gXCIvZnJpZW5kL3Zpc2l0XCIsXHJcbiAgICAvKiogXHU1OTdEXHU1M0NCXHU1MjA2XHU0RUFCICovXHJcbiAgICBmcmllbmRTaGFyZSA9IFwiL2ZyaWVuZC9zaGFyZVwiLFxyXG4gICAgLyoqIFx1OTBBRVx1NEVGNlx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbWFpbExpc3QgPSBcIi9tYWlsL2xpc3RcIixcclxuICAgIC8qKiBcdTkwQUVcdTRFRjZcdTk2MDVcdThCRkIgKi9cclxuICAgIG1haWxSZWFkID0gXCIvbWFpbC9yZWFkXCIsXHJcbiAgICAvKiogXHU5MEFFXHU0RUY2XHU1MjIwXHU5NjY0ICovXHJcbiAgICBtYWlsRGVsZXRlID0gXCIvbWFpbC9kZWxldGVcIixcclxuICAgIC8qKiBcdTYzRDBcdTczQjAgKi9cclxuICAgIHdpdGhkcmF3ID0gXCIvd2l0aGRyYXdcIixcclxuICAgIC8qKiBcdTYzRDBcdTczQjBcdThCQjBcdTVGNTUqL1xyXG4gICAgd2l0aGRyYXdSZWNvcmQgPSBcIi93aXRoZHJhdy9yZWNvcmRcIixcclxuICAgIC8qKiBcdTVCQTJcdTYyMzdcdTdBRUZcdTcyNDhcdTY3MkMgKi9cclxuICAgIGNvbmZpZ0NsaWVudCA9IFwiL2NvbmZpZy9jbGllbnRcIixcclxuICAgIC8qKiBcdTVGMTVcdTVCRkNcdTY1NzBcdTYzNkUgKi9cclxuICAgIGd1aWRlID0gXCIvZ3VpZGVcIixcclxuICAgIC8qKiBcdTdFREZcdThCQTFcdTY3MkFcdTcwQjlcdTUxRkJcdTZCMjFcdTY1NzAgKi9cclxuICAgIGFkUmVjb3JkTm90Q2xpY2sgPSBcIi9hZC9yZWNvcmQvbm90L2NsaWNrXCIsXHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU0RkUxXHU2MDZGXHU3RUQxXHU1QjlBXHVGRjBDXHU5RUQ4XHU4QkE0XHU3RUQxXHU1QjlBXHU1RkFFXHU0RkUxICovXHJcbiAgICB1c2VyQmluZCA9IFwiL3VzZXIvYmluZFwiLFxyXG59XHJcbiIsICJpbXBvcnQgeyBSZWREb3RUeXBlIH0gZnJvbSBcInNyYy9jb21wb25lbnRzL1JlZERvdENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcIi4vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwiLi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NUZDM1x1OERGM1xyXG4gKi9cclxuY2xhc3MgSGVhcnRiZWF0Q29udHJvbCB7XHJcbiAgICAvKiogXHU1RkMzXHU4REYzXHU5NUY0XHU5Njk0ICovXHJcbiAgICBpbnRlcnZhbFRpbWUgPSA2MDtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVJZDtcclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZU1zZygpO1xyXG4gICAgICAgIC8vIH0sIDIwMDApO1xyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlVGltZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVGltZSgpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lSWQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZUlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lSWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNc2coKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XHJcbiAgICAgICAgfSwgdGhpcy5pbnRlcnZhbFRpbWUgKiAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU2MjQwXHU2NzA5XHU3RUEyXHU3MEI5ICovXHJcbiAgICBhc3luYyB1cGRhdGVNc2coKSB7XHJcbiAgICAgICAgLy9cdTkwQUVcdTRFRjZcclxuICAgICAgICBsZXQgZDogTWFpbFJldHVybkRhdGFbXSA9IGF3YWl0IEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm1haWxMaXN0LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBsZXQgaGFzUmVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghZFt4XS5yZWFkKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNSZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX3JlZF9kb3QsIFtSZWREb3RUeXBlLm1haWwsIGhhc1JlZF0pO1xyXG4gICAgICAgIGxldCBmcmllbmREYXRhOiBGcmllbmRMaXN0RGF0YSA9IGF3YWl0IEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZExpc3QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGhhc1JlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZnJpZW5kRGF0YS5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmcmllbmREYXRhLmxpc3RbeF0uc3RlYWwgfHwgZnJpZW5kRGF0YS5saXN0W3hdLmFwcGx5SW5nKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNSZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX3JlZF9kb3QsIFtSZWREb3RUeXBlLmZyaWVuZCwgaGFzUmVkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlcnJvcigpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lSWQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZUlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lSWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSGVhcnRiZWF0Q29udHJvbCgpO1xyXG4iLCAiaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgUGV0U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BldFNlcnZpY2VcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IEhlYXJ0YmVhdCBmcm9tIFwiLi9IZWFydGJlYXRcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCIuL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi9SZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTUzNEZcdThCQUVcdTY1NzBcdTYzNkVcdTU5MDRcdTc0MDZcclxuICovXHJcbmNsYXNzIEh0dHBEYXRhQ29udHJvbCB7XHJcbiAgICAvKiogXHU2NTcwXHU2MzZFXHU4RjZDXHU1M0QxICovXHJcbiAgICBmb3J3YXJkKGQ6IHtcclxuICAgICAgICBhcGk6IEFwaUh0dHA7XHJcbiAgICAgICAgZGF0YTogYW55O1xyXG4gICAgICAgIHJlc29sdmVFdmVudD86IEZ1bmN0aW9uO1xyXG4gICAgICAgIC8vIFRPRE8gXHU4RkQ5XHU0RTJBXHU1M0VGXHU4MEZEXHU2NzA5XHU1RjAyXHU2QjY1XHU5MUNEXHU1OTBEXHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU2MzkyXHU2N0U1XHU0RTAwXHU0RTBCXHJcbiAgICAgICAgZXJyb3I/OiBGdW5jdGlvbjtcclxuICAgIH0pIHtcclxuICAgICAgICBzd2l0Y2ggKGQuYXBpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sb2dpbjpcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxvZ2luVG9rZW46XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLmxhbmRTcGVlZFVwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVXBkYXRlKDEwMDIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5hZDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZEdhdGhlcjpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDAzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAuZmVlZEJ1eTpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA2KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFNvdzpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAud2FyZWhvdXNlU2VsbDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza1VwZGF0ZSgxMDA4KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFN0ZWFsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VySW5mbyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAuc2VlZHNVbmxvY2s6XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFwaUh0dHAubGFuZFNvdzpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kVW5sb2NrOlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnBldEJ1eTpcclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnZpdGFsaXR5QnV5OlxyXG5cclxuICAgICAgICAgICAgY2FzZSBBcGlIdHRwLnRhc2tSZXdhcmQ6XHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5sYW5kVXBncmFkZTpcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQXBpSHR0cC5vcmRlclJld2FyZDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckluZm8oZC5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZC5yZXNvbHZlRXZlbnQpIGQucmVzb2x2ZUV2ZW50KGQuZGF0YSk7XHJcblxyXG4gICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoZC5hcGksIGQuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IoZXJyb3JDb2RlOiBudW1iZXIsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgIC8vIHRleHQ6IGBlcnJvckNvZGUgJHtlcnJvckNvZGV9ICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9YCxcclxuICAgICAgICAgICAgdGV4dDogYCR7ZGF0YT8ubWVzc2FnZX0gXFxuICR7ZGF0YT8uZXJyb3IgfHwgXCJcIn1gLFxyXG4gICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzY3Qlx1NUY1NVxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9naW4oZDogTmV0SW5pdCkge1xyXG4gICAgICAgIGlmICghZCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NzY3Qlx1NUY1NVx1OTUxOVx1OEJFRixcdThCRjdcdTkxQ0RcdThCRDVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgUGxhbnRTZXJ2aWNlLmluaXQoZC5zZWVkcyk7XHJcbiAgICAgICAgV2FyZWhvdXNlU2VydmljZS5pbml0KGQud2FyZWhvdXNlKTtcclxuICAgICAgICBVc2VySW5mby5rZXkgPSBkLnVzZXJJbmZvLmtleTtcclxuICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC51c2VySW5mby5kaWFtb25kO1xyXG4gICAgICAgIFVzZXJJbmZvLmdvbGQgPSBkLnVzZXJJbmZvLmdvbGQ7XHJcbiAgICAgICAgVXNlckluZm8ubmlja25hbWUgPSBkLnVzZXJJbmZvLm5pY2tuYW1lO1xyXG4gICAgICAgIFVzZXJJbmZvLmF2YXRhciA9IGQudXNlckluZm8uYXZhdGFyO1xyXG4gICAgICAgIFVzZXJJbmZvLm9yZGVyTGV2ZWwgPSBkLm9yZGVySWQgfHwgMDtcclxuICAgICAgICBVc2VySW5mby53YXJlUGV0SWQgPSBkLndlYXJQZXQ/LmlkO1xyXG4gICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gZC53ZWFyUGV0Py52aXRhbGl0eSB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IGQud2VhclBldD8uZGlnZXN0Q291bnREb3duIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPSBkLmFkdmVydGlzZVRpbWVzIHx8IDA7XHJcbiAgICAgICAgVXNlckluZm8uc2lnbkluRGF5cyA9IGQuc2lnbkluRGF5cyB8fCAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnNpZ25JbklkID0gZC5zaWduSW5JZDtcclxuICAgICAgICBVc2VySW5mby5zcGVlZFVwVGltZXMgPSBkLnNwZWVkVXBUaW1lcztcclxuICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudXNlckluZm8udml0YWxpdHk7XHJcbiAgICAgICAgVXNlckluZm8uaW52aXRlUGVvcGxlID0gZC51c2VySW5mby5pbnZpdGVQZW9wbGU7XHJcbiAgICAgICAgVXNlckluZm8uaXNGaXJzdFRpbWUgPSBkLnVzZXJJbmZvLmlzRmlyc3RUaW1lO1xyXG4gICAgICAgIFVzZXJJbmZvLmd1aWRlRGF0YSA9IGQudXNlckluZm8uZ3VpZGVEYXRhIHx8IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBkLndpdGhkcmF3O1xyXG4gICAgICAgIFVzZXJJbmZvLmRheXMgPSBkLmRheXMgKyAxO1xyXG4gICAgICAgIFVzZXJJbmZvLmFkVGltZXMgPSBkLnVzZXJJbmZvLmFkVGltZXM7XHJcbiAgICAgICAgVXNlckluZm8uY29udGludW91c0FkVGltZXMgPSBkLnVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzO1xyXG4gICAgICAgIFVzZXJJbmZvLmlzQmluZFd4ID0gZC51c2VySW5mby5pc0JpbmRXeDtcclxuICAgICAgICBQZXRTZXJ2aWNlLmluaXQoZC5wZXRzKTtcclxuICAgICAgICBUYXNrU2VydmljZS5pbml0KGQudGFza3MpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcImlzTG9naW5cIiwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKGQudG9rZW4pIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInRva2VuXCIsIGQudG9rZW4pO1xyXG4gICAgICAgIExhbmRTZXJ2aWNlLmluaXQoZC5sYW5kcyk7XHJcblxyXG4gICAgICAgIENvcmUuYXVkaW8uc291bmRNdXRlZCA9IExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnNvdW5kO1xyXG4gICAgICAgIENvcmUuYXVkaW8ubXVzaWNNdXRlZCA9IExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLm11c2ljO1xyXG4gICAgICAgIEhlYXJ0YmVhdC5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW5PdXQoKSB7XHJcbiAgICAgICAgSGVhcnRiZWF0LmRlc3Ryb3koKTtcclxuICAgICAgICBQbGFudFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgUGV0U2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIExhbmRTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgVGFza1NlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJpc0xvZ2luXCIsIGZhbHNlKTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ0b2tlblwiLCBudWxsKTtcclxuICAgICAgICBVc2VySW5mby5rZXkgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLmRpYW1vbmQgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmdvbGQgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLm5pY2tuYW1lID0gXCJcIjtcclxuICAgICAgICBVc2VySW5mby5hdmF0YXIgPSBcIlwiO1xyXG4gICAgICAgIFVzZXJJbmZvLm9yZGVyTGV2ZWwgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLndhcmVQZXRJZCA9IG51bGw7XHJcbiAgICAgICAgVXNlckluZm8ucGV0Vml0YWxpdHkgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnNpZ25JbkRheXMgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnNpZ25JbklkID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby5zcGVlZFVwVGltZXMgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gMDtcclxuICAgICAgICBVc2VySW5mby5pbnZpdGVQZW9wbGUgPSBudWxsO1xyXG4gICAgICAgIFVzZXJJbmZvLmlzRmlyc3RUaW1lID0gbnVsbDtcclxuICAgICAgICBVc2VySW5mby53aXRoZHJhdyA9IFtdO1xyXG4gICAgICAgIFVzZXJJbmZvLmd1aWRlRGF0YSA9IFwiXCI7XHJcbiAgICAgICAgVXNlckluZm8uZGF5cyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uYWRUaW1lcyA9IDA7XHJcbiAgICAgICAgVXNlckluZm8uY29udGludW91c0FkVGltZXMgPSAwO1xyXG4gICAgICAgIFVzZXJJbmZvLmlzQmluZFd4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OUVEOFx1OEJBNFx1NzUyOFx1Njc2NVx1NjZGNFx1NjVCMFx1NzUyOFx1NjIzN1x1OTFEMVx1NUUwMVx1N0I0OVxyXG4gICAgICogQHBhcmFtIGRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVVc2VySW5mbyhkOiBSZXR1cm5Vc2VySW5mbykge1xyXG4gICAgICAgIFVzZXJJbmZvLmdvbGQgPSBkLmdvbGQ7XHJcbiAgICAgICAgVXNlckluZm8uZGlhbW9uZCA9IGQuZGlhbW9uZDtcclxuICAgICAgICBVc2VySW5mby5hZHZlcnRpc2VUaW1lcyA9IGQuYWR2ZXJ0aXNlVGltZXMgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NEVGQlx1NTJBMVx1OEZEQlx1NUVBNlxyXG4gICAgICogQHBhcmFtIGlkIFx1NEVGQlx1NTJBMWlkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGFza1VwZGF0ZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEh0dHBEYXRhQ29udHJvbCgpO1xyXG4iLCAiaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwic3JjL2NvcmUvSW5zdGFuY2VcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCIuL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCIuL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cERhdGFDb250cm9sIGZyb20gXCIuL0h0dHBEYXRhQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcIi4vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL1Jlc1wiO1xyXG5cclxuaW50ZXJmYWNlIEh0dHBTZW5kRGF0YSB7XHJcbiAgICBhcGk6IEFwaUh0dHA7XHJcbiAgICBkYXRhPzogYW55O1xyXG4gICAgbWV0aG9kPzogc3RyaW5nO1xyXG4gICAgcmVzcG9uc2VUeXBlPzogc3RyaW5nO1xyXG4gICAgaGVhZGVycz86IGFueVtdIHwgbnVsbDtcclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTk1MTlcdThCRUZcdTU2REVcdThDMDMgKi9cclxuICAgIGVycm9yPzogeyAoY29kZTogbnVtYmVyLCBkYXRhOiBhbnkpOiB2b2lkIH07XHJcbiAgICBiYXNlVXJsPzogc3RyaW5nO1xyXG4gICAgLyoqIFx1NTNEMVx1OEQ3N1x1OEJGN1x1NkM0Mlx1NTI0RCAqL1xyXG4gICAgYmVmb3JlPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTc3RURcdTk0RkVcdTYzQTVcdTYzQTdcdTUyMzZcdTU2NjhcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBDb250cm9sIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IEh0dHBDb250cm9sO1xyXG5cclxuICAgIGJhc2VVcmw6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRGF0YTogeyB4aHI6IFhNTEh0dHBSZXF1ZXN0OyBkYXRhOiBIdHRwU2VuZERhdGEgfVtdID0gW107XHJcblxyXG4gICAgLyoqIFx1NEU4Qlx1NEVGNlx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBldmVudE1hcDogTWFwPHN0cmluZywgWE1MSHR0cFJlcXVlc3Q+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGluaXQodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHJlc29sdmVcclxuICAgICAqIEBwYXJhbSByZWplY3RcclxuICAgICAqIEBwYXJhbSBhZCBcdTY2MkZcdTU0MjZcdTY2MkZcdTVFN0ZcdTU0NEFcdTc2ODRcdTY1NzBcdTYzNkVcdTUzNEZcdThCQUVcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlWGhyKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uLCBhZDogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoeG1saHR0cC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeG1saHR0cC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlSGFuZGxlcihkYXRhLCByZXNvbHZlLCByZWplY3QsIHhtbGh0dHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyT25lSW5FdmVudE1hcCh4bWxodHRwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZVhockV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeG1saHR0cC5yZXNwb25zZVRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7eG1saHR0cC5yZXNwb25zZVRleHR9IFx1OEJGN1x1OTFDRFx1OEJENWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLmNvZGUgPSA5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIoZCwgcmVzb2x2ZSwgcmVqZWN0LCB4bWxodHRwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJPbmVJbkV2ZW50TWFwKHhtbGh0dHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgheG1saHR0cC5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogNDA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6IFwiXHU2NzBEXHU1MkExXHU1NjY4XHU2NzJBXHU1NENEXHU1RTk0XHVGRjBDXHU4QkY3XHU5MUNEXHU4QkQ1XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1saHR0cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJPbmVJbkV2ZW50TWFwKHhtbGh0dHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZVhockV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHhtbGh0dHA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMjBcdTk2NjRcdTk2MUZcdTUyMTdcdTRFOEJcdTRFRjZcclxuICAgICAqIEBwYXJhbSB4bWxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjbGVhck9uZUluRXZlbnRNYXAoeG1sOiBYTUxIdHRwUmVxdWVzdCkge1xyXG4gICAgICAgIC8vIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICB0aGlzLmV2ZW50TWFwLmZvckVhY2goKGUsIHYpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUgPT0geG1sKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFwLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBcdTUzNEZcdThCQUVcdTk2MUZcdTUyMTcgKi9cclxuICAgIHByaXZhdGUgeGhyTGlzdDogeyB4aHI6IFhNTEh0dHBSZXF1ZXN0OyBkYXRhOiBzdHJpbmc7IHNlbmREYXRhOiBIdHRwU2VuZERhdGEgfVtdID0gW107XHJcblxyXG4gICAgYXN5bmMgc2VuZChkYXRhOiBIdHRwU2VuZERhdGEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGlmICghZGF0YS5tZXRob2QpIGRhdGEubWV0aG9kID0gXCJwb3N0XCI7XHJcbiAgICAgICAgaWYgKCFkYXRhLnJlc3BvbnNlVHlwZSkgZGF0YS5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcclxuICAgICAgICBpZiAoIWRhdGEuYmFzZVVybCkgZGF0YS5iYXNlVXJsID0gdGhpcy5iYXNlVXJsO1xyXG5cclxuICAgICAgICBsZXQgdXJpID0gZGF0YS5iYXNlVXJsICsgZGF0YS5hcGk7XHJcblxyXG4gICAgICAgIGxldCBzZW5kRGF0YTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEuZGF0YSkuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VuZERhdGEucHVzaChgJHtkfT0ke2RhdGEuZGF0YVtkXX1gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNlbmREYXRhU3RyaW5nID0gc2VuZERhdGEuam9pbihcIiZcIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50TWFwLmdldCh1cmkgKyBzZW5kRGF0YVN0cmluZykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhPy50eXBlID09IENvbmZpZ0dhbWUuQXBpVHlwZUFEKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkRGF0YSA9IGF3YWl0IEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGFkRGF0YT8uY29kZSkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgJHthZERhdGEuZGF0YVtcIm1lc3NhZ2VcIl19WyR7YWREYXRhLmNvZGV9XWAsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5hZFRpbWVzKys7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLmRheXMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkRGF0YT8uZGF0YVtcImhhc0NsaWNrZWRcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uY29udGludW91c0FkVGltZXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5hZFJlY29yZE5vdENsaWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0aW1lczogVXNlckluZm8uY29udGludW91c0FkVGltZXMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHhociA9IHRoaXMuY3JlYXRlWGhyKHJlc29sdmUsIHJlamVjdCwgYWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ldmVudE1hcC5zZXQodXJpICsgc2VuZERhdGFTdHJpbmcsIHhocik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlbmREYXRhLnB1c2goeyB4aHI6IHhociwgZGF0YTogZGF0YSB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5iZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYmVmb3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghZGF0YS5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmhlYWRlcnMgPSBbXCJBdXRob3JpemF0aW9uXCIsIGBCZWFyZXIgJHtMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbn1gXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFkYXRhLmFwaSkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkhpbnRWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFybTogeyB0ZXh0OiBgaHR0cCBcdTU3MzBcdTU3NDBcdTRFMERcdTgwRkRcdTRFM0FcdTdBN0FgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmksIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgYEJlYXJlciAke0xvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnRva2VufWApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy54aHJMaXN0LnB1c2goeyB4aHI6IHhociwgZGF0YTogc2VuZERhdGFTdHJpbmcsIHNlbmREYXRhOiBkYXRhIH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy54aHJMaXN0Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlWGhyRXZlbnQodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBxdWV1ZVhockV2ZW50KGZpcnN0OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoIWZpcnN0KSB0aGlzLnhockxpc3Quc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgIGlmICh0aGlzLnhockxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYCVjID09PiBzZW5kICVjJHt0aGlzLnhockxpc3RbMF0uc2VuZERhdGEuYXBpfSAlYyR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHJMaXN0WzBdLnNlbmREYXRhLmRhdGFcclxuICAgICAgICAgICAgICAgICl9YCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojODJjY2RkO2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgYGNvbG9yOiNlYjRkNGI7Zm9udC13ZWlnaHQ6NzAwO2AsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6I2Y4YzI5MTtmb250LXdlaWdodDo3MDA7YFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy54aHJMaXN0WzBdLnhoci5zZW5kKHRoaXMueGhyTGlzdFswXS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wbGV0ZUhhbmRsZXIoZSwgcmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24sIHhocikge1xyXG4gICAgICAgIC8vIFRPRE8gXHU0RTM0XHU2NUY2XHU1OTA0XHU3NDA2XHU2NUI5XHU2Q0Q1XHVGRjBDXHU4RkQ5XHU5MUNDXHU3Njg0XHU5NjFGXHU1MjE3IFx1NkNBMVx1NjcwOVx1NTkwNFx1NzQwNlx1NTk3RFx1RkYwQ1x1NkQ4OFx1NjA2Rlx1NEY1M1x1NTZERVx1Njc2NVx1RkYwQ1x1NEYxQVx1ODk4Nlx1NzZENlx1NEU0Qlx1NTI0RFx1NzY4NFx1NTM0Rlx1OEJBRVx1RkYwQ1xyXG4gICAgICAgIGxldCBjdXJEYXRhOiBIdHRwU2VuZERhdGE7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNlbmREYXRhLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbmREYXRhW3hdLnhociA9PSB4aHIpIHtcclxuICAgICAgICAgICAgICAgIGN1ckRhdGEgPSB0aGlzLnNlbmREYXRhW3hdLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmREYXRhLnNsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUuY29kZSkge1xyXG4gICAgICAgICAgICByZWplY3QoZS5jb2RlKTtcclxuICAgICAgICAgICAgaWYgKGN1ckRhdGE/LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJEYXRhLmVycm9yKGUuY29kZSwgZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBIdHRwRGF0YUNvbnRyb2wuZXJyb3IoZS5jb2RlLCBlLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYXBpID0gY3VyRGF0YS5hcGk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgYCVjIDw9PSBiYWNrICVjJHthcGl9IGAsXHJcbiAgICAgICAgICAgICAgICBgY29sb3I6I2I4ZTk5NDtmb250LXdlaWdodDo3MDA7YCxcclxuICAgICAgICAgICAgICAgIGBjb2xvcjojNzhlMDhmO2ZvbnQtd2VpZ2h0OjcwMDtgLFxyXG4gICAgICAgICAgICAgICAgZS5kYXRhXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIEh0dHBEYXRhQ29udHJvbC5mb3J3YXJkKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IGFwaSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUV2ZW50OiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHByb2Nlc3NIYW5kbGVyKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTGFuZFNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy8gIEFkZExhbmRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRMYW5kVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvc3RJY29uLCB0aXBzOlwiXHU0RUY3XHU2ODNDXHU1NkZFXHU2ODA3XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjb3N0SWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29zdEZvbnQsIHRpcHM6XCJcdTRFRjdcdTY4M0NGb250XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjb3N0Rm9udDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRCdG4sIHRpcHM6XCJcdTVFN0ZcdTU0NEFcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgaWQ6IG51bWJlcjsgY2FsbDogRnVuY3Rpb24gfTtcclxuXHJcbiAgICBwcml2YXRlIGxhbmREYXRhOiBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XHJcblxyXG4gICAgICAgIHRoaXMubGFuZERhdGEgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwidW5sb2NrX2xhbmRfY29zdFwiKS52YWx1ZVtcclxuICAgICAgICAgICAgTGFuZFNlcnZpY2UubGlzdC5zaXplXHJcbiAgICAgICAgXSBhcyBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcbiAgICAgICAgdGhpcy5jb3N0SWNvbi5za2luID0gdGhpcy5sYW5kRGF0YS5vYmouaWNvbjtcclxuICAgICAgICB0aGlzLmNvc3RGb250LnZhbHVlID0gdGhpcy5sYW5kRGF0YS5jb3VudCArIFwiXCI7XHJcblxyXG4gICAgICAgIHRoaXMuYWRCdG4uZGlzYWJsZWQgPSAhVXNlckluZm8uYWR2ZXJ0aXNlVGltZXM7XHJcbiAgICAgICAgdGhpcy5hZEJ0bi5hY3RpdmUgPSBCb29sZWFuKFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzKTtcclxuXHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmFkVGltZXMgPiAxMDAgfHwgVXNlckluZm8uY29udGludW91c0FkVGltZXMgPiAyMCkge1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMzAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAyIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAzIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiaGFsZl9zY3JlZW5fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiYm90dG9tX2FkdmVydGlzZW1lbnRcIiB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkQXdha2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmFkVGltZXMgPiAxMDAgfHwgVXNlckluZm8uY29udGludW91c0FkVGltZXMgPiAyMCkge1xyXG4gICAgICAgICAgICAodGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShcImNlbnRlclwiKSBhcyBMYXlhLkltYWdlKS5jZW50ZXJZID0gLTMxMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvc3RfZ29sZFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kRGF0YS5jb3VudCA+IFVzZXJJbmZvLmdvbGRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU5MUQxXHU1RTAxXHU0RTBEXHU4REIzXHVGRjBDXHU1M0JCXHU0RUQzXHU1RTkzXHU1MUZBXHU1NTJFXHU1M0VGXHU0RUU1XHU4M0I3XHU1Rjk3XHU5MUQxXHU1RTAxXHVGRjBDXHU1MDc3XHU4M0RDXHU4M0I3XHU1Rjk3XHU3Njg0XHU4NTJDXHU4M0RDXHU0RTVGXHU1M0VGXHU0RUU1XHU1MUZBXHU1NTJFXHU4M0I3XHU1Rjk3XHU5MUQxXHU1RTAxXHU1NEU2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmREYXRhLm9iai5pZCA9PSBDb25maWdHYW1lLmRpYW1vbmRJZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZERhdGEuY291bnQgPiBVc2VySW5mby5kaWFtb25kXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTRCQlx1NzdGM1x1NEUwRFx1OERCM1wiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFVubG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWRkTGFuZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFVubG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiB0aGlzLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVBRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkOiB7IGFkUmV3YXJkOiBSZXR1cm5Vc2VySW5mb1tcImFkUmV3YXJkXCJdIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGE/LmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkFkZExhbmRWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuYWRSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmNsb3NlQWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5cclxuLy8gIEJ1eVZpdGFsaXR5VmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV5Vml0YWxpdHlWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMYWJlbCwgdGlwczpcIlx1NEVGN1x1NjgzQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VMYWJlbDogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VJY29uLCB0aXBzOlwiXHU0RUY3XHU2ODNDaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpY2VJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZEJ0biwgdGlwczpcIlx1NUU3Rlx1NTQ0QVx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWRCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgZGF0YTogeyBjYWxsOiBGdW5jdGlvbiB9O1xyXG4gICAgcHJpdmF0ZSBjb3N0R29sZENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgb25PcGVuZWQoZTogeyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICBsZXQgY29zdEdvbGRDb3VudCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ2aXRhbGl0eUJ1eUNvc3RHb2xkXCIpLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICB0aGlzLmNvc3RHb2xkQ291bnQgPSBjb3N0R29sZENvdW50O1xyXG4gICAgICAgIHRoaXMucHJpY2VMYWJlbC50ZXh0ID0gYFx1NEVGN1x1NjgzQ1x1RkYxQSR7Y29zdEdvbGRDb3VudH1gO1xyXG5cclxuICAgICAgICB0aGlzLmFkQnRuLmRpc2FibGVkID0gIVVzZXJJbmZvLmFkdmVydGlzZVRpbWVzO1xyXG4gICAgICAgIHRoaXMuYWRCdG4uYWN0aXZlID0gQm9vbGVhbihVc2VySW5mby5hZHZlcnRpc2VUaW1lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5CdXlWaXRhbGl0eVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJidXlBZEJ0blwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYnV5QnRuXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoVXNlckluZm8udml0YWxpdHkgPj0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcInZpdGFsaXR5TGltaXRcIikudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NEY1M1x1NTI5Qlx1NURGMlx1NkVFMVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PSBcImJ1eUJ0blwiICYmIFVzZXJJbmZvLmdvbGQgPCB0aGlzLmNvc3RHb2xkQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1OTFEMVx1NUUwMVx1NEUwRFx1OERCM1x1RkYwQ1x1NTNCQlx1NEVEM1x1NUU5M1x1NTFGQVx1NTUyRVx1NTNFRlx1NEVFNVx1ODNCN1x1NUY5N1x1OTFEMVx1NUUwMVx1RkYwQ1x1NTA3N1x1ODNEQ1x1ODNCN1x1NUY5N1x1NzY4NFx1ODUyQ1x1ODNEQ1x1NEU1Rlx1NTNFRlx1NEVFNVx1NTFGQVx1NTUyRVx1ODNCN1x1NUY5N1x1OTFEMVx1NUUwMVx1NTRFNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnZpdGFsaXR5QnV5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUgPT0gXCJidXlCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBDb25maWdHYW1lLkFwaVR5cGVBRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkOiB7IGdvbGQ6IDA7IGRpYW1vbmQ6IDA7IGFkdmVydGlzZVRpbWVzOiAwOyB2aXRhbGl0eTogMCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gZC52aXRhbGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gXCJidXlCdG5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJwaHlzaWNhbHN0cmVuZ3RoXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkJ1eVZpdGFsaXR5Vmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vLyAgRmllbGRMZXZlbFVwVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRMZXZlbFVwVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlTGFiZWwsIHRpcHM6XCJcdTRFRjdcdTY4M0NcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlTGFiZWw6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaWNlSWNvbiwgdGlwczpcIlx1NEVGN1x1NjgzQ2ljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlSWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bHYsIHRpcHM6XCJcdTdCNDlcdTdFQTdcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGx2OiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpyZXdhcmQsIHRpcHM6XCJcdTU5NTZcdTUyQjFcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHJld2FyZDogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJvYmFiaWxpdHksIHRpcHM6XCJcdTY5ODJcdTczODdcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByb2JhYmlsaXR5OiBMYXlhLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6YWRCdG4sIHRpcHM6XCJcdTVFN0ZcdTU0NEFcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IHsgb2JqOiBMYW5kT2JqOyBjYWxsOiBGdW5jdGlvbiB9O1xyXG4gICAgcHJpdmF0ZSBjb3N0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uT3BlbmVkKGU6IHsgb2JqOiBMYW5kT2JqOyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZTtcclxuICAgICAgICBsZXQgbmV4dExhbmQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KGUub2JqLmxldmVsICsgMSk7XHJcbiAgICAgICAgdGhpcy5wcmljZUxhYmVsLnRleHQgPSBgXHU0RUY3XHU2ODNDXHVGRjFBJHtuZXh0TGFuZC5jb3N0LmNvdW50fWA7XHJcbiAgICAgICAgdGhpcy5wcmljZUljb24uc2tpbiA9IG5leHRMYW5kLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgdGhpcy5jb3N0ID0gbmV4dExhbmQuY29zdC5jb3VudDtcclxuXHJcbiAgICAgICAgdGhpcy5sdi50ZXh0ID0gYCR7ZS5vYmoubGV2ZWwgKyAxfVx1N0VBN2A7XHJcbiAgICAgICAgdGhpcy5yZXdhcmQudGV4dCA9IGArJHtOdW1iZXIoKG5leHRMYW5kLmdhaW4gKiAxMDApLnRvRml4ZWQoMikpfSVgO1xyXG4gICAgICAgIHRoaXMucHJvYmFiaWxpdHkudGV4dCA9IGArJHtOdW1iZXIoKG5leHRMYW5kLnByb2JhYmlsaXR5ICogMTAwKS50b0ZpeGVkKDIpKX0lYDtcclxuXHJcbiAgICAgICAgdGhpcy5hZEJ0bi5kaXNhYmxlZCA9ICFVc2VySW5mby5hZHZlcnRpc2VUaW1lcztcclxuICAgICAgICB0aGlzLmFkQnRuLmFjdGl2ZSA9IEJvb2xlYW4oVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMpO1xyXG5cclxuICAgICAgICBpZiAoVXNlckluZm8uYWRUaW1lcyA+IDEwMCB8fCBVc2VySW5mby5jb250aW51b3VzQWRUaW1lcyA+IDIwKSB7XHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSgzMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBhZFR5cGU6IDIgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBhZFR5cGU6IDMgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJoYWxmX3NjcmVlbl9hZHZlcnRpc2VtZW50XCIgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJib3R0b21fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoVXNlckluZm8uYWRUaW1lcyA+IDEwMCB8fCBVc2VySW5mby5jb250aW51b3VzQWRUaW1lcyA+IDIwKSB7XHJcbiAgICAgICAgICAgICh0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lKFwiY2VudGVyXCIpIGFzIExheWEuSW1hZ2UpLmNlbnRlclkgPSAtMzEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cGdyYWRlQnRuXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1cGdyYWRlQWRCdG5cIjpcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwidXBncmFkZUJ0blwiICYmIHRoaXMuY29zdCA+IFVzZXJJbmZvLmdvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1OTFEMVx1NUUwMVx1NEUwRFx1OERCM1x1RkYwQ1x1NTNCQlx1NEVEM1x1NUU5M1x1NTFGQVx1NTUyRVx1NTNFRlx1NEVFNVx1ODNCN1x1NUY5N1x1OTFEMVx1NUUwMVx1RkYwQ1x1NTA3N1x1ODNEQ1x1ODNCN1x1NUY5N1x1NzY4NFx1ODUyQ1x1ODNEQ1x1NEU1Rlx1NTNFRlx1NEVFNVx1NTFGQVx1NTUyRVx1ODNCN1x1NUY5N1x1OTFEMVx1NUUwMVx1NTRFNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRVcGdyYWRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IHRoaXMuZGF0YS5vYmouaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5hbWUgPT0gXCJ1cGdyYWRlQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBhZFJld2FyZDogUmV0dXJuVXNlckluZm9bXCJhZFJld2FyZFwiXSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwidXBncmFkZUFkQnRuXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuYWRSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiTGFuZHVwZ3JhZGluZ1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmNsb3NlSW1hZ2UsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc0Rlc2NWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBhbmVsTm9kZSwgdGlwczpcIlx1NkVEQVx1NTJBOFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBwYW5lbE5vZGU6IExheWEuUGFuZWw7XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsOiBGdW5jdGlvbjtcclxuXHJcbiAgICBvbk9wZW5lZChlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGwgPSBlPy5jYWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLnBhbmVsTm9kZS52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbnZpdGVfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkZyaWVuZHNEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzVmlldyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCB9IGZyb20gXCIuL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcIi4vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCIuL05ldE1hcHNcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTVGQUVcdTRGRTFcdTdFRDFcdTVCOUFcclxuICovXHJcbmNsYXNzIFd4QmluZENvbnRyb2wge1xyXG4gICAgZ2V0IGlzQmluZFd4KCkge1xyXG4gICAgICAgIGlmICghVXNlckluZm8uaXNCaW5kV3gpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU2M0QwXHU3M0IwXHU5NzAwXHU4OTgxXHU3RUQxXHU1QjlBXHU1RkFFXHU0RkUxXHU4RDI2XHU1M0Y3XCIsXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kV3goKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxDYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBVc2VySW5mby5pc0JpbmRXeDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VEMVx1NUI5QVx1NUZBRVx1NEZFMVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGJpbmRXeCgpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAud3hMb2dpbixcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHU4M0I3XHU1M0Q2XHU1RkFFXHU0RkUxb3BlbmlkXHU1OTMxXHU4RDI1WyR7ZGF0YS5jb2RlfV1cdUZGMENcdThCRjdcdTkxQ0RcdThCRDVgLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kV3goKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAudXNlckJpbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pZDogZGF0YS5kYXRhW1wib3BlbmlkXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBkYXRhLmRhdGFbXCJpY29udXJsXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IGRhdGEuZGF0YVtcIm5hbWVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmlzQmluZFd4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YVtcIm5hbWVcIl0pIFVzZXJJbmZvLm5pY2tuYW1lID0gZGF0YS5kYXRhW1wibmFtZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YVtcImljb251cmxcIl0pIFVzZXJJbmZvLmF2YXRhciA9IGRhdGEuZGF0YVtcImljb251cmxcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHU3RUQxXHU1QjlBXHU2MjEwXHU1MjlGYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHU3RUQxXHU1QjlBXHU1OTMxXHU4RDI1XHVGRjBDXHU2NjJGXHU1NDI2XHU5MUNEXHU4QkQ1XHVGRjFGYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmRXeCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbENhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFd4QmluZENvbnRyb2woKTtcclxuIiwgImltcG9ydCBCaW5kV3ggZnJvbSBcInNyYy9jb21tb24vQmluZFd4XCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCB7IFJld2FyZEN1cnJlbmN5QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBUYXNrU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1Rhc2tTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNSZXdhcmRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmllbmRzUmV3YXJkVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aW52aXRlQm94LCB0aXBzOlwiXHU2NTc0XHU2NTcwXHU3QzdCXHU1NzhCXHU3OTNBXHU0RjhCXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpbnZpdGVCb3g6IExheWEuQm94O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmludml0ZUlucHV0LCB0aXBzOlwiXHU4RjkzXHU1MTY1XHU5MDgwXHU4QkY3XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpbnZpdGVJbnB1dDogTGF5YS5UZXh0SW5wdXQ7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJpY2VMaXN0LCB0aXBzOlwiXHU4RjkzXHU1MTY1XHU5MDgwXHU4QkY3XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcmljZUxpc3Q6IExheWEuTGlzdDtcclxuXHJcbiAgICBwcml2YXRlIGludml0ZUxpc3Q6IEludml0ZURhdGFbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgcmV3YXJkVmFsdWU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHByb3BvcnRpb246IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBwcml2YXRlIGNhbGw6IEZ1bmN0aW9uO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLnByaWNlTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QuYXJyYXkgPSBuZXcgQXJyYXkoNik7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW5lZChkYXRhOiB7IGxpc3Q6IFtdOyBjYWxsOiBGdW5jdGlvbiB9KSB7XHJcbiAgICAgICAgdGhpcy5pbnZpdGVMaXN0ID0gZGF0YS5saXN0IHx8IFtdO1xyXG4gICAgICAgIHRoaXMuY2FsbCA9IGRhdGEuY2FsbDtcclxuICAgICAgICBpZiAoVXNlckluZm8uaW52aXRlUGVvcGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52aXRlQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pbnZpdGVCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJld2FyZFZhbHVlID0gKFxyXG4gICAgICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiSW52aXRhdGlvbl9yZXdhcmRzXCIpLnZhbHVlIGFzIFJld2FyZEN1cnJlbmN5QmFzZVxyXG4gICAgICAgICkuY291bnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpdGhkcmF3YWwgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwid2l0aGRyYXdhbFwiKS52YWx1ZSBhcyBzdHJpbmdbXTtcclxuICAgICAgICB0aGlzLnByb3BvcnRpb24gPSBOdW1iZXIod2l0aGRyYXdhbFsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzUmV3YXJkVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImludml0ZV9idG5cIjpcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAud3hTaGFyZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkIHx8IGQ/LmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogZC5kYXRhW1wibWVzc2FnZVwiXSwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogZC5kYXRhW1wibWVzc2FnZVwiXSwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kU2hhcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwic2hhcmVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN1Ym1pdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gKGUudGFyZ2V0IGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpdGhkcmF3KGkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU3M0IwXHJcbiAgICAgKiBAcGFyYW0gaVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB3aXRoZHJhdyhpOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuICAgICAgICBpZiAoIUJpbmRXeC5pc0JpbmRXeCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRJbnZpdGVSZWNlaXZlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBpbmRleDogaSB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2M0QwXHU3M0IwXHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZpdGVMaXN0W2ldLnJlY2VpdmVkUmV3YXJkID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9mcmllbmRfc2hhcmVfZ3VpZGUsIFt0aGlzLmludml0ZUxpc3RdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckl0ZW0oY2VsbDogTGF5YS5JbWFnZSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTdCMkMke2kgKyAxfVx1NEY0RGA7XHJcbiAgICAgICAgY29uc3QgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKSBhcyBMYXlhLkltYWdlO1xyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInByaWNlX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcInByaWNlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtcclxuICAgICAgICAgICAgdGhpcy5yZXdhcmRWYWx1ZSAvIHRoaXMucHJvcG9ydGlvblxyXG4gICAgICAgIH1gO1xyXG5cclxuICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfZXh0cmFjdEFjdGl2ZS5wbmdcIjtcclxuICAgICAgICBpZiAodGhpcy5pbnZpdGVMaXN0Lmxlbmd0aCA+IGkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW52aXRlTGlzdFtpXS5yZWNlaXZlZFJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZ19jYXNoRG9uZS5wbmdcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpID4gMikge1xyXG4gICAgICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ0bi5kYXRhU291cmNlID0gaTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjNEMFx1NEVBNFx1N0VEMVx1NUI5QVx1NjIxMVx1NzY4NFx1OTA4MFx1OEJGN1x1NEVCQVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmludml0ZUlucHV0LnRleHQgfHwgIXRoaXMuaW52aXRlSW5wdXQudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTkwODBcdThCRjdcdTc4MDFcdTRFMERcdTgwRkRcdTRFM0FcdTdBN0FcdUZGMDFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEludml0ZVBlb3BsZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IHRoaXMuaW52aXRlSW5wdXQudGV4dCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFVzZXJJbmZvLmludml0ZVBlb3BsZSA9IHRoaXMuaW52aXRlSW5wdXQudGV4dDtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU3RUQxXHU1QjlBXHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZpdGVCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZpdGVCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGwpIHRoaXMuY2FsbCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGREZXN0cm95KCkge1xyXG4gICAgICAgIC8vIExheWEubG9hZGVyLmNsZWFyVGV4dHVyZVJlcyhcInJlcy9pbWdfaW52aXRlQmcxLnBuZ1wiKTtcclxuICAgIH1cclxufVxyXG4iLCAiY29uc3QgZW51bSBFcnJvckNvZGUge1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NEUzQVx1N0E3QSAqL1xyXG4gICAgXzIwMDEgPSAyMDAxLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvckNvZGU7XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCBFcnJvckNvZGUgZnJvbSBcInNyYy9jb21tb24vRXJyb3JDb2RlXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSwgeyBMYW5kT2JqIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGFudERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IFdhcmVob3VzZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBNYWluVmlldywgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCJzcmMvdmlldy9NYWluVmlld1wiO1xyXG5pbXBvcnQgeyBTaG9wVmlld0RhdGEgfSBmcm9tIFwic3JjL3ZpZXcvU2hvcFZpZXdcIjtcclxuXHJcbi8vICBGaWVsZENvbXBvbmVudCBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuLyoqXHJcbiAqIFx1NzUzMFx1NTczMFx1N0VDNFx1NEVGNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIFx1NjkwRFx1NzI2OWljb24gKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgaWNvbjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU4MjgyXHU3MEI5ICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGZpZWxkTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU2NzA5XHU2OTBEXHU3MjY5XHU2NUY2XHU3Njg0XHU5NjM0XHU1RjcxICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHNoYWRvdzogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmllbGRFbXB0eVJlcywgdGlwczpcIlx1ODlFM1x1OTUwMVx1NTQwRVx1NTcxRlx1NTczMFx1N0VCOVx1NzQwNlwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGZpZWxkRW1wdHlSZXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogXHU3QjQ5XHU3RUE3XHU1NkZFXHU3MjQ3ICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGx2Tm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1MDEyXHU4QkExXHU2NUY2XHU1QkI5XHU1NjY4Ki9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgdGltZUJveDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogXHU1MDEyXHU4QkExXHU2NUY2bGFiZWwgKi9cclxuICAgIHByaXZhdGUgY291bnREb3duTGI6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOGljb25cdTg4QzVcdTk5NzAgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThpY29uXHU4OEM1XHU5OTcwICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHVwQW5pOiBMYXlhLkFuaW1hdGlvbiA9IG51bGw7XHJcbiAgICAvKiogXHU1MUNGXHU2NUY2XHU5NUY0XHU2M0QwXHU3OTNBICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIHJlZHVjZVRpbWU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1bmxvY2tJY29uLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwaWNvblx1NTczMFx1NTc0MFwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIHVubG9ja0ljb246IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmllbGRJZCwgdGlwczpcIlx1NTcxRlx1NTczMGlkXCIsIHR5cGU6TnVtYmVyLH0qL1xyXG4gICAgZmllbGRJZDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1NkQ2RVx1NTJBOFx1NTJBOFx1NzUzQiAqL1xyXG4gICAgcHJpdmF0ZSB0b3BTdGF0ZUljb25Ud2VlbjogTGF5YS5UaW1lTGluZTtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlcdTUyQThcdTc1M0IgKi9cclxuICAgIHByaXZhdGUgcGxhbnRJY29uVHdlZW46IExheWEuVGltZUxpbmU7XHJcblxyXG4gICAgLyoqIFx1NUVGQVx1N0I1MVx1NEUyRCAqL1xyXG4gICAgYnVpbGRJbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTU3MjhcdTU5MTZcdTk3NjIgKi9cclxuICAgIGlzT3V0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTUzRUZcdTUwNzcgKi9cclxuICAgIGNhblN0ZWFsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU4OEFCXHU1MDc3XHU0RUJBXHU3Njg0dWlkICovXHJcbiAgICBzdGVhbFVpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgZGF0YTogTGFuZE9iajtcclxuXHJcbiAgICBtYWluVmlld0NvbTogTWFpblZpZXc7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBsYW5kTGlzdDogTWFwPG51bWJlciwgTGFuZE9iaj47XHJcbiAgICAvKiogXHU2MjEwXHU3MTlGXHU3Njg0XHU2NUY2XHU5NUY0ICovXHJcbiAgICBwcml2YXRlIG1hdHVyZVRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuZmllbGROb2RlID0gPExheWEuSW1hZ2U+dGhpcy5vd25lcjtcclxuICAgICAgICB0aGlzLmNvdW50RG93bkxiID0gdGhpcy50aW1lQm94LmdldENoaWxkQnlOYW1lKFwiY291bnREb3duTGJcIikgYXMgYW55O1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLnNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51cEFuaS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwQW5pLm9uKExheWEuRXZlbnQuQ09NUExFVEUsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cEFuaS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfZmllbGQpXHJcbiAgICB1cGRhdGVEYXRhKGRhdGE/OiB7IGxpc3Q6IE1hcDxudW1iZXIsIExhbmRPYmo+IH0pIHtcclxuICAgICAgICBpZiAoZGF0YT8ubGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0ID0gZGF0YS5saXN0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QgPSBMYW5kU2VydmljZS5saXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbi55ID0gMTY0O1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROb2RlLnNraW4gPSB0aGlzLmZpZWxkRW1wdHlSZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24oQm9vbGVhbih0aGlzLmRhdGEucHJvZHVjdElkKSk7XHJcbiAgICAgICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYW50SWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5wcm9kdWN0SWQgJiYgdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gdGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0ICogMTAwMCArIERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAvL1x1NjIxMFx1OTU3Rlx1NEUyRFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQm94LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLnNraW4gPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQodGhpcy5kYXRhLnByb2R1Y3RJZCkuZ3Jvd2luZ0ljb247XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGVJY29uU2tpbigxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYW50SWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXR1cmVUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUljb25Ta2luKDMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sdk5vZGUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkTm9kZS5za2luID0gYG1haW5fc2NlbmUvaW1nX3dhc3RlbGFuZC5wbmdgO1xyXG4gICAgICAgICAgICB0aGlzLmljb24uc2tpbiA9IHRoaXMudW5sb2NrSWNvbjtcclxuICAgICAgICAgICAgdGhpcy5pY29uLnkgPSAxMTM7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbj8uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVpY29uXHU3Njg0XHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd0ljb24oc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuaWNvbi52aXNpYmxlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RVx1NzJCNlx1NjAwMWljb25cdTdFQjlcdTc0MDZcclxuICAgICAqIEBwYXJhbSBza2luVHlwZSAxIFx1NkQ0N1x1NkMzNFx1NTJBMFx1OTAxRlx1NzJCNlx1NjAwMSAyIFx1NUVGQVx1N0I1MVx1NzJCNlx1NjAwMSAzIFx1NjIxMFx1NzE5Rlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZUljb25Ta2luKHNraW5UeXBlOiAxIHwgMiB8IDMpIHtcclxuICAgICAgICBzd2l0Y2ggKHNraW5UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX3NwZWVkVXAucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfbGFuZFVwZGF0ZUJ0bjIucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb24uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfaGFydmVzdC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTg3Nlx1OTBFOGljb25cdTUyQThcdTc1M0JcclxuICAgICAqL1xyXG4gICAgdG9wU3RhdGVJY29uQW5pKHBsYXk6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi55ID0gLTEwNztcclxuICAgICAgICBpZiAoIXRoaXMudG9wU3RhdGVJY29uVHdlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IExheWEuVGltZUxpbmUudG8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbixcclxuICAgICAgICAgICAgICAgIHsgeTogdGhpcy50b3BTdGF0ZUljb24ueSAtIDUwIH0sXHJcbiAgICAgICAgICAgICAgICA4MDAsXHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICkudG8odGhpcy50b3BTdGF0ZUljb24sIHsgeTogdGhpcy50b3BTdGF0ZUljb24ueSB9LCA4MDApO1xyXG4gICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvblR3ZWVuLnBsYXkobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGVhbFVpZCAmJiAhdGhpcy5kYXRhPy5jYW5TdGVhbCkge1xyXG4gICAgICAgICAgICBwbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnZpc2libGUgPSBwbGF5O1xyXG4gICAgICAgIGlmIChwbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucmVzdW1lKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRVx1N0Y2RVx1NjVGNlx1OTVGNFx1NUJCOVx1NTY2OFx1NzY4NFx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dUaW1lQm94KHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnRpbWVCb3gudmlzaWJsZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTk2MzRcdTVGNzFcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93U2hhZG93SWNvbihzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cudmlzaWJsZSA9IHNob3c7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYWN0aXZlID0gc2hvdztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjkwRFx1NzI2OVx1NTJBOFx1NzUzQlx1NjRBRFx1NjUzRVxyXG4gICAgICogQHBhcmFtIHBsYXlcclxuICAgICAqL1xyXG4gICAgcGxhbnRJY29uQW5pKHBsYXk6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMucGxhbnRJY29uVHdlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFudEljb25Ud2VlbiA9IExheWEuVGltZUxpbmUudG8odGhpcy5pY29uLCB7IHNrZXdYOiAzIH0sIDEwMDApXHJcbiAgICAgICAgICAgICAgICAudG8odGhpcy5pY29uLCB7IHNrZXdYOiAtMyB9LCAyMDAwKVxyXG4gICAgICAgICAgICAgICAgLnRvKHRoaXMuaWNvbiwgeyBza2V3WDogMCB9LCAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5wbGFudEljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5pY29uLnNrZXdYID0gMDtcclxuXHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZShNYXRoLnJhbmRvbSgpICogMTAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wbGFudEljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGFudEljb25Ud2Vlbi5yZXN1bWUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFudEljb25Ud2Vlbi5wYXVzZSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYW50SWNvblR3ZWVuLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1MDEyXHU4QkExXHU2NUY2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQ291bnREb3duKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnREb3duTGIudGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5kYXRhLm1hdHVyZVRpbWVMZWZ0KTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDEwMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA9IE1hdGguY2VpbCgodGhpcy5tYXR1cmVUaW1lIC0gRGF0ZS5ub3coKSkgLyAxMDAwKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPCAwKSB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25MYi50ZXh0ID0gVG9vbHMuZm9ybWF0U2Vjb25kcyh0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU2MjEwXHU3MTlGIFwiKTtcclxuICAgICAgICAgICAgLy8gdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmljb24uc2tpbiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldCh0aGlzLmRhdGE/LnByb2R1Y3RJZCk/Lm1hdHVyZUljb247XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5idWlsZEluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZUljb25Ta2luKDMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS51cGRhdGVBbGxTdGF0ZUljb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNob3dUaW1lQm94KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTdCNDlcdTdFQTdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmx2Tm9kZS5za2luID0gYG1haW5fc2NlbmUvaW1nX2xldmVsJHt0aGlzLmRhdGEubGV2ZWx9LnBuZ2A7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxQ0ZcdTY1RjZcdTk1RjRcdTg4NjhcdTczQjBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWR1Y2VUaW1lQW5pOiBMYXlhLlRpbWVMaW5lO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyQTBcdTkwMUZcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMubGFuZF9zcGVlZF91cClcclxuICAgIHByaXZhdGUgc3BlZWRVcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhPy5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgLT0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcImFsbF9zcGVlZF91cF90aW1lXCIpXHJcbiAgICAgICAgICAgICAgICAudmFsdWUgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSB0aGlzLmRhdGEubWF0dXJlVGltZUxlZnQgKiAxMDAwICsgRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudERvd24oKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coMTEpO1xyXG5cclxuICAgICAgICAgICAgLy9cdTUxQ0ZcdTY1RjZcdTk1RjRcdTYzRDBcdTc5M0FcclxuICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWUueSA9IC0zOTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlZHVjZVRpbWVBbmkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVRpbWVBbmkgPSBMYXlhLlRpbWVMaW5lLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlVGltZSxcclxuICAgICAgICAgICAgICAgICAgICB7IHk6IC02OSwgYWxwaGE6IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICAzMDBcclxuICAgICAgICAgICAgICAgICkudG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogLTEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAxMDAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWR1Y2VUaW1lQW5pLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTdBN0FcdTU3MUZcdTU3MzBcclxuICAgICAqL1xyXG4gICAgY2xlYXJGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhLnByb2R1Y3RJZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pY29uLnNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2hvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZWFsRm9vZCh0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgIC8vXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU0RThCXHU0RUY2XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1aWxkSW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVGFibGVBbmFseXplLnRhYmxlKFwibGFuZExldmVsXCIpLmdldCh0aGlzLmRhdGEubGV2ZWwgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GaWVsZExldmVsVXBWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sZXZlbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGV2ZWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnR1ZGlzaGVuZ2ppKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwQW5pLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBBbmkucGxheSgwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NkVFMVx1N0VBN1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogYFx1NURGMlx1NkVFMVx1N0VBN2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20uaGlkZUd1aWRlSGFuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1MkEwXHU5MDFGXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TcGVlZFVwVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS51cGRhdGVBbGxTdGF0ZUljb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVmlld0NvbS51cGRhdGVBbGxTdGF0ZUljb24odGhpcy5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU2NTM2XHU4M0I3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2F0aGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NzlDRFx1ODNEQ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHU4OUUzXHU5NTAxXHU1NzFGXHU1NzMwXHJcbiAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20uaGlkZUd1aWRlSGFuZCgpO1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQWRkTGFuZFZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5maWVsZElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZmllbGRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0dXJlVGltZUxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0dXJlVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExhbmRTZXJ2aWNlLmFkZExhbmQodGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblZpZXdDb20udXBkYXRlSGl0TGFuZEFkZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY1MzZcdTgzRENcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdhdGhlcigpOiBQcm9taXNlPHsgcGxhbnRJZDogbnVtYmVyOyBhbW91bnQ6IG51bWJlcjsgZGlhbW9uZDogbnVtYmVyIH0gfCBudWxsPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgcGxhbnRBbW91bnQgPSAwLFxyXG4gICAgICAgICAgICByZXdhcmREaWFtb25kID0gMCxcclxuICAgICAgICAgICAgcHJvZHVjdElkID0gdGhpcy5kYXRhLnByb2R1Y3RJZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZEdhdGhlcixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogW3RoaXMuZGF0YS5pZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAoZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb2xkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYW1vbmQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWR2ZXJ0aXNlVGltZXM6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogeyBwbGFudElkOiBudW1iZXI7IGFtb3VudDogbnVtYmVyOyByZXdhcmREaWFtb25kOiBudW1iZXIgfVtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGQgPSBkYXRhLmxpc3RbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBwbGFudElkOiBwcm9kdWN0SWQsIGFtb3VudDogZC5hbW91bnQsIGRpYW1vbmQ6IHJld2FyZERpYW1vbmQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW50QW1vdW50ID0gZC5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UuYWRkKHByb2R1Y3RJZCwgZC5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kID0gZC5yZXdhcmREaWFtb25kO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2F0aGVyRXZlbnQocHJvZHVjdElkLCBwbGFudEFtb3VudCwgcmV3YXJkRGlhbW9uZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnYXRoZXJFdmVudChwcm9kdWN0SWQsIHBsYW50QW1vdW50LCByZXdhcmREaWFtb25kID0gMCkge1xyXG4gICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3Muc2hvdWNhaSk7XHJcbiAgICAgICAgdGhpcy5jbGVhckZpZWxkKCk7XHJcbiAgICAgICAgLy9cdTY1MzZcdTgzQjdcdTc2ODRcdTY5MERcdTcyNjlcclxuICAgICAgICBsZXQgcGxhbnRPYmogPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQocHJvZHVjdElkKSxcclxuICAgICAgICAgICAgcmV3YXJkTGlzdDogYW55W10gPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqOiBwbGFudE9iaixcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogcGxhbnRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vXHU4M0I3XHU1Rjk3XHU3Njg0XHU5NEJCXHU3N0YzXHJcbiAgICAgICAgaWYgKHJld2FyZERpYW1vbmQpIHtcclxuICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZGlhbW9uZElkKSxcclxuICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmREaWFtb25kLFxyXG4gICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgIGxpc3Q6IHJld2FyZExpc3QsXHJcbiAgICAgICAgICAgIGNhbGxCYWNrOiAoKSA9PiB7fSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLmFkVGltZXMgPiAxMDAgfHwgVXNlckluZm8uY29udGludW91c0FkVGltZXMgPiAyMCkge1xyXG4gICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMSB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAzIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiZnVsbF9TY3JlZW5cIiB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiYm90dG9tX2FkdmVydGlzZW1lbnRcIiB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc293KCkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywge1xyXG4gICAgICAgICAgICBwYXJtOiA8U2hvcFZpZXdEYXRhPntcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgcGFybTogeyBsYW5kSWQ6IHRoaXMuZmllbGRJZCB9LFxyXG4gICAgICAgICAgICAgICAgY2FsbDogKGQ6IFBsYW50RGF0YUJhc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvd1BsYW50KGQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzb3dQbGFudChkOiBQbGFudERhdGFCYXNlKSB7XHJcbiAgICAgICAgdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKS5wcm9kdWN0SWQgPSBkLmJhc2UuaWQ7XHJcbiAgICAgICAgdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKS5tYXR1cmVUaW1lTGVmdCA9IGQuYmFzZS5tYXR1cmVfdGltZTtcclxuICAgICAgICB0aGlzLm1hdHVyZVRpbWUgPSBkLmJhc2UubWF0dXJlX3RpbWUgKiAxMDAwICsgRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5sYW5kTGlzdC5nZXQodGhpcy5maWVsZElkKTtcclxuICAgICAgICB0aGlzLnJlbmRlckRhdGEoKTtcclxuICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnpob25nemhpKTtcclxuICAgICAgICB0aGlzLm1haW5WaWV3Q29tLnVwZGF0ZUFsbFN0YXRlSWNvbih0aGlzLmRhdGEuaWQpO1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDExKTtcclxuICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwicGxhbnRcIiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MDc3XHU4M0RDXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgc3RlYWxGb29kKGRhdGE6IExhbmRPYmopIHtcclxuICAgICAgICBpZiAoIWRhdGEucHJvZHVjdElkIHx8IGRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFVzZXJJbmZvLnZpdGFsaXR5IDw9IDApIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTRGNTNcdTUyOUJcdTRFMERcdThEQjNcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2FuU3RlYWwgfHwgKHRoaXMuc3RlYWxVaWQgJiYgIXRoaXMuZGF0YT8uY2FuU3RlYWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1REYyXHU3RUNGXHU0RTBEXHU1M0VGXHU1MDc3XCIpO1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1N0VEOVx1NjIxMVx1NzU1OVx1NzBCOVx1NTQyN1wiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIC8vXHU1MDc3XHU4M0RDXHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFN0ZWFsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJsYW5kU3RlYWxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRJZDogW3RoaXMuZGF0YS5pZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICB1aWQ6IHRoaXMuc3RlYWxVaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIChkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpdGFsaXR5OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogeyBwbGFudElkOiBudW1iZXI7IGFtb3VudDogbnVtYmVyOyByZXdhcmREaWFtb25kOiBudW1iZXIgfVtdO1xyXG4gICAgICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnZpdGFsaXR5ID0gZC52aXRhbGl0eTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZWFsRm9vZEV2ZW50KGQubGlzdFswXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhdGNoKChjb2RlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT09IEVycm9yQ29kZS5fMjAwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTA3N1x1ODNEQ1x1NEU4Qlx1NEVGNlxyXG4gICAgICogQHBhcmFtIGRcclxuICAgICAqIEBwYXJhbSBkb2dcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHN0ZWFsRm9vZEV2ZW50KFxyXG4gICAgICAgIGQ6IHtcclxuICAgICAgICAgICAgcGxhbnRJZDogbnVtYmVyO1xyXG4gICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgLyoqIFx1OTg5RFx1NTkxNlx1NTk1Nlx1NTJCMSAqL1xyXG4gICAgICAgICAgICByZXdhcmREaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkb2c6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmRhdGEuY2FuU3RlYWwgPSAwO1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJTdGVhbHZlZ2V0YWJsZXNcIiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDA0KTtcclxuICAgICAgICB0aGlzLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25BbmkoZmFsc2UpO1xyXG5cclxuICAgICAgICBNYWluVmlldy5pbnN0LnN0ZWFsQWxsLnJld2FyZERpYW1vbmQgKz0gZC5yZXdhcmREaWFtb25kO1xyXG5cclxuICAgICAgICAvL1x1NjUzNlx1ODNCN1x1NzY4NFx1NjkwRFx1NzI2OVxyXG4gICAgICAgIGNvbnN0IHJld2FyZExpc3Q6IGFueVtdID0gW107XHJcbiAgICAgICAgaWYgKGQucGxhbnRJZCkge1xyXG4gICAgICAgICAgICBDb3JlLmF1ZGlvLnBsYXlTb3VuZChSZXMuYXVkaW9zLnNob3VjYWkpO1xyXG4gICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmFkZCh0aGlzLmRhdGEucHJvZHVjdElkLCBkLmFtb3VudCk7XHJcbiAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChkLnBsYW50SWQpLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IGQuYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgcG9zVHlwZTogMyxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL1x1OEJCMFx1NUY1NVx1NTIzMFx1NUM1NVx1NzkzQVxyXG4gICAgICAgICAgICBsZXQgaGFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgTWFpblZpZXcuaW5zdC5zdGVhbEFsbC5saXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWFpblZpZXcuaW5zdC5zdGVhbEFsbC5saXN0W3hdLnBsYW50SWQgPT0gZC5wbGFudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTWFpblZpZXcuaW5zdC5zdGVhbEFsbC5saXN0W3hdLmFtb3VudCArPSBkLmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBoYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaGFzKSB7XHJcbiAgICAgICAgICAgICAgICBNYWluVmlldy5pbnN0LnN0ZWFsQWxsLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogZC5wbGFudElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogZC5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuZ291amlhb3NoZW5nKTtcclxuICAgICAgICAgICAgaWYgKCFkb2cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTg5RFx1RkYwQ1x1ODhBQlx1NzJEN1x1NTRBQ1x1NEU4Nn5+flx1NkNBMVx1NTA3N1x1Nzc0MH5cIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHU5ODlEXHU1OTE2XHU3Njg0XHU5NEJCXHU3N0YzXHU1OTU2XHU1MkIxXHJcbiAgICAgICAgaWYgKGQucmV3YXJkRGlhbW9uZCkge1xyXG4gICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5kaWFtb25kSWQpLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IGQucmV3YXJkRGlhbW9uZCxcclxuICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJld2FyZExpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgICAgICBsaXN0OiByZXdhcmRMaXN0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKSB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4/LmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnBsYW50SWNvblR3ZWVuPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wbGFudEljb25Ud2VlbiA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVkRG90VHlwZSB9IGZyb20gXCJzcmMvY29tcG9uZW50cy9SZWREb3RDb21wb25lbnRcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExhbmRTZXJ2aWNlLCB7IExhbmRPYmogfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xhbmRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYW50RGF0YUJhc2UgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BsYW50U2VydmljZVwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vKipcclxuICogXHU5OERFXHU5MUQxXHU1RTAxXHU2NTcwXHU5MUNGXHU3RUQzXHU2Nzg0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdldEZsb2F0UmV3YXJkT2JqIHtcclxuICAgIC8qKiBcdThENzdcdTcwQjlcdTUzQzJcdTgwMDNcdTgyODJcdTcwQjkgXHU5RUQ4XHU4QkE0XHU0RjFBXHU2MjhBXHU2NTcwXHU5MUNGXHU3Njg0XHU0RTFDXHU4OTdGXHU1MkEwXHU1MjMwXHU4RkQ5XHU5MUNDXHVGRjBDXHU2MjQwXHU0RUU1XHU0RTBEXHU4OTgxXHU2REZCSEJveFx1NjIxNlx1NjYyRlZCb3ggKi9cclxuICAgIG5vZGU6IExheWEuQm94O1xyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgbGlzdDoge1xyXG4gICAgICAgIC8qKiBcdTg5RTNcdTY3OTBcdTc2ODRcdThENDRcdTZFOTBcdTY1NzBcdTYzNkUgXHU1RkM1XHU5ODdCXHU4OTgxXHU2NzA5aWNvbiAqL1xyXG4gICAgICAgIG9iajogYW55O1xyXG4gICAgICAgIC8qKiBcdTY1NzBcdTkxQ0YgKi9cclxuICAgICAgICBjb3VudDogbnVtYmVyO1xyXG4gICAgICAgIC8qKiBcdTdFQzhcdTcwQjlcdTRGNERcdTdGNkUgMSBcdTkxRDFcdTVFMDEgMiBcdTk0QkJcdTc3RjMgMyBcdTRFRDNcdTVFOTMgKi9cclxuICAgICAgICBwb3NUeXBlOiAxIHwgMiB8IDM7XHJcbiAgICB9W107XHJcbiAgICBub3RGbHk/OiBib29sZWFuO1xyXG4gICAgLyoqIFx1NTJBOFx1NzUzQlx1NjRBRFx1NjUzRVx1N0VEM1x1Njc1Rlx1NTZERVx1OEMwMyAqL1xyXG4gICAgY2FsbEJhY2s/OiB7ICgpOiB2b2lkIH07XHJcbn1cclxuXHJcbi8vICBNYWluVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgc3RhdGljIGluc3Q6IE1haW5WaWV3O1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRMYW5kTGF5ZXIsIHRpcHM6XCJcdTYyRDNcdTVDNTVcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZExhbmRMYXllcjogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaWFtb25kTm9kZSwgdGlwczpcIlx1OTRCQlx1NzdGM1x1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZGlhbW9uZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvbGROb2RlLCB0aXBzOlwiXHU5MUQxXHU1RTAxXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb2xkTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YXZhdGFyTm9kZSwgdGlwczpcIlx1NTkzNFx1NTBDRlx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYXZhdGFyTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bGFuZEJveCwgdGlwczpcIlx1NTcxRlx1NTczMFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGFuZEJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNlbnRlckJveCwgdGlwczpcIlx1NEUyRFx1OTVGNFx1NTMzQVx1NTdERlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY2VudGVyQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6b3JkZXJCb3gsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG9yZGVyQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tQm94LCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2MzA5XHU5NEFFXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21Cb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpyZXdhcmRTaGFyZUd1aWRlLCB0aXBzOlwiXHU1OTU2XHU1MkIxXHU1RjE1XHU1QkZDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSByZXdhcmRTaGFyZUd1aWRlOiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRVcExheWVyLCB0aXBzOlwiXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU3QTk3XHU1M0UzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsYW5kVXBMYXllcjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmFzdEdldEJ0biwgdGlwczpcIlx1NEUwMFx1OTUyRVx1NTA3N1x1NjUzNlx1ODNEQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZmFzdEdldEJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRvcExheWVyT25TdGFnZSwgdGlwczpcIlx1NTcyOFx1NEUzQlx1NTczQVx1NjY2Rlx1NEUwQVx1OTc2Mlx1NzY4NFx1NEUwMFx1NEUyQVx1NjcwMFx1NEUwQVx1NUM0Mlx1NzY4NFx1N0E3QVx1NUM0MlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdG9wTGF5ZXJPblN0YWdlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BHb2xkSWNvbiwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1OTFEMVx1NUUwMWljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcEdvbGRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BEaWFtb25kSWNvbiwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1OTRCQlx1NzdGM2ljb25cIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRvcERpYW1vbmRJY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp3YXJlaG91c2VCdG4sIHRpcHM6XCJcdTRFRDNcdTVFOTNcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHdhcmVob3VzZUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bW9uZXlMYiwgdGlwczpcIlx1N0VBMlx1NTMwNVx1NjU4N1x1Njg2M1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbW9uZXlMYjogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmlndXJlQm94LCB0aXBzOlwiXHU0RUJBXHU3MjY5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBmaWd1cmVCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaWd1cmVCb3gyLCB0aXBzOlwiXHU0RUJBXHU3MjY5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBmaWd1cmVCb3gyOiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdUZGMENcdTk4REVcdTcyNjlcdTU0QzFcdTc2RjhcdTUxNzNcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnZXRSZXdhcmRQcmVmYWIsIHRpcHM6XCJcdTgzQjdcdTVGOTdcdTU5NTZcdTUyQjFcdTk4ODRcdThCQkVcIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgZ2V0UmV3YXJkUHJlZmFiOiBMYXlhLlByZWZhYiA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmxvYXRSZXdhcmRJY29uLCB0aXBzOlwiXHU1OTU2XHU1MkIxXHU5OERFXHU1MkE4XHU3NTNCaWNvblwiLCB0eXBlOlByZWZhYn0qL1xyXG4gICAgcHJpdmF0ZSBmbG9hdFJld2FyZEljb246IExheWEuUHJlZmFiID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb2xkQWRkLCB0aXBzOlwiXHU2REZCXHU1MkEwXHU5MUQxXHU1RTAxXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb2xkQWRkOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaWFtb25kQWRkLCB0aXBzOlwiXHU2REZCXHU1MkEwXHU5NEJCXHU3N0YzXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkaWFtb25kQWRkOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6Z29Ib21lQnRuLCB0aXBzOlwiXHU4RkQ0XHU1NkRFXHU1QkI2XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb0hvbWVCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFueURvb3IsIHRpcHM6XCJcdTUzQkJcdThGNkNcdThGNkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFueURvb3I6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnZpdGFsaXR5Qm94LCB0aXBzOlwiXHU0RjUzXHU1MjlCXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB2aXRhbGl0eUJveDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlCdXlCdG4sIHRpcHM6XCJcdTRGNTNcdTUyOUJcdThEMkRcdTRFNzBcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5QnV5QnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NUJBMFx1NzI2OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldEJveCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0Qm94OiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLy9cdTRFRkJcdTUyQTFcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0YXNrQm94LCB0aXBzOlwiXHU0RUZCXHU1MkExXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0YXNrQm94OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXAxLCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwMTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXAyLCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwMjogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXAzLCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwMzogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA0LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA1LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA2LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNjogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA3LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwNzogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA4LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwODogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZXA5LCB0aXBzOlwiXHU5NzAwXHU4OTgxXHU1RjE1XHU1QkZDXHU3Njg0XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzdGVwOTogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTdFQzRcdTRFRjYgXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGxhbmRMaXN0OiBGaWVsZENvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgLyoqXHU2NjJGXHU1NDI2XHU1NzI4XHU1OTE2XHU5NzYyICovXHJcbiAgICBpc091dGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKiogXHU3OUJCXHU1RjAwXHU1QkI2XHU3Njg0XHU2NUY2XHU5NUY0ICovXHJcbiAgICBwcml2YXRlIG91dGVyVGltZTogbnVtYmVyO1xyXG4gICAgLyoqXHU1M0JCXHU1OTdEXHU1M0NCIFx1NUJCNlx1NTAxMlx1OEJBMVx1NjVGNiAqL1xyXG4gICAgb3V0Q291bnREb3duTnVtYmVyID0gNjA7XHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICBNYWluVmlldy5pbnN0ID0gdGhpcztcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2xvYWRpbmdCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3dvb2R0aXRsZS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlSG91c2VCZy5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlYmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19zaGVsZi5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19sYW5kQmcucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19pbnZpdGVCZzEucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob3VzZXRvcC5wbmdcIixcclxuICAgICAgICAgICAgLy8gXCJyZXMvaW1nX2hvbWVwYWdlQmczLnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyBcInJlcy9pbWdfaG9tZXBhZ2VCZzIucG5nXCIsXHJcbiAgICAgICAgICAgIC8vIFwicmVzL2ltZ19ob21lcGFnZUJnMS5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvaW1nX2Zhcm1sYW5kTG9nby5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGxhbnRfaWNvbi5wbmdcIixcclxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvcGV0X2ZlZWQucG5nXCIsXHJcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2NlbmUucG5nXCIsXHJcbiAgICAgICAgXS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmVuZHNXaXRoKFwicG5nXCIpKSBMYXlhLmxvYWRlci5jbGVhclRleHR1cmVSZXMoZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vXHU2NUIwXHU2MjRCXHU1RjE1XHU1QkZDXHJcbiAgICAgICAgbGV0IG9rID0gZmFsc2UsXHJcbiAgICAgICAgICAgIHN0ZXAgPSAwO1xyXG4gICAgICAgIGlmIChVc2VySW5mby5ndWlkZURhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLmd1aWRlRGF0YS5zcGxpdChcIlwiKS5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZCA9PSBcIjFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXArKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChzdGVwID49IDkpIHtcclxuICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVVzZXJJbmZvLmd1aWRlRGF0YS5sZW5ndGggfHwgIW9rKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5HdWlkZVZpZXcsIHtcclxuICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlTGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXA5LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVHdWlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVHdWlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ndWlkSGFuZEFuaW1hdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZ3VpZGVIYW5kLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLmZyaWVuZFNoYXJlR3VpZGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy50b3BMYXllck9uU3RhZ2UpO1xyXG4gICAgICAgICh0aGlzLm9yZGVyQm94LmdldENoaWxkQnlOYW1lKFwiZnJpZW5kX25hbWVcIikgYXMgTGF5YS5MYWJlbCkudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudml0YWxpdHlCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ29Ib21lQnRuLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxhbmRCb3gubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRMaXN0LnB1c2godGhpcy5sYW5kQm94LmdldENoaWxkQXQoeCkuZ2V0Q29tcG9uZW50KEZpZWxkQ29tcG9uZW50KSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0ubWFpblZpZXdDb20gPSB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYW5kTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmZpZWxkSWQgLSBiLmZpZWxkSWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX2ZpZWxkKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVIaXRMYW5kQWRkKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxsU3RhdGVJY29uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI3JlZ2lvbiBcdTVGODVcdTY3M0FcdTVGMTVcdTVCRkNcclxuXHJcbiAgICBwcml2YXRlIGd1aWRIYW5kQW5pOiBMYXlhLlRpbWVMaW5lO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmd1aWRlSGFuZCwgdGlwczpcIlx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ3VpZGVIYW5kOiBMYXlhLlNwcml0ZSA9IG51bGw7XHJcbiAgICAvKipcclxuICAgICAqIFx1NUY4NVx1NjczQVx1NTI5Rlx1ODBGRFx1NUYxNVx1NUJGQ1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRpbWVHdWlkZSgpIHtcclxuICAgICAgICBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy50aW1lR3VpZGVUb3VjaCk7XHJcbiAgICAgICAgdGhpcy50aW1lR3VpZGVUb3VjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGltZUd1aWRlVG91Y2goKSB7XHJcbiAgICAgICAgTGF5YS50aW1lci5jbGVhcih0aGlzLCB0aGlzLnRpbWVHdWlkZUFjdGlvbik7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDE1MDAwLCB0aGlzLCB0aGlzLnRpbWVHdWlkZUFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBndWlkSWRMaXN0ID0gWzEsIDIsIDMsIDVdO1xyXG4gICAgcHJpdmF0ZSBoYXNHdWlkZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgdGltZUd1aWRlQWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhhc0d1aWRlIHx8IHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZUd1aWRlVG91Y2goKTtcclxuICAgICAgICB0aGlzLmd1aWRlSGFuZC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUd1aWRlVGFzaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVHdWlkZUhhbmQoKSB7XHJcbiAgICAgICAgdGhpcy5ndWlkZUhhbmQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGltZUd1aWRlKCk7XHJcbiAgICAgICAgdGhpcy5oYXNHdWlkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlR3VpZGVUYXNrKCkge1xyXG4gICAgICAgIGxldCBsYW5kRW1wdHkgPSBmYWxzZSxcclxuICAgICAgICAgICAgbGFuZDogRmllbGRDb21wb25lbnQsXHJcbiAgICAgICAgICAgIHVubG9ja0xhbmQ6IEZpZWxkQ29tcG9uZW50O1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYW5kTGlzdFt4XS5kYXRhICYmICF0aGlzLmxhbmRMaXN0W3hdLmRhdGEucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBsYW5kRW1wdHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYW5kTGlzdFt4XS5kYXRhPy5wcm9kdWN0SWQgJiYgdGhpcy5sYW5kTGlzdFt4XS5kYXRhPy5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmQgPSB0aGlzLmxhbmRMaXN0W3hdO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHU2OEMwXHU2RDRCXHU2NzA5XHU2Q0ExXHU2NzA5XHU2NzJBXHU4OUUzXHU5NTAxXHU3QTdBXHU1NzMwXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sYW5kTGlzdFt4XS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB1bmxvY2tMYW5kID0gdGhpcy5sYW5kTGlzdFt4XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXVubG9ja0xhbmQgJiYgdGhpcy5ndWlkSWRMaXN0LmluZGV4T2YoNSkgPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmd1aWRJZExpc3Quc3BsaWNlKHRoaXMuZ3VpZElkTGlzdC5pbmRleE9mKDUpLCAxKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ndWlkSWRMaXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFzR3VpZGUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBwb3MgPSB7IHg6IDAsIHk6IDAgfTtcclxuICAgICAgICBpZiAobGFuZEVtcHR5KSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuZ2V0Tm9kZVRvcExheWVyUG9zKHRoaXMuc3RlcDQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghbGFuZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5ndWlkSWRMaXN0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZ3VpZElkTGlzdC5sZW5ndGgpXTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmdldE5vZGVUb3BMYXllclBvcyhsYW5kLm93bmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3MueCArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IHRoaXMuZ2V0Tm9kZVRvcExheWVyUG9zKHRoaXMuc3RlcDkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy54ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3MueSArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gdGhpcy5nZXROb2RlVG9wTGF5ZXJQb3ModGhpcy5zdGVwNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmdldE5vZGVUb3BMYXllclBvcyh1bmxvY2tMYW5kLm93bmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3MueCArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmd1aWRlSGFuZC5wb3MocG9zLngsIHBvcy55KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5vZGVUb3BMYXllclBvcyhub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9wTGF5ZXJPblN0YWdlLmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgIChub2RlLnBhcmVudCBhcyBhbnkpLmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQobm9kZS54LCBub2RlLnkpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcdTYyNEJcdTYzMDdcdTUyQThcdTc1M0JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBndWlkSGFuZEFuaW1hdGlvbigpIHtcclxuICAgICAgICB0aGlzLmd1aWRIYW5kQW5pID0gTGF5YS5UaW1lTGluZS50byh0aGlzLmd1aWRlSGFuZCwgeyByb3RhdGlvbjogLTE1IH0sIDQwMCwgbnVsbCkudG8oXHJcbiAgICAgICAgICAgIHRoaXMuZ3VpZGVIYW5kLFxyXG4gICAgICAgICAgICB7IHJvdGF0aW9uOiAwIH0sXHJcbiAgICAgICAgICAgIDQwMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5ndWlkSGFuZEFuaS5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU3OTNBXHU2NjNFXHU3OTNBXHU2MjY5XHU1RUZBaWNvblxyXG4gICAgICovXHJcbiAgICB1cGRhdGVIaXRMYW5kQWRkKCkge1xyXG4gICAgICAgIGxldCBndWlkTGFuZDogRmllbGRDb21wb25lbnQ7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubGFuZExpc3RbeF0uZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFndWlkTGFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGd1aWRMYW5kID0gdGhpcy5sYW5kTGlzdFt4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTE2OFx1NEY1M1x1NTJBMFx1OTAxRmljb24gXHU1NDhDIFx1NjUzNlx1ODNEQ2ljb24gXHU2NjgyXHU2NUY2XHU2MjhBXHU0RTI0XHU0RTJBXHU2NUI5XHU2Q0Q1XHU1MTk5XHU1NzI4XHU0RTAwXHU4RDc3XHU0RTg2XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUFsbFN0YXRlSWNvbihsYW5kSWQ/OiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0udG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMubGFuZExpc3RbeF0uZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlkID09IGxhbmRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zZXRTdGF0ZUljb25Ta2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0udG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbGFuZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucHJvZHVjdElkICYmIGRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zZXRTdGF0ZUljb25Ta2luKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmxhbmRMaXN0W3hdLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wcm9kdWN0SWQgJiYgIWRhdGEubWF0dXJlVGltZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZExpc3RbeF0uc2V0U3RhdGVJY29uU2tpbigzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnRvcFN0YXRlSWNvbkFuaSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImRpYW1vbmRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbW9uZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb25leUxiLnZhbHVlID0gKGUgKiBVc2VySW5mby5wcm9wb3J0aW9uKS50b0ZpeGVkKDIpICsgXCJcIjtcclxuICAgICAgICAgICAgICAgIC8vXHU0RTBEXHU1NkRCXHU4MjBEXHU0RTk0XHU1MTY1XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbmV5TGIudmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIChlICogVXNlckluZm8ucHJvcG9ydGlvbikudG9TdHJpbmcoKS5tYXRjaCgvXlxcZCsoPzpcXC5cXGR7MCwyfSk/LykgKyBcIlwiO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiZ29sZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb2xkTm9kZS52YWx1ZSA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJhdmF0YXJcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJ3YXJlUGV0SWRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBldEJveC5nZXRDaGlsZEJ5TmFtZShcImRvZ19hbmlcIikgYXMgTGF5YS5BbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICApLnNvdXJjZSA9IGByZXMvZG9nXyR7ZX0uYXRsYXNgO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5nZXQoZSkuaWNvbjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwicGV0Vml0YWxpdHlcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8ud2FyZVBldElkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAvL1x1NjZGNFx1NjVCMFx1NUJBMFx1NzI2OVx1NEY1M1x1NTI5QlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGV0Qm94LnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmFyID0gdGhpcy5wZXRCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwiYm94XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInZpdGFsaXR5X2JhclwiKSBhcyBMYXlhLkltYWdlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGUgPSBlIC8gVGFibGVBbmFseXplLnRhYmxlKFwicGV0XCIpLmdldChVc2VySW5mby53YXJlUGV0SWQpLnZpdGFsaXR5X21heDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NhbGUgPiAxKSBzY2FsZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhci53aWR0aCA9IDEzMCAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJodW5ncnlcIikgYXMgTGF5YS5JbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICkudmlzaWJsZSA9ICFlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiZGlnZXN0Q291bnREb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMuZGlnZXN0Q291bnREb3duKTtcclxuICAgICAgICAgICAgICAgIC8vXHU1QkEwXHU3MjY5XHU5NzAwXHU4OTgxXHU2RDg4XHU4MDE3XHU5OERGXHU3MjY5XHU1MDEyXHU4QkExXHU2NUY2XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXRCb3gudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZShlICogMTAwMCwgdGhpcywgdGhpcy5kaWdlc3RDb3VudERvd24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwidml0YWxpdHlcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB2aXRhbGl0eSA9XHJcbiAgICAgICAgICAgICAgICAgICAgZSAvIChUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwidml0YWxpdHlMaW1pdFwiKS52YWx1ZSBhcyBudW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfcmVkX2RvdCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWREb3RUeXBlLmFueURvb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oZSksXHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodml0YWxpdHkgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpdGFsaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLmdyYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5tb3VzZUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJ1eUJ0bi5ncmF5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpdGFsaXR5QnV5QnRuLm1vdXNlRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aXRhbGl0eUJveC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSlcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy52aXRhbGl0eUJveC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9IDI2OCAqIHZpdGFsaXR5O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3JkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUJBMFx1NzI2OVx1N0IxMVx1NkQ4OFx1NTMxNlx1NUI5QVx1NjVGNlx1NTY2OFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRpZ2VzdENvdW50RG93bigpIHtcclxuICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHBldCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcInBldFwiKS5nZXQoVXNlckluZm8ud2FyZVBldElkKTtcclxuICAgICAgICBpZiAoVXNlckluZm8ucGV0Vml0YWxpdHkgLSBwZXQudml0YWxpdHlfY29uc3VtZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLnBldFZpdGFsaXR5ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSAtPSBwZXQudml0YWxpdHlfY29uc3VtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXNlckluZm8uZGlnZXN0Q291bnREb3duID0gQ29uZmlnR2FtZS5wZXREaWdlc3RJbnRlcnZhbFRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFx1NEUzQlx1NzU0Q1x1OTc2Mlx1NzBCOVx1NTFGQlx1NkIyMVx1NjU3MCAqL1xyXG4gICAgcHJpdmF0ZSBjbGlja1RpbWVzID0gMDtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoVXNlckluZm8uYWRUaW1lcyA+IDEwMCB8fCBVc2VySW5mby5jb250aW51b3VzQWRUaW1lcyA+IDIwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tUaW1lcysrO1xyXG4gICAgICAgICAgICBpZiAoISh0aGlzLmNsaWNrVGltZXMgJSA1KSkge1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMyB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImZ1bGxfU2NyZWVuXCIgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJib3R0b21fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyBjYXNlIFwic2lnbkluXCI6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNpZ25JblZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5NYWlsKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNob3BcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVHdWlkZUhhbmQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaGVhZFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNldHRpbmdWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2FyZWhvdXNlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImJ1eV9mZWVkXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMiB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb2dfaG91c2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAxIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvZ19hbmlcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiB7IGlkOiAyIH0gfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRpYW1vbmRfYm94XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJtb25leV9yZWRfYm94XCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMyB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcmRlcl9ib3hcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5PcmRlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmcmllbmRzXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5GcmllbmQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZFwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kTGV2ZWxVcFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3V0ZXIpIHRoaXMuc3dpdGNoTGFuZExldmVsVXAodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlX3VwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaExhbmRMZXZlbFVwKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYW55X2Rvb3JcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29Ub05laWdoYm9yKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImdvX2hvbWVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29Ib21lKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZF92aXRhbGl0eVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXlWaXRhbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZXdhcmRfc2hhcmVfZ3VpZGVcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29GcmllbmRSZXdhcmRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZhc3RfZ2V0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhc3RHZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTFGQVx1NTNCQlx1NEUwMFx1NkIyMVx1NTA3N1x1NzY4NFx1NjI0MFx1NjcwOVx1NEUxQ1x1ODk3Rlx1OTZDNlx1NTQwOFxyXG4gICAgICovXHJcbiAgICBzdGVhbEFsbDoge1xyXG4gICAgICAgIGxpc3Q6IHsgcGxhbnRJZDogbnVtYmVyOyBhbW91bnQ6IG51bWJlciB9W107XHJcbiAgICAgICAgcmV3YXJkRGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgIG5pY2tuYW1lOiBzdHJpbmc7XHJcbiAgICB9ID0geyBsaXN0OiBbXSwgcmV3YXJkRGlhbW9uZDogMCwgbmlja25hbWU6IG51bGwgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NEUwMFx1OTUyRVx1NjUzNlx1NTA3N1x1OTFDN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGZhc3RHZXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKFVzZXJJbmZvLnZpdGFsaXR5IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU0RjUzXHU1MjlCXHU0RTBEXHU4REIzXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vXHU1MDc3XHU4M0RDXHJcbiAgICAgICAgICAgIGxldCBsYW5kczogbnVtYmVyW10gPSBbXSxcclxuICAgICAgICAgICAgICAgIGxhbmRDb21MaXN0OiBGaWVsZENvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLmRhdGE/LnByb2R1Y3RJZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmxhbmRMaXN0W3hdLmRhdGE/Lm1hdHVyZVRpbWVMZWZ0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5kYXRhPy5jYW5TdGVhbFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZHMucHVzaCh0aGlzLmxhbmRMaXN0W3hdLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRDb21MaXN0LnB1c2godGhpcy5sYW5kTGlzdFt4XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFsYW5kcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2Q0ExXHU2NzA5XHU1M0VGXHU0RUU1XHU1MDc3XHU3Njg0XCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kU3RlYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJsYW5kU3RlYWxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IGxhbmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGxhbmRDb21MaXN0WzBdLnN0ZWFsVWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgKGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdml0YWxpdHk6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby52aXRhbGl0eSA9IGQudml0YWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQubGlzdC5mb3JFYWNoKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kQ29tTGlzdFtpXS5zdGVhbEZvb2RFdmVudChkYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZGlhbW9uZCA9IDAsXHJcbiAgICAgICAgICAgICAgICBsaXN0OiB7IHBsYW50SWQ6IG51bWJlcjsgYW1vdW50OiBudW1iZXIgfVtdID0gW10sXHJcbiAgICAgICAgICAgICAgICBsYW5kczogbnVtYmVyW10gPSBbXSxcclxuICAgICAgICAgICAgICAgIGxhbmRDb21MaXN0OiBGaWVsZENvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhbmRMaXN0W3hdLmRhdGE/LnByb2R1Y3RJZCAmJiAhdGhpcy5sYW5kTGlzdFt4XS5kYXRhPy5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRzLnB1c2godGhpcy5sYW5kTGlzdFt4XS5kYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kQ29tTGlzdC5wdXNoKHRoaXMubGFuZExpc3RbeF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWxhbmRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTZDQTFcdTY3MDlcdTYyMTBcdTcxOUZcdTc2ODRcdTUxOUNcdTRGNUNcdTcyNjlcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kR2F0aGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wiZ2F0aGVyXCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiBsYW5kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlRGVmYXVsdCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIChkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdvbGQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZHZlcnRpc2VUaW1lczogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFudElkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQubGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFtb25kICs9IGRhdGEucmV3YXJkRGlhbW9uZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhcmVob3VzZVNlcnZpY2UuYWRkKGRhdGEucGxhbnRJZCwgZGF0YS5hbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0W3hdLnBsYW50SWQgPT0gZGF0YS5wbGFudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RbeF0uYW1vdW50ICs9IGRhdGEuYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogZGF0YS5wbGFudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDogZGF0YS5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuR2F0aGVyRGVzY1ZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbW9uZDogZGlhbW9uZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZG91YmxlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtdWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG91YmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQubGlzdC5mb3JFYWNoKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG91YmxlKSBXYXJlaG91c2VTZXJ2aWNlLmFkZChkYXRhLnBsYW50SWQsIGRhdGEuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRDb21MaXN0W2ldLmdhdGhlckV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucGxhbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFtb3VudCAqIG11bCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJld2FyZERpYW1vbmQgKiBtdWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU3OUNEXHU4M0RDICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGFudF9zb3cpXHJcbiAgICBwcml2YXRlIHNvdyhzaG93VmlldzogYm9vbGVhbiA9IGZhbHNlLCBkOiBQbGFudERhdGFCYXNlKSB7XHJcbiAgICAgICAgbGV0IGVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IHRoaXMubGFuZExpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sYW5kTGlzdFt4XT8uZGF0YT8ucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvd1ZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNvd1BsYW50KGQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW1wdHkpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTZDQTFcdTY3MDlcdTdBN0FcdTc2ODRcdTU3MUZcdTU3MzBcdTU0RTZcdUZGMDFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVtcHR5TGFuZElkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZExpc3QpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGFuZExpc3RbeF0uZGF0YSAmJiAhdGhpcy5sYW5kTGlzdFt4XS5kYXRhLnByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZExpc3RbeF0uZmllbGRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1OTBBRVx1NEVGNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9wZW5NYWlsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5tYWlsTGlzdCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IE1haWxSZXR1cm5EYXRhW10pID0+IHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5NYWlsVmlldywgeyBwYXJtOiBkIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU5N0RcdTUzQ0IgXHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLm9wZW5fZnJpZW5kKVxyXG4gICAgcHJpdmF0ZSBvcGVuRnJpZW5kKHR5cGUgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZExpc3QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkOiBGcmllbmRMaXN0RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuRnJpZW5kc1ZpZXcsIHsgcGFybTogeyBmcmllbmREYXRhOiBkLCB0eXBlOiB0eXBlIH0gfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThEMkRcdTRFNzBcdTRGNTNcdTUyOUJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidXlWaXRhbGl0eSgpIHtcclxuICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuQnV5Vml0YWxpdHlWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogXHU4QkEyXHU1MzU1XHU5NjFGXHU1MjE3ICovXHJcbiAgICBwcml2YXRlIG9yZGVyUXVldWVJbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTRFMERcdTkxQ0RcdTU5MERcdTVGMzlcdTk4ODZcdTUzRDZcdThCQTJcdTUzNTVcdTU5NTZcdTUyQjFcdTVGMzlcdTdBOTcgKi9cclxuICAgIGhpbmRPcmRlckxldmVsOiBudW1iZXIgPSBudWxsO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdThCQTJcdTUzNTVcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMudXBkYXRlX09yZGVyKVxyXG4gICAgcHJpdmF0ZSB1cGRhdGVPcmRlcigpIHtcclxuICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgYm94ID0gdGhpcy5vcmRlckJveC5nZXRDaGlsZEJ5TmFtZShcIm9yZGVyX2JveFwiKSxcclxuICAgICAgICAgICAgZCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcIm9yZGVyXCIpLmdldChVc2VySW5mby5vcmRlckxldmVsICsgMSksXHJcbiAgICAgICAgICAgIHJld2FyZDogUmV3YXJkQ3VycmVuY3lCYXNlLFxyXG4gICAgICAgICAgICByZXdhcmRDb3VudDogbnVtYmVyID0gMCxcclxuICAgICAgICAgICAgcmV3YXJkRGlhbW9uZENvdW50OiBudW1iZXIgPSAwLFxyXG4gICAgICAgICAgICBjdXJDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIG1heENvdW50ID0gMCxcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIGlmICghZCkgcmV0dXJuIGNvbnNvbGUubG9nKFwiXHU3QjQ5XHU3RUE3XHU1REYyXHU1QjhDXCIpO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgNDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gYm94LmdldENoaWxkQnlOYW1lKFwiaXRlbV9cIiArIHgpIGFzIExheWEuQm94O1xyXG5cclxuICAgICAgICAgICAgaWYgKGQuY29uZGl0aW9uW3hdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJDb3VudCA9IFdhcmVob3VzZVNlcnZpY2UuZ2V0T25lKGQuY29uZGl0aW9uW3hdLnBsYW50LmlkKT8uY291bnQgfHwgMDtcclxuICAgICAgICAgICAgICAgIG1heENvdW50ID0gZC5jb25kaXRpb25beF0uY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1ckNvdW50ID49IG1heENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MrKztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuY29uZGl0aW9uW3hdLnBsYW50Lmljb247XHJcbiAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7Y3VyQ291bnR9LyR7bWF4Q291bnR9YDtcclxuICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiYmFyXCIpIGFzIExheWEuSW1hZ2UpLndpZHRoID1cclxuICAgICAgICAgICAgICAgICAgICA4NyAqIChjdXJDb3VudCAvIG1heENvdW50ID4gMSA/IDEgOiBjdXJDb3VudCAvIG1heENvdW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGQuY29uZGl0aW9uW3hdLnBsYW50LmdhaW4uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLm9iai5pZCA9PT0gQ29uZmlnR2FtZS5nb2xkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZCA9IGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKz0gZS5jb3VudCAqIG1heENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmRDb3VudCArPSBlLmNvdW50ICogbWF4Q291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJld2FyZCkge1xyXG4gICAgICAgICAgICBsZXQgZ29sZEJveCA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImdvbGRfYm94XCIpIGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICAgICAgZGlhbW9uZEJveCA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImRpYW1vbmRfYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgICAgICAoZ29sZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKGdvbGRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGAke1xyXG4gICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKyBNYXRoLnJvdW5kKHJld2FyZENvdW50ICogZC5jb21taXNzaW9uKVxyXG4gICAgICAgICAgICB9YDtcclxuXHJcbiAgICAgICAgICAgIGlmIChkLmV4dHJhUmV3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAoZGlhbW9uZEJveC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IGQuZXh0cmFSZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICAoZGlhbW9uZEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gYCR7XHJcbiAgICAgICAgICAgICAgICAgICAgZC5leHRyYVJld2FyZC5jb3VudCArXHJcbiAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZENvdW50ICtcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHJld2FyZERpYW1vbmRDb3VudCAqIGQuY29tbWlzc2lvbilcclxuICAgICAgICAgICAgICAgIH1gO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpYW1vbmRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBnb2xkQm94LnkgPSA0NjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdvbGRCb3gueSA9IDY2O1xyXG4gICAgICAgICAgICAgICAgZGlhbW9uZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lX3RpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU1QjhDXHU2MjEwJHtcclxuICAgICAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCArIDFcclxuICAgICAgICB9XHU3RUE3XHU4QkEyXHU1MzU1YDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm9yZGVyUXVldWVJbmcpIHtcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID09IGQuY29uZGl0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uID0gZC5jb25kaXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyUXVldWVJbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkRGlhbW9uZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuZXh0cmFSZXdhcmQuY291bnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kQ291bnQgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHJld2FyZERpYW1vbmRDb3VudCAqIGQuY29tbWlzc2lvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgYWRHb2xkID0gcmV3YXJkQ291bnQgKyBNYXRoLnJvdW5kKHJld2FyZENvdW50ICogZC5jb21taXNzaW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX3JlZF9kb3QsIFtSZWREb3RUeXBlLm9yZGVyLCB0cnVlXSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oaW5kT3JkZXJMZXZlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJRdWV1ZUluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpbmRPcmRlckxldmVsID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoNTAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkdhdGhlckRlc2NWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbW9uZDogYWREaWFtb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvbGQ6IGFkR29sZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoZG91YmxlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaW5kT3JkZXJMZXZlbCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5yZWR1Y2VBbW91bnQoZS5wbGFudC5pZCwgZS5jb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlclF1ZXVlSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8ub3JkZXJMZXZlbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGFkR29sZCAqIChkb3VibGUgPyAyIDogMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQuZXh0cmFSZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5leHRyYVJld2FyZC5vYmouaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogYWREaWFtb25kICogKGRvdWJsZSA/IDIgOiAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlHZXRSZXdhcmRBbmkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBib3guZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkX2JveFwiKSBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHJld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlT3JkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb3VibGUgJiYgIShVc2VySW5mby5vcmRlckxldmVsICUgMykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImZ1bGxfU2NyZWVuXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VFdmVudDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJRdWV1ZUluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9yZWRfZG90LCBbUmVkRG90VHlwZS5vcmRlciwgZmFsc2VdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MjA3XHU2MzYyXHU1NzFGXHU1NzMwXHU1MzQ3XHU3RUE3XHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzd2l0Y2hMYW5kTGV2ZWxVcChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGJnID0gdGhpcy5sYW5kVXBMYXllci5nZXRDaGlsZEJ5TmFtZShcImJnXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlR3VpZGVIYW5kKCk7XHJcbiAgICAgICAgICAgIGJnLmFscGhhID0gMDtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhiZywgeyBhbHBoYTogMC43NSB9LCAxNTApO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmdldENoaWxkQnlOYW1lKFwibGFuZF9vdXRlclwiKS5hZGRDaGlsZCh0aGlzLmxhbmRCb3gpO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChUYWJsZUFuYWx5emUudGFibGUoXCJsYW5kTGV2ZWxcIikuZ2V0KGUuZGF0YS5sZXZlbCArIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2hvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dUaW1lQm94KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGUuYnVpbGRJbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgYmcsXHJcbiAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlckJveC5hZGRDaGlsZCh0aGlzLmxhbmRCb3gpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRhLm1hdHVyZVRpbWVMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnNob3dUaW1lQm94KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUuZGF0YS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xlYXJGaWVsZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5jbGVhckZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5idWlsZEluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKGUuZGF0YS5tYXR1cmVUaW1lTGVmdCA/IDEgOiAzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZS50b3BTdGF0ZUljb25BbmkoQm9vbGVhbihlLmRhdGEucHJvZHVjdElkKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbigxKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnRvcFN0YXRlSWNvbkFuaShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjRBRFx1NjUzRVx1ODNCN1x1NTNENlx1NTk1Nlx1NTJCMVx1NTJBOFx1NzUzQlxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQpXHJcbiAgICBwcml2YXRlIHBsYXlHZXRSZXdhcmRBbmkob2JqOiBHZXRGbG9hdFJld2FyZE9iaikge1xyXG4gICAgICAgIExheWEudGltZXIub25jZSgyMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYmouY2FsbEJhY2spIG9iai5jYWxsQmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvYmoubGlzdC5mb3JFYWNoKChkLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZC5vYmopIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBub2RlOiBMYXlhLkJveCA9IExheWEuUG9vbC5nZXRJdGVtQnlDcmVhdGVGdW4oXHJcbiAgICAgICAgICAgICAgICBcImZsb2F0UmV3YXJkQm94XCIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJld2FyZFByZWZhYi5jcmVhdGUsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJld2FyZFByZWZhYlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gbm9kZS55ID0gb2JqLm5vZGUuZ2V0X2hlaWdodCgpICogb2JqLm5vZGUuYW5jaG9yWSAtIGkgKiA2MDtcclxuICAgICAgICAgICAgLy8gbm9kZS54ID0gb2JqLm5vZGUuZ2V0X3dpZHRoKCkgKiBvYmoubm9kZS5hbmNob3JYO1xyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGljb24uc2tpbiA9IGQub2JqPy5pY29uIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDgwIC8gaWNvbi53aWR0aDtcclxuICAgICAgICAgICAgaWNvbi5zY2FsZShzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICBub2RlLmFscGhhID0gMDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqLm5vZGUubG9jYWxUb0dsb2JhbChuZXcgTGF5YS5Qb2ludCgpKSk7XHJcbiAgICAgICAgICAgIC8vIG9iai5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZU5ld1BvcyA9IHRoaXMudG9wTGF5ZXJPblN0YWdlLmdsb2JhbFRvTG9jYWwoXHJcbiAgICAgICAgICAgICAgICBvYmoubm9kZS5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KCkpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBub2RlLnBvcyhub2RlTmV3UG9zLnggKyBvYmoubm9kZS5nZXRfd2lkdGgoKSAqIG9iai5ub2RlLmFuY2hvclgsIG5vZGVOZXdQb3MueSAtIGkgKiA2MCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9wTGF5ZXJPblN0YWdlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAobm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gXCJ4XCIgKyBkLmNvdW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvYmo/Lm5vdEZseSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChkLnBvc1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkR29sZERpYW1vbmRBbmkodGhpcy5nb2xkQWRkLCBkLmNvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEdvbGREaWFtb25kQW5pKHRoaXMuZGlhbW9uZEFkZCwgZC5jb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgICAgIHsgeTogbm9kZS55IC0gNDAsIGFscGhhOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIChlOiBMYXlhLkJveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Qb29sLnJlY292ZXIoXCJmbG9hdFJld2FyZEJveFwiLCBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9jYWxQb3NJY29uID0gdGhpcy50b3BMYXllck9uU3RhZ2UuZ2xvYmFsVG9Mb2NhbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmxvY2FsVG9HbG9iYWwoTGF5YS5Qb2ludC5jcmVhdGUoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZVNlbGYoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm5vdEZseSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbG9hdEljb246IExheWEuSW1hZ2UgPSBMYXlhLlBvb2wuZ2V0SXRlbUJ5Q3JlYXRlRnVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsb2F0UmV3YXJkSWNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb2F0UmV3YXJkSWNvbi5jcmVhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvYXRSZXdhcmRJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24uc2tpbiA9IGQub2JqLmljb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi5wb3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsUG9zSWNvbi54ICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyMCAqIChNYXRoLnJhbmRvbSgpIDwgMC41ID8gMSA6IC0xKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQb3NJY29uLnkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDIwICogKE1hdGgucmFuZG9tKCkgPCAwLjUgPyAxIDogLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdEljb24uc2NhbGUoc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcExheWVyT25TdGFnZS5hZGRDaGlsZChmbG9hdEljb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbi56T3JkZXIgPSA5OTk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3BJY29uOiBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZC5wb3NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcEljb24gPSB0aGlzLnRvcEdvbGRJY29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcEljb24gPSB0aGlzLnRvcERpYW1vbmRJY29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcEljb24gPSB0aGlzLndhcmVob3VzZUJ0bjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcEdvbGRJY29uUG9zID0gdG9wSWNvbi5sb2NhbFRvR2xvYmFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5Qb2ludCh0b3BJY29uLndpZHRoIC8gMiwgdG9wSWNvbi5oZWlnaHQgLyAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvY2FsUG9zID0gdGhpcy50b3BMYXllck9uU3RhZ2UuZ2xvYmFsVG9Mb2NhbCh0b3BHb2xkSWNvblBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0SWNvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB4OiBsb2NhbFBvcy54LCB5OiBsb2NhbFBvcy55IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuRWFzZS5iYWNrSW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGU6IExheWEuSW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlBvb2wucmVjb3ZlcihcImZsb2F0UmV3YXJkSWNvblwiLCBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZmxvYXRJY29uXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNTAgKiB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbbm9kZV1cclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICA1MCAqIGksXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkR29sZERpYW1vbmRBbmkobm9kZSwgY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIG5vZGUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgbm9kZS5hbHBoYSA9IDA7XHJcbiAgICAgICAgbm9kZS52YWx1ZSA9IGArJHtjb3VudH1gO1xyXG4gICAgICAgIG5vZGUueSA9IDMwO1xyXG4gICAgICAgIG5vZGUub2ZmQWxsKCk7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgeyBhbHBoYTogMSwgeTogLTMwIH0sXHJcbiAgICAgICAgICAgIDUwMCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcih0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjRBRFx1NjUzRVx1NzcwQlx1NUU3Rlx1NTQ0QVx1NEVFNVx1NTQwRVx1NzY4NFx1NTk1Nlx1NTJCMVxyXG4gICAgICovXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQpXHJcbiAgICBwcml2YXRlIHBsYXlBZFJld2FyZCh0YXJnZXQsIGFkUmV3YXJkOiBSZXR1cm5Vc2VySW5mb1tcImFkUmV3YXJkXCJdKSB7XHJcbiAgICAgICAgbGV0IHJld2FyZExpc3QgPSBbXTtcclxuICAgICAgICBhZFJld2FyZD8uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkLmlkID09IENvbmZpZ0dhbWUuZ29sZElkID8gMiA6IDEpO1xyXG4gICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoZC5pZCksXHJcbiAgICAgICAgICAgICAgICBjb3VudDogZC5hbW91bnQsXHJcbiAgICAgICAgICAgICAgICBwb3NUeXBlOiBkLmlkID09IENvbmZpZ0dhbWUuZ29sZElkID8gMSA6IDIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgIG5vZGU6IHRhcmdldCxcclxuICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NEVGQlx1NTJBMVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgQENvcmUuZXZlbnRPbihFdmVudE1hcHMudXBkYXRlX3Rhc2spXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRhc2soKSB7XHJcbiAgICAgICAgY29uc3QgYm94OiBMYXlhLkltYWdlID0gdGhpcy50YXNrQm94LFxyXG4gICAgICAgICAgICBpY29uID0gYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBhbW91bnRGb250ID0gaWNvbi5nZXRDaGlsZEJ5TmFtZShcImFtb3VudEZvbnRcIikgYXMgTGF5YS5Gb250Q2xpcCxcclxuICAgICAgICAgICAgZGVzYyA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImxiXCIpIGFzIExheWEuTGFiZWwsXHJcbiAgICAgICAgICAgIGxpc3QgPSBUYXNrU2VydmljZS5nZXRMaXN0KCksXHJcbiAgICAgICAgICAgIHRhc2sgPSBsaXN0WzBdO1xyXG4gICAgICAgIGlmICh0YXNrLnJlY2VpdmUgPT0gMSB8fCB0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgYm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgZGVzYy50ZXh0ID0gYFx1NEVGQlx1NTJBMToke3Rhc2suYmFzZS5kZXNjfSgke1xyXG4gICAgICAgICAgICB0YXNrLnRpbWVzID4gdGFzay5iYXNlLnRpbWVzID8gdGFzay5iYXNlLnRpbWVzIDogdGFzay50aW1lc1xyXG4gICAgICAgIH0vJHt0YXNrLmJhc2UudGltZXN9KWA7XHJcbiAgICAgICAgYW1vdW50Rm9udC52YWx1ZSA9IFwieFwiICsgdGFzay5iYXNlLnJld2FyZC5jb3VudDtcclxuICAgICAgICBpY29uLnNraW4gPSB0YXNrLmJhc2UucmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgIGJveC53aWR0aCA9IGRlc2Mud2lkdGggKyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU2REVcdTVCQjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnb0hvbWUoKSB7XHJcbiAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KHRydWUsICgpID0+IHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5nb0hvbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBjbGVhcjogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1NTZERVx1Njc2NVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ib21lTm9kZURhdGEoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1NkRFXHU1QkI2XHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLmdvX2hvbWUpXHJcbiAgICBwcml2YXRlIGdvSG9tZU5vZGVEYXRhKHVwZGF0ZU91dFRpbWUgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICh1cGRhdGVPdXRUaW1lKSB7XHJcbiAgICAgICAgICAgIC8vXHU4RkQ5XHU5MUNDXHU0RTNCXHU4OTgxXHU2NjJGXHU0RTNBXHU0RTg2XHU1OTA0XHU3NDA2XHU1OTdEXHU1M0NCXHU4QkJGXHU5NUVFXHU1OTMxXHU4RDI1XHVGRjBDXHU2NkY0XHU2NUIwXHU3OUJCXHU1RjAwXHU2NUY2XHU5NUY0XHJcbiAgICAgICAgICAgIHRoaXMub3V0ZXJUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc091dGVyID0gZmFsc2U7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmdvRnJpZW5kKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhpdExhbmRBZGQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0ZWFsQWxsLmxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoVXNlckluZm8uYWRUaW1lcyA+IDEwMCB8fCBVc2VySW5mby5jb250aW51b3VzQWRUaW1lcyA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJmdWxsX1NjcmVlblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImJvdHRvbV9hZHZlcnRpc2VtZW50XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuR2F0aGVyRGVzY1ZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuc3RlYWxBbGwubGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbW9uZDogdGhpcy5zdGVhbEFsbC5yZXdhcmREaWFtb25kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogdGhpcy5zdGVhbEFsbC5uaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogYXN5bmMgKGRvdWJsZTogYm9vbGVhbiwgdGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG91YmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRSZXdhcmQ6IHsgaWQ6IG51bWJlcjsgYW1vdW50OiBudW1iZXIgfVtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZlcnRpc2VUaW1lczogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFtb25kOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvbGQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ID0gYXdhaXQgSHR0cENvbnRyb2wuaW5zdC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTdGVhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJsYW5kU3RlYWxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZElkOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkRGlhbW9uZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTY1MzZcdTgzQjdcdTc2ODRcdTY5MERcdTcyNjlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXdhcmRMaXN0OiBhbnlbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXYXJlaG91c2VTZXJ2aWNlLmFkZChkLnBsYW50SWQsIGQuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uZGlhbW9uZCArPSBkLnJld2FyZERpYW1vbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZERpYW1vbmQgKz0gZC5yZXdhcmREaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoZC5wbGFudElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBkLmFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV3YXJkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXRGbG9hdFJld2FyZE9ialxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFkUmV3YXJkLmZvckVhY2goKGRhdGEsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZERpYW1vbmQgJiYgZGF0YS5pZCA9PSBDb25maWdHYW1lLmRpYW1vbmRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hbW91bnQgKz0gYWRkRGlhbW9uZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmFkUmV3YXJkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkdhdGhlckRlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTNCQlx1OTBCQlx1NUM0NVx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdvVG9OZWlnaGJvcigpIHtcclxuICAgICAgICB0aGlzLmhpZGVHdWlkZUhhbmQoKTtcclxuICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcodHJ1ZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZWFsQWxsID0geyBsaXN0OiBbXSwgcmV3YXJkRGlhbW9uZDogMCwgbmlja25hbWU6IG51bGwgfTtcclxuXHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubmVpZ2hib3IsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJnYXRoZXJcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IFJldHVybk5laWdoYm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cdTc5QkJcdTVGMDBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29GcmllbmQoZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgzMDAsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LnNldE92ZXJWaWV3KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLmdvX2ZyaWVuZF9ob21lKVxyXG4gICAgcHJpdmF0ZSBnb0ZyaWVuZExpc3RlbihkOiBSZXR1cm5OZWlnaGJvciwgZnJpZW5kRGF0YTogRnJpZW5kRGF0YSkge1xyXG4gICAgICAgIHRoaXMub3V0Q291bnREb3duTnVtYmVyID0gNjA7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGVhbEFsbCA9IHsgbGlzdDogW10sIHJld2FyZERpYW1vbmQ6IDAsIG5pY2tuYW1lOiBudWxsIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNPdXRlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nb0ZyaWVuZChkLCBmcmllbmREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTNCQlx1NjcwQlx1NTNDQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdvRnJpZW5kKGQ/OiBSZXR1cm5OZWlnaGJvciwgZnJpZW5kRGF0YT86IEZyaWVuZERhdGEpIHtcclxuICAgICAgICBsZXQgbGFuZHMgPSB0aGlzLmxhbmRMaXN0LFxyXG4gICAgICAgICAgICB1c2VyTGFuZHMgPSBMYW5kU2VydmljZS5saXN0O1xyXG4gICAgICAgIGxldCBvdGhlckxhbmRzOiBNYXA8bnVtYmVyLCBMYW5kT2JqPiA9IG5ldyBNYXAoKTtcclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGQubGFuZHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJMYW5kcy5zZXQoZS5pZCwgZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vdXRlclRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0aGlzLnZpdGFsaXR5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hbnlEb29yLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1c2VyTGFuZHMuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZC5tYXR1cmVUaW1lTGVmdCAtPSAoRGF0ZS5ub3coKSAtIHRoaXMub3V0ZXJUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5tYXR1cmVUaW1lTGVmdCA8IDApIGQubWF0dXJlVGltZUxlZnQgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy52aXRhbGl0eUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYW55RG9vci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nb0hvbWVCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsYW5kcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsYW5kID0gbGFuZHNbeF07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBsYW5kLmlzT3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGFuZC5zdGVhbFVpZCA9IGQudWlkO1xyXG4gICAgICAgICAgICAgICAgbGFuZC51cGRhdGVEYXRhKHsgbGlzdDogb3RoZXJMYW5kcyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZC5wcm90ZWN0ZWRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZC5jYW5TdGVhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmQudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZC5jYW5TdGVhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsYW5kLmNhblN0ZWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsYW5kLmlzT3V0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxhbmQuc3RlYWxVaWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbGFuZC51cGRhdGVEYXRhKHsgbGlzdDogbnVsbCB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFuZC5wbGFudEljb25BbmkoQm9vbGVhbihsYW5kLmRhdGE/LnByb2R1Y3RJZCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVBbGxTdGF0ZUljb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdXRlcikge1xyXG4gICAgICAgICAgICAvL1x1OTY5MFx1ODVDRlx1NEVGQlx1NTJBMVxyXG4gICAgICAgICAgICB0aGlzLnRhc2tCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vXHU2NjNFXHU3OTNBXHU0RUZCXHU1MkExXHJcbiAgICAgICAgICAgIHRoaXMudGFza0JveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRnJpZW5kVmlldyhkLCBmcmllbmREYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTNCQlx1NTk3RFx1NTNDQlx1NUJCNlx1OEZEOFx1NjYyRlx1ODFFQVx1NURGMVx1NUJCNlx1NzY4NFx1NzU0Q1x1OTc2Mlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZyaWVuZFZpZXcoZD86IFJldHVybk5laWdoYm9yLCBmcmllbmREYXRhPzogRnJpZW5kRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG5pY2tuYW1lID0gZD8ubmlja25hbWUsXHJcbiAgICAgICAgICAgIHBlZElkID0gZD8uZG9nSWQsXHJcbiAgICAgICAgICAgIGF2YXRhciA9IGZyaWVuZERhdGE/LmF2YXRhciB8fCBkPy5hdmF0YXIgfHwgXCJtYWluX3NjZW5lL2ltZ19kZWZhdWx0UG9ydHJhaXQucG5nXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvcEJveCA9IHRoaXMub3JkZXJCb3gucGFyZW50IGFzIExheWEuQm94LFxyXG4gICAgICAgICAgICBtb25leUJveCA9IHRvcEJveC5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5X2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgY291bnREb3duID0gdG9wQm94LmdldENoaWxkQnlOYW1lKFwiY291bnRfZG93blwiKSBhcyBMYXlhLkxhYmVsLFxyXG4gICAgICAgICAgICBvcmRlckJveCA9IHRoaXMub3JkZXJCb3guZ2V0Q2hpbGRCeU5hbWUoXCJvcmRlcl9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIGZyaWVuZE5hbWUgPSB0aGlzLm9yZGVyQm94LmdldENoaWxkQnlOYW1lKFwiZnJpZW5kX25hbWVcIikgYXMgTGF5YS5MYWJlbCxcclxuICAgICAgICAgICAgYm90dG9tTGlzdDogTGF5YS5JbWFnZVtdID0gW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ0YXNrXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEJ5TmFtZShcIm9yZGVyX2JveFwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJmcmllbmRzXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEJ5TmFtZShcIm1haWxcIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICBpZiAodGhpcy5pc091dGVyKSB7XHJcbiAgICAgICAgICAgIGZyaWVuZE5hbWUudGV4dCA9IGAke25pY2tuYW1lfVx1NzY4NFx1NTE5Q1x1NTczQWA7XHJcbiAgICAgICAgICAgIG9yZGVyQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZnJpZW5kTmFtZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbW9uZXlCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb3VudERvd24udmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0ZWFsQWxsLm5pY2tuYW1lID0gbmlja25hbWU7XHJcblxyXG4gICAgICAgICAgICBjb3VudERvd24udGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5vdXRDb3VudERvd25OdW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGF2YXRhcikgdGhpcy5hdmF0YXJOb2RlLnNraW4gPSBhdmF0YXI7XHJcbiAgICAgICAgICAgIGlmIChwZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJkb2dfYW5pXCIpIGFzIExheWEuQW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICApLnNvdXJjZSA9IGByZXMvZG9nXyR7cGVkSWR9LmF0bGFzYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAodGhpcy5wZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIikgYXMgTGF5YS5JbWFnZSkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmZpZ3VyZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmlndXJlQm94Mi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmFzdEdldEJ0bi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19vbmdrZXlTdGVlbC5wbmdcIjtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5sb29wKDEwMDAsIHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQsIFtjb3VudERvd25dKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhc3RHZXRCdG4uc2tpbiA9IFwibWFpbl9zY2VuZS9pbWdfb25na2V5R2V0LnBuZ1wiO1xyXG4gICAgICAgICAgICB0aGlzLmZpZ3VyZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWd1cmVCb3gyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm91dENvdW50RG93bk51bWJlciA9IDYwO1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQpO1xyXG4gICAgICAgICAgICBvcmRlckJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZnJpZW5kTmFtZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1vbmV5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb3VudERvd24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8uYXZhdGFyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IFVzZXJJbmZvLmF2YXRhcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhdGFyTm9kZS5za2luID0gYG1haW5fc2NlbmUvaW1nX2RlZmF1bHRQb3J0cmFpdC5wbmdgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby53YXJlUGV0SWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGV0Qm94LmdldENoaWxkQnlOYW1lKFwiZG9nX2FuaVwiKSBhcyBMYXlhLkFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgKS5zb3VyY2UgPSBgcmVzL2RvZ18ke1VzZXJJbmZvLndhcmVQZXRJZH0uYXRsYXNgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICh0aGlzLnBldEJveC5nZXRDaGlsZEJ5TmFtZShcImJveFwiKSBhcyBMYXlhLkltYWdlKS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYm90dG9tTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuZGlzYWJsZWQgPSB0aGlzLmlzT3V0ZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9cdTUwMTJcdThCQTFcdTY1RjZcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTAxMlx1OEJBMVx1NjVGNlx1N0VEM1x1Njc1RlxyXG4gICAgICogQHBhcmFtIGxiXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgb3V0Q291bnREb3duRXZlbnQobGI6IExheWEuTGFiZWwpIHtcclxuICAgICAgICB0aGlzLm91dENvdW50RG93bk51bWJlci0tO1xyXG4gICAgICAgIGxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMub3V0Q291bnREb3duTnVtYmVyKTtcclxuICAgICAgICBpZiAodGhpcy5vdXRDb3VudERvd25OdW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICBMYXlhLnRpbWVyLmNsZWFyKHRoaXMsIHRoaXMub3V0Q291bnREb3duRXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmd1aWRIYW5kQW5pPy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRTaGFyZUljb25BbmkoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNyZWdpb24gXHU1OTdEXHU1M0NCXHU1OTU2XHU1MkIxXHU2M0QwXHU3OTNBXHU1MjlGXHU4MEZEXHJcbiAgICAvKipcclxuICAgICAqIFx1NTk3RFx1NTNDQlx1OTA4MFx1OEJGN1x1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGZyaWVuZEludml0ZURhdGE6IEludml0ZURhdGFbXSA9IFtdO1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTU5NTZcdTUyQjFcdTVGMTVcdTVCRkNcdTUyQThcdTc1M0JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXdhcmRTaGFyZUd1aWRlQW5pbWF0aW9uOiBMYXlhLlRpbWVMaW5lO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1M0JCXHU1OTdEXHU1M0NCXHU1OTU2XHU1MkIxXHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ29GcmllbmRSZXdhcmRWaWV3KCkge1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzUmV3YXJkVmlldywge1xyXG4gICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0OiB0aGlzLmZyaWVuZEludml0ZURhdGEsXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU1OTdEXHU1M0NCXHU1MjA2XHU0RUFCXHU1RjE1XHU1QkZDXHJcbiAgICAgKi9cclxuICAgIEBDb3JlLmV2ZW50T24oRXZlbnRNYXBzLnVwZGF0ZV9mcmllbmRfc2hhcmVfZ3VpZGUpXHJcbiAgICBwcml2YXRlIGFzeW5jIGZyaWVuZFNoYXJlR3VpZGUoaW5pdDogYm9vbGVhbiwgZGF0YT86IEludml0ZURhdGFbXSkge1xyXG4gICAgICAgIGlmIChpbml0KSB7XHJcbiAgICAgICAgICAgIGxldCBkID0gKGF3YWl0IEh0dHBDb250cm9sLmluc3Quc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kSW52aXRlTGlzdCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICB9KSkgYXMgSW52aXRlTGlzdDtcclxuICAgICAgICAgICAgZGF0YSA9IGQubGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mcmllbmRJbnZpdGVEYXRhID0gZGF0YTtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkU2hhcmVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoYXNSZXdhcmQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDM7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAoIWRhdGFbeF0ucmVjZWl2ZWRSZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgIGhhc1Jld2FyZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJld2FyZFNoYXJlSWNvbkFuaShoYXNSZXdhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1OTU2XHU1MkIxXHU1RjE1XHU1QkZDXHU1MkE4XHU3NTNCXHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHJcbiAgICAgKiBAcGFyYW0gc2hvd1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJld2FyZFNoYXJlSWNvbkFuaShzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXdhcmRTaGFyZUd1aWRlLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmV3YXJkU2hhcmVHdWlkZUFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRTaGFyZUd1aWRlQW5pbWF0aW9uID0gTGF5YS5UaW1lTGluZS50byhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJld2FyZFNoYXJlR3VpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgeyByb3RhdGlvbjogMTUgfSxcclxuICAgICAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICA1MDAwXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKHRoaXMucmV3YXJkU2hhcmVHdWlkZSwgeyByb3RhdGlvbjogLTE1IH0sIDMwMCwgbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAudG8odGhpcy5yZXdhcmRTaGFyZUd1aWRlLCB7IHJvdGF0aW9uOiAxNSB9LCAzMDAsIG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKHRoaXMucmV3YXJkU2hhcmVHdWlkZSwgeyByb3RhdGlvbjogMCB9LCAxNTAsIG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkU2hhcmVHdWlkZUFuaW1hdGlvbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV3YXJkU2hhcmVHdWlkZUFuaW1hdGlvbj8uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZFNoYXJlR3VpZGVBbmltYXRpb24gPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnJld2FyZFNoYXJlR3VpZGUudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2VuZHJlZ2lvblxyXG59XHJcbiIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIZWFydGJlYXQgZnJvbSBcInNyYy9jb21tb24vSGVhcnRiZWF0XCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgVGFza1NlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9UYXNrU2VydmljZVwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgTWFpblZpZXcgZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJpZW5kc1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyaWVuZHNWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRCb3gsIHRpcHM6XCJcdTZERkJcdTUyQTBcdTU5N0RcdTUzQ0JcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZEJveDogTGF5YS5Cb3g7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTUyMTdcdTg4NjhcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3Q7XHJcbiAgICAvKiogQHByb3Age25hbWU6dXNlcktleSwgdGlwczpcIlx1NzUyOFx1NjIzN1x1NTNDQlx1NjBDNVx1NzgwMVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdXNlcktleTogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTprZXlJbnB1dE5vZGUsIHRpcHM6XCJcdTkwODBcdThCRjdcdTc4MDFcdThGOTNcdTUxNjVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGtleUlucHV0Tm9kZTogTGF5YS5UZXh0SW5wdXQ7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkRnJpZW5kLCB0aXBzOlwiXHU2REZCXHU1MkEwXHU1OTdEXHU1M0NCXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRGcmllbmQ6IExheWEuSW1hZ2U7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmVtcHR5X2xiLCB0aXBzOlwiXHU3QTdBXHU3Njg0XHU2M0QwXHU3OTNBXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBlbXB0eV9sYjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIDFcdTY2MkZcdTU5N0RcdTUzQ0JcdTUyMTdcdTg4NjggMiBcdTUyQTBcdTU5N0RcdTUzQ0IgIDNcdTUyMjBcdTk2NjRcdTU5N0RcdTUzQ0IgKi9cclxuICAgIHByaXZhdGUgdmlld1N0YXRlOiAxIHwgMiB8IDMgPSAxO1xyXG5cclxuICAgIC8vXHU4RkQ5XHU0RTI0XHU0RTJBXHU1OTdEXHU1M0NCIFx1NjcwOVx1NzBCOVx1NEU3MVx1RkYwQ1x1OTcwMFx1ODk4MVx1NEYxOFx1NTMxNlxyXG4gICAgcHJpdmF0ZSBmcmllbmRzOiBGcmllbmREYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgZnJpZW5kc0xpc3Q6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKGRhdGE6IHtcclxuICAgICAgICBmcmllbmREYXRhOiBGcmllbmRMaXN0RGF0YTtcclxuICAgICAgICAvKiogdHlwZVx1NEUzQTFcdTYyNTNcdTVGMDBcdTUyQTBcdTU5N0RcdTUzQ0JcdTc1NENcdTk3NjIgKi9cclxuICAgICAgICB0eXBlOiBudW1iZXI7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzID0gZGF0YS5mcmllbmREYXRhLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5mcmllbmRzTGlzdCA9IHRoaXMuZnJpZW5kcztcclxuICAgICAgICB0aGlzLnVwZGF0ZUxpc3REYXRhKCk7XHJcbiAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkQm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmZyaWVuZHNMaXN0O1xyXG4gICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5pdGVtUmVuZGVyKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVzZXJLZXkudGV4dCA9IGBcdTYyMTFcdTc2ODRcdTUzQ0JcdTYwQzVcdTc4MDFcdUZGMUEke1VzZXJJbmZvLmtleX1gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEudHlwZSk7XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSAmJiBkYXRhLnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEZyaWVuZEV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNFbXB0eSgpIHtcclxuICAgICAgICB0aGlzLmVtcHR5X2xiLnZpc2libGUgPSAhdGhpcy5pdGVtTGlzdC5hcnJheS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVMaXN0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLmZyaWVuZHNMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGIuYXBwbHlJbmcgKiAxMDAwMDAgLSBhLmFwcGx5SW5nICogMTAwMDAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXRlbVJlbmRlcihjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuaXRlbUxpc3QuYXJyYXlbaV07XHJcblxyXG4gICAgICAgIGxldCBuZXdCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwibmV3X2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgaGVhcnRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiaGVhcnRfYm94XCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIGdvUGxheUJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJnb19wbGF5X2J0blwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBhcHBseUJ0biA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJhcHBseV9idG5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgZGVsQnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImRlbF9idG5cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBoZWFydEJveC52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgYXBwbHlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGRlbEJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhPy5hdmF0YXIpIChjZWxsLmdldENoaWxkQnlOYW1lKFwiaGVhZFwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZGF0YS5hdmF0YXI7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBkYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwibHZcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IChkYXRhLm9yZGVyTGV2ZWwgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChoZWFydEJveC5nZXRDaGlsZEJ5TmFtZShcInZhbFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gKGRhdGEuaW50aW1hY3kgfHwgMCkgKyBcIlwiO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPVxyXG4gICAgICAgICAgICBkYXRhLmdhaW5EaWFtb25kICsgXCJcIjtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZWxfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgIGdvUGxheUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnZpZXdTdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBnb1BsYXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBhcHBseUJ0bi5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGFwcGx5QnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBoZWFydEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRlbEJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1N0YXRlID09IDEgfHwgdGhpcy52aWV3U3RhdGUgPT0gMykge1xyXG4gICAgICAgICAgICAvL1x1NzUzM1x1OEJGNyBcdTRFMkRcclxuICAgICAgICAgICAgaWYgKGRhdGEuYXBwbHlJbmcpIHtcclxuICAgICAgICAgICAgICAgIG5ld0JveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgKG5ld0JveC5nZXRDaGlsZEJ5TmFtZShcInBhc3RfYnRuXCIpIGFzIExheWEuSW1hZ2UpLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgKG5ld0JveC5nZXRDaGlsZEJ5TmFtZShcImlnbm9yZVwiKSBhcyBMYXlhLkltYWdlKS5kYXRhU291cmNlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGhlYXJ0Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGdvUGxheUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1x1NURGMlx1N0VDRlx1NjYyRlx1NTk3RFx1NTNDQlxyXG4gICAgICAgICAgICAgICAgbmV3Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5ld0JveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZpZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkZF9mcmllbmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkRnJpZW5kRXZlbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlbF9mcmllbmRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRnJpZW5kRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVzY19idG5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzRGVzY1ZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblJld2FyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmV3YXJkX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuUmV3YXJkKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvcHlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2VhcmNoX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYXBwbHlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5RXZlbnQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGFzdF9idG5cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dGcmllbmQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVsX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVGcmllbmQoZS50YXJnZXQgYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaWdub3JlXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlnbm9yZShlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19wbGF5X2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpdEZyaWVuZChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVGcmllbmRFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuYWRkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnZpZXdTdGF0ZSA9IDM7XHJcbiAgICAgICAgbGV0IG5ld0Y6IEZyaWVuZERhdGFbXSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kcy5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZC5hcHBseUluZykgbmV3Ri5wdXNoKGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSBuZXdGO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuaGVpZ2h0ID0gOTE0O1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuYWRkRnJpZW5kLnNraW4gPSBgZ2FtZS9pbWdfZnJpZW5kQnRuLnBuZ2A7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRGcmllbmRFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3U3RhdGUgPT0gMyB8fCB0aGlzLnZpZXdTdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmlld1N0YXRlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDkxNDtcclxuICAgICAgICAgICAgdGhpcy5hZGRGcmllbmQuc2tpbiA9IGBnYW1lL2ltZ19hZGRCdG4ucG5nYDtcclxuICAgICAgICAgICAgdGhpcy5hZGRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJveC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0VtcHR5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3U3RhdGUgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hZGRCb3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmhlaWdodCA9IDU5MDsgLy85MTRcclxuICAgICAgICAgICAgdGhpcy5hZGRGcmllbmQuc2tpbiA9IGBnYW1lL2ltZ19mcmllbmRCdG4ucG5nYDtcclxuICAgICAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NUZGRFx1NzU2NVx1NTk3RFx1NTNDQlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlnbm9yZSh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZERlbGV0ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmZyaWVuZHMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmllbmRzW3hdLnVpZCA9PSBkYXRhLnVpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICBIZWFydGJlYXQudXBkYXRlTXNnKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9wZW5SZXdhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEludml0ZUxpc3QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IEludml0ZUxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5GcmllbmRzUmV3YXJkVmlldywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogZC5saXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAuZnJpZW5kTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkOiBGcmllbmRMaXN0RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHMgPSBkLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSB0aGlzLmZyaWVuZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdERhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZnJpZW5kc0xpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNFbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEJCRlx1OTVFRVx1NTk3RFx1NTNDQlx1NUJCNlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHZpc2l0RnJpZW5kKHRhcmdldDogTGF5YS5JbWFnZSkge1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBDb3JlLnZpZXcuc2V0T3ZlclZpZXcodHJ1ZSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhU291cmNlIGFzIEZyaWVuZERhdGE7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWFpblZpZXcuaW5zdC5pc091dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5nb0hvbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRWaXNpdCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5GcmllbmRzVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMuZ29fZnJpZW5kX2hvbWUsIFtkLCBkYXRhXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5zZXRPdmVyVmlldyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5nb19ob21lLCBbdHJ1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUyMjBcdTk2NjRcdTU5N0RcdTUzQ0JcclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWxldGVGcmllbmQodGFyZ2V0OiBMYXlhLkltYWdlKSB7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgdGV4dDogXCJcdTc4NkVcdThCQTRcdTg5ODFcdTUyMjBcdTk2NjRcdTU5N0RcdTUzQ0JcdTU0MTdcdUZGMUZcIixcclxuICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZERlbGV0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJpZW5kSWQ6IGRhdGEudWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmZyaWVuZHMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyaWVuZHNbeF0udWlkID09IGRhdGEudWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmllbmRzLnNwbGljZSh4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5hcnJheSA9IHRoaXMuZnJpZW5kc0xpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsQ2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkwMUFcdThGQzdcdTU5N0RcdTUzQ0JcdTc1MzNcdThCRjdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhbGxvd0ZyaWVuZCh0YXJnZXQ6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZEFsbG93LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyaWVuZElkOiBkYXRhLnVpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYXBwbHlJbmcgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiQWRkZnJpZW5kc1wiIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIEhlYXJ0YmVhdC51cGRhdGVNc2coKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUzM1x1OEJGN1x1NkRGQlx1NTJBMFx1NTk3RFx1NTNDQlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFwcGx5RXZlbnQodGFyZ2V0OiBMYXlhLkltYWdlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YVNvdXJjZSBhcyBGcmllbmREYXRhO1xyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRBcHBseSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBmcmllbmRJZDogZGF0YS51aWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogeyBzdGF0dXM6IGJvb2xlYW47IHRhc2tTdGF0ZTogYm9vbGVhbiB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyaWVuZHNMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTVERjJcdTUzRDFcdTkwMDFcdTZGQzBcdTYwQzVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChkLnRhc2tTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDA5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjQxQ1x1N0QyMlx1NTk3RFx1NTNDQlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZWFyY2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleUlucHV0Tm9kZS50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NTNDQlx1NjBDNVx1NzgwMVx1NEUwRFx1ODBGRFx1NEUzQVx1N0E3QVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5rZXlJbnB1dE5vZGUudGV4dCA9PSBVc2VySW5mby5rZXkpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTY0MUNcdTdEMjJcdTgxRUFcdTVERjFcdTVFNzJcdTU1NjVcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRTZWFyY2gsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiB0aGlzLmtleUlucHV0Tm9kZS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGQ6IEZyaWVuZERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJpZW5kc0xpc3QgPSBbZF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5mcmllbmRzTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3B5KCkge1xyXG4gICAgICAgIGxldCBhOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgYS52YWx1ZSA9IFVzZXJJbmZvLmtleTtcclxuICAgICAgICBhLnNlbGVjdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgICAgICBhLnJlbW92ZSgpO1xyXG4gICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU1OTBEXHU1MjM2XHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBHYXRoZXJEZXNjVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2F0aGVyRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnN0ZWFsR2V0LCB0aXBzOlwiXHU1MDc3XHU4M0RDXHU2MjE2XHU4M0I3XHU1Rjk3XCIsIHR5cGU6Tm9kZSx9Ki9cclxuICAgIHByaXZhdGUgc3RlYWxHZXQ6IExheWEuUGFuZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6b3JkZXIsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTgzQjdcdTVGOTdcIiwgdHlwZTpOb2RlLH0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlcjogTGF5YS5QYW5lbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjbG9zZUJ0biwgdGlwczpcIlx1NTE3M1x1OTVFRFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGUsfSovXHJcbiAgICBwcml2YXRlIGNsb3NlQnRuOiBMYXlhLkltYWdlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkQnRuLCB0aXBzOlwiXHU1M0NDXHU1MDBEXHU1RTdGXHU1NDRBXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZSx9Ki9cclxuICAgIHByaXZhdGUgYWRCdG46IExheWEuSW1hZ2U7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbSwgdGlwczpcIlx1NzI2OVx1NTRDMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOlByZWZhYn0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtOiBMYXlhLlByZWZhYjtcclxuXHJcbiAgICB0eXBlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRhdGE6IHtcclxuICAgICAgICBkYXRhOiBhbnk7XHJcbiAgICAgICAgY2FsbDogRnVuY3Rpb247XHJcbiAgICAgICAgZGlhbW9uZDogbnVtYmVyO1xyXG4gICAgICAgIGNsb3NlRXZlbnQ6IEZ1bmN0aW9uO1xyXG4gICAgICAgIG5pY2tuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgdHlwZTogbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIHByaXZhdGUgY2FuQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIG9uT3BlbmVkKGQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0ZWFsR2V0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9yZGVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkO1xyXG5cclxuICAgICAgICB0aGlzLnN0ZWFsR2V0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9yZGVyLnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5hZEJ0bi5kaXNhYmxlZCA9ICFVc2VySW5mby5hZHZlcnRpc2VUaW1lcztcclxuICAgICAgICB0aGlzLmFkQnRuLmFjdGl2ZSA9IEJvb2xlYW4oVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMpO1xyXG5cclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMzAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAzIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMiB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiaGFsZl9zY3JlZW5fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJib3R0b21fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAvL1x1OEJBMlx1NTM1NVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2xvc2VCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgKHRoaXMub3JkZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkZXNjXCIpLmdldENoaWxkQnlOYW1lKFwibGIyXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5vcmRlckxldmVsICsgMVxyXG4gICAgICAgICAgICAgICAgfWA7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgb3JkZXIgPSBUYWJsZUFuYWx5emUudGFibGUoXCJvcmRlclwiKS5nZXQoVXNlckluZm8ub3JkZXJMZXZlbCArIDEpO1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicHJpY2VfYm94XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEF0KDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZVxyXG4gICAgICAgICAgICAgICAgKS5za2luID0gVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKS5pY29uO1xyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwicHJpY2VfYm94XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEF0KDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcImxiXCIpIGFzIExheWEuTGFiZWxcclxuICAgICAgICAgICAgICAgICkudGV4dCA9IFwieFwiICsgZC5kYXRhLmdvbGQ7XHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZV9ib3hcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQXQoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldENoaWxkQnlOYW1lKFwibGJcIikgYXMgTGF5YS5MYWJlbFxyXG4gICAgICAgICAgICAgICAgKS50ZXh0ID0gXCJ4XCIgKyBkLmRhdGEuZGlhbW9uZDtcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRDaGlsZEJ5TmFtZShcInByaWNlX2JveFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRBdCgxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2VcclxuICAgICAgICAgICAgICAgICkuc2tpbiA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChDb25maWdHYW1lLmRpYW1vbmRJZCkuaWNvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgLy9cdTUwNzdcdTgzRENcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlYWxHZXQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAodGhpcy5zdGVhbEdldC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcIlx1NTA3N1x1ODNEQ1x1NjIxMFx1NTI5RlwiO1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuc3RlYWxHZXQuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BfbGJcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGBcdTRGNjBcdTZGNUNcdTUxNjVcdTRFODYke1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YT8ubmlja25hbWUgfHwgXCJcIlxyXG4gICAgICAgICAgICAgICAgfS4uLlx1NzY4NFx1ODNEQ1x1NTczMFx1RkYwQ1x1NTA3N1x1OEQ3MFx1NEU4Nlx1RkYxQWA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlc2NMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgLy9cdTY1MzZcdTgzRENcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlYWxHZXQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAodGhpcy5zdGVhbEdldC5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcIlx1NTE5Q1x1NEY1Q1x1NzI2OVx1NjIxMFx1NzE5RlwiO1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuc3RlYWxHZXQuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BfbGJcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJcdTkwMUFcdThGQzdcdTYwQThcdThGOUJcdTUyRTRcdTUyQjNcdTRGNUNcdUZGMENcdTY1MzZcdTgzQjdcdTRFODZcdUZGMUFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVzY0xpc3QoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUzMlx1NjdEM1x1NTA3N1x1OEQ3MFx1NjIxNlx1NjYyRlx1NjUzNlx1ODNCN1x1NzY4NFx1NTE5Q1x1NEY1Q1x1NzI2OVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZURlc2NMaXN0KCkge1xyXG4gICAgICAgIC8vMjggIDIwM1xyXG4gICAgICAgIGxldCBsaXN0OiB7IHBsYW50SWQ6IG51bWJlcjsgYW1vdW50OiBudW1iZXIgfVtdID0gdGhpcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgbGV0IF94ID0gMCxcclxuICAgICAgICAgICAgX3kgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbU5vZGU6IExheWEuQm94ID0gdGhpcy5pdGVtLmNyZWF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoX3ggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICBfeSArPSAxO1xyXG4gICAgICAgICAgICAgICAgX3ggPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpdGVtTm9kZS54ID0gMjggKyBfeCAqIDE5MDtcclxuICAgICAgICAgICAgaXRlbU5vZGUueSA9IDIwMyArIF95ICogOTU7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGxhbnQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQobGlzdFt4XS5wbGFudElkKTtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpY29uLnNraW4gPSBwbGFudC5pY29uO1xyXG4gICAgICAgICAgICBpY29uLnNjYWxlKDAuNywgMC43KTtcclxuICAgICAgICAgICAgaWNvbi5hbmNob3JYID0gMC41O1xyXG4gICAgICAgICAgICAoaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke2xpc3RbeF0uYW1vdW50fWA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0ZWFsR2V0LmFkZENoaWxkKGl0ZW1Ob2RlKTtcclxuXHJcbiAgICAgICAgICAgIF94Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGIgPSB0aGlzLnN0ZWFsR2V0LmdldENoaWxkQnlOYW1lKFwiYm90dG9tX2xiXCIpIGFzIExheWEuTGFiZWw7XHJcbiAgICAgICAgbGIueSArPSBfeSAqIDk1O1xyXG4gICAgICAgIChsYi5nZXRDaGlsZEJ5TmFtZShcImRpYW1vbmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPVxyXG4gICAgICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5kaWFtb25kSWQpLmljb247XHJcblxyXG4gICAgICAgIChsYi5nZXRDaGlsZEJ5TmFtZShcImRpYW1vbmRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke1xyXG4gICAgICAgICAgICB0aGlzLmRhdGE/LmRpYW1vbmQgfHwgMFxyXG4gICAgICAgIH1gO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuR2F0aGVyRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS50eXBlICE9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlY2VpdmVcIjpcclxuICAgICAgICAgICAgY2FzZSBcInJlY2VpdmVfZG91YmxlXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHU5ODg2XHU1M0Q2XHU4QkEyXHU1MzU1XHJcbiAgICAgICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAub3JkZXJSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJJZDogVXNlckluZm8ub3JkZXJMZXZlbCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQubmFtZSA9PSBcInJlY2VpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5HYXRoZXJEZXNjVmlldyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKGUudGFyZ2V0Lm5hbWUgIT0gXCJyZWNlaXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmNsb3NlQWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09IFwicmVjZWl2ZV9kb3VibGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwodHJ1ZSwgZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTY1MzZcdTgzRENcdTUzQ0NcdTUwMERcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5sYW5kR2F0aGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcImdhdGhlclwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5kSWQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkUmV3YXJkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY2FsbCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5hZFJld2FyZC5mb3JFYWNoKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5kaWFtb25kICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmlkID09IENvbmZpZ0dhbWUuZGlhbW9uZElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5hbW91bnQgKz0gdGhpcy5kYXRhLmRpYW1vbmQgKiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5hZFJld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuR2F0aGVyRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5jbG9zZUFkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuR2F0aGVyRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuY2xvc2VBZCxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2xvc2VFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuY2xvc2VFdmVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS50eXBlID09IDIpIHtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX09yZGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3VpZGVWaWV3RGF0YSB7XHJcbiAgICBub2RlTGlzdDogTGF5YS5JbWFnZVtdO1xyXG4gICAgY2FsbDogRnVuY3Rpb247XHJcbn1cclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBHdWlkZVZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1aWRlVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvL1x1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmd1aWRlSGFuZCwgdGlwczpcIlx1NjVCMFx1NjI0Qlx1NUYxNVx1NUJGQ1x1NjI0Qlx1NjMwN1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ3VpZGVIYW5kOiBMYXlhLlNwcml0ZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVzY0xiLCB0aXBzOlwiXHU2M0NGXHU4RkYwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkZXNjTGI6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm5vZGVCb3gsIHRpcHM6XCJcdTYzQ0ZcdThGRjBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIG5vZGVCb3g6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGd1aWRBbmk6IExheWEuVGltZUxpbmU7XHJcbiAgICBwcml2YXRlIG9sZFBhcmVudDogTGF5YS5Cb3g7XHJcbiAgICBwcml2YXRlIG9sZFpPcmRlcjogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdGV4dExpc3QgPSBbXHJcbiAgICAgICAgXCJcdTYwQThcdTc2ODRcdTk0QjFcdTUzMDVcdTRGNTlcdTk4OURcIixcclxuICAgICAgICBcIlx1NUI4Q1x1NjIxMFx1OEJBMlx1NTM1NVx1ODNCN1x1NUY5N1x1OTRCQlx1NzdGM1x1NTNFRlx1NEVFNVx1NTE1MVx1NjM2Mlx1N0VBMlx1NTMwNVx1MzAwMlwiLFxyXG4gICAgICAgIFwiXHU4RkQ5XHU5MUNDXHU2NjJGXHU0RUQzXHU1RTkzLFx1NjUzNlx1ODNCN1x1NzY4NFx1NEY1Q1x1NzI2OVx1OTBGRFx1NUI1OFx1NjUzRVx1NTcyOFx1OEZEOVx1OTFDQ1x1RkYwQ1x1NTFGQVx1NTUyRVx1NEY1Q1x1NzI2OVx1NEU1Rlx1NTcyOFx1OEZEOVx1OTFDQ1x1MzAwMlwiLFxyXG4gICAgICAgIFwiXHU4RkQ5XHU5MUNDXHU2NjJGXHU5NkM2XHU1RTAyLFx1OEQyRFx1NEU3MFx1NzlDRFx1NUI1MFx1MzAwMVx1NzJEN1x1N0NBRVx1NzY4NFx1NTczMFx1NjVCOVx1OEZEOFx1NjcwOVx1NjcwMFx1OTFDRFx1ODk4MVx1NzY4NFx1OTRCMVx1NUU4NFx1NEU1Rlx1NTcyOFx1OEZEOVx1OTFDQyxcdTYzRDBcdTczQjBcdTc2ODRcdTY1RjZcdTUwMTlcdTYwQThcdTRGMUFcdTdFQ0ZcdTVFMzhcdTY3NjVcdTc2ODRcdTMwMDJcIixcclxuICAgICAgICBcIlx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1NTcyOFx1OEZEOVx1OTFDQyxcdTU3MUZcdTU3MzBcdTdCNDlcdTdFQTdcdThEOEFcdTlBRDgsXHU4RDhBXHU4MEE1XHU2QzgzXHVGRjBDXHU2NTM2XHU4M0I3XHU1QzMxXHU4RDhBXHU1OTFBXHUzMDAyXCIsXHJcbiAgICAgICAgXCJcdThGRDlcdTkxQ0NcdTY2MkZcdTYwQThcdTc2ODRcdTUxOUNcdTU3M0FcdTMwMDJcdTc5Q0RcdTY5MERcdTMwMDFcdTY1MzZcdTgzQjdcdTkwRkRcdTU3MjhcdThGRDlcdTkxQ0MsXHU2MDg0XHU2MDg0XHU1NDRBXHU4QkM5XHU0RjYwXHU4RkQ5XHU1NzU3XHU1NzMwXHU2NTM2XHU4M0I3XHU3Njg0XHU2NUY2XHU1MDE5XHU1M0VGXHU4MEZEXHU0RjFBXHU0RUE3XHU1MUZBXHU5NEJCXHU3N0YzXHU1NEU2XHUzMDAyXCIsXHJcbiAgICAgICAgXCJcdTYwQThcdTc2ODRcdTRFRkJcdTUyQTFcIixcclxuICAgICAgICBcIlx1NjBBOFx1NzY4NFx1NEZFMVx1NEVGNlwiLFxyXG4gICAgICAgIFwiXHU4RkQ5XHU5MUNDXHU1M0VGXHU0RUU1XHU1M0JCXHU1MjJCXHU0RUJBXHU3Njg0XHU1MTlDXHU1NzNBXHU4RjZDXHU4RjZDLFx1NUUyRVx1NTIyQlx1NEVCQVx1NjUzNlx1NzY4NFx1ODNEQ1x1OTBGRFx1NUY1Mlx1NjBBOCxcdTRGNDZcdTY2MkZcdTg5ODFcdTVDMEZcdTVGQzNcdTcyRDdcdTcyRDdcdTU0RTZcdTMwMDJcIixcclxuICAgIF07XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhOiBHdWlkZVZpZXdEYXRhO1xyXG4gICAgcHJpdmF0ZSBzdGVwOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB1c2VyU3RlcDogc3RyaW5nW107XHJcblxyXG4gICAgb25PcGVuZWQoZGF0YTogR3VpZGVWaWV3RGF0YSkge1xyXG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghZGF0YS5ub2RlTGlzdCkgZGF0YS5ub2RlTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5ndWlkZUhhbmQuYWxwaGEgPSAwO1xyXG4gICAgICAgIHRoaXMudXNlclN0ZXAgPSBVc2VySW5mby5ndWlkZURhdGEuc3BsaXQoXCJcIik7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJTdGVwLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgOTsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudXNlclN0ZXBbeF0gfHwgdGhpcy51c2VyU3RlcFt4XSA9PSBcIjBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcCA9IHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3VpZEhhbmRBbmkoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0ZXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVN0ZXAoKSB7XHJcbiAgICAgICAgbGV0IHBvczogTGF5YS5Qb2ludDtcclxuICAgICAgICBjb25zdCBwcmVOb2RlID0gdGhpcy5kYXRhLm5vZGVMaXN0W3RoaXMuc3RlcCAtIDFdO1xyXG5cclxuICAgICAgICBpZiAocHJlTm9kZSAmJiB0aGlzLm9sZFBhcmVudCkge1xyXG4gICAgICAgICAgICBwb3MgPSB0aGlzLm9sZFBhcmVudC5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlQm94LmxvY2FsVG9HbG9iYWwobmV3IExheWEuUG9pbnQocHJlTm9kZS54LCBwcmVOb2RlLnkpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLm9sZFBhcmVudC5hZGRDaGlsZEF0KHByZU5vZGUsIHRoaXMub2xkWk9yZGVyKTtcclxuICAgICAgICAgICAgcHJlTm9kZS5wb3MocG9zLngsIHBvcy55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy50ZXh0TGlzdFt0aGlzLnN0ZXBdKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuR3VpZGVWaWV3KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jYWxsKSB0aGlzLmRhdGEuY2FsbCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub2RlID0gdGhpcy5kYXRhLm5vZGVMaXN0W3RoaXMuc3RlcF07XHJcbiAgICAgICAgdGhpcy5vbGRaT3JkZXIgPSBub2RlLnpPcmRlcjtcclxuICAgICAgICB0aGlzLm9sZFBhcmVudCA9IG5vZGUucGFyZW50IGFzIExheWEuQm94O1xyXG4gICAgICAgIHBvcyA9IHRoaXMubm9kZUJveC5nbG9iYWxUb0xvY2FsKFxyXG4gICAgICAgICAgICB0aGlzLm9sZFBhcmVudC5sb2NhbFRvR2xvYmFsKG5ldyBMYXlhLlBvaW50KG5vZGUueCwgbm9kZS55KSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGVCb3guYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgbm9kZS5wb3MocG9zLngsIHBvcy55KTtcclxuXHJcbiAgICAgICAgdGhpcy5ndWlkZUhhbmQuc2NhbGVYID0gMTtcclxuICAgICAgICBjb25zdCB0ZXh0UG9zQWRkOiBMYXlhLlBvaW50ID0gbmV3IExheWEuUG9pbnQoKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RlcCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBwb3MueCArPSAyMDA7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSAxNTA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zQWRkLnNldFRvKC0xMDAsIDgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBwb3MueCArPSAyMDA7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSAyNTA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zQWRkLnNldFRvKC0zMDAsIDgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBwb3MueCArPSAyMDA7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSAyNTA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zQWRkLnNldFRvKC0yMDAsIDgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBwb3MueCArPSAtMTAwO1xyXG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gMjUwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZUhhbmQuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zQWRkLnNldFRvKC00MDAsIDgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBwb3MueCArPSAyMDA7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSAyNTA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zQWRkLnNldFRvKC0yMDAsIDgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICBwb3MueCArPSA2MDA7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSA0NTA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zQWRkLnNldFRvKC0yMDAsIDgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBwb3MueCArPSAxNjA7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSAxMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgdGV4dFBvc0FkZC5zZXRUbygtMjAwLCAtMjgwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICBwb3MueCArPSAxNjA7XHJcbiAgICAgICAgICAgICAgICBwb3MueSArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zQWRkLnNldFRvKC0yMDAsIC0yODApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgIHBvcy54ICs9IDE0MDtcclxuICAgICAgICAgICAgICAgIHBvcy55ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NBZGQuc2V0VG8oLTU2MCwgLTM4MCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLmd1aWRlSGFuZCwgeyB4OiBwb3MueCwgeTogcG9zLnksIGFscGhhOiAxIH0sIDMwMCk7XHJcbiAgICAgICAgdGhpcy5kZXNjTGIuYWxwaGEgPSAwO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8odGhpcy5kZXNjTGIsIHsgYWxwaGE6IDEgfSwgMTUwKTtcclxuICAgICAgICB0aGlzLmRlc2NMYi5wb3MocG9zLnggKyB0ZXh0UG9zQWRkLngsIHBvcy55ICsgdGV4dFBvc0FkZC55KTtcclxuICAgICAgICB0aGlzLmRlc2NMYi50ZXh0ID0gdGhpcy50ZXh0TGlzdFt0aGlzLnN0ZXBdO1xyXG4gICAgICAgIHRoaXMuc3RlcCsrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudXNlclN0ZXBbdGhpcy5zdGVwXSA9IFwiMVwiO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmd1aWRlLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMudXNlclN0ZXAuam9pbihcIlwiKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY1QjBcdTYyNEJcdTVGMTVcdTVCRkNcdTYyNEJcdTYzMDdcdTUyQThcdTc1M0JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBndWlkSGFuZEFuaSgpIHtcclxuICAgICAgICB0aGlzLmd1aWRBbmkgPSBMYXlhLlRpbWVMaW5lLnRvKHRoaXMuZ3VpZGVIYW5kLCB7IHJvdGF0aW9uOiAtMTUgfSwgNDAwLCBudWxsKS50byhcclxuICAgICAgICAgICAgdGhpcy5ndWlkZUhhbmQsXHJcbiAgICAgICAgICAgIHsgcm90YXRpb246IDAgfSxcclxuICAgICAgICAgICAgNDAwXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmd1aWRBbmkucGxheShudWxsLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmd1aWRBbmk/LmRlc3Ryb3koKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgQXBwRXZlbnRNYXAgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEFwcENvcmUgZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGludFZpZXdEYXRhIHtcclxuICAgIC8qKiBcdTY1ODdcdTVCNTdcdTUxODVcdTVCQjkgKi9cclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIC8qKiBcdTc4NkVcdThCQTRcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbGw/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTUzRDZcdTZEODhcdTU2REVcdThDMDMgKi9cclxuICAgIGNhbmNlbENhbGw/OiBGdW5jdGlvbjtcclxufVxyXG5cclxuLy9kZWZhdWx0IGNsYXNzIEhpbnRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGludFZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnRleHQsIHRpcHM6XCJcdTUxODVcdTVCQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRleHQ6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29uZmlybUJ0biwgdGlwczpcIlx1Nzg2RVx1OEJBNFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29uZmlybUJ0bjogTGF5YS5JbWFnZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjYW5jZWxCdG4sIHRpcHM6XCJcdTUzRDZcdTZEODhcdTYzMDlcdTk0QUVcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNhbmNlbEJ0bjogTGF5YS5JbWFnZTtcclxuXHJcbiAgICBwcml2YXRlIGRhdGE6IEhpbnRWaWV3RGF0YTtcclxuXHJcbiAgICBvbk9wZW5lZChkKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZDtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IHRoaXMuZGF0YT8udGV4dCB8fCBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maXJtQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5jYW5jZWxDYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsQnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2FsbCAmJiB0aGlzLmRhdGEuY2FuY2VsQ2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDI1MjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1CdG4ueCA9IDQ1ODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChVc2VySW5mby5hZFRpbWVzID4gMTAwIHx8IFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzID4gMjApIHtcclxuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDMwMCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMiB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMyB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJoYWxmX3NjcmVlbl9hZHZlcnRpc2VtZW50XCIgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJib3R0b21fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoVXNlckluZm8uYWRUaW1lcyA+IDEwMCB8fCBVc2VySW5mby5jb250aW51b3VzQWRUaW1lcyA+IDIwKSB7XHJcbiAgICAgICAgICAgICh0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lKFwiY2VudGVyXCIpIGFzIExheWEuSW1hZ2UpLmNlbnRlclkgPSAtMzEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNhbmNlbFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FuY2VsQ2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYW5jZWxDYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkhpbnRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29uZmlybVwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLkhpbnRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5jbG9zZUFkLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUsIHsgQnVpbGRUeXBlIH0gZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IEFwcENvcmUsIHsgQXBwRGVzcGF0Y2hSZXR1cm5EYXRhIH0gZnJvbSBcInNyYy9jb3JlL0FwcFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcInNyYy9kYXRhU2VydmljZS9Mb2NhbFN0b3JhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRCYXIsIHRpcHM6XCJsb2FkIGJhclwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9hZEJhcjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9hZEJveCwgdGlwczpcIlx1NTJBMFx1OEY3RFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9hZEJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvZ2luQm94LCB0aXBzOlwiXHU3NjdCXHU5NjQ2XHU1RkFFXHU0RkUxXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb2dpbkJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFwcGxlQnRuLCB0aXBzOlwiXHU4MkY5XHU2NzlDXHU3NjdCXHU5NjQ2XHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhcHBsZUJ0bjogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnByaXZhY3lCb3gsIHRpcHM6XCJcdTk2OTBcdTc5QzFcdTUzNEZcdThCQUVcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaXZhY3lCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcml2YWN5Q2hlY2tJY29uLCB0aXBzOlwiXHU5NjkwXHU3OUMxaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcHJpdmFjeUNoZWNrSWNvbjogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdThGREJcdTVFQTZcdTY3NjFcdTlFRDhcdThCQTRcdTVCQkRcdTVFQTYgIDEqL1xyXG4gICAgcHJpdmF0ZSBsb2FkQmFyT2xkV2lkdGg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhOiB7IGNhbGw6IEZ1bmN0aW9uIH07XHJcblxyXG4gICAgYXN5bmMgb25PcGVuZWQoZCkge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGQ7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TG9naW5CdG5TdGF0ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudmVyc2lvbigpO1xyXG5cclxuICAgICAgICBpZiAoTG9jYWxTdG9yYWdlU2VydmljZS5nZXRKU09OKCk/LmlzTG9naW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2dpbkJ0blN0YXRlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vbihFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgdGhpcywgdGhpcy5sb2FkUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRFbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sb2FkTGFiZWwpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmxvYWRMYWJlbC50ZXh0ID0gXCJMb2FkLi4uLjAlXCI7XHJcbiAgICAgICAgdGhpcy5sb2FkQmFyT2xkV2lkdGggPSB0aGlzLmxvYWRCYXIud2lkdGg7XHJcbiAgICAgICAgdGhpcy5sb2FkQmFyLndpZHRoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBcdThCQkVcdTdGNkVcdTc2N0JcdTVGNTVcdTYzMDlcdTk0QUVcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0TG9naW5CdG5TdGF0ZShzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgaWYgKExheWEuQnJvd3Nlci5vbklPUykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBsZUJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5Cb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hcHBsZUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QnVpbGRUeXBlKCkge1xyXG4gICAgICAgIGxldCBidWlsZFR5cGUgPSBudWxsO1xyXG4gICAgICAgIHN3aXRjaCAoQlVJTERfVFlQRSkge1xyXG4gICAgICAgICAgICBjYXNlIEJ1aWxkVHlwZS5kZWJ1ZzpcclxuICAgICAgICAgICAgICAgIGJ1aWxkVHlwZSA9IDM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCdWlsZFR5cGUudGVzdDpcclxuICAgICAgICAgICAgICAgIGJ1aWxkVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBCdWlsZFR5cGUub25saW5lOlxyXG4gICAgICAgICAgICAgICAgYnVpbGRUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWJ1aWxkVHlwZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU3M0FGXHU1ODgzdHlwZVx1OTE0RFx1N0Y2RVx1NTFGQVx1OTUxOVwiLFxyXG4gICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmNsZWFyQ2FjaGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBidWlsZFR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyB2ZXJzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmNvbmZpZ0NsaWVudCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlkOiB0aGlzLmdldEJ1aWxkVHlwZSgpIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IENvbmZpZ0NsaWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb24gPSBOdW1iZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SlNPTigpLnZlcnNpb24/LnJlcGxhY2UoL1xcLi9nLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ2ZXJzaW9uXCIsIGQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ0dhbWUudmVyc2lvbiA9IGQudmVyc2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoZC52ZXJzaW9uLnJlcGxhY2UoL1xcLi9nLCBcIlwiKSkgPiB2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5jbGVhckNhY2hlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTY4QzBcdTZENEJcdTUyMzBcdTY1QjBcdTc2ODRcdTcyNDhcdTY3MkNcdUZGMENcdThCRjdcdTY2RjRcdTY1QjBcdUZGMDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ2ZXJzaW9uXCIsIGQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuc2hvd0JhY2tncm91bmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnR2FtZS52ZXJzaW9uID0gZC52ZXJzaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJ2ZXJzaW9uXCIsIGQudmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJcdTcyNDhcdTY3MkNcdTY4QzBcdTZENEJcdTUxRkFcdTk1MTlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibG9naW5fYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKHRydWUpO1xyXG4gICAgICAgICAgICBjYXNlIFwiYXBwbGVfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tfYm94XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaXZhY3lDaGVja0ljb24udmlzaWJsZSA9ICF0aGlzLnByaXZhY3lDaGVja0ljb24udmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJpdmFjeV9sYlwiOlxyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5wcml2YWN5QWdyZWVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBsb2dpbihpc1d4OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChMb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEpTT04oKS50b2tlbikge1xyXG4gICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxvZ2luVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IChjb2RlLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMb2dpbkJ0blN0YXRlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IE5ldEluaXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB0aGlzLmRhdGEuY2FsbChkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExvZ2luQnRuU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5sb2dpblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IE51bWJlcihkLnVzZXJJbmZvLmtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhPy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBgXHU3NjdCXHU1RjU1XHU1OTMxXHU4RDI1WyR7ZGF0YS5jb2RlfV1gIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIENvbmZpZ0dhbWUuY2hhbm5lbCA9IGRhdGEuZGF0YVtcImNoYW5uZWxcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcIlNpZ25pblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExvZ2luQnRuU3RhdGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByaXZhY3lCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wcml2YWN5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpc1d4KTtcclxuICAgICAgICAgICAgdGhpcy5wcml2YWN5Qm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucHJpdmFjeUNoZWNrSWNvbi52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU4QkY3XHU5NjA1XHU4QkZCXHUzMDBBXHU3NTI4XHU2MjM3XHU5NjkwXHU3OUMxXHU1MzRGXHU4QkFFXHUzMDBCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TG9naW5CdG5TdGF0ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVzdEsgPSBsb2NhdGlvbi5zZWFyY2gubWF0Y2goL1xcP2lkPSguKykvKSxcclxuICAgICAgICAgICAgICAgIHRlc3RLZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAodGVzdEsgJiYgdGVzdEsubGVuZ3RoID4gMSAmJiBCVUlMRF9UWVBFICE9IEJ1aWxkVHlwZS5vbmxpbmUpIHtcclxuICAgICAgICAgICAgICAgIHRlc3RLZSA9IHRlc3RLWzFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbG9naW5PcGVuSWQgPSB0ZXN0S2UsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZSA9IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXIgPSBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbG9naW5EYXRhID0geyBhY2NvdW50OiBsb2dpbk9wZW5JZCwgYXZhdGFyOiBhdmF0YXIsIG5pY2tuYW1lOiBuaWNrbmFtZSB9O1xyXG4gICAgICAgICAgICBpZiAoaXNXeCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsb2dpbk9wZW5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC53eExvZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcdTVGQUVcdTRGRTFcdTc2N0JcdTVGNTVcdTU5MzFcdThEMjVbJHtkYXRhLmNvZGV9XVx1RkYwQ1x1OEJGN1x1OTFDRFx1OEJENWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpbk9wZW5JZCA9IGRhdGEuZGF0YVtcIm9wZW5pZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhciA9IGRhdGEuZGF0YVtcImljb251cmxcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZSA9IGRhdGEuZGF0YVtcIm5hbWVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luRGF0YSA9IDxOZXRTZW5kQXBpW1wibG9naW5cIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eElkOiBsb2dpbk9wZW5JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKExheWEuQnJvd3Nlci5vbklPUykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hcHBsZUxvZ2luLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGBcdTgyRjlcdTY3OUNcdTc2N0JcdTVGNTVcdTU5MzFcdThEMjVbJHtkYXRhLmNvZGV9XVx1RkYwQ1x1OEJGN1x1OTFDRFx1OEJENWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpbk9wZW5JZCA9IGRhdGEuZGF0YVtcIm9wZW5pZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1x1OEQyNlx1NTNGN1x1NzY3Qlx1NUY1NVxyXG4gICAgICAgICAgICAgICAgbG9naW5EYXRhID0gPE5ldFNlbmRBcGlbXCJsb2dpblwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudDogbG9naW5PcGVuSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFsb2dpbk9wZW5JZCkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1NjcyQVx1ODNCN1x1NTNENlx1NTIzMFx1OEQyNlx1NTNGN2lkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJpdmFjeUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubG9naW4sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogbG9naW5EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiAoY29kZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TG9naW5CdG5TdGF0ZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGQ6IE5ldEluaXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhPy5jYWxsKSB0aGlzLmRhdGEuY2FsbChkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExvZ2luQnRuU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLmlzRmlyc3RUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5yZWdpc3RlclN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogTnVtYmVyKGQudXNlckluZm8ua2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5sb2dpblN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IE51bWJlcihkLnVzZXJJbmZvLmtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChkYXRhOiBBcHBEZXNwYXRjaFJldHVybkRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgXHU3NjdCXHU1RjU1XHU1OTMxXHU4RDI1WyR7ZGF0YS5jb2RlfV1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlnR2FtZS5jaGFubmVsID0gZGF0YS5kYXRhW1wiY2hhbm5lbFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiU2lnbmluXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFByb2dyZXNzKHYpIHtcclxuICAgICAgICB0aGlzLmxvYWRCYXIud2lkdGggPSB2ICogdGhpcy5sb2FkQmFyT2xkV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vZGVmYXVsdCBjbGFzcyBNYWlsRGVzY1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlsRGVzY1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNlbnRlclBhbmVsLCB0aXBzOlwiXHU0RTJEXHU5NUY0XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjZW50ZXJQYW5lbDogTGF5YS5QYW5lbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aXRsZSwgdGlwczpcIlx1OTg3Nlx1NjgwN1x1OTg5OFx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGl0bGU6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9zdExiLCB0aXBzOlwiXHU1MDc3XHU4RDcwXHU0RTg2XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsb3N0TGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YmFja0xiLCB0aXBzOlwiXHU2MjdFXHU1NkRFXHU2NzY1XHU3Njg0XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBiYWNrTGI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tTGIsIHRpcHM6XCJcdTVFOTVcdTkwRThcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJvdHRvbUxiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW0sIHRpcHM6XCJcdTcyNjlcdTU0QzFcdTgyODJcdTcwQjlcIiwgdHlwZTpQcmVmYWJ9Ki9cclxuICAgIHByaXZhdGUgaXRlbTogTGF5YS5QcmVmYWI7XHJcblxyXG4gICAgcHJpdmF0ZSBtYWlsSWQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNhbGw6IEZ1bmN0aW9uO1xyXG5cclxuICAgIG9uT3BlbmVkKGQ6IHsgZGF0YTogTWFpbFJldHVybkRhdGE7IGNhbGw6IEZ1bmN0aW9uIH0pIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZC5kYXRhO1xyXG4gICAgICAgIHRoaXMuY2FsbCA9IGQuY2FsbDtcclxuICAgICAgICB0aGlzLm1haWxJZCA9IGQuZGF0YS5pZDtcclxuICAgICAgICB0aGlzLmNlbnRlclBhbmVsLnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpdGxlLnRleHQgPSBgJHtkYXRhLm1lc3NhZ2V9XHU2RjVDXHU1MTY1XHU0RTg2XHU0RjYwXHU3Njg0XHU4M0RDXHU1NzMwXHU1MDc3XHU4M0RDYDtcclxuICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICBjb25zdCBpdGVtc0xvc3Q6IHsgaWQ6IG51bWJlcjsgYW1vdW50OiBudW1iZXIgfVtdID0gW10sXHJcbiAgICAgICAgICAgIGl0ZW1zQmFjazogeyBpZDogbnVtYmVyOyBhbW91bnQ6IG51bWJlciB9W10gPSBbXTtcclxuICAgICAgICBsZXQgbG9zdERpYW1vbmQgPSAwLFxyXG4gICAgICAgICAgICBsb3N0R29sZCA9IDA7XHJcbiAgICAgICAgLy8gYTpiOmMgIGE9dHlwZSAxXHU4RDI3XHU1RTAxIDIgXHU2OTBEXHU3MjY5XHJcblxyXG4gICAgICAgIFRvb2xzLnBhcnNlU3RyaW5nKGRhdGEuaXRlbXNMb3N0KS5tYXAoKF9kOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgX2QgPSBUb29scy5wYXJzZVN0cmluZyhfZCwgXCI6XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfZCk7XHJcbiAgICAgICAgICAgIGlmIChfZFswXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsb3N0RGlhbW9uZCArPSBOdW1iZXIoX2RbMl0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGl0ZW1zTG9zdC5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5pZCA9PSBfZFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFoYXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zTG9zdC5wdXNoKHsgaWQ6IF9kWzFdLCBhbW91bnQ6IE51bWJlcihfZFsyXSkgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNMb3N0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXNMb3N0W3hdLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNMb3N0W3hdLmFtb3VudCArPSBOdW1iZXIoX2RbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFRvb2xzLnBhcnNlU3RyaW5nKGRhdGEuaXRlbXMpLm1hcCgoX2Q6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBfZCA9IFRvb2xzLnBhcnNlU3RyaW5nKF9kLCBcIjpcIik7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGl0ZW1zQmFjay5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC5pZCA9PSBfZFsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFoYXMpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zQmFjay5wdXNoKHsgaWQ6IF9kWzFdLCBhbW91bnQ6IE51bWJlcihfZFsyXSkgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNCYWNrLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXNCYWNrW3hdLmlkID09IF9kWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNCYWNrW3hdLmFtb3VudCArPSBOdW1iZXIoX2RbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCB5QWRkID0gMCxcclxuICAgICAgICAgICAgX3ggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNMb3N0Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTm9kZTogTGF5YS5Cb3ggPSB0aGlzLml0ZW0uY3JlYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChfeCA+IDIgJiYgIXlBZGQpIHtcclxuICAgICAgICAgICAgICAgIHlBZGQrKztcclxuICAgICAgICAgICAgICAgIF94ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHlBZGQgJiYgX3ggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICB5QWRkKys7XHJcbiAgICAgICAgICAgICAgICBfeCA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW1Ob2RlLnggPSAyMzAgKyBfeCAqIDE5MDtcclxuICAgICAgICAgICAgaXRlbU5vZGUueSA9IDEwNSArIHlBZGQgKiA5NTtcclxuICAgICAgICAgICAgX3grKztcclxuICAgICAgICAgICAgbGV0IHBsYW50ID0gVGFibGVBbmFseXplLnRhYmxlKFwicGxhbnRcIikuZ2V0KGl0ZW1zTG9zdFt4XS5pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBpdGVtTm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgaWNvbi5za2luID0gcGxhbnQuaWNvbjtcclxuICAgICAgICAgICAgaWNvbi5zY2FsZSgwLjcsIDAuNyk7XHJcbiAgICAgICAgICAgIGljb24uYW5jaG9yWCA9IDAuNTtcclxuICAgICAgICAgICAgKGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwibGJcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGB4JHtpdGVtc0xvc3RbeF0uYW1vdW50fWA7XHJcbiAgICAgICAgICAgIHBsYW50LmdhaW4uZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGQub2JqLmlkID09IENvbmZpZ0dhbWUuZGlhbW9uZElkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBsb3N0R29sZCArPSBkLmNvdW50ICogaXRlbXNMb3N0W3hdLmFtb3VudDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNlbnRlclBhbmVsLmFkZENoaWxkKGl0ZW1Ob2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB5QWRkQmFjayA9IDA7XHJcbiAgICAgICAgX3ggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaXRlbXNCYWNrLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTm9kZTogTGF5YS5JbWFnZSA9IHRoaXMuaXRlbS5jcmVhdGUoKTtcclxuICAgICAgICAgICAgaWYgKF94ID4gMSAmJiAheUFkZEJhY2spIHtcclxuICAgICAgICAgICAgICAgIHlBZGRCYWNrKys7XHJcbiAgICAgICAgICAgICAgICBfeCA9IC0yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh5QWRkQmFjayAmJiBfeCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHlBZGRCYWNrKys7XHJcbiAgICAgICAgICAgICAgICBfeCA9IC0yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW1Ob2RlLnggPSA0MjAgKyBfeCAqIDE5MDtcclxuICAgICAgICAgICAgaXRlbU5vZGUueSA9IDIwOCArIHlBZGQgKiA5NSArIHlBZGRCYWNrICogOTU7XHJcbiAgICAgICAgICAgIF94Kys7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGxhbnQgPSBUYWJsZUFuYWx5emUudGFibGUoXCJwbGFudFwiKS5nZXQoaXRlbXNCYWNrW3hdLmlkKTtcclxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGl0ZW1Ob2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpY29uLnNraW4gPSBwbGFudC5pY29uO1xyXG4gICAgICAgICAgICBpY29uLnNjYWxlKDAuNywgMC43KTtcclxuICAgICAgICAgICAgaWNvbi5hbmNob3JYID0gMC41O1xyXG4gICAgICAgICAgICAoaXRlbU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYHgke2l0ZW1zQmFja1t4XS5hbW91bnR9YDtcclxuICAgICAgICAgICAgLy8gcGxhbnQuZ2Fpbi5mb3JFYWNoKChkKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5kaWFtb25kSWQpIHJldHVybjtcclxuICAgICAgICAgICAgLy8gICAgIGxvc3RHb2xkICs9IGQuY291bnQgKiBpdGVtc0JhY2tbeF0uYW1vdW50O1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyUGFuZWwuYWRkQ2hpbGQoaXRlbU5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb3N0TGIueSA9IDExNDtcclxuICAgICAgICB0aGlzLmJhY2tMYi55ID0gMjE4ICsgeUFkZCAqIDk1O1xyXG4gICAgICAgIHRoaXMuYm90dG9tTGIueSA9IDMwMSArIHlBZGQgKiA5NSArIHlBZGRCYWNrICogOTU7XHJcbiAgICAgICAgdGhpcy5ib3R0b21MYi50ZXh0ID0gYFx1NTE3MVx1OEJBMVx1NjM1Rlx1NTkzMVx1NEU4NiR7bG9zdEdvbGR9XHU5MUQxXHU1RTAxXHVGRjBDJHtsb3N0RGlhbW9uZH1cdTk0QkJcdTc3RjNgO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuTWFpbERlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLm1haWxEZWxldGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQ6IHRoaXMubWFpbElkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbCh0aGlzLm1haWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5NYWlsRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IEhlYXJ0YmVhdCBmcm9tIFwic3JjL2NvbW1vbi9IZWFydGJlYXRcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuLy8gIE1haWxWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlsVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxpc3QsIHRpcHM6XCJcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmVtcHR5X2xiLCB0aXBzOlwiXHU3QTdBXHU3Njg0XHU2M0QwXHU3OTNBXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBlbXB0eV9sYjogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0RGF0YTogTWFpbFJldHVybkRhdGFbXSA9IFtdO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLmxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnJlbmRlckl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmVkKGxpc3Q6IE1haWxSZXR1cm5EYXRhW10gPSBbXSkge1xyXG4gICAgICAgIHRoaXMubGlzdERhdGEgPSBsaXN0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxpc3REYXRhKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5hcnJheSA9IHRoaXMubGlzdERhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gKGEucmVhZCA/IDAgOiAxMDAwMDAgKyBiLmNyZWF0ZVRpbWUpIC0gKGIucmVhZCA/IDAgOiAxMDAwMDAgKyBhLmNyZWF0ZVRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gYi5jcmVhdGVUaW1lIC0gKGIucmVhZCA/IDEwMDAwMDAgOiAwKSAtIChhLmNyZWF0ZVRpbWUgLSAoYS5yZWFkID8gMTAwMDAwMCA6IDApKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5lbXB0eV9sYi52aXNpYmxlID0gIXRoaXMubGlzdC5hcnJheS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5saXN0RGF0YVtpbmRleF07XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gXCJcdTdDRkJcdTdFREZcdTkwQUVcdTRFRjZcIjtcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZXNjXCIpIGFzIExheWEuTGFiZWxcclxuICAgICAgICApLnRleHQgPSBgJHtkYXRhLm1lc3NhZ2V9XHU2RjVDXHU1MTY1XHU4M0RDXHU1NzMwXHU1MDc3XHU4M0RDLFx1ODhBQlx1NzJEN1x1NzJEN1x1NTNEMVx1NzNCMFx1NUU3Nlx1OEZGRFx1NTJBMFx1NTZERVx1NEU4Nn5+YDtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInRpbWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke25ldyBEYXRlKFxyXG4gICAgICAgICAgICBkYXRhLmNyZWF0ZVRpbWVcclxuICAgICAgICApLnRvTG9jYWxlU3RyaW5nKFwiemgtQ05cIiwgeyBob3VyMTI6IGZhbHNlIH0pfWA7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwicmVhZF9pY29uXCIpIGFzIExheWEuSW1hZ2UpLnZpc2libGUgPSAhZGF0YS5yZWFkO1xyXG5cclxuICAgICAgICBjZWxsLmRhdGFTb3VyY2UgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lLmluZGV4T2YoXCJpdGVtXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5tYWlsUmVhZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlLnRhcmdldFtcImRhdGFTb3VyY2VcIl0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXRbXCJkYXRhU291cmNlXCJdLnJlYWQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgSGVhcnRiZWF0LnVwZGF0ZU1zZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5NYWlsRGVzY1ZpZXcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZS50YXJnZXRbXCJkYXRhU291cmNlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKG1haWxJZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmxpc3REYXRhLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhW3hdLmlkID09IG1haWxJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YS5zcGxpY2UoeCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuTWFpbFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWd1cmVBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6X3gsIHRpcHM6XCJcdTdFQzhcdTcwQjlcdTU3NTBcdTY4MDdcIiwgdHlwZTp0eXBlOlN0cmluZ30qL1xyXG4gICAgcHJpdmF0ZSBfeDogc3RyaW5nID0gXCIwXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6X3ksIHRpcHM6XCJcdTdFQzhcdTcwQjlcdTU3NTBcdTY4MDdcIiwgdHlwZTp0eXBlOlN0cmluZ30qL1xyXG4gICAgcHJpdmF0ZSBfeTogc3RyaW5nID0gXCIwXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVsYXksIHRpcHM6XCJcdTVFRjZcdThGREZcIiwgdHlwZTp0eXBlOlN0cmluZ30qL1xyXG4gICAgcHJpdmF0ZSBkZWxheTogc3RyaW5nID0gXCIwXCI7XHJcbiAgICAvKiogQHByb3Age25hbWU6dGltZSwgdGlwczpcIlx1NjVGNlx1OTVGNFwiLCB0eXBlOnR5cGU6U3RyaW5nfSovXHJcbiAgICBwcml2YXRlIHRpbWU6IHN0cmluZyA9IFwiMTAwMDBcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5vd25lciBhcyBMYXlhLkFuaW1hdGlvbjtcclxuICAgICAgICBub2RlLmFscGhhID0gMDtcclxuICAgICAgICBsZXQgb2xkUG9zID0geyB4OiBub2RlLngsIHk6IG5vZGUueSB9O1xyXG4gICAgICAgIGxldCBkZWxheSA9IE51bWJlcih0aGlzLmRlbGF5KTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKG5vZGUsIHsgYWxwaGE6IDEgfSwgNjAwLCBudWxsLCBudWxsLCBkZWxheSk7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgeyB4OiB0aGlzLl94LCB5OiB0aGlzLl95IH0sXHJcbiAgICAgICAgICAgIE51bWJlcih0aGlzLnRpbWUpLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGUucG9zKG9sZFBvcy54LCBvbGRQb3MueSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW5hYmxlKCk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkZWxheVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge31cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgT3JkZXJCYXNlLCBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgVG9vbHMgZnJvbSBcInNyYy9jb21tb24vVG9vbHNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvV2FyZWhvdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgTWFpblZpZXcgZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbi8vY2xhc3MgT3JkZXJWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpvcmRlckxpc3QsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlLH0qL1xyXG4gICAgcHJpdmF0ZSBvcmRlckxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0bkxvY2tSZXMsIHRpcHM6XCJcdThCQTJcdTUzNTVcdTYzMDlcdTk0QUVcdTY3MkFcdTVCOENcdTYyMTBcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBidG5Mb2NrUmVzOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0blJlc0N1ciwgdGlwczpcIlx1OEJBMlx1NTM1NVx1NjMwOVx1OTRBRVx1NUY1M1x1NTI0RFx1NzJCNlx1NjAwMVx1NjMwOVx1OTRBRVwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGJ0blJlc0N1cjogc3RyaW5nID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0b3BEZXNjLCB0aXBzOlwiXHU5ODc2XHU5MEU4XHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0b3BEZXNjOiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1NjU3MFx1NjM2RVx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBkYXRhTGlzdDogT3JkZXJCYXNlW107XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IFRhYmxlQW5hbHl6ZS50YWJsZShcIm9yZGVyXCIpLmxpc3Q7XHJcbiAgICAgICAgbGV0IG9yZGVyT2xkTHYgPSBVc2VySW5mby5vcmRlckxldmVsIHx8IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBhLmlkICogKGIuaWQgPD0gb3JkZXJPbGRMdiA/IC0xIDogMSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICBhLmlkICsgKGEuaWQgPD0gb3JkZXJPbGRMdiA/IDIwMDAgOiAwKSAtIChiLmlkICsgKGIuaWQgPD0gb3JkZXJPbGRMdiA/IDIwMDAgOiAwKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC5hcnJheSA9IHRoaXMuZGF0YUxpc3Q7XHJcbiAgICAgICAgdGhpcy5vcmRlckxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5yZW5kZXJMaXN0KTtcclxuICAgICAgICB0aGlzLm9yZGVyTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJld2FyZDogbnVtYmVyID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuZGF0YUxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZGF0YUxpc3RbeF0uaWQgPj0gVXNlckluZm8ub3JkZXJMZXZlbCkge1xyXG4gICAgICAgICAgICBsZXQgYWRkRGlhbW9uZCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUxpc3RbeF0uY29uZGl0aW9uLmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGQucGxhbnQuZ2Fpbi5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAub2JqLmlkID09PSBDb25maWdHYW1lLmRpYW1vbmRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGREaWFtb25kICs9IHAuY291bnQgKiBkLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJld2FyZCArPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhTGlzdFt4XS5leHRyYVJld2FyZC5jb3VudCArXHJcbiAgICAgICAgICAgICAgICBhZGREaWFtb25kICtcclxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoYWRkRGlhbW9uZCAqIHRoaXMuZGF0YUxpc3RbeF0uY29tbWlzc2lvbik7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB3aXRoZHJhd2FsID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxcIikudmFsdWUgYXMgc3RyaW5nW107XHJcblxyXG4gICAgICAgICh0aGlzLnRvcERlc2MuZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gXCJcdTVCOENcdTYyMTBcdTYyNDBcdTY3MDlcdThCQTJcdTUzNTVcdTUzRUZcdTgzQjdcdTVGOTdcIjtcclxuXHJcbiAgICAgICAgKHRoaXMudG9wRGVzYy5nZXRDaGlsZEF0KDEpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtyZXdhcmR9YDtcclxuICAgICAgICAvLyAodGhpcy50b3BEZXNjLmdldENoaWxkQXQoMSkgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke1Rvb2xzLmZvcm1hdE1vbmV5KFxyXG4gICAgICAgIC8vICAgICAoTnVtYmVyKHdpdGhkcmF3YWxbMl0pIC8gTnVtYmVyKHdpdGhkcmF3YWxbMV0pKSAqIHJld2FyZFxyXG4gICAgICAgIC8vICl9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckxpc3QoY2VsbDogTGF5YS5JbWFnZSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmRhdGFMaXN0W2ldLFxyXG4gICAgICAgICAgICByZXdhcmQ6IFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgICAgICAgICAgcmV3YXJkQ291bnQ6IG51bWJlciA9IDAsXHJcbiAgICAgICAgICAgIHJld2FyZERpYW1vbmRDb3VudDogbnVtYmVyID0gMCxcclxuICAgICAgICAgICAgY3VyQ291bnQgPSAwLFxyXG4gICAgICAgICAgICBtYXhDb3VudCA9IDAsXHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gMCxcclxuICAgICAgICAgICAgcmV3YXJkQm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcInJld2FyZF9ib3hcIikgYXMgTGF5YS5Cb3gsXHJcbiAgICAgICAgICAgIG9yZGVyX2x2ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm9yZGVyX2x2XCIpIGFzIExheWEuTGFiZWw7XHJcbiAgICAgICAgb3JkZXJfbHYudGV4dCA9IGAke2QuaWR9XHU3RUE3XHU4QkEyXHU1MzU1YDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA0OyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiaXRlbV9cIiArIHgpIGFzIExheWEuQm94O1xyXG4gICAgICAgICAgICBpZiAoZC5jb25kaXRpb25beF0pIHtcclxuICAgICAgICAgICAgICAgIGN1ckNvdW50ID0gV2FyZWhvdXNlU2VydmljZS5nZXRPbmUoZC5jb25kaXRpb25beF0ucGxhbnQuaWQpPy5jb3VudCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgbWF4Q291bnQgPSBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyQ291bnQgPj0gbWF4Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIChpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZC5jb25kaXRpb25beF0ucGxhbnQuaWNvbjtcclxuICAgICAgICAgICAgICAgIGlmIChkLmlkIDwgVXNlckluZm8ub3JkZXJMZXZlbCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7bWF4Q291bnR9LyR7bWF4Q291bnR9YDtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9IDg3O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7Y3VyQ291bnR9LyR7bWF4Q291bnR9YDtcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlKS53aWR0aCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDg3ICogKGN1ckNvdW50IC8gbWF4Q291bnQgPiAxID8gMSA6IGN1ckNvdW50IC8gbWF4Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZC5jb25kaXRpb25beF0ucGxhbnQuZ2Fpbi5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUub2JqLmlkID09PSBDb25maWdHYW1lLmdvbGRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkID0gZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRDb3VudCArPSBlLmNvdW50ICogZC5jb25kaXRpb25beF0uY291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkRGlhbW9uZENvdW50ICs9IGUuY291bnQgKiBkLmNvbmRpdGlvblt4XS5jb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGlhbW9uZCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRfYm94X2RpYW1vbmRcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBsZXQgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBmaW5pc2hJY29uID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImZpbmlzaFwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBjdXJJY29uID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImN1cl9pY29uXCIpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgIHJlY2VpdmVCdG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwicmVjZWl2ZV9idG5cIikgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgbHZfYm94ID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImx2X2JveFwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGZpbmlzaEljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGN1ckljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGRpYW1vbmQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgIHJld2FyZEJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBsdl9ib3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgb3JkZXJfbHYudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgcmVjZWl2ZUJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGQuaWQgPiBVc2VySW5mby5vcmRlckxldmVsICsgMSkge1xyXG4gICAgICAgICAgICAvL1x1NjcyQVx1NkZDMFx1NkQzQlxyXG4gICAgICAgICAgICBidG4uc2tpbiA9IHRoaXMuYnRuTG9ja1JlcztcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoZC5leHRyYVJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIChkaWFtb25kLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gZC5leHRyYVJld2FyZC5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIChkaWFtb25kLmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGArJHtcclxuICAgICAgICAgICAgICAgICAgICBkLmV4dHJhUmV3YXJkLmNvdW50ICtcclxuICAgICAgICAgICAgICAgICAgICByZXdhcmREaWFtb25kQ291bnQgK1xyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQocmV3YXJkRGlhbW9uZENvdW50ICogZC5jb21taXNzaW9uKVxyXG4gICAgICAgICAgICAgICAgfWA7XHJcbiAgICAgICAgICAgICAgICBkaWFtb25kLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGQuaWQgPT0gVXNlckluZm8ub3JkZXJMZXZlbCArIDEpIHtcclxuICAgICAgICAgICAgICAgIC8vXHU1RjUzXHU1MjREXHJcbiAgICAgICAgICAgICAgICBpZiAoZC5leHRyYVJld2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ckljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbHZfYm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBidG4udmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvcmRlcl9sdi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgKGRpYW1vbmQuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmV4dHJhUmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgICAgICAgICAgICAgIChkaWFtb25kLmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGArJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZC5leHRyYVJld2FyZC5jb3VudCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZERpYW1vbmRDb3VudCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQocmV3YXJkRGlhbW9uZENvdW50ICogZC5jb21taXNzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYW1vbmQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5za2luID0gdGhpcy5idG5SZXNDdXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID09IGQuY29uZGl0aW9uLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV3YXJkQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkaWFtb25kLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXHU1REYyXHU1QjhDXHU2MjEwXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9cdTVERjJcdTVCOENcdTYyMTBcclxuICAgICAgICAgICAgICAgIC8vIGJ0bi5ncmF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmaW5pc2hJY29uLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGQuZXh0cmFSZXdhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDEwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmV3YXJkKSB7XHJcbiAgICAgICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSByZXdhcmQub2JqLmljb247XHJcbiAgICAgICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCske1xyXG4gICAgICAgICAgICAgICAgcmV3YXJkQ291bnQgKyBNYXRoLnJvdW5kKHJld2FyZENvdW50ICogZC5jb21taXNzaW9uKVxyXG4gICAgICAgICAgICB9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5PcmRlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWNlaXZlX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgTWFpblZpZXcuaW5zdC5oaW5kT3JkZXJMZXZlbCA9IDA7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy51cGRhdGVfT3JkZXIpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5PcmRlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVyVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6bGVmdEJveCwgdGlwczpcIlx1NEU5MVx1NURFNlx1OEZCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIGxlZnRCb3g6IExheWEuQm94O1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnJpZ2h0Qm94LCB0aXBzOlwiXHU0RTkxXHU1REU2XHU4RkI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcmlnaHRCb3g6IExheWEuQm94O1xyXG5cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIG9uT3BlbmVkKGRhdGE6IHsgY2FsbDogeyAoT3ZlclZpZXcpOiB2b2lkIH0gfSkge1xyXG4gICAgICAgIC8vIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICBpZiAoZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICBkYXRhLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKGNhbGw6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0Qm94LnggPSAtOTg3O1xyXG4gICAgICAgIHRoaXMucmlnaHRCb3gueCA9IDEwMjU7XHJcbiAgICAgICAgdGhpcy5sZWZ0Qm94LmFscGhhID0gMDtcclxuICAgICAgICB0aGlzLnJpZ2h0Qm94LmFscGhhID0gMDtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKHRoaXMubGVmdEJveCwgeyB4OiAwLCBhbHBoYTogMSB9LCA1MDApO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRCb3gsXHJcbiAgICAgICAgICAgIHsgeDogMCwgYWxwaGE6IDEgfSxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsKSBjYWxsKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKGNhbGw6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byh0aGlzLmxlZnRCb3gsIHsgeDogLTk4NywgYWxwaGE6IDAgfSwgNTAwKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0Qm94LFxyXG4gICAgICAgICAgICB7IHg6IDEwMjUsIGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgIDUwMCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbCkgY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5PdmVyVmlldyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cERhdGFDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBEYXRhQ29udHJvbFwiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgTG9jYWxTdG9yYWdlU2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL0xvY2FsU3RvcmFnZVNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuXHJcbi8vY2xhc3MgU2V0dGluZ1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6bXVzaWNOb2RlLCB0aXBzOlwiXHU5N0YzXHU0RTUwXHU2MzA5XHU5NEFFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBtdXNpY05vZGU6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzb3VuZE5vZGUsIHRpcHM6XCJcdTk3RjNcdTY1NDhcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNvdW5kTm9kZTogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmF2YXRhck5vZGUsIHRpcHM6XCJcdTczQTlcdTVCQjZcdTU5MzRcdTUwQ0ZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGF2YXRhck5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOm5pY2tuYW1lLCB0aXBzOlwiXHU3M0E5XHU1QkI2XHU1NDBEXHU3OUYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBuaWNrbmFtZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dXNlcktleSwgdGlwczpcIlx1NzUyOFx1NjIzN1x1NTNDQlx1NjBDNVx1NzgwMVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdXNlcktleTogTGF5YS5MYWJlbDtcclxuXHJcbiAgICBvbk9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLm11c2ljQ2hhbmdlKCk7XHJcbiAgICAgICAgdGhpcy5zb3VuZENoYW5nZSgpO1xyXG4gICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMyB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiYm90dG9tX2FkdmVydGlzZW1lbnRcIiB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJLZXkudGV4dCA9IGBcdTkwODBcdThCRjdcdTc4MDFcdUZGMUEke1VzZXJJbmZvLmtleX1gO1xyXG5cclxuICAgICAgICBDb3JlLm9ic2VydmFibGVQcm9wZXJ0eVxyXG4gICAgICAgICAgICAud2F0Y2goVXNlckluZm8sIHRoaXMpXHJcbiAgICAgICAgICAgIC5rZXkoXCJhdmF0YXJcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlKSB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJuaWNrbmFtZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uaWNrbmFtZS50ZXh0ID0gZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TZXR0aW5nVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJtdXNpY1wiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5tdXNpY011dGVkID0gIUNvcmUuYXVkaW8ubXVzaWNNdXRlZDtcclxuICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcIm11c2ljXCIsIENvcmUuYXVkaW8ubXVzaWNNdXRlZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tdXNpY0NoYW5nZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic291bmRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8uc291bmRNdXRlZCA9ICFDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQ7XHJcbiAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEpTT04oXCJzb3VuZFwiLCBDb3JlLmF1ZGlvLnNvdW5kTXV0ZWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc291bmRDaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJzaWduX291dFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlx1Nzg2RVx1OEJBNFx1ODk4MVx1OTAwMFx1NTFGQVx1NzY3Qlx1NUY1NVx1RkYxRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZS5zZXRKU09OKFwiaXNMb2dpblwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SlNPTihcInRva2VuXCIsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBIdHRwRGF0YUNvbnRyb2wubG9naW5PdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3LmxvZ2luT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTG9naW5WaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFybToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5sb2dpbl9nYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQ2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidXNlcl9hZ3JlZW1lbnRcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU3NTI4XHU2MjM3XHU1MzRGXHU4QkFFXHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHsgdXJpOiBBcHBFdmVudE1hcC5zZXJ2aWNlQWdyZWVtZW50LCBkYXRhOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJpdmFjeVwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTk2OTBcdTc5QzFcdTY1M0ZcdTdCNTZcclxuICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oeyB1cmk6IEFwcEV2ZW50TWFwLnByaXZhY3lBZ3JlZW1lbnQsIGRhdGE6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhYm91dFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkFib3V0Vmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvcHlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcHkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvcHkoKSB7XHJcbiAgICAgICAgbGV0IGE6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICBhLnZhbHVlID0gVXNlckluZm8ua2V5O1xyXG4gICAgICAgIGEuc2VsZWN0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgICAgIGEucmVtb3ZlKCk7XHJcbiAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTU5MERcdTUyMzZcdTYyMTBcdTUyOUZcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtdXNpY0NoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCBib3ggPSB0aGlzLm11c2ljTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJveFwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGNvbnN0IGljb24gPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcblxyXG4gICAgICAgIGxldCBtdXNpYyA9IENvcmUuYXVkaW8ubXVzaWNNdXRlZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhtdXNpYyk7XHJcblxyXG4gICAgICAgIGljb24ueCA9ICFtdXNpYyA/IC0xNCA6IDkxO1xyXG4gICAgICAgIGljb24uc2tpbiA9ICFtdXNpYyA/IGBnYW1lL2ltZ19tdXNpY09uQnRuLnBuZ2AgOiBcImdhbWUvaW1nX211c2ljT2ZmQnRuLnBuZ1wiO1xyXG4gICAgICAgIGJveC5za2luID0gIW11c2ljID8gYGdhbWUvaW1nX3N3aXRjaE9uLnBuZ2AgOiBcImdhbWUvaW1nX3N3aXRoT2ZmLnBuZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc291bmRDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc3QgYm94ID0gdGhpcy5zb3VuZE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBjb25zdCBpY29uID0gYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGxldCBzb3VuZCA9IENvcmUuYXVkaW8uc291bmRNdXRlZDtcclxuICAgICAgICBpY29uLnggPSAhc291bmQgPyAtMTQgOiA5MTtcclxuICAgICAgICBpY29uLnNraW4gPSAhc291bmQgPyBgZ2FtZS9pbWdfbXVzaWNPbkJ0bi5wbmdgIDogXCJnYW1lL2ltZ19tdXNpY09mZkJ0bi5wbmdcIjtcclxuICAgICAgICBib3guc2tpbiA9ICFzb3VuZCA/IGBnYW1lL2ltZ19zd2l0Y2hPbi5wbmdgIDogXCJnYW1lL2ltZ19zd2l0aE9mZi5wbmdcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5jbG9zZUFkLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgRmVlZEJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5cclxuLyoqXHJcbiAqIFx1OTk3Mlx1NjU5OVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGZWVkRGF0YUJhc2Uge1xyXG4gICAgLyoqIFx1OTk3Mlx1NjU5OVx1NTdGQVx1Nzg0MFx1NjU3MFx1NjM2RSAqL1xyXG4gICAgYmFzZTogRmVlZEJhc2U7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU5NTAxXHU1QjlBICovXHJcbiAgICBsb2NrOiBib29sZWFuO1xyXG59XHJcbi8qKlxyXG4gKiBcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcclxuICovXHJcbmNsYXNzIEZlZWRTZXJ2aWNlIHtcclxuICAgIC8qKiBcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIGxpc3Q6IEZlZWREYXRhQmFzZVtdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY1NzBcdTYzNkVcdTUyMURcdTU5Q0JcdTUzMTZcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBUYWJsZUFuYWx5emUudGFibGUoXCJmZWVkXCIpLmxpc3QuZm9yRWFjaCgoZCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiBkLFxyXG4gICAgICAgICAgICAgICAgbG9jazogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRmVlZFNlcnZpY2UoKTtcclxuIiwgImltcG9ydCBCaW5kV3ggZnJvbSBcInNyYy9jb21tb24vQmluZFd4XCI7XHJcbmltcG9ydCBDb25maWdHYW1lIGZyb20gXCJzcmMvY29tbW9uL0NvbmZpZ0dhbWVcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IHsgRmVlZEJhc2UsIFBsYW50QmFzZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwic3JjL2NvbW1vbi9Ub29sc1wiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgRmVlZFNlcnZpY2UsIHsgRmVlZERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9GZWVkU2VydmljZVwiO1xyXG5pbXBvcnQgUGV0U2VydmljZSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1BldFNlcnZpY2VcIjtcclxuaW1wb3J0IFBsYW50U2VydmljZSwgeyBQbGFudERhdGFCYXNlIH0gZnJvbSBcInNyYy9kYXRhU2VydmljZS9QbGFudFNlcnZpY2VcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVXNlckluZm9cIjtcclxuaW1wb3J0IE1haW5WaWV3LCB7IEdldEZsb2F0UmV3YXJkT2JqIH0gZnJvbSBcIi4vTWFpblZpZXdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hvcFZpZXdEYXRhIHtcclxuICAgIC8qKiBcdTc1NENcdTk3NjJ0YWdcdTRFMEJcdTY4MDdpZCAqL1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIC8qKiBcdTY1NzBcdTYzNkUgKi9cclxuICAgIHBhcm0/OiBhbnk7XHJcbiAgICBjYWxsPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0bkJveFRvcCwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NTIxN1x1ODg2OFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYnRuQm94VG9wOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpib3R0b21Cb3gsIHRpcHM6XCJcdTVFOTVcdTkwRThcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJvdHRvbUJveDogTGF5YS5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NzlDRFx1NUI1MFxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNlZWREZXNjLCB0aXBzOlwiXHU2M0NGXHU4RkYwXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzZWVkRGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bWF0dXJlVGltZSwgdGlwczpcIlx1NjIxMFx1NzE5Rlx1NjVGNlx1OTVGNFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbWF0dXJlVGltZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bWF0dXJlR2FpbkJveCwgdGlwczpcIlx1NjUzNlx1NzZDQVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbWF0dXJlR2FpbkJveDogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9ja0J0bkJveCwgdGlwczpcIlx1ODlFM1x1OTUwMVx1NjMwOVx1OTRBRVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbG9ja0J0bkJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1CdXlCdG4sIHRpcHM6XCJcdThEMkRcdTRFNzBcdTYzMDlcdTk0QUVcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1CdXlCdG46IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU5OTcyXHU2NTk5XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmVlZEJ1eUJ0biwgdGlwczpcIlx1OTk3Mlx1NjU5OVx1OEQyRFx1NjMwOVx1OTRBRVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZmVlZEJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZmVlZERlc2MsIHRpcHM6XCJcdTk5NzJcdTY1OTlcdTYzQ0ZcdThGRjBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGZlZWREZXNjOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICAvL1x1NUJBMFx1NzI2OVxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnBldEljb24sIHRpcHM6XCJcdTVCQTBcdTcyNjlpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwZXRJY29uOiBMYXlhLkFuaW1hdGlvbiA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0RGVzYywgdGlwczpcIlx1NUJBMFx1NzI2OVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0RGVzYzogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cGV0TmFtZSwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NTQwRFx1NzlGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgcGV0TmFtZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dml0YWxpdHlNYXgsIHRpcHM6XCJcdTRGNTNcdTUyOUJcdTRFMEFcdTk2NTBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHZpdGFsaXR5TWF4OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwZXRCdXlCdG4sIHRpcHM6XCJcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHBldEJ1eUJ0bjogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z29XYXRjaCwgdGlwczpcIlx1NUJBMFx1NzI2OVx1NzcwQlx1NUJCNlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29XYXRjaDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z29SZXN0LCB0aXBzOlwiXHU1QkEwXHU3MjY5XHU0RjExXHU2MDZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb1Jlc3Q6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8vXHU5NEIxXHU1RTg0XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZEZvbnQsIHRpcHM6XCJcdTc1MjhcdTYyMzdcdTk0QkJcdTc3RjNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmRGb250OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcmljZUxpc3QsIHRpcHM6XCJcdTk0QjFcdTVFODRcdTYzRDBcdTczQjBcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHByaWNlTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpwcm9wb3J0aW9uLCB0aXBzOlwiXHU1MTUxXHU2MzYyXHU2QkQ0XHU0RjhCXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBwcm9wb3J0aW9uOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZXNjUHJpY2VCb3gsIHRpcHM6XCJcdTgzQjdcdTUzRDZcdTk0QkJcdTc3RjNcdTkwMTRcdTVGODRcdTYzQ0ZcdThGRjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRlc2NQcmljZUJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvbmRpdGlvbkJveCwgdGlwczpcIlx1NjNEMFx1NzNCMFx1Njc2MVx1NEVGNlx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgY29uZGl0aW9uQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogXHU1M0VGXHU2M0QwXHU3M0IwXHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIHByaWNlRGF0YUxpc3Q6IHsgcHJpY2U6IG51bWJlcjsgdGltZXM6IG51bWJlciB9W10gPSBbXTtcclxuICAgIC8qKiBcdTk0QjFcdTVFODRcdTkwMDlcdTYyRTlcdTc2ODRcdTUwM0MgXHU3Njg0XHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIHByaWNlU2VsZWN0SW5kZXg6IG51bWJlciA9IG51bGw7XHJcbiAgICAvKiogXHU5MDgwXHU4QkY3XHU1OTdEXHU1M0NCXHU3Njg0XHU2NTcwXHU5MUNGICovXHJcbiAgICBwcml2YXRlIGludml0ZU51bTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU2NTg3XHU1QjU3XHU4RDQ0XHU2RTkwXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGJ0blRvcFJlc0xpc3Q6IHN0cmluZ1tdW10gPSBbXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfc2VlZHNOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfc2VlZHNTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfcGV0Tm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3BldFNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19mb29kbk5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19mb29kblNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19iYW5rTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX2JhbmtTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICBdO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NTIwN1x1NjM2Mlx1NjgwN1x1N0I3RVx1OTAwOVx1NjJFOVx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSB0b3BCdG5TZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTcwQjlcdTUxRkJcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgaXRlbUxpc3RTZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTgwQ0NcdTY2NkZcdTdFQjlcdTc0MDYgKi9cclxuICAgIHByaXZhdGUgaXRlbVNlbGVjdEJnOiBzdHJpbmdbXSA9IFtcImdhbWUvaW1nX3BldGJhZ05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19wZXRiYWdTZWxlY3RlZC5wbmdcIl07XHJcblxyXG4gICAgLyoqIFx1NUY1M1x1NTI0RFx1OTAwOVx1NjJFOVx1NzY4NFx1NUJBMFx1NzI2OVx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RQZXRJbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgZGF0YTogU2hvcFZpZXdEYXRhO1xyXG5cclxuICAgIHByaXZhdGUgaXNGaXJzdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVJdGVtKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25TZWxlY3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnByaWNlTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmljZUxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVQcmljZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMucHJpY2VMaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25QcmljZVNlbGVjdCk7XHJcblxyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5LndhdGNoKFVzZXJJbmZvLCB0aGlzKS5rZXkoXCJkaWFtb25kXCIsICh2KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbW9uZEZvbnQudmFsdWUgPSB2O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdpdGhkcmF3YWwgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwid2l0aGRyYXdhbFwiKS52YWx1ZSBhcyBzdHJpbmdbXTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wb3J0aW9uLnRleHQgPSBgID0gXHUwMEE1JHsoKE51bWJlcih3aXRoZHJhd2FsWzJdKSAvIE51bWJlcih3aXRoZHJhd2FsWzFdKSkgKiB2KVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5tYXRjaCgvXlxcZCsoPzpcXC5cXGR7MCwyfSk/Lyl9XHU1MTQzYDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgKHRoaXMubG9ja0J0bkJveC5nZXRDaGlsZEJ5TmFtZShcImFkX3VubG9ja1wiKSBhcyBMYXlhLkltYWdlKS5kaXNhYmxlZCA9XHJcbiAgICAgICAgICAgICFVc2VySW5mby5hZHZlcnRpc2VUaW1lcztcclxuICAgICAgICAodGhpcy5sb2NrQnRuQm94LmdldENoaWxkQnlOYW1lKFwiYWRfdW5sb2NrXCIpIGFzIExheWEuSW1hZ2UpLmFjdGl2ZSA9IEJvb2xlYW4oXHJcbiAgICAgICAgICAgIFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk9wZW5lZChlOiBTaG9wVmlld0RhdGEpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBlO1xyXG4gICAgICAgIHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPSBlPy5pZCB8fCAwO1xyXG5cclxuICAgICAgICB0aGlzLnByaWNlRGF0YUxpc3QgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwid2l0aGRyYXdhbF90aW1lc1wiKS52YWx1ZSBhcyBhbnk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3BCdG5TdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAuc2VuZCh7IGFwaTogQXBpSHR0cC5mcmllbmRJbnZpdGVMaXN0IH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkOiBGcmllbmRMaXN0RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludml0ZU51bSA9IGQubGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTkwMDlcdTRFMkRcdTY1RjZcdTc2ODRcdTRFMEJcdTY4MDdcclxuICAgICAqIEBwYXJhbSBlIFx1OTAwOVx1NEUyRFx1NzY4NFx1NEUwQlx1NjgwN1xyXG4gICAgICovXHJcbiAgICBvblNlbGVjdChlKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4ID0gZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODNCN1x1NTNENlx1NzlDRFx1NUI1MFx1NjIxNlx1OTk2RVx1NjU5OVx1NTIxN1x1ODg2OFx1NjU3MFx1NjM2RVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXREYXRhTGlzdCgpIHtcclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQbGFudFNlcnZpY2UubGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBpZiAoIUZlZWRTZXJ2aWNlLmxpc3QubGVuZ3RoKSBGZWVkU2VydmljZS5pbml0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBGZWVkU2VydmljZS5saXN0LnNvcnQoKGEsIGIpID0+IGEuYmFzZS52aXRhbGl0eSAtIGIuYmFzZS52aXRhbGl0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTMyXHU2N0QzXHU3OUNEXHU1QjUwXHU2MjE2XHU2NjJGXHU5OTcyXHU2NTk5XHU3Njg0XHU1MjE3XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0gY2VsbCBcdTUyMTdcdTg4NjhcdTgyODJcdTcwQjlcclxuICAgICAqIEBwYXJhbSBpbmRleCBcdTRFMEJcdTY4MDdcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlSXRlbShjZWxsOiBMYXlhLkltYWdlLCBpbmRleCkge1xyXG4gICAgICAgIGxldCBkID0gdGhpcy5nZXREYXRhTGlzdCgpW2luZGV4XTtcclxuICAgICAgICBsZXQgcHJpY2VCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiaGJveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgbG9ja0ljb24gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwibG9ja19pY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaWYgKCFkKSByZXR1cm4gY29uc29sZS53YXJuKFwiXHU2NTcwXHU2MzZFXHU0RTIyXHU1OTMxXCIpO1xyXG4gICAgICAgIGlmIChkLmxvY2spIHtcclxuICAgICAgICAgICAgbG9ja0ljb24udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxvY2tJY29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByaWNlQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcHJpY2VCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9ja0ljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsb2NrSWNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcHJpY2VCb3gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHByaWNlQm94LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgaWNvbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gKDxQbGFudEJhc2U+ZC5iYXNlKS5zZWVkX3ByaWNlLmNvdW50O1xyXG4gICAgICAgICAgICAgICAgaWNvbiA9ICg8UGxhbnRCYXNlPmQuYmFzZSkuc2VlZF9wcmljZS5vYmouaWNvbjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3QuY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpY29uID0gKDxGZWVkQmFzZT5kLmJhc2UpLmNvc3Qub2JqLmljb247XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIChwcmljZUJveC5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGNvdW50ICsgXCJcIjtcclxuICAgICAgICAgICAgKHByaWNlQm94LmdldENoaWxkQnlOYW1lKFwiZ29sZF9pY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBpY29uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBkLmJhc2UuaWNvbjtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9XHJcbiAgICAgICAgICAgIGQuYmFzZS5uYW1lICsgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPyBcIlwiIDogXCJcdTc5Q0RcdTVCNTBcIik7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMV07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0RGVzYygpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5idXR0b25fY2xpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NzlDRFx1NUI1MFx1NjIxNlx1NjYyRlx1OTk3Mlx1NjU5OVx1NEY0RVx1OTBFOFx1RkYwQ1x1OTAwOVx1NjJFOVx1NzI2OVx1NTRDMVx1NjVGNlx1NzY4NFx1NjU3MFx1NjM2RVx1NjYzRVx1NzkzQVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdERlc2MoKSB7XHJcbiAgICAgICAgbGV0IGQgPSB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XTtcclxuICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgICAvL1x1OTk3Mlx1NjU5OVxyXG4gICAgICAgICAgICAodGhpcy5zZWVkRGVzYy5wYXJlbnQgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkRGVzYy50ZXh0ID0gZC5iYXNlLmRlc2MucmVwbGFjZShcIiZcIiwgKDxGZWVkQmFzZT5kLmJhc2UpLnZpdGFsaXR5ICsgXCJcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZmVlZERlc2MudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBib3ggPSB0aGlzLmZlZWRCdXlCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSAoPEZlZWRCYXNlPmQuYmFzZSkuY29zdC5vYmouaWNvbjtcclxuICAgICAgICAgICAgKGJveC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID1cclxuICAgICAgICAgICAgICAgICg8RmVlZEJhc2U+ZC5iYXNlKS5jb3N0LmNvdW50ICsgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTc5Q0RcdTVCNTBcclxuICAgICAgICBsZXQgYmFzZSA9IGQuYmFzZSBhcyBQbGFudEJhc2U7XHJcbiAgICAgICAgKHRoaXMuc2VlZERlc2MucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZlZWREZXNjLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZWREZXNjLnRleHQgPSBiYXNlLmRlc2M7XHJcbiAgICAgICAgdGhpcy5tYXR1cmVUaW1lLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKGJhc2UubWF0dXJlX3RpbWUpO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5kYXRhPy5jYWxsKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtQnV5QnRuLnZpc2libGUgPSAhZC5sb2NrO1xyXG4gICAgICAgIGlmIChNYWluVmlldy5pbnN0LmlzT3V0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtQnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5pdGVtQnV5QnRuLnZpc2libGUgPSAhZC5sb2NrO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2NrQnRuQm94LnZpc2libGUgPSBkLmxvY2s7XHJcbiAgICAgICAgdGhpcy5sb2NrQnRuQm94LmFjdGl2ZSA9IGQubG9jaztcclxuICAgICAgICBsZXQgZ2Fpbkxpc3QgPSBiYXNlLmdhaW47XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Cb3ggPSB0aGlzLm1hdHVyZUdhaW5Cb3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgICAgIGljb24gPSBudWxsLFxyXG4gICAgICAgICAgICAgICAgY291bnQgPSAwLFxyXG4gICAgICAgICAgICAgICAgZ2FpbkRhdGEgPSBnYWluTGlzdFt4IC0gMV07XHJcbiAgICAgICAgICAgIGlmICh4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGJhc2UuaGFydmVzdDtcclxuICAgICAgICAgICAgICAgIGljb24gPSBiYXNlLmljb247XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FpbkRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGljb24gPSBnYWluRGF0YS5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIGNvdW50ID0gZ2FpbkRhdGEuY291bnQgKiBiYXNlLmhhcnZlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIChpdGVtQm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gaWNvbjtcclxuICAgICAgICAgICAgKGl0ZW1Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gXCJ4XCIgKyBjb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBib3ggPSB0aGlzLmxvY2tCdG5Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJ1bmxvY2tfYnV5XCIpLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xyXG5cclxuICAgICAgICAoYm94LmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gYmFzZS51bmxvY2tfY29zdD8ub2JqPy5pY29uO1xyXG4gICAgICAgIChib3guZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGJhc2UudW5sb2NrX2Nvc3Q/LmNvdW50ICsgXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImZlZWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImJhbmtcIjpcclxuICAgICAgICAgICAgICAgIENvcmUuYXVkaW8ucGxheVNvdW5kKFJlcy5hdWRpb3MuYnV0dG9uX2NsaWNrKTtcclxuICAgICAgICAgICAgICAgIGxldCB0b3BCdG5JbmRleCA9IHRoaXMuYnRuQm94VG9wLmdldENoaWxkSW5kZXgoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggIT0gdG9wQnRuSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID0gTnVtYmVyKHRvcEJ0bkluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb3BCdG5TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vXHU2NEFEXHU3OUNEXHJcbiAgICAgICAgICAgIGNhc2UgXCJidXlfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XSBhcyBQbGFudERhdGFCYXNlKS5iYXNlLnNlZWRfcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvdW50ID4gVXNlckluZm8uZ29sZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcdUZGMENcdTUzQkJcdTRFRDNcdTVFOTNcdTUxRkFcdTU1MkVcdTUzRUZcdTRFRTVcdTgzQjdcdTVGOTdcdTkxRDFcdTVFMDFcdUZGMENcdTUwNzdcdTgzRENcdTgzQjdcdTVGOTdcdTc2ODRcdTg1MkNcdTgzRENcdTRFNUZcdTUzRUZcdTRFRTVcdTUxRkFcdTU1MkVcdTgzQjdcdTVGOTdcdTkxRDFcdTVFMDFcdTU0RTZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsYW5kSWQgPSB0aGlzLmRhdGE/LnBhcm0/LmxhbmRJZDtcclxuICAgICAgICAgICAgICAgIGlmICghbGFuZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZElkID0gTWFpblZpZXcuaW5zdC5nZXRFbXB0eUxhbmRJZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFsYW5kSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1NkNBMVx1NjcwOVx1N0E3QVx1NzY4NFx1NTcxRlx1NTczMFx1NTRFNlx1RkYwMVwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmxhbmRTb3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wic293XCJdPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmRJZDogbGFuZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbnRJZDogdGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0uYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2FsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNhbGwodGhpcy5nZXREYXRhTGlzdCgpW3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxhbnRfc293LCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy9cdTVFN0ZcdTU0NEFcdTg5RTNcdTk1MDFcdUZGMENcdTYyMTZcdTY2MkZcdTkxRDFcdTVFMDFcdTg5RTNcdTk1MDExXHJcbiAgICAgICAgICAgIGNhc2UgXCJ1bmxvY2tfYnV5XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZF91bmxvY2tcIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwidW5sb2NrX2J1eVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdIGFzIFBsYW50RGF0YUJhc2UpLmJhc2UudW5sb2NrX2Nvc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvdW50ID4gVXNlckluZm8uZ29sZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcdUZGMENcdTUzQkJcdTRFRDNcdTVFOTNcdTUxRkFcdTU1MkVcdTUzRUZcdTRFRTVcdTgzQjdcdTVGOTdcdTkxRDFcdTVFMDFcdUZGMENcdTUwNzdcdTgzRENcdTgzQjdcdTVGOTdcdTc2ODRcdTg1MkNcdTgzRENcdTRFNUZcdTUzRUZcdTRFRTVcdTUxRkFcdTU1MkVcdTgzQjdcdTVGOTdcdTkxRDFcdTVFMDFcdTU0RTZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbDogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5zZWVkc1VubG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJzZWVkc1VubG9ja1wiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFudElkOiB0aGlzLmdldERhdGFMaXN0KClbdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4XS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uYW1lID09IFwiYWRfdW5sb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVBRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBhZFJld2FyZDogUmV0dXJuVXNlckluZm9bXCJhZFJld2FyZFwiXSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYW50U2VydmljZS5saXN0W3RoaXMuaXRlbUxpc3RTZWxlY3RJbmRleF0ubG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0LmNoYW5nZUl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGFudFNlcnZpY2UubGlzdFt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gXCJhZF91bmxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5hZFJld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJGcmVldW5sb2NrXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdFBldEluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0UGV0SW5kZXggPSBQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUGV0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFBldEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RQZXRJbmRleCA+PSBQZXRTZXJ2aWNlLmxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RQZXRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBldCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBldEJ1eSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb193YXRjaFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXRHb1dhdGNoKFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XS5iYXNlLmlkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fcmVzdFwiOlxyXG4gICAgICAgICAgICAgICAgLy9cdTlFRDhcdThCQTRcdTRGNjlcdTYyMzRcdTdCMkNcdTRFMDBcdTRFMkFcdTVCQTBcdTcyNjlcclxuICAgICAgICAgICAgICAgIHRoaXMucGV0R29XYXRjaCgxMDAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmVlZF9idXlcIjpcclxuICAgICAgICAgICAgICAgIC8vXHU5OTcyXHU2NTk5XHU4RDJEXHU0RTcwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXkoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2l0aGRyYXdfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1NjNEMFx1NzNCMFxyXG4gICAgICAgICAgICAgICAgdGhpcy53aXRoZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwicmVjb3JkX2J0blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuV2l0aGRyYXdSZWNvcmQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZ29fanVtcFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUdvSnVtcChlLnRhcmdldCBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU3M0IwXHU2NzYxXHU0RUY2XHU4REYzXHU4RjZDXHJcbiAgICAgKiBAcGFyYW0gbm9kZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHByaWNlR29KdW1wKG5vZGU6IExheWEuSW1hZ2UpIHtcclxuICAgICAgICBpZiAobm9kZS5kYXRhU291cmNlID09IDEpIHtcclxuICAgICAgICAgICAgLy9cdThERjNcdThCQTJcdTUzNTVcclxuICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TaG9wVmlldyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLmRhdGFTb3VyY2UgPT0gMikge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgLy9cdThERjNcdTU5N0RcdTUzQ0JcdTkwODBcdThCRjdcclxuICAgICAgICAgICAgSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mcmllbmRJbnZpdGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChkOiBJbnZpdGVMaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZyaWVuZHNSZXdhcmRWaWV3LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcm06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IGQubGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3BlbldpdGhkcmF3UmVjb3JkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC53aXRoZHJhd1JlY29yZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuV2l0aGRyYXdSZWNvcmRWaWV3LCB7IHBhcm06IGQgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmVlZEJ1eSgpIHtcclxuICAgICAgICBsZXQgZmVlZCA9IHRoaXMuZ2V0RGF0YUxpc3QoKVt0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXhdIGFzIEZlZWREYXRhQmFzZTtcclxuICAgICAgICBpZiAoIWZlZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFVc2VySW5mby53YXJlUGV0SWQpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogXCJcdTYwQThcdThGRDhcdTZDQTFcdTY3MDlcdThEMkRcdTRFNzBcdTVCQTBcdTcyNjlcdTU0RTZcdUZGMDFcIiwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmZWVkLmJhc2UuY29zdC5jb3VudCA+IFVzZXJJbmZvLmdvbGQpIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU5MUQxXHU1RTAxXHU0RTBEXHU4REIzXHVGRjBDXHU1M0JCXHU0RUQzXHU1RTkzXHU1MUZBXHU1NTJFXHU1M0VGXHU0RUU1XHU4M0I3XHU1Rjk3XHU5MUQxXHU1RTAxXHVGRjBDXHU1MDc3XHU4M0RDXHU4M0I3XHU1Rjk3XHU3Njg0XHU4NTJDXHU4M0RDXHU0RTVGXHU1M0VGXHU0RUU1XHU1MUZBXHU1NTJFXHU4M0I3XHU1Rjk3XHU5MUQxXHU1RTAxXHU1NEU2XCIsXHJcbiAgICAgICAgICAgICAgICBjYWxsOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5mZWVkQnV5LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogPE5ldFNlbmRBcGlbXCJmZWVkQnV5XCJdPntcclxuICAgICAgICAgICAgICAgICAgICBmZWVkSWQ6IGZlZWQuYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSArPSBmZWVkLmJhc2Uudml0YWxpdHk7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMuZmVlZEJ1eUJ0biBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IGZlZWQuYmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdEZseTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1QkEwXHU3MjY5XHU1M0JCXHU3NzBCXHU1QkI2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGV0R29XYXRjaChwZXRJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnBldFdlYXIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcInBldEJ1eVwiXT57XHJcbiAgICAgICAgICAgICAgICAgICAgcGV0SWQ6IHBldElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby53YXJlUGV0SWQgPSBwZXRJZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OEQyRFx1NEU3MFx1NUJBMFx1NzI2OVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHBldEJ1eSgpIHtcclxuICAgICAgICBsZXQgeyBiYXNlIH0gPSBQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF07XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF0uYmFzZS5jb3N0LmNvdW50ID4gVXNlckluZm8uZ29sZCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJcdTkxRDFcdTVFMDFcdTRFMERcdThEQjNcdUZGMENcdTUzQkJcdTRFRDNcdTVFOTNcdTUxRkFcdTU1MkVcdTUzRUZcdTRFRTVcdTgzQjdcdTVGOTdcdTkxRDFcdTVFMDFcdUZGMENcdTUwNzdcdTgzRENcdTgzQjdcdTVGOTdcdTc2ODRcdTg1MkNcdTgzRENcdTRFNUZcdTUzRUZcdTRFRTVcdTUxRkFcdTU1MkVcdTgzQjdcdTVGOTdcdTkxRDFcdTVFMDFcdTU0RTZcIixcclxuICAgICAgICAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnBldEJ1eSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxOZXRTZW5kQXBpW1wicGV0QnV5XCJdPntcclxuICAgICAgICAgICAgICAgICAgICBwZXRJZDogYmFzZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBQZXRTZXJ2aWNlLmxpc3RbdGhpcy5zZWxlY3RQZXRJbmRleF0ubG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLndhcmVQZXRJZCkgVXNlckluZm8ud2FyZVBldElkID0gYmFzZS5pZDtcclxuICAgICAgICAgICAgICAgIGlmICghVXNlckluZm8ucGV0Vml0YWxpdHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5wZXRWaXRhbGl0eSA9IGJhc2Uudml0YWxpdHlfbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLmRpZ2VzdENvdW50RG93biA9IFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGV0RGlnZXN0SW50ZXJ2YWxUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICApLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NzBCOVx1NTFGQlx1NzBCOVx1NTFGQlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRvcEJ0blN0YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5idG5Cb3hUb3AubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgbGIgPSBidG4uZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nLW1lbnVzZWxlY3RlZC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudW5vcm1hbC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQm90dG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTVFOTVcdTkwRThcdTUxODVcdTVCQjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVCb3R0b20oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvdHRvbUJveC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VudGVyQm94U3RhdGUoeCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXRlbUJ1eUJveCA9IHRoaXMuaXRlbUJ1eUJ0bi5wYXJlbnQgYXMgTGF5YS5Cb3g7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IC8vXHU3OUNEXHU1QjUwXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQZXRPckZlZWRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXlCdG4udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaXRlbUJ1eUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3guYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNlbnRlckJveFN0YXRlKDEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8vXHU5OTcyXHU2NTk5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQZXRPckZlZWRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCdXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtQnV5Qm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGl0ZW1CdXlCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3hTdGF0ZSgyLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlTGlzdC5hcnJheSA9IHRoaXMucHJpY2VEYXRhTGlzdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NUJBMFx1NzI2OVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBldCgpIHtcclxuICAgICAgICBpZiAoIVBldFNlcnZpY2UubGlzdC5sZW5ndGgpIFBldFNlcnZpY2UuaW5pdChbXSk7XHJcbiAgICAgICAgbGV0IHBldCA9IFBldFNlcnZpY2UubGlzdFt0aGlzLnNlbGVjdFBldEluZGV4XTtcclxuICAgICAgICB0aGlzLnBldEljb24uc291cmNlID0gYHJlcy9kb2dfJHtwZXQuYmFzZS5pZH0uYXRsYXNgO1xyXG4gICAgICAgIHRoaXMucGV0TmFtZS50ZXh0ID0gcGV0LmJhc2UubmFtZTtcclxuICAgICAgICB0aGlzLnBldERlc2MudGV4dCA9IHBldC5iYXNlLmRlc2M7XHJcbiAgICAgICAgdGhpcy52aXRhbGl0eU1heC52YWx1ZSA9IHBldC5iYXNlLnZpdGFsaXR5X21heCArIFwiXCI7XHJcbiAgICAgICAgbGV0IGJ0bl9ib3ggPSB0aGlzLnBldEJ1eUJ0bi5nZXRDaGlsZEJ5TmFtZShcImJ0bl9ib3hcIikgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgKGJ0bl9ib3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBwZXQuYmFzZS5jb3N0Lm9iai5pY29uO1xyXG4gICAgICAgIChidG5fYm94LmdldENoaWxkQnlOYW1lKFwidmFsdWVcIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBwZXQuYmFzZS5jb3N0LmNvdW50ICsgXCJcIjtcclxuXHJcbiAgICAgICAgbGV0IHBldEJveCA9IHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoMSksXHJcbiAgICAgICAgICAgIGZpbmRCb3ggPSBwZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJmaW5kX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgYmFja19ib3ggPSBwZXRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYWNrX2JveFwiKSBhcyBMYXlhLkJveCxcclxuICAgICAgICAgICAgc3Rhckljb246IExheWEuSW1hZ2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA1OyB4KyspIHtcclxuICAgICAgICAgICAgc3Rhckljb24gPSBmaW5kQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgc3Rhckljb24udmlzaWJsZSA9IHggKiAyMCA8IHBldC5iYXNlLnNlbnNpdGl2ZTtcclxuICAgICAgICAgICAgc3Rhckljb24uc2tpbiA9XHJcbiAgICAgICAgICAgICAgICB4ICogMjAgKyAxMCA8IHBldC5iYXNlLnNlbnNpdGl2ZSA/IFwiZ2FtZS9pbWdfc3Rhci5wbmdcIiA6IFwiZ2FtZS9pbWdfaGFsZnN0YXIucG5nXCI7XHJcbiAgICAgICAgICAgIHN0YXJJY29uID0gYmFja19ib3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBzdGFySWNvbi52aXNpYmxlID0geCAqIDIwIDwgcGV0LmJhc2UuYWJpbGl0eTtcclxuICAgICAgICAgICAgc3Rhckljb24uc2tpbiA9XHJcbiAgICAgICAgICAgICAgICB4ICogMjAgKyAxMCA8IHBldC5iYXNlLmFiaWxpdHkgPyBcImdhbWUvaW1nX3N0YXIucG5nXCIgOiBcImdhbWUvaW1nX2hhbGZzdGFyLnBuZ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGV0LmxvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5wZXRCdXlCdG4udmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ29SZXN0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nb1dhdGNoLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoVXNlckluZm8ud2FyZVBldElkID09IHBldC5iYXNlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoUGV0U2VydmljZS5nZXRVbmxvY2tMZW4oKSA9PT0gMSB8fCBVc2VySW5mby53YXJlUGV0SWQgPT09IDEwMDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29SZXN0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29XYXRjaC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvV2F0Y2gudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvUmVzdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucGV0QnV5QnRuLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkxQ0RcdTdGNkVcdTc5Q0RcdTVCNTBcdTYyMTZcdTY2MkZcdTk5NzJcdTY1OTlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNldFBldE9yRmVlZExpc3QoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSB0aGlzLmdldERhdGFMaXN0KCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTRFMkRcdTk1RjRcdTUxODVcdTVCQjlcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTUyMDdcdTYzNjJcclxuICAgICAqIEBwYXJhbSBpIFx1NEUwQlx1NjgwN1xyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQ2VudGVyQm94U3RhdGUoaTogbnVtYmVyLCBzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoaSkgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KGkpIGFzIExheWEuQm94KS5hY3RpdmUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5NEIxXHU1RTg0XHU5MDA5XHU2MkU5XHJcbiAgICAgKiBAcGFyYW0gZSBcdTRFMEJcdTY4MDdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvblByaWNlU2VsZWN0KGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJpY2VTZWxlY3RJbmRleCA9IGU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQcmljZURlc2MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhblByaWNlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NUU5NVx1OTBFOFx1NTNENlx1NzNCMFx1NjNDRlx1OEZGMFx1N0I0OVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVByaWNlRGVzYygpIHtcclxuICAgICAgICBsZXQgZGF0YSA9XHJcbiAgICAgICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJ3aXRoZHJhd2FsX3RpbWVzXCIpLnZhbHVlW3RoaXMucHJpY2VTZWxlY3RJbmRleF07XHJcbiAgICAgICAgbGV0IGRlc2MgPSB0aGlzLmNvbmRpdGlvbkJveC5nZXRDaGlsZEJ5TmFtZShcImRlc2NcIik7XHJcbiAgICAgICAgbGV0IGJhckJveCA9IHRoaXMuY29uZGl0aW9uQm94LmdldENoaWxkQnlOYW1lKFwiYmFyX2JveFwiKSBhcyBMYXlhLkJveDtcclxuICAgICAgICBsZXQgYnRuID0gdGhpcy5jb25kaXRpb25Cb3guZ2V0Q2hpbGRCeU5hbWUoXCJnb19qdW1wXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25Cb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChVc2VySW5mby5vcmRlckxldmVsIDwgZGF0YS5vcmRlckx2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NQcmljZUJveC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIChkZXNjLmdldENoaWxkQnlOYW1lKFwibGIxXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU4QkEyXHU1MzU1YDtcclxuICAgICAgICAgICAgKGRlc2MuZ2V0Q2hpbGRCeU5hbWUoXCJsYjJcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGAke2RhdGEub3JkZXJMdn1gO1xyXG4gICAgICAgICAgICAoZGVzYy5nZXRDaGlsZEJ5TmFtZShcImxiM1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1N0VBN1x1NTM3M1x1NTNFRlx1NjNEMFx1NzNCMGA7XHJcbiAgICAgICAgICAgIChiYXJCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgKFVzZXJJbmZvLm9yZGVyTGV2ZWwgPiBkYXRhLm9yZGVyTHYgPyAxIDogVXNlckluZm8ub3JkZXJMZXZlbCAvIGRhdGEub3JkZXJMdikgKiA0MzQ7XHJcbiAgICAgICAgICAgIChiYXJCb3guZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5vcmRlckxldmVsID4gZGF0YS5vcmRlckx2ID8gZGF0YS5vcmRlckx2IDogVXNlckluZm8ub3JkZXJMZXZlbFxyXG4gICAgICAgICAgICB9LyR7ZGF0YS5vcmRlckx2fWA7XHJcbiAgICAgICAgICAgIGJ0bi5za2luID0gYGdhbWUvaW1nX2dvVG9Xb3JrLnBuZ2A7XHJcbiAgICAgICAgICAgIGJ0bi5kYXRhU291cmNlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5jYW5QcmljZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnZpdGVOdW0gPCBkYXRhLmludml0ZUFtb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmRpdGlvbkJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjUHJpY2VCb3gudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAoZGVzYy5nZXRDaGlsZEJ5TmFtZShcImxiMVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1OTA4MFx1OEJGN2A7XHJcbiAgICAgICAgICAgIChkZXNjLmdldENoaWxkQnlOYW1lKFwibGIyXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtkYXRhLmludml0ZUFtb3VudH1gO1xyXG4gICAgICAgICAgICAoZGVzYy5nZXRDaGlsZEJ5TmFtZShcImxiM1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1NEUyQVx1NTk3RFx1NTNDQlx1NTM3M1x1NTNFRlx1NjNEMFx1NzNCMGA7XHJcbiAgICAgICAgICAgIChiYXJCb3guZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikgYXMgTGF5YS5JbWFnZSkud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgKHRoaXMuaW52aXRlTnVtID4gZGF0YS5pbnZpdGVBbW91bnQgPyAxIDogdGhpcy5pbnZpdGVOdW0gLyBkYXRhLmludml0ZUFtb3VudCkgKiA0MzQ7XHJcbiAgICAgICAgICAgIChiYXJCb3guZ2V0Q2hpbGRCeU5hbWUoXCJsYlwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludml0ZU51bSA+IGRhdGEuaW52aXRlQW1vdW50ID8gZGF0YS5pbnZpdGVBbW91bnQgOiB0aGlzLmludml0ZU51bVxyXG4gICAgICAgICAgICB9LyR7ZGF0YS5pbnZpdGVBbW91bnR9YDtcclxuICAgICAgICAgICAgYnRuLnNraW4gPSBgZ2FtZS9pbWdfZ29Ub0ludml0ZS5wbmdgO1xyXG4gICAgICAgICAgICBidG4uZGF0YVNvdXJjZSA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuUHJpY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhblByaWNlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRlc2NQcmljZUJveC52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICogXHU2M0QwXHU3M0IwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgd2l0aGRyYXcoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblByaWNlKSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2M0QwXHU3M0IwXHU2NzYxXHU0RUY2XHU0RTBEXHU2RUUxXHU4REIzXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByaWNlU2VsZWN0SW5kZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBDb3JlLnZpZXcub3BlbkhpbnQoeyB0ZXh0OiBcIlx1OTAwOVx1NjJFOVx1ODk4MVx1NjNEMFx1NzNCMFx1NzY4NFx1OTFEMVx1OTg5RFwiLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIUJpbmRXeC5pc0JpbmRXeCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FuQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC53aXRoZHJhdyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQ6IHRoaXMucHJpY2VTZWxlY3RJbmRleCB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IFwiXHU2M0QwXHU3M0IwXHU2MjEwXHU1MjlGXCIsIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgVXNlckluZm8ud2l0aGRyYXcgPSBkLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICBVc2VySW5mby5kaWFtb25kID0gZC5kaWFtb25kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZUxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJXaXRoZHJhd2FsXCIgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5NEIxXHU1RTg0XHU2NTcwXHU2MzZFXHU2RTMyXHU2N0QzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlUHJpY2VJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGk6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5wcmljZURhdGFMaXN0W2ldO1xyXG5cclxuICAgICAgICBsZXQgdXNlckRhdGE6IE5ldEluaXRbXCJ3aXRoZHJhd1wiXVswXSA9IHsgaWQ6IDAsIHRpbWVzOiAwIH07XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGFMaXN0ID0gVXNlckluZm8ud2l0aGRyYXc7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB1c2VyRGF0YUxpc3QubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJEYXRhTGlzdFt4XS5pZCA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyRGF0YSA9IHVzZXJEYXRhTGlzdFt4XTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcInZhbHVlXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBkYXRhLnByaWNlICsgXCJcdTUxNDNcIjtcclxuICAgICAgICBpZiAoZGF0YS50aW1lcykge1xyXG4gICAgICAgICAgICBsZXQgdGltZXMgPSBkYXRhLnRpbWVzIC0gdXNlckRhdGEudGltZXM7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZXNfYm94XCIpIGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc19ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc1wiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYFx1NTI2OVx1NEY1OSR7XHJcbiAgICAgICAgICAgIC8vICAgICB0aW1lcyA8IDAgPyAwIDogdGltZXNcclxuICAgICAgICAgICAgLy8gfVx1NkIyMWA7XHJcbiAgICAgICAgICAgIC8vIChcclxuICAgICAgICAgICAgLy8gICAgIGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc19ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc1wiKSBhcyBMYXlhLkxhYmVsXHJcbiAgICAgICAgICAgIC8vICkudGV4dCA9IGBcdTY1QjBcdTYyNEJcdTU5NTZcdTUyQjFgO1xyXG4gICAgICAgICAgICBpZiAodGltZXMgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2VsbC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZXNfYm94XCIpIGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lc19ib3hcIikgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByaWNlTGlzdC5zZWxlY3RlZEluZGV4ID09PSBpKSB7XHJcbiAgICAgICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiYmdcIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IFwiZ2FtZS9pbWdfcHJpY2VzZWxlY3RlZC5wbmdcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBcImdhbWUvaW1nX3ByaWNlbm9ybWFsLnBuZ1wiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JbkRlc2NWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5EZXNjVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNpZ25JbkRlc2NWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcInNyYy9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCIuL01haW5WaWV3XCI7XHJcblxyXG4vLyAgU2lnbkluVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbkluVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNpZ25Jbkxpc3QsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBzaWduSW5MaXN0OiBMYXlhLkxpc3Q7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNpZ25JblByb2dyZXNzTGIsIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBzaWduSW5Qcm9ncmVzc0xiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNpZ25JblByb2dyZXNzQmFyLCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHU2NzYxXCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgc2lnbkluUHJvZ3Jlc3NCYXI6IExheWEuTGFiZWw7XHJcbiAgICAvKiogQHByb3Age25hbWU6cHJvZ3Jlc3NEZXNjLCB0aXBzOlwiXHU3QjdFXHU1MjMwXHU4RkRCXHU1RUE2XHU2NTg3XHU1QjU3XHU2M0QwXHU3OTNBXCIsIHR5cGU6Tm9kZX0gKi9cclxuICAgIHByaXZhdGUgcHJvZ3Jlc3NEZXNjOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpbmlzaEljb24sIHRpcHM6XCJcdTdCN0VcdTUyMzBcdThGREJcdTVFQTZcdTY1ODdcdTVCNTdcdTYzRDBcdTc5M0FcIiwgdHlwZTpOb2RlfSAqL1xyXG4gICAgcHJpdmF0ZSBmaW5pc2hJY29uOiBMYXlhLkltYWdlO1xyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zaWduSW5MaXN0LmFycmF5ID0gVGFibGVBbmFseXplLnRhYmxlKFwic2lnbkluXCIpLmxpc3Q7XHJcbiAgICAgICAgdGhpcy5zaWduSW5MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNpZ25Jbkxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy51cGRhdGVJdGVtKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVQcm9ncmVzcygpIHtcclxuICAgICAgICBsZXQgc2NhbGUgPSBVc2VySW5mby5zcGVlZFVwVGltZXMgLyBDb25maWdHYW1lLkFEU3BlZWRVcFRpbWVzO1xyXG4gICAgICAgIGlmIChzY2FsZSA+IDEpIHNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLnNpZ25JblByb2dyZXNzQmFyLndpZHRoID0gOTc3ICogc2NhbGU7XHJcbiAgICAgICAgdGhpcy5zaWduSW5Qcm9ncmVzc0xiLnRleHQgPSBVc2VySW5mby5zaWduSW5EYXlzICsgXCJcIjtcclxuICAgICAgICB0aGlzLnByb2dyZXNzRGVzYy50ZXh0ID0gYFx1NEVDQVx1NjVFNVx1N0I3RVx1NTIzMFx1OEZEQlx1NUVBNlx1RkYwOFx1NEY3Rlx1NzUyOCR7VXNlckluZm8uc3BlZWRVcFRpbWVzfS8ke0NvbmZpZ0dhbWUuQURTcGVlZFVwVGltZXN9XHU2QjIxXHU1MkEwXHU5MDFGXHVGRjA5YDtcclxuICAgICAgICB0aGlzLmZpbmlzaEljb24udmlzaWJsZSA9IFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA+PSBDb25maWdHYW1lLkFEU3BlZWRVcFRpbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlSXRlbShjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgYmFyID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImJhclwiKSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICBvYmogPSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdFtpXTtcclxuICAgICAgICBsZXQgc2NhbGUgPSBVc2VySW5mby5zaWduSW5EYXlzIC8gb2JqLmRheXM7XHJcbiAgICAgICAgaWYgKHNjYWxlID4gMSkgc2NhbGUgPSAxO1xyXG4gICAgICAgIGJhci53aWR0aCA9IDUwMiAqIHNjYWxlO1xyXG4gICAgICAgIGNvbnN0IHJld2FyZEJveCA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJyZXdhcmRfYm94XCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmoucmV3YXJkLm9iai5pY29uO1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJhbW91bnRcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IGB4JHtvYmoucmV3YXJkLmNvdW50fWA7XHJcblxyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwic2lnbl9kYXlzXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgXHU3QjdFXHU1MjMwJHtvYmouZGF5c31cdTU5MjlgO1xyXG5cclxuICAgICAgICBsZXQgc2tpbjogc3RyaW5nID0gXCJcIixcclxuICAgICAgICAgICAgYnRuID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShcImdldF9idG5cIikgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICBidG4uZGF0YVNvdXJjZSA9IG9iai5pZDtcclxuICAgICAgICBpZiAob2JqLmlkID4gVXNlckluZm8uc2lnbkluSWQpIHtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC55ID0gMTAzO1xyXG4gICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2RvbmUucG5nYDtcclxuXHJcbiAgICAgICAgICAgIGlmIChVc2VySW5mby5zaWduSW5EYXlzID49IG9iai5kYXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVzZXJJbmZvLnNpZ25JbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PSBUYWJsZUFuYWx5emUudGFibGUoXCJzaWduSW5cIikubGlzdFswXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX2dldC5wbmdgO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCAtIFVzZXJJbmZvLnNpZ25JbklkID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbiA9IGBnYW1lL2ltZ19nZXQucG5nYDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkQm94LnkgPSA1NztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBza2luID0gYGdhbWUvaW1nX3JlY2VpdmVkLnBuZ2A7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnRuLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXdhcmRCb3gueSA9IDU3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG4uc2tpbiA9IHNraW47XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2lnbkluVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRlc2NfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2lnbkluRGVzY1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnZXRfYnRuXCI6XHJcbiAgICAgICAgICAgICAgICAvL1x1OTg4Nlx1NTNENlx1NTk1Nlx1NTJCMVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZ25JbklkID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5zaWduSW5SZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQsIHNpZ25JbklkOiBzaWduSW5JZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5zaWduSW5JZCA9IHNpZ25JbklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25Jbkxpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmV3YXJkID0gVGFibGVBbmFseXplLnRhYmxlKFwic2lnbkluXCIpLmdldChzaWduSW5JZCkucmV3YXJkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2dldF9yZXdhcmQsIDxHZXRGbG9hdFJld2FyZE9iaj57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBlLnRhcmdldCBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmo6IHJld2FyZC5vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiByZXdhcmQuY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IHJld2FyZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5nb2xkSWQgPyAxIDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgQ29uZmlnR2FtZSBmcm9tIFwic3JjL2NvbW1vbi9Db25maWdHYW1lXCI7XHJcbmltcG9ydCB7IEFwcEV2ZW50TWFwLCBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEh0dHBDb250cm9sIGZyb20gXCJzcmMvY29tbW9uL0h0dHBDb250cm9sXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcblxyXG4vL2RlZmF1bHQgY2xhc3MgU3BlZWRVcFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWVkVXBWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aW1lTGIsIHRpcHM6XCJcdTUyQTBcdTkwMUZcdTY1RjZcdTk1RjRcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHRpbWVMYjogTGF5YS5MYWJlbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0aW1lc0xiLCB0aXBzOlwiXHU1MTY4XHU0RjUzXHU1MkEwXHU5MDFGXHU1MjY5XHU0RjU5XHU2QjIxXHU2NTcwXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSB0aW1lc0xiOiBMYXlhLkxhYmVsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNwZWVkVXBCdG4sIHRpcHM6XCJcdTUxNjhcdTRGNTNcdTUyQTBcdTkwMUZcdTYzMDlcdTk0QUVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNwZWVkVXBCdG46IExheWEuTGFiZWw7XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIGNhbkNsaWNrOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvbk9wZW5lZChkYXRhOiB7IGNhbGw6IEZ1bmN0aW9uIH0pIHtcclxuICAgICAgICB0aGlzLmNhbGwgPSBkYXRhLmNhbGw7XHJcbiAgICAgICAgbGV0IHRpbWUgPSBUYWJsZUFuYWx5emUudGFibGUoXCJjb25maWdcIikuZ2V0KFwiYWxsX3NwZWVkX3VwX3RpbWVcIikudmFsdWUgYXMgbnVtYmVyO1xyXG4gICAgICAgIHRoaXMudGltZUxiLnRleHQgPSBgJHtNYXRoLmNlaWwodGltZSAvIDYwKX1cdTUyMDZcdTk0OUZgO1xyXG4gICAgICAgIHRoaXMudGltZXNMYi50ZXh0ID0gYFx1NEVDQVx1NjVFNVx1NTI2OVx1NEY1OSR7VXNlckluZm8uYWR2ZXJ0aXNlVGltZXN9XHU2QjIxYDtcclxuICAgICAgICBpZiAoVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkVXBCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMzAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAzIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMiB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiaGFsZl9zY3JlZW5fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJib3R0b21fYWR2ZXJ0aXNlbWVudFwiIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuU3BlZWRVcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzcGVlZF91cFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGk6IEFwaUh0dHAubGFuZFNwZWVkVXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogQ29uZmlnR2FtZS5BcGlUeXBlQUQgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWR2ZXJ0aXNlVGltZXM6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkVXBUaW1lczogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRSZXdhcmQ6IFJldHVyblVzZXJJbmZvW1wiYWRSZXdhcmRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNwZWVkVXBUaW1lcyA9IGQuc3BlZWRVcFRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uYWR2ZXJ0aXNlVGltZXMgPSBkLmFkdmVydGlzZVRpbWVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChVc2VySW5mby5zcGVlZFVwVGltZXMgPT0gQ29uZmlnR2FtZS5BRFNwZWVkVXBUaW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJbmZvLnNpZ25JbkRheXMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwicHVuY2h0aGVjbG9ja1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJBZHZlcnRpc2luZ2FjY2VsZXJhdGlvblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlNwZWVkVXBWaWV3KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxhbmRfc3BlZWRfdXApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuYWRSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsKSB0aGlzLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IZERlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuY2xvc2VBZCxcclxuICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9kYXRhU2VydmljZS9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiB9IGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuLi9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi4vY29yZS9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFRhc2tTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvVGFza1NlcnZpY2VcIjtcclxuaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgSHR0cENvbnRyb2wgZnJvbSBcInNyYy9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXBpSHR0cCB9IGZyb20gXCJzcmMvY29tbW9uL05ldE1hcHNcIjtcclxuaW1wb3J0IHsgQXBwRXZlbnRNYXAsIEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFJld2FyZE9iaiB9IGZyb20gXCIuL01haW5WaWV3XCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCJzcmMvY29yZS9BcHBcIjtcclxuaW1wb3J0IHsgUmV3YXJkQ3VycmVuY3lCYXNlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVPYmplY3RcIjtcclxuXHJcbmludGVyZmFjZSBCdXR0b25PYmoge1xyXG4gICAgLyoqIFx1NEVGQlx1NTJBMWlkICovXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1NUI4Q1x1NjIxMCAqL1xyXG4gICAgb2s6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8vICBUYXNrVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1ZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp0YXNrTGlzdCwgdGlwczpcIlx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgdGFza0xpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljayA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUYXNrTGlzdCgpO1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5pdGVtUmVuZGVyKTtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUYXNrTGlzdCgpIHtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0LmFycmF5ID0gVGFza1NlcnZpY2UuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXRlbVJlbmRlcihjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IFRhc2tTZXJ2aWNlLmxpc3RbaV0uYmFzZTtcclxuICAgICAgICBjb25zdCB0YXNrID0gVGFza1NlcnZpY2UuZ2V0VGFzayhvYmo/LmlkKTtcclxuICAgICAgICBpZiAoIXRhc2spIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW5IaW50KHsgdGV4dDogYFx1NEVGQlx1NTJBMVx1OTE0RFx1N0Y2RVx1NTFGQVx1OTUxOSxcdTkxNERcdTdGNkVcdTRFMERcdTVCNThcdTU3MjhgLCBjYWxsOiAoKSA9PiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IG9iai5pY29uO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikgYXMgTGF5YS5MYWJlbCkudGV4dCA9IG9iai50aXRsZTtcclxuXHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJkZXNjXCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBgJHtvYmouZGVzY30oJHtcclxuICAgICAgICAgICAgKHRhc2s/LnRpbWVzID4gb2JqLnRpbWVzID8gb2JqLnRpbWVzIDogdGFzaz8udGltZXMpIHx8IDBcclxuICAgICAgICB9LyR7b2JqLnRpbWVzfSlgO1xyXG5cclxuICAgICAgICBjb25zdCByZXdhcmRCb3ggPSBjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkXCIpIGFzIExheWEuQm94O1xyXG4gICAgICAgIChyZXdhcmRCb3guZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2UpLnNraW4gPSBvYmoucmV3YXJkLm9iai5pY29uO1xyXG5cclxuICAgICAgICBpZiAob2JqLmlkID09PSAxMDEyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJld2FyZCA9IChcclxuICAgICAgICAgICAgICAgIFRhYmxlQW5hbHl6ZS50YWJsZShcImNvbmZpZ1wiKS5nZXQoXCJWaWRlb3Jld2FyZHNcIikudmFsdWUgYXMgUmV3YXJkQ3VycmVuY3lCYXNlXHJcbiAgICAgICAgICAgICkuY291bnQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJpY2UgPSBvYmoucmV3YXJkLmNvdW50ICsgKG9iai50aW1lcyAtICh0YXNrPy50aW1lcyB8fCAwKSkgKiByZXdhcmQ7XHJcbiAgICAgICAgICAgIGlmIChwcmljZSA8IG9iai5yZXdhcmQuY291bnQpIHtcclxuICAgICAgICAgICAgICAgIHByaWNlID0gb2JqLnJld2FyZC5jb3VudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgKHJld2FyZEJveC5nZXRDaGlsZEJ5TmFtZShcImFtb3VudFwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gXCJ4XCIgKyBwcmljZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAocmV3YXJkQm94LmdldENoaWxkQnlOYW1lKFwiYW1vdW50XCIpIGFzIExheWEuTGFiZWwpLnRleHQgPSBcInhcIiArIG9iai5yZXdhcmQuY291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBidG4gPSBjZWxsLmdldENoaWxkQnlOYW1lKFwiZ29fcnVuXCIpIGFzIExheWEuSW1hZ2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bk9iajogQnV0dG9uT2JqID0ge1xyXG4gICAgICAgICAgICBpZDogb2JqLmlkLFxyXG4gICAgICAgICAgICBvazogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9cdTVERjJcdTk4ODZcdTUzRDZcclxuICAgICAgICBpZiAodGFzaz8ucmVjZWl2ZSkge1xyXG4gICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfdG9tYXJvdy5wbmdcIjtcclxuICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy9cdTUzRUZcdTk4ODZcdTUzRDZcclxuICAgICAgICAgICAgaWYgKHRhc2s/LnRpbWVzID49IG9iai50aW1lcykge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nX2dldC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGJ0bk9iai5vayA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWdfZG9uZS5wbmdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnRuLmRhdGFTb3VyY2UgPSBidG5PYmo7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJnb19ydW5cIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0bk9iajogQnV0dG9uT2JqID0gZS50YXJnZXRbXCJkYXRhU291cmNlXCJdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChidG5PYmoub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1x1ODNCN1x1NTNENlx1NTk1Nlx1NTJCMVxyXG4gICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLnRhc2tSZXdhcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IENvbmZpZ0dhbWUuQXBpVHlwZURlZmF1bHQsIHRhc2tJZDogYnRuT2JqLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrU2VydmljZS5nZXRUYXNrKGJ0bk9iai5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnJlY2VpdmUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuT2JqLm9rID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFza0xpc3QucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV90YXNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfZ2V0X3Jld2FyZCwgPEdldEZsb2F0UmV3YXJkT2JqPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBlLnRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogdGFzay5iYXNlLnJld2FyZC5vYmosXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogdGFzay5iYXNlLnJld2FyZC5jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5iYXNlLnJld2FyZC5vYmouaWQgPT0gQ29uZmlnR2FtZS5kaWFtb25kSWQgPyAyIDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1bXAoYnRuT2JqLmlkLCBlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMganVtcChpZCwgdGFyZ2V0KSB7XHJcbiAgICAgICAgbGV0IGFkRGF0YTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChpZCkge1xyXG4gICAgICAgICAgICBjYXNlIDEwMTI6XHJcbiAgICAgICAgICAgIGNhc2UgMTAwMTpcclxuICAgICAgICAgICAgICAgIGFkRGF0YSA9IGF3YWl0IEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFkRGF0YT8uY29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IGBcdTVFN0ZcdTU0NEFcdTY0QURcdTY1M0VcdTU5MzFcdThEMjVbJHthZERhdGEuY29kZX1dYCwgY2FsbDogKCkgPT4ge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0lkOiBpZCA9PSAxMDEyID8gMTAxMiA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZDogeyBhZFJld2FyZDogUmV0dXJuVXNlckluZm9bXCJhZFJld2FyZFwiXSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYXlfYWRfZ2V0X3Jld2FyZCwgW3RhcmdldCwgZC5hZFJld2FyZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gMTAxMikgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFVzZXJJbmZvLmRheXMgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0LnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaTogQXBpSHR0cC5hZFJlY29yZE5vdENsaWNrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdGltZXM6IFVzZXJJbmZvLmNvbnRpbnVvdXNBZFRpbWVzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhZERhdGE/LmRhdGFbXCJoYXNDbGlja2VkXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckluZm8uY29udGludW91c0FkVGltZXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VySW5mby5jb250aW51b3VzQWRUaW1lcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDI6XHJcbiAgICAgICAgICAgIC8vIGFkRGF0YSA9IGF3YWl0IEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAvLyAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgLy8gICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAvLyAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIChhZERhdGE/LmNvZGUpIHtcclxuICAgICAgICAgICAgLy8gICAgIENvcmUudmlldy5vcGVuSGludCh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGV4dDogYCR7YWREYXRhLmRhdGFbXCJtZXNzYWdlXCJdfVske2FkRGF0YS5jb2RlfV1gLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNhbGw6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgLy8gSHR0cENvbnRyb2wuaW5zdFxyXG4gICAgICAgICAgICAvLyAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGFwaTogQXBpSHR0cC5hZCxcclxuICAgICAgICAgICAgLy8gICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRhc2tJZDogMTAwMixcclxuICAgICAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gICAgIC50aGVuKChkOiB7IGFkUmV3YXJkOiBSZXR1cm5Vc2VySW5mb1tcImFkUmV3YXJkXCJdIH0pID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5wbGF5X2FkX2dldF9yZXdhcmQsIFt0YXJnZXQsIGQuYWRSZXdhcmRdKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnRhc2tMaXN0LnJlZnJlc2goKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAwMSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgVGFza1NlcnZpY2UudGFza0FkZFRpbWVzKDEwMTIpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIFRhc2tTZXJ2aWNlLnRhc2tBZGRUaW1lcygxMDAyKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDAzOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA0OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5vcGVuX2ZyaWVuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA1OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcsIHsgcGFybTogeyBpZDogMSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAwNjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3LCB7IHBhcm06IHsgaWQ6IDEgfSB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDc6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnBsYW50X3Nvdyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA4OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDA5OlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5vcGVuX2ZyaWVuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDEwOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLnd4U2hhcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigoZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZCB8fCBkPy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IGQuZGF0YVtcIm1lc3NhZ2VcIl0sIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuSGludCh7IHRleHQ6IGQuZGF0YVtcIm1lc3NhZ2VcIl0sIGNhbGw6ICgpID0+IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBIdHRwQ29udHJvbC5pbnN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLmZyaWVuZFNoYXJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYXNrU2VydmljZS50YXNrQWRkVGltZXMoMTAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcInNoYXJlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTAxMTpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxhbnRfc293KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IENvbmZpZ0dhbWUgZnJvbSBcInNyYy9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwic3JjL2NvbW1vbi9IdHRwQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVGFibGVBbmFseXplIGZyb20gXCJzcmMvY29tbW9uL1RhYmxlQW5hbHl6ZVwiO1xyXG5pbXBvcnQgeyBSZXdhcmRDdXJyZW5jeUJhc2UgfSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZU9iamVjdFwiO1xyXG5pbXBvcnQgQXBwQ29yZSBmcm9tIFwic3JjL2NvcmUvQXBwXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgUGxhbnRTZXJ2aWNlIGZyb20gXCJzcmMvZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBXYXJlaG91c2VTZXJ2aWNlLCB7IFdhcmVIb3VzZURhdGEgfSBmcm9tIFwic3JjL2RhdGFTZXJ2aWNlL1dhcmVob3VzZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2V0RmxvYXRSZXdhcmRPYmogfSBmcm9tIFwiLi9NYWluVmlld1wiO1xyXG5cclxubGV0IHNlbGxOdW0gPSAwO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1xyXG4gKi9cclxuLy9GaWVsZExldmVsVXBWaWV3IFdhcmVob3VzZVZpZXcgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXJlaG91c2VWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtTGlzdCwgdGlwczpcIlx1NzI2OVx1NTRDMVx1NTIxN1x1ODg2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUxpc3Q6IExheWEuTGlzdCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbU5hbWUsIHRpcHM6XCJcdTkwMDlcdTRFMkRcdTcyNjlcdTU0QzFcdTU0MERcdTc5RjBcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1OYW1lOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppdGVtRGVzYywgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NjNDRlx1OEZGMFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbURlc2M6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1JY29uLCB0aXBzOlwiXHU5MDA5XHU0RTJEXHU3MjY5XHU1NEMxaWNvblwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsQ291bnRMYiwgdGlwczpcIlx1OTAwOVx1NEUyRFx1NzI2OVx1NTRDMVx1NTFGQVx1NTUyRVx1NjU3MFx1OTFDRlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxDb3VudExiOiBMYXlhLlRleHRJbnB1dCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbVNlbGxCb3gsIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTcyNjlcdTU0QzFcdTRFRjdcdTY4M0NcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxsQm94OiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsR29sZCwgdGlwczpcIlx1OTFEMVx1NUUwMVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxHb2xkOiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1TZWxsRGlhbW9uZCwgdGlwczpcIlx1OTRCQlx1NzdGM1x1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgaXRlbVNlbGxEaWFtb25kOiBMYXlhLkhCb3ggPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNlbGxCdG4sIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTc2ODRpY29uXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzZWxsQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzZWxsQWRCdG4sIHRpcHM6XCJcdTUxRkFcdTU1MkVcdTc2ODRpY29uIFx1NUU3Rlx1NTQ0QVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgc2VsbEFkQnRuOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTplbXB0eV9sYiwgdGlwczpcIlx1N0E3QVx1NzY4NFx1NjNEMFx1NzkzQVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZW1wdHlfbGI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjggKi9cclxuICAgIHByaXZhdGUgZGF0YUxpc3Q6IFdhcmVIb3VzZURhdGFbXVtdID0gW107XHJcbiAgICAvKiogXHU5MDA5XHU0RTJEXHU3Njg0XHU3MjY5XHU1NEMxIFx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtSW5kZXg6IHN0cmluZyA9IFwiMCwwXCI7XHJcbiAgICAvKiogXHU5MDA5XHU0RTJEXHU3Njg0XHU3MjY5XHU1NEMxXHU2NTcwXHU2MzZFICovXHJcbiAgICBwcml2YXRlIHNlbGVjdEl0ZW1EYXRhOiBXYXJlSG91c2VEYXRhO1xyXG4gICAgLyoqIFx1OTAwOVx1NEUyRFx1NTFGQVx1NTUyRVx1NzI2OVx1NTRDMVx1NzY4NFx1NjU3MFx1OTFDRiAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RJdGVtU2VsbENvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NTM1NVx1NEVGNyBcdTkxRDFcdTVFMDEgKi9cclxuICAgIHByaXZhdGUgdW5pdFByaWNlR29sZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTUzNTVcdTRFRjcgXHU5NEJCXHU3N0YzICovXHJcbiAgICBwcml2YXRlIHVuaXRQcmljZURpYW1vbmQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW5DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgb25PcGVuZWQoKSB7XHJcbiAgICAgICAgQ29yZS5hdWRpby5wbGF5U291bmQoUmVzLmF1ZGlvcy5kYWthaWNhbmdrdSk7XHJcbiAgICAgICAgdGhpcy5zZWxsQWRCdG4uZGlzYWJsZWQgPSAhVXNlckluZm8uYWR2ZXJ0aXNlVGltZXM7XHJcbiAgICAgICAgdGhpcy5zZWxsQWRCdG4uYWN0aXZlID0gQm9vbGVhbihVc2VySW5mby5hZHZlcnRpc2VUaW1lcyk7XHJcbiAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAzIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImJvdHRvbV9hZHZlcnRpc2VtZW50XCIgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnJlbmRlckl0ZW1MaXN0KTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnZTY3JvbGxCYXJTa2luID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0KCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRGVzYyhudWxsKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbEdvbGQucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxEaWFtb25kLnJlbW92ZVNlbGYoKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtU2VsbENvdW50TGIub24oTGF5YS5FdmVudC5JTlBVVCwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSBOdW1iZXIodGhpcy5pdGVtU2VsbENvdW50TGIudGV4dCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtU2VsbENvdW50TGIudGV4dCA9IFwiMVwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ID4gdGhpcy5zZWxlY3RJdGVtRGF0YS5jb3VudClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUxpc3QoKSB7XHJcbiAgICAgICAgbGV0IGkgPSAwLFxyXG4gICAgICAgICAgICB5ID0gMCxcclxuICAgICAgICAgICAgaGFzU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgV2FyZWhvdXNlU2VydmljZS5saXN0LmZvckVhY2goKGQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGFMaXN0W3ldKSB0aGlzLmRhdGFMaXN0W3ldID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YUxpc3RbeV0ucHVzaChkKTtcclxuICAgICAgICAgICAgaWYgKGQuYmFzZS5pZCA9PSB0aGlzLnNlbGVjdEl0ZW1EYXRhPy5iYXNlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNTZWxlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgaWYgKGkgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgICAgIHkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIWhhc1NlbGVjdCAmJiB0aGlzLmRhdGFMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1JbmRleCA9IFwiMCwwXCI7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gdGhpcy5kYXRhTGlzdDtcclxuICAgICAgICB0aGlzLmVtcHR5X2xiLnZpc2libGUgPSAhdGhpcy5kYXRhTGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJJdGVtTGlzdChjZWxsOiBMYXlhLkJveCwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGFMaXN0W2ldO1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMzsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2VsbC5nZXRDaGlsZEJ5TmFtZShgaXRlbV8ke3h9YCkgYXMgTGF5YS5Cb3g7XHJcbiAgICAgICAgICAgIGlmIChkYXRhW3hdKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5kYXRhU291cmNlID0gYCR7aX0sJHt4fWA7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWNvbiA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICBpY29uLnNraW4gPSBkYXRhW3hdLmJhc2UuaWNvbjtcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKSBhcyBMYXlhLkxhYmVsXHJcbiAgICAgICAgICAgICAgICApLnRleHQgPSBgJHtkYXRhW3hdLmJhc2UubmFtZX1fJHtkYXRhW3hdLmNvdW50fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gdGhpcy5pdGVtTGlzdC5zZWxlY3RlZEluZGV4ICYmIHRoaXMuc2VsZWN0SXRlbUluZGV4ID09IGl0ZW0uZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oaWNvbiwgeyB5OiAwIH0sIDE1MCwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbURhdGEgPSBkYXRhW3hdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGVzYyhkYXRhW3hdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWNvbi55ID0gNTY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGljb24ueSAhPSA1NikgTGF5YS5Ud2Vlbi50byhpY29uLCB7IHk6IDU2IH0sIDE1MCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcuY2xvc2UoUmVzLnZpZXdzLldhcmVob3VzZVZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJpdGVtXzBcIjpcclxuICAgICAgICAgICAgY2FzZSBcIml0ZW1fMVwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaXRlbV8yXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1JbmRleCA9IGUudGFyZ2V0W1wiZGF0YVNvdXJjZVwiXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3QucmVmcmVzaCgpOyAvLyBcdThGRDlcdTkxQ0NcdTk3MDBcdTg5ODFcdTRGMThcdTUzMTZcdTczQjBcdTU3MjhcdTUwNUFcdTc2ODRcdTY2MkZcdTUyMzdcdTY1QjBcdTY1NzRcdTRFMkFcdTUyMTdcdTg4NjhcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRkXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQrKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPiB0aGlzLnNlbGVjdEl0ZW1EYXRhLmNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IHRoaXMuc2VsZWN0SXRlbURhdGEuY291bnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWR1Y2VcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA8IDEpIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWxsQnRuQWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInNlbGxCdG5cIjpcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidG5OYW1lID0gZS50YXJnZXQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG5OYW1lID09IFwic2VsbEJ0blwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxsTnVtICYmICEoc2VsbE51bSAlIDEwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImZ1bGxfU2NyZWVuXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGxOdW0rKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEh0dHBDb250cm9sLmluc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpOiBBcGlIdHRwLndhcmVob3VzZVNlbGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiA8TmV0U2VuZEFwaVtcIndhcmVob3VzZVNlbGxcIl0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNlbGVjdEl0ZW1EYXRhLmJhc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuTmFtZSA9PSBcInNlbGxCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBDb25maWdHYW1lLkFwaVR5cGVEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IENvbmZpZ0dhbWUuQXBpVHlwZUFELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGQ6IHsgYWRSZXdhcmQ6IFJldHVyblVzZXJJbmZvW1wiYWRSZXdhcmRcIl0gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxsQWRCdG4uZGlzYWJsZWQgPSAhVXNlckluZm8uYWR2ZXJ0aXNlVGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGxBZEJ0bi5hY3RpdmUgPSBCb29sZWFuKFVzZXJJbmZvLmFkdmVydGlzZVRpbWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2FyZWhvdXNlU2VydmljZS5yZWR1Y2VBbW91bnQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtRGF0YS5iYXNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtTGlzdC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGF0YUxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZXNjKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXdhcmRMaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdFByaWNlR29sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJld2FyZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogVGFibGVBbmFseXplLnRhYmxlKFwiY3VycmVuY3lcIikuZ2V0KENvbmZpZ0dhbWUuZ29sZElkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0UHJpY2VHb2xkICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChidG5OYW1lID09IFwic2VsbEJ0bkFkXCIgPyAyIDogMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1R5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0UHJpY2VEaWFtb25kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV3YXJkTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoQ29uZmlnR2FtZS5kaWFtb25kSWQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SXRlbVNlbGxDb3VudCAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXRQcmljZURpYW1vbmQgKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJ0bk5hbWUgPT0gXCJzZWxsQnRuQWRcIiA/IDIgOiAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVHlwZTogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuTmFtZSA9PSBcInNlbGxCdG5BZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9hZF9nZXRfcmV3YXJkLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC5hZFJld2FyZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5ldmVudENvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IHR5cGU6IFwiRG91Ymxlc2FsZVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMucGxheV9nZXRfcmV3YXJkLCA8R2V0RmxvYXRSZXdhcmRPYmo+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMuc2VsbEJ0biBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogcmV3YXJkTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjazogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVXNlckluZm8uYWRUaW1lcyA+IDEwMCB8fCBVc2VySW5mby5jb250aW51b3VzQWRUaW1lcyA+IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYWRUeXBlOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmFkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFkVHlwZTogMyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmk6IEFwcEV2ZW50TWFwLmV2ZW50Q291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgdHlwZTogXCJmdWxsX1NjcmVlblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwQ29yZS5ydW5BcHBGdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVyaTogQXBwRXZlbnRNYXAuZXZlbnRDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyB0eXBlOiBcImJvdHRvbV9hZHZlcnRpc2VtZW50XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUxRkFcdTUxRkFcdTU1MkVcdTRGRTFcdTYwNkZcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVEZXNjKGQ6IFdhcmVIb3VzZURhdGEpIHtcclxuICAgICAgICBpZiAoIWQpIHtcclxuICAgICAgICAgICAgKHRoaXMuaXRlbUljb24ucGFyZW50IGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICh0aGlzLml0ZW1JY29uLnBhcmVudCBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbVNlbGxEaWFtb25kLnJlbW92ZVNlbGYoKTtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsR29sZC5yZW1vdmVTZWxmKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUljb24uc2tpbiA9IGQuYmFzZS5pY29uO1xyXG4gICAgICAgIHRoaXMuaXRlbU5hbWUudGV4dCA9IGQuYmFzZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuaXRlbURlc2MudGV4dCA9IGQuYmFzZS5kZXNjO1xyXG4gICAgICAgIGxldCBwcmljZUdvbGQ6IFJld2FyZEN1cnJlbmN5QmFzZSwgcHJpY2VEaWFtb25kOiBSZXdhcmRDdXJyZW5jeUJhc2U7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBkLmJhc2UuZ2Fpbi5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkLmJhc2UuZ2Fpblt4XSk7XHJcbiAgICAgICAgICAgIGlmICghZC5iYXNlLmdhaW5beF0uY291bnQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoZC5iYXNlLmdhaW5beF0ub2JqLmlkID09IENvbmZpZ0dhbWUuZ29sZElkKSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZUdvbGQgPSBkLmJhc2UuZ2Fpblt4XTtcclxuICAgICAgICAgICAgICAgICh0aGlzLml0ZW1TZWxsR29sZC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikgYXMgTGF5YS5JbWFnZSkuc2tpbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgZC5iYXNlLmdhaW5beF0ub2JqLmljb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1TZWxsQm94LmFkZENoaWxkKHRoaXMuaXRlbVNlbGxHb2xkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByaWNlRGlhbW9uZCA9IGQuYmFzZS5nYWluW3hdO1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuaXRlbVNlbGxEaWFtb25kLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID1cclxuICAgICAgICAgICAgICAgICAgICBkLmJhc2UuZ2Fpblt4XS5vYmouaWNvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVNlbGxCb3guYWRkQ2hpbGQodGhpcy5pdGVtU2VsbERpYW1vbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW1TZWxsQ291bnQgPSBkLmNvdW50O1xyXG4gICAgICAgIHRoaXMudW5pdFByaWNlR29sZCA9IHByaWNlR29sZD8uY291bnQgfHwgMDtcclxuICAgICAgICB0aGlzLnVuaXRQcmljZURpYW1vbmQgPSBwcmljZURpYW1vbmQ/LmNvdW50IHx8IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RTZWxsQ291bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NTNFRlx1NEVFNVx1NTFGQVx1NTUyRVx1NzY4NFx1NjU3MFx1OTFDRlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNlbGVjdFNlbGxDb3VudCgpIHtcclxuICAgICAgICB0aGlzLml0ZW1TZWxsQ291bnRMYi50ZXh0ID0gdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICsgXCJcIjtcclxuICAgICAgICAodGhpcy5pdGVtU2VsbEdvbGQuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICogdGhpcy51bml0UHJpY2VHb2xkICsgXCJcIjtcclxuICAgICAgICAodGhpcy5pdGVtU2VsbERpYW1vbmQuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RJdGVtU2VsbENvdW50ICogdGhpcy51bml0UHJpY2VEaWFtb25kICsgXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBvbkhkRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBBcHBDb3JlLnJ1bkFwcEZ1bmN0aW9uKHtcclxuICAgICAgICAgICAgdXJpOiBBcHBFdmVudE1hcC5jbG9zZUFkLFxyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIFdpdGhkcmF3UmVjb3JkVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2l0aGRyYXdSZWNvcmRWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsaXN0LCB0aXBzOlwiXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsaXN0OiBMYXlhLkxpc3Q7XHJcblxyXG4gICAgcHJpdmF0ZSBkYXRhTGlzdDogV2l0aGRyYXdSZWNvcmREYXRhW107XHJcblxyXG4gICAgb25PcGVuZWQoZTogV2l0aGRyYXdSZWNvcmREYXRhW10pOiB2b2lkIHtcclxuICAgICAgICBlLnNvcnQoKGEsIGIpID0+IGIudGltZSAtIGEudGltZSk7XHJcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGU7XHJcbiAgICAgICAgdGhpcy5saXN0LmFycmF5ID0gZTtcclxuICAgICAgICB0aGlzLmxpc3QucmVuZGVySGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5pdGVtUmVuZGVyKTtcclxuICAgICAgICB0aGlzLmxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgICAgICh0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lKFwiZW1wdHlfbGJcIikgYXMgTGF5YS5MYWJlbCkudmlzaWJsZSA9ICFlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGl0ZW1SZW5kZXIoY2VsbDogTGF5YS5JbWFnZSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuZGF0YUxpc3RbaV07XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICBjZWxsLmdldENoaWxkQnlOYW1lKFwicmV3YXJkX2JveFwiKS5nZXRDaGlsZEJ5TmFtZShcImFtb3VudFwiKSBhcyBMYXlhLkxhYmVsXHJcbiAgICAgICAgKS50ZXh0ID0gYC0ke2QuZGlhbW9uZH1gO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwidGltZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7bmV3IERhdGUoZC50aW1lKS50b0xvY2FsZVN0cmluZyhcclxuICAgICAgICAgICAgXCJ6aC1DTlwiLFxyXG4gICAgICAgICAgICB7IGhvdXIxMjogZmFsc2UgfVxyXG4gICAgICAgICl9YDtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJzdGF0ZV9ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzdGF0ZVwiKSBhcyBMYXlhLkxhYmVsO1xyXG4gICAgICAgIGxldCB3aXRoZHJhd2FsID0gVGFibGVBbmFseXplLnRhYmxlKFwiY29uZmlnXCIpLmdldChcIndpdGhkcmF3YWxcIikudmFsdWUgYXMgc3RyaW5nW107XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJzdGF0ZV9ib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwcmljZVwiKSBhcyBMYXlhLkxhYmVsKS50ZXh0ID0gYCR7KFxyXG4gICAgICAgICAgICAoTnVtYmVyKHdpdGhkcmF3YWxbMl0pIC8gTnVtYmVyKHdpdGhkcmF3YWxbMV0pKSAqXHJcbiAgICAgICAgICAgIGQuZGlhbW9uZFxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgLm1hdGNoKC9eXFxkKyg/OlxcLlxcZHswLDJ9KT8vKX1cdTUxNDNgO1xyXG4gICAgICAgIHN0YXRlLnRleHQgPSBgJHtkLnN0YXRlID8gXCJcdTVCQTFcdTY4MzhcdTRFMkRcIiA6IFwiXHU1REYyXHU1MjMwXHU4RDI2XCJ9YDtcclxuICAgICAgICBzdGF0ZS5jb2xvciA9IGQuc3RhdGUgPyBcIiNFOTM2MzZcIiA6IFwiIzVBM0YyQVwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuV2l0aGRyYXdSZWNvcmRWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBBYm91dFZpZXcgZnJvbSBcIi4vdmlldy9BYm91dFZpZXdcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblwiXG5pbXBvcnQgVmlld1Nob3dBbmkgZnJvbSBcIi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiXG5pbXBvcnQgQWRkTGFuZFZpZXcgZnJvbSBcIi4vdmlldy9BZGRMYW5kVmlld1wiXG5pbXBvcnQgQnV5Vml0YWxpdHlWaWV3IGZyb20gXCIuL3ZpZXcvQnV5Vml0YWxpdHlWaWV3XCJcbmltcG9ydCBGaWVsZExldmVsVXBWaWV3IGZyb20gXCIuL3ZpZXcvRmllbGRMZXZlbFVwVmlld1wiXG5pbXBvcnQgRnJpZW5kc0Rlc2NWaWV3IGZyb20gXCIuL3ZpZXcvRnJpZW5kc0Rlc2NWaWV3XCJcbmltcG9ydCBGcmllbmRzUmV3YXJkVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNSZXdhcmRWaWV3XCJcbmltcG9ydCBGcmllbmRzVmlldyBmcm9tIFwiLi92aWV3L0ZyaWVuZHNWaWV3XCJcbmltcG9ydCBHYXRoZXJEZXNjVmlldyBmcm9tIFwiLi92aWV3L0dhdGhlckRlc2NWaWV3XCJcbmltcG9ydCBHdWlkZVZpZXcgZnJvbSBcIi4vdmlldy9HdWlkZVZpZXdcIlxuaW1wb3J0IEhpbnRWaWV3IGZyb20gXCIuL3ZpZXcvSGludFZpZXdcIlxuaW1wb3J0IExvZ2luVmlldyBmcm9tIFwiLi92aWV3L0xvZ2luVmlld1wiXG5pbXBvcnQgTWFpbERlc2NWaWV3IGZyb20gXCIuL3ZpZXcvTWFpbERlc2NWaWV3XCJcbmltcG9ydCBNYWlsVmlldyBmcm9tIFwiLi92aWV3L01haWxWaWV3XCJcbmltcG9ydCBNYWluVmlldyBmcm9tIFwiLi92aWV3L01haW5WaWV3XCJcbmltcG9ydCBGaWd1cmVBbmkgZnJvbSBcIi4vY29tcG9uZW50cy9GaWd1cmVBbmlcIlxuaW1wb3J0IEZpZWxkQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIlxuaW1wb3J0IFJlZERvdENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1JlZERvdENvbXBvbmVudFwiXG5pbXBvcnQgT3JkZXJWaWV3IGZyb20gXCIuL3ZpZXcvT3JkZXJWaWV3XCJcbmltcG9ydCBPdmVyVmlldyBmcm9tIFwiLi92aWV3L092ZXJWaWV3XCJcbmltcG9ydCBTZXR0aW5nVmlldyBmcm9tIFwiLi92aWV3L1NldHRpbmdWaWV3XCJcbmltcG9ydCBTaG9wVmlldyBmcm9tIFwiLi92aWV3L1Nob3BWaWV3XCJcbmltcG9ydCBTaWduSW5EZXNjVmlldyBmcm9tIFwiLi92aWV3L1NpZ25JbkRlc2NWaWV3XCJcbmltcG9ydCBTaWduSW5WaWV3IGZyb20gXCIuL3ZpZXcvU2lnbkluVmlld1wiXG5pbXBvcnQgU3BlZWRVcFZpZXcgZnJvbSBcIi4vdmlldy9TcGVlZFVwVmlld1wiXG5pbXBvcnQgVGFza1ZpZXcgZnJvbSBcIi4vdmlldy9UYXNrVmlld1wiXG5pbXBvcnQgV2FyZWhvdXNlVmlldyBmcm9tIFwiLi92aWV3L1dhcmVob3VzZVZpZXdcIlxuaW1wb3J0IFdpdGhkcmF3UmVjb3JkVmlldyBmcm9tIFwiLi92aWV3L1dpdGhkcmF3UmVjb3JkVmlld1wiXHJcbi8qXHJcbiogXHU2RTM4XHU2MjBGXHU1MjFEXHU1OUNCXHU1MzE2XHU5MTREXHU3RjZFO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xMDgwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTkyMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInZpZXcvQWJvdXRWaWV3LnRzXCIsQWJvdXRWaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9CdXR0b24udHNcIixCdXR0b24pO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL1ZpZXdTaG93QW5pLnRzXCIsVmlld1Nob3dBbmkpO1xuICAgICAgICByZWcoXCJ2aWV3L0FkZExhbmRWaWV3LnRzXCIsQWRkTGFuZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0J1eVZpdGFsaXR5Vmlldy50c1wiLEJ1eVZpdGFsaXR5Vmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRmllbGRMZXZlbFVwVmlldy50c1wiLEZpZWxkTGV2ZWxVcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0ZyaWVuZHNEZXNjVmlldy50c1wiLEZyaWVuZHNEZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1Jld2FyZFZpZXcudHNcIixGcmllbmRzUmV3YXJkVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRnJpZW5kc1ZpZXcudHNcIixGcmllbmRzVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvR2F0aGVyRGVzY1ZpZXcudHNcIixHYXRoZXJEZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvR3VpZGVWaWV3LnRzXCIsR3VpZGVWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9IaW50Vmlldy50c1wiLEhpbnRWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9Mb2dpblZpZXcudHNcIixMb2dpblZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haWxEZXNjVmlldy50c1wiLE1haWxEZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpbFZpZXcudHNcIixNYWlsVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpblZpZXcudHNcIixNYWluVmlldyk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvRmlndXJlQW5pLnRzXCIsRmlndXJlQW5pKTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9GaWVsZENvbXBvbmVudC50c1wiLEZpZWxkQ29tcG9uZW50KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9SZWREb3RDb21wb25lbnQudHNcIixSZWREb3RDb21wb25lbnQpO1xuICAgICAgICByZWcoXCJ2aWV3L09yZGVyVmlldy50c1wiLE9yZGVyVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvT3ZlclZpZXcudHNcIixPdmVyVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU2V0dGluZ1ZpZXcudHNcIixTZXR0aW5nVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU2hvcFZpZXcudHNcIixTaG9wVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU2lnbkluRGVzY1ZpZXcudHNcIixTaWduSW5EZXNjVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU2lnbkluVmlldy50c1wiLFNpZ25JblZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1NwZWVkVXBWaWV3LnRzXCIsU3BlZWRVcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1Rhc2tWaWV3LnRzXCIsVGFza1ZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1dhcmVob3VzZVZpZXcudHNcIixXYXJlaG91c2VWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9XaXRoZHJhd1JlY29yZFZpZXcudHNcIixXaXRoZHJhd1JlY29yZFZpZXcpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsICJpbXBvcnQgeyBBcHBFdmVudE1hcCwgRXZlbnRNYXBzIH0gZnJvbSBcIi4vY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuL2RhdGFTZXJ2aWNlL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBQbGFudFNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvUGxhbnRTZXJ2aWNlXCI7XHJcbmltcG9ydCBMYW5kU2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9MYW5kU2VydmljZVwiO1xyXG5pbXBvcnQgV2FyZWhvdXNlU2VydmljZSBmcm9tIFwiLi9kYXRhU2VydmljZS9XYXJlaG91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBIdHRwQ29udHJvbCBmcm9tIFwiLi9jb21tb24vSHR0cENvbnRyb2xcIjtcclxuaW1wb3J0IExvY2FsU3RvcmFnZVNlcnZpY2UgZnJvbSBcIi4vZGF0YVNlcnZpY2UvTG9jYWxTdG9yYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgQ29uZmlnR2FtZSwgeyBCdWlsZFR5cGUgfSBmcm9tIFwiLi9jb21tb24vQ29uZmlnR2FtZVwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwiLi9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBBcHBDb3JlIGZyb20gXCIuL2NvcmUvQXBwXCI7XHJcbmNsYXNzIE1haW4ge1xyXG4gICAgLyoqIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHU1MjE3XHU4ODY4ICovXHJcbiAgICBzdGF0aWMgY3VzdG9tUmVuZGVySUQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcImlQaG9uZVwiKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIENvbmZpZy51c2VXZWJHTDIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHU2ODM5XHU2MzZFSURFXHU4QkJFXHU3RjZFXHU1MjFEXHU1OUNCXHU1MzE2XHU1RjE1XHU2NENFXHJcbiAgICAgICAgaWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG4gICAgICAgIGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG4gICAgICAgIExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25WID0gR2FtZUNvbmZpZy5hbGlnblY7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSDtcclxuICAgICAgICAvL1x1NTE3Q1x1NUJCOVx1NUZBRVx1NEZFMVx1NEUwRFx1NjUyRlx1NjMwMVx1NTJBMFx1OEY3RHNjZW5lXHU1NDBFXHU3RjAwXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgTGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuICAgICAgICAvL1x1NjI1M1x1NUYwMFx1OEMwM1x1OEJENVx1OTc2Mlx1Njc3Rlx1RkYwOFx1OTAxQVx1OEZDN0lERVx1OEJCRVx1N0Y2RVx1OEMwM1x1OEJENVx1NkEyMVx1NUYwRlx1RkYwQ1x1NjIxNlx1ODAwNXVybFx1NTczMFx1NTc0MFx1NTg5RVx1NTJBMGRlYnVnPXRydWVcdTUzQzJcdTY1NzBcdUZGMENcdTU3NDdcdTUzRUZcdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDlcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuICAgICAgICBMYXlhLmFsZXJ0R2xvYmFsRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5iZ0NvbG9yID0gXCIjZmZmZmZmXCI7XHJcblxyXG4gICAgICAgIEJVSUxEX1RZUEUgPT0gQnVpbGRUeXBlLmRlYnVnICYmIEdhbWVDb25maWcuc3RhdCAmJiBMYXlhLlN0YXQuc2hvdygpO1xyXG5cclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1OEQ0NFx1NkU5MFx1NzI0OFx1NjcyQ1x1NjNBN1x1NTIzNlx1RkYwQ3ZlcnNpb24uanNvblx1NzUzMUlERVx1NTNEMVx1NUUwM1x1NTI5Rlx1ODBGRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NEU1Rlx1NEUwRFx1NUY3MVx1NTRDRFx1NTQwRVx1N0VFRFx1NkQ0MVx1N0EwQlxyXG4gICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksXHJcbiAgICAgICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT05cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1NTkyN1x1NUMwRlx1NTZGRVx1NjYyMFx1NUMwNFx1RkYwQ1x1NTJBMFx1OEY3RFx1NUMwRlx1NTZGRVx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NTNEMVx1NzNCMFx1NUMwRlx1NTZGRVx1NTcyOFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1OTFDQ1x1OTc2Mlx1RkYwQ1x1NTIxOVx1NEYxOFx1NTE0OFx1NTJBMFx1OEY3RFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1RkYwQ1x1ODAwQ1x1NEUwRFx1NjYyRlx1NUMwRlx1NTZGRVxyXG4gICAgICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXHJcbiAgICAgICAgICAgIFwiZmlsZWNvbmZpZy5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ29uZmlnTG9hZGVkKCkge1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHJcbiAgICAgICAgQ29uZmlnW1wiY3VzdG9tUmVuZGVySURcIl0gPSBbXTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2VTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBIdHRwQ29udHJvbC5pbnN0LmluaXQoQ29uZmlnR2FtZS5iYXNlVXJsKTtcclxuICAgICAgICBDb3JlLmV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2dpbl9nYW1lLCB0aGlzLCB0aGlzLmxvZ2luR2FtZSk7XHJcbiAgICAgICAgTGF5YS5Tb3VuZE1hbmFnZXIudXNlQXVkaW9NdXNpYyA9IGZhbHNlO1xyXG4gICAgICAgIEFwcENvcmUubGlzdGVuQXBwRnVuY3Rpb24oKTtcclxuXHJcbiAgICAgICAgLy8gVmlld01hbmFnZXIuaW5zdC5pbml0KCk7XHJcblxyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihSZXMudmlld3MuTG9naW5WaWV3LCB7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXJtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbDogKGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0R2FtZURhdGEoZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcENvcmUucnVuQXBwRnVuY3Rpb24oeyB1cmk6IEFwcEV2ZW50TWFwLmNsb3NlSW1hZ2UsIGRhdGE6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIExheWEuVmlldy5zZXRMb2FkaW5nUGFnZShlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIExheWEuVmlldy5zaG93TG9hZGluZ1BhZ2UobnVsbCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoOTk5OTk5OTk5OTk5OTk5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvZ2luR2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luR2FtZSgpIHtcclxuICAgICAgICBMYXlhLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgICBSZXMuc2NlbmVzLFxyXG4gICAgICAgICAgICAvLyBbJ3NjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZSddICxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gUmVzLnNjZW5lcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgTGF5YS5sb2FkZXIuY2xlYXJUZXh0dXJlUmVzKGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgQ29yZS5hdWRpby5wbGF5TXVzaWMoUmVzLmF1ZGlvcy5CR00sIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0R2FtZURhdGEoZDogTmV0SW5pdCkge31cclxufVxyXG4vL1x1NkZDMFx1NkQzQlx1NTQyRlx1NTJBOFx1N0M3QlxyXG5uZXcgTWFpbigpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR08sTUFBVztBQUFYLFlBQVcsWUFBWDtBQUVILGtDQUFnQjtBQUdoQixpQ0FBZTtBQUdmLGlDQUFlO0FBR2Ysa0NBQWdCO0FBR2hCLCtCQUFhO0FBRWIsOEJBQVk7QUFFWixnQ0FBYztBQUVkLHFDQUFtQjtBQUVuQiw4Q0FBNEI7QUFFNUIsbUNBQWlCO0FBc0JqQixvQ0FBa0I7QUFFbEIsdUNBQXFCO0FBRXJCLG1DQUFpQjtBQUVqQiw0QkFBVTtBQUVWLGdDQUFjO0FBRWQsOEJBQVk7QUFFWixxQ0FBbUI7QUFBQSxLQTFETDtBQWdFWCxNQUFXO0FBQVgsWUFBVyxjQUFYO0FBRUgseUJBQUs7QUFFTCw4QkFBVTtBQUVWLGlDQUFhO0FBRWIsaUNBQWE7QUFFYiw4QkFBVTtBQUVWLDhCQUFVO0FBRVYsaUNBQWE7QUFFYix1Q0FBbUI7QUFFbkIsdUNBQW1CO0FBRW5CLHNDQUFrQjtBQUVsQixtQ0FBZTtBQUVmLGlDQUFhO0FBRWIscUNBQWlCO0FBQUEsS0ExQkg7OztBQzlEVixNQUFLO0FB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UUFBUSxFQUFDLFFBQU8sQ0FBQyxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxHQUFFLFNBQVEsa0NBQVEsUUFBTyxrQ0FBUSxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxZQUFXLFNBQVEsSUFBRyxTQUFRLG9DQUFVLFFBQU8sb0NBQVUsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLElBQUcsU0FBUSxvQ0FBVSxRQUFPLG9DQUFVLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxHQUFFLFNBQVEsdUJBQU8sUUFBTyx1QkFBTyxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxZQUFXLFNBQVEsR0FBRSxTQUFRLG1DQUFTLFFBQU8sbUNBQVMsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLEdBQUUsU0FBUSw0QkFBTyxRQUFPLG1DQUFTLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFdBQVUsU0FBUSxJQUFHLFNBQVEsb0NBQVUsUUFBTyxvQ0FBVSxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxZQUFXLFNBQVEsR0FBRSxTQUFRLG1DQUFTLFFBQU8sbUNBQVMsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsWUFBVyxTQUFRLEdBQUUsU0FBUSw0QkFBTyxRQUFPLG1DQUFTLFFBQU8sUUFBTSxFQUFDLE1BQUssTUFBSyxVQUFTLFlBQVcsU0FBUSxJQUFHLFNBQVEsa0NBQVEsUUFBTyx3QkFBUSxRQUFPLFFBQU0sRUFBQyxNQUFLLE1BQUssVUFBUyxZQUFXLFNBQVEsR0FBRSxTQUFRLDRCQUFPLFFBQU8sbUNBQVMsUUFBTyxRQUFNLEVBQUMsTUFBSyxNQUFLLFVBQVMsV0FBVSxTQUFRLEdBQUUsU0FBUSx3Q0FBUyxRQUFPLDZCQUFRLFFBQU8sU0FBTyxVQUFTLENBQUMsRUFBQyxNQUFLLE1BQUssUUFBTyxHQUFFLFVBQVMsZ0JBQWMsRUFBQyxNQUFLLE1BQUssUUFBTyxJQUFHLFVBQVMs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aUNBQWdDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksZ0NBQStCLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksaUNBQWdDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksaUNBQWdDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWlDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWlDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksa0NBQWlDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksa0NBQWlDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGNBQVksRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGVBQWEsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxLQUFJLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLE1BQUssYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxNQUFLLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsTUFBSyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLElBQUcsY0FBYSxPQUFNLGFBQVksbUNBQWtDLGdCQUFlLGdCQUFjLEVBQUMsTUFBSyxJQUFHLGNBQWEsUUFBTyxhQUFZLG1DQUFrQyxnQkFBZSxnQkFBYyxFQUFDLE1BQUssSUFBRyxjQUFhLFFBQU8sYUFBWSxtQ0FBa0MsZ0JBQWUsZ0JBQWMsRUFBQyxNQUFLLEtBQUksY0FBYSxRQUFPLGFBQVksbUNBQWtDLGdCQUFlLGlCQUFlLFFBQU8sSUFBRyxhQUFZLENBQUMsRUFBQyxNQUFLLEdBQUUsVUFBUyxVQUFTLFFBQU8sVUFBUyxRQUFPLE1BQUssZUFBYyxLQUFJLGVBQWMsS0FBRyxFQUFDLE1BQUssR0FBRSxVQUFTLGFBQVksUUFBTyxhQUFZLFFBQU8sS0FBSSxlQUFjLE1BQUssZUFBYyxLQUFHLEVBQUMsTUFBSyxHQUFFLFVBQVMsYUFBWSxRQUFPLGNBQWEsUUFBTyxNQUFLLGVBQWMsTUFBSyxlQUFjLEtBQUcs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
