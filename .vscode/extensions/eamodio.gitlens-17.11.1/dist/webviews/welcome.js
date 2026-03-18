let e,t,i;var o,r,s,a,c,h,p,u,g,f,b,m={6047(e,t,i){i(602)},602(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141}},v={};function w(e){var t=v[e];if(void 0!==t)return t.exports;var i=v[e]={exports:{}};return m[e](i,i.exports,w),i.exports}w.d=(e,t)=>{for(var i in t)w.o(t,i)&&!w.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Object.defineProperty(w,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let x=globalThis,C=x.ShadowRoot&&(void 0===x.ShadyCSS||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_=Symbol(),$=new WeakMap;let n=class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(C&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=$.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&$.set(t,e))}return e}toString(){return this.cssText}};let A=e=>new n("string"==typeof e?e:e+"",void 0,_),S=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]),e,_),E=C?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return A(t)})(e):e,{is:P,defineProperty:O,getOwnPropertyDescriptor:M,getOwnPropertyNames:T,getOwnPropertySymbols:D,getPrototypeOf:N}=Object,U=globalThis,j=U.trustedTypes,F=j?j.emptyScript:"",B=U.reactiveElementPolyfillSupport,q={toAttribute(e,t){switch(t){case Boolean:e=e?F:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},G=(e,t)=>!P(e,t),W={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:G};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=W){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&O(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){let{get:o,set:r}=M(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){let s=o?.call(this);r?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??W}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=N(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...T(e),...D(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(E(i));else void 0!==e&&t.push(E(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(C)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),o=x.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:q).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){let i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:q;this._$Em=o;let s=r.fromAttribute(t,e.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){let s=this.constructor;if(!1===o&&(r=this[e]),!(((i??=s.getPropertyOptions(e)).hasChanged??G)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==r||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,B?.({ReactiveElement:y}),(U.reactiveElementVersions??=[]).push("2.1.2");let V=globalThis,K=e=>e,J=V.trustedTypes,Y=J?J.createPolicy("lit-html",{createHTML:e=>e}):void 0,Q="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,ee="?"+X,et=`<${ee}>`,ei=document,eo=()=>ei.createComment(""),er=e=>null===e||"object"!=typeof e&&"function"!=typeof e,en=Array.isArray,es=`[ 	
\x0c\r]`,ea=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,el=/-->/g,ec=/>/g,ed=RegExp(`>|${es}(?:([^\\s"'>=/]+)(${es}*=${es}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eh=/'/g,ep=/"/g,eu=/^(?:script|style|textarea|title)$/i,eg=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ef=eg(1),eb=(eg(2),eg(3),Symbol.for("lit-noChange")),em=Symbol.for("lit-nothing"),ev=new WeakMap,ew=ei.createTreeWalker(ei,129);function ey(e,t){if(!en(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Y?Y.createHTML(t):t}let lit_html_S=class lit_html_S{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,s=0,a=e.length-1,c=this.parts,[h,p]=((e,t)=>{let i=e.length-1,o=[],r,s=2===t?"<svg>":3===t?"<math>":"",a=ea;for(let t=0;t<i;t++){let i=e[t],c,h,p=-1,u=0;for(;u<i.length&&(a.lastIndex=u,null!==(h=a.exec(i)));)u=a.lastIndex,a===ea?"!--"===h[1]?a=el:void 0!==h[1]?a=ec:void 0!==h[2]?(eu.test(h[2])&&(r=RegExp("</"+h[2],"g")),a=ed):void 0!==h[3]&&(a=ed):a===ed?">"===h[0]?(a=r??ea,p=-1):void 0===h[1]?p=-2:(p=a.lastIndex-h[2].length,c=h[1],a=void 0===h[3]?ed:'"'===h[3]?ep:eh):a===ep||a===eh?a=ed:a===el||a===ec?a=ea:(a=ed,r=void 0);let g=a===ed&&e[t+1].startsWith("/>")?" ":"";s+=a===ea?i+et:p>=0?(o.push(c),i.slice(0,p)+Q+i.slice(p)+X+g):i+X+(-2===p?t:g)}return[ey(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]})(e,t);if(this.el=lit_html_S.createElement(h,i),ew.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ew.nextNode())&&c.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(Q)){let t=p[s++],i=o.getAttribute(e).split(X),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?I:"?"===a[1]?L:"@"===a[1]?z:H}),o.removeAttribute(e)}else e.startsWith(X)&&(c.push({type:6,index:r}),o.removeAttribute(e));if(eu.test(o.tagName)){let e=o.textContent.split(X),t=e.length-1;if(t>0){o.textContent=J?J.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],eo()),ew.nextNode(),c.push({type:2,index:++r});o.append(e[t],eo())}}}else if(8===o.nodeType)if(o.data===ee)c.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(X,e+1));)c.push({type:7,index:r}),e+=X.length-1}r++}}static createElement(e,t){let i=ei.createElement("template");return i.innerHTML=e,i}};function ex(e,t,i=e,o){if(t===eb)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl,s=er(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e))._$AT(e,i,o),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=ex(e,r._$AS(e,t.values),r,o)),t}let R=class R{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??ei).importNode(t,!0);ew.currentNode=o;let r=ew.nextNode(),s=0,a=0,c=i[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new k(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new Z(r,this,e)),this._$AV.push(t),c=i[++a]}s!==c?.index&&(r=ew.nextNode(),s++)}return ew.currentNode=ei,o}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};let k=class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=em,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let i;er(e=ex(this,e,t))?e===em||null==e||""===e?(this._$AH!==em&&this._$AR(),this._$AH=em):e!==this._$AH&&e!==eb&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):en(i=e)||"function"==typeof i?.[Symbol.iterator]?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==em&&er(this._$AH)?this._$AA.nextSibling.data=e:this.T(ei.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=lit_html_S.createElement(ey(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new R(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=ev.get(e.strings);return void 0===t&&ev.set(e.strings,t=new lit_html_S(e)),t}k(e){en(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,o=0;for(let r of e)o===t.length?t.push(i=new k(this.O(eo()),this.O(eo()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=K(e).nextSibling;K(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let H=class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=em,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=em}_$AI(e,t=this,i,o){let r=this.strings,s=!1;if(void 0===r)(s=!er(e=ex(this,e,t,0))||e!==this._$AH&&e!==eb)&&(this._$AH=e);else{let o,a,c=e;for(e=r[0],o=0;o<r.length-1;o++)(a=ex(this,c[i+o],t,o))===eb&&(a=this._$AH[o]),s||=!er(a)||a!==this._$AH[o],a===em?e=em:e!==em&&(e+=(a??"")+r[o+1]),this._$AH[o]=a}s&&!o&&this.j(e)}j(e){e===em?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let I=class I extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===em?void 0:e}};let L=class L extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==em)}};let z=class z extends H{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=ex(this,e,t,0)??em)===eb)return;let i=this._$AH,o=e===em&&i!==em||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==em&&(i===em||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let Z=class Z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ex(this,e)}};let ek=V.litHtmlPolyfillSupport;ek?.(lit_html_S,k),(V.litHtmlVersions??=[]).push("3.3.2");let eC=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{let o=i?.renderBefore??t,r=o._$litPart$;if(void 0===r){let e=i?.renderBefore??null;o._$litPart$=r=new k(t.insertBefore(eo(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return eb}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eC.litElementHydrateSupport?.({LitElement:lit_element_i});let e_=eC.litElementPolyfillSupport;e_?.({LitElement:lit_element_i}),(eC.litElementVersions??=[]).push("4.2.2");let e$=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eA={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:G};function eS(e){return(t,i)=>{let o;return"object"==typeof i?((e=eA,t,i)=>{let{kind:o,metadata:r}=i,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===o){let{name:o}=i;return{set(i){let r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){let{name:o}=i;return function(i){let r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)})(e,t,i):(o=t.hasOwnProperty(i),t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0)}}function eL(e){return eS({...e,state:!0,attribute:!1})}let eE=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function eP(e,t){return(i,o,r)=>{let s=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:t,set:a}="object"==typeof o?i:r??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return eE(i,o,{get(){let e=t.call(this);return void 0===e&&(null!==(e=s(this))||this.hasUpdated)&&a.call(this,e),e}})}return eE(i,o,{get(){return s(this)}})}}let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,i,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=i,this.subscribe=o??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,i,o){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=i,this.subscribe=o??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,i){super(void 0!==t.context?t.initialValue:i),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:i}]of this.subscriptions)t.has(e)||(t.add(e),i.dispatchEvent(new context_request_event_s(this.context,i,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function eR({context:e}){return(t,i)=>{let o=new WeakMap;if("object"==typeof i)return{get(){return t.get.call(this)},set(e){return o.get(this).setValue(e),t.set.call(this,e)},init(t){return o.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let r;t.constructor.addInitializer(t=>{o.set(t,new context_provider_i(t,{context:e}))});let s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){let e=new WeakMap;r={get(){return e.get(this)},set(t){o.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=s.set;r={...s,set(t){o.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,i,r)}}}function eI({context:e,subscribe:t}){return(i,o)=>{"object"==typeof o?o.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{i.set.call(this,e)},subscribe:t})}):i.constructor.addInitializer(i=>{new context_consumer_s(i,{context:e,callback:e=>{i[o]=e},subscribe:t})})}}let IpcCall=class IpcCall{constructor(e,t,i=!1){this.scope=e,this.reset=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,i){super(e,t,i),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let eO=new IpcRequest("core","webview/ready"),eM=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let eT=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let ez=new IpcCommand("core","telemetry/sendEvent"),eD=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let eN=new IpcCommand("core","webview/focus/didChange"),eU=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let ej=new WeakMap;let GlElement=class GlElement extends lit_element_i{emit(e,t,i){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(o),o}update(e){let t=ej.get(this.constructor);if(null!=t)for(let{keys:i,method:o,afterFirstUpdate:r}of t){if(r&&!this.hasUpdated)continue;let t=i.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};function eF(e){let t=.001*performance.now(),i=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],(o-=e[1])<0&&(i--,o+=1e9)),[i,o]}w(6047);var eB=((o=eB||{})[o.Hash=35]="Hash",o[o.Slash=47]="Slash",o[o.Digit0=48]="Digit0",o[o.Digit1=49]="Digit1",o[o.Digit2=50]="Digit2",o[o.Digit3=51]="Digit3",o[o.Digit4=52]="Digit4",o[o.Digit5=53]="Digit5",o[o.Digit6=54]="Digit6",o[o.Digit7=55]="Digit7",o[o.Digit8=56]="Digit8",o[o.Digit9=57]="Digit9",o[o.Backslash=92]="Backslash",o[o.A=65]="A",o[o.B=66]="B",o[o.C=67]="C",o[o.D=68]="D",o[o.E=69]="E",o[o.F=70]="F",o[o.Z=90]="Z",o[o.a=97]="a",o[o.b=98]="b",o[o.c=99]="c",o[o.d=100]="d",o[o.e=101]="e",o[o.f=102]="f",o[o.z=122]="z",o),eH=((r=eH||{}).AngleBracketLeftHeavy="❰",r.AngleBracketRightHeavy="❱",r.ArrowBack="↩",r.ArrowDown="↓",r.ArrowDownUp="⇵",r.ArrowDropRight="⤷",r.ArrowHeadRight="➤",r.ArrowLeft="←",r.ArrowLeftDouble="⇐",r.ArrowLeftRight="↔",r.ArrowLeftRightDouble="⇔",r.ArrowLeftRightDoubleStrike="⇎",r.ArrowLeftRightLong="⟷",r.ArrowRight="→",r.ArrowRightDouble="⇒",r.ArrowRightHollow="⇨",r.ArrowUp="↑",r.ArrowUpDown="⇅",r.ArrowUpRight="↗",r.ArrowsHalfLeftRight="⇋",r.ArrowsHalfRightLeft="⇌",r.ArrowsLeftRight="⇆",r.ArrowsRightLeft="⇄",r.Asterisk="∗",r.Bullseye="◎",r.Check="✔",r.Dash="—",r.Dot="•",r.Ellipsis="…",r.EnDash="–",r.Envelope="✉",r.EqualsTriple="≡",r.Flag="⚑",r.FlagHollow="⚐",r.MiddleEllipsis="⋯",r.MuchLessThan="≪",r.MuchGreaterThan="≫",r.Pencil="✎",r.Space=" ",r.SpaceThin=" ",r.SpaceThinnest=" ",r.SquareWithBottomShadow="❏",r.SquareWithTopShadow="❐",r.Warning="⚠",r.ZeroWidthSpace="​",r);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var eq=((s=eq||{}).File="file",s.Git="git",s.GitHub="github",s.GitLens="gitlens",s.GitLensAIMarkdown="gitlens-ai-markdown",s.PRs="pr",s.Remote="vscode-remote",s.Vsls="vsls",s.VslsScc="vsls-scc",s.Virtual="vscode-vfs",s);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let eG="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",eW=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${eG}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${eG}`,graph:`https://gitkraken.com/solutions/commit-graph?${eG}`,launchpad:`https://gitkraken.com/solutions/launchpad?${eG}`,platform:`https://gitkraken.com/devex?${eG}`,pricing:`https://gitkraken.com/gitlens/pricing?${eG}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${eG}`,security:`https://help.gitkraken.com/gitlens/security?${eG}`,workspaces:`https://gitkraken.com/solutions/workspaces?${eG}`,cli:`https://gitkraken.com/cli?${eG}`,browserExtension:`https://gitkraken.com/browser-extension?${eG}`,desktop:`https://gitkraken.com/git-client?${eG}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${eG}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${eG}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${eG}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${eG}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${eG}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eG}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${eG}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}#improve-workflows-with-integrations`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${eG}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${eG}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${eG}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${eG}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eG}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eG}`});function eV(e){let[t,i]=eF(e);return 1e3*t+Math.floor(i/1e6)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);let eZ=/T/,eK=/.*\s*?at\s(.+?)\s/,eJ=/^_+/;var eY=((a=eY||{})[a.Off=0]="Off",a[a.Error=1]="Error",a[a.Warn=2]="Warn",a[a.Info=3]="Info",a[a.Debug=4]="Debug",a[a.Trace=5]="Trace",a);let eQ=["accessToken","password","token"],eX=new class Logger2{constructor(){this._isDebugging=!1,this.level=0}configure(e,t=!1){if(null!=e.sanitizeKeys)for(let t of eQ)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(eQ);this.provider=e,this._isDebugging=t,this.output=e.createChannel(e.name),this.level=e1(this.output.logLevel),this.output.onDidChangeLogLevel?.(e=>{this.level=e1(e)})}enabled(e){return!!this.isDebugging||(null==e?this.level>0:this.level>=function(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4;case"trace":return 5}}(e))}get isDebugging(){return this._isDebugging}get logLevel(){var e=this.level;switch(e){case 0:default:return"off";case 1:return"error";case 2:return"warn";case 3:return"info";case 4:return"debug";case 5:return"trace"}}get timestamp(){return`[${new Date().toISOString().replace(eZ," ").slice(0,-1)}]`}trace(e,...t){let i;(!(this.level<5)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.output?.trace(`  ${i??""}${this.toLoggableParams(!0,t)}`))}debug(e,...t){let i;(!(this.level<4)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.output?.debug(`  ${i??""}${this.toLoggableParams(!1,t)}`))}info(e,...t){let i;(!(this.level<3)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.output?.info(`   ${i??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let i;(!(this.level<2)||this.isDebugging)&&("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,this.output?.warn(`${i??""}${this.toLoggableParams(!1,t)}`))}error(e,t,...i){let o;if(this.level<1&&!this.isDebugging)return;if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=eK.exec(t);null!=e&&(o=e[1])}}this.isDebugging;let r=`  ${o??""}${this.toLoggableParams(!1,i)}`;null!=e?this.output?.error(String(e),r):this.output?.error(r)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if(null!=t){let i=this.sanitize(t,e);if(null!=i)return i}if("function"==typeof e)return"<function>";if(null==e||"object"!=typeof e||e instanceof Error)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e)).join(", ")}]`;let i=this.provider.toLoggable?.(e);if(null!=i)return i;try{return JSON.stringify(e,(e,t)=>{if(95!==e.charCodeAt(0))return this.provider.sanitizeKeys.has(e)?this.sanitize(e,t):""===e||"object"!=typeof t||null==t||Array.isArray(t)?t:t instanceof Error?String(t):this.provider.toLoggable?.(t)??t})}catch{return"<error>"}}sanitize(e,t){if(null==t)return;let i=e.replace(eJ,"")||e;if(this.provider?.sanitizeKeys?.has(i))return null!=this.provider.hash?`<${i}:${this.provider.hash("string"==typeof t?t:JSON.stringify(t))}>`:`<${i}>`}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let i=t.map(e=>this.toLoggable(e)).join(", ");return 0!==i.length?` \u2014 ${i}`:""}};function e1(e){switch(e){case 0:default:return 0;case 1:return 5;case 2:return 4;case 3:return 3;case 4:return 2;case 5:return 1}}let e0=new WeakMap,e2={enabled:e=>eX.enabled(e),log:(e,t,i,...o)=>{switch(e){case"error":eX.error(void 0,t,i,...o);break;case"warn":t?.warn(i,...o);break;case"info":t?.info(i,...o);break;case"debug":default:t?.debug(i,...o);break;case"trace":t?.trace(i,...o)}}},e3=new Map;function e5(t,i){let o=e;e=t.scopeId,e3.set(t.scopeId,t);try{return i()}finally{e=o,e3.delete(t.scopeId)}}function e6(){return null!=e?e3.get(e):void 0}let e9=0x40000000-1;function e7(){let e=0;return{get current(){return e},next:function(){return e===e9&&(e=0),++e},reset:function(){e=0}}}let e8=e7();function e4(e,t,i){var o;let r,s,a={scopeId:e,prevScopeId:t,prefix:i,enabled:eX.enabled,addExitInfo:function(...e){(r??=[]).push(...e)},setFailed:function(e){s=e},getExitInfo:function(){return{details:r?.length?` \u2022 ${r.join(", ")}`:void 0,failed:s}}};return te(a,"trace",eX.trace),te(a,"debug",eX.debug),te(a,"info",eX.info),te(a,"warn",eX.warn),Object.defineProperty(o=a,"error",{configurable:!0,enumerable:!0,get:function(){let e=(e,t,...i)=>eX.error(e,o,t,...i);return Object.defineProperty(o,"error",{value:e,writable:!1,enumerable:!0}),e}}),a}function te(e,t,i){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){let o=i.bind(eX,e);return Object.defineProperty(e,t,{value:o,writable:!1,enumerable:!0}),o}})}function tt(e,t,i){if(null!=i){let o=null==t?e.toString(16):`${t.toString(16)} \u2192 ${e.toString(16)}`;return null==o?`[${i.padEnd(13)}]`:`[${i}${o.padStart(13-i.length)}]`}return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function ti(){let e=e6();if(null==e)return;let t=Object.create(e);return t[Symbol.dispose]=()=>{},t}function to(e,t,i){if(null!=t&&"boolean"!=typeof t)return e4(t.scopeId,t.prevScopeId,`${t.prefix}${e}`);let o=t?e6()?.scopeId:void 0,r=e8.next();return e4(r,o,`${tt(r,o,i)} ${e}`)}function tr(e,t,i,...o){switch(t){case"trace":eX.trace(e,i,...o);break;case"info":eX.info(e,i,...o);break;default:eX.debug(e,i,...o)}}let LoggerContext=class LoggerContext{constructor(e){this.scope=to(e,void 0),eX.configure({name:e,createChannel:function(e){let t=eX.isDebugging?function(e){}:function(e){};return{name:e,logLevel:0,trace:t,debug:t,info:t,warn:t,error:t}}},!1)}trace(e,...t){"string"==typeof e?eX.trace(this.scope,e,...t):eX.trace(e,t.shift(),...t)}debug(e,...t){"string"==typeof e?eX.debug(this.scope,e,...t):eX.debug(e,t.shift(),...t)}info(e,...t){"string"==typeof e?eX.info(this.scope,e,...t):eX.info(e,t.shift(),...t)}};let tn="home";new IpcRequest(tn,"launchpad/summary"),new IpcRequest(tn,"overview/active"),new IpcRequest(tn,"overview/inactive"),new IpcRequest(tn,"overviewFilter"),new IpcCommand(tn,"overview/repository/change"),new IpcNotification(tn,"overview/repository/didChange"),new IpcCommand(tn,"previewEnabled/toggle"),new IpcCommand(tn,"section/collapse"),new IpcCommand(tn,"walkthrough/dismiss"),new IpcNotification(tn,"ai/allAccess/didChange"),new IpcNotification(tn,"mcp/didChange"),new IpcCommand(tn,"ai/allAccess/dismiss"),new IpcCommand(tn,"overview/filter/set"),new IpcCommand(tn,"openInGraph"),new IpcNotification(tn,"repositories/didCompleteDiscovering"),new IpcNotification(tn,"previewEnabled/didChange"),new IpcNotification(tn,"repository/wip/didChange"),new IpcNotification(tn,"repositories/didChange"),new IpcNotification(tn,"walkthroughProgress/didChange"),new IpcNotification(tn,"integrations/didChange"),new IpcNotification(tn,"launchpad/didChange");let ts=new IpcNotification(tn,"subscription/didChange");new IpcNotification(tn,"org/settings/didChange"),new IpcNotification(tn,"home/ownerFilter/didChange"),new IpcNotification(tn,"account/didFocus");let ta="graph";new IpcCommand(ta,"chooseRepository"),new IpcCommand(ta,"dblclick"),new IpcCommand(ta,"avatars/get"),new IpcCommand(ta,"refs/metadata/get"),new IpcCommand(ta,"rows/get"),new IpcCommand(ta,"pullRequest/openDetails"),new IpcCommand(ta,"row/action"),new IpcCommand(ta,"search/openInView"),new IpcCommand(ta,"search/cancel"),new IpcCommand(ta,"columns/update"),new IpcCommand(ta,"refs/update/visibility"),new IpcCommand(ta,"filters/update/excludeTypes"),new IpcCommand(ta,"configuration/update"),new IpcCommand(ta,"search/update/mode"),new IpcCommand(ta,"filters/update/includedRefs"),new IpcCommand(ta,"selection/update"),new IpcRequest(ta,"jumpToHead"),new IpcRequest(ta,"chooseRef"),new IpcRequest(ta,"chooseComparison"),new IpcRequest(ta,"chooseAuthor"),new IpcRequest(ta,"chooseFile"),new IpcRequest(ta,"rows/ensure"),new IpcRequest(ta,"search/history/get"),new IpcRequest(ta,"search/history/store"),new IpcRequest(ta,"search/history/delete"),new IpcRequest(ta,"counts"),new IpcRequest(ta,"row/hover/get"),new IpcRequest(ta,"search"),new IpcNotification(ta,"repositories/integration/didChange"),new IpcNotification(ta,"didChange",!0),new IpcNotification(ta,"configuration/didChange");let tl=new IpcNotification(ta,"subscription/didChange");new IpcNotification(ta,"org/settings/didChange"),new IpcNotification(ta,"avatars/didChange"),new IpcNotification(ta,"mcp/didChange"),new IpcNotification(ta,"branchState/didChange"),new IpcNotification(ta,"refs/didChangeMetadata"),new IpcNotification(ta,"columns/didChange"),new IpcNotification(ta,"scrollMarkers/didChange"),new IpcNotification(ta,"refs/didChangeVisibility"),new IpcNotification(ta,"rows/didChange"),new IpcNotification(ta,"rows/stats/didChange"),new IpcNotification(ta,"selection/didChange"),new IpcNotification(ta,"workingTree/didChange"),new IpcNotification(ta,"didSearch"),new IpcNotification(ta,"didFetch"),new IpcNotification(ta,"featurePreview/didStart");let tc="timeline";new IpcRequest(tc,"ref/choose"),new IpcRequest(tc,"path/choose"),new IpcCommand(tc,"point/open"),new IpcCommand(tc,"config/update"),new IpcCommand(tc,"scope/update");let td=new IpcNotification(tc,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(ts.is(e)||tl.is(e)||td.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let i=`${e}|${t}`,o=this._promos.get(i);return null==o&&(o=this.ipc.sendRequest(eT,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(i,o)),await o}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(ez,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};var th=Uint8Array,tp=Uint16Array,tu=Int32Array,tg=new th([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tf=new th([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tb=new th([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tm=function(e,t){for(var i=new tp(31),o=0;o<31;++o)i[o]=t+=1<<e[o-1];for(var r=new tu(i[30]),o=1;o<30;++o)for(var s=i[o];s<i[o+1];++s)r[s]=s-i[o]<<5|o;return{b:i,r:r}},tv=tm(tg,2),tw=tv.b,ty=tv.r;tw[28]=258,ty[258]=28;var tx=tm(tf,0),tk=tx.b;tx.r;for(var tC=new tp(32768),t_=0;t_<32768;++t_){var t$=(43690&t_)>>1|(21845&t_)<<1;t$=(61680&(t$=(52428&t$)>>2|(13107&t$)<<2))>>4|(3855&t$)<<4,tC[t_]=((65280&t$)>>8|(255&t$)<<8)>>1}for(var tA=function(e,t,i){for(var o,r=e.length,s=0,a=new tp(t);s<r;++s)e[s]&&++a[e[s]-1];var c=new tp(t);for(s=1;s<t;++s)c[s]=c[s-1]+a[s-1]<<1;if(i){o=new tp(1<<t);var h=15-t;for(s=0;s<r;++s)if(e[s])for(var p=s<<4|e[s],u=t-e[s],g=c[e[s]-1]++<<u,f=g|(1<<u)-1;g<=f;++g)o[tC[g]>>h]=p}else for(s=0,o=new tp(r);s<r;++s)e[s]&&(o[s]=tC[c[e[s]-1]++]>>15-e[s]);return o},tS=new th(288),t_=0;t_<144;++t_)tS[t_]=8;for(var t_=144;t_<256;++t_)tS[t_]=9;for(var t_=256;t_<280;++t_)tS[t_]=7;for(var t_=280;t_<288;++t_)tS[t_]=8;for(var tL=new th(32),t_=0;t_<32;++t_)tL[t_]=5;var tE=tA(tS,9,1),tP=tA(tL,5,1),tR=function(e){for(var t=e[0],i=1;i<e.length;++i)e[i]>t&&(t=e[i]);return t},tI=function(e,t,i){var o=t/8|0;return(e[o]|e[o+1]<<8)>>(7&t)&i},tO=function(e,t){var i=t/8|0;return(e[i]|e[i+1]<<8|e[i+2]<<16)>>(7&t)},tM=function(e,t,i){return(null==t||t<0)&&(t=0),(null==i||i>e.length)&&(i=e.length),new th(e.subarray(t,i))},tT=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],tz=function(e,t,i){var o=Error(t||tT[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,tz),!i)throw o;return o},tD=function(e,t,i,o){var r=e.length,s=o?o.length:0;if(!r||t.f&&!t.l)return i||new th(0);var a=!i,c=a||2!=t.i,h=t.i;a&&(i=new th(3*r));var p=function(e){var t=i.length;if(e>t){var o=new th(Math.max(2*t,e));o.set(i),i=o}},u=t.f||0,g=t.p||0,f=t.b||0,b=t.l,m=t.d,v=t.m,w=t.n,x=8*r;do{if(!b){u=tI(e,g,1);var C=tI(e,g+1,3);if(g+=3,C)if(1==C)b=tE,m=tP,v=9,w=5;else if(2==C){var _=tI(e,g,31)+257,$=tI(e,g+10,15)+4,A=_+tI(e,g+5,31)+1;g+=14;for(var S=new th(A),E=new th(19),P=0;P<$;++P)E[tb[P]]=tI(e,g+3*P,7);g+=3*$;for(var O=tR(E),M=(1<<O)-1,T=tA(E,O,1),P=0;P<A;){var D=T[tI(e,g,M)];g+=15&D;var N=D>>4;if(N<16)S[P++]=N;else{var U=0,j=0;for(16==N?(j=3+tI(e,g,3),g+=2,U=S[P-1]):17==N?(j=3+tI(e,g,7),g+=3):18==N&&(j=11+tI(e,g,127),g+=7);j--;)S[P++]=U}}var F=S.subarray(0,_),B=S.subarray(_);v=tR(F),w=tR(B),b=tA(F,v,1),m=tA(B,w,1)}else tz(1);else{var N=((g+7)/8|0)+4,q=e[N-4]|e[N-3]<<8,G=N+q;if(G>r){h&&tz(0);break}c&&p(f+q),i.set(e.subarray(N,G),f),t.b=f+=q,t.p=g=8*G,t.f=u;continue}if(g>x){h&&tz(0);break}}c&&p(f+131072);for(var W=(1<<v)-1,V=(1<<w)-1,K=g;;K=g){var U=b[tO(e,g)&W],J=U>>4;if((g+=15&U)>x){h&&tz(0);break}if(U||tz(2),J<256)i[f++]=J;else if(256==J){K=g,b=null;break}else{var Y=J-254;if(J>264){var P=J-257,Q=tg[P];Y=tI(e,g,(1<<Q)-1)+tw[P],g+=Q}var X=m[tO(e,g)&V],ee=X>>4;X||tz(3),g+=15&X;var B=tk[ee];if(ee>3){var Q=tf[ee];B+=tO(e,g)&(1<<Q)-1,g+=Q}if(g>x){h&&tz(0);break}c&&p(f+131072);var et=f+Y;if(f<B){var ei=s-B,eo=Math.min(B,et);for(ei+f<0&&tz(3);f<eo;++f)i[f]=o[ei+f]}for(;f<et;++f)i[f]=i[f-B]}}t.l=b,t.p=K,t.b=f,t.f=u,b&&(u=1,t.m=v,t.d=m,t.n=w)}while(!u)return f!=i.length&&a?tM(i,0,f):i.subarray(0,f)},tN=new th(0),tU="u">typeof TextDecoder&&new TextDecoder;try{tU.decode(tN,{stream:!0})}catch{}var tj=function(e){for(var t="",i=0;;){var o=e[i++],r=(o>127)+(o>223)+(o>239);if(i+r>e.length)return{s:t,r:tM(e,i-1)};r?3==r?t+=String.fromCharCode(55296|(o=((15&o)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536)>>10,56320|1023&o):1&r?t+=String.fromCharCode((31&o)<<6|63&e[i++]):t+=String.fromCharCode((15&o)<<12|(63&e[i++])<<6|63&e[i++]):t+=String.fromCharCode(o)}};function tF(e,t){if(t){for(var i="",o=0;o<e.length;o+=16384)i+=String.fromCharCode.apply(null,e.subarray(o,o+16384));return i}if(tU)return tU.decode(e);var r=tj(e),s=r.s,i=r.r;return i.length&&tz(8),s}"function"==typeof queueMicrotask&&queueMicrotask;let tB=/\(([\s\S]*)\)/,tH=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,tq=/\s?=.*$/;function tG(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function tW(e){var t,i;let o,r,s,a,c,h,p,u,g;return t="debug",c=!1,h=!0,null!=(i=e)&&({args:o,when:r,exit:s,prefix:a,onlyExit:c=!1,timing:h=!0}=i),p="object"==typeof h?h.warnAfter:500,u=!1!==h||"object"==typeof c&&c.after>0,g="trace"===t?eX.trace:"debug"===t?eX.debug:eX.info,(e,i,h)=>{let f,b;if("function"==typeof h.value?(f=h.value,b="value"):"function"==typeof h.get&&(f=h.get,b="get"),null==f||null==b)throw Error("Not supported");let m=null==o?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),i=(t=(t=t.replace(tH,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");i=i>=0?i+1:0,o=o>0?o:t.indexOf("="),t=t.slice(i,o),t=`(${t})`;let r=tB.exec(t);return null!=r?r[1].split(",").map(e=>e.trim().replace(tq,"")):[]}(f):[];h[b]=function(...e){let h;if(!eX.enabled()||null!=r&&!r.apply(this,e))return f.apply(this,e);let b=eX.enabled(t),v=ti(),w=v?.scopeId,x=e8.next(),C=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let i=t?.name??"",o=i.indexOf("_");-1!==o&&(i=i.substring(o+1));let r=t;for(;null!=r;){let t=e0.get(r);if(null!=t)return t(e,i);r=Object.getPrototypeOf(r)}return i}(this):void 0,_=C?`${tt(x,w)} ${C}.${i}`:`${tt(x,w)} ${i}`;null!=a&&(_=a({id:x,instance:this,instanceName:C??"",name:i,prefix:_},...e));let $=e4(x,w,_),A=!1,S=()=>(A||(A=!0,h=function(e,t,i){if(!1===e||!t.length)return;if("function"==typeof e){let i=e(...t);if(!1===i)return;let o="";for(let[e,t]of Object.entries(i))o.length&&(o+=", "),o+=`${e}=${eX.toLoggable(t,e)}`;return o||void 0}let o="",r=-1;for(let e of t){let t=i[++r];o.length&&(o+=", "),o+=t?`${t}=${eX.toLoggable(e,t)}`:eX.toLoggable(e)}return o||void 0}(o,e,m)),h);if(!c&&b){let e=S();g.call(eX,e?`${_}(${e})`:_)}if(c||u||null!=s){let t=u?eF():void 0,i=e=>{let i=void 0!==t?` [${eV(t)}ms]`:"",o=$.getExitInfo();if(c){let t=S();eX.error(e,t?`${_}(${t})`:_,o?.details?`failed${o.details}${i}`:`failed${i}`)}else eX.error(e,_,o?.details?`failed${o.details}${i}`:`failed${i}`)},o=e=>{let i,o,r,a;null!=t?(i=eV(t))>p?(o=eX.warn,r=` [*${i}ms] (slow)`):(o=g,r=` [${i}ms]`):(r="",o=g);let h=$.getExitInfo();if(null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${eX.toLoggable(e)}`);else h?.failed?(a=h.failed,o=(e,...t)=>eX.error(null,e,...t)):a="completed";if(b||o!==g){let e=S();c?(!0===c||0===c.after||i>c.after)&&o.call(eX,e?`${_}(${e}) ${a}${h?.details||""}${r}`:`${_} ${a}${h?.details||""}${r}`):o.call(eX,e?`${_}(${e}) ${a}${h?.details||""}${r}`:`${_} ${a}${h?.details||""}${r}`)}};return e5($,()=>{let t;try{t=f.apply(this,e)}catch(e){throw i(e),e}return null!=t&&tG(t)?t.then(o,i):o(t),t})}return e5($,()=>f.apply(this,e))}}}(()=>{let e;var t,i,o={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var i,o="",r=0,s=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)i=e.charCodeAt(c);else{if(47===i)break;i=47}if(47===i){if(s===c-1||1===a);else if(s!==c-1&&2===a){if(o.length<2||2!==r||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var h=o.lastIndexOf("/");if(h!==o.length-1){-1===h?(o="",r=0):r=(o=o.slice(0,h)).length-1-o.lastIndexOf("/"),s=c,a=0;continue}}else if(2===o.length||1===o.length){o="",r=0,s=c,a=0;continue}}t&&(o.length>0?o+="/..":o="..",r=2)}else o.length>0?o+="/"+e.slice(s+1,c):o=e.slice(s+1,c),r=c-s-1;s=c,a=0}else 46===i&&-1!==a?++a:a=-1}return o}var o={resolve:function(){for(var e,o,r="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?e=arguments[a]:(void 0===o&&(o=process.cwd()),e=o),t(e),0!==e.length&&(r=e+"/"+r,s=47===e.charCodeAt(0));return r=i(r,!s),s?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var o=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!o)).length||o||(e="."),e.length>0&&r&&(e+="/"),o?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,i=0;i<arguments.length;++i){var r=arguments[i];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":o.normalize(e)},relative:function(e,i){if(t(e),t(i),e===i||(e=o.resolve(e))===(i=o.resolve(i)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var s=e.length,a=s-r,c=1;c<i.length&&47===i.charCodeAt(c);++c);for(var h=i.length-c,p=a<h?a:h,u=-1,g=0;g<=p;++g){if(g===p){if(h>p){if(47===i.charCodeAt(c+g))return i.slice(c+g+1);if(0===g)return i.slice(c+g)}else a>p&&(47===e.charCodeAt(r+g)?u=g:0===g&&(u=0));break}var f=e.charCodeAt(r+g);if(f!==i.charCodeAt(c+g))break;47===f&&(u=g)}var b="";for(g=r+u+1;g<=s;++g)g!==s&&47!==e.charCodeAt(g)||(0===b.length?b+="..":b+="/..");return b.length>0?b+i.slice(c+u):(c+=u,47===i.charCodeAt(c)&&++c,i.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var i=e.charCodeAt(0),o=47===i,r=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(i=e.charCodeAt(a))){if(!s){r=a;break}}else s=!1;return -1===r?o?"/":".":o&&1===r?"//":e.slice(0,r)},basename:function(e,i){if(void 0!==i&&"string"!=typeof i)throw TypeError('"ext" argument must be a string');t(e);var o,r=0,s=-1,a=!0;if(void 0!==i&&i.length>0&&i.length<=e.length){if(i.length===e.length&&i===e)return"";var c=i.length-1,h=-1;for(o=e.length-1;o>=0;--o){var p=e.charCodeAt(o);if(47===p){if(!a){r=o+1;break}}else -1===h&&(a=!1,h=o+1),c>=0&&(p===i.charCodeAt(c)?-1==--c&&(s=o):(c=-1,s=h))}return r===s?s=h:-1===s&&(s=e.length),e.slice(r,s)}for(o=e.length-1;o>=0;--o)if(47===e.charCodeAt(o)){if(!a){r=o+1;break}}else -1===s&&(a=!1,s=o+1);return -1===s?"":e.slice(r,s)},extname:function(e){t(e);for(var i=-1,o=0,r=-1,s=!0,a=0,c=e.length-1;c>=0;--c){var h=e.charCodeAt(c);if(47!==h)-1===r&&(s=!1,r=c+1),46===h?-1===i?i=c:1!==a&&(a=1):-1!==i&&(a=-1);else if(!s){o=c+1;break}}return -1===i||-1===r||0===a||1===a&&i===r-1&&i===o+1?"":e.slice(i,r)},format:function(e){var t,i;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+i:t+"/"+i:i},parse:function(e){t(e);var i={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return i;var o,r=e.charCodeAt(0),s=47===r;s?(i.root="/",o=1):o=0;for(var a=-1,c=0,h=-1,p=!0,u=e.length-1,g=0;u>=o;--u)if(47!==(r=e.charCodeAt(u)))-1===h&&(p=!1,h=u+1),46===r?-1===a?a=u:1!==g&&(g=1):-1!==a&&(g=-1);else if(!p){c=u+1;break}return -1===a||-1===h||0===g||1===g&&a===h-1&&a===c+1?-1!==h&&(i.base=i.name=0===c&&s?e.slice(1,h):e.slice(c,h)):(0===c&&s?(i.name=e.slice(1,a),i.base=e.slice(1,h)):(i.name=e.slice(c,a),i.base=e.slice(c,h)),i.ext=e.slice(a,h)),c>0?i.dir=e.slice(0,c-1):s&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(s.r(a),s.d(a,{URI:()=>l,Utils:()=>i}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let c=/^\w[\w\d+.-]*$/,h=/^\//,p=/^\/\//;function u(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!c.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!h.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,i,o,r,s=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||s?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,i||""),this.query=o||"",this.fragment=r||"",u(this,s))}get fsPath(){return x(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:i,path:o,query:r,fragment:s}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===i?i=this.authority:null===i&&(i=""),void 0===o?o=this.path:null===o&&(o=""),void 0===r?r=this.query:null===r&&(r=""),void 0===s?s=this.fragment:null===s&&(s=""),t===this.scheme&&i===this.authority&&o===this.path&&r===this.query&&s===this.fragment?this:new d(t,i,o,r,s)}static parse(e,t=!1){let i=f.exec(e);return i?new d(i[2]||"",$(i[4]||""),$(i[5]||""),$(i[7]||""),$(i[9]||""),t):new d("","","","","")}static file(t){let i="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(i=t.substring(2),t="/"):(i=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",i,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return u(t,!0),t}toString(e=!1){return C(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===b?e.fsPath:null,t}}return e}};let b=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=x(this,!1)),this._fsPath}toString(e=!1){return e?C(this,!0):(this._formatted||(this._formatted=C(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=b),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let m={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function v(e,t,i){let o,r=-1;for(let s=0;s<e.length;s++){let a=e.charCodeAt(s);if(a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||45===a||46===a||95===a||126===a||t&&47===a||i&&91===a||i&&93===a||i&&58===a)-1!==r&&(o+=encodeURIComponent(e.substring(r,s)),r=-1),void 0!==o&&(o+=e.charAt(s));else{void 0===o&&(o=e.substr(0,s));let t=m[a];void 0!==t?(-1!==r&&(o+=encodeURIComponent(e.substring(r,s)),r=-1),o+=t):-1===r&&(r=s)}}return -1!==r&&(o+=encodeURIComponent(e.substring(r))),void 0!==o?o:e}function w(e){let t;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);35===o||63===o?(void 0===t&&(t=e.substr(0,i)),t+=m[o]):void 0!==t&&(t+=e[i])}return void 0!==t?t:e}function x(t,i){let o;return o=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?i?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(o=o.replace(/\//g,"\\")),o}function C(e,t){let i=t?w:v,o="",{scheme:r,authority:s,path:a,query:c,fragment:h}=e;if(r&&(o+=r,o+=":"),(s||"file"===r)&&(o+="/",o+="/"),s){let e=s.indexOf("@");if(-1!==e){let t=s.substr(0,e);s=s.substr(e+1),-1===(e=t.lastIndexOf(":"))?o+=i(t,!1,!1):(o+=i(t.substr(0,e),!1,!1),o+=":",o+=i(t.substr(e+1),!1,!0)),o+="@"}-1===(e=(s=s.toLowerCase()).lastIndexOf(":"))?o+=i(s,!1,!0):(o+=i(s.substr(0,e),!1,!0),o+=s.substr(e))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){let e=a.charCodeAt(1);e>=65&&e<=90&&(a=`/${String.fromCharCode(e+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){let e=a.charCodeAt(0);e>=65&&e<=90&&(a=`${String.fromCharCode(e+32)}:${a.substr(2)}`)}o+=i(a,!0,!1)}return c&&(o+="?",o+=i(c,!1,!1)),h&&(o+="#",o+=t?h:v(h,!1,!1)),o}let _=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function $(e){return e.match(_)?e.replace(_,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var A=s(975);let S=A.posix||A;(t=i||(i={})).joinPath=function(e,...t){return e.with({path:S.join(e.path,...t)})},t.resolvePath=function(e,...t){let i=e.path,o=!1;"/"!==i[0]&&(i="/"+i,o=!0);let r=S.resolve(i,...t);return o&&"/"===r[0]&&!e.authority&&(r=r.substring(1)),e.with({path:r})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=S.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return S.basename(e.path)},t.extname=function(e){return S.extname(e.path)},g=a})();let{URI:tV,Utils:tZ}=g;function tK(e,t){return JSON.parse(e,(e,i)=>(function(e,t){let i=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(e);if(null==i)return e;switch(i.__ipc){case"date":return new Date(i.value);case"promise":return t(i.value);case"uri":return tV.revive(i.value)}})(i,t))}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...i){let o;this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:to(e??"",!1,t?.scopeLabel);let r=t?.log;if(o=null==r||!0===r?{}:!1===r||r.onlyExit?void 0:r,this.logLevel=("object"==typeof r?r.level:void 0)??"debug",this.logProvider=t?.provider??e2,this._time=eF(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=eF(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=eF(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[i,o]=eF(this._time),r=1e3*i+Math.floor(o/1e6),s=e?.message??"";this.logProvider.log(r>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${r}ms]${e?.suffix??""}`)}};(f||(f={})).on=function(e,t,i,o){let r=!1;if("string"==typeof e){let s=function(t){let o=t?.target?.closest(e);null!=o&&i(t,o)};return document.addEventListener(t,s,o??!0),{dispose:()=>{r||(r=!0,document.removeEventListener(t,s,o??!0))}}}let s=function(e){i(e,this)};return e.addEventListener(t,s,o??!1),{dispose:()=>{r||(r=!0,e.removeEventListener(t,s,o??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return this._event??=(e,t,i)=>{this.listeners??=new LinkedList;let o=this.listeners.push(null==t?e:[e,t]),r={dispose:()=>{r.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(r),r},this._event}fire(e){if(null!=this.listeners){this._deliveryQueue??=new LinkedList;for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let tJ={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let i=new events_Node(e);if(this._first===events_Node.Undefined)this._first=i,this._last=i;else if(t){let e=this._last;this._last=i,i.prev=e,e.next=i}else{let e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(i))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?tJ:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var tY=Object.defineProperty,tQ=Object.getOwnPropertyDescriptor,tX=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),t1=e=>{throw TypeError(e)},t0=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?tQ(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&tY(t,i,s),s};let t2=e7();function t3(){return`webview:${t2.next()}`}let t5=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=t??=acquireVsCodeApi(),this._disposable=f.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(t){var i,o,r,s,a,c,h,p,u=[];try{let s=t.data,a=((e,t,i)=>{if(null!=t){var o,r;"object"!=typeof t&&"function"!=typeof t&&t1("Object expected"),i&&(o=t[tX("asyncDispose")]),void 0===o&&(o=t[tX("dispose")],i&&(r=o)),"function"!=typeof o&&t1("Object not disposable"),r&&(o=function(){try{r.call(this)}catch(e){return Promise.reject(e)}}),e.push([i,o,t])}else i&&e.push([i]);return t})(u,function(t,i,o){var r,s;let a,c,h;if(!eX.enabled())return;let p=(r=o?.scope??!0,s=o?.scopeLabel,c=e6(),e=(h=to(t,r,s)).scopeId,e3.set(h.scopeId,h),h[Symbol.dispose]=()=>{let t;t=h?.scopeId??e,null!=t&&e3.delete(t),e=c?.scopeId},h);if(!i)return p;let u="debug",g=!1;"object"==typeof i&&(u=i.level??u,a=i.message,g=!0===i.onlyExit);let f=eF();g||tr(p,u,a??"");let b=p[Symbol.dispose];return p[Symbol.dispose]=()=>{let e=eV(f),t=` [${e}ms]`,i=p.getExitInfo(),o=i.failed??"completed";null!=i.failed?eX.error(null,p,`${o}${i.details??""}${t}`):tr(p,u,`${o}${i.details??""}${t}`),b()},p}(`(e=${s.id}|${s.method})`,void 0,{scope:ti()})),c=function(e,t,...i){let o=("object"==typeof t?.log?t.log.level:void 0)??"info";return(t?.provider??e2).enabled(o)?new Stopwatch(e,t,...i):void 0}(a,{log:{onlyExit:!0,level:"debug"}});if(s.compressed&&s.params instanceof Uint8Array){if("deflate"===s.compressed)try{s.params=tF((r=s.params,tD(r,{i:2},void 0,void 0)))}catch(e){s.params=tF(s.params)}else s.params=tF(s.params);c?.restart({message:`\u2022 decompressed (${s.compressed}) serialized params`})}if("string"==typeof s.params?(s.params=tK(s.params,e=>this.getResponsePromise(e.method,e.id)),c?.stop({message:"• deserialized params"})):null==s.params?c?.stop({message:"• no params"}):c?.stop({message:"• invalid params"}),a?.addExitInfo(`ipc (host -> webview) duration=${Date.now()-s.timestamp}ms`),null!=s.completionId){let e=(i=s.method,o=s.completionId,`${i}|${o}`);this._pendingHandlers.get(e)?.(s);return}this._onReceiveMessage.fire(s)}catch(e){var g=e,f=!0}finally{s=g,a=f,c="function"==typeof SuppressedError?SuppressedError:function(e,t,i,o){return(o=Error(i)).name="SuppressedError",o.error=e,o.suppressed=t,o},h=e=>s=a?new c(e,s,"An error was suppressed during disposal"):(a=!0,e),(p=e=>{for(;e=u.pop();)try{var t=e[1]&&e[1].call(e[2]);if(e[0])return Promise.resolve(t).then(p,e=>(h(e),p()))}catch(e){h(e)}if(a)throw s})()}}deserializeIpcData(e){return tK(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let i=t3();this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let i=t3(),o=this.getResponsePromise(e.response.method,i);return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:i}),o}getResponsePromise(e,t){return new Promise((i,o)=>{var r,s;let a,c=(r=e,s=t,`${r}|${s}`);function h(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(c)}a=setTimeout(()=>{h.call(this),o(Error(`Timed out waiting for completion of ${c}`))},(eX.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(h.call(this),e.method===eD.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>i(t.value))}else queueMicrotask(()=>i(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function t6(e,t){let i=Math.pow(10,t);return Math.round(e*i)/i}t0([tW({args:e=>({e:`${e.data.id}|${e.data.method}`})})],t5.prototype,"onMessageReceived",1),t0([tW({args:e=>({commandType:e.method})})],t5.prototype,"sendCommand",1),t0([tW({args:e=>({requestType:e.method})})],t5.prototype,"sendRequest",1),t0([tW({args:e=>({e:`${e.id}, method=${e.method}`})})],t5.prototype,"postMessage",1),t5=t0([(c=e=>`${e.appName}(HostIpc)`,e=>void e0.set(e,c))],t5);let RGBA=class RGBA{constructor(e,t,i,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=t6(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,i,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=t6(Math.max(Math.min(1,t),0),3),this.l=t6(Math.max(Math.min(1,i),0),3),this.a=t6(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,o=e.b/255,r=e.a,s=Math.max(t,i,o),a=Math.min(t,i,o),c=0,h=0,p=(a+s)/2,u=s-a;if(u>0){switch(h=Math.min(p<=.5?u/(2*p):u/(2-2*p),1),s){case t:c=(i-o)/u+6*(i<o);break;case i:c=(o-t)/u+2;break;case o:c=(t-i)/u+4}c*=60,c=Math.round(c)}return new HSLA(c,h,p,r)}static _hue2rgb(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){let t,i,o,r=e.h/360,{s,l:a,a:c}=e;if(0===s)t=i=o=a;else{let e=a<.5?a*(1+s):a+s-a*s,c=2*a-e;t=HSLA._hue2rgb(c,e,r+1/3),i=HSLA._hue2rgb(c,e,r),o=HSLA._hue2rgb(c,e,r-1/3)}return new RGBA(Math.round(255*t),Math.round(255*i),Math.round(255*o),c)}};let HSVA=class HSVA{constructor(e,t,i,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=t6(Math.max(Math.min(1,t),0),3),this.v=t6(Math.max(Math.min(1,i),0),3),this.a=t6(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,o=e.b/255,r=Math.max(t,i,o),s=r-Math.min(t,i,o);return new HSVA(Math.round(60*(0===s?0:r===t?((i-o)/s%6+6)%6:r===i?(o-t)/s+2:(t-i)/s+4)),0===r?0:s/r,r,e.a)}static toRGBA(e){let{h:t,s:i,v:o,a:r}=e,s=o*i,a=s*(1-Math.abs(t/60%2-1)),c=o-s,[h,p,u]=[0,0,0];return t<60?(h=s,p=a):t<120?(h=a,p=s):t<180?(p=s,u=a):t<240?(p=a,u=s):t<300?(h=a,u=s):t<=360&&(h=s,u=a),new RGBA(h=Math.round((h+c)*255),p=Math.round((p+c)*255),u=Math.round((u+c)*255),r)}};function t9(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(t9(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){return t6(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(t,i,o,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,i=this.rgba.a,o=t.a,r=i+o*(1-i);return r<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*i/r+t.r*o*(1-i)/r,this.rgba.g*i/r+t.g*o*(1-i)/r,this.rgba.b*i/r+t.b*o*(1-i)/r,r))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:i,b:o,a:r}=this.rgba;return new Color(new RGBA(e.rgba.r-r*(e.rgba.r-t),e.rgba.g-r*(e.rgba.g-i),e.rgba.b-r*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let i=1-e.rgba.a;return new Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${t7(e.rgba.r)}${t7(e.rgba.g)}${t7(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(r-o)/r,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;let o=e.getRelativeLuminance(),r=t.getRelativeLuminance();return i=i*(o-r)/o,e.darken(i)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function t7(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let t8=new Emitter,t4=t8.event;function ie(e){let t=document.documentElement,i=window.getComputedStyle(t),o=document.body.classList,r=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),s=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),a=t9("--vscode-editor-background",i),c=t9("--vscode-editor-foreground",i);return c||(c=t9("--vscode-foreground",i)),{colors:{background:a,foreground:c},computedStyle:i,isLightTheme:r,isHighContrastTheme:s,isInitializing:null==e}}var it=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,io=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?ii(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&it(t,i,s),s};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.debug("connected"),this._ipc=new t5(this.name);let e=this.bootstrap;this.bootstrap=void 0,this._stateProvider=this.createStateProvider(e,this._ipc,this._logger);let{webviewId:t,webviewInstanceId:i}=this._stateProvider.state;this._webview={webviewId:t,webviewInstanceId:i,createCommandLink:(e,o)=>{var r;return e.endsWith(":")&&(e=`${e}${t.split(".").at(-1)}`),r=e,`command:${r}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:i,...o}))}`}};let o=ie();if(null!=this.onThemeUpdated){let e;this.onThemeUpdated(o),this.disposables.push(((e=new MutationObserver(e=>{t8.fire(ie(e))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()})),this.disposables.push(t4(this.onThemeUpdated,this))}this.disposables.push(this._stateProvider,this._ipc.onReceiveMessage(e=>{switch(!0){case eN.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case eU.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=function(e){let t,i,o,r,s,a,c,h,p,u,g=0,f="leading"===(a??="trailing")||"both"===a,b="trailing"===a||"both"===a;function m(){if(null!=t){g=Date.now();let i=t,r=u;return u=void 0,t=void 0,o=e.apply(r,i)}}function v(){null!=r&&(clearTimeout(r),r=void 0)}function w(){null!=s&&(clearTimeout(s),s=void 0)}function x(){v(),w(),u=void 0,t=void 0,i=void 0,g=0}function C(...e){if(h?.aborted)return;let a=Date.now();null!=p&&null!=t?t=p(t,e):(u=this,t=e);let w=null==r&&null==s;i=a,v();let _=Date.now();if(i=_,r=setTimeout(()=>{r=void 0,function e(){let t,o,s=Date.now();if(t=s-(i??0),o=s-g,null==i||t>=150||t<0||null!=c&&o>=c){b&&m(),x();return}r=setTimeout(()=>{r=void 0,e()},150-(s-(i??0)))}()},150),null!=c&&!s){0===g&&(g=_);let e=c-(_-g);e>0?s=setTimeout(()=>{s=void 0,b&&null!=t&&m(),g=Date.now()},e):(b&&null!=t&&m(),x())}return f&&w?m():o}return C.cancel=x,C.flush=function(){return v(),w(),m()},C.pending=function(){return null!=r||null!=s},h?.addEventListener("abort",x,{once:!0}),C}(e=>{this._ipc.sendCommand(eM,e)}),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.debug("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return ef`<slot></slot>`}};io([eS({type:String})],GlAppHost.prototype,"name",2),io([eS({type:String})],GlAppHost.prototype,"placement",2),io([eR({context:"ipc"})],GlAppHost.prototype,"_ipc",2),io([eR({context:"logger"})],GlAppHost.prototype,"_logger",2),io([eR({context:"promos"})],GlAppHost.prototype,"_promos",2),io([eR({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),io([eR({context:"webview"})],GlAppHost.prototype,"_webview",2),io([eS({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let ir=S`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;S`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${ir}
	}
`;let is=S`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,ia=S`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;S`
	:focus-visible {
		${is}
	}
`;let il=S`
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
`;S`
	* {
		box-sizing: border-box;
	}
`,S`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${is}
	}
	a:hover {
		text-decoration: underline;
	}
`;let ic=S`
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
`;S`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;let id="welcome";new IpcCommand(id,"dismiss");let ih=new IpcNotification(id,"subscription/didChange"),ip=new IpcNotification(id,"walkthroughProgress/didChange"),iu=new IpcNotification(id,"walkthrough/didFocus"),{fromCharCode:ig}=String;new TextEncoder;let ib=new TextDecoder;let StateProviderBase=class StateProviderBase{constructor(e,t,i,o){this.host=e,this.ipc=i,this.logger=o,this._state=this.ipc.deserializeIpcData(ib.decode(function(e){let t=globalThis.atob(e),i=t.length,o=new Uint8Array(i),r=0,s=i-i%8;for(;r<s;r+=8)o[r]=t.charCodeAt(r),o[r+1]=t.charCodeAt(r+1),o[r+2]=t.charCodeAt(r+2),o[r+3]=t.charCodeAt(r+3),o[r+4]=t.charCodeAt(r+4),o[r+5]=t.charCodeAt(r+5),o[r+6]=t.charCodeAt(r+6),o[r+7]=t.charCodeAt(r+7);for(;r<i;r++)o[r]=t.charCodeAt(r);return o}(t))),this.logger?.debug(`bootstrap duration=${Date.now()-this._state.timestamp}ms`),this.provider=this.createContextProvider(this._state),this.onPersistState?.(this._state),this.disposable=this.ipc.onReceiveMessage(this.onMessageReceived.bind(this)),this.initializeState()}get state(){return this._state}get webviewId(){return this._state.webviewId}get webviewInstanceId(){return this._state.webviewInstanceId}get timestamp(){return this._state.timestamp}dispose(){this.disposable.dispose()}get deferBootstrap(){return!1}async initializeState(){if(this.deferBootstrap){let e=await this.ipc.sendRequest(eO,{bootstrap:!0});if(null!=e.state){let t=tG(e.state)?await e.state:e.state;this.onDeferredBootstrapStateReceived(t)}}else this.ipc.sendRequest(eO,{bootstrap:!1})}onDeferredBootstrapStateReceived(e){this._state={...e,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}};let WelcomeStateProvider=class WelcomeStateProvider extends StateProviderBase{createContextProvider(e){return new context_provider_i(this.host,{context:"welcome-state",initialValue:e})}onMessageReceived(e){switch(!0){case ih.is(e):this._state.plusState=e.params.plusState,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case ip.is(e):this._state.walkthroughProgress=e.params.walkthroughProgress,this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0);break;case iu.is(e):this.host.dispatchEvent(new CustomEvent("gl-walkthrough-focus-command",{bubbles:!0,composed:!0}))}}};let im=S`
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
`;var iv=((h=iv||{})[h.VerificationRequired=-1]="VerificationRequired",h[h.Community=0]="Community",h[h.DeprecatedPreview=1]="DeprecatedPreview",h[h.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",h[h.Trial=3]="Trial",h[h.TrialExpired=4]="TrialExpired",h[h.TrialReactivationEligible=5]="TrialReactivationEligible",h[h.Paid=6]="Paid",h);let iw=S`
	:host {
		--accent-color: #cb64ff;
		--text-color: var(--vscode-sideBar-foreground);
		--dimmed-text-color: var(--vscode-descriptionForeground);
		--heading-color: var(--vscode-tab-activeForeground);
		--em-color: var(--vscode-sideBar-foreground);
		--link-color: var(--vscode-textLink-foreground);
		--card-background: color-mix(in srgb, var(--vscode-descriptionForeground) 13%, var(--color-view-background));

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
`,iy=S`
	:host {
		font-size: var(--vscode-editor-font-size);

		--h1-font-size: 1.7em;
		--p-font-size: 1.23em;
		--card-font-size: 1em;
	}

	@media (max-width: 640px) {
		:host {
			font-size: var(--vscode-editor-font-size);
			--h1-font-size: 1.2em;
			--p-font-size: 1em;
			--card-font-size: 1em;
		}
	}

	@media (max-width: 300px) {
		:host {
			font-size: calc(var(--vscode-editor-font-size) * 0.8);
		}
	}
`,ix=S`
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
`,ik=S`
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
`,iC=S`
	.section {
		display: flex;
		flex-flow: column;
		justify-content: center;
		text-align: center;
		gap: 0.7em;
		margin: 0 auto;
		padding: 1em;
		max-width: 620px;
	}
	.section.section--centered {
		align-items: center;
	}
	.section h1 {
		color: var(--heading-color);
	}
	.section h2 {
		color: var(--heading-color);
		font-weight: normal;
		font-size: var(--p-font-size);
	}

	.section p {
		color: var(--text-color);
		font-size: var(--p-font-size);
	}
	.section > p {
		max-width: 30em;
	}
	.section > p:first-child {
		margin-top: 0;
	}
	.section > p:last-child {
		margin-bottom: 0;
	}

	.section .accent {
		color: var(--accent-color);
	}
	.section a {
		color: var(--link-color);
		text-decoration: none;
	}

	.section ul {
		color: var(--text-color);
		font-size: var(--p-font-size);
	}

	.section gl-button.start-trial-button {
		background: var(--trial-button-gradient);
		border: var(--trial-button-border);
		color: var(--trial-button-text-color);
	}
	.section gl-button {
		--button-width: 100%;
	}

	@media (min-width: 400px) {
		.section gl-button {
			--button-width: initial;
		}
		.section gl-button {
			--button-padding: 0.4em 4em;
		}
	}
`,i_=S`
	.section.header {
		align-items: center;
	}
	.header {
		max-width: 620px;
		margin-left: auto;
		margin-right: auto;
	}
	.header gitlens-logo-circle {
		height: calc(46px * 0.6);
		width: 0;
		transform: scale(0.6) translate(calc(-46px), calc(-46px * 0.2));
		margin-right: 0.4em;
		vertical-align: top;
	}
	.header h1 {
		margin: 0;
		font-size: var(--h1-font-size);
	}
	.header h1 + p {
		margin-top: 0;
	}

	@media (max-width: 640px) {
		.header gitlens-logo-circle {
			height: calc(46px * 0.5);
			transform: scale(0.5) translate(calc(-46px), calc(-46px * 0.25 - 2px));
			margin-right: 0.3em;
		}
	}

	@media (max-width: 300px) {
		.header gitlens-logo-circle {
			height: calc(46px * 0.4);
			transform: scale(0.4) translate(calc(-46px), calc(-46px * 0.3 - 4px));
			margin-right: 0.2em;
		}
	}
`,i$=S`
	.card {
		display: flex;
		flex-direction: column;
		gap: 0.7em;
		border-radius: 0.63em;
		background-color: var(--card-background);
		padding: 1.5em;
		text-align: initial;
	}

	.card-part--centered {
		margin: auto;
		align-items: center;
		text-align: center;
	}

	gl-walkthrough-step.card::part(header) {
		padding: 1.5em;
		margin: -1.5em;
	}

	@media (max-width: 400px) {
		.card-part--centered {
			margin: 0;
		}
	}

	@media (max-width: 300px) {
		.card {
			padding: 1em;
		}
		gl-walkthrough-step.card::part(header) {
			padding: 1em;
			margin: -1em;
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

	.card ul {
		text-align: initial;
		padding-inline-start: 1em;
		margin: 0.5em 0 0;
		font-size: var(--card-font-size);
	}

	.card img {
		max-width: 100%;
	}

	p.card-part--tip {
		color: var(--dimmed-text-color);
	}
	p.card-part--tip em {
		color: var(--em-color);
		font-style: normal;
	}

	gl-walkthrough-step.card {
		text-align: left;
	}
`,iA=S`
	gl-scrollable-features {
		--side-shadow-padding: max(var(--page-margin-left), var(--page-margin-right));
		--side-shadow-color: var(--page-background-color);
	}
`,iS=S`
	${iw} ${iy} ${ix}
	${ik} ${iC} ${i_}
	${iA}
	${i$}
`;var iL=Object.defineProperty,iE=Object.getOwnPropertyDescriptor;let iP=class extends lit_element_i{render(){return ef`<svg
			alt="GitLens"
			width="46"
			height="46"
			viewBox="0 0 46 46"
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
		</svg>`}};iP.styles=[S`
			:host {
				display: inline-block;
				vertical-align: middle;
				position: relative;
			}

			:host::after {
				content: ' ';
				display: block;
				width: 100%;
				height: 100%;
				background-color: red;
				visibility: hidden;
				position: absolute;
				top: 0;
				left: 0;
			}

			:host-context(.vscode-high-contrast-light) .letters,
			:host-context(.vscode-light) .letters {
				fill: var(--color-foreground);
			}

			svg {
				display: block;
			}
		`],iP=((e,t,i,o)=>{for(var r,s=o>1?void 0:o?iE(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&iL(t,i,s),s})([e$("gitlens-logo-circle")],iP);var iR=Object.defineProperty,iI=Object.defineProperties,iO=Object.getOwnPropertyDescriptor,iM=Object.getOwnPropertyDescriptors,iT=Object.getOwnPropertySymbols,iz=Object.prototype.hasOwnProperty,iD=Object.prototype.propertyIsEnumerable,iN=e=>{throw TypeError(e)},iU=(e,t,i)=>t in e?iR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ij=(e,t)=>{for(var i in t||(t={}))iz.call(t,i)&&iU(e,i,t[i]);if(iT)for(var i of iT(t))iD.call(t,i)&&iU(e,i,t[i]);return e},iF=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?iO(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&iR(t,i,s),s},iB=(e,t,i)=>t.has(e)||iN("Cannot "+i),iH=new Map,iq=new WeakMap;function iG(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function iW(e,t){iH.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function iV(e,t,i){let o=iq.get(e);if(null==o?void 0:o[t])return iG(o[t],i.dir);let r=iH.get(t);return r?iG(r,i.dir):{keyframes:[],options:{duration:0}}}let iZ=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=em,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===em||null==e)return this._t=void 0,this.it=e;if(e===eb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let iK=iZ(unsafe_html_e);var iJ=S`
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
`,iY=S`
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
`;let iQ=new Set,iX=new Map,i1="ltr",i0="en",i2="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(i2){let e=new MutationObserver(i5);i1=document.documentElement.dir||"ltr",i0=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function i3(...e){e.map(e=>{let t=e.$code.toLowerCase();iX.has(t)?iX.set(t,Object.assign(Object.assign({},iX.get(t)),e)):iX.set(t,e),i||(i=e)}),i5()}function i5(){i2&&(i1=document.documentElement.dir||"ltr",i0=document.documentElement.lang||navigator.language),[...iQ.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){iQ.add(this.host)}hostDisconnected(){iQ.delete(this.host)}dir(){return`${this.host.dir||i1}`.toLowerCase()}lang(){return`${this.host.lang||i0}`.toLowerCase()}getTranslationData(e){var t,i;let o=new Intl.Locale(e.replace(/_/g,"-")),r=null==o?void 0:o.language.toLowerCase(),s=null!=(i=null==(t=null==o?void 0:o.region)?void 0:t.toLowerCase())?i:"",a=iX.get(`${r}-${s}`),c=iX.get(r);return{locale:o,language:r,region:s,primary:a,secondary:c}}exists(e,t){var o;let{primary:r,secondary:s}=this.getTranslationData(null!=(o=t.lang)?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!r&&!!r[e]||!!s&&!!s[e]||!!t.includeFallback&&!!i&&!!i[e]}term(e,...t){let o,{primary:r,secondary:s}=this.getTranslationData(this.lang());if(r&&r[e])o=r[e];else if(s&&s[e])o=s[e];else{if(!i||!i[e])return String(e);o=i[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}};var i6={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};i3(i6);var i9=class extends LocalizeController{};i3(i6);var i7=S`
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
`,i8=class extends lit_element_i{constructor(){let e;super(),(e=b).has(this)?iN("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let i=new CustomEvent(e,ij({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){let o=customElements.get(e);if(!o){try{customElements.define(e,t,i)}catch(o){customElements.define(e,class extends t{},i)}return}let r=" (unknown version)";"version"in t&&t.version&&(r=" v"+t.version),"version"in o&&o.version&&o.version}attributeChangedCallback(e,t,i){let o,r;if(iB(this,o=b,"read from private field"),r?!r.call(this):!o.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),iB(this,e=b,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&null==this[i]&&(this[i]=t)})}};b=new WeakMap,i8.version="2.20.1",i8.dependencies={},iF([eS()],i8.prototype,"dir",2),iF([eS()],i8.prototype,"lang",2);let i4=Math.min,oe=Math.max,ot=Math.round,oi=Math.floor,oo=e=>({x:e,y:e}),or={left:"right",right:"left",bottom:"top",top:"bottom"},on={start:"end",end:"start"};function os(e,t){return"function"==typeof e?e(t):e}function oa(e){return e.split("-")[0]}function ol(e){return e.split("-")[1]}function oc(e){return"x"===e?"y":"x"}function od(e){return"y"===e?"height":"width"}let oh=new Set(["top","bottom"]);function op(e){return oh.has(oa(e))?"y":"x"}function ou(e){return e.replace(/start|end/g,e=>on[e])}let og=["left","right"],of=["right","left"],ob=["top","bottom"],om=["bottom","top"];function ov(e){return e.replace(/left|right|bottom|top/g,e=>or[e])}function ow(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function oy(e){let{x:t,y:i,width:o,height:r}=e;return{width:o,height:r,top:i,left:t,right:t+o,bottom:i+r,x:t,y:i}}function ox(e,t,i){let o,{reference:r,floating:s}=e,a=op(t),c=oc(op(t)),h=od(c),p=oa(t),u="y"===a,g=r.x+r.width/2-s.width/2,f=r.y+r.height/2-s.height/2,b=r[h]/2-s[h]/2;switch(p){case"top":o={x:g,y:r.y-s.height};break;case"bottom":o={x:g,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:f};break;case"left":o={x:r.x-s.width,y:f};break;default:o={x:r.x,y:r.y}}switch(ol(t)){case"start":o[c]-=b*(i&&u?-1:1);break;case"end":o[c]+=b*(i&&u?-1:1)}return o}async function ok(e,t){var i;void 0===t&&(t={});let{x:o,y:r,platform:s,rects:a,elements:c,strategy:h}=e,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:f=!1,padding:b=0}=os(t,e),m=ow(b),v=c[f?"floating"===g?"reference":"floating":g],w=oy(await s.getClippingRect({element:null==(i=await (null==s.isElement?void 0:s.isElement(v)))||i?v:v.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(c.floating)),boundary:p,rootBoundary:u,strategy:h})),x="floating"===g?{x:o,y:r,width:a.floating.width,height:a.floating.height}:a.reference,C=await (null==s.getOffsetParent?void 0:s.getOffsetParent(c.floating)),_=await (null==s.isElement?void 0:s.isElement(C))&&await (null==s.getScale?void 0:s.getScale(C))||{x:1,y:1},$=oy(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:C,strategy:h}):x);return{top:(w.top-$.top+m.top)/_.y,bottom:($.bottom-w.bottom+m.bottom)/_.y,left:(w.left-$.left+m.left)/_.x,right:($.right-w.right+m.right)/_.x}}let oC=async(e,t,i)=>{let{placement:o="bottom",strategy:r="absolute",middleware:s=[],platform:a}=i,c=s.filter(Boolean),h=await (null==a.isRTL?void 0:a.isRTL(t)),p=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:u,y:g}=ox(p,o,h),f=o,b={},m=0;for(let i=0;i<c.length;i++){var v;let{name:s,fn:w}=c[i],{x:x,y:C,data:_,reset:$}=await w({x:u,y:g,initialPlacement:o,placement:f,strategy:r,middlewareData:b,rects:p,platform:{...a,detectOverflow:null!=(v=a.detectOverflow)?v:ok},elements:{reference:e,floating:t}});u=null!=x?x:u,g=null!=C?C:g,b={...b,[s]:{...b[s],..._}},$&&m<=50&&(m++,"object"==typeof $&&($.placement&&(f=$.placement),$.rects&&(p=!0===$.rects?await a.getElementRects({reference:e,floating:t,strategy:r}):$.rects),{x:u,y:g}=ox(p,f,h)),i=-1)}return{x:u,y:g,placement:f,strategy:r,middlewareData:b}},o_=new Set(["left","top"]);async function o$(e,t){let{placement:i,platform:o,elements:r}=e,s=await (null==o.isRTL?void 0:o.isRTL(r.floating)),a=oa(i),c=ol(i),h="y"===op(i),p=o_.has(a)?-1:1,u=s&&h?-1:1,g=os(t,e),{mainAxis:f,crossAxis:b,alignmentAxis:m}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return c&&"number"==typeof m&&(b="end"===c?-1*m:m),h?{x:b*u,y:f*p}:{x:f*p,y:b*u}}function oA(){return"u">typeof window}function oS(e){return oP(e)?(e.nodeName||"").toLowerCase():"#document"}function oL(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function oE(e){var t;return null==(t=(oP(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function oP(e){return!!oA()&&(e instanceof Node||e instanceof oL(e).Node)}function oR(e){return!!oA()&&(e instanceof Element||e instanceof oL(e).Element)}function oI(e){return!!oA()&&(e instanceof HTMLElement||e instanceof oL(e).HTMLElement)}function oO(e){return!(!oA()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof oL(e).ShadowRoot)}let oM=new Set(["inline","contents"]);function oT(e){let{overflow:t,overflowX:i,overflowY:o,display:r}=oW(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!oM.has(r)}let oz=new Set(["table","td","th"]),oD=[":popover-open",":modal"];function oN(e){return oD.some(t=>{try{return e.matches(t)}catch{return!1}})}let oU=["transform","translate","scale","rotate","perspective"],oj=["transform","translate","scale","rotate","perspective","filter"],oF=["paint","layout","strict","content"];function oB(e){let t=oH(),i=oR(e)?oW(e):e;return oU.some(e=>!!i[e]&&"none"!==i[e])||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||oj.some(e=>(i.willChange||"").includes(e))||oF.some(e=>(i.contain||"").includes(e))}function oH(){return!("u"<typeof CSS)&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let oq=new Set(["html","body","#document"]);function oG(e){return oq.has(oS(e))}function oW(e){return oL(e).getComputedStyle(e)}function oV(e){return oR(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function oZ(e){if("html"===oS(e))return e;let t=e.assignedSlot||e.parentNode||oO(e)&&e.host||oE(e);return oO(t)?t.host:t}function oK(e,t,i){var o;void 0===t&&(t=[]),void 0===i&&(i=!0);let r=function e(t){let i=oZ(t);return oG(i)?t.ownerDocument?t.ownerDocument.body:t.body:oI(i)&&oT(i)?i:e(i)}(e),s=r===(null==(o=e.ownerDocument)?void 0:o.body),a=oL(r);if(s){let e=oJ(a);return t.concat(a,a.visualViewport||[],oT(r)?r:[],e&&i?oK(e):[])}return t.concat(r,oK(r,[],i))}function oJ(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function oY(e){let t=oW(e),i=parseFloat(t.width)||0,o=parseFloat(t.height)||0,r=oI(e),s=r?e.offsetWidth:i,a=r?e.offsetHeight:o,c=ot(i)!==s||ot(o)!==a;return c&&(i=s,o=a),{width:i,height:o,$:c}}function oQ(e){return oR(e)?e:e.contextElement}function oX(e){let t=oQ(e);if(!oI(t))return oo(1);let i=t.getBoundingClientRect(),{width:o,height:r,$:s}=oY(t),a=(s?ot(i.width):i.width)/o,c=(s?ot(i.height):i.height)/r;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}let o1=oo(0);function o0(e){let t=oL(e);return oH()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:o1}function o2(e,t,i,o){var r;void 0===t&&(t=!1),void 0===i&&(i=!1);let s=e.getBoundingClientRect(),a=oQ(e),c=oo(1);t&&(o?oR(o)&&(c=oX(o)):c=oX(e));let h=(void 0===(r=i)&&(r=!1),o&&(!r||o===oL(a))&&r)?o0(a):oo(0),p=(s.left+h.x)/c.x,u=(s.top+h.y)/c.y,g=s.width/c.x,f=s.height/c.y;if(a){let e=oL(a),t=o&&oR(o)?oL(o):o,i=e,r=oJ(i);for(;r&&o&&t!==i;){let e=oX(r),t=r.getBoundingClientRect(),o=oW(r),s=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;p*=e.x,u*=e.y,g*=e.x,f*=e.y,p+=s,u+=a,r=oJ(i=oL(r))}}return oy({width:g,height:f,x:p,y:u})}function o3(e,t){let i=oV(e).scrollLeft;return t?t.left+i:o2(oE(e)).left+i}function o5(e,t){let i=e.getBoundingClientRect();return{x:i.left+t.scrollLeft-o3(e,i),y:i.top+t.scrollTop}}let o6=new Set(["absolute","fixed"]);function o9(e,t,i){var o;let r;if("viewport"===t)r=function(e,t){let i=oL(e),o=oE(e),r=i.visualViewport,s=o.clientWidth,a=o.clientHeight,c=0,h=0;if(r){s=r.width,a=r.height;let e=oH();(!e||e&&"fixed"===t)&&(c=r.offsetLeft,h=r.offsetTop)}let p=o3(o);if(p<=0){let e=o.ownerDocument,t=e.body,i=getComputedStyle(t),r="CSS1Compat"===e.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,a=Math.abs(o.clientWidth-t.clientWidth-r);a<=25&&(s-=a)}else p<=25&&(s+=p);return{width:s,height:a,x:c,y:h}}(e,i);else if("document"===t){let t,i,s,a,c,h,p;o=oE(e),t=oE(o),i=oV(o),s=o.ownerDocument.body,a=oe(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),c=oe(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight),h=-i.scrollLeft+o3(o),p=-i.scrollTop,"rtl"===oW(s).direction&&(h+=oe(t.clientWidth,s.clientWidth)-a),r={width:a,height:c,x:h,y:p}}else if(oR(t)){let e,o,s,a,c,h;o=(e=o2(t,!0,"fixed"===i)).top+t.clientTop,s=e.left+t.clientLeft,a=oI(t)?oX(t):oo(1),c=t.clientWidth*a.x,h=t.clientHeight*a.y,r={width:c,height:h,x:s*a.x,y:o*a.y}}else{let i=o0(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return oy(r)}function o7(e){return"static"===oW(e).position}function o8(e,t){if(!oI(e)||"fixed"===oW(e).position)return null;if(t)return t(e);let i=e.offsetParent;return oE(e)===i&&(i=i.ownerDocument.body),i}function o4(e,t){var i;let o=oL(e);if(oN(e))return o;if(!oI(e)){let t=oZ(e);for(;t&&!oG(t);){if(oR(t)&&!o7(t))return t;t=oZ(t)}return o}let r=o8(e,t);for(;r&&(i=r,oz.has(oS(i)))&&o7(r);)r=o8(r,t);return r&&oG(r)&&o7(r)&&!oB(r)?o:r||function(e){let t=oZ(e);for(;oI(t)&&!oG(t);){if(oB(t))return t;if(oN(t))break;t=oZ(t)}return null}(e)||o}let re=async function(e){let t=this.getOffsetParent||o4,i=this.getDimensions,o=await i(e.floating);return{reference:function(e,t,i){let o=oI(t),r=oE(t),s="fixed"===i,a=o2(e,!0,s,t),c={scrollLeft:0,scrollTop:0},h=oo(0);if(o||!o&&!s)if(("body"!==oS(t)||oT(r))&&(c=oV(t)),o){let e=o2(t,!0,s,t);h.x=e.x+t.clientLeft,h.y=e.y+t.clientTop}else r&&(h.x=o3(r));s&&!o&&r&&(h.x=o3(r));let p=!r||o||s?oo(0):o5(r,c);return{x:a.left+c.scrollLeft-h.x-p.x,y:a.top+c.scrollTop-h.y-p.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},rt={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:o,strategy:r}=e,s="fixed"===r,a=oE(o),c=!!t&&oN(t.floating);if(o===a||c&&s)return i;let h={scrollLeft:0,scrollTop:0},p=oo(1),u=oo(0),g=oI(o);if((g||!g&&!s)&&(("body"!==oS(o)||oT(a))&&(h=oV(o)),oI(o))){let e=o2(o);p=oX(o),u.x=e.x+o.clientLeft,u.y=e.y+o.clientTop}let f=!a||g||s?oo(0):o5(a,h);return{width:i.width*p.x,height:i.height*p.y,x:i.x*p.x-h.scrollLeft*p.x+u.x+f.x,y:i.y*p.y-h.scrollTop*p.y+u.y+f.y}},getDocumentElement:oE,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:o,strategy:r}=e,s=[..."clippingAncestors"===i?oN(t)?[]:function(e,t){let i=t.get(e);if(i)return i;let o=oK(e,[],!1).filter(e=>oR(e)&&"body"!==oS(e)),r=null,s="fixed"===oW(e).position,a=s?oZ(e):e;for(;oR(a)&&!oG(a);){let t=oW(a),i=oB(a);i||"fixed"!==t.position||(r=null),(s?!i&&!r:!i&&"static"===t.position&&!!r&&o6.has(r.position)||oT(a)&&!i&&function e(t,i){let o=oZ(t);return!(o===i||!oR(o)||oG(o))&&("fixed"===oW(o).position||e(o,i))}(e,a))?o=o.filter(e=>e!==a):r=t,a=oZ(a)}return t.set(e,o),o}(t,this._c):[].concat(i),o],a=s[0],c=s.reduce((e,i)=>{let o=o9(t,i,r);return e.top=oe(o.top,e.top),e.right=i4(o.right,e.right),e.bottom=i4(o.bottom,e.bottom),e.left=oe(o.left,e.left),e},o9(t,a,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:o4,getElementRects:re,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:i}=oY(e);return{width:t,height:i}},getScale:oX,isElement:oR,isRTL:function(e){return"rtl"===oW(e).direction}};function ri(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let ro=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var i,o;let r,s,{placement:a,rects:c,platform:h,elements:p}=t,{apply:u=()=>{},...g}=os(e,t),f=await h.detectOverflow(t,g),b=oa(a),m=ol(a),v="y"===op(a),{width:w,height:x}=c.floating;"top"===b||"bottom"===b?(r=b,s=m===(await (null==h.isRTL?void 0:h.isRTL(p.floating))?"start":"end")?"left":"right"):(s=b,r="end"===m?"top":"bottom");let C=x-f.top-f.bottom,_=w-f.left-f.right,$=i4(x-f[r],C),A=i4(w-f[s],_),S=!t.middlewareData.shift,E=$,P=A;if(null!=(i=t.middlewareData.shift)&&i.enabled.x&&(P=_),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(E=C),S&&!m){let e=oe(f.left,0),t=oe(f.right,0),i=oe(f.top,0),o=oe(f.bottom,0);v?P=w-2*(0!==e||0!==t?e+t:oe(f.left,f.right)):E=x-2*(0!==i||0!==o?i+o:oe(f.top,f.bottom))}await u({...t,availableWidth:P,availableHeight:E});let O=await h.getDimensions(p.floating);return w!==O.width||x!==O.height?{reset:{rects:!0}}:{}}}},rr=iZ(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.st)e in t||(i.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return eb}});function rn(e){var t=e;for(let e=t;e;e=rs(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=rs(t);e;e=rs(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||oB(t)||"BODY"===e.tagName))return e}return null}function rs(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var ra=class extends i8{constructor(){super(...arguments),this.localize=new i9(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),o=0,r=0,s=0,a=0,c=0,h=0,p=0,u=0;i?e.top<t.top?(o=e.left,r=e.bottom,s=e.right,a=e.bottom,c=t.left,h=t.top,p=t.right,u=t.top):(o=t.left,r=t.bottom,s=t.right,a=t.bottom,c=e.left,h=e.top,p=e.right,u=e.top):e.left<t.left?(o=e.right,r=e.top,s=t.left,a=t.top,c=e.right,h=e.bottom,p=t.left,u=t.bottom):(o=t.right,r=t.top,s=e.left,a=e.top,c=t.right,h=t.bottom,p=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,i,o){let r;void 0===o&&(o={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:p=!1}=o,u=oQ(e),g=s||a?[...u?oK(u):[],...oK(t)]:[];g.forEach(e=>{s&&e.addEventListener("scroll",i,{passive:!0}),a&&e.addEventListener("resize",i)});let f=u&&h?function(e,t){let i,o=null,r=oE(e);function s(){var e;clearTimeout(i),null==(e=o)||e.disconnect(),o=null}return!function a(c,h){void 0===c&&(c=!1),void 0===h&&(h=1),s();let p=e.getBoundingClientRect(),{left:u,top:g,width:f,height:b}=p;if(c||t(),!f||!b)return;let m={rootMargin:-oi(g)+"px "+-oi(r.clientWidth-(u+f))+"px "+-oi(r.clientHeight-(g+b))+"px "+-oi(u)+"px",threshold:oe(0,i4(1,h))||1},v=!0;function w(t){let o=t[0].intersectionRatio;if(o!==h){if(!v)return a();o?a(!1,o):i=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==o||ri(p,e.getBoundingClientRect())||a(),v=!1}try{o=new IntersectionObserver(w,{...m,root:r.ownerDocument})}catch{o=new IntersectionObserver(w,m)}o.observe(e)}(!0),s}(u,i):null,b=-1,m=null;c&&(m=new ResizeObserver(e=>{let[o]=e;o&&o.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var e;null==(e=m)||e.observe(t)})),i()}),u&&!p&&m.observe(u),m.observe(t));let v=p?o2(e):null;return p&&function t(){let o=o2(e);v&&!ri(v,o)&&i(),v=o,r=requestAnimationFrame(t)}(),i(),()=>{var e;g.forEach(e=>{s&&e.removeEventListener("scroll",i),a&&e.removeEventListener("resize",i)}),null==f||f(),null==(e=m)||e.disconnect(),m=null,p&&cancelAnimationFrame(r)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,i,o,r,s;let a,c,h,p;if(!this.active||!this.anchorEl)return;let u=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var i,o;let{x:r,y:s,placement:a,middlewareData:c}=t,h=await o$(t,e);return a===(null==(i=c.offset)?void 0:i.placement)&&null!=(o=c.arrow)&&o.alignmentOffset?{}:{x:r+h.x,y:s+h.y,data:{...h,placement:a}}}}];this.sync?u.push(ro({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&u.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var i,o,r,s,a,c,h,p;let u,g,f,{placement:b,middlewareData:m,rects:v,initialPlacement:w,platform:x,elements:C}=e,{mainAxis:_=!0,crossAxis:$=!0,fallbackPlacements:A,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:E="none",flipAlignment:P=!0,...O}=os(t,e);if(null!=(i=m.arrow)&&i.alignmentOffset)return{};let M=oa(b),T=op(w),D=oa(w)===w,N=await (null==x.isRTL?void 0:x.isRTL(C.floating)),U=A||(D||!P?[ov(w)]:(u=ov(w),[ou(w),u,ou(u)])),j="none"!==E;!A&&j&&U.push(...(g=ol(w),f=function(e,t,i){switch(e){case"top":case"bottom":if(i)return t?of:og;return t?og:of;case"left":case"right":return t?ob:om;default:return[]}}(oa(w),"start"===E,N),g&&(f=f.map(e=>e+"-"+g),P&&(f=f.concat(f.map(ou)))),f));let F=[w,...U],B=await x.detectOverflow(e,O),q=[],G=(null==(o=m.flip)?void 0:o.overflows)||[];if(_&&q.push(B[M]),$){let e,t,i,o,r=(c=b,h=v,void 0===(p=N)&&(p=!1),e=ol(c),i=od(t=oc(op(c))),o="x"===t?e===(p?"end":"start")?"right":"left":"start"===e?"bottom":"top",h.reference[i]>h.floating[i]&&(o=ov(o)),[o,ov(o)]);q.push(B[r[0]],B[r[1]])}if(G=[...G,{placement:b,overflows:q}],!q.every(e=>e<=0)){let e=((null==(r=m.flip)?void 0:r.index)||0)+1,t=F[e];if(t&&("alignment"!==$||T===op(t)||G.every(e=>op(e.placement)!==T||e.overflows[0]>0)))return{data:{index:e,overflows:G},reset:{placement:t}};let i=null==(s=G.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:s.placement;if(!i)switch(S){case"bestFit":{let e=null==(a=G.filter(e=>{if(j){let t=op(e.placement);return t===T||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(i=e);break}case"initialPlacement":i=w}if(b!==i)return{reset:{placement:i}}}return{}}}),this.shift&&u.push({name:"shift",options:i={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:r,platform:s}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:h={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...p}=os(i,e),u={x:t,y:o},g=await s.detectOverflow(e,p),f=op(oa(r)),b=oc(f),m=u[b],v=u[f];if(a){let e="y"===b?"top":"left",t="y"===b?"bottom":"right",i=m+g[e],o=m-g[t];m=oe(i,i4(m,o))}if(c){let e="y"===f?"top":"left",t="y"===f?"bottom":"right",i=v+g[e],o=v-g[t];v=oe(i,i4(v,o))}let w=h.fn({...e,[b]:m,[f]:v});return{...w,data:{x:w.x-t,y:w.y-o,enabled:{[b]:a,[f]:c}}}}}),this.autoSize?u.push(ro({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&u.push({name:"arrow",options:a={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:i,placement:o,rects:r,platform:s,elements:c,middlewareData:h}=e,{element:p,padding:u=0}=os(a,e)||{};if(null==p)return{};let g=ow(u),f={x:t,y:i},b=oc(op(o)),m=od(b),v=await s.getDimensions(p),w="y"===b,x=w?"clientHeight":"clientWidth",C=r.reference[m]+r.reference[b]-f[b]-r.floating[m],_=f[b]-r.reference[b],$=await (null==s.getOffsetParent?void 0:s.getOffsetParent(p)),A=$?$[x]:0;A&&await (null==s.isElement?void 0:s.isElement($))||(A=c.floating[x]||r.floating[m]);let S=A/2-v[m]/2-1,E=i4(g[w?"top":"left"],S),P=i4(g[w?"bottom":"right"],S),O=A-v[m]-P,M=A/2-v[m]/2+(C/2-_/2),T=oe(E,i4(M,O)),D=!h.arrow&&null!=ol(o)&&M!==T&&r.reference[m]/2-(M<E?E:P)-v[m]/2<0,N=D?M<E?M-E:M-O:0;return{[b]:f[b]+N,data:{[b]:T,centerOffset:M-T-N,...D&&{alignmentOffset:N}},reset:D}}});let g="absolute"===this.strategy?e=>rt.getOffsetParent(e,rn):rt.getOffsetParent;(o=this.anchorEl,r=this.popup,s={placement:this.placement,middleware:u,strategy:this.strategy,platform:iI(ij({},rt),iM({getOffsetParent:g}))},c=new Map,p={...(h={platform:rt,...s}).platform,_c:c},oC(o,r,{...h,platform:p})).then(({x:e,y:t,middlewareData:i,placement:o})=>{let r="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=i.arrow.x,t=i.arrow.y,o="",a="",c="",h="";if("start"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=r?i:"",h=r?"":i}else if("end"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=r?"":i,h=r?i:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:a,bottom:c,left:h,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ef`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${rr({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${rr({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ef`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function rl(e,t){return new Promise(i=>{e.addEventListener(t,function o(r){r.target===e&&(e.removeEventListener(t,o),i())})})}function rc(e,t,i){return new Promise(o=>{if((null==i?void 0:i.duration)===1/0)throw Error("Promise-based animations must be finite.");let r=e.animate(t,iI(ij({},i),iM({duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:i.duration})));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function rd(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function rh(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function rp(e,t){let i=ij({waitUntilFirstUpdate:!1},t);return(t,o)=>{let{update:r}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach(t=>{if(e.has(t)){let r=e.get(t),s=this[t];r!==s&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](r,s)}}),r.call(this,e)}}}ra.styles=[i7,iY],iF([eP(".popup")],ra.prototype,"popup",2),iF([eP(".popup__arrow")],ra.prototype,"arrowEl",2),iF([eS()],ra.prototype,"anchor",2),iF([eS({type:Boolean,reflect:!0})],ra.prototype,"active",2),iF([eS({reflect:!0})],ra.prototype,"placement",2),iF([eS({reflect:!0})],ra.prototype,"strategy",2),iF([eS({type:Number})],ra.prototype,"distance",2),iF([eS({type:Number})],ra.prototype,"skidding",2),iF([eS({type:Boolean})],ra.prototype,"arrow",2),iF([eS({attribute:"arrow-placement"})],ra.prototype,"arrowPlacement",2),iF([eS({attribute:"arrow-padding",type:Number})],ra.prototype,"arrowPadding",2),iF([eS({type:Boolean})],ra.prototype,"flip",2),iF([eS({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],ra.prototype,"flipFallbackPlacements",2),iF([eS({attribute:"flip-fallback-strategy"})],ra.prototype,"flipFallbackStrategy",2),iF([eS({type:Object})],ra.prototype,"flipBoundary",2),iF([eS({attribute:"flip-padding",type:Number})],ra.prototype,"flipPadding",2),iF([eS({type:Boolean})],ra.prototype,"shift",2),iF([eS({type:Object})],ra.prototype,"shiftBoundary",2),iF([eS({attribute:"shift-padding",type:Number})],ra.prototype,"shiftPadding",2),iF([eS({attribute:"auto-size"})],ra.prototype,"autoSize",2),iF([eS()],ra.prototype,"sync",2),iF([eS({type:Object})],ra.prototype,"autoSizeBoundary",2),iF([eS({attribute:"auto-size-padding",type:Number})],ra.prototype,"autoSizePadding",2),iF([eS({attribute:"hover-bridge",type:Boolean})],ra.prototype,"hoverBridge",2);var ru=class extends i8{constructor(){super(),this.localize=new i9(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=rd(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=rd(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await rh(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:i}=iV(this,"tooltip.show",{dir:this.localize.dir()});await rc(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await rh(this.body);let{keyframes:e,options:i}=iV(this,"tooltip.hide",{dir:this.localize.dir()});await rc(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,rl(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,rl(this,"sl-after-hide")}render(){return ef`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${rr({tooltip:!0,"tooltip--open":this.open})}
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
    `}};ru.styles=[i7,iJ],ru.dependencies={"sl-popup":ra},iF([eP("slot:not([name])")],ru.prototype,"defaultSlot",2),iF([eP(".tooltip__body")],ru.prototype,"body",2),iF([eP("sl-popup")],ru.prototype,"popup",2),iF([eS()],ru.prototype,"content",2),iF([eS()],ru.prototype,"placement",2),iF([eS({type:Boolean,reflect:!0})],ru.prototype,"disabled",2),iF([eS({type:Number})],ru.prototype,"distance",2),iF([eS({type:Boolean,reflect:!0})],ru.prototype,"open",2),iF([eS({type:Number})],ru.prototype,"skidding",2),iF([eS()],ru.prototype,"trigger",2),iF([eS({type:Boolean})],ru.prototype,"hoist",2),iF([rp("open",{waitUntilFirstUpdate:!0})],ru.prototype,"handleOpenChange",1),iF([rp(["content","distance","hoist","placement","skidding"])],ru.prototype,"handleOptionsChange",1),iF([rp("disabled")],ru.prototype,"handleDisabledChange",1),iW("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),iW("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),ru.define("sl-tooltip");var rg=Object.defineProperty,rf=Object.getOwnPropertyDescriptor,rb=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rf(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rg(t,i,s),s};iW("tooltip.show",null),iW("tooltip.hide",null);let rm=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.suppressed=!1,this.onMouseDown=e=>{this.suppressed=!0,this.hide()},this.onMouseUp=e=>{this.suppressed=!1},this.onDragStart=e=>{this.suppressed=!0,this.hide()},this.onDragEnd=e=>{this.suppressed=!1}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("dragstart",this.onDragStart,{capture:!0}),window.addEventListener("dragend",this.onDragEnd,{capture:!0})}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),this.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("dragstart",this.onDragStart,{capture:!0}),window.removeEventListener("dragend",this.onDragEnd,{capture:!0}),super.disconnectedCallback?.()}async hide(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.hide()}async show(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.show()}render(){var e;return ef`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled||this.suppressed}
			.distance=${this.distance??em}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?iK(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};rm.styles=S`
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
	`,rb([eS()],rm.prototype,"content",2),rb([eS({reflect:!0})],rm.prototype,"placement",2),rb([eS({type:Boolean})],rm.prototype,"disabled",2),rb([eS({type:Number})],rm.prototype,"distance",2),rb([eS({type:Boolean,attribute:"hide-on-click"})],rm.prototype,"hideOnClick",2),rb([eS({type:Boolean})],rm.prototype,"hoist",2),rb([eL()],rm.prototype,"suppressed",2),rm=rb([e$("gl-tooltip")],rm);var rv=Object.defineProperty,rw=Object.getOwnPropertyDescriptor,ry=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rw(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rv(t,i,s),s};let rx=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ef`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??em}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ef`<gl-tooltip placement=${this.tooltipPlacement??em}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ef`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??em}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ef`<button
			class="control"
			role=${this.role??em}
			aria-checked=${this.ariaChecked??em}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};rx.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},rx.styles=[il,S`
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
				${ia}
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
		`],ry([eP(".control")],rx.prototype,"control",2),ry([eS({reflect:!0})],rx.prototype,"appearance",2),ry([eS({reflect:!0})],rx.prototype,"variant",2),ry([eS({type:Boolean,reflect:!0})],rx.prototype,"disabled",2),ry([eS({reflect:!0})],rx.prototype,"density",2),ry([eS({type:Boolean,reflect:!0})],rx.prototype,"full",2),ry([eS()],rx.prototype,"href",2),ry([eS()],rx.prototype,"tooltip",2),ry([eS()],rx.prototype,"tooltipPlacement",2),ry([eS({type:Boolean,reflect:!0})],rx.prototype,"truncate",2),rx=ry([e$("gl-button")],rx);let rk=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f",bracket:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52","send-to-remote-agent":"\\ec53","comment-discussion-sparkle":"\\ec54","chat-sparkle-warning":"\\ec55","chat-sparkle-error":"\\ec56",collection:"\\ec57","new-collection":"\\ec58",thinking:"\\ec59",build:"\\ec5a","comment-discussion-quote":"\\ec5b",cursor:"\\ec5c",eraser:"\\ec5d","file-text":"\\ec5e",quotes:"\\ec60",rename:"\\ec61","run-with-deps":"\\ec62","debug-connected":"\\ec63",strikethrough:"\\ec64","open-in-product":"\\ec65","index-zero":"\\ec66",agent:"\\ec67","edit-code":"\\ec68","repo-selected":"\\ec69",skip:"\\ec6a","merge-into":"\\ec6b","git-branch-changes":"\\ec6c","git-branch-staged-changes":"\\ec6d","git-branch-conflicts":"\\ec6e","git-branch":"\\ec6f","git-branch-create":"\\ec6f","git-branch-delete":"\\ec6f","search-large":"\\ec70","terminal-git-bash":"\\ec71","window-active":"\\ec72",forward:"\\ec73",download:"\\ec74",clockface:"\\ec75",unarchive:"\\ec76","session-in-progress":"\\ec77","collection-small":"\\ec78","vm-small":"\\ec79","cloud-small":"\\ec7a"}),rC=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147"});var r_=Object.defineProperty,r$=Object.getOwnPropertyDescriptor,rA=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?r$(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&r_(t,i,s),s};function rS(e,t=""){return A(Object.entries(e).map(([e,i])=>(function(e,t,i=""){return`:host([icon='${i}${e}'])::before { content: '${t}'; }`})(e,i,t)).join(""))}let rL=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};rL.styles=S`
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

		${rS(rk)}
		${rS(rC,"gl-")}

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
	`,rA([eS({reflect:!0})],rL.prototype,"icon",2),rA([eS({reflect:!0})],rL.prototype,"modifier",2),rA([eS({type:Number})],rL.prototype,"size",2),rA([eS({reflect:!0})],rL.prototype,"flip",2),rA([eS({reflect:!0})],rL.prototype,"rotate",2),rL=rA([e$("code-icon")],rL);var rE=Object.defineProperty,rP=Object.getOwnPropertyDescriptor,rR=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rP(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rE(t,i,s),s};let rI=class extends lit_element_i{constructor(){super(...arguments),this.completed=!1,this.expanded=!1}focus(e){this.header?.focus(e)}toggleExpanded(e=!this.expanded){this.expanded=e,queueMicrotask(()=>{this.dispatchEvent(new CustomEvent("gl-walkthrough-step-expand-toggled",{detail:{expanded:e},bubbles:!0,composed:!0}))})}handleHeaderClick(){this.toggleExpanded()}handleHeaderKeydown(e){("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.toggleExpanded())}render(){return ef`
			<div
				part="header"
				class="header"
				role="button"
				tabindex="0"
				aria-expanded=${this.expanded}
				@click=${this.handleHeaderClick}
				@keydown=${this.handleHeaderKeydown}
			>
				<code-icon class="status-icon" icon=${this.completed?"pass-filled":"circle-large"}></code-icon>
				<span class="title"><slot name="title"></slot></span>
				<code-icon class="icon" icon="chevron-right"></code-icon>
			</div>
			<div class="content">
				<slot></slot>
			</div>
		`}};rI.styles=[S`
			:host {
				display: block;
			}

			:host(:focus-within) {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.header {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: 0.6em;
				cursor: pointer;
				user-select: none;
			}

			.header:hover {
				opacity: 0.8;
			}

			.header:focus {
				outline: none;
			}

			.icon {
				flex: none;
				transition: transform 0.2s ease;
			}

			:host([expanded]) .icon {
				transform: rotate(90deg);
			}

			.title {
				display: block;
			}

			.status-icon {
				flex: none;
				color: var(--vscode-descriptionForeground);
			}

			:host([completed]) .status-icon {
				color: var(--vscode-textLink-foreground);
			}

			.content {
				display: none;
				flex-direction: column;
				gap: 1em;
			}

			:host([expanded]) .content {
				display: flex;
			}
		`],rR([eS({type:String})],rI.prototype,"stepId",2),rR([eS({type:Boolean,reflect:!0})],rI.prototype,"completed",2),rR([eS({type:Boolean,reflect:!0})],rI.prototype,"expanded",2),rR([eP(".header")],rI.prototype,"header",2),rI=rR([e$("gl-walkthrough-step")],rI);let rO=class extends lit_element_i{constructor(){super(...arguments),this.onStepExpandToggled=e=>{let t=e.composedPath().find(e=>e.matches?.("gl-walkthrough-step"));null!=t&&(t.expanded?(this.steps.forEach(e=>{e!==t&&(e.expanded=!1)}),this.expandedStepId=t.stepId):this.expandedStepId=void 0)}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("gl-walkthrough-step-expand-toggled",this.onStepExpandToggled)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("gl-walkthrough-step-expand-toggled",this.onStepExpandToggled)}updated(e){super.updated(e),e.has("expandedStepId")&&this.syncStepsToExpandedStepId()}syncStepsToExpandedStepId(){this.steps.forEach(e=>{e.expanded=null!=e.stepId&&e.stepId===this.expandedStepId})}getDefaultStepToExpand(){return this.steps.find(e=>!e.completed)??this.steps[0]}handleSlotChange(){if(null!=this.expandedStepId)this.syncStepsToExpandedStepId();else{let e=this.steps.find(e=>e.expanded);if(null!=e)this.expandedStepId=e.stepId;else{let e=this.getDefaultStepToExpand();e?.stepId!=null&&(this.expandedStepId=e.stepId)}}}async resetToDefaultAndFocus(){let e=this.getDefaultStepToExpand();e?.stepId!=null&&(this.expandedStepId=e.stepId,await this.updateComplete,await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),e.focus())}render(){return ef`<slot @slotchange=${this.handleSlotChange}></slot>`}};rR([(p={selector:"gl-walkthrough-step"},(e,t)=>{let{slot:i,selector:o}=p??{},r="slot"+(i?`[name=${i}]`:":not([name])");return eE(e,t,{get(){let e=this.renderRoot?.querySelector(r),t=e?.assignedElements(p)??[];return void 0===o?t:t.filter(e=>e.matches(o))}})})],rO.prototype,"steps",2),rR([eS({type:String,reflect:!0,attribute:"expanded-step-id"})],rO.prototype,"expandedStepId",2),rO=rR([e$("gl-walkthrough")],rO);let rM=class extends lit_element_i{constructor(){super(...arguments),this.doneCount=0,this.allCount=0}get progressPercent(){return 0===this.allCount?0:this.doneCount/this.allCount*100}updated(){this._fillEl&&(this._fillEl.style.width=`${this.progressPercent}%`)}render(){return ef`
			<div class="progress">
				<div class="progress-bar">
					<div class="progress-bar__fill"></div>
				</div>
				<p>${this.doneCount}/${this.allCount} steps complete</p>
			</div>
		`}};rM.styles=[S`
			:host {
				display: block;
			}

			.progress {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 0.5em;
				padding: 0 2em;
			}

			.progress-bar {
				width: 100%;
				height: 4px;
				background: var(--card-background);
				border-radius: 2px;
				overflow: hidden;
			}

			.progress-bar__fill {
				height: 100%;
				background: linear-gradient(to right, #7900c9, #196fff);
				border-radius: 2px;
				transition: width 0.3s ease;
			}

			p {
				margin: 0;
				color: var(--vscode-descriptionForeground);
			}
		`],rR([eS({type:Number})],rM.prototype,"doneCount",2),rR([eS({type:Number})],rM.prototype,"allCount",2),rR([eP(".progress-bar__fill")],rM.prototype,"_fillEl",2),rM=rR([e$("gl-walkthrough-progress")],rM);var rT=Object.defineProperty,rz=Object.getOwnPropertyDescriptor,rD=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rz(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rT(t,i,s),s};let rN=[{id:"get-started-community",walkthroughKey:"gettingStarted",title:"Welcome to GitLens",body:ef`
			<p>
				The GitLens Community edition lets you track code changes and see who made them with inline blame
				annotations, hovers, and more—completely free.
			</p>
			<p>
				With <strong>GitLens Pro</strong> (Free 14-Day Trial), you’ll get full access to advanced visualization,
				collaboration, and built-in AI:
			</p>
			<ul>
				<li><strong>Commit Graph:</strong> visualize every branch and commit relationship</li>
				<li>
					<strong>Visual File History:</strong> see how a file has evolved with a graph of what changed and
					when
				</li>
				<li><strong>Launchpad & Worktrees:</strong> manage PRs and branches in one hub</li>
				<li><strong>GitKraken AI:</strong> writes commits, PRs & changelogs for you.</li>
			</ul>
			<div class="card-part--centered">
				<gl-button class="start-trial-button" href="command:gitlens.welcome.plus.signUp"
					>Get Started with GitLens Pro</gl-button
				>
			</div>
			<p>or <a href="command:gitlens.welcome.plus.login">sign in</a></p>
		`,condition:e=>!e.plusState||e.plusState<iv.Trial},{id:"welcome-in-trial",walkthroughKey:"gettingStarted",title:"Welcome to GitLens Pro",body:ef`
			<p>Thanks for starting your <strong>GitLens Pro</strong> trial.</p>
			<p>
				Complete this walkthrough to experience enhanced PR review tools, deeper code history visualizations,
				and streamlined collaboration to help boost your productivity.
			</p>
			<a href="#continue-walkthrough">Continue the Walkthrough</a>
			<p>
				Once your trial ends, you'll return to <strong>GitLens Community</strong> — where you can still leverage
				features like in-editor blame annotations, hovers, CodeLens, and more.
			</p>
			<div class="card-part--centered">
				<gl-button class="start-trial-button" href="command:gitlens.welcome.plus.upgrade"
					>Upgrade to GitLens Pro</gl-button
				>
			</div>
		`,condition:e=>e.plusState===iv.Trial},{id:"welcome-in-trial-expired",walkthroughKey:"gettingStarted",title:"Get the most out of GitLens",body:ef`
			<p>Thanks for installing GitLens and trying out GitLens Pro.</p>
			<p>
				You're now on the <strong>GitLens Community</strong> edition. Track code changes and see who made them
				with features like in-editor blame annotations, hovers, CodeLens, and more—completely free.
			</p>
			<p>
				Learn more about the
				<a href="command:gitlens.welcome.openCommunityVsPro">difference between GitLens Community vs. Pro</a>.
			</p>
			<p><strong>Unlock more powerful tools with GitLens Pro</strong></p>
			<div class="card-part--centered">
				<gl-button class="start-trial-button" href="command:gitlens.welcome.plus.upgrade"
					>Upgrade to GitLens Pro</gl-button
				>
			</div>
			<p>
				With GitLens Pro, you can accelerate PR reviews, visualize code history in-depth, and enhance
				collaboration across your team. It's the perfect upgrade to streamline your VS Code workflow.
			</p>
		`,condition:e=>e.plusState===iv.TrialExpired},{id:"welcome-in-trial-expired-eligible",walkthroughKey:"gettingStarted",title:"Get the most out of GitLens",body:ef`
			<p>Thanks for installing GitLens and trying out GitLens Pro.</p>
			<p>
				You're using <strong>GitLens Community</strong> edition. Track code changes and see who made them with
				features like in-editor blame annotations, hovers, CodeLens, and more—completely free.
			</p>
			<p><strong>Unlock more powerful tools — Try GitLens Pro again</strong> free for another 14 days.</p>
			<div class="card-part--centered">
				<gl-button class="start-trial-button" href="command:gitlens.welcome.plus.reactivate"
					>Reactivate GitLens Pro Trial</gl-button
				>
			</div>
			<p>
				With GitLens Pro, you can accelerate PR reviews, visualize code history in-depth, and enhance
				collaboration across your team. It's the perfect upgrade to streamline your VS Code workflow.
			</p>
		`,condition:e=>e.plusState===iv.TrialReactivationEligible},{id:"welcome-paid",walkthroughKey:"gettingStarted",title:"Discover the Benefits of GitLens Pro",body:ef`
			<p>
				As a GitLens Pro user, you have access to powerful tools that accelerate PR reviews, provide deeper code
				history visualizations, and streamline collaboration across your team.
			</p>
			<div class="card-part--centered">
				<gl-button href="#continue-walkthrough">Continue the Walkthrough</gl-button>
			</div>
			<p class="card-part--tip">
				<em>Tip:</em> To get the most out of your GitLens Pro experience, complete the walkthrough and visit our
				Help Center for in-depth guides.
			</p>
			<a href="command:gitlens.welcome.openHelpCenter">Learn more in the Help Center</a>
		`,condition:e=>e.plusState===iv.Paid},{id:"home-view",walkthroughKey:"homeView",title:"Streamline Workflow with the Home View",body:ef`
			<p>
				Streamline your workflow — effortlessly track, manage, and collaborate on your branches and pull
				requests, all in one intuitive hub.
			</p>
			<div class="card-part--centered">
				<gl-button href="command:gitlens.welcome.showHomeView">Open Home View</gl-button>
			</div>
		`},{id:"visualize-code-history",walkthroughKey:"visualizeCodeHistory",title:"Commit Graph: See Your Code's Story",body:ef`
			<p>
				Navigate complex repositories with a searchable, color-coded commit timeline. Instantly understand
				branch relationships, authorship patterns, and commit sequences.
			</p>
			<p>
				Select multiple commits to batch operations like cherry-picking or generate AI changelogs with a single
				command.
			</p>
			<div class="card-part--centered">
				<gl-button href="command:gitlens.welcome.showGraph">Discover your Commit Graph</gl-button>
			</div>
		`},{id:"ai-features",walkthroughKey:"aiFeatures",title:"Commit smarter, not harder",body:ef`
			<p>
				Let AI handle the heavy lifting - from turning your changes into clear, logical commits to getting
				context on others' work. GitLens’s AI features make reviews efficient and keep your history clean.
			</p>
			<ul>
				<li>
					<strong>Auto-Compose Commits:</strong> instantly generate a sequence of commits with descriptive
					summaries in an interactive editor
				</li>
				<li>
					<strong>Explain Commits and Branches:</strong> understand changes without wasting time diving into
					the diffs
				</li>
				<li><strong>Create PR Titles & Descriptions:</strong> save reviewers 10+ minutes per review</li>
			</ul>
			<p>
				Stay in control. Review and edit AI suggestions before finalizing, and
				<a href="command:gitlens.ai.switchProvider">configure your preferred AI provider</a>
				and model to fit your needs.
			</p>
			<div class="card-part--centered">
				<gl-button href="command:gitlens.welcome.showComposer">Compose Commits with AI</gl-button>
			</div>
		`},{id:"git-blame",walkthroughKey:"gitBlame",title:"Learn the why behind every code Line",body:ef`
			<p>See who changed a line, when and why — without leaving your editor.</p>
			<p>Hover over blame annotations to:</p>
			<ul>
				<li>View previous file revisions</li>
				<li>Open related PRs</li>
				<li>Jump to commits in the Graph</li>
				<li>Compare with previous versions</li>
			</ul>
			<div class="card-part--centered">
				<gl-button href="command:gitlens.showSettingsPage!current-line">Configure Inline Blame</gl-button>
			</div>
		`},{id:"accelerate-pr-reviews",walkthroughKey:"prReviews",title:"Manage all your work in one place",body:ef`
			<p>Keep everything at your fingertips with Launchpad & Worktrees.</p>
			<ul>
				<li><strong>Launchpad:</strong> view and manage all your PRs and branches from one hub</li>
				<li><strong>Worktrees:</strong> code, test, and review on multiple branches in parallel</li>
				<li>
					<strong>Integrations:</strong> connect PRs and issues from GitHub, GitLab, Jira, Azure DevOps & more
				</li>
			</ul>
			<p>Stay in flow, ship faster, and never lose track of what matters.</p>
			<div class="card-part--centered">
				<gl-button href="command:gitlens.welcome.showLaunchpad">Open Launchpad</gl-button>
			</div>
		`},{id:"mcp-bundled",walkthroughKey:"mcpFeatures",title:"GitKraken MCP",body:ef`
			<p>
				GitKraken MCP is active in your AI chat, leveraging Git and your integrations to provide context and
				perform actions.
			</p>
			<p><a href="${eW.helpCenterMCP}">Learn more in the Help Center</a></p>
		`,condition:e=>!1===e.mcpNeedsInstall&&!e.mcpShowCleanupNotice},{id:"mcp-bundled-cleanup",walkthroughKey:"mcpFeatures",title:"GitKraken MCP",body:ef`
			<p>
				GitKraken MCP is active in your AI chat, leveraging Git and your integrations to provide context and
				perform actions.
			</p>
			<p>
				<strong>Note:</strong> You may have a duplicate entry in your Cursor <code>mcp.json</code> from a
				previous install. Remove <code>mcpServers.GitKraken</code> to clean it up.
			</p>
			<p><a href="${eW.helpCenterMCP}">Learn more in the Help Center</a></p>
		`,condition:e=>!1===e.mcpNeedsInstall&&e.mcpShowCleanupNotice},{id:"mcp-install",walkthroughKey:"mcpFeatures",title:"Install GitKraken MCP for GitLens",body:ef`
			<p>
				Leverage Git and your integrations (issues, PRs, etc) to provide context and perform actions in AI chat.
			</p>
			<div class="card-part--centered">
				<gl-button href="${(u={source:"welcome"},`command:gitlens.ai.mcp.install?${encodeURIComponent(JSON.stringify(u))}`)}"
					>Install GitKraken MCP</gl-button
				>
			</div>
			<p><a href="${eW.helpCenterMCP}">Learn more</a></p>
		`,condition:e=>!0===e.mcpNeedsInstall}],rU=class extends lit_element_i{constructor(){super(...arguments),this.closeable=!1,this.isLightTheme=!1,this.handleWalkthroughFocusCommand=()=>this.walkthrough?.resetToDefaultAndFocus(),this.handleClick=e=>{let t=e.composedPath()[0],i=t.closest?.('a[href="#continue-walkthrough"]'),o=e.target.closest?.('gl-button[href="#continue-walkthrough"]');(null!=i||null!=o)&&(e.preventDefault(),e.stopPropagation(),this.walkthrough?.resetToDefaultAndFocus())}}connectedCallback(){super.connectedCallback?.(),this._telemetry.sendEvent({name:"welcome/action",data:{name:"shown"},source:{source:"welcome"}}),window.addEventListener("gl-walkthrough-focus-command",this.handleWalkthroughFocusCommand),this.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("gl-walkthrough-focus-command",this.handleWalkthroughFocusCommand),this.removeEventListener("click",this.handleClick)}render(){return this._state?ef`
			<div part="page" class="welcome scrollable">
				<div class="section header">
					<h1><gitlens-logo-circle></gitlens-logo-circle><span>Get Started with GitLens</span></h1>
					<p>
						Supercharge Git and unlock untapped knowledge within your repo to better understand, write, and
						review code.
					</p>
				</div>
				<gl-walkthrough-progress
					class="section"
					.doneCount=${this._state.walkthroughProgress?.doneCount??0}
					.allCount=${this._state.walkthroughProgress?.allCount??0}
				></gl-walkthrough-progress>
				<gl-walkthrough class="section">
					${rN.filter(e=>!e.condition||e.condition(this._state)).map(e=>ef`
								<gl-walkthrough-step
									class="card"
									stepId=${e.id}
									.completed=${null!=e.walkthroughKey&&this._state.walkthroughProgress?.state[e.walkthroughKey]===!0}
								>
									<h1 slot="title">${e.title}</h1>
									${e.body}
								</gl-walkthrough-step>
							`)}
				</gl-walkthrough>
				<div class="section section--centered">
					<p>
						You also have access to the
						<a href="https://gitkraken.dev/tools" target="_blank">GitKraken DevEx platform</a>, unleashing
						powerful Git visualization & productivity capabilities everywhere you work: IDE, desktop,
						browser, and terminal.
					</p>
				</div>
			</div>
		`:em}};rU.styles=[ic,iS],rD([eS({type:Boolean})],rU.prototype,"closeable",2),rD([eS({type:String})],rU.prototype,"webroot",2),rD([eS({type:Boolean})],rU.prototype,"isLightTheme",2),rD([eI({context:"welcome-state",subscribe:!0}),eL()],rU.prototype,"_state",2),rD([eI({context:"ipc"})],rU.prototype,"_ipc",2),rD([eI({context:"telemetry"})],rU.prototype,"_telemetry",2),rD([eP("gl-walkthrough")],rU.prototype,"walkthrough",2),rU=rD([e$("gl-welcome-page")],rU);var rj=Object.defineProperty,rF=Object.getOwnPropertyDescriptor,rB=(e,t,i,o)=>{for(var r,s=o>1?void 0:o?rF(t,i):t,a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o?r(t,i,s):r(s))||s);return o&&s&&rj(t,i,s),s};let rH=class extends GlAppHost{constructor(){super(...arguments),this.isLightTheme=!1}createStateProvider(e,t,i){return new WelcomeStateProvider(this,e,t,i)}onThemeUpdated(e){this.isLightTheme=e.isLightTheme}render(){return ef`
			<div class="welcome scrollable">
				<gl-welcome-page .webroot=${this.webroot} .isLightTheme=${this.isLightTheme}></gl-welcome-page>
			</div>
		`}};rH.styles=[ic,im],rB([eS({type:String})],rH.prototype,"webroot",2),rB([eL()],rH.prototype,"isLightTheme",2),rH=rB([e$("gl-welcome-app")],rH);export{rH as GlWelcomeApp};