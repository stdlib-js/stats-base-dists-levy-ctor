"use strict";var h=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var v=h(function(R,f){
var a=require('@stdlib/utils-define-property/dist'),u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),n=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),c=require('@stdlib/assert-is-positive-number/dist').isPrimitive,m=require('@stdlib/assert-is-number/dist').isPrimitive,p=require('@stdlib/assert-is-nan/dist'),g=require('@stdlib/stats-base-dists-levy-entropy/dist'),l=require('@stdlib/stats-base-dists-levy-mean/dist'),y=require('@stdlib/stats-base-dists-levy-median/dist'),d=require('@stdlib/stats-base-dists-levy-mode/dist'),q=require('@stdlib/stats-base-dists-levy-stdev/dist'),b=require('@stdlib/stats-base-dists-levy-variance/dist'),w=require('@stdlib/stats-base-dists-levy-cdf/dist'),P=require('@stdlib/stats-base-dists-levy-logcdf/dist'),D=require('@stdlib/stats-base-dists-levy-logpdf/dist'),E=require('@stdlib/stats-base-dists-levy-pdf/dist'),F=require('@stdlib/stats-base-dists-levy-quantile/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function L(e){return w(e,this.mu,this.c)}function T(e){return P(e,this.mu,this.c)}function V(e){return D(e,this.mu,this.c)}function x(e){return E(e,this.mu,this.c)}function C(e){return F(e,this.mu,this.c)}function r(){var e,t;if(!(this instanceof r))return arguments.length===0?new r:new r(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[0],t=arguments[1],!m(e)||p(e))throw new TypeError(s('14D8p',e));if(!c(t))throw new TypeError(s('14D7c',t))}else e=0,t=1;return a(this,"mu",{configurable:!1,enumerable:!0,get:function(){return e},set:function(i){if(!m(i)||p(i))throw new TypeError(s('14D8d',i));e=i}}),a(this,"c",{configurable:!1,enumerable:!0,get:function(){return t},set:function(i){if(!c(i))throw new TypeError(s('14D8k',i));t=i}}),this;}n(r.prototype,"entropy",function(){return g(this.mu,this.c)});n(r.prototype,"mean",function(){return l(this.mu,this.c)});n(r.prototype,"median",function(){return y(this.mu,this.c)});n(r.prototype,"mode",function(){return d(this.mu,this.c)});n(r.prototype,"stdev",function(){return q(this.mu,this.c)});n(r.prototype,"variance",function(){return b(this.mu,this.c)});u(r.prototype,"cdf",L);u(r.prototype,"logcdf",T);u(r.prototype,"logpdf",V);u(r.prototype,"pdf",x);u(r.prototype,"quantile",C);f.exports=r
});var M=v();module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map