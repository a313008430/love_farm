export default class AudioControl {
    playSound(
        url: string,
        loops?: number,
        complete?: Handler,
        soundClass?: new () => any,
        startTime?: number
    ) {
        Laya.SoundManager.playSound(url, loops, complete, soundClass, startTime);
    }

    /** 所有音效（不包括背景音乐）是否静音。 */
    set soundMuted(state) {
        Laya.SoundManager.soundMuted = state;
    }
    get soundMuted() {
        return Laya.SoundManager.soundMuted;
    }

    /** 背景音乐（不包括音效）是否静音 */
    set musicMuted(state) {
        Laya.SoundManager.musicMuted = state;
    }
    get musicMuted() {
        return Laya.SoundManager.musicMuted;
    }
}
