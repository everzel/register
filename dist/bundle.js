!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Register=e():t.Register=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}([function(t,e){t.exports='<svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.363 207.475c0 18.6-9.831 28.431-28.431 28.431h-29.876v-56.14h23.378c28.668 0 34.929 8.773 34.929 27.709zM504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM363.411 360.414c-46.729-84.825-43.299-78.636-44.702-80.98 23.432-15.172 37.945-42.979 37.945-74.486 0-54.244-31.5-89.252-105.498-89.252h-70.667c-13.255 0-24 10.745-24 24V372c0 13.255 10.745 24 24 24h22.567c13.255 0 24-10.745 24-24v-71.663h25.556l44.129 82.937a24.001 24.001 0 0 0 21.188 12.727h24.464c18.261-.001 29.829-19.591 21.018-35.587z"></path></svg>'},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(0),i=n.n(r);n(2);function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){var n=e.data,r=(e.config,e.api);!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.nodes={wrapper:null,when:null,where:null,forWhom:null,cost:null,how:null,next:null,url:null},this.data=n}var e,n,r;return e=t,r=[{key:"toolbox",get:function(){return{icon:i.a,title:"Реєстрація"}}}],(n=[{key:"save",value:function(t){var e=(this.nodes.when.innerHTML||"").trim(),n=(this.nodes.where.innerHTML||"").trim(),r=(this.nodes.forWhom.innerHTML||"").trim(),i=(this.nodes.cost.innerHTML||"").trim(),o=(this.nodes.how.innerHTML||"").trim(),s=(this.nodes.next.innerHTML||"").trim(),a=(this.nodes.url.innerHTML||"").trim();return Object.assign(this.data,{when:e,where:n,forWhom:r,cost:i,how:o,next:s,url:a}),this.data}},{key:"render",value:function(){var t=this.data,e=t.when,n=t.where,r=t.forWhom,i=t.cost,o=t.how,s=t.next,a=t.url;return this.nodes.wrapper=this.make("div",[this.CSS.baseClass,this.CSS.wrapper]),this.nodes.wrapper.appendChild(this.make("div",[this.CSS.title],{contentEditable:!1,innerHTML:"Картка реєстрації"})),this.nodes.when=this.make("div",[this.CSS.blockInput,this.CSS.input],{contentEditable:!0,innerHTML:e||""}),this.nodes.wrapper.appendChild(this.make("div",[this.CSS.blockName],{innerHTML:"Коли олімпіада"})),this.nodes.wrapper.appendChild(this.nodes.when),this.nodes.where=this.make("div",[this.CSS.blockInput,this.CSS.input],{contentEditable:!0,innerHTML:n||""}),this.nodes.wrapper.appendChild(this.make("div",[this.CSS.blockName],{innerHTML:"Де відбудеться"})),this.nodes.wrapper.appendChild(this.nodes.where),this.nodes.forWhom=this.make("div",[this.CSS.blockInput,this.CSS.input],{contentEditable:!0,innerHTML:r||""}),this.nodes.wrapper.appendChild(this.make("div",[this.CSS.blockName],{innerHTML:"Для кого"})),this.nodes.wrapper.appendChild(this.nodes.forWhom),this.nodes.cost=this.make("div",[this.CSS.blockInput,this.CSS.input],{contentEditable:!0,innerHTML:i||""}),this.nodes.wrapper.appendChild(this.make("div",[this.CSS.blockName],{innerHTML:"Вартість участі"})),this.nodes.wrapper.appendChild(this.nodes.cost),this.nodes.how=this.make("div",[this.CSS.blockInput,this.CSS.input],{contentEditable:!0,innerHTML:o||""}),this.nodes.wrapper.appendChild(this.make("div",[this.CSS.blockName],{innerHTML:"Як взяти участь"})),this.nodes.wrapper.appendChild(this.nodes.how),this.nodes.next=this.make("div",[this.CSS.blockInput,this.CSS.input],{contentEditable:!0,innerHTML:s||""}),this.nodes.wrapper.appendChild(this.make("div",[this.CSS.blockName],{innerHTML:"Що далі?"})),this.nodes.wrapper.appendChild(this.nodes.next),this.nodes.url=this.make("div",[this.CSS.blockInput,this.CSS.input],{contentEditable:!0,innerHTML:a||""}),this.nodes.wrapper.appendChild(this.make("div",[this.CSS.blockName],{innerHTML:"URL для кнопки"})),this.nodes.wrapper.appendChild(this.nodes.url),this.nodes.wrapper}},{key:"validate",value:function(t){return console.log(t.when.trim()),""!==t.when.trim()&&""!==t.where.trim()&&""!==t.forWhom.trim()&&""!==t.cost.trim()&&""!==t.how.trim()&&""!==t.next.trim()&&""!==t.url.trim()&&this.isValidHttpUrl(t.url.trim())}},{key:"isValidHttpUrl",value:function(t){var e;try{e=new URL(t)}catch(t){return!1}return!("http:"!==e.protocol&&"https:"!==e.protocol||e.href!=t&&e.origin!=t)}},{key:"make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(t);Array.isArray(n)?(e=i.classList).add.apply(e,o(n)):n&&i.classList.add(n);for(var s in r)i[s]=r[s];return i}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,input:this.api.styles.input,loader:this.api.styles.loader,wrapper:"cdx-register",block:"cdx-register__block",blockName:"cdx-register__block_name",blockInput:"cdx-register__block_input",title:"cdx-register__title"}}}])&&a(e.prototype,n),r&&a(e,r),t}()},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".cdx-register__block_name {\n    margin-top: 20px;\n    margin-bottom: 5px;\n    font-weight: bold;\n}\n.cdx-register {\n    box-sizing: border-box;\n    padding: 30px;\n    background: #F7FAFE;\n    border-radius: 15px;\n    margin-top: 20px;\n}\n\n.cdx-register__title {\n    text-align: center;\n    font-size: 24px;\n    margin-bottom: 38px;\n}\n\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),o=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(o).concat([i]).join("\n")}var s,a,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},function(t,e,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,l=0,u=[],p=n(6);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(y(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],e));o[r.id]={id:r.id,refs:1,parts:a}}}}function f(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertAt.before,n);n.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return b(e,t.attrs),h(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=l++;n=c||(c=v(e)),r=S.bind(null,n,s,!1),i=S.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=p(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return d(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}t&&d(f(t,e),e);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var w,g=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function S(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}]).default});