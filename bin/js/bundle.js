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
        views["AboutView"] = "scenes/views/AboutView.scene";
        views["AddLandView"] = "scenes/views/AddLandView.scene";
        views["BuyVitalityView"] = "scenes/views/BuyVitalityView.scene";
        views["FieldLevelUpView"] = "scenes/views/FieldLevelUpView.scene";
        views["FriendsDescView"] = "scenes/views/FriendsDescView.scene";
        views["FriendsRewardView"] = "scenes/views/FriendsRewardView.scene";
        views["FriendsView"] = "scenes/views/FriendsView.scene";
        views["GatherDescView"] = "scenes/views/GatherDescView.scene";
        views["HintView"] = "scenes/views/HintView.scene";
        views["LoginView"] = "scenes/views/LoginView.scene";
        views["MailDescView"] = "scenes/views/MailDescView.scene";
        views["MailView"] = "scenes/views/MailView.scene";
        views["MainView"] = "scenes/views/MainView.scene";
        views["OrderView"] = "scenes/views/OrderView.scene";
        views["OverView"] = "scenes/views/OverView.scene";
        views["SettingView"] = "scenes/views/SettingView.scene";
        views["ShopView"] = "scenes/views/ShopView.scene";
        views["SignInDescView"] = "scenes/views/SignInDescView.scene";
        views["SignInView"] = "scenes/views/SignInView.scene";
        views["SpeedUpView"] = "scenes/views/SpeedUpView.scene";
        views["TaskView"] = "scenes/views/TaskView.scene";
        views["WarehouseView"] = "scenes/views/WarehouseView.scene";
        views["WithdrawRecordView"] = "scenes/views/WithdrawRecordView.scene";
    })(views || (views = {}));
    var audios;
    (function (audios) {
        audios["zhongzhi"] = "res/audio/zhongzhi.mp3";
        audios["tudishengji"] = "res/audio/tudishengji.mp3";
        audios["shoucai"] = "res/audio/shoucai.mp3";
        audios["goujiaosheng"] = "res/audio/goujiaosheng.mp3";
        audios["dakaicangku"] = "res/audio/dakaicangku.mp3";
        audios["button_click"] = "res/audio/button_click.mp3";
        audios["BGM"] = "res/audio/BGM.mp3";
    })(audios || (audios = {}));
    const scenes = [
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
        setOverView(open, call) {
            if (open) {
                this.open(Res.views.OverView, {
                    parm: {
                        call: (v) => {
                            this.overViewCom = v;
                            v.close(call);
                        },
                    },
                });
            }
            else {
                if (this.overViewCom) {
                    this.overViewCom.open(call);
                }
            }
        }
    }
    __decorate([
        Instance,
        __metadata("design:type", ViewManager)
    ], ViewManager, "inst", void 0);

    console.log(BUILD_TYPE);
    let baseUrl = "http://game-s.ahd168.com/farm/dev";
    switch (BUILD_TYPE) {
        case "debug":
            baseUrl = "//192.168.101.6:3000";
            break;
        case "online":
            baseUrl = "http://game-s.ahd168.com/farm/release";
            break;
    }
    var ConfigGame = {
        diamondId: 1001,
        goldId: 1002,
        petDigestIntervalTime: 60 * 3600,
        localKey: "love_HD_farm",
        userVitalityLimit: 10,
        baseUrl: baseUrl,
        ApiTypeDefault: 1,
        ApiTypeAD: 2,
        ADSpeedUpTimes: 6,
        version: "1.0.0",
        channel: "",
    };

    const EventMap = new Map();
    class AppCore {
        static runAppFunction(data) {
            return new Promise((resolve, reject) => {
                if (Laya.Browser.onIOS) {
                    if (window["webRequest"]) {
                        window["webRequest"].postMessage(JSON.stringify(data));
                        if (data.timestamp) {
                            EventMap.set(data.timestamp, resolve);
                        }
                    }
                    else {
                        resolve(null);
                    }
                }
                else {
                    if (window["$App"] && window["$App"]["webRequest"]) {
                        window["$App"]["webRequest"](JSON.stringify(data));
                        if (data.timestamp) {
                            EventMap.set(data.timestamp, resolve);
                        }
                    }
                    else {
                        resolve(null);
                    }
                }
            });
        }
        static listenAppFunction() {
            window["appResponse"] = (d) => {
                if (EventMap.has(d === null || d === void 0 ? void 0 : d.timestamp)) {
                    EventMap.get(d.timestamp)(d);
                }
                console.log(d);
            };
        }
    }
    AppCore.typeIos = 1;
    AppCore.typeAndroid = 2;

    class AudioControl {
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

    class AboutView extends Core.gameScript {
        constructor() {
            super(...arguments);
            this.version = null;
            this.channel = null;
        }
        onOpened() {
            this.version.text = `版本号：V${ConfigGame.version}`;
            this.channel.text = `渠道号：${ConfigGame.channel}`;
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.AboutView);
                    break;
                case "user_agreement":
                    AppCore.runAppFunction({ uri: "serviceAgreement", data: {} });
                    break;
                case "privacy":
                    AppCore.runAppFunction({ uri: "privacyAgreement", data: {} });
                    break;
            }
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

    const LocalData = {
        isLogin: false,
        token: null,
        sound: false,
        music: false,
        version: "0.0.0",
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
            Laya.LocalStorage.setJSON(ConfigGame.localKey, { version: this.localData.version });
            this.localData = {
                isLogin: false,
                token: null,
                sound: true,
                music: true,
                version: this.localData.version,
            };
        }
    }
    var LocalStorageService$1 = new LocalStorageService();

    const Table = { "task": [{ "id": 1001, "reward": "1001:50", "times": 1, "title": "签到领钻石", "desc": "看视频签到", "icon": null }, { "id": 1002, "reward": "1001:100", "times": 10, "title": "菜地施肥10次", "desc": "菜地加速10次", "icon": null }, { "id": 1003, "reward": "1001:50", "times": 10, "title": "菜地收获10次", "desc": "菜地收获10次", "icon": null }, { "id": 1004, "reward": "1001:50", "times": 5, "title": "偷菜5次", "desc": "偷菜5次", "icon": null }, { "id": 1005, "reward": "1002:200", "times": 3, "title": "喂养狗狗3次", "desc": "喂养狗狗3次", "icon": null }, { "id": 1013, "reward": "1001:50", "times": 5, "title": "邀请好友", "desc": "邀请5个好友", "icon": null }, { "id": 1007, "reward": "1001:20", "times": 10, "title": "购买种子10次", "desc": "购买种子10次", "icon": null }, { "id": 1008, "reward": "1002:500", "times": 3, "title": "出售作物3次", "desc": "出售作物3次", "icon": null }, { "id": 1009, "reward": "1001:100", "times": 5, "title": "添加好友", "desc": "添加好友5个", "icon": null }, { "id": 1010, "reward": "1001:100", "times": 10, "title": "分享得好礼", "desc": "分享10次", "icon": null }, { "id": 1011, "reward": "1002:500", "times": 3, "title": "任意种植", "desc": "任意种植3次", "icon": null }, { "id": 1012, "reward": "1001:50", "times": 5, "title": "看视频领福利", "desc": "看视频5次", "icon": null }], "signIn": [{ "id": 1001, "days": 7, "reward": "1001:20000" }, { "id": 1002, "days": 10, "reward": "1001:30000" }, { "id": 1003, "days": 15, "reward": "1001:50000" }, { "id": 1004, "days": 20, "reward": "1001:80000" }, { "id": 1005, "days": 30, "reward": "1001:120000" }, { "id": 1006, "days": 50, "reward": "1001:180000" }, { "id": 1007, "days": 80, "reward": "1001:300000" }, { "id": 1008, "days": 100, "reward": "1001:350000" }, { "id": 1009, "days": 150, "reward": "1001:500000" }], "plant": [{ "id": 1001, "name": "水稻", "icon": "plant_icon/1002_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "种下一粒种子，收获整个世界" }, { "id": 1002, "name": "大豆", "icon": "plant_icon/1004_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "180", "unlock_cost": null, "unlock_reward": null, "desc": "种下一粒种子，收获整个世界" }, { "id": 1003, "name": "大蒜", "icon": "plant_icon/1012_seed.png", "seed_price": "1002:50", "gain": "1001:0,1002:50", "harvest": "1~2", "mature_time": "240", "unlock_cost": null, "unlock_reward": null, "desc": "种下一粒种子，收获整个世界" }, { "id": 1004, "name": "包心菜", "icon": "plant_icon/1006_seed.png", "seed_price": "1002:75", "gain": "1001:1,1002:75", "harvest": "1~2", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }, { "id": 1005, "name": "土豆", "icon": "plant_icon/1007_seed.png", "seed_price": "1002:75", "gain": "1001:1,1002:75", "harvest": "2~3", "mature_time": "300", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }, { "id": 1006, "name": "萝卜", "icon": "plant_icon/1005_seed.png", "seed_price": "1002:75", "gain": "1001:1,1002:75", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1000", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }, { "id": 1007, "name": "小麦", "icon": "plant_icon/1001_seed.png", "seed_price": "1002:120", "gain": "1001:3,1002:120", "harvest": "2~3", "mature_time": "480", "unlock_cost": "1002:1500", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }, { "id": 1008, "name": "辣椒", "icon": "plant_icon/1010_seed.png", "seed_price": "1002:120", "gain": "1001:3,1002:120", "harvest": "2~3", "mature_time": "600", "unlock_cost": "1002:2000", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }, { "id": 1009, "name": "黄瓜", "icon": "plant_icon/1011_seed.png", "seed_price": "1002:200", "gain": "1001:5,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3000", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }, { "id": 1010, "name": "茄子", "icon": "plant_icon/1013_seed.png", "seed_price": "1002:200", "gain": "1001:5,1002:200", "harvest": "3~4", "mature_time": "720", "unlock_cost": "1002:3500", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }, { "id": 1011, "name": "胡萝卜", "icon": "plant_icon/1008_seed.png", "seed_price": "1002:350", "gain": "1001:7,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:4500", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }, { "id": 1012, "name": "南瓜", "icon": "plant_icon/1014_seed.png", "seed_price": "1002:350", "gain": "1001:7,1002:350", "harvest": "3~4", "mature_time": "900", "unlock_cost": "1002:5000", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }, { "id": 1013, "name": "玉米", "icon": "plant_icon/1003_seed.png", "seed_price": "1002:500", "gain": "1001:10,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:5500", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }, { "id": 1014, "name": "甘蔗", "icon": "plant_icon/1015_seed.png", "seed_price": "1002:500", "gain": "1001:10,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6000", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }, { "id": 1015, "name": "番茄", "icon": "plant_icon/1009_seed.png", "seed_price": "1002:500", "gain": "1001:10,1002:500", "harvest": "3~5", "mature_time": "1200", "unlock_cost": "1002:6500", "unlock_reward": "1001:0,1002:0", "desc": "种下一粒种子，收获整个世界" }], "pet": [{ "id": 1001, "name": "旺财", "icon": "pet_feed/1001_dog.png", "vitality_max": 100, "vitality_consume": 10, "cost": "1002:3000", "desc": "爱它就买它~它就是有点懒~", "sensitive": 30, "ability": 35 }, { "id": 1002, "name": "汤圆", "icon": "pet_feed/1007_dog.png", "vitality_max": 100, "vitality_consume": 15, "cost": "1002:4000", "desc": "颜值、智商双双在线", "sensitive": 35, "ability": 35 }, { "id": 1003, "name": "肉干", "icon": "pet_feed/1009_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:4500", "desc": "最忠诚的伙伴", "sensitive": 40, "ability": 40 }, { "id": 1004, "name": "二哈", "icon": "pet_feed/1002_dog.png", "vitality_max": 100, "vitality_consume": 16, "cost": "1002:5000", "desc": "绝不拆家！", "sensitive": 45, "ability": 45 }, { "id": 1005, "name": "大眼睛", "icon": "pet_feed/1005_dog.png", "vitality_max": 100, "vitality_consume": 17, "cost": "1002:7000", "desc": "活好吃的少", "sensitive": 50, "ability": 50 }, { "id": 1006, "name": "小尾巴", "icon": "pet_feed/1004_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:7500", "desc": "武力天赋已点满~拿捏！", "sensitive": 50, "ability": 55 }, { "id": 1007, "name": "球球", "icon": "pet_feed/1008_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "就两个字，听话！", "sensitive": 53, "ability": 60 }, { "id": 1008, "name": "小白", "icon": "pet_feed/1003_dog.png", "vitality_max": 100, "vitality_consume": 18, "cost": "1002:8000", "desc": "看家、看菜、看孩子", "sensitive": 58, "ability": 65 }, { "id": 1009, "name": "点点", "icon": "pet_feed/1006_dog.png", "vitality_max": 100, "vitality_consume": 19, "cost": "1002:10000", "desc": "你值得拥有！", "sensitive": 60, "ability": 70 }, { "id": 1010, "name": "闷墩", "icon": "pet_feed/1010_dog.png", "vitality_max": 100, "vitality_consume": 30, "cost": "1002:15000", "desc": "长得就很凶，抓小偷更凶", "sensitive": 65, "ability": 80 }], "order": [{ "id": 1, "commission": "1.12", "condition": "1001:2", "extra_reward": "1001:80" }, { "id": 2, "commission": "0.87", "condition": "1001:1,1002:2", "extra_reward": "1001:80" }, { "id": 3, "commission": "0.69", "condition": "1001:1,1003:2,1002:3", "extra_reward": "1001:80" }, { "id": 4, "commission": "0.61", "condition": "1002:4,1003:3,1004:3,1001:4", "extra_reward": "1001:80" }, { "id": 5, "commission": "0.61", "condition": "1004:6,1002:5,1005:4,1001:5", "extra_reward": "1001:80" }, { "id": 6, "commission": "0.68", "condition": "1003:10,1004:5,1005:3,1006:3", "extra_reward": "1001:80" }, { "id": 7, "commission": "0.43", "condition": "1007:4,1003:5,1004:7,1006:10", "extra_reward": "1001:80" }, { "id": 8, "commission": "0.56", "condition": "1008:13,1007:3,1005:5,1002:5", "extra_reward": "1001:80" }, { "id": 9, "commission": "0.39", "condition": "1006:2,1009:10,1007:8,1003:8", "extra_reward": "1001:80" }, { "id": 10, "commission": "0.22", "condition": "1006:10,1010:5,1008:10,1009:6", "extra_reward": "1001:80" }, { "id": 11, "commission": "0.76", "condition": "1009:5,1004:10,1001:9,1002:10", "extra_reward": "1001:100" }, { "id": 12, "commission": "0.43", "condition": "1007:6,1003:11,1011:6,1005:10", "extra_reward": "1001:100" }, { "id": 13, "commission": "0.17", "condition": "1010:5,1005:13,1001:8,1012:8", "extra_reward": "1001:100" }, { "id": 14, "commission": "0.55", "condition": "1013:10,1008:8,1006:6,1001:10", "extra_reward": "1001:100" }, { "id": 15, "commission": "0.48", "condition": "1002:10,1005:10,1011:12,1001:10", "extra_reward": "1001:100" }, { "id": 16, "commission": 0.29, "condition": "1008:11,1014:4,1006:8,1005:17", "extra_reward": "1001:100" }, { "id": 17, "commission": 0.37, "condition": "1006:14,1007:6,1015:12,1001:14", "extra_reward": "1001:100" }, { "id": 18, "commission": 0.48, "condition": "1008:14,1011:12,1009:15,1002:5", "extra_reward": "1001:100" }, { "id": 19, "commission": 0.75, "condition": "1013:10,1003:20,1014:11,1001:7", "extra_reward": "1001:100" }, { "id": 20, "commission": 0.67, "condition": "1003:10,1011:17,1002:14,1005:12", "extra_reward": "1001:100" }, { "id": 21, "commission": 0.64, "condition": "1010:10,1003:14,1005:16,1007:15", "extra_reward": "1001:120" }, { "id": 22, "commission": "0.4", "condition": "1015:19,1007:12,1011:5,1004:17", "extra_reward": "1001:120" }, { "id": 23, "commission": "0.4", "condition": "1003:19,1014:22,1015:16,1008:14", "extra_reward": "1001:120" }, { "id": 24, "commission": 0.77, "condition": "1014:13,1001:17,1008:18,1004:15", "extra_reward": "1001:120" }, { "id": 25, "commission": "0.39", "condition": "1012:23,1011:19,1010:15,1015:20", "extra_reward": "1001:120" }, { "id": 26, "commission": 0.03, "condition": "1002:21,1011:12,1012:22,1003:19", "extra_reward": "1001:120" }, { "id": 27, "commission": 0.49, "condition": "1007:16,1014:16,1006:20,1011:17", "extra_reward": "1001:120" }, { "id": 28, "commission": 0.53, "condition": "1014:17,1007:12,1011:17,1003:17", "extra_reward": "1001:120" }, { "id": 29, "commission": 0.77, "condition": "1012:10,1005:16,1010:14,1015:18", "extra_reward": "1001:120" }, { "id": 30, "commission": "0.34", "condition": "1011:17,1014:19,1006:14,1004:30", "extra_reward": "1001:120" }, { "id": 31, "commission": 0.53, "condition": "1007:18,1010:14,1013:19,1006:11", "extra_reward": "1001:150" }, { "id": 32, "commission": 0.46, "condition": "1013:19,1005:22,1012:12,1008:20", "extra_reward": "1001:150" }, { "id": 33, "commission": "0.44", "condition": "1012:16,1013:20,1002:23,1009:16", "extra_reward": "1001:150" }, { "id": 34, "commission": "0.42", "condition": "1009:19,1010:12,1011:14,1012:20", "extra_reward": "1001:150" }, { "id": 35, "commission": "0.33", "condition": "1001:18,1004:19,1013:16,1003:20", "extra_reward": "1001:150" }, { "id": 36, "commission": 0.21, "condition": "1003:11,1008:17,1014:17,1007:19", "extra_reward": "1001:150" }, { "id": 37, "commission": 0.44, "condition": "1012:19,1010:20,1002:14,1011:11", "extra_reward": "1001:150" }, { "id": 38, "commission": 0.22, "condition": "1014:13,1004:19,1002:11,1015:18", "extra_reward": "1001:150" }, { "id": 39, "commission": 0.36, "condition": "1007:18,1012:13,1004:16,1002:26", "extra_reward": "1001:150" }, { "id": 40, "commission": 0.28, "condition": "1004:30,1005:10,1008:18,1011:16", "extra_reward": "1001:150" }, { "id": 41, "commission": "0.48", "condition": "1010:18,1009:18,1008:17,1011:26", "extra_reward": "1001:500" }, { "id": 42, "commission": 0.43, "condition": "1009:21,1005:18,1007:20,1002:23", "extra_reward": "1001:800" }, { "id": 43, "commission": "0.24", "condition": "1006:30,1004:14,1014:11,1008:15", "extra_reward": "1001:1000" }, { "id": 44, "commission": 0.62, "condition": "1009:15,1003:28,1002:34,1007:19", "extra_reward": "1001:1600" }, { "id": 45, "commission": "0.41", "condition": "1012:15,1010:23,1007:13,1011:13", "extra_reward": "1001:2200" }, { "id": 46, "commission": 0.39, "condition": "1003:22,1007:23,1010:16,1002:24", "extra_reward": "1001:2800" }, { "id": 47, "commission": 0.49, "condition": "1010:24,1015:20,1003:25,1014:16", "extra_reward": "1001:3400" }, { "id": 48, "commission": "0.26", "condition": "1013:17,1007:24,1008:37,1001:30", "extra_reward": "1001:4000" }, { "id": 49, "commission": 0.48, "condition": "1002:26,1004:21,1009:22,1006:20", "extra_reward": "1001:4600" }, { "id": 50, "commission": "0.25", "condition": "1006:27,1012:19,1008:20,1015:11", "extra_reward": "1001:5200" }, { "id": 51, "commission": "0.34", "condition": "1011:18,1004:19,1002:25,1003:11", "extra_reward": "1001:5800" }, { "id": 52, "commission": 0.43, "condition": "1015:15,1013:20,1001:25,1004:26", "extra_reward": "1001:6400" }, { "id": 53, "commission": "0.28", "condition": "1014:14,1012:12,1010:20,1015:18", "extra_reward": "1001:7000" }, { "id": 54, "commission": 0.45, "condition": "1005:22,1002:33,1009:16,1015:17", "extra_reward": "1001:7600" }, { "id": 55, "commission": "0.56", "condition": "1001:23,1014:19,1005:17,1010:15", "extra_reward": "1001:8200" }, { "id": 56, "commission": "0.35", "condition": "1006:27,1005:29,1009:17,1003:18", "extra_reward": "1001:8800" }, { "id": 57, "commission": 0.67, "condition": "1007:21,1008:17,1002:16,1009:25", "extra_reward": "1001:9400" }, { "id": 58, "commission": 0.32, "condition": "1006:20,1008:25,1005:24,1007:19", "extra_reward": "1001:10000" }, { "id": 59, "commission": 0.79, "condition": "1012:25,1009:30,1013:16,1008:15", "extra_reward": "1001:10600" }, { "id": 60, "commission": 0.69, "condition": "1015:26,1012:27,1010:31,1001:23", "extra_reward": "1001:11200" }, { "id": 61, "commission": 0.39, "condition": "1015:12,1006:25,1011:15,1002:17", "extra_reward": "1001:11800" }, { "id": 62, "commission": 0.44, "condition": "1015:21,1007:15,1011:18,1006:26", "extra_reward": "1001:12400" }, { "id": 63, "commission": 0.01, "condition": "1010:18,1005:16,1009:13,1003:27", "extra_reward": "1001:13000" }, { "id": 64, "commission": 0.27, "condition": "1007:17,1006:10,1005:29,1004:25", "extra_reward": "1001:13600" }, { "id": 65, "commission": 0.39, "condition": "1008:15,1003:30,1014:20,1005:15", "extra_reward": "1001:14200" }, { "id": 66, "commission": 0.73, "condition": "1004:25,1008:25,1002:34,1012:14", "extra_reward": "1001:14800" }, { "id": 67, "commission": 0.13, "condition": "1001:36,1012:20,1011:20,1003:20", "extra_reward": "1001:15400" }, { "id": 68, "commission": 0.69, "condition": "1013:24,1008:23,1006:16,1007:17", "extra_reward": "1001:16000" }, { "id": 69, "commission": 0.37, "condition": "1015:30,1004:29,1013:17,1009:10", "extra_reward": "1001:16600" }, { "id": 70, "commission": 0.71, "condition": "1010:23,1004:31,1011:17,1012:11", "extra_reward": "1001:17200" }, { "id": 71, "commission": 0.29, "condition": "1008:11,1002:26,1003:28,1015:13", "extra_reward": "1001:17800" }, { "id": 72, "commission": 0.31, "condition": "1005:25,1002:38,1012:19,1010:14", "extra_reward": "1001:18400" }, { "id": 73, "commission": 0.39, "condition": "1012:34,1006:22,1003:27,1004:20", "extra_reward": "1001:19000" }, { "id": 74, "commission": 0.26, "condition": "1003:20,1012:18,1002:30,1001:20", "extra_reward": "1001:19600" }, { "id": 75, "commission": 0.18, "condition": "1006:31,1014:30,1008:12,1002:25", "extra_reward": "1001:20200" }, { "id": 76, "commission": 0.51, "condition": "1007:21,1012:20,1004:11,1014:20", "extra_reward": "1001:20800" }, { "id": 77, "commission": 0.21, "condition": "1008:15,1009:16,1012:24,1007:30", "extra_reward": "1001:21400" }, { "id": 78, "commission": 0.73, "condition": "1015:16,1012:16,1006:20,1008:22", "extra_reward": "1001:22000" }, { "id": 79, "commission": 0.65, "condition": "1006:26,1004:18,1007:12,1011:27", "extra_reward": "1001:22600" }, { "id": 80, "commission": 0.39, "condition": "1009:15,1003:16,1004:19,1007:24", "extra_reward": "1001:23200" }, { "id": 81, "commission": 0.14, "condition": "1012:20,1015:28,1002:24,1003:38", "extra_reward": "1001:23800" }, { "id": 82, "commission": 0.2, "condition": "1005:12,1011:19,1009:18,1002:14", "extra_reward": "1001:24400" }, { "id": 83, "commission": 0.53, "condition": "1010:19,1003:38,1007:22,1015:20", "extra_reward": "1001:25000" }, { "id": 84, "commission": 0.62, "condition": "1005:29,1014:26,1002:18,1007:38", "extra_reward": "1001:25600" }, { "id": 85, "commission": 0.37, "condition": "1011:20,1001:17,1012:12,1004:32", "extra_reward": "1001:26200" }, { "id": 86, "commission": 0.59, "condition": "1009:25,1011:20,1006:14,1015:21", "extra_reward": "1001:26800" }, { "id": 87, "commission": "0.31", "condition": "1006:26,1005:19,1013:20,1014:29", "extra_reward": "1001:27400" }, { "id": 88, "commission": "0.48", "condition": "1008:37,1011:24,1015:12,1014:11", "extra_reward": "1001:28000" }, { "id": 89, "commission": "0.22", "condition": "1002:17,1003:28,1005:22,1010:31", "extra_reward": "1001:28600" }, { "id": 90, "commission": 0.32, "condition": "1002:39,1013:28,1007:25,1001:33", "extra_reward": "1001:29200" }, { "id": 91, "commission": 0.19, "condition": "1008:15,1013:20,1014:10,1007:26", "extra_reward": "1001:29800" }, { "id": 92, "commission": 0.13, "condition": "1004:38,1011:13,1008:15,1007:29", "extra_reward": "1001:30400" }, { "id": 93, "commission": 0.34, "condition": "1013:12,1001:39,1006:38,1008:31", "extra_reward": "1001:31000" }, { "id": 94, "commission": 0.22, "condition": "1002:36,1014:27,1013:16,1005:31", "extra_reward": "1001:31600" }, { "id": 95, "commission": 0.15, "condition": "1005:26,1011:34,1015:34,1008:16", "extra_reward": "1001:32200" }, { "id": 96, "commission": "0.49", "condition": "1003:24,1001:34,1007:28,1005:30", "extra_reward": "1001:32800" }, { "id": 97, "commission": "0.6", "condition": "1013:32,1009:33,1006:30,1011:40", "extra_reward": "1001:33400" }, { "id": 98, "commission": "0.35", "condition": "1014:40,1009:43,1015:33,1012:45", "extra_reward": "1001:34000" }, { "id": 99, "commission": "0.44", "condition": "1011:39,1008:37,1009:30,1013:42", "extra_reward": "1001:34600" }, { "id": 100, "commission": "0.49", "condition": "1012:40,1010:33,1013:30,1011:40", "extra_reward": "1001:35200" }], "lang": [], "landLevel": [{ "id": 1, "reward": "1002:0", "cost": "1002:0", "gain": null, "probability": 0.1, "get_diamond": 1 }, { "id": 2, "reward": "1002:1500", "cost": "1002:5000", "gain": 0.1, "probability": 0.13, "get_diamond": 1 }, { "id": 3, "reward": "1002:2000", "cost": "1002:10000", "gain": 0.25, "probability": 0.25, "get_diamond": 2 }, { "id": 4, "reward": "1002:2500", "cost": "1002:20000", "gain": 0.4, "probability": 0.38, "get_diamond": 3 }, { "id": 5, "reward": "1002:3000", "cost": "1002:50000", "gain": 0.55, "probability": 0.5, "get_diamond": 5 }], "feed": [{ "id": 1001, "name": "饼干", "icon": "pet_feed/1001_feed.png", "vitality": 1, "cost": "1002:30", "desc": "可增加宠物&点体力" }, { "id": 1002, "name": "坚果", "icon": "pet_feed/1002_feed.png", "vitality": 2, "cost": "1002:50", "desc": "可增加宠物&点体力" }, { "id": 1003, "name": "火腿", "icon": "pet_feed/1003_feed.png", "vitality": 5, "cost": "1002:100", "desc": "可增加宠物&点体力" }, { "id": 1004, "name": "牛肉", "icon": "pet_feed/1004_feed.png", "vitality": 50, "cost": "1002:900", "desc": "可增加宠物&点体力" }, { "id": 1005, "name": "猪肉", "icon": "pet_feed/1005_feed.png", "vitality": 20, "cost": "1002:460", "desc": "可增加宠物&点体力" }, { "id": 1006, "name": "鸡肉", "icon": "pet_feed/1006_feed.png", "vitality": 10, "cost": "1002:270", "desc": "可增加宠物&点体力" }], "currency": [{ "id": 1001, "name": "钻石", "icon": "main_scene/img_diamond.png" }, { "id": 1002, "name": "金币", "icon": "main_scene/img_coin.png" }], "config": [{ "id": "all_speed_up_times", "value": 30 }, { "id": "all_speed_up_time", "value": 600 }, { "id": "unlock_land_cost", "value": "1002:0,1002:0,1002:5000,1002:10000,1002:20000,1002:30000,1002:40000,1002:50000,1002:60000" }, { "id": "goldDefault", "value": "1002:100" }, { "id": "diamondDefault", "value": "1001:50" }, { "id": "ADTimesLimit", "value": 50 }, { "id": "ADSpeedUptimes", "value": 6 }, { "id": "vitalityBuyCostGold", "value": "1002:10000" }, { "id": "vitalityLimit", "value": 3 }, { "id": "Initial_physical_strength", "value": 3 }, { "id": "landAmountMax", "value": 9 }, { "id": "petDefaultVitality", "value": 100 }, { "id": "petDigestIntervalTime", "value": 3600 }, { "id": "Videorewards", "value": "1001:450:600,1001:250:350,1001:200:300,1001:100:200,1001:80:100" }, { "id": "withdrawal", "value": "1001:10000:1" }, { "id": "Invitation_rewards", "value": "1001:5000" }, { "id": "withdrawal_times", "value": "0.3:1:0:0,5:1:6:30,10:1:15:60,50:1:50:80,100:1:100:90,200:0:200:97" }] };

    class Tools {
        static parseString(str, format = ",") {
            if (!str)
                return [];
            return str.split(format);
        }
        static formatMoney(num) {
            return num.toString().match(/^\d+(?:\.\d{0,2})?/);
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
                extraReward: getRewardCurrencyBase(d.extra_reward),
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
                probability: d.probability,
                getDiamond: d.get_diamond,
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
                case "goldDefault":
                    return {
                        id: "goldDefault",
                        value: getRewardCurrencyBase(d.value).count,
                    };
                case "diamondDefault":
                    return {
                        id: "diamondDefault",
                        value: getRewardCurrencyBase(d.value).count,
                    };
                case "ADTimesLimit":
                    return { id: "ADTimesLimit", value: d.value };
                case "ADSpeedUptimes":
                    return { id: "ADSpeedUptimes", value: d.value };
                case "vitalityBuyCostGold":
                    return {
                        id: "vitalityBuyCostGold",
                        value: getRewardCurrencyBase(d.value).count,
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
                    let v = d.value.split(",")[0].split(":");
                    return {
                        id: "Videorewards",
                        value: {
                            obj: TableAnalyze.table("currency").get(Number(v[0])),
                            count: Number(v[2]),
                        },
                    };
                case "withdrawal":
                    return { id: "withdrawal", value: Tools.parseString(d.value, ":") };
                case "Invitation_rewards":
                    return {
                        id: "Invitation_rewards",
                        value: getRewardCurrencyBase(d.value),
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
                                orderLv: Number(v[3]) || 0,
                            };
                        }),
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
                return (a.id +
                    ((tA === null || tA === void 0 ? void 0 : tA.receive) ? 1000 : 1) +
                    ((tA === null || tA === void 0 ? void 0 : tA.times) >= ((_a = a.base) === null || _a === void 0 ? void 0 : _a.times) ? 100 : 1000) -
                    (b.id + ((tB === null || tB === void 0 ? void 0 : tB.receive) ? 1000 : 1) + ((tB === null || tB === void 0 ? void 0 : tB.times) >= ((_b = b.base) === null || _b === void 0 ? void 0 : _b.times) ? 100 : 1000)));
            });
        }
        taskAddTimes(id) {
            let task = this.getTask(id);
            if (!task) {
                console.error(`任务id ${id} 未创建`);
                return;
            }
            task.times++;
            Core.eventGlobal.event("update_task");
            this.updateRedDot();
        }
        updateRedDot() {
            var _a;
            let hasReward = false;
            for (let x = 0; x < this.list.length; x++) {
                if (!this.list[x].receive &&
                    this.list[x].times >= ((_a = TableAnalyze.table("task").get(this.list[x].id)) === null || _a === void 0 ? void 0 : _a.times)) {
                    hasReward = true;
                    break;
                }
            }
            Core.eventGlobal.event("update_red_dot", ["task", hasReward]);
        }
        clear() {
            this.list.length = 0;
        }
    }
    var TaskService$1 = new TaskService();

    class UserInfo {
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
            this.proportion = 0.0001;
            this.guideData = [];
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
    }
    var UserInfo$1 = new UserInfo();

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

    class WarehouseService {
        constructor() {
            this.list = [];
        }
        init(data) {
            data.forEach((d) => {
                if (!TableAnalyze.table("plant").get(d.id)) {
                    return console.error("错误的id " + d.id);
                }
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
            if (!TableAnalyze.table("plant").get(id)) {
                console.warn("错误的id " + id);
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

    class HeartbeatControl {
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
            }, this.intervalTime * 1000);
        }
        updateMsg() {
            return __awaiter(this, void 0, void 0, function* () {
                let d = yield HttpControl.inst
                    .send({
                    api: "/mail/list",
                })
                    .catch(() => {
                    this.error();
                });
                let hasRed = false;
                for (let x = 0; x < d.length; x++) {
                    if (!d[x].read) {
                        hasRed = true;
                        break;
                    }
                }
                Core.eventGlobal.event("update_red_dot", ["mail", hasRed]);
                let friendData = yield HttpControl.inst
                    .send({
                    api: "/friend/list",
                })
                    .catch(() => {
                    this.error();
                });
                hasRed = false;
                for (let x = 0; x < friendData.list.length; x++) {
                    if (friendData.list[x].steal || friendData.list[x].applyIng) {
                        hasRed = true;
                        break;
                    }
                }
                Core.eventGlobal.event("update_red_dot", ["friend", hasRed]);
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
    }
    var Heartbeat = new HeartbeatControl();

    class HttpDataControl {
        forward(d) {
            switch (d.api) {
                case "/login":
                case "/login/token":
                    this.login(d.data);
                    break;
                case "/land/speedUp":
                    this.updateUserInfo(d.data);
                    this.taskUpdate(1002);
                    break;
                case "/ad":
                    this.updateUserInfo(d.data);
                    this.taskUpdate(1001);
                    break;
                case "/land/gather":
                    this.updateUserInfo(d.data);
                    this.taskUpdate(1003);
                    break;
                case "/feed/buy":
                    this.updateUserInfo(d.data);
                    this.taskUpdate(1005);
                    this.taskUpdate(1006);
                    break;
                case "/land/sow":
                    this.updateUserInfo(d.data);
                    this.taskUpdate(1007);
                    break;
                case "/warehouse/sell":
                    this.updateUserInfo(d.data);
                    this.taskUpdate(1008);
                    break;
                case "/land/steal":
                    this.updateUserInfo(d.data);
                    break;
                case "/seeds/unlock":
                case "/land/sow":
                case "/land/unlock":
                case "/pet/buy":
                case "/vitality/buy":
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
            Core.eventGlobal.event(d.api, d.data);
        }
        error(errorCode, data) {
            switch (errorCode) {
                case 401:
                    Core.view.openHint({
                        text: `登录已过期，请重新登录`,
                        call: () => { },
                    });
                    break;
                default:
                    Core.view.openHint({
                        text: `${data === null || data === void 0 ? void 0 : data.message} \n ${(data === null || data === void 0 ? void 0 : data.error) || ""}`,
                        call: () => { },
                    });
                    break;
            }
        }
        login(d) {
            var _a, _b, _c, _d;
            if (!d) {
                Core.view.openHint({ text: "登录错误,请重试", call: () => { } });
                return;
            }
            PlantService$1.init(d.seeds);
            WarehouseService$1.init(d.warehouse);
            UserInfo$1.key = d.userInfo.key;
            UserInfo$1.diamond = d.userInfo.diamond;
            UserInfo$1.gold = d.userInfo.gold;
            UserInfo$1.nickname = d.userInfo.nickname;
            UserInfo$1.avatar = d.userInfo.avatar;
            UserInfo$1.orderLevel = d.orderId || 0;
            UserInfo$1.warePetId = (_a = d.wearPet) === null || _a === void 0 ? void 0 : _a.id;
            UserInfo$1.petVitality = ((_b = d.wearPet) === null || _b === void 0 ? void 0 : _b.vitality) || 0;
            UserInfo$1.digestCountDown = ((_c = d.wearPet) === null || _c === void 0 ? void 0 : _c.digestCountDown) || 0;
            UserInfo$1.advertiseTimes = d.advertiseTimes || 0;
            UserInfo$1.signInDays = d.signInDays || 0;
            UserInfo$1.signInId = d.signInId;
            UserInfo$1.speedUpTimes = d.speedUpTimes;
            UserInfo$1.vitality = d.userInfo.vitality;
            UserInfo$1.invitePeople = d.userInfo.invitePeople;
            UserInfo$1.isFirstTime = d.userInfo.isFirstTime;
            UserInfo$1.guideData = ((_d = d.userInfo.guideData) === null || _d === void 0 ? void 0 : _d.split("")) || [];
            UserInfo$1.withdraw = d.withdraw;
            UserInfo$1.days = d.days + 1;
            UserInfo$1.adTimes = d.userInfo.adTimes;
            UserInfo$1.continuousAdTimes = d.userInfo.continuousAdTimes;
            UserInfo$1.isBindWx = d.userInfo.isBindWx;
            PetService$1.init(d.pets);
            TaskService$1.init(d.tasks);
            LocalStorageService$1.setJSON("isLogin", true);
            if (d.token)
                LocalStorageService$1.setJSON("token", d.token);
            LandService$1.init(d.lands);
            Core.audio.soundMuted = LocalStorageService$1.getJSON().sound;
            Core.audio.musicMuted = LocalStorageService$1.getJSON().music;
            Heartbeat.init();
        }
        loginOut() {
            Heartbeat.destroy();
            PlantService$1.clear();
            WarehouseService$1.clear();
            PetService$1.clear();
            LandService$1.clear();
            TaskService$1.clear();
            LocalStorageService$1.setJSON("isLogin", false);
            LocalStorageService$1.setJSON("token", null);
            UserInfo$1.key = null;
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
            UserInfo$1.vitality = 0;
            UserInfo$1.invitePeople = null;
            UserInfo$1.isFirstTime = null;
            UserInfo$1.withdraw = [];
            UserInfo$1.guideData = [];
            UserInfo$1.days = 0;
            UserInfo$1.adTimes = 0;
            UserInfo$1.continuousAdTimes = 0;
            UserInfo$1.isBindWx = 0;
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
                                    TaskService$1.taskAddTimes(1001);
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
                                    Core.view.openHint({
                                        text: `${xmlhttp.responseText} 请重试`,
                                        call: () => { },
                                    });
                                }
                                else {
                                    this.completeHandler(d, resolve, reject, xmlhttp);
                                }
                                this.clearOneInEventMap(xmlhttp);
                            }
                            if (!xmlhttp.status) {
                                this.completeHandler({
                                    code: 404,
                                    data: { message: "服务器未响应，请重试" },
                                    uri: "",
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
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
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
                if (((_a = data.data) === null || _a === void 0 ? void 0 : _a.type) == ConfigGame.ApiTypeAD && this.guideAd()) {
                    console.log("run ad");
                    const adData = yield AppCore.runAppFunction({
                        uri: "ad",
                        data: {},
                        timestamp: Date.now(),
                    });
                    if (adData === null || adData === void 0 ? void 0 : adData.code) {
                        Core.view.openHint({
                            text: `${adData.data["message"]}[${adData.code}]`,
                            call: () => { },
                        });
                        return new Promise((resolve, reject) => {
                            reject(null);
                        });
                    }
                    else {
                        ad = true;
                        UserInfo$1.adTimes++;
                        if (UserInfo$1.days > 1) {
                            if (adData === null || adData === void 0 ? void 0 : adData.data["hasClicked"]) {
                                UserInfo$1.continuousAdTimes = 0;
                            }
                            else {
                                UserInfo$1.continuousAdTimes++;
                            }
                            Laya.timer.once(100, this, () => {
                                HttpControl.inst.send({
                                    api: "/ad/record/not/click",
                                    data: { times: UserInfo$1.continuousAdTimes },
                                });
                            });
                        }
                    }
                }
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    const xhr = this.createXhr(resolve, reject, ad);
                    this.eventMap.set(uri + sendDataString, xhr);
                    this.sendData.push({ xhr: xhr, data: data });
                    if (data === null || data === void 0 ? void 0 : data.before) {
                        data.before();
                    }
                    if (!data.headers) {
                        data.headers = ["Authorization", `Bearer ${LocalStorageService$1.getJSON().token}`];
                    }
                    if (!data.api) {
                        Core.view.open(Res.views.HintView, {
                            parm: { text: `http 地址不能为空` },
                        });
                        return reject(null);
                    }
                    xhr.open("POST", uri, true);
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.setRequestHeader("Authorization", `Bearer ${LocalStorageService$1.getJSON().token}`);
                    this.xhrList.push({ xhr: xhr, data: sendDataString, sendData: data });
                    if (this.xhrList.length > 1) {
                        return;
                    }
                    this.queueXhrEvent(true);
                }));
            });
        }
        guideAd() {
            let step = 0;
            if (UserInfo$1.guideData.length) {
                UserInfo$1.guideData.forEach((d) => {
                    if (d == "1") {
                        step++;
                    }
                });
                if (step > 5) {
                    step = -1;
                }
            }
            switch (step) {
                case 1:
                case 5:
                    return false;
                default:
                    return true;
            }
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
                if (curData === null || curData === void 0 ? void 0 : curData.error) {
                    curData.error(e.code, e.data);
                }
                HttpDataControl$1.error(e.code, e.data);
                return console.error(e);
            }
            else {
                let api = curData.api;
                console.log(`%c <== back %c${api} `, `color:#b8e994;font-weight:700;`, `color:#78e08f;font-weight:700;`, e.data);
                if (e.code === 0) {
                    HttpDataControl$1.forward({
                        api: api,
                        data: e.data,
                        resolveEvent: resolve,
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
    }
    __decorate([
        Instance,
        __metadata("design:type", HttpControl)
    ], HttpControl, "inst", void 0);

    class AddLandView extends GameScript {
        constructor() {
            super(...arguments);
            this.costIcon = null;
            this.costFont = null;
            this.adBtn = null;
            this.canClick = true;
        }
        onOpened(d) {
            this.data = d;
            this.landData = TableAnalyze.table("config").get("unlock_land_cost").value[LandService$1.list.size];
            this.costIcon.skin = this.landData.obj.icon;
            this.costFont.value = this.landData.count + "";
            this.adBtn.disabled = !UserInfo$1.advertiseTimes;
            this.adBtn.active = Boolean(UserInfo$1.advertiseTimes);
            if (UserInfo$1.adTimes > 100 || UserInfo$1.continuousAdTimes > 20) {
                Laya.timer.once(300, this, () => {
                    AppCore.runAppFunction({
                        uri: "ad",
                        data: { adType: 2 },
                    });
                    AppCore.runAppFunction({
                        uri: "ad",
                        data: { adType: 3 },
                    });
                    AppCore.runAppFunction({
                        uri: "eventCount",
                        data: { type: "half_screen_advertisement" },
                    });
                    AppCore.runAppFunction({
                        uri: "eventCount",
                        data: { type: "bottom_advertisement" },
                    });
                });
            }
        }
        onHdAwake() {
            if (UserInfo$1.adTimes > 100 || UserInfo$1.continuousAdTimes > 20) {
                this.owner.getChildByName("center").centerY = -310;
            }
        }
        onClick(e) {
            switch (e.target.name) {
                case "closeAddLandLayer":
                    Core.view.close(Res.views.AddLandView);
                    break;
                case "cost_gold":
                    if (!this.canClick) {
                        return;
                    }
                    if (this.landData.obj.id == ConfigGame.goldId &&
                        this.landData.count > UserInfo$1.gold) {
                        Core.view.openHint({
                            text: "金币不足，去仓库出售蔬菜可以获得金币，偷菜获得的蔬菜也可以出售获得金币哦",
                            call: () => { },
                        });
                        return;
                    }
                    if (this.landData.obj.id == ConfigGame.diamondId &&
                        this.landData.count > UserInfo$1.diamond) {
                        Core.view.openHint({ text: "钻石不足", call: () => { } });
                        return;
                    }
                    this.canClick = false;
                    HttpControl.inst
                        .send({
                        api: "/land/unlock",
                        data: {
                            landId: this.data.id,
                            type: ConfigGame.ApiTypeDefault,
                        },
                    })
                        .then(() => {
                        var _a;
                        this.canClick = true;
                        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call) {
                            this.data.call();
                            Core.view.close(Res.views.AddLandView);
                        }
                    })
                        .catch(() => {
                        this.canClick = true;
                    });
                    break;
                case "ad_btn":
                    if (!this.canClick) {
                        return;
                    }
                    this.canClick = false;
                    HttpControl.inst
                        .send({
                        api: "/land/unlock",
                        data: {
                            landId: this.data.id,
                            type: ConfigGame.ApiTypeAD,
                        },
                    })
                        .then((d) => {
                        var _a;
                        this.canClick = true;
                        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call) {
                            this.data.call();
                            Core.view.close(Res.views.AddLandView);
                        }
                        Core.eventGlobal.event("play_ad_get_reward", [
                            e.target,
                            d.adReward,
                        ]);
                    })
                        .catch(() => {
                        this.canClick = true;
                    });
                    break;
            }
        }
        onHdDestroy() {
            AppCore.runAppFunction({
                uri: "closeAd",
                data: {},
            });
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
            if (data === null || data === void 0 ? void 0 : data.list) {
                this.landList = data.list;
            }
            else {
                this.landList = LandService$1.list;
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
                    this.matureTime = this.data.matureTimeLeft * 1000 + Date.now();
                    this.timeBox.visible = true;
                    this.timeBox.active = true;
                    this.icon.skin = TableAnalyze.table("plant").get(this.data.productId).growingIcon;
                    this.showShadowIcon(true);
                    this.updateCountDown();
                    if (this.isOuter) {
                        this.topStateIcon.visible = false;
                    }
                    else {
                        this.plantIconAni(true);
                    }
                }
                else {
                    if (this.data.productId) {
                        this.matureTime = Date.now();
                        this.topStateIcon.visible = true;
                        this.showShadowIcon(true);
                        this.updateCountDown();
                        this.setStateIconSkin(3);
                    }
                }
            }
            else {
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
                (_a = this.topStateIconTween) === null || _a === void 0 ? void 0 : _a.destroy();
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
            if (this.stealUid && !((_a = this.data) === null || _a === void 0 ? void 0 : _a.canSteal)) {
                play = false;
            }
            this.topStateIcon.visible = play;
            if (play) {
                this.topStateIconTween.resume();
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
                this.plantIconTween = Laya.TimeLine.to(this.icon, { skewX: 3 }, 1000)
                    .to(this.icon, { skewX: -3 }, 2000)
                    .to(this.icon, { skewX: 0 }, 1000);
                this.plantIconTween.play(null, true);
            }
            if (play) {
                Laya.timer.once(Math.random() * 1000, this, () => {
                    this.plantIconTween.resume();
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
                    this.data.matureTimeLeft = Math.ceil((this.matureTime - Date.now()) / 1000);
                    if (this.data.matureTimeLeft < 0)
                        this.data.matureTimeLeft = 0;
                    this.countDownLb.text = Tools.formatSeconds(this.data.matureTimeLeft);
                    return this.updateCountDown();
                });
            }
            else {
                this.data.matureTimeLeft = 0;
                this.matureTime = Date.now();
                console.log("成熟 ");
                this.icon.skin = (_b = TableAnalyze.table("plant").get((_a = this.data) === null || _a === void 0 ? void 0 : _a.productId)) === null || _b === void 0 ? void 0 : _b.matureIcon;
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
            if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.matureTimeLeft) {
                this.data.matureTimeLeft -= TableAnalyze.table("config").get("all_speed_up_time")
                    .value;
                this.matureTime = this.data.matureTimeLeft * 1000 + Date.now();
                this.updateCountDown();
                this.reduceTime.visible = true;
                this.reduceTime.alpha = 0;
                this.reduceTime.y = -39;
                if (!this.reduceTimeAni)
                    this.reduceTimeAni = Laya.TimeLine.to(this.reduceTime, { y: -69, alpha: 1 }, 300).to(this.reduceTime, {
                        y: -100,
                        alpha: 0,
                    }, 300, null, 1000);
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
            return __awaiter(this, void 0, void 0, function* () {
                Core.audio.playSound(Res.audios.button_click);
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
                        if (TableAnalyze.table("landLevel").get(this.data.level + 1)) {
                            Core.view.open(Res.views.FieldLevelUpView, {
                                parm: {
                                    obj: this.data,
                                    call: () => {
                                        this.data.level++;
                                        this.updateLevel();
                                        Core.audio.playSound(Res.audios.tudishengji);
                                        this.upAni.visible = true;
                                        this.upAni.play(0, false);
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
                            this.mainViewCom.hideGuideHand();
                            console.log("加速");
                            Core.view.open(Res.views.SpeedUpView, {
                                parm: {
                                    call: () => {
                                        this.mainViewCom.updateAllStateIcon();
                                    },
                                },
                            });
                            this.mainViewCom.updateAllStateIcon(this.data.id);
                            return;
                        }
                        else {
                            console.log("收获");
                            this.gather();
                        }
                    }
                    else {
                        this.sow();
                    }
                }
                else {
                    this.mainViewCom.hideGuideHand();
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
                                this.matureTime = Date.now();
                                LandService$1.addLand(this.data);
                                this.updateData();
                                this.mainViewCom.updateHitLandAdd();
                            },
                        },
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
                HttpControl.inst
                    .send({
                    api: "/land/gather",
                    data: {
                        landId: [this.data.id],
                        type: ConfigGame.ApiTypeDefault,
                    },
                })
                    .then((data) => {
                    let d = data.list[0];
                    resolve({ plantId: productId, amount: d.amount, diamond: rewardDiamond });
                    plantAmount = d.amount;
                    WarehouseService$1.add(productId, d.amount);
                    rewardDiamond = d.rewardDiamond;
                    this.canClick = true;
                    this.gatherEvent(productId, plantAmount, rewardDiamond);
                    Laya.timer.frameOnce(1, this, () => {
                        this.mainViewCom.updateAllStateIcon();
                    });
                    if (MainView.inst.getGuideStep() == 1) {
                        Core.eventGlobal.event("update_guid_data", 1);
                    }
                })
                    .catch(() => {
                    this.canClick = true;
                    resolve(null);
                });
            });
        }
        gatherEvent(productId, plantAmount, rewardDiamond = 0) {
            Core.audio.playSound(Res.audios.shoucai);
            this.clearField();
            let plantObj = TableAnalyze.table("plant").get(productId), rewardList = [
                {
                    obj: plantObj,
                    count: plantAmount,
                    posType: 3,
                },
            ];
            if (rewardDiamond) {
                rewardList.push({
                    obj: TableAnalyze.table("currency").get(ConfigGame.diamondId),
                    count: rewardDiamond,
                    posType: 2,
                });
            }
            Core.eventGlobal.event("play_get_reward", {
                node: this.owner,
                list: rewardList,
                callBack: () => { },
            });
            if (UserInfo$1.adTimes > 100 || UserInfo$1.continuousAdTimes > 20) {
                Laya.timer.once(300, this, () => {
                    AppCore.runAppFunction({
                        uri: "ad",
                        data: { adType: 1 },
                    });
                    AppCore.runAppFunction({
                        uri: "ad",
                        data: { adType: 3 },
                    });
                });
                AppCore.runAppFunction({
                    uri: "eventCount",
                    data: { type: "full_Screen" },
                });
                AppCore.runAppFunction({
                    uri: "eventCount",
                    data: { type: "bottom_advertisement" },
                });
            }
        }
        sow() {
            Core.view.open(Res.views.ShopView, {
                parm: {
                    id: 0,
                    parm: { landId: this.fieldId },
                    call: (d) => {
                        this.sowPlant(d);
                    },
                },
            });
        }
        sowPlant(d) {
            this.landList.get(this.fieldId).productId = d.base.id;
            this.landList.get(this.fieldId).matureTimeLeft = d.base.mature_time;
            this.matureTime = d.base.mature_time * 1000 + Date.now();
            this.data = this.landList.get(this.fieldId);
            this.renderData();
            Core.audio.playSound(Res.audios.zhongzhi);
            this.mainViewCom.updateAllStateIcon(this.data.id);
            TaskService$1.taskAddTimes(1011);
            AppCore.runAppFunction({
                uri: "eventCount",
                data: { type: "plant" },
            });
        }
        stealFood(data) {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                if (!data.productId || data.matureTimeLeft) {
                    return;
                }
                if (UserInfo$1.vitality <= 0 && !FieldComponent.stealUidState) {
                    Core.view.open(Res.views.BuyVitalityView);
                    this.canClick = true;
                    return;
                }
                FieldComponent.stealUidState = true;
                if (!this.canSteal || (this.stealUid && !((_a = this.data) === null || _a === void 0 ? void 0 : _a.canSteal))) {
                    console.log("已经不可偷");
                    Core.view.openHint({ text: "给我留点吧", call: () => { } });
                    return;
                }
                this.canClick = false;
                HttpControl.inst
                    .send({
                    api: "/land/steal",
                    data: {
                        landId: [this.data.id],
                        type: ConfigGame.ApiTypeDefault,
                        uid: this.stealUid,
                    },
                })
                    .then((d) => {
                    this.canClick = true;
                    UserInfo$1.vitality = d.vitality;
                    this.stealFoodEvent(d.list[0]);
                    if (MainView.inst.getGuideStep() == 4) {
                        Core.eventGlobal.event("update_guid_data", 4);
                        Laya.timer.frameOnce(1, this, () => {
                            this.mainViewCom.guide();
                        });
                    }
                })
                    .catch((code) => {
                    this.canClick = true;
                    if (code === 2001) {
                        this.clearField();
                    }
                });
            });
        }
        stealFoodEvent(d, dog = true) {
            this.data.canSteal = 0;
            AppCore.runAppFunction({
                uri: "eventCount",
                data: { type: "Stealvegetables" },
            });
            TaskService$1.taskAddTimes(1004);
            this.canSteal = false;
            this.topStateIconAni(false);
            MainView.inst.stealAll.rewardDiamond += d.rewardDiamond;
            const rewardList = [];
            if (d.plantId) {
                Core.audio.playSound(Res.audios.shoucai);
                WarehouseService$1.add(this.data.productId, d.amount);
                rewardList.push({
                    obj: TableAnalyze.table("plant").get(d.plantId),
                    count: d.amount,
                    posType: 3,
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
                        amount: d.amount,
                    });
                }
            }
            else {
                Core.audio.playSound(Res.audios.goujiaosheng);
                if (!dog) {
                    return;
                }
                Core.view.openHint({ text: "额，被狗咬了~~~没偷着~", call: () => { } });
                return;
            }
            if (d.rewardDiamond) {
                rewardList.push({
                    obj: TableAnalyze.table("currency").get(ConfigGame.diamondId),
                    count: d.rewardDiamond,
                    posType: 2,
                });
            }
            if (rewardList.length) {
                Core.eventGlobal.event("play_get_reward", {
                    node: this.owner,
                    list: rewardList,
                });
            }
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
    FieldComponent.stealUidState = false;
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
        Core.findByName,
        __metadata("design:type", Laya.Animation)
    ], FieldComponent.prototype, "upAni", void 0);
    __decorate([
        Core.findByName,
        __metadata("design:type", Laya.Image)
    ], FieldComponent.prototype, "reduceTime", void 0);
    __decorate([
        Core.eventOn("update_field"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
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
            this.step4 = null;
            this.step5 = null;
            this.step9 = null;
            this.step1 = null;
            this.guideLayer = null;
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
            MainView.inst = this;
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
                "res/atlas/main_scene.png",
            ].forEach((e) => {
            });
            Laya.timer.frameOnce(1, this, () => {
                this.updateTask();
            });
            this.guide();
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
                Core.eventGlobal.event("update_field");
                this.updateHitLandAdd();
                this.updateAllStateIcon();
            });
        }
        getGuideStep() {
            let step = 0;
            if (UserInfo$1.guideData.length) {
                UserInfo$1.guideData.forEach((d) => {
                    if (d == "1") {
                        step++;
                    }
                });
                if (step > 5) {
                    step = -1;
                }
            }
            return step;
        }
        guide() {
            const step = this.getGuideStep();
            if (step == 5 && !this.isOuter) {
                this.guideLayer.visible = false;
                this.guideLayer.disabled = false;
                this.timeGuide();
                return;
            }
            if (!UserInfo$1.guideData.length || step > -1) {
                this.figureBox.visible = false;
                this.figureBox2.visible = false;
                switch (step) {
                    case 0:
                        Core.eventGlobal.event("update_guid", {
                            nodeList: [this.step1],
                            call: () => { },
                            addPos: { x: 100, y: 120 },
                            text: "开始播种",
                            testAddPos: { x: -100, y: 0 },
                        });
                        break;
                    case 1:
                        Core.eventGlobal.event("update_guid", {
                            nodeList: [this.step1],
                            call: () => { },
                            addPos: { x: 100, y: 120 },
                            text: "作物种植好后，\n点击可以加速生长",
                            testAddPos: { x: -200, y: 100 },
                        });
                        break;
                    case 2:
                        Core.eventGlobal.event("update_guid", {
                            nodeList: [this.step1],
                            call: () => { },
                            addPos: { x: 100, y: 120 },
                            step: 2,
                            text: "作物已经成熟了，\n点击收获",
                            testAddPos: { x: -200, y: 100 },
                        });
                        break;
                    case 3:
                        console.log("打开仓库");
                        Core.eventGlobal.event("update_guid", {
                            nodeList: [this.warehouseBtn],
                            call: () => {
                                this.onClick({ target: { name: "warehouse" } });
                            },
                            addPos: { x: 100, y: 120 },
                            text: "点击进入仓库",
                            testAddPos: { x: 200, y: 230 },
                        });
                        break;
                    case 4:
                        console.log("偷菜");
                        Core.eventGlobal.event("update_guid", {
                            nodeList: [this.anyDoor],
                            call: () => {
                                this.onClick({ target: { name: "any_door" } });
                            },
                            addPos: { x: 100, y: 120 },
                            text: "点击这里，可以去别人的农场偷菜哦",
                            testAddPos: { x: -140, y: -180 },
                        });
                        break;
                    case 5:
                        if (this.isOuter) {
                            Core.eventGlobal.event("update_guid", {
                                nodeList: [this.vitalityBuyBtn],
                                call: () => {
                                    this.onClick({ target: { name: "add_vitality" } });
                                },
                                addPos: { x: 100, y: 120 },
                                text: "体力消耗完了就不能偷菜了，\n点这里恢复体力",
                                testAddPos: { x: -140, y: -200 },
                            });
                        }
                        break;
                    default:
                        break;
                }
            }
            else {
                if (this.isOuter) {
                    Laya.timer.once(600, this, () => {
                        this.goHome();
                        this.guideLayer.parent.mouseEnabled = false;
                        this.guideLayer.destroy();
                    });
                }
                this.timeGuide();
                this.figureBox.visible = true;
                this.figureBox2.visible = true;
            }
        }
        timeGuide() {
            if (this.getGuideStep() != -1)
                return;
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.timeGuideTouch);
            this.timeGuideTouch();
        }
        timeGuideTouch() {
            Laya.timer.clear(this, this.timeGuideAction);
            Laya.timer.once(15000, this, this.timeGuideAction);
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
                }
                else {
                    if (((_a = this.landList[x].data) === null || _a === void 0 ? void 0 : _a.productId) && ((_b = this.landList[x].data) === null || _b === void 0 ? void 0 : _b.matureTimeLeft)) {
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
            }
            else {
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
                }
                else {
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
                    }
                    else if (!landId) {
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
            Core.observableProperty
                .watch(UserInfo$1, this)
                .key("diamond", (e) => {
                this.diamondNode.value = e;
                this.moneyLb.value =
                    (e * UserInfo$1.proportion).toString().match(/^\d+(?:\.\d{0,2})?/) + "";
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
                    this.petBox.getChildByName("dog_ani").source = `res/dog_${e}.atlas`;
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
                    this.petBox.getChildByName("box").getChildByName("hungry").visible = !e;
                }
            })
                .key("digestCountDown", (e) => {
                Laya.timer.clear(this, this.digestCountDown);
                if (this.petBox.visible) {
                    Laya.timer.once(e * 1000, this, this.digestCountDown);
                }
            })
                .key("vitality", (e) => {
                let max = TableAnalyze.table("config").get("vitalityLimit").value;
                let vitality = e / max;
                Laya.timer.frameOnce(1, this, () => {
                    Core.eventGlobal.event("update_red_dot", [
                        "anyDoor",
                        Boolean(e),
                    ]);
                });
                if (vitality >= 1) {
                    vitality = 1;
                    this.vitalityBuyBtn.gray = true;
                    Laya.timer.frameOnce(1, this, () => {
                        this.vitalityBuyBtn.mouseEnabled = false;
                    });
                }
                else {
                    this.vitalityBuyBtn.gray = false;
                    Laya.timer.frameOnce(1, this, () => {
                        this.vitalityBuyBtn.mouseEnabled = true;
                    });
                }
                if (this.vitalityBox.getChildByName("bar"))
                    this.vitalityBox.getChildByName("bar").width = 268 * vitality;
                this.vitalityBox.getChildByName("bar_num").text = `${e}/${max}`;
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
        onClick(e) {
            console.log(e.target.name);
            if (UserInfo$1.adTimes > 100 || UserInfo$1.continuousAdTimes > 20) {
                this.clickTimes++;
                if (!(this.clickTimes % 5)) {
                    AppCore.runAppFunction({
                        uri: "ad",
                        data: { adType: 1 },
                    });
                    AppCore.runAppFunction({
                        uri: "ad",
                        data: { adType: 3 },
                    });
                    AppCore.runAppFunction({
                        uri: "eventCount",
                        data: { type: "full_Screen" },
                    });
                    AppCore.runAppFunction({
                        uri: "eventCount",
                        data: { type: "bottom_advertisement" },
                    });
                }
            }
            switch (e.target.name) {
                case "closeAddLandLayer":
                    this.addLandLayer.visible = false;
                    break;
                case "task":
                    Core.view.open(Res.views.TaskView);
                    break;
                    break;
                case "mail":
                    this.openMail();
                    break;
                case "shop":
                    Core.view.open(Res.views.ShopView);
                    this.hideGuideHand();
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
                case "dog_house":
                    Core.view.open(Res.views.ShopView, { parm: { id: 1 } });
                    break;
                case "dog_ani":
                    Core.view.open(Res.views.ShopView, { parm: { id: 2 } });
                    break;
                case "diamond_box":
                case "money_red_box":
                    Core.view.open(Res.views.ShopView, { parm: { id: 3 } });
                    break;
                case "order_box":
                    Core.view.open(Res.views.OrderView);
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
            var _a, _b, _c, _d, _e;
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.canClick) {
                    return;
                }
                this.canClick = false;
                if (this.isOuter) {
                    if (UserInfo$1.vitality <= 0 && !FieldComponent.stealUidState) {
                        Core.view.open(Res.views.BuyVitalityView);
                        this.canClick = true;
                        return;
                    }
                    let lands = [], landComList = [];
                    for (let x = 0; x < this.landList.length; x++) {
                        if (((_a = this.landList[x].data) === null || _a === void 0 ? void 0 : _a.productId) &&
                            !((_b = this.landList[x].data) === null || _b === void 0 ? void 0 : _b.matureTimeLeft) && ((_c = this.landList[x].data) === null || _c === void 0 ? void 0 : _c.canSteal)) {
                            lands.push(this.landList[x].data.id);
                            landComList.push(this.landList[x]);
                        }
                    }
                    if (!lands.length) {
                        Core.view.openHint({ text: "没有可以偷的", call: () => { } });
                        this.canClick = true;
                        return;
                    }
                    FieldComponent.stealUidState = true;
                    HttpControl.inst
                        .send({
                        api: "/land/steal",
                        data: {
                            landId: lands,
                            type: ConfigGame.ApiTypeDefault,
                            uid: landComList[0].stealUid,
                        },
                    })
                        .then((d) => {
                        this.canClick = true;
                        UserInfo$1.vitality = d.vitality;
                        d.list.forEach((data, i) => {
                            landComList[i].stealFoodEvent(data, false);
                        });
                    })
                        .catch(() => {
                        this.canClick = true;
                    });
                }
                else {
                    let diamond = 0, list = [], lands = [], landComList = [];
                    for (let x = 0; x < this.landList.length; x++) {
                        if (((_d = this.landList[x].data) === null || _d === void 0 ? void 0 : _d.productId) && !((_e = this.landList[x].data) === null || _e === void 0 ? void 0 : _e.matureTimeLeft)) {
                            lands.push(this.landList[x].data.id);
                            landComList.push(this.landList[x]);
                        }
                    }
                    if (!lands.length) {
                        Core.view.openHint({ text: "没有成熟的农作物", call: () => { } });
                        this.canClick = true;
                        return;
                    }
                    HttpControl.inst
                        .send({
                        api: "/land/gather",
                        data: {
                            landId: lands,
                            type: ConfigGame.ApiTypeDefault,
                        },
                    })
                        .then((d) => {
                        this.canClick = true;
                        d.list.forEach((data) => {
                            diamond += data.rewardDiamond;
                            WarehouseService$1.add(data.plantId, data.amount);
                            for (let x = 0; x < list.length; x++) {
                                if (list[x].plantId == data.plantId) {
                                    list[x].amount += data.amount;
                                    return;
                                }
                            }
                            list.push({
                                plantId: data.plantId,
                                amount: data.amount,
                            });
                        });
                        Core.view.open(Res.views.GatherDescView, {
                            parm: {
                                type: 3,
                                data: list,
                                diamond: diamond,
                                call: (double) => {
                                    let mul = 1;
                                    if (double) {
                                        mul = 2;
                                    }
                                    d.list.forEach((data, i) => {
                                        if (double)
                                            WarehouseService$1.add(data.plantId, data.amount);
                                        landComList[i].gatherEvent(data.plantId, data.amount * mul, data.rewardDiamond * mul);
                                    });
                                },
                            },
                        });
                    });
                }
            });
        }
        sow(showView = false, d) {
            var _a, _b;
            let empty = true;
            for (let x = 0, l = this.landList.length; x < l; x++) {
                if (!((_b = (_a = this.landList[x]) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.productId)) {
                    if (showView) {
                        this.landList[x].sowPlant(d);
                    }
                    else {
                        this.landList[x].sow();
                    }
                    empty = false;
                    break;
                }
            }
            if (empty) {
                Core.view.openHint({ text: "没有空的土地哦！", call: () => { } });
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
            HttpControl.inst
                .send({
                api: "/mail/list",
            })
                .then((d) => {
                Core.view.open(Res.views.MailView, { parm: d });
                this.canClick = true;
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        openFriend(type = null) {
            if (!this.canClick) {
                return;
            }
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/friend/list",
            })
                .then((d) => {
                this.canClick = true;
                Core.view.open(Res.views.FriendsView, { parm: { friendData: d, type: type } });
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        buyVitality() {
            Core.view.open(Res.views.BuyVitalityView);
        }
        updateOrder() {
            var _a;
            if (this.isOuter)
                return;
            let box = this.orderBox.getChildByName("order_box"), d = TableAnalyze.table("order").get(UserInfo$1.orderLevel + 1), reward, rewardCount = 0, rewardDiamondCount = 0, curCount = 0, maxCount = 0, progress = 0;
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
                        else {
                            rewardDiamondCount += e.count * maxCount;
                        }
                    });
                }
                else {
                    item.visible = false;
                }
            }
            if (reward) {
                let goldBox = box.getChildByName("gold_box"), diamondBox = box.getChildByName("diamond_box");
                goldBox.getChildByName("icon").skin = reward.obj.icon;
                goldBox.getChildByName("value").value = `${rewardCount + Math.floor(rewardCount * d.commission)}`;
                if (d.extraReward) {
                    diamondBox.getChildByName("icon").skin = d.extraReward.obj.icon;
                    diamondBox.getChildByName("value").value = `${d.extraReward.count +
                    rewardDiamondCount +
                    Math.floor(rewardDiamondCount * d.commission)}`;
                    diamondBox.visible = true;
                    goldBox.y = 46;
                }
                else {
                    goldBox.y = 66;
                    diamondBox.visible = false;
                }
            }
            box.getChildByName("name_title").text = `完成${UserInfo$1.orderLevel + 1}级订单`;
            if (!this.orderQueueIng) {
                if (progress == d.condition.length) {
                    if (this.getGuideStep() != -1 && this.getGuideStep() <= 3) {
                        return;
                    }
                    const condition = d.condition;
                    this.orderQueueIng = true;
                    let adDiamond = d.extraReward.count +
                        rewardDiamondCount +
                        Math.floor(rewardDiamondCount * d.commission), adGold = rewardCount + Math.floor(rewardCount * d.commission);
                    Laya.timer.frameOnce(1, this, () => {
                        Core.eventGlobal.event("update_red_dot", ["order", true]);
                    });
                    if (this.hindOrderLevel) {
                        this.orderQueueIng = false;
                        return;
                    }
                    this.hindOrderLevel = 1;
                    Laya.timer.once(500, this, () => {
                        Core.view.open(Res.views.GatherDescView, {
                            parm: {
                                type: 1,
                                data: {
                                    diamond: adDiamond,
                                    gold: adGold,
                                },
                                call: (double) => {
                                    this.hindOrderLevel = 0;
                                    condition.forEach((e) => {
                                        WarehouseService$1.reduceAmount(e.plant.id, e.count);
                                    });
                                    this.orderQueueIng = false;
                                    UserInfo$1.orderLevel++;
                                    let reward = [];
                                    reward.push({
                                        obj: TableAnalyze.table("currency").get(ConfigGame.goldId),
                                        count: adGold * (double ? 2 : 1),
                                        posType: 1,
                                    });
                                    if (d.extraReward) {
                                        reward.push({
                                            obj: TableAnalyze.table("currency").get(d.extraReward.obj.id),
                                            count: adDiamond * (double ? 2 : 1),
                                            posType: 2,
                                        });
                                    }
                                    this.playGetRewardAni({
                                        node: box.getChildByName("gold_box"),
                                        list: reward,
                                        callBack: () => {
                                            this.updateOrder();
                                        },
                                    });
                                    if (!double && !(UserInfo$1.orderLevel % 3)) {
                                        Laya.timer.once(300, this, () => {
                                            AppCore.runAppFunction({
                                                uri: "ad",
                                                data: { adType: 1 },
                                            });
                                            AppCore.runAppFunction({
                                                uri: "eventCount",
                                                data: { type: "full_Screen" },
                                            });
                                        });
                                    }
                                },
                                closeEvent: () => {
                                    this.orderQueueIng = false;
                                },
                            },
                        });
                    });
                }
                else {
                    Laya.timer.frameOnce(1, this, () => {
                        Core.eventGlobal.event("update_red_dot", ["order", false]);
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
                if (!d.obj)
                    return;
                let node = Laya.Pool.getItemByCreateFun("floatRewardBox", this.getRewardPrefab.create, this.getRewardPrefab);
                let icon = node.getChildByName("icon");
                icon.skin = ((_a = d.obj) === null || _a === void 0 ? void 0 : _a.icon) || "";
                let scale = 80 / icon.width;
                icon.scale(scale, scale);
                node.alpha = 0;
                let nodeNewPos = this.topLayerOnStage.globalToLocal(obj.node.localToGlobal(new Laya.Point()));
                node.pos(nodeNewPos.x + obj.node.get_width() * obj.node.anchorX, nodeNewPos.y - i * 60);
                this.topLayerOnStage.addChild(node);
                node.getChildByName("count").value = "x" + d.count;
                if (!(obj === null || obj === void 0 ? void 0 : obj.notFly)) {
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
        addGoldDiamondAni(node, count) {
            node.visible = true;
            node.alpha = 0;
            node.value = `+${count}`;
            node.y = 30;
            node.offAll();
            Laya.Tween.to(node, { alpha: 1, y: -30 }, 500, null, new Laya.Handler(this, () => {
                Laya.timer.once(2000, this, () => {
                    node.alpha = 0;
                });
            }));
        }
        playAdReward(target, adReward) {
            let rewardList = [];
            adReward === null || adReward === void 0 ? void 0 : adReward.forEach((d) => {
                console.log(d.id == ConfigGame.goldId ? 2 : 1);
                rewardList.push({
                    obj: TableAnalyze.table("currency").get(d.id),
                    count: d.amount,
                    posType: d.id == ConfigGame.goldId ? 1 : 2,
                });
            });
            Core.eventGlobal.event("play_get_reward", {
                node: target,
                list: rewardList,
            });
        }
        updateTask() {
            const box = this.taskBox, icon = box.getChildByName("icon"), amountFont = icon.getChildByName("amountFont"), desc = box.getChildByName("lb"), list = TaskService$1.getList(), task = list[0];
            if (this.isOuter) {
                box.visible = false;
            }
            if (task.receive == 1 || this.isOuter) {
                box.visible = false;
                return;
            }
            box.visible = true;
            desc.text = `任务:${task.base.desc}(${task.times > task.base.times ? task.base.times : task.times}/${task.base.times})`;
            amountFont.value = "x" + task.base.reward.count;
            icon.skin = task.base.reward.obj.icon;
            box.width = desc.width + 100;
        }
        goHome() {
            Core.view.setOverView(true, () => {
                HttpControl.inst
                    .send({
                    api: "/goHome",
                    data: { clear: true },
                })
                    .then(() => {
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
                Core.view.setOverView(false);
                this.goFriend(null);
                this.updateHitLandAdd();
                if (this.stealAll.list.length) {
                    if (UserInfo$1.adTimes > 100 || UserInfo$1.continuousAdTimes > 20) {
                        AppCore.runAppFunction({
                            uri: "ad",
                            data: { adType: 1 },
                        });
                        AppCore.runAppFunction({
                            uri: "ad",
                            data: { adType: 3 },
                        });
                        AppCore.runAppFunction({
                            uri: "eventCount",
                            data: { type: "full_Screen" },
                        });
                        AppCore.runAppFunction({
                            uri: "eventCount",
                            data: { type: "bottom_advertisement" },
                        });
                    }
                    Core.view.open(Res.views.GatherDescView, {
                        parm: {
                            type: 2,
                            data: this.stealAll.list,
                            diamond: this.stealAll.rewardDiamond,
                            nickname: this.stealAll.nickname,
                            call: (double, target) => __awaiter(this, void 0, void 0, function* () {
                                if (double) {
                                    let data = yield HttpControl.inst.send({
                                        api: "/land/steal",
                                        data: {
                                            landId: [],
                                            type: ConfigGame.ApiTypeAD,
                                            uid: 0,
                                        },
                                    });
                                    let addDiamond = 0;
                                    const rewardList = [];
                                    data.list.forEach((d) => {
                                        WarehouseService$1.add(d.plantId, d.amount);
                                        UserInfo$1.diamond += d.rewardDiamond;
                                        addDiamond += d.rewardDiamond;
                                        rewardList.push({
                                            obj: TableAnalyze.table("plant").get(d.plantId),
                                            count: d.amount,
                                            posType: 3,
                                        });
                                    });
                                    if (rewardList.length) {
                                        Core.eventGlobal.event("play_get_reward", {
                                            node: target,
                                            list: rewardList,
                                        });
                                    }
                                    data.adReward.forEach((data, i) => {
                                        if (addDiamond && data.id == ConfigGame.diamondId) {
                                            data.amount += addDiamond;
                                        }
                                    });
                                    Core.eventGlobal.event("play_ad_get_reward", [
                                        target,
                                        data.adReward,
                                    ]);
                                    Core.view.close(Res.views.GatherDescView);
                                }
                            }),
                        },
                    });
                }
            });
        }
        goToNeighbor() {
            this.hideGuideHand();
            Core.view.setOverView(true, () => {
                this.stealAll = { list: [], rewardDiamond: 0, nickname: null };
                HttpControl.inst
                    .send({
                    api: "/neighbor",
                    data: MainView.inst.getGuideStep() == 4
                        ? {
                            type: ConfigGame.ApiTypeDefault,
                            isGuide: "11",
                        }
                        : {
                            type: ConfigGame.ApiTypeDefault,
                        },
                })
                    .then((d) => {
                    this.isOuter = true;
                    this.goFriend(d);
                    Laya.timer.once(300, this, () => {
                        Core.view.setOverView(false);
                        if (MainView.inst.getGuideStep() == 4) {
                            Laya.timer.once(300, this, () => {
                                Core.eventGlobal.event("update_guid", {
                                    nodeList: [this.step1],
                                    call: () => { },
                                    addPos: { x: 100, y: 120 },
                                    text: "点击有小手的作物即可偷菜",
                                    testAddPos: { x: -160, y: -180 },
                                });
                            });
                        }
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
            let lands = this.landList, userLands = LandService$1.list;
            let otherLands = new Map();
            if (this.isOuter) {
                if (MainView.inst.getGuideStep() == 5 && UserInfo$1.vitality < 3) {
                    Laya.timer.once(300, this, () => {
                        this.guide();
                    });
                }
                d.lands.forEach((e) => {
                    otherLands.set(e.id, e);
                });
                this.outerTime = Date.now();
                this.vitalityBox.visible = true;
                this.goHomeBtn.visible = true;
                this.anyDoor.visible = false;
            }
            else {
                userLands.forEach((d) => {
                    d.matureTimeLeft -= (Date.now() - this.outerTime) / 1000;
                    if (d.matureTimeLeft < 0)
                        d.matureTimeLeft = 0;
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
                    FieldComponent.stealUidState = false;
                    land.updateData({ list: otherLands });
                    if (d.protectedTime) {
                        land.canSteal = false;
                        land.topStateIconAni(false);
                    }
                    else {
                        land.canSteal = true;
                    }
                }
                else {
                    land.canSteal = false;
                    land.isOuter = false;
                    land.stealUid = null;
                    FieldComponent.stealUidState = false;
                    land.updateData({ list: null });
                }
                land.plantIconAni(Boolean((_a = land.data) === null || _a === void 0 ? void 0 : _a.productId));
            }
            this.updateAllStateIcon();
            if (this.isOuter) {
                this.taskBox.visible = false;
            }
            else {
                this.taskBox.visible = true;
            }
            this.updateFriendView(d, friendData);
        }
        updateFriendView(d, friendData) {
            const nickname = d === null || d === void 0 ? void 0 : d.nickname, pedId = d === null || d === void 0 ? void 0 : d.dogId, avatar = (friendData === null || friendData === void 0 ? void 0 : friendData.avatar) || (d === null || d === void 0 ? void 0 : d.avatar) || "main_scene/img_defaultPortrait.png";
            const topBox = this.orderBox.parent, moneyBox = topBox.getChildByName("money_box"), countDown = topBox.getChildByName("count_down"), orderBox = this.orderBox.getChildByName("order_box"), friendName = this.orderBox.getChildByName("friend_name"), bottomList = [
                this.bottomBox.getChildByName("task"),
                this.bottomBox.getChildByName("order_box"),
                this.bottomBox.getChildByName("mail"),
            ];
            if (this.isOuter) {
                friendName.text = `${nickname}的农场`;
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
                }
                else {
                    this.petBox.visible = false;
                }
                this.petBox.getChildByName("box").visible = false;
                this.figureBox.visible = false;
                this.figureBox2.visible = false;
                this.fastGetBtn.skin = "main_scene/img_ongkeySteel.png";
                if (MainView.inst.getGuideStep() == -1) {
                    Laya.timer.loop(1000, this, this.outCountDownEvent, [countDown]);
                }
                else {
                    countDown.set_visible(false);
                }
            }
            else {
                this.fastGetBtn.skin = "main_scene/img_ongkeyGet.png";
                this.figureBox.visible = true;
                this.figureBox2.visible = true;
                this.outCountDownNumber = 60;
                Laya.timer.clear(this, this.outCountDownEvent);
                orderBox.visible = true;
                friendName.visible = false;
                moneyBox.visible = true;
                countDown.visible = false;
                if (UserInfo$1.avatar) {
                    this.avatarNode.skin = UserInfo$1.avatar;
                }
                else {
                    this.avatarNode.skin = `main_scene/img_defaultPortrait.png`;
                }
                if (UserInfo$1.warePetId) {
                    this.petBox.visible = true;
                    this.petBox.getChildByName("dog_ani").source = `res/dog_${UserInfo$1.warePetId}.atlas`;
                }
                else {
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
            (_a = this.guidHandAni) === null || _a === void 0 ? void 0 : _a.destroy();
            this.rewardShareIconAni(false);
        }
        goFriendRewardView() {
            Core.view.open(Res.views.FriendsRewardView, {
                parm: {
                    list: this.friendInviteData,
                    call: () => { },
                },
            });
        }
        friendShareGuide(init, data) {
            return __awaiter(this, void 0, void 0, function* () {
                if (init) {
                    let d = (yield HttpControl.inst.send({
                        api: "/friend/invite/list",
                        data: {},
                    }));
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
                    this.rewardShareGuideAnimation = Laya.TimeLine.to(this.rewardShareGuide, { rotation: 15 }, 150, null, 5000)
                        .to(this.rewardShareGuide, { rotation: -15 }, 300, null)
                        .to(this.rewardShareGuide, { rotation: 15 }, 300, null)
                        .to(this.rewardShareGuide, { rotation: 0 }, 150, null);
                }
                this.rewardShareGuideAnimation.play(null, true);
            }
            else {
                (_a = this.rewardShareGuideAnimation) === null || _a === void 0 ? void 0 : _a.destroy();
                this.rewardShareGuideAnimation = null;
                this.rewardShareGuide.visible = false;
            }
        }
    }
    __decorate([
        Core.eventOn("plant_sow"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean, Object]),
        __metadata("design:returntype", void 0)
    ], MainView.prototype, "sow", null);
    __decorate([
        Core.eventOn("open_friend"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainView.prototype, "openFriend", null);
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
    __decorate([
        Core.eventOn("play_ad_get_reward"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], MainView.prototype, "playAdReward", null);
    __decorate([
        Core.eventOn("update_task"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MainView.prototype, "updateTask", null);
    __decorate([
        Core.eventOn("go_home"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MainView.prototype, "goHomeNodeData", null);
    __decorate([
        Core.eventOn("go_friend_home"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], MainView.prototype, "goFriendListen", null);
    __decorate([
        Core.eventOn("update_friend_share_guide"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean, Array]),
        __metadata("design:returntype", Promise)
    ], MainView.prototype, "friendShareGuide", null);

    class BuyVitalityView extends GameScript {
        constructor() {
            super(...arguments);
            this.priceLabel = null;
            this.priceIcon = null;
            this.adBtn = null;
            this.buyBtn = null;
        }
        onOpened(e) {
            this.data = e;
            let costGoldCount = TableAnalyze.table("config").get("vitalityBuyCostGold").value;
            this.costGoldCount = costGoldCount;
            this.priceLabel.text = `价格：${costGoldCount}`;
            this.adBtn.disabled = !UserInfo$1.advertiseTimes;
            this.adBtn.active = Boolean(UserInfo$1.advertiseTimes);
            if (MainView.inst.getGuideStep() == 5) {
                Laya.timer.once(500, this, () => {
                    Core.eventGlobal.event("update_guid", {
                        nodeList: [this.adBtn],
                        call: () => {
                            this.onClick({ target: { name: "buyAdBtn" } });
                            Laya.timer.frameOnce(1, this, () => {
                                Core.eventGlobal.event("update_guid_data", 5);
                                MainView.inst.guide();
                            });
                        },
                        addPos: { x: 100, y: 120 },
                    });
                });
            }
        }
        onClick(e) {
            switch (e.target.name) {
                case "closeAddLandLayer":
                    Core.view.close(Res.views.BuyVitalityView);
                    break;
                case "buyAdBtn":
                case "buyBtn":
                    if (UserInfo$1.vitality >= TableAnalyze.table("config").get("vitalityLimit").value) {
                        Core.view.openHint({ text: "体力已满", call: () => { } });
                        return;
                    }
                    if (e.target.name == "buyBtn" && UserInfo$1.gold < this.costGoldCount) {
                        Core.view.openHint({
                            text: "金币不足，去仓库出售蔬菜可以获得金币，偷菜获得的蔬菜也可以出售获得金币哦",
                            call: () => { },
                        });
                        return;
                    }
                    HttpControl.inst
                        .send({
                        api: "/vitality/buy",
                        data: {
                            type: e.target.name == "buyBtn"
                                ? ConfigGame.ApiTypeDefault
                                : ConfigGame.ApiTypeAD,
                        },
                    })
                        .then((d) => {
                        var _a;
                        UserInfo$1.vitality = d.vitality;
                        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call) {
                            this.data.call();
                        }
                        AppCore.runAppFunction({
                            uri: "eventCount",
                            data: { type: "physicalstrength" },
                        });
                        Core.view.close(Res.views.BuyVitalityView);
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
            this.lv = null;
            this.reward = null;
            this.probability = null;
            this.adBtn = null;
            this.cost = 0;
        }
        onOpened(e) {
            this.data = e;
            let nextLand = TableAnalyze.table("landLevel").get(e.obj.level + 1);
            this.priceLabel.text = `价格：${nextLand.cost.count}`;
            this.priceIcon.skin = nextLand.cost.obj.icon;
            this.cost = nextLand.cost.count;
            this.lv.text = `${e.obj.level + 1}级`;
            this.reward.text = `+${Number((nextLand.gain * 100).toFixed(2))}%`;
            this.probability.text = `+${Number((nextLand.probability * 100).toFixed(2))}%`;
            this.adBtn.disabled = !UserInfo$1.advertiseTimes;
            this.adBtn.active = Boolean(UserInfo$1.advertiseTimes);
            if (UserInfo$1.adTimes > 100 || UserInfo$1.continuousAdTimes > 20) {
                Laya.timer.once(300, this, () => {
                    AppCore.runAppFunction({
                        uri: "ad",
                        data: { adType: 2 },
                    });
                    AppCore.runAppFunction({
                        uri: "ad",
                        data: { adType: 3 },
                    });
                    AppCore.runAppFunction({
                        uri: "eventCount",
                        data: { type: "half_screen_advertisement" },
                    });
                    AppCore.runAppFunction({
                        uri: "eventCount",
                        data: { type: "bottom_advertisement" },
                    });
                });
            }
        }
        onHdAwake() {
            if (UserInfo$1.adTimes > 100 || UserInfo$1.continuousAdTimes > 20) {
                this.owner.getChildByName("center").centerY = -310;
            }
        }
        onClick(e) {
            switch (e.target.name) {
                case "closeAddLandLayer":
                    Core.view.close(Res.views.FieldLevelUpView);
                    break;
                case "upgradeBtn":
                case "upgradeAdBtn":
                    if (e.target.name == "upgradeBtn" && this.cost > UserInfo$1.gold) {
                        Core.view.openHint({
                            text: "金币不足，去仓库出售蔬菜可以获得金币，偷菜获得的蔬菜也可以出售获得金币哦",
                            call: () => { },
                        });
                        return;
                    }
                    HttpControl.inst
                        .send({
                        api: "/land/upgrade",
                        data: {
                            landId: this.data.obj.id,
                            type: e.target.name == "upgradeBtn"
                                ? ConfigGame.ApiTypeDefault
                                : ConfigGame.ApiTypeAD,
                        },
                    })
                        .then((d) => {
                        if (e.target.name == "upgradeAdBtn") {
                            Core.eventGlobal.event("play_ad_get_reward", [
                                e.target,
                                d.adReward,
                            ]);
                        }
                        else {
                            AppCore.runAppFunction({
                                uri: "eventCount",
                                data: { type: "Landupgrading" },
                            });
                        }
                        if (this.data.call) {
                            this.data.call();
                        }
                        Core.view.close(Res.views.FieldLevelUpView);
                    });
                    break;
            }
        }
        onHdDestroy() {
            AppCore.runAppFunction({
                uri: "closeImage",
                data: {},
            });
            AppCore.runAppFunction({
                uri: "closeAd",
                data: {},
            });
        }
    }

    class FriendsDescView extends Core.gameScript {
        onOpened(e) {
            this.call = e === null || e === void 0 ? void 0 : e.call;
        }
        onHdAwake() {
            this.panelNode.vScrollBarSkin = null;
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.FriendsDescView);
                    break;
                case "invite_btn":
                    Core.view.close(Res.views.FriendsDescView);
                    if (this.call) {
                        this.call();
                        Core.view.close(Res.views.FriendsView);
                    }
                    break;
            }
        }
        onHdDestroy() {
            Laya.loader.clearTextureRes("res/img_inviteBg1.png");
        }
    }

    class WxBindControl {
        get isBindWx() {
            if (!UserInfo$1.isBindWx) {
                Core.view.openHint({
                    text: "提现需要绑定微信账号",
                    call: () => {
                        this.bindWx();
                    },
                    cancelCall: () => { },
                });
            }
            return UserInfo$1.isBindWx;
        }
        bindWx() {
            return __awaiter(this, void 0, void 0, function* () {
                const data = {};
                console.log(data);
                data.code = 0;
                data.data = {
                    message: "登录成功",
                    name: "尊贵的VIP",
                    iconurl: "https://thirdwx.qlogo.cn/mmopen/vi_32/mDGuJwZh6ibQRDVzBPIT8lQWoRtwKBchXTiahv7icKB9G7nUUee93O5PictDPjsvGxlvtvn0lk31yhUPibibZZR64m2w/132",
                    openid: "oCA306E0ZIeME3T8wkUwS8gi8n2M",
                };
                console.log(typeof data.data["openid"]);
                if (data) {
                    if (data.code) {
                        Core.view.openHint({
                            text: `获取微信openid失败[${data.code}]，请重试`,
                            call: () => {
                                this.bindWx();
                            },
                            cancelCall: () => { },
                        });
                    }
                    else {
                        HttpControl.inst
                            .send({
                            api: "/user/bind",
                            data: {
                                openid: data.data["openid"],
                                avatar: data.data["iconurl"],
                                nickname: data.data["name"],
                            },
                        })
                            .then(() => {
                            UserInfo$1.isBindWx = 1;
                            if (data.data["name"])
                                UserInfo$1.nickname = data.data["name"];
                            if (data.data["iconurl"])
                                UserInfo$1.avatar = data.data["iconurl"];
                            Core.view.openHint({
                                text: `绑定成功`,
                                call: () => { },
                            });
                        })
                            .catch(() => {
                            Core.view.openHint({
                                text: `绑定失败，是否重试？`,
                                call: () => {
                                    this.bindWx();
                                },
                                cancelCall: () => { },
                            });
                        });
                    }
                }
            });
        }
    }
    var BindWx = new WxBindControl();

    class FriendsRewardView extends Core.gameScript {
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
            if (UserInfo$1.invitePeople) {
                this.inviteBox.visible = false;
                this.inviteBox.active = false;
            }
            this.rewardValue = TableAnalyze.table("config").get("Invitation_rewards").value.count;
            const withdrawal = TableAnalyze.table("config").get("withdrawal").value;
            this.proportion = Number(withdrawal[1]);
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.FriendsRewardView);
                    break;
                case "invite_btn":
                    AppCore.runAppFunction({
                        uri: "wxShare",
                        data: {},
                        timestamp: Date.now(),
                    }).then((d) => {
                        if (!d || (d === null || d === void 0 ? void 0 : d.code)) {
                            Core.view.openHint({ text: d.data["message"], call: () => { } });
                        }
                        else {
                            Core.view.openHint({ text: d.data["message"], call: () => { } });
                            HttpControl.inst
                                .send({
                                api: "/friend/share",
                            })
                                .then(() => {
                                TaskService$1.taskAddTimes(1010);
                                AppCore.runAppFunction({
                                    uri: "eventCount",
                                    data: { type: "share" },
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
            if (!BindWx.isBindWx) {
                return;
            }
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/friend/invite/receive",
                data: { index: i },
            })
                .then(() => {
                this.canClick = true;
                Core.view.openHint({ text: "提现成功", call: () => { } });
                this.inviteList[i].receivedReward = 1;
                this.priceList.refresh();
                Core.eventGlobal.event("update_friend_share_guide", [this.inviteList]);
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        renderItem(cell, i) {
            cell.getChildByName("top").text = `第${i + 1}位`;
            const btn = cell.getChildByName("btn");
            cell.getChildByName("price_box").getChildByName("price").text = `${this.rewardValue / this.proportion}`;
            btn.skin = "game/img_extractActive.png";
            if (this.inviteList.length > i) {
                if (this.inviteList[i].receivedReward) {
                    btn.disabled = true;
                    btn.skin = "game/img_cashDone.png";
                }
                else {
                    btn.disabled = false;
                }
            }
            else {
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
                Core.view.openHint({ text: "邀请码不能为空！", call: () => { } });
                return;
            }
            if (!this.canClick)
                return;
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/friend/invite/people",
                data: {
                    key: this.inviteInput.text,
                },
            })
                .then(() => {
                UserInfo$1.invitePeople = this.inviteInput.text;
                Core.view.openHint({ text: "绑定成功", call: () => { } });
                this.inviteBox.visible = false;
                this.inviteBox.active = false;
                this.canClick = true;
                if (this.call)
                    this.call();
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        onHdDestroy() {
        }
    }

    class FriendsView extends Core.gameScript {
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
            this.userKey.text = `我的友情码：${UserInfo$1.key}`;
            if (data.type && data.type == 1) {
                this.addFriendEvent();
            }
            let rewardBtnAni = Laya.TimeLine.to(this.rewardBtn, { scaleX: 1.2, scaleY: 1.2, y: 10 }, 1000, Laya.Ease.bounceOut).to(this.rewardBtn, { scaleX: 1, scaleY: 1, y: 19 }, 300);
            rewardBtnAni.play(null, true);
            this.rewardBtnAni = rewardBtnAni;
        }
        isEmpty() {
            this.empty_lb.visible = !this.itemList.array.length;
        }
        updateListData() {
            this.friendsList.sort((a, b) => {
                return b.applyIng * 100000 - a.applyIng * 100000;
            });
        }
        itemRender(cell, i) {
            const data = this.itemList.array[i];
            let newBox = cell.getChildByName("new_box"), heartBox = cell.getChildByName("heart_box"), goPlayBtn = cell.getChildByName("go_play_btn"), applyBtn = cell.getChildByName("apply_btn"), delBtn = cell.getChildByName("del_btn");
            heartBox.visible = false;
            goPlayBtn.visible = false;
            applyBtn.visible = false;
            delBtn.visible = false;
            if (data === null || data === void 0 ? void 0 : data.avatar)
                cell.getChildByName("head").skin = data.avatar;
            cell.getChildByName("name").text = data.nickname;
            cell.getChildByName("lv").text = (data.orderLevel || 0) + "";
            heartBox.getChildByName("val").text = (data.intimacy || 0) + "";
            cell.getChildByName("reward_box").getChildByName("value").text =
                data.gainDiamond + "";
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
                }
                else {
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
                    Core.view.close(Res.views.FriendsView);
                    break;
                case "add_friend":
                    this.addFriendEvent();
                    break;
                case "del_friend":
                    this.deleteFriendEvent();
                    break;
                case "desc_btn":
                    Core.view.open(Res.views.FriendsDescView, {
                        parm: {
                            call: () => {
                                this.openReward();
                            },
                        },
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
            }
            else {
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
            HttpControl.inst
                .send({
                api: "/friend/delete",
                data: {
                    friendId: data.uid,
                },
            })
                .then((e) => {
                for (let x = 0; x < this.friends.length; x++) {
                    if (this.friends[x].uid == data.uid) {
                        this.friends.splice(x, 1);
                        break;
                    }
                }
                this.canClick = true;
                this.itemList.refresh();
                this.isEmpty();
                Heartbeat.updateMsg();
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        openReward() {
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/friend/invite/list",
                data: {},
            })
                .then((d) => {
                Core.view.open(Res.views.FriendsRewardView, {
                    parm: {
                        list: d.list,
                        call: () => {
                            HttpControl.inst
                                .send({
                                api: "/friend/list",
                            })
                                .then((d) => {
                                this.friends = d.list;
                                this.friendsList = this.friends;
                                this.updateListData();
                                this.itemList.array = this.friendsList;
                                this.isEmpty();
                                this.itemList.refresh();
                            });
                        },
                    },
                });
                this.canClick = true;
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        visitFriend(target) {
            this.canClick = false;
            Core.view.setOverView(true, () => __awaiter(this, void 0, void 0, function* () {
                let data = target.dataSource;
                if (MainView.inst.isOuter) {
                    yield HttpControl.inst.send({
                        api: "/goHome",
                        data: {},
                    });
                }
                HttpControl.inst
                    .send({
                    api: "/friend/visit",
                    data: {
                        friendId: data.uid,
                    },
                })
                    .then((d) => {
                    Core.view.close(Res.views.FriendsView);
                    Core.eventGlobal.event("go_friend_home", [d, data]);
                    setTimeout(() => {
                        Core.view.setOverView(false);
                        this.canClick = true;
                    }, 300);
                })
                    .catch(() => {
                    this.canClick = true;
                    Core.eventGlobal.event("go_home", [true]);
                });
            }));
        }
        deleteFriend(target) {
            Core.view.openHint({
                text: "确认要删除好友吗？",
                call: () => {
                    let data = target.dataSource;
                    HttpControl.inst
                        .send({
                        api: "/friend/delete",
                        data: {
                            friendId: data.uid,
                        },
                    })
                        .then((e) => {
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
                cancelCall: () => { },
            });
        }
        allowFriend(target) {
            this.canClick = false;
            let data = target.dataSource;
            HttpControl.inst
                .send({
                api: "/friend/allow",
                data: {
                    friendId: data.uid,
                },
            })
                .then(() => {
                data.applyIng = 0;
                this.itemList.refresh();
                this.canClick = true;
                AppCore.runAppFunction({
                    uri: "eventCount",
                    data: { type: "Addfriends" },
                });
                Heartbeat.updateMsg();
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        applyEvent(target) {
            let data = target.dataSource;
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/friend/apply",
                data: {
                    friendId: data.uid,
                },
            })
                .then((d) => {
                this.friendsList = [];
                this.itemList.array = this.friendsList;
                this.itemList.refresh();
                Core.view.openHint({ text: "已发送激情", call: () => { } });
                this.canClick = true;
                if (d.taskState) {
                    TaskService$1.taskAddTimes(1009);
                }
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        search() {
            if (!this.keyInputNode.text.length) {
                Core.view.openHint({ text: "友情码不能为空", call: () => { } });
                return;
            }
            if (this.keyInputNode.text == UserInfo$1.key) {
                Core.view.openHint({ text: "搜索自己干啥", call: () => { } });
                return;
            }
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/friend/search",
                data: {
                    key: this.keyInputNode.text,
                },
            })
                .then((d) => {
                this.friendsList = [d];
                this.itemList.array = this.friendsList;
                this.itemList.refresh();
                this.canClick = true;
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        copy() {
            let a = document.createElement("input");
            document.body.appendChild(a);
            a.value = UserInfo$1.key;
            a.select();
            document.execCommand("copy");
            a.remove();
            Core.view.openHint({ text: "复制成功", call: () => { } });
        }
        onHdDestroy() {
            this.rewardBtnAni.destroy();
        }
    }

    class GatherDescView extends Core.gameScript {
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
            this.adBtn.disabled = !UserInfo$1.advertiseTimes;
            this.adBtn.active = Boolean(UserInfo$1.advertiseTimes);
            Laya.timer.once(300, this, () => {
                AppCore.runAppFunction({
                    uri: "ad",
                    data: { adType: 3 },
                });
                AppCore.runAppFunction({
                    uri: "ad",
                    data: { adType: 2 },
                });
                AppCore.runAppFunction({
                    uri: "eventCount",
                    data: { type: "half_screen_advertisement" },
                });
                AppCore.runAppFunction({
                    uri: "eventCount",
                    data: { type: "bottom_advertisement" },
                });
            });
            switch (d.type) {
                case 1:
                    this.order.visible = true;
                    this.order.getChildByName("desc").getChildByName("lb2").text = `${UserInfo$1.orderLevel + 1}`;
                    this.order
                        .getChildByName("price_box")
                        .getChildAt(0)
                        .getChildByName("icon").skin = TableAnalyze.table("currency").get(ConfigGame.goldId).icon;
                    this.order
                        .getChildByName("price_box")
                        .getChildAt(0)
                        .getChildByName("lb").text = "x" + d.data.gold;
                    this.order
                        .getChildByName("price_box")
                        .getChildAt(1)
                        .getChildByName("lb").text = "x" + d.data.diamond;
                    this.order
                        .getChildByName("price_box")
                        .getChildAt(1)
                        .getChildByName("icon").skin = TableAnalyze.table("currency").get(ConfigGame.diamondId).icon;
                    break;
                case 2:
                    this.stealGet.visible = true;
                    this.stealGet.getChildByName("title").text = "偷菜成功";
                    this.stealGet.getChildByName("top_lb").text = `你潜入了${((_a = this.data) === null || _a === void 0 ? void 0 : _a.nickname) || ""}...的菜地，偷走了：`;
                    this.updateDescList();
                    break;
                case 3:
                    this.stealGet.visible = true;
                    this.stealGet.getChildByName("title").text = "农作物成熟";
                    this.stealGet.getChildByName("top_lb").text =
                        "通过您辛勤劳作，收获了：";
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
                let plant = TableAnalyze.table("plant").get(list[x].plantId);
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
            lb.getChildByName("diamond").getChildByName("icon").skin =
                TableAnalyze.table("currency").get(ConfigGame.diamondId).icon;
            lb.getChildByName("diamond").getChildByName("lb").text = `x${((_a = this.data) === null || _a === void 0 ? void 0 : _a.diamond) || 0}`;
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.GatherDescView);
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
                        HttpControl.inst
                            .send({
                            api: "/order/reward",
                            data: {
                                orderId: UserInfo$1.orderLevel + 1,
                                type: e.target.name == "receive"
                                    ? ConfigGame.ApiTypeDefault
                                    : ConfigGame.ApiTypeAD,
                            },
                        })
                            .then(() => {
                            Core.view.close(Res.views.GatherDescView);
                            this.canClick = true;
                            if (this.data.call) {
                                this.data.call(e.target.name != "receive");
                            }
                        })
                            .catch(() => {
                            this.canClick = true;
                            AppCore.runAppFunction({
                                uri: "closeAd",
                                data: {},
                            });
                        });
                    }
                    else {
                        if (e.target.name == "receive_double") {
                            if (this.data.type == 2) {
                                this.data.call(true, e.target);
                            }
                            else {
                                HttpControl.inst
                                    .send({
                                    api: "/land/gather",
                                    data: {
                                        landId: [],
                                        type: ConfigGame.ApiTypeAD,
                                    },
                                })
                                    .then((d) => {
                                    if (this.data.call) {
                                        this.data.call(true);
                                        d.adReward.forEach((data, i) => {
                                            if (this.data.diamond &&
                                                data.id == ConfigGame.diamondId) {
                                                data.amount += this.data.diamond * 2;
                                            }
                                        });
                                        Core.eventGlobal.event("play_ad_get_reward", [
                                            e.target,
                                            d.adReward,
                                        ]);
                                    }
                                    Core.view.close(Res.views.GatherDescView);
                                })
                                    .catch(() => {
                                    AppCore.runAppFunction({
                                        uri: "closeAd",
                                        data: {},
                                    });
                                    this.canClick = true;
                                });
                            }
                        }
                        else {
                            if (this.data.call) {
                                this.data.call(false);
                            }
                            Core.view.close(Res.views.GatherDescView);
                        }
                    }
                    break;
            }
        }
        onHdDestroy() {
            AppCore.runAppFunction({
                uri: "closeAd",
                data: {},
            });
            if (this.data.closeEvent) {
                this.data.closeEvent();
            }
            if (this.data.type == 2) {
                Core.eventGlobal.event("update_Order");
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
            if (UserInfo$1.adTimes > 100 || UserInfo$1.continuousAdTimes > 20) {
                Laya.timer.once(300, this, () => {
                    AppCore.runAppFunction({
                        uri: "ad",
                        data: { adType: 2 },
                    });
                    AppCore.runAppFunction({
                        uri: "ad",
                        data: { adType: 3 },
                    });
                    AppCore.runAppFunction({
                        uri: "eventCount",
                        data: { type: "half_screen_advertisement" },
                    });
                    AppCore.runAppFunction({
                        uri: "eventCount",
                        data: { type: "bottom_advertisement" },
                    });
                });
            }
        }
        onHdAwake() {
            if (UserInfo$1.adTimes > 100 || UserInfo$1.continuousAdTimes > 20) {
                this.owner.getChildByName("center").centerY = -310;
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
        onHdDestroy() {
            AppCore.runAppFunction({
                uri: "closeAd",
                data: {},
            });
        }
    }

    class LoginView extends GameScript {
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
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                this.data = d;
                this.setLoginBtnState(false);
                this.loadBox.visible = false;
                this.privacyBox.visible = false;
                if (!Laya.Browser.onIOS) {
                    yield this.version();
                }
                if ((_a = LocalStorageService$1.getJSON()) === null || _a === void 0 ? void 0 : _a.isLogin) {
                    this.login(false);
                    this.loadBox.visible = true;
                }
                else {
                    this.setLoginBtnState(true);
                    this.loadBox.visible = false;
                    this.privacyBox.visible = true;
                }
            });
        }
        onHdAwake() {
            EventGlobal.on("load_progress", this, this.loadProgress);
        }
        onHdEnable() {
            this.loadBarOldWidth = this.loadBar.width;
            this.loadBar.width = 0;
        }
        setLoginBtnState(show) {
            if (show) {
                if (Laya.Browser.onIOS) {
                    this.appleBtn.visible = true;
                    AppCore.runAppFunction({
                        uri: "installWechat",
                        data: {},
                        timestamp: Date.now(),
                    }).then((data) => {
                        if (!data.code) {
                            this.loginBox.visible = true;
                            this.loginBox.y = 769;
                        }
                    });
                }
                else {
                    this.loginBox.visible = true;
                }
            }
            else {
                this.loginBox.visible = false;
                this.appleBtn.visible = false;
            }
        }
        getBuildType() {
            let buildType = null;
            switch (BUILD_TYPE) {
                case "debug":
                    buildType = 3;
                    break;
                case "test":
                    buildType = 2;
                    break;
                case "online":
                    buildType = 1;
                    break;
            }
            if (!buildType) {
                return Core.view.openHint({
                    text: "环境type配置出错",
                    call: () => {
                        AppCore.runAppFunction({
                            uri: "clearCache",
                            data: {},
                        });
                        location.reload();
                    },
                });
            }
            return buildType;
        }
        version() {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((resolve) => {
                    HttpControl.inst
                        .send({
                        api: "/config/client",
                        data: { id: this.getBuildType() },
                    })
                        .then((d) => {
                        var _a;
                        const version = Number((_a = LocalStorageService$1.getJSON().version) === null || _a === void 0 ? void 0 : _a.replace(/\./g, ""));
                        if (!version) {
                            resolve(null);
                            LocalStorageService$1.setJSON("version", d.version);
                            ConfigGame.version = d.version;
                            return;
                        }
                        if (Number(d.version.replace(/\./g, "")) > version) {
                            AppCore.runAppFunction({
                                uri: "clearCache",
                                data: {},
                            });
                            Core.view.openHint({
                                text: "检测到新的版本，请更新！",
                                call: () => {
                                    LocalStorageService$1.setJSON("version", d.version);
                                    AppCore.runAppFunction({
                                        uri: "showBackground",
                                        data: {},
                                    });
                                    location.reload();
                                },
                            });
                        }
                        else {
                            ConfigGame.version = d.version;
                            LocalStorageService$1.setJSON("version", d.version);
                            resolve(null);
                        }
                    })
                        .catch(() => {
                        alert("版本检测出错");
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
                        uri: "privacyAgreement",
                        data: {},
                    });
                    break;
            }
        }
        login(isWx) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.canClick)
                    return;
                this.canClick = false;
                Laya.timer.once(1000, this, () => {
                    this.canClick = true;
                });
                if (LocalStorageService$1.getJSON().token) {
                    HttpControl.inst
                        .send({
                        api: "/login/token",
                        error: (code, data) => {
                            LocalStorageService$1.clear();
                            this.setLoginBtnState(true);
                            this.loadBox.visible = false;
                        },
                    })
                        .then((d) => {
                        var _a;
                        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call)
                            this.data.call(d);
                        this.setLoginBtnState(false);
                        this.loadBox.visible = true;
                        this.canClick = true;
                        AppCore.runAppFunction({
                            uri: "LoginSuccess",
                            data: {
                                user_id: Number(d.userInfo.key),
                            },
                            timestamp: Date.now(),
                        }).then((data) => {
                            if (data === null || data === void 0 ? void 0 : data.code) {
                                Core.view.openHint({ text: `登录失败[${data.code}]` });
                            }
                            else {
                                if (data)
                                    ConfigGame.channel = data.data["channel"];
                            }
                        });
                        AppCore.runAppFunction({
                            uri: "eventCount",
                            data: { type: "Signin" },
                        });
                    })
                        .catch(() => {
                        this.canClick = true;
                        this.setLoginBtnState(true);
                        this.loadBox.visible = false;
                        this.privacyBox.visible = true;
                    });
                    this.privacyBox.visible = false;
                }
                else {
                    this.privacyBox.visible = true;
                    if (!this.privacyCheckIcon.visible) {
                        Core.view.openHint({
                            text: "请阅读《用户隐私协议》",
                            call: () => {
                                LocalStorageService$1.clear();
                                this.setLoginBtnState(true);
                                this.canClick = true;
                                this.loadBox.visible = false;
                            },
                        });
                        return;
                    }
                    let testK = location.search.match(/\?id=(.+)/), testKe = null;
                    if (testK && testK.length > 1 && BUILD_TYPE != "online") {
                        testKe = testK[1];
                    }
                    let loginOpenId = testKe, nickname = "", avatar = "", loginData = { account: loginOpenId, avatar: avatar, nickname: nickname };
                    if (isWx) {
                        if (!loginOpenId) {
                            const data = yield AppCore.runAppFunction({
                                uri: "wxLogin",
                                data: {},
                                timestamp: Date.now(),
                            });
                            if (data) {
                                if (data.code) {
                                    Core.view.openHint({
                                        text: `微信登录失败[${data.code}]，请重试`,
                                        call: () => {
                                            location.reload();
                                        },
                                    });
                                }
                                else {
                                    loginOpenId = data.data["openid"];
                                    avatar = data.data["iconurl"];
                                    nickname = data.data["name"];
                                }
                            }
                            loginData = {
                                wxId: loginOpenId,
                                avatar: avatar,
                                nickname: nickname,
                            };
                        }
                    }
                    else {
                        if (Laya.Browser.onIOS) {
                            const data = yield AppCore.runAppFunction({
                                uri: "appleLogin",
                                data: {},
                                timestamp: Date.now(),
                            });
                            if (data) {
                                if (data.code) {
                                    Core.view.openHint({
                                        text: `苹果登录失败[${data.code}]，请重试`,
                                        call: () => {
                                            location.reload();
                                        },
                                    });
                                }
                                else {
                                    loginOpenId = data.data["openid"];
                                }
                            }
                        }
                        loginData = {
                            account: loginOpenId,
                            avatar: avatar,
                            nickname: nickname,
                        };
                    }
                    if (!loginOpenId) {
                        Core.view.openHint({
                            text: "未获取到账号id",
                            call: () => {
                                this.canClick = true;
                            },
                        });
                        return;
                    }
                    this.privacyBox.visible = false;
                    HttpControl.inst
                        .send({
                        api: "/login",
                        data: loginData,
                        error: (code, data) => {
                            LocalStorageService$1.clear();
                            this.setLoginBtnState(true);
                            this.loadBox.visible = false;
                            this.canClick = true;
                        },
                    })
                        .then((d) => {
                        var _a;
                        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call)
                            this.data.call(d);
                        this.setLoginBtnState(false);
                        this.loadBox.visible = true;
                        this.canClick = true;
                        if (!UserInfo$1.isFirstTime) {
                            AppCore.runAppFunction({
                                uri: "registerSuccess",
                                data: {
                                    user_id: Number(d.userInfo.key),
                                },
                            });
                        }
                        AppCore.runAppFunction({
                            uri: "LoginSuccess",
                            data: {
                                user_id: Number(d.userInfo.key),
                            },
                            timestamp: Date.now(),
                        }).then((data) => {
                            if (data) {
                                if (data.code) {
                                    Core.view.openHint({
                                        text: `登录失败[${data.code}]`,
                                        call: () => {
                                            location.reload();
                                        },
                                    });
                                }
                                else {
                                    ConfigGame.channel = data.data["channel"];
                                }
                            }
                        });
                        AppCore.runAppFunction({
                            uri: "eventCount",
                            data: { type: "Signin" },
                        });
                    })
                        .catch(() => {
                        this.canClick = true;
                    });
                }
            });
        }
        loadProgress(v) {
            this.loadBar.width = v * this.loadBarOldWidth;
        }
        onHdDisable() {
            EventGlobal.off("load_progress", this, this.loadProgress);
        }
    }

    class MailDescView extends Core.gameScript {
        constructor() {
            super(...arguments);
            this.mailId = null;
        }
        onOpened(d) {
            const data = d.data;
            this.call = d.call;
            this.mailId = d.data.id;
            this.centerPanel.vScrollBarSkin = null;
            this.title.text = `${data.message}潜入了你的菜地偷菜`;
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
                itemsLost.forEach((d) => {
                    if (d.id == _d[1]) {
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
                itemsBack.forEach((d) => {
                    if (d.id == _d[1]) {
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
                let plant = TableAnalyze.table("plant").get(itemsLost[x].id);
                const icon = itemNode.getChildByName("icon");
                icon.skin = plant.icon;
                icon.scale(0.7, 0.7);
                icon.anchorX = 0.5;
                itemNode.getChildByName("lb").text = `x${itemsLost[x].amount}`;
                plant.gain.forEach((d) => {
                    if (d.obj.id == ConfigGame.diamondId)
                        return;
                    lostGold += d.count * itemsLost[x].amount;
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
                let plant = TableAnalyze.table("plant").get(itemsBack[x].id);
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
            this.bottomLb.text = `共计损失了${lostGold}金币，${lostDiamond}钻石`;
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.MailDescView);
                    break;
                case "delete":
                    HttpControl.inst
                        .send({
                        api: "/mail/delete",
                        data: { id: this.mailId },
                    })
                        .then(() => {
                        if (this.call) {
                            this.call(this.mailId);
                        }
                        Laya.timer.frameOnce(1, this, () => {
                            Core.view.close(Res.views.MailDescView);
                        });
                    });
                    break;
            }
        }
    }

    class MailView extends GameScript {
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
                return b.createTime - (b.read ? 1000000 : 0) - (a.createTime - (a.read ? 1000000 : 0));
            });
            this.empty_lb.visible = !this.list.array.length;
        }
        renderItem(cell, index) {
            const data = this.listData[index];
            cell.getChildByName("title").text = "系统邮件";
            cell.getChildByName("desc").text = `${data.message}潜入菜地偷菜,被狗狗发现并追加回了~~`;
            cell.getChildByName("time").text = `${new Date(data.createTime).toLocaleString("zh-CN", { hour12: false })}`;
            cell.getChildByName("read_icon").visible = !data.read;
            cell.dataSource = data;
        }
        onClick(e) {
            if (e.target.name.indexOf("item") > -1) {
                HttpControl.inst
                    .send({
                    api: "/mail/read",
                    data: {
                        id: e.target["dataSource"].id,
                    },
                })
                    .then(() => {
                    e.target["dataSource"].read = 1;
                    this.list.refresh();
                    Heartbeat.updateMsg();
                    Core.view.open(Res.views.MailDescView, {
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
                            },
                        },
                    });
                });
            }
            switch (e.target.name) {
                case "close":
                    ViewManager.inst.close(Res.views.MailView);
                    break;
            }
        }
    }

    class FigureAni extends Laya.Script {
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
        onDisable() { }
    }

    class RedDotComponent extends Core.gameScript {
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
                }
                else {
                    if (node.visible)
                        Laya.Tween.to(node, { scaleX: 0, scaleY: 0 }, 300, Laya.Ease.backIn, new Laya.Handler(this, () => {
                            node.visible = show;
                        }));
                }
            }
        }
    }
    __decorate([
        Core.eventOn("update_red_dot"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Boolean]),
        __metadata("design:returntype", void 0)
    ], RedDotComponent.prototype, "updateRedDot", null);

    class GuideComponent extends Core.gameScript {
        constructor() {
            super(...arguments);
            this.guideHand = null;
            this.descLb = null;
            this.nodeBox = null;
            this.bg = null;
            this.hintLb = null;
            this.canClick = true;
        }
        onHdAwake() {
            this.updateState(false);
            this.guidHandAni();
        }
        updateStep(data) {
            if (!data)
                return;
            this.data = data;
            this.updateState(true);
            if (!data.addPos)
                data.addPos = { x: 0, y: 0 };
            const node = this.data.nodeList[0];
            this.oldZOrder = node.zOrder;
            this.oldParent = node.parent;
            const pos = this.nodeBox.globalToLocal(this.oldParent.localToGlobal(new Laya.Point(node.x, node.y)));
            node.once(Laya.Event.CLICK, this, () => __awaiter(this, void 0, void 0, function* () {
                if (data.step != null) {
                    yield this.updateGuidData(data.step);
                }
                if (data.call) {
                    data.call();
                }
                this.hintLb.visible = false;
                Laya.timer.once(1, this, (_node, _p) => {
                    if (_node && _p) {
                        if (_p.destroyed) {
                            _node.destroy();
                        }
                        else {
                            const pos = _p.globalToLocal(this.nodeBox.localToGlobal(new Laya.Point(_node.x, _node.y)));
                            _p.addChild(_node);
                            _node.zOrder = 0;
                            _node.updateZOrder();
                            _node.pos(pos.x, pos.y);
                        }
                    }
                    switch (data.step) {
                        case 0:
                            MainView.inst.guide();
                            break;
                        case 2:
                            MainView.inst.guide();
                            break;
                        default:
                            break;
                    }
                }, [node, this.oldParent]);
            }));
            this.nodeBox.addChild(node);
            node.pos(pos.x, pos.y);
            Laya.Tween.to(this.guideHand, { x: pos.x + data.addPos.x, y: pos.y + data.addPos.y, alpha: 1 }, 300);
            if (data.text) {
                this.hintLb.visible = true;
                this.hintLb.text = data.text;
                this.hintLb.alpha = 0;
                this.hintLb.pos(pos.x + data.testAddPos.x, pos.y + data.testAddPos.y);
                Laya.timer.once(300, this, () => {
                    Laya.Tween.to(this.hintLb, { x: pos.x + data.testAddPos.x + 50, y: pos.y + data.testAddPos.y, alpha: 1 }, 300);
                });
            }
            else {
                this.hintLb.visible = false;
            }
        }
        updateGuidData(step) {
            UserInfo$1.guideData[step] = "1";
            return HttpControl.inst
                .send({
                api: "/guide",
                data: {
                    data: UserInfo$1.guideData.join(""),
                },
            })
                .then(() => {
                this.canClick = true;
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        updateState(show) {
            let node = this.owner;
            node.visible = show;
            node.disabled = !show;
            node.active = show;
        }
        guidHandAni() {
            this.guidAni = Laya.TimeLine.to(this.guideHand, { rotation: -15 }, 400, null).to(this.guideHand, { rotation: 0 }, 400);
            this.guidAni.play(null, true);
        }
        onHdDestroy() {
            var _a, _b;
            (_a = this.guidAni) === null || _a === void 0 ? void 0 : _a.pause();
            (_b = this.guidAni) === null || _b === void 0 ? void 0 : _b.destroy();
        }
    }
    __decorate([
        Core.eventOn("update_guid"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GuideComponent.prototype, "updateStep", null);
    __decorate([
        Core.eventOn("update_guid_data"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], GuideComponent.prototype, "updateGuidData", null);

    class OrderView extends Core.gameScript {
        constructor() {
            super(...arguments);
            this.orderList = null;
            this.btnLockRes = null;
            this.btnResCur = null;
            this.topDesc = null;
        }
        onOpened() {
            this.dataList = TableAnalyze.table("order").list;
            let orderOldLv = UserInfo$1.orderLevel || 0;
            this.dataList.sort((a, b) => {
                return (a.id + (a.id <= orderOldLv ? 2000 : 0) - (b.id + (b.id <= orderOldLv ? 2000 : 0)));
            });
            this.orderList.array = this.dataList;
            this.orderList.renderHandler = new Laya.Handler(this, this.renderList);
            this.orderList.vScrollBarSkin = null;
            let reward = 0;
            for (let x = 0; x < this.dataList.length; x++) {
                let addDiamond = 0;
                this.dataList[x].condition.forEach((d) => {
                    d.plant.gain.forEach((p) => {
                        if (p.obj.id === ConfigGame.diamondId) {
                            addDiamond += p.count * d.count;
                        }
                    });
                });
                reward +=
                    this.dataList[x].extraReward.count +
                        addDiamond +
                        Math.round(addDiamond * this.dataList[x].commission);
            }
            let withdrawal = TableAnalyze.table("config").get("withdrawal").value;
            this.topDesc.getChildAt(0).text = "完成所有订单可获得";
            this.topDesc.getChildAt(1).text = `${reward}`;
        }
        renderList(cell, i) {
            var _a;
            let d = this.dataList[i], reward, rewardCount = 0, rewardDiamondCount = 0, curCount = 0, maxCount = 0, progress = 0, rewardBox = cell.getChildByName("reward_box"), order_lv = cell.getChildByName("order_lv");
            order_lv.text = `${d.id}级订单`;
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
                        else {
                            rewardDiamondCount += e.count * d.condition[x].count;
                        }
                    });
                }
                else {
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
            if (d.id > UserInfo$1.orderLevel + 1) {
                btn.skin = this.btnLockRes;
                btn.active = false;
                if (d.extraReward) {
                    btn.visible = false;
                    diamond.getChildByName("icon").skin = d.extraReward.obj.icon;
                    diamond.getChildByName("value").text = `+${d.extraReward.count +
                    rewardDiamondCount +
                    Math.floor(rewardDiamondCount * d.commission)}`;
                    diamond.visible = true;
                }
                else {
                    btn.visible = true;
                }
            }
            else {
                if (d.id == UserInfo$1.orderLevel + 1) {
                    if (d.extraReward) {
                        curIcon.visible = true;
                        lv_box.visible = false;
                        btn.visible = false;
                        order_lv.visible = false;
                        diamond.getChildByName("icon").skin = d.extraReward.obj.icon;
                        diamond.getChildByName("value").text = `+${d.extraReward.count +
                        rewardDiamondCount +
                        Math.floor(rewardDiamondCount * d.commission)}`;
                        diamond.visible = true;
                    }
                    else {
                        btn.skin = this.btnResCur;
                    }
                    if (progress == d.condition.length) {
                        receiveBtn.visible = true;
                        rewardBox.visible = false;
                        diamond.visible = false;
                    }
                }
                else {
                    console.log("已完成");
                    btn.active = false;
                    btn.visible = false;
                    finishIcon.visible = true;
                    if (d.extraReward) {
                        rewardBox.y = 57;
                    }
                    else {
                        rewardBox.y = 100;
                    }
                }
            }
            if (reward) {
                rewardBox.getChildByName("icon").skin = reward.obj.icon;
                rewardBox.getChildByName("value").text = `+${Math.floor(rewardCount * (1 + d.commission))}`;
            }
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.OrderView);
                    break;
                case "receive_btn":
                    MainView.inst.hindOrderLevel = 0;
                    Core.eventGlobal.event("update_Order");
                    Core.view.close(Res.views.OrderView);
                    break;
            }
        }
    }

    class OverView extends Core.gameScript {
        onHdEnable() { }
        onOpened(data) {
            if (data === null || data === void 0 ? void 0 : data.call) {
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
                Core.view.close(Res.views.OverView);
            }));
        }
    }

    class SettingView extends Core.gameScript {
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
            Laya.timer.once(300, this, () => {
                AppCore.runAppFunction({
                    uri: "ad",
                    data: { adType: 3 },
                });
            });
            AppCore.runAppFunction({
                uri: "eventCount",
                data: { type: "bottom_advertisement" },
            });
            this.userKey.text = `邀请码：${UserInfo$1.key}`;
            Core.observableProperty
                .watch(UserInfo$1, this)
                .key("avatar", (e) => {
                if (e)
                    this.avatarNode.skin = e;
            })
                .key("nickname", (e) => {
                this.nickname.text = e;
            });
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
                            HttpDataControl$1.loginOut();
                            Laya.timer.frameOnce(1, this, () => {
                                Core.view.loginOut();
                                Core.view.open(Res.views.LoginView, {
                                    parm: {
                                        call: () => {
                                            Core.eventGlobal.event("login_game");
                                        },
                                    },
                                });
                            });
                        },
                        cancelCall: () => { },
                    });
                    break;
                case "user_agreement":
                    AppCore.runAppFunction({ uri: "serviceAgreement", data: {} });
                    break;
                case "privacy":
                    AppCore.runAppFunction({ uri: "privacyAgreement", data: {} });
                    break;
                case "about":
                    Core.view.open(Res.views.AboutView);
                    break;
                case "copy_btn":
                    this.copy();
                    break;
            }
        }
        copy() {
            let a = document.createElement("input");
            document.body.appendChild(a);
            a.value = UserInfo$1.key;
            a.select();
            document.execCommand("copy");
            a.remove();
            Core.view.openHint({ text: "复制成功", call: () => { } });
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
        onHdDestroy() {
            AppCore.runAppFunction({
                uri: "closeAd",
                data: {},
            });
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
                ["game/img_bankNormal.png", "game/img_bankSelected.png"],
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
            Core.observableProperty.watch(UserInfo$1, this).key("diamond", (v) => {
                this.diamondFont.value = v;
                console.log(TableAnalyze.table("config"));
                let withdrawal = TableAnalyze.table("config").get("withdrawal").value;
                this.proportion.text = ` = ¥${((Number(withdrawal[2]) / Number(withdrawal[1])) * v)
                .toString()
                .match(/^\d+(?:\.\d{0,2})?/)}元`;
            });
            this.lockBtnBox.getChildByName("ad_unlock").disabled =
                !UserInfo$1.advertiseTimes;
            this.lockBtnBox.getChildByName("ad_unlock").active = Boolean(UserInfo$1.advertiseTimes);
        }
        onOpened(e) {
            this.data = e;
            this.topBtnSelectIndex = (e === null || e === void 0 ? void 0 : e.id) || 0;
            this.priceDataList = TableAnalyze.table("config").get("withdrawal_times").value;
            this.updateTopBtnState();
            this.canClick = false;
            HttpControl.inst
                .send({ api: "/friend/invite/list" })
                .then((d) => {
                this.canClick = true;
                this.inviteNum = d.list.length;
            })
                .catch(() => {
                this.canClick = true;
            });
            if (MainView.inst.getGuideStep() == 0) {
                Laya.timer.once(300, this, () => {
                    Core.eventGlobal.event("update_guid", {
                        nodeList: [this.itemBuyBtn],
                        call: () => { },
                        addPos: { x: 100, y: 120 },
                        step: 0,
                        text: "购买种子并种植",
                        testAddPos: { x: -30, y: -60 },
                    });
                });
            }
            this.itemBuyBtn.on(Laya.Event.CLICK, this, this.plantBuy);
        }
        plantBuy() {
            var _a, _b;
            if (!this.canClick) {
                return;
            }
            if (this.getDataList()[this.itemListSelectIndex].base.seed_price.count >
                UserInfo$1.gold) {
                Core.view.openHint({
                    text: "金币不足，去仓库出售蔬菜可以获得金币，偷菜获得的蔬菜也可以出售获得金币哦",
                    call: () => { },
                });
                return;
            }
            let landId = (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.parm) === null || _b === void 0 ? void 0 : _b.landId;
            if (!landId) {
                landId = MainView.inst.getEmptyLandId();
            }
            if (!landId) {
                Core.view.openHint({ text: "没有空的土地哦！", call: () => { } });
                return;
            }
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/land/sow",
                data: {
                    landId: landId,
                    plantId: this.getDataList()[this.itemListSelectIndex].base.id,
                    type: ConfigGame.ApiTypeDefault,
                },
            })
                .then(() => {
                var _a;
                ViewManager.inst.close(Res.views.ShopView);
                if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.call) {
                    this.data.call(this.getDataList()[this.itemListSelectIndex]);
                }
                else {
                    Core.eventGlobal.event("plant_sow", [
                        true,
                        this.getDataList()[this.itemListSelectIndex],
                    ]);
                }
            })
                .catch(() => {
                this.canClick = true;
            });
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
            cell.getChildByName("name").text =
                d.base.name + (this.topBtnSelectIndex ? "" : "种子");
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
            var _a, _b, _c;
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
                }
                else if (gainData) {
                    icon = gainData.obj.icon;
                    count = gainData.count * base.harvest;
                }
                itemBox.getChildByName("icon").skin = icon;
                itemBox.getChildByName("count").text = "x" + count;
            }
            let box = this.lockBtnBox.getChildByName("unlock_buy").getChildByName("box");
            box.getChildByName("icon").skin = (_b = (_a = base.unlock_cost) === null || _a === void 0 ? void 0 : _a.obj) === null || _b === void 0 ? void 0 : _b.icon;
            box.getChildByName("value").value = ((_c = base.unlock_cost) === null || _c === void 0 ? void 0 : _c.count) + "";
        }
        onClick(e) {
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
                case "unlock_buy":
                case "ad_unlock":
                    if (!this.canClick) {
                        return;
                    }
                    if (e.target.name == "unlock_buy" &&
                        this.getDataList()[this.itemListSelectIndex].base.unlock_cost
                            .count > UserInfo$1.gold) {
                        Core.view.openHint({
                            text: "金币不足，去仓库出售蔬菜可以获得金币，偷菜获得的蔬菜也可以出售获得金币哦",
                            call: () => { },
                        });
                        return;
                    }
                    this.canClick = false;
                    HttpControl.inst
                        .send({
                        api: "/seeds/unlock",
                        data: {
                            plantId: this.getDataList()[this.itemListSelectIndex].base.id,
                            type: e.target.name == "ad_unlock"
                                ? ConfigGame.ApiTypeAD
                                : ConfigGame.ApiTypeDefault,
                        },
                    })
                        .then((d) => {
                        PlantService$1.list[this.itemListSelectIndex].lock = false;
                        this.itemList.changeItem(this.itemListSelectIndex, PlantService$1.list[this.itemListSelectIndex]);
                        this.canClick = true;
                        if (e.target.name == "ad_unlock") {
                            Core.eventGlobal.event("play_ad_get_reward", [
                                e.target,
                                d.adReward,
                            ]);
                        }
                        else {
                            AppCore.runAppFunction({
                                uri: "eventCount",
                                data: { type: "Freeunlock" },
                            });
                        }
                    })
                        .catch(() => {
                        this.canClick = true;
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
                Core.view.close(Res.views.ShopView);
            }
            else if (node.dataSource == 2) {
                Core.view.close(Res.views.ShopView);
                HttpControl.inst
                    .send({
                    api: "/friend/invite/list",
                    data: {},
                })
                    .then((d) => {
                    Core.view.open(Res.views.FriendsRewardView, {
                        parm: {
                            list: d.list,
                            call: () => { },
                        },
                    });
                });
            }
        }
        openWithdrawRecord() {
            if (!this.canClick) {
                return;
            }
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/withdraw/record",
                data: {},
            })
                .then((d) => {
                this.canClick = true;
                Core.view.open(Res.views.WithdrawRecordView, { parm: d });
            });
        }
        feedBuy() {
            let feed = this.getDataList()[this.itemListSelectIndex];
            if (!feed)
                return;
            if (!this.canClick) {
                return;
            }
            if (!UserInfo$1.warePetId) {
                Core.view.openHint({ text: "您还没有购买宠物哦！", call: () => { } });
                return;
            }
            if (feed.base.cost.count > UserInfo$1.gold) {
                Core.view.openHint({
                    text: "金币不足，去仓库出售蔬菜可以获得金币，偷菜获得的蔬菜也可以出售获得金币哦",
                    call: () => { },
                });
                return;
            }
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/feed/buy",
                data: {
                    feedId: feed.base.id,
                    type: ConfigGame.ApiTypeDefault,
                },
            })
                .then(() => {
                this.canClick = true;
                UserInfo$1.petVitality += feed.base.vitality;
                Core.eventGlobal.event("play_get_reward", {
                    node: this.feedBuyBtn,
                    list: [
                        {
                            obj: feed.base,
                            count: 1,
                            posType: 3,
                        },
                    ],
                    notFly: true,
                });
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        petGoWatch(petId) {
            if (!this.canClick) {
                return;
            }
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/pet/wear",
                data: {
                    petId: petId,
                    type: ConfigGame.ApiTypeDefault,
                },
            })
                .then(() => {
                UserInfo$1.warePetId = petId;
                this.canClick = true;
                this.updatePet();
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        petBuy() {
            let { base } = PetService$1.list[this.selectPetIndex];
            if (!this.canClick) {
                return;
            }
            if (PetService$1.list[this.selectPetIndex].base.cost.count > UserInfo$1.gold) {
                Core.view.openHint({
                    text: "金币不足，去仓库出售蔬菜可以获得金币，偷菜获得的蔬菜也可以出售获得金币哦",
                    call: () => { },
                });
                return;
            }
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/pet/buy",
                data: {
                    petId: base.id,
                    type: ConfigGame.ApiTypeDefault,
                },
            })
                .then(() => {
                this.canClick = true;
                PetService$1.list[this.selectPetIndex].lock = false;
                this.updatePet();
                if (!UserInfo$1.warePetId)
                    UserInfo$1.warePetId = base.id;
                if (!UserInfo$1.petVitality) {
                    UserInfo$1.petVitality = base.vitality_max;
                    UserInfo$1.digestCountDown = TableAnalyze.table("config").get("petDigestIntervalTime").value;
                }
            })
                .catch(() => {
                this.canClick = true;
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
                    this.priceList.array = this.priceDataList;
                    break;
            }
        }
        updatePet() {
            if (!PetService$1.list.length)
                PetService$1.init([]);
            let pet = PetService$1.list[this.selectPetIndex];
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
        onPriceSelect(e) {
            this.priceSelectIndex = e;
            this.updatePriceDesc();
        }
        updatePriceDesc() {
            let data = TableAnalyze.table("config").get("withdrawal_times").value[this.priceSelectIndex];
            let desc = this.conditionBox.getChildByName("desc");
            let barBox = this.conditionBox.getChildByName("bar_box");
            let btn = this.conditionBox.getChildByName("go_jump");
            this.conditionBox.visible = false;
            if (UserInfo$1.orderLevel < data.orderLv) {
                this.conditionBox.visible = true;
                this.descPriceBox.visible = false;
                desc.getChildByName("lb1").text = `订单`;
                desc.getChildByName("lb2").text = `${data.orderLv}`;
                desc.getChildByName("lb3").text = `级即可提现`;
                barBox.getChildByName("bar").width =
                    (UserInfo$1.orderLevel > data.orderLv ? 1 : UserInfo$1.orderLevel / data.orderLv) * 434;
                barBox.getChildByName("lb").text = `${UserInfo$1.orderLevel > data.orderLv ? data.orderLv : UserInfo$1.orderLevel}/${data.orderLv}`;
                btn.skin = `game/img_goToWork.png`;
                btn.dataSource = 1;
                this.canPrice = false;
                return;
            }
            if (this.inviteNum < data.inviteAmount) {
                this.conditionBox.visible = true;
                this.descPriceBox.visible = false;
                desc.getChildByName("lb1").text = `邀请`;
                desc.getChildByName("lb2").text = `${data.inviteAmount}`;
                desc.getChildByName("lb3").text = `个好友即可提现`;
                barBox.getChildByName("bar").width =
                    (this.inviteNum > data.inviteAmount ? 1 : this.inviteNum / data.inviteAmount) * 434;
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
                Core.view.openHint({ text: "提现条件不满足", call: () => { } });
                return;
            }
            if (this.priceSelectIndex == null) {
                Core.view.openHint({ text: "选择要提现的金额", call: () => { } });
                return;
            }
            if (!this.canClick) {
                return;
            }
            if (!BindWx.isBindWx) {
                return;
            }
            this.canClick = false;
            HttpControl.inst
                .send({
                api: "/withdraw",
                data: { id: this.priceSelectIndex },
            })
                .then((d) => {
                this.canClick = true;
                Core.view.openHint({ text: "提现成功", call: () => { } });
                UserInfo$1.withdraw = d.list;
                UserInfo$1.diamond = d.diamond;
                this.priceList.refresh();
                AppCore.runAppFunction({
                    uri: "eventCount",
                    data: { type: "Withdrawal" },
                });
            })
                .catch(() => {
                this.canClick = true;
            });
        }
        updatePriceItem(cell, i) {
            let data = this.priceDataList[i];
            let userData = { id: 0, times: 0 };
            const userDataList = UserInfo$1.withdraw;
            for (let x = 0; x < userDataList.length; x++) {
                if (userDataList[x].id == i) {
                    userData = userDataList[x];
                    break;
                }
            }
            cell.getChildByName("value").text = data.price + "元";
            if (data.times) {
                let times = data.times - userData.times;
                cell.getChildByName("times_box").visible = true;
                if (times <= 0) {
                    cell.disabled = true;
                }
                cell.getChildByName("times_box").visible = false;
            }
            else {
                cell.getChildByName("times_box").visible = false;
            }
            if (this.priceList.selectedIndex === i) {
                cell.getChildByName("bg").skin = "game/img_priceselected.png";
            }
            else {
                cell.getChildByName("bg").skin = "game/img_pricenormal.png";
            }
        }
    }

    class SignInDescView extends Core.gameScript {
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.SignInDescView);
                    break;
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
            this.finishIcon.visible = UserInfo$1.speedUpTimes >= ConfigGame.ADSpeedUpTimes;
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
                case "desc_btn":
                    Core.view.open(Res.views.SignInDescView);
                    break;
                case "get_btn":
                    const signInId = e.target["dataSource"];
                    HttpControl.inst
                        .send({
                        api: "/signIn/reward",
                        data: { type: ConfigGame.ApiTypeAD, signInId: signInId },
                    })
                        .then(() => {
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
                    });
                    break;
            }
        }
    }

    class SpeedUpView extends Core.gameScript {
        constructor() {
            super(...arguments);
            this.canClick = true;
        }
        onOpened(data) {
            this.call = data.call;
            let time = TableAnalyze.table("config").get("all_speed_up_time").value;
            this.timeLb.text = `${Math.ceil(time / 60)}分钟`;
            this.timesLb.text = `今日剩余${UserInfo$1.advertiseTimes}次`;
            if (UserInfo$1.advertiseTimes <= 0) {
                this.speedUpBtn.disabled = true;
            }
            Laya.timer.once(300, this, () => {
                AppCore.runAppFunction({
                    uri: "ad",
                    data: { adType: 3 },
                });
                AppCore.runAppFunction({
                    uri: "ad",
                    data: { adType: 2 },
                });
                AppCore.runAppFunction({
                    uri: "eventCount",
                    data: { type: "half_screen_advertisement" },
                });
                AppCore.runAppFunction({
                    uri: "eventCount",
                    data: { type: "bottom_advertisement" },
                });
            });
            if (MainView.inst.getGuideStep() == 1) {
                Laya.timer.once(300, this, () => {
                    Core.eventGlobal.event("update_guid", {
                        nodeList: [this.speedUpBtn],
                        call: () => { },
                        addPos: { x: 100, y: 120 },
                    });
                });
            }
            this.speedUpBtn.on(Laya.Event.CLICK, this, () => {
                if (!this.canClick)
                    return;
                this.canClick = false;
                HttpControl.inst
                    .send({
                    api: "/land/speedUp",
                    data: { type: ConfigGame.ApiTypeAD },
                })
                    .then((d) => {
                    UserInfo$1.speedUpTimes = d.speedUpTimes;
                    UserInfo$1.advertiseTimes = d.advertiseTimes;
                    if (UserInfo$1.speedUpTimes == ConfigGame.ADSpeedUpTimes) {
                        UserInfo$1.signInDays++;
                        AppCore.runAppFunction({
                            uri: "eventCount",
                            data: { type: "punchtheclock" },
                        });
                    }
                    AppCore.runAppFunction({
                        uri: "eventCount",
                        data: { type: "Advertisingacceleration" },
                    });
                    Core.view.close(Res.views.SpeedUpView);
                    Core.eventGlobal.event("land_speed_up");
                    Core.eventGlobal.event("play_ad_get_reward", [
                        this.speedUpBtn,
                        d.adReward,
                    ]);
                    if (this.call)
                        this.call();
                    if (MainView.inst.getGuideStep() == 1) {
                        Core.eventGlobal.event("update_guid_data", 1);
                        MainView.inst.guide();
                    }
                });
            });
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.SpeedUpView);
                    break;
                case "speed_up":
                    break;
            }
        }
        onHdDestroy() {
            AppCore.runAppFunction({
                uri: "closeAd",
                data: {},
            });
        }
    }

    class TaskView extends GameScript {
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
            this.taskList.array = TaskService$1.getList();
        }
        itemRender(cell, i) {
            let obj = TaskService$1.list[i].base;
            const task = TaskService$1.getTask(obj === null || obj === void 0 ? void 0 : obj.id);
            if (!task) {
                Core.view.openHint({ text: `任务配置出错,配置不存在`, call: () => { } });
                return;
            }
            cell.getChildByName("icon").skin = obj.icon;
            cell.getChildByName("title").text = obj.title;
            cell.getChildByName("desc").text = `${obj.desc}(${((task === null || task === void 0 ? void 0 : task.times) > obj.times ? obj.times : task === null || task === void 0 ? void 0 : task.times) || 0}/${obj.times})`;
            const rewardBox = cell.getChildByName("reward");
            rewardBox.getChildByName("icon").skin = obj.reward.obj.icon;
            if (obj.id === 1012) {
                const reward = TableAnalyze.table("config").get("Videorewards").value.count;
                let price = obj.reward.count + (obj.times - ((task === null || task === void 0 ? void 0 : task.times) || 0)) * reward;
                if (price < obj.reward.count) {
                    price = obj.reward.count;
                }
                rewardBox.getChildByName("amount").text = "x" + price;
            }
            else {
                rewardBox.getChildByName("amount").text = "x" + obj.reward.count;
            }
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
                    if (!this.canClick)
                        return;
                    let btnObj = e.target["dataSource"];
                    this.canClick = false;
                    if (btnObj.ok) {
                        HttpControl.inst
                            .send({
                            api: "/task/reward",
                            data: { type: ConfigGame.ApiTypeDefault, taskId: btnObj.id },
                        })
                            .then(() => {
                            const task = TaskService$1.getTask(btnObj.id);
                            task.receive = 1;
                            btnObj.ok = false;
                            this.canClick = true;
                            Laya.timer.frameOnce(1, this, () => {
                                this.updateTaskList();
                                this.taskList.refresh();
                                Core.eventGlobal.event("update_task");
                            });
                            Core.eventGlobal.event("play_get_reward", {
                                node: e.target,
                                list: [
                                    {
                                        obj: task.base.reward.obj,
                                        count: task.base.reward.count,
                                        posType: task.base.reward.obj.id == ConfigGame.diamondId ? 2 : 1,
                                    },
                                ],
                            });
                        });
                    }
                    else {
                        this.jump(btnObj.id, e.target);
                    }
                    break;
            }
        }
        jump(id, target) {
            return __awaiter(this, void 0, void 0, function* () {
                let adData;
                switch (id) {
                    case 1012:
                    case 1001:
                        adData = yield AppCore.runAppFunction({
                            uri: "ad",
                            data: {},
                            timestamp: Date.now(),
                        });
                        if (adData === null || adData === void 0 ? void 0 : adData.code) {
                            Core.view.openHint({ text: `广告播放失败[${adData.code}]`, call: () => { } });
                            this.canClick = true;
                            return;
                        }
                        HttpControl.inst
                            .send({
                            api: "/ad",
                            data: {
                                taskId: id == 1012 ? 1012 : null,
                            },
                        })
                            .then((d) => {
                            Core.eventGlobal.event("play_ad_get_reward", [target, d.adReward]);
                            this.taskList.refresh();
                            TaskService$1.taskAddTimes(1001);
                            if (id == 1012)
                                TaskService$1.taskAddTimes(1012);
                            this.canClick = true;
                            if (UserInfo$1.days > 1) {
                                HttpControl.inst.send({
                                    api: "/ad/record/not/click",
                                    data: { times: UserInfo$1.continuousAdTimes },
                                });
                            }
                        });
                        if (adData === null || adData === void 0 ? void 0 : adData.data["hasClicked"]) {
                            UserInfo$1.continuousAdTimes = 0;
                        }
                        else {
                            UserInfo$1.continuousAdTimes++;
                        }
                        break;
                    case 1002:
                    case 1003:
                        Core.view.close(Res.views.TaskView);
                        break;
                    case 1004:
                        Core.view.close(Res.views.TaskView);
                        Core.eventGlobal.event("open_friend");
                        break;
                    case 1005:
                        Core.view.close(Res.views.TaskView);
                        Core.view.open(Res.views.ShopView, { parm: { id: 1 } });
                        break;
                    case 1006:
                        Core.view.close(Res.views.TaskView);
                        Core.view.open(Res.views.ShopView, { parm: { id: 1 } });
                        break;
                    case 1007:
                        Core.view.close(Res.views.TaskView);
                        Core.eventGlobal.event("plant_sow");
                        break;
                    case 1008:
                        Core.view.close(Res.views.TaskView);
                        Core.view.open(Res.views.WarehouseView);
                        break;
                    case 1009:
                        Core.view.close(Res.views.TaskView);
                        Core.eventGlobal.event("open_friend");
                        break;
                    case 1010:
                        Core.view.close(Res.views.TaskView);
                        AppCore.runAppFunction({
                            uri: "wxShare",
                            data: {},
                            timestamp: Date.now(),
                        }).then((d) => {
                            if (!d || (d === null || d === void 0 ? void 0 : d.code)) {
                                Core.view.openHint({ text: d.data["message"], call: () => { } });
                            }
                            else {
                                Core.view.openHint({ text: d.data["message"], call: () => { } });
                                HttpControl.inst
                                    .send({
                                    api: "/friend/share",
                                })
                                    .then(() => {
                                    TaskService$1.taskAddTimes(1010);
                                    AppCore.runAppFunction({
                                        uri: "eventCount",
                                        data: { type: "share" },
                                    });
                                });
                            }
                        });
                        break;
                    case 1011:
                        Core.view.close(Res.views.TaskView);
                        Core.eventGlobal.event("plant_sow");
                        break;
                }
            });
        }
    }

    let sellNum = 0;
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
            this.empty_lb = null;
            this.dataList = [];
            this.selectItemIndex = "0,0";
            this.selectItemSellCount = 0;
            this.unitPriceGold = 0;
            this.unitPriceDiamond = 0;
            this.canClick = true;
        }
        onOpened() {
            Core.audio.playSound(Res.audios.dakaicangku);
            this.sellAdBtn.disabled = !UserInfo$1.advertiseTimes;
            this.sellAdBtn.active = Boolean(UserInfo$1.advertiseTimes);
            Laya.timer.once(300, this, () => {
                AppCore.runAppFunction({
                    uri: "ad",
                    data: { adType: 3 },
                });
            });
            AppCore.runAppFunction({
                uri: "eventCount",
                data: { type: "bottom_advertisement" },
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
            if (MainView.inst.getGuideStep() == 3) {
                Laya.timer.once(300, this, () => {
                    Core.eventGlobal.event("update_guid", {
                        nodeList: [this.sellBtn],
                        call: () => {
                            this.onClick({ target: { name: "sellBtn" } });
                            Laya.timer.frameOnce(6, this, () => {
                                MainView.inst.guide();
                                Core.view.close(Res.views.WarehouseView);
                            });
                        },
                        addPos: { x: 100, y: 120 },
                        step: 3,
                        text: "出售作物\n可获得金币或钻石",
                        testAddPos: { x: 0, y: -150 },
                    });
                });
            }
        }
        updateList() {
            let i = 0, y = 0, hasSelect = false;
            WarehouseService$1.list.forEach((d) => {
                var _a;
                if (!this.dataList[y])
                    this.dataList[y] = [];
                this.dataList[y].push(d);
                if (d.base.id == ((_a = this.selectItemData) === null || _a === void 0 ? void 0 : _a.base.id)) {
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
                    if (!this.canClick) {
                        return;
                    }
                    else {
                        this.canClick = false;
                        let btnName = e.target.name, target = e.target;
                        if (btnName == "sellBtn") {
                            if (sellNum && !(sellNum % 10)) {
                                AppCore.runAppFunction({
                                    uri: "ad",
                                    data: { adType: 1 },
                                });
                                AppCore.runAppFunction({
                                    uri: "eventCount",
                                    data: { type: "full_Screen" },
                                });
                            }
                            sellNum++;
                        }
                        HttpControl.inst
                            .send({
                            api: "/warehouse/sell",
                            data: {
                                id: this.selectItemData.base.id,
                                amount: this.selectItemSellCount,
                                type: btnName == "sellBtn"
                                    ? ConfigGame.ApiTypeDefault
                                    : ConfigGame.ApiTypeAD,
                            },
                        })
                            .then((d) => {
                            this.sellAdBtn.disabled = !UserInfo$1.advertiseTimes;
                            this.sellAdBtn.active = Boolean(UserInfo$1.advertiseTimes);
                            this.canClick = true;
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
                                        (btnName == "sellBtnAd" ? 2 : 1),
                                    posType: 1,
                                });
                            }
                            if (this.unitPriceDiamond) {
                                rewardList.push({
                                    obj: TableAnalyze.table("currency").get(ConfigGame.diamondId),
                                    count: this.selectItemSellCount *
                                        this.unitPriceDiamond *
                                        (btnName == "sellBtnAd" ? 2 : 1),
                                    posType: 2,
                                });
                            }
                            if (btnName == "sellBtnAd") {
                                Core.eventGlobal.event("play_ad_get_reward", [
                                    target,
                                    d.adReward,
                                ]);
                                AppCore.runAppFunction({
                                    uri: "eventCount",
                                    data: { type: "Doublesale" },
                                });
                            }
                            Core.eventGlobal.event("play_get_reward", {
                                node: this.sellBtn,
                                list: rewardList,
                                callBack: () => { },
                            });
                            if (UserInfo$1.adTimes > 100 || UserInfo$1.continuousAdTimes > 20) {
                                AppCore.runAppFunction({
                                    uri: "ad",
                                    data: { adType: 1 },
                                });
                                AppCore.runAppFunction({
                                    uri: "ad",
                                    data: { adType: 3 },
                                });
                                AppCore.runAppFunction({
                                    uri: "eventCount",
                                    data: { type: "full_Screen" },
                                });
                                AppCore.runAppFunction({
                                    uri: "eventCount",
                                    data: { type: "bottom_advertisement" },
                                });
                            }
                        })
                            .catch(() => {
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
            this.selectItemSellCount = d.count;
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
        onHdDestroy() {
            AppCore.runAppFunction({
                uri: "closeAd",
                data: {},
            });
        }
    }

    class WithdrawRecordView extends Core.gameScript {
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
            let withdrawal = TableAnalyze.table("config").get("withdrawal").value;
            cell.getChildByName("state_box").getChildByName("price").text = `${((Number(withdrawal[2]) / Number(withdrawal[1])) *
            d.diamond)
            .toString()
            .match(/^\d+(?:\.\d{0,2})?/)}元`;
            state.text = `${d.state ? "审核中" : "已到账"}`;
            state.color = d.state ? "#E93636" : "#5A3F2A";
        }
        onClick(e) {
            switch (e.target.name) {
                case "close":
                    Core.view.close(Res.views.WithdrawRecordView);
                    break;
            }
        }
    }

    class GameConfig {
        constructor() { }
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
            reg("view/HintView.ts", HintView);
            reg("view/LoginView.ts", LoginView);
            reg("view/MailDescView.ts", MailDescView);
            reg("view/MailView.ts", MailView);
            reg("view/MainView.ts", MainView);
            reg("components/FigureAni.ts", FigureAni);
            reg("components/FieldComponent.ts", FieldComponent);
            reg("components/RedDotComponent.ts", RedDotComponent);
            reg("components/GuideComponent.ts", GuideComponent);
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
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
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
            BUILD_TYPE == "debug" && GameConfig.stat && Laya.Stat.show();
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
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
                AppCore.listenAppFunction();
                yield new Promise((resolve) => {
                    ViewManager.inst.open(Res.views.LoginView, {
                        showLoad: false,
                        parm: {
                            call: (d) => {
                                this.initGameData(d);
                                resolve(null);
                            },
                        },
                        complete: (e) => {
                            Laya.timer.frameOnce(1, this, () => {
                                AppCore.runAppFunction({ uri: "closeImage", data: {} });
                            });
                        },
                    });
                });
                this.loginGame();
            });
        }
        loginGame() {
            Laya.loader.load(["scenes/views/MainView.scene", "main_scene/img_landUpdate1.png"], Laya.Handler.create(this, () => {
                console.log("ok");
                Core.audio.playMusic(Res.audios.BGM, 0);
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
