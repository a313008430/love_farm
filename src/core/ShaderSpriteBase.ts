import GameScript from "./GameScript";

import fs from "../shader/ppppp.fs";
import vs from "../shader/vvvv.vs";

/**
 * shader
 */
export default class ShaderSpriteBase extends GameScript {
    /** @prop {name:shaderImage, tips:"shader用的图", type:Node}*/
    private shaderImage: Laya.Sprite = null;

    onHdEnable() {
        this.shaderImage.customRenderEnable = true;

        Config["customRenderID"].push(this.shaderImage.texture.bitmap["_id"]);

        let shader = new Laya.Value2D(
            Laya.ShaderDefines2D.TEXTURE2D,
            this.shaderImage.texture.bitmap["_id"]
        );
        shader.shader = new Laya.Shader2X(
            vs,
            fs,
            Laya.ShaderDefines2D.TEXTURE2D | this.shaderImage.texture.bitmap["_id"]
        );

        // shader["myTime"] = 0.1;

        this.shaderImage.customRender = (context: Laya.Context, x, y) => {
            context.drawTarget(
                this.shaderImage.texture as any,
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
