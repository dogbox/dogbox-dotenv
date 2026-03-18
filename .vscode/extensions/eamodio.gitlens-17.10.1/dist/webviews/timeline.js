let e,t,o,i,r;var s,a,c,h,p,u,g,f,b,m,v,w,x={602(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},2379(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function o(e,t){for(var o,i="",r=0,s=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)o=e.charCodeAt(c);else if(47===o)break;else o=47;if(47===o){if(s===c-1||1===a);else if(s!==c-1&&2===a){if(i.length<2||2!==r||46!==i.charCodeAt(i.length-1)||46!==i.charCodeAt(i.length-2)){if(i.length>2){var h=i.lastIndexOf("/");if(h!==i.length-1){-1===h?(i="",r=0):r=(i=i.slice(0,h)).length-1-i.lastIndexOf("/"),s=c,a=0;continue}}else if(2===i.length||1===i.length){i="",r=0,s=c,a=0;continue}}t&&(i.length>0?i+="/..":i="..",r=2)}else i.length>0?i+="/"+e.slice(s+1,c):i=e.slice(s+1,c),r=c-s-1;s=c,a=0}else 46===o&&-1!==a?++a:a=-1}return i}var i={resolve:function(){for(var e,i,r="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?i=arguments[a]:(void 0===e&&(e=process.cwd()),i=e),t(i),0!==i.length&&(r=i+"/"+r,s=47===i.charCodeAt(0));if(r=o(r,!s),s)if(r.length>0)return"/"+r;else return"/";return r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var i=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return(0!==(e=o(e,!i)).length||i||(e="."),e.length>0&&r&&(e+="/"),i)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,o=0;o<arguments.length;++o){var r=arguments[o];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":i.normalize(e)},relative:function(e,o){if(t(e),t(o),e===o||(e=i.resolve(e))===(o=i.resolve(o)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var s=e.length,a=s-r,c=1;c<o.length&&47===o.charCodeAt(c);++c);for(var h=o.length-c,p=a<h?a:h,u=-1,g=0;g<=p;++g){if(g===p){if(h>p){if(47===o.charCodeAt(c+g))return o.slice(c+g+1);else if(0===g)return o.slice(c+g)}else a>p&&(47===e.charCodeAt(r+g)?u=g:0===g&&(u=0));break}var f=e.charCodeAt(r+g);if(f!==o.charCodeAt(c+g))break;47===f&&(u=g)}var b="";for(g=r+u+1;g<=s;++g)(g===s||47===e.charCodeAt(g))&&(0===b.length?b+="..":b+="/..");return b.length>0?b+o.slice(c+u):(c+=u,47===o.charCodeAt(c)&&++c,o.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var o=e.charCodeAt(0),i=47===o,r=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(o=e.charCodeAt(a))){if(!s){r=a;break}}else s=!1;return -1===r?i?"/":".":i&&1===r?"//":e.slice(0,r)},basename:function(e,o){if(void 0!==o&&"string"!=typeof o)throw TypeError('"ext" argument must be a string');t(e);var i,r=0,s=-1,a=!0;if(void 0!==o&&o.length>0&&o.length<=e.length){if(o.length===e.length&&o===e)return"";var c=o.length-1,h=-1;for(i=e.length-1;i>=0;--i){var p=e.charCodeAt(i);if(47===p){if(!a){r=i+1;break}}else -1===h&&(a=!1,h=i+1),c>=0&&(p===o.charCodeAt(c)?-1==--c&&(s=i):(c=-1,s=h))}return r===s?s=h:-1===s&&(s=e.length),e.slice(r,s)}for(i=e.length-1;i>=0;--i)if(47===e.charCodeAt(i)){if(!a){r=i+1;break}}else -1===s&&(a=!1,s=i+1);return -1===s?"":e.slice(r,s)},extname:function(e){t(e);for(var o=-1,i=0,r=-1,s=!0,a=0,c=e.length-1;c>=0;--c){var h=e.charCodeAt(c);if(47===h){if(!s){i=c+1;break}continue}-1===r&&(s=!1,r=c+1),46===h?-1===o?o=c:1!==a&&(a=1):-1!==o&&(a=-1)}return -1===o||-1===r||0===a||1===a&&o===r-1&&o===i+1?"":e.slice(o,r)},format:function(e){var t,o;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,o=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+o:t+"/"+o:o},parse:function(e){t(e);var o,i={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return i;var r=e.charCodeAt(0),s=47===r;s?(i.root="/",o=1):o=0;for(var a=-1,c=0,h=-1,p=!0,u=e.length-1,g=0;u>=o;--u){if(47===(r=e.charCodeAt(u))){if(!p){c=u+1;break}continue}-1===h&&(p=!1,h=u+1),46===r?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1)}return -1===a||-1===h||0===g||1===g&&a===h-1&&a===c+1?-1!==h&&(0===c&&s?i.base=i.name=e.slice(1,h):i.base=i.name=e.slice(c,h)):(0===c&&s?(i.name=e.slice(1,a),i.base=e.slice(1,h)):(i.name=e.slice(c,a),i.base=e.slice(c,h)),i.ext=e.slice(a,h)),c>0?i.dir=e.slice(0,c-1):s&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i},6047(e,t,o){let i=o(602),r=/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/y,s=/[\x00-\x1F\x7F-\x9F]{1,1000}/y,a=/(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F)(?:\u200d(?:\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F))*/yu,c=/[\x20-\x7E\xA0-\xFF]{1,1000}/y,h=/\p{M}+/gu,p={limit:1/0,ellipsis:""},u=(e,t={},o={})=>{let g=t.limit??1/0,f=t.ellipsis??"",b=t?.ellipsisWidth??(f?u(f,p,o).width:0),m=o.ansiWidth??0,v=o.controlWidth??0,w=o.ambiguousWidth??1,x=o.emojiWidth??2,_=o.fullWidthWidth??2,$=o.regularWidth??1,C=o.wideWidth??2,P=0,S=0,A=e.length,E=0,O=!1,T=A,D=Math.max(0,g-b),M=0,B=0,F=0,N=0;e:for(;;){if(B>M||S>=A&&S>P){for(let t of(E=0,(e.slice(M,B)||e.slice(P,S)).replaceAll(h,""))){let e=t.codePointAt(0)||0;if(F+(N=(0,i.isFullWidth)(e)?_:(0,i.isWide)(e)?C:w!==$&&(0,i.isAmbiguous)(e)?w:$)>D&&(T=Math.min(T,Math.max(M,P)+E)),F+N>g){O=!0;break e}E+=t.length,F+=N}M=B=0}if(S>=A)break;if(c.lastIndex=S,c.test(e)){if(F+(N=(E=c.lastIndex-S)*$)>D&&(T=Math.min(T,S+Math.floor((D-F)/$))),F+N>g){O=!0;break}F+=N,M=P,B=S,S=P=c.lastIndex;continue}if(r.lastIndex=S,r.test(e)){if(F+m>D&&(T=Math.min(T,S)),F+m>g){O=!0;break}F+=m,M=P,B=S,S=P=r.lastIndex;continue}if(s.lastIndex=S,s.test(e)){if(F+(N=(E=s.lastIndex-S)*v)>D&&(T=Math.min(T,S+Math.floor((D-F)/v))),F+N>g){O=!0;break}F+=N,M=P,B=S,S=P=s.lastIndex;continue}if(a.lastIndex=S,a.test(e)){if(F+x>D&&(T=Math.min(T,S)),F+x>g){O=!0;break}F+=x,M=P,B=S,S=P=a.lastIndex;continue}S+=1}return{width:O?D:F,index:O?T:A,truncated:O,ellipsed:O&&g>=b}};t.A=u}},_={};function $(e){var t=_[e];if(void 0!==t)return t.exports;var o=_[e]={exports:{}};return x[e](o,o.exports,$),o.exports}$.m=x,$.d=(e,t)=>{for(var o in t)$.o(t,o)&&!$.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},$.f={},$.e=e=>Promise.all(Object.keys($.f).reduce((t,o)=>($.f[o](e,t),t),[])),$.u=e=>"lib-billboard.js",$.miniCssF=e=>{},$.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch{if("object"==typeof window)return window}}(),$.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),$.p="#{root}/dist/webviews/",Object.defineProperty($,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}}),s={122:0},a=e=>{var t,o,{__webpack_esm_ids__:i,__webpack_esm_modules__:r,__webpack_esm_runtime__:a}=e,c=0;for(t in r)$.o(r,t)&&($.m[t]=r[t]);for(a&&a($);c<i.length;c++)o=i[c],$.o(s,o)&&s[o]&&s[o][0](),s[i[c]]=0},$.f.j=(e,t)=>{var o=$.o(s,e)?s[e]:void 0;if(0!==o)if(o)t.push(o[1]);else{var i=import($.p+$.u(e)).then(a,t=>{throw 0!==s[e]&&(s[e]=void 0),t}),i=Promise.race([i,new Promise(t=>o=s[e]=[t])]);t.push(o[1]=i)}};let C=globalThis,P=C.ShadowRoot&&(void 0===C.ShadyCSS||C.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,S=Symbol(),A=new WeakMap;let n=class n{constructor(e,t,o){if(this._$cssResult$=!0,o!==S)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(P&&void 0===e){let o=void 0!==t&&1===t.length;o&&(e=A.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&A.set(t,e))}return e}toString(){return this.cssText}};let E=e=>new n("string"==typeof e?e:e+"",void 0,S),O=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]),e,S),T=P?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return E(t)})(e):e,{is:D,defineProperty:M,getOwnPropertyDescriptor:B,getOwnPropertyNames:F,getOwnPropertySymbols:N,getPrototypeOf:j}=Object,U=globalThis,q=U.trustedTypes,V=q?q.emptyScript:"",W=U.reactiveElementPolyfillSupport,G={toAttribute(e,t){switch(t){case Boolean:e=e?V:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},K=(e,t)=>!D(e,t),Y={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:K};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),i=this.getPropertyDescriptor(e,o,t);void 0!==i&&M(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){let{get:i,set:r}=B(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){let s=i?.call(this);r?.call(this,t),this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Y}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=j(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...F(e),...N(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,o]of t)this.elementProperties.set(e,o)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let o of new Set(e.flat(1/0).reverse()))t.unshift(T(o));else void 0!==e&&t.push(T(e));return t}static _$Eu(e,t){let o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(P)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let o of t){let t=document.createElement("style"),i=C.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=o.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(void 0!==i&&!0===o.reflect){let r=(void 0!==o.converter?.toAttribute?o.converter:G).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let o=this.constructor,i=o._$Eh.get(e);if(void 0!==i&&this._$Em!==i){let e=o.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:G;this._$Em=i;let s=r.fromAttribute(t,e.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(e,t,o,i=!1,r){if(void 0!==e){let s=this.constructor;if(!1===i&&(r=this[e]),!(((o??=s.getPropertyOptions(e)).hasChanged??K)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:i,wrapped:r},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==r||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,o]of e){let{wrapped:e}=o,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,o,i)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,W?.({ReactiveElement:y}),(U.reactiveElementVersions??=[]).push("2.1.2");let X=globalThis,J=e=>e,Q=X.trustedTypes,ee=Q?Q.createPolicy("lit-html",{createHTML:e=>e}):void 0,et="$lit$",eo=`lit$${Math.random().toFixed(9).slice(2)}$`,ei="?"+eo,er=`<${ei}>`,es=document,en=()=>es.createComment(""),ea=e=>null===e||"object"!=typeof e&&"function"!=typeof e,el=Array.isArray,ec=e=>el(e)||"function"==typeof e?.[Symbol.iterator],eh=`[ 	
\f\r]`,ed=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ep=/-->/g,eu=/>/g,eg=RegExp(`>|${eh}(?:([^\\s"'>=/]+)(${eh}*=${eh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ef=/'/g,eb=/"/g,em=/^(?:script|style|textarea|title)$/i,ev=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),ey=ev(1),ew=(ev(2),ev(3),Symbol.for("lit-noChange")),ex=Symbol.for("lit-nothing"),ek=new WeakMap,e_=es.createTreeWalker(es,129);function e$(e,t){if(!el(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ee?ee.createHTML(t):t}let eC=(e,t)=>{let o=e.length-1,i=[],r,s=2===t?"<svg>":3===t?"<math>":"",a=ed;for(let t=0;t<o;t++){let o=e[t],c,h,p=-1,u=0;for(;u<o.length&&(a.lastIndex=u,null!==(h=a.exec(o)));)u=a.lastIndex,a===ed?"!--"===h[1]?a=ep:void 0!==h[1]?a=eu:void 0!==h[2]?(em.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=eg):void 0!==h[3]&&(a=eg):a===eg?">"===h[0]?(a=r??ed,p=-1):void 0===h[1]?p=-2:(p=a.lastIndex-h[2].length,c=h[1],a=void 0===h[3]?eg:'"'===h[3]?eb:ef):a===eb||a===ef?a=eg:a===ep||a===eu?a=ed:(a=eg,r=void 0);let g=a===eg&&e[t+1].startsWith("/>")?" ":"";s+=a===ed?o+er:p>=0?(i.push(c),o.slice(0,p)+et+o.slice(p)+eo+g):o+eo+(-2===p?t:g)}return[e$(e,s+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};let lit_html_S=class lit_html_S{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,s=0,a=e.length-1,c=this.parts,[h,p]=eC(e,t);if(this.el=lit_html_S.createElement(h,o),e_.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=e_.nextNode())&&c.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(et)){let t=p[s++],o=i.getAttribute(e).split(eo),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:a[2],strings:o,ctor:"."===a[1]?I:"?"===a[1]?L:"@"===a[1]?z:H}),i.removeAttribute(e)}else e.startsWith(eo)&&(c.push({type:6,index:r}),i.removeAttribute(e));if(em.test(i.tagName)){let e=i.textContent.split(eo),t=e.length-1;if(t>0){i.textContent=Q?Q.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],en()),e_.nextNode(),c.push({type:2,index:++r});i.append(e[t],en())}}}else if(8===i.nodeType)if(i.data===ei)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(eo,e+1));)c.push({type:7,index:r}),e+=eo.length-1}r++}}static createElement(e,t){let o=es.createElement("template");return o.innerHTML=e,o}};function eP(e,t,o=e,i){if(t===ew)return t;let r=void 0!==i?o._$Co?.[i]:o._$Cl,s=ea(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e))._$AT(e,o,i),void 0!==i?(o._$Co??=[])[i]=r:o._$Cl=r),void 0!==r&&(t=eP(e,r._$AS(e,t.values),r,i)),t}let R=class R{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??es).importNode(t,!0);e_.currentNode=i;let r=e_.nextNode(),s=0,a=0,c=o[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new k(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new Z(r,this,e)),this._$AV.push(t),c=o[++a]}s!==c?.index&&(r=e_.nextNode(),s++)}return e_.currentNode=es,i}p(e){let t=0;for(let o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}};let k=class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=ex,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){ea(e=eP(this,e,t))?e===ex||null==e||""===e?(this._$AH!==ex&&this._$AR(),this._$AH=ex):e!==this._$AH&&e!==ew&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ec(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ex&&ea(this._$AH)?this._$AA.nextSibling.data=e:this.T(es.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=lit_html_S.createElement(e$(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{let e=new R(i,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=ek.get(e.strings);return void 0===t&&ek.set(e.strings,t=new lit_html_S(e)),t}k(e){el(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,i=0;for(let r of e)i===t.length?t.push(o=new k(this.O(en()),this.O(en()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=J(e).nextSibling;J(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let H=class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,r){this.type=1,this._$AH=ex,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ex}_$AI(e,t=this,o,i){let r=this.strings,s=!1;if(void 0===r)(s=!ea(e=eP(this,e,t,0))||e!==this._$AH&&e!==ew)&&(this._$AH=e);else{let i,a,c=e;for(e=r[0],i=0;i<r.length-1;i++)(a=eP(this,c[o+i],t,i))===ew&&(a=this._$AH[i]),s||=!ea(a)||a!==this._$AH[i],a===ex?e=ex:e!==ex&&(e+=(a??"")+r[i+1]),this._$AH[i]=a}s&&!i&&this.j(e)}j(e){e===ex?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let I=class I extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ex?void 0:e}};let L=class L extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ex)}};let z=class z extends H{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){if((e=eP(this,e,t,0)??ex)===ew)return;let o=this._$AH,i=e===ex&&o!==ex||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==ex&&(o===ex||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let Z=class Z{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){eP(this,e)}};let eS=X.litHtmlPolyfillSupport;eS?.(lit_html_S,k),(X.litHtmlVersions??=[]).push("3.3.2");let eA=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{let i=o?.renderBefore??t,r=i._$litPart$;if(void 0===r){let e=o?.renderBefore??null;i._$litPart$=r=new k(t.insertBefore(en(),e),e,void 0,o??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ew}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eA.litElementHydrateSupport?.({LitElement:lit_element_i});let eE=eA.litElementPolyfillSupport;eE?.({LitElement:lit_element_i}),(eA.litElementVersions??=[]).push("4.2.2");let ez=e=>(t,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eO={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:K};function eT(e){return(t,o)=>{let i;return"object"==typeof o?((e=eO,t,o)=>{let{kind:i,metadata:r}=o,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),s.set(o.name,e),"accessor"===i){let{name:i}=o;return{set(o){let r=t.get.call(this);t.set.call(this,o),this.requestUpdate(i,r,e,!0,o)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){let{name:i}=o;return function(o){let r=this[i];t.call(this,o),this.requestUpdate(i,r,e,!0,o)}}throw Error("Unsupported decorator location: "+i)})(e,t,o):(i=t.hasOwnProperty(o),t.constructor.createProperty(o,e),i?Object.getOwnPropertyDescriptor(t,o):void 0)}}function eD(e){return eT({...e,state:!0,attribute:!1})}let eR=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,o),o);function eI(e,t){return(o,i,r)=>{let s=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:t,set:a}="object"==typeof i?o:r??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return eR(o,i,{get(){let e=t.call(this);return void 0===e&&(null!==(e=s(this))||this.hasUpdated)&&a.call(this,e),e}})}return eR(o,i,{get(){return s(this)}})}}let eL="0000000000000000000000000000000000000000:",eM=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,eB=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,eF=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,eN=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,ej=/(^[0-9a-f]{40}([\^@~:]\S*)?$)|(^[0]{40}(:|-)$)/,eU=/^(.*?)([\^@~:].*)?$/,eq=/^[0]{40}(?:[\^@~:]\S*)?:?$/,eH=/^[0]{40}([\^@~]\S*)?:$/;function eV(e,t){return!!t&&e.test(t)}function eW(e,t=!1){return"0000000000000000000000000000000000000000"===e||e===eL||!t&&eV(eq,e)}let eG=7;function eK(e,t){if("0000000000000000000000000000000000000000-"===e)return"(deleted)";if(!e)return t?.strings?.working??"";if(eW(e))return!function(e,t=!1){return e===eL||!t&&eV(eH,e)}(e)?t?.strings?.uncommitted??"Working Tree":t?.strings?.uncommittedStaged??"Index";if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return eB.test(e);case"qualified-double-dot":return eF.test(e);case"qualified-triple-dot":return eN.test(e);default:return eM.test(e)}}(e)||!eV(ej,e))return e;let o=Math.max(5,eG),i=eU.exec(e);if(null!=i){let[,e,t]=i;if(null!=t)return`${e.substring(0,o)}${t}`}return e.substring(0,o)}var eZ=((c=eZ||{})[c.VerificationRequired=-1]="VerificationRequired",c[c.Community=0]="Community",c[c.DeprecatedPreview=1]="DeprecatedPreview",c[c.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",c[c.Trial=3]="Trial",c[c.TrialExpired=4]="TrialExpired",c[c.TrialReactivationEligible=5]="TrialReactivationEligible",c[c.Paid=6]="Paid",c);let eY=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,eX=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,eJ=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],eQ=new Map,e0=new Map;function e1(e,t){let o=new Date(e.getTime());for(let[e,i]of Object.entries(t))if(i)switch(e){case"years":o.setFullYear(o.getFullYear()+i);break;case"months":o.setMonth(o.getMonth()+i);break;case"days":o.setDate(o.getDate()+i);break;case"hours":o.setHours(o.getHours()+i);break;case"minutes":o.setMinutes(o.getMinutes()+i);break;case"seconds":o.setSeconds(o.getSeconds()+i)}return o}function e2(t,o,i,r=!0){o=o??void 0;let s=`${i??""}:${o}`,a=eQ.get(s);if(null==a){let t=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=eX.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}let o={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(eY))if(null!=t){for(let[e,i]of Object.entries(t))if(null!=i)switch(e){case"year":o.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":"DD"===i?o.day="2-digit":o.day="numeric";break;case"weekday":switch(i.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===i.length?"2-digit":"numeric",o.hour12="hh"===i||"h"===i;break;case"minute":o.minute=2===i.length?"2-digit":"numeric";break;case"second":o.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===i.length?"long":"short"}}return o}(o);a=new Intl.DateTimeFormat(null==i?e:"system"===i?void 0:[i],t),r&&eQ.set(s,a)}if(null==o||eX.test(o))return a.format(t);let c=a.formatToParts(t);return o.replace(eY,(o,s,a,h,p,u,g,f,b,m,v,w,x,_,$)=>{if(null!=s)return s.substring(1,s.length-1);for(let[o,s]of Object.entries($)){if(null==s)continue;let a=c.find(e=>e.type===o);if("Do"===s&&a?.type==="day")return function(e){let t=e%100;return`${e}${e5[(t-20)%10]??e5[t]??e5[0]}`}(Number(a.value));if("a"===s&&a?.type==="dayPeriod"){let o=(function(t){let o=`${i??""}:time:${t}`,s=eQ.get(o);if(null==s){let a;a=null==i?e:"system"===i?void 0:[i],s=new Intl.DateTimeFormat(a,{localeMatcher:"best fit",timeStyle:t}),r&&eQ.set(o,s)}return s})("short").formatToParts(t).find(e=>"dayPeriod"===e.type);return` ${(o??a)?.value??""}`}return a?.value??""}return""})}let e5=["th","st","nd","rd"];function e8(t,o){null==t&&(t="decimal");let i=`${o??""}:${t}`,r=e0.get(i);if(null==r){let s={localeMatcher:"best fit",style:t};r=new Intl.NumberFormat(null==o?e:"system"===o?void 0:[o],s),e0.set(i,r)}return r.format}let e3=["student","pro","advanced","teams","enterprise"];function e4(e){var t;return t=e.plan.actual.id,e3.includes(t)}function e6(e,t,o){let i,r,s,a,c,h,p,u,g,f,b=0;null!=o&&({edges:h,maxWait:p,signal:u,aggregator:g}=o);let m="leading"===(h??="trailing")||"both"===h,v="trailing"===h||"both"===h;function w(){if(null!=i){b=Date.now();let t=i,o=f;return f=void 0,i=void 0,s=e.apply(o,t)}}function x(){null!=a&&(clearTimeout(a),a=void 0)}function _(){null!=c&&(clearTimeout(c),c=void 0)}function $(){x(),_(),f=void 0,i=void 0,r=void 0,b=0}function C(...e){if(u?.aborted)return;let o=Date.now();null!=g&&null!=i?i=g(i,e):(f=this,i=e);let h=null==a&&null==c;r=o,x();let _=Date.now();if(r=_,a=setTimeout(()=>{a=void 0,function e(){let o,i,s=Date.now();if(o=s-(r??0),i=s-b,null==r||o>=t||o<0||null!=p&&i>=p){v&&w(),$();return}a=setTimeout(()=>{a=void 0,e()},t-(s-(r??0)))}()},t),null!=p&&!c){0===b&&(b=_);let e=p-(_-b);e>0?c=setTimeout(()=>{c=void 0,v&&null!=i&&w(),b=Date.now()},e):(v&&null!=i&&w(),$())}return m&&h?w():s}return C.cancel=$,C.flush=function(){return x(),_(),w()},C.pending=function(){return null!=a||null!=c},u?.addEventListener("abort",$,{once:!0}),C}var e7=$(2379);let e9=navigator?.userAgentData?.platform,te=navigator.userAgent;"Linux"===e9||te.includes("Linux"),"macOS"===e9||te.includes("Macintosh"),"Windows"===e9||te.includes("Windows");let IpcCall=class IpcCall{constructor(e,t,o=!1){this.scope=e,this.reset=o,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,o){super(e,t,o),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let tt="timeline",to=new IpcRequest(tt,"ref/choose"),ti=new IpcRequest(tt,"path/choose"),tr=new IpcCommand(tt,"point/open"),ts=new IpcCommand(tt,"config/update"),tn=new IpcCommand(tt,"scope/update"),ta=new IpcNotification(tt,"didChange");let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,o,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=o,this.subscribe=i??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,o,i){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=o,this.subscribe=i??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,o){super(void 0!==t.context?t.initialValue:o),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:o}]of this.subscriptions)t.has(e)||(t.add(e),o.dispatchEvent(new context_request_event_s(this.context,o,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function tl({context:e}){return(t,o)=>{let i=new WeakMap;if("object"==typeof o)return{get(){return t.get.call(this)},set(e){return i.get(this).setValue(e),t.set.call(this,e)},init(t){return i.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let r;t.constructor.addInitializer(t=>{i.set(t,new context_provider_i(t,{context:e}))});let s=Object.getOwnPropertyDescriptor(t,o);if(void 0===s){let e=new WeakMap;r={get(){return e.get(this)},set(t){i.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=s.set;r={...s,set(t){i.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,o,r)}}}function tc({context:e,subscribe:t}){return(o,i)=>{"object"==typeof i?i.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{o.set.call(this,e)},subscribe:t})}):o.constructor.addInitializer(o=>{new context_consumer_s(o,{context:e,callback:e=>{o[i]=e},subscribe:t})})}}let th=new IpcRequest("core","webview/ready"),td=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let tp=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let tu=new IpcCommand("core","telemetry/sendEvent"),tg=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let tf=new IpcCommand("core","webview/focus/didChange"),tb=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let tm=new WeakMap;function tv(e,t){return function(o,i,r){let s=tm.get(o.constructor);null==s&&tm.set(o.constructor,s=[]),s.push({method:r.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,o){let i=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...o,detail:t});return this.dispatchEvent(i),i}update(e){let t=tm.get(this.constructor);if(null!=t)for(let{keys:o,method:i,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;let t=o.filter(t=>e.has(t));t.length&&i.call(this,t)}super.update(e)}};var ty=$(6047);function tw(e){let t=.001*performance.now(),o=Math.floor(t),i=Math.floor(t%1*1e9);return void 0!==e&&(o-=e[0],(i-=e[1])<0&&(o--,i+=1e9)),[o,i]}var tx=((h=tx||{})[h.Hash=35]="Hash",h[h.Slash=47]="Slash",h[h.Digit0=48]="Digit0",h[h.Digit1=49]="Digit1",h[h.Digit2=50]="Digit2",h[h.Digit3=51]="Digit3",h[h.Digit4=52]="Digit4",h[h.Digit5=53]="Digit5",h[h.Digit6=54]="Digit6",h[h.Digit7=55]="Digit7",h[h.Digit8=56]="Digit8",h[h.Digit9=57]="Digit9",h[h.Backslash=92]="Backslash",h[h.A=65]="A",h[h.B=66]="B",h[h.C=67]="C",h[h.D=68]="D",h[h.E=69]="E",h[h.F=70]="F",h[h.Z=90]="Z",h[h.a=97]="a",h[h.b=98]="b",h[h.c=99]="c",h[h.d=100]="d",h[h.e=101]="e",h[h.f=102]="f",h[h.z=122]="z",h),tk=((p=tk||{}).AngleBracketLeftHeavy="❰",p.AngleBracketRightHeavy="❱",p.ArrowBack="↩",p.ArrowDown="↓",p.ArrowDownUp="⇵",p.ArrowDropRight="⤷",p.ArrowHeadRight="➤",p.ArrowLeft="←",p.ArrowLeftDouble="⇐",p.ArrowLeftRight="↔",p.ArrowLeftRightDouble="⇔",p.ArrowLeftRightDoubleStrike="⇎",p.ArrowLeftRightLong="⟷",p.ArrowRight="→",p.ArrowRightDouble="⇒",p.ArrowRightHollow="⇨",p.ArrowUp="↑",p.ArrowUpDown="⇅",p.ArrowUpRight="↗",p.ArrowsHalfLeftRight="⇋",p.ArrowsHalfRightLeft="⇌",p.ArrowsLeftRight="⇆",p.ArrowsRightLeft="⇄",p.Asterisk="∗",p.Bullseye="◎",p.Check="✔",p.Dash="—",p.Dot="•",p.Ellipsis="…",p.EnDash="–",p.Envelope="✉",p.EqualsTriple="≡",p.Flag="⚑",p.FlagHollow="⚐",p.MiddleEllipsis="⋯",p.MuchLessThan="≪",p.MuchGreaterThan="≫",p.Pencil="✎",p.Space=" ",p.SpaceThin=" ",p.SpaceThinnest=" ",p.SquareWithBottomShadow="❏",p.SquareWithTopShadow="❐",p.Warning="⚠",p.ZeroWidthSpace="​",p);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var t_=((u=t_||{}).File="file",u.Git="git",u.GitHub="github",u.GitLens="gitlens",u.GitLensAIMarkdown="gitlens-ai-markdown",u.PRs="pr",u.Remote="vscode-remote",u.Vsls="vsls",u.VslsScc="vsls-scc",u.Virtual="vscode-vfs",u);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let t$="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",tC=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${t$}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${t$}`,graph:`https://gitkraken.com/solutions/commit-graph?${t$}`,launchpad:`https://gitkraken.com/solutions/launchpad?${t$}`,platform:`https://gitkraken.com/devex?${t$}`,pricing:`https://gitkraken.com/gitlens/pricing?${t$}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${t$}`,security:`https://help.gitkraken.com/gitlens/security?${t$}`,workspaces:`https://gitkraken.com/solutions/workspaces?${t$}`,cli:`https://gitkraken.com/cli?${t$}`,browserExtension:`https://gitkraken.com/browser-extension?${t$}`,desktop:`https://gitkraken.com/git-client?${t$}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${t$}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${t$}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t$}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${t$}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${t$}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${t$}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t$}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${t$}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${t$}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t$}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${t$}#improve-workflows-with-integrations`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${t$}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${t$}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${t$}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${t$}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${t$}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${t$}`});function tP(e){let[t,o]=tw(e);return 1e3*t+Math.floor(o/1e6)}let tS={ellipsisWidth:0,limit:0x40000000-1},tA={ansiWidth:0,controlWidth:0,ambiguousWidth:1,emojiWidth:2,fullWidthWidth:2,regularWidth:1,wideWidth:2};function tE(e,t,i){let r;if(null==i)return o??=e8(),`${o(t)} ${e}${1===t?"":"s"}`;let s=1===t?e:i.plural??`${e}s`;return i.only?s:(0===t?r=i.zero??t:!1===i.format?r=t:null!=i.format?r=i.format(t):(o??=e8(),r=o(t)),`${r}${i.infix??" "}${s}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var tz=((g=tz||{})[g.Off=0]="Off",g[g.Error=1]="Error",g[g.Warn=2]="Warn",g[g.Info=3]="Info",g[g.Debug=4]="Debug",g);let tO=["accessToken","password","token"],tT=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,o=!1){if(null!=e.sanitizeKeys)for(let t of tO)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(tO);this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return!!this.isDebugging||(null==e?this.level>0:this.level>=tD(e))}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=tD(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let o;this.level<4&&!this.isDebugging||("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...o){let i;if(!(this.level<1)||this.isDebugging){if(null==(i=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(i=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,o)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let o;this.level<3&&!this.isDebugging||("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let o;this.level<2&&!this.isDebugging||("string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,(e,o)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(o=t(e,o)),this.provider?.sanitizer!=null&&(o=this.provider.sanitizer(e,o)),o))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let o=t.map(e=>this.toLoggable(e)).join(", ");return 0!==o.length?` \u2014 ${o}`:""}};function tD(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let tR=new WeakMap,tI={enabled:e=>tT.enabled(e),log:(e,t,o,...i)=>{switch(e){case"error":tT.error(void 0,t,o,...i);break;case"warn":tT.warn(t,o,...i);break;case"info":tT.log(t,o,...i);break;default:tT.debug(t,o,...i)}}},tL=0x40000000-1;function tM(){let e=0;return{get current(){return e},next:function(){return e===tL&&(e=0),++e},reset:function(){e=0}}}let tB=tM(),tF=new Map;function tN(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function tj(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let o=t?tB.current:void 0,i=tB.next();return{scopeId:i,prevScopeId:o,prefix:`${tN(i,o)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=tj(e,void 0),tT.configure({name:e,createChannel:function(e){return{name:e,appendLine:tT.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?tT.log(this.scope,e,...t):tT.log(e,t.shift(),...t)}};let tU="home";new IpcRequest(tU,"launchpad/summary"),new IpcRequest(tU,"overview/active"),new IpcRequest(tU,"overview/inactive"),new IpcRequest(tU,"overviewFilter"),new IpcCommand(tU,"overview/repository/change"),new IpcNotification(tU,"overview/repository/didChange"),new IpcCommand(tU,"previewEnabled/toggle"),new IpcCommand(tU,"section/collapse"),new IpcCommand(tU,"walkthrough/dismiss"),new IpcNotification(tU,"ai/allAccess/didChange"),new IpcNotification(tU,"mcp/didChange"),new IpcCommand(tU,"ai/allAccess/dismiss"),new IpcCommand(tU,"overview/filter/set"),new IpcCommand(tU,"openInGraph"),new IpcNotification(tU,"repositories/didCompleteDiscovering"),new IpcNotification(tU,"previewEnabled/didChange"),new IpcNotification(tU,"repository/wip/didChange"),new IpcNotification(tU,"repositories/didChange"),new IpcNotification(tU,"walkthroughProgress/didChange"),new IpcNotification(tU,"integrations/didChange"),new IpcNotification(tU,"launchpad/didChange");let tq=new IpcNotification(tU,"subscription/didChange");new IpcNotification(tU,"org/settings/didChange"),new IpcNotification(tU,"home/ownerFilter/didChange"),new IpcNotification(tU,"account/didFocus");let tH="graph";new IpcCommand(tH,"chooseRepository"),new IpcCommand(tH,"dblclick"),new IpcCommand(tH,"avatars/get"),new IpcCommand(tH,"refs/metadata/get"),new IpcCommand(tH,"rows/get"),new IpcCommand(tH,"pullRequest/openDetails"),new IpcCommand(tH,"row/action"),new IpcCommand(tH,"search/openInView"),new IpcCommand(tH,"search/cancel"),new IpcCommand(tH,"columns/update"),new IpcCommand(tH,"refs/update/visibility"),new IpcCommand(tH,"filters/update/excludeTypes"),new IpcCommand(tH,"configuration/update"),new IpcCommand(tH,"search/update/mode"),new IpcCommand(tH,"filters/update/includedRefs"),new IpcCommand(tH,"selection/update"),new IpcRequest(tH,"jumpToHead"),new IpcRequest(tH,"chooseRef"),new IpcRequest(tH,"chooseComparison"),new IpcRequest(tH,"chooseAuthor"),new IpcRequest(tH,"chooseFile"),new IpcRequest(tH,"rows/ensure"),new IpcRequest(tH,"search/history/get"),new IpcRequest(tH,"search/history/store"),new IpcRequest(tH,"search/history/delete"),new IpcRequest(tH,"counts"),new IpcRequest(tH,"row/hover/get"),new IpcRequest(tH,"search"),new IpcNotification(tH,"repositories/integration/didChange"),new IpcNotification(tH,"didChange",!0),new IpcNotification(tH,"configuration/didChange");let tV=new IpcNotification(tH,"subscription/didChange");new IpcNotification(tH,"org/settings/didChange"),new IpcNotification(tH,"avatars/didChange"),new IpcNotification(tH,"mcp/didChange"),new IpcNotification(tH,"branchState/didChange"),new IpcNotification(tH,"refs/didChangeMetadata"),new IpcNotification(tH,"columns/didChange"),new IpcNotification(tH,"scrollMarkers/didChange"),new IpcNotification(tH,"refs/didChangeVisibility"),new IpcNotification(tH,"rows/didChange"),new IpcNotification(tH,"rows/stats/didChange"),new IpcNotification(tH,"selection/didChange"),new IpcNotification(tH,"workingTree/didChange"),new IpcNotification(tH,"didSearch"),new IpcNotification(tH,"didFetch"),new IpcNotification(tH,"featurePreview/didStart");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(tq.is(e)||tV.is(e)||ta.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let o=`${e}|${t}`,i=this._promos.get(o);return null==i&&(i=this.ipc.sendRequest(tp,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(o,i)),await i}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(tu,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};var tW=Uint8Array,tG=Uint16Array,tK=Int32Array,tZ=new tW([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tY=new tW([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tX=new tW([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tJ=function(e,t){for(var o=new tG(31),i=0;i<31;++i)o[i]=t+=1<<e[i-1];for(var r=new tK(o[30]),i=1;i<30;++i)for(var s=o[i];s<o[i+1];++s)r[s]=s-o[i]<<5|i;return{b:o,r:r}},tQ=tJ(tZ,2),t0=tQ.b,t1=tQ.r;t0[28]=258,t1[258]=28;var t2=tJ(tY,0),t5=t2.b;t2.r;for(var t8=new tG(32768),t3=0;t3<32768;++t3){var t4=(43690&t3)>>1|(21845&t3)<<1;t4=(61680&(t4=(52428&t4)>>2|(13107&t4)<<2))>>4|(3855&t4)<<4,t8[t3]=((65280&t4)>>8|(255&t4)<<8)>>1}for(var t6=function(e,t,o){for(var i,r=e.length,s=0,a=new tG(t);s<r;++s)e[s]&&++a[e[s]-1];var c=new tG(t);for(s=1;s<t;++s)c[s]=c[s-1]+a[s-1]<<1;if(o){i=new tG(1<<t);var h=15-t;for(s=0;s<r;++s)if(e[s])for(var p=s<<4|e[s],u=t-e[s],g=c[e[s]-1]++<<u,f=g|(1<<u)-1;g<=f;++g)i[t8[g]>>h]=p}else for(s=0,i=new tG(r);s<r;++s)e[s]&&(i[s]=t8[c[e[s]-1]++]>>15-e[s]);return i},t7=new tW(288),t3=0;t3<144;++t3)t7[t3]=8;for(var t3=144;t3<256;++t3)t7[t3]=9;for(var t3=256;t3<280;++t3)t7[t3]=7;for(var t3=280;t3<288;++t3)t7[t3]=8;for(var t9=new tW(32),t3=0;t3<32;++t3)t9[t3]=5;var oe=t6(t7,9,1),ot=t6(t9,5,1),oo=function(e){for(var t=e[0],o=1;o<e.length;++o)e[o]>t&&(t=e[o]);return t},oi=function(e,t,o){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(7&t)&o},or=function(e,t){var o=t/8|0;return(e[o]|e[o+1]<<8|e[o+2]<<16)>>(7&t)},os=function(e,t,o){return(null==t||t<0)&&(t=0),(null==o||o>e.length)&&(o=e.length),new tW(e.subarray(t,o))},on=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],oa=function(e,t,o){var i=Error(t||on[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,oa),!o)throw i;return i},ol=function(e,t,o,i){var r=e.length,s=i?i.length:0;if(!r||t.f&&!t.l)return o||new tW(0);var a=!o,c=a||2!=t.i,h=t.i;a&&(o=new tW(3*r));var p=function(e){var t=o.length;if(e>t){var i=new tW(Math.max(2*t,e));i.set(o),o=i}},u=t.f||0,g=t.p||0,f=t.b||0,b=t.l,m=t.d,v=t.m,w=t.n,x=8*r;do{if(!b){u=oi(e,g,1);var _=oi(e,g+1,3);if(g+=3,_)if(1==_)b=oe,m=ot,v=9,w=5;else if(2==_){var $=oi(e,g,31)+257,C=oi(e,g+10,15)+4,P=$+oi(e,g+5,31)+1;g+=14;for(var S=new tW(P),A=new tW(19),E=0;E<C;++E)A[tX[E]]=oi(e,g+3*E,7);g+=3*C;for(var O=oo(A),T=(1<<O)-1,D=t6(A,O,1),E=0;E<P;){var M=D[oi(e,g,T)];g+=15&M;var B=M>>4;if(B<16)S[E++]=B;else{var F=0,N=0;for(16==B?(N=3+oi(e,g,3),g+=2,F=S[E-1]):17==B?(N=3+oi(e,g,7),g+=3):18==B&&(N=11+oi(e,g,127),g+=7);N--;)S[E++]=F}}var j=S.subarray(0,$),U=S.subarray($);v=oo(j),w=oo(U),b=t6(j,v,1),m=t6(U,w,1)}else oa(1);else{var B=((g+7)/8|0)+4,q=e[B-4]|e[B-3]<<8,V=B+q;if(V>r){h&&oa(0);break}c&&p(f+q),o.set(e.subarray(B,V),f),t.b=f+=q,t.p=g=8*V,t.f=u;continue}if(g>x){h&&oa(0);break}}c&&p(f+131072);for(var W=(1<<v)-1,G=(1<<w)-1,K=g;;K=g){var F=b[or(e,g)&W],Y=F>>4;if((g+=15&F)>x){h&&oa(0);break}if(F||oa(2),Y<256)o[f++]=Y;else if(256==Y){K=g,b=null;break}else{var X=Y-254;if(Y>264){var E=Y-257,J=tZ[E];X=oi(e,g,(1<<J)-1)+t0[E],g+=J}var Q=m[or(e,g)&G],ee=Q>>4;Q||oa(3),g+=15&Q;var U=t5[ee];if(ee>3){var J=tY[ee];U+=or(e,g)&(1<<J)-1,g+=J}if(g>x){h&&oa(0);break}c&&p(f+131072);var et=f+X;if(f<U){var eo=s-U,ei=Math.min(U,et);for(eo+f<0&&oa(3);f<ei;++f)o[f]=i[eo+f]}for(;f<et;++f)o[f]=o[f-U]}}t.l=b,t.p=K,t.b=f,t.f=u,b&&(u=1,t.m=v,t.d=m,t.n=w)}while(!u)return f!=o.length&&a?os(o,0,f):o.subarray(0,f)},oc=new tW(0),oh="u">typeof TextDecoder&&new TextDecoder;try{oh.decode(oc,{stream:!0})}catch{}var od=function(e){for(var t="",o=0;;){var i=e[o++],r=(i>127)+(i>223)+(i>239);if(o+r>e.length)return{s:t,r:os(e,o-1)};r?3==r?t+=String.fromCharCode(55296|(i=((15&i)<<18|(63&e[o++])<<12|(63&e[o++])<<6|63&e[o++])-65536)>>10,56320|1023&i):1&r?t+=String.fromCharCode((31&i)<<6|63&e[o++]):t+=String.fromCharCode((15&i)<<12|(63&e[o++])<<6|63&e[o++]):t+=String.fromCharCode(i)}};function op(e,t){if(t){for(var o="",i=0;i<e.length;i+=16384)o+=String.fromCharCode.apply(null,e.subarray(i,i+16384));return o}if(oh)return oh.decode(e);var r=od(e),s=r.s,o=r.r;return o.length&&oa(8),s}"function"==typeof queueMicrotask&&queueMicrotask;let ou=/\(([\s\S]*)\)/,og=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,of=/\s?=.*$/;function ob(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function om(e,t=!1){let o,i,r,s,a,c=0,h=!1,p=!1,u=!0;null!=e&&({args:o,if:i,enter:r,exit:s,prefix:a,logThreshold:c=0,scoped:h=!0,singleLine:p=!1,timed:u=!0}=e),c>0&&(p=!0,u=!0),u&&(h=!0);let g=t?tT.debug:tT.log,f=tT.isDebugging?"debug":"info";return(e,t,b)=>{let m,v;if("function"==typeof b.value?(m=b.value,v="value"):"function"==typeof b.get&&(m=b.get,v="get"),null==m||null==v)throw Error("Not supported");let w=!1!==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),o=(t=(t=t.replace(og,"")||t).slice(0,t.indexOf("{"))).indexOf("("),i=t.indexOf(")");o=o>=0?o+1:0,i=i>0?i:t.indexOf("="),t=t.slice(o,i),t=`(${t})`;let r=ou.exec(t);return null!=r?r[1].split(",").map(e=>e.trim().replace(of,"")):[]}(m):[];b[v]=function(...e){var b;let v,x;if(!tT.enabled(f)||null!=i&&!i.apply(this,e))return m.apply(this,e);let _=tB.current,$=tB.next(),C=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let o=t?.name??"",i=o.indexOf("_");-1!==i&&(o=o.substring(i+1));let r=t;for(;null!=r;){let t=tR.get(r);if(null!=t)return t(e,o);r=Object.getPrototypeOf(r)}return o}(this):void 0,P=C?h?`${tN($,_)} ${C}.${t}`:`${C}.${t}`:t;null!=a&&(P=a({id:$,instance:this,instanceName:C??"",name:t,prefix:P},...e)),h&&(b={scopeId:$,prevScopeId:_,prefix:P},b={prevScopeId:tB.current,...b},tF.set($,b),v=b);let S=null!=r?r(...e):"";if(!1===o||0===e.length)x="",p||g.call(tT,`${P}${S}`);else{let t,i,r,s;x="";let a=-1;for(s of e){if(i=w[++a],null!=(t=o?.[a])){if("boolean"==typeof t)continue;if(x.length>0&&(x+=", "),"string"==typeof t){x+=t;continue}r=String(t(s))}else x.length>0&&(x+=", "),r=tT.toLoggable(s);x+=i?`${i}=${r}`:r}p||g.call(tT,x?`${P}${S}(${x})`:`${P}${S}`)}if(p||u||null!=s){let t,o=u?tw():void 0,i=e=>{let t=void 0!==o?` [${tP(o)}ms]`:"";p?tT.error(e,x?`${P}${S}(${x})`:`${P}${S}`,v?.exitDetails?`failed${v.exitDetails}${t}`:`failed${t}`):tT.error(e,P,v?.exitDetails?`failed${v.exitDetails}${t}`:`failed${t}`),h&&tF.delete($)};try{t=m.apply(this,e)}catch(e){throw i(e),e}let r=e=>{let t,i,r,a;if(null!=o?(t=tP(o))>500?(i=tT.warn,r=` [*${t}ms] (slow)`):(i=g,r=` [${t}ms]`):(r="",i=g),null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${tT.toLoggable(e)}`);else v?.exitFailed?(a=v.exitFailed,i=(e,...t)=>tT.error(null,e,...t)):a="completed";p?(0===c||t>c)&&i.call(tT,x?`${P}${S}(${x}) ${a}${v?.exitDetails||""}${r}`:`${P}${S} ${a}${v?.exitDetails||""}${r}`):i.call(tT,x?`${P}(${x}) ${a}${v?.exitDetails||""}${r}`:`${P} ${a}${v?.exitDetails||""}${r}`),h&&tF.delete($)};return null!=t&&ob(t)?t.then(r,i):r(t),t}return m.apply(this,e)}}}(()=>{let e;var t,o,i={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function o(e,t){for(var o,i="",r=0,s=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)o=e.charCodeAt(c);else{if(47===o)break;o=47}if(47===o){if(s===c-1||1===a);else if(s!==c-1&&2===a){if(i.length<2||2!==r||46!==i.charCodeAt(i.length-1)||46!==i.charCodeAt(i.length-2)){if(i.length>2){var h=i.lastIndexOf("/");if(h!==i.length-1){-1===h?(i="",r=0):r=(i=i.slice(0,h)).length-1-i.lastIndexOf("/"),s=c,a=0;continue}}else if(2===i.length||1===i.length){i="",r=0,s=c,a=0;continue}}t&&(i.length>0?i+="/..":i="..",r=2)}else i.length>0?i+="/"+e.slice(s+1,c):i=e.slice(s+1,c),r=c-s-1;s=c,a=0}else 46===o&&-1!==a?++a:a=-1}return i}var i={resolve:function(){for(var e,i,r="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?e=arguments[a]:(void 0===i&&(i=process.cwd()),e=i),t(e),0!==e.length&&(r=e+"/"+r,s=47===e.charCodeAt(0));return r=o(r,!s),s?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var i=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=o(e,!i)).length||i||(e="."),e.length>0&&r&&(e+="/"),i?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,o=0;o<arguments.length;++o){var r=arguments[o];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":i.normalize(e)},relative:function(e,o){if(t(e),t(o),e===o||(e=i.resolve(e))===(o=i.resolve(o)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var s=e.length,a=s-r,c=1;c<o.length&&47===o.charCodeAt(c);++c);for(var h=o.length-c,p=a<h?a:h,u=-1,g=0;g<=p;++g){if(g===p){if(h>p){if(47===o.charCodeAt(c+g))return o.slice(c+g+1);if(0===g)return o.slice(c+g)}else a>p&&(47===e.charCodeAt(r+g)?u=g:0===g&&(u=0));break}var f=e.charCodeAt(r+g);if(f!==o.charCodeAt(c+g))break;47===f&&(u=g)}var b="";for(g=r+u+1;g<=s;++g)g!==s&&47!==e.charCodeAt(g)||(0===b.length?b+="..":b+="/..");return b.length>0?b+o.slice(c+u):(c+=u,47===o.charCodeAt(c)&&++c,o.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var o=e.charCodeAt(0),i=47===o,r=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(o=e.charCodeAt(a))){if(!s){r=a;break}}else s=!1;return -1===r?i?"/":".":i&&1===r?"//":e.slice(0,r)},basename:function(e,o){if(void 0!==o&&"string"!=typeof o)throw TypeError('"ext" argument must be a string');t(e);var i,r=0,s=-1,a=!0;if(void 0!==o&&o.length>0&&o.length<=e.length){if(o.length===e.length&&o===e)return"";var c=o.length-1,h=-1;for(i=e.length-1;i>=0;--i){var p=e.charCodeAt(i);if(47===p){if(!a){r=i+1;break}}else -1===h&&(a=!1,h=i+1),c>=0&&(p===o.charCodeAt(c)?-1==--c&&(s=i):(c=-1,s=h))}return r===s?s=h:-1===s&&(s=e.length),e.slice(r,s)}for(i=e.length-1;i>=0;--i)if(47===e.charCodeAt(i)){if(!a){r=i+1;break}}else -1===s&&(a=!1,s=i+1);return -1===s?"":e.slice(r,s)},extname:function(e){t(e);for(var o=-1,i=0,r=-1,s=!0,a=0,c=e.length-1;c>=0;--c){var h=e.charCodeAt(c);if(47!==h)-1===r&&(s=!1,r=c+1),46===h?-1===o?o=c:1!==a&&(a=1):-1!==o&&(a=-1);else if(!s){i=c+1;break}}return -1===o||-1===r||0===a||1===a&&o===r-1&&o===i+1?"":e.slice(o,r)},format:function(e){var t,o;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,o=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+o:t+"/"+o:o},parse:function(e){t(e);var o={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return o;var i,r=e.charCodeAt(0),s=47===r;s?(o.root="/",i=1):i=0;for(var a=-1,c=0,h=-1,p=!0,u=e.length-1,g=0;u>=i;--u)if(47!==(r=e.charCodeAt(u)))-1===h&&(p=!1,h=u+1),46===r?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1);else if(!p){c=u+1;break}return -1===a||-1===h||0===g||1===g&&a===h-1&&a===c+1?-1!==h&&(o.base=o.name=0===c&&s?e.slice(1,h):e.slice(c,h)):(0===c&&s?(o.name=e.slice(1,a),o.base=e.slice(1,h)):(o.name=e.slice(c,a),o.base=e.slice(c,h)),o.ext=e.slice(a,h)),c>0?o.dir=e.slice(0,c-1):s&&(o.dir="/"),o},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return i[e](o,o.exports,s),o.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(s.r(a),s.d(a,{URI:()=>l,Utils:()=>o}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let c=/^\w[\w\d+.-]*$/,h=/^\//,p=/^\/\//;function u(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!c.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!h.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let g=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,o,i,r,s=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||s?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,o||""),this.query=i||"",this.fragment=r||"",u(this,s))}get fsPath(){return x(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:o,path:i,query:r,fragment:s}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===o?o=this.authority:null===o&&(o=""),void 0===i?i=this.path:null===i&&(i=""),void 0===r?r=this.query:null===r&&(r=""),void 0===s?s=this.fragment:null===s&&(s=""),t===this.scheme&&o===this.authority&&i===this.path&&r===this.query&&s===this.fragment?this:new d(t,o,i,r,s)}static parse(e,t=!1){let o=g.exec(e);return o?new d(o[2]||"",C(o[4]||""),C(o[5]||""),C(o[7]||""),C(o[9]||""),t):new d("","","","","")}static file(t){let o="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(o=t.substring(2),t="/"):(o=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",o,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return u(t,!0),t}toString(e=!1){return _(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===f?e.fsPath:null,t}}return e}};let f=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=x(this,!1)),this._fsPath}toString(e=!1){return e?_(this,!0):(this._formatted||(this._formatted=_(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=f),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let b={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function v(e,t,o){let i,r=-1;for(let s=0;s<e.length;s++){let a=e.charCodeAt(s);if(a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||45===a||46===a||95===a||126===a||t&&47===a||o&&91===a||o&&93===a||o&&58===a)-1!==r&&(i+=encodeURIComponent(e.substring(r,s)),r=-1),void 0!==i&&(i+=e.charAt(s));else{void 0===i&&(i=e.substr(0,s));let t=b[a];void 0!==t?(-1!==r&&(i+=encodeURIComponent(e.substring(r,s)),r=-1),i+=t):-1===r&&(r=s)}}return -1!==r&&(i+=encodeURIComponent(e.substring(r))),void 0!==i?i:e}function w(e){let t;for(let o=0;o<e.length;o++){let i=e.charCodeAt(o);35===i||63===i?(void 0===t&&(t=e.substr(0,o)),t+=b[i]):void 0!==t&&(t+=e[o])}return void 0!==t?t:e}function x(t,o){let i;return i=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?o?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(i=i.replace(/\//g,"\\")),i}function _(e,t){let o=t?w:v,i="",{scheme:r,authority:s,path:a,query:c,fragment:h}=e;if(r&&(i+=r,i+=":"),(s||"file"===r)&&(i+="/",i+="/"),s){let e=s.indexOf("@");if(-1!==e){let t=s.substr(0,e);s=s.substr(e+1),-1===(e=t.lastIndexOf(":"))?i+=o(t,!1,!1):(i+=o(t.substr(0,e),!1,!1),i+=":",i+=o(t.substr(e+1),!1,!0)),i+="@"}-1===(e=(s=s.toLowerCase()).lastIndexOf(":"))?i+=o(s,!1,!0):(i+=o(s.substr(0,e),!1,!0),i+=s.substr(e))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){let e=a.charCodeAt(1);e>=65&&e<=90&&(a=`/${String.fromCharCode(e+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){let e=a.charCodeAt(0);e>=65&&e<=90&&(a=`${String.fromCharCode(e+32)}:${a.substr(2)}`)}i+=o(a,!0,!1)}return c&&(i+="?",i+=o(c,!1,!1)),h&&(i+="#",i+=t?h:v(h,!1,!1)),i}let $=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function C(e){return e.match($)?e.replace($,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var P=s(975);let S=P.posix||P;(t=o||(o={})).joinPath=function(e,...t){return e.with({path:S.join(e.path,...t)})},t.resolvePath=function(e,...t){let o=e.path,i=!1;"/"!==o[0]&&(o="/"+o,i=!0);let r=S.resolve(o,...t);return i&&"/"===r[0]&&!e.authority&&(r=r.substring(1)),e.with({path:r})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=S.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return S.basename(e.path)},t.extname=function(e){return S.extname(e.path)},m=a})();let{URI:ov,Utils:oy}=m;function ow(e,t){return JSON.parse(e,(e,o)=>(function(e,t){let o=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(e);if(null==o)return e;switch(o.__ipc){case"date":return new Date(o.value);case"promise":return t(o.value);case"uri":return ov.revive(o.value)}})(o,t))}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...o){let i;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:tj(e??"",!1),i="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??tI,this._time=tw(),null!=i){if(!this.logProvider.enabled(this.logLevel))return;o.length?this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`,...o):this.logProvider.log(this.logLevel,this.logScope,`${i.message??""}${i.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=tw(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=tw(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[o,i]=tw(this._time),r=1e3*o+Math.floor(i/1e6),s=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${r}ms]${e?.suffix??""}`)}};function ox(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function ok(e,t){return new Promise(o=>{e.addEventListener(t,function i(r){r.target===e&&(e.removeEventListener(t,i),o())})})}(v||(v={})).on=function(e,t,o,i){let r=!1;if("string"==typeof e){let s=function(t){let i=t?.target?.closest(e);null!=i&&o(t,i)};return document.addEventListener(t,s,i??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,s,i??!0))}}}let s=function(e){o(e,this)};return e.addEventListener(t,s,i??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,s,i??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new LinkedList);let i=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=Emitter._noop,this._disposed||i()}};return Array.isArray(o)&&o.push(r),r}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let o_={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let o=new events_Node(e);if(this._first===events_Node.Undefined)this._first=o,this._last=o;else if(t){let e=this._last;this._last=o,o.prev=e,e.next=o}else{let e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(o))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?o_:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var o$=Object.defineProperty,oC=Object.getOwnPropertyDescriptor,oP=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?oC(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&o$(t,o,s),s};let oS=tM();function oA(){return`webview:${oS.next()}`}let oE=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=i??=acquireVsCodeApi(),this._disposable=v.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){var t,o,i,r;let s=tF.get(tB.current),a=e.data,c=function(e,t,...o){return(t?.provider??tI).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...o):void 0}(tj(`(e=${a.id}|${a.method})`,s),{log:!1,logLevel:"debug"});if(a.compressed&&a.params instanceof Uint8Array){if("deflate"===a.compressed)try{a.params=op((t=a.params,ol(t,{i:2},void 0,void 0)))}catch(e){a.params=op(a.params)}else a.params=op(a.params);c?.restart({message:`\u2022 decompressed (${a.compressed}) serialized params`})}if("string"==typeof a.params?(a.params=ow(a.params,e=>this.getResponsePromise(e.method,e.id)),c?.stop({message:"• deserialized params"})):null==a.params?c?.stop({message:"• no params"}):c?.stop({message:"• invalid params"}),o=` \u2022 ipc (host -> webview) duration=${Date.now()-a.timestamp}ms`,null!=s&&(null!=s.exitDetails&&null!=o?s.exitDetails+=o:s.exitDetails=o),null!=a.completionId){let e=(i=a.method,r=a.completionId,`${i}|${r}`);this._pendingHandlers.get(e)?.(a);return}this._onReceiveMessage.fire(a)}deserializeIpcData(e){return ow(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let o=oA();this.postMessage({id:o,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let o=oA(),i=this.getResponsePromise(e.response.method,o);return this.postMessage({id:o,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:o}),i}getResponsePromise(e,t){return new Promise((o,i)=>{var r,s;let a,c=(r=e,s=t,`${r}|${s}`);function h(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(c)}a=setTimeout(()=>{h.call(this),i(Error(`Timed out waiting for completion of ${c}`))},(tT.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(h.call(this),e.method===tg.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>i(Error(t.reason))):queueMicrotask(()=>o(t.value))}else queueMicrotask(()=>o(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function oz(e,t){let o=Math.pow(10,t);return Math.round(e*o)/o}oP([om({args:{0:e=>`${e.data.id}|${e.data.method}`}},!0)],oE.prototype,"onMessageReceived",1),oP([om({args:{0:e=>e.method,1:!1}},!0)],oE.prototype,"sendCommand",1),oP([om({args:{0:e=>e.method,1:!1,2:!1}},!0)],oE.prototype,"sendRequest",1),oP([om({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],oE.prototype,"postMessage",1),oE=oP([(f=e=>`${e.appName}(HostIpc)`,e=>void tR.set(e,f))],oE);let RGBA=class RGBA{constructor(e,t,o,i=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=oz(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,o,i){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oz(Math.max(Math.min(1,t),0),3),this.l=oz(Math.max(Math.min(1,o),0),3),this.a=oz(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,i=e.b/255,r=e.a,s=Math.max(t,o,i),a=Math.min(t,o,i),c=0,h=0,p=(a+s)/2,u=s-a;if(u>0){switch(h=Math.min(p<=.5?u/(2*p):u/(2-2*p),1),s){case t:c=(o-i)/u+6*(o<i);break;case o:c=(i-t)/u+2;break;case i:c=(t-o)/u+4}c*=60,c=Math.round(c)}return new HSLA(c,h,p,r)}static _hue2rgb(e,t,o){return(o<0&&(o+=1),o>1&&(o-=1),o<1/6)?e+(t-e)*6*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){let t,o,i,r=e.h/360,{s,l:a,a:c}=e;if(0===s)t=o=i=a;else{let e=a<.5?a*(1+s):a+s-a*s,c=2*a-e;t=HSLA._hue2rgb(c,e,r+1/3),o=HSLA._hue2rgb(c,e,r),i=HSLA._hue2rgb(c,e,r-1/3)}return new RGBA(Math.round(255*t),Math.round(255*o),Math.round(255*i),c)}};let HSVA=class HSVA{constructor(e,t,o,i){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oz(Math.max(Math.min(1,t),0),3),this.v=oz(Math.max(Math.min(1,o),0),3),this.a=oz(Math.max(Math.min(1,i),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,o=e.g/255,i=e.b/255,r=Math.max(t,o,i),s=r-Math.min(t,o,i);return new HSVA(Math.round(60*(0===s?0:r===t?((o-i)/s%6+6)%6:r===o?(i-t)/s+2:(t-o)/s+4)),0===r?0:s/r,r,e.a)}static toRGBA(e){let{h:t,s:o,v:i,a:r}=e,s=i*o,a=s*(1-Math.abs(t/60%2-1)),c=i-s,[h,p,u]=[0,0,0];return t<60?(h=s,p=a):t<120?(h=a,p=s):t<180?(p=s,u=a):t<240?(p=a,u=s):t<300?(h=a,u=s):t<=360&&(h=s,u=a),new RGBA(h=Math.round((h+c)*255),p=Math.round((p+c)*255),u=Math.round((u+c)*255),r)}};function oO(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(oO(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){return oz(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:o,b:i,a:r}=this.rgba;return new Color(new RGBA(t,o,i,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,o=this.rgba.a,i=t.a,r=o+i*(1-o);return r<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*o/r+t.r*i*(1-o)/r,this.rgba.g*o/r+t.g*i*(1-o)/r,this.rgba.b*o/r+t.b*i*(1-o)/r,r))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:o,b:i,a:r}=this.rgba;return new Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-o),e.rgba.b-r*(e.rgba.b-i),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let o=1-e.rgba.a;return new Color(new RGBA(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${oT(e.rgba.r)}${oT(e.rgba.g)}${oT(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;let i=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(r-i)/r,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;let i=e.getRelativeLuminance(),r=t.getRelativeLuminance();return o=o*(i-r)/i,e.darken(o)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function oT(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let oD=new Emitter,oR=oD.event;function oI(e){let t=document.documentElement,o=window.getComputedStyle(t),i=document.body.classList,r=i.contains("vscode-light")||i.contains("vscode-high-contrast-light"),s=i.contains("vscode-high-contrast")||i.contains("vscode-high-contrast-light"),a=oO("--vscode-editor-background",o),c=oO("--vscode-editor-foreground",o);return c||(c=oO("--vscode-foreground",o)),{colors:{background:a,foreground:c},computedStyle:o,isLightTheme:r,isHighContrastTheme:s,isInitializing:null==e}}var oL=Object.defineProperty,oM=Object.getOwnPropertyDescriptor,oB=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?oM(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&oL(t,o,s),s};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new oE(this.name);let e=this.bootstrap;this.bootstrap=void 0,this._stateProvider=this.createStateProvider(e,this._ipc,this._logger);let{webviewId:t,webviewInstanceId:o}=this._stateProvider.state;this._webview={webviewId:t,webviewInstanceId:o,createCommandLink:(e,i)=>{var r;return e.endsWith(":")&&(e=`${e}${t.split(".").at(-1)}`),r=e,`command:${r}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:o,...i}))}`}};let i=oI();if(null!=this.onThemeUpdated){let e;this.onThemeUpdated(i),this.disposables.push(((e=new MutationObserver(e=>{oD.fire(oI(e))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()})),this.disposables.push(oR(this.onThemeUpdated,this))}this.disposables.push(this._stateProvider,this._ipc.onReceiveMessage(e=>{switch(!0){case tf.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case tb.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=e6(e=>{this._ipc.sendCommand(td,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return ey`<slot></slot>`}};oB([eT({type:String})],GlAppHost.prototype,"name",2),oB([eT({type:String})],GlAppHost.prototype,"placement",2),oB([tl({context:"ipc"})],GlAppHost.prototype,"_ipc",2),oB([tl({context:"logger"})],GlAppHost.prototype,"_logger",2),oB([tl({context:"promos"})],GlAppHost.prototype,"_promos",2),oB([tl({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),oB([tl({context:"webview"})],GlAppHost.prototype,"_webview",2),oB([eT({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let oF=O`
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
`,oN=O`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`,{fromCharCode:oj}=String;new TextEncoder;let oU=new TextDecoder;let StateProviderBase=class StateProviderBase{constructor(e,t,o,i){this.host=e,this.ipc=o,this.logger=i,this._state=this.ipc.deserializeIpcData(oU.decode(function(e){let t=globalThis.atob(e),o=t.length,i=new Uint8Array(o),r=0,s=o-o%8;for(;r<s;r+=8)i[r]=t.charCodeAt(r),i[r+1]=t.charCodeAt(r+1),i[r+2]=t.charCodeAt(r+2),i[r+3]=t.charCodeAt(r+3),i[r+4]=t.charCodeAt(r+4),i[r+5]=t.charCodeAt(r+5),i[r+6]=t.charCodeAt(r+6),i[r+7]=t.charCodeAt(r+7);for(;r<o;r++)i[r]=t.charCodeAt(r);return i}(t))),this.logger?.log(`bootstrap duration=${Date.now()-this._state.timestamp}ms`),this.provider=this.createContextProvider(this._state),this.onPersistState?.(this._state),this.disposable=this.ipc.onReceiveMessage(this.onMessageReceived.bind(this)),this.initializeState()}get state(){return this._state}get webviewId(){return this._state.webviewId}get webviewInstanceId(){return this._state.webviewInstanceId}get timestamp(){return this._state.timestamp}dispose(){this.disposable.dispose()}get deferBootstrap(){return!1}async initializeState(){if(this.deferBootstrap){let e=await this.ipc.sendRequest(th,{bootstrap:!0});if(null!=e.state){let t=ob(e.state)?await e.state:e.state;this.onDeferredBootstrapStateReceived(t)}}else this.ipc.sendRequest(th,{bootstrap:!1})}onDeferredBootstrapStateReceived(e){this._state={...e,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}};let TimelineStateProvider=class TimelineStateProvider extends StateProviderBase{createContextProvider(e){return new context_provider_i(this.host,{context:"state",initialValue:e})}onMessageReceived(e){!0===ta.is(e)&&(this._state={...e.params.state,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate())}onPersistState(e){this.ipc.setPersistedState({config:e.config,scope:e.scope})}};let oq=O`
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
`,oH=O`
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
`,oV=O`
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
`;var oW=O`
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
`,oG=O`
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
`,oK=Object.defineProperty,oZ=Object.defineProperties,oY=Object.getOwnPropertyDescriptor,oX=Object.getOwnPropertyDescriptors,oJ=Object.getOwnPropertySymbols,oQ=Object.prototype.hasOwnProperty,o0=Object.prototype.propertyIsEnumerable,o1=e=>{throw TypeError(e)},o2=(e,t,o)=>t in e?oK(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,o5=(e,t)=>{for(var o in t||(t={}))oQ.call(t,o)&&o2(e,o,t[o]);if(oJ)for(var o of oJ(t))o0.call(t,o)&&o2(e,o,t[o]);return e},o8=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?oY(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&oK(t,o,s),s},o3=(e,t,o)=>t.has(e)||o1("Cannot "+o),o4=new WeakMap,o6=new WeakMap,o7=new WeakMap,o9=new WeakSet,ie=new WeakMap,it=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!r&&"string"==typeof o&&o.length>0&&void 0!==i&&(Array.isArray(i)?i.forEach(t=>{e.formData.append(o,t.toString())}):e.formData.append(o,i.toString()))},this.handleFormSubmit=e=>{var t;let o=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=o4.get(this.form))||t.forEach(e=>{this.setUserInteracted(e,!0)})),!this.form||this.form.noValidate||o||i(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ie.set(this.host,[])},this.handleInteraction=e=>{let t=ie.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=o5({form:e=>{let t=e.form;if(t){let o=e.getRootNode().querySelector(`#${t}`);if(o)return o}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!=typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),ie.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ie.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,o4.has(this.form)?o4.get(this.form).add(this.host):o4.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),o6.has(this.form)||(o6.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),o7.has(this.form)||(o7.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=o4.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),o6.has(this.form)&&(this.form.reportValidity=o6.get(this.form),o6.delete(this.form)),o7.has(this.form)&&(this.form.checkValidity=o7.get(this.form),o7.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?o9.add(e):o9.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{t.hasAttribute(e)&&o.setAttribute(e,t.getAttribute(e))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){let t=this.host,o=!!o9.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},io=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(oZ(o5({},io),oX({valid:!1,valueMissing:!0}))),Object.freeze(oZ(o5({},io),oX({valid:!1,customError:!0})));var ii=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};let ir=new Set,is=new Map,ia="ltr",il="en",ic="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(ic){let e=new MutationObserver(id);ia=document.documentElement.dir||"ltr",il=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ih(...e){e.map(e=>{let t=e.$code.toLowerCase();is.has(t)?is.set(t,Object.assign(Object.assign({},is.get(t)),e)):is.set(t,e),r||(r=e)}),id()}function id(){ic&&(ia=document.documentElement.dir||"ltr",il=document.documentElement.lang||navigator.language),[...ir.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ir.add(this.host)}hostDisconnected(){ir.delete(this.host)}dir(){return`${this.host.dir||ia}`.toLowerCase()}lang(){return`${this.host.lang||il}`.toLowerCase()}getTranslationData(e){var t,o;let i=new Intl.Locale(e.replace(/_/g,"-")),r=null==i?void 0:i.language.toLowerCase(),s=null!=(o=null==(t=null==i?void 0:i.region)?void 0:t.toLowerCase())?o:"",a=is.get(`${r}-${s}`),c=is.get(r);return{locale:i,language:r,region:s,primary:a,secondary:c}}exists(e,t){var o;let{primary:i,secondary:s}=this.getTranslationData(null!=(o=t.lang)?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!i&&!!i[e]||!!s&&!!s[e]||!!t.includeFallback&&!!r&&!!r[e]}term(e,...t){let o,{primary:i,secondary:s}=this.getTranslationData(this.lang());if(i&&i[e])o=i[e];else if(s&&s[e])o=s[e];else{if(!r||!r[e])return String(e);o=r[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,t)}};var ip={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};ih(ip);var iu=class extends LocalizeController{};function ig(e,t){let o=o5({waitUntilFirstUpdate:!1},t);return(t,i)=>{let{update:r}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach(t=>{if(e.has(t)){let r=e.get(t),s=this[t];r!==s&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[i](r,s)}}),r.call(this,e)}}}ih(ip);var ib=O`
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
`,im=class extends lit_element_i{constructor(){let e;super(),(e=w).has(this)?o1("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let o=new CustomEvent(e,o5({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){let i=customElements.get(e);if(!i){try{customElements.define(e,t,o)}catch(i){customElements.define(e,class extends t{},o)}return}let r=" (unknown version)";"version"in t&&t.version&&(r=" v"+t.version),"version"in i&&i.version&&i.version}attributeChangedCallback(e,t,o){let i,r;if(o3(this,i=w,"read from private field"),r?!r.call(this):!i.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),o3(this,e=w,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&null==this[o]&&(this[o]=t)})}};w=new WeakMap,im.version="2.20.1",im.dependencies={},o8([eT()],im.prototype,"dir",2),o8([eT()],im.prototype,"lang",2);let iv=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let iy=iv(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let o in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}let o=e.element.classList;for(let e of this.st)e in t||(o.remove(e),this.st.delete(e));for(let e in t){let i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(o.add(e),this.st.add(e)):(o.remove(e),this.st.delete(e)))}return ew}}),{I:iw}={M:et,P:eo,A:ei,C:1,L:eC,R,D:ec,V:eP,I:k,H,N:L,U:z,B:I,F:Z},ix={},ik=iv(class extends directive_i{constructor(e){if(super(e),3!==e.type&&1!==e.type&&4!==e.type)throw Error("The `live` directive is not allowed on child or event bindings");if(void 0!==e.strings)throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ew||t===ex)return t;let o=e.element,i=e.name;if(3===e.type){if(t===o[i])return ew}else if(4===e.type){if(!!t===o.hasAttribute(i))return ew}else if(1===e.type&&o.getAttribute(i)===t+"")return ew;return((e,t=ix)=>e._$AH=t)(e),t}});var i_=class extends im{constructor(){super(...arguments),this.formControlController=new it(this),this.hasSlotController=new ii(this,"help-text","label"),this.localize=new iu(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.resizeObserver)||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${100*e}%`)}syncTooltip(e){if(null!==this.output){let t=this.input.offsetWidth,o=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r="rtl"===this.localize.dir(),s=t*e;if(r){let r=`${t-s}px + ${e} * ${i}`;this.output.style.translate=`calc((${r} - ${o/2}px - ${i} / 2))`}else{let t=`${s}px - ${e} * ${i}`;this.output.style.translate=`calc(${t} - ${o/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),"none"!==this.tooltip&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=!!this.label||!!e,i=!!this.helpText||!!t;return ey`
      <div
        part="form-control"
        class=${iy({"form-control":!0,"form-control--medium":!0,"form-control--has-label":o,"form-control--has-help-text":i})}
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
            class=${iy({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":"rtl"===this.localize.dir(),"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":"top"===this.tooltip,"range--tooltip-bottom":"bottom"===this.tooltip})}
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
              name=${this.name??ex}
              ?disabled=${this.disabled}
              min=${this.min??ex}
              max=${this.max??ex}
              step=${this.step??ex}
              .value=${ik(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${"none"!==this.tooltip&&!this.disabled?ey`
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
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};i_.styles=[ib,oG,oW],o8([eI(".range__control")],i_.prototype,"input",2),o8([eI(".range__tooltip")],i_.prototype,"output",2),o8([eD()],i_.prototype,"hasFocus",2),o8([eD()],i_.prototype,"hasTooltip",2),o8([eT()],i_.prototype,"title",2),o8([eT()],i_.prototype,"name",2),o8([eT({type:Number})],i_.prototype,"value",2),o8([eT()],i_.prototype,"label",2),o8([eT({attribute:"help-text"})],i_.prototype,"helpText",2),o8([eT({type:Boolean,reflect:!0})],i_.prototype,"disabled",2),o8([eT({type:Number})],i_.prototype,"min",2),o8([eT({type:Number})],i_.prototype,"max",2),o8([eT({type:Number})],i_.prototype,"step",2),o8([eT()],i_.prototype,"tooltip",2),o8([eT({attribute:!1})],i_.prototype,"tooltipFormatter",2),o8([eT({reflect:!0})],i_.prototype,"form",2),o8([((e="value")=>(t,o)=>{let i=t.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(t,s,a){var c;let h=i.getPropertyOptions(e);if(t===("string"==typeof h.attribute?h.attribute:e)){let t=h.converter||G,i=("function"==typeof t?t:null!=(c=null==t?void 0:t.fromAttribute)?c:G.fromAttribute)(a,h.type);this[e]!==i&&(this[o]=i)}r.call(this,t,s,a)}})()],i_.prototype,"defaultValue",2),o8([(b={passive:!0},(e,t)=>{Object.assign("function"==typeof e?e:e[t],b)})],i_.prototype,"handleThumbDragStart",1),o8([ig("value",{waitUntilFirstUpdate:!0})],i_.prototype,"handleValueChange",1),o8([ig("disabled",{waitUntilFirstUpdate:!0})],i_.prototype,"handleDisabledChange",1),o8([ig("hasTooltip",{waitUntilFirstUpdate:!0})],i_.prototype,"syncRange",1),i_.define("sl-range");var i$=Object.defineProperty,iC=Object.getOwnPropertyDescriptor,iP=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?iC(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&i$(t,o,s),s};let iS="gl-chart-slider",iA=class extends GlElement{constructor(){super(...arguments),this._value=0,this._max=0,this._min=0,this._shift=!1}get data(){return this._data}set data(e){this._data!==e&&(this._data=e,this._min=0,this._max=(e?.length??1)-1)}get shift(){return this._shift}set shift(e){this._shift=e,e?this.style.setProperty("--gl-track-color-active","var(--sl-color-primary-600"):this.style.removeProperty("--gl-track-color-active")}get value(){return this.data?.[this._value]}render(){return ey`<div class="slider-container">
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
		</div>`}select(e){let t;if("string"==typeof e)t=this.data?.findIndex(t=>t.sha===e);else{let o=e.toISOString();t=this.data?.findIndex(e=>e.date===o)}null!=t&&-1!==t&&(this._value=t)}handleSliderInput(e){if(!this.data?.length)return;let t=parseInt(e.target.value),o=new Date(this.data[t].date);this.emit("gl-slider-change",{date:o,shift:this.shift})}};iA.tagName=iS,iA.styles=O`
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
	`,iP([eD()],iA.prototype,"_value",2),iP([eT({type:Array})],iA.prototype,"data",1),iP([eT({type:Boolean})],iA.prototype,"shift",1),iA=iP([ez(iS)],iA);var iE=O`
  :host {
    display: contents;
  }
`,iz=class extends im{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let e=this.shadowRoot.querySelector("slot");if(null!==e){let t=e.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return ey` <slot @slotchange=${this.handleSlotChange}></slot> `}};iz.styles=[ib,iE],o8([eT({type:Boolean,reflect:!0})],iz.prototype,"disabled",2),o8([ig("disabled",{waitUntilFirstUpdate:!0})],iz.prototype,"handleDisabledChange",1),iz.define("sl-resize-observer");var iO=Object.defineProperty,iT=Object.getOwnPropertyDescriptor,iD=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?iT(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&iO(t,o,s),s};let iR="gl-chart-scroller",iI=class extends GlElement{constructor(){super(...arguments),this.position=0,this.size=100,this.onDragStart=e=>{if(!this.isScrollable())return;e.preventDefault(),e.stopPropagation();let t=e.currentTarget,o=t.parentElement;if(!o)return;t.setPointerCapture(e.pointerId);let[i,r]=this.range,s=this.visibleRange[1]-this.visibleRange[0];this._dragInfo={startX:e.clientX,startPosition:this.position,trackWidth:o.offsetWidth,viewRange:r-i,zoomRange:s,viewStart:i,maxPosition:100-this.size,pointerId:e.pointerId},this.emit("gl-scroll-start")},this.onDragMove=e=>{if(e.pointerId!==this._dragInfo?.pointerId)return;e.preventDefault(),e.stopPropagation();let t=(e.clientX-this._dragInfo.startX)/this._dragInfo.trackWidth*100,o=Math.max(0,Math.min(this._dragInfo.maxPosition,this._dragInfo.startPosition+t))/(100-this.size)*(this._dragInfo.viewRange-this._dragInfo.zoomRange),i=this._dragInfo.viewStart+o,r=i+this._dragInfo.zoomRange;this.emitScrollEvent(i,r)},this.onDragEnd=e=>{if(!this._dragInfo||e&&e.pointerId!==this._dragInfo.pointerId)return;let t=this.renderRoot.querySelector(".thumb");t&&this._dragInfo.pointerId&&t.releasePointerCapture(this._dragInfo.pointerId),this._dragInfo=void 0,this.requestUpdate(),this.emit("gl-scroll-end")},this.onTrackClick=e=>{if(!this.isScrollable()||e.target!==e.currentTarget)return;let t=e.currentTarget.getBoundingClientRect(),o=(e.clientX-t.left)/t.width,[i,r]=this.range,s=this.visibleRange[1]-this.visibleRange[0],a=r-i,c=i+a*o,h=Math.max(i,Math.min(r-s,c-s/2));this.emitScrollEvent(h,h+s)},this.onWheel=e=>{if(e.ctrlKey)return void Object.defineProperty(e,"ctrlKey",{value:!1});if(e.stopPropagation(),e.stopImmediatePropagation(),!this.isScrollable())return;let t=null!=this._wheelTimer;t&&clearTimeout(this._wheelTimer),this._wheelTimer=setTimeout(()=>{this._wheelTimer=void 0,this.emit("gl-scroll-end")},150),t||this.emit("gl-scroll-start");let[o,i]=this.range,[r,s]=this.visibleRange,a=s-r,c=e.deltaY*a*.001,h=Math.max(o,Math.min(i-a,r+c));this.emitScrollEvent(h,h+a)}}isScrollable(){return null!=this.range&&null!=this.visibleRange&&this.size<100}connectedCallback(){super.connectedCallback?.(),this.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0})}disconnectedCallback(){this.onDragEnd(),this.removeEventListener("wheel",this.onWheel),super.disconnectedCallback?.()}willUpdate(e){({size:this.size,position:this.position}=this.calculateScrollState()),this.style.setProperty("--thumb-width",`${this.size}%`),this.style.setProperty("--thumb-left",`${this.position}%`)}render(){return ey`<slot></slot>
			<div class="track" part="track" ?scrollable="${this.isScrollable()}" @pointerdown="${this.onTrackClick}">
				<div
					class="thumb"
					@pointerdown="${this.onDragStart}"
					@pointermove="${this.onDragMove}"
					@pointerup="${this.onDragEnd}"
					@pointercancel="${this.onDragEnd}"
					@lostpointercapture="${this.onDragEnd}"
				></div>
			</div>`}calculateScrollState(){if(null==this.range||null==this.visibleRange)return{position:0,size:100};let[e,t]=this.range,[o,i]=this.visibleRange,r=t-e,s=i-o;if(r<=1||s<=1)return{position:0,size:100};let a=Math.max(20,Math.min(100,s/r*100)),c=r-s;return c<=0?{position:0,size:a}:{position:Math.max(0,Math.min(100-a,(o-e)/c*(100-a))),size:a}}emitScrollEvent(e,t){(e!==this.visibleRange?.[0]||t!==this.visibleRange[1])&&this.emit("gl-scroll",{range:[e,t]})}};iI.tagName=iR,iI.styles=O`
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
	`,iD([eT({type:Array})],iI.prototype,"range",2),iD([eT({type:Array})],iI.prototype,"visibleRange",2),iD([eD()],iI.prototype,"position",2),iD([eD()],iI.prototype,"size",2),iI=iD([ez(iR)],iI);let iL=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f",bracket:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52","send-to-remote-agent":"\\ec53","comment-discussion-sparkle":"\\ec54","chat-sparkle-warning":"\\ec55","chat-sparkle-error":"\\ec56",collection:"\\ec57","new-collection":"\\ec58",thinking:"\\ec59",build:"\\ec5a","comment-discussion-quote":"\\ec5b",cursor:"\\ec5c",eraser:"\\ec5d","file-text":"\\ec5e",quotes:"\\ec60",rename:"\\ec61","run-with-deps":"\\ec62","debug-connected":"\\ec63",strikethrough:"\\ec64","open-in-product":"\\ec65","index-zero":"\\ec66",agent:"\\ec67","edit-code":"\\ec68","repo-selected":"\\ec69",skip:"\\ec6a","merge-into":"\\ec6b","git-branch-changes":"\\ec6c","git-branch-staged-changes":"\\ec6d","git-branch-conflicts":"\\ec6e","git-branch":"\\ec6f","git-branch-create":"\\ec6f","git-branch-delete":"\\ec6f","search-large":"\\ec70","terminal-git-bash":"\\ec71","window-active":"\\ec72",forward:"\\ec73",download:"\\ec74",clockface:"\\ec75",unarchive:"\\ec76","session-in-progress":"\\ec77","collection-small":"\\ec78","vm-small":"\\ec79","cloud-small":"\\ec7a"}),iM=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147"});var iB=Object.defineProperty,iF=Object.getOwnPropertyDescriptor,iN=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?iF(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&iB(t,o,s),s};function ij(e,t=""){return E(Object.entries(e).map(([e,o])=>(function(e,t,o=""){return`:host([icon='${o}${e}'])::before { content: '${t}'; }`})(e,o,t)).join(""))}let iU=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};iU.styles=O`
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

		${ij(iL)}
		${ij(iM,"gl-")}

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
	`,iN([eT({reflect:!0})],iU.prototype,"icon",2),iN([eT({reflect:!0})],iU.prototype,"modifier",2),iN([eT({type:Number})],iU.prototype,"size",2),iN([eT({reflect:!0})],iU.prototype,"flip",2),iN([eT({reflect:!0})],iU.prototype,"rotate",2),iU=iN([ez("code-icon")],iU);var iq=new Map,iH=new WeakMap;function iV(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function iW(e,t){iq.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function iG(e,t,o){let i=iH.get(e);if(null==i?void 0:i[t])return iV(i[t],o.dir);let r=iq.get(t);return r?iV(r,o.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=ex,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ex||null==e)return this._t=void 0,this.it=e;if(e===ew)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let iK=iv(unsafe_html_e);var iZ=O`
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
`,iY=O`
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
`;let iX=Math.min,iJ=Math.max,iQ=Math.round,i0=Math.floor,i1=e=>({x:e,y:e}),i2={left:"right",right:"left",bottom:"top",top:"bottom"},i5={start:"end",end:"start"};function i8(e,t){return"function"==typeof e?e(t):e}function i3(e){return e.split("-")[0]}function i4(e){return e.split("-")[1]}function i6(e){return"x"===e?"y":"x"}function i7(e){return"y"===e?"height":"width"}let i9=new Set(["top","bottom"]);function re(e){return i9.has(i3(e))?"y":"x"}function rt(e){return e.replace(/start|end/g,e=>i5[e])}let ro=["left","right"],ri=["right","left"],rr=["top","bottom"],rs=["bottom","top"];function rn(e){return e.replace(/left|right|bottom|top/g,e=>i2[e])}function ra(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function rl(e){let{x:t,y:o,width:i,height:r}=e;return{width:i,height:r,top:o,left:t,right:t+i,bottom:o+r,x:t,y:o}}function rc(e,t,o){let i,{reference:r,floating:s}=e,a=re(t),c=i6(re(t)),h=i7(c),p=i3(t),u="y"===a,g=r.x+r.width/2-s.width/2,f=r.y+r.height/2-s.height/2,b=r[h]/2-s[h]/2;switch(p){case"top":i={x:g,y:r.y-s.height};break;case"bottom":i={x:g,y:r.y+r.height};break;case"right":i={x:r.x+r.width,y:f};break;case"left":i={x:r.x-s.width,y:f};break;default:i={x:r.x,y:r.y}}switch(i4(t)){case"start":i[c]-=b*(o&&u?-1:1);break;case"end":i[c]+=b*(o&&u?-1:1)}return i}let rh=async(e,t,o)=>{let{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:a}=o,c=s.filter(Boolean),h=await (null==a.isRTL?void 0:a.isRTL(t)),p=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:g}=rc(p,i,h),f=i,b={},m=0;for(let o=0;o<c.length;o++){let{name:s,fn:v}=c[o],{x:w,y:x,data:_,reset:$}=await v({x:u,y:g,initialPlacement:i,placement:f,strategy:r,middlewareData:b,rects:p,platform:a,elements:{reference:e,floating:t}});u=null!=w?w:u,g=null!=x?x:g,b={...b,[s]:{...b[s],..._}},$&&m<=50&&(m++,"object"==typeof $&&($.placement&&(f=$.placement),$.rects&&(p=!0===$.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):$.rects),{x:u,y:g}=rc(p,f,h)),o=-1)}return{x:u,y:g,placement:f,strategy:r,middlewareData:b}};async function rd(e,t){var o;void 0===t&&(t={});let{x:i,y:r,platform:s,rects:a,elements:c,strategy:h}=e,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:f=!1,padding:b=0}=i8(t,e),m=ra(b),v=c[f?"floating"===g?"reference":"floating":g],w=rl(await s.getClippingRect({element:null==(o=await (null==s.isElement?void 0:s.isElement(v)))||o?v:v.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(c.floating)),boundary:p,rootBoundary:u,strategy:h})),x="floating"===g?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await (null==s.getOffsetParent?void 0:s.getOffsetParent(c.floating)),$=await (null==s.isElement?void 0:s.isElement(_))&&await (null==s.getScale?void 0:s.getScale(_))||{x:1,y:1},C=rl(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:_,strategy:h}):x);return{top:(w.top-C.top+m.top)/$.y,bottom:(C.bottom-w.bottom+m.bottom)/$.y,left:(w.left-C.left+m.left)/$.x,right:(C.right-w.right+m.right)/$.x}}let rp=new Set(["left","top"]);async function ru(e,t){let{placement:o,platform:i,elements:r}=e,s=await (null==i.isRTL?void 0:i.isRTL(r.floating)),a=i3(o),c=i4(o),h="y"===re(o),p=rp.has(a)?-1:1,u=s&&h?-1:1,g=i8(t,e),{mainAxis:f,crossAxis:b,alignmentAxis:m}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&"number"==typeof m&&(b="end"===c?-1*m:m),h?{x:b*u,y:f*p}:{x:f*p,y:b*u}}function rg(){return"u">typeof window}function rf(e){return rv(e)?(e.nodeName||"").toLowerCase():"#document"}function rb(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function rm(e){var t;return null==(t=(rv(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function rv(e){return!!rg()&&(e instanceof Node||e instanceof rb(e).Node)}function ry(e){return!!rg()&&(e instanceof Element||e instanceof rb(e).Element)}function rw(e){return!!rg()&&(e instanceof HTMLElement||e instanceof rb(e).HTMLElement)}function rx(e){return!(!rg()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof rb(e).ShadowRoot)}let rk=new Set(["inline","contents"]);function r_(e){let{overflow:t,overflowX:o,overflowY:i,display:r}=rR(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!rk.has(r)}let r$=new Set(["table","td","th"]),rC=[":popover-open",":modal"];function rP(e){return rC.some(t=>{try{return e.matches(t)}catch{return!1}})}let rS=["transform","translate","scale","rotate","perspective"],rA=["transform","translate","scale","rotate","perspective","filter"],rE=["paint","layout","strict","content"];function rz(e){let t=rO(),o=ry(e)?rR(e):e;return rS.some(e=>!!o[e]&&"none"!==o[e])||!!o.containerType&&"normal"!==o.containerType||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||rA.some(e=>(o.willChange||"").includes(e))||rE.some(e=>(o.contain||"").includes(e))}function rO(){return!("u"<typeof CSS)&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let rT=new Set(["html","body","#document"]);function rD(e){return rT.has(rf(e))}function rR(e){return rb(e).getComputedStyle(e)}function rI(e){return ry(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function rL(e){if("html"===rf(e))return e;let t=e.assignedSlot||e.parentNode||rx(e)&&e.host||rm(e);return rx(t)?t.host:t}function rM(e,t,o){var i;void 0===t&&(t=[]),void 0===o&&(o=!0);let r=function e(t){let o=rL(t);return rD(o)?t.ownerDocument?t.ownerDocument.body:t.body:rw(o)&&r_(o)?o:e(o)}(e),s=r===(null==(i=e.ownerDocument)?void 0:i.body),a=rb(r);if(s){let e=rB(a);return t.concat(a,a.visualViewport||[],r_(r)?r:[],e&&o?rM(e):[])}return t.concat(r,rM(r,[],o))}function rB(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function rF(e){let t=rR(e),o=parseFloat(t.width)||0,i=parseFloat(t.height)||0,r=rw(e),s=r?e.offsetWidth:o,a=r?e.offsetHeight:i,c=iQ(o)!==s||iQ(i)!==a;return c&&(o=s,i=a),{width:o,height:i,$:c}}function rN(e){return ry(e)?e:e.contextElement}function rj(e){let t=rN(e);if(!rw(t))return i1(1);let o=t.getBoundingClientRect(),{width:i,height:r,$:s}=rF(t),a=(s?iQ(o.width):o.width)/i,c=(s?iQ(o.height):o.height)/r;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}let rU=i1(0);function rq(e){let t=rb(e);return rO()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:rU}function rH(e,t,o,i){var r;void 0===t&&(t=!1),void 0===o&&(o=!1);let s=e.getBoundingClientRect(),a=rN(e),c=i1(1);t&&(i?ry(i)&&(c=rj(i)):c=rj(e));let h=(void 0===(r=o)&&(r=!1),i&&(!r||i===rb(a))&&r)?rq(a):i1(0),p=(s.left+h.x)/c.x,u=(s.top+h.y)/c.y,g=s.width/c.x,f=s.height/c.y;if(a){let e=rb(a),t=i&&ry(i)?rb(i):i,o=e,r=rB(o);for(;r&&i&&t!==o;){let e=rj(r),t=r.getBoundingClientRect(),i=rR(r),s=t.left+(r.clientLeft+parseFloat(i.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(i.paddingTop))*e.y;p*=e.x,u*=e.y,g*=e.x,f*=e.y,p+=s,u+=a,r=rB(o=rb(r))}}return rl({width:g,height:f,x:p,y:u})}function rV(e,t){let o=rI(e).scrollLeft;return t?t.left+o:rH(rm(e)).left+o}function rW(e,t){let o=e.getBoundingClientRect();return{x:o.left+t.scrollLeft-rV(e,o),y:o.top+t.scrollTop}}let rG=new Set(["absolute","fixed"]);function rK(e,t,o){var i;let r;if("viewport"===t)r=function(e,t){let o=rb(e),i=rm(e),r=o.visualViewport,s=i.clientWidth,a=i.clientHeight,c=0,h=0;if(r){s=r.width,a=r.height;let e=rO();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,h=r.offsetTop)}let p=rV(i);if(p<=0){let e=i.ownerDocument,t=e.body,o=getComputedStyle(t),r="CSS1Compat"===e.compatMode&&parseFloat(o.marginLeft)+parseFloat(o.marginRight)||0,a=Math.abs(i.clientWidth-t.clientWidth-r);a<=25&&(s-=a)}else p<=25&&(s+=p);return{width:s,height:a,x:c,y:h}}(e,o);else if("document"===t){let t,o,s,a,c,h,p;i=rm(e),t=rm(i),o=rI(i),s=i.ownerDocument.body,a=iJ(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),c=iJ(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight),h=-o.scrollLeft+rV(i),p=-o.scrollTop,"rtl"===rR(s).direction&&(h+=iJ(t.clientWidth,s.clientWidth)-a),r={width:a,height:c,x:h,y:p}}else if(ry(t)){let e,i,s,a,c,h;i=(e=rH(t,!0,"fixed"===o)).top+t.clientTop,s=e.left+t.clientLeft,a=rw(t)?rj(t):i1(1),c=t.clientWidth*a.x,h=t.clientHeight*a.y,r={width:c,height:h,x:s*a.x,y:i*a.y}}else{let o=rq(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return rl(r)}function rZ(e){return"static"===rR(e).position}function rY(e,t){if(!rw(e)||"fixed"===rR(e).position)return null;if(t)return t(e);let o=e.offsetParent;return rm(e)===o&&(o=o.ownerDocument.body),o}function rX(e,t){var o;let i=rb(e);if(rP(e))return i;if(!rw(e)){let t=rL(e);for(;t&&!rD(t);){if(ry(t)&&!rZ(t))return t;t=rL(t)}return i}let r=rY(e,t);for(;r&&(o=r,r$.has(rf(o)))&&rZ(r);)r=rY(r,t);return r&&rD(r)&&rZ(r)&&!rz(r)?i:r||function(e){let t=rL(e);for(;rw(t)&&!rD(t);){if(rz(t))return t;if(rP(t))break;t=rL(t)}return null}(e)||i}let rJ=async function(e){let t=this.getOffsetParent||rX,o=this.getDimensions,i=await o(e.floating);return{reference:function(e,t,o){let i=rw(t),r=rm(t),s="fixed"===o,a=rH(e,!0,s,t),c={scrollLeft:0,scrollTop:0},h=i1(0);if(i||!i&&!s)if(("body"!==rf(t)||r_(r))&&(c=rI(t)),i){let e=rH(t,!0,s,t);h.x=e.x+t.clientLeft,h.y=e.y+t.clientTop}else r&&(h.x=rV(r));s&&!i&&r&&(h.x=rV(r));let p=!r||i||s?i1(0):rW(r,c);return{x:a.left+c.scrollLeft-h.x-p.x,y:a.top+c.scrollTop-h.y-p.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}},rQ={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:o,offsetParent:i,strategy:r}=e,s="fixed"===r,a=rm(i),c=!!t&&rP(t.floating);if(i===a||c&&s)return o;let h={scrollLeft:0,scrollTop:0},p=i1(1),u=i1(0),g=rw(i);if((g||!g&&!s)&&(("body"!==rf(i)||r_(a))&&(h=rI(i)),rw(i))){let e=rH(i);p=rj(i),u.x=e.x+i.clientLeft,u.y=e.y+i.clientTop}let f=!a||g||s?i1(0):rW(a,h);return{width:o.width*p.x,height:o.height*p.y,x:o.x*p.x-h.scrollLeft*p.x+u.x+f.x,y:o.y*p.y-h.scrollTop*p.y+u.y+f.y}},getDocumentElement:rm,getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:i,strategy:r}=e,s=[..."clippingAncestors"===o?rP(t)?[]:function(e,t){let o=t.get(e);if(o)return o;let i=rM(e,[],!1).filter(e=>ry(e)&&"body"!==rf(e)),r=null,s="fixed"===rR(e).position,a=s?rL(e):e;for(;ry(a)&&!rD(a);){let t=rR(a),o=rz(a);o||"fixed"!==t.position||(r=null),(s?!o&&!r:!o&&"static"===t.position&&!!r&&rG.has(r.position)||r_(a)&&!o&&function e(t,o){let i=rL(t);return!(i===o||!ry(i)||rD(i))&&("fixed"===rR(i).position||e(i,o))}(e,a))?i=i.filter(e=>e!==a):r=t,a=rL(a)}return t.set(e,i),i}(t,this._c):[].concat(o),i],a=s[0],c=s.reduce((e,o)=>{let i=rK(t,o,r);return e.top=iJ(i.top,e.top),e.right=iX(i.right,e.right),e.bottom=iX(i.bottom,e.bottom),e.left=iJ(i.left,e.left),e},rK(t,a,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:rX,getElementRects:rJ,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:o}=rF(e);return{width:t,height:o}},getScale:rj,isElement:ry,isRTL:function(e){return"rtl"===rR(e).direction}};function r0(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let r1=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var o,i;let r,s,{placement:a,rects:c,platform:h,elements:p}=t,{apply:u=()=>{},...g}=i8(e,t),f=await rd(t,g),b=i3(a),m=i4(a),v="y"===re(a),{width:w,height:x}=c.floating;"top"===b||"bottom"===b?(r=b,s=m===(await (null==h.isRTL?void 0:h.isRTL(p.floating))?"start":"end")?"left":"right"):(s=b,r="end"===m?"top":"bottom");let _=x-f.top-f.bottom,$=w-f.left-f.right,C=iX(x-f[r],_),P=iX(w-f[s],$),S=!t.middlewareData.shift,A=C,E=P;if(null!=(o=t.middlewareData.shift)&&o.enabled.x&&(E=$),null!=(i=t.middlewareData.shift)&&i.enabled.y&&(A=_),S&&!m){let e=iJ(f.left,0),t=iJ(f.right,0),o=iJ(f.top,0),i=iJ(f.bottom,0);v?E=w-2*(0!==e||0!==t?e+t:iJ(f.left,f.right)):A=x-2*(0!==o||0!==i?o+i:iJ(f.top,f.bottom))}await u({...t,availableWidth:E,availableHeight:A});let O=await h.getDimensions(p.floating);return w!==O.width||x!==O.height?{reset:{rects:!0}}:{}}}};function r2(e){var t=e;for(let e=t;e;e=r5(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=r5(t);e;e=r5(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||rz(t)||"BODY"===e.tagName))return e}return null}function r5(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var r8=class extends im{constructor(){super(...arguments),this.localize=new iu(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),i=0,r=0,s=0,a=0,c=0,h=0,p=0,u=0;o?e.top<t.top?(i=e.left,r=e.bottom,s=e.right,a=e.bottom,c=t.left,h=t.top,p=t.right,u=t.top):(i=t.left,r=t.bottom,s=t.right,a=t.bottom,c=e.left,h=e.top,p=e.right,u=e.top):e.left<t.left?(i=e.right,r=e.top,s=t.left,a=t.top,c=e.right,h=e.bottom,p=t.left,u=t.bottom):(i=t.right,r=t.top,s=e.left,a=e.top,c=t.right,h=t.bottom,p=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,o,i){let r;void 0===i&&(i={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:p=!1}=i,u=rN(e),g=s||a?[...u?rM(u):[],...rM(t)]:[];g.forEach(e=>{s&&e.addEventListener("scroll",o,{passive:!0}),a&&e.addEventListener("resize",o)});let f=u&&h?function(e,t){let o,i=null,r=rm(e);function s(){var e;clearTimeout(o),null==(e=i)||e.disconnect(),i=null}return!function a(c,h){void 0===c&&(c=!1),void 0===h&&(h=1),s();let p=e.getBoundingClientRect(),{left:u,top:g,width:f,height:b}=p;if(c||t(),!f||!b)return;let m={rootMargin:-i0(g)+"px "+-i0(r.clientWidth-(u+f))+"px "+-i0(r.clientHeight-(g+b))+"px "+-i0(u)+"px",threshold:iJ(0,iX(1,h))||1},v=!0;function w(t){let i=t[0].intersectionRatio;if(i!==h){if(!v)return a();i?a(!1,i):o=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==i||r0(p,e.getBoundingClientRect())||a(),v=!1}try{i=new IntersectionObserver(w,{...m,root:r.ownerDocument})}catch{i=new IntersectionObserver(w,m)}i.observe(e)}(!0),s}(u,o):null,b=-1,m=null;c&&(m=new ResizeObserver(e=>{let[i]=e;i&&i.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var e;null==(e=m)||e.observe(t)})),o()}),u&&!p&&m.observe(u),m.observe(t));let v=p?rH(e):null;return p&&function t(){let i=rH(e);v&&!r0(v,i)&&o(),v=i,r=requestAnimationFrame(t)}(),o(),()=>{var e;g.forEach(e=>{s&&e.removeEventListener("scroll",o),a&&e.removeEventListener("resize",o)}),null==f||f(),null==(e=m)||e.disconnect(),m=null,p&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,o,i,r,s;let a,c,h,p;if(!this.active||!this.anchorEl)return;let u=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var o,i;let{x:r,y:s,placement:a,middlewareData:c}=t,h=await ru(t,e);return a===(null==(o=c.offset)?void 0:o.placement)&&null!=(i=c.arrow)&&i.alignmentOffset?{}:{x:r+h.x,y:s+h.y,data:{...h,placement:a}}}}];this.sync?u.push(r1({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,o="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=o?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&u.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var o,i,r,s,a,c,h,p;let u,g,f,{placement:b,middlewareData:m,rects:v,initialPlacement:w,platform:x,elements:_}=e,{mainAxis:$=!0,crossAxis:C=!0,fallbackPlacements:P,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:A="none",flipAlignment:E=!0,...O}=i8(t,e);if(null!=(o=m.arrow)&&o.alignmentOffset)return{};let T=i3(b),D=re(w),M=i3(w)===w,B=await (null==x.isRTL?void 0:x.isRTL(_.floating)),F=P||(M||!E?[rn(w)]:(u=rn(w),[rt(w),u,rt(u)])),N="none"!==A;!P&&N&&F.push(...(g=i4(w),f=function(e,t,o){switch(e){case"top":case"bottom":if(o)return t?ri:ro;return t?ro:ri;case"left":case"right":return t?rr:rs;default:return[]}}(i3(w),"start"===A,B),g&&(f=f.map(e=>e+"-"+g),E&&(f=f.concat(f.map(rt)))),f));let j=[w,...F],U=await rd(e,O),q=[],V=(null==(i=m.flip)?void 0:i.overflows)||[];if($&&q.push(U[T]),C){let e,t,o,i,r=(c=b,h=v,void 0===(p=B)&&(p=!1),e=i4(c),o=i7(t=i6(re(c))),i="x"===t?e===(p?"end":"start")?"right":"left":"start"===e?"bottom":"top",h.reference[o]>h.floating[o]&&(i=rn(i)),[i,rn(i)]);q.push(U[r[0]],U[r[1]])}if(V=[...V,{placement:b,overflows:q}],!q.every(e=>e<=0)){let e=((null==(r=m.flip)?void 0:r.index)||0)+1,t=j[e];if(t&&("alignment"!==C||D===re(t)||V.every(e=>re(e.placement)!==D||e.overflows[0]>0)))return{data:{index:e,overflows:V},reset:{placement:t}};let o=null==(s=V.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:s.placement;if(!o)switch(S){case"bestFit":{let e=null==(a=V.filter(e=>{if(N){let t=re(e.placement);return t===D||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(o=e);break}case"initialPlacement":o=w}if(b!==o)return{reset:{placement:o}}}return{}}}),this.shift&&u.push({name:"shift",options:o={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:c={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...h}=i8(o,e),p={x:t,y:i},u=await rd(e,h),g=re(i3(r)),f=i6(g),b=p[f],m=p[g];if(s){let e="y"===f?"top":"left",t="y"===f?"bottom":"right",o=b+u[e],i=b-u[t];b=iJ(o,iX(b,i))}if(a){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",o=m+u[e],i=m-u[t];m=iJ(o,iX(m,i))}let v=c.fn({...e,[f]:b,[g]:m});return{...v,data:{x:v.x-t,y:v.y-i,enabled:{[f]:s,[g]:a}}}}}),this.autoSize?u.push(r1({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&u.push({name:"arrow",options:a={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:o,placement:i,rects:r,platform:s,elements:c,middlewareData:h}=e,{element:p,padding:u=0}=i8(a,e)||{};if(null==p)return{};let g=ra(u),f={x:t,y:o},b=i6(re(i)),m=i7(b),v=await s.getDimensions(p),w="y"===b,x=w?"clientHeight":"clientWidth",_=r.reference[m]+r.reference[b]-f[b]-r.floating[m],$=f[b]-r.reference[b],C=await (null==s.getOffsetParent?void 0:s.getOffsetParent(p)),P=C?C[x]:0;P&&await (null==s.isElement?void 0:s.isElement(C))||(P=c.floating[x]||r.floating[m]);let S=P/2-v[m]/2-1,A=iX(g[w?"top":"left"],S),E=iX(g[w?"bottom":"right"],S),O=P-v[m]-E,T=P/2-v[m]/2+(_/2-$/2),D=iJ(A,iX(T,O)),M=!h.arrow&&null!=i4(i)&&T!==D&&r.reference[m]/2-(T<A?A:E)-v[m]/2<0,B=M?T<A?T-A:T-O:0;return{[b]:f[b]+B,data:{[b]:D,centerOffset:T-D-B,...M&&{alignmentOffset:B}},reset:M}}});let g="absolute"===this.strategy?e=>rQ.getOffsetParent(e,r2):rQ.getOffsetParent;(i=this.anchorEl,r=this.popup,s={placement:this.placement,middleware:u,strategy:this.strategy,platform:oZ(o5({},rQ),oX({getOffsetParent:g}))},c=new Map,p={...(h={platform:rQ,...s}).platform,_c:c},rh(i,r,{...h,platform:p})).then(({x:e,y:t,middlewareData:o,placement:i})=>{let r="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=o.arrow.x,t=o.arrow.y,i="",a="",c="",h="";if("start"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?o:"",h=r?"":o}else if("end"===this.arrowPlacement){let o="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":o,h=r?o:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof e?`${e}px`:"",i="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:c,left:h,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ey`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${iy({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${iy({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ey`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function r3(e,t){return new Promise(o=>{e.addEventListener(t,function i(r){r.target===e&&(e.removeEventListener(t,i),o())})})}function r4(e,t,o){return new Promise(i=>{if((null==o?void 0:o.duration)===1/0)throw Error("Promise-based animations must be finite.");let r=e.animate(t,oZ(o5({},o),oX({duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:o.duration})));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function r6(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function r7(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}r8.styles=[ib,iY],o8([eI(".popup")],r8.prototype,"popup",2),o8([eI(".popup__arrow")],r8.prototype,"arrowEl",2),o8([eT()],r8.prototype,"anchor",2),o8([eT({type:Boolean,reflect:!0})],r8.prototype,"active",2),o8([eT({reflect:!0})],r8.prototype,"placement",2),o8([eT({reflect:!0})],r8.prototype,"strategy",2),o8([eT({type:Number})],r8.prototype,"distance",2),o8([eT({type:Number})],r8.prototype,"skidding",2),o8([eT({type:Boolean})],r8.prototype,"arrow",2),o8([eT({attribute:"arrow-placement"})],r8.prototype,"arrowPlacement",2),o8([eT({attribute:"arrow-padding",type:Number})],r8.prototype,"arrowPadding",2),o8([eT({type:Boolean})],r8.prototype,"flip",2),o8([eT({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],r8.prototype,"flipFallbackPlacements",2),o8([eT({attribute:"flip-fallback-strategy"})],r8.prototype,"flipFallbackStrategy",2),o8([eT({type:Object})],r8.prototype,"flipBoundary",2),o8([eT({attribute:"flip-padding",type:Number})],r8.prototype,"flipPadding",2),o8([eT({type:Boolean})],r8.prototype,"shift",2),o8([eT({type:Object})],r8.prototype,"shiftBoundary",2),o8([eT({attribute:"shift-padding",type:Number})],r8.prototype,"shiftPadding",2),o8([eT({attribute:"auto-size"})],r8.prototype,"autoSize",2),o8([eT()],r8.prototype,"sync",2),o8([eT({type:Object})],r8.prototype,"autoSizeBoundary",2),o8([eT({attribute:"auto-size-padding",type:Number})],r8.prototype,"autoSizePadding",2),o8([eT({attribute:"hover-bridge",type:Boolean})],r8.prototype,"hoverBridge",2);var r9=class extends im{constructor(){super(),this.localize=new iu(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=r6(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=r6(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await r7(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:o}=iG(this,"tooltip.show",{dir:this.localize.dir()});await r4(this.popup.popup,t,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await r7(this.body);let{keyframes:e,options:o}=iG(this,"tooltip.hide",{dir:this.localize.dir()});await r4(this.popup.popup,e,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,r3(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,r3(this,"sl-after-hide")}render(){return ey`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${iy({tooltip:!0,"tooltip--open":this.open})}
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
    `}};r9.styles=[ib,iZ],r9.dependencies={"sl-popup":r8},o8([eI("slot:not([name])")],r9.prototype,"defaultSlot",2),o8([eI(".tooltip__body")],r9.prototype,"body",2),o8([eI("sl-popup")],r9.prototype,"popup",2),o8([eT()],r9.prototype,"content",2),o8([eT()],r9.prototype,"placement",2),o8([eT({type:Boolean,reflect:!0})],r9.prototype,"disabled",2),o8([eT({type:Number})],r9.prototype,"distance",2),o8([eT({type:Boolean,reflect:!0})],r9.prototype,"open",2),o8([eT({type:Number})],r9.prototype,"skidding",2),o8([eT()],r9.prototype,"trigger",2),o8([eT({type:Boolean})],r9.prototype,"hoist",2),o8([ig("open",{waitUntilFirstUpdate:!0})],r9.prototype,"handleOpenChange",1),o8([ig(["content","distance","hoist","placement","skidding"])],r9.prototype,"handleOptionsChange",1),o8([ig("disabled")],r9.prototype,"handleDisabledChange",1),iW("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),iW("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),r9.define("sl-tooltip");var se=Object.defineProperty,st=Object.getOwnPropertyDescriptor,so=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?st(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&se(t,o,s),s};iW("tooltip.show",null),iW("tooltip.hide",null);let si=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.suppressed=!1,this.onMouseDown=e=>{this.suppressed=!0,this.hide()},this.onMouseUp=e=>{this.suppressed=!1},this.onDragStart=e=>{this.suppressed=!0,this.hide()},this.onDragEnd=e=>{this.suppressed=!1}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("dragstart",this.onDragStart,{capture:!0}),window.addEventListener("dragend",this.onDragEnd,{capture:!0})}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),this.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("dragstart",this.onDragStart,{capture:!0}),window.removeEventListener("dragend",this.onDragEnd,{capture:!0}),super.disconnectedCallback?.()}async hide(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.hide()}async show(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.show()}render(){var e;return ey`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled||this.suppressed}
			.distance=${this.distance??ex}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?iK(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};si.styles=O`
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
	`,so([eT()],si.prototype,"content",2),so([eT({reflect:!0})],si.prototype,"placement",2),so([eT({type:Boolean})],si.prototype,"disabled",2),so([eT({type:Number})],si.prototype,"distance",2),so([eT({type:Boolean,attribute:"hide-on-click"})],si.prototype,"hideOnClick",2),so([eT({type:Boolean})],si.prototype,"hoist",2),so([eD()],si.prototype,"suppressed",2),si=so([ez("gl-tooltip")],si);var sr=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,sn=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?ss(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sr(t,o,s),s};let sa="gl-copy-container",sl=class extends lit_element_i{constructor(){super(...arguments),this.copyLabel="Copy",this.copiedLabel="Copied",this.disabled=!1,this.placement="top",this.timeout=1e3,this.onFocusIn=()=>{this.tooltip?.show()},this.onFocusOut=()=>{this.tooltip?.hide()}}connectedCallback(){super.connectedCallback?.(),this.label=this.copyLabel,this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut)}disconnectedCallback(){this.cancelResetTimer(),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut),super.disconnectedCallback?.()}render(){return this.content||this.disabled?ey`<gl-tooltip
			tabindex="0"
			.content="${this.label}"
			placement="${this.placement??ex}"
			@click=${this.onClick}
			@keydown=${this.onKeydown}
		>
			<slot></slot>
		</gl-tooltip>`:ex}async onClick(e){if(this.cancelResetTimer(),this.content)try{await navigator.clipboard.writeText(this.content),this.label=this.copiedLabel}catch{this.label="Unable to Copy"}else this.label="Nothing to Copy";this.createResetTimer()}onKeydown(e){("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onClick(e))}cancelResetTimer(){null!=this._resetTimer&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}createResetTimer(){this._resetTimer=setTimeout(()=>{this._resetTimer=void 0,this.label=this.copyLabel},this.timeout)}};sl.tagName=sa,sl.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sl.styles=O`
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
	`,sn([eT({reflect:!0})],sl.prototype,"appearance",2),sn([eT({reflect:!1})],sl.prototype,"content",2),sn([eT()],sl.prototype,"copyLabel",2),sn([eT()],sl.prototype,"copiedLabel",2),sn([eT({type:Boolean,reflect:!0})],sl.prototype,"disabled",2),sn([eT()],sl.prototype,"placement",2),sn([eT({type:Number})],sl.prototype,"timeout",2),sn([eD()],sl.prototype,"label",2),sn([eI("gl-tooltip")],sl.prototype,"tooltip",2),sl=sn([ez(sa)],sl);var sc=Object.defineProperty,sh=Object.getOwnPropertyDescriptor,sd=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sh(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sc(t,o,s),s};let sp=O`
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
`,su=class extends lit_element_i{constructor(){super(...arguments),this.size=12}get label(){return eK(this.sha,{strings:{uncommitted:"Working",uncommittedStaged:"Staged",working:"Working"}})}render(){return null==this.sha?ex:!this.sha||eW(this.sha)?ey`<span part="label" class="label--uncommitted">${this.label}</span>`:ey`<code-icon part="icon" class="icon" icon="git-commit" size="${this.size}"></code-icon
			><span part="label">${this.label}</span>`}};su.styles=sp,sd([eT({type:String})],su.prototype,"sha",2),sd([eT({type:Number})],su.prototype,"size",2),su=sd([ez("gl-commit-sha")],su);let sg=class extends lit_element_i{constructor(){super(...arguments),this.size=12}render(){return null==this.sha?ex:ey`<gl-copy-container .content=${this.sha} placement="top">
			<gl-commit-sha exportparts="icon, label" .sha=${this.sha} .size=${this.size}></gl-commit-sha>
		</gl-copy-container>`}};sg.styles=sp,sd([eT({type:String})],sg.prototype,"sha",2),sd([eT({type:Number})],sg.prototype,"size",2),sg=sd([ez("gl-commit-sha-copy")],sg);let sf=O`
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
`,sb=O`
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
`;var sm=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,sy=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sv(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sm(t,o,s),s};let sw=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ey`<div class="container">
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
		</div>`}};sw.styles=[sf,sb],sy([eT({type:Boolean})],sw.prototype,"pulse",2),sw=sy([ez("gl-watermark-loader")],sw);var sx=Object.defineProperty,sk=Object.getOwnPropertyDescriptor,s_=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sk(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sx(t,o,s),s};let s$="gl-timeline-chart",sC=class extends GlElement{constructor(){super(...arguments),this._slices=new Map,this._slicesByIndex=new Map,this._commitsByTimestamp=new Map,this.placement="editor",this.sliceBy="author",this._data=null,this._shiftKeyPressed=!1,this.onDataPointClicked=e6((e,t)=>{let o=e.x,i=o instanceof Date?o:new Date(o),r=this._commitsByTimestamp.get(i.getTime())?.sha;null!=r&&(this._shaHovered=void 0,this._shaSelected=r,this.slider?.select(r),this.emit("gl-commit-select",{id:r,shift:this._shiftKeyPressed}))},50),this.onDataPointHovered=(e,t)=>{let o=e.x,i=o instanceof Date?o:new Date(o),r=this._commitsByTimestamp.get(i.getTime())?.sha;this._shaHovered=r},this.onDataPointUnhovered=(e,t)=>{if(this._shaHovered=void 0,this._shaSelected){let e=this._data?.find(e=>e.sha===this._shaSelected)?.date;null!=e&&this.selectDataPoint(new Date(e))}},this.onDocumentKeyDown=e=>{this._shiftKeyPressed=e.shiftKey,("Escape"===e.key||"Esc"===e.key)&&this.resetZoom()},this.onDocumentKeyUp=e=>{this._shiftKeyPressed=e.shiftKey},this.onResize=e=>{this._chart&&this.updateChartSize(e.detail.entries[0].contentRect)},this.onZoom=e=>{this.zoomedRange=e[0]<=this.range[0]&&e[1]>=this.range[1]?void 0:e}}get compact(){return"editor"!==this.placement}get data(){return this._data}get dataPromise(){return this._dataPromise}set dataPromise(e){this._dataPromise!==e&&(this._dataPromise=e,this._dataPromise?.then(e=>{this._data=e,this._dataReversed=e.toReversed()},()=>this._data=void 0))}get range(){return this._range}set range(e){this._range=e,this._rangeScrollable=[e[0].getTime()-144e5,e[1].getTime()+432e5],this.resetZoom()}get zoomedRange(){return this._zoomedRange}set zoomedRange(e){this._zoomedRange=e,this._zoomedRangeScrollable=e?[e[0].getTime(),e[1].getTime()]:void 0}get zoomed(){return null!=this._zoomedRange}connectedCallback(){super.connectedCallback?.(),document.addEventListener("keydown",this.onDocumentKeyDown),document.addEventListener("keyup",this.onDocumentKeyUp)}disconnectedCallback(){document.removeEventListener("keydown",this.onDocumentKeyDown),document.removeEventListener("keyup",this.onDocumentKeyUp),this._loading?.cancel(),this._chart?.destroy(),this._chart=void 0,super.disconnectedCallback?.()}update(e){(e.has("dataPromise")||null==this.dataPromise)&&this.updateChart(),super.update(e)}updateChart(){if(!this._loading?.pending){let e;this._loading=((e={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0}).promise=new Promise((t,o)=>{e.fulfill=function(o){e.pending=!1,t(o)},e.cancel=function(t){e.pending=!1,null!=t?o(t):o()}}),e),this._loading.promise.finally(()=>this._loading=void 0),this.emit("gl-loading",this._loading.promise)}null!=this.dataPromise&&(this._chartAborter?.abort(),this._chartAborter=new AbortController,this.renderChart(this.dataPromise,this._loading,this._chartAborter.signal))}render(){return ey`${this.renderNotice()}
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
				${this.data?.length?this.renderFooter():ex}
			</gl-chart-scroller>`}renderNotice(){return this._loading?.pending||null==this.data?ey`<div class="notice notice--blur">
				<gl-watermark-loader pulse><p>Loading...</p></gl-watermark-loader>
			</div>`:this.data.length?ex:ey`<div class="notice">
				<gl-watermark-loader><slot name="empty"></slot></gl-watermark-loader>
			</div>`}renderFooter(){let e=this._shaHovered??this._shaSelected;return ey`<footer>
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
		</footer>`}renderActions(){return ey`<div class="actions">
			${this.zoomed?ey`<gl-button
						appearance="toolbar"
						@click=${e=>e.shiftKey||e.altKey?this.resetZoom():this.zoom(-1)}
						aria-label="Zoom Out"
					>
						<code-icon icon="zoom-out"></code-icon>
						<span slot="tooltip">Zoom Out<br />[Alt] Reset Zoom</span>
					</gl-button>`:ex}
			<gl-button appearance="toolbar" @click=${()=>this.zoom(.5)} tooltip="Zoom In" aria-label="Zoom In">
				<code-icon icon="zoom-in"></code-icon>
			</gl-button>
		</div>`}onFooterShaMouseOver(){this._shaSelected&&this.showTooltip(this._data?.find(e=>e.sha===this._shaSelected))}onFooterShaMouseOut(){this.hideTooltip()}onScrollStart(){this._chart&&this.zoomed&&(this._transitionDuration=this._chart?.config("transition.duration"),this._chart?.config("transition.duration",0))}onScrollEnd(){this._chart&&this.zoomed&&this._chart?.config("transition.duration",this._transitionDuration)}onScroll(e){if(!this._chart||!this.zoomed)return;let t=[new Date(e.detail.range[0]),new Date(e.detail.range[1])];this._chart.zoom(t)}onSliderChanged(e){this.revealDate(e.detail.date,{focus:!0,select:!0});let t=this._commitsByTimestamp.get(e.detail.date.getTime()),o=t?.sha;this._shaHovered=void 0,this._shaSelected=o,this.showTooltip(t),null!=o&&this.emit("gl-commit-select",{id:o,shift:e.detail.shift})}onSliderMouseOver(e){this.showTooltip(this.slider?.value)}onSliderMouseOut(e){this.hideTooltip()}resetZoom(){this.zoomedRange=void 0,this._chart?.unzoom()}revealDate(e,t){let o,i;if(!this._chart||(this.selectDataPoint(e,t),!this.zoomedRange))return;let r=this.zoomedRange,s=r[1].getTime()-r[0].getTime();if(e<r[0])i=new Date((o=new Date(e.getTime()-.2*s)).getTime()+s),o<=this.range[0]&&(i=new Date((o=e1(this.range[0],{hours:-12})).getTime()+s));else{if(!(e>r[1]))return;o=new Date((i=new Date(e.getTime()+.2*s)).getTime()-s),i>=this.range[1]&&(o=new Date((i=e1(this.range[1],{hours:12})).getTime()-s))}this._chart.zoom([o,i])}selectDataPoint(e,t){let o=this.getInternalChart();if(null==o)return;let i=this.getDataPoint(e);if(null==i)return;t?.focus&&o.showGridFocus([i]);let{index:r}=i;if(null!=r&&(this._chart?.$.main.selectAll(`.bb-chart-circles .bb-shape-${r}`).each(()=>o.setExpand?.(r,null,!0)),t?.select)){let t=this._commitsByTimestamp.get(e.getTime())?.sha;this._shaHovered=void 0,this._shaSelected=t,null!=t&&this.slider?.select(t)}}showTooltip(e){null!=e&&this._chart?.tooltip.show({x:new Date(e.date)})}hideTooltip(){this._chart?.tooltip.hide()}zoom(e){if(0===e)return void this.resetZoom();if(!this._chart)return;let t=this._chart.zoom(),o=[t[0].getTime(),t[1].getTime()],i=o[1]-o[0],r=new Date((o[1]+o[0])/2),s=r.getTime()-i*(1-e)/2,a=r.getTime()+i*(1-e)/2;if(a-s<(this.range[1].getTime()-this.range[0].getTime())/40)return;let c=this._chart.zoom([new Date(s),new Date(a)]);e<0&&c[0].getTime()===o[0]&&c[1].getTime()===o[1]&&this.resetZoom()}calculateBubbleSize(e,{minRadius:t,maxRadius:o,q1:i,q3:r,maxChanges:s}){let a;return 0===e?t:(a=e<=i?t+e/i*10:e<=r?t+10+(e-i)/(r-i)*15:t+25+Math.log(e-r+1)/Math.log(s-r+1)*15,Math.max(t,Math.min(o,a)))}calculateChangeMetrics(e){let t=e.map(e=>(e.additions??0)+(e.deletions??0)).sort((e,t)=>e-t);return{maxChanges:t[t.length-1],q1:t[Math.floor(.25*t.length)],q3:t[Math.floor(.75*t.length)]}}getDataPoint(e){let t=e instanceof Date?e.getTime():new Date(e).getTime();return this._chart?.data()[0]?.values.find(e=>("number"==typeof e.x?e.x:e.x.getTime())===t)}getInternalChart(){try{let e=this._chart?.internal;return this._chart,e}catch{return}}getOnRenderedCallback(e){return function(){let t=this;null!=t&&t.$.main.selectAll(".bb-axis-y .tick text tspan").each(function(o){if(this==null)return;let i=e._slicesByIndex.get(-o.index),r=t.color(i);e.compact&&this.setAttribute("fill",r);let s=document.createElementNS("http://www.w3.org/2000/svg","title");s.textContent=i,this.appendChild(s)})}}prepareChartData(e,t){let o=e.length+1,i=Array(o);i[0]="time";let r=Array(o);r[0]="additions";let s=Array(o);s[0]="deletions";let a={time:"x",additions:"y2",deletions:"y2"},c={additions:"bar",deletions:"bar"},h={additions:"time",deletions:"time"};this._slices.clear(),this._slicesByIndex.clear();let p=0,u=(e,t,o)=>{let i=this._slices.get(e);null==i?(i={x:[`time.${e}`,t],y:p,z:new Map([[t,o]])},this._slices.set(e,i),this._slicesByIndex.set(p,e),a[e]="y",c[e]="scatter",h[e]=`time.${e}`,p--):(i.x.push(t),i.z.set(t,o))},g=0;for(let o of e){let{author:e,date:a,additions:c=0,deletions:h=0,branches:p}=o;this._commitsByTimestamp.set(new Date(a).getTime(),o),i[++g]=a,r[g]=c,s[g]=h;let f=this.calculateBubbleSize(c+h,t);if("branch"===this.sliceBy)for(let e of p?.length?p:[this.head??"HEAD"])u(e,a,f);else u(e,a,f)}let f=[i,r,s];for(let[e,t]of this._slices){f.push(t.x);let o=Array(t.x.length).fill(t.y);o[0]=e,f.push(o)}return{axes:a,columns:f,names:{additions:"Additions",deletions:"Deletions"},types:c,xs:h}}async renderChart(o,i,r){let s=await o;if(r.aborted)return void i?.cancel();this._slices.clear(),this._slicesByIndex.clear(),this._commitsByTimestamp.clear();let a={minRadius:6,maxRadius:50,...this.calculateChangeMetrics(s)},{bb:c,bar:h,scatter:p,selection:u,zoom:g}=await $.e(162).then($.bind($,5973));if(r.aborted)return void i?.cancel();this.range=s.length?[new Date(s[s.length-1].date),new Date(s[0].date)]:[new Date,new Date],h(),p();let f=this.prepareChartData(s,a);try{let o=-(this._slices.size+1),r=[...this._slicesByIndex.keys()];if(null==this._chart){let a={bindto:this.chartContainer,onafterinit:()=>{this.updateChartSize(),setTimeout(()=>i?.fulfill(),0)},onrendered:this.getOnRenderedCallback(this),clipPath:!0,data:{...f,colors:{additions:"rgba(73, 190, 71, 1)",deletions:"rgba(195, 32, 45, 1)"},groups:[["additions","deletions"]],selection:{enabled:u(),draggable:!1,grouped:!0,multiple:!1,isselectable:()=>!1},onclick:this.onDataPointClicked,onover:this.onDataPointHovered,onout:this.onDataPointUnhovered},axis:{x:{type:"timeseries",localtime:!0,height:this.compact?28:void 0,forceAsSingle:!0,tick:{fit:!1,format:e=>"number"==typeof e?e:e2(e,this.shortDateFormat??"short"),outer:!0}},y:{max:0,min:o,padding:{top:75,bottom:75},tick:{format:e=>this.compact?"branch"===this.sliceBy?"":"":function(e,t="…"){if(!e)return e;let o=null==e||0===e.length?0:(0,ty.A)(e,tS,tA).width;return o<=30?e:`${e.slice(0,Math.floor(15)-1)}${t}${e.slice(o-Math.ceil(15))}`}(this._slicesByIndex.get(e)??""),outer:!0,values:r}},y2:{padding:this.compact?{top:0,bottom:0}:void 0,label:this.compact?void 0:{text:"Lines changed",position:"outer-middle"},show:!0,tick:{format:e=>this.compact?"":e,outer:!0}}},bar:{width:2,sensitivity:4,padding:2},scatter:{zerobased:!0},grid:{focus:{edge:!0,show:!0,y:!0},front:!1,lines:{front:!1},x:{show:!1},y:{show:!0}},legend:{show:!0,hide:["additions","deletions"],padding:4,item:{tile:{type:"circle",r:5},interaction:{dblclick:!0}},tooltip:!0},point:{r:e=>null==e||"function"==typeof e.data&&(e=e.data()[0],null==e)?0:null!=e.r?e.r:Math.max(6,this._slices.get(e.id)?.z.get(e.x.toISOString())??6),focus:{expand:{enabled:!0}},select:{r:6}},resize:{auto:!1},tooltip:{contents:(o,i,r,s)=>{var a;let c=o[0],h=new Date(c.x),p=this._commitsByTimestamp.get(h.getTime());if(null==p)return"";if(""===p.sha)return`<div class="bb-tooltip">
									<div class="author">Working Tree</div>
									<div class="message"><span class="message__content">No uncommitted changes</span></div>
								</div>`;let u=p.additions,g=p.deletions,f=null==u?"":`<span class="additions">+${tE("line",u)}</span>`,b=null==g?"":`<span class="deletions">-${tE("line",g)}</span>`;f&&(b=`, ${b}`);let m=p.branches?.length?`<div class="branches"><span class="icon">\uEA68</span> ${p.branches.join(", ")}</div>`:"";return`<div class="bb-tooltip">
									<div class="author">${p.author}</div>
									<div>
										<span class="sha"><span class="icon">\uEAFC</span> ${eK(p.sha)}</span>
										<span class="changes">${f}${b}</span>
									</div>
									<div class="date">
										<span class="icon">\uEA82</span><span class="date--relative">${(a=function(o){let i=("number"==typeof o?o:o.getTime())-Date.now();for(let[o,r,s,a]of eJ)if(Math.abs(i)>=r||1e3===r)return null==t&&(t=new Intl.RelativeTimeFormat(e,{localeMatcher:"best fit",numeric:"auto",style:"long"})),t.format(Math.trunc(i/s),o);return""}(h)).charAt(0).toUpperCase()+a.slice(1)}</span><span class="date--absolute">(${e2(h,this.dateFormat)})</span>
									</div>
									${m}
									<div class="message"><span class="message__content">${p.message}</span></div>
								</div>`},show:!0},zoom:{enabled:g(),type:"wheel",extent:[1,40],onzoom:this.onZoom,onzoomend:this.onZoom}};this._chart=c.generate(a);let h=s[0];this._shaHovered=void 0,this._shaSelected=h?.sha,null!=h&&this.selectDataPoint(new Date(h.date),{select:!0})}else this._chart.config("axis.y.tick.values",r,!1),this._chart.config("axis.y.min",o,!1),this._chart.load({...f,resizeAfter:!0,unload:!0,done:()=>{let e;null!=this._shaSelected&&(e=s.find(e=>e.sha===this._shaSelected)),null==e&&(e=s[0],this._shaHovered=void 0,this._shaSelected=e?.sha),null!=e&&this.selectDataPoint(new Date(e.date),{select:!0}),setTimeout(()=>i?.fulfill(),0)}});return void await i.promise.catch(()=>{})}catch(e){i?.cancel()}}updateChartSize(e){(e??=this.chartContainer.getBoundingClientRect()).width>0&&e.height>0&&requestAnimationFrame(()=>{this._chart.resize({width:e.width,height:e.height}),this.updateScrollerTrackPosition()})}updateScrollerTrackPosition(){let e=this.shadowRoot?.querySelector(".bb-axis.bb-axis-x");if(null==e)return;let t=e.getBoundingClientRect(),o=this.chartContainer.getBoundingClientRect();this.style.setProperty("--scroller-track-top",`${t.top-(o.top-1)}px`),this.style.setProperty("--scroller-track-left",`${t.left+2}px`),this.style.setProperty("--scroller-track-width",`${t.width-2}px`)}};sC.tagName=s$,sC.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sC.styles=[oV],s_([eI("#chart")],sC.prototype,"chartContainer",2),s_([eI(iA.tagName)],sC.prototype,"slider",2),s_([eD()],sC.prototype,"_loading",2),s_([eT()],sC.prototype,"placement",2),s_([eT()],sC.prototype,"dateFormat",2),s_([eT({type:String})],sC.prototype,"head",2),s_([eT({type:Object})],sC.prototype,"scope",2),s_([eT()],sC.prototype,"shortDateFormat",2),s_([eT()],sC.prototype,"sliceBy",2),s_([eD()],sC.prototype,"_data",2),s_([eT({type:Object})],sC.prototype,"dataPromise",1),s_([eD()],sC.prototype,"_shaHovered",2),s_([eD()],sC.prototype,"_shaSelected",2),s_([eD()],sC.prototype,"_shiftKeyPressed",2),s_([eD()],sC.prototype,"_zoomedRange",2),s_([eT({type:Boolean,reflect:!0})],sC.prototype,"zoomed",1),s_([om({args:{0:e=>e?.length}})],sC.prototype,"prepareChartData",1),s_([om({args:!1})],sC.prototype,"renderChart",1),sC=s_([ez(s$)],sC);let sP=O`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;O`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${sP}
	}
`;let sS=O`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,sA=O`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,sE=O`
	:focus-visible {
		${sS}
	}
`;var sz=Object.defineProperty,sO=Object.getOwnPropertyDescriptor,sT=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sO(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sz(t,o,s),s};let sD=class extends lit_element_i{render(){return ey`<slot></slot>`}};sD.styles=O`
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
	`,sD=sT([ez("gl-breadcrumbs")],sD);let sR=class extends lit_element_i{constructor(){super(...arguments),this.collapsibleState="none",this._shrink=1,this.onToggleCollapse=e=>{e.preventDefault(),e.stopPropagation(),e instanceof KeyboardEvent&&"Enter"!==e.key&&" "!==e.key||(this.collapsed=!this.collapsed)}}get collapsed(){return this._collapsed??"collapsed"===this.collapsibleState}set collapsed(e){this._collapsed=e}get collapsible(){return"none"!==this.collapsibleState}get shrink(){return this._shrink}set shrink(e){let t=this._shrink;this._shrink=e,this.style.setProperty("--gl-breadcrumb-item-shrink",String(e)),this.requestUpdate("shrink",t)}render(){let{collapsed:e,collapsible:t}=this;return ey`<div class=${iy({"breadcrumb-item":!0,collapsible:t})}>
			<span class="breadcrumb-content">
				${this.renderIcon(t,e)}
				<slot class="breadcrumb-label"></slot>
			</span>
			<slot name="children"></slot>
		</div>`}renderIcon(e,t){return this.icon?e||this.iconTooltip?ey`<gl-tooltip
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
		</gl-tooltip>`:ey`<code-icon class="breadcrumb-icon" icon="${this.icon}"></code-icon>`:ex}};sR.styles=[sE,O`
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
		`],sT([eD()],sR.prototype,"_collapsed",2),sT([eT({type:Boolean,reflect:!0})],sR.prototype,"collapsed",1),sT([eT({type:String})],sR.prototype,"collapsibleState",2),sT([eT()],sR.prototype,"icon",2),sT([eT()],sR.prototype,"iconTooltip",2),sT([eT({type:Number})],sR.prototype,"shrink",1),sR=sT([ez("gl-breadcrumb-item")],sR);let sI=class extends lit_element_i{render(){return ey`<slot></slot>`}};sI.styles=O`
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
	`,sI=sT([ez("gl-breadcrumb-item-child")],sI);let sL=O`
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
`;O`
	* {
		box-sizing: border-box;
	}
`;let sM=O`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${sS}
	}
	a:hover {
		text-decoration: underline;
	}
`,sB=O`
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
`;O`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;var sF=Object.defineProperty,sN=Object.getOwnPropertyDescriptor,sj=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sN(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sF(t,o,s),s};let sU=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ey`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??ex}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ey`<gl-tooltip placement=${this.tooltipPlacement??ex}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ey`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??ex}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ey`<button
			class="control"
			role=${this.role??ex}
			aria-checked=${this.ariaChecked??ex}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};sU.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sU.styles=[sL,O`
			:host {
				/* Base color variables - can be overridden by variant */
				--button-foreground: var(--vscode-button-foreground);
				--button-background: var(--vscode-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-border: var(--vscode-button-border, transparent);

				/* Layout variables */
				--button-padding: 0.4rem;
				--button-gap: 0.6rem;
				--button-compact-padding: 0.4rem;
				--button-input-padding: 0.1rem;
				--button-tight-padding: 0.4rem 0.8rem;
				--button-line-height: 1.35;

				display: inline-block;
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

				width: max-content;
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
				${sA}
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
		`],sj([eI(".control")],sU.prototype,"control",2),sj([eT({reflect:!0})],sU.prototype,"appearance",2),sj([eT({reflect:!0})],sU.prototype,"variant",2),sj([eT({type:Boolean,reflect:!0})],sU.prototype,"disabled",2),sj([eT({reflect:!0})],sU.prototype,"density",2),sj([eT({type:Boolean,reflect:!0})],sU.prototype,"full",2),sj([eT()],sU.prototype,"href",2),sj([eT()],sU.prototype,"tooltip",2),sj([eT()],sU.prototype,"tooltipPlacement",2),sj([eT({type:Boolean,reflect:!0})],sU.prototype,"truncate",2),sU=sj([ez("gl-button")],sU);let sq=O`
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
`;var sH=Object.defineProperty,sV=Object.getOwnPropertyDescriptor,sW=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sV(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sH(t,o,s),s};let sG=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return ey` <code-icon icon="check"></code-icon> `}render(){return ey`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};function sK(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}sG.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},sG.styles=[sq],sW([eT({type:Boolean,reflect:!0})],sG.prototype,"disabled",2),sW([eT({type:String})],sG.prototype,"value",2),sW([eT({type:Boolean})],sG.prototype,"defaultChecked",1),sW([eT({type:Boolean,reflect:!0})],sG.prototype,"checked",2),sG=sW([ez("gl-checkbox")],sG),r8.define("sl-popup");var sZ=Object.defineProperty,sY=Object.getOwnPropertyDescriptor,sX=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?sY(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&sZ(t,o,s),s};let sJ=class extends GlElement{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.suppressed=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1,this.open&&"hover"===this._triggeredBy&&(this.suppressed=!0,this.hide())},this.handleMouseUp=()=>{this.suppressed=!1},this.handleDragStart=()=>{this.suppressed=!0,this.hide()},this.handleDragEnd=()=>{this.suppressed=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleDocumentMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=ox(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let o=ox(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),o)}}}static closeOthers(e){for(let t of sJ.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}connectedCallback(){super.connectedCallback?.(),this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("dragstart",this.handleDragStart,{capture:!0}),window.addEventListener("dragend",this.handleDragEnd,{capture:!0})}disconnectedCallback(){this.removeEventListener("blur",this.handleTriggerBlur,!0),this.removeEventListener("focus",this.handleTriggerFocus,!0),this.removeEventListener("click",this.handleTriggerClick),this.removeEventListener("mousedown",this.handleTriggerMouseDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut),this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("dragstart",this.handleDragStart,{capture:!0}),window.removeEventListener("dragend",this.handleDragEnd,{capture:!0}),sJ.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return ey`<sl-popup
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
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open&&!this.suppressed)return sJ.closeOthers(this),this.open=!0,sJ.openPopovers.add(this),ok(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,sJ.openPopovers.delete(this),ok(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleDocumentMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};sJ.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sJ.openPopovers=new Set,sJ.styles=[sB,O`
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
		`],sX([eI("#popover")],sJ.prototype,"body",2),sX([eI("sl-popup")],sJ.prototype,"popup",2),sX([eT({reflect:!0})],sJ.prototype,"placement",2),sX([eT({type:Object})],sJ.prototype,"anchor",2),sX([eT({reflect:!0,type:Boolean})],sJ.prototype,"disabled",2),sX([eT({type:Number})],sJ.prototype,"distance",2),sX([eT({reflect:!0,type:Boolean})],sJ.prototype,"open",2),sX([eT({reflect:!0,type:Boolean})],sJ.prototype,"arrow",2),sX([eT({type:Number})],sJ.prototype,"skidding",2),sX([eT()],sJ.prototype,"trigger",2),sX([eT({type:Boolean})],sJ.prototype,"hoist",2),sX([eT({reflect:!0})],sJ.prototype,"appearance",2),sX([eD()],sJ.prototype,"suppressed",2),sX([tv("open",{afterFirstUpdate:!0})],sJ.prototype,"handleOpenChange",1),sX([tv(["distance","hoist","placement","skidding"])],sJ.prototype,"handleOptionsChange",1),sX([tv("disabled")],sJ.prototype,"handleDisabledChange",1),sJ=sX([ez("gl-popover")],sJ);let sQ=(e,t)=>{let o=e._$AN;if(void 0===o)return!1;for(let e of o)e._$AO?.(t,!1),sQ(e,t);return!0},s0=e=>{let t,o;do{if(void 0===(t=e._$AM))break;(o=t._$AN).delete(e),e=t}while(0===o?.size)},s1=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),s8(t)}};function s2(e){void 0!==this._$AN?(s0(this),this._$AM=e,s1(this)):this._$AM=e}function s5(e,t=!1,o=0){let i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(i))for(let e=o;e<i.length;e++)sQ(i[e],!1),s0(i[e]);else null!=i&&(sQ(i,!1),s0(i));else sQ(this,e)}let s8=e=>{2==e.type&&(e._$AP??=s5,e._$AQ??=s2)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),s1(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(sQ(this,e),s0(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let s3=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!s3(e))??ew}update(e,t){let o=this._$Cbt,i=o.length;this._$Cbt=t;let r=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!s3(a))return this._$Cwt=e,a;e<i&&a===o[e]||(this._$Cwt=0x3fffffff,i=0,Promise.resolve(a).then(async e=>{for(;s.get();)await s.get();let t=r.deref();if(void 0!==t){let o=t._$Cbt.indexOf(a);o>-1&&o<t._$Cwt&&(t._$Cwt=o,t.setValue(e))}}))}return ew}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let s4=iv(until_c);var s6=Object.defineProperty,s7=Object.getOwnPropertyDescriptor,s9=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?s7(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&s6(t,o,s),s};let ne=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ey`${s4(this.promoPromise?.then(e=>this.renderPromo(e)),ex)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return ey`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,ey`<p class="promo" part="text">${iK(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ey`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??ex}"
						>${iK(t.link.html)}</a
					>`}return this.hasPromo=!1,ex}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),sK(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};ne.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ne.styles=[O`
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
				${sS}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],s9([eI('a,button,[tabindex="0"]')],ne.prototype,"_focusable",2),s9([eT({type:Object})],ne.prototype,"promoPromise",2),s9([eT({type:Object})],ne.prototype,"source",2),s9([eT({reflect:!0,type:String})],ne.prototype,"type",2),s9([eT({type:Boolean,reflect:!0,attribute:"has-promo"})],ne.prototype,"hasPromo",1),ne=s9([ez("gl-promo")],ne);var nt=Object.defineProperty,no=Object.getOwnPropertyDescriptor,ni=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?no(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&nt(t,o,s),s};let nr=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){var e,t;return null==this.subscription?0:(e=this.subscription,t=e.plan.effective.expiresOn,(null!=t?function(e,t,o,i){let r=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),s=i??Math.floor;switch(o){case"days":return s(r/864e5);case"hours":return s(r/36e5);case"minutes":return s(r/6e4);case"seconds":return s(r/1e3);default:return r}}(Date.now(),new Date(t),"days",Math.round):void 0)??0)}get state(){return this.subscription?.state}render(){return ey`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription)if(this.state===eZ.VerificationRequired)return ey`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else{var t;if(e4(this.subscription)||this.cloud&&null!=this.subscription.account)return ey`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;if(null!=(t=this.subscription).state?t.state===eZ.Trial:t.plan.actual.id!==t.plan.effective.id)return ey`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=ey`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===eZ.Paid?ey`<div class="popup-header">${e}</div>`:this.cloud?this.preview?ey`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Unlock this feature with an account and may require GitLens Pro in the future</span
					>
				</div>`:ey`<div class="popup-header">
				${e}<span class="popup-subtitle"> Unlock this feature with GitLens Pro</span>
			</div>`:this.preview?ey`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:ey`<div class="popup-header">
			${e}<span class="popup-subtitle"> Unlock this feature for privately hosted repos with GitLens Pro</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return ex;switch(this.state){case eZ.Paid:var t;e=ey`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${sK("gitlens.showAccountView")}"
							>${t=this.subscription?.plan.actual.id??"pro",`GitLens ${function(e){switch(e){case"student":return"Student";case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}(t)}`}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case eZ.VerificationRequired:e=ey`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${sK("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${sK("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case eZ.Trial:{let t=this.daysRemaining;e=ey`<p>
						You have
						<strong>${t<1?"<1 day":tE("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case eZ.TrialExpired:e=ey`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ey`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case eZ.TrialReactivationEligible:e=ey`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${tE("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${sK("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${tE("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:e=ey`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return ey`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return ey`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${sK("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${sK("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return ey`<div class="actions">
			${e??ex}
			<gl-button
				density="tight"
				href="${sK("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return ey`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};nr.styles=[sL,sM,O`
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
				${E(sS)}
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
		`],ni([eT({type:Boolean})],nr.prototype,"cloud",2),ni([eT({reflect:!0})],nr.prototype,"placement",2),ni([eT({type:Boolean})],nr.prototype,"preview",2),ni([tc({context:"promos"})],nr.prototype,"promos",2),ni([eT({type:Object})],nr.prototype,"source",2),ni([eT({attribute:!1})],nr.prototype,"subscription",2),nr=ni([ez("gl-feature-badge")],nr);var ns=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,na=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?nn(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&ns(t,o,s),s};let nl=class extends lit_element_i{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,e)return;let t=(this.appearance??"alert")==="alert"?"alert":void 0;switch(this.state){case eZ.VerificationRequired:return ey`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${t??ex}"
							href="${sK("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${t??ex}"
							href="${sK("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case eZ.Community:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let o=(new Date(t[t.length-1].expiresOn).getTime()-Date.now())/36e5;return t.length<=3&&o>0&&o<24?"active":"expired"}(this.featurePreview))return ey`${this.renderFeaturePreview(this.featurePreview)}`;return ey`<slot name="feature"></slot>
					<p>
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${tC.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ex}"
							href="${sK("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${sK("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${tE("day",14)} of
						<a href="${tC.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case eZ.TrialExpired:return ey`<slot name="feature"></slot>
					<p>
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${tC.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ex}"
							href="${sK("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						>
					</p>
					<p>${this.renderPromo()}</p>`;case eZ.TrialReactivationEligible:return ey`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??ex}"
							href="${sK("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${tE("day",14)}!
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,o=e.usages.length;return 0===o?ey`<slot name="feature"></slot>
				<gl-button appearance="${t??ex}" href="${this.featurePreviewCommandLink??ex}"
					>Continue</gl-button
				>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately hosted
					repos, or
					<a href="${sK("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?ey`<br />`:""} For full access to all GitLens Pro features,
					<a href="${sK("gitlens.plus.signUp",this.source)}"
						>start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:ey`
			${this.renderFeaturePreviewStep(e,o)}
			<p class="actions-row">
				<gl-button
					class="inline"
					appearance="${t??ex}"
					href="${this.featurePreviewCommandLink??ex}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${sK("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<p>
				After continuing, you will have ${tE("day",3-o,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately hosted
				repos.<br />
				${"alert"!==t?ey`<br />`:""} For full access to all GitLens Pro features,
				<a href="${sK("gitlens.plus.signUp",this.source)}"
					>start your free ${14}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"!==e.feature)return ey`<slot name="feature"></slot>`;switch(t){case 1:return ey`<p>Try Commit Search</p>
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
							</p> `;case 2:return ey`
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
						`;default:return ey`<slot name="feature"></slot>`}}renderPromo(){return ey`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"gate")}
			.source=${this.source}
		></gl-promo>`}};nl.styles=[O`
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
		`,oF],na([eI("gl-button")],nl.prototype,"button",2),na([eT()],nl.prototype,"appearance",2),na([eT({type:Object})],nl.prototype,"featurePreview",2),na([eT()],nl.prototype,"featurePreviewCommandLink",2),na([eT()],nl.prototype,"featureRestriction",2),na([eT()],nl.prototype,"featureWithArticleIfNeeded",2),na([tc({context:"promos"})],nl.prototype,"promos",2),na([eT({type:Object})],nl.prototype,"source",2),na([eT({attribute:!1,type:Number})],nl.prototype,"state",2),na([eT()],nl.prototype,"webroot",2),nl=na([ez("gl-feature-gate-plus-state")],nl);var nc=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,nd=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?nh(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&nc(t,o,s),s};let np=class extends lit_element_i{render(){var e;if(this.hidden||null!=(e=this.state)&&(e===eZ.Trial||e===eZ.Paid))return;let t=this.appearance??(document.body.getAttribute("data-placement")??"editor")==="editor"?"alert":"default";return ey`
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
		`}};np.styles=[oF,O`
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
		`],nd([eT({reflect:!0})],np.prototype,"appearance",2),nd([eT({type:Object})],np.prototype,"featurePreview",2),nd([eT({type:String})],np.prototype,"featurePreviewCommandLink",2),nd([eT()],np.prototype,"featureRestriction",2),nd([eT()],np.prototype,"featureWithArticleIfNeeded",2),nd([eT({type:Object})],np.prototype,"source",2),nd([eT({attribute:!1,type:Number})],np.prototype,"state",2),nd([eT({type:String})],np.prototype,"webroot",2),np=nd([ez("gl-feature-gate")],np);var nu=Object.defineProperty,ng=Object.getOwnPropertyDescriptor;let nf=class extends lit_element_i{render(){return ey`<slot></slot>`}};nf.styles=[sL,O`
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
		`],nf=((e,t,o,i)=>{for(var r,s=i>1?void 0:i?ng(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&nu(t,o,s),s})([ez("menu-label")],nf);var nb=Object.defineProperty,nm=Object.getOwnPropertyDescriptor,nv=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?nm(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&nb(t,o,s),s};let ny=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return ey`<div class="progress-bar"></div>`}};ny.styles=O`
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
	`,nv([eT({reflect:!0})],ny.prototype,"mode",2),nv([eT({type:Boolean})],ny.prototype,"active",2),nv([eT()],ny.prototype,"position",2),ny=nv([ez("progress-indicator")],ny);let nw=O`
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
`,nx=O`
	code-icon.picker-icon {
		font-size: 1rem;
		/* margin-top: 0.4rem; */
		margin-right: -0.25rem;
	}

	code-icon.picker-icon::before {
		margin-left: -0.4rem;
	}
`,nk=O`
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
`;var n_=Object.defineProperty,n$=Object.getOwnPropertyDescriptor,nC=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?n$(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&n_(t,o,s),s};let nP=class extends lit_element_i{constructor(){super(...arguments),this.icon=!1,this.size=13,this.worktree=!1}render(){let e,t;if(null==this.ref)return ex;switch(this.ref.refType){case"branch":e=this.worktree?"worktree":"branch",t=this.worktree?"gl-worktree":"git-branch";break;case"tag":e="tag",t="tag";break;default:e="revision",t="git-commit"}return ey`${this.icon?ey`<code-icon
						class="icon${e?` ${e}`:""}"
						icon="${t}"
						size="${this.size}"
					></code-icon>`:ex}<span class="label">${this.ref.name}</span>`}};nP.styles=O`
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
	`,nC([eT({type:Boolean,reflect:!0})],nP.prototype,"icon",2),nC([eT({type:Object})],nP.prototype,"ref",2),nC([eT({type:Number})],nP.prototype,"size",2),nC([eT({type:Boolean})],nP.prototype,"worktree",2),nP=nC([ez("gl-ref-name")],nP);var nS=Object.defineProperty,nA=Object.getOwnPropertyDescriptor,nE=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?nA(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&nS(t,o,s),s};let nz=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.icon=!1,this.size=16,this.worktree=!1}render(){return ey`<gl-button appearance="toolbar" href=${this.href??ex} ?disabled=${this.disabled}
			>${null==this.ref?ey`<slot name="empty">&lt;missing&gt;</slot>`:ey`<gl-ref-name
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
		></gl-button>`}};nz.styles=[nw,O`
			:host {
				--font-weight: normal;
			}

			gl-button {
				max-width: 100%;
			}

			gl-ref-name:not([icon]) {
				padding-left: 0.2rem;
			}
		`,nx],nE([eT({type:Boolean,reflect:!0})],nz.prototype,"disabled",2),nE([eT({type:String,reflect:!0})],nz.prototype,"href",2),nE([eT({type:Boolean,reflect:!0})],nz.prototype,"icon",2),nE([eT({type:Object})],nz.prototype,"ref",2),nE([eT({type:Number})],nz.prototype,"size",2),nE([eT({type:Boolean})],nz.prototype,"worktree",2),nz=nE([ez("gl-ref-button")],nz);let nO=O`
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
`,nT=O`
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
`;var nD=Object.defineProperty,nR=Object.getOwnPropertyDescriptor,nI=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?nR(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&nD(t,o,s),s};let nL=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ey`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};nL.styles=[nO,nT],nI([eT({type:Boolean})],nL.prototype,"pulse",2),nL=nI([ez("gl-indicator")],nL);var nM=Object.defineProperty,nB=Object.getOwnPropertyDescriptor,nF=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?nB(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&nM(t,o,s),s};let nN=class extends GlElement{constructor(){super(...arguments),this.connectIcon=!0,this.disabled=!1,this.icon=!0,this.hasMultipleRepositories=!1,this.expandable=!1}get icons(){if(this.repository?.provider===void 0)return;let e=0;if(this.icon&&e++,this.connectIcon&&this.repository.provider.integration?.connected===!1&&e++,0!==e)return e}get displayName(){return this.repository?.name??"none selected"}render(){return ey`
			${this.renderProviderIcon()}
			<gl-button
				class="truncated-button"
				appearance="toolbar"
				?disabled=${this.disabled}
				@click=${e=>this.emit("gl-click",{event:e,part:"label",repository:this.repository})}
			>
				<span class="truncated-button__label">${this.displayName}</span>
				${this.hasMultipleRepositories?ey`<code-icon
							slot="suffix"
							class="picker-icon"
							icon="chevron-down"
							aria-hidden="true"
						></code-icon>`:ex}
				<slot name="tooltip" slot="tooltip">${this.displayName}</slot>
			</gl-button>
		`}renderProviderIcon(){var e,t,o;if(!this.icon)return ex;let{repository:i}=this;if(!i?.provider)return ey`
				<gl-button part="provider-icon" appearance="toolbar" ?disabled=${!0}>
					<code-icon icon="gl-repository" aria-hidden="true"></code-icon>
				</gl-button>
			`;let{provider:r}=i,s=r.integration?.connected;return ey`<gl-popover placement="bottom" trigger="hover click focus">
				<gl-button
					slot="anchor"
					part="provider-icon"
					appearance="toolbar"
					href=${r.url??ex}
					aria-label=${`Open Repository on ${r.name}`}
					@click=${e=>this.emit("gl-click",{event:e,part:"icon",repository:this.repository})}
				>
					<code-icon
						icon=${"cloud"===r.icon?"cloud":`gl-provider-${r.icon}`}
						aria-hidden="true"
					></code-icon>
					${e=()=>ey`<gl-indicator class="indicator-dot"></gl-indicator>`,s?e(s):void 0}
				</gl-button>
				<span slot="content">
					Open Repository on ${r.name}
					<hr />
					${t=()=>ey`
							<span>
								<code-icon style="margin-top: -3px" icon="check" aria-hidden="true"></code-icon>
								Connected to ${r.name}
							</span>
						`,o=()=>!1!==s?ex:ey`
								<code-icon style="margin-top: -3px" icon="plug" aria-hidden="true"></code-icon>
								<a
									href=${sK("gitlens.connectRemoteProvider",{repoPath:i.path,remote:r.bestRemoteName})}
								>
									Connect to ${i.provider.name}
								</a>
								<span>&mdash; not connected</span>
							`,s?t(s):o?.(s)}
				</span>
			</gl-popover>
			${this.renderConnectIcon()}`}renderConnectIcon(){if(!this.connectIcon)return ex;let{repository:e}=this;if(!e?.provider)return ex;let{provider:t}=e;return t.integration?.connected!==!1?ex:ey`
			<gl-button
				part="connect-icon"
				appearance="toolbar"
				href=${sK("gitlens.connectRemoteProvider",{repoPath:e.path,remote:t.bestRemoteName})}
			>
				<code-icon icon="plug" style="color: var(--titlebar-fg)"></code-icon>
				<span slot="tooltip">
					Connect to ${t.name}
					<hr />
					View pull requests and issues in Home, Commit Graph, Launchpad, autolinks, and more
				</span>
			</gl-button>
		`}};nN.styles=[oF,oN,nw,nk,O`
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
		`,nx],nF([eT({type:Boolean})],nN.prototype,"connectIcon",2),nF([eT({type:Boolean})],nN.prototype,"disabled",2),nF([eT({type:Boolean})],nN.prototype,"icon",2),nF([eT({type:Object})],nN.prototype,"repository",2),nF([eT({type:Boolean})],nN.prototype,"hasMultipleRepositories",2),nF([eT({type:Object})],nN.prototype,"source",2),nF([eT({type:Boolean,reflect:!0})],nN.prototype,"expandable",2),nF([eT({type:Number,reflect:!0})],nN.prototype,"icons",1),nN=nF([ez("gl-repo-button-group")],nN);var nj=Object.defineProperty,nU=Object.getOwnPropertyDescriptor,nq=(e,t,o,i)=>{for(var r,s=i>1?void 0:i?nU(t,o):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i?r(t,o,s):r(s))||s);return i&&s&&nj(t,o,s),s};let nH=class extends GlAppHost{constructor(){super(...arguments),this._loading=!1,this.onChooseBaseRef=async e=>{if(e.target.disabled)return;let t=await this._ipc.sendRequest(to,{scope:this.scope,type:"base"});t?.ref!=null&&this._ipc.sendCommand(tn,{scope:this.scope,changes:{base:t.ref}})},this.onChooseHeadRef=async e=>{if(e.target.disabled)return;let t=e.target.getAttribute("location"),o=await this._ipc.sendRequest(to,{scope:this.scope,type:"head"});if(o?.ref===null){this.config.showAllBranches||this._ipc.sendCommand(ts,{changes:{showAllBranches:!0}});return}if(o?.ref!=null){if("config"===t)return void this._ipc.sendCommand(tn,{scope:this.scope,changes:{head:o.ref,base:this.config.showAllBranches?null:void 0}});this._ipc.sendCommand(tn,{scope:this.scope,changes:{head:o.ref,base:null}}),this.config.showAllBranches&&this._ipc.sendCommand(ts,{changes:{showAllBranches:!1}})}},this.onChoosePath=async e=>{if(e.stopImmediatePropagation(),null==this.repository||null==this.scope)return;let t=await this._ipc.sendRequest(ti,{repoUri:this.repository.uri,ref:this.head,title:"Select a File or Folder to Visualize",initialPath:"file"===this.scope.type?(0,e7.dirname)(this.scope.relativePath):this.scope.relativePath});t?.picked!=null&&this._ipc.sendCommand(tn,{scope:this.scope,changes:{type:t.picked.type,relativePath:t.picked.relativePath},altOrShift:e.altKey||e.shiftKey})},this.onChangeScope=e=>{let t=e.target?.closest("gl-breadcrumb-item-child")??e.target?.closest("gl-breadcrumb-item"),o=t?.getAttribute("type");if(null==o)return;if("repo"===o)return void this._ipc.sendCommand(tn,{scope:this.scope,changes:{type:"repo"},altOrShift:e.altKey||e.shiftKey});let i=t?.getAttribute("value");null!=i&&this._ipc.sendCommand(tn,{scope:this.scope,changes:{type:o,relativePath:i},altOrShift:e.altKey||e.shiftKey})}}createStateProvider(e,t,o){return new TimelineStateProvider(this,e,t,o)}connectedCallback(){super.connectedCallback?.(),eG=this.state.config.abbreviatedShaLength}get allowed(){return this.state.access?.allowed??!1}get base(){return this.scope?.base??this.repository?.ref}get config(){return this.state.config}get head(){return this.scope?.head??this.repository?.ref}get repository(){return this.state.repository}get scope(){return this.state.scope}get isShowAllBranchesSupported(){return!this.repository?.virtual}get isSliceBySupported(){return!this.repository?.virtual&&(this.scope?.type==="file"||this.scope?.type==="folder")}get sliceBy(){return this.isSliceBySupported&&this.config.showAllBranches?this.config.sliceBy:"author"}get subscription(){return this.state.access?.subscription?.current}renderGate(){return"editor"===this.placement?ey`<gl-feature-gate
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
			>`:ey`<gl-feature-gate
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
		>`}render(){return ey`${this.renderGate()}
			<div class="container">
				<progress-indicator ?active=${this._loading}></progress-indicator>
				<header class="header" ?hidden=${!this.scope}>
					<span class="details">${this.renderBreadcrumbs()} ${this.renderTimeframe()}</span>
					<span class="toolbox">
						${this.renderConfigPopover()}
						${"view"===this.placement?ey`<gl-button
									appearance="toolbar"
									href="command:gitlens.views.timeline.openInTab"
									tooltip="Open in Editor"
									aria-label="Open in Editor"
								>
									<code-icon icon="link-external"></code-icon>
								</gl-button>`:ex}
						${null==this.subscription||!e4(this.subscription)?ey`<gl-feature-badge
									placement="bottom"
									.source=${{source:"timeline",detail:"badge"}}
									.subscription=${this.subscription}
								></gl-feature-badge>`:ex}
					</span>
				</header>

				<main class="timeline">${this.renderChart()}</main>
			</div> `}renderBreadcrumbs(){return ey`<gl-breadcrumbs>
			${this.renderRepositoryBreadcrumbItem()}
			${this.renderBranchBreadcrumbItem()}${this.renderBreadcrumbPathItems()}
			${"editor"===this.placement?ey`<gl-button
						appearance="toolbar"
						density="compact"
						@click=${this.onChoosePath}
						tooltip="Choose File or Folder to Visualize..."
						aria-label="Choose File or Folder to Visualize..."
						><code-icon slot="prefix" icon="folder-opened"></code-icon>Choose File / Folder...</gl-button
					>`:ex}
		</gl-breadcrumbs>`}renderRepositoryBreadcrumbItem(){let e=this.state.repository;return null==e?ex:ey`<gl-breadcrumb-item
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
		</gl-breadcrumb-item>`}renderBranchBreadcrumbItem(){let{head:e,config:{showAllBranches:t}}=this;return ey`<gl-breadcrumb-item
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
					${t?"Showing All Branches":ey`<gl-ref-name icon .ref=${e}></gl-ref-name>`}</span
				></gl-ref-button
			>
		</gl-breadcrumb-item>`}renderBreadcrumbPathItems(){let e=this.state.scope?.relativePath;if(!e)return ex;let t=[],o=e.split("/"),i=o.pop()||"",r=o.length;if(r){let e=o.shift(),i=e,r=ey`
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

					${o.length?ey`<span slot="children" class="breadcrumb-item-children">
								${o.map(e=>(i=`${i}/${e}`,ey`<gl-breadcrumb-item-child
										type="${"folder"}"
										value="${i}"
									>
										<gl-button
											appearance="toolbar"
											@click=${this.onChangeScope}
											aria-label="Visualize folder history of ${i}"
											>${e}<span slot="tooltip"
												>Visualize Folder History
												<hr />
												${i}</span
											></gl-button
										>
									</gl-breadcrumb-item-child>`))}
							</span>`:ex}
				</gl-breadcrumb-item>
			`;t.push(r)}return t.push(ey`
			<gl-breadcrumb-item
				collapsibleState="none"
				icon="${(this.scope?.type==="folder"?r?void 0:"folder":"file")??ex}"
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
					<span>${i}</span>
				</gl-copy-container>
			</gl-breadcrumb-item>
		`),t}renderChart(){return this.scope||"view"!==this.placement?ey`<gl-timeline-chart
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
				${null==this.scope?ey`<p>Something went wrong</p>
							<p>Please close this tab and try again</p>`:ey`<p>No commits found for the specified time period</p>
							${this.renderPeriodSelect(this.state.config.period)}`}
			</div>
		</gl-timeline-chart>`:ey`<div class="timeline__empty">
				<p>There are no editors open that can provide file history information.</p>
			</div>`}renderConfigPopover(){let{config:{period:e}}=this;return ey`<gl-popover class="config" placement="bottom" trigger="hover focus click" hoist>
			<gl-button slot="anchor" appearance="toolbar">
				<code-icon icon="settings"></code-icon>
			</gl-button>
			<div slot="content" class="config__content">
				<menu-label>View Options</menu-label>
				${this.renderConfigHead()} ${this.renderConfigBase()} ${this.renderConfigShowAllBranches()}
				${this.renderPeriodSelect(e)} ${this.renderConfigSliceBy()}
			</div>
		</gl-popover>`}renderConfigHead(){let{head:e}=this,t=this.config.showAllBranches&&"branch"!==this.sliceBy;return ey`<section>
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
					${this.config.showAllBranches?"Showing All Branches":ey`<gl-ref-name icon .ref=${e}></gl-ref-name>`}</span
				></gl-ref-button
			>
		</section>`}renderConfigBase(){return ex}renderConfigShowAllBranches(){if(this.repository?.virtual)return ex;let{config:{showAllBranches:e}}=this;return ey`<section>
			<gl-checkbox
				value="all"
				.checked=${e}
				@gl-change-value=${e=>{this._ipc.sendCommand(ts,{changes:{showAllBranches:e.target.checked}})}}
				>View All Branches</gl-checkbox
			>
		</section>`}renderPeriodSelect(e){return ey`<section>
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
		</section>`}renderConfigSliceBy(){if(!this.isSliceBySupported)return ex;let{sliceBy:e}=this;return ey`<section>
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
		</section>`}renderTimeframe(){let e;switch(this.config.period){case"7|D":e="Up to 1wk ago";break;case"1|M":e="Up to 1mo ago";break;case"3|M":e="Up to 3mo ago";break;case"6|M":e="Up to 6mo ago";break;case"9|M":e="Up to 9mo ago";break;case"1|Y":e="Up to 1yr ago";break;case"2|Y":e="Up to 2yr ago";break;case"4|Y":e="Up to 4yr ago";break;case"all":e="All time";break;default:return ex}return ey`<span class="details__timeframe" tabindex="0">${e}</span>`}onChartCommitSelected(e){null!=e.detail.id&&this.fireSelectDataPoint(e.detail)}onPeriodChanged(e){let t=e.target,o=t.options[t.selectedIndex].value;(function(e){if("all"===e)return;let[t,o]=e.split("|");if(isNaN(Number(t))||"D"!==o&&"M"!==o&&"Y"!==o)throw Error(`Invalid period: ${e}`)})(o),this._ipc.sendCommand(ts,{changes:{period:o}})}onSliceByChanged(e){let t=e.target,o=t.options[t.selectedIndex].value;(function(e){if("author"!==e&&"branch"!==e)throw Error(`Invalid slice by: ${e}`)})(o),this._ipc.sendCommand(ts,{changes:{sliceBy:o}})}fireSelectDataPoint(e){let{scope:t}=this;null!=t&&(this._fireSelectDataPointDebounced??=e6(e=>this._ipc.sendCommand(tr,{scope:t,...e}),250,{maxWait:"file"===t.type?500:void 0}),this._fireSelectDataPointDebounced(e))}};nH.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nH.styles=[oF,oN,oq,oH],nq([eI("#chart")],nH.prototype,"_chart",2),nq([eD()],nH.prototype,"_loading",2),nH=nq([ez("gl-timeline-app")],nH);export{nH as GlTimelineApp};