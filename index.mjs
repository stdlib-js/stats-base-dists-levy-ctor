// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-entropy@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-mean@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-median@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-mode@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-stdev@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-variance@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-cdf@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-logcdf@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-logpdf@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-pdf@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-quantile@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function v(){var s,e;if(!(this instanceof v))return 0===arguments.length?new v:new v(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!n(s=arguments[0])||r(s))throw new TypeError(b("invalid argument. Location parameter must be a number. Value: `%s`.",s));if(!i(e))throw new TypeError(b("0X07u",e))}else s=0,e=1;return t(this,"mu",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!n(t)||r(t))throw new TypeError(b("invalid assignment. Must be a number. Value: `%s`.",t));s=t}}),t(this,"c",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(b("invalid assignment. Must be a positive number. Value: `%s`.",t));e=t}}),this}e(v.prototype,"entropy",(function(){return o(this.mu,this.c)})),e(v.prototype,"mean",(function(){return d(this.mu,this.c)})),e(v.prototype,"median",(function(){return m(this.mu,this.c)})),e(v.prototype,"mode",(function(){return p(this.mu,this.c)})),e(v.prototype,"stdev",(function(){return l(this.mu,this.c)})),e(v.prototype,"variance",(function(){return h(this.mu,this.c)})),s(v.prototype,"cdf",(function(t){return u(t,this.mu,this.c)})),s(v.prototype,"logcdf",(function(t){return a(t,this.mu,this.c)})),s(v.prototype,"logpdf",(function(t){return c(t,this.mu,this.c)})),s(v.prototype,"pdf",(function(t){return f(t,this.mu,this.c)})),s(v.prototype,"quantile",(function(t){return j(t,this.mu,this.c)}));export{v as default};
//# sourceMappingURL=index.mjs.map
