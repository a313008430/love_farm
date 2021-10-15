//顶点着色器   直接使用的是laya官方自带的 
attribute vec4 posuv;
attribute vec4 attribColor;
attribute vec4 attribFlags;
attribute vec4 clipDir;
attribute vec2 clipRect;
uniform vec4 clipMatDir;
uniform vec2 clipMatPos;
varying vec2 cliped;
uniform vec2 size;
uniform vec2 clipOff;
#ifdef WORLDMAT
    uniform mat4 mmat;
#endif
#ifdef MVP3D
    uniform mat4 u_MvpMatrix;
#endif
varying vec4 v_texcoordAlpha;
varying vec4 v_color;
varying float v_useTex;

uniform float myTime;
uniform float u_point;

void main() {
    vec4 pos = vec4(posuv.xy,0.,1.);
    #ifdef WORLDMAT
        pos=mmat*pos;
    #endif
    vec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);
    #ifdef MVP3D
        gl_Position=u_MvpMatrix*pos1;
    #else
        // if(pos1.x < 0.5){
        //     gl_Position=vec4(pos1.x * sin(-myTime * 0.01)  , pos1.y* sin(myTime * 0.01) , pos1.z, pos1.w);
        // }else{
            // gl_Position=vec4(pos1.xy +  sin( (myTime +(pos1.x*10. + pos1.y)*120.  )  ) * 0.02*cos(pos1.y*2.0 )  , pos1.z, pos1.w );
            
            // + u_point * (918.0 / 20.0) + cos((u_point * 0.3) + myTime) * 20.0
            if( pos1.x< 0.3){
                 gl_Position=vec4(pos1.x   , pos1.y + sin(  myTime) * 0.01, pos1.z, pos1.w );
            }
            else{
                 gl_Position=vec4(pos1.x   , pos1.y , pos1.z, pos1.w );
            }
           
        // }
        
    #endif
    v_texcoordAlpha.xy = posuv.zw;
    v_texcoordAlpha.z = attribColor.a/255.0;
    v_color = attribColor/255.0;
    v_color.xyz*=v_color.w;
    v_useTex = attribFlags.r/255.0;
    float clipw = length(clipMatDir.xy);
    float cliph = length(clipMatDir.zw);
    vec2 clpos = clipMatPos.xy;
    #ifdef WORLDMAT
    if(clipOff[0]>0.0){
        clpos.x+=mmat[3].x;
        clpos.y+=mmat[3].y;
    }
    #endif
    vec2 clippos = pos.xy - clpos;

    if(clipw>20000. && cliph>20000.)
        cliped = vec2(0.0,0.0);
    else {
        cliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);
    }
}