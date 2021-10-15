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
    "scenes/views/MainView.scene",
    "scenes/views/LoadDialog.scene",
    "scenes/components/Button.prefab",
    "res/Xasdfasd.png",
    "res/rule_text.png",
    "res/bg1.png",
    "res/shader/vs.vs",
    "res/shader/ps.fs",
    "res/audio/win.mp3",
    "res/audio/ready.mp3",
    "res/audio/move.mp3",
    "res/audio/go.mp3",
    "res/audio/fail.mp3",
    "res/audio/draw.mp3",
    "res/atlas/win.png",
    "res/atlas/win.atlas",
    "res/atlas/lose.png",
    "res/atlas/lose.atlas",
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

  // src/view/LoadView.ts
  var LoadView = class extends Laya.Script {
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

  // src/view/MainView.ts
  var MainView = class extends GameScript {
    constructor() {
      super(...arguments);
      this.image = null;
      this.shaderImage = null;
    }
    onHdEnable() {
      console.log(this.shaderImage);
      let a = 0;
      setInterval(() => {
        UserInfo_default.nickname = "1231231" + ++a;
        EventGlobal_default.event("aa", "asdfa");
      }, 1e3);
      ObservableProperty_default.watch(UserInfo_default, this).key("nickname", (e) => {
        this.image.text = e;
      });
    }
    onClick(e) {
      switch (e.target.name) {
        case "openTask":
          console.log("open task");
          ViewManager.inst.open(Res_default.views.TaskView);
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
      Laya.Tween.to(this.owner, { scaleX: scale, scaleY: scale }, 300, Laya.Ease.backOut, null, 0, false, false);
    }
    setSkin(skin) {
      if (!skin)
        return;
      this.owner.skin = skin;
    }
    onDisable() {
    }
  };

  // src/shader/ppppp.fs
  var ppppp_default = "precision mediump float;\r\nvarying vec2 v_texcoord;\r\nvarying vec4 v_color;\r\nuniform sampler2D texture;\r\n// \u81EA\u5B9A\u4E49\u5C5E\u6027\r\nuniform float u_DissolveThreshold;\r\n\r\nvarying vec4 v_texcoordAlpha;\r\n\r\nvoid main(){\r\n    // vec4 noiseTexValue = texture2D(texture, v_texcoordAlpha.xy);\r\n    // gl_FragColor = texture2D(texture, v_texcoordAlpha.xy +  sin( (u_DissolveThreshold +(v_texcoordAlpha.x * 10.6 + v_texcoordAlpha.y * 10.)   )  ) * 0.01);\r\n    gl_FragColor = texture2D(texture, v_texcoordAlpha.xy );\r\n}";

  // src/shader/vvvv.vs
  var vvvv_default = "//\u9876\u70B9\u7740\u8272\u5668   \u76F4\u63A5\u4F7F\u7528\u7684\u662Flaya\u5B98\u65B9\u81EA\u5E26\u7684 \r\nattribute vec4 posuv;\r\nattribute vec4 attribColor;\r\nattribute vec4 attribFlags;\r\nattribute vec4 clipDir;\r\nattribute vec2 clipRect;\r\nuniform vec4 clipMatDir;\r\nuniform vec2 clipMatPos;\r\nvarying vec2 cliped;\r\nuniform vec2 size;\r\nuniform vec2 clipOff;\r\n#ifdef WORLDMAT\r\n    uniform mat4 mmat;\r\n#endif\r\n#ifdef MVP3D\r\n    uniform mat4 u_MvpMatrix;\r\n#endif\r\nvarying vec4 v_texcoordAlpha;\r\nvarying vec4 v_color;\r\nvarying float v_useTex;\r\n\r\nuniform float myTime;\r\nuniform float u_point;\r\n\r\nvoid main() {\r\n    vec4 pos = vec4(posuv.xy,0.,1.);\r\n    #ifdef WORLDMAT\r\n        pos=mmat*pos;\r\n    #endif\r\n    vec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\r\n    #ifdef MVP3D\r\n        gl_Position=u_MvpMatrix*pos1;\r\n    #else\r\n        // if(pos1.x < 0.5){\r\n        //     gl_Position=vec4(pos1.x * sin(-myTime * 0.01)  , pos1.y* sin(myTime * 0.01) , pos1.z, pos1.w);\r\n        // }else{\r\n            // gl_Position=vec4(pos1.xy +  sin( (myTime +(pos1.x*10. + pos1.y)*120.  )  ) * 0.02*cos(pos1.y*2.0 )  , pos1.z, pos1.w );\r\n            \r\n            // + u_point * (918.0 / 20.0) + cos((u_point * 0.3) + myTime) * 20.0\r\n            if( pos1.x< 0.3){\r\n                 gl_Position=vec4(pos1.x   , pos1.y + sin(  myTime) * 0.01, pos1.z, pos1.w );\r\n            }\r\n            else{\r\n                 gl_Position=vec4(pos1.x   , pos1.y , pos1.z, pos1.w );\r\n            }\r\n           \r\n        // }\r\n        \r\n    #endif\r\n    v_texcoordAlpha.xy = posuv.zw;\r\n    v_texcoordAlpha.z = attribColor.a/255.0;\r\n    v_color = attribColor/255.0;\r\n    v_color.xyz*=v_color.w;\r\n    v_useTex = attribFlags.r/255.0;\r\n    float clipw = length(clipMatDir.xy);\r\n    float cliph = length(clipMatDir.zw);\r\n    vec2 clpos = clipMatPos.xy;\r\n    #ifdef WORLDMAT\r\n    if(clipOff[0]>0.0){\r\n        clpos.x+=mmat[3].x;\r\n        clpos.y+=mmat[3].y;\r\n    }\r\n    #endif\r\n    vec2 clippos = pos.xy - clpos;\r\n\r\n    if(clipw>20000. && cliph>20000.)\r\n        cliped = vec2(0.0,0.0);\r\n    else {\r\n        cliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\r\n    }\r\n}";

  // src/core/ShaderSpriteBase.ts
  var ShaderSpriteBase = class extends GameScript {
    constructor() {
      super(...arguments);
      this.shaderImage = null;
      this.shader = {};
      this.time = 0;
      this.point = 0;
    }
    onHdEnable() {
      this.shaderImage.customRenderEnable = true;
      Config["customRenderID"].push(this.shaderImage.texture.bitmap["_id"]);
      let shader = new Laya.Value2D(Laya.ShaderDefines2D.TEXTURE2D, this.shaderImage.texture.bitmap["_id"]);
      shader.shader = new Laya.Shader2X(vvvv_default, ppppp_default, Laya.ShaderDefines2D.TEXTURE2D | this.shaderImage.texture.bitmap["_id"]);
      this.shaderImage.customRender = (context, x, y) => {
        context.drawTarget(this.shaderImage.texture, x, y, this.shaderImage.width, this.shaderImage.height, null, shader);
      };
      this.shader = shader;
    }
    onHdUpdate() {
      this.time += 0.1;
      this.shader["myTime"] = this.time;
      this.shader["u_DissolveThreshold"] = this.time;
      if (this.point > 20)
        this.point = 0;
      this.point += 1;
      this.shader["u_point"] = this.point;
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
      reg("core/ShaderSpriteBase.ts", ShaderSpriteBase);
      reg("view/TaskControl.ts", TaskControl);
    }
  };
  GameConfig.width = 750;
  GameConfig.height = 1334;
  GameConfig.scaleMode = "fixedwidth";
  GameConfig.screenMode = "vertical";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTG9hZFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Vc2VySW5mby50cyIsICIuLi8uLi9zcmMvY29yZS9PYnNlcnZhYmxlUHJvcGVydHkudHMiLCAiLi4vLi4vc3JjL2NvcmUvR2FtZVNjcmlwdC50cyIsICIuLi8uLi9zcmMvdmlldy9NYWluVmlldy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9CdXR0b24udHMiLCAiLi4vLi4vc3JjL2NvcmUvU2hhZGVyU3ByaXRlQmFzZS50cyIsICIuLi8uLi9zcmMvdmlldy9UYXNrQ29udHJvbC50cyIsICIuLi8uLi9zcmMvR2FtZUNvbmZpZy50cyIsICIuLi8uLi9zcmMvTWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXHJcbiAqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNlx1NTQwRFx1NzlGMFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gRXZlbnRNYXBzIHtcclxuICAgIC8qKiBsb2FkIFx1NzU0Q1x1OTc2Mlx1OEZEQlx1ODg0Q1x1NjZGNFx1NjVCMCAqL1xyXG4gICAgbG9hZF9wcm9ncmVzcyA9IFwibG9hZF9wcm9ncmVzc1wiLFxyXG59XHJcbiIsICIvL1x1NEVFM1x1NzgwMVx1NzUxRlx1NjIxMFx1RkYwQ1x1NEUwRFx1ODk4MVx1NjI0Qlx1NTJBOFx1NEZFRVx1NjUzOVxuXG4vKipcbiAqIFx1NzU0Q1x1OTc2Mlx1NTIxN1x1ODg2OFxuICovXG4gZXhwb3J0IGVudW0gdmlld3MgXG4gICAge1xuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL0xvYWREaWFsb2cuc2NlbmUgKi9cbiAgICAgICAgTG9hZERpYWxvZyA9IFwic2NlbmVzL3ZpZXdzL0xvYWREaWFsb2cuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpblZpZXcgPSBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZSAqL1xuICAgICAgICBUYXNrVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lXCIsIFxuICAgIH1cblxuIGV4cG9ydCBlbnVtIGF1ZGlvcyBcbiAgICB7XG4gICAgICAgIC8qKiBhdWRpby93aW4ubXAzICovXG4gICAgICAgIHdpbiA9IFwicmVzL2F1ZGlvL3dpbi5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9yZWFkeS5tcDMgKi9cbiAgICAgICAgcmVhZHkgPSBcInJlcy9hdWRpby9yZWFkeS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9tb3ZlLm1wMyAqL1xuICAgICAgICBtb3ZlID0gXCJyZXMvYXVkaW8vbW92ZS5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9nby5tcDMgKi9cbiAgICAgICAgZ28gPSBcInJlcy9hdWRpby9nby5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9mYWlsLm1wMyAqL1xuICAgICAgICBmYWlsID0gXCJyZXMvYXVkaW8vZmFpbC5tcDNcIiwgXG4gICAgICAgIC8qKiBhdWRpby9kcmF3Lm1wMyAqL1xuICAgICAgICBkcmF3ID0gXCJyZXMvYXVkaW8vZHJhdy5tcDNcIiwgXG4gICAgfVxuXG4vKipcbiAqIFx1NzU0Q1x1OTc2Mlx1NTIxN1x1ODg2OFxuICovXG4gZXhwb3J0IGNvbnN0IHNjZW5lcyA9IFtcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTG9hZERpYWxvZy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvY29tcG9uZW50cy9CdXR0b24ucHJlZmFiXCIsXG4gICAgICAgICAgICBcInJlcy9YYXNkZmFzZC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL3J1bGVfdGV4dC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2JnMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL3NoYWRlci92cy52c1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3BzLmZzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby93aW4ubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9yZWFkeS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL21vdmUubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9nby5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2ZhaWwubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9kcmF3Lm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvd2luLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvd2luLmF0bGFzXCIsXG4gICAgICAgICAgICBcInJlcy9hdGxhcy9sb3NlLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbG9zZS5hdGxhc1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUuYXRsYXNcIl07XG4gICAgXG5cbi8qKlxuICogXHU2MjQwXHU2NzA5XHU4RDQ0XHU2RTkwXG4gKi9cbmNvbnN0IFJlcyA9IHtcbiAgICB2aWV3czogdmlld3MsXG4gICAgc2NlbmVzOiBzY2VuZXMsXG4gICAgYXVkaW9zOiBhdWRpb3MsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXM7XG4iLCAiLyoqXHJcbiAqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNlxyXG4gKi9cclxuY29uc3QgRXZlbnRHbG9iYWwgPSBuZXcgTGF5YS5FdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbi8qKlxyXG4gKiBcdTUwQThcdTVCNThcdTc2ODRcdTk3MDBcdTg5ODFcdTdFRDFcdTVCOUFcdThCQTJcdTk2MDVcdTRFOEJcdTRFRjZcdTc2ODRcdTdDN0JcdTc2ODRcdTUzOUZcdTU3OEJcdTUyMTdcdTg4NjhcclxuICovXHJcbmV4cG9ydCBjb25zdCBFdmVudENsYXNzOiBNYXA8YW55LCB7IGtleTogc3RyaW5nOyBmbjogRnVuY3Rpb24gfT4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFdmVudE9uKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcbiAgICAgICAgRXZlbnRDbGFzcy5zZXQodGFyZ2V0LCB7IGtleTogbmFtZSwgZm46IGRlc2NyaXB0b3IudmFsdWUgfSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudEdsb2JhbDtcclxuIiwgImltcG9ydCBUYXNrQ29udHJvbCBmcm9tIFwiLi4vdmlldy9UYXNrQ29udHJvbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBwcml2YXRlIGVmZmVjdFR3ZWVuT3BlbjogTGF5YS5Ud2VlbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVmZmVjdFR3ZWVuQ2xvc2U6IExheWEuVHdlZW4gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9PcGVuKCkge31cclxuICAgIC8qKlxyXG4gICAgICogIFx1NTE3M1x1OTVFRFx1NjIxMFx1NTI5Rlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb0Nsb3NlKCkge31cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcbiAgICAgICAgZGlhbG9nLnNjYWxlKDEsIDEpO1xyXG4gICAgICAgIGRpYWxvZy5hbHBoYSA9IDAuNjtcclxuICAgICAgICB0aGlzLmVmZmVjdFR3ZWVuT3BlbiA9IExheWEuVHdlZW4uZnJvbShcclxuICAgICAgICAgICAgZGlhbG9nLFxyXG4gICAgICAgICAgICB7IHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLCB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsIHNjYWxlWDogMCwgc2NhbGVZOiAwIH0sXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVZpZXcoKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMub3duZXIgYXMgTGF5YS5WaWV3O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdFR3ZWVuQ2xvc2UgPSBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgZGlhbG9nLFxyXG4gICAgICAgICAgICAgICAgeyB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMiwgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLCBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5FYXNlLnN0cm9uZ091dCxcclxuICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgLy8gKSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5PcGVuICYmIExheWEuVHdlZW4uY2xlYXIodGhpcy5lZmZlY3RUd2Vlbk9wZW4pO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5PcGVuID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVmZmVjdFR3ZWVuQ2xvc2UgJiYgTGF5YS5Ud2Vlbi5jbGVhcih0aGlzLmVmZmVjdFR3ZWVuQ2xvc2UpO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5DbG9zZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTVCOUVcdTRGOEJcdTUyMTdcdTg4NjhcclxuICovXHJcbmNvbnN0IGluc3RhbmNlTGlzdDogTWFwPG51bWJlciwgeyBuZXcgKCk6IHZvaWQgfT4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcclxuICogXHU1QjlFXHU0RjhCXHU3Njg0aWRcclxuICovXHJcbmxldCBpbnN0YW5jZUlkOiBudW1iZXIgPSAxMDA7XHJcblxyXG4vKipcclxuICogXHU1MzU1XHU0RjhCXHU4OEM1XHU5OTcwXHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSW5zdGFuY2UodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWluc3RhbmNlTGlzdC5oYXModGFyZ2V0W1wiI2luc3RhbmNlSWRcIl0pKSB7XHJcbiAgICAgICAgaW5zdGFuY2VJZCsrO1xyXG4gICAgICAgIHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdID0gaW5zdGFuY2VJZDtcclxuICAgICAgICBpbnN0YW5jZUxpc3Quc2V0KGluc3RhbmNlSWQsIG5ldyB0YXJnZXQoKSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXRba2V5XSA9IGluc3RhbmNlTGlzdC5nZXQoaW5zdGFuY2VJZCk7XHJcbn1cclxuIiwgImltcG9ydCBSZXMsIHsgdmlld3MgfSBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVmlld1Nob3dBbmkgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NjI1M1x1NUYwMFx1NzU0Q1x1OTc2Mlx1OTcwMFx1ODk4MVx1NUUyNlx1NTE2NVx1NzY4NFx1NTNDMlx1NjU3MFxyXG4gKi9cclxuaW50ZXJmYWNlIFZpZXdPcGVuUGFybSB7XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2MiAqL1xyXG4gICAgc2hvd0xvYWQ/OiBib29sZWFuO1xyXG4gICAgLyoqIFx1NjYzRVx1NzkzQWxvYWRcdTc1NENcdTk3NjJcdTVFRjZcdThGREZcdTY1RjZcdTk1RjQgKi9cclxuICAgIHNob3dMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU5NjkwXHU4NUNGbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCBcdTlFRDhcdThCQTQwICovXHJcbiAgICBoaWRlTG9hZERlbGF5PzogbnVtYmVyO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1NTE3M1x1OTVFRFx1NTE3Nlx1NEVENlx1NTczQVx1NjY2Rlx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQXRydWVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDlcdUZGMENcdTMwMTBcdTZDRThcdTYxMEZcdTMwMTFcdTg4QUJcdTUxNzNcdTk1RURcdTc2ODRcdTU3M0FcdTY2NkZcdUZGMENcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdThCQkVcdTdGNkVhdXRvRGVzdHJveUF0UmVtb3ZlZD10cnVlXHVGRjBDXHU1MjE5XHU4RDQ0XHU2RTkwXHU1M0VGXHU4MEZEXHU0RTBEXHU4MEZEXHU4OEFCXHU1NkRFXHU2NTM2XHVGRjBDXHU5NzAwXHU4OTgxXHU4MUVBXHU1REYxXHU2MjRCXHU1MkE4XHU1NkRFXHU2NTM2XHJcbiAgICAgKiB0b2RvIFx1NzNCMFx1NTcyOFx1OEZEOVx1NEUyQVx1OEMwM1x1NzUyOFx1NzY4NFx1NjYyRlx1NUYxNVx1NjRDRVx1ODFFQVx1NUUyNlx1NzY4NFx1NjVCOVx1NkNENVx1RkYwQ1x1NkNBMVx1NjcwOVx1OEQ3MFx1OEZEOVx1OTFDQ1x1NzY4NFx1N0YxM1x1NUI1OFx1RkYwQ1x1NTNFRlx1ODBGRFx1NEYxQVx1NjcwOVx1OTVFRVx1OTg5OFx1RkYwQ1x1NTQwRVx1NjcxRlx1NEYxOFx1NTMxNlxyXG4gICAgICovXHJcbiAgICBjbG9zZU90aGVyPzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTYyNTNcdTVGMDBcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdUZGMENcdTRGMUFcdTRGMjBcdTkwMTJcdTdFRDlvbk9wZW5lZFx1NjVCOVx1NkNENVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcGFybT86IGFueTtcclxuICAgIC8qKiAgXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIGNvbXBsZXRlPzogRnVuY3Rpb247XHJcbiAgICAvKiogXHU1MkEwXHU4RjdEXHU4RkRCXHU1RUE2XHU1NkRFXHU4QzAzXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBwcm9ncmVzcz86IEhhbmRsZXI7XHJcbn1cclxuXHJcbmNvbnN0IHZpZXdNYXBzOiB7IHVybDogc3RyaW5nOyB2aWV3OiBMYXlhLlZpZXcgfVtdID0gW107XHJcblxyXG4vKipcclxuICogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmlld01hbmFnZXIge1xyXG4gICAgQEluc3RhbmNlXHJcbiAgICBzdGF0aWMgaW5zdDogVmlld01hbmFnZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGRhdGEgXHU1M0MyXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIG9wZW4oXHJcbiAgICAgICAgdXJsOiB2aWV3cyxcclxuICAgICAgICBkYXRhOiBWaWV3T3BlblBhcm0gPSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3RoZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkRGVsYXk6IDEwMCxcclxuICAgICAgICAgICAgaGlkZUxvYWREZWxheTogMCxcclxuICAgICAgICB9XHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJtaXNzIHBhdGghXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5zaG93TG9hZCkge1xyXG4gICAgICAgICAgICBMYXlhLlZpZXcuc2hvd0xvYWRpbmdQYWdlKG51bGwsIGRhdGEuc2hvd0xvYWREZWxheSk7XHJcbiAgICAgICAgICAgIGlmICh1cmwgIT09IFJlcy52aWV3cy5Mb2FkRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZShkYXRhLmhpZGVMb2FkRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExheWEuVmlldy5vcGVuKFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEuY2xvc2VPdGhlcixcclxuICAgICAgICAgICAgZGF0YS5wYXJtLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsICE9IFJlcy52aWV3cy5Mb2FkRGlhbG9nKSB2aWV3TWFwcy5wdXNoKHsgdXJsOiB1cmwsIHZpZXc6IGUgfSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNvbXBsZXRlICYmIGRhdGEuY29tcGxldGUoZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICBgJWMgPT0+IG9wZW4gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzdlZDZkZjtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzIyYTZiMztmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRhdGEucHJvZ3Jlc3NcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MTczXHU5NUVEXHU4OUM2XHU1NkZFXHJcbiAgICAgKiBAcGFyYW0gdXJsIFx1NzU0Q1x1OTc2Mlx1NTczMFx1NTc0MCBSZXMudmlld3NcdTkxQ0NcdTc2ODRcclxuICAgICAqIEBwYXJhbSBhbGwgXHU1NDBDXHU0RTAwXHU0RTJBXHU3NTRDXHU5NzYyXHU4OEFCIFx1NTkxQVx1NkIyMVx1NjI1M1x1NUYwMFx1RkYwQ1x1NTE2OFx1NTIyMFx1OTY2NFx1NzUyOFx1OEZEOVx1NEUyQVxyXG4gICAgICogQHBhcmFtIGRlc3Ryb3kgXHU5NTAwXHU2QkMxICAgVE9ET1x1RkYwOFx1OUVEOFx1OEJBNFx1NEYxQVx1OTUwMFx1NkJDMVx1NjI0MFx1NjcwOVx1NUI1MFx1ODI4Mlx1NzBCOVx1RkYwQ1x1NjcyQVx1NkQ0Qlx1OEJENVx1NjYyRlx1NTQyNlx1NjcwOVx1OTVFRVx1OTg5OFx1RkYwOVxyXG4gICAgICovXHJcbiAgICBhc3luYyBjbG9zZSh1cmw6IHZpZXdzLCBhbGw6IGJvb2xlYW4gPSBmYWxzZSwgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlLCBhbmlDb20gPSBWaWV3U2hvd0FuaSkge1xyXG4gICAgICAgIC8vVE9ETyBcdThGRDlcdTkxQ0NcdTczQjBcdTU3MjhcdTUxNjhcdTkwRThcdTc1MjhkZXN0cm95IFx1NUYxNVx1NjRDRXJlbW92ZVx1NTk3RFx1NTBDRlx1NjcwOVx1NzBCOVx1OTVFRVx1OTg5OFx1RkYwQ1x1NTE4RFx1OTAxQVx1OEZDN3ZpZXcub3Blblx1NEYxQVx1OTFDRFx1NjVCMFx1Njc4NFx1NUVGQVx1N0VDNFx1NEVGNlxyXG4gICAgICAgIGRlc3Ryb3kgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgdkFuaTogVmlld1Nob3dBbmk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHZpZXdNYXBzLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT09IHZpZXdNYXBzW3hdLnVybCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSB2aWV3TWFwc1t4XTtcclxuICAgICAgICAgICAgICAgIHZpZXdNYXBzLnNwbGljZSh4LCAxKTtcclxuICAgICAgICAgICAgICAgIHZBbmkgPSB2LnZpZXcuZ2V0Q29tcG9uZW50KGFuaUNvbSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodkFuaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZBbmkuY2xvc2VWaWV3KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcuZGVzdHJveSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnZpZXcucmVtb3ZlU2VsZigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHU0RkREXHU4QkMxXHU1OTgyXHU2NzlDXHU1NzNBXHU2NjZGXHU1QjhDXHU1MTY4XHU2Q0ExXHU2NzA5XHU3NTRDXHU5NzYyXHU4OEFCXHU2MjUzXHU1RjAwXHU3Njg0XHU2NUY2XHU1MDE5XHVGRjBDXHU1RkM1XHU2MjUzXHU1RjAwXHU0RTNCXHU1NzNBXHU2NjZGXHJcbiAgICAgICAgbGV0IGNsb3NlTGVuID0gMDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKCF2aWV3TWFwc1t4XS52aWV3LnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VMZW4rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNsb3NlTGVuID09PSB2aWV3TWFwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5vcGVuKFJlcy52aWV3cy5NYWluVmlldyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh2aWV3TWFwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZVZpZXdMb2codXJsOiBzdHJpbmcsIGRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBgJWMgPD09ICR7ZGVzdHJveSA/IFwiZGVzdHJveVwiIDogXCJkaXNhYmxlXCJ9ICVjJHt1cmwubWF0Y2goL1xcdysoPz1cXC4pLylbMF19IGAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZmY3OTc5O2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2ViNGQ0Yjtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZFMDVcdTk2NjRcdTdGMTNcdTVCNThcdTc1NENcdTk3NjJcclxuICAgICAqL1xyXG4gICAgY2xlYXJWaWV3TWFwcygpIHtcclxuICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmxvYWRMYWJlbCwgdGlwczpcImxvYWQgXHU2NTg3XHU2NzJDXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGxvYWRMYWJlbDogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgb25Bd2FrZSgpIHtcclxuICAgICAgICAvLyB0aGlzLm93bmVyLmlcclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxvYWRMYWJlbCk7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub24oRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIHRoaXMsIHRoaXMubG9hZFByb2dyZXNzKTtcclxuICAgICAgICB0aGlzLmxvYWRMYWJlbC50ZXh0ID0gXCJMb2FkLi4uLjAlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUHJvZ3Jlc3Modikge1xyXG4gICAgICAgIHRoaXMubG9hZExhYmVsLnRleHQgPSBgTG9hZC4uLi4keyh2ICogMTAwKS50b0ZpeGVkKDIpfSVgO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBFdmVudEdsb2JhbC5vZmYoRXZlbnRNYXBzLmxvYWRfcHJvZ3Jlc3MsIHRoaXMsIHRoaXMubG9hZFByb2dyZXNzKTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi4vY29yZS9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2RlxyXG4gKi9cclxuY2xhc3MgVXNlckluZm8ge1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NTQwRFx1NzlGMCAqL1xyXG4gICAgbmlja25hbWU6IHN0cmluZyA9IFwibmFtZVwiO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN2lkICovXHJcbiAgICB1aWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJJbmZvKCk7XHJcbiIsICJjb25zdCBjYWxsZXJzOiBNYXA8YW55LCBGdW5jdGlvbltdPiA9IG5ldyBNYXAoKTtcclxuXHJcbmNsYXNzIE9ic2VydmFibGVDb250cm9sPGNhbGwgZXh0ZW5kcyBMYXlhLlNjcmlwdD4ge1xyXG4gICAgcHJpdmF0ZSBrZXlFdmVudHM6IE1hcDxhbnksIE1hcDxzdHJpbmcsIEZ1bmN0aW9uW10+PiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzZEMVx1NTQyQ1x1NUM1RVx1NjAyN1x1NTAzQ1x1NTNEOFx1NTMxNlxyXG4gICAgICogQHBhcmFtIE9iaiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTc2ODRcdTVCRjlcdThDNjFcclxuICAgICAqL1xyXG4gICAgd2F0Y2g8VCBleHRlbmRzIHt9PihPYmo6IFQsIGNhbGxlcjogY2FsbCkge1xyXG4gICAgICAgIGlmICghY2FsbGVycy5oYXMoY2FsbGVyKSkge1xyXG4gICAgICAgICAgICBjYWxsZXJzLnNldChjYWxsZXIsIFtdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBrZXlFdmVudCA9IHRoaXMua2V5RXZlbnRzO1xyXG4gICAgICAgIGlmICgha2V5RXZlbnQuaGFzKE9iaikpIHtcclxuICAgICAgICAgICAga2V5RXZlbnQuc2V0KE9iaiwgbmV3IE1hcCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlx1NzY4NFx1NUM1RVx1NjAyN1x1NEU4Qlx1NEVGNlxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkgXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QzVFXHU2MDI3XHJcbiAgICAgICAgICogQHBhcmFtIGNhbGwgXHU1NkRFXHU4QzAzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3Qga2V5QmluZCA9IDxLZXkgZXh0ZW5kcyBrZXlvZiBUPihrZXk6IEtleSAmIHN0cmluZywgY2FsbDogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IF9vYmogPSBrZXlFdmVudC5nZXQoT2JqKTtcclxuICAgICAgICAgICAgaWYgKCFfb2JqLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBfb2JqLnNldChrZXksIFtdKTtcclxuICAgICAgICAgICAgICAgIGlmIChPYmpbXCIjXCIgKyBrZXldID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9ialtcIiNcIiArIGtleV0gPSBPYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldDogKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbXCIjXCIgKyBrZXldID0gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9vYmouZ2V0KGtleSkuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tcIiNcIiArIGtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2FsbC5iaW5kKGNhbGwpO1xyXG4gICAgICAgICAgICBfb2JqLmdldChrZXkpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcikucHVzaChjYWxsKTtcclxuICAgICAgICAgICAgY2FsbChPYmpba2V5XSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB7IGtleToga2V5QmluZCB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU5MDFBXHU4RkM3XHU0RjIwXHU1MTY1XHU3Njg0Y2FsbGVyXHU1MjIwXHU5NjY0XHU1RjUzXHU1MjREXHU3RUQxXHU1QjlBXHU3Njg0XHU2MjQwXHU2NzA5XHU3Njg0XHU0RThCXHU0RUY2IFx1NjIxNlx1NjMwN1x1NUI5QVx1ODlFM1x1NTFCM1x1NkEyMVx1NEUyQVx1NUJGOVx1OEM2MVx1OERERlx1NUY1M1x1NTI0RGNhbGxlclx1N0VEMVx1NUI5QVx1NzY4NFx1NzZEMVx1NTQyQ1xyXG4gICAgICogQHBhcmFtIGNhbGxlciBcdTc2RDFcdTU0MkNcdTY1RjZcdTdFRDFcdTVCOUFcdTc2ODRcdTU3M0FcdTY2NkZcdTVCRjlcdThDNjFcclxuICAgICAqIEBwYXJhbSBvYmogXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUJ5Q2FsbGVyKGNhbGxlcjogY2FsbCwgb2JqOiBhbnkgPSBudWxsKSB7XHJcbiAgICAgICAgY2FsbGVycy5nZXQoY2FsbGVyKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZ2V0KG9iaikuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhPZiA9IGV2LmluZGV4T2YoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUV2ZW50cz8uZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGsuZm9yRWFjaCgoZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZiA+IC0xKSBldi5zcGxpY2UoaW5kZXhPZiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU3RUQxXHU1QjlBXHU1M0VGXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBuZXcgT2JzZXJ2YWJsZUNvbnRyb2woKTtcclxuIiwgImltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudENsYXNzIH0gZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEdhbWVTY3JpcHQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCBiaW5kRXZlbnQgPSBFdmVudENsYXNzLmdldCh0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgYmluZEV2ZW50ICYmIEV2ZW50R2xvYmFsLm9uKGJpbmRFdmVudC5rZXksIHRoaXMsIGJpbmRFdmVudC5mbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRBd2FrZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25Bd2FrZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRBd2FrZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTZGQzBcdTZEM0JcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCNjRcdTY1RjZcdTYyNDBcdTY3MDlcdTgyODJcdTcwQjlcdTU0OENcdTdFQzRcdTRFRjZcdTU3NDdcdTVERjJcdTUyMUJcdTVFRkFcdTVCOENcdTZCRDVcdUZGMENcdTZCMjFcdTY1QjlcdTZDRDVcdTUzRUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkQXdha2UoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRW5hYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRFbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NTQyRlx1NzUyOFx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1ODI4Mlx1NzBCOVx1ODhBQlx1NkRGQlx1NTJBMFx1NTIzMFx1ODIxRVx1NTNGMFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkU3RhcnRcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkU3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QjJDXHU0RTAwXHU2QjIxXHU2MjY3XHU4ODRDdXBkYXRlXHU0RTRCXHU1MjREXHU2MjY3XHU4ODRDXHVGRjBDXHU1M0VBXHU0RjFBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFN0YXJ0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFVwZGF0ZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCQ0ZcdTVFMjdcdTY2RjRcdTY1QjBcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTVDM0RcdTkxQ0ZcdTRFMERcdTg5ODFcdTU3MjhcdThGRDlcdTkxQ0NcdTUxOTlcdTU5MjdcdTVGQUFcdTczQUZcdTkwM0JcdThGOTFcdTYyMTZcdTgwMDVcdTRGN0ZcdTc1MjhnZXRDb21wb25lbnRcdTY1QjlcdTZDRDVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkVXBkYXRlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERpc2FibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGREaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTc5ODFcdTc1MjhcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTRFQ0VcdTgyODJcdTcwQjlcdTRFQ0VcdTgyMUVcdTUzRjBcdTc5RkJcdTk2NjRcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGlzYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREZXN0cm95XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25IZERlc3Ryb3koKTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NkUwNVx1OTY2NFx1OERERlx1NUY1M1x1NTI0RFx1N0M3Qlx1N0VEMVx1NUI5QVx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1ODlDMlx1NUJERlx1NjVCOVx1NkNENVxyXG4gICAgICAgICAgICBPYnNlcnZhYmxlUHJvcGVydHkucmVtb3ZlQnlDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIC8vXHU5NTAwXHU2QkMxXHU2NUY2XHU2RTA1XHU5NjY0XHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU1RjE1XHU3NTI4XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0ga2V5cy5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5c1t4XV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNEJcdTUyQThcdThDMDNcdTc1MjhcdTgyODJcdTcwQjlcdTk1MDBcdTZCQzFcdTY1RjZcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGVzdHJveSgpIHt9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcIi4uL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21tb24vVXNlckluZm9cIjtcclxuaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEV2ZW50T24gfSBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi4vY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4uL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4uL2NvcmUvVmlld01hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5WaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aW1hZ2UsIHRpcHM6XCJcdTVFMDNcdTVDMTRcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgaW1hZ2U6IExheWEuTGFiZWwgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNoYWRlckltYWdlLCB0aXBzOlwic2hhZGVyXHU3NTI4XHU3Njg0XHU1NkZFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzaGFkZXJJbWFnZTogTGF5YS5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFx1NjZGNFx1NTkxQVx1NTNDMlx1NjU3MFx1OEJGNFx1NjYwRVx1OEJGN1x1OEJCRlx1OTVFRTogaHR0cHM6Ly9sZGMyLmxheWFib3guY29tL2RvYy8/bmF2PXpoLWFzLTItNC0wXHJcblxyXG4gICAgb25IZEVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNoYWRlckltYWdlKTtcclxuXHJcbiAgICAgICAgbGV0IGEgPSAwO1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgVXNlckluZm8ubmlja25hbWUgPSBcIjEyMzEyMzFcIiArICsrYTtcclxuICAgICAgICAgICAgRXZlbnRHbG9iYWwuZXZlbnQoXCJhYVwiLCBcImFzZGZhXCIpO1xyXG4gICAgICAgICAgICAvLyBpZiAoYSA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBFdmVudEdsb2JhbC5vZmYoXCJhYVwiLCB0aGlzLCB0aGlzLm15RXZlbnQpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIE9ic2VydmFibGVQcm9wZXJ0eS53YXRjaChVc2VySW5mbywgdGhpcykua2V5KFwibmlja25hbWVcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS50ZXh0ID0gZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm9wZW5UYXNrXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW4gdGFza1wiKTtcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3Qub3BlbihSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVmYXVsdFJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRlZmF1bHRSZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZG93blJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRvd25SZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXNTY2FsZSwgdGlwczpcIlx1NjYyRlx1NTQyNlx1N0YyOVx1NjUzRVwiLHR5cGU6Q2hlY2t9Ki9cclxuICAgIHByaXZhdGUgaXNTY2FsZSA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNjYWxlVmFsLCB0aXBzOlwiXHU3RjI5XHU2NTNFXHU3Njg0XHU1MDNDXCIsdHlwZTpOdW1iZXIsIGRlZmF1bHQ6MC45fSovXHJcbiAgICBwcml2YXRlIHNjYWxlVmFsOiBudW1iZXIgPSAwLjk7XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc1NjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vdXNlRG93bigpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kb3duUmVzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRBbmkodGhpcy5zY2FsZVZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU91dCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuICAgIG9uTW91c2VVcCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFuaShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2NhbGUpIHJldHVybjtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICB7IHNjYWxlWDogc2NhbGUsIHNjYWxlWTogc2NhbGUgfSxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFNraW4oc2tpbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFza2luKSByZXR1cm47XHJcbiAgICAgICAgKHRoaXMub3duZXIgYXMgTGF5YS5JbWFnZSkuc2tpbiA9IHNraW47XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge31cclxufVxyXG4iLCAiaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4vR2FtZVNjcmlwdFwiO1xyXG5cclxuaW1wb3J0IGZzIGZyb20gXCIuLi9zaGFkZXIvcHBwcHAuZnNcIjtcclxuaW1wb3J0IHZzIGZyb20gXCIuLi9zaGFkZXIvdnZ2di52c1wiO1xyXG5cclxuLyoqXHJcbiAqIHNoYWRlclxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhZGVyU3ByaXRlQmFzZSBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNoYWRlckltYWdlLCB0aXBzOlwic2hhZGVyXHU3NTI4XHU3Njg0XHU1NkZFXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBzaGFkZXJJbWFnZTogTGF5YS5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIG9uSGRFbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkZXJJbWFnZS5jdXN0b21SZW5kZXJFbmFibGUgPSB0cnVlO1xyXG5cclxuICAgICAgICBDb25maWdbXCJjdXN0b21SZW5kZXJJRFwiXS5wdXNoKHRoaXMuc2hhZGVySW1hZ2UudGV4dHVyZS5iaXRtYXBbXCJfaWRcIl0pO1xyXG5cclxuICAgICAgICBsZXQgc2hhZGVyID0gbmV3IExheWEuVmFsdWUyRChcclxuICAgICAgICAgICAgTGF5YS5TaGFkZXJEZWZpbmVzMkQuVEVYVFVSRTJELFxyXG4gICAgICAgICAgICB0aGlzLnNoYWRlckltYWdlLnRleHR1cmUuYml0bWFwW1wiX2lkXCJdXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzaGFkZXIuc2hhZGVyID0gbmV3IExheWEuU2hhZGVyMlgoXHJcbiAgICAgICAgICAgIHZzLFxyXG4gICAgICAgICAgICBmcyxcclxuICAgICAgICAgICAgTGF5YS5TaGFkZXJEZWZpbmVzMkQuVEVYVFVSRTJEIHwgdGhpcy5zaGFkZXJJbWFnZS50ZXh0dXJlLmJpdG1hcFtcIl9pZFwiXVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIHNoYWRlcltcIm15VGltZVwiXSA9IDAuMTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGFkZXJJbWFnZS5jdXN0b21SZW5kZXIgPSAoY29udGV4dDogTGF5YS5Db250ZXh0LCB4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd1RhcmdldChcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhZGVySW1hZ2UudGV4dHVyZSBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICAgICAgeSxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhZGVySW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRlckltYWdlLmhlaWdodCxcclxuICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICBzaGFkZXJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNoYWRlciA9IHNoYWRlcjtcclxuICAgIH1cclxuICAgIHNoYWRlciA9IHt9O1xyXG4gICAgdGltZTogbnVtYmVyID0gMDtcclxuICAgIHBvaW50OiBudW1iZXIgPSAwO1xyXG4gICAgb25IZFVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnRpbWUgKz0gMC4xO1xyXG4gICAgICAgIHRoaXMuc2hhZGVyW1wibXlUaW1lXCJdID0gdGhpcy50aW1lO1xyXG4gICAgICAgIHRoaXMuc2hhZGVyW1widV9EaXNzb2x2ZVRocmVzaG9sZFwiXSA9IHRoaXMudGltZTtcclxuICAgICAgICBpZiAodGhpcy5wb2ludCA+IDIwKSB0aGlzLnBvaW50ID0gMDtcclxuICAgICAgICB0aGlzLnBvaW50ICs9IDE7XHJcbiAgICAgICAgdGhpcy5zaGFkZXJbXCJ1X3BvaW50XCJdID0gdGhpcy5wb2ludDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbW1vbi9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiB9IGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuLi9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi4vY29yZS9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0NvbnRyb2wgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppbWFnZSwgdGlwczpcIlx1NUUwM1x1NUMxNFx1N0M3Qlx1NTc4Qlx1NzkzQVx1NEY4QlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBpbWFnZTogTGF5YS5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgZ2FtZTogc3RyaW5nID0gXCIxMjEyMTJcIjtcclxuXHJcbiAgICBARXZlbnRPbihcImFhXCIpXHJcbiAgICBteUV2ZW50KGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFhXCIsIGUsIHRoaXMuaW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlRhc2tWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcbmltcG9ydCBMb2FkVmlldyBmcm9tIFwiLi92aWV3L0xvYWRWaWV3XCJcbmltcG9ydCBNYWluVmlldyBmcm9tIFwiLi92aWV3L01haW5WaWV3XCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9CdXR0b25cIlxuaW1wb3J0IFNoYWRlclNwcml0ZUJhc2UgZnJvbSBcIi4vY29yZS9TaGFkZXJTcHJpdGVCYXNlXCJcbmltcG9ydCBUYXNrQ29udHJvbCBmcm9tIFwiLi92aWV3L1Rhc2tDb250cm9sXCJcclxuLypcclxuKiBcdTZFMzhcdTYyMEZcdTUyMURcdTU5Q0JcdTUzMTZcdTkxNERcdTdGNkU7XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTc1MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTEzMzQ7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cImZpeGVkd2lkdGhcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cInZlcnRpY2FsXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cIm1pZGRsZVwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJjZW50ZXJcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj10cnVlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuICAgICAgICByZWcoXCJ2aWV3L0xvYWRWaWV3LnRzXCIsTG9hZFZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L01haW5WaWV3LnRzXCIsTWFpblZpZXcpO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL0J1dHRvbi50c1wiLEJ1dHRvbik7XG4gICAgICAgIHJlZyhcImNvcmUvU2hhZGVyU3ByaXRlQmFzZS50c1wiLFNoYWRlclNwcml0ZUJhc2UpO1xuICAgICAgICByZWcoXCJ2aWV3L1Rhc2tDb250cm9sLnRzXCIsVGFza0NvbnRyb2wpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwiLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vY29tbW9uL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmNsYXNzIE1haW4ge1xyXG4gICAgLyoqIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHU1MjE3XHU4ODY4ICovXHJcbiAgICBzdGF0aWMgY3VzdG9tUmVuZGVySUQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9cdTY4MzlcdTYzNkVJREVcdThCQkVcdTdGNkVcdTUyMURcdTU5Q0JcdTUzMTZcdTVGMTVcdTY0Q0VcclxuICAgICAgICBpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcbiAgICAgICAgZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcbiAgICAgICAgTGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG4gICAgICAgIC8vXHU1MTdDXHU1QkI5XHU1RkFFXHU0RkUxXHU0RTBEXHU2NTJGXHU2MzAxXHU1MkEwXHU4RjdEc2NlbmVcdTU0MEVcdTdGMDBcdTU3M0FcdTY2NkZcclxuICAgICAgICBMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG4gICAgICAgIC8vXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA4XHU5MDFBXHU4RkM3SURFXHU4QkJFXHU3RjZFXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHVGRjBDXHU2MjE2XHU4MDA1dXJsXHU1NzMwXHU1NzQwXHU1ODlFXHU1MkEwZGVidWc9dHJ1ZVx1NTNDMlx1NjU3MFx1RkYwQ1x1NTc0N1x1NTNFRlx1NjI1M1x1NUYwMFx1OEMwM1x1OEJENVx1OTc2Mlx1Njc3Rlx1RkYwOVxyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIilcclxuICAgICAgICAgICAgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG4gICAgICAgIExheWEuYWxlcnRHbG9iYWxFcnJvcih0cnVlKTtcclxuXHJcbiAgICAgICAgLy9cdTZGQzBcdTZEM0JcdThENDRcdTZFOTBcdTcyNDhcdTY3MkNcdTYzQTdcdTUyMzZcdUZGMEN2ZXJzaW9uLmpzb25cdTc1MzFJREVcdTUzRDFcdTVFMDNcdTUyOUZcdTgwRkRcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdUZGMENcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdTRFNUZcdTRFMERcdTVGNzFcdTU0Q0RcdTU0MEVcdTdFRURcdTZENDFcdTdBMEJcclxuICAgICAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXHJcbiAgICAgICAgICAgIFwidmVyc2lvbi5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLFxyXG4gICAgICAgICAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy9cdTZGQzBcdTZEM0JcdTU5MjdcdTVDMEZcdTU2RkVcdTY2MjBcdTVDMDRcdUZGMENcdTUyQTBcdThGN0RcdTVDMEZcdTU2RkVcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTU5ODJcdTY3OUNcdTUzRDFcdTczQjBcdTVDMEZcdTU2RkVcdTU3MjhcdTU5MjdcdTU2RkVcdTU0MDhcdTk2QzZcdTkxQ0NcdTk3NjJcdUZGMENcdTUyMTlcdTRGMThcdTUxNDhcdTUyQTBcdThGN0RcdTU5MjdcdTU2RkVcdTU0MDhcdTk2QzZcdUZGMENcdTgwMENcdTRFMERcdTY2MkZcdTVDMEZcdTU2RkVcclxuICAgICAgICBMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFxyXG4gICAgICAgICAgICBcImZpbGVjb25maWcuanNvblwiLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNvbmZpZ0xvYWRlZCgpIHtcclxuICAgICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTZFMzJcdTY3RDNpZFxyXG4gICAgICAgIENvbmZpZ1tcImN1c3RvbVJlbmRlcklEXCJdID0gW107XHJcblxyXG4gICAgICAgIC8vIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInJlcy9hdWRpby9kcmF3Lm1wM1wiKTtcclxuICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1OTAxQVx1OEZDN1x1OEJCRVx1NTkwN1x1OTc1OVx1OTdGM1x1OTUyRVx1OEJBOVx1OTdGM1x1OTg5MVx1ODFFQVx1NTJBOFx1OERERlx1OTY4Rlx1OEJCRVx1NTkwN1x1OTc1OVx1OTdGM1x1MzAwMlx1OTcwMFx1ODk4MVx1NUMwNnVzZUF1ZGlvTXVzaWNcdThCQkVcdTdGNkVcdTRFM0FmYWxzZVx1MzAwMlxyXG4gICAgICAgIC8vIFNvdW5kTWFuYWdlci51c2VBdWRpb011c2ljPWZhbHNlXHVGRjFCXHJcbiAgICAgICAgLy8gTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKFJlcy5hdWRpb3Mud2luKTtcclxuXHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5vcGVuKFJlcy52aWV3cy5Mb2FkRGlhbG9nLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuc2V0TG9hZGluZ1BhZ2UoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1x1NTQwRVx1NjcxRlx1NEYxOFx1NTMxNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDk5OTk5OTk5OTk5OTk5OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgUmVzLnNjZW5lcyxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCBlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuLy9cdTZGQzBcdTZEM0JcdTU0MkZcdTUyQThcdTdDN0JcclxubmV3IE1haW4oKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLE1BQVc7QUFBWCxZQUFXLFlBQVg7QUFFSCxrQ0FBZ0I7QUFBQSxLQUZGOzs7QUNFVixNQUFLO0FBQUwsWUFBSyxRQUFMO0FBR0EsMkJBQWE7QUFFYix5QkFBVztBQUVYLHlCQUFXO0FBQUEsS0FQTjtBQVVMLE1BQUs7QUFBTCxZQUFLLFNBQUw7QUFHQSxxQkFBTTtBQUVOLHVCQUFRO0FBRVIsc0JBQU87QUFFUCxvQkFBSztBQUVMLHNCQUFPO0FBRVAsc0JBQU87QUFBQSxLQWJGO0FBbUJMLE1BQU0sU0FBUztBQUFBLElBQ2Q7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNHO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtB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
