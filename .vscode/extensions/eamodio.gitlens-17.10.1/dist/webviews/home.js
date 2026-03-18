let e,t,r,o,i,n,a,c;var h,p,u,g,m,b,f,v,w,_,x={602(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},6047(e,t,r){r(602)}},$={};function C(e){var t=$[e];if(void 0!==t)return t.exports;var r=$[e]={exports:{}};return x[e](r,r.exports,C),r.exports}C.d=(e,t)=>{for(var r in t)C.o(t,r)&&!C.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},C.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Object.defineProperty(C,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,r,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=r,this.subscribe=o??!1}};let s=class s{constructor(e,t,r,o){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=r,this.subscribe=o??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,r){super(void 0!==t.context?t.initialValue:r),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:r}]of this.subscriptions)t.has(e)||(t.add(e),r.dispatchEvent(new context_request_event_s(this.context,r,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function S({context:e}){return(t,r)=>{let o=new WeakMap;if("object"==typeof r)return{get(){return t.get.call(this)},set(e){return o.get(this).setValue(e),t.set.call(this,e)},init(t){return o.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let i;t.constructor.addInitializer(t=>{o.set(t,new context_provider_i(t,{context:e}))});let n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){let e=new WeakMap;i={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=n.set;i={...n,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,r,i)}}}function P({context:e,subscribe:t}){return(r,o)=>{"object"==typeof o?o.addInitializer(function(){new s(this,{context:e,callback:e=>{r.set.call(this,e)},subscribe:t})}):r.constructor.addInitializer(r=>{new s(r,{context:e,callback:e=>{r[o]=e},subscribe:t})})}}let O=globalThis,A=O.ShadowRoot&&(void 0===O.ShadyCSS||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),E=new WeakMap;let css_tag_n=class css_tag_n{constructor(e,t,r){if(this._$cssResult$=!0,r!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(A&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=E.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&E.set(t,e))}return e}toString(){return this.cssText}};let T=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,B),D=(e,...t)=>new css_tag_n(1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]),e,B),M=A?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return T(t)})(e):e,{is:N,defineProperty:j,getOwnPropertyDescriptor:F,getOwnPropertyNames:U,getOwnPropertySymbols:q,getPrototypeOf:W}=Object,G=globalThis,V=G.trustedTypes,K=V?V.emptyScript:"",Y=G.reactiveElementPolyfillSupport,J={toAttribute(e,t){switch(t){case Boolean:e=e?K:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},X=(e,t)=>!N(e,t),Q={attribute:!0,type:String,converter:J,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),G.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Q){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&j(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:i}=F(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){let n=o?.call(this);i?.call(this,t),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Q}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=W(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...U(e),...q(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(M(r));else void 0!==e&&t.push(M(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(A)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),o=O.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:J).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=r.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:J;this._$Em=o;let n=i.fromAttribute(t,e.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,r,o=!1,i){if(void 0!==e){let n=this.constructor;if(!1===o&&(i=this[e]),!(((r??=n.getPropertyOptions(e)).hasChanged??X)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==i||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e){let{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,Y?.({ReactiveElement:y}),(G.reactiveElementVersions??=[]).push("2.1.2");let ee=globalThis,et=e=>e,er=ee.trustedTypes,eo=er?er.createPolicy("lit-html",{createHTML:e=>e}):void 0,ei="$lit$",en=`lit$${Math.random().toFixed(9).slice(2)}$`,ea="?"+en,es=`<${ea}>`,el=document,ec=()=>el.createComment(""),ed=e=>null===e||"object"!=typeof e&&"function"!=typeof e,eh=Array.isArray,ep=e=>eh(e)||"function"==typeof e?.[Symbol.iterator],eu=`[ 	
\f\r]`,eg=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,em=/-->/g,eb=/>/g,ef=RegExp(`>|${eu}(?:([^\\s"'>=/]+)(${eu}*=${eu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ev=/'/g,ew=/"/g,ey=/^(?:script|style|textarea|title)$/i,e_=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ek=e_(1),ex=e_(2),e$=(e_(3),Symbol.for("lit-noChange")),eC=Symbol.for("lit-nothing"),eS=new WeakMap,eP=el.createTreeWalker(el,129);function eO(e,t){if(!eh(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==eo?eo.createHTML(t):t}let eA=(e,t)=>{let r=e.length-1,o=[],i,n=2===t?"<svg>":3===t?"<math>":"",a=eg;for(let t=0;t<r;t++){let r=e[t],c,h,p=-1,u=0;for(;u<r.length&&(a.lastIndex=u,null!==(h=a.exec(r)));)u=a.lastIndex,a===eg?"!--"===h[1]?a=em:void 0!==h[1]?a=eb:void 0!==h[2]?(ey.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=ef):void 0!==h[3]&&(a=ef):a===ef?">"===h[0]?(a=i??eg,p=-1):void 0===h[1]?p=-2:(p=a.lastIndex-h[2].length,c=h[1],a=void 0===h[3]?ef:'"'===h[3]?ew:ev):a===ew||a===ev?a=ef:a===em||a===eb?a=eg:(a=ef,i=void 0);let g=a===ef&&e[t+1].startsWith("/>")?" ":"";n+=a===eg?r+es:p>=0?(o.push(c),r.slice(0,p)+ei+r.slice(p)+en+g):r+en+(-2===p?t:g)}return[eO(e,n+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};let lit_html_S=class lit_html_S{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,n=0,a=e.length-1,c=this.parts,[h,p]=eA(e,t);if(this.el=lit_html_S.createElement(h,r),eP.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=eP.nextNode())&&c.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(ei)){let t=p[n++],r=o.getAttribute(e).split(en),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:i,name:a[2],strings:r,ctor:"."===a[1]?I:"?"===a[1]?L:"@"===a[1]?z:H}),o.removeAttribute(e)}else e.startsWith(en)&&(c.push({type:6,index:i}),o.removeAttribute(e));if(ey.test(o.tagName)){let e=o.textContent.split(en),t=e.length-1;if(t>0){o.textContent=er?er.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],ec()),eP.nextNode(),c.push({type:2,index:++i});o.append(e[t],ec())}}}else if(8===o.nodeType)if(o.data===ea)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(en,e+1));)c.push({type:7,index:i}),e+=en.length-1}i++}}static createElement(e,t){let r=el.createElement("template");return r.innerHTML=e,r}};function eL(e,t,r=e,o){if(t===e$)return t;let i=void 0!==o?r._$Co?.[o]:r._$Cl,n=ed(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(e))._$AT(e,r,o),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(t=eL(e,i._$AS(e,t.values),i,o)),t}let R=class R{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??el).importNode(t,!0);eP.currentNode=o;let i=eP.nextNode(),n=0,a=0,c=r[0];for(;void 0!==c;){if(n===c.index){let t;2===c.type?t=new k(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new Z(i,this,e)),this._$AV.push(t),c=r[++a]}n!==c?.index&&(i=eP.nextNode(),n++)}return eP.currentNode=el,o}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};let k=class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=eC,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){ed(e=eL(this,e,t))?e===eC||null==e||""===e?(this._$AH!==eC&&this._$AR(),this._$AH=eC):e!==this._$AH&&e!==e$&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ep(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==eC&&ed(this._$AH)?this._$AA.nextSibling.data=e:this.T(el.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=lit_html_S.createElement(eO(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new R(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=eS.get(e.strings);return void 0===t&&eS.set(e.strings,t=new lit_html_S(e)),t}k(e){eh(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let i of e)o===t.length?t.push(r=new k(this.O(ec()),this.O(ec()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=et(e).nextSibling;et(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let H=class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=eC,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=eC}_$AI(e,t=this,r,o){let i=this.strings,n=!1;if(void 0===i)(n=!ed(e=eL(this,e,t,0))||e!==this._$AH&&e!==e$)&&(this._$AH=e);else{let o,a,c=e;for(e=i[0],o=0;o<i.length-1;o++)(a=eL(this,c[r+o],t,o))===e$&&(a=this._$AH[o]),n||=!ed(a)||a!==this._$AH[o],a===eC?e=eC:e!==eC&&(e+=(a??"")+i[o+1]),this._$AH[o]=a}n&&!o&&this.j(e)}j(e){e===eC?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let I=class I extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===eC?void 0:e}};let L=class L extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==eC)}};let z=class z extends H{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=eL(this,e,t,0)??eC)===e$)return;let r=this._$AH,o=e===eC&&r!==eC||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==eC&&(r===eC||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let Z=class Z{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){eL(this,e)}};let eR=ee.litHtmlPolyfillSupport;eR?.(lit_html_S,k),(ee.litHtmlVersions??=[]).push("3.3.2");let eB=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{let o=r?.renderBefore??t,i=o._$litPart$;if(void 0===i){let e=r?.renderBefore??null;o._$litPart$=i=new k(t.insertBefore(ec(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return e$}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eB.litElementHydrateSupport?.({LitElement:lit_element_i});let eI=eB.litElementPolyfillSupport;eI?.({LitElement:lit_element_i}),(eB.litElementVersions??=[]).push("4.2.2");let eE=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eT={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:X};function eD(e){return(t,r)=>{let o;return"object"==typeof r?((e=eT,t,r)=>{let{kind:o,metadata:i}=r,n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),"accessor"===o){let{name:o}=r;return{set(r){let i=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,i,e,!0,r)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){let{name:o}=r;return function(r){let i=this[o];t.call(this,r),this.requestUpdate(o,i,e,!0,r)}}throw Error("Unsupported decorator location: "+o)})(e,t,r):(o=t.hasOwnProperty(r),t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0)}}function ez(e){return eD({...e,state:!0,attribute:!1})}let eM=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function eN(e,t){return(r,o,i)=>{let n=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:t,set:a}="object"==typeof o?r:i??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return eM(r,o,{get(){let e=t.call(this);return void 0===e&&(null!==(e=n(this))||this.hasUpdated)&&a.call(this,e),e}})}return eM(r,o,{get(){return n(this)}})}}function ej(e){return(t,r)=>{let{slot:o,selector:i}=e??{},n="slot"+(o?`[name=${o}]`:":not([name])");return eM(t,r,{get(){let t=this.renderRoot?.querySelector(n),r=t?.assignedElements(e)??[];return void 0===i?r:r.filter(e=>e.matches(i))}})}}function eF(e,t,r){return e?t(e):r?.(e)}let IpcCall=class IpcCall{constructor(e,t,r=!1){this.scope=e,this.reset=r,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,r){super(e,t,r),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let eU="home",eq=new IpcRequest(eU,"launchpad/summary"),eW=new IpcRequest(eU,"overview/active"),eH=new IpcRequest(eU,"overview/inactive"),eG=new IpcRequest(eU,"overviewFilter"),eV=new IpcCommand(eU,"overview/repository/change"),eZ=new IpcNotification(eU,"overview/repository/didChange"),eK=new IpcCommand(eU,"previewEnabled/toggle"),eY=new IpcCommand(eU,"section/collapse"),eJ=new IpcCommand(eU,"walkthrough/dismiss"),eX=new IpcNotification(eU,"ai/allAccess/didChange"),eQ=new IpcNotification(eU,"mcp/didChange"),e0=new IpcCommand(eU,"ai/allAccess/dismiss"),e1=new IpcCommand(eU,"overview/filter/set");new IpcCommand(eU,"openInGraph");let e2=new IpcNotification(eU,"repositories/didCompleteDiscovering"),e3=new IpcNotification(eU,"previewEnabled/didChange"),e5=new IpcNotification(eU,"repository/wip/didChange"),e4=new IpcNotification(eU,"repositories/didChange"),e6=new IpcNotification(eU,"walkthroughProgress/didChange"),e8=new IpcNotification(eU,"integrations/didChange"),e7=new IpcNotification(eU,"launchpad/didChange"),e9=new IpcNotification(eU,"subscription/didChange"),te=new IpcNotification(eU,"org/settings/didChange"),tt=new IpcNotification(eU,"home/ownerFilter/didChange"),tr=new IpcNotification(eU,"account/didFocus");var to=Object.defineProperty,ti=(e,t,r)=>{let o;return(o="symbol"!=typeof t?t+"":t)in e?to(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,r},tn=(e,t)=>{if(Object(t)!==t)throw TypeError('Cannot use the "in" operator on this value');return e.has(t)},ta=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},ts=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot access private method");return r};function tl(e,t){return Object.is(e,t)}let tc=null,td=!1,th=1,tp=Symbol("SIGNAL");function tu(e){let t=tc;return tc=e,t}let tg={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function tm(e){if(td)throw Error("u">typeof ngDevMode&&ngDevMode?"Assertion error: signal read during notification phase":"");if(null===tc)return;tc.consumerOnSignalRead(e);let t=tc.nextProducerIndex++;tv(tc),t<tc.producerNode.length&&tc.producerNode[t]!==e&&tf(tc)&&tb(tc.producerNode[t],tc.producerIndexOfThis[t]),tc.producerNode[t]!==e&&(tc.producerNode[t]=e,tc.producerIndexOfThis[t]=tf(tc)?function e(t,r,o){var i;if(tw(t),tv(t),0===t.liveConsumerNode.length){null==(i=t.watched)||i.call(t.wrapper);for(let r=0;r<t.producerNode.length;r++)t.producerIndexOfThis[r]=e(t.producerNode[r],t,r)}return t.liveConsumerIndexOfThis.push(o),t.liveConsumerNode.push(r)-1}(e,tc,t):0),tc.producerLastReadVersion[t]=e.version}function tb(e,t){var r;if(tw(e),tv(e),"u">typeof ngDevMode&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(1===e.liveConsumerNode.length){null==(r=e.unwatched)||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)tb(e.producerNode[t],e.producerIndexOfThis[t])}let o=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[o],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[o],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let r=e.liveConsumerIndexOfThis[t],o=e.liveConsumerNode[t];tv(o),o.producerIndexOfThis[r]=t}}function tf(e){var t;return e.consumerIsAlwaysLive||((null==(t=null==e?void 0:e.liveConsumerNode)?void 0:t.length)??0)>0}function tv(e){e.producerNode??(e.producerNode=[]),e.producerIndexOfThis??(e.producerIndexOfThis=[]),e.producerLastReadVersion??(e.producerLastReadVersion=[])}function tw(e){e.liveConsumerNode??(e.liveConsumerNode=[]),e.liveConsumerIndexOfThis??(e.liveConsumerIndexOfThis=[])}function ty(e){if(function e(t){if(t.dirty||t.lastCleanEpoch!==th){if(!t.producerMustRecompute(t)&&!function(t){tv(t);for(let r=0;r<t.producerNode.length;r++){let o=t.producerNode[r],i=t.producerLastReadVersion[r];if(i!==o.version||(e(o),i!==o.version))return!0}return!1}(t)){t.dirty=!1,t.lastCleanEpoch=th;return}t.producerRecomputeValue(t),t.dirty=!1,t.lastCleanEpoch=th}}(e),tm(e),e.value===tx)throw e.error;return e.value}let t_=Symbol("UNSET"),tk=Symbol("COMPUTING"),tx=Symbol("ERRORED"),t$={...tg,value:t_,dirty:!0,error:null,equal:tl,producerMustRecompute:e=>e.value===t_||e.value===tk,producerRecomputeValue(e){let t;if(e.value===tk)throw Error("Detected cycle in computations.");let r=e.value;e.value=tk;let o=(e&&(e.nextProducerIndex=0),tu(e)),i=!1;try{t=e.computation.call(e.wrapper),i=r!==t_&&r!==tx&&e.equal.call(e.wrapper,r,t)}catch(r){t=tx,e.error=r}finally{if(tu(o),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(tf(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)tb(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}if(i){e.value=r;return}e.value=t,e.version++}},tC=function(){throw Error()};function tS(){return tm(this),this.value}let tP={...tg,equal:tl,value:void 0},tO=Symbol("node");(e=>{var t,r,o,i;let State=class State{constructor(o,i={}){let n,a;ta(this,r),ti(this,t);let c=((n=Object.create(tP)).value=o,(a=()=>(tm(n),n.value))[tp]=n,a)[tp];if(this[tO]=c,c.wrapper=this,i){let t=i.equals;t&&(c.equal=t),c.watched=i[e.subtle.watched],c.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.get");return tS.call(this[tO])}set(t){var r,o;if(!(0,e.isState)(this))throw TypeError("Wrong receiver type for Signal.State.prototype.set");if(td)throw Error("Writes to signals not permitted during Watcher callback");r=this[tO],(null==tc?void 0:tc.consumerAllowSignalWrites)===!1&&tC(),r.equal.call(r.wrapper,r.value,t)||(r.value=t,o=r,o.version++,th++,function e(t){if(void 0===t.liveConsumerNode)return;let r=td;td=!0;try{for(let r of t.liveConsumerNode)r.dirty||function(t){var r;t.dirty=!0,e(t),null==(r=t.consumerMarkedDirty)||r.call(t.wrapper??t)}(r)}finally{td=r}}(o))}};t=tO,r=new WeakSet,e.isState=e=>"object"==typeof e&&tn(r,e),e.State=State;let Computed=class Computed{constructor(t,r){let n,a;ta(this,i),ti(this,o);let c=((n=Object.create(t$)).computation=t,(a=()=>ty(n))[tp]=n,a)[tp];if(c.consumerAllowSignalWrites=!0,this[tO]=c,c.wrapper=this,r){let t=r.equals;t&&(c.equal=t),c.watched=r[e.subtle.watched],c.unwatched=r[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError("Wrong receiver type for Signal.Computed.prototype.get");return ty(this[tO])}};o=tO,i=new WeakSet,e.isComputed=e=>"object"==typeof e&&tn(i,e),e.Computed=Computed,(t=>{var r,o,i,n;t.untrack=function(e){let t,r=null;try{r=tu(null),t=e()}finally{tu(r)}return t},t.introspectSources=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called introspectSources without a Computed or Watcher argument");return(null==(r=t[tO].producerNode)?void 0:r.map(e=>e.wrapper))??[]},t.introspectSinks=function(t){var r;if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called introspectSinks without a Signal argument");return(null==(r=t[tO].liveConsumerNode)?void 0:r.map(e=>e.wrapper))??[]},t.hasSinks=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError("Called hasSinks without a Signal argument");let r=t[tO].liveConsumerNode;return!!r&&r.length>0},t.hasSources=function(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError("Called hasSources without a Computed or Watcher argument");let r=t[tO].producerNode;return!!r&&r.length>0};let Watcher=class Watcher{constructor(e){ta(this,o),ta(this,i),ti(this,r);let t=Object.create(tg);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[tO]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");ts(this,i,n).call(this,t);let r=this[tO];r.dirty=!1;let o=tu(r);for(let e of t)tm(e[tO]);tu(o)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError("Called unwatch without Watcher receiver");ts(this,i,n).call(this,t);let r=this[tO];tv(r);for(let e=r.producerNode.length-1;e>=0;e--)if(t.includes(r.producerNode[e].wrapper)){tb(r.producerNode[e],r.producerIndexOfThis[e]);let t=r.producerNode.length-1;if(r.producerNode[e]=r.producerNode[t],r.producerIndexOfThis[e]=r.producerIndexOfThis[t],r.producerNode.length--,r.producerIndexOfThis.length--,r.nextProducerIndex--,e<r.producerNode.length){let t=r.producerIndexOfThis[e],o=r.producerNode[e];tw(o),o.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError("Called getPending without Watcher receiver");return this[tO].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}};r=tO,o=new WeakSet,i=new WeakSet,n=function(t){for(let r of t)if(!(0,e.isComputed)(r)&&!(0,e.isState)(r))throw TypeError("Called watch/unwatch without a Computed or State argument")},e.isWatcher=e=>tn(o,e),t.Watcher=Watcher,t.currentComputed=function(){var e;return null==(e=tc)?void 0:e.wrapper},t.watched=Symbol("watched"),t.unwatched=Symbol("unwatched")})(e.subtle||(e.subtle={}))})(f||(f={}));let tA=(e=null)=>new f.State(e,{equals:()=>!1});new WeakMap;let SignalObjectImpl=class SignalObjectImpl{static fromEntries(e){return new SignalObjectImpl(Object.fromEntries(e))}#e=new Map;#t=tA();constructor(e={}){let t=Object.getPrototypeOf(e),r=Object.getOwnPropertyDescriptors(e),o=Object.create(t);for(let e in r)Object.defineProperty(o,e,r[e]);let i=this;return new Proxy(o,{get:(e,t,r)=>(i.#r(t),Reflect.get(e,t,r)),has:(e,t)=>(i.#r(t),t in e),ownKeys:e=>(i.#t.get(),Reflect.ownKeys(e)),set(e,t,r,o){let n=Reflect.set(e,t,r,o);return i.#o(t),i.#i(),n},deleteProperty:(e,t)=>(t in e&&(delete e[t],i.#o(t),i.#i()),!0),getPrototypeOf:()=>SignalObjectImpl.prototype})}#r(e){let t=this.#e.get(e);void 0===t&&(t=tA(),this.#e.set(e,t)),t.get()}#o(e){let t=this.#e.get(e);t&&t.set(null)}#i(){this.#t.set(null)}};let tL=!1,tR=new f.subtle.Watcher(()=>{tL||(tL=!0,queueMicrotask(()=>{for(let e of(tL=!1,tR.getPending()))e.get();tR.watch()}))}),tB=Symbol("SignalWatcherBrand"),tI=new FinalizationRegistry(e=>{e.unwatch(...f.subtle.introspectSources(e))}),tE=new WeakMap;function tT(e){return!0===e[tB]?e:class extends e{constructor(){super(...arguments),this._$St=new Map,this._$So=new f.State(0),this._$Si=!1}_$Sl(){var e,t;let r=[],o=[];this._$St.forEach((e,t)=>{((null==e?void 0:e.beforeUpdate)?r:o).push(t)});let i=null==(e=this.h)?void 0:e.getPending().filter(e=>e!==this._$Su&&!this._$St.has(e));r.forEach(e=>e.get()),null==(t=this._$Su)||t.get(),i.forEach(e=>e.get()),o.forEach(e=>e.get())}_$Sv(){this.isUpdatePending||queueMicrotask(()=>{this.isUpdatePending||this._$Sl()})}_$S_(){if(void 0!==this.h)return;this._$Su=new f.Computed(()=>{this._$So.get(),super.performUpdate()});let e=this.h=new f.subtle.Watcher(function(){let e=tE.get(this);void 0!==e&&(!1===e._$Si&&(new Set(this.getPending()).has(e._$Su)?e.requestUpdate():e._$Sv()),this.watch())});tE.set(e,this),tI.register(this,e),e.watch(this._$Su),e.watch(...Array.from(this._$St).map(([e])=>e))}_$Sp(){if(void 0===this.h)return;let e=!1;this.h.unwatch(...f.subtle.introspectSources(this.h).filter(t=>{var r;let o=!0!==(null==(r=this._$St.get(t))?void 0:r.manualDispose);return o&&this._$St.delete(t),e||(e=!o),o})),e||(this._$Su=void 0,this.h=void 0,this._$St.clear())}updateEffect(e,t){var r;this._$S_();let o=new f.Computed(()=>{e()});return this.h.watch(o),this._$St.set(o,t),null!=(r=null==t?void 0:t.beforeUpdate)&&r?f.subtle.untrack(()=>o.get()):this.updateComplete.then(()=>f.subtle.untrack(()=>o.get())),()=>{this._$St.delete(o),this.h.unwatch(o),!1===this.isConnected&&this._$Sp()}}performUpdate(){this.isUpdatePending&&(this._$S_(),this._$Si=!0,this._$So.set(this._$So.get()+1),this._$Si=!1,this._$Sl())}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp()})}}}let tD=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let{I:tz}={M:ei,P:en,A:ea,C:1,L:eA,R,D:ep,V:eL,I:k,H,N:L,U:z,B:I,F:Z},tM=e=>e,tN=(e,t,r)=>{let o=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===r)r=new tz(o.insertBefore(document.createComment(""),i),o.insertBefore(document.createComment(""),i),e,e.options);else{let t=r._$AB.nextSibling,n=r._$AM,a=n!==e;if(a){let t;r._$AQ?.(e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==n._$AU&&r._$AP(t)}if(t!==i||a){let e=r._$AA;for(;e!==t;){let t=tM(e).nextSibling;tM(o).insertBefore(e,i),e=t}}}return r},tj=(e,t,r=e)=>(e._$AI(t,r),e),tF={},tU=e=>{e._$AR(),e._$AA.remove()},tq=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),tq(e,t);return!0},tW=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},tH=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),tZ(t)}};function tG(e){void 0!==this._$AN?(tW(this),this._$AM=e,tH(this)):this._$AM=e}function tV(e,t=!1,r=0){let o=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(o))for(let e=r;e<o.length;e++)tq(o[e],!1),tW(o[e]);else null!=o&&(tq(o,!1),tW(o));else tq(this,e)}let tZ=e=>{2==e.type&&(e._$AP??=tV,e._$AQ??=tG)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),tH(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(tq(this,e),tW(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let tK=!1,tY=new f.subtle.Watcher(async()=>{tK||(tK=!0,queueMicrotask(()=>{for(let e of(tK=!1,tY.getPending()))e.get();tY.watch()}))});let watch_r=class watch_r extends async_directive_f{_$S_(){var e,t;void 0===this._$Sm&&(this._$Sj=new f.Computed(()=>{var e;let t=null==(e=this._$SW)?void 0:e.get();return this.setValue(t),t}),this._$Sm=null!=(t=null==(e=this._$Sk)?void 0:e.h)?t:tY,this._$Sm.watch(this._$Sj),f.subtle.untrack(()=>{var e;return null==(e=this._$Sj)?void 0:e.get()}))}_$Sp(){void 0!==this._$Sm&&(this._$Sm.unwatch(this._$SW),this._$Sm=void 0)}render(e){return f.subtle.untrack(()=>e.get())}update(e,[t]){var r;return null!=this._$Sk||(this._$Sk=null==(r=e.options)?void 0:r.host),t!==this._$SW&&void 0!==this._$SW&&this._$Sp(),this._$SW=t,this._$S_(),f.subtle.untrack(()=>this._$SW.get())}disconnected(){this._$Sp()}reconnected(){this._$S_()}};let tJ=tD(watch_r),tX=e=>(t,...r)=>e(t,...r.map(e=>e instanceof f.State||e instanceof f.Computed?tJ(e):e));tX(ek),tX(ex),f.State,f.Computed;let tQ=(e,t)=>new f.State(e,t);let AsyncComputed=class AsyncComputed{#n=!1;#a=new f.State("initial");get status(){this.run();let e=this.#a.get();return this.#n?"pending":e}#s;get value(){return this.run(),this.#s.get()}#l=new f.State(void 0);get error(){return this.run(),this.#l.get()}#c=new f.State(void 0);get complete(){return this.run(),this.#c.get().promise}#d;#h;#p=0;#u;constructor(e,t){this.#s=new f.State(t?.initialValue),this.#d=new f.Computed(()=>{let t=++this.#p;"pending"!==f.subtle.untrack(()=>this.#a.get())&&this.#c.set(Promise.withResolvers()),this.#n=!1,this.#a.set("pending"),this.#u?.abort(),this.#u=new AbortController,e(this.#u.signal).then(e=>{t===this.#p&&(this.#a.set("complete"),this.#s.set(e),this.#l.set(void 0),this.#c.get().resolve(e))},e=>{t===this.#p&&(this.#a.set("error"),this.#l.set(e),this.#s.set(void 0),this.#c.get().reject(e))})}),this.#h=new f.subtle.Watcher(async()=>{this.#n=!0,this.#h.watch()}),this.#h.watch(this.#d)}get(){let e=this.status;if("error"===e||"pending"===e&&void 0!==this.error)throw this.error;return this.value}run(){this.#d.get()}};function t0(e,t,r){let o,i,n,a,c,h,p,u,g,m,b=0;null!=r&&({edges:h,maxWait:p,signal:u,aggregator:g}=r);let f="leading"===(h??="trailing")||"both"===h,v="trailing"===h||"both"===h;function w(){if(null!=o){b=Date.now();let t=o,r=m;return m=void 0,o=void 0,n=e.apply(r,t)}}function _(){null!=a&&(clearTimeout(a),a=void 0)}function x(){null!=c&&(clearTimeout(c),c=void 0)}function $(){_(),x(),m=void 0,o=void 0,i=void 0,b=0}function C(...e){if(u?.aborted)return;let r=Date.now();null!=g&&null!=o?o=g(o,e):(m=this,o=e);let h=null==a&&null==c;i=r,_();let x=Date.now();if(i=x,a=setTimeout(()=>{a=void 0,function e(){let r,o,n=Date.now();if(r=n-(i??0),o=n-b,null==i||r>=t||r<0||null!=p&&o>=p){v&&w(),$();return}a=setTimeout(()=>{a=void 0,e()},t-(n-(i??0)))}()},t),null!=p&&!c){0===b&&(b=x);let e=p-(x-b);e>0?c=setTimeout(()=>{c=void 0,v&&null!=o&&w(),b=Date.now()},e):(v&&null!=o&&w(),$())}return f&&h?w():n}return C.cancel=$,C.flush=function(){return _(),x(),w()},C.pending=function(){return null!=a||null!=c},u?.addEventListener("abort",$,{once:!0}),C}let AsyncComputedState=class AsyncComputedState{constructor(e,t){this._fetch=e,this._debounce=500,this._invalidate=tQ(0),this._state=tQ(void 0),null!=t&&(this._state.set(t.initial),null!=t.debounce&&(this._debounce=t.debounce),!0===t.autoRun&&this.run())}get state(){return this._run(),this._state.get()}get computed(){if(null==this._computed){let e=this._state.get();this._computed=new AsyncComputed(async e=>{this._invalidate.get();let t=await this._fetch(e);return this._state.set(t),t},e?{initialValue:e}:void 0)}return this._computed}_runCore(){this.computed.run()}_run(e=!1){e?this._runCore():(null==this._runDebounced&&(this._runDebounced=t0(this._runCore.bind(this),this._debounce)),this._runDebounced())}run(e=!1){e&&this.invalidate(),this._run()}invalidate(){this._invalidate.set(Date.now())}render(e){return((e,{initial:t,pending:r,complete:o,error:i})=>{switch(e.status){case"initial":return t?.();case"pending":return r?.();case"complete":return o?.(e.value);case"error":return i?.(e.error)}})(this.computed,e)}};let ActiveOverviewState=class ActiveOverviewState extends AsyncComputedState{constructor(e,t){super(async e=>await this._ipc.sendRequest(eW,void 0),t),this._ipc=e,this._disposable=this._ipc.onReceiveMessage(e=>{switch(!0){case e8.is(e):case e4.is(e):case e5.is(e):case eZ.is(e):this.run(!0)}})}dispose(){this._disposable?.dispose()}changeRepository(){this._ipc.sendCommand(eV,void 0)}};let InactiveOverviewState=class InactiveOverviewState extends AsyncComputedState{constructor(e,t){super(async e=>await this._ipc.sendRequest(eH,void 0),t),this._ipc=e,this.filter=new SignalObjectImpl({}),this._disposable=this._ipc.onReceiveMessage(e=>{switch(!0){case e4.is(e):this.run(!0);break;case tt.is(e):this.filter.recent=e.params.filter.recent,this.filter.stale=e.params.filter.stale,this.run(!0);break;case eZ.is(e):this.run(!0)}}),this._ipc.sendRequest(eG,void 0).then(e=>{this.filter.recent=e.recent,this.filter.stale=e.stale})}dispose(){this._disposable?.dispose()}};let t1=new IpcRequest("core","webview/ready"),t2=new IpcCommand("core","webview/focus/changed"),t3=new IpcCommand("core","command/execute"),t5=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let t4=new IpcCommand("core","telemetry/sendEvent"),t6=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let t8=new IpcCommand("core","webview/focus/didChange"),t7=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let t9=new WeakMap;function re(e,t){return function(r,o,i){let n=t9.get(r.constructor);null==n&&t9.set(r.constructor,n=[]),n.push({method:i.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,r){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...r,detail:t});return this.dispatchEvent(o),o}update(e){let t=t9.get(this.constructor);if(null!=t)for(let{keys:r,method:o,afterFirstUpdate:i}of t){if(i&&!this.hasUpdated)continue;let t=r.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};function rt(e){let t=.001*performance.now(),r=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(r-=e[0],(o-=e[1])<0&&(r--,o+=1e9)),[r,o]}C(6047);var rr=((h=rr||{})[h.Hash=35]="Hash",h[h.Slash=47]="Slash",h[h.Digit0=48]="Digit0",h[h.Digit1=49]="Digit1",h[h.Digit2=50]="Digit2",h[h.Digit3=51]="Digit3",h[h.Digit4=52]="Digit4",h[h.Digit5=53]="Digit5",h[h.Digit6=54]="Digit6",h[h.Digit7=55]="Digit7",h[h.Digit8=56]="Digit8",h[h.Digit9=57]="Digit9",h[h.Backslash=92]="Backslash",h[h.A=65]="A",h[h.B=66]="B",h[h.C=67]="C",h[h.D=68]="D",h[h.E=69]="E",h[h.F=70]="F",h[h.Z=90]="Z",h[h.a=97]="a",h[h.b=98]="b",h[h.c=99]="c",h[h.d=100]="d",h[h.e=101]="e",h[h.f=102]="f",h[h.z=122]="z",h),ro=((p=ro||{}).AngleBracketLeftHeavy="❰",p.AngleBracketRightHeavy="❱",p.ArrowBack="↩",p.ArrowDown="↓",p.ArrowDownUp="⇵",p.ArrowDropRight="⤷",p.ArrowHeadRight="➤",p.ArrowLeft="←",p.ArrowLeftDouble="⇐",p.ArrowLeftRight="↔",p.ArrowLeftRightDouble="⇔",p.ArrowLeftRightDoubleStrike="⇎",p.ArrowLeftRightLong="⟷",p.ArrowRight="→",p.ArrowRightDouble="⇒",p.ArrowRightHollow="⇨",p.ArrowUp="↑",p.ArrowUpDown="⇅",p.ArrowUpRight="↗",p.ArrowsHalfLeftRight="⇋",p.ArrowsHalfRightLeft="⇌",p.ArrowsLeftRight="⇆",p.ArrowsRightLeft="⇄",p.Asterisk="∗",p.Bullseye="◎",p.Check="✔",p.Dash="—",p.Dot="•",p.Ellipsis="…",p.EnDash="–",p.Envelope="✉",p.EqualsTriple="≡",p.Flag="⚑",p.FlagHollow="⚐",p.MiddleEllipsis="⋯",p.MuchLessThan="≪",p.MuchGreaterThan="≫",p.Pencil="✎",p.Space=" ",p.SpaceThin=" ",p.SpaceThinnest=" ",p.SquareWithBottomShadow="❏",p.SquareWithTopShadow="❐",p.Warning="⚠",p.ZeroWidthSpace="​",p);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var ri=((u=ri||{}).File="file",u.Git="git",u.GitHub="github",u.GitLens="gitlens",u.GitLensAIMarkdown="gitlens-ai-markdown",u.PRs="pr",u.Remote="vscode-remote",u.Vsls="vsls",u.VslsScc="vsls-scc",u.Virtual="vscode-vfs",u);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let rn="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",ra=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${rn}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${rn}`,graph:`https://gitkraken.com/solutions/commit-graph?${rn}`,launchpad:`https://gitkraken.com/solutions/launchpad?${rn}`,platform:`https://gitkraken.com/devex?${rn}`,pricing:`https://gitkraken.com/gitlens/pricing?${rn}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${rn}`,security:`https://help.gitkraken.com/gitlens/security?${rn}`,workspaces:`https://gitkraken.com/solutions/workspaces?${rn}`,cli:`https://gitkraken.com/cli?${rn}`,browserExtension:`https://gitkraken.com/browser-extension?${rn}`,desktop:`https://gitkraken.com/git-client?${rn}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${rn}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${rn}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${rn}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${rn}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${rn}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${rn}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${rn}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${rn}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${rn}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${rn}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${rn}#improve-workflows-with-integrations`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${rn}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${rn}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${rn}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${rn}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${rn}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${rn}`}),rs=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,rl=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,rc=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],rd=new Map,rh=new Map;function rp(e,n){let a=("number"==typeof e?e:e.getTime())-Date.now();for(let[e,c,h,p]of rc){let u=Math.abs(a);if(u>=c||1e3===c){if(n){if(null==t&&(t=null!=i?i.resolvedOptions().locale:null!=o?o.resolvedOptions().locale:(i=new Intl.RelativeTimeFormat(r,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===t||t?.startsWith("en-")){let e=Math.floor(u/h);return`${e}${p}`}return null==i&&(i=new Intl.RelativeTimeFormat(r,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),i.format(Math.trunc(a/h),e)}return null==o&&(o=new Intl.RelativeTimeFormat(r,{localeMatcher:"best fit",numeric:"auto",style:"long"})),o.format(Math.trunc(a/h),e)}}return""}let ru=["th","st","nd","rd"];function rg(e,t){null==e&&(e="decimal");let o=`${t??""}:${e}`,i=rh.get(o);if(null==i){let n,a={localeMatcher:"best fit",style:e};n=null==t?r:"system"===t?void 0:[t],i=new Intl.NumberFormat(n,a),rh.set(o,i)}return i.format}function rm(e){let[t,r]=rt(e);return 1e3*t+Math.floor(r/1e6)}let rb=/\$\{(?:'.*?[^\\]'|\W*)?(\w*?)(?:'.*?[^\\]'|[\W\d]*)\}/g,rf=new Map;function rv(e){return 95===e||e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57}function rw(e,t,r){let o;if(null==r)return n??=rg(),`${n(t)} ${e}${1===t?"":"s"}`;let i=1===t?e:r.plural??`${e}s`;return r.only?i:(0===t?o=r.zero??t:!1===r.format?o=t:null!=r.format?o=r.format(t):(n??=rg(),o=n(t)),`${o}${r.infix??" "}${i}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var ry=((g=ry||{})[g.Off=0]="Off",g[g.Error=1]="Error",g[g.Warn=2]="Warn",g[g.Info=3]="Info",g[g.Debug=4]="Debug",g);let r_=["accessToken","password","token"],rk=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,r=!1){if(null!=e.sanitizeKeys)for(let t of r_)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(r_);this.provider=e,this._isDebugging=r,this.logLevel=t}enabled(e){return!!this.isDebugging||(null==e?this.level>0:this.level>=rx(e))}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=rx(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let r;this.level<4&&!this.isDebugging||("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...r){let o;if(!(this.level<1)||this.isDebugging){if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${r.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,r)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let r;this.level<3&&!this.isDebugging||("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let r;this.level<2&&!this.isDebugging||("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let r=this.provider.toLoggable?.(e);if(null!=r)return r;try{return JSON.stringify(e,(e,r)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(r=t(e,r)),this.provider?.sanitizer!=null&&(r=this.provider.sanitizer(e,r)),r))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let r=t.map(e=>this.toLoggable(e)).join(", ");return 0!==r.length?` \u2014 ${r}`:""}};function rx(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let r$=new WeakMap,rC={enabled:e=>rk.enabled(e),log:(e,t,r,...o)=>{switch(e){case"error":rk.error(void 0,t,r,...o);break;case"warn":rk.warn(t,r,...o);break;case"info":rk.log(t,r,...o);break;default:rk.debug(t,r,...o)}}},rS=0x40000000-1;function rP(){let e=0;return{get current(){return e},next:function(){return e===rS&&(e=0),++e},reset:function(){e=0}}}let rO=rP(),rA=new Map;function rL(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function rR(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let r=t?rO.current:void 0,o=rO.next();return{scopeId:o,prevScopeId:r,prefix:`${rL(o,r)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=rR(e,void 0),rk.configure({name:e,createChannel:function(e){return{name:e,appendLine:rk.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?rk.log(this.scope,e,...t):rk.log(e,t.shift(),...t)}};let rB="graph";new IpcCommand(rB,"chooseRepository"),new IpcCommand(rB,"dblclick"),new IpcCommand(rB,"avatars/get"),new IpcCommand(rB,"refs/metadata/get"),new IpcCommand(rB,"rows/get"),new IpcCommand(rB,"pullRequest/openDetails"),new IpcCommand(rB,"row/action"),new IpcCommand(rB,"search/openInView"),new IpcCommand(rB,"search/cancel"),new IpcCommand(rB,"columns/update"),new IpcCommand(rB,"refs/update/visibility"),new IpcCommand(rB,"filters/update/excludeTypes"),new IpcCommand(rB,"configuration/update"),new IpcCommand(rB,"search/update/mode"),new IpcCommand(rB,"filters/update/includedRefs"),new IpcCommand(rB,"selection/update"),new IpcRequest(rB,"jumpToHead"),new IpcRequest(rB,"chooseRef"),new IpcRequest(rB,"chooseComparison"),new IpcRequest(rB,"chooseAuthor"),new IpcRequest(rB,"chooseFile"),new IpcRequest(rB,"rows/ensure"),new IpcRequest(rB,"search/history/get"),new IpcRequest(rB,"search/history/store"),new IpcRequest(rB,"search/history/delete"),new IpcRequest(rB,"counts"),new IpcRequest(rB,"row/hover/get"),new IpcRequest(rB,"search"),new IpcNotification(rB,"repositories/integration/didChange"),new IpcNotification(rB,"didChange",!0),new IpcNotification(rB,"configuration/didChange");let rI=new IpcNotification(rB,"subscription/didChange");new IpcNotification(rB,"org/settings/didChange"),new IpcNotification(rB,"avatars/didChange"),new IpcNotification(rB,"mcp/didChange"),new IpcNotification(rB,"branchState/didChange"),new IpcNotification(rB,"refs/didChangeMetadata"),new IpcNotification(rB,"columns/didChange"),new IpcNotification(rB,"scrollMarkers/didChange"),new IpcNotification(rB,"refs/didChangeVisibility"),new IpcNotification(rB,"rows/didChange"),new IpcNotification(rB,"rows/stats/didChange"),new IpcNotification(rB,"selection/didChange"),new IpcNotification(rB,"workingTree/didChange"),new IpcNotification(rB,"didSearch"),new IpcNotification(rB,"didFetch"),new IpcNotification(rB,"featurePreview/didStart");let rE="timeline";new IpcRequest(rE,"ref/choose"),new IpcRequest(rE,"path/choose"),new IpcCommand(rE,"point/open"),new IpcCommand(rE,"config/update"),new IpcCommand(rE,"scope/update");let rT=new IpcNotification(rE,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(e9.is(e)||rI.is(e)||rT.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let r=`${e}|${t}`,o=this._promos.get(r);return null==o&&(o=this.ipc.sendRequest(t5,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(r,o)),await o}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(t4,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};var rD=Uint8Array,rz=Uint16Array,rM=Int32Array,rN=new rD([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),rj=new rD([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),rF=new rD([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),rU=function(e,t){for(var r=new rz(31),o=0;o<31;++o)r[o]=t+=1<<e[o-1];for(var i=new rM(r[30]),o=1;o<30;++o)for(var n=r[o];n<r[o+1];++n)i[n]=n-r[o]<<5|o;return{b:r,r:i}},rq=rU(rN,2),rW=rq.b,rH=rq.r;rW[28]=258,rH[258]=28;var rG=rU(rj,0),rV=rG.b;rG.r;for(var rZ=new rz(32768),rK=0;rK<32768;++rK){var rY=(43690&rK)>>1|(21845&rK)<<1;rY=(61680&(rY=(52428&rY)>>2|(13107&rY)<<2))>>4|(3855&rY)<<4,rZ[rK]=((65280&rY)>>8|(255&rY)<<8)>>1}for(var rJ=function(e,t,r){for(var o,i=e.length,n=0,a=new rz(t);n<i;++n)e[n]&&++a[e[n]-1];var c=new rz(t);for(n=1;n<t;++n)c[n]=c[n-1]+a[n-1]<<1;if(r){o=new rz(1<<t);var h=15-t;for(n=0;n<i;++n)if(e[n])for(var p=n<<4|e[n],u=t-e[n],g=c[e[n]-1]++<<u,m=g|(1<<u)-1;g<=m;++g)o[rZ[g]>>h]=p}else for(n=0,o=new rz(i);n<i;++n)e[n]&&(o[n]=rZ[c[e[n]-1]++]>>15-e[n]);return o},rX=new rD(288),rK=0;rK<144;++rK)rX[rK]=8;for(var rK=144;rK<256;++rK)rX[rK]=9;for(var rK=256;rK<280;++rK)rX[rK]=7;for(var rK=280;rK<288;++rK)rX[rK]=8;for(var rQ=new rD(32),rK=0;rK<32;++rK)rQ[rK]=5;var r0=rJ(rX,9,1),r1=rJ(rQ,5,1),r2=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},r3=function(e,t,r){var o=t/8|0;return(e[o]|e[o+1]<<8)>>(7&t)&r},r5=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},r4=function(e,t,r){return(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length),new rD(e.subarray(t,r))},r6=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],r8=function(e,t,r){var o=Error(t||r6[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,r8),!r)throw o;return o},r7=function(e,t,r,o){var i=e.length,n=o?o.length:0;if(!i||t.f&&!t.l)return r||new rD(0);var a=!r,c=a||2!=t.i,h=t.i;a&&(r=new rD(3*i));var p=function(e){var t=r.length;if(e>t){var o=new rD(Math.max(2*t,e));o.set(r),r=o}},u=t.f||0,g=t.p||0,m=t.b||0,b=t.l,f=t.d,v=t.m,w=t.n,_=8*i;do{if(!b){u=r3(e,g,1);var x=r3(e,g+1,3);if(g+=3,x)if(1==x)b=r0,f=r1,v=9,w=5;else if(2==x){var $=r3(e,g,31)+257,C=r3(e,g+10,15)+4,S=$+r3(e,g+5,31)+1;g+=14;for(var P=new rD(S),O=new rD(19),A=0;A<C;++A)O[rF[A]]=r3(e,g+3*A,7);g+=3*C;for(var B=r2(O),E=(1<<B)-1,T=rJ(O,B,1),A=0;A<S;){var D=T[r3(e,g,E)];g+=15&D;var M=D>>4;if(M<16)P[A++]=M;else{var N=0,j=0;for(16==M?(j=3+r3(e,g,3),g+=2,N=P[A-1]):17==M?(j=3+r3(e,g,7),g+=3):18==M&&(j=11+r3(e,g,127),g+=7);j--;)P[A++]=N}}var F=P.subarray(0,$),U=P.subarray($);v=r2(F),w=r2(U),b=rJ(F,v,1),f=rJ(U,w,1)}else r8(1);else{var M=((g+7)/8|0)+4,q=e[M-4]|e[M-3]<<8,W=M+q;if(W>i){h&&r8(0);break}c&&p(m+q),r.set(e.subarray(M,W),m),t.b=m+=q,t.p=g=8*W,t.f=u;continue}if(g>_){h&&r8(0);break}}c&&p(m+131072);for(var G=(1<<v)-1,V=(1<<w)-1,K=g;;K=g){var N=b[r5(e,g)&G],Y=N>>4;if((g+=15&N)>_){h&&r8(0);break}if(N||r8(2),Y<256)r[m++]=Y;else if(256==Y){K=g,b=null;break}else{var J=Y-254;if(Y>264){var A=Y-257,X=rN[A];J=r3(e,g,(1<<X)-1)+rW[A],g+=X}var Q=f[r5(e,g)&V],ee=Q>>4;Q||r8(3),g+=15&Q;var U=rV[ee];if(ee>3){var X=rj[ee];U+=r5(e,g)&(1<<X)-1,g+=X}if(g>_){h&&r8(0);break}c&&p(m+131072);var et=m+J;if(m<U){var er=n-U,eo=Math.min(U,et);for(er+m<0&&r8(3);m<eo;++m)r[m]=o[er+m]}for(;m<et;++m)r[m]=r[m-U]}}t.l=b,t.p=K,t.b=m,t.f=u,b&&(u=1,t.m=v,t.d=f,t.n=w)}while(!u)return m!=r.length&&a?r4(r,0,m):r.subarray(0,m)},r9=new rD(0),oe="u">typeof TextDecoder&&new TextDecoder;try{oe.decode(r9,{stream:!0})}catch{}var ot=function(e){for(var t="",r=0;;){var o=e[r++],i=(o>127)+(o>223)+(o>239);if(r+i>e.length)return{s:t,r:r4(e,r-1)};i?3==i?t+=String.fromCharCode(55296|(o=((15&o)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536)>>10,56320|1023&o):1&i?t+=String.fromCharCode((31&o)<<6|63&e[r++]):t+=String.fromCharCode((15&o)<<12|(63&e[r++])<<6|63&e[r++]):t+=String.fromCharCode(o)}};function or(e,t){if(t){for(var r="",o=0;o<e.length;o+=16384)r+=String.fromCharCode.apply(null,e.subarray(o,o+16384));return r}if(oe)return oe.decode(e);var i=ot(e),n=i.s,r=i.r;return r.length&&r8(8),n}"function"==typeof queueMicrotask&&queueMicrotask;let oo=/\(([\s\S]*)\)/,oi=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,on=/\s?=.*$/;function oa(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function os(e,t=!1){let r,o,i,n,a,c=0,h=!1,p=!1,u=!0;null!=e&&({args:r,if:o,enter:i,exit:n,prefix:a,logThreshold:c=0,scoped:h=!0,singleLine:p=!1,timed:u=!0}=e),c>0&&(p=!0,u=!0),u&&(h=!0);let g=t?rk.debug:rk.log,m=rk.isDebugging?"debug":"info";return(e,t,b)=>{let f,v;if("function"==typeof b.value?(f=b.value,v="value"):"function"==typeof b.get&&(f=b.get,v="get"),null==f||null==v)throw Error("Not supported");let w=!1!==r?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),r=(t=(t=t.replace(oi,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");r=r>=0?r+1:0,o=o>0?o:t.indexOf("="),t=t.slice(r,o),t=`(${t})`;let i=oo.exec(t);return null!=i?i[1].split(",").map(e=>e.trim().replace(on,"")):[]}(f):[];b[v]=function(...e){var b;let v,_;if(!rk.enabled(m)||null!=o&&!o.apply(this,e))return f.apply(this,e);let x=rO.current,$=rO.next(),C=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let r=t?.name??"",o=r.indexOf("_");-1!==o&&(r=r.substring(o+1));let i=t;for(;null!=i;){let t=r$.get(i);if(null!=t)return t(e,r);i=Object.getPrototypeOf(i)}return r}(this):void 0,S=C?h?`${rL($,x)} ${C}.${t}`:`${C}.${t}`:t;null!=a&&(S=a({id:$,instance:this,instanceName:C??"",name:t,prefix:S},...e)),h&&(b={scopeId:$,prevScopeId:x,prefix:S},b={prevScopeId:rO.current,...b},rA.set($,b),v=b);let P=null!=i?i(...e):"";if(!1===r||0===e.length)_="",p||g.call(rk,`${S}${P}`);else{let t,o,i,n;_="";let a=-1;for(n of e){if(o=w[++a],null!=(t=r?.[a])){if("boolean"==typeof t)continue;if(_.length>0&&(_+=", "),"string"==typeof t){_+=t;continue}i=String(t(n))}else _.length>0&&(_+=", "),i=rk.toLoggable(n);_+=o?`${o}=${i}`:i}p||g.call(rk,_?`${S}${P}(${_})`:`${S}${P}`)}if(p||u||null!=n){let t,r=u?rt():void 0,o=e=>{let t=void 0!==r?` [${rm(r)}ms]`:"";p?rk.error(e,_?`${S}${P}(${_})`:`${S}${P}`,v?.exitDetails?`failed${v.exitDetails}${t}`:`failed${t}`):rk.error(e,S,v?.exitDetails?`failed${v.exitDetails}${t}`:`failed${t}`),h&&rA.delete($)};try{t=f.apply(this,e)}catch(e){throw o(e),e}let i=e=>{let t,o,i,a;if(null!=r?(t=rm(r))>500?(o=rk.warn,i=` [*${t}ms] (slow)`):(o=g,i=` [${t}ms]`):(i="",o=g),null!=n)if("function"==typeof n)try{a=n(e)}catch(e){a=`@log.exit error: ${e}`}else!0===n&&(a=`returned ${rk.toLoggable(e)}`);else v?.exitFailed?(a=v.exitFailed,o=(e,...t)=>rk.error(null,e,...t)):a="completed";p?(0===c||t>c)&&o.call(rk,_?`${S}${P}(${_}) ${a}${v?.exitDetails||""}${i}`:`${S}${P} ${a}${v?.exitDetails||""}${i}`):o.call(rk,_?`${S}(${_}) ${a}${v?.exitDetails||""}${i}`:`${S} ${a}${v?.exitDetails||""}${i}`),h&&rA.delete($)};return null!=t&&oa(t)?t.then(i,o):i(t),t}return f.apply(this,e)}}}(()=>{let e;var t,r,o={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,o="",i=0,n=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)r=e.charCodeAt(c);else{if(47===r)break;r=47}if(47===r){if(n===c-1||1===a);else if(n!==c-1&&2===a){if(o.length<2||2!==i||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var h=o.lastIndexOf("/");if(h!==o.length-1){-1===h?(o="",i=0):i=(o=o.slice(0,h)).length-1-o.lastIndexOf("/"),n=c,a=0;continue}}else if(2===o.length||1===o.length){o="",i=0,n=c,a=0;continue}}t&&(o.length>0?o+="/..":o="..",i=2)}else o.length>0?o+="/"+e.slice(n+1,c):o=e.slice(n+1,c),i=c-n-1;n=c,a=0}else 46===r&&-1!==a?++a:a=-1}return o}var o={resolve:function(){for(var e,o,i="",n=!1,a=arguments.length-1;a>=-1&&!n;a--)a>=0?e=arguments[a]:(void 0===o&&(o=process.cwd()),e=o),t(e),0!==e.length&&(i=e+"/"+i,n=47===e.charCodeAt(0));return i=r(i,!n),n?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var o=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!o)).length||o||(e="."),e.length>0&&i&&(e+="/"),o?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":o.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r||(e=o.resolve(e))===(r=o.resolve(r)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var n=e.length,a=n-i,c=1;c<r.length&&47===r.charCodeAt(c);++c);for(var h=r.length-c,p=a<h?a:h,u=-1,g=0;g<=p;++g){if(g===p){if(h>p){if(47===r.charCodeAt(c+g))return r.slice(c+g+1);if(0===g)return r.slice(c+g)}else a>p&&(47===e.charCodeAt(i+g)?u=g:0===g&&(u=0));break}var m=e.charCodeAt(i+g);if(m!==r.charCodeAt(c+g))break;47===m&&(u=g)}var b="";for(g=i+u+1;g<=n;++g)g!==n&&47!==e.charCodeAt(g)||(0===b.length?b+="..":b+="/..");return b.length>0?b+r.slice(c+u):(c+=u,47===r.charCodeAt(c)&&++c,r.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),o=47===r,i=-1,n=!0,a=e.length-1;a>=1;--a)if(47===(r=e.charCodeAt(a))){if(!n){i=a;break}}else n=!1;return -1===i?o?"/":".":o&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');t(e);var o,i=0,n=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var c=r.length-1,h=-1;for(o=e.length-1;o>=0;--o){var p=e.charCodeAt(o);if(47===p){if(!a){i=o+1;break}}else -1===h&&(a=!1,h=o+1),c>=0&&(p===r.charCodeAt(c)?-1==--c&&(n=o):(c=-1,n=h))}return i===n?n=h:-1===n&&(n=e.length),e.slice(i,n)}for(o=e.length-1;o>=0;--o)if(47===e.charCodeAt(o)){if(!a){i=o+1;break}}else -1===n&&(a=!1,n=o+1);return -1===n?"":e.slice(i,n)},extname:function(e){t(e);for(var r=-1,o=0,i=-1,n=!0,a=0,c=e.length-1;c>=0;--c){var h=e.charCodeAt(c);if(47!==h)-1===i&&(n=!1,i=c+1),46===h?-1===r?r=c:1!==a&&(a=1):-1!==r&&(a=-1);else if(!n){o=c+1;break}}return -1===r||-1===i||0===a||1===a&&r===i-1&&r===o+1?"":e.slice(r,i)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var o,i=e.charCodeAt(0),n=47===i;n?(r.root="/",o=1):o=0;for(var a=-1,c=0,h=-1,p=!0,u=e.length-1,g=0;u>=o;--u)if(47!==(i=e.charCodeAt(u)))-1===h&&(p=!1,h=u+1),46===i?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1);else if(!p){c=u+1;break}return -1===a||-1===h||0===g||1===g&&a===h-1&&a===c+1?-1!==h&&(r.base=r.name=0===c&&n?e.slice(1,h):e.slice(c,h)):(0===c&&n?(r.name=e.slice(1,a),r.base=e.slice(1,h)):(r.name=e.slice(c,a),r.base=e.slice(c,h)),r.ext=e.slice(a,h)),c>0?r.dir=e.slice(0,c-1):n&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}},i={};function n(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return o[e](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(n.r(a),n.d(a,{URI:()=>l,Utils:()=>r}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let c=/^\w[\w\d+.-]*$/,h=/^\//,p=/^\/\//;function u(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!c.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!h.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let g=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,r,o,i,n=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||n?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,r||""),this.query=o||"",this.fragment=i||"",u(this,n))}get fsPath(){return _(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:r,path:o,query:i,fragment:n}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===r?r=this.authority:null===r&&(r=""),void 0===o?o=this.path:null===o&&(o=""),void 0===i?i=this.query:null===i&&(i=""),void 0===n?n=this.fragment:null===n&&(n=""),t===this.scheme&&r===this.authority&&o===this.path&&i===this.query&&n===this.fragment?this:new d(t,r,o,i,n)}static parse(e,t=!1){let r=g.exec(e);return r?new d(r[2]||"",C(r[4]||""),C(r[5]||""),C(r[7]||""),C(r[9]||""),t):new d("","","","","")}static file(t){let r="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(r=t.substring(2),t="/"):(r=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",r,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return u(t,!0),t}toString(e=!1){return x(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===m?e.fsPath:null,t}}return e}};let m=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=_(this,!1)),this._fsPath}toString(e=!1){return e?x(this,!0):(this._formatted||(this._formatted=x(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=m),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let b={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function f(e,t,r){let o,i=-1;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);if(a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||45===a||46===a||95===a||126===a||t&&47===a||r&&91===a||r&&93===a||r&&58===a)-1!==i&&(o+=encodeURIComponent(e.substring(i,n)),i=-1),void 0!==o&&(o+=e.charAt(n));else{void 0===o&&(o=e.substr(0,n));let t=b[a];void 0!==t?(-1!==i&&(o+=encodeURIComponent(e.substring(i,n)),i=-1),o+=t):-1===i&&(i=n)}}return -1!==i&&(o+=encodeURIComponent(e.substring(i))),void 0!==o?o:e}function w(e){let t;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);35===o||63===o?(void 0===t&&(t=e.substr(0,r)),t+=b[o]):void 0!==t&&(t+=e[r])}return void 0!==t?t:e}function _(t,r){let o;return o=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?r?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(o=o.replace(/\//g,"\\")),o}function x(e,t){let r=t?w:f,o="",{scheme:i,authority:n,path:a,query:c,fragment:h}=e;if(i&&(o+=i,o+=":"),(n||"file"===i)&&(o+="/",o+="/"),n){let e=n.indexOf("@");if(-1!==e){let t=n.substr(0,e);n=n.substr(e+1),-1===(e=t.lastIndexOf(":"))?o+=r(t,!1,!1):(o+=r(t.substr(0,e),!1,!1),o+=":",o+=r(t.substr(e+1),!1,!0)),o+="@"}-1===(e=(n=n.toLowerCase()).lastIndexOf(":"))?o+=r(n,!1,!0):(o+=r(n.substr(0,e),!1,!0),o+=n.substr(e))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){let e=a.charCodeAt(1);e>=65&&e<=90&&(a=`/${String.fromCharCode(e+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){let e=a.charCodeAt(0);e>=65&&e<=90&&(a=`${String.fromCharCode(e+32)}:${a.substr(2)}`)}o+=r(a,!0,!1)}return c&&(o+="?",o+=r(c,!1,!1)),h&&(o+="#",o+=t?h:f(h,!1,!1)),o}let $=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function C(e){return e.match($)?e.replace($,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var S=n(975);let P=S.posix||S;(t=r||(r={})).joinPath=function(e,...t){return e.with({path:P.join(e.path,...t)})},t.resolvePath=function(e,...t){let r=e.path,o=!1;"/"!==r[0]&&(r="/"+r,o=!0);let i=P.resolve(r,...t);return o&&"/"===i[0]&&!e.authority&&(i=i.substring(1)),e.with({path:i})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=P.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return P.basename(e.path)},t.extname=function(e){return P.extname(e.path)},v=a})();let{URI:ol,Utils:oc}=v;function od(e,t){return JSON.parse(e,(e,r)=>(function(e,t){let r=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(e);if(null==r)return e;switch(r.__ipc){case"date":return new Date(r.value);case"promise":return t(r.value);case"uri":return ol.revive(r.value)}})(r,t))}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...r){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:rR(e??"",!1),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??rC,this._time=rt(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;r.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...r):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=rt(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=rt(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[r,o]=rt(this._time),i=1e3*r+Math.floor(o/1e6),n=e?.message??"";this.logProvider.log(i>250?"warn":this.logLevel,this.logScope,`${n?`${n} `:""}[${i}ms]${e?.suffix??""}`)}};function oh(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function op(e,t){return new Promise(r=>{e.addEventListener(t,function o(i){i.target===e&&(e.removeEventListener(t,o),r())})})}(w||(w={})).on=function(e,t,r,o){let i=!1;if("string"==typeof e){let n=function(t){let o=t?.target?.closest(e);null!=o&&r(t,o)};return document.addEventListener(t,n,o??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,n,o??!0))}}}let n=function(e){r(e,this)};return e.addEventListener(t,n,o??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,n,o??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,r)=>{null==this.listeners&&(this.listeners=new LinkedList);let o=this.listeners.push(null==t?e:[e,t]),i={dispose:()=>{i.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(r)&&r.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),r=t.next();!r.done;r=t.next())this._deliveryQueue.push([r.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let ou={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let r=new events_Node(e);if(this._first===events_Node.Undefined)this._first=r,this._last=r;else if(t){let e=this._last;this._last=r,r.prev=e,e.next=r}else{let e=this._first;this._first=r,r.next=e,e.prev=r}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(r))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?ou:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var og=Object.defineProperty,om=Object.getOwnPropertyDescriptor,ob=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?om(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&og(t,r,n),n};let of=rP();function ov(){return`webview:${of.next()}`}let ow=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=a??=acquireVsCodeApi(),this._disposable=w.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){var t,r,o,i;let n=rA.get(rO.current),a=e.data,c=function(e,t,...r){return(t?.provider??rC).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...r):void 0}(rR(`(e=${a.id}|${a.method})`,n),{log:!1,logLevel:"debug"});if(a.compressed&&a.params instanceof Uint8Array){if("deflate"===a.compressed)try{a.params=or((t=a.params,r7(t,{i:2},void 0,void 0)))}catch(e){a.params=or(a.params)}else a.params=or(a.params);c?.restart({message:`\u2022 decompressed (${a.compressed}) serialized params`})}if("string"==typeof a.params?(a.params=od(a.params,e=>this.getResponsePromise(e.method,e.id)),c?.stop({message:"• deserialized params"})):null==a.params?c?.stop({message:"• no params"}):c?.stop({message:"• invalid params"}),r=` \u2022 ipc (host -> webview) duration=${Date.now()-a.timestamp}ms`,null!=n&&(null!=n.exitDetails&&null!=r?n.exitDetails+=r:n.exitDetails=r),null!=a.completionId){let e=(o=a.method,i=a.completionId,`${o}|${i}`);this._pendingHandlers.get(e)?.(a);return}this._onReceiveMessage.fire(a)}deserializeIpcData(e){return od(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let r=ov();this.postMessage({id:r,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let r=ov(),o=this.getResponsePromise(e.response.method,r);return this.postMessage({id:r,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:r}),o}getResponsePromise(e,t){return new Promise((r,o)=>{var i,n;let a,c=(i=e,n=t,`${i}|${n}`);function h(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(c)}a=setTimeout(()=>{h.call(this),o(Error(`Timed out waiting for completion of ${c}`))},(rk.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(h.call(this),e.method===t6.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>r(t.value))}else queueMicrotask(()=>r(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function oy(e,t){let r=Math.pow(10,t);return Math.round(e*r)/r}ob([os({args:{0:e=>`${e.data.id}|${e.data.method}`}},!0)],ow.prototype,"onMessageReceived",1),ob([os({args:{0:e=>e.method,1:!1}},!0)],ow.prototype,"sendCommand",1),ob([os({args:{0:e=>e.method,1:!1,2:!1}},!0)],ow.prototype,"sendRequest",1),ob([os({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],ow.prototype,"postMessage",1),ow=ob([(m=e=>`${e.appName}(HostIpc)`,e=>void r$.set(e,m))],ow);let RGBA=class RGBA{constructor(e,t,r,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,r)),this.a=oy(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,r,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oy(Math.max(Math.min(1,t),0),3),this.l=oy(Math.max(Math.min(1,r),0),3),this.a=oy(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,i=e.a,n=Math.max(t,r,o),a=Math.min(t,r,o),c=0,h=0,p=(a+n)/2,u=n-a;if(u>0){switch(h=Math.min(p<=.5?u/(2*p):u/(2-2*p),1),n){case t:c=(r-o)/u+6*(r<o);break;case r:c=(o-t)/u+2;break;case o:c=(t-r)/u+4}c*=60,c=Math.round(c)}return new HSLA(c,h,p,i)}static _hue2rgb(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}static toRGBA(e){let t,r,o,i=e.h/360,{s:n,l:a,a:c}=e;if(0===n)t=r=o=a;else{let e=a<.5?a*(1+n):a+n-a*n,c=2*a-e;t=HSLA._hue2rgb(c,e,i+1/3),r=HSLA._hue2rgb(c,e,i),o=HSLA._hue2rgb(c,e,i-1/3)}return new RGBA(Math.round(255*t),Math.round(255*r),Math.round(255*o),c)}};let HSVA=class HSVA{constructor(e,t,r,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=oy(Math.max(Math.min(1,t),0),3),this.v=oy(Math.max(Math.min(1,r),0),3),this.a=oy(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,i=Math.max(t,r,o),n=i-Math.min(t,r,o);return new HSVA(Math.round(60*(0===n?0:i===t?((r-o)/n%6+6)%6:i===r?(o-t)/n+2:(t-r)/n+4)),0===i?0:n/i,i,e.a)}static toRGBA(e){let{h:t,s:r,v:o,a:i}=e,n=o*r,a=n*(1-Math.abs(t/60%2-1)),c=o-n,[h,p,u]=[0,0,0];return t<60?(h=n,p=a):t<120?(h=a,p=n):t<180?(p=n,u=a):t<240?(p=a,u=n):t<300?(h=a,u=n):t<=360&&(h=n,u=a),new RGBA(h=Math.round((h+c)*255),p=Math.round((p+c)*255),u=Math.round((u+c)*255),i)}};function o_(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(o_(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){return oy(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),r=e.getRelativeLuminance();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:r,b:o,a:i}=this.rgba;return new Color(new RGBA(t,r,o,i*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,r=this.rgba.a,o=t.a,i=r+o*(1-r);return i<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*r/i+t.r*o*(1-r)/i,this.rgba.g*r/i+t.g*o*(1-r)/i,this.rgba.b*r/i+t.b*o*(1-r)/i,i))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:r,b:o,a:i}=this.rgba;return new Color(new RGBA(e.rgba.r-i*(e.rgba.r-t),e.rgba.g-i*(e.rgba.g-r),e.rgba.b-i*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let r=1-e.rgba.a;return new Color(new RGBA(r*t.rgba.r+e.rgba.a*e.rgba.r,r*t.rgba.g+e.rgba.a*e.rgba.g,r*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${ok(e.rgba.r)}${ok(e.rgba.g)}${ok(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,r){if(e.isLighterThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),i=t.getRelativeLuminance();return r=r*(i-o)/i,e.lighten(r)}static getDarkerColor(e,t,r){if(e.isDarkerThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),i=t.getRelativeLuminance();return r=r*(o-i)/o,e.darken(r)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function ok(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let ox=new Emitter,o$=ox.event;function oC(e){let t=document.documentElement,r=window.getComputedStyle(t),o=document.body.classList,i=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),n=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=o_("--vscode-editor-background",r),c=o_("--vscode-editor-foreground",r);return c||(c=o_("--vscode-foreground",r)),{colors:{background:a,foreground:c},computedStyle:r,isLightTheme:i,isHighContrastTheme:n,isInitializing:null==e}}var oS=Object.defineProperty,oP=Object.getOwnPropertyDescriptor,oO=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?oP(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&oS(t,r,n),n};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new ow(this.name);let e=this.bootstrap;this.bootstrap=void 0,this._stateProvider=this.createStateProvider(e,this._ipc,this._logger);let{webviewId:t,webviewInstanceId:r}=this._stateProvider.state;this._webview={webviewId:t,webviewInstanceId:r,createCommandLink:(e,o)=>{var i;return e.endsWith(":")&&(e=`${e}${t.split(".").at(-1)}`),i=e,`command:${i}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:r,...o}))}`}};let o=oC();if(null!=this.onThemeUpdated){let e;this.onThemeUpdated(o),this.disposables.push(((e=new MutationObserver(e=>{ox.fire(oC(e))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()})),this.disposables.push(o$(this.onThemeUpdated,this))}this.disposables.push(this._stateProvider,this._ipc.onReceiveMessage(e=>{switch(!0){case t8.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case t7.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=t0(e=>{this._ipc.sendCommand(t2,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return ek`<slot></slot>`}};oO([eD({type:String})],GlAppHost.prototype,"name",2),oO([eD({type:String})],GlAppHost.prototype,"placement",2),oO([S({context:"ipc"})],GlAppHost.prototype,"_ipc",2),oO([S({context:"logger"})],GlAppHost.prototype,"_logger",2),oO([S({context:"promos"})],GlAppHost.prototype,"_promos",2),oO([S({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),oO([S({context:"webview"})],GlAppHost.prototype,"_webview",2),oO([eD({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let oA=D`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;D`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${oA}
	}
`;let oL=D`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,oR=D`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`,oB=D`
	:focus-visible {
		${oL}
	}
`,oI=D`
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
`;D`
	* {
		box-sizing: border-box;
	}
`;let oE=D`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${oL}
	}
	a:hover {
		text-decoration: underline;
	}
`,oT=D`
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
`;D`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;let oD=D`
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
`,oz=D`
	.home {
		padding: 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		overflow: hidden;
	}

	.home__alerts {
		flex: none;
		padding: 0 2rem;
		position: relative;
	}
	.home__alerts:not([has-alerts]) {
		display: none;
	}

	.home__main {
		flex: 1;
		overflow: auto;
		padding: 0.8rem 1.2rem;
	}
	.home__main > *:last-child {
		margin-bottom: 0;
	}

	.home__aux,
	.home__header {
		flex: none;
	}

	.home__header {
		border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
		border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
		padding: 0.4rem;
	}

	.home__aux:has(gl-promo-banner:has(gl-promo:not([has-promo])):only-child) {
		display: none;
	}

	summary {
		font-size: 1.3rem;
		font-weight: normal;
		text-transform: uppercase;
		color: var(--vscode-foreground);
		cursor: pointer;
	}

	details[open] summary {
		margin-block-end: 0.8rem;
	}

	gl-home-header {
		margin: 0;
	}

	gl-repo-alerts:not([has-alerts]) {
		display: none;
	}

	gl-welcome-overlay {
		z-index: 5; /* to owerlay the Launchpad progress animation */
	}
`;D`
	.button-container {
		margin: 1rem auto 0;
		text-align: left;
		max-width: 30rem;
		transition: max-width 0.2s ease-out;
	}

	@media (min-width: 640px) {
		.button-container {
			max-width: 100%;
		}
	}
	.button-container--trio > gl-button:first-child {
		margin-bottom: 0.4rem;
	}

	.button-group {
		display: inline-flex;
		gap: 0.4rem;
	}
	.button-group--single {
		width: 100%;
		max-width: 30rem;
	}
	.button-group gl-button {
		margin-top: 0;
	}
	.button-group gl-button:not(:first-child) {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	.button-group gl-button:not(:last-child) {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;let oM=D`
	.alert {
		position: relative;
		padding: 0.8rem 1.2rem;
		line-height: 1.2;
		margin-bottom: 1.2rem;
		background-color: var(--color-alert-neutralBackground);
		border-left: 0.3rem solid var(--color-alert-neutralBorder);
		color: var(--color-alert-foreground);
	}
	.alert__title {
		font-size: 1.4rem;
		margin: 0;
	}
	.alert__description {
		font-size: 1.2rem;
		margin: 0.4rem 0 0;
	}
	.alert__description > :first-child {
		margin-top: 0;
	}
	.alert__description > :last-child {
		margin-bottom: 0;
	}
	.alert__close {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		color: inherit;
		opacity: 0.64;
	}
	.alert__close:hover {
		color: inherit;
		opacity: 1;
	}
	.alert.is-collapsed {
		cursor: pointer;
	}
	.alert.is-collapsed:hover {
		background-color: var(--color-alert-neutralHoverBackground);
	}
	.alert.is-collapsed .alert__description,
	.alert.is-collapsed .alert__close gl-tooltip:first-child,
	.alert:not(.is-collapsed) .alert__close gl-tooltip:last-child {
		display: none;
	}
	.alert--info {
		--color-alert-foreground: var(--color-alert-infoForeground);
		background-color: var(--color-alert-infoBackground);
		border-left-color: var(--color-alert-infoBorder);
	}
	.alert--warning {
		--color-alert-foreground: var(--color-alert-warningForeground);
		background-color: var(--color-alert-warningBackground);
		border-left-color: var(--color-alert-warningBorder);
	}
	.alert--danger {
		--color-alert-foreground: var(--color-alert-errorForeground);
		background-color: var(--color-alert-errorBackground);
		border-left-color: var(--color-alert-errorBorder);
	}
	.alert a:not(:hover) {
		color: color-mix(in srgb, var(--color-alert-foreground) 50%, var(--vscode-textLink-foreground));
	}
	.alert a:hover {
		color: color-mix(in srgb, var(--color-alert-foreground) 50%, var(--vscode-textLink-activeForeground));
	}
`,oN=D`
	.nav-list {
		margin-left: -1.2rem;
		margin-right: -1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		align-items: stretch;
		margin-bottom: 1.6rem;
	}
	.nav-list__item {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		padding: 0.4rem 2rem;
	}
	.nav-list__item:hover,
	.nav-list__item:focus-within {
		background-color: var(--vscode-list-hoverBackground);
		color: var(--vscode-list-hoverForeground);
	}
	.nav-list__item:has(:first-child:focus) {
		outline: 1px solid var(--vscode-focusBorder);
		outline-offset: -1px;
	}
	.nav-list__item:has(:active) {
		background-color: var(--vscode-list-activeSelectionBackground);
		color: var(--vscode-list-activeSelectionForeground);
	}
	.nav-list__item:has(.is-disabled) {
		cursor: not-allowed;
	}
	.nav-list__link {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.8rem;
		color: inherit;
	}
	.nav-list__link:hover,
	.nav-list__link:focus {
		color: inherit;
		text-decoration: none;
	}
	.nav-list__link:focus {
		outline: none;
	}
	.nav-list__link.is-disabled,
	.nav-list__link.is-disabled:hover {
		opacity: 0.5;
		pointer-events: none;
		text-decoration: none;
	}
	.nav-list__icon {
		flex: none;
		opacity: 0.5;
	}
	.nav-list__label {
		flex: 1;
		font-weight: 600;
	}
	.nav-list__desc {
		color: var(--color-foreground--65);
		font-variant: all-small-caps;
		margin-left: 1rem;
	}
	.nav-list__group {
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}
	.nav-list__group .nav-list__label {
		width: auto;
	}
	.nav-list__access {
		flex: none;
		position: relative;
		left: 1.2rem;
		font-size: x-small;
		outline: none;
		white-space: nowrap;
		--gl-feature-badge-color: color-mix(in srgb, transparent 40%, currentColor);
		--gl-feature-badge-border-color: color-mix(in srgb, transparent 40%, var(--color-foreground--50));
	}
	.nav-list__item:hover .nav-list__label {
		text-decoration: underline;
	}
	.nav-list__item:hover .is-disabled .nav-list__label {
		text-decoration: none;
	}
	.nav-list__item:hover .nav-list__desc {
		color: var(--color-foreground);
	}
	.nav-list__item:focus-within .nav-list__access,
	.nav-list__item:hover .nav-list__access {
		--gl-feature-badge-color: currentColor;
		--gl-feature-badge-border-color: var(--color-foreground--50);
	}
	.nav-list__title {
		padding: 0 2rem;
	}

	.t-eyebrow {
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-foreground--50);
		margin: 0;
	}
	.t-eyebrow.sticky {
		top: -8px;
	}
`,oj=D`
	a,
	a:hover,
	a:focus,
	a:active {
		text-decoration: none;
	}

	.walkthrough-progress {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 2px 4px 4px;
		margin-top: 4px;
		align-items: stretch;
		cursor: pointer;
		border-radius: 4px;
	}
	.walkthrough-progress:focus-within,
	.walkthrough-progress:hover {
		background-color: var(--gl-walkthrough-hover-background);
	}

	.walkthrough-progress__title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--color-foreground--85);
	}
	.walkthrough-progress__button {
		--button-padding: 1px 2px 0px 2px;
		position: absolute;
		right: 0.4rem;
	}
	.walkthrough-progress__bar::-webkit-progress-bar {
		border-radius: 2px;
		background: var(--color-alert-neutralBackground);
	}
	.walkthrough-progress__bar::-webkit-progress-value {
		background: var(--vscode-progressBar-background, blue);
		transition: 0.1s ease-in;
		border-radius: 2px;
	}
	.walkthrough-progress__bar {
		pointer-events: none;
		border-radius: 2px;
		width: 100%;
		background: unset;
		height: 4px;
		flex-shrink: 0;
		z-index: 2;
	}
`,{fromCharCode:oF}=String;new TextEncoder;let oU=new TextDecoder;let StateProviderBase=class StateProviderBase{constructor(e,t,r,o){this.host=e,this.ipc=r,this.logger=o,this._state=this.ipc.deserializeIpcData(oU.decode(function(e){let t=globalThis.atob(e),r=t.length,o=new Uint8Array(r),i=0,n=r-r%8;for(;i<n;i+=8)o[i]=t.charCodeAt(i),o[i+1]=t.charCodeAt(i+1),o[i+2]=t.charCodeAt(i+2),o[i+3]=t.charCodeAt(i+3),o[i+4]=t.charCodeAt(i+4),o[i+5]=t.charCodeAt(i+5),o[i+6]=t.charCodeAt(i+6),o[i+7]=t.charCodeAt(i+7);for(;i<r;i++)o[i]=t.charCodeAt(i);return o}(t))),this.logger?.log(`bootstrap duration=${Date.now()-this._state.timestamp}ms`),this.provider=this.createContextProvider(this._state),this.onPersistState?.(this._state),this.disposable=this.ipc.onReceiveMessage(this.onMessageReceived.bind(this)),this.initializeState()}get state(){return this._state}get webviewId(){return this._state.webviewId}get webviewInstanceId(){return this._state.webviewInstanceId}get timestamp(){return this._state.timestamp}dispose(){this.disposable.dispose()}get deferBootstrap(){return!1}async initializeState(){if(this.deferBootstrap){let e=await this.ipc.sendRequest(t1,{bootstrap:!0});if(null!=e.state){let t=oa(e.state)?await e.state:e.state;this.onDeferredBootstrapStateReceived(t)}}else this.ipc.sendRequest(t1,{bootstrap:!1})}onDeferredBootstrapStateReceived(e){this._state={...e,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}};let HomeStateProvider=class HomeStateProvider extends StateProviderBase{createContextProvider(e){return new context_provider_i(this.host,{context:"state",initialValue:e})}onMessageReceived(e){switch(!0){case e4.is(e):this._state.repositories=e.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case e2.is(e):this._state.repositories=e.params.repositories,this._state.discovering=e.params.discovering,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case e6.is(e):this._state.walkthroughProgress=e.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case e9.is(e):this._state.subscription=e.params.subscription,this._state.avatar=e.params.avatar,this._state.organizationsCount=e.params.organizationsCount,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case te.is(e):this._state.orgSettings=e.params.orgSettings,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case e8.is(e):this._state.hasAnyIntegrationConnected=e.params.hasAnyIntegrationConnected,this._state.integrations=e.params.integrations,this._state.ai=e.params.ai,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case e3.is(e):this._state.previewEnabled=e.params.previewEnabled,this._state.previewCollapsed=e.params.previewCollapsed,this._state.aiEnabled=e.params.aiEnabled,this._state.experimentalComposerEnabled=e.params.experimentalComposerEnabled,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),this.host.requestUpdate();break;case eX.is(e):this._state.aiAllAccessBannerCollapsed=e.params,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),this.host.requestUpdate();break;case eQ.is(e):this._state.mcpBannerCollapsed=e.params.mcpBannerCollapsed,this._state.mcpCanAutoRegister=e.params.mcpCanAutoRegister,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),this.host.requestUpdate()}}};var oq=((b=oq||{})[b.VerificationRequired=-1]="VerificationRequired",b[b.Community=0]="Community",b[b.DeprecatedPreview=1]="DeprecatedPreview",b[b.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",b[b.Trial=3]="Trial",b[b.TrialExpired=4]="TrialExpired",b[b.TrialReactivationEligible=5]="TrialReactivationEligible",b[b.Paid=6]="Paid",b);let oW=["community","community-with-account","student","pro","advanced","teams","enterprise"],oH=["student","pro","advanced","teams","enterprise"];function oG(e){switch(e){case"student":return"Student";case"pro":return"Pro";case"advanced":return"Advanced";case"teams":return"Business";case"enterprise":return"Enterprise";default:return"Community"}}function oV(e){return null!=e?oW.indexOf(e):-1}function oZ(e){return`GitLens ${oG(e)}`}function oK(e,t){var r;return r=e.plan.effective.expiresOn,null!=r?function(e,t,r,o){let i=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime()),n=o??Math.floor;switch(r){case"days":return n(i/864e5);case"hours":return n(i/36e5);case"minutes":return n(i/6e4);case"seconds":return n(i/1e3);default:return i}}(Date.now(),new Date(r),t,Math.round):void 0}function oY(e){var t;return t=e.plan.actual.id,oH.includes(t)}function oJ(e){return null!=e.state?e.state===oq.Trial:e.plan.actual.id!==e.plan.effective.id}function oX(e){return null!=e&&(e===oq.Trial||e===oq.Paid)}function oQ(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}let o0=D`
	:host {
		display: flex;
	}

	.chip {
		display: flex;
		gap: 0.6rem;
		align-items: center;

		border-radius: 0.3rem;
		padding: 0.2rem 0.4rem;
		cursor: pointer;
	}

	.chip:focus-visible {
		${oL}
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-bottom: 0.4rem;
	}

	.header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		width: 100%;
		padding-bottom: 0.4rem;
	}

	.header__actions {
		flex: none;
		display: flex;
		gap: 0.2rem;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.header__title {
		flex: 1;
		font-size: 1.5rem;
		line-height: 1.7;
		font-weight: 600;
		margin: 0;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`,o1=D`
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
`,o2=D`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;var o3=Object.defineProperty,o5=Object.defineProperties,o4=Object.getOwnPropertyDescriptor,o6=Object.getOwnPropertyDescriptors,o8=Object.getOwnPropertySymbols,o7=Object.prototype.hasOwnProperty,o9=Object.prototype.propertyIsEnumerable,ie=e=>{throw TypeError(e)},it=(e,t,r)=>t in e?o3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ir=(e,t)=>{for(var r in t||(t={}))o7.call(t,r)&&it(e,r,t[r]);if(o8)for(var r of o8(t))o9.call(t,r)&&it(e,r,t[r]);return e},io=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?o4(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&o3(t,r,n),n},ii=(e,t,r)=>t.has(e)||ie("Cannot "+r),ia=new Map,is=new WeakMap;function il(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function ic(e,t){ia.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function id(e,t,r){let o=is.get(e);if(null==o?void 0:o[t])return il(o[t],r.dir);let i=ia.get(t);return i?il(i,r.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=eC,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===eC||null==e)return this._t=void 0,this.it=e;if(e===e$)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let ih=tD(unsafe_html_e);var ip=D`
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
`,iu=D`
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
`;let ig=new Set,im=new Map,ib="ltr",iv="en",iw="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(iw){let e=new MutationObserver(i_);ib=document.documentElement.dir||"ltr",iv=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function iy(...e){e.map(e=>{let t=e.$code.toLowerCase();im.has(t)?im.set(t,Object.assign(Object.assign({},im.get(t)),e)):im.set(t,e),c||(c=e)}),i_()}function i_(){iw&&(ib=document.documentElement.dir||"ltr",iv=document.documentElement.lang||navigator.language),[...ig.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ig.add(this.host)}hostDisconnected(){ig.delete(this.host)}dir(){return`${this.host.dir||ib}`.toLowerCase()}lang(){return`${this.host.lang||iv}`.toLowerCase()}getTranslationData(e){var t,r;let o=new Intl.Locale(e.replace(/_/g,"-")),i=null==o?void 0:o.language.toLowerCase(),n=null!=(r=null==(t=null==o?void 0:o.region)?void 0:t.toLowerCase())?r:"",a=im.get(`${i}-${n}`),c=im.get(i);return{locale:o,language:i,region:n,primary:a,secondary:c}}exists(e,t){var r;let{primary:o,secondary:i}=this.getTranslationData(null!=(r=t.lang)?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!o&&!!o[e]||!!i&&!!i[e]||!!t.includeFallback&&!!c&&!!c[e]}term(e,...t){let r,{primary:o,secondary:i}=this.getTranslationData(this.lang());if(o&&o[e])r=o[e];else if(i&&i[e])r=i[e];else{if(!c||!c[e])return String(e);r=c[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}};var ik={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};iy(ik);var ix=class extends LocalizeController{};iy(ik);var i$=D`
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
`,iC=class extends lit_element_i{constructor(){let e;super(),(e=_).has(this)?ie("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let r=new CustomEvent(e,ir({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){let o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch(o){customElements.define(e,class extends t{},r)}return}let i=" (unknown version)";"version"in t&&t.version&&(i=" v"+t.version),"version"in o&&o.version&&o.version}attributeChangedCallback(e,t,r){let o,i;if(ii(this,o=_,"read from private field"),i?!i.call(this):!o.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),ii(this,e=_,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&null==this[r]&&(this[r]=t)})}};_=new WeakMap,iC.version="2.20.1",iC.dependencies={},io([eD()],iC.prototype,"dir",2),io([eD()],iC.prototype,"lang",2);let iS=Math.min,iP=Math.max,iO=Math.round,iA=Math.floor,iL=e=>({x:e,y:e}),iR={left:"right",right:"left",bottom:"top",top:"bottom"},iB={start:"end",end:"start"};function iI(e,t){return"function"==typeof e?e(t):e}function iE(e){return e.split("-")[0]}function iT(e){return e.split("-")[1]}function iD(e){return"x"===e?"y":"x"}function iz(e){return"y"===e?"height":"width"}let iM=new Set(["top","bottom"]);function iN(e){return iM.has(iE(e))?"y":"x"}function ij(e){return e.replace(/start|end/g,e=>iB[e])}let iF=["left","right"],iU=["right","left"],iq=["top","bottom"],iW=["bottom","top"];function iH(e){return e.replace(/left|right|bottom|top/g,e=>iR[e])}function iG(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function iV(e){let{x:t,y:r,width:o,height:i}=e;return{width:o,height:i,top:r,left:t,right:t+o,bottom:r+i,x:t,y:r}}function iZ(e,t,r){let o,{reference:i,floating:n}=e,a=iN(t),c=iD(iN(t)),h=iz(c),p=iE(t),u="y"===a,g=i.x+i.width/2-n.width/2,m=i.y+i.height/2-n.height/2,b=i[h]/2-n[h]/2;switch(p){case"top":o={x:g,y:i.y-n.height};break;case"bottom":o={x:g,y:i.y+i.height};break;case"right":o={x:i.x+i.width,y:m};break;case"left":o={x:i.x-n.width,y:m};break;default:o={x:i.x,y:i.y}}switch(iT(t)){case"start":o[c]-=b*(r&&u?-1:1);break;case"end":o[c]+=b*(r&&u?-1:1)}return o}let iK=async(e,t,r)=>{let{placement:o="bottom",strategy:i="absolute",middleware:n=[],platform:a}=r,c=n.filter(Boolean),h=await (null==a.isRTL?void 0:a.isRTL(t)),p=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:g}=iZ(p,o,h),m=o,b={},f=0;for(let r=0;r<c.length;r++){let{name:n,fn:v}=c[r],{x:w,y:_,data:x,reset:$}=await v({x:u,y:g,initialPlacement:o,placement:m,strategy:i,middlewareData:b,rects:p,platform:a,elements:{reference:e,floating:t}});u=null!=w?w:u,g=null!=_?_:g,b={...b,[n]:{...b[n],...x}},$&&f<=50&&(f++,"object"==typeof $&&($.placement&&(m=$.placement),$.rects&&(p=!0===$.rects?await a.getElementRects({reference:e,floating:t,strategy:i}):$.rects),{x:u,y:g}=iZ(p,m,h)),r=-1)}return{x:u,y:g,placement:m,strategy:i,middlewareData:b}};async function iY(e,t){var r;void 0===t&&(t={});let{x:o,y:i,platform:n,rects:a,elements:c,strategy:h}=e,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:m=!1,padding:b=0}=iI(t,e),f=iG(b),v=c[m?"floating"===g?"reference":"floating":g],w=iV(await n.getClippingRect({element:null==(r=await (null==n.isElement?void 0:n.isElement(v)))||r?v:v.contextElement||await (null==n.getDocumentElement?void 0:n.getDocumentElement(c.floating)),boundary:p,rootBoundary:u,strategy:h})),_="floating"===g?{x:o,y:i,width:a.floating.width,height:a.floating.height}:a.reference,x=await (null==n.getOffsetParent?void 0:n.getOffsetParent(c.floating)),$=await (null==n.isElement?void 0:n.isElement(x))&&await (null==n.getScale?void 0:n.getScale(x))||{x:1,y:1},C=iV(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:_,offsetParent:x,strategy:h}):_);return{top:(w.top-C.top+f.top)/$.y,bottom:(C.bottom-w.bottom+f.bottom)/$.y,left:(w.left-C.left+f.left)/$.x,right:(C.right-w.right+f.right)/$.x}}let iJ=new Set(["left","top"]);async function iX(e,t){let{placement:r,platform:o,elements:i}=e,n=await (null==o.isRTL?void 0:o.isRTL(i.floating)),a=iE(r),c=iT(r),h="y"===iN(r),p=iJ.has(a)?-1:1,u=n&&h?-1:1,g=iI(t,e),{mainAxis:m,crossAxis:b,alignmentAxis:f}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&"number"==typeof f&&(b="end"===c?-1*f:f),h?{x:b*u,y:m*p}:{x:m*p,y:b*u}}function iQ(){return"u">typeof window}function i0(e){return i3(e)?(e.nodeName||"").toLowerCase():"#document"}function i1(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function i2(e){var t;return null==(t=(i3(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function i3(e){return!!iQ()&&(e instanceof Node||e instanceof i1(e).Node)}function i5(e){return!!iQ()&&(e instanceof Element||e instanceof i1(e).Element)}function i4(e){return!!iQ()&&(e instanceof HTMLElement||e instanceof i1(e).HTMLElement)}function i6(e){return!(!iQ()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof i1(e).ShadowRoot)}let i8=new Set(["inline","contents"]);function i7(e){let{overflow:t,overflowX:r,overflowY:o,display:i}=nc(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!i8.has(i)}let i9=new Set(["table","td","th"]),ne=[":popover-open",":modal"];function nt(e){return ne.some(t=>{try{return e.matches(t)}catch{return!1}})}let nr=["transform","translate","scale","rotate","perspective"],no=["transform","translate","scale","rotate","perspective","filter"],ni=["paint","layout","strict","content"];function nn(e){let t=na(),r=i5(e)?nc(e):e;return nr.some(e=>!!r[e]&&"none"!==r[e])||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||no.some(e=>(r.willChange||"").includes(e))||ni.some(e=>(r.contain||"").includes(e))}function na(){return!("u"<typeof CSS)&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let ns=new Set(["html","body","#document"]);function nl(e){return ns.has(i0(e))}function nc(e){return i1(e).getComputedStyle(e)}function nd(e){return i5(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function nh(e){if("html"===i0(e))return e;let t=e.assignedSlot||e.parentNode||i6(e)&&e.host||i2(e);return i6(t)?t.host:t}function np(e,t,r){var o;void 0===t&&(t=[]),void 0===r&&(r=!0);let i=function e(t){let r=nh(t);return nl(r)?t.ownerDocument?t.ownerDocument.body:t.body:i4(r)&&i7(r)?r:e(r)}(e),n=i===(null==(o=e.ownerDocument)?void 0:o.body),a=i1(i);if(n){let e=nu(a);return t.concat(a,a.visualViewport||[],i7(i)?i:[],e&&r?np(e):[])}return t.concat(i,np(i,[],r))}function nu(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ng(e){let t=nc(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,i=i4(e),n=i?e.offsetWidth:r,a=i?e.offsetHeight:o,c=iO(r)!==n||iO(o)!==a;return c&&(r=n,o=a),{width:r,height:o,$:c}}function nm(e){return i5(e)?e:e.contextElement}function nb(e){let t=nm(e);if(!i4(t))return iL(1);let r=t.getBoundingClientRect(),{width:o,height:i,$:n}=ng(t),a=(n?iO(r.width):r.width)/o,c=(n?iO(r.height):r.height)/i;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}let nf=iL(0);function nv(e){let t=i1(e);return na()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:nf}function nw(e,t,r,o){var i;void 0===t&&(t=!1),void 0===r&&(r=!1);let n=e.getBoundingClientRect(),a=nm(e),c=iL(1);t&&(o?i5(o)&&(c=nb(o)):c=nb(e));let h=(void 0===(i=r)&&(i=!1),o&&(!i||o===i1(a))&&i)?nv(a):iL(0),p=(n.left+h.x)/c.x,u=(n.top+h.y)/c.y,g=n.width/c.x,m=n.height/c.y;if(a){let e=i1(a),t=o&&i5(o)?i1(o):o,r=e,i=nu(r);for(;i&&o&&t!==r;){let e=nb(i),t=i.getBoundingClientRect(),o=nc(i),n=t.left+(i.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(i.clientTop+parseFloat(o.paddingTop))*e.y;p*=e.x,u*=e.y,g*=e.x,m*=e.y,p+=n,u+=a,i=nu(r=i1(i))}}return iV({width:g,height:m,x:p,y:u})}function ny(e,t){let r=nd(e).scrollLeft;return t?t.left+r:nw(i2(e)).left+r}function n_(e,t){let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-ny(e,r),y:r.top+t.scrollTop}}let nk=new Set(["absolute","fixed"]);function nx(e,t,r){var o;let i;if("viewport"===t)i=function(e,t){let r=i1(e),o=i2(e),i=r.visualViewport,n=o.clientWidth,a=o.clientHeight,c=0,h=0;if(i){n=i.width,a=i.height;let e=na();(!e||e&&"fixed"===t)&&(c=i.offsetLeft,h=i.offsetTop)}let p=ny(o);if(p<=0){let e=o.ownerDocument,t=e.body,r=getComputedStyle(t),i="CSS1Compat"===e.compatMode&&parseFloat(r.marginLeft)+parseFloat(r.marginRight)||0,a=Math.abs(o.clientWidth-t.clientWidth-i);a<=25&&(n-=a)}else p<=25&&(n+=p);return{width:n,height:a,x:c,y:h}}(e,r);else if("document"===t){let t,r,n,a,c,h,p;o=i2(e),t=i2(o),r=nd(o),n=o.ownerDocument.body,a=iP(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),c=iP(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight),h=-r.scrollLeft+ny(o),p=-r.scrollTop,"rtl"===nc(n).direction&&(h+=iP(t.clientWidth,n.clientWidth)-a),i={width:a,height:c,x:h,y:p}}else if(i5(t)){let e,o,n,a,c,h;o=(e=nw(t,!0,"fixed"===r)).top+t.clientTop,n=e.left+t.clientLeft,a=i4(t)?nb(t):iL(1),c=t.clientWidth*a.x,h=t.clientHeight*a.y,i={width:c,height:h,x:n*a.x,y:o*a.y}}else{let r=nv(e);i={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return iV(i)}function n$(e){return"static"===nc(e).position}function nC(e,t){if(!i4(e)||"fixed"===nc(e).position)return null;if(t)return t(e);let r=e.offsetParent;return i2(e)===r&&(r=r.ownerDocument.body),r}function nS(e,t){var r;let o=i1(e);if(nt(e))return o;if(!i4(e)){let t=nh(e);for(;t&&!nl(t);){if(i5(t)&&!n$(t))return t;t=nh(t)}return o}let i=nC(e,t);for(;i&&(r=i,i9.has(i0(r)))&&n$(i);)i=nC(i,t);return i&&nl(i)&&n$(i)&&!nn(i)?o:i||function(e){let t=nh(e);for(;i4(t)&&!nl(t);){if(nn(t))return t;if(nt(t))break;t=nh(t)}return null}(e)||o}let nP=async function(e){let t=this.getOffsetParent||nS,r=this.getDimensions,o=await r(e.floating);return{reference:function(e,t,r){let o=i4(t),i=i2(t),n="fixed"===r,a=nw(e,!0,n,t),c={scrollLeft:0,scrollTop:0},h=iL(0);if(o||!o&&!n)if(("body"!==i0(t)||i7(i))&&(c=nd(t)),o){let e=nw(t,!0,n,t);h.x=e.x+t.clientLeft,h.y=e.y+t.clientTop}else i&&(h.x=ny(i));n&&!o&&i&&(h.x=ny(i));let p=!i||o||n?iL(0):n_(i,c);return{x:a.left+c.scrollLeft-h.x-p.x,y:a.top+c.scrollTop-h.y-p.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},nO={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:o,strategy:i}=e,n="fixed"===i,a=i2(o),c=!!t&&nt(t.floating);if(o===a||c&&n)return r;let h={scrollLeft:0,scrollTop:0},p=iL(1),u=iL(0),g=i4(o);if((g||!g&&!n)&&(("body"!==i0(o)||i7(a))&&(h=nd(o)),i4(o))){let e=nw(o);p=nb(o),u.x=e.x+o.clientLeft,u.y=e.y+o.clientTop}let m=!a||g||n?iL(0):n_(a,h);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-h.scrollLeft*p.x+u.x+m.x,y:r.y*p.y-h.scrollTop*p.y+u.y+m.y}},getDocumentElement:i2,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:i}=e,n=[..."clippingAncestors"===r?nt(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let o=np(e,[],!1).filter(e=>i5(e)&&"body"!==i0(e)),i=null,n="fixed"===nc(e).position,a=n?nh(e):e;for(;i5(a)&&!nl(a);){let t=nc(a),r=nn(a);r||"fixed"!==t.position||(i=null),(n?!r&&!i:!r&&"static"===t.position&&!!i&&nk.has(i.position)||i7(a)&&!r&&function e(t,r){let o=nh(t);return!(o===r||!i5(o)||nl(o))&&("fixed"===nc(o).position||e(o,r))}(e,a))?o=o.filter(e=>e!==a):i=t,a=nh(a)}return t.set(e,o),o}(t,this._c):[].concat(r),o],a=n[0],c=n.reduce((e,r)=>{let o=nx(t,r,i);return e.top=iP(o.top,e.top),e.right=iS(o.right,e.right),e.bottom=iS(o.bottom,e.bottom),e.left=iP(o.left,e.left),e},nx(t,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:nS,getElementRects:nP,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=ng(e);return{width:t,height:r}},getScale:nb,isElement:i5,isRTL:function(e){return"rtl"===nc(e).direction}};function nA(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let nL=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var r,o;let i,n,{placement:a,rects:c,platform:h,elements:p}=t,{apply:u=()=>{},...g}=iI(e,t),m=await iY(t,g),b=iE(a),f=iT(a),v="y"===iN(a),{width:w,height:_}=c.floating;"top"===b||"bottom"===b?(i=b,n=f===(await (null==h.isRTL?void 0:h.isRTL(p.floating))?"start":"end")?"left":"right"):(n=b,i="end"===f?"top":"bottom");let x=_-m.top-m.bottom,$=w-m.left-m.right,C=iS(_-m[i],x),S=iS(w-m[n],$),P=!t.middlewareData.shift,O=C,A=S;if(null!=(r=t.middlewareData.shift)&&r.enabled.x&&(A=$),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(O=x),P&&!f){let e=iP(m.left,0),t=iP(m.right,0),r=iP(m.top,0),o=iP(m.bottom,0);v?A=w-2*(0!==e||0!==t?e+t:iP(m.left,m.right)):O=_-2*(0!==r||0!==o?r+o:iP(m.top,m.bottom))}await u({...t,availableWidth:A,availableHeight:O});let B=await h.getDimensions(p.floating);return w!==B.width||_!==B.height?{reset:{rects:!0}}:{}}}},nR=tD(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return e$}});function nB(e){var t=e;for(let e=t;e;e=nI(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=nI(t);e;e=nI(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||nn(t)||"BODY"===e.tagName))return e}return null}function nI(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var nE=class extends iC{constructor(){super(...arguments),this.localize=new ix(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),o=0,i=0,n=0,a=0,c=0,h=0,p=0,u=0;r?e.top<t.top?(o=e.left,i=e.bottom,n=e.right,a=e.bottom,c=t.left,h=t.top,p=t.right,u=t.top):(o=t.left,i=t.bottom,n=t.right,a=t.bottom,c=e.left,h=e.top,p=e.right,u=e.top):e.left<t.left?(o=e.right,i=e.top,n=t.left,a=t.top,c=e.right,h=e.bottom,p=t.left,u=t.bottom):(o=t.right,i=t.top,n=e.left,a=e.top,c=t.right,h=t.bottom,p=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,r,o){let i;void 0===o&&(o={});let{ancestorScroll:n=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:p=!1}=o,u=nm(e),g=n||a?[...u?np(u):[],...np(t)]:[];g.forEach(e=>{n&&e.addEventListener("scroll",r,{passive:!0}),a&&e.addEventListener("resize",r)});let m=u&&h?function(e,t){let r,o=null,i=i2(e);function n(){var e;clearTimeout(r),null==(e=o)||e.disconnect(),o=null}return!function a(c,h){void 0===c&&(c=!1),void 0===h&&(h=1),n();let p=e.getBoundingClientRect(),{left:u,top:g,width:m,height:b}=p;if(c||t(),!m||!b)return;let f={rootMargin:-iA(g)+"px "+-iA(i.clientWidth-(u+m))+"px "+-iA(i.clientHeight-(g+b))+"px "+-iA(u)+"px",threshold:iP(0,iS(1,h))||1},v=!0;function w(t){let o=t[0].intersectionRatio;if(o!==h){if(!v)return a();o?a(!1,o):r=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==o||nA(p,e.getBoundingClientRect())||a(),v=!1}try{o=new IntersectionObserver(w,{...f,root:i.ownerDocument})}catch{o=new IntersectionObserver(w,f)}o.observe(e)}(!0),n}(u,r):null,b=-1,f=null;c&&(f=new ResizeObserver(e=>{let[o]=e;o&&o.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var e;null==(e=f)||e.observe(t)})),r()}),u&&!p&&f.observe(u),f.observe(t));let v=p?nw(e):null;return p&&function t(){let o=nw(e);v&&!nA(v,o)&&r(),v=o,i=requestAnimationFrame(t)}(),r(),()=>{var e;g.forEach(e=>{n&&e.removeEventListener("scroll",r),a&&e.removeEventListener("resize",r)}),null==m||m(),null==(e=f)||e.disconnect(),f=null,p&&cancelAnimationFrame(i)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,r,o,i,n;let a,c,h,p;if(!this.active||!this.anchorEl)return;let u=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var r,o;let{x:i,y:n,placement:a,middlewareData:c}=t,h=await iX(t,e);return a===(null==(r=c.offset)?void 0:r.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:i+h.x,y:n+h.y,data:{...h,placement:a}}}}];this.sync?u.push(nL({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,r="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=r?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&u.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var r,o,i,n,a,c,h,p;let u,g,m,{placement:b,middlewareData:f,rects:v,initialPlacement:w,platform:_,elements:x}=e,{mainAxis:$=!0,crossAxis:C=!0,fallbackPlacements:S,fallbackStrategy:P="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:A=!0,...B}=iI(t,e);if(null!=(r=f.arrow)&&r.alignmentOffset)return{};let E=iE(b),T=iN(w),D=iE(w)===w,M=await (null==_.isRTL?void 0:_.isRTL(x.floating)),N=S||(D||!A?[iH(w)]:(u=iH(w),[ij(w),u,ij(u)])),j="none"!==O;!S&&j&&N.push(...(g=iT(w),m=function(e,t,r){switch(e){case"top":case"bottom":if(r)return t?iU:iF;return t?iF:iU;case"left":case"right":return t?iq:iW;default:return[]}}(iE(w),"start"===O,M),g&&(m=m.map(e=>e+"-"+g),A&&(m=m.concat(m.map(ij)))),m));let F=[w,...N],U=await iY(e,B),q=[],W=(null==(o=f.flip)?void 0:o.overflows)||[];if($&&q.push(U[E]),C){let e,t,r,o,i=(c=b,h=v,void 0===(p=M)&&(p=!1),e=iT(c),r=iz(t=iD(iN(c))),o="x"===t?e===(p?"end":"start")?"right":"left":"start"===e?"bottom":"top",h.reference[r]>h.floating[r]&&(o=iH(o)),[o,iH(o)]);q.push(U[i[0]],U[i[1]])}if(W=[...W,{placement:b,overflows:q}],!q.every(e=>e<=0)){let e=((null==(i=f.flip)?void 0:i.index)||0)+1,t=F[e];if(t&&("alignment"!==C||T===iN(t)||W.every(e=>iN(e.placement)!==T||e.overflows[0]>0)))return{data:{index:e,overflows:W},reset:{placement:t}};let r=null==(n=W.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:n.placement;if(!r)switch(P){case"bestFit":{let e=null==(a=W.filter(e=>{if(j){let t=iN(e.placement);return t===T||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(r=e);break}case"initialPlacement":r=w}if(b!==r)return{reset:{placement:r}}}return{}}}),this.shift&&u.push({name:"shift",options:r={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:i}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:c={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...h}=iI(r,e),p={x:t,y:o},u=await iY(e,h),g=iN(iE(i)),m=iD(g),b=p[m],f=p[g];if(n){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",r=b+u[e],o=b-u[t];b=iP(r,iS(b,o))}if(a){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",r=f+u[e],o=f-u[t];f=iP(r,iS(f,o))}let v=c.fn({...e,[m]:b,[g]:f});return{...v,data:{x:v.x-t,y:v.y-o,enabled:{[m]:n,[g]:a}}}}}),this.autoSize?u.push(nL({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&u.push({name:"arrow",options:a={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:r,placement:o,rects:i,platform:n,elements:c,middlewareData:h}=e,{element:p,padding:u=0}=iI(a,e)||{};if(null==p)return{};let g=iG(u),m={x:t,y:r},b=iD(iN(o)),f=iz(b),v=await n.getDimensions(p),w="y"===b,_=w?"clientHeight":"clientWidth",x=i.reference[f]+i.reference[b]-m[b]-i.floating[f],$=m[b]-i.reference[b],C=await (null==n.getOffsetParent?void 0:n.getOffsetParent(p)),S=C?C[_]:0;S&&await (null==n.isElement?void 0:n.isElement(C))||(S=c.floating[_]||i.floating[f]);let P=S/2-v[f]/2-1,O=iS(g[w?"top":"left"],P),A=iS(g[w?"bottom":"right"],P),B=S-v[f]-A,E=S/2-v[f]/2+(x/2-$/2),T=iP(O,iS(E,B)),D=!h.arrow&&null!=iT(o)&&E!==T&&i.reference[f]/2-(E<O?O:A)-v[f]/2<0,M=D?E<O?E-O:E-B:0;return{[b]:m[b]+M,data:{[b]:T,centerOffset:E-T-M,...D&&{alignmentOffset:M}},reset:D}}});let g="absolute"===this.strategy?e=>nO.getOffsetParent(e,nB):nO.getOffsetParent;(o=this.anchorEl,i=this.popup,n={placement:this.placement,middleware:u,strategy:this.strategy,platform:o5(ir({},nO),o6({getOffsetParent:g}))},c=new Map,p={...(h={platform:nO,...n}).platform,_c:c},iK(o,i,{...h,platform:p})).then(({x:e,y:t,middlewareData:r,placement:o})=>{let i="rtl"===this.localize.dir(),n={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=r.arrow.x,t=r.arrow.y,o="",a="",c="",h="";if("start"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=i?r:"",h=i?"":r}else if("end"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=i?"":r,h=i?r:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:c,left:h,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ek`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${nR({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${nR({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ek`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function nT(e,t){return new Promise(r=>{e.addEventListener(t,function o(i){i.target===e&&(e.removeEventListener(t,o),r())})})}function nD(e,t,r){return new Promise(o=>{if((null==r?void 0:r.duration)===1/0)throw Error("Promise-based animations must be finite.");let i=e.animate(t,o5(ir({},r),o6({duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:r.duration})));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function nz(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function nM(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function nN(e,t){let r=ir({waitUntilFirstUpdate:!1},t);return(t,o)=>{let{update:i}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach(t=>{if(e.has(t)){let i=e.get(t),n=this[t];i!==n&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](i,n)}}),i.call(this,e)}}}nE.styles=[i$,iu],io([eN(".popup")],nE.prototype,"popup",2),io([eN(".popup__arrow")],nE.prototype,"arrowEl",2),io([eD()],nE.prototype,"anchor",2),io([eD({type:Boolean,reflect:!0})],nE.prototype,"active",2),io([eD({reflect:!0})],nE.prototype,"placement",2),io([eD({reflect:!0})],nE.prototype,"strategy",2),io([eD({type:Number})],nE.prototype,"distance",2),io([eD({type:Number})],nE.prototype,"skidding",2),io([eD({type:Boolean})],nE.prototype,"arrow",2),io([eD({attribute:"arrow-placement"})],nE.prototype,"arrowPlacement",2),io([eD({attribute:"arrow-padding",type:Number})],nE.prototype,"arrowPadding",2),io([eD({type:Boolean})],nE.prototype,"flip",2),io([eD({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],nE.prototype,"flipFallbackPlacements",2),io([eD({attribute:"flip-fallback-strategy"})],nE.prototype,"flipFallbackStrategy",2),io([eD({type:Object})],nE.prototype,"flipBoundary",2),io([eD({attribute:"flip-padding",type:Number})],nE.prototype,"flipPadding",2),io([eD({type:Boolean})],nE.prototype,"shift",2),io([eD({type:Object})],nE.prototype,"shiftBoundary",2),io([eD({attribute:"shift-padding",type:Number})],nE.prototype,"shiftPadding",2),io([eD({attribute:"auto-size"})],nE.prototype,"autoSize",2),io([eD()],nE.prototype,"sync",2),io([eD({type:Object})],nE.prototype,"autoSizeBoundary",2),io([eD({attribute:"auto-size-padding",type:Number})],nE.prototype,"autoSizePadding",2),io([eD({attribute:"hover-bridge",type:Boolean})],nE.prototype,"hoverBridge",2);var nj=class extends iC{constructor(){super(),this.localize=new ix(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=nz(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=nz(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await nM(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:r}=id(this,"tooltip.show",{dir:this.localize.dir()});await nD(this.popup.popup,t,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await nM(this.body);let{keyframes:e,options:r}=id(this,"tooltip.hide",{dir:this.localize.dir()});await nD(this.popup.popup,e,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,nT(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,nT(this,"sl-after-hide")}render(){return ek`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${nR({tooltip:!0,"tooltip--open":this.open})}
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
    `}};nj.styles=[i$,ip],nj.dependencies={"sl-popup":nE},io([eN("slot:not([name])")],nj.prototype,"defaultSlot",2),io([eN(".tooltip__body")],nj.prototype,"body",2),io([eN("sl-popup")],nj.prototype,"popup",2),io([eD()],nj.prototype,"content",2),io([eD()],nj.prototype,"placement",2),io([eD({type:Boolean,reflect:!0})],nj.prototype,"disabled",2),io([eD({type:Number})],nj.prototype,"distance",2),io([eD({type:Boolean,reflect:!0})],nj.prototype,"open",2),io([eD({type:Number})],nj.prototype,"skidding",2),io([eD()],nj.prototype,"trigger",2),io([eD({type:Boolean})],nj.prototype,"hoist",2),io([nN("open",{waitUntilFirstUpdate:!0})],nj.prototype,"handleOpenChange",1),io([nN(["content","distance","hoist","placement","skidding"])],nj.prototype,"handleOptionsChange",1),io([nN("disabled")],nj.prototype,"handleDisabledChange",1),ic("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),ic("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),nj.define("sl-tooltip");var nF=Object.defineProperty,nU=Object.getOwnPropertyDescriptor,nq=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?nU(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&nF(t,r,n),n};ic("tooltip.show",null),ic("tooltip.hide",null);let nW=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.suppressed=!1,this.onMouseDown=e=>{this.suppressed=!0,this.hide()},this.onMouseUp=e=>{this.suppressed=!1},this.onDragStart=e=>{this.suppressed=!0,this.hide()},this.onDragEnd=e=>{this.suppressed=!1}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("dragstart",this.onDragStart,{capture:!0}),window.addEventListener("dragend",this.onDragEnd,{capture:!0})}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),this.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("dragstart",this.onDragStart,{capture:!0}),window.removeEventListener("dragend",this.onDragEnd,{capture:!0}),super.disconnectedCallback?.()}async hide(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.hide()}async show(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.show()}render(){var e;return ek`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled||this.suppressed}
			.distance=${this.distance??eC}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?ih(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};nW.styles=D`
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
	`,nq([eD()],nW.prototype,"content",2),nq([eD({reflect:!0})],nW.prototype,"placement",2),nq([eD({type:Boolean})],nW.prototype,"disabled",2),nq([eD({type:Number})],nW.prototype,"distance",2),nq([eD({type:Boolean,attribute:"hide-on-click"})],nW.prototype,"hideOnClick",2),nq([eD({type:Boolean})],nW.prototype,"hoist",2),nq([ez()],nW.prototype,"suppressed",2),nW=nq([eE("gl-tooltip")],nW);var nH=Object.defineProperty,nG=Object.getOwnPropertyDescriptor,nV=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?nG(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&nH(t,r,n),n};let nZ=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ek`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??eC}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ek`<gl-tooltip placement=${this.tooltipPlacement??eC}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ek`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??eC}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ek`<button
			class="control"
			role=${this.role??eC}
			aria-checked=${this.ariaChecked??eC}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};nZ.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},nZ.styles=[oI,D`
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
				${oR}
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
		`],nV([eN(".control")],nZ.prototype,"control",2),nV([eD({reflect:!0})],nZ.prototype,"appearance",2),nV([eD({reflect:!0})],nZ.prototype,"variant",2),nV([eD({type:Boolean,reflect:!0})],nZ.prototype,"disabled",2),nV([eD({reflect:!0})],nZ.prototype,"density",2),nV([eD({type:Boolean,reflect:!0})],nZ.prototype,"full",2),nV([eD()],nZ.prototype,"href",2),nV([eD()],nZ.prototype,"tooltip",2),nV([eD()],nZ.prototype,"tooltipPlacement",2),nV([eD({type:Boolean,reflect:!0})],nZ.prototype,"truncate",2),nZ=nV([eE("gl-button")],nZ);var nK=Object.defineProperty,nY=Object.getOwnPropertyDescriptor,nJ=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?nY(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&nK(t,r,n),n};let nX=class extends lit_element_i{constructor(){super(...arguments),this.editor=!1,this.layout="shift",this.grouping="gap"}render(){return ek`<div class="group"><slot></slot></div>`}};nX.styles=[oI,D`
			:host {
				--button-group-gap: 0.4rem;
				--button-max-width: 30rem;
				--button-group-max-width: 30rem;
				display: block;
				max-width: var(--button-max-width, 30rem);
				margin-inline: auto;
				text-align: left;
				transition: max-width 0.2s ease-out;
			}

			:host([grouping='gap-wide']) {
				--button-group-gap: 1rem;
			}

			:host([grouping='split']) {
				--button-group-gap: 0.1rem;
			}

			@media (min-width: 640px) {
				:host([layout='shift']) {
					--button-max-width: 100%;
				}
			}

			:host([layout='full']) {
				--button-max-width: 100%;
				--button-group-max-width: 100%;
			}

			.group {
				display: inline-flex;
				gap: var(--button-group-gap, 0.4rem);
				width: 100%;
				max-width: var(--button-group-max-width, 30rem);
			}

			:host([grouping='split']) ::slotted(*:not(:first-child)) {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
			}
			:host([grouping='split']) ::slotted(*:not(:last-child)) {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
		`],nJ([eD({type:Boolean})],nX.prototype,"editor",2),nJ([eD({reflect:!0})],nX.prototype,"layout",2),nJ([eD({reflect:!0})],nX.prototype,"grouping",2),nX=nJ([eE("button-container")],nX);let nQ=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f",bracket:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52","send-to-remote-agent":"\\ec53","comment-discussion-sparkle":"\\ec54","chat-sparkle-warning":"\\ec55","chat-sparkle-error":"\\ec56",collection:"\\ec57","new-collection":"\\ec58",thinking:"\\ec59",build:"\\ec5a","comment-discussion-quote":"\\ec5b",cursor:"\\ec5c",eraser:"\\ec5d","file-text":"\\ec5e",quotes:"\\ec60",rename:"\\ec61","run-with-deps":"\\ec62","debug-connected":"\\ec63",strikethrough:"\\ec64","open-in-product":"\\ec65","index-zero":"\\ec66",agent:"\\ec67","edit-code":"\\ec68","repo-selected":"\\ec69",skip:"\\ec6a","merge-into":"\\ec6b","git-branch-changes":"\\ec6c","git-branch-staged-changes":"\\ec6d","git-branch-conflicts":"\\ec6e","git-branch":"\\ec6f","git-branch-create":"\\ec6f","git-branch-delete":"\\ec6f","search-large":"\\ec70","terminal-git-bash":"\\ec71","window-active":"\\ec72",forward:"\\ec73",download:"\\ec74",clockface:"\\ec75",unarchive:"\\ec76","session-in-progress":"\\ec77","collection-small":"\\ec78","vm-small":"\\ec79","cloud-small":"\\ec7a"}),n0=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147"});var n1=Object.defineProperty,n2=Object.getOwnPropertyDescriptor,n3=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?n2(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&n1(t,r,n),n};function n5(e,t=""){return T(Object.entries(e).map(([e,r])=>(function(e,t,r=""){return`:host([icon='${r}${e}'])::before { content: '${t}'; }`})(e,r,t)).join(""))}let n4=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};n4.styles=D`
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

		${n5(nQ)}
		${n5(n0,"gl-")}

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
	`,n3([eD({reflect:!0})],n4.prototype,"icon",2),n3([eD({reflect:!0})],n4.prototype,"modifier",2),n3([eD({type:Number})],n4.prototype,"size",2),n3([eD({reflect:!0})],n4.prototype,"flip",2),n3([eD({reflect:!0})],n4.prototype,"rotate",2),n4=n3([eE("code-icon")],n4),nE.define("sl-popup");var n6=Object.defineProperty,n8=Object.getOwnPropertyDescriptor,n7=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?n8(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&n6(t,r,n),n};let n9=class extends GlElement{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.suppressed=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1,this.open&&"hover"===this._triggeredBy&&(this.suppressed=!0,this.hide())},this.handleMouseUp=()=>{this.suppressed=!1},this.handleDragStart=()=>{this.suppressed=!0,this.hide()},this.handleDragEnd=()=>{this.suppressed=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleDocumentMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=oh(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let r=oh(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),r)}}}static closeOthers(e){for(let t of n9.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}connectedCallback(){super.connectedCallback?.(),this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("dragstart",this.handleDragStart,{capture:!0}),window.addEventListener("dragend",this.handleDragEnd,{capture:!0})}disconnectedCallback(){this.removeEventListener("blur",this.handleTriggerBlur,!0),this.removeEventListener("focus",this.handleTriggerFocus,!0),this.removeEventListener("click",this.handleTriggerClick),this.removeEventListener("mousedown",this.handleTriggerMouseDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut),this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("dragstart",this.handleDragStart,{capture:!0}),window.removeEventListener("dragend",this.handleDragEnd,{capture:!0}),n9.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return ek`<sl-popup
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
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open&&!this.suppressed)return n9.closeOthers(this),this.open=!0,n9.openPopovers.add(this),op(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,n9.openPopovers.delete(this),op(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleDocumentMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};n9.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},n9.openPopovers=new Set,n9.styles=[oT,D`
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
		`],n7([eN("#popover")],n9.prototype,"body",2),n7([eN("sl-popup")],n9.prototype,"popup",2),n7([eD({reflect:!0})],n9.prototype,"placement",2),n7([eD({type:Object})],n9.prototype,"anchor",2),n7([eD({reflect:!0,type:Boolean})],n9.prototype,"disabled",2),n7([eD({type:Number})],n9.prototype,"distance",2),n7([eD({reflect:!0,type:Boolean})],n9.prototype,"open",2),n7([eD({reflect:!0,type:Boolean})],n9.prototype,"arrow",2),n7([eD({type:Number})],n9.prototype,"skidding",2),n7([eD()],n9.prototype,"trigger",2),n7([eD({type:Boolean})],n9.prototype,"hoist",2),n7([eD({reflect:!0})],n9.prototype,"appearance",2),n7([ez()],n9.prototype,"suppressed",2),n7([re("open",{afterFirstUpdate:!0})],n9.prototype,"handleOpenChange",1),n7([re(["distance","hoist","placement","skidding"])],n9.prototype,"handleOptionsChange",1),n7([re("disabled")],n9.prototype,"handleDisabledChange",1),n9=n7([eE("gl-popover")],n9);var ae=Object.defineProperty,at=Object.getOwnPropertyDescriptor,ar=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?at(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ae(t,r,n),n};let ao=class extends lit_element_i{constructor(){super(...arguments),this._showUpgrade=!1}get showUpgrade(){return this._showUpgrade}set showUpgrade(e){this._showUpgrade=e}get accountAvatar(){return this.hasAccount&&this._state.avatar}get accountName(){return this.subscription?.account?.name??""}get accountEmail(){return this.subscription?.account?.email??""}get hasAccount(){return this.subscription?.account!=null}get isReactivatedTrial(){return this.subscriptionState===oq.Trial&&(this.subscription?.plan.effective.trialReactivationCount??0)>0}get planId(){return this._state.subscription?.plan.actual.id??"pro"}get effectivePlanId(){return this._state.subscription?.plan.effective.id??"pro"}get planName(){return function(e,t,r){switch(e){case oq.Community:case oq.Trial:return`${"student"===r?oZ("student"):oZ("pro")} Trial`;case oq.TrialExpired:case oq.TrialReactivationEligible:return oZ("community-with-account");case oq.VerificationRequired:return`${oZ(t??"pro")} (Unverified)`;default:return oZ(t??"pro")}}(this.subscriptionState,this.planId,this.effectivePlanId)}get planTier(){return oJ(this.subscription)?"student"===this.subscription.plan.effective.id?"Student":"Pro Trial":oG(this.planId)}get subscription(){return this._state.subscription}get subscriptionState(){return this.subscription?.state}get trialDaysRemaining(){return null==this.subscription?0:oK(this.subscription,"days")??0}focus(){this._chip.focus()}render(){return ek`<gl-popover placement="bottom" trigger="hover focus click" hoist>
				<span id="chip" slot="anchor" class="chip" tabindex="0">
					${this.accountAvatar?ek`<img class="chip__media" src=${this.accountAvatar} />`:ek`<code-icon class="chip__media" icon="gl-gitlens" size="16"></code-icon>`}
					<span>${this.planTier}</span>
				</span>
				<div slot="content" class="content" tabindex="-1">
					<div class="header">
						<span class="header__title">${this.planName}</span>
						<span class="header__actions">
							${this.hasAccount?ek`<gl-button
											appearance="toolbar"
											href="${oQ("gitlens.plus.validate",{source:"account"})}"
											tooltip="Synchronize Status"
											aria-label="Synchronize Status"
											><code-icon icon="sync"></code-icon
										></gl-button>
										<gl-button
											appearance="toolbar"
											href="${oQ("gitlens.plus.manage",{source:"account"})}"
											tooltip="Manage Account"
											aria-label="Manage Account"
											><code-icon icon="gear"></code-icon
										></gl-button>
										<gl-button
											appearance="toolbar"
											href="${oQ("gitlens.plus.logout",{source:"account"})}"
											tooltip="Sign Out"
											aria-label="Sign Out"
											><code-icon icon="sign-out"></code-icon
										></gl-button>`:eC}
						</span>
					</div>
					${this.renderAccountInfo()} ${this.renderAccountState()}
				</div>
			</gl-popover>
			${this.renderUpgradeContent()}`}show(){this._popover.show(),this.focus()}renderAccountInfo(){let e=this._state.subscription?.activeOrganization?.name??"";return this.hasAccount&&e?ek`<div class="account-info">
			<span class="row">
				<span class="row__media"
					>${this._state.avatar?ek`<img src=${this._state.avatar} />`:ek`<code-icon icon="gl-gitlens" size="20"></code-icon>`}</span
				>
				<span class="details"
					><p class="details__title">${this.accountName}</p>
					<p class="details__subtitle">${this.accountEmail}</p></span
				>
			</span>
			<span class="row">
				<span class="row__media"><code-icon icon="organization" size="20"></code-icon></span>
				<span class="details"><p class="details__title">${e}</p></span>
				${eF(this._state.organizationsCount>1,()=>ek`<div class="details__button">
							<gl-button
								appearance="toolbar"
								href="${oQ("gitlens.gk.switchOrganization",{source:"account",detail:{organization:this._state.subscription?.activeOrganization?.id}})}"
								aria-label="Switch Active Organization"
								><span class="org__badge">+${this._state.organizationsCount-1}</span
								><code-icon icon="arrow-swap"></code-icon
								><span slot="tooltip"
									>Switch Active Organization
									<hr />
									You are in
									${rw("organization",this._state.organizationsCount-1,{infix:" other "})}</span
								></gl-button
							>
						</div>`)}
			</span>
			${eF(oX(this.subscription.state),()=>{var e;return ek`<span class="row">
						<span class="row__media"><code-icon icon="unlock" size="20"></code-icon></span>
						<span class="details"
							><p class="details__title">
								${oJ(this.subscription)?ek`${oG(this.effectivePlanId)} plan
											<span class="details__subtitle">(trial)</span>`:ek`${oG(this.planId)} plan`}
							</p></span
						>
						${oY(this.subscription)&&0>(e=this.planId,oV(e)-oV("advanced"))?ek`<div class="details__button">
									<gl-button
										appearance="secondary"
										href="${oQ("gitlens.plus.upgrade",{plan:"advanced",source:"account",detail:{location:"plan-section:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"advanced"}})}"
										aria-label="Upgrade to Advanced"
										><span class="upgrade-button">Upgrade</span>${this.renderPromo("advanced","icon","suffix")}
										<span slot="tooltip"
											>Upgrade to the Advanced plan for access to self-hosted integrations,
											advanced AI features @ 1M tokens/week, and more
											${this.renderPromo("advanced","info")}
										</span>
									</gl-button>
								</div>`:eC}
					</span>`})}
		</div>`:eC}renderAccountState(){switch(this.subscriptionState){case oq.Paid:return ek`<div class="account-status">
					${this.renderIncludesDevEx()}${this.renderReferFriend()}
				</div> `;case oq.VerificationRequired:return ek`<div class="account-status">
					<p>You must verify your email before you can access Pro features.</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${oQ("gitlens.plus.resendVerification",{source:"account"})}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							href="${oQ("gitlens.plus.validate",{source:"account"})}"
							><code-icon size="20" icon="refresh"></code-icon>
						</gl-button>
					</button-container>
				</div>`;case oq.Trial:{let e=this.trialDaysRemaining;return ek`<div class="account-status">
					${this.isReactivatedTrial?ek`<p>
								<code-icon icon="megaphone"></code-icon>
								See
								<a href="${ra.releaseNotes}">what's new</a>
								in GitLens.
							</p>`:eC}
					<p>
						You have
						<strong>${e<1?"<1 day":rw("day",e,{infix:" more "})} left</strong>
						in your ${"Student"===this.planTier?"Student":"Pro"} trial. Once your trial ends, you will
						only be able to use Pro features on publicly-hosted repos.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${oQ("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")} ${this.renderIncludesDevEx()} ${this.renderReferFriend()}
				</div>`}case oq.TrialExpired:return ek`<div class="account-status">
					<p>Thank you for trying <a href="${ra.communityVsPro}">GitLens Pro</a>.</p>
					<p>Continue leveraging Pro features and workflows for privately hosted repos by upgrading today.</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${oQ("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")} ${this.renderIncludesDevEx()} ${this.renderReferFriend()}
				</div>`;case oq.TrialReactivationEligible:return ek`<div class="account-status">
					<p>
						Reactivate your GitLens Pro trial and experience all the new Pro features — free for another
						${rw("day",14)}.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${oQ("gitlens.plus.reactivateProTrial",{source:"account"})}"
							tooltip="Reactivate your Pro trial for another ${rw("day",14)}"
							>Reactivate GitLens Pro Trial</gl-button
						>
					</button-container>
					${this.renderReferFriend()}
				</div>`;default:return ek`<div class="account-status">
					<p>
						Unlock advanced features and workflows for private repos, accelerate reviews, and streamline
						collaboration with
						<a href="${ra.communityVsPro}">GitLens Pro</a>.
					</p>
					<button-container layout="editor">
						<gl-button
							full
							href="${oQ("gitlens.plus.signUp",{source:"account"})}"
							>Try GitLens Pro</gl-button
						>
						<span class="button-suffix"
							>or
							<a
								href="${oQ("gitlens.plus.login",{source:"account"})}"
								>sign in</a
							></span
						>
					</button-container>
					<p>Get ${14} days of GitLens Pro for free — no credit card required.</p>
				</div>`}}renderIncludesDevEx(){return ek`<p>Includes access to <a href="${ra.platform}">GitKraken's DevEx platform</a></p>`}renderReferFriend(){return oY(this.subscription)?ek`<p>
			<a
				href="${oQ("gitlens.plus.referFriend",{source:"account"})}"
				>Refer a friend</a
			>
			&mdash; give 50% off and get up to $20
		</p>`:eC}renderUpgradeContent(){return oY(this.subscription)?(this.showUpgrade=!1,eC):(this.showUpgrade=!0,ek`<gl-popover placement="bottom" trigger="hover focus click" hoist>
			<span slot="anchor" class="chip chip--outlined" tabindex="0">
				<span>Upgrade</span>
			</span>
			<div slot="content" class="content" tabindex="-1">
				<div class="header">
					<span class="header__title">Advantages of GitLens Pro</span>
				</div>
				<div class="upgrade">
					<button-container layout="editor">
						<gl-button
							full
							href="${oQ("gitlens.plus.upgrade",{plan:"pro",source:"account",detail:{location:"upgrade-chip:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"pro"}})}"
							>Upgrade to Pro</gl-button
						>
					</button-container>
					${this.renderPromo("pro")}

					<ul>
						<li>Unlimited cloud integrations</li>
						<li>Smart AI features &mdash; 250K tokens/week</li>
						<li>
							Powerful tools &mdash; Commit Graph, Visual History, &amp; Git Worktrees for private repos
						</li>
						<li>Streamlined workflows &mdash; start work from issues, pull request reviews</li>
					</ul>

					<br />
					<button-container>
						<gl-button
							full
							href="${oQ("gitlens.plus.upgrade",{plan:"advanced",source:"account",detail:{location:"upgrade-chip:upgrade-button",organization:this._state.subscription?.activeOrganization?.id,plan:"advanced"}})}"
							>Upgrade to Advanced</gl-button
						>
					</button-container>
					${this.renderPromo("advanced")}

					<ul>
						<li>Self-hosted integrations</li>
						<li>Advanced AI features &mdash; 1M tokens/week</li>
					</ul>
				</div>
			</div>
		</gl-popover>`)}renderPromo(e,t="info",r){return ek`<gl-promo
			slot=${r??eC}
			.promoPromise=${this.promos.getApplicablePromo(e,"account")}
			.type=${t}
			.source="${{source:"account"}}"
		></gl-promo>`}};ao.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ao.styles=[oI,oE,oB,o0,o2,D`
			:host {
				display: inline-flex;
				align-items: center;
				gap: 0.8rem;
			}

			:host-context(.vscode-dark),
			:host-context(.vscode-high-contrast) {
				--gl-account-chip-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 10%);
				--gl-account-chip-media-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 25%);
				--gl-account-account-media-color: color-mix(in lab, var(--vscode-sideBar-background), #fff 20%);
			}

			:host-context(.vscode-light),
			:host-context(.vscode-high-contrast-light) {
				--gl-account-chip-color: color-mix(in lab, var(--vscode-sideBar-background), #000 7%);
				--gl-account-chip-media-color: color-mix(in lab, var(--vscode-sideBar-background), #000 18%);
				--gl-account-account-media-color: color-mix(in lab, var(--vscode-sideBar-background), #000 15%);
			}

			.chip {
				padding-right: 0.6rem;

				font-size: 1.1rem;
				font-weight: 400;
				text-transform: uppercase;
				line-height: 2rem;
				background-color: var(--gl-account-chip-color);
			}

			.chip--outlined {
				background-color: transparent;
				border: 1px solid var(--gl-account-chip-color);
			}

			.chip__media {
				flex: 0 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 0.2rem;
			}

			img.chip__media {
				width: 1.6rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
				background-color: var(--gl-account-chip-media-color);
			}

			.chip-group {
				display: inline-flex;
				flex-direction: row;
				gap: 0.8rem;
				cursor: pointer;
			}

			.account-info {
				display: flex;
				flex-direction: column;
				gap: 0.2rem;
			}

			.row {
				position: relative;
				display: flex;
				flex-direction: row;
				gap: 0 0.6rem;
				align-items: center;
			}

			.row:last-of-type {
				margin-bottom: 0.6rem;
			}

			.row__media {
				flex: 0 0 auto;
				width: 3.4rem;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.row__media code-icon {
				color: var(--color-foreground--65);
			}

			.row__media img {
				width: 2rem;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
				background-color: var(--gl-account-account-media-color);
			}

			.details {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.details__title {
				font-size: 1.3rem;
				font-weight: 600;
				margin: 0;
			}

			.details__subtitle {
				font-size: 1.1rem;
				font-weight: 400;
				margin: 0;
				color: var(--color-foreground--65);
			}

			.details__button {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			.org__badge {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 2.4rem;
				height: 2.4rem;
				line-height: 2.4rem;
				font-size: 1rem;
				font-weight: 600;
				color: var(--color-foreground--65);
				background-color: var(--vscode-toolbar-hoverBackground);
				border-radius: 50%;
				margin-right: 0.6rem;
			}

			.account-status > :first-child {
				margin-block-start: 0;
			}
			.account-status > :last-child {
				margin-block-end: 0;
			}

			button-container {
				margin-bottom: 1.3rem;
			}

			button-container .button-suffix {
				display: inline-flex;
				align-items: center;
				white-space: nowrap;
				gap: 0.2em;
				margin-left: 0.4rem;
			}

			.upgrade > * {
				margin-block: 0.8rem 0;
			}

			.upgrade ul {
				padding-inline-start: 2rem;
			}

			.upgrade li {
				text-wrap: pretty;
			}

			.upgrade gl-promo::part(text) {
				margin-block-start: 0;
				/* border-radius: 0.3rem;
				padding: 0.2rem 0.4rem;
				background-color: var(--gl-account-chip-color); */
			}

			.upgrade gl-promo:not([has-promo]) {
				display: none;
			}

			.upgrade-button {
				text-transform: uppercase;
				font-size: 1rem;
			}
		`],ar([eD({type:Boolean,reflect:!0,attribute:"show-upgrade"})],ao.prototype,"showUpgrade",1),ar([eN("#chip")],ao.prototype,"_chip",2),ar([eN("gl-popover")],ao.prototype,"_popover",2),ar([P({context:"state",subscribe:!0}),ez()],ao.prototype,"_state",2),ar([P({context:"promos"})],ao.prototype,"promos",2),ao=ar([eE("gl-account-chip")],ao);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let ai=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!ai(e))??e$}update(e,t){let r=this._$Cbt,o=r.length;this._$Cbt=t;let i=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!ai(a))return this._$Cwt=e,a;e<o&&a===r[e]||(this._$Cwt=0x3fffffff,o=0,Promise.resolve(a).then(async e=>{for(;n.get();)await n.get();let t=i.deref();if(void 0!==t){let r=t._$Cbt.indexOf(a);r>-1&&r<t._$Cwt&&(t._$Cwt=r,t.setValue(e))}}))}return e$}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let an=tD(until_c);var aa=Object.defineProperty,as=Object.getOwnPropertyDescriptor,al=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?as(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&aa(t,r,n),n};let ac=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ek`${an(this.promoPromise?.then(e=>this.renderPromo(e)),eC)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return ek`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,ek`<p class="promo" part="text">${ih(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ek`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??eC}"
						>${ih(t.link.html)}</a
					>`}return this.hasPromo=!1,eC}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),oQ(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};ac.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ac.styles=[D`
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
				${oL}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],al([eN('a,button,[tabindex="0"]')],ac.prototype,"_focusable",2),al([eD({type:Object})],ac.prototype,"promoPromise",2),al([eD({type:Object})],ac.prototype,"source",2),al([eD({reflect:!0,type:String})],ac.prototype,"type",2),al([eD({type:Boolean,reflect:!0,attribute:"has-promo"})],ac.prototype,"hasPromo",1),ac=al([eE("gl-promo")],ac);var ad=Object.defineProperty,ah=Object.getOwnPropertyDescriptor,ap=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?ah(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ad(t,r,n),n};let au=class extends lit_element_i{constructor(){super(...arguments),this.cloud=!1,this.placement="bottom",this.preview=!1}get daysRemaining(){return null==this.subscription?0:oK(this.subscription,"days")??0}get state(){return this.subscription?.state}render(){return ek`
			<gl-popover placement=${this.placement} hoist>
				<span slot="anchor" class="badge" tabindex="0">${this.renderBadge()}</span>
				<div slot="content" class="badge-popup" tabindex="-1">
					${this.renderPopoverHeader()}${this.renderPopoverContent()}
				</div>
			</gl-popover>
		`}renderBadge(){let e=this.preview?"Preview":"Pro";if(null!=this.subscription){if(this.state===oq.VerificationRequired)return ek`${e} <code-icon class="badge-icon" icon="warning" size="10"></code-icon>`;else if(oY(this.subscription)||this.cloud&&null!=this.subscription.account)return ek`${e} <code-icon class="badge-icon" icon="check" size="10"></code-icon>`;else if(oJ(this.subscription))return ek`${e} <code-icon class="badge-icon" icon="clock" size="10"></code-icon>`}return e}renderPopoverHeader(){let e=ek`<span class="popup-title">${this.preview?"Preview feature":"Pro feature"}</span>`;return this.state===oq.Paid?ek`<div class="popup-header">${e}</div>`:this.cloud?this.preview?ek`<div class="popup-header">
					${e}<span class="popup-subtitle"
						>Unlock this feature with an account and may require GitLens Pro in the future</span
					>
				</div>`:ek`<div class="popup-header">
				${e}<span class="popup-subtitle"> Unlock this feature with GitLens Pro</span>
			</div>`:this.preview?ek`<div class="popup-header">
				${e}<span class="popup-subtitle">May require GitLens Pro in the future</span>
			</div>`:ek`<div class="popup-header">
			${e}<span class="popup-subtitle"> Unlock this feature for privately hosted repos with GitLens Pro</span>
		</div>`}renderPopoverContent(){let e;if(null==this.subscription)return eC;switch(this.state){case oq.Paid:e=ek`<p>
					Your
					<gl-tooltip hoist content="Show Account view">
						<a href="${oQ("gitlens.showAccountView")}"
							>${oZ(this.subscription?.plan.actual.id??"pro")}</a
						>
					</gl-tooltip>
					plan provides access to all Pro features.
				</p>`;break;case oq.VerificationRequired:e=ek`<p>You must verify your email before you can access Pro features.</p>
					<div class="actions">
						<gl-button
							density="tight"
							href="${oQ("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							appearance="secondary"
							density="tight"
							href="${oQ("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</div>`;break;case oq.Trial:{let t=this.daysRemaining;e=ek`<p>
						You have
						<strong>${t<1?"<1 day":rw("day",t,{infix:" more "})} left</strong>
						in your Pro trial. Once your trial ends, you will only be able to use Pro features on
						publicly-hosted repos.
					</p>
					${this.renderUpgradeActions()}`;break}case oq.TrialExpired:e=ek`<p>
						Your Pro trial has ended. You can now only use Pro features on publicly-hosted repos.
					</p>
					${this.renderUpgradeActions(ek`<p>Please upgrade for full access to all GitLens Pro features:</p>`)}`;break;case oq.TrialReactivationEligible:e=ek`<p>
						Reactivate your Pro trial and experience all the new Pro features — free for another
						${rw("day",14)}!
					</p>
					<div class="actions center">
						<gl-button
							density="tight"
							href="${oQ("gitlens.plus.reactivateProTrial",this.source)}"
							tooltip="Reactivate your Pro trial for another ${rw("day",14)}"
							>Reactivate Pro Trial</gl-button
						>
					</div>`;break;default:e=ek`<p>
						You only have access to
						<gl-tooltip hoist content="Pro features that do not require an account"
							><span class="hint">local</span></gl-tooltip
						>
						Pro features on publicly-hosted repos.
					</p>
					${this.renderStartTrialActions()}`}return ek`<div class="popup-content">${e}</div>`}renderStartTrialActions(){return ek`<div class="actions">
			<p>For access to all Pro features:</p>
			<gl-button density="tight" href="${oQ("gitlens.plus.signUp",this.source)}"
				>Start ${14}-day Pro Trial</gl-button
			>
			&nbsp;or
			<a href="${oQ("gitlens.plus.login",this.source)}" title="Sign In">sign in</a>
		</div>`}renderUpgradeActions(e){return ek`<div class="actions">
			${e??eC}
			<gl-button
				density="tight"
				href="${oQ("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-badge"}})}"
				>Upgrade to Pro</gl-button
			>
			${this.renderPromo()}
		</div>`}renderPromo(){return ek`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"badge")}
			.source=${this.source}
		></gl-promo>`}};au.styles=[oI,oE,D`
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
				${T(oL)}
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
		`],ap([eD({type:Boolean})],au.prototype,"cloud",2),ap([eD({reflect:!0})],au.prototype,"placement",2),ap([eD({type:Boolean})],au.prototype,"preview",2),ap([P({context:"promos"})],au.prototype,"promos",2),ap([eD({type:Object})],au.prototype,"source",2),ap([eD({attribute:!1})],au.prototype,"subscription",2),au=ap([eE("gl-feature-badge")],au);var ag=Object.defineProperty,am=Object.getOwnPropertyDescriptor,ab=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?am(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ag(t,r,n),n};let af=class extends lit_element_i{get hasAccount(){return this._state.subscription?.account!=null}get isPaidAccount(){return this._state.subscription?.state===oq.Paid}get isProAccount(){return oX(this._state.subscription?.state)}get hasConnectedIntegrations(){return this.hasAccount&&this.integrations.some(e=>e.connected)}get ai(){return this._state.ai}get aiSettingEnabled(){return this._state.aiEnabled}get aiOrgEnabled(){return this._state.orgSettings?.ai??!0}get aiEnabled(){return this.aiSettingEnabled&&this.aiOrgEnabled}get integrations(){return this._state.integrations}focus(){this._chip.focus()}render(){let e=this.hasConnectedIntegrations,t=function(e){let t=new Map;for(let r of e){let e=t.get(r.icon);e&&(!r.connected||e.connected)||t.set(r.icon,r)}return e=>t.get(e.icon)===e}(this.integrations);return ek`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip" tabindex="0"
				>${!e?ek`<span class="chip__label">Connect</span>`:""}${this.integrations.filter(t).map(e=>this.renderIntegrationStatus(e))}${this.renderAIStatus()}</span
			>
			<div slot="content" class="content">
				<div class="header">
					<span class="header__title">Integrations</span>
					<span class="header__actions"></span>
						<gl-button
							appearance="toolbar"
							href="${oQ("gitlens.plus.validate",{source:"home",detail:"integrations"})}"
							tooltip="Synchronize Status"
							aria-label="Synchronize Status"
							><code-icon icon="sync"></code-icon
						></gl-button>
						<gl-button
							appearance="toolbar"
							href="${oQ("gitlens.plus.cloudIntegrations.manage",{source:{source:"home"}})}"
							tooltip="Manage Integrations"
							aria-label="Manage Integrations"
							><code-icon icon="gear"></code-icon></gl-button
					></span>
				</div>
				<div class="integrations">${!e?ek`<p>
									Connect hosting services like <strong>GitHub</strong> and issue trackers like
									<strong>Jira</strong> to track progress and take action on PRs and issues related to
									your branches.
								</p>
								<button-container>
									<gl-button
										full
										href="${oQ("gitlens.plus.cloudIntegrations.connect",{integrationIds:this.integrations.map(e=>e.id),source:{source:"home",detail:"integrations"}})}"
										>Connect Integrations</gl-button
									>
								</button-container>`:this.integrations.map(e=>this.renderIntegrationRow(e))}${this.renderAIRow()}</div>
			</div>
		</gl-popover>`}renderIntegrationStatus(e){return e.requiresPro&&!this.isProAccount?ek`<span
				class="integration status--${e.connected?"connected":"disconnected"} is-locked"
				slot="anchor"
				><code-icon icon="${e.icon}"></code-icon
			></span>`:ek`<span
			class="integration status--${e.connected?"connected":"disconnected"}"
			slot="anchor"
			><code-icon icon="${e.icon}"></code-icon
		></span>`}renderIntegrationRow(e){let t=e.requiresPro&&!this.isProAccount,r=e.requiresPro&&!this.isPaidAccount;return ek`<div
			class="integration-row status--${e.connected?"connected":"disconnected"}${t?" is-locked":""}"
		>
			<span class="integration__icon"><code-icon icon="${e.icon}"></code-icon></span>
			<span class="integration__content">
				<span class="integration__title">
					<span>${e.name}</span>
					${r?ek` <gl-feature-badge
								placement="right"
								.source=${{source:"home",detail:"integrations"}}
								cloud
							></gl-feature-badge>`:eC}
				</span>
				<span class="integration__details">${function(e){let t=e.supports.map(e=>av.get(e));if(0===t.length)return"";if(1===t.length)return`Supports ${t[0]}`;let r=t.pop();return`Supports ${t.join(", ")}, and ${r}`}(e)}</span>
			</span>
			<span class="integration__actions">
				${t?ek`<gl-button
							appearance="toolbar"
							href="${oQ("gitlens.plus.upgrade",{plan:"pro",source:"home",detail:"integrations"})}"
							tooltip="Unlock ${e.name} features with GitLens Pro"
							aria-label="Unlock ${e.name} features with GitLens Pro"
							><code-icon class="status-indicator" icon="lock"></code-icon
						></gl-button>`:e.connected?ek`<gl-tooltip
								class="status-indicator status--connected"
								placement="bottom"
								content="Connected"
								><code-icon class="status-indicator" icon="check"></code-icon
							></gl-tooltip>`:ek`<gl-button
								appearance="toolbar"
								href="${oQ("gitlens.plus.cloudIntegrations.connect",{integrationIds:[e.id],source:{source:"home",detail:"integrations"}})}"
								tooltip="Connect ${e.name}"
								aria-label="Connect ${e.name}"
								><code-icon icon="plug"></code-icon
							></gl-button>`}
			</span>
		</div>`}renderAIStatus(){return ek`<span
			class="integration status--${this.aiEnabled&&this.ai?.model!=null?"connected":"disconnected"}"
			slot="anchor"
		>
			<code-icon icon="${this.aiEnabled&&this.ai?.model!=null?"sparkle-filled":"sparkle"}"></code-icon>
		</span>`}renderAIRow(){let{model:e}=this.ai,t=this.aiEnabled&&null!=e,r=!this.aiEnabled;return ek`<div
			class="integration-row integration-row--ai status--${t?"connected":"disconnected"}${r?" is-locked":""}"
		>
			<span class="integration__icon"><code-icon icon="${t?"sparkle-filled":"sparkle"}"></code-icon></span>
			${this.aiEnabled?ek`<span class="integration__content">
							${e?.provider.name?ek`<span class="integration__title">
										<span>${e.provider.name}</span>
										${eC}
									</span>`:ek`<span class="integration_details">Select AI model to enable AI features</span>`}
							${e?.name?ek`<span class="integration__details">${e.name}</span>`:eC}
						</span>
						<span class="integration__actions">
							<gl-button
								appearance="toolbar"
								href="${oQ("gitlens.ai.switchProvider",{source:"home",detail:"integrations"})}"
								tooltip="Switch AI Provider/Model"
								aria-label="Switch AI Provider/Model"
								><code-icon icon="arrow-swap"></code-icon
							></gl-button>
						</span>`:ek`<span class="integration__content">
							<span class="integration_details"
								>GitLens AI features have been
								disabled${!this.aiSettingEnabled?" via settings":" by your GitKraken admin"}</span
							>
						</span>
						${!this.aiSettingEnabled?ek` <span class="integration__actions">
									<gl-button
										appearance="toolbar"
										href="${oQ("gitlens.ai.enable",{source:"home",detail:"integrations"})}"
										tooltip="Re-enable AI Features"
										aria-label="Re-enable AI Features"
										><code-icon icon="unlock"></code-icon
									></gl-button>
								</span>`:eC}`}
		</div>`}};af.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},af.styles=[oI,oE,o0,D`
			.chip {
				gap: 0.6rem;
				padding: 0.2rem 0.4rem 0.4rem 0.4rem;
				align-items: baseline;
			}

			.chip__label {
				font-size: 1.1rem;
				font-weight: 400;
				text-transform: uppercase;
				color: var(--color-foreground--75);
				margin-right: 0.4rem;
			}

			.integration {
				white-space: nowrap;
			}

			.content {
				gap: 0.6rem;
			}

			:host-context(.vscode-dark),
			:host-context(.vscode-high-contrast) {
				--status-color--connected: #00dd00;
			}

			:host-context(.vscode-light),
			:host-context(.vscode-high-contrast-light) {
				--status-color--connected: #00aa00;
			}

			.status--disconnected.integration {
				color: var(--color-foreground--25);
			}

			.status--connected:not(.is-locked) .status-indicator {
				color: var(--status-color--connected);
			}

			gl-tooltip.status-indicator {
				margin-right: 0.4rem;
			}

			.integrations {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				width: 100%;
			}

			.integration-row {
				display: flex;
				gap: 1rem;
				align-items: center;
			}

			.integration-row--ai {
				border-top: 1px solid var(--color-foreground--25);
				padding-top: 0.6rem;
			}

			.status--disconnected .integration__icon {
				color: var(--color-foreground--25);
			}

			.integration__content {
				flex: 1 1 auto;
				display: block;
			}

			.integration__title {
				display: flex;
				justify-content: space-between;
			}

			.integration__title gl-feature-badge {
				vertical-align: super;
			}

			.integration__details {
				display: block;
				color: var(--color-foreground--75);
				font-size: 1rem;
			}

			.status--disconnected .integration__title,
			.status--disconnected .integration__details {
				color: var(--color-foreground--50);
			}

			.integration__actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: flex-start;
				justify-content: flex-end;
			}

			button-container {
				margin-bottom: 0.4rem;
				width: 100%;
			}

			p {
				margin: 0;
			}

			gl-popover::part(body) {
				--max-width: 90vw;
			}
		`],ab([eN("#chip")],af.prototype,"_chip",2),ab([P({context:"state",subscribe:!0}),ez()],af.prototype,"_state",2),af=ab([eE("gl-integrations-chip")],af);let av=new Map([["prs","pull requests"],["issues","issues"]]),aw={gettingStarted:"Getting Started",visualizeCodeHistory:"Visualize Code History",aiFeatures:"AI Features",gitBlame:"Inline Blame",prReviews:"Launchpad"};var ay=Object.defineProperty,a_=Object.getOwnPropertyDescriptor,ak=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?a_(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&ay(t,r,n),n};let ax=class extends lit_element_i{constructor(){super(...arguments),this.onDismissWalkthrough=()=>{this._state.walkthroughProgress=void 0,this._ipc.sendCommand(eJ),this.requestUpdate()}}render(){if(null!=this._state.walkthroughProgress)return ek`<gl-button
				@click=${this.onDismissWalkthrough}
				class="walkthrough-progress__button"
				appearance="toolbar"
				tooltip="Dismiss"
				aria-label="Dismiss"
				><code-icon icon="x"></code-icon
			></gl-button>
			<gl-tooltip placement="bottom">
				<a
					class="walkthrough-progress"
					href=${oQ("gitlens.openWalkthrough",{source:{source:"home",detail:"onboarding"}})}
				>
					<header class="walkthrough-progress__title">
						<span
							>GitLens Walkthrough
							(${this._state.walkthroughProgress.doneCount}/${this._state.walkthroughProgress.allCount})</span
						>
					</header>
					<progress
						class="walkthrough-progress__bar"
						value=${this._state.walkthroughProgress.progress}
					></progress>
				</a>
				<div slot="content">
					<div>Open Walkthrough</div>
					<hr />
					${this.renderWalkthroughProgress()}
				</div>
			</gl-tooltip>`}renderWalkthroughProgress(){if(null!=this._state.walkthroughProgress)return ek`<p class="walkthrough-progress__label">
				Walkthrough Progress
				(${this._state.walkthroughProgress.doneCount}/${this._state.walkthroughProgress.allCount})
			</p>
			<ul class="walkthrough-progress__steps">
				${Object.entries(aw).map(([e,t])=>{let r=this._state.walkthroughProgress.state[e];return ek`<li class="walkthrough-progress__step ${r?"completed":""}">
						<code-icon icon="${r?"pass":"circle-large"}"></code-icon>
						<span class="walkthrough-progress__step-label">${t}</span>
					</li>`})}
			</ul>`}};ax.styles=[oD,oj,o2,D`
			.walkthrough-progress__label {
				margin-block: 0;
			}
			.walkthrough-progress__steps {
				margin-block: 0;
				padding-inline-start: 0;
			}
			.walkthrough-progress__step {
				list-style: none;
				margin-block-start: 0.3rem;
			}
			.walkthrough-progress__step-label {
				margin-inline-start: 0.3rem;
			}
			code-icon[icon='circle-large'] {
				color: var(--color-foreground--50);
			}
			code-icon[icon='pass'] {
				color: #00dd00;
			}
		`],ak([P({context:"state",subscribe:!0}),ez()],ax.prototype,"_state",2),ak([P({context:"ipc",subscribe:!0}),ez()],ax.prototype,"_ipc",2),ax=ak([eE("gl-onboarding")],ax);var a$=Object.defineProperty,aC=Object.getOwnPropertyDescriptor,aS=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?aC(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&a$(t,r,n),n};let aP=class extends lit_element_i{render(){return ek`
			<gl-promo
				.promoPromise=${this.promos.getApplicablePromo(void 0,"home")}
				.source="${{source:"home"}}"
				class="promo-banner promo-banner--eyebrow"
				id="promo"
				type="link"
			></gl-promo>
		`}};aP.styles=[D`
			:host {
				display: block;
			}
			.promo-banner {
				text-align: center;
				margin-bottom: 1rem;
			}
			.promo-banner--eyebrow {
				color: var(--color-foreground--50);
				margin-bottom: 0.2rem;
			}
			.promo-banner:has(gl-promo:not([has-promo])) {
				display: none;
			}
		`],aS([P({context:"promos"})],aP.prototype,"promos",2),aP=aS([eE("gl-promo-banner")],aP);var aO=Object.defineProperty,aA=Object.getOwnPropertyDescriptor,aL=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?aA(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&aO(t,r,n),n};let aR=class extends lit_element_i{render(){return ek`<gl-promo-banner></gl-promo-banner>
			<div class="container" tabindex="-1">
				<span class="group"><gl-account-chip></gl-account-chip></span>
				<gl-integrations-chip></gl-integrations-chip>
			</div>
			<gl-onboarding></gl-onboarding>`}show(){this.accountChip.show()}refreshPromo(){this.promoBanner?.requestUpdate()}};aR.styles=[oI,oE,D`
			:host {
				display: block;
			}

			.container {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: 0.6rem;
			}

			.container:focus,
			.container:focus-within {
				outline: none;
			}

			/* .actions {
				flex: none;
				display: flex;
				gap: 0.2rem;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			} */

			gl-promo-banner {
				margin: 0 0.2rem 0.6rem;
			}

			gl-promo-banner:has(gl-promo:not([has-promo])) {
				display: none;
			}

			.group {
				display: flex;
				align-items: center;
				gap: 0.4rem;
			}
		`],aL([eN("gl-account-chip")],aR.prototype,"accountChip",2),aL([eN("gl-promo-banner")],aR.prototype,"promoBanner",2),aR=aL([eE("gl-home-header")],aR);let aB=new Map([["current-branch","$(git-branch)"],["pinned","$(pinned)"],["mergeable","$(rocket)"],["blocked","$(error)"],["follow-up","$(report)"],["needs-review","$(comment-unresolved)"],["waiting-for-review","$(gitlens-clock)"],["draft","$(git-pull-request-draft)"],["other","$(ellipsis)"],["snoozed","$(bell-slash)"]]),aI=new Map([["current-branch","Current Branch"],["pinned","Pinned"],["mergeable","Ready to Merge"],["blocked","Blocked"],["follow-up","Requires Follow-up"],["needs-review","Needs Your Review"],["waiting-for-review","Waiting for Review"],["draft","Draft"],["other","Other"],["snoozed","Snoozed"]]),aE=new Map([["mergeable","mergeable"],["conflicts","blocked"],["failed-checks","blocked"],["unassigned-reviewers","blocked"],["needs-my-review","needs-review"],["code-suggestions","follow-up"],["changes-requested","follow-up"],["reviewer-commented","follow-up"],["waiting-for-review","waiting-for-review"],["draft","draft"],["other","other"]]),aT=new Map([["mergeable",["Ready to Merge","Ready to merge"]],["unassigned-reviewers",["Unassigned Reviewers","You need to assign reviewers"]],["failed-checks",["Failed Checks","You need to resolve the failing checks"]],["conflicts",["Resolve Conflicts","You need to resolve merge conflicts"]],["needs-my-review",["Needs Your Review","${author} requested your review"]],["code-suggestions",["Code Suggestions","Code suggestions have been made on this pull request"]],["changes-requested",["Changes Requested","Reviewers requested changes before this can be merged"]],["reviewer-commented",["Reviewers Commented","Reviewers have commented on this pull request"]],["waiting-for-review",["Waiting for Review","Waiting for reviewers to approve this pull request"]],["draft",["Draft","Continue working on your draft"]],["other",["Other","Opened by ${author} ${createdDateRelative}"]]]);var aD=Object.defineProperty,az=Object.getOwnPropertyDescriptor,aM=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?az(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&aD(t,r,n),n};let aN=class extends lit_element_i{constructor(){super(...arguments),this.size=12,this.worktree=!1}render(){return ek`<code-icon
				class="icon"
				icon="${this.worktree?"gl-worktree":"git-branch"}"
				size="${this.size}"
			></code-icon
			><span class="label">${this.name??"<missing>"}</span>`}};function aj(e,t){return ek`<gl-branch-name .name=${e} .size=${12} ?worktree=${t??!1}></gl-branch-name>`}aN.styles=D`
		:host {
			display: inline-flex;
			align-items: baseline;
			max-width: 100%;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin-inline: 0.2rem;
		}

		:host(:focus) {
			outline: 1px solid var(--vscode-focusBorder);
			outline-offset: 2px;
		}

		.icon {
			margin-right: 0.3rem;
			align-self: center;
		}

		.label {
			font-weight: bold;
		}
	`,aM([eD({type:String})],aN.prototype,"name",2),aM([eD({type:Number})],aN.prototype,"size",2),aM([eD({type:Boolean})],aN.prototype,"worktree",2),aN=aM([eE("gl-branch-name")],aN);var aF=Object.defineProperty,aU=Object.getOwnPropertyDescriptor,aq=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?aU(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&aF(t,r,n),n};let aW=class extends lit_element_i{render(){return this.name?ek`<gl-tooltip .content=${this.name}>${this.renderAvatar()}</gl-tooltip>`:this.renderAvatar()}renderAvatar(){return this.href?ek`<a href=${this.href} class="avatar" part="avatar">${this.renderContent()}</a>`:ek`<span class="avatar" part="avatar">${this.renderContent()}</span>`}renderContent(){return this.src?ek`<img class="thumb thumb--media" src="${this.src}" alt="${this.name}" />`:ek`<slot class="thumb thumb--text"></slot>`}};aW.styles=[D`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			.avatar {
				display: inline-flex;
				width: var(--gl-avatar-size, 1.6rem);
				aspect-ratio: 1;
				vertical-align: middle;
				border-radius: 100%;
				justify-content: center;
			}

			.thumb {
				border-radius: 50%;
			}

			.thumb--text {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: clamp(0.8rem, calc(var(--gl-avatar-size, 1.6rem) * 0.5), 1.1rem);
				line-height: 1;
				text-transform: uppercase;
				cursor: default;
				color: var(--vscode-descriptionForeground);
			}

			.thumb--media {
				display: block;
				width: 100%;
				height: auto;
				object-fit: cover;
				object-position: 50% 50%;
			}
		`],aq([eD()],aW.prototype,"src",2),aq([eD()],aW.prototype,"name",2),aq([eD()],aW.prototype,"href",2),aW=aq([eE("gl-avatar")],aW);var aH=Object.defineProperty,aG=Object.getOwnPropertyDescriptor,aV=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?aG(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&aH(t,r,n),n};let aZ=class extends lit_element_i{constructor(){super(...arguments),this.max=3,this.avatars=[]}render(){return ek`<gl-avatar-group exportparts="base">${this.renderList()}</gl-avatar-group>`}renderList(){let e=this.avatars.slice(0,this.max),t=this.avatars.slice(this.max);return ek`
			${e.map(e=>ek`<gl-avatar exportparts="avatar" .src=${e.src} .name=${e.name} .href=${e.href}
						>${!e.src?ek`<code-icon icon="account"></code-icon>`:""}</gl-avatar
					>`)}
			${eF(t.length,()=>ek`<gl-popover>
						<gl-avatar exportparts="avatar" slot="anchor" class="overflow"
							>+${t.length}</gl-avatar
						>
						<div slot="content" class="overflow-list">
							${t.map(e=>ek`<gl-avatar .src=${e.src} .name=${e.name} .href=${e.href}
										>${!e.src?ek`<code-icon icon="account"></code-icon>`:""}</gl-avatar
									>`)}
						</div>
					</gl-popover>`)}
		`}};aV([eD({type:Number})],aZ.prototype,"max",2),aV([eD({type:Array})],aZ.prototype,"avatars",2),aZ=aV([eE("gl-avatar-list")],aZ);let aK=class extends lit_element_i{render(){return ek`<div class="avatar-group" part="base"><slot></slot></div>`}};aK.styles=[D`
			.avatar-group {
				display: inline-flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}

			.avatar-group ::slotted(*:not(:first-child)) {
				margin-left: calc(var(--gl-avatar-size, 1.6rem) * -0.2);
			}

			.avatar-group:focus-within ::slotted(*),
			.avatar-group:hover ::slotted(*) {
				opacity: 0.5;
			}

			.avatar-group:focus-within ::slotted(*:focus),
			.avatar-group:hover ::slotted(*:hover) {
				opacity: 1;
				z-index: var(--gl-avatar-selected-zindex, 1) !important;
			}
		`],aK=aV([eE("gl-avatar-group")],aK);var aY=Object.defineProperty,aJ=Object.getOwnPropertyDescriptor,aX=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?aJ(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&aY(t,r,n),n};let aQ=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","remove"]]]),a0=class extends lit_element_i{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return aQ.map(([e,t])=>this.renderStat(e,t))}renderStat(e,t){let r=this[e];return null==r?eC:ek`<span class="stat ${e}" aria-label="${r} ${e}"
			><span class="label">${this.renderSymbol(t)}${r}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?ek`<code-icon class="icon" icon="${t}"></code-icon>`:ek`<span>${e}</span>`}};a0.styles=D`
		:host {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			white-space: nowrap;
			font-size: 1rem;
		}

		:host([symbol='icons']) {
			gap: 0.8rem;
		}

		:host([appearance='pill']) {
			background-color: color-mix(
				in srgb,
				var(--vscode-sideBarSectionHeader-background) 90%,
				var(--vscode-foreground) 10%
			);
			border: 1px solid
				color-mix(in srgb, var(--vscode-sideBarSectionHeader-border) 100%, var(--vscode-foreground) 70%);
			border-radius: 0.4rem;
			gap: 0;
			padding: 0 0.8rem 0 0.6rem;
			white-space: nowrap;
			line-height: 1.5rem;
		}

		.stat {
			display: inline-flex;
			flex-direction: row;
			align-items: center;
		}

		.added {
			color: var(--vscode-gitDecoration-addedResourceForeground);
		}
		.modified {
			color: var(--vscode-gitDecoration-modifiedResourceForeground);
		}
		.removed {
			color: var(--vscode-gitDecoration-deletedResourceForeground);
		}

		.label {
			flex-basis: 100%;
			text-align: center;
			align-content: center;
			user-select: none;
		}

		.icon {
			--code-icon-size: 0.9rem;
			margin-inline-end: 0.2rem;
		}

		/* Pill styles */
		:host([appearance='pill']) .stat {
			padding: 0;
			margin-inline-end: 0.8rem;
		}

		:host([appearance='pill']) .stat:last-child {
			margin-inline-end: 0;
		}

		:host([appearance='pill']) .icon {
			margin-inline-end: 0.3rem;
		}

		:host([appearance='pill']) .label {
			display: flex;
			align-items: center;
			gap: 0;
		}
	`,aX([eD({type:Number})],a0.prototype,"added",2),aX([eD({type:Number})],a0.prototype,"modified",2),aX([eD({type:Number})],a0.prototype,"removed",2),aX([eD()],a0.prototype,"symbol",2),aX([eD({reflect:!0})],a0.prototype,"appearance",2),a0=aX([eE("commit-stats")],a0);var a1=Object.defineProperty,a2=Object.getOwnPropertyDescriptor,a3=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?a2(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&a1(t,r,n),n};let a5=class extends lit_element_i{constructor(){super(...arguments),this.dateStyle="relative",this.date=new Date,this.tooltip=""}get absoluteDate(){return function(e,t,o=!0){t=t??void 0;let i=`${(void 0)??""}:${t}`,n=rd.get(i);if(null==n){let e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=rl.exec(e);if(t?.groups!=null){let{dateStyle:e,timeStyle:r}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:r||void 0}}let r={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(rs))if(null!=t){for(let[e,o]of Object.entries(t))if(null!=o)switch(e){case"year":r.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:r.month="long";break;case 3:r.month="short";break;case 2:r.month="2-digit";break;case 1:r.month="numeric"}break;case"day":"DD"===o?r.day="2-digit":r.day="numeric";break;case"weekday":switch(o.length){case 4:r.weekday="long";break;case 3:r.weekday="short";break;case 2:r.weekday="narrow"}break;case"hour":r.hour=2===o.length?"2-digit":"numeric",r.hour12="hh"===o||"h"===o;break;case"minute":r.minute=2===o.length?"2-digit":"numeric";break;case"second":r.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":r.fractionalSecondDigits=3;break;case"dayPeriod":r.dayPeriod="narrow",r.hour12=!0,r.hourCycle="h12";break;case"timeZoneName":r.timeZoneName=2===o.length?"long":"short"}}return r}(t);n=new Intl.DateTimeFormat(r,e),o&&rd.set(i,n)}if(null==t||rl.test(t))return n.format(e);let a=n.formatToParts(e);return t.replace(rs,(t,i,n,c,h,p,u,g,m,b,f,v,w,_,x)=>{if(null!=i)return i.substring(1,i.length-1);for(let[t,i]of Object.entries(x)){if(null==i)continue;let n=a.find(e=>e.type===t);if("Do"===i&&n?.type==="day")return function(e){let t=e%100;return`${e}${ru[(t-20)%10]??ru[t]??ru[0]}`}(Number(n.value));if("a"===i&&n?.type==="dayPeriod"){let t=(function(e){let t=`${(void 0)??""}:time:${e}`,i=rd.get(t);null==i&&(i=new Intl.DateTimeFormat(r,{localeMatcher:"best fit",timeStyle:e}),o&&rd.set(t,i));return i})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return` ${(t??n)?.value??""}`}return n?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}get dateLabel(){return"relative"===this.dateStyle?rp(this.date):this.absoluteDate}render(){return ek`<gl-tooltip content="${this.tooltip} ${this.absoluteDate}"
			><time part="base" datetime="${this.date.toISOString()}">${this.dateLabel}</time></gl-tooltip
		>`}};a3([eD()],a5.prototype,"format",2),a3([eD({attribute:"date-style"})],a5.prototype,"dateStyle",2),a3([eD({converter:{toAttribute:e=>e.getTime(),fromAttribute:(e,t)=>{let r=new Date(e);return isNaN(r.getTime())?new Date(parseInt(e,10)):r}},reflect:!0,attribute:!1})],a5.prototype,"date",2),a3([eD()],a5.prototype,"tooltip",2),a5=a3([eE("formatted-date")],a5);let a4=D`
	:host {
		box-sizing: border-box;
		display: inline-block;
		vertical-align: text-bottom;
	}

	.pill {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.2rem 0.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		line-height: normal;
		text-transform: uppercase;
		color: var(--gl-pill-foreground, var(--vscode-foreground));
		background-color: var(--gl-pill-background, var(--vscode-editorWidget-background));
		white-space: nowrap;
	}

	.pill--outlined {
		padding: 0.1rem 0.4rem;
		background-color: transparent;
		border: 1px solid var(--gl-pill-border, var(--vscode-foreground));
	}
`;var a6=Object.defineProperty,a8=Object.getOwnPropertyDescriptor,a7=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?a8(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&a6(t,r,n),n};let a9=class extends lit_element_i{constructor(){super(...arguments),this.ahead=0,this.behind=0,this.working=0,this.alwaysShow=!1,this.outlined=!1,this.colorized=!1,this.missingUpstream=!1}render(){return 0===this.ahead&&0===this.behind&&0===this.working?this.alwaysShow?this.missingUpstream?ek`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
					<span class="state${this.colorized?" state--missing":""}"
						><code-icon icon="error"></code-icon></span
				></span>`:ek`<span part="base" class="pill${this.outlined?" pill--outlined":""}">
				<span class="state${this.colorized?" state--ahead":""}"><code-icon icon="check"></code-icon></span>
			</span>`:eC:ek`<span part="base" class="pill${this.outlined?" pill--outlined":""}"
			>${eF(this.behind>0,()=>ek`<span class="state${this.colorized?" state--behind":""}"
						>${this.behind}<code-icon icon="arrow-down"></code-icon
					></span>`)}${eF(this.ahead>0,()=>ek`<span class="state${this.colorized?" state--ahead":""}"
						>${this.ahead}<code-icon icon="arrow-up"></code-icon
					></span>`)}${eF(this.working>0,()=>ek`<span class="state${this.colorized?" state--working":""}"
						>${this.working}<span class="working">&#177;</span></span
					>`)}</span
		>`}};a9.styles=[a4,D`
			.pill {
				gap: 0.1rem;
				text-transform: none;
			}

			.state {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			.state--missing code-icon {
				color: var(--gl-tracking-missing);
			}

			.state--ahead code-icon {
				color: var(--gl-tracking-ahead);
			}

			.state--behind code-icon {
				color: var(--gl-tracking-behind);
			}

			.state--working .working {
				color: var(--gl-tracking-working);
			}

			.state code-icon {
				font-size: inherit !important;
				line-height: inherit !important;
			}

			.working {
				display: inline-block;
				width: 1rem;
				text-align: center;
				vertical-align: text-bottom;
				font-weight: normal;
			}
		`],a7([eD({type:Number})],a9.prototype,"ahead",2),a7([eD({type:Number})],a9.prototype,"behind",2),a7([eD({type:Number})],a9.prototype,"working",2),a7([eD({type:Boolean,attribute:"always-show"})],a9.prototype,"alwaysShow",2),a7([eD({type:Boolean})],a9.prototype,"outlined",2),a7([eD({type:Boolean})],a9.prototype,"colorized",2),a7([eD({type:Boolean})],a9.prototype,"missingUpstream",2),a9=a7([eE("gl-tracking-pill")],a9);let se=D`
	.issue-icon--opened {
		color: var(--vscode-gitlens-openAutolinkedIssueIconColor);
	}
	.issue-icon--closed {
		color: var(--vscode-gitlens-closedAutolinkedIssueIconColor);
	}
`;var st=Object.defineProperty,sr=Object.getOwnPropertyDescriptor,so=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sr(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&st(t,r,n),n};let si=class extends lit_element_i{get icon(){let e="issues";if(this.state)switch(this.state){case"opened":e="issues";break;case"closed":e="pass"}return e}get classes(){return this.state?`issue-icon issue-icon--${this.state}`:"issue-icon"}get label(){return this.state?`Issue ${this.issueId?`#${this.issueId}`:""} is ${this.state}`:"Issue"}render(){return this.state?ek`<gl-tooltip>
			<code-icon class=${this.classes} icon=${this.icon} aria-label=${this.state??eC}></code-icon>
			<span slot="content">${this.label}</span>
		</gl-tooltip>`:ek`<code-icon
				class=${this.classes}
				icon=${this.icon}
				aria-label=${this.state??eC}
			></code-icon>`}};si.styles=[se],so([eD()],si.prototype,"state",2),so([eD({attribute:"issue-id"})],si.prototype,"issueId",2),si=so([eE("issue-icon")],si);let sn=D`
	.pr-icon--opened {
		color: var(--vscode-gitlens-openPullRequestIconColor);
	}
	.pr-icon--closed {
		color: var(--vscode-gitlens-closedPullRequestIconColor);
	}
	.pr-icon--merged {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}
`;var sa=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,sl=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?ss(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sa(t,r,n),n};let sc=class extends lit_element_i{constructor(){super(...arguments),this.draft=!1}get icon(){let e=this.draft?"git-pull-request-draft":"git-pull-request";if(this.state)switch(this.state){case"merged":e="git-merge";break;case"closed":e="git-pull-request-closed"}return e}get classes(){return!this.state||this.draft&&"opened"===this.state?"pr-icon":`pr-icon pr-icon--${this.state}`}get label(){let e=this.draft?"Draft pull request":"Pull request";return this.state?`${e} ${this.prId?`#${this.prId}`:""} is ${this.state}`:e}render(){return this.state?ek`<gl-tooltip>
			<code-icon class=${this.classes} icon=${this.icon} aria-label=${this.state??eC}></code-icon>
			<span slot="content">${this.label}</span>
		</gl-tooltip>`:ek`<code-icon
				class=${this.classes}
				icon=${this.icon}
				aria-label=${this.state??eC}
			></code-icon>`}};sc.styles=[sn],sl([eD()],sc.prototype,"state",2),sl([eD({type:Boolean})],sc.prototype,"draft",2),sl([eD({attribute:"pr-id"})],sc.prototype,"prId",2),sc=sl([eE("pr-icon")],sc);let sd=navigator?.userAgentData?.platform,sh=navigator.userAgent;"Linux"===sd||sh.includes("Linux");let sp="macOS"===sd||sh.includes("Macintosh");"Windows"===sd||sh.includes("Windows");var su=Object.defineProperty,sg=Object.getOwnPropertyDescriptor,sm=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sg(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&su(t,r,n),n};let sb=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.isAltKeyPressed=!1,this.handleLinkKeydown=e=>{this.effectiveHref||" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),e.target.click())}}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${sp?"⌥":"Alt"}] ${this.altLabel}`:this.label}get effectiveLabel(){if(this.label||this.altLabel)return this.altLabel&&this.isAltKeyPressed?this.altLabel:this.label}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}connectedCallback(){super.connectedCallback?.(),window.addEventListener("keydown",this),window.addEventListener("keyup",this)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("keydown",this),window.removeEventListener("keyup",this)}handleEvent(e){let t="Alt"===e.key||e.altKey;"keydown"===e.type?this.isAltKeyPressed=t:"keyup"===e.type&&t&&(this.isAltKeyPressed=!1)}render(){return ek`
			<gl-tooltip hoist content="${this.effectiveTooltip??eC}">
				<a
					role="${!this.effectiveHref?"button":eC}"
					type="${!this.effectiveHref?"button":eC}"
					aria-label="${this.effectiveLabel??eC}"
					?disabled=${this.disabled}
					href=${this.effectiveHref??eC}
					tabindex="0"
					@keydown=${this.handleLinkKeydown}
				>
					<code-icon part="icon" icon="${this.effectiveIcon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};sb.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sb.styles=D`
		:host {
			box-sizing: border-box;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			border-radius: 0.5rem;
			color: var(--action-item-foreground, var(--vscode-icon-foreground));
			padding: 0.2rem;
			vertical-align: text-bottom;
			text-decoration: none;
			cursor: pointer;
		}

		:host(:focus-within) {
			${oL}
		}

		:host(:hover),
		:host(:focus-within) {
			background-color: var(--vscode-toolbar-hoverBackground);
		}

		:host(:active) {
			background-color: var(--vscode-toolbar-activeBackground);
		}

		:host([disabled]) {
			pointer-events: none;
			opacity: 0.5;
		}

		a {
			color: inherit;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			text-decoration: none;
		}
		a:focus {
			outline: none;
		}
		a:is(:hover, :focus, :active) {
			text-decoration: none;
		}
	`,sm([eD()],sb.prototype,"href",2),sm([eD({attribute:"alt-href"})],sb.prototype,"altHref",2),sm([eD()],sb.prototype,"label",2),sm([eD({attribute:"alt-label"})],sb.prototype,"altLabel",2),sm([eD()],sb.prototype,"icon",2),sm([eD({attribute:"alt-icon"})],sb.prototype,"altIcon",2),sm([eD({type:Boolean})],sb.prototype,"disabled",2),sm([eN("a")],sb.prototype,"defaultFocusEl",2),sm([ez()],sb.prototype,"isAltKeyPressed",2),sb=sm([eE("action-item")],sb);var sf=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,sw=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sv(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sf(t,r,n),n};let sy=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return ek`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<1)return;let t=this.handleKeydown.bind(this),r=`${this.actionNodes.length}`,o=this.actionNodes.map((e,o)=>(e.setAttribute("aria-posinset",`${o+1}`),e.setAttribute("aria-setsize",r),e.setAttribute("tabindex",0===o?"0":"-1"),this.actionNodes.length>=2&&e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{o?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes)return;let t=e.target,r=parseInt(t.getAttribute("aria-posinset")??"0",10);if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key||this.actionNodes.length<2)return;let o=null;if("ArrowLeft"===e.key){let e=1===r?this.actionNodes.length-1:r-2;o=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=r===this.actionNodes.length?0:r;o=this.actionNodes[e]}null!=o&&o!==t&&(e.preventDefault(),e.stopPropagation(),t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};sy.styles=D`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,sw([ej({flatten:!0})],sy.prototype,"actionNodes",2),sy=sw([eE("action-nav")],sy);var s_=Object.defineProperty,sk=Object.getOwnPropertyDescriptor,sx=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sk(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&s_(t,r,n),n};let s$=class extends lit_element_i{constructor(){super(...arguments),this.hasChanges=!1,this.worktree=!1,this.isDefault=!1}render(){return ek`<gl-tooltip placement="bottom"
			>${this.renderIcon()}<span slot="content">${this.renderTooltipContent()}</span></gl-tooltip
		>`}renderIcon(){let e;if(!this.worktree&&(!this.status||"local"===this.status))return ek`<code-icon icon="git-branch"></code-icon>`;if("detached"===this.status)return ek`<code-icon icon="git-commit"></code-icon>`;let t="0.5";switch(this.status){case"diverged":e="var(--gl-icon-color-status-diverged)";break;case"behind":e="var(--gl-icon-color-status-behind)";break;case"ahead":e="var(--gl-icon-color-status-ahead)";break;case"missingUpstream":e="var(--gl-icon-color-status-missingUpstream)";break;case"upToDate":e=`var(--gl-icon-color-status-${this.hasChanges?"changes":"synced"})`;break;default:this.hasChanges?e="var(--gl-icon-color-status-changes)":(e="transparent",t="1")}return this.worktree&&!1===this.isDefault?ex`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="var(--gl-icon-color-foreground, #c5c5c5)"
					d="M13.5 4h.501v1.003h-.2a5.5 5.5 0 0 1 1.2.755V3.5l-.5-.5H13.5v1zm-4 0V3H7.713l-.852-.854L6.507 2H1.511l-.5.5v3.996L1 6.507v6.995l.5.5h6.227a5.528 5.528 0 0 1-.836-1H2V7.496h.01v-.489h4.486l.354-.146.858-.858h.014a5.51 5.51 0 0 1 1.477-1H7.5l-.353.147-.858.857H2.011V3H6.3l.853.853.353.146H9.5z"
				/>
				<path
					fill="${e}"
					stroke="var(--gl-icon-color-foreground, #c5c5c5)"
					stroke-width="${t}"
					d="M11.5 6.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5z"
				/>
				<path stroke="var(--gl-icon-color-foreground, #c5c5c5)" d="M11.5 13v3M11.5 1v6" />
			</svg>`:ex`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
			<path
				fill="${e}"
				stroke="var(--gl-icon-color-foreground, #c5c5c5)"
				stroke-width="${t}"
				d="M12 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5z"
			/>
			<path
				fill="var(--gl-icon-color-foreground, #c5c5c5)"
				d="M6 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM5 5.95a2.5 2.5 0 1 0-1 0v4.1a2.5 2.5 0 1 0 1.165.04c.168-.38.383-.622.61-.78.327-.227.738-.32 1.214-.31H7c.387 0 .76.03 1.124.059l.026.002c.343.027.694.055 1.003.046.313-.01.661-.06.954-.248.29-.185.466-.466.544-.812a.756.756 0 0 1 .046-.055 2.5 2.5 0 1 0-1.03-.134c-.028.108-.07.14-.1.16-.063.04-.191.08-.446.089a8.783 8.783 0 0 1-.917-.045A14.886 14.886 0 0 0 7.005 8c-.61-.013-1.249.105-1.8.488-.07.05-.14.102-.205.159V5.95zm7-.45a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-9 7a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
			/>
		</svg>`}renderTooltipContent(){let e,t=this.branch?aj(this.branch):"Branch",r=this.upstream?aj(this.upstream):"its upstream";switch(this.status){case"diverged":e=ek`${t} has diverged from ${r}`;break;case"behind":e=ek`${t} is behind ${r}`;break;case"ahead":e=ek`${t} is ahead of ${r}`;break;case"missingUpstream":e=ek`${t} is missing its upstream ${r}`;break;case"upToDate":e=ek`${t} is up to date with ${r}`;break;case"local":e=ek`${t} is a local branch which hasn't been published`;break;case"remote":e=ek`${t} is a remote branch`;break;case"detached":e=ek`${t} is in a detached state, i.e. checked out to a commit or tag`;break;default:e=ek`${t} is in an unknown state`}return e=ek`<p>${e}</p>`,this.worktree?e=this.hasChanges?ek`${e}
					<p>Checked out in a worktree and has working (uncommitted) changes</p>`:ek`${e}
					<p>Checked out in a worktree</p>`:this.hasChanges&&(e=ek`${e}
				<p>Has working (uncommitted) changes</p>`),e}};s$.styles=D`
		:host {
			display: inline-flex;
			width: 16px;
			height: 16px;

			--gl-icon-color-foreground: var(--vscode-foreground, #c5c5c5);

			--gl-icon-color-status-synced: var(
				--gl-icon-color-foreground,
				var(--vscode-gitlens-decoration\\.branchUpToDateForegroundColor)
			);
			--gl-icon-color-status-diverged: var(--vscode-gitlens-decorations\\.branchDivergedForegroundColor, #ff5);
			--gl-icon-color-status-behind: var(--vscode-gitlens-decorations\\.branchBehindForegroundColor, #f05);
			--gl-icon-color-status-ahead: var(--vscode-gitlens-decorations\\.branchAheadForegroundColor, #0f5);
			--gl-icon-color-status-missingUpstream: var(
				--vscode-gitlens-decorations\\.branchMissingUpstreamForegroundColor,
				#c74e39
			);
			--gl-icon-color-status-changes: #1a79ff;
		}

		:host-context(.vscode-dark),
		:host-context(.vscode-high-contrast) {
			--gl-icon-color-foreground: #c5c5c5;
		}

		:host-context(.vscode-light),
		:host-context(.vscode-high-contrast-light) {
			--gl-icon-color-foreground: #424242;
		}

		p {
			margin: 0;
		}

		p + p {
			margin-top: 0.4rem;
		}

		svg {
			width: 100%;
			height: 100%;
			margin-top: -0.2rem;
			vertical-align: middle;
		}
	`,sx([eD({type:String})],s$.prototype,"branch",2),sx([eD({type:String})],s$.prototype,"status",2),sx([eD({type:Boolean})],s$.prototype,"hasChanges",2),sx([eD({type:String})],s$.prototype,"upstream",2),sx([eD({type:Boolean})],s$.prototype,"worktree",2),sx([eD({type:Boolean,attribute:"is-default"})],s$.prototype,"isDefault",2),s$=sx([eE("gl-branch-icon")],s$);let sC=D`
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
`,sS=D`
	code-icon.picker-icon {
		font-size: 1rem;
		/* margin-top: 0.4rem; */
		margin-right: -0.25rem;
	}

	code-icon.picker-icon::before {
		margin-left: -0.4rem;
	}
`,sP=D`
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
`;var sO=Object.defineProperty,sA=Object.getOwnPropertyDescriptor,sL=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sA(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sO(t,r,n),n};let sR=class extends lit_element_i{constructor(){super(...arguments),this.icon=!1,this.size=13,this.worktree=!1}render(){let e,t;if(null==this.ref)return eC;switch(this.ref.refType){case"branch":e=this.worktree?"worktree":"branch",t=this.worktree?"gl-worktree":"git-branch";break;case"tag":e="tag",t="tag";break;default:e="revision",t="git-commit"}return ek`${this.icon?ek`<code-icon
						class="icon${e?` ${e}`:""}"
						icon="${t}"
						size="${this.size}"
					></code-icon>`:eC}<span class="label">${this.ref.name}</span>`}};sR.styles=D`
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
	`,sL([eD({type:Boolean,reflect:!0})],sR.prototype,"icon",2),sL([eD({type:Object})],sR.prototype,"ref",2),sL([eD({type:Number})],sR.prototype,"size",2),sL([eD({type:Boolean})],sR.prototype,"worktree",2),sR=sL([eE("gl-ref-name")],sR);var sB=Object.defineProperty,sI=Object.getOwnPropertyDescriptor,sE=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sI(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sB(t,r,n),n};let sT=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.icon=!1,this.size=16,this.worktree=!1}render(){return ek`<gl-button appearance="toolbar" href=${this.href??eC} ?disabled=${this.disabled}
			>${null==this.ref?ek`<slot name="empty">&lt;missing&gt;</slot>`:ek`<gl-ref-name
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
		></gl-button>`}};sT.styles=[sC,D`
			:host {
				--font-weight: normal;
			}

			gl-button {
				max-width: 100%;
			}

			gl-ref-name:not([icon]) {
				padding-left: 0.2rem;
			}
		`,sS],sE([eD({type:Boolean,reflect:!0})],sT.prototype,"disabled",2),sE([eD({type:String,reflect:!0})],sT.prototype,"href",2),sE([eD({type:Boolean,reflect:!0})],sT.prototype,"icon",2),sE([eD({type:Object})],sT.prototype,"ref",2),sE([eD({type:Number})],sT.prototype,"size",2),sE([eD({type:Boolean})],sT.prototype,"worktree",2),sT=sE([eE("gl-ref-button")],sT);var sD=Object.defineProperty,sz=Object.getOwnPropertyDescriptor,sM=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sz(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sD(t,r,n),n};let sN=class extends lit_element_i{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,e)return;let t=(this.appearance??"alert")==="alert"?"alert":void 0;switch(this.state){case oq.VerificationRequired:return ek`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${t??eC}"
							href="${oQ("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${t??eC}"
							href="${oQ("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case oq.Community:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let r=(new Date(t[t.length-1].expiresOn).getTime()-Date.now())/36e5;return t.length<=3&&r>0&&r<24?"active":"expired"}(this.featurePreview))return ek`${this.renderFeaturePreview(this.featurePreview)}`;return ek`<slot name="feature"></slot>
					<p>
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${ra.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??eC}"
							href="${oQ("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${oQ("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${rw("day",14)} of
						<a href="${ra.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case oq.TrialExpired:return ek`<slot name="feature"></slot>
					<p>
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${ra.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??eC}"
							href="${oQ("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						>
					</p>
					<p>${this.renderPromo()}</p>`;case oq.TrialReactivationEligible:return ek`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??eC}"
							href="${oQ("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${rw("day",14)}!
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,r=e.usages.length;return 0===r?ek`<slot name="feature"></slot>
				<gl-button appearance="${t??eC}" href="${this.featurePreviewCommandLink??eC}"
					>Continue</gl-button
				>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately hosted
					repos, or
					<a href="${oQ("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?ek`<br />`:""} For full access to all GitLens Pro features,
					<a href="${oQ("gitlens.plus.signUp",this.source)}"
						>start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:ek`
			${this.renderFeaturePreviewStep(e,r)}
			<p class="actions-row">
				<gl-button
					class="inline"
					appearance="${t??eC}"
					href="${this.featurePreviewCommandLink??eC}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${oQ("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<p>
				After continuing, you will have ${rw("day",3-r,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately hosted
				repos.<br />
				${"alert"!==t?ek`<br />`:""} For full access to all GitLens Pro features,
				<a href="${oQ("gitlens.plus.signUp",this.source)}"
					>start your free ${14}-day Pro trial</a
				>
				— no credit card required.
			</p>
		`}renderFeaturePreviewStep(e,t){if("graph"!==e.feature)return ek`<slot name="feature"></slot>`;switch(t){case 1:return ek`<p>Try Commit Search</p>
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
							</p> `;case 2:return ek`
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
						`;default:return ek`<slot name="feature"></slot>`}}renderPromo(){return ek`<gl-promo
			.promoPromise=${this.promos.getApplicablePromo(void 0,"gate")}
			.source=${this.source}
		></gl-promo>`}};sN.styles=[D`
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
		`,o1],sM([eN("gl-button")],sN.prototype,"button",2),sM([eD()],sN.prototype,"appearance",2),sM([eD({type:Object})],sN.prototype,"featurePreview",2),sM([eD()],sN.prototype,"featurePreviewCommandLink",2),sM([eD()],sN.prototype,"featureRestriction",2),sM([eD()],sN.prototype,"featureWithArticleIfNeeded",2),sM([P({context:"promos"})],sN.prototype,"promos",2),sM([eD({type:Object})],sN.prototype,"source",2),sM([eD({attribute:!1,type:Number})],sN.prototype,"state",2),sM([eD()],sN.prototype,"webroot",2),sN=sM([eE("gl-feature-gate-plus-state")],sN);var sj=Object.defineProperty,sF=Object.getOwnPropertyDescriptor,sU=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sF(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sj(t,r,n),n};let sq=D`
	.header__actions {
		margin-top: 0.4rem;
	}

	.content {
		gap: 0.6rem;
	}

	:host-context(.vscode-dark),
	:host-context(.vscode-high-contrast) {
		--color-status--in-sync: #00bb00;
		--color-merge--clean: #00bb00;
		--color-merge--conflict: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		--color-status--in-sync: #00aa00;
		--color-merge--clean: #00aa00;
		--color-merge--conflict: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.header__title > span {
		cursor: help;
	}

	.header__title code-icon:not(.info) {
		margin-bottom: 0.1rem;
	}

	.header__title code-icon.status--warning {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.header__title p {
		margin: 0.5rem 0 0 0;
	}

	.header__subtitle {
		font-size: 1.3rem;
		margin: 0.2rem 0 0 0;
	}

	.status--conflict .icon,
	.status--conflict .status-indicator {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.status--behind .icon,
	.status--behind .status-indicator {
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
	}

	.status--merged .icon,
	.status--merged .status-indicator {
		color: var(--vscode-gitlens-mergedPullRequestIconColor);
	}

	.status--merged .icon {
		transform: rotateY(180deg);
	}

	.status--in-sync .status-indicator {
		color: var(--color-status--in-sync);
	}

	.status--merge-conflict {
		color: var(--color-merge--conflict);
	}

	.status--merge-clean {
		color: var(--color-merge--clean);
	}

	.status--merge-unknown {
		color: var(--color-foreground--50);
	}

	.status--upgrade {
		color: var(--color-foreground--50);
	}

	.status-indicator {
		margin-left: -0.5rem;
		margin-top: 0.8rem;
	}

	.body {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		width: 100%;
	}

	.button-container {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 0.4rem;
		margin-bottom: 0.4rem;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.button-container gl-button {
		max-width: 30rem;
	}

	p {
		margin: 0 0.4rem;
	}

	p code-icon,
	gl-button code-icon {
		margin-bottom: 0.1rem;
	}

	details {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding: 0;
		position: relative;
		margin: 0 0.2rem 0.4rem;
		overflow: hidden;
		border: 1px solid transparent;
		color: var(--color-foreground--85);
	}

	details[open] {
		border-radius: 0.3rem;
		border: 1px solid var(--vscode-sideBar-border);
	}

	summary {
		position: sticky;
		top: 0;
		color: var(--color-foreground);
		cursor: pointer;
		list-style: none;
		transition: transform ease-in-out 0.1s;
		padding: 0.4rem 0.6rem 0.4rem 0.6rem;
		z-index: 1;
	}

	summary:hover {
		color: var(--vscode-textLink-activeForeground);
	}

	details[open] > summary {
		color: var(--vscode-textLink-foreground);
		border-radius: 0.3rem 0.3rem 0 0;
		margin-left: 0;
		background: var(--vscode-sideBar-background);
	}

	details[open] > summary code-icon {
		transform: rotate(90deg);
	}

	summary code-icon {
		transition: transform 0.2s;
	}

	.files {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;

		max-height: 8rem;
		overflow-y: auto;
		padding: 0.4rem 0.8rem;

		background: var(--vscode-sideBar-background);
	}

	gl-popover {
		--max-width: 80vw;
	}

	.target-edit * {
		text-decoration: underline dotted;
		text-underline-offset: 0.3rem;
	}

	.target-edit gl-branch-name {
		margin: 0;
	}
`,sW=class extends lit_element_i{get target(){return this._target}get targetPromise(){return this._targetPromise}set targetPromise(e){this._targetPromise!==e&&(this._targetPromise=e,this._targetPromise?.then(e=>this._target=e,()=>this._target=void 0))}get conflictResult(){return this.target?.potentialConflicts}get conflicts(){let e=this.conflictResult;return e?.status==="conflicts"?e.conflict:void 0}get conflictError(){let e=this.conflictResult;return e?.status==="error"?e:void 0}get mergedStatus(){return this.target?.mergedStatus}get status(){return this.target?.status}get branchRef(){if(null!=this.branch)return{repoPath:this.branch.repoPath,branchId:this.branch.id,branchName:this.branch.name,worktree:this.branch.worktree?{name:this.branch.worktree.name,isDefault:this.branch.worktree.isDefault}:void 0}}get targetBranchRef(){if(null!=this.target)return{repoPath:this.target.repoPath,branchId:this.target.id,branchName:this.target.name}}render(){let e,t;return this.status||this.conflicts?(this.mergedStatus?.merged?(e="git-merge",t="merged"):this.conflicts?(e="warning",t="conflict"):(this.status?.behind??0)>0?(e="arrow-down",t="behind"):(e="check",t="in-sync"),ek`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip status--${t}" tabindex="0"
				><code-icon class="icon" icon="gl-merge-target" size="18"></code-icon
				><code-icon class="status-indicator icon--${t}" icon="${e}" size="12"></code-icon>
			</span>
			<div slot="content" class="content">${this.renderContent()}</div>
		</gl-popover>`):eC}renderContent(){let e=aj(this.target?.name),t=this.mergedStatus?.merged&&this.mergedStatus.localBranchOnly?{repoPath:this.branch.repoPath,branchId:this.mergedStatus.localBranchOnly.id,branchName:this.mergedStatus.localBranchOnly.name,branchUpstreamName:this.mergedStatus.localBranchOnly.upstream?.name}:this.target?{repoPath:this.target.repoPath,branchId:this.target.id,branchName:this.target.name,branchUpstreamName:void 0}:void 0;return this.mergedStatus?.merged?this.mergedStatus.localBranchOnly?ek`${this.renderHeader(`Branch ${"highest"!==this.mergedStatus.confidence?"Likely ":""}Merged Locally into Merge Target`,"git-merge")}
					<div class="body">
						<p>
							Your current branch ${aj(this.branch.name)} has
							${"highest"!==this.mergedStatus.confidence?"likely ":""}been merged into its merge
							target's local branch ${aj(this.mergedStatus.localBranchOnly.name)}.
						</p>
						<div class="button-container">
							<gl-button
								full
								href="${this._webview.createCommandLink("gitlens.pushBranch:",t)}"
								><span
									>Push ${aj(this.mergedStatus.localBranchOnly.name)}</span
								></gl-button
							>
							<gl-button
								full
								appearance="secondary"
								href="${this._webview.createCommandLink("gitlens.deleteBranchOrWorktree:",[this.branchRef,t])}"
								><span
									>Delete
									${null!=this.branch.worktree&&!this.branch.worktree.isDefault?"Worktree":"Branch"}
									${aj(this.branch.name,null!=this.branch.worktree)}</span
								></gl-button
							>
						</div>
					</div>`:ek`${this.renderHeader(`Branch ${"highest"!==this.mergedStatus.confidence?"Likely ":""}Merged into Merge Target`,"git-merge")}
				<div class="body">
					<p>
						Your current branch ${aj(this.branch.name)} has
						${"highest"!==this.mergedStatus.confidence?"likely ":""}been merged into its merge target
						${this.renderInlineTargetEdit(this.target)}.
					</p>
					<div class="button-container">
						<gl-button
							full
							href="${this._webview.createCommandLink("gitlens.deleteBranchOrWorktree:",[this.branchRef,t])}"
							><span
								>Delete
								${null!=this.branch.worktree&&!this.branch.worktree.isDefault?"Worktree":"Branch"}
								${aj(this.branch.name,null!=this.branch.worktree)}</span
							></gl-button
						>
					</div>
				</div>`:this.conflicts?ek`${this.renderHeader("Potential Conflicts with Merge Target","warning","warning")}
				<div class="body">
					${this.status?ek`<p>
								Your current branch ${aj(this.branch.name)} is
								${rw("commit",this.status.behind)} behind its merge target
								${this.renderInlineTargetEdit(this.target)}.
							</p>`:eC}
					<div class="button-container">
						<gl-button
							full
							href="${this._webview.createCommandLink("gitlens.rebaseCurrentOnto:",this.targetBranchRef)}"
							><span>Rebase ${aj(this.conflicts.branch)} onto ${e}</span></gl-button
						>
						<gl-button
							full
							appearance="secondary"
							href="${this._webview.createCommandLink("gitlens.mergeIntoCurrent:",this.targetBranchRef)}"
							><span>Merge ${e} into ${aj(this.conflicts.branch)}</span></gl-button
						>
					</div>
					<p class="status--merge-conflict">
						<code-icon icon="warning"></code-icon> Merging will cause conflicts in
						${rw("file",this.conflicts.files.length)} that will need to be resolved.
					</p>
					${this.renderFiles(this.conflicts.files)}
				</div>`:null!=this.status?this.status.behind>0?ek`${this.renderHeader(`${rw("Commit",this.status.behind)} Behind Merge Target`,"arrow-down","warning")}
					<div class="body">
						<p>
							Your current branch ${aj(this.branch.name)} is
							${rw("commit",this.status.behind)} behind its merge target
							${this.renderInlineTargetEdit(this.target)}.
						</p>
						<div class="button-container">
							<gl-button
								full
								href="${this._webview.createCommandLink("gitlens.rebaseCurrentOnto:",this.targetBranchRef)}"
								><span>Rebase ${aj(this.branch.name)} onto ${e}</span></gl-button
							>
							<gl-button
								full
								appearance="secondary"
								href="${this._webview.createCommandLink("gitlens.mergeIntoCurrent:",this.targetBranchRef)}"
								><span>Merge ${e} into ${aj(this.branch.name)}</span></gl-button
							>
						</div>
						${this.conflictError?ek`<p class="status--merge-unknown">
									<code-icon icon="error"></code-icon> Unable to detect conflicts.
								</p>`:ek`<p class="status--merge-clean">
									<code-icon icon="check"></code-icon> Merging will not cause conflicts.
								</p>`}
					</div>`:ek`${this.renderHeader("Up to Date with Merge Target","check")}
				<div class="body">
					<p>
						Your current branch ${aj(this.branch.name)} is up to date with its merge target
						${this.renderInlineTargetEdit(this.target)}.
					</p>
				</div>`:eC}renderHeader(e,t,r){return ek`<div class="header">
			<gl-tooltip class="header__title">
				<span>
					<code-icon
						icon="${t}"
						class="${(r?`status--${r}`:void 0)??eC}"
					></code-icon>
					${e}&nbsp;<code-icon class="info" icon="question" size="16"></code-icon>
				</span>
				<span slot="content"
					>${e}
					<p>
						The "merge target" is the branch that ${aj(this.branch.name)} is most likely to be
						merged into.
					</p>
				</span>
			</gl-tooltip>
			${this.renderHeaderActions()}
		</div>`}renderHeaderActions(){let e=this.branchRef,t=this.targetBranchRef;return ek`<span class="header__actions"
			>${e&&t?ek`<gl-button
							href="${this._webview.createCommandLink("gitlens.git.branch.setMergeTarget:",{...e,mergeTargetId:t.branchId,mergeTargetName:t.branchName})}"
							appearance="toolbar"
							><code-icon icon="pencil"></code-icon
							><span slot="tooltip"
								>Change Merge Target<br />${aj(this.target?.name)}</span
							></gl-button
						><gl-button
							href="${this._webview.createCommandLink("gitlens.openMergeTargetComparison:",{...e,mergeTargetId:t.branchId,mergeTargetName:t.branchName})}"
							appearance="toolbar"
							><code-icon icon="git-compare"></code-icon>
							<span slot="tooltip"
								>Compare Branch with Merge Target<br />${aj(this.branch.name)}
								<code-icon icon="arrow-both" size="12"></code-icon> ${aj(this.target?.name)}</span
							>
						</gl-button>`:eC}<gl-button
				href="${this._webview.createCommandLink("gitlens.fetch:",this.targetBranchRef)}"
				appearance="toolbar"
				><code-icon icon="repo-fetch"></code-icon>
				<span slot="tooltip">Fetch Merge Target<br />${aj(this.target?.name)}</span>
			</gl-button></span
		>`}renderInlineTargetEdit(e){return ek`<gl-button
			class="target-edit"
			appearance="toolbar"
			density="compact"
			tooltip="Change Merge Target"
			href="${this._webview.createCommandLink("gitlens.git.branch.setMergeTarget:",{...this.branchRef,mergeTargetId:this.targetBranchRef.branchId,mergeTargetName:this.targetBranchRef.branchName})}"
			>${aj(e?.name)}</gl-button
		>`}renderFiles(e){return ek`
			<details>
				<summary>
					<code-icon icon="chevron-right"></code-icon>
					Show ${e.length} conflicting files
				</summary>
				<div class="files scrollable">${e.map(e=>this.renderFile(e.path))}</div>
			</details>
		`}renderFile(e){return ek`<span class="files__item"><code-icon icon="file"></code-icon> ${e}</span>`}};sW.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sW.styles=[oI,oE,o0,oT,sq],sU([P({context:"webview"})],sW.prototype,"_webview",2),sU([eD({type:Object})],sW.prototype,"branch",2),sU([ez()],sW.prototype,"_target",2),sU([eD({type:Object})],sW.prototype,"targetPromise",1),sW=sU([eE("gl-merge-target-status")],sW);let sH=class extends lit_element_i{render(){let e="upgrade";return ek`<gl-popover placement="bottom" trigger="hover click focus" hoist>
			<span slot="anchor" class="chip status--${e}" tabindex="0"
				><code-icon class="icon" icon="gl-merge-target" size="18"></code-icon
				><code-icon class="status-indicator icon--${e}" icon="${"warning"}" size="12"></code-icon>
			</span>
			<gl-feature-gate-plus-state
				slot="content"
				appearance="default"
				featureRestriction="all"
				.source=${{source:"home",detail:"marge-target"}}
				.state=${this.state}
			>
				<div slot="feature">
					<span class="header__title">Detect potential merge conflicts</span>

					<p>
						See when your current branch has potential conflicts with its merge target branch and take
						action to resolve them.
					</p>
				</div>
			</gl-feature-gate-plus-state>
		</gl-popover>`}};sH.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sH.styles=[oI,oE,o0,oT,sq,D`
			gl-feature-gate-plus-state {
				display: block;
				margin-inline: 0.5rem;

				p {
					margin-block: 1rem;
					margin-inline: 0;
				}
			}
		`],sU([eD({attribute:!1,type:Number})],sH.prototype,"state",2),sH=sU([eE("gl-merge-target-upgrade")],sH);var sG=Object.defineProperty,sV=Object.getOwnPropertyDescriptor,sZ=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?sV(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sG(t,r,n),n};let sK=D`
	* {
		box-sizing: border-box;
	}

	gl-avatar-list {
		--gl-avatar-size: 2.4rem;
		margin-block: -0.4rem;
	}

	.branch-item {
		position: relative;
	}

	.branch-item__container {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}
	.branch-item__container > * {
		margin-block: 0;
	}

	.branch-item__section {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	.branch-item__section > * {
		margin-block: 0;
	}

	.branch-item__section--details {
		font-size: 0.9em;
		color: var(--vscode-descriptionForeground);
	}

	.branch-item__actions {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		flex-direction: row;
		justify-content: flex-end;
		font-size: 0.9em;
	}

	/* :empty selector doesn't work with lit */
	.branch-item__actions:not(:has(*)) {
		display: none;
	}

	.branch-item__icon {
		color: var(--vscode-descriptionForeground);
		flex: none;
	}

	.branch-item__name {
		flex-grow: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
	}

	.branch-item__name--secondary {
		font-weight: normal;
	}

	.branch-item__identifier {
		color: var(--vscode-descriptionForeground);
		text-decoration: none;
	}

	.branch-item__grouping {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		max-width: 100%;
		margin-block: 0;
	}

	.branch-item__changes {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: flex-end;
		flex-wrap: wrap;
		white-space: nowrap;
	}

	.branch-item__changes formatted-date {
		margin-inline-end: auto;
	}

	.branch-item__summary {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}

	.branch-item__collapsed-actions {
		position: absolute;
		z-index: var(--gl-branch-card-actions-zindex, 2);
		right: 0.4rem;
		bottom: 0.3rem;
		padding: 0.4rem 0.6rem;
		background-color: var(--gl-card-hover-background);
	}

	.branch-item:not(:focus-within):not(:hover) .branch-item__collapsed-actions {
		${oA}
	}

	.pill {
		--gl-pill-border: color-mix(in srgb, transparent 80%, var(--color-foreground));
	}

	.work-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
	}
	.work-item::part(base) {
		margin-block-end: 0;
	}

	.branch-item__section.mb-1 {
		margin-block: 0.4rem;
	}

	.branch-item__merge-target {
		margin-inline-end: auto;
	}

	.branch-item__row {
		display: flex;
		gap: 0.8rem;
	}

	.branch-item__row [full] {
		flex-grow: 1;
	}

	.branch-item__missing {
		--button-foreground: inherit;
	}

	:host-context(.vscode-dark) .branch-item__missing,
	:host-context(.vscode-high-contrast) .branch-item__missing {
		--button-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--button-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
		--button-border: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 12%);
	}

	:host-context(.vscode-light) .branch-item__missing,
	:host-context(.vscode-high-contrast-light) .branch-item__missing {
		--button-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 8%);
		--button-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 10%);
		--button-border: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 14%);
	}

	.branch-item__category {
		margin-inline-start: 0.6rem;
	}

	.launchpad-grouping--mergeable {
		color: var(--vscode-gitlens-launchpadIndicatorMergeableColor);
	}

	.launchpad-grouping--blocked {
		color: var(--vscode-gitlens-launchpadIndicatorBlockedColor);
	}

	.launchpad-grouping--attention {
		color: var(--vscode-gitlens-launchpadIndicatorAttentionColor);
	}

	.tracking__pill,
	.wip__pill {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.tracking__tooltip,
	.wip__tooltip {
		display: contents;
		vertical-align: middle;
	}

	.tracking__tooltip p,
	.wip__tooltip p {
		margin-block: 0;
	}

	p.tracking__tooltip--wip {
		margin-block-start: 1rem;
	}
`;let GlBranchCardBase=class GlBranchCardBase extends GlElement{constructor(){super(...arguments),this.showUpgrade=!1,this.busy=!1,this.expanded=!1,this.expandable=!1,this.onFocus=e=>{e.composedPath().some(e=>e.matches?.("action-item")??!1)||this.expanded||this.toggleExpanded(!0)}}static{this.styles=[o1,sK]}get branch(){return this._branch}set branch(e){this._branch=e,this.autolinksPromise=e?.autolinks,this.contributorsPromise=e?.contributors,this.issuesPromise=e?.issues,this.prPromise=e?.pr,this.mergeTargetPromise=e?.mergeTarget,this.remotePromise=e?.remote,this.wipPromise=e?.wip}get autolinks(){return this._autolinks}get autolinksPromise(){return this._autolinksPromise}set autolinksPromise(e){this._autolinksPromise!==e&&(this._autolinksPromise=e,this._autolinksPromise?.then(e=>this._autolinks=e,()=>this._autolinks=void 0))}get contributors(){return this._contributors}get contributorsPromise(){return this._contributorsPromise}set contributorsPromise(e){this._contributorsPromise!==e&&(this._contributorsPromise=e,this._contributorsPromise?.then(e=>this._contributors=e,()=>this._contributors=void 0))}get issues(){return this._issues}get issuesPromise(){return this._issuesPromise}set issuesPromise(e){this._issuesPromise!==e&&(this._issuesPromise=e,this._issuesPromise?.then(e=>this._issues=e,()=>this._issues=void 0))}get pr(){return this._pr}get prPromise(){return this._prPromise}set prPromise(e){this._prPromise!==e&&(this._prPromise=e,this._prPromise?.then(e=>{this._pr=e,this.launchpadItemPromise=e?.launchpad},()=>{this._pr=void 0,this.launchpadItemPromise=void 0}))}get launchpadItem(){return this._launchpadItem}get launchpadItemPromise(){return this._launchpadItemPromise}set launchpadItemPromise(e){this._launchpadItemPromise!==e&&(this._launchpadItemPromise=e,this._launchpadItemPromise?.then(e=>this._launchpadItem=e,()=>this._launchpadItem=void 0))}get mergeTarget(){return this._mergeTarget}get mergeTargetPromise(){return this._mergeTargetPromise}set mergeTargetPromise(e){this._mergeTargetPromise!==e&&(this._mergeTargetPromise=e,this._mergeTargetPromise?.then(e=>this._mergeTarget=e,()=>this._mergeTarget=void 0))}get remote(){return this._remote}get remotePromise(){return this._remotePromise}set remotePromise(e){this._remotePromise!==e&&(this._remotePromise=e,this._remotePromise?.then(e=>this._remote=e,()=>this._remote=void 0))}get wip(){return this._wip}get wipPromise(){return this._wipPromise}set wipPromise(e){this._wipPromise!==e&&(this._wipPromise=e,this._wipPromise?.then(e=>this._wip=e,()=>this._wip=void 0))}onExpandableChanged(){this.attachFocusListener()}get branchRef(){return{repoPath:this.repo,branchId:this.branch.id,branchName:this.branch.name,worktree:this.branch.worktree?{name:this.branch.worktree.name,isDefault:this.branch.worktree.isDefault}:void 0}}get isWorktree(){return null!=this.branch.worktree&&!this.branch.worktree.isDefault}get cardIndicator(){return sQ(sX(this.pr,this.launchpadItem))??"base"}get branchCardIndicator(){if(this.branch.opened){if(this.wip?.pausedOpStatus!=null){if(this.wip?.hasConflicts)return"conflict";switch(this.wip.pausedOpStatus.type){case"cherry-pick":return"cherry-picking";case"merge":return"merging";case"rebase":return"rebasing";case"revert":return"reverting"}}if(this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0)return"branch-changes";if(this.mergeTarget?.mergedStatus?.merged)return"branch-merged";switch(this.branch.status){case"ahead":return"branch-ahead";case"behind":return"branch-behind";case"diverged":return"branch-diverged";case"upToDate":return"branch-synced";case"missingUpstream":return"branch-missingUpstream";default:return}}}connectedCallback(){super.connectedCallback?.(),this.attachFocusListener()}disconnectedCallback(){super.disconnectedCallback?.(),this.eventController?.abort()}attachFocusListener(){this.eventController?.abort(),this.eventController=void 0,this.expandable&&(null==this.eventController&&(this.eventController=new AbortController),this.addEventListener("focusin",this.onFocus,{signal:this.eventController.signal}))}renderIssues(){let{autolinks:e,issues:t}=this,r=t?.length?t:e;return r?.length?ek`
			${r.map(e=>ek`
					<p class="branch-item__grouping">
						<span class="branch-item__icon">
							<issue-icon state=${e.state} issue-id=${e.id}></issue-icon>
						</span>
						<a href=${e.url} class="branch-item__name branch-item__name--secondary">${e.title}</a>
						<span class="branch-item__identifier">${isNaN(parseInt(e.id))?"":"#"}${e.id}</span>
					</p>
				`)}
		`:eC}renderWip(){let e=this.wip?.workingTreeState;if(null==e)return eC;let t=s0(e);return ek`<gl-tooltip class="wip__pill" placement="bottom"
			><commit-stats
				added=${e.added}
				modified=${e.changed}
				removed=${e.deleted}
				symbol="icons"
			></commit-stats>
			<span class="wip__tooltip" slot="content">
				<p>${t.length?`${t.join(", ")} in the working tree`:"No working tree changes"}</p>
			</span>
		</gl-tooltip>`}renderAvatars(){let{contributors:e}=this;return e?.length?ek`<gl-avatar-list
			.avatars=${e.map(e=>({name:e.name,src:e.avatarUrl}))}
			max="1"
		></gl-avatar-list>`:eC}renderTracking(e=!1){let t,r;if(null==this.branch.upstream)return eC;let{state:o}=this.branch.upstream,i=0;if(e){let e=this.wip?.workingTreeState;if(null!=e){i=e.added+e.changed+e.deleted;let r=s0(e);r.length&&(t=ek`<p class="tracking__tooltip--wip">${r.join(", ")} in the working tree</p>`)}}if(this.branch.upstream.missing)r=ek`${aj(this.branch.name)} is missing its upstream
			${aj(this.branch.upstream.name)}`;else{let e=[];o.behind&&e.push(`${rw("commit",o.behind)} behind`),o.ahead&&e.push(`${rw("commit",o.ahead)} ahead of`),r=e.length?ek`${aj(this.branch.name)} is
				${e.join(", ")}${aj(this.branch.upstream?.name)}`:ek`${aj(this.branch.name)} is up to date with
				${aj(this.branch.upstream?.name)}`}return ek`<gl-tooltip class="tracking__pill" placement="bottom"
			><gl-tracking-pill
				class="pill"
				colorized
				outlined
				always-show
				ahead=${o.ahead}
				behind=${o.behind}
				working=${i}
				?missingUpstream=${this.branch.upstream?.missing??!1}
			></gl-tracking-pill>
			<span class="tracking__tooltip" slot="content">${r}${t}</span></gl-tooltip
		>`}renderBranchActions(){let e=this.getBranchActions?.();return e?.length?ek`<action-nav>${e}</action-nav>`:eC}renderPrActions(){let e=this.getPrActions?.();return e?.length?ek`<action-nav>${e}</action-nav>`:eC}renderCollapsedActions(){if(this.expanded)return eC;let e=this.getCollapsedActions?.();return e?.length?ek`<action-nav class="branch-item__collapsed-actions">${e}</action-nav>`:eC}createWebviewCommandLinkWithBranchRef(e,t){return this._webview.createCommandLink(e,t?{...t,...this.branchRef}:this.branchRef)}renderTimestamp(){let{timestamp:e}=this.branch;return null==e?eC:ek`<formatted-date
			tooltip="Last commit on "
			.date=${new Date(e)}
			class="branch-item__date"
		></formatted-date>`}renderBranchItem(e){let t=this.renderWip(),r=this.renderTracking(),o=this.renderAvatars(),i=this.branch.opened?void 0:this.renderBranchIndicator?.(),n=this.renderMergeTargetStatus(),a=this.renderTimestamp();return ek`
			<gl-work-item
				?primary=${!this.branch.opened}
				?nested=${!this.branch.opened}
				.indicator=${this.branchCardIndicator}
				?expanded=${this.expanded}
			>
				<div class="branch-item__section">
					<p class="branch-item__grouping">
						<span class="branch-item__icon"> ${this.renderBranchIcon()} </span>
						<span class="branch-item__name">${this.branch.name}</span>
					</p>
				</div>
				${eF(a||i||t||r||o,()=>ek`
						<div class="branch-item__section branch-item__section--details" slot="context">
							<p class="branch-item__changes">${a}${i}${t}${r}${o}</p>
						</div>
					`)}
				${eF(e||n,()=>ek`<div class="branch-item__actions" slot="actions">
							${n??eC}${e??eC}
						</div>`)}
				<span class="branch-item__summary" slot="summary">${this.renderTracking(!0)} ${o}</span>
			</gl-work-item>
		`}renderBranchIcon(){let e=this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0;return ek`<gl-branch-icon
			branch="${this.branch.name}"
			status="${this.branch.status}"
			?hasChanges=${e}
			upstream=${this.branch.upstream?.name}
			?worktree=${null!=this.branch.worktree}
			?is-default=${this.branch.worktree?.isDefault??!1}
		></gl-branch-icon>`}renderPrItem(){if(!this.pr)return this.branch.upstream?.missing===!1&&this.expanded?ek`
					<div>
						<button-container grouping="split" layout="full">
							<gl-button
								class="branch-item__missing"
								appearance="secondary"
								full
								href="${this._webview.createCommandLink("gitlens.createPullRequest:",{ref:this.branchRef,describeWithAI:!1,source:{source:"home",detail:"create-pr"}})}"
							>
								<code-icon icon="git-pull-request" slot="prefix"></code-icon>
								<span>Create a Pull Request</span>
							</gl-button>
							${this._homeState.orgSettings.ai&&this._homeState.aiEnabled&&this.remote?.provider?.supportedFeatures?.createPullRequestWithDetails?ek`<gl-button
										class="branch-item__missing"
										tooltip="Create a Pull Request with AI (Preview)"
										appearance="secondary"
										href="${this._webview.createCommandLink("gitlens.createPullRequest:",{ref:this.branchRef,describeWithAI:!0,source:{source:"home",detail:"create-pr"}})}"
									>
										<code-icon icon="sparkle"></code-icon>
									</gl-button>`:eC}
						</button-container>
					</div>
				`:eC;let e=this.branch.opened?sQ(sX(this.pr,this.launchpadItem))??"base":void 0,t=this.renderPrActions();return ek`
			<gl-work-item ?expanded=${this.expanded} ?nested=${!this.branch.opened} .indicator=${e}>
				<div class="branch-item__section">
					<p class="branch-item__grouping">
						<span class="branch-item__icon">
							<pr-icon ?draft=${this.pr.draft} state=${this.pr.state} pr-id=${this.pr.id}></pr-icon>
						</span>
						<a href=${this.pr.url} class="branch-item__name branch-item__name--secondary"
							>${this.pr.title}</a
						>
						<span class="branch-item__identifier">#${this.pr.id}</span>
					</p>
				</div>
				${this.renderLaunchpadItem()}
				${eF(null!=t,()=>ek`<div class="branch-item__actions" slot="actions">${t}</div>`)}
			</gl-work-item>
		`}renderLaunchpadItem(){if(null==this.launchpadItem)return eC;let e=sX(this.pr,this.launchpadItem);if(null==e)return eC;let t=aI.get(e),r=aB.get(e);if(null==t||null==r)return eC;let o=r.match(/\$\((.*?)\)/)[1].replace("gitlens","gl"),i=function(e,t){if(null==e||0===e.length)return e;if(null==t)return e.replace(rb,"");let r=function(e){let t=rf.get(e);if(null!=t)return t;t=[];let r=e.length,o=0;for(;o<r;){let r=e.indexOf("${",o);if(-1===r)break;let i=e.indexOf("}",r);if(-1===i)break;let n=r+2,a="",c="",h="",p=!1,u="right",g="";if("'"===e[n]){let t=++n;if(-1===(n=e.indexOf("'",n)))break;t!==n&&(c=e.slice(t,n)),n++}else if(!rv(e.charCodeAt(n))){let t=n++;for(;n<i&&!rv(e.charCodeAt(n));)n++;t!==n&&(c=e.slice(t,n))}for(;n<i;){let t=e.charCodeAt(n);if(rv(t))a+=e[n++];else{if(124!==t)break;for(;n<i;){if((t=e.charCodeAt(++n))>=48&&t<=57){h+=e[n];continue}63===t?(p=!0,n++):45===t&&(u="left",n++);break}}}if(n<i){if("'"===e[n]){let t=++n;if(-1===(n=e.indexOf("'",n)))break;t!==n&&(g=e.slice(t,n)),n++}else if(!rv(e.charCodeAt(n))){let t=n++;for(;n<i&&!rv(e.charCodeAt(n));)n++;t!==n&&(g=e.slice(t,n))}}o=i+1,t.push({key:a,start:r,end:o,options:{prefix:c||void 0,suffix:g||void 0,truncateTo:h?parseInt(h,10):void 0,collapseWhitespace:p,padDirection:u}})}return rf.set(e,t),t}(e);if(0===r.length)return e;let o=0,i="";for(let n of r)i+=e.slice(o,n.start)+(t[n.key]??""),o=n.end;return o<e.length&&(i+=e.slice(o)),i}(aT.get(this.launchpadItem.category)[1],{author:this.launchpadItem.author?.username??"unknown",createdDateRelative:rp(new Date(this.launchpadItem.createdDate))});return ek`<div class="branch-item__section branch-item__section--details" slot="context">
				<p class="launchpad-grouping--${sQ(e)}">
					<gl-tooltip content="${i}">
						<a
							href=${oQ("gitlens.showLaunchpad",{source:"home",state:{id:{uuid:this.launchpadItem.uuid,group:e}}})}
							class="launchpad__grouping"
						>
							<code-icon icon="${o}"></code-icon
							><span class="branch-item__category">${t.toUpperCase()}</span></a
						>
					</gl-tooltip>
				</p>
			</div>
			${o?ek`<span
						class="branch-item__summary launchpad-grouping--${sQ(e)}"
						slot="summary"
						><gl-tooltip placement="bottom" content="${t}"
							><code-icon icon="${o}"></code-icon></gl-tooltip
					></span>`:eC}`}renderMergeTargetStatus(){return this.showUpgrade?ek`<gl-merge-target-upgrade
				class="branch-item__merge-target"
				.state=${this._homeState.subscription.state}
			></gl-merge-target-upgrade>`:this.branch.mergeTarget?ek`<gl-merge-target-status
			class="branch-item__merge-target"
			.branch=${this.branch}
			.targetPromise=${this.branch.mergeTarget}
		></gl-merge-target-status>`:eC}renderIssuesItem(){if(![...this.issues??[],...this.autolinks??[]].length)return eC;let e=this.branch.opened?"base":void 0;return ek`
			<gl-work-item ?expanded=${this.expanded} ?nested=${!this.branch.opened} .indicator=${e}>
				<div class="branch-item__section">${this.renderIssues()}</div>
			</gl-work-item>
		`}toggleExpanded(e=!this.expanded){this.expanded=e,queueMicrotask(()=>{this.emit("gl-branch-card-expand-toggled",{expanded:e})})}};sZ([P({context:"state",subscribe:!0}),ez()],GlBranchCardBase.prototype,"_homeState",2),sZ([P({context:"webview"})],GlBranchCardBase.prototype,"_webview",2),sZ([eD()],GlBranchCardBase.prototype,"repo",2),sZ([eD({type:Boolean})],GlBranchCardBase.prototype,"showUpgrade",2),sZ([eD({type:Object})],GlBranchCardBase.prototype,"branch",1),sZ([ez()],GlBranchCardBase.prototype,"_autolinks",2),sZ([ez()],GlBranchCardBase.prototype,"_contributors",2),sZ([ez()],GlBranchCardBase.prototype,"_issues",2),sZ([ez()],GlBranchCardBase.prototype,"_pr",2),sZ([ez()],GlBranchCardBase.prototype,"_launchpadItem",2),sZ([ez()],GlBranchCardBase.prototype,"_mergeTarget",2),sZ([ez()],GlBranchCardBase.prototype,"_remote",2),sZ([ez()],GlBranchCardBase.prototype,"_wip",2),sZ([eD({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"busy",2),sZ([eD({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"expanded",2),sZ([eD({type:Boolean,reflect:!0})],GlBranchCardBase.prototype,"expandable",2),sZ([re("expandable")],GlBranchCardBase.prototype,"onExpandableChanged",1);let sY=class extends GlBranchCardBase{render(){return ek`
			<gl-card class="branch-item" focusable .indicator=${this.cardIndicator}>
				<div class="branch-item__container">
					${this.renderBranchItem(this.renderBranchActions())}${this.renderPrItem()}${this.renderIssuesItem()}
				</div>
				${this.renderCollapsedActions()}
			</gl-card>
		`}getCollapsedActions(){let e=[];return this.isWorktree?e.push(ek`<action-item
					label="Open Worktree"
					alt-label="Open Worktree in New Window"
					icon="browser"
					alt-icon="empty-window"
					href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openWorktree:")}
					alt-href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openWorktree:",{location:"newWindow"})}
				></action-item>`):e.push(ek`<action-item
					label="Switch to Branch..."
					icon="gl-switch"
					href=${this.createWebviewCommandLinkWithBranchRef("gitlens.switchToBranch:")}
				></action-item>`),e.push(ek`<action-item
				label="Open in Commit Graph"
				icon="gl-graph"
				href=${this.createWebviewCommandLinkWithBranchRef("gitlens.showInCommitGraph:",{type:"branch"})}
			></action-item>`,ek`<action-item
				label=${this.isWorktree?"Open in Worktrees View":"Open in Branches View"}
				icon="arrow-right"
				href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openInView.branch:")}
			></action-item>`),e}getBranchActions(){let e=[],t=this._homeState.orgSettings.ai&&this._homeState.aiEnabled;return this.isWorktree?(e.push(ek`<action-item
					label="Open Worktree"
					alt-label="Open Worktree in New Window"
					icon="browser"
					alt-icon="empty-window"
					href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openWorktree:")}
					alt-href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openWorktree:",{location:"newWindow"})}
				></action-item>`),t&&(this.wip?.workingTreeState!=null&&this.wip.workingTreeState.added+this.wip.workingTreeState.changed+this.wip.workingTreeState.deleted>0?e.push(ek`<action-item
							label="Explain Working Changes (Preview)"
							icon="sparkle"
							href=${this.createWebviewCommandLinkWithBranchRef("gitlens.ai.explainWip:")}
						></action-item>`):e.push(ek`<action-item
							label="Explain Branch Changes (Preview)"
							icon="sparkle"
							href=${this.createWebviewCommandLinkWithBranchRef("gitlens.ai.explainBranch:")}
						></action-item>`))):(e.push(ek`<action-item
					label="Switch to Branch..."
					icon="gl-switch"
					href=${this.createWebviewCommandLinkWithBranchRef("gitlens.switchToBranch:")}
				></action-item>`),t&&e.push(ek`<action-item
						label="Explain Branch Changes (Preview)"
						icon="sparkle"
						href=${this.createWebviewCommandLinkWithBranchRef("gitlens.ai.explainBranch:")}
					></action-item>`)),e.push(ek`<action-item
				label="Fetch"
				icon="repo-fetch"
				href=${this.createWebviewCommandLinkWithBranchRef("gitlens.fetch:")}
			></action-item>`),e.push(ek` <action-item
				label="Visualize Branch History"
				icon="graph-scatter"
				href=${this._webview.createCommandLink("gitlens.visualizeHistory.branch:",{type:"branch",repoPath:this.repo,branchId:this.branch.id})}
			></action-item>`),e.push(ek`<action-item
				label="Open in Commit Graph"
				icon="gl-graph"
				href=${this.createWebviewCommandLinkWithBranchRef("gitlens.showInCommitGraph:",{type:"branch"})}
			></action-item>`,ek`<action-item
				label=${this.isWorktree?"Open in Worktrees View":"Open in Branches View"}
				icon="arrow-right"
				href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openInView.branch:")}
			></action-item>`),e}getPrActions(){return[ek`<action-item
				label="Open Pull Request Changes"
				icon="request-changes"
				href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openPullRequestChanges:")}
			></action-item>`,ek`<action-item
				label="Compare Pull Request"
				icon="git-compare"
				href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openPullRequestComparison:")}
			></action-item>`,ek`<action-item
				label="Open Pull Request Details"
				icon="eye"
				href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openPullRequestDetails:")}
			></action-item>`]}renderBranchIndicator(){}};sY=sZ([eE("gl-branch-card")],sY);let sJ=class extends lit_element_i{constructor(){super(...arguments),this.primary=!1,this.nested=!1,this.expanded=!1}render(){return ek`<gl-card
			.density=${this.primary?"tight":void 0}
			.grouping=${!1===this.nested?void 0:this.primary?"item-primary":"item"}
			.indicator=${this.indicator}
			>${this.renderContent()}</gl-card
		>`}renderContent(){let e=this.querySelectorAll('[slot="context"]').length>0||this.querySelectorAll('[slot="actions"]').length>0;return ek`
			<div class=${nR({"work-item":!0,"work-item_content-empty":!e})}>
				<header class="work-item__header">
					<slot class="work-item__main"></slot>
					${this.renderSummary()}
				</header>
				<div class="work-item__content">
					<slot class="work-item__context" name="context"></slot>
					<slot class="work-item__actions" name="actions"></slot>
				</div>
			</div>
		`}renderSummary(){return this.expanded?eC:ek`<slot class="work-item__summary" name="summary"></slot>`}};function sX(e,t){if(null==t||e?.state!=="opened"||e.draft&&"unassigned-reviewers"===t.category)return;let r=aE.get(t.category);if(null!=r&&"other"!==r&&"draft"!==r&&"current-branch"!==r)return r}function sQ(e){switch(e){case"mergeable":return"mergeable";case"blocked":return"blocked";case"follow-up":case"needs-review":return"attention"}}function s0(e){let t=[];return e.added&&t.push(`${rw("file",e.added??0)} added`),e.changed&&t.push(`${rw("file",e.changed??0)} changed`),e.deleted&&t.push(`${rw("file",e.deleted??0)} deleted`),t}sJ.styles=[D`
			.work-item {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			.work-item_content-empty {
				gap: 0;
			}

			.work-item__header {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				gap: 0.8rem;
			}

			.work-item__main {
				display: block;
				flex: 1;
				min-width: 0;
			}

			.work-item__summary {
				display: block;
				flex: none;
			}

			.work-item__content {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				max-height: 100px;

				transition-property: opacity, max-height, display;
				transition-duration: 0.2s;
				transition-behavior: allow-discrete;
			}

			:host(:not([expanded])) .work-item__content {
				display: none;
				opacity: 0;
				max-height: 0;
			}

			gl-card::part(base) {
				margin-block-end: 0;
				padding-top: var(--gl-card-vertical-padding, 0.8rem);
				padding-bottom: var(--gl-card-vertical-padding, 0.8rem);
			}
		`],sZ([eD({type:Boolean,reflect:!0})],sJ.prototype,"primary",2),sZ([eD({type:Boolean,reflect:!0})],sJ.prototype,"nested",2),sZ([eD({reflect:!0})],sJ.prototype,"indicator",2),sZ([eD({type:Boolean,reflect:!0})],sJ.prototype,"expanded",2),sJ=sZ([eE("gl-work-item")],sJ);var s1=Object.defineProperty,s2=Object.getOwnPropertyDescriptor,s3=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?s2(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&s1(t,r,n),n};let s5=class extends lit_element_i{render(){return ek`<slot></slot>`}};s5.styles=D`
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
	`,s5=s3([eE("gl-breadcrumbs")],s5);let s4=class extends lit_element_i{constructor(){super(...arguments),this.collapsibleState="none",this._shrink=1,this.onToggleCollapse=e=>{e.preventDefault(),e.stopPropagation(),e instanceof KeyboardEvent&&"Enter"!==e.key&&" "!==e.key||(this.collapsed=!this.collapsed)}}get collapsed(){return this._collapsed??"collapsed"===this.collapsibleState}set collapsed(e){this._collapsed=e}get collapsible(){return"none"!==this.collapsibleState}get shrink(){return this._shrink}set shrink(e){let t=this._shrink;this._shrink=e,this.style.setProperty("--gl-breadcrumb-item-shrink",String(e)),this.requestUpdate("shrink",t)}render(){let{collapsed:e,collapsible:t}=this;return ek`<div class=${nR({"breadcrumb-item":!0,collapsible:t})}>
			<span class="breadcrumb-content">
				${this.renderIcon(t,e)}
				<slot class="breadcrumb-label"></slot>
			</span>
			<slot name="children"></slot>
		</div>`}renderIcon(e,t){return this.icon?e||this.iconTooltip?ek`<gl-tooltip
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
		</gl-tooltip>`:ek`<code-icon class="breadcrumb-icon" icon="${this.icon}"></code-icon>`:eC}};s4.styles=[oB,D`
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
		`],s3([ez()],s4.prototype,"_collapsed",2),s3([eD({type:Boolean,reflect:!0})],s4.prototype,"collapsed",1),s3([eD({type:String})],s4.prototype,"collapsibleState",2),s3([eD()],s4.prototype,"icon",2),s3([eD()],s4.prototype,"iconTooltip",2),s3([eD({type:Number})],s4.prototype,"shrink",1),s4=s3([eE("gl-breadcrumb-item")],s4);let s6=class extends lit_element_i{render(){return ek`<slot></slot>`}};s6.styles=D`
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
	`,s6=s3([eE("gl-breadcrumb-item-child")],s6);var s8=Object.defineProperty,s7=Object.getOwnPropertyDescriptor,s9=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?s7(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&s8(t,r,n),n};let le=class extends lit_element_i{constructor(){super(...arguments),this.lines=1}render(){let e=`--skeleton-lines: ${this.lines};`;return ek`<div class="skeleton" style=${e}></div>`}};le.styles=D`
		:host {
			--skeleton-line-height: 1.2;
			--skeleton-lines: 1;
		}

		.skeleton {
			position: relative;
			display: block;
			overflow: hidden;
			border-radius: 0.25em;
			width: 100%;
			height: calc(1em * var(--skeleton-line-height, 1.2) * var(--skeleton-lines, 1));
			background-color: var(--color-background--lighten-15);
		}

		.skeleton::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: linear-gradient(
				to right,
				transparent 0%,
				var(--color-background--lighten-15) 20%,
				var(--color-background--lighten-30) 60%,
				transparent 100%
			);
			transform: translateX(-100%);
			animation: skeleton-loader 2s ease-in-out infinite;
		}

		@keyframes skeleton-loader {
			100% {
				transform: translateX(100%);
			}
		}
	`,s9([eD({type:Number})],le.prototype,"lines",2),le=s9([eE("skeleton-loader")],le);let lt=D`
	:host {
		--gl-color-mix-base: var(
			--gl-card-background,
			color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%)
		);
	}

	.card {
		display: block;
		flex-direction: column;
		gap: 0.8rem;
		padding: 0.8rem 1.2rem;
		border-radius: 0.4rem;
		border-inline-start: 0.3rem solid transparent;
		/* border-inline-end: 0.3rem solid transparent; */
		background-color: var(--gl-card-background, color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%));
		margin-block-end: 0.6rem;
		position: relative;
	}

	:host-context(.vscode-dark) .card.is-base,
	:host-context(.vscode-high-contrast) .card.is-base {
		border-inline-start-color: color-mix(in lab, var(--gl-color-mix-base) 100%, #fff 7%);
	}

	:host-context(.vscode-light) .card.is-base,
	:host-context(.vscode-high-contrast-light) .card.is-base {
		border-inline-start-color: color-mix(in lab, var(--gl-color-mix-base) 100%, #000 5%);
	}

	.card.is-active {
		border-inline-start-color: var(--gl-card-indicator-border, var(--vscode-gitDecoration-addedResourceForeground));
	}

	.card.is-cherry-picking,
	.card.is-merging,
	.card.is-rebasing,
	.card.is-reverting {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor)
		);
	}

	.card.is-conflict {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor)
		);
	}

	.card.is-issue-open {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-openAutolinkedIssueIconColor) 0%, transparent)
		);
	}

	.card.is-issue-closed {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-closedAutolinkedIssueIconColor) 0%, transparent)
		);
	}

	.card.is-pr-open {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-openPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-pr-closed {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-closedPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-pr-merged {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-mergedPullRequestIconColor) 0%, transparent)
		);
	}

	.card.is-mergeable {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(var(--vscode-gitlens-launchpadIndicatorMergeableColor))
		);
	}

	.card.is-blocked {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-launchpadIndicatorBlockedColor)
		);
	}

	.card.is-attention {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-launchpadIndicatorAttentionColor)
		);
	}

	.card.is-branch-merged {
		border-inline-start-color: var(--gl-card-indicator-border, var(--vscode-gitlens-mergedPullRequestIconColor));
	}

	.card.is-branch-synced {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-decorations\\.branchUpToDateForegroundColor) 20%, transparent)
		);
	}

	.card.is-branch-diverged {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			color-mix(in lab, var(--vscode-gitlens-decorations\\.branchDivergedForegroundColor) 70%, transparent)
		);
	}

	.card.is-branch-behind {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchBehindForegroundColor)
		);
	}

	.card.is-branch-ahead {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchBehindForegroundColor)
		);
	}

	.card.is-info,
	.card.is-branch-changes {
		border-inline-start-color: var(--gl-card-indicator-border, color-mix(in lab, #1a79ff 80%, transparent));
	}

	.card.is-branch-missingUpstream {
		border-inline-start-color: var(
			--gl-card-indicator-border,
			var(--vscode-gitlens-decorations\\.branchMissingUpstreamForegroundColor)
		);
	}

	.card--focusable {
		cursor: pointer;
	}

	.card--focusable:focus,
	.card:focus-within,
	.card:hover {
		background-color: var(
			--gl-card-hover-background,
			color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 8%)
		);
	}

	.card--focusable:focus-visible {
		outline: 0.1rem solid var(--vscode-focusBorder);
	}

	.card__actions {
		position: absolute;
		top: 0.4rem;
		right: 0.4rem;
		display: block;
	}

	.card__content {
		display: block;
	}

	.card__content::slotted(:first-child) {
		margin-block-start: 0;
	}

	.card__content::slotted(:last-child) {
		margin-block-end: 0;
	}

	:host-context(.vscode-dark) .card--grouping-item,
	:host-context(.vscode-high-contrast) .card--grouping-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 3%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #fff 1.5%);
	}

	:host-context(.vscode-light) .card--grouping-item,
	:host-context(.vscode-high-contrast-light) .card--grouping-item {
		--gl-card-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 8%);
		--gl-card-hover-background: color-mix(in lab, var(--vscode-sideBar-background) 100%, #000 10%);
	}

	.card--grouping-item-primary {
		--gl-card-background: transparent;
		--gl-card-hover-background: transparent;
	}

	.card--density-tight {
		padding: 0;
	}
`;var lr=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,li=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lo(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lr(t,r,n),n};let ln=class extends lit_element_i{constructor(){super(...arguments),this._focusable=!1}get focusable(){return null!=this.href||this._focusable}set focusable(e){let t=this._focusable;this._focusable=e,this.requestUpdate("focusable",t)}get classNames(){return{card:!0,"card--focusable":this.focusable,[`card--grouping-${this.grouping}`]:null!=this.grouping,[`card--density-${this.density}`]:null!=this.density,[`is-${this.indicator}`]:null!=this.indicator}}render(){return null!=this.href?ek`<a part="base" class=${nR(this.classNames)} href=${this.href}
				>${this.renderContent()}</a
			>`:ek`<div part="base" tabindex=${this.focusable?0:-1} class=${nR(this.classNames)}>
			${this.renderContent()}
		</div>`}renderContent(){return ek`
			<slot class="card__content"></slot>
			<slot name="actions" class="card__actions"></slot>
		`}focus(e){null!=this.href?this.shadowRoot?.querySelector("a")?.focus(e):super.focus(e)}};ln.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ln.styles=[lt],li([eD({reflect:!0})],ln.prototype,"indicator",2),li([eD({reflect:!0})],ln.prototype,"grouping",2),li([eD({reflect:!0})],ln.prototype,"density",2),li([eD()],ln.prototype,"href",2),li([eD({type:Boolean,reflect:!0})],ln.prototype,"focusable",1),ln=li([eE("gl-card")],ln);var la=Object.defineProperty,ls=Object.getOwnPropertyDescriptor;let ll=class extends lit_element_i{};ll.styles=[oI,D`
			:host {
				display: block;
				height: 0;
				margin: 0.6rem;
				border-top: 0.1rem solid var(--vscode-menu-separatorBackground);
			}
		`],ll=((e,t,r,o)=>{for(var i,n=o>1?void 0:o?ls(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&la(t,r,n),n})([eE("menu-divider")],ll);var lc=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,lh=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?ld(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lc(t,r,n),n};let lp=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.role="option"}updateInteractiveState(){this.tabIndex=this.disabled?-1:"option"===this.role?0:-1}updated(e){(e.has("disabled")||e.has("role"))&&this.updateInteractiveState()}render(){return this.href?ek`<a href=${this.href}><slot></slot></a>`:ek`<slot></slot>`}};lp.styles=[oI,D`
			:host {
				display: block;
				font-family: inherit;
				border: none;
				padding: 0 0.6rem;
				cursor: pointer;
				color: var(--vscode-menu-foreground);
				background-color: var(--vscode-menu-background);
				text-align: left;
				height: auto;
				line-height: 2.2rem;
				-webkit-font-smoothing: auto;
				border-radius: var(--menu-item-radius, 0.3rem);
			}

			:host([role='option']:hover) {
				color: var(--vscode-menu-selectionForeground);
				background-color: var(--vscode-menu-selectionBackground);
			}

			:host([disabled]) {
				pointer-events: none;
				cursor: default;
				opacity: 0.5;
			}

			:host([aria-selected='true']) {
				opacity: 1;
				color: var(--vscode-menu-selectionForeground);
				background-color: var(--vscode-menu-background);
			}

			:host([href]) {
				padding-inline: 0;
			}

			a {
				display: block;
				color: inherit;
				text-decoration: none;
				padding: 0 0.6rem;
			}
		`],lh([eD({type:Boolean,reflect:!0})],lp.prototype,"disabled",2),lh([eD({reflect:!0})],lp.prototype,"href",2),lh([eD({reflect:!0})],lp.prototype,"role",2),lp=lh([eE("menu-item")],lp);var lu=Object.defineProperty,lg=Object.getOwnPropertyDescriptor;let lm=class extends lit_element_i{render(){return ek`<slot></slot>`}};lm.styles=[oI,D`
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
		`],lm=((e,t,r,o)=>{for(var i,n=o>1?void 0:o?lg(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lu(t,r,n),n})([eE("menu-label")],lm);let lb=D`
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
`,lf=D`
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
`;var lv=Object.defineProperty,lw=Object.getOwnPropertyDescriptor,ly=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lw(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lv(t,r,n),n};let l_=class extends lit_element_i{constructor(){super(...arguments),this.pulse=!1}render(){return ek`<slot class="indicator${this.pulse?" indicator--pulse":""}"></slot>`}};l_.styles=[lb,lf],ly([eD({type:Boolean})],l_.prototype,"pulse",2),l_=ly([eE("gl-indicator")],l_);var lk=Object.defineProperty,lx=Object.getOwnPropertyDescriptor,l$=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lx(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lk(t,r,n),n};let lC=class extends GlElement{constructor(){super(...arguments),this.connectIcon=!0,this.disabled=!1,this.icon=!0,this.hasMultipleRepositories=!1,this.expandable=!1}get icons(){if(this.repository?.provider===void 0)return;let e=0;if(this.icon&&e++,this.connectIcon&&this.repository.provider.integration?.connected===!1&&e++,0!==e)return e}get displayName(){return this.repository?.name??"none selected"}render(){return ek`
			${this.renderProviderIcon()}
			<gl-button
				class="truncated-button"
				appearance="toolbar"
				?disabled=${this.disabled}
				@click=${e=>this.emit("gl-click",{event:e,part:"label",repository:this.repository})}
			>
				<span class="truncated-button__label">${this.displayName}</span>
				${this.hasMultipleRepositories?ek`<code-icon
							slot="suffix"
							class="picker-icon"
							icon="chevron-down"
							aria-hidden="true"
						></code-icon>`:eC}
				<slot name="tooltip" slot="tooltip">${this.displayName}</slot>
			</gl-button>
		`}renderProviderIcon(){if(!this.icon)return eC;let{repository:e}=this;if(!e?.provider)return ek`
				<gl-button part="provider-icon" appearance="toolbar" ?disabled=${!0}>
					<code-icon icon="gl-repository" aria-hidden="true"></code-icon>
				</gl-button>
			`;let{provider:t}=e,r=t.integration?.connected;return ek`<gl-popover placement="bottom" trigger="hover click focus">
				<gl-button
					slot="anchor"
					part="provider-icon"
					appearance="toolbar"
					href=${t.url??eC}
					aria-label=${`Open Repository on ${t.name}`}
					@click=${e=>this.emit("gl-click",{event:e,part:"icon",repository:this.repository})}
				>
					<code-icon
						icon=${"cloud"===t.icon?"cloud":`gl-provider-${t.icon}`}
						aria-hidden="true"
					></code-icon>
					${eF(r,()=>ek`<gl-indicator class="indicator-dot"></gl-indicator>`)}
				</gl-button>
				<span slot="content">
					Open Repository on ${t.name}
					<hr />
					${eF(r,()=>ek`
							<span>
								<code-icon style="margin-top: -3px" icon="check" aria-hidden="true"></code-icon>
								Connected to ${t.name}
							</span>
						`,()=>!1!==r?eC:ek`
								<code-icon style="margin-top: -3px" icon="plug" aria-hidden="true"></code-icon>
								<a
									href=${oQ("gitlens.connectRemoteProvider",{repoPath:e.path,remote:t.bestRemoteName})}
								>
									Connect to ${e.provider.name}
								</a>
								<span>&mdash; not connected</span>
							`)}
				</span>
			</gl-popover>
			${this.renderConnectIcon()}`}renderConnectIcon(){if(!this.connectIcon)return eC;let{repository:e}=this;if(!e?.provider)return eC;let{provider:t}=e;return t.integration?.connected!==!1?eC:ek`
			<gl-button
				part="connect-icon"
				appearance="toolbar"
				href=${oQ("gitlens.connectRemoteProvider",{repoPath:e.path,remote:t.bestRemoteName})}
			>
				<code-icon icon="plug" style="color: var(--titlebar-fg)"></code-icon>
				<span slot="tooltip">
					Connect to ${t.name}
					<hr />
					View pull requests and issues in Home, Commit Graph, Launchpad, autolinks, and more
				</span>
			</gl-button>
		`}};lC.styles=[o1,o2,sC,sP,D`
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
		`,sS],l$([eD({type:Boolean})],lC.prototype,"connectIcon",2),l$([eD({type:Boolean})],lC.prototype,"disabled",2),l$([eD({type:Boolean})],lC.prototype,"icon",2),l$([eD({type:Object})],lC.prototype,"repository",2),l$([eD({type:Boolean})],lC.prototype,"hasMultipleRepositories",2),l$([eD({type:Object})],lC.prototype,"source",2),l$([eD({type:Boolean,reflect:!0})],lC.prototype,"expandable",2),l$([eD({type:Number,reflect:!0})],lC.prototype,"icons",1),lC=l$([eE("gl-repo-button-group")],lC);let lS={"cherry-pick":{label:"Cherry picking",conflicts:"Resolve conflicts to continue cherry picking",directionality:"into"},merge:{label:"Merging",conflicts:"Resolve conflicts to continue merging",directionality:"into"},rebase:{label:"Rebasing",conflicts:"Resolve conflicts to continue rebasing",directionality:"onto",pending:"Pending rebase of"},revert:{label:"Reverting",conflicts:"Resolve conflicts to continue reverting",directionality:"in"}},lP="0000000000000000000000000000000000000000:",lO=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,lA=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,lL=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,lR=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,lB=/(^[0-9a-f]{40}([\^@~:]\S*)?$)|(^[0]{40}(:|-)$)/,lI=/^(.*?)([\^@~:].*)?$/,lE=/^[0]{40}(?:[\^@~:]\S*)?:?$/,lT=/^[0]{40}([\^@~]\S*)?:$/;function lD(e,t){return!!t&&e.test(t)}function lz(e,t=!1){return"0000000000000000000000000000000000000000"===e||e===lP||!t&&lD(lE,e)}var lM=Object.defineProperty,lN=Object.getOwnPropertyDescriptor,lj=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lN(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lM(t,r,n),n};let lF="gl-copy-container",lU=class extends lit_element_i{constructor(){super(...arguments),this.copyLabel="Copy",this.copiedLabel="Copied",this.disabled=!1,this.placement="top",this.timeout=1e3,this.onFocusIn=()=>{this.tooltip?.show()},this.onFocusOut=()=>{this.tooltip?.hide()}}connectedCallback(){super.connectedCallback?.(),this.label=this.copyLabel,this.addEventListener("focusin",this.onFocusIn),this.addEventListener("focusout",this.onFocusOut)}disconnectedCallback(){this.cancelResetTimer(),this.removeEventListener("focusin",this.onFocusIn),this.removeEventListener("focusout",this.onFocusOut),super.disconnectedCallback?.()}render(){return this.content||this.disabled?ek`<gl-tooltip
			tabindex="0"
			.content="${this.label}"
			placement="${this.placement??eC}"
			@click=${this.onClick}
			@keydown=${this.onKeydown}
		>
			<slot></slot>
		</gl-tooltip>`:eC}async onClick(e){if(this.cancelResetTimer(),this.content)try{await navigator.clipboard.writeText(this.content),this.label=this.copiedLabel}catch{this.label="Unable to Copy"}else this.label="Nothing to Copy";this.createResetTimer()}onKeydown(e){("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onClick(e))}cancelResetTimer(){null!=this._resetTimer&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}createResetTimer(){this._resetTimer=setTimeout(()=>{this._resetTimer=void 0,this.label=this.copyLabel},this.timeout)}};lU.tagName=lF,lU.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},lU.styles=D`
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
	`,lj([eD({reflect:!0})],lU.prototype,"appearance",2),lj([eD({reflect:!1})],lU.prototype,"content",2),lj([eD()],lU.prototype,"copyLabel",2),lj([eD()],lU.prototype,"copiedLabel",2),lj([eD({type:Boolean,reflect:!0})],lU.prototype,"disabled",2),lj([eD()],lU.prototype,"placement",2),lj([eD({type:Number})],lU.prototype,"timeout",2),lj([ez()],lU.prototype,"label",2),lj([eN("gl-tooltip")],lU.prototype,"tooltip",2),lU=lj([eE(lF)],lU);var lq=Object.defineProperty,lW=Object.getOwnPropertyDescriptor,lH=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lW(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lq(t,r,n),n};let lG=D`
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
`,lV=class extends lit_element_i{constructor(){super(...arguments),this.size=12}get label(){return function(e,t){if("0000000000000000000000000000000000000000-"===e)return"(deleted)";if(!e)return t?.strings?.working??"";if(lz(e))return!function(e,t=!1){return e===lP||!t&&lD(lT,e)}(e)?t?.strings?.uncommitted??"Working Tree":t?.strings?.uncommittedStaged??"Index";if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return lA.test(e);case"qualified-double-dot":return lL.test(e);case"qualified-triple-dot":return lR.test(e);default:return lO.test(e)}}(e)||!lD(lB,e))return e;let r=lI.exec(e);if(null!=r){let[,e,t]=r;if(null!=t)return`${e.substring(0,7)}${t}`}return e.substring(0,7)}(this.sha,{strings:{uncommitted:"Working",uncommittedStaged:"Staged",working:"Working"}})}render(){return null==this.sha?eC:!this.sha||lz(this.sha)?ek`<span part="label" class="label--uncommitted">${this.label}</span>`:ek`<code-icon part="icon" class="icon" icon="git-commit" size="${this.size}"></code-icon
			><span part="label">${this.label}</span>`}};lV.styles=lG,lH([eD({type:String})],lV.prototype,"sha",2),lH([eD({type:Number})],lV.prototype,"size",2),lV=lH([eE("gl-commit-sha")],lV);let lZ=class extends lit_element_i{constructor(){super(...arguments),this.size=12}render(){return null==this.sha?eC:ek`<gl-copy-container .content=${this.sha} placement="top">
			<gl-commit-sha exportparts="icon, label" .sha=${this.sha} .size=${this.size}></gl-commit-sha>
		</gl-copy-container>`}};lZ.styles=lG,lH([eD({type:String})],lZ.prototype,"sha",2),lH([eD({type:Number})],lZ.prototype,"size",2),lZ=lH([eE("gl-commit-sha-copy")],lZ);var lK=Object.defineProperty,lY=Object.getOwnPropertyDescriptor,lJ=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?lY(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lK(t,r,n),n};let lX=class extends lit_element_i{constructor(){super(...arguments),this.conflicts=!1}get onSkipUrl(){return this.createPausedOperationCommandLink("skip")}get onContinueUrl(){return this.createPausedOperationCommandLink("continue")}get onAbortUrl(){return this.createPausedOperationCommandLink("abort")}get onOpenEditorUrl(){return this.createPausedOperationCommandLink("open")}get onShowConflictsUrl(){return this.createPausedOperationCommandLink("showConflicts")}createPausedOperationCommandLink(e){return this._webview.createCommandLink(`gitlens.pausedOperation.${e}:`,this.pausedOpStatus)}render(){return null==this.pausedOpStatus?eC:ek`
			<span class="status" part="base">
				<code-icon icon="warning" class="icon"></code-icon>
				${this.renderStatus(this.pausedOpStatus)}${this.renderActions()}
			</span>
		`}renderStatus(e){if("rebase"!==e.type){let t=lS[e.type],r=this.conflicts?t.conflicts:t.label;return ek`<span class="label"
				>${this.renderConflictsLink(r)} ${this.renderReference(e.incoming)}
				${t.directionality} ${this.renderReference(e.current)}</span
			>`}let t=e.steps.total>0,r=lS[e.type],o=this.conflicts?r.conflicts:t?r.label:r.pending;return ek`<span class="label"
				>${this.renderConflictsLink(o)} ${this.renderReference(e.incoming)}
				${r.directionality} ${this.renderReference(e.current??e.onto)}</span
			>${t?ek`<span class="steps"
						>(${e.steps.current.number}/${e.steps.total})</span
					>`:eC}`}renderConflictsLink(e){return this.conflicts?ek`<gl-tooltip hoist content="Show Conflicts">
			<a href="${this.onShowConflictsUrl}" class="link">${e}</a>
		</gl-tooltip>`:e}renderReference(e){let t=this._webview.webviewId,r="branch"===e.refType,o=this.createJumpUrl(e);return ek`<gl-tooltip hoist content=${"gitlens.graph"===t||"gitlens.views.graph"===t?r?"Jump to Branch":"Jump to Commit":r?"Open Branch in Commit Graph":"Open Commit in Commit Graph"}>
			<a href=${o} class="ref-link">
				${r?ek`<gl-branch-name .name=${e.name} .size=${12}></gl-branch-name>`:ek`<gl-commit-sha .sha=${e.ref} .size=${12}></gl-commit-sha>`}
			</a>
		</gl-tooltip>`}createJumpUrl(e){return oQ("gitlens.showInCommitGraph",{ref:e,source:{source:"merge-target"}})}renderActions(){if(null==this.pausedOpStatus)return eC;let e=this.pausedOpStatus.type;return ek`<action-nav class="actions">
			${eF("rebase"===e,()=>ek`<action-item
						label="Open in Rebase Editor"
						href=${this.onOpenEditorUrl}
						icon="edit"
					></action-item>`)}
			${eF("revert"!==e&&!("rebase"===e&&this.conflicts),()=>ek`
					<action-item label="Continue" icon="debug-continue" href=${this.onContinueUrl}></action-item>
				`)}
			${eF("merge"!==e,()=>ek`<action-item label="Skip" icon="debug-step-over" href=${this.onSkipUrl}></action-item>`)}
			<action-item label="Abort" href=${this.onAbortUrl} icon="circle-slash"></action-item>
		</action-nav>`}};lX.styles=[D`
			.status {
				--action-item-foreground: #000;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				gap: 0.6rem;
				width: 100%;
				max-width: 100%;
				margin-block: 0;
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor);
				color: #000;
				border-radius: 0.3rem;
				padding: 0.1rem 0.4rem;
			}

			:host([conflicts]) .status {
				--action-item-foreground: #fff;
				background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor);
				color: #fff;
			}

			.label {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.icon,
			.steps,
			.actions {
				flex: none;
			}

			.md-code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}

			gl-commit-sha::part(label) {
				font-weight: bold;
			}

			.link {
				color: inherit;
				text-decoration: underline dotted;
				text-underline-offset: 0.3rem;
				opacity: 0.9;

				&:hover {
					text-decoration: none;
					opacity: 1;
				}
			}

			.link--conflicts {
				margin-left: 1rem;
			}

			.ref-link {
				color: inherit;
				cursor: pointer;
				text-decoration: none !important;
			}
		`],lJ([P({context:"webview"})],lX.prototype,"_webview",2),lJ([eD({type:Boolean,reflect:!0})],lX.prototype,"conflicts",2),lJ([eD({type:Object})],lX.prototype,"pausedOpStatus",2),lX=lJ([eE("gl-merge-rebase-status")],lX);var lQ=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,l1=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?l0(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&lQ(t,r,n),n};let l2=class extends tT(lit_element_i){constructor(){super(...arguments),this.repoCollapsed=!0}get isPro(){return oX(this._homeState.subscription.state)}connectedCallback(){super.connectedCallback?.(),this._homeState.repositories.openCount>0&&this._activeOverviewState.run()}onBranchSelectorClicked(){this._ipc.sendCommand(t3,{command:"gitlens.switchToBranch:home",args:[{repoPath:this._activeOverviewState.state?.active.repoPath}]})}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?eC:this._activeOverviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>ek`<span>Error</span>`})}renderLoader(){return ek`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._activeOverviewState.state?this.renderLoader():this.renderComplete(this._activeOverviewState.state,!0)}renderComplete(e,t=!1){let r=e?.repository,o=e?.active;if(!r||!o)return ek`<span>None</span>`;let i=this._homeState.repositories.openCount>1;return ek`
			<gl-section ?loading=${t}>
				<gl-breadcrumbs slot="heading">
					<gl-breadcrumb-item collapsibleState="none" class="heading-repo-breadcrumb"
						><gl-repo-button-group
							.repository=${r}
							?disabled=${!i}
							?hasMultipleRepositories=${i}
							.source=${{source:"graph"}}
							?expandable=${!0}
							@gl-click=${this.onRepositorySelectorClicked}
							><span slot="tooltip">
								Switch to Another Repository...
								<hr />
								${r.name}
							</span></gl-repo-button-group
						></gl-breadcrumb-item
					>
					<gl-breadcrumb-item collapsibleState="none" icon="git-branch" class="heading-branch-breadcrumb"
						><gl-ref-button .ref=${o.reference} @click=${this.onBranchSelectorClicked}
							><span slot="tooltip">Switch to Another Branch... </span></gl-ref-button
						></gl-breadcrumb-item
					>
				</gl-breadcrumbs>
				<span class="section-heading-actions" slot="heading-actions">
					<gl-button
						aria-busy="${t??eC}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Fetch All"
						href=${this._webview.createCommandLink("gitlens.fetch:")}
						><code-icon icon="repo-fetch"></code-icon
					></gl-button>
					<gl-button
						aria-busy="${t??eC}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Visualize Repo History"
						href=${this._webview.createCommandLink("gitlens.visualizeHistory.repo:",{type:"repo",repoPath:this._activeOverviewState.state.repository.path})}
						><code-icon icon="graph-scatter"></code-icon></gl-button
					><gl-button
						aria-busy="${t??eC}"
						?disabled=${t}
						class="section-heading-action"
						appearance="toolbar"
						tooltip="Open in Commit Graph"
						href=${this._webview.createCommandLink("gitlens.showInCommitGraph:",{type:"repo",repoPath:this._activeOverviewState.state.repository.path})}
						><code-icon icon="gl-graph"></code-icon
					></gl-button>
				</span>
				${this.renderRepoBranchCard(o,r.path,t)}
			</gl-section>
		`}renderRepoBranchCard(e,t,r){return ek`<gl-active-branch-card
			.branch=${e}
			.repo=${t}
			?busy=${r}
			?showUpgrade=${!this.isPro}
		></gl-active-branch-card>`}onRepositorySelectorClicked(e){"label"===e.detail.part&&this._activeOverviewState.changeRepository()}};l2.styles=[o1,sK,o2,D`
			[hidden] {
				display: none;
			}

			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}

			gl-repo-button-group {
				text-transform: none;
			}

			gl-section::part(header) {
				margin-block-end: 0.2rem;
			}

			.section-heading-actions {
				flex: none;
				display: flex;
				align-items: center;
			}

			.section-heading-action {
				--button-padding: 0.2rem;
				--button-line-height: 1.2rem;
				/* margin-block: -1rem; */
			}

			.section-heading-provider {
				color: inherit;
			}

			.tooltip {
				text-transform: none;
			}

			.uppercase {
				text-transform: uppercase;
			}

			gl-breadcrumbs {
				--gl-tooltip-text-transform: none;
			}

			.heading-branch-breadcrumb {
				text-transform: none;
			}
		`],l1([P({context:"activeOverviewState"})],l2.prototype,"_activeOverviewState",2),l1([P({context:"state",subscribe:!0}),ez()],l2.prototype,"_homeState",2),l1([P({context:"ipc"})],l2.prototype,"_ipc",2),l1([P({context:"webview"})],l2.prototype,"_webview",2),l1([ez()],l2.prototype,"repoCollapsed",2),l2=l1([eE("gl-active-work")],l2);let l3=class extends GlBranchCardBase{connectedCallback(){super.connectedCallback?.(),this.toggleExpanded(!0)}render(){return ek`
			${this.renderBranchIndicator()}${this.renderIssuesItem()}${this.renderBranchItem(ek`${this.renderBranchStateActions()}${this.renderBranchActions()}`)}${this.renderPrItem()}
		`}renderActionsMenu(){let e=this._homeState.orgSettings.ai&&this._homeState.aiEnabled,t=this.busy,r=this.wip?.workingTreeState,o=null!=r&&r.added+r.changed+r.deleted>0,i=[];if(e)o&&(i.push(ek`<menu-item
						?disabled=${t}
						href=${oQ("gitlens.ai.generateCommitMessage",{repoPath:this.repo,source:"home"})}
						>Generate Commit Message</menu-item
					>`),i.push(ek`<menu-divider></menu-divider>`),i.push(ek`<menu-item
						?disabled=${t}
						href=${this.createWebviewCommandLinkWithBranchRef("gitlens.ai.explainWip:")}
						>Explain Working Changes (Preview)</menu-item
					>`)),i.push(ek`<menu-item
					?disabled=${t}
					href=${this.createWebviewCommandLinkWithBranchRef("gitlens.ai.explainBranch:")}
					>Explain Branch Changes (Preview)</menu-item
				>`),o&&(i.push(ek`<menu-divider></menu-divider>`),i.push(ek`<menu-item
						?disabled=${t}
						href=${this.createWebviewCommandLinkWithBranchRef("gitlens.createCloudPatch:")}
						>Share as Cloud Patch</menu-item
					>`));else if(o)return ek`
				<gl-button
					aria-busy=${t??eC}
					?disabled=${t}
					href=${this.createWebviewCommandLinkWithBranchRef("gitlens.createCloudPatch:")}
					appearance="secondary"
					tooltip="Share as Cloud Patch"
					><code-icon icon="gl-cloud-patch-share"></code-icon>
				</gl-button>
			`;if(0!==i.length)return ek`<gl-popover
			appearance="menu"
			trigger="click focus"
			placement="bottom-end"
			.arrow=${!1}
			distance="0"
		>
			<gl-button slot="anchor" appearance="toolbar" tooltipPlacement="top" aria-label="Additional Actions">
				<code-icon icon="ellipsis"></code-icon>
			</gl-button>
			<div slot="content">${i}</div>
		</gl-popover>`}renderBranchStateActions(){let{name:e,upstream:t}=this.branch,r=[],o=()=>0===r.length?this.renderActionsMenu():ek`<div><button-container>${r}${this.renderActionsMenu()}</button-container></div>`,i=this.busy,n=this.wip?.workingTreeState,a=null!=n&&n.added+n.changed+n.deleted>0;if(a&&r.push(ek`
				<gl-button
					aria-busy=${i??eC}
					?disabled=${i}
					href=${this.createWebviewCommandLinkWithBranchRef("gitlens.composeCommits:")}
					appearance="secondary"
					density="compact"
					><code-icon icon="wand" slot="prefix"></code-icon>Compose Commits...<span slot="tooltip"
						><strong>Compose Commits</strong> (Preview)<br /><i
							>Automatically or interactively organize changes into meaningful commits</i
						></span
					></gl-button
				>
			`),this.wip?.pausedOpStatus!=null)return o();if(t?.missing!==!1)return r.push(ek`
				<gl-button
					aria-busy=${i??eC}
					?disabled=${i}
					href=${this.createWebviewCommandLinkWithBranchRef("gitlens.publishBranch:")}
					appearance="secondary"
					density="compact"
				>
					<code-icon icon="cloud-upload" slot="${(a?void 0:"prefix")??eC}"></code-icon>
					${a?"":"Publish Branch"}
					<span slot="tooltip"
						>Publish (push) <strong>${e}</strong> to ${t?.name??"a remote"}</span
					>
				</gl-button>
			`),o();if(t?.state?.ahead||t?.state?.behind){let e=!!t.state.ahead,n=!!t.state.behind;if(e&&n)return r.push(ek`
					<gl-button
						aria-busy=${i??eC}
						?disabled=${i}
						href=${this._webview.createCommandLink("gitlens.pull:")}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-pull" slot="${(a?void 0:"prefix")??eC}"></code-icon>
						${a?"":"Pull"}
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill>
						<span slot="tooltip"
							>Pull${t?.name?ek` from <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
					<gl-button
						aria-busy=${i??eC}
						?disabled=${i}
						href=${this._webview.createCommandLink("gitlens.push:",{force:!0})}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-force-push"></code-icon>
						<span slot="tooltip"
							>Force Push${t?.name?ek` to <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
				`),o();if(n)return r.push(ek`
					<gl-button
						aria-busy=${i??eC}
						?disabled=${i}
						href=${this._webview.createCommandLink("gitlens.pull:")}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-pull" slot="${(a?void 0:"prefix")??eC}"></code-icon>
						${a?"":"Pull"}
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill>
						<span slot="tooltip"
							>Pull${t?.name?ek` from <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
				`),o();e&&r.push(ek`
					<gl-button
						aria-busy=${i??eC}
						?disabled=${i}
						href=${this._webview.createCommandLink("gitlens.push:")}
						appearance="secondary"
						density="compact"
					>
						<code-icon icon="repo-push" slot="prefix"></code-icon>
						${a?"":"Push"}
						<gl-tracking-pill
							.ahead=${t.state.ahead}
							.behind=${t.state.behind}
							slot="suffix"
						></gl-tracking-pill>
						<span slot="tooltip"
							>Push${t?.name?ek` to <strong>${t.name}</strong>`:""}</span
						>
					</gl-button>
				`)}return o()}renderBranchIndicator(){let e=this.wip;if(e?.pausedOpStatus!=null)return ek`<gl-merge-rebase-status
			?conflicts=${e.hasConflicts}
			.pausedOpStatus=${e.pausedOpStatus}
		></gl-merge-rebase-status>`}getBranchActions(){return[]}getPrActions(){return[ek`<action-item
				label="Open Pull Request Changes"
				icon="request-changes"
				href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openPullRequestChanges:")}
			></action-item>`,ek`<action-item
				label="Compare Pull Request"
				icon="git-compare"
				href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openPullRequestComparison:")}
			></action-item>`,ek`<action-item
				label="Open Pull Request Details"
				icon="eye"
				href=${this.createWebviewCommandLinkWithBranchRef("gitlens.openPullRequestDetails:")}
			></action-item>`]}getCollapsedActions(){return[]}renderIssuesItem(){return[...this.issues??[],...this.autolinks??[]].length?super.renderIssuesItem():this.expanded?ek`<div class="branch-item__row" full>
				<span class="branch-item__missing" full>Current work item</span>
				<gl-button
					class="associate-issue-action"
					appearance="toolbar"
					href=${oQ("gitlens.associateIssueWithBranch",{command:"associateIssueWithBranch",branch:this.branch.reference,source:"home"})}
					tooltip="Associate Issue with Branch"
					aria-label="Associate Issue with Branch"
					><issue-icon></issue-icon>
				</gl-button>
			</div>`:eC}};l3.styles=[o1,sK,D`
			:host {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			span.branch-item__missing {
				color: var(--vscode-descriptionForeground);
				font-style: italic;
			}

			gl-work-item {
				--gl-card-vertical-padding: 0.4rem;
			}

			.associate-issue-action {
				--button-padding: 0.2rem;
				--button-line-height: 1.2rem;
			}
		`],l3=l1([eE("gl-active-branch-card")],l3);var l5=Object.defineProperty,l4=Object.getOwnPropertyDescriptor,l6=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?l4(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&l5(t,r,n),n};let l8=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return ek`<div class="progress-bar"></div>`}};l8.styles=D`
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
	`,l6([eD({reflect:!0})],l8.prototype,"mode",2),l6([eD({type:Boolean})],l8.prototype,"active",2),l6([eD()],l8.prototype,"position",2),l8=l6([eE("progress-indicator")],l8);var l7=Object.defineProperty,l9=Object.getOwnPropertyDescriptor,ce=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?l9(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&l7(t,r,n),n};let ct=class extends lit_element_i{constructor(){super(...arguments),this.loading=!1,this.headingLevel="3"}render(){return ek`
			<div class="section">
				<header class="section__header" part="header">
					<div
						class="section__heading"
						role="heading"
						aria-level=${(this.headingLevel?this.headingLevel:void 0)??eC}
					>
						<slot name="heading" class="section__headline"></slot>
					</div>
					<slot name="heading-actions" class="section__actions"></slot>
					<progress-indicator class="section__loader" ?active="${this.loading}"></progress-indicator>
				</header>
				<slot></slot>
			</div>
		`}};ct.styles=[D`
			.section {
				margin-bottom: 1.2rem;
			}
			.section__header {
				position: relative;
				display: flex;
				justify-content: space-between;
				gap: 8px;
				margin-block: 0 0.8rem;
			}
			.section__heading {
				min-width: 0;
				flex: 1;
				font-size: 1.3rem;
			}
			.section__headline {
				font-weight: normal;
				text-transform: uppercase;
			}

			.section__actions {
				margin-inline-start: auto;
			}

			.section__loader {
				position: absolute;
				left: 0;
				bottom: 0;
			}
		`],ce([eD({type:Boolean})],ct.prototype,"loading",2),ce([eD({attribute:"heading-level"})],ct.prototype,"headingLevel",2),ct=ce([eE("gl-section")],ct);let cr=class extends lit_element_i{constructor(){super(...arguments),this.isFetching=!1,this.onCardExpanded=e=>{let t=e.composedPath().find(e=>e.matches("gl-branch-card"));this.toggleSiblingCardsDebounced(t)},this.toggleSiblingCardsDebounced=t0(this.toggleSiblingCards.bind(this),100)}connectedCallback(){super.connectedCallback?.(),this.addEventListener("gl-branch-card-expand-toggled",this.onCardExpanded)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("gl-branch-card-expand-toggled",this.onCardExpanded)}toggleSiblingCards(e){e?.expanded===!0&&this.branchCards.forEach(t=>{t!==e&&(t.expanded=!1)})}renderSectionLabel(){return this.isFetching||0===this.branches.length?this.label:`${this.label} (${this.branches.length})`}render(){return ek`
			<gl-section ?loading=${this.isFetching}>
				<span slot="heading">${this.renderSectionLabel()}</span>
				<span slot="heading-actions"><slot name="heading-actions"></slot></span>
				${eF(this.branches.length>0,()=>this.branches.map(e=>ek`<gl-branch-card expandable .repo=${this.repo} .branch=${e}></gl-branch-card>`),()=>ek`<p>No ${this.label} branches</p>`)}
			</gl-section>
		`}};ce([eD({type:String})],cr.prototype,"label",2),ce([eD()],cr.prototype,"repo",2),ce([eD({type:Array})],cr.prototype,"branches",2),ce([eD({type:Boolean})],cr.prototype,"isFetching",2),ce([(t,r)=>eM(t,r,{get(){return(this.renderRoot??(e??=document.createDocumentFragment())).querySelectorAll("gl-branch-card")}})],cr.prototype,"branchCards",2),cr=ce([eE("gl-branch-section")],cr);var co=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,cn=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?ci(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&co(t,r,n),n};let ca=class extends tT(lit_element_i){constructor(){super(...arguments),this._disposable=[],this._summaryState=new AsyncComputedState(async e=>await this._ipc.sendRequest(eq,{}))}get startWorkCommand(){return this._webview.createCommandLink("gitlens.startWork:")}get createBranchCommand(){return this._webview.createCommandLink("gitlens.createBranch:")}connectedCallback(){super.connectedCallback?.(),this._disposable.push(this._ipc.onReceiveMessage(e=>{!0===e7.is(e)&&this._summaryState.run(!0)})),this._summaryState.run()}disconnectedCallback(){super.disconnectedCallback?.(),this._disposable.forEach(e=>e.dispose())}render(){return ek`
			<gl-section ?loading=${"pending"===this._summaryState.computed.status}>
				<span slot="heading">Launchpad</span>
				<div class="summary">${this.renderSummaryResult()}</div>
				<button-container grouping="gap-wide">
					<gl-button full class="start-work" href=${this.startWorkCommand}>Start Work on an Issue</gl-button>
					<gl-button
						appearance="secondary"
						density="compact"
						class="start-work"
						href=${this.createBranchCommand}
						tooltip="Create New Branch"
						><code-icon icon="custom-start-work"></code-icon
					></gl-button>
				</button-container>
			</gl-section>
		`}renderSummaryResult(){return!1===this._homeState.hasAnyIntegrationConnected?ek`<ul class="menu">
				<li>
					<a
						class="launchpad-action"
						href="${oQ("gitlens.plus.cloudIntegrations.connect",{source:{source:"home"}})}"
					>
						<code-icon class="launchpad-action__icon" icon="plug"></code-icon>
						<span>Connect to see PRs and Issue here</span>
					</a>
				</li>
			</ul>`:this._summaryState.render({pending:()=>this.renderPending(),complete:e=>this.renderSummary(e),error:()=>ek`<ul class="menu">
					<li>Error loading summary</li>
				</ul>`})}renderPending(){return null==this._summaryState.state?ek`
				<div class="loader">
					<skeleton-loader lines="1"></skeleton-loader>
					<skeleton-loader lines="1"></skeleton-loader>
				</div>
			`:this.renderSummary(this._summaryState.state)}renderSummary(e){if(null==e)return eC;if("error"in e)return ek`<ul class="menu">
				<li>Unable to load items</li>
			</ul>`;if(0===e.total)return ek`<ul class="menu">
				<li>You are all caught up!</li>
			</ul>`;if(!e.hasGroupedItems)return ek`<ul class="menu">
				<li>No pull requests need your attention</li>
				<li>(${e.total} other pull requests)</li>
			</ul>`;let t=[];for(let r of e.groups){let o;switch(r){case"mergeable":{if(0===(o=e.mergeable?.total??0))continue;let r=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"mergeable"}}))}`;t.push(ek`<li>
							<a href=${r} class="launchpad-action launchpad-action--mergable">
								<code-icon class="launchpad-action__icon" icon="rocket"></code-icon>
								<span>${rw("pull request",o)} can be merged</span>
							</a>
						</li>`);break}case"blocked":{if(0===(o=e.blocked?.total??0))continue;let r=[];e.blocked.unassignedReviewers&&r.push({count:e.blocked.unassignedReviewers,message:`${e.blocked.unassignedReviewers>1?"need":"needs"} reviewers`}),e.blocked.failedChecks&&r.push({count:e.blocked.failedChecks,message:`${e.blocked.failedChecks>1?"have":"has"} failed CI checks`}),e.blocked.conflicts&&r.push({count:e.blocked.conflicts,message:`${e.blocked.conflicts>1?"have":"has"} conflicts`});let i=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"blocked"}}))}`;1===r.length?t.push(ek`<li>
								<a href=${i} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span>${rw("pull request",o)} ${r[0].message}</span>
								</a>
							</li>`):t.push(ek`<li>
								<a href=${i} class="launchpad-action launchpad-action--blocked">
									<code-icon class="launchpad-action__icon" icon="error"></code-icon>
									<span
										>${rw("pull request",o)} ${o>1?"are":"is"} blocked
										(${r.map(e=>`${e.count} ${e.message}`).join(", ")})</span
									>
								</a>
							</li>`);break}case"follow-up":{if(0===(o=e.followUp?.total??0))continue;let r=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"follow-up"}}))}`;t.push(ek`<li>
							<a href=${r} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="report"></code-icon>
								<span
									>${rw("pull request",o)} ${o>1?"require":"requires"}
									follow-up</span
								>
							</a>
						</li>`);break}case"needs-review":{if(0===(o=e.needsReview?.total??0))continue;let r=`command:gitlens.showLaunchpad?${encodeURIComponent(JSON.stringify({source:"home",state:{initialGroup:"needs-review"}}))}`;t.push(ek`<li>
							<a href=${r} class="launchpad-action launchpad-action--attention">
								<code-icon class="launchpad-action__icon" icon="comment-unresolved"></code-icon>
								<span
									>${rw("pull request",o)} ${o>1?"need":"needs"} your
									review</span
								>
							</a>
						</li>`)}}}return ek`<menu class="menu">${t}</menu>`}};ca.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},ca.styles=[o1,D`
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
			.summary {
				margin-bottom: 1rem;
			}

			.menu {
				list-style: none;
				padding-inline-start: 0;
				margin-block-start: 0;
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
			}

			.launchpad-action {
				display: flex;
				align-items: center;
				gap: 0.6rem;
				color: inherit;
				text-decoration: none;
			}
			.launchpad-action:hover {
				text-decoration: none;
			}

			.launchpad-action:hover span {
				text-decoration: underline;
			}

			.launchpad-action__icon {
				color: var(--gl-launchpad-action-color, inherit);
			}

			.launchpad-action:hover .launchpad-action__icon {
				color: var(--gl-launchpad-action-hover-color, inherit);
			}

			.launchpad-action--mergable {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorMergeableColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorMergeableHoverColor);
			}

			.launchpad-action--blocked {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorBlockedColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorBlockedHoverColor);
			}

			.launchpad-action--attention {
				--gl-launchpad-action-color: var(--vscode-gitlens-launchpadIndicatorAttentionColor);
				--gl-launchpad-action-hover-color: var(--vscode-gitlens-launchpadIndicatorAttentionHoverColor);
			}

			.loader {
				display: flex;
				flex-direction: column;
				gap: 0.4rem;
			}
		`],cn([P({context:"state",subscribe:!0}),ez()],ca.prototype,"_homeState",2),cn([P({context:"ipc"})],ca.prototype,"_ipc",2),cn([P({context:"webview"})],ca.prototype,"_webview",2),ca=cn([eE("gl-launchpad")],ca);let cs=(e,t,r)=>{let o=new Map;for(let i=t;i<=r;i++)o.set(e[i],i);return o},cl=tD(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;void 0===r?r=t:void 0!==t&&(o=t);let i=[],n=[],a=0;for(let t of e)i[a]=o?o(t,a):a,n[a]=r(t,a),a++;return{values:n,keys:i}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){let i=e._$AH,{values:n,keys:a}=this.dt(t,r,o);if(!Array.isArray(i))return this.ut=a,n;let c=this.ut??=[],h=[],p,u,g=0,m=i.length-1,b=0,f=n.length-1;for(;g<=m&&b<=f;)if(null===i[g])g++;else if(null===i[m])m--;else if(c[g]===a[b])h[b]=tj(i[g],n[b]),g++,b++;else if(c[m]===a[f])h[f]=tj(i[m],n[f]),m--,f--;else if(c[g]===a[f])h[f]=tj(i[g],n[f]),tN(e,h[f+1],i[g]),g++,f--;else if(c[m]===a[b])h[b]=tj(i[m],n[b]),tN(e,i[g],i[m]),m--,b++;else if(void 0===p&&(p=cs(a,b,f),u=cs(c,g,m)),p.has(c[g]))if(p.has(c[m])){let t=u.get(a[b]),r=void 0!==t?i[t]:null;if(null===r){let t=tN(e,i[g]);tj(t,n[b]),h[b]=t}else h[b]=tj(r,n[b]),tN(e,i[g],r),i[t]=null;b++}else tU(i[m]),m--;else tU(i[g]),g++;for(;b<=f;){let t=tN(e,h[f+1]);tj(t,n[b]),h[b++]=t}for(;g<=m;){let e=i[g++];null!==e&&tU(e)}return this.ut=a,((e,t=tF)=>e._$AH=t)(e,h),e$}}),cc=D`
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
`;var cd=Object.defineProperty,ch=Object.getOwnPropertyDescriptor,cp=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?ch(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cd(t,r,n),n};let cu=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return ek` <code-icon icon="check"></code-icon> `}render(){return ek`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};cu.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},cu.styles=[cc],cp([eD({type:Boolean,reflect:!0})],cu.prototype,"disabled",2),cp([eD({type:String})],cu.prototype,"value",2),cp([eD({type:Boolean})],cu.prototype,"defaultChecked",1),cp([eD({type:Boolean,reflect:!0})],cu.prototype,"checked",2),cu=cp([eE("gl-checkbox")],cu);var cg=Object.defineProperty,cm=Object.getOwnPropertyDescriptor,cb=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cm(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cg(t,r,n),n};let cf=D`
	.select {
		background: none;
		outline: none;
		border: none;
		text-decoration: none !important;
		font-weight: 500;
		color: var(--color-foreground--25);
	}
	.select option {
		color: var(--vscode-foreground);
		background-color: var(--vscode-dropdown-background);
	}
	.select:not(:disabled) {
		cursor: pointer;
		color: var(--color-foreground--50);
	}
	.select:not(:disabled):focus {
		outline: 1px solid var(--color-focus-border);
	}
	.select:not(:disabled):hover {
		color: var(--vscode-foreground);
		text-decoration: underline !important;
	}
`;let GlObjectSelect=class GlObjectSelect extends GlElement{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[cf]}render(){if(this.options)return ek`
			<select .disabled=${this.disabled} class="select" @change=${e=>this.onChange?.(e)}>
				${cl(this.options,e=>{let t=this.getValue(e),r=this.getLabel(e);return ek`<option .value="${t}" ?selected=${this.value===t}>${r}</option>`})}
			</select>
		`}};cb([eD({type:Boolean})],GlObjectSelect.prototype,"disabled",2),cb([eD({type:String})],GlObjectSelect.prototype,"value",2),cb([eD({type:Array})],GlObjectSelect.prototype,"options",2);let cv=class extends GlObjectSelect{getValue(e){return e.value}getLabel(e){return e.label}onChange(e){let t=new CustomEvent("gl-change",{detail:{threshold:e.target.value}});this.dispatchEvent(t)}};cv=cb([eE("gl-branch-threshold-filter")],cv);var cw=Object.defineProperty,cy=Object.getOwnPropertyDescriptor,c_=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cy(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cw(t,r,n),n};let ck=class extends tT(lit_element_i){constructor(){super(...arguments),this.onChangeRecentThresholdFilter=e=>{this._inactiveOverviewState.filter.stale&&this._inactiveOverviewState.filter.recent&&this._ipc.sendCommand(e1,{stale:this._inactiveOverviewState.filter.stale,recent:{...this._inactiveOverviewState.filter.recent,threshold:e.detail.threshold}})}}connectedCallback(){super.connectedCallback?.(),this._homeState.repositories.openCount>0&&this._inactiveOverviewState.run()}render(){return this._homeState.discovering?this.renderLoader():0===this._homeState.repositories.openCount?eC:this._inactiveOverviewState.render({pending:()=>this.renderPending(),complete:e=>this.renderComplete(e),error:()=>ek`<span>Error</span>`})}renderLoader(){return ek`
			<gl-section>
				<skeleton-loader slot="heading" lines="1"></skeleton-loader>
				<skeleton-loader lines="3"></skeleton-loader>
			</gl-section>
		`}renderPending(){return null==this._inactiveOverviewState.state?this.renderLoader():this.renderComplete(this._inactiveOverviewState.state,!0)}renderComplete(e,t=!1){if(null==e)return eC;let{repository:r}=e;return ek`
			<gl-branch-section
				label="recent"
				.isFetching=${t}
				.repo=${r.path}
				.branches=${e.recent}
			>
				<gl-branch-threshold-filter
					slot="heading-actions"
					@gl-change=${this.onChangeRecentThresholdFilter}
					.options=${[{value:"OneDay",label:"1 day"},{value:"OneWeek",label:"1 week"},{value:"OneMonth",label:"1 month"}]}
					.disabled=${t}
					.value=${this._inactiveOverviewState.filter.recent?.threshold}
				></gl-branch-threshold-filter>
			</gl-branch-section>
			${eF(this._inactiveOverviewState.filter.stale?.show===!0&&e.stale,()=>ek`
					<gl-branch-section
						label="stale"
						.repo=${r.path}
						.branches=${e.stale}
					></gl-branch-section>
				`)}
		`}};ck.styles=[o1,D`
			:host {
				display: block;
				margin-bottom: 2.4rem;
				color: var(--vscode-foreground);
			}
		`],c_([P({context:"state",subscribe:!0}),ez()],ck.prototype,"_homeState",2),c_([P({context:"inactiveOverviewState"})],ck.prototype,"_inactiveOverviewState",2),c_([P({context:"ipc"})],ck.prototype,"_ipc",2),ck=c_([eE("gl-overview")],ck);var cx=Object.defineProperty,c$=Object.getOwnPropertyDescriptor,cC=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?c$(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cx(t,r,n),n};let cS=class extends GlElement{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"}}get orgAllowsDrafts(){return this._state.orgSettings.drafts}get blockRepoFeatures(){if(!this._state)return!0;let{repositories:{openCount:e,hasUnsafe:t,trusted:r}}=this._state;return!r||0===e||t}onRepoFeatureClicked(e){return!this.blockRepoFeatures||(e.preventDefault(),e.stopPropagation(),!1)}render(){return ek`
			${eF(this.blockRepoFeatures,()=>ek`
					<p>
						<code-icon icon="question"></code-icon> Features which need a repository are currently
						unavailable
					</p>
				`)}
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Setup</h2>
				<div class="nav-list__item">
					<a class="nav-list__link" href="command:gitlens.showSettingsPage" aria-label="Open GitLens Settings"
						><code-icon class="nav-list__icon" icon="gear"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open GitLens Settings">
							<span>Open GitLens Settings</span></gl-tooltip
						>
					</a>
				</div>
				${eF(!this._state.hasAnyIntegrationConnected,()=>ek`
						<div class="nav-list__item" data-integrations="none">
							<a
								class="nav-list__link"
								href="${oQ("gitlens.plus.cloudIntegrations.connect",{source:{source:"home",detail:"old-home"}})}"
								aria-label="Connect an Integration on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="gl-unplug"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Connect an Integration on GitKraken.dev"
									><span>Connect an Integration</span></gl-tooltip
								>
							</a>
						</div>
					`,()=>ek`
						<div class="nav-list__item" data-integrations="connected">
							<a
								class="nav-list__link"
								href="${oQ("gitlens.plus.cloudIntegrations.manage",{source:{source:"home",detail:"old-home"}})}"
								aria-label="Manage Integrations on GitKraken.dev"
								><code-icon class="nav-list__icon" icon="settings"></code-icon
								><gl-tooltip
									hoist
									class="nav-list__label"
									content="Manage Integrations on GitKraken.dev"
									><span>Manage Integrations</span></gl-tooltip
								>
							</a>
						</div>
					`)}
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showSettingsPage!autolinks"
						aria-label="Open Autolinks Settings"
						><code-icon class="nav-list__icon" icon="link"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Autolinks Settings"
							><span>Configure Autolinks</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Popular</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showGraph"
						aria-label="Show Commit Graph"
						data-requires="repo"
						@click=${e=>this.onRepoFeatureClicked(e)}
					>
						<code-icon class="nav-list__icon" icon="gl-graph"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commit Graph">
							<span>Commit Graph</span>
						</gl-tooltip>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:gitlens.showLaunchpad?%7B%22source%22%3A%22home%22%7D"
						aria-label="Open Launchpad"
						><code-icon class="nav-list__icon" icon="rocket"></code-icon
						><gl-tooltip hoist class="nav-list__group" content="Open Launchpad"
							><span class="nav-list__label">Launchpad</span
							><span class="nav-list__desc">New!</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
						cloud
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitsView"
						aria-label="Show Commits view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commits-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Commits view">
							<span>Commits</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showCommitDetailsView"
						aria-label="Show Inspect view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-commit-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Inspect view">
							<span>Inspect</span></gl-tooltip
						>
					</a>
				</div>
				${eF(this.orgAllowsDrafts,()=>ek`
						<div class="nav-list__item">
							<gl-feature-badge
								.source=${this.badgeSource}
								.subscription=${this._state.subscription}
								placement="left"
								class="nav-list__access"
								cloud
								preview
							></gl-feature-badge>
						</div>
						<div class="nav-list__item">
							<a
								class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
								href="command:gitlens.showDraftsView"
								data-requires="repo"
								data-org-requires="drafts"
								aria-label="Show Cloud Patches view"
								><code-icon class="nav-list__icon" icon="gl-cloud-patch"></code-icon
								><gl-tooltip hoist class="nav-list__group" content="Show Cloud Patches view"
									><span class="nav-list__label">Cloud Patches</span
									><span class="nav-list__desc">New!</span></gl-tooltip
								>
							</a>
							<gl-feature-badge
								.source=${this.badgeSource}
								.subscription=${this._state.subscription}
								placement="left"
								class="nav-list__access"
								cloud
								preview
							></gl-feature-badge>
						</div>
					`)}
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showFileHistoryView"
						aria-label="Show File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-history-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show File History view">
							<span>File History</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showTimelineView"
						aria-label="Show Visual File History view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="graph-scatter"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Visual File History view">
							<span>Visual File History</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showStashesView"
						aria-label="Show Stashes view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-stashes-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Stashes view">
							<span>Stashes</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showSearchAndCompareView"
						aria-label="Show Search &amp; Compare view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-search-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Search &amp; Compare view">
							<span>Search &amp; Compare</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorkspacesView"
						aria-label="Show Cloud Workspaces view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-workspaces-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Cloud Workspaces view">
							<span>Cloud Workspaces</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
						cloud
						preview
					></gl-feature-badge>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.showWorktreesView"
						aria-label="Show Worktrees view"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-worktrees-view"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Worktrees view">
							<span>Worktrees</span></gl-tooltip
						>
					</a>
					<gl-feature-badge
						.source=${this.badgeSource}
						.subscription=${this._state.subscription}
						placement="left"
						class="nav-list__access"
					></gl-feature-badge>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Activity Bar</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href="command:workbench.view.extension.gitlens"
						aria-label="Show GitLens Side Bar"
						><code-icon class="nav-list__icon" icon="gl-gitlens"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Side Bar"
							><span>GitLens</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.extension.gitlensInspect"
						aria-label="Show GitLens Inspect Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="gl-gitlens-inspect"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Inspect Side Bar"
							><span>GitLens Inspect</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:workbench.view.scm"
						aria-label="Show GitLens Side Bar"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="source-control"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show Source Control Side Bar"
							><span>Source Control</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h3 class="nav-list__title t-eyebrow sticky">Commands</h3>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"command:workbench.action.quickOpen?%22>GitLens%3A%22"}
						aria-label="Show GitLens Commands"
						><code-icon class="nav-list__icon" icon="symbol-event"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Show GitLens Commands"
							><span>Commands</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link${this.blockRepoFeatures?" is-disabled":""}"
						href="command:gitlens.gitCommands"
						aria-label="Open Git Command Palette"
						data-requires="repo"
						><code-icon class="nav-list__icon" icon="symbol-color"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Open Git Command Palette"
							><span>Git Command Palette</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
			<nav class="nav-list">
				<h2 class="nav-list__title t-eyebrow sticky">Companion Tools</h2>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/browser-extension?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken Browser Extension"
						><code-icon class="nav-list__icon" icon="extensions"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken Browser Extension"
							><span>GitKraken Browser Extension</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.com/cli?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try the GitKraken CLI"
						><code-icon class="nav-list__icon" icon="terminal"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try the GitKraken CLI"
							><span>GitKraken CLI</span></gl-tooltip
						>
					</a>
				</div>
				<div class="nav-list__item">
					<a
						class="nav-list__link"
						href=${"https://gitkraken.dev?utm_source=gitlens-extension&utm_medium=in-app-links"}
						aria-label="Try GitKraken.dev"
						><code-icon class="nav-list__icon" icon="globe"></code-icon
						><gl-tooltip hoist class="nav-list__label" content="Try GitKraken.dev"
							><span>GitKraken.dev</span></gl-tooltip
						>
					</a>
				</div>
			</nav>
		`}};cS.styles=[oE,oD,oN,D``],cC([eD({type:Object})],cS.prototype,"badgeSource",2),cC([P({context:"state",subscribe:!0}),ez()],cS.prototype,"_state",2),cS=cC([eE("gl-feature-nav")],cS);let cP=D`
	:host {
		/* Banner color custom properties */
		--gl-banner-primary-background: var(--vscode-sideBar-background);
		--gl-banner-secondary-background: var(--vscode-editor-background);
		--gl-banner-primary-emphasis-background: var(--vscode-button-background);
		--gl-banner-secondary-emphasis-background: var(--vscode-button-secondaryBackground);
		--gl-banner-text-color: var(--vscode-foreground);
		--gl-banner-dim-text-color: var(--vscode-descriptionForeground);
		--gl-banner-transparency: 0.5;

		/* Layout properties */
		--gl-banner-padding: 1.2rem;
		--gl-banner-gap: 0.8rem;
		--gl-banner-border-radius: 0.4rem;

		/* Button customization - use 8px horizontal padding, keep original vertical padding */
		--gl-banner-button-padding: 0.4rem 0.8rem;

		display: block;
		margin-block-end: 1.2rem;
	}

	.banner {
		display: flex;
		flex-direction: column;
		padding: var(--gl-banner-padding);
		border-radius: var(--gl-banner-border-radius);
		position: relative;
		overflow: hidden;
		container-type: inline-size;
	}

	/* Solid display mode - same as card background */
	.banner--solid {
		background-color: var(--gl-banner-primary-background);
		border: 1px solid color-mix(in lab, var(--gl-banner-primary-background) 100%, var(--vscode-foreground) 12%);
	}

	/* Outline display mode - emphasis color outline with secondary background */
	.banner--outline {
		background-color: var(--gl-banner-secondary-background);
		border: 2px solid var(--gl-banner-primary-emphasis-background);
	}

	/* Gradient display mode - horizontal gradient from primary to secondary emphasis */
	.banner--gradient {
		background: linear-gradient(
			to right,
			var(--gl-banner-primary-emphasis-background) 0%,
			var(--gl-banner-secondary-emphasis-background) 100%
		);
		border: 1px solid
			color-mix(
				in lab,
				var(--gl-banner-primary-emphasis-background) 50%,
				var(--gl-banner-secondary-emphasis-background) 50%
			);
	}

	/* Gradient transparent display mode - same gradient but with transparency */
	.banner--gradient-transparent {
		background: linear-gradient(
			to right,
			color-mix(
					in lab,
					var(--gl-banner-primary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))),
					transparent
				)
				0%,
			color-mix(
					in lab,
					var(--gl-banner-secondary-emphasis-background) calc(100% * (1 - var(--gl-banner-transparency))),
					transparent
				)
				100%
		);
		border: 1px solid
			color-mix(
				in lab,
				color-mix(
						in lab,
						var(--gl-banner-primary-emphasis-background) 50%,
						var(--gl-banner-secondary-emphasis-background) 50%
					)
					calc(100% * (1 - var(--gl-banner-transparency))),
				transparent
			);
	}

	/* Gradient purple display mode - matches the auto-composer container styling */
	.banner--gradient-purple {
		border: 1px solid var(--vscode-panel-border);
		border-radius: 6px;
		background: linear-gradient(135deg, #a100ff1a 0%, #255ed11a 100%);
	}

	.banner--gradient-purple .banner__title {
		font-size: 1.3rem;
		color: var(--vscode-foreground);
		font-weight: normal;
	}

	.banner--gradient-purple .banner__body {
		font-size: 1.2rem;
		color: var(--vscode-descriptionForeground);
		line-height: 1.4;
	}

	.banner--gradient-purple .banner__body a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}

	.banner--gradient-purple .banner__body a:hover {
		color: var(--vscode-textLink-activeForeground);
		text-decoration: underline;
	}

	.banner__content {
		display: flex;
		flex-direction: column;
		gap: var(--gl-banner-gap);
		align-items: center;
		text-align: center;
	}

	/* Responsive layout */
	.banner--responsive .banner__content {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		text-align: left;
		gap: var(--gl-banner-gap);
	}

	.banner--responsive .banner__text {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.banner--responsive .banner__title,
	.banner--responsive .banner__body {
		text-align: left;
	}

	/* < 500px: Stack vertically with full-width buttons */
	.banner--responsive .banner__buttons {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		margin-top: 0.8rem;
		width: 100%;
	}

	.banner--responsive .banner__button {
		grid-column: unset;
		justify-self: unset;
		width: 100% !important;
		min-width: 100% !important;
		max-width: 100% !important;
		justify-content: center;
		flex: 1;
	}

	/* >= 500px: Three-group horizontal layout */
	@container (min-width: 500px) {
		.banner--responsive .banner__content {
			flex-direction: row;
			align-items: center;
			gap: 1.6rem;
		}

		/* Group 1: Text content (left-aligned) */
		.banner--responsive .banner__text {
			flex: 1;
			min-width: 0;
			align-self: center;
		}

		/* Group 2: Buttons (content-sized) */
		.banner--responsive .banner__buttons {
			display: flex;
			flex-direction: column;
			gap: 0.8rem;
			margin-top: 0;
			width: auto;
			flex-shrink: 0;
			align-self: center;
		}

		.banner--responsive .banner__button {
			width: auto;
			white-space: nowrap;
		}

		/* Group 3: Dismiss button (to the right of buttons) */
		.banner--responsive .banner__dismiss {
			position: static !important;
			top: auto !important;
			right: auto !important;
			align-self: center;
			flex-shrink: 0;
		}
	}

	.banner__title {
		font-size: 1.2em;
		font-weight: bold;
		color: var(--gl-banner-text-color);
		margin: 0;
		text-wrap: pretty;
	}

	.banner__body {
		font-size: 1em;
		color: var(--gl-banner-text-color);
		margin: 0;
		line-height: 1.4;
		text-wrap: pretty;
	}

	.banner__buttons {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 0.8rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	.banner:not(.banner--gradient-purple) .banner__button--primary {
		grid-column: 2;
		justify-self: center;
		white-space: nowrap;
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-foreground: var(--gl-banner-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-padding: var(--gl-banner-button-padding);
	}

	.banner--gradient-purple .banner__button--primary {
		grid-column: 2;
		justify-self: center;
		white-space: nowrap;
		--button-padding: var(--gl-banner-button-padding);
	}

	.banner__button--secondary {
		grid-column: 3;
		justify-self: end;
		white-space: nowrap;
		--button-background: transparent;
		--button-foreground: var(--gl-banner-dim-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-dim-text-color) 10%, transparent);
	}

	/* When only primary button exists, center it across the full width */
	.banner__buttons:has(.banner__button--primary):not(:has(.banner__button--secondary)) .banner__button--primary {
		grid-column: 1 / -1;
		justify-self: center;
	}

	/* Dismiss button */
	.banner__dismiss {
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
		--button-background: transparent;
		--button-foreground: var(--gl-banner-dim-text-color);
		--button-hover-background: color-mix(in lab, var(--gl-banner-dim-text-color) 15%, transparent);
		--button-padding: 0.4rem;
		z-index: 1;
	}

	/* Responsive layout dismiss button */
	.banner--responsive .banner__dismiss {
		/* < 500px: Upper right corner (default positioning) */
		position: absolute;
		top: 0.8rem;
		right: 0.8rem;
	}

	/* Theme-specific adjustments */

	/* Light theme: Brighten gradient colors for better contrast with dark text */
	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-primary-emphasis-background: color-mix(in lab, var(--vscode-button-background) 40%, #fff 60%);
		--gl-banner-secondary-emphasis-background: color-mix(
			in lab,
			var(--vscode-button-secondaryBackground) 40%,
			#fff 60%
		);
	}

	/* Override text color for high contrast light theme specifically */
	:host-context(.vscode-high-contrast-light) {
		--gl-banner-text-color: #000;
	}

	:host-context(.vscode-dark) .banner:not(.banner--gradient-purple) .banner__button--primary,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light))
		.banner:not(.banner--gradient-purple)
		.banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 10%, #fff 20%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 20%, #fff 30%);
		--button-foreground: #fff;
	}

	:host-context(.vscode-light) .banner:not(.banner--gradient-purple) .banner__button--primary,
	:host-context(.vscode-high-contrast-light) .banner:not(.banner--gradient-purple) .banner__button--primary {
		--button-background: color-mix(in lab, var(--gl-banner-primary-background) 8%, #fff 25%);
		--button-hover-background: color-mix(in lab, var(--gl-banner-primary-background) 15%, #fff 35%);
		--button-foreground: #000;
	}

	/* Make banner text darker in light themes */
	:host-context(.vscode-light) .banner__body,
	:host-context(.vscode-high-contrast-light) .banner__body {
		color: color-mix(in lab, var(--gl-banner-text-color) 20%, #000 80%);
	}

	/* Strong colors for banner title - pure black/white for maximum contrast */
	:host-context(.vscode-light) .banner__title,
	:host-context(.vscode-high-contrast-light) .banner__title {
		color: #000 !important;
	}

	:host-context(.vscode-dark) .banner__title,
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) .banner__title {
		color: #fff !important;
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.banner__buttons {
			flex-direction: column;
			width: 100%;
		}

		.banner__button {
			width: 100%;
		}
	}

	/* More aggressive responsive layout for narrow sidebars */
	@media (max-width: 400px) {
		.banner__buttons {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			margin-top: 0.8rem;
			align-items: center;
			width: 100%;
		}

		.banner__button--primary,
		.banner__button--secondary {
			grid-column: unset;
			justify-self: unset;
			width: 100%;
			max-width: 200px;
		}

		.banner__button--primary {
			order: 1;
		}

		.banner__button--secondary {
			order: 2;
		}
	}

	/* Support for custom banner buttons layout */
	:host([data-banner-buttons-layout='column']) .banner__buttons,
	.banner__buttons[data-layout='column'] {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		margin-top: 0.8rem;
		align-items: center;
		width: 100%;
	}

	:host([data-banner-buttons-layout='column']) .banner__button--primary,
	:host([data-banner-buttons-layout='column']) .banner__button--secondary,
	.banner__buttons[data-layout='column'] .banner__button--primary,
	.banner__buttons[data-layout='column'] .banner__button--secondary {
		grid-column: unset;
		justify-self: unset;
		width: 100%;
		max-width: 200px;
	}
`;var cO=Object.defineProperty,cA=Object.getOwnPropertyDescriptor,cL=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cA(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cO(t,r,n),n};let cR=class extends lit_element_i{constructor(){super(...arguments),this.display="solid",this.dismissible=!1,this.layout="default"}get classNames(){return{banner:!0,[`banner--${this.display}`]:!0,[`banner--${this.layout}`]:"default"!==this.layout}}render(){return ek`<div part="base" class=${nR(this.classNames)}>
			<div class="banner__content">
				${"responsive"===this.layout?this.renderResponsiveContent():this.renderDefaultContent()}
			</div>
			${"responsive"!==this.layout?this.renderDismissButton():void 0}
		</div>`}renderDefaultContent(){return ek`${this.renderTitle()} ${this.renderBody()} ${this.renderButtons()}`}renderResponsiveContent(){return ek`
			<div class="banner__text">${this.renderTitle()} ${this.renderBody()}</div>
			${this.renderButtons()} ${this.renderDismissButton()}
		`}renderTitle(){if(this.bannerTitle)return ek`<div class="banner__title">${this.bannerTitle}</div>`}renderBody(){if(this.body)return ek`<div class="banner__body">${ih(this.body)}</div>`}renderButtons(){let e=this.renderPrimaryButton(),t=this.renderSecondaryButton();if(e||t)return ek`<div class="banner__buttons">${e} ${t}</div>`}renderPrimaryButton(){if(this.primaryButton)return ek`
			<gl-button
				class="banner__button banner__button--primary"
				appearance=${"gradient-purple"===this.display?"secondary":void 0}
				?full=${"gradient-purple"===this.display}
				href=${this.primaryButtonHref??eC}
				truncate
				@click=${this.onPrimaryButtonClick}
			>
				${this.primaryButton}
			</gl-button>
		`}renderSecondaryButton(){if(this.secondaryButton)return ek`
			<gl-button
				class="banner__button banner__button--secondary"
				appearance="toolbar"
				href=${this.secondaryButtonHref??eC}
				@click=${this.onSecondaryButtonClick}
			>
				${this.secondaryButton}
			</gl-button>
		`}renderDismissButton(){if(this.dismissible)return ek`
			<gl-button
				class="banner__dismiss"
				appearance="toolbar"
				href=${this.dismissHref??eC}
				aria-label="Dismiss"
				tooltip="Dismiss"
				@click=${this.onDismissClick}
			>
				<code-icon icon="close"></code-icon>
			</gl-button>
		`}onPrimaryButtonClick(e){this.primaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-primary-click",{detail:{command:this.primaryButtonCommand},bubbles:!0,composed:!0}))}onSecondaryButtonClick(e){this.secondaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-secondary-click",{detail:{command:this.secondaryButtonCommand},bubbles:!0,composed:!0}))}onDismissClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-dismiss",{bubbles:!0,composed:!0}))}};cR.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},cR.styles=[cP],cL([eD({reflect:!0})],cR.prototype,"display",2),cL([eD({attribute:"banner-title"})],cR.prototype,"bannerTitle",2),cL([eD()],cR.prototype,"body",2),cL([eD({attribute:"primary-button"})],cR.prototype,"primaryButton",2),cL([eD({attribute:"primary-button-href"})],cR.prototype,"primaryButtonHref",2),cL([eD({attribute:"primary-button-command"})],cR.prototype,"primaryButtonCommand",2),cL([eD({attribute:"secondary-button"})],cR.prototype,"secondaryButton",2),cL([eD({attribute:"secondary-button-href"})],cR.prototype,"secondaryButtonHref",2),cL([eD({attribute:"secondary-button-command"})],cR.prototype,"secondaryButtonCommand",2),cL([eD({type:Boolean,attribute:"dismissible"})],cR.prototype,"dismissible",2),cL([eD({attribute:"dismiss-href"})],cR.prototype,"dismissHref",2),cL([eD({attribute:"layout"})],cR.prototype,"layout",2),cR=cL([eE("gl-banner")],cR);var cB=Object.defineProperty,cI=Object.getOwnPropertyDescriptor,cE=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cI(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cB(t,r,n),n};let cT=class extends lit_element_i{get shouldShow(){return!this._state.aiAllAccessBannerCollapsed}get bodyLabel(){return this.hasAdvancedOrHigher?"Opt in now to get unlimited GitKraken AI until July 11th!":"Opt in now to try all Advanced GitLens features with unlimited GitKraken AI for FREE until July 11th!"}get primaryButtonLabel(){return"Opt In Now"}get hasAdvancedOrHigher(){var e,t;return this._state.subscription.plan&&(e=this._state.subscription.plan.actual.id,oV(e)-oV("advanced")>=0)||(t=this._state.subscription.plan.effective.id,oV(t)-oV("advanced")>=0)}render(){return this.shouldShow?ek`
			<gl-banner
				display="gradient"
				banner-title="All Access Week - now until July 11th!"
				body="${this.bodyLabel}"
				primary-button="${this.primaryButtonLabel}"
				primary-button-href="${oQ("gitlens.plus.aiAllAccess.optIn",{source:"home"})}"
				secondary-button="Dismiss"
				@gl-banner-secondary-click=${this.onSecondaryClick}
			></gl-banner>
		`:eC}onSecondaryClick(){this._ipc.sendCommand(e0,void 0)}};cT.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},cT.styles=[D`
			:host {
				display: block;
			}

			gl-banner {
				margin-bottom: 1.2rem;
			}
		`],cE([P({context:"state",subscribe:!0}),ez()],cT.prototype,"_state",2),cE([P({context:"ipc",subscribe:!0}),ez()],cT.prototype,"_ipc",2),cT=cE([eE("gl-ai-all-access-banner")],cT);var cD=Object.defineProperty,cz=Object.getOwnPropertyDescriptor,cM=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cz(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cD(t,r,n),n};let cN=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}render(){return this.closed||!0===this._state.amaBannerCollapsed?eC:ek`
			<gl-card indicator="info">
				<h4>Live AMA w/ the creator of GitLens</h4>
				<p>Feb 13 @ 1pm EST &mdash; <a href="${"https://www.gitkraken.com/lp/gitlensama?utm_source=githubdiscussion&utm_medium=hyperlink&utm_campaign=GLAMA&utm_id=GLAMA"}">Register now</a></p>
				<gl-button slot="actions" appearance="toolbar" tooltip="Dismiss" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}onClose(){this.closed=!0,this._state.amaBannerCollapsed=!0,this._ipc.sendCommand(eY,{section:"feb2025AmaBanner",collapsed:!0})}};cN.styles=[oE,D`
			:host {
				margin-inline: 1.2rem;
			}
			h4 {
				font-weight: normal;
				margin-block-end: 0.4em;
			}

			p {
				margin-block: 0;
				color: var(--vscode-descriptionForeground);
			}
		`],cM([P({context:"state",subscribe:!0}),ez()],cN.prototype,"_state",2),cM([P({context:"ipc",subscribe:!0}),ez()],cN.prototype,"_ipc",2),cM([ez()],cN.prototype,"closed",2),cN=cM([eE("gl-ama-banner")],cN);var cj=Object.defineProperty,cF=Object.getOwnPropertyDescriptor,cU=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cF(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cj(t,r,n),n};let cq=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}render(){return this.closed||this._state.hasAnyIntegrationConnected||this._state.integrationBannerCollapsed?eC:ek`
			<gl-card>
				<p><strong>GitLens is better with integrations!</strong></p>
				<p>
					Connect hosting services like GitHub and issue trackers like Jira to track progress and take action
					on PRs and issues related to your branches.
				</p>
				<button-container>
					<gl-button
						appearance="secondary"
						href="${oQ("gitlens.plus.cloudIntegrations.connect",{source:{source:"home"}})}"
						full
						><code-icon icon="plug"></code-icon> Connect Integrations</gl-button
					>
				</button-container>
				<gl-button slot="actions" appearance="toolbar" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}onClose(){this.closed=!0,this._ipc.sendCommand(eY,{section:"integrationBanner",collapsed:!0})}focus(){this._button.focus()}};cq.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},cq.styles=[D`
			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}
		`],cU([P({context:"state",subscribe:!0}),ez()],cq.prototype,"_state",2),cU([P({context:"ipc",subscribe:!0}),ez()],cq.prototype,"_ipc",2),cU([ez()],cq.prototype,"closed",2),cU([eN("gl-button")],cq.prototype,"_button",2),cq=cU([eE("gl-integration-banner")],cq);var cW=Object.defineProperty,cH=Object.getOwnPropertyDescriptor,cG=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?cH(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&cW(t,r,n),n};let cV=class extends lit_element_i{constructor(){super(...arguments),this.closed=!1}get isNewInstall(){return this._state.newInstall}render(){return!0!==this._state.previewEnabled?ek`
				<gl-tooltip placement="bottom">
					<button class="text-button text-button--end" @click=${()=>this.togglePreview()}>
						New Home View <code-icon icon="arrow-right"></code-icon>
					</button>
					<p slot="content">
						<strong>Switch to the new Home View!</strong><br />
						We've reimagined GitLens' Home to be a more helpful daily workflow tool. We're continuing to
						refine this experience and welcome your feedback.
					</p>
				</gl-tooltip>
			`:this.closed||!0===this._state.previewCollapsed?eC:ek`
			<gl-card>
				<h4 class="title">Welcome to the GitLens Home View</h4>
				<p>
					Streamline your workflow — effortlessly track, manage, and collaborate on your branches and pull
					requests, all in one intuitive hub.
					<a class="feedback" href="https://help.gitkraken.com/gitlens/home-view/">Learn more</a>
				</p>
				<gl-button slot="actions" appearance="toolbar" tooltip="Dismiss Welcome" @click=${()=>this.onClose()}
					><code-icon icon="close"></code-icon
				></gl-button>
			</gl-card>
		`}togglePreview(e=!1){this._ipc.sendCommand(eK),e&&(this.closed=!0)}onClose(){this.closed=!0,this._ipc.sendCommand(eY,{section:"newHomePreview",collapsed:!0})}focus(){this._button?.focus()}};cV.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},cV.styles=[oE,D`
			.title {
				margin-block-end: 0.4em;
			}

			.text-button {
				padding: 0.4rem 0.8rem;
			}

			.text-button {
				appearance: none;
				background: none;
				border: none;
				color: inherit;
				text-align: end;
				cursor: pointer;
				width: 100%;
			}
			.text-button:hover,
			.text-button:focus-within {
				background-color: var(--gl-card-background);
			}
			.text-button:focus-visible {
				${oL}
			}

			gl-card::part(base) {
				margin-block-end: 1.2rem;
			}

			.feedback {
				white-space: nowrap;
			}

			p {
				margin-block: 0;
			}
		`],cG([P({context:"state",subscribe:!0}),ez()],cV.prototype,"_state",2),cG([P({context:"ipc",subscribe:!0}),ez()],cV.prototype,"_ipc",2),cG([ez()],cV.prototype,"closed",2),cG([eN("button")],cV.prototype,"_button",2),cV=cG([eE("gl-preview-banner")],cV);let cZ=D`
	:host {
		--accent-color: #cb64ff;
		--text-color: var(--vscode-descriptionForeground);
		--em-color: var(--vscode-sideBar-foreground);
		--link-color: var(--vscode-textLink-foreground);
		--card-background: var(--vscode-textBlockQuote-background);

		--hero-gradient: radial-gradient(76.32% 76.32% at 50% 7.24%, #7b00ff 29.72%, rgba(255, 0, 242, 0) 100%);
		--trial-button-gradient: linear-gradient(90deg, #7900c9 0%, #196fff 100%);
		--trial-button-border: none;
		--trial-button-text-color: #fff;
	}

	:host-context(.vscode-light) {
		--hero-gradient: radial-gradient(62.4% 62.4% at 50% 7.24%, #7b00ff 29.72%, rgba(255, 0, 242, 0) 100%);
	}

	:host-context(.vscode-dark) {
		--hero-gradient: radial-gradient(76.32% 76.32% at 50% 7.24%, #7b00ff 29.72%, rgba(255, 0, 242, 0) 100%);
	}

	:host-context(.vscode-high-contrast) {
		--hero-gradient: transparent;
		--trial-button-gradient: var(--color-button-background);
		--trial-button-border: 1px solid var(--vscode-button-border);
		--trial-button-text-color: var(--color-button-foreground);
	}

	:host-context(.vscode-high-contrast-light) {
		--accent-color: #500070;
	}
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) {
		--accent-color: #ffc0ff;
	}
`,cK=D`
	:host {
		font-size: var(--vscode-font-size);

		--h1-font-size: 1.7em;
		--p-font-size: 1.23em;
		--card-font-size: 1em;
	}

	@media (max-width: 640px) {
		:host {
			font-size: var(--vscode-editor-font-size);
			--h1-font-size: 1em;
			--p-font-size: 1em;
			--card-font-size: 1em;
		}
	}

	@media (max-width: 300px) {
		:host {
			font-size: calc(var(--vscode-editor-font-size) * 0.8);
		}
	}
`,cY=D`
	:host {
		--page-margin-left: 0px;
		--page-margin-right: 0px;
		display: block;
		height: 100%;
	}

	.welcome {
		max-height: 100%;
		overflow: auto;
		position: relative;
	}
`,cJ=D`
	.welcome::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-40%);
		z-index: -1;

		background: var(--hero-gradient);
		border-radius: 100%;
		opacity: 0.25;
		filter: blur(53px);

		width: 620px;
		height: 517px;
		max-width: 100%;
	}

	@media (max-width: 400px) {
		.welcome::before {
			height: 273px;
		}
	}
`,cX=D`
	.section {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.section h1 {
		color: var(--em-color);
	}
	.section h2 {
		color: var(--em-color);
		font-weight: normal;
		font-size: var(--p-font-size);
	}
	.section p {
		color: var(--text-color);
	}
	.section .accent {
		color: var(--accent-color);
	}
	.section a {
		color: var(--link-color);
		text-decoration: none;
	}

	.section.plain p {
		max-width: 30em;
		font-size: var(--p-font-size);
	}

	.section.start-trial {
		display: flex;
		gap: 0.5em;
		margin: 2em 3.1em 1.5em;
	}
	.section.start-trial p {
		width: 100%;
	}
	.section.start-trial gl-button.start-trial-button {
		background: var(--trial-button-gradient);
		border: var(--trial-button-border);
		color: var(--trial-button-text-color);
	}
	.section.start-trial gl-button {
		width: 100%;
	}

	@media (min-width: 640px) {
		.section.start-trial gl-button {
			width: initial;
		}
		.section.start-trial gl-button.start-trial-button {
			--button-padding: 0.4em 4em;
		}
	}

	@media (max-width: 400px) {
		.section.start-trial {
			margin: 2em 0 1.5em;
		}
	}

	.section.wide {
		margin-left: calc(-1 * var(--page-margin-left));
		margin-right: calc(-1 * var(--page-margin-right));
	}
`,cQ=D`
	.logo {
		transform: scale(0.7);
	}

	.header {
		margin-top: 3em;
		max-width: 620px;
		margin-left: auto;
		margin-right: auto;
	}
	.header gitlens-logo {
		transform: translateX(-0.75rem);
	}
	.header h1 {
		margin-bottom: 0;
		font-size: var(--h1-font-size);
	}

	@media (max-width: 640px) {
		.logo {
			transform: scale(0.5);
		}
		.header {
			margin-top: 1.5em;
		}
	}
`,c0=D`
	.card {
		border-radius: 0.63em;
		background-color: var(--card-background);
		padding: 1.8em;
		text-align: initial;
	}

	@media (max-width: 640px) {
		.card {
			padding: 1em;
		}
	}

	@media (max-width: 300px) {
		.card {
			padding: 0.5em 0.5em 1em;
		}
	}

	.card h1 {
		margin: 0;
		font-size: var(--card-font-size);
	}

	.card p {
		margin: 0.5em 0 0;
		font-size: var(--card-font-size);
	}

	.card p:last-child {
		margin: 1em 0 0;
	}

	.card img {
		max-width: 100%;
	}
`,c1=D`
	gl-scrollable-features {
		--side-shadow-padding: max(var(--page-margin-left), var(--page-margin-right));
		--side-shadow-color: var(--page-background-color);
	}
`,c2=D`
	${cZ} ${cK} ${cY}
	${cJ} ${cX} ${cQ}
	${c1}
	${c0}
`;var c3=Object.defineProperty,c5=Object.getOwnPropertyDescriptor;let c4=class extends lit_element_i{render(){return ek`<svg
			alt="GitLens"
			width="159"
			height="46"
			viewBox="0 0 159 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="23" cy="23" r="23" fill="#04090D" />
			<circle cx="23" cy="23" r="23" fill="url(#paint0_linear_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint1_radial_43_72231)" />
			<circle cx="23" cy="23" r="23" fill="url(#paint2_radial_43_72231)" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23 45.0272C35.1653 45.0272 45.0272 35.1653 45.0272 23C45.0272 10.8347 35.1653 0.97281 23 0.97281C10.8347 0.97281 0.97281 10.8347 0.97281 23C0.97281 35.1653 10.8347 45.0272 23 45.0272ZM23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
				fill="white"
				style="mix-blend-mode:soft-light"
			/>
			<mask id="path-3-inside-1_43_72231" fill="white">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				/>
			</mask>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M23.7041 11.4729C23.9472 12.1964 23.9225 12.949 23.6825 13.6317C24.3067 14.1892 24.9927 14.8352 25.7364 15.5815C27.588 17.4394 28.8416 18.9594 29.656 20.0599C30.0572 19.9115 30.4909 19.8304 30.9435 19.8304C32.9992 19.8304 34.6656 21.5026 34.6656 23.5653C34.6656 25.628 32.9992 27.3002 30.9435 27.3002C28.8879 27.3002 27.2214 25.628 27.2214 23.5653C27.2214 22.6041 27.5833 21.7277 28.1778 21.0658C27.371 20.0286 26.204 18.6439 24.5714 16.9401C23.9124 16.2524 23.2877 15.641 22.7043 15.0996C22.3317 15.4388 21.881 15.7102 21.3681 15.8837C21.1476 15.9583 20.9254 16.0115 20.7039 16.0445C20.574 17.5426 20.4653 19.5952 20.4653 22.2681C20.4653 26.1145 20.6904 28.6762 20.8797 30.15C21.4 30.21 21.9245 30.3776 22.4173 30.6606C24.1985 31.6832 24.8932 33.826 23.969 35.4466C23.0449 37.0672 20.8519 37.552 19.0708 36.5294C17.2897 35.5067 16.595 33.3639 17.5191 31.7433C17.8825 31.1061 18.4421 30.6444 19.0957 30.381C18.8672 29.0854 18.6075 26.6547 18.6075 22.2997C18.6075 19.3649 18.7255 17.295 18.8723 15.8552C17.9399 15.5066 17.1791 14.7792 16.8475 13.7923C16.2443 11.9967 17.2902 10.0219 19.1835 9.38139C21.0769 8.74091 23.1009 9.6773 23.7041 11.4729Z"
				fill="url(#paint3_linear_43_72231)"
			/>
			<path
				d="M23.6825 13.6317L22.7391 13.3001L22.517 13.9317L23.0164 14.3776L23.6825 13.6317ZM23.7041 11.4729L24.652 11.1544L23.7041 11.4729ZM25.7364 15.5815L25.0281 16.2874V16.2874L25.7364 15.5815ZM29.656 20.0599L28.8521 20.6547L29.2988 21.2583L30.003 20.9978L29.656 20.0599ZM28.1778 21.0658L28.9218 21.734L29.4805 21.1119L28.9671 20.4518L28.1778 21.0658ZM24.5714 16.9401L23.8494 17.632V17.632L24.5714 16.9401ZM22.7043 15.0996L23.3845 14.3666L22.7107 13.7413L22.031 14.3601L22.7043 15.0996ZM21.3681 15.8837L21.6885 16.831L21.6885 16.831L21.3681 15.8837ZM20.7039 16.0445L20.5567 15.0553L19.7758 15.1715L19.7076 15.9581L20.7039 16.0445ZM20.8797 30.15L19.8878 30.2774L19.9875 31.0538L20.7651 31.1434L20.8797 30.15ZM22.4173 30.6606L21.9194 31.5278H21.9194L22.4173 30.6606ZM23.969 35.4466L23.1004 34.9512L23.969 35.4466ZM19.0708 36.5294L19.5687 35.6621L19.0708 36.5294ZM17.5191 31.7433L18.3878 32.2387H18.3878L17.5191 31.7433ZM19.0957 30.381L19.4695 31.3085L20.2212 31.0056L20.0805 30.2074L19.0957 30.381ZM18.8723 15.8552L19.8671 15.9566L19.9454 15.1888L19.2225 14.9185L18.8723 15.8552ZM16.8475 13.7923L15.8996 14.1107L16.8475 13.7923ZM24.6259 13.9634C24.9355 13.0825 24.97 12.1009 24.652 11.1544L22.7562 11.7913C22.9243 12.2919 22.9094 12.8155 22.7391 13.3001L24.6259 13.9634ZM26.4448 14.8756C25.6877 14.116 24.9877 13.4565 24.3485 12.8858L23.0164 14.3776C23.6258 14.9218 24.2977 15.5545 25.0281 16.2874L26.4448 14.8756ZM30.4598 19.4651C29.6154 18.3239 28.3296 16.7669 26.4448 14.8756L25.0281 16.2874C26.8464 18.1119 28.0679 19.5949 28.8521 20.6547L30.4598 19.4651ZM30.9435 18.8304C30.3707 18.8304 29.8196 18.9331 29.309 19.122L30.003 20.9978C30.2948 20.8898 30.6112 20.8304 30.9435 20.8304V18.8304ZM35.6656 23.5653C35.6656 20.9535 33.5547 18.8304 30.9435 18.8304V20.8304C32.4437 20.8304 33.6656 22.0516 33.6656 23.5653H35.6656ZM30.9435 28.3002C33.5547 28.3002 35.6656 26.1771 35.6656 23.5653H33.6656C33.6656 25.079 32.4437 26.3002 30.9435 26.3002V28.3002ZM26.2214 23.5653C26.2214 26.1771 28.3323 28.3002 30.9435 28.3002V26.3002C29.4434 26.3002 28.2214 25.079 28.2214 23.5653H26.2214ZM27.4338 20.3976C26.6806 21.2362 26.2214 22.3484 26.2214 23.5653H28.2214C28.2214 22.8598 28.486 22.2192 28.9218 21.734L27.4338 20.3976ZM23.8494 17.632C25.4595 19.3123 26.6038 20.671 27.3884 21.6798L28.9671 20.4518C28.1382 19.3862 26.9486 17.9756 25.2934 16.2483L23.8494 17.632ZM22.024 15.8325C22.5932 16.3607 23.2039 16.9585 23.8494 17.632L25.2934 16.2483C24.6208 15.5464 23.9822 14.9212 23.3845 14.3666L22.024 15.8325ZM21.6885 16.831C22.3336 16.6128 22.9041 16.27 23.3775 15.839L22.031 14.3601C21.7593 14.6076 21.4283 14.8077 21.0476 14.9365L21.6885 16.831ZM20.851 17.0336C21.1313 16.9919 21.4115 16.9247 21.6885 16.831L21.0476 14.9365C20.8838 14.9919 20.7195 15.0311 20.5567 15.0553L20.851 17.0336ZM21.4653 22.2681C21.4653 19.6222 21.5729 17.5986 21.7001 16.1308L19.7076 15.9581C19.5751 17.4867 19.4653 19.5681 19.4653 22.2681H21.4653ZM21.8715 30.0227C21.6881 28.5945 21.4653 26.0756 21.4653 22.2681H19.4653C19.4653 26.1534 19.6927 28.7578 19.8878 30.2774L21.8715 30.0227ZM20.7651 31.1434C21.1508 31.1879 21.5448 31.3127 21.9194 31.5278L22.9153 29.7933C22.3041 29.4425 21.6492 29.2321 20.9942 29.1566L20.7651 31.1434ZM21.9194 31.5278C23.3025 32.3219 23.7079 33.8857 23.1004 34.9512L24.8377 35.9419C26.0784 33.7662 25.0944 31.0445 22.9153 29.7933L21.9194 31.5278ZM23.1004 34.9512C22.4943 36.0141 20.9505 36.4555 19.5687 35.6621L18.5729 37.3966C20.7533 38.6485 23.5955 38.1204 24.8377 35.9419L23.1004 34.9512ZM19.5687 35.6621C18.1856 34.868 17.7802 33.3042 18.3878 32.2387L16.6504 31.248C15.4097 33.4237 16.3938 36.1454 18.5729 37.3966L19.5687 35.6621ZM18.3878 32.2387C18.6319 31.8105 19.01 31.4937 19.4695 31.3085L18.7218 29.4535C17.8741 29.7952 17.133 30.4016 16.6504 31.248L18.3878 32.2387ZM17.6075 22.2997C17.6075 26.6892 17.8689 29.1823 18.1108 30.5546L20.0805 30.2074C19.8656 28.9885 19.6075 26.6202 19.6075 22.2997H17.6075ZM17.8775 15.7537C17.7264 17.2346 17.6075 19.3393 17.6075 22.2997H19.6075C19.6075 19.3905 19.7245 17.3553 19.8671 15.9566L17.8775 15.7537ZM15.8996 14.1107C16.3345 15.4053 17.33 16.3461 18.5221 16.7919L19.2225 14.9185C18.5498 14.667 18.0237 14.1531 17.7955 13.4738L15.8996 14.1107ZM18.8631 8.43412C16.4958 9.23492 15.1049 11.7452 15.8996 14.1107L17.7955 13.4738C17.3837 12.2482 18.0845 10.8088 19.504 10.3287L18.8631 8.43412ZM24.652 11.1544C23.8567 8.78703 21.2317 7.6329 18.8631 8.43412L19.504 10.3287C20.9222 9.84892 22.345 10.5676 22.7562 11.7913L24.652 11.1544Z"
				fill="white"
				style="mix-blend-mode:soft-light"
				mask="url(#path-3-inside-1_43_72231)"
			/>
			<path
				d="M71.554 18.5081C71.0032 17.4524 70.2382 16.6607 69.2591 16.1328C68.2799 15.5846 67.1477 15.3106 65.8626 15.3106C64.455 15.3106 63.2005 15.6252 62.0989 16.2546C60.9974 16.884 60.1304 17.7773 59.498 18.9345C58.8861 20.0917 58.5801 21.4317 58.5801 22.9543C58.5801 24.477 58.8861 25.8271 59.498 27.0046C60.1304 28.1618 60.9974 29.0551 62.0989 29.6845C63.2005 30.3138 64.455 30.6285 65.8626 30.6285C67.7597 30.6285 69.2999 30.1007 70.483 29.0449C71.6662 27.9892 72.3903 26.5579 72.6555 24.7511H64.6692V21.9798H76.3886C76.3886 21.9798 76.4973 22.789 76.4973 23.4052C76.4973 23.9332 76.3886 24.6901 76.3886 24.6901C76.1642 26.3346 75.5726 27.8471 74.6139 29.2277C73.6755 30.6082 72.4413 31.7147 70.9114 32.5471C69.4019 33.3592 67.7189 33.7652 65.8626 33.7652C63.8635 33.7652 62.0377 33.3084 60.3854 32.3948C58.7331 31.4609 57.4173 30.1717 56.4381 28.5272C55.4794 26.8828 55 25.0251 55 22.9543C55 20.8835 55.4794 19.0259 56.4381 17.3814C57.4173 15.7369 58.7331 14.4579 60.3854 13.5443C62.0581 12.6104 63.8839 12.1434 65.8626 12.1434C68.1269 12.1434 70.1362 12.7017 71.8906 13.8184C73.6653 14.9147 74.9505 16.4779 75.746 18.5081H71.554Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path d="M82.7053 19.7872V33.5825H79.2171V19.7872H82.7053Z" fill="#F7DEFF" class="letters" />
			<path
				d="M90.7428 19.6349V28.9231C90.7428 29.5525 90.8856 30.0093 91.1712 30.2935C91.4772 30.5575 91.9872 30.6894 92.7011 30.6894H94.8431V33.5825H92.0892C90.5184 33.5825 89.3149 33.217 88.4785 32.4862C87.6421 31.7553 87.2239 30.5676 87.2239 28.9231V19.6349H85.235V16.8028H87.2239V12.4049H90.7428V16.8028H94.8431V19.6349H90.7428Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M100.934 30.7808H109.505V33.5825H97.4461V12.4175H100.934V30.7808Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M125.883 24.7815C125.883 25.4109 125.842 25.9793 125.76 26.4869H112.878C112.98 27.8268 113.48 28.9028 114.378 29.7149C115.275 30.527 116.377 30.933 117.682 30.933C119.559 30.933 120.885 30.1514 121.66 28.5882H125.424C124.914 30.1311 123.986 31.4 122.639 32.3948C121.313 33.3693 119.661 33.8566 117.682 33.8566C116.071 33.8566 114.622 33.5013 113.337 32.7907C112.072 32.0598 111.073 31.0447 110.339 29.7454C109.625 28.4257 109.268 26.9031 109.268 25.1774C109.268 23.4517 109.614 21.9392 110.308 20.6399C111.022 19.3202 112.011 18.3051 113.276 17.5946C114.561 16.884 116.03 16.5287 117.682 16.5287C119.273 16.5287 120.691 16.8738 121.935 17.5641C123.18 18.2544 124.149 19.2289 124.842 20.4876C125.536 21.726 125.883 23.1573 125.883 24.7815ZM122.241 23.6852C122.221 22.4062 121.762 21.3809 120.865 20.6094C119.967 19.8379 118.855 19.4522 117.529 19.4522C116.326 19.4522 115.296 19.8379 114.439 20.6094C113.582 21.3606 113.072 22.3859 112.909 23.6852H122.241Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M136.29 16.5287C137.616 16.5287 138.799 16.8028 139.84 17.3509C140.901 17.8991 141.727 18.7112 142.318 19.7872C142.91 20.8632 143.206 22.1625 143.206 23.6852V33.5825H139.748V24.2029C139.748 22.7005 139.371 21.5535 138.616 20.7617C137.861 19.9496 136.831 19.5436 135.525 19.5436C134.22 19.5436 133.179 19.9496 132.404 20.7617C131.65 21.5535 131.272 22.7005 131.272 24.2029V33.5825H127.784V16.8028H131.272V18.7213C131.843 18.031 132.568 17.493 133.445 17.1073C134.342 16.7216 135.291 16.5287 136.29 16.5287Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M152.243 33.8566C150.917 33.8566 149.724 33.6231 148.663 33.1561C147.623 32.6689 146.797 32.0192 146.185 31.2071C145.573 30.3747 145.246 29.451 145.206 28.4359H148.816C148.877 29.1465 149.214 29.7454 149.826 30.2326C150.458 30.6996 151.244 30.933 152.182 30.933C153.161 30.933 153.916 30.7503 154.446 30.3849C154.997 29.9991 155.273 29.5119 155.273 28.9231C155.273 28.2938 154.967 27.8268 154.355 27.5223C153.763 27.2178 152.815 26.8828 151.509 26.5173C150.244 26.1722 149.214 25.8372 148.418 25.5124C147.623 25.1875 146.929 24.6901 146.338 24.0202C145.767 23.3502 145.481 22.4671 145.481 21.3707C145.481 20.4775 145.746 19.6654 146.277 18.9345C146.807 18.1833 147.562 17.5946 148.541 17.1682C149.54 16.7419 150.683 16.5287 151.968 16.5287C153.885 16.5287 155.426 17.0159 156.588 17.9904C157.772 18.9446 158.404 20.2541 158.486 21.9189H154.997C154.936 21.1677 154.63 20.5688 154.079 20.1222C153.528 19.6755 152.784 19.4522 151.846 19.4522C150.928 19.4522 150.224 19.6248 149.734 19.9699C149.245 20.315 149 20.7718 149 21.3403C149 21.7869 149.163 22.1625 149.489 22.4671C149.816 22.7716 150.214 23.0152 150.683 23.1979C151.152 23.3604 151.846 23.5735 152.764 23.8375C153.987 24.1623 154.987 24.4973 155.762 24.8424C156.558 25.1672 157.241 25.6545 157.812 26.3042C158.384 26.9538 158.679 27.8167 158.7 28.8927C158.7 29.8469 158.435 30.6996 157.904 31.4508C157.374 32.2019 156.619 32.7907 155.64 33.217C154.681 33.6434 153.549 33.8566 152.243 33.8566Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<path
				d="M83.4777 14.9015C83.4777 16.2735 82.3602 17.3857 80.9817 17.3857C79.6031 17.3857 78.4856 16.2735 78.4856 14.9015C78.4856 13.5295 79.6031 12.4173 80.9817 12.4173C82.3602 12.4173 83.4777 13.5295 83.4777 14.9015Z"
				fill="#F7DEFF"
				class="letters"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_43_72231"
					x1="-5.14199"
					y1="15.148"
					x2="35.1957"
					y2="53.4671"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#F1C6FF" />
					<stop offset="0.104167" stop-color="#DD74FF" />
					<stop offset="0.352245" stop-color="#DD74FF" stop-opacity="0" />
					<stop offset="0.62022" stop-color="#4E032E" stop-opacity="0" />
					<stop offset="0.825426" stop-color="#3C17A7" />
					<stop offset="1" stop-color="#3687FF" />
				</linearGradient>
				<radialGradient
					id="paint1_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(51.1591 15.2989) rotate(138.744) scale(31.2464 31.2515)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#00A3FF" stop-opacity="0" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_43_72231"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(-2.91103 29.7569) rotate(42.9991) scale(28.6895 28.728)"
				>
					<stop stop-color="#00A3FF" />
					<stop offset="1" stop-color="#0D1017" stop-opacity="0" />
				</radialGradient>
				<linearGradient
					id="paint3_linear_43_72231"
					x1="23.4169"
					y1="14.5226"
					x2="41.2576"
					y2="49.9689"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="white" />
					<stop offset="1" stop-color="#B7E1FF" stop-opacity="0.58" />
				</linearGradient>
			</defs>
		</svg>`}};c4.styles=[D`
			:host {
				display: inline-block;
				vertical-align: middle;
			}

			:host-context(.vscode-high-contrast-light) .letters,
			:host-context(.vscode-light) .letters {
				fill: var(--color-foreground);
			}

			svg {
				vertical-align: middle;
			}
		`],c4=((e,t,r,o)=>{for(var i,n=o>1?void 0:o?c5(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&c3(t,r,n),n})([eE("gitlens-logo")],c4);var c6=Object.defineProperty,c8=Object.getOwnPropertyDescriptor,c7=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?c8(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&c6(t,r,n),n};let c9=class extends lit_element_i{constructor(){super(...arguments),this.currentIndex=0}firstUpdated(){this.updateActiveCard(),this.requestUpdate()}updateActiveCard(){this.cards.forEach((e,t)=>{t===this.currentIndex?e.setAttribute("data-active",""):e.removeAttribute("data-active")})}handlePrevious(){0!==this.cards.length&&(this.currentIndex=(this.currentIndex-1+this.cards.length)%this.cards.length,this.updateActiveCard())}handleNext(){0!==this.cards.length&&(this.currentIndex=(this.currentIndex+1)%this.cards.length,this.updateActiveCard())}handleSlotChange(){this.currentIndex=0,this.updateActiveCard()}handleDotClick(e){this.currentIndex=e,this.updateActiveCard()}render(){return ek`
			<div class="carousel">
				<div class="content">
					<slot @slotchange=${this.handleSlotChange}></slot>
				</div>

				<gl-button
					class="button previous"
					appearance="input"
					@click=${this.handlePrevious}
					aria-label="Previous feature"
				>
					<code-icon icon="chevron-left" size="20"></code-icon>
				</gl-button>
				<div class="dots">
					${this.cards.map((e,t)=>ek`
							<span
								class="dot"
								?data-active=${t===this.currentIndex}
								@click=${()=>this.handleDotClick(t)}
								role="button"
								tabindex="0"
								aria-label="Go to feature ${t+1}"
								@keydown=${e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.handleDotClick(t))}}
							></span>
						`)}
				</div>
				<gl-button class="button next" appearance="input" @click=${this.handleNext} aria-label="Next feature">
					<code-icon icon="chevron-right" size="20"></code-icon>
				</gl-button>
			</div>
		`}};c9.styles=[D`
			:host {
				--active-dot-color: var(--text-color);
				--inactive-dot-color: var(--card-background);
				display: block;
				width: 100%;
			}

			.carousel {
				display: grid;
				grid-template-columns: 0fr auto 0fr;
				grid-template-rows: auto 0fr;
				gap: 1em;
				justify-content: center;
			}

			.button {
				display: flex;
				align-items: center;
			}
			.button.previous {
				grid-column: 1;
				grid-row: 1;
			}
			.button.next {
				grid-column: 3;
				grid-row: 1;
			}

			.content {
				max-width: 520px;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				grid-column: 2;
				grid-row: 1;
			}

			.dots {
				display: flex;
				align-items: center;
				gap: 0;
				justify-content: center;
				grid-column: 2;
				grid-row: 2;
			}

			.dot {
				padding: 0.5em;
				cursor: pointer;
				position: relative;
			}

			.dot::before {
				content: '';
				display: block;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background-color: var(--inactive-dot-color);
				transition: background-color 0.2s ease;
			}

			.dot:hover::before {
				background-color: var(--active-dot-color);
			}

			.dot[data-active]::before {
				background-color: var(--active-dot-color);
			}

			::slotted(*) {
				display: none;
			}

			::slotted([data-active]) {
				display: flex;
				width: 100%;
			}

			@media (max-width: 400px) {
				.carousel {
					display: grid;
					grid-template-columns: 1fr auto 1fr;
					grid-template-rows: auto 0fr;
					gap: 0.5em;
				}
				.content {
					grid-column: 1 / span 3;
					grid-row: 1;
				}
				.button {
					display: block;
				}
				.button.previous {
					grid-column: 1;
					grid-row: 2;
				}
				.button.next {
					grid-column: 3;
					grid-row: 2;
				}
			}
		`],c7([ej({flatten:!0})],c9.prototype,"cards",2),c7([ez()],c9.prototype,"currentIndex",2),c9=c7([eE("gl-feature-carousel")],c9);let de=class extends lit_element_i{constructor(){super(...arguments),this.hasBeenVisible=!1,this._dataActive=!1}updated(e){var t,r;let o,i,n,a;super.updated(e);let c=function(e){let t=window.getComputedStyle(e);if("none"===t.display||"hidden"===t.visibility||"0"===t.opacity)return!1;let r=e.getBoundingClientRect();return 0!==r.width&&0!==r.height}(this);if(!c||this.hasBeenVisible)return;let h=(t=this,(o=t.getBoundingClientRect()).top>=0&&o.left>=0&&o.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)),p=(r=this,i=r.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,a=window.innerWidth||document.documentElement.clientWidth,i.bottom>0&&i.right>0&&i.top<n&&i.left<a);c&&(h||p)&&!this.hasBeenVisible&&(this.hasBeenVisible=!0,this.dispatchEvent(new CustomEvent("gl-feature-appeared",{detail:{changedProperties:Array.from(e.keys()),visibility:{isVisible:c,isInViewport:h,isPartiallyInViewport:p}},bubbles:!0,composed:!0})))}render(){return ek`
			<div class="image">
				<slot name="image"></slot>
			</div>
			<div class="content">
				<slot></slot>
			</div>
		`}};de.styles=[D`
			:host {
				display: flex;
				gap: 1em;
			}

			.image {
				flex: 1 1 50%;
				width: 50%;
			}

			.content {
				margin-top: 0.5em;
				flex: 1 0 50%;
				display: block;
			}

			@media (max-width: 400px) {
				:host {
					flex-direction: column;
				}

				.image {
					width: 100%;
				}

				.content {
					margin-top: 0;
					margin-left: 0.3em;
					margin-right: 0.3em;
				}

				::slotted(*) {
					width: 100%;
				}
			}
		`],c7([eD({type:Boolean,reflect:!0,attribute:"data-active"})],de.prototype,"_dataActive",2),de=c7([eE("gl-feature-card")],de);let dt=class extends lit_element_i{render(){return ek`<slot></slot>`}};dt.styles=[D`
			:host {
				display: block;
				width: 12em;
				min-width: 12em;
				text-align: initial;
			}

			::slotted(p:last-child) {
				margin-top: 0.5em;
			}

			@media (max-width: 400px) {
				:host {
					width: 100%;
					box-sizing: border-box;
					min-width: initial;
					padding-left: 0.3em;
					padding-right: 0.3em;
				}
			}
		`],dt=c7([eE("gl-feature-narrow-card")],dt);let dr=class extends lit_element_i{render(){return ek`<div class="content"><slot></slot></div>`}};dr.styles=[D`
			:host {
				--side-shadow-padding: 1em;
				--side-shadow-color: transparent;

				--final-side-shadow-padding: max(var(--side-shadow-padding), 1em);
				position: relative;
				max-width: 100%;
			}

			:host::before,
			:host::after {
				content: ' ';
				position: absolute;
				display: block;
				top: 0;
				width: var(--final-side-shadow-padding);
				height: 100%;
			}

			:host::before {
				left: 0;
				background: linear-gradient(to left, transparent 0%, var(--side-shadow-color) 83%);
			}
			:host::after {
				right: 0;
				background: linear-gradient(to right, transparent 0%, var(--side-shadow-color) 83%);
			}

			.content {
				box-sizing: border-box;
				padding: 0 var(--final-side-shadow-padding);
				display: flex;
				gap: 1em;
				overflow-x: auto;
				overflow-y: hidden;
				scrollbar-width: none;
				scroll-snap-type: x proximity;
			}

			::slotted(*) {
				scroll-snap-align: center;
			}

			@media (max-width: 400px) {
				:host::before,
				:host::after {
					content: none;
				}
				.content {
					flex-direction: column;
					gap: 0.5em;
				}
			}
		`],dr=c7([eE("gl-scrollable-features")],dr);var di=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,da=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?dn(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&di(t,r,n),n};let ds=class extends lit_element_i{constructor(){super(...arguments),this.telemetryData={viewedCarouselPages:0,proButtonClicked:!1},this.closeable=!1,this.isLightTheme=!1}connectedCallback(){super.connectedCallback?.(),this._telemetry.sendEvent({name:"welcome/action",data:{name:"shown"},source:{source:"welcome"}})}onStartTrial(){this.telemetryData.proButtonClicked=!0,this._telemetry.sendEvent({name:"welcome/action",data:{name:"plus/sign-up",viewedCarouselPages:this.telemetryData.viewedCarouselPages},source:{source:"welcome"}}),this._ipc.sendCommand(t3,{command:"gitlens.plus.signUp",args:[{source:"welcome"}]})}onClose(){this._telemetry.sendEvent({name:"welcome/action",data:{name:"dismiss",viewedCarouselPages:this.telemetryData.viewedCarouselPages,proButtonClicked:this.telemetryData.proButtonClicked},source:{source:"welcome",detail:"dismiss-in-body"}}),this.dispatchEvent(new CustomEvent("close"))}onFeatureAppeared(){this.telemetryData.viewedCarouselPages++}getTelemetryData(){return{...this.telemetryData}}render(){let e=this.isLightTheme?"light":"dark";return ek`
			<div part="page" class="welcome scrollable">
				<div class="section plain header">
					<div class="logo"><gitlens-logo></gitlens-logo></div>
					<h1>GitLens is now installed in ${this._state.hostAppName}</h1>
					<p>
						Understand every line of code — instantly. GitLens reveals authorship, activity, and history
						inside the editor
					</p>
				</div>
				<div class="section plain">
					<h2>With <span class="accent">PRO</span> subscription you get more</h2>
				</div>

				<div class="section">
					<gl-feature-carousel @gl-feature-appeared=${this.onFeatureAppeared}>
						<gl-feature-card class="card">
							<img
								slot="image"
								src="${this.webroot??""}/media/feature-graph-${e}.webp"
								alt="Commit Graph"
							/>
							<h1>Interact with Your Repository History</h1>
							<p>
								Use the Commit Graph to visualize branches, search for changes, and navigate complex
								history.
							</p>
							<p><a href="command:gitlens.showGraph">View your Commit Graph</a></p>
						</gl-feature-card>
						<gl-feature-card class="card">
							<img
								slot="image"
								src="${this.webroot??""}/media/feature-commit-composer-${e}.webp"
								alt="Commit Composer"
							/>
							<h1>Commit Smarter, Not Harder</h1>
							<p>
								Focus on building, then let AI generate a sequence of commits with descriptive
								summaries.
							</p>
							<p><a href="command:gitlens.composeCommits">Open Commit Composer</a></p>
						</gl-feature-card>
						<gl-feature-card class="card">
							<img
								slot="image"
								src="${this.webroot??""}/media/feature-timeline-${e}.webp"
								alt="Visual File History"
							/>
							<h1>Visualize Your Code's Evolution</h1>
							<p>
								See how a file has changed over time when changes were made, the size of those changes,
								and who made them.
							</p>
							<p><a href="command:gitlens.showTimelineView">Open Visual File History</a></p>
						</gl-feature-card>
						<gl-feature-card class="card">
							<img
								slot="image"
								src="${this.webroot??""}/media/feature-launchpad-${e}.webp"
								alt="Launchpad"
							/>
							<h1>Streamline Pull Request Management</h1>
							<p>Launchpad integrates PR workflows directly into your editor.</p>
							<p><a href="command:gitlens.showLaunchpad">View my PRs in Launchpad</a></p>
						</gl-feature-card>
					</gl-feature-carousel>
				</div>

				<div class="section start-trial">
					<gl-button class="start-trial-button" @click=${()=>this.onStartTrial()}
						>Start GitLens Pro Trial</gl-button
					>
					${this.closeable?ek`<gl-button appearance="secondary" density="tight" @click=${()=>this.onClose()}
								>Dismiss Welcome Overlay</gl-button
							>`:eC}
				</div>

				<div class="section plain">
					<h2>You also get these free features</h2>
				</div>

				<div class="section wide">
					<gl-scrollable-features>
						<gl-feature-narrow-card class="card">
							<h1>Blame Annotations & Hovers</h1>
							<p>See who changed what and why with inline blame, hovers, and CodeLens.</p>
							<p>
								<a href="${"https://help.gitkraken.com/gitlens/gitlens-features/?utm_source=gitlens-extension&utm_medium=in-app-links#current-line-blame"}">Learn more about inline blame</a>
							</p>
						</gl-feature-narrow-card>
						<gl-feature-narrow-card class="card">
							<h1>Autolinks</h1>
							<p>Get links to pull requests and issues right from a commit message</p>
							<p>
								<a href="command:gitlens.showSettingsPage!autolinks">Configure autolinks</a>
							</p>
						</gl-feature-narrow-card>
						<gl-feature-narrow-card class="card">
							<h1>GitLens Inspect</h1>
							<p>Dive deep into the revision history of files, folders, or specific lines.</p>
							<p><a href="command:gitlens.showCommitDetailsView">Open GitLens Inspect</a></p>
						</gl-feature-narrow-card>
						<gl-feature-narrow-card class="card">
							<h1>Revision Navigation</h1>
							<p>Step through the history of a file to trace its evolution over time.</p>
							<p><a href="${"https://help.gitkraken.com/gitlens/gitlens-features/?utm_source=gitlens-extension&utm_medium=in-app-links#revision-navigation"}">Learn about Revision Navigation</a></p>
						</gl-feature-narrow-card>
					</gl-scrollable-features>
				</div>
			</div>
		`}};ds.styles=[oT,c2],da([eD({type:Boolean})],ds.prototype,"closeable",2),da([eD({type:String})],ds.prototype,"webroot",2),da([eD({type:Boolean})],ds.prototype,"isLightTheme",2),da([P({context:"state",subscribe:!0}),ez()],ds.prototype,"_state",2),da([P({context:"ipc"})],ds.prototype,"_ipc",2),da([P({context:"telemetry"})],ds.prototype,"_telemetry",2),ds=da([eE("gl-welcome-page")],ds);var dl=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,dd=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?dc(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&dl(t,r,n),n};let dh=class extends lit_element_i{constructor(){super(...arguments),this.isLightTheme=!1,this.closed=!1}render(){let{welcomeOverlayCollapsed:e,walkthroughSupported:t,newInstall:r,subscription:o}=this._state;return this.closed||e||t||!r||oX(o.state)?eC:ek`
			<div class="overlay">
				<div class="close-button">
					<gl-button appearance="toolbar" tooltip="Dismiss Welcome Overlay" @click=${()=>this.onClose()}
						><code-icon icon="close"></code-icon
					></gl-button>
				</div>
				<gl-welcome-page
					.webroot=${this.webroot}
					.isLightTheme=${this.isLightTheme}
					closeable
					@close=${()=>this.onClose()}
				></gl-welcome-page>
			</div>
		`}onClose(){this.closed=!0;let e=this.welcomePage?.getTelemetryData();this._telemetry.sendEvent({name:"welcome/action",data:{name:"dismiss",viewedCarouselPages:e?.viewedCarouselPages,proButtonClicked:e?.proButtonClicked},source:{source:"welcome",detail:"close-on-overlay"}}),this._ipc.sendCommand(eY,{section:"welcomeOverlay",collapsed:!0})}};dh.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},dh.styles=[D`
			:host {
				--background-color: var(--vscode-sideBar-background);
				--shadow-color: var(--vscode-sideBar-foreground);
				--dialog-margin: 1rem;
				--scrollbar-width: 10px;
			}

			.overlay {
				display: block;
				position: fixed;
				inset: 0;
				overflow: auto;
				background-color: var(--background-color);
			}

			.close-button {
				position: fixed;
				top: 12px;
				right: 12px;
				z-index: 2;
			}

			gl-welcome-page {
				--page-background-color: var(--background-color);
				--page-margin-left: var(--dialog-margin);
				--page-margin-right: var(--dialog-margin);
			}

			gl-welcome-page::part(page) {
				padding: var(--dialog-margin);
				box-sizing: border-box;
			}
		`],dd([eD({type:String})],dh.prototype,"webroot",2),dd([eD({type:Boolean})],dh.prototype,"isLightTheme",2),dd([P({context:"state",subscribe:!0}),ez()],dh.prototype,"_state",2),dd([P({context:"ipc",subscribe:!0}),ez()],dh.prototype,"_ipc",2),dd([P({context:"telemetry"})],dh.prototype,"_telemetry",2),dd([eN("gl-welcome-page")],dh.prototype,"welcomePage",2),dd([ez()],dh.prototype,"closed",2),dh=dd([eE("gl-welcome-overlay")],dh);var dp=Object.defineProperty,du=Object.getOwnPropertyDescriptor,dg=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?du(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&dp(t,r,n),n};let dm=class extends lit_element_i{constructor(){super(...arguments),this.source="unknown",this.layout="default",this.collapsed=!1,this.canAutoRegister=!1}render(){if(this.collapsed)return eC;if(this.canAutoRegister){let e=`GitKraken MCP is active in your AI chat, leveraging Git and your integrations to provide context and perform actions. <a href="${ra.helpCenterMCP}">Learn more</a>`;return ek`
				<gl-banner
					exportparts="base"
					display="gradient-purple"
					layout="${this.layout}"
					banner-title="GitKraken MCP Bundled with GitLens"
					body="${e}"
					dismissible
					dismiss-href="${oQ("gitlens.storage.store",{key:"mcp:banner:dismissed",value:!0})}"
				></gl-banner>
			`}let e=`Leverage Git and your integrations (issues, PRs, etc) to provide context and perform actions in AI chat. <a href="${ra.helpCenterMCP}">Learn more</a>`;return ek`
			<gl-banner
				exportparts="base"
				display="gradient-purple"
				layout="${this.layout}"
				banner-title="Install GitKraken MCP for GitLens"
				body="${e}"
				primary-button="Install GitKraken MCP"
				primary-button-href="${oQ("gitlens.ai.mcp.install",{source:this.source})}"
				dismissible
				dismiss-href="${oQ("gitlens.storage.store",{key:"mcp:banner:dismissed",value:!0})}"
			></gl-banner>
		`}};dm.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},dm.styles=[D`
			:host {
				display: block;
			}

			gl-banner {
				margin-bottom: 1.2rem;
			}

			:host([layout='responsive']) gl-banner {
				margin-bottom: 0;
				width: 100%;
			}
		`],dg([eD()],dm.prototype,"source",2),dg([eD()],dm.prototype,"layout",2),dg([eD({type:Boolean})],dm.prototype,"collapsed",2),dg([eD({type:Boolean})],dm.prototype,"canAutoRegister",2),dm=dg([eE("gl-mcp-banner")],dm);var db=Object.defineProperty,df=Object.getOwnPropertyDescriptor,dv=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?df(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&db(t,r,n),n};let dw=class extends GlElement{get hasAlerts(){return!0===this.alertVisibility.header||void 0}get alertVisibility(){let e={header:!1,untrusted:!1,noRepo:!1,unsafeRepo:!1};return null==this._state||this._state.discovering||(this._state.repositories.trusted?0===this._state.repositories.openCount?(e.header=!0,e.noRepo=!0):this._state.repositories.hasUnsafe&&(e.header=!0,e.unsafeRepo=!0):(e.header=!0,e.untrusted=!0)),e}render(){if(null!=this._state&&this.alertVisibility.header)return ek`
			${eF(this.alertVisibility.noRepo,()=>ek`
					<div id="no-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">No repository detected</h1>
						<div class="alert__description">
							<p>
								To use GitLens, open a folder containing a git repository or clone from a URL from the
								Explorer.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.scm"
									>Open a Folder or Repository</gl-button
								>
							</p>
							<p class="mb-0">
								If you have opened a folder with a repository, please let us know by
								<a class="one-line" href="https://github.com/gitkraken/vscode-gitlens/issues/new/choose"
									>creating an Issue</a
								>.
							</p>
						</div>
					</div>
				`)}
			${eF(this.alertVisibility.unsafeRepo,()=>ek`
					<div id="unsafe-repo-alert" class="alert alert--info mb-0">
						<h1 class="alert__title">Unsafe repository</h1>
						<div class="alert__description">
							<p>
								Unable to open any repositories as Git blocked them as potentially unsafe, due to the
								folder(s) not being owned by the current user.
							</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.view.scm"
									>Manage in Source Control</gl-button
								>
							</p>
						</div>
					</div>
				`)}
			${eF(this.alertVisibility.untrusted,()=>ek`
					<div id="untrusted-alert" class="alert alert--info mb-0" aria-hidden="true">
						<h1 class="alert__title">Untrusted workspace</h1>
						<div class="alert__description">
							<p>Unable to open repositories in Restricted Mode.</p>
							<p class="centered">
								<gl-button class="is-basic" href="command:workbench.trust.manage"
									>Manage Workspace Trust</gl-button
								>
							</p>
						</div>
					</div>
				`)}
		`}};dw.styles=[oE,oD,oM,D`
			.alert {
				margin-bottom: 0;
			}

			.centered {
				text-align: center;
			}

			.one-line {
				white-space: nowrap;
			}

			gl-button.is-basic {
				max-width: 300px;
				width: 100%;
			}
			gl-button.is-basic + gl-button.is-basic {
				margin-top: 1rem;
			}
		`],dv([eD({type:Boolean,reflect:!0,attribute:"has-alerts"})],dw.prototype,"hasAlerts",1),dv([P({context:"state",subscribe:!0}),ez()],dw.prototype,"_state",2),dw=dv([eE("gl-repo-alerts")],dw);var dy=Object.defineProperty,d_=Object.getOwnPropertyDescriptor,dk=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?d_(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&dy(t,r,n),n};let dx=class extends GlAppHost{constructor(){super(...arguments),this.badgeSource={source:"home",detail:"badge"},this.isLightTheme=!1}createStateProvider(e,t,r){return this.disposables.push(this._activeOverviewState=new ActiveOverviewState(t)),this.disposables.push(this._inactiveOverviewState=new InactiveOverviewState(t)),new HomeStateProvider(this,e,t,r)}connectedCallback(){super.connectedCallback?.(),this.disposables.push(this._ipc.onReceiveMessage(e=>{switch(!0){case tr.is(e):this._header.show();break;case e9.is(e):this._header.refreshPromo(),this.refreshAiAllAccessPromo()}}))}onThemeUpdated(e){this.isLightTheme=e.isLightTheme}render(){return ek`
			<div class="home scrollable">
				<gl-home-header class="home__header"></gl-home-header>
				${eF(!this.state?.previewEnabled,()=>ek`<gl-preview-banner></gl-preview-banner>`)}
				${eF(this.state?.amaBannerCollapsed===!1,()=>ek`<gl-ama-banner></gl-ama-banner>`)}
				<gl-repo-alerts class="home__alerts"></gl-repo-alerts>
				<main class="home__main scrollable" id="main">
					${eF(this.state?.previewEnabled===!0,()=>ek`
							<gl-preview-banner></gl-preview-banner>
							<gl-ai-all-access-banner></gl-ai-all-access-banner>
							<gl-mcp-banner
								.layout=${"responsive"}
								.source=${"home"}
								.canAutoRegister=${this.state?.mcpCanAutoRegister??!1}
								.collapsed=${this.state?.mcpBannerCollapsed??!0}
							></gl-mcp-banner>
							<gl-active-work></gl-active-work>
							<gl-launchpad></gl-launchpad>
							<gl-overview></gl-overview>
						`,()=>ek`
							<gl-ai-all-access-banner></gl-ai-all-access-banner>
							<gl-mcp-banner
								.layout=${"responsive"}
								.source=${"home"}
								.canAutoRegister=${this.state?.mcpCanAutoRegister??!1}
								.collapsed=${this.state?.mcpBannerCollapsed??!0}
							></gl-mcp-banner>
							<gl-feature-nav .badgeSource=${this.badgeSource}></gl-feature-nav>
						`)}
				</main>
				<gl-welcome-overlay .isLightTheme=${this.isLightTheme} .webroot=${this.webroot}></gl-welcome-overlay>
			</div>
		`}refreshAiAllAccessPromo(){this.allAccessPromoBanner?.requestUpdate()}};dx.styles=[oD,oT,oz],dk([S({context:"activeOverviewState"})],dx.prototype,"_activeOverviewState",2),dk([S({context:"inactiveOverviewState"})],dx.prototype,"_inactiveOverviewState",2),dk([eN("gl-home-header")],dx.prototype,"_header",2),dk([eN("gl-ai-all-access-banner")],dx.prototype,"allAccessPromoBanner",2),dk([eD({type:String})],dx.prototype,"webroot",2),dk([ez()],dx.prototype,"isLightTheme",2),dx=dk([eE("gl-home-app")],dx);export{dx as GlHomeApp};