/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import LoadView from "./view/LoadView"
import MainView from "./view/MainView"
import Button from "./components/Button"
import ShaderSpriteBase from "./core/ShaderSpriteBase"
import TaskControl from "./view/TaskControl"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=750;
    static height:number=1334;
    static scaleMode:string="fixedwidth";
    static screenMode:string="vertical";
    static alignV:string="middle";
    static alignH:string="center";
    static startScene:any="scenes/views/MainView.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=true;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("view/LoadView.ts",LoadView);
        reg("view/MainView.ts",MainView);
        reg("components/Button.ts",Button);
        reg("core/ShaderSpriteBase.ts",ShaderSpriteBase);
        reg("view/TaskControl.ts",TaskControl);
    }
}
GameConfig.init();