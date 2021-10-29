/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import Button from "./components/Button"
import ViewShowAni from "./components/ViewShowAni"
import AddLandView from "./view/AddLandView"
import FieldLevelUpView from "./view/FieldLevelUpView"
import LoadView from "./view/LoadView"
import MailView from "./view/MailView"
import MainView from "./view/MainView"
import FieldComponent from "./components/FieldComponent"
import OrderView from "./view/OrderView"
import SettingView from "./view/SettingView"
import ShopView from "./view/ShopView"
import FloatViewShowAni from "./components/FloatViewShowAni"
import SignInView from "./view/SignInView"
import TaskView from "./view/TaskView"
import WarehouseView from "./view/WarehouseView"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=1080;
    static height:number=1920;
    static scaleMode:string="fixedwidth";
    static screenMode:string="none";
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
        reg("components/Button.ts",Button);
        reg("components/ViewShowAni.ts",ViewShowAni);
        reg("view/AddLandView.ts",AddLandView);
        reg("view/FieldLevelUpView.ts",FieldLevelUpView);
        reg("view/LoadView.ts",LoadView);
        reg("view/MailView.ts",MailView);
        reg("view/MainView.ts",MainView);
        reg("components/FieldComponent.ts",FieldComponent);
        reg("view/OrderView.ts",OrderView);
        reg("view/SettingView.ts",SettingView);
        reg("view/ShopView.ts",ShopView);
        reg("components/FloatViewShowAni.ts",FloatViewShowAni);
        reg("view/SignInView.ts",SignInView);
        reg("view/TaskView.ts",TaskView);
        reg("view/WarehouseView.ts",WarehouseView);
    }
}
GameConfig.init();