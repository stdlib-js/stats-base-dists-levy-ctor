// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-entropy@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-mean@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-median@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-mode@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-stdev@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-variance@v0.2.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-cdf@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-logcdf@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-logpdf@v0.2.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-pdf@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-levy-quantile@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function b(){var s,e;if(!(this instanceof b))return 0===arguments.length?new b:new b(arguments[0],arguments[1]);if(arguments.length){if(e=arguments[1],!n(s=arguments[0])||r(s))throw new TypeError(j("invalid argument. Location parameter must be a number. Value: `%s`.",s));if(!i(e))throw new TypeError(j("invalid argument. Scale parameter must be a positive number. Value: `%s`.",e))}else s=0,e=1;return t(this,"mu",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!n(t)||r(t))throw new TypeError(j("invalid assignment. Must be a number. Value: `%s`.",t));s=t}}),t(this,"c",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(j("invalid assignment. Must be a positive number. Value: `%s`.",t));e=t}}),this}e(b.prototype,"entropy",(function(){return m(this.mu,this.c)})),e(b.prototype,"mean",(function(){return d(this.mu,this.c)})),e(b.prototype,"median",(function(){return o(this.mu,this.c)})),e(b.prototype,"mode",(function(){return p(this.mu,this.c)})),e(b.prototype,"stdev",(function(){return l(this.mu,this.c)})),e(b.prototype,"variance",(function(){return a(this.mu,this.c)})),s(b.prototype,"cdf",(function(t){return u(t,this.mu,this.c)})),s(b.prototype,"logcdf",(function(t){return h(t,this.mu,this.c)})),s(b.prototype,"logpdf",(function(t){return v(t,this.mu,this.c)})),s(b.prototype,"pdf",(function(t){return c(t,this.mu,this.c)})),s(b.prototype,"quantile",(function(t){return f(t,this.mu,this.c)}));export{b as default};
//# sourceMappingURL=index.mjs.map
