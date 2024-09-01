// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,i=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol:void 0,a="function"==typeof n?n.toStringTag:"",o=r()?function(e){var r,n,o,c,s;if(null==e)return t.call(e);n=e[a],s=a,r=null!=(c=e)&&i.call(c,s);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=n:delete e[a],o}:function(e){return t.call(e)},c=Date.prototype.getDay,s=r();function l(e){return"object"==typeof e&&(e instanceof Date||(s?function(e){try{return c.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o(e)))}var u="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function f(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+g(n):g(n)+e,i&&(e="-"+e)),e}var h=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function y(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!f(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===b.call(e.specifier)?b.call(t):h.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var v=Math.abs,w=String.prototype.toLowerCase,m=String.prototype.toUpperCase,_=String.prototype.replace,S=/e\+(\d)$/,E=/e-(\d)$/,x=/^(\d+)$/,j=/^(\d+)e/,I=/\.0$/,k=/\.0*e/,T=/(\..*[^0])0*e/;function F(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":v(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=_.call(t,T,"$1e"),t=_.call(t,k,"e"),t=_.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=_.call(t,S,"e+0$1"),t=_.call(t,E,"e-0$1"),e.alternate&&(t=_.call(t,x,"$1."),t=_.call(t,j,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===m.call(e.specifier)?m.call(t):w.call(t)}function V(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var O=String.fromCharCode,$=Array.isArray;function N(e){return e!=e}function P(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,i,n,a,o,c,s,l,u,p,f,g;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if("string"==typeof(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=P(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,N(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,N(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=y(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!N(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=N(a)?String(i.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=F(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=d(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(u=i.arg,p=i.width,f=i.padRight,g=void 0,(g=p-u.length)<0?u:u=f?u+V(g):V(g)+u)),o+=i.arg||"",c+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function D(e){var r,t,i,n;for(t=[],n=0,i=C.exec(e);i;)(r=e.slice(n,C.lastIndex-i[0].length)).length&&t.push(r),t.push(R(i)),n=C.lastIndex,i=C.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function Y(e){var r,t;if("string"!=typeof e)throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[D(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return A.apply(null,r)}var G=Object.prototype,Z=G.toString,W=G.__defineGetter__,L=G.__defineSetter__,U=G.__lookupGetter__,M=G.__lookupSetter__,X=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?p:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(U.call(e,r)||M.call(e,r)?(i=e.__proto__,e.__proto__=G,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&W&&W.call(e,r,t.get),o&&L&&L.call(e,r,t.set),e};function z(e,r,t){X(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Q(e){return"number"==typeof e}var q=Number,B=q.prototype.toString,H=r();function J(e){return"object"==typeof e&&(e instanceof q||(H?function(e){try{return B.call(e),!0}catch(e){return!1}}(e):"[object Number]"===o(e)))}function K(e){return Q(e)||J(e)}z(K,"isPrimitive",Q),z(K,"isObject",J);var ee=Number.POSITIVE_INFINITY,re=q.NEGATIVE_INFINITY,te=Math.floor;function ie(e){return e<ee&&e>re&&te(r=e)===r;var r}function ne(e){return Q(e)&&ie(e)}function ae(e){return J(e)&&ie(e.valueOf())}function oe(e){return ne(e)||ae(e)}function ce(){return(new Date).getFullYear()}return z(oe,"isPrimitive",ne),z(oe,"isObject",ae),function(e){var r;if(arguments.length)if(l(e))r=e.getFullYear();else{if(!ne(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("1QNDx",e));r=e}else r=ce();return function(e){var r;if(arguments.length)if(l(e))r=e.getFullYear();else{if(!ne(e))return!1;r=e}else r=ce();return r%100==0?r%400==0:r%4==0}(r)?527040:525600}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).minutesInYear=r();
//# sourceMappingURL=index.js.map
