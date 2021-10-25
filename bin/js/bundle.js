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
    views3["MailView"] = "scenes/views/MailView.scene";
    views3["MainView"] = "scenes/views/MainView.scene";
    views3["ShopView"] = "scenes/views/ShopView.scene";
    views3["SignInView"] = "scenes/views/SignInView.scene";
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
    "scenes/views/SignInView.scene",
    "scenes/views/ShopView.scene",
    "scenes/views/MainView.scene",
    "scenes/views/MailView.scene",
    "scenes/views/LoadDialog.scene",
    "scenes/prefab/PlotPrefab.prefab",
    "scenes/components/Button.prefab",
    "res/Xasdfasd.png",
    "res/rule_text.png",
    "res/img_landBg.png",
    "res/img_homepageBg3.png",
    "res/img_homepageBg2.png",
    "res/img_homepageBg1.png",
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
      this.content.bottom = -this.content.height;
      this.tweenList.push(Laya.Tween.to(this.content, { bottom: 0 }, 300, Laya.Ease.circOut, Laya.Handler.create(this, this.doOpen, [dialog]), 0, false, false));
    }
    closeView() {
      let dialog = this.owner;
      return new Promise((resolve) => {
        this.tweenList.push(Laya.Tween.to(this.bg, { alpha: 0 }, 200, null, Laya.Handler.create(this, this.doOpen, [dialog]), 0, false, false), Laya.Tween.to(this.content, { bottom: -this.content.height }, 200, null, new Laya.Handler(this, () => {
          this.doClose();
          resolve(null);
        }, [dialog]), 0, false, false));
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

  // src/core/index.ts
  var Core = {
    observableProperty: ObservableProperty_default,
    view: ViewManager.inst,
    gameScript: GameScript,
    instance: Instance,
    eventOn: EventOn,
    eventGlobal: EventGlobal_default
  };
  var core_default = Core;

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
    }
    onHdEnable() {
      core_default.observableProperty.watch(UserInfo_default, this).key("diamond", (e) => {
        this.diamondNode.value = e;
      }).key("gold", (e) => {
        this.goldNode.value = e;
      }).key("avatar", (e) => {
        this.avatarNode.skin = e;
      });
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
      }
    }
  };
  __decorateClass([
    core_default.eventOn(ApiHttp.init)
  ], MainView.prototype, "gameInit", 1);

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
      return;
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
      reg("view/LoadView.ts", LoadView);
      reg("components/Button.ts", Button);
      reg("view/MailView.ts", MailView);
      reg("components/ViewShowAni.ts", ViewShowAni);
      reg("view/MainView.ts", MainView);
      reg("core/ShaderSpriteBase.ts", ShaderSpriteBase);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTG9hZFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLnRzIiwgIi4uLy4uL3NyYy92aWV3L01haWxWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21tb24vTmV0TWFwcy50cyIsICIuLi8uLi9zcmMvY29yZS9pbmRleC50cyIsICIuLi8uLi9zcmMvY29tbW9uL1VzZXJJbmZvLnRzIiwgIi4uLy4uL3NyYy92aWV3L01haW5WaWV3LnRzIiwgIi4uLy4uL3NyYy9jb3JlL1NoYWRlclNwcml0ZUJhc2UudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaS50cyIsICIuLi8uLi9zcmMvdmlldy9TaG9wVmlldy50cyIsICIuLi8uLi9zcmMvdmlldy9TaWduSW5WaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1Rhc2tWaWV3LnRzIiwgIi4uLy4uL3NyYy9HYW1lQ29uZmlnLnRzIiwgIi4uLy4uL3NyYy9NYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcclxuICogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2XHU1NDBEXHU3OUYwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBFdmVudE1hcHMge1xyXG4gICAgLyoqIGxvYWQgXHU3NTRDXHU5NzYyXHU4RkRCXHU4ODRDXHU2NkY0XHU2NUIwICovXHJcbiAgICBsb2FkX3Byb2dyZXNzID0gXCJsb2FkX3Byb2dyZXNzXCIsXHJcbn1cclxuIiwgIi8vXHU0RUUzXHU3ODAxXHU3NTFGXHU2MjEwXHVGRjBDXHU0RTBEXHU4OTgxXHU2MjRCXHU1MkE4XHU0RkVFXHU2NTM5XG5cbi8qKlxuICogXHU3NTRDXHU5NzYyXHU1MjE3XHU4ODY4XG4gKi9cbiBleHBvcnQgZW51bSB2aWV3cyBcbiAgICB7XG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTG9hZERpYWxvZy5zY2VuZSAqL1xuICAgICAgICBMb2FkRGlhbG9nID0gXCJzY2VuZXMvdmlld3MvTG9hZERpYWxvZy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZSAqL1xuICAgICAgICBNYWlsVmlldyA9IFwic2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lICovXG4gICAgICAgIE1haW5WaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2hvcFZpZXcgPSBcInNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaWduSW5WaWV3LnNjZW5lICovXG4gICAgICAgIFNpZ25JblZpZXcgPSBcInNjZW5lcy92aWV3cy9TaWduSW5WaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1Rhc2tWaWV3LnNjZW5lICovXG4gICAgICAgIFRhc2tWaWV3ID0gXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIiwgXG4gICAgfVxuXG4gZXhwb3J0IGVudW0gYXVkaW9zIFxuICAgIHtcbiAgICAgICAgLyoqIGF1ZGlvL3dpbi5tcDMgKi9cbiAgICAgICAgd2luID0gXCJyZXMvYXVkaW8vd2luLm1wM1wiLCBcbiAgICAgICAgLyoqIGF1ZGlvL3JlYWR5Lm1wMyAqL1xuICAgICAgICByZWFkeSA9IFwicmVzL2F1ZGlvL3JlYWR5Lm1wM1wiLCBcbiAgICAgICAgLyoqIGF1ZGlvL21vdmUubXAzICovXG4gICAgICAgIG1vdmUgPSBcInJlcy9hdWRpby9tb3ZlLm1wM1wiLCBcbiAgICAgICAgLyoqIGF1ZGlvL2dvLm1wMyAqL1xuICAgICAgICBnbyA9IFwicmVzL2F1ZGlvL2dvLm1wM1wiLCBcbiAgICAgICAgLyoqIGF1ZGlvL2ZhaWwubXAzICovXG4gICAgICAgIGZhaWwgPSBcInJlcy9hdWRpby9mYWlsLm1wM1wiLCBcbiAgICAgICAgLyoqIGF1ZGlvL2RyYXcubXAzICovXG4gICAgICAgIGRyYXcgPSBcInJlcy9hdWRpby9kcmF3Lm1wM1wiLCBcbiAgICB9XG5cbi8qKlxuICogXHU3NTRDXHU5NzYyXHU1MjE3XHU4ODY4XG4gKi9cbiBleHBvcnQgY29uc3Qgc2NlbmVzID0gW1xuICAgICAgICAgXCJzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL0xvYWREaWFsb2cuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ByZWZhYi9QbG90UHJlZmFiLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvY29tcG9uZW50cy9CdXR0b24ucHJlZmFiXCIsXG4gICAgICAgICAgICBcInJlcy9YYXNkZmFzZC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL3J1bGVfdGV4dC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19sYW5kQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzMucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzIucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2JnMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL3NoYWRlci92cy52c1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3BzLmZzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby93aW4ubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9yZWFkeS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL21vdmUubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9nby5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2ZhaWwubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9kcmF3Lm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zZW5jZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2VuY2UuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUuYXRsYXNcIl07XG4gICAgXG5cbi8qKlxuICogXHU2MjQwXHU2NzA5XHU4RDQ0XHU2RTkwXG4gKi9cbmNvbnN0IFJlcyA9IHtcbiAgICB2aWV3czogdmlld3MsXG4gICAgc2NlbmVzOiBzY2VuZXMsXG4gICAgYXVkaW9zOiBhdWRpb3MsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXM7XG4iLCAiLyoqXHJcbiAqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNlxyXG4gKi9cclxuY29uc3QgRXZlbnRHbG9iYWwgPSBuZXcgTGF5YS5FdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbi8qKlxyXG4gKiBcdTUwQThcdTVCNThcdTc2ODRcdTk3MDBcdTg5ODFcdTdFRDFcdTVCOUFcdThCQTJcdTk2MDVcdTRFOEJcdTRFRjZcdTc2ODRcdTdDN0JcdTc2ODRcdTUzOUZcdTU3OEJcdTUyMTdcdTg4NjhcclxuICovXHJcbmV4cG9ydCBjb25zdCBFdmVudENsYXNzOiBNYXA8YW55LCB7IGtleTogc3RyaW5nOyBmbjogRnVuY3Rpb24gfT4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50T24obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcclxuICAgICAgICBFdmVudENsYXNzLnNldCh0YXJnZXQsIHsga2V5OiBuYW1lLCBmbjogZGVzY3JpcHRvci52YWx1ZSB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50R2xvYmFsO1xyXG4iLCAiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YmcsIHRpcHM6XCJcdTgwQ0NcdTY2NkZcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgYmc6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvbnRlbnQsIHRpcHM6XCJcdTUxODVcdTVCQjlcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgY29udGVudDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB0d2Vlbkxpc3Q6IExheWEuVHdlZW5bXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjUzXHU1RjAwXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvT3BlbigpIHt9XHJcbiAgICAvKipcclxuICAgICAqICBcdTUxNzNcdTk1RURcdTYyMTBcdTUyOUZcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9DbG9zZSgpIHt9XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMub3duZXIgYXMgTGF5YS5WaWV3O1xyXG5cclxuICAgICAgICB0aGlzLmJnLmFscGhhID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIHRoaXMuYmcsXHJcbiAgICAgICAgICAgICAgICB7IGFscGhhOiAwLjc1IH0sXHJcbiAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudC5ib3R0b20gPSAtdGhpcy5jb250ZW50LmhlaWdodDtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5wdXNoKFxyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgeyBib3R0b206IDAgfSxcclxuICAgICAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgICAgIExheWEuRWFzZS5jaXJjT3V0LFxyXG4gICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VWaWV3KCkge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZyxcclxuICAgICAgICAgICAgICAgICAgICB7IGFscGhhOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICB7IGJvdHRvbTogLXRoaXMuY29udGVudC5oZWlnaHQgfSxcclxuICAgICAgICAgICAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTGF5YS5IYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnR3ZWVuTGlzdC5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIExheWEuVHdlZW4uY2xlYXIoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG4iLCAiLyoqXHJcbiAqIFx1NUI5RVx1NEY4Qlx1NTIxN1x1ODg2OFxyXG4gKi9cclxuY29uc3QgaW5zdGFuY2VMaXN0OiBNYXA8bnVtYmVyLCB7IG5ldyAoKTogdm9pZCB9PiA9IG5ldyBNYXAoKTtcclxuXHJcbi8qKlxyXG4gKiBcdTVCOUVcdTRGOEJcdTc2ODRpZFxyXG4gKi9cclxubGV0IGluc3RhbmNlSWQ6IG51bWJlciA9IDEwMDtcclxuXHJcbi8qKlxyXG4gKiBcdTUzNTVcdTRGOEJcdTg4QzVcdTk5NzBcdTU2NjhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnN0YW5jZSh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpIHtcclxuICAgIGlmICghaW5zdGFuY2VMaXN0Lmhhcyh0YXJnZXRbXCIjaW5zdGFuY2VJZFwiXSkpIHtcclxuICAgICAgICBpbnN0YW5jZUlkKys7XHJcbiAgICAgICAgdGFyZ2V0W1wiI2luc3RhbmNlSWRcIl0gPSBpbnN0YW5jZUlkO1xyXG4gICAgICAgIGluc3RhbmNlTGlzdC5zZXQoaW5zdGFuY2VJZCwgbmV3IHRhcmdldCgpKTtcclxuICAgIH1cclxuICAgIHRhcmdldFtrZXldID0gaW5zdGFuY2VMaXN0LmdldChpbnN0YW5jZUlkKTtcclxufVxyXG4iLCAiaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IFJlcywgeyB2aWV3cyB9IGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU2MjUzXHU1RjAwXHU3NTRDXHU5NzYyXHU5NzAwXHU4OTgxXHU1RTI2XHU1MTY1XHU3Njg0XHU1M0MyXHU2NTcwXHJcbiAqL1xyXG5pbnRlcmZhY2UgVmlld09wZW5QYXJtIHtcclxuICAgIC8qKiBcdTY2M0VcdTc5M0Fsb2FkXHU3NTRDXHU5NzYyICovXHJcbiAgICBzaG93TG9hZD86IGJvb2xlYW47XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCAqL1xyXG4gICAgc2hvd0xvYWREZWxheT86IG51bWJlcjtcclxuICAgIC8qKiBcdTk2OTBcdTg1Q0Zsb2FkXHU3NTRDXHU5NzYyXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0IFx1OUVEOFx1OEJBNDAgKi9cclxuICAgIGhpZGVMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU2NjJGXHU1NDI2XHU1MTczXHU5NUVEXHU1MTc2XHU0RUQ2XHU1NzNBXHU2NjZGXHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBdHJ1ZVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOVx1RkYwQ1x1MzAxMFx1NkNFOFx1NjEwRlx1MzAxMVx1ODhBQlx1NTE3M1x1OTVFRFx1NzY4NFx1NTczQVx1NjY2Rlx1RkYwQ1x1NTk4Mlx1Njc5Q1x1NkNBMVx1NjcwOVx1OEJCRVx1N0Y2RWF1dG9EZXN0cm95QXRSZW1vdmVkPXRydWVcdUZGMENcdTUyMTlcdThENDRcdTZFOTBcdTUzRUZcdTgwRkRcdTRFMERcdTgwRkRcdTg4QUJcdTU2REVcdTY1MzZcdUZGMENcdTk3MDBcdTg5ODFcdTgxRUFcdTVERjFcdTYyNEJcdTUyQThcdTU2REVcdTY1MzZcclxuICAgICAqIHRvZG8gXHU3M0IwXHU1NzI4XHU4RkQ5XHU0RTJBXHU4QzAzXHU3NTI4XHU3Njg0XHU2NjJGXHU1RjE1XHU2NENFXHU4MUVBXHU1RTI2XHU3Njg0XHU2NUI5XHU2Q0Q1XHVGRjBDXHU2Q0ExXHU2NzA5XHU4RDcwXHU4RkQ5XHU5MUNDXHU3Njg0XHU3RjEzXHU1QjU4XHVGRjBDXHU1M0VGXHU4MEZEXHU0RjFBXHU2NzA5XHU5NUVFXHU5ODk4XHVGRjBDXHU1NDBFXHU2NzFGXHU0RjE4XHU1MzE2XHJcbiAgICAgKi9cclxuICAgIGNsb3NlT3RoZXI/OiBib29sZWFuO1xyXG4gICAgLyoqIFx1NjI1M1x1NUYwMFx1OTg3NVx1OTc2Mlx1NzY4NFx1NTNDMlx1NjU3MFx1RkYwQ1x1NEYxQVx1NEYyMFx1OTAxMlx1N0VEOW9uT3BlbmVkXHU2NUI5XHU2Q0Q1XHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBwYXJtPzogYW55O1xyXG4gICAgLyoqICBcdTYyNTNcdTVGMDBcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdUZGMENcdTRGMUFcdTRGMjBcdTkwMTJcdTdFRDlvbk9wZW5lZFx1NjVCOVx1NkNENVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgY29tcGxldGU/OiBGdW5jdGlvbjtcclxuICAgIC8qKiBcdTUyQTBcdThGN0RcdThGREJcdTVFQTZcdTU2REVcdThDMDNcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIHByb2dyZXNzPzogSGFuZGxlcjtcclxufVxyXG5cclxuY29uc3Qgdmlld01hcHM6IHsgdXJsOiBzdHJpbmc7IHZpZXc6IExheWEuVmlldyB9W10gPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBcdTc1NENcdTk3NjJcdTdCQTFcdTc0MDZcdTU2NjhcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWaWV3TWFuYWdlciB7XHJcbiAgICBASW5zdGFuY2VcclxuICAgIHN0YXRpYyBpbnN0OiBWaWV3TWFuYWdlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NEUwMFx1NEUyQVx1NzU0Q1x1OTc2MlxyXG4gICAgICogQHBhcmFtIHVybCBcdTc1NENcdTk3NjJcdTU3MzBcdTU3NDAgUmVzLnZpZXdzXHU5MUNDXHU3Njg0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSBcdTUzQzJcdTY1NzBcclxuICAgICAqL1xyXG4gICAgb3BlbihcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGRhdGE6IFZpZXdPcGVuUGFybSA9IHtcclxuICAgICAgICAgICAgY2xvc2VPdGhlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0xvYWREZWxheTogMTAwLFxyXG4gICAgICAgICAgICBoaWRlTG9hZERlbGF5OiAwLFxyXG4gICAgICAgIH1cclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdXJsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIm1pc3MgcGF0aCFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnNob3dMb2FkKSB7XHJcbiAgICAgICAgICAgIExheWEuVmlldy5zaG93TG9hZGluZ1BhZ2UobnVsbCwgZGF0YS5zaG93TG9hZERlbGF5KTtcclxuICAgICAgICAgICAgaWYgKHVybCAhPT0gUmVzLnZpZXdzLkxvYWREaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgIExheWEudGltZXIuZnJhbWVPbmNlKDEsIHRoaXMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKGRhdGEuaGlkZUxvYWREZWxheSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTGF5YS5WaWV3Lm9wZW4oXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgZGF0YS5jbG9zZU90aGVyLFxyXG4gICAgICAgICAgICBkYXRhLnBhcm0sXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgIT0gUmVzLnZpZXdzLkxvYWREaWFsb2cpIHZpZXdNYXBzLnB1c2goeyB1cmw6IHVybCwgdmlldzogZSB9KTtcclxuICAgICAgICAgICAgICAgIGRhdGEuY29tcGxldGUgJiYgZGF0YS5jb21wbGV0ZShlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgIGAlYyA9PT4gb3BlbiAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojN2VkNmRmO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgLFxyXG4gICAgICAgICAgICAgICAgICAgIGBjb2xvcjojMjJhNmIzO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGF0YS5wcm9ncmVzc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTUxNzNcdTk1RURcdTg5QzZcdTU2RkVcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGFsbCBcdTU0MENcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcdTg4QUIgXHU1OTFBXHU2QjIxXHU2MjUzXHU1RjAwXHVGRjBDXHU1MTY4XHU1MjIwXHU5NjY0XHU3NTI4XHU4RkQ5XHU0RTJBXHJcbiAgICAgKiBAcGFyYW0gZGVzdHJveSBcdTk1MDBcdTZCQzEgICBUT0RPXHVGRjA4XHU5RUQ4XHU4QkE0XHU0RjFBXHU5NTAwXHU2QkMxXHU2MjQwXHU2NzA5XHU1QjUwXHU4MjgyXHU3MEI5XHVGRjBDXHU2NzJBXHU2RDRCXHU4QkQ1XHU2NjJGXHU1NDI2XHU2NzA5XHU5NUVFXHU5ODk4XHVGRjA5XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNsb3NlKFxyXG4gICAgICAgIHVybDogdmlld3MsXHJcbiAgICAgICAgYWxsOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGFuaUNvbTogdHlwZW9mIFZpZXdTaG93QW5pIHwgdHlwZW9mIEZsb2F0Vmlld1Nob3dBbmkgPSBWaWV3U2hvd0FuaVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy9UT0RPIFx1OEZEOVx1OTFDQ1x1NzNCMFx1NTcyOFx1NTE2OFx1OTBFOFx1NzUyOGRlc3Ryb3kgXHU1RjE1XHU2NENFcmVtb3ZlXHU1OTdEXHU1MENGXHU2NzA5XHU3MEI5XHU5NUVFXHU5ODk4XHVGRjBDXHU1MThEXHU5MDFBXHU4RkM3dmlldy5vcGVuXHU0RjFBXHU5MUNEXHU2NUIwXHU2Nzg0XHU1RUZBXHU3RUM0XHU0RUY2XHJcbiAgICAgICAgZGVzdHJveSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCB2QW5pOiBWaWV3U2hvd0FuaTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gdmlld01hcHMubGVuZ3RoIC0gMTsgeCA+IC0xOyB4LS0pIHtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0gdmlld01hcHNbeF0udXJsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHZpZXdNYXBzW3hdO1xyXG4gICAgICAgICAgICAgICAgdmlld01hcHMuc3BsaWNlKHgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZBbmkgPSB2LnZpZXcuZ2V0Q29tcG9uZW50KGFuaUNvbSBhcyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZBbmkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2QW5pLmNsb3NlVmlldygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LmRlc3Ryb3kodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi52aWV3LnJlbW92ZVNlbGYoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFhbGwpIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1x1NEZERFx1OEJDMVx1NTk4Mlx1Njc5Q1x1NTczQVx1NjY2Rlx1NUI4Q1x1NTE2OFx1NkNBMVx1NjcwOVx1NzU0Q1x1OTc2Mlx1ODhBQlx1NjI1M1x1NUYwMFx1NzY4NFx1NjVGNlx1NTAxOVx1RkYwQ1x1NUZDNVx1NjI1M1x1NUYwMFx1NEUzQlx1NTczQVx1NjY2RlxyXG4gICAgICAgIGxldCBjbG9zZUxlbiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHZpZXdNYXBzLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XHJcbiAgICAgICAgICAgIGlmICghdmlld01hcHNbeF0udmlldy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTGVuKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbG9zZUxlbiA9PT0gdmlld01hcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZpZXdNYXBzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbihSZXMudmlld3MuTWFpblZpZXcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codmlld01hcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VWaWV3TG9nKHVybDogc3RyaW5nLCBkZXN0cm95OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYCVjIDw9PSAke2Rlc3Ryb3kgPyBcImRlc3Ryb3lcIiA6IFwiZGlzYWJsZVwifSAlYyR7dXJsLm1hdGNoKC9cXHcrKD89XFwuKS8pWzBdfSBgLFxyXG4gICAgICAgICAgICBgY29sb3I6I2ZmNzk3OTtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNlYjRkNGI7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2RTA1XHU5NjY0XHU3RjEzXHU1QjU4XHU3NTRDXHU5NzYyXHJcbiAgICAgKi9cclxuICAgIGNsZWFyVmlld01hcHMoKSB7XHJcbiAgICAgICAgdmlld01hcHMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufVxyXG4iLCAiY29uc3QgY2FsbGVyczogTWFwPGFueSwgRnVuY3Rpb25bXT4gPSBuZXcgTWFwKCk7XHJcblxyXG5jbGFzcyBPYnNlcnZhYmxlQ29udHJvbDxjYWxsIGV4dGVuZHMgTGF5YS5TY3JpcHQ+IHtcclxuICAgIHByaXZhdGUga2V5RXZlbnRzOiBNYXA8YW55LCBNYXA8c3RyaW5nLCBGdW5jdGlvbltdPj4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTc2RDFcdTU0MkNcdTVDNUVcdTYwMjdcdTUwM0NcdTUzRDhcdTUzMTZcclxuICAgICAqIEBwYXJhbSBPYmogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU3Njg0XHU1QkY5XHU4QzYxXHJcbiAgICAgKi9cclxuICAgIHdhdGNoPFQgZXh0ZW5kcyB7fT4oT2JqOiBULCBjYWxsZXI6IGNhbGwpIHtcclxuICAgICAgICBpZiAoIWNhbGxlcnMuaGFzKGNhbGxlcikpIHtcclxuICAgICAgICAgICAgY2FsbGVycy5zZXQoY2FsbGVyLCBbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQga2V5RXZlbnQgPSB0aGlzLmtleUV2ZW50cztcclxuICAgICAgICBpZiAoIWtleUV2ZW50LmhhcyhPYmopKSB7XHJcbiAgICAgICAgICAgIGtleUV2ZW50LnNldChPYmosIG5ldyBNYXAoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcdTc2ODRcdTVDNUVcdTYwMjdcdTRFOEJcdTRFRjZcclxuICAgICAgICAgKiBAcGFyYW0ga2V5IFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUM1RVx1NjAyN1xyXG4gICAgICAgICAqIEBwYXJhbSBjYWxsIFx1NTZERVx1OEMwM1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGtleUJpbmQgPSA8S2V5IGV4dGVuZHMga2V5b2YgVD4oa2V5OiBLZXkgJiBzdHJpbmcsIGNhbGw6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBfb2JqID0ga2V5RXZlbnQuZ2V0KE9iaik7XHJcbiAgICAgICAgICAgIGlmICghX29iai5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgX29iai5zZXQoa2V5LCBbXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqW1wiI1wiICsga2V5XSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmpbXCIjXCIgKyBrZXldID0gT2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9iaiwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6ICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1wiI1wiICsga2V5XSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfb2JqLmdldChrZXkpLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCIjXCIgKyBrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNhbGwuYmluZChjYWxsKTtcclxuICAgICAgICAgICAgX29iai5nZXQoa2V5KS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpLnB1c2goY2FsbCk7XHJcbiAgICAgICAgICAgIGNhbGwoT2JqW2tleV0pO1xyXG4gICAgICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4geyBrZXk6IGtleUJpbmQgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1OTAxQVx1OEZDN1x1NEYyMFx1NTE2NVx1NzY4NGNhbGxlclx1NTIyMFx1OTY2NFx1NUY1M1x1NTI0RFx1N0VEMVx1NUI5QVx1NzY4NFx1NjI0MFx1NjcwOVx1NzY4NFx1NEU4Qlx1NEVGNiBcdTYyMTZcdTYzMDdcdTVCOUFcdTg5RTNcdTUxQjNcdTZBMjFcdTRFMkFcdTVCRjlcdThDNjFcdThEREZcdTVGNTNcdTUyNERjYWxsZXJcdTdFRDFcdTVCOUFcdTc2ODRcdTc2RDFcdTU0MkNcclxuICAgICAqIEBwYXJhbSBjYWxsZXIgXHU3NkQxXHU1NDJDXHU2NUY2XHU3RUQxXHU1QjlBXHU3Njg0XHU1NzNBXHU2NjZGXHU1QkY5XHU4QzYxXHJcbiAgICAgKiBAcGFyYW0gb2JqIFx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICByZW1vdmVCeUNhbGxlcihjYWxsZXI6IGNhbGwsIG9iajogYW55ID0gbnVsbCkge1xyXG4gICAgICAgIGNhbGxlcnMuZ2V0KGNhbGxlcik/LmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9iaikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmdldChvYmopLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4T2YgPSBldi5pbmRleE9mKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlFdmVudHM/LmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBrLmZvckVhY2goKGV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4T2YgPiAtMSkgZXYuc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgbmV3IE9ic2VydmFibGVDb250cm9sKCk7XHJcbiIsICJpbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRDbGFzcyB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcblxyXG4vKipcclxuICogXHU3RUM0XHU0RUY2XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2NyaXB0IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvL0V2ZW50T25cdTg4QzVcdTk5NzBcdTU2NjhcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUFcclxuICAgICAgICBsZXQgYmluZEV2ZW50ID0gRXZlbnRDbGFzcy5nZXQodGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIGJpbmRFdmVudCAmJiBFdmVudEdsb2JhbC5vbihiaW5kRXZlbnQua2V5LCB0aGlzLCBiaW5kRXZlbnQuZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkQXdha2VcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uQXdha2UoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkQXdha2UoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU2RkMwXHU2RDNCXHU1NDBFXHU2MjY3XHU4ODRDXHVGRjBDXHU2QjY0XHU2NUY2XHU2MjQwXHU2NzA5XHU4MjgyXHU3MEI5XHU1NDhDXHU3RUM0XHU0RUY2XHU1NzQ3XHU1REYyXHU1MjFCXHU1RUZBXHU1QjhDXHU2QkQ1XHVGRjBDXHU2QjIxXHU2NUI5XHU2Q0Q1XHU1M0VBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZEF3YWtlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZEVuYWJsZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkRW5hYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTU0MkZcdTc1MjhcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTgyODJcdTcwQjlcdTg4QUJcdTZERkJcdTUyQTBcdTUyMzBcdTgyMUVcdTUzRjBcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRW5hYmxlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFN0YXJ0XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvblN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25IZFN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFx1N0IyQ1x1NEUwMFx1NkIyMVx1NjI2N1x1ODg0Q3VwZGF0ZVx1NEU0Qlx1NTI0RFx1NjI2N1x1ODg0Q1x1RkYwQ1x1NTNFQVx1NEYxQVx1NjI2N1x1ODg0Q1x1NEUwMFx1NkIyMVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRTdGFydCgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGRVcGRhdGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMub25IZFVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QkNGXHU1RTI3XHU2NkY0XHU2NUIwXHU2NUY2XHU2MjY3XHU4ODRDXHVGRjBDXHU1QzNEXHU5MUNGXHU0RTBEXHU4OTgxXHU1NzI4XHU4RkQ5XHU5MUNDXHU1MTk5XHU1OTI3XHU1RkFBXHU3M0FGXHU5MDNCXHU4RjkxXHU2MjE2XHU4MDA1XHU0RjdGXHU3NTI4Z2V0Q29tcG9uZW50XHU2NUI5XHU2Q0Q1XHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFVwZGF0ZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREaXNhYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkRGlzYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3RUM0XHU0RUY2XHU4OEFCXHU3OTgxXHU3NTI4XHU2NUY2XHU2MjY3XHU4ODRDXHVGRjBDXHU2QkQ0XHU1OTgyXHU0RUNFXHU4MjgyXHU3MEI5XHU0RUNFXHU4MjFFXHU1M0YwXHU3OUZCXHU5NjY0XHU1NDBFXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZERpc2FibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRGVzdHJveVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9mZkFsbENhbGxlcih0aGlzKTtcclxuICAgICAgICB0aGlzLm9uSGREZXN0cm95KCk7XHJcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDEsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cdTZFMDVcdTk2NjRcdThEREZcdTVGNTNcdTUyNERcdTdDN0JcdTdFRDFcdTVCOUFcdTYyNDBcdTY3MDlcdTc2ODRcdTVDNUVcdTYwMjdcdTg5QzJcdTVCREZcdTY1QjlcdTZDRDVcclxuICAgICAgICAgICAgT2JzZXJ2YWJsZVByb3BlcnR5LnJlbW92ZUJ5Q2FsbGVyKHRoaXMpO1xyXG4gICAgICAgICAgICAvL1x1OTUwMFx1NkJDMVx1NjVGNlx1NkUwNVx1OTY2NFx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1NUYxNVx1NzUyOFxyXG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGtleXMubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2tleXNbeF1dID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2MjRCXHU1MkE4XHU4QzAzXHU3NTI4XHU4MjgyXHU3MEI5XHU5NTAwXHU2QkMxXHU2NUY2XHU2MjY3XHU4ODRDXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZERlc3Ryb3koKSB7fVxyXG59XHJcbiIsICJpbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwiLi4vY29tbW9uL0V2ZW50TWFwc1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwgZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6bG9hZExhYmVsLCB0aXBzOlwibG9hZCBcdTY1ODdcdTY3MkNcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgbG9hZExhYmVsOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBvbkF3YWtlKCkge1xyXG4gICAgICAgIC8vIHRoaXMub3duZXIuaVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubG9hZExhYmVsKTtcclxuICAgICAgICBFdmVudEdsb2JhbC5vbihFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgdGhpcywgdGhpcy5sb2FkUHJvZ3Jlc3MpO1xyXG4gICAgICAgIHRoaXMubG9hZExhYmVsLnRleHQgPSBcIkxvYWQuLi4uMCVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRQcm9ncmVzcyh2KSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTGFiZWwudGV4dCA9IGBMb2FkLi4uLiR7KHYgKiAxMDApLnRvRml4ZWQoMil9JWA7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9mZihFdmVudE1hcHMubG9hZF9wcm9ncmVzcywgdGhpcywgdGhpcy5sb2FkUHJvZ3Jlc3MpO1xyXG4gICAgfVxyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZGVmYXVsdFJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRlZmF1bHRSZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6ZG93blJlcywgdGlwczpcIlx1OEQ0NFx1NkU5MFwiLHR5cGU6c3RyaW5ncyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIGRvd25SZXM7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXNTY2FsZSwgdGlwczpcIlx1NjYyRlx1NTQyNlx1N0YyOVx1NjUzRVwiLHR5cGU6Q2hlY2t9Ki9cclxuICAgIHByaXZhdGUgaXNTY2FsZSA9IGZhbHNlO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOnNjYWxlVmFsLCB0aXBzOlwiXHU3RjI5XHU2NTNFXHU3Njg0XHU1MDNDXCIsdHlwZTpOdW1iZXIsIGRlZmF1bHQ6MC45fSovXHJcbiAgICBwcml2YXRlIHNjYWxlVmFsOiBudW1iZXIgPSAwLjk7XHJcblxyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgb2xkU2NhbGVZOiBudW1iZXI7XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pc1NjYWxlKTtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikubW91c2VFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWCA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVYKCk7XHJcbiAgICAgICAgdGhpcy5vbGRTY2FsZVkgPSAodGhpcy5vd25lciBhcyBMYXlhLkJ1dHRvbikuZ2V0X3NjYWxlWSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VEb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U2tpbih0aGlzLmRvd25SZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0QW5pKHRoaXMuc2NhbGVWYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VPdXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcbiAgICBvbk1vdXNlVXAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZGVmYXVsdFJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRBbmkoc2NhbGU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1NjYWxlKSByZXR1cm47XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgdGhpcy5vd25lcixcclxuICAgICAgICAgICAgeyBzY2FsZVg6IHNjYWxlICogdGhpcy5vbGRTY2FsZVgsIHNjYWxlWTogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWSB9LFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgIExheWEuRWFzZS5iYWNrT3V0LFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0U2tpbihza2luOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXNraW4pIHJldHVybjtcclxuICAgICAgICAodGhpcy5vd25lciBhcyBMYXlhLkltYWdlKS5za2luID0gc2tpbjtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7fVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuLy8gIE1haWxWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlsVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuTWFpbFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICIvKipcclxuICogXHU3N0VEXHU5NEZFXHU2M0E1XHU4QkY3XHU2QzQyXHU1MzRGXHU4QkFFXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBcGlIdHRwIHtcclxuICAgIC8qKiBcdTUyMURcdTU5Q0JcdTUzMTZcdTUzNEZcdThCQUUgKi9cclxuICAgIGluaXQgPSBcIi9pbml0XCIsXHJcbn1cclxuIiwgImltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uIH0gZnJvbSBcIi4vRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4vR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuL0luc3RhbmNlXCI7XHJcbmltcG9ydCBPYnNlcnZhYmxlUHJvcGVydHkgZnJvbSBcIi4vT2JzZXJ2YWJsZVByb3BlcnR5XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vVmlld01hbmFnZXJcIjtcclxuXHJcbmNvbnN0IENvcmUgPSB7XHJcbiAgICAvKiogXHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU3RUQxXHU1QjlBXHU1M0VGXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2ICovXHJcbiAgICBvYnNlcnZhYmxlUHJvcGVydHk6IE9ic2VydmFibGVQcm9wZXJ0eSxcclxuICAgIC8qKiBcdTc1NENcdTk3NjJcdTdCQTFcdTc0MDZcdTU2NjggKi9cclxuICAgIHZpZXc6IFZpZXdNYW5hZ2VyLmluc3QsXHJcbiAgICAvKiogXHU1RjE1XHU2NENFXHU4MTFBXHU2NzJDXHU3RUM0XHU0RUY2ICovXHJcbiAgICBnYW1lU2NyaXB0OiBHYW1lU2NyaXB0LFxyXG4gICAgLyoqIFx1NTM1NVx1NEY4Qlx1ODhDNVx1OTk3MFx1NTY2OCAqL1xyXG4gICAgaW5zdGFuY2U6IEluc3RhbmNlLFxyXG4gICAgLyoqIFx1NEU4Qlx1NEVGNlx1N0VEMVx1NUI5QSA9PiBcdTdFRDFcdTVCOUFcdTUyMzBcdTg4QzVcdTk5NzBcdTU2NjhcdTRFMEEgXHUzMDEwXHU1M0VBXHU3NTI4XHU1NzI4R2FtZVNjcmlwdFx1N0VFN1x1NjI3Rlx1NzY4NFx1NUI1MFx1N0M3Qlx1OEVBQlx1NEUwQVx1MzAxMSAqL1xyXG4gICAgZXZlbnRPbjogRXZlbnRPbixcclxuICAgIC8qKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjYgKi9cclxuICAgIGV2ZW50R2xvYmFsOiBFdmVudEdsb2JhbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcmU7XHJcbiIsICJpbXBvcnQgeyBJbnN0YW5jZSB9IGZyb20gXCIuLi9jb3JlL0luc3RhbmNlXCI7XHJcblxyXG4vKipcclxuICogXHU3NTI4XHU2MjM3XHU0RkUxXHU2MDZGXHJcbiAqL1xyXG5jbGFzcyBVc2VySW5mbyB7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3XHU1NDBEXHU3OUYwICovXHJcbiAgICBuaWNrbmFtZTogc3RyaW5nID0gXCJuYW1lXCI7XHJcbiAgICAvKiogXHU3NTI4XHU2MjM3aWQgKi9cclxuICAgIHVpZDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTc1MjhcdTU0MERcdTU5MzRcdTUwQ0YgKi9cclxuICAgIGF2YXRhcjogc3RyaW5nID0gXCJcIjtcclxuICAgIC8qKiBcdTk0QkJcdTc3RjMgKi9cclxuICAgIGRpYW1vbmQ6IG51bWJlciA9IDk5OTtcclxuICAgIC8qKiBcdTkxRDFcdTVFMDEgKi9cclxuICAgIGdvbGQ6IG51bWJlciA9IDk5OTtcclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLm5pY2tuYW1lID0gXCJcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckluZm8oKTtcclxuIiwgImltcG9ydCB7IEFwaUh0dHAgfSBmcm9tIFwic3JjL2NvbW1vbi9OZXRNYXBzXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tbW9uL1VzZXJJbmZvXCI7XHJcblxyXG4vLyAgTWFpblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5WaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRMYW5kTGF5ZXIsIHRpcHM6XCJcdTYyRDNcdTVDNTVcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZExhbmRMYXllcjogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaWFtb25kTm9kZSwgdGlwczpcIlx1OTRCQlx1NzdGM1x1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZGlhbW9uZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvbGROb2RlLCB0aXBzOlwiXHU5MUQxXHU1RTAxXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb2xkTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YXZhdGFyTm9kZSwgdGlwczpcIlx1NTkzNFx1NTBDRlx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYXZhdGFyTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcblxyXG4gICAgLy8gXHU2NkY0XHU1OTFBXHU1M0MyXHU2NTcwXHU4QkY0XHU2NjBFXHU4QkY3XHU4QkJGXHU5NUVFOiBodHRwczovL2xkYzIubGF5YWJveC5jb20vZG9jLz9uYXY9emgtYXMtMi00LTBcclxuXHJcbiAgICBvbkhkRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImRpYW1vbmRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbW9uZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiZ29sZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb2xkTm9kZS52YWx1ZSA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJhdmF0YXJcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQENvcmUuZXZlbnRPbihBcGlIdHRwLmluaXQpXHJcbiAgICBwcml2YXRlIGdhbWVJbml0KGQ6IE5ldEluaXQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgICAgICBsZXQgYSA9IGQuZGF0YS5sYW5kTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKTtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlQWRkTGFuZExheWVyXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExhbmRMYXllci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInRhc2tcIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNpZ25JblwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNpZ25JblZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuTWFpbFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaG9wXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuU2hvcFZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwiLi9HYW1lU2NyaXB0XCI7XHJcblxyXG5pbXBvcnQgZnMgZnJvbSBcIi4uL3NoYWRlci9wcHBwcC5mc1wiO1xyXG5pbXBvcnQgdnMgZnJvbSBcIi4uL3NoYWRlci92dnZ2LnZzXCI7XHJcblxyXG4vKipcclxuICogc2hhZGVyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFkZXJTcHJpdGVCYXNlIGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2hhZGVySW1hZ2UsIHRpcHM6XCJzaGFkZXJcdTc1MjhcdTc2ODRcdTU2RkVcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIHNoYWRlckltYWdlOiBMYXlhLlNwcml0ZSA9IG51bGw7XHJcblxyXG4gICAgb25IZEVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnNoYWRlckltYWdlLmN1c3RvbVJlbmRlckVuYWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgQ29uZmlnW1wiY3VzdG9tUmVuZGVySURcIl0ucHVzaCh0aGlzLnNoYWRlckltYWdlLnRleHR1cmUuYml0bWFwW1wiX2lkXCJdKTtcclxuXHJcbiAgICAgICAgbGV0IHNoYWRlciA9IG5ldyBMYXlhLlZhbHVlMkQoXHJcbiAgICAgICAgICAgIExheWEuU2hhZGVyRGVmaW5lczJELlRFWFRVUkUyRCxcclxuICAgICAgICAgICAgdGhpcy5zaGFkZXJJbWFnZS50ZXh0dXJlLmJpdG1hcFtcIl9pZFwiXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2hhZGVyLnNoYWRlciA9IG5ldyBMYXlhLlNoYWRlcjJYKFxyXG4gICAgICAgICAgICB2cyxcclxuICAgICAgICAgICAgZnMsXHJcbiAgICAgICAgICAgIExheWEuU2hhZGVyRGVmaW5lczJELlRFWFRVUkUyRCB8IHRoaXMuc2hhZGVySW1hZ2UudGV4dHVyZS5iaXRtYXBbXCJfaWRcIl1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBzaGFkZXJbXCJteVRpbWVcIl0gPSAwLjE7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhZGVySW1hZ2UuY3VzdG9tUmVuZGVyID0gKGNvbnRleHQ6IExheWEuQ29udGV4dCwgeCwgeSkgPT4ge1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdUYXJnZXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRlckltYWdlLnRleHR1cmUgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRlckltYWdlLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFkZXJJbWFnZS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2hhZGVyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGFkZXIgPSBzaGFkZXI7XHJcbiAgICB9XHJcbiAgICBzaGFkZXIgPSB7fTtcclxuICAgIHRpbWU6IG51bWJlciA9IDA7XHJcbiAgICBwb2ludDogbnVtYmVyID0gMDtcclxuICAgIG9uSGRVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lICs9IDAuMTtcclxuICAgICAgICB0aGlzLnNoYWRlcltcIm15VGltZVwiXSA9IHRoaXMudGltZTtcclxuICAgICAgICB0aGlzLnNoYWRlcltcInVfRGlzc29sdmVUaHJlc2hvbGRcIl0gPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgaWYgKHRoaXMucG9pbnQgPiAyMCkgdGhpcy5wb2ludCA9IDA7XHJcbiAgICAgICAgdGhpcy5wb2ludCArPSAxO1xyXG4gICAgICAgIHRoaXMuc2hhZGVyW1widV9wb2ludFwiXSA9IHRoaXMucG9pbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTZENkVcdTUyQThcdTVGMzlcdTdBOTdcdTUyQThcdTc1M0JcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsb2F0Vmlld1Nob3dBbmkgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbiAgICBwcml2YXRlIGVmZmVjdFR3ZWVuT3BlbjogTGF5YS5Ud2VlbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIGVmZmVjdFR3ZWVuQ2xvc2U6IExheWEuVHdlZW4gPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb250ZW50LCB0aXBzOlwiXHU1MTg1XHU1QkI5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTU0MEVcdThDMDNcdTc1MjhcclxuICAgICAqL1xyXG4gICAgZG9PcGVuKCkge31cclxuICAgIC8qKlxyXG4gICAgICogIFx1NTE3M1x1OTVFRFx1NjIxMFx1NTI5Rlx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb0Nsb3NlKCkge31cclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LnNjYWxlKDEsIDEpO1xyXG4gICAgICAgIC8vIGRpYWxvZy5hbHBoYSA9IDAuNjtcclxuICAgICAgICB0aGlzLmVmZmVjdFR3ZWVuT3BlbiA9IExheWEuVHdlZW4uZnJvbShcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICB7IHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLCB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsIHNjYWxlWDogMCwgc2NhbGVZOiAwIH0sXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVZpZXcoKSB7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMub3duZXIgYXMgTGF5YS5WaWV3O1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdFR3ZWVuQ2xvc2UgPSBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgeyB4OiBMYXlhLnN0YWdlLndpZHRoIC8gMiwgeTogTGF5YS5zdGFnZS5oZWlnaHQgLyAyLCBzY2FsZVg6IDAsIHNjYWxlWTogMCB9LFxyXG4gICAgICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5FYXNlLnN0cm9uZ091dCxcclxuICAgICAgICAgICAgICAgIG5ldyBMYXlhLkhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgLy8gKSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5PcGVuICYmIExheWEuVHdlZW4uY2xlYXIodGhpcy5lZmZlY3RUd2Vlbk9wZW4pO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5PcGVuID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVmZmVjdFR3ZWVuQ2xvc2UgJiYgTGF5YS5Ud2Vlbi5jbGVhcih0aGlzLmVmZmVjdFR3ZWVuQ2xvc2UpO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5DbG9zZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCJzcmMvY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9wVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmFscGhhQmcsIHRpcHM6XCJcdTkwMEZcdTY2MEVcdTgwQ0NcdTY2NkZcdTVDNDJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFscGhhQmc6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOml0ZW1MaXN0LCB0aXBzOlwiXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBpdGVtTGlzdDogTGF5YS5MaXN0ID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpidG5Cb3hUb3AsIHRpcHM6XCJcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTUyMTdcdTg4NjhcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJ0bkJveFRvcDogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6Ym90dG9tQm94LCB0aXBzOlwiXHU1RTk1XHU5MEU4XHU2NTcwXHU2MzZFXHU1MjE3XHU4ODY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBib3R0b21Cb3g6IExheWEuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NjU4N1x1NUI1N1x1OEQ0NFx1NkU5MFx1NTIxN1x1ODg2OCAqL1xyXG4gICAgcHJpdmF0ZSBidG5Ub3BSZXNMaXN0OiBzdHJpbmdbXVtdID0gW1xyXG4gICAgICAgIFtcImdhbWUvaW1nX3NlZWRzTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3NlZWRzU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgICAgIFtcImdhbWUvaW1nX3BldE5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19wZXRTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfZm9vZG5Ob3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfZm9vZG5TZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfYmFua05vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19iYW5rU2VsZWN0ZWQucG5nXCJdLFxyXG4gICAgXTtcclxuICAgIC8qKiBcdTk4NzZcdTkwRThcdTUyMDdcdTYzNjJcdTY4MDdcdTdCN0VcdTkwMDlcdTYyRTlcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgdG9wQnRuU2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU3MEI5XHU1MUZCXHU0RTBCXHU2ODA3ICovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0U2VsZWN0SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU1NTQ2XHU1NEMxXHU1MjE3XHU4ODY4XHU4MENDXHU2NjZGXHU3RUI5XHU3NDA2ICovXHJcbiAgICBwcml2YXRlIGl0ZW1TZWxlY3RCZzogc3RyaW5nW10gPSBbXCJnYW1lL2ltZ19wZXRiYWcucG5nXCIsIFwiZ2FtZS9pbWdfcGV0YmFnU2VsZWN0ZWQucG5nXCJdO1xyXG5cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvcEJ0blN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5hbHBoYUJnLmFscGhhID0gMC43NTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtTGlzdCk7XHJcbiAgICAgICAgLy8gdGhpcy5pdGVtTGlzdC5pdGVtUmVuZGVyID0gdGhpcy5saXN0SXRlbTtcclxuXHJcbiAgICAgICAgbGV0IGFyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAzMDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGFyLnB1c2goeyBuYW1lOiB4IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLml0ZW1MaXN0LnNjcm9sbEJhci5oaWRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LmFycmF5ID0gYXI7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC5yZW5kZXJIYW5kbGVyID0gbmV3IExheWEuSGFuZGxlcih0aGlzLCB0aGlzLnVwZGF0ZUl0ZW0pO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnNlbGVjdEhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMub25TZWxlY3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QudlNjcm9sbEJhclNraW4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0KGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXggPSBlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUl0ZW0oY2VsbDogTGF5YS5JbWFnZSwgaW5kZXgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjZWxsKTtcclxuICAgICAgICAvLyBjZWxsLnNldEltZyhjZWxsLmRhdGFTb3VyY2UpO1xyXG4gICAgICAgIChjZWxsLmdldENoaWxkQnlOYW1lKFwiaGJveFwiKS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKSBhcyBMYXlhLkZvbnRDbGlwKS52YWx1ZSA9IGluZGV4O1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT0gdGhpcy5pdGVtTGlzdFNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNlbGwuc2tpbiA9IHRoaXMuaXRlbVNlbGVjdEJnWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaG9wVmlldywgZmFsc2UsIHRydWUsIEZsb2F0Vmlld1Nob3dBbmkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwic2VlZFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicGV0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJmZWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJiYW5rXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9wQnRuSW5kZXggPSB0aGlzLmJ0bkJveFRvcC5nZXRDaGlsZEluZGV4KGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4ICE9IHRvcEJ0bkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3BCdG5TZWxlY3RJbmRleCA9IHRvcEJ0bkluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTk4NzZcdTkwRThcdTYzMDlcdTk0QUVcdTcwQjlcdTUxRkJcdTcwQjlcdTUxRkJcdTcyQjZcdTYwMDFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVUb3BCdG5TdGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYnRuQm94VG9wLm51bUNoaWxkcmVuOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuYnRuQm94VG9wLmdldENoaWxkQXQoeCkgYXMgTGF5YS5JbWFnZSxcclxuICAgICAgICAgICAgICAgIGxiID0gYnRuLmdldENoaWxkQXQoMCkgYXMgTGF5YS5JbWFnZTtcclxuICAgICAgICAgICAgaWYgKHggPT09IHRoaXMudG9wQnRuU2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGJ0bi5za2luID0gXCJnYW1lL2ltZy1tZW51c2VsZWN0ZWQucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBsYi5za2luID0gdGhpcy5idG5Ub3BSZXNMaXN0W3hdWzFdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nLW1lbnVub3JtYWwucG5nXCI7XHJcbiAgICAgICAgICAgICAgICBsYi5za2luID0gdGhpcy5idG5Ub3BSZXNMaXN0W3hdWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUJvdHRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2NkY0XHU2NUIwXHU1RTk1XHU5MEU4XHU1MTg1XHU1QkI5XHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlQm90dG9tKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5ib3R0b21Cb3gubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnRvcEJ0blNlbGVjdEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDApIGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgxKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoMCkgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDIpIGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuXHJcbi8vICBTaWduSW5WaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5WaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbW1vbi9Vc2VySW5mb1wiO1xyXG5pbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiB9IGZyb20gXCIuLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuLi9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IE9ic2VydmFibGVQcm9wZXJ0eSBmcm9tIFwiLi4vY29yZS9PYnNlcnZhYmxlUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwiLi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuLy8gIFRhc2tWaWV3IGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrVmlldyBleHRlbmRzIEdhbWVTY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmltYWdlLCB0aXBzOlwiXHU1RTAzXHU1QzE0XHU3QzdCXHU1NzhCXHU3OTNBXHU0RjhCXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGltYWdlOiBMYXlhLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBnYW1lOiBzdHJpbmcgPSBcIjEyMTIxMlwiO1xyXG5cclxuICAgIEBFdmVudE9uKFwiYWFcIilcclxuICAgIG15RXZlbnQoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWFcIiwgZSwgdGhpcy5pbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZVwiOlxyXG4gICAgICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5jbG9zZShSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuaW1wb3J0IExvYWRWaWV3IGZyb20gXCIuL3ZpZXcvTG9hZFZpZXdcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL0J1dHRvblwiXG5pbXBvcnQgTWFpbFZpZXcgZnJvbSBcIi4vdmlldy9NYWlsVmlld1wiXG5pbXBvcnQgVmlld1Nob3dBbmkgZnJvbSBcIi4vY29tcG9uZW50cy9WaWV3U2hvd0FuaVwiXG5pbXBvcnQgTWFpblZpZXcgZnJvbSBcIi4vdmlldy9NYWluVmlld1wiXG5pbXBvcnQgU2hhZGVyU3ByaXRlQmFzZSBmcm9tIFwiLi9jb3JlL1NoYWRlclNwcml0ZUJhc2VcIlxuaW1wb3J0IFNob3BWaWV3IGZyb20gXCIuL3ZpZXcvU2hvcFZpZXdcIlxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcIi4vY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pXCJcbmltcG9ydCBTaWduSW5WaWV3IGZyb20gXCIuL3ZpZXcvU2lnbkluVmlld1wiXG5pbXBvcnQgVGFza1ZpZXcgZnJvbSBcIi4vdmlldy9UYXNrVmlld1wiXHJcbi8qXHJcbiogXHU2RTM4XHU2MjBGXHU1MjFEXHU1OUNCXHU1MzE2XHU5MTREXHU3RjZFO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj0xMDgwO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9MTkyMDtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwiZml4ZWR3aWR0aFwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwibm9uZVwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJtaWRkbGVcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49dHJ1ZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcbiAgICAgICAgcmVnKFwidmlldy9Mb2FkVmlldy50c1wiLExvYWRWaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9CdXR0b24udHNcIixCdXR0b24pO1xuICAgICAgICByZWcoXCJ2aWV3L01haWxWaWV3LnRzXCIsTWFpbFZpZXcpO1xuICAgICAgICByZWcoXCJjb21wb25lbnRzL1ZpZXdTaG93QW5pLnRzXCIsVmlld1Nob3dBbmkpO1xuICAgICAgICByZWcoXCJ2aWV3L01haW5WaWV3LnRzXCIsTWFpblZpZXcpO1xuICAgICAgICByZWcoXCJjb3JlL1NoYWRlclNwcml0ZUJhc2UudHNcIixTaGFkZXJTcHJpdGVCYXNlKTtcbiAgICAgICAgcmVnKFwidmlldy9TaG9wVmlldy50c1wiLFNob3BWaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pLnRzXCIsRmxvYXRWaWV3U2hvd0FuaSk7XG4gICAgICAgIHJlZyhcInZpZXcvU2lnbkluVmlldy50c1wiLFNpZ25JblZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1Rhc2tWaWV3LnRzXCIsVGFza1ZpZXcpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwiLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vY29tbW9uL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmNsYXNzIE1haW4ge1xyXG4gICAgLyoqIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHU1MjE3XHU4ODY4ICovXHJcbiAgICBzdGF0aWMgY3VzdG9tUmVuZGVySUQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9cdTY4MzlcdTYzNkVJREVcdThCQkVcdTdGNkVcdTUyMURcdTU5Q0JcdTUzMTZcdTVGMTVcdTY0Q0VcclxuICAgICAgICBpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcbiAgICAgICAgZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcbiAgICAgICAgTGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG4gICAgICAgIC8vXHU1MTdDXHU1QkI5XHU1RkFFXHU0RkUxXHU0RTBEXHU2NTJGXHU2MzAxXHU1MkEwXHU4RjdEc2NlbmVcdTU0MEVcdTdGMDBcdTU3M0FcdTY2NkZcclxuICAgICAgICBMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG4gICAgICAgIC8vXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA4XHU5MDFBXHU4RkM3SURFXHU4QkJFXHU3RjZFXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHVGRjBDXHU2MjE2XHU4MDA1dXJsXHU1NzMwXHU1NzQwXHU1ODlFXHU1MkEwZGVidWc9dHJ1ZVx1NTNDMlx1NjU3MFx1RkYwQ1x1NTc0N1x1NTNFRlx1NjI1M1x1NUYwMFx1OEMwM1x1OEJENVx1OTc2Mlx1Njc3Rlx1RkYwOVxyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIilcclxuICAgICAgICAgICAgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG4gICAgICAgIExheWEuYWxlcnRHbG9iYWxFcnJvcih0cnVlKTtcclxuXHJcbiAgICAgICAgLy9cdTZGQzBcdTZEM0JcdThENDRcdTZFOTBcdTcyNDhcdTY3MkNcdTYzQTdcdTUyMzZcdUZGMEN2ZXJzaW9uLmpzb25cdTc1MzFJREVcdTUzRDFcdTVFMDNcdTUyOUZcdTgwRkRcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdUZGMENcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdTRFNUZcdTRFMERcdTVGNzFcdTU0Q0RcdTU0MEVcdTdFRURcdTZENDFcdTdBMEJcclxuICAgICAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXHJcbiAgICAgICAgICAgIFwidmVyc2lvbi5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLFxyXG4gICAgICAgICAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy9cdTZGQzBcdTZEM0JcdTU5MjdcdTVDMEZcdTU2RkVcdTY2MjBcdTVDMDRcdUZGMENcdTUyQTBcdThGN0RcdTVDMEZcdTU2RkVcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTU5ODJcdTY3OUNcdTUzRDFcdTczQjBcdTVDMEZcdTU2RkVcdTU3MjhcdTU5MjdcdTU2RkVcdTU0MDhcdTk2QzZcdTkxQ0NcdTk3NjJcdUZGMENcdTUyMTlcdTRGMThcdTUxNDhcdTUyQTBcdThGN0RcdTU5MjdcdTU2RkVcdTU0MDhcdTk2QzZcdUZGMENcdTgwMENcdTRFMERcdTY2MkZcdTVDMEZcdTU2RkVcclxuICAgICAgICBMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFxyXG4gICAgICAgICAgICBcImZpbGVjb25maWcuanNvblwiLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNvbmZpZ0xvYWRlZCgpIHtcclxuICAgICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTZFMzJcdTY3RDNpZFxyXG4gICAgICAgIENvbmZpZ1tcImN1c3RvbVJlbmRlcklEXCJdID0gW107XHJcblxyXG4gICAgICAgIC8vIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInJlcy9hdWRpby9kcmF3Lm1wM1wiKTtcclxuICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1OTAxQVx1OEZDN1x1OEJCRVx1NTkwN1x1OTc1OVx1OTdGM1x1OTUyRVx1OEJBOVx1OTdGM1x1OTg5MVx1ODFFQVx1NTJBOFx1OERERlx1OTY4Rlx1OEJCRVx1NTkwN1x1OTc1OVx1OTdGM1x1MzAwMlx1OTcwMFx1ODk4MVx1NUMwNnVzZUF1ZGlvTXVzaWNcdThCQkVcdTdGNkVcdTRFM0FmYWxzZVx1MzAwMlxyXG4gICAgICAgIC8vIFNvdW5kTWFuYWdlci51c2VBdWRpb011c2ljPWZhbHNlXHVGRjFCXHJcbiAgICAgICAgLy8gTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKFJlcy5hdWRpb3Mud2luKTtcclxuXHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5vcGVuKFJlcy52aWV3cy5Mb2FkRGlhbG9nLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuc2V0TG9hZGluZ1BhZ2UoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1x1NTQwRVx1NjcxRlx1NEYxOFx1NTMxNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDk5OTk5OTk5OTk5OTk5OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgUmVzLnNjZW5lcyxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCBlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuLy9cdTZGQzBcdTZEM0JcdTU0MkZcdTUyQThcdTdDN0JcclxubmV3IE1haW4oKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLE1BQVc7QUFBWCxZQUFXLFlBQVg7QUFFSCxrQ0FBZ0I7QUFBQSxLQUZGOzs7QUNFVixNQUFLO0FBQUwsWUFBSyxRQUFMO0FBR0EsMkJBQWE7QUFFYix5QkFBVztBQUVYLHlCQUFXO0FBRVgseUJBQVc7QUFFWCwyQkFBYTtBQUViLHlCQUFXO0FBQUEsS0FiTjtBQWdCTCxNQUFLO0FBQUwsWUFBSyxTQUFMO0FBR0EscUJBQU07QUFFTix1QkFBUTtBQUVSLHNCQUFPO0FBRVAsb0JBQUs7QUFFTCxzQkFBTztBQUVQLHNCQUFPO0FBQUEsS0FiRjtBQW1CTCxNQUFNLFNBQVM7QUFBQSxJQUNkO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0c7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBO0FBTVosTUFBTSxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUE7QUFHSixNQUFPLGNBQVE7OztBQzlFZixNQUFNLGNBQWMsSUFBSSxLQUFLO0FBS3RCLE1BQU0sYUFBc0QsSUFBSTtBQUdoRSxtQkFBaUIsTUFBYztBQUNsQyxXQUFPLENBQUMsUUFBYSxhQUFxQixlQUFtQztBQUN6RSxpQkFBVyxJQUFJLFFBQVEsRUFBRSxLQUFLLE1BQU0sSUFBSSxXQUFXO0FBQUE7QUFBQTtBQUkzRCxNQUFPLHNCQUFROzs7QUNqQmYsa0NBQXlDLEtBQUssT0FBTztBQUFBLElBQXJEO0FBQUE7QUFFVyxnQkFBaUI7QUFFakIscUJBQXNCO0FBRXJCLHVCQUEwQjtBQUFBO0FBQUEsSUFLbEMsU0FBUztBQUFBO0FBQUEsSUFJVCxVQUFVO0FBQUE7QUFBQSxJQUVWLFdBQWlCO0FBQ2IsVUFBSSxTQUFTLEtBQUs7QUFFbEIsV0FBSyxHQUFHLFFBQVE7QUFFaEIsV0FBSyxVQUFVLEtBQ1gsS0FBSyxNQUFNLEdBQ1AsS0FBSyxJQUNMLEVBQUUsT0FBTyxRQUNULEtBQ0EsTUFDQSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLFVBQ3hDLEdBQ0EsT0FDQTtBQUlSLFdBQUssUUFBUSxTQUFTLENBQUMsS0FBSyxRQUFRO0FBQ3BDLFdBQUssVUFBVSxLQUNYLEtBQUssTUFBTSxHQUNQLEtBQUssU0FDTCxFQUFFLFFBQVEsS0FDVixLQUNBLEtBQUssS0FBSyxTQUNWLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsVUFDeEMsR0FDQSxPQUNBO0FBQUE7QUFBQSxJQUtaLFlBQVk7QUFDUixVQUFJLFNBQVMsS0FBSztBQUNsQixhQUFPLElBQUksUUFBUSxDQUFDLFlBQVk7QUFDNUIsYUFBSyxVQUFVLEtBQ1gsS0FBSyxNQUFNLEdBQ1AsS0FBSyxJQUNMLEVBQUUsT0FBTyxLQUNULEtBQ0EsTUFDQSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLFVBQ3hDLEdBQ0EsT0FDQSxRQUVKLEtBQUssTUFBTSxHQUNQLEtBQUssU0FDTCxFQUFFLFFBQVEsQ0FBQyxLQUFLLFFBQVEsVUFDeEIsS0FDQSxNQUNBLElBQUksS0FBSyxRQUNMLE1BQ0EsTUFBTTtBQUNGLGVBQUs7QUFDTCxrQkFBUTtBQUFBLFdBRVosQ0FBQyxVQVdMLEdBQ0EsT0FDQTtBQUFBO0FBQUE7QUFBQSxJQU1oQixZQUFrQjtBQUNkLFdBQUssVUFBVSxRQUFRLENBQUMsTUFBTTtBQUMxQixhQUFLLE1BQU0sTUFBTTtBQUFBO0FBRXJCLFdBQUssVUFBVSxTQUFTO0FBQUE7QUFBQTs7O0FDL0ZoQyxNQUFNLGVBQThDLElBQUk7QUFLeEQsTUFBSSxhQUFxQjtBQUtsQixvQkFBa0IsUUFBYSxLQUFhO0FBQy9DLFFBQUksQ0FBQyxhQUFhLElBQUksT0FBTyxpQkFBaUI7QUFDMUM7QUFDQSxhQUFPLGlCQUFpQjtBQUN4QixtQkFBYSxJQUFJLFlBQVksSUFBSTtBQUFBO0FBRXJDLFdBQU8sT0FBTyxhQUFhLElBQUk7QUFBQTs7O0FDUW5DLE1BQU0sV0FBK0M7QUFLOUMsMEJBQWtCO0FBQUEsSUFTckIsS0FDSSxLQUNBLE9BQXFCO0FBQUEsTUFDakIsWUFBWTtBQUFBLE1BQ1osVUFBVTtBQUFBLE1BQ1YsZUFBZTtBQUFBLE1BQ2YsZUFBZTtBQUFBLE9BRWY7QUFDSixVQUFJLENBQUMsS0FBSztBQUNOLGdCQUFRLEtBQUs7QUFDYjtBQUFBO0FBR0osVUFBSSxLQUFLLFVBQVU7QUFDZixhQUFLLEtBQUssZ0JBQWdCLE1BQU0sS0FBSztBQUNyQyxZQUFJLFFBQVEsWUFBSSxNQUFNLFlBQVk7QUFDOUIsZUFBSyxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU07QUFDaEMsaUJBQUssS0FBSyxnQkFBZ0IsS0FBSztBQUFBO0FBQUE7QUFBQTtBQUszQyxXQUFLLEtBQUssS0FDTixLQUNBLEtBQUssWUFDTCxLQUFLLE1BQ0wsS0FBSyxRQUFRLE9BQU8sTUFBTSxDQUFDLE1BQU07QUFDN0IsWUFBSSxPQUFPLFlBQUksTUFBTTtBQUFZLG1CQUFTLEtBQUssRUFBRSxLQUFVLE1BQU07QUFDakUsYUFBSyxZQUFZLEtBQUssU0FBUztBQUMvQixnQkFBUSxJQUNKLGlCQUFpQixJQUFJLE1BQU0sYUFBYSxPQUN4QywwREFDQTtBQUFBLFVBR1IsS0FBSztBQUFBO0FBQUEsSUFVUCxNQUNGLElBSUY7QUFBQSxpREFKRSxLQUNBLE1BQWUsT0FDZixVQUFtQixPQUNuQixTQUF1RCxhQUN6RDtBQUVFLGtCQUFVO0FBRVYsWUFBSTtBQUNKLGlCQUFTLElBQUksU0FBUyxTQUFTLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0MsY0FBSSxRQUFRLFNBQVMsR0FBRyxLQUFLO0FBQ3pCLGdCQUFJLElBQUksU0FBUztBQUNqQixxQkFBUyxPQUFPLEdBQUc7QUFFbkIsbUJBQU8sRUFBRSxLQUFLLGFBQWE7QUFDM0IsZ0JBQUksTUFBTTtBQUNOLG1CQUFLLFlBQVksS0FBSyxNQUFNO0FBQ3hCLG9CQUFJLFNBQVM7QUFDVCxvQkFBRSxLQUFLLFFBQVE7QUFDZix1QkFBSyxhQUFhLEtBQUs7QUFBQSx1QkFDcEI7QUFDSCxvQkFBRSxLQUFLO0FBQ1AsdUJBQUssYUFBYTtBQUFBO0FBQUE7QUFBQSxtQkFHdkI7QUFDSCxrQkFBSSxTQUFTO0FBQ1Qsa0JBQUUsS0FBSyxRQUFRO0FBQ2YscUJBQUssYUFBYSxLQUFLO0FBQUEscUJBQ3BCO0FBQ0gsa0JBQUUsS0FBSztBQUNQLHFCQUFLLGFBQWE7QUFBQTtBQUFBO0FBSTFCLGdCQUFJLENBQUM7QUFBSztBQUFBO0FBQUE7QUFLbEIsWUFBSSxXQUFXO0FBQ2YsaUJBQVMsSUFBSSxTQUFTLFNBQVMsR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQyxjQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssUUFBUTtBQUMxQjtBQUFBO0FBQUE7QUFJUixZQUFJLGFBQWEsU0FBUyxRQUFRO0FBQzlCLG1CQUFTLFNBQVM7QUFDbEIsZUFBSyxLQUFLLFlBQUksTUFBTTtBQUFBO0FBR3hCLGdCQUFRLElBQUk7QUFBQTtBQUFBO0FBQUEsSUFHUixhQUFhLEtBQWEsVUFBbUIsT0FBTztBQUN4RCxjQUFRLElBQ0osVUFBVSxVQUFVLFlBQVksZUFBZSxJQUFJLE1BQU0sYUFBYSxPQUN0RSwwREFDQTtBQUFBO0FBQUEsSUFPUixnQkFBZ0I7QUFDWixlQUFTLFNBQVM7QUFBQTtBQUFBO0FBekhmO0FBQUEsSUFETjtBQUFBLEtBREUsYUFFSTs7O0FDbENYLE1BQU0sVUFBZ0MsSUFBSTtBQUUxQyxnQ0FBa0Q7QUFBQSxJQUFsRCxjQUZBO0FBR1ksdUJBQStDLElBQUk7QUFBQTtBQUFBLElBTTNELE1BQW9CLEtBQVEsUUFBYztBQUN0QyxVQUFJLENBQUMsUUFBUSxJQUFJLFNBQVM7QUFDdEIsZ0JBQVEsSUFBSSxRQUFRO0FBQUE7QUFHeEIsVUFBSSxXQUFXLEtBQUs7QUFDcEIsVUFBSSxDQUFDLFNBQVMsSUFBSSxNQUFNO0FBQ3BCLGlCQUFTLElBQUksS0FBSyxJQUFJO0FBQUE7QUFRMUIsWUFBTSxVQUFVLENBQXNCLEtBQW1CLFNBQW1CO0FBQ3hFLFlBQUksT0FBTyxTQUFTLElBQUk7QUFDeEIsWUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNO0FBQ2hCLGVBQUssSUFBSSxLQUFLO0FBQ2QsY0FBSSxJQUFJLE1BQU0sUUFBUSxRQUFXO0FBQzdCLGdCQUFJLE1BQU0sT0FBTyxJQUFJO0FBQ3JCLG1CQUFPLGVBQWUsS0FBSyxLQUFLO0FBQUEsY0FDNUIsY0FBYztBQUFBLGNBQ2QsWUFBWTtBQUFBLGNBQ1osS0FBSyxDQUFDLE1BQU07QUFDUixxQkFBSyxNQUFNLE9BQU87QUFDbEIscUJBQUssSUFBSSxLQUFLLFFBQVEsQ0FBQyxNQUFNO0FBQ3pCLG9CQUFFO0FBQUE7QUFBQTtBQUFBLGNBR1YsS0FBSyxXQUFZO0FBQ2IsdUJBQU8sS0FBSyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNbEMsYUFBSyxJQUFJLEtBQUssS0FBSztBQUNuQixnQkFBUSxJQUFJLFFBQVEsS0FBSztBQUN6QixhQUFLLElBQUk7QUFDVCxlQUFPLEVBQUUsS0FBSztBQUFBO0FBR2xCLGFBQU8sRUFBRSxLQUFLO0FBQUE7QUFBQSxJQVFsQixlQUFlLFFBQWMsTUFBVyxNQUFNO0FBNURsRDtBQTZEUSxvQkFBUSxJQUFJLFlBQVosbUJBQXFCLFFBQVEsQ0FBQyxNQUFNO0FBN0Q1QztBQThEWSxZQUFJLEtBQUs7QUFDTCxzQkFBSyxjQUFMLG9CQUFnQixJQUFJLEtBQUssUUFBUSxDQUFDLE9BQU87QUFDckMsZ0JBQUksVUFBVSxHQUFHLFFBQVE7QUFDekIsZ0JBQUksVUFBVTtBQUFJLGlCQUFHLE9BQU8sU0FBUztBQUFBO0FBQUEsZUFFdEM7QUFDSCxxQkFBSyxjQUFMLG1CQUFnQixRQUFRLENBQUMsTUFBTTtBQUMzQixjQUFFLFFBQVEsQ0FBQyxPQUFPO0FBQ2Qsa0JBQUksVUFBVSxHQUFHLFFBQVE7QUFDekIsa0JBQUksVUFBVTtBQUFJLG1CQUFHLE9BQU8sU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVc3RCxNQUFPLDZCQUFRLElBQUk7OztBQzVFbkIsaUNBQXdDLEtBQUssT0FBTztBQUFBLElBQ2hELGNBQWM7QUFDVjtBQUVBLFVBQUksWUFBWSxXQUFXLElBQUksS0FBSyxZQUFZO0FBQ2hELG1CQUFhLG9CQUFZLEdBQUcsVUFBVSxLQUFLLE1BQU0sVUFBVTtBQUFBO0FBQUEsSUFPL0QsVUFBVTtBQUNOLFdBQUs7QUFBQTtBQUFBLElBTVQsWUFBWTtBQUFBO0FBQUEsSUFNWixXQUFXO0FBQ1AsV0FBSztBQUFBO0FBQUEsSUFPVCxhQUFhO0FBQUE7QUFBQSxJQU1iLFVBQVU7QUFDTixXQUFLO0FBQUE7QUFBQSxJQU1ULFlBQVk7QUFBQTtBQUFBLElBTVosV0FBVztBQUNQLFdBQUs7QUFBQTtBQUFBLElBT1QsYUFBYTtBQUFBO0FBQUEsSUFNYixZQUFZO0FBQ1IsV0FBSztBQUFBO0FBQUEsSUFPVCxjQUFjO0FBQUE7QUFBQSxJQU1kLFlBQVk7QUFDUiwwQkFBWSxhQUFhO0FBQ3pCLFdBQUs7QUFDTCxXQUFLLE1BQU0sS0FBSyxHQUFHLE1BQU0sTUFBTTtBQUUzQixtQ0FBbUIsZUFBZTtBQUVsQyxZQUFJLE9BQU8sT0FBTyxvQkFBb0I7QUFDdEMsaUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLElBQUksR0FBRyxLQUFLO0FBQ3pDLGVBQUssS0FBSyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFTNUIsY0FBYztBQUFBO0FBQUE7OztBQ3BHbEIsK0JBQXNDLFdBQVc7QUFBQSxJQUFqRCxjQUpBO0FBSUE7QUFFVyx1QkFBd0I7QUFBQTtBQUFBLElBRS9CLFVBQVU7QUFBQTtBQUFBLElBSVYsV0FBaUI7QUFFYiwwQkFBWSxHQUFHLFVBQVUsZUFBZSxNQUFNLEtBQUs7QUFDbkQsV0FBSyxVQUFVLE9BQU87QUFBQTtBQUFBLElBR2xCLGFBQWEsR0FBRztBQUNwQixXQUFLLFVBQVUsT0FBTyxXQUFZLEtBQUksS0FBSyxRQUFRO0FBQUE7QUFBQSxJQUd2RCxZQUFrQjtBQUNkLDBCQUFZLElBQUksVUFBVSxlQUFlLE1BQU0sS0FBSztBQUFBO0FBQUE7OztBQ3ZCNUQsNkJBQW9DLEtBQUssT0FBTztBQUFBLElBQWhEO0FBQUE7QUFNWSxxQkFBVTtBQUVWLHNCQUFtQjtBQUFBO0FBQUEsSUFLM0IsV0FBaUI7QUFFYixNQUFDLEtBQUssTUFBc0IsZUFBZTtBQUMzQyxXQUFLLFlBQWEsS0FBSyxNQUFzQjtBQUM3QyxXQUFLLFlBQWEsS0FBSyxNQUFzQjtBQUFBO0FBQUEsSUFHakQsY0FBYztBQUNWLFdBQUssUUFBUSxLQUFLO0FBQ2xCLFdBQUssT0FBTyxLQUFLO0FBQUE7QUFBQSxJQUdyQixhQUFhO0FBQ1QsV0FBSyxRQUFRLEtBQUs7QUFDbEIsV0FBSyxPQUFPO0FBQUE7QUFBQSxJQUVoQixZQUFZO0FBQ1IsV0FBSyxRQUFRLEtBQUs7QUFDbEIsV0FBSyxPQUFPO0FBQUE7QUFBQSxJQUdSLE9BQU8sT0FBZTtBQUMxQixVQUFJLENBQUMsS0FBSztBQUFTO0FBQ25CLFdBQUssTUFBTSxHQUNQLEtBQUssT0FDTCxFQUFFLFFBQVEsUUFBUSxLQUFLLFdBQVcsUUFBUSxRQUFRLEtBQUssYUFDdkQsS0FDQSxLQUFLLEtBQUssU0FDVixNQUNBLEdBQ0EsT0FDQTtBQUFBO0FBQUEsSUFJQSxRQUFRLE1BQWM7QUFDMUIsVUFBSSxDQUFDO0FBQU07QUFDWCxNQUFDLEtBQUssTUFBcUIsT0FBTztBQUFBO0FBQUEsSUFHdEMsWUFBa0I7QUFBQTtBQUFBOzs7QUNoRHRCLCtCQUFzQyxXQUFXO0FBQUEsSUFDN0MsUUFBUSxHQUFlO0FBQ25CLGNBQVEsRUFBRSxPQUFPO0FBQUEsYUFDUjtBQUNELHNCQUFZLEtBQUssTUFBTSxZQUFJLE1BQU07QUFDakM7QUFBQTtBQUFBO0FBQUE7OztBQ1BULE1BQVc7QUFBWCxZQUFXLFVBQVg7QUFFSCx1QkFBTztBQUFBLEtBRk87OztBQ0dsQixNQUFNLE9BQU87QUFBQSxJQUVULG9CQUFvQjtBQUFBLElBRXBCLE1BQU0sWUFBWTtBQUFBLElBRWxCLFlBQVk7QUFBQSxJQUVaLFVBQVU7QUFBQSxJQUVWLFNBQVM7QUFBQSxJQUVULGFBQWE7QUFBQTtBQUdqQixNQUFPLGVBQVE7OztBQ2hCZix1QkFBZTtBQUFBLElBQWYsY0FMQTtBQU9JLHNCQUFtQjtBQUVuQixpQkFBYztBQUVkLG9CQUFpQjtBQUVqQixxQkFBa0I7QUFFbEIsa0JBQWU7QUFBQTtBQUFBLElBRWYsUUFBUTtBQUNKLFdBQUssV0FBVztBQUFBO0FBQUE7QUFHeEIsTUFBTyxtQkFBUSxJQUFJOzs7QUNmbkIsK0JBQXNDLGFBQUssV0FBVztBQUFBLElBQXRELGNBTkE7QUFNQTtBQUVZLDBCQUF5QjtBQUd6Qix5QkFBNkI7QUFFN0Isc0JBQTBCO0FBRTFCLHdCQUE0QjtBQUFBO0FBQUEsSUFJcEMsYUFBbUI7QUFDZixtQkFBSyxtQkFDQSxNQUFNLGtCQUFVLE1BQ2hCLElBQUksV0FBVyxDQUFDLE1BQU07QUFDbkIsYUFBSyxZQUFZLFFBQVE7QUFBQSxTQUU1QixJQUFJLFFBQVEsQ0FBQyxNQUFNO0FBQ2hCLGFBQUssU0FBUyxRQUFRO0FBQUEsU0FFekIsSUFBSSxVQUFVLENBQUMsTUFBTTtBQUNsQixhQUFLLFdBQVcsT0FBTztBQUFBO0FBQUE7QUFBQSxJQUszQixTQUFTLEdBQVk7QUFDekIsY0FBUSxJQUFJO0FBQ1osVUFBSSxJQUFJLEVBQUUsS0FBSztBQUFBO0FBQUEsSUFHbkIsUUFBUSxHQUFlO0FBQ25CLGNBQVEsSUFBSSxFQUFFLE9BQU87QUFDckIsY0FBUSxFQUFFLE9BQU87QUFBQSxhQUNSO0FBQ0QsZUFBSyxhQUFhLFVBQVU7QUFDNUI7QUFBQSxhQUNDO0FBQ0QsdUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTTtBQUN6QjtBQUFBLGFBQ0M7QUFDRCx1QkFBSyxLQUFLLEtBQUssWUFBSSxNQUFNO0FBQ3pCO0FBQUEsYUFDQztBQUNELHVCQUFLLEtBQUssS0FBSyxZQUFJLE1BQU07QUFDekI7QUFBQSxhQUNDO0FBQ0QsdUJBQUssS0FBSyxLQUFLLFlBQUksTUFBTTtBQUN6QjtBQUFBO0FBQUE7QUFBQTtBQXRCSjtBQUFBLElBRFAsYUFBSyxRQUFRLFFBQVE7QUFBQSxLQUNkLEFBNUJaLFNBNEJZOzs7Ozs7Ozs7QUMxQlosdUNBQThDLFdBQVc7QUFBQSxJQUF6RCxjQVJBO0FBUUE7QUFFWSx5QkFBMkI7QUFtQ25DLG9CQUFTO0FBQ1Qsa0JBQWU7QUFDZixtQkFBZ0I7QUFBQTtBQUFBLElBbkNoQixhQUFhO0FBQ1QsV0FBSyxZQUFZLHFCQUFxQjtBQUV0QztBQUVBLGFBQU8sa0JBQWtCLEtBQUssS0FBSyxZQUFZLFFBQVEsT0FBTztBQUU5RCxVQUFJLFNBQVMsSUFBSSxLQUFLLFFBQ2xCLEtBQUssZ0JBQWdCLFdBQ3JCLEtBQUssWUFBWSxRQUFRLE9BQU87QUFFcEMsYUFBTyxTQUFTLElBQUksS0FBSyxTQUNyQixjQUNBLGVBQ0EsS0FBSyxnQkFBZ0IsWUFBWSxLQUFLLFlBQVksUUFBUSxPQUFPO0FBS3JFLFdBQUssWUFBWSxlQUFlLENBQUMsU0FBdUIsR0FBRyxNQUFNO0FBQzdELGdCQUFRLFdBQ0osS0FBSyxZQUFZLFNBQ2pCLEdBQ0EsR0FDQSxLQUFLLFlBQVksT0FDakIsS0FBSyxZQUFZLFFBQ2pCLE1BQ0E7QUFBQTtBQUlSLFdBQUssU0FBUztBQUFBO0FBQUEsSUFLbEIsYUFBYTtBQUNULFdBQUssUUFBUTtBQUNiLFdBQUssT0FBTyxZQUFZLEtBQUs7QUFDN0IsV0FBSyxPQUFPLHlCQUF5QixLQUFLO0FBQzFDLFVBQUksS0FBSyxRQUFRO0FBQUksYUFBSyxRQUFRO0FBQ2xDLFdBQUssU0FBUztBQUNkLFdBQUssT0FBTyxhQUFhLEtBQUs7QUFBQTtBQUFBOzs7QUNuRHRDLHVDQUE4QyxLQUFLLE9BQU87QUFBQSxJQU90RCxjQUFjO0FBQ1Y7QUFQSSw2QkFBOEI7QUFDOUIsOEJBQStCO0FBR2hDLHFCQUFzQjtBQUFBO0FBQUEsSUFTN0IsU0FBUztBQUFBO0FBQUEsSUFJVCxVQUFVO0FBQUE7QUFBQSxJQUVWLFdBQWlCO0FBQ2IsVUFBSSxTQUFTLEtBQUs7QUFDbEIsV0FBSyxRQUFRLE1BQU0sR0FBRztBQUV0QixXQUFLLGtCQUFrQixLQUFLLE1BQU0sS0FDOUIsS0FBSyxTQUNMLEVBQUUsR0FBRyxLQUFLLE1BQU0sUUFBUSxHQUFHLEdBQUcsS0FBSyxNQUFNLFNBQVMsR0FBRyxRQUFRLEdBQUcsUUFBUSxLQUN4RSxLQUNBLEtBQUssS0FBSyxTQUNWLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsVUFDeEMsR0FDQSxPQUNBO0FBQUE7QUFBQSxJQUlSLFlBQVk7QUFDUixVQUFJLFNBQVMsS0FBSztBQUNsQixhQUFPLElBQUksUUFBUSxDQUFDLFlBQVk7QUFDNUIsYUFBSyxtQkFBbUIsS0FBSyxNQUFNLEdBQy9CLEtBQUssU0FDTCxFQUFFLEdBQUcsS0FBSyxNQUFNLFFBQVEsR0FBRyxHQUFHLEtBQUssTUFBTSxTQUFTLEdBQUcsUUFBUSxHQUFHLFFBQVEsS0FDeEUsS0FDQSxLQUFLLEtBQUssV0FDVixJQUFJLEtBQUssUUFDTCxNQUNBLE1BQU07QUFDRixlQUFLO0FBQ0wsa0JBQVE7QUFBQSxXQUVaLENBQUMsVUFXTCxHQUNBLE9BQ0E7QUFBQTtBQUFBO0FBQUEsSUFLWixZQUFrQjtBQUNkLFdBQUssbUJBQW1CLEtBQUssTUFBTSxNQUFNLEtBQUs7QUFDOUMsV0FBSyxrQkFBa0I7QUFDdkIsV0FBSyxvQkFBb0IsS0FBSyxNQUFNLE1BQU0sS0FBSztBQUMvQyxXQUFLLG1CQUFtQjtBQUFBO0FBQUE7OztBQ3RFaEMsK0JBQXNDLFdBQVc7QUFBQSxJQUFqRCxjQUxBO0FBS0E7QUFFWSxxQkFBc0I7QUFFdEIsc0JBQXNCO0FBRXRCLHVCQUF3QjtBQUV4Qix1QkFBdUI7QUFHdkIsMkJBQTRCO0FBQUEsUUFDaEMsQ0FBQyw0QkFBNEI7QUFBQSxRQUM3QixDQUFDLDBCQUEwQjtBQUFBLFFBQzNCLENBQUMsNEJBQTRCO0FBQUEsUUFDN0IsQ0FBQywyQkFBMkI7QUFBQTtBQUd4QiwrQkFBNEI7QUFFNUIsaUNBQThCO0FBRTlCLDBCQUF5QixDQUFDLHVCQUF1QjtBQUFBO0FBQUEsSUFFekQsYUFBYTtBQUFBO0FBQUEsSUFFYixZQUFZO0FBQ1IsV0FBSztBQUNMLFdBQUssUUFBUSxRQUFRO0FBRXJCLGNBQVEsSUFBSSxLQUFLO0FBR2pCLFVBQUksS0FBSztBQUNULGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQ3pCLFdBQUcsS0FBSyxFQUFFLE1BQU07QUFBQTtBQUdwQixXQUFLLFNBQVMsUUFBUTtBQUN0QixXQUFLLFNBQVMsZ0JBQWdCLElBQUksS0FBSyxRQUFRLE1BQU0sS0FBSztBQUUxRCxXQUFLLFNBQVMsZ0JBQWdCLElBQUksS0FBSyxRQUFRLE1BQU0sS0FBSztBQUMxRCxXQUFLLFNBQVMsaUJBQWlCO0FBQUE7QUFBQSxJQUduQyxTQUFTLEdBQUc7QUFDUixjQUFRLElBQUk7QUFDWixXQUFLLHNCQUFzQjtBQUFBO0FBQUEsSUFHL0IsV0FBVyxNQUFrQixPQUFPO0FBR2hDLE1BQUMsS0FBSyxlQUFlLFFBQVEsZUFBZSxPQUF5QixRQUFRO0FBRTdFLFVBQUksU0FBUyxLQUFLLHFCQUFxQjtBQUNuQyxhQUFLLE9BQU8sS0FBSyxhQUFhO0FBQUEsYUFDM0I7QUFDSCxhQUFLLE9BQU8sS0FBSyxhQUFhO0FBQUE7QUFBQTtBQUFBLElBSXRDLFFBQVEsR0FBZTtBQUNuQixjQUFRLEVBQUUsT0FBTztBQUFBLGFBQ1I7QUFDRCxzQkFBWSxLQUFLLE1BQU0sWUFBSSxNQUFNLFVBQVUsT0FBTyxNQUFNO0FBQ3hEO0FBQUEsYUFFQztBQUFBLGFBQ0E7QUFBQSxhQUNBO0FBQUEsYUFDQTtBQUNELGNBQUksY0FBYyxLQUFLLFVBQVUsY0FBYyxFQUFFO0FBQ2pELGNBQUksS0FBSyxxQkFBcUIsYUFBYTtBQUN2QyxpQkFBSyxvQkFBb0I7QUFDekIsaUJBQUs7QUFBQTtBQUdUO0FBQUE7QUFBQTtBQUFBLElBT0osb0JBQW9CO0FBQ3hCLGVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxVQUFVLGFBQWEsS0FBSztBQUNqRCxZQUFJLE1BQU0sS0FBSyxVQUFVLFdBQVcsSUFDaEMsS0FBSyxJQUFJLFdBQVc7QUFDeEIsWUFBSSxNQUFNLEtBQUssbUJBQW1CO0FBQzlCLGNBQUksT0FBTztBQUNYLGFBQUcsT0FBTyxLQUFLLGNBQWMsR0FBRztBQUFBLGVBQzdCO0FBQ0gsY0FBSSxPQUFPO0FBQ1gsYUFBRyxPQUFPLEtBQUssY0FBYyxHQUFHO0FBQUE7QUFBQTtBQUl4QyxXQUFLO0FBQUE7QUFBQSxJQU1ELGVBQWU7QUFDbkIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFVBQVUsYUFBYSxLQUFLO0FBQ2pELFFBQUMsS0FBSyxVQUFVLFdBQVcsR0FBZ0IsVUFBVTtBQUFBO0FBR3pELGNBQVEsS0FBSztBQUFBLGFBQ0o7QUFDRCxVQUFDLEtBQUssVUFBVSxXQUFXLEdBQWdCLFVBQVU7QUFDckQ7QUFBQSxhQUNDO0FBQ0QsVUFBQyxLQUFLLFVBQVUsV0FBVyxHQUFnQixVQUFVO0FBQ3JEO0FBQUEsYUFDQztBQUNELFVBQUMsS0FBSyxVQUFVLFdBQVcsR0FBZ0IsVUFBVTtBQUNyRDtBQUFBLGFBQ0M7QUFDRCxVQUFDLEtBQUssVUFBVSxXQUFXLEdBQWdCLFVBQVU7QUFDckQ7QUFBQTtBQUFBO0FBQUE7OztBQ3pIaEIsaUNBQXdDLFdBQVc7QUFBQSxJQUMvQyxRQUFRLEdBQWU7QUFDbkIsY0FBUSxFQUFFLE9BQU87QUFBQSxhQUNSO0FBQ0Qsc0JBQVksS0FBSyxNQUFNLFlBQUksTUFBTTtBQUNqQztBQUFBO0FBQUE7QUFBQTs7O0FDRmhCLCtCQUFzQyxXQUFXO0FBQUEsSUFBakQsY0FSQTtBQVFBO0FBRVcsbUJBQW9CO0FBRTNCLGtCQUFlO0FBQUE7QUFBQSxJQUdmLFFBQVEsR0FBRztBQUNQLGNBQVEsSUFBSSxNQUFNLEdBQUcsS0FBSztBQUFBO0FBQUEsSUFHOUIsUUFBUSxHQUFHO0FBQ1AsY0FBUSxFQUFFLE9BQU87QUFBQSxhQUNSO0FBQ0Qsc0JBQVksS0FBSyxNQUFNLFlBQUksTUFBTTtBQUNqQztBQUFBO0FBQUE7QUFBQTtBQVJaO0FBQUEsSUFEQyxRQUFRO0FBQUEsS0FDVCxBQVBKLFNBT0k7OztBQ0RKLHlCQUErQjtBQUFBLElBYTNCLGNBQWE7QUFBQTtBQUFBLFdBQ04sT0FBTTtBQUNULFVBQUksTUFBZ0IsS0FBSyxXQUFXO0FBQ3BDLFVBQUksb0JBQW1CO0FBQ3ZCLFVBQUksd0JBQXVCO0FBQzNCLFVBQUksb0JBQW1CO0FBQ3ZCLFVBQUksNkJBQTRCO0FBQ2hDLFVBQUksb0JBQW1CO0FBQ3ZCLFVBQUksNEJBQTJCO0FBQy9CLFVBQUksb0JBQW1CO0FBQ3ZCLFVBQUksa0NBQWlDO0FBQ3JDLFVBQUksc0JBQXFCO0FBQ3pCLFVBQUksb0JBQW1CO0FBQUE7QUFBQTtBQXhCcEIsRUFEWCxXQUNXLFFBQWE7QUFDYixFQUZYLFdBRVcsU0FBYztBQUNkLEVBSFgsV0FHVyxZQUFpQjtBQUNqQixFQUpYLFdBSVcsYUFBa0I7QUFDbEIsRUFMWCxXQUtXLFNBQWM7QUFDZCxFQU5YLFdBTVcsU0FBYztBQUNkLEVBUFgsV0FPVyxhQUFlO0FBQ2YsRUFSWCxXQVFXLFlBQWlCO0FBQ2pCLEVBVFgsV0FTVyxRQUFjO0FBQ2QsRUFWWCxXQVVXLE9BQWE7QUFDYixFQVhYLFdBV1csZUFBcUI7QUFDckIsRUFaWCxXQVlXLG9CQUEwQjtBQWdCckMsYUFBVzs7O0FDcENYLG1CQUFXO0FBQUEsSUFJUCxjQUFjO0FBRVYsVUFBSSxPQUFPO0FBQVcsZUFBTyxLQUFLLFdBQVcsT0FBTyxXQUFXO0FBQUE7QUFDMUQsYUFBSyxLQUFLLFdBQVcsT0FBTyxXQUFXLFFBQVEsS0FBSztBQUN6RCxXQUFLLGNBQWMsS0FBSyxXQUFXO0FBQ25DLFdBQUssaUJBQWlCLEtBQUssY0FBYztBQUN6QyxXQUFLLE1BQU0sWUFBWSxXQUFXO0FBQ2xDLFdBQUssTUFBTSxhQUFhLFdBQVc7QUFDbkMsV0FBSyxNQUFNLFNBQVMsV0FBVztBQUMvQixXQUFLLE1BQU0sU0FBUyxXQUFXO0FBRS9CLFdBQUssSUFBSSxvQkFBb0IsV0FBVztBQUd4QyxVQUFJLFdBQVcsU0FBUyxLQUFLLE1BQU0sZUFBZSxZQUFZO0FBQzFELGFBQUs7QUFDVCxVQUFJLFdBQVcsZ0JBQWdCLEtBQUs7QUFBcUIsYUFBSyxvQkFBb0I7QUFDbEYsVUFBSSxXQUFXO0FBQU0sYUFBSyxLQUFLO0FBQy9CLFdBQUssaUJBQWlCO0FBR3RCLFdBQUssZ0JBQWdCLE9BQ2pCLGdCQUNBLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxrQkFDL0IsS0FBSyxnQkFBZ0I7QUFBQTtBQUFBLElBSTdCLGtCQUF3QjtBQUVwQixXQUFLLGlCQUFpQixPQUNsQixtQkFDQSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUs7QUFBQTtBQUFBLElBSWpDLGlCQUFpQjtBQUFBO0FBRW5CLGVBQU8sb0JBQW9CO0FBTzNCLGNBQU0sSUFBSSxRQUFRLENBQUMsWUFBWTtBQUMzQixzQkFBWSxLQUFLLEtBQUssWUFBSSxNQUFNLFlBQVk7QUFBQSxZQUN4QyxVQUFVO0FBQUEsWUFDVixVQUFVLENBQUMsTUFBTTtBQUNiLG1CQUFLLEtBQUssZUFBZTtBQUN6QixtQkFBSyxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU07QUFFaEMscUJBQUssS0FBSyxnQkFBZ0I7QUFDMUIsd0JBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU14QixhQUFLLE9BQU8sS0FDUixZQUFJLFFBQ0osS0FBSyxRQUFRLE9BQU8sTUFBTSxNQUFNO0FBQzVCLGtCQUFRLElBQUk7QUFDWixlQUFLLE1BQU0sVUFBVSxHQUFHLE1BQU0sTUFBTTtBQUNoQyxpQkFBSyxLQUFLLGdCQUFnQjtBQUMxQix3QkFBWSxLQUFLLEtBQUssV0FBVztBQUFBO0FBQUEsWUFHekMsS0FBSyxRQUFRLE9BQ1QsTUFDQSxDQUFDLE1BQU07QUFDSCw4QkFBWSxNQUFNLFVBQVUsZUFBZTtBQUFBLFdBRS9DLE1BQ0E7QUFBQTtBQUFBO0FBQUE7QUE1RUwsRUFGWCxLQUVXLGlCQUEyQjtBQWtGdEMsTUFBSTsiLAogICJuYW1lcyI6IFtdCn0K
