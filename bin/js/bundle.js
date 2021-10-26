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
    "scenes/prefab/Image.prefab",
    "scenes/prefab/FieldPrefab.prefab",
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

  // src/common/Table.ts
  var Table = {
    task: [
      {
        id: 1001,
        reward: "1001:100",
        times: 1,
        title: "\u7B7E\u5230\u9886\u7EA2\u5305",
        desc: "\u770B\u89C6\u9891\u7B7E\u5230\uFF0C\u6BCF\u65E51\u6B21",
        icon: null
      },
      {
        id: 1002,
        reward: "1001:200",
        times: 10,
        title: "\u83DC\u5730\u52A0\u901F10\u6B21",
        desc: "\u8FD8\u5DEE&\u6B21",
        icon: null
      },
      {
        id: 1003,
        reward: "1001:300",
        times: 10,
        title: "\u83DC\u5730\u653610\u6B21",
        desc: "\u8FD8\u5DEE&\u6B21",
        icon: null
      }
    ],
    signIn: [
      { id: 1001, days: 1, reward: "1001:100" },
      { id: 1002, days: 2, reward: "1001:100" },
      { id: 1003, days: 3, reward: "1001:100" },
      { id: 1004, days: 4, reward: "1001:100" },
      { id: 1005, days: 5, reward: "1001:100" },
      { id: 1006, days: 6, reward: "1001:100" },
      { id: 1007, days: 7, reward: "1001:100" },
      { id: 1008, days: 8, reward: "1001:100" },
      { id: 1009, days: 9, reward: "1001:100" },
      { id: 1010, days: 10, reward: "1001:100" }
    ],
    seed: [
      {
        id: "1001",
        name: "\u5C0F\u9EA6",
        icon: null,
        unlock_cost: null,
        mature_time: "100",
        get_plant_id: "1001:2",
        unlock_reward: null
      },
      {
        id: "1002",
        name: "\u7389\u7C73",
        icon: null,
        unlock_cost: "1002:2000",
        mature_time: "101",
        get_plant_id: "1001:3",
        unlock_reward: "1002:1010,1001:20100"
      },
      {
        id: "1002",
        name: "\u5927\u8C46",
        icon: null,
        unlock_cost: "1002:3000",
        mature_time: "102",
        get_plant_id: "1001:4",
        unlock_reward: "1002:1000,1001:20001"
      },
      {
        id: "1004",
        name: "\u767D\u841D\u535C",
        icon: null,
        unlock_cost: "1002:4000",
        mature_time: "103",
        get_plant_id: "1001:5",
        unlock_reward: "1002:1010,1001:20101"
      },
      {
        id: "1005",
        name: "\u8FA3\u6912",
        icon: null,
        unlock_cost: "1002:5000",
        mature_time: "104",
        get_plant_id: "1001:6",
        unlock_reward: "1002:1000,1001:20002"
      },
      {
        id: "1006",
        name: "\u9EC4\u74DC",
        icon: null,
        unlock_cost: "1002:6000",
        mature_time: "105",
        get_plant_id: "1001:7",
        unlock_reward: "1002:1010,1001:20102"
      },
      {
        id: "1007",
        name: "\u897F\u7EA2\u67FF",
        icon: null,
        unlock_cost: "1002:7000",
        mature_time: "106",
        get_plant_id: "1001:8",
        unlock_reward: "1002:1000,1001:20003"
      },
      {
        id: "1008",
        name: "\u80E1\u841D\u535C",
        icon: null,
        unlock_cost: "1002:8000",
        mature_time: "107",
        get_plant_id: "1001:9",
        unlock_reward: "1002:1010,1001:20103"
      },
      {
        id: "1009",
        name: "\u8461\u8404",
        icon: null,
        unlock_cost: "1002:9000",
        mature_time: "108",
        get_plant_id: "1001:10",
        unlock_reward: "1002:1000,1001:20004"
      },
      {
        id: "1010",
        name: "\u9752\u83DC",
        icon: null,
        unlock_cost: "1002:10000",
        mature_time: "109",
        get_plant_id: "1001:11",
        unlock_reward: "1002:1010,1001:20104"
      }
    ],
    plant: [
      {
        id: 1001,
        name: "\u5C0F\u9EA6",
        icon: null,
        gain: "1001:1000,1002:20000",
        desc: null,
        lost_sum: 2
      },
      {
        id: 1002,
        name: "\u7389\u7C73",
        icon: null,
        gain: "1001:1200,1002:20100",
        desc: null,
        lost_sum: 4
      },
      {
        id: 1003,
        name: "\u5927\u8C46",
        icon: null,
        gain: "1001:1000,1002:20001",
        desc: null,
        lost_sum: 6
      },
      {
        id: 1004,
        name: "\u767D\u841D\u535C",
        icon: null,
        gain: "1001:1200,1002:20101",
        desc: null,
        lost_sum: 8
      },
      {
        id: 1005,
        name: "\u8FA3\u6912",
        icon: null,
        gain: "1001:1000,1002:20002",
        desc: null,
        lost_sum: 10
      },
      {
        id: 1006,
        name: "\u9EC4\u74DC",
        icon: null,
        gain: "1001:1200,1002:20102",
        desc: null,
        lost_sum: 12
      },
      {
        id: 1007,
        name: "\u897F\u7EA2\u67FF",
        icon: null,
        gain: "1001:1000,1002:20003",
        desc: null,
        lost_sum: 14
      },
      {
        id: 1008,
        name: "\u80E1\u841D\u535C",
        icon: null,
        gain: "1001:1200,1002:20103",
        desc: null,
        lost_sum: 16
      },
      {
        id: 1009,
        name: "\u8461\u8404",
        icon: null,
        gain: "1001:1000,1002:20004",
        desc: null,
        lost_sum: 18
      },
      {
        id: 1010,
        name: "\u9752\u83DC",
        icon: null,
        gain: "1001:1200,1002:20104",
        desc: null,
        lost_sum: 20
      }
    ],
    pet: [
      {
        id: 1001,
        name: "\u91D1\u6BDB\u72AC",
        icon: null,
        vitality_max: 100,
        vitality_consume: 10,
        cost: "1002:1000",
        desc: null,
        sensitive: 40,
        ability: 40
      },
      {
        id: 1002,
        name: "\u8D35\u5BBE\u72AC",
        icon: null,
        vitality_max: 150,
        vitality_consume: 8,
        cost: "1002:2000",
        desc: null,
        sensitive: 50,
        ability: 50
      },
      {
        id: 1003,
        name: "\u6CF0\u8FEA\u72AC",
        icon: null,
        vitality_max: 200,
        vitality_consume: 6,
        cost: "1002:3000",
        desc: null,
        sensitive: 60,
        ability: 60
      },
      {
        id: 1004,
        name: "\u5FB7\u56FD\u7267\u7F8A\u72AC",
        icon: null,
        vitality_max: 250,
        vitality_consume: 4,
        cost: "1002:4000",
        desc: null,
        sensitive: 70,
        ability: 70
      },
      {
        id: 1005,
        name: "\u8FB9\u955C\u7267\u7F8A\u72AC",
        icon: null,
        vitality_max: 300,
        vitality_consume: 2,
        cost: "1002:5000",
        desc: null,
        sensitive: 80,
        ability: 80
      }
    ],
    order: [
      { id: 1, reward: "1001:100", condition: "1001:10" },
      { id: 2, reward: "1001:200", condition: "1001:11,1002:11" },
      { id: 3, reward: "1001:300", condition: "1001:10,1002:10,1007:10,1005:6" },
      { id: 4, reward: "1001:400", condition: "1001:11,1002:11,1007:11,1005:7" },
      { id: 5, reward: "1001:500", condition: "1001:10,1002:10,1007:10,1005:7" },
      { id: 6, reward: "1001:600", condition: "1001:11,1002:11,1007:11,1005:8" },
      { id: 7, reward: "1001:700", condition: "1001:10,1002:10,1007:10,1005:8" },
      { id: 8, reward: "1001:800", condition: "1001:11,1002:11,1007:11,1005:9" },
      { id: 9, reward: "1001:900", condition: "1001:10,1002:10,1007:10,1005:9" },
      { id: 10, reward: "1001:1000", condition: "1001:11,1002:11,1007:11,1005:10" },
      { id: 11, reward: "1001:1100", condition: "1001:10,1002:10,1007:10,1005:10" },
      { id: 12, reward: "1001:1200", condition: "1001:11,1002:11,1007:11,1005:11" },
      { id: 13, reward: "1001:1300", condition: "1001:10,1002:10,1007:10,1005:11" },
      { id: 14, reward: "1001:1400", condition: "1001:11,1002:11,1007:11,1005:12" }
    ],
    lang: [],
    landLevel: [
      { id: 1, reward: "1002:0", cost: "1001:0", gain: null },
      { id: 2, reward: "1002:1500", cost: "1001:30000", gain: 1 },
      { id: 3, reward: "1002:2000", cost: "1001:40000", gain: 2 },
      { id: 4, reward: "1002:2500", cost: "1001:50000", gain: 3 },
      { id: 5, reward: "1002:3000", cost: "1001:60000", gain: 4 },
      { id: 6, reward: "1002:3500", cost: "1001:70000", gain: 5 },
      { id: 7, reward: "1002:4000", cost: "1001:80000", gain: 6 }
    ],
    feed: [
      { id: 1001, name: "\u997C\u5E72", icon: null, vitality: 10, cost: "1002:1000", desc: null },
      { id: 1002, name: "\u575A\u679C", icon: null, vitality: 11, cost: "1002:2000", desc: null },
      { id: 1003, name: "\u706B\u817F", icon: null, vitality: 12, cost: "1002:3000", desc: null },
      { id: 1004, name: "\u725B\u8089", icon: null, vitality: 13, cost: "1002:4000", desc: null },
      { id: 1005, name: "\u732A\u8089", icon: null, vitality: 14, cost: "1002:5000", desc: null },
      { id: 1006, name: "\u9E21\u8089", icon: null, vitality: 15, cost: "1002:6000", desc: null }
    ],
    currency: [
      { id: 1001, name: "\u94BB\u77F3", icon: null },
      { id: 1002, name: "\u91D1\u5E01", icon: null }
    ],
    config: [
      { id: "all_spped_up_time", value: 30 },
      { id: "all_spped_up_times", value: 600 },
      {
        id: "unlock_land_cost",
        value: "1002:0,1002:0,1002:40000,1002:50000,1002:20000,1002:20000,1002:20000,1002:20000,1002:20000"
      }
    ]
  };

  // src/common/Tools.ts
  var Tools = class {
    static parseString(str, format = ",") {
      return str.split(format);
    }
  };

  // src/common/TableAnalyze.ts
  var TablePropertyEvent = {
    order(d) {
      let r = Tools.parseString(d.reward, ":");
      return {
        id: d.id,
        reward: {
          obj: TableAnalyze.table("currency").get(Number(r[0])),
          count: Number(r[1])
        },
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
        gain: Tools.parseString(d.gain).map((e) => {
          let v = Tools.parseString(e, ":");
          return {
            obj: TableAnalyze.table("currency").get(Number(v[0])),
            count: Number(v[1])
          };
        }),
        desc: d.desc,
        lost_sum: d.lost_sum
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
      console.log(TableAnalyze_default.table("order").list);
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

  // src/components/FieldComponent.ts
  var FieldComponent = class extends core_default.gameScript {
    constructor() {
      super(...arguments);
      this.icon = null;
      this.fieldNode = null;
      this.fieldEmptyRes = "";
      this.lvNode = null;
      this.lvLabel = null;
      this.countDownBox = null;
      this.countDownLabel = null;
      this.addSpeedNode = null;
      this.matureNode = null;
      this.emptyFieldNode = null;
      this.unlockIcon = "";
      this.fieldId = null;
    }
    onHdAwake() {
      this.fieldNode = this.owner;
      console.log(this.icon);
      this.init();
    }
    init() {
      this.icon.skin = this.unlockIcon;
    }
  };
  __decorateClass([
    core_default.findByName
  ], FieldComponent.prototype, "icon", 2);

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2NvbW1vbi9FdmVudE1hcHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9SZXMudHMiLCAiLi4vLi4vc3JjL2NvcmUvRXZlbnRHbG9iYWwudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvVmlld1Nob3dBbmkudHMiLCAiLi4vLi4vc3JjL2NvcmUvSW5zdGFuY2UudHMiLCAiLi4vLi4vc3JjL2NvcmUvVmlld01hbmFnZXIudHMiLCAiLi4vLi4vc3JjL2NvcmUvT2JzZXJ2YWJsZVByb3BlcnR5LnRzIiwgIi4uLy4uL3NyYy9jb3JlL0dhbWVTY3JpcHQudHMiLCAiLi4vLi4vc3JjL3ZpZXcvTG9hZFZpZXcudHMiLCAiLi4vLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLnRzIiwgIi4uLy4uL3NyYy92aWV3L01haWxWaWV3LnRzIiwgIi4uLy4uL3NyYy9jb21tb24vTmV0TWFwcy50cyIsICIuLi8uLi9zcmMvY29tbW9uL1RhYmxlLnRzIiwgIi4uLy4uL3NyYy9jb21tb24vVG9vbHMudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9UYWJsZUFuYWx5emUudHMiLCAiLi4vLi4vc3JjL2NvcmUvaW5kZXgudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9Vc2VySW5mby50cyIsICIuLi8uLi9zcmMvdmlldy9NYWluVmlldy50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9GaWVsZENvbXBvbmVudC50cyIsICIuLi8uLi9zcmMvY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pLnRzIiwgIi4uLy4uL3NyYy92aWV3L1Nob3BWaWV3LnRzIiwgIi4uLy4uL3NyYy92aWV3L1NpZ25JblZpZXcudHMiLCAiLi4vLi4vc3JjL3ZpZXcvVGFza1ZpZXcudHMiLCAiLi4vLi4vc3JjL0dhbWVDb25maWcudHMiLCAiLi4vLi4vc3JjL01haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxyXG4gKiBcdTUxNjhcdTVDNDBcdTRFOEJcdTRFRjZcdTU0MERcdTc5RjBcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEV2ZW50TWFwcyB7XHJcbiAgICAvKiogbG9hZCBcdTc1NENcdTk3NjJcdThGREJcdTg4NENcdTY2RjRcdTY1QjAgKi9cclxuICAgIGxvYWRfcHJvZ3Jlc3MgPSBcImxvYWRfcHJvZ3Jlc3NcIixcclxufVxyXG4iLCAiLy9cdTRFRTNcdTc4MDFcdTc1MUZcdTYyMTBcdUZGMENcdTRFMERcdTg5ODFcdTYyNEJcdTUyQThcdTRGRUVcdTY1MzlcblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBlbnVtIHZpZXdzIFxuICAgIHtcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9Mb2FkRGlhbG9nLnNjZW5lICovXG4gICAgICAgIExvYWREaWFsb2cgPSBcInNjZW5lcy92aWV3cy9Mb2FkRGlhbG9nLnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL01haWxWaWV3LnNjZW5lICovXG4gICAgICAgIE1haWxWaWV3ID0gXCJzY2VuZXMvdmlld3MvTWFpbFZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvTWFpblZpZXcuc2NlbmUgKi9cbiAgICAgICAgTWFpblZpZXcgPSBcInNjZW5lcy92aWV3cy9NYWluVmlldy5zY2VuZVwiLCBcbiAgICAgICAgLyoqIHNjZW5lcy92aWV3cy9TaG9wVmlldy5zY2VuZSAqL1xuICAgICAgICBTaG9wVmlldyA9IFwic2NlbmVzL3ZpZXdzL1Nob3BWaWV3LnNjZW5lXCIsIFxuICAgICAgICAvKiogc2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmUgKi9cbiAgICAgICAgU2lnbkluVmlldyA9IFwic2NlbmVzL3ZpZXdzL1NpZ25JblZpZXcuc2NlbmVcIiwgXG4gICAgICAgIC8qKiBzY2VuZXMvdmlld3MvVGFza1ZpZXcuc2NlbmUgKi9cbiAgICAgICAgVGFza1ZpZXcgPSBcInNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZVwiLCBcbiAgICB9XG5cbiBleHBvcnQgZW51bSBhdWRpb3MgXG4gICAge1xuICAgICAgICAvKiogYXVkaW8vd2luLm1wMyAqL1xuICAgICAgICB3aW4gPSBcInJlcy9hdWRpby93aW4ubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vcmVhZHkubXAzICovXG4gICAgICAgIHJlYWR5ID0gXCJyZXMvYXVkaW8vcmVhZHkubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vbW92ZS5tcDMgKi9cbiAgICAgICAgbW92ZSA9IFwicmVzL2F1ZGlvL21vdmUubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZ28ubXAzICovXG4gICAgICAgIGdvID0gXCJyZXMvYXVkaW8vZ28ubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZmFpbC5tcDMgKi9cbiAgICAgICAgZmFpbCA9IFwicmVzL2F1ZGlvL2ZhaWwubXAzXCIsIFxuICAgICAgICAvKiogYXVkaW8vZHJhdy5tcDMgKi9cbiAgICAgICAgZHJhdyA9IFwicmVzL2F1ZGlvL2RyYXcubXAzXCIsIFxuICAgIH1cblxuLyoqXG4gKiBcdTc1NENcdTk3NjJcdTUyMTdcdTg4NjhcbiAqL1xuIGV4cG9ydCBjb25zdCBzY2VuZXMgPSBbXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9UYXNrVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2lnbkluVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvU2hvcFZpZXcuc2NlbmVcIixcbiAgICAgICAgIFwic2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lXCIsXG4gICAgICAgICBcInNjZW5lcy92aWV3cy9NYWlsVmlldy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvdmlld3MvTG9hZERpYWxvZy5zY2VuZVwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0ltYWdlLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvcHJlZmFiL0ZpZWxkUHJlZmFiLnByZWZhYlwiLFxuICAgICAgICAgXCJzY2VuZXMvY29tcG9uZW50cy9CdXR0b24ucHJlZmFiXCIsXG4gICAgICAgICAgICBcInJlcy9YYXNkZmFzZC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL3J1bGVfdGV4dC5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2ltZ19sYW5kQmcucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzMucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzIucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZzEucG5nXCIsXG4gICAgICAgICAgICBcInJlcy9pbWdfaG9tZXBhZ2VCZy5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2JnMS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL3NoYWRlci92cy52c1wiLFxuICAgICAgICAgICAgXCJyZXMvc2hhZGVyL3BzLmZzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby93aW4ubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9yZWFkeS5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL21vdmUubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9nby5tcDNcIixcbiAgICAgICAgICAgIFwicmVzL2F1ZGlvL2ZhaWwubXAzXCIsXG4gICAgICAgICAgICBcInJlcy9hdWRpby9kcmF3Lm1wM1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvbWFpbl9zZW5jZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL21haW5fc2VuY2UuYXRsYXNcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUxLnBuZ1wiLFxuICAgICAgICAgICAgXCJyZXMvYXRsYXMvZ2FtZS5wbmdcIixcbiAgICAgICAgICAgIFwicmVzL2F0bGFzL2dhbWUuYXRsYXNcIl07XG4gICAgXG5cbi8qKlxuICogXHU2MjQwXHU2NzA5XHU4RDQ0XHU2RTkwXG4gKi9cbmNvbnN0IFJlcyA9IHtcbiAgICB2aWV3czogdmlld3MsXG4gICAgc2NlbmVzOiBzY2VuZXMsXG4gICAgYXVkaW9zOiBhdWRpb3MsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXM7XG4iLCAiLyoqXHJcbiAqIFx1NTE2OFx1NUM0MFx1NEU4Qlx1NEVGNlxyXG4gKi9cclxuY29uc3QgRXZlbnRHbG9iYWwgPSBuZXcgTGF5YS5FdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbi8qKlxyXG4gKiBcdTUwQThcdTVCNThcdTc2ODRcdTk3MDBcdTg5ODFcdTdFRDFcdTVCOUFcdThCQTJcdTk2MDVcdTRFOEJcdTRFRjZcdTc2ODRcdTdDN0JcdTc2ODRcdTUzOUZcdTU3OEJcdTUyMTdcdTg4NjhcclxuICovXHJcbmV4cG9ydCBjb25zdCBFdmVudENsYXNzOiBNYXA8YW55LCB7IGtleTogc3RyaW5nOyBmbjogRnVuY3Rpb24gfT4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50T24obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcclxuICAgICAgICBFdmVudENsYXNzLnNldCh0YXJnZXQsIHsga2V5OiBuYW1lLCBmbjogZGVzY3JpcHRvci52YWx1ZSB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTUwQThcdTVCNThcdTc2ODRcdTk3MDBcdTg5ODFcdTdFRDFcdTVCOUFcdTVDNUVcdTYwMjdcdTY3RTVcdTYyN0VcdTdFRDFcdTVCOUFcdTU0MERcdTc5RjBcdTc2ODRcdTdDN0JcdTUyMTdcdTg4NjhcclxuICovXHJcbmV4cG9ydCBjb25zdCBCaW5kTmFtZUNsYXNzOiBNYXA8YW55LCBzdHJpbmdbXT4gPSBuZXcgTWFwKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBGaW5kQnlOYW1lKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nKSB7XHJcbiAgICAvLyAgKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcclxuXHJcbiAgICBpZiAoIUJpbmROYW1lQ2xhc3MuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICBCaW5kTmFtZUNsYXNzLnNldCh0YXJnZXQsIFtdKTtcclxuICAgIH1cclxuICAgIEJpbmROYW1lQ2xhc3MuZ2V0KHRhcmdldCkucHVzaChwcm9wZXJ0eUtleSk7XHJcbiAgICAvLyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudEdsb2JhbDtcclxuIiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdTaG93QW5pIGV4dGVuZHMgTGF5YS5TY3JpcHQge1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJnLCB0aXBzOlwiXHU4MENDXHU2NjZGXCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGJnOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpjb250ZW50LCB0aXBzOlwiXHU1MTg1XHU1QkI5XHU1QkI5XHU1NjY4XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHVibGljIGNvbnRlbnQ6IExheWEuSW1hZ2UgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdHdlZW5MaXN0OiBMYXlhLlR3ZWVuW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb09wZW4oKSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiAgXHU1MTczXHU5NUVEXHU2MjEwXHU1MjlGXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvQ2xvc2UoKSB7fVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuXHJcbiAgICAgICAgdGhpcy5iZy5hbHBoYSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgIExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnLFxyXG4gICAgICAgICAgICAgICAgeyBhbHBoYTogMC43NSB9LFxyXG4gICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnQuYm90dG9tID0gLXRoaXMuY29udGVudC5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QucHVzaChcclxuICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudCxcclxuICAgICAgICAgICAgICAgIHsgYm90dG9tOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkVhc2UuY2lyY091dCxcclxuICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVmlldygpIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5MaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmcsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBhbHBoYTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5kb09wZW4sIFtkaWFsb2ddKSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgTGF5YS5Ud2Vlbi50byhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgeyBib3R0b206IC10aGlzLmNvbnRlbnQuaGVpZ2h0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIExheWEuSGFuZGxlci5jcmVhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZG9DbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgW2RpYWxvZ11cclxuICAgICAgICAgICAgICAgICAgICAvLyApLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50d2Vlbkxpc3QuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudHdlZW5MaXN0Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTVCOUVcdTRGOEJcdTUyMTdcdTg4NjhcclxuICovXHJcbmNvbnN0IGluc3RhbmNlTGlzdDogTWFwPG51bWJlciwgeyBuZXcgKCk6IHZvaWQgfT4gPSBuZXcgTWFwKCk7XHJcblxyXG4vKipcclxuICogXHU1QjlFXHU0RjhCXHU3Njg0aWRcclxuICovXHJcbmxldCBpbnN0YW5jZUlkOiBudW1iZXIgPSAxMDA7XHJcblxyXG4vKipcclxuICogXHU1MzU1XHU0RjhCXHU4OEM1XHU5OTcwXHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gSW5zdGFuY2UodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWluc3RhbmNlTGlzdC5oYXModGFyZ2V0W1wiI2luc3RhbmNlSWRcIl0pKSB7XHJcbiAgICAgICAgaW5zdGFuY2VJZCsrO1xyXG4gICAgICAgIHRhcmdldFtcIiNpbnN0YW5jZUlkXCJdID0gaW5zdGFuY2VJZDtcclxuICAgICAgICBpbnN0YW5jZUxpc3Quc2V0KGluc3RhbmNlSWQsIG5ldyB0YXJnZXQoKSk7XHJcbiAgICB9XHJcbiAgICB0YXJnZXRba2V5XSA9IGluc3RhbmNlTGlzdC5nZXQoaW5zdGFuY2VJZCk7XHJcbn1cclxuIiwgImltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCJzcmMvY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pXCI7XHJcbmltcG9ydCBSZXMsIHsgdmlld3MgfSBmcm9tIFwiLi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVmlld1Nob3dBbmkgZnJvbSBcIi4uL2NvbXBvbmVudHMvVmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NjI1M1x1NUYwMFx1NzU0Q1x1OTc2Mlx1OTcwMFx1ODk4MVx1NUUyNlx1NTE2NVx1NzY4NFx1NTNDMlx1NjU3MFxyXG4gKi9cclxuaW50ZXJmYWNlIFZpZXdPcGVuUGFybSB7XHJcbiAgICAvKiogXHU2NjNFXHU3OTNBbG9hZFx1NzU0Q1x1OTc2MiAqL1xyXG4gICAgc2hvd0xvYWQ/OiBib29sZWFuO1xyXG4gICAgLyoqIFx1NjYzRVx1NzkzQWxvYWRcdTc1NENcdTk3NjJcdTVFRjZcdThGREZcdTY1RjZcdTk1RjQgKi9cclxuICAgIHNob3dMb2FkRGVsYXk/OiBudW1iZXI7XHJcbiAgICAvKiogXHU5NjkwXHU4NUNGbG9hZFx1NzU0Q1x1OTc2Mlx1NUVGNlx1OEZERlx1NjVGNlx1OTVGNCBcdTlFRDhcdThCQTQwICovXHJcbiAgICBoaWRlTG9hZERlbGF5PzogbnVtYmVyO1xyXG4gICAgLyoqIFx1NjYyRlx1NTQyNlx1NTE3M1x1OTVFRFx1NTE3Nlx1NEVENlx1NTczQVx1NjY2Rlx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQXRydWVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDlcdUZGMENcdTMwMTBcdTZDRThcdTYxMEZcdTMwMTFcdTg4QUJcdTUxNzNcdTk1RURcdTc2ODRcdTU3M0FcdTY2NkZcdUZGMENcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdThCQkVcdTdGNkVhdXRvRGVzdHJveUF0UmVtb3ZlZD10cnVlXHVGRjBDXHU1MjE5XHU4RDQ0XHU2RTkwXHU1M0VGXHU4MEZEXHU0RTBEXHU4MEZEXHU4OEFCXHU1NkRFXHU2NTM2XHVGRjBDXHU5NzAwXHU4OTgxXHU4MUVBXHU1REYxXHU2MjRCXHU1MkE4XHU1NkRFXHU2NTM2XHJcbiAgICAgKiB0b2RvIFx1NzNCMFx1NTcyOFx1OEZEOVx1NEUyQVx1OEMwM1x1NzUyOFx1NzY4NFx1NjYyRlx1NUYxNVx1NjRDRVx1ODFFQVx1NUUyNlx1NzY4NFx1NjVCOVx1NkNENVx1RkYwQ1x1NkNBMVx1NjcwOVx1OEQ3MFx1OEZEOVx1OTFDQ1x1NzY4NFx1N0YxM1x1NUI1OFx1RkYwQ1x1NTNFRlx1ODBGRFx1NEYxQVx1NjcwOVx1OTVFRVx1OTg5OFx1RkYwQ1x1NTQwRVx1NjcxRlx1NEYxOFx1NTMxNlxyXG4gICAgICovXHJcbiAgICBjbG9zZU90aGVyPzogYm9vbGVhbjtcclxuICAgIC8qKiBcdTYyNTNcdTVGMDBcdTk4NzVcdTk3NjJcdTc2ODRcdTUzQzJcdTY1NzBcdUZGMENcdTRGMUFcdTRGMjBcdTkwMTJcdTdFRDlvbk9wZW5lZFx1NjVCOVx1NkNENVx1RkYwOFx1NTNFRlx1OTAwOVx1RkYwOSAqL1xyXG4gICAgcGFybT86IGFueTtcclxuICAgIC8qKiAgXHU2MjUzXHU1RjAwXHU5ODc1XHU5NzYyXHU3Njg0XHU1M0MyXHU2NTcwXHVGRjBDXHU0RjFBXHU0RjIwXHU5MDEyXHU3RUQ5b25PcGVuZWRcdTY1QjlcdTZDRDVcdUZGMDhcdTUzRUZcdTkwMDlcdUZGMDkgKi9cclxuICAgIGNvbXBsZXRlPzogRnVuY3Rpb247XHJcbiAgICAvKiogXHU1MkEwXHU4RjdEXHU4RkRCXHU1RUE2XHU1NkRFXHU4QzAzXHVGRjA4XHU1M0VGXHU5MDA5XHVGRjA5ICovXHJcbiAgICBwcm9ncmVzcz86IEhhbmRsZXI7XHJcbn1cclxuXHJcbmNvbnN0IHZpZXdNYXBzOiB7IHVybDogc3RyaW5nOyB2aWV3OiBMYXlhLlZpZXcgfVtdID0gW107XHJcblxyXG4vKipcclxuICogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmlld01hbmFnZXIge1xyXG4gICAgQEluc3RhbmNlXHJcbiAgICBzdGF0aWMgaW5zdDogVmlld01hbmFnZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNTNcdTVGMDBcdTRFMDBcdTRFMkFcdTc1NENcdTk3NjJcclxuICAgICAqIEBwYXJhbSB1cmwgXHU3NTRDXHU5NzYyXHU1NzMwXHU1NzQwIFJlcy52aWV3c1x1OTFDQ1x1NzY4NFxyXG4gICAgICogQHBhcmFtIGRhdGEgXHU1M0MyXHU2NTcwXHJcbiAgICAgKi9cclxuICAgIG9wZW4oXHJcbiAgICAgICAgdXJsOiB2aWV3cyxcclxuICAgICAgICBkYXRhOiBWaWV3T3BlblBhcm0gPSB7XHJcbiAgICAgICAgICAgIGNsb3NlT3RoZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dMb2FkRGVsYXk6IDEwMCxcclxuICAgICAgICAgICAgaGlkZUxvYWREZWxheTogMCxcclxuICAgICAgICB9XHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXVybCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJtaXNzIHBhdGghXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5zaG93TG9hZCkge1xyXG4gICAgICAgICAgICBMYXlhLlZpZXcuc2hvd0xvYWRpbmdQYWdlKG51bGwsIGRhdGEuc2hvd0xvYWREZWxheSk7XHJcbiAgICAgICAgICAgIGlmICh1cmwgIT09IFJlcy52aWV3cy5Mb2FkRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLmZyYW1lT25jZSgxLCB0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS5WaWV3LmhpZGVMb2FkaW5nUGFnZShkYXRhLmhpZGVMb2FkRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExheWEuVmlldy5vcGVuKFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGRhdGEuY2xvc2VPdGhlcixcclxuICAgICAgICAgICAgZGF0YS5wYXJtLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsICE9IFJlcy52aWV3cy5Mb2FkRGlhbG9nKSB2aWV3TWFwcy5wdXNoKHsgdXJsOiB1cmwsIHZpZXc6IGUgfSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNvbXBsZXRlICYmIGRhdGEuY29tcGxldGUoZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgICAgICBgJWMgPT0+IG9wZW4gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzdlZDZkZjtmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYCxcclxuICAgICAgICAgICAgICAgICAgICBgY29sb3I6IzIyYTZiMztmb250LXdlaWdodDo3MDA7YmFja2dyb3VuZC1jb2xvcjojZGZmOWZiYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRhdGEucHJvZ3Jlc3NcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU1MTczXHU5NUVEXHU4OUM2XHU1NkZFXHJcbiAgICAgKiBAcGFyYW0gdXJsIFx1NzU0Q1x1OTc2Mlx1NTczMFx1NTc0MCBSZXMudmlld3NcdTkxQ0NcdTc2ODRcclxuICAgICAqIEBwYXJhbSBhbGwgXHU1NDBDXHU0RTAwXHU0RTJBXHU3NTRDXHU5NzYyXHU4OEFCIFx1NTkxQVx1NkIyMVx1NjI1M1x1NUYwMFx1RkYwQ1x1NTE2OFx1NTIyMFx1OTY2NFx1NzUyOFx1OEZEOVx1NEUyQVxyXG4gICAgICogQHBhcmFtIGRlc3Ryb3kgXHU5NTAwXHU2QkMxICAgVE9ET1x1RkYwOFx1OUVEOFx1OEJBNFx1NEYxQVx1OTUwMFx1NkJDMVx1NjI0MFx1NjcwOVx1NUI1MFx1ODI4Mlx1NzBCOVx1RkYwQ1x1NjcyQVx1NkQ0Qlx1OEJENVx1NjYyRlx1NTQyNlx1NjcwOVx1OTVFRVx1OTg5OFx1RkYwOVxyXG4gICAgICovXHJcbiAgICBhc3luYyBjbG9zZShcclxuICAgICAgICB1cmw6IHZpZXdzLFxyXG4gICAgICAgIGFsbDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIGRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgICAgICBhbmlDb206IHR5cGVvZiBWaWV3U2hvd0FuaSB8IHR5cGVvZiBGbG9hdFZpZXdTaG93QW5pID0gVmlld1Nob3dBbmlcclxuICAgICkge1xyXG4gICAgICAgIC8vVE9ETyBcdThGRDlcdTkxQ0NcdTczQjBcdTU3MjhcdTUxNjhcdTkwRThcdTc1MjhkZXN0cm95IFx1NUYxNVx1NjRDRXJlbW92ZVx1NTk3RFx1NTBDRlx1NjcwOVx1NzBCOVx1OTVFRVx1OTg5OFx1RkYwQ1x1NTE4RFx1OTAxQVx1OEZDN3ZpZXcub3Blblx1NEYxQVx1OTFDRFx1NjVCMFx1Njc4NFx1NUVGQVx1N0VDNFx1NEVGNlxyXG4gICAgICAgIGRlc3Ryb3kgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgdkFuaTogVmlld1Nob3dBbmk7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHZpZXdNYXBzLmxlbmd0aCAtIDE7IHggPiAtMTsgeC0tKSB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT09IHZpZXdNYXBzW3hdLnVybCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSB2aWV3TWFwc1t4XTtcclxuICAgICAgICAgICAgICAgIHZpZXdNYXBzLnNwbGljZSh4LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2QW5pID0gdi52aWV3LmdldENvbXBvbmVudChhbmlDb20gYXMgYW55KTtcclxuICAgICAgICAgICAgICAgIGlmICh2QW5pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdkFuaS5jbG9zZVZpZXcoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVZpZXdMb2codXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5kZXN0cm95KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVmlld0xvZyh1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudmlldy5yZW1vdmVTZWxmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VWaWV3TG9nKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghYWxsKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cdTRGRERcdThCQzFcdTU5ODJcdTY3OUNcdTU3M0FcdTY2NkZcdTVCOENcdTUxNjhcdTZDQTFcdTY3MDlcdTc1NENcdTk3NjJcdTg4QUJcdTYyNTNcdTVGMDBcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTVGQzVcdTYyNTNcdTVGMDBcdTRFM0JcdTU3M0FcdTY2NkZcclxuICAgICAgICBsZXQgY2xvc2VMZW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHggPSB2aWV3TWFwcy5sZW5ndGggLSAxOyB4ID4gLTE7IHgtLSkge1xyXG4gICAgICAgICAgICBpZiAoIXZpZXdNYXBzW3hdLnZpZXcucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUxlbisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2xvc2VMZW4gPT09IHZpZXdNYXBzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2aWV3TWFwcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oUmVzLnZpZXdzLk1haW5WaWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdNYXBzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlVmlld0xvZyh1cmw6IHN0cmluZywgZGVzdHJveTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlYyA8PT0gJHtkZXN0cm95ID8gXCJkZXN0cm95XCIgOiBcImRpc2FibGVcIn0gJWMke3VybC5tYXRjaCgvXFx3Kyg/PVxcLikvKVswXX0gYCxcclxuICAgICAgICAgICAgYGNvbG9yOiNmZjc5Nzk7Zm9udC13ZWlnaHQ6NzAwO2JhY2tncm91bmQtY29sb3I6I2RmZjlmYmAsXHJcbiAgICAgICAgICAgIGBjb2xvcjojZWI0ZDRiO2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kLWNvbG9yOiNkZmY5ZmJgXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkUwNVx1OTY2NFx1N0YxM1x1NUI1OFx1NzU0Q1x1OTc2MlxyXG4gICAgICovXHJcbiAgICBjbGVhclZpZXdNYXBzKCkge1xyXG4gICAgICAgIHZpZXdNYXBzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn1cclxuIiwgImNvbnN0IGNhbGxlcnM6IE1hcDxhbnksIEZ1bmN0aW9uW10+ID0gbmV3IE1hcCgpO1xyXG5cclxuY2xhc3MgT2JzZXJ2YWJsZUNvbnRyb2w8Y2FsbCBleHRlbmRzIExheWEuU2NyaXB0PiB7XHJcbiAgICBwcml2YXRlIGtleUV2ZW50czogTWFwPGFueSwgTWFwPHN0cmluZywgRnVuY3Rpb25bXT4+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU3NkQxXHU1NDJDXHU1QzVFXHU2MDI3XHU1MDNDXHU1M0Q4XHU1MzE2XHJcbiAgICAgKiBAcGFyYW0gT2JqIFx1OTcwMFx1ODk4MVx1NzZEMVx1NTQyQ1x1NzY4NFx1NUJGOVx1OEM2MVxyXG4gICAgICovXHJcbiAgICB3YXRjaDxUIGV4dGVuZHMge30+KE9iajogVCwgY2FsbGVyOiBjYWxsKSB7XHJcbiAgICAgICAgaWYgKCFjYWxsZXJzLmhhcyhjYWxsZXIpKSB7XHJcbiAgICAgICAgICAgIGNhbGxlcnMuc2V0KGNhbGxlciwgW10pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGtleUV2ZW50ID0gdGhpcy5rZXlFdmVudHM7XHJcbiAgICAgICAgaWYgKCFrZXlFdmVudC5oYXMoT2JqKSkge1xyXG4gICAgICAgICAgICBrZXlFdmVudC5zZXQoT2JqLCBuZXcgTWFwKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogXHU5NzAwXHU4OTgxXHU3NkQxXHU1NDJDXHU1M0Q4XHU1MzE2XHU3Njg0XHU1QzVFXHU2MDI3XHU0RThCXHU0RUY2XHJcbiAgICAgICAgICogQHBhcmFtIGtleSBcdTk3MDBcdTg5ODFcdTc2RDFcdTU0MkNcdTc2ODRcdTVDNUVcdTYwMjdcclxuICAgICAgICAgKiBAcGFyYW0gY2FsbCBcdTU2REVcdThDMDNcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCBrZXlCaW5kID0gPEtleSBleHRlbmRzIGtleW9mIFQ+KGtleTogS2V5ICYgc3RyaW5nLCBjYWxsOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgX29iaiA9IGtleUV2ZW50LmdldChPYmopO1xyXG4gICAgICAgICAgICBpZiAoIV9vYmouaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIF9vYmouc2V0KGtleSwgW10pO1xyXG4gICAgICAgICAgICAgICAgaWYgKE9ialtcIiNcIiArIGtleV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqW1wiI1wiICsga2V5XSA9IE9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPYmosIGtleSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tcIiNcIiArIGtleV0gPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX29iai5nZXQoa2V5KS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW1wiI1wiICsga2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYWxsLmJpbmQoY2FsbCk7XHJcbiAgICAgICAgICAgIF9vYmouZ2V0KGtleSkucHVzaChjYWxsKTtcclxuICAgICAgICAgICAgY2FsbGVycy5nZXQoY2FsbGVyKS5wdXNoKGNhbGwpO1xyXG4gICAgICAgICAgICBjYWxsKE9ialtrZXldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsga2V5OiBrZXlCaW5kIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsga2V5OiBrZXlCaW5kIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTkwMUFcdThGQzdcdTRGMjBcdTUxNjVcdTc2ODRjYWxsZXJcdTUyMjBcdTk2NjRcdTVGNTNcdTUyNERcdTdFRDFcdTVCOUFcdTc2ODRcdTYyNDBcdTY3MDlcdTc2ODRcdTRFOEJcdTRFRjYgXHU2MjE2XHU2MzA3XHU1QjlBXHU4OUUzXHU1MUIzXHU2QTIxXHU0RTJBXHU1QkY5XHU4QzYxXHU4RERGXHU1RjUzXHU1MjREY2FsbGVyXHU3RUQxXHU1QjlBXHU3Njg0XHU3NkQxXHU1NDJDXHJcbiAgICAgKiBAcGFyYW0gY2FsbGVyIFx1NzZEMVx1NTQyQ1x1NjVGNlx1N0VEMVx1NUI5QVx1NzY4NFx1NTczQVx1NjY2Rlx1NUJGOVx1OEM2MVxyXG4gICAgICogQHBhcmFtIG9iaiBcdTc2RDFcdTU0MkNcdTc2ODRcdTVCRjlcdThDNjFcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlQnlDYWxsZXIoY2FsbGVyOiBjYWxsLCBvYmo6IGFueSA9IG51bGwpIHtcclxuICAgICAgICBjYWxsZXJzLmdldChjYWxsZXIpPy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvYmopIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RXZlbnRzPy5nZXQob2JqKS5mb3JFYWNoKChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mID0gZXYuaW5kZXhPZihlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZiA+IC0xKSBldi5zcGxpY2UoaW5kZXhPZiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RXZlbnRzPy5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgay5mb3JFYWNoKChldikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhPZiA9IGV2LmluZGV4T2YoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mID4gLTEpIGV2LnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTVCRjlcdThDNjFcdTVDNUVcdTYwMjdcdTdFRDFcdTVCOUFcdTUzRUZcdTc2RDFcdTU0MkNcdTUzRDhcdTUzMTZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBPYnNlcnZhYmxlQ29udHJvbCgpO1xyXG4iLCAiaW1wb3J0IEV2ZW50R2xvYmFsLCB7IEJpbmROYW1lQ2xhc3MsIEV2ZW50Q2xhc3MgfSBmcm9tIFwiLi9FdmVudEdsb2JhbFwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1N0VDNFx1NEVGNlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmlwdCBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy9FdmVudE9uXHU4OEM1XHU5OTcwXHU1NjY4XHU0RThCXHU0RUY2XHU3RUQxXHU1QjlBXHJcbiAgICAgICAgbGV0IGJpbmRFdmVudCA9IEV2ZW50Q2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKTtcclxuICAgICAgICBiaW5kRXZlbnQgJiYgRXZlbnRHbG9iYWwub24oYmluZEV2ZW50LmtleSwgdGhpcywgYmluZEV2ZW50LmZuKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZEF3YWtlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkF3YWtlKCkge1xyXG4gICAgICAgIEJpbmROYW1lQ2xhc3MuZ2V0KHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlKT8uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzW2VdID0gdGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm9uSGRBd2FrZSgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTZGQzBcdTZEM0JcdTU0MEVcdTYyNjdcdTg4NENcdUZGMENcdTZCNjRcdTY1RjZcdTYyNDBcdTY3MDlcdTgyODJcdTcwQjlcdTU0OENcdTdFQzRcdTRFRjZcdTU3NDdcdTVERjJcdTUyMUJcdTVFRkFcdTVCOENcdTZCRDVcdUZGMENcdTZCMjFcdTY1QjlcdTZDRDVcdTUzRUFcdTYyNjdcdTg4NENcdTRFMDBcdTZCMjFcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkQXdha2UoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkRW5hYmxlXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGRFbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0VDNFx1NEVGNlx1ODhBQlx1NTQyRlx1NzUyOFx1NTQwRVx1NjI2N1x1ODg0Q1x1RkYwQ1x1NkJENFx1NTk4Mlx1ODI4Mlx1NzBCOVx1ODhBQlx1NkRGQlx1NTJBMFx1NTIzMFx1ODIxRVx1NTNGMFx1NTQwRVxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTNBXHU4NjVBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU0RjdGXHU3NTI4XHU2NUY2XHU5MUNEXHU1MTk5XHU4OTg2XHU3NkQ2XHU1MzczXHU1M0VGXHJcbiAgICAgKi9cclxuICAgIG9uSGRFbmFibGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QjY0XHU2NUI5XHU2Q0Q1XHU0RTBEXHU4OTgxXHU5MUNEXHU1MTk5IFx1NEY3Rlx1NzUyOCBvbkhkU3RhcnRcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkU3RhcnQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogXHU3QjJDXHU0RTAwXHU2QjIxXHU2MjY3XHU4ODRDdXBkYXRlXHU0RTRCXHU1MjREXHU2MjY3XHU4ODRDXHVGRjBDXHU1M0VBXHU0RjFBXHU2MjY3XHU4ODRDXHU0RTAwXHU2QjIxXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFM0FcdTg2NUFcdTY1QjlcdTZDRDVcdUZGMENcdTRGN0ZcdTc1MjhcdTY1RjZcdTkxQ0RcdTUxOTlcdTg5ODZcdTc2RDZcdTUzNzNcdTUzRUZcclxuICAgICAqL1xyXG4gICAgb25IZFN0YXJ0KCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZFVwZGF0ZVxyXG4gICAgICogQGRlcHJlY2F0ZWRcclxuICAgICAqL1xyXG4gICAgb25VcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5vbkhkVXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCQ0ZcdTVFMjdcdTY2RjRcdTY1QjBcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTVDM0RcdTkxQ0ZcdTRFMERcdTg5ODFcdTU3MjhcdThGRDlcdTkxQ0NcdTUxOTlcdTU5MjdcdTVGQUFcdTczQUZcdTkwM0JcdThGOTFcdTYyMTZcdTgwMDVcdTRGN0ZcdTc1MjhnZXRDb21wb25lbnRcdTY1QjlcdTZDRDVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkVXBkYXRlKCkge31cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUwRFx1ODk4MVx1OTFDRFx1NTE5OSBcdTRGN0ZcdTc1Mjggb25IZERpc2FibGVcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKi9cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm9uSGREaXNhYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTdFQzRcdTRFRjZcdTg4QUJcdTc5ODFcdTc1MjhcdTY1RjZcdTYyNjdcdTg4NENcdUZGMENcdTZCRDRcdTU5ODJcdTRFQ0VcdTgyODJcdTcwQjlcdTRFQ0VcdTgyMUVcdTUzRjBcdTc5RkJcdTk2NjRcdTU0MEVcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGlzYWJsZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTZCNjRcdTY1QjlcdTZDRDVcdTRFMERcdTg5ODFcdTkxQ0RcdTUxOTkgXHU0RjdGXHU3NTI4IG9uSGREZXN0cm95XHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICovXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmQWxsQ2FsbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25IZERlc3Ryb3koKTtcclxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1x1NkUwNVx1OTY2NFx1OERERlx1NUY1M1x1NTI0RFx1N0M3Qlx1N0VEMVx1NUI5QVx1NjI0MFx1NjcwOVx1NzY4NFx1NUM1RVx1NjAyN1x1ODlDMlx1NUJERlx1NjVCOVx1NkNENVxyXG4gICAgICAgICAgICBPYnNlcnZhYmxlUHJvcGVydHkucmVtb3ZlQnlDYWxsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIC8vXHU5NTAwXHU2QkMxXHU2NUY2XHU2RTA1XHU5NjY0XHU2MjQwXHU2NzA5XHU3Njg0XHU1QzVFXHU2MDI3XHU1RjE1XHU3NTI4XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwLCBsID0ga2V5cy5sZW5ndGg7IHggPCBsOyB4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXNba2V5c1t4XV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTYyNEJcdTUyQThcdThDMDNcdTc1MjhcdTgyODJcdTcwQjlcdTk1MDBcdTZCQzFcdTY1RjZcdTYyNjdcdTg4NENcclxuICAgICAqIFx1NkI2NFx1NjVCOVx1NkNENVx1NEUzQVx1ODY1QVx1NjVCOVx1NkNENVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjVGNlx1OTFDRFx1NTE5OVx1ODk4Nlx1NzZENlx1NTM3M1x1NTNFRlxyXG4gICAgICovXHJcbiAgICBvbkhkRGVzdHJveSgpIHt9XHJcbn1cclxuIiwgImltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IEV2ZW50TWFwcyB9IGZyb20gXCIuLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi4vY29yZS9FdmVudEdsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZFZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpsb2FkTGFiZWwsIHRpcHM6XCJsb2FkIFx1NjU4N1x1NjcyQ1wiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHB1YmxpYyBsb2FkTGFiZWw6IExheWEuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIG9uQXdha2UoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5vd25lci5pXHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sb2FkTGFiZWwpO1xyXG4gICAgICAgIEV2ZW50R2xvYmFsLm9uKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICAgICAgdGhpcy5sb2FkTGFiZWwudGV4dCA9IFwiTG9hZC4uLi4wJVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFByb2dyZXNzKHYpIHtcclxuICAgICAgICB0aGlzLmxvYWRMYWJlbC50ZXh0ID0gYExvYWQuLi4uJHsodiAqIDEwMCkudG9GaXhlZCgyKX0lYDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgRXZlbnRHbG9iYWwub2ZmKEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCB0aGlzLCB0aGlzLmxvYWRQcm9ncmVzcyk7XHJcbiAgICB9XHJcbn1cclxuIiwgImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkZWZhdWx0UmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZGVmYXVsdFJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkb3duUmVzLCB0aXBzOlwiXHU4RDQ0XHU2RTkwXCIsdHlwZTpzdHJpbmdzLGFjY2VwdDpyZXN9Ki9cclxuICAgIHByaXZhdGUgZG93blJlcztcclxuICAgIC8qKiBAcHJvcCB7bmFtZTppc1NjYWxlLCB0aXBzOlwiXHU2NjJGXHU1NDI2XHU3RjI5XHU2NTNFXCIsdHlwZTpDaGVja30qL1xyXG4gICAgcHJpdmF0ZSBpc1NjYWxlID0gZmFsc2U7XHJcbiAgICAvKiogQHByb3Age25hbWU6c2NhbGVWYWwsIHRpcHM6XCJcdTdGMjlcdTY1M0VcdTc2ODRcdTUwM0NcIix0eXBlOk51bWJlciwgZGVmYXVsdDowLjl9Ki9cclxuICAgIHByaXZhdGUgc2NhbGVWYWw6IG51bWJlciA9IDAuOTtcclxuXHJcbiAgICBwcml2YXRlIG9sZFNjYWxlWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBvbGRTY2FsZVk6IG51bWJlcjtcclxuXHJcbiAgICBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlzU2NhbGUpO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5tb3VzZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2xkU2NhbGVYID0gKHRoaXMub3duZXIgYXMgTGF5YS5CdXR0b24pLmdldF9zY2FsZVgoKTtcclxuICAgICAgICB0aGlzLm9sZFNjYWxlWSA9ICh0aGlzLm93bmVyIGFzIExheWEuQnV0dG9uKS5nZXRfc2NhbGVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZURvd24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTa2luKHRoaXMuZG93blJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmkodGhpcy5zY2FsZVZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb3VzZU91dCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuICAgIG9uTW91c2VVcCgpIHtcclxuICAgICAgICB0aGlzLnNldFNraW4odGhpcy5kZWZhdWx0UmVzKTtcclxuICAgICAgICB0aGlzLnNldEFuaSgxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEFuaShzY2FsZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2NhbGUpIHJldHVybjtcclxuICAgICAgICBMYXlhLlR3ZWVuLnRvKFxyXG4gICAgICAgICAgICB0aGlzLm93bmVyLFxyXG4gICAgICAgICAgICB7IHNjYWxlWDogc2NhbGUgKiB0aGlzLm9sZFNjYWxlWCwgc2NhbGVZOiBzY2FsZSAqIHRoaXMub2xkU2NhbGVZIH0sXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgTGF5YS5FYXNlLmJhY2tPdXQsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRTa2luKHNraW46IHN0cmluZykge1xyXG4gICAgICAgIGlmICghc2tpbikgcmV0dXJuO1xyXG4gICAgICAgICh0aGlzLm93bmVyIGFzIExheWEuSW1hZ2UpLnNraW4gPSBza2luO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwgImltcG9ydCBSZXMgZnJvbSBcInNyYy9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCJzcmMvY29yZS9HYW1lU2NyaXB0XCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcInNyYy9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgTWFpbFZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haWxWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICBvbkNsaWNrKGU6IExheWEuRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5NYWlsVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBcdTc3RURcdTk0RkVcdTYzQTVcdThCRjdcdTZDNDJcdTUzNEZcdThCQUVcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFwaUh0dHAge1xyXG4gICAgLyoqIFx1NTIxRFx1NTlDQlx1NTMxNlx1NTM0Rlx1OEJBRSAqL1xyXG4gICAgaW5pdCA9IFwiL2luaXRcIixcclxufVxyXG4iLCAiLyoqIFx1NjI0MFx1NjcwOVx1ODg2OCAqL1xuZXhwb3J0IGNvbnN0IFRhYmxlID0ge1xuICAgIHRhc2s6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwMDEsXG4gICAgICAgICAgICByZXdhcmQ6IFwiMTAwMToxMDBcIixcbiAgICAgICAgICAgIHRpbWVzOiAxLFxuICAgICAgICAgICAgdGl0bGU6IFwiXHU3QjdFXHU1MjMwXHU5ODg2XHU3RUEyXHU1MzA1XCIsXG4gICAgICAgICAgICBkZXNjOiBcIlx1NzcwQlx1ODlDNlx1OTg5MVx1N0I3RVx1NTIzMFx1RkYwQ1x1NkJDRlx1NjVFNTFcdTZCMjFcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMDAyLFxuICAgICAgICAgICAgcmV3YXJkOiBcIjEwMDE6MjAwXCIsXG4gICAgICAgICAgICB0aW1lczogMTAsXG4gICAgICAgICAgICB0aXRsZTogXCJcdTgzRENcdTU3MzBcdTUyQTBcdTkwMUYxMFx1NkIyMVwiLFxuICAgICAgICAgICAgZGVzYzogXCJcdThGRDhcdTVERUUmXHU2QjIxXCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTAwMyxcbiAgICAgICAgICAgIHJld2FyZDogXCIxMDAxOjMwMFwiLFxuICAgICAgICAgICAgdGltZXM6IDEwLFxuICAgICAgICAgICAgdGl0bGU6IFwiXHU4M0RDXHU1NzMwXHU2NTM2MTBcdTZCMjFcIixcbiAgICAgICAgICAgIGRlc2M6IFwiXHU4RkQ4XHU1REVFJlx1NkIyMVwiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIHNpZ25JbjogW1xuICAgICAgICB7IGlkOiAxMDAxLCBkYXlzOiAxLCByZXdhcmQ6IFwiMTAwMToxMDBcIiB9LFxuICAgICAgICB7IGlkOiAxMDAyLCBkYXlzOiAyLCByZXdhcmQ6IFwiMTAwMToxMDBcIiB9LFxuICAgICAgICB7IGlkOiAxMDAzLCBkYXlzOiAzLCByZXdhcmQ6IFwiMTAwMToxMDBcIiB9LFxuICAgICAgICB7IGlkOiAxMDA0LCBkYXlzOiA0LCByZXdhcmQ6IFwiMTAwMToxMDBcIiB9LFxuICAgICAgICB7IGlkOiAxMDA1LCBkYXlzOiA1LCByZXdhcmQ6IFwiMTAwMToxMDBcIiB9LFxuICAgICAgICB7IGlkOiAxMDA2LCBkYXlzOiA2LCByZXdhcmQ6IFwiMTAwMToxMDBcIiB9LFxuICAgICAgICB7IGlkOiAxMDA3LCBkYXlzOiA3LCByZXdhcmQ6IFwiMTAwMToxMDBcIiB9LFxuICAgICAgICB7IGlkOiAxMDA4LCBkYXlzOiA4LCByZXdhcmQ6IFwiMTAwMToxMDBcIiB9LFxuICAgICAgICB7IGlkOiAxMDA5LCBkYXlzOiA5LCByZXdhcmQ6IFwiMTAwMToxMDBcIiB9LFxuICAgICAgICB7IGlkOiAxMDEwLCBkYXlzOiAxMCwgcmV3YXJkOiBcIjEwMDE6MTAwXCIgfSxcbiAgICBdLFxuICAgIHNlZWQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiMTAwMVwiLFxuICAgICAgICAgICAgbmFtZTogXCJcdTVDMEZcdTlFQTZcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICB1bmxvY2tfY29zdDogbnVsbCxcbiAgICAgICAgICAgIG1hdHVyZV90aW1lOiBcIjEwMFwiLFxuICAgICAgICAgICAgZ2V0X3BsYW50X2lkOiBcIjEwMDE6MlwiLFxuICAgICAgICAgICAgdW5sb2NrX3Jld2FyZDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiMTAwMlwiLFxuICAgICAgICAgICAgbmFtZTogXCJcdTczODlcdTdDNzNcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICB1bmxvY2tfY29zdDogXCIxMDAyOjIwMDBcIixcbiAgICAgICAgICAgIG1hdHVyZV90aW1lOiBcIjEwMVwiLFxuICAgICAgICAgICAgZ2V0X3BsYW50X2lkOiBcIjEwMDE6M1wiLFxuICAgICAgICAgICAgdW5sb2NrX3Jld2FyZDogXCIxMDAyOjEwMTAsMTAwMToyMDEwMFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCIxMDAyXCIsXG4gICAgICAgICAgICBuYW1lOiBcIlx1NTkyN1x1OEM0NlwiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIHVubG9ja19jb3N0OiBcIjEwMDI6MzAwMFwiLFxuICAgICAgICAgICAgbWF0dXJlX3RpbWU6IFwiMTAyXCIsXG4gICAgICAgICAgICBnZXRfcGxhbnRfaWQ6IFwiMTAwMTo0XCIsXG4gICAgICAgICAgICB1bmxvY2tfcmV3YXJkOiBcIjEwMDI6MTAwMCwxMDAxOjIwMDAxXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjEwMDRcIixcbiAgICAgICAgICAgIG5hbWU6IFwiXHU3NjdEXHU4NDFEXHU1MzVDXCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgdW5sb2NrX2Nvc3Q6IFwiMTAwMjo0MDAwXCIsXG4gICAgICAgICAgICBtYXR1cmVfdGltZTogXCIxMDNcIixcbiAgICAgICAgICAgIGdldF9wbGFudF9pZDogXCIxMDAxOjVcIixcbiAgICAgICAgICAgIHVubG9ja19yZXdhcmQ6IFwiMTAwMjoxMDEwLDEwMDE6MjAxMDFcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiMTAwNVwiLFxuICAgICAgICAgICAgbmFtZTogXCJcdThGQTNcdTY5MTJcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICB1bmxvY2tfY29zdDogXCIxMDAyOjUwMDBcIixcbiAgICAgICAgICAgIG1hdHVyZV90aW1lOiBcIjEwNFwiLFxuICAgICAgICAgICAgZ2V0X3BsYW50X2lkOiBcIjEwMDE6NlwiLFxuICAgICAgICAgICAgdW5sb2NrX3Jld2FyZDogXCIxMDAyOjEwMDAsMTAwMToyMDAwMlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCIxMDA2XCIsXG4gICAgICAgICAgICBuYW1lOiBcIlx1OUVDNFx1NzREQ1wiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIHVubG9ja19jb3N0OiBcIjEwMDI6NjAwMFwiLFxuICAgICAgICAgICAgbWF0dXJlX3RpbWU6IFwiMTA1XCIsXG4gICAgICAgICAgICBnZXRfcGxhbnRfaWQ6IFwiMTAwMTo3XCIsXG4gICAgICAgICAgICB1bmxvY2tfcmV3YXJkOiBcIjEwMDI6MTAxMCwxMDAxOjIwMTAyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjEwMDdcIixcbiAgICAgICAgICAgIG5hbWU6IFwiXHU4OTdGXHU3RUEyXHU2N0ZGXCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgdW5sb2NrX2Nvc3Q6IFwiMTAwMjo3MDAwXCIsXG4gICAgICAgICAgICBtYXR1cmVfdGltZTogXCIxMDZcIixcbiAgICAgICAgICAgIGdldF9wbGFudF9pZDogXCIxMDAxOjhcIixcbiAgICAgICAgICAgIHVubG9ja19yZXdhcmQ6IFwiMTAwMjoxMDAwLDEwMDE6MjAwMDNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiMTAwOFwiLFxuICAgICAgICAgICAgbmFtZTogXCJcdTgwRTFcdTg0MURcdTUzNUNcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICB1bmxvY2tfY29zdDogXCIxMDAyOjgwMDBcIixcbiAgICAgICAgICAgIG1hdHVyZV90aW1lOiBcIjEwN1wiLFxuICAgICAgICAgICAgZ2V0X3BsYW50X2lkOiBcIjEwMDE6OVwiLFxuICAgICAgICAgICAgdW5sb2NrX3Jld2FyZDogXCIxMDAyOjEwMTAsMTAwMToyMDEwM1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCIxMDA5XCIsXG4gICAgICAgICAgICBuYW1lOiBcIlx1ODQ2MVx1ODQwNFwiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIHVubG9ja19jb3N0OiBcIjEwMDI6OTAwMFwiLFxuICAgICAgICAgICAgbWF0dXJlX3RpbWU6IFwiMTA4XCIsXG4gICAgICAgICAgICBnZXRfcGxhbnRfaWQ6IFwiMTAwMToxMFwiLFxuICAgICAgICAgICAgdW5sb2NrX3Jld2FyZDogXCIxMDAyOjEwMDAsMTAwMToyMDAwNFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCIxMDEwXCIsXG4gICAgICAgICAgICBuYW1lOiBcIlx1OTc1Mlx1ODNEQ1wiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIHVubG9ja19jb3N0OiBcIjEwMDI6MTAwMDBcIixcbiAgICAgICAgICAgIG1hdHVyZV90aW1lOiBcIjEwOVwiLFxuICAgICAgICAgICAgZ2V0X3BsYW50X2lkOiBcIjEwMDE6MTFcIixcbiAgICAgICAgICAgIHVubG9ja19yZXdhcmQ6IFwiMTAwMjoxMDEwLDEwMDE6MjAxMDRcIixcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIHBsYW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMDAxLFxuICAgICAgICAgICAgbmFtZTogXCJcdTVDMEZcdTlFQTZcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICBnYWluOiBcIjEwMDE6MTAwMCwxMDAyOjIwMDAwXCIsXG4gICAgICAgICAgICBkZXNjOiBudWxsLFxuICAgICAgICAgICAgbG9zdF9zdW06IDIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMDAyLFxuICAgICAgICAgICAgbmFtZTogXCJcdTczODlcdTdDNzNcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICBnYWluOiBcIjEwMDE6MTIwMCwxMDAyOjIwMTAwXCIsXG4gICAgICAgICAgICBkZXNjOiBudWxsLFxuICAgICAgICAgICAgbG9zdF9zdW06IDQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMDAzLFxuICAgICAgICAgICAgbmFtZTogXCJcdTU5MjdcdThDNDZcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICBnYWluOiBcIjEwMDE6MTAwMCwxMDAyOjIwMDAxXCIsXG4gICAgICAgICAgICBkZXNjOiBudWxsLFxuICAgICAgICAgICAgbG9zdF9zdW06IDYsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMDA0LFxuICAgICAgICAgICAgbmFtZTogXCJcdTc2N0RcdTg0MURcdTUzNUNcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICBnYWluOiBcIjEwMDE6MTIwMCwxMDAyOjIwMTAxXCIsXG4gICAgICAgICAgICBkZXNjOiBudWxsLFxuICAgICAgICAgICAgbG9zdF9zdW06IDgsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMDA1LFxuICAgICAgICAgICAgbmFtZTogXCJcdThGQTNcdTY5MTJcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICBnYWluOiBcIjEwMDE6MTAwMCwxMDAyOjIwMDAyXCIsXG4gICAgICAgICAgICBkZXNjOiBudWxsLFxuICAgICAgICAgICAgbG9zdF9zdW06IDEwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTAwNixcbiAgICAgICAgICAgIG5hbWU6IFwiXHU5RUM0XHU3NERDXCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgZ2FpbjogXCIxMDAxOjEyMDAsMTAwMjoyMDEwMlwiLFxuICAgICAgICAgICAgZGVzYzogbnVsbCxcbiAgICAgICAgICAgIGxvc3Rfc3VtOiAxMixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwMDcsXG4gICAgICAgICAgICBuYW1lOiBcIlx1ODk3Rlx1N0VBMlx1NjdGRlwiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIGdhaW46IFwiMTAwMToxMDAwLDEwMDI6MjAwMDNcIixcbiAgICAgICAgICAgIGRlc2M6IG51bGwsXG4gICAgICAgICAgICBsb3N0X3N1bTogMTQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMDA4LFxuICAgICAgICAgICAgbmFtZTogXCJcdTgwRTFcdTg0MURcdTUzNUNcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICBnYWluOiBcIjEwMDE6MTIwMCwxMDAyOjIwMTAzXCIsXG4gICAgICAgICAgICBkZXNjOiBudWxsLFxuICAgICAgICAgICAgbG9zdF9zdW06IDE2LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTAwOSxcbiAgICAgICAgICAgIG5hbWU6IFwiXHU4NDYxXHU4NDA0XCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgZ2FpbjogXCIxMDAxOjEwMDAsMTAwMjoyMDAwNFwiLFxuICAgICAgICAgICAgZGVzYzogbnVsbCxcbiAgICAgICAgICAgIGxvc3Rfc3VtOiAxOCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwMTAsXG4gICAgICAgICAgICBuYW1lOiBcIlx1OTc1Mlx1ODNEQ1wiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIGdhaW46IFwiMTAwMToxMjAwLDEwMDI6MjAxMDRcIixcbiAgICAgICAgICAgIGRlc2M6IG51bGwsXG4gICAgICAgICAgICBsb3N0X3N1bTogMjAsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBwZXQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwMDEsXG4gICAgICAgICAgICBuYW1lOiBcIlx1OTFEMVx1NkJEQlx1NzJBQ1wiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIHZpdGFsaXR5X21heDogMTAwLFxuICAgICAgICAgICAgdml0YWxpdHlfY29uc3VtZTogMTAsXG4gICAgICAgICAgICBjb3N0OiBcIjEwMDI6MTAwMFwiLFxuICAgICAgICAgICAgZGVzYzogbnVsbCxcbiAgICAgICAgICAgIHNlbnNpdGl2ZTogNDAsXG4gICAgICAgICAgICBhYmlsaXR5OiA0MCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwMDIsXG4gICAgICAgICAgICBuYW1lOiBcIlx1OEQzNVx1NUJCRVx1NzJBQ1wiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIHZpdGFsaXR5X21heDogMTUwLFxuICAgICAgICAgICAgdml0YWxpdHlfY29uc3VtZTogOCxcbiAgICAgICAgICAgIGNvc3Q6IFwiMTAwMjoyMDAwXCIsXG4gICAgICAgICAgICBkZXNjOiBudWxsLFxuICAgICAgICAgICAgc2Vuc2l0aXZlOiA1MCxcbiAgICAgICAgICAgIGFiaWxpdHk6IDUwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTAwMyxcbiAgICAgICAgICAgIG5hbWU6IFwiXHU2Q0YwXHU4RkVBXHU3MkFDXCIsXG4gICAgICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICAgICAgdml0YWxpdHlfbWF4OiAyMDAsXG4gICAgICAgICAgICB2aXRhbGl0eV9jb25zdW1lOiA2LFxuICAgICAgICAgICAgY29zdDogXCIxMDAyOjMwMDBcIixcbiAgICAgICAgICAgIGRlc2M6IG51bGwsXG4gICAgICAgICAgICBzZW5zaXRpdmU6IDYwLFxuICAgICAgICAgICAgYWJpbGl0eTogNjAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMDA0LFxuICAgICAgICAgICAgbmFtZTogXCJcdTVGQjdcdTU2RkRcdTcyNjdcdTdGOEFcdTcyQUNcIixcbiAgICAgICAgICAgIGljb246IG51bGwsXG4gICAgICAgICAgICB2aXRhbGl0eV9tYXg6IDI1MCxcbiAgICAgICAgICAgIHZpdGFsaXR5X2NvbnN1bWU6IDQsXG4gICAgICAgICAgICBjb3N0OiBcIjEwMDI6NDAwMFwiLFxuICAgICAgICAgICAgZGVzYzogbnVsbCxcbiAgICAgICAgICAgIHNlbnNpdGl2ZTogNzAsXG4gICAgICAgICAgICBhYmlsaXR5OiA3MCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwMDUsXG4gICAgICAgICAgICBuYW1lOiBcIlx1OEZCOVx1OTU1Q1x1NzI2N1x1N0Y4QVx1NzJBQ1wiLFxuICAgICAgICAgICAgaWNvbjogbnVsbCxcbiAgICAgICAgICAgIHZpdGFsaXR5X21heDogMzAwLFxuICAgICAgICAgICAgdml0YWxpdHlfY29uc3VtZTogMixcbiAgICAgICAgICAgIGNvc3Q6IFwiMTAwMjo1MDAwXCIsXG4gICAgICAgICAgICBkZXNjOiBudWxsLFxuICAgICAgICAgICAgc2Vuc2l0aXZlOiA4MCxcbiAgICAgICAgICAgIGFiaWxpdHk6IDgwLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgb3JkZXI6IFtcbiAgICAgICAgeyBpZDogMSwgcmV3YXJkOiBcIjEwMDE6MTAwXCIsIGNvbmRpdGlvbjogXCIxMDAxOjEwXCIgfSxcbiAgICAgICAgeyBpZDogMiwgcmV3YXJkOiBcIjEwMDE6MjAwXCIsIGNvbmRpdGlvbjogXCIxMDAxOjExLDEwMDI6MTFcIiB9LFxuICAgICAgICB7IGlkOiAzLCByZXdhcmQ6IFwiMTAwMTozMDBcIiwgY29uZGl0aW9uOiBcIjEwMDE6MTAsMTAwMjoxMCwxMDA3OjEwLDEwMDU6NlwiIH0sXG4gICAgICAgIHsgaWQ6IDQsIHJld2FyZDogXCIxMDAxOjQwMFwiLCBjb25kaXRpb246IFwiMTAwMToxMSwxMDAyOjExLDEwMDc6MTEsMTAwNTo3XCIgfSxcbiAgICAgICAgeyBpZDogNSwgcmV3YXJkOiBcIjEwMDE6NTAwXCIsIGNvbmRpdGlvbjogXCIxMDAxOjEwLDEwMDI6MTAsMTAwNzoxMCwxMDA1OjdcIiB9LFxuICAgICAgICB7IGlkOiA2LCByZXdhcmQ6IFwiMTAwMTo2MDBcIiwgY29uZGl0aW9uOiBcIjEwMDE6MTEsMTAwMjoxMSwxMDA3OjExLDEwMDU6OFwiIH0sXG4gICAgICAgIHsgaWQ6IDcsIHJld2FyZDogXCIxMDAxOjcwMFwiLCBjb25kaXRpb246IFwiMTAwMToxMCwxMDAyOjEwLDEwMDc6MTAsMTAwNTo4XCIgfSxcbiAgICAgICAgeyBpZDogOCwgcmV3YXJkOiBcIjEwMDE6ODAwXCIsIGNvbmRpdGlvbjogXCIxMDAxOjExLDEwMDI6MTEsMTAwNzoxMSwxMDA1OjlcIiB9LFxuICAgICAgICB7IGlkOiA5LCByZXdhcmQ6IFwiMTAwMTo5MDBcIiwgY29uZGl0aW9uOiBcIjEwMDE6MTAsMTAwMjoxMCwxMDA3OjEwLDEwMDU6OVwiIH0sXG4gICAgICAgIHsgaWQ6IDEwLCByZXdhcmQ6IFwiMTAwMToxMDAwXCIsIGNvbmRpdGlvbjogXCIxMDAxOjExLDEwMDI6MTEsMTAwNzoxMSwxMDA1OjEwXCIgfSxcbiAgICAgICAgeyBpZDogMTEsIHJld2FyZDogXCIxMDAxOjExMDBcIiwgY29uZGl0aW9uOiBcIjEwMDE6MTAsMTAwMjoxMCwxMDA3OjEwLDEwMDU6MTBcIiB9LFxuICAgICAgICB7IGlkOiAxMiwgcmV3YXJkOiBcIjEwMDE6MTIwMFwiLCBjb25kaXRpb246IFwiMTAwMToxMSwxMDAyOjExLDEwMDc6MTEsMTAwNToxMVwiIH0sXG4gICAgICAgIHsgaWQ6IDEzLCByZXdhcmQ6IFwiMTAwMToxMzAwXCIsIGNvbmRpdGlvbjogXCIxMDAxOjEwLDEwMDI6MTAsMTAwNzoxMCwxMDA1OjExXCIgfSxcbiAgICAgICAgeyBpZDogMTQsIHJld2FyZDogXCIxMDAxOjE0MDBcIiwgY29uZGl0aW9uOiBcIjEwMDE6MTEsMTAwMjoxMSwxMDA3OjExLDEwMDU6MTJcIiB9LFxuICAgIF0sXG4gICAgbGFuZzogW10sXG4gICAgbGFuZExldmVsOiBbXG4gICAgICAgIHsgaWQ6IDEsIHJld2FyZDogXCIxMDAyOjBcIiwgY29zdDogXCIxMDAxOjBcIiwgZ2FpbjogbnVsbCB9LFxuICAgICAgICB7IGlkOiAyLCByZXdhcmQ6IFwiMTAwMjoxNTAwXCIsIGNvc3Q6IFwiMTAwMTozMDAwMFwiLCBnYWluOiAxIH0sXG4gICAgICAgIHsgaWQ6IDMsIHJld2FyZDogXCIxMDAyOjIwMDBcIiwgY29zdDogXCIxMDAxOjQwMDAwXCIsIGdhaW46IDIgfSxcbiAgICAgICAgeyBpZDogNCwgcmV3YXJkOiBcIjEwMDI6MjUwMFwiLCBjb3N0OiBcIjEwMDE6NTAwMDBcIiwgZ2FpbjogMyB9LFxuICAgICAgICB7IGlkOiA1LCByZXdhcmQ6IFwiMTAwMjozMDAwXCIsIGNvc3Q6IFwiMTAwMTo2MDAwMFwiLCBnYWluOiA0IH0sXG4gICAgICAgIHsgaWQ6IDYsIHJld2FyZDogXCIxMDAyOjM1MDBcIiwgY29zdDogXCIxMDAxOjcwMDAwXCIsIGdhaW46IDUgfSxcbiAgICAgICAgeyBpZDogNywgcmV3YXJkOiBcIjEwMDI6NDAwMFwiLCBjb3N0OiBcIjEwMDE6ODAwMDBcIiwgZ2FpbjogNiB9LFxuICAgIF0sXG4gICAgZmVlZDogW1xuICAgICAgICB7IGlkOiAxMDAxLCBuYW1lOiBcIlx1OTk3Q1x1NUU3MlwiLCBpY29uOiBudWxsLCB2aXRhbGl0eTogMTAsIGNvc3Q6IFwiMTAwMjoxMDAwXCIsIGRlc2M6IG51bGwgfSxcbiAgICAgICAgeyBpZDogMTAwMiwgbmFtZTogXCJcdTU3NUFcdTY3OUNcIiwgaWNvbjogbnVsbCwgdml0YWxpdHk6IDExLCBjb3N0OiBcIjEwMDI6MjAwMFwiLCBkZXNjOiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDEwMDMsIG5hbWU6IFwiXHU3MDZCXHU4MTdGXCIsIGljb246IG51bGwsIHZpdGFsaXR5OiAxMiwgY29zdDogXCIxMDAyOjMwMDBcIiwgZGVzYzogbnVsbCB9LFxuICAgICAgICB7IGlkOiAxMDA0LCBuYW1lOiBcIlx1NzI1Qlx1ODA4OVwiLCBpY29uOiBudWxsLCB2aXRhbGl0eTogMTMsIGNvc3Q6IFwiMTAwMjo0MDAwXCIsIGRlc2M6IG51bGwgfSxcbiAgICAgICAgeyBpZDogMTAwNSwgbmFtZTogXCJcdTczMkFcdTgwODlcIiwgaWNvbjogbnVsbCwgdml0YWxpdHk6IDE0LCBjb3N0OiBcIjEwMDI6NTAwMFwiLCBkZXNjOiBudWxsIH0sXG4gICAgICAgIHsgaWQ6IDEwMDYsIG5hbWU6IFwiXHU5RTIxXHU4MDg5XCIsIGljb246IG51bGwsIHZpdGFsaXR5OiAxNSwgY29zdDogXCIxMDAyOjYwMDBcIiwgZGVzYzogbnVsbCB9LFxuICAgIF0sXG4gICAgY3VycmVuY3k6IFtcbiAgICAgICAgeyBpZDogMTAwMSwgbmFtZTogXCJcdTk0QkJcdTc3RjNcIiwgaWNvbjogbnVsbCB9LFxuICAgICAgICB7IGlkOiAxMDAyLCBuYW1lOiBcIlx1OTFEMVx1NUUwMVwiLCBpY29uOiBudWxsIH0sXG4gICAgXSxcbiAgICBjb25maWc6IFtcbiAgICAgICAgeyBpZDogXCJhbGxfc3BwZWRfdXBfdGltZVwiLCB2YWx1ZTogMzAgfSxcbiAgICAgICAgeyBpZDogXCJhbGxfc3BwZWRfdXBfdGltZXNcIiwgdmFsdWU6IDYwMCB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCJ1bmxvY2tfbGFuZF9jb3N0XCIsXG4gICAgICAgICAgICB2YWx1ZTogXCIxMDAyOjAsMTAwMjowLDEwMDI6NDAwMDAsMTAwMjo1MDAwMCwxMDAyOjIwMDAwLDEwMDI6MjAwMDAsMTAwMjoyMDAwMCwxMDAyOjIwMDAwLDEwMDI6MjAwMDBcIixcbiAgICAgICAgfSxcbiAgICBdLFxufTtcbiIsICJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb29scyB7XHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NUI1N1x1N0IyNlxyXG4gICAgICogQHBhcmFtIHN0ciBcdTg5ODFcdTg5RTNcdTY3OTBcdTc2ODRcdTVCNTdcdTdCMjZcclxuICAgICAqIEBwYXJhbSBmb3JtYXQgXHU1MDVBXHU0RTNBXHU1M0MyXHU4MDAzXHU3Njg0XHU1QjU3XHU3QjI2XHU5RUQ4XHU4QkE0XHU0RTNBLFxyXG4gICAgICogQHJldHVybnMgXHU4OUUzXHU2NzkwXHU1OTdEXHU3Njg0XHU1QjU3XHU3QjI2XHU1MjE3XHU4ODY4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwYXJzZVN0cmluZyhzdHI6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcgPSBcIixcIikge1xyXG4gICAgICAgIHJldHVybiBzdHIuc3BsaXQoZm9ybWF0KTtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi9UYWJsZVwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ3VycmVuY3lCYXNlLFxyXG4gICAgT3JkZXJCYXNlLFxyXG4gICAgUGxhbnRCYXNlLFxyXG4gICAgUmV3YXJkQmFzZSxcclxuICAgIFJld2FyZEN1cnJlbmN5QmFzZSxcclxuICAgIFRhc2tCYXNlLFxyXG59IGZyb20gXCIuL1RhYmxlT2JqZWN0XCI7XHJcbmltcG9ydCBUb29scyBmcm9tIFwiLi9Ub29sc1wiO1xyXG5cclxuY29uc3QgVGFibGVQcm9wZXJ0eUV2ZW50ID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdThCQTJcdTUzNTVcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBvcmRlcihkOiB0eXBlb2YgVGFibGUub3JkZXJbMF0pIHtcclxuICAgICAgICBsZXQgciA9IFRvb2xzLnBhcnNlU3RyaW5nKGQucmV3YXJkLCBcIjpcIik7XHJcbiAgICAgICAgcmV0dXJuIDxPcmRlckJhc2U+e1xyXG4gICAgICAgICAgICBpZDogZC5pZCxcclxuICAgICAgICAgICAgcmV3YXJkOiB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IFRhYmxlQW5hbHl6ZS50YWJsZShcImN1cnJlbmN5XCIpLmdldChOdW1iZXIoclswXSkpLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IE51bWJlcihyWzFdKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZGl0aW9uOiBUb29scy5wYXJzZVN0cmluZyhkLmNvbmRpdGlvbikubWFwKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IFRvb2xzLnBhcnNlU3RyaW5nKGUsIFwiOlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbnQ6IFRhYmxlQW5hbHl6ZS50YWJsZShcInBsYW50XCIpLmdldChOdW1iZXIodlswXSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBOdW1iZXIodlsxXSksXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1ODlFM1x1Njc5MFx1NjIxMFx1NzE5Rlx1NjkwRFx1NzI2OVx1ODg2OFxyXG4gICAgICogQHBhcmFtIGQgXHU2NTcwXHU2MzZFXHJcbiAgICAgKi9cclxuICAgIHBsYW50KGQ6IHR5cGVvZiBUYWJsZS5wbGFudFswXSkge1xyXG4gICAgICAgIHJldHVybiA8UGxhbnRCYXNlPntcclxuICAgICAgICAgICAgaWQ6IGQuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICAgICAgaWNvbjogZC5pY29uLFxyXG4gICAgICAgICAgICBnYWluOiBUb29scy5wYXJzZVN0cmluZyhkLmdhaW4pLm1hcCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBUb29scy5wYXJzZVN0cmluZyhlLCBcIjpcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFJld2FyZEN1cnJlbmN5QmFzZT57XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqOiBUYWJsZUFuYWx5emUudGFibGUoXCJjdXJyZW5jeVwiKS5nZXQoTnVtYmVyKHZbMF0pKSxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogTnVtYmVyKHZbMV0pLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRlc2M6IGQuZGVzYyxcclxuICAgICAgICAgICAgbG9zdF9zdW06IGQubG9zdF9zdW0sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTg5RTNcdTY3OTBcdThEMjdcdTVFMDFcdTg4NjhcclxuICAgICAqIEBwYXJhbSBkIFx1NjU3MFx1NjM2RVxyXG4gICAgICovXHJcbiAgICBjdXJyZW5jeShkOiB0eXBlb2YgVGFibGUuY3VycmVuY3lbMF0pIHtcclxuICAgICAgICByZXR1cm4gPEN1cnJlbmN5QmFzZT57XHJcbiAgICAgICAgICAgIGlkOiBkLmlkLFxyXG4gICAgICAgICAgICBpY29uOiBkLmljb24sXHJcbiAgICAgICAgICAgIG5hbWU6IGQubmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxufTtcclxuXHJcbnR5cGUgdHlwZVRhYmxlID0gdHlwZW9mIFRhYmxlUHJvcGVydHlFdmVudDtcclxuXHJcbmNsYXNzIFRhYmxlQ29udHJvbCB7XHJcbiAgICBwcml2YXRlIHRhYmxlQ2FjaGU6IE1hcDxrZXlvZiB0eXBlVGFibGUsIFJldHVyblR5cGU8dHlwZVRhYmxlW2tleW9mIHR5cGVUYWJsZV0+W10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU4OUUzXHU2NzkwXHU3Njg0XHU4ODY4XHJcbiAgICAgKiBAcGFyYW0ga2V5IFx1ODg2OFx1NzY4NGtleVxyXG4gICAgICovXHJcbiAgICB0YWJsZTxUIGV4dGVuZHMga2V5b2YgdHlwZVRhYmxlPihcclxuICAgICAgICBrZXk6IFRcclxuICAgICk6IHtcclxuICAgICAgICBsaXN0OiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT5bXTtcclxuICAgICAgICBnZXQ6IHsgKGlkOiBudW1iZXIpOiBSZXR1cm5UeXBlPHR5cGVUYWJsZVtUXT4gfTtcclxuICAgIH0ge1xyXG4gICAgICAgIC8vXHU4QkZCXHU1M0Q2XHU3RUM0XHU2MjEwXHJcbiAgICAgICAgaWYgKHRoaXMudGFibGVDYWNoZS5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YWJsZUJhY2sodGhpcy50YWJsZUNhY2hlLmdldChrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9cdTg5RTNcdTY3OTBcdTY1NzBcdTYzNkVcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIFRhYmxlW2tleV0uZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goVGFibGVQcm9wZXJ0eUV2ZW50W2tleV0oZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vXHU3RjEzXHU1QjU4XHU4OUUzXHU2NzkwXHU4ODY4XHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgdGhpcy50YWJsZUNhY2hlLnNldChrZXksIGxpc3QpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlQmFjayhsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NzUyOFx1NEU4RXRhYmxlXHU2NUI5XHU2Q0Q1XHU4RkQ0XHU1NkRFXHU2NTcwXHU2MzZFXHU2ODNDXHU1RjBGXHU1NDhDXHU2REZCXHU1MkEwXHU4M0I3XHU1M0Q2XHU1MzU1XHU0RTJBXHU4ODY4XHU2NTcwXHU2MzZFXHJcbiAgICAgKiBAcGFyYW0gbGlzdCBcdTg5RTNcdTY3OTBcdTg4NjhcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcclxuICAgICAqIEByZXR1cm5zIFx1OEZENFx1NTZERVx1NjMwN1x1NUI5QVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHRhYmxlQmFjayhsaXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGlzdDogbGlzdCxcclxuICAgICAgICAgICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMCwgbCA9IGxpc3QubGVuZ3RoOyB4IDwgbDsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RbeF0uaWQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RbeF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODg2OFx1NjgzQ1x1ODlFM1x1Njc5MFx1NURFNVx1NTE3N1xyXG4gKi9cclxuY29uc3QgVGFibGVBbmFseXplID0gbmV3IFRhYmxlQ29udHJvbCgpO1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZUFuYWx5emU7XHJcbiIsICJpbXBvcnQgRXZlbnRHbG9iYWwsIHsgRXZlbnRPbiwgRmluZEJ5TmFtZSB9IGZyb20gXCIuL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCBHYW1lU2NyaXB0IGZyb20gXCIuL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi9JbnN0YW5jZVwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCBDb3JlID0ge1xyXG4gICAgLyoqIFx1NUJGOVx1OEM2MVx1NUM1RVx1NjAyN1x1N0VEMVx1NUI5QVx1NTNFRlx1NzZEMVx1NTQyQ1x1NTNEOFx1NTMxNiAqL1xyXG4gICAgb2JzZXJ2YWJsZVByb3BlcnR5OiBPYnNlcnZhYmxlUHJvcGVydHksXHJcbiAgICAvKiogXHU3NTRDXHU5NzYyXHU3QkExXHU3NDA2XHU1NjY4ICovXHJcbiAgICB2aWV3OiBWaWV3TWFuYWdlci5pbnN0LFxyXG4gICAgLyoqIFx1NUYxNVx1NjRDRVx1ODExQVx1NjcyQ1x1N0VDNFx1NEVGNiAqL1xyXG4gICAgZ2FtZVNjcmlwdDogR2FtZVNjcmlwdCxcclxuICAgIC8qKiBcdTUzNTVcdTRGOEJcdTg4QzVcdTk5NzBcdTU2NjggKi9cclxuICAgIGluc3RhbmNlOiBJbnN0YW5jZSxcclxuICAgIC8qKiBcdTRFOEJcdTRFRjZcdTdFRDFcdTVCOUEgPT4gXHU3RUQxXHU1QjlBXHU1MjMwXHU4OEM1XHU5OTcwXHU1NjY4XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuICAgIGV2ZW50T246IEV2ZW50T24sXHJcbiAgICAvKiogXHU2N0U1XHU2MjdFXHU1QzVFXHU2MDI3XHU1NDBEXHU3OUYwXHU1QzVFXHU2MDI3XHU1MjMwXHU4MjgyXHU3MEI5XHU0RTBBIFx1MzAxMFx1NTNFQVx1NzUyOFx1NTcyOEdhbWVTY3JpcHRcdTdFRTdcdTYyN0ZcdTc2ODRcdTVCNTBcdTdDN0JcdThFQUJcdTRFMEFcdTMwMTEgKi9cclxuICAgIGZpbmRCeU5hbWU6IEZpbmRCeU5hbWUsXHJcbiAgICAvKiogXHU1MTY4XHU1QzQwXHU0RThCXHU0RUY2ICovXHJcbiAgICBldmVudEdsb2JhbDogRXZlbnRHbG9iYWwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3JlO1xyXG4iLCAiaW1wb3J0IHsgSW5zdGFuY2UgfSBmcm9tIFwiLi4vY29yZS9JbnN0YW5jZVwiO1xyXG5cclxuLyoqXHJcbiAqIFx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2RlxyXG4gKi9cclxuY2xhc3MgVXNlckluZm8ge1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN1x1NTQwRFx1NzlGMCAqL1xyXG4gICAgbmlja25hbWU6IHN0cmluZyA9IFwibmFtZVwiO1xyXG4gICAgLyoqIFx1NzUyOFx1NjIzN2lkICovXHJcbiAgICB1aWQ6IG51bWJlciA9IDA7XHJcbiAgICAvKiogXHU3NTI4XHU1NDBEXHU1OTM0XHU1MENGICovXHJcbiAgICBhdmF0YXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAvKiogXHU5NEJCXHU3N0YzICovXHJcbiAgICBkaWFtb25kOiBudW1iZXIgPSA5OTk7XHJcbiAgICAvKiogXHU5MUQxXHU1RTAxICovXHJcbiAgICBnb2xkOiBudW1iZXIgPSA5OTk7XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFVzZXJJbmZvKCk7XHJcbiIsICJpbXBvcnQgeyBBcGlIdHRwIH0gZnJvbSBcInNyYy9jb21tb24vTmV0TWFwc1wiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCJzcmMvY29tbW9uL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUFuYWx5emUgZnJvbSBcInNyYy9jb21tb24vVGFibGVBbmFseXplXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCJzcmMvY29yZS9pbmRleFwiO1xyXG5pbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tbW9uL1VzZXJJbmZvXCI7XHJcblxyXG4vLyAgTWFpblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5WaWV3IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTphZGRMYW5kTGF5ZXIsIHRpcHM6XCJcdTYyRDNcdTVDNTVcdTU3MUZcdTU3MzBcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGFkZExhbmRMYXllcjogTGF5YS5Cb3ggPSBudWxsO1xyXG5cclxuICAgIC8qKiBAcHJvcCB7bmFtZTpkaWFtb25kTm9kZSwgdGlwczpcIlx1OTRCQlx1NzdGM1x1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgZGlhbW9uZE5vZGU6IExheWEuRm9udENsaXAgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmdvbGROb2RlLCB0aXBzOlwiXHU5MUQxXHU1RTAxXHU4MjgyXHU3MEI5XCIsIHR5cGU6Tm9kZX0qL1xyXG4gICAgcHJpdmF0ZSBnb2xkTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6YXZhdGFyTm9kZSwgdGlwczpcIlx1NTkzNFx1NTBDRlx1ODI4Mlx1NzBCOVwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYXZhdGFyTm9kZTogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcblxyXG4gICAgLy8gXHU2NkY0XHU1OTFBXHU1M0MyXHU2NTcwXHU4QkY0XHU2NjBFXHU4QkY3XHU4QkJGXHU5NUVFOiBodHRwczovL2xkYzIubGF5YWJveC5jb20vZG9jLz9uYXY9emgtYXMtMi00LTBcclxuXHJcbiAgICBvbkhkRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIENvcmUub2JzZXJ2YWJsZVByb3BlcnR5XHJcbiAgICAgICAgICAgIC53YXRjaChVc2VySW5mbywgdGhpcylcclxuICAgICAgICAgICAgLmtleShcImRpYW1vbmRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbW9uZE5vZGUudmFsdWUgPSBlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAua2V5KFwiZ29sZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb2xkTm9kZS52YWx1ZSA9IGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5rZXkoXCJhdmF0YXJcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhdGFyTm9kZS5za2luID0gZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFRhYmxlQW5hbHl6ZS50YWJsZShcIm9yZGVyXCIpLmxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIEBDb3JlLmV2ZW50T24oQXBpSHR0cC5pbml0KVxyXG4gICAgcHJpdmF0ZSBnYW1lSW5pdChkOiBOZXRJbml0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZCk7XHJcbiAgICAgICAgbGV0IGEgPSBkLmRhdGEubGFuZExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhlOiBMYXlhLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSk7XHJcbiAgICAgICAgc3dpdGNoIChlLnRhcmdldC5uYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjbG9zZUFkZExhbmRMYXllclwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRMYW5kTGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0YXNrXCI6XHJcbiAgICAgICAgICAgICAgICBDb3JlLnZpZXcub3BlbihSZXMudmlld3MuVGFza1ZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaWduSW5cIjpcclxuICAgICAgICAgICAgICAgIENvcmUudmlldy5vcGVuKFJlcy52aWV3cy5TaWduSW5WaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibWFpbFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLk1haWxWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2hvcFwiOlxyXG4gICAgICAgICAgICAgICAgQ29yZS52aWV3Lm9wZW4oUmVzLnZpZXdzLlNob3BWaWV3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IENvcmUgZnJvbSBcInNyYy9jb3JlL2luZGV4XCI7XHJcblxyXG4vLyAgRmllbGRDb21wb25lbnQgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbi8qKlxyXG4gKiBcdTc1MzBcdTU3MzBcdTdFQzRcdTRFRjZcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgQ29yZS5nYW1lU2NyaXB0IHtcclxuICAgIC8qKiBcdTY5MERcdTcyNjlpY29uICovXHJcbiAgICBAQ29yZS5maW5kQnlOYW1lXHJcbiAgICBwcml2YXRlIGljb246IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1NTcxRlx1NTczMFx1ODI4Mlx1NzBCOSAqL1xyXG4gICAgcHJpdmF0ZSBmaWVsZE5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmZpZWxkRW1wdHlSZXMsIHRpcHM6XCJcdTg5RTNcdTk1MDFcdTU0MEVcdTU3MUZcdTU3MzBcdTdFQjlcdTc0MDZcIiwgdHlwZTpTdHJpbmcsYWNjZXB0OnJlc30qL1xyXG4gICAgcHJpdmF0ZSBmaWVsZEVtcHR5UmVzOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgLyoqIFx1N0I0OVx1N0VBN2JveCAqL1xyXG4gICAgcHJpdmF0ZSBsdk5vZGU6IExheWEuSW1hZ2UgPSBudWxsO1xyXG4gICAgLyoqIFx1N0I0OVx1N0VBN2xhYmVsKi9cclxuICAgIHByaXZhdGUgbHZMYWJlbDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogXHU1MDEyXHU4QkExXHU2NUY2XHU1QkI5XHU1NjY4Ki9cclxuICAgIHByaXZhdGUgY291bnREb3duQm94OiBMYXlhLkZvbnRDbGlwID0gbnVsbDtcclxuICAgIC8qKiBcdTUwMTJcdThCQTFcdTY1RjZsYWJlbCAqL1xyXG4gICAgcHJpdmF0ZSBjb3VudERvd25MYWJlbDogTGF5YS5Gb250Q2xpcCA9IG51bGw7XHJcbiAgICAvKiogXHU1MkEwXHU5MDFGXHU2ODA3XHU4QkM2ICovXHJcbiAgICBwcml2YXRlIGFkZFNwZWVkTm9kZTogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogXHU2MjEwXHU3MTlGXHU1M0VGXHU2NTM2aWNvbiAqL1xyXG4gICAgcHJpdmF0ZSBtYXR1cmVOb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBcdTUzRUZcdTY0QURcdTc5Q0RcdTdBN0FcdTU3MzBpY29uICovXHJcbiAgICBwcml2YXRlIGVtcHR5RmllbGROb2RlOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTp1bmxvY2tJY29uLCB0aXBzOlwiXHU2MkQzXHU1QzU1XHU1NzFGXHU1NzMwaWNvblx1NTczMFx1NTc0MFwiLCB0eXBlOlN0cmluZyxhY2NlcHQ6cmVzfSovXHJcbiAgICBwcml2YXRlIHVubG9ja0ljb246IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgLyoqIFx1NTcxRlx1NTczMGlkICovXHJcbiAgICBmaWVsZElkOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIG9uSGRBd2FrZSgpIHtcclxuICAgICAgICB0aGlzLmZpZWxkTm9kZSA9IDxMYXlhLkltYWdlPnRoaXMub3duZXI7XHJcbiAgICAgICAgLy8gdGhpcy5pY29uID0gPExheWEuSW1hZ2U+dGhpcy5vd25lci5nZXRDaGlsZEJ5TmFtZShcImljb25cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pY29uKTtcclxuICAgICAgICAvLyB0aGlzLmx2Tm9kZS5za2luID0gdGhpcy51bmxvY2tJY29uO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuaWNvbi5za2luID0gdGhpcy51bmxvY2tJY29uO1xyXG4gICAgICAgIC8vICh0aGlzLm93bmVyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKSBhcyBMYXlhLkltYWdlKS5za2luID0gdGhpcy51bmxvY2tJY29uO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaWNvbltcIiRfR0lEXCJdKTtcclxuICAgICAgICAvLyB0aGlzLmZpZWxkTm9kZS5za2luID0gdGhpcy5maWVsZEVtcHR5UmVzO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmllbGROb2RlKTtcclxuICAgIH1cclxufVxyXG4iLCAiLyoqXHJcbiAqIFx1NkQ2RVx1NTJBOFx1NUYzOVx1N0E5N1x1NTJBOFx1NzUzQlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxvYXRWaWV3U2hvd0FuaSBleHRlbmRzIExheWEuU2NyaXB0IHtcclxuICAgIHByaXZhdGUgZWZmZWN0VHdlZW5PcGVuOiBMYXlhLlR3ZWVuID0gbnVsbDtcclxuICAgIHByaXZhdGUgZWZmZWN0VHdlZW5DbG9zZTogTGF5YS5Ud2VlbiA9IG51bGw7XHJcblxyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmNvbnRlbnQsIHRpcHM6XCJcdTUxODVcdTVCQjlcdTVCQjlcdTU2NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgY29udGVudDogTGF5YS5JbWFnZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjI1M1x1NUYwMFx1NTQwRVx1OEMwM1x1NzUyOFxyXG4gICAgICovXHJcbiAgICBkb09wZW4oKSB7fVxyXG4gICAgLyoqXHJcbiAgICAgKiAgXHU1MTczXHU5NUVEXHU2MjEwXHU1MjlGXHU1NDBFXHU4QzAzXHU3NTI4XHJcbiAgICAgKi9cclxuICAgIGRvQ2xvc2UoKSB7fVxyXG5cclxuICAgIG9uRW5hYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLm93bmVyIGFzIExheWEuVmlldztcclxuICAgICAgICB0aGlzLmNvbnRlbnQuc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgLy8gZGlhbG9nLmFscGhhID0gMC42O1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5PcGVuID0gTGF5YS5Ud2Vlbi5mcm9tKFxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgIHsgeDogTGF5YS5zdGFnZS53aWR0aCAvIDIsIHk6IExheWEuc3RhZ2UuaGVpZ2h0IC8gMiwgc2NhbGVYOiAwLCBzY2FsZVk6IDAgfSxcclxuICAgICAgICAgICAgMzAwLFxyXG4gICAgICAgICAgICBMYXlhLkVhc2UuYmFja091dCxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLmRvT3BlbiwgW2RpYWxvZ10pLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVmlldygpIHtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5vd25lciBhcyBMYXlhLlZpZXc7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0VHdlZW5DbG9zZSA9IExheWEuVHdlZW4udG8oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICB7IHg6IExheWEuc3RhZ2Uud2lkdGggLyAyLCB5OiBMYXlhLnN0YWdlLmhlaWdodCAvIDIsIHNjYWxlWDogMCwgc2NhbGVZOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgICAgICBMYXlhLkVhc2Uuc3Ryb25nT3V0LFxyXG4gICAgICAgICAgICAgICAgbmV3IExheWEuSGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbZGlhbG9nXVxyXG4gICAgICAgICAgICAgICAgKSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBMYXlhLkhhbmRsZXIuY3JlYXRlKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmRvQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIFtkaWFsb2ddXHJcbiAgICAgICAgICAgICAgICAvLyApLFxyXG4gICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RUd2Vlbk9wZW4gJiYgTGF5YS5Ud2Vlbi5jbGVhcih0aGlzLmVmZmVjdFR3ZWVuT3Blbik7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RUd2Vlbk9wZW4gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VHdlZW5DbG9zZSAmJiBMYXlhLlR3ZWVuLmNsZWFyKHRoaXMuZWZmZWN0VHdlZW5DbG9zZSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RUd2VlbkNsb3NlID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IFJlcyBmcm9tIFwic3JjL2NvbW1vbi9SZXNcIjtcclxuaW1wb3J0IEZsb2F0Vmlld1Nob3dBbmkgZnJvbSBcInNyYy9jb21wb25lbnRzL0Zsb2F0Vmlld1Nob3dBbmlcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcInNyYy9jb3JlL0dhbWVTY3JpcHRcIjtcclxuaW1wb3J0IHsgVmlld01hbmFnZXIgfSBmcm9tIFwic3JjL2NvcmUvVmlld01hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3BWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6YWxwaGFCZywgdGlwczpcIlx1OTAwRlx1NjYwRVx1ODBDQ1x1NjY2Rlx1NUM0MlwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYWxwaGFCZzogTGF5YS5JbWFnZSA9IG51bGw7XHJcbiAgICAvKiogQHByb3Age25hbWU6aXRlbUxpc3QsIHRpcHM6XCJcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGl0ZW1MaXN0OiBMYXlhLkxpc3QgPSBudWxsO1xyXG4gICAgLyoqIEBwcm9wIHtuYW1lOmJ0bkJveFRvcCwgdGlwczpcIlx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NTIxN1x1ODg2OFx1NUJCOVx1NTY2OFwiLCB0eXBlOk5vZGV9Ki9cclxuICAgIHByaXZhdGUgYnRuQm94VG9wOiBMYXlhLkltYWdlID0gbnVsbDtcclxuICAgIC8qKiBAcHJvcCB7bmFtZTpib3R0b21Cb3gsIHRpcHM6XCJcdTVFOTVcdTkwRThcdTY1NzBcdTYzNkVcdTUyMTdcdTg4NjhcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwcml2YXRlIGJvdHRvbUJveDogTGF5YS5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvKiogXHU5ODc2XHU5MEU4XHU2MzA5XHU5NEFFXHU2NTg3XHU1QjU3XHU4RDQ0XHU2RTkwXHU1MjE3XHU4ODY4ICovXHJcbiAgICBwcml2YXRlIGJ0blRvcFJlc0xpc3Q6IHN0cmluZ1tdW10gPSBbXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfc2VlZHNOb3JtYWwucG5nXCIsIFwiZ2FtZS9pbWdfc2VlZHNTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICAgICAgW1wiZ2FtZS9pbWdfcGV0Tm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX3BldFNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19mb29kbk5vcm1hbC5wbmdcIiwgXCJnYW1lL2ltZ19mb29kblNlbGVjdGVkLnBuZ1wiXSxcclxuICAgICAgICBbXCJnYW1lL2ltZ19iYW5rTm9ybWFsLnBuZ1wiLCBcImdhbWUvaW1nX2JhbmtTZWxlY3RlZC5wbmdcIl0sXHJcbiAgICBdO1xyXG4gICAgLyoqIFx1OTg3Nlx1OTBFOFx1NTIwN1x1NjM2Mlx1NjgwN1x1N0I3RVx1OTAwOVx1NjJFOVx1NEUwQlx1NjgwNyAqL1xyXG4gICAgcHJpdmF0ZSB0b3BCdG5TZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTcwQjlcdTUxRkJcdTRFMEJcdTY4MDcgKi9cclxuICAgIHByaXZhdGUgaXRlbUxpc3RTZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8qKiBcdTU1NDZcdTU0QzFcdTUyMTdcdTg4NjhcdTgwQ0NcdTY2NkZcdTdFQjlcdTc0MDYgKi9cclxuICAgIHByaXZhdGUgaXRlbVNlbGVjdEJnOiBzdHJpbmdbXSA9IFtcImdhbWUvaW1nX3BldGJhZy5wbmdcIiwgXCJnYW1lL2ltZ19wZXRiYWdTZWxlY3RlZC5wbmdcIl07XHJcblxyXG4gICAgb25IZEVuYWJsZSgpIHt9XHJcblxyXG4gICAgb25IZEF3YWtlKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlVG9wQnRuU3RhdGUoKTtcclxuICAgICAgICB0aGlzLmFscGhhQmcuYWxwaGEgPSAwLjc1O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1MaXN0KTtcclxuICAgICAgICAvLyB0aGlzLml0ZW1MaXN0Lml0ZW1SZW5kZXIgPSB0aGlzLmxpc3RJdGVtO1xyXG5cclxuICAgICAgICBsZXQgYXIgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDMwOyB4KyspIHtcclxuICAgICAgICAgICAgYXIucHVzaCh7IG5hbWU6IHggfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuaXRlbUxpc3Quc2Nyb2xsQmFyLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3QuYXJyYXkgPSBhcjtcclxuICAgICAgICB0aGlzLml0ZW1MaXN0LnJlbmRlckhhbmRsZXIgPSBuZXcgTGF5YS5IYW5kbGVyKHRoaXMsIHRoaXMudXBkYXRlSXRlbSk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUxpc3Quc2VsZWN0SGFuZGxlciA9IG5ldyBMYXlhLkhhbmRsZXIodGhpcywgdGhpcy5vblNlbGVjdCk7XHJcbiAgICAgICAgdGhpcy5pdGVtTGlzdC52U2Nyb2xsQmFyU2tpbiA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3QoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIHRoaXMuaXRlbUxpc3RTZWxlY3RJbmRleCA9IGU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbShjZWxsOiBMYXlhLkltYWdlLCBpbmRleCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGwpO1xyXG4gICAgICAgIC8vIGNlbGwuc2V0SW1nKGNlbGwuZGF0YVNvdXJjZSk7XHJcbiAgICAgICAgKGNlbGwuZ2V0Q2hpbGRCeU5hbWUoXCJoYm94XCIpLmdldENoaWxkQnlOYW1lKFwibnVtXCIpIGFzIExheWEuRm9udENsaXApLnZhbHVlID0gaW5kZXg7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PSB0aGlzLml0ZW1MaXN0U2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2VsbC5za2luID0gdGhpcy5pdGVtU2VsZWN0QmdbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNob3BWaWV3LCBmYWxzZSwgdHJ1ZSwgRmxvYXRWaWV3U2hvd0FuaSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJzZWVkXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJwZXRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImZlZWRcIjpcclxuICAgICAgICAgICAgY2FzZSBcImJhbmtcIjpcclxuICAgICAgICAgICAgICAgIGxldCB0b3BCdG5JbmRleCA9IHRoaXMuYnRuQm94VG9wLmdldENoaWxkSW5kZXgoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9wQnRuU2VsZWN0SW5kZXggIT0gdG9wQnRuSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvcEJ0blNlbGVjdEluZGV4ID0gdG9wQnRuSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb3BCdG5TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NjZGNFx1NjVCMFx1OTg3Nlx1OTBFOFx1NjMwOVx1OTRBRVx1NzBCOVx1NTFGQlx1NzBCOVx1NTFGQlx1NzJCNlx1NjAwMVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRvcEJ0blN0YXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5idG5Cb3hUb3AubnVtQ2hpbGRyZW47IHgrKykge1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5idG5Cb3hUb3AuZ2V0Q2hpbGRBdCh4KSBhcyBMYXlhLkltYWdlLFxyXG4gICAgICAgICAgICAgICAgbGIgPSBidG4uZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkltYWdlO1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdGhpcy50b3BCdG5TZWxlY3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYnRuLnNraW4gPSBcImdhbWUvaW1nLW1lbnVzZWxlY3RlZC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidG4uc2tpbiA9IFwiZ2FtZS9pbWctbWVudW5vcm1hbC5wbmdcIjtcclxuICAgICAgICAgICAgICAgIGxiLnNraW4gPSB0aGlzLmJ0blRvcFJlc0xpc3RbeF1bMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQm90dG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdTY2RjRcdTY1QjBcdTVFOTVcdTkwRThcdTUxODVcdTVCQjlcdTY1NzBcdTYzNkVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVCb3R0b20oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvdHRvbUJveC5udW1DaGlsZHJlbjsgeCsrKSB7XHJcbiAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KHgpIGFzIExheWEuQm94KS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMudG9wQnRuU2VsZWN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoMCkgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICh0aGlzLmJvdHRvbUJveC5nZXRDaGlsZEF0KDEpIGFzIExheWEuQm94KS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAodGhpcy5ib3R0b21Cb3guZ2V0Q2hpbGRBdCgwKSBhcyBMYXlhLkJveCkudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuYm90dG9tQm94LmdldENoaWxkQXQoMikgYXMgTGF5YS5Cb3gpLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCJzcmMvY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgR2FtZVNjcmlwdCBmcm9tIFwic3JjL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCJzcmMvY29yZS9WaWV3TWFuYWdlclwiO1xyXG5cclxuLy8gIFNpZ25JblZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JblZpZXcgZXh0ZW5kcyBHYW1lU2NyaXB0IHtcclxuICAgIG9uQ2xpY2soZTogTGF5YS5FdmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2xvc2VcIjpcclxuICAgICAgICAgICAgICAgIFZpZXdNYW5hZ2VyLmluc3QuY2xvc2UoUmVzLnZpZXdzLlNpZ25JblZpZXcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgUmVzIGZyb20gXCIuLi9jb21tb24vUmVzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tbW9uL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCwgeyBFdmVudE9uIH0gZnJvbSBcIi4uL2NvcmUvRXZlbnRHbG9iYWxcIjtcclxuaW1wb3J0IEdhbWVTY3JpcHQgZnJvbSBcIi4uL2NvcmUvR2FtZVNjcmlwdFwiO1xyXG5pbXBvcnQgT2JzZXJ2YWJsZVByb3BlcnR5IGZyb20gXCIuLi9jb3JlL09ic2VydmFibGVQcm9wZXJ0eVwiO1xyXG5pbXBvcnQgeyBWaWV3TWFuYWdlciB9IGZyb20gXCIuLi9jb3JlL1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vLyAgVGFza1ZpZXcgZXh0ZW5kcyBMYXlhLlNjcmlwdCB7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tWaWV3IGV4dGVuZHMgR2FtZVNjcmlwdCB7XHJcbiAgICAvKiogQHByb3Age25hbWU6aW1hZ2UsIHRpcHM6XCJcdTVFMDNcdTVDMTRcdTdDN0JcdTU3OEJcdTc5M0FcdTRGOEJcIiwgdHlwZTpOb2RlfSovXHJcbiAgICBwdWJsaWMgaW1hZ2U6IExheWEuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGdhbWU6IHN0cmluZyA9IFwiMTIxMjEyXCI7XHJcblxyXG4gICAgQEV2ZW50T24oXCJhYVwiKVxyXG4gICAgbXlFdmVudChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhYVwiLCBlLCB0aGlzLmltYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0Lm5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNsb3NlXCI6XHJcbiAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0LmNsb3NlKFJlcy52aWV3cy5UYXNrVmlldyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5pbXBvcnQgTG9hZFZpZXcgZnJvbSBcIi4vdmlldy9Mb2FkVmlld1wiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvQnV0dG9uXCJcbmltcG9ydCBNYWlsVmlldyBmcm9tIFwiLi92aWV3L01haWxWaWV3XCJcbmltcG9ydCBWaWV3U2hvd0FuaSBmcm9tIFwiLi9jb21wb25lbnRzL1ZpZXdTaG93QW5pXCJcbmltcG9ydCBNYWluVmlldyBmcm9tIFwiLi92aWV3L01haW5WaWV3XCJcbmltcG9ydCBGaWVsZENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0ZpZWxkQ29tcG9uZW50XCJcbmltcG9ydCBTaG9wVmlldyBmcm9tIFwiLi92aWV3L1Nob3BWaWV3XCJcbmltcG9ydCBGbG9hdFZpZXdTaG93QW5pIGZyb20gXCIuL2NvbXBvbmVudHMvRmxvYXRWaWV3U2hvd0FuaVwiXG5pbXBvcnQgU2lnbkluVmlldyBmcm9tIFwiLi92aWV3L1NpZ25JblZpZXdcIlxuaW1wb3J0IFRhc2tWaWV3IGZyb20gXCIuL3ZpZXcvVGFza1ZpZXdcIlxyXG4vKlxyXG4qIFx1NkUzOFx1NjIwRlx1NTIxRFx1NTlDQlx1NTMxNlx1OTE0RFx1N0Y2RTtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9MTA4MDtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTE5MjA7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cImZpeGVkd2lkdGhcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cIm5vbmVcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwibWlkZGxlXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImNlbnRlclwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwic2NlbmVzL3ZpZXdzL01haW5WaWV3LnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPXRydWU7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG4gICAgICAgIHJlZyhcInZpZXcvTG9hZFZpZXcudHNcIixMb2FkVmlldyk7XG4gICAgICAgIHJlZyhcImNvbXBvbmVudHMvQnV0dG9uLnRzXCIsQnV0dG9uKTtcbiAgICAgICAgcmVnKFwidmlldy9NYWlsVmlldy50c1wiLE1haWxWaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9WaWV3U2hvd0FuaS50c1wiLFZpZXdTaG93QW5pKTtcbiAgICAgICAgcmVnKFwidmlldy9NYWluVmlldy50c1wiLE1haW5WaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9GaWVsZENvbXBvbmVudC50c1wiLEZpZWxkQ29tcG9uZW50KTtcbiAgICAgICAgcmVnKFwidmlldy9TaG9wVmlldy50c1wiLFNob3BWaWV3KTtcbiAgICAgICAgcmVnKFwiY29tcG9uZW50cy9GbG9hdFZpZXdTaG93QW5pLnRzXCIsRmxvYXRWaWV3U2hvd0FuaSk7XG4gICAgICAgIHJlZyhcInZpZXcvU2lnbkluVmlldy50c1wiLFNpZ25JblZpZXcpO1xuICAgICAgICByZWcoXCJ2aWV3L1Rhc2tWaWV3LnRzXCIsVGFza1ZpZXcpO1xyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsICJpbXBvcnQgeyBFdmVudE1hcHMgfSBmcm9tIFwiLi9jb21tb24vRXZlbnRNYXBzXCI7XHJcbmltcG9ydCBSZXMgZnJvbSBcIi4vY29tbW9uL1Jlc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vY29tbW9uL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBFdmVudEdsb2JhbCBmcm9tIFwiLi9jb3JlL0V2ZW50R2xvYmFsXCI7XHJcbmltcG9ydCB7IFZpZXdNYW5hZ2VyIH0gZnJvbSBcIi4vY29yZS9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmNsYXNzIE1haW4ge1xyXG4gICAgLyoqIFx1ODFFQVx1NUI5QVx1NEU0OVx1NkUzMlx1NjdEM2lkXHU1MjE3XHU4ODY4ICovXHJcbiAgICBzdGF0aWMgY3VzdG9tUmVuZGVySUQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy9cdTY4MzlcdTYzNkVJREVcdThCQkVcdTdGNkVcdTUyMURcdTU5Q0JcdTUzMTZcdTVGMTVcdTY0Q0VcclxuICAgICAgICBpZiAod2luZG93W1wiTGF5YTNEXCJdKSBMYXlhM0QuaW5pdChHYW1lQ29uZmlnLndpZHRoLCBHYW1lQ29uZmlnLmhlaWdodCk7XHJcbiAgICAgICAgZWxzZSBMYXlhLmluaXQoR2FtZUNvbmZpZy53aWR0aCwgR2FtZUNvbmZpZy5oZWlnaHQsIExheWFbXCJXZWJHTFwiXSk7XHJcbiAgICAgICAgTGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBHYW1lQ29uZmlnLnNjYWxlTW9kZTtcclxuICAgICAgICBMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBHYW1lQ29uZmlnLnNjcmVlbk1vZGU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnblYgPSBHYW1lQ29uZmlnLmFsaWduVjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFsaWduSCA9IEdhbWVDb25maWcuYWxpZ25IO1xyXG4gICAgICAgIC8vXHU1MTdDXHU1QkI5XHU1RkFFXHU0RkUxXHU0RTBEXHU2NTJGXHU2MzAxXHU1MkEwXHU4RjdEc2NlbmVcdTU0MEVcdTdGMDBcdTU3M0FcdTY2NkZcclxuICAgICAgICBMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG4gICAgICAgIC8vXHU2MjUzXHU1RjAwXHU4QzAzXHU4QkQ1XHU5NzYyXHU2NzdGXHVGRjA4XHU5MDFBXHU4RkM3SURFXHU4QkJFXHU3RjZFXHU4QzAzXHU4QkQ1XHU2QTIxXHU1RjBGXHVGRjBDXHU2MjE2XHU4MDA1dXJsXHU1NzMwXHU1NzQwXHU1ODlFXHU1MkEwZGVidWc9dHJ1ZVx1NTNDMlx1NjU3MFx1RkYwQ1x1NTc0N1x1NTNFRlx1NjI1M1x1NUYwMFx1OEMwM1x1OEJENVx1OTc2Mlx1Njc3Rlx1RkYwOVxyXG4gICAgICAgIGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIilcclxuICAgICAgICAgICAgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG4gICAgICAgIExheWEuYWxlcnRHbG9iYWxFcnJvcih0cnVlKTtcclxuXHJcbiAgICAgICAgLy9cdTZGQzBcdTZEM0JcdThENDRcdTZFOTBcdTcyNDhcdTY3MkNcdTYzQTdcdTUyMzZcdUZGMEN2ZXJzaW9uLmpzb25cdTc1MzFJREVcdTUzRDFcdTVFMDNcdTUyOUZcdTgwRkRcdTgxRUFcdTUyQThcdTc1MUZcdTYyMTBcdUZGMENcdTU5ODJcdTY3OUNcdTZDQTFcdTY3MDlcdTRFNUZcdTRFMERcdTVGNzFcdTU0Q0RcdTU0MEVcdTdFRURcdTZENDFcdTdBMEJcclxuICAgICAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXHJcbiAgICAgICAgICAgIFwidmVyc2lvbi5qc29uXCIsXHJcbiAgICAgICAgICAgIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLFxyXG4gICAgICAgICAgICBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy9cdTZGQzBcdTZEM0JcdTU5MjdcdTVDMEZcdTU2RkVcdTY2MjBcdTVDMDRcdUZGMENcdTUyQTBcdThGN0RcdTVDMEZcdTU2RkVcdTc2ODRcdTY1RjZcdTUwMTlcdUZGMENcdTU5ODJcdTY3OUNcdTUzRDFcdTczQjBcdTVDMEZcdTU2RkVcdTU3MjhcdTU5MjdcdTU2RkVcdTU0MDhcdTk2QzZcdTkxQ0NcdTk3NjJcdUZGMENcdTUyMTlcdTRGMThcdTUxNDhcdTUyQTBcdThGN0RcdTU5MjdcdTU2RkVcdTU0MDhcdTk2QzZcdUZGMENcdTgwMENcdTRFMERcdTY2MkZcdTVDMEZcdTU2RkVcclxuICAgICAgICBMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFxyXG4gICAgICAgICAgICBcImZpbGVjb25maWcuanNvblwiLFxyXG4gICAgICAgICAgICBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNvbmZpZ0xvYWRlZCgpIHtcclxuICAgICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTZFMzJcdTY3RDNpZFxyXG4gICAgICAgIENvbmZpZ1tcImN1c3RvbVJlbmRlcklEXCJdID0gW107XHJcblxyXG4gICAgICAgIC8vIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChcInJlcy9hdWRpby9kcmF3Lm1wM1wiKTtcclxuICAgICAgICAvL1x1NTk4Mlx1Njc5Q1x1OTAxQVx1OEZDN1x1OEJCRVx1NTkwN1x1OTc1OVx1OTdGM1x1OTUyRVx1OEJBOVx1OTdGM1x1OTg5MVx1ODFFQVx1NTJBOFx1OERERlx1OTY4Rlx1OEJCRVx1NTkwN1x1OTc1OVx1OTdGM1x1MzAwMlx1OTcwMFx1ODk4MVx1NUMwNnVzZUF1ZGlvTXVzaWNcdThCQkVcdTdGNkVcdTRFM0FmYWxzZVx1MzAwMlxyXG4gICAgICAgIC8vIFNvdW5kTWFuYWdlci51c2VBdWRpb011c2ljPWZhbHNlXHVGRjFCXHJcbiAgICAgICAgLy8gTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKFJlcy5hdWRpb3Mud2luKTtcclxuXHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgVmlld01hbmFnZXIuaW5zdC5vcGVuKFJlcy52aWV3cy5Mb2FkRGlhbG9nLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuc2V0TG9hZGluZ1BhZ2UoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1x1NTQwRVx1NjcxRlx1NEYxOFx1NTMxNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMYXlhLlZpZXcuaGlkZUxvYWRpbmdQYWdlKDk5OTk5OTk5OTk5OTk5OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgTGF5YS5sb2FkZXIubG9hZChcclxuICAgICAgICAgICAgUmVzLnNjZW5lcyxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgICAgICAgICAgTGF5YS50aW1lci5mcmFtZU9uY2UoMSwgdGhpcywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIExheWEuVmlldy5oaWRlTG9hZGluZ1BhZ2UoMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICBWaWV3TWFuYWdlci5pbnN0Lm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgTGF5YS5IYW5kbGVyLmNyZWF0ZShcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50R2xvYmFsLmV2ZW50KEV2ZW50TWFwcy5sb2FkX3Byb2dyZXNzLCBlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuLy9cdTZGQzBcdTZEM0JcdTU0MkZcdTUyQThcdTdDN0JcclxubmV3IE1haW4oKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLE1BQVc7QUFBWCxZQUFXLFlBQVg7QUFFSCxrQ0FBZ0I7QUFBQSxLQUZGOzs7QUNFVixNQUFLO0FBQUwsWUFBSyxRQUFMO0FBR0EsMkJBQWE7QUFFYix5QkFBVztBQUVYLHlCQUFXO0FBRVgseUJBQVc7QUFFWCwyQkFBYTtBQUViLHlCQUFXO0FBQUEsS0FiTjtBQWdCTCxNQUFLO0FBQUwsWUFBSyxTQUFMO0FBR0EscUJBQU07QUFFTix1QkFBUTtBQUVSLHNCQUFPO0FBRVAsb0JBQUs7QUFFTCxzQkFBTztBQUVQLHNCQUFPO0FBQUEsS0FiRjtBQW1CTCxNQUFNLFNBQVM7QUFBQSxJQUNkO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNHO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNB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QUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLE1BRWQ7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLE1BRWQ7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLE1BRWQ7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLE1BRWQ7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLE1BRWQ7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLE1BRWQ7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLE1BRWQ7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLE1BRWQ7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLE1BRWQ7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBO0FBQUEsSUFHbEIsS0FBSztBQUFBLE1BQ0Q7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLGNBQWM7QUFBQSxRQUNkLGtCQUFrQjtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLGNBQWM7QUFBQSxRQUNkLGtCQUFrQjtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLGNBQWM7QUFBQSxRQUNkLGtCQUFrQjtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLGNBQWM7QUFBQSxRQUNkLGtCQUFrQjtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQTtBQUFBLE1BRWI7QUFBQSxRQUNJLElBQUk7QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLGNBQWM7QUFBQSxRQUNkLGtCQUFrQjtBQUFBLFFBQ2xCLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLFNBQVM7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
