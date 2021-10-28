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
    views3["ShopView"] = "scenes/views/ShopView.scene";
    views3["SignInView"] = "scenes/views/SignInView.scene";
    views3["TaskView"] = "scenes/views/TaskView.scene";
    views3["test"] = "scenes/views/test.scene";
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
    "scenes/views/test.scene",
    "scenes/views/TaskView.scene",
    "scenes/views/SignInView.scene",
    "scenes/views/ShopView.scene",
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

  // src/components/ViewShowAni.ts
  var ViewShowAni = class extends Laya.Script {
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

  // src/GameConfig.ts
  var GameConfig = class {
    constructor() {
    }
    static init() {
      var reg = Laya.ClassUtils.regClass;
      reg("components/Button.ts", Button);
      reg("components/ViewShowAni.ts", ViewShowAni);
      reg("view/AddLandView.ts", AddLandView);
      reg("view/LoadView.ts", LoadView);
      reg("view/MailView.ts", MailView);
      reg("view/MainView.ts", MainView);
      reg("components/FieldComponent.ts", FieldComponent);
      reg("view/ShopView.ts", ShopView);
      reg("components/FloatViewShowAni.ts", FloatViewShowAni);
      reg("view/SignInView.ts", SignInView);
      reg("view/TaskView.ts", TaskView);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLnRzIiwgIi4uLy4uL3NyYy9jb3JlL09ic2VydmFibGVQcm9wZXJ0eS50cyIsICIuLi8uLi9zcmMvY29yZS9HYW1lU2NyaXB0LnRzIiwgIi4uLy4uL3NyYy9jb3JlL2luZGV4LnRzIiwgIi4uLy4uL3NyYy92aWV3L0FkZExhbmRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L0xvYWRWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L01haWxWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21tb24vTmV0TWFwcy50cyIsICIuLi8uLi9zcmMvY29tbW9uL1Rvb2xzLnRzIiwgIi4uLy4uL3NyYy9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50LnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVXNlckluZm8udHMiLCAiLi4vLi4vc3JjL3ZpZXcvTWFpblZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaS50cyIsICIuLi8uLi9zcmMvdmlldy9TaG9wVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TaWduSW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1Rhc2tWaWV3LnRzIiwgIi4uLy4uL3NyYy9HYW1lQ29uZmlnLnRzIiwgIi4uLy4uL3NyYy9NYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHU1NDBEXHU3OUYwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBFdmVudE1hcHMge1xyXG4gICAgLyoqIGxvYWQgXHU3NTRDXHU5NzYyXHU4RkRCXHU4ODRDXHU2NkY0XHU2NUIwICovXHJcbiAgICBsb2FkX3Byb2dyZXNzID0gXCJsb2FkX3Byb2dyZXNzXCIsXHJcblxyXG4gICAgLyoqIFx1NjZGNFx1NjVCMFx1NTcxRlx1NTczMCAqL1xyXG4gICAgdXBkYXRlX2ZpZWxkID0gXCJ1cGRhdGVfZmllbGRcIixcclxufVxyXG4iLCAiLy9cdTRFRTNcdTc4MDFcdTc1MUZcdTYyMTBcdUZGMENcdTRFMERcdTg5ODFcdTYyNEJcdTUyQThcdTRGRUVcdTY1MzlcblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBlbnVtIHZpZXdzIFxuICAgIHtcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9BZGRMYW5kVmlldy5zY2VuZSAqL1xuICAgICAgICBBZGRMYW5kVmlldyA9IFwic2NlbmVzL3ZpZXdzL0FkZExhbmRWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgRmllbGRMZXZlbFVwVmlldyA9IFwic2NlbmVzL3ZpZXdzL0ZpZWxkTGV2ZWxVcFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTG9hZERpYWxvZy5zY2VuZSAqL1xuICAgICAgICBMb2FkRGlhbG9nID0gXCJzY2VuZXMvdmlld3MvTG9hZERpYWxvZy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZSAqL1xuICAgICAgICBNYWlsVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lICovXG4gICAgICAgIE1haW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2hvcFZpZXcgPSBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaWduSW5WaWV3LnNjZW5lICovXG4gICAgICAgIFNpZ25JblZpZXcgPSBcInNjZW5lcy92aWV3cy9TaWduSW5WaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lICovXG4gICAgICAgIFRhc2tWaWV3ID0gXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvdGVzdC5zY2VuZSAqL1xuICAgICAgICB0ZXN0ID0gXCJzY2VuZXMvdmlld3MvdGVzdC5zY2VuZVwiLCBcbiAgICB9XG5cbiBleHBvcnQgZW51bSBhdWRpb3MgXG4gICAge1xuICAgICAgICAvKiogYXVkaW8vd2luLm1wMyAqL1xuICAgICAgICB3aW4gPSBcInJlcy9hdWRpby93aW4ubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vcmVhZHkubXAzICovXG4gICAgICAgIHJlYWR5ID0gXCJyZXMvYXVkaW8vcmVhZHkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vbW92ZS5tcDMgKi9cbiAgICAgICAgbW92ZSA9IFwicmVzL2F1ZGlvL21vdmUubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZ28ubXAzICovXG4gICAgICAgIGdvID0gXCJyZXMvYXVkaW8vZ28ubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZmFpbC5tcDMgKi9cbiAgICAgICAgZmFpbCA9IFwicmVzL2F1ZGlvL2ZhaWwubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZHJhdy5tcDMgKi9cbiAgICAgICAgZHJhdyA9IFwicmVzL2F1ZGlvL2RyYXcubXAzXCIsIFxuICAgIH1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXG4gICAgICAgICBcInNjZW5lcy92aWV3cy90ZXN0LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTG9hZERpYWxvZy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvRmllbGRMZXZlbFVwVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvQWRkTGFuZFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9GaWVsZFByZWZhYi5wcmVmYWJcIixcbiAgICAgICAgIFwic2NlbmVzL2NvbXBvbmVudHMvQnV0dG9uLnByZWZhYlwiLFxuICAgICAgICAgICAgXCJyZXMvWGFzZGZhc2QucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9ydWxlX3RleHQucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9sb2FkaW5nQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfd29vZHRpdGxlLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3N0b3JlSG91c2VCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19zdG9yZWJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3NoZWxmLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX3BvcFVwQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfbGFuZEJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvdXNldG9wLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmczLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcyLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvaW1nX2hvbWVwYWdlQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfZmFybWxhbmRMb2dvLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3ZzLnZzXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvcHMuZnNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3dpbi5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3JlYWR5Lm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vbW92ZS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2dvLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZmFpbC5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2RyYXcubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9tYWluX3NjZW5lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zY2VuZS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZTEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5hdGxhc1wiXTtcbiAgICBcblxuLyoqXG4gKiBcdTYyNDBcdTY3MDlcdThENDRcdTZFOTBcbiAqL1xuY29uc3QgUmVzID0ge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBzY2VuZXM6IHNjZW5lcyxcbiAgICBhdWRpb3M6IGF1ZGlvcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcztcbiIsICIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5jb25zdCBFdmVudEdsb2JhbCA9IG5ldyBMYXlhLkV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1OEJBMlx1OTYwNVx1NEU4Qlx1NEVGNlx1NzY4NFx1N0M3Qlx1NzY4NFx1NTM5Rlx1NTc4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV2ZW50Q2xhc3M6IE1hcDxhbnksIHsga2V5OiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9PiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QSA9PiBcdTdFRDFcdTVCOUFcdTUyMzBcdTg4QzVcdTk5NzBcdTU2NjhcdTRFMEEgXHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRXZlbnRPbihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG4gICAgICAgIEV2ZW50Q2xhc3Muc2V0KHRhcmdldCwgeyBrZXk6IG5hbWUsIGZuOiBkZXNjcmlwdG9yLnZhbHVlIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1NUM1RVx1NjAyN1x1NjdFNVx1NjI3RVx1N0VEMVx1NUI5QVx1NTQwRFx1NzlGMFx1NzY4NFx1N0M3Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJpbmROYW1lQ2xhc3M6IE1hcDxhbnksIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRCeU5hbWUodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpIHtcclxuICAgIC8vICAodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG5cclxuICAgIGlmICghQmluZE5hbWVDbGFzcy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgIEJpbmROYW1lQ2xhc3Muc2V0KHRhcmdldCwgW10pO1xyXG4gICAgfVxyXG4gICAgQmluZE5hbWVDbGFzcy5nZXQodGFyZ2V0KS5wdXNoKHByb3BlcnR5S2V5KTtcclxuICAgIC8vIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50R2xvYmFsO1xyXG4iLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YmcsIHRpcHM6XCJcdTgwQ0NcdTY2NkZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgYmc6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvbnRlbnQsIHRpcHM6XCJcdTUxODVcdTVCQjlcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgY29udGVudDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFuaVR5cGUsdGlwczpcIlx1NTJBOFx1NzUzQlx1N0M3Qlx1NTc4QlwiLHR5cGU6RWRpdE9wdGlvbixvcHRpb246XCJib3R0b21Ub1Nob3csc2NhbGVTaG93XCJ9Ki9cclxuICAgIC8vIFx1OEZENFx1NTZERVx1NUI1N1x1N0IyNlx1NEUzMlxyXG4gICAgYW5pVHlwZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgdHdlZW5MaXN0OiBMYXlhLlR3ZWVuW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb09wZW4oKSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiAgXHU1MTczXHU5NUVEXHU2MjEwXHU1MjlGXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvQ2xvc2UoKSB7fVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuXHJcbiAgICAgICAgdGhpcy5iZy5hbHBoYSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnLFxyXG4gICAgICAgICAgICAgICAgeyBhbHBoYTogMC43NSB9LFxyXG4gICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFuaVR5cGUpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYW5pVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic2NhbGVTaG93XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4uZnJvbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLCB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsIHNjYWxlWDogMCwgc2NhbGVZOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LmJvdHRvbSA9IC10aGlzLmNvbnRlbnQuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYm90dG9tOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLmNpcmNPdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVZpZXcoKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMub3duZXIgYXMgTGF5YS5WaWV3O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJnLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgYWxwaGE6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMuZG9PcGVuLCBbZGlhbG9nXSksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuYW5pVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNjYWxlU2hvd1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogTGF5YS5zdGFnZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlWDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5FYXNlLnN0cm9uZ091dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGJvdHRvbTogLXRoaXMuY29udGVudC5oZWlnaHQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5IYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4uY2xlYXIoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG4iLCAiLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuY29uc3QgaW5zdGFuY2VMaXN0OiBNYXA8bnVtYmVyLCB7IG5ldyAoKTogdm9pZCB9PiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBcdTVCOUVcdTRGOEJcdTc2ODRpZFxyXG4gKi9cclxubGV0IGluc3RhbmNlSWQ6IG51bWJlciA9IDEwMDtcclxuXHJcbi8qKlxyXG4gKiBcdTUzNTVcdTRGOEJcdTg4QzVcdTk5NzBcdTU2NjhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnN0YW5jZSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghaW5zdGFuY2VMaXN0Lmhhcyh0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSkpIHtcclxuICAgICAgICBpbnN0YW5jZUlkKys7XHJcbiAgICAgICAgdGFyZ2V0W1wiI2luc3RhbmNlSWRcIl0gPSBpbnN0YW5jZUlkO1xyXG4gICAgICAgIGluc3RhbmNlTGlzdC5zZXQoaW5zdGFuY2VJZCwgbmV3IHRhcmdldCgpKTtcclxuICAgIH1cclxuICAgIHRhcmdldFtrZXldID0gaW5zdGFuY2VMaXN0LmdldChpbnN0YW5jZUlkKTtcclxufVxyXG4iLCAiaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IFJlcywgeyB2aWV3cyB9IGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU5NzAwXHU4OTgxXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAqL1xyXG5pbnRlcmZhY2UgVmlld09wZW5QYXJtIHtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyICovXHJcbiAgICBzaG93TG9hZD86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCAqL1xyXG4gICAgc2hvd0xvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTk2OTBcdTg1Q0Zsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0IFx1OUVEOFx1OEJBNDAgKi9cclxuICAgIGhpZGVMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1MTczXHU5NUVEXHU1MTc2XHU0RUQ2XHU1NzNBXHU2NjZGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBdHJ1ZVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVx1RkYwQ1x1MzAxMFx1NkNFOFx1NjEwRlx1MzAxMVx1ODhBQlx1NTE3M1x1OTVFRFx1NzY4NFx1NTczQVx1NjY2Rlx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1OEJCRVx1N0Y2RWF1dG9EZXN0cm95QXRSZW1vdmVkPXRydWVcdUZGMENcdTUyMTlcdThENDRcdTZFOTBcdTUzRUZcdTgwRkRcdTRFMERcdTgwRkRcdTg4QUJcdTU2REVcdTY1MzZcdUZGMENcdTk3MDBcdTg5ODFcdTgxRUFcdTVERjFcdTYyNEJcdTUyQThcdTU2REVcdTY1MzZcclxuICAgICAqIHRvZG8gXHU3M0IwXHU1NzI4XHU4RkQ5XHU0RTJBXHU4QzAzXHU3NTI4XHU3Njg0XHU2NjJGXHU1RjE1XHU2NENFXHU4MUVBXHU1RTI2XHU3Njg0XHU2NUI5XHU2Q0Q1XHVGRjBDXHU2Q0ExXHU2NzA5XHU4RDcwXHU4RkQ5XHU5MUNDXHU3Njg0XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0VGXHU4MEZEXHU0RjFBXHU2NzA5XHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgKiBcdTczQjBcdTU3MjhcdTUxNjhcdTY2MkZmYWxzZSBcdTU0MEVcdTY3MUZcdTY3MDlcdTk3MDBcdTg5ODFcdTUxOERcdTRGMThcdTUzMTZcdThGRDlcdTRFMkFcdTRFMUNcdTg5N0ZcdUZGMENcdTRFMERcdTgwRkRcdTUxNzNcdTk1RURcdTUxNzZcdTVCODNcdTYyNDBcdTY3MDlcdTc1NENcdTk3NjJcdThGRDhcdTY3MkFcdTVCOUVcdTczQjBcclxuICAgICAqL1xyXG4gICAgY2xvc2VPdGhlcj86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHBhcm0/OiBhbnk7XHJcbiAgICAvKiogIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBjb21wbGV0ZT86IEZ1bmN0aW9uO1xyXG4gICAgLyoqIFx1NTJBMFx1OEY3RFx1OEZEQlx1NUVBNlx1NTZERVx1OEMwM1x1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcHJvZ3Jlc3M/OiBIYW5kbGVyO1xyXG59XHJcblxyXG5jb25zdCB2aWV3TWFwczogeyB1cmw6IHN0cmluZzsgdmlldzogTGF5YS5WaWV3IH1bXSA9IFtdO1xyXG5cclxuLyoqXHJcbiAqIFx1NzU0Q1x1OTc2Mlx1N0JBMVx1NzQwNlx1NTY2OFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpZXdNYW5hZ2VyIHtcclxuICAgIEBJbnN0YW5jZVxyXG4gICAgc3RhdGljIGluc3Q6IFZpZXdNYW5hZ2VyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU0RTAwXHU0RTJBXHU3NTRDXHU5NzYyXHJcbiAgICAgKiBAcGFyYW0gdXJsIFx1NzU0Q1x1OTc2Mlx1NTczMFx1NTc0MCBSZXMudmlld3NcdTkxQ0NcdTc2ODRcclxuICAgICAqIEBwYXJhbSBkYXRhIFx1NTNDMlx1NjU3MFxyXG4gICAgICovXHJcbiAgICBvcGVuKFxyXG4gICAgICAgIHVybDogdmlld3MsXHJcbiAgICAgICAgZGF0YTogVmlld09wZW5QYXJtID0ge1xyXG4gICAgICAgICAgICBjbG9zZU90aGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93TG9hZERlbGF5OiAxMDAsXHJcbiAgICAgICAgICAgIGhpZGVMb2FkRGVsYXk6IDAsXHJcbiAgICAgICAgfVxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF1cmwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwibWlzcyBwYXRoIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEuc2hvd0xvYWQpIHtcclxuICAgICAgICAgICAgTGF5YS5WaWV3LnNob3dMb2FkaW5nUGFnZShudWxsLCBkYXRhLnNob3dMb2FkRGVsYXkpO1xyXG4gICAgICAgICAgICBpZiAodXJsICE9PSBSZXMudmlld3MuTG9hZERpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoZGF0YS5oaWRlTG9hZERlbGF5KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhLmNsb3NlT3RoZXIgPSBmYWxzZTtcclxuICAgICAgICBMYXlhLlZpZXcub3BlbihcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBkYXRhLmNsb3NlT3RoZXIsXHJcbiAgICAgICAgICAgIGRhdGEucGFybSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybCAhPSBSZXMudmlld3MuTG9hZERpYWxvZykgdmlld01hcHMucHVzaCh7IHVybDogdXJsLCB2aWV3OiBlIH0pO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5jb21wbGV0ZSAmJiBkYXRhLmNvbXBsZXRlKGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgYCVjID09PiBvcGVuICVjJHt1cmwubWF0Y2goL1xcdysoPz1cXC4pLylbMF19IGAsXHJcbiAgICAgICAgICAgICAgICAgICAgYGNvbG9yOiM3ZWQ2ZGY7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgICAgICAgICAgYGNvbG9yOiMyMmE2YjM7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBkYXRhLnByb2dyZXNzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTE3M1x1OTVFRFx1ODlDNlx1NTZGRVxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gYWxsIFx1NTQwQ1x1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2Mlx1ODhBQiBcdTU5MUFcdTZCMjFcdTYyNTNcdTVGMDBcdUZGMENcdTUxNjhcdTUyMjBcdTk2NjRcdTc1MjhcdThGRDlcdTRFMkFcclxuICAgICAqIEBwYXJhbSBkZXN0cm95IFx1OTUwMFx1NkJDMSAgIFRPRE9cdUZGMDhcdTlFRDhcdThCQTRcdTRGMUFcdTk1MDBcdTZCQzFcdTYyNDBcdTY3MDlcdTVCNTBcdTgyODJcdTcwQjlcdUZGMENcdTY3MkFcdTZENEJcdThCRDVcdTY2MkZcdTU0MjZcdTY3MDlcdTk1RUVcdTk4OThcdUZGMDlcclxuICAgICAqL1xyXG4gICAgYXN5bmMgY2xvc2UoXHJcbiAgICAgICAgdXJsOiB2aWV3cyxcclxuICAgICAgICBhbGw6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBkZXN0cm95OiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgYW5pQ29tOiB0eXBlb2YgVmlld1Nob3dBbmkgfCB0eXBlb2YgRmxvYXRWaWV3U2hvd0FuaSA9IFZpZXdTaG93QW5pXHJcbiAgICApIHtcclxuICAgICAgICAvL1RPRE8gXHU4RkQ5XHU5MUNDXHU3M0IwXHU1NzI4XHU1MTY4XHU5MEU4XHU3NTI4ZGVzdHJveSBcdTVGMTVcdTY0Q0VyZW1vdmVcdTU5N0RcdTUwQ0ZcdTY3MDlcdTcwQjlcdTk1RUVcdTk4OThcdUZGMENcdTUxOERcdTkwMUFcdThGQzd2aWV3Lm9wZW5cdTRGMUFcdTkxQ0RcdTY1QjBcdTY3ODRcdTVFRkFcdTdFQzRcdTRFRjZcclxuICAgICAgICBkZXN0cm95ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHZBbmk6IFZpZXdTaG93QW5pO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAodXJsID09PSB2aWV3TWFwc1t4XS51cmwpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gdmlld01hcHNbeF07XHJcbiAgICAgICAgICAgICAgICB2aWV3TWFwcy5zcGxpY2UoeCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdkFuaSA9IHYudmlldy5nZXRDb21wb25lbnQoYW5pQ29tIGFzIGFueSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodkFuaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZBbmkuY2xvc2VWaWV3KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHU0RkREXHU4QkMxXHU1OTgyXHU2NzlDXHU1NzNBXHU2NjZGXHU1QjhDXHU1MTY4XHU2Q0ExXHU2NzA5XHU3NTRDXHU5NzYyXHU4OEFCXHU2MjUzXHU1RjAwXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1RkM1XHU2MjUzXHU1RjAwXHU0RTNCXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgbGV0IGNsb3NlTGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKCF2aWV3TWFwc1t4XS52aWV3LnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VMZW4rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlTGVuID09PSB2aWV3TWFwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKFJlcy52aWV3cy5NYWluVmlldyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh2aWV3TWFwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZVZpZXdMb2codXJsOiBzdHJpbmcsIGRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBgJWMgPD09ICR7ZGVzdHJveSA/IFwiZGVzdHJveVwiIDogXCJkaXNhYmxlXCJ9ICVjJHt1cmwubWF0Y2goL1xcdysoPz1cXC4pLylbMF19IGAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZmY3OTc5O2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2ViNGQ0Yjtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNThcdTc1NENcdTk3NjJcclxuICAgICAqL1xyXG4gICAgY2xlYXJWaWV3TWFwcygpIHtcclxuICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVmYXVsdFJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRlZmF1bHRSZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZG93blJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRvd25SZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXNTY2FsZSwgdGlwczpcIlx1NjYyRlx1NTQyNlx1N0YyOVx1NjUzRVwiLHR5cGU6Q2hlY2t9Ki9cclxuICAgIHByaXZhdGUgaXNTY2FsZSA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNjYWxlVmFsLCB0aXBzOlwiXHU3RjI5XHU2NTNFXHU3Njg0XHU1MDNDXCIsdHlwZTpOdW1iZXIsIGRlZmF1bHQ6MC45fSovXHJcbiAgICBwcml2YXRlIHNjYWxlVmFsOiBudW1iZXIgPSAwLjk7XHJcblxyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgb2xkU2NhbGVZOiBudW1iZXI7XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc1NjYWxlKTtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikubW91c2VFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWCA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVYKCk7XHJcbiAgICAgICAgdGhpcy5vbGRTY2FsZVkgPSAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikuZ2V0X3NjYWxlWSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VEb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRvd25SZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKHRoaXMuc2NhbGVWYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBbmkoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1NjYWxlKSByZXR1cm47XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5vd25lcixcclxuICAgICAgICAgICAgeyBzY2FsZVg6IHNjYWxlICogdGhpcy5vbGRTY2FsZVgsIHNjYWxlWTogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWSB9LFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2tpbihza2luOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXNraW4pIHJldHVybjtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkltYWdlKS5za2luID0gc2tpbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7fVxyXG59XHJcbiIsICJjb25zdCBjYWxsZXJzOiBNYXA8YW55LCBGdW5jdGlvbltdPiA9IG5ldyBNYXAoKTtcclxuXHJcbmNsYXNzIE9ic2VydmFibGVDb250cm9sPGNhbGwgZXh0ZW5kcyBMYXlhLlNjcmlwdD4ge1xyXG4gICAgcHJpdmF0ZSBrZXlFdmVudHM6IE1hcDxhbnksIE1hcDxzdHJpbmcsIEZ1bmN0aW9uW10+PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzZEMVx1NTQyQ1x1NUM1RVx1NjAyN1x1NTAzQ1x1NTNEOFx1NTMxNlxyXG4gICAgICogQHBhcmFtIE9iaiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTc2ODRcdTVCRjlcdThDNjFcclxuICAgICAqL1xyXG4gICAgd2F0Y2g8VCBleHRlbmRzIHt9PihPYmo6IFQsIGNhbGxlcjogY2FsbCkge1xyXG4gICAgICAgIGlmICghY2FsbGVycy5oYXMoY2FsbGVyKSkge1xyXG4gICAgICAgICAgICBjYWxsZXJzLnNldChjYWxsZXIsIFtdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBrZXlFdmVudCA9IHRoaXMua2V5RXZlbnRzO1xyXG4gICAgICAgIGlmICgha2V5RXZlbnQuaGFzKE9iaikpIHtcclxuICAgICAgICAgICAga2V5RXZlbnQuc2V0KE9iaiwgbmV3IE1hcCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlx1NzY4NFx1NUM1RVx1NjAyN1x1NEU4Qlx1NEVGNlxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkgXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QzVFXHU2MDI3XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGwgXHU1NkRFXHU4QzAzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qga2V5QmluZCA9IDxLZXkgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEtleSAmIHN0cmluZywgY2FsbDogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IF9vYmogPSBrZXlFdmVudC5nZXQoT2JqKTtcclxuICAgICAgICAgICAgaWYgKCFfb2JqLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBfb2JqLnNldChrZXksIFtdKTtcclxuICAgICAgICAgICAgICAgIGlmIChPYmpbXCIjXCIgKyBrZXldID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9ialtcIiNcIiArIGtleV0gPSBPYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbXCIjXCIgKyBrZXldID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9vYmouZ2V0KGtleSkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tcIiNcIiArIGtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2FsbC5iaW5kKGNhbGwpO1xyXG4gICAgICAgICAgICBfb2JqLmdldChrZXkpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcikucHVzaChjYWxsKTtcclxuICAgICAgICAgICAgY2FsbChPYmpba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5MDFBXHU4RkM3XHU0RjIwXHU1MTY1XHU3Njg0Y2FsbGVyXHU1MjIwXHU5NjY0XHU1RjUzXHU1MjREXHU3RUQxXHU1QjlBXHU3Njg0XHU2MjQwXHU2NzA5XHU3Njg0XHU0RThCXHU0RUY2IFx1NjIxNlx1NjMwN1x1NUI5QVx1ODlFM1x1NTFCM1x1NkEyMVx1NEUyQVx1NUJGOVx1OEM2MVx1OERERlx1NUY1M1x1NTI0RGNhbGxlclx1N0VEMVx1NUI5QVx1NzY4NFx1NzZEMVx1NTQyQ1xyXG4gICAgICogQHBhcmFtIGNhbGxlciBcdTc2RDFcdTU0MkNcdTY1RjZcdTdFRDFcdTVCOUFcdTc2ODRcdTU3M0FcdTY2NkZcdTVCRjlcdThDNjFcclxuICAgICAqIEBwYXJhbSBvYmogXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUJ5Q2FsbGVyKGNhbGxlcjogY2FsbCwgb2JqOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgY2FsbGVycy5nZXQoY2FsbGVyKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZ2V0KG9iaikuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhPZiA9IGV2LmluZGV4T2YoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGsuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZiA+IC0xKSBldi5zcGxpY2UoaW5kZXhPZiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU3RUQxXHU1QjlBXHU1M0VGXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgT2JzZXJ2YWJsZUNvbnRyb2woKTtcclxuIiwgImltcG9ydCBFdmVudEdsb2JhbCwgeyBCaW5kTmFtZUNsYXNzLCBFdmVudENsYXNzIH0gZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JpcHQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vRXZlbnRPblx1ODhDNVx1OTk3MFx1NTY2OFx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QVxyXG4gICAgICAgIGxldCBiaW5kRXZlbnQgPSBFdmVudENsYXNzLmdldCh0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgYmluZEV2ZW50ICYmIEV2ZW50R2xvYmFsLm9uKGJpbmRFdmVudC5rZXksIHRoaXMsIGJpbmRFdmVudC5mbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRBd2FrZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25Bd2FrZSgpIHtcclxuICAgICAgICAvL1x1N0VEOVx1ODhDNVx1OTk3MFx1NTY2OFx1OEJCMFx1NUY1NVx1NzY4NFx1NUM1RVx1NjAyN1x1RkYwQ1x1NjdFNVx1NjI3RVx1ODI4Mlx1NzBCOVxyXG4gICAgICAgIEJpbmROYW1lQ2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2VdID0gdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uSGRBd2FrZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTZGQzBcdTZEM0JcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCNjRcdTY1RjZcdTYyNDBcdTY3MDlcdTgyODJcdTcwQjlcdTU0OENcdTdFQzRcdTRFRjZcdTU3NDdcdTVERjJcdTUyMUJcdTVFRkFcdTVCOENcdTZCRDVcdUZGMENcdTZCMjFcdTY1QjlcdTZDRDVcdTUzRUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkQXdha2UoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRW5hYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRFbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NTQyRlx1NzUyOFx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1ODI4Mlx1NzBCOVx1ODhBQlx1NkRGQlx1NTJBMFx1NTIzMFx1ODIxRVx1NTNGMFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkU3RhcnRcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkU3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QjJDXHU0RTAwXHU2QjIxXHU2MjY3XHU4ODRDdXBkYXRlXHU0RTRCXHU1MjREXHU2MjY3XHU4ODRDXHVGRjBDXHU1M0VBXHU0RjFBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFN0YXJ0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFVwZGF0ZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCQ0ZcdTVFMjdcdTY2RjRcdTY1QjBcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTVDM0RcdTkxQ0ZcdTRFMERcdTg5ODFcdTU3MjhcdThGRDlcdTkxQ0NcdTUxOTlcdTU5MjdcdTVGQUFcdTczQUZcdTkwM0JcdThGOTFcdTYyMTZcdTgwMDVcdTRGN0ZcdTc1MjhnZXRDb21wb25lbnRcdTY1QjlcdTZDRDVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkVXBkYXRlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERpc2FibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGREaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTc5ODFcdTc1MjhcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTRFQ0VcdTgyODJcdTcwQjlcdTRFQ0VcdTgyMUVcdTUzRjBcdTc5RkJcdTk2NjRcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGlzYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREZXN0cm95XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25IZERlc3Ryb3koKTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NkUwNVx1OTY2NFx1OERERlx1NUY1M1x1NTI0RFx1N0M3Qlx1N0VEMVx1NUI5QVx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1ODlDMlx1NUJERlx1NjVCOVx1NkNENVxyXG4gICAgICAgICAgICBPYnNlcnZhYmxlUHJvcGVydHkucmVtb3ZlQnlDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIC8vXHU5NTAwXHU2QkMxXHU2NUY2XHU2RTA1XHU5NjY0XHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU1RjE1XHU3NTI4XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0ga2V5cy5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5c1t4XV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNEJcdTUyQThcdThDMDNcdTc1MjhcdTgyODJcdTcwQjlcdTk1MDBcdTZCQzFcdTY1RjZcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGVzdHJveSgpIHt9XHJcbn1cclxuIiwgImltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uLCBGaW5kQnlOYW1lIH0gZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4vR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vVmlld01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IENvcmUgPSB7XHJcbiAgICAvKiogXHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU3RUQxXHU1QjlBXHU1M0VGXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2ICovXHJcbiAgICBvYnNlcnZhYmxlUHJvcGVydHk6IE9ic2VydmFibGVQcm9wZXJ0eSxcclxuICAgIC8qKiBcdTc1NENcdTk3NjJcdTdCQTFcdTc0MDZcdTU2NjggKi9cclxuICAgIHZpZXc6IFZpZXdNYW5hZ2VyLmluc3QsXHJcbiAgICAvKiogXHU1RjE1XHU2NENFXHU4MTFBXHU2NzJDXHU3RUM0XHU0RUY2ICovXHJcbiAgICBnYW1lU2NyaXB0OiBHYW1lU2NyaXB0LFxyXG4gICAgLyoqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OCAqL1xyXG4gICAgaW5zdGFuY2U6IEluc3RhbmNlLFxyXG4gICAgLyoqIFx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QSA9PiBcdTdFRDFcdTVCOUFcdTUyMzBcdTg4QzVcdTk5NzBcdTU2NjhcdTRFMEEgXHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG4gICAgZXZlbnRPbjogRXZlbnRPbixcclxuICAgIC8qKiB0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lXHU3Njg0XHU3NzAxXHU0RThCXHU1MTk5XHU2Q0Q1IFx1NTNFQVx1ODBGRFx1NjdFNVx1NjI3RVx1NEUwQlx1NEUwMFx1N0VBN1x1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuICAgIGZpbmRCeU5hbWU6IEZpbmRCeU5hbWUsXHJcbiAgICAvKiogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2ICovXHJcbiAgICBldmVudEdsb2JhbDogRXZlbnRHbG9iYWwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3JlO1xyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5cclxuLy8gIEFkZExhbmRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRMYW5kVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3LmNsb3NlKFJlcy52aWV3cy5BZGRMYW5kVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2FkQmFyLCB0aXBzOlwibG9hZCBiYXJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxvYWRCYXI6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIC8qKiBcdThGREJcdTVFQTZcdTY3NjFcdTlFRDhcdThCQTRcdTVCQkRcdTVFQTYgKi9cclxuICAgIHByaXZhdGUgbG9hZEJhck9sZFdpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uQXdha2UoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5vd25lci5pXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sb2FkTGFiZWwpO1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICAgICAgLy8gdGhpcy5sb2FkTGFiZWwudGV4dCA9IFwiTG9hZC4uLi4wJVwiO1xyXG4gICAgICAgIHRoaXMubG9hZEJhck9sZFdpZHRoID0gdGhpcy5sb2FkQmFyLndpZHRoO1xyXG4gICAgICAgIHRoaXMubG9hZEJhci53aWR0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUHJvZ3Jlc3Modikge1xyXG4gICAgICAgIHRoaXMubG9hZEJhci53aWR0aCA9IHYgKiB0aGlzLmxvYWRCYXJPbGRXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgTWFpbFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5NYWlsVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTc3RURcdTk0RkVcdTYzQTVcdThCRjdcdTZDNDJcdTUzNEZcdThCQUVcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFwaUh0dHAge1xyXG4gICAgLyoqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NTM0Rlx1OEJBRSAqL1xyXG4gICAgaW5pdCA9IFwiL2luaXRcIixcclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdTVCNTdcdTdCMjZcclxuICAgICAqIEBwYXJhbSBzdHIgXHU4OTgxXHU4OUUzXHU2NzkwXHU3Njg0XHU1QjU3XHU3QjI2XHJcbiAgICAgKiBAcGFyYW0gZm9ybWF0IFx1NTA1QVx1NEUzQVx1NTNDMlx1ODAwM1x1NzY4NFx1NUI1N1x1N0IyNlx1OUVEOFx1OEJBNFx1NEUzQSxcclxuICAgICAqIEByZXR1cm5zIFx1ODlFM1x1Njc5MFx1NTk3RFx1NzY4NFx1NUI1N1x1N0IyNlx1NTIxN1x1ODg2OFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcGFyc2VTdHJpbmcoc3RyOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nID0gXCIsXCIpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnNwbGl0KGZvcm1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc5RDJcdThGNkNcdTYzNjJcdTYyMTAwMDowMDowMFxyXG4gICAgICogQHBhcmFtIHMgXHU4RjZDXHU2MzYyXHU2NUY2XHU5NUY0XHU3Njg0XHU3OUQyXHJcbiAgICAgKiBAcmV0dXJucyAwMDowMDowMFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZm9ybWF0U2Vjb25kcyA9IChzKSA9PiBuZXcgRGF0ZShzICogMTAwMCkudG9JU09TdHJpbmcoKS5zdWJzdHIoMTEsIDgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwic3JjL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFRvb2xzIGZyb20gXCJzcmMvY29tbW9uL1Rvb2xzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5cclxuLy8gIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4vKipcclxuICogXHU3NTMwXHU1NzMwXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZENvbXBvbmVudCBleHRlbmRzIENvcmUuZ2FtZVNjcmlwdCB7XHJcbiAgICAvKiogXHU2OTBEXHU3MjY5aWNvbiAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSBpY29uOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTgyODJcdTcwQjkgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgZmllbGROb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTY3MDlcdTY5MERcdTcyNjlcdTY1RjZcdTc2ODRcdTk2MzRcdTVGNzEgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgc2hhZG93OiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpmaWVsZEVtcHR5UmVzLCB0aXBzOlwiXHU4OUUzXHU5NTAxXHU1NDBFXHU1NzFGXHU1NzMwXHU3RUI5XHU3NDA2XCIsIHR5cGU6U3RyaW5nLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZmllbGRFbXB0eVJlczogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTdCNDlcdTdFQTdcdTU2RkVcdTcyNDcgKi9cclxuICAgIEBDb3JlLmZpbmRCeU5hbWVcclxuICAgIHByaXZhdGUgbHZOb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTUwMTJcdThCQTFcdTY1RjZcdTVCQjlcdTU2NjgqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSB0aW1lQm94OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBcdTUwMTJcdThCQTFcdTY1RjZsYWJlbCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudERvd25MYjogTGF5YS5MYWJlbCA9IG51bGw7XHJcbiAgICAvKiogXHU5ODc2XHU5MEU4aWNvblx1ODhDNVx1OTk3MCAqL1xyXG4gICAgQENvcmUuZmluZEJ5TmFtZVxyXG4gICAgcHJpdmF0ZSB0b3BTdGF0ZUljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NjIxMFx1NzE5Rlx1NTNFRlx1NjUzNmljb24gKi9cclxuICAgIHByaXZhdGUgbWF0dXJlTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU1M0VGXHU2NEFEXHU3OUNEXHU3QTdBXHU1NzMwaWNvbiAqL1xyXG4gICAgcHJpdmF0ZSBlbXB0eUZpZWxkTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6dW5sb2NrSWNvbiwgdGlwczpcIlx1NjJEM1x1NUM1NVx1NTcxRlx1NTczMGljb25cdTU3MzBcdTU3NDBcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSB1bmxvY2tJY29uOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZWxkSWQsIHRpcHM6XCJcdTU3MUZcdTU3MzBpZFwiLCB0eXBlOk51bWJlcix9Ki9cclxuICAgIGZpZWxkSWQ6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOGljb25cdTZENkVcdTUyQThcdTUyQThcdTc1M0IgKi9cclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uVHdlZW46IExheWEuVGltZUxpbmU7XHJcblxyXG4gICAgLyoqIFx1NUVGQVx1N0I1MVx1NEUyRCAqL1xyXG4gICAgYnVpbGRJbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKiBcdTU3MUZcdTU3MzBcdTY1NzBcdTYzNkUgKi9cclxuICAgIGRhdGU6IE5ldEluaXRbXCJkYXRhXCJdW1wibGFuZExpc3RcIl1bMF07XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMuZmllbGROb2RlID0gPExheWEuSW1hZ2U+dGhpcy5vd25lcjtcclxuICAgICAgICB0aGlzLmNvdW50RG93bkxiID0gdGhpcy50aW1lQm94LmdldENoaWxkQnlOYW1lKFwiY291bnREb3duTGJcIikgYXMgYW55O1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRpbWVCb3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b3BTdGF0ZUljb24udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBAQ29yZS5ldmVudE9uKEV2ZW50TWFwcy51cGRhdGVfZmllbGQpXHJcbiAgICB1cGRhdGVEYXRlKGQ6IHsgbGFuZExpc3Q6IE5ldEluaXRbXCJkYXRhXCJdW1wibGFuZExpc3RcIl0gfSkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZC5sYW5kTGlzdC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBpZiAoZC5sYW5kTGlzdFt4XS5pZCA9PSB0aGlzLmZpZWxkSWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGQubGFuZExpc3RbeF07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmljb24pO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkTm9kZS5za2luID0gdGhpcy5maWVsZEVtcHR5UmVzO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJY29uKEJvb2xlYW4odGhpcy5kYXRlLnByb2R1Y3RJZCkpO1xyXG4gICAgICAgICAgICB0aGlzLmx2Tm9kZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQm94LmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2hhZG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxldmVsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZS5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uQW5pKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnREb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmljb24uc2tpbiA9IHRoaXMudW5sb2NrSWNvbjtcclxuICAgICAgICAgICAgdGhpcy5zaG93SWNvbihmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFaWNvblx1NzY4NFx1NjYzRVx1NzkzQVx1OTY5MFx1ODVDRlx1NzJCNlx1NjAwMVxyXG4gICAgICogQHBhcmFtIHNob3cgXHU2NjNFXHU3OTNBXHU2MjE2XHU5NjkwXHU4NUNGXHJcbiAgICAgKi9cclxuICAgIHNob3dJY29uKHNob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmljb24udmlzaWJsZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTcyQjZcdTYwMDFpY29uXHU3RUI5XHU3NDA2XHJcbiAgICAgKiBAcGFyYW0gc2tpblR5cGUgMSBcdTZENDdcdTZDMzRcdTUyQTBcdTkwMUZcdTcyQjZcdTYwMDEgMiBcdTVFRkFcdTdCNTFcdTcyQjZcdTYwMDEgMyBcdTYyMTBcdTcxOUZcdTcyQjZcdTYwMDFcclxuICAgICAqL1xyXG4gICAgc2V0U3RhdGVJY29uU2tpbihza2luVHlwZTogMSB8IDIgfCAzKSB7XHJcbiAgICAgICAgc3dpdGNoIChza2luVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbi5za2luID0gXCJtYWluX3NjZW5lL2ltZ19zcGVlZFVwLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2xhbmRVcGRhdGVCdG4yLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uLnNraW4gPSBcIm1haW5fc2NlbmUvaW1nX2hhcnZlc3QucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQkVcdTdGNkVcdTY1RjZcdTk1RjRcdTVCQjlcdTU2NjhcdTc2ODRcdTY2M0VcdTc5M0FcdTk2OTBcdTg1Q0ZcdTcyQjZcdTYwMDFcclxuICAgICAqIEBwYXJhbSBzaG93IFx1NjYzRVx1NzkzQVx1NjIxNlx1OTY5MFx1ODVDRlxyXG4gICAgICovXHJcbiAgICBzaG93VGltZUJveChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy50aW1lQm94LnZpc2libGUgPSBzaG93O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4QkJFXHU3RjZFXHU5NjM0XHU1RjcxXHU2NjNFXHU3OTNBXHU5NjkwXHU4NUNGXHU3MkI2XHU2MDAxXHJcbiAgICAgKiBAcGFyYW0gc2hvdyBcdTY2M0VcdTc5M0FcdTYyMTZcdTk2OTBcdTg1Q0ZcclxuICAgICAqL1xyXG4gICAgc2hvd1NoYWRvd0ljb24oc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2hhZG93LnZpc2libGUgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmFjdGl2ZSA9IHNob3c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTk4NzZcdTkwRThpY29uXHU1MkE4XHU3NTNCXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdG9wU3RhdGVJY29uQW5pKHBsYXk6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoIXRoaXMudG9wU3RhdGVJY29uVHdlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2VlbiA9IExheWEuVGltZUxpbmUudG8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvcFN0YXRlSWNvbixcclxuICAgICAgICAgICAgICAgIHsgeTogdGhpcy50b3BTdGF0ZUljb24ueSAtIDUwIH0sXHJcbiAgICAgICAgICAgICAgICA4MDAsXHJcbiAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICkudG8odGhpcy50b3BTdGF0ZUljb24sIHsgeTogdGhpcy50b3BTdGF0ZUljb24ueSB9LCA4MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy50b3BTdGF0ZUljb25Ud2Vlbi5wbGF5KG51bGwsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wU3RhdGVJY29uVHdlZW4ucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTUwMTJcdThCQTFcdTY1RjZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb3VudERvd24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZS5tYXR1cmVUaW1lTGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93bkxiLnRleHQgPSBUb29scy5mb3JtYXRTZWNvbmRzKHRoaXMuZGF0ZS5tYXR1cmVUaW1lTGVmdCk7XHJcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGUubWF0dXJlVGltZUxlZnQtLTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duTGIudGV4dCA9IFRvb2xzLmZvcm1hdFNlY29uZHModGhpcy5kYXRlLm1hdHVyZVRpbWVMZWZ0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUNvdW50RG93bigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlx1NTAxMlx1OEJBMVx1NjVGNlx1N0VEM1x1Njc1RiBcIik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudG9wU3RhdGVJY29uQW5pKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmJ1aWxkSW5nKSB0aGlzLnNldFN0YXRlSWNvblNraW4oMyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVCb3goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1N0I0OVx1N0VBN1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUxldmVsKCkge1xyXG4gICAgICAgIHRoaXMubHZOb2RlLnNraW4gPSBgbWFpbl9zY2VuZS9pbWdfbGV2ZWwke3RoaXMuZGF0ZS5sdn0ucG5nYDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmllbGRJZCwgdGhpcy5idWlsZEluZyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZSkge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5BZGRMYW5kVmlldywgeyBwYXJtOiB0aGlzLmZpZWxkSWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuLi9jb3JlL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU3NTI4XHU2MjM3XHU0RkUxXHU2MDZGXHJcbiAqL1xyXG5jbGFzcyBVc2VySW5mbyB7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1NDBEXHU3OUYwICovXHJcbiAgICBuaWNrbmFtZTogc3RyaW5nID0gXCJuYW1lXCI7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3aWQgKi9cclxuICAgIHVpZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTU0MERcdTU5MzRcdTUwQ0YgKi9cclxuICAgIGF2YXRhcjogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjMgKi9cclxuICAgIGRpYW1vbmQ6IG51bWJlciA9IDk5OTtcclxuICAgIC8qKiBcdTkxRDFcdTVFMDEgKi9cclxuICAgIGdvbGQ6IG51bWJlciA9IDk5OTtcclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLm5pY2tuYW1lID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckluZm8oKTtcclxuIiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCJzcmMvY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwic3JjL2NvbXBvbmVudHMvRmllbGRDb21wb25lbnRcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21tb24vVXNlckluZm9cIjtcclxuXHJcbi8vICBNYWluVmlldyBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBDb3JlLmdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkZExhbmRMYXllciwgdGlwczpcIlx1NjJEM1x1NUM1NVx1NTcxRlx1NTczMFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWRkTGFuZExheWVyOiBMYXlhLkJveCA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRpYW1vbmROb2RlLCB0aXBzOlwiXHU5NEJCXHU3N0YzXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBkaWFtb25kTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Z29sZE5vZGUsIHRpcHM6XCJcdTkxRDFcdTVFMDFcdTgyODJcdTcwQjlcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGdvbGROb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphdmF0YXJOb2RlLCB0aXBzOlwiXHU1OTM0XHU1MENGXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBhdmF0YXJOb2RlOiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsYW5kQm94LCB0aXBzOlwiXHU1NzFGXHU1NzMwXHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBsYW5kQm94OiBMYXlhLkJveCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Y2VudGVyQm94LCB0aXBzOlwiXHU0RTJEXHU5NUY0XHU1MzNBXHU1N0RGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBjZW50ZXJCb3g6IExheWEuQm94ID0gbnVsbDtcclxuXHJcbiAgICAvKiogQHByb3Age25hbWU6bGFuZFVwTGF5ZXIsIHRpcHM6XCJcdTU3MUZcdTU3MzBcdTUzNDdcdTdFQTdcdTdBOTdcdTUzRTNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGxhbmRVcExheWVyOiBMYXlhLkltYWdlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU1NzFGXHU1NzMwXHU3RUM0XHU0RUY2IFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBsYW5kTGlzdDogRmllbGRDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubGFuZEJveC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QucHVzaCh0aGlzLmxhbmRCb3guZ2V0Q2hpbGRBdCh4KS5nZXRDb21wb25lbnQoRmllbGRDb21wb25lbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubGFuZExpc3Quc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5maWVsZElkIC0gYi5maWVsZElkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIENvcmUuZXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLnVwZGF0ZV9maWVsZCwge1xyXG4gICAgICAgICAgICAgICAgbGFuZExpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXHU1NzFGXHU1NzMwaWRcdTVCRjlcdTVFOTRcdTc2ODRcdTRFNUZcdTY2MkZcdTRFMEJcdTY4MDdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXHU1NzFGXHU1NzMwXHU3QjQ5XHU3RUE3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGx2OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1x1NkI2M1x1NTcyOFx1NzUxRlx1OTU3Rlx1NzY4NFx1NEUxQ1x1ODk3Rlx1NzY4NGlkIFx1NzlDRFx1NUI1MGlkLCBcdTU5ODJcdTY3OUNcdTUyNjlcdTRGNTlcdTY1RjZcdTk1RjRcdTRFM0EwXHVGRjBDXHU4ODY4XHU3OTNBIFx1NURGMlx1NzE5Rlx1RkYwQ1x1NTI0RFx1N0FFRlx1ODFFQVx1NURGMVx1NTNCQlx1NjdFNVx1NUJGOVx1NUU5NFx1NTNFRlx1NzUxRlx1NEVBN1x1NzY4NFx1NEUxQ1x1ODk3Rlx1RkYwQ1x1NzEzNlx1NTQwRVx1NjUzOVx1NTNEOFx1NjYzRVx1NzkzQVx1NzJCNlx1NjAwMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXHU1MjY5XHU0RjU5XHU2NUY2XHU5NUY0IFx1NTk4Mlx1Njc5Q1x1NEUzQTAgXHU1QzMxXHU0RTNBXHU2MjEwXHU3MTlGIFx1NTM1NVx1NEY0RFx1NzlEMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXR1cmVUaW1lTGVmdDogMyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTU3MUZcdTU3MzBpZFx1NUJGOVx1NUU5NFx1NzY4NFx1NEU1Rlx1NjYyRlx1NEUwQlx1NjgwN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTU3MUZcdTU3MzBcdTdCNDlcdTdFQTdcclxuICAgICAgICAgICAgICAgICAgICAgICAgbHY6IDksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXHU2QjYzXHU1NzI4XHU3NTFGXHU5NTdGXHU3Njg0XHU0RTFDXHU4OTdGXHU3Njg0aWQgXHU3OUNEXHU1QjUwaWQsIFx1NTk4Mlx1Njc5Q1x1NTI2OVx1NEY1OVx1NjVGNlx1OTVGNFx1NEUzQTBcdUZGMENcdTg4NjhcdTc5M0EgXHU1REYyXHU3MTlGXHVGRjBDXHU1MjREXHU3QUVGXHU4MUVBXHU1REYxXHU1M0JCXHU2N0U1XHU1QkY5XHU1RTk0XHU1M0VGXHU3NTFGXHU0RUE3XHU3Njg0XHU0RTFDXHU4OTdGXHVGRjBDXHU3MTM2XHU1NDBFXHU2NTM5XHU1M0Q4XHU2NjNFXHU3OTNBXHU3MkI2XHU2MDAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZDogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTUyNjlcdTRGNTlcdTY1RjZcdTk1RjQgXHU1OTgyXHU2NzlDXHU0RTNBMCBcdTVDMzFcdTRFM0FcdTYyMTBcdTcxOUYgXHU1MzU1XHU0RjREXHU3OUQyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdHVyZVRpbWVMZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0gdGhpcy5sYW5kTGlzdC5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5sYW5kTGlzdFt4XS5kYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kTGlzdFt4XS5zaG93SWNvbih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSGRFbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5tYXNrTGF5ZXIuZ3JhcGhpY3MuZHJhd0NpcmNsZSgwLCAwLCAxMDAsIFwiI2ZmMDAwMFwiKTtcclxuICAgICAgICAvLyB0aGlzLm1hc2tMYXllci5ncmFwaGljcy5kcmF3UG9seShcclxuICAgICAgICAvLyAgICAgLTM1LFxyXG4gICAgICAgIC8vICAgICAyMjMsXHJcbiAgICAgICAgLy8gICAgIFsxNzIsIC0zMzAsIDc4OSwgNTcsIDE2NiwgMzkzLCAtNDUzLCA4M10sXHJcbiAgICAgICAgLy8gICAgIFwiI2ZmMDAwMFwiXHJcbiAgICAgICAgLy8gKTtcclxuICAgICAgICBDb3JlLm9ic2VydmFibGVQcm9wZXJ0eVxyXG4gICAgICAgICAgICAud2F0Y2goVXNlckluZm8sIHRoaXMpXHJcbiAgICAgICAgICAgIC5rZXkoXCJkaWFtb25kXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYW1vbmROb2RlLnZhbHVlID0gZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmtleShcImdvbGRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ29sZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiYXZhdGFyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF2YXRhck5vZGUuc2tpbiA9IGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhUYWJsZUFuYWx5emUudGFibGUoXCJvcmRlclwiKS5saXN0KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oQXBpSHR0cC5pbml0KVxyXG4gICAgcHJpdmF0ZSBnYW1lSW5pdChkOiBOZXRJbml0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZCk7XHJcbiAgICAgICAgbGV0IGEgPSBkLmRhdGEubGFuZExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaWduSW5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibWFpbFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLk1haWxWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2hvcFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibGFuZFwiOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsYW5kTGV2ZWxVcFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5MYW5kTGV2ZWxVcCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VfdXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuTGFuZExldmVsVXAoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTGFuZExldmVsVXAoc2hvdzogYm9vbGVhbikge1xyXG4gICAgICAgIGxldCBiZyA9IHRoaXMubGFuZFVwTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgIGJnLmFscGhhID0gMDtcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhiZywgeyBhbHBoYTogMC43NSB9LCAxNTApO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmdldENoaWxkQnlOYW1lKFwibGFuZF9vdXRlclwiKS5hZGRDaGlsZCh0aGlzLmxhbmRCb3gpO1xyXG4gICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZFVwTGF5ZXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2hvd0ljb24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5zZXRTdGF0ZUljb25Ta2luKDIpO1xyXG4gICAgICAgICAgICAgICAgZS5zaG93VGltZUJveChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBlLnNob3dTaGFkb3dJY29uKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGUuYnVpbGRJbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgYmcsXHJcbiAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAxNTAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5kVXBMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmRVcExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlckJveC5hZGRDaGlsZCh0aGlzLmxhbmRCb3gpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGFuZExpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc2hvd0ljb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0ZS5tYXR1cmVUaW1lTGVmdCkgZS5zaG93VGltZUJveCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnNob3dTaGFkb3dJY29uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZS5idWlsZEluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGUucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0U3RhdGVJY29uU2tpbihlLmRhdGUubWF0dXJlVGltZUxlZnQgPyAxIDogMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnNldFN0YXRlSWNvblNraW4oMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiLyoqXHJcbiAqIFx1NkQ2RVx1NTJBOFx1NUYzOVx1N0E5N1x1NTJBOFx1NzUzQlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRWaWV3U2hvd0FuaSBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIHByaXZhdGUgZWZmZWN0VHdlZW5PcGVuOiBMYXlhLlR3ZWVuID0gbnVsbDtcclxuICAgIHByaXZhdGUgZWZmZWN0VHdlZW5DbG9zZTogTGF5YS5Ud2VlbiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvbnRlbnQsIHRpcHM6XCJcdTUxODVcdTVCQjlcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgY29udGVudDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb09wZW4oKSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiAgXHU1MTczXHU5NUVEXHU2MjEwXHU1MjlGXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvQ2xvc2UoKSB7fVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuICAgICAgICB0aGlzLmNvbnRlbnQuc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgLy8gZGlhbG9nLmFscGhhID0gMC42O1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5PcGVuID0gTGF5YS5Ud2Vlbi5mcm9tKFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgIHsgeDogTGF5YS5zdGFnZS53aWR0aCAvIDIsIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMiwgc2NhbGVYOiAwLCBzY2FsZVk6IDAgfSxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVmlldygpIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0VHdlZW5DbG9zZSA9IExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICB7IHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLCB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsIHNjYWxlWDogMCwgc2NhbGVZOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkVhc2Uuc3Ryb25nT3V0LFxyXG4gICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAvLyApLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RUd2Vlbk9wZW4gJiYgTGF5YS5Ud2Vlbi5jbGVhcih0aGlzLmVmZmVjdFR3ZWVuT3Blbik7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RUd2Vlbk9wZW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5DbG9zZSAmJiBMYXlhLlR3ZWVuLmNsZWFyKHRoaXMuZWZmZWN0VHdlZW5DbG9zZSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RUd2VlbkNsb3NlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWxwaGFCZywgdGlwczpcIlx1OTAwRlx1NjYwRVx1ODBDQ1x1NjY2Rlx1NUM0MlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWxwaGFCZzogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0bkJveFRvcCwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NTIxN1x1ODg2OFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYnRuQm94VG9wOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpib3R0b21Cb3gsIHRpcHM6XCJcdTVFOTVcdTkwRThcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJvdHRvbUJveDogTGF5YS5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU2NTg3XHU1QjU3XHU4RDQ0XHU2RTkwXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGJ0blRvcFJlc0xpc3Q6IHN0cmluZ1tdW10gPSBbXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfc2VlZHNOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfc2VlZHNTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfcGV0Tm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3BldFNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19mb29kbk5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19mb29kblNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19iYW5rTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX2JhbmtTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICBdO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NTIwN1x1NjM2Mlx1NjgwN1x1N0I3RVx1OTAwOVx1NjJFOVx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSB0b3BCdG5TZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTcwQjlcdTUxRkJcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgaXRlbUxpc3RTZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTgwQ0NcdTY2NkZcdTdFQjlcdTc0MDYgKi9cclxuICAgIHByaXZhdGUgaXRlbVNlbGVjdEJnOiBzdHJpbmdbXSA9IFtcImdhbWUvaW1nX3BldGJhZ05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19wZXRiYWdTZWxlY3RlZC5wbmdcIl07XHJcblxyXG4gICAgb25IZEVuYWJsZSgpIHt9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgICAgICB0aGlzLmFscGhhQmcuYWxwaGEgPSAwLjc1O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1MaXN0KTtcclxuICAgICAgICAvLyB0aGlzLml0ZW1MaXN0Lml0ZW1SZW5kZXIgPSB0aGlzLmxpc3RJdGVtO1xyXG5cclxuICAgICAgICBsZXQgYXIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDMwOyB4KyspIHtcclxuICAgICAgICAgICAgYXIucHVzaCh7IG5hbWU6IHggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuaXRlbUxpc3Quc2Nyb2xsQmFyLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSBhcjtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlSXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUxpc3Quc2VsZWN0SGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5vblNlbGVjdCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCA9IGU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbShjZWxsOiBMYXlhLkltYWdlLCBpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGwpO1xyXG4gICAgICAgIC8vIGNlbGwuc2V0SW1nKGNlbGwuZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoYm94XCIpLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gaW5kZXg7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3LCBmYWxzZSwgdHJ1ZSwgRmxvYXRWaWV3U2hvd0FuaSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImZlZWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImJhbmtcIjpcclxuICAgICAgICAgICAgICAgIGxldCB0b3BCdG5JbmRleCA9IHRoaXMuYnRuQm94VG9wLmdldENoaWxkSW5kZXgoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggIT0gdG9wQnRuSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID0gdG9wQnRuSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb3BCdG5TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NzBCOVx1NTFGQlx1NzBCOVx1NTFGQlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRvcEJ0blN0YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5idG5Cb3hUb3AubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgbGIgPSBidG4uZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nLW1lbnVzZWxlY3RlZC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudW5vcm1hbC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQm90dG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTVFOTVcdTkwRThcdTUxODVcdTVCQjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVCb3R0b20oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvdHRvbUJveC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuQm94KS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkJveCkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgxKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgxKSBhcyBMYXlhLkJveCkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkJveCkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgyKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgyKSBhcyBMYXlhLkJveCkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuXHJcbi8vICBTaWduSW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5WaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbW1vbi9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiB9IGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuLi9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi4vY29yZS9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuLy8gIFRhc2tWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmltYWdlLCB0aXBzOlwiXHU1RTAzXHU1QzE0XHU3QzdCXHU1NzhCXHU3OTNBXHU0RjhCXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGltYWdlOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBnYW1lOiBzdHJpbmcgPSBcIjEyMTIxMlwiO1xyXG5cclxuICAgIEBFdmVudE9uKFwiYWFcIilcclxuICAgIG15RXZlbnQoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWFcIiwgZSwgdGhpcy5pbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblwiXG5pbXBvcnQgVmlld1Nob3dBbmkgZnJvbSBcIi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiXG5pbXBvcnQgQWRkTGFuZFZpZXcgZnJvbSBcIi4vdmlldy9BZGRMYW5kVmlld1wiXG5pbXBvcnQgTG9hZFZpZXcgZnJvbSBcIi4vdmlldy9Mb2FkVmlld1wiXG5pbXBvcnQgTWFpbFZpZXcgZnJvbSBcIi4vdmlldy9NYWlsVmlld1wiXG5pbXBvcnQgTWFpblZpZXcgZnJvbSBcIi4vdmlldy9NYWluVmlld1wiXG5pbXBvcnQgRmllbGRDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9GaWVsZENvbXBvbmVudFwiXG5pbXBvcnQgU2hvcFZpZXcgZnJvbSBcIi4vdmlldy9TaG9wVmlld1wiXG5pbXBvcnQgRmxvYXRWaWV3U2hvd0FuaSBmcm9tIFwiLi9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIlxuaW1wb3J0IFNpZ25JblZpZXcgZnJvbSBcIi4vdmlldy9TaWduSW5WaWV3XCJcbmltcG9ydCBUYXNrVmlldyBmcm9tIFwiLi92aWV3L1Rhc2tWaWV3XCJcclxuLypcclxuKiBcdTZFMzhcdTYyMEZcdTUyMURcdTU5Q0JcdTUzMTZcdTkxNERcdTdGNkU7XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTEwODA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xOTIwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cIm1pZGRsZVwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJjZW50ZXJcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj10cnVlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJjb21wb25lbnRzL0J1dHRvbi50c1wiLEJ1dHRvbik7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvVmlld1Nob3dBbmkudHNcIixWaWV3U2hvd0FuaSk7XG4gICAgICAgIHJlZyhcInZpZXcvQWRkTGFuZFZpZXcudHNcIixBZGRMYW5kVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTG9hZFZpZXcudHNcIixMb2FkVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpbFZpZXcudHNcIixNYWlsVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvTWFpblZpZXcudHNcIixNYWluVmlldyk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvRmllbGRDb21wb25lbnQudHNcIixGaWVsZENvbXBvbmVudCk7XG4gICAgICAgIHJlZyhcInZpZXcvU2hvcFZpZXcudHNcIixTaG9wVmlldyk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaS50c1wiLEZsb2F0Vmlld1Nob3dBbmkpO1xuICAgICAgICByZWcoXCJ2aWV3L1NpZ25JblZpZXcudHNcIixTaWduSW5WaWV3KTtcbiAgICAgICAgcmVnKFwidmlldy9UYXNrVmlldy50c1wiLFRhc2tWaWV3KTtcclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCAiaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcIi4vY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuL2NvbW1vbi9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuL2NvcmUvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5jbGFzcyBNYWluIHtcclxuICAgIC8qKiBcdTgxRUFcdTVCOUFcdTRFNDlcdTZFMzJcdTY3RDNpZFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgc3RhdGljIGN1c3RvbVJlbmRlcklEOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vXHU2ODM5XHU2MzZFSURFXHU4QkJFXHU3RjZFXHU1MjFEXHU1OUNCXHU1MzE2XHU1RjE1XHU2NENFXHJcbiAgICAgICAgaWYgKHdpbmRvd1tcIkxheWEzRFwiXSkgTGF5YTNELmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQpO1xyXG4gICAgICAgIGVsc2UgTGF5YS5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0LCBMYXlhW1wiV2ViR0xcIl0pO1xyXG4gICAgICAgIExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gR2FtZUNvbmZpZy5zY2FsZU1vZGU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gR2FtZUNvbmZpZy5zY3JlZW5Nb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25WID0gR2FtZUNvbmZpZy5hbGlnblY7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnbkggPSBHYW1lQ29uZmlnLmFsaWduSDtcclxuICAgICAgICAvL1x1NTE3Q1x1NUJCOVx1NUZBRVx1NEZFMVx1NEUwRFx1NjUyRlx1NjMwMVx1NTJBMFx1OEY3RHNjZW5lXHU1NDBFXHU3RjAwXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgTGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuICAgICAgICAvL1x1NjI1M1x1NUYwMFx1OEMwM1x1OEJENVx1OTc2Mlx1Njc3Rlx1RkYwOFx1OTAxQVx1OEZDN0lERVx1OEJCRVx1N0Y2RVx1OEMwM1x1OEJENVx1NkEyMVx1NUYwRlx1RkYwQ1x1NjIxNlx1ODAwNXVybFx1NTczMFx1NTc0MFx1NTg5RVx1NTJBMGRlYnVnPXRydWVcdTUzQzJcdTY1NzBcdUZGMENcdTU3NDdcdTUzRUZcdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDlcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgICAgIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuICAgICAgICBMYXlhLmFsZXJ0R2xvYmFsRXJyb3IodHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vXHU2RkMwXHU2RDNCXHU4RDQ0XHU2RTkwXHU3MjQ4XHU2NzJDXHU2M0E3XHU1MjM2XHVGRjBDdmVyc2lvbi5qc29uXHU3NTMxSURFXHU1M0QxXHU1RTAzXHU1MjlGXHU4MEZEXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHVGRjBDXHU1OTgyXHU2NzlDXHU2Q0ExXHU2NzA5XHU0RTVGXHU0RTBEXHU1RjcxXHU1NENEXHU1NDBFXHU3RUVEXHU2RDQxXHU3QTBCXHJcbiAgICAgICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFxyXG4gICAgICAgICAgICBcInZlcnNpb24uanNvblwiLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSxcclxuICAgICAgICAgICAgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vXHU2RkMwXHU2RDNCXHU1OTI3XHU1QzBGXHU1NkZFXHU2NjIwXHU1QzA0XHVGRjBDXHU1MkEwXHU4RjdEXHU1QzBGXHU1NkZFXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1OTgyXHU2NzlDXHU1M0QxXHU3M0IwXHU1QzBGXHU1NkZFXHU1NzI4XHU1OTI3XHU1NkZFXHU1NDA4XHU5NkM2XHU5MUNDXHU5NzYyXHVGRjBDXHU1MjE5XHU0RjE4XHU1MTQ4XHU1MkEwXHU4RjdEXHU1OTI3XHU1NkZFXHU1NDA4XHU5NkM2XHVGRjBDXHU4MDBDXHU0RTBEXHU2NjJGXHU1QzBGXHU1NkZFXHJcbiAgICAgICAgTGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcclxuICAgICAgICAgICAgXCJmaWxlY29uZmlnLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgb25Db25maWdMb2FkZWQoKSB7XHJcbiAgICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcclxuICAgICAgICBDb25maWdbXCJjdXN0b21SZW5kZXJJRFwiXSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBMYXlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQoXCJyZXMvYXVkaW8vZHJhdy5tcDNcIik7XHJcbiAgICAgICAgLy9cdTU5ODJcdTY3OUNcdTkwMUFcdThGQzdcdThCQkVcdTU5MDdcdTk3NTlcdTk3RjNcdTk1MkVcdThCQTlcdTk3RjNcdTk4OTFcdTgxRUFcdTUyQThcdThEREZcdTk2OEZcdThCQkVcdTU5MDdcdTk3NTlcdTk3RjNcdTMwMDJcdTk3MDBcdTg5ODFcdTVDMDZ1c2VBdWRpb011c2ljXHU4QkJFXHU3RjZFXHU0RTNBZmFsc2VcdTMwMDJcclxuICAgICAgICAvLyBTb3VuZE1hbmFnZXIudXNlQXVkaW9NdXNpYz1mYWxzZVx1RkYxQlxyXG4gICAgICAgIC8vIExheWEuU291bmRNYW5hZ2VyLnBsYXlNdXNpYyhSZXMuYXVkaW9zLndpbik7XHJcblxyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihSZXMudmlld3MuTG9hZERpYWxvZywge1xyXG4gICAgICAgICAgICAgICAgc2hvd0xvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LnNldExvYWRpbmdQYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9cdTU0MEVcdTY3MUZcdTRGMThcdTUzMTZcclxuICAgICAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSg5OTk5OTk5OTk5OTk5OTkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIExheWEubG9hZGVyLmxvYWQoXHJcbiAgICAgICAgICAgIFJlcy5zY2VuZXMsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBFdmVudEdsb2JhbC5ldmVudChFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbi8vXHU2RkMwXHU2RDNCXHU1NDJGXHU1MkE4XHU3QzdCXHJcbm5ldyBNYWluKCk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTyxNQUFXO0FBQVgsWUFBVyxZQUFYO0FBRUgsa0NBQWdCO0FBR2hCLGlDQUFlO0FBQUEsS0FMRDs7O0FDRVYsTUFBSztBQUFMLFlBQUssUUFBTDtBQUdBLDRCQUFjO0FBRWQsaUNBQW1CO0FBRW5CLDJCQUFhO0FBRWIseUJBQVc7QUFFWCx5QkFBVztBQUVYLHlCQUFXO0FBRVgsMkJBQWE7QUFFYix5QkFBVztBQUVYLHFCQUFPO0FBQUEsS0FuQkY7QUFzQkwsTUFBSztBQUFMLFlBQUssU0FBTDtBQUdBLHFCQUFNO0FBRU4sdUJBQVE7QUFFUixzQkFBTztBQUVQLG9CQUFLO0FBRUwsc0JBQU87QUFFUCxzQkFBTztBQUFBLEtBYkY7QUFtQkwsTUFBTSxTQUFTO0FBQUEsSUFDZDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElB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
