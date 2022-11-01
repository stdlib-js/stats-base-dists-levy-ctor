// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r,n,t){a(r,n,{configurable:!1,enumerable:!1,get:t})}function y(r){return"number"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,b=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",m=v()?function(r){var n,t,e,u,i;if(null==r)return s.call(r);t=r[N],i=N,n=null!=(u=r)&&b.call(u,i);try{r[N]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[N]=t:delete r[N],e}:function(r){return s.call(r)},h=Number,d=h.prototype.toString,w=v();function g(r){return"object"==typeof r&&(r instanceof h||(w?function(r){try{return d.call(r),!0}catch(r){return!1}}(r):"[object Number]"===m(r)))}function A(r){return y(r)||g(r)}function _(r){return y(r)&&r>0}function j(r){return g(r)&&r.valueOf()>0}function U(r){return _(r)||j(r)}function O(r){return r!=r}function E(r){return y(r)&&O(r)}function I(r){return g(r)&&O(r.valueOf())}function T(r){return E(r)||I(r)}c(A,"isPrimitive",y),c(A,"isObject",g),c(U,"isPrimitive",_),c(U,"isObject",j),c(T,"isPrimitive",E),c(T,"isObject",I);var S,F="function"==typeof Uint32Array,P="function"==typeof Uint32Array?Uint32Array:null,H="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(F&&t instanceof Uint32Array||"[object Uint32Array]"===m(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,V=S,L="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,x="function"==typeof Float64Array?Float64Array:void 0;G=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M([1,3.14,-3.14,NaN]),t=n,r=(L&&t instanceof Float64Array||"[object Float64Array]"===m(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var W,k=G,q="function"==typeof Uint8Array,C="function"==typeof Uint8Array?Uint8Array:null,Y="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,256,257]),t=n,r=(q&&t instanceof Uint8Array||"[object Uint8Array]"===m(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var R,X=W,z="function"==typeof Uint16Array,B="function"==typeof Uint16Array?Uint16Array:null,D="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var r,n,t;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,65536,65537]),t=n,r=(z&&t instanceof Uint16Array||"[object Uint16Array]"===m(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K={uint16:R,uint8:X};(J=new K.uint16(1))[0]=4660;var Q=52===new K.uint8(J.buffer)[0],Z=!0===Q?1:0,$=new k(1),rr=new V($.buffer);function nr(r){return $[0]=r,rr[Z]}var tr=!0===Q?1:0,er=new k(1),ur=new V(er.buffer);function ir(r,n){return er[0]=r,ur[tr]=n>>>0,er[0]}var or=1023,fr=h.NEGATIVE_INFINITY,ar=.6931471803691238,cr=1.9082149292705877e-10,lr=1048575;function yr(r){var n,t,e,u,i,o,f,a,c,l,y,p;return 0===r?fr:O(r)||r<0?NaN:(i=0,(t=nr(r))<1048576&&(i-=54,t=nr(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-or|0,i+=(a=614244+(t&=lr)&1048576|0)>>20|0,f=(r=ir(r,t|1072693248^a))-1,(lr&2+t)<3?0===f?0===i?0:i*ar+i*cr:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*ar-(o-i*cr-f)):(a=t-398458|0,c=440401-t|0,u=(y=(p=(l=f/(2+f))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),o=e+u,(a|=c)>0?(n=.5*f*f,0===i?f-(n-l*(n+o)):i*ar-(n-(l*(n+o)+i*cr)-f)):0===i?f-l*(f-o):i*ar-(l*(f-o)-i*cr-f))))}var pr=Number.POSITIVE_INFINITY,vr=Math.sqrt;function sr(r){var n,t,e,u;return O(r)?NaN:0===r?pr:2===r?fr:1===r?0:r>2||r<0?NaN:(r>1?(n=-1,t=2-r):(n=1,t=r),(r=1-t)<=.5?(e=r*(r+10),u=function(r){var n,t;return 0===r?-.0005087819496582806:((r<0?-r:r)<=1?(n=r*(r*(.03348066254097446+r*(r*(r*(.02198786811111689+r*(.008226878746769157+r*(r*(0+0*r)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+r*(r*(r*(1.5622155839842302+r*(.662328840472003+r*(r*(r*(.07952836873415717+r*(.0008862163904564247*r-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(r=1/r)*(0+r*(r*(.008226878746769157+r*(.02198786811111689+r*(r*(r*(.03348066254097446+r*(-.0005087819496582806*r-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+r*(r*(.07952836873415717+r*(r*(r*(.662328840472003+r*(1.5622155839842302+r*(r*(1*r-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/t)}(r),n*(.08913147449493408*e+e*u)):t>=.25?(e=vr(-2*yr(t)),u=function(r){var n,t;return 0===r?-.20243350835593876:((r<0?-r:r)<=1?(n=r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(r*(r*(17.445385985570866+r*(21.12946554483405+-3.6719225470772936*r))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+r*(6.242641248542475+r*(3.971343795334387+r*(r*(r*(48.560921310873994+r*(10.826866735546016+r*(1.7211476576120028*r-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(r=1/r)*(21.12946554483405+r*(17.445385985570866+r*(r*(r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+-.20243350835593876*r)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+r*(r*(10.826866735546016+r*(48.560921310873994+r*(r*(r*(3.971343795334387+r*(6.242641248542475+1*r))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/t)}(t-=.25),n*(e/(2.249481201171875+u))):(t=vr(-yr(t)))<3?(u=function(r){var n,t;return 0===r?-.1311027816799519:((r<0?-r:r)<=1?(n=r*(r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(r*(2.8522533178221704e-8+-6.81149956853777e-10*r)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+0*r)))))))))):(n=(r=1/r)*(2.8522533178221704e-8+r*(r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.1311027816799519*r-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+1*r)))))))))),n/t)}(t-1.125),n*(.807220458984375*t+u*t)):t<6?(u=function(r){var n,t;return 0===r?-.0350353787183178:((r<0?-r:r)<=1?(n=r*(r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(26633922742578204e-28*r-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+0*r)))))))):(n=26633922742578204e-28+(r=1/r)*(r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0350353787183178*r-.0022242652921344794))))))-2.304047769118826e-10),t=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+1*r)))))))),n/t)}(t-3),n*(.9399557113647461*t+u*t)):(u=function(r){var n,t;return 0===r?-.016743100507663373:((r<0?-r:r)<=1?(n=r*(r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(4.4969678992770644e-7+r*(4.625961635228786e-9+r*(9905570997331033e-32*r-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(2.82243172016108e-7+r*(0+0*r)))))))):(n=9905570997331033e-32+(r=1/r)*(r*(4.625961635228786e-9+r*(4.4969678992770644e-7+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.016743100507663373*r-.0011295143874558028))))))-2811287356288318e-29),t=0+r*(0+r*(2.82243172016108e-7+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+1*r)))))))),n/t)}(t-6),n*(.9836282730102539*t+u*t)))}var br,Nr,mr=Math.floor;function hr(r){return mr(r)===r}function dr(r){return hr(r/2)}function wr(r){return dr(r>0?r-1:r+1)}function gr(r){return r===pr||r===fr}function Ar(r){return Math.abs(r)}!0===Q?(br=1,Nr=0):(br=0,Nr=1);var _r={HIGH:br,LOW:Nr},jr=new k(1),Ur=new V(jr.buffer),Or=_r.HIGH,Er=_r.LOW;function Ir(r,n){return jr[0]=n,r[0]=Ur[Or],r[1]=Ur[Er],r}function Tr(r,n){return 1===arguments.length?Ir([0,0],r):Ir(r,n)}var Sr,Fr,Pr=!0===Q?0:1,Hr=new k(1),Gr=new V(Hr.buffer);function Vr(r,n){return Hr[0]=r,Gr[Pr]=n>>>0,Hr[0]}function Lr(r){return 0|r}!0===Q?(Sr=1,Fr=0):(Sr=0,Fr=1);var Mr={HIGH:Sr,LOW:Fr},xr=new k(1),Wr=new V(xr.buffer),kr=Mr.HIGH,qr=Mr.LOW;function Cr(r,n){return Wr[kr]=r,Wr[qr]=n,xr[0]}var Yr=[0,0];function Rr(r,n){var t,e;return Tr(Yr,r),t=Yr[0],t&=2147483647,e=nr(n),Cr(t|=e&=2147483648,Yr[1])}var Xr=1048576,zr=[1,1.5],Br=[0,.5849624872207642],Dr=[0,1.350039202129749e-8];function Jr(r,n,t,e){return O(r)||gr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Ar(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Jr(r,[0,0],1,0)}),"assign",Jr);var Kr=[0,0],Qr=[0,0];function Zr(r,n){var t,e;return 0===n||0===r||O(r)||gr(r)?r:(Jr(r,Kr,1,0),n+=Kr[1],n+=function(r){var n=nr(r);return(n=(2146435072&n)>>>20)-or|0}(r=Kr[0]),n<-1074?Rr(0,r):n>1023?r<0?fr:pr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Tr(Qr,r),t=Qr[0],t&=2148532223,e*Cr(t|=n+or<<20,Qr[1])))}var $r=2147483647,rn=1048575,nn=1048576,tn=2147483647,en=1083179008,un=1e300,on=1e-300,fn=[0,0],an=[0,0];function cn(r,n){var t,e,u,i,o,f,a,c,l,y,p,v,s,b;if(O(r)||O(n))return NaN;if(Tr(fn,n),o=fn[0],0===fn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return vr(r);if(-.5===n)return 1/vr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(gr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ar(r)<1==(n===pr)?0:pr}(r,n)}if(Tr(fn,r),i=fn[0],0===fn[1]){if(0===i)return function(r,n){return n===fr?pr:n===pr?0:n>0?wr(n)?r:0:wr(n)?Rr(pr,r):pr}(r,n);if(1===r)return 1;if(-1===r&&wr(n))return-1;if(gr(r))return r===fr?cn(-0,-n):n<0?0:pr}if(r<0&&!1===hr(n))return(r-r)/(r-r);if(u=Ar(r),t=i&tn|0,e=o&tn|0,a=o>>>31|0,f=(f=i>>>31|0)&&wr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&nr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*un*un:f*on*on;if(t>1072693248)return 0===a?f*un*un:f*on*on;p=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Vr(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(an,u)}else p=function(r,n,t){var e,u,i,o,f,a,c,l,y,p,v,s,b,N,m,h,d,w,g,A,_;return w=0,t<Xr&&(w-=53,t=nr(n*=9007199254740992)),w+=(t>>20)-or|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,t-=Xr),o=Vr(u=(h=(n=ir(n,t))-(c=zr[A]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=ir(0,e+=A<<18),m=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Vr(a=3+(i=o*o)+(m+=(f=d*(h-o*a-o*(n-(a-c))))*(o+u)),0),b=(v=-7.028461650952758e-9*(y=Vr(y=(h=o*a)+(d=f*a+(m-(a-3-i))*u),0))+.9617966939259756*(d-(y-h))+Dr[A])-((s=Vr(s=(p=.9617967009544373*y)+v+(l=Br[A])+(N=w),0))-N-l-p),r[0]=s,r[1]=b,r}(an,u,t);if(y=(n-(c=Vr(n,0)))*p[0]+n*p[1],l=c*p[0],Tr(fn,v=y+l),s=Lr(fn[0]),b=Lr(fn[1]),s>=en){if(0!=(s-en|b))return f*un*un;if(y+8008566259537294e-32>v-l)return f*un*un}else if((s&tn)>=1083231232){if(0!=(s-3230714880|b))return f*on*on;if(y<=v-l)return f*on*on}return v=function(r,n,t){var e,u,i,o,f,a,c,l,y,p;return y=((l=r&$r|0)>>20)-or|0,c=0,l>1071644672&&(u=ir(0,((c=r+(nn>>y+1)>>>0)&~(rn>>(y=((c&$r)>>20)-or|0)))>>>0),c=(c&rn|nn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=Lr(r=nr(a=1-((a=(i=.6931471824645996*(u=Vr(u=t+n,0)))+(o=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Zr(a,c):ir(a,r)}(s,l,y),f*v}var ln=2*cn(sr(.5),2),yn=Math.ceil;function pn(r){return r<0?yn(r):mr(r)}var vn=1.4426950408889634,sn=1/(1<<28);function bn(r){var n;return O(r)||r===pr?r:r===fr?0:r>709.782712893384?pr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<sn?1+r:function(r,n,t){var e,u,i,o;return Zr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=pn(r<0?vn*r-.5:vn*r+.5)),1.9082149292705877e-10*n,n)}var Nn=.8450629115104675;function mn(r){var n,t,e,u,i,o,f,a;if(O(r))return NaN;if(r===pr)return 0;if(r===fr)return 2;if(0===r)return 1;if(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(u=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),i=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),o=u/i,r<.25?1-(r+r*o):(u=r*o,.5-(u+=r-.5)));if(t<1.25)return f=(i=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(i)-.0023621185607526594,a=1+i*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(i),n?1+Nn+f/a:1-Nn-f/a;if(t<28){if(i=1/(t*t),t<2.857142857142857)u=i*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i)-.009864944034847148,i=1+i*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(i);else{if(r<-6)return 2;u=i*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i)-.0098649429247001,i=1+i*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(i)}return u=bn(-(e=Vr(t,0))*e-.5625)*bn((e-t)*(e+t)+u/i),n?2-u/t:u/t}return n?2:0}function hn(r,n,t){return O(r)||O(n)||O(t)||t<=0?NaN:r<n?0:mn(vr(t/(2*(r-n))))}function dn(r){return function(){return r}}function wn(r,n,t){return O(r)||O(n)||O(t)||t<=0?NaN:r<n?fr:yr(mn(vr(t/(2*(r-n)))))}c(hn,"factory",(function(r,n){return O(r)||O(n)||n<=0?dn(NaN):function(t){return O(t)?NaN:t<r?0:mn(vr(n/(2*(t-r))))}})),c(wn,"factory",(function(r,n){return O(r)||O(n)||n<=0?dn(NaN):function(t){return O(t)?NaN:t<r?fr:yr(mn(vr(n/(2*(t-r)))))}}));var gn=1.8378770664093456;function An(r,n,t){var e;return O(r)||O(n)||O(t)||t<=0?NaN:r<=n?fr:(e=r-n,.5*(yr(t)-gn-t/e-3*yr(e)))}c(An,"factory",(function(r,n){return O(r)||O(n)||n<=0?dn(NaN):function(t){var e;return O(t)?NaN:t<=r?fr:(e=t-r,.5*(yr(n)-gn-n/e-3*yr(e)))}}));var _n=6.283185307179586;function jn(r,n,t){return O(r)||O(n)||O(t)||t<=0?NaN:r<=n?0:vr(t/_n)*bn(-t/(2*(r-n)))/cn(r-n,1.5)}function Un(r,n,t){var e;return O(n)||O(t)||O(r)||t<=0||r<0||r>1?NaN:n+t/(2*(e=sr(r))*e)}function On(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function En(){var r,n;if(!(this instanceof En))return 0===arguments.length?new En:new En(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!y(r=arguments[0])||T(r))throw new TypeError(On("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!_(n))throw new TypeError(On("0X07u",n))}else r=0,n=1;return a(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!y(n)||T(n))throw new TypeError(On("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),a(this,"c",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!_(r))throw new TypeError(On("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}return c(jn,"factory",(function(r,n){return O(r)||O(n)||n<=0?dn(NaN):function(t){return O(t)?NaN:t<=r?0:vr(n/_n)*bn(-n/(2*(t-r)))/cn(t-r,1.5)}})),c(Un,"factory",(function(r,n){return O(r)||O(n)||n<=0?dn(NaN):function(t){var e;return O(t)||t<0||t>1?NaN:(e=sr(t),r+n/(2*e*e))}})),l(En.prototype,"entropy",(function(){return r=this.mu,n=this.c,O(r)||O(n)||n<=0?NaN:(2.7316469947045987+yr(16*n*n*3.141592653589793))/2;var r,n})),l(En.prototype,"mean",(function(){return r=this.mu,n=this.c,O(r)||O(n)||n<=0?NaN:pr;var r,n})),l(En.prototype,"median",(function(){return r=this.mu,n=this.c,O(r)||O(n)||n<=0?NaN:r+n/ln;var r,n})),l(En.prototype,"mode",(function(){return r=this.mu,n=this.c,O(r)||O(n)||n<=0?NaN:r+n/3;var r,n})),l(En.prototype,"stdev",(function(){return r=this.mu,n=this.c,O(r)||O(n)||n<=0?NaN:pr;var r,n})),l(En.prototype,"variance",(function(){return r=this.mu,n=this.c,O(r)||O(n)||n<=0?NaN:pr;var r,n})),c(En.prototype,"cdf",(function(r){return hn(r,this.mu,this.c)})),c(En.prototype,"logcdf",(function(r){return wn(r,this.mu,this.c)})),c(En.prototype,"logpdf",(function(r){return An(r,this.mu,this.c)})),c(En.prototype,"pdf",(function(r){return jn(r,this.mu,this.c)})),c(En.prototype,"quantile",(function(r){return Un(r,this.mu,this.c)})),En},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Levy=n();
//# sourceMappingURL=index.js.map
