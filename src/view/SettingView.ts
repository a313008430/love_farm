import { EventMaps } from "src/common/EventMaps";
import HttpDataControl from "src/common/HttpDataControl";
import Res from "src/common/Res";
import Core from "src/core/index";
import LocalStorageService from "src/dataService/LocalStorageService";

//class SettingView extends Laya.Script
export default class SettingView extends Core.gameScript {
    /** @prop {name:musicNode, tips:"音乐按钮", type:Node}*/
    private musicNode: Laya.Box = null;
    /** @prop {name:soundNode, tips:"音效按钮", type:Node}*/
    private soundNode: Laya.Box = null;

    onOpened() {
        this.musicChange();
        this.soundChange();
    }

    onClick(e: Laya.Event) {
        console.log(e.target.name);
        switch (e.target.name) {
            case "close":
                Core.view.close(Res.views.SettingView);
                break;

            case "music":
                Core.audio.playSound(Res.audios.button_click);
                Core.audio.musicMuted = !Core.audio.musicMuted;
                LocalStorageService.setJSON("music", Core.audio.musicMuted);

                this.musicChange();

                break;
            case "sound":
                Core.audio.playSound(Res.audios.button_click);
                Core.audio.soundMuted = !Core.audio.soundMuted;
                LocalStorageService.setJSON("sound", Core.audio.soundMuted);

                this.soundChange();

                break;

            case "sign_out":
                Core.view.openHint({
                    text: "确认要退出登录？",
                    call: () => {
                        LocalStorageService.setJSON("isLogin", false);
                        LocalStorageService.setJSON("token", null);
                        HttpDataControl.loginOut();
                        Laya.timer.frameOnce(1, this, () => {
                            Core.view.loginOut();
                            Core.view.open(Res.views.LoginView, {
                                parm: {
                                    call: () => {
                                        Core.eventGlobal.event(EventMaps.login_game);
                                    },
                                },
                            });
                        });
                    },
                    cancelCall: () => {},
                });
                break;
        }
    }

    private musicChange() {
        const box = this.musicNode.getChildByName("box") as Laya.Image;
        const icon = box.getChildByName("icon") as Laya.Image;

        let music = Core.audio.musicMuted;
        console.log(music);

        icon.x = !music ? -14 : 91;
        icon.skin = !music ? `game/img_musicOnBtn.png` : "game/img_musicOffBtn.png";
        box.skin = !music ? `game/img_switchOn.png` : "game/img_swithOff.png";
    }

    private soundChange() {
        const box = this.soundNode.getChildByName("box") as Laya.Image;
        const icon = box.getChildByName("icon") as Laya.Image;
        let sound = Core.audio.soundMuted;
        icon.x = !sound ? -14 : 91;
        icon.skin = !sound ? `game/img_musicOnBtn.png` : "game/img_musicOffBtn.png";
        box.skin = !sound ? `game/img_switchOn.png` : "game/img_swithOff.png";
    }
}
