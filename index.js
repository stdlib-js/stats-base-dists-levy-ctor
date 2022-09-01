// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?r:function(n,r,a){var c,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===e.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(o.call(n,r)||f.call(n,r)?(c=n.__proto__,n.__proto__=t,delete n[r],n[r]=a.value,n.__proto__=c):n[r]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(n,r,a.get),p&&i&&i.call(n,r,a.set),n};function c(n,r,t){a(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(n,r,t){a(n,r,{configurable:!1,enumerable:!1,get:t})}function y(n){return"number"==typeof n}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,b=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",m=v()?function(n){var r,t,e,u,i;if(null==n)return s.call(n);t=n[N],i=N,r=null!=(u=n)&&b.call(u,i);try{n[N]=void 0}catch(r){return s.call(n)}return e=s.call(n),r?n[N]=t:delete n[N],e}:function(n){return s.call(n)},h=Number,d=h.prototype.toString,w=v();function g(n){return"object"==typeof n&&(n instanceof h||(w?function(n){try{return d.call(n),!0}catch(n){return!1}}(n):"[object Number]"===m(n)))}function A(n){return y(n)||g(n)}function _(n){return y(n)&&n>0}function j(n){return g(n)&&n.valueOf()>0}function U(n){return _(n)||j(n)}function O(n){return n!=n}function E(n){return y(n)&&O(n)}function I(n){return g(n)&&O(n.valueOf())}function T(n){return E(n)||I(n)}c(A,"isPrimitive",y),c(A,"isObject",g),c(U,"isPrimitive",_),c(U,"isObject",j),c(T,"isPrimitive",E),c(T,"isObject",I);var S,F="function"==typeof Uint32Array,P="function"==typeof Uint32Array?Uint32Array:null,H="function"==typeof Uint32Array?Uint32Array:void 0;S=function(){var n,r,t;if("function"!=typeof P)return!1;try{r=new P(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(F&&t instanceof Uint32Array||"[object Uint32Array]"===m(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?H:function(){throw new Error("not implemented")};var G,V=S,L="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,x="function"==typeof Float64Array?Float64Array:void 0;G=function(){var n,r,t;if("function"!=typeof M)return!1;try{r=new M([1,3.14,-3.14,NaN]),t=r,n=(L&&t instanceof Float64Array||"[object Float64Array]"===m(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?x:function(){throw new Error("not implemented")};var W,k=G,q="function"==typeof Uint8Array,C="function"==typeof Uint8Array?Uint8Array:null,Y="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var n,r,t;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,256,257]),t=r,n=(q&&t instanceof Uint8Array||"[object Uint8Array]"===m(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?Y:function(){throw new Error("not implemented")};var R,X=W,z="function"==typeof Uint16Array,B="function"==typeof Uint16Array?Uint16Array:null,D="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var n,r,t;if("function"!=typeof B)return!1;try{r=new B(r=[1,3.14,-3.14,65536,65537]),t=r,n=(z&&t instanceof Uint16Array||"[object Uint16Array]"===m(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?D:function(){throw new Error("not implemented")};var J,K={uint16:R,uint8:X};(J=new K.uint16(1))[0]=4660;var Q=52===new K.uint8(J.buffer)[0],Z=!0===Q?1:0,$=new k(1),nn=new V($.buffer);function rn(n){return $[0]=n,nn[Z]}var tn=!0===Q?1:0,en=new k(1),un=new V(en.buffer);function on(n,r){return en[0]=n,un[tn]=r>>>0,en[0]}var fn=1023,an=h.NEGATIVE_INFINITY,cn=.6931471803691238,ln=1.9082149292705877e-10,yn=1048575;function pn(n){var r,t,e,u,i,o,f,a,c,l,y,p;return 0===n?an:O(n)||n<0?NaN:(i=0,(t=rn(n))<1048576&&(i-=54,t=rn(n*=0x40000000000000)),t>=2146435072?n+n:(i+=(t>>20)-fn|0,i+=(a=614244+(t&=yn)&1048576|0)>>20|0,f=(n=on(n,t|1072693248^a))-1,(yn&2+t)<3?0===f?0===i?0:i*cn+i*ln:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*cn-(o-i*ln-f)):(a=t-398458|0,c=440401-t|0,u=(y=(p=(l=f/(2+f))*l)*p)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(y),e=p*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(y),o=e+u,(a|=c)>0?(r=.5*f*f,0===i?f-(r-l*(r+o)):i*cn-(r-(l*(r+o)+i*ln)-f)):0===i?f-l*(f-o):i*cn-(l*(f-o)-i*ln-f))))}var vn=Number.POSITIVE_INFINITY,sn=Math.sqrt;function bn(n){var r,t,e,u;return O(n)?NaN:0===n?vn:2===n?an:1===n?0:n>2||n<0?NaN:(n>1?(r=-1,t=2-n):(r=1,t=n),(n=1-t)<=.5?(e=n*(n+10),u=function(n){var r,t;return 0===n?-.0005087819496582806:((n<0?-n:n)<=1?(r=n*(n*(.03348066254097446+n*(n*(n*(.02198786811111689+n*(.008226878746769157+n*(n*(0+0*n)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,t=1+n*(n*(n*(1.5622155839842302+n*(.662328840472003+n*(n*(n*(.07952836873415717+n*(.0008862163904564247*n-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(r=0+(n=1/n)*(0+n*(n*(.008226878746769157+n*(.02198786811111689+n*(n*(n*(.03348066254097446+n*(-.0005087819496582806*n-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),t=.0008862163904564247+n*(n*(.07952836873415717+n*(n*(n*(.662328840472003+n*(1.5622155839842302+n*(n*(1*n-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),r/t)}(n),r*(.08913147449493408*e+e*u)):t>=.25?(e=sn(-2*pn(t)),u=function(n){var r,t;return 0===n?-.20243350835593876:((n<0?-n:n)<=1?(r=n*(.10526468069939171+n*(8.3705032834312+n*(17.644729840837403+n*(n*(n*(17.445385985570866+n*(21.12946554483405+-3.6719225470772936*n))-44.6382324441787)-18.851064805871424))))-.20243350835593876,t=1+n*(6.242641248542475+n*(3.971343795334387+n*(n*(n*(48.560921310873994+n*(10.826866735546016+n*(1.7211476576120028*n-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(r=(n=1/n)*(21.12946554483405+n*(17.445385985570866+n*(n*(n*(17.644729840837403+n*(8.3705032834312+n*(.10526468069939171+-.20243350835593876*n)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,t=1.7211476576120028+n*(n*(10.826866735546016+n*(48.560921310873994+n*(n*(n*(3.971343795334387+n*(6.242641248542475+1*n))-28.66081804998)-20.14326346804852)))-22.643693341313973)),r/t)}(t-=.25),r*(e/(2.249481201171875+u))):(t=sn(-pn(t)))<3?(u=function(n){var r,t;return 0===n?-.1311027816799519:((n<0?-n:n)<=1?(r=n*(n*(.11703015634199525+n*(.38707973897260434+n*(.3377855389120359+n*(.14286953440815717+n*(.029015791000532906+n*(.0021455899538880526+n*(n*(2.8522533178221704e-8+-6.81149956853777e-10*n)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,t=1+n*(3.4662540724256723+n*(5.381683457070069+n*(4.778465929458438+n*(2.5930192162362027+n*(.848854343457902+n*(.15226433829533179+n*(.011059242293464892+n*(0+n*(0+0*n)))))))))):(r=(n=1/n)*(2.8522533178221704e-8+n*(n*(.0021455899538880526+n*(.029015791000532906+n*(.14286953440815717+n*(.3377855389120359+n*(.38707973897260434+n*(.11703015634199525+n*(-.1311027816799519*n-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,t=0+n*(0+n*(0+n*(.011059242293464892+n*(.15226433829533179+n*(.848854343457902+n*(2.5930192162362027+n*(4.778465929458438+n*(5.381683457070069+n*(3.4662540724256723+1*n)))))))))),r/t)}(t-1.125),r*(.807220458984375*t+u*t)):t<6?(u=function(n){var r,t;return 0===n?-.0350353787183178:((n<0?-n:n)<=1?(r=n*(n*(.018557330651423107+n*(.009508047013259196+n*(.0018712349281955923+n*(.00015754461742496055+n*(460469890584318e-20+n*(26633922742578204e-28*n-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,t=1+n*(1.3653349817554064+n*(.7620591645536234+n*(.22009110576413124+n*(.03415891436709477+n*(.00263861676657016+n*(7646752923027944e-20+n*(0+0*n)))))))):(r=26633922742578204e-28+(n=1/n)*(n*(460469890584318e-20+n*(.00015754461742496055+n*(.0018712349281955923+n*(.009508047013259196+n*(.018557330651423107+n*(-.0350353787183178*n-.0022242652921344794))))))-2.304047769118826e-10),t=0+n*(0+n*(7646752923027944e-20+n*(.00263861676657016+n*(.03415891436709477+n*(.22009110576413124+n*(.7620591645536234+n*(1.3653349817554064+1*n)))))))),r/t)}(t-3),r*(.9399557113647461*t+u*t)):(u=function(n){var r,t;return 0===n?-.016743100507663373:((n<0?-n:n)<=1?(r=n*(n*(.001056288621524929+n*(.00020938631748758808+n*(14962478375834237e-21+n*(4.4969678992770644e-7+n*(4.625961635228786e-9+n*(9905570997331033e-32*n-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,t=1+n*(.5914293448864175+n*(.1381518657490833+n*(.016074608709367652+n*(.0009640118070051656+n*(27533547476472603e-21+n*(2.82243172016108e-7+n*(0+0*n)))))))):(r=9905570997331033e-32+(n=1/n)*(n*(4.625961635228786e-9+n*(4.4969678992770644e-7+n*(14962478375834237e-21+n*(.00020938631748758808+n*(.001056288621524929+n*(-.016743100507663373*n-.0011295143874558028))))))-2811287356288318e-29),t=0+n*(0+n*(2.82243172016108e-7+n*(27533547476472603e-21+n*(.0009640118070051656+n*(.016074608709367652+n*(.1381518657490833+n*(.5914293448864175+1*n)))))))),r/t)}(t-6),r*(.9836282730102539*t+u*t)))}var Nn,mn,hn=Math.floor;function dn(n){return hn(n)===n}function wn(n){return dn(n/2)}function gn(n){return wn(n>0?n-1:n+1)}function An(n){return n===vn||n===an}function _n(n){return Math.abs(n)}!0===Q?(Nn=1,mn=0):(Nn=0,mn=1);var jn={HIGH:Nn,LOW:mn},Un=new k(1),On=new V(Un.buffer),En=jn.HIGH,In=jn.LOW;function Tn(n,r){return Un[0]=r,n[0]=On[En],n[1]=On[In],n}function Sn(n,r){return 1===arguments.length?Tn([0,0],n):Tn(n,r)}var Fn,Pn,Hn=!0===Q?0:1,Gn=new k(1),Vn=new V(Gn.buffer);function Ln(n,r){return Gn[0]=n,Vn[Hn]=r>>>0,Gn[0]}function Mn(n){return 0|n}!0===Q?(Fn=1,Pn=0):(Fn=0,Pn=1);var xn={HIGH:Fn,LOW:Pn},Wn=new k(1),kn=new V(Wn.buffer),qn=xn.HIGH,Cn=xn.LOW;function Yn(n,r){return kn[qn]=n,kn[Cn]=r,Wn[0]}var Rn=[0,0];function Xn(n,r){var t,e;return Sn(Rn,n),t=Rn[0],t&=2147483647,e=rn(r),Yn(t|=e&=2147483648,Rn[1])}var zn=1048576,Bn=[1,1.5],Dn=[0,.5849624872207642],Jn=[0,1.350039202129749e-8];function Kn(n,r){return O(r)||An(r)?(n[0]=r,n[1]=0,n):0!==r&&_n(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)}var Qn=[0,0],Zn=[0,0];function $n(n,r){var t,e;return 0===r||0===n||O(n)||An(n)?n:(function(n,r){1===arguments.length?Kn([0,0],n):Kn(n,r)}(Qn,n),r+=Qn[1],r+=function(n){var r=rn(n);return(r=(2146435072&r)>>>20)-fn|0}(n=Qn[0]),r<-1074?Xn(0,n):r>1023?n<0?an:vn:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Sn(Zn,n),t=Zn[0],t&=2148532223,e*Yn(t|=r+fn<<20,Zn[1])))}var nr=2147483647,rr=1048575,tr=1048576,er=2147483647,ur=1083179008,ir=1e300,or=1e-300,fr=[0,0],ar=[0,0];function cr(n,r){var t,e,u,i,o,f,a,c,l,y,p,v,s,b;if(O(n)||O(r))return NaN;if(Sn(fr,r),o=fr[0],0===fr[1]){if(0===r)return 1;if(1===r)return n;if(-1===r)return 1/n;if(.5===r)return sn(n);if(-.5===r)return 1/sn(n);if(2===r)return n*n;if(3===r)return n*n*n;if(4===r)return(n*=n)*n;if(An(r))return function(n,r){return-1===n?(n-n)/(n-n):1===n?1:_n(n)<1==(r===vn)?0:vn}(n,r)}if(Sn(fr,n),i=fr[0],0===fr[1]){if(0===i)return function(n,r){return r===an?vn:r===vn?0:r>0?gn(r)?n:0:gn(r)?Xn(vn,n):vn}(n,r);if(1===n)return 1;if(-1===n&&gn(r))return-1;if(An(n))return n===an?cr(-0,-r):r<0?0:vn}if(n<0&&!1===dn(r))return(n-n)/(n-n);if(u=_n(n),t=i&er|0,e=o&er|0,a=o>>>31|0,f=(f=i>>>31|0)&&gn(r)?-1:1,e>1105199104){if(e>1139802112)return function(n,r){return(2147483647&rn(n))<=1072693247?r<0?1/0:0:r>0?1/0:0}(n,r);if(t<1072693247)return 1===a?f*ir*ir:f*or*or;if(t>1072693248)return 0===a?f*ir*ir:f*or*or;p=function(n,r){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=r-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Ln(e=(i=1.4426950216293335*u)+o,0))-i),n[0]=e,n[1]=t,n}(ar,u)}else p=function(n,r,t){var e,u,i,o,f,a,c,l,y,p,v,s,b,N,m,h,d,w,g,A,_;return w=0,t<zn&&(w-=53,t=rn(r*=9007199254740992)),w+=(t>>20)-fn|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,t-=zn),o=Ln(u=(h=(r=on(r,t))-(c=Bn[A]))*(d=1/(r+c)),0),e=524288+(t>>1|536870912),a=on(0,e+=A<<18),m=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=Ln(a=3+(i=o*o)+(m+=(f=d*(h-o*a-o*(r-(a-c))))*(o+u)),0),b=(v=-7.028461650952758e-9*(y=Ln(y=(h=o*a)+(d=f*a+(m-(a-3-i))*u),0))+.9617966939259756*(d-(y-h))+Jn[A])-((s=Ln(s=(p=.9617967009544373*y)+v+(l=Dn[A])+(N=w),0))-N-l-p),n[0]=s,n[1]=b,n}(ar,u,t);if(y=(r-(c=Ln(r,0)))*p[0]+r*p[1],l=c*p[0],Sn(fr,v=y+l),s=Mn(fr[0]),b=Mn(fr[1]),s>=ur){if(0!=(s-ur|b))return f*ir*ir;if(y+8008566259537294e-32>v-l)return f*ir*ir}else if((s&er)>=1083231232){if(0!=(s-3230714880|b))return f*or*or;if(y<=v-l)return f*or*or}return v=function(n,r,t){var e,u,i,o,f,a,c,l,y,p;return y=((l=n&nr|0)>>20)-fn|0,c=0,l>1071644672&&(u=on(0,((c=n+(tr>>y+1)>>>0)&~(rr>>(y=((c&nr)>>20)-fn|0)))>>>0),c=(c&rr|tr)>>20-y>>>0,n<0&&(c=-c),r-=u),n=Mn(n=rn(a=1-((a=(i=.6931471824645996*(u=Ln(u=t+r,0)))+(o=.6931471805599453*(t-(u-r))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-i))+a*f)-a))),(n+=c<<20>>>0)>>20<=0?$n(a,c):on(a,n)}(s,l,y),f*v}var lr=2*cr(bn(.5),2),yr=Math.ceil;function pr(n){return n<0?yr(n):hn(n)}var vr=1.4426950408889634,sr=1/(1<<28);function br(n){var r;return O(n)||n===vn?n:n===an?0:n>709.782712893384?vn:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<sr?1+n:function(n,r,t){var e,u,i,o;return $n(1-(r-(e=n-r)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-n),t)}(n-.6931471803691238*(r=pr(n<0?vr*n-.5:vr*n+.5)),1.9082149292705877e-10*r,r)}var Nr=.8450629115104675;function mr(n){var r,t,e,u,i,o,f,a;if(O(n))return NaN;if(n===vn)return 0;if(n===an)return 2;if(0===n)return 1;if(n<0?(r=!0,t=-n):(r=!1,t=n),t<.84375)return t<13877787807814457e-33?1-n:(u=.12837916709551256+(e=n*n)*function(n){return 0===n?-.3250421072470015:n*(n*(-23763016656650163e-21*n-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),i=1+e*function(n){return 0===n?.39791722395915535:.39791722395915535+n*(.0650222499887673+n*(.005081306281875766+n*(.00013249473800432164+-3960228278775368e-21*n)))}(e),o=u/i,n<.25?1-(n+n*o):(u=n*o,.5-(u+=n-.5)));if(t<1.25)return f=(i=t-1)*function(n){return 0===n?.41485611868374833:.41485611868374833+n*(n*(.31834661990116175+n*(n*(.035478304325618236+-.002166375594868791*n)-.11089469428239668))-.3722078760357013)}(i)-.0023621185607526594,a=1+i*function(n){return 0===n?.10642088040084423:.10642088040084423+n*(.540397917702171+n*(.07182865441419627+n*(.12617121980876164+n*(.01363708391202905+.011984499846799107*n))))}(i),r?1+Nr+f/a:1-Nr-f/a;if(t<28){if(i=1/(t*t),t<2.857142857142857)u=i*function(n){return 0===n?-.6938585727071818:n*(n*(n*(n*(n*(-9.814329344169145*n-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i)-.009864944034847148,i=1+i*function(n){return 0===n?19.651271667439257:19.651271667439257+n*(137.65775414351904+n*(434.56587747522923+n*(645.3872717332679+n*(429.00814002756783+n*(108.63500554177944+n*(6.570249770319282+-.0604244152148581*n))))))}(i);else{if(n<-6)return 2;u=i*function(n){return 0===n?-.799283237680523:n*(n*(n*(n*(-483.5191916086514*n-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i)-.0098649429247001,i=1+i*function(n){return 0===n?30.33806074348246:30.33806074348246+n*(325.7925129965739+n*(1536.729586084437+n*(3199.8582195085955+n*(2553.0504064331644+n*(474.52854120695537+-22.44095244658582*n)))))}(i)}return u=br(-(e=Ln(t,0))*e-.5625)*br((e-t)*(e+t)+u/i),r?2-u/t:u/t}return r?2:0}function hr(n,r,t){return O(n)||O(r)||O(t)||t<=0?NaN:n<r?0:mr(sn(t/(2*(n-r))))}function dr(n){return function(){return n}}function wr(n,r,t){return O(n)||O(r)||O(t)||t<=0?NaN:n<r?an:pn(mr(sn(t/(2*(n-r)))))}c(hr,"factory",(function(n,r){return O(n)||O(r)||r<=0?dr(NaN):function(t){return O(t)?NaN:t<n?0:mr(sn(r/(2*(t-n))))}})),c(wr,"factory",(function(n,r){return O(n)||O(r)||r<=0?dr(NaN):function(t){return O(t)?NaN:t<n?an:pn(mr(sn(r/(2*(t-n)))))}}));var gr=1.8378770664093456;function Ar(n,r,t){var e;return O(n)||O(r)||O(t)||t<=0?NaN:n<=r?an:(e=n-r,.5*(pn(t)-gr-t/e-3*pn(e)))}c(Ar,"factory",(function(n,r){return O(n)||O(r)||r<=0?dr(NaN):function(t){var e;return O(t)?NaN:t<=n?an:(e=t-n,.5*(pn(r)-gr-r/e-3*pn(e)))}}));var _r=6.283185307179586;function jr(n,r,t){return O(n)||O(r)||O(t)||t<=0?NaN:n<=r?0:sn(t/_r)*br(-t/(2*(n-r)))/cr(n-r,1.5)}function Ur(n,r,t){var e;return O(r)||O(t)||O(n)||t<=0||n<0||n>1?NaN:r+t/(2*(e=bn(n))*e)}function Or(){var n,r=arguments,t=r[0],e="https://stdlib.io/e/"+t+"?";for(n=1;n<r.length;n++)e+="&arg[]="+encodeURIComponent(r[n]);return e}function Er(){var n,r;if(!(this instanceof Er))return 0===arguments.length?new Er:new Er(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!y(n=arguments[0])||T(n))throw new TypeError(Or("invalid argument. Location parameter must be a number. Value: `%s`.",n));if(!_(r))throw new TypeError(Or("0X07u",r))}else n=0,r=1;return a(this,"mu",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!y(r)||T(r))throw new TypeError(Or("invalid assignment. Must be a number. Value: `%s`.",r));n=r}}),a(this,"c",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!_(n))throw new TypeError(Or("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}return c(jr,"factory",(function(n,r){return O(n)||O(r)||r<=0?dr(NaN):function(t){return O(t)?NaN:t<=n?0:sn(r/_r)*br(-r/(2*(t-n)))/cr(t-n,1.5)}})),c(Ur,"factory",(function(n,r){return O(n)||O(r)||r<=0?dr(NaN):function(t){var e;return O(t)||t<0||t>1?NaN:(e=bn(t),n+r/(2*e*e))}})),l(Er.prototype,"entropy",(function(){return n=this.mu,r=this.c,O(n)||O(r)||r<=0?NaN:(2.7316469947045987+pn(16*r*r*3.141592653589793))/2;var n,r})),l(Er.prototype,"mean",(function(){return n=this.mu,r=this.c,O(n)||O(r)||r<=0?NaN:vn;var n,r})),l(Er.prototype,"median",(function(){return n=this.mu,r=this.c,O(n)||O(r)||r<=0?NaN:n+r/lr;var n,r})),l(Er.prototype,"mode",(function(){return n=this.mu,r=this.c,O(n)||O(r)||r<=0?NaN:n+r/3;var n,r})),l(Er.prototype,"stdev",(function(){return n=this.mu,r=this.c,O(n)||O(r)||r<=0?NaN:vn;var n,r})),l(Er.prototype,"variance",(function(){return n=this.mu,r=this.c,O(n)||O(r)||r<=0?NaN:vn;var n,r})),c(Er.prototype,"cdf",(function(n){return hr(n,this.mu,this.c)})),c(Er.prototype,"logcdf",(function(n){return wr(n,this.mu,this.c)})),c(Er.prototype,"logpdf",(function(n){return Ar(n,this.mu,this.c)})),c(Er.prototype,"pdf",(function(n){return jr(n,this.mu,this.c)})),c(Er.prototype,"quantile",(function(n){return Ur(n,this.mu,this.c)})),Er},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).Levy=r();
//# sourceMappingURL=index.js.map
