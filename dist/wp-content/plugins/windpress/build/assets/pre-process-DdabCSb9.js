var Vo=Object.defineProperty;var Xt=e=>{throw TypeError(e)};var Uo=(e,r,o)=>r in e?Vo(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;var Ae=(e,r,o)=>Uo(e,typeof r!="symbol"?r+"":r,o),Wo=(e,r,o)=>r.has(e)||Xt("Cannot "+o);var er=(e,r,o)=>r.has(e)?Xt("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,o);var Ee=(e,r,o)=>(Wo(e,r,"access private method"),o);var be,Jt,kt,yt,Lo;import{s as tr,t as G}from"./chunk-BP1tGd43.min.js";import{t as rr}from"./chunk-HTB5LLOP-BErhSb2z.min.js";import{n as qo}from"./lib-DdqEuSaZ.min.js";import{t as Bo}from"./path-browserify-QbCHt7ci.min.js";import{n as Yo,r as Qo,t as $t,u as Go}from"./cssesc-CRBmtthf.js";var Ho=new Set("black.silver.gray.white.maroon.red.purple.fuchsia.green.lime.olive.yellow.navy.blue.teal.aqua.aliceblue.antiquewhite.aqua.aquamarine.azure.beige.bisque.black.blanchedalmond.blue.blueviolet.brown.burlywood.cadetblue.chartreuse.chocolate.coral.cornflowerblue.cornsilk.crimson.cyan.darkblue.darkcyan.darkgoldenrod.darkgray.darkgreen.darkgrey.darkkhaki.darkmagenta.darkolivegreen.darkorange.darkorchid.darkred.darksalmon.darkseagreen.darkslateblue.darkslategray.darkslategrey.darkturquoise.darkviolet.deeppink.deepskyblue.dimgray.dimgrey.dodgerblue.firebrick.floralwhite.forestgreen.fuchsia.gainsboro.ghostwhite.gold.goldenrod.gray.green.greenyellow.grey.honeydew.hotpink.indianred.indigo.ivory.khaki.lavender.lavenderblush.lawngreen.lemonchiffon.lightblue.lightcoral.lightcyan.lightgoldenrodyellow.lightgray.lightgreen.lightgrey.lightpink.lightsalmon.lightseagreen.lightskyblue.lightslategray.lightslategrey.lightsteelblue.lightyellow.lime.limegreen.linen.magenta.maroon.mediumaquamarine.mediumblue.mediumorchid.mediumpurple.mediumseagreen.mediumslateblue.mediumspringgreen.mediumturquoise.mediumvioletred.midnightblue.mintcream.mistyrose.moccasin.navajowhite.navy.oldlace.olive.olivedrab.orange.orangered.orchid.palegoldenrod.palegreen.paleturquoise.palevioletred.papayawhip.peachpuff.peru.pink.plum.powderblue.purple.rebeccapurple.red.rosybrown.royalblue.saddlebrown.salmon.sandybrown.seagreen.seashell.sienna.silver.skyblue.slateblue.slategray.slategrey.snow.springgreen.steelblue.tan.teal.thistle.tomato.turquoise.violet.wheat.white.whitesmoke.yellow.yellowgreen.transparent.currentcolor.canvas.canvastext.linktext.visitedtext.activetext.buttonface.buttontext.buttonborder.field.fieldtext.highlight.highlighttext.selecteditem.selecteditemtext.mark.marktext.graytext.accentcolor.accentcolortext".split(".")),Zo=/^(rgba?|hsla?|hwb|color|(ok)?(lab|lch)|light-dark|color-mix)\(/i;function Jo(e){return e.charCodeAt(0)===35||Zo.test(e)||Ho.has(e.toLowerCase())}var St=["calc","min","max","clamp","mod","rem","sin","cos","tan","asin","acos","atan","atan2","pow","sqrt","hypot","log","exp","round"];function Je(e){return e.indexOf("(")!==-1&&St.some(r=>e.includes(`${r}(`))}function Xo(e){if(!St.some(u=>e.includes(u)))return e;let r="",o=[],t=null,a=null;for(let u=0;u<e.length;u++){let s=e.charCodeAt(u);if(s>=48&&s<=57||t!==null&&(s===37||s>=97&&s<=122||s>=65&&s<=90)?t=u:(a=t,t=null),s===40){r+=e[u];let l=u;for(let c=u-1;c>=0;c--){let f=e.charCodeAt(c);if(f>=48&&f<=57)l=c;else if(f>=97&&f<=122)l=c;else break}let i=e.slice(l,u);if(St.includes(i)){o.unshift(!0);continue}else if(o[0]&&i===""){o.unshift(!0);continue}o.unshift(!1);continue}else if(s===41)r+=e[u],o.shift();else if(s===44&&o[0]){r+=", ";continue}else{if(s===32&&o[0]&&r.charCodeAt(r.length-1)===32)continue;if((s===43||s===42||s===47||s===45)&&o[0]){let l=r.trimEnd(),i=l.charCodeAt(l.length-1),c=l.charCodeAt(l.length-2),f=e.charCodeAt(u+1);if((i===101||i===69)&&c>=48&&c<=57){r+=e[u];continue}else if(i===43||i===42||i===47||i===45){r+=e[u];continue}else if(i===40||i===44){r+=e[u];continue}else e.charCodeAt(u-1)===32?r+=`${e[u]} `:i>=48&&i<=57||f>=48&&f<=57||i===41||f===40||f===43||f===42||f===47||f===45||a!==null&&a===u-1?r+=` ${e[u]} `:r+=e[u]}else r+=e[u]}}return r}var Xe=new Uint8Array(256);function W(e,r){let o=0,t=[],a=0,u=e.length,s=r.charCodeAt(0);for(let l=0;l<u;l++){let i=e.charCodeAt(l);if(o===0&&i===s){t.push(e.slice(a,l)),a=l+1;continue}switch(i){case 92:l+=1;break;case 39:case 34:for(;++l<u;){let c=e.charCodeAt(l);if(c===92){l+=1;continue}if(c===i)break}break;case 40:Xe[o]=41,o++;break;case 91:Xe[o]=93,o++;break;case 123:Xe[o]=125,o++;break;case 93:case 125:case 41:o>0&&i===Xe[o-1]&&o--;break}}return t.push(e.slice(a)),t}var Tt={color:Jo,length:et,percentage:At,ratio:hn,number:nr,integer:D,url:or,position:gn,"bg-size":vn,"line-width":tn,image:nn,"family-name":ln,"generic-name":an,"absolute-size":sn,"relative-size":cn,angle:kn,vector:xn};function re(e,r){var o;if(e.startsWith("var("))return null;for(let t of r)if((o=Tt[t])!=null&&o.call(Tt,e))return t;return null}var en=/^url\(.*\)$/;function or(e){return en.test(e)}function tn(e){return W(e," ").every(r=>et(r)||nr(r)||r==="thin"||r==="medium"||r==="thick")}var rn=/^(?:element|image|cross-fade|image-set)\(/,on=/^(repeating-)?(conic|linear|radial)-gradient\(/;function nn(e){let r=0;for(let o of W(e,","))if(!o.startsWith("var(")){if(or(o)){r+=1;continue}if(on.test(o)){r+=1;continue}if(rn.test(o)){r+=1;continue}return!1}return r>0}function an(e){return e==="serif"||e==="sans-serif"||e==="monospace"||e==="cursive"||e==="fantasy"||e==="system-ui"||e==="ui-serif"||e==="ui-sans-serif"||e==="ui-monospace"||e==="ui-rounded"||e==="math"||e==="emoji"||e==="fangsong"}function ln(e){let r=0;for(let o of W(e,",")){let t=o.charCodeAt(0);if(t>=48&&t<=57)return!1;o.startsWith("var(")||(r+=1)}return r>0}function sn(e){return e==="xx-small"||e==="x-small"||e==="small"||e==="medium"||e==="large"||e==="x-large"||e==="xx-large"||e==="xxx-large"}function cn(e){return e==="larger"||e==="smaller"}var _e=/[+-]?\d*\.?\d+(?:[eE][+-]?\d+)?/,un=RegExp(`^${_e.source}$`);function nr(e){return un.test(e)||Je(e)}var dn=RegExp(`^${_e.source}%$`);function At(e){return dn.test(e)||Je(e)}var fn=RegExp(`^${_e.source}s*/s*${_e.source}$`);function hn(e){return fn.test(e)||Je(e)}var pn="cm.mm.Q.in.pc.pt.px.em.ex.ch.rem.lh.rlh.vw.vh.vmin.vmax.vb.vi.svw.svh.lvw.lvh.dvw.dvh.cqw.cqh.cqi.cqb.cqmin.cqmax".split("."),mn=RegExp(`^${_e.source}(${pn.join("|")})$`);function et(e){return mn.test(e)||Je(e)}function gn(e){let r=0;for(let o of W(e," ")){if(o==="center"||o==="top"||o==="right"||o==="bottom"||o==="left"){r+=1;continue}if(!o.startsWith("var(")){if(et(o)||At(o)){r+=1;continue}return!1}}return r>0}function vn(e){let r=0;for(let o of W(e,",")){if(o==="cover"||o==="contain"){r+=1;continue}let t=W(o," ");if(t.length!==1&&t.length!==2)return!1;if(t.every(a=>a==="auto"||et(a)||At(a))){r+=1;continue}}return r>0}var wn=["deg","rad","grad","turn"],bn=RegExp(`^${_e.source}(${wn.join("|")})$`);function kn(e){return bn.test(e)}var yn=RegExp(`^${_e.source} +${_e.source} +${_e.source}$`);function xn(e){return yn.test(e)}function D(e){let r=Number(e);return Number.isInteger(r)&&r>=0&&String(r)===String(e)}function ir(e){let r=Number(e);return Number.isInteger(r)&&r>0&&String(r)===String(e)}function Me(e){return ar(e,.25)}function Et(e){return ar(e,.25)}function ar(e,r){let o=Number(e);return o>=0&&o%r===0&&String(o)===String(e)}function Ie(e){return{__BARE_VALUE__:e}}var xe=Ie(e=>{if(D(e.value))return e.value}),fe=Ie(e=>{if(D(e.value))return`${e.value}%`}),ze=Ie(e=>{if(D(e.value))return`${e.value}px`}),lr=Ie(e=>{if(D(e.value))return`${e.value}ms`}),tt=Ie(e=>{if(D(e.value))return`${e.value}deg`}),$n=Ie(e=>{if(e.fraction===null)return;let[r,o]=W(e.fraction,"/");if(!(!D(r)||!D(o)))return e.fraction}),sr=Ie(e=>{if(D(Number(e.value)))return`repeat(${e.value}, minmax(0, 1fr))`}),Sn={accentColor:({theme:e})=>e("colors"),animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"},aria:{busy:'busy="true"',checked:'checked="true"',disabled:'disabled="true"',expanded:'expanded="true"',hidden:'hidden="true"',pressed:'pressed="true"',readonly:'readonly="true"',required:'required="true"',selected:'selected="true"'},aspectRatio:{auto:"auto",square:"1 / 1",video:"16 / 9",...$n},backdropBlur:({theme:e})=>e("blur"),backdropBrightness:({theme:e})=>({...e("brightness"),...fe}),backdropContrast:({theme:e})=>({...e("contrast"),...fe}),backdropGrayscale:({theme:e})=>({...e("grayscale"),...fe}),backdropHueRotate:({theme:e})=>({...e("hueRotate"),...tt}),backdropInvert:({theme:e})=>({...e("invert"),...fe}),backdropOpacity:({theme:e})=>({...e("opacity"),...fe}),backdropSaturate:({theme:e})=>({...e("saturate"),...fe}),backdropSepia:({theme:e})=>({...e("sepia"),...fe}),backgroundColor:({theme:e})=>e("colors"),backgroundImage:{none:"none","gradient-to-t":"linear-gradient(to top, var(--tw-gradient-stops))","gradient-to-tr":"linear-gradient(to top right, var(--tw-gradient-stops))","gradient-to-r":"linear-gradient(to right, var(--tw-gradient-stops))","gradient-to-br":"linear-gradient(to bottom right, var(--tw-gradient-stops))","gradient-to-b":"linear-gradient(to bottom, var(--tw-gradient-stops))","gradient-to-bl":"linear-gradient(to bottom left, var(--tw-gradient-stops))","gradient-to-l":"linear-gradient(to left, var(--tw-gradient-stops))","gradient-to-tl":"linear-gradient(to top left, var(--tw-gradient-stops))"},backgroundOpacity:({theme:e})=>e("opacity"),backgroundPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{0:"0",none:"",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},borderColor:({theme:e})=>({DEFAULT:"currentcolor",...e("colors")}),borderOpacity:({theme:e})=>e("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},borderSpacing:({theme:e})=>e("spacing"),borderWidth:{DEFAULT:"1px",0:"0px",2:"2px",4:"4px",8:"8px",...ze},boxShadow:{sm:"0 1px 2px 0 rgb(0 0 0 / 0.05)",DEFAULT:"0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",md:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",lg:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",xl:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","2xl":"0 25px 50px -12px rgb(0 0 0 / 0.25)",inner:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",none:"none"},boxShadowColor:({theme:e})=>e("colors"),brightness:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5",200:"2",...fe},caretColor:({theme:e})=>e("colors"),colors:()=>({...rr}),columns:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",...xe},container:{},content:{none:"none"},contrast:{0:"0",50:".5",75:".75",100:"1",125:"1.25",150:"1.5",200:"2",...fe},cursor:{auto:"auto",default:"default",pointer:"pointer",wait:"wait",text:"text",move:"move",help:"help","not-allowed":"not-allowed",none:"none","context-menu":"context-menu",progress:"progress",cell:"cell",crosshair:"crosshair","vertical-text":"vertical-text",alias:"alias",copy:"copy","no-drop":"no-drop",grab:"grab",grabbing:"grabbing","all-scroll":"all-scroll","col-resize":"col-resize","row-resize":"row-resize","n-resize":"n-resize","e-resize":"e-resize","s-resize":"s-resize","w-resize":"w-resize","ne-resize":"ne-resize","nw-resize":"nw-resize","se-resize":"se-resize","sw-resize":"sw-resize","ew-resize":"ew-resize","ns-resize":"ns-resize","nesw-resize":"nesw-resize","nwse-resize":"nwse-resize","zoom-in":"zoom-in","zoom-out":"zoom-out"},divideColor:({theme:e})=>e("borderColor"),divideOpacity:({theme:e})=>e("borderOpacity"),divideWidth:({theme:e})=>({...e("borderWidth"),...ze}),dropShadow:{sm:"0 1px 1px rgb(0 0 0 / 0.05)",DEFAULT:["0 1px 2px rgb(0 0 0 / 0.1)","0 1px 1px rgb(0 0 0 / 0.06)"],md:["0 4px 3px rgb(0 0 0 / 0.07)","0 2px 2px rgb(0 0 0 / 0.06)"],lg:["0 10px 8px rgb(0 0 0 / 0.04)","0 4px 3px rgb(0 0 0 / 0.1)"],xl:["0 20px 13px rgb(0 0 0 / 0.03)","0 8px 5px rgb(0 0 0 / 0.08)"],"2xl":"0 25px 25px rgb(0 0 0 / 0.15)",none:"0 0 #0000"},fill:({theme:e})=>e("colors"),flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",...e("spacing")}),flexGrow:{0:"0",DEFAULT:"1",...xe},flexShrink:{0:"0",DEFAULT:"1",...xe},fontFamily:{sans:["ui-sans-serif","system-ui","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"]},fontSize:{xs:["0.75rem",{lineHeight:"1rem"}],sm:["0.875rem",{lineHeight:"1.25rem"}],base:["1rem",{lineHeight:"1.5rem"}],lg:["1.125rem",{lineHeight:"1.75rem"}],xl:["1.25rem",{lineHeight:"1.75rem"}],"2xl":["1.5rem",{lineHeight:"2rem"}],"3xl":["1.875rem",{lineHeight:"2.25rem"}],"4xl":["2.25rem",{lineHeight:"2.5rem"}],"5xl":["3rem",{lineHeight:"1"}],"6xl":["3.75rem",{lineHeight:"1"}],"7xl":["4.5rem",{lineHeight:"1"}],"8xl":["6rem",{lineHeight:"1"}],"9xl":["8rem",{lineHeight:"1"}]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:({theme:e})=>e("spacing"),gradientColorStops:({theme:e})=>e("colors"),gradientColorStopPositions:{"0%":"0%","5%":"5%","10%":"10%","15%":"15%","20%":"20%","25%":"25%","30%":"30%","35%":"35%","40%":"40%","45%":"45%","50%":"50%","55%":"55%","60%":"60%","65%":"65%","70%":"70%","75%":"75%","80%":"80%","85%":"85%","90%":"90%","95%":"95%","100%":"100%",...fe},grayscale:{0:"0",DEFAULT:"100%",...fe},gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},gridColumn:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6","span-7":"span 7 / span 7","span-8":"span 8 / span 8","span-9":"span 9 / span 9","span-10":"span 10 / span 10","span-11":"span 11 / span 11","span-12":"span 12 / span 12","span-full":"1 / -1"},gridColumnEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...xe},gridColumnStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...xe},gridRow:{auto:"auto","span-1":"span 1 / span 1","span-2":"span 2 / span 2","span-3":"span 3 / span 3","span-4":"span 4 / span 4","span-5":"span 5 / span 5","span-6":"span 6 / span 6","span-7":"span 7 / span 7","span-8":"span 8 / span 8","span-9":"span 9 / span 9","span-10":"span 10 / span 10","span-11":"span 11 / span 11","span-12":"span 12 / span 12","span-full":"1 / -1"},gridRowEnd:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...xe},gridRowStart:{auto:"auto",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",...xe},gridTemplateColumns:{none:"none",subgrid:"subgrid",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))",7:"repeat(7, minmax(0, 1fr))",8:"repeat(8, minmax(0, 1fr))",9:"repeat(9, minmax(0, 1fr))",10:"repeat(10, minmax(0, 1fr))",11:"repeat(11, minmax(0, 1fr))",12:"repeat(12, minmax(0, 1fr))",...sr},gridTemplateRows:{none:"none",subgrid:"subgrid",1:"repeat(1, minmax(0, 1fr))",2:"repeat(2, minmax(0, 1fr))",3:"repeat(3, minmax(0, 1fr))",4:"repeat(4, minmax(0, 1fr))",5:"repeat(5, minmax(0, 1fr))",6:"repeat(6, minmax(0, 1fr))",7:"repeat(7, minmax(0, 1fr))",8:"repeat(8, minmax(0, 1fr))",9:"repeat(9, minmax(0, 1fr))",10:"repeat(10, minmax(0, 1fr))",11:"repeat(11, minmax(0, 1fr))",12:"repeat(12, minmax(0, 1fr))",...sr},height:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%",full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg",...tt},inset:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%",...e("spacing")}),invert:{0:"0",DEFAULT:"100%",...fe},keyframes:{spin:{to:{transform:"rotate(360deg)"}},ping:{"75%, 100%":{transform:"scale(2)",opacity:"0"}},pulse:{"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},listStyleType:{none:"none",disc:"disc",decimal:"decimal"},listStyleImage:{none:"none"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),lineClamp:{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",...xe},maxHeight:({theme:e})=>({none:"none",full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),maxWidth:({theme:e})=>({none:"none",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch",...e("spacing")}),minHeight:({theme:e})=>({full:"100%",screen:"100vh",svh:"100svh",lvh:"100lvh",dvh:"100dvh",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),minWidth:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),objectPosition:{bottom:"bottom",center:"center",left:"left","left-bottom":"left bottom","left-top":"left top",right:"right","right-bottom":"right bottom","right-top":"right top",top:"top"},opacity:{0:"0",5:"0.05",10:"0.1",15:"0.15",20:"0.2",25:"0.25",30:"0.3",35:"0.35",40:"0.4",45:"0.45",50:"0.5",55:"0.55",60:"0.6",65:"0.65",70:"0.7",75:"0.75",80:"0.8",85:"0.85",90:"0.9",95:"0.95",100:"1",...fe},order:{first:"-9999",last:"9999",none:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",...xe},outlineColor:({theme:e})=>e("colors"),outlineOffset:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...ze},outlineWidth:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...ze},padding:({theme:e})=>e("spacing"),placeholderColor:({theme:e})=>e("colors"),placeholderOpacity:({theme:e})=>e("opacity"),ringColor:({theme:e})=>({DEFAULT:"currentcolor",...e("colors")}),ringOffsetColor:({theme:e})=>e("colors"),ringOffsetWidth:{0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...ze},ringOpacity:({theme:e})=>({DEFAULT:"0.5",...e("opacity")}),ringWidth:{DEFAULT:"3px",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...ze},rotate:{0:"0deg",1:"1deg",2:"2deg",3:"3deg",6:"6deg",12:"12deg",45:"45deg",90:"90deg",180:"180deg",...tt},saturate:{0:"0",50:".5",100:"1",150:"1.5",200:"2",...fe},scale:{0:"0",50:".5",75:".75",90:".9",95:".95",100:"1",105:"1.05",110:"1.1",125:"1.25",150:"1.5",...fe},screens:{sm:"40rem",md:"48rem",lg:"64rem",xl:"80rem","2xl":"96rem"},scrollMargin:({theme:e})=>e("spacing"),scrollPadding:({theme:e})=>e("spacing"),sepia:{0:"0",DEFAULT:"100%",...fe},skew:{0:"0deg",1:"1deg",2:"2deg",3:"3deg",6:"6deg",12:"12deg",...tt},space:({theme:e})=>e("spacing"),spacing:{px:"1px",0:"0px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},stroke:({theme:e})=>({none:"none",...e("colors")}),strokeWidth:{0:"0",1:"1",2:"2",...xe},supports:{},data:{},textColor:({theme:e})=>e("colors"),textDecorationColor:({theme:e})=>e("colors"),textDecorationThickness:{auto:"auto","from-font":"from-font",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...ze},textIndent:({theme:e})=>e("spacing"),textOpacity:({theme:e})=>e("opacity"),textUnderlineOffset:{auto:"auto",0:"0px",1:"1px",2:"2px",4:"4px",8:"8px",...ze},transformOrigin:{center:"center",top:"top","top-right":"top right",right:"right","bottom-right":"bottom right",bottom:"bottom","bottom-left":"bottom left",left:"left","top-left":"top left"},transitionDelay:{0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms",...lr},transitionDuration:{DEFAULT:"150ms",0:"0s",75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms",...lr},transitionProperty:{none:"none",all:"all",DEFAULT:"color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",colors:"color, background-color, border-color, outline-color, text-decoration-color, fill, stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4, 0, 0.2, 1)",linear:"linear",in:"cubic-bezier(0.4, 0, 1, 1)",out:"cubic-bezier(0, 0, 0.2, 1)","in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},translate:({theme:e})=>({"1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%",full:"100%",...e("spacing")}),size:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),width:({theme:e})=>({auto:"auto","1/2":"50%","1/3":"33.333333%","2/3":"66.666667%","1/4":"25%","2/4":"50%","3/4":"75%","1/5":"20%","2/5":"40%","3/5":"60%","4/5":"80%","1/6":"16.666667%","2/6":"33.333333%","3/6":"50%","4/6":"66.666667%","5/6":"83.333333%","1/12":"8.333333%","2/12":"16.666667%","3/12":"25%","4/12":"33.333333%","5/12":"41.666667%","6/12":"50%","7/12":"58.333333%","8/12":"66.666667%","9/12":"75%","10/12":"83.333333%","11/12":"91.666667%",full:"100%",screen:"100vw",svw:"100svw",lvw:"100lvw",dvw:"100dvw",min:"min-content",max:"max-content",fit:"fit-content",...e("spacing")}),willChange:{auto:"auto",scroll:"scroll-position",contents:"contents",transform:"transform"},zIndex:{auto:"auto",0:"0",10:"10",20:"20",30:"30",40:"40",50:"50",...xe}},Tn="4.1.13",Ue=92,rt=47,ot=42,cr=34,ur=39,An=58,nt=59,$e=10,it=13,We=32,at=9,dr=123,_t=125,Ot=40,fr=41,En=91,_n=93,hr=45,jt=64,On=33;function lt(e,r){let o=r!=null&&r.from?{file:r.from,code:e}:null;e[0]==="\uFEFF"&&(e=" "+e.slice(1));let t=[],a=[],u=[],s=null,l=null,i="",c="",f=0,m;for(let w=0;w<e.length;w++){let k=e.charCodeAt(w);if(!(k===it&&(m=e.charCodeAt(w+1),m===$e)))if(k===Ue)i===""&&(f=w),i+=e.slice(w,w+2),w+=1;else if(k===rt&&e.charCodeAt(w+1)===ot){let h=w;for(let v=w+2;v<e.length;v++)if(m=e.charCodeAt(v),m===Ue)v+=1;else if(m===ot&&e.charCodeAt(v+1)===rt){w=v+1;break}let b=e.slice(h,w+1);if(b.charCodeAt(2)===On){let v=_r(b.slice(2,-2));a.push(v),o&&(v.src=[o,h,w+1],v.dst=[o,h,w+1])}}else if(k===ur||k===cr){let h=pr(e,w,k);i+=e.slice(w,h+1),w=h}else{if((k===We||k===$e||k===at)&&(m=e.charCodeAt(w+1))&&(m===We||m===$e||m===at||m===it&&(m=e.charCodeAt(w+2))&&m==$e))continue;if(k===$e){if(i.length===0)continue;m=i.charCodeAt(i.length-1),m!==We&&m!==$e&&m!==at&&(i+=" ")}else if(k===hr&&e.charCodeAt(w+1)===hr&&i.length===0){let h="",b=w,v=-1;for(let y=w+2;y<e.length;y++)if(m=e.charCodeAt(y),m===Ue)y+=1;else if(m===ur||m===cr)y=pr(e,y,m);else if(m===rt&&e.charCodeAt(y+1)===ot){for(let A=y+2;A<e.length;A++)if(m=e.charCodeAt(A),m===Ue)A+=1;else if(m===ot&&e.charCodeAt(A+1)===rt){y=A+1;break}}else if(v===-1&&m===An)v=i.length+y-b;else if(m===nt&&h.length===0){i+=e.slice(b,y),w=y;break}else if(m===Ot)h+=")";else if(m===En)h+="]";else if(m===dr)h+="}";else if((m===_t||e.length-1===y)&&h.length===0){w=y-1,i+=e.slice(b,y);break}else(m===fr||m===_n||m===_t)&&h.length>0&&e[y]===h[h.length-1]&&(h=h.slice(0,-1));let S=Ct(i,v);if(!S)throw Error("Invalid custom property, expected a value");o&&(S.src=[o,b,w],S.dst=[o,b,w]),s?s.nodes.push(S):t.push(S),i=""}else if(k===nt&&i.charCodeAt(0)===jt)l=st(i),o&&(l.src=[o,f,w],l.dst=[o,f,w]),s?s.nodes.push(l):t.push(l),i="",l=null;else if(k===nt&&c[c.length-1]!==")"){let h=Ct(i);if(!h){if(i.length===0)continue;throw Error(`Invalid declaration: \`${i.trim()}\``)}o&&(h.src=[o,f,w],h.dst=[o,f,w]),s?s.nodes.push(h):t.push(h),i=""}else if(k===dr&&c[c.length-1]!==")")c+="}",l=se(i.trim()),o&&(l.src=[o,f,w],l.dst=[o,f,w]),s&&s.nodes.push(l),u.push(s),s=l,i="",l=null;else if(k===_t&&c[c.length-1]!==")"){if(c==="")throw Error("Missing opening {");if(c=c.slice(0,-1),i.length>0)if(i.charCodeAt(0)===jt)l=st(i),o&&(l.src=[o,f,w],l.dst=[o,f,w]),s?s.nodes.push(l):t.push(l),i="",l=null;else{let b=i.indexOf(":");if(s){let v=Ct(i,b);if(!v)throw Error(`Invalid declaration: \`${i.trim()}\``);o&&(v.src=[o,f,w],v.dst=[o,f,w]),s.nodes.push(v)}}let h=u.pop()??null;h===null&&s&&t.push(s),s=h,i="",l=null}else if(k===Ot)c+=")",i+="(";else if(k===fr){if(c[c.length-1]!==")")throw Error("Missing opening (");c=c.slice(0,-1),i+=")"}else{if(i.length===0&&(k===We||k===$e||k===at))continue;i===""&&(f=w),i+=String.fromCharCode(k)}}}if(i.charCodeAt(0)===jt){let w=st(i);o&&(w.src=[o,f,e.length],w.dst=[o,f,e.length]),t.push(w)}if(c.length>0&&s){if(s.kind==="rule")throw Error(`Missing closing } at ${s.selector}`);if(s.kind==="at-rule")throw Error(`Missing closing } at ${s.name} ${s.params}`)}return a.length>0?a.concat(t):t}function st(e,r=[]){let o=e,t="";for(let a=5;a<e.length;a++){let u=e.charCodeAt(a);if(u===We||u===Ot){o=e.slice(0,a),t=e.slice(a);break}}return H(o.trim(),t.trim(),r)}function Ct(e,r=e.indexOf(":")){if(r===-1)return null;let o=e.indexOf("!important",r+1);return d(e.slice(0,r).trim(),e.slice(r+1,o===-1?e.length:o).trim(),o!==-1)}function pr(e,r,o){let t;for(let a=r+1;a<e.length;a++)if(t=e.charCodeAt(a),t===Ue)a+=1;else{if(t===o)return a;if(t===nt&&(e.charCodeAt(a+1)===$e||e.charCodeAt(a+1)===it&&e.charCodeAt(a+2)===$e))throw Error(`Unterminated string: ${e.slice(r,a+1)+String.fromCharCode(o)}`);if(t===$e||t===it&&e.charCodeAt(a+1)===$e)throw Error(`Unterminated string: ${e.slice(r,a)+String.fromCharCode(o)}`)}return r}function ct(e){if(arguments.length===0)throw TypeError("`CSS.escape` requires an argument.");let r=String(e),o=r.length,t=-1,a,u="",s=r.charCodeAt(0);if(o===1&&s===45)return"\\"+r;for(;++t<o;){if(a=r.charCodeAt(t),a===0){u+="\uFFFD";continue}if(a>=1&&a<=31||a===127||t===0&&a>=48&&a<=57||t===1&&a>=48&&a<=57&&s===45){u+="\\"+a.toString(16)+" ";continue}if(a>=128||a===45||a===95||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122){u+=r.charAt(t);continue}u+="\\"+r.charAt(t)}return u}function ut(e){return e.replace(/\\([\dA-Fa-f]{1,6}[\t\n\f\r ]?|[\S\s])/g,r=>r.length>2?String.fromCodePoint(Number.parseInt(r.slice(1).trim(),16)):r[1])}var mr=new Map([["--font",["--font-weight","--font-size"]],["--inset",["--inset-shadow","--inset-ring"]],["--text",["--text-color","--text-decoration-color","--text-decoration-thickness","--text-indent","--text-shadow","--text-underline-offset"]]]);function gr(e,r){return(mr.get(r)??[]).some(o=>e===o||e.startsWith(`${o}-`))}var jn=(Lo=class{constructor(e=new Map,r=new Set([])){er(this,be);Ae(this,"prefix",null);this.values=e,this.keyframes=r}get size(){return this.values.size}add(e,r,o=0,t){if(e.endsWith("-*")){if(r!=="initial")throw Error(`Invalid theme value \`${r}\` for namespace \`${e}\``);e==="--*"?this.values.clear():this.clearNamespace(e.slice(0,-2),0)}if(o&4){let a=this.values.get(e);if(a&&!(a.options&4))return}r==="initial"?this.values.delete(e):this.values.set(e,{value:r,options:o,src:t})}keysInNamespaces(e){let r=[];for(let o of e){let t=`${o}-`;for(let a of this.values.keys())a.startsWith(t)&&a.indexOf("--",2)===-1&&(gr(a,o)||r.push(a.slice(t.length)))}return r}get(e){for(let r of e){let o=this.values.get(r);if(o)return o.value}return null}hasDefault(e){return(this.getOptions(e)&4)==4}getOptions(e){var r;return e=ut(Ee(this,be,Jt).call(this,e)),((r=this.values.get(e))==null?void 0:r.options)??0}entries(){return this.prefix?Array.from(this.values,e=>(e[0]=this.prefixKey(e[0]),e)):this.values.entries()}prefixKey(e){return this.prefix?`--${this.prefix}-${e.slice(2)}`:e}clearNamespace(e,r){let o=mr.get(e)??[];e:for(let t of this.values.keys())if(t.startsWith(e)){if(r!==0&&(this.getOptions(t)&r)!==r)continue;for(let a of o)if(t.startsWith(a))continue e;this.values.delete(t)}}markUsedVariable(e){let r=ut(Ee(this,be,Jt).call(this,e)),o=this.values.get(r);if(!o)return!1;let t=o.options&16;return o.options|=16,!t}resolve(e,r,o=0){let t=Ee(this,be,kt).call(this,e,r);if(!t)return null;let a=this.values.get(t);return(o|a.options)&1?a.value:Ee(this,be,yt).call(this,t)}resolveValue(e,r){let o=Ee(this,be,kt).call(this,e,r);return o?this.values.get(o).value:null}resolveWith(e,r,o=[]){let t=Ee(this,be,kt).call(this,e,r);if(!t)return null;let a={};for(let s of o){let l=`${t}${s}`,i=this.values.get(l);i&&(i.options&1?a[s]=i.value:a[s]=Ee(this,be,yt).call(this,l))}let u=this.values.get(t);return u.options&1?[u.value,a]:[Ee(this,be,yt).call(this,t),a]}namespace(e){let r=new Map,o=`${e}-`;for(let[t,a]of this.values)t===e?r.set(null,a.value):t.startsWith(`${o}-`)?r.set(t.slice(e.length),a.value):t.startsWith(o)&&r.set(t.slice(o.length),a.value);return r}addKeyframes(e){this.keyframes.add(e)}getKeyframes(){return Array.from(this.keyframes)}},be=new WeakSet,Jt=function(e){return this.prefix?`--${e.slice(3+this.prefix.length)}`:e},kt=function(e,r){for(let o of r){let t=e===null?o:`${o}-${e}`;if(!this.values.has(t))if(e!==null&&e.includes(".")){if(t=`${o}-${e.replaceAll(".","_")}`,!this.values.has(t))continue}else continue;if(!gr(t,o))return t}return null},yt=function(e){let r=this.values.get(e);if(!r)return null;let o=null;return r.options&2&&(o=r.value),`var(${ct(this.prefixKey(e))}${o?`, ${o}`:""})`},Lo),ne=class extends Map{constructor(e){super(),this.factory=e}get(e){let r=super.get(e);return r===void 0&&(r=this.factory(e,this),this.set(e,r)),r}};function zt(e){return{kind:"word",value:e}}function Cn(e,r){return{kind:"function",value:e,nodes:r}}function zn(e){return{kind:"separator",value:e}}function we(e,r,o=null){for(let t=0;t<e.length;t++){let a=e[t],u=!1,s=0,l=r(a,{parent:o,replaceWith(i){u||(u=!0,Array.isArray(i)?i.length===0?(e.splice(t,1),s=0):i.length===1?(e[t]=i[0],s=1):(e.splice(t,1,...i),s=i.length):e[t]=i)}})??0;if(u){l===0?t--:t+=s-1;continue}if(l===2||l!==1&&a.kind==="function"&&we(a.nodes,r,a)===2)return 2}}function ce(e){let r="";for(let o of e)switch(o.kind){case"word":case"separator":r+=o.value;break;case"function":r+=o.value+"("+ce(o.nodes)+")"}return r}var vr=92,Nn=41,wr=58,br=44,Pn=34,kr=61,yr=62,xr=60,$r=10,In=40,Fn=39,Sr=47,Tr=32,Ar=9;function ie(e){e=e.replaceAll(`\r
`,`
`);let r=[],o=[],t=null,a="",u;for(let s=0;s<e.length;s++){let l=e.charCodeAt(s);switch(l){case vr:a+=e[s]+e[s+1],s++;break;case wr:case br:case kr:case yr:case xr:case $r:case Sr:case Tr:case Ar:{if(a.length>0){let m=zt(a);t?t.nodes.push(m):r.push(m),a=""}let i=s,c=s+1;for(;c<e.length&&(u=e.charCodeAt(c),!(u!==wr&&u!==br&&u!==kr&&u!==yr&&u!==xr&&u!==$r&&u!==Sr&&u!==Tr&&u!==Ar));c++);s=c-1;let f=zn(e.slice(i,c));t?t.nodes.push(f):r.push(f);break}case Fn:case Pn:{let i=s;for(let c=s+1;c<e.length;c++)if(u=e.charCodeAt(c),u===vr)c+=1;else if(u===l){s=c;break}a+=e.slice(i,s+1);break}case In:{let i=Cn(a,[]);a="",t?t.nodes.push(i):r.push(i),o.push(i),t=i;break}case Nn:{let i=o.pop();if(a.length>0){let c=zt(a);i==null||i.nodes.push(c),a=""}t=o.length>0?o[o.length-1]:null;break}default:a+=String.fromCharCode(l)}}return a.length>0&&r.push(zt(a)),r}function Er(e){let r=[];return we(ie(e),o=>{if(!(o.kind!=="function"||o.value!=="var"))return we(o.nodes,t=>{t.kind!=="word"||t.value[0]!=="-"||t.value[1]!=="-"||r.push(t.value)}),1}),r}var Ln=64;function Z(e,r=[]){return{kind:"rule",selector:e,nodes:r}}function H(e,r="",o=[]){return{kind:"at-rule",name:e,params:r,nodes:o}}function se(e,r=[]){return e.charCodeAt(0)===Ln?st(e,r):Z(e,r)}function d(e,r,o=!1){return{kind:"declaration",property:e,value:r,important:o}}function _r(e){return{kind:"comment",value:e}}function Fe(e,r){return{kind:"context",context:e,nodes:r}}function B(e){return{kind:"at-root",nodes:e}}function Q(e,r,o=[],t={}){for(let a=0;a<e.length;a++){let u=e[a],s=o[o.length-1]??null;if(u.kind==="context"){if(Q(u.nodes,r,o,{...t,...u.context})===2)return 2;continue}o.push(u);let l=!1,i=0,c=r(u,{parent:s,context:t,path:o,replaceWith(f){l||(l=!0,Array.isArray(f)?f.length===0?(e.splice(a,1),i=0):f.length===1?(e[a]=f[0],i=1):(e.splice(a,1,...f),i=f.length):(e[a]=f,i=1))}})??0;if(o.pop(),l){c===0?a--:a+=i-1;continue}if(c===2)return 2;if(c!==1&&"nodes"in u){o.push(u);let f=Q(u.nodes,r,o,t);if(o.pop(),f===2)return 2}}}function Nt(e,r,o=[],t={}){for(let a=0;a<e.length;a++){let u=e[a],s=o[o.length-1]??null;if(u.kind==="rule"||u.kind==="at-rule")o.push(u),Nt(u.nodes,r,o,t),o.pop();else if(u.kind==="context"){Nt(u.nodes,r,o,{...t,...u.context});continue}o.push(u),r(u,{parent:s,context:t,path:o,replaceWith(l){Array.isArray(l)?l.length===0?e.splice(a,1):l.length===1?e[a]=l[0]:e.splice(a,1,...l):e[a]=l,a+=l.length-1}}),o.pop()}}function qe(e,r,o=3){let t=[],a=new Set,u=new ne(()=>new Set),s=new ne(()=>new Set),l=new Set,i=new Set,c=[],f=[],m=new ne(()=>new Set);function w(h,b,v={},S=0){if(h.kind==="declaration"){if(h.property==="--tw-sort"||h.value===void 0||h.value===null)return;if(v.theme&&h.property[0]==="-"&&h.property[1]==="-"){if(h.value==="initial"){h.value=void 0;return}v.keyframes||u.get(b).add(h)}if(h.value.includes("var("))if(v.theme&&h.property[0]==="-"&&h.property[1]==="-")for(let y of Er(h.value))m.get(y).add(h.property);else r.trackUsedVariables(h.value);if(h.property==="animation")for(let y of jr(h.value))i.add(y);o&2&&h.value.includes("color-mix(")&&s.get(b).add(h),b.push(h)}else if(h.kind==="rule"){let y=[];for(let j of h.nodes)w(j,y,v,S+1);let A={},E=new Set;for(let j of y){if(j.kind!=="declaration")continue;let T=`${j.property}:${j.value}:${j.important}`;A[T]??(A[T]=[]),A[T].push(j)}for(let j in A)for(let T=0;T<A[j].length-1;++T)E.add(A[j][T]);if(E.size>0&&(y=y.filter(j=>!E.has(j))),y.length===0)return;h.selector==="&"?b.push(...y):b.push({...h,nodes:y})}else if(h.kind==="at-rule"&&h.name==="@property"&&S===0){if(a.has(h.params))return;if(o&1){let A=h.params,E=null,j=!1;for(let C of h.nodes)C.kind==="declaration"&&(C.property==="initial-value"?E=C.value:C.property==="inherits"&&(j=C.value==="true"));let T=d(A,E??"initial");T.src=h.src,j?c.push(T):f.push(T)}a.add(h.params);let y={...h,nodes:[]};for(let A of h.nodes)w(A,y.nodes,v,S+1);b.push(y)}else if(h.kind==="at-rule"){h.name==="@keyframes"&&(v={...v,keyframes:!0});let y={...h,nodes:[]};for(let A of h.nodes)w(A,y.nodes,v,S+1);h.name==="@keyframes"&&v.theme&&l.add(y),(y.nodes.length>0||y.name==="@layer"||y.name==="@charset"||y.name==="@custom-media"||y.name==="@namespace"||y.name==="@import")&&b.push(y)}else if(h.kind==="at-root")for(let y of h.nodes){let A=[];w(y,A,v,0);for(let E of A)t.push(E)}else if(h.kind==="context"){if(h.context.reference)return;for(let y of h.nodes)w(y,b,{...v,...h.context},S)}else h.kind==="comment"&&b.push(h)}let k=[];for(let h of e)w(h,k,{},0);e:for(let[h,b]of u)for(let v of b){if(Or(v.property,r.theme,m)){if(v.property.startsWith(r.theme.prefixKey("--animate-")))for(let y of jr(v.value))i.add(y);continue}let S=h.indexOf(v);if(h.splice(S,1),h.length===0){let y=Dn(k,A=>A.kind==="rule"&&A.nodes===h);if(!y||y.length===0)continue e;y.unshift({kind:"at-root",nodes:k});do{let A=y.pop();if(!A)break;let E=y[y.length-1];if(!E||E.kind!=="at-root"&&E.kind!=="at-rule")break;let j=E.nodes.indexOf(A);if(j===-1)break;E.nodes.splice(j,1)}while(!0);continue e}}for(let h of l)if(!i.has(h.params)){let b=t.indexOf(h);t.splice(b,1)}if(k=k.concat(t),o&2)for(let[h,b]of s)for(let v of b){let S=h.indexOf(v);if(S===-1||v.value==null)continue;let y=ie(v.value),A=!1;if(we(y,(T,{replaceWith:C})=>{if(T.kind!=="function"||T.value!=="color-mix")return;let n=!1,p=!1;if(we(T.nodes,(g,{replaceWith:$})=>{if(g.kind=="word"&&g.value.toLowerCase()==="currentcolor"){p=!0,A=!0;return}let x=g,O=null,I=new Set;do{if(x.kind!=="function"||x.value!=="var")return;let _=x.nodes[0];if(!_||_.kind!=="word")return;let F=_.value;if(I.has(F)){n=!0;return}if(I.add(F),A=!0,O=r.theme.resolveValue(null,[_.value]),!O){n=!0;return}if(O.toLowerCase()==="currentcolor"){p=!0;return}x=O.startsWith("var(")?ie(O)[0]:null}while(x);$({kind:"word",value:O})}),n||p){let g=T.nodes.findIndex(x=>x.kind==="separator"&&x.value.trim().includes(","));if(g===-1)return;let $=T.nodes.length>g?T.nodes[g+1]:null;if(!$)return;C($)}else if(A){let g=T.nodes[2];g.kind==="word"&&(g.value==="oklab"||g.value==="oklch"||g.value==="lab"||g.value==="lch")&&(g.value="srgb")}}),!A)continue;let E={...v,value:ce(y)},j=se("@supports (color: color-mix(in lab, red, red))",[v]);j.src=v.src,h.splice(S,1,E,j)}if(o&1){let h=[];if(c.length>0){let b=se(":root, :host",c);b.src=c[0].src,h.push(b)}if(f.length>0){let b=se("*, ::before, ::after, ::backdrop",f);b.src=f[0].src,h.push(b)}if(h.length>0){let b=k.findIndex(y=>!(y.kind==="comment"||y.kind==="at-rule"&&(y.name==="@charset"||y.name==="@import"))),v=H("@layer","properties",[]);v.src=h[0].src,k.splice(b<0?k.length:b,0,v);let S=se("@layer properties",[H("@supports","((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b))))",h)]);S.src=h[0].src,S.nodes[0].src=h[0].src,k.push(S)}}return k}function Le(e,r){let o=0,t={file:null,code:""};function a(s,l=0){var f;let i="",c="  ".repeat(l);if(s.kind==="declaration"){if(i+=`${c}${s.property}: ${s.value}${s.important?" !important":""};
`,r){o+=c.length;let m=o;o+=s.property.length,o+=2,o+=((f=s.value)==null?void 0:f.length)??0,s.important&&(o+=11);let w=o;o+=2,s.dst=[t,m,w]}}else if(s.kind==="rule"){if(i+=`${c}${s.selector} {
`,r){o+=c.length;let m=o;o+=s.selector.length,o+=1,s.dst=[t,m,o],o+=2}for(let m of s.nodes)i+=a(m,l+1);i+=`${c}}
`,r&&(o+=c.length,o+=2)}else if(s.kind==="at-rule"){if(s.nodes.length===0){let m=`${c}${s.name} ${s.params};
`;if(r){o+=c.length;let w=o;o+=s.name.length,o+=1,o+=s.params.length;let k=o;o+=2,s.dst=[t,w,k]}return m}if(i+=`${c}${s.name}${s.params?` ${s.params} `:" "}{
`,r){o+=c.length;let m=o;o+=s.name.length,s.params&&(o+=1,o+=s.params.length),o+=1,s.dst=[t,m,o],o+=2}for(let m of s.nodes)i+=a(m,l+1);i+=`${c}}
`,r&&(o+=c.length,o+=2)}else if(s.kind==="comment"){if(i+=`${c}/*${s.value}*/
`,r){o+=c.length;let m=o;o+=2+s.value.length+2,s.dst=[t,m,o],o+=1}}else if(s.kind==="context"||s.kind==="at-root")return"";return i}let u="";for(let s of e)u+=a(s,0);return t.code=u,u}function Dn(e,r){let o=[];return Q(e,(t,{path:a})=>{if(r(t))return o=[...a],2}),o}function Or(e,r,o,t=new Set){if(t.has(e)||(t.add(e),r.getOptions(e)&24))return!0;{let a=o.get(e)??[];for(let u of a)if(Or(u,r,o,t))return!0}return!1}function jr(e){return e.split(/[\s,]+/)}function De(e){if(e.indexOf("(")===-1)return Ke(e);let r=ie(e);return Pt(r),e=ce(r),e=Xo(e),e}function Ke(e,r=!1){let o="";for(let t=0;t<e.length;t++){let a=e[t];a==="\\"&&e[t+1]==="_"?(o+="_",t+=1):a==="_"&&!r?o+=" ":o+=a}return o}function Pt(e){for(let r of e)switch(r.kind){case"function":if(r.value==="url"||r.value.endsWith("_url")){r.value=Ke(r.value);break}if(r.value==="var"||r.value.endsWith("_var")||r.value==="theme"||r.value.endsWith("_theme")){r.value=Ke(r.value);for(let o=0;o<r.nodes.length;o++){if(o==0&&r.nodes[o].kind==="word"){r.nodes[o].value=Ke(r.nodes[o].value,!0);continue}Pt([r.nodes[o]])}break}r.value=Ke(r.value),Pt(r.nodes);break;case"separator":case"word":r.value=Ke(r.value);break;default:Mn(r)}}function Mn(e){throw Error(`Unexpected value: ${e}`)}var It=new Uint8Array(256);function Ne(e){let r=0,o=e.length;for(let t=0;t<o;t++){let a=e.charCodeAt(t);switch(a){case 92:t+=1;break;case 39:case 34:for(;++t<o;){let u=e.charCodeAt(t);if(u===92){t+=1;continue}if(u===a)break}break;case 40:It[r]=41,r++;break;case 91:It[r]=93,r++;break;case 123:break;case 93:case 125:case 41:if(r===0)return!1;r>0&&a===It[r-1]&&r--;break;case 59:if(r===0)return!1;break}}return!0}var Kn=58,Cr=45,zr=97,Nr=122;function*Rn(e,r){var m;let o=W(e,":");if(r.theme.prefix){if(o.length===1||o[0]!==r.theme.prefix)return null;o.shift()}let t=o.pop(),a=[];for(let w=o.length-1;w>=0;--w){let k=r.parseVariant(o[w]);if(k===null)return;a.push(k)}let u=!1;t[t.length-1]==="!"?(u=!0,t=t.slice(0,-1)):t[0]==="!"&&(u=!0,t=t.slice(1)),r.utilities.has(t,"static")&&!t.includes("[")&&(yield{kind:"static",root:t,variants:a,important:u,raw:e});let[s,l=null,i]=W(t,"/");if(i)return;let c=l===null?null:Ft(l);if(l!==null&&c===null)return;if(s[0]==="["){if(s[s.length-1]!=="]")return;let w=s.charCodeAt(1);if(w!==Cr&&!(w>=zr&&w<=Nr))return;s=s.slice(1,-1);let k=s.indexOf(":");if(k===-1||k===0||k===s.length-1)return;let h=s.slice(0,k),b=De(s.slice(k+1));if(!Ne(b))return;yield{kind:"arbitrary",property:h,value:b,modifier:c,variants:a,important:u,raw:e};return}let f;if(s[s.length-1]==="]"){let w=s.indexOf("-[");if(w===-1)return;let k=s.slice(0,w);if(!r.utilities.has(k,"functional"))return;let h=s.slice(w+1);f=[[k,h]]}else if(s[s.length-1]===")"){let w=s.indexOf("-(");if(w===-1)return;let k=s.slice(0,w);if(!r.utilities.has(k,"functional"))return;let h=s.slice(w+2,-1),b=W(h,":"),v=null;if(b.length===2&&(v=b[0],h=b[1]),h[0]!=="-"||h[1]!=="-"||!Ne(h))return;f=[[k,v===null?`[var(${h})]`:`[${v}:var(${h})]`]]}else f=Pr(s,w=>r.utilities.has(w,"functional"));for(let[w,k]of f){let h={kind:"functional",root:w,modifier:c,value:null,variants:a,important:u,raw:e};if(k===null){yield h;continue}{let b=k.indexOf("[");if(b!==-1){if(k[k.length-1]!=="]")return;let v=De(k.slice(b+1,-1));if(!Ne(v))continue;let S="";for(let y=0;y<v.length;y++){let A=v.charCodeAt(y);if(A===Kn){S=v.slice(0,y),v=v.slice(y+1);break}if(!(A===Cr||A>=zr&&A<=Nr))break}if(v.length===0||v.trim().length===0)continue;h.value={kind:"arbitrary",dataType:S||null,value:v}}else{let v=l===null||((m=h.modifier)==null?void 0:m.kind)==="arbitrary"?null:`${k}/${l}`;h.value={kind:"named",value:k,fraction:v}}}yield h}}function Ft(e){if(e[0]==="["&&e[e.length-1]==="]"){let r=De(e.slice(1,-1));return!Ne(r)||r.length===0||r.trim().length===0?null:{kind:"arbitrary",value:r}}return e[0]==="("&&e[e.length-1]===")"?(e=e.slice(1,-1),e[0]!=="-"||e[1]!=="-"||!Ne(e)?null:(e=`var(${e})`,{kind:"arbitrary",value:De(e)})):{kind:"named",value:e}}function Vn(e,r){if(e[0]==="["&&e[e.length-1]==="]"){if(e[1]==="@"&&e.includes("&"))return null;let o=De(e.slice(1,-1));if(!Ne(o)||o.length===0||o.trim().length===0)return null;let t=o[0]===">"||o[0]==="+"||o[0]==="~";return!t&&o[0]!=="@"&&!o.includes("&")&&(o=`&:is(${o})`),{kind:"arbitrary",selector:o,relative:t}}{let[o,t=null,a]=W(e,"/");if(a)return null;let u=Pr(o,s=>r.variants.has(s));for(let[s,l]of u)switch(r.variants.kind(s)){case"static":return l!==null||t!==null?null:{kind:"static",root:s};case"functional":{let i=t===null?null:Ft(t);if(t!==null&&i===null)return null;if(l===null)return{kind:"functional",root:s,modifier:i,value:null};if(l[l.length-1]==="]"){if(l[0]!=="[")continue;let c=De(l.slice(1,-1));return!Ne(c)||c.length===0||c.trim().length===0?null:{kind:"functional",root:s,modifier:i,value:{kind:"arbitrary",value:c}}}if(l[l.length-1]===")"){if(l[0]!=="(")continue;let c=De(l.slice(1,-1));return!Ne(c)||c.length===0||c.trim().length===0||c[0]!=="-"||c[1]!=="-"?null:{kind:"functional",root:s,modifier:i,value:{kind:"arbitrary",value:`var(${c})`}}}return{kind:"functional",root:s,modifier:i,value:{kind:"named",value:l}}}case"compound":{if(l===null)return null;let i=r.parseVariant(l);if(i===null||!r.variants.compoundsWith(s,i))return null;let c=t===null?null:Ft(t);return t!==null&&c===null?null:{kind:"compound",root:s,modifier:c,variant:i}}}}return null}function*Pr(e,r){r(e)&&(yield[e,null]);let o=e.lastIndexOf("-");for(;o>0;){let t=e.slice(0,o);if(r(t)){let a=[t,e.slice(o+1)];if(a[1]===""||a[0]==="@"&&r("@")&&e[o]==="-")break;yield a}o=e.lastIndexOf("-",o-1)}e[0]==="@"&&r("@")&&(yield["@",e.slice(1)])}function Un(e,r){let o=[];for(let a of r.variants)o.unshift(Lt(a));e.theme.prefix&&o.unshift(e.theme.prefix);let t="";if(r.kind==="static"&&(t+=r.root),r.kind==="functional"&&(t+=r.root,r.value))if(r.value.kind==="arbitrary"){if(r.value!==null){let a=Mt(r.value.value),u=a?r.value.value.slice(4,-1):r.value.value,[s,l]=a?["(",")"]:["[","]"];r.value.dataType?t+=`-${s}${r.value.dataType}:${Re(u)}${l}`:t+=`-${s}${Re(u)}${l}`}}else r.value.kind==="named"&&(t+=`-${r.value.value}`);return r.kind==="arbitrary"&&(t+=`[${r.property}:${Re(r.value)}]`),(r.kind==="arbitrary"||r.kind==="functional")&&(t+=Ir(r.modifier)),r.important&&(t+="!"),o.push(t),o.join(":")}function Ir(e){if(e===null)return"";let r=Mt(e.value),o=r?e.value.slice(4,-1):e.value,[t,a]=r?["(",")"]:["[","]"];return e.kind==="arbitrary"?`/${t}${Re(o)}${a}`:e.kind==="named"?`/${e.value}`:""}function Lt(e){if(e.kind==="static")return e.root;if(e.kind==="arbitrary")return`[${Re(Bn(e.selector))}]`;let r="";if(e.kind==="functional"){r+=e.root;let o=e.root!=="@";if(e.value)if(e.value.kind==="arbitrary"){let t=Mt(e.value.value),a=t?e.value.value.slice(4,-1):e.value.value,[u,s]=t?["(",")"]:["[","]"];r+=`${o?"-":""}${u}${Re(a)}${s}`}else e.value.kind==="named"&&(r+=`${o?"-":""}${e.value.value}`)}return e.kind==="compound"&&(r+=e.root,r+="-",r+=Lt(e.variant)),(e.kind==="functional"||e.kind==="compound")&&(r+=Ir(e.modifier)),r}var Wn=new ne(e=>{let r=ie(e),o=new Set;return we(r,(t,{parent:a})=>{let u=a===null?r:a.nodes??[];if(t.kind==="word"&&(t.value==="+"||t.value==="-"||t.value==="*"||t.value==="/")){let s=u.indexOf(t)??-1;if(s===-1)return;let l=u[s-1];if((l==null?void 0:l.kind)!=="separator"||l.value!==" ")return;let i=u[s+1];if((i==null?void 0:i.kind)!=="separator"||i.value!==" ")return;o.add(l),o.add(i)}else t.kind==="separator"&&t.value.trim()==="/"?t.value="/":t.kind==="separator"&&t.value.length>0&&t.value.trim()===""?(u[0]===t||u[u.length-1]===t)&&o.add(t):t.kind==="separator"&&t.value.trim()===","&&(t.value=",")}),o.size>0&&we(r,(t,{replaceWith:a})=>{o.has(t)&&(o.delete(t),a([]))}),Dt(r),ce(r)});function Re(e){return Wn.get(e)}var qn=new ne(e=>{let r=ie(e);return r.length===3&&r[0].kind==="word"&&r[0].value==="&"&&r[1].kind==="separator"&&r[1].value===":"&&r[2].kind==="function"&&r[2].value==="is"?ce(r[2].nodes):e});function Bn(e){return qn.get(e)}function Dt(e){for(let r of e)switch(r.kind){case"function":if(r.value==="url"||r.value.endsWith("_url")){r.value=Be(r.value);break}if(r.value==="var"||r.value.endsWith("_var")||r.value==="theme"||r.value.endsWith("_theme")){r.value=Be(r.value);for(let o=0;o<r.nodes.length;o++)Dt([r.nodes[o]]);break}r.value=Be(r.value),Dt(r.nodes);break;case"separator":r.value=Be(r.value);break;case"word":(r.value[0]!=="-"||r.value[1]!=="-")&&(r.value=Be(r.value));break;default:Qn(r)}}var Yn=new ne(e=>{let r=ie(e);return r.length===1&&r[0].kind==="function"&&r[0].value==="var"});function Mt(e){return Yn.get(e)}function Qn(e){throw Error(`Unexpected value: ${e}`)}function Be(e){return e.replaceAll("_",String.raw`\_`).replaceAll(" ","_")}function dt(e,r,o){if(e===r)return 0;let t=e.indexOf("("),a=r.indexOf("("),u=t===-1?e.replace(/[\d.]+/g,""):e.slice(0,t),s=a===-1?r.replace(/[\d.]+/g,""):r.slice(0,a),l=(u===s?0:u<s?-1:1)||(o==="asc"?parseInt(e)-parseInt(r):parseInt(r)-parseInt(e));return Number.isNaN(l)?e<r?-1:1:l}var Gn=new Set(["inset","inherit","initial","revert","unset"]),Fr=/^-?(\d+|\.\d+)(.*?)$/g;function ft(e,r){return W(e,",").map(o=>{o=o.trim();let t=W(o," ").filter(i=>i.trim()!==""),a=null,u=null,s=null;for(let i of t)Gn.has(i)||(Fr.test(i)?(u===null?u=i:s===null&&(s=i),Fr.lastIndex=0):a===null&&(a=i));if(u===null||s===null)return o;let l=r(a??"currentcolor");return a===null?`${o} ${l}`:o.replace(a,l)}).join(", ")}var Hn=/^-?[a-z][a-zA-Z0-9/%._-]*$/,Zn=/^-?[a-z][a-zA-Z0-9/%._-]*-\*$/,ht="0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96".split(","),Jn=class{constructor(){Ae(this,"utilities",new ne(()=>[]));Ae(this,"completions",new Map)}static(e,r){this.utilities.get(e).push({kind:"static",compileFn:r})}functional(e,r,o){this.utilities.get(e).push({kind:"functional",compileFn:r,options:o})}has(e,r){return this.utilities.has(e)&&this.utilities.get(e).some(o=>o.kind===r)}get(e){return this.utilities.has(e)?this.utilities.get(e):[]}getCompletions(e){var r;return((r=this.completions.get(e))==null?void 0:r())??[]}suggest(e,r){this.completions.set(e,r)}keys(e){let r=[];for(let[o,t]of this.utilities.entries())for(let a of t)if(a.kind===e){r.push(o);break}return r}};function N(e,r,o){return H("@property",e,[d("syntax",o?`"${o}"`:'"*"'),d("inherits","false"),...r?[d("initial-value",r)]:[]])}function ue(e,r){if(r===null)return e;let o=Number(r);return Number.isNaN(o)||(r=`${o*100}%`),r==="100%"?e:`color-mix(in oklab, ${e} ${r}, transparent)`}function Lr(e,r){let o=Number(r);return Number.isNaN(o)||(r=`${o*100}%`),`oklab(from ${e} l a b / ${r})`}function ae(e,r,o){if(!r)return e;if(r.kind==="arbitrary")return ue(e,r.value);let t=o.resolve(r.value,["--opacity"]);return t?ue(e,t):Et(r.value)?ue(e,`${r.value}%`):null}function de(e,r,o){let t=null;switch(e.value.value){case"inherit":t="inherit";break;case"transparent":t="transparent";break;case"current":t="currentcolor";break;default:t=r.resolve(e.value.value,o);break}return t?ae(t,e.modifier,r):null}var Dr=/(\d+)_(\d+)/g;function Xn(e){let r=new Jn;function o(n,p){function*g(x){for(let O of e.keysInNamespaces(x))yield O.replace(Dr,(I,_,F)=>`${_}.${F}`)}let $="1/2.1/3.2/3.1/4.2/4.3/4.1/5.2/5.3/5.4/5.1/6.2/6.3/6.4/6.5/6.1/12.2/12.3/12.4/12.5/12.6/12.7/12.8/12.9/12.10/12.11/12".split(".");r.suggest(n,()=>{let x=[];for(let O of p()){if(typeof O=="string"){x.push({values:[O],modifiers:[]});continue}let I=[...O.values??[],...g(O.valueThemeKeys??[])],_=[...O.modifiers??[],...g(O.modifierThemeKeys??[])];O.supportsFractions&&I.push(...$),O.hasDefaultValue&&I.unshift(null),x.push({supportsNegative:O.supportsNegative,values:I,modifiers:_})}return x})}function t(n,p){r.static(n,()=>p.map(g=>typeof g=="function"?g():d(g[0],g[1])))}function a(n,p){function g({negative:$}){return x=>{let O=null,I=null;if(x.value)if(x.value.kind==="arbitrary"){if(x.modifier)return;O=x.value.value,I=x.value.dataType}else{if(O=e.resolve(x.value.fraction??x.value.value,p.themeKeys??[]),O===null&&p.supportsFractions&&x.value.fraction){let[_,F]=W(x.value.fraction,"/");if(!D(_)||!D(F))return;O=`calc(${x.value.fraction} * 100%)`}if(O===null&&$&&p.handleNegativeBareValue){if(O=p.handleNegativeBareValue(x.value),!(O!=null&&O.includes("/"))&&x.modifier)return;if(O!==null)return p.handle(O,null)}if(O===null&&p.handleBareValue&&(O=p.handleBareValue(x.value),!(O!=null&&O.includes("/"))&&x.modifier))return}else{if(x.modifier)return;O=p.defaultValue===void 0?e.resolve(null,p.themeKeys??[]):p.defaultValue}if(O!==null)return p.handle($?`calc(${O} * -1)`:O,I)}}p.supportsNegative&&r.functional(`-${n}`,g({negative:!0})),r.functional(n,g({negative:!1})),o(n,()=>[{supportsNegative:p.supportsNegative,valueThemeKeys:p.themeKeys??[],hasDefaultValue:p.defaultValue!==void 0&&p.defaultValue!==null,supportsFractions:p.supportsFractions}])}function u(n,p){r.functional(n,g=>{if(!g.value)return;let $=null;if(g.value.kind==="arbitrary"?($=g.value.value,$=ae($,g.modifier,e)):$=de(g,e,p.themeKeys),$!==null)return p.handle($)}),o(n,()=>[{values:["current","inherit","transparent"],valueThemeKeys:p.themeKeys,modifiers:Array.from({length:21},(g,$)=>`${$*5}`)}])}function s(n,p,g,{supportsNegative:$=!1,supportsFractions:x=!1}={}){$&&r.static(`-${n}-px`,()=>g("-1px")),r.static(`${n}-px`,()=>g("1px")),a(n,{themeKeys:p,supportsFractions:x,supportsNegative:$,defaultValue:null,handleBareValue:({value:O})=>{let I=e.resolve(null,["--spacing"]);return!I||!Me(O)?null:`calc(${I} * ${O})`},handleNegativeBareValue:({value:O})=>{let I=e.resolve(null,["--spacing"]);return!I||!Me(O)?null:`calc(${I} * -${O})`},handle:g}),o(n,()=>[{values:e.get(["--spacing"])?ht:[],supportsNegative:$,supportsFractions:x,valueThemeKeys:p}])}t("sr-only",[["position","absolute"],["width","1px"],["height","1px"],["padding","0"],["margin","-1px"],["overflow","hidden"],["clip-path","inset(50%)"],["white-space","nowrap"],["border-width","0"]]),t("not-sr-only",[["position","static"],["width","auto"],["height","auto"],["padding","0"],["margin","0"],["overflow","visible"],["clip-path","none"],["white-space","normal"]]),t("pointer-events-none",[["pointer-events","none"]]),t("pointer-events-auto",[["pointer-events","auto"]]),t("visible",[["visibility","visible"]]),t("invisible",[["visibility","hidden"]]),t("collapse",[["visibility","collapse"]]),t("static",[["position","static"]]),t("fixed",[["position","fixed"]]),t("absolute",[["position","absolute"]]),t("relative",[["position","relative"]]),t("sticky",[["position","sticky"]]);for(let[n,p]of[["inset","inset"],["inset-x","inset-inline"],["inset-y","inset-block"],["start","inset-inline-start"],["end","inset-inline-end"],["top","top"],["right","right"],["bottom","bottom"],["left","left"]])t(`${n}-auto`,[[p,"auto"]]),t(`${n}-full`,[[p,"100%"]]),t(`-${n}-full`,[[p,"-100%"]]),s(n,["--inset","--spacing"],g=>[d(p,g)],{supportsNegative:!0,supportsFractions:!0});t("isolate",[["isolation","isolate"]]),t("isolation-auto",[["isolation","auto"]]),t("z-auto",[["z-index","auto"]]),a("z",{supportsNegative:!0,handleBareValue:({value:n})=>D(n)?n:null,themeKeys:["--z-index"],handle:n=>[d("z-index",n)]}),o("z",()=>[{supportsNegative:!0,values:["0","10","20","30","40","50"],valueThemeKeys:["--z-index"]}]),t("order-first",[["order","-9999"]]),t("order-last",[["order","9999"]]),a("order",{supportsNegative:!0,handleBareValue:({value:n})=>D(n)?n:null,themeKeys:["--order"],handle:n=>[d("order",n)]}),o("order",()=>[{supportsNegative:!0,values:Array.from({length:12},(n,p)=>`${p+1}`),valueThemeKeys:["--order"]}]),t("col-auto",[["grid-column","auto"]]),a("col",{supportsNegative:!0,handleBareValue:({value:n})=>D(n)?n:null,themeKeys:["--grid-column"],handle:n=>[d("grid-column",n)]}),t("col-span-full",[["grid-column","1 / -1"]]),a("col-span",{handleBareValue:({value:n})=>D(n)?n:null,handle:n=>[d("grid-column",`span ${n} / span ${n}`)]}),t("col-start-auto",[["grid-column-start","auto"]]),a("col-start",{supportsNegative:!0,handleBareValue:({value:n})=>D(n)?n:null,themeKeys:["--grid-column-start"],handle:n=>[d("grid-column-start",n)]}),t("col-end-auto",[["grid-column-end","auto"]]),a("col-end",{supportsNegative:!0,handleBareValue:({value:n})=>D(n)?n:null,themeKeys:["--grid-column-end"],handle:n=>[d("grid-column-end",n)]}),o("col-span",()=>[{values:Array.from({length:12},(n,p)=>`${p+1}`),valueThemeKeys:[]}]),o("col-start",()=>[{supportsNegative:!0,values:Array.from({length:13},(n,p)=>`${p+1}`),valueThemeKeys:["--grid-column-start"]}]),o("col-end",()=>[{supportsNegative:!0,values:Array.from({length:13},(n,p)=>`${p+1}`),valueThemeKeys:["--grid-column-end"]}]),t("row-auto",[["grid-row","auto"]]),a("row",{supportsNegative:!0,handleBareValue:({value:n})=>D(n)?n:null,themeKeys:["--grid-row"],handle:n=>[d("grid-row",n)]}),t("row-span-full",[["grid-row","1 / -1"]]),a("row-span",{themeKeys:[],handleBareValue:({value:n})=>D(n)?n:null,handle:n=>[d("grid-row",`span ${n} / span ${n}`)]}),t("row-start-auto",[["grid-row-start","auto"]]),a("row-start",{supportsNegative:!0,handleBareValue:({value:n})=>D(n)?n:null,themeKeys:["--grid-row-start"],handle:n=>[d("grid-row-start",n)]}),t("row-end-auto",[["grid-row-end","auto"]]),a("row-end",{supportsNegative:!0,handleBareValue:({value:n})=>D(n)?n:null,themeKeys:["--grid-row-end"],handle:n=>[d("grid-row-end",n)]}),o("row-span",()=>[{values:Array.from({length:12},(n,p)=>`${p+1}`),valueThemeKeys:[]}]),o("row-start",()=>[{supportsNegative:!0,values:Array.from({length:13},(n,p)=>`${p+1}`),valueThemeKeys:["--grid-row-start"]}]),o("row-end",()=>[{supportsNegative:!0,values:Array.from({length:13},(n,p)=>`${p+1}`),valueThemeKeys:["--grid-row-end"]}]),t("float-start",[["float","inline-start"]]),t("float-end",[["float","inline-end"]]),t("float-right",[["float","right"]]),t("float-left",[["float","left"]]),t("float-none",[["float","none"]]),t("clear-start",[["clear","inline-start"]]),t("clear-end",[["clear","inline-end"]]),t("clear-right",[["clear","right"]]),t("clear-left",[["clear","left"]]),t("clear-both",[["clear","both"]]),t("clear-none",[["clear","none"]]);for(let[n,p]of[["m","margin"],["mx","margin-inline"],["my","margin-block"],["ms","margin-inline-start"],["me","margin-inline-end"],["mt","margin-top"],["mr","margin-right"],["mb","margin-bottom"],["ml","margin-left"]])t(`${n}-auto`,[[p,"auto"]]),s(n,["--margin","--spacing"],g=>[d(p,g)],{supportsNegative:!0});t("box-border",[["box-sizing","border-box"]]),t("box-content",[["box-sizing","content-box"]]),t("line-clamp-none",[["overflow","visible"],["display","block"],["-webkit-box-orient","horizontal"],["-webkit-line-clamp","unset"]]),a("line-clamp",{themeKeys:["--line-clamp"],handleBareValue:({value:n})=>D(n)?n:null,handle:n=>[d("overflow","hidden"),d("display","-webkit-box"),d("-webkit-box-orient","vertical"),d("-webkit-line-clamp",n)]}),o("line-clamp",()=>[{values:["1","2","3","4","5","6"],valueThemeKeys:["--line-clamp"]}]),t("block",[["display","block"]]),t("inline-block",[["display","inline-block"]]),t("inline",[["display","inline"]]),t("hidden",[["display","none"]]),t("inline-flex",[["display","inline-flex"]]),t("table",[["display","table"]]),t("inline-table",[["display","inline-table"]]),t("table-caption",[["display","table-caption"]]),t("table-cell",[["display","table-cell"]]),t("table-column",[["display","table-column"]]),t("table-column-group",[["display","table-column-group"]]),t("table-footer-group",[["display","table-footer-group"]]),t("table-header-group",[["display","table-header-group"]]),t("table-row-group",[["display","table-row-group"]]),t("table-row",[["display","table-row"]]),t("flow-root",[["display","flow-root"]]),t("flex",[["display","flex"]]),t("grid",[["display","grid"]]),t("inline-grid",[["display","inline-grid"]]),t("contents",[["display","contents"]]),t("list-item",[["display","list-item"]]),t("field-sizing-content",[["field-sizing","content"]]),t("field-sizing-fixed",[["field-sizing","fixed"]]),t("aspect-auto",[["aspect-ratio","auto"]]),t("aspect-square",[["aspect-ratio","1 / 1"]]),a("aspect",{themeKeys:["--aspect"],handleBareValue:({fraction:n})=>{if(n===null)return null;let[p,g]=W(n,"/");return!D(p)||!D(g)?null:n},handle:n=>[d("aspect-ratio",n)]});for(let[n,p]of[["full","100%"],["svw","100svw"],["lvw","100lvw"],["dvw","100dvw"],["svh","100svh"],["lvh","100lvh"],["dvh","100dvh"],["min","min-content"],["max","max-content"],["fit","fit-content"]])t(`size-${n}`,[["--tw-sort","size"],["width",p],["height",p]]),t(`w-${n}`,[["width",p]]),t(`h-${n}`,[["height",p]]),t(`min-w-${n}`,[["min-width",p]]),t(`min-h-${n}`,[["min-height",p]]),t(`max-w-${n}`,[["max-width",p]]),t(`max-h-${n}`,[["max-height",p]]);t("size-auto",[["--tw-sort","size"],["width","auto"],["height","auto"]]),t("w-auto",[["width","auto"]]),t("h-auto",[["height","auto"]]),t("min-w-auto",[["min-width","auto"]]),t("min-h-auto",[["min-height","auto"]]),t("h-lh",[["height","1lh"]]),t("min-h-lh",[["min-height","1lh"]]),t("max-h-lh",[["max-height","1lh"]]),t("w-screen",[["width","100vw"]]),t("min-w-screen",[["min-width","100vw"]]),t("max-w-screen",[["max-width","100vw"]]),t("h-screen",[["height","100vh"]]),t("min-h-screen",[["min-height","100vh"]]),t("max-h-screen",[["max-height","100vh"]]),t("max-w-none",[["max-width","none"]]),t("max-h-none",[["max-height","none"]]),s("size",["--size","--spacing"],n=>[d("--tw-sort","size"),d("width",n),d("height",n)],{supportsFractions:!0});for(let[n,p,g]of[["w",["--width","--spacing","--container"],"width"],["min-w",["--min-width","--spacing","--container"],"min-width"],["max-w",["--max-width","--spacing","--container"],"max-width"],["h",["--height","--spacing"],"height"],["min-h",["--min-height","--height","--spacing"],"min-height"],["max-h",["--max-height","--height","--spacing"],"max-height"]])s(n,p,$=>[d(g,$)],{supportsFractions:!0});r.static("container",()=>{let n=[...e.namespace("--breakpoint").values()];n.sort((g,$)=>dt(g,$,"asc"));let p=[d("--tw-sort","--tw-container-component"),d("width","100%")];for(let g of n)p.push(H("@media",`(width >= ${g})`,[d("max-width",g)]));return p}),t("flex-auto",[["flex","auto"]]),t("flex-initial",[["flex","0 auto"]]),t("flex-none",[["flex","none"]]),r.functional("flex",n=>{if(n.value){if(n.value.kind==="arbitrary")return n.modifier?void 0:[d("flex",n.value.value)];if(n.value.fraction){let[p,g]=W(n.value.fraction,"/");return!D(p)||!D(g)?void 0:[d("flex",`calc(${n.value.fraction} * 100%)`)]}if(D(n.value.value))return n.modifier?void 0:[d("flex",n.value.value)]}}),o("flex",()=>[{supportsFractions:!0},{values:Array.from({length:12},(n,p)=>`${p+1}`)}]),a("shrink",{defaultValue:"1",handleBareValue:({value:n})=>D(n)?n:null,handle:n=>[d("flex-shrink",n)]}),a("grow",{defaultValue:"1",handleBareValue:({value:n})=>D(n)?n:null,handle:n=>[d("flex-grow",n)]}),o("shrink",()=>[{values:["0"],valueThemeKeys:[],hasDefaultValue:!0}]),o("grow",()=>[{values:["0"],valueThemeKeys:[],hasDefaultValue:!0}]),t("basis-auto",[["flex-basis","auto"]]),t("basis-full",[["flex-basis","100%"]]),s("basis",["--flex-basis","--spacing","--container"],n=>[d("flex-basis",n)],{supportsFractions:!0}),t("table-auto",[["table-layout","auto"]]),t("table-fixed",[["table-layout","fixed"]]),t("caption-top",[["caption-side","top"]]),t("caption-bottom",[["caption-side","bottom"]]),t("border-collapse",[["border-collapse","collapse"]]),t("border-separate",[["border-collapse","separate"]]);let l=()=>B([N("--tw-border-spacing-x","0","<length>"),N("--tw-border-spacing-y","0","<length>")]);s("border-spacing",["--border-spacing","--spacing"],n=>[l(),d("--tw-border-spacing-x",n),d("--tw-border-spacing-y",n),d("border-spacing","var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]),s("border-spacing-x",["--border-spacing","--spacing"],n=>[l(),d("--tw-border-spacing-x",n),d("border-spacing","var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]),s("border-spacing-y",["--border-spacing","--spacing"],n=>[l(),d("--tw-border-spacing-y",n),d("border-spacing","var(--tw-border-spacing-x) var(--tw-border-spacing-y)")]),t("origin-center",[["transform-origin","center"]]),t("origin-top",[["transform-origin","top"]]),t("origin-top-right",[["transform-origin","top right"]]),t("origin-right",[["transform-origin","right"]]),t("origin-bottom-right",[["transform-origin","bottom right"]]),t("origin-bottom",[["transform-origin","bottom"]]),t("origin-bottom-left",[["transform-origin","bottom left"]]),t("origin-left",[["transform-origin","left"]]),t("origin-top-left",[["transform-origin","top left"]]),a("origin",{themeKeys:["--transform-origin"],handle:n=>[d("transform-origin",n)]}),t("perspective-origin-center",[["perspective-origin","center"]]),t("perspective-origin-top",[["perspective-origin","top"]]),t("perspective-origin-top-right",[["perspective-origin","top right"]]),t("perspective-origin-right",[["perspective-origin","right"]]),t("perspective-origin-bottom-right",[["perspective-origin","bottom right"]]),t("perspective-origin-bottom",[["perspective-origin","bottom"]]),t("perspective-origin-bottom-left",[["perspective-origin","bottom left"]]),t("perspective-origin-left",[["perspective-origin","left"]]),t("perspective-origin-top-left",[["perspective-origin","top left"]]),a("perspective-origin",{themeKeys:["--perspective-origin"],handle:n=>[d("perspective-origin",n)]}),t("perspective-none",[["perspective","none"]]),a("perspective",{themeKeys:["--perspective"],handle:n=>[d("perspective",n)]});let i=()=>B([N("--tw-translate-x","0"),N("--tw-translate-y","0"),N("--tw-translate-z","0")]);t("translate-none",[["translate","none"]]),t("-translate-full",[i,["--tw-translate-x","-100%"],["--tw-translate-y","-100%"],["translate","var(--tw-translate-x) var(--tw-translate-y)"]]),t("translate-full",[i,["--tw-translate-x","100%"],["--tw-translate-y","100%"],["translate","var(--tw-translate-x) var(--tw-translate-y)"]]),s("translate",["--translate","--spacing"],n=>[i(),d("--tw-translate-x",n),d("--tw-translate-y",n),d("translate","var(--tw-translate-x) var(--tw-translate-y)")],{supportsNegative:!0,supportsFractions:!0});for(let n of["x","y"])t(`-translate-${n}-full`,[i,[`--tw-translate-${n}`,"-100%"],["translate","var(--tw-translate-x) var(--tw-translate-y)"]]),t(`translate-${n}-full`,[i,[`--tw-translate-${n}`,"100%"],["translate","var(--tw-translate-x) var(--tw-translate-y)"]]),s(`translate-${n}`,["--translate","--spacing"],p=>[i(),d(`--tw-translate-${n}`,p),d("translate","var(--tw-translate-x) var(--tw-translate-y)")],{supportsNegative:!0,supportsFractions:!0});s("translate-z",["--translate","--spacing"],n=>[i(),d("--tw-translate-z",n),d("translate","var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)")],{supportsNegative:!0}),t("translate-3d",[i,["translate","var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)"]]);let c=()=>B([N("--tw-scale-x","1"),N("--tw-scale-y","1"),N("--tw-scale-z","1")]);t("scale-none",[["scale","none"]]);function f({negative:n}){return p=>{if(!p.value||p.modifier)return;let g;return p.value.kind==="arbitrary"?(g=p.value.value,g=n?`calc(${g} * -1)`:g,[d("scale",g)]):(g=e.resolve(p.value.value,["--scale"]),!g&&D(p.value.value)&&(g=`${p.value.value}%`),g?(g=n?`calc(${g} * -1)`:g,[c(),d("--tw-scale-x",g),d("--tw-scale-y",g),d("--tw-scale-z",g),d("scale","var(--tw-scale-x) var(--tw-scale-y)")]):void 0)}}r.functional("-scale",f({negative:!0})),r.functional("scale",f({negative:!1})),o("scale",()=>[{supportsNegative:!0,values:["0","50","75","90","95","100","105","110","125","150","200"],valueThemeKeys:["--scale"]}]);for(let n of["x","y","z"])a(`scale-${n}`,{supportsNegative:!0,themeKeys:["--scale"],handleBareValue:({value:p})=>D(p)?`${p}%`:null,handle:p=>[c(),d(`--tw-scale-${n}`,p),d("scale",`var(--tw-scale-x) var(--tw-scale-y)${n==="z"?" var(--tw-scale-z)":""}`)]}),o(`scale-${n}`,()=>[{supportsNegative:!0,values:["0","50","75","90","95","100","105","110","125","150","200"],valueThemeKeys:["--scale"]}]);t("scale-3d",[c,["scale","var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)"]]),t("rotate-none",[["rotate","none"]]);function m({negative:n}){return p=>{if(!p.value||p.modifier)return;let g;if(p.value.kind==="arbitrary"){g=p.value.value;let $=p.value.dataType??re(g,["angle","vector"]);if($==="vector")return[d("rotate",`${g} var(--tw-rotate)`)];if($!=="angle")return[d("rotate",n?`calc(${g} * -1)`:g)]}else if(g=e.resolve(p.value.value,["--rotate"]),!g&&D(p.value.value)&&(g=`${p.value.value}deg`),!g)return;return[d("rotate",n?`calc(${g} * -1)`:g)]}}r.functional("-rotate",m({negative:!0})),r.functional("rotate",m({negative:!1})),o("rotate",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12","45","90","180"],valueThemeKeys:["--rotate"]}]);{let n=["var(--tw-rotate-x,)","var(--tw-rotate-y,)","var(--tw-rotate-z,)","var(--tw-skew-x,)","var(--tw-skew-y,)"].join(" "),p=()=>B([N("--tw-rotate-x"),N("--tw-rotate-y"),N("--tw-rotate-z"),N("--tw-skew-x"),N("--tw-skew-y")]);for(let g of["x","y","z"])a(`rotate-${g}`,{supportsNegative:!0,themeKeys:["--rotate"],handleBareValue:({value:$})=>D($)?`${$}deg`:null,handle:$=>[p(),d(`--tw-rotate-${g}`,`rotate${g.toUpperCase()}(${$})`),d("transform",n)]}),o(`rotate-${g}`,()=>[{supportsNegative:!0,values:["0","1","2","3","6","12","45","90","180"],valueThemeKeys:["--rotate"]}]);a("skew",{supportsNegative:!0,themeKeys:["--skew"],handleBareValue:({value:g})=>D(g)?`${g}deg`:null,handle:g=>[p(),d("--tw-skew-x",`skewX(${g})`),d("--tw-skew-y",`skewY(${g})`),d("transform",n)]}),a("skew-x",{supportsNegative:!0,themeKeys:["--skew"],handleBareValue:({value:g})=>D(g)?`${g}deg`:null,handle:g=>[p(),d("--tw-skew-x",`skewX(${g})`),d("transform",n)]}),a("skew-y",{supportsNegative:!0,themeKeys:["--skew"],handleBareValue:({value:g})=>D(g)?`${g}deg`:null,handle:g=>[p(),d("--tw-skew-y",`skewY(${g})`),d("transform",n)]}),o("skew",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12"],valueThemeKeys:["--skew"]}]),o("skew-x",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12"],valueThemeKeys:["--skew"]}]),o("skew-y",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12"],valueThemeKeys:["--skew"]}]),r.functional("transform",g=>{if(g.modifier)return;let $=null;if(g.value?g.value.kind==="arbitrary"&&($=g.value.value):$=n,$!==null)return[p(),d("transform",$)]}),o("transform",()=>[{hasDefaultValue:!0}]),t("transform-cpu",[["transform",n]]),t("transform-gpu",[["transform",`translateZ(0) ${n}`]]),t("transform-none",[["transform","none"]])}t("transform-flat",[["transform-style","flat"]]),t("transform-3d",[["transform-style","preserve-3d"]]),t("transform-content",[["transform-box","content-box"]]),t("transform-border",[["transform-box","border-box"]]),t("transform-fill",[["transform-box","fill-box"]]),t("transform-stroke",[["transform-box","stroke-box"]]),t("transform-view",[["transform-box","view-box"]]),t("backface-visible",[["backface-visibility","visible"]]),t("backface-hidden",[["backface-visibility","hidden"]]);for(let n of"auto.default.pointer.wait.text.move.help.not-allowed.none.context-menu.progress.cell.crosshair.vertical-text.alias.copy.no-drop.grab.grabbing.all-scroll.col-resize.row-resize.n-resize.e-resize.s-resize.w-resize.ne-resize.nw-resize.se-resize.sw-resize.ew-resize.ns-resize.nesw-resize.nwse-resize.zoom-in.zoom-out".split("."))t(`cursor-${n}`,[["cursor",n]]);a("cursor",{themeKeys:["--cursor"],handle:n=>[d("cursor",n)]});for(let n of["auto","none","manipulation"])t(`touch-${n}`,[["touch-action",n]]);let w=()=>B([N("--tw-pan-x"),N("--tw-pan-y"),N("--tw-pinch-zoom")]);for(let n of["x","left","right"])t(`touch-pan-${n}`,[w,["--tw-pan-x",`pan-${n}`],["touch-action","var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);for(let n of["y","up","down"])t(`touch-pan-${n}`,[w,["--tw-pan-y",`pan-${n}`],["touch-action","var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);t("touch-pinch-zoom",[w,["--tw-pinch-zoom","pinch-zoom"],["touch-action","var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)"]]);for(let n of["none","text","all","auto"])t(`select-${n}`,[["-webkit-user-select",n],["user-select",n]]);t("resize-none",[["resize","none"]]),t("resize-x",[["resize","horizontal"]]),t("resize-y",[["resize","vertical"]]),t("resize",[["resize","both"]]),t("snap-none",[["scroll-snap-type","none"]]);let k=()=>B([N("--tw-scroll-snap-strictness","proximity","*")]);for(let n of["x","y","both"])t(`snap-${n}`,[k,["scroll-snap-type",`${n} var(--tw-scroll-snap-strictness)`]]);t("snap-mandatory",[k,["--tw-scroll-snap-strictness","mandatory"]]),t("snap-proximity",[k,["--tw-scroll-snap-strictness","proximity"]]),t("snap-align-none",[["scroll-snap-align","none"]]),t("snap-start",[["scroll-snap-align","start"]]),t("snap-end",[["scroll-snap-align","end"]]),t("snap-center",[["scroll-snap-align","center"]]),t("snap-normal",[["scroll-snap-stop","normal"]]),t("snap-always",[["scroll-snap-stop","always"]]);for(let[n,p]of[["scroll-m","scroll-margin"],["scroll-mx","scroll-margin-inline"],["scroll-my","scroll-margin-block"],["scroll-ms","scroll-margin-inline-start"],["scroll-me","scroll-margin-inline-end"],["scroll-mt","scroll-margin-top"],["scroll-mr","scroll-margin-right"],["scroll-mb","scroll-margin-bottom"],["scroll-ml","scroll-margin-left"]])s(n,["--scroll-margin","--spacing"],g=>[d(p,g)],{supportsNegative:!0});for(let[n,p]of[["scroll-p","scroll-padding"],["scroll-px","scroll-padding-inline"],["scroll-py","scroll-padding-block"],["scroll-ps","scroll-padding-inline-start"],["scroll-pe","scroll-padding-inline-end"],["scroll-pt","scroll-padding-top"],["scroll-pr","scroll-padding-right"],["scroll-pb","scroll-padding-bottom"],["scroll-pl","scroll-padding-left"]])s(n,["--scroll-padding","--spacing"],g=>[d(p,g)]);t("list-inside",[["list-style-position","inside"]]),t("list-outside",[["list-style-position","outside"]]),t("list-none",[["list-style-type","none"]]),t("list-disc",[["list-style-type","disc"]]),t("list-decimal",[["list-style-type","decimal"]]),a("list",{themeKeys:["--list-style-type"],handle:n=>[d("list-style-type",n)]}),t("list-image-none",[["list-style-image","none"]]),a("list-image",{themeKeys:["--list-style-image"],handle:n=>[d("list-style-image",n)]}),t("appearance-none",[["appearance","none"]]),t("appearance-auto",[["appearance","auto"]]),t("scheme-normal",[["color-scheme","normal"]]),t("scheme-dark",[["color-scheme","dark"]]),t("scheme-light",[["color-scheme","light"]]),t("scheme-light-dark",[["color-scheme","light dark"]]),t("scheme-only-dark",[["color-scheme","only dark"]]),t("scheme-only-light",[["color-scheme","only light"]]),t("columns-auto",[["columns","auto"]]),a("columns",{themeKeys:["--columns","--container"],handleBareValue:({value:n})=>D(n)?n:null,handle:n=>[d("columns",n)]}),o("columns",()=>[{values:Array.from({length:12},(n,p)=>`${p+1}`),valueThemeKeys:["--columns","--container"]}]);for(let n of["auto","avoid","all","avoid-page","page","left","right","column"])t(`break-before-${n}`,[["break-before",n]]);for(let n of["auto","avoid","avoid-page","avoid-column"])t(`break-inside-${n}`,[["break-inside",n]]);for(let n of["auto","avoid","all","avoid-page","page","left","right","column"])t(`break-after-${n}`,[["break-after",n]]);t("grid-flow-row",[["grid-auto-flow","row"]]),t("grid-flow-col",[["grid-auto-flow","column"]]),t("grid-flow-dense",[["grid-auto-flow","dense"]]),t("grid-flow-row-dense",[["grid-auto-flow","row dense"]]),t("grid-flow-col-dense",[["grid-auto-flow","column dense"]]),t("auto-cols-auto",[["grid-auto-columns","auto"]]),t("auto-cols-min",[["grid-auto-columns","min-content"]]),t("auto-cols-max",[["grid-auto-columns","max-content"]]),t("auto-cols-fr",[["grid-auto-columns","minmax(0, 1fr)"]]),a("auto-cols",{themeKeys:["--grid-auto-columns"],handle:n=>[d("grid-auto-columns",n)]}),t("auto-rows-auto",[["grid-auto-rows","auto"]]),t("auto-rows-min",[["grid-auto-rows","min-content"]]),t("auto-rows-max",[["grid-auto-rows","max-content"]]),t("auto-rows-fr",[["grid-auto-rows","minmax(0, 1fr)"]]),a("auto-rows",{themeKeys:["--grid-auto-rows"],handle:n=>[d("grid-auto-rows",n)]}),t("grid-cols-none",[["grid-template-columns","none"]]),t("grid-cols-subgrid",[["grid-template-columns","subgrid"]]),a("grid-cols",{themeKeys:["--grid-template-columns"],handleBareValue:({value:n})=>ir(n)?`repeat(${n}, minmax(0, 1fr))`:null,handle:n=>[d("grid-template-columns",n)]}),t("grid-rows-none",[["grid-template-rows","none"]]),t("grid-rows-subgrid",[["grid-template-rows","subgrid"]]),a("grid-rows",{themeKeys:["--grid-template-rows"],handleBareValue:({value:n})=>ir(n)?`repeat(${n}, minmax(0, 1fr))`:null,handle:n=>[d("grid-template-rows",n)]}),o("grid-cols",()=>[{values:Array.from({length:12},(n,p)=>`${p+1}`),valueThemeKeys:["--grid-template-columns"]}]),o("grid-rows",()=>[{values:Array.from({length:12},(n,p)=>`${p+1}`),valueThemeKeys:["--grid-template-rows"]}]),t("flex-row",[["flex-direction","row"]]),t("flex-row-reverse",[["flex-direction","row-reverse"]]),t("flex-col",[["flex-direction","column"]]),t("flex-col-reverse",[["flex-direction","column-reverse"]]),t("flex-wrap",[["flex-wrap","wrap"]]),t("flex-nowrap",[["flex-wrap","nowrap"]]),t("flex-wrap-reverse",[["flex-wrap","wrap-reverse"]]),t("place-content-center",[["place-content","center"]]),t("place-content-start",[["place-content","start"]]),t("place-content-end",[["place-content","end"]]),t("place-content-center-safe",[["place-content","safe center"]]),t("place-content-end-safe",[["place-content","safe end"]]),t("place-content-between",[["place-content","space-between"]]),t("place-content-around",[["place-content","space-around"]]),t("place-content-evenly",[["place-content","space-evenly"]]),t("place-content-baseline",[["place-content","baseline"]]),t("place-content-stretch",[["place-content","stretch"]]),t("place-items-center",[["place-items","center"]]),t("place-items-start",[["place-items","start"]]),t("place-items-end",[["place-items","end"]]),t("place-items-center-safe",[["place-items","safe center"]]),t("place-items-end-safe",[["place-items","safe end"]]),t("place-items-baseline",[["place-items","baseline"]]),t("place-items-stretch",[["place-items","stretch"]]),t("content-normal",[["align-content","normal"]]),t("content-center",[["align-content","center"]]),t("content-start",[["align-content","flex-start"]]),t("content-end",[["align-content","flex-end"]]),t("content-center-safe",[["align-content","safe center"]]),t("content-end-safe",[["align-content","safe flex-end"]]),t("content-between",[["align-content","space-between"]]),t("content-around",[["align-content","space-around"]]),t("content-evenly",[["align-content","space-evenly"]]),t("content-baseline",[["align-content","baseline"]]),t("content-stretch",[["align-content","stretch"]]),t("items-center",[["align-items","center"]]),t("items-start",[["align-items","flex-start"]]),t("items-end",[["align-items","flex-end"]]),t("items-center-safe",[["align-items","safe center"]]),t("items-end-safe",[["align-items","safe flex-end"]]),t("items-baseline",[["align-items","baseline"]]),t("items-baseline-last",[["align-items","last baseline"]]),t("items-stretch",[["align-items","stretch"]]),t("justify-normal",[["justify-content","normal"]]),t("justify-center",[["justify-content","center"]]),t("justify-start",[["justify-content","flex-start"]]),t("justify-end",[["justify-content","flex-end"]]),t("justify-center-safe",[["justify-content","safe center"]]),t("justify-end-safe",[["justify-content","safe flex-end"]]),t("justify-between",[["justify-content","space-between"]]),t("justify-around",[["justify-content","space-around"]]),t("justify-evenly",[["justify-content","space-evenly"]]),t("justify-baseline",[["justify-content","baseline"]]),t("justify-stretch",[["justify-content","stretch"]]),t("justify-items-normal",[["justify-items","normal"]]),t("justify-items-center",[["justify-items","center"]]),t("justify-items-start",[["justify-items","start"]]),t("justify-items-end",[["justify-items","end"]]),t("justify-items-center-safe",[["justify-items","safe center"]]),t("justify-items-end-safe",[["justify-items","safe end"]]),t("justify-items-stretch",[["justify-items","stretch"]]),s("gap",["--gap","--spacing"],n=>[d("gap",n)]),s("gap-x",["--gap","--spacing"],n=>[d("column-gap",n)]),s("gap-y",["--gap","--spacing"],n=>[d("row-gap",n)]),s("space-x",["--space","--spacing"],n=>[B([N("--tw-space-x-reverse","0")]),Z(":where(& > :not(:last-child))",[d("--tw-sort","row-gap"),d("--tw-space-x-reverse","0"),d("margin-inline-start",`calc(${n} * var(--tw-space-x-reverse))`),d("margin-inline-end",`calc(${n} * calc(1 - var(--tw-space-x-reverse)))`)])],{supportsNegative:!0}),s("space-y",["--space","--spacing"],n=>[B([N("--tw-space-y-reverse","0")]),Z(":where(& > :not(:last-child))",[d("--tw-sort","column-gap"),d("--tw-space-y-reverse","0"),d("margin-block-start",`calc(${n} * var(--tw-space-y-reverse))`),d("margin-block-end",`calc(${n} * calc(1 - var(--tw-space-y-reverse)))`)])],{supportsNegative:!0}),t("space-x-reverse",[()=>B([N("--tw-space-x-reverse","0")]),()=>Z(":where(& > :not(:last-child))",[d("--tw-sort","row-gap"),d("--tw-space-x-reverse","1")])]),t("space-y-reverse",[()=>B([N("--tw-space-y-reverse","0")]),()=>Z(":where(& > :not(:last-child))",[d("--tw-sort","column-gap"),d("--tw-space-y-reverse","1")])]),t("accent-auto",[["accent-color","auto"]]),u("accent",{themeKeys:["--accent-color","--color"],handle:n=>[d("accent-color",n)]}),u("caret",{themeKeys:["--caret-color","--color"],handle:n=>[d("caret-color",n)]}),u("divide",{themeKeys:["--divide-color","--border-color","--color"],handle:n=>[Z(":where(& > :not(:last-child))",[d("--tw-sort","divide-color"),d("border-color",n)])]}),t("place-self-auto",[["place-self","auto"]]),t("place-self-start",[["place-self","start"]]),t("place-self-end",[["place-self","end"]]),t("place-self-center",[["place-self","center"]]),t("place-self-end-safe",[["place-self","safe end"]]),t("place-self-center-safe",[["place-self","safe center"]]),t("place-self-stretch",[["place-self","stretch"]]),t("self-auto",[["align-self","auto"]]),t("self-start",[["align-self","flex-start"]]),t("self-end",[["align-self","flex-end"]]),t("self-center",[["align-self","center"]]),t("self-end-safe",[["align-self","safe flex-end"]]),t("self-center-safe",[["align-self","safe center"]]),t("self-stretch",[["align-self","stretch"]]),t("self-baseline",[["align-self","baseline"]]),t("self-baseline-last",[["align-self","last baseline"]]),t("justify-self-auto",[["justify-self","auto"]]),t("justify-self-start",[["justify-self","flex-start"]]),t("justify-self-end",[["justify-self","flex-end"]]),t("justify-self-center",[["justify-self","center"]]),t("justify-self-end-safe",[["justify-self","safe flex-end"]]),t("justify-self-center-safe",[["justify-self","safe center"]]),t("justify-self-stretch",[["justify-self","stretch"]]);for(let n of["auto","hidden","clip","visible","scroll"])t(`overflow-${n}`,[["overflow",n]]),t(`overflow-x-${n}`,[["overflow-x",n]]),t(`overflow-y-${n}`,[["overflow-y",n]]);for(let n of["auto","contain","none"])t(`overscroll-${n}`,[["overscroll-behavior",n]]),t(`overscroll-x-${n}`,[["overscroll-behavior-x",n]]),t(`overscroll-y-${n}`,[["overscroll-behavior-y",n]]);t("scroll-auto",[["scroll-behavior","auto"]]),t("scroll-smooth",[["scroll-behavior","smooth"]]),t("truncate",[["overflow","hidden"],["text-overflow","ellipsis"],["white-space","nowrap"]]),t("text-ellipsis",[["text-overflow","ellipsis"]]),t("text-clip",[["text-overflow","clip"]]),t("hyphens-none",[["-webkit-hyphens","none"],["hyphens","none"]]),t("hyphens-manual",[["-webkit-hyphens","manual"],["hyphens","manual"]]),t("hyphens-auto",[["-webkit-hyphens","auto"],["hyphens","auto"]]),t("whitespace-normal",[["white-space","normal"]]),t("whitespace-nowrap",[["white-space","nowrap"]]),t("whitespace-pre",[["white-space","pre"]]),t("whitespace-pre-line",[["white-space","pre-line"]]),t("whitespace-pre-wrap",[["white-space","pre-wrap"]]),t("whitespace-break-spaces",[["white-space","break-spaces"]]),t("text-wrap",[["text-wrap","wrap"]]),t("text-nowrap",[["text-wrap","nowrap"]]),t("text-balance",[["text-wrap","balance"]]),t("text-pretty",[["text-wrap","pretty"]]),t("break-normal",[["overflow-wrap","normal"],["word-break","normal"]]),t("break-words",[["overflow-wrap","break-word"]]),t("break-all",[["word-break","break-all"]]),t("break-keep",[["word-break","keep-all"]]),t("wrap-anywhere",[["overflow-wrap","anywhere"]]),t("wrap-break-word",[["overflow-wrap","break-word"]]),t("wrap-normal",[["overflow-wrap","normal"]]);for(let[n,p]of[["rounded",["border-radius"]],["rounded-s",["border-start-start-radius","border-end-start-radius"]],["rounded-e",["border-start-end-radius","border-end-end-radius"]],["rounded-t",["border-top-left-radius","border-top-right-radius"]],["rounded-r",["border-top-right-radius","border-bottom-right-radius"]],["rounded-b",["border-bottom-right-radius","border-bottom-left-radius"]],["rounded-l",["border-top-left-radius","border-bottom-left-radius"]],["rounded-ss",["border-start-start-radius"]],["rounded-se",["border-start-end-radius"]],["rounded-ee",["border-end-end-radius"]],["rounded-es",["border-end-start-radius"]],["rounded-tl",["border-top-left-radius"]],["rounded-tr",["border-top-right-radius"]],["rounded-br",["border-bottom-right-radius"]],["rounded-bl",["border-bottom-left-radius"]]])t(`${n}-none`,p.map(g=>[g,"0"])),t(`${n}-full`,p.map(g=>[g,"calc(infinity * 1px)"])),a(n,{themeKeys:["--radius"],handle:g=>p.map($=>d($,g))});t("border-solid",[["--tw-border-style","solid"],["border-style","solid"]]),t("border-dashed",[["--tw-border-style","dashed"],["border-style","dashed"]]),t("border-dotted",[["--tw-border-style","dotted"],["border-style","dotted"]]),t("border-double",[["--tw-border-style","double"],["border-style","double"]]),t("border-hidden",[["--tw-border-style","hidden"],["border-style","hidden"]]),t("border-none",[["--tw-border-style","none"],["border-style","none"]]);{let n=function(g,$){r.functional(g,x=>{if(!x.value){if(x.modifier)return;let O=e.get(["--default-border-width"])??"1px",I=$.width(O);return I?[p(),...I]:void 0}if(x.value.kind==="arbitrary"){let O=x.value.value;switch(x.value.dataType??re(O,["color","line-width","length"])){case"line-width":case"length":{if(x.modifier)return;let I=$.width(O);return I?[p(),...I]:void 0}default:return O=ae(O,x.modifier,e),O===null?void 0:$.color(O)}}{let O=de(x,e,["--border-color","--color"]);if(O)return $.color(O)}{if(x.modifier)return;let O=e.resolve(x.value.value,["--border-width"]);if(O){let I=$.width(O);return I?[p(),...I]:void 0}if(D(x.value.value)){let I=$.width(`${x.value.value}px`);return I?[p(),...I]:void 0}}}),o(g,()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--border-color","--color"],modifiers:Array.from({length:21},(x,O)=>`${O*5}`),hasDefaultValue:!0},{values:["0","2","4","8"],valueThemeKeys:["--border-width"]}])},p=()=>B([N("--tw-border-style","solid")]);n("border",{width:g=>[d("border-style","var(--tw-border-style)"),d("border-width",g)],color:g=>[d("border-color",g)]}),n("border-x",{width:g=>[d("border-inline-style","var(--tw-border-style)"),d("border-inline-width",g)],color:g=>[d("border-inline-color",g)]}),n("border-y",{width:g=>[d("border-block-style","var(--tw-border-style)"),d("border-block-width",g)],color:g=>[d("border-block-color",g)]}),n("border-s",{width:g=>[d("border-inline-start-style","var(--tw-border-style)"),d("border-inline-start-width",g)],color:g=>[d("border-inline-start-color",g)]}),n("border-e",{width:g=>[d("border-inline-end-style","var(--tw-border-style)"),d("border-inline-end-width",g)],color:g=>[d("border-inline-end-color",g)]}),n("border-t",{width:g=>[d("border-top-style","var(--tw-border-style)"),d("border-top-width",g)],color:g=>[d("border-top-color",g)]}),n("border-r",{width:g=>[d("border-right-style","var(--tw-border-style)"),d("border-right-width",g)],color:g=>[d("border-right-color",g)]}),n("border-b",{width:g=>[d("border-bottom-style","var(--tw-border-style)"),d("border-bottom-width",g)],color:g=>[d("border-bottom-color",g)]}),n("border-l",{width:g=>[d("border-left-style","var(--tw-border-style)"),d("border-left-width",g)],color:g=>[d("border-left-color",g)]}),a("divide-x",{defaultValue:e.get(["--default-border-width"])??"1px",themeKeys:["--divide-width","--border-width"],handleBareValue:({value:g})=>D(g)?`${g}px`:null,handle:g=>[B([N("--tw-divide-x-reverse","0")]),Z(":where(& > :not(:last-child))",[d("--tw-sort","divide-x-width"),p(),d("--tw-divide-x-reverse","0"),d("border-inline-style","var(--tw-border-style)"),d("border-inline-start-width",`calc(${g} * var(--tw-divide-x-reverse))`),d("border-inline-end-width",`calc(${g} * calc(1 - var(--tw-divide-x-reverse)))`)])]}),a("divide-y",{defaultValue:e.get(["--default-border-width"])??"1px",themeKeys:["--divide-width","--border-width"],handleBareValue:({value:g})=>D(g)?`${g}px`:null,handle:g=>[B([N("--tw-divide-y-reverse","0")]),Z(":where(& > :not(:last-child))",[d("--tw-sort","divide-y-width"),p(),d("--tw-divide-y-reverse","0"),d("border-bottom-style","var(--tw-border-style)"),d("border-top-style","var(--tw-border-style)"),d("border-top-width",`calc(${g} * var(--tw-divide-y-reverse))`),d("border-bottom-width",`calc(${g} * calc(1 - var(--tw-divide-y-reverse)))`)])]}),o("divide-x",()=>[{values:["0","2","4","8"],valueThemeKeys:["--divide-width","--border-width"],hasDefaultValue:!0}]),o("divide-y",()=>[{values:["0","2","4","8"],valueThemeKeys:["--divide-width","--border-width"],hasDefaultValue:!0}]),t("divide-x-reverse",[()=>B([N("--tw-divide-x-reverse","0")]),()=>Z(":where(& > :not(:last-child))",[d("--tw-divide-x-reverse","1")])]),t("divide-y-reverse",[()=>B([N("--tw-divide-y-reverse","0")]),()=>Z(":where(& > :not(:last-child))",[d("--tw-divide-y-reverse","1")])]);for(let g of["solid","dashed","dotted","double","none"])t(`divide-${g}`,[()=>Z(":where(& > :not(:last-child))",[d("--tw-sort","divide-style"),d("--tw-border-style",g),d("border-style",g)])])}t("bg-auto",[["background-size","auto"]]),t("bg-cover",[["background-size","cover"]]),t("bg-contain",[["background-size","contain"]]),a("bg-size",{handle(n){if(n)return[d("background-size",n)]}}),t("bg-fixed",[["background-attachment","fixed"]]),t("bg-local",[["background-attachment","local"]]),t("bg-scroll",[["background-attachment","scroll"]]),t("bg-top",[["background-position","top"]]),t("bg-top-left",[["background-position","left top"]]),t("bg-top-right",[["background-position","right top"]]),t("bg-bottom",[["background-position","bottom"]]),t("bg-bottom-left",[["background-position","left bottom"]]),t("bg-bottom-right",[["background-position","right bottom"]]),t("bg-left",[["background-position","left"]]),t("bg-right",[["background-position","right"]]),t("bg-center",[["background-position","center"]]),a("bg-position",{handle(n){if(n)return[d("background-position",n)]}}),t("bg-repeat",[["background-repeat","repeat"]]),t("bg-no-repeat",[["background-repeat","no-repeat"]]),t("bg-repeat-x",[["background-repeat","repeat-x"]]),t("bg-repeat-y",[["background-repeat","repeat-y"]]),t("bg-repeat-round",[["background-repeat","round"]]),t("bg-repeat-space",[["background-repeat","space"]]),t("bg-none",[["background-image","none"]]);{let n=function(O){let I="in oklab";if((O==null?void 0:O.kind)==="named")switch(O.value){case"longer":case"shorter":case"increasing":case"decreasing":I=`in oklch ${O.value} hue`;break;default:I=`in ${O.value}`}else(O==null?void 0:O.kind)==="arbitrary"&&(I=O.value);return I},p=function({negative:O}){return I=>{if(!I.value)return;if(I.value.kind==="arbitrary"){if(I.modifier)return;let R=I.value.value;switch(I.value.dataType??re(R,["angle"])){case"angle":return R=O?`calc(${R} * -1)`:`${R}`,[d("--tw-gradient-position",R),d("background-image",`linear-gradient(var(--tw-gradient-stops,${R}))`)];default:return O?void 0:[d("--tw-gradient-position",R),d("background-image",`linear-gradient(var(--tw-gradient-stops,${R}))`)]}}let _=I.value.value;if(!O&&x.has(_))_=x.get(_);else if(D(_))_=O?`calc(${_}deg * -1)`:`${_}deg`;else return;let F=n(I.modifier);return[d("--tw-gradient-position",`${_}`),se("@supports (background-image: linear-gradient(in lab, red, red))",[d("--tw-gradient-position",`${_} ${F}`)]),d("background-image","linear-gradient(var(--tw-gradient-stops))")]}},g=function({negative:O}){return I=>{var R;if(((R=I.value)==null?void 0:R.kind)==="arbitrary"){if(I.modifier)return;let ee=I.value.value;return[d("--tw-gradient-position",ee),d("background-image",`conic-gradient(var(--tw-gradient-stops,${ee}))`)]}let _=n(I.modifier);if(!I.value)return[d("--tw-gradient-position",_),d("background-image","conic-gradient(var(--tw-gradient-stops))")];let F=I.value.value;if(D(F))return F=O?`calc(${F}deg * -1)`:`${F}deg`,[d("--tw-gradient-position",`from ${F} ${_}`),d("background-image","conic-gradient(var(--tw-gradient-stops))")]}},$=["oklab","oklch","srgb","hsl","longer","shorter","increasing","decreasing"],x=new Map([["to-t","to top"],["to-tr","to top right"],["to-r","to right"],["to-br","to bottom right"],["to-b","to bottom"],["to-bl","to bottom left"],["to-l","to left"],["to-tl","to top left"]]);r.functional("-bg-linear",p({negative:!0})),r.functional("bg-linear",p({negative:!1})),o("bg-linear",()=>[{values:[...x.keys()],modifiers:$},{values:["0","30","60","90","120","150","180","210","240","270","300","330"],supportsNegative:!0,modifiers:$}]),r.functional("-bg-conic",g({negative:!0})),r.functional("bg-conic",g({negative:!1})),o("bg-conic",()=>[{hasDefaultValue:!0,modifiers:$},{values:["0","30","60","90","120","150","180","210","240","270","300","330"],supportsNegative:!0,modifiers:$}]),r.functional("bg-radial",O=>{if(!O.value){let I=n(O.modifier);return[d("--tw-gradient-position",I),d("background-image","radial-gradient(var(--tw-gradient-stops))")]}if(O.value.kind==="arbitrary"){if(O.modifier)return;let I=O.value.value;return[d("--tw-gradient-position",I),d("background-image",`radial-gradient(var(--tw-gradient-stops,${I}))`)]}}),o("bg-radial",()=>[{hasDefaultValue:!0,modifiers:$}])}r.functional("bg",n=>{if(n.value){if(n.value.kind==="arbitrary"){let p=n.value.value;switch(n.value.dataType??re(p,["image","color","percentage","position","bg-size","length","url"])){case"percentage":case"position":return n.modifier?void 0:[d("background-position",p)];case"bg-size":case"length":case"size":return n.modifier?void 0:[d("background-size",p)];case"image":case"url":return n.modifier?void 0:[d("background-image",p)];default:return p=ae(p,n.modifier,e),p===null?void 0:[d("background-color",p)]}}{let p=de(n,e,["--background-color","--color"]);if(p)return[d("background-color",p)]}{if(n.modifier)return;let p=e.resolve(n.value.value,["--background-image"]);if(p)return[d("background-image",p)]}}}),o("bg",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--background-color","--color"],modifiers:Array.from({length:21},(n,p)=>`${p*5}`)},{values:[],valueThemeKeys:["--background-image"]}]);let h=()=>B([N("--tw-gradient-position"),N("--tw-gradient-from","#0000","<color>"),N("--tw-gradient-via","#0000","<color>"),N("--tw-gradient-to","#0000","<color>"),N("--tw-gradient-stops"),N("--tw-gradient-via-stops"),N("--tw-gradient-from-position","0%","<length-percentage>"),N("--tw-gradient-via-position","50%","<length-percentage>"),N("--tw-gradient-to-position","100%","<length-percentage>")]);function b(n,p){r.functional(n,g=>{if(g.value){if(g.value.kind==="arbitrary"){let $=g.value.value;switch(g.value.dataType??re($,["color","length","percentage"])){case"length":case"percentage":return g.modifier?void 0:p.position($);default:return $=ae($,g.modifier,e),$===null?void 0:p.color($)}}{let $=de(g,e,["--background-color","--color"]);if($)return p.color($)}{if(g.modifier)return;let $=e.resolve(g.value.value,["--gradient-color-stop-positions"]);if($)return p.position($);if(g.value.value[g.value.value.length-1]==="%"&&D(g.value.value.slice(0,-1)))return p.position(g.value.value)}}}),o(n,()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--background-color","--color"],modifiers:Array.from({length:21},(g,$)=>`${$*5}`)},{values:Array.from({length:21},(g,$)=>`${$*5}%`),valueThemeKeys:["--gradient-color-stop-positions"]}])}b("from",{color:n=>[h(),d("--tw-sort","--tw-gradient-from"),d("--tw-gradient-from",n),d("--tw-gradient-stops","var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")],position:n=>[h(),d("--tw-gradient-from-position",n)]}),t("via-none",[["--tw-gradient-via-stops","initial"]]),b("via",{color:n=>[h(),d("--tw-sort","--tw-gradient-via"),d("--tw-gradient-via",n),d("--tw-gradient-via-stops","var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)"),d("--tw-gradient-stops","var(--tw-gradient-via-stops)")],position:n=>[h(),d("--tw-gradient-via-position",n)]}),b("to",{color:n=>[h(),d("--tw-sort","--tw-gradient-to"),d("--tw-gradient-to",n),d("--tw-gradient-stops","var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))")],position:n=>[h(),d("--tw-gradient-to-position",n)]}),t("mask-none",[["mask-image","none"]]),r.functional("mask",n=>{if(!n.value||n.modifier||n.value.kind!=="arbitrary")return;let p=n.value.value;switch(n.value.dataType??re(p,["image","percentage","position","bg-size","length","url"])){case"percentage":case"position":return n.modifier?void 0:[d("mask-position",p)];case"bg-size":case"length":case"size":return[d("mask-size",p)];case"image":case"url":default:return[d("mask-image",p)]}}),t("mask-add",[["mask-composite","add"]]),t("mask-subtract",[["mask-composite","subtract"]]),t("mask-intersect",[["mask-composite","intersect"]]),t("mask-exclude",[["mask-composite","exclude"]]),t("mask-alpha",[["mask-mode","alpha"]]),t("mask-luminance",[["mask-mode","luminance"]]),t("mask-match",[["mask-mode","match-source"]]),t("mask-type-alpha",[["mask-type","alpha"]]),t("mask-type-luminance",[["mask-type","luminance"]]),t("mask-auto",[["mask-size","auto"]]),t("mask-cover",[["mask-size","cover"]]),t("mask-contain",[["mask-size","contain"]]),a("mask-size",{handle(n){if(n)return[d("mask-size",n)]}}),t("mask-top",[["mask-position","top"]]),t("mask-top-left",[["mask-position","left top"]]),t("mask-top-right",[["mask-position","right top"]]),t("mask-bottom",[["mask-position","bottom"]]),t("mask-bottom-left",[["mask-position","left bottom"]]),t("mask-bottom-right",[["mask-position","right bottom"]]),t("mask-left",[["mask-position","left"]]),t("mask-right",[["mask-position","right"]]),t("mask-center",[["mask-position","center"]]),a("mask-position",{handle(n){if(n)return[d("mask-position",n)]}}),t("mask-repeat",[["mask-repeat","repeat"]]),t("mask-no-repeat",[["mask-repeat","no-repeat"]]),t("mask-repeat-x",[["mask-repeat","repeat-x"]]),t("mask-repeat-y",[["mask-repeat","repeat-y"]]),t("mask-repeat-round",[["mask-repeat","round"]]),t("mask-repeat-space",[["mask-repeat","space"]]),t("mask-clip-border",[["mask-clip","border-box"]]),t("mask-clip-padding",[["mask-clip","padding-box"]]),t("mask-clip-content",[["mask-clip","content-box"]]),t("mask-clip-fill",[["mask-clip","fill-box"]]),t("mask-clip-stroke",[["mask-clip","stroke-box"]]),t("mask-clip-view",[["mask-clip","view-box"]]),t("mask-no-clip",[["mask-clip","no-clip"]]),t("mask-origin-border",[["mask-origin","border-box"]]),t("mask-origin-padding",[["mask-origin","padding-box"]]),t("mask-origin-content",[["mask-origin","content-box"]]),t("mask-origin-fill",[["mask-origin","fill-box"]]),t("mask-origin-stroke",[["mask-origin","stroke-box"]]),t("mask-origin-view",[["mask-origin","view-box"]]);let v=()=>B([N("--tw-mask-linear","linear-gradient(#fff, #fff)"),N("--tw-mask-radial","linear-gradient(#fff, #fff)"),N("--tw-mask-conic","linear-gradient(#fff, #fff)")]);function S(n,p){r.functional(n,g=>{if(g.value){if(g.value.kind==="arbitrary"){let $=g.value.value;switch(g.value.dataType??re($,["length","percentage","color"])){case"color":return $=ae($,g.modifier,e),$===null?void 0:p.color($);case"percentage":return g.modifier||!D($.slice(0,-1))?void 0:p.position($);default:return g.modifier?void 0:p.position($)}}{let $=de(g,e,["--background-color","--color"]);if($)return p.color($)}{if(g.modifier)return;let $=re(g.value.value,["number","percentage"]);if(!$)return;switch($){case"number":{let x=e.resolve(null,["--spacing"]);return!x||!Me(g.value.value)?void 0:p.position(`calc(${x} * ${g.value.value})`)}case"percentage":return D(g.value.value.slice(0,-1))?p.position(g.value.value):void 0;default:return}}}}),o(n,()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--background-color","--color"],modifiers:Array.from({length:21},(g,$)=>`${$*5}`)},{values:Array.from({length:21},(g,$)=>`${$*5}%`),valueThemeKeys:["--gradient-color-stop-positions"]}]),o(n,()=>[{values:Array.from({length:21},(g,$)=>`${$*5}%`)},{values:e.get(["--spacing"])?ht:[]},{values:["current","inherit","transparent"],valueThemeKeys:["--background-color","--color"],modifiers:Array.from({length:21},(g,$)=>`${$*5}`)}])}let y=()=>B([N("--tw-mask-left","linear-gradient(#fff, #fff)"),N("--tw-mask-right","linear-gradient(#fff, #fff)"),N("--tw-mask-bottom","linear-gradient(#fff, #fff)"),N("--tw-mask-top","linear-gradient(#fff, #fff)")]);function A(n,p,g){S(n,{color($){let x=[v(),y(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-linear","var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];for(let O of["top","right","bottom","left"])g[O]&&(x.push(d(`--tw-mask-${O}`,`linear-gradient(to ${O}, var(--tw-mask-${O}-from-color) var(--tw-mask-${O}-from-position), var(--tw-mask-${O}-to-color) var(--tw-mask-${O}-to-position))`)),x.push(B([N(`--tw-mask-${O}-from-position`,"0%"),N(`--tw-mask-${O}-to-position`,"100%"),N(`--tw-mask-${O}-from-color`,"black"),N(`--tw-mask-${O}-to-color`,"transparent")])),x.push(d(`--tw-mask-${O}-${p}-color`,$)));return x},position($){let x=[v(),y(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-linear","var(--tw-mask-left), var(--tw-mask-right), var(--tw-mask-bottom), var(--tw-mask-top)")];for(let O of["top","right","bottom","left"])g[O]&&(x.push(d(`--tw-mask-${O}`,`linear-gradient(to ${O}, var(--tw-mask-${O}-from-color) var(--tw-mask-${O}-from-position), var(--tw-mask-${O}-to-color) var(--tw-mask-${O}-to-position))`)),x.push(B([N(`--tw-mask-${O}-from-position`,"0%"),N(`--tw-mask-${O}-to-position`,"100%"),N(`--tw-mask-${O}-from-color`,"black"),N(`--tw-mask-${O}-to-color`,"transparent")])),x.push(d(`--tw-mask-${O}-${p}-position`,$)));return x}})}A("mask-x-from","from",{top:!1,right:!0,bottom:!1,left:!0}),A("mask-x-to","to",{top:!1,right:!0,bottom:!1,left:!0}),A("mask-y-from","from",{top:!0,right:!1,bottom:!0,left:!1}),A("mask-y-to","to",{top:!0,right:!1,bottom:!0,left:!1}),A("mask-t-from","from",{top:!0,right:!1,bottom:!1,left:!1}),A("mask-t-to","to",{top:!0,right:!1,bottom:!1,left:!1}),A("mask-r-from","from",{top:!1,right:!0,bottom:!1,left:!1}),A("mask-r-to","to",{top:!1,right:!0,bottom:!1,left:!1}),A("mask-b-from","from",{top:!1,right:!1,bottom:!0,left:!1}),A("mask-b-to","to",{top:!1,right:!1,bottom:!0,left:!1}),A("mask-l-from","from",{top:!1,right:!1,bottom:!1,left:!0}),A("mask-l-to","to",{top:!1,right:!1,bottom:!1,left:!0});let E=()=>B([N("--tw-mask-linear-position","0deg"),N("--tw-mask-linear-from-position","0%"),N("--tw-mask-linear-to-position","100%"),N("--tw-mask-linear-from-color","black"),N("--tw-mask-linear-to-color","transparent")]);a("mask-linear",{defaultValue:null,supportsNegative:!0,supportsFractions:!1,handleBareValue(n){return D(n.value)?`calc(1deg * ${n.value})`:null},handleNegativeBareValue(n){return D(n.value)?`calc(1deg * -${n.value})`:null},handle:n=>[v(),E(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-linear","linear-gradient(var(--tw-mask-linear-stops, var(--tw-mask-linear-position)))"),d("--tw-mask-linear-position",n)]}),o("mask-linear",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12","45","90","180"]}]),S("mask-linear-from",{color:n=>[v(),E(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-linear-stops","var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),d("--tw-mask-linear","linear-gradient(var(--tw-mask-linear-stops))"),d("--tw-mask-linear-from-color",n)],position:n=>[v(),E(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-linear-stops","var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),d("--tw-mask-linear","linear-gradient(var(--tw-mask-linear-stops))"),d("--tw-mask-linear-from-position",n)]}),S("mask-linear-to",{color:n=>[v(),E(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-linear-stops","var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),d("--tw-mask-linear","linear-gradient(var(--tw-mask-linear-stops))"),d("--tw-mask-linear-to-color",n)],position:n=>[v(),E(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-linear-stops","var(--tw-mask-linear-position), var(--tw-mask-linear-from-color) var(--tw-mask-linear-from-position), var(--tw-mask-linear-to-color) var(--tw-mask-linear-to-position)"),d("--tw-mask-linear","linear-gradient(var(--tw-mask-linear-stops))"),d("--tw-mask-linear-to-position",n)]});let j=()=>B([N("--tw-mask-radial-from-position","0%"),N("--tw-mask-radial-to-position","100%"),N("--tw-mask-radial-from-color","black"),N("--tw-mask-radial-to-color","transparent"),N("--tw-mask-radial-shape","ellipse"),N("--tw-mask-radial-size","farthest-corner"),N("--tw-mask-radial-position","center")]);t("mask-circle",[["--tw-mask-radial-shape","circle"]]),t("mask-ellipse",[["--tw-mask-radial-shape","ellipse"]]),t("mask-radial-closest-side",[["--tw-mask-radial-size","closest-side"]]),t("mask-radial-farthest-side",[["--tw-mask-radial-size","farthest-side"]]),t("mask-radial-closest-corner",[["--tw-mask-radial-size","closest-corner"]]),t("mask-radial-farthest-corner",[["--tw-mask-radial-size","farthest-corner"]]),t("mask-radial-at-top",[["--tw-mask-radial-position","top"]]),t("mask-radial-at-top-left",[["--tw-mask-radial-position","top left"]]),t("mask-radial-at-top-right",[["--tw-mask-radial-position","top right"]]),t("mask-radial-at-bottom",[["--tw-mask-radial-position","bottom"]]),t("mask-radial-at-bottom-left",[["--tw-mask-radial-position","bottom left"]]),t("mask-radial-at-bottom-right",[["--tw-mask-radial-position","bottom right"]]),t("mask-radial-at-left",[["--tw-mask-radial-position","left"]]),t("mask-radial-at-right",[["--tw-mask-radial-position","right"]]),t("mask-radial-at-center",[["--tw-mask-radial-position","center"]]),a("mask-radial-at",{defaultValue:null,supportsNegative:!1,supportsFractions:!1,handle:n=>[d("--tw-mask-radial-position",n)]}),a("mask-radial",{defaultValue:null,supportsNegative:!1,supportsFractions:!1,handle:n=>[v(),j(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-radial","radial-gradient(var(--tw-mask-radial-stops, var(--tw-mask-radial-size)))"),d("--tw-mask-radial-size",n)]}),S("mask-radial-from",{color:n=>[v(),j(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-radial-stops","var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),d("--tw-mask-radial","radial-gradient(var(--tw-mask-radial-stops))"),d("--tw-mask-radial-from-color",n)],position:n=>[v(),j(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-radial-stops","var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),d("--tw-mask-radial","radial-gradient(var(--tw-mask-radial-stops))"),d("--tw-mask-radial-from-position",n)]}),S("mask-radial-to",{color:n=>[v(),j(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-radial-stops","var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),d("--tw-mask-radial","radial-gradient(var(--tw-mask-radial-stops))"),d("--tw-mask-radial-to-color",n)],position:n=>[v(),j(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-radial-stops","var(--tw-mask-radial-shape) var(--tw-mask-radial-size) at var(--tw-mask-radial-position), var(--tw-mask-radial-from-color) var(--tw-mask-radial-from-position), var(--tw-mask-radial-to-color) var(--tw-mask-radial-to-position)"),d("--tw-mask-radial","radial-gradient(var(--tw-mask-radial-stops))"),d("--tw-mask-radial-to-position",n)]});let T=()=>B([N("--tw-mask-conic-position","0deg"),N("--tw-mask-conic-from-position","0%"),N("--tw-mask-conic-to-position","100%"),N("--tw-mask-conic-from-color","black"),N("--tw-mask-conic-to-color","transparent")]);a("mask-conic",{defaultValue:null,supportsNegative:!0,supportsFractions:!1,handleBareValue(n){return D(n.value)?`calc(1deg * ${n.value})`:null},handleNegativeBareValue(n){return D(n.value)?`calc(1deg * -${n.value})`:null},handle:n=>[v(),T(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-conic","conic-gradient(var(--tw-mask-conic-stops, var(--tw-mask-conic-position)))"),d("--tw-mask-conic-position",n)]}),o("mask-conic",()=>[{supportsNegative:!0,values:["0","1","2","3","6","12","45","90","180"]}]),S("mask-conic-from",{color:n=>[v(),T(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-conic-stops","from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),d("--tw-mask-conic","conic-gradient(var(--tw-mask-conic-stops))"),d("--tw-mask-conic-from-color",n)],position:n=>[v(),T(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-conic-stops","from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),d("--tw-mask-conic","conic-gradient(var(--tw-mask-conic-stops))"),d("--tw-mask-conic-from-position",n)]}),S("mask-conic-to",{color:n=>[v(),T(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-conic-stops","from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),d("--tw-mask-conic","conic-gradient(var(--tw-mask-conic-stops))"),d("--tw-mask-conic-to-color",n)],position:n=>[v(),T(),d("mask-image","var(--tw-mask-linear), var(--tw-mask-radial), var(--tw-mask-conic)"),d("mask-composite","intersect"),d("--tw-mask-conic-stops","from var(--tw-mask-conic-position), var(--tw-mask-conic-from-color) var(--tw-mask-conic-from-position), var(--tw-mask-conic-to-color) var(--tw-mask-conic-to-position)"),d("--tw-mask-conic","conic-gradient(var(--tw-mask-conic-stops))"),d("--tw-mask-conic-to-position",n)]}),t("box-decoration-slice",[["-webkit-box-decoration-break","slice"],["box-decoration-break","slice"]]),t("box-decoration-clone",[["-webkit-box-decoration-break","clone"],["box-decoration-break","clone"]]),t("bg-clip-text",[["background-clip","text"]]),t("bg-clip-border",[["background-clip","border-box"]]),t("bg-clip-padding",[["background-clip","padding-box"]]),t("bg-clip-content",[["background-clip","content-box"]]),t("bg-origin-border",[["background-origin","border-box"]]),t("bg-origin-padding",[["background-origin","padding-box"]]),t("bg-origin-content",[["background-origin","content-box"]]);for(let n of["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"])t(`bg-blend-${n}`,[["background-blend-mode",n]]),t(`mix-blend-${n}`,[["mix-blend-mode",n]]);t("mix-blend-plus-darker",[["mix-blend-mode","plus-darker"]]),t("mix-blend-plus-lighter",[["mix-blend-mode","plus-lighter"]]),t("fill-none",[["fill","none"]]),r.functional("fill",n=>{if(!n.value)return;if(n.value.kind==="arbitrary"){let g=ae(n.value.value,n.modifier,e);return g===null?void 0:[d("fill",g)]}let p=de(n,e,["--fill","--color"]);if(p)return[d("fill",p)]}),o("fill",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--fill","--color"],modifiers:Array.from({length:21},(n,p)=>`${p*5}`)}]),t("stroke-none",[["stroke","none"]]),r.functional("stroke",n=>{if(n.value){if(n.value.kind==="arbitrary"){let p=n.value.value;switch(n.value.dataType??re(p,["color","number","length","percentage"])){case"number":case"length":case"percentage":return n.modifier?void 0:[d("stroke-width",p)];default:return p=ae(n.value.value,n.modifier,e),p===null?void 0:[d("stroke",p)]}}{let p=de(n,e,["--stroke","--color"]);if(p)return[d("stroke",p)]}{let p=e.resolve(n.value.value,["--stroke-width"]);if(p)return[d("stroke-width",p)];if(D(n.value.value))return[d("stroke-width",n.value.value)]}}}),o("stroke",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--stroke","--color"],modifiers:Array.from({length:21},(n,p)=>`${p*5}`)},{values:["0","1","2","3"],valueThemeKeys:["--stroke-width"]}]),t("object-contain",[["object-fit","contain"]]),t("object-cover",[["object-fit","cover"]]),t("object-fill",[["object-fit","fill"]]),t("object-none",[["object-fit","none"]]),t("object-scale-down",[["object-fit","scale-down"]]),t("object-top",[["object-position","top"]]),t("object-top-left",[["object-position","left top"]]),t("object-top-right",[["object-position","right top"]]),t("object-bottom",[["object-position","bottom"]]),t("object-bottom-left",[["object-position","left bottom"]]),t("object-bottom-right",[["object-position","right bottom"]]),t("object-left",[["object-position","left"]]),t("object-right",[["object-position","right"]]),t("object-center",[["object-position","center"]]),a("object",{themeKeys:["--object-position"],handle:n=>[d("object-position",n)]});for(let[n,p]of[["p","padding"],["px","padding-inline"],["py","padding-block"],["ps","padding-inline-start"],["pe","padding-inline-end"],["pt","padding-top"],["pr","padding-right"],["pb","padding-bottom"],["pl","padding-left"]])s(n,["--padding","--spacing"],g=>[d(p,g)]);t("text-left",[["text-align","left"]]),t("text-center",[["text-align","center"]]),t("text-right",[["text-align","right"]]),t("text-justify",[["text-align","justify"]]),t("text-start",[["text-align","start"]]),t("text-end",[["text-align","end"]]),s("indent",["--text-indent","--spacing"],n=>[d("text-indent",n)],{supportsNegative:!0}),t("align-baseline",[["vertical-align","baseline"]]),t("align-top",[["vertical-align","top"]]),t("align-middle",[["vertical-align","middle"]]),t("align-bottom",[["vertical-align","bottom"]]),t("align-text-top",[["vertical-align","text-top"]]),t("align-text-bottom",[["vertical-align","text-bottom"]]),t("align-sub",[["vertical-align","sub"]]),t("align-super",[["vertical-align","super"]]),a("align",{themeKeys:[],handle:n=>[d("vertical-align",n)]}),r.functional("font",n=>{if(!(!n.value||n.modifier)){if(n.value.kind==="arbitrary"){let p=n.value.value;switch(n.value.dataType??re(p,["number","generic-name","family-name"])){case"generic-name":case"family-name":return[d("font-family",p)];default:return[B([N("--tw-font-weight")]),d("--tw-font-weight",p),d("font-weight",p)]}}{let p=e.resolveWith(n.value.value,["--font"],["--font-feature-settings","--font-variation-settings"]);if(p){let[g,$={}]=p;return[d("font-family",g),d("font-feature-settings",$["--font-feature-settings"]),d("font-variation-settings",$["--font-variation-settings"])]}}{let p=e.resolve(n.value.value,["--font-weight"]);if(p)return[B([N("--tw-font-weight")]),d("--tw-font-weight",p),d("font-weight",p)]}}}),o("font",()=>[{values:[],valueThemeKeys:["--font"]},{values:[],valueThemeKeys:["--font-weight"]}]),t("uppercase",[["text-transform","uppercase"]]),t("lowercase",[["text-transform","lowercase"]]),t("capitalize",[["text-transform","capitalize"]]),t("normal-case",[["text-transform","none"]]),t("italic",[["font-style","italic"]]),t("not-italic",[["font-style","normal"]]),t("underline",[["text-decoration-line","underline"]]),t("overline",[["text-decoration-line","overline"]]),t("line-through",[["text-decoration-line","line-through"]]),t("no-underline",[["text-decoration-line","none"]]),t("font-stretch-normal",[["font-stretch","normal"]]),t("font-stretch-ultra-condensed",[["font-stretch","ultra-condensed"]]),t("font-stretch-extra-condensed",[["font-stretch","extra-condensed"]]),t("font-stretch-condensed",[["font-stretch","condensed"]]),t("font-stretch-semi-condensed",[["font-stretch","semi-condensed"]]),t("font-stretch-semi-expanded",[["font-stretch","semi-expanded"]]),t("font-stretch-expanded",[["font-stretch","expanded"]]),t("font-stretch-extra-expanded",[["font-stretch","extra-expanded"]]),t("font-stretch-ultra-expanded",[["font-stretch","ultra-expanded"]]),a("font-stretch",{handleBareValue:({value:n})=>{if(!n.endsWith("%"))return null;let p=Number(n.slice(0,-1));return!D(p)||Number.isNaN(p)||p<50||p>200?null:n},handle:n=>[d("font-stretch",n)]}),o("font-stretch",()=>[{values:["50%","75%","90%","95%","100%","105%","110%","125%","150%","200%"]}]),u("placeholder",{themeKeys:["--background-color","--color"],handle:n=>[Z("&::placeholder",[d("--tw-sort","placeholder-color"),d("color",n)])]}),t("decoration-solid",[["text-decoration-style","solid"]]),t("decoration-double",[["text-decoration-style","double"]]),t("decoration-dotted",[["text-decoration-style","dotted"]]),t("decoration-dashed",[["text-decoration-style","dashed"]]),t("decoration-wavy",[["text-decoration-style","wavy"]]),t("decoration-auto",[["text-decoration-thickness","auto"]]),t("decoration-from-font",[["text-decoration-thickness","from-font"]]),r.functional("decoration",n=>{if(n.value){if(n.value.kind==="arbitrary"){let p=n.value.value;switch(n.value.dataType??re(p,["color","length","percentage"])){case"length":case"percentage":return n.modifier?void 0:[d("text-decoration-thickness",p)];default:return p=ae(p,n.modifier,e),p===null?void 0:[d("text-decoration-color",p)]}}{let p=e.resolve(n.value.value,["--text-decoration-thickness"]);if(p)return n.modifier?void 0:[d("text-decoration-thickness",p)];if(D(n.value.value))return n.modifier?void 0:[d("text-decoration-thickness",`${n.value.value}px`)]}{let p=de(n,e,["--text-decoration-color","--color"]);if(p)return[d("text-decoration-color",p)]}}}),o("decoration",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--text-decoration-color","--color"],modifiers:Array.from({length:21},(n,p)=>`${p*5}`)},{values:["0","1","2"],valueThemeKeys:["--text-decoration-thickness"]}]),t("animate-none",[["animation","none"]]),a("animate",{themeKeys:["--animate"],handle:n=>[d("animation",n)]});{let n=["var(--tw-blur,)","var(--tw-brightness,)","var(--tw-contrast,)","var(--tw-grayscale,)","var(--tw-hue-rotate,)","var(--tw-invert,)","var(--tw-saturate,)","var(--tw-sepia,)","var(--tw-drop-shadow,)"].join(" "),p=["var(--tw-backdrop-blur,)","var(--tw-backdrop-brightness,)","var(--tw-backdrop-contrast,)","var(--tw-backdrop-grayscale,)","var(--tw-backdrop-hue-rotate,)","var(--tw-backdrop-invert,)","var(--tw-backdrop-opacity,)","var(--tw-backdrop-saturate,)","var(--tw-backdrop-sepia,)"].join(" "),g=()=>B([N("--tw-blur"),N("--tw-brightness"),N("--tw-contrast"),N("--tw-grayscale"),N("--tw-hue-rotate"),N("--tw-invert"),N("--tw-opacity"),N("--tw-saturate"),N("--tw-sepia"),N("--tw-drop-shadow"),N("--tw-drop-shadow-color"),N("--tw-drop-shadow-alpha","100%","<percentage>"),N("--tw-drop-shadow-size")]),$=()=>B([N("--tw-backdrop-blur"),N("--tw-backdrop-brightness"),N("--tw-backdrop-contrast"),N("--tw-backdrop-grayscale"),N("--tw-backdrop-hue-rotate"),N("--tw-backdrop-invert"),N("--tw-backdrop-opacity"),N("--tw-backdrop-saturate"),N("--tw-backdrop-sepia")]);r.functional("filter",x=>{if(!x.modifier){if(x.value===null)return[g(),d("filter",n)];if(x.value.kind==="arbitrary")return[d("filter",x.value.value)];switch(x.value.value){case"none":return[d("filter","none")]}}}),r.functional("backdrop-filter",x=>{if(!x.modifier){if(x.value===null)return[$(),d("-webkit-backdrop-filter",p),d("backdrop-filter",p)];if(x.value.kind==="arbitrary")return[d("-webkit-backdrop-filter",x.value.value),d("backdrop-filter",x.value.value)];switch(x.value.value){case"none":return[d("-webkit-backdrop-filter","none"),d("backdrop-filter","none")]}}}),a("blur",{themeKeys:["--blur"],handle:x=>[g(),d("--tw-blur",`blur(${x})`),d("filter",n)]}),t("blur-none",[g,["--tw-blur"," "],["filter",n]]),a("backdrop-blur",{themeKeys:["--backdrop-blur","--blur"],handle:x=>[$(),d("--tw-backdrop-blur",`blur(${x})`),d("-webkit-backdrop-filter",p),d("backdrop-filter",p)]}),t("backdrop-blur-none",[$,["--tw-backdrop-blur"," "],["-webkit-backdrop-filter",p],["backdrop-filter",p]]),a("brightness",{themeKeys:["--brightness"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,handle:x=>[g(),d("--tw-brightness",`brightness(${x})`),d("filter",n)]}),a("backdrop-brightness",{themeKeys:["--backdrop-brightness","--brightness"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,handle:x=>[$(),d("--tw-backdrop-brightness",`brightness(${x})`),d("-webkit-backdrop-filter",p),d("backdrop-filter",p)]}),o("brightness",()=>[{values:["0","50","75","90","95","100","105","110","125","150","200"],valueThemeKeys:["--brightness"]}]),o("backdrop-brightness",()=>[{values:["0","50","75","90","95","100","105","110","125","150","200"],valueThemeKeys:["--backdrop-brightness","--brightness"]}]),a("contrast",{themeKeys:["--contrast"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,handle:x=>[g(),d("--tw-contrast",`contrast(${x})`),d("filter",n)]}),a("backdrop-contrast",{themeKeys:["--backdrop-contrast","--contrast"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,handle:x=>[$(),d("--tw-backdrop-contrast",`contrast(${x})`),d("-webkit-backdrop-filter",p),d("backdrop-filter",p)]}),o("contrast",()=>[{values:["0","50","75","100","125","150","200"],valueThemeKeys:["--contrast"]}]),o("backdrop-contrast",()=>[{values:["0","50","75","100","125","150","200"],valueThemeKeys:["--backdrop-contrast","--contrast"]}]),a("grayscale",{themeKeys:["--grayscale"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,defaultValue:"100%",handle:x=>[g(),d("--tw-grayscale",`grayscale(${x})`),d("filter",n)]}),a("backdrop-grayscale",{themeKeys:["--backdrop-grayscale","--grayscale"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,defaultValue:"100%",handle:x=>[$(),d("--tw-backdrop-grayscale",`grayscale(${x})`),d("-webkit-backdrop-filter",p),d("backdrop-filter",p)]}),o("grayscale",()=>[{values:["0","25","50","75","100"],valueThemeKeys:["--grayscale"],hasDefaultValue:!0}]),o("backdrop-grayscale",()=>[{values:["0","25","50","75","100"],valueThemeKeys:["--backdrop-grayscale","--grayscale"],hasDefaultValue:!0}]),a("hue-rotate",{supportsNegative:!0,themeKeys:["--hue-rotate"],handleBareValue:({value:x})=>D(x)?`${x}deg`:null,handle:x=>[g(),d("--tw-hue-rotate",`hue-rotate(${x})`),d("filter",n)]}),a("backdrop-hue-rotate",{supportsNegative:!0,themeKeys:["--backdrop-hue-rotate","--hue-rotate"],handleBareValue:({value:x})=>D(x)?`${x}deg`:null,handle:x=>[$(),d("--tw-backdrop-hue-rotate",`hue-rotate(${x})`),d("-webkit-backdrop-filter",p),d("backdrop-filter",p)]}),o("hue-rotate",()=>[{values:["0","15","30","60","90","180"],valueThemeKeys:["--hue-rotate"]}]),o("backdrop-hue-rotate",()=>[{values:["0","15","30","60","90","180"],valueThemeKeys:["--backdrop-hue-rotate","--hue-rotate"]}]),a("invert",{themeKeys:["--invert"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,defaultValue:"100%",handle:x=>[g(),d("--tw-invert",`invert(${x})`),d("filter",n)]}),a("backdrop-invert",{themeKeys:["--backdrop-invert","--invert"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,defaultValue:"100%",handle:x=>[$(),d("--tw-backdrop-invert",`invert(${x})`),d("-webkit-backdrop-filter",p),d("backdrop-filter",p)]}),o("invert",()=>[{values:["0","25","50","75","100"],valueThemeKeys:["--invert"],hasDefaultValue:!0}]),o("backdrop-invert",()=>[{values:["0","25","50","75","100"],valueThemeKeys:["--backdrop-invert","--invert"],hasDefaultValue:!0}]),a("saturate",{themeKeys:["--saturate"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,handle:x=>[g(),d("--tw-saturate",`saturate(${x})`),d("filter",n)]}),a("backdrop-saturate",{themeKeys:["--backdrop-saturate","--saturate"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,handle:x=>[$(),d("--tw-backdrop-saturate",`saturate(${x})`),d("-webkit-backdrop-filter",p),d("backdrop-filter",p)]}),o("saturate",()=>[{values:["0","50","100","150","200"],valueThemeKeys:["--saturate"]}]),o("backdrop-saturate",()=>[{values:["0","50","100","150","200"],valueThemeKeys:["--backdrop-saturate","--saturate"]}]),a("sepia",{themeKeys:["--sepia"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,defaultValue:"100%",handle:x=>[g(),d("--tw-sepia",`sepia(${x})`),d("filter",n)]}),a("backdrop-sepia",{themeKeys:["--backdrop-sepia","--sepia"],handleBareValue:({value:x})=>D(x)?`${x}%`:null,defaultValue:"100%",handle:x=>[$(),d("--tw-backdrop-sepia",`sepia(${x})`),d("-webkit-backdrop-filter",p),d("backdrop-filter",p)]}),o("sepia",()=>[{values:["0","50","100"],valueThemeKeys:["--sepia"],hasDefaultValue:!0}]),o("backdrop-sepia",()=>[{values:["0","50","100"],valueThemeKeys:["--backdrop-sepia","--sepia"],hasDefaultValue:!0}]),t("drop-shadow-none",[g,["--tw-drop-shadow"," "],["filter",n]]),r.functional("drop-shadow",x=>{let O;if(x.modifier&&(x.modifier.kind==="arbitrary"?O=x.modifier.value:D(x.modifier.value)&&(O=`${x.modifier.value}%`)),!x.value){let I=e.get(["--drop-shadow"]),_=e.resolve(null,["--drop-shadow"]);return I===null||_===null?void 0:[g(),d("--tw-drop-shadow-alpha",O),...pt("--tw-drop-shadow-size",I,O,F=>`var(--tw-drop-shadow-color, ${F})`),d("--tw-drop-shadow",W(_,",").map(F=>`drop-shadow(${F})`).join(" ")),d("filter",n)]}if(x.value.kind==="arbitrary"){let I=x.value.value;switch(x.value.dataType??re(I,["color"])){case"color":return I=ae(I,x.modifier,e),I===null?void 0:[g(),d("--tw-drop-shadow-color",ue(I,"var(--tw-drop-shadow-alpha)")),d("--tw-drop-shadow","var(--tw-drop-shadow-size)")];default:return x.modifier&&!O?void 0:[g(),d("--tw-drop-shadow-alpha",O),...pt("--tw-drop-shadow-size",I,O,_=>`var(--tw-drop-shadow-color, ${_})`),d("--tw-drop-shadow","var(--tw-drop-shadow-size)"),d("filter",n)]}}{let I=e.get([`--drop-shadow-${x.value.value}`]),_=e.resolve(x.value.value,["--drop-shadow"]);if(I&&_)return x.modifier&&!O?void 0:O?[g(),d("--tw-drop-shadow-alpha",O),...pt("--tw-drop-shadow-size",I,O,F=>`var(--tw-drop-shadow-color, ${F})`),d("--tw-drop-shadow","var(--tw-drop-shadow-size)"),d("filter",n)]:[g(),d("--tw-drop-shadow-alpha",O),...pt("--tw-drop-shadow-size",I,O,F=>`var(--tw-drop-shadow-color, ${F})`),d("--tw-drop-shadow",W(_,",").map(F=>`drop-shadow(${F})`).join(" ")),d("filter",n)]}{let I=de(x,e,["--drop-shadow-color","--color"]);if(I)return I==="inherit"?[g(),d("--tw-drop-shadow-color","inherit"),d("--tw-drop-shadow","var(--tw-drop-shadow-size)")]:[g(),d("--tw-drop-shadow-color",ue(I,"var(--tw-drop-shadow-alpha)")),d("--tw-drop-shadow","var(--tw-drop-shadow-size)")]}}),o("drop-shadow",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--drop-shadow-color","--color"],modifiers:Array.from({length:21},(x,O)=>`${O*5}`)},{valueThemeKeys:["--drop-shadow"]}]),a("backdrop-opacity",{themeKeys:["--backdrop-opacity","--opacity"],handleBareValue:({value:x})=>Et(x)?`${x}%`:null,handle:x=>[$(),d("--tw-backdrop-opacity",`opacity(${x})`),d("-webkit-backdrop-filter",p),d("backdrop-filter",p)]}),o("backdrop-opacity",()=>[{values:Array.from({length:21},(x,O)=>`${O*5}`),valueThemeKeys:["--backdrop-opacity","--opacity"]}])}{let n=`var(--tw-ease, ${e.resolve(null,["--default-transition-timing-function"])??"ease"})`,p=`var(--tw-duration, ${e.resolve(null,["--default-transition-duration"])??"0s"})`;t("transition-none",[["transition-property","none"]]),t("transition-all",[["transition-property","all"],["transition-timing-function",n],["transition-duration",p]]),t("transition-colors",[["transition-property","color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to"],["transition-timing-function",n],["transition-duration",p]]),t("transition-opacity",[["transition-property","opacity"],["transition-timing-function",n],["transition-duration",p]]),t("transition-shadow",[["transition-property","box-shadow"],["transition-timing-function",n],["transition-duration",p]]),t("transition-transform",[["transition-property","transform, translate, scale, rotate"],["transition-timing-function",n],["transition-duration",p]]),a("transition",{defaultValue:"color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events",themeKeys:["--transition-property"],handle:g=>[d("transition-property",g),d("transition-timing-function",n),d("transition-duration",p)]}),t("transition-discrete",[["transition-behavior","allow-discrete"]]),t("transition-normal",[["transition-behavior","normal"]]),a("delay",{handleBareValue:({value:g})=>D(g)?`${g}ms`:null,themeKeys:["--transition-delay"],handle:g=>[d("transition-delay",g)]});{let g=()=>B([N("--tw-duration")]);t("duration-initial",[g,["--tw-duration","initial"]]),r.functional("duration",$=>{if($.modifier||!$.value)return;let x=null;if($.value.kind==="arbitrary"?x=$.value.value:(x=e.resolve($.value.fraction??$.value.value,["--transition-duration"]),x===null&&D($.value.value)&&(x=`${$.value.value}ms`)),x!==null)return[g(),d("--tw-duration",x),d("transition-duration",x)]})}o("delay",()=>[{values:["75","100","150","200","300","500","700","1000"],valueThemeKeys:["--transition-delay"]}]),o("duration",()=>[{values:["75","100","150","200","300","500","700","1000"],valueThemeKeys:["--transition-duration"]}])}{let n=()=>B([N("--tw-ease")]);t("ease-initial",[n,["--tw-ease","initial"]]),t("ease-linear",[n,["--tw-ease","linear"],["transition-timing-function","linear"]]),a("ease",{themeKeys:["--ease"],handle:p=>[n(),d("--tw-ease",p),d("transition-timing-function",p)]})}t("will-change-auto",[["will-change","auto"]]),t("will-change-scroll",[["will-change","scroll-position"]]),t("will-change-contents",[["will-change","contents"]]),t("will-change-transform",[["will-change","transform"]]),a("will-change",{themeKeys:[],handle:n=>[d("will-change",n)]}),t("content-none",[["--tw-content","none"],["content","none"]]),a("content",{themeKeys:[],handle:n=>[B([N("--tw-content",'""')]),d("--tw-content",n),d("content","var(--tw-content)")]});{let n="var(--tw-contain-size,) var(--tw-contain-layout,) var(--tw-contain-paint,) var(--tw-contain-style,)",p=()=>B([N("--tw-contain-size"),N("--tw-contain-layout"),N("--tw-contain-paint"),N("--tw-contain-style")]);t("contain-none",[["contain","none"]]),t("contain-content",[["contain","content"]]),t("contain-strict",[["contain","strict"]]),t("contain-size",[p,["--tw-contain-size","size"],["contain",n]]),t("contain-inline-size",[p,["--tw-contain-size","inline-size"],["contain",n]]),t("contain-layout",[p,["--tw-contain-layout","layout"],["contain",n]]),t("contain-paint",[p,["--tw-contain-paint","paint"],["contain",n]]),t("contain-style",[p,["--tw-contain-style","style"],["contain",n]]),a("contain",{themeKeys:[],handle:g=>[d("contain",g)]})}t("forced-color-adjust-none",[["forced-color-adjust","none"]]),t("forced-color-adjust-auto",[["forced-color-adjust","auto"]]),t("leading-none",[()=>B([N("--tw-leading")]),["--tw-leading","1"],["line-height","1"]]),s("leading",["--leading","--spacing"],n=>[B([N("--tw-leading")]),d("--tw-leading",n),d("line-height",n)]),a("tracking",{supportsNegative:!0,themeKeys:["--tracking"],handle:n=>[B([N("--tw-tracking")]),d("--tw-tracking",n),d("letter-spacing",n)]}),t("antialiased",[["-webkit-font-smoothing","antialiased"],["-moz-osx-font-smoothing","grayscale"]]),t("subpixel-antialiased",[["-webkit-font-smoothing","auto"],["-moz-osx-font-smoothing","auto"]]);{let n="var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)",p=()=>B([N("--tw-ordinal"),N("--tw-slashed-zero"),N("--tw-numeric-figure"),N("--tw-numeric-spacing"),N("--tw-numeric-fraction")]);t("normal-nums",[["font-variant-numeric","normal"]]),t("ordinal",[p,["--tw-ordinal","ordinal"],["font-variant-numeric",n]]),t("slashed-zero",[p,["--tw-slashed-zero","slashed-zero"],["font-variant-numeric",n]]),t("lining-nums",[p,["--tw-numeric-figure","lining-nums"],["font-variant-numeric",n]]),t("oldstyle-nums",[p,["--tw-numeric-figure","oldstyle-nums"],["font-variant-numeric",n]]),t("proportional-nums",[p,["--tw-numeric-spacing","proportional-nums"],["font-variant-numeric",n]]),t("tabular-nums",[p,["--tw-numeric-spacing","tabular-nums"],["font-variant-numeric",n]]),t("diagonal-fractions",[p,["--tw-numeric-fraction","diagonal-fractions"],["font-variant-numeric",n]]),t("stacked-fractions",[p,["--tw-numeric-fraction","stacked-fractions"],["font-variant-numeric",n]])}{let n=()=>B([N("--tw-outline-style","solid")]);r.static("outline-hidden",()=>[d("--tw-outline-style","none"),d("outline-style","none"),H("@media","(forced-colors: active)",[d("outline","2px solid transparent"),d("outline-offset","2px")])]),t("outline-none",[["--tw-outline-style","none"],["outline-style","none"]]),t("outline-solid",[["--tw-outline-style","solid"],["outline-style","solid"]]),t("outline-dashed",[["--tw-outline-style","dashed"],["outline-style","dashed"]]),t("outline-dotted",[["--tw-outline-style","dotted"],["outline-style","dotted"]]),t("outline-double",[["--tw-outline-style","double"],["outline-style","double"]]),r.functional("outline",p=>{if(p.value===null){if(p.modifier)return;let g=e.get(["--default-outline-width"])??"1px";return[n(),d("outline-style","var(--tw-outline-style)"),d("outline-width",g)]}if(p.value.kind==="arbitrary"){let g=p.value.value;switch(p.value.dataType??re(g,["color","length","number","percentage"])){case"length":case"number":case"percentage":return p.modifier?void 0:[n(),d("outline-style","var(--tw-outline-style)"),d("outline-width",g)];default:return g=ae(g,p.modifier,e),g===null?void 0:[d("outline-color",g)]}}{let g=de(p,e,["--outline-color","--color"]);if(g)return[d("outline-color",g)]}{if(p.modifier)return;let g=e.resolve(p.value.value,["--outline-width"]);if(g)return[n(),d("outline-style","var(--tw-outline-style)"),d("outline-width",g)];if(D(p.value.value))return[n(),d("outline-style","var(--tw-outline-style)"),d("outline-width",`${p.value.value}px`)]}}),o("outline",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--outline-color","--color"],modifiers:Array.from({length:21},(p,g)=>`${g*5}`),hasDefaultValue:!0},{values:["0","1","2","4","8"],valueThemeKeys:["--outline-width"]}]),a("outline-offset",{supportsNegative:!0,themeKeys:["--outline-offset"],handleBareValue:({value:p})=>D(p)?`${p}px`:null,handle:p=>[d("outline-offset",p)]}),o("outline-offset",()=>[{supportsNegative:!0,values:["0","1","2","4","8"],valueThemeKeys:["--outline-offset"]}])}a("opacity",{themeKeys:["--opacity"],handleBareValue:({value:n})=>Et(n)?`${n}%`:null,handle:n=>[d("opacity",n)]}),o("opacity",()=>[{values:Array.from({length:21},(n,p)=>`${p*5}`),valueThemeKeys:["--opacity"]}]),t("underline-offset-auto",[["text-underline-offset","auto"]]),a("underline-offset",{supportsNegative:!0,themeKeys:["--text-underline-offset"],handleBareValue:({value:n})=>D(n)?`${n}px`:null,handle:n=>[d("text-underline-offset",n)]}),o("underline-offset",()=>[{supportsNegative:!0,values:["0","1","2","4","8"],valueThemeKeys:["--text-underline-offset"]}]),r.functional("text",n=>{if(n.value){if(n.value.kind==="arbitrary"){let p=n.value.value;switch(n.value.dataType??re(p,["color","length","percentage","absolute-size","relative-size"])){case"size":case"length":case"percentage":case"absolute-size":case"relative-size":if(n.modifier){let g=n.modifier.kind==="arbitrary"?n.modifier.value:e.resolve(n.modifier.value,["--leading"]);if(!g&&Me(n.modifier.value)){let $=e.resolve(null,["--spacing"]);if(!$)return null;g=`calc(${$} * ${n.modifier.value})`}return!g&&n.modifier.value==="none"&&(g="1"),g?[d("font-size",p),d("line-height",g)]:null}return[d("font-size",p)];default:return p=ae(p,n.modifier,e),p===null?void 0:[d("color",p)]}}{let p=de(n,e,["--text-color","--color"]);if(p)return[d("color",p)]}{let p=e.resolveWith(n.value.value,["--text"],["--line-height","--letter-spacing","--font-weight"]);if(p){let[g,$={}]=Array.isArray(p)?p:[p];if(n.modifier){let x=n.modifier.kind==="arbitrary"?n.modifier.value:e.resolve(n.modifier.value,["--leading"]);if(!x&&Me(n.modifier.value)){let I=e.resolve(null,["--spacing"]);if(!I)return null;x=`calc(${I} * ${n.modifier.value})`}if(!x&&n.modifier.value==="none"&&(x="1"),!x)return null;let O=[d("font-size",g)];return x&&O.push(d("line-height",x)),O}return typeof $=="string"?[d("font-size",g),d("line-height",$)]:[d("font-size",g),d("line-height",$["--line-height"]?`var(--tw-leading, ${$["--line-height"]})`:void 0),d("letter-spacing",$["--letter-spacing"]?`var(--tw-tracking, ${$["--letter-spacing"]})`:void 0),d("font-weight",$["--font-weight"]?`var(--tw-font-weight, ${$["--font-weight"]})`:void 0)]}}}}),o("text",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--text-color","--color"],modifiers:Array.from({length:21},(n,p)=>`${p*5}`)},{values:[],valueThemeKeys:["--text"],modifiers:[],modifierThemeKeys:["--leading"]}]);let C=()=>B([N("--tw-text-shadow-color"),N("--tw-text-shadow-alpha","100%","<percentage>")]);t("text-shadow-initial",[C,["--tw-text-shadow-color","initial"]]),r.functional("text-shadow",n=>{let p;if(n.modifier&&(n.modifier.kind==="arbitrary"?p=n.modifier.value:D(n.modifier.value)&&(p=`${n.modifier.value}%`)),!n.value){let g=e.get(["--text-shadow"]);return g===null?void 0:[C(),d("--tw-text-shadow-alpha",p),...Oe("text-shadow",g,p,$=>`var(--tw-text-shadow-color, ${$})`)]}if(n.value.kind==="arbitrary"){let g=n.value.value;switch(n.value.dataType??re(g,["color"])){case"color":return g=ae(g,n.modifier,e),g===null?void 0:[C(),d("--tw-text-shadow-color",ue(g,"var(--tw-text-shadow-alpha)"))];default:return[C(),d("--tw-text-shadow-alpha",p),...Oe("text-shadow",g,p,$=>`var(--tw-text-shadow-color, ${$})`)]}}switch(n.value.value){case"none":return n.modifier?void 0:[C(),d("text-shadow","none")];case"inherit":return n.modifier?void 0:[C(),d("--tw-text-shadow-color","inherit")]}{let g=e.get([`--text-shadow-${n.value.value}`]);if(g)return[C(),d("--tw-text-shadow-alpha",p),...Oe("text-shadow",g,p,$=>`var(--tw-text-shadow-color, ${$})`)]}{let g=de(n,e,["--text-shadow-color","--color"]);if(g)return[C(),d("--tw-text-shadow-color",ue(g,"var(--tw-text-shadow-alpha)"))]}}),o("text-shadow",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--text-shadow-color","--color"],modifiers:Array.from({length:21},(n,p)=>`${p*5}`)},{values:["none"]},{valueThemeKeys:["--text-shadow"],modifiers:Array.from({length:21},(n,p)=>`${p*5}`),hasDefaultValue:e.get(["--text-shadow"])!==null}]);{let n=function(_){return`var(--tw-ring-inset,) 0 0 0 calc(${_} + var(--tw-ring-offset-width)) var(--tw-ring-color, ${O})`},p=function(_){return`inset 0 0 0 ${_} var(--tw-inset-ring-color, currentcolor)`},g=["var(--tw-inset-shadow)","var(--tw-inset-ring-shadow)","var(--tw-ring-offset-shadow)","var(--tw-ring-shadow)","var(--tw-shadow)"].join(", "),$="0 0 #0000",x=()=>B([N("--tw-shadow",$),N("--tw-shadow-color"),N("--tw-shadow-alpha","100%","<percentage>"),N("--tw-inset-shadow",$),N("--tw-inset-shadow-color"),N("--tw-inset-shadow-alpha","100%","<percentage>"),N("--tw-ring-color"),N("--tw-ring-shadow",$),N("--tw-inset-ring-color"),N("--tw-inset-ring-shadow",$),N("--tw-ring-inset"),N("--tw-ring-offset-width","0px","<length>"),N("--tw-ring-offset-color","#fff"),N("--tw-ring-offset-shadow",$)]);t("shadow-initial",[x,["--tw-shadow-color","initial"]]),r.functional("shadow",_=>{let F;if(_.modifier&&(_.modifier.kind==="arbitrary"?F=_.modifier.value:D(_.modifier.value)&&(F=`${_.modifier.value}%`)),!_.value){let R=e.get(["--shadow"]);return R===null?void 0:[x(),d("--tw-shadow-alpha",F),...Oe("--tw-shadow",R,F,ee=>`var(--tw-shadow-color, ${ee})`),d("box-shadow",g)]}if(_.value.kind==="arbitrary"){let R=_.value.value;switch(_.value.dataType??re(R,["color"])){case"color":return R=ae(R,_.modifier,e),R===null?void 0:[x(),d("--tw-shadow-color",ue(R,"var(--tw-shadow-alpha)"))];default:return[x(),d("--tw-shadow-alpha",F),...Oe("--tw-shadow",R,F,ee=>`var(--tw-shadow-color, ${ee})`),d("box-shadow",g)]}}switch(_.value.value){case"none":return _.modifier?void 0:[x(),d("--tw-shadow",$),d("box-shadow",g)];case"inherit":return _.modifier?void 0:[x(),d("--tw-shadow-color","inherit")]}{let R=e.get([`--shadow-${_.value.value}`]);if(R)return[x(),d("--tw-shadow-alpha",F),...Oe("--tw-shadow",R,F,ee=>`var(--tw-shadow-color, ${ee})`),d("box-shadow",g)]}{let R=de(_,e,["--box-shadow-color","--color"]);if(R)return[x(),d("--tw-shadow-color",ue(R,"var(--tw-shadow-alpha)"))]}}),o("shadow",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--box-shadow-color","--color"],modifiers:Array.from({length:21},(_,F)=>`${F*5}`)},{values:["none"]},{valueThemeKeys:["--shadow"],modifiers:Array.from({length:21},(_,F)=>`${F*5}`),hasDefaultValue:e.get(["--shadow"])!==null}]),t("inset-shadow-initial",[x,["--tw-inset-shadow-color","initial"]]),r.functional("inset-shadow",_=>{let F;if(_.modifier&&(_.modifier.kind==="arbitrary"?F=_.modifier.value:D(_.modifier.value)&&(F=`${_.modifier.value}%`)),!_.value){let R=e.get(["--inset-shadow"]);return R===null?void 0:[x(),d("--tw-inset-shadow-alpha",F),...Oe("--tw-inset-shadow",R,F,ee=>`var(--tw-inset-shadow-color, ${ee})`),d("box-shadow",g)]}if(_.value.kind==="arbitrary"){let R=_.value.value;switch(_.value.dataType??re(R,["color"])){case"color":return R=ae(R,_.modifier,e),R===null?void 0:[x(),d("--tw-inset-shadow-color",ue(R,"var(--tw-inset-shadow-alpha)"))];default:return[x(),d("--tw-inset-shadow-alpha",F),...Oe("--tw-inset-shadow",R,F,ee=>`var(--tw-inset-shadow-color, ${ee})`,"inset "),d("box-shadow",g)]}}switch(_.value.value){case"none":return _.modifier?void 0:[x(),d("--tw-inset-shadow",$),d("box-shadow",g)];case"inherit":return _.modifier?void 0:[x(),d("--tw-inset-shadow-color","inherit")]}{let R=e.get([`--inset-shadow-${_.value.value}`]);if(R)return[x(),d("--tw-inset-shadow-alpha",F),...Oe("--tw-inset-shadow",R,F,ee=>`var(--tw-inset-shadow-color, ${ee})`),d("box-shadow",g)]}{let R=de(_,e,["--box-shadow-color","--color"]);if(R)return[x(),d("--tw-inset-shadow-color",ue(R,"var(--tw-inset-shadow-alpha)"))]}}),o("inset-shadow",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--box-shadow-color","--color"],modifiers:Array.from({length:21},(_,F)=>`${F*5}`)},{values:["none"]},{valueThemeKeys:["--inset-shadow"],modifiers:Array.from({length:21},(_,F)=>`${F*5}`),hasDefaultValue:e.get(["--inset-shadow"])!==null}]),t("ring-inset",[x,["--tw-ring-inset","inset"]]);let O=e.get(["--default-ring-color"])??"currentcolor";r.functional("ring",_=>{if(!_.value){if(_.modifier)return;let F=e.get(["--default-ring-width"])??"1px";return[x(),d("--tw-ring-shadow",n(F)),d("box-shadow",g)]}if(_.value.kind==="arbitrary"){let F=_.value.value;switch(_.value.dataType??re(F,["color","length"])){case"length":return _.modifier?void 0:[x(),d("--tw-ring-shadow",n(F)),d("box-shadow",g)];default:return F=ae(F,_.modifier,e),F===null?void 0:[d("--tw-ring-color",F)]}}{let F=de(_,e,["--ring-color","--color"]);if(F)return[d("--tw-ring-color",F)]}{if(_.modifier)return;let F=e.resolve(_.value.value,["--ring-width"]);if(F===null&&D(_.value.value)&&(F=`${_.value.value}px`),F)return[x(),d("--tw-ring-shadow",n(F)),d("box-shadow",g)]}}),o("ring",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--ring-color","--color"],modifiers:Array.from({length:21},(_,F)=>`${F*5}`)},{values:["0","1","2","4","8"],valueThemeKeys:["--ring-width"],hasDefaultValue:!0}]),r.functional("inset-ring",_=>{if(!_.value)return _.modifier?void 0:[x(),d("--tw-inset-ring-shadow",p("1px")),d("box-shadow",g)];if(_.value.kind==="arbitrary"){let F=_.value.value;switch(_.value.dataType??re(F,["color","length"])){case"length":return _.modifier?void 0:[x(),d("--tw-inset-ring-shadow",p(F)),d("box-shadow",g)];default:return F=ae(F,_.modifier,e),F===null?void 0:[d("--tw-inset-ring-color",F)]}}{let F=de(_,e,["--ring-color","--color"]);if(F)return[d("--tw-inset-ring-color",F)]}{if(_.modifier)return;let F=e.resolve(_.value.value,["--ring-width"]);if(F===null&&D(_.value.value)&&(F=`${_.value.value}px`),F)return[x(),d("--tw-inset-ring-shadow",p(F)),d("box-shadow",g)]}}),o("inset-ring",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--ring-color","--color"],modifiers:Array.from({length:21},(_,F)=>`${F*5}`)},{values:["0","1","2","4","8"],valueThemeKeys:["--ring-width"],hasDefaultValue:!0}]);let I="var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)";r.functional("ring-offset",_=>{if(_.value){if(_.value.kind==="arbitrary"){let F=_.value.value;switch(_.value.dataType??re(F,["color","length"])){case"length":return _.modifier?void 0:[d("--tw-ring-offset-width",F),d("--tw-ring-offset-shadow",I)];default:return F=ae(F,_.modifier,e),F===null?void 0:[d("--tw-ring-offset-color",F)]}}{let F=e.resolve(_.value.value,["--ring-offset-width"]);if(F)return _.modifier?void 0:[d("--tw-ring-offset-width",F),d("--tw-ring-offset-shadow",I)];if(D(_.value.value))return _.modifier?void 0:[d("--tw-ring-offset-width",`${_.value.value}px`),d("--tw-ring-offset-shadow",I)]}{let F=de(_,e,["--ring-offset-color","--color"]);if(F)return[d("--tw-ring-offset-color",F)]}}})}return o("ring-offset",()=>[{values:["current","inherit","transparent"],valueThemeKeys:["--ring-offset-color","--color"],modifiers:Array.from({length:21},(n,p)=>`${p*5}`)},{values:["0","1","2","4","8"],valueThemeKeys:["--ring-offset-width"]}]),r.functional("@container",n=>{let p=null;if(n.value===null?p="inline-size":n.value.kind==="arbitrary"?p=n.value.value:n.value.kind==="named"&&n.value.value==="normal"&&(p="normal"),p!==null)return n.modifier?[d("container-type",p),d("container-name",n.modifier.value)]:[d("container-type",p)]}),o("@container",()=>[{values:["normal"],valueThemeKeys:[],hasDefaultValue:!0}]),r}var Kt=["number","integer","ratio","percentage"];function ei(e){let r=e.params;return Zn.test(r)?o=>{let t={"--value":{usedSpacingInteger:!1,usedSpacingNumber:!1,themeKeys:new Set,literals:new Set},"--modifier":{usedSpacingInteger:!1,usedSpacingNumber:!1,themeKeys:new Set,literals:new Set}};Q(e.nodes,a=>{if(a.kind!=="declaration"||!a.value||!a.value.includes("--value(")&&!a.value.includes("--modifier("))return;let u=ie(a.value);we(u,s=>{if(s.kind!=="function")return;if(s.value==="--spacing"&&!(t["--modifier"].usedSpacingNumber&&t["--value"].usedSpacingNumber))return we(s.nodes,i=>{var f,m;if(i.kind!=="function"||i.value!=="--value"&&i.value!=="--modifier")return;let c=i.value;for(let w of i.nodes)if(w.kind==="word"){if(w.value==="integer")(f=t[c]).usedSpacingInteger||(f.usedSpacingInteger=!0);else if(w.value==="number"&&((m=t[c]).usedSpacingNumber||(m.usedSpacingNumber=!0),t["--modifier"].usedSpacingNumber&&t["--value"].usedSpacingNumber))return 2}}),0;if(s.value!=="--value"&&s.value!=="--modifier")return;let l=W(ce(s.nodes),",");for(let[i,c]of l.entries())c=c.replace(/\\\*/g,"*"),c=c.replace(/--(.*?)\s--(.*?)/g,"--$1-*--$2"),c=c.replace(/\s+/g,""),c=c.replace(/(-\*){2,}/g,"-*"),c[0]==="-"&&c[1]==="-"&&!c.includes("-*")&&(c+="-*"),l[i]=c;s.nodes=ie(l.join(","));for(let i of s.nodes)if(i.kind==="word"&&(i.value[0]==='"'||i.value[0]==="'")&&i.value[0]===i.value[i.value.length-1]){let c=i.value.slice(1,-1);t[s.value].literals.add(c)}else if(i.kind==="word"&&i.value[0]==="-"&&i.value[1]==="-"){let c=i.value.replace(/-\*.*$/g,"");t[s.value].themeKeys.add(c)}else if(i.kind==="word"&&!(i.value[0]==="["&&i.value[i.value.length-1]==="]")&&!Kt.includes(i.value)){console.warn(`Unsupported bare value data type: "${i.value}".
Only valid data types are: ${Kt.map(h=>`"${h}"`).join(", ")}.
`);let c=i.value,f=structuredClone(s);we(f.nodes,(h,{replaceWith:b})=>{h.kind==="word"&&h.value===c&&b({kind:"word",value:"\xB6"})});let m="^".repeat(ce([i]).length),w=ce([f]).indexOf("\xB6"),k=["```css",ce([s])," ".repeat(w)+m,"```"].join(`
`);console.warn(k)}}),a.value=ce(u)}),o.utilities.functional(r.slice(0,-2),a=>{let u=structuredClone(e),s=a.value,l=a.modifier;if(s===null)return;let i=!1,c=!1,f=!1,m=!1,w=new Map,k=!1;if(Q([u],(h,{parent:b,replaceWith:v})=>{if((b==null?void 0:b.kind)!=="rule"&&(b==null?void 0:b.kind)!=="at-rule"||h.kind!=="declaration"||!h.value)return;let S=ie(h.value);(we(S,(y,{replaceWith:A})=>{if(y.kind==="function"){if(y.value==="--value"){i=!0;let E=Mr(s,y,o);return E?(c=!0,E.ratio?k=!0:w.set(h,b),A(E.nodes),1):(i||(i=!1),v([]),2)}else if(y.value==="--modifier"){if(l===null)return v([]),2;f=!0;let E=Mr(l,y,o);return E?(m=!0,A(E.nodes),1):(f||(f=!1),v([]),2)}}})??0)===0&&(h.value=ce(S))}),i&&!c||f&&!m||k&&m||l&&!k&&!m)return null;if(k)for(let[h,b]of w){let v=b.nodes.indexOf(h);v!==-1&&b.nodes.splice(v,1)}return u.nodes}),o.utilities.suggest(r.slice(0,-2),()=>{let a=[],u=[];for(let[s,{literals:l,usedSpacingNumber:i,usedSpacingInteger:c,themeKeys:f}]of[[a,t["--value"]],[u,t["--modifier"]]]){for(let m of l)s.push(m);if(i)s.push(...ht);else if(c)for(let m of ht)D(m)&&s.push(m);for(let m of o.theme.keysInNamespaces(f))s.push(m.replace(Dr,(w,k,h)=>`${k}.${h}`))}return[{values:a,modifiers:u}]})}:Hn.test(r)?o=>{o.utilities.static(r,()=>structuredClone(e.nodes))}:null}function Mr(e,r,o){for(let t of r.nodes){if(e.kind==="named"&&t.kind==="word"&&(t.value[0]==="'"||t.value[0]==='"')&&t.value[t.value.length-1]===t.value[0]&&t.value.slice(1,-1)===e.value)return{nodes:ie(e.value)};if(e.kind==="named"&&t.kind==="word"&&t.value[0]==="-"&&t.value[1]==="-"){let a=t.value;if(a.endsWith("-*")){a=a.slice(0,-2);let u=o.theme.resolve(e.value,[a]);if(u)return{nodes:ie(u)}}else{let u=a.split("-*");if(u.length<=1)continue;let s=[u.shift()],l=o.theme.resolveWith(e.value,s,u);if(l){let[,i={}]=l;{let c=i[u.pop()];if(c)return{nodes:ie(c)}}}}}else if(e.kind==="named"&&t.kind==="word"){if(!Kt.includes(t.value))continue;let a=t.value==="ratio"&&"fraction"in e?e.fraction:e.value;if(!a)continue;let u=re(a,[t.value]);if(u===null)continue;if(u==="ratio"){let[s,l]=W(a,"/");if(!D(s)||!D(l))continue}else if(u==="number"&&!Me(a)||u==="percentage"&&!D(a.slice(0,-1)))continue;return{nodes:ie(a),ratio:u==="ratio"}}else if(e.kind==="arbitrary"&&t.kind==="word"&&t.value[0]==="["&&t.value[t.value.length-1]==="]"){let a=t.value.slice(1,-1);if(a==="*")return{nodes:ie(e.value)};if("dataType"in e&&e.dataType&&e.dataType!==a)continue;if("dataType"in e&&e.dataType||re(e.value,[a])!==null)return{nodes:ie(e.value)}}}}function Oe(e,r,o,t,a=""){let u=!1,s=ft(r,i=>o==null?t(i):i.startsWith("current")?t(ue(i,o)):((i.startsWith("var(")||o.startsWith("var("))&&(u=!0),t(Lr(i,o))));function l(i){return a?W(i,",").map(c=>a+c).join(","):i}return u?[d(e,l(ft(r,t))),se("@supports (color: lab(from red l a b))",[d(e,l(s))])]:[d(e,l(s))]}function pt(e,r,o,t,a=""){let u=!1,s=W(r,",").map(l=>ft(l,i=>o==null?t(i):i.startsWith("current")?t(ue(i,o)):((i.startsWith("var(")||o.startsWith("var("))&&(u=!0),t(Lr(i,o))))).map(l=>`drop-shadow(${l})`).join(" ");return u?[d(e,a+W(r,",").map(l=>`drop-shadow(${ft(l,t)})`).join(" ")),se("@supports (color: lab(from red l a b))",[d(e,a+s)])]:[d(e,a+s)]}var Rt={"--alpha":ti,"--spacing":ri,"--theme":oi,theme:ni};function ti(e,r,o,...t){let[a,u]=W(o,"/").map(s=>s.trim());if(!a||!u)throw Error(`The --alpha(\u2026) function requires a color and an alpha value, e.g.: \`--alpha(${a||"var(--my-color)"} / ${u||"50%"})\``);if(t.length>0)throw Error(`The --alpha(\u2026) function only accepts one argument, e.g.: \`--alpha(${a||"var(--my-color)"} / ${u||"50%"})\``);return ue(a,u)}function ri(e,r,o,...t){if(!o)throw Error("The --spacing(\u2026) function requires an argument, but received none.");if(t.length>0)throw Error(`The --spacing(\u2026) function only accepts a single argument, but received ${t.length+1}.`);let a=e.theme.resolve(null,["--spacing"]);if(!a)throw Error("The --spacing(\u2026) function requires that the `--spacing` theme variable exists, but it was not found.");return`calc(${a} * ${o})`}function oi(e,r,o,...t){if(!o.startsWith("--"))throw Error("The --theme(\u2026) function can only be used with CSS variables from your theme.");let a=!1;o.endsWith(" inline")&&(a=!0,o=o.slice(0,-7)),r.kind==="at-rule"&&(a=!0);let u=e.resolveThemeValue(o,a);if(!u){if(t.length>0)return t.join(", ");throw Error(`Could not resolve value for theme function: \`theme(${o})\`. Consider checking if the variable name is correct or provide a fallback value to silence this error.`)}if(t.length===0)return u;let s=t.join(", ");if(s==="initial")return u;if(u==="initial")return s;if(u.startsWith("var(")||u.startsWith("theme(")||u.startsWith("--theme(")){let l=ie(u);return ai(l,s),ce(l)}return u}function ni(e,r,o,...t){o=ii(o);let a=e.resolveThemeValue(o);if(!a&&t.length>0)return t.join(", ");if(!a)throw Error(`Could not resolve value for theme function: \`theme(${o})\`. Consider checking if the path is correct or provide a fallback value to silence this error.`);return a}var Kr=new RegExp(Object.keys(Rt).map(e=>`${e}\\(`).join("|"));function Vt(e,r){let o=0;return Q(e,t=>{if(t.kind==="declaration"&&t.value&&Kr.test(t.value)){o|=8,t.value=Rr(t.value,t,r);return}t.kind==="at-rule"&&(t.name==="@media"||t.name==="@custom-media"||t.name==="@container"||t.name==="@supports")&&Kr.test(t.params)&&(o|=8,t.params=Rr(t.params,t,r))}),o}function Rr(e,r,o){let t=ie(e);return we(t,(a,{replaceWith:u})=>{if(a.kind==="function"&&a.value in Rt){let s=W(ce(a.nodes).trim(),",").map(i=>i.trim()),l=Rt[a.value](o,r,...s);return u(ie(l))}}),ce(t)}function ii(e){if(e[0]!=="'"&&e[0]!=='"')return e;let r="",o=e[0];for(let t=1;t<e.length-1;t++){let a=e[t],u=e[t+1];a==="\\"&&(u===o||u==="\\")?(r+=u,t++):r+=a}return r}function ai(e,r){we(e,o=>{if(o.kind==="function"&&!(o.value!=="var"&&o.value!=="theme"&&o.value!=="--theme"))if(o.nodes.length===1)o.nodes.push({kind:"word",value:`, ${r}`});else{let t=o.nodes[o.nodes.length-1];t.kind==="word"&&t.value==="initial"&&(t.value=r)}})}function Vr(e,r){let o=e.length,t=r.length,a=o<t?o:t;for(let u=0;u<a;u++){let s=e.charCodeAt(u),l=r.charCodeAt(u);if(s>=48&&s<=57&&l>=48&&l<=57){let i=u,c=u+1,f=u,m=u+1;for(s=e.charCodeAt(c);s>=48&&s<=57;)s=e.charCodeAt(++c);for(l=r.charCodeAt(m);l>=48&&l<=57;)l=r.charCodeAt(++m);let w=e.slice(i,c),k=r.slice(f,m),h=Number(w)-Number(k);if(h)return h;if(w<k)return-1;if(w>k)return 1;continue}if(s!==l)return s-l}return e.length-r.length}var li=/^\d+\/\d+$/;function si(e){let r=new ne(t=>({name:t,utility:t,fraction:!1,modifiers:[]}));for(let t of e.utilities.keys("static")){let a=r.get(t);a.fraction=!1,a.modifiers=[]}for(let t of e.utilities.keys("functional")){let a=e.utilities.getCompletions(t);for(let u of a)for(let s of u.values){let l=s!==null&&li.test(s),i=s===null?t:`${t}-${s}`,c=r.get(i);if(c.utility=t,c.fraction||(c.fraction=l),c.modifiers.push(...u.modifiers),u.supportsNegative){let f=r.get(`-${i}`);f.utility=`-${t}`,f.fraction||(f.fraction=l),f.modifiers.push(...u.modifiers)}}}if(r.size===0)return[];let o=Array.from(r.values());return o.sort((t,a)=>Vr(t.name,a.name)),ci(o)}function ci(e){let r=[],o=null,t=new Map,a=new ne(()=>[]);for(let s of e){let{utility:l,fraction:i}=s;o||(o={utility:l,items:[]},t.set(l,o)),l!==o.utility&&(r.push(o),o={utility:l,items:[]},t.set(l,o)),i?a.get(l).push(s):o.items.push(s)}o&&r[r.length-1]!==o&&r.push(o);for(let[s,l]of a){let i=t.get(s);i&&i.items.push(...l)}let u=[];for(let s of r)for(let l of s.items)u.push([l.name,{modifiers:l.modifiers}]);return u}function ui(e){let r=[];for(let[o,t]of e.variants.entries()){let a=function({value:l,modifier:i}={}){let c=o;l&&(c+=u?`-${l}`:l),i&&(c+=`/${i}`);let f=e.parseVariant(c);if(!f)return[];let m=Z(".__placeholder__",[]);if(gt(m,f,e.variants)===null)return[];let w=[];return Nt(m.nodes,(k,{path:h})=>{if(k.kind!=="rule"&&k.kind!=="at-rule"||k.nodes.length>0)return;h.sort((S,y)=>{let A=S.kind==="at-rule",E=y.kind==="at-rule";return A&&!E?-1:!A&&E?1:0});let b=h.flatMap(S=>S.kind==="rule"?S.selector==="&"?[]:[S.selector]:S.kind==="at-rule"?[`${S.name} ${S.params}`]:[]),v="";for(let S=b.length-1;S>=0;S--)v=v===""?b[S]:`${b[S]} { ${v} }`;w.push(v)}),w};if(t.kind==="arbitrary")continue;let u=o!=="@",s=e.variants.getCompletions(o);switch(t.kind){case"static":r.push({name:o,values:s,isArbitrary:!1,hasDash:u,selectors:a});break;case"functional":r.push({name:o,values:s,isArbitrary:!0,hasDash:u,selectors:a});break;case"compound":r.push({name:o,values:s,isArbitrary:!0,hasDash:u,selectors:a});break}}return r}function di(e,r){var s;let{astNodes:o,nodeSorting:t}=mt(Array.from(r),e),a=new Map(r.map(l=>[l,null])),u=0n;for(let l of o){let i=(s=t.get(l))==null?void 0:s.candidate;i&&a.set(i,a.get(i)??u++)}return r.map(l=>[l,a.get(l)??null])}var Ur=new RegExp("^@?[a-z0-9][a-zA-Z0-9_-]*(?<![_-])$"),fi=class{constructor(){Ae(this,"compareFns",new Map);Ae(this,"variants",new Map);Ae(this,"completions",new Map);Ae(this,"groupOrder",null);Ae(this,"lastOrder",0)}static(e,r,{compounds:o,order:t}={}){this.set(e,{kind:"static",applyFn:r,compoundsWith:0,compounds:o??2,order:t})}fromAst(e,r){let o=[];Q(r,t=>{t.kind==="rule"?o.push(t.selector):t.kind==="at-rule"&&t.name!=="@slot"&&o.push(`${t.name} ${t.params}`)}),this.static(e,t=>{let a=structuredClone(r);qr(a,t.nodes),t.nodes=a},{compounds:Ye(o)})}functional(e,r,{compounds:o,order:t}={}){this.set(e,{kind:"functional",applyFn:r,compoundsWith:0,compounds:o??2,order:t})}compound(e,r,o,{compounds:t,order:a}={}){this.set(e,{kind:"compound",applyFn:o,compoundsWith:r,compounds:t??2,order:a})}group(e,r){this.groupOrder=this.nextOrder(),r&&this.compareFns.set(this.groupOrder,r),e(),this.groupOrder=null}has(e){return this.variants.has(e)}get(e){return this.variants.get(e)}kind(e){var r;return(r=this.variants.get(e))==null?void 0:r.kind}compoundsWith(e,r){let o=this.variants.get(e),t=typeof r=="string"?this.variants.get(r):r.kind==="arbitrary"?{compounds:Ye([r.selector])}:this.variants.get(r.root);return!(!o||!t||o.kind!=="compound"||t.compounds===0||o.compoundsWith===0||(o.compoundsWith&t.compounds)===0)}suggest(e,r){this.completions.set(e,r)}getCompletions(e){var r;return((r=this.completions.get(e))==null?void 0:r())??[]}compare(e,r){if(e===r)return 0;if(e===null)return-1;if(r===null)return 1;if(e.kind==="arbitrary"&&r.kind==="arbitrary")return e.selector<r.selector?-1:1;if(e.kind==="arbitrary")return 1;if(r.kind==="arbitrary")return-1;let o=this.variants.get(e.root).order,t=this.variants.get(r.root).order,a=o-t;if(a!==0)return a;if(e.kind==="compound"&&r.kind==="compound"){let i=this.compare(e.variant,r.variant);return i===0?e.modifier&&r.modifier?e.modifier.value<r.modifier.value?-1:1:e.modifier?1:r.modifier?-1:0:i}let u=this.compareFns.get(o);if(u!==void 0)return u(e,r);if(e.root!==r.root)return e.root<r.root?-1:1;let s=e.value,l=r.value;return s===null?-1:l===null||s.kind==="arbitrary"&&l.kind!=="arbitrary"?1:s.kind!=="arbitrary"&&l.kind==="arbitrary"||s.value<l.value?-1:1}keys(){return this.variants.keys()}entries(){return this.variants.entries()}set(e,{kind:r,applyFn:o,compounds:t,compoundsWith:a,order:u}){let s=this.variants.get(e);s?Object.assign(s,{kind:r,applyFn:o,compounds:t}):(u===void 0&&(this.lastOrder=this.nextOrder(),u=this.lastOrder),this.variants.set(e,{kind:r,applyFn:o,order:u,compoundsWith:a,compounds:t}))}nextOrder(){return this.groupOrder??this.lastOrder+1}};function Ye(e){let r=0;for(let o of e){if(o[0]==="@"){if(!o.startsWith("@media")&&!o.startsWith("@supports")&&!o.startsWith("@container"))return 0;r|=1;continue}if(o.includes("::"))return 0;r|=2}return r}function hi(e){let r=new fi;function o(l,i,{compounds:c}={}){c??(c=Ye(i)),r.static(l,f=>{f.nodes=i.map(m=>se(m,f.nodes))},{compounds:c})}o("*",[":is(& > *)"],{compounds:0}),o("**",[":is(& *)"],{compounds:0});function t(l,i){return i.map(c=>{c=c.trim();let f=W(c," ");return f[0]==="not"?f.slice(1).join(" "):l==="@container"?f[0][0]==="("?`not ${c}`:f[1]==="not"?`${f[0]} ${f.slice(2).join(" ")}`:`${f[0]} not ${f.slice(1).join(" ")}`:`not ${c}`})}let a=["@media","@supports","@container"];function u(l){for(let i of a){if(i!==l.name)continue;let c=W(l.params,",");return c.length>1?null:(c=t(l.name,c),H(l.name,c.join(", ")))}return null}function s(l){return l.includes("::")?null:`&:not(${W(l,",").map(i=>(i=i.replaceAll("&","*"),i)).join(", ")})`}r.compound("not",3,(l,i)=>{if(i.variant.kind==="arbitrary"&&i.variant.relative||i.modifier)return null;let c=!1;if(Q([l],(f,{path:m})=>{if(f.kind!=="rule"&&f.kind!=="at-rule"||f.nodes.length>0)return 0;let w=[],k=[];for(let b of m)b.kind==="at-rule"?w.push(b):b.kind==="rule"&&k.push(b);if(w.length>1||k.length>1)return 2;let h=[];for(let b of k){let v=s(b.selector);if(!v)return c=!1,2;h.push(Z(v,[]))}for(let b of w){let v=u(b);if(!v)return c=!1,2;h.push(v)}return Object.assign(l,Z("&",h)),c=!0,1}),l.kind==="rule"&&l.selector==="&"&&l.nodes.length===1&&Object.assign(l,l.nodes[0]),!c)return null}),r.suggest("not",()=>Array.from(r.keys()).filter(l=>r.compoundsWith("not",l))),r.compound("group",2,(l,i)=>{if(i.variant.kind==="arbitrary"&&i.variant.relative)return null;let c=i.modifier?`:where(.${e.prefix?`${e.prefix}\\:`:""}group\\/${i.modifier.value})`:`:where(.${e.prefix?`${e.prefix}\\:`:""}group)`,f=!1;if(Q([l],(m,{path:w})=>{if(m.kind!=="rule")return 0;for(let h of w.slice(0,-1))if(h.kind==="rule")return f=!1,2;let k=m.selector.replaceAll("&",c);W(k,",").length>1&&(k=`:is(${k})`),m.selector=`&:is(${k} *)`,f=!0}),!f)return null}),r.suggest("group",()=>Array.from(r.keys()).filter(l=>r.compoundsWith("group",l))),r.compound("peer",2,(l,i)=>{if(i.variant.kind==="arbitrary"&&i.variant.relative)return null;let c=i.modifier?`:where(.${e.prefix?`${e.prefix}\\:`:""}peer\\/${i.modifier.value})`:`:where(.${e.prefix?`${e.prefix}\\:`:""}peer)`,f=!1;if(Q([l],(m,{path:w})=>{if(m.kind!=="rule")return 0;for(let h of w.slice(0,-1))if(h.kind==="rule")return f=!1,2;let k=m.selector.replaceAll("&",c);W(k,",").length>1&&(k=`:is(${k})`),m.selector=`&:is(${k} ~ *)`,f=!0}),!f)return null}),r.suggest("peer",()=>Array.from(r.keys()).filter(l=>r.compoundsWith("peer",l))),o("first-letter",["&::first-letter"]),o("first-line",["&::first-line"]),o("marker",["& *::marker","&::marker","& *::-webkit-details-marker","&::-webkit-details-marker"]),o("selection",["& *::selection","&::selection"]),o("file",["&::file-selector-button"]),o("placeholder",["&::placeholder"]),o("backdrop",["&::backdrop"]),o("details-content",["&::details-content"]);{let l=function(){return B([H("@property","--tw-content",[d("syntax",'"*"'),d("initial-value",'""'),d("inherits","false")])])};r.static("before",i=>{i.nodes=[Z("&::before",[l(),d("content","var(--tw-content)"),...i.nodes])]},{compounds:0}),r.static("after",i=>{i.nodes=[Z("&::after",[l(),d("content","var(--tw-content)"),...i.nodes])]},{compounds:0})}o("first",["&:first-child"]),o("last",["&:last-child"]),o("only",["&:only-child"]),o("odd",["&:nth-child(odd)"]),o("even",["&:nth-child(even)"]),o("first-of-type",["&:first-of-type"]),o("last-of-type",["&:last-of-type"]),o("only-of-type",["&:only-of-type"]),o("visited",["&:visited"]),o("target",["&:target"]),o("open",["&:is([open], :popover-open, :open)"]),o("default",["&:default"]),o("checked",["&:checked"]),o("indeterminate",["&:indeterminate"]),o("placeholder-shown",["&:placeholder-shown"]),o("autofill",["&:autofill"]),o("optional",["&:optional"]),o("required",["&:required"]),o("valid",["&:valid"]),o("invalid",["&:invalid"]),o("user-valid",["&:user-valid"]),o("user-invalid",["&:user-invalid"]),o("in-range",["&:in-range"]),o("out-of-range",["&:out-of-range"]),o("read-only",["&:read-only"]),o("empty",["&:empty"]),o("focus-within",["&:focus-within"]),r.static("hover",l=>{l.nodes=[Z("&:hover",[H("@media","(hover: hover)",l.nodes)])]}),o("focus",["&:focus"]),o("focus-visible",["&:focus-visible"]),o("active",["&:active"]),o("enabled",["&:enabled"]),o("disabled",["&:disabled"]),o("inert",["&:is([inert], [inert] *)"]),r.compound("in",2,(l,i)=>{if(i.modifier)return null;let c=!1;if(Q([l],(f,{path:m})=>{if(f.kind!=="rule")return 0;for(let w of m.slice(0,-1))if(w.kind==="rule")return c=!1,2;f.selector=`:where(${f.selector.replaceAll("&","*")}) &`,c=!0}),!c)return null}),r.suggest("in",()=>Array.from(r.keys()).filter(l=>r.compoundsWith("in",l))),r.compound("has",2,(l,i)=>{if(i.modifier)return null;let c=!1;if(Q([l],(f,{path:m})=>{if(f.kind!=="rule")return 0;for(let w of m.slice(0,-1))if(w.kind==="rule")return c=!1,2;f.selector=`&:has(${f.selector.replaceAll("&","*")})`,c=!0}),!c)return null}),r.suggest("has",()=>Array.from(r.keys()).filter(l=>r.compoundsWith("has",l))),r.functional("aria",(l,i)=>{if(!i.value||i.modifier)return null;i.value.kind==="arbitrary"?l.nodes=[Z(`&[aria-${Wr(i.value.value)}]`,l.nodes)]:l.nodes=[Z(`&[aria-${i.value.value}="true"]`,l.nodes)]}),r.suggest("aria",()=>["busy","checked","disabled","expanded","hidden","pressed","readonly","required","selected"]),r.functional("data",(l,i)=>{if(!i.value||i.modifier)return null;l.nodes=[Z(`&[data-${Wr(i.value.value)}]`,l.nodes)]}),r.functional("nth",(l,i)=>{if(!i.value||i.modifier||i.value.kind==="named"&&!D(i.value.value))return null;l.nodes=[Z(`&:nth-child(${i.value.value})`,l.nodes)]}),r.functional("nth-last",(l,i)=>{if(!i.value||i.modifier||i.value.kind==="named"&&!D(i.value.value))return null;l.nodes=[Z(`&:nth-last-child(${i.value.value})`,l.nodes)]}),r.functional("nth-of-type",(l,i)=>{if(!i.value||i.modifier||i.value.kind==="named"&&!D(i.value.value))return null;l.nodes=[Z(`&:nth-of-type(${i.value.value})`,l.nodes)]}),r.functional("nth-last-of-type",(l,i)=>{if(!i.value||i.modifier||i.value.kind==="named"&&!D(i.value.value))return null;l.nodes=[Z(`&:nth-last-of-type(${i.value.value})`,l.nodes)]}),r.functional("supports",(l,i)=>{if(!i.value||i.modifier)return null;let c=i.value.value;if(c===null)return null;if(/^[\w-]*\s*\(/.test(c)){let f=c.replace(/\b(and|or|not)\b/g," $1 ");l.nodes=[H("@supports",f,l.nodes)];return}c.includes(":")||(c=`${c}: var(--tw)`),(c[0]!=="("||c[c.length-1]!==")")&&(c=`(${c})`),l.nodes=[H("@supports",c,l.nodes)]},{compounds:1}),o("motion-safe",["@media (prefers-reduced-motion: no-preference)"]),o("motion-reduce",["@media (prefers-reduced-motion: reduce)"]),o("contrast-more",["@media (prefers-contrast: more)"]),o("contrast-less",["@media (prefers-contrast: less)"]);{let l=function(i,c,f,m){if(i===c)return 0;let w=m.get(i);if(w===null)return f==="asc"?-1:1;let k=m.get(c);return k===null?f==="asc"?1:-1:dt(w,k,f)};{let i=e.namespace("--breakpoint"),c=new ne(f=>{switch(f.kind){case"static":return e.resolveValue(f.root,["--breakpoint"])??null;case"functional":{if(!f.value||f.modifier)return null;let m=null;return f.value.kind==="arbitrary"?m=f.value.value:f.value.kind==="named"&&(m=e.resolveValue(f.value.value,["--breakpoint"])),!m||m.includes("var(")?null:m}case"arbitrary":case"compound":return null}});r.group(()=>{r.functional("max",(f,m)=>{if(m.modifier)return null;let w=c.get(m);if(w===null)return null;f.nodes=[H("@media",`(width < ${w})`,f.nodes)]},{compounds:1})},(f,m)=>l(f,m,"desc",c)),r.suggest("max",()=>Array.from(i.keys()).filter(f=>f!==null)),r.group(()=>{for(let[f,m]of e.namespace("--breakpoint"))f!==null&&r.static(f,w=>{w.nodes=[H("@media",`(width >= ${m})`,w.nodes)]},{compounds:1});r.functional("min",(f,m)=>{if(m.modifier)return null;let w=c.get(m);if(w===null)return null;f.nodes=[H("@media",`(width >= ${w})`,f.nodes)]},{compounds:1})},(f,m)=>l(f,m,"asc",c)),r.suggest("min",()=>Array.from(i.keys()).filter(f=>f!==null))}{let i=e.namespace("--container"),c=new ne(f=>{switch(f.kind){case"functional":{if(f.value===null)return null;let m=null;return f.value.kind==="arbitrary"?m=f.value.value:f.value.kind==="named"&&(m=e.resolveValue(f.value.value,["--container"])),!m||m.includes("var(")?null:m}case"static":case"arbitrary":case"compound":return null}});r.group(()=>{r.functional("@max",(f,m)=>{let w=c.get(m);if(w===null)return null;f.nodes=[H("@container",m.modifier?`${m.modifier.value} (width < ${w})`:`(width < ${w})`,f.nodes)]},{compounds:1})},(f,m)=>l(f,m,"desc",c)),r.suggest("@max",()=>Array.from(i.keys()).filter(f=>f!==null)),r.group(()=>{r.functional("@",(f,m)=>{let w=c.get(m);if(w===null)return null;f.nodes=[H("@container",m.modifier?`${m.modifier.value} (width >= ${w})`:`(width >= ${w})`,f.nodes)]},{compounds:1}),r.functional("@min",(f,m)=>{let w=c.get(m);if(w===null)return null;f.nodes=[H("@container",m.modifier?`${m.modifier.value} (width >= ${w})`:`(width >= ${w})`,f.nodes)]},{compounds:1})},(f,m)=>l(f,m,"asc",c)),r.suggest("@min",()=>Array.from(i.keys()).filter(f=>f!==null)),r.suggest("@",()=>Array.from(i.keys()).filter(f=>f!==null))}}return o("portrait",["@media (orientation: portrait)"]),o("landscape",["@media (orientation: landscape)"]),o("ltr",['&:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)']),o("rtl",['&:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)']),o("dark",["@media (prefers-color-scheme: dark)"]),o("starting",["@starting-style"]),o("print",["@media print"]),o("forced-colors",["@media (forced-colors: active)"]),o("inverted-colors",["@media (inverted-colors: inverted)"]),o("pointer-none",["@media (pointer: none)"]),o("pointer-coarse",["@media (pointer: coarse)"]),o("pointer-fine",["@media (pointer: fine)"]),o("any-pointer-none",["@media (any-pointer: none)"]),o("any-pointer-coarse",["@media (any-pointer: coarse)"]),o("any-pointer-fine",["@media (any-pointer: fine)"]),o("noscript",["@media (scripting: none)"]),r}function Wr(e){if(e.includes("=")){let[r,...o]=W(e,"="),t=o.join("=").trim();if(t[0]==="'"||t[0]==='"')return e;if(t.length>1){let a=t[t.length-1];if(t[t.length-2]===" "&&(a==="i"||a==="I"||a==="s"||a==="S"))return`${r}="${t.slice(0,-2)}" ${a}`}return`${r}="${t}"`}return e}function qr(e,r){Q(e,(o,{replaceWith:t})=>{if(o.kind==="at-rule"&&o.name==="@slot")t(r);else if(o.kind==="at-rule"&&(o.name==="@keyframes"||o.name==="@property"))return Object.assign(o,B([H(o.name,o.params,o.nodes)])),1})}function pi(e){let r=Xn(e),o=hi(e),t=new ne(i=>Vn(i,l)),a=new ne(i=>Array.from(Rn(i,l))),u=new ne(i=>new ne(c=>{let f=mi(c,l,i);try{Vt(f.map(({node:m})=>m),l)}catch{return[]}return f})),s=new ne(i=>{for(let c of Er(i))e.markUsedVariable(c)}),l={theme:e,utilities:r,variants:o,invalidCandidates:new Set,important:!1,candidatesToCss(i){let c=[];for(let f of i){let m=!1,{astNodes:w}=mt([f],this,{onInvalidCandidate(){m=!0}});w=qe(w,l,0),w.length===0||m?c.push(null):c.push(Le(w))}return c},getClassOrder(i){return di(this,i)},getClassList(){return si(this)},getVariants(){return ui(this)},parseCandidate(i){return a.get(i)},parseVariant(i){return t.get(i)},compileAstNodes(i,c=1){return u.get(c).get(i)},printCandidate(i){return Un(l,i)},printVariant(i){return Lt(i)},getVariantOrder(){let i=Array.from(t.values());i.sort((w,k)=>this.variants.compare(w,k));let c=new Map,f,m=0;for(let w of i)w!==null&&(f!==void 0&&this.variants.compare(f,w)!==0&&m++,c.set(w,m),f=w);return c},resolveThemeValue(i,c=!0){let f=i.lastIndexOf("/"),m=null;f!==-1&&(m=i.slice(f+1).trim(),i=i.slice(0,f).trim());let w=e.resolve(null,[i],c?1:0)??void 0;return m&&w?ue(w,m):w},trackUsedVariables(i){s.get(i)}};return l}var Br="container-type.pointer-events.visibility.position.inset.inset-inline.inset-block.inset-inline-start.inset-inline-end.top.right.bottom.left.isolation.z-index.order.grid-column.grid-column-start.grid-column-end.grid-row.grid-row-start.grid-row-end.float.clear.--tw-container-component.margin.margin-inline.margin-block.margin-inline-start.margin-inline-end.margin-top.margin-right.margin-bottom.margin-left.box-sizing.display.field-sizing.aspect-ratio.height.max-height.min-height.width.max-width.min-width.flex.flex-shrink.flex-grow.flex-basis.table-layout.caption-side.border-collapse.border-spacing.transform-origin.translate.--tw-translate-x.--tw-translate-y.--tw-translate-z.scale.--tw-scale-x.--tw-scale-y.--tw-scale-z.rotate.--tw-rotate-x.--tw-rotate-y.--tw-rotate-z.--tw-skew-x.--tw-skew-y.transform.animation.cursor.touch-action.--tw-pan-x.--tw-pan-y.--tw-pinch-zoom.resize.scroll-snap-type.--tw-scroll-snap-strictness.scroll-snap-align.scroll-snap-stop.scroll-margin.scroll-margin-inline.scroll-margin-block.scroll-margin-inline-start.scroll-margin-inline-end.scroll-margin-top.scroll-margin-right.scroll-margin-bottom.scroll-margin-left.scroll-padding.scroll-padding-inline.scroll-padding-block.scroll-padding-inline-start.scroll-padding-inline-end.scroll-padding-top.scroll-padding-right.scroll-padding-bottom.scroll-padding-left.list-style-position.list-style-type.list-style-image.appearance.columns.break-before.break-inside.break-after.grid-auto-columns.grid-auto-flow.grid-auto-rows.grid-template-columns.grid-template-rows.flex-direction.flex-wrap.place-content.place-items.align-content.align-items.justify-content.justify-items.gap.column-gap.row-gap.--tw-space-x-reverse.--tw-space-y-reverse.divide-x-width.divide-y-width.--tw-divide-y-reverse.divide-style.divide-color.place-self.align-self.justify-self.overflow.overflow-x.overflow-y.overscroll-behavior.overscroll-behavior-x.overscroll-behavior-y.scroll-behavior.border-radius.border-start-radius.border-end-radius.border-top-radius.border-right-radius.border-bottom-radius.border-left-radius.border-start-start-radius.border-start-end-radius.border-end-end-radius.border-end-start-radius.border-top-left-radius.border-top-right-radius.border-bottom-right-radius.border-bottom-left-radius.border-width.border-inline-width.border-block-width.border-inline-start-width.border-inline-end-width.border-top-width.border-right-width.border-bottom-width.border-left-width.border-style.border-inline-style.border-block-style.border-inline-start-style.border-inline-end-style.border-top-style.border-right-style.border-bottom-style.border-left-style.border-color.border-inline-color.border-block-color.border-inline-start-color.border-inline-end-color.border-top-color.border-right-color.border-bottom-color.border-left-color.background-color.background-image.--tw-gradient-position.--tw-gradient-stops.--tw-gradient-via-stops.--tw-gradient-from.--tw-gradient-from-position.--tw-gradient-via.--tw-gradient-via-position.--tw-gradient-to.--tw-gradient-to-position.mask-image.--tw-mask-top.--tw-mask-top-from-color.--tw-mask-top-from-position.--tw-mask-top-to-color.--tw-mask-top-to-position.--tw-mask-right.--tw-mask-right-from-color.--tw-mask-right-from-position.--tw-mask-right-to-color.--tw-mask-right-to-position.--tw-mask-bottom.--tw-mask-bottom-from-color.--tw-mask-bottom-from-position.--tw-mask-bottom-to-color.--tw-mask-bottom-to-position.--tw-mask-left.--tw-mask-left-from-color.--tw-mask-left-from-position.--tw-mask-left-to-color.--tw-mask-left-to-position.--tw-mask-linear.--tw-mask-linear-position.--tw-mask-linear-from-color.--tw-mask-linear-from-position.--tw-mask-linear-to-color.--tw-mask-linear-to-position.--tw-mask-radial.--tw-mask-radial-shape.--tw-mask-radial-size.--tw-mask-radial-position.--tw-mask-radial-from-color.--tw-mask-radial-from-position.--tw-mask-radial-to-color.--tw-mask-radial-to-position.--tw-mask-conic.--tw-mask-conic-position.--tw-mask-conic-from-color.--tw-mask-conic-from-position.--tw-mask-conic-to-color.--tw-mask-conic-to-position.box-decoration-break.background-size.background-attachment.background-clip.background-position.background-repeat.background-origin.mask-composite.mask-mode.mask-type.mask-size.mask-clip.mask-position.mask-repeat.mask-origin.fill.stroke.stroke-width.object-fit.object-position.padding.padding-inline.padding-block.padding-inline-start.padding-inline-end.padding-top.padding-right.padding-bottom.padding-left.text-align.text-indent.vertical-align.font-family.font-size.line-height.font-weight.letter-spacing.text-wrap.overflow-wrap.word-break.text-overflow.hyphens.white-space.color.text-transform.font-style.font-stretch.font-variant-numeric.text-decoration-line.text-decoration-color.text-decoration-style.text-decoration-thickness.text-underline-offset.-webkit-font-smoothing.placeholder-color.caret-color.accent-color.color-scheme.opacity.background-blend-mode.mix-blend-mode.box-shadow.--tw-shadow.--tw-shadow-color.--tw-ring-shadow.--tw-ring-color.--tw-inset-shadow.--tw-inset-shadow-color.--tw-inset-ring-shadow.--tw-inset-ring-color.--tw-ring-offset-width.--tw-ring-offset-color.outline.outline-width.outline-offset.outline-color.--tw-blur.--tw-brightness.--tw-contrast.--tw-drop-shadow.--tw-grayscale.--tw-hue-rotate.--tw-invert.--tw-saturate.--tw-sepia.filter.--tw-backdrop-blur.--tw-backdrop-brightness.--tw-backdrop-contrast.--tw-backdrop-grayscale.--tw-backdrop-hue-rotate.--tw-backdrop-invert.--tw-backdrop-opacity.--tw-backdrop-saturate.--tw-backdrop-sepia.backdrop-filter.transition-property.transition-behavior.transition-delay.transition-duration.transition-timing-function.will-change.contain.content.forced-color-adjust".split(".");function mt(e,r,{onInvalidCandidate:o,respectImportant:t}={}){let a=new Map,u=[],s=new Map;for(let c of e){if(r.invalidCandidates.has(c)){o==null||o(c);continue}let f=r.parseCandidate(c);if(f.length===0){o==null||o(c);continue}s.set(c,f)}let l=0;(t??!0)&&(l|=1);let i=r.getVariantOrder();for(let[c,f]of s){let m=!1;for(let w of f){let k=r.compileAstNodes(w,l);if(k.length!==0){m=!0;for(let{node:h,propertySort:b}of k){let v=0n;for(let S of w.variants)v|=1n<<BigInt(i.get(S));a.set(h,{properties:b,variants:v,candidate:c}),u.push(h)}}}m||(o==null||o(c))}return u.sort((c,f)=>{let m=a.get(c),w=a.get(f);if(m.variants-w.variants!==0n)return Number(m.variants-w.variants);let k=0;for(;k<m.properties.order.length&&k<w.properties.order.length&&m.properties.order[k]===w.properties.order[k];)k+=1;return(m.properties.order[k]??1/0)-(w.properties.order[k]??1/0)||w.properties.count-m.properties.count||Vr(m.candidate,w.candidate)}),{astNodes:u,nodeSorting:a}}function mi(e,r,o){let t=gi(e,r);if(t.length===0)return[];let a=r.important&&!!(o&1),u=[],s=`.${ct(e.raw)}`;for(let l of t){let i=vi(l);(e.important||a)&&Qr(l);let c={kind:"rule",selector:s,nodes:l};for(let f of e.variants)if(gt(c,f,r.variants)===null)return[];u.push({node:c,propertySort:i})}return u}function gt(e,r,o,t=0){if(r.kind==="arbitrary"){if(r.relative&&t===0)return null;e.nodes=[se(r.selector,e.nodes)];return}let{applyFn:a}=o.get(r.root);if(r.kind==="compound"){let u=H("@slot");if(gt(u,r.variant,o,t+1)===null||r.root==="not"&&u.nodes.length>1)return null;for(let s of u.nodes)if(s.kind!=="rule"&&s.kind!=="at-rule"||a(s,r)===null)return null;Q(u.nodes,s=>{if((s.kind==="rule"||s.kind==="at-rule")&&s.nodes.length<=0)return s.nodes=e.nodes,1}),e.nodes=u.nodes;return}if(a(e,r)===null)return null}function Yr(e){var o;let r=((o=e.options)==null?void 0:o.types)??[];return r.length>1&&r.includes("any")}function gi(e,r){if(e.kind==="arbitrary"){let s=e.value;return e.modifier&&(s=ae(s,e.modifier,r.theme)),s===null?[]:[[d(e.property,s)]]}let o=r.utilities.get(e.root)??[],t=[],a=o.filter(s=>!Yr(s));for(let s of a){if(s.kind!==e.kind)continue;let l=s.compileFn(e);if(l!==void 0){if(l===null)return t;t.push(l)}}if(t.length>0)return t;let u=o.filter(s=>Yr(s));for(let s of u){if(s.kind!==e.kind)continue;let l=s.compileFn(e);if(l!==void 0){if(l===null)return t;t.push(l)}}return t}function Qr(e){for(let r of e)r.kind!=="at-root"&&(r.kind==="declaration"?r.important=!0:(r.kind==="rule"||r.kind==="at-rule")&&Qr(r.nodes))}function vi(e){let r=new Set,o=0,t=e.slice(),a=!1;for(;t.length>0;){let u=t.shift();if(u.kind==="declaration"){if(u.value===void 0||(o++,a))continue;if(u.property==="--tw-sort"){let l=Br.indexOf(u.value??"");if(l!==-1){r.add(l),a=!0;continue}}let s=Br.indexOf(u.property);s!==-1&&r.add(s)}else if(u.kind==="rule"||u.kind==="at-rule")for(let s of u.nodes)t.push(s)}return{order:Array.from(r).sort((u,s)=>u-s),count:o}}function Ut(e,r){let o=0,t=se("&",e),a=new Set,u=new ne(()=>new Set),s=new ne(()=>new Set);Q([t],(m,{parent:w,path:k})=>{if(m.kind==="at-rule"){if(m.name==="@keyframes")return Q(m.nodes,h=>{if(h.kind==="at-rule"&&h.name==="@apply")throw Error("You cannot use `@apply` inside `@keyframes`.")}),1;if(m.name==="@utility"){let h=m.params.replace(/-\*$/,"");s.get(h).add(m),Q(m.nodes,b=>{if(!(b.kind!=="at-rule"||b.name!=="@apply")){a.add(m);for(let v of Gr(b,r))u.get(m).add(v)}});return}if(m.name==="@apply"){if(w===null)return;o|=1,a.add(w);for(let h of Gr(m,r))for(let b of k)b!==m&&a.has(b)&&u.get(b).add(h)}}});let l=new Set,i=[],c=new Set;function f(m,w=[]){if(!l.has(m)){if(c.has(m)){let k=w[(w.indexOf(m)+1)%w.length];throw m.kind==="at-rule"&&m.name==="@utility"&&k.kind==="at-rule"&&k.name==="@utility"&&Q(m.nodes,h=>{if(h.kind!=="at-rule"||h.name!=="@apply")return;let b=h.params.split(/\s+/g);for(let v of b)for(let S of r.parseCandidate(v))switch(S.kind){case"arbitrary":break;case"static":case"functional":if(k.params.replace(/-\*$/,"")===S.root)throw Error(`You cannot \`@apply\` the \`${v}\` utility here because it creates a circular dependency.`);break;default:}}),Error(`Circular dependency detected:

${Le([m])}
Relies on:

${Le([k])}`)}c.add(m);for(let k of u.get(m))for(let h of s.get(k))w.push(m),f(h,w),w.pop();l.add(m),c.delete(m),i.push(m)}}for(let m of a)f(m);for(let m of i)"nodes"in m&&Q(m.nodes,(w,{replaceWith:k})=>{if(w.kind!=="at-rule"||w.name!=="@apply")return;let h=w.params.split(/(\s+)/g),b={},v=0;for(let[S,y]of h.entries())S%2==0&&(b[y]=v),v+=y.length;{let S=Object.keys(b),y=mt(S,r,{respectImportant:!1,onInvalidCandidate:T=>{if(r.theme.prefix&&!T.startsWith(r.theme.prefix))throw Error(`Cannot apply unprefixed utility class \`${T}\`. Did you mean \`${r.theme.prefix}:${T}\`?`);if(r.invalidCandidates.has(T))throw Error(`Cannot apply utility class \`${T}\` because it has been explicitly disabled: https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-excluding-classes`);let C=W(T,":");if(C.length>1){let n=C.pop();if(r.candidatesToCss([n])[0]){let p=r.candidatesToCss(C.map($=>`${$}:[--tw-variant-check:1]`)),g=C.filter(($,x)=>p[x]===null);if(g.length>0){if(g.length===1)throw Error(`Cannot apply utility class \`${T}\` because the ${g.map($=>`\`${$}\``)} variant does not exist.`);{let $=new Intl.ListFormat("en",{style:"long",type:"conjunction"});throw Error(`Cannot apply utility class \`${T}\` because the ${$.format(g.map(x=>`\`${x}\``))} variants do not exist.`)}}}}throw r.theme.size===0?Error(`Cannot apply unknown utility class \`${T}\`. Are you using CSS modules or similar and missing \`@reference\`? https://tailwindcss.com/docs/functions-and-directives#reference-directive`):Error(`Cannot apply unknown utility class \`${T}\``)}}),A=w.src,E=y.astNodes.map(T=>{var g;let C=(g=y.nodeSorting.get(T))==null?void 0:g.candidate,n=C?b[C]:void 0;if(T=structuredClone(T),!A||!C||n===void 0)return Q([T],$=>{$.src=A}),T;let p=[A[0],A[1],A[2]];return p[1]+=7+n,p[2]=p[1]+C.length,Q([T],$=>{$.src=p}),T}),j=[];for(let T of E)if(T.kind==="rule")for(let C of T.nodes)j.push(C);else j.push(T);k(j)}});return o}function*Gr(e,r){for(let o of e.params.split(/\s+/g))for(let t of r.parseCandidate(o))switch(t.kind){case"arbitrary":break;case"static":case"functional":yield t.root;break;default:}}async function Hr(e,r,o,t=0,a=!1){let u=0,s=[];return Q(e,(l,{replaceWith:i})=>{if(l.kind==="at-rule"&&(l.name==="@import"||l.name==="@reference")){let c=wi(ie(l.params));if(c===null)return;l.name==="@reference"&&(c.media="reference"),u|=2;let{uri:f,layer:m,media:w,supports:k}=c;if(f.startsWith("data:")||f.startsWith("http://")||f.startsWith("https://"))return;let h=Fe({},[]);return s.push((async()=>{if(t>100)throw Error(`Exceeded maximum recursion depth while resolving \`${f}\` in \`${r}\`)`);let b=await o(f,r),v=lt(b.content,{from:a?b.path:void 0});await Hr(v,b.base,o,t+1,a),h.nodes=bi(l,[Fe({base:b.base},v)],m,w,k)})()),i(h),1}}),s.length>0&&await Promise.all(s),u}function wi(e){let r,o=null,t=null,a=null;for(let u=0;u<e.length;u++){let s=e[u];if(s.kind!=="separator"){if(s.kind==="word"&&!r){if(!s.value||s.value[0]!=='"'&&s.value[0]!=="'")return null;r=s.value.slice(1,-1);continue}if(s.kind==="function"&&s.value.toLowerCase()==="url"||!r)return null;if((s.kind==="word"||s.kind==="function")&&s.value.toLowerCase()==="layer"){if(o)return null;if(a)throw Error("`layer(\u2026)` in an `@import` should come before any other functions or conditions");o="nodes"in s?ce(s.nodes):"";continue}if(s.kind==="function"&&s.value.toLowerCase()==="supports"){if(a)return null;a=ce(s.nodes);continue}t=ce(e.slice(u));break}}return r?{uri:r,layer:o,media:t,supports:a}:null}function bi(e,r,o,t,a){let u=r;if(o!==null){let s=H("@layer",o,u);s.src=e.src,u=[s]}if(t!==null){let s=H("@media",t,u);s.src=e.src,u=[s]}if(a!==null){let s=H("@supports",a[0]==="("?a:`(${a})`,u);s.src=e.src,u=[s]}return u}function Ve(e,r=null){return Array.isArray(e)&&e.length===2&&typeof e[1]=="object"?r?e[1][r]??null:e[0]:Array.isArray(e)&&r===null?e.join(", "):typeof e=="string"&&r===null?e:null}function ki(e,{theme:r},o){for(let t of o){let a=Wt([t]);a&&e.theme.clearNamespace(`--${a}`,4)}for(let[t,a]of yi(r)){if(typeof a!="string"&&typeof a!="number")continue;if(typeof a=="string"&&(a=a.replace(/<alpha-value>/g,"1")),t[0]==="opacity"&&(typeof a=="number"||typeof a=="string")){let s=typeof a=="string"?parseFloat(a):a;s>=0&&s<=1&&(a=s*100+"%")}let u=Wt(t);u&&e.theme.add(`--${u}`,""+a,7)}if(Object.hasOwn(r,"fontFamily")){{let t=Ve(r.fontFamily.sans);t&&e.theme.hasDefault("--font-sans")&&(e.theme.add("--default-font-family",t,5),e.theme.add("--default-font-feature-settings",Ve(r.fontFamily.sans,"fontFeatureSettings")??"normal",5),e.theme.add("--default-font-variation-settings",Ve(r.fontFamily.sans,"fontVariationSettings")??"normal",5))}{let t=Ve(r.fontFamily.mono);t&&e.theme.hasDefault("--font-mono")&&(e.theme.add("--default-mono-font-family",t,5),e.theme.add("--default-mono-font-feature-settings",Ve(r.fontFamily.mono,"fontFeatureSettings")??"normal",5),e.theme.add("--default-mono-font-variation-settings",Ve(r.fontFamily.mono,"fontVariationSettings")??"normal",5))}}return r}function yi(e){let r=[];return Zr(e,[],(o,t)=>{if($i(o))return r.push([t,o]),1;if(Si(o)){r.push([t,o[0]]);for(let a of Reflect.ownKeys(o[1]))r.push([[...t,`-${a}`],o[1][a]]);return 1}if(Array.isArray(o)&&o.every(a=>typeof a=="string"))return t[0]==="fontSize"?(r.push([t,o[0]]),o.length>=2&&r.push([[...t,"-line-height"],o[1]])):r.push([t,o.join(", ")]),1}),r}var xi=/^[a-zA-Z0-9-_%/\.]+$/;function Wt(e){if(e[0]==="container")return null;e=structuredClone(e),e[0]==="animation"&&(e[0]="animate"),e[0]==="aspectRatio"&&(e[0]="aspect"),e[0]==="borderRadius"&&(e[0]="radius"),e[0]==="boxShadow"&&(e[0]="shadow"),e[0]==="colors"&&(e[0]="color"),e[0]==="containers"&&(e[0]="container"),e[0]==="fontFamily"&&(e[0]="font"),e[0]==="fontSize"&&(e[0]="text"),e[0]==="letterSpacing"&&(e[0]="tracking"),e[0]==="lineHeight"&&(e[0]="leading"),e[0]==="maxWidth"&&(e[0]="container"),e[0]==="screens"&&(e[0]="breakpoint"),e[0]==="transitionTimingFunction"&&(e[0]="ease");for(let r of e)if(!xi.test(r))return null;return e.map((r,o,t)=>r==="1"&&o!==t.length-1?"":r).map(r=>r.replaceAll(".","_").replace(/([a-z])([A-Z])/g,(o,t,a)=>`${t}-${a.toLowerCase()}`)).filter((r,o)=>r!=="DEFAULT"||o!==e.length-1).join("-")}function $i(e){return typeof e=="number"||typeof e=="string"}function Si(e){if(!Array.isArray(e)||e.length!==2||typeof e[0]!="string"&&typeof e[0]!="number"||e[1]===void 0||e[1]===null||typeof e[1]!="object")return!1;for(let r of Reflect.ownKeys(e[1]))if(typeof r!="string"||typeof e[1][r]!="string"&&typeof e[1][r]!="number")return!1;return!0}function Zr(e,r=[],o){for(let t of Reflect.ownKeys(e)){let a=e[t];if(a==null)continue;let u=[...r,t],s=o(a,u)??0;if(s!==1&&(s===2||!(!Array.isArray(a)&&typeof a!="object")&&Zr(a,u,o)===2))return 2}}function Jr(e){let r=[];for(let o of W(e,".")){if(!o.includes("[")){r.push(o);continue}let t=0;for(;;){let a=o.indexOf("[",t),u=o.indexOf("]",a);if(a===-1||u===-1)break;a>t&&r.push(o.slice(t,a)),r.push(o.slice(a+1,u)),t=u+1}t<=o.length-1&&r.push(o.slice(t))}return r}function Qe(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let r=Object.getPrototypeOf(e);return r===null||Object.getPrototypeOf(r)===null}function qt(e,r,o,t=[]){for(let a of r)if(a!=null)for(let u of Reflect.ownKeys(a)){t.push(u);let s=o(e[u],a[u],t);s===void 0?!Qe(e[u])||!Qe(a[u])?e[u]=a[u]:e[u]=qt({},[e[u],a[u]],o,t):e[u]=s,t.pop()}return e}function Xr(e,r,o){return function(t,a){let u=t.lastIndexOf("/"),s=null;u!==-1&&(s=t.slice(u+1).trim(),t=t.slice(0,u).trim());let l=(()=>{var w;let i=Jr(t),[c,f]=Ti(e.theme,i),m=o(eo(r()??{},i)??null);if(typeof m=="string"&&(m=m.replace("<alpha-value>","1")),typeof c!="object")return typeof f!="object"&&f&4?m??c:c;if(typeof m=="object"&&m&&!Array.isArray(m)){let k=qt({},[m],(h,b)=>b);if(c===null&&Object.hasOwn(m,"__CSS_VALUES__")){let h={};for(let b in m.__CSS_VALUES__)h[b]=m[b],delete k[b];c=h}for(let h in c)h!=="__CSS_VALUES__"&&(((w=m==null?void 0:m.__CSS_VALUES__)==null?void 0:w[h])&4&&eo(k,h.split("-"))!==void 0||(k[ut(h)]=c[h]));return k}if(Array.isArray(c)&&Array.isArray(f)&&Array.isArray(m)){let k=c[0],h=c[1];f[0]&4&&(k=m[0]??k);for(let b of Object.keys(h))f[1][b]&4&&(h[b]=m[1][b]??h[b]);return[k,h]}return c??m})();return s&&typeof l=="string"&&(l=ue(l,s)),l??a}}function Ti(e,r){if(r.length===1&&r[0].startsWith("--"))return[e.get([r[0]]),e.getOptions(r[0])];let o=Wt(r),t=new Map,a=new ne(()=>new Map),u=e.namespace(`--${o}`);if(u.size===0)return[null,0];let s=new Map;for(let[f,m]of u){if(!f||!f.includes("--")){t.set(f,m),s.set(f,e.getOptions(f?`--${o}-${f}`:`--${o}`));continue}let w=f.indexOf("--"),k=f.slice(0,w),h=f.slice(w+2);h=h.replace(/-([a-z])/g,(b,v)=>v.toUpperCase()),a.get(k===""?null:k).set(h,[m,e.getOptions(`--${o}${f}`)])}let l=e.getOptions(`--${o}`);for(let[f,m]of a){let w=t.get(f);if(typeof w!="string")continue;let k={},h={};for(let[b,[v,S]]of m)k[b]=v,h[b]=S;t.set(f,[w,k]),s.set(f,[l,h])}let i={},c={};for(let[f,m]of t)to(i,[f??"DEFAULT"],m);for(let[f,m]of s)to(c,[f??"DEFAULT"],m);return r[r.length-1]==="DEFAULT"?[(i==null?void 0:i.DEFAULT)??null,c.DEFAULT??0]:"DEFAULT"in i&&Object.keys(i).length===1?[i.DEFAULT,c.DEFAULT??0]:(i.__CSS_VALUES__=c,[i,c])}function eo(e,r){for(let o=0;o<r.length;++o){let t=r[o];if((e==null?void 0:e[t])===void 0){if(r[o+1]===void 0)return;r[o+1]=`${t}-${r[o+1]}`;continue}e=e[t]}return e}function to(e,r,o){for(let t of r.slice(0,-1))e[t]===void 0&&(e[t]={}),e=e[t];e[r[r.length-1]]=o}function Ai(e){return{kind:"combinator",value:e}}function Ei(e,r){return{kind:"function",value:e,nodes:r}}function Ge(e){return{kind:"selector",value:e}}function _i(e){return{kind:"separator",value:e}}function Oi(e){return{kind:"value",value:e}}function vt(e,r,o=null){for(let t=0;t<e.length;t++){let a=e[t],u=!1,s=0,l=r(a,{parent:o,replaceWith(i){u||(u=!0,Array.isArray(i)?i.length===0?(e.splice(t,1),s=0):i.length===1?(e[t]=i[0],s=1):(e.splice(t,1,...i),s=i.length):(e[t]=i,s=1))}})??0;if(u){l===0?t--:t+=s-1;continue}if(l===2||l!==1&&a.kind==="function"&&vt(a.nodes,r,a)===2)return 2}}function wt(e){let r="";for(let o of e)switch(o.kind){case"combinator":case"selector":case"separator":case"value":r+=o.value;break;case"function":r+=o.value+"("+wt(o.nodes)+")"}return r}var ro=92,ji=93,oo=41,Ci=58,no=44,zi=34,Ni=46,io=62,ao=10,Pi=35,lo=91,so=40,co=43,Ii=39,uo=32,fo=9,ho=126;function Bt(e){e=e.replaceAll(`\r
`,`
`);let r=[],o=[],t=null,a="",u;for(let s=0;s<e.length;s++){let l=e.charCodeAt(s);switch(l){case no:case io:case ao:case uo:case co:case fo:case ho:{if(a.length>0){let w=Ge(a);t?t.nodes.push(w):r.push(w),a=""}let i=s,c=s+1;for(;c<e.length&&(u=e.charCodeAt(c),!(u!==no&&u!==io&&u!==ao&&u!==uo&&u!==co&&u!==fo&&u!==ho));c++);s=c-1;let f=e.slice(i,c),m=f.trim()===","?_i(f):Ai(f);t?t.nodes.push(m):r.push(m);break}case so:{let i=Ei(a,[]);if(a="",i.value!==":not"&&i.value!==":where"&&i.value!==":has"&&i.value!==":is"){let c=s+1,f=0;for(let w=s+1;w<e.length;w++){if(u=e.charCodeAt(w),u===so){f++;continue}if(u===oo){if(f===0){s=w;break}f--}}let m=s;i.nodes.push(Oi(e.slice(c,m))),a="",s=m,t?t.nodes.push(i):r.push(i);break}t?t.nodes.push(i):r.push(i),o.push(i),t=i;break}case oo:{let i=o.pop();if(a.length>0){let c=Ge(a);i.nodes.push(c),a=""}t=o.length>0?o[o.length-1]:null;break}case Ni:case Ci:case Pi:if(a.length>0){let i=Ge(a);t?t.nodes.push(i):r.push(i)}a=String.fromCharCode(l);break;case lo:{if(a.length>0){let f=Ge(a);t?t.nodes.push(f):r.push(f)}a="";let i=s,c=0;for(let f=s+1;f<e.length;f++){if(u=e.charCodeAt(f),u===lo){c++;continue}if(u===ji){if(c===0){s=f;break}c--}}a+=e.slice(i,s+1);break}case Ii:case zi:{let i=s;for(let c=s+1;c<e.length;c++)if(u=e.charCodeAt(c),u===ro)c+=1;else if(u===l){s=c;break}a+=e.slice(i,s+1);break}case ro:{let i=e.charCodeAt(s+1);a+=String.fromCharCode(l)+String.fromCharCode(i),s+=1;break}default:a+=String.fromCharCode(l)}}return a.length>0&&r.push(Ge(a)),r}var po=/^[a-z@][a-zA-Z0-9/%._-]*$/;function mo({designSystem:e,ast:r,resolvedConfig:o,featuresRef:t,referenceMode:a,src:u}){let s={addBase(l){if(a)return;let i=je(l);t.current|=Vt(i,e);let c=H("@layer","base",i);Q([c],f=>{f.src=u}),r.push(c)},addVariant(l,i){if(!Ur.test(l))throw Error(`\`addVariant('${l}')\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);if(typeof i=="string"){if(i.includes(":merge("))return}else if(Array.isArray(i)){if(i.some(c=>c.includes(":merge(")))return}else if(typeof i=="object"){let c=function(f,m){return Object.entries(f).some(([w,k])=>w.includes(m)||typeof k=="object"&&c(k,m))};if(c(i,":merge("))return}typeof i=="string"||Array.isArray(i)?e.variants.static(l,c=>{c.nodes=go(i,c.nodes)},{compounds:Ye(typeof i=="string"?[i]:i)}):typeof i=="object"&&e.variants.fromAst(l,je(i))},matchVariant(l,i,c){function f(w,k,h){let b=i(w,{modifier:(k==null?void 0:k.value)??null});return go(b,h)}try{let w=i("a",{modifier:null});if(typeof w=="string"&&w.includes(":merge(")||Array.isArray(w)&&w.some(k=>k.includes(":merge(")))return}catch{}let m=Object.keys((c==null?void 0:c.values)??{});e.variants.group(()=>{e.variants.functional(l,(w,k)=>{if(!k.value){if(c!=null&&c.values&&"DEFAULT"in c.values){w.nodes=f(c.values.DEFAULT,k.modifier,w.nodes);return}return null}if(k.value.kind==="arbitrary")w.nodes=f(k.value.value,k.modifier,w.nodes);else if(k.value.kind==="named"&&(c!=null&&c.values)){let h=c.values[k.value.value];if(typeof h!="string")return null;w.nodes=f(h,k.modifier,w.nodes)}else return null})},(w,k)=>{var E,j,T,C;if(w.kind!=="functional"||k.kind!=="functional")return 0;let h=w.value?w.value.value:"DEFAULT",b=k.value?k.value.value:"DEFAULT",v=((E=c==null?void 0:c.values)==null?void 0:E[h])??h,S=((j=c==null?void 0:c.values)==null?void 0:j[b])??b;if(c&&typeof c.sort=="function")return c.sort({value:v,modifier:((T=w.modifier)==null?void 0:T.value)??null},{value:S,modifier:((C=k.modifier)==null?void 0:C.value)??null});let y=m.indexOf(h),A=m.indexOf(b);return y=y===-1?m.length:y,A=A===-1?m.length:A,y===A?v<S?-1:1:y-A}),e.variants.suggest(l,()=>Object.keys((c==null?void 0:c.values)??{}).filter(w=>w!=="DEFAULT"))},addUtilities(l){l=Array.isArray(l)?l:[l];let i=l.flatMap(f=>Object.entries(f));i=i.flatMap(([f,m])=>W(f,",").map(w=>[w.trim(),m]));let c=new ne(()=>[]);for(let[f,m]of i){if(f.startsWith("@keyframes ")){if(!a){let h=se(f,je(m));Q([h],b=>{b.src=u}),r.push(h)}continue}let w=Bt(f),k=!1;if(vt(w,h=>{if(h.kind==="selector"&&h.value[0]==="."&&po.test(h.value.slice(1))){let b=h.value;h.value="&";let v=wt(w),S=b.slice(1),y=v==="&"?je(m):[se(v,je(m))];c.get(S).push(...y),k=!0,h.value=b;return}if(h.kind==="function"&&h.value===":not")return 1}),!k)throw Error(`\`addUtilities({ '${f}' : \u2026 })\` defines an invalid utility selector. Utilities must be a single class name and start with a lowercase letter, eg. \`.scrollbar-none\`.`)}for(let[f,m]of c)e.theme.prefix&&Q(m,w=>{if(w.kind==="rule"){let k=Bt(w.selector);vt(k,h=>{h.kind==="selector"&&h.value[0]==="."&&(h.value=`.${e.theme.prefix}\\:${h.value.slice(1)}`)}),w.selector=wt(k)}}),e.utilities.static(f,w=>{let k=structuredClone(m);return vo(k,f,w.raw),t.current|=Ut(k,e),k})},matchUtilities(l,i){let c=i!=null&&i.type?Array.isArray(i==null?void 0:i.type)?i.type:[i.type]:["any"];for(let[f,m]of Object.entries(l)){let w=function({negative:k}){return h=>{var E,j;if(((E=h.value)==null?void 0:E.kind)==="arbitrary"&&c.length>0&&!c.includes("any")&&(h.value.dataType&&!c.includes(h.value.dataType)||!h.value.dataType&&!re(h.value.value,c)))return;let b=c.includes("color"),v=null,S=!1;{let T=(i==null?void 0:i.values)??{};b&&(T=Object.assign({inherit:"inherit",transparent:"transparent",current:"currentcolor"},T)),h.value?h.value.kind==="arbitrary"?v=h.value.value:h.value.fraction&&T[h.value.fraction]?(v=T[h.value.fraction],S=!0):T[h.value.value]?v=T[h.value.value]:T.__BARE_VALUE__&&(v=T.__BARE_VALUE__(h.value)??null,S=(h.value.fraction!==null&&(v==null?void 0:v.includes("/")))??!1):v=T.DEFAULT??null}if(v===null)return;let y;{let T=(i==null?void 0:i.modifiers)??null;y=h.modifier?T==="any"||h.modifier.kind==="arbitrary"?h.modifier.value:T!=null&&T[h.modifier.value]?T[h.modifier.value]:b&&!Number.isNaN(Number(h.modifier.value))?`${h.modifier.value}%`:null:null}if(h.modifier&&y===null&&!S)return((j=h.value)==null?void 0:j.kind)==="arbitrary"?null:void 0;b&&y!==null&&(v=ue(v,y)),k&&(v=`calc(${v} * -1)`);let A=je(m(v,{modifier:y}));return vo(A,f,h.raw),t.current|=Ut(A,e),A}};if(!po.test(f))throw Error(`\`matchUtilities({ '${f}' : \u2026 })\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter, eg. \`scrollbar\`.`);i!=null&&i.supportsNegativeValues&&e.utilities.functional(`-${f}`,w({negative:!0}),{types:c}),e.utilities.functional(f,w({negative:!1}),{types:c}),e.utilities.suggest(f,()=>{let k=(i==null?void 0:i.values)??{},h=new Set(Object.keys(k));h.delete("__BARE_VALUE__"),h.delete("__CSS_VALUES__"),h.has("DEFAULT")&&(h.delete("DEFAULT"),h.add(null));let b=(i==null?void 0:i.modifiers)??{},v=b==="any"?[]:Object.keys(b);return[{supportsNegative:(i==null?void 0:i.supportsNegativeValues)??!1,values:Array.from(h),modifiers:v}]})}},addComponents(l,i){this.addUtilities(l,i)},matchComponents(l,i){this.matchUtilities(l,i)},theme:Xr(e,()=>o.theme??{},l=>l),prefix(l){return l},config(l,i){let c=o;if(!l)return c;let f=Jr(l);for(let m=0;m<f.length;++m){let w=f[m];if(c[w]===void 0)return i;c=c[w]}return c??i}};return s.addComponents=s.addComponents.bind(s),s.matchComponents=s.matchComponents.bind(s),s}function je(e){let r=[];e=Array.isArray(e)?e:[e];let o=e.flatMap(t=>Object.entries(t));for(let[t,a]of o)if(a!=null&&a!==!1)if(typeof a!="object"){if(!t.startsWith("--")){if(a==="@slot"){r.push(se(t,[H("@slot")]));continue}t=t.replace(/([A-Z])/g,"-$1").toLowerCase()}r.push(d(t,String(a)))}else if(Array.isArray(a))for(let u of a)typeof u=="string"?r.push(d(t,u)):r.push(se(t,je(u)));else r.push(se(t,je(a)));return r}function go(e,r){return(typeof e=="string"?[e]:e).flatMap(o=>{if(o.trim().endsWith("}")){let t=o.replace("}","{@slot}}"),a=lt(t);return qr(a,r),a}else return se(o,r)})}function vo(e,r,o){Q(e,t=>{if(t.kind==="rule"){let a=Bt(t.selector);vt(a,u=>{u.kind==="selector"&&u.value===`.${r}`&&(u.value=`.${ct(o)}`)}),t.selector=wt(a)}})}function Fi(e,r,o){for(let t of Li(r))e.theme.addKeyframes(t)}function Li(e){let r=[];if("keyframes"in e.theme)for(let[o,t]of Object.entries(e.theme.keyframes))r.push(H("@keyframes",o,je(t)));return r}function Di(e){return{theme:{...Sn,colors:({theme:r})=>r("color",{}),extend:{fontSize:({theme:r})=>({...r("text",{})}),boxShadow:({theme:r})=>({...r("shadow",{})}),animation:({theme:r})=>({...r("animate",{})}),aspectRatio:({theme:r})=>({...r("aspect",{})}),borderRadius:({theme:r})=>({...r("radius",{})}),screens:({theme:r})=>({...r("breakpoint",{})}),letterSpacing:({theme:r})=>({...r("tracking",{})}),lineHeight:({theme:r})=>({...r("leading",{})}),transitionDuration:{DEFAULT:e.get(["--default-transition-duration"])??null},transitionTimingFunction:{DEFAULT:e.get(["--default-transition-timing-function"])??null},maxWidth:({theme:r})=>({...r("container",{})})}}}}var Mi={blocklist:[],future:{},prefix:"",important:!1,darkMode:null,theme:{},plugins:[],content:{files:[]}};function wo(e,r){let o={design:e,configs:[],plugins:[],content:{files:[]},theme:{},extend:{},result:structuredClone(Mi)};for(let a of r)Yt(o,a);for(let a of o.configs)"darkMode"in a&&a.darkMode!==void 0&&(o.result.darkMode=a.darkMode??null),"prefix"in a&&a.prefix!==void 0&&(o.result.prefix=a.prefix??""),"blocklist"in a&&a.blocklist!==void 0&&(o.result.blocklist=a.blocklist??[]),"important"in a&&a.important!==void 0&&(o.result.important=a.important??!1);let t=Ri(o);return{resolvedConfig:{...o.result,content:o.content,theme:o.theme,plugins:o.plugins},replacedThemeKeys:t}}function Ki(e,r){if(Array.isArray(e)&&Qe(e[0]))return e.concat(r);if(Array.isArray(r)&&Qe(r[0])&&Qe(e))return[e,...r];if(Array.isArray(r))return r}function Yt(e,{config:r,base:o,path:t,reference:a,src:u}){let s=[];for(let c of r.plugins??[])"__isOptionsFunction"in c?s.push({...c(),reference:a,src:u}):"handler"in c?s.push({...c,reference:a,src:u}):s.push({handler:c,reference:a,src:u});if(Array.isArray(r.presets)&&r.presets.length===0)throw Error("Error in the config file/plugin/preset. An empty preset (`preset: []`) is not currently supported.");for(let c of r.presets??[])Yt(e,{path:t,base:o,config:c,reference:a,src:u});for(let c of s)e.plugins.push(c),c.config&&Yt(e,{path:t,base:o,config:c.config,reference:!!c.reference,src:c.src??u});let l=r.content??[],i=Array.isArray(l)?l:l.files;for(let c of i)e.content.files.push(typeof c=="object"?c:{base:o,pattern:c});e.configs.push(r)}function Ri(e){var u;let r=new Set,o=Xr(e.design,()=>e.theme,a),t=Object.assign(o,{theme:o,colors:rr});function a(s){return typeof s=="function"?s(t)??null:s??null}for(let s of e.configs){let l=s.theme??{},i=l.extend??{};for(let c in l)c!=="extend"&&r.add(c);for(let c in Object.assign(e.theme,l),i)(u=e.extend)[c]??(u[c]=[]),e.extend[c].push(i[c])}for(let s in delete e.theme.extend,e.extend){let l=[e.theme[s],...e.extend[s]];e.theme[s]=()=>{let i=l.map(a);return qt({},i,Ki)}}for(let s in e.theme)e.theme[s]=a(e.theme[s]);if(e.theme.screens&&typeof e.theme.screens=="object")for(let s of Object.keys(e.theme.screens)){let l=e.theme.screens[s];l&&typeof l=="object"&&("raw"in l||"max"in l||"min"in l&&(e.theme.screens[s]=l.min))}return r}function Vi(e,r){let o=e.theme.container||{};if(typeof o!="object"||!o)return;let t=Ui(o,r);t.length!==0&&r.utilities.static("container",()=>structuredClone(t))}function Ui({center:e,padding:r,screens:o},t){let a=[],u=null;if(e&&a.push(d("margin-inline","auto")),(typeof r=="string"||typeof r=="object"&&r&&"DEFAULT"in r)&&a.push(d("padding-inline",typeof r=="string"?r:r.DEFAULT)),typeof o=="object"&&o){u=new Map;let s=Array.from(t.theme.namespace("--breakpoint").entries());if(s.sort((l,i)=>dt(l[1],i[1],"asc")),s.length>0){let[l]=s[0];a.push(H("@media",`(width >= --theme(--breakpoint-${l}))`,[d("max-width","none")]))}for(let[l,i]of Object.entries(o)){if(typeof i=="object")if("min"in i)i=i.min;else continue;u.set(l,H("@media",`(width >= ${i})`,[d("max-width",i)]))}}if(typeof r=="object"&&r){let s=Object.entries(r).filter(([l])=>l!=="DEFAULT").map(([l,i])=>[l,t.theme.resolveValue(l,["--breakpoint"]),i]).filter(Boolean);s.sort((l,i)=>dt(l[1],i[1],"asc"));for(let[l,,i]of s)if(u&&u.has(l))u.get(l).nodes.push(d("padding-inline",i));else{if(u)continue;a.push(H("@media",`(width >= theme(--breakpoint-${l}))`,[d("padding-inline",i)]))}}if(u)for(let[,s]of u)a.push(s);return a}function Wi({addVariant:e,config:r}){let o=r("darkMode",null),[t,a=".dark"]=Array.isArray(o)?o:[o];if(t==="variant"){let u;if(Array.isArray(a)||typeof a=="function"?u=a:typeof a=="string"&&(u=[a]),Array.isArray(u))for(let s of u)s===".dark"?(t=!1,console.warn('When using `variant` for `darkMode`, you must provide a selector.\nExample: `darkMode: ["variant", ".your-selector &"]`')):s.includes("&")||(t=!1,console.warn('When using `variant` for `darkMode`, your selector must contain `&`.\nExample `darkMode: ["variant", ".your-selector &"]`'));a=u}t===null||(t==="selector"?e("dark",`&:where(${a}, ${a} *)`):t==="media"?e("dark","@media (prefers-color-scheme: dark)"):t==="variant"?e("dark",a):t==="class"&&e("dark",`&:is(${a} *)`))}function qi(e){for(let[r,o]of[["t","top"],["tr","top right"],["r","right"],["br","bottom right"],["b","bottom"],["bl","bottom left"],["l","left"],["tl","top left"]])e.utilities.static(`bg-gradient-to-${r}`,()=>[d("--tw-gradient-position",`to ${o} in oklab`),d("background-image","linear-gradient(var(--tw-gradient-stops))")]);e.utilities.static("bg-left-top",()=>[d("background-position","left top")]),e.utilities.static("bg-right-top",()=>[d("background-position","right top")]),e.utilities.static("bg-left-bottom",()=>[d("background-position","left bottom")]),e.utilities.static("bg-right-bottom",()=>[d("background-position","right bottom")]),e.utilities.static("object-left-top",()=>[d("object-position","left top")]),e.utilities.static("object-right-top",()=>[d("object-position","right top")]),e.utilities.static("object-left-bottom",()=>[d("object-position","left bottom")]),e.utilities.static("object-right-bottom",()=>[d("object-position","right bottom")]),e.utilities.functional("max-w-screen",r=>{if(!r.value||r.value.kind==="arbitrary")return;let o=e.theme.resolve(r.value.value,["--breakpoint"]);if(o)return[d("max-width",o)]}),e.utilities.static("overflow-ellipsis",()=>[d("text-overflow","ellipsis")]),e.utilities.static("decoration-slice",()=>[d("-webkit-box-decoration-break","slice"),d("box-decoration-break","slice")]),e.utilities.static("decoration-clone",()=>[d("-webkit-box-decoration-break","clone"),d("box-decoration-break","clone")]),e.utilities.functional("flex-shrink",r=>{if(!r.modifier){if(!r.value)return[d("flex-shrink","1")];if(r.value.kind==="arbitrary"||D(r.value.value))return[d("flex-shrink",r.value.value)]}}),e.utilities.functional("flex-grow",r=>{if(!r.modifier){if(!r.value)return[d("flex-grow","1")];if(r.value.kind==="arbitrary"||D(r.value.value))return[d("flex-grow",r.value.value)]}}),e.utilities.static("order-none",()=>[d("order","0")])}function Bi(e,r){var u;let o=e.theme.screens||{},t=((u=r.variants.get("min"))==null?void 0:u.order)??0,a=[];for(let[s,l]of Object.entries(o)){let i=function(k){r.variants.static(s,h=>{h.nodes=[H("@media",w,h.nodes)]},{order:k})},c=r.variants.get(s),f=r.theme.resolveValue(s,["--breakpoint"]);if(c&&f&&!r.theme.hasDefault(`--breakpoint-${s}`))continue;let m=!0;typeof l=="string"&&(m=!1);let w=Yi(l);m?a.push(i):i(t)}if(a.length!==0){for(let[,s]of r.variants.variants)s.order>t&&(s.order+=a.length);r.variants.compareFns=new Map(Array.from(r.variants.compareFns).map(([s,l])=>(s>t&&(s+=a.length),[s,l])));for(let[s,l]of a.entries())l(t+s+1)}}function Yi(e){return(Array.isArray(e)?e:[e]).map(r=>typeof r=="string"?{min:r}:r&&typeof r=="object"?r:null).map(r=>{if(r===null)return null;if("raw"in r)return r.raw;let o="";return r.max!==void 0&&(o+=`${r.max} >= `),o+="width",r.min!==void 0&&(o+=` >= ${r.min}`),`(${o})`}).filter(Boolean).join(", ")}function Qi(e,r){let o=e.theme.aria||{},t=e.theme.supports||{},a=e.theme.data||{};if(Object.keys(o).length>0){let u=r.variants.get("aria"),s=u==null?void 0:u.applyFn,l=u==null?void 0:u.compounds;r.variants.functional("aria",(i,c)=>{let f=c.value;return f&&f.kind==="named"&&f.value in o?s==null?void 0:s(i,{...c,value:{kind:"arbitrary",value:o[f.value]}}):s==null?void 0:s(i,c)},{compounds:l})}if(Object.keys(t).length>0){let u=r.variants.get("supports"),s=u==null?void 0:u.applyFn,l=u==null?void 0:u.compounds;r.variants.functional("supports",(i,c)=>{let f=c.value;return f&&f.kind==="named"&&f.value in t?s==null?void 0:s(i,{...c,value:{kind:"arbitrary",value:t[f.value]}}):s==null?void 0:s(i,c)},{compounds:l})}if(Object.keys(a).length>0){let u=r.variants.get("data"),s=u==null?void 0:u.applyFn,l=u==null?void 0:u.compounds;r.variants.functional("data",(i,c)=>{let f=c.value;return f&&f.kind==="named"&&f.value in a?s==null?void 0:s(i,{...c,value:{kind:"arbitrary",value:a[f.value]}}):s==null?void 0:s(i,c)},{compounds:l})}}var Gi=/^[a-z]+$/;async function Hi({designSystem:e,base:r,ast:o,loadModule:t,sources:a}){let u=0,s=[],l=[];Q(o,(m,{parent:w,replaceWith:k,context:h})=>{if(m.kind==="at-rule"){if(m.name==="@plugin"){if(w!==null)throw Error("`@plugin` cannot be nested.");let b=m.params.slice(1,-1);if(b.length===0)throw Error("`@plugin` must have a path.");let v={};for(let S of m.nodes??[]){if(S.kind!=="declaration")throw Error(`Unexpected \`@plugin\` option:

${Le([S])}

\`@plugin\` options must be a flat list of declarations.`);if(S.value===void 0)continue;let y=S.value,A=W(y,",").map(E=>{if(E=E.trim(),E==="null")return null;if(E==="true")return!0;if(E==="false")return!1;if(Number.isNaN(Number(E))){if(E[0]==='"'&&E[E.length-1]==='"'||E[0]==="'"&&E[E.length-1]==="'")return E.slice(1,-1);if(E[0]==="{"&&E[E.length-1]==="}")throw Error(`Unexpected \`@plugin\` option: Value of declaration \`${Le([S]).trim()}\` is not supported.

Using an object as a plugin option is currently only supported in JavaScript configuration files.`)}else return Number(E);return E});v[S.property]=A.length===1?A[0]:A}s.push([{id:b,base:h.base,reference:!!h.reference,src:m.src},Object.keys(v).length>0?v:null]),k([]),u|=4;return}if(m.name==="@config"){if(m.nodes.length>0)throw Error("`@config` cannot have a body.");if(w!==null)throw Error("`@config` cannot be nested.");l.push({id:m.params.slice(1,-1),base:h.base,reference:!!h.reference,src:m.src}),k([]),u|=4;return}}}),qi(e);let i=e.resolveThemeValue;if(e.resolveThemeValue=function(m,w){return m.startsWith("--")?i(m,w):(u|=bo({designSystem:e,base:r,ast:o,sources:a,configs:[],pluginDetails:[]}),e.resolveThemeValue(m,w))},!s.length&&!l.length)return 0;let[c,f]=await Promise.all([Promise.all(l.map(async({id:m,base:w,reference:k,src:h})=>{let b=await t(m,w,"config");return{path:m,base:b.base,config:b.module,reference:k,src:h}})),Promise.all(s.map(async([{id:m,base:w,reference:k,src:h},b])=>{let v=await t(m,w,"plugin");return{path:m,base:v.base,plugin:v.module,options:b,reference:k,src:h}}))]);return u|=bo({designSystem:e,base:r,ast:o,sources:a,configs:c,pluginDetails:f}),u}function bo({designSystem:e,base:r,ast:o,sources:t,configs:a,pluginDetails:u}){let s=0,l=[...u.map(h=>{if(!h.options)return{config:{plugins:[h.plugin]},base:h.base,reference:h.reference,src:h.src};if("__isOptionsFunction"in h.plugin)return{config:{plugins:[h.plugin(h.options)]},base:h.base,reference:h.reference,src:h.src};throw Error(`The plugin "${h.path}" does not accept options`)}),...a],{resolvedConfig:i}=wo(e,[{config:Di(e.theme),base:r,reference:!0,src:void 0},...l,{config:{plugins:[Wi]},base:r,reference:!0,src:void 0}]),{resolvedConfig:c,replacedThemeKeys:f}=wo(e,l),m={designSystem:e,ast:o,resolvedConfig:i,featuresRef:{set current(h){s|=h}}},w=mo({...m,referenceMode:!1,src:void 0}),k=e.resolveThemeValue;e.resolveThemeValue=function(h,b){if(h[0]==="-"&&h[1]==="-")return k(h,b);let v=w.theme(h,void 0);if(Array.isArray(v)&&v.length===2)return v[0];if(Array.isArray(v))return v.join(", ");if(typeof v=="string")return v};for(let{handler:h,reference:b,src:v}of i.plugins){let S=mo({...m,referenceMode:b??!1,src:v});h(S)}if(ki(e,c,f),Fi(e,c,f),Qi(c,e),Bi(c,e),Vi(c,e),!e.theme.prefix&&i.prefix){if(i.prefix.endsWith("-")&&(i.prefix=i.prefix.slice(0,-1),console.warn(`The prefix "${i.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only and is written as a variant before all utilities. We have fixed up the prefix for you. Remove the trailing \`-\` to silence this warning.`)),!Gi.test(i.prefix))throw Error(`The prefix "${i.prefix}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);e.theme.prefix=i.prefix}if(!e.important&&i.important===!0&&(e.important=!0),typeof i.important=="string"){let h=i.important;Q(o,(b,{replaceWith:v,parent:S})=>{if(b.kind==="at-rule"&&!(b.name!=="@tailwind"||b.params!=="utilities"))return(S==null?void 0:S.kind)==="rule"&&S.selector===h||v(Z(h,[b])),2})}for(let h of i.blocklist)e.invalidCandidates.add(h);for(let h of i.content.files){if("raw"in h)throw Error(`Error in the config file/plugin/preset. The \`content\` key contains a \`raw\` entry:

${JSON.stringify(h,null,2)}

This feature is not currently supported.`);let b=!1;h.pattern[0]=="!"&&(b=!0,h.pattern=h.pattern.slice(1)),t.push({...h,negated:b})}return s}function Zi(e){let r=[0];for(let a=0;a<e.length;a++)e.charCodeAt(a)===10&&r.push(a+1);function o(a){let u=0,s=r.length;for(;s>0;){let i=(s|0)>>1,c=u+i;r[c]<=a?(u=c+1,s=s-i-1):s=i}--u;let l=a-r[u];return{line:u+1,column:l}}function t({line:a,column:u}){--a,a=Math.min(Math.max(a,0),r.length-1);let s=r[a],l=r[a+1]??s;return Math.min(Math.max(s+u,0),l)}return{find:o,findOffset:t}}function Ji({ast:e}){let r=new ne(a=>Zi(a.code)),o=new ne(a=>({url:a.file,content:a.code,ignore:!1})),t={file:null,sources:[],mappings:[]};Q(e,a=>{if(!a.src||!a.dst)return;let u=o.get(a.src[0]);if(!u.content)return;let s=r.get(a.src[0]),l=r.get(a.dst[0]),i=u.content.slice(a.src[1],a.src[2]),c=0;for(let w of i.split(`
`)){if(w.trim()!==""){let k=s.find(a.src[1]+c),h=l.find(a.dst[1]);t.mappings.push({name:null,originalPosition:{source:u,...k},generatedPosition:h})}c+=w.length,c+=1}let f=s.find(a.src[2]),m=l.find(a.dst[2]);t.mappings.push({name:null,originalPosition:{source:u,...f},generatedPosition:m})});for(let a of r.keys())t.sources.push(o.get(a));return t.mappings.sort((a,u)=>{var s,l,i,c;return a.generatedPosition.line-u.generatedPosition.line||a.generatedPosition.column-u.generatedPosition.column||(((s=a.originalPosition)==null?void 0:s.line)??0)-(((l=u.originalPosition)==null?void 0:l.line)??0)||(((i=a.originalPosition)==null?void 0:i.column)??0)-(((c=u.originalPosition)==null?void 0:c.column)??0)}),t}var ko=/^(-?\d+)\.\.(-?\d+)(?:\.\.(-?\d+))?$/;function Qt(e){let r=e.indexOf("{");if(r===-1)return[e];let o=[],t=e.slice(0,r),a=e.slice(r),u=0,s=a.lastIndexOf("}");for(let m=0;m<a.length;m++){let w=a[m];if(w==="{")u++;else if(w==="}"&&(u--,u===0)){s=m;break}}if(s===-1)throw Error(`The pattern \`${e}\` is not balanced.`);let l=a.slice(1,s),i=a.slice(s+1),c;c=Xi(l)?ea(l):W(l,","),c=c.flatMap(m=>Qt(m));let f=Qt(i);for(let m of f)for(let w of c)o.push(t+w+m);return o}function Xi(e){return ko.test(e)}function ea(e){let r=e.match(ko);if(!r)return[e];let[,o,t,a]=r,u=a?parseInt(a,10):void 0,s=[];if(/^-?\d+$/.test(o)&&/^-?\d+$/.test(t)){let l=parseInt(o,10),i=parseInt(t,10);if(u===void 0&&(u=l<=i?1:-1),u===0)throw Error("Step cannot be zero in sequence expansion.");let c=l<i;c&&u<0&&(u=-u),!c&&u>0&&(u=-u);for(let f=l;c?f<=i:f>=i;f+=u)s.push(f.toString())}return s}var ta=/^[a-z]+$/,ra=(e=>(e[e.None=0]="None",e[e.AtProperty=1]="AtProperty",e[e.ColorMix=2]="ColorMix",e[e.All=3]="All",e))(ra||{});function oa(){throw Error("No `loadModule` function provided to `compile`")}function na(){throw Error("No `loadStylesheet` function provided to `compile`")}function ia(e){let r=0,o=null;for(let t of W(e," "))t==="reference"?r|=2:t==="inline"?r|=1:t==="default"?r|=4:t==="static"?r|=8:t.startsWith("prefix(")&&t.endsWith(")")&&(o=t.slice(7,-1));return[r,o]}var aa=(e=>(e[e.None=0]="None",e[e.AtApply=1]="AtApply",e[e.AtImport=2]="AtImport",e[e.JsPluginCompat=4]="JsPluginCompat",e[e.ThemeFunction=8]="ThemeFunction",e[e.Utilities=16]="Utilities",e[e.Variants=32]="Variants",e))(aa||{});async function yo(e,{base:r="",from:o,loadModule:t=oa,loadStylesheet:a=na}={}){let u=0;e=[Fe({base:r},e)],u|=await Hr(e,r,a,0,o!==void 0);let s=null,l=new jn,i=[],c=[],f=null,m=null,w=[],k=[],h=[],b=[],v=null;Q(e,(y,{parent:A,replaceWith:E,context:j})=>{if(y.kind==="at-rule"){if(y.name==="@tailwind"&&(y.params==="utilities"||y.params.startsWith("utilities"))){if(m!==null){E([]);return}if(j.reference){E([]);return}let T=W(y.params," ");for(let C of T)if(C.startsWith("source(")){let n=C.slice(7,-1);if(n==="none"){v=n;continue}if(n[0]==='"'&&n[n.length-1]!=='"'||n[0]==="'"&&n[n.length-1]!=="'"||n[0]!=="'"&&n[0]!=='"')throw Error("`source(\u2026)` paths must be quoted.");v={base:j.sourceBase??j.base,pattern:n.slice(1,-1)}}m=y,u|=16}if(y.name==="@utility"){if(A!==null)throw Error("`@utility` cannot be nested.");if(y.nodes.length===0)throw Error(`\`@utility ${y.params}\` is empty. Utilities should include at least one property.`);let T=ei(y);if(T===null){if(!y.params.endsWith("-*")){if(y.params.endsWith("*"))throw Error(`\`@utility ${y.params}\` defines an invalid utility name. A functional utility must end in \`-*\`.`);if(y.params.includes("*"))throw Error(`\`@utility ${y.params}\` defines an invalid utility name. The dynamic portion marked by \`-*\` must appear once at the end.`)}throw Error(`\`@utility ${y.params}\` defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`)}c.push(T)}if(y.name==="@source"){if(y.nodes.length>0)throw Error("`@source` cannot have a body.");if(A!==null)throw Error("`@source` cannot be nested.");let T=!1,C=!1,n=y.params;if(n[0]==="n"&&n.startsWith("not ")&&(T=!0,n=n.slice(4)),n[0]==="i"&&n.startsWith("inline(")&&(C=!0,n=n.slice(7,-1)),n[0]==='"'&&n[n.length-1]!=='"'||n[0]==="'"&&n[n.length-1]!=="'"||n[0]!=="'"&&n[0]!=='"')throw Error("`@source` paths must be quoted.");let p=n.slice(1,-1);if(C){let g=T?b:h,$=W(p," ");for(let x of $)for(let O of Qt(x))g.push(O)}else k.push({base:j.base,pattern:p,negated:T});E([]);return}if(y.name==="@variant"&&(A===null?y.nodes.length===0?y.name="@custom-variant":(Q(y.nodes,T=>{if(T.kind==="at-rule"&&T.name==="@slot")return y.name="@custom-variant",2}),y.name==="@variant"&&w.push(y)):w.push(y)),y.name==="@custom-variant"){if(A!==null)throw Error("`@custom-variant` cannot be nested.");E([]);let[T,C]=W(y.params," ");if(!Ur.test(T))throw Error(`\`@custom-variant ${T}\` defines an invalid variant name. Variants should only contain alphanumeric, dashes, or underscore characters and start with a lowercase letter or number.`);if(y.nodes.length>0&&C)throw Error(`\`@custom-variant ${T}\` cannot have both a selector and a body.`);if(y.nodes.length===0){if(!C)throw Error(`\`@custom-variant ${T}\` has no selector or body.`);let n=W(C.slice(1,-1),",");if(n.length===0||n.some($=>$.trim()===""))throw Error(`\`@custom-variant ${T} (${n.join(",")})\` selector is invalid.`);let p=[],g=[];for(let $ of n)$=$.trim(),$[0]==="@"?p.push($):g.push($);i.push($=>{$.variants.static(T,x=>{let O=[];g.length>0&&O.push(Z(g.join(", "),x.nodes));for(let I of p)O.push(se(I,x.nodes));x.nodes=O},{compounds:Ye([...g,...p])})});return}else{i.push(n=>{n.variants.fromAst(T,y.nodes)});return}}if(y.name==="@media"){let T=W(y.params," "),C=[];for(let n of T)if(n.startsWith("source(")){let p=n.slice(7,-1);Q(y.nodes,(g,{replaceWith:$})=>{if(g.kind==="at-rule"&&g.name==="@tailwind"&&g.params==="utilities")return g.params+=` source(${p})`,$([Fe({sourceBase:j.base},[g])]),2})}else if(n.startsWith("theme(")){let p=n.slice(6,-1),g=p.includes("reference");Q(y.nodes,$=>{if($.kind!=="at-rule"){if(g)throw Error('Files imported with `@import "\u2026" theme(reference)` must only contain `@theme` blocks.\nUse `@reference "\u2026";` instead.');return 0}if($.name==="@theme")return $.params+=" "+p,1})}else if(n.startsWith("prefix(")){let p=n.slice(7,-1);Q(y.nodes,g=>{if(g.kind==="at-rule"&&g.name==="@theme")return g.params+=` prefix(${p})`,1})}else n==="important"?s=!0:n==="reference"?y.nodes=[Fe({reference:!0},y.nodes)]:C.push(n);C.length>0?y.params=C.join(" "):T.length>0&&E(y.nodes)}if(y.name==="@theme"){let[T,C]=ia(y.params);if(j.reference&&(T|=2),C){if(!ta.test(C))throw Error(`The prefix "${C}" is invalid. Prefixes must be lowercase ASCII letters (a-z) only.`);l.prefix=C}return Q(y.nodes,n=>{if(n.kind==="at-rule"&&n.name==="@keyframes")return l.addKeyframes(n),1;if(n.kind==="comment")return;if(n.kind==="declaration"&&n.property.startsWith("--")){l.add(ut(n.property),n.value??"",T,n.src);return}let p=Le([H(y.name,y.params,[n])]).split(`
`).map((g,$,x)=>`${$===0||$>=x.length-2?" ":">"} ${g}`).join(`
`);throw Error(`\`@theme\` blocks must only contain custom properties or \`@keyframes\`.

${p}`)}),f?E([]):(f=Z(":root, :host",[]),f.src=y.src,E([f])),1}}});let S=pi(l);if(s&&(S.important=s),b.length>0)for(let y of b)S.invalidCandidates.add(y);u|=await Hi({designSystem:S,base:r,ast:e,loadModule:t,sources:k});for(let y of i)y(S);for(let y of c)y(S);if(f){let y=[];for(let[E,j]of S.theme.entries()){if(j.options&2)continue;let T=d(ct(E),j.value);T.src=j.src,y.push(T)}let A=S.theme.getKeyframes();for(let E of A)e.push(Fe({theme:!0},[B([E])]));f.nodes=[Fe({theme:!0},y)]}if(w.length>0){for(let y of w){let A=Z("&",y.nodes),E=y.params,j=S.parseVariant(E);if(j===null)throw Error(`Cannot use \`@variant\` with unknown variant: ${E}`);if(gt(A,j,S.variants)===null)throw Error(`Cannot use \`@variant\` with variant: ${E}`);Object.assign(y,A)}u|=32}if(u|=Vt(e,S),u|=Ut(e,S),m){let y=m;y.kind="context",y.context={}}return Q(e,(y,{replaceWith:A})=>{if(y.kind==="at-rule")return y.name==="@utility"&&A([]),1}),{designSystem:S,ast:e,sources:k,root:v,utilitiesNode:m,features:u,inlineCandidates:h}}async function la(e,r={}){let{designSystem:o,ast:t,sources:a,root:u,utilitiesNode:s,features:l,inlineCandidates:i}=await yo(e,r);t.unshift(_r(`! tailwindcss v${Tn} | MIT License | https://tailwindcss.com `));function c(h){o.invalidCandidates.add(h)}let f=new Set,m=null,w=0,k=!1;for(let h of i)o.invalidCandidates.has(h)||(f.add(h),k=!0);return{sources:a,root:u,features:l,build(h){if(l===0)return e;if(!s)return m??(m=qe(t,o,r.polyfills)),m;let b=k,v=!1;k=!1;let S=f.size;for(let A of h)if(!o.invalidCandidates.has(A))if(A[0]==="-"&&A[1]==="-"){let E=o.theme.markUsedVariable(A);b||(b=E),v||(v=E)}else f.add(A),b||(b=f.size!==S);if(!b)return m??(m=qe(t,o,r.polyfills)),m;let y=mt(f,o,{onInvalidCandidate:c}).astNodes;return r.from&&Q(y,A=>{A.src??(A.src=s.src)}),!v&&w===y.length?(m??(m=qe(t,o,r.polyfills)),m):(w=y.length,s.nodes=y,m=qe(t,o,r.polyfills),m)}}}async function sa(e,r={}){let o=lt(e,{from:r.from}),t=await la(o,r),a=o,u=e;return{...t,build(s){let l=t.build(s);return l===a||(u=Le(l,!!r.from),a=l),u},buildSourceMap(){return Ji({ast:a})}}}async function ca(e,r={}){return(await yo(lt(e),r)).designSystem}var ua=`@theme default {
  --font-sans:
    ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
  --font-mono:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;

  --color-red-50: oklch(97.1% 0.013 17.38);
  --color-red-100: oklch(93.6% 0.032 17.717);
  --color-red-200: oklch(88.5% 0.062 18.334);
  --color-red-300: oklch(80.8% 0.114 19.571);
  --color-red-400: oklch(70.4% 0.191 22.216);
  --color-red-500: oklch(63.7% 0.237 25.331);
  --color-red-600: oklch(57.7% 0.245 27.325);
  --color-red-700: oklch(50.5% 0.213 27.518);
  --color-red-800: oklch(44.4% 0.177 26.899);
  --color-red-900: oklch(39.6% 0.141 25.723);
  --color-red-950: oklch(25.8% 0.092 26.042);

  --color-orange-50: oklch(98% 0.016 73.684);
  --color-orange-100: oklch(95.4% 0.038 75.164);
  --color-orange-200: oklch(90.1% 0.076 70.697);
  --color-orange-300: oklch(83.7% 0.128 66.29);
  --color-orange-400: oklch(75% 0.183 55.934);
  --color-orange-500: oklch(70.5% 0.213 47.604);
  --color-orange-600: oklch(64.6% 0.222 41.116);
  --color-orange-700: oklch(55.3% 0.195 38.402);
  --color-orange-800: oklch(47% 0.157 37.304);
  --color-orange-900: oklch(40.8% 0.123 38.172);
  --color-orange-950: oklch(26.6% 0.079 36.259);

  --color-amber-50: oklch(98.7% 0.022 95.277);
  --color-amber-100: oklch(96.2% 0.059 95.617);
  --color-amber-200: oklch(92.4% 0.12 95.746);
  --color-amber-300: oklch(87.9% 0.169 91.605);
  --color-amber-400: oklch(82.8% 0.189 84.429);
  --color-amber-500: oklch(76.9% 0.188 70.08);
  --color-amber-600: oklch(66.6% 0.179 58.318);
  --color-amber-700: oklch(55.5% 0.163 48.998);
  --color-amber-800: oklch(47.3% 0.137 46.201);
  --color-amber-900: oklch(41.4% 0.112 45.904);
  --color-amber-950: oklch(27.9% 0.077 45.635);

  --color-yellow-50: oklch(98.7% 0.026 102.212);
  --color-yellow-100: oklch(97.3% 0.071 103.193);
  --color-yellow-200: oklch(94.5% 0.129 101.54);
  --color-yellow-300: oklch(90.5% 0.182 98.111);
  --color-yellow-400: oklch(85.2% 0.199 91.936);
  --color-yellow-500: oklch(79.5% 0.184 86.047);
  --color-yellow-600: oklch(68.1% 0.162 75.834);
  --color-yellow-700: oklch(55.4% 0.135 66.442);
  --color-yellow-800: oklch(47.6% 0.114 61.907);
  --color-yellow-900: oklch(42.1% 0.095 57.708);
  --color-yellow-950: oklch(28.6% 0.066 53.813);

  --color-lime-50: oklch(98.6% 0.031 120.757);
  --color-lime-100: oklch(96.7% 0.067 122.328);
  --color-lime-200: oklch(93.8% 0.127 124.321);
  --color-lime-300: oklch(89.7% 0.196 126.665);
  --color-lime-400: oklch(84.1% 0.238 128.85);
  --color-lime-500: oklch(76.8% 0.233 130.85);
  --color-lime-600: oklch(64.8% 0.2 131.684);
  --color-lime-700: oklch(53.2% 0.157 131.589);
  --color-lime-800: oklch(45.3% 0.124 130.933);
  --color-lime-900: oklch(40.5% 0.101 131.063);
  --color-lime-950: oklch(27.4% 0.072 132.109);

  --color-green-50: oklch(98.2% 0.018 155.826);
  --color-green-100: oklch(96.2% 0.044 156.743);
  --color-green-200: oklch(92.5% 0.084 155.995);
  --color-green-300: oklch(87.1% 0.15 154.449);
  --color-green-400: oklch(79.2% 0.209 151.711);
  --color-green-500: oklch(72.3% 0.219 149.579);
  --color-green-600: oklch(62.7% 0.194 149.214);
  --color-green-700: oklch(52.7% 0.154 150.069);
  --color-green-800: oklch(44.8% 0.119 151.328);
  --color-green-900: oklch(39.3% 0.095 152.535);
  --color-green-950: oklch(26.6% 0.065 152.934);

  --color-emerald-50: oklch(97.9% 0.021 166.113);
  --color-emerald-100: oklch(95% 0.052 163.051);
  --color-emerald-200: oklch(90.5% 0.093 164.15);
  --color-emerald-300: oklch(84.5% 0.143 164.978);
  --color-emerald-400: oklch(76.5% 0.177 163.223);
  --color-emerald-500: oklch(69.6% 0.17 162.48);
  --color-emerald-600: oklch(59.6% 0.145 163.225);
  --color-emerald-700: oklch(50.8% 0.118 165.612);
  --color-emerald-800: oklch(43.2% 0.095 166.913);
  --color-emerald-900: oklch(37.8% 0.077 168.94);
  --color-emerald-950: oklch(26.2% 0.051 172.552);

  --color-teal-50: oklch(98.4% 0.014 180.72);
  --color-teal-100: oklch(95.3% 0.051 180.801);
  --color-teal-200: oklch(91% 0.096 180.426);
  --color-teal-300: oklch(85.5% 0.138 181.071);
  --color-teal-400: oklch(77.7% 0.152 181.912);
  --color-teal-500: oklch(70.4% 0.14 182.503);
  --color-teal-600: oklch(60% 0.118 184.704);
  --color-teal-700: oklch(51.1% 0.096 186.391);
  --color-teal-800: oklch(43.7% 0.078 188.216);
  --color-teal-900: oklch(38.6% 0.063 188.416);
  --color-teal-950: oklch(27.7% 0.046 192.524);

  --color-cyan-50: oklch(98.4% 0.019 200.873);
  --color-cyan-100: oklch(95.6% 0.045 203.388);
  --color-cyan-200: oklch(91.7% 0.08 205.041);
  --color-cyan-300: oklch(86.5% 0.127 207.078);
  --color-cyan-400: oklch(78.9% 0.154 211.53);
  --color-cyan-500: oklch(71.5% 0.143 215.221);
  --color-cyan-600: oklch(60.9% 0.126 221.723);
  --color-cyan-700: oklch(52% 0.105 223.128);
  --color-cyan-800: oklch(45% 0.085 224.283);
  --color-cyan-900: oklch(39.8% 0.07 227.392);
  --color-cyan-950: oklch(30.2% 0.056 229.695);

  --color-sky-50: oklch(97.7% 0.013 236.62);
  --color-sky-100: oklch(95.1% 0.026 236.824);
  --color-sky-200: oklch(90.1% 0.058 230.902);
  --color-sky-300: oklch(82.8% 0.111 230.318);
  --color-sky-400: oklch(74.6% 0.16 232.661);
  --color-sky-500: oklch(68.5% 0.169 237.323);
  --color-sky-600: oklch(58.8% 0.158 241.966);
  --color-sky-700: oklch(50% 0.134 242.749);
  --color-sky-800: oklch(44.3% 0.11 240.79);
  --color-sky-900: oklch(39.1% 0.09 240.876);
  --color-sky-950: oklch(29.3% 0.066 243.157);

  --color-blue-50: oklch(97% 0.014 254.604);
  --color-blue-100: oklch(93.2% 0.032 255.585);
  --color-blue-200: oklch(88.2% 0.059 254.128);
  --color-blue-300: oklch(80.9% 0.105 251.813);
  --color-blue-400: oklch(70.7% 0.165 254.624);
  --color-blue-500: oklch(62.3% 0.214 259.815);
  --color-blue-600: oklch(54.6% 0.245 262.881);
  --color-blue-700: oklch(48.8% 0.243 264.376);
  --color-blue-800: oklch(42.4% 0.199 265.638);
  --color-blue-900: oklch(37.9% 0.146 265.522);
  --color-blue-950: oklch(28.2% 0.091 267.935);

  --color-indigo-50: oklch(96.2% 0.018 272.314);
  --color-indigo-100: oklch(93% 0.034 272.788);
  --color-indigo-200: oklch(87% 0.065 274.039);
  --color-indigo-300: oklch(78.5% 0.115 274.713);
  --color-indigo-400: oklch(67.3% 0.182 276.935);
  --color-indigo-500: oklch(58.5% 0.233 277.117);
  --color-indigo-600: oklch(51.1% 0.262 276.966);
  --color-indigo-700: oklch(45.7% 0.24 277.023);
  --color-indigo-800: oklch(39.8% 0.195 277.366);
  --color-indigo-900: oklch(35.9% 0.144 278.697);
  --color-indigo-950: oklch(25.7% 0.09 281.288);

  --color-violet-50: oklch(96.9% 0.016 293.756);
  --color-violet-100: oklch(94.3% 0.029 294.588);
  --color-violet-200: oklch(89.4% 0.057 293.283);
  --color-violet-300: oklch(81.1% 0.111 293.571);
  --color-violet-400: oklch(70.2% 0.183 293.541);
  --color-violet-500: oklch(60.6% 0.25 292.717);
  --color-violet-600: oklch(54.1% 0.281 293.009);
  --color-violet-700: oklch(49.1% 0.27 292.581);
  --color-violet-800: oklch(43.2% 0.232 292.759);
  --color-violet-900: oklch(38% 0.189 293.745);
  --color-violet-950: oklch(28.3% 0.141 291.089);

  --color-purple-50: oklch(97.7% 0.014 308.299);
  --color-purple-100: oklch(94.6% 0.033 307.174);
  --color-purple-200: oklch(90.2% 0.063 306.703);
  --color-purple-300: oklch(82.7% 0.119 306.383);
  --color-purple-400: oklch(71.4% 0.203 305.504);
  --color-purple-500: oklch(62.7% 0.265 303.9);
  --color-purple-600: oklch(55.8% 0.288 302.321);
  --color-purple-700: oklch(49.6% 0.265 301.924);
  --color-purple-800: oklch(43.8% 0.218 303.724);
  --color-purple-900: oklch(38.1% 0.176 304.987);
  --color-purple-950: oklch(29.1% 0.149 302.717);

  --color-fuchsia-50: oklch(97.7% 0.017 320.058);
  --color-fuchsia-100: oklch(95.2% 0.037 318.852);
  --color-fuchsia-200: oklch(90.3% 0.076 319.62);
  --color-fuchsia-300: oklch(83.3% 0.145 321.434);
  --color-fuchsia-400: oklch(74% 0.238 322.16);
  --color-fuchsia-500: oklch(66.7% 0.295 322.15);
  --color-fuchsia-600: oklch(59.1% 0.293 322.896);
  --color-fuchsia-700: oklch(51.8% 0.253 323.949);
  --color-fuchsia-800: oklch(45.2% 0.211 324.591);
  --color-fuchsia-900: oklch(40.1% 0.17 325.612);
  --color-fuchsia-950: oklch(29.3% 0.136 325.661);

  --color-pink-50: oklch(97.1% 0.014 343.198);
  --color-pink-100: oklch(94.8% 0.028 342.258);
  --color-pink-200: oklch(89.9% 0.061 343.231);
  --color-pink-300: oklch(82.3% 0.12 346.018);
  --color-pink-400: oklch(71.8% 0.202 349.761);
  --color-pink-500: oklch(65.6% 0.241 354.308);
  --color-pink-600: oklch(59.2% 0.249 0.584);
  --color-pink-700: oklch(52.5% 0.223 3.958);
  --color-pink-800: oklch(45.9% 0.187 3.815);
  --color-pink-900: oklch(40.8% 0.153 2.432);
  --color-pink-950: oklch(28.4% 0.109 3.907);

  --color-rose-50: oklch(96.9% 0.015 12.422);
  --color-rose-100: oklch(94.1% 0.03 12.58);
  --color-rose-200: oklch(89.2% 0.058 10.001);
  --color-rose-300: oklch(81% 0.117 11.638);
  --color-rose-400: oklch(71.2% 0.194 13.428);
  --color-rose-500: oklch(64.5% 0.246 16.439);
  --color-rose-600: oklch(58.6% 0.253 17.585);
  --color-rose-700: oklch(51.4% 0.222 16.935);
  --color-rose-800: oklch(45.5% 0.188 13.697);
  --color-rose-900: oklch(41% 0.159 10.272);
  --color-rose-950: oklch(27.1% 0.105 12.094);

  --color-slate-50: oklch(98.4% 0.003 247.858);
  --color-slate-100: oklch(96.8% 0.007 247.896);
  --color-slate-200: oklch(92.9% 0.013 255.508);
  --color-slate-300: oklch(86.9% 0.022 252.894);
  --color-slate-400: oklch(70.4% 0.04 256.788);
  --color-slate-500: oklch(55.4% 0.046 257.417);
  --color-slate-600: oklch(44.6% 0.043 257.281);
  --color-slate-700: oklch(37.2% 0.044 257.287);
  --color-slate-800: oklch(27.9% 0.041 260.031);
  --color-slate-900: oklch(20.8% 0.042 265.755);
  --color-slate-950: oklch(12.9% 0.042 264.695);

  --color-gray-50: oklch(98.5% 0.002 247.839);
  --color-gray-100: oklch(96.7% 0.003 264.542);
  --color-gray-200: oklch(92.8% 0.006 264.531);
  --color-gray-300: oklch(87.2% 0.01 258.338);
  --color-gray-400: oklch(70.7% 0.022 261.325);
  --color-gray-500: oklch(55.1% 0.027 264.364);
  --color-gray-600: oklch(44.6% 0.03 256.802);
  --color-gray-700: oklch(37.3% 0.034 259.733);
  --color-gray-800: oklch(27.8% 0.033 256.848);
  --color-gray-900: oklch(21% 0.034 264.665);
  --color-gray-950: oklch(13% 0.028 261.692);

  --color-zinc-50: oklch(98.5% 0 0);
  --color-zinc-100: oklch(96.7% 0.001 286.375);
  --color-zinc-200: oklch(92% 0.004 286.32);
  --color-zinc-300: oklch(87.1% 0.006 286.286);
  --color-zinc-400: oklch(70.5% 0.015 286.067);
  --color-zinc-500: oklch(55.2% 0.016 285.938);
  --color-zinc-600: oklch(44.2% 0.017 285.786);
  --color-zinc-700: oklch(37% 0.013 285.805);
  --color-zinc-800: oklch(27.4% 0.006 286.033);
  --color-zinc-900: oklch(21% 0.006 285.885);
  --color-zinc-950: oklch(14.1% 0.005 285.823);

  --color-neutral-50: oklch(98.5% 0 0);
  --color-neutral-100: oklch(97% 0 0);
  --color-neutral-200: oklch(92.2% 0 0);
  --color-neutral-300: oklch(87% 0 0);
  --color-neutral-400: oklch(70.8% 0 0);
  --color-neutral-500: oklch(55.6% 0 0);
  --color-neutral-600: oklch(43.9% 0 0);
  --color-neutral-700: oklch(37.1% 0 0);
  --color-neutral-800: oklch(26.9% 0 0);
  --color-neutral-900: oklch(20.5% 0 0);
  --color-neutral-950: oklch(14.5% 0 0);

  --color-stone-50: oklch(98.5% 0.001 106.423);
  --color-stone-100: oklch(97% 0.001 106.424);
  --color-stone-200: oklch(92.3% 0.003 48.717);
  --color-stone-300: oklch(86.9% 0.005 56.366);
  --color-stone-400: oklch(70.9% 0.01 56.259);
  --color-stone-500: oklch(55.3% 0.013 58.071);
  --color-stone-600: oklch(44.4% 0.011 73.639);
  --color-stone-700: oklch(37.4% 0.01 67.558);
  --color-stone-800: oklch(26.8% 0.007 34.298);
  --color-stone-900: oklch(21.6% 0.006 56.043);
  --color-stone-950: oklch(14.7% 0.004 49.25);

  --color-black: #000;
  --color-white: #fff;

  --spacing: 0.25rem;

  --breakpoint-sm: 40rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
  --breakpoint-xl: 80rem;
  --breakpoint-2xl: 96rem;

  --container-3xs: 16rem;
  --container-2xs: 18rem;
  --container-xs: 20rem;
  --container-sm: 24rem;
  --container-md: 28rem;
  --container-lg: 32rem;
  --container-xl: 36rem;
  --container-2xl: 42rem;
  --container-3xl: 48rem;
  --container-4xl: 56rem;
  --container-5xl: 64rem;
  --container-6xl: 72rem;
  --container-7xl: 80rem;

  --text-xs: 0.75rem;
  --text-xs--line-height: calc(1 / 0.75);
  --text-sm: 0.875rem;
  --text-sm--line-height: calc(1.25 / 0.875);
  --text-base: 1rem;
  --text-base--line-height: calc(1.5 / 1);
  --text-lg: 1.125rem;
  --text-lg--line-height: calc(1.75 / 1.125);
  --text-xl: 1.25rem;
  --text-xl--line-height: calc(1.75 / 1.25);
  --text-2xl: 1.5rem;
  --text-2xl--line-height: calc(2 / 1.5);
  --text-3xl: 1.875rem;
  --text-3xl--line-height: calc(2.25 / 1.875);
  --text-4xl: 2.25rem;
  --text-4xl--line-height: calc(2.5 / 2.25);
  --text-5xl: 3rem;
  --text-5xl--line-height: 1;
  --text-6xl: 3.75rem;
  --text-6xl--line-height: 1;
  --text-7xl: 4.5rem;
  --text-7xl--line-height: 1;
  --text-8xl: 6rem;
  --text-8xl--line-height: 1;
  --text-9xl: 8rem;
  --text-9xl--line-height: 1;

  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;

  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  --radius-xs: 0.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;

  --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
  --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
  --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

  --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
  --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
  --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
  --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
  --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
  --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

  --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
  --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
  --text-shadow-sm:
    0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075);
  --text-shadow-md:
    0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1);
  --text-shadow-lg:
    0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1);

  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  --animate-spin: spin 1s linear infinite;
  --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --animate-bounce: bounce 1s infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  --blur-xs: 4px;
  --blur-sm: 8px;
  --blur-md: 12px;
  --blur-lg: 16px;
  --blur-xl: 24px;
  --blur-2xl: 40px;
  --blur-3xl: 64px;

  --perspective-dramatic: 100px;
  --perspective-near: 300px;
  --perspective-normal: 500px;
  --perspective-midrange: 800px;
  --perspective-distant: 1200px;

  --aspect-video: 16 / 9;

  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --default-font-family: --theme(--font-sans, initial);
  --default-font-feature-settings: --theme(--font-sans--font-feature-settings, initial);
  --default-font-variation-settings: --theme(--font-sans--font-variation-settings, initial);
  --default-mono-font-family: --theme(--font-mono, initial);
  --default-mono-font-feature-settings: --theme(--font-mono--font-feature-settings, initial);
  --default-mono-font-variation-settings: --theme(--font-mono--font-variation-settings, initial);
}

/* Deprecated */
@theme default inline reference {
  --blur: 8px;
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
  --radius: 0.25rem;
  --max-width-prose: 65ch;
}
`,da=`/*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

*,
::after,
::before,
::backdrop,
::file-selector-button {
  box-sizing: border-box; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 2 */
  border: 0 solid; /* 3 */
}

/*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  tab-size: 4; /* 3 */
  font-family: --theme(
    --default-font-family,
    ui-sans-serif,
    system-ui,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ); /* 4 */
  font-feature-settings: --theme(--default-font-feature-settings, normal); /* 5 */
  font-variation-settings: --theme(--default-font-variation-settings, normal); /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

/*
  Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}

/*
  Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
  1. Use the user's configured \`mono\` font-family by default.
  2. Use the user's configured \`mono\` font-feature-settings by default.
  3. Use the user's configured \`mono\` font-variation-settings by default.
  4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: --theme(
    --default-mono-font-family,
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    'Liberation Mono',
    'Courier New',
    monospace
  ); /* 1 */
  font-feature-settings: --theme(--default-mono-font-feature-settings, normal); /* 2 */
  font-variation-settings: --theme(--default-mono-font-variation-settings, normal); /* 3 */
  font-size: 1em; /* 4 */
}

/*
  Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
  Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
  Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
  Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
  Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
  Make lists unstyled by default.
*/

ol,
ul,
menu {
  list-style: none;
}

/*
  1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

button,
input,
select,
optgroup,
textarea,
::file-selector-button {
  font: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  border-radius: 0; /* 2 */
  background-color: transparent; /* 3 */
  opacity: 1; /* 4 */
}

/*
  Restore default font weight.
*/

:where(select:is([multiple], [size])) optgroup {
  font-weight: bolder;
}

/*
  Restore indentation.
*/

:where(select:is([multiple], [size])) optgroup option {
  padding-inline-start: 20px;
}

/*
  Restore space after button.
*/

::file-selector-button {
  margin-inline-end: 4px;
}

/*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

::placeholder {
  opacity: 1;
}

/*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(\u2026)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

@supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
  (contain-intrinsic-size: 1px) /* Safari 17+ */ {
  ::placeholder {
    color: color-mix(in oklab, currentcolor 50%, transparent);
  }
}

/*
  Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
  Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

::-webkit-date-and-time-value {
  min-height: 1lh; /* 1 */
  text-align: inherit; /* 2 */
}

/*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

::-webkit-datetime-edit {
  display: inline-flex;
}

/*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-datetime-edit,
::-webkit-datetime-edit-year-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-minute-field,
::-webkit-datetime-edit-second-field,
::-webkit-datetime-edit-millisecond-field,
::-webkit-datetime-edit-meridiem-field {
  padding-block: 0;
}

/*
  Center dropdown marker shown on inputs with paired \`<datalist>\`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/

::-webkit-calendar-picker-indicator {
  line-height: 1;
}

/*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
  Correct the inability to style the border radius in iOS Safari.
*/

button,
input:where([type='button'], [type='reset'], [type='submit']),
::file-selector-button {
  appearance: button;
}

/*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

[hidden]:where(:not([hidden='until-found'])) {
  display: none !important;
}
`,fa=`@tailwind utilities;
`,ha=`@layer theme, base, components, utilities;

@layer theme {
  @theme default {
    --font-sans:
      ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --font-mono:
      ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;

    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-red-950: oklch(25.8% 0.092 26.042);

    --color-orange-50: oklch(98% 0.016 73.684);
    --color-orange-100: oklch(95.4% 0.038 75.164);
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-300: oklch(83.7% 0.128 66.29);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-500: oklch(70.5% 0.213 47.604);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-700: oklch(55.3% 0.195 38.402);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-orange-900: oklch(40.8% 0.123 38.172);
    --color-orange-950: oklch(26.6% 0.079 36.259);

    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-300: oklch(87.9% 0.169 91.605);
    --color-amber-400: oklch(82.8% 0.189 84.429);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-amber-800: oklch(47.3% 0.137 46.201);
    --color-amber-900: oklch(41.4% 0.112 45.904);
    --color-amber-950: oklch(27.9% 0.077 45.635);

    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-100: oklch(97.3% 0.071 103.193);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-400: oklch(85.2% 0.199 91.936);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-700: oklch(55.4% 0.135 66.442);
    --color-yellow-800: oklch(47.6% 0.114 61.907);
    --color-yellow-900: oklch(42.1% 0.095 57.708);
    --color-yellow-950: oklch(28.6% 0.066 53.813);

    --color-lime-50: oklch(98.6% 0.031 120.757);
    --color-lime-100: oklch(96.7% 0.067 122.328);
    --color-lime-200: oklch(93.8% 0.127 124.321);
    --color-lime-300: oklch(89.7% 0.196 126.665);
    --color-lime-400: oklch(84.1% 0.238 128.85);
    --color-lime-500: oklch(76.8% 0.233 130.85);
    --color-lime-600: oklch(64.8% 0.2 131.684);
    --color-lime-700: oklch(53.2% 0.157 131.589);
    --color-lime-800: oklch(45.3% 0.124 130.933);
    --color-lime-900: oklch(40.5% 0.101 131.063);
    --color-lime-950: oklch(27.4% 0.072 132.109);

    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-300: oklch(87.1% 0.15 154.449);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-green-950: oklch(26.6% 0.065 152.934);

    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-300: oklch(84.5% 0.143 164.978);
    --color-emerald-400: oklch(76.5% 0.177 163.223);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-emerald-800: oklch(43.2% 0.095 166.913);
    --color-emerald-900: oklch(37.8% 0.077 168.94);
    --color-emerald-950: oklch(26.2% 0.051 172.552);

    --color-teal-50: oklch(98.4% 0.014 180.72);
    --color-teal-100: oklch(95.3% 0.051 180.801);
    --color-teal-200: oklch(91% 0.096 180.426);
    --color-teal-300: oklch(85.5% 0.138 181.071);
    --color-teal-400: oklch(77.7% 0.152 181.912);
    --color-teal-500: oklch(70.4% 0.14 182.503);
    --color-teal-600: oklch(60% 0.118 184.704);
    --color-teal-700: oklch(51.1% 0.096 186.391);
    --color-teal-800: oklch(43.7% 0.078 188.216);
    --color-teal-900: oklch(38.6% 0.063 188.416);
    --color-teal-950: oklch(27.7% 0.046 192.524);

    --color-cyan-50: oklch(98.4% 0.019 200.873);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-200: oklch(91.7% 0.08 205.041);
    --color-cyan-300: oklch(86.5% 0.127 207.078);
    --color-cyan-400: oklch(78.9% 0.154 211.53);
    --color-cyan-500: oklch(71.5% 0.143 215.221);
    --color-cyan-600: oklch(60.9% 0.126 221.723);
    --color-cyan-700: oklch(52% 0.105 223.128);
    --color-cyan-800: oklch(45% 0.085 224.283);
    --color-cyan-900: oklch(39.8% 0.07 227.392);
    --color-cyan-950: oklch(30.2% 0.056 229.695);

    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-100: oklch(95.1% 0.026 236.824);
    --color-sky-200: oklch(90.1% 0.058 230.902);
    --color-sky-300: oklch(82.8% 0.111 230.318);
    --color-sky-400: oklch(74.6% 0.16 232.661);
    --color-sky-500: oklch(68.5% 0.169 237.323);
    --color-sky-600: oklch(58.8% 0.158 241.966);
    --color-sky-700: oklch(50% 0.134 242.749);
    --color-sky-800: oklch(44.3% 0.11 240.79);
    --color-sky-900: oklch(39.1% 0.09 240.876);
    --color-sky-950: oklch(29.3% 0.066 243.157);

    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(42.4% 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-blue-950: oklch(28.2% 0.091 267.935);

    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-100: oklch(93% 0.034 272.788);
    --color-indigo-200: oklch(87% 0.065 274.039);
    --color-indigo-300: oklch(78.5% 0.115 274.713);
    --color-indigo-400: oklch(67.3% 0.182 276.935);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-700: oklch(45.7% 0.24 277.023);
    --color-indigo-800: oklch(39.8% 0.195 277.366);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-indigo-950: oklch(25.7% 0.09 281.288);

    --color-violet-50: oklch(96.9% 0.016 293.756);
    --color-violet-100: oklch(94.3% 0.029 294.588);
    --color-violet-200: oklch(89.4% 0.057 293.283);
    --color-violet-300: oklch(81.1% 0.111 293.571);
    --color-violet-400: oklch(70.2% 0.183 293.541);
    --color-violet-500: oklch(60.6% 0.25 292.717);
    --color-violet-600: oklch(54.1% 0.281 293.009);
    --color-violet-700: oklch(49.1% 0.27 292.581);
    --color-violet-800: oklch(43.2% 0.232 292.759);
    --color-violet-900: oklch(38% 0.189 293.745);
    --color-violet-950: oklch(28.3% 0.141 291.089);

    --color-purple-50: oklch(97.7% 0.014 308.299);
    --color-purple-100: oklch(94.6% 0.033 307.174);
    --color-purple-200: oklch(90.2% 0.063 306.703);
    --color-purple-300: oklch(82.7% 0.119 306.383);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-600: oklch(55.8% 0.288 302.321);
    --color-purple-700: oklch(49.6% 0.265 301.924);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-purple-900: oklch(38.1% 0.176 304.987);
    --color-purple-950: oklch(29.1% 0.149 302.717);

    --color-fuchsia-50: oklch(97.7% 0.017 320.058);
    --color-fuchsia-100: oklch(95.2% 0.037 318.852);
    --color-fuchsia-200: oklch(90.3% 0.076 319.62);
    --color-fuchsia-300: oklch(83.3% 0.145 321.434);
    --color-fuchsia-400: oklch(74% 0.238 322.16);
    --color-fuchsia-500: oklch(66.7% 0.295 322.15);
    --color-fuchsia-600: oklch(59.1% 0.293 322.896);
    --color-fuchsia-700: oklch(51.8% 0.253 323.949);
    --color-fuchsia-800: oklch(45.2% 0.211 324.591);
    --color-fuchsia-900: oklch(40.1% 0.17 325.612);
    --color-fuchsia-950: oklch(29.3% 0.136 325.661);

    --color-pink-50: oklch(97.1% 0.014 343.198);
    --color-pink-100: oklch(94.8% 0.028 342.258);
    --color-pink-200: oklch(89.9% 0.061 343.231);
    --color-pink-300: oklch(82.3% 0.12 346.018);
    --color-pink-400: oklch(71.8% 0.202 349.761);
    --color-pink-500: oklch(65.6% 0.241 354.308);
    --color-pink-600: oklch(59.2% 0.249 0.584);
    --color-pink-700: oklch(52.5% 0.223 3.958);
    --color-pink-800: oklch(45.9% 0.187 3.815);
    --color-pink-900: oklch(40.8% 0.153 2.432);
    --color-pink-950: oklch(28.4% 0.109 3.907);

    --color-rose-50: oklch(96.9% 0.015 12.422);
    --color-rose-100: oklch(94.1% 0.03 12.58);
    --color-rose-200: oklch(89.2% 0.058 10.001);
    --color-rose-300: oklch(81% 0.117 11.638);
    --color-rose-400: oklch(71.2% 0.194 13.428);
    --color-rose-500: oklch(64.5% 0.246 16.439);
    --color-rose-600: oklch(58.6% 0.253 17.585);
    --color-rose-700: oklch(51.4% 0.222 16.935);
    --color-rose-800: oklch(45.5% 0.188 13.697);
    --color-rose-900: oklch(41% 0.159 10.272);
    --color-rose-950: oklch(27.1% 0.105 12.094);

    --color-slate-50: oklch(98.4% 0.003 247.858);
    --color-slate-100: oklch(96.8% 0.007 247.896);
    --color-slate-200: oklch(92.9% 0.013 255.508);
    --color-slate-300: oklch(86.9% 0.022 252.894);
    --color-slate-400: oklch(70.4% 0.04 256.788);
    --color-slate-500: oklch(55.4% 0.046 257.417);
    --color-slate-600: oklch(44.6% 0.043 257.281);
    --color-slate-700: oklch(37.2% 0.044 257.287);
    --color-slate-800: oklch(27.9% 0.041 260.031);
    --color-slate-900: oklch(20.8% 0.042 265.755);
    --color-slate-950: oklch(12.9% 0.042 264.695);

    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-gray-950: oklch(13% 0.028 261.692);

    --color-zinc-50: oklch(98.5% 0 0);
    --color-zinc-100: oklch(96.7% 0.001 286.375);
    --color-zinc-200: oklch(92% 0.004 286.32);
    --color-zinc-300: oklch(87.1% 0.006 286.286);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-700: oklch(37% 0.013 285.805);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-zinc-900: oklch(21% 0.006 285.885);
    --color-zinc-950: oklch(14.1% 0.005 285.823);

    --color-neutral-50: oklch(98.5% 0 0);
    --color-neutral-100: oklch(97% 0 0);
    --color-neutral-200: oklch(92.2% 0 0);
    --color-neutral-300: oklch(87% 0 0);
    --color-neutral-400: oklch(70.8% 0 0);
    --color-neutral-500: oklch(55.6% 0 0);
    --color-neutral-600: oklch(43.9% 0 0);
    --color-neutral-700: oklch(37.1% 0 0);
    --color-neutral-800: oklch(26.9% 0 0);
    --color-neutral-900: oklch(20.5% 0 0);
    --color-neutral-950: oklch(14.5% 0 0);

    --color-stone-50: oklch(98.5% 0.001 106.423);
    --color-stone-100: oklch(97% 0.001 106.424);
    --color-stone-200: oklch(92.3% 0.003 48.717);
    --color-stone-300: oklch(86.9% 0.005 56.366);
    --color-stone-400: oklch(70.9% 0.01 56.259);
    --color-stone-500: oklch(55.3% 0.013 58.071);
    --color-stone-600: oklch(44.4% 0.011 73.639);
    --color-stone-700: oklch(37.4% 0.01 67.558);
    --color-stone-800: oklch(26.8% 0.007 34.298);
    --color-stone-900: oklch(21.6% 0.006 56.043);
    --color-stone-950: oklch(14.7% 0.004 49.25);

    --color-black: #000;
    --color-white: #fff;

    --spacing: 0.25rem;

    --breakpoint-sm: 40rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 64rem;
    --breakpoint-xl: 80rem;
    --breakpoint-2xl: 96rem;

    --container-3xs: 16rem;
    --container-2xs: 18rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --container-7xl: 80rem;

    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;
    --text-8xl: 6rem;
    --text-8xl--line-height: 1;
    --text-9xl: 8rem;
    --text-9xl--line-height: 1;

    --font-weight-thin: 100;
    --font-weight-extralight: 200;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --font-weight-black: 900;

    --tracking-tighter: -0.05em;
    --tracking-tight: -0.025em;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;

    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;

    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --radius-4xl: 2rem;

    --shadow-2xs: 0 1px rgb(0 0 0 / 0.05);
    --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md:
      0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg:
      0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl:
      0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    --inset-shadow-2xs: inset 0 1px rgb(0 0 0 / 0.05);
    --inset-shadow-xs: inset 0 1px 1px rgb(0 0 0 / 0.05);
    --inset-shadow-sm: inset 0 2px 4px rgb(0 0 0 / 0.05);

    --drop-shadow-xs: 0 1px 1px rgb(0 0 0 / 0.05);
    --drop-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.15);
    --drop-shadow-md: 0 3px 3px rgb(0 0 0 / 0.12);
    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
    --drop-shadow-xl: 0 9px 7px rgb(0 0 0 / 0.1);
    --drop-shadow-2xl: 0 25px 25px rgb(0 0 0 / 0.15);

    --text-shadow-2xs: 0px 1px 0px rgb(0 0 0 / 0.15);
    --text-shadow-xs: 0px 1px 1px rgb(0 0 0 / 0.2);
    --text-shadow-sm:
      0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075),
      0px 2px 2px rgb(0 0 0 / 0.075);
    --text-shadow-md:
      0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1),
      0px 2px 4px rgb(0 0 0 / 0.1);
    --text-shadow-lg:
      0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1),
      0px 4px 8px rgb(0 0 0 / 0.1);

    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

    --animate-spin: spin 1s linear infinite;
    --animate-ping: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --animate-bounce: bounce 1s infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes ping {
      75%,
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes pulse {
      50% {
        opacity: 0.5;
      }
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }

      50% {
        transform: none;
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }

    --blur-xs: 4px;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-2xl: 40px;
    --blur-3xl: 64px;

    --perspective-dramatic: 100px;
    --perspective-near: 300px;
    --perspective-normal: 500px;
    --perspective-midrange: 800px;
    --perspective-distant: 1200px;

    --aspect-video: 16 / 9;

    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: --theme(--font-sans, initial);
    --default-font-feature-settings: --theme(
      --font-sans--font-feature-settings,
      initial
    );
    --default-font-variation-settings: --theme(
      --font-sans--font-variation-settings,
      initial
    );
    --default-mono-font-family: --theme(--font-mono, initial);
    --default-mono-font-feature-settings: --theme(
      --font-mono--font-feature-settings,
      initial
    );
    --default-mono-font-variation-settings: --theme(
      --font-mono--font-variation-settings,
      initial
    );
  }

  /* Deprecated */
  @theme default inline reference {
    --blur: 8px;
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
    --drop-shadow: 0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06);
    --radius: 0.25rem;
    --max-width-prose: 65ch;
  }
}

@layer base {
  /*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Remove default margins and padding
  3. Reset all borders.
*/

  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    box-sizing: border-box; /* 1 */
    margin: 0; /* 2 */
    padding: 0; /* 2 */
    border: 0 solid; /* 3 */
  }

  /*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured \`sans\` font-family by default.
  5. Use the user's configured \`sans\` font-feature-settings by default.
  6. Use the user's configured \`sans\` font-variation-settings by default.
  7. Disable tap highlights on iOS.
*/

  html,
  :host {
    line-height: 1.5; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    tab-size: 4; /* 3 */
    font-family: --theme(
      --default-font-family,
      ui-sans-serif,
      system-ui,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji"
    ); /* 4 */
    font-feature-settings: --theme(
      --default-font-feature-settings,
      normal
    ); /* 5 */
    font-variation-settings: --theme(
      --default-font-variation-settings,
      normal
    ); /* 6 */
    -webkit-tap-highlight-color: transparent; /* 7 */
  }

  /*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Reset the default border style to a 1px solid border.
*/

  hr {
    height: 0; /* 1 */
    color: inherit; /* 2 */
    border-top-width: 1px; /* 3 */
  }

  /*
  Add the correct text decoration in Chrome, Edge, and Safari.
*/

  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  /*
  Remove the default font size and weight for headings.
*/

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  /*
  Reset links to optimize for opt-in styling instead of opt-out.
*/

  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }

  /*
  Add the correct font weight in Edge and Safari.
*/

  b,
  strong {
    font-weight: bolder;
  }

  /*
  1. Use the user's configured \`mono\` font-family by default.
  2. Use the user's configured \`mono\` font-feature-settings by default.
  3. Use the user's configured \`mono\` font-variation-settings by default.
  4. Correct the odd \`em\` font sizing in all browsers.
*/

  code,
  kbd,
  samp,
  pre {
    font-family: --theme(
      --default-mono-font-family,
      ui-monospace,
      SFMono-Regular,
      Menlo,
      Monaco,
      Consolas,
      "Liberation Mono",
      "Courier New",
      monospace
    ); /* 1 */
    font-feature-settings: --theme(
      --default-mono-font-feature-settings,
      normal
    ); /* 2 */
    font-variation-settings: --theme(
      --default-mono-font-variation-settings,
      normal
    ); /* 3 */
    font-size: 1em; /* 4 */
  }

  /*
  Add the correct font size in all browsers.
*/

  small {
    font-size: 80%;
  }

  /*
  Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
*/

  table {
    text-indent: 0; /* 1 */
    border-color: inherit; /* 2 */
    border-collapse: collapse; /* 3 */
  }

  /*
  Use the modern Firefox focus style for all focusable elements.
*/

  :-moz-focusring {
    outline: auto;
  }

  /*
  Add the correct vertical alignment in Chrome and Firefox.
*/

  progress {
    vertical-align: baseline;
  }

  /*
  Add the correct display in Chrome and Safari.
*/

  summary {
    display: list-item;
  }

  /*
  Make lists unstyled by default.
*/

  ol,
  ul,
  menu {
    list-style: none;
  }

  /*
  1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
      This can trigger a poorly considered lint error in some tools but is included by design.
*/

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block; /* 1 */
    vertical-align: middle; /* 2 */
  }

  /*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  /*
  1. Inherit font styles in all browsers.
  2. Remove border radius in all browsers.
  3. Remove background color in all browsers.
  4. Ensure consistent opacity for disabled states in all browsers.
*/

  button,
  input,
  select,
  optgroup,
  textarea,
  ::file-selector-button {
    font: inherit; /* 1 */
    font-feature-settings: inherit; /* 1 */
    font-variation-settings: inherit; /* 1 */
    letter-spacing: inherit; /* 1 */
    color: inherit; /* 1 */
    border-radius: 0; /* 2 */
    background-color: transparent; /* 3 */
    opacity: 1; /* 4 */
  }

  /*
  Restore default font weight.
*/

  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }

  /*
  Restore indentation.
*/

  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }

  /*
  Restore space after button.
*/

  ::file-selector-button {
    margin-inline-end: 4px;
  }

  /*
  Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
*/

  ::placeholder {
    opacity: 1;
  }

  /*
  Set the default placeholder color to a semi-transparent version of the current text color in browsers that do not
  crash when using \`color-mix(\u2026)\` with \`currentcolor\`. (https://github.com/tailwindlabs/tailwindcss/issues/17194)
*/

  @supports (not (-webkit-appearance: -apple-pay-button)) /* Not Safari */ or
    (contain-intrinsic-size: 1px) /* Safari 17+ */ {
    ::placeholder {
      color: color-mix(in oklab, currentcolor 50%, transparent);
    }
  }

  /*
  Prevent resizing textareas horizontally by default.
*/

  textarea {
    resize: vertical;
  }

  /*
  Remove the inner padding in Chrome and Safari on macOS.
*/

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /*
  1. Ensure date/time inputs have the same height when empty in iOS Safari.
  2. Ensure text alignment can be changed on date/time inputs in iOS Safari.
*/

  ::-webkit-date-and-time-value {
    min-height: 1lh; /* 1 */
    text-align: inherit; /* 2 */
  }

  /*
  Prevent height from changing on date/time inputs in macOS Safari when the input is set to \`display: block\`.
*/

  ::-webkit-datetime-edit {
    display: inline-flex;
  }

  /*
  Remove excess padding from pseudo-elements in date/time inputs to ensure consistent height across browsers.
*/

  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }

  ::-webkit-datetime-edit,
  ::-webkit-datetime-edit-year-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-minute-field,
  ::-webkit-datetime-edit-second-field,
  ::-webkit-datetime-edit-millisecond-field,
  ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }

  /*
  Center dropdown marker shown on inputs with paired \`<datalist>\`s in Chrome. (https://github.com/tailwindlabs/tailwindcss/issues/18499)
*/

  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }

  /*
  Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

  :-moz-ui-invalid {
    box-shadow: none;
  }

  /*
  Correct the inability to style the border radius in iOS Safari.
*/

  button,
  input:where([type="button"], [type="reset"], [type="submit"]),
  ::file-selector-button {
    appearance: button;
  }

  /*
  Correct the cursor style of increment and decrement buttons in Safari.
*/

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /*
  Make elements with the HTML hidden attribute stay hidden by default.
*/

  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}

@layer utilities {
  @tailwind utilities;
}
`,ve=tr(Bo()),Gt={"/tailwindcss":"@import './tailwindcss/index.css';","/tailwindcss/index.css":ha,"/tailwindcss/theme.css":ua,"/tailwindcss/preflight.css":da,"/tailwindcss/utilities.css":fa};async function pa(e){return await fetch(e).then(r=>r.text())}async function ma(e,r="/",o={}){r||(r="/");let t=e;if(e.startsWith("fetch:")&&Go(e.substring(6)))return{base:ve.default.dirname(e),content:await pa(new URL(e.substring(6)).toString())};{for(let[f,m]of Object.entries(Gt))Object.keys(o).includes(f)||(o[f]=m);!e.startsWith("/")&&(Object.keys(Gt).includes(ve.default.resolve(e))||Object.keys(Gt).includes(ve.default.resolve(e).concat(".css")))&&(r="/",e=ve.default.resolve(e)),e.startsWith(".")&&(e=ve.default.resolve(r,e)),e.startsWith("/")&&(e.endsWith(".css")||(Object.keys(o).some(f=>f.includes(e.concat(".css")))?e=e.concat(".css"):Object.keys(o).some(f=>f.includes(e.concat("/index.css")))&&(e=e.concat("/index.css"))));let a=ve.default.resolve(r,e);if(o[a])return{base:ve.default.dirname(e),content:o[a]};let u=new URL(e,"https://esm.sh");a=u.pathname;let s=!1,l=null,i=null,c=[a];a.endsWith(".css")||(c.push(a+".css"),c.push(a+"/index.css")),a=a.concat(u.search);for(let f of c)try{i=f;let m=await fetch(`https://esm.sh${f}`);if(!m.ok)throw Error();let w=m.headers.get("content-type")||"";if(!w.includes("text/css"))throw Error(`Response is not a CSS file: ${w}`);let k=await m.text();k=k.replace(/@config\s+['|"](.*)['|"]/g,(h,b)=>`@config 'https://esm.sh${ve.default.resolve(ve.default.dirname(e))}${ve.default.resolve(b)}'`).replace(/@plugin\s+['|"](.*)['|"]/g,(h,b)=>`@plugin 'https://esm.sh${ve.default.resolve(ve.default.dirname(e))}${ve.default.resolve(b)}'`),o[f]=k,a=f,s=!0;break}catch(m){l=m}if(l)if(s)console.warn(`Warning: The stylesheet '${t}' was successfully fetched from the CDN using fallback path '${i}'.`);else throw Error(t.startsWith(".")?`Cannot find stylesheet '${t}' on the Simple File System`:`Cannot find stylesheet '${t}' on the CDN`);return{base:ve.default.dirname(e),content:o[a]}}}var xo=G(((e,r)=>{e.__esModule=!0,e.default=a;function o(u){for(var s=u.toLowerCase(),l="",i=!1,c=0;c<6&&s[c]!==void 0;c++){var f=s.charCodeAt(c),m=f>=97&&f<=102||f>=48&&f<=57;if(i=f===32,!m)break;l+=s[c]}if(l.length!==0){var w=parseInt(l,16);return w>=55296&&w<=57343||w===0||w>1114111?["\uFFFD",l.length+(i?1:0)]:[String.fromCodePoint(w),l.length+(i?1:0)]}}var t=/\\/;function a(u){if(!t.test(u))return u;for(var s="",l=0;l<u.length;l++){if(u[l]==="\\"){var i=o(u.slice(l+1,l+7));if(i!==void 0){s+=i[0],l+=i[1];continue}if(u[l+1]==="\\"){s+="\\",l++;continue}u.length===l+1&&(s+=u[l]);continue}s+=u[l]}return s}r.exports=e.default})),ga=G(((e,r)=>{e.__esModule=!0,e.default=o;function o(t){for(var a=[...arguments].slice(1);a.length>0;){var u=a.shift();if(!t[u])return;t=t[u]}return t}r.exports=e.default})),va=G(((e,r)=>{e.__esModule=!0,e.default=o;function o(t){for(var a=[...arguments].slice(1);a.length>0;){var u=a.shift();t[u]||(t[u]={}),t=t[u]}}r.exports=e.default})),wa=G(((e,r)=>{e.__esModule=!0,e.default=o;function o(t){for(var a="",u=t.indexOf("/*"),s=0;u>=0;){a+=t.slice(s,u);var l=t.indexOf("*/",u+2);if(l<0)return a;s=l+2,u=t.indexOf("/*",s)}return a+=t.slice(s),a}r.exports=e.default})),bt=G((e=>{e.__esModule=!0,e.unesc=r(xo()).default,e.getProp=r(ga()).default,e.ensureObject=r(va()).default,e.stripComments=r(wa()).default;function r(o){return o&&o.__esModule?o:{default:o}}})),Pe=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=bt();function t(s,l){for(var i=0;i<l.length;i++){var c=l[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(s,c.key,c)}}function a(s,l,i){return l&&t(s.prototype,l),i&&t(s,i),Object.defineProperty(s,"prototype",{writable:!1}),s}var u=function s(l,i){if(typeof l!="object"||!l)return l;var c=new l.constructor;for(var f in l)if(l.hasOwnProperty(f)){var m=l[f];f==="parent"&&typeof m=="object"?i&&(c[f]=i):m instanceof Array?c[f]=m.map(function(w){return s(w,c)}):c[f]=s(m,c)}return c};e.default=(function(){function s(i){i===void 0&&(i={}),Object.assign(this,i),this.spaces=this.spaces||{},this.spaces.before=this.spaces.before||"",this.spaces.after=this.spaces.after||""}var l=s.prototype;return l.remove=function(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this},l.replaceWith=function(){if(this.parent){for(var i in arguments)this.parent.insertBefore(this,arguments[i]);this.remove()}return this},l.next=function(){return this.parent.at(this.parent.index(this)+1)},l.prev=function(){return this.parent.at(this.parent.index(this)-1)},l.clone=function(i){i===void 0&&(i={});var c=u(this);for(var f in i)c[f]=i[f];return c},l.appendToPropertyAndEscape=function(i,c,f){this.raws||(this.raws={});var m=this[i],w=this.raws[i];this[i]=m+c,w||f!==c?this.raws[i]=(w||m)+f:delete this.raws[i]},l.setPropertyAndEscape=function(i,c,f){this.raws||(this.raws={}),this[i]=c,this.raws[i]=f},l.setPropertyWithoutEscape=function(i,c){this[i]=c,this.raws&&delete this.raws[i]},l.isAtPosition=function(i,c){if(this.source&&this.source.start&&this.source.end)return!(this.source.start.line>i||this.source.end.line<i||this.source.start.line===i&&this.source.start.column>c||this.source.end.line===i&&this.source.end.column<c)},l.stringifyProperty=function(i){return this.raws&&this.raws[i]||this[i]},l.valueToString=function(){return String(this.stringifyProperty("value"))},l.toString=function(){return[this.rawSpaceBefore,this.valueToString(),this.rawSpaceAfter].join("")},a(s,[{key:"rawSpaceBefore",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.before;return i===void 0&&(i=this.spaces&&this.spaces.before),i||""},set:function(i){(0,o.ensureObject)(this,"raws","spaces"),this.raws.spaces.before=i}},{key:"rawSpaceAfter",get:function(){var i=this.raws&&this.raws.spaces&&this.raws.spaces.after;return i===void 0&&(i=this.spaces.after),i||""},set:function(i){(0,o.ensureObject)(this,"raws","spaces"),this.raws.spaces.after=i}}]),s})(),r.exports=e.default})),he=G((e=>{e.__esModule=!0,e.TAG="tag",e.STRING="string",e.SELECTOR="selector",e.ROOT="root",e.PSEUDO="pseudo",e.NESTING="nesting",e.ID="id",e.COMMENT="comment",e.COMBINATOR="combinator",e.CLASS="class",e.ATTRIBUTE="attribute",e.UNIVERSAL="universal"})),Ht=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=s(Pe()),t=u(he());function a(h){if(typeof WeakMap!="function")return null;var b=new WeakMap,v=new WeakMap;return(a=function(S){return S?v:b})(h)}function u(h,b){if(!b&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=a(b);if(v&&v.has(h))return v.get(h);var S={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in h)if(A!=="default"&&Object.prototype.hasOwnProperty.call(h,A)){var E=y?Object.getOwnPropertyDescriptor(h,A):null;E&&(E.get||E.set)?Object.defineProperty(S,A,E):S[A]=h[A]}return S.default=h,v&&v.set(h,S),S}function s(h){return h&&h.__esModule?h:{default:h}}function l(h,b){var v=typeof Symbol<"u"&&h[Symbol.iterator]||h["@@iterator"];if(v)return(v=v.call(h)).next.bind(v);if(Array.isArray(h)||(v=i(h))||b&&h&&typeof h.length=="number"){v&&(h=v);var S=0;return function(){return S>=h.length?{done:!0}:{done:!1,value:h[S++]}}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(h,b){if(h){if(typeof h=="string")return c(h,b);var v=Object.prototype.toString.call(h).slice(8,-1);if(v==="Object"&&h.constructor&&(v=h.constructor.name),v==="Map"||v==="Set")return Array.from(h);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return c(h,b)}}function c(h,b){(b==null||b>h.length)&&(b=h.length);for(var v=0,S=Array(b);v<b;v++)S[v]=h[v];return S}function f(h,b){for(var v=0;v<b.length;v++){var S=b[v];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(h,S.key,S)}}function m(h,b,v){return b&&f(h.prototype,b),v&&f(h,v),Object.defineProperty(h,"prototype",{writable:!1}),h}function w(h,b){h.prototype=Object.create(b.prototype),h.prototype.constructor=h,k(h,b)}function k(h,b){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(v,S){return v.__proto__=S,v},k(h,b)}e.default=(function(h){w(b,h);function b(S){var y=h.call(this,S)||this;return y.nodes||(y.nodes=[]),y}var v=b.prototype;return v.append=function(S){return S.parent=this,this.nodes.push(S),this},v.prepend=function(S){for(var y in S.parent=this,this.nodes.unshift(S),this.indexes)this.indexes[y]++;return this},v.at=function(S){return this.nodes[S]},v.index=function(S){return typeof S=="number"?S:this.nodes.indexOf(S)},v.removeChild=function(S){S=this.index(S),this.at(S).parent=void 0,this.nodes.splice(S,1);var y;for(var A in this.indexes)y=this.indexes[A],y>=S&&(this.indexes[A]=y-1);return this},v.removeAll=function(){for(var S=l(this.nodes),y;!(y=S()).done;){var A=y.value;A.parent=void 0}return this.nodes=[],this},v.empty=function(){return this.removeAll()},v.insertAfter=function(S,y){var A;y.parent=this;for(var E=this.index(S),j=[],T=2;T<arguments.length;T++)j.push(arguments[T]);(A=this.nodes).splice.apply(A,[E+1,0,y].concat(j)),y.parent=this;var C;for(var n in this.indexes)C=this.indexes[n],E<C&&(this.indexes[n]=C+arguments.length-1);return this},v.insertBefore=function(S,y){var A;y.parent=this;for(var E=this.index(S),j=[],T=2;T<arguments.length;T++)j.push(arguments[T]);(A=this.nodes).splice.apply(A,[E,0,y].concat(j)),y.parent=this;var C;for(var n in this.indexes)C=this.indexes[n],C>=E&&(this.indexes[n]=C+arguments.length-1);return this},v._findChildAtPosition=function(S,y){var A=void 0;return this.each(function(E){if(E.atPosition){var j=E.atPosition(S,y);if(j)return A=j,!1}else if(E.isAtPosition(S,y))return A=E,!1}),A},v.atPosition=function(S,y){if(this.isAtPosition(S,y))return this._findChildAtPosition(S,y)||this},v._inferEndPosition=function(){this.last&&this.last.source&&this.last.source.end&&(this.source=this.source||{},this.source.end=this.source.end||{},Object.assign(this.source.end,this.last.source.end))},v.each=function(S){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach++;var y=this.lastEach;if(this.indexes[y]=0,this.length){for(var A,E;this.indexes[y]<this.length&&(A=this.indexes[y],E=S(this.at(A),A),E!==!1);)this.indexes[y]+=1;if(delete this.indexes[y],E===!1)return!1}},v.walk=function(S){return this.each(function(y,A){var E=S(y,A);if(E!==!1&&y.length&&(E=y.walk(S)),E===!1)return!1})},v.walkAttributes=function(S){var y=this;return this.walk(function(A){if(A.type===t.ATTRIBUTE)return S.call(y,A)})},v.walkClasses=function(S){var y=this;return this.walk(function(A){if(A.type===t.CLASS)return S.call(y,A)})},v.walkCombinators=function(S){var y=this;return this.walk(function(A){if(A.type===t.COMBINATOR)return S.call(y,A)})},v.walkComments=function(S){var y=this;return this.walk(function(A){if(A.type===t.COMMENT)return S.call(y,A)})},v.walkIds=function(S){var y=this;return this.walk(function(A){if(A.type===t.ID)return S.call(y,A)})},v.walkNesting=function(S){var y=this;return this.walk(function(A){if(A.type===t.NESTING)return S.call(y,A)})},v.walkPseudos=function(S){var y=this;return this.walk(function(A){if(A.type===t.PSEUDO)return S.call(y,A)})},v.walkTags=function(S){var y=this;return this.walk(function(A){if(A.type===t.TAG)return S.call(y,A)})},v.walkUniversals=function(S){var y=this;return this.walk(function(A){if(A.type===t.UNIVERSAL)return S.call(y,A)})},v.split=function(S){var y=this,A=[];return this.reduce(function(E,j,T){var C=S.call(y,j);return A.push(j),C?(E.push(A),A=[]):T===y.length-1&&E.push(A),E},[])},v.map=function(S){return this.nodes.map(S)},v.reduce=function(S,y){return this.nodes.reduce(S,y)},v.every=function(S){return this.nodes.every(S)},v.some=function(S){return this.nodes.some(S)},v.filter=function(S){return this.nodes.filter(S)},v.sort=function(S){return this.nodes.sort(S)},v.toString=function(){return this.map(String).join("")},m(b,[{key:"first",get:function(){return this.at(0)}},{key:"last",get:function(){return this.at(this.length-1)}},{key:"length",get:function(){return this.nodes.length}}]),b})(o.default),r.exports=e.default})),$o=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=a(Ht()),t=he();function a(c){return c&&c.__esModule?c:{default:c}}function u(c,f){for(var m=0;m<f.length;m++){var w=f[m];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(c,w.key,w)}}function s(c,f,m){return f&&u(c.prototype,f),m&&u(c,m),Object.defineProperty(c,"prototype",{writable:!1}),c}function l(c,f){c.prototype=Object.create(f.prototype),c.prototype.constructor=c,i(c,f)}function i(c,f){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(m,w){return m.__proto__=w,m},i(c,f)}e.default=(function(c){l(f,c);function f(w){var k=c.call(this,w)||this;return k.type=t.ROOT,k}var m=f.prototype;return m.toString=function(){var w=this.reduce(function(k,h){return k.push(String(h)),k},[]).join(",");return this.trailingComma?w+",":w},m.error=function(w,k){return this._error?this._error(w,k):Error(w)},s(f,[{key:"errorGenerator",set:function(w){this._error=w}}]),f})(o.default),r.exports=e.default})),So=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=a(Ht()),t=he();function a(l){return l&&l.__esModule?l:{default:l}}function u(l,i){l.prototype=Object.create(i.prototype),l.prototype.constructor=l,s(l,i)}function s(l,i){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},s(l,i)}e.default=(function(l){u(i,l);function i(c){var f=l.call(this,c)||this;return f.type=t.SELECTOR,f}return i})(o.default),r.exports=e.default})),To=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=s($t()),t=bt(),a=s(Pe()),u=he();function s(m){return m&&m.__esModule?m:{default:m}}function l(m,w){for(var k=0;k<w.length;k++){var h=w[k];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(m,h.key,h)}}function i(m,w,k){return w&&l(m.prototype,w),k&&l(m,k),Object.defineProperty(m,"prototype",{writable:!1}),m}function c(m,w){m.prototype=Object.create(w.prototype),m.prototype.constructor=m,f(m,w)}function f(m,w){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(k,h){return k.__proto__=h,k},f(m,w)}e.default=(function(m){c(w,m);function w(h){var b=m.call(this,h)||this;return b.type=u.CLASS,b._constructed=!0,b}var k=w.prototype;return k.valueToString=function(){return"."+m.prototype.valueToString.call(this)},i(w,[{key:"value",get:function(){return this._value},set:function(h){if(this._constructed){var b=(0,o.default)(h,{isIdentifier:!0});b===h?this.raws&&delete this.raws.value:((0,t.ensureObject)(this,"raws"),this.raws.value=b)}this._value=h}}]),w})(a.default),r.exports=e.default})),Ao=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=a(Pe()),t=he();function a(l){return l&&l.__esModule?l:{default:l}}function u(l,i){l.prototype=Object.create(i.prototype),l.prototype.constructor=l,s(l,i)}function s(l,i){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},s(l,i)}e.default=(function(l){u(i,l);function i(c){var f=l.call(this,c)||this;return f.type=t.COMMENT,f}return i})(o.default),r.exports=e.default})),Eo=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=a(Pe()),t=he();function a(l){return l&&l.__esModule?l:{default:l}}function u(l,i){l.prototype=Object.create(i.prototype),l.prototype.constructor=l,s(l,i)}function s(l,i){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},s(l,i)}e.default=(function(l){u(i,l);function i(f){var m=l.call(this,f)||this;return m.type=t.ID,m}var c=i.prototype;return c.valueToString=function(){return"#"+l.prototype.valueToString.call(this)},i})(o.default),r.exports=e.default})),Zt=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=u($t()),t=bt(),a=u(Pe());function u(f){return f&&f.__esModule?f:{default:f}}function s(f,m){for(var w=0;w<m.length;w++){var k=m[w];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(f,k.key,k)}}function l(f,m,w){return m&&s(f.prototype,m),w&&s(f,w),Object.defineProperty(f,"prototype",{writable:!1}),f}function i(f,m){f.prototype=Object.create(m.prototype),f.prototype.constructor=f,c(f,m)}function c(f,m){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(w,k){return w.__proto__=k,w},c(f,m)}e.default=(function(f){i(m,f);function m(){return f.apply(this,arguments)||this}var w=m.prototype;return w.qualifiedName=function(k){return this.namespace?this.namespaceString+"|"+k:k},w.valueToString=function(){return this.qualifiedName(f.prototype.valueToString.call(this))},l(m,[{key:"namespace",get:function(){return this._namespace},set:function(k){if(k===!0||k==="*"||k==="&"){this._namespace=k,this.raws&&delete this.raws.namespace;return}var h=(0,o.default)(k,{isIdentifier:!0});this._namespace=k,h===k?this.raws&&delete this.raws.namespace:((0,t.ensureObject)(this,"raws"),this.raws.namespace=h)}},{key:"ns",get:function(){return this._namespace},set:function(k){this.namespace=k}},{key:"namespaceString",get:function(){if(this.namespace){var k=this.stringifyProperty("namespace");return k===!0?"":k}else return""}}]),m})(a.default),r.exports=e.default})),_o=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=a(Zt()),t=he();function a(l){return l&&l.__esModule?l:{default:l}}function u(l,i){l.prototype=Object.create(i.prototype),l.prototype.constructor=l,s(l,i)}function s(l,i){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},s(l,i)}e.default=(function(l){u(i,l);function i(c){var f=l.call(this,c)||this;return f.type=t.TAG,f}return i})(o.default),r.exports=e.default})),Oo=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=a(Pe()),t=he();function a(l){return l&&l.__esModule?l:{default:l}}function u(l,i){l.prototype=Object.create(i.prototype),l.prototype.constructor=l,s(l,i)}function s(l,i){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},s(l,i)}e.default=(function(l){u(i,l);function i(c){var f=l.call(this,c)||this;return f.type=t.STRING,f}return i})(o.default),r.exports=e.default})),jo=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=a(Ht()),t=he();function a(l){return l&&l.__esModule?l:{default:l}}function u(l,i){l.prototype=Object.create(i.prototype),l.prototype.constructor=l,s(l,i)}function s(l,i){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},s(l,i)}e.default=(function(l){u(i,l);function i(f){var m=l.call(this,f)||this;return m.type=t.PSEUDO,m}var c=i.prototype;return c.toString=function(){var f=this.length?"("+this.map(String).join(",")+")":"";return[this.rawSpaceBefore,this.stringifyProperty("value"),f,this.rawSpaceAfter].join("")},i})(o.default),r.exports=e.default})),Co=G((e=>{e.__esModule=!0,e.unescapeValue=v;var r=s($t()),o=s(xo()),t=s(Zt()),a=he(),u;function s(j){return j&&j.__esModule?j:{default:j}}function l(j,T){for(var C=0;C<T.length;C++){var n=T[C];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(j,n.key,n)}}function i(j,T,C){return T&&l(j.prototype,T),C&&l(j,C),Object.defineProperty(j,"prototype",{writable:!1}),j}function c(j,T){j.prototype=Object.create(T.prototype),j.prototype.constructor=j,f(j,T)}function f(j,T){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(C,n){return C.__proto__=n,C},f(j,T)}var m=qo(),w=/^('|")([^]*)\1$/,k=m(function(){},"Assigning an attribute a value containing characters that might need to be escaped is deprecated. Call attribute.setValue() instead."),h=m(function(){},"Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead."),b=m(function(){},"Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.");function v(j){var T=!1,C=null,n=j,p=n.match(w);return p&&(C=p[1],n=p[2]),n=(0,o.default)(n),n!==j&&(T=!0),{deprecatedUsage:T,unescaped:n,quoteMark:C}}function S(j){if(j.quoteMark!==void 0||j.value===void 0)return j;b();var T=v(j.value),C=T.quoteMark,n=T.unescaped;return j.raws||(j.raws={}),j.raws.value===void 0&&(j.raws.value=j.value),j.value=n,j.quoteMark=C,j}var y=(function(j){c(T,j);function T(n){var p;return n===void 0&&(n={}),p=j.call(this,S(n))||this,p.type=a.ATTRIBUTE,p.raws=p.raws||{},Object.defineProperty(p.raws,"unquoted",{get:m(function(){return p.value},"attr.raws.unquoted is deprecated. Call attr.value instead."),set:m(function(){return p.value},"Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.")}),p._constructed=!0,p}var C=T.prototype;return C.getQuotedValue=function(n){n===void 0&&(n={});var p=this._determineQuoteMark(n),g=A[p];return(0,r.default)(this._value,g)},C._determineQuoteMark=function(n){return n.smart?this.smartQuoteMark(n):this.preferredQuoteMark(n)},C.setValue=function(n,p){p===void 0&&(p={}),this._value=n,this._quoteMark=this._determineQuoteMark(p),this._syncRawValue()},C.smartQuoteMark=function(n){var p=this.value,g=p.replace(/[^']/g,"").length,$=p.replace(/[^"]/g,"").length;if(g+$===0){var x=(0,r.default)(p,{isIdentifier:!0});if(x===p)return T.NO_QUOTE;var O=this.preferredQuoteMark(n);if(O===T.NO_QUOTE){var I=this.quoteMark||n.quoteMark||T.DOUBLE_QUOTE,_=A[I];if((0,r.default)(p,_).length<x.length)return I}return O}else return $===g?this.preferredQuoteMark(n):$<g?T.DOUBLE_QUOTE:T.SINGLE_QUOTE},C.preferredQuoteMark=function(n){var p=n.preferCurrentQuoteMark?this.quoteMark:n.quoteMark;return p===void 0&&(p=n.preferCurrentQuoteMark?n.quoteMark:this.quoteMark),p===void 0&&(p=T.DOUBLE_QUOTE),p},C._syncRawValue=function(){var n=(0,r.default)(this._value,A[this.quoteMark]);n===this._value?this.raws&&delete this.raws.value:this.raws.value=n},C._handleEscapes=function(n,p){if(this._constructed){var g=(0,r.default)(p,{isIdentifier:!0});g===p?delete this.raws[n]:this.raws[n]=g}},C._spacesFor=function(n){var p={before:"",after:""},g=this.spaces[n]||{},$=this.raws.spaces&&this.raws.spaces[n]||{};return Object.assign(p,g,$)},C._stringFor=function(n,p,g){p===void 0&&(p=n),g===void 0&&(g=E);var $=this._spacesFor(p);return g(this.stringifyProperty(n),$)},C.offsetOf=function(n){var p=1,g=this._spacesFor("attribute");if(p+=g.before.length,n==="namespace"||n==="ns")return this.namespace?p:-1;if(n==="attributeNS"||(p+=this.namespaceString.length,this.namespace&&(p+=1),n==="attribute"))return p;p+=this.stringifyProperty("attribute").length,p+=g.after.length;var $=this._spacesFor("operator");p+=$.before.length;var x=this.stringifyProperty("operator");if(n==="operator")return x?p:-1;p+=x.length,p+=$.after.length;var O=this._spacesFor("value");p+=O.before.length;var I=this.stringifyProperty("value");if(n==="value")return I?p:-1;p+=I.length,p+=O.after.length;var _=this._spacesFor("insensitive");return p+=_.before.length,n==="insensitive"&&this.insensitive?p:-1},C.toString=function(){var n=this,p=[this.rawSpaceBefore,"["];return p.push(this._stringFor("qualifiedAttribute","attribute")),this.operator&&(this.value||this.value==="")&&(p.push(this._stringFor("operator")),p.push(this._stringFor("value")),p.push(this._stringFor("insensitiveFlag","insensitive",function(g,$){return g.length>0&&!n.quoted&&$.before.length===0&&!(n.spaces.value&&n.spaces.value.after)&&($.before=" "),E(g,$)}))),p.push("]"),p.push(this.rawSpaceAfter),p.join("")},i(T,[{key:"quoted",get:function(){var n=this.quoteMark;return n==="'"||n==='"'},set:function(n){h()}},{key:"quoteMark",get:function(){return this._quoteMark},set:function(n){if(!this._constructed){this._quoteMark=n;return}this._quoteMark!==n&&(this._quoteMark=n,this._syncRawValue())}},{key:"qualifiedAttribute",get:function(){return this.qualifiedName(this.raws.attribute||this.attribute)}},{key:"insensitiveFlag",get:function(){return this.insensitive?"i":""}},{key:"value",get:function(){return this._value},set:function(n){if(this._constructed){var p=v(n),g=p.deprecatedUsage,$=p.unescaped,x=p.quoteMark;if(g&&k(),$===this._value&&x===this._quoteMark)return;this._value=$,this._quoteMark=x,this._syncRawValue()}else this._value=n}},{key:"insensitive",get:function(){return this._insensitive},set:function(n){n||(this._insensitive=!1,this.raws&&(this.raws.insensitiveFlag==="I"||this.raws.insensitiveFlag==="i")&&(this.raws.insensitiveFlag=void 0)),this._insensitive=n}},{key:"attribute",get:function(){return this._attribute},set:function(n){this._handleEscapes("attribute",n),this._attribute=n}}]),T})(t.default);e.default=y,y.NO_QUOTE=null,y.SINGLE_QUOTE="'",y.DOUBLE_QUOTE='"';var A=(u={"'":{quotes:"single",wrap:!0},'"':{quotes:"double",wrap:!0}},u[null]={isIdentifier:!0},u);function E(j,T){return""+T.before+j+T.after}})),zo=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=a(Zt()),t=he();function a(l){return l&&l.__esModule?l:{default:l}}function u(l,i){l.prototype=Object.create(i.prototype),l.prototype.constructor=l,s(l,i)}function s(l,i){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},s(l,i)}e.default=(function(l){u(i,l);function i(c){var f=l.call(this,c)||this;return f.type=t.UNIVERSAL,f.value="*",f}return i})(o.default),r.exports=e.default})),No=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=a(Pe()),t=he();function a(l){return l&&l.__esModule?l:{default:l}}function u(l,i){l.prototype=Object.create(i.prototype),l.prototype.constructor=l,s(l,i)}function s(l,i){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},s(l,i)}e.default=(function(l){u(i,l);function i(c){var f=l.call(this,c)||this;return f.type=t.COMBINATOR,f}return i})(o.default),r.exports=e.default})),Po=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=a(Pe()),t=he();function a(l){return l&&l.__esModule?l:{default:l}}function u(l,i){l.prototype=Object.create(i.prototype),l.prototype.constructor=l,s(l,i)}function s(l,i){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,f){return c.__proto__=f,c},s(l,i)}e.default=(function(l){u(i,l);function i(c){var f=l.call(this,c)||this;return f.type=t.NESTING,f.value="&",f}return i})(o.default),r.exports=e.default})),ba=G(((e,r)=>{e.__esModule=!0,e.default=o;function o(t){return t.sort(function(a,u){return a-u})}r.exports=e.default})),Io=G((e=>{e.__esModule=!0,e.ampersand=38,e.asterisk=42,e.at=64,e.comma=44,e.colon=58,e.semicolon=59,e.openParenthesis=40,e.closeParenthesis=41,e.openSquare=91,e.closeSquare=93,e.dollar=36,e.tilde=126,e.caret=94,e.plus=43,e.equals=61,e.pipe=124,e.greaterThan=62,e.space=32;var r=39;e.singleQuote=r,e.doubleQuote=34,e.slash=47,e.bang=33,e.backslash=92,e.cr=13,e.feed=12,e.newline=10,e.tab=9,e.str=r,e.comment=-1,e.word=-2,e.combinator=-3})),ka=G((e=>{e.__esModule=!0,e.default=k;var r=u(Io()),o,t;function a(h){if(typeof WeakMap!="function")return null;var b=new WeakMap,v=new WeakMap;return(a=function(S){return S?v:b})(h)}function u(h,b){if(!b&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=a(b);if(v&&v.has(h))return v.get(h);var S={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in h)if(A!=="default"&&Object.prototype.hasOwnProperty.call(h,A)){var E=y?Object.getOwnPropertyDescriptor(h,A):null;E&&(E.get||E.set)?Object.defineProperty(S,A,E):S[A]=h[A]}return S.default=h,v&&v.set(h,S),S}for(var s=(o={},o[r.tab]=!0,o[r.newline]=!0,o[r.cr]=!0,o[r.feed]=!0,o),l=(t={},t[r.space]=!0,t[r.tab]=!0,t[r.newline]=!0,t[r.cr]=!0,t[r.feed]=!0,t[r.ampersand]=!0,t[r.asterisk]=!0,t[r.bang]=!0,t[r.comma]=!0,t[r.colon]=!0,t[r.semicolon]=!0,t[r.openParenthesis]=!0,t[r.closeParenthesis]=!0,t[r.openSquare]=!0,t[r.closeSquare]=!0,t[r.singleQuote]=!0,t[r.doubleQuote]=!0,t[r.plus]=!0,t[r.pipe]=!0,t[r.tilde]=!0,t[r.greaterThan]=!0,t[r.equals]=!0,t[r.dollar]=!0,t[r.caret]=!0,t[r.slash]=!0,t),i={},c="0123456789abcdefABCDEF",f=0;f<c.length;f++)i[c.charCodeAt(f)]=!0;function m(h,b){var v=b,S;do{if(S=h.charCodeAt(v),l[S])return v-1;S===r.backslash?v=w(h,v)+1:v++}while(v<h.length);return v-1}function w(h,b){var v=b,S=h.charCodeAt(v+1);if(!s[S])if(i[S]){var y=0;do v++,y++,S=h.charCodeAt(v+1);while(i[S]&&y<6);y<6&&S===r.space&&v++}else v++;return v}e.FIELDS={TYPE:0,START_LINE:1,START_COL:2,END_LINE:3,END_COL:4,START_POS:5,END_POS:6};function k(h){var b=[],v=h.css.valueOf(),S=v,y=S.length,A=-1,E=1,j=0,T=0,C,n,p,g,$,x,O,I,_,F,R,ee,pe;function M(K,z){if(h.safe)v+=z,_=v.length-1;else throw h.error("Unclosed "+K,E,j-A,j)}for(;j<y;){switch(C=v.charCodeAt(j),C===r.newline&&(A=j,E+=1),C){case r.space:case r.tab:case r.newline:case r.cr:case r.feed:_=j;do _+=1,C=v.charCodeAt(_),C===r.newline&&(A=_,E+=1);while(C===r.space||C===r.newline||C===r.tab||C===r.cr||C===r.feed);pe=r.space,g=E,p=_-A-1,T=_;break;case r.plus:case r.greaterThan:case r.tilde:case r.pipe:_=j;do _+=1,C=v.charCodeAt(_);while(C===r.plus||C===r.greaterThan||C===r.tilde||C===r.pipe);pe=r.combinator,g=E,p=j-A,T=_;break;case r.asterisk:case r.ampersand:case r.bang:case r.comma:case r.equals:case r.dollar:case r.caret:case r.openSquare:case r.closeSquare:case r.colon:case r.semicolon:case r.openParenthesis:case r.closeParenthesis:_=j,pe=C,g=E,p=j-A,T=_+1;break;case r.singleQuote:case r.doubleQuote:ee=C===r.singleQuote?"'":'"',_=j;do for($=!1,_=v.indexOf(ee,_+1),_===-1&&M("quote",ee),x=_;v.charCodeAt(x-1)===r.backslash;)--x,$=!$;while($);pe=r.str,g=E,p=j-A,T=_+1;break;default:C===r.slash&&v.charCodeAt(j+1)===r.asterisk?(_=v.indexOf("*/",j+2)+1,_===0&&M("comment","*/"),n=v.slice(j,_+1),I=n.split(`
`),O=I.length-1,O>0?(F=E+O,R=_-I[O].length):(F=E,R=A),pe=r.comment,E=F,g=F,p=_-R):C===r.slash?(_=j,pe=C,g=E,p=j-A,T=_+1):(_=m(v,j),pe=r.word,g=E,p=_-A),T=_+1;break}b.push([pe,E,j-A,g,p,j,T]),R&&(R=(A=R,null)),j=T}return b}})),ya=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=C($o()),t=C(So()),a=C(To()),u=C(Ao()),s=C(Eo()),l=C(_o()),i=C(Oo()),c=C(jo()),f=T(Co()),m=C(zo()),w=C(No()),k=C(Po()),h=C(ba()),b=T(ka()),v=T(Io()),S=T(he()),y=bt(),A,E;function j(M){if(typeof WeakMap!="function")return null;var K=new WeakMap,z=new WeakMap;return(j=function(L){return L?z:K})(M)}function T(M,K){if(!K&&M&&M.__esModule)return M;if(M===null||typeof M!="object"&&typeof M!="function")return{default:M};var z=j(K);if(z&&z.has(M))return z.get(M);var L={},Y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in M)if(P!=="default"&&Object.prototype.hasOwnProperty.call(M,P)){var V=Y?Object.getOwnPropertyDescriptor(M,P):null;V&&(V.get||V.set)?Object.defineProperty(L,P,V):L[P]=M[P]}return L.default=M,z&&z.set(M,L),L}function C(M){return M&&M.__esModule?M:{default:M}}function n(M,K){for(var z=0;z<K.length;z++){var L=K[z];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(M,L.key,L)}}function p(M,K,z){return K&&n(M.prototype,K),z&&n(M,z),Object.defineProperty(M,"prototype",{writable:!1}),M}var g=(A={},A[v.space]=!0,A[v.cr]=!0,A[v.feed]=!0,A[v.newline]=!0,A[v.tab]=!0,A),$=Object.assign({},g,(E={},E[v.comment]=!0,E));function x(M){return{line:M[b.FIELDS.START_LINE],column:M[b.FIELDS.START_COL]}}function O(M){return{line:M[b.FIELDS.END_LINE],column:M[b.FIELDS.END_COL]}}function I(M,K,z,L){return{start:{line:M,column:K},end:{line:z,column:L}}}function _(M){return I(M[b.FIELDS.START_LINE],M[b.FIELDS.START_COL],M[b.FIELDS.END_LINE],M[b.FIELDS.END_COL])}function F(M,K){if(M)return I(M[b.FIELDS.START_LINE],M[b.FIELDS.START_COL],K[b.FIELDS.END_LINE],K[b.FIELDS.END_COL])}function R(M,K){var z=M[K];if(typeof z=="string")return z.indexOf("\\")!==-1&&((0,y.ensureObject)(M,"raws"),M[K]=(0,y.unesc)(z),M.raws[K]===void 0&&(M.raws[K]=z)),M}function ee(M,K){for(var z=-1,L=[];(z=M.indexOf(K,z+1))!==-1;)L.push(z);return L}function pe(){var M=Array.prototype.concat.apply([],arguments);return M.filter(function(K,z){return z===M.indexOf(K)})}e.default=(function(){function M(z,L){L===void 0&&(L={}),this.rule=z,this.options=Object.assign({lossy:!1,safe:!1},L),this.position=0,this.css=typeof this.rule=="string"?this.rule:this.rule.selector,this.tokens=(0,b.default)({css:this.css,error:this._errorGenerator(),safe:this.options.safe});var Y=F(this.tokens[0],this.tokens[this.tokens.length-1]);this.root=new o.default({source:Y}),this.root.errorGenerator=this._errorGenerator();var P=new t.default({source:{start:{line:1,column:1}},sourceIndex:0});this.root.append(P),this.current=P,this.loop()}var K=M.prototype;return K._errorGenerator=function(){var z=this;return function(L,Y){return typeof z.rule=="string"?Error(L):z.rule.error(L,Y)}},K.attribute=function(){var z=[],L=this.currToken;for(this.position++;this.position<this.tokens.length&&this.currToken[b.FIELDS.TYPE]!==v.closeSquare;)z.push(this.currToken),this.position++;if(this.currToken[b.FIELDS.TYPE]!==v.closeSquare)return this.expected("closing square bracket",this.currToken[b.FIELDS.START_POS]);var Y=z.length,P={source:I(L[1],L[2],this.currToken[3],this.currToken[4]),sourceIndex:L[b.FIELDS.START_POS]};if(Y===1&&!~[v.word].indexOf(z[0][b.FIELDS.TYPE]))return this.expected("attribute",z[0][b.FIELDS.START_POS]);for(var V=0,J="",X="",U=null,te=!1;V<Y;){var le=z[V],q=this.content(le),oe=z[V+1];switch(le[b.FIELDS.TYPE]){case v.space:if(te=!0,this.options.lossy)break;if(U){(0,y.ensureObject)(P,"spaces",U);var Te=P.spaces[U].after||"";P.spaces[U].after=Te+q;var Se=(0,y.getProp)(P,"raws","spaces",U,"after")||null;Se&&(P.raws.spaces[U].after=Se+q)}else J+=q,X+=q;break;case v.asterisk:oe[b.FIELDS.TYPE]===v.equals?(P.operator=q,U="operator"):(!P.namespace||U==="namespace"&&!te)&&oe&&(J&&(J=((0,y.ensureObject)(P,"spaces","attribute"),P.spaces.attribute.before=J,"")),X&&(X=((0,y.ensureObject)(P,"raws","spaces","attribute"),P.raws.spaces.attribute.before=J,"")),P.namespace=(P.namespace||"")+q,(0,y.getProp)(P,"raws","namespace")&&(P.raws.namespace+=q),U="namespace"),te=!1;break;case v.dollar:if(U==="value"){var ge=(0,y.getProp)(P,"raws","value");P.value+="$",ge&&(P.raws.value=ge+"$");break}case v.caret:oe[b.FIELDS.TYPE]===v.equals&&(P.operator=q,U="operator"),te=!1;break;case v.combinator:if(q==="~"&&oe[b.FIELDS.TYPE]===v.equals&&(P.operator=q,U="operator"),q!=="|"){te=!1;break}oe[b.FIELDS.TYPE]===v.equals?(P.operator=q,U="operator"):!P.namespace&&!P.attribute&&(P.namespace=!0),te=!1;break;case v.word:if(oe&&this.content(oe)==="|"&&z[V+2]&&z[V+2][b.FIELDS.TYPE]!==v.equals&&!P.operator&&!P.namespace)P.namespace=q,U="namespace";else if(!P.attribute||U==="attribute"&&!te)J&&(J=((0,y.ensureObject)(P,"spaces","attribute"),P.spaces.attribute.before=J,"")),X&&(X=((0,y.ensureObject)(P,"raws","spaces","attribute"),P.raws.spaces.attribute.before=X,"")),P.attribute=(P.attribute||"")+q,(0,y.getProp)(P,"raws","attribute")&&(P.raws.attribute+=q),U="attribute";else if(!P.value&&P.value!==""||U==="value"&&!(te||P.quoteMark)){var me=(0,y.unesc)(q),ke=(0,y.getProp)(P,"raws","value")||"",ye=P.value||"";P.value=ye+me,P.quoteMark=null,(me!==q||ke)&&((0,y.ensureObject)(P,"raws"),P.raws.value=(ke||ye)+q),U="value"}else{var Ce=q==="i"||q==="I";(P.value||P.value==="")&&(P.quoteMark||te)?(P.insensitive=Ce,(!Ce||q==="I")&&((0,y.ensureObject)(P,"raws"),P.raws.insensitiveFlag=q),U="insensitive",J&&(J=((0,y.ensureObject)(P,"spaces","insensitive"),P.spaces.insensitive.before=J,"")),X&&(X=((0,y.ensureObject)(P,"raws","spaces","insensitive"),P.raws.spaces.insensitive.before=X,""))):(P.value||P.value==="")&&(U="value",P.value+=q,P.raws.value&&(P.raws.value+=q))}te=!1;break;case v.str:if(!P.attribute||!P.operator)return this.error("Expected an attribute followed by an operator preceding the string.",{index:le[b.FIELDS.START_POS]});var He=(0,f.unescapeValue)(q),xt=He.unescaped,Ze=He.quoteMark;P.value=xt,P.quoteMark=Ze,U="value",(0,y.ensureObject)(P,"raws"),P.raws.value=q,te=!1;break;case v.equals:if(!P.attribute)return this.expected("attribute",le[b.FIELDS.START_POS],q);if(P.value)return this.error('Unexpected "=" found; an operator was already defined.',{index:le[b.FIELDS.START_POS]});P.operator=P.operator?P.operator+q:q,U="operator",te=!1;break;case v.comment:if(U)if(te||oe&&oe[b.FIELDS.TYPE]===v.space||U==="insensitive"){var Do=(0,y.getProp)(P,"spaces",U,"after")||"",Mo=(0,y.getProp)(P,"raws","spaces",U,"after")||Do;(0,y.ensureObject)(P,"raws","spaces",U),P.raws.spaces[U].after=Mo+q}else{var Ko=P[U]||"",Ro=(0,y.getProp)(P,"raws",U)||Ko;(0,y.ensureObject)(P,"raws"),P.raws[U]=Ro+q}else X+=q;break;default:return this.error('Unexpected "'+q+'" found.',{index:le[b.FIELDS.START_POS]})}V++}R(P,"attribute"),R(P,"namespace"),this.newNode(new f.default(P)),this.position++},K.parseWhitespaceEquivalentTokens=function(z){z<0&&(z=this.tokens.length);var L=this.position,Y=[],P="",V=void 0;do if(g[this.currToken[b.FIELDS.TYPE]])this.options.lossy||(P+=this.content());else if(this.currToken[b.FIELDS.TYPE]===v.comment){var J={};P&&(P=(J.before=P,"")),V=new u.default({value:this.content(),source:_(this.currToken),sourceIndex:this.currToken[b.FIELDS.START_POS],spaces:J}),Y.push(V)}while(++this.position<z);if(P){if(V)V.spaces.after=P;else if(!this.options.lossy){var X=this.tokens[L],U=this.tokens[this.position-1];Y.push(new i.default({value:"",source:I(X[b.FIELDS.START_LINE],X[b.FIELDS.START_COL],U[b.FIELDS.END_LINE],U[b.FIELDS.END_COL]),sourceIndex:X[b.FIELDS.START_POS],spaces:{before:P,after:""}}))}}return Y},K.convertWhitespaceNodesToSpace=function(z,L){var Y=this;L===void 0&&(L=!1);var P="",V="";return z.forEach(function(J){var X=Y.lossySpace(J.spaces.before,L),U=Y.lossySpace(J.rawSpaceBefore,L);P+=X+Y.lossySpace(J.spaces.after,L&&X.length===0),V+=X+J.value+Y.lossySpace(J.rawSpaceAfter,L&&U.length===0)}),V===P&&(V=void 0),{space:P,rawSpace:V}},K.isNamedCombinator=function(z){return z===void 0&&(z=this.position),this.tokens[z+0]&&this.tokens[z+0][b.FIELDS.TYPE]===v.slash&&this.tokens[z+1]&&this.tokens[z+1][b.FIELDS.TYPE]===v.word&&this.tokens[z+2]&&this.tokens[z+2][b.FIELDS.TYPE]===v.slash},K.namedCombinator=function(){if(this.isNamedCombinator()){var z=this.content(this.tokens[this.position+1]),L=(0,y.unesc)(z).toLowerCase(),Y={};L!==z&&(Y.value="/"+z+"/");var P=new w.default({value:"/"+L+"/",source:I(this.currToken[b.FIELDS.START_LINE],this.currToken[b.FIELDS.START_COL],this.tokens[this.position+2][b.FIELDS.END_LINE],this.tokens[this.position+2][b.FIELDS.END_COL]),sourceIndex:this.currToken[b.FIELDS.START_POS],raws:Y});return this.position+=3,P}else this.unexpected()},K.combinator=function(){var z=this;if(this.content()==="|")return this.namespace();var L=this.locateNextMeaningfulToken(this.position);if(L<0||this.tokens[L][b.FIELDS.TYPE]===v.comma||this.tokens[L][b.FIELDS.TYPE]===v.closeParenthesis){var Y=this.parseWhitespaceEquivalentTokens(L);if(Y.length>0){var P=this.current.last;if(P){var V=this.convertWhitespaceNodesToSpace(Y),J=V.space,X=V.rawSpace;X!==void 0&&(P.rawSpaceAfter+=X),P.spaces.after+=J}else Y.forEach(function(Ce){return z.newNode(Ce)})}return}var U=this.currToken,te=void 0;L>this.position&&(te=this.parseWhitespaceEquivalentTokens(L));var le;if(this.isNamedCombinator()?le=this.namedCombinator():this.currToken[b.FIELDS.TYPE]===v.combinator?(le=new w.default({value:this.content(),source:_(this.currToken),sourceIndex:this.currToken[b.FIELDS.START_POS]}),this.position++):g[this.currToken[b.FIELDS.TYPE]]||te||this.unexpected(),le){if(te){var q=this.convertWhitespaceNodesToSpace(te),oe=q.space,Te=q.rawSpace;le.spaces.before=oe,le.rawSpaceBefore=Te}}else{var Se=this.convertWhitespaceNodesToSpace(te,!0),ge=Se.space,me=Se.rawSpace;me||(me=ge);var ke={},ye={spaces:{}};ge.endsWith(" ")&&me.endsWith(" ")?(ke.before=ge.slice(0,ge.length-1),ye.spaces.before=me.slice(0,me.length-1)):ge.startsWith(" ")&&me.startsWith(" ")?(ke.after=ge.slice(1),ye.spaces.after=me.slice(1)):ye.value=me,le=new w.default({value:" ",source:F(U,this.tokens[this.position-1]),sourceIndex:U[b.FIELDS.START_POS],spaces:ke,raws:ye})}return this.currToken&&this.currToken[b.FIELDS.TYPE]===v.space&&(le.spaces.after=this.optionalSpace(this.content()),this.position++),this.newNode(le)},K.comma=function(){if(this.position===this.tokens.length-1){this.root.trailingComma=!0,this.position++;return}this.current._inferEndPosition();var z=new t.default({source:{start:x(this.tokens[this.position+1])},sourceIndex:this.tokens[this.position+1][b.FIELDS.START_POS]});this.current.parent.append(z),this.current=z,this.position++},K.comment=function(){var z=this.currToken;this.newNode(new u.default({value:this.content(),source:_(z),sourceIndex:z[b.FIELDS.START_POS]})),this.position++},K.error=function(z,L){throw this.root.error(z,L)},K.missingBackslash=function(){return this.error("Expected a backslash preceding the semicolon.",{index:this.currToken[b.FIELDS.START_POS]})},K.missingParenthesis=function(){return this.expected("opening parenthesis",this.currToken[b.FIELDS.START_POS])},K.missingSquareBracket=function(){return this.expected("opening square bracket",this.currToken[b.FIELDS.START_POS])},K.unexpected=function(){return this.error("Unexpected '"+this.content()+"'. Escaping special characters with \\ may help.",this.currToken[b.FIELDS.START_POS])},K.unexpectedPipe=function(){return this.error("Unexpected '|'.",this.currToken[b.FIELDS.START_POS])},K.namespace=function(){var z=this.prevToken&&this.content(this.prevToken)||!0;if(this.nextToken[b.FIELDS.TYPE]===v.word)return this.position++,this.word(z);if(this.nextToken[b.FIELDS.TYPE]===v.asterisk)return this.position++,this.universal(z);this.unexpectedPipe()},K.nesting=function(){if(this.nextToken&&this.content(this.nextToken)==="|"){this.position++;return}var z=this.currToken;this.newNode(new k.default({value:this.content(),source:_(z),sourceIndex:z[b.FIELDS.START_POS]})),this.position++},K.parentheses=function(){var z=this.current.last,L=1;if(this.position++,z&&z.type===S.PSEUDO){var Y=new t.default({source:{start:x(this.tokens[this.position])},sourceIndex:this.tokens[this.position][b.FIELDS.START_POS]}),P=this.current;for(z.append(Y),this.current=Y;this.position<this.tokens.length&&L;)this.currToken[b.FIELDS.TYPE]===v.openParenthesis&&L++,this.currToken[b.FIELDS.TYPE]===v.closeParenthesis&&L--,L?this.parse():(this.current.source.end=O(this.currToken),this.current.parent.source.end=O(this.currToken),this.position++);this.current=P}else{for(var V=this.currToken,J="(",X;this.position<this.tokens.length&&L;)this.currToken[b.FIELDS.TYPE]===v.openParenthesis&&L++,this.currToken[b.FIELDS.TYPE]===v.closeParenthesis&&L--,X=this.currToken,J+=this.parseParenthesisToken(this.currToken),this.position++;z?z.appendToPropertyAndEscape("value",J,J):this.newNode(new i.default({value:J,source:I(V[b.FIELDS.START_LINE],V[b.FIELDS.START_COL],X[b.FIELDS.END_LINE],X[b.FIELDS.END_COL]),sourceIndex:V[b.FIELDS.START_POS]}))}if(L)return this.expected("closing parenthesis",this.currToken[b.FIELDS.START_POS])},K.pseudo=function(){for(var z=this,L="",Y=this.currToken;this.currToken&&this.currToken[b.FIELDS.TYPE]===v.colon;)L+=this.content(),this.position++;if(!this.currToken)return this.expected(["pseudo-class","pseudo-element"],this.position-1);if(this.currToken[b.FIELDS.TYPE]===v.word)this.splitWord(!1,function(P,V){L+=P,z.newNode(new c.default({value:L,source:F(Y,z.currToken),sourceIndex:Y[b.FIELDS.START_POS]})),V>1&&z.nextToken&&z.nextToken[b.FIELDS.TYPE]===v.openParenthesis&&z.error("Misplaced parenthesis.",{index:z.nextToken[b.FIELDS.START_POS]})});else return this.expected(["pseudo-class","pseudo-element"],this.currToken[b.FIELDS.START_POS])},K.space=function(){var z=this.content();this.position===0||this.prevToken[b.FIELDS.TYPE]===v.comma||this.prevToken[b.FIELDS.TYPE]===v.openParenthesis||this.current.nodes.every(function(L){return L.type==="comment"})?(this.spaces=this.optionalSpace(z),this.position++):this.position===this.tokens.length-1||this.nextToken[b.FIELDS.TYPE]===v.comma||this.nextToken[b.FIELDS.TYPE]===v.closeParenthesis?(this.current.last.spaces.after=this.optionalSpace(z),this.position++):this.combinator()},K.string=function(){var z=this.currToken;this.newNode(new i.default({value:this.content(),source:_(z),sourceIndex:z[b.FIELDS.START_POS]})),this.position++},K.universal=function(z){var L=this.nextToken;if(L&&this.content(L)==="|")return this.position++,this.namespace();var Y=this.currToken;this.newNode(new m.default({value:this.content(),source:_(Y),sourceIndex:Y[b.FIELDS.START_POS]}),z),this.position++},K.splitWord=function(z,L){for(var Y=this,P=this.nextToken,V=this.content();P&&~[v.dollar,v.caret,v.equals,v.word].indexOf(P[b.FIELDS.TYPE]);){this.position++;var J=this.content();if(V+=J,J.lastIndexOf("\\")===J.length-1){var X=this.nextToken;X&&X[b.FIELDS.TYPE]===v.space&&(V+=this.requiredSpace(this.content(X)),this.position++)}P=this.nextToken}var U=ee(V,".").filter(function(oe){var Te=V[oe-1]==="\\",Se=/^\d+\.\d+%$/.test(V);return!Te&&!Se}),te=ee(V,"#").filter(function(oe){return V[oe-1]!=="\\"}),le=ee(V,"#{");le.length&&(te=te.filter(function(oe){return!~le.indexOf(oe)}));var q=(0,h.default)(pe([0].concat(U,te)));q.forEach(function(oe,Te){var Se=q[Te+1]||V.length,ge=V.slice(oe,Se);if(Te===0&&L)return L.call(Y,ge,q.length);var me,ke=Y.currToken,ye=ke[b.FIELDS.START_POS]+q[Te],Ce=I(ke[1],ke[2]+oe,ke[3],ke[2]+(Se-1));if(~U.indexOf(oe)){var He={value:ge.slice(1),source:Ce,sourceIndex:ye};me=new a.default(R(He,"value"))}else if(~te.indexOf(oe)){var xt={value:ge.slice(1),source:Ce,sourceIndex:ye};me=new s.default(R(xt,"value"))}else{var Ze={value:ge,source:Ce,sourceIndex:ye};R(Ze,"value"),me=new l.default(Ze)}Y.newNode(me,z),z=null}),this.position++},K.word=function(z){var L=this.nextToken;return L&&this.content(L)==="|"?(this.position++,this.namespace()):this.splitWord(z)},K.loop=function(){for(;this.position<this.tokens.length;)this.parse(!0);return this.current._inferEndPosition(),this.root},K.parse=function(z){switch(this.currToken[b.FIELDS.TYPE]){case v.space:this.space();break;case v.comment:this.comment();break;case v.openParenthesis:this.parentheses();break;case v.closeParenthesis:z&&this.missingParenthesis();break;case v.openSquare:this.attribute();break;case v.dollar:case v.caret:case v.equals:case v.word:this.word();break;case v.colon:this.pseudo();break;case v.comma:this.comma();break;case v.asterisk:this.universal();break;case v.ampersand:this.nesting();break;case v.slash:case v.combinator:this.combinator();break;case v.str:this.string();break;case v.closeSquare:this.missingSquareBracket();case v.semicolon:this.missingBackslash();default:this.unexpected()}},K.expected=function(z,L,Y){if(Array.isArray(z)){var P=z.pop();z=z.join(", ")+" or "+P}var V=/^[aeiou]/.test(z[0])?"an":"a";return Y?this.error("Expected "+V+" "+z+', found "'+Y+'" instead.',{index:L}):this.error("Expected "+V+" "+z+".",{index:L})},K.requiredSpace=function(z){return this.options.lossy?" ":z},K.optionalSpace=function(z){return this.options.lossy?"":z},K.lossySpace=function(z,L){return this.options.lossy?L?" ":"":z},K.parseParenthesisToken=function(z){var L=this.content(z);return z[b.FIELDS.TYPE]===v.space?this.requiredSpace(L):L},K.newNode=function(z,L){return L&&(/^ +$/.test(L)&&(this.options.lossy||(this.spaces=(this.spaces||"")+L),L=!0),z.namespace=L,R(z,"namespace")),this.spaces&&(this.spaces=(z.spaces.before=this.spaces,"")),this.current.append(z)},K.content=function(z){return z===void 0&&(z=this.currToken),this.css.slice(z[b.FIELDS.START_POS],z[b.FIELDS.END_POS])},K.locateNextMeaningfulToken=function(z){z===void 0&&(z=this.position+1);for(var L=z;L<this.tokens.length;)if($[this.tokens[L][b.FIELDS.TYPE]]){L++;continue}else return L;return-1},p(M,[{key:"currToken",get:function(){return this.tokens[this.position]}},{key:"nextToken",get:function(){return this.tokens[this.position+1]}},{key:"prevToken",get:function(){return this.tokens[this.position-1]}}]),M})(),r.exports=e.default})),xa=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=t(ya());function t(a){return a&&a.__esModule?a:{default:a}}e.default=(function(){function a(s,l){this.func=s||function(){},this.funcRes=null,this.options=l}var u=a.prototype;return u._shouldUpdateSelector=function(s,l){return l===void 0&&(l={}),Object.assign({},this.options,l).updateSelector===!1?!1:typeof s!="string"},u._isLossy=function(s){return s===void 0&&(s={}),Object.assign({},this.options,s).lossless===!1},u._root=function(s,l){return l===void 0&&(l={}),new o.default(s,this._parseOptions(l)).root},u._parseOptions=function(s){return{lossy:this._isLossy(s)}},u._run=function(s,l){var i=this;return l===void 0&&(l={}),new Promise(function(c,f){try{var m=i._root(s,l);Promise.resolve(i.func(m)).then(function(w){var k=void 0;return i._shouldUpdateSelector(s,l)&&(k=m.toString(),s.selector=k),{transform:w,root:m,string:k}}).then(c,f)}catch(w){f(w);return}})},u._runSync=function(s,l){l===void 0&&(l={});var i=this._root(s,l),c=this.func(i);if(c&&typeof c.then=="function")throw Error("Selector processor returned a promise to a synchronous call.");var f=void 0;return l.updateSelector&&typeof s!="string"&&(f=i.toString(),s.selector=f),{transform:c,root:i,string:f}},u.ast=function(s,l){return this._run(s,l).then(function(i){return i.root})},u.astSync=function(s,l){return this._runSync(s,l).root},u.transform=function(s,l){return this._run(s,l).then(function(i){return i.transform})},u.transformSync=function(s,l){return this._runSync(s,l).transform},u.process=function(s,l){return this._run(s,l).then(function(i){return i.string||i.root.toString()})},u.processSync=function(s,l){var i=this._runSync(s,l);return i.string||i.root.toString()},a})(),r.exports=e.default})),$a=G((e=>{e.__esModule=!0;var r=k(Co()),o=k(To()),t=k(No()),a=k(Ao()),u=k(Eo()),s=k(Po()),l=k(jo()),i=k($o()),c=k(So()),f=k(Oo()),m=k(_o()),w=k(zo());function k(h){return h&&h.__esModule?h:{default:h}}e.attribute=function(h){return new r.default(h)},e.className=function(h){return new o.default(h)},e.combinator=function(h){return new t.default(h)},e.comment=function(h){return new a.default(h)},e.id=function(h){return new u.default(h)},e.nesting=function(h){return new s.default(h)},e.pseudo=function(h){return new l.default(h)},e.root=function(h){return new i.default(h)},e.selector=function(h){return new c.default(h)},e.string=function(h){return new f.default(h)},e.tag=function(h){return new m.default(h)},e.universal=function(h){return new w.default(h)}})),Sa=G((e=>{e.__esModule=!0,e.isContainer=m,e.isNamespace=w,e.isNode=a,e.isPseudoClass=f,e.isPseudoElement=c;var r=he(),o,t=(o={},o[r.ATTRIBUTE]=!0,o[r.CLASS]=!0,o[r.COMBINATOR]=!0,o[r.COMMENT]=!0,o[r.ID]=!0,o[r.NESTING]=!0,o[r.PSEUDO]=!0,o[r.ROOT]=!0,o[r.SELECTOR]=!0,o[r.STRING]=!0,o[r.TAG]=!0,o[r.UNIVERSAL]=!0,o);function a(k){return typeof k=="object"&&t[k.type]}function u(k,h){return a(h)&&h.type===k}var s=u.bind(null,r.ATTRIBUTE);e.isAttribute=s,e.isClassName=u.bind(null,r.CLASS),e.isCombinator=u.bind(null,r.COMBINATOR),e.isComment=u.bind(null,r.COMMENT),e.isIdentifier=u.bind(null,r.ID),e.isNesting=u.bind(null,r.NESTING);var l=u.bind(null,r.PSEUDO);e.isPseudo=l,e.isRoot=u.bind(null,r.ROOT),e.isSelector=u.bind(null,r.SELECTOR),e.isString=u.bind(null,r.STRING);var i=u.bind(null,r.TAG);e.isTag=i,e.isUniversal=u.bind(null,r.UNIVERSAL);function c(k){return l(k)&&k.value&&(k.value.startsWith("::")||k.value.toLowerCase()===":before"||k.value.toLowerCase()===":after"||k.value.toLowerCase()===":first-letter"||k.value.toLowerCase()===":first-line")}function f(k){return l(k)&&!c(k)}function m(k){return!!(a(k)&&k.walk)}function w(k){return s(k)||i(k)}})),Ta=G((e=>{e.__esModule=!0;var r=he();Object.keys(r).forEach(function(a){a==="default"||a==="__esModule"||a in e&&e[a]===r[a]||(e[a]=r[a])});var o=$a();Object.keys(o).forEach(function(a){a==="default"||a==="__esModule"||a in e&&e[a]===o[a]||(e[a]=o[a])});var t=Sa();Object.keys(t).forEach(function(a){a==="default"||a==="__esModule"||a in e&&e[a]===t[a]||(e[a]=t[a])})})),Fo=G(((e,r)=>{e.__esModule=!0,e.default=void 0;var o=s(xa()),t=u(Ta());function a(i){if(typeof WeakMap!="function")return null;var c=new WeakMap,f=new WeakMap;return(a=function(m){return m?f:c})(i)}function u(i,c){if(!c&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var f=a(c);if(f&&f.has(i))return f.get(i);var m={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in i)if(k!=="default"&&Object.prototype.hasOwnProperty.call(i,k)){var h=w?Object.getOwnPropertyDescriptor(i,k):null;h&&(h.get||h.set)?Object.defineProperty(m,k,h):m[k]=i[k]}return m.default=i,f&&f.set(i,m),m}function s(i){return i&&i.__esModule?i:{default:i}}var l=function(i){return new o.default(i)};Object.assign(l,t),delete l.__esModule,e.default=l,r.exports=e.default})),Aa=tr(G(((e,r)=>{var{AtRule:o,Rule:t}=Qo(),a=Fo();function u(E,j){let T;try{a(C=>{T=C}).processSync(E)}catch(C){throw E.includes(":")?j?j.error("Missed semicolon"):C:j?j.error(C.message):C}return T.at(0)}function s(E,j){let T=!1;return E.each(C=>{if(C.type==="nesting"){let n=j.clone({});C.value==="&"?C.replaceWith(n):C.replaceWith(u(C.value.replace("&",n.toString()))),T=!0}else"nodes"in C&&C.nodes&&s(C,j)&&(T=!0)}),T}function l(E,j){let T=[];for(let C of E.selectors){let n=u(C,E);for(let p of j.selectors){if(!p)continue;let g=u(p,j);s(g,n)||(g.prepend(a.combinator({value:" "})),g.prepend(n.clone({}))),T.push(g.toString())}}return T}function i(E,j){var C;if(((C=E.prev())==null?void 0:C.type)!=="comment")return j.after(E),E;let T=E.prev();return E.parent.toString().match(/[*]\/ *\n.*{/)?j.after(E).after(T):j.after(E),E}function c(E){return function j(T,C,n,p=n){let g=[];if(C.each($=>{$.type==="rule"&&n?p&&($.selectors=l(T,$)):$.type==="atrule"&&$.nodes?E[$.name]?j(T,$,p):C[v]!==!1&&g.push($):g.push($)}),n&&g.length){let $=T.clone({nodes:[]});for(let x of g)$.append(x);C.prepend($)}}}function f(E,j,T){let C=new t({nodes:[],selector:E});return C.append(j),T.after(C),C}function m(E,j,T,C=!0){return j.length?(T=f(E,j,T),C&&(j=[]),[T,j]):[T,j]}function w(E,j=""){let T=E.concat(j),C={};for(let n of T)C[n.replace(/^@/,"")]=!0;return C}function k(E){E=E.trim();let j=E.match(/^\((.*)\)$/);if(!j)return{selector:E,type:"basic"};let T=j[1].match(/^(with(?:out)?):(.+)$/);if(T){let C=T[1]==="with",n=Object.fromEntries(T[2].trim().split(/\s+/).map(g=>[g,!0]));if(C&&n.all)return{type:"noop"};let p=g=>!!n[g];return n.all?p=()=>!0:C&&(p=g=>g==="all"?!1:!n[g]),{escapes:p,type:"withrules"}}return{type:"unknown"}}function h(E){let j=[],T=E.parent;for(;T&&T instanceof o;)j.push(T),T=T.parent;return j}function b(E){let j=E[S];if(!j)E.after(E.nodes);else{let T=E.nodes,C,n=-1,p,g,$,x=h(E);if(x.forEach((O,I)=>{if(j(O.name))C=O,n=I,g=$;else{let _=$;$=O.clone({nodes:[]}),_&&$.append(_),p||(p=$)}}),C?g?(p.append(T),C.after(g)):C.after(T):E.after(T),E.next()&&C){let O;x.slice(0,n+1).forEach((I,_,F)=>{let R=O;O=I.clone({nodes:[]}),R&&O.append(R);let ee=[],pe=(F[_-1]||E).next();for(;pe;)ee.push(pe),pe=pe.next();O.append(ee)}),O&&(g||T[T.length-1]).after(O)}}E.remove()}var v=Symbol("rootRuleMergeSel"),S=Symbol("rootRuleEscapes");function y(E){let{params:j}=E,{escapes:T,selector:C,type:n}=k(j);if(n==="unknown")throw E.error(`Unknown @${E.name} parameter ${JSON.stringify(j)}`);if(n==="basic"&&C){let p=new t({nodes:E.nodes,selector:C});E.removeAll(),E.append(p)}E[S]=T,E[v]=T?!T("all"):n==="noop"}var A=Symbol("hasRootRule");r.exports=(E={})=>{let j=w(["media","supports","layer","container","starting-style"],E.bubble),T=c(j),C=w(["document","font-face","keyframes","-webkit-keyframes","-moz-keyframes"],E.unwrap),n=(E.rootRuleName||"at-root").replace(/^@/,""),p=E.preserveEmpty;return{Once(g){g.walkAtRules(n,$=>{y($),g[A]=!0})},postcssPlugin:"postcss-nested",RootExit(g){g[A]&&(g.walkAtRules(n,b),g[A]=!1)},Rule(g){let $=!1,x=g,O=!1,I=[];g.each(_=>{switch(_.type){case"atrule":[x,I]=m(g.selector,I,x),_.name===n?($=!0,T(g,_,!0,_[v]),x=i(_,x)):j[_.name]?(O=!0,$=!0,T(g,_,!0),x=i(_,x)):C[_.name]?(O=!0,$=!0,T(g,_,!1),x=i(_,x)):O&&I.push(_);break;case"decl":O&&I.push(_);break;case"rule":[x,I]=m(g.selector,I,x),O=!0,$=!0,_.selectors=l(g,_),x=i(_,x);break}}),m(g.selector,I,x,!1),$&&p!==!0&&(g.raws.semicolon=!0,g.nodes.length===0&&g.remove())}}},r.exports.postcss=!0}))());async function Ea({entrypoint:e="/main.css",volume:r={},...o}={}){return o={entrypoint:e,volume:r,...o},{css:(await Yo().use((0,Aa.default)()).process(o.volume[o.entrypoint],{from:o.entrypoint,parser:o.parser||null})).css}}export{ca as a,sa as i,Fo as n,ma as r,Ea as t};
