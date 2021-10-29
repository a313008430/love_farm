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
  })(EventMaps || (EventMaps = {}));

  // src/common/Res.ts
  var views;
  (function(views3) {
    views3["AddLandView"] = "scenes/views/AddLandView.scene";
    views3["FieldLevelUpView"] = "scenes/views/FieldLevelUpView.scene";
    views3["LoadDialog"] = "scenes/views/LoadDialog.scene";
    views3["MailView"] = "scenes/views/MailView.scene";
    views3["MainView"] = "scenes/views/MainView.scene";
    views3["OrderView"] = "scenes/views/OrderView.scene";
    views3["SettingView"] = "scenes/views/SettingView.scene";
    views3["ShopView"] = "scenes/views/ShopView.scene";
    views3["SignInView"] = "scenes/views/SignInView.scene";
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
  })(audios || (audios = {}));
  var scenes = [
    "scenes/views/WarehouseView.scene",
    "scenes/views/TaskView.scene",
    "scenes/views/SignInView.scene",
    "scenes/views/ShopView.scene",
    "scenes/views/SettingView.scene",
    "scenes/views/OrderView.scene",
    "scenes/views/MainView.scene",
    "scenes/views/MailView.scene",
    "scenes/views/LoadDialog.scene",
    "scenes/views/FieldLevelUpView.scene",
    "scenes/views/AddLandView.scene",
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
      console.log(this.aniType);
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
              scaleX: 0,
              scaleY: 0
            }, 300, Laya.Ease.strongOut, new Laya.Handler(this, () => {
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
        if (url !== Res_default.views.LoadDialog) {
          Laya.timer.frameOnce(1, this, () => {
            Laya.View.hideLoadingPage(data.hideLoadDelay);
          });
        }
      }
      data.closeOther = false;
      Laya.View.open(url, data.closeOther, data.parm, Laya.Handler.create(this, (e) => {
        if (url != Res_default.views.LoadDialog)
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

  // src/view/AddLandView.ts
  var AddLandView = class extends GameScript {
    onClick(e) {
      switch (e.target.name) {
        case "closeAddLandLayer":
          core_default.view.close(Res_default.views.AddLandView);
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

  // src/view/LoadView.ts
  var LoadView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.loadBar = null;
      this.loadBarOldWidth = 0;
    }
    onAwake() {
    }
    onEnable() {
      EventGlobal_default.on(EventMaps.load_progress, this, this.loadProgress);
      this.loadBarOldWidth = this.loadBar.width;
      this.loadBar.width = 0;
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

  // src/common/NetMaps.ts
  var ApiHttp;
  (function(ApiHttp2) {
    ApiHttp2["init"] = "/init";
  })(ApiHttp || (ApiHttp = {}));

  // src/common/Tools.ts
  var Tools = class {
    static parseString(str, format = ",") {
      return str.split(format);
    }
  };
  Tools.formatSeconds = (s) => new Date(s * 1e3).toISOString().substr(11, 8);

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
      this.showShadowIcon(false);
      this.timeBox.visible = false;
      this.timeBox.active = false;
      this.topStateIcon.visible = false;
      this.lvNode.visible = false;
    }
    updateDate(d) {
      for (let x = 0; x < d.landList.length; x++) {
        if (d.landList[x].id == this.fieldId) {
          this.date = d.landList[x];
          break;
        }
      }
      if (this.date) {
        this.showIcon(true);
        console.log(this.icon);
        this.fieldNode.skin = this.fieldEmptyRes;
        this.showIcon(Boolean(this.date.productId));
        this.lvNode.visible = true;
        if (this.date.matureTimeLeft) {
          this.timeBox.visible = true;
          this.timeBox.active = true;
          this.showShadowIcon(true);
          this.updateCountDown();
          this.updateLevel();
          this.topStateIcon.visible = true;
          this.topStateIconAni(true);
        } else {
          if (this.date.productId) {
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
      if (this.date.matureTimeLeft) {
        this.countDownLb.text = Tools.formatSeconds(this.date.matureTimeLeft);
        Laya.timer.once(1e3, this, () => {
          this.date.matureTimeLeft--;
          this.countDownLb.text = Tools.formatSeconds(this.date.matureTimeLeft);
          return this.updateCountDown();
        });
      } else {
        console.log("\u5012\u8BA1\u65F6\u7ED3\u675F ");
        if (!this.buildIng)
          this.setStateIconSkin(3);
        this.showTimeBox(false);
      }
    }
    updateLevel() {
      this.lvNode.skin = `main_scene/img_level${this.date.lv}.png`;
    }
    onClick() {
      console.log(this.fieldId, this.buildIng);
      if (this.date) {
        if (this.buildIng) {
          core_default.view.open(Res_default.views.FieldLevelUpView, { parm: this.fieldId });
        }
      } else {
        core_default.view.open(Res_default.views.AddLandView, { parm: this.fieldId });
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
  ], FieldComponent.prototype, "updateDate", 1);

  // src/common/UserInfo.ts
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
      this.landList = [];
    }
    onHdAwake() {
      this.landUpLayer.visible = false;
      this.landUpLayer.active = false;
      for (let x = 0; x < this.landBox.numChildren; x++) {
        this.landList.push(this.landBox.getChildAt(x).getComponent(FieldComponent));
      }
      this.landList.sort((a, b) => {
        return a.fieldId - b.fieldId;
      });
      Laya.timer.frameOnce(1, this, () => {
        core_default.eventGlobal.event(EventMaps.update_field, {
          landList: [
            {
              id: 0,
              lv: 1,
              productId: 1e3,
              matureTimeLeft: 3
            },
            {
              id: 3,
              lv: 9,
              productId: 1e3,
              matureTimeLeft: 0
            }
          ]
        });
        for (let x = 0, l = this.landList.length; x < l; x++) {
          if (!this.landList[x].date) {
            this.landList[x].showIcon(true);
            break;
          }
        }
      });
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
      let a = d.data.landList;
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
          core_default.view.open(Res_default.views.ShopView, { parm: 2 });
          break;
        case "dog":
          core_default.view.open(Res_default.views.ShopView, { parm: 1 });
          break;
        case "order_box":
          core_default.view.open(Res_default.views.OrderView);
          break;
        case "land":
          break;
        case "landLevelUp":
          this.LandLevelUp(true);
          break;
        case "close_up":
          this.LandLevelUp(false);
          break;
      }
    }
    LandLevelUp(show) {
      let bg = this.landUpLayer.getChildByName("bg");
      if (show) {
        bg.alpha = 0;
        Laya.Tween.to(bg, { alpha: 0.75 }, 150);
        this.landUpLayer.getChildByName("land_outer").addChild(this.landBox);
        this.landUpLayer.active = true;
        this.landUpLayer.visible = true;
        this.landList.forEach((e) => {
          if (e.date) {
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
          if (e.date) {
            e.showIcon(true);
            if (e.date.matureTimeLeft)
              e.showTimeBox(true);
            e.showShadowIcon(true);
          }
          e.buildIng = false;
          if (e.date) {
            if (e.date.productId) {
              e.setStateIconSkin(e.date.matureTimeLeft ? 1 : 3);
            }
          } else {
            e.setStateIconSkin(1);
          }
        });
      }
    }
  };
  __decorateClass([
    core_default.eventOn(ApiHttp.init)
  ], MainView.prototype, "gameInit", 1);

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

  // src/components/FloatViewShowAni.ts
  var FloatViewShowAni = class extends Laya.Script {
    constructor() {
      super();
      this.effectTweenOpen = null;
      this.effectTweenClose = null;
      this.content = null;
    }
    doOpen() {
    }
    doClose() {
    }
    onEnable() {
      let dialog = this.owner;
      this.content.scale(1, 1);
      this.effectTweenOpen = Laya.Tween.from(this.content, { x: Laya.stage.width / 2, y: Laya.stage.height / 2, scaleX: 0, scaleY: 0 }, 300, Laya.Ease.backOut, Laya.Handler.create(this, this.doOpen, [dialog]), 0, false, false);
    }
    closeView() {
      let dialog = this.owner;
      return new Promise((resolve) => {
        this.effectTweenClose = Laya.Tween.to(this.content, { x: Laya.stage.width / 2, y: Laya.stage.height / 2, scaleX: 0, scaleY: 0 }, 300, Laya.Ease.strongOut, new Laya.Handler(this, () => {
          this.doClose();
          resolve(null);
        }, [dialog]), 0, false, false);
      });
    }
    onDisable() {
      this.effectTweenOpen && Laya.Tween.clear(this.effectTweenOpen);
      this.effectTweenOpen = null;
      this.effectTweenClose && Laya.Tween.clear(this.effectTweenClose);
      this.effectTweenClose = null;
    }
  };

  // src/view/ShopView.ts
  var ShopView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.alphaBg = null;
      this.itemList = null;
      this.btnBoxTop = null;
      this.bottomBox = null;
      this.btnTopResList = [
        ["game/img_seedsNormal.png", "game/img_seedsSelected.png"],
        ["game/img_petNormal.png", "game/img_petSelected.png"],
        ["game/img_foodnNormal.png", "game/img_foodnSelected.png"],
        ["game/img_bankNormal.png", "game/img_bankSelected.png"]
      ];
      this.topBtnSelectIndex = 0;
      this.itemListSelectIndex = 0;
      this.itemSelectBg = ["game/img_petbagNormal.png", "game/img_petbagSelected.png"];
    }
    onHdEnable() {
    }
    onHdAwake() {
      this.updateTopBtnState();
      this.alphaBg.alpha = 0.75;
      console.log(this.itemList);
      let ar = [];
      for (let x = 0; x < 30; x++) {
        ar.push({ name: x });
      }
      this.itemList.array = ar;
      this.itemList.renderHandler = new Laya.Handler(this, this.updateItem);
      this.itemList.selectHandler = new Laya.Handler(this, this.onSelect);
      this.itemList.vScrollBarSkin = null;
    }
    onOpened(e) {
      this.topBtnSelectIndex = e || 0;
      this.updateTopBtnState();
    }
    onSelect(e) {
      console.log(e);
      this.itemListSelectIndex = e;
    }
    updateItem(cell, index) {
      cell.getChildByName("hbox").getChildByName("num").value = index;
      if (index == this.itemListSelectIndex) {
        cell.skin = this.itemSelectBg[1];
      } else {
        cell.skin = this.itemSelectBg[0];
      }
    }
    onClick(e) {
      switch (e.target.name) {
        case "close":
          ViewManager.inst.close(Res_default.views.ShopView, false, true, FloatViewShowAni);
          break;
        case "seed":
        case "pet":
        case "feed":
        case "bank":
          let topBtnIndex = this.btnBoxTop.getChildIndex(e.target);
          if (this.topBtnSelectIndex != topBtnIndex) {
            this.topBtnSelectIndex = topBtnIndex;
            this.updateTopBtnState();
          }
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
        this.bottomBox.getChildAt(x).visible = false;
        this.bottomBox.getChildAt(x).active = false;
      }
      switch (this.topBtnSelectIndex) {
        case 0:
          this.bottomBox.getChildAt(0).visible = true;
          this.bottomBox.getChildAt(0).active = true;
          break;
        case 1:
          this.bottomBox.getChildAt(1).visible = true;
          this.bottomBox.getChildAt(1).active = true;
          break;
        case 2:
          this.bottomBox.getChildAt(0).visible = true;
          this.bottomBox.getChildAt(0).active = true;
          break;
        case 3:
          this.bottomBox.getChildAt(2).visible = true;
          this.bottomBox.getChildAt(2).active = true;
          break;
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
    onClick(e) {
      switch (e.target.name) {
        case "close":
          core_default.view.close(Res_default.views.WarehouseView);
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
      reg("components/Button.ts", Button);
      reg("components/ViewShowAni.ts", ViewShowAni);
      reg("view/AddLandView.ts", AddLandView);
      reg("view/FieldLevelUpView.ts", FieldLevelUpView);
      reg("view/LoadView.ts", LoadView);
      reg("view/MailView.ts", MailView);
      reg("view/MainView.ts", MainView);
      reg("components/FieldComponent.ts", FieldComponent);
      reg("view/OrderView.ts", OrderView);
      reg("view/SettingView.ts", SettingView);
      reg("view/ShopView.ts", ShopView);
      reg("components/FloatViewShowAni.ts", FloatViewShowAni);
      reg("view/SignInView.ts", SignInView);
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
        yield new Promise((resolve) => {
          ViewManager.inst.open(Res_default.views.LoadDialog, {
            showLoad: false,
            complete: (e) => {
              Laya.View.setLoadingPage(e);
              Laya.timer.frameOnce(1, this, () => {
                Laya.View.hideLoadingPage(999999999999999);
                resolve(null);
              });
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
  };
  Main.customRenderID = [];
  new Main();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLnRzIiwgIi4uLy4uL3NyYy9jb3JlL2luZGV4LnRzIiwgIi4uLy4uL3NyYy92aWV3L0FkZExhbmRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0ZpZWxkTGV2ZWxVcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTG9hZFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpbFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9OZXRNYXBzLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVG9vbHMudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Vc2VySW5mby50cyIsICIuLi8uLi9zcmMvdmlldy9NYWluVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9PcmRlclZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2V0dGluZ1ZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaS50cyIsICIuLi8uLi9zcmMvdmlldy9TaG9wVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TaWduSW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1Rhc2tWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1dhcmVob3VzZVZpZXcudHMiLCAiLi4vLi4vc3JjL0dhbWVDb25maWcudHMiLCAiLi4vLi4vc3JjL01haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxyXG4gKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjZcdTU0MERcdTc5RjBcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEV2ZW50TWFwcyB7XHJcbiAgICAvKiogbG9hZCBcdTc1NENcdTk3NjJcdThGREJcdTg4NENcdTY2RjRcdTY1QjAgKi9cclxuICAgIGxvYWRfcHJvZ3Jlc3MgPSBcImxvYWRfcHJvZ3Jlc3NcIixcclxuXHJcbiAgICAvKiogXHU2NkY0XHU2NUIwXHU1NzFGXHU1NzMwICovXHJcbiAgICB1cGRhdGVfZmllbGQgPSBcInVwZGF0ZV9maWVsZFwiLFxyXG59XHJcbiIsICIvL1x1NEVFM1x1NzgwMVx1NzUxRlx1NjIxMFx1RkYwQ1x1NEUwRFx1ODk4MVx1NjI0Qlx1NTJBOFx1NEZFRVx1NjUzOVxuXG4vKipcbiAqIFx1NzU0Q1x1OTc2Mlx1NTIxN1x1ODg2OFxuICovXG4gZXhwb3J0IGVudW0gdmlld3MgXG4gICAge1xuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lICovXG4gICAgICAgIEFkZExhbmRWaWV3ID0gXCJzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZSAqL1xuICAgICAgICBGaWVsZExldmVsVXBWaWV3ID0gXCJzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9Mb2FkRGlhbG9nLnNjZW5lICovXG4gICAgICAgIExvYWREaWFsb2cgPSBcInNjZW5lcy92aWV3cy9Mb2FkRGlhbG9nLnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lICovXG4gICAgICAgIE1haWxWaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpblZpZXcgPSBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmUgKi9cbiAgICAgICAgT3JkZXJWaWV3ID0gXCJzY2VuZXMvdmlld3MvT3JkZXJWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NldHRpbmdWaWV3LnNjZW5lICovXG4gICAgICAgIFNldHRpbmdWaWV3ID0gXCJzY2VuZXMvdmlld3MvU2V0dGluZ1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2hvcFZpZXcgPSBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaWduSW5WaWV3LnNjZW5lICovXG4gICAgICAgIFNpZ25JblZpZXcgPSBcInNjZW5lcy92aWV3cy9TaWduSW5WaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lICovXG4gICAgICAgIFRhc2tWaWV3ID0gXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZSAqL1xuICAgICAgICBXYXJlaG91c2VWaWV3ID0gXCJzY2VuZXMvdmlld3MvV2FyZWhvdXNlVmlldy5zY2VuZVwiLCBcbiAgICB9XG5cbiBleHBvcnQgZW51bSBhdWRpb3MgXG4gICAge1xuICAgICAgICAvKiogYXVkaW8vd2luLm1wMyAqL1xuICAgICAgICB3aW4gPSBcInJlcy9hdWRpby93aW4ubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vcmVhZHkubXAzICovXG4gICAgICAgIHJlYWR5ID0gXCJyZXMvYXVkaW8vcmVhZHkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vbW92ZS5tcDMgKi9cbiAgICAgICAgbW92ZSA9IFwicmVzL2F1ZGlvL21vdmUubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZ28ubXAzICovXG4gICAgICAgIGdvID0gXCJyZXMvYXVkaW8vZ28ubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZmFpbC5tcDMgKi9cbiAgICAgICAgZmFpbCA9IFwicmVzL2F1ZGlvL2ZhaWwubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZHJhdy5tcDMgKi9cbiAgICAgICAgZHJhdyA9IFwicmVzL2F1ZGlvL2RyYXcubXAzXCIsIFxuICAgIH1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9XYXJlaG91c2VWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NldHRpbmdWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9PcmRlclZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTG9hZERpYWxvZy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9GaWVsZFByZWZhYi5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL2NvbXBvbmVudHMvQnV0dG9uLnByZWZhYlwiLFxuICAgICAgICAgICAgXCJyZXMvWGFzZGZhc2QucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9ydWxlX3RleHQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9sb2FkaW5nQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfd29vZHRpdGxlLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlSG91c2VCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZWJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3NoZWxmLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfbGFuZEJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvdXNldG9wLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmczLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcyLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfZmFybWxhbmRMb2dvLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3ZzLnZzXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvcHMuZnNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3dpbi5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3JlYWR5Lm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vbW92ZS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2dvLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZmFpbC5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2RyYXcubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9tYWluX3NjZW5lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZTEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5hdGxhc1wiXTtcbiAgICBcblxuLyoqXG4gKiBcdTYyNDBcdTY3MDlcdThENDRcdTZFOTBcbiAqL1xuY29uc3QgUmVzID0ge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBzY2VuZXM6IHNjZW5lcyxcbiAgICBhdWRpb3M6IGF1ZGlvcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcztcbiIsICIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5jb25zdCBFdmVudEdsb2JhbCA9IG5ldyBMYXlhLkV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1OEJBMlx1OTYwNVx1NEU4Qlx1NEVGNlx1NzY4NFx1N0M3Qlx1NzY4NFx1NTM5Rlx1NTc4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV2ZW50Q2xhc3M6IE1hcDxhbnksIHsga2V5OiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9PiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QSA9PiBcdTdFRDFcdTVCOUFcdTUyMzBcdTg4QzVcdTk5NzBcdTU2NjhcdTRFMEEgXHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRXZlbnRPbihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG4gICAgICAgIEV2ZW50Q2xhc3Muc2V0KHRhcmdldCwgeyBrZXk6IG5hbWUsIGZuOiBkZXNjcmlwdG9yLnZhbHVlIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1NUM1RVx1NjAyN1x1NjdFNVx1NjI3RVx1N0VEMVx1NUI5QVx1NTQwRFx1NzlGMFx1NzY4NFx1N0M3Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJpbmROYW1lQ2xhc3M6IE1hcDxhbnksIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRCeU5hbWUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIC8vICAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG5cclxuICAgIGlmICghQmluZE5hbWVDbGFzcy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgIEJpbmROYW1lQ2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgfVxyXG4gICAgQmluZE5hbWVDbGFzcy5nZXQodGFyZ2V0KS5wdXNoKHByb3BlcnR5S2V5KTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50R2xvYmFsO1xyXG4iLCAiY29uc3QgY2FsbGVyczogTWFwPGFueSwgRnVuY3Rpb25bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG5jbGFzcyBPYnNlcnZhYmxlQ29udHJvbDxjYWxsIGV4dGVuZHMgTGF5YS5TY3JpcHQ+IHtcclxuICAgIHByaXZhdGUga2V5RXZlbnRzOiBNYXA8YW55LCBNYXA8c3RyaW5nLCBGdW5jdGlvbltdPj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNcdTVDNUVcdTYwMjdcdTUwM0NcdTUzRDhcdTUzMTZcclxuICAgICAqIEBwYXJhbSBPYmogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHdhdGNoPFQgZXh0ZW5kcyB7fT4oT2JqOiBULCBjYWxsZXI6IGNhbGwpIHtcclxuICAgICAgICBpZiAoIWNhbGxlcnMuaGFzKGNhbGxlcikpIHtcclxuICAgICAgICAgICAgY2FsbGVycy5zZXQoY2FsbGVyLCBbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQga2V5RXZlbnQgPSB0aGlzLmtleUV2ZW50cztcclxuICAgICAgICBpZiAoIWtleUV2ZW50LmhhcyhPYmopKSB7XHJcbiAgICAgICAgICAgIGtleUV2ZW50LnNldChPYmosIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcdTc2ODRcdTVDNUVcdTYwMjdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUM1RVx1NjAyN1xyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsIFx1NTZERVx1OEMwM1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGtleUJpbmQgPSA8S2V5IGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLZXkgJiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfb2JqID0ga2V5RXZlbnQuZ2V0KE9iaik7XHJcbiAgICAgICAgICAgIGlmICghX29iai5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgX29iai5zZXQoa2V5LCBbXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqW1wiI1wiICsga2V5XSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmpbXCIjXCIgKyBrZXldID0gT2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iaiwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1wiI1wiICsga2V5XSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb2JqLmdldChrZXkpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCIjXCIgKyBrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbGwuYmluZChjYWxsKTtcclxuICAgICAgICAgICAgX29iai5nZXQoa2V5KS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGwoT2JqW2tleV0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NEYyMFx1NTE2NVx1NzY4NGNhbGxlclx1NTIyMFx1OTY2NFx1NUY1M1x1NTI0RFx1N0VEMVx1NUI5QVx1NzY4NFx1NjI0MFx1NjcwOVx1NzY4NFx1NEU4Qlx1NEVGNiBcdTYyMTZcdTYzMDdcdTVCOUFcdTg5RTNcdTUxQjNcdTZBMjFcdTRFMkFcdTVCRjlcdThDNjFcdThEREZcdTVGNTNcdTUyNERjYWxsZXJcdTdFRDFcdTVCOUFcdTc2ODRcdTc2RDFcdTU0MkNcclxuICAgICAqIEBwYXJhbSBjYWxsZXIgXHU3NkQxXHU1NDJDXHU2NUY2XHU3RUQxXHU1QjlBXHU3Njg0XHU1NzNBXHU2NjZGXHU1QkY5XHU4QzYxXHJcbiAgICAgKiBAcGFyYW0gb2JqIFx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICByZW1vdmVCeUNhbGxlcihjYWxsZXI6IGNhbGwsIG9iajogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcik/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmdldChvYmopLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBrLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9ic2VydmFibGVDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgRXZlbnRHbG9iYWwsIHsgQmluZE5hbWVDbGFzcywgRXZlbnRDbGFzcyB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcblxyXG4vKipcclxuICogXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyaXB0IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvL0V2ZW50T25cdTg4QzVcdTk5NzBcdTU2NjhcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUFcclxuICAgICAgICBsZXQgYmluZEV2ZW50ID0gRXZlbnRDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIGJpbmRFdmVudCAmJiBFdmVudEdsb2JhbC5vbihiaW5kRXZlbnQua2V5LCB0aGlzLCBiaW5kRXZlbnQuZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkQXdha2VcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uQXdha2UoKSB7XHJcbiAgICAgICAgLy9cdTdFRDlcdTg4QzVcdTk5NzBcdTU2NjhcdThCQjBcdTVGNTVcdTc2ODRcdTVDNUVcdTYwMjdcdUZGMENcdTY3RTVcdTYyN0VcdTgyODJcdTcwQjlcclxuICAgICAgICBCaW5kTmFtZUNsYXNzLmdldCh0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpc1tlXSA9IHRoaXMub3duZXIuZ2V0Q2hpbGRCeU5hbWUoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbkhkQXdha2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NzU0Q1x1OTc2Mlx1NEYyMFx1NTE2NVx1NTNDMlx1NjU3MFxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKiBAcGFyYW0gZVxyXG4gICAgICovXHJcbiAgICBvbk9wZW5lZChlKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU2RkMwXHU2RDNCXHU1NDBFXHU2MjY3XHU4ODRDXHVGRjBDXHU2QjY0XHU2NUY2XHU2MjQwXHU2NzA5XHU4MjgyXHU3MEI5XHU1NDhDXHU3RUM0XHU0RUY2XHU1NzQ3XHU1REYyXHU1MjFCXHU1RUZBXHU1QjhDXHU2QkQ1XHVGRjBDXHU2QjIxXHU2NUI5XHU2Q0Q1XHU1M0VBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZEF3YWtlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZEVuYWJsZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkRW5hYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTU0MkZcdTc1MjhcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTgyODJcdTcwQjlcdTg4QUJcdTZERkJcdTUyQTBcdTUyMzBcdTgyMUVcdTUzRjBcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRW5hYmxlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFN0YXJ0XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25IZFN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1N0IyQ1x1NEUwMFx1NkIyMVx1NjI2N1x1ODg0Q3VwZGF0ZVx1NEU0Qlx1NTI0RFx1NjI2N1x1ODg0Q1x1RkYwQ1x1NTNFQVx1NEYxQVx1NjI2N1x1ODg0Q1x1NEUwMFx1NkIyMVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRTdGFydCgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRVcGRhdGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMub25IZFVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QkNGXHU1RTI3XHU2NkY0XHU2NUIwXHU2NUY2XHU2MjY3XHU4ODRDXHVGRjBDXHU1QzNEXHU5MUNGXHU0RTBEXHU4OTgxXHU1NzI4XHU4RkQ5XHU5MUNDXHU1MTk5XHU1OTI3XHU1RkFBXHU3M0FGXHU5MDNCXHU4RjkxXHU2MjE2XHU4MDA1XHU0RjdGXHU3NTI4Z2V0Q29tcG9uZW50XHU2NUI5XHU2Q0Q1XHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFVwZGF0ZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREaXNhYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkRGlzYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU3OTgxXHU3NTI4XHU2NUY2XHU2MjY3XHU4ODRDXHVGRjBDXHU2QkQ0XHU1OTgyXHU0RUNFXHU4MjgyXHU3MEI5XHU0RUNFXHU4MjFFXHU1M0YwXHU3OUZCXHU5NjY0XHU1NDBFXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZERpc2FibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRGVzdHJveVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9mZkFsbENhbGxlcih0aGlzKTtcclxuICAgICAgICB0aGlzLm9uSGREZXN0cm95KCk7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDEsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTZFMDVcdTk2NjRcdThEREZcdTVGNTNcdTUyNERcdTdDN0JcdTdFRDFcdTVCOUFcdTYyNDBcdTY3MDlcdTc2ODRcdTVDNUVcdTYwMjdcdTg5QzJcdTVCREZcdTY1QjlcdTZDRDVcclxuICAgICAgICAgICAgT2JzZXJ2YWJsZVByb3BlcnR5LnJlbW92ZUJ5Q2FsbGVyKHRoaXMpO1xyXG4gICAgICAgICAgICAvL1x1OTUwMFx1NkJDMVx1NjVGNlx1NkUwNVx1OTY2NFx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1NUYxNVx1NzUyOFxyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGtleXMubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleXNbeF1dID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjRCXHU1MkE4XHU4QzAzXHU3NTI4XHU4MjgyXHU3MEI5XHU5NTAwXHU2QkMxXHU2NUY2XHU2MjY3XHU4ODRDXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZERlc3Ryb3koKSB7fVxyXG5cclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICogXHU3NTRDXHU5NzYyXHU2MjUzXHU1RjAwXHU0RUU1XHU1NDBFXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAgICAvLyAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgIC8vICAqL1xyXG4gICAgLy8gb25PcGVuZWQoZCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKDExMSk7XHJcbiAgICAvLyB9XHJcbn1cclxuIiwgImltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcblxyXG4vL2NsYXNzIFZpZXdTaG93QW5pIGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpiZywgdGlwczpcIlx1ODBDQ1x1NjY2RlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBiZzogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y29udGVudCwgdGlwczpcIlx1NTE4NVx1NUJCOVx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBjb250ZW50OiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6YW5pVHlwZSx0aXBzOlwiXHU1MkE4XHU3NTNCXHU3QzdCXHU1NzhCXCIsdHlwZTpFZGl0T3B0aW9uLG9wdGlvbjpcImJvdHRvbVRvU2hvdyxzY2FsZVNob3dcIn0qL1xyXG4gICAgLy8gXHU4RkQ0XHU1NkRFXHU1QjU3XHU3QjI2XHU0RTMyXHJcbiAgICBhbmlUeXBlOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSB0d2Vlbkxpc3Q6IExheWEuVHdlZW5bXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvT3BlbigpIHt9XHJcbiAgICAvKipcclxuICAgICAqICBcdTUxNzNcdTk1RURcdTYyMTBcdTUyOUZcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9DbG9zZSgpIHt9XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMub3duZXIgYXMgTGF5YS5WaWV3O1xyXG5cclxuICAgICAgICB0aGlzLmJnLmFscGhhID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIHRoaXMuYmcsXHJcbiAgICAgICAgICAgICAgICB7IGFscGhhOiAwLjc1IH0sXHJcbiAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYW5pVHlwZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5hbmlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzY2FsZVNob3dcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5zY2FsZSgxLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi5mcm9tKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgeDogTGF5YS5zdGFnZS53aWR0aCAvIDIsIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMiwgc2NhbGVYOiAwLCBzY2FsZVk6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuYm90dG9tID0gLXRoaXMuY29udGVudC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBib3R0b206IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2UuY2lyY091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVmlldygpIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmcsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBhbHBoYTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5hbmlUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2NhbGVTaG93XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGVYOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXlhLkVhc2Uuc3Ryb25nT3V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAtdGhpcy5jb250ZW50LmhlaWdodCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi5jbGVhcihlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsICIvKipcclxuICogXHU1QjlFXHU0RjhCXHU1MjE3XHU4ODY4XHJcbiAqL1xyXG5jb25zdCBpbnN0YW5jZUxpc3Q6IE1hcDxudW1iZXIsIHsgbmV3ICgpOiB2b2lkIH0+ID0gbmV3IE1hcCgpO1xyXG5cclxuLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NzY4NGlkXHJcbiAqL1xyXG5sZXQgaW5zdGFuY2VJZDogbnVtYmVyID0gMTAwO1xyXG5cclxuLyoqXHJcbiAqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhbmNlKHRhcmdldDogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCFpbnN0YW5jZUxpc3QuaGFzKHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdKSkge1xyXG4gICAgICAgIGluc3RhbmNlSWQrKztcclxuICAgICAgICB0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSA9IGluc3RhbmNlSWQ7XHJcbiAgICAgICAgaW5zdGFuY2VMaXN0LnNldChpbnN0YW5jZUlkLCBuZXcgdGFyZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0W2tleV0gPSBpbnN0YW5jZUxpc3QuZ2V0KGluc3RhbmNlSWQpO1xyXG59XHJcbiIsICJpbXBvcnQgRmxvYXRWaWV3U2hvd0FuaSBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgUmVzLCB7IHZpZXdzIH0gZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFZpZXdTaG93QW5pIGZyb20gXCIuLi9jb21wb25lbnRzL1ZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4vSW5zdGFuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTYyNTNcdTVGMDBcdTc1NENcdTk3NjJcdTk3MDBcdTg5ODFcdTVFMjZcdTUxNjVcdTc2ODRcdTUzQzJcdTY1NzBcclxuICovXHJcbmludGVyZmFjZSBWaWV3T3BlblBhcm0ge1xyXG4gICAgLyoqIFx1NjYzRVx1NzkzQWxvYWRcdTc1NENcdTk3NjIgKi9cclxuICAgIHNob3dMb2FkPzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0ICovXHJcbiAgICBzaG93TG9hZERlbGF5PzogbnVtYmVyO1xyXG4gICAgLyoqIFx1OTY5MFx1ODVDRmxvYWRcdTc1NENcdTk3NjJcdTVFRjZcdThGREZcdTY1RjZcdTk1RjQgXHU5RUQ4XHU4QkE0MCAqL1xyXG4gICAgaGlkZUxvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTY2MkZcdTU0MjZcdTUxNzNcdTk1RURcdTUxNzZcdTRFRDZcdTU3M0FcdTY2NkZcdUZGMENcdTlFRDhcdThCQTRcdTRFM0F0cnVlXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5XHVGRjBDXHUzMDEwXHU2Q0U4XHU2MTBGXHUzMDExXHU4OEFCXHU1MTczXHU5NUVEXHU3Njg0XHU1NzNBXHU2NjZGXHVGRjBDXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU4QkJFXHU3RjZFYXV0b0Rlc3Ryb3lBdFJlbW92ZWQ9dHJ1ZVx1RkYwQ1x1NTIxOVx1OEQ0NFx1NkU5MFx1NTNFRlx1ODBGRFx1NEUwRFx1ODBGRFx1ODhBQlx1NTZERVx1NjUzNlx1RkYwQ1x1OTcwMFx1ODk4MVx1ODFFQVx1NURGMVx1NjI0Qlx1NTJBOFx1NTZERVx1NjUzNlxyXG4gICAgICogdG9kbyBcdTczQjBcdTU3MjhcdThGRDlcdTRFMkFcdThDMDNcdTc1MjhcdTc2ODRcdTY2MkZcdTVGMTVcdTY0Q0VcdTgxRUFcdTVFMjZcdTc2ODRcdTY1QjlcdTZDRDVcdUZGMENcdTZDQTFcdTY3MDlcdThENzBcdThGRDlcdTkxQ0NcdTc2ODRcdTdGMTNcdTVCNThcdUZGMENcdTUzRUZcdTgwRkRcdTRGMUFcdTY3MDlcdTk1RUVcdTk4OThcdUZGMENcdTU0MEVcdTY3MUZcdTRGMThcdTUzMTZcclxuICAgICAqIFx1NzNCMFx1NTcyOFx1NTE2OFx1NjYyRmZhbHNlIFx1NTQwRVx1NjcxRlx1NjcwOVx1OTcwMFx1ODk4MVx1NTE4RFx1NEYxOFx1NTMxNlx1OEZEOVx1NEUyQVx1NEUxQ1x1ODk3Rlx1RkYwQ1x1NEUwRFx1ODBGRFx1NTE3M1x1OTVFRFx1NTE3Nlx1NUI4M1x1NjI0MFx1NjcwOVx1NzU0Q1x1OTc2Mlx1OEZEOFx1NjcyQVx1NUI5RVx1NzNCMFxyXG4gICAgICovXHJcbiAgICBjbG9zZU90aGVyPzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTYyNTNcdTVGMDBcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdUZGMENcdTRGMUFcdTRGMjBcdTkwMTJcdTdFRDlvbk9wZW5lZFx1NjVCOVx1NkNENVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcGFybT86IGFueTtcclxuICAgIC8qKiAgXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIGNvbXBsZXRlPzogRnVuY3Rpb247XHJcbiAgICAvKiogXHU1MkEwXHU4RjdEXHU4RkRCXHU1RUE2XHU1NkRFXHU4QzAzXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBwcm9ncmVzcz86IEhhbmRsZXI7XHJcbn1cclxuXHJcbmNvbnN0IHZpZXdNYXBzOiB7IHVybDogc3RyaW5nOyB2aWV3OiBMYXlhLlZpZXcgfVtdID0gW107XHJcblxyXG4vKipcclxuICogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmlld01hbmFnZXIge1xyXG4gICAgQEluc3RhbmNlXHJcbiAgICBzdGF0aWMgaW5zdDogVmlld01hbmFnZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGRhdGEgXHU1M0MyXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIG9wZW4oXHJcbiAgICAgICAgdXJsOiB2aWV3cyxcclxuICAgICAgICBkYXRhOiBWaWV3T3BlblBhcm0gPSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3RoZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkRGVsYXk6IDEwMCxcclxuICAgICAgICAgICAgaGlkZUxvYWREZWxheTogMCxcclxuICAgICAgICB9XHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJtaXNzIHBhdGghXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5zaG93TG9hZCkge1xyXG4gICAgICAgICAgICBMYXlhLlZpZXcuc2hvd0xvYWRpbmdQYWdlKG51bGwsIGRhdGEuc2hvd0xvYWREZWxheSk7XHJcbiAgICAgICAgICAgIGlmICh1cmwgIT09IFJlcy52aWV3cy5Mb2FkRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZShkYXRhLmhpZGVMb2FkRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRhdGEuY2xvc2VPdGhlciA9IGZhbHNlO1xyXG4gICAgICAgIExheWEuVmlldy5vcGVuKFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEuY2xvc2VPdGhlcixcclxuICAgICAgICAgICAgZGF0YS5wYXJtLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChlOiBMYXlhLlZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgIT0gUmVzLnZpZXdzLkxvYWREaWFsb2cpIHZpZXdNYXBzLnB1c2goeyB1cmw6IHVybCwgdmlldzogZSB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBjb25MaXN0ID0gZS5nZXRDb21wb25lbnRzKExheWEuU2NyaXB0KTtcclxuICAgICAgICAgICAgICAgIGlmIChjb25MaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uTGlzdC5mb3JFYWNoKChlKSA9PiBlLmVuYWJsZWQgJiYgZS5vbk9wZW5lZCAmJiBlLm9uT3BlbmVkKGRhdGEucGFybSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YS5jb21wbGV0ZSAmJiBkYXRhLmNvbXBsZXRlKGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgYCVjID09PiBvcGVuICVjJHt1cmwubWF0Y2goL1xcdysoPz1cXC4pLylbMF19IGAsXHJcbiAgICAgICAgICAgICAgICAgICAgYGNvbG9yOiM3ZWQ2ZGY7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgICAgICAgICAgYGNvbG9yOiMyMmE2YjM7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYXRhLnByb2dyZXNzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTE3M1x1OTVFRFx1ODlDNlx1NTZGRVxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gYWxsIFx1NTQwQ1x1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2Mlx1ODhBQiBcdTU5MUFcdTZCMjFcdTYyNTNcdTVGMDBcdUZGMENcdTUxNjhcdTUyMjBcdTk2NjRcdTc1MjhcdThGRDlcdTRFMkFcclxuICAgICAqIEBwYXJhbSBkZXN0cm95IFx1OTUwMFx1NkJDMSAgIFRPRE9cdUZGMDhcdTlFRDhcdThCQTRcdTRGMUFcdTk1MDBcdTZCQzFcdTYyNDBcdTY3MDlcdTVCNTBcdTgyODJcdTcwQjlcdUZGMENcdTY3MkFcdTZENEJcdThCRDVcdTY2MkZcdTU0MjZcdTY3MDlcdTk1RUVcdTk4OThcdUZGMDlcclxuICAgICAqL1xyXG4gICAgYXN5bmMgY2xvc2UoXHJcbiAgICAgICAgdXJsOiB2aWV3cyxcclxuICAgICAgICBhbGw6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBkZXN0cm95OiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgYW5pQ29tOiB0eXBlb2YgVmlld1Nob3dBbmkgfCB0eXBlb2YgRmxvYXRWaWV3U2hvd0FuaSA9IFZpZXdTaG93QW5pXHJcbiAgICApIHtcclxuICAgICAgICAvL1RPRE8gXHU4RkQ5XHU5MUNDXHU3M0IwXHU1NzI4XHU1MTY4XHU5MEU4XHU3NTI4ZGVzdHJveSBcdTVGMTVcdTY0Q0VyZW1vdmVcdTU5N0RcdTUwQ0ZcdTY3MDlcdTcwQjlcdTk1RUVcdTk4OThcdUZGMENcdTUxOERcdTkwMUFcdThGQzd2aWV3Lm9wZW5cdTRGMUFcdTkxQ0RcdTY1QjBcdTY3ODRcdTVFRkFcdTdFQzRcdTRFRjZcclxuICAgICAgICBkZXN0cm95ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHZBbmk6IFZpZXdTaG93QW5pO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAodXJsID09PSB2aWV3TWFwc1t4XS51cmwpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gdmlld01hcHNbeF07XHJcbiAgICAgICAgICAgICAgICB2aWV3TWFwcy5zcGxpY2UoeCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdkFuaSA9IHYudmlldy5nZXRDb21wb25lbnQoYW5pQ29tIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodkFuaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZBbmkuY2xvc2VWaWV3KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHU0RkREXHU4QkMxXHU1OTgyXHU2NzlDXHU1NzNBXHU2NjZGXHU1QjhDXHU1MTY4XHU2Q0ExXHU2NzA5XHU3NTRDXHU5NzYyXHU4OEFCXHU2MjUzXHU1RjAwXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1RkM1XHU2MjUzXHU1RjAwXHU0RTNCXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgbGV0IGNsb3NlTGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKCF2aWV3TWFwc1t4XS52aWV3LnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VMZW4rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlTGVuID09PSB2aWV3TWFwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKFJlcy52aWV3cy5NYWluVmlldyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh2aWV3TWFwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZVZpZXdMb2codXJsOiBzdHJpbmcsIGRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBgJWMgPD09ICR7ZGVzdHJveSA/IFwiZGVzdHJveVwiIDogXCJkaXNhYmxlXCJ9ICVjJHt1cmwubWF0Y2goL1xcdysoPz1cXC4pLylbMF19IGAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZmY3OTc5O2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2ViNGQ0Yjtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNThcdTc1NENcdTk3NjJcclxuICAgICAqL1xyXG4gICAgY2xlYXJWaWV3TWFwcygpIHtcclxuICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVmYXVsdFJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRlZmF1bHRSZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZG93blJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRvd25SZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXNTY2FsZSwgdGlwczpcIlx1NjYyRlx1NTQyNlx1N0YyOVx1NjUzRVwiLHR5cGU6Q2hlY2t9Ki9cclxuICAgIHByaXZhdGUgaXNTY2FsZSA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNjYWxlVmFsLCB0aXBzOlwiXHU3RjI5XHU2NTNFXHU3Njg0XHU1MDNDXCIsdHlwZTpOdW1iZXIsIGRlZmF1bHQ6MC45fSovXHJcbiAgICBwcml2YXRlIHNjYWxlVmFsOiBudW1iZXIgPSAwLjk7XHJcblxyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgb2xkU2NhbGVZOiBudW1iZXI7XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc1NjYWxlKTtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikubW91c2VFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWCA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVYKCk7XHJcbiAgICAgICAgdGhpcy5vbGRTY2FsZVkgPSAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikuZ2V0X3NjYWxlWSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VEb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRvd25SZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKHRoaXMuc2NhbGVWYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBbmkoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1NjYWxlKSByZXR1cm47XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5vd25lcixcclxuICAgICAgICAgICAgeyBzY2FsZVg6IHNjYWxlICogdGhpcy5vbGRTY2FsZVgsIHNjYWxlWTogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWSB9LFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2tpbihza2luOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXNraW4pIHJldHVybjtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkltYWdlKS5za2luID0gc2tpbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7fVxyXG59XHJcbiIsICJpbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiwgRmluZEJ5TmFtZSB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCBDb3JlID0ge1xyXG4gICAgLyoqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNiAqL1xyXG4gICAgb2JzZXJ2YWJsZVByb3BlcnR5OiBPYnNlcnZhYmxlUHJvcGVydHksXHJcbiAgICAvKiogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4ICovXHJcbiAgICB2aWV3OiBWaWV3TWFuYWdlci5pbnN0LFxyXG4gICAgLyoqIFx1NUYxNVx1NjRDRVx1ODExQVx1NjcyQ1x1N0VDNFx1NEVGNiAqL1xyXG4gICAgZ2FtZVNjcmlwdDogR2FtZVNjcmlwdCxcclxuICAgIC8qKiBcdTUzNTVcdTRGOEJcdTg4QzVcdTk5NzBcdTU2NjggKi9cclxuICAgIGluc3RhbmNlOiBJbnN0YW5jZSxcclxuICAgIC8qKiBcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuICAgIGV2ZW50T246IEV2ZW50T24sXHJcbiAgICAvKiogdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZVx1NzY4NFx1NzcwMVx1NEU4Qlx1NTE5OVx1NkNENSBcdTUzRUFcdTgwRkRcdTY3RTVcdTYyN0VcdTRFMEJcdTRFMDBcdTdFQTdcdTMwMTBcdTUzRUFcdTc1MjhcdTU3MjhHYW1lU2NyaXB0XHU3RUU3XHU2MjdGXHU3Njg0XHU1QjUwXHU3QzdCXHU4RUFCXHU0RTBBXHUzMDExICovXHJcbiAgICBmaW5kQnlOYW1lOiBGaW5kQnlOYW1lLFxyXG4gICAgLyoqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNiAqL1xyXG4gICAgZXZlbnRHbG9iYWw6IEV2ZW50R2xvYmFsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29yZTtcclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuXHJcbi8vICBBZGRMYW5kVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkTGFuZFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuQWRkTGFuZFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vICBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZExldmVsVXBWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICBvbkhkQXdha2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhd2FcIik7XHJcbiAgICB9XHJcbiAgICBvbkhkRW5hYmxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25PcGVuZWQoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuRmllbGRMZXZlbFVwVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2FkQmFyLCB0aXBzOlwibG9hZCBiYXJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCYXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdThGREJcdTVFQTZcdTY3NjFcdTlFRDhcdThCQTRcdTVCQkRcdTVFQTYgKi9cclxuICAgIHByaXZhdGUgbG9hZEJhck9sZFdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uQXdha2UoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5vd25lci5pXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sb2FkTGFiZWwpO1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICAgICAgLy8gdGhpcy5sb2FkTGFiZWwudGV4dCA9IFwiTG9hZC4uLi4wJVwiO1xyXG4gICAgICAgIHRoaXMubG9hZEJhck9sZFdpZHRoID0gdGhpcy5sb2FkQmFyLndpZHRoO1xyXG4gICAgICAgIHRoaXMubG9hZEJhci53aWR0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUHJvZ3Jlc3Modikge1xyXG4gICAgICAgIHRoaXMubG9hZEJhci53aWR0aCA9IHYgKiB0aGlzLmxvYWRCYXJPbGRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgTWFpbFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5NYWlsVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTc3RURcdTk0RkVcdTYzQTVcdThCRjdcdTZDNDJcdTUzNEZcdThCQUVcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFwaUh0dHAge1xyXG4gICAgLyoqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NTM0Rlx1OEJBRSAqL1xyXG4gICAgaW5pdCA9IFwiL2luaXRcIixcclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTVCNTdcdTdCMjZcclxuICAgICAqIEBwYXJhbSBzdHIgXHU4OTgxXHU4OUUzXHU2NzkwXHU3Njg0XHU1QjU3XHU3QjI2XHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IFx1NTA1QVx1NEUzQVx1NTNDMlx1ODAwM1x1NzY4NFx1NUI1N1x1N0IyNlx1OUVEOFx1OEJBNFx1NEUzQSxcclxuICAgICAqIEByZXR1cm5zIFx1ODlFM1x1Njc5MFx1NTk3RFx1NzY4NFx1NUI1N1x1N0IyNlx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VTdHJpbmcoc3RyOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nID0gXCIsXCIpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnNwbGl0KGZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc5RDJcdThGNkNcdTYzNjJcdTYyMTAwMDowMDowMFxyXG4gICAgICogQHBhcmFtIHMgXHU4RjZDXHU2MzYyXHU2NUY2XHU5NUY0XHU3Njg0XHU3OUQyXHJcbiAgICAgKiBAcmV0dXJucyAwMDowMDowMFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9ybWF0U2Vjb25kcyA9IChzKSA9PiBuZXcgRGF0ZShzICogMTAwMCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMTEsIDgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy8gIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4vKipcclxuICogXHU3NTMwXHU1NzMwXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZENvbXBvbmVudCBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogXHU2OTBEXHU3MjY5aWNvbiAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBpY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTgyODJcdTcwQjkgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgZmllbGROb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTY3MDlcdTY5MERcdTcyNjlcdTY1RjZcdTc2ODRcdTk2MzRcdTVGNzEgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgc2hhZG93OiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaWVsZEVtcHR5UmVzLCB0aXBzOlwiXHU4OUUzXHU5NTAxXHU1NDBFXHU1NzFGXHU1NzMwXHU3RUI5XHU3NDA2XCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZmllbGRFbXB0eVJlczogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTdCNDlcdTdFQTdcdTU2RkVcdTcyNDcgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgbHZOb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTUwMTJcdThCQTFcdTY1RjZcdTVCQjlcdTU2NjgqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSB0aW1lQm94OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBcdTUwMTJcdThCQTFcdTY1RjZsYWJlbCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudERvd25MYjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1ODhDNVx1OTk3MCAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSB0b3BTdGF0ZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NjIxMFx1NzE5Rlx1NTNFRlx1NjUzNmljb24gKi9cclxuICAgIHByaXZhdGUgbWF0dXJlTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1M0VGXHU2NEFEXHU3OUNEXHU3QTdBXHU1NzMwaWNvbiAqL1xyXG4gICAgcHJpdmF0ZSBlbXB0eUZpZWxkTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dW5sb2NrSWNvbiwgdGlwczpcIlx1NjJEM1x1NUM1NVx1NTcxRlx1NTczMGljb25cdTU3MzBcdTU3NDBcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSB1bmxvY2tJY29uOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZWxkSWQsIHRpcHM6XCJcdTU3MUZcdTU3MzBpZFwiLCB0eXBlOk51bWJlcix9Ki9cclxuICAgIGZpZWxkSWQ6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOGljb25cdTZENkVcdTUyQThcdTUyQThcdTc1M0IgKi9cclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uVHdlZW46IExheWEuVGltZUxpbmU7XHJcblxyXG4gICAgLyoqIFx1NUVGQVx1N0I1MVx1NEUyRCAqL1xyXG4gICAgYnVpbGRJbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGRhdGU6IE5ldEluaXRbXCJkYXRhXCJdW1wibGFuZExpc3RcIl1bMF07XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuZmllbGROb2RlID0gPExheWEuSW1hZ2U+dGhpcy5vd25lcjtcclxuICAgICAgICB0aGlzLmNvdW50RG93bkxiID0gdGhpcy50aW1lQm94LmdldENoaWxkQnlOYW1lKFwiY291bnREb3duTGJcIikgYXMgYW55O1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfZmllbGQpXHJcbiAgICB1cGRhdGVEYXRlKGQ6IHsgbGFuZExpc3Q6IE5ldEluaXRbXCJkYXRhXCJdW1wibGFuZExpc3RcIl0gfSkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZC5sYW5kTGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAoZC5sYW5kTGlzdFt4XS5pZCA9PSB0aGlzLmZpZWxkSWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGQubGFuZExpc3RbeF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmljb24pO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkTm9kZS5za2luID0gdGhpcy5maWVsZEVtcHR5UmVzO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKEJvb2xlYW4odGhpcy5kYXRlLnByb2R1Y3RJZCkpO1xyXG4gICAgICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQm94LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmljb24uc2tpbiA9IHRoaXMudW5sb2NrSWNvbjtcclxuICAgICAgICAgICAgdGhpcy5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFaWNvblx1NzY4NFx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dJY29uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmljb24udmlzaWJsZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTcyQjZcdTYwMDFpY29uXHU3RUI5XHU3NDA2XHJcbiAgICAgKiBAcGFyYW0gc2tpblR5cGUgMSBcdTZENDdcdTZDMzRcdTUyQTBcdTkwMUZcdTcyQjZcdTYwMDEgMiBcdTVFRkFcdTdCNTFcdTcyQjZcdTYwMDEgMyBcdTYyMTBcdTcxOUZcdTcyQjZcdTYwMDFcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGVJY29uU2tpbihza2luVHlwZTogMSB8IDIgfCAzKSB7XHJcbiAgICAgICAgc3dpdGNoIChza2luVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19zcGVlZFVwLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2xhbmRVcGRhdGVCdG4yLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2hhcnZlc3QucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTY1RjZcdTk1RjRcdTVCQjlcdTU2NjhcdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93VGltZUJveChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU5NjM0XHU1RjcxXHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1NoYWRvd0ljb24oc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmFjdGl2ZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk4NzZcdTkwRThpY29uXHU1MkE4XHU3NTNCXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uQW5pKHBsYXk6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMudG9wU3RhdGVJY29uVHdlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IExheWEuVGltZUxpbmUudG8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbixcclxuICAgICAgICAgICAgICAgIHsgeTogdGhpcy50b3BTdGF0ZUljb24ueSAtIDUwIH0sXHJcbiAgICAgICAgICAgICAgICA4MDAsXHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICkudG8odGhpcy50b3BTdGF0ZUljb24sIHsgeTogdGhpcy50b3BTdGF0ZUljb24ueSB9LCA4MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUwMTJcdThCQTFcdTY1RjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93bkxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMuZGF0ZS5tYXR1cmVUaW1lTGVmdCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGUubWF0dXJlVGltZUxlZnQtLTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duTGIudGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5kYXRlLm1hdHVyZVRpbWVMZWZ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NTAxMlx1OEJBMVx1NjVGNlx1N0VEM1x1Njc1RiBcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1aWxkSW5nKSB0aGlzLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1N0I0OVx1N0VBN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxldmVsKCkge1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfbGV2ZWwke3RoaXMuZGF0ZS5sdn0ucG5nYDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmllbGRJZCwgdGhpcy5idWlsZEluZyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idWlsZEluZykge1xyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkZpZWxkTGV2ZWxVcFZpZXcsIHsgcGFybTogdGhpcy5maWVsZElkIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLkFkZExhbmRWaWV3LCB7IHBhcm06IHRoaXMuZmllbGRJZCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IEluc3RhbmNlIH0gZnJvbSBcIi4uL2NvcmUvSW5zdGFuY2VcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcclxuICovXHJcbmNsYXNzIFVzZXJJbmZvIHtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdcdTU0MERcdTc5RjAgKi9cclxuICAgIG5pY2tuYW1lOiBzdHJpbmcgPSBcIm5hbWVcIjtcclxuICAgIC8qKiBcdTc1MjhcdTYyMzdpZCAqL1xyXG4gICAgdWlkOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIFx1NzUyOFx1NTQwRFx1NTkzNFx1NTBDRiAqL1xyXG4gICAgYXZhdGFyOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIFx1OTRCQlx1NzdGMyAqL1xyXG4gICAgZGlhbW9uZDogbnVtYmVyID0gOTk5O1xyXG4gICAgLyoqIFx1OTFEMVx1NUUwMSAqL1xyXG4gICAgZ29sZDogbnVtYmVyID0gOTk5O1xyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMubmlja25hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBVc2VySW5mbygpO1xyXG4iLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcInNyYy9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSBcInNyYy9jb21tb24vVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQW5hbHl6ZSBmcm9tIFwic3JjL2NvbW1vbi9UYWJsZUFuYWx5emVcIjtcclxuaW1wb3J0IEZpZWxkQ29tcG9uZW50IGZyb20gXCJzcmMvY29tcG9uZW50cy9GaWVsZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbW1vbi9Vc2VySW5mb1wiO1xyXG5cclxuLy8gIE1haW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWRkTGFuZExheWVyLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhZGRMYW5kTGF5ZXI6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6ZGlhbW9uZE5vZGUsIHRpcHM6XCJcdTk0QkJcdTc3RjNcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGRpYW1vbmROb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpnb2xkTm9kZSwgdGlwczpcIlx1OTFEMVx1NUUwMVx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZ29sZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmF2YXRhck5vZGUsIHRpcHM6XCJcdTU5MzRcdTUwQ0ZcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGF2YXRhck5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxhbmRCb3gsIHRpcHM6XCJcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxhbmRCb3g6IExheWEuQm94ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjZW50ZXJCb3gsIHRpcHM6XCJcdTRFMkRcdTk1RjRcdTUzM0FcdTU3REZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGNlbnRlckJveDogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsYW5kVXBMYXllciwgdGlwczpcIlx1NTcxRlx1NTczMFx1NTM0N1x1N0VBN1x1N0E5N1x1NTNFM1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgbGFuZFVwTGF5ZXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTdFQzRcdTRFRjYgXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGxhbmRMaXN0OiBGaWVsZENvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5sYW5kQm94Lm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5wdXNoKHRoaXMubGFuZEJveC5nZXRDaGlsZEF0KHgpLmdldENvbXBvbmVudChGaWVsZENvbXBvbmVudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYW5kTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmZpZWxkSWQgLSBiLmZpZWxkSWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgQ29yZS5ldmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMudXBkYXRlX2ZpZWxkLCB7XHJcbiAgICAgICAgICAgICAgICBsYW5kTGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTU3MUZcdTU3MzBpZFx1NUJGOVx1NUU5NFx1NzY4NFx1NEU1Rlx1NjYyRlx1NEUwQlx1NjgwN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTU3MUZcdTU3MzBcdTdCNDlcdTdFQTdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbHY6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXHU2QjYzXHU1NzI4XHU3NTFGXHU5NTdGXHU3Njg0XHU0RTFDXHU4OTdGXHU3Njg0aWQgXHU3OUNEXHU1QjUwaWQsIFx1NTk4Mlx1Njc5Q1x1NTI2OVx1NEY1OVx1NjVGNlx1OTVGNFx1NEUzQTBcdUZGMENcdTg4NjhcdTc5M0EgXHU1REYyXHU3MTlGXHVGRjBDXHU1MjREXHU3QUVGXHU4MUVBXHU1REYxXHU1M0JCXHU2N0U1XHU1QkY5XHU1RTk0XHU1M0VGXHU3NTFGXHU0RUE3XHU3Njg0XHU0RTFDXHU4OTdGXHVGRjBDXHU3MTM2XHU1NDBFXHU2NTM5XHU1M0Q4XHU2NjNFXHU3OTNBXHU3MkI2XHU2MDAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTUyNjlcdTRGNTlcdTY1RjZcdTk1RjQgXHU1OTgyXHU2NzlDXHU0RTNBMCBcdTVDMzFcdTRFM0FcdTYyMTBcdTcxOUYgXHU1MzU1XHU0RjREXHU3OUQyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdHVyZVRpbWVMZWZ0OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1x1NTcxRlx1NTczMGlkXHU1QkY5XHU1RTk0XHU3Njg0XHU0RTVGXHU2NjJGXHU0RTBCXHU2ODA3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1x1NTcxRlx1NTczMFx1N0I0OVx1N0VBN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsdjogOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTZCNjNcdTU3MjhcdTc1MUZcdTk1N0ZcdTc2ODRcdTRFMUNcdTg5N0ZcdTc2ODRpZCBcdTc5Q0RcdTVCNTBpZCwgXHU1OTgyXHU2NzlDXHU1MjY5XHU0RjU5XHU2NUY2XHU5NUY0XHU0RTNBMFx1RkYwQ1x1ODg2OFx1NzkzQSBcdTVERjJcdTcxOUZcdUZGMENcdTUyNERcdTdBRUZcdTgxRUFcdTVERjFcdTUzQkJcdTY3RTVcdTVCRjlcdTVFOTRcdTUzRUZcdTc1MUZcdTRFQTdcdTc2ODRcdTRFMUNcdTg5N0ZcdUZGMENcdTcxMzZcdTU0MEVcdTY1MzlcdTUzRDhcdTY2M0VcdTc5M0FcdTcyQjZcdTYwMDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1x1NTI2OVx1NEY1OVx1NjVGNlx1OTVGNCBcdTU5ODJcdTY3OUNcdTRFM0EwIFx1NUMzMVx1NEUzQVx1NjIxMFx1NzE5RiBcdTUzNTVcdTRGNERcdTc5RDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0dXJlVGltZUxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSB0aGlzLmxhbmRMaXN0Lmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmxhbmRMaXN0W3hdLmRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRMaXN0W3hdLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBDb3JlLm9ic2VydmFibGVQcm9wZXJ0eVxyXG4gICAgICAgICAgICAud2F0Y2goVXNlckluZm8sIHRoaXMpXHJcbiAgICAgICAgICAgIC5rZXkoXCJkaWFtb25kXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYW1vbmROb2RlLnZhbHVlID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImdvbGRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29sZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiYXZhdGFyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFkZExhbmRMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmUuZXZlbnRPbihBcGlIdHRwLmluaXQpXHJcbiAgICBwcml2YXRlIGdhbWVJbml0KGQ6IE5ldEluaXQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICBsZXQgYSA9IGQuZGF0YS5sYW5kTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExhbmRMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRhc2tcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNpZ25JblwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNpZ25JblZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTWFpbFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoZWFkXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2V0dGluZ1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3YXJlaG91c2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5XYXJlaG91c2VWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYnV5X2ZlZWRcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiAyIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb2dcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaG9wVmlldywgeyBwYXJtOiAxIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcmRlcl9ib3hcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5PcmRlclZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kXCI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxhbmRMZXZlbFVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxhbmRMZXZlbFVwKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZV91cFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5MYW5kTGV2ZWxVcChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBMYW5kTGV2ZWxVcChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IGJnID0gdGhpcy5sYW5kVXBMYXllci5nZXRDaGlsZEJ5TmFtZShcImJnXCIpIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgYmcuYWxwaGEgPSAwO1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKGJnLCB7IGFscGhhOiAwLjc1IH0sIDE1MCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYW5kX291dGVyXCIpLmFkZENoaWxkKHRoaXMubGFuZEJveCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMik7XHJcbiAgICAgICAgICAgICAgICBlLnNob3dUaW1lQm94KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGUuc2hvd1NoYWRvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZS5idWlsZEluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBiZyxcclxuICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgICAgIDE1MCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVyQm94LmFkZENoaWxkKHRoaXMubGFuZEJveCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sYW5kTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5kYXRlLm1hdHVyZVRpbWVMZWZ0KSBlLnNob3dUaW1lQm94KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2hvd1NoYWRvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlLmJ1aWxkSW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0ZS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKGUuZGF0ZS5tYXR1cmVUaW1lTGVmdCA/IDEgOiAzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbigxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwic3JjL2NvcmUvaW5kZXhcIjtcclxuXHJcbi8vY2xhc3MgT3JkZXJWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuT3JkZXJWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vL2NsYXNzIFNldHRpbmdWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHRcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1ZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5TZXR0aW5nVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTZENkVcdTUyQThcdTVGMzlcdTdBOTdcdTUyQThcdTc1M0JcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0Vmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBwcml2YXRlIGVmZmVjdFR3ZWVuT3BlbjogTGF5YS5Ud2VlbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVmZmVjdFR3ZWVuQ2xvc2U6IExheWEuVHdlZW4gPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb250ZW50LCB0aXBzOlwiXHU1MTg1XHU1QkI5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9PcGVuKCkge31cclxuICAgIC8qKlxyXG4gICAgICogIFx1NTE3M1x1OTVFRFx1NjIxMFx1NTI5Rlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb0Nsb3NlKCkge31cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LnNjYWxlKDEsIDEpO1xyXG4gICAgICAgIC8vIGRpYWxvZy5hbHBoYSA9IDAuNjtcclxuICAgICAgICB0aGlzLmVmZmVjdFR3ZWVuT3BlbiA9IExheWEuVHdlZW4uZnJvbShcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICB7IHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLCB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsIHNjYWxlWDogMCwgc2NhbGVZOiAwIH0sXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVZpZXcoKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMub3duZXIgYXMgTGF5YS5WaWV3O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdFR3ZWVuQ2xvc2UgPSBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgeyB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMiwgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLCBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5FYXNlLnN0cm9uZ091dCxcclxuICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgLy8gKSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5PcGVuICYmIExheWEuVHdlZW4uY2xlYXIodGhpcy5lZmZlY3RUd2Vlbk9wZW4pO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5PcGVuID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVmZmVjdFR3ZWVuQ2xvc2UgJiYgTGF5YS5Ud2Vlbi5jbGVhcih0aGlzLmVmZmVjdFR3ZWVuQ2xvc2UpO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5DbG9zZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCJzcmMvY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFscGhhQmcsIHRpcHM6XCJcdTkwMEZcdTY2MEVcdTgwQ0NcdTY2NkZcdTVDNDJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFscGhhQmc6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Cb3hUb3AsIHRpcHM6XCJcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTUyMTdcdTg4NjhcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJ0bkJveFRvcDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tQm94LCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21Cb3g6IExheWEuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NjU4N1x1NUI1N1x1OEQ0NFx1NkU5MFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBidG5Ub3BSZXNMaXN0OiBzdHJpbmdbXVtdID0gW1xyXG4gICAgICAgIFtcImdhbWUvaW1nX3NlZWRzTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3NlZWRzU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX3BldE5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19wZXRTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfZm9vZG5Ob3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfZm9vZG5TZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfYmFua05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19iYW5rU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgXTtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThcdTUyMDdcdTYzNjJcdTY4MDdcdTdCN0VcdTkwMDlcdTYyRTlcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgdG9wQnRuU2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU3MEI5XHU1MUZCXHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0U2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU4MENDXHU2NjZGXHU3RUI5XHU3NDA2ICovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxlY3RCZzogc3RyaW5nW10gPSBbXCJnYW1lL2ltZ19wZXRiYWdOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfcGV0YmFnU2VsZWN0ZWQucG5nXCJdO1xyXG5cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvcEJ0blN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5hbHBoYUJnLmFscGhhID0gMC43NTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtTGlzdCk7XHJcbiAgICAgICAgLy8gdGhpcy5pdGVtTGlzdC5pdGVtUmVuZGVyID0gdGhpcy5saXN0SXRlbTtcclxuXHJcbiAgICAgICAgbGV0IGFyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzMDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGFyLnB1c2goeyBuYW1lOiB4IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLml0ZW1MaXN0LnNjcm9sbEJhci5oaWRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gYXI7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZUl0ZW0pO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25TZWxlY3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uT3BlbmVkKGUpIHtcclxuICAgICAgICB0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID0gZSB8fCAwO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4ID0gZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtKGNlbGw6IExheWEuSW1hZ2UsIGluZGV4KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY2VsbCk7XHJcbiAgICAgICAgLy8gY2VsbC5zZXRJbWcoY2VsbC5kYXRhU291cmNlKTtcclxuICAgICAgICAoY2VsbC5nZXRDaGlsZEJ5TmFtZShcImhib3hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikgYXMgTGF5YS5Gb250Q2xpcCkudmFsdWUgPSBpbmRleDtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09IHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBjZWxsLnNraW4gPSB0aGlzLml0ZW1TZWxlY3RCZ1sxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjZWxsLnNraW4gPSB0aGlzLml0ZW1TZWxlY3RCZ1swXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuU2hvcFZpZXcsIGZhbHNlLCB0cnVlLCBGbG9hdFZpZXdTaG93QW5pKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNlZWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInBldFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZmVlZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYmFua1wiOlxyXG4gICAgICAgICAgICAgICAgbGV0IHRvcEJ0bkluZGV4ID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRJbmRleChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCAhPSB0b3BCdG5JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPSB0b3BCdG5JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvcEJ0blN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU3MEI5XHU1MUZCXHU3MEI5XHU1MUZCXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlVG9wQnRuU3RhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJ0bkJveFRvcC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBsYiA9IGJ0bi5nZXRDaGlsZEF0KDApIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGlmICh4ID09PSB0aGlzLnRvcEJ0blNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVsxXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZy1tZW51bm9ybWFsLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVCb3R0b20oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NUU5NVx1OTBFOFx1NTE4NVx1NUJCOVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJvdHRvbSgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm90dG9tQm94Lm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5Cb3gpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDApIGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDApIGFzIExheWEuQm94KS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDEpIGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDEpIGFzIExheWEuQm94KS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDApIGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDApIGFzIExheWEuQm94KS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDIpIGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDIpIGFzIExheWEuQm94KS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuLy8gIFNpZ25JblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNpZ25JblZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tbW9uL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uIH0gZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4uL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuLi9jb3JlL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgVGFza1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aW1hZ2UsIHRpcHM6XCJcdTVFMDNcdTVDMTRcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgaW1hZ2U6IExheWEuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGdhbWU6IHN0cmluZyA9IFwiMTIxMjEyXCI7XHJcblxyXG4gICAgQEV2ZW50T24oXCJhYVwiKVxyXG4gICAgbXlFdmVudChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhYVwiLCBlLCB0aGlzLmltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NEVEM1x1NUU5M1xyXG4gKi9cclxuLy9GaWVsZExldmVsVXBWaWV3IFdhcmVob3VzZVZpZXcgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXJlaG91c2VWaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5jbG9zZShSZXMudmlld3MuV2FyZWhvdXNlVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQnV0dG9uXCJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi9jb21wb25lbnRzL1ZpZXdTaG93QW5pXCJcbmltcG9ydCBBZGRMYW5kVmlldyBmcm9tIFwiLi92aWV3L0FkZExhbmRWaWV3XCJcbmltcG9ydCBGaWVsZExldmVsVXBWaWV3IGZyb20gXCIuL3ZpZXcvRmllbGRMZXZlbFVwVmlld1wiXG5pbXBvcnQgTG9hZFZpZXcgZnJvbSBcIi4vdmlldy9Mb2FkVmlld1wiXG5pbXBvcnQgTWFpbFZpZXcgZnJvbSBcIi4vdmlldy9NYWlsVmlld1wiXG5pbXBvcnQgTWFpblZpZXcgZnJvbSBcIi4vdmlldy9NYWluVmlld1wiXG5pbXBvcnQgRmllbGRDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9GaWVsZENvbXBvbmVudFwiXG5pbXBvcnQgT3JkZXJWaWV3IGZyb20gXCIuL3ZpZXcvT3JkZXJWaWV3XCJcbmltcG9ydCBTZXR0aW5nVmlldyBmcm9tIFwiLi92aWV3L1NldHRpbmdWaWV3XCJcbmltcG9ydCBTaG9wVmlldyBmcm9tIFwiLi92aWV3L1Nob3BWaWV3XCJcbmltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCIuL2NvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaVwiXG5pbXBvcnQgU2lnbkluVmlldyBmcm9tIFwiLi92aWV3L1NpZ25JblZpZXdcIlxuaW1wb3J0IFRhc2tWaWV3IGZyb20gXCIuL3ZpZXcvVGFza1ZpZXdcIlxuaW1wb3J0IFdhcmVob3VzZVZpZXcgZnJvbSBcIi4vdmlldy9XYXJlaG91c2VWaWV3XCJcclxuLypcclxuKiBcdTZFMzhcdTYyMEZcdTUyMURcdTU5Q0JcdTUzMTZcdTkxNERcdTdGNkU7XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTEwODA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xOTIwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cIm1pZGRsZVwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJjZW50ZXJcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj10cnVlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJjb21wb25lbnRzL0J1dHRvbi50c1wiLEJ1dHRvbik7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvVmlld1Nob3dBbmkudHNcIixWaWV3U2hvd0FuaSk7XG4gICAgICAgIHJlZyhcInZpZXcvQWRkTGFuZFZpZXcudHNcIixBZGRMYW5kVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvRmllbGRMZXZlbFVwVmlldy50c1wiLEZpZWxkTGV2ZWxVcFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L0xvYWRWaWV3LnRzXCIsTG9hZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haWxWaWV3LnRzXCIsTWFpbFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haW5WaWV3LnRzXCIsTWFpblZpZXcpO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50LnRzXCIsRmllbGRDb21wb25lbnQpO1xuICAgICAgICByZWcoXCJ2aWV3L09yZGVyVmlldy50c1wiLE9yZGVyVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU2V0dGluZ1ZpZXcudHNcIixTZXR0aW5nVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvU2hvcFZpZXcudHNcIixTaG9wVmlldyk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaS50c1wiLEZsb2F0Vmlld1Nob3dBbmkpO1xuICAgICAgICByZWcoXCJ2aWV3L1NpZ25JblZpZXcudHNcIixTaWduSW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9UYXNrVmlldy50c1wiLFRhc2tWaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9XYXJlaG91c2VWaWV3LnRzXCIsV2FyZWhvdXNlVmlldyk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCIuL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi9jb21tb24vVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuY2xhc3MgTWFpbiB7XHJcbiAgICAvKiogXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcdTUyMTdcdTg4NjggKi9cclxuICAgIHN0YXRpYyBjdXN0b21SZW5kZXJJRDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1x1NjgzOVx1NjM2RUlERVx1OEJCRVx1N0Y2RVx1NTIxRFx1NTlDQlx1NTMxNlx1NUYxNVx1NjRDRVxyXG4gICAgICAgIGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuICAgICAgICBlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuICAgICAgICBMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcbiAgICAgICAgLy9cdTUxN0NcdTVCQjlcdTVGQUVcdTRGRTFcdTRFMERcdTY1MkZcdTYzMDFcdTUyQTBcdThGN0RzY2VuZVx1NTQwRVx1N0YwMFx1NTczQVx1NjY2RlxyXG4gICAgICAgIExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcbiAgICAgICAgLy9cdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDhcdTkwMUFcdThGQzdJREVcdThCQkVcdTdGNkVcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdUZGMENcdTYyMTZcdTgwMDV1cmxcdTU3MzBcdTU3NDBcdTU4OUVcdTUyQTBkZWJ1Zz10cnVlXHU1M0MyXHU2NTcwXHVGRjBDXHU1NzQ3XHU1M0VGXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA5XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcbiAgICAgICAgTGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG5cclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1OEQ0NFx1NkU5MFx1NzI0OFx1NjcyQ1x1NjNBN1x1NTIzNlx1RkYwQ3ZlcnNpb24uanNvblx1NzUzMUlERVx1NTNEMVx1NUUwM1x1NTI5Rlx1ODBGRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NEU1Rlx1NEUwRFx1NUY3MVx1NTRDRFx1NTQwRVx1N0VFRFx1NkQ0MVx1N0EwQlxyXG4gICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksXHJcbiAgICAgICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT05cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1NTkyN1x1NUMwRlx1NTZGRVx1NjYyMFx1NUMwNFx1RkYwQ1x1NTJBMFx1OEY3RFx1NUMwRlx1NTZGRVx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NTNEMVx1NzNCMFx1NUMwRlx1NTZGRVx1NTcyOFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1OTFDQ1x1OTc2Mlx1RkYwQ1x1NTIxOVx1NEYxOFx1NTE0OFx1NTJBMFx1OEY3RFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1RkYwQ1x1ODAwQ1x1NEUwRFx1NjYyRlx1NUMwRlx1NTZGRVxyXG4gICAgICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXHJcbiAgICAgICAgICAgIFwiZmlsZWNvbmZpZy5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ29uZmlnTG9hZGVkKCkge1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHJcbiAgICAgICAgQ29uZmlnW1wiY3VzdG9tUmVuZGVySURcIl0gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL2F1ZGlvL2RyYXcubXAzXCIpO1xyXG4gICAgICAgIC8vXHU1OTgyXHU2NzlDXHU5MDFBXHU4RkM3XHU4QkJFXHU1OTA3XHU5NzU5XHU5N0YzXHU5NTJFXHU4QkE5XHU5N0YzXHU5ODkxXHU4MUVBXHU1MkE4XHU4RERGXHU5NjhGXHU4QkJFXHU1OTA3XHU5NzU5XHU5N0YzXHUzMDAyXHU5NzAwXHU4OTgxXHU1QzA2dXNlQXVkaW9NdXNpY1x1OEJCRVx1N0Y2RVx1NEUzQWZhbHNlXHUzMDAyXHJcbiAgICAgICAgLy8gU291bmRNYW5hZ2VyLnVzZUF1ZGlvTXVzaWM9ZmFsc2VcdUZGMUJcclxuICAgICAgICAvLyBMYXlhLlNvdW5kTWFuYWdlci5wbGF5TXVzaWMoUmVzLmF1ZGlvcy53aW4pO1xyXG5cclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oUmVzLnZpZXdzLkxvYWREaWFsb2csIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5zZXRMb2FkaW5nUGFnZShlKTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoOTk5OTk5OTk5OTk5OTk5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMYXlhLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgICBSZXMuc2NlbmVzLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2tcIik7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSgzMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4vL1x1NkZDMFx1NkQzQlx1NTQyRlx1NTJBOFx1N0M3QlxyXG5uZXcgTWFpbigpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR08sTUFBVztBQUFYLFlBQVcsWUFBWDtBQUVILGtDQUFnQjtBQUdoQixpQ0FBZTtBQUFBLEtBTEQ7OztBQ0VWLE1BQUs7QUFBTCxZQUFLLFFBQUw7QUFHQSw0QkFBYztBQUVkLGlDQUFtQjtBQUVuQiwyQkFBYTtBQUViLHlCQUFXO0FBRVgseUJBQVc7QUFFWCwwQkFBWTtBQUVaLDRCQUFjO0FBRWQseUJBQVc7QUFFWCwyQkFBYTtBQUViLHlCQUFXO0FBRVgsOEJBQWdCO0FBQUEsS0F2Qlg7QUEwQkwsTUFBSztBQUFMLFlBQUssU0FBTDtBQUdBLHFCQUFNO0FBRU4sdUJBQVE7QUFFUixzQkFBTztBQUVQLG9CQUFLO0FBRUwsc0JBQU87QUFFUCxzQkFBTztBQUFBLEtBYkY7QUFtQkwsTUFBTSxTQUFTO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0c7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElB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
