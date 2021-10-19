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
  })(EventMaps || (EventMaps = {}));

  // src/common/Res.ts
  var views;
  (function(views3) {
    views3["LoadDialog"] = "scenes/views/LoadDialog.scene";
    views3["MainView"] = "scenes/views/MainView.scene";
    views3["ShopView"] = "scenes/views/ShopView.scene";
    views3["TaskView"] = "scenes/views/TaskView.scene";
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
    "scenes/views/TaskView.scene",
    "scenes/views/ShopView.scene",
    "scenes/views/MainView.scene",
    "scenes/views/LoadDialog.scene",
    "scenes/prefab/PlotPrefab.prefab",
    "scenes/components/Button.prefab",
    "res/Xasdfasd.png",
    "res/rule_text.png",
    "res/img_homepageBg.png",
    "res/bg1.png",
    "res/shader/vs.vs",
    "res/shader/ps.fs",
    "res/audio/win.mp3",
    "res/audio/ready.mp3",
    "res/audio/move.mp3",
    "res/audio/go.mp3",
    "res/audio/fail.mp3",
    "res/audio/draw.mp3",
    "res/atlas/main_sence.png",
    "res/atlas/main_sence.atlas",
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
  var EventGlobal_default = EventGlobal;

  // src/components/ViewShowAni.ts
  var ViewShowAni = class extends Laya.Script {
    constructor() {
      super();
      this.effectTweenOpen = null;
      this.effectTweenClose = null;
    }
    doOpen() {
    }
    doClose() {
    }
    onEnable() {
      let dialog = this.owner;
      dialog.scale(1, 1);
      dialog.alpha = 0.6;
      this.effectTweenOpen = Laya.Tween.from(dialog, { x: Laya.stage.width / 2, y: Laya.stage.height / 2, scaleX: 0, scaleY: 0 }, 300, Laya.Ease.backOut, Laya.Handler.create(this, this.doOpen, [dialog]), 0, false, false);
    }
    closeView() {
      let dialog = this.owner;
      return new Promise((resolve) => {
        this.effectTweenClose = Laya.Tween.to(dialog, { x: Laya.stage.width / 2, y: Laya.stage.height / 2, scaleX: 0, scaleY: 0 }, 300, Laya.Ease.strongOut, new Laya.Handler(this, () => {
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

  // src/view/LoadView.ts
  var LoadView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.loadLabel = null;
    }
    onAwake() {
    }
    onEnable() {
      EventGlobal_default.on(EventMaps.load_progress, this, this.loadProgress);
      this.loadLabel.text = "Load....0%";
    }
    loadProgress(v) {
      this.loadLabel.text = `Load....${(v * 100).toFixed(2)}%`;
    }
    onDisable() {
      EventGlobal_default.off(EventMaps.load_progress, this, this.loadProgress);
    }
  };

  // src/common/UserInfo.ts
  var UserInfo = class {
    constructor() {
      this.nickname = "name";
      this.uid = 0;
    }
    clear() {
      this.nickname = "";
    }
  };
  var UserInfo_default = new UserInfo();

  // src/view/MainView.ts
  var MainView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.image = null;
      this.shaderImage = null;
      this.addLandBg = null;
      this.addLandLayer = null;
    }
    onHdEnable() {
      this.addLandBg.alpha = 0.75;
      console.log(111);
      console.log(this.shaderImage);
      let a = 0;
      setInterval(() => {
        UserInfo_default.nickname = "1231231" + ++a;
        EventGlobal_default.event("aa", "asdfa");
      }, 1e3);
      ObservableProperty_default.watch(UserInfo_default, this).key("nickname", (e) => {
      });
    }
    onClick(e) {
      console.log(e.target.name);
      switch (e.target.name) {
        case "openTask":
          console.log("open task");
          ViewManager.inst.open(Res_default.views.TaskView);
          break;
        case "shop":
          ViewManager.inst.open(Res_default.views.ShopView);
          break;
        case "closeAddLandLayer":
          this.addLandLayer.visible = false;
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
      this.itemSelectBg = ["game/img_petbag.png", "game/img_petbagSelected.png"];
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
          ViewManager.inst.close(Res_default.views.ShopView);
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
      }
      switch (this.topBtnSelectIndex) {
        case 0:
          this.bottomBox.getChildAt(0).visible = true;
          break;
        case 1:
          this.bottomBox.getChildAt(1).visible = true;
          break;
        case 2:
          this.bottomBox.getChildAt(0).visible = true;
          break;
        case 3:
          this.bottomBox.getChildAt(2).visible = true;
          break;
      }
    }
  };

  // src/view/TaskControl.ts
  var TaskControl = class extends GameScript {
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
  ], TaskControl.prototype, "myEvent", 1);

  // src/GameConfig.ts
  var GameConfig = class {
    constructor() {
    }
    static init() {
      var reg = Laya.ClassUtils.regClass;
      reg("view/LoadView.ts", LoadView);
      reg("view/MainView.ts", MainView);
      reg("components/Button.ts", Button);
      reg("view/ShopView.ts", ShopView);
      reg("view/TaskControl.ts", TaskControl);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTG9hZFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Vc2VySW5mby50cyIsICIuLi8uLi9zcmMvdmlldy9NYWluVmlldy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9CdXR0b24udHMiLCAiLi4vLi4vc3JjL3ZpZXcvU2hvcFZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvVGFza0NvbnRyb2wudHMiLCAiLi4vLi4vc3JjL0dhbWVDb25maWcudHMiLCAiLi4vLi4vc3JjL01haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxyXG4gKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjZcdTU0MERcdTc5RjBcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEV2ZW50TWFwcyB7XHJcbiAgICAvKiogbG9hZCBcdTc1NENcdTk3NjJcdThGREJcdTg4NENcdTY2RjRcdTY1QjAgKi9cclxuICAgIGxvYWRfcHJvZ3Jlc3MgPSBcImxvYWRfcHJvZ3Jlc3NcIixcclxufVxyXG4iLCAiLy9cdTRFRTNcdTc4MDFcdTc1MUZcdTYyMTBcdUZGMENcdTRFMERcdTg5ODFcdTYyNEJcdTUyQThcdTRGRUVcdTY1MzlcblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBlbnVtIHZpZXdzIFxuICAgIHtcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9Mb2FkRGlhbG9nLnNjZW5lICovXG4gICAgICAgIExvYWREaWFsb2cgPSBcInNjZW5lcy92aWV3cy9Mb2FkRGlhbG9nLnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lICovXG4gICAgICAgIE1haW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2hvcFZpZXcgPSBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZSAqL1xuICAgICAgICBUYXNrVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lXCIsIFxuICAgIH1cblxuIGV4cG9ydCBlbnVtIGF1ZGlvcyBcbiAgICB7XG4gICAgICAgIC8qKiBhdWRpby93aW4ubXAzICovXG4gICAgICAgIHdpbiA9IFwicmVzL2F1ZGlvL3dpbi5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9yZWFkeS5tcDMgKi9cbiAgICAgICAgcmVhZHkgPSBcInJlcy9hdWRpby9yZWFkeS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9tb3ZlLm1wMyAqL1xuICAgICAgICBtb3ZlID0gXCJyZXMvYXVkaW8vbW92ZS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9nby5tcDMgKi9cbiAgICAgICAgZ28gPSBcInJlcy9hdWRpby9nby5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9mYWlsLm1wMyAqL1xuICAgICAgICBmYWlsID0gXCJyZXMvYXVkaW8vZmFpbC5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9kcmF3Lm1wMyAqL1xuICAgICAgICBkcmF3ID0gXCJyZXMvYXVkaW8vZHJhdy5tcDNcIiwgXG4gICAgfVxuXG4vKipcbiAqIFx1NzU0Q1x1OTc2Mlx1NTIxN1x1ODg2OFxuICovXG4gZXhwb3J0IGNvbnN0IHNjZW5lcyA9IFtcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0xvYWREaWFsb2cuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9QbG90UHJlZmFiLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvY29tcG9uZW50cy9CdXR0b24ucHJlZmFiXCIsXG4gICAgICAgICAgICBcInJlcy9YYXNkZmFzZC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL3J1bGVfdGV4dC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19ob21lcGFnZUJnLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYmcxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3ZzLnZzXCIsXG4gICAgICAgICAgICBcInJlcy9zaGFkZXIvcHMuZnNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3dpbi5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL3JlYWR5Lm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vbW92ZS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2dvLm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXVkaW8vZmFpbC5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2RyYXcubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9tYWluX3NlbmNlLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zZW5jZS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZTEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9nYW1lLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5hdGxhc1wiXTtcbiAgICBcblxuLyoqXG4gKiBcdTYyNDBcdTY3MDlcdThENDRcdTZFOTBcbiAqL1xuY29uc3QgUmVzID0ge1xuICAgIHZpZXdzOiB2aWV3cyxcbiAgICBzY2VuZXM6IHNjZW5lcyxcbiAgICBhdWRpb3M6IGF1ZGlvcyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcztcbiIsICIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHJcbiAqL1xyXG5jb25zdCBFdmVudEdsb2JhbCA9IG5ldyBMYXlhLkV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuLyoqXHJcbiAqIFx1NTBBOFx1NUI1OFx1NzY4NFx1OTcwMFx1ODk4MVx1N0VEMVx1NUI5QVx1OEJBMlx1OTYwNVx1NEU4Qlx1NEVGNlx1NzY4NFx1N0M3Qlx1NzY4NFx1NTM5Rlx1NTc4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEV2ZW50Q2xhc3M6IE1hcDxhbnksIHsga2V5OiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9PiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QSA9PiBcdTdFRDFcdTVCOUFcdTUyMzBcdTg4QzVcdTk5NzBcdTU2NjhcdTRFMEEgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50T24obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcclxuICAgICAgICBFdmVudENsYXNzLnNldCh0YXJnZXQsIHsga2V5OiBuYW1lLCBmbjogZGVzY3JpcHRvci52YWx1ZSB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50R2xvYmFsO1xyXG4iLCAiaW1wb3J0IFRhc2tDb250cm9sIGZyb20gXCIuLi92aWV3L1Rhc2tDb250cm9sXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3U2hvd0FuaSBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIHByaXZhdGUgZWZmZWN0VHdlZW5PcGVuOiBMYXlhLlR3ZWVuID0gbnVsbDtcclxuICAgIHByaXZhdGUgZWZmZWN0VHdlZW5DbG9zZTogTGF5YS5Ud2VlbiA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb09wZW4oKSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiAgXHU1MTczXHU5NUVEXHU2MjEwXHU1MjlGXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvQ2xvc2UoKSB7fVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuICAgICAgICBkaWFsb2cuc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgZGlhbG9nLmFscGhhID0gMC42O1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5PcGVuID0gTGF5YS5Ud2Vlbi5mcm9tKFxyXG4gICAgICAgICAgICBkaWFsb2csXHJcbiAgICAgICAgICAgIHsgeDogTGF5YS5zdGFnZS53aWR0aCAvIDIsIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMiwgc2NhbGVYOiAwLCBzY2FsZVk6IDAgfSxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVmlldygpIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0VHdlZW5DbG9zZSA9IExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICBkaWFsb2csXHJcbiAgICAgICAgICAgICAgICB7IHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLCB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsIHNjYWxlWDogMCwgc2NhbGVZOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkVhc2Uuc3Ryb25nT3V0LFxyXG4gICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAvLyApLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RUd2Vlbk9wZW4gJiYgTGF5YS5Ud2Vlbi5jbGVhcih0aGlzLmVmZmVjdFR3ZWVuT3Blbik7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RUd2Vlbk9wZW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5DbG9zZSAmJiBMYXlhLlR3ZWVuLmNsZWFyKHRoaXMuZWZmZWN0VHdlZW5DbG9zZSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RUd2VlbkNsb3NlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCAiLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuY29uc3QgaW5zdGFuY2VMaXN0OiBNYXA8bnVtYmVyLCB7IG5ldyAoKTogdm9pZCB9PiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBcdTVCOUVcdTRGOEJcdTc2ODRpZFxyXG4gKi9cclxubGV0IGluc3RhbmNlSWQ6IG51bWJlciA9IDEwMDtcclxuXHJcbi8qKlxyXG4gKiBcdTUzNTVcdTRGOEJcdTg4QzVcdTk5NzBcdTU2NjhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnN0YW5jZSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghaW5zdGFuY2VMaXN0Lmhhcyh0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSkpIHtcclxuICAgICAgICBpbnN0YW5jZUlkKys7XHJcbiAgICAgICAgdGFyZ2V0W1wiI2luc3RhbmNlSWRcIl0gPSBpbnN0YW5jZUlkO1xyXG4gICAgICAgIGluc3RhbmNlTGlzdC5zZXQoaW5zdGFuY2VJZCwgbmV3IHRhcmdldCgpKTtcclxuICAgIH1cclxuICAgIHRhcmdldFtrZXldID0gaW5zdGFuY2VMaXN0LmdldChpbnN0YW5jZUlkKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlcywgeyB2aWV3cyB9IGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU5NzAwXHU4OTgxXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAqL1xyXG5pbnRlcmZhY2UgVmlld09wZW5QYXJtIHtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyICovXHJcbiAgICBzaG93TG9hZD86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCAqL1xyXG4gICAgc2hvd0xvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTk2OTBcdTg1Q0Zsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0IFx1OUVEOFx1OEJBNDAgKi9cclxuICAgIGhpZGVMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1MTczXHU5NUVEXHU1MTc2XHU0RUQ2XHU1NzNBXHU2NjZGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBdHJ1ZVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVx1RkYwQ1x1MzAxMFx1NkNFOFx1NjEwRlx1MzAxMVx1ODhBQlx1NTE3M1x1OTVFRFx1NzY4NFx1NTczQVx1NjY2Rlx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1OEJCRVx1N0Y2RWF1dG9EZXN0cm95QXRSZW1vdmVkPXRydWVcdUZGMENcdTUyMTlcdThENDRcdTZFOTBcdTUzRUZcdTgwRkRcdTRFMERcdTgwRkRcdTg4QUJcdTU2REVcdTY1MzZcdUZGMENcdTk3MDBcdTg5ODFcdTgxRUFcdTVERjFcdTYyNEJcdTUyQThcdTU2REVcdTY1MzZcclxuICAgICAqIHRvZG8gXHU3M0IwXHU1NzI4XHU4RkQ5XHU0RTJBXHU4QzAzXHU3NTI4XHU3Njg0XHU2NjJGXHU1RjE1XHU2NENFXHU4MUVBXHU1RTI2XHU3Njg0XHU2NUI5XHU2Q0Q1XHVGRjBDXHU2Q0ExXHU2NzA5XHU4RDcwXHU4RkQ5XHU5MUNDXHU3Njg0XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0VGXHU4MEZEXHU0RjFBXHU2NzA5XHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgKi9cclxuICAgIGNsb3NlT3RoZXI/OiBib29sZWFuO1xyXG4gICAgLyoqIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBwYXJtPzogYW55O1xyXG4gICAgLyoqICBcdTYyNTNcdTVGMDBcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdUZGMENcdTRGMUFcdTRGMjBcdTkwMTJcdTdFRDlvbk9wZW5lZFx1NjVCOVx1NkNENVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgY29tcGxldGU/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTUyQTBcdThGN0RcdThGREJcdTVFQTZcdTU2REVcdThDMDNcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHByb2dyZXNzPzogSGFuZGxlcjtcclxufVxyXG5cclxuY29uc3Qgdmlld01hcHM6IHsgdXJsOiBzdHJpbmc7IHZpZXc6IExheWEuVmlldyB9W10gPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBcdTc1NENcdTk3NjJcdTdCQTFcdTc0MDZcdTU2NjhcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWaWV3TWFuYWdlciB7XHJcbiAgICBASW5zdGFuY2VcclxuICAgIHN0YXRpYyBpbnN0OiBWaWV3TWFuYWdlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2MlxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcdTUzQzJcdTY1NzBcclxuICAgICAqL1xyXG4gICAgb3BlbihcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGRhdGE6IFZpZXdPcGVuUGFybSA9IHtcclxuICAgICAgICAgICAgY2xvc2VPdGhlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWREZWxheTogMTAwLFxyXG4gICAgICAgICAgICBoaWRlTG9hZERlbGF5OiAwLFxyXG4gICAgICAgIH1cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm1pc3MgcGF0aCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnNob3dMb2FkKSB7XHJcbiAgICAgICAgICAgIExheWEuVmlldy5zaG93TG9hZGluZ1BhZ2UobnVsbCwgZGF0YS5zaG93TG9hZERlbGF5KTtcclxuICAgICAgICAgICAgaWYgKHVybCAhPT0gUmVzLnZpZXdzLkxvYWREaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKGRhdGEuaGlkZUxvYWREZWxheSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTGF5YS5WaWV3Lm9wZW4oXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGF0YS5jbG9zZU90aGVyLFxyXG4gICAgICAgICAgICBkYXRhLnBhcm0sXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgIT0gUmVzLnZpZXdzLkxvYWREaWFsb2cpIHZpZXdNYXBzLnB1c2goeyB1cmw6IHVybCwgdmlldzogZSB9KTtcclxuICAgICAgICAgICAgICAgIGRhdGEuY29tcGxldGUgJiYgZGF0YS5jb21wbGV0ZShlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgIGAlYyA9PT4gb3BlbiAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojN2VkNmRmO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojMjJhNmIzO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YS5wcm9ncmVzc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxNzNcdTk1RURcdTg5QzZcdTU2RkVcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGFsbCBcdTU0MENcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcdTg4QUIgXHU1OTFBXHU2QjIxXHU2MjUzXHU1RjAwXHVGRjBDXHU1MTY4XHU1MjIwXHU5NjY0XHU3NTI4XHU4RkQ5XHU0RTJBXHJcbiAgICAgKiBAcGFyYW0gZGVzdHJveSBcdTk1MDBcdTZCQzEgICBUT0RPXHVGRjA4XHU5RUQ4XHU4QkE0XHU0RjFBXHU5NTAwXHU2QkMxXHU2MjQwXHU2NzA5XHU1QjUwXHU4MjgyXHU3MEI5XHVGRjBDXHU2NzJBXHU2RDRCXHU4QkQ1XHU2NjJGXHU1NDI2XHU2NzA5XHU5NUVFXHU5ODk4XHVGRjA5XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNsb3NlKHVybDogdmlld3MsIGFsbDogYm9vbGVhbiA9IGZhbHNlLCBkZXN0cm95OiBib29sZWFuID0gZmFsc2UsIGFuaUNvbSA9IFZpZXdTaG93QW5pKSB7XHJcbiAgICAgICAgLy9UT0RPIFx1OEZEOVx1OTFDQ1x1NzNCMFx1NTcyOFx1NTE2OFx1OTBFOFx1NzUyOGRlc3Ryb3kgXHU1RjE1XHU2NENFcmVtb3ZlXHU1OTdEXHU1MENGXHU2NzA5XHU3MEI5XHU5NUVFXHU5ODk4XHVGRjBDXHU1MThEXHU5MDFBXHU4RkM3dmlldy5vcGVuXHU0RjFBXHU5MUNEXHU2NUIwXHU2Nzg0XHU1RUZBXHU3RUM0XHU0RUY2XHJcbiAgICAgICAgZGVzdHJveSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB2QW5pOiBWaWV3U2hvd0FuaTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0gdmlld01hcHNbeF0udXJsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHZpZXdNYXBzW3hdO1xyXG4gICAgICAgICAgICAgICAgdmlld01hcHMuc3BsaWNlKHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdkFuaSA9IHYudmlldy5nZXRDb21wb25lbnQoYW5pQ29tKTtcclxuICAgICAgICAgICAgICAgIGlmICh2QW5pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdkFuaS5jbG9zZVZpZXcoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghYWxsKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cdTRGRERcdThCQzFcdTU5ODJcdTY3OUNcdTU3M0FcdTY2NkZcdTVCOENcdTUxNjhcdTZDQTFcdTY3MDlcdTc1NENcdTk3NjJcdTg4QUJcdTYyNTNcdTVGMDBcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTVGQzVcdTYyNTNcdTVGMDBcdTRFM0JcdTU3M0FcdTY2NkZcclxuICAgICAgICBsZXQgY2xvc2VMZW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAoIXZpZXdNYXBzW3hdLnZpZXcucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUxlbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VMZW4gPT09IHZpZXdNYXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLk1haW5WaWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdNYXBzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVmlld0xvZyh1cmw6IHN0cmluZywgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlYyA8PT0gJHtkZXN0cm95ID8gXCJkZXN0cm95XCIgOiBcImRpc2FibGVcIn0gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNmZjc5Nzk7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1OTY2NFx1N0YxM1x1NUI1OFx1NzU0Q1x1OTc2MlxyXG4gICAgICovXHJcbiAgICBjbGVhclZpZXdNYXBzKCkge1xyXG4gICAgICAgIHZpZXdNYXBzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuIiwgImNvbnN0IGNhbGxlcnM6IE1hcDxhbnksIEZ1bmN0aW9uW10+ID0gbmV3IE1hcCgpO1xyXG5cclxuY2xhc3MgT2JzZXJ2YWJsZUNvbnRyb2w8Y2FsbCBleHRlbmRzIExheWEuU2NyaXB0PiB7XHJcbiAgICBwcml2YXRlIGtleUV2ZW50czogTWFwPGFueSwgTWFwPHN0cmluZywgRnVuY3Rpb25bXT4+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NkQxXHU1NDJDXHU1QzVFXHU2MDI3XHU1MDNDXHU1M0Q4XHU1MzE2XHJcbiAgICAgKiBAcGFyYW0gT2JqIFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICB3YXRjaDxUIGV4dGVuZHMge30+KE9iajogVCwgY2FsbGVyOiBjYWxsKSB7XHJcbiAgICAgICAgaWYgKCFjYWxsZXJzLmhhcyhjYWxsZXIpKSB7XHJcbiAgICAgICAgICAgIGNhbGxlcnMuc2V0KGNhbGxlciwgW10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGtleUV2ZW50ID0gdGhpcy5rZXlFdmVudHM7XHJcbiAgICAgICAgaWYgKCFrZXlFdmVudC5oYXMoT2JqKSkge1xyXG4gICAgICAgICAgICBrZXlFdmVudC5zZXQoT2JqLCBuZXcgTWFwKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2XHU3Njg0XHU1QzVFXHU2MDI3XHU0RThCXHU0RUY2XHJcbiAgICAgICAgICogQHBhcmFtIGtleSBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTc2ODRcdTVDNUVcdTYwMjdcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbCBcdTU2REVcdThDMDNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBrZXlCaW5kID0gPEtleSBleHRlbmRzIGtleW9mIFQ+KGtleTogS2V5ICYgc3RyaW5nLCBjYWxsOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgX29iaiA9IGtleUV2ZW50LmdldChPYmopO1xyXG4gICAgICAgICAgICBpZiAoIV9vYmouaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIF9vYmouc2V0KGtleSwgW10pO1xyXG4gICAgICAgICAgICAgICAgaWYgKE9ialtcIiNcIiArIGtleV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqW1wiI1wiICsga2V5XSA9IE9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmosIGtleSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tcIiNcIiArIGtleV0gPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX29iai5nZXQoa2V5KS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW1wiI1wiICsga2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYWxsLmJpbmQoY2FsbCk7XHJcbiAgICAgICAgICAgIF9vYmouZ2V0KGtleSkucHVzaChjYWxsKTtcclxuICAgICAgICAgICAgY2FsbGVycy5nZXQoY2FsbGVyKS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsKE9ialtrZXldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsga2V5OiBrZXlCaW5kIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsga2V5OiBrZXlCaW5kIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkwMUFcdThGQzdcdTRGMjBcdTUxNjVcdTc2ODRjYWxsZXJcdTUyMjBcdTk2NjRcdTVGNTNcdTUyNERcdTdFRDFcdTVCOUFcdTc2ODRcdTYyNDBcdTY3MDlcdTc2ODRcdTRFOEJcdTRFRjYgXHU2MjE2XHU2MzA3XHU1QjlBXHU4OUUzXHU1MUIzXHU2QTIxXHU0RTJBXHU1QkY5XHU4QzYxXHU4RERGXHU1RjUzXHU1MjREY2FsbGVyXHU3RUQxXHU1QjlBXHU3Njg0XHU3NkQxXHU1NDJDXHJcbiAgICAgKiBAcGFyYW0gY2FsbGVyIFx1NzZEMVx1NTQyQ1x1NjVGNlx1N0VEMVx1NUI5QVx1NzY4NFx1NTczQVx1NjY2Rlx1NUJGOVx1OEM2MVxyXG4gICAgICogQHBhcmFtIG9iaiBcdTc2RDFcdTU0MkNcdTc2ODRcdTVCRjlcdThDNjFcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQnlDYWxsZXIoY2FsbGVyOiBjYWxsLCBvYmo6IGFueSA9IG51bGwpIHtcclxuICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpPy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYmopIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RXZlbnRzPy5nZXQob2JqKS5mb3JFYWNoKChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZiA+IC0xKSBldi5zcGxpY2UoaW5kZXhPZiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RXZlbnRzPy5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgay5mb3JFYWNoKChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhPZiA9IGV2LmluZGV4T2YoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTVCRjlcdThDNjFcdTVDNUVcdTYwMjdcdTdFRDFcdTVCOUFcdTUzRUZcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBPYnNlcnZhYmxlQ29udHJvbCgpO1xyXG4iLCAiaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50Q2xhc3MgfSBmcm9tIFwiLi9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1N0VDNFx1NEVGNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmlwdCBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbGV0IGJpbmRFdmVudCA9IEV2ZW50Q2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKTtcclxuICAgICAgICBiaW5kRXZlbnQgJiYgRXZlbnRHbG9iYWwub24oYmluZEV2ZW50LmtleSwgdGhpcywgYmluZEV2ZW50LmZuKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZEF3YWtlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMub25IZEF3YWtlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NkZDMFx1NkQzQlx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkI2NFx1NjVGNlx1NjI0MFx1NjcwOVx1ODI4Mlx1NzBCOVx1NTQ4Q1x1N0VDNFx1NEVGNlx1NTc0N1x1NURGMlx1NTIxQlx1NUVGQVx1NUI4Q1x1NkJENVx1RkYwQ1x1NkIyMVx1NjVCOVx1NkNENVx1NTNFQVx1NjI2N1x1ODg0Q1x1NEUwMFx1NkIyMVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRBd2FrZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRFbmFibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMub25IZEVuYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU1NDJGXHU3NTI4XHU1NDBFXHU2MjY3XHU4ODRDXHVGRjBDXHU2QkQ0XHU1OTgyXHU4MjgyXHU3MEI5XHU4OEFCXHU2REZCXHU1MkEwXHU1MjMwXHU4MjFFXHU1M0YwXHU1NDBFXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZEVuYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRTdGFydFxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25TdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9uSGRTdGFydCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdCMkNcdTRFMDBcdTZCMjFcdTYyNjdcdTg4NEN1cGRhdGVcdTRFNEJcdTUyNERcdTYyNjdcdTg4NENcdUZGMENcdTUzRUFcdTRGMUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkU3RhcnQoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkVXBkYXRlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRVcGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkJDRlx1NUUyN1x1NjZGNFx1NjVCMFx1NjVGNlx1NjI2N1x1ODg0Q1x1RkYwQ1x1NUMzRFx1OTFDRlx1NEUwRFx1ODk4MVx1NTcyOFx1OEZEOVx1OTFDQ1x1NTE5OVx1NTkyN1x1NUZBQVx1NzNBRlx1OTAzQlx1OEY5MVx1NjIxNlx1ODAwNVx1NEY3Rlx1NzUyOGdldENvbXBvbmVudFx1NjVCOVx1NkNENVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRVcGRhdGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRGlzYWJsZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIHRoaXMub25IZERpc2FibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1Nzk4MVx1NzUyOFx1NjVGNlx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1NEVDRVx1ODI4Mlx1NzBCOVx1NEVDRVx1ODIxRVx1NTNGMFx1NzlGQlx1OTY2NFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGREaXNhYmxlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERlc3Ryb3lcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vZmZBbGxDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vbkhkRGVzdHJveSgpO1xyXG4gICAgICAgIExheWEudGltZXIub25jZSgxLCBudWxsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHU2RTA1XHU5NjY0XHU4RERGXHU1RjUzXHU1MjREXHU3QzdCXHU3RUQxXHU1QjlBXHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU4OUMyXHU1QkRGXHU2NUI5XHU2Q0Q1XHJcbiAgICAgICAgICAgIE9ic2VydmFibGVQcm9wZXJ0eS5yZW1vdmVCeUNhbGxlcih0aGlzKTtcclxuICAgICAgICAgICAgLy9cdTk1MDBcdTZCQzFcdTY1RjZcdTZFMDVcdTk2NjRcdTYyNDBcdTY3MDlcdTc2ODRcdTVDNUVcdTYwMjdcdTVGMTVcdTc1MjhcclxuICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgeCA8IGw7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpc1trZXlzW3hdXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI0Qlx1NTJBOFx1OEMwM1x1NzUyOFx1ODI4Mlx1NzBCOVx1OTUwMFx1NkJDMVx1NjVGNlx1NjI2N1x1ODg0Q1xyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGREZXN0cm95KCkge31cclxufVxyXG4iLCAiaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgRXZlbnRNYXBzIH0gZnJvbSBcIi4uL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRMYWJlbCwgdGlwczpcImxvYWQgXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGxvYWRMYWJlbDogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb25Bd2FrZSgpIHtcclxuICAgICAgICAvLyB0aGlzLm93bmVyLmlcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxvYWRMYWJlbCk7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub24oRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIHRoaXMsIHRoaXMubG9hZFByb2dyZXNzKTtcclxuICAgICAgICB0aGlzLmxvYWRMYWJlbC50ZXh0ID0gXCJMb2FkLi4uLjAlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUHJvZ3Jlc3Modikge1xyXG4gICAgICAgIHRoaXMubG9hZExhYmVsLnRleHQgPSBgTG9hZC4uLi4keyh2ICogMTAwKS50b0ZpeGVkKDIpfSVgO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vZmYoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIHRoaXMsIHRoaXMubG9hZFByb2dyZXNzKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi4vY29yZS9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2RlxyXG4gKi9cclxuY2xhc3MgVXNlckluZm8ge1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NTQwRFx1NzlGMCAqL1xyXG4gICAgbmlja25hbWU6IHN0cmluZyA9IFwibmFtZVwiO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN2lkICovXHJcbiAgICB1aWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJJbmZvKCk7XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tbW9uL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uIH0gZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4uL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuLi9jb3JlL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgTWFpblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5WaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aW1hZ2UsIHRpcHM6XCJcdTVFMDNcdTVDMTRcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgaW1hZ2U6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNoYWRlckltYWdlLCB0aXBzOlwic2hhZGVyXHU3NTI4XHU3Njg0XHU1NkZFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzaGFkZXJJbWFnZTogTGF5YS5TcHJpdGUgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFkZExhbmRCZywgdGlwczpcIlx1NjJEM1x1NUM1NVx1NTcxRlx1NTczMFx1NzY4NFx1ODBDQ1x1NjY2RlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWRkTGFuZEJnOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRMYW5kTGF5ZXIsIHRpcHM6XCJcdTYyRDNcdTVDNTVcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZExhbmRMYXllcjogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8vIFx1NjZGNFx1NTkxQVx1NTNDMlx1NjU3MFx1OEJGNFx1NjYwRVx1OEJGN1x1OEJCRlx1OTVFRTogaHR0cHM6Ly9sZGMyLmxheWFib3guY29tL2RvYy8/bmF2PXpoLWFzLTItNC0wXHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkZExhbmRCZy5hbHBoYSA9IDAuNzU7XHJcbiAgICAgICAgY29uc29sZS5sb2coMTExKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaGFkZXJJbWFnZSk7XHJcblxyXG4gICAgICAgIGxldCBhID0gMDtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFVzZXJJbmZvLm5pY2tuYW1lID0gXCIxMjMxMjMxXCIgKyArK2E7XHJcbiAgICAgICAgICAgIEV2ZW50R2xvYmFsLmV2ZW50KFwiYWFcIiwgXCJhc2RmYVwiKTtcclxuICAgICAgICAgICAgLy8gaWYgKGEgPT0gMSkge1xyXG4gICAgICAgICAgICAvLyAgICAgRXZlbnRHbG9iYWwub2ZmKFwiYWFcIiwgdGhpcywgdGhpcy5teUV2ZW50KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICBPYnNlcnZhYmxlUHJvcGVydHkud2F0Y2goVXNlckluZm8sIHRoaXMpLmtleShcIm5pY2tuYW1lXCIsIChlKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcGVuVGFza1wiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVuIHRhc2tcIik7XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2hvcFwiOlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvcGVuIHRhc2tcIik7XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VBZGRMYW5kTGF5ZXJcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTGFuZExheWVyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRlZmF1bHRSZXMsIHRpcHM6XCJcdThENDRcdTZFOTBcIix0eXBlOnN0cmluZ3MsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0UmVzO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmRvd25SZXMsIHRpcHM6XCJcdThENDRcdTZFOTBcIix0eXBlOnN0cmluZ3MsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBkb3duUmVzO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmlzU2NhbGUsIHRpcHM6XCJcdTY2MkZcdTU0MjZcdTdGMjlcdTY1M0VcIix0eXBlOkNoZWNrfSovXHJcbiAgICBwcml2YXRlIGlzU2NhbGUgPSBmYWxzZTtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpzY2FsZVZhbCwgdGlwczpcIlx1N0YyOVx1NjUzRVx1NzY4NFx1NTAzQ1wiLHR5cGU6TnVtYmVyLCBkZWZhdWx0OjAuOX0qL1xyXG4gICAgcHJpdmF0ZSBzY2FsZVZhbDogbnVtYmVyID0gMC45O1xyXG5cclxuICAgIHByaXZhdGUgb2xkU2NhbGVYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIG9sZFNjYWxlWTogbnVtYmVyO1xyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNTY2FsZSk7XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLm1vdXNlRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vbGRTY2FsZVggPSAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikuZ2V0X3NjYWxlWCgpO1xyXG4gICAgICAgIHRoaXMub2xkU2NhbGVZID0gKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLmdldF9zY2FsZVkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRG93bigpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kb3duUmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSh0aGlzLnNjYWxlVmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlT3V0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRlZmF1bHRSZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKDEpO1xyXG4gICAgfVxyXG4gICAgb25Nb3VzZVVwKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRlZmF1bHRSZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QW5pKHNjYWxlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNTY2FsZSkgcmV0dXJuO1xyXG4gICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgIHRoaXMub3duZXIsXHJcbiAgICAgICAgICAgIHsgc2NhbGVYOiBzY2FsZSAqIHRoaXMub2xkU2NhbGVYLCBzY2FsZVk6IHNjYWxlICogdGhpcy5vbGRTY2FsZVkgfSxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFNraW4oc2tpbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFza2luKSByZXR1cm47XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHNraW47XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge31cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWxwaGFCZywgdGlwczpcIlx1OTAwRlx1NjYwRVx1ODBDQ1x1NjY2Rlx1NUM0MlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWxwaGFCZzogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0bkJveFRvcCwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NTIxN1x1ODg2OFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYnRuQm94VG9wOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpib3R0b21Cb3gsIHRpcHM6XCJcdTVFOTVcdTkwRThcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJvdHRvbUJveDogTGF5YS5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU2NTg3XHU1QjU3XHU4RDQ0XHU2RTkwXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGJ0blRvcFJlc0xpc3Q6IHN0cmluZ1tdW10gPSBbXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfc2VlZHNOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfc2VlZHNTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfcGV0Tm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3BldFNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19mb29kbk5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19mb29kblNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19iYW5rTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX2JhbmtTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICBdO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NTIwN1x1NjM2Mlx1NjgwN1x1N0I3RVx1OTAwOVx1NjJFOVx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSB0b3BCdG5TZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTcwQjlcdTUxRkJcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgaXRlbUxpc3RTZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTgwQ0NcdTY2NkZcdTdFQjlcdTc0MDYgKi9cclxuICAgIHByaXZhdGUgaXRlbVNlbGVjdEJnOiBzdHJpbmdbXSA9IFtcImdhbWUvaW1nX3BldGJhZy5wbmdcIiwgXCJnYW1lL2ltZ19wZXRiYWdTZWxlY3RlZC5wbmdcIl07XHJcblxyXG4gICAgb25IZEVuYWJsZSgpIHt9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgICAgICB0aGlzLmFscGhhQmcuYWxwaGEgPSAwLjc1O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1MaXN0KTtcclxuICAgICAgICAvLyB0aGlzLml0ZW1MaXN0Lml0ZW1SZW5kZXIgPSB0aGlzLmxpc3RJdGVtO1xyXG5cclxuICAgICAgICBsZXQgYXIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDMwOyB4KyspIHtcclxuICAgICAgICAgICAgYXIucHVzaCh7IG5hbWU6IHggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuaXRlbUxpc3Quc2Nyb2xsQmFyLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSBhcjtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlSXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUxpc3Quc2VsZWN0SGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5vblNlbGVjdCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCA9IGU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbShjZWxsOiBMYXlhLkltYWdlLCBpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGwpO1xyXG4gICAgICAgIC8vIGNlbGwuc2V0SW1nKGNlbGwuZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoYm94XCIpLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gaW5kZXg7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInNlZWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcInBldFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiZmVlZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiYmFua1wiOlxyXG4gICAgICAgICAgICAgICAgbGV0IHRvcEJ0bkluZGV4ID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRJbmRleChlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3BCdG5TZWxlY3RJbmRleCAhPSB0b3BCdG5JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9wQnRuU2VsZWN0SW5kZXggPSB0b3BCdG5JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvcEJ0blN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU3MEI5XHU1MUZCXHU3MEI5XHU1MUZCXHU3MkI2XHU2MDAxXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlVG9wQnRuU3RhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJ0bkJveFRvcC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEF0KHgpIGFzIExheWEuSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBsYiA9IGJ0bi5nZXRDaGlsZEF0KDApIGFzIExheWEuSW1hZ2U7XHJcbiAgICAgICAgICAgIGlmICh4ID09PSB0aGlzLnRvcEJ0blNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudXNlbGVjdGVkLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVsxXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZy1tZW51bm9ybWFsLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgbGIuc2tpbiA9IHRoaXMuYnRuVG9wUmVzTGlzdFt4XVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVCb3R0b20oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1NUU5NVx1OTBFOFx1NTE4NVx1NUJCOVx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUJvdHRvbSgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm90dG9tQm94Lm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoeCkgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoMSkgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDApIGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgyKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21tb24vVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50T24gfSBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi4vY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4uL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvcmUvVmlld01hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tDb250cm9sIGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aW1hZ2UsIHRpcHM6XCJcdTVFMDNcdTVDMTRcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgaW1hZ2U6IExheWEuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGdhbWU6IHN0cmluZyA9IFwiMTIxMjEyXCI7XHJcblxyXG4gICAgQEV2ZW50T24oXCJhYVwiKVxyXG4gICAgbXlFdmVudChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhYVwiLCBlLCB0aGlzLmltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgTG9hZFZpZXcgZnJvbSBcIi4vdmlldy9Mb2FkVmlld1wiXG5pbXBvcnQgTWFpblZpZXcgZnJvbSBcIi4vdmlldy9NYWluVmlld1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQnV0dG9uXCJcbmltcG9ydCBTaG9wVmlldyBmcm9tIFwiLi92aWV3L1Nob3BWaWV3XCJcbmltcG9ydCBUYXNrQ29udHJvbCBmcm9tIFwiLi92aWV3L1Rhc2tDb250cm9sXCJcclxuLypcclxuKiBcdTZFMzhcdTYyMEZcdTUyMURcdTU5Q0JcdTUzMTZcdTkxNERcdTdGNkU7XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTEwODA7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj0xOTIwO1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJmaXhlZHdpZHRoXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJub25lXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cIm1pZGRsZVwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJjZW50ZXJcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj10cnVlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJ2aWV3L0xvYWRWaWV3LnRzXCIsTG9hZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haW5WaWV3LnRzXCIsTWFpblZpZXcpO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL0J1dHRvbi50c1wiLEJ1dHRvbik7XG4gICAgICAgIHJlZyhcInZpZXcvU2hvcFZpZXcudHNcIixTaG9wVmlldyk7XG4gICAgICAgIHJlZyhcInZpZXcvVGFza0NvbnRyb2wudHNcIixUYXNrQ29udHJvbCk7XHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwgImltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCIuL2NvbW1vbi9FdmVudE1hcHNcIjtcclxuaW1wb3J0IFJlcyBmcm9tIFwiLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi9jb21tb24vVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsIGZyb20gXCIuL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuY2xhc3MgTWFpbiB7XHJcbiAgICAvKiogXHU4MUVBXHU1QjlBXHU0RTQ5XHU2RTMyXHU2N0QzaWRcdTUyMTdcdTg4NjggKi9cclxuICAgIHN0YXRpYyBjdXN0b21SZW5kZXJJRDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL1x1NjgzOVx1NjM2RUlERVx1OEJCRVx1N0Y2RVx1NTIxRFx1NTlDQlx1NTMxNlx1NUYxNVx1NjRDRVxyXG4gICAgICAgIGlmICh3aW5kb3dbXCJMYXlhM0RcIl0pIExheWEzRC5pbml0KEdhbWVDb25maWcud2lkdGgsIEdhbWVDb25maWcuaGVpZ2h0KTtcclxuICAgICAgICBlbHNlIExheWEuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuICAgICAgICBMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IEdhbWVDb25maWcuc2NhbGVNb2RlO1xyXG4gICAgICAgIExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IEdhbWVDb25maWcuc2NyZWVuTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduViA9IEdhbWVDb25maWcuYWxpZ25WO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWxpZ25IID0gR2FtZUNvbmZpZy5hbGlnbkg7XHJcbiAgICAgICAgLy9cdTUxN0NcdTVCQjlcdTVGQUVcdTRGRTFcdTRFMERcdTY1MkZcdTYzMDFcdTUyQTBcdThGN0RzY2VuZVx1NTQwRVx1N0YwMFx1NTczQVx1NjY2RlxyXG4gICAgICAgIExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcbiAgICAgICAgLy9cdTYyNTNcdTVGMDBcdThDMDNcdThCRDVcdTk3NjJcdTY3N0ZcdUZGMDhcdTkwMUFcdThGQzdJREVcdThCQkVcdTdGNkVcdThDMDNcdThCRDVcdTZBMjFcdTVGMEZcdUZGMENcdTYyMTZcdTgwMDV1cmxcdTU3MzBcdTU3NDBcdTU4OUVcdTUyQTBkZWJ1Zz10cnVlXHU1M0MyXHU2NTcwXHVGRjBDXHU1NzQ3XHU1M0VGXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA5XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKVxyXG4gICAgICAgICAgICBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcbiAgICAgICAgTGF5YS5hbGVydEdsb2JhbEVycm9yKHRydWUpO1xyXG5cclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1OEQ0NFx1NkU5MFx1NzI0OFx1NjcyQ1x1NjNBN1x1NTIzNlx1RkYwQ3ZlcnNpb24uanNvblx1NzUzMUlERVx1NTNEMVx1NUUwM1x1NTI5Rlx1ODBGRFx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1NEU1Rlx1NEUwRFx1NUY3MVx1NTRDRFx1NTQwRVx1N0VFRFx1NkQ0MVx1N0EwQlxyXG4gICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcclxuICAgICAgICAgICAgXCJ2ZXJzaW9uLmpzb25cIixcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksXHJcbiAgICAgICAgICAgIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT05cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuICAgICAgICAvL1x1NkZDMFx1NkQzQlx1NTkyN1x1NUMwRlx1NTZGRVx1NjYyMFx1NUMwNFx1RkYwQ1x1NTJBMFx1OEY3RFx1NUMwRlx1NTZGRVx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NTNEMVx1NzNCMFx1NUMwRlx1NTZGRVx1NTcyOFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1OTFDQ1x1OTc2Mlx1RkYwQ1x1NTIxOVx1NEYxOFx1NTE0OFx1NTJBMFx1OEY3RFx1NTkyN1x1NTZGRVx1NTQwOFx1OTZDNlx1RkYwQ1x1ODAwQ1x1NEUwRFx1NjYyRlx1NUMwRlx1NTZGRVxyXG4gICAgICAgIExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXHJcbiAgICAgICAgICAgIFwiZmlsZWNvbmZpZy5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ29uZmlnTG9hZGVkKCkge1xyXG4gICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHJcbiAgICAgICAgQ29uZmlnW1wiY3VzdG9tUmVuZGVySURcIl0gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKFwicmVzL2F1ZGlvL2RyYXcubXAzXCIpO1xyXG4gICAgICAgIC8vXHU1OTgyXHU2NzlDXHU5MDFBXHU4RkM3XHU4QkJFXHU1OTA3XHU5NzU5XHU5N0YzXHU5NTJFXHU4QkE5XHU5N0YzXHU5ODkxXHU4MUVBXHU1MkE4XHU4RERGXHU5NjhGXHU4QkJFXHU1OTA3XHU5NzU5XHU5N0YzXHUzMDAyXHU5NzAwXHU4OTgxXHU1QzA2dXNlQXVkaW9NdXNpY1x1OEJCRVx1N0Y2RVx1NEUzQWZhbHNlXHUzMDAyXHJcbiAgICAgICAgLy8gU291bmRNYW5hZ2VyLnVzZUF1ZGlvTXVzaWM9ZmFsc2VcdUZGMUJcclxuICAgICAgICAvLyBMYXlhLlNvdW5kTWFuYWdlci5wbGF5TXVzaWMoUmVzLmF1ZGlvcy53aW4pO1xyXG5cclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oUmVzLnZpZXdzLkxvYWREaWFsb2csIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5zZXRMb2FkaW5nUGFnZShlKTtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoOTk5OTk5OTk5OTk5OTk5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBMYXlhLmxvYWRlci5sb2FkKFxyXG4gICAgICAgICAgICBSZXMuc2NlbmVzLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2tcIik7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZSgzMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRHbG9iYWwuZXZlbnQoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4vL1x1NkZDMFx1NkQzQlx1NTQyRlx1NTJBOFx1N0M3QlxyXG5uZXcgTWFpbigpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR08sTUFBVztBQUFYLFlBQVcsWUFBWDtBQUVILGtDQUFnQjtBQUFBLEtBRkY7OztBQ0VWLE1BQUs7QUFBTCxZQUFLLFFBQUw7QUFHQSwyQkFBYTtBQUViLHlCQUFXO0FBRVgseUJBQVc7QUFFWCx5QkFBVztBQUFBLEtBVE47QUFZTCxNQUFLO0FBQUwsWUFBSyxTQUFMO0FBR0EscUJBQU07QUFFTix1QkFBUTtBQUVSLHNCQUFPO0FBRVAsb0JBQUs7QUFFTCxzQkFBTztBQUVQLHNCQUFPO0FBQUEsS0FiRjtBQW1CTCxNQUFNLFNBQVM7QUFBQSxJQUNkO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNHO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtB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
