"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=a(function(q,i){
var s=require('@stdlib/assert-is-date-object/dist'),n=require('@stdlib/assert-is-integer/dist').isPrimitive,u=require('@stdlib/assert-is-leap-year/dist'),o=require('@stdlib/time-current-year/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist'),Y=525600,c=527040;function f(e){var r;if(arguments.length)if(s(e))r=e.getFullYear();else if(n(e))r=e;else throw new TypeError(v('1QNDx',e));else r=o();return u(r)?c:Y}i.exports=f
});var g=t();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
