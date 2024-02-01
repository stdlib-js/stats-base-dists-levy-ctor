// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(o):t(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):o.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,m,"$1e"),t=p.call(t,b,"e"),t=p.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,v,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,h,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function N(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function A(r,n,e){var t=n-r.length;return t<0?r:r=e?r+N(t):N(t)+r}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function U(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function j(r){var n,e,t,o,a,f,s,l,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(n=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),e=t.flags,p=0;p<e.length;p++)switch(o=e.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!E(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(a)?String(t.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=w(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function T(r){var n,e,t,i;for(e=[],i=0,t=I.exec(r);t;)(n=r.slice(i,I.lastIndex-t[0].length)).length&&e.push(n),e.push(x(t)),i=I.lastIndex,t=I.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function k(r){return"string"==typeof r}function F(r){var n,e,t;if(!k(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=T(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return j.apply(null,e)}var O=Object.prototype,V=O.toString,P=O.__defineGetter__,$=O.__defineSetter__,G=O.__lookupGetter__,L=O.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(G.call(r,n)||L.call(r,n)?(t=r.__proto__,r.__proto__=O,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,n,e.get),a&&$&&$.call(r,n,e.set),r};function W(r,n,e){H(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function C(r,n,e){H(r,n,{configurable:!1,enumerable:!1,get:e})}function M(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return R&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,X=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",B=Z()?function(r){var n,e,t,i,o;if(null==r)return q.call(r);e=r[z],o=z,n=null!=(i=r)&&X.call(i,o);try{r[z]=void 0}catch(n){return q.call(r)}return t=q.call(r),n?r[z]=e:delete r[z],t}:function(r){return q.call(r)},D=Number,J=D.prototype.toString,K=Z();function Q(r){return"object"==typeof r&&(r instanceof D||(K?function(r){try{return J.call(r),!0}catch(r){return!1}}(r):"[object Number]"===B(r)))}function rr(r){return M(r)||Q(r)}function nr(r){return M(r)&&r>0}function er(r){return Q(r)&&r.valueOf()>0}function tr(r){return nr(r)||er(r)}function ir(r){return r!=r}function or(r){return M(r)&&ir(r)}function ar(r){return Q(r)&&ir(r.valueOf())}function ur(r){return or(r)||ar(r)}W(rr,"isPrimitive",M),W(rr,"isObject",Q),W(tr,"isPrimitive",nr),W(tr,"isObject",er),W(ur,"isPrimitive",or),W(ur,"isObject",ar);var cr,fr="function"==typeof Uint32Array,sr="function"==typeof Uint32Array?Uint32Array:null,lr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,n,e;if("function"!=typeof sr)return!1;try{n=new sr(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(fr&&e instanceof Uint32Array||"[object Uint32Array]"===B(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr=cr,vr="function"==typeof Float64Array,gr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;pr=function(){var r,n,e;if("function"!=typeof gr)return!1;try{n=new gr([1,3.14,-3.14,NaN]),e=n,r=(vr&&e instanceof Float64Array||"[object Float64Array]"===B(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var dr,br=pr,mr="function"==typeof Uint8Array,wr="function"==typeof Uint8Array?Uint8Array:null,Nr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,n,e;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,256,257]),e=n,r=(mr&&e instanceof Uint8Array||"[object Uint8Array]"===B(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar,_r=dr,Er="function"==typeof Uint16Array,Sr="function"==typeof Uint16Array?Uint16Array:null,Ur="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,n,e;if("function"!=typeof Sr)return!1;try{n=new Sr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(Er&&e instanceof Uint16Array||"[object Uint16Array]"===B(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var jr,Ir={uint16:Ar,uint8:_r};(jr=new Ir.uint16(1))[0]=4660;var xr=52===new Ir.uint8(jr.buffer)[0],Tr=!0===xr?1:0,kr=new br(1),Fr=new yr(kr.buffer);function Or(r){return kr[0]=r,Fr[Tr]}var Vr=!0===xr?1:0,Pr=new br(1),$r=new yr(Pr.buffer);function Gr(r,n){return Pr[0]=r,$r[Vr]=n>>>0,Pr[0]}var Lr=1023,Hr=D.NEGATIVE_INFINITY,Wr=.6931471803691238,Cr=1.9082149292705877e-10,Mr=1048575;function Rr(r){var n,e,t,i,o,a,u,c,f,s,l,p;return 0===r?Hr:ir(r)||r<0?NaN:(o=0,(e=Or(r))<1048576&&(o-=54,e=Or(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-Lr|0,o+=(c=614244+(e&=Mr)&1048576|0)>>20|0,u=(r=Gr(r,e|1072693248^c))-1,(Mr&2+e)<3?0===u?0===o?0:o*Wr+o*Cr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Wr-(a-o*Cr-u)):(c=e-398458|0,f=440401-e|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=t+i,(c|=f)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*Wr-(n-(s*(n+a)+o*Cr)-u)):0===o?u-s*(u-a):o*Wr-(s*(u-a)-o*Cr-u))))}var Zr=Number.POSITIVE_INFINITY,qr=Math.sqrt;function Xr(r){var n,e,t,i;return ir(r)?NaN:0===r?Zr:2===r?Hr:1===r?0:r>2||r<0?NaN:(r>1?(n=-1,e=2-r):(n=1,e=r),(r=1-e)<=.5?(t=r*(r+10),i=function(r){var n,e;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(n=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,e=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),e=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/e)}(r),n*(.08913147449493408*t+t*i)):e>=.25?(t=qr(-2*Rr(e)),i=function(r){var n,e;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(n=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,e=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,e=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/e)}(e-=.25),n*(t/(2.249481201171875+i))):(e=qr(-Rr(e)))<3?(i=function(r){var n,e;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(n=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,e=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(n=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,e=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),n/e)}(e-1.125),n*(.807220458984375*e+i*e)):e<6?(i=function(r){var n,e;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(n=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,e=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(n=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),e=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),n/e)}(e-3),n*(.9399557113647461*e+i*e)):(i=function(r){var n,e;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(n=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,e=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(n=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),e=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),n/e)}(e-6),n*(.9836282730102539*e+i*e)))}var Yr,zr,Br=Math.floor;function Dr(r){return Br(r)===r}function Jr(r){return Dr(r/2)}function Kr(r){return Jr(r>0?r-1:r+1)}function Qr(r){return r===Zr||r===Hr}function rn(r){return Math.abs(r)}!0===xr?(Yr=1,zr=0):(Yr=0,zr=1);var nn={HIGH:Yr,LOW:zr},en=new br(1),tn=new yr(en.buffer),on=nn.HIGH,an=nn.LOW;function un(r,n,e,t){return en[0]=r,n[t]=tn[on],n[t+e]=tn[an],n}function cn(r){return un(r,[0,0],1,0)}W(cn,"assign",un);var fn=!0===xr?0:1,sn=new br(1),ln=new yr(sn.buffer);function pn(r,n){return sn[0]=r,ln[fn]=n>>>0,sn[0]}function yn(r){return 0|r}var vn,gn,hn=2147483647;!0===xr?(vn=1,gn=0):(vn=0,gn=1);var dn={HIGH:vn,LOW:gn},bn=new br(1),mn=new yr(bn.buffer),wn=dn.HIGH,Nn=dn.LOW;function An(r,n){return mn[wn]=r,mn[Nn]=n,bn[0]}var _n=[0,0];function En(r,n){var e,t;return cn.assign(r,_n,1,0),e=_n[0],e&=hn,t=Or(n),An(e|=t&=2147483648,_n[1])}var Sn=1048576,Un=[1,1.5],jn=[0,.5849624872207642],In=[0,1.350039202129749e-8];function xn(r,n,e,t){return ir(r)||Qr(r)?(n[t]=r,n[t+e]=0,n):0!==r&&rn(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}W((function(r){return xn(r,[0,0],1,0)}),"assign",xn);var Tn=[0,0],kn=[0,0];function Fn(r,n){var e,t;return 0===n||0===r||ir(r)||Qr(r)?r:(xn(r,Tn,1,0),n+=Tn[1],n+=function(r){var n=Or(r);return(n=(2146435072&n)>>>20)-Lr|0}(r=Tn[0]),n<-1074?En(0,r):n>1023?r<0?Hr:Zr:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,cn.assign(r,kn,1,0),e=kn[0],e&=2148532223,t*An(e|=n+Lr<<20,kn[1])))}var On=1048575,Vn=1048576,Pn=1083179008,$n=1e300,Gn=1e-300,Ln=[0,0],Hn=[0,0];function Wn(r,n){var e,t,i,o,a,u,c,f,s,l,p,y,v,g;if(ir(r)||ir(n))return NaN;if(cn.assign(n,Ln,1,0),a=Ln[0],0===Ln[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return qr(r);if(-.5===n)return 1/qr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Qr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:rn(r)<1==(n===Zr)?0:Zr}(r,n)}if(cn.assign(r,Ln,1,0),o=Ln[0],0===Ln[1]){if(0===o)return function(r,n){return n===Hr?Zr:n===Zr?0:n>0?Kr(n)?r:0:Kr(n)?En(Zr,r):Zr}(r,n);if(1===r)return 1;if(-1===r&&Kr(n))return-1;if(Qr(r))return r===Hr?Wn(-0,-n):n<0?0:Zr}if(r<0&&!1===Dr(n))return(r-r)/(r-r);if(i=rn(r),e=o&hn|0,t=a&hn|0,c=a>>>31|0,u=(u=o>>>31|0)&&Kr(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(Or(r)&hn)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===c?u*$n*$n:u*Gn*Gn;if(e>1072693248)return 0===c?u*$n*$n:u*Gn*Gn;p=function(r,n){var e,t,i,o,a,u;return e=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=pn(t=(o=1.4426950216293335*i)+a,0))-o),r[0]=t,r[1]=e,r}(Hn,i)}else p=function(r,n,e){var t,i,o,a,u,c,f,s,l,p,y,v,g,h,d,b,m,w,N,A,_;return w=0,e<Sn&&(w-=53,e=Or(n*=9007199254740992)),w+=(e>>20)-Lr|0,e=1072693248|(N=1048575&e|0),N<=235662?A=0:N<767610?A=1:(A=0,w+=1,e-=Sn),a=pn(i=(b=(n=Gr(n,e))-(f=Un[A]))*(m=1/(n+f)),0),t=524288+(e>>1|536870912),c=Gr(0,t+=A<<18),d=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=pn(c=3+(o=a*a)+(d+=(u=m*(b-a*c-a*(n-(c-f))))*(a+i)),0),g=(y=-7.028461650952758e-9*(l=pn(l=(b=a*c)+(m=u*c+(d-(c-3-o))*i),0))+.9617966939259756*(m-(l-b))+In[A])-((v=pn(v=(p=.9617967009544373*l)+y+(s=jn[A])+(h=w),0))-h-s-p),r[0]=v,r[1]=g,r}(Hn,i,e);if(y=(l=(n-(f=pn(n,0)))*p[0]+n*p[1])+(s=f*p[0]),cn.assign(y,Ln,1,0),v=yn(Ln[0]),g=yn(Ln[1]),v>=Pn){if(0!=(v-Pn|g))return u*$n*$n;if(l+8008566259537294e-32>y-s)return u*$n*$n}else if((v&hn)>=1083231232){if(0!=(v-3230714880|g))return u*Gn*Gn;if(l<=y-s)return u*Gn*Gn}return y=function(r,n,e){var t,i,o,a,u,c,f,s,l,p;return l=((s=r&hn|0)>>20)-Lr|0,f=0,s>1071644672&&(i=Gr(0,((f=r+(Vn>>l+1)>>>0)&~(On>>(l=((f&hn)>>20)-Lr|0)))>>>0),f=(f&On|Vn)>>20-l>>>0,r<0&&(f=-f),n-=i),r=yn(r=Or(c=1-((c=(o=.6931471824645996*(i=pn(i=e+n,0)))+(a=.6931471805599453*(e-(i-n))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Fn(c,f):Gr(c,r)}(v,s,l),u*y}var Cn=2*Wn(Xr(.5),2),Mn=Math.ceil;function Rn(r){return r<0?Mn(r):Br(r)}var Zn=1.4426950408889634,qn=1/(1<<28);function Xn(r){var n;return ir(r)||r===Zr?r:r===Hr?0:r>709.782712893384?Zr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<qn?1+r:function(r,n,e){var t,i,o,a;return Fn(1-(n-(t=r-n)*(o=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),e)}(r-.6931471803691238*(n=Rn(r<0?Zn*r-.5:Zn*r+.5)),1.9082149292705877e-10*n,n)}var Yn=.8450629115104675;function zn(r){var n,e,t,i,o,a,u,c;if(ir(r))return NaN;if(r===Zr)return 0;if(r===Hr)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<13877787807814457e-33?1-r:(i=.12837916709551256+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),o=1+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),a=i/o,r<.25?1-(r+r*a):(i=r*a,.5-(i+=r-.5)));if(e<1.25)return u=(o=e-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(o)-.0023621185607526594,c=1+o*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(o),n?1+Yn+u/c:1-Yn-u/c;if(e<28){if(o=1/(e*e),e<2.857142857142857)i=o*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(o)-.009864944034847148,o=1+o*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(o);else{if(r<-6)return 2;i=o*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(o)-.0098649429247001,o=1+o*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(o)}return i=Xn(-(t=pn(e,0))*t-.5625)*Xn((t-e)*(t+e)+i/o),n?2-i/e:i/e}return n?2:0}function Bn(r,n,e){return ir(r)||ir(n)||ir(e)||e<=0?NaN:r<n?0:zn(qr(e/(2*(r-n))))}function Dn(r){return function(){return r}}function Jn(r,n,e){return ir(r)||ir(n)||ir(e)||e<=0?NaN:r<n?Hr:Rr(zn(qr(e/(2*(r-n)))))}W(Bn,"factory",(function(r,n){return ir(r)||ir(n)||n<=0?Dn(NaN):function(e){return ir(e)?NaN:e<r?0:zn(qr(n/(2*(e-r))))}})),W(Jn,"factory",(function(r,n){return ir(r)||ir(n)||n<=0?Dn(NaN):function(e){return ir(e)?NaN:e<r?Hr:Rr(zn(qr(n/(2*(e-r)))))}}));var Kn=1.8378770664093456;function Qn(r,n,e){var t;return ir(r)||ir(n)||ir(e)||e<=0?NaN:r<=n?Hr:(t=r-n,.5*(Rr(e)-Kn-e/t-3*Rr(t)))}W(Qn,"factory",(function(r,n){return ir(r)||ir(n)||n<=0?Dn(NaN):function(e){var t;return ir(e)?NaN:e<=r?Hr:(t=e-r,.5*(Rr(n)-Kn-n/t-3*Rr(t)))}}));var re=6.283185307179586;function ne(r,n,e){return ir(r)||ir(n)||ir(e)||e<=0?NaN:r<=n?0:qr(e/re)*Xn(-e/(2*(r-n)))/Wn(r-n,1.5)}function ee(r,n,e){var t;return ir(n)||ir(e)||ir(r)||e<=0||r<0||r>1?NaN:n+e/(2*(t=Xr(r))*t)}function te(){var r,n;if(!(this instanceof te))return 0===arguments.length?new te:new te(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!M(r=arguments[0])||ur(r))throw new TypeError(F("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!nr(n))throw new TypeError(F("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return H(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!M(n)||ur(n))throw new TypeError(F("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),H(this,"c",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!nr(r))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}return W(ne,"factory",(function(r,n){return ir(r)||ir(n)||n<=0?Dn(NaN):function(e){return ir(e)?NaN:e<=r?0:qr(n/re)*Xn(-n/(2*(e-r)))/Wn(e-r,1.5)}})),W(ee,"factory",(function(r,n){return ir(r)||ir(n)||n<=0?Dn(NaN):function(e){var t;return ir(e)||e<0||e>1?NaN:(t=Xr(e),r+n/(2*t*t))}})),C(te.prototype,"entropy",(function(){return r=this.mu,n=this.c,ir(r)||ir(n)||n<=0?NaN:(2.7316469947045987+Rr(16*n*n*3.141592653589793))/2;var r,n})),C(te.prototype,"mean",(function(){return r=this.mu,n=this.c,ir(r)||ir(n)||n<=0?NaN:Zr;var r,n})),C(te.prototype,"median",(function(){return r=this.mu,n=this.c,ir(r)||ir(n)||n<=0?NaN:r+n/Cn;var r,n})),C(te.prototype,"mode",(function(){return r=this.mu,n=this.c,ir(r)||ir(n)||n<=0?NaN:r+n/3;var r,n})),C(te.prototype,"stdev",(function(){return r=this.mu,n=this.c,ir(r)||ir(n)||n<=0?NaN:Zr;var r,n})),C(te.prototype,"variance",(function(){return r=this.mu,n=this.c,ir(r)||ir(n)||n<=0?NaN:Zr;var r,n})),W(te.prototype,"cdf",(function(r){return Bn(r,this.mu,this.c)})),W(te.prototype,"logcdf",(function(r){return Jn(r,this.mu,this.c)})),W(te.prototype,"logpdf",(function(r){return Qn(r,this.mu,this.c)})),W(te.prototype,"pdf",(function(r){return ne(r,this.mu,this.c)})),W(te.prototype,"quantile",(function(r){return ee(r,this.mu,this.c)})),te},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Levy=n();
//# sourceMappingURL=index.js.map
