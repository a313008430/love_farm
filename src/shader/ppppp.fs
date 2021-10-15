precision mediump float;
varying vec2 v_texcoord;
varying vec4 v_color;
uniform sampler2D texture;
// 自定义属性
uniform float u_DissolveThreshold;

varying vec4 v_texcoordAlpha;

void main(){
    // vec4 noiseTexValue = texture2D(texture, v_texcoordAlpha.xy);
    // gl_FragColor = texture2D(texture, v_texcoordAlpha.xy +  sin( (u_DissolveThreshold +(v_texcoordAlpha.x * 10.6 + v_texcoordAlpha.y * 10.)   )  ) * 0.01);
    gl_FragColor = texture2D(texture, v_texcoordAlpha.xy );
}