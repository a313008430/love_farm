(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var views;
    (function (views) {
        views["LoadDialog"] = "scenes/views/LoadDialog.scene";
        views["MailView"] = "scenes/views/MailView.scene";
        views["MainView"] = "scenes/views/MainView.scene";
        views["ShopView"] = "scenes/views/ShopView.scene";
        views["SignInView"] = "scenes/views/SignInView.scene";
        views["TaskView"] = "scenes/views/TaskView.scene";
    })(views || (views = {}));
    var audios;
    (function (audios) {
        audios["win"] = "res/audio/win.mp3";
        audios["ready"] = "res/audio/ready.mp3";
        audios["move"] = "res/audio/move.mp3";
        audios["go"] = "res/audio/go.mp3";
        audios["fail"] = "res/audio/fail.mp3";
        audios["draw"] = "res/audio/draw.mp3";
    })(audios || (audios = {}));
    const scenes = [
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
    const Res = {
        views: views,
        scenes: scenes,
        audios: audios,
    };

    const EventGlobal = new Laya.EventDispatcher();
    const EventClass = new Map();
    function EventOn(name) {
        return (target, propertyKey, descriptor) => {
            EventClass.set(target, { key: name, fn: descriptor.value });
        };
    }

    class ViewShowAni extends Laya.Script {
        constructor() {
            super(...arguments);
            this.bg = null;
            this.content = null;
            this.tweenList = [];
        }
        doOpen() { }
        doClose() { }
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
    }

    const instanceList = new Map();
    let instanceId = 100;
    function Instance(target, key) {
        if (!instanceList.has(target["#instanceId"])) {
            instanceId++;
            target["#instanceId"] = instanceId;
            instanceList.set(instanceId, new target());
        }
        target[key] = instanceList.get(instanceId);
    }

    const viewMaps = [];
    class ViewManager {
        open(url, data = {
            closeOther: false,
            showLoad: false,
            showLoadDelay: 100,
            hideLoadDelay: 0,
        }) {
            if (!url) {
                console.warn("miss path!");
                return;
            }
            if (data.showLoad) {
                Laya.View.showLoadingPage(null, data.showLoadDelay);
                if (url !== Res.views.LoadDialog) {
                    Laya.timer.frameOnce(1, this, () => {
                        Laya.View.hideLoadingPage(data.hideLoadDelay);
                    });
                }
            }
            Laya.View.open(url, data.closeOther, data.parm, Laya.Handler.create(this, (e) => {
                if (url != Res.views.LoadDialog)
                    viewMaps.push({ url: url, view: e });
                data.complete && data.complete(e);
                console.log(`%c ==> open %c${url.match(/\w+(?=\.)/)[0]} `, `color:#7ed6df;font-weight:700;background-color:#dff9fb`, `color:#22a6b3;font-weight:700;background-color:#dff9fb`);
            }), data.progress);
        }
        close(url, all = false, destroy = false, aniCom = ViewShowAni) {
            return __awaiter(this, void 0, void 0, function* () {
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
                                }
                                else {
                                    v.view.removeSelf();
                                    this.closeViewLog(url);
                                }
                            });
                        }
                        else {
                            if (destroy) {
                                v.view.destroy(true);
                                this.closeViewLog(url, true);
                            }
                            else {
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
                    this.open(Res.views.MainView);
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
    }
    __decorate([
        Instance,
        __metadata("design:type", ViewManager)
    ], ViewManager, "inst", void 0);

    const callers = new Map();
    class ObservableControl {
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
                    if (Obj["#" + key] == undefined) {
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
                            get: function () {
                                return this["#" + key];
                            },
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
            (_a = callers.get(caller)) === null || _a === void 0 ? void 0 : _a.forEach((e) => {
                var _a, _b;
                if (obj) {
                    (_a = this.keyEvents) === null || _a === void 0 ? void 0 : _a.get(obj).forEach((ev) => {
                        let indexOf = ev.indexOf(e);
                        if (indexOf > -1)
                            ev.splice(indexOf, 1);
                    });
                }
                else {
                    (_b = this.keyEvents) === null || _b === void 0 ? void 0 : _b.forEach((k) => {
                        k.forEach((ev) => {
                            let indexOf = ev.indexOf(e);
                            if (indexOf > -1)
                                ev.splice(indexOf, 1);
                        });
                    });
                }
            });
        }
    }
    var ObservableProperty = new ObservableControl();

    class GameScript extends Laya.Script {
        constructor() {
            super();
            let bindEvent = EventClass.get(this.constructor.prototype);
            bindEvent && EventGlobal.on(bindEvent.key, this, bindEvent.fn);
        }
        onAwake() {
            this.onHdAwake();
        }
        onHdAwake() { }
        onEnable() {
            this.onHdEnable();
        }
        onHdEnable() { }
        onStart() {
            this.onHdStart();
        }
        onHdStart() { }
        onUpdate() {
            this.onHdUpdate();
        }
        onHdUpdate() { }
        onDisable() {
            this.onHdDisable();
        }
        onHdDisable() { }
        onDestroy() {
            EventGlobal.offAllCaller(this);
            this.onHdDestroy();
            Laya.timer.once(1, null, () => {
                ObservableProperty.removeByCaller(this);
                let keys = Object.getOwnPropertyNames(this);
                for (let x = 0, l = keys.length; x < l; x++) {
                    this[keys[x]] = null;
                }
            });
        }
        onHdDestroy() { }
    }

    class LoadView extends GameScript {
        constructor() {
            super(...arguments);
            this.loadLabel = null;
        }
        onAwake() {
        }
        onEnable() {
            EventGlobal.on("load_progress", this, this.loadProgress);
            this.loadLabel.text = "Load....0%";
        }
        loadProgress(v) {
            this.loadLabel.text = `Load....${(v * 100).toFixed(2)}%`;
        }
        onDisable() {
            EventGlobal.off("load_progress", this, this.loadProgress);
        }
    }

    class Button extends Laya.Script {
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
        onDisable() { }
    }

    class MailView extends GameScript {
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    ViewManager.inst.close(Res.views.MailView);
                    break;
            }
        }
    }

    class UserInfo {
        constructor() {
            this.nickname = "name";
            this.uid = 0;
        }
        clear() {
            this.nickname = "";
        }
    }
    var UserInfo$1 = new UserInfo();

    class MainView extends GameScript {
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
                UserInfo$1.nickname = "1231231" + ++a;
                EventGlobal.event("aa", "asdfa");
            }, 1000);
            ObservableProperty.watch(UserInfo$1, this).key("nickname", (e) => { });
        }
        onClick(e) {
            console.log(e.target.name);
            switch (e.target.name) {
                case "closeAddLandLayer":
                    this.addLandLayer.visible = false;
                    break;
                case "task":
                    ViewManager.inst.open(Res.views.TaskView);
                    break;
                case "signIn":
                    ViewManager.inst.open(Res.views.SignInView);
                    break;
                case "mail":
                    ViewManager.inst.open(Res.views.MailView);
                    break;
                case "shop":
                    ViewManager.inst.open(Res.views.ShopView);
                    break;
            }
        }
    }

    var fs = "precision mediump float;\r\nvarying vec2 v_texcoord;\r\nvarying vec4 v_color;\r\nuniform sampler2D texture;\r\n// 自定义属性\r\nuniform float u_DissolveThreshold;\r\n\r\nvarying vec4 v_texcoordAlpha;\r\n\r\nvoid main(){\r\n    // vec4 noiseTexValue = texture2D(texture, v_texcoordAlpha.xy);\r\n    // gl_FragColor = texture2D(texture, v_texcoordAlpha.xy +  sin( (u_DissolveThreshold +(v_texcoordAlpha.x * 10.6 + v_texcoordAlpha.y * 10.)   )  ) * 0.01);\r\n    gl_FragColor = texture2D(texture, v_texcoordAlpha.xy );\r\n}";

    var vs = "//顶点着色器   直接使用的是laya官方自带的 \r\nattribute vec4 posuv;\r\nattribute vec4 attribColor;\r\nattribute vec4 attribFlags;\r\nattribute vec4 clipDir;\r\nattribute vec2 clipRect;\r\nuniform vec4 clipMatDir;\r\nuniform vec2 clipMatPos;\r\nvarying vec2 cliped;\r\nuniform vec2 size;\r\nuniform vec2 clipOff;\r\n#ifdef WORLDMAT\r\n    uniform mat4 mmat;\r\n#endif\r\n#ifdef MVP3D\r\n    uniform mat4 u_MvpMatrix;\r\n#endif\r\nvarying vec4 v_texcoordAlpha;\r\nvarying vec4 v_color;\r\nvarying float v_useTex;\r\n\r\nuniform float myTime;\r\nuniform float u_point;\r\n\r\nvoid main() {\r\n    vec4 pos = vec4(posuv.xy,0.,1.);\r\n    #ifdef WORLDMAT\r\n        pos=mmat*pos;\r\n    #endif\r\n    vec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\r\n    #ifdef MVP3D\r\n        gl_Position=u_MvpMatrix*pos1;\r\n    #else\r\n        // if(pos1.x < 0.5){\r\n        //     gl_Position=vec4(pos1.x * sin(-myTime * 0.01)  , pos1.y* sin(myTime * 0.01) , pos1.z, pos1.w);\r\n        // }else{\r\n            // gl_Position=vec4(pos1.xy +  sin( (myTime +(pos1.x*10. + pos1.y)*120.  )  ) * 0.02*cos(pos1.y*2.0 )  , pos1.z, pos1.w );\r\n            \r\n            // + u_point * (918.0 / 20.0) + cos((u_point * 0.3) + myTime) * 20.0\r\n            if( pos1.x< 0.3){\r\n                 gl_Position=vec4(pos1.x   , pos1.y + sin(  myTime) * 0.01, pos1.z, pos1.w );\r\n            }\r\n            else{\r\n                 gl_Position=vec4(pos1.x   , pos1.y , pos1.z, pos1.w );\r\n            }\r\n           \r\n        // }\r\n        \r\n    #endif\r\n    v_texcoordAlpha.xy = posuv.zw;\r\n    v_texcoordAlpha.z = attribColor.a/255.0;\r\n    v_color = attribColor/255.0;\r\n    v_color.xyz*=v_color.w;\r\n    v_useTex = attribFlags.r/255.0;\r\n    float clipw = length(clipMatDir.xy);\r\n    float cliph = length(clipMatDir.zw);\r\n    vec2 clpos = clipMatPos.xy;\r\n    #ifdef WORLDMAT\r\n    if(clipOff[0]>0.0){\r\n        clpos.x+=mmat[3].x;\r\n        clpos.y+=mmat[3].y;\r\n    }\r\n    #endif\r\n    vec2 clippos = pos.xy - clpos;\r\n\r\n    if(clipw>20000. && cliph>20000.)\r\n        cliped = vec2(0.0,0.0);\r\n    else {\r\n        cliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\r\n    }\r\n}";

    class ShaderSpriteBase extends GameScript {
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
            shader.shader = new Laya.Shader2X(vs, fs, Laya.ShaderDefines2D.TEXTURE2D | this.shaderImage.texture.bitmap["_id"]);
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
    }

    class FloatViewShowAni extends Laya.Script {
        constructor() {
            super();
            this.effectTweenOpen = null;
            this.effectTweenClose = null;
            this.content = null;
        }
        doOpen() { }
        doClose() { }
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
    }

    class ShopView extends GameScript {
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
                ["game/img_bankNormal.png", "game/img_bankSelected.png"],
            ];
            this.topBtnSelectIndex = 0;
            this.itemListSelectIndex = 0;
            this.itemSelectBg = ["game/img_petbag.png", "game/img_petbagSelected.png"];
        }
        onHdEnable() { }
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
            }
            else {
                cell.skin = this.itemSelectBg[0];
            }
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    ViewManager.inst.close(Res.views.ShopView, false, true, FloatViewShowAni);
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
                }
                else {
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
    }

    class SignInView extends GameScript {
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    ViewManager.inst.close(Res.views.SignInView);
                    break;
            }
        }
    }

    class TaskView extends GameScript {
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
                    ViewManager.inst.close(Res.views.TaskView);
                    break;
            }
        }
    }
    __decorate([
        EventOn("aa"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TaskView.prototype, "myEvent", null);

    class GameConfig {
        constructor() { }
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
    }
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

    class Main {
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
            return __awaiter(this, void 0, void 0, function* () {
                Config["customRenderID"] = [];
                yield new Promise((resolve) => {
                    ViewManager.inst.open(Res.views.LoadDialog, {
                        showLoad: false,
                        complete: (e) => {
                            Laya.View.setLoadingPage(e);
                            Laya.timer.frameOnce(1, this, () => {
                                Laya.View.hideLoadingPage(999999999999999);
                                resolve(null);
                            });
                        },
                    });
                });
                Laya.loader.load(Res.scenes, Laya.Handler.create(this, () => {
                    console.log("ok");
                    Laya.timer.frameOnce(1, this, () => {
                        Laya.View.hideLoadingPage(300);
                        ViewManager.inst.open(GameConfig.startScene);
                    });
                }), Laya.Handler.create(this, (e) => {
                    EventGlobal.event("load_progress", e);
                }, null, false));
            });
        }
    }
    Main.customRenderID = [];
    new Main();

}());
