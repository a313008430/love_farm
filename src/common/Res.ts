//代码生成，不要手动修改

/**
 * 界面列表
 */
 export enum views 
    {
        /** scenes/views/LoadDialog.scene */
        LoadDialog = "scenes/views/LoadDialog.scene", 
        /** scenes/views/MainView.scene */
        MainView = "scenes/views/MainView.scene", 
        /** scenes/views/ShopView.scene */
        ShopView = "scenes/views/ShopView.scene", 
        /** scenes/views/TaskView.scene */
        TaskView = "scenes/views/TaskView.scene", 
    }

 export enum audios 
    {
        /** audio/win.mp3 */
        win = "res/audio/win.mp3", 
        /** audio/ready.mp3 */
        ready = "res/audio/ready.mp3", 
        /** audio/move.mp3 */
        move = "res/audio/move.mp3", 
        /** audio/go.mp3 */
        go = "res/audio/go.mp3", 
        /** audio/fail.mp3 */
        fail = "res/audio/fail.mp3", 
        /** audio/draw.mp3 */
        draw = "res/audio/draw.mp3", 
    }

/**
 * 界面列表
 */
 export const scenes = [
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
            "res/atlas/game.atlas"];
    

/**
 * 所有资源
 */
const Res = {
    views: views,
    scenes: scenes,
    audios: audios,
};

export default Res;
