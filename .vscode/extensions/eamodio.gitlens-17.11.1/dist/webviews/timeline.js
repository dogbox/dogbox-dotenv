let e,t,o,r,i,s;var a,c,h,p,u,f,g,b,m,v,w,x,_={2379(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function o(e,t){for(var o,r="",i=0,s=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)o=e.charCodeAt(c);else if(47===o)break;else o=47;if(47===o){if(s===c-1||1===a);else if(s!==c-1&&2===a){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var h=r.lastIndexOf("/");if(h!==r.length-1){-1===h?(r="",i=0):i=(r=r.slice(0,h)).length-1-r.lastIndexOf("/"),s=c,a=0;continue}}else if(2===r.length||1===r.length){r="",i=0,s=c,a=0;continue}}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(s+1,c):r=e.slice(s+1,c),i=c-s-1;s=c,a=0}else 46===o&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r,i="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?r=arguments[a]:(void 0===e&&(e=process.cwd()),r=e),t(r),0!==r.length&&(i=r+"/"+i,s=47===r.charCodeAt(0));if(i=o(i,!s),s)if(i.length>0)return"/"+i;else return"/";return i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=o(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,o=0;o<arguments.length;++o){var i=arguments[o];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,o){if(t(e),t(o),e===o||(e=r.resolve(e))===(o=r.resolve(o)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var s=e.length,a=s-i,c=1;c<o.length&&47===o.charCodeAt(c);++c);for(var h=o.length-c,p=a<h?a:h,u=-1,f=0;f<=p;++f){if(f===p){if(h>p){if(47===o.charCodeAt(c+f))return o.slice(c+f+1);else if(0===f)return o.slice(c+f)}else a>p&&(47===e.charCodeAt(i+f)?u=f:0===f&&(u=0));break}var g=e.charCodeAt(i+f);if(g!==o.charCodeAt(c+f))break;47===g&&(u=f)}var b="";for(f=i+u+1;f<=s;++f)(f===s||47===e.charCodeAt(f))&&(0===b.length?b+="..":b+="/..");return b.length>0?b+o.slice(c+u):(c+=u,47===o.charCodeAt(c)&&++c,o.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var o=e.charCodeAt(0),r=47===o,i=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(o=e.charCodeAt(a))){if(!s){i=a;break}}else s=!1;return -1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,o){if(void 0!==o&&"string"!=typeof o)throw TypeError('"ext" argument must be a string');t(e);var r,i=0,s=-1,a=!0;if(void 0!==o&&o.length>0&&o.length<=e.length){if(o.length===e.length&&o===e)return"";var c=o.length-1,h=-1;for(r=e.length-1;r>=0;--r){var p=e.charCodeAt(r);if(47===p){if(!a){i=r+1;break}}else -1===h&&(a=!1,h=r+1),c>=0&&(p===o.charCodeAt(c)?-1==--c&&(s=r):(c=-1,s=h))}return i===s?s=h:-1===s&&(s=e.length),e.slice(i,s)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){i=r+1;break}}else -1===s&&(a=!1,s=r+1);return -1===s?"":e.slice(i,s)},extname:function(e){t(e);for(var o=-1,r=0,i=-1,s=!0,a=0,c=e.length-1;c>=0;--c){var h=e.charCodeAt(c);if(47===h){if(!s){r=c+1;break}continue}-1===i&&(s=!1,i=c+1),46===h?-1===o?o=c:1!==a&&(a=1):-1!==o&&(a=-1)}return -1===o||-1===i||0===a||1===a&&o===i-1&&o===r+1?"":e.slice(o,i)},format:function(e){var t,o;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,o=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+o:t+"/"+o:o},parse:function(e){t(e);var o,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var i=e.charCodeAt(0),s=47===i;s?(r.root="/",o=1):o=0;for(var a=-1,c=0,h=-1,p=!0,u=e.length-1,f=0;u>=o;--u){if(47===(i=e.charCodeAt(u))){if(!p){c=u+1;break}continue}-1===h&&(p=!1,h=u+1),46===i?-1===a?a=u:1!==f&&(f=1):-1!==a&&(f=-1)}return -1===a||-1===h||0===f||1===f&&a===h-1&&a===c+1?-1!==h&&(0===c&&s?r.base=r.name=e.slice(1,h):r.base=r.name=e.slice(c,h)):(0===c&&s?(r.name=e.slice(1,a),r.base=e.slice(1,h)):(r.name=e.slice(c,a),r.base=e.slice(c,h)),r.ext=e.slice(a,h)),c>0?r.dir=e.slice(0,c-1):s&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r},6047(e,t,o){let r=o(602),i=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,s=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,a=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/yu,c=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,h=/\p{M}+/gu,p={limit:1/0,ellipsis:""},u=(e,t={},o={})=>{let f=t.limit??1/0,g=t.ellipsis??"",b=t?.ellipsisWidth??(g?u(g,p,o).width:0),m=o.ansiWidth??0,v=o.controlWidth??0,w=o.ambiguousWidth??1,x=o.emojiWidth??2,_=o.fullWidthWidth??2,$=o.regularWidth??1,C=o.wideWidth??2,P=0,S=0,A=e.length,E=0,O=!1,T=A,D=Math.max(0,f-b),M=0,B=0,F=0,N=0;e:for(;;){if(B>M||S>=A&&S>P){for(let t of(E=0,(e.slice(M,B)||e.slice(P,S)).replaceAll(h,""))){let e=t.codePointAt(0)||0;if(F+(N=(0,r.isFullWidth)(e)?_:(0,r.isWide)(e)?C:w!==$&&(0,r.isAmbiguous)(e)?w:$)>D&&(T=Math.min(T,Math.max(M,P)+E)),F+N>f){O=!0;break e}E+=t.length,F+=N}M=B=0}if(S>=A)break;if(c.lastIndex=S,c.test(e)){if(F+(N=(E=c.lastIndex-S)*$)>D&&(T=Math.min(T,S+Math.floor((D-F)/$))),F+N>f){O=!0;break}F+=N,M=P,B=S,S=P=c.lastIndex;continue}if(i.lastIndex=S,i.test(e)){if(F+m>D&&(T=Math.min(T,S)),F+m>f){O=!0;break}F+=m,M=P,B=S,S=P=i.lastIndex;continue}if(s.lastIndex=S,s.test(e)){if(F+(N=(E=s.lastIndex-S)*v)>D&&(T=Math.min(T,S+Math.floor((D-F)/v))),F+N>f){O=!0;break}F+=N,M=P,B=S,S=P=s.lastIndex;continue}if(a.lastIndex=S,a.test(e)){if(F+x>D&&(T=Math.min(T,S)),F+x>f){O=!0;break}F+=x,M=P,B=S,S=P=a.lastIndex;continue}S+=1}return{width:O?D:F,index:O?T:A,truncated:O,ellipsed:O&&f>=b}};t.A=u},602(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},$={};function C(e){var t=$[e];if(void 0!==t)return t.exports;var o=$[e]={exports:{}};return _[e](o,o.exports,C),o.exports}C.m=_,C.d=(e,t)=>{for(var o in t)C.o(t,o)&&!C.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},C.f={},C.e=e=>Promise.all(Object.keys(C.f).reduce((t,o)=>(C.f[o](e,t),t),[])),C.u=e=>"lib-billboard.js",C.miniCssF=e=>{},C.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch{if("object"==typeof window)return window}}(),C.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),C.p="#{root}/dist/webviews/",Object.defineProperty(C,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}}),a={122:0},c=e=>{var t,o,{__webpack_esm_ids__:r,__webpack_esm_modules__:i,__webpack_esm_runtime__:s}=e,c=0;for(t in i)C.o(i,t)&&(C.m[t]=i[t]);for(s&&s(C);c<r.length;c++)o=r[c],C.o(a,o)&&a[o]&&a[o][0](),a[r[c]]=0},C.f.j=(e,t)=>{var o=C.o(a,e)?a[e]:void 0;if(0!==o)if(o)t.push(o[1]);else{var r=import(C.p+C.u(e)).then(c,t=>{throw 0!==a[e]&&(a[e]=void 0),t}),r=Promise.race([r,new Promise(t=>o=a[e]=[t])]);t.push(o[1]=r)}};let P=globalThis,S=P.ShadowRoot&&(void 0===P.ShadyCSS||P.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,A=Symbol(),E=new WeakMap;let n=class n{constructor(e,t,o){if(this._$cssResult$=!0,o!==A)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(S&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=E.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&E.set(t,e))}return e}toString(){return this.cssText}};let O=e=>new n("string"==typeof e?e:e+"",void 0,A),T=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,o,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]),e,A),D=S?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return O(t)})(e):e,{is:M,defineProperty:B,getOwnPropertyDescriptor:F,getOwnPropertyNames:N,getOwnPropertySymbols:j,getPrototypeOf:U}=Object,q=globalThis,V=q.trustedTypes,W=V?V.emptyScript:"",G=q.reactiveElementPolyfillSupport,K={toAttribute(e,t){switch(t){case Boolean:e=e?W:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},Y=(e,t)=>!M(e,t),X={attribute:!0,type:String,converter:K,reflect:!1,useDefault:!1,hasChanged:Y};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=X){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),r=this.getPropertyDescriptor(e,o,t);void 0!==r&&B(this.prototype,e,r)}}static getPropertyDescriptor(e,t,o){let{get:r,set:i}=F(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let s=r?.call(this);i?.call(this,t),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??X}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=U(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...N(e),...j(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(D(o));else void 0!==e&&t.push(D(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(S)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),r=P.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,o);if(void 0!==r&&!0===o.reflect){let i=(void 0!==o.converter?.toAttribute?o.converter:K).toAttribute(t,o.type);this._$Em=e,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let o=this.constructor,r=o._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=o.getPropertyOptions(r),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:K;this._$Em=r;let s=i.fromAttribute(t,e.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(e,t,o,r=!1,i){if(void 0!==e){let s=this.constructor;if(!1===r&&(i=this[e]),!(((o??=s.getPropertyOptions(e)).hasChanged??Y)(i,t)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:r,wrapped:i},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==i||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e){let{wrapped:e}=o,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,o,r)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,G?.({ReactiveElement:y}),(q.reactiveElementVersions??=[]).push("2.1.2");let J=globalThis,Q=e=>e,ee=J.trustedTypes,et=ee?ee.createPolicy("lit-html",{createHTML:e=>e}):void 0,eo="$lit$",er=`lit$${Math.random().toFixed(9).slice(2)}$`,ei="?"+er,es=`<${ei}>`,en=document,ea=()=>en.createComment(""),el=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ec=Array.isArray,eh=e=>ec(e)||"function"==typeof e?.[Symbol.iterator],ed=`[ 	
\x0c\r]`,ep=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eu=/-->/g,ef=/>/g,eg=RegExp(`>|${ed}(?:([^\\s"'>=/]+)(${ed}*=${ed}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eb=/'/g,em=/"/g,ev=/^(?:script|style|textarea|title)$/i,ey=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),ew=ey(1),ex=(ey(2),ey(3),Symbol.for("lit-noChange")),ek=Symbol.for("lit-nothing"),e_=new WeakMap,e$=en.createTreeWalker(en,129);function eC(e,t){if(!ec(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==et?et.createHTML(t):t}let eP=(e,t)=>{let o=e.length-1,r=[],i,s=2===t?"<svg>":3===t?"<math>":"",a=ep;for(let t=0;t<o;t++){let o=e[t],c,h,p=-1,u=0;for(;u<o.length&&(a.lastIndex=u,null!==(h=a.exec(o)));)u=a.lastIndex,a===ep?"!--"===h[1]?a=eu:void 0!==h[1]?a=ef:void 0!==h[2]?(ev.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=eg):void 0!==h[3]&&(a=eg):a===eg?">"===h[0]?(a=i??ep,p=-1):void 0===h[1]?p=-2:(p=a.lastIndex-h[2].length,c=h[1],a=void 0===h[3]?eg:'"'===h[3]?em:eb):a===em||a===eb?a=eg:a===eu||a===ef?a=ep:(a=eg,i=void 0);let f=a===eg&&e[t+1].startsWith("/>")?" ":"";s+=a===ep?o+es:p>=0?(r.push(c),o.slice(0,p)+eo+o.slice(p)+er+f):o+er+(-2===p?t:f)}return[eC(e,s+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};let lit_html_S=class lit_html_S{constructor({strings:e,_$litType$:t},o){let r;this.parts=[];let i=0,s=0,a=e.length-1,c=this.parts,[h,p]=eP(e,t);if(this.el=lit_html_S.createElement(h,o),e$.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=e$.nextNode())&&c.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(eo)){let t=p[s++],o=r.getAttribute(e).split(er),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:i,name:a[2],strings:o,ctor:"."===a[1]?I:"?"===a[1]?L:"@"===a[1]?z:H}),r.removeAttribute(e)}else e.startsWith(er)&&(c.push({type:6,index:i}),r.removeAttribute(e));if(ev.test(r.tagName)){let e=r.textContent.split(er),t=e.length-1;if(t>0){r.textContent=ee?ee.emptyScript:"";for(let o=0;o<t;o++)r.append(e[o],ea()),e$.nextNode(),c.push({type:2,index:++i});r.append(e[t],ea())}}}else if(8===r.nodeType)if(r.data===ei)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(er,e+1));)c.push({type:7,index:i}),e+=er.length-1}i++}}static createElement(e,t){let o=en.createElement("template");return o.innerHTML=e,o}};function eS(e,t,o=e,r){if(t===ex)return t;let i=void 0!==r?o._$Co?.[r]:o._$Cl,s=el(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e))._$AT(e,o,r),void 0!==r?(o._$Co??=[])[r]=i:o._$Cl=i),void 0!==i&&(t=eS(e,i._$AS(e,t.values),i,r)),t}let R=class R{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,r=(e?.creationScope??en).importNode(t,!0);e$.currentNode=r;let i=e$.nextNode(),s=0,a=0,c=o[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new k(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new Z(i,this,e)),this._$AV.push(t),c=o[++a]}s!==c?.index&&(i=e$.nextNode(),s++)}return e$.currentNode=en,r}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};let k=class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,r){this.type=2,this._$AH=ek,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){el(e=eS(this,e,t))?e===ek||null==e||""===e?(this._$AH!==ek&&this._$AR(),this._$AH=ek):e!==this._$AH&&e!==ex&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):eh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ek&&el(this._$AH)?this._$AA.nextSibling.data=e:this.T(en.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,r="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=lit_html_S.createElement(eC(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new R(r,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=e_.get(e.strings);return void 0===t&&e_.set(e.strings,t=new lit_html_S(e)),t}k(e){ec(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,r=0;for(let i of e)r===t.length?t.push(o=new k(this.O(ea()),this.O(ea()),this,this.options)):o=t[r],o._$AI(i),r++;r<t.length&&(this._$AR(o&&o._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Q(e).nextSibling;Q(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let H=class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,r,i){this.type=1,this._$AH=ek,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ek}_$AI(e,t=this,o,r){let i=this.strings,s=!1;if(void 0===i)(s=!el(e=eS(this,e,t,0))||e!==this._$AH&&e!==ex)&&(this._$AH=e);else{let r,a,c=e;for(e=i[0],r=0;r<i.length-1;r++)(a=eS(this,c[o+r],t,r))===ex&&(a=this._$AH[r]),s||=!el(a)||a!==this._$AH[r],a===ek?e=ek:e!==ek&&(e+=(a??"")+i[r+1]),this._$AH[r]=a}s&&!r&&this.j(e)}j(e){e===ek?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let I=class I extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ek?void 0:e}};let L=class L extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ek)}};let z=class z extends H{constructor(e,t,o,r,i){super(e,t,o,r,i),this.type=5}_$AI(e,t=this){if((e=eS(this,e,t,0)??ek)===ex)return;let o=this._$AH,r=e===ek&&o!==ek||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==ek&&(o===ek||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let Z=class Z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){eS(this,e)}};let eA=J.litHtmlPolyfillSupport;eA?.(lit_html_S,k),(J.litHtmlVersions??=[]).push("3.3.2");let eE=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let r=o?.renderBefore??t,i=r._$litPart$;if(void 0===i){let e=o?.renderBefore??null;r._$litPart$=i=new k(t.insertBefore(ea(),e),e,void 0,o??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ex}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eE.litElementHydrateSupport?.({LitElement:lit_element_i});let ez=eE.litElementPolyfillSupport;ez?.({LitElement:lit_element_i}),(eE.litElementVersions??=[]).push("4.2.2");let eO=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eT={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Y};function eR(e){return(t,o)=>{let r;return"object"==typeof o?((e=eT,t,o)=>{let{kind:r,metadata:i}=o,s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),"accessor"===r){let{name:r}=o;return{set(o){let i=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,i,e,!0,o)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){let{name:r}=o;return function(o){let i=this[r];t.call(this,o),this.requestUpdate(r,i,e,!0,o)}}throw Error("Unsupported decorator location: "+r)})(e,t,o):(r=t.hasOwnProperty(o),t.constructor.createProperty(o,e),r?Object.getOwnPropertyDescriptor(t,o):void 0)}}function eD(e){return eR({...e,state:!0,attribute:!1})}let eI=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function eL(e,t){return(o,r,i)=>{let s=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:t,set:a}="object"==typeof r?o:i??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return eI(o,r,{get(){let e=t.call(this);return void 0===e&&(null!==(e=s(this))||this.hasUpdated)&&a.call(this,e),e}})}return eI(o,r,{get(){return s(this)}})}}let eM="0000000000000000000000000000000000000000:",eB=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,eF=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,eN=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,ej=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,eU=/(^[0-9a-f]{40}([\^@~:]\S*)?$)|(^[0]{40}(:|-)$)/,eq=/^(.*?)([\^@~:].*)?$/,eH=/^[0]{40}(?:[\^@~:]\S*)?:?$/,eV=/^[0]{40}([\^@~]\S*)?:$/;function eW(e,t){return!!t&&e.test(t)}function eG(e,t=!1){return"0000000000000000000000000000000000000000"===e||e===eM||!t&&eW(eH,e)}let eK=7;function eZ(e,t){if("0000000000000000000000000000000000000000-"===e)return"(deleted)";if(!e)return t?.strings?.working??"";if(eG(e))return!function(e,t=!1){return e===eM||!t&&eW(eV,e)}(e)?t?.strings?.uncommitted??"Working Tree":t?.strings?.uncommittedStaged??"Index";if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return eF.test(e);case"qualified-double-dot":return eN.test(e);case"qualified-triple-dot":return ej.test(e);default:return eB.test(e)}}(e)||!eW(eU,e))return e;let o=Math.max(5,eK),r=eq.exec(e);if(null!=r){let[,e,t]=r;if(null!=t)return`${e.substring(0,o)}${t}`}return e.substring(0,o)}var eY=((h=eY||{})[h.VerificationRequired=-1]="VerificationRequired",h[h.Community=0]="Community",h[h.DeprecatedPreview=1]="DeprecatedPreview",h[h.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",h[h.Trial=3]="Trial",h[h.TrialExpired=4]="TrialExpired",h[h.TrialReactivationEligible=5]="TrialReactivationEligible",h[h.Paid=6]="Paid",h);let eX=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,eJ=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,eQ=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],e0=new Map,e1=new Map;function e2(e,t){let o=new Date(e.getTime());for(let[e,r]of Object.entries(t))if(r)switch(e){case"years":o.setFullYear(o.getFullYear()+r);break;case"months":o.setMonth(o.getMonth()+r);break;case"days":o.setDate(o.getDate()+r);break;case"hours":o.setHours(o.getHours()+r);break;case"minutes":o.setMinutes(o.getMinutes()+r);break;case"seconds":o.setSeconds(o.getSeconds()+r)}return o}function e5(t,o,r,i=!0){o=o??void 0;let s=`${r??""}:${o}`,a=e0.get(s);if(null==a){let t=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=eJ.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(eX))if(null!=t){for(let[e,r]of Object.entries(t))if(null!=r)switch(e){case"year":o.year=4===r.length?"numeric":"2-digit";break;case"month":switch(r.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===r?o.day="2-digit":o.day="numeric";break;case"weekday":switch(r.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===r.length?"2-digit":"numeric",o.hour12="hh"===r||"h"===r;break;case"minute":o.minute=2===r.length?"2-digit":"numeric";break;case"second":o.second=2===r.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===r.length?"long":"short"}}return o}(o);a=new Intl.DateTimeFormat(null==r?e:"system"===r?void 0:[r],t),i&&e0.set(s,a)}if(null==o||eJ.test(o))return a.format(t);let c=a.formatToParts(t);return o.replace(eX,(o,s,a,h,p,u,f,g,b,m,v,w,x,_,$)=>{if(null!=s)return s.substring(1,s.length-1);for(let[o,s]of Object.entries($)){if(null==s)continue;let a=c.find(e=>e.type===o);if("Do"===s&&a?.type==="day")return function(e){let t=e%100;return`${e}${e8[(t-20)%10]??e8[t]??e8[0]}`}(Number(a.value));if("a"===s&&a?.type==="dayPeriod"){let o=(function(t){let o=`${r??""}:time:${t}`,s=e0.get(o);if(null==s){let a;a=null==r?e:"system"===r?void 0:[r],s=new Intl.DateTimeFormat(a,{localeMatcher:"best fit",timeStyle:t}),i&&e0.set(o,s)}return s})("short").formatToParts(t).find(e=>"dayPeriod"===e.type);return` ${(o??a)?.value??""}`}return a?.value??""}return""})}let e8=["th","st","nd","rd"];function e3(t,o){t??="decimal";let r=`${o??""}:${t}`,i=e1.get(r);if(null==i){let s={localeMatcher:"best fit",style:t};i=new Intl.NumberFormat(null==o?e:"system"===o?void 0:[o],s),e1.set(r,i)}return i.format}let e4=["student","pro","advanced","teams","enterprise"];function e6(e){var t;return t=e.plan.actual.id,e4.includes(t)}function e7(e,t,o){let r,i,s,a,c,h,p,u,f,g,b=0;null!=o&&({edges:h,maxWait:p,signal:u,aggregator:f}=o);let m="leading"===(h??="trailing")||"both"===h,v="trailing"===h||"both"===h;function w(){if(null!=r){b=Date.now();let t=r,o=g;return g=void 0,r=void 0,s=e.apply(o,t)}}function x(){null!=a&&(clearTimeout(a),a=void 0)}function _(){null!=c&&(clearTimeout(c),c=void 0)}function $(){x(),_(),g=void 0,r=void 0,i=void 0,b=0}function C(...e){if(u?.aborted)return;let o=Date.now();null!=f&&null!=r?r=f(r,e):(g=this,r=e);let h=null==a&&null==c;i=o,x();let _=Date.now();if(i=_,a=setTimeout(()=>{a=void 0,function e(){let o,r,s=Date.now();if(o=s-(i??0),r=s-b,null==i||o>=t||o<0||null!=p&&r>=p){v&&w(),$();return}a=setTimeout(()=>{a=void 0,e()},t-(s-(i??0)))}()},t),null!=p&&!c){0===b&&(b=_);let e=p-(_-b);e>0?c=setTimeout(()=>{c=void 0,v&&null!=r&&w(),b=Date.now()},e):(v&&null!=r&&w(),$())}return m&&h?w():s}return C.cancel=$,C.flush=function(){return x(),_(),w()},C.pending=function(){return null!=a||null!=c},u?.addEventListener("abort",$,{once:!0}),C}var e9=C(2379);let te=navigator?.userAgentData?.platform,tt=navigator.userAgent;"Linux"===te||tt.includes("Linux"),"macOS"===te||tt.includes("Macintosh"),"Windows"===te||tt.includes("Windows");let IpcCall=class IpcCall{constructor(e,t,o=!1){this.scope=e,this.reset=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,o){super(e,t,o),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let to="timeline",tr=new IpcRequest(to,"ref/choose"),ti=new IpcRequest(to,"path/choose"),ts=new IpcCommand(to,"point/open"),tn=new IpcCommand(to,"config/update"),ta=new IpcCommand(to,"scope/update"),tl=new IpcNotification(to,"didChange");let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,o,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=o,this.subscribe=r??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,o,r){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=o,this.subscribe=r??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:o}]of this.subscriptions)t.has(e)||(t.add(e),o.dispatchEvent(new context_request_event_s(this.context,o,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function tc({context:e}){return(t,o)=>{let r=new WeakMap;if("object"==typeof o)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let i;t.constructor.addInitializer(t=>{r.set(t,new context_provider_i(t,{context:e}))});let s=Object.getOwnPropertyDescriptor(t,o);if(void 0===s){let e=new WeakMap;i={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=s.set;i={...s,set(t){r.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,o,i)}}}function th({context:e,subscribe:t}){return(o,r)=>{"object"==typeof r?r.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{o.set.call(this,e)},subscribe:t})}):o.constructor.addInitializer(o=>{new context_consumer_s(o,{context:e,callback:e=>{o[r]=e},subscribe:t})})}}let td=new IpcRequest("core","webview/ready"),tp=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let tu=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let tf=new IpcCommand("core","telemetry/sendEvent"),tg=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let tb=new IpcCommand("core","webview/focus/didChange"),tm=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let tv=new WeakMap;function ty(e,t){return function(o,r,i){let s=tv.get(o.constructor);null==s&&tv.set(o.constructor,s=[]),s.push({method:i.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,o){let r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(r),r}update(e){let t=tv.get(this.constructor);if(null!=t)for(let{keys:o,method:r,afterFirstUpdate:i}of t){if(i&&!this.hasUpdated)continue;let t=o.filter(t=>e.has(t));t.length&&r.call(this,t)}super.update(e)}};var tw=C(6047);function tx(e){let t=.001*performance.now(),o=Math.floor(t),r=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(r-=e[1])<0&&(o--,r+=1e9)),[o,r]}var tk=((p=tk||{})[p.Hash=35]="Hash",p[p.Slash=47]="Slash",p[p.Digit0=48]="Digit0",p[p.Digit1=49]="Digit1",p[p.Digit2=50]="Digit2",p[p.Digit3=51]="Digit3",p[p.Digit4=52]="Digit4",p[p.Digit5=53]="Digit5",p[p.Digit6=54]="Digit6",p[p.Digit7=55]="Digit7",p[p.Digit8=56]="Digit8",p[p.Digit9=57]="Digit9",p[p.Backslash=92]="Backslash",p[p.A=65]="A",p[p.B=66]="B",p[p.C=67]="C",p[p.D=68]="D",p[p.E=69]="E",p[p.F=70]="F",p[p.Z=90]="Z",p[p.a=97]="a",p[p.b=98]="b",p[p.c=99]="c",p[p.d=100]="d",p[p.e=101]="e",p[p.f=102]="f",p[p.z=122]="z",p),t_=((u=t_||{}).AngleBracketLeftHeavy="❰",u.AngleBracketRightHeavy="❱",u.ArrowBack="↩",u.ArrowDown="↓",u.ArrowDownUp="⇵",u.ArrowDropRight="⤷",u.ArrowHeadRight="➤",u.ArrowLeft="←",u.ArrowLeftDouble="⇐",u.ArrowLeftRight="↔",u.ArrowLeftRightDouble="⇔",u.ArrowLeftRightDoubleStrike="⇎",u.ArrowLeftRightLong="⟷",u.ArrowRight="→",u.ArrowRightDouble="⇒",u.ArrowRightHollow="⇨",u.ArrowUp="↑",u.ArrowUpDown="⇅",u.ArrowUpRight="↗",u.ArrowsHalfLeftRight="⇋",u.ArrowsHalfRightLeft="⇌",u.ArrowsLeftRight="⇆",u.ArrowsRightLeft="⇄",u.Asterisk="∗",u.Bullseye="◎",u.Check="✔",u.Dash="—",u.Dot="•",u.Ellipsis="…",u.EnDash="–",u.Envelope="✉",u.EqualsTriple="≡",u.Flag="⚑",u.FlagHollow="⚐",u.MiddleEllipsis="⋯",u.MuchLessThan="≪",u.MuchGreaterThan="≫",u.Pencil="✎",u.Space=" ",u.SpaceThin=" ",u.SpaceThinnest=" ",u.SquareWithBottomShadow="❏",u.SquareWithTopShadow="❐",u.Warning="⚠",u.ZeroWidthSpace="​",u);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var t$=((f=t$||{}).File="file",f.Git="git",f.GitHub="github",f.GitLens="gitlens",f.GitLensAIMarkdown="gitlens-ai-markdown",f.PRs="pr",f.Remote="vscode-remote",f.Vsls="vsls",f.VslsScc="vsls-scc",f.Virtual="vscode-vfs",f);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let tC="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",tP=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${tC}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${tC}`,graph:`https://gitkraken.com/solutions/commit-graph?${tC}`,launchpad:`https://gitkraken.com/solutions/launchpad?${tC}`,platform:`https://gitkraken.com/devex?${tC}`,pricing:`https://gitkraken.com/gitlens/pricing?${tC}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${tC}`,security:`https://help.gitkraken.com/gitlens/security?${tC}`,workspaces:`https://gitkraken.com/solutions/workspaces?${tC}`,cli:`https://gitkraken.com/cli?${tC}`,browserExtension:`https://gitkraken.com/browser-extension?${tC}`,desktop:`https://gitkraken.com/git-client?${tC}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${tC}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${tC}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tC}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${tC}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${tC}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${tC}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tC}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${tC}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${tC}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tC}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${tC}#improve-workflows-with-integrations`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${tC}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${tC}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${tC}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${tC}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${tC}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${tC}`});function tS(e){let[t,o]=tx(e);return 1e3*t+Math.floor(o/1e6)}let tA={ellipsisWidth:0,limit:0x40000000-1},tE={ansiWidth:0,controlWidth:0,ambiguousWidth:1,emojiWidth:2,fullWidthWidth:2,regularWidth:1,wideWidth:2};function tz(e,t,r){let i;if(null==r)return o??=e3(),`${o(t)} ${e}${1===t?"":"s"}`;let s=1===t?e:r.plural??`${e}s`;return r.only?s:(0===t?i=r.zero??t:!1===r.format?i=t:null!=r.format?i=r.format(t):(o??=e3(),i=o(t)),`${i}${r.infix??" "}${s}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);let tO=/T/,tT=/.*\s*?at\s(.+?)\s/,tR=/^_+/;var tD=((g=tD||{})[g.Off=0]="Off",g[g.Error=1]="Error",g[g.Warn=2]="Warn",g[g.Info=3]="Info",g[g.Debug=4]="Debug",g[g.Trace=5]="Trace",g);let tI=["accessToken","password","token"],tL=new class Logger2{constructor(){this._isDebugging=!1,this.level=0}configure(e,t=!1){if(null!=e.sanitizeKeys)for(let t of tI)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(tI);this.provider=e,this._isDebugging=t,this.output=e.createChannel(e.name),this.level=tM(this.output.logLevel),this.output.onDidChangeLogLevel?.(e=>{this.level=tM(e)})}enabled(e){return!!this.isDebugging||(null==e?this.level>0:this.level>=function(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4;case"trace":return 5}}(e))}get isDebugging(){return this._isDebugging}get logLevel(){var e=this.level;switch(e){case 0:default:return"off";case 1:return"error";case 2:return"warn";case 3:return"info";case 4:return"debug";case 5:return"trace"}}get timestamp(){return`[${new Date().toISOString().replace(tO," ").slice(0,-1)}]`}trace(e,...t){let o;(!(this.level<5)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,this.output?.trace(`  ${o??""}${this.toLoggableParams(!0,t)}`))}debug(e,...t){let o;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,this.output?.debug(`  ${o??""}${this.toLoggableParams(!1,t)}`))}info(e,...t){let o;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,this.output?.info(`   ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,this.output?.warn(`${o??""}${this.toLoggableParams(!1,t)}`))}error(e,t,...o){let r;if(this.level<1&&!this.isDebugging)return;if(null==(r=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=tT.exec(t);null!=e&&(r=e[1])}}this.isDebugging;let i=`  ${r??""}${this.toLoggableParams(!1,o)}`;null!=e?this.output?.error(String(e),i):this.output?.error(i)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if(null!=t){let o=this.sanitize(t,e);if(null!=o)return o}if("function"==typeof e)return"<function>";if(null==e||"object"!=typeof e||e instanceof Error)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,(e,t)=>{if(95!==e.charCodeAt(0))return this.provider.sanitizeKeys.has(e)?this.sanitize(e,t):""===e||"object"!=typeof t||null==t||Array.isArray(t)?t:t instanceof Error?String(t):this.provider.toLoggable?.(t)??t})}catch{return"<error>"}}sanitize(e,t){if(null==t)return;let o=e.replace(tR,"")||e;if(this.provider?.sanitizeKeys?.has(o))return null!=this.provider.hash?`<${o}:${this.provider.hash("string"==typeof t?t:JSON.stringify(t))}>`:`<${o}>`}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function tM(e){switch(e){case 0:default:return 0;case 1:return 5;case 2:return 4;case 3:return 3;case 4:return 2;case 5:return 1}}let tB=new WeakMap,tF={enabled:e=>tL.enabled(e),log:(e,t,o,...r)=>{switch(e){case"error":tL.error(void 0,t,o,...r);break;case"warn":t?.warn(o,...r);break;case"info":t?.info(o,...r);break;case"debug":default:t?.debug(o,...r);break;case"trace":t?.trace(o,...r)}}},tN=new Map;function tj(e,t){let o=r;r=e.scopeId,tN.set(e.scopeId,e);try{return t()}finally{r=o,tN.delete(e.scopeId)}}function tU(){return null!=r?tN.get(r):void 0}let tq=0x40000000-1;function tH(){let e=0;return{get current(){return e},next:function(){return e===tq&&(e=0),++e},reset:function(){e=0}}}let tV=tH();function tW(e,t,o){var r;let i,s,a={scopeId:e,prevScopeId:t,prefix:o,enabled:tL.enabled,addExitInfo:function(...e){(i??=[]).push(...e)},setFailed:function(e){s=e},getExitInfo:function(){return{details:i?.length?` \u2022 ${i.join(", ")}`:void 0,failed:s}}};return tG(a,"trace",tL.trace),tG(a,"debug",tL.debug),tG(a,"info",tL.info),tG(a,"warn",tL.warn),Object.defineProperty(r=a,"error",{configurable:!0,enumerable:!0,get:function(){let e=(e,t,...o)=>tL.error(e,r,t,...o);return Object.defineProperty(r,"error",{value:e,writable:!1,enumerable:!0}),e}}),a}function tG(e,t,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){let r=o.bind(tL,e);return Object.defineProperty(e,t,{value:r,writable:!1,enumerable:!0}),r}})}function tK(e,t,o){if(null!=o){let r=null==t?e.toString(16):`${t.toString(16)} \u2192 ${e.toString(16)}`;return null==r?`[${o.padEnd(13)}]`:`[${o}${r.padStart(13-o.length)}]`}return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function tZ(){let e=tU();if(null==e)return;let t=Object.create(e);return t[Symbol.dispose]=()=>{},t}function tY(e,t,o){if(null!=t&&"boolean"!=typeof t)return tW(t.scopeId,t.prevScopeId,`${t.prefix}${e}`);let r=t?tU()?.scopeId:void 0,i=tV.next();return tW(i,r,`${tK(i,r,o)} ${e}`)}function tX(e,t,o,...r){switch(t){case"trace":tL.trace(e,o,...r);break;case"info":tL.info(e,o,...r);break;default:tL.debug(e,o,...r)}}let LoggerContext=class LoggerContext{constructor(e){this.scope=tY(e,void 0),tL.configure({name:e,createChannel:function(e){let t=tL.isDebugging?function(e){}:function(e){};return{name:e,logLevel:0,trace:t,debug:t,info:t,warn:t,error:t}}},!1)}trace(e,...t){"string"==typeof e?tL.trace(this.scope,e,...t):tL.trace(e,t.shift(),...t)}debug(e,...t){"string"==typeof e?tL.debug(this.scope,e,...t):tL.debug(e,t.shift(),...t)}info(e,...t){"string"==typeof e?tL.info(this.scope,e,...t):tL.info(e,t.shift(),...t)}};let tJ="home";new IpcRequest(tJ,"launchpad/summary"),new IpcRequest(tJ,"overview/active"),new IpcRequest(tJ,"overview/inactive"),new IpcRequest(tJ,"overviewFilter"),new IpcCommand(tJ,"overview/repository/change"),new IpcNotification(tJ,"overview/repository/didChange"),new IpcCommand(tJ,"previewEnabled/toggle"),new IpcCommand(tJ,"section/collapse"),new IpcCommand(tJ,"walkthrough/dismiss"),new IpcNotification(tJ,"ai/allAccess/didChange"),new IpcNotification(tJ,"mcp/didChange"),new IpcCommand(tJ,"ai/allAccess/dismiss"),new IpcCommand(tJ,"overview/filter/set"),new IpcCommand(tJ,"openInGraph"),new IpcNotification(tJ,"repositories/didCompleteDiscovering"),new IpcNotification(tJ,"previewEnabled/didChange"),new IpcNotification(tJ,"repository/wip/didChange"),new IpcNotification(tJ,"repositories/didChange"),new IpcNotification(tJ,"walkthroughProgress/didChange"),new IpcNotification(tJ,"integrations/didChange"),new IpcNotification(tJ,"launchpad/didChange");let tQ=new IpcNotification(tJ,"subscription/didChange");new IpcNotification(tJ,"org/settings/didChange"),new IpcNotification(tJ,"home/ownerFilter/didChange"),new IpcNotification(tJ,"account/didFocus");let t0="graph";new IpcCommand(t0,"chooseRepository"),new IpcCommand(t0,"dblclick"),new IpcCommand(t0,"avatars/get"),new IpcCommand(t0,"refs/metadata/get"),new IpcCommand(t0,"rows/get"),new IpcCommand(t0,"pullRequest/openDetails"),new IpcCommand(t0,"row/action"),new IpcCommand(t0,"search/openInView"),new IpcCommand(t0,"search/cancel"),new IpcCommand(t0,"columns/update"),new IpcCommand(t0,"refs/update/visibility"),new IpcCommand(t0,"filters/update/excludeTypes"),new IpcCommand(t0,"configuration/update"),new IpcCommand(t0,"search/update/mode"),new IpcCommand(t0,"filters/update/includedRefs"),new IpcCommand(t0,"selection/update"),new IpcRequest(t0,"jumpToHead"),new IpcRequest(t0,"chooseRef"),new IpcRequest(t0,"chooseComparison"),new IpcRequest(t0,"chooseAuthor"),new IpcRequest(t0,"chooseFile"),new IpcRequest(t0,"rows/ensure"),new IpcRequest(t0,"search/history/get"),new IpcRequest(t0,"search/history/store"),new IpcRequest(t0,"search/history/delete"),new IpcRequest(t0,"counts"),new IpcRequest(t0,"row/hover/get"),new IpcRequest(t0,"search"),new IpcNotification(t0,"repositories/integration/didChange"),new IpcNotification(t0,"didChange",!0),new IpcNotification(t0,"configuration/didChange");let t1=new IpcNotification(t0,"subscription/didChange");new IpcNotification(t0,"org/settings/didChange"),new IpcNotification(t0,"avatars/didChange"),new IpcNotification(t0,"mcp/didChange"),new IpcNotification(t0,"branchState/didChange"),new IpcNotification(t0,"refs/didChangeMetadata"),new IpcNotification(t0,"columns/didChange"),new IpcNotification(t0,"scrollMarkers/didChange"),new IpcNotification(t0,"refs/didChangeVisibility"),new IpcNotification(t0,"rows/didChange"),new IpcNotification(t0,"rows/stats/didChange"),new IpcNotification(t0,"selection/didChange"),new IpcNotification(t0,"workingTree/didChange"),new IpcNotification(t0,"didSearch"),new IpcNotification(t0,"didFetch"),new IpcNotification(t0,"featurePreview/didStart");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(tQ.is(e)||t1.is(e)||tl.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let o=`${e}|${t}`,r=this._promos.get(o);return null==r&&(r=this.ipc.sendRequest(tu,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(o,r)),await r}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(tf,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};var t2=Uint8Array,t5=Uint16Array,t8=Int32Array,t3=new t2([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),t4=new t2([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),t6=new t2([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),t7=function(e,t){for(var o=new t5(31),r=0;r<31;++r)o[r]=t+=1<<e[r-1];for(var i=new t8(o[30]),r=1;r<30;++r)for(var s=o[r];s<o[r+1];++s)i[s]=s-o[r]<<5|r;return{b:o,r:i}},t9=t7(t3,2),oe=t9.b,ot=t9.r;oe[28]=258,ot[258]=28;var oo=t7(t4,0),or=oo.b;oo.r;for(var oi=new t5(32768),os=0;os<32768;++os){var on=(43690&os)>>1|(21845&os)<<1;on=(61680&(on=(52428&on)>>2|(13107&on)<<2))>>4|(3855&on)<<4,oi[os]=((65280&on)>>8|(255&on)<<8)>>1}for(var oa=function(e,t,o){for(var r,i=e.length,s=0,a=new t5(t);s<i;++s)e[s]&&++a[e[s]-1];var c=new t5(t);for(s=1;s<t;++s)c[s]=c[s-1]+a[s-1]<<1;if(o){r=new t5(1<<t);var h=15-t;for(s=0;s<i;++s)if(e[s])for(var p=s<<4|e[s],u=t-e[s],f=c[e[s]-1]++<<u,g=f|(1<<u)-1;f<=g;++f)r[oi[f]>>h]=p}else for(s=0,r=new t5(i);s<i;++s)e[s]&&(r[s]=oi[c[e[s]-1]++]>>15-e[s]);return r},ol=new t2(288),os=0;os<144;++os)ol[os]=8;for(var os=144;os<256;++os)ol[os]=9;for(var os=256;os<280;++os)ol[os]=7;for(var os=280;os<288;++os)ol[os]=8;for(var oc=new t2(32),os=0;os<32;++os)oc[os]=5;var oh=oa(ol,9,1),od=oa(oc,5,1),op=function(e){for(var t=e[0],o=1;o<e.length;++o)e[o]>t&&(t=e[o]);return t},ou=function(e,t,o){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(7&t)&o},of=function(e,t){var o=t/8|0;return(e[o]|e[o+1]<<8|e[o+2]<<16)>>(7&t)},og=function(e,t,o){return(null==t||t<0)&&(t=0),(null==o||o>e.length)&&(o=e.length),new t2(e.subarray(t,o))},ob=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],om=function(e,t,o){var r=Error(t||ob[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,om),!o)throw r;return r},ov=function(e,t,o,r){var i=e.length,s=r?r.length:0;if(!i||t.f&&!t.l)return o||new t2(0);var a=!o,c=a||2!=t.i,h=t.i;a&&(o=new t2(3*i));var p=function(e){var t=o.length;if(e>t){var r=new t2(Math.max(2*t,e));r.set(o),o=r}},u=t.f||0,f=t.p||0,g=t.b||0,b=t.l,m=t.d,v=t.m,w=t.n,x=8*i;do{if(!b){u=ou(e,f,1);var _=ou(e,f+1,3);if(f+=3,_)if(1==_)b=oh,m=od,v=9,w=5;else if(2==_){var $=ou(e,f,31)+257,C=ou(e,f+10,15)+4,P=$+ou(e,f+5,31)+1;f+=14;for(var S=new t2(P),A=new t2(19),E=0;E<C;++E)A[t6[E]]=ou(e,f+3*E,7);f+=3*C;for(var O=op(A),T=(1<<O)-1,D=oa(A,O,1),E=0;E<P;){var M=D[ou(e,f,T)];f+=15&M;var B=M>>4;if(B<16)S[E++]=B;else{var F=0,N=0;for(16==B?(N=3+ou(e,f,3),f+=2,F=S[E-1]):17==B?(N=3+ou(e,f,7),f+=3):18==B&&(N=11+ou(e,f,127),f+=7);N--;)S[E++]=F}}var j=S.subarray(0,$),U=S.subarray($);v=op(j),w=op(U),b=oa(j,v,1),m=oa(U,w,1)}else om(1);else{var B=((f+7)/8|0)+4,q=e[B-4]|e[B-3]<<8,V=B+q;if(V>i){h&&om(0);break}c&&p(g+q),o.set(e.subarray(B,V),g),t.b=g+=q,t.p=f=8*V,t.f=u;continue}if(f>x){h&&om(0);break}}c&&p(g+131072);for(var W=(1<<v)-1,G=(1<<w)-1,K=f;;K=f){var F=b[of(e,f)&W],Y=F>>4;if((f+=15&F)>x){h&&om(0);break}if(F||om(2),Y<256)o[g++]=Y;else if(256==Y){K=f,b=null;break}else{var X=Y-254;if(Y>264){var E=Y-257,J=t3[E];X=ou(e,f,(1<<J)-1)+oe[E],f+=J}var Q=m[of(e,f)&G],ee=Q>>4;Q||om(3),f+=15&Q;var U=or[ee];if(ee>3){var J=t4[ee];U+=of(e,f)&(1<<J)-1,f+=J}if(f>x){h&&om(0);break}c&&p(g+131072);var et=g+X;if(g<U){var eo=s-U,er=Math.min(U,et);for(eo+g<0&&om(3);g<er;++g)o[g]=r[eo+g]}for(;g<et;++g)o[g]=o[g-U]}}t.l=b,t.p=K,t.b=g,t.f=u,b&&(u=1,t.m=v,t.d=m,t.n=w)}while(!u)return g!=o.length&&a?og(o,0,g):o.subarray(0,g)},oy=new t2(0),ow="u">typeof TextDecoder&&new TextDecoder;try{ow.decode(oy,{stream:!0})}catch{}var ox=function(e){for(var t="",o=0;;){var r=e[o++],i=(r>127)+(r>223)+(r>239);if(o+i>e.length)return{s:t,r:og(e,o-1)};i?3==i?t+=String.fromCharCode(55296|(r=((15&r)<<18|(63&e[o++])<<12|(63&e[o++])<<6|63&e[o++])-65536)>>10,56320|1023&r):1&i?t+=String.fromCharCode((31&r)<<6|63&e[o++]):t+=String.fromCharCode((15&r)<<12|(63&e[o++])<<6|63&e[o++]):t+=String.fromCharCode(r)}};function ok(e,t){if(t){for(var o="",r=0;r<e.length;r+=16384)o+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return o}if(ow)return ow.decode(e);var i=ox(e),s=i.s,o=i.r;return o.length&&om(8),s}"function"==typeof queueMicrotask&&queueMicrotask;let o_=/\(([\s\S]*)\)/,o$=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,oC=/\s?=.*$/;function oP(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function oS(e){var t,o;let r,i,s,a,c,h,p,u,f;return t="debug",c=!1,h=!0,null!=(o=e)&&({args:r,when:i,exit:s,prefix:a,onlyExit:c=!1,timing:h=!0}=o),p="object"==typeof h?h.warnAfter:500,u=!1!==h||"object"==typeof c&&c.after>0,f="trace"===t?tL.trace:"debug"===t?tL.debug:tL.info,(e,o,h)=>{let g,b;if("function"==typeof h.value?(g=h.value,b="value"):"function"==typeof h.get&&(g=h.get,b="get"),null==g||null==b)throw Error("Not supported");let m=null==r?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(o$,"")||t).slice(0,t.indexOf("{"))).indexOf("("),r=t.indexOf(")");o=o>=0?o+1:0,r=r>0?r:t.indexOf("="),t=t.slice(o,r),t=`(${t})`;let i=o_.exec(t);return null!=i?i[1].split(",").map(e=>e.trim().replace(oC,"")):[]}(g):[];h[b]=function(...e){let h;if(!tL.enabled()||null!=i&&!i.apply(this,e))return g.apply(this,e);let b=tL.enabled(t),v=tZ(),w=v?.scopeId,x=tV.next(),_=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let o=t?.name??"",r=o.indexOf("_");-1!==r&&(o=o.substring(r+1));let i=t;for(;null!=i;){let t=tB.get(i);if(null!=t)return t(e,o);i=Object.getPrototypeOf(i)}return o}(this):void 0,$=_?`${tK(x,w)} ${_}.${o}`:`${tK(x,w)} ${o}`;null!=a&&($=a({id:x,instance:this,instanceName:_??"",name:o,prefix:$},...e));let C=tW(x,w,$),P=!1,S=()=>(P||(P=!0,h=function(e,t,o){if(!1===e||!t.length)return;if("function"==typeof e){let o=e(...t);if(!1===o)return;let r="";for(let[e,t]of Object.entries(o))r.length&&(r+=", "),r+=`${e}=${tL.toLoggable(t,e)}`;return r||void 0}let r="",i=-1;for(let e of t){let t=o[++i];r.length&&(r+=", "),r+=t?`${t}=${tL.toLoggable(e,t)}`:tL.toLoggable(e)}return r||void 0}(r,e,m)),h);if(!c&&b){let e=S();f.call(tL,e?`${$}(${e})`:$)}if(c||u||null!=s){let t=u?tx():void 0,o=e=>{let o=void 0!==t?` [${tS(t)}ms]`:"",r=C.getExitInfo();if(c){let t=S();tL.error(e,t?`${$}(${t})`:$,r?.details?`failed${r.details}${o}`:`failed${o}`)}else tL.error(e,$,r?.details?`failed${r.details}${o}`:`failed${o}`)},r=e=>{let o,r,i,a;null!=t?(o=tS(t))>p?(r=tL.warn,i=` [*${o}ms] (slow)`):(r=f,i=` [${o}ms]`):(i="",r=f);let h=C.getExitInfo();if(null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${tL.toLoggable(e)}`);else h?.failed?(a=h.failed,r=(e,...t)=>tL.error(null,e,...t)):a="completed";if(b||r!==f){let e=S();c?(!0===c||0===c.after||o>c.after)&&r.call(tL,e?`${$}(${e}) ${a}${h?.details||""}${i}`:`${$} ${a}${h?.details||""}${i}`):r.call(tL,e?`${$}(${e}) ${a}${h?.details||""}${i}`:`${$} ${a}${h?.details||""}${i}`)}};return tj(C,()=>{let t;try{t=g.apply(this,e)}catch(e){throw o(e),e}return null!=t&&oP(t)?t.then(r,o):r(t),t})}return tj(C,()=>g.apply(this,e))}}}(()=>{let e;var t,o,r={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function o(e,t){for(var o,r="",i=0,s=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)o=e.charCodeAt(c);else{if(47===o)break;o=47}if(47===o){if(s===c-1||1===a);else if(s!==c-1&&2===a){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var h=r.lastIndexOf("/");if(h!==r.length-1){-1===h?(r="",i=0):i=(r=r.slice(0,h)).length-1-r.lastIndexOf("/"),s=c,a=0;continue}}else if(2===r.length||1===r.length){r="",i=0,s=c,a=0;continue}}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(s+1,c):r=e.slice(s+1,c),i=c-s-1;s=c,a=0}else 46===o&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r,i="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?e=arguments[a]:(void 0===r&&(r=process.cwd()),e=r),t(e),0!==e.length&&(i=e+"/"+i,s=47===e.charCodeAt(0));return i=o(i,!s),s?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=o(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,o=0;o<arguments.length;++o){var i=arguments[o];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,o){if(t(e),t(o),e===o||(e=r.resolve(e))===(o=r.resolve(o)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var s=e.length,a=s-i,c=1;c<o.length&&47===o.charCodeAt(c);++c);for(var h=o.length-c,p=a<h?a:h,u=-1,f=0;f<=p;++f){if(f===p){if(h>p){if(47===o.charCodeAt(c+f))return o.slice(c+f+1);if(0===f)return o.slice(c+f)}else a>p&&(47===e.charCodeAt(i+f)?u=f:0===f&&(u=0));break}var g=e.charCodeAt(i+f);if(g!==o.charCodeAt(c+f))break;47===g&&(u=f)}var b="";for(f=i+u+1;f<=s;++f)f!==s&&47!==e.charCodeAt(f)||(0===b.length?b+="..":b+="/..");return b.length>0?b+o.slice(c+u):(c+=u,47===o.charCodeAt(c)&&++c,o.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var o=e.charCodeAt(0),r=47===o,i=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(o=e.charCodeAt(a))){if(!s){i=a;break}}else s=!1;return -1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,o){if(void 0!==o&&"string"!=typeof o)throw TypeError('"ext" argument must be a string');t(e);var r,i=0,s=-1,a=!0;if(void 0!==o&&o.length>0&&o.length<=e.length){if(o.length===e.length&&o===e)return"";var c=o.length-1,h=-1;for(r=e.length-1;r>=0;--r){var p=e.charCodeAt(r);if(47===p){if(!a){i=r+1;break}}else -1===h&&(a=!1,h=r+1),c>=0&&(p===o.charCodeAt(c)?-1==--c&&(s=r):(c=-1,s=h))}return i===s?s=h:-1===s&&(s=e.length),e.slice(i,s)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){i=r+1;break}}else -1===s&&(a=!1,s=r+1);return -1===s?"":e.slice(i,s)},extname:function(e){t(e);for(var o=-1,r=0,i=-1,s=!0,a=0,c=e.length-1;c>=0;--c){var h=e.charCodeAt(c);if(47!==h)-1===i&&(s=!1,i=c+1),46===h?-1===o?o=c:1!==a&&(a=1):-1!==o&&(a=-1);else if(!s){r=c+1;break}}return -1===o||-1===i||0===a||1===a&&o===i-1&&o===r+1?"":e.slice(o,i)},format:function(e){var t,o;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,o=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+o:t+"/"+o:o},parse:function(e){t(e);var o={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return o;var r,i=e.charCodeAt(0),s=47===i;s?(o.root="/",r=1):r=0;for(var a=-1,c=0,h=-1,p=!0,u=e.length-1,f=0;u>=r;--u)if(47!==(i=e.charCodeAt(u)))-1===h&&(p=!1,h=u+1),46===i?-1===a?a=u:1!==f&&(f=1):-1!==a&&(f=-1);else if(!p){c=u+1;break}return -1===a||-1===h||0===f||1===f&&a===h-1&&a===c+1?-1!==h&&(o.base=o.name=0===c&&s?e.slice(1,h):e.slice(c,h)):(0===c&&s?(o.name=e.slice(1,a),o.base=e.slice(1,h)):(o.name=e.slice(c,a),o.base=e.slice(c,h)),o.ext=e.slice(a,h)),c>0?o.dir=e.slice(0,c-1):s&&(o.dir="/"),o},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return r[e](o,o.exports,s),o.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(s.r(a),s.d(a,{URI:()=>l,Utils:()=>o}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let c=/^\w[\w\d+.-]*$/,h=/^\//,p=/^\/\//;function u(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!c.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!h.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,o,r,i,s=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||s?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,o||""),this.query=r||"",this.fragment=i||"",u(this,s))}get fsPath(){return x(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:o,path:r,query:i,fragment:s}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===o?o=this.authority:null===o&&(o=""),void 0===r?r=this.path:null===r&&(r=""),void 0===i?i=this.query:null===i&&(i=""),void 0===s?s=this.fragment:null===s&&(s=""),t===this.scheme&&o===this.authority&&r===this.path&&i===this.query&&s===this.fragment?this:new d(t,o,r,i,s)}static parse(e,t=!1){let o=f.exec(e);return o?new d(o[2]||"",C(o[4]||""),C(o[5]||""),C(o[7]||""),C(o[9]||""),t):new d("","","","","")}static file(t){let o="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(o=t.substring(2),t="/"):(o=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",o,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return u(t,!0),t}toString(e=!1){return _(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===g?e.fsPath:null,t}}return e}};let g=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=x(this,!1)),this._fsPath}toString(e=!1){return e?_(this,!0):(this._formatted||(this._formatted=_(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=g),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let b={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function m(e,t,o){let r,i=-1;for(let s=0;s<e.length;s++){let a=e.charCodeAt(s);if(a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||45===a||46===a||95===a||126===a||t&&47===a||o&&91===a||o&&93===a||o&&58===a)-1!==i&&(r+=encodeURIComponent(e.substring(i,s)),i=-1),void 0!==r&&(r+=e.charAt(s));else{void 0===r&&(r=e.substr(0,s));let t=b[a];void 0!==t?(-1!==i&&(r+=encodeURIComponent(e.substring(i,s)),i=-1),r+=t):-1===i&&(i=s)}}return -1!==i&&(r+=encodeURIComponent(e.substring(i))),void 0!==r?r:e}function w(e){let t;for(let o=0;o<e.length;o++){let r=e.charCodeAt(o);35===r||63===r?(void 0===t&&(t=e.substr(0,o)),t+=b[r]):void 0!==t&&(t+=e[o])}return void 0!==t?t:e}function x(t,o){let r;return r=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?o?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(r=r.replace(/\//g,"\\")),r}function _(e,t){let o=t?w:m,r="",{scheme:i,authority:s,path:a,query:c,fragment:h}=e;if(i&&(r+=i,r+=":"),(s||"file"===i)&&(r+="/",r+="/"),s){let e=s.indexOf("@");if(-1!==e){let t=s.substr(0,e);s=s.substr(e+1),-1===(e=t.lastIndexOf(":"))?r+=o(t,!1,!1):(r+=o(t.substr(0,e),!1,!1),r+=":",r+=o(t.substr(e+1),!1,!0)),r+="@"}-1===(e=(s=s.toLowerCase()).lastIndexOf(":"))?r+=o(s,!1,!0):(r+=o(s.substr(0,e),!1,!0),r+=s.substr(e))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){let e=a.charCodeAt(1);e>=65&&e<=90&&(a=`/${String.fromCharCode(e+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){let e=a.charCodeAt(0);e>=65&&e<=90&&(a=`${String.fromCharCode(e+32)}:${a.substr(2)}`)}r+=o(a,!0,!1)}return c&&(r+="?",r+=o(c,!1,!1)),h&&(r+="#",r+=t?h:m(h,!1,!1)),r}let $=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function C(e){return e.match($)?e.replace($,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var P=s(975);let S=P.posix||P;(t=o||(o={})).joinPath=function(e,...t){return e.with({path:S.join(e.path,...t)})},t.resolvePath=function(e,...t){let o=e.path,r=!1;"/"!==o[0]&&(o="/"+o,r=!0);let i=S.resolve(o,...t);return r&&"/"===i[0]&&!e.authority&&(i=i.substring(1)),e.with({path:i})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=S.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return S.basename(e.path)},t.extname=function(e){return S.extname(e.path)},v=a})();let{URI:oA,Utils:oE}=v;function oz(e,t){return JSON.parse(e,(e,o)=>(function(e,t){let o=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(e);if(null==o)return e;switch(o.__ipc){case"date":return new Date(o.value);case"promise":return t(o.value);case"uri":return oA.revive(o.value)}})(o,t))}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...o){let r;this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:tY(e??"",!1,t?.scopeLabel);let i=t?.log;if(r=null==i||!0===i?{}:!1===i||i.onlyExit?void 0:i,this.logLevel=("object"==typeof i?i.level:void 0)??"debug",this.logProvider=t?.provider??tF,this._time=tx(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=tx(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=tx(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[o,r]=tx(this._time),i=1e3*o+Math.floor(r/1e6),s=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${i}ms]${e?.suffix??""}`)}};function oO(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function oT(e,t){return new Promise(o=>{e.addEventListener(t,function r(i){i.target===e&&(e.removeEventListener(t,r),o())})})}(w||(w={})).on=function(e,t,o,r){let i=!1;if("string"==typeof e){let s=function(t){let r=t?.target?.closest(e);null!=r&&o(t,r)};return document.addEventListener(t,s,r??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,s,r??!0))}}}let s=function(e){o(e,this)};return e.addEventListener(t,s,r??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,s,r??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return this._event??=(e,t,o)=>{this.listeners??=new LinkedList;let r=this.listeners.push(null==t?e:[e,t]),i={dispose:()=>{i.dispose=Emitter._noop,this._disposed||r()}};return Array.isArray(o)&&o.push(i),i},this._event}fire(e){if(null!=this.listeners){this._deliveryQueue??=new LinkedList;for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let oR={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new events_Node(e);if(this._first===events_Node.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(o))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?oR:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var oD=Object.defineProperty,oI=Object.getOwnPropertyDescriptor,oL=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),oM=e=>{throw TypeError(e)},oB=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?oI(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&oD(t,o,s),s};let oF=tH();function oN(){return`webview:${oF.next()}`}let oj=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=i??=acquireVsCodeApi(),this._disposable=w.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){var t,o,i,s,a,c,h,p,u=[];try{let s=e.data,a=((e,t,o)=>{if(null!=t){var r,i;"object"!=typeof t&&"function"!=typeof t&&oM("Object expected"),o&&(r=t[oL("asyncDispose")]),void 0===r&&(r=t[oL("dispose")],o&&(i=r)),"function"!=typeof r&&oM("Object not disposable"),i&&(r=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.push([o,r,t])}else o&&e.push([o]);return t})(u,function(e,t,o){var i,s;let a,c,h;if(!tL.enabled())return;let p=(i=o?.scope??!0,s=o?.scopeLabel,c=tU(),r=(h=tY(e,i,s)).scopeId,tN.set(h.scopeId,h),h[Symbol.dispose]=()=>{let e;e=h?.scopeId??r,null!=e&&tN.delete(e),r=c?.scopeId},h);if(!t)return p;let u="debug",f=!1;"object"==typeof t&&(u=t.level??u,a=t.message,f=!0===t.onlyExit);let g=tx();f||tX(p,u,a??"");let b=p[Symbol.dispose];return p[Symbol.dispose]=()=>{let e=tS(g),t=` [${e}ms]`,o=p.getExitInfo(),r=o.failed??"completed";null!=o.failed?tL.error(null,p,`${r}${o.details??""}${t}`):tX(p,u,`${r}${o.details??""}${t}`),b()},p}(`(e=${s.id}|${s.method})`,void 0,{scope:tZ()})),c=function(e,t,...o){let r=("object"==typeof t?.log?t.log.level:void 0)??"info";return(t?.provider??tF).enabled(r)?new Stopwatch(e,t,...o):void 0}(a,{log:{onlyExit:!0,level:"debug"}});if(s.compressed&&s.params instanceof Uint8Array){if("deflate"===s.compressed)try{s.params=ok((i=s.params,ov(i,{i:2},void 0,void 0)))}catch(e){s.params=ok(s.params)}else s.params=ok(s.params);c?.restart({message:`\u2022 decompressed (${s.compressed}) serialized params`})}if("string"==typeof s.params?(s.params=oz(s.params,e=>this.getResponsePromise(e.method,e.id)),c?.stop({message:"• deserialized params"})):null==s.params?c?.stop({message:"• no params"}):c?.stop({message:"• invalid params"}),a?.addExitInfo(`ipc (host -> webview) duration=${Date.now()-s.timestamp}ms`),null!=s.completionId){let e=(t=s.method,o=s.completionId,`${t}|${o}`);this._pendingHandlers.get(e)?.(s);return}this._onReceiveMessage.fire(s)}catch(e){var f=e,g=!0}finally{s=f,a=g,c="function"==typeof SuppressedError?SuppressedError:function(e,t,o,r){return(r=Error(o)).name="SuppressedError",r.error=e,r.suppressed=t,r},h=e=>s=a?new c(e,s,"An error was suppressed during disposal"):(a=!0,e),(p=e=>{for(;e=u.pop();)try{var t=e[1]&&e[1].call(e[2]);if(e[0])return Promise.resolve(t).then(p,e=>(h(e),p()))}catch(e){h(e)}if(a)throw s})()}}deserializeIpcData(e){return oz(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let o=oN();this.postMessage({id:o,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let o=oN(),r=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:o}),r}getResponsePromise(e,t){return new Promise((o,r)=>{var i,s;let a,c=(i=e,s=t,`${i}|${s}`);function h(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(c)}a=setTimeout(()=>{h.call(this),r(Error(`Timed out waiting for completion of ${c}`))},(tL.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(h.call(this),e.method===tg.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>r(Error(t.reason))):queueMicrotask(()=>o(t.value))}else queueMicrotask(()=>o(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function oU(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}oB([oS({args:e=>({e:`${e.data.id}|${e.data.method}`})})],oj.prototype,"onMessageReceived",1),oB([oS({args:e=>({commandType:e.method})})],oj.prototype,"sendCommand",1),oB([oS({args:e=>({requestType:e.method})})],oj.prototype,"sendRequest",1),oB([oS({args:e=>({e:`${e.id}, method=${e.method}`})})],oj.prototype,"postMessage",1),oj=oB([(b=e=>`${e.appName}(HostIpc)`,e=>void tB.set(e,b))],oj);let RGBA=class RGBA{constructor(e,t,o,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=oU(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,o,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oU(Math.max(Math.min(1,t),0),3),this.l=oU(Math.max(Math.min(1,o),0),3),this.a=oU(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,r=e.b/255,i=e.a,s=Math.max(t,o,r),a=Math.min(t,o,r),c=0,h=0,p=(a+s)/2,u=s-a;if(u>0){switch(h=Math.min(p<=.5?u/(2*p):u/(2-2*p),1),s){case t:c=(o-r)/u+6*(o<r);break;case o:c=(r-t)/u+2;break;case r:c=(t-o)/u+4}c*=60,c=Math.round(c)}return new HSLA(c,h,p,i)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,r,i=e.h/360,{s,l:a,a:c}=e;if(0===s)t=o=r=a;else{let e=a<.5?a*(1+s):a+s-a*s,c=2*a-e;t=HSLA._hue2rgb(c,e,i+1/3),o=HSLA._hue2rgb(c,e,i),r=HSLA._hue2rgb(c,e,i-1/3)}return new RGBA(Math.round(255*t),Math.round(255*o),Math.round(255*r),c)}};let HSVA=class HSVA{constructor(e,t,o,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oU(Math.max(Math.min(1,t),0),3),this.v=oU(Math.max(Math.min(1,o),0),3),this.a=oU(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,r=e.b/255,i=Math.max(t,o,r),s=i-Math.min(t,o,r);return new HSVA(Math.round(60*(0===s?0:i===t?((o-r)/s%6+6)%6:i===o?(r-t)/s+2:(t-o)/s+4)),0===i?0:s/i,i,e.a)}static toRGBA(e){let{h:t,s:o,v:r,a:i}=e,s=r*o,a=s*(1-Math.abs(t/60%2-1)),c=r-s,[h,p,u]=[0,0,0];return t<60?(h=s,p=a):t<120?(h=a,p=s):t<180?(p=s,u=a):t<240?(p=a,u=s):t<300?(h=a,u=s):t<=360&&(h=s,u=a),new RGBA(h=Math.round((h+c)*255),p=Math.round((p+c)*255),u=Math.round((u+c)*255),i)}};function oq(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(oq(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){return oU(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:o,b:r,a:i}=this.rgba;return new Color(new RGBA(t,o,r,i*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,o=this.rgba.a,r=t.a,i=o+r*(1-o);return i<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*o/i+t.r*r*(1-o)/i,this.rgba.g*o/i+t.g*r*(1-o)/i,this.rgba.b*o/i+t.b*r*(1-o)/i,i))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:o,b:r,a:i}=this.rgba;return new Color(new RGBA(e.rgba.r-i*(e.rgba.r-t),e.rgba.g-i*(e.rgba.g-o),e.rgba.b-i*(e.rgba.b-r),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let o=1-e.rgba.a;return new Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${oH(e.rgba.r)}${oH(e.rgba.g)}${oH(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-r)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let r=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(r-i)/r,e.darken(o)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function oH(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let oV=new Emitter,oW=oV.event;function oG(e){let t=document.documentElement,o=window.getComputedStyle(t),r=document.body.classList,i=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),s=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),a=oq("--vscode-editor-background",o),c=oq("--vscode-editor-foreground",o);return c||(c=oq("--vscode-foreground",o)),{colors:{background:a,foreground:c},computedStyle:o,isLightTheme:i,isHighContrastTheme:s,isInitializing:null==e}}var oK=Object.defineProperty,oZ=Object.getOwnPropertyDescriptor,oY=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?oZ(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&oK(t,o,s),s};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.debug("connected"),this._ipc=new oj(this.name);let e=this.bootstrap;this.bootstrap=void 0,this._stateProvider=this.createStateProvider(e,this._ipc,this._logger);let{webviewId:t,webviewInstanceId:o}=this._stateProvider.state;this._webview={webviewId:t,webviewInstanceId:o,createCommandLink:(e,r)=>{var i;return e.endsWith(":")&&(e=`${e}${t.split(".").at(-1)}`),i=e,`command:${i}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:o,...r}))}`}};let r=oG();if(null!=this.onThemeUpdated){let e;this.onThemeUpdated(r),this.disposables.push(((e=new MutationObserver(e=>{oV.fire(oG(e))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()})),this.disposables.push(oW(this.onThemeUpdated,this))}this.disposables.push(this._stateProvider,this._ipc.onReceiveMessage(e=>{switch(!0){case tb.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case tm.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=e7(e=>{this._ipc.sendCommand(tp,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.debug("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return ew`<slot></slot>`}};oY([eR({type:String})],GlAppHost.prototype,"name",2),oY([eR({type:String})],GlAppHost.prototype,"placement",2),oY([tc({context:"ipc"})],GlAppHost.prototype,"_ipc",2),oY([tc({context:"logger"})],GlAppHost.prototype,"_logger",2),oY([tc({context:"promos"})],GlAppHost.prototype,"_promos",2),oY([tc({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),oY([tc({context:"webview"})],GlAppHost.prototype,"_webview",2),oY([eR({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let oX=T`
	a {
		border: 0;
		color: var(--link-foreground);
		font-weight: 400;
		outline: none;
		text-decoration: var(--link-decoration-default, none);
	}

	a:focus-visible {
		outline: 1px solid var(--color-focus-border);
		border-radius: 0.2rem;
	}

	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`,oJ=T`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`,{fromCharCode:oQ}=String;new TextEncoder;let o0=new TextDecoder;let StateProviderBase=class StateProviderBase{constructor(e,t,o,r){this.host=e,this.ipc=o,this.logger=r,this._state=this.ipc.deserializeIpcData(o0.decode(function(e){let t=globalThis.atob(e),o=t.length,r=new Uint8Array(o),i=0,s=o-o%8;for(;i<s;i+=8)r[i]=t.charCodeAt(i),r[i+1]=t.charCodeAt(i+1),r[i+2]=t.charCodeAt(i+2),r[i+3]=t.charCodeAt(i+3),r[i+4]=t.charCodeAt(i+4),r[i+5]=t.charCodeAt(i+5),r[i+6]=t.charCodeAt(i+6),r[i+7]=t.charCodeAt(i+7);for(;i<o;i++)r[i]=t.charCodeAt(i);return r}(t))),this.logger?.debug(`bootstrap duration=${Date.now()-this._state.timestamp}ms`),this.provider=this.createContextProvider(this._state),this.onPersistState?.(this._state),this.disposable=this.ipc.onReceiveMessage(this.onMessageReceived.bind(this)),this.initializeState()}get state(){return this._state}get webviewId(){return this._state.webviewId}get webviewInstanceId(){return this._state.webviewInstanceId}get timestamp(){return this._state.timestamp}dispose(){this.disposable.dispose()}get deferBootstrap(){return!1}async initializeState(){if(this.deferBootstrap){let e=await this.ipc.sendRequest(td,{bootstrap:!0});if(null!=e.state){let t=oP(e.state)?await e.state:e.state;this.onDeferredBootstrapStateReceived(t)}}else this.ipc.sendRequest(td,{bootstrap:!1})}onDeferredBootstrapStateReceived(e){this._state={...e,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}};let TimelineStateProvider=class TimelineStateProvider extends StateProviderBase{createContextProvider(e){return new context_provider_i(this.host,{context:"state",initialValue:e})}onMessageReceived(e){!0===tl.is(e)&&(this._state={...e.params.state,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate())}onPersistState(e){this.ipc.setPersistedState({config:e.config,scope:e.scope})}};let o1=T`
	* {
		box-sizing: border-box;
	}

	:not(:defined) {
		visibility: hidden;
	}

	[hidden] {
		display: none !important;
	}

	/* roll into shared focus style */
	:focus-visible {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	b {
		font-weight: 600;
	}

	p {
		margin-top: 0;
	}

	ul {
		margin-top: 0;
		padding-left: 1.2em;
	}

	section,
	header {
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	h2 {
		font-weight: 400;
	}

	h3 {
		border: none;
		color: var(--color-view-header-foreground);
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 0;
		white-space: nowrap;
	}

	h4 {
		font-size: 1.5rem;
		font-weight: 400;
		margin: 0.5rem 0 1rem 0;
	}
`,o2=T`
	:host {
		display: block;
		color: var(--color-view-foreground);
		font-family: var(--font-family);
		font-size: var(--font-size);
		margin: 0;
		padding: 0;
		height: 100vh;
		overflow: hidden;
	}

	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.header {
		flex: none;
		display: grid;
		grid-template-columns: 1fr min-content;
		align-items: center;
		grid-template-areas: 'details toolbox';
		margin: 0.5rem 1rem;
	}

	:host-context(body[data-placement='editor']) .header {
		margin-top: 1rem;
		margin-right: 1.5rem;
	}

	.details {
		grid-area: details;
		display: flex;
		gap: 1rem;
		align-items: center;
		font-size: var(--font-size);
		min-width: 0;
		margin-right: 1rem;
	}

	.details gl-breadcrumbs {
		flex: 1;
		min-width: 0;
		padding: 0.1rem 0;
		overflow: hidden;
	}

	.details .details__ref,
	.details .details__timeframe {
		min-width: 0;
		margin: 0;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.details .details__ref {
		flex: 0 100000000 auto;
		color: var(--color-foreground--75);
		font-size: 1.2rem;
		margin-left: auto;
	}

	.details .details__ref .ref {
		margin-left: 0.25rem;
	}

	.details .details__timeframe {
		flex: 0 0 auto;
		color: var(--color-foreground--75);
		margin-right: 0.6rem;
		user-select: none;
		white-space: nowrap;
		font-size: 1.2rem;
		margin-left: auto;
	}

	.toolbox {
		grid-area: toolbox;
		align-items: center;
		display: flex;
		gap: 0.3rem;
	}

	.toolbox gl-feature-badge {
		padding-bottom: 0.4rem;
	}

	:host-context(body[data-placement='editor']) .toolbox gl-feature-badge {
		padding-left: 0.4rem;
	}

	.select-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 100% 0 1;
		position: relative;
	}

	.select-container label {
		margin: 0 1rem 0 0;
		font-size: var(--font-size);
		user-select: none;
	}

	.select-container::after {
		font-family: codicon;
		content: '\\eab4';
		font-size: 1.4rem;
		pointer-events: none;
		top: 50%;
		right: 8px;
		transform: translateY(-50%);
		position: absolute;
		color: var(--vscode-foreground);
	}

	.select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		border: 1px solid var(--vscode-dropdown-border);
		cursor: pointer;
		font-family: inherit;
		min-height: 100%;
		padding: 2px 26px 2px 8px;
		background-color: var(--vscode-dropdown-background);
		border-radius: 0.3rem;
		box-sizing: border-box;
		color: var(--vscode-foreground);
		font-family: var(--font-family);
		height: 26px;
		user-select: none;
	}

	.timeline {
		flex: 1;
		min-height: 0;
	}

	.timeline__empty {
		padding: 0.4rem 2rem 1.3rem 2rem;
		font-size: var(--font-size);
	}

	.timeline__empty p {
		margin-top: 0;
	}

	:host-context(body[data-placement='view']) gl-feature-gate {
		background-color: var(--vscode-sideBar-background);
	}

	gl-feature-gate gl-feature-badge {
		vertical-align: super;
		margin-left: 0.4rem;
		margin-right: 0.4rem;
	}

	label {
		min-width: fit-content;
	}

	label[disabled] {
		opacity: 0.5;
	}

	.config__content {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		max-width: 30rem;
		min-width: 20rem;

		margin-bottom: 0.4rem;
	}

	.config__content menu-label {
		padding: 0;
		margin-bottom: -0.4rem;
	}

	.config__content section {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.breadcrumb-item-children {
		display: flex;
	}

	.breadcrumb-folder {
		cursor: pointer;
	}
`,o5=T`
	:host {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		position: relative;

		--scroller-track-top: unset;
		--scroller-track-left: 0;
		--scroller-track-width: 100%;
		--scroller-thumb-height: 0.6rem;
		--scroller-track-height: 1.2rem;
	}

	gl-chart-scroller {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		min-height: 0;
	}

	gl-chart-scroller::part(track) {
		--track-top: var(--scroller-track-top);
		--track-left: var(--scroller-track-left);
		--track-width: var(--scroller-track-width);
		--track-height: var(--scroller-track-height);
		--thumb-height: var(--scroller-thumb-height);
	}

	#chart {
		flex: 1;
		width: 100%;
		height: 100%;
		min-height: 0;
	}

	footer {
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		margin: 0 1rem 0.4rem 1rem;
		gap: 0.8rem;
	}

	gl-chart-slider {
		flex: 1 0 auto;
		margin-left: 1.4rem;
	}

	gl-commit-sha {
		color: var(--color-foreground--75);
		text-align: right;
		min-width: 7.5rem; /* Ugly but stops the text from jumping around */
	}

	.bb svg {
		font: 10px var(--font-family);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.bb path,
	.bb line {
		fill: none;
	}

	:host-context(.vscode-dark) .bb path.domain,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb path.domain {
		stroke: var(--color-background--lighten-15);
	}

	:host-context(.vscode-light) .bb path.domain,
	:host-context(.vscode-high-contrast-light) .bb path.domain {
		stroke: var(--color-background--darken-15);
	}

	.bb text,
	.bb .bb-button {
		user-select: none;
		fill: var(--color-view-foreground);
	}

	.bb .bb-event-rects,
	.bb .bb-event-rect {
		cursor: pointer !important;
	}

	.bb .bb-event-rects:active,
	.bb .bb-event-rect:active {
		cursor: ew-resize !important;
	}

	.bb .bb-xgrid-focus,
	.bb .bb-ygrid-focus,
	.bb .bb-ygrid,
	.bb .bb-event-rect,
	.bb .bb-bars path {
		shape-rendering: crispEdges;
	}

	.bb .bb-legend-item text {
		fill: var(--color-foreground--85);
	}

	.bb .bb-legend-item-tile {
		stroke-width: 2px;
		transform: translate(0, 1px);
	}

	.bb .bb-chart-arc .bb-gauge-value {
		fill: #000;
	}

	.bb .bb-chart-arc path {
		stroke: #fff;
	}

	.bb .bb-chart-arc rect {
		stroke: #fff;
		stroke-width: 1;
	}

	.bb .bb-chart-arc text {
		fill: #fff;
		font-size: 13px;
	}

	.bb .bb-axis {
		shape-rendering: crispEdges;
	}

	.bb .bb-grid {
		pointer-events: none;
	}

	:host-context(.vscode-dark) .bb .bb-grid line,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-grid line {
		stroke: var(--color-background--lighten-05);
	}

	:host-context(.vscode-dark) .bb .bb-grid line.bb-ygrid,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-grid line.bb-ygrid {
		stroke: var(--color-background--lighten-05);
	}

	:host-context(.vscode-light) .bb .bb-grid line,
	:host-context(.vscode-high-contrast-light) .bb .bb-grid line {
		stroke: var(--color-background--darken-05);
	}

	:host-context(.vscode-light) .bb .bb-grid line.bb-ygrid,
	:host-context(.vscode-high-contrast-light) .bb .bb-grid line.bb-ygrid {
		stroke: var(--color-background--darken-05);
	}

	.bb .bb-grid text {
		fill: var(--color-view-foreground);
	}

	:host-context(.vscode-dark) .bb .bb-xgrid-focus line,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-xgrid-focus line {
		stroke: var(--color-background--lighten-30);
	}

	:host-context(.vscode-light) .bb .bb-xgrid-focus line,
	:host-context(.vscode-high-contrast-light) .bb .bb-xgrid-focus line {
		stroke: var(--color-background--darken-30);
	}

	.bb .bb-text.bb-empty {
		fill: #808080;
		font-size: 2em;
	}

	.bb .bb-line {
		stroke-width: 1px;
	}

	.bb .bb-circle._expanded_ {
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 3px;
	}

	.bb .bb-selected-circle {
		opacity: 1 !important;
		fill-opacity: 1 !important;
		stroke-opacity: 1 !important;
		stroke-width: 3px;
	}

	.bb .bb-bar {
		stroke-width: 0;
		opacity: 0.9 !important;
		fill-opacity: 0.9 !important;
	}

	.bb .bb-bar._expanded_ {
		opacity: 1 !important;
		fill-opacity: 1 !important;
	}

	.bb .bb-candlestick {
		stroke-width: 1px;
	}

	.bb .bb-candlestick._expanded_ {
		fill-opacity: 0.75;
	}

	.bb .bb-target.bb-focused,
	.bb .bb-circles.bb-focused {
		opacity: 1;
	}

	.bb .bb-target.bb-focused path.bb-line,
	.bb .bb-target.bb-focused path.bb-step,
	.bb .bb-circles.bb-focused path.bb-line,
	.bb .bb-circles.bb-focused path.bb-step {
		stroke-width: 2px;
	}

	.bb .bb-target.bb-defocused,
	.bb .bb-circles.bb-defocused {
		opacity: 0.2 !important;
	}

	.bb .bb-target.bb-defocused .text-overlapping,
	.bb .bb-circles.bb-defocused .text-overlapping {
		opacity: 0.05 !important;
	}

	.bb .bb-region {
		fill: steelblue;
		fill-opacity: 0.1;
	}

	:host-context(.vscode-dark) .bb .bb-zoom-brush,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .bb .bb-zoom-brush {
		fill: white;
		fill-opacity: 0.2;
	}

	:host-context(.vscode-light) .bb .bb-zoom-brush,
	:host-context(.vscode-high-contrast-light) .bb .bb-zoom-brush {
		fill: black;
		fill-opacity: 0.1;
	}

	.bb .bb-brush .extent {
		fill-opacity: 0.1;
	}

	.bb .bb-legend-item {
		font-size: 12px;
		user-select: none;
	}

	.bb .bb-legend-item-hidden {
		opacity: 0.15;
	}

	.bb .bb-legend-background {
		opacity: 0.75;
		fill: white;
		stroke: lightgray;
		stroke-width: 1;
	}

	.bb .bb-title {
		font: 14px var(--font-family);
	}

	.bb .bb-tooltip-container {
		z-index: 10;
		user-select: none;
	}

	.bb .bb-area {
		stroke-width: 0;
		opacity: 0.2;
	}

	.bb .bb-chart-arcs-title {
		dominant-baseline: middle;
		font-size: 1.3em;
	}

	.bb text.bb-chart-arcs-gauge-title {
		dominant-baseline: middle;
		font-size: 2.7em;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-background {
		fill: #e0e0e0;
		stroke: #fff;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-gauge-unit {
		fill: #000;
		font-size: 16px;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-gauge-max {
		fill: #777;
	}

	.bb .bb-chart-arcs .bb-chart-arcs-gauge-min {
		fill: #777;
	}

	.bb .bb-chart-radars .bb-levels polygon {
		fill: none;
		stroke: #848282;
		stroke-width: 0.5px;
	}

	.bb .bb-chart-radars .bb-levels text {
		fill: #848282;
	}

	.bb .bb-chart-radars .bb-axis line {
		stroke: #848282;
		stroke-width: 0.5px;
	}

	.bb .bb-chart-radars .bb-axis text {
		font-size: 1.15em;
		cursor: default;
	}

	.bb .bb-chart-radars .bb-shapes polygon {
		fill-opacity: 0.2;
		stroke-width: 1px;
	}

	.bb .bb-button {
		position: absolute;
		top: 0.4rem;
		right: -1.4rem;
		background-color: var(--color-button-background);
		color: var(--color-button-foreground);
		font-size: var(--font-size);
		font-family: var(--font-family);
	}

	:host-context([data-placement='view']) .bb .bb-button {
		margin-right: 2.8rem;
	}

	.bb .bb-zoom-reset {
		display: inline-block;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.notice {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10% 2rem 30% 2rem;
		font-size: var(--font-size);

		z-index: 1;
	}

	.notice--blur {
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);

		animation: fadeIn 0.2s ease-in;
		animation-fill-mode: forwards;
		opacity: 0;
	}

	:host-context([data-placement='view']) .notice--blur {
		animation-delay: 0.5s;
	}

	.notice p {
		margin: 0;
	}

	.bb-tooltip {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background-color: var(--color-hover-background);
		color: var(--color-hover-foreground);
		border: 1px solid var(--color-hover-border);
		box-shadow: 0 2px 8px var(--vscode-widget-shadow);
		font-size: var(--font-size);
		opacity: 1;
		white-space: nowrap;
		min-width: 0;
		max-width: 360px;
		overflow: hidden;
	}

	.bb-tooltip .author {
		font-weight: 600;
	}

	.bb-tooltip .icon {
		font-family: codicon;
	}

	.bb-tooltip .branches {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		/* font-family: var(--vscode-editor-font-family); */
	}

	.bb-tooltip .sha {
		/* background: var(--vscode-textCodeBlock-background);
		border-radius: 0.3rem; */
		/* padding: 0.1rem 0.4rem 0.2rem 0.4rem; */
		font-family: var(--vscode-editor-font-family);
		margin-right: 0.4rem;
	}

	.bb-tooltip .additions {
		color: var(--vscode-gitDecoration-addedResourceForeground);
	}

	.bb-tooltip .deletions {
		color: var(--vscode-gitDecoration-deletedResourceForeground);
	}

	.bb-tooltip .date {
		flex: 1 1 auto;
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		font-weight: normal;
		gap: 0.5rem;
		min-width: 0;
	}

	.bb-tooltip .date--relative {
		flex: 0 1 auto;
	}

	.bb-tooltip .date--absolute {
		flex: 0 100000 auto;
		font-style: italic;
	}

	.bb-tooltip .message {
		margin-left: 0rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		max-height: 50vh;
		overflow-y: auto;
		overflow-x: hidden;
	}

	.bb-tooltip .message__content {
		white-space: pre-line;
	}

	:host-context([data-placement='editor']) .bb-axis-y .tick text {
		fill: var(--color-foreground--85);
	}

	:host-context([data-placement='view']) .bb-axis-y .tick text {
		transform: translate(0, 0.4rem);
		font-family: codicon;
		font-size: 1.5rem;
	}

	@media (max-height: 275px) {
		:host-context([data-placement='view']) .bb-axis-y .tick text {
			transform: none;
			font-size: 1rem;
		}
	}

	@media (max-height: 225px) {
		:host-context([data-placement='view']) .bb-axis-y .tick text {
			display: none;
		}
	}
`;var o8=T`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,o3=T`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,o4=Object.defineProperty,o6=Object.defineProperties,o7=Object.getOwnPropertyDescriptor,o9=Object.getOwnPropertyDescriptors,re=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,ro=Object.prototype.propertyIsEnumerable,rr=e=>{throw TypeError(e)},ri=(e,t,o)=>t in e?o4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,rs=(e,t)=>{for(var o in t||(t={}))rt.call(t,o)&&ri(e,o,t[o]);if(re)for(var o of re(t))ro.call(t,o)&&ri(e,o,t[o]);return e},rn=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?o7(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&o4(t,o,s),s},ra=(e,t,o)=>t.has(e)||rr("Cannot "+o),rl=new WeakMap,rc=new WeakMap,rh=new WeakMap,rd=new WeakSet,rp=new WeakMap,ru=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),i="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!i&&"string"==typeof o&&o.length>0&&void 0!==r&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(o,t.toString())}):e.formData.append(o,r.toString()))},this.handleFormSubmit=e=>{var t;let o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=rl.get(this.form))||t.forEach(e=>{this.setUserInteracted(e,!0)})),!this.form||this.form.noValidate||o||r(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),rp.set(this.host,[])},this.handleInteraction=e=>{let t=rp.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=rs({form:e=>{let t=e.form;if(t){let o=e.getRootNode().querySelector(`#${t}`);if(o)return o}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!=typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),rp.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),rp.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,rl.has(this.form)?rl.get(this.form).add(this.host):rl.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),rc.has(this.form)||(rc.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),rh.has(this.form)||(rh.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=rl.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),rc.has(this.form)&&(this.form.reportValidity=rc.get(this.form),rc.delete(this.form)),rh.has(this.form)&&(this.form.checkValidity=rh.get(this.form),rh.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?rd.add(e):rd.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{t.hasAttribute(e)&&o.setAttribute(e,t.getAttribute(e))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){let t=this.host,o=!!rd.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},rf=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(o6(rs({},rf),o9({valid:!1,valueMissing:!0}))),Object.freeze(o6(rs({},rf),o9({valid:!1,customError:!0})));var rg=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};let rb=new Set,rm=new Map,rv="ltr",ry="en",rw="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(rw){let e=new MutationObserver(rk);rv=document.documentElement.dir||"ltr",ry=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function rx(...e){e.map(e=>{let t=e.$code.toLowerCase();rm.has(t)?rm.set(t,Object.assign(Object.assign({},rm.get(t)),e)):rm.set(t,e),s||(s=e)}),rk()}function rk(){rw&&(rv=document.documentElement.dir||"ltr",ry=document.documentElement.lang||navigator.language),[...rb.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){rb.add(this.host)}hostDisconnected(){rb.delete(this.host)}dir(){return`${this.host.dir||rv}`.toLowerCase()}lang(){return`${this.host.lang||ry}`.toLowerCase()}getTranslationData(e){var t,o;let r=new Intl.Locale(e.replace(/_/g,"-")),i=null==r?void 0:r.language.toLowerCase(),s=null!=(o=null==(t=null==r?void 0:r.region)?void 0:t.toLowerCase())?o:"",a=rm.get(`${i}-${s}`),c=rm.get(i);return{locale:r,language:i,region:s,primary:a,secondary:c}}exists(e,t){var o;let{primary:r,secondary:i}=this.getTranslationData(null!=(o=t.lang)?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!r&&!!r[e]||!!i&&!!i[e]||!!t.includeFallback&&!!s&&!!s[e]}term(e,...t){let o,{primary:r,secondary:i}=this.getTranslationData(this.lang());if(r&&r[e])o=r[e];else if(i&&i[e])o=i[e];else{if(!s||!s[e])return String(e);o=s[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}};var r_={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};rx(r_);var r$=class extends LocalizeController{};function rC(e,t){let o=rs({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:i}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach(t=>{if(e.has(t)){let i=e.get(t),s=this[t];i!==s&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](i,s)}}),i.call(this,e)}}}rx(r_);var rP=T`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,rS=class extends lit_element_i{constructor(){let e;super(),(e=x).has(this)?rr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let o=new CustomEvent(e,rs({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,o)}catch(r){customElements.define(e,class extends t{},o)}return}let i=" (unknown version)";"version"in t&&t.version&&(i=" v"+t.version),"version"in r&&r.version&&r.version}attributeChangedCallback(e,t,o){let r,i;if(ra(this,r=x,"read from private field"),i?!i.call(this):!r.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),ra(this,e=x,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)})}};x=new WeakMap,rS.version="2.20.1",rS.dependencies={},rn([eR()],rS.prototype,"dir",2),rn([eR()],rS.prototype,"lang",2);let rA=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let rE=rA(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let o in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.st)e in t||(o.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return ex}}),{I:rz}={M:eo,P:er,A:ei,C:1,L:eP,R,D:eh,V:eS,I:k,H,N:L,U:z,B:I,F:Z},rO={},rT=rA(class extends directive_i{constructor(e){if(super(e),3!==e.type&&1!==e.type&&4!==e.type)throw Error("The `live` directive is not allowed on child or event bindings");if(void 0!==e.strings)throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ex||t===ek)return t;let o=e.element,r=e.name;if(3===e.type){if(t===o[r])return ex}else if(4===e.type){if(!!t===o.hasAttribute(r))return ex}else if(1===e.type&&o.getAttribute(r)===t+"")return ex;return((e,t=rO)=>e._$AH=t)(e),t}});var rR=class extends rS{constructor(){super(...arguments),this.formControlController=new ru(this),this.hasSlotController=new rg(this,"help-text","label"),this.localize=new r$(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.resizeObserver)||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${100*e}%`)}syncTooltip(e){if(null!==this.output){let t=this.input.offsetWidth,o=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i="rtl"===this.localize.dir(),s=t*e;if(i){let i=`${t-s}px + ${e} * ${r}`;this.output.style.translate=`calc((${i} - ${o/2}px - ${r} / 2))`}else{let t=`${s}px - ${e} * ${r}`;this.output.style.translate=`calc(${t} - ${o/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=!!this.label||!!e,r=!!this.helpText||!!t;return ew`
      <div
        part="form-control"
        class=${rE({"form-control":!0,"form-control--medium":!0,"form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${rE({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${this.name??ek}
              ?disabled=${this.disabled}
              min=${this.min??ek}
              max=${this.max??ek}
              step=${this.step??ek}
              .value=${rT(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"!==this.tooltip&&!this.disabled?ew`
                  <output part="tooltip" class="range__tooltip">
                    ${"function"==typeof this.tooltipFormatter?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};rR.styles=[rP,o3,o8],rn([eL(".range__control")],rR.prototype,"input",2),rn([eL(".range__tooltip")],rR.prototype,"output",2),rn([eD()],rR.prototype,"hasFocus",2),rn([eD()],rR.prototype,"hasTooltip",2),rn([eR()],rR.prototype,"title",2),rn([eR()],rR.prototype,"name",2),rn([eR({type:Number})],rR.prototype,"value",2),rn([eR()],rR.prototype,"label",2),rn([eR({attribute:"help-text"})],rR.prototype,"helpText",2),rn([eR({type:Boolean,reflect:!0})],rR.prototype,"disabled",2),rn([eR({type:Number})],rR.prototype,"min",2),rn([eR({type:Number})],rR.prototype,"max",2),rn([eR({type:Number})],rR.prototype,"step",2),rn([eR()],rR.prototype,"tooltip",2),rn([eR({attribute:!1})],rR.prototype,"tooltipFormatter",2),rn([eR({reflect:!0})],rR.prototype,"form",2),rn([((e="value")=>(t,o)=>{let r=t.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(t,s,a){var c;let h=r.getPropertyOptions(e);if(t===("string"==typeof h.attribute?h.attribute:e)){let t=h.converter||K,r=("function"==typeof t?t:null!=(c=null==t?void 0:t.fromAttribute)?c:K.fromAttribute)(a,h.type);this[e]!==r&&(this[o]=r)}i.call(this,t,s,a)}})()],rR.prototype,"defaultValue",2),rn([(m={passive:!0},(e,t)=>{Object.assign("function"==typeof e?e:e[t],m)})],rR.prototype,"handleThumbDragStart",1),rn([rC("value",{waitUntilFirstUpdate:!0})],rR.prototype,"handleValueChange",1),rn([rC("disabled",{waitUntilFirstUpdate:!0})],rR.prototype,"handleDisabledChange",1),rn([rC("hasTooltip",{waitUntilFirstUpdate:!0})],rR.prototype,"syncRange",1),rR.define("sl-range");var rD=Object.defineProperty,rI=Object.getOwnPropertyDescriptor,rL=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?rI(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&rD(t,o,s),s};let rM="gl-chart-slider",rB=class extends GlElement{constructor(){super(...arguments),this._value=0,this._max=0,this._min=0,this._shift=!1}get data(){return this._data}set data(e){this._data!==e&&(this._data=e,this._min=0,this._max=(e?.length??1)-1)}get shift(){return this._shift}set shift(e){this._shift=e,e?this.style.setProperty("--gl-track-color-active","var(--sl-color-primary-600"):this.style.removeProperty("--gl-track-color-active")}get value(){return this.data?.[this._value]}render(){return ew`<div class="slider-container">
			<sl-range
				id="slider"
				.min=${this._min}
				.max=${this._max}
				.value=${this._value}
				.tooltip="top"
				.tooltipFormatter=${e=>"Hold shift to compare with working tree"}
				@sl-change=${this.handleSliderInput}
				@sl-input=${this.handleSliderInput}
				@click=${this.handleSliderInput}
			></sl-range>
		</div>`}select(e){let t;if("string"==typeof e)t=this.data?.findIndex(t=>t.sha===e);else{let o=e.toISOString();t=this.data?.findIndex(e=>e.date===o)}null!=t&&-1!==t&&(this._value=t)}handleSliderInput(e){if(!this.data?.length)return;let t=parseInt(e.target.value),o=new Date(this.data[t].date);this.emit("gl-slider-change",{date:o,shift:this.shift})}};rB.tagName=rM,rB.styles=T`
		:host {
			display: block;
		}

		.slider-container {
			width: 100%;
			position: relative;
			padding-bottom: 0.4rem;
		}

		sl-range::part(input) {
			--track-height: 3px;
			--thumb-size: 16px;
			--track-active-offset: 100%;
			--track-color-active: var(--gl-track-color-active, var(--sl-color-neutral-200));
		}

		sl-range::part(thumb) {
			cursor: pointer;
		}
	`,rL([eD()],rB.prototype,"_value",2),rL([eR({type:Array})],rB.prototype,"data",1),rL([eR({type:Boolean})],rB.prototype,"shift",1),rB=rL([eO(rM)],rB);var rF=T`
  :host {
    display: contents;
  }
`,rN=class extends rS{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let e=this.shadowRoot.querySelector("slot");if(null!==e){let t=e.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return ew` <slot @slotchange=${this.handleSlotChange}></slot> `}};rN.styles=[rP,rF],rn([eR({type:Boolean,reflect:!0})],rN.prototype,"disabled",2),rn([rC("disabled",{waitUntilFirstUpdate:!0})],rN.prototype,"handleDisabledChange",1),rN.define("sl-resize-observer");var rj=Object.defineProperty,rU=Object.getOwnPropertyDescriptor,rq=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?rU(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&rj(t,o,s),s};let rH="gl-chart-scroller",rV=class extends GlElement{constructor(){super(...arguments),this.position=0,this.size=100,this.onDragStart=e=>{if(!this.isScrollable())return;e.preventDefault(),e.stopPropagation();let t=e.currentTarget,o=t.parentElement;if(!o)return;t.setPointerCapture(e.pointerId);let[r,i]=this.range,s=this.visibleRange[1]-this.visibleRange[0];this._dragInfo={startX:e.clientX,startPosition:this.position,trackWidth:o.offsetWidth,viewRange:i-r,zoomRange:s,viewStart:r,maxPosition:100-this.size,pointerId:e.pointerId},this.emit("gl-scroll-start")},this.onDragMove=e=>{if(e.pointerId!==this._dragInfo?.pointerId)return;e.preventDefault(),e.stopPropagation();let t=(e.clientX-this._dragInfo.startX)/this._dragInfo.trackWidth*100,o=Math.max(0,Math.min(this._dragInfo.maxPosition,this._dragInfo.startPosition+t))/(100-this.size)*(this._dragInfo.viewRange-this._dragInfo.zoomRange),r=this._dragInfo.viewStart+o,i=r+this._dragInfo.zoomRange;this.emitScrollEvent(r,i)},this.onDragEnd=e=>{if(!this._dragInfo||e&&e.pointerId!==this._dragInfo.pointerId)return;let t=this.renderRoot.querySelector(".thumb");t&&this._dragInfo.pointerId&&t.releasePointerCapture(this._dragInfo.pointerId),this._dragInfo=void 0,this.requestUpdate(),this.emit("gl-scroll-end")},this.onTrackClick=e=>{if(!this.isScrollable()||e.target!==e.currentTarget)return;let t=e.currentTarget.getBoundingClientRect(),o=(e.clientX-t.left)/t.width,[r,i]=this.range,s=this.visibleRange[1]-this.visibleRange[0],a=i-r,c=r+a*o,h=Math.max(r,Math.min(i-s,c-s/2));this.emitScrollEvent(h,h+s)},this.onWheel=e=>{if(e.ctrlKey)return void Object.defineProperty(e,"ctrlKey",{value:!1});if(e.stopPropagation(),e.stopImmediatePropagation(),!this.isScrollable())return;let t=null!=this._wheelTimer;t&&clearTimeout(this._wheelTimer),this._wheelTimer=setTimeout(()=>{this._wheelTimer=void 0,this.emit("gl-scroll-end")},150),t||this.emit("gl-scroll-start");let[o,r]=this.range,[i,s]=this.visibleRange,a=s-i,c=e.deltaY*a*.001,h=Math.max(o,Math.min(r-a,i+c));this.emitScrollEvent(h,h+a)}}isScrollable(){return null!=this.range&&null!=this.visibleRange&&this.size<100}connectedCallback(){super.connectedCallback?.(),this.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0})}disconnectedCallback(){this.onDragEnd(),this.removeEventListener("wheel",this.onWheel),super.disconnectedCallback?.()}willUpdate(e){({size:this.size,position:this.position}=this.calculateScrollState()),this.style.setProperty("--thumb-width",`${this.size}%`),this.style.setProperty("--thumb-left",`${this.position}%`)}render(){return ew`<slot></slot>
			<div class="track" part="track" ?scrollable="${this.isScrollable()}" @pointerdown="${this.onTrackClick}">
				<div
					class="thumb"
					@pointerdown="${this.onDragStart}"
					@pointermove="${this.onDragMove}"
					@pointerup="${this.onDragEnd}"
					@pointercancel="${this.onDragEnd}"
					@lostpointercapture="${this.onDragEnd}"
				></div>
			</div>`}calculateScrollState(){if(null==this.range||null==this.visibleRange)return{position:0,size:100};let[e,t]=this.range,[o,r]=this.visibleRange,i=t-e,s=r-o;if(i<=1||s<=1)return{position:0,size:100};let a=Math.max(20,Math.min(100,s/i*100)),c=i-s;return c<=0?{position:0,size:a}:{position:Math.max(0,Math.min(100-a,(o-e)/c*(100-a))),size:a}}emitScrollEvent(e,t){(e!==this.visibleRange?.[0]||t!==this.visibleRange[1])&&this.emit("gl-scroll",{range:[e,t]})}};rV.tagName=rH,rV.styles=T`
		:host {
			--track-top: unset;
			--track-left: 0;
			--track-width: 100%;
			--track-height: 1.2rem;

			--thumb-height: 0.6rem;
			--thumb-width: 2rem;
			--thumb-left: 0;
		}

		.track {
			visibility: hidden;
			position: absolute;
			background: transparent;
			top: var(--track-top);
			left: var(--track-left);
			width: var(--track-width, 100%);
			height: var(--track-height, 1rem);
			z-index: 1;
		}

		.track[scrollable] {
			visibility: visible;
		}

		.thumb {
			position: absolute;
			top: 0;
			left: var(--thumb-left);
			height: var(--thumb-height);
			width: var(--thumb-width);
			min-width: 2rem;
			background: transparent;
			transition: background 1s linear;
			cursor: default;
		}

		/* :host(:focus-within) .thumb, */
		:host(:hover) .thumb {
			background: var(--vscode-scrollbarSlider-background);
			transition: none;
		}

		.thumb:hover {
			background: var(--vscode-scrollbarSlider-hoverBackground) !important;
		}

		.thumb:active {
			background: var(--vscode-scrollbarSlider-activeBackground) !important;
		}
	`,rq([eR({type:Array})],rV.prototype,"range",2),rq([eR({type:Array})],rV.prototype,"visibleRange",2),rq([eD()],rV.prototype,"position",2),rq([eD()],rV.prototype,"size",2),rV=rq([eO(rH)],rV);let rW=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f",bracket:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52","send-to-remote-agent":"\\ec53","comment-discussion-sparkle":"\\ec54","chat-sparkle-warning":"\\ec55","chat-sparkle-error":"\\ec56",collection:"\\ec57","new-collection":"\\ec58",thinking:"\\ec59",build:"\\ec5a","comment-discussion-quote":"\\ec5b",cursor:"\\ec5c",eraser:"\\ec5d","file-text":"\\ec5e",quotes:"\\ec60",rename:"\\ec61","run-with-deps":"\\ec62","debug-connected":"\\ec63",strikethrough:"\\ec64","open-in-product":"\\ec65","index-zero":"\\ec66",agent:"\\ec67","edit-code":"\\ec68","repo-selected":"\\ec69",skip:"\\ec6a","merge-into":"\\ec6b","git-branch-changes":"\\ec6c","git-branch-staged-changes":"\\ec6d","git-branch-conflicts":"\\ec6e","git-branch":"\\ec6f","git-branch-create":"\\ec6f","git-branch-delete":"\\ec6f","search-large":"\\ec70","terminal-git-bash":"\\ec71","window-active":"\\ec72",forward:"\\ec73",download:"\\ec74",clockface:"\\ec75",unarchive:"\\ec76","session-in-progress":"\\ec77","collection-small":"\\ec78","vm-small":"\\ec79","cloud-small":"\\ec7a"}),rG=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147"});var rK=Object.defineProperty,rZ=Object.getOwnPropertyDescriptor,rY=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?rZ(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&rK(t,o,s),s};function rX(e,t=""){return O(Object.entries(e).map(([e,o])=>(function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`})(e,o,t)).join(""))}let rJ=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};rJ.styles=T`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: var(--code-icon-v-align, text-bottom);
			letter-spacing: normal;
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}

		${rX(rW)}
		${rX(rG,"gl-")}

		:host([icon='custom-start-work']) {
			position: relative;
		}
		:host([icon='custom-start-work'])::before {
			content: '\\ea68';
		}
		:host([icon='custom-start-work'])::after {
			content: '\\ea60';
			position: absolute;
			right: -0.2em;
			bottom: -0.2em;
			font-size: 0.6em;
			line-height: normal;
		}

		:host([icon='gl-pinned-filled']):before {
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}

		:host([flip='inline']) {
			transform: rotateY(180deg);
		}

		:host([flip='block']) {
			transform: rotateX(180deg);
		}

		:host([rotate='45']) {
			transform: rotateZ(45deg);
		}
	`,rY([eR({reflect:!0})],rJ.prototype,"icon",2),rY([eR({reflect:!0})],rJ.prototype,"modifier",2),rY([eR({type:Number})],rJ.prototype,"size",2),rY([eR({reflect:!0})],rJ.prototype,"flip",2),rY([eR({reflect:!0})],rJ.prototype,"rotate",2),rJ=rY([eO("code-icon")],rJ);var rQ=new Map,r0=new WeakMap;function r1(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function r2(e,t){rQ.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function r5(e,t,o){let r=r0.get(e);if(null==r?void 0:r[t])return r1(r[t],o.dir);let i=rQ.get(t);return i?r1(i,o.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ek,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ek||null==e)return this._t=void 0,this.it=e;if(e===ex)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let r8=rA(unsafe_html_e);var r3=T`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,r4=T`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;let r6=Math.min,r7=Math.max,r9=Math.round,ie=Math.floor,it=e=>({x:e,y:e}),io={left:"right",right:"left",bottom:"top",top:"bottom"},ir={start:"end",end:"start"};function ii(e,t){return"function"==typeof e?e(t):e}function is(e){return e.split("-")[0]}function ia(e){return e.split("-")[1]}function il(e){return"x"===e?"y":"x"}function ic(e){return"y"===e?"height":"width"}let ih=new Set(["top","bottom"]);function id(e){return ih.has(is(e))?"y":"x"}function ip(e){return e.replace(/start|end/g,e=>ir[e])}let iu=["left","right"],ig=["right","left"],ib=["top","bottom"],im=["bottom","top"];function iv(e){return e.replace(/left|right|bottom|top/g,e=>io[e])}function iy(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function iw(e){let{x:t,y:o,width:r,height:i}=e;return{width:r,height:i,top:o,left:t,right:t+r,bottom:o+i,x:t,y:o}}function ix(e,t,o){let r,{reference:i,floating:s}=e,a=id(t),c=il(id(t)),h=ic(c),p=is(t),u="y"===a,f=i.x+i.width/2-s.width/2,g=i.y+i.height/2-s.height/2,b=i[h]/2-s[h]/2;switch(p){case"top":r={x:f,y:i.y-s.height};break;case"bottom":r={x:f,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:g};break;case"left":r={x:i.x-s.width,y:g};break;default:r={x:i.x,y:i.y}}switch(ia(t)){case"start":r[c]-=b*(o&&u?-1:1);break;case"end":r[c]+=b*(o&&u?-1:1)}return r}async function ik(e,t){var o;void 0===t&&(t={});let{x:r,y:i,platform:s,rects:a,elements:c,strategy:h}=e,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:g=!1,padding:b=0}=ii(t,e),m=iy(b),v=c[g?"floating"===f?"reference":"floating":f],w=iw(await s.getClippingRect({element:null==(o=await (null==s.isElement?void 0:s.isElement(v)))||o?v:v.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(c.floating)),boundary:p,rootBoundary:u,strategy:h})),x="floating"===f?{x:r,y:i,width:a.floating.width,height:a.floating.height}:a.reference,_=await (null==s.getOffsetParent?void 0:s.getOffsetParent(c.floating)),$=await (null==s.isElement?void 0:s.isElement(_))&&await (null==s.getScale?void 0:s.getScale(_))||{x:1,y:1},C=iw(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:_,strategy:h}):x);return{top:(w.top-C.top+m.top)/$.y,bottom:(C.bottom-w.bottom+m.bottom)/$.y,left:(w.left-C.left+m.left)/$.x,right:(C.right-w.right+m.right)/$.x}}let i_=async(e,t,o)=>{let{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:a}=o,c=s.filter(Boolean),h=await (null==a.isRTL?void 0:a.isRTL(t)),p=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:f}=ix(p,r,h),g=r,b={},m=0;for(let o=0;o<c.length;o++){var v;let{name:s,fn:w}=c[o],{x:x,y:_,data:$,reset:C}=await w({x:u,y:f,initialPlacement:r,placement:g,strategy:i,middlewareData:b,rects:p,platform:{...a,detectOverflow:null!=(v=a.detectOverflow)?v:ik},elements:{reference:e,floating:t}});u=null!=x?x:u,f=null!=_?_:f,b={...b,[s]:{...b[s],...$}},C&&m<=50&&(m++,"object"==typeof C&&(C.placement&&(g=C.placement),C.rects&&(p=!0===C.rects?await a.getElementRects({reference:e,floating:t,strategy:i}):C.rects),{x:u,y:f}=ix(p,g,h)),o=-1)}return{x:u,y:f,placement:g,strategy:i,middlewareData:b}},i$=new Set(["left","top"]);async function iC(e,t){let{placement:o,platform:r,elements:i}=e,s=await (null==r.isRTL?void 0:r.isRTL(i.floating)),a=is(o),c=ia(o),h="y"===id(o),p=i$.has(a)?-1:1,u=s&&h?-1:1,f=ii(t,e),{mainAxis:g,crossAxis:b,alignmentAxis:m}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return c&&"number"==typeof m&&(b="end"===c?-1*m:m),h?{x:b*u,y:g*p}:{x:g*p,y:b*u}}function iP(){return"u">typeof window}function iS(e){return iz(e)?(e.nodeName||"").toLowerCase():"#document"}function iA(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function iE(e){var t;return null==(t=(iz(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function iz(e){return!!iP()&&(e instanceof Node||e instanceof iA(e).Node)}function iO(e){return!!iP()&&(e instanceof Element||e instanceof iA(e).Element)}function iT(e){return!!iP()&&(e instanceof HTMLElement||e instanceof iA(e).HTMLElement)}function iR(e){return!(!iP()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof iA(e).ShadowRoot)}let iD=new Set(["inline","contents"]);function iI(e){let{overflow:t,overflowX:o,overflowY:r,display:i}=iW(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+o)&&!iD.has(i)}let iL=new Set(["table","td","th"]),iM=[":popover-open",":modal"];function iB(e){return iM.some(t=>{try{return e.matches(t)}catch{return!1}})}let iF=["transform","translate","scale","rotate","perspective"],iN=["transform","translate","scale","rotate","perspective","filter"],ij=["paint","layout","strict","content"];function iU(e){let t=iq(),o=iO(e)?iW(e):e;return iF.some(e=>!!o[e]&&"none"!==o[e])||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||iN.some(e=>(o.willChange||"").includes(e))||ij.some(e=>(o.contain||"").includes(e))}function iq(){return!("u"<typeof CSS)&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let iH=new Set(["html","body","#document"]);function iV(e){return iH.has(iS(e))}function iW(e){return iA(e).getComputedStyle(e)}function iG(e){return iO(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function iK(e){if("html"===iS(e))return e;let t=e.assignedSlot||e.parentNode||iR(e)&&e.host||iE(e);return iR(t)?t.host:t}function iZ(e,t,o){var r;void 0===t&&(t=[]),void 0===o&&(o=!0);let i=function e(t){let o=iK(t);return iV(o)?t.ownerDocument?t.ownerDocument.body:t.body:iT(o)&&iI(o)?o:e(o)}(e),s=i===(null==(r=e.ownerDocument)?void 0:r.body),a=iA(i);if(s){let e=iY(a);return t.concat(a,a.visualViewport||[],iI(i)?i:[],e&&o?iZ(e):[])}return t.concat(i,iZ(i,[],o))}function iY(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function iX(e){let t=iW(e),o=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=iT(e),s=i?e.offsetWidth:o,a=i?e.offsetHeight:r,c=r9(o)!==s||r9(r)!==a;return c&&(o=s,r=a),{width:o,height:r,$:c}}function iJ(e){return iO(e)?e:e.contextElement}function iQ(e){let t=iJ(e);if(!iT(t))return it(1);let o=t.getBoundingClientRect(),{width:r,height:i,$:s}=iX(t),a=(s?r9(o.width):o.width)/r,c=(s?r9(o.height):o.height)/i;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}let i0=it(0);function i1(e){let t=iA(e);return iq()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:i0}function i2(e,t,o,r){var i;void 0===t&&(t=!1),void 0===o&&(o=!1);let s=e.getBoundingClientRect(),a=iJ(e),c=it(1);t&&(r?iO(r)&&(c=iQ(r)):c=iQ(e));let h=(void 0===(i=o)&&(i=!1),r&&(!i||r===iA(a))&&i)?i1(a):it(0),p=(s.left+h.x)/c.x,u=(s.top+h.y)/c.y,f=s.width/c.x,g=s.height/c.y;if(a){let e=iA(a),t=r&&iO(r)?iA(r):r,o=e,i=iY(o);for(;i&&r&&t!==o;){let e=iQ(i),t=i.getBoundingClientRect(),r=iW(i),s=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;p*=e.x,u*=e.y,f*=e.x,g*=e.y,p+=s,u+=a,i=iY(o=iA(i))}}return iw({width:f,height:g,x:p,y:u})}function i5(e,t){let o=iG(e).scrollLeft;return t?t.left+o:i2(iE(e)).left+o}function i8(e,t){let o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-i5(e,o),y:o.top+t.scrollTop}}let i3=new Set(["absolute","fixed"]);function i4(e,t,o){var r;let i;if("viewport"===t)i=function(e,t){let o=iA(e),r=iE(e),i=o.visualViewport,s=r.clientWidth,a=r.clientHeight,c=0,h=0;if(i){s=i.width,a=i.height;let e=iq();(!e||e&&"fixed"===t)&&(c=i.offsetLeft,h=i.offsetTop)}let p=i5(r);if(p<=0){let e=r.ownerDocument,t=e.body,o=getComputedStyle(t),i="CSS1Compat"===e.compatMode&&parseFloat(o.marginLeft)+parseFloat(o.marginRight)||0,a=Math.abs(r.clientWidth-t.clientWidth-i);a<=25&&(s-=a)}else p<=25&&(s+=p);return{width:s,height:a,x:c,y:h}}(e,o);else if("document"===t){let t,o,s,a,c,h,p;r=iE(e),t=iE(r),o=iG(r),s=r.ownerDocument.body,a=r7(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),c=r7(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight),h=-o.scrollLeft+i5(r),p=-o.scrollTop,"rtl"===iW(s).direction&&(h+=r7(t.clientWidth,s.clientWidth)-a),i={width:a,height:c,x:h,y:p}}else if(iO(t)){let e,r,s,a,c,h;r=(e=i2(t,!0,"fixed"===o)).top+t.clientTop,s=e.left+t.clientLeft,a=iT(t)?iQ(t):it(1),c=t.clientWidth*a.x,h=t.clientHeight*a.y,i={width:c,height:h,x:s*a.x,y:r*a.y}}else{let o=i1(e);i={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return iw(i)}function i6(e){return"static"===iW(e).position}function i7(e,t){if(!iT(e)||"fixed"===iW(e).position)return null;if(t)return t(e);let o=e.offsetParent;return iE(e)===o&&(o=o.ownerDocument.body),o}function i9(e,t){var o;let r=iA(e);if(iB(e))return r;if(!iT(e)){let t=iK(e);for(;t&&!iV(t);){if(iO(t)&&!i6(t))return t;t=iK(t)}return r}let i=i7(e,t);for(;i&&(o=i,iL.has(iS(o)))&&i6(i);)i=i7(i,t);return i&&iV(i)&&i6(i)&&!iU(i)?r:i||function(e){let t=iK(e);for(;iT(t)&&!iV(t);){if(iU(t))return t;if(iB(t))break;t=iK(t)}return null}(e)||r}let se=async function(e){let t=this.getOffsetParent||i9,o=this.getDimensions,r=await o(e.floating);return{reference:function(e,t,o){let r=iT(t),i=iE(t),s="fixed"===o,a=i2(e,!0,s,t),c={scrollLeft:0,scrollTop:0},h=it(0);if(r||!r&&!s)if(("body"!==iS(t)||iI(i))&&(c=iG(t)),r){let e=i2(t,!0,s,t);h.x=e.x+t.clientLeft,h.y=e.y+t.clientTop}else i&&(h.x=i5(i));s&&!r&&i&&(h.x=i5(i));let p=!i||r||s?it(0):i8(i,c);return{x:a.left+c.scrollLeft-h.x-p.x,y:a.top+c.scrollTop-h.y-p.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},st={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:r,strategy:i}=e,s="fixed"===i,a=iE(r),c=!!t&&iB(t.floating);if(r===a||c&&s)return o;let h={scrollLeft:0,scrollTop:0},p=it(1),u=it(0),f=iT(r);if((f||!f&&!s)&&(("body"!==iS(r)||iI(a))&&(h=iG(r)),iT(r))){let e=i2(r);p=iQ(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let g=!a||f||s?it(0):i8(a,h);return{width:o.width*p.x,height:o.height*p.y,x:o.x*p.x-h.scrollLeft*p.x+u.x+g.x,y:o.y*p.y-h.scrollTop*p.y+u.y+g.y}},getDocumentElement:iE,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:r,strategy:i}=e,s=[..."clippingAncestors"===o?iB(t)?[]:function(e,t){let o=t.get(e);if(o)return o;let r=iZ(e,[],!1).filter(e=>iO(e)&&"body"!==iS(e)),i=null,s="fixed"===iW(e).position,a=s?iK(e):e;for(;iO(a)&&!iV(a);){let t=iW(a),o=iU(a);o||"fixed"!==t.position||(i=null),(s?!o&&!i:!o&&"static"===t.position&&!!i&&i3.has(i.position)||iI(a)&&!o&&function e(t,o){let r=iK(t);return!(r===o||!iO(r)||iV(r))&&("fixed"===iW(r).position||e(r,o))}(e,a))?r=r.filter(e=>e!==a):i=t,a=iK(a)}return t.set(e,r),r}(t,this._c):[].concat(o),r],a=s[0],c=s.reduce((e,o)=>{let r=i4(t,o,i);return e.top=r7(r.top,e.top),e.right=r6(r.right,e.right),e.bottom=r6(r.bottom,e.bottom),e.left=r7(r.left,e.left),e},i4(t,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:i9,getElementRects:se,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:o}=iX(e);return{width:t,height:o}},getScale:iQ,isElement:iO,isRTL:function(e){return"rtl"===iW(e).direction}};function so(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let sr=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,r;let i,s,{placement:a,rects:c,platform:h,elements:p}=t,{apply:u=()=>{},...f}=ii(e,t),g=await h.detectOverflow(t,f),b=is(a),m=ia(a),v="y"===id(a),{width:w,height:x}=c.floating;"top"===b||"bottom"===b?(i=b,s=m===(await (null==h.isRTL?void 0:h.isRTL(p.floating))?"start":"end")?"left":"right"):(s=b,i="end"===m?"top":"bottom");let _=x-g.top-g.bottom,$=w-g.left-g.right,C=r6(x-g[i],_),P=r6(w-g[s],$),S=!t.middlewareData.shift,A=C,E=P;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(E=$),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(A=_),S&&!m){let e=r7(g.left,0),t=r7(g.right,0),o=r7(g.top,0),r=r7(g.bottom,0);v?E=w-2*(0!==e||0!==t?e+t:r7(g.left,g.right)):A=x-2*(0!==o||0!==r?o+r:r7(g.top,g.bottom))}await u({...t,availableWidth:E,availableHeight:A});let O=await h.getDimensions(p.floating);return w!==O.width||x!==O.height?{reset:{rects:!0}}:{}}}};function si(e){var t=e;for(let e=t;e;e=ss(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=ss(t);e;e=ss(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||iU(t)||"BODY"===e.tagName))return e}return null}function ss(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var sn=class extends rS{constructor(){super(...arguments),this.localize=new r$(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),r=0,i=0,s=0,a=0,c=0,h=0,p=0,u=0;o?e.top<t.top?(r=e.left,i=e.bottom,s=e.right,a=e.bottom,c=t.left,h=t.top,p=t.right,u=t.top):(r=t.left,i=t.bottom,s=t.right,a=t.bottom,c=e.left,h=e.top,p=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,s=t.left,a=t.top,c=e.right,h=e.bottom,p=t.left,u=t.bottom):(r=t.right,i=t.top,s=e.left,a=e.top,c=t.right,h=t.bottom,p=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,o,r){let i;void 0===r&&(r={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:p=!1}=r,u=iJ(e),f=s||a?[...u?iZ(u):[],...iZ(t)]:[];f.forEach(e=>{s&&e.addEventListener("scroll",o,{passive:!0}),a&&e.addEventListener("resize",o)});let g=u&&h?function(e,t){let o,r=null,i=iE(e);function s(){var e;clearTimeout(o),null==(e=r)||e.disconnect(),r=null}return!function a(c,h){void 0===c&&(c=!1),void 0===h&&(h=1),s();let p=e.getBoundingClientRect(),{left:u,top:f,width:g,height:b}=p;if(c||t(),!g||!b)return;let m={rootMargin:-ie(f)+"px "+-ie(i.clientWidth-(u+g))+"px "+-ie(i.clientHeight-(f+b))+"px "+-ie(u)+"px",threshold:r7(0,r6(1,h))||1},v=!0;function w(t){let r=t[0].intersectionRatio;if(r!==h){if(!v)return a();r?a(!1,r):o=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==r||so(p,e.getBoundingClientRect())||a(),v=!1}try{r=new IntersectionObserver(w,{...m,root:i.ownerDocument})}catch{r=new IntersectionObserver(w,m)}r.observe(e)}(!0),s}(u,o):null,b=-1,m=null;c&&(m=new ResizeObserver(e=>{let[r]=e;r&&r.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var e;null==(e=m)||e.observe(t)})),o()}),u&&!p&&m.observe(u),m.observe(t));let v=p?i2(e):null;return p&&function t(){let r=i2(e);v&&!so(v,r)&&o(),v=r,i=requestAnimationFrame(t)}(),o(),()=>{var e;f.forEach(e=>{s&&e.removeEventListener("scroll",o),a&&e.removeEventListener("resize",o)}),null==g||g(),null==(e=m)||e.disconnect(),m=null,p&&cancelAnimationFrame(i)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,o,r,i,s;let a,c,h,p;if(!this.active||!this.anchorEl)return;let u=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var o,r;let{x:i,y:s,placement:a,middlewareData:c}=t,h=await iC(t,e);return a===(null==(o=c.offset)?void 0:o.placement)&&null!=(r=c.arrow)&&r.alignmentOffset?{}:{x:i+h.x,y:s+h.y,data:{...h,placement:a}}}}];this.sync?u.push(sr({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&u.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var o,r,i,s,a,c,h,p;let u,f,g,{placement:b,middlewareData:m,rects:v,initialPlacement:w,platform:x,elements:_}=e,{mainAxis:$=!0,crossAxis:C=!0,fallbackPlacements:P,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:A="none",flipAlignment:E=!0,...O}=ii(t,e);if(null!=(o=m.arrow)&&o.alignmentOffset)return{};let T=is(b),D=id(w),M=is(w)===w,B=await (null==x.isRTL?void 0:x.isRTL(_.floating)),F=P||(M||!E?[iv(w)]:(u=iv(w),[ip(w),u,ip(u)])),N="none"!==A;!P&&N&&F.push(...(f=ia(w),g=function(e,t,o){switch(e){case"top":case"bottom":if(o)return t?ig:iu;return t?iu:ig;case"left":case"right":return t?ib:im;default:return[]}}(is(w),"start"===A,B),f&&(g=g.map(e=>e+"-"+f),E&&(g=g.concat(g.map(ip)))),g));let j=[w,...F],U=await x.detectOverflow(e,O),q=[],V=(null==(r=m.flip)?void 0:r.overflows)||[];if($&&q.push(U[T]),C){let e,t,o,r,i=(c=b,h=v,void 0===(p=B)&&(p=!1),e=ia(c),o=ic(t=il(id(c))),r="x"===t?e===(p?"end":"start")?"right":"left":"start"===e?"bottom":"top",h.reference[o]>h.floating[o]&&(r=iv(r)),[r,iv(r)]);q.push(U[i[0]],U[i[1]])}if(V=[...V,{placement:b,overflows:q}],!q.every(e=>e<=0)){let e=((null==(i=m.flip)?void 0:i.index)||0)+1,t=j[e];if(t&&("alignment"!==C||D===id(t)||V.every(e=>id(e.placement)!==D||e.overflows[0]>0)))return{data:{index:e,overflows:V},reset:{placement:t}};let o=null==(s=V.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:s.placement;if(!o)switch(S){case"bestFit":{let e=null==(a=V.filter(e=>{if(N){let t=id(e.placement);return t===D||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(o=e);break}case"initialPlacement":o=w}if(b!==o)return{reset:{placement:o}}}return{}}}),this.shift&&u.push({name:"shift",options:o={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:r,placement:i,platform:s}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:h={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...p}=ii(o,e),u={x:t,y:r},f=await s.detectOverflow(e,p),g=id(is(i)),b=il(g),m=u[b],v=u[g];if(a){let e="y"===b?"top":"left",t="y"===b?"bottom":"right",o=m+f[e],r=m-f[t];m=r7(o,r6(m,r))}if(c){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",o=v+f[e],r=v-f[t];v=r7(o,r6(v,r))}let w=h.fn({...e,[b]:m,[g]:v});return{...w,data:{x:w.x-t,y:w.y-r,enabled:{[b]:a,[g]:c}}}}}),this.autoSize?u.push(sr({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&u.push({name:"arrow",options:a={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:o,placement:r,rects:i,platform:s,elements:c,middlewareData:h}=e,{element:p,padding:u=0}=ii(a,e)||{};if(null==p)return{};let f=iy(u),g={x:t,y:o},b=il(id(r)),m=ic(b),v=await s.getDimensions(p),w="y"===b,x=w?"clientHeight":"clientWidth",_=i.reference[m]+i.reference[b]-g[b]-i.floating[m],$=g[b]-i.reference[b],C=await (null==s.getOffsetParent?void 0:s.getOffsetParent(p)),P=C?C[x]:0;P&&await (null==s.isElement?void 0:s.isElement(C))||(P=c.floating[x]||i.floating[m]);let S=P/2-v[m]/2-1,A=r6(f[w?"top":"left"],S),E=r6(f[w?"bottom":"right"],S),O=P-v[m]-E,T=P/2-v[m]/2+(_/2-$/2),D=r7(A,r6(T,O)),M=!h.arrow&&null!=ia(r)&&T!==D&&i.reference[m]/2-(T<A?A:E)-v[m]/2<0,B=M?T<A?T-A:T-O:0;return{[b]:g[b]+B,data:{[b]:D,centerOffset:T-D-B,...M&&{alignmentOffset:B}},reset:M}}});let f="absolute"===this.strategy?e=>st.getOffsetParent(e,si):st.getOffsetParent;(r=this.anchorEl,i=this.popup,s={placement:this.placement,middleware:u,strategy:this.strategy,platform:o6(rs({},st),o9({getOffsetParent:f}))},c=new Map,p={...(h={platform:st,...s}).platform,_c:c},i_(r,i,{...h,platform:p})).then(({x:e,y:t,middlewareData:o,placement:r})=>{let i="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=o.arrow.x,t=o.arrow.y,r="",a="",c="",h="";if("start"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=i?o:"",h=i?"":o}else if("end"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=i?"":o,h=i?o:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof e?`${e}px`:"",r="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:r,right:a,bottom:c,left:h,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ew`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${rE({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${rE({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ew`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function sa(e,t){return new Promise(o=>{e.addEventListener(t,function r(i){i.target===e&&(e.removeEventListener(t,r),o())})})}function sl(e,t,o){return new Promise(r=>{if((null==o?void 0:o.duration)===1/0)throw Error("Promise-based animations must be finite.");let i=e.animate(t,o6(rs({},o),o9({duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:o.duration})));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function sc(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function sh(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}sn.styles=[rP,r4],rn([eL(".popup")],sn.prototype,"popup",2),rn([eL(".popup__arrow")],sn.prototype,"arrowEl",2),rn([eR()],sn.prototype,"anchor",2),rn([eR({type:Boolean,reflect:!0})],sn.prototype,"active",2),rn([eR({reflect:!0})],sn.prototype,"placement",2),rn([eR({reflect:!0})],sn.prototype,"strategy",2),rn([eR({type:Number})],sn.prototype,"distance",2),rn([eR({type:Number})],sn.prototype,"skidding",2),rn([eR({type:Boolean})],sn.prototype,"arrow",2),rn([eR({attribute:"arrow-placement"})],sn.prototype,"arrowPlacement",2),rn([eR({attribute:"arrow-padding",type:Number})],sn.prototype,"arrowPadding",2),rn([eR({type:Boolean})],sn.prototype,"flip",2),rn([eR({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],sn.prototype,"flipFallbackPlacements",2),rn([eR({attribute:"flip-fallback-strategy"})],sn.prototype,"flipFallbackStrategy",2),rn([eR({type:Object})],sn.prototype,"flipBoundary",2),rn([eR({attribute:"flip-padding",type:Number})],sn.prototype,"flipPadding",2),rn([eR({type:Boolean})],sn.prototype,"shift",2),rn([eR({type:Object})],sn.prototype,"shiftBoundary",2),rn([eR({attribute:"shift-padding",type:Number})],sn.prototype,"shiftPadding",2),rn([eR({attribute:"auto-size"})],sn.prototype,"autoSize",2),rn([eR()],sn.prototype,"sync",2),rn([eR({type:Object})],sn.prototype,"autoSizeBoundary",2),rn([eR({attribute:"auto-size-padding",type:Number})],sn.prototype,"autoSizePadding",2),rn([eR({attribute:"hover-bridge",type:Boolean})],sn.prototype,"hoverBridge",2);var sd=class extends rS{constructor(){super(),this.localize=new r$(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=sc(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=sc(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await sh(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:o}=r5(this,"tooltip.show",{dir:this.localize.dir()});await sl(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await sh(this.body);let{keyframes:e,options:o}=r5(this,"tooltip.hide",{dir:this.localize.dir()});await sl(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,sa(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,sa(this,"sl-after-hide")}render(){return ew`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${rE({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};sd.styles=[rP,r3],sd.dependencies={"sl-popup":sn},rn([eL("slot:not([name])")],sd.prototype,"defaultSlot",2),rn([eL(".tooltip__body")],sd.prototype,"body",2),rn([eL("sl-popup")],sd.prototype,"popup",2),rn([eR()],sd.prototype,"content",2),rn([eR()],sd.prototype,"placement",2),rn([eR({type:Boolean,reflect:!0})],sd.prototype,"disabled",2),rn([eR({type:Number})],sd.prototype,"distance",2),rn([eR({type:Boolean,reflect:!0})],sd.prototype,"open",2),rn([eR({type:Number})],sd.prototype,"skidding",2),rn([eR()],sd.prototype,"trigger",2),rn([eR({type:Boolean})],sd.prototype,"hoist",2),rn([rC("open",{waitUntilFirstUpdate:!0})],sd.prototype,"handleOpenChange",1),rn([rC(["content","distance","hoist","placement","skidding"])],sd.prototype,"handleOptionsChange",1),rn([rC("disabled")],sd.prototype,"handleDisabledChange",1),r2("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),r2("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),sd.define("sl-tooltip");var sp=Object.defineProperty,su=Object.getOwnPropertyDescriptor,sf=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?su(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&sp(t,o,s),s};r2("tooltip.show",null),r2("tooltip.hide",null);let sg=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.suppressed=!1,this.onMouseDown=e=>{this.suppressed=!0,this.hide()},this.onMouseUp=e=>{this.suppressed=!1},this.onDragStart=e=>{this.suppressed=!0,this.hide()},this.onDragEnd=e=>{this.suppressed=!1}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("dragstart",this.onDragStart,{capture:!0}),window.addEventListener("dragend",this.onDragEnd,{capture:!0})}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),this.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("dragstart",this.onDragStart,{capture:!0}),window.removeEventListener("dragend",this.onDragEnd,{capture:!0}),super.disconnectedCallback?.()}async hide(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.hide()}async show(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.show()}render(){var e;return ew`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled||this.suppressed}
			.distance=${this.distance??ek}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?r8(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};sg.styles=T`
		sl-tooltip {
			--max-width: var(--gl-tooltip-max-width, 320px);
			--hide-delay: 0ms;
			--show-delay: var(--gl-tooltip-show-delay, 500ms);
		}

		sl-tooltip::part(base__popup) {
			pointer-events: none;
		}

		sl-tooltip::part(body) {
			border: 1px solid var(--gl-tooltip-border-color);
			box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
		}

		sl-tooltip::part(base__arrow) {
			border: 1px solid var(--gl-tooltip-border-color);
			z-index: 1;
		}

		:host {
			text-transform: var(--gl-tooltip-text-transform, inherit);
		}

		:host([data-current-placement^='top']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='bottom']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-right-width: 0;
		}

		:host([data-current-placement^='left']) sl-tooltip::part(base__arrow) {
			border-bottom-width: 0;
			border-left-width: 0;
		}

		:host([data-current-placement^='right']) sl-tooltip::part(base__arrow) {
			border-top-width: 0;
			border-right-width: 0;
		}

		[slot='content'] hr {
			border: none;
			border-top: 1px solid var(--color-foreground--25);
		}
	`,sf([eR()],sg.prototype,"content",2),sf([eR({reflect:!0})],sg.prototype,"placement",2),sf([eR({type:Boolean})],sg.prototype,"disabled",2),sf([eR({type:Number})],sg.prototype,"distance",2),sf([eR({type:Boolean,attribute:"hide-on-click"})],sg.prototype,"hideOnClick",2),sf([eR({type:Boolean})],sg.prototype,"hoist",2),sf([eD()],sg.prototype,"suppressed",2),sg=sf([eO("gl-tooltip")],sg);var sb=Object.defineProperty,sm=Object.getOwnPropertyDescriptor,sv=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?sm(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&sb(t,o,s),s};let sy="gl-copy-container",sw=class extends lit_element_i{constructor(){super(...arguments),this.copyLabel="Copy",this.copiedLabel="Copied",this.disabled=!1,this.placement="top",this.timeout=1e3,this.onFocusIn=()=>{this.tooltip?.show()},this.onFocusOut=()=>{this.tooltip?.hide()}}connectedCallback(){super.connectedCallback?.(),this.label=this.copyLabel,this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut)}disconnectedCallback(){this.cancelResetTimer(),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut),super.disconnectedCallback?.()}render(){return this.content||this.disabled?ew`<gl-tooltip
			tabindex="0"
			.content="${this.label}"
			placement="${this.placement??ek}"
			@click=${this.onClick}
			@keydown=${this.onKeydown}
		>
			<slot></slot>
		</gl-tooltip>`:ek}async onClick(e){if(this.cancelResetTimer(),this.content)try{await navigator.clipboard.writeText(this.content),this.label=this.copiedLabel}catch{this.label="Unable to Copy"}else this.label="Nothing to Copy";this.createResetTimer()}onKeydown(e){("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onClick(e))}cancelResetTimer(){null!=this._resetTimer&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}createResetTimer(){this._resetTimer=setTimeout(()=>{this._resetTimer=void 0,this.label=this.copyLabel},this.timeout)}};sw.tagName=sy,sw.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sw.styles=T`
		:host {
			display: inline-block;
		}

		gl-tooltip {
			cursor: pointer;
		}

		gl-tooltip:focus {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: 2px;
		}

		/* Hide focus outline on slotted copy icon - we show it on the host instead */
		::slotted(.copy-icon) {
			outline: none !important;
		}

		:host([appearance='toolbar']) {
			--copy-background: transparent;
			--copy-foreground: var(--vscode-foreground);
			--copy-hover-background: var(--vscode-toolbar-hoverBackground);
			--copy-border: transparent;
			--copy-border-radius: var(--gk-action-radius, 0.3rem);
			--copy-padding: 0.4rem;

			border: 1px solid var(--copy-border);
			border-radius: var(--copy-border-radius);
			background: var(--copy-background);
			color: var(--copy-foreground);
		}

		:host([appearance='toolbar']:hover) {
			background: var(--copy-hover-background);
		}

		:host([appearance='toolbar']:focus-within) {
			outline: 1px solid var(--color-focus-border);
			outline-offset: -1px;
		}

		:host([appearance='toolbar']) gl-tooltip {
			padding: var(--copy-padding);
			display: flex;
			align-items: center;
			justify-content: center;
			min-height: 1.8rem;
			box-sizing: border-box;
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}
	`,sv([eR({reflect:!0})],sw.prototype,"appearance",2),sv([eR({reflect:!1})],sw.prototype,"content",2),sv([eR()],sw.prototype,"copyLabel",2),sv([eR()],sw.prototype,"copiedLabel",2),sv([eR({type:Boolean,reflect:!0})],sw.prototype,"disabled",2),sv([eR()],sw.prototype,"placement",2),sv([eR({type:Number})],sw.prototype,"timeout",2),sv([eD()],sw.prototype,"label",2),sv([eL("gl-tooltip")],sw.prototype,"tooltip",2),sw=sv([eO(sy)],sw);var sx=Object.defineProperty,sk=Object.getOwnPropertyDescriptor,s_=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?sk(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&sx(t,o,s),s};let s$=T`
	:host {
		display: inline-flex;
		align-items: baseline;
		max-width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-inline-end: 0.2rem;
	}

	:host(:focus) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 2px;
	}

	.label--uncommitted {
		cursor: default;
	}

	.icon {
		margin-right: 0.3rem;
		align-self: center;
	}
`,sC=class extends lit_element_i{constructor(){super(...arguments),this.size=12}get label(){return eZ(this.sha,{strings:{uncommitted:"Working",uncommittedStaged:"Staged",working:"Working"}})}render(){return null==this.sha?ek:!this.sha||eG(this.sha)?ew`<span part="label" class="label--uncommitted">${this.label}</span>`:ew`<code-icon part="icon" class="icon" icon="git-commit" size="${this.size}"></code-icon
			><span part="label">${this.label}</span>`}};sC.styles=s$,s_([eR({type:String})],sC.prototype,"sha",2),s_([eR({type:Number})],sC.prototype,"size",2),sC=s_([eO("gl-commit-sha")],sC);let sP=class extends lit_element_i{constructor(){super(...arguments),this.size=12}render(){return null==this.sha?ek:ew`<gl-copy-container .content=${this.sha} placement="top">
			<gl-commit-sha exportparts="icon, label" .sha=${this.sha} .size=${this.size}></gl-commit-sha>
		</gl-copy-container>`}};sP.styles=s$,s_([eR({type:String})],sP.prototype,"sha",2),s_([eR({type:Number})],sP.prototype,"size",2),sP=s_([eO("gl-commit-sha-copy")],sP);let sS=T`
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: auto;
		position: absolute;
		top: 5%;
		bottom: 45%;
		left: 0;
		right: 0;
	}

	::slotted(p) {
		padding-top: 1rem;
		color: var(--color-foreground--75);
		font-size: 1.4rem;
	}

	.watermark {
		width: 12rem;
		height: 12rem;
		fill: color-mix(in srgb, var(--color-foreground) 15%, var(--color-background));
		transform-origin: center;
	}
`,sA=T`
	@keyframes pulse {
		0% {
			transform: scale(0.9);
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(0.9);
		}
	}

	.watermark--pulse .watermark-path {
		transform: scale(0.9);
		animation: pulse 1.8s ease-in-out infinite;
		transform-origin: center;
	}

	/* Stagger the pulse animation for a wave effect on all paths */
	/* Targeting all paths using their order within the SVG */
	.watermark-path:nth-of-type(1) {
		/* Target the outer circle path */
		animation-delay: 0.2s;
	}

	.watermark-path:nth-of-type(2) {
		/* Target the connection path */
		animation-delay: 0.4s;
	}

	.watermark-path:nth-of-type(3) {
		/* Target the first dot path */
		animation-delay: 0.1s;
	}

	.watermark-path:nth-of-type(4) {
		/* Target the second dot path */
		animation-delay: 0.1s;
	}

	.watermark-path:nth-of-type(5) {
		/* Target the third dot path */
		animation-delay: 0.1s;
	}
`;var sE=Object.defineProperty,sz=Object.getOwnPropertyDescriptor,sO=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?sz(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&sE(t,o,s),s};let sT=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ew`<div class="container">
			<svg
				class="watermark${this.pulse?" watermark--pulse":""}"
				viewBox="0 0 28 28"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					class="watermark-path"
					d="M14 3.25C12.5883 3.25 11.1904 3.52806 9.88615 4.0683C8.5819 4.60853 7.39683 5.40037 6.3986 6.3986C5.40037 7.39683 4.60853 8.5819 4.06829 9.88615C3.52806 11.1904 3.25 12.5883 3.25 14C3.25 15.4117 3.52806 16.8096 4.06829 18.1138C4.60853 19.4181 5.40037 20.6032 6.3986 21.6014C7.39683 22.5996 8.5819 23.3915 9.88615 23.9317C11.1904 24.4719 12.5883 24.75 14 24.75C16.8511 24.75 19.5854 23.6174 21.6014 21.6014C23.6174 19.5854 24.75 16.8511 24.75 14C24.75 11.1489 23.6174 8.41462 21.6014 6.3986C19.5854 4.38259 16.8511 3.25 14 3.25ZM2 14C2 10.8174 3.26428 7.76516 5.51472 5.51472C7.76516 3.26428 10.8174 2 14 2C17.1826 2 20.2348 3.26428 22.4853 5.51472C24.7357 7.76516 26 10.8174 26 14C26 17.1826 24.7357 20.2348 22.4853 22.4853C20.2348 24.7357 17.1826 26 14 26C10.8174 26 7.76516 24.7357 5.51472 22.4853C3.26428 20.2348 2 17.1826 2 14Z"
				/>
				<path class="watermark-path" d="M18 15L11.5 8.5L12.5 7.5L19 14L18 15ZM11.5 20V8H13V20H11.5Z" />
				<path
					class="watermark-path"
					d="M12.25 10.5C12.8467 10.5 13.419 10.2629 13.841 9.84099C14.2629 9.41903 14.5 8.84674 14.5 8.25C14.5 7.65326 14.2629 7.08097 13.841 6.65901C13.419 6.23705 12.8467 6 12.25 6C11.6533 6 11.081 6.23705 10.659 6.65901C10.2371 7.08097 10 7.65326 10 8.25C10 8.84674 10.2371 9.41903 10.659 9.84099C11.081 10.2629 11.6533 10.5 12.25 10.5Z"
				/>
				<path
					class="watermark-path"
					d="M18.25 16.5C18.5455 16.5 18.8381 16.4418 19.111 16.3287C19.384 16.2157 19.6321 16.0499 19.841 15.841C20.0499 15.6321 20.2157 15.384 20.3287 15.111C20.4418 14.8381 20.5 14.5455 20.5 14.25C20.5 13.9545 20.4418 13.6619 20.3287 13.389C20.2157 13.116 20.0499 12.8679 19.841 12.659C19.6321 12.4501 19.384 12.2843 19.111 12.1713C18.8381 12.0582 18.5455 12 18.25 12C17.6533 12 17.081 12.2371 16.659 12.659C16.2371 13.081 16 13.6533 16 14.25C16 14.8467 16.2371 15.419 16.659 15.841C17.081 16.2629 17.6533 16.5 18.25 16.5Z"
				/>
				<path
					class="watermark-path"
					d="M12.25 22C12.8467 22 13.419 21.7629 13.841 21.341C14.2629 20.919 14.5 20.3467 14.5 19.75C14.5 19.1533 14.2629 18.581 13.841 18.159C13.419 17.7371 12.8467 17.5 12.25 17.5C11.6533 17.5 11.081 17.7371 10.659 18.159C10.2371 18.581 10 19.1533 10 19.75C10 20.3467 10.2371 20.919 10.659 21.341C11.081 21.7629 11.6533 22 12.25 22Z"
				/>
			</svg>
			<slot></slot>
		</div>`}};sT.styles=[sS,sA],sO([eR({type:Boolean})],sT.prototype,"pulse",2),sT=sO([eO("gl-watermark-loader")],sT);var sR=Object.defineProperty,sD=Object.getOwnPropertyDescriptor,sI=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?sD(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&sR(t,o,s),s};let sL="gl-timeline-chart",sM=class extends GlElement{constructor(){super(...arguments),this._slices=new Map,this._slicesByIndex=new Map,this._commitsByTimestamp=new Map,this.placement="editor",this.sliceBy="author",this._data=null,this._shiftKeyPressed=!1,this.onDataPointClicked=e7((e,t)=>{let o=e.x,r=o instanceof Date?o:new Date(o),i=this._commitsByTimestamp.get(r.getTime())?.sha;null!=i&&(this._shaHovered=void 0,this._shaSelected=i,this.slider?.select(i),this.emit("gl-commit-select",{id:i,shift:this._shiftKeyPressed}))},50),this.onDataPointHovered=(e,t)=>{let o=e.x,r=o instanceof Date?o:new Date(o),i=this._commitsByTimestamp.get(r.getTime())?.sha;this._shaHovered=i},this.onDataPointUnhovered=(e,t)=>{if(this._shaHovered=void 0,this._shaSelected){let e=this._data?.find(e=>e.sha===this._shaSelected)?.date;null!=e&&this.selectDataPoint(new Date(e))}},this.onDocumentKeyDown=e=>{this._shiftKeyPressed=e.shiftKey,("Escape"===e.key||"Esc"===e.key)&&this.resetZoom()},this.onDocumentKeyUp=e=>{this._shiftKeyPressed=e.shiftKey},this.onResize=e=>{this._chart&&this.updateChartSize(e.detail.entries[0].contentRect)},this.onZoom=e=>{this.zoomedRange=e[0]<=this.range[0]&&e[1]>=this.range[1]?void 0:e}}get compact(){return"editor"!==this.placement}get data(){return this._data}get dataPromise(){return this._dataPromise}set dataPromise(e){this._dataPromise!==e&&(this._dataPromise=e,this._dataPromise?.then(e=>{this._data=e,this._dataReversed=e.toReversed()},()=>this._data=void 0))}get range(){return this._range}set range(e){this._range=e,this._rangeScrollable=[e[0].getTime()-144e5,e[1].getTime()+432e5],this.resetZoom()}get zoomedRange(){return this._zoomedRange}set zoomedRange(e){this._zoomedRange=e,this._zoomedRangeScrollable=e?[e[0].getTime(),e[1].getTime()]:void 0}get zoomed(){return null!=this._zoomedRange}connectedCallback(){super.connectedCallback?.(),document.addEventListener("keydown",this.onDocumentKeyDown),document.addEventListener("keyup",this.onDocumentKeyUp)}disconnectedCallback(){document.removeEventListener("keydown",this.onDocumentKeyDown),document.removeEventListener("keyup",this.onDocumentKeyUp),this._loading?.cancel(),this._chart?.destroy(),this._chart=void 0,super.disconnectedCallback?.()}update(e){(e.has("dataPromise")||null==this.dataPromise)&&this.updateChart(),super.update(e)}updateChart(){if(!this._loading?.pending){let e;this._loading=((e={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0}).promise=new Promise((t,o)=>{e.fulfill=function(o){e.pending=!1,t(o)},e.cancel=function(t){e.pending=!1,null!=t?o(t):o()}}),e),this._loading.promise.finally(()=>this._loading=void 0),this.emit("gl-loading",this._loading.promise)}null!=this.dataPromise&&(this._chartAborter?.abort(),this._chartAborter=new AbortController,this.renderChart(this.dataPromise,this._loading,this._chartAborter.signal))}render(){return ew`${this.renderNotice()}
			<gl-chart-scroller
				.range=${this._rangeScrollable}
				.visibleRange=${this._zoomedRangeScrollable}
				@gl-scroll=${this.onScroll}
				@gl-scroll-start=${this.onScrollStart}
				@gl-scroll-end=${this.onScrollEnd}
			>
				<sl-resize-observer @sl-resize=${this.onResize}>
					<div id="chart" tabindex="-1"></div>
				</sl-resize-observer>
				${this.data?.length?this.renderFooter():ek}
			</gl-chart-scroller>`}renderNotice(){return this._loading?.pending||null==this.data?ew`<div class="notice notice--blur">
				<gl-watermark-loader pulse><p>Loading...</p></gl-watermark-loader>
			</div>`:this.data.length?ek:ew`<div class="notice">
				<gl-watermark-loader><slot name="empty"></slot></gl-watermark-loader>
			</div>`}renderFooter(){let e=this._shaHovered??this._shaSelected;return ew`<footer>
			<gl-chart-slider
				.data=${this._dataReversed}
				?shift=${this._shiftKeyPressed}
				@gl-slider-change=${this.onSliderChanged}
				@mouseover=${this.onSliderMouseOver}
				@mouseout=${this.onSliderMouseOut}
			></gl-chart-slider>
			<span @mouseover=${this.onFooterShaMouseOver} @mouseout=${this.onFooterShaMouseOut}
				><gl-commit-sha-copy .sha=${e} .size=${16}></gl-commit-sha-copy
			></span>
			${this.renderActions()}
		</footer>`}renderActions(){return ew`<div class="actions">
			${this.zoomed?ew`<gl-button
						appearance="toolbar"
						@click=${e=>e.shiftKey||e.altKey?this.resetZoom():this.zoom(-1)}
						aria-label="Zoom Out"
					>
						<code-icon icon="zoom-out"></code-icon>
						<span slot="tooltip">Zoom Out<br />[Alt] Reset Zoom</span>
					</gl-button>`:ek}
			<gl-button appearance="toolbar" @click=${()=>this.zoom(.5)} tooltip="Zoom In" aria-label="Zoom In">
				<code-icon icon="zoom-in"></code-icon>
			</gl-button>
		</div>`}onFooterShaMouseOver(){this._shaSelected&&this.showTooltip(this._data?.find(e=>e.sha===this._shaSelected))}onFooterShaMouseOut(){this.hideTooltip()}onScrollStart(){this._chart&&this.zoomed&&(this._transitionDuration=this._chart?.config("transition.duration"),this._chart?.config("transition.duration",0))}onScrollEnd(){this._chart&&this.zoomed&&this._chart?.config("transition.duration",this._transitionDuration)}onScroll(e){if(!this._chart||!this.zoomed)return;let t=[new Date(e.detail.range[0]),new Date(e.detail.range[1])];this._chart.zoom(t)}onSliderChanged(e){this.revealDate(e.detail.date,{focus:!0,select:!0});let t=this._commitsByTimestamp.get(e.detail.date.getTime()),o=t?.sha;this._shaHovered=void 0,this._shaSelected=o,this.showTooltip(t),null!=o&&this.emit("gl-commit-select",{id:o,shift:e.detail.shift})}onSliderMouseOver(e){this.showTooltip(this.slider?.value)}onSliderMouseOut(e){this.hideTooltip()}resetZoom(){this.zoomedRange=void 0,this._chart?.unzoom()}revealDate(e,t){let o,r;if(!this._chart||(this.selectDataPoint(e,t),!this.zoomedRange))return;let i=this.zoomedRange,s=i[1].getTime()-i[0].getTime();if(e<i[0])r=new Date((o=new Date(e.getTime()-.2*s)).getTime()+s),o<=this.range[0]&&(r=new Date((o=e2(this.range[0],{hours:-12})).getTime()+s));else{if(!(e>i[1]))return;o=new Date((r=new Date(e.getTime()+.2*s)).getTime()-s),r>=this.range[1]&&(o=new Date((r=e2(this.range[1],{hours:12})).getTime()-s))}this._chart.zoom([o,r])}selectDataPoint(e,t){let o=this.getInternalChart();if(null==o)return;let r=this.getDataPoint(e);if(null==r)return;t?.focus&&o.showGridFocus([r]);let{index:i}=r;if(null!=i&&(this._chart?.$.main.selectAll(`.bb-chart-circles .bb-shape-${i}`).each(()=>o.setExpand?.(i,null,!0)),t?.select)){let t=this._commitsByTimestamp.get(e.getTime())?.sha;this._shaHovered=void 0,this._shaSelected=t,null!=t&&this.slider?.select(t)}}showTooltip(e){null!=e&&this._chart?.tooltip.show({x:new Date(e.date)})}hideTooltip(){this._chart?.tooltip.hide()}zoom(e){if(0===e)return void this.resetZoom();if(!this._chart)return;let t=this._chart.zoom(),o=[t[0].getTime(),t[1].getTime()],r=o[1]-o[0],i=new Date((o[1]+o[0])/2),s=i.getTime()-r*(1-e)/2,a=i.getTime()+r*(1-e)/2;if(a-s<(this.range[1].getTime()-this.range[0].getTime())/40)return;let c=this._chart.zoom([new Date(s),new Date(a)]);e<0&&c[0].getTime()===o[0]&&c[1].getTime()===o[1]&&this.resetZoom()}calculateBubbleSize(e,{minRadius:t,maxRadius:o,q1:r,q3:i,maxChanges:s}){let a;return 0===e?t:(a=e<=r?t+e/r*10:e<=i?t+10+(e-r)/(i-r)*15:t+25+Math.log(e-i+1)/Math.log(s-i+1)*15,Math.max(t,Math.min(o,a)))}calculateChangeMetrics(e){let t=e.map(e=>(e.additions??0)+(e.deletions??0)).sort((e,t)=>e-t);return{maxChanges:t.at(-1),q1:t[Math.floor(.25*t.length)],q3:t[Math.floor(.75*t.length)]}}getDataPoint(e){let t=e instanceof Date?e.getTime():new Date(e).getTime();return this._chart?.data()[0]?.values.find(e=>("number"==typeof e.x?e.x:e.x.getTime())===t)}getInternalChart(){try{let e=this._chart?.internal;return this._chart,e}catch{return}}getOnRenderedCallback(e){return function(){let t=this;null!=t&&t.$.main.selectAll(".bb-axis-y .tick text tspan").each(function(o){if(this==null)return;let r=e._slicesByIndex.get(-o.index),i=t.color(r);e.compact&&this.setAttribute("fill",i);let s=document.createElementNS("http://www.w3.org/2000/svg","title");s.textContent=r,this.appendChild(s)})}}prepareChartData(e,t){let o=e.length+1,r=Array(o);r[0]="time";let i=Array(o);i[0]="additions";let s=Array(o);s[0]="deletions";let a={time:"x",additions:"y2",deletions:"y2"},c={additions:"bar",deletions:"bar"},h={additions:"time",deletions:"time"};this._slices.clear(),this._slicesByIndex.clear();let p=0,u=(e,t,o)=>{let r=this._slices.get(e);null==r?(r={x:[`time.${e}`,t],y:p,z:new Map([[t,o]])},this._slices.set(e,r),this._slicesByIndex.set(p,e),a[e]="y",c[e]="scatter",h[e]=`time.${e}`,p--):(r.x.push(t),r.z.set(t,o))},f=0;for(let o of e){let{author:e,date:a,additions:c=0,deletions:h=0,branches:p}=o;this._commitsByTimestamp.set(new Date(a).getTime(),o),r[++f]=a,i[f]=c,s[f]=h;let g=this.calculateBubbleSize(c+h,t);if("branch"===this.sliceBy)for(let e of p?.length?p:[this.head??"HEAD"])u(e,a,g);else u(e,a,g)}let g=[r,i,s];for(let[e,t]of this._slices){g.push(t.x);let o=Array(t.x.length).fill(t.y);o[0]=e,g.push(o)}return{axes:a,columns:g,names:{additions:"Additions",deletions:"Deletions"},types:c,xs:h}}async renderChart(o,r,i){let s=await o;if(i.aborted)return void r?.cancel();this._slices.clear(),this._slicesByIndex.clear(),this._commitsByTimestamp.clear();let a={minRadius:6,maxRadius:50,...this.calculateChangeMetrics(s)},{bb:c,bar:h,scatter:p,selection:u,zoom:f}=await C.e(162).then(C.bind(C,5973));if(i.aborted)return void r?.cancel();this.range=s.length?[new Date(s.at(-1).date),new Date(s[0].date)]:[new Date,new Date],h(),p();let g=this.prepareChartData(s,a);try{let o=-(this._slices.size+1),i=[...this._slicesByIndex.keys()];if(null==this._chart){let a={bindto:this.chartContainer,onafterinit:()=>{this.updateChartSize(),setTimeout(()=>r?.fulfill(),0)},onrendered:this.getOnRenderedCallback(this),clipPath:!0,data:{...g,colors:{additions:"rgba(73, 190, 71, 1)",deletions:"rgba(195, 32, 45, 1)"},groups:[["additions","deletions"]],selection:{enabled:u(),draggable:!1,grouped:!0,multiple:!1,isselectable:()=>!1},onclick:this.onDataPointClicked,onover:this.onDataPointHovered,onout:this.onDataPointUnhovered},axis:{x:{type:"timeseries",localtime:!0,height:this.compact?28:void 0,forceAsSingle:!0,tick:{fit:!1,format:e=>"number"==typeof e?e:e5(e,this.shortDateFormat??"short"),outer:!0}},y:{max:0,min:o,padding:{top:75,bottom:75},tick:{format:e=>this.compact?"branch"===this.sliceBy?"":"":function(e,t="…"){if(!e)return e;let o=null==e||0===e.length?0:(0,tw.A)(e,tA,tE).width;return o<=30?e:`${e.slice(0,Math.floor(15)-1)}${t}${e.slice(o-Math.ceil(15))}`}(this._slicesByIndex.get(e)??""),outer:!0,values:i}},y2:{padding:this.compact?{top:0,bottom:0}:void 0,label:this.compact?void 0:{text:"Lines changed",position:"outer-middle"},show:!0,tick:{format:e=>this.compact?"":e,outer:!0}}},bar:{width:2,sensitivity:4,padding:2},scatter:{zerobased:!0},grid:{focus:{edge:!0,show:!0,y:!0},front:!1,lines:{front:!1},x:{show:!1},y:{show:!0}},legend:{show:!0,hide:["additions","deletions"],padding:4,item:{tile:{type:"circle",r:5},interaction:{dblclick:!0}},tooltip:!0},point:{r:e=>null==e||"function"==typeof e.data&&(e=e.data()[0],null==e)?0:null!=e.r?e.r:Math.max(6,this._slices.get(e.id)?.z.get(e.x.toISOString())??6),focus:{expand:{enabled:!0}},select:{r:6}},resize:{auto:!1},tooltip:{contents:(o,r,i,s)=>{var a;let c=o[0],h=new Date(c.x),p=this._commitsByTimestamp.get(h.getTime());if(null==p)return"";if(""===p.sha)return`<div class="bb-tooltip">
									<div class="author">Working Tree</div>
									<div class="message"><span class="message__content">No uncommitted changes</span></div>
								</div>`;let u=p.additions,f=p.deletions,g=null==u?"":`<span class="additions">+${tz("line",u)}</span>`,b=null==f?"":`<span class="deletions">-${tz("line",f)}</span>`;g&&(b=`, ${b}`);let m=p.branches?.length?`<div class="branches"><span class="icon">\uEA68</span> ${p.branches.join(", ")}</div>`:"";return`<div class="bb-tooltip">
									<div class="author">${p.author}</div>
									<div>
										<span class="sha"><span class="icon">\uEAFC</span> ${eZ(p.sha)}</span>
										<span class="changes">${g}${b}</span>
									</div>
									<div class="date">
										<span class="icon">\uEA82</span><span class="date--relative">${(a=function(o){let r=("number"==typeof o?o:o.getTime())-Date.now();for(let[o,i,s,a]of eQ)if(Math.abs(r)>=i||1e3===i)return(t??=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"auto",style:"long"})).format(Math.trunc(r/s),o);return""}(h)).charAt(0).toUpperCase()+a.slice(1)}</span><span class="date--absolute">(${e5(h,this.dateFormat)})</span>
									</div>
									${m}
									<div class="message"><span class="message__content">${p.message}</span></div>
								</div>`},show:!0},zoom:{enabled:f(),type:"wheel",extent:[1,40],onzoom:this.onZoom,onzoomend:this.onZoom}};this._chart=c.generate(a);let h=s[0];this._shaHovered=void 0,this._shaSelected=h?.sha,null!=h&&this.selectDataPoint(new Date(h.date),{select:!0})}else this._chart.config("axis.y.tick.values",i,!1),this._chart.config("axis.y.min",o,!1),this._chart.load({...g,resizeAfter:!0,unload:!0,done:()=>{let e;null!=this._shaSelected&&(e=s.find(e=>e.sha===this._shaSelected)),null==e&&(e=s[0],this._shaHovered=void 0,this._shaSelected=e?.sha),null!=e&&this.selectDataPoint(new Date(e.date),{select:!0}),setTimeout(()=>r?.fulfill(),0)}});return void await r.promise.catch(()=>{})}catch(e){r?.cancel()}}updateChartSize(e){(e??=this.chartContainer.getBoundingClientRect()).width>0&&e.height>0&&requestAnimationFrame(()=>{this._chart.resize({width:e.width,height:e.height}),this.updateScrollerTrackPosition()})}updateScrollerTrackPosition(){let e=this.shadowRoot?.querySelector(".bb-axis.bb-axis-x");if(null==e)return;let t=e.getBoundingClientRect(),o=this.chartContainer.getBoundingClientRect();this.style.setProperty("--scroller-track-top",`${t.top-(o.top-1)}px`),this.style.setProperty("--scroller-track-left",`${t.left+2}px`),this.style.setProperty("--scroller-track-width",`${t.width-2}px`)}};sM.tagName=sL,sM.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sM.styles=[o5],sI([eL("#chart")],sM.prototype,"chartContainer",2),sI([eL(rB.tagName)],sM.prototype,"slider",2),sI([eD()],sM.prototype,"_loading",2),sI([eR()],sM.prototype,"placement",2),sI([eR()],sM.prototype,"dateFormat",2),sI([eR({type:String})],sM.prototype,"head",2),sI([eR({type:Object})],sM.prototype,"scope",2),sI([eR()],sM.prototype,"shortDateFormat",2),sI([eR()],sM.prototype,"sliceBy",2),sI([eD()],sM.prototype,"_data",2),sI([eR({type:Object})],sM.prototype,"dataPromise",1),sI([eD()],sM.prototype,"_shaHovered",2),sI([eD()],sM.prototype,"_shaSelected",2),sI([eD()],sM.prototype,"_shiftKeyPressed",2),sI([eD()],sM.prototype,"_zoomedRange",2),sI([eR({type:Boolean,reflect:!0})],sM.prototype,"zoomed",1),sI([oS({args:e=>({dataset:e?.length})})],sM.prototype,"prepareChartData",1),sI([oS({args:!1})],sM.prototype,"renderChart",1),sM=sI([eO(sL)],sM);let sB=T`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;T`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${sB}
	}
`;let sF=T`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,sN=T`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,sj=T`
	:focus-visible {
		${sF}
	}
`;var sU=Object.defineProperty,sq=Object.getOwnPropertyDescriptor,sH=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?sq(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&sU(t,o,s),s};let sV=class extends lit_element_i{render(){return ew`<slot></slot>`}};sV.styles=T`
		* {
			box-sizing: border-box;
		}

		:host {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			gap: 0.4rem;
			overflow: hidden;
			font-size: var(--vscode-font-size);
			color: var(--vscode-foreground);
			width: 100%;
		}

		::slotted(gl-breadcrumb-item:not(:last-of-type))::after {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
			position: relative;
			left: -0.6rem;
			margin-right: -0.6rem;
			transition:
				left 0.3s cubic-bezier(0.25, 1, 0.5, 1),
				margin-right 0.3s cubic-bezier(0.25, 1, 0.5, 1);
		}

		::slotted(gl-breadcrumb-item[collapsed]:not(:hover):not(:focus-within):not(:last-of-type))::after {
			left: -1.2rem;
			margin-right: -1.2rem;
		}

		::slotted(:last-child:not(gl-breadcrumb-item:last-of-type)) {
			margin-left: 1rem;
		}
	`,sV=sH([eO("gl-breadcrumbs")],sV);let sW=class extends lit_element_i{constructor(){super(...arguments),this.collapsibleState="none",this._shrink=1,this.onToggleCollapse=e=>{e.preventDefault(),e.stopPropagation(),e instanceof KeyboardEvent&&"Enter"!==e.key&&" "!==e.key||(this.collapsed=!this.collapsed)}}get collapsed(){return this._collapsed??"collapsed"===this.collapsibleState}set collapsed(e){this._collapsed=e}get collapsible(){return"none"!==this.collapsibleState}get shrink(){return this._shrink}set shrink(e){let t=this._shrink;this._shrink=e,this.style.setProperty("--gl-breadcrumb-item-shrink",String(e)),this.requestUpdate("shrink",t)}render(){let{collapsed:e,collapsible:t}=this;return ew`<div class=${rE({"breadcrumb-item":!0,collapsible:t})}>
			<span class="breadcrumb-content">
				${this.renderIcon(t,e)}
				<slot class="breadcrumb-label"></slot>
			</span>
			<slot name="children"></slot>
		</div>`}renderIcon(e,t){return this.icon?e||this.iconTooltip?ew`<gl-tooltip
			content="${e?t?"Click to Expand":"Click to Collapse":this.iconTooltip}"
			placement="bottom"
		>
			<code-icon
				class="breadcrumb-icon"
				icon="${this.icon}"
				tabindex="0"
				@click=${e?this.onToggleCollapse:void 0}
				@keyup=${e?this.onToggleCollapse:void 0}
			></code-icon>
		</gl-tooltip>`:ew`<code-icon class="breadcrumb-icon" icon="${this.icon}"></code-icon>`:ek}};sW.styles=[sj,T`
			* {
				box-sizing: border-box;
			}

			:host {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				flex-shrink: var(--gl-breadcrumb-item-shrink, 1);
			}

			:host([icon]) {
				min-width: calc(24px + 0.6rem);
			}

			:host(:hover),
			:host(:focus-within) {
				flex-shrink: 0;
			}

			.breadcrumb-item {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				white-space: nowrap;
				overflow: hidden;
				min-width: 0;
				width: 100%;
				cursor: default;
			}

			.breadcrumb-content {
				display: inline-flex;
				align-items: center;
				gap: 0.6rem;
				vertical-align: middle;
				max-width: 100%;
			}

			.breadcrumb-icon {
				flex-shrink: 0;
				z-index: 2;
			}

			.collapsible .breadcrumb-icon {
				cursor: pointer;
			}

			.breadcrumb-label {
				display: inline-block;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			.breadcrumb-tooltip {
				display: inline-flex;
				align-items: center;
				vertical-align: middle;
			}

			slot[name='children'] {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 0.4rem;
				overflow: hidden;
				max-width: 100vw;
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			}

			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) .breadcrumb-label,
			:host([collapsed]) .breadcrumb-item:not(:hover):not(:focus-within) slot[name='children'] {
				max-width: 0;
			}
		`],sH([eD()],sW.prototype,"_collapsed",2),sH([eR({type:Boolean,reflect:!0})],sW.prototype,"collapsed",1),sH([eR({type:String})],sW.prototype,"collapsibleState",2),sH([eR()],sW.prototype,"icon",2),sH([eR()],sW.prototype,"iconTooltip",2),sH([eR({type:Number})],sW.prototype,"shrink",1),sW=sH([eO("gl-breadcrumb-item")],sW);let sG=class extends lit_element_i{render(){return ew`<slot></slot>`}};sG.styles=T`
		:host {
			display: flex;
			flex-direction: row;
			align-items: center;
			white-space: nowrap;
			overflow: hidden;
			margin-right: 0.6rem;
		}

		:host::before {
			content: '\\eab6'; /* chevron-right codicon */
			font-family: codicon;
			font-size: 12px;
			width: 12px;
			height: 12px;
			opacity: 0.6;
			margin-right: 0.4rem;
			display: flex;
			flex-shrink: 0;
			align-items: center;
			justify-content: center;
		}

		.breadcrumb-label {
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`,sG=sH([eO("gl-breadcrumb-item-child")],sG);let sK=T`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;T`
	* {
		box-sizing: border-box;
	}
`;let sZ=T`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${sF}
	}
	a:hover {
		text-decoration: underline;
	}
`,sY=T`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}

	:host-context(.preload) .scrollable {
		transition: none;
	}
`;T`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;var sX=Object.defineProperty,sJ=Object.getOwnPropertyDescriptor,sQ=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?sJ(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&sX(t,o,s),s};let s0=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ew`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??ek}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ew`<gl-tooltip placement=${this.tooltipPlacement??ek}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ew`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??ek}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ew`<button
			class="control"
			role=${this.role??ek}
			aria-checked=${this.ariaChecked??ek}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};s0.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},s0.styles=[sK,T`
			:host {
				/* Base color variables - can be overridden by variant */
				--button-foreground: var(--vscode-button-foreground);
				--button-background: var(--vscode-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-border: var(--vscode-button-border, transparent);

				/* Layout variables */
				--button-width: max-content;
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;

				display: inline-block;
				width: var(--button-width);
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius, 0.3rem);
				-webkit-font-smoothing: auto;
			}

			.control {
				box-sizing: border-box;
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: var(--button-gap);
				padding: var(--button-padding);
				line-height: var(--button-line-height);
				font-family: inherit;
				font-size: inherit;

				color: inherit;
				text-decoration: none;

				width: var(--button-width);
				max-width: 100%;
				height: 100%;
				cursor: pointer;
			}

			/* When truncate is enabled, allow the control to shrink */
			:host([truncate]) .control {
				min-width: 0;
			}

			button.control {
				appearance: none;
				background: transparent;
				border: none;
			}

			.control:focus {
				outline: none;
			}

			.label {
				display: inline-flex;
				align-items: center;
				max-width: 100%;
			}

			/* Text truncation option - enabled via truncate attribute */
			:host([truncate]) .label {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block; /* Change from flex to block for ellipsis to work */
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus-within) {
				${sN}
			}

			:host([appearance='input']),
			:host([role='checkbox']:focus-within),
			:host([aria-checked]:focus-within) {
				outline-offset: -1px;
			}

			:host([full]),
			:host([full]) .control {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='input']),
			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-alert-infoForeground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host([appearance='alert']:hover) {
				--button-foreground: var(--vscode-button-foreground);
			}

			/* Variant property for semantic states - appearance controls structure, variant controls color */

			/* Solid buttons (default and secondary) with variants get full color treatment */
			:host([variant='danger']) {
				--button-foreground: var(--vscode-errorForeground, #f48771);
				--button-background: var(--vscode-inputValidation-errorBackground, #5a1d1d);
				--button-hover-background: color-mix(
					in srgb,
					#000 30%,
					var(--vscode-inputValidation-errorBorder, #be1100)
				);
				--button-border: var(--vscode-inputValidation-errorBorder, #be1100);
			}

			:host([variant='warning']) {
				--button-foreground: #fff;
				--button-background: var(
					--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
					#cc6600
				);
				--button-hover-background: color-mix(
					in srgb,
					#000 20%,
					var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor, #cc6600)
				);
				--button-border: var(
					--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
					#cc6600
				);
			}

			:host([variant='success']) {
				--button-foreground: #fff;
				--button-background: color-mix(in srgb, #000 40%, var(--vscode-testing-iconPassed, #73c991));
				--button-hover-background: color-mix(in srgb, #000 30%, var(--vscode-testing-iconPassed, #73c991));
				--button-border: color-mix(in srgb, #000 40%, var(--vscode-testing-iconPassed, #73c991));
			}

			/* Transparent appearances (toolbar, input, alert) with variants only change foreground color */
			/* These come after the main variant rules to override background/border back to transparent */
			:host([appearance='toolbar'][variant='danger']),
			:host([appearance='input'][variant='danger']),
			:host([appearance='alert'][variant='danger']) {
				--button-foreground: var(--vscode-errorForeground, #f48771);
				--button-background: transparent;
				--button-border: transparent;
			}

			:host([appearance='toolbar'][variant='warning']),
			:host([appearance='input'][variant='warning']),
			:host([appearance='alert'][variant='warning']) {
				--button-foreground: var(
					--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
					#cc6600
				);
				--button-background: transparent;
				--button-border: transparent;
			}

			:host([appearance='toolbar'][variant='success']),
			:host([appearance='input'][variant='success']),
			:host([appearance='alert'][variant='success']) {
				--button-foreground: var(--vscode-testing-iconPassed, #73c991);
				--button-background: transparent;
				--button-border: transparent;
			}

			:host([appearance='input']) .control {
				padding: var(--button-input-padding);
				--button-line-height: 1.1;
				height: 1.8rem;
				gap: 0.2rem;
			}

			:host([appearance='input'][href]) > a,
			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) .control {
				padding: var(--button-compact-padding);
			}

			:host([density='tight']) .control {
				padding: var(--button-tight-padding);
			}

			:host([density='tight']) .control ::slotted(code-icon) {
				--code-icon-size: 11px;
				--code-icon-v-align: unset;
			}

			:host([aria-checked]:hover:not([disabled]):not([aria-checked='true'])) {
				background-color: var(--vscode-inputOption-hoverBackground);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}

			:host([disabled][aria-checked='true']) {
				opacity: 0.8;
			}

			:host([aria-checked='true']) {
				background-color: var(--vscode-inputOption-activeBackground);
				color: var(--vscode-inputOption-activeForeground);
				border-color: var(--vscode-inputOption-activeBorder);
			}

			gl-tooltip {
				height: 100%;
				width: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}
		`],sQ([eL(".control")],s0.prototype,"control",2),sQ([eR({reflect:!0})],s0.prototype,"appearance",2),sQ([eR({reflect:!0})],s0.prototype,"variant",2),sQ([eR({type:Boolean,reflect:!0})],s0.prototype,"disabled",2),sQ([eR({reflect:!0})],s0.prototype,"density",2),sQ([eR({type:Boolean,reflect:!0})],s0.prototype,"full",2),sQ([eR()],s0.prototype,"href",2),sQ([eR()],s0.prototype,"tooltip",2),sQ([eR()],s0.prototype,"tooltipPlacement",2),sQ([eR({type:Boolean,reflect:!0})],s0.prototype,"truncate",2),s0=sQ([eO("gl-button")],s0);let s1=T`
	:host {
		--checkbox-foreground: var(--vscode-checkbox-foreground);
		--checkbox-background: var(--vscode-checkbox-background);
		--checkbox-border: var(--vscode-checkbox-border);
		--checkbox-checked-foreground: var(--vscode-inputOption-activeForeground);
		--checkbox-checked-background: var(--vscode-inputOption-activeBackground);
		--checkbox-checked-border: var(--vscode-inputOption-activeBorder);
		--checkbox-active-background: var(--vscode-checkbox-selectBackground);
		--checkbox-active-border: var(--vscode-checkbox-selectBorder);
		--checkbox-hover-background: var(--vscode-inputOption-hoverBackground);
		--checkbox-radius: 3px;
		--checkbox-border-width: 1px;
		--checkbox-size: 1.6rem;
		--checkbox-spacing: 1rem;

		display: block;
		margin-block: 0.8rem;
	}

	label {
		display: flex;
		gap: var(--checkbox-spacing);
		align-items: center;
		user-select: none;
		white-space: nowrap;
		cursor: pointer;
		color: var(--checkbox-foreground);
	}

	:host([disabled]) label {
		cursor: default;
		opacity: 0.5;
	}

	.label-text {
		display: block;
		line-height: normal;
		margin-inline-end: var(--checkbox-spacing);
	}

	.input {
		position: absolute;
		z-index: -1;
		opacity: 0;
	}
	.control {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
		width: var(--checkbox-size);
		height: var(--checkbox-size);
		box-sizing: border-box;
		border-radius: var(--checkbox-radius);
		color: var(--checkbox-foreground);
		background: var(--checkbox-background);
		border: var(--checkbox-border-width, 1px) solid var(--vscode-checkbox-border);
	}

	.input:hover + .control {
		background-color: var(--checkbox-hover-background);
	}

	.input:focus-visible + .control,
	.input:focus + .control {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: 2px;
	}

	.input:active + .control {
		background-color: var(--checkbox-active-background);
		border-color: var(--checkbox-active-border);
	}

	:host([checked]) .control {
		color: var(--checkbox-checked-foreground);
		background-color: var(--checkbox-checked-background);
		border-color: var(--checkbox-checked-border);
	}

	code-icon {
		pointer-events: none;
	}
`;var s2=Object.defineProperty,s5=Object.getOwnPropertyDescriptor,s8=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?s5(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&s2(t,o,s),s};let s3=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return ew` <code-icon icon="check"></code-icon> `}render(){return ew`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};function s4(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}s3.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},s3.styles=[s1],s8([eR({type:Boolean,reflect:!0})],s3.prototype,"disabled",2),s8([eR({type:String})],s3.prototype,"value",2),s8([eR({type:Boolean})],s3.prototype,"defaultChecked",1),s8([eR({type:Boolean,reflect:!0})],s3.prototype,"checked",2),s3=s8([eO("gl-checkbox")],s3),sn.define("sl-popup");var s6=Object.defineProperty,s7=Object.getOwnPropertyDescriptor,s9=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?s7(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&s6(t,o,s),s};let ne=class extends GlElement{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.suppressed=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1,this.open&&"hover"===this._triggeredBy&&(this.suppressed=!0,this.hide())},this.handleMouseUp=()=>{this.suppressed=!1},this.handleDragStart=()=>{this.suppressed=!0,this.hide()},this.handleDragEnd=()=>{this.suppressed=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleDocumentMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=oO(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let o=oO(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),o)}}}static closeOthers(e){for(let t of ne.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}connectedCallback(){super.connectedCallback?.(),this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("dragstart",this.handleDragStart,{capture:!0}),window.addEventListener("dragend",this.handleDragEnd,{capture:!0})}disconnectedCallback(){this.removeEventListener("blur",this.handleTriggerBlur,!0),this.removeEventListener("focus",this.handleTriggerFocus,!0),this.removeEventListener("click",this.handleTriggerClick),this.removeEventListener("mousedown",this.handleTriggerMouseDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut),this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("dragstart",this.handleDragStart,{capture:!0}),window.removeEventListener("dragend",this.handleDragEnd,{capture:!0}),ne.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return ew`<sl-popup
			part="base"
			exportparts="
				popup:base__popup,
				arrow:base__arrow
			"
			class="popover"
			.anchor=${this.anchor}
			placement=${this.placement}
			distance=${this.distance}
			skidding=${this.skidding}
			strategy=${this.hoist?"fixed":"absolute"}
			auto-size="horizontal"
			auto-size-padding="3"
			flip-padding="3"
			flip
			shift
			?arrow=${this.arrow}
			hover-bridge
		>
			<div slot="anchor" aria-describedby="popover">
				<slot name="anchor"></slot>
			</div>

			<div
				part="body"
				id="popover"
				class="popover__body scrollable ${"menu"===this.appearance?"is-menu":""}"
				role="tooltip"
				aria-live=${this.open?"polite":"off"}
			>
				<slot name="content"></slot>
			</div>
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open&&!this.suppressed)return ne.closeOthers(this),this.open=!0,ne.openPopovers.add(this),oT(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,ne.openPopovers.delete(this),oT(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleDocumentMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};ne.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ne.openPopovers=new Set,ne.styles=[sY,T`
			:host {
				--hide-delay: 0ms;
				--show-delay: 500ms;

				display: contents;
			}

			.popover {
				--arrow-size: var(--sl-tooltip-arrow-size);
				--arrow-color: var(--sl-tooltip-background-color);
			}

			.popover::part(popup) {
				z-index: var(--sl-z-index-tooltip);
			}

			.popover::part(arrow) {
				border: 1px solid var(--gl-tooltip-border-color);
				z-index: 1;
			}

			.popover[placement^='top']::part(popup) {
				transform-origin: bottom;
			}

			.popover[placement^='bottom']::part(popup) {
				transform-origin: top;
			}

			.popover[placement^='left']::part(popup) {
				transform-origin: right;
			}

			.popover[placement^='right']::part(popup) {
				transform-origin: left;
			}

			.popover[data-current-placement^='top']::part(arrow) {
				border-top-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
			}

			.popover[data-current-placement^='bottom']::part(arrow) {
				border-bottom-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
			}

			.popover[data-current-placement^='left']::part(arrow) {
				border-bottom-width: 0;
				border-left-width: 0;
				clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 100%, 0 30%);
			}

			.popover[data-current-placement^='right']::part(arrow) {
				border-top-width: 0;
				border-right-width: 0;
				clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 70%, 30% 0);
			}

			.popover__body {
				display: block;
				width: fit-content;
				border: 1px solid var(--gl-tooltip-border-color);
				border-radius: var(--sl-tooltip-border-radius);
				box-shadow: 0 2px 8px var(--gl-tooltip-shadow);
				background-color: var(--sl-tooltip-background-color);
				font-family: var(--sl-tooltip-font-family);
				font-size: var(--sl-tooltip-font-size);
				font-weight: var(--sl-tooltip-font-weight);
				line-height: var(--sl-tooltip-line-height);
				text-align: start;
				white-space: normal;
				color: var(--sl-tooltip-color);
				padding: var(--sl-tooltip-padding);
				user-select: none;
				-webkit-user-select: none;
				max-width: min(var(--auto-size-available-width), var(--max-width, 70vw));
				/* max-height: var(--auto-size-available-height);
			overflow: auto; */
				pointer-events: all;
			}

			.popover[data-current-placement^='top'] .popover__body,
			.popover[data-current-placement^='bottom'] .popover__body {
				width: max-content;
			}

			:host([appearance='menu']) {
				--sl-tooltip-padding: var(--sl-spacing-2x-small);
				--sl-tooltip-font-size: var(--vscode-font-size);
				--sl-tooltip-background-color: var(--vscode-menu-background);
				--arrow-color: var(--vscode-menu-background);
			}

			/* .popover::part(hover-bridge) {
			background: tomato;
			opacity: 1;
			z-index: 10000000000;
		} */
		`],s9([eL("#popover")],ne.prototype,"body",2),s9([eL("sl-popup")],ne.prototype,"popup",2),s9([eR({reflect:!0})],ne.prototype,"placement",2),s9([eR({type:Object})],ne.prototype,"anchor",2),s9([eR({reflect:!0,type:Boolean})],ne.prototype,"disabled",2),s9([eR({type:Number})],ne.prototype,"distance",2),s9([eR({reflect:!0,type:Boolean})],ne.prototype,"open",2),s9([eR({reflect:!0,type:Boolean})],ne.prototype,"arrow",2),s9([eR({type:Number})],ne.prototype,"skidding",2),s9([eR()],ne.prototype,"trigger",2),s9([eR({type:Boolean})],ne.prototype,"hoist",2),s9([eR({reflect:!0})],ne.prototype,"appearance",2),s9([eD()],ne.prototype,"suppressed",2),s9([ty("open",{afterFirstUpdate:!0})],ne.prototype,"handleOpenChange",1),s9([ty(["distance","hoist","placement","skidding"])],ne.prototype,"handleOptionsChange",1),s9([ty("disabled")],ne.prototype,"handleDisabledChange",1),ne=s9([eO("gl-popover")],ne);let nt=(e,t)=>{let o=e._$AN;if(void 0===o)return!1;for(let e of o)e._$AO?.(t,!1),nt(e,t);return!0},no=e=>{let t,o;do{if(void 0===(t=e._$AM))break;(o=t._$AN).delete(e),e=t}while(0===o?.size)},nr=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),nn(t)}};function ni(e){void 0!==this._$AN?(no(this),this._$AM=e,nr(this)):this._$AM=e}function ns(e,t=!1,o=0){let r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(r))for(let e=o;e<r.length;e++)nt(r[e],!1),no(r[e]);else null!=r&&(nt(r,!1),no(r));else nt(this,e)}let nn=e=>{2==e.type&&(e._$AP??=ns,e._$AQ??=ni)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),nr(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(nt(this,e),no(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let na=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!na(e))??ex}update(e,t){let o=this._$Cbt,r=o.length;this._$Cbt=t;let i=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!na(a))return this._$Cwt=e,a;e<r&&a===o[e]||(this._$Cwt=0x3fffffff,r=0,Promise.resolve(a).then(async e=>{for(;s.get();)await s.get();let t=i.deref();if(void 0!==t){let o=t._$Cbt.indexOf(a);o>-1&&o<t._$Cwt&&(t._$Cwt=o,t.setValue(e))}}))}return ex}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let nl=rA(until_c);var nc=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,nd=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?nh(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&nc(t,o,s),s};let np=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ew`${nl(this.promoPromise?.then(e=>this.renderPromo(e)),ek)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return ew`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,ew`<p class="promo" part="text">${r8(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ew`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??ek}"
						>${r8(t.link.html)}</a
					>`}return this.hasPromo=!1,ek}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),s4(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};np.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},np.styles=[T`
			:host {
				display: block;
			}

			.promo {
				margin: 0;
				margin-top: 0.8rem;
				text-align: center;
			}

			.header {
				margin-right: 0.4rem;
			}

			.content {
				font-size: smaller;
			}

			.muted {
				opacity: 0.7;
			}

			.link {
				display: block;
				color: inherit;
				max-width: 100%;
				text-align: center;
				text-decoration: none;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.link:focus-visible {
				${sF}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],nd([eL('a,button,[tabindex="0"]')],np.prototype,"_focusable",2),nd([eR({type:Object})],np.prototype,"promoPromise",2),nd([eR({type:Object})],np.prototype,"source",2),nd([eR({reflect:!0,type:String})],np.prototype,"type",2),nd([eR({type:Boolean,reflect:!0,attribute:"has-promo"})],np.prototype,"hasPromo",1),np=nd([eO("gl-promo")],np);var nu=Object.defineProperty,nf=Object.getOwnPropertyDescriptor,ng=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?nf(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&nu(t,o,s),s};let nb=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){var e,t;return null==this.subscription?0:(e=this.subscription,t=e.plan.effective.expiresOn,(null!=t?function(e,t,o,r){let i=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),s=r??Math.floor;switch(o){case"days":return s(i/864e5);case"hours":return s(i/36e5);case"minutes":return s(i/6e4);case"seconds":return s(i/1e3);default:return i}}(Date.now(),new Date(t),"days",Math.round):void 0)??0)}get state(){return this.subscription?.state}render(){return ew`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription)if(this.state===eY.VerificationRequired)return ew`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else{var t;if(e6(this.subscription)||this.cloud&&null!=this.subscription.account)return ew`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.subscription).state?t.state===eY.Trial:t.plan.actual.id!==t.plan.effective.id)return ew`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=ew`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===eY.Paid?ew`<div class="popup-header">${e}</div>`:this.cloud?this.preview?ew`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Unlock this feature with an account and may require GitLens Pro in the future</span
					>
				</div>`:ew`<div class="popup-header">
				${e}<span class="popup-subtitle"> Unlock this feature with GitLens Pro</span>
			</div>`:this.preview?ew`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:ew`<div class="popup-header">
			${e}<span class="popup-subtitle"> Unlock this feature for privately hosted repos with GitLens Pro</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return ek;switch(this.state){case eY.Paid:var t;e=ew`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${s4("gitlens.showAccountView")}"
							>${t=this.subscription?.plan.actual.id??"pro",`GitLens ${function(e){switch(e){case"student":return"Student";case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}(t)}`}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case eY.VerificationRequired:e=ew`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${s4("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${s4("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case eY.Trial:{let t=this.daysRemaining;e=ew`<p>
						You have
						<strong>${t<1?"<1 day":tz("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case eY.TrialExpired:e=ew`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ew`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case eY.TrialReactivationEligible:e=ew`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${tz("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${s4("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${tz("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:e=ew`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return ew`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return ew`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${s4("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${s4("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return ew`<div class="actions">
			${e??ek}
			<gl-button
				density="tight"
				href="${s4("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return ew`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};nb.styles=[sK,sZ,T`
			:host {
				/* position: relative; */
				display: inline-block;
				--gl-feature-badge-color: currentColor;
				--gl-feature-badge-border-color: var(--color-foreground--50);
				--max-width: 40rem;
			}

			a {
				color: var(--color-link);
				text-decoration: underline;
			}

			.badge {
				color: var(--gl-feature-badge-color, currentColor);
				cursor: help;
				font-size: var(--gl-feature-badge-font-size, x-small);
				font-variant: all-small-caps;
				font-weight: 600;
				border: 1px solid var(--gl-feature-badge-border-color, var(--color-foreground--50));
				border-radius: 1rem;
				padding: 0 0.8rem 0.1rem 0.8rem;
				white-space: nowrap;
			}

			.badge:focus-visible {
				${O(sF)}
			}

			.badge-icon {
				font-weight: 400;
				margin-left: 0.4rem;
				white-space: nowrap;
			}

			.badge-popup {
				display: flex;
				flex-direction: column;
				white-space: normal;
				gap: 0.6rem;
			}

			.popup-header {
				display: flex;
				flex-direction: column;
				margin-bottom: 0.4rem;
			}

			.popup-title {
				font-size: 1.3rem;
				font-weight: 600;
			}

			.popup-subtitle {
				font-size: smaller;
				margin-top: 0.6rem;
			}

			.popup-content {
				display: flex;
				flex-direction: column;
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.popup-content p {
				margin: 0;
			}

			.popup-content .actions {
				margin-top: 0.8rem;
				margin-bottom: 0.6rem;
			}

			.popup-content .actions:first-child {
				margin-bottom: 0.8rem;
			}

			.popup-content .actions :not(:first-child) {
				margin-top: 0.4rem;
			}

			.popup-content .actions gl-button:not(:first-child) {
				margin-top: 0.8rem;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`],ng([eR({type:Boolean})],nb.prototype,"cloud",2),ng([eR({reflect:!0})],nb.prototype,"placement",2),ng([eR({type:Boolean})],nb.prototype,"preview",2),ng([th({context:"promos"})],nb.prototype,"promos",2),ng([eR({type:Object})],nb.prototype,"source",2),ng([eR({attribute:!1})],nb.prototype,"subscription",2),nb=ng([eO("gl-feature-badge")],nb);var nm=Object.defineProperty,nv=Object.getOwnPropertyDescriptor,ny=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?nv(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&nm(t,o,s),s};let nw=class extends lit_element_i{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,e)return;let t=(this.appearance??"alert")==="alert"?"alert":void 0;switch(this.state){case eY.VerificationRequired:return ew`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${t??ek}"
							href="${s4("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${t??ek}"
							href="${s4("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case eY.Community:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let o=(new Date(t.at(-1).expiresOn).getTime()-Date.now())/36e5;return t.length<=3&&o>0&&o<24?"active":"expired"}(this.featurePreview))return ew`${this.renderFeaturePreview(this.featurePreview)}`;return ew`<slot name="feature"></slot>
					<p>
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${tP.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ek}"
							href="${s4("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${s4("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${tz("day",14)} of
						<a href="${tP.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case eY.TrialExpired:return ew`<slot name="feature"></slot>
					<p>
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${tP.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ek}"
							href="${s4("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						>
					</p>
					<p>${this.renderPromo()}</p>`;case eY.TrialReactivationEligible:return ew`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ek}"
							href="${s4("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${tz("day",14)}!
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,o=e.usages.length;return 0===o?ew`<slot name="feature"></slot>
				<gl-button appearance="${t??ek}" href="${this.featurePreviewCommandLink??ek}"
					>Continue</gl-button
				>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately hosted
					repos, or
					<a href="${s4("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?ew`<br />`:""} For full access to all GitLens Pro features,
					<a href="${s4("gitlens.plus.signUp",this.source)}"
						>start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:ew`
			${this.renderFeaturePreviewStep(e,o)}
			<p class="actions-row">
				<gl-button
					class="inline"
					appearance="${t??ek}"
					href="${this.featurePreviewCommandLink??ek}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${s4("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<p>
				After continuing, you will have ${tz("day",3-o,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately hosted
				repos.<br />
				${"alert"!==t?ew`<br />`:""} For full access to all GitLens Pro features,
				<a href="${s4("gitlens.plus.signUp",this.source)}"
					>start your free ${14}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"!==e.feature)return ew`<slot name="feature"></slot>`;switch(t){case 1:return ew`<p>Try Commit Search</p>
							<p>
								Search for commits in your repo by author, commit message, SHA, file, change, or type.
								Turn on the commit filter to show only commits that match your query.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-commit-search.webp"
									style="width:100%"
									alt="Graph Commit Search"
								/>
							</p> `;case 2:return ew`
							<p>Try the Graph Minimap</p>
							<p>
								Visualize the amount of changes to a repository over time, and inspect specific points
								in the history to locate branches, stashes, tags and pull requests.
							</p>
							<p>
								<img
									src="${this.webroot??""}/media/graph-minimap.webp"
									style="width:100%"
									alt="Graph Minimap"
								/>
							</p>
						`;default:return ew`<slot name="feature"></slot>`}}renderPromo(){return ew`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"gate")}
			.source=${this.source}
		></gl-promo>`}};nw.styles=[T`
			:host {
				--gk-action-radius: 0.3rem;

				--link-foreground: var(--vscode-textLink-foreground);
				--link-foreground-active: var(--vscode-textLink-activeForeground);
			}

			:host([appearance='alert']) {
				--link-decoration-default: underline;
				--link-foreground: color-mix(in srgb, var(--section-foreground) 50%, var(--vscode-textLink-foreground));
				--link-foreground-active: color-mix(
					in srgb,
					var(--section-foreground) 50%,
					var(--vscode-textLink-activeForeground)
				);
			}

			:host([appearance='default']) gl-button:only-child {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='default']) gl-button:not(.inline) {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button:not(.inline) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}

			.actions {
				text-align: center;
			}

			.actions-row {
				display: flex;
				gap: 0.6em;
				align-items: baseline;
				justify-content: center;
				white-space: nowrap;
			}

			.hint {
				border-bottom: 1px dashed currentColor;
			}
		`,oX],ny([eL("gl-button")],nw.prototype,"button",2),ny([eR()],nw.prototype,"appearance",2),ny([eR({type:Object})],nw.prototype,"featurePreview",2),ny([eR()],nw.prototype,"featurePreviewCommandLink",2),ny([eR()],nw.prototype,"featureRestriction",2),ny([eR()],nw.prototype,"featureWithArticleIfNeeded",2),ny([th({context:"promos"})],nw.prototype,"promos",2),ny([eR({type:Object})],nw.prototype,"source",2),ny([eR({attribute:!1,type:Number})],nw.prototype,"state",2),ny([eR()],nw.prototype,"webroot",2),nw=ny([eO("gl-feature-gate-plus-state")],nw);var nx=Object.defineProperty,nk=Object.getOwnPropertyDescriptor,n_=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?nk(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&nx(t,o,s),s};let n$=class extends lit_element_i{render(){var e;if(this.hidden||null!=(e=this.state)&&(e===eY.Trial||e===eY.Paid))return;let t=this.appearance??(document.body.getAttribute("data-placement")??"editor")==="editor"?"alert":"default";return ew`
			<section>
				<slot></slot>
				<gl-feature-gate-plus-state
					appearance=${t}
					.featurePreview=${this.featurePreview}
					.featurePreviewCommandLink=${this.featurePreviewCommandLink}
					.featureRestriction=${this.featureRestriction}
					.featureWithArticleIfNeeded=${this.featureWithArticleIfNeeded}
					.source=${this.source}
					.state=${this.state}
					.webroot=${this.webroot}
				>
					<slot name="feature" slot="feature"></slot>
				</gl-feature-gate-plus-state>
			</section>
		`}};n$.styles=[oX,T`
			:host {
				--background: var(--vscode-sideBar-background);
				--foreground: var(--vscode-sideBar-foreground);

				position: absolute;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				overflow: auto;
				z-index: 100;

				box-sizing: border-box;
			}

			:host-context(body[data-placement='editor']),
			:host([appearance='alert']) {
				--background: transparent;
				--foreground: var(--vscode-editor-foreground);

				backdrop-filter: blur(3px) saturate(0.8);
				padding: 0 2rem;
			}

			::slotted(p) {
				margin: revert !important;
			}

			::slotted(p:first-child) {
				margin-top: 0 !important;
			}

			section {
				--section-foreground: var(--foreground);
				--section-background: var(--background);
				--section-border-color: transparent;

				--link-foreground: var(--vscode-textLink-foreground);
				--link-foreground-active: var(--vscode-textLink-activeForeground);

				display: flex;
				flex-direction: column;
				padding: 0 2rem 1.3rem 2rem;
				background: var(--section-background);
				color: var(--section-foreground);
				border: 1px solid var(--section-border-color);

				height: min-content;
			}

			:host-context(body[data-placement='editor']) section,
			:host([appearance='alert']) section {
				--section-foreground: var(--color-alert-infoForeground);
				--section-background: var(--color-alert-infoBackground);
				--section-border-color: var(--color-alert-infoBorder);

				--link-decoration-default: underline;
				--link-foreground: color-mix(in srgb, var(--section-foreground) 50%, var(--vscode-textLink-foreground));
				--link-foreground-active: color-mix(
					in srgb,
					var(--section-foreground) 50%,
					var(--vscode-textLink-activeForeground)
				);

				border-radius: 0.3rem;
				max-width: 600px;
				max-height: min-content;
				margin: 0.2rem auto;
				padding: 1.3rem;
			}

			:host-context(body[data-placement='editor']) section ::slotted(gl-button),
			:host([appearance='alert']) section ::slotted(gl-button) {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
		`],n_([eR({reflect:!0})],n$.prototype,"appearance",2),n_([eR({type:Object})],n$.prototype,"featurePreview",2),n_([eR({type:String})],n$.prototype,"featurePreviewCommandLink",2),n_([eR()],n$.prototype,"featureRestriction",2),n_([eR()],n$.prototype,"featureWithArticleIfNeeded",2),n_([eR({type:Object})],n$.prototype,"source",2),n_([eR({attribute:!1,type:Number})],n$.prototype,"state",2),n_([eR({type:String})],n$.prototype,"webroot",2),n$=n_([eO("gl-feature-gate")],n$);var nC=Object.defineProperty,nP=Object.getOwnPropertyDescriptor;let nS=class extends lit_element_i{render(){return ew`<slot></slot>`}};nS.styles=[sK,T`
			:host {
				display: block;
				text-transform: uppercase;
				font-size: 0.84em;
				line-height: 2.2rem;
				padding-left: 0.6rem;
				padding-right: 0.6rem;
				margin: 0px;
				color: var(--vscode-menu-foreground);
				opacity: 0.6;
				user-select: none;
				-webkit-font-smoothing: auto;
			}
		`],nS=((e,t,o,r)=>{for(var i,s=r>1?void 0:r?nP(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&nC(t,o,s),s})([eO("menu-label")],nS);var nA=Object.defineProperty,nE=Object.getOwnPropertyDescriptor,nz=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?nE(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&nA(t,o,s),s};let nO=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return ew`<div class="progress-bar"></div>`}};nO.styles=T`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,nz([eR({reflect:!0})],nO.prototype,"mode",2),nz([eR({type:Boolean})],nO.prototype,"active",2),nz([eR()],nO.prototype,"position",2),nO=nz([eO("progress-indicator")],nO);let nT=T`
	:host {
		box-sizing: border-box;
		display: flex;
		align-items: center;

		max-width: 100%;
		min-width: 4.6rem;
	}

	* {
		box-sizing: border-box;
	}
`,nR=T`
	code-icon.picker-icon {
		font-size: 1rem;
		/* margin-top: 0.4rem; */
		margin-right: -0.25rem;
	}

	code-icon.picker-icon::before {
		margin-left: -0.4rem;
	}
`,nD=T`
	.truncated-button {
		max-width: 100%;
		min-width: 4rem;
	}
	gl-button[disabled] {
		opacity: 1;
		cursor: default;
	}
	.truncated-button__label {
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;var nI=Object.defineProperty,nL=Object.getOwnPropertyDescriptor,nM=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?nL(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&nI(t,o,s),s};let nB=class extends lit_element_i{constructor(){super(...arguments),this.icon=!1,this.size=13,this.worktree=!1}render(){let e,t;if(null==this.ref)return ek;switch(this.ref.refType){case"branch":e=this.worktree?"worktree":"branch",t=this.worktree?"gl-worktree":"git-branch";break;case"tag":e="tag",t="tag";break;default:e="revision",t="git-commit"}return ew`${this.icon?ew`<code-icon
						class="icon${e?` ${e}`:""}"
						icon="${t}"
						size="${this.size}"
					></code-icon>`:ek}<span class="label">${this.ref.name}</span>`}};nB.styles=T`
		:host {
			box-sizing: border-box;
			display: flex;
			align-content: center;

			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			gap: 0.4rem;
		}

		* {
			box-sizing: border-box;
		}

		.icon.tag,
		.icon.worktree {
			margin-right: 0.1rem;
		}

		.label {
			min-width: 2.4rem;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			font-weight: var(--font-weight, bold);
		}
	`,nM([eR({type:Boolean,reflect:!0})],nB.prototype,"icon",2),nM([eR({type:Object})],nB.prototype,"ref",2),nM([eR({type:Number})],nB.prototype,"size",2),nM([eR({type:Boolean})],nB.prototype,"worktree",2),nB=nM([eO("gl-ref-name")],nB);var nF=Object.defineProperty,nN=Object.getOwnPropertyDescriptor,nj=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?nN(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&nF(t,o,s),s};let nU=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.icon=!1,this.size=16,this.worktree=!1}render(){return ew`<gl-button appearance="toolbar" href=${this.href??ek} ?disabled=${this.disabled}
			>${null==this.ref?ew`<slot name="empty">&lt;missing&gt;</slot>`:ew`<gl-ref-name
						part="label"
						?icon=${this.icon}
						.ref=${this.ref}
						.size=${this.size}
						?worktree=${this.worktree}
					></gl-ref-name>`}<code-icon
				slot="suffix"
				class="picker-icon"
				icon="chevron-down"
				size="10"
			></code-icon
			><slot name="tooltip" slot="tooltip"></slot
		></gl-button>`}};nU.styles=[nT,T`
			:host {
				--font-weight: normal;
			}

			gl-button {
				max-width: 100%;
			}

			gl-ref-name:not([icon]) {
				padding-left: 0.2rem;
			}
		`,nR],nj([eR({type:Boolean,reflect:!0})],nU.prototype,"disabled",2),nj([eR({type:String,reflect:!0})],nU.prototype,"href",2),nj([eR({type:Boolean,reflect:!0})],nU.prototype,"icon",2),nj([eR({type:Object})],nU.prototype,"ref",2),nj([eR({type:Number})],nU.prototype,"size",2),nj([eR({type:Boolean})],nU.prototype,"worktree",2),nU=nj([eO("gl-ref-button")],nU);let nq=T`
	/*
	:host {
		display: inline-block;
	}
    */

	.indicator {
		box-sizing: border-box;
		display: inline-block;
		border-radius: calc(var(--gl-indicator-size, 0.8rem) * 2);
		width: var(--gl-indicator-size, 0.8rem);
		aspect-ratio: 1;
		background-color: var(--gl-indicator-color);
		vertical-align: text-bottom;
	}
`,nH=T`
	.indicator--pulse {
		animation: 1.5s ease 0s infinite normal none running pulse;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 var(--gl-indicator-pulse-color);
		}
		70% {
			box-shadow: 0 0 0 var(--gl-indicator-size, 0.8rem) transparent;
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}
`;var nV=Object.defineProperty,nW=Object.getOwnPropertyDescriptor,nG=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?nW(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&nV(t,o,s),s};let nK=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ew`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};nK.styles=[nq,nH],nG([eR({type:Boolean})],nK.prototype,"pulse",2),nK=nG([eO("gl-indicator")],nK);var nZ=Object.defineProperty,nY=Object.getOwnPropertyDescriptor,nX=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?nY(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&nZ(t,o,s),s};let nJ=class extends GlElement{constructor(){super(...arguments),this.connectIcon=!0,this.disabled=!1,this.icon=!0,this.hasMultipleRepositories=!1,this.expandable=!1}get icons(){if(this.repository?.provider===void 0)return;let e=0;if(this.icon&&e++,this.connectIcon&&this.repository.provider.integration?.connected===!1&&e++,0!==e)return e}get displayName(){return this.repository?.name??"none selected"}render(){return ew`
			${this.renderProviderIcon()}
			<gl-button
				class="truncated-button"
				appearance="toolbar"
				?disabled=${this.disabled}
				@click=${e=>this.emit("gl-click",{event:e,part:"label",repository:this.repository})}
			>
				<span class="truncated-button__label">${this.displayName}</span>
				${this.hasMultipleRepositories?ew`<code-icon
							slot="suffix"
							class="picker-icon"
							icon="chevron-down"
							aria-hidden="true"
						></code-icon>`:ek}
				<slot name="tooltip" slot="tooltip">${this.displayName}</slot>
			</gl-button>
		`}renderProviderIcon(){var e,t,o;if(!this.icon)return ek;let{repository:r}=this;if(!r?.provider)return ew`
				<gl-button part="provider-icon" appearance="toolbar" ?disabled=${!0}>
					<code-icon icon="gl-repository" aria-hidden="true"></code-icon>
				</gl-button>
			`;let{provider:i}=r,s=i.integration?.connected;return ew`<gl-popover placement="bottom" trigger="hover click focus">
				<gl-button
					slot="anchor"
					part="provider-icon"
					appearance="toolbar"
					href=${i.url??ek}
					aria-label=${`Open Repository on ${i.name}`}
					@click=${e=>this.emit("gl-click",{event:e,part:"icon",repository:this.repository})}
				>
					<code-icon
						icon=${"cloud"===i.icon?"cloud":`gl-provider-${i.icon}`}
						aria-hidden="true"
					></code-icon>
					${e=()=>ew`<gl-indicator class="indicator-dot"></gl-indicator>`,s?e(s):void 0}
				</gl-button>
				<span slot="content">
					Open Repository on ${i.name}
					<hr />
					${t=()=>ew`
							<span>
								<code-icon style="margin-top: -3px" icon="check" aria-hidden="true"></code-icon>
								Connected to ${i.name}
							</span>
						`,o=()=>!1!==s?ek:ew`
								<code-icon style="margin-top: -3px" icon="plug" aria-hidden="true"></code-icon>
								<a
									href=${s4("gitlens.connectRemoteProvider",{repoPath:r.path,remote:i.bestRemoteName})}
								>
									Connect to ${r.provider.name}
								</a>
								<span>&mdash; not connected</span>
							`,s?t(s):o?.(s)}
				</span>
			</gl-popover>
			${this.renderConnectIcon()}`}renderConnectIcon(){if(!this.connectIcon)return ek;let{repository:e}=this;if(!e?.provider)return ek;let{provider:t}=e;return t.integration?.connected!==!1?ek:ew`
			<gl-button
				part="connect-icon"
				appearance="toolbar"
				href=${s4("gitlens.connectRemoteProvider",{repoPath:e.path,remote:t.bestRemoteName})}
			>
				<code-icon icon="plug" style="color: var(--titlebar-fg)"></code-icon>
				<span slot="tooltip">
					Connect to ${t.name}
					<hr />
					View pull requests and issues in Home, Commit Graph, Launchpad, autolinks, and more
				</span>
			</gl-button>
		`}};nJ.styles=[oX,oJ,nT,nD,T`
			:host([icons='1']:not([expandable])) {
				min-width: 7rem;
			}

			:host([icons='1'][expandable]) {
				min-width: 0;
			}

			:host([icons='2']:not([expandable])) {
				min-width: 9.4rem;
			}

			:host([icons='2'][expandable]) {
				min-width: 5.6rem;
			}

			.indicator-dot {
				--gl-indicator-color: green;
				--gl-indicator-size: 0.4rem;
				margin-left: -0.2rem;
			}

			/* :host([expandable]) .truncated-button {
				transition: max-width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
			} */

			:host([expandable]:not(:hover, :focus-within)) .truncated-button .picker-icon::before {
				visibility: hidden;
			}
			:host([expandable]:not(:hover, :focus-within)) .truncated-button {
				min-width: 0;
				max-width: 0;
			}
		`,nR],nX([eR({type:Boolean})],nJ.prototype,"connectIcon",2),nX([eR({type:Boolean})],nJ.prototype,"disabled",2),nX([eR({type:Boolean})],nJ.prototype,"icon",2),nX([eR({type:Object})],nJ.prototype,"repository",2),nX([eR({type:Boolean})],nJ.prototype,"hasMultipleRepositories",2),nX([eR({type:Object})],nJ.prototype,"source",2),nX([eR({type:Boolean,reflect:!0})],nJ.prototype,"expandable",2),nX([eR({type:Number,reflect:!0})],nJ.prototype,"icons",1),nJ=nX([eO("gl-repo-button-group")],nJ);var nQ=Object.defineProperty,n0=Object.getOwnPropertyDescriptor,n1=(e,t,o,r)=>{for(var i,s=r>1?void 0:r?n0(t,o):t,a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r?i(t,o,s):i(s))||s);return r&&s&&nQ(t,o,s),s};let n2=class extends GlAppHost{constructor(){super(...arguments),this._loading=!1,this.onChooseBaseRef=async e=>{if(e.target.disabled)return;let t=await this._ipc.sendRequest(tr,{scope:this.scope,type:"base"});t?.ref!=null&&this._ipc.sendCommand(ta,{scope:this.scope,changes:{base:t.ref}})},this.onChooseHeadRef=async e=>{if(e.target.disabled)return;let t=e.target.getAttribute("location"),o=await this._ipc.sendRequest(tr,{scope:this.scope,type:"head"});if(o?.ref===null){this.config.showAllBranches||this._ipc.sendCommand(tn,{changes:{showAllBranches:!0}});return}if(o?.ref!=null){if("config"===t)return void this._ipc.sendCommand(ta,{scope:this.scope,changes:{head:o.ref,base:this.config.showAllBranches?null:void 0}});this._ipc.sendCommand(ta,{scope:this.scope,changes:{head:o.ref,base:null}}),this.config.showAllBranches&&this._ipc.sendCommand(tn,{changes:{showAllBranches:!1}})}},this.onChoosePath=async e=>{if(e.stopImmediatePropagation(),null==this.repository||null==this.scope)return;let t=await this._ipc.sendRequest(ti,{repoUri:this.repository.uri,ref:this.head,title:"Select a File or Folder to Visualize",initialPath:"file"===this.scope.type?(0,e9.dirname)(this.scope.relativePath):this.scope.relativePath});t?.picked!=null&&this._ipc.sendCommand(ta,{scope:this.scope,changes:{type:t.picked.type,relativePath:t.picked.relativePath},altOrShift:e.altKey||e.shiftKey})},this.onChangeScope=e=>{let t=e.target?.closest("gl-breadcrumb-item-child")??e.target?.closest("gl-breadcrumb-item"),o=t?.getAttribute("type");if(null==o)return;if("repo"===o)return void this._ipc.sendCommand(ta,{scope:this.scope,changes:{type:"repo"},altOrShift:e.altKey||e.shiftKey});let r=t?.getAttribute("value");null!=r&&this._ipc.sendCommand(ta,{scope:this.scope,changes:{type:o,relativePath:r},altOrShift:e.altKey||e.shiftKey})}}createStateProvider(e,t,o){return new TimelineStateProvider(this,e,t,o)}connectedCallback(){super.connectedCallback?.(),eK=this.state.config.abbreviatedShaLength}get allowed(){return this.state.access?.allowed??!1}get base(){return this.scope?.base??this.repository?.ref}get config(){return this.state.config}get head(){return this.scope?.head??this.repository?.ref}get repository(){return this.state.repository}get scope(){return this.state.scope}get isShowAllBranchesSupported(){return!this.repository?.virtual}get isSliceBySupported(){return!this.repository?.virtual&&(this.scope?.type==="file"||this.scope?.type==="folder")}get sliceBy(){return this.isSliceBySupported&&this.config.showAllBranches?this.config.sliceBy:"author"}get subscription(){return this.state.access?.subscription?.current}renderGate(){return"editor"===this.placement?ew`<gl-feature-gate
				?hidden=${!1!==this.allowed}
				featureRestriction="private-repos"
				.source=${{source:"timeline",detail:"gate"}}
				.state=${this.subscription?.state}
				><p slot="feature">
					<a href="https://help.gitkraken.com/gitlens/gitlens-features/#visual-file-history-pro"
						>Visual History</a
					>
					<gl-feature-badge></gl-feature-badge>
					&mdash; visualize the evolution of a repository, branch, folder, or file and identify when the most
					impactful changes were made and by whom. Quickly see unmerged changes in files or folders, when
					slicing by branch.
				</p></gl-feature-gate
			>`:ew`<gl-feature-gate
			?hidden=${!1!==this.allowed}
			featureRestriction="private-repos"
			.source=${{source:"timeline",detail:"gate"}}
			.state=${this.subscription?.state}
			><p slot="feature">
				<a href="https://help.gitkraken.com/gitlens/gitlens-features/#visual-file-history-pro"
					>Visual File History</a
				>
				<gl-feature-badge></gl-feature-badge>
				&mdash; visualize the evolution of a file and quickly identify when the most impactful changes were made
				and by whom. Quickly see unmerged changes in files or folders, when slicing by branch.
			</p></gl-feature-gate
		>`}render(){return ew`${this.renderGate()}
			<div class="container">
				<progress-indicator ?active=${this._loading}></progress-indicator>
				<header class="header" ?hidden=${!this.scope}>
					<span class="details">${this.renderBreadcrumbs()} ${this.renderTimeframe()}</span>
					<span class="toolbox">
						${this.renderConfigPopover()}
						${"view"===this.placement?ew`<gl-button
									appearance="toolbar"
									href="command:gitlens.views.timeline.openInTab"
									tooltip="Open in Editor"
									aria-label="Open in Editor"
								>
									<code-icon icon="link-external"></code-icon>
								</gl-button>`:ek}
						${null==this.subscription||!e6(this.subscription)?ew`<gl-feature-badge
									placement="bottom"
									.source=${{source:"timeline",detail:"badge"}}
									.subscription=${this.subscription}
								></gl-feature-badge>`:ek}
					</span>
				</header>

				<main class="timeline">${this.renderChart()}</main>
			</div> `}renderBreadcrumbs(){return ew`<gl-breadcrumbs>
			${this.renderRepositoryBreadcrumbItem()}
			${this.renderBranchBreadcrumbItem()}${this.renderBreadcrumbPathItems()}
			${"editor"===this.placement?ew`<gl-button
						appearance="toolbar"
						density="compact"
						@click=${this.onChoosePath}
						tooltip="Choose File or Folder to Visualize..."
						aria-label="Choose File or Folder to Visualize..."
						><code-icon slot="prefix" icon="folder-opened"></code-icon>Choose File / Folder...</gl-button
					>`:ek}
		</gl-breadcrumbs>`}renderRepositoryBreadcrumbItem(){let e=this.state.repository;return null==e?ek:ew`<gl-breadcrumb-item
			collapsibleState="${this.state.scope?.relativePath?"collapsed":"expanded"}"
			icon="gl-repository"
			shrink="10000000"
			type="repo"
		>
			<gl-repo-button-group
				aria-label="Visualize Repository History"
				.connectIcon=${!1}
				.hasMultipleRepositories=${this.state.repositories.openCount>1}
				.icon=${!1}
				.repository=${e}
				.source=${{source:"timeline"}}
				@gl-click=${this.onChangeScope}
				><span slot="tooltip">
					Visualize Repository History
					<hr />
					${e.name}
				</span></gl-repo-button-group
			>
		</gl-breadcrumb-item>`}renderBranchBreadcrumbItem(){let{head:e,config:{showAllBranches:t}}=this;return ew`<gl-breadcrumb-item
			collapsibleState="expanded"
			icon="${t?"git-branch":function(e){switch(e?.refType){case"branch":return"git-branch";case"tag":return"tag";default:return"git-commit"}}(e)}"
			shrink="100000"
			type="ref"
		>
			<gl-ref-button .ref=${t?void 0:e} @click=${this.onChooseHeadRef}
				><span slot="empty">All Branches</span
				><span slot="tooltip"
					>Change Reference...
					<hr />
					${t?"Showing All Branches":ew`<gl-ref-name icon .ref=${e}></gl-ref-name>`}</span
				></gl-ref-button
			>
		</gl-breadcrumb-item>`}renderBreadcrumbPathItems(){let e=this.state.scope?.relativePath;if(!e)return ek;let t=[],o=e.split("/"),r=o.pop()||"",i=o.length;if(i){let e=o.shift(),r=e,i=ew`
				<gl-breadcrumb-item
					collapsibleState="expanded"
					icon="folder"
					type="${"folder"}"
					value="${e}"
				>
					<gl-button
						appearance="toolbar"
						@click=${this.onChangeScope}
						aria-label="Visualize folder history of ${e}"
						>${e}<span slot="tooltip"
							>Visualize Folder History
							<hr />
							${e}</span
						></gl-button
					>

					${o.length?ew`<span slot="children" class="breadcrumb-item-children">
								${o.map(e=>(r=`${r}/${e}`,ew`<gl-breadcrumb-item-child
										type="${"folder"}"
										value="${r}"
									>
										<gl-button
											appearance="toolbar"
											@click=${this.onChangeScope}
											aria-label="Visualize folder history of ${r}"
											>${e}<span slot="tooltip"
												>Visualize Folder History
												<hr />
												${r}</span
											></gl-button
										>
									</gl-breadcrumb-item-child>`))}
							</span>`:ek}
				</gl-breadcrumb-item>
			`;t.push(i)}return t.push(ew`
			<gl-breadcrumb-item
				collapsibleState="none"
				icon="${(this.scope?.type==="folder"?i?void 0:"folder":"file")??ek}"
				shrink="0"
				tooltip="${e}"
				type="${this.scope?.type==="folder"?"folder":"file"}"
				value="${e}"
			>
				<gl-copy-container
					tabindex="0"
					copyLabel="Copy Path&#10;&#10;${e}"
					.content=${e}
					placement="bottom"
				>
					<span>${r}</span>
				</gl-copy-container>
			</gl-breadcrumb-item>
		`),t}renderChart(){return this.scope||"view"!==this.placement?ew`<gl-timeline-chart
			id="chart"
			placement="${this.placement}"
			dateFormat="${this.state.config.dateFormat}"
			.dataPromise=${this.state.dataset}
			head="${this.head?.ref??"HEAD"}"
			.scope=${this.scope}
			shortDateFormat="${this.state.config.shortDateFormat}"
			sliceBy="${this.sliceBy}"
			@gl-commit-select=${this.onChartCommitSelected}
			@gl-loading=${e=>{this._loading=!0,e.detail.finally(()=>this._loading=!1)}}
		>
			<div slot="empty">
				${null==this.scope?ew`<p>Something went wrong</p>
							<p>Please close this tab and try again</p>`:ew`<p>No commits found for the specified time period</p>
							${this.renderPeriodSelect(this.state.config.period)}`}
			</div>
		</gl-timeline-chart>`:ew`<div class="timeline__empty">
				<p>There are no editors open that can provide file history information.</p>
			</div>`}renderConfigPopover(){let{config:{period:e}}=this;return ew`<gl-popover class="config" placement="bottom" trigger="hover focus click" hoist>
			<gl-button slot="anchor" appearance="toolbar">
				<code-icon icon="settings"></code-icon>
			</gl-button>
			<div slot="content" class="config__content">
				<menu-label>View Options</menu-label>
				${this.renderConfigHead()} ${this.renderConfigBase()} ${this.renderConfigShowAllBranches()}
				${this.renderPeriodSelect(e)} ${this.renderConfigSliceBy()}
			</div>
		</gl-popover>`}renderConfigHead(){let{head:e}=this,t=this.config.showAllBranches&&"branch"!==this.sliceBy;return ew`<section>
			<label for="head" ?disabled=${t}>Branch</label>
			<gl-ref-button
				name="head"
				?disabled=${t}
				icon
				.ref=${e}
				location="config"
				@click=${this.onChooseHeadRef}
				><span slot="tooltip"
					>Change Reference...
					<hr />
					${this.config.showAllBranches?"Showing All Branches":ew`<gl-ref-name icon .ref=${e}></gl-ref-name>`}</span
				></gl-ref-button
			>
		</section>`}renderConfigBase(){return ek}renderConfigShowAllBranches(){if(this.repository?.virtual)return ek;let{config:{showAllBranches:e}}=this;return ew`<section>
			<gl-checkbox
				value="all"
				.checked=${e}
				@gl-change-value=${e=>{this._ipc.sendCommand(tn,{changes:{showAllBranches:e.target.checked}})}}
				>View All Branches</gl-checkbox
			>
		</section>`}renderPeriodSelect(e){return ew`<section>
			<span class="select-container">
				<label for="periods">Timeframe</label>
				<select class="select" name="periods" position="below" .value=${e} @change=${this.onPeriodChanged}>
					<option value="7|D" ?selected=${"7|D"===e}>1 week</option>
					<option value="1|M" ?selected=${"1|M"===e}>1 month</option>
					<option value="3|M" ?selected=${"3|M"===e}>3 months</option>
					<option value="6|M" ?selected=${"6|M"===e}>6 months</option>
					<option value="9|M" ?selected=${"9|M"===e}>9 months</option>
					<option value="1|Y" ?selected=${"1|Y"===e}>1 year</option>
					<option value="2|Y" ?selected=${"2|Y"===e}>2 years</option>
					<option value="4|Y" ?selected=${"4|Y"===e}>4 years</option>
					<option value="all" ?selected=${"all"===e}>Full history</option>
				</select>
			</span>
		</section>`}renderConfigSliceBy(){if(!this.isSliceBySupported)return ek;let{sliceBy:e}=this;return ew`<section>
			<span class="select-container"
				><label for="sliceBy">Slice By</label>
				<select
					class="select"
					name="sliceBy"
					position="below"
					.value=${e}
					@change=${this.onSliceByChanged}
				>
					<option value="author" ?selected=${"author"===e}>Author</option>
					<option value="branch" ?selected=${"branch"===e}>Branch</option>
				</select></span
			>
		</section>`}renderTimeframe(){let e;switch(this.config.period){case"7|D":e="Up to 1wk ago";break;case"1|M":e="Up to 1mo ago";break;case"3|M":e="Up to 3mo ago";break;case"6|M":e="Up to 6mo ago";break;case"9|M":e="Up to 9mo ago";break;case"1|Y":e="Up to 1yr ago";break;case"2|Y":e="Up to 2yr ago";break;case"4|Y":e="Up to 4yr ago";break;case"all":e="All time";break;default:return ek}return ew`<span class="details__timeframe" tabindex="0">${e}</span>`}onChartCommitSelected(e){null!=e.detail.id&&this.fireSelectDataPoint(e.detail)}onPeriodChanged(e){let t=e.target,o=t.options[t.selectedIndex].value;(function(e){if("all"===e)return;let[t,o]=e.split("|");if(isNaN(Number(t))||"D"!==o&&"M"!==o&&"Y"!==o)throw Error(`Invalid period: ${e}`)})(o),this._ipc.sendCommand(tn,{changes:{period:o}})}onSliceByChanged(e){let t=e.target,o=t.options[t.selectedIndex].value;(function(e){if("author"!==e&&"branch"!==e)throw Error(`Invalid slice by: ${e}`)})(o),this._ipc.sendCommand(tn,{changes:{sliceBy:o}})}fireSelectDataPoint(e){let{scope:t}=this;null!=t&&(this._fireSelectDataPointDebounced??=e7(e=>this._ipc.sendCommand(ts,{scope:t,...e}),250,{maxWait:"file"===t.type?500:void 0}),this._fireSelectDataPointDebounced(e))}};n2.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},n2.styles=[oX,oJ,o1,o2],n1([eL("#chart")],n2.prototype,"_chart",2),n1([eD()],n2.prototype,"_loading",2),n2=n1([eO("gl-timeline-app")],n2);export{n2 as GlTimelineApp};