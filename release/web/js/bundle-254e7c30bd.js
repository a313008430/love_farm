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
        views["AddLandView"] = "scenes/views/AddLandView.scene";
        views["FieldLevelUpView"] = "scenes/views/FieldLevelUpView.scene";
        views["FriendsDescView"] = "scenes/views/FriendsDescView.scene";
        views["FriendsRewardView"] = "scenes/views/FriendsRewardView.scene";
        views["FriendsView"] = "scenes/views/FriendsView.scene";
        views["HintView"] = "scenes/views/HintView.scene";
        views["LoginView"] = "scenes/views/LoginView.scene";
        views["MailView"] = "scenes/views/MailView.scene";
        views["MainView"] = "scenes/views/MainView.scene";
        views["OrderView"] = "scenes/views/OrderView.scene";
        views["SettingView"] = "scenes/views/SettingView.scene";
        views["ShopView"] = "scenes/views/ShopView.scene";
        views["SignInView"] = "scenes/views/SignInView.scene";
        views["SpeedUpView"] = "scenes/views/SpeedUpView.scene";
        views["TaskView"] = "scenes/views/TaskView.scene";
        views["WarehouseView"] = "scenes/views/WarehouseView.scene";
    })(views || (views = {}));
    var audios;
    (function (audios) {
        audios["button_click"] = "res/audio/button_click.mp3";
    })(audios || (audios = {}));
    const scenes = [
        "scenes/views/WarehouseView.scene",
        "scenes/views/TaskView.scene",
        "scenes/views/SpeedUpView.scene",
        "scenes/views/SignInView.scene",
        "scenes/views/ShopView.scene",
        "scenes/views/SettingView.scene",
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
        "res/audio/button_click.mp3",
        "res/atlas/plant_icon.png",
        "res/atlas/plant_icon.atlas",
        "res/atlas/pet_feed.png",
        "res/atlas/pet_feed.atlas",
        "res/atlas/main_scene1.png",
        "res/atlas/main_scene.png",
        "res/atlas/main_scene.atlas",
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
            if (!EventClass.get(target)) {
                EventClass.set(target, []);
            }
            EventClass.get(target).push({ key: name, fn: descriptor.value });
        };
    }
    const BindNameClass = new Map();
    function FindByName(target, propertyKey) {
        if (!BindNameClass.has(target)) {
            BindNameClass.set(target, []);
        }
        BindNameClass.get(target).push(propertyKey);
    }

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
                            set: function (v) {
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
            bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.forEach((d) => {
                EventGlobal.on(d.key, this, d.fn);
            });
        }
        onAwake() {
            var _a;
            (_a = BindNameClass.get(this.constructor.prototype)) === null || _a === void 0 ? void 0 : _a.forEach((e) => {
                this[e] = this.owner.getChildByName(e);
            });
            this.onHdAwake();
        }
        onOpened(e) { }
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

    class ViewShowAni extends GameScript {
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
                            alpha: 0,
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
            hideLoadDelay: 0,
        }) {
            if (!url) {
                console.warn("miss path!");
                return;
            }
            if (data.showLoad) {
                Laya.View.showLoadingPage(null, data.showLoadDelay);
                if (url !== Res.views.LoginView) {
                    Laya.timer.frameOnce(1, this, () => {
                        Laya.View.hideLoadingPage(data.hideLoadDelay);
                    });
                }
            }
            data.closeOther = false;
            Laya.View.open(url, data.closeOther, data.parm, Laya.Handler.create(this, (e) => {
                if (url != Res.views.LoginView)
                    viewMaps.push({ url: url, view: e });
                let conList = e.getComponents(Laya.Script);
                if (conList) {
                    conList.forEach((e) => e.enabled && e.onOpened && e.onOpened(data.parm));
                }
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
                        if (url === Res.views.HintView)
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
                    this.open(Res.views.MainView);
                }
                console.log(viewMaps);
            });
        }
        closeViewLog(url, destroy = false) {
            console.log(`%c <== ${destroy ? "destroy" : "disable"} %c${url.match(/\w+(?=\.)/)[0]} `, `color:#ff7979;font-weight:700;background-color:#dff9fb`, `color:#eb4d4b;font-weight:700;background-color:#dff9fb`);
        }
        openHint(data) {
            this.open(Res.views.HintView, { parm: data });
        }
        clearViewMaps() {
            viewMaps.length = 0;
        }
    }
    __decorate([
        Instance,
        __metadata("design:type", ViewManager)
    ], ViewManager, "inst", void 0);

    class AudioControl {
        playSound(url, loops, complete, soundClass, startTime) {
            Laya.SoundManager.playSound(url, loops, complete, soundClass, startTime);
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
    }

    const Core = {
        observableProperty: ObservableProperty,
        view: ViewManager.inst,
        gameScript: GameScript,
        instance: Instance,
        eventOn: EventOn,
        findByName: FindByName,
        eventGlobal: EventGlobal,
        audio: new AudioControl(),
    };

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
        onClick() {
            Core.audio.playSound(Res.audios.button_click);
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

    var ConfigGame = {
        diamondId: 1001,
        goldId: 1002,
        petDigestIntervalTime: 60,
        localKey: "love_HD_farm",
        baseUrl: "http://game.ahd168.com:3000",
        ApiTypeDefault: 1,
        ApiTypeAD: 2,
        ADSpeedUpTimes: 6,
    };

    const LocalData = {
        isLogin: false,
        token: null,
        sound: false,
        music: false,
    };
    class LocalStorageService {
        constructor() {
            this.localData = LocalData;
        }
        init() {
            this.localData = Laya.LocalStorage.getJSON(ConfigGame.localKey) || LocalData;
        }
        getJSON() {
            return this.localData;
        }
        setJSON(key, data) {
            this.localData[key] = data;
            Laya.LocalStorage.setJSON(ConfigGame.localKey, this.localData);
        }
        clear() {
            Laya.LocalStorage.setJSON(ConfigGame.localKey, {});
            this.localData = { isLogin: false, token: null, sound: true, music: true };
        }
    }
    var LocalStorageService$1 = new LocalStorageService();

    const Table = { "task": [{ "id": 1001, "reward": "1001:50", "times": 1, "title": "签到领钻石", "desc": "看视频签到", "icon": null }, { "id": 1002, "reward": "1001:100", "times": 10, "title": "菜地施肥10次", "desc": "菜地加速10次", "icon": null }, { "id": 1003, "reward": "1001:50", "times": 10, "title": "菜地收获10次", "desc": "菜地收获10次", "icon": null }, { "id": 1004, "reward": "1001:50", "times": 5, "title": "访友5次", "desc": "偷菜5次", "icon": null }, { "id": 1005, "reward": "1001:20", "times": 3, "title": "喂养狗狗3次", "desc": "喂养狗狗3次", "icon": null }, { "id": 1006, "reward": "1001:20", "times": 5, "title": "购买饲料5次", "desc": "购买饲料5次", "icon": null }, { "id": 1007, "reward": "1001:20", "times": 10, "title": "购买种子10次", "desc": "购买种子10次", "icon": null }, { "id": 1008, "reward": "1001:30", "times": 3, "title": "出售作物3次", "desc": "出售作物3次", "icon": null }, { "id": 1009, "reward": "1001:100", "times": 5, "title": "添加好友", "desc": "添加好友5个", "icon": null }, { "id": 1010, "reward": "1001:50", "times": 1, "title": "分享得好礼", "desc": "分享一次", "icon": null }, { "id": 1011, "reward": "1001:30", "times": 3, "title": "指定种植", "desc": "种植指定种子", "icon": null }, { "id": 1012, "reward": "1001:50", "times": 10, "title": "看视频", "desc": "看视频10次", "icon": null }], "signIn": [{ "id": 1001, "days": 7, "reward": "1001:20000" }, { "id": 1002, "days": 10, "reward": "1001:30000" }, { "id": 1003, "days": 15, "reward": "1001:50000" }, { "id": 1004, "days": 20, "reward": "1001:80000" }, { "id": 1005, "days": 30, "reward": "1001:120000" }, { "id": 1006, "days": 50, "reward": "1001:180000" }, { "id": 1007, "days": 80, "reward": "1001:300000" }, { "id": 1008, "days": 100, "reward": "1001:350000" }, { "id": 1009, "days": 150, "reward": "1001:500000" }], "plant": [{ "id": 1001, "name": "水稻", "icon": "plant_icon/1002_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "种下一粒种子，收获整个世界" }, { "id": 1002, "name": "大豆", "icon": "plant_icon/1004_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "种下一粒种子，收获整个世界" }, { "id": 1003, "name": "大蒜", "icon": "plant_icon/1012_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "240", "unlock_cost": null, "unlock_reward": null, "desc": "种下一粒种子，收获整个世界" }, { "id": 1004, "name": "包心菜", "icon": "plant_icon/1006_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "1~2", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }, { "id": 1005, "name": "土豆", "icon": "plant_icon/1007_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }, { "id": 1006, "name": "萝卜", "icon": "plant_icon/1005_seed.png", "seed_price": "1002:75", "gain": "1001:0,1002:75", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1000", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }, { "id": 1007, "name": "小麦", "icon": "plant_icon/1001_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1500", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }, { "id": 1008, "name": "辣椒", "icon": "plant_icon/1010_seed.png", "seed_price": "1002:120", "gain": "1001:0,1002:120", "harvest": "2~3", "mature_time": "600", "unlock_cost": "1002:2000", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }, { "id": 1009, "name": "黄瓜", "icon": "plant_icon/1011_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3000", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }, { "id": 1010, "name": "茄子", "icon": "plant_icon/1013_seed.png", "seed_price": "1002:200", "gain": "1001:0,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3500", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }, { "id": 1011, "name": "胡萝卜", "icon": "plant_icon/1008_seed.png", "seed_price": "1002:350", "gain": "1001:1,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:4500", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }, { "id": 1012, "name": "南瓜", "icon": "plant_icon/1014_seed.png", "seed_price": "1002:350", "gain": "1001:1,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:5000", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }, { "id": 1013, "name": "玉米", "icon": "plant_icon/1003_seed.png", "seed_price": "1002:500", "gain": "1001:2,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:5500", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }, { "id": 1014, "name": "甘蔗", "icon": "plant_icon/1015_seed.png", "seed_price": "1002:500", "gain": "1001:2,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6000", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }, { "id": 1015, "name": "番茄", "icon": "plant_icon/1009_seed.png", "seed_price": "1002:500", "gain": "1001:2,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6500", "unlock_reward": "1001:1,1002:1000", "desc": "种下一粒种子，收获整个世界" }], "pet": [{ "id": 1001, "name": "边牧", "icon": "pet_feed/1001_dog.png", "vitality_max": 100, "vitality_consume": 10, "cost": "1002:3000", "desc": "爱它就买它~它就是有点懒~", "sensitive": 34, "ability": 42 }, { "id": 1002, "name": "金毛", "icon": "pet_feed/1007_dog.png", "vitality_max": 100, "vitality_consume": 15, "cost": "1002:4000", "desc": "颜值、智商双双在线", "sensitive": 40, "ability": 48 }, { "id": 1003, "name": "秋田犬", "icon": "pet_feed/1009_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:4500", "desc": "最忠诚的伙伴", "sensitive": 45, "ability": 55 }, { "id": 1004, "name": "哈士奇", "icon": "pet_feed/1002_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:5000", "desc": "绝不拆家！", "sensitive": 48, "ability": 60 }, { "id": 1005, "name": "德国牧羊犬", "icon": "pet_feed/1005_dog.png", "vitality_max": 100, "vitality_consume": 17, "cost": "1002:7000", "desc": "活好吃的少", "sensitive": 50, "ability": 75 }, { "id": 1006, "name": "杜宾犬", "icon": "pet_feed/1004_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:7500", "desc": "武力天赋已点满~拿捏！", "sensitive": 60, "ability": 80 }, { "id": 1007, "name": "阿拉斯加犬", "icon": "pet_feed/1008_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "就两个字，听话！", "sensitive": 69, "ability": 85 }, { "id": 1008, "name": "苏格兰牧羊犬", "icon": "pet_feed/1003_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "看家、看菜、看孩子", "sensitive": 76, "ability": 88 }, { "id": 1009, "name": "斑点狗", "icon": "pet_feed/1006_dog.png", "vitality_max": 100, "vitality_consume": 19, "cost": "1002:10000", "desc": "你值得拥有！", "sensitive": 85, "ability": 93 }, { "id": 1010, "name": "藏獒", "icon": "pet_feed/1010_dog.png", "vitality_max": 100, "vitality_consume": 30, "cost": "1002:15000", "desc": "长得就很凶，抓小偷更凶", "sensitive": 90, "ability": 99 }], "order": [{ "id": 1, "commission": "0.5", "condition": "1001:2" }, { "id": 2, "commission": "0.1", "condition": "1001:1,1002:1,1003:1" }, { "id": 3, "commission": "0.03", "condition": "1012:18,1004:4,1003:5,1005:6" }, { "id": 4, "commission": "0.24", "condition": "1012:10,1003:3,1007:7,1015:9" }, { "id": 5, "commission": "0.61", "condition": "1014:6,1012:9,1010:19,1006:4" }, { "id": 6, "commission": "0.07", "condition": "1010:14,1004:2,1012:3,1001:8" }, { "id": 7, "commission": "0.43", "condition": "1012:18,1001:11,1007:7,1008:19" }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:2,1015:20" }, { "id": 9, "commission": "0.39", "condition": "1002:2,1015:10,1011:8,1003:18" }, { "id": 10, "commission": "0.22", "condition": "1006:12,1012:5,1011:14,1003:6" }, { "id": 11, "commission": "0.76", "condition": "1009:11,1004:20,1012:9,1002:10" }, { "id": 12, "commission": "0.43", "condition": "1007:16,1003:11,1012:16,1005:6" }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:18" }, { "id": 14, "commission": "0.7", "condition": "1015:18,1008:18,1006:16,1001:14" }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:1,1011:2,1001:10" }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17" }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:16,1012:19,1001:14" }, { "id": 18, "commission": 0.48, "condition": "1008:4,1011:2,1009:15,1002:5" }, { "id": 19, "commission": 0.75, "condition": "1013:1,1003:20,1014:11,1001:17" }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:2" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:4,1005:6,1007:5" }, { "id": 22, "commission": "0.4", "condition": "1015:9,1007:12,1011:5,1004:17" }, { "id": 23, "commission": 0.2, "condition": "1003:19,1014:2,1015:16,1001:14" }, { "id": 24, "commission": 0.77, "condition": "1014:3,1001:17,1008:18,1004:5" }, { "id": 25, "commission": 0.64, "condition": "1002:13,1011:1,1010:15,1007:20" }, { "id": 26, "commission": 0.03, "condition": "1002:11,1011:12,1012:2,1003:19" }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:10,1011:7" }, { "id": 28, "commission": 0.53, "condition": "1014:7,1007:12,1011:17,1003:17" }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:8" }, { "id": 30, "commission": 0.14, "condition": "1011:7,1014:9,1006:14,1004:3" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:9,1006:11" }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:2,1012:12,1008:20" }, { "id": 33, "commission": 0.2, "condition": "1012:6,1013:11,1002:13,1009:16" }, { "id": 34, "commission": 0.02, "condition": "1009:9,1010:12,1011:14,1012:2" }, { "id": 35, "commission": 0.13, "condition": "1001:18,1004:19,1013:6,1003:10" }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:7,1007:17" }, { "id": 37, "commission": 0.44, "condition": "1012:4,1010:20,1002:4,1011:11" }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18" }, { "id": 39, "commission": 0.36, "condition": "1007:8,1012:13,1004:16,1002:16" }, { "id": 40, "commission": 0.28, "condition": "1004:10,1005:10,1008:18,1011:16" }, { "id": 41, "commission": 0.18, "condition": "1010:8,1009:8,1008:7,1011:6" }, { "id": 42, "commission": 0.43, "condition": "1009:1,1005:8,1007:2,1002:13" }, { "id": 43, "commission": 0.14, "condition": "1006:1,1004:4,1014:11,1008:5" }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:18,1002:4,1007:9" }, { "id": 45, "commission": 0.11, "condition": "1012:15,1010:3,1007:3,1011:3" }, { "id": 46, "commission": 0.39, "condition": "1003:12,1007:3,1010:16,1002:14" }, { "id": 47, "commission": 0.49, "condition": "1010:14,1015:20,1003:15,1014:6" }, { "id": 48, "commission": 0.06, "condition": "1013:17,1007:14,1008:17,1001:10" }, { "id": 49, "commission": 0.48, "condition": "1002:6,1004:11,1009:12,1006:20" }, { "id": 50, "commission": 0.05, "condition": "1006:17,1012:9,1008:2,1015:11" }, { "id": 51, "commission": 0.04, "condition": "1011:8,1004:19,1002:5,1003:11" }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:10,1001:15,1004:6" }, { "id": 53, "commission": 0.08, "condition": "1014:14,1012:12,1010:1,1015:18" }, { "id": 54, "commission": 0.45, "condition": "1005:2,1002:13,1009:6,1015:17" }, { "id": 55, "commission": 0.7, "condition": "1001:3,1014:9,1005:7,1010:15" }, { "id": 56, "commission": 0.05, "condition": "1006:17,1005:19,1009:17,1003:18" }, { "id": 57, "commission": 0.67, "condition": "1007:1,1008:17,1002:16,1009:15" }, { "id": 58, "commission": 0.32, "condition": "1006:10,1008:5,1005:4,1007:9" }, { "id": 59, "commission": 0.79, "condition": "1012:5,1009:1,1013:6,1008:5" }, { "id": 60, "commission": 0.69, "condition": "1015:6,1012:7,1010:1,1001:3" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:5,1011:15,1002:7" }, { "id": 62, "commission": 0.44, "condition": "1015:1,1007:15,1011:8,1006:6" }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:7" }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:9,1004:5" }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:10,1014:20,1005:15" }, { "id": 66, "commission": 0.73, "condition": "1004:15,1008:5,1002:14,1012:14" }, { "id": 67, "commission": 0.13, "condition": "1001:16,1012:20,1011:20,1003:1" }, { "id": 68, "commission": 0.69, "condition": "1013:4,1008:3,1006:6,1007:17" }, { "id": 69, "commission": 0.37, "condition": "1015:3,1004:9,1013:7,1009:1" }, { "id": 70, "commission": 0.71, "condition": "1010:3,1004:1,1011:7,1012:11" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:6,1003:8,1015:13" }, { "id": 72, "commission": 0.31, "condition": "1005:2,1002:18,1012:19,1010:14" }, { "id": 73, "commission": 0.39, "condition": "1012:4,1006:2,1003:7,1004:2" }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:3,1001:20" }, { "id": 75, "commission": 0.18, "condition": "1006:1,1014:3,1008:12,1002:5" }, { "id": 76, "commission": 0.51, "condition": "1007:1,1012:2,1004:11,1014:2" }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:6,1012:4,1007:7" }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:12" }, { "id": 79, "commission": 0.65, "condition": "1006:6,1004:8,1007:12,1011:7" }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:4" }, { "id": 81, "commission": 0.14, "condition": "1012:10,1015:8,1002:4,1003:8" }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14" }, { "id": 83, "commission": 0.53, "condition": "1010:9,1003:8,1007:12,1015:20" }, { "id": 84, "commission": 0.62, "condition": "1005:9,1014:6,1002:18,1007:8" }, { "id": 85, "commission": 0.37, "condition": "1011:10,1001:7,1012:12,1004:12" }, { "id": 86, "commission": 0.59, "condition": "1009:5,1011:20,1006:4,1015:11" }, { "id": 87, "commission": 0.11, "condition": "1006:6,1005:9,1013:10,1014:9" }, { "id": 88, "commission": 0.08, "condition": "1008:7,1011:4,1015:12,1014:11" }, { "id": 89, "commission": 0.02, "condition": "1002:17,1003:2,1005:11,1010:14" }, { "id": 90, "commission": 0.32, "condition": "1002:19,1013:8,1007:5,1001:13" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:10,1014:10,1007:16" }, { "id": 92, "commission": 0.13, "condition": "1004:8,1011:13,1008:15,1007:9" }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:9,1006:8,1008:11" }, { "id": 94, "commission": 0.22, "condition": "1002:6,1001:17,1013:16,1005:11" }, { "id": 95, "commission": 0.15, "condition": "1005:6,1001:14,1015:4,1008:16" }, { "id": 96, "commission": 0.06, "condition": "1003:4,1001:8,1007:8,1005:18" }, { "id": 97, "commission": 0.74, "condition": "1013:12,1009:13,1006:2,1011:2" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1002:0", "gain": null }, { "id": 2, "reward": "1002:1500", "cost": "1002:10000", "gain": 0.1 }, { "id": 3, "reward": "1002:2000", "cost": "1002:30000", "gain": 0.25 }, { "id": 4, "reward": "1002:2500", "cost": "1002:50000", "gain": 0.4 }, { "id": 5, "reward": "1002:3000", "cost": "1002:100000", "gain": 0.55 }], "feed": [{ "id": 1001, "name": "饼干", "icon": "pet_feed/1001_feed.png", "vitality": 1, "cost": "1002:3", "desc": "可增加宠物&点体力" }, { "id": 1002, "name": "坚果", "icon": "pet_feed/1002_feed.png", "vitality": 2, "cost": "1002:5", "desc": "可增加宠物&点体力" }, { "id": 1003, "name": "火腿", "icon": "pet_feed/1003_feed.png", "vitality": 5, "cost": "1002:10", "desc": "可增加宠物&点体力" }, { "id": 1004, "name": "牛肉", "icon": "pet_feed/1004_feed.png", "vitality": 50, "cost": "1002:80", "desc": "可增加宠物&点体力" }, { "id": 1005, "name": "猪肉", "icon": "pet_feed/1005_feed.png", "vitality": 20, "cost": "1002:35", "desc": "可增加宠物&点体力" }, { "id": 1006, "name": "鸡肉", "icon": "pet_feed/1006_feed.png", "vitality": 10, "cost": "1002:18", "desc": "可增加宠物&点体力" }], "currency": [{ "id": 1001, "name": "钻石", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "金币", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_times", "value": 30 }, { "id": "all_speed_up_time", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:40000,1002:50000,1002:20000,1002:20000,1002:20000,1002:20000,1002:20000" }] };

    class Tools {
        static parseString(str, format = ",") {
            if (!str)
                return [];
            return str.split(format);
        }
    }
    Tools.formatSeconds = (s) => new Date(s * 1000).toISOString().substr(11, 8);

    const TablePropertyEvent = {
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
                ability: d.ability,
            };
        },
        feed(d) {
            return {
                id: d.id,
                name: d.name,
                icon: d.icon || `pet_feed/${d.id}_feed.png`,
                vitality: d.vitality,
                cost: getRewardCurrencyBase(d.cost),
                desc: d.desc,
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
                        count: Number(v[1]),
                    };
                }),
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
                unlock_reward: Tools.parseString(d.unlock_reward).map((e) => getRewardCurrencyBase(e)),
            };
        },
        currency(d) {
            return {
                id: d.id,
                icon: d.icon,
                name: d.name,
            };
        },
        landLevel(d) {
            return {
                id: d.id,
                reward: getRewardCurrencyBase(d.reward),
                cost: getRewardCurrencyBase(d.cost),
                gain: d.gain,
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
                        value: Tools.parseString(d.value).map((d) => getRewardCurrencyBase(d)),
                    };
            }
        },
        signIn(d) {
            return {
                id: d.id,
                days: d.days,
                reward: getRewardCurrencyBase(d.reward),
            };
        },
        task(d) {
            return {
                id: d.id,
                times: d.times,
                reward: getRewardCurrencyBase(d.reward),
                desc: d.desc,
                title: d.title,
                icon: d.icon || `game/img_barm.png`,
            };
        },
    };
    function getRewardCurrencyBase(str) {
        if (!str)
            return null;
        let list = Tools.parseString(str, ":");
        return {
            obj: TableAnalyze.table("currency").get(Number(list[0])),
            count: Number(list[1]),
        };
    }
    class TableControl {
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
                list: list,
                get(id) {
                    for (let x = 0, l = list.length; x < l; x++) {
                        if (list[x].id == id) {
                            return list[x];
                        }
                    }
                    return null;
                },
            };
        }
    }
    const TableAnalyze = new TableControl();

    class TaskService {
        constructor() {
            this.list = [];
        }
        init(d) {
            d.forEach((e) => this.list.push({
                id: e.id,
                times: e.times,
                receive: e.receive,
                base: TableAnalyze.table("task").get(e.id),
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
        taskAddTimes(id) {
            let task = this.getTask(id);
            if (!task) {
                return;
            }
            task.times++;
        }
        clear() {
            this.list.length = 0;
        }
    }
    var TaskService$1 = new TaskService();

    class LandService {
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
    }
    var LandService$1 = new LandService();

    class PetService {
        constructor() {
            this.list = [];
        }
        init(pets) {
            TableAnalyze.table("pet").list.forEach((d) => {
                this.list.push({
                    base: d,
                    lock: !pets.includes(d.id),
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
    }
    var PetService$1 = new PetService();

    class PlantService {
        constructor() {
            this.list = [];
        }
        init(list) {
            TableAnalyze.table("plant").list.forEach((d) => {
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
    }
    var PlantService$1 = new PlantService();

    class UserInfo {
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
    }
    var UserInfo$1 = new UserInfo();

    class WarehouseService {
        constructor() {
            this.list = [];
        }
        init(data) {
            data.forEach((d) => {
                this.list.push({
                    base: TableAnalyze.table("plant").get(d.id),
                    count: d.amount,
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
            Core.eventGlobal.event("update_Order");
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
                Core.eventGlobal.event("update_Order");
                return;
            }
            this.list.push({
                base: TableAnalyze.table("plant").get(id),
                count: amount,
            });
            Core.eventGlobal.event("update_Order");
        }
        clear() {
            this.list.length = 0;
        }
    }
    var WarehouseService$1 = new WarehouseService();

    class HttpDataControl {
        forward(d) {
            switch (d.api) {
                case "/login":
                case "/login/token":
                    this.login(d.data);
                    break;
                case "/land/speedUp":
                    this.taskUpdate(1002);
                    break;
                case "/land/gather":
                    this.taskUpdate(1003);
                    this.updateUserInfo(d.data);
                    break;
                case "/feed/buy":
                    this.taskUpdate(1005);
                    this.taskUpdate(1006);
                    this.updateUserInfo(d.data);
                    break;
                case "/land/sow":
                    this.taskUpdate(1007);
                    this.updateUserInfo(d.data);
                    break;
                case "/warehouse/sell":
                    this.taskUpdate(1008);
                    this.updateUserInfo(d.data);
                    break;
                case "/seeds/unlock":
                case "/land/sow":
                case "/land/unlock":
                case "/pet/buy":
                case "/task/reward":
                case "/land/upgrade":
                case "/order/reward":
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
            Core.eventGlobal.event(d.api, d.data);
        }
        error(errorCode, data) {
            Core.view.openHint({
                text: `errorCode ${errorCode} ${JSON.stringify(data)}`,
                call: () => { },
            });
        }
        login(d) {
            var _a, _b, _c;
            PlantService$1.init(d.seeds);
            WarehouseService$1.init(d.warehouse);
            UserInfo$1.uid = d.userInfo.uid;
            UserInfo$1.diamond = d.userInfo.diamond;
            UserInfo$1.gold = d.userInfo.gold;
            UserInfo$1.nickname = d.userInfo.nickname;
            UserInfo$1.avatar = "";
            UserInfo$1.orderLevel = d.orderId || 0;
            UserInfo$1.warePetId = (_a = d.wearPet) === null || _a === void 0 ? void 0 : _a.id;
            UserInfo$1.petVitality = ((_b = d.wearPet) === null || _b === void 0 ? void 0 : _b.vitality) || 0;
            UserInfo$1.digestCountDown = ((_c = d.wearPet) === null || _c === void 0 ? void 0 : _c.digestCountDown) || 0;
            UserInfo$1.advertiseTimes = d.advertiseTimes || 0;
            UserInfo$1.signInDays = d.signInDays || 0;
            UserInfo$1.signInId = d.signInId;
            UserInfo$1.speedUpTimes = d.speedUpTimes;
            PetService$1.init(d.pets);
            TaskService$1.init(d.tasks);
            LocalStorageService$1.setJSON("isLogin", true);
            if (d.token)
                LocalStorageService$1.setJSON("token", d.token);
            LandService$1.init(d.lands);
            Core.audio.soundMuted = LocalStorageService$1.getJSON().sound;
            Core.audio.musicMuted = LocalStorageService$1.getJSON().music;
        }
        loginOut() {
            PlantService$1.clear();
            WarehouseService$1.clear();
            PetService$1.clear();
            LandService$1.clear();
            TaskService$1.clear();
            LocalStorageService$1.setJSON("isLogin", false);
            LocalStorageService$1.setJSON("token", null);
            UserInfo$1.uid = null;
            UserInfo$1.diamond = 0;
            UserInfo$1.gold = 0;
            UserInfo$1.nickname = "";
            UserInfo$1.avatar = "";
            UserInfo$1.orderLevel = 0;
            UserInfo$1.warePetId = null;
            UserInfo$1.petVitality = 0;
            UserInfo$1.digestCountDown = 0;
            UserInfo$1.advertiseTimes = 0;
            UserInfo$1.signInDays = 0;
            UserInfo$1.signInId = null;
            UserInfo$1.speedUpTimes = 0;
        }
        updateUserInfo(d) {
            UserInfo$1.gold = d.gold;
            UserInfo$1.diamond = d.diamond;
            UserInfo$1.advertiseTimes = d.advertiseTimes || 0;
        }
        taskUpdate(id) {
            TaskService$1.taskAddTimes(id);
        }
    }
    var HttpDataControl$1 = new HttpDataControl();

    class HttpControl {
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
                data.headers = ["Authorization", `Bearer ${LocalStorageService$1.getJSON().token}`];
            }
            console.log(`%c ==> send %c${data.api} %c${JSON.stringify(data.data)}`, `color:#82ccdd;font-weight:700;`, `color:#eb4d4b;font-weight:700;`, `color:#f8c291;font-weight:700;`);
            let uri = data.baseUrl + data.api;
            if (!data.api) {
                Core.view.open(Res.views.HintView, {
                    parm: { text: `http 地址不能为空` },
                });
                return;
            }
            this.xhr.open("POST", uri, true);
            this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            this.xhr.setRequestHeader("Authorization", `Bearer ${LocalStorageService$1.getJSON().token}`);
            let sendData = [];
            if (data.data) {
                Object.keys(data.data).forEach((d) => {
                    sendData.push(`${d}=${data.data[d]}`);
                });
                if (((_a = data.data) === null || _a === void 0 ? void 0 : _a.type) == ConfigGame.ApiTypeAD) {
                    TaskService$1.taskAddTimes(1001);
                    TaskService$1.taskAddTimes(1012);
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
                if ((_a = this.sendData) === null || _a === void 0 ? void 0 : _a.error) {
                    this.sendData.error(e.code, e.data);
                }
                HttpDataControl$1.error(e.code, e.data);
                return console.error(e);
            }
            else {
                console.log(`%c <== back %c${this.sendData.api} `, `color:#b8e994;font-weight:700;`, `color:#78e08f;font-weight:700;`, e.data);
                HttpDataControl$1.forward({
                    api: this.sendData.api,
                    data: e.data,
                    call: (_b = this.sendData) === null || _b === void 0 ? void 0 : _b.call,
                    resolveEvent: this.backResolveEvent,
                });
            }
        }
        errorHandler(e) {
            console.log(e);
        }
        processHandler(e) {
            console.log(e);
        }
    }
    __decorate([
        Instance,
        __metadata("design:type", HttpControl)
    ], HttpControl, "inst", void 0);

    class AddLandView extends GameScript {
        onOpened(d) {
            this.data = d;
        }
        onClick(e) {
            switch (e.target.name) {
                case "closeAddLandLayer":
                    Core.view.close(Res.views.AddLandView);
                    break;
                case "cost_gold":
                    HttpControl.inst.send({
                        api: "/land/unlock",
                        data: {
                            landId: this.data.id,
                            type: ConfigGame.ApiTypeDefault,
                        },
                        call: (d) => {
                            var _a;
                            if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call) {
                                this.data.call();
                                Core.view.close(Res.views.AddLandView);
                            }
                        },
                    });
                    break;
                case "ad_btn":
                    HttpControl.inst.send({
                        api: "/land/unlock",
                        data: {
                            landId: this.data.id,
                            type: ConfigGame.ApiTypeAD,
                        },
                        call: (d) => {
                            var _a;
                            if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call) {
                                this.data.call();
                                Core.view.close(Res.views.AddLandView);
                            }
                        },
                    });
                    break;
            }
        }
    }

    class FieldLevelUpView extends GameScript {
        constructor() {
            super(...arguments);
            this.priceLabel = null;
            this.priceIcon = null;
        }
        onOpened(e) {
            this.data = e;
            let nextLand = TableAnalyze.table("landLevel").get(e.obj.level + 1);
            this.priceLabel.text = `价格：${nextLand.cost.count}`;
            this.priceIcon.skin = nextLand.cost.obj.icon;
            console.log(e);
        }
        onClick(e) {
            switch (e.target.name) {
                case "closeAddLandLayer":
                    Core.view.close(Res.views.FieldLevelUpView);
                    break;
                case "upgradeBtn":
                case "upgradeAdBtn":
                    HttpControl.inst.send({
                        api: "/land/upgrade",
                        data: {
                            landId: this.data.obj.id,
                            type: e.target.name == "upgradeBtn"
                                ? ConfigGame.ApiTypeDefault
                                : ConfigGame.ApiTypeAD,
                        },
                        call: (d) => {
                            if (this.data.call) {
                                this.data.call();
                            }
                            Core.view.close(Res.views.FieldLevelUpView);
                        },
                    });
                    break;
            }
        }
    }

    class FriendsDescView extends Core.gameScript {
        onHdAwake() {
            this.panelNode.vScrollBarSkin = null;
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.FriendsDescView);
                    break;
            }
        }
        onHdDestroy() {
            Laya.loader.clearTextureRes("res/img_inviteBg1.png");
        }
    }

    class FriendsRewardView extends Core.gameScript {
        constructor() {
            super(...arguments);
            this.intType = 1000;
        }
        onOpened() { }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.FriendsRewardView);
                    break;
            }
        }
        onHdDestroy() {
            Laya.loader.clearTextureRes("res/img_inviteBg1.png");
        }
    }

    class FriendsView extends Core.gameScript {
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
                    Core.view.close(Res.views.FriendsView);
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
                    Core.view.open(Res.views.FriendsDescView);
                    break;
                case "reward_btn":
                    Core.view.open(Res.views.FriendsRewardView);
                    break;
                default:
                    break;
            }
        }
    }

    class HintView extends Core.gameScript {
        onOpened(d) {
            var _a;
            this.data = d;
            this.text.text = ((_a = this.data) === null || _a === void 0 ? void 0 : _a.text) || "";
            if (this.data.call) {
                this.confirmBtn.visible = true;
            }
            else {
                this.confirmBtn.visible = false;
            }
            if (this.data.cancelCall) {
                this.cancelBtn.visible = true;
            }
            else {
                this.cancelBtn.visible = false;
            }
            if (this.data.call && this.data.cancelCall) {
                this.confirmBtn.x = 252;
            }
            else {
                this.confirmBtn.x = 458;
            }
        }
        onClick(e) {
            var _a, _b;
            switch (e.target.name) {
                case "cancel":
                    if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.cancelCall) {
                        this.data.cancelCall();
                    }
                    Core.view.close(Res.views.HintView);
                    break;
                case "confirm":
                    if ((_b = this.data) === null || _b === void 0 ? void 0 : _b.call) {
                        this.data.call();
                    }
                    Core.view.close(Res.views.HintView);
                    break;
            }
        }
    }

    class LoginView extends GameScript {
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
            if ((_a = LocalStorageService$1.getJSON()) === null || _a === void 0 ? void 0 : _a.isLogin) {
                this.login();
                this.loginBox.visible = false;
                this.loadBox.visible = true;
                this.userInput.visible = false;
            }
            else {
                this.loginBox.visible = true;
                this.loadBox.visible = false;
                this.userInput.visible = true;
            }
        }
        onHdAwake() {
            EventGlobal.on("load_progress", this, this.loadProgress);
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
            if (LocalStorageService$1.getJSON().token) {
                HttpControl.inst.send({
                    api: "/login/token",
                    call: (d) => {
                        var _a;
                        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call)
                            this.data.call(d);
                        this.loginBox.visible = false;
                        this.loadBox.visible = true;
                    },
                    error: (code, data) => {
                        LocalStorageService$1.clear();
                        this.loginBox.visible = true;
                        this.loadBox.visible = false;
                        this.userInput.visible = true;
                    },
                });
            }
            else {
                HttpControl.inst.send({
                    api: "/login",
                    data: {
                        account: this.userInput.text,
                    },
                    call: (d) => {
                        var _a;
                        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call)
                            this.data.call(d);
                        this.loginBox.visible = false;
                        this.loadBox.visible = true;
                    },
                    error: (code, data) => {
                        LocalStorageService$1.clear();
                        this.loginBox.visible = true;
                        this.loadBox.visible = false;
                        this.userInput.visible = true;
                    },
                });
            }
        }
        loadProgress(v) {
            this.loadBar.width = v * this.loadBarOldWidth;
        }
        onHdDisable() {
            EventGlobal.off("load_progress", this, this.loadProgress);
        }
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

    class FieldComponent extends Core.gameScript {
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
            this.icon.skin = null;
            this.showShadowIcon(false);
            this.timeBox.visible = false;
            this.timeBox.active = false;
            this.topStateIcon.visible = false;
            this.lvNode.visible = false;
        }
        updateData() {
            this.landList = LandService$1.list;
            this.data = this.landList.get(this.fieldId);
            this.renderData();
        }
        renderData() {
            if (this.data) {
                this.showIcon(true);
                this.fieldNode.skin = this.fieldEmptyRes;
                this.showIcon(Boolean(this.data.productId));
                this.lvNode.visible = true;
                this.updateLevel();
                if (this.data.productId) {
                    this.plantIconAni(true);
                }
                if (this.data.productId && this.data.matureTimeLeft) {
                    this.timeBox.visible = true;
                    this.timeBox.active = true;
                    this.icon.skin = TableAnalyze.table("plant").get(this.data.productId).growingIcon;
                    this.showShadowIcon(true);
                    this.updateCountDown();
                    this.topStateIcon.visible = true;
                    this.topStateIconAni(true);
                    this.setStateIconSkin(1);
                }
                else {
                    if (this.data.productId) {
                        this.topStateIcon.visible = true;
                        this.showShadowIcon(true);
                        this.topStateIconAni(true);
                        this.updateCountDown();
                    }
                }
            }
            else {
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
        topStateIconAni(play) {
            if (!this.topStateIconTween) {
                this.topStateIconTween = Laya.TimeLine.to(this.topStateIcon, { y: this.topStateIcon.y - 50 }, 800, null).to(this.topStateIcon, { y: this.topStateIcon.y }, 800);
            }
            this.topStateIcon.visible = play;
            if (play) {
                this.topStateIconTween.play(null, true);
            }
            else {
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
                this.plantIconTween = Laya.TimeLine.to(this.icon, { skewX: 6 }, 900)
                    .to(this.icon, { skewX: -6 }, 1800)
                    .to(this.icon, { skewX: 0 }, 900);
            }
            if (play) {
                Laya.timer.once(Math.random() * 1000, this, () => {
                    this.plantIconTween.play(null, true);
                });
            }
            else {
                this.plantIconTween.pause();
            }
        }
        updateCountDown() {
            var _a, _b;
            if (this.data.matureTimeLeft > 0) {
                this.countDownLb.text = Tools.formatSeconds(this.data.matureTimeLeft);
                Laya.timer.clearAll(this);
                Laya.timer.once(1000, this, () => {
                    this.data.matureTimeLeft--;
                    this.countDownLb.text = Tools.formatSeconds(this.data.matureTimeLeft);
                    return this.updateCountDown();
                });
            }
            else {
                this.data.matureTimeLeft = 0;
                console.log("倒计时结束 ");
                this.icon.skin = (_b = TableAnalyze.table("plant").get((_a = this.data) === null || _a === void 0 ? void 0 : _a.productId)) === null || _b === void 0 ? void 0 : _b.matureIcon;
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
            if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.matureTimeLeft) {
                this.data.matureTimeLeft -= TableAnalyze.table("config").get("all_speed_up_time")
                    .value;
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
            return __awaiter(this, void 0, void 0, function* () {
                console.log(this.fieldId, this.buildIng);
                Core.audio.playSound(Res.audios.button_click);
                if (this.data) {
                    if (this.buildIng) {
                        if (TableAnalyze.table("landLevel").get(this.data.level + 1)) {
                            Core.view.open(Res.views.FieldLevelUpView, {
                                parm: {
                                    obj: this.data,
                                    call: () => {
                                        this.data.level++;
                                        this.updateLevel();
                                    },
                                },
                            });
                        }
                        else {
                            console.log("满级");
                            this.topStateIconAni(false);
                            Core.view.openHint({
                                text: `已满级`,
                                call: () => { },
                            });
                        }
                        return;
                    }
                    if (this.data.productId) {
                        if (this.data.matureTimeLeft) {
                            console.log("加速");
                            Core.view.open(Res.views.SpeedUpView);
                            return;
                        }
                        else {
                            console.log("收获");
                            let plantAmount = 0;
                            yield HttpControl.inst.send({
                                api: "/land/gather",
                                data: {
                                    landId: this.data.id,
                                    type: ConfigGame.ApiTypeDefault,
                                },
                                call: (d) => {
                                    plantAmount = d.amount;
                                    WarehouseService$1.add(this.data.productId, d.amount);
                                },
                            });
                            let plantObj = TableAnalyze.table("plant").get(this.data.productId), rewardList = [
                                {
                                    obj: plantObj,
                                    count: plantAmount,
                                    posType: 3,
                                },
                            ];
                            Core.eventGlobal.event("play_get_reward", {
                                node: this.owner,
                                list: rewardList,
                                callBack: () => {
                                },
                            });
                            this.clearField();
                            return;
                        }
                    }
                    Core.view.open(Res.views.ShopView, {
                        parm: {
                            id: 0,
                            parm: { landId: this.fieldId },
                            call: (d) => {
                                console.log(d);
                                this.landList.get(this.fieldId).productId = d.base.id;
                                this.landList.get(this.fieldId).matureTimeLeft = d.base.mature_time;
                                this.data = this.landList.get(this.fieldId);
                                this.renderData();
                            },
                        },
                    });
                }
                else {
                    console.log(this.data);
                    Core.view.open(Res.views.AddLandView, {
                        parm: {
                            id: this.fieldId,
                            call: () => {
                                this.data = {
                                    id: this.fieldId,
                                    level: 1,
                                    matureTimeLeft: 0,
                                    productId: null,
                                };
                                LandService$1.addLand(this.data);
                                this.updateData();
                            },
                        },
                    });
                }
            });
        }
        onHdDestroy() {
            var _a, _b;
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this);
            (_a = this.topStateIconTween) === null || _a === void 0 ? void 0 : _a.destroy();
            (_b = this.plantIconTween) === null || _b === void 0 ? void 0 : _b.destroy();
            this.topStateIconTween = null;
            this.plantIconTween = null;
        }
    }
    __decorate([
        Core.findByName,
        __metadata("design:type", Laya.Image)
    ], FieldComponent.prototype, "icon", void 0);
    __decorate([
        Core.findByName,
        __metadata("design:type", Laya.Image)
    ], FieldComponent.prototype, "fieldNode", void 0);
    __decorate([
        Core.findByName,
        __metadata("design:type", Laya.Image)
    ], FieldComponent.prototype, "shadow", void 0);
    __decorate([
        Core.findByName,
        __metadata("design:type", Laya.Image)
    ], FieldComponent.prototype, "lvNode", void 0);
    __decorate([
        Core.findByName,
        __metadata("design:type", Laya.FontClip)
    ], FieldComponent.prototype, "timeBox", void 0);
    __decorate([
        Core.findByName,
        __metadata("design:type", Laya.Image)
    ], FieldComponent.prototype, "topStateIcon", void 0);
    __decorate([
        Core.eventOn("update_field"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FieldComponent.prototype, "updateData", null);
    __decorate([
        Core.eventOn("land_speed_up"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FieldComponent.prototype, "speedUp", null);

    class MainView extends Core.gameScript {
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
            this.getRewardPrefab = null;
            this.floatRewardIcon = null;
            this.testBtn = null;
            this.petBox = null;
            this.landList = [];
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
                "res/atlas/game.png",
            ].forEach((e) => {
                if (e.endsWith("png"))
                    Laya.loader.clearTextureRes(e);
            });
        }
        onHdAwake() {
            Laya.stage.addChild(this.topLayerOnStage);
            this.landUpLayer.visible = false;
            this.landUpLayer.active = false;
            for (let x = 0; x < this.landBox.numChildren; x++) {
                this.landList.push(this.landBox.getChildAt(x).getComponent(FieldComponent));
            }
            this.landList.sort((a, b) => {
                return a.fieldId - b.fieldId;
            });
            Laya.timer.frameOnce(1, this, () => {
                Core.eventGlobal.event("update_field");
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
            Core.observableProperty
                .watch(UserInfo$1, this)
                .key("diamond", (e) => {
                this.diamondNode.value = e;
            })
                .key("gold", (e) => {
                this.goldNode.value = e;
            })
                .key("avatar", (e) => {
                if (e)
                    this.avatarNode.skin = e;
            })
                .key("warePetId", (e) => {
                if (e) {
                    this.petBox.visible = true;
                    this.petBox.getChildByName("dog").skin =
                        TableAnalyze.table("pet").get(e).icon;
                }
                else {
                    this.petBox.visible = false;
                }
            })
                .key("petVitality", (e) => {
                if (!UserInfo$1.warePetId)
                    return;
                if (this.petBox.visible) {
                    let bar = this.petBox
                        .getChildByName("box")
                        .getChildByName("vitality_bar");
                    let scale = e / TableAnalyze.table("pet").get(UserInfo$1.warePetId).vitality_max;
                    if (scale > 1)
                        scale = 1;
                    bar.width = 130 * scale;
                }
            })
                .key("digestCountDown", (e) => {
                Laya.timer.clear(this, this.digestCountDown);
                if (this.petBox.visible) {
                    Laya.timer.once(e * 1000, this, this.digestCountDown);
                }
            });
            this.addLandLayer.visible = false;
            this.updateOrder();
        }
        digestCountDown() {
            if (!UserInfo$1.warePetId)
                return;
            const pet = TableAnalyze.table("pet").get(UserInfo$1.warePetId);
            if (UserInfo$1.petVitality - pet.vitality_consume <= 0) {
                UserInfo$1.petVitality = 0;
            }
            else {
                UserInfo$1.petVitality -= pet.vitality_consume;
            }
            UserInfo$1.digestCountDown = ConfigGame.petDigestIntervalTime;
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
                    Core.view.open(Res.views.TaskView);
                    break;
                case "signIn":
                    Core.view.open(Res.views.SignInView);
                    break;
                case "mail":
                    Core.view.open(Res.views.MailView);
                    break;
                case "shop":
                    Core.view.open(Res.views.ShopView);
                    break;
                case "head":
                    Core.view.open(Res.views.SettingView);
                    break;
                case "warehouse":
                    Core.view.open(Res.views.WarehouseView);
                    break;
                case "buy_feed":
                    Core.view.open(Res.views.ShopView, { parm: { id: 2 } });
                    break;
                case "dog":
                    Core.view.open(Res.views.ShopView, { parm: { id: 2 } });
                    break;
                case "order_box":
                    Core.view.open(Res.views.OrderView);
                    break;
                case "friends":
                    Core.view.open(Res.views.FriendsView);
                    break;
                case "land":
                    break;
                case "landLevelUp":
                    this.switchLandLevelUp(true);
                    break;
                case "close_up":
                    this.switchLandLevelUp(false);
                    break;
            }
        }
        updateOrder() {
            var _a;
            let box = this.orderBox, d = TableAnalyze.table("order").get(UserInfo$1.orderLevel + 1), reward, rewardCount = 0, curCount = 0, maxCount = 0, progress = 0;
            if (!d)
                return console.log("等级已完");
            for (let x = 0; x < 4; x++) {
                let item = box.getChildByName("item_" + x);
                if (d.condition[x]) {
                    curCount = ((_a = WarehouseService$1.getOne(d.condition[x].plant.id)) === null || _a === void 0 ? void 0 : _a.count) || 0;
                    maxCount = d.condition[x].count;
                    if (curCount >= maxCount) {
                        progress++;
                    }
                    item.getChildByName("icon").skin = d.condition[x].plant.icon;
                    item.getChildByName("num").text = `${curCount}/${maxCount}`;
                    item.getChildByName("bar").width =
                        87 * (curCount / maxCount > 1 ? 1 : curCount / maxCount);
                    item.visible = true;
                    d.condition[x].plant.gain.forEach((e) => {
                        if (e.obj.id === ConfigGame.goldId) {
                            if (!reward) {
                                reward = e;
                            }
                            rewardCount += e.count * maxCount;
                        }
                    });
                }
                else {
                    item.visible = false;
                }
            }
            if (reward) {
                let btnBox = box.getChildByName("btn_box").getChildByName("box");
                btnBox.getChildByName("icon").skin = reward.obj.icon;
                btnBox.getChildByName("value").value = `${rewardCount + Math.round(rewardCount * d.commission)}`;
            }
            box.getChildByName("name_title").text = `完成${UserInfo$1.orderLevel + 1}级订单`;
            if (progress == d.condition.length) {
                HttpControl.inst.send({
                    api: "/order/reward",
                    data: {
                        orderId: UserInfo$1.orderLevel + 1,
                    },
                    call: () => {
                        d.condition.forEach((e) => {
                            WarehouseService$1.reduceAmount(e.plant.id, e.count);
                        });
                        this.playGetRewardAni({
                            node: box.getChildByName("btn_box"),
                            list: [
                                {
                                    obj: TableAnalyze.table("currency").get(ConfigGame.goldId),
                                    count: rewardCount + Math.round(rewardCount * d.commission),
                                    posType: 1,
                                },
                            ],
                            callBack: () => {
                                this.updateOrder();
                            },
                        });
                        UserInfo$1.orderLevel++;
                    },
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
                        if (TableAnalyze.table("landLevel").get(e.data.level + 1)) {
                            e.showIcon(false);
                            e.setStateIconSkin(2);
                            e.topStateIconAni(true);
                            e.showTimeBox(false);
                            e.showShadowIcon(false);
                        }
                    }
                    e.buildIng = true;
                });
            }
            else {
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
                        }
                        else {
                            e.clearField();
                        }
                    }
                    e.buildIng = false;
                    if (e.data) {
                        if (e.data.id) {
                            e.setStateIconSkin(e.data.matureTimeLeft ? 1 : 3);
                        }
                        e.topStateIconAni(Boolean(e.data.productId));
                    }
                    else {
                        e.setStateIconSkin(1);
                        e.topStateIconAni(false);
                    }
                });
            }
        }
        playGetRewardAni(obj) {
            Laya.timer.once(2000, this, () => {
                if (obj.callBack)
                    obj.callBack();
            });
            obj.list.forEach((d, i) => {
                var _a;
                let node = Laya.Pool.getItemByCreateFun("floatRewardBox", this.getRewardPrefab.create, this.getRewardPrefab);
                let icon = node.getChildByName("icon");
                icon.skin = ((_a = d.obj) === null || _a === void 0 ? void 0 : _a.icon) || "";
                let scale = 50 / icon.width;
                icon.scale(scale, scale);
                node.alpha = 0;
                let nodeNewPos = this.topLayerOnStage.globalToLocal(obj.node.localToGlobal(new Laya.Point()));
                node.pos(nodeNewPos.x + obj.node.get_width() * obj.node.anchorX, nodeNewPos.y - i * 60);
                this.topLayerOnStage.addChild(node);
                node.getChildByName("count").value = "x" + d.count;
                Laya.Tween.to(node, { y: node.y - 40, alpha: 1 }, 150, null, Laya.Handler.create(this, (e) => {
                    Laya.timer.once(1000, this, () => {
                        Laya.Pool.recover("floatRewardBox", e);
                        let localPosIcon = this.topLayerOnStage.globalToLocal(e.localToGlobal(Laya.Point.create()));
                        e.removeSelf();
                        if (obj.notFly) {
                            return;
                        }
                        for (let x = 0; x < 5; x++) {
                            let floatIcon = Laya.Pool.getItemByCreateFun("floatRewardIcon", this.floatRewardIcon.create, this.floatRewardIcon);
                            floatIcon.skin = d.obj.icon;
                            floatIcon.pos(localPosIcon.x +
                                Math.random() * 20 * (Math.random() < 0.5 ? 1 : -1), localPosIcon.y +
                                Math.random() * 20 * (Math.random() < 0.5 ? 1 : -1));
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
                            Laya.Tween.to(floatIcon, { x: localPos.x, y: localPos.y }, 1000, Laya.Ease.backIn, Laya.Handler.create(this, (e) => {
                                e.removeSelf();
                                Laya.Pool.recover("floatRewardIcon", e);
                            }, [floatIcon]), 150 * x);
                        }
                    });
                }, [node]), 50 * i, null, true);
            });
        }
    }
    __decorate([
        Core.eventOn("/login"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainView.prototype, "gameInit", null);
    __decorate([
        Core.eventOn("update_Order"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MainView.prototype, "updateOrder", null);
    __decorate([
        Core.eventOn("play_get_reward"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainView.prototype, "playGetRewardAni", null);

    class OrderView extends Core.gameScript {
        constructor() {
            super(...arguments);
            this.orderList = null;
            this.btnLockRes = null;
            this.btnResCur = null;
        }
        onOpened() {
            this.dataList = TableAnalyze.table("order").list;
            let orderOldLv = UserInfo$1.orderLevel || 0;
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
            cell.getChildByName("order_lv").text = `${d.id}级订单`;
            for (let x = 0; x < 4; x++) {
                let item = cell.getChildByName("item_" + x);
                if (d.condition[x]) {
                    curCount = ((_a = WarehouseService$1.getOne(d.condition[x].plant.id)) === null || _a === void 0 ? void 0 : _a.count) || 0;
                    maxCount = d.condition[x].count;
                    if (curCount >= maxCount) {
                        progress++;
                    }
                    item.getChildByName("icon").skin = d.condition[x].plant.icon;
                    if (d.id < UserInfo$1.orderLevel + 1) {
                        item.getChildByName("num").text = `${maxCount}/${maxCount}`;
                        item.getChildByName("bar").width = 87;
                    }
                    else {
                        item.getChildByName("num").text = `${curCount}/${maxCount}`;
                        item.getChildByName("bar").width =
                            87 * (curCount / maxCount > 1 ? 1 : curCount / maxCount);
                    }
                    item.visible = true;
                    d.condition[x].plant.gain.forEach((e) => {
                        if (e.obj.id === ConfigGame.goldId) {
                            if (!reward) {
                                reward = e;
                            }
                            rewardCount += e.count * d.condition[x].count;
                        }
                    });
                }
                else {
                    item.visible = false;
                }
            }
            let btn = cell.getChildByName("btn");
            if (d.id > UserInfo$1.orderLevel + 1) {
                btn.skin = this.btnLockRes;
                btn.active = false;
            }
            else {
                if (d.id == UserInfo$1.orderLevel + 1) {
                    btn.skin = this.btnResCur;
                }
                else {
                    console.log("已完成");
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
                    Core.view.close(Res.views.OrderView);
                    break;
            }
        }
    }

    class SettingView extends Core.gameScript {
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
                    Core.view.close(Res.views.SettingView);
                    break;
                case "music":
                    Core.audio.playSound(Res.audios.button_click);
                    Core.audio.musicMuted = !Core.audio.musicMuted;
                    LocalStorageService$1.setJSON("music", Core.audio.musicMuted);
                    this.musicChange();
                    break;
                case "sound":
                    Core.audio.playSound(Res.audios.button_click);
                    Core.audio.soundMuted = !Core.audio.soundMuted;
                    LocalStorageService$1.setJSON("sound", Core.audio.soundMuted);
                    this.soundChange();
                    break;
                case "sign_out":
                    Core.view.openHint({
                        text: "确认要退出登录？",
                        call: () => {
                            LocalStorageService$1.setJSON("isLogin", false);
                            LocalStorageService$1.setJSON("token", null);
                            Core.view.loginOut();
                            HttpDataControl$1.loginOut();
                            Core.view.open(Res.views.LoginView, {
                                parm: {
                                    call: () => {
                                        Core.eventGlobal.event("login_game");
                                    },
                                },
                            });
                        },
                        cancelCall: () => { },
                    });
                    break;
            }
        }
        musicChange() {
            const box = this.musicNode.getChildByName("box");
            const icon = box.getChildByName("icon");
            let music = Core.audio.musicMuted;
            console.log(music);
            icon.x = !music ? -14 : 91;
            icon.skin = !music ? `game/img_musicOnBtn.png` : "game/img_musicOffBtn.png";
            box.skin = !music ? `game/img_switchOn.png` : "game/img_swithOff.png";
        }
        soundChange() {
            const box = this.soundNode.getChildByName("box");
            const icon = box.getChildByName("icon");
            let sound = Core.audio.soundMuted;
            icon.x = !sound ? -14 : 91;
            icon.skin = !sound ? `game/img_musicOnBtn.png` : "game/img_musicOffBtn.png";
            box.skin = !sound ? `game/img_switchOn.png` : "game/img_swithOff.png";
        }
    }

    class FeedService {
        constructor() {
            this.list = [];
        }
        init() {
            TableAnalyze.table("feed").list.forEach((d) => {
                this.list.push({
                    base: d,
                    lock: false,
                });
            });
        }
        clear() {
            this.list.length = 0;
        }
    }
    var FeedService$1 = new FeedService();

    class ShopView extends GameScript {
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
                ["game/img_bankNormal.png", "game/img_bankSelected.png"],
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
            Core.observableProperty.watch(UserInfo$1, this).key("diamond", (v) => {
                this.diamondFont.value = v;
            });
        }
        onOpened(e) {
            console.log(e);
            this.data = e;
            this.topBtnSelectIndex = (e === null || e === void 0 ? void 0 : e.id) || 0;
            this.updateTopBtnState();
        }
        onSelect(e) {
            this.itemListSelectIndex = e;
        }
        getDataList() {
            if (this.topBtnSelectIndex == 0) {
                return PlantService$1.list;
            }
            if (this.topBtnSelectIndex == 2) {
                if (!FeedService$1.list.length)
                    FeedService$1.init();
                return FeedService$1.list.sort((a, b) => a.base.vitality - b.base.vitality);
            }
        }
        updateItem(cell, index) {
            let d = this.getDataList()[index];
            let priceBox = cell.getChildByName("hbox"), lockIcon = cell.getChildByName("lock_icon");
            if (!d)
                return console.warn("数据丢失");
            if (d.lock) {
                lockIcon.visible = true;
                lockIcon.active = true;
                priceBox.visible = false;
                priceBox.active = false;
            }
            else {
                lockIcon.visible = false;
                lockIcon.active = false;
                priceBox.visible = true;
                priceBox.active = true;
                let count = 0, icon = "";
                if (this.topBtnSelectIndex == 0) {
                    count = d.base.seed_price.count;
                    icon = d.base.seed_price.obj.icon;
                }
                else {
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
                    Core.audio.playSound(Res.audios.button_click);
                }
                this.isFirst = false;
            }
            else {
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
                let box = this.feedBuyBtn.getChildByName("box");
                box.getChildByName("icon").skin = d.base.cost.obj.icon;
                box.getChildByName("value").value =
                    d.base.cost.count + "";
                return;
            }
            let base = d.base;
            this.seedDesc.parent.visible = true;
            this.feedDesc.visible = false;
            this.seedDesc.text = base.desc;
            this.matureTime.text = Tools.formatSeconds(base.mature_time);
            if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call) {
                this.itemBuyBtn.visible = !d.lock;
            }
            else {
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
                }
                else if (gainData) {
                    icon = gainData.obj.icon;
                    count = gainData.count * base.harvest;
                }
                itemBox.getChildByName("icon").skin = icon;
                itemBox.getChildByName("count").text = "x" + count;
            }
            let box = this.lockBtnBox.getChildByName("unlock_buy").getChildByName("box");
            box.getChildByName("icon").skin = (_c = (_b = base.unlock_cost) === null || _b === void 0 ? void 0 : _b.obj) === null || _c === void 0 ? void 0 : _c.icon;
            box.getChildByName("value").value = ((_d = base.unlock_cost) === null || _d === void 0 ? void 0 : _d.count) + "";
        }
        onClick(e) {
            var _a;
            console.log(e.target.name);
            switch (e.target.name) {
                case "close":
                    ViewManager.inst.close(Res.views.ShopView);
                    break;
                case "seed":
                case "pet":
                case "feed":
                case "bank":
                    Core.audio.playSound(Res.audios.button_click);
                    let topBtnIndex = this.btnBoxTop.getChildIndex(e.target);
                    if (this.topBtnSelectIndex != topBtnIndex) {
                        this.topBtnSelectIndex = Number(topBtnIndex);
                        this.updateTopBtnState();
                    }
                    break;
                case "buy_btn":
                    HttpControl.inst.send({
                        api: "/land/sow",
                        data: {
                            landId: (_a = this.data.parm) === null || _a === void 0 ? void 0 : _a.landId,
                            plantId: this.getDataList()[this.itemListSelectIndex].base.id,
                            type: ConfigGame.ApiTypeDefault,
                        },
                        call: (d) => {
                            var _a;
                            ViewManager.inst.close(Res.views.ShopView);
                            if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call)
                                this.data.call(this.getDataList()[this.itemListSelectIndex]);
                        },
                    });
                    break;
                case "unlock_buy":
                case "ad_unlock":
                    HttpControl.inst.send({
                        api: "/seeds/unlock",
                        data: {
                            plantId: this.getDataList()[this.itemListSelectIndex].base.id,
                            type: e.target.name == "ad_unlock"
                                ? ConfigGame.ApiTypeAD
                                : ConfigGame.ApiTypeDefault,
                        },
                        call: (d) => {
                            PlantService$1.list[this.itemListSelectIndex].lock = false;
                            this.itemList.changeItem(this.itemListSelectIndex, PlantService$1.list[this.itemListSelectIndex]);
                        },
                    });
                    break;
                case "left":
                    this.selectPetIndex--;
                    if (this.selectPetIndex < 0) {
                        this.selectPetIndex = PetService$1.list.length - 1;
                    }
                    this.updatePet();
                    break;
                case "right":
                    this.selectPetIndex++;
                    if (this.selectPetIndex >= PetService$1.list.length) {
                        this.selectPetIndex = 0;
                    }
                    this.updatePet();
                    break;
                case "pet_btn":
                    this.petBuy();
                    break;
                case "go_watch":
                    this.petGoWatch(PetService$1.list[this.selectPetIndex].base.id);
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
                api: "/feed/buy",
                data: {
                    feedId: feed.base.id,
                    type: ConfigGame.ApiTypeDefault,
                },
                call: (d) => {
                    UserInfo$1.petVitality += feed.base.vitality;
                    Core.eventGlobal.event("play_get_reward", {
                        node: this.feedBuyBtn,
                        list: [
                            {
                                obj: feed.base,
                                count: 1,
                                posType: 2,
                            },
                        ],
                        notFly: true,
                    });
                },
            });
        }
        petGoWatch(petId) {
            HttpControl.inst.send({
                api: "/pet/wear",
                data: {
                    petId: petId,
                    type: ConfigGame.ApiTypeDefault,
                },
                call: (d) => {
                    UserInfo$1.warePetId = petId;
                    this.updatePet();
                },
            });
        }
        petBuy() {
            let { base } = PetService$1.list[this.selectPetIndex];
            HttpControl.inst.send({
                api: "/pet/buy",
                data: {
                    petId: base.id,
                    type: ConfigGame.ApiTypeDefault,
                },
                call: (d) => {
                    PetService$1.list[this.selectPetIndex].lock = false;
                    this.updatePet();
                    if (!UserInfo$1.warePetId)
                        UserInfo$1.warePetId = base.id;
                    if (!UserInfo$1.petVitality) {
                        UserInfo$1.petVitality = base.vitality_max;
                        UserInfo$1.digestCountDown = ConfigGame.petDigestIntervalTime;
                    }
                },
            });
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
            if (!PetService$1.list.length)
                PetService$1.init([]);
            let pet = PetService$1.list[this.selectPetIndex];
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
                starIcon.skin =
                    x * 20 + 10 < pet.base.sensitive ? "game/img_star.png" : "game/img_halfstar.png";
                starIcon = back_box.getChildAt(x);
                starIcon.visible = x * 20 < pet.base.ability;
                starIcon.skin =
                    x * 20 + 10 < pet.base.ability ? "game/img_star.png" : "game/img_halfstar.png";
            }
            if (pet.lock) {
                this.petBuyBtn.visible = true;
                this.goRest.visible = false;
                this.goWatch.visible = false;
            }
            else {
                if (UserInfo$1.warePetId == pet.base.id) {
                    if (PetService$1.getUnlockLen() === 1 || UserInfo$1.warePetId === 1001) {
                        this.goRest.disabled = true;
                    }
                    else {
                        this.goRest.disabled = false;
                    }
                    this.goRest.visible = true;
                    this.goWatch.visible = false;
                }
                else {
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
        onPriceSelect(e) { }
        updatePriceItem(cell, i) {
            if (this.priceList.selectedIndex === i) {
                cell.getChildByName("bg").skin = "game/img_priceselected.png";
            }
            else {
                cell.getChildByName("bg").skin = "game/img_pricenormal.png";
            }
        }
    }

    class SignInView extends GameScript {
        onOpened() {
            this.signInList.array = TableAnalyze.table("signIn").list;
            this.signInList.vScrollBarSkin = null;
            this.signInList.renderHandler = new Laya.Handler(this, this.updateItem);
            this.updateProgress();
        }
        updateProgress() {
            let scale = UserInfo$1.speedUpTimes / ConfigGame.ADSpeedUpTimes;
            if (scale > 1)
                scale = 1;
            this.signInProgressBar.width = 977 * scale;
            this.signInProgressLb.text = UserInfo$1.signInDays + "";
            this.progressDesc.text = `今日签到进度（使用${UserInfo$1.speedUpTimes}/${ConfigGame.ADSpeedUpTimes}次加速）`;
        }
        updateItem(cell, i) {
            const bar = cell.getChildByName("bar"), obj = TableAnalyze.table("signIn").list[i];
            let scale = UserInfo$1.signInDays / obj.days;
            if (scale > 1)
                scale = 1;
            bar.width = 502 * scale;
            const rewardBox = cell.getChildByName("reward_box");
            rewardBox.getChildByName("icon").skin = obj.reward.obj.icon;
            rewardBox.getChildByName("amount").text = `x${obj.reward.count}`;
            cell.getChildByName("sign_days").text = `签到${obj.days}天`;
            let skin = "", btn = cell.getChildByName("get_btn");
            btn.dataSource = obj.id;
            if (obj.id > UserInfo$1.signInId) {
                btn.active = true;
                btn.visible = false;
                rewardBox.y = 103;
                skin = `game/img_done.png`;
                if (UserInfo$1.signInDays >= obj.days) {
                    if (!UserInfo$1.signInId) {
                        if (obj.id == TableAnalyze.table("signIn").list[0].id) {
                            skin = `game/img_get.png`;
                            btn.visible = true;
                            rewardBox.y = 57;
                        }
                    }
                    else {
                        if (obj.id - UserInfo$1.signInId == 1) {
                            skin = `game/img_get.png`;
                            btn.visible = true;
                            rewardBox.y = 57;
                        }
                    }
                }
            }
            else {
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
                    ViewManager.inst.close(Res.views.SignInView);
                    break;
                case "get_btn":
                    const signInId = e.target["dataSource"];
                    HttpControl.inst.send({
                        api: "/signIn/reward",
                        data: { type: ConfigGame.ApiTypeAD, signInId: signInId },
                        call: (d) => {
                            UserInfo$1.signInId = signInId;
                            this.signInList.refresh();
                            let reward = TableAnalyze.table("signIn").get(signInId).reward;
                            Core.eventGlobal.event("play_get_reward", {
                                node: e.target,
                                list: [
                                    {
                                        obj: reward.obj,
                                        count: reward.count,
                                        posType: reward.obj.id == ConfigGame.goldId ? 1 : 2,
                                    },
                                ],
                            });
                        },
                    });
                    break;
            }
        }
    }

    class SpeedUpView extends Core.gameScript {
        onOpened() {
            let time = TableAnalyze.table("config").get("all_speed_up_time").value;
            this.timeLb.text = `${Math.ceil(time / 60)}分钟`;
            this.timesLb.text = `今日剩余${UserInfo$1.advertiseTimes}次`;
            if (UserInfo$1.advertiseTimes <= 0) {
                this.speedUpBtn.disabled = true;
            }
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.SpeedUpView);
                    break;
                case "speed_up":
                    HttpControl.inst.send({
                        api: "/land/speedUp",
                        data: { type: ConfigGame.ApiTypeAD },
                        call: (d) => {
                            UserInfo$1.speedUpTimes = d.speedUpTimes;
                            UserInfo$1.advertiseTimes = d.advertiseTimes;
                            if (UserInfo$1.speedUpTimes == ConfigGame.ADSpeedUpTimes) {
                                UserInfo$1.signInDays++;
                            }
                            Core.view.close(Res.views.SpeedUpView);
                            Core.eventGlobal.event("land_speed_up");
                        },
                    });
                    break;
            }
        }
    }

    class TaskView extends GameScript {
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
            let list = TaskService$1.list;
            list.sort((a, b) => {
                let tA = TaskService$1.getTask(a.id), tB = TaskService$1.getTask(b.id);
                return (a.id +
                    ((tA === null || tA === void 0 ? void 0 : tA.receive) ? 1000 : 1) +
                    ((tA === null || tA === void 0 ? void 0 : tA.times) >= a.times ? 100 : 1000) -
                    (b.id + ((tB === null || tB === void 0 ? void 0 : tB.receive) ? 1000 : 1) + ((tB === null || tB === void 0 ? void 0 : tB.times) >= b.times ? 100 : 1000)));
            });
            this.taskList.array = list;
        }
        itemRender(cell, i) {
            let obj = TaskService$1.list[i].base;
            const task = TaskService$1.getTask(obj.id);
            cell.getChildByName("icon").skin = obj.icon;
            cell.getChildByName("title").text = obj.title;
            cell.getChildByName("desc").text = `${obj.desc}(${((task === null || task === void 0 ? void 0 : task.times) > obj.times ? obj.times : task === null || task === void 0 ? void 0 : task.times) || 0}/${obj.times})`;
            const rewardBox = cell.getChildByName("reward");
            rewardBox.getChildByName("icon").skin = obj.reward.obj.icon;
            rewardBox.getChildByName("amount").text = "x" + obj.reward.count;
            const btn = cell.getChildByName("go_run");
            const btnObj = {
                id: obj.id,
                ok: false,
            };
            if (task === null || task === void 0 ? void 0 : task.receive) {
                btn.skin = "game/img_tomarow.png";
                btn.active = false;
                btn.disabled = true;
            }
            else {
                btn.active = true;
                btn.disabled = false;
                if ((task === null || task === void 0 ? void 0 : task.times) >= obj.times) {
                    btn.skin = "game/img_get.png";
                    btnObj.ok = true;
                }
                else {
                    btn.skin = "game/img_done.png";
                }
            }
            btn.dataSource = btnObj;
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    ViewManager.inst.close(Res.views.TaskView);
                    break;
                case "go_run":
                    let btnObj = e.target["dataSource"];
                    if (btnObj.ok) {
                        HttpControl.inst.send({
                            api: "/task/reward",
                            data: { type: ConfigGame.ApiTypeAD, taskId: btnObj.id },
                            call: (d) => {
                                const task = TaskService$1.getTask(btnObj.id);
                                task.receive = 1;
                                btnObj.ok = false;
                                Laya.timer.frameOnce(1, this, () => {
                                    this.updateTaskList();
                                    this.taskList.refresh();
                                });
                                Core.eventGlobal.event("play_get_reward", {
                                    node: e.target,
                                    list: [
                                        {
                                            obj: task.base.reward.obj,
                                            count: task.base.reward.count,
                                            posType: 2,
                                        },
                                    ],
                                });
                            },
                        });
                    }
                    else {
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
                    Core.view.close(Res.views.TaskView);
                    Core.view.open(Res.views.WarehouseView);
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
    }

    class WarehouseView extends Core.gameScript {
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
            WarehouseService$1.list.forEach((d) => {
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
                    }
                    else {
                        if (icon.y != 56)
                            Laya.Tween.to(icon, { y: 56 }, 150);
                    }
                }
                else {
                    item.visible = false;
                }
            }
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.WarehouseView);
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
                        api: "/warehouse/sell",
                        data: {
                            id: this.selectItemData.base.id,
                            amount: this.selectItemSellCount,
                            type: e.target.name == "sellBtn"
                                ? ConfigGame.ApiTypeDefault
                                : ConfigGame.ApiTypeAD,
                        },
                        call: (d) => {
                            WarehouseService$1.reduceAmount(this.selectItemData.base.id, this.selectItemSellCount);
                            this.dataList = [];
                            this.updateList();
                            this.itemList.refresh();
                            if (!this.dataList.length) {
                                this.updateDesc(null);
                            }
                            let rewardList = [];
                            if (this.unitPriceGold) {
                                rewardList.push({
                                    obj: TableAnalyze.table("currency").get(ConfigGame.goldId),
                                    count: this.selectItemSellCount *
                                        this.unitPriceGold *
                                        (e.target.name == "sellBtnAd" ? 2 : 1),
                                    posType: 1,
                                });
                            }
                            if (this.unitPriceDiamond) {
                                rewardList.push({
                                    obj: TableAnalyze.table("currency").get(ConfigGame.diamondId),
                                    count: this.selectItemSellCount *
                                        this.unitPriceDiamond *
                                        (e.target.name == "sellBtnAd" ? 2 : 1),
                                    posType: 2,
                                });
                            }
                            Core.eventGlobal.event("play_get_reward", {
                                node: this.sellBtn,
                                list: rewardList,
                                callBack: () => { },
                            });
                        },
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
                if (d.base.gain[x].obj.id == ConfigGame.goldId) {
                    priceGold = d.base.gain[x];
                    this.itemSellGold.getChildByName("icon").skin =
                        d.base.gain[x].obj.icon;
                    this.itemSellBox.addChild(this.itemSellGold);
                }
                else {
                    priceDiamond = d.base.gain[x];
                    this.itemSellDiamond.getChildByName("icon").skin =
                        d.base.gain[x].obj.icon;
                    this.itemSellBox.addChild(this.itemSellDiamond);
                }
            }
            this.selectItemSellCount = Math.ceil(d.count / 2);
            this.unitPriceGold = (priceGold === null || priceGold === void 0 ? void 0 : priceGold.count) || 0;
            this.unitPriceDiamond = (priceDiamond === null || priceDiamond === void 0 ? void 0 : priceDiamond.count) || 0;
            this.updateSelectSellCount();
        }
        updateSelectSellCount() {
            this.itemSellCountLb.text = this.selectItemSellCount + "";
            this.itemSellGold.getChildByName("price").text =
                this.selectItemSellCount * this.unitPriceGold + "";
            this.itemSellDiamond.getChildByName("price").text =
                this.selectItemSellCount * this.unitPriceDiamond + "";
        }
    }

    class GameConfig {
        constructor() { }
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
            reg("view/SettingView.ts", SettingView);
            reg("view/ShopView.ts", ShopView);
            reg("view/SignInView.ts", SignInView);
            reg("view/SpeedUpView.ts", SpeedUpView);
            reg("view/TaskView.ts", TaskView);
            reg("view/WarehouseView.ts", WarehouseView);
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
            Laya.ResourceVersion.enable("version-2b1a4ecf33.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            return __awaiter(this, void 0, void 0, function* () {
                Config["customRenderID"] = [];
                LocalStorageService$1.init();
                HttpControl.inst.init(ConfigGame.baseUrl);
                Core.eventGlobal.on("login_game", this, this.loginGame);
                Laya.SoundManager.useAudioMusic = false;
                yield new Promise((resolve) => {
                    ViewManager.inst.open(Res.views.LoginView, {
                        showLoad: false,
                        parm: {
                            call: (d) => {
                                resolve(null);
                                this.initGameData(d);
                            },
                        },
                        complete: (e) => {
                        },
                    });
                });
                this.loginGame();
            });
        }
        loginGame() {
            Laya.loader.load(Res.scenes, Laya.Handler.create(this, () => {
                console.log("ok");
                Laya.timer.frameOnce(1, this, () => {
                    Laya.View.hideLoadingPage(1000);
                    ViewManager.inst.open(GameConfig.startScene);
                });
            }), Laya.Handler.create(this, (e) => {
                EventGlobal.event("load_progress", e);
            }, null, false));
        }
        initGameData(d) { }
    }
    Main.customRenderID = [];
    new Main();

}());
