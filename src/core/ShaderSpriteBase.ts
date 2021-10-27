import GameScript from "./GameScript";

import fs from "../shader/ppppp.fs";
import vs from "../shader/vvvv.vs";
import Core from "./index";

/**
 * shader
 */
//  ShaderSpriteBase extends Laya.Script {
export default class ShaderSpriteBase extends GameScript {
    @Core.findByName
    private icon: Laya.Image = null;
    private shaderImage: Laya.Image = null;

    onHdEnable() {
        this.shaderImage = this.icon;
        this.shaderImage.customRenderEnable = true;

        console.log(this.shaderImage);
        // return;

        let id = this.shaderImage["$_GID"];

        Config["customRenderID"].push(id);
        Laya.Filter;
        // this.shaderImage.filters

        let shader = new Laya.Value2D(Laya.ShaderDefines2D.TEXTURE2D, id);
        shader.shader = new Laya.Shader2X(vs, fs, Laya.ShaderDefines2D.TEXTURE2D | id);

        // shader["myTime"] = 0.1;

        this.shaderImage.customRender = (context: Laya.Context, x, y) => {
            context.drawTarget(
                this.shaderImage["_bitmap"]["_drawGridCmd"].texture as any,
                x,
                y,
                this.shaderImage.width,
                this.shaderImage.height,
                null,
                shader
            );
        };

        this.shader = shader;
    }
    shader = {};
    time: number = 0;
    point: number = 0;
    onHdUpdate() {
        this.time += 0.1;
        this.shader["myTime"] = this.time;
        this.shader["u_DissolveThreshold"] = this.time;
        if (this.point > 20) this.point = 0;
        this.point += 1;
        this.shader["u_point"] = this.point;
    }
}
