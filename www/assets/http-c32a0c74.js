import{f as I,h as de,k as Q}from"./index-47390aba.js";var Y=globalThis&&globalThis.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var u=0,f=e.length,l;u<f;u++)(l||!(u in e))&&(l||(l=Array.prototype.slice.call(e,0,u)),l[u]=e[u]);return t.concat(l||Array.prototype.slice.call(e))},Ee=function(){function t(e,n,u){this.name=e,this.version=n,this.os=u,this.type="browser"}return t}(),Se=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return t}(),Re=function(){function t(e,n,u,f){this.name=e,this.version=n,this.os=u,this.bot=f,this.type="bot-device"}return t}(),Te=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),Pe=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),Ce=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,Ae=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,Z=3,Ne=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",Ce]],ee=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function xt(t){return t?te(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new Pe:typeof navigator<"u"?te(navigator.userAgent):Le()}function Ie(t){return t!==""&&Ne.reduce(function(e,n){var u=n[0],f=n[1];if(e)return e;var l=f.exec(t);return!!l&&[u,l]},!1)}function te(t){var e=Ie(t);if(!e)return null;var n=e[0],u=e[1];if(n==="searchbot")return new Te;var f=u[1]&&u[1].split(".").join("_").split("_").slice(0,3);f?f.length<Z&&(f=Y(Y([],f,!0),je(Z-f.length),!0)):f=[];var l=f.join("."),y=Me(t),O=Ae.exec(t);return O&&O[1]?new Re(n,l,y,O[1]):new Ee(n,l,y)}function Me(t){for(var e=0,n=ee.length;e<n;e++){var u=ee[e],f=u[0],l=u[1],y=l.exec(t);if(y)return f}return null}function Le(){var t=typeof process<"u"&&process.version;return t?new Se(process.version.slice(1)):null}function je(t){for(var e=[],n=0;n<t;n++)e.push("0");return e}var he={exports:{}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(function(t){var e,n,u,f,l,y,O,D,$,x,m,S,R,E,A,w,N,F,U,X,q,K,z;(function(v){var J=typeof I=="object"?I:typeof self=="object"?self:typeof this=="object"?this:{};v(r(J,r(t.exports)));function r(o,i){return o!==J&&(typeof Object.create=="function"?Object.defineProperty(o,"__esModule",{value:!0}):o.__esModule=!0),function(a,c){return o[a]=i?i(a,c):c}}})(function(v){var J=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])};e=function(r,o){J(r,o);function i(){this.constructor=r}r.prototype=o===null?Object.create(o):(i.prototype=o.prototype,new i)},n=Object.assign||function(r){for(var o,i=1,a=arguments.length;i<a;i++){o=arguments[i];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(r[c]=o[c])}return r},u=function(r,o){var i={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&o.indexOf(a)<0&&(i[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,a=Object.getOwnPropertySymbols(r);c<a.length;c++)o.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(r,a[c])&&(i[a[c]]=r[a[c]]);return i},f=function(r,o,i,a){var c=arguments.length,s=c<3?o:a===null?a=Object.getOwnPropertyDescriptor(o,i):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,o,i,a);else for(var p=r.length-1;p>=0;p--)(d=r[p])&&(s=(c<3?d(s):c>3?d(o,i,s):d(o,i))||s);return c>3&&s&&Object.defineProperty(o,i,s),s},l=function(r,o){return function(i,a){o(i,a,r)}},y=function(r,o){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,o)},O=function(r,o,i,a){function c(s){return s instanceof i?s:new i(function(d){d(s)})}return new(i||(i=Promise))(function(s,d){function p(b){try{h(a.next(b))}catch(L){d(L)}}function T(b){try{h(a.throw(b))}catch(L){d(L)}}function h(b){b.done?s(b.value):c(b.value).then(p,T)}h((a=a.apply(r,o||[])).next())})},D=function(r,o){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},a,c,s,d;return d={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function p(h){return function(b){return T([h,b])}}function T(h){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,c&&(s=h[0]&2?c.return:h[0]?c.throw||((s=c.return)&&s.call(c),0):c.next)&&!(s=s.call(c,h[1])).done)return s;switch(c=0,s&&(h=[h[0]&2,s.value]),h[0]){case 0:case 1:s=h;break;case 4:return i.label++,{value:h[1],done:!1};case 5:i.label++,c=h[1],h=[0];continue;case 7:h=i.ops.pop(),i.trys.pop();continue;default:if(s=i.trys,!(s=s.length>0&&s[s.length-1])&&(h[0]===6||h[0]===2)){i=0;continue}if(h[0]===3&&(!s||h[1]>s[0]&&h[1]<s[3])){i.label=h[1];break}if(h[0]===6&&i.label<s[1]){i.label=s[1],s=h;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(h);break}s[2]&&i.ops.pop(),i.trys.pop();continue}h=o.call(r,i)}catch(b){h=[6,b],c=0}finally{a=s=0}if(h[0]&5)throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}},z=function(r,o,i,a){a===void 0&&(a=i),r[a]=o[i]},$=function(r,o){for(var i in r)i!=="default"&&!o.hasOwnProperty(i)&&(o[i]=r[i])},x=function(r){var o=typeof Symbol=="function"&&Symbol.iterator,i=o&&r[o],a=0;if(i)return i.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&a>=r.length&&(r=void 0),{value:r&&r[a++],done:!r}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")},m=function(r,o){var i=typeof Symbol=="function"&&r[Symbol.iterator];if(!i)return r;var a=i.call(r),c,s=[],d;try{for(;(o===void 0||o-- >0)&&!(c=a.next()).done;)s.push(c.value)}catch(p){d={error:p}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(d)throw d.error}}return s},S=function(){for(var r=[],o=0;o<arguments.length;o++)r=r.concat(m(arguments[o]));return r},R=function(){for(var r=0,o=0,i=arguments.length;o<i;o++)r+=arguments[o].length;for(var a=Array(r),c=0,o=0;o<i;o++)for(var s=arguments[o],d=0,p=s.length;d<p;d++,c++)a[c]=s[d];return a},E=function(r){return this instanceof E?(this.v=r,this):new E(r)},A=function(r,o,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=i.apply(r,o||[]),c,s=[];return c={},d("next"),d("throw"),d("return"),c[Symbol.asyncIterator]=function(){return this},c;function d(_){a[_]&&(c[_]=function(j){return new Promise(function(k,Oe){s.push([_,j,k,Oe])>1||p(_,j)})})}function p(_,j){try{T(a[_](j))}catch(k){L(s[0][3],k)}}function T(_){_.value instanceof E?Promise.resolve(_.value.v).then(h,b):L(s[0][2],_)}function h(_){p("next",_)}function b(_){p("throw",_)}function L(_,j){_(j),s.shift(),s.length&&p(s[0][0],s[0][1])}},w=function(r){var o,i;return o={},a("next"),a("throw",function(c){throw c}),a("return"),o[Symbol.iterator]=function(){return this},o;function a(c,s){o[c]=r[c]?function(d){return(i=!i)?{value:E(r[c](d)),done:c==="return"}:s?s(d):d}:s}},N=function(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=r[Symbol.asyncIterator],i;return o?o.call(r):(r=typeof x=="function"?x(r):r[Symbol.iterator](),i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i);function a(s){i[s]=r[s]&&function(d){return new Promise(function(p,T){d=r[s](d),c(p,T,d.done,d.value)})}}function c(s,d,p,T){Promise.resolve(T).then(function(h){s({value:h,done:p})},d)}},F=function(r,o){return Object.defineProperty?Object.defineProperty(r,"raw",{value:o}):r.raw=o,r},U=function(r){if(r&&r.__esModule)return r;var o={};if(r!=null)for(var i in r)Object.hasOwnProperty.call(r,i)&&(o[i]=r[i]);return o.default=r,o},X=function(r){return r&&r.__esModule?r:{default:r}},q=function(r,o){if(!o.has(r))throw new TypeError("attempted to get private field on non-instance");return o.get(r)},K=function(r,o,i){if(!o.has(r))throw new TypeError("attempted to set private field on non-instance");return o.set(r,i),i},v("__extends",e),v("__assign",n),v("__rest",u),v("__decorate",f),v("__param",l),v("__metadata",y),v("__awaiter",O),v("__generator",D),v("__exportStar",$),v("__createBinding",z),v("__values",x),v("__read",m),v("__spread",S),v("__spreadArrays",R),v("__await",E),v("__asyncGenerator",A),v("__asyncDelegator",w),v("__asyncValues",N),v("__makeTemplateObject",F),v("__importStar",U),v("__importDefault",X),v("__classPrivateFieldGet",q),v("__classPrivateFieldSet",K)})})(he);var We=he.exports,g={};Object.defineProperty(g,"__esModule",{value:!0});var xe=g.getLocalStorage=nt=g.getLocalStorageOrThrow=et=g.getCrypto=Ye=g.getCryptoOrThrow=ze=g.getLocation=qe=g.getLocationOrThrow=Ge=g.getNavigator=Ve=g.getNavigatorOrThrow=Je=g.getDocument=$e=g.getDocumentOrThrow=Be=g.getFromWindowOrThrow=Fe=g.getFromWindow=void 0;function M(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}var Fe=g.getFromWindow=M;function W(t){const e=M(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}var Be=g.getFromWindowOrThrow=W;function De(){return W("document")}var $e=g.getDocumentOrThrow=De;function Ue(){return M("document")}var Je=g.getDocument=Ue;function ke(){return W("navigator")}var Ve=g.getNavigatorOrThrow=ke;function He(){return M("navigator")}var Ge=g.getNavigator=He;function Xe(){return W("location")}var qe=g.getLocationOrThrow=Xe;function Ke(){return M("location")}var ze=g.getLocation=Ke;function Qe(){return W("crypto")}var Ye=g.getCryptoOrThrow=Qe;function Ze(){return M("crypto")}var et=g.getCrypto=Ze;function tt(){return W("localStorage")}var nt=g.getLocalStorageOrThrow=tt;function rt(){return M("localStorage")}xe=g.getLocalStorage=rt;var H={};Object.defineProperty(H,"__esModule",{value:!0});var ot=H.getWindowMetadata=void 0;const ne=g;function it(){let t,e;try{t=ne.getDocumentOrThrow(),e=ne.getLocationOrThrow()}catch{return null}function n(){const m=t.getElementsByTagName("link"),S=[];for(let R=0;R<m.length;R++){const E=m[R],A=E.getAttribute("rel");if(A&&A.toLowerCase().indexOf("icon")>-1){const w=E.getAttribute("href");if(w)if(w.toLowerCase().indexOf("https:")===-1&&w.toLowerCase().indexOf("http:")===-1&&w.indexOf("//")!==0){let N=e.protocol+"//"+e.host;if(w.indexOf("/")===0)N+=w;else{const F=e.pathname.split("/");F.pop();const U=F.join("/");N+=U+"/"+w}S.push(N)}else if(w.indexOf("//")===0){const N=e.protocol+w;S.push(N)}else S.push(w)}}return S}function u(...m){const S=t.getElementsByTagName("meta");for(let R=0;R<S.length;R++){const E=S[R],A=["itemprop","property","name"].map(w=>E.getAttribute(w)).filter(w=>w?m.includes(w):!1);if(A.length&&A){const w=E.getAttribute("content");if(w)return w}}return""}function f(){let m=u("name","og:site_name","og:title","twitter:title");return m||(m=t.title),m}function l(){return u("description","og:description","twitter:description","keywords")}const y=f(),O=l(),D=e.origin,$=n();return{description:O,url:D,icons:$,name:y}}ot=H.getWindowMetadata=it;var Ft=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),ge="%[a-f0-9]{2}",re=new RegExp("("+ge+")|([^%]+?)","gi"),oe=new RegExp("("+ge+")+","gi");function V(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var n=t.slice(0,e),u=t.slice(e);return Array.prototype.concat.call([],V(n),V(u))}function st(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(re)||[],n=1;n<e.length;n++)t=V(e,n).join(""),e=t.match(re)||[];return t}}function at(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=oe.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch{var u=st(n[0]);u!==n[0]&&(e[n[0]]=u)}n=oe.exec(t)}e["%C2"]="�";for(var f=Object.keys(e),l=0;l<f.length;l++){var y=f[l];t=t.replace(new RegExp(y,"g"),e[y])}return t}var Bt=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return at(t)}},Dt=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const n=t.indexOf(e);return n===-1?[t]:[t.slice(0,n),t.slice(n+e.length)]},$t=function(t,e){for(var n={},u=Object.keys(t),f=Array.isArray(e),l=0;l<u.length;l++){var y=u[l],O=t[y];(f?e.indexOf(y)!==-1:e(y,O,t))&&(n[y]=O)}return n};const ct=t=>JSON.stringify(t,(e,n)=>typeof n=="bigint"?n.toString()+"n":n),ut=t=>{const e=/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,n=t.replace(e,'$1"$2n"$3');return JSON.parse(n,(u,f)=>typeof f=="string"&&f.match(/^\d+n$/)?BigInt(f.substring(0,f.length-1)):f)};function ft(t){if(typeof t!="string")throw new Error(`Cannot safe json parse value of type ${typeof t}`);try{return ut(t)}catch{return t}}function ie(t){return typeof t=="string"?t:ct(t)||""}const lt="PARSE_ERROR",dt="INVALID_REQUEST",ht="METHOD_NOT_FOUND",gt="INVALID_PARAMS",ve="INTERNAL_ERROR",G="SERVER_ERROR",vt=[-32700,-32600,-32601,-32602,-32603],B={[lt]:{code:-32700,message:"Parse error"},[dt]:{code:-32600,message:"Invalid Request"},[ht]:{code:-32601,message:"Method not found"},[gt]:{code:-32602,message:"Invalid params"},[ve]:{code:-32603,message:"Internal error"},[G]:{code:-32e3,message:"Server error"}},pe=G;function pt(t){return vt.includes(t)}function se(t){return Object.keys(B).includes(t)?B[t]:B[pe]}function wt(t){const e=Object.values(B).find(n=>n.code===t);return e||B[pe]}function yt(t,e,n){return t.message.includes("getaddrinfo ENOTFOUND")||t.message.includes("connect ECONNREFUSED")?new Error(`Unavailable ${n} RPC url at ${e}`):t}var _t={},P={},ae;function mt(){if(ae)return P;ae=1,Object.defineProperty(P,"__esModule",{value:!0}),P.isBrowserCryptoAvailable=P.getSubtleCrypto=P.getBrowerCrypto=void 0;function t(){return(I===null||I===void 0?void 0:I.crypto)||(I===null||I===void 0?void 0:I.msCrypto)||{}}P.getBrowerCrypto=t;function e(){const u=t();return u.subtle||u.webkitSubtle}P.getSubtleCrypto=e;function n(){return!!t()&&!!e()}return P.isBrowserCryptoAvailable=n,P}var C={},ce;function bt(){if(ce)return C;ce=1,Object.defineProperty(C,"__esModule",{value:!0}),C.isBrowser=C.isNode=C.isReactNative=void 0;function t(){return typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"}C.isReactNative=t;function e(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}C.isNode=e;function n(){return!t()&&!e()}return C.isBrowser=n,C}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=We;e.__exportStar(mt(),t),e.__exportStar(bt(),t)})(_t);function we(t=3){const e=Date.now()*Math.pow(10,t),n=Math.floor(Math.random()*Math.pow(10,t));return e+n}function Ot(t=6){return BigInt(we(t))}function Et(t,e,n){return{id:n||we(),jsonrpc:"2.0",method:t,params:e}}function Ut(t,e){return{id:t,jsonrpc:"2.0",result:e}}function St(t,e,n){return{id:t,jsonrpc:"2.0",error:Rt(e,n)}}function Rt(t,e){return typeof t>"u"?se(ve):(typeof t=="string"&&(t=Object.assign(Object.assign({},se(G)),{message:t})),typeof e<"u"&&(t.data=e),pt(t.code)&&(t=wt(t.code)),t)}class ye{}class Jt extends ye{constructor(e){super()}}class Tt extends ye{constructor(){super()}}class Pt extends Tt{constructor(e){super()}}const Ct="^https?:",At="^wss?:";function Nt(t){const e=t.match(new RegExp(/^\w+:/,"gi"));if(!(!e||!e.length))return e[0]}function _e(t,e){const n=Nt(t);return typeof n>"u"?!1:new RegExp(e).test(n)}function ue(t){return _e(t,Ct)}function kt(t){return _e(t,At)}function Vt(t){return new RegExp("wss?://localhost(:d{2,5})?").test(t)}function me(t){return typeof t=="object"&&"id"in t&&"jsonrpc"in t&&t.jsonrpc==="2.0"}function Ht(t){return me(t)&&"method"in t}function It(t){return me(t)&&(Mt(t)||be(t))}function Mt(t){return"result"in t}function be(t){return"error"in t}class Gt extends Pt{constructor(e){super(e),this.events=new de.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(e),this.connection.connected&&this.registerEventListeners()}async connect(e=this.connection){await this.open(e)}async disconnect(){await this.close()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async request(e,n){return this.requestStrict(Et(e.method,e.params||[],e.id||Ot().toString()),n)}async requestStrict(e,n){return new Promise(async(u,f)=>{if(!this.connection.connected)try{await this.open()}catch(l){f(l)}this.events.on(`${e.id}`,l=>{be(l)?f(l.error):u(l.result)});try{await this.connection.send(e,n)}catch(l){f(l)}})}setConnection(e=this.connection){return e}onPayload(e){this.events.emit("payload",e),It(e)?this.events.emit(`${e.id}`,e):this.events.emit("message",{type:e.method,data:e.params})}onClose(e){e&&e.code===3e3&&this.events.emit("error",new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)),this.events.emit("disconnect")}async open(e=this.connection){this.connection===e&&this.connection.connected||(this.connection.connected&&this.close(),typeof e=="string"&&(await this.connection.open(e),e=this.connection),this.connection=this.setConnection(e),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",e=>this.onPayload(e)),this.connection.on("close",e=>this.onClose(e)),this.connection.on("error",e=>this.events.emit("error",e)),this.connection.on("register_error",e=>this.onClose()),this.hasRegisteredEventListeners=!0)}}const Lt={Accept:"application/json","Content-Type":"application/json"},jt="POST",fe={headers:Lt,method:jt},le=10;class Xt{constructor(e,n=!1){if(this.url=e,this.disableProviderPing=n,this.events=new de.EventEmitter,this.isAvailable=!1,this.registering=!1,!ue(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);this.url=e,this.disableProviderPing=n}get connected(){return this.isAvailable}get connecting(){return this.registering}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e=this.url){await this.register(e)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(e,n){this.isAvailable||await this.register();try{const u=ie(e),l=await(await Q(this.url,Object.assign(Object.assign({},fe),{body:u}))).json();this.onPayload({data:l})}catch(u){this.onError(e.id,u)}}async register(e=this.url){if(!ue(e))throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);if(this.registering){const n=this.events.getMaxListeners();return(this.events.listenerCount("register_error")>=n||this.events.listenerCount("open")>=n)&&this.events.setMaxListeners(n+1),new Promise((u,f)=>{this.events.once("register_error",l=>{this.resetMaxListeners(),f(l)}),this.events.once("open",()=>{if(this.resetMaxListeners(),typeof this.isAvailable>"u")return f(new Error("HTTP connection is missing or invalid"));u()})})}this.url=e,this.registering=!0;try{if(!this.disableProviderPing){const n=ie({id:1,jsonrpc:"2.0",method:"test",params:[]});await Q(e,Object.assign(Object.assign({},fe),{body:n}))}this.onOpen()}catch(n){const u=this.parseError(n);throw this.events.emit("register_error",u),this.onClose(),u}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(e){if(typeof e.data>"u")return;const n=typeof e.data=="string"?ft(e.data):e.data;this.events.emit("payload",n)}onError(e,n){const u=this.parseError(n),f=u.message||u.toString(),l=St(e,f);this.events.emit("payload",l)}parseError(e,n=this.url){return yt(e,n,"HTTP")}resetMaxListeners(){this.events.getMaxListeners()>le&&this.events.setMaxListeners(le)}}export{Be as A,$e as B,Ve as C,qe as D,Ye as E,et as F,nt as G,Xt as H,we as I,Gt as J,Jt as K,Ft as a,Ge as b,Je as c,Bt as d,xt as e,$t as f,ot as g,ze as h,ie as i,kt as j,_t as k,Vt as l,ft as m,St as n,Ht as o,yt as p,It as q,Ut as r,Dt as s,We as t,Mt as u,be as v,Et as w,Ot as x,xe as y,Fe as z};