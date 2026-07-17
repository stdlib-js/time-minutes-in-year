"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=s(function(p,i){
var n=require('@stdlib/assert-is-date-object/dist'),u=require('@stdlib/assert-is-integer/dist').isPrimitive,o=require('@stdlib/assert-is-leap-year/dist'),v=require('@stdlib/time-current-year/dist'),Y=require('@stdlib/error-tools-fmtprodmsg/dist'),c=525600,f=527040;function g(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else if(u(e))r=e;else throw new TypeError(Y('1QNDx',e));else r=v();return o(r)?f:c}i.exports=g
});var m=t();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
