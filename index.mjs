// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-date-object@v0.1.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-leap-year@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/time-current-year@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function d(d){var m;if(arguments.length)if(e(d))m=d.getFullYear();else{if(!s(d))throw new TypeError(i("1QNLR",d));m=d}else m=r();return t(m)?527040:525600}export{d as default};
//# sourceMappingURL=index.mjs.map
