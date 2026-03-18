let e,t,i,r,o,s,a;var c,h,p,g,f,m,b,v,_,w,x={602(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},5090(e,t,i){i.d(t,{FlowLayout:()=>FlowLayout,flow:()=>o}),i.r(t);let SizeCache=class SizeCache{constructor(e){this._map=new Map,this._roundAverageSize=!1,this.totalSize=0,e?.roundAverageSize===!0&&(this._roundAverageSize=!0)}set(e,t){let i=this._map.get(e)||0;this._map.set(e,t),this.totalSize+=t-i}get averageSize(){if(this._map.size>0){let e=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(e):e}return 0}getSize(e){return this._map.get(e)}clear(){this._map.clear(),this.totalSize=0}};function r(e){return"horizontal"===e?"width":"height"}let BaseLayout=class BaseLayout{_getDefaultConfig(){return{direction:"vertical"}}constructor(e,t){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=e,Promise.resolve().then(()=>this.config=t||this._getDefaultConfig())}set config(e){Object.assign(this,Object.assign({},this._getDefaultConfig(),e))}get config(){return{direction:this.direction}}get items(){return this._items}set items(e){this._setItems(e)}_setItems(e){e!==this._items&&(this._items=e,this._scheduleReflow())}get direction(){return this._direction}set direction(e){(e="horizontal"===e?e:"vertical")!==this._direction&&(this._direction=e,this._sizeDim="horizontal"===e?"width":"height",this._secondarySizeDim="horizontal"===e?"height":"width",this._positionDim="horizontal"===e?"left":"top",this._secondaryPositionDim="horizontal"===e?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(e){let{_viewDim1:t,_viewDim2:i}=this;Object.assign(this._viewportSize,e),i!==this._viewDim2?this._scheduleLayoutUpdate():t!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(e){Object.assign(this._latestCoords,e);let t=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],Math.abs(t-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(e=!1){(e||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(e){this._pin=e,this._triggerReflow()}get pin(){if(null!==this._pin){let{index:e,block:t}=this._pin;return{index:Math.max(0,Math.min(e,this.items.length-1)),block:t}}return null}_clampScrollPosition(e){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(e,this.totalScrollSize[r(this.direction)]-this._viewDim1))}unpin(){null!==this._pin&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then(()=>this.reflowIfNeeded())}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(null!==this.pin){let e=this._scrollPosition,{index:t,block:i}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:t,block:i||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=e-this._scrollPosition}}_calculateScrollIntoViewPosition(e){let{block:t}=e,i=Math.min(this.items.length,Math.max(0,e.index)),r=this._getItemPosition(i)[this._positionDim],o=r;if("start"!==t){let e=this._getItemSize(i)[this._sizeDim];if("center"===t)o=r-.5*this._viewDim1+.5*e;else{let i=r-this._viewDim1+e;if("end"===t)o=i;else{let e=this._scrollPosition;o=Math.abs(e-r)<Math.abs(e-i)?r:i}}}return o+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(o)}getScrollIntoViewCoordinates(e){return{[this._positionDim]:this._calculateScrollIntoViewPosition(e)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){let e=new Map;if(-1!==this._first&&-1!==this._last)for(let t=this._first;t<=this._last;t++)e.set(t,this._getItemPosition(t));let t={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:e};this._scrollError&&(t.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(t)}get _num(){return -1===this._first||-1===this._last?0:this._last-this._first+1}_checkThresholds(){if(0===this._viewDim1&&this._num>0||null!==this._pin)this._scheduleReflow();else{let e=Math.max(0,this._scrollPosition-this._overhang),t=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>e||this._physicalMax<t?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(e){if(-1===this._first||-1===this._last)return;let t=this._first;for(;t<this._last&&Math.round(this._getItemPosition(t)[this._positionDim]+this._getItemSize(t)[this._sizeDim])<=Math.round(this._scrollPosition);)t++;let i=this._last;for(;i>this._first&&Math.round(this._getItemPosition(i)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)i--;(t!==this._firstVisible||i!==this._lastVisible)&&(this._firstVisible=t,this._lastVisible=i,e&&e.emit&&this._sendVisibilityChangedMessage())}};let o=e=>Object.assign({type:FlowLayout},e);function s(e){return"horizontal"===e?"marginLeft":"marginTop"}let MetricsCache=class MetricsCache{constructor(){this._childSizeCache=new SizeCache,this._marginSizeCache=new SizeCache,this._metricsCache=new Map}update(e,t){let i=new Set;for(let o of(Object.keys(e).forEach(o=>{let s=Number(o);this._metricsCache.set(s,e[s]),this._childSizeCache.set(s,e[s][r(t)]),i.add(s),i.add(s+1)}),i)){let e=this._metricsCache.get(o)?.[s(t)]||0,i=this._metricsCache.get(o-1)?.["horizontal"===t?"marginRight":"marginBottom"]||0;this._marginSizeCache.set(o,function(e,t){let i=[e,t].sort();return i[1]<=0?Math.min(...i):i[0]>=0?Math.max(...i):i[0]+i[1]}(e,i))}}get averageChildSize(){return this._childSizeCache.averageSize}get totalChildSize(){return this._childSizeCache.totalSize}get averageMarginSize(){return this._marginSizeCache.averageSize}get totalMarginSize(){return this._marginSizeCache.totalSize}getLeadingMarginValue(e,t){return this._metricsCache.get(e)?.[s(t)]||0}getChildSize(e){return this._childSizeCache.getSize(e)}getMarginSize(e){return this._marginSizeCache.getSize(e)}clear(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}};let FlowLayout=class FlowLayout extends BaseLayout{constructor(){super(...arguments),this._itemSize={width:100,height:100},this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metricsCache=new MetricsCache,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(e){this._metricsCache.update(e,this.direction),this._scheduleReflow()}_getPhysicalItem(e){return this._newPhysicalItems.get(e)??this._physicalItems.get(e)}_getSize(e){return this._getPhysicalItem(e)&&this._metricsCache.getChildSize(e)}_getAverageSize(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}_estimatePosition(e){let t=this._metricsCache;if(-1===this._first||-1===this._last)return t.averageMarginSize+e*(t.averageMarginSize+this._getAverageSize());if(e<this._first){let i=this._first-e;return this._getPhysicalItem(this._first).pos-(t.getMarginSize(this._first-1)||t.averageMarginSize)-(i*t.averageChildSize+(i-1)*t.averageMarginSize)}{let i=e-this._last;return this._getPhysicalItem(this._last).pos+(t.getChildSize(this._last)||t.averageChildSize)+(t.getMarginSize(this._last)||t.averageMarginSize)+i*(t.averageChildSize+t.averageMarginSize)}}_getPosition(e){let t=this._getPhysicalItem(e),{averageMarginSize:i}=this._metricsCache;return 0===e?this._metricsCache.getMarginSize(0)??i:t?t.pos:this._estimatePosition(e)}_calculateAnchor(e,t){return e<=0?0:t>this._scrollSize-this._viewDim1?this.items.length-1:Math.max(0,Math.min(this.items.length-1,Math.floor((e+t)/2/this._delta)))}_getAnchor(e,t){if(0===this._physicalItems.size||this._first<0||this._last<0)return this._calculateAnchor(e,t);let i=this._getPhysicalItem(this._first),r=this._getPhysicalItem(this._last),o=i.pos;if(r.pos+this._metricsCache.getChildSize(this._last)<e||o>t)return this._calculateAnchor(e,t);let s=this._firstVisible-1,a=-1/0;for(;a<e;)a=this._getPhysicalItem(++s).pos+this._metricsCache.getChildSize(s);return s}_getActiveItems(){0===this._viewDim1||0===this.items.length?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;let e=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=e,this._stable=!0}_getItems(){let e,t,i=this._newPhysicalItems;if(this._stable=!0,null!==this.pin){let{index:e}=this.pin;this._anchorIdx=e,this._anchorPos=this._getPosition(e)}if(e=this._scrollPosition-this._overhang,(t=this._scrollPosition+this._viewDim1+this._overhang)<0||e>this._scrollSize)return void this._clearItems();(null===this._anchorIdx||null===this._anchorPos)&&(this._anchorIdx=this._getAnchor(e,t),this._anchorPos=this._getPosition(this._anchorIdx));let r=this._getSize(this._anchorIdx);void 0===r&&(this._stable=!1,r=this._getAverageSize());let o=this._metricsCache.getMarginSize(this._anchorIdx)??this._metricsCache.averageMarginSize,s=this._metricsCache.getMarginSize(this._anchorIdx+1)??this._metricsCache.averageMarginSize;0===this._anchorIdx&&(this._anchorPos=o),this._anchorIdx===this.items.length-1&&(this._anchorPos=this._scrollSize-s-r);let a=0;for(this._anchorPos+r+s<e&&(a=e-(this._anchorPos+r+s)),this._anchorPos-o>t&&(a=t-(this._anchorPos-o)),a&&(this._scrollPosition-=a,e-=a,t-=a,this._scrollError+=a),i.set(this._anchorIdx,{pos:this._anchorPos,size:r}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-o,this._physicalMax=this._anchorPos+r+s;this._physicalMin>e&&this._first>0;){let e=this._getSize(--this._first);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._first);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize),this._physicalMin-=e;let r=this._physicalMin;if(i.set(this._first,{pos:r,size:e}),this._physicalMin-=t,!1===this._stable&&!1===this._estimate)break}for(;this._physicalMax<t&&this._last<this.items.length-1;){let e=this._getSize(++this._last);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._last);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize);let r=this._physicalMax;if(i.set(this._last,{pos:r,size:e}),this._physicalMax+=e+t,!this._stable&&!this._estimate)break}let c=this._calculateError();c&&(this._physicalMin-=c,this._physicalMax-=c,this._anchorPos-=c,this._scrollPosition-=c,i.forEach(e=>e.pos-=c),this._scrollError+=c),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=i)}_calculateError(){return 0===this._first?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this.items.length-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this.items.length-1-this._last)*this._delta:0}_reflow(){let{_first:e,_last:t}=this;super._reflow(),(-1===this._first&&-1==this._last||this._first===e&&this._last===t)&&this._resetReflowState()}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_updateScrollSize(){let{averageMarginSize:e}=this._metricsCache;this._scrollSize=Math.max(1,this.items.length*(e+this._getAverageSize())+e)}get _delta(){let{averageMarginSize:e}=this._metricsCache;return this._getAverageSize()+e}_getItemPosition(e){return{[this._positionDim]:this._getPosition(e),[this._secondaryPositionDim]:0,["horizontal"===this.direction?"xOffset":"yOffset"]:-(this._metricsCache.getLeadingMarginValue(e,this.direction)??this._metricsCache.averageMarginSize)}}_getItemSize(e){return{[this._sizeDim]:this._getSize(e)||this._getAverageSize(),[this._secondarySizeDim]:this._itemSize[this._secondarySizeDim]}}_viewDim2Changed(){this._metricsCache.clear(),this._scheduleReflow()}}},6047(e,t,i){i(602)}},C={};function $(e){var t=C[e];if(void 0!==t)return t.exports;var i=C[e]={exports:{}};return x[e](i,i.exports,$),i.exports}$.d=(e,t)=>{for(var i in t)$.o(t,i)&&!$.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},$.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),$.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},Object.defineProperty($,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});var S=$(5090);let E=globalThis,A=E.ShadowRoot&&(void 0===E.ShadyCSS||E.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol(),D=new WeakMap;let n=class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(A&&void 0===e){let i=void 0!==t&&1===t.length;i&&(e=D.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&D.set(t,e))}return e}toString(){return this.cssText}};let O=e=>new n("string"==typeof e?e:e+"",void 0,P),T=(e,...t)=>new n(1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]),e,P),M=A?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return O(t)})(e):e,{is:B,defineProperty:q,getOwnPropertyDescriptor:F,getOwnPropertyNames:N,getOwnPropertySymbols:V,getPrototypeOf:j}=Object,U=globalThis,W=U.trustedTypes,G=W?W.emptyScript:"",K=U.reactiveElementPolyfillSupport,Q={toAttribute(e,t){switch(t){case Boolean:e=e?G:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},X=(e,t)=>!B(e,t),J={attribute:!0,type:String,converter:Q,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),U.litPropertyMetadata??=new WeakMap;let y=class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=J){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&q(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:o}=F(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let s=r?.call(this);o?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??J}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=j(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...N(e),...V(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,i]of t)this.elementProperties.set(e,i)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let i of new Set(e.flat(1/0).reverse()))t.unshift(M(i));else void 0!==e&&t.push(M(e));return t}static _$Eu(e,t){let i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(A)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let i of t){let t=document.createElement("style"),r=E.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){let o=(void 0!==i.converter?.toAttribute?i.converter:Q).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){let e=i.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Q;this._$Em=r;let s=o.fromAttribute(t,e.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(e,t,i,r=!1,o){if(void 0!==e){let s=this.constructor;if(!1===r&&(o=this[e]),!(((i??=s.getPropertyOptions(e)).hasChanged??X)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:o},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==o||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,i]of e){let{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y.elementProperties=new Map,y.finalized=new Map,K?.({ReactiveElement:y}),(U.reactiveElementVersions??=[]).push("2.1.2");let Y=globalThis,ee=e=>e,et=Y.trustedTypes,ei=et?et.createPolicy("lit-html",{createHTML:e=>e}):void 0,er="$lit$",eo=`lit$${Math.random().toFixed(9).slice(2)}$`,es="?"+eo,en=`<${es}>`,ea=document,el=()=>ea.createComment(""),ec=e=>null===e||"object"!=typeof e&&"function"!=typeof e,eh=Array.isArray,ed=e=>eh(e)||"function"==typeof e?.[Symbol.iterator],ep=`[ 	
\f\r]`,eu=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eg=/-->/g,ef=/>/g,em=RegExp(`>|${ep}(?:([^\\s"'>=/]+)(${ep}*=${ep}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eb=/'/g,ev=/"/g,ey=/^(?:script|style|textarea|title)$/i,e_=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),ew=e_(1),ex=e_(2),ek=e_(3),eC=Symbol.for("lit-noChange"),e$=Symbol.for("lit-nothing"),eS=new WeakMap,eE=ea.createTreeWalker(ea,129);function eA(e,t){if(!eh(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ei?ei.createHTML(t):t}let ez=(e,t)=>{let i=e.length-1,r=[],o,s=2===t?"<svg>":3===t?"<math>":"",a=eu;for(let t=0;t<i;t++){let i=e[t],c,h,p=-1,g=0;for(;g<i.length&&(a.lastIndex=g,null!==(h=a.exec(i)));)g=a.lastIndex,a===eu?"!--"===h[1]?a=eg:void 0!==h[1]?a=ef:void 0!==h[2]?(ey.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=em):void 0!==h[3]&&(a=em):a===em?">"===h[0]?(a=o??eu,p=-1):void 0===h[1]?p=-2:(p=a.lastIndex-h[2].length,c=h[1],a=void 0===h[3]?em:'"'===h[3]?ev:eb):a===ev||a===eb?a=em:a===eg||a===ef?a=eu:(a=em,o=void 0);let f=a===em&&e[t+1].startsWith("/>")?" ":"";s+=a===eu?i+en:p>=0?(r.push(c),i.slice(0,p)+er+i.slice(p)+eo+f):i+eo+(-2===p?t:f)}return[eA(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};let lit_html_S=class lit_html_S{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,s=0,a=e.length-1,c=this.parts,[h,p]=ez(e,t);if(this.el=lit_html_S.createElement(h,i),eE.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=eE.nextNode())&&c.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(let e of r.getAttributeNames())if(e.endsWith(er)){let t=p[s++],i=r.getAttribute(e).split(eo),a=/([.?@])?(.*)/.exec(t);c.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?I:"?"===a[1]?L:"@"===a[1]?z:H}),r.removeAttribute(e)}else e.startsWith(eo)&&(c.push({type:6,index:o}),r.removeAttribute(e));if(ey.test(r.tagName)){let e=r.textContent.split(eo),t=e.length-1;if(t>0){r.textContent=et?et.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],el()),eE.nextNode(),c.push({type:2,index:++o});r.append(e[t],el())}}}else if(8===r.nodeType)if(r.data===es)c.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(eo,e+1));)c.push({type:7,index:o}),e+=eo.length-1}o++}}static createElement(e,t){let i=ea.createElement("template");return i.innerHTML=e,i}};function eI(e,t,i=e,r){if(t===eC)return t;let o=void 0!==r?i._$Co?.[r]:i._$Cl,s=ec(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(e))._$AT(e,i,r),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(t=eI(e,o._$AS(e,t.values),o,r)),t}let R=class R{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??ea).importNode(t,!0);eE.currentNode=r;let o=eE.nextNode(),s=0,a=0,c=i[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new k(o,o.nextSibling,this,e):1===c.type?t=new c.ctor(o,c.name,c.strings,this,e):6===c.type&&(t=new Z(o,this,e)),this._$AV.push(t),c=i[++a]}s!==c?.index&&(o=eE.nextNode(),s++)}return eE.currentNode=ea,r}p(e){let t=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};let k=class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=e$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){ec(e=eI(this,e,t))?e===e$||null==e||""===e?(this._$AH!==e$&&this._$AR(),this._$AH=e$):e!==this._$AH&&e!==eC&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ed(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==e$&&ec(this._$AH)?this._$AA.nextSibling.data=e:this.T(ea.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=lit_html_S.createElement(eA(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new R(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=eS.get(e.strings);return void 0===t&&eS.set(e.strings,t=new lit_html_S(e)),t}k(e){eh(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let o of e)r===t.length?t.push(i=new k(this.O(el()),this.O(el()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ee(e).nextSibling;ee(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let H=class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=e$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=e$}_$AI(e,t=this,i,r){let o=this.strings,s=!1;if(void 0===o)(s=!ec(e=eI(this,e,t,0))||e!==this._$AH&&e!==eC)&&(this._$AH=e);else{let r,a,c=e;for(e=o[0],r=0;r<o.length-1;r++)(a=eI(this,c[i+r],t,r))===eC&&(a=this._$AH[r]),s||=!ec(a)||a!==this._$AH[r],a===e$?e=e$:e!==e$&&(e+=(a??"")+o[r+1]),this._$AH[r]=a}s&&!r&&this.j(e)}j(e){e===e$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let I=class I extends H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===e$?void 0:e}};let L=class L extends H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==e$)}};let z=class z extends H{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=eI(this,e,t,0)??e$)===eC)return;let i=this._$AH,r=e===e$&&i!==e$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==e$&&(i===e$||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let Z=class Z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){eI(this,e)}};let eP=Y.litHtmlPolyfillSupport;eP?.(lit_html_S,k),(Y.litHtmlVersions??=[]).push("3.3.2");let eR=globalThis;let lit_element_i=class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{let r=i?.renderBefore??t,o=r._$litPart$;if(void 0===o){let e=i?.renderBefore??null;r._$litPart$=o=new k(t.insertBefore(el(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return eC}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,eR.litElementHydrateSupport?.({LitElement:lit_element_i});let eL=eR.litElementPolyfillSupport;eL?.({LitElement:lit_element_i}),(eR.litElementVersions??=[]).push("4.2.2");let eD=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},eO={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:X};function eT(e){return(t,i)=>{let r;return"object"==typeof i?((e=eO,t,i)=>{let{kind:r,metadata:o}=i,s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===r){let{name:r}=i;return{set(i){let o=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,o,e,!0,i)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){let{name:r}=i;return function(i){let o=this[r];t.call(this,i),this.requestUpdate(r,o,e,!0,i)}}throw Error("Unsupported decorator location: "+r)})(e,t,i):(r=t.hasOwnProperty(i),t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0)}}function eM(e){return eT({...e,state:!0,attribute:!1})}let eB=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i);function eq(e,t){return(i,r,o)=>{let s=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:t,set:a}="object"==typeof r?i:o??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return eB(i,r,{get(){let e=t.call(this);return void 0===e&&(null!==(e=s(this))||this.hasUpdated)&&a.call(this,e),e}})}return eB(i,r,{get(){return s(this)}})}}let eF=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let eN={},eV=eF(class extends directive_i{constructor(){super(...arguments),this.ot=eN}render(e,t){return t()}update(e,[t,i]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return eC}else if(this.ot===t)return eC;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,i)}});let FilterMapIterator=class FilterMapIterator{constructor(e,t){this.predicateMapper=t,this.done=!1,this.iterator=e[Symbol.iterator]()}next(){if(this.done)return{done:!0,value:void 0};for(;;){let e=this.iterator.next();if(e.done)return this.done=!0,{done:!0,value:void 0};let t=this.predicateMapper(e.value);if(null!=t)return{done:!1,value:t}}}[Symbol.iterator](){return this}};function ej(e){let t=.001*performance.now(),i=Math.floor(t),r=Math.floor(t%1*1e9);return void 0!==e&&(i-=e[0],(r-=e[1])<0&&(i--,r+=1e9)),[i,r]}$(6047);var eU=((c=eU||{})[c.Hash=35]="Hash",c[c.Slash=47]="Slash",c[c.Digit0=48]="Digit0",c[c.Digit1=49]="Digit1",c[c.Digit2=50]="Digit2",c[c.Digit3=51]="Digit3",c[c.Digit4=52]="Digit4",c[c.Digit5=53]="Digit5",c[c.Digit6=54]="Digit6",c[c.Digit7=55]="Digit7",c[c.Digit8=56]="Digit8",c[c.Digit9=57]="Digit9",c[c.Backslash=92]="Backslash",c[c.A=65]="A",c[c.B=66]="B",c[c.C=67]="C",c[c.D=68]="D",c[c.E=69]="E",c[c.F=70]="F",c[c.Z=90]="Z",c[c.a=97]="a",c[c.b=98]="b",c[c.c=99]="c",c[c.d=100]="d",c[c.e=101]="e",c[c.f=102]="f",c[c.z=122]="z",c),eH=((h=eH||{}).AngleBracketLeftHeavy="❰",h.AngleBracketRightHeavy="❱",h.ArrowBack="↩",h.ArrowDown="↓",h.ArrowDownUp="⇵",h.ArrowDropRight="⤷",h.ArrowHeadRight="➤",h.ArrowLeft="←",h.ArrowLeftDouble="⇐",h.ArrowLeftRight="↔",h.ArrowLeftRightDouble="⇔",h.ArrowLeftRightDoubleStrike="⇎",h.ArrowLeftRightLong="⟷",h.ArrowRight="→",h.ArrowRightDouble="⇒",h.ArrowRightHollow="⇨",h.ArrowUp="↑",h.ArrowUpDown="⇅",h.ArrowUpRight="↗",h.ArrowsHalfLeftRight="⇋",h.ArrowsHalfRightLeft="⇌",h.ArrowsLeftRight="⇆",h.ArrowsRightLeft="⇄",h.Asterisk="∗",h.Bullseye="◎",h.Check="✔",h.Dash="—",h.Dot="•",h.Ellipsis="…",h.EnDash="–",h.Envelope="✉",h.EqualsTriple="≡",h.Flag="⚑",h.FlagHollow="⚐",h.MiddleEllipsis="⋯",h.MuchLessThan="≪",h.MuchGreaterThan="≫",h.Pencil="✎",h.Space=" ",h.SpaceThin=" ",h.SpaceThinnest=" ",h.SquareWithBottomShadow="❏",h.SquareWithTopShadow="❐",h.Warning="⚠",h.ZeroWidthSpace="​",h);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var eW=((p=eW||{}).File="file",p.Git="git",p.GitHub="github",p.GitLens="gitlens",p.GitLensAIMarkdown="gitlens-ai-markdown",p.PRs="pr",p.Remote="vscode-remote",p.Vsls="vsls",p.VslsScc="vsls-scc",p.Virtual="vscode-vfs",p);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let eG="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",eK=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${eG}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${eG}`,graph:`https://gitkraken.com/solutions/commit-graph?${eG}`,launchpad:`https://gitkraken.com/solutions/launchpad?${eG}`,platform:`https://gitkraken.com/devex?${eG}`,pricing:`https://gitkraken.com/gitlens/pricing?${eG}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${eG}`,security:`https://help.gitkraken.com/gitlens/security?${eG}`,workspaces:`https://gitkraken.com/solutions/workspaces?${eG}`,cli:`https://gitkraken.com/cli?${eG}`,browserExtension:`https://gitkraken.com/browser-extension?${eG}`,desktop:`https://gitkraken.com/git-client?${eG}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${eG}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${eG}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${eG}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${eG}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${eG}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eG}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${eG}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eG}#improve-workflows-with-integrations`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${eG}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${eG}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${eG}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${eG}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eG}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eG}`}),eZ=new Map;function eQ(t,i){null==t&&(t="decimal");let r=`${i??""}:${t}`,o=eZ.get(r);if(null==o){let s={localeMatcher:"best fit",style:t};o=new Intl.NumberFormat(null==i?e:"system"===i?void 0:[i],s),eZ.set(r,o)}return o.format}function eX(e){let[t,i]=ej(e);return 1e3*t+Math.floor(i/1e6)}function eJ(e,i,r){let o;if(null==r)return t??=eQ(),`${t(i)} ${e}${1===i?"":"s"}`;let s=1===i?e:r.plural??`${e}s`;return r.only?s:(0===i?o=r.zero??i:!1===r.format?o=i:null!=r.format?o=r.format(i):(t??=eQ(),o=t(i)),`${o}${r.infix??" "}${s}`)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);let IpcCall=class IpcCall{constructor(e,t,i=!1){this.scope=e,this.reset=i,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,i){super(e,t,i),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let eY="rebase";function e0(e){return"commit"===e.type}let e1=new IpcCommand(eY,"abort"),e2=new IpcCommand(eY,"continue"),e5=new IpcCommand(eY,"search"),e3=new IpcCommand(eY,"skip"),e8=new IpcCommand(eY,"start"),e6=new IpcCommand(eY,"switch"),e7=new IpcCommand(eY,"reorder"),e4=new IpcCommand(eY,"change/entry"),e9=new IpcCommand(eY,"change/entries"),te=new IpcCommand(eY,"move/entry"),tt=new IpcCommand(eY,"move/entries"),ti=new IpcCommand(eY,"shift/entries"),tr=new IpcCommand(eY,"selection/update"),to=new IpcCommand(eY,"revealRef"),ts=new IpcCommand(eY,"avatars/get"),tn=new IpcCommand(eY,"commits/get"),ta=new IpcCommand(eY,"recompose/open"),tl=new IpcRequest(eY,"conflicts/get"),tc=new IpcNotification(eY,"didChange"),th=new IpcNotification(eY,"avatars/didChange"),td=new IpcNotification(eY,"commits/didChange"),tp=new IpcNotification(eY,"subscription/didChange");let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,i,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=i,this.subscribe=r??!1}};let context_consumer_s=class context_consumer_s{constructor(e,t,i,r){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,t)),this.unsubscribe=t},this.host=e,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=i,this.subscribe=r??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.host,this.t,this.subscribe))}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let context_provider_i=class context_provider_i extends value_notifier_s{constructor(e,t,i){super(void 0!==t.context?t.initialValue:i),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:i}]of this.subscriptions)t.has(e)||(t.add(e),i.dispatchEvent(new context_request_event_s(this.context,i,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function tu({context:e}){return(t,i)=>{let r=new WeakMap;if("object"==typeof i)return{get(){return t.get.call(this)},set(e){return r.get(this).setValue(e),t.set.call(this,e)},init(t){return r.set(this,new context_provider_i(this,{context:e,initialValue:t})),t}};{let o;t.constructor.addInitializer(t=>{r.set(t,new context_provider_i(t,{context:e}))});let s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){let e=new WeakMap;o={get(){return e.get(this)},set(t){r.get(this).setValue(t),e.set(this,t)},configurable:!0,enumerable:!0}}else{let e=s.set;o={...s,set(t){r.get(this).setValue(t),e?.call(this,t)}}}return void Object.defineProperty(t,i,o)}}}function tg({context:e,subscribe:t}){return(i,r)=>{"object"==typeof r?r.addInitializer(function(){new context_consumer_s(this,{context:e,callback:e=>{i.set.call(this,e)},subscribe:t})}):i.constructor.addInitializer(i=>{new context_consumer_s(i,{context:e,callback:e=>{i[r]=e},subscribe:t})})}}function tf(e,t,i){let r,o,s,a,c,h,p,g,f,m,b=0;null!=i&&({edges:h,maxWait:p,signal:g,aggregator:f}=i);let v="leading"===(h??="trailing")||"both"===h,_="trailing"===h||"both"===h;function w(){if(null!=r){b=Date.now();let t=r,i=m;return m=void 0,r=void 0,s=e.apply(i,t)}}function x(){null!=a&&(clearTimeout(a),a=void 0)}function C(){null!=c&&(clearTimeout(c),c=void 0)}function $(){x(),C(),m=void 0,r=void 0,o=void 0,b=0}function S(...e){if(g?.aborted)return;let i=Date.now();null!=f&&null!=r?r=f(r,e):(m=this,r=e);let h=null==a&&null==c;o=i,x();let C=Date.now();if(o=C,a=setTimeout(()=>{var e;let i,r;a=void 0,i=(e=Date.now())-(o??0),r=e-b,(null==o||i>=t||i<0||null!=p&&r>=p)&&_&&w(),$()},t),null!=p&&!c){let e=p-(C-b);e>0?c=setTimeout(()=>{c=void 0,_&&null!=r&&w(),b=Date.now()},e):(_&&null!=r&&w(),$())}return v&&h?w():s}return S.cancel=$,S.flush=function(){return x(),C(),w()},S.pending=function(){return null!=a||null!=c},g?.addEventListener("abort",$,{once:!0}),S}let tm=new IpcRequest("core","webview/ready"),tb=new IpcCommand("core","webview/focus/changed");new IpcCommand("core","command/execute");let tv=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let ty=new IpcCommand("core","telemetry/sendEvent"),t_=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let tw=new IpcCommand("core","webview/focus/didChange"),tx=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let tk=new WeakMap;function tC(e,t){return function(i,r,o){let s=tk.get(i.constructor);null==s&&tk.set(i.constructor,s=[]),s.push({method:o.value,keys:Array.isArray(e)?e:[e],afterFirstUpdate:t?.afterFirstUpdate??!1})}}let GlElement=class GlElement extends lit_element_i{emit(e,t,i){let r=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...i,detail:t});return this.dispatchEvent(r),r}update(e){let t=tk.get(this.constructor);if(null!=t)for(let{keys:i,method:r,afterFirstUpdate:o}of t){if(o&&!this.hasUpdated)continue;let t=i.filter(t=>e.has(t));t.length&&r.call(this,t)}super.update(e)}};var t$=((g=t$||{})[g.Off=0]="Off",g[g.Error=1]="Error",g[g.Warn=2]="Warn",g[g.Info=3]="Info",g[g.Debug=4]="Debug",g);let tS=["accessToken","password","token"],tE=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,i=!1){if(null!=e.sanitizeKeys)for(let t of tS)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(tS);this.provider=e,this._isDebugging=i,this.logLevel=t}enabled(e){return this.level>=tA(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=tA(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let i;this.level<4&&!this.isDebugging||("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...i){let r;if(!(this.level<1)||this.isDebugging){if(null==(r=null==t||"string"==typeof t?t:`${t.prefix} ${i.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(r=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,i)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let i;this.level<3&&!this.isDebugging||("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let i;this.level<2&&!this.isDebugging||("string"==typeof e?i=e:(i=t.shift(),null!=e&&(i=`${e.prefix} ${i??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${i??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let i=this.provider.toLoggable?.(e);if(null!=i)return i;try{return JSON.stringify(e,(e,i)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(i=t(e,i)),this.provider?.sanitizer!=null&&(i=this.provider.sanitizer(e,i)),i))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let i=t.map(e=>this.toLoggable(e)).join(", ");return 0!==i.length?` \u2014 ${i}`:""}};function tA(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let tz=new WeakMap,tI={enabled:e=>tE.enabled(e)||tE.isDebugging,log:(e,t,i,...r)=>{switch(e){case"error":tE.error(void 0,t,i,...r);break;case"warn":tE.warn(t,i,...r);break;case"info":tE.log(t,i,...r);break;default:tE.debug(t,i,...r)}}},tP=0x40000000-1;function tR(){let e=0;return{get current(){return e},next:function(){return e===tP&&(e=0),++e},reset:function(){e=0}}}let tL=tR(),tD=new Map;function tO(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function tT(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let i=t?tL.current:void 0,r=tL.next();return{scopeId:r,prevScopeId:i,prefix:`${tO(r,i)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=tT(e,void 0),tE.configure({name:e,createChannel:function(e){return{name:e,appendLine:tE.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?tE.log(this.scope,e,...t):tE.log(e,t.shift(),...t)}};let tM="home";new IpcRequest(tM,"launchpad/summary"),new IpcRequest(tM,"overview/active"),new IpcRequest(tM,"overview/inactive"),new IpcRequest(tM,"overviewFilter"),new IpcCommand(tM,"overview/repository/change"),new IpcNotification(tM,"overview/repository/didChange"),new IpcCommand(tM,"previewEnabled/toggle"),new IpcCommand(tM,"section/collapse"),new IpcCommand(tM,"walkthrough/dismiss"),new IpcNotification(tM,"ai/allAccess/didChange"),new IpcNotification(tM,"mcp/didChange"),new IpcCommand(tM,"ai/allAccess/dismiss"),new IpcCommand(tM,"overview/filter/set"),new IpcCommand(tM,"openInGraph"),new IpcNotification(tM,"repositories/didCompleteDiscovering"),new IpcNotification(tM,"previewEnabled/didChange"),new IpcNotification(tM,"repository/wip/didChange"),new IpcNotification(tM,"repositories/didChange"),new IpcNotification(tM,"walkthroughProgress/didChange"),new IpcNotification(tM,"integrations/didChange"),new IpcNotification(tM,"launchpad/didChange");let tB=new IpcNotification(tM,"subscription/didChange");new IpcNotification(tM,"org/settings/didChange"),new IpcNotification(tM,"home/ownerFilter/didChange"),new IpcNotification(tM,"account/didFocus");let tq="graph";new IpcCommand(tq,"chooseRepository"),new IpcCommand(tq,"dblclick"),new IpcCommand(tq,"avatars/get"),new IpcCommand(tq,"refs/metadata/get"),new IpcCommand(tq,"rows/get"),new IpcCommand(tq,"pullRequest/openDetails"),new IpcCommand(tq,"row/action"),new IpcCommand(tq,"search/openInView"),new IpcCommand(tq,"search/cancel"),new IpcCommand(tq,"columns/update"),new IpcCommand(tq,"refs/update/visibility"),new IpcCommand(tq,"filters/update/excludeTypes"),new IpcCommand(tq,"configuration/update"),new IpcCommand(tq,"search/update/mode"),new IpcCommand(tq,"filters/update/includedRefs"),new IpcCommand(tq,"selection/update"),new IpcRequest(tq,"jumpToHead"),new IpcRequest(tq,"chooseRef"),new IpcRequest(tq,"chooseComparison"),new IpcRequest(tq,"chooseAuthor"),new IpcRequest(tq,"chooseFile"),new IpcRequest(tq,"rows/ensure"),new IpcRequest(tq,"search/history/get"),new IpcRequest(tq,"search/history/store"),new IpcRequest(tq,"search/history/delete"),new IpcRequest(tq,"counts"),new IpcRequest(tq,"row/hover/get"),new IpcRequest(tq,"search"),new IpcNotification(tq,"repositories/integration/didChange"),new IpcNotification(tq,"didChange",!0),new IpcNotification(tq,"configuration/didChange");let tF=new IpcNotification(tq,"subscription/didChange");new IpcNotification(tq,"org/settings/didChange"),new IpcNotification(tq,"avatars/didChange"),new IpcNotification(tq,"mcp/didChange"),new IpcNotification(tq,"branchState/didChange"),new IpcNotification(tq,"refs/didChangeMetadata"),new IpcNotification(tq,"columns/didChange"),new IpcNotification(tq,"scrollMarkers/didChange"),new IpcNotification(tq,"refs/didChangeVisibility"),new IpcNotification(tq,"rows/didChange"),new IpcNotification(tq,"rows/stats/didChange"),new IpcNotification(tq,"selection/didChange"),new IpcNotification(tq,"workingTree/didChange"),new IpcNotification(tq,"didSearch"),new IpcNotification(tq,"didFetch"),new IpcNotification(tq,"featurePreview/didStart");let tN="timeline";new IpcRequest(tN,"ref/choose"),new IpcRequest(tN,"path/choose"),new IpcCommand(tN,"point/open"),new IpcCommand(tN,"config/update"),new IpcCommand(tN,"scope/update");let tV=new IpcNotification(tN,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(tB.is(e)||tF.is(e)||tV.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let i=`${e}|${t}`,r=this._promos.get(i);return null==r&&(r=this.ipc.sendRequest(tv,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(i,r)),await r}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(ty,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};var tj=Uint8Array,tU=Uint16Array,tH=Int32Array,tW=new tj([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tG=new tj([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tK=new tj([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tZ=function(e,t){for(var i=new tU(31),r=0;r<31;++r)i[r]=t+=1<<e[r-1];for(var o=new tH(i[30]),r=1;r<30;++r)for(var s=i[r];s<i[r+1];++s)o[s]=s-i[r]<<5|r;return{b:i,r:o}},tQ=tZ(tW,2),tX=tQ.b,tJ=tQ.r;tX[28]=258,tJ[258]=28;var tY=tZ(tG,0),t0=tY.b;tY.r;for(var t1=new tU(32768),t2=0;t2<32768;++t2){var t5=(43690&t2)>>1|(21845&t2)<<1;t5=(61680&(t5=(52428&t5)>>2|(13107&t5)<<2))>>4|(3855&t5)<<4,t1[t2]=((65280&t5)>>8|(255&t5)<<8)>>1}for(var t3=function(e,t,i){for(var r,o=e.length,s=0,a=new tU(t);s<o;++s)e[s]&&++a[e[s]-1];var c=new tU(t);for(s=1;s<t;++s)c[s]=c[s-1]+a[s-1]<<1;if(i){r=new tU(1<<t);var h=15-t;for(s=0;s<o;++s)if(e[s])for(var p=s<<4|e[s],g=t-e[s],f=c[e[s]-1]++<<g,m=f|(1<<g)-1;f<=m;++f)r[t1[f]>>h]=p}else for(s=0,r=new tU(o);s<o;++s)e[s]&&(r[s]=t1[c[e[s]-1]++]>>15-e[s]);return r},t8=new tj(288),t2=0;t2<144;++t2)t8[t2]=8;for(var t2=144;t2<256;++t2)t8[t2]=9;for(var t2=256;t2<280;++t2)t8[t2]=7;for(var t2=280;t2<288;++t2)t8[t2]=8;for(var t6=new tj(32),t2=0;t2<32;++t2)t6[t2]=5;var t7=t3(t8,9,1),t4=t3(t6,5,1),t9=function(e){for(var t=e[0],i=1;i<e.length;++i)e[i]>t&&(t=e[i]);return t},ie=function(e,t,i){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(7&t)&i},it=function(e,t){var i=t/8|0;return(e[i]|e[i+1]<<8|e[i+2]<<16)>>(7&t)},ii=function(e,t,i){return(null==t||t<0)&&(t=0),(null==i||i>e.length)&&(i=e.length),new tj(e.subarray(t,i))},ir=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],io=function(e,t,i){var r=Error(t||ir[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,io),!i)throw r;return r},is=function(e,t,i,r){var o=e.length,s=r?r.length:0;if(!o||t.f&&!t.l)return i||new tj(0);var a=!i,c=a||2!=t.i,h=t.i;a&&(i=new tj(3*o));var p=function(e){var t=i.length;if(e>t){var r=new tj(Math.max(2*t,e));r.set(i),i=r}},g=t.f||0,f=t.p||0,m=t.b||0,b=t.l,v=t.d,_=t.m,w=t.n,x=8*o;do{if(!b){g=ie(e,f,1);var C=ie(e,f+1,3);if(f+=3,C)if(1==C)b=t7,v=t4,_=9,w=5;else if(2==C){var $=ie(e,f,31)+257,S=ie(e,f+10,15)+4,E=$+ie(e,f+5,31)+1;f+=14;for(var A=new tj(E),P=new tj(19),D=0;D<S;++D)P[tK[D]]=ie(e,f+3*D,7);f+=3*S;for(var O=t9(P),T=(1<<O)-1,M=t3(P,O,1),D=0;D<E;){var B=M[ie(e,f,T)];f+=15&B;var q=B>>4;if(q<16)A[D++]=q;else{var F=0,N=0;for(16==q?(N=3+ie(e,f,3),f+=2,F=A[D-1]):17==q?(N=3+ie(e,f,7),f+=3):18==q&&(N=11+ie(e,f,127),f+=7);N--;)A[D++]=F}}var V=A.subarray(0,$),j=A.subarray($);_=t9(V),w=t9(j),b=t3(V,_,1),v=t3(j,w,1)}else io(1);else{var q=((f+7)/8|0)+4,U=e[q-4]|e[q-3]<<8,W=q+U;if(W>o){h&&io(0);break}c&&p(m+U),i.set(e.subarray(q,W),m),t.b=m+=U,t.p=f=8*W,t.f=g;continue}if(f>x){h&&io(0);break}}c&&p(m+131072);for(var G=(1<<_)-1,K=(1<<w)-1,Q=f;;Q=f){var F=b[it(e,f)&G],X=F>>4;if((f+=15&F)>x){h&&io(0);break}if(F||io(2),X<256)i[m++]=X;else if(256==X){Q=f,b=null;break}else{var J=X-254;if(X>264){var D=X-257,Y=tW[D];J=ie(e,f,(1<<Y)-1)+tX[D],f+=Y}var ee=v[it(e,f)&K],et=ee>>4;ee||io(3),f+=15&ee;var j=t0[et];if(et>3){var Y=tG[et];j+=it(e,f)&(1<<Y)-1,f+=Y}if(f>x){h&&io(0);break}c&&p(m+131072);var ei=m+J;if(m<j){var er=s-j,eo=Math.min(j,ei);for(er+m<0&&io(3);m<eo;++m)i[m]=r[er+m]}for(;m<ei;++m)i[m]=i[m-j]}}t.l=b,t.p=Q,t.b=m,t.f=g,b&&(g=1,t.m=_,t.d=v,t.n=w)}while(!g)return m!=i.length&&a?ii(i,0,m):i.subarray(0,m)},ia=new tj(0),il="u">typeof TextDecoder&&new TextDecoder;try{il.decode(ia,{stream:!0})}catch{}var ic=function(e){for(var t="",i=0;;){var r=e[i++],o=(r>127)+(r>223)+(r>239);if(i+o>e.length)return{s:t,r:ii(e,i-1)};o?3==o?t+=String.fromCharCode(55296|(r=((15&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536)>>10,56320|1023&r):1&o?t+=String.fromCharCode((31&r)<<6|63&e[i++]):t+=String.fromCharCode((15&r)<<12|(63&e[i++])<<6|63&e[i++]):t+=String.fromCharCode(r)}};function ih(e,t){if(t){for(var i="",r=0;r<e.length;r+=16384)i+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return i}if(il)return il.decode(e);var o=ic(e),s=o.s,i=o.r;return i.length&&io(8),s}"function"==typeof queueMicrotask&&queueMicrotask;let id=/\(([\s\S]*)\)/,ip=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,iu=/\s?=.*$/;function ig(e){return null!=e&&(e instanceof Promise||"function"==typeof e?.then)}function im(e,t=!1){let i,r,o,s,a,c=0,h=!1,p=!1,g=!0;null!=e&&({args:i,if:r,enter:o,exit:s,prefix:a,logThreshold:c=0,scoped:h=!0,singleLine:p=!1,timed:g=!0}=e),c>0&&(p=!0,g=!0),g&&(h=!0);let f=tE.isDebugging,m=t?tE.debug:tE.log,b=f?"debug":"info";return(e,t,v)=>{let _,w;if("function"==typeof v.value?(_=v.value,w="value"):"function"==typeof v.get&&(_=v.get,w="get"),null==_||null==w)throw Error("Not supported");let x=!1!==i?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),i=(t=(t=t.replace(ip,"")||t).slice(0,t.indexOf("{"))).indexOf("("),r=t.indexOf(")");i=i>=0?i+1:0,r=r>0?r:t.indexOf("="),t=t.slice(i,r),t=`(${t})`;let o=id.exec(t);return null!=o?o[1].split(",").map(e=>e.trim().replace(iu,"")):[]}(_):[];v[w]=function(...e){var v;let w,C;if(!f&&!tE.enabled(b)||null!=r&&!r.apply(this,e))return _.apply(this,e);let $=tL.current,S=tL.next(),E=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let i=t?.name??"",r=i.indexOf("_");-1!==r&&(i=i.substring(r+1));let o=tz.get(t);return o?.(e,i)??i}(this):void 0,A=E?h?`${tO(S,$)} ${E}.${t}`:`${E}.${t}`:t;null!=a&&(A=a({id:S,instance:this,instanceName:E??"",name:t,prefix:A},...e)),h&&(v={scopeId:S,prevScopeId:$,prefix:A},v={prevScopeId:tL.current,...v},tD.set(S,v),w=v);let P=null!=o?o(...e):"";if(!1===i||0===e.length)C="",p||m.call(tE,`${A}${P}`);else{let t,r,o,s;C="";let a=-1;for(s of e){if(r=x[++a],null!=(t=i?.[a])){if("boolean"==typeof t)continue;if(C.length>0&&(C+=", "),"string"==typeof t){C+=t;continue}o=String(t(s))}else C.length>0&&(C+=", "),o=tE.toLoggable(s);C+=r?`${r}=${o}`:o}p||m.call(tE,C?`${A}${P}(${C})`:`${A}${P}`)}if(p||g||null!=s){let t,i=g?ej():void 0,r=e=>{let t=void 0!==i?` [${eX(i)}ms]`:"";p?tE.error(e,C?`${A}${P}(${C})`:`${A}${P}`,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`):tE.error(e,A,w?.exitDetails?`failed${w.exitDetails}${t}`:`failed${t}`),h&&tD.delete(S)};try{t=_.apply(this,e)}catch(e){throw r(e),e}let o=e=>{let t,r,o,a;if(null!=i?(t=eX(i))>500?(r=tE.warn,o=` [*${t}ms] (slow)`):(r=m,o=` [${t}ms]`):(o="",r=m),null!=s)if("function"==typeof s)try{a=s(e)}catch(e){a=`@log.exit error: ${e}`}else!0===s&&(a=`returned ${tE.toLoggable(e)}`);else w?.exitFailed?(a=w.exitFailed,r=(e,...t)=>tE.error(null,e,...t)):a="completed";p?(0===c||t>c)&&r.call(tE,C?`${A}${P}(${C}) ${a}${w?.exitDetails||""}${o}`:`${A}${P} ${a}${w?.exitDetails||""}${o}`):r.call(tE,C?`${A}(${C}) ${a}${w?.exitDetails||""}${o}`:`${A} ${a}${w?.exitDetails||""}${o}`),h&&tD.delete(S)};return null!=t&&ig(t)?t.then(o,r):o(t),t}return _.apply(this,e)}}}(()=>{let e;var t,i,r={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var i,r="",o=0,s=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)i=e.charCodeAt(c);else{if(47===i)break;i=47}if(47===i){if(s===c-1||1===a);else if(s!==c-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var h=r.lastIndexOf("/");if(h!==r.length-1){-1===h?(r="",o=0):o=(r=r.slice(0,h)).length-1-r.lastIndexOf("/"),s=c,a=0;continue}}else if(2===r.length||1===r.length){r="",o=0,s=c,a=0;continue}}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(s+1,c):r=e.slice(s+1,c),o=c-s-1;s=c,a=0}else 46===i&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r,o="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?e=arguments[a]:(void 0===r&&(r=process.cwd()),e=r),t(e),0!==e.length&&(o=e+"/"+o,s=47===e.charCodeAt(0));return o=i(o,!s),s?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,i=0;i<arguments.length;++i){var o=arguments[i];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":r.normalize(e)},relative:function(e,i){if(t(e),t(i),e===i||(e=r.resolve(e))===(i=r.resolve(i)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var s=e.length,a=s-o,c=1;c<i.length&&47===i.charCodeAt(c);++c);for(var h=i.length-c,p=a<h?a:h,g=-1,f=0;f<=p;++f){if(f===p){if(h>p){if(47===i.charCodeAt(c+f))return i.slice(c+f+1);if(0===f)return i.slice(c+f)}else a>p&&(47===e.charCodeAt(o+f)?g=f:0===f&&(g=0));break}var m=e.charCodeAt(o+f);if(m!==i.charCodeAt(c+f))break;47===m&&(g=f)}var b="";for(f=o+g+1;f<=s;++f)f!==s&&47!==e.charCodeAt(f)||(0===b.length?b+="..":b+="/..");return b.length>0?b+i.slice(c+g):(c+=g,47===i.charCodeAt(c)&&++c,i.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var i=e.charCodeAt(0),r=47===i,o=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(i=e.charCodeAt(a))){if(!s){o=a;break}}else s=!1;return -1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,i){if(void 0!==i&&"string"!=typeof i)throw TypeError('"ext" argument must be a string');t(e);var r,o=0,s=-1,a=!0;if(void 0!==i&&i.length>0&&i.length<=e.length){if(i.length===e.length&&i===e)return"";var c=i.length-1,h=-1;for(r=e.length-1;r>=0;--r){var p=e.charCodeAt(r);if(47===p){if(!a){o=r+1;break}}else -1===h&&(a=!1,h=r+1),c>=0&&(p===i.charCodeAt(c)?-1==--c&&(s=r):(c=-1,s=h))}return o===s?s=h:-1===s&&(s=e.length),e.slice(o,s)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){o=r+1;break}}else -1===s&&(a=!1,s=r+1);return -1===s?"":e.slice(o,s)},extname:function(e){t(e);for(var i=-1,r=0,o=-1,s=!0,a=0,c=e.length-1;c>=0;--c){var h=e.charCodeAt(c);if(47!==h)-1===o&&(s=!1,o=c+1),46===h?-1===i?i=c:1!==a&&(a=1):-1!==i&&(a=-1);else if(!s){r=c+1;break}}return -1===i||-1===o||0===a||1===a&&i===o-1&&i===r+1?"":e.slice(i,o)},format:function(e){var t,i;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+i:t+"/"+i:i},parse:function(e){t(e);var i={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return i;var r,o=e.charCodeAt(0),s=47===o;s?(i.root="/",r=1):r=0;for(var a=-1,c=0,h=-1,p=!0,g=e.length-1,f=0;g>=r;--g)if(47!==(o=e.charCodeAt(g)))-1===h&&(p=!1,h=g+1),46===o?-1===a?a=g:1!==f&&(f=1):-1!==a&&(f=-1);else if(!p){c=g+1;break}return -1===a||-1===h||0===f||1===f&&a===h-1&&a===c+1?-1!==h&&(i.base=i.name=0===c&&s?e.slice(1,h):e.slice(c,h)):(0===c&&s?(i.name=e.slice(1,a),i.base=e.slice(1,h)):(i.name=e.slice(c,a),i.base=e.slice(c,h)),i.ext=e.slice(a,h)),c>0?i.dir=e.slice(0,c-1):s&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(s.r(a),s.d(a,{URI:()=>l,Utils:()=>i}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let c=/^\w[\w\d+.-]*$/,h=/^\//,p=/^\/\//;function g(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!c.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!h.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(p.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,i,r,o,s=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||s?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,i||""),this.query=r||"",this.fragment=o||"",g(this,s))}get fsPath(){return x(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:i,path:r,query:o,fragment:s}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===i?i=this.authority:null===i&&(i=""),void 0===r?r=this.path:null===r&&(r=""),void 0===o?o=this.query:null===o&&(o=""),void 0===s?s=this.fragment:null===s&&(s=""),t===this.scheme&&i===this.authority&&r===this.path&&o===this.query&&s===this.fragment?this:new d(t,i,r,o,s)}static parse(e,t=!1){let i=f.exec(e);return i?new d(i[2]||"",S(i[4]||""),S(i[5]||""),S(i[7]||""),S(i[9]||""),t):new d("","","","","")}static file(t){let i="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(i=t.substring(2),t="/"):(i=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",i,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return g(t,!0),t}toString(e=!1){return C(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===m?e.fsPath:null,t}}return e}};let m=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=x(this,!1)),this._fsPath}toString(e=!1){return e?C(this,!0):(this._formatted||(this._formatted=C(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=m),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let v={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function _(e,t,i){let r,o=-1;for(let s=0;s<e.length;s++){let a=e.charCodeAt(s);if(a>=97&&a<=122||a>=65&&a<=90||a>=48&&a<=57||45===a||46===a||95===a||126===a||t&&47===a||i&&91===a||i&&93===a||i&&58===a)-1!==o&&(r+=encodeURIComponent(e.substring(o,s)),o=-1),void 0!==r&&(r+=e.charAt(s));else{void 0===r&&(r=e.substr(0,s));let t=v[a];void 0!==t?(-1!==o&&(r+=encodeURIComponent(e.substring(o,s)),o=-1),r+=t):-1===o&&(o=s)}}return -1!==o&&(r+=encodeURIComponent(e.substring(o))),void 0!==r?r:e}function w(e){let t;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);35===r||63===r?(void 0===t&&(t=e.substr(0,i)),t+=v[r]):void 0!==t&&(t+=e[i])}return void 0!==t?t:e}function x(t,i){let r;return r=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?i?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(r=r.replace(/\//g,"\\")),r}function C(e,t){let i=t?w:_,r="",{scheme:o,authority:s,path:a,query:c,fragment:h}=e;if(o&&(r+=o,r+=":"),(s||"file"===o)&&(r+="/",r+="/"),s){let e=s.indexOf("@");if(-1!==e){let t=s.substr(0,e);s=s.substr(e+1),-1===(e=t.lastIndexOf(":"))?r+=i(t,!1,!1):(r+=i(t.substr(0,e),!1,!1),r+=":",r+=i(t.substr(e+1),!1,!0)),r+="@"}-1===(e=(s=s.toLowerCase()).lastIndexOf(":"))?r+=i(s,!1,!0):(r+=i(s.substr(0,e),!1,!0),r+=s.substr(e))}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2)){let e=a.charCodeAt(1);e>=65&&e<=90&&(a=`/${String.fromCharCode(e+32)}:${a.substr(3)}`)}else if(a.length>=2&&58===a.charCodeAt(1)){let e=a.charCodeAt(0);e>=65&&e<=90&&(a=`${String.fromCharCode(e+32)}:${a.substr(2)}`)}r+=i(a,!0,!1)}return c&&(r+="?",r+=i(c,!1,!1)),h&&(r+="#",r+=t?h:_(h,!1,!1)),r}let $=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function S(e){return e.match($)?e.replace($,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var E=s(975);let A=E.posix||E;(t=i||(i={})).joinPath=function(e,...t){return e.with({path:A.join(e.path,...t)})},t.resolvePath=function(e,...t){let i=e.path,r=!1;"/"!==i[0]&&(i="/"+i,r=!0);let o=A.resolve(i,...t);return r&&"/"===o[0]&&!e.authority&&(o=o.substring(1)),e.with({path:o})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=A.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return A.basename(e.path)},t.extname=function(e){return A.extname(e.path)},b=a})();let{URI:ib,Utils:iv}=b;function iy(e,t){return JSON.parse(e,(e,i)=>(function(e,t,i){let r=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(t);if(null==r)return t;switch(r.__ipc){case"date":return new Date(r.value);case"promise":return i(r.value);case"uri":return ib.revive(r.value)}})(0,i,t))}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...i){let r;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:tT(e??"",!1),r="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??tI,this._time=ej(),null!=r){if(!this.logProvider.enabled(this.logLevel))return;i.length?this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`,...i):this.logProvider.log(this.logLevel,this.logScope,`${r.message??""}${r.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=ej(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=ej(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[i,r]=ej(this._time),o=1e3*i+Math.floor(r/1e6),s=e?.message??"";this.logProvider.log(o>250?"warn":this.logLevel,this.logScope,`${s?`${s} `:""}[${o}ms]${e?.suffix??""}`)}};function i_(e){return(e=e.toString().toLowerCase()).includes("ms")?parseFloat(e):e.includes("s")?1e3*parseFloat(e):parseFloat(e)}function iw(e,t){return new Promise(i=>{e.addEventListener(t,function r(o){o.target===e&&(e.removeEventListener(t,r),i())})})}(v||(v={})).on=function(e,t,i,r){let o=!1;if("string"==typeof e){let s=function(t){let r=t?.target?.closest(e);null!=r&&i(t,r)};return document.addEventListener(t,s,r??!0),{dispose:()=>{o||(o=!0,document.removeEventListener(t,s,r??!0))}}}let s=function(e){i(e,this)};return e.addEventListener(t,s,r??!1),{dispose:()=>{o||(o=!0,e.removeEventListener(t,s,r??!1))}}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,i)=>{null==this.listeners&&(this.listeners=new LinkedList);let r=this.listeners.push(null==t?e:[e,t]),o={dispose:()=>{o.dispose=Emitter._noop,this._disposed||r()}};return Array.isArray(i)&&i.push(o),o}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),i=t.next();!i.done;i=t.next())this._deliveryQueue.push([i.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let ix={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let i=new events_Node(e);if(this._first===events_Node.Undefined)this._first=i,this._last=i;else if(t){let e=this._last;this._last=i,i.prev=e,e.next=i}else{let e=this._first;this._first=i,i.next=e,e.prev=i}this._size+=1;let r=!1;return()=>{r||(r=!0,this._remove(i))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?ix:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var ik=Object.defineProperty,iC=Object.getOwnPropertyDescriptor,i$=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?iC(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&ik(t,i,s),s};let iS=tR();function iE(){return`webview:${iS.next()}`}let iA=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=i??=acquireVsCodeApi(),this._disposable=v.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){var t,i,r,o;let s=tD.get(tL.current),a=e.data,c=function(e,t,...i){return(t?.provider??tI).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...i):void 0}(tT(`(e=${a.id}|${a.method})`,s),{log:!1,logLevel:"debug"});if(a.compressed&&a.params instanceof Uint8Array){if("deflate"===a.compressed)try{a.params=ih((t=a.params,is(t,{i:2},void 0,void 0)))}catch(e){a.params=ih(a.params)}else a.params=ih(a.params);c?.restart({message:`\u2022 decompressed (${a.compressed}) serialized params`})}if("string"==typeof a.params?(a.params=iy(a.params,e=>this.getResponsePromise(e.method,e.id)),c?.stop({message:`\u2022 deserialized params`})):null==a.params?c?.stop({message:`\u2022 no params`}):c?.stop({message:`\u2022 invalid params`}),i=` \u2022 ipc (host -> webview) duration=${Date.now()-a.timestamp}ms`,null!=s&&(null!=s.exitDetails&&null!=i?s.exitDetails+=i:s.exitDetails=i),null!=a.completionId){let e=(r=a.method,o=a.completionId,`${r}|${o}`);this._pendingHandlers.get(e)?.(a);return}this._onReceiveMessage.fire(a)}deserializeIpcData(e){return iy(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let i=iE();this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let i=iE(),r=this.getResponsePromise(e.response.method,i);return this.postMessage({id:i,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:i}),r}getResponsePromise(e,t){return new Promise((i,r)=>{var o,s;let a,c=(o=e,s=t,`${o}|${s}`);function h(){clearTimeout(a),a=void 0,this._pendingHandlers.delete(c)}a=setTimeout(()=>{h.call(this),r(Error(`Timed out waiting for completion of ${c}`))},(tE.isDebugging?60:5)*6e4),this._pendingHandlers.set(c,e=>{if(h.call(this),e.method===t_.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>r(Error(t.reason))):queueMicrotask(()=>i(t.value))}else queueMicrotask(()=>i(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function iz(e,t){let i=Math.pow(10,t);return Math.round(e*i)/i}i$([im({args:{0:e=>`${e.data.id}|${e.data.method}`}},!0)],iA.prototype,"onMessageReceived",1),i$([im({args:{0:e=>e.method,1:!1}},!0)],iA.prototype,"sendCommand",1),i$([im({args:{0:e=>e.method,1:!1,2:!1}},!0)],iA.prototype,"sendRequest",1),i$([im({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],iA.prototype,"postMessage",1),iA=i$([(f=e=>`${e.appName}(HostIpc)`,e=>void tz.set(e,f))],iA);let RGBA=class RGBA{constructor(e,t,i,r=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,i)),this.a=iz(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,i,r){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=iz(Math.max(Math.min(1,t),0),3),this.l=iz(Math.max(Math.min(1,i),0),3),this.a=iz(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,r=e.b/255,o=e.a,s=Math.max(t,i,r),a=Math.min(t,i,r),c=0,h=0,p=(a+s)/2,g=s-a;if(g>0){switch(h=Math.min(p<=.5?g/(2*p):g/(2-2*p),1),s){case t:c=(i-r)/g+6*(i<r);break;case i:c=(r-t)/g+2;break;case r:c=(t-i)/g+4}c*=60,c=Math.round(c)}return new HSLA(c,h,p,o)}static _hue2rgb(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}static toRGBA(e){let t,i,r,o=e.h/360,{s,l:a,a:c}=e;if(0===s)t=i=r=a;else{let e=a<.5?a*(1+s):a+s-a*s,c=2*a-e;t=HSLA._hue2rgb(c,e,o+1/3),i=HSLA._hue2rgb(c,e,o),r=HSLA._hue2rgb(c,e,o-1/3)}return new RGBA(Math.round(255*t),Math.round(255*i),Math.round(255*r),c)}};let HSVA=class HSVA{constructor(e,t,i,r){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=iz(Math.max(Math.min(1,t),0),3),this.v=iz(Math.max(Math.min(1,i),0),3),this.a=iz(Math.max(Math.min(1,r),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,i=e.g/255,r=e.b/255,o=Math.max(t,i,r),s=o-Math.min(t,i,r);return new HSVA(Math.round(60*(0===s?0:o===t?((i-r)/s%6+6)%6:o===i?(r-t)/s+2:(t-i)/s+4)),0===o?0:s/o,o,e.a)}static toRGBA(e){let{h:t,s:i,v:r,a:o}=e,s=r*i,a=s*(1-Math.abs(t/60%2-1)),c=r-s,[h,p,g]=[0,0,0];return t<60?(h=s,p=a):t<120?(h=a,p=s):t<180?(p=s,g=a):t<240?(p=a,g=s):t<300?(h=a,g=s):t<=360&&(h=s,g=a),new RGBA(h=Math.round((h+c)*255),p=Math.round((p+c)*255),g=Math.round((g+c)*255),o)}};function iI(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(iI(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){return iz(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),i=e.getRelativeLuminance();return t>i?(t+.05)/(i+.05):(i+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:i,b:r,a:o}=this.rgba;return new Color(new RGBA(t,i,r,o*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,i=this.rgba.a,r=t.a,o=i+r*(1-i);return o<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*i/o+t.r*r*(1-i)/o,this.rgba.g*i/o+t.g*r*(1-i)/o,this.rgba.b*i/o+t.b*r*(1-i)/o,o))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:i,b:r,a:o}=this.rgba;return new Color(new RGBA(e.rgba.r-o*(e.rgba.r-t),e.rgba.g-o*(e.rgba.g-i),e.rgba.b-o*(e.rgba.b-r),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let i=1-e.rgba.a;return new Color(new RGBA(i*t.rgba.r+e.rgba.a*e.rgba.r,i*t.rgba.g+e.rgba.a*e.rgba.g,i*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${iP(e.rgba.r)}${iP(e.rgba.g)}${iP(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,i){if(e.isLighterThan(t))return e;i=i||.5;let r=e.getRelativeLuminance(),o=t.getRelativeLuminance();return i=i*(o-r)/o,e.lighten(i)}static getDarkerColor(e,t,i){if(e.isDarkerThan(t))return e;i=i||.5;let r=e.getRelativeLuminance(),o=t.getRelativeLuminance();return i=i*(r-o)/r,e.darken(i)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function iP(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let iR=new Emitter,iL=iR.event;function iD(e){let t=document.documentElement,i=window.getComputedStyle(t),r=document.body.classList,o=r.contains("vscode-light")||r.contains("vscode-high-contrast-light"),s=r.contains("vscode-high-contrast")||r.contains("vscode-high-contrast-light"),a=iI("--vscode-editor-background",i),c=iI("--vscode-editor-foreground",i);return c||(c=iI("--vscode-foreground",i)),{colors:{background:a,foreground:c},computedStyle:i,isLightTheme:o,isHighContrastTheme:s,isInitializing:null==e}}var iO=Object.defineProperty,iT=Object.getOwnPropertyDescriptor,iM=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?iT(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&iO(t,i,s),s};let GlAppHost=class GlAppHost extends GlElement{constructor(){super(...arguments),this.placement="editor",this.disposables=[],this.onFocusIn=e=>{let t=e.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==t)&&(this._focused=!0,this._inputFocused=t,this._sendWebviewFocusChangedCommandDebounced({focused:!0,inputFocused:t}))},this.onFocusOut=e=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,this._sendWebviewFocusChangedCommandDebounced({focused:!1,inputFocused:!1}))}}static{this.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0}}get state(){return this._stateProvider.state}connectedCallback(){super.connectedCallback?.(),this._logger=new LoggerContext(this.name),this._logger.log("connected"),this._ipc=new iA(this.name);let e=this.bootstrap;this.bootstrap=void 0,this._stateProvider=this.createStateProvider(e,this._ipc,this._logger);let{webviewId:t,webviewInstanceId:i}=this._stateProvider.state;this._webview={webviewId:t,webviewInstanceId:i,createCommandLink:(e,r)=>{var o;return e.endsWith(":")&&(e=`${e}${t.split(".").at(-1)}`),o=e,`command:${o}?${encodeURIComponent(JSON.stringify({webview:t,webviewInstance:i,...r}))}`}};let r=iD();if(null!=this.onThemeUpdated){let e;this.onThemeUpdated(r),this.disposables.push(((e=new MutationObserver(e=>{iR.fire(iD(e))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()})),this.disposables.push(iL(this.onThemeUpdated,this))}this.disposables.push(this._stateProvider,this._ipc.onReceiveMessage(e=>{switch(!0){case tw.is(e):this.onWebviewFocusChanged?.(e.params.focused),window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case tx.is(e):this.onWebviewVisibilityChanged?.(e.params.visible),window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"))}}),this._ipc,this._promos=new PromosContext(this._ipc),this._telemetry=new TelemetryContext(this._ipc)),this._sendWebviewFocusChangedCommandDebounced=tf(e=>{this._ipc.sendCommand(tb,e)},150),document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),document.addEventListener("focusin",this.onFocusIn),document.addEventListener("focusout",this.onFocusOut),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}disconnectedCallback(){super.disconnectedCallback?.(),this._logger.log("disconnected"),document.removeEventListener("focusin",this.onFocusIn),document.removeEventListener("focusout",this.onFocusOut),this.disposables.forEach(e=>e.dispose())}render(){return ew`<slot></slot>`}};iM([eT({type:String})],GlAppHost.prototype,"name",2),iM([eT({type:String})],GlAppHost.prototype,"placement",2),iM([tu({context:"ipc"})],GlAppHost.prototype,"_ipc",2),iM([tu({context:"logger"})],GlAppHost.prototype,"_logger",2),iM([tu({context:"promos"})],GlAppHost.prototype,"_promos",2),iM([tu({context:"telemetry"})],GlAppHost.prototype,"_telemetry",2),iM([tu({context:"webview"})],GlAppHost.prototype,"_webview",2),iM([eT({type:String,noAccessor:!0})],GlAppHost.prototype,"bootstrap",2);let iB=T`
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
		${iB}
	}
`;let iq=T`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,iF=T`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;T`
	:focus-visible {
		${iq}
	}
`;let iN=T`
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
`,T`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${iq}
	}
	a:hover {
		text-decoration: underline;
	}
`;let iV=T`
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
`;let ij=T`
	/* ==========================================================================
	   CSS Custom Properties (Theme Variables)
	   ========================================================================== */

	:host {
		/* Layout & Typography */
		--gk-avatar-size: 2.2rem;
		--font-family: var(--vscode-font-family);
		--font-size: var(--vscode-font-size);

		/* Colors */
		--color-background: var(--vscode-editor-background);
		--color-foreground: var(--vscode-editor-foreground, var(--vscode-foreground));
		--color-link-foreground: var(--vscode-textLink-foreground);
		--color-focus-border: var(--vscode-focusBorder);

		/* Background variants */
		--color-background--lighten-05: color-mix(in srgb, #fff 5%, var(--color-background));
		--color-background--darken-05: color-mix(in srgb, #000 5%, var(--color-background));
		--color-background--lighten-15: color-mix(in srgb, #fff 15%, var(--color-background));
		--color-background--darken-15: color-mix(in srgb, #000 15%, var(--color-background));
		--color-background--lighten-30: color-mix(in srgb, #fff 30%, var(--color-background));
		--color-background--darken-30: color-mix(in srgb, #000 30%, var(--color-background));
		--color-background--darken-50: color-mix(in srgb, #000 50%, var(--color-background));

		/* Foreground variants */
		--color-foreground--75: color-mix(in srgb, transparent 25%, var(--color-foreground));
		--color-foreground--65: color-mix(in srgb, transparent 35%, var(--color-foreground));
		--color-foreground--50: color-mix(in srgb, transparent 50%, var(--color-foreground));
		--color-foreground--35: color-mix(in srgb, transparent 65%, var(--color-foreground));
		--color-foreground--25: color-mix(in srgb, transparent 75%, var(--color-foreground));

		/* Highlight colors */
		--color-highlight: var(--vscode-button-background, var(--vscode-button-border));
		--color-highlight--50: color-mix(in srgb, transparent 50%, var(--color-highlight));
		--color-highlight--25: color-mix(in srgb, transparent 75%, var(--color-highlight));
		--color-highlight--10: color-mix(in srgb, transparent 90%, var(--color-highlight));

		--focus-color: var(--vscode-focusBorder);

		/* Host element styles */
		display: block;
		background-color: var(--color-background);
		color: var(--color-foreground);
		font-size: var(--font-size);
		line-height: 1.4;
		overflow: hidden;
		min-width: 0;
	}

	:focus,
	:focus-within {
		outline-color: var(--focus-color);
	}

	/* Avatar background (used by gl-avatar-list component) */
	:host-context(.vscode-dark),
	:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)) {
		--avatar-bg: var(--color-background--lighten-30);
	}
	:host-context(.vscode-light) {
		--avatar-bg: var(--color-background--darken-30);
	}
	:host-context(.vscode-high-contrast-light) {
		--avatar-bg: var(--color-foreground--50);
	}

	/* ==========================================================================
	   Base Element Styles
	   ========================================================================== */

	a {
		color: var(--color-link-foreground);
		text-decoration: none;
	}
	a:focus {
		outline: 1px solid var(--color-focus-border);
		outline-offset: 2px;
	}

	h2 {
		font-size: 2.2rem;
		font-weight: 200;
		line-height: normal;
		margin: 1em 0 0.3em 0;
		white-space: nowrap;
	}

	h4 {
		font-size: 1.4rem;
		font-weight: 200;
		line-height: normal;
		margin: 1em 0 0.3em 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	/* ==========================================================================
	   Icons
	   ========================================================================== */

	.icon--branch::before {
		content: '\\ea68';
		font-family: codicon;
		font-size: 1.2rem;
		position: relative;
		top: 2px;
		margin: 0 3px;
	}

	.icon--commit::before {
		content: '\\eafc';
		font-family: codicon;
		font-size: 1.2rem;
		position: relative;
		top: 2px;
		margin: 0 1px 0 3px;
	}

	.mr-1 {
		margin-right: 0.4rem;
	}

	/* ==========================================================================
	   Layout (Grid Container)
	   ========================================================================== */

	.container {
		display: grid;
		grid-template-areas:
			'header'
			'banner'
			'entries'
			'footer';
		grid-template-rows: auto auto 1fr auto;
		grid-template-columns: minmax(0, 1fr);
		height: 100vh;
		min-width: 0;
		box-sizing: border-box;
		padding: 0.5rem;
	}

	/* ==========================================================================
	   Banners (Preserves Merges)
	   ========================================================================== */

	.preserves-merges-banner {
		grid-area: banner;
		margin: 0.5rem 1rem;
		margin-block-end: 0.5rem;

		/* Info-style colors */
		--gl-banner-primary-background: var(--vscode-inputValidation-infoBackground, rgba(0, 127, 212, 0.15));
		--gl-banner-secondary-background: var(--vscode-inputValidation-infoBackground, rgba(0, 127, 212, 0.15));
		--gl-banner-text-color: var(--vscode-inputValidation-infoForeground, inherit);
		--gl-banner-primary-emphasis-background: var(--vscode-inputValidation-infoBorder, #007fd4);
	}

	/* ==========================================================================
	   Header
	   ========================================================================== */

	header {
		grid-area: header;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		min-width: 0;

		gl-checkbox {
			margin-block: 0;
		}

		gl-commit-sha::part(label) {
			font-weight: bold;
		}
	}

	.header__row {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		gap: 0.5rem 1rem;
		min-width: 0;
	}

	.header-info {
		flex: 1 1 0;
		min-width: 0;
		color: var(--color-foreground--65);
		margin-left: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding-block: 0.4rem;
	}

	.header-info gl-branch-name,
	.header-info gl-commit-sha {
		vertical-align: baseline;
	}

	.header-info gl-tooltip {
		display: inline;
		min-width: 0;
	}

	.header-count {
		margin-left: 1rem;
		white-space: nowrap;
	}

	.header-onto {
		display: inline;
		white-space: nowrap;
	}

	.header-actions {
		flex: 0 0 auto;
		display: flex;
		align-items: center;
		gap: 1.6rem;
		white-space: nowrap;
	}

	.header-toggle {
		flex: 0 0 auto;
		white-space: nowrap;
	}

	.header-title {
		flex: 0 1 auto;
		font-size: 1.6rem;
		margin: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
	}

	/* Rebase banner */
	.rebase-banner {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		background-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor, #c4a000);
		color: #000;
		padding: 0.3rem 0.6rem;
		border-radius: 0.3rem;

		&.has-conflicts {
			background-color: var(
				--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
				#cc6600
			);
			color: #fff;
		}

		code-icon {
			flex: none;
		}

		.rebase-status {
			flex: none;
		}

		gl-tooltip {
			flex: none;
		}

		.rebase-progress {
			flex: none;
			font-weight: 600;
			margin-left: auto;
		}

		.rebase-remaining {
			flex: none;
			opacity: 0.85;
		}

		.rebase-action-link {
			flex: none;
			color: inherit;
			text-decoration: underline dotted;
			text-underline-offset: 0.3rem;
			cursor: pointer;
			opacity: 0.9;
			margin-left: 1rem;

			&:hover {
				text-decoration: none;
				opacity: 1;
			}
		}
	}

	/* ==========================================================================
	   Entries
	   ========================================================================== */

	.entries {
		grid-area: entries;
		display: block;
		min-height: 0;
		overflow-x: hidden !important;
		overflow-y: visible;
		outline: none;
		margin: 0.5rem 1rem;
		box-sizing: border-box;

		border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
		border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
	}

	.entries {
		--current-entry-color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingForegroundColor, #c4a000);

		/* Override current entry color when there are conflicts */
		&.has-conflicts {
			--current-entry-color: var(
				--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
				#c74e39
			);
		}
	}

	.entries:focus-within {
		outline: none;
	}

	.entries-empty {
		grid-area: entries;
		display: flex;
		justify-content: center;
		color: var(--color-foreground--85);
		margin-top: 3rem;
		font-style: italic;
	}

	gl-rebase-entry.dragging {
		opacity: 0.4;
	}

	gl-rebase-entry.drag-over::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background-color: var(--vscode-focusBorder);
		z-index: 10;
		pointer-events: none;
	}

	/* When hovering on bottom half of entry, show indicator at bottom */
	gl-rebase-entry.drag-over-bottom::before {
		top: auto;
		bottom: 0;
	}

	/* Base entry indicator position depends on mode:
	   - Ascending (base at top): indicator at bottom (insert after base)
	   - Descending (base at bottom): indicator at top (insert before base) */
	.entries.ascending gl-rebase-entry[isbase].drag-over::before {
		top: auto;
		bottom: 0;
	}

	/* ==========================================================================
	   Footer
	   ========================================================================== */

	footer {
		grid-area: footer;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 1rem;
		padding: 0.5rem 1rem;
		background: var(--color-background);
		z-index: 1;
		min-width: 0;
	}

	.shortcuts {
		flex: 1 1 0;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		gap: 0.5rem 1rem;
		overflow: hidden;
		min-width: 0;

		> code-icon {
			flex: 0 0 auto;
		}
	}

	.shortcut {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: baseline;
		color: var(--color-foreground--65);
		gap: 0.2rem;
		white-space: nowrap;

		kbd {
			color: var(--vscode-keybindingLabel-foreground);
			display: inline-block;
			font-family: var(--vscode-font-family);
			font-weight: 600;
			line-height: 1.4;
			vertical-align: middle;

			&.word {
				text-decoration: underline;
				text-underline-offset: 0.3rem;
			}
		}

		.label {
			margin-left: 0.3rem;
		}
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-shrink: 0;
	}

	gl-rebase-conflict-indicator {
		margin-right: auto;
		margin-left: 1.6rem;
	}

	gl-button .button-shortcut {
		display: block;
		margin-top: 0.2rem;
		font-weight: 200;
		font-size: 0.9rem;
		opacity: 0.6;
		text-transform: none;
		letter-spacing: normal;
	}

	gl-button:hover .button-shortcut {
		opacity: 1;
	}

	/* ==========================================================================
	   Density: Comfortable
	   ========================================================================== */

	.container[data-density='comfortable'] {
		--gl-rebase-entry-padding-block: 0.5rem;
		--gl-rebase-entry-graph-height: 29px;
		--gl-rebase-entry-graph-offset: -0.5rem;
	}
`,{fromCharCode:iU}=String;new TextEncoder;let iH=new TextDecoder;let StateProviderBase=class StateProviderBase{constructor(e,t,i,r){this.host=e,this.ipc=i,this.logger=r,this._state=this.ipc.deserializeIpcData(iH.decode(function(e){let t=globalThis.atob(e),i=t.length,r=new Uint8Array(i),o=0,s=i-i%8;for(;o<s;o+=8)r[o]=t.charCodeAt(o),r[o+1]=t.charCodeAt(o+1),r[o+2]=t.charCodeAt(o+2),r[o+3]=t.charCodeAt(o+3),r[o+4]=t.charCodeAt(o+4),r[o+5]=t.charCodeAt(o+5),r[o+6]=t.charCodeAt(o+6),r[o+7]=t.charCodeAt(o+7);for(;o<i;o++)r[o]=t.charCodeAt(o);return r}(t))),this.logger?.log(`bootstrap duration=${Date.now()-this._state.timestamp}ms`),this.provider=this.createContextProvider(this._state),this.onPersistState?.(this._state),this.disposable=this.ipc.onReceiveMessage(this.onMessageReceived.bind(this)),this.initializeState()}get state(){return this._state}get webviewId(){return this._state.webviewId}get webviewInstanceId(){return this._state.webviewInstanceId}get timestamp(){return this._state.timestamp}dispose(){this.disposable.dispose()}get deferBootstrap(){return!1}async initializeState(){if(this.deferBootstrap){let e=await this.ipc.sendRequest(tm,{bootstrap:!0});if(null!=e.state){let t=ig(e.state)?await e.state:e.state;this.onDeferredBootstrapStateReceived(t)}}else this.ipc.sendRequest(tm,{bootstrap:!1})}onDeferredBootstrapStateReceived(e){this._state={...e,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}};let RebaseStateProvider=class RebaseStateProvider extends StateProviderBase{constructor(e,t,i,r){super(e,t,i,r),this._pendingAvatarEmails=new Map,this._requestedAvatarEmails=new Set,this._pendingCommitShas=new Set,this._requestedCommitShas=new Set,this.host.addEventListener("missing-avatar",this.onMissingAvatar.bind(this)),this.host.addEventListener("missing-commit",this.onMissingCommit.bind(this))}get deferBootstrap(){return!0}createContextProvider(e){return new context_provider_i(this.host,{context:"state",initialValue:e})}onMissingAvatar(e){let{email:t,sha:i}=e.detail;t&&i&&(this._requestedAvatarEmails.has(t)||(this._pendingAvatarEmails.set(t,i),this._requestedAvatarEmails.add(t),this._sendPendingAvatarRequestsDebounced??=tf(this.sendPendingAvatarRequests.bind(this),50),this._sendPendingAvatarRequestsDebounced()))}sendPendingAvatarRequests(){if(!this._pendingAvatarEmails.size)return;let e=Object.fromEntries(this._pendingAvatarEmails);this._pendingAvatarEmails.clear(),this.ipc.sendCommand(ts,{emails:e})}onMissingCommit(e){let{sha:t}=e.detail;!t||this._requestedCommitShas.has(t)||(this._pendingCommitShas.add(t),this._requestedCommitShas.add(t),this._sendPendingCommitRequestsDebounced??=tf(this.sendPendingCommitRequests.bind(this),50),this._sendPendingCommitRequestsDebounced())}sendPendingCommitRequests(){if(!this._pendingCommitShas.size)return;let e=Array.from(this._pendingCommitShas);this._pendingCommitShas.clear(),this.ipc.sendCommand(tn,{shas:e})}onMessageReceived(e){switch(!0){case tc.is(e):this._state={...e.params.state,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate();break;case th.is(e):for(let t of(this.updateAvatars(e.params.avatars),Object.keys(e.params.avatars)))this._requestedAvatarEmails.delete(t);break;case td.is(e):for(let t of(this.updateCommits(e.params.commits,e.params.authors,e.params.isInPlace),Object.keys(e.params.commits)))this._requestedCommitShas.delete(t);break;case tp.is(e):this._state={...this._state,subscription:e.params.subscription,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}}updateAvatars(e){if(!this._state?.authors)return;let t=!1;for(let[i,r]of Object.entries(e)){let e=this._state.authors[i];e&&e.avatarUrl!==r&&(e.avatarUrl=r,t=!0)}t&&(this._state.timestamp=Date.now(),this.provider.setValue(this._state,!0),this.host.requestUpdate())}updateCommits(e,t,i){if(!this._state)return;let r=!1;if(null!=i&&this._state.isInPlace!==i&&(this._state.isInPlace=i,r=!0),this._state.onto&&!this._state.onto.commit){let t=e[this._state.onto.sha];t&&(this._state.onto={...this._state.onto,commit:t},r=!0)}for(let[i,o]of(this._state.entries=this._state.entries.map(t=>{if(!e0(t)||null!=t.commit)return t;let i=e[t.sha];return i?(r=!0,{...t,commit:i}):t}),this._state.doneEntries&&(this._state.doneEntries=this._state.doneEntries.map(t=>{if(!e0(t)||null!=t.commit)return t;let i=e[t.sha];return i?(r=!0,{...t,commit:i}):t})),Object.entries(t))){let e=this._state.authors[i];e?this._state.authors[i]={...o,avatarUrl:e.avatarUrl??o.avatarUrl}:this._state.authors[i]=o,r=!0}r&&(this._state={...this._state,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate())}moveEntry(e,t){if(!this._state?.entries||e===t)return;let i=[...this._state.entries],[r]=i.splice(e,1);i.splice(t,0,r),this._state={...this._state,entries:i,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}moveEntries(e,t){if(!this._state?.entries||0===e.length)return;let i=[...this._state.entries],r=new Set(e),o=i.filter(e=>r.has(e.id)),s=i.filter(e=>!r.has(e.id)),a=Math.max(0,Math.min(t,s.length)),c=[...s.slice(0,a),...o,...s.slice(a)];this._state={...this._state,entries:c,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}shiftEntries(e,t){if(!this._state?.entries||0===e.length)return;let i=[...this._state.entries],r=new Set(e),o=i.map((e,t)=>r.has(e.id)?t:-1).filter(e=>-1!==e);if(0!==o.length){if("up"===t)for(let e of o){if(0===e)continue;let t=e-1;r.has(i[t].id)||([i[t],i[e]]=[i[e],i[t]])}else for(let e=o.length-1;e>=0;e--){let t=o[e];if(t===i.length-1)continue;let s=t+1;r.has(i[s].id)||([i[s],i[t]]=[i[t],i[s]])}this._state={...this._state,entries:i,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}}changeEntryAction(e,t){this.changeEntryActions([{sha:e,action:t}])}changeEntryActions(e){if(!this._state?.entries||0===e.length)return;let t=new Map(e.map(e=>[e.sha,e.action])),i=this._state.entries.map(e=>{if(!e0(e))return e;let i=t.get(e.sha);return null!=i?{...e,action:i}:e});this._state={...this._state,entries:i,timestamp:Date.now()},this.provider.setValue(this._state,!0),this.host.requestUpdate()}};function iW(e,t,i,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;let{I:iG}={M:er,P:eo,A:es,C:1,L:ez,R,D:ed,V:eI,I:k,H,N:L,U:z,B:I,F:Z},iK=e=>e,iZ=(e,t,i)=>{let r=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i)i=new iG(r.insertBefore(document.createComment(""),o),r.insertBefore(document.createComment(""),o),e,e.options);else{let t=i._$AB.nextSibling,s=i._$AM,a=s!==e;if(a){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==s._$AU&&i._$AP(t)}if(t!==o||a){let e=i._$AA;for(;e!==t;){let t=iK(e).nextSibling;iK(r).insertBefore(e,o),e=t}}}return i},iQ=(e,t,i=e)=>(e._$AI(t,i),e),iX={},iJ=e=>{e._$AR(),e._$AA.remove()},iY=(e,t)=>{let i=e._$AN;if(void 0===i)return!1;for(let e of i)e._$AO?.(t,!1),iY(e,t);return!0},i0=e=>{let t,i;do{if(void 0===(t=e._$AM))break;(i=t._$AN).delete(e),e=t}while(0===i?.size)},i1=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),i3(t)}};function i2(e){void 0!==this._$AN?(i0(this),this._$AM=e,i1(this)):this._$AM=e}function i5(e,t=!1,i=0){let r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(r))for(let e=i;e<r.length;e++)iY(r[e],!1),i0(r[e]);else null!=r&&(iY(r,!1),i0(r));else iY(this,e)}let i3=e=>{2==e.type&&(e._$AP??=i5,e._$AQ??=i2)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),i1(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(iY(this,e),i0(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let i8=(e,t,i)=>{let r=new Map;for(let o=t;o<=i;o++)r.set(e[o],o);return r},i6=eF(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let r;void 0===i?i=t:void 0!==t&&(r=t);let o=[],s=[],a=0;for(let t of e)o[a]=r?r(t,a):a,s[a]=i(t,a),a++;return{values:s,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,r]){let o=e._$AH,{values:s,keys:a}=this.dt(t,i,r);if(!Array.isArray(o))return this.ut=a,s;let c=this.ut??=[],h=[],p,g,f=0,m=o.length-1,b=0,v=s.length-1;for(;f<=m&&b<=v;)if(null===o[f])f++;else if(null===o[m])m--;else if(c[f]===a[b])h[b]=iQ(o[f],s[b]),f++,b++;else if(c[m]===a[v])h[v]=iQ(o[m],s[v]),m--,v--;else if(c[f]===a[v])h[v]=iQ(o[f],s[v]),iZ(e,h[v+1],o[f]),f++,v--;else if(c[m]===a[b])h[b]=iQ(o[m],s[b]),iZ(e,o[f],o[m]),m--,b++;else if(void 0===p&&(p=i8(a,b,v),g=i8(c,f,m)),p.has(c[f]))if(p.has(c[m])){let t=g.get(a[b]),i=void 0!==t?o[t]:null;if(null===i){let t=iZ(e,o[f]);iQ(t,s[b]),h[b]=t}else h[b]=iQ(i,s[b]),iZ(e,o[f],i),o[t]=null;b++}else iJ(o[m]),m--;else iJ(o[f]),f++;for(;b<=v;){let t=iZ(e,h[v+1]);iQ(t,s[b]),h[b++]=t}for(;f<=m;){let e=o[f++];null!==e&&iJ(e)}return this.ut=a,((e,t=iX)=>e._$AH=t)(e,h),eC}});let RangeChangedEvent=class RangeChangedEvent extends Event{constructor(e){super(RangeChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};RangeChangedEvent.eventName="rangeChanged";let VisibilityChangedEvent=class VisibilityChangedEvent extends Event{constructor(e){super(VisibilityChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};VisibilityChangedEvent.eventName="visibilityChanged";let UnpinnedEvent=class UnpinnedEvent extends Event{constructor(){super(UnpinnedEvent.eventName,{bubbles:!1})}};UnpinnedEvent.eventName="unpinned";let ScrollerShim=class ScrollerShim{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}};let ScrollerController=class ScrollerController extends ScrollerShim{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return null!==this._destination}scrollTo(e,t){this._scrollTo("number"==typeof e&&"number"==typeof t?{left:e,top:t}:e)}scrollBy(e,t){let i="number"==typeof e&&"number"==typeof t?{left:e,top:t}:e;void 0!==i.top&&(i.top+=this.scrollTop),void 0!==i.left&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,i=null){null!==this._end&&this._end(),"smooth"===e.behavior?(this._setDestination(e),this._retarget=t,this._end=i):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:i}=e;return t=void 0===t?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),i=void 0===i?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),(null===this._destination||i!==this._destination.left||t!==this._destination.top)&&(this.__destination={top:t,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,i){return this._scrollTo(e,t,i),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(null!==this._destination){let{scrollTop:e,scrollLeft:t}=this,{top:i,left:r}=this._destination;i=Math.min(i||0,this.maxScrollTop);let o=Math.abs((r=Math.min(r||0,this.maxScrollLeft))-t);1>Math.abs(i-e)&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),0===this._clients.size&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),1===this._clients.size&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}};let i7="u">typeof window?window.ResizeObserver:void 0,i4=Symbol("virtualizerRef"),i9="virtualizer-sizer";let Virtualizer=class Virtualizer{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new i7(()=>this._hostElementSizeChanged()),this._childrenRO=new i7(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[i4]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=function(e,t=!1){let i=!1;return(function(e,t=!1){let i=[],r=t?e:rt(e);for(;null!==r;)i.push(r),r=rt(r);return i})(e,t).filter(e=>{if(i)return!1;let t=getComputedStyle(e);return i="fixed"===t.position,"visible"!==t.overflow})}(this._hostElement,e),this._scrollerController=new ScrollerController(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${i9}]`);t||((t=document.createElement("div")).setAttribute(i9,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(i9,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let t=e.type||r;if("function"==typeof t&&this._layout instanceof t){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let t,i;if("function"==typeof e.type){i=e.type;let r={...e};delete r.type,t=r}else t=e;void 0===i&&(r=i=(await Promise.resolve().then($.bind($,5090))).FlowLayout),this._layout=new i(e=>this._handleLayoutMessage(e),t),this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){let e=window.performance.now(),t=e-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:i}}return null}_measureChildren(){let e={},t=this._children,i=this._measureChildOverride||this._measureChild;for(let r=0;r<t.length;r++){let o=t[r],s=this._first+r;(this._itemsChanged||this._toBeMeasured.has(o))&&(e[s]=i.call(this,o,this._items[s]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){var t;let i,{width:r,height:o}=e.getBoundingClientRect();return Object.assign({width:r,height:o},(t=e,{marginTop:re((i=window.getComputedStyle(t)).marginTop),marginRight:re(i.marginRight),marginBottom:re(i.marginBottom),marginLeft:re(i.marginLeft)}))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch{}window.performance.mark("uv-start")}!1===this._scrollerController.correctingScrollError&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){"scroll"===e.type&&(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent()}_handleLayoutMessage(e){"stateChanged"===e.type?this._updateDOM(e):"visibilityChanged"===e.type?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):"unpinned"===e.type&&this._hostElement.dispatchEvent(new UnpinnedEvent)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(i9)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,i=this._layout;if(e&&t&&i){let r,o,s,a,c=e.getBoundingClientRect();r=0,o=0,s=window.innerHeight,a=window.innerWidth;let h=this._clippingAncestors.map(e=>e.getBoundingClientRect());for(let e of(h.unshift(c),h))r=Math.max(r,e.top),o=Math.max(o,e.left),s=Math.min(s,e.bottom),a=Math.min(a,e.right);let p=t.getBoundingClientRect(),g={left:c.left-p.left,top:c.top-p.top},f={width:t.scrollWidth,height:t.scrollHeight},m=r-c.top+e.scrollTop,b=o-c.left+e.scrollLeft;i.viewportSize={width:Math.max(0,a-o),height:Math.max(0,s-r)},i.viewportScroll={top:m,left:b},i.totalScrollSize=f,i.offsetWithinScroller=g}}_sizeHostElement(e){let t=e&&null!==e.width?Math.min(82e5,e.width):0,i=e&&null!==e.height?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${t}px, ${i}px)`;else{let e=this._hostElement.style;e.minWidth=t?`${t}px`:"100%",e.minHeight=i?`${i}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:i,height:r,xOffset:o,yOffset:s},a)=>{let c=this._children[a-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${t}px, ${e}px)`,void 0!==i&&(c.style.width=i+"px"),void 0!==r&&(c.style.height=r+"px"),c.style.left=void 0===o?null:o+"px",c.style.top=void 0===s?null:s+"px")})}async _adjustRange(e){let{_first:t,_last:i,_firstVisible:r,_lastVisible:o}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==r||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:i,left:r}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-i,left:t-r})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),"smooth"===e.behavior){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:i}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new RangeChangedEvent({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new VisibilityChangedEvent({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){null!==this._layoutCompleteRejecter&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&null===this._pendingLayoutComplete&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){null!==this._layoutCompleteResolver&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}};function re(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function rt(e){if(null!==e.assignedSlot)return e.assignedSlot;if(null!==e.parentElement)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}let ri=e=>e,rr=(e,t)=>ew`${t}: ${JSON.stringify(e,null,2)}`;let VirtualizeDirective=class VirtualizeDirective extends async_directive_f{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>rr(e,t+this._first),this._keyFunction=(e,t)=>ri(e,t+this._first),this._items=[],2!==e.type)throw Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return i6(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let i=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),i?eC:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let i=e.parentNode;this._makeVirtualizer(i,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:i}=e;t&&(this._renderItem=(e,i)=>t(e,i+this._first)),i&&(this._keyFunction=(e,t)=>i(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:i,scroller:r,items:o}=t;this._virtualizer=new Virtualizer({hostElement:e,layout:i,scroller:r}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(e,t){let i=e.parentNode;i&&1===i.nodeType&&(i.addEventListener("rangeChanged",e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(i,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}};let ro=eF(VirtualizeDirective);let LitVirtualizer=class LitVirtualizer extends lit_element_i{constructor(){super(...arguments),this.items=[],this.renderItem=rr,this.keyFunction=ri,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){let{items:e,renderItem:t,keyFunction:i,layout:r,scroller:o}=this;return ew`${ro({items:e,renderItem:t,keyFunction:i,layout:r,scroller:o})}`}element(e){return this[i4]?.element(e)}get layoutComplete(){return this[i4]?.layoutComplete}scrollToIndex(e,t="start"){this.element(e)?.scrollIntoView({block:t})}};iW([eT({attribute:!1})],LitVirtualizer.prototype,"items",void 0),iW([eT()],LitVirtualizer.prototype,"renderItem",void 0),iW([eT()],LitVirtualizer.prototype,"keyFunction",void 0),iW([eT({attribute:!1})],LitVirtualizer.prototype,"layout",void 0),iW([eT({reflect:!0,type:Boolean})],LitVirtualizer.prototype,"scroller",void 0),customElements.define("lit-virtualizer",LitVirtualizer);var rs=((m=rs||{})[m.VerificationRequired=-1]="VerificationRequired",m[m.Community=0]="Community",m[m.DeprecatedPreview=1]="DeprecatedPreview",m[m.DeprecatedPreviewExpired=2]="DeprecatedPreviewExpired",m[m.Trial=3]="Trial",m[m.TrialExpired=4]="TrialExpired",m[m.TrialReactivationEligible=5]="TrialReactivationEligible",m[m.Paid=6]="Paid",m);function rn(e){return null!=e&&(e===rs.Trial||e===rs.Paid)}let ra=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","git-branch":"\\ea68","git-branch-create":"\\ea68","git-branch-delete":"\\ea68","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b","file-text":"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4",bracket:"\\eb0f","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52"}),rl=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147"});var rc=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,rd=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?rh(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&rc(t,i,s),s};function rp(e,t=""){return O(Object.entries(e).map(([e,i])=>(function(e,t,i=""){return`:host([icon='${i}${e}'])::before { content: '${t}'; }`})(e,i,t)).join(""))}let ru=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};ru.styles=T`
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

		${rp(ra)}
		${rp(rl,"gl-")}

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
	`,rd([eT({reflect:!0})],ru.prototype,"icon",2),rd([eT({reflect:!0})],ru.prototype,"modifier",2),rd([eT({type:Number})],ru.prototype,"size",2),rd([eT({reflect:!0})],ru.prototype,"flip",2),rd([eT({reflect:!0})],ru.prototype,"rotate",2),ru=rd([eD("code-icon")],ru);var rg=T`
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
`;let rf=new Set,rm=new Map,rb="ltr",rv="en",ry="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(ry){let e=new MutationObserver(rw);rb=document.documentElement.dir||"ltr",rv=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function r_(...e){e.map(e=>{let t=e.$code.toLowerCase();rm.has(t)?rm.set(t,Object.assign(Object.assign({},rm.get(t)),e)):rm.set(t,e),o||(o=e)}),rw()}function rw(){ry&&(rb=document.documentElement.dir||"ltr",rv=document.documentElement.lang||navigator.language),[...rf.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){rf.add(this.host)}hostDisconnected(){rf.delete(this.host)}dir(){return`${this.host.dir||rb}`.toLowerCase()}lang(){return`${this.host.lang||rv}`.toLowerCase()}getTranslationData(e){var t,i;let r=new Intl.Locale(e.replace(/_/g,"-")),o=null==r?void 0:r.language.toLowerCase(),s=null!=(i=null==(t=null==r?void 0:r.region)?void 0:t.toLowerCase())?i:"",a=rm.get(`${o}-${s}`),c=rm.get(o);return{locale:r,language:o,region:s,primary:a,secondary:c}}exists(e,t){var i;let{primary:r,secondary:s}=this.getTranslationData(null!=(i=t.lang)?i:this.lang());return t=Object.assign({includeFallback:!1},t),!!r&&!!r[e]||!!s&&!!s[e]||!!t.includeFallback&&!!o&&!!o[e]}term(e,...t){let i,{primary:r,secondary:s}=this.getTranslationData(this.lang());if(r&&r[e])i=r[e];else if(s&&s[e])i=s[e];else{if(!o||!o[e])return String(e);i=o[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}};var rx={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};r_(rx);var rk=class extends LocalizeController{};r_(rx);var rC=T`
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
`,r$=Object.defineProperty,rS=Object.defineProperties,rE=Object.getOwnPropertyDescriptor,rA=Object.getOwnPropertyDescriptors,rz=Object.getOwnPropertySymbols,rI=Object.prototype.hasOwnProperty,rP=Object.prototype.propertyIsEnumerable,rR=e=>{throw TypeError(e)},rL=(e,t,i)=>t in e?r$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,rD=(e,t)=>{for(var i in t||(t={}))rI.call(t,i)&&rL(e,i,t[i]);if(rz)for(var i of rz(t))rP.call(t,i)&&rL(e,i,t[i]);return e},rO=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?rE(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&r$(t,i,s),s},rT=(e,t,i)=>t.has(e)||rR("Cannot "+i),rM=class extends lit_element_i{constructor(){let e;super(),(e=_).has(this)?rR("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let i=new CustomEvent(e,rD({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(i),i}static define(e,t=this,i={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,i)}catch(r){customElements.define(e,class extends t{},i)}return}let o=" (unknown version)";"version"in t&&t.version&&(o=" v"+t.version),"version"in r&&r.version&&r.version}attributeChangedCallback(e,t,i){let r,o;if(rT(this,r=_,"read from private field"),o?!o.call(this):!r.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),rT(this,e=_,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&null==this[i]&&(this[i]=t)})}};_=new WeakMap,rM.version="2.20.1",rM.dependencies={},rO([eT()],rM.prototype,"dir",2),rO([eT()],rM.prototype,"lang",2);let rB=Math.min,rq=Math.max,rF=Math.round,rN=Math.floor,rV=e=>({x:e,y:e}),rj={left:"right",right:"left",bottom:"top",top:"bottom"},rU={start:"end",end:"start"};function rH(e,t){return"function"==typeof e?e(t):e}function rW(e){return e.split("-")[0]}function rG(e){return e.split("-")[1]}function rK(e){return"x"===e?"y":"x"}function rZ(e){return"y"===e?"height":"width"}let rQ=new Set(["top","bottom"]);function rX(e){return rQ.has(rW(e))?"y":"x"}function rJ(e){return e.replace(/start|end/g,e=>rU[e])}let rY=["left","right"],r0=["right","left"],r1=["top","bottom"],r2=["bottom","top"];function r5(e){return e.replace(/left|right|bottom|top/g,e=>rj[e])}function r3(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function r8(e){let{x:t,y:i,width:r,height:o}=e;return{width:r,height:o,top:i,left:t,right:t+r,bottom:i+o,x:t,y:i}}function r6(e,t,i){let r,{reference:o,floating:s}=e,a=rX(t),c=rK(rX(t)),h=rZ(c),p=rW(t),g="y"===a,f=o.x+o.width/2-s.width/2,m=o.y+o.height/2-s.height/2,b=o[h]/2-s[h]/2;switch(p){case"top":r={x:f,y:o.y-s.height};break;case"bottom":r={x:f,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:m};break;case"left":r={x:o.x-s.width,y:m};break;default:r={x:o.x,y:o.y}}switch(rG(t)){case"start":r[c]-=b*(i&&g?-1:1);break;case"end":r[c]+=b*(i&&g?-1:1)}return r}let r7=async(e,t,i)=>{let{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:a}=i,c=s.filter(Boolean),h=await (null==a.isRTL?void 0:a.isRTL(t)),p=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:g,y:f}=r6(p,r,h),m=r,b={},v=0;for(let i=0;i<c.length;i++){let{name:s,fn:_}=c[i],{x:w,y:x,data:C,reset:$}=await _({x:g,y:f,initialPlacement:r,placement:m,strategy:o,middlewareData:b,rects:p,platform:a,elements:{reference:e,floating:t}});g=null!=w?w:g,f=null!=x?x:f,b={...b,[s]:{...b[s],...C}},$&&v<=50&&(v++,"object"==typeof $&&($.placement&&(m=$.placement),$.rects&&(p=!0===$.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):$.rects),{x:g,y:f}=r6(p,m,h)),i=-1)}return{x:g,y:f,placement:m,strategy:o,middlewareData:b}};async function r4(e,t){var i;void 0===t&&(t={});let{x:r,y:o,platform:s,rects:a,elements:c,strategy:h}=e,{boundary:p="clippingAncestors",rootBoundary:g="viewport",elementContext:f="floating",altBoundary:m=!1,padding:b=0}=rH(t,e),v=r3(b),_=c[m?"floating"===f?"reference":"floating":f],w=r8(await s.getClippingRect({element:null==(i=await (null==s.isElement?void 0:s.isElement(_)))||i?_:_.contextElement||await (null==s.getDocumentElement?void 0:s.getDocumentElement(c.floating)),boundary:p,rootBoundary:g,strategy:h})),x="floating"===f?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,C=await (null==s.getOffsetParent?void 0:s.getOffsetParent(c.floating)),$=await (null==s.isElement?void 0:s.isElement(C))&&await (null==s.getScale?void 0:s.getScale(C))||{x:1,y:1},S=r8(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:C,strategy:h}):x);return{top:(w.top-S.top+v.top)/$.y,bottom:(S.bottom-w.bottom+v.bottom)/$.y,left:(w.left-S.left+v.left)/$.x,right:(S.right-w.right+v.right)/$.x}}let r9=new Set(["left","top"]);async function oe(e,t){let{placement:i,platform:r,elements:o}=e,s=await (null==r.isRTL?void 0:r.isRTL(o.floating)),a=rW(i),c=rG(i),h="y"===rX(i),p=r9.has(a)?-1:1,g=s&&h?-1:1,f=rH(t,e),{mainAxis:m,crossAxis:b,alignmentAxis:v}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return c&&"number"==typeof v&&(b="end"===c?-1*v:v),h?{x:b*g,y:m*p}:{x:m*p,y:b*g}}function ot(){return"u">typeof window}function oi(e){return os(e)?(e.nodeName||"").toLowerCase():"#document"}function or(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function oo(e){var t;return null==(t=(os(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function os(e){return!!ot()&&(e instanceof Node||e instanceof or(e).Node)}function on(e){return!!ot()&&(e instanceof Element||e instanceof or(e).Element)}function oa(e){return!!ot()&&(e instanceof HTMLElement||e instanceof or(e).HTMLElement)}function ol(e){return!(!ot()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof or(e).ShadowRoot)}let oc=new Set(["inline","contents"]);function oh(e){let{overflow:t,overflowX:i,overflowY:r,display:o}=ow(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&!oc.has(o)}let od=new Set(["table","td","th"]),op=[":popover-open",":modal"];function ou(e){return op.some(t=>{try{return e.matches(t)}catch{return!1}})}let og=["transform","translate","scale","rotate","perspective"],of=["transform","translate","scale","rotate","perspective","filter"],om=["paint","layout","strict","content"];function ob(e){let t=ov(),i=on(e)?ow(e):e;return og.some(e=>!!i[e]&&"none"!==i[e])||!!i.containerType&&"normal"!==i.containerType||!t&&!!i.backdropFilter&&"none"!==i.backdropFilter||!t&&!!i.filter&&"none"!==i.filter||of.some(e=>(i.willChange||"").includes(e))||om.some(e=>(i.contain||"").includes(e))}function ov(){return!("u"<typeof CSS)&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let oy=new Set(["html","body","#document"]);function o_(e){return oy.has(oi(e))}function ow(e){return or(e).getComputedStyle(e)}function ox(e){return on(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ok(e){if("html"===oi(e))return e;let t=e.assignedSlot||e.parentNode||ol(e)&&e.host||oo(e);return ol(t)?t.host:t}function oC(e,t,i){var r;void 0===t&&(t=[]),void 0===i&&(i=!0);let o=function e(t){let i=ok(t);return o_(i)?t.ownerDocument?t.ownerDocument.body:t.body:oa(i)&&oh(i)?i:e(i)}(e),s=o===(null==(r=e.ownerDocument)?void 0:r.body),a=or(o);if(s){let e=o$(a);return t.concat(a,a.visualViewport||[],oh(o)?o:[],e&&i?oC(e):[])}return t.concat(o,oC(o,[],i))}function o$(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function oS(e){let t=ow(e),i=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=oa(e),s=o?e.offsetWidth:i,a=o?e.offsetHeight:r,c=rF(i)!==s||rF(r)!==a;return c&&(i=s,r=a),{width:i,height:r,$:c}}function oE(e){return on(e)?e:e.contextElement}function oA(e){let t=oE(e);if(!oa(t))return rV(1);let i=t.getBoundingClientRect(),{width:r,height:o,$:s}=oS(t),a=(s?rF(i.width):i.width)/r,c=(s?rF(i.height):i.height)/o;return a&&Number.isFinite(a)||(a=1),c&&Number.isFinite(c)||(c=1),{x:a,y:c}}let oz=rV(0);function oI(e){let t=or(e);return ov()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:oz}function oP(e,t,i,r){var o;void 0===t&&(t=!1),void 0===i&&(i=!1);let s=e.getBoundingClientRect(),a=oE(e),c=rV(1);t&&(r?on(r)&&(c=oA(r)):c=oA(e));let h=(void 0===(o=i)&&(o=!1),r&&(!o||r===or(a))&&o)?oI(a):rV(0),p=(s.left+h.x)/c.x,g=(s.top+h.y)/c.y,f=s.width/c.x,m=s.height/c.y;if(a){let e=or(a),t=r&&on(r)?or(r):r,i=e,o=o$(i);for(;o&&r&&t!==i;){let e=oA(o),t=o.getBoundingClientRect(),r=ow(o),s=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;p*=e.x,g*=e.y,f*=e.x,m*=e.y,p+=s,g+=a,o=o$(i=or(o))}}return r8({width:f,height:m,x:p,y:g})}function oR(e,t){let i=ox(e).scrollLeft;return t?t.left+i:oP(oo(e)).left+i}function oL(e,t){let i=e.getBoundingClientRect();return{x:i.left+t.scrollLeft-oR(e,i),y:i.top+t.scrollTop}}let oD=new Set(["absolute","fixed"]);function oO(e,t,i){var r;let o;if("viewport"===t)o=function(e,t){let i=or(e),r=oo(e),o=i.visualViewport,s=r.clientWidth,a=r.clientHeight,c=0,h=0;if(o){s=o.width,a=o.height;let e=ov();(!e||e&&"fixed"===t)&&(c=o.offsetLeft,h=o.offsetTop)}let p=oR(r);if(p<=0){let e=r.ownerDocument,t=e.body,i=getComputedStyle(t),o="CSS1Compat"===e.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,a=Math.abs(r.clientWidth-t.clientWidth-o);a<=25&&(s-=a)}else p<=25&&(s+=p);return{width:s,height:a,x:c,y:h}}(e,i);else if("document"===t){let t,i,s,a,c,h,p;r=oo(e),t=oo(r),i=ox(r),s=r.ownerDocument.body,a=rq(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),c=rq(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight),h=-i.scrollLeft+oR(r),p=-i.scrollTop,"rtl"===ow(s).direction&&(h+=rq(t.clientWidth,s.clientWidth)-a),o={width:a,height:c,x:h,y:p}}else if(on(t)){let e,r,s,a,c,h;r=(e=oP(t,!0,"fixed"===i)).top+t.clientTop,s=e.left+t.clientLeft,a=oa(t)?oA(t):rV(1),c=t.clientWidth*a.x,h=t.clientHeight*a.y,o={width:c,height:h,x:s*a.x,y:r*a.y}}else{let i=oI(e);o={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return r8(o)}function oT(e){return"static"===ow(e).position}function oM(e,t){if(!oa(e)||"fixed"===ow(e).position)return null;if(t)return t(e);let i=e.offsetParent;return oo(e)===i&&(i=i.ownerDocument.body),i}function oB(e,t){var i;let r=or(e);if(ou(e))return r;if(!oa(e)){let t=ok(e);for(;t&&!o_(t);){if(on(t)&&!oT(t))return t;t=ok(t)}return r}let o=oM(e,t);for(;o&&(i=o,od.has(oi(i)))&&oT(o);)o=oM(o,t);return o&&o_(o)&&oT(o)&&!ob(o)?r:o||function(e){let t=ok(e);for(;oa(t)&&!o_(t);){if(ob(t))return t;if(ou(t))break;t=ok(t)}return null}(e)||r}let oq=async function(e){let t=this.getOffsetParent||oB,i=this.getDimensions,r=await i(e.floating);return{reference:function(e,t,i){let r=oa(t),o=oo(t),s="fixed"===i,a=oP(e,!0,s,t),c={scrollLeft:0,scrollTop:0},h=rV(0);if(r||!r&&!s)if(("body"!==oi(t)||oh(o))&&(c=ox(t)),r){let e=oP(t,!0,s,t);h.x=e.x+t.clientLeft,h.y=e.y+t.clientTop}else o&&(h.x=oR(o));s&&!r&&o&&(h.x=oR(o));let p=!o||r||s?rV(0):oL(o,c);return{x:a.left+c.scrollLeft-h.x-p.x,y:a.top+c.scrollTop-h.y-p.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},oF={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:i,offsetParent:r,strategy:o}=e,s="fixed"===o,a=oo(r),c=!!t&&ou(t.floating);if(r===a||c&&s)return i;let h={scrollLeft:0,scrollTop:0},p=rV(1),g=rV(0),f=oa(r);if((f||!f&&!s)&&(("body"!==oi(r)||oh(a))&&(h=ox(r)),oa(r))){let e=oP(r);p=oA(r),g.x=e.x+r.clientLeft,g.y=e.y+r.clientTop}let m=!a||f||s?rV(0):oL(a,h);return{width:i.width*p.x,height:i.height*p.y,x:i.x*p.x-h.scrollLeft*p.x+g.x+m.x,y:i.y*p.y-h.scrollTop*p.y+g.y+m.y}},getDocumentElement:oo,getClippingRect:function(e){let{element:t,boundary:i,rootBoundary:r,strategy:o}=e,s=[..."clippingAncestors"===i?ou(t)?[]:function(e,t){let i=t.get(e);if(i)return i;let r=oC(e,[],!1).filter(e=>on(e)&&"body"!==oi(e)),o=null,s="fixed"===ow(e).position,a=s?ok(e):e;for(;on(a)&&!o_(a);){let t=ow(a),i=ob(a);i||"fixed"!==t.position||(o=null),(s?!i&&!o:!i&&"static"===t.position&&!!o&&oD.has(o.position)||oh(a)&&!i&&function e(t,i){let r=ok(t);return!(r===i||!on(r)||o_(r))&&("fixed"===ow(r).position||e(r,i))}(e,a))?r=r.filter(e=>e!==a):o=t,a=ok(a)}return t.set(e,r),r}(t,this._c):[].concat(i),r],a=s[0],c=s.reduce((e,i)=>{let r=oO(t,i,o);return e.top=rq(r.top,e.top),e.right=rB(r.right,e.right),e.bottom=rB(r.bottom,e.bottom),e.left=rq(r.left,e.left),e},oO(t,a,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:oB,getElementRects:oq,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:i}=oS(e);return{width:t,height:i}},getScale:oA,isElement:on,isRTL:function(e){return"rtl"===ow(e).direction}};function oN(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let oV=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var i,r;let o,s,{placement:a,rects:c,platform:h,elements:p}=t,{apply:g=()=>{},...f}=rH(e,t),m=await r4(t,f),b=rW(a),v=rG(a),_="y"===rX(a),{width:w,height:x}=c.floating;"top"===b||"bottom"===b?(o=b,s=v===(await (null==h.isRTL?void 0:h.isRTL(p.floating))?"start":"end")?"left":"right"):(s=b,o="end"===v?"top":"bottom");let C=x-m.top-m.bottom,$=w-m.left-m.right,S=rB(x-m[o],C),E=rB(w-m[s],$),A=!t.middlewareData.shift,P=S,D=E;if(null!=(i=t.middlewareData.shift)&&i.enabled.x&&(D=$),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(P=C),A&&!v){let e=rq(m.left,0),t=rq(m.right,0),i=rq(m.top,0),r=rq(m.bottom,0);_?D=w-2*(0!==e||0!==t?e+t:rq(m.left,m.right)):P=x-2*(0!==i||0!==r?i+r:rq(m.top,m.bottom))}await g({...t,availableWidth:D,availableHeight:P});let O=await h.getDimensions(p.floating);return w!==O.width||x!==O.height?{reset:{rects:!0}}:{}}}},oj=eF(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let i in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let i=e.element.classList;for(let e of this.st)e in t||(i.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return eC}});function oU(e){var t=e;for(let e=t;e;e=oH(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=oH(t);e;e=oH(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||ob(t)||"BODY"===e.tagName))return e}return null}function oH(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var oW=class extends rM{constructor(){super(...arguments),this.localize=new rk(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),r=0,o=0,s=0,a=0,c=0,h=0,p=0,g=0;i?e.top<t.top?(r=e.left,o=e.bottom,s=e.right,a=e.bottom,c=t.left,h=t.top,p=t.right,g=t.top):(r=t.left,o=t.bottom,s=t.right,a=t.bottom,c=e.left,h=e.top,p=e.right,g=e.top):e.left<t.left?(r=e.right,o=e.top,s=t.left,a=t.top,c=e.right,h=e.bottom,p=t.left,g=t.bottom):(r=t.right,o=t.top,s=e.left,a=e.top,c=t.right,h=t.bottom,p=e.left,g=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${s}px`),this.style.setProperty("--hover-bridge-top-right-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${g}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,i,r){let o;void 0===r&&(r={});let{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:h="function"==typeof IntersectionObserver,animationFrame:p=!1}=r,g=oE(e),f=s||a?[...g?oC(g):[],...oC(t)]:[];f.forEach(e=>{s&&e.addEventListener("scroll",i,{passive:!0}),a&&e.addEventListener("resize",i)});let m=g&&h?function(e,t){let i,r=null,o=oo(e);function s(){var e;clearTimeout(i),null==(e=r)||e.disconnect(),r=null}return!function a(c,h){void 0===c&&(c=!1),void 0===h&&(h=1),s();let p=e.getBoundingClientRect(),{left:g,top:f,width:m,height:b}=p;if(c||t(),!m||!b)return;let v={rootMargin:-rN(f)+"px "+-rN(o.clientWidth-(g+m))+"px "+-rN(o.clientHeight-(f+b))+"px "+-rN(g)+"px",threshold:rq(0,rB(1,h))||1},_=!0;function w(t){let r=t[0].intersectionRatio;if(r!==h){if(!_)return a();r?a(!1,r):i=setTimeout(()=>{a(!1,1e-7)},1e3)}1!==r||oN(p,e.getBoundingClientRect())||a(),_=!1}try{r=new IntersectionObserver(w,{...v,root:o.ownerDocument})}catch{r=new IntersectionObserver(w,v)}r.observe(e)}(!0),s}(g,i):null,b=-1,v=null;c&&(v=new ResizeObserver(e=>{let[r]=e;r&&r.target===g&&v&&(v.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var e;null==(e=v)||e.observe(t)})),i()}),g&&!p&&v.observe(g),v.observe(t));let _=p?oP(e):null;return p&&function t(){let r=oP(e);_&&!oN(_,r)&&i(),_=r,o=requestAnimationFrame(t)}(),i(),()=>{var e;f.forEach(e=>{s&&e.removeEventListener("scroll",i),a&&e.removeEventListener("resize",i)}),null==m||m(),null==(e=v)||e.disconnect(),v=null,p&&cancelAnimationFrame(o)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,i,r,o,s;let a,c,h,p;if(!this.active||!this.anchorEl)return;let g=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var i,r;let{x:o,y:s,placement:a,middlewareData:c}=t,h=await oe(t,e);return a===(null==(i=c.offset)?void 0:i.placement)&&null!=(r=c.arrow)&&r.alignmentOffset?{}:{x:o+h.x,y:s+h.y,data:{...h,placement:a}}}}];this.sync?g.push(oV({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&g.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var i,r,o,s,a,c,h,p;let g,f,m,{placement:b,middlewareData:v,rects:_,initialPlacement:w,platform:x,elements:C}=e,{mainAxis:$=!0,crossAxis:S=!0,fallbackPlacements:E,fallbackStrategy:A="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:D=!0,...O}=rH(t,e);if(null!=(i=v.arrow)&&i.alignmentOffset)return{};let T=rW(b),M=rX(w),B=rW(w)===w,q=await (null==x.isRTL?void 0:x.isRTL(C.floating)),F=E||(B||!D?[r5(w)]:(g=r5(w),[rJ(w),g,rJ(g)])),N="none"!==P;!E&&N&&F.push(...(f=rG(w),m=function(e,t,i){switch(e){case"top":case"bottom":if(i)return t?r0:rY;return t?rY:r0;case"left":case"right":return t?r1:r2;default:return[]}}(rW(w),"start"===P,q),f&&(m=m.map(e=>e+"-"+f),D&&(m=m.concat(m.map(rJ)))),m));let V=[w,...F],j=await r4(e,O),U=[],W=(null==(r=v.flip)?void 0:r.overflows)||[];if($&&U.push(j[T]),S){let e,t,i,r,o=(c=b,h=_,void 0===(p=q)&&(p=!1),e=rG(c),i=rZ(t=rK(rX(c))),r="x"===t?e===(p?"end":"start")?"right":"left":"start"===e?"bottom":"top",h.reference[i]>h.floating[i]&&(r=r5(r)),[r,r5(r)]);U.push(j[o[0]],j[o[1]])}if(W=[...W,{placement:b,overflows:U}],!U.every(e=>e<=0)){let e=((null==(o=v.flip)?void 0:o.index)||0)+1,t=V[e];if(t&&("alignment"!==S||M===rX(t)||W.every(e=>rX(e.placement)!==M||e.overflows[0]>0)))return{data:{index:e,overflows:W},reset:{placement:t}};let i=null==(s=W.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:s.placement;if(!i)switch(A){case"bestFit":{let e=null==(a=W.filter(e=>{if(N){let t=rX(e.placement);return t===M||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(i=e);break}case"initialPlacement":i=w}if(b!==i)return{reset:{placement:i}}}return{}}}),this.shift&&g.push({name:"shift",options:i={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:r,placement:o}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:c={fn:e=>{let{x:t,y:i}=e;return{x:t,y:i}}},...h}=rH(i,e),p={x:t,y:r},g=await r4(e,h),f=rX(rW(o)),m=rK(f),b=p[m],v=p[f];if(s){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",i=b+g[e],r=b-g[t];b=rq(i,rB(b,r))}if(a){let e="y"===f?"top":"left",t="y"===f?"bottom":"right",i=v+g[e],r=v-g[t];v=rq(i,rB(v,r))}let _=c.fn({...e,[m]:b,[f]:v});return{..._,data:{x:_.x-t,y:_.y-r,enabled:{[m]:s,[f]:a}}}}}),this.autoSize?g.push(oV({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&g.push({name:"arrow",options:a={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:i,placement:r,rects:o,platform:s,elements:c,middlewareData:h}=e,{element:p,padding:g=0}=rH(a,e)||{};if(null==p)return{};let f=r3(g),m={x:t,y:i},b=rK(rX(r)),v=rZ(b),_=await s.getDimensions(p),w="y"===b,x=w?"clientHeight":"clientWidth",C=o.reference[v]+o.reference[b]-m[b]-o.floating[v],$=m[b]-o.reference[b],S=await (null==s.getOffsetParent?void 0:s.getOffsetParent(p)),E=S?S[x]:0;E&&await (null==s.isElement?void 0:s.isElement(S))||(E=c.floating[x]||o.floating[v]);let A=E/2-_[v]/2-1,P=rB(f[w?"top":"left"],A),D=rB(f[w?"bottom":"right"],A),O=E-_[v]-D,T=E/2-_[v]/2+(C/2-$/2),M=rq(P,rB(T,O)),B=!h.arrow&&null!=rG(r)&&T!==M&&o.reference[v]/2-(T<P?P:D)-_[v]/2<0,q=B?T<P?T-P:T-O:0;return{[b]:m[b]+q,data:{[b]:M,centerOffset:T-M-q,...B&&{alignmentOffset:q}},reset:B}}});let f="absolute"===this.strategy?e=>oF.getOffsetParent(e,oU):oF.getOffsetParent;(r=this.anchorEl,o=this.popup,s={placement:this.placement,middleware:g,strategy:this.strategy,platform:rS(rD({},oF),rA({getOffsetParent:f}))},c=new Map,p={...(h={platform:oF,...s}).platform,_c:c},r7(r,o,{...h,platform:p})).then(({x:e,y:t,middlewareData:i,placement:r})=>{let o="rtl"===this.localize.dir(),s={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=i.arrow.x,t=i.arrow.y,r="",a="",c="",h="";if("start"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=o?i:"",h=o?"":i}else if("end"===this.arrowPlacement){let i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=o?"":i,h=o?i:"",c="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(h="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",r="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(h="number"==typeof e?`${e}px`:"",r="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:r,right:a,bottom:c,left:h,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return ew`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${oj({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${oj({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ew`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};oW.styles=[rC,rg],rO([eq(".popup")],oW.prototype,"popup",2),rO([eq(".popup__arrow")],oW.prototype,"arrowEl",2),rO([eT()],oW.prototype,"anchor",2),rO([eT({type:Boolean,reflect:!0})],oW.prototype,"active",2),rO([eT({reflect:!0})],oW.prototype,"placement",2),rO([eT({reflect:!0})],oW.prototype,"strategy",2),rO([eT({type:Number})],oW.prototype,"distance",2),rO([eT({type:Number})],oW.prototype,"skidding",2),rO([eT({type:Boolean})],oW.prototype,"arrow",2),rO([eT({attribute:"arrow-placement"})],oW.prototype,"arrowPlacement",2),rO([eT({attribute:"arrow-padding",type:Number})],oW.prototype,"arrowPadding",2),rO([eT({type:Boolean})],oW.prototype,"flip",2),rO([eT({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],oW.prototype,"flipFallbackPlacements",2),rO([eT({attribute:"flip-fallback-strategy"})],oW.prototype,"flipFallbackStrategy",2),rO([eT({type:Object})],oW.prototype,"flipBoundary",2),rO([eT({attribute:"flip-padding",type:Number})],oW.prototype,"flipPadding",2),rO([eT({type:Boolean})],oW.prototype,"shift",2),rO([eT({type:Object})],oW.prototype,"shiftBoundary",2),rO([eT({attribute:"shift-padding",type:Number})],oW.prototype,"shiftPadding",2),rO([eT({attribute:"auto-size"})],oW.prototype,"autoSize",2),rO([eT()],oW.prototype,"sync",2),rO([eT({type:Object})],oW.prototype,"autoSizeBoundary",2),rO([eT({attribute:"auto-size-padding",type:Number})],oW.prototype,"autoSizePadding",2),rO([eT({attribute:"hover-bridge",type:Boolean})],oW.prototype,"hoverBridge",2),oW.define("sl-popup");var oG=Object.defineProperty,oK=Object.getOwnPropertyDescriptor,oZ=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?oK(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&oG(t,i,s),s};let oQ=class extends GlElement{constructor(){super(),this.placement="bottom",this.disabled=!1,this.distance=8,this.open=!1,this.arrow=!0,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleTriggerBlur=e=>{this.open&&this.hasTrigger("focus")&&(e.relatedTarget&&this.contains(e.relatedTarget)||this.hide())},this.handleTriggerClick=e=>{if(this.hasTrigger("click"))if(this.open&&"hover"!==this._triggeredBy){if(this._skipHideOnClick){this._skipHideOnClick=!1;return}if(e.composedPath().includes(this.body))return;this.hide()}else this.show("click")},this._skipHideOnClick=!1,this.handleTriggerMouseDown=()=>{this.hasTrigger("click")&&this.hasTrigger("focus")&&!this.matches(":focus-within")?this._skipHideOnClick=!0:this._skipHideOnClick=!1},this.handleTriggerFocus=()=>{this.hasTrigger("focus")&&(this.open&&"hover"!==this._triggeredBy&&!this.hasPopupFocus()?this.hide():this.show("focus"))},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handlePopupBlur=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleWebviewBlur=()=>{this.hide()},this.handleWebviewMouseDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.body)||this.hide()},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let e=i_(getComputedStyle(this).getPropertyValue("--show-delay"));this.hoverTimeout=setTimeout(()=>this.show("hover"),e)}},this.handleMouseOut=e=>{if(this.hasTrigger("hover")){clearTimeout(this.hoverTimeout);let t=e.composedPath();if(t[t.length-2]===this||this.hasPopupFocus()||"hover"!==this._triggeredBy)return;let i=i_(getComputedStyle(this).getPropertyValue("--hide-delay"));this.hoverTimeout=setTimeout(()=>this.hide(),i)}},this.addEventListener("blur",this.handleTriggerBlur,!0),this.addEventListener("focus",this.handleTriggerFocus,!0),this.addEventListener("click",this.handleTriggerClick),this.addEventListener("mousedown",this.handleTriggerMouseDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}static closeOthers(e){for(let t of oQ.openPopovers)t===e||t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINS||t.hide()}get currentPlacement(){return this.popup?.getAttribute("data-current-placement")??this.placement}disconnectedCallback(){this.closeWatcher?.destroy(),document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleWebviewMouseDown),oQ.openPopovers.delete(this),super.disconnectedCallback?.()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}render(){return ew`<sl-popup
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
		</sl-popup>`}async show(e){if((null==this._triggeredBy||"hover"!==e)&&(this._triggeredBy=e),!this.open)return oQ.closeOthers(this),this.open=!0,oQ.openPopovers.add(this),iw(this,"gl-popover-after-show")}async hide(){if(this._triggeredBy=void 0,this.open)return this.open=!1,oQ.openPopovers.delete(this),iw(this,"gl-popover-after-hide")}hasPopupFocus(){return this.matches(':has([slot="content"]:focus-within)')}hasTrigger(e){return this.trigger.split(" ").includes(e)}handleOpenChange(){this.open?this.disabled||(this.emit("gl-popover-show"),"CloseWatcher"in window?(this.closeWatcher?.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>void this.hide()):document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("focusin",this.handlePopupBlur),window.addEventListener("webview-blur",this.handleWebviewBlur,!1),(this.hasTrigger("click")||this.hasTrigger("focus"))&&document.addEventListener("mousedown",this.handleWebviewMouseDown),this.body.hidden=!1,this.popup.active=!0,this.popup.reposition(),this.emit("gl-popover-after-show")):(document.removeEventListener("focusin",this.handlePopupBlur),window.removeEventListener("webview-blur",this.handleWebviewBlur,!1),document.removeEventListener("mousedown",this.handleWebviewMouseDown),this.emit("gl-popover-hide"),this.closeWatcher?.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),this.popup.active=!1,this.body.hidden=!0,this.emit("gl-popover-after-hide"))}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}};function oX(e,t){return null==t?`command:${e}`:`command:${e}?${encodeURIComponent("string"==typeof t?t:JSON.stringify(t))}`}oQ.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},oQ.openPopovers=new Set,oQ.styles=[iV,T`
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
		`],oZ([eq("#popover")],oQ.prototype,"body",2),oZ([eq("sl-popup")],oQ.prototype,"popup",2),oZ([eT({reflect:!0})],oQ.prototype,"placement",2),oZ([eT({type:Object})],oQ.prototype,"anchor",2),oZ([eT({reflect:!0,type:Boolean})],oQ.prototype,"disabled",2),oZ([eT({type:Number})],oQ.prototype,"distance",2),oZ([eT({reflect:!0,type:Boolean})],oQ.prototype,"open",2),oZ([eT({reflect:!0,type:Boolean})],oQ.prototype,"arrow",2),oZ([eT({type:Number})],oQ.prototype,"skidding",2),oZ([eT()],oQ.prototype,"trigger",2),oZ([eT({type:Boolean})],oQ.prototype,"hoist",2),oZ([eT({reflect:!0})],oQ.prototype,"appearance",2),oZ([tC("open",{afterFirstUpdate:!0})],oQ.prototype,"handleOpenChange",1),oZ([tC(["distance","hoist","placement","skidding"])],oQ.prototype,"handleOptionsChange",1),oZ([tC("disabled")],oQ.prototype,"handleDisabledChange",1),oQ=oZ([eD("gl-popover")],oQ);let oJ=T`
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
`,oY=T`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;var o0=new Map,o1=new WeakMap;function o2(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function o5(e,t){o0.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function o3(e,t,i){let r=o1.get(e);if(null==r?void 0:r[t])return o2(r[t],i.dir);let o=o0.get(t);return o?o2(o,i.dir):{keyframes:[],options:{duration:0}}}let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=e$,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===e$||null==e)return this._t=void 0,this.it=e;if(e===eC)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let o8=eF(unsafe_html_e);var o6=T`
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
`;function o7(e,t){return new Promise(i=>{e.addEventListener(t,function r(o){o.target===e&&(e.removeEventListener(t,r),i())})})}function o4(e,t,i){return new Promise(r=>{if((null==i?void 0:i.duration)===1/0)throw Error("Promise-based animations must be finite.");let o=e.animate(t,rS(rD({},i),rA({duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:i.duration})));o.addEventListener("cancel",r,{once:!0}),o.addEventListener("finish",r,{once:!0})})}function o9(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function se(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function st(e,t){let i=rD({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:o}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach(t=>{if(e.has(t)){let o=e.get(t),s=this[t];o!==s&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](o,s)}}),o.call(this,e)}}}var si=class extends rM{constructor(){super(),this.localize=new rk(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=o9(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=o9(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await se(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:i}=o3(this,"tooltip.show",{dir:this.localize.dir()});await o4(this.popup.popup,t,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await se(this.body);let{keyframes:e,options:i}=o3(this,"tooltip.hide",{dir:this.localize.dir()});await o4(this.popup.popup,e,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,o7(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,o7(this,"sl-after-hide")}render(){return ew`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${oj({tooltip:!0,"tooltip--open":this.open})}
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
    `}};si.styles=[rC,o6],si.dependencies={"sl-popup":oW},rO([eq("slot:not([name])")],si.prototype,"defaultSlot",2),rO([eq(".tooltip__body")],si.prototype,"body",2),rO([eq("sl-popup")],si.prototype,"popup",2),rO([eT()],si.prototype,"content",2),rO([eT()],si.prototype,"placement",2),rO([eT({type:Boolean,reflect:!0})],si.prototype,"disabled",2),rO([eT({type:Number})],si.prototype,"distance",2),rO([eT({type:Boolean,reflect:!0})],si.prototype,"open",2),rO([eT({type:Number})],si.prototype,"skidding",2),rO([eT()],si.prototype,"trigger",2),rO([eT({type:Boolean})],si.prototype,"hoist",2),rO([st("open",{waitUntilFirstUpdate:!0})],si.prototype,"handleOpenChange",1),rO([st(["content","distance","hoist","placement","skidding"])],si.prototype,"handleOptionsChange",1),rO([st("disabled")],si.prototype,"handleDisabledChange",1),o5("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),o5("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),si.define("sl-tooltip");var sr=Object.defineProperty,so=Object.getOwnPropertyDescriptor,ss=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?so(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&sr(t,i,s),s};o5("tooltip.show",null),o5("tooltip.hide",null);let sn=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.suppressed=!1,this.onMouseDown=e=>{this.suppressed=!0,this.hide()},this.onMouseUp=e=>{this.suppressed=!1},this.onDragStart=e=>{this.suppressed=!0,this.hide()},this.onDragEnd=e=>{this.suppressed=!1}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("dragstart",this.onDragStart,{capture:!0}),window.addEventListener("dragend",this.onDragEnd,{capture:!0})}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),this.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("dragstart",this.onDragStart,{capture:!0}),window.removeEventListener("dragend",this.onDragEnd,{capture:!0}),super.disconnectedCallback?.()}async hide(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.hide()}async show(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.show()}render(){var e;return ew`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled||this.suppressed}
			.distance=${this.distance??e$}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?o8(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};sn.styles=T`
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
	`,ss([eT()],sn.prototype,"content",2),ss([eT({reflect:!0})],sn.prototype,"placement",2),ss([eT({type:Boolean})],sn.prototype,"disabled",2),ss([eT({type:Number})],sn.prototype,"distance",2),ss([eT({type:Boolean,attribute:"hide-on-click"})],sn.prototype,"hideOnClick",2),ss([eT({type:Boolean})],sn.prototype,"hoist",2),ss([eM()],sn.prototype,"suppressed",2),sn=ss([eD("gl-tooltip")],sn);var sa=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,sc=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?sl(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&sa(t,i,s),s};let sh=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?ew`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??e$}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?ew`<gl-tooltip placement=${this.tooltipPlacement??e$}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?ew`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??e$}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:ew`<button
			class="control"
			role=${this.role??e$}
			aria-checked=${this.ariaChecked??e$}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};sh.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sh.styles=[iN,T`
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
				${iF}
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
		`],sc([eq(".control")],sh.prototype,"control",2),sc([eT({reflect:!0})],sh.prototype,"appearance",2),sc([eT({reflect:!0})],sh.prototype,"variant",2),sc([eT({type:Boolean,reflect:!0})],sh.prototype,"disabled",2),sc([eT({reflect:!0})],sh.prototype,"density",2),sc([eT({type:Boolean,reflect:!0})],sh.prototype,"full",2),sc([eT()],sh.prototype,"href",2),sc([eT()],sh.prototype,"tooltip",2),sc([eT()],sh.prototype,"tooltipPlacement",2),sc([eT({type:Boolean,reflect:!0})],sh.prototype,"truncate",2),sh=sc([eD("gl-button")],sh);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let sd=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!sd(e))??eC}update(e,t){let i=this._$Cbt,r=i.length;this._$Cbt=t;let o=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let a=t[e];if(!sd(a))return this._$Cwt=e,a;e<r&&a===i[e]||(this._$Cwt=0x3fffffff,r=0,Promise.resolve(a).then(async e=>{for(;s.get();)await s.get();let t=o.deref();if(void 0!==t){let i=t._$Cbt.indexOf(a);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return eC}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let sp=eF(until_c);var su=Object.defineProperty,sg=Object.getOwnPropertyDescriptor,sf=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?sg(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&su(t,i,s),s};let sm=class extends lit_element_i{constructor(){super(...arguments),this.type="info",this._hasPromo=!1}get hasPromo(){return this._hasPromo}set hasPromo(e){this._hasPromo=e}render(){return ew`${sp(this.promoPromise?.then(e=>this.renderPromo(e)),e$)}`}renderPromo(e){if(!e?.content?.webview){this.hasPromo=!1;return}let t=e.content.webview;switch(this.type){case"icon":return ew`<code-icon icon="star-full" size="16"></code-icon>`;case"info":if(t.info)return this.hasPromo=!0,ew`<p class="promo" part="text">${o8(t.info.html)}</p>`;break;case"link":if(t.link)return this.hasPromo=!0,ew`<a
						class="link"
						part="link"
						href="${this.getCommandUrl(e)}"
						title="${t.link.title??e$}"
						>${o8(t.link.html)}</a
					>`}return this.hasPromo=!1,e$}getCommandUrl(e){let t;return e?.content?.webview?.link?.command?.startsWith("command:")&&(t=e.content.webview.link.command.substring(8)),oX(t??"gitlens.plus.upgrade",this.source)}focus(){this._focusable?.focus()}};sm.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},sm.styles=[T`
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
				${iq}
			}

			.link:hover {
				color: inherit;
				text-decoration: underline;
			}
		`],sf([eq('a,button,[tabindex="0"]')],sm.prototype,"_focusable",2),sf([eT({type:Object})],sm.prototype,"promoPromise",2),sf([eT({type:Object})],sm.prototype,"source",2),sf([eT({reflect:!0,type:String})],sm.prototype,"type",2),sf([eT({type:Boolean,reflect:!0,attribute:"has-promo"})],sm.prototype,"hasPromo",1),sm=sf([eD("gl-promo")],sm);var sb=Object.defineProperty,sv=Object.getOwnPropertyDescriptor,sy=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?sv(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&sb(t,i,s),s};let s_=class extends lit_element_i{firstUpdated(){"alert"===this.appearance&&queueMicrotask(()=>this.button.focus())}render(){let e=null==this.state;if(this.hidden=e,e)return;let t=(this.appearance??"alert")==="alert"?"alert":void 0;switch(this.state){case rs.VerificationRequired:return ew`
					<slot name="feature"></slot>
					<p class="actions">
						<gl-button
							class="inline"
							appearance="${t??e$}"
							href="${oX("gitlens.plus.resendVerification",this.source)}"
							>Resend Email</gl-button
						>
						<gl-button
							class="inline"
							appearance="${t??e$}"
							href="${oX("gitlens.plus.validate",this.source)}"
							><code-icon icon="refresh"></code-icon
						></gl-button>
					</p>
					<p>You must verify your email before you can continue.</p>
				`;case rs.Community:if(this.featurePreview&&"expired"!==function(e){let t=e?.usages;if(!t?.length)return"eligible";let i=(new Date(t[t.length-1].expiresOn).getTime()-Date.now())/36e5;return t.length<=3&&i>0&&i<24?"active":"expired"}(this.featurePreview))return ew`${this.renderFeaturePreview(this.featurePreview)}`;return ew`<slot name="feature"></slot>
					<p>
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${eK.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??e$}"
							href="${oX("gitlens.plus.signUp",this.source)}"
							>&nbsp;Try GitLens Pro&nbsp;</gl-button
						><span
							>or
							<a href="${oX("gitlens.plus.login",this.source)}" title="Sign In"
								>sign in</a
							></span
						>
					</p>
					<p>
						Get ${eJ("day",14)} of
						<a href="${eK.communityVsPro}">GitLens Pro</a> for free — no credit card required.
					</p>`;case rs.TrialExpired:return ew`<slot name="feature"></slot>
					<p>
						${"private-repos"===this.featureRestriction?"Unlock this feature for privately hosted repos with ":"Unlock this feature with "} <a href="${eK.communityVsPro}">GitLens Pro</a>.
					</p>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??e$}"
							href="${oX("gitlens.plus.upgrade",{plan:"pro",...this.source??{source:"feature-gate"}})}"
							>Upgrade to Pro</gl-button
						>
					</p>
					<p>${this.renderPromo()}</p>`;case rs.TrialReactivationEligible:return ew`<slot name="feature"></slot>
					<p class="actions-row">
						<gl-button
							class="inline"
							appearance="${t??e$}"
							href="${oX("gitlens.plus.reactivateProTrial",this.source)}"
							>Continue</gl-button
						>
					</p>
					<p>
						Reactivate your GitLens Pro trial and experience
						${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} and `:""}all the new
						Pro features — free for another ${eJ("day",14)}!
					</p> `}}renderFeaturePreview(e){let t=(this.appearance??"alert")==="alert"?"alert":void 0,i=e.usages.length;return 0===i?ew`<slot name="feature"></slot>
				<gl-button appearance="${t??e$}" href="${this.featurePreviewCommandLink??e$}"
					>Continue</gl-button
				>
				<p>
					Continue to preview
					${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately hosted
					repos, or
					<a href="${oX("gitlens.plus.login",this.source)}" title="Sign In">sign in</a
					>.<br />
					${"alert"!==t?ew`<br />`:""} For full access to all GitLens Pro features,
					<a href="${oX("gitlens.plus.signUp",this.source)}"
						>start your free ${14}-day Pro trial</a
					>
					— no credit card required.
				</p> `:ew`
			${this.renderFeaturePreviewStep(e,i)}
			<p class="actions-row">
				<gl-button
					class="inline"
					appearance="${t??e$}"
					href="${this.featurePreviewCommandLink??e$}"
					>Continue Preview</gl-button
				><span
					>or
					<a href="${oX("gitlens.plus.login",this.source)}" title="Sign In"
						>sign in</a
					></span
				>
			</p>
			<p>
				After continuing, you will have ${eJ("day",3-i,{infix:" more "})} to preview
				${this.featureWithArticleIfNeeded?`${this.featureWithArticleIfNeeded} on`:""} privately hosted
				repos.<br />
				${"alert"!==t?ew`<br />`:""} For full access to all GitLens Pro features,
				<a href="${oX("gitlens.plus.signUp",this.source)}"
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
		></gl-promo>`}};s_.styles=[T`
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
		`,oJ],sy([eq("gl-button")],s_.prototype,"button",2),sy([eT()],s_.prototype,"appearance",2),sy([eT({type:Object})],s_.prototype,"featurePreview",2),sy([eT()],s_.prototype,"featurePreviewCommandLink",2),sy([eT()],s_.prototype,"featureRestriction",2),sy([eT()],s_.prototype,"featureWithArticleIfNeeded",2),sy([tg({context:"promos"})],s_.prototype,"promos",2),sy([eT({type:Object})],s_.prototype,"source",2),sy([eT({attribute:!1,type:Number})],s_.prototype,"state",2),sy([eT()],s_.prototype,"webroot",2),s_=sy([eD("gl-feature-gate-plus-state")],s_);var sw=Object.defineProperty,sx=Object.getOwnPropertyDescriptor,sk=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?sx(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&sw(t,i,s),s};let sC=class extends lit_element_i{constructor(){super(...arguments),this.compact=!1,this.stale=!1,this._loading=!1,this._loaded=!1}get isLoading(){return this._loading}get hasConflicts(){return this._conflicts?.status==="conflicts"&&this._conflicts.conflict.files.length>0}get conflictingShas(){return this._conflicts?.status==="conflicts"?this._conflicts.conflict.shas:void 0}connectedCallback(){super.connectedCallback?.(),this.fetchConflicts()}willUpdate(e){if(super.willUpdate(e),e.has("_state")){let t=e.get("_state"),i=rn(t?.subscription?.state),r=rn(this._state?.subscription?.state);i||!r||this._loaded||this._loading||this.fetchConflicts()}}async fetchConflicts(){if(!this.onto||this._loading||this._loaded)return;let e=this._state?.entries?.map(e=>e.sha).filter(e=>null!=e);if(e?.length){this._loading=!0,this.dispatchStateChange(),this.requestUpdate();try{let t=await this._ipc.sendRequest(tl,{onto:this.onto,commits:e,stopOnFirstConflict:!1});this._conflicts=t.conflicts,this._loaded=!0}catch(e){this._loaded=!0}finally{this._loading=!1,this.dispatchStateChange(),this.requestUpdate()}}}dispatchStateChange(){this.dispatchEvent(new CustomEvent("conflict-state-change",{bubbles:!0,composed:!0,detail:{isLoading:this._loading,hasConflicts:this.hasConflicts,conflictingShas:this.conflictingShas}}))}render(){return this._loading?this.renderLoading():rn(this._state?.subscription?.state)?this._conflicts?.status==="error"?this.renderError():this._conflicts?.status!=="conflicts"?this.renderClean():this.renderConflicts():this.renderUpgrade()}renderLoading(){return ew`
			<div class="indicator indicator--loading">
				<code-icon class="indicator__icon" icon="loading~spin" size="16"></code-icon>
				${this.compact?e$:ew`<span class="indicator__content">Checking for conflicts...</span>`}
			</div>
		`}renderError(){let e=this._conflicts?.status==="error"?this._conflicts.message:"Unable to detect conflicts";return this.compact?ew`
				<gl-popover placement="top" trigger="hover click focus" hoist>
					<div slot="anchor" class="indicator indicator--error" tabindex="0">
						<code-icon class="indicator__icon" icon="error" size="16"></code-icon>
					</div>
					<div slot="content">
						<div class="popover">
							<p class="popover__title">Conflict Detection Unavailable</p>
							<p class="popover__message">${e}</p>
						</div>
					</div>
				</gl-popover>
			`:ew`
			<gl-popover placement="bottom" trigger="hover click focus" hoist>
				<div slot="anchor" class="indicator indicator--error" tabindex="0">
					<code-icon class="indicator__icon" icon="error" size="16"></code-icon>
					<span class="indicator__content">Conflict Detection Unavailable</span>
				</div>
				<div slot="content">
					<div class="popover">
						<p class="popover__title">Conflict Detection Unavailable</p>
						<p class="popover__message">${e}</p>
					</div>
				</div>
			</gl-popover>
		`}renderClean(){let e=this.stale?"indicator--stale":"";return this.compact?ew`
				<gl-popover placement="top" trigger="hover click focus" hoist>
					<div slot="anchor" class="indicator indicator--clean ${e}" tabindex="0">
						<code-icon class="indicator__icon" icon="pass" size="16"></code-icon>
					</div>
					<div slot="content">
						<div class="popover">
							<p class="popover__title">No Conflicts Detected</p>
							<p class="popover__message">This rebase should complete without conflicts.</p>
							${this.stale?ew`<p class="popover__message popover__message--warning">
										Detection may be stale. Rebase plan was modified after conflict check.
									</p>`:e$}
						</div>
					</div>
				</gl-popover>
			`:ew`
			<gl-popover placement="bottom" trigger="hover click focus" hoist>
				<div slot="anchor" class="indicator indicator--clean ${e}" tabindex="0">
					<code-icon class="indicator__icon" icon="pass" size="16"></code-icon>
					<span class="indicator__content"
						>${this.stale?"No Conflicts Detected (may be stale)":"No Conflicts Detected"}</span
					>
				</div>
				<div slot="content">
					<div class="popover">
						<p class="popover__title">No Conflicts Detected</p>
						<p class="popover__message">This rebase should complete without conflicts.</p>
						${this.stale?ew`<p class="popover__message popover__message--warning">
									Detection may be stale. Rebase plan was modified after conflict check.
								</p>`:e$}
					</div>
				</div>
			</gl-popover>
		`}renderConflicts(){if(this._conflicts?.status!=="conflicts")return e$;let e=this.stale?"indicator--stale":"",t=this._conflicts.conflict.files,i=t.length;return this.compact?ew`
				<gl-popover placement="top" trigger="hover click focus" hoist>
					<div slot="anchor" class="indicator indicator--conflict ${e}" tabindex="0">
						<code-icon class="indicator__icon" icon="warning" size="16"></code-icon>
					</div>
					<div slot="content">
						<div class="popover">
							<p class="popover__title">Potential Conflicts Detected</p>
							<p class="popover__message">
								This rebase will cause conflicts in ${eJ("file",i)}:
							</p>
							<ul class="popover__files scrollable">
								${t.map(e=>ew`<li class="popover__file">${e.path}</li>`)}
							</ul>
							${this.stale?ew`<p class="popover__message popover__message--warning">
										Detection may be stale. Rebase plan was modified after conflict check.
									</p>`:e$}
						</div>
					</div>
				</gl-popover>
			`:ew`
			<gl-popover placement="bottom" trigger="hover click focus" hoist>
				<div slot="anchor" class="indicator indicator--conflict ${e}" tabindex="0">
					<code-icon class="indicator__icon" icon="warning" size="16"></code-icon>
					<span class="indicator__content"
						>${i} Conflict${1===i?"":"s"}
						Detected${this.stale?" (may be stale)":""}</span
					>
				</div>
				<div slot="content">
					<div class="popover">
						<p class="popover__title">Potential Conflicts Detected</p>
						<p class="popover__message">
							This rebase will cause conflicts in ${eJ("file",i)}:
						</p>
						<ul class="popover__files scrollable">
							${t.map(e=>ew`<li class="popover__file">${e.path}</li>`)}
						</ul>
						${this.stale?ew`<p class="popover__message popover__message--warning">
									Detection may be stale. Rebase plan was modified after conflict check.
								</p>`:e$}
					</div>
				</div>
			</gl-popover>
		`}renderUpgrade(){let e=this.compact?"top":"bottom";return ew`
			<gl-popover placement="${e}" trigger="hover click focus" hoist>
				<div slot="anchor" class="indicator indicator--upgrade" tabindex="0">
					<code-icon class="indicator__icon" icon="lock" size="16"></code-icon>
					${this.compact?e$:ew`<span class="indicator__content">Conflict Detection (Pro)</span>`}
				</div>
				<gl-feature-gate-plus-state
					slot="content"
					appearance="default"
					featureRestriction="all"
					.source=${{source:"rebaseEditor",detail:"conflict-detection"}}
					.state=${this._state?.subscription?.state}
				>
					<p slot="feature">
						Detect potential conflicts before starting your rebase and take action to resolve them.
					</p>
				</gl-feature-gate-plus-state>
			</gl-popover>
		`}};sC.styles=[iN,iV,T`
			:host {
				display: inline-block;
			}

			gl-popover {
				--max-width: 80vw;
			}

			.indicator {
				position: relative;
				display: inline-flex;
				align-items: center;
				gap: 0.6rem;
				cursor: pointer;
			}

			/* Compact mode (icon only) */
			:host([compact]) .indicator {
				gap: 0;
			}

			:host([compact]) .indicator__content {
				display: none;
			}

			/* Button mode (full) */
			:host(:not([compact])) .indicator {
				padding: 0.4rem 0.8rem;
				border-radius: 0.3rem;
				background-color: var(--vscode-button-secondaryBackground);
				border: 1px solid var(--vscode-button-secondaryBorder, transparent);
				font-size: 1.2rem;
			}

			.indicator__icon {
				flex: none;
				font-size: 1.6rem;
			}

			.indicator__content {
				flex: 1;
				min-width: 0;
				white-space: nowrap;
				font-weight: 500;
			}

			/* Clean state - green */
			.indicator--clean {
				background-color: color-mix(in srgb, var(--vscode-testing-iconPassed) 18%, transparent) !important;
				border: 1px solid color-mix(in srgb, var(--vscode-testing-iconPassed) 50%, transparent) !important;
				color: var(--vscode-foreground);
			}

			.indicator--clean .indicator__icon {
				color: var(--vscode-testing-iconPassed);
			}

			/* Conflict state - warning/orange */
			.indicator--conflict {
				background-color: color-mix(
					in srgb,
					var(--vscode-editorWarning-foreground) 18%,
					transparent
				) !important;
				border: 1px solid color-mix(in srgb, var(--vscode-editorWarning-foreground) 50%, transparent) !important;
				color: var(--vscode-foreground);
			}

			.indicator--conflict .indicator__icon {
				color: var(--vscode-editorWarning-foreground);
			}

			.indicator--upgrade .indicator__icon {
				color: var(--vscode-foreground);
				opacity: 0.6;
			}

			.indicator--stale {
				opacity: 0.6;
			}

			/* Error state - muted warning */
			.indicator--error {
				background-color: color-mix(
					in srgb,
					var(--vscode-editorWarning-foreground) 12%,
					transparent
				) !important;
				border: 1px solid color-mix(in srgb, var(--vscode-editorWarning-foreground) 30%, transparent) !important;
				color: var(--vscode-foreground);
				opacity: 0.8;
			}

			.indicator--error .indicator__icon {
				color: var(--vscode-editorWarning-foreground);
				opacity: 0.7;
			}

			/* Popover content styles */
			.popover {
				padding: 1.2rem;
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
			}

			.popover__title {
				font-weight: 600;
				margin: 0;
			}

			.popover__message {
				margin: 0;
			}

			.popover__message--warning {
				color: var(--vscode-editorWarning-foreground);
				font-weight: 500;
			}

			.popover__files {
				margin: 0;
				padding: 0.4rem 0.8rem;
				list-style: none;
				max-height: 20rem;
				overflow-y: auto;
				background: var(--vscode-sideBar-background);
			}

			.popover__file {
				padding: 0.4rem 0;
				font-family: var(--vscode-editor-font-family);
				font-size: 1.1rem;
			}

			gl-feature-gate-plus-state {
				display: block;
				margin-inline: 0.5rem;
				margin-block: -0.5rem;
			}
		`],sk([tg({context:"ipc"})],sC.prototype,"_ipc",2),sk([tg({context:"state",subscribe:!0}),eM()],sC.prototype,"_state",2),sk([eT({type:String})],sC.prototype,"branch",2),sk([eT({type:String})],sC.prototype,"onto",2),sk([eT({type:Boolean})],sC.prototype,"compact",2),sk([eT({type:Boolean})],sC.prototype,"stale",2),sk([eM()],sC.prototype,"_conflicts",2),sk([eM()],sC.prototype,"_loading",2),sk([eM()],sC.prototype,"_loaded",2),sC=sk([eD("gl-rebase-conflict-indicator")],sC);let s$=new Set(["pick","reword","edit","squash","fixup","drop"]),sS=T`
	:host {
		/* Dark theme action colors */
		--action-edit-color: hsl(120, 100%, 30%);
		--action-edit-bg: hsl(120, 100%, 10%);

		--action-squash-color: hsl(38, 100%, 42%);
		--action-squash-bg: hsl(38, 100%, 10%);

		--action-drop-color: hsl(0, 100%, 40%);
		--action-drop-bg: hsl(0, 100%, 10%);

		/* Muted text intensity */
		--fg-muted-intensity: 60%;

		--muted-opacity: 0.4;

		display: block;
		width: 100%;
		box-sizing: border-box;
		cursor: grab;

		&:hover {
			z-index: 100;
		}
	}

	/* Disable grab cursor when reordering is disabled (preserves merges) */
	:host-context(.preserves-merges) {
		cursor: default;
	}

	/* Light theme overrides */
	:host-context(.vscode-light),
	:host-context(.vscode-high-contrast-light) {
		/* Brighter, more saturated colors for visibility on light backgrounds */
		--action-edit-color: hsl(130, 100%, 32%);
		--action-edit-bg: hsl(120, 70%, 78%);

		--action-squash-color: hsl(46, 100%, 46%);
		--action-squash-bg: hsl(55, 85%, 70%);

		--action-drop-color: hsl(355, 100%, 40%);
		--action-drop-bg: hsl(355, 80%, 82%);

		--fg-muted-intensity: 70%;
	}

	/* Raise z-index only when overlays are open/hovered/focused to escape row stacking contexts */
	:host:has(sl-select[open]),
	:host:has(gl-popover[open]),
	:host:has(gl-tooltip:hover),
	:host:has(gl-tooltip:focus-within),
	:host:has(gl-avatar-list:hover),
	:host:has(gl-avatar-list:focus-within),
	:host:has(gl-ref-overflow-chip:hover),
	:host:has(gl-ref-overflow-chip:focus-within) {
		z-index: 1000;
	}

	.entry {
		/*
		 * Two-layer foreground color system:
		 * --fg-color: base color that changes per state (hover/focus/selected)
		 * --fg-intensity: caps brightness, action types can reduce (e.g. drop = 50%)
		 * --fg: computed from both, used for primary text
		 * --fg-muted: derived from --fg for secondary text (date, sha)
		 */
		--fg-color: var(--color-foreground);
		--fg-intensity: 100%;
		--fg: color-mix(in srgb, var(--fg-color) var(--fg-intensity), transparent);
		--fg-muted: color-mix(in srgb, var(--fg) var(--fg-muted-intensity), transparent);

		--action-color: var(--color-foreground--65);
		--action-line-color: var(--color-foreground--65);
		--action-text-decoration: none;

		--entry-bg: var(--color-background);

		--sl-input-background-color: var(--color-background);
		--sl-input-color: var(--color-foreground);
		--sl-input-color-hover: var(--color-foreground);
		--sl-input-color-disabled: var(--color-foreground);

		display: flex;
		align-items: center;
		gap: 1rem;
		position: relative;
		padding-inline: 1rem;
		padding-block: var(--gl-rebase-entry-padding-block, 0.2rem);
		border-radius: 0.3rem;
		box-sizing: border-box;
		color: var(--fg);
		width: 100%;

		&:hover {
			--fg-color: var(--vscode-list-activeSelectionForeground, var(--color-foreground));
			--entry-bg: var(--vscode-list-hoverBackground);

			background-color: var(--vscode-list-hoverBackground);
		}

		&:focus,
		&:focus-within {
			--fg-color: var(--vscode-list-activeSelectionForeground, var(--color-foreground));

			background-color: var(--vscode-list-focusBackground);
			box-shadow: 0 0 0 1px var(--vscode-list-focusOutline) inset;
			outline: none;
		}

		&.entry--selected {
			--fg-color: var(--vscode-list-activeSelectionForeground, var(--color-foreground));
			--entry-bg: var(--vscode-list-activeSelectionBackground);

			background-color: var(--vscode-list-activeSelectionBackground);
		}

		&.entry--first {
			.entry-graph::before {
				inset-block: 50% var(--gl-rebase-entry-graph-offset, -0.225rem);
			}
		}

		&.entry--last {
			.entry-graph::before {
				inset-block: var(--gl-rebase-entry-graph-offset, -0.225rem) 50%;
			}
		}

		/* Done entries - already applied commits */
		&.entry--done {
			--fg-intensity: 50%;
			--action-line-color: var(--color-foreground--50);
			/* Override default transparent action color with opaque muted gray for pick */
			--action-color: color-mix(in srgb, var(--color-foreground) 50%, var(--vscode-editor-background));

			background: var(--vscode-list-inactiveSelectionBackground);
			cursor: default;

			/* Filled circle for done entries */
			.entry-graph::after {
				border-color: transparent;
				background-color: var(--action-color);
			}

			/* Disabled select for done entries */
			.action-select {
				pointer-events: none;
				opacity: 0.6;

				/* Hide chevron for disabled selects */
				code-icon[slot='expand-icon'] {
					display: none;
				}
			}
		}

		/* Current entry - commit being processed (paused) */
		&.entry--current {
			--fg-intensity: 100%;

			background-color: color-mix(in srgb, var(--current-entry-color) 25%, transparent);
			outline: 1px solid color-mix(in srgb, var(--current-entry-color) 50%, transparent);
			outline-offset: -1px;

			.action-select {
				opacity: 1;
			}
		}

		/* Conflict entry - commit that will cause conflicts */
		&.entry--conflict {
			--fg-intensity: 100%;
			--conflict-color: var(
				--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor,
				#c74e39
			);

			background-color: color-mix(in srgb, var(--conflict-color) 25%, transparent);
			outline: 1px solid color-mix(in srgb, var(--conflict-color) 50%, transparent);
			outline-offset: -1px;

			.action-select {
				opacity: 1;
			}

			.entry-conflict-indicator {
				display: flex;
			}
		}
	}

	/* Conflict indicator - hidden by default, shown on conflict entries */
	.entry-conflict-indicator {
		display: none;
		align-items: center;
		justify-content: center;
		flex: 0 0 auto;
		padding-inline: 0.4rem;
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor, #c74e39);
	}

	/* Conflict popover content */
	.popover-conflict-header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.4rem;
		color: var(--vscode-gitlens-decorations\\.statusMergingOrRebasingConflictForegroundColor, #c74e39);
		font-weight: 600;

		hr {
			width: 100%;
			border: none;
			border-top: 1px solid var(--color-foreground--25);
			margin: 0.5rem 0;
		}
	}

	/* Graph node */
	.entry-graph {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		flex: 0 0 auto;
		width: 16px;
		height: var(--gl-rebase-entry-graph-height, 25px);
		z-index: 2;

		/* circle for commits */
		&::after {
			content: '';
			position: absolute;
			left: 0;
			width: 12px;
			height: 12px;
			border-radius: 50%;
			border: 2px solid var(--action-color);
			background-color: var(--entry-bg);
		}

		/* squircle for commands */
		.entry[data-type='command'] &::after {
			left: -0.2rem;
			width: 16px;
			height: 16px;
			border-radius: 0.4rem;
			z-index: -1;
		}

		/* throughline */
		&::before {
			content: '';
			position: absolute;
			inset-block: calc(-1 * var(--gl-rebase-entry-padding-block, 0.2rem));
			width: 0;
			border-right: 2px solid var(--action-line-color);
			z-index: -2;
		}
	}

	/* Action dropdown container */
	.entry-action {
		flex: 0 0 auto;
	}

	/* Done action indicator - shows the completed action text */
	.entry-action--done {
		display: flex;
		align-items: center;
		min-width: 90px;
		padding-left: 0.75rem;
		font-size: 0.9em;
		color: var(--color-foreground--50);
	}

	.action-select {
		color: var(--color-foreground);
		min-width: 90px;

		&::part(combobox) {
			padding: 0 0.75rem;
			outline: none;
		}

		&::part(display-input) {
			field-sizing: content;
		}

		&::part(expand-icon) {
			margin-inline-start: var(--sl-spacing-x-small);
		}

		&::part(listbox) {
			display: flex;
			flex-direction: column;
			gap: 0.1rem;
			padding-block: 0.2rem 0;
			min-width: anchor-size(width, 90px);
			width: max-content;
		}

		sl-option::part(base) {
			padding: 0.2rem 0.4rem;
		}

		sl-option:focus::part(base) {
			background-color: var(--vscode-list-activeSelectionBackground);
			color: var(--vscode-list-activeSelectionForeground);
		}

		sl-option:not(:focus):hover::part(base) {
			background-color: var(--vscode-list-inactiveSelectionBackground);
			color: var(--vscode-list-activeSelectionForeground);
		}

		sl-option::part(checked-icon) {
			display: none;
		}
	}

	/* Message */
	gl-popover.entry-message {
		--hide-delay: 100ms;
		--sl-z-index-tooltip: 10000;

		display: flex;
		flex: 1 1 0;
		align-self: stretch;
		min-width: 0;
		overflow: hidden;
		color: var(--fg);
		text-decoration: var(--action-text-decoration);

		&::part(body) {
			max-height: 50vh;
			overflow-y: auto;
		}
	}

	.entry-message-content {
		display: flex;
		align-items: center;
		height: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.entry-message-body {
		color: color-mix(in srgb, var(--vscode-descriptionForeground) 75%, transparent);
		margin-left: 1rem;
	}

	/* Update refs */
	.entry-update-refs {
		&:focus,
		&:focus-within {
			outline-color: var(--color-focus-border);
		}

		flex-shrink: 0;
		align-self: center;

		/* Improve chip visibility */
		--vscode-badge-background: var(--vscode-activityBarBadge-background, var(--vscode-badge-background));
		--vscode-badge-foreground: var(--vscode-activityBarBadge-foreground, var(--vscode-badge-foreground));
	}

	/* Avatar */
	.entry-avatar {
		flex: 0 0 auto;
		min-width: 4rem;
		margin: 0;

		gl-avatar-list& {
			--gl-avatar-size: 2.4rem;

			&::part(base) {
				display: flex;
				justify-content: flex-end;
			}
		}
	}

	/* Date */
	.entry-date {
		flex: 0 0 auto;
		min-width: 11ch;
		margin: 0;
		color: var(--fg-muted);
		text-align: right;
		text-decoration: var(--action-text-decoration);
	}

	/* SHA */
	.entry-sha {
		flex: 0 0 auto;
		min-width: 10ch;
		margin: 0;
		color: var(--fg-muted);
		text-decoration: var(--action-text-decoration);

		a {
			color: inherit;
			text-decoration: none;

			&:focus,
			&:focus-visible {
				outline-color: var(--color-focus-border);
			}
		}
	}

	/* ==========================================================================
	   Entry Actions
	   ========================================================================== */

	.entry[data-type='command'] {
		--action-color: var(--color-foreground--50);
		--action-line-color: var(--action-color);

		/* Muted but responds to hover/focus/selected at reduced intensity */
		--fg-intensity: 60%;

		.entry-graph code-icon {
			font-size: 13px;
			color: var(--color-foreground--65);
		}

		.action-select {
			pointer-events: none;

			&::part(combobox) {
				opacity: 0.7;
			}
		}

		.entry-message-content {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 0.9em;
			font-style: italic;

			code {
				display: inline;
				font-family: var(--vscode-editor-font-family, monospace);
				font-style: normal;
				background-color: var(--vscode-textCodeBlock-background, rgba(128, 128, 128, 0.15));
				padding: 0.15rem 0.5rem;
				border-radius: 3px;
				border: 1px solid var(--color-foreground--10);
			}
		}
	}

	.entry[data-type='base'] {
		--action-color: var(--color-foreground--25);
		--action-line-color: var(--color-foreground--25);

		/* Non-interactive - fixed muted color, doesn't respond to states */
		--fg: var(--color-foreground--65);

		background: var(--vscode-list-inactiveSelectionBackground);
		cursor: default;

		/* Filled circle for base entry - mix with background for opaque fill */
		.entry-graph::after {
			border-color: transparent;
			background-color: color-mix(in srgb, var(--color-foreground) 25%, var(--vscode-editor-background));
		}

		gl-avatar-list::part(avatar) {
			opacity: var(--muted-opacity);
		}
		gl-avatar-list:hover::part(avatar) {
			opacity: 1;
		}
	}

	.entry[data-action='edit'],
	.entry[data-action='reword'] {
		--action-color: var(--action-edit-color);
		--action-line-color: var(--action-edit-color);

		--sl-input-background-color: var(--action-edit-bg);
		--sl-input-border-color: var(--action-edit-color);
		--sl-input-border-color-focus: var(--action-edit-color);
		--sl-input-focus-ring-color: var(--action-edit-color);
	}

	.entry[data-action='fixup'],
	.entry[data-action='squash'] {
		--action-color: var(--action-squash-color);
		--action-line-color: var(--action-squash-color);
		--action-text-decoration: line-through;

		--sl-input-background-color: var(--action-squash-bg);
		--sl-input-border-color: var(--action-squash-color);
		--sl-input-border-color-focus: var(--action-squash-color);
		--sl-input-focus-ring-color: var(--action-squash-color);

		/* Muted but responds to hover/focus/selected at reduced intensity */
		--fg-intensity: 60%;

		/* No circle for squash/fixup */
		.entry-graph::after {
			display: none;
		}

		gl-avatar-list::part(avatar) {
			opacity: var(--muted-opacity);
		}
		gl-avatar-list:hover::part(avatar) {
			opacity: 1;
		}
	}

	.entry[data-action='squash'] {
		.entry-message {
			text-decoration: none;
		}
	}

	.entry[data-action='drop'] {
		--action-color: var(--action-drop-color);
		--action-line-color: var(--action-drop-color);
		--action-text-decoration: line-through;

		--sl-input-background-color: var(--action-drop-bg);
		--sl-input-border-color: var(--action-drop-color);
		--sl-input-border-color-focus: var(--action-drop-color);
		--sl-input-focus-ring-color: var(--action-drop-color);

		/* More muted but responds to hover/focus/selected at reduced intensity */
		--fg-intensity: 45%;

		/* No circle for drop */
		.entry-graph::after {
			display: none;
		}

		gl-avatar-list::part(avatar) {
			opacity: var(--muted-opacity);
		}
		gl-avatar-list:hover::part(avatar) {
			opacity: 1;
		}
	}

	.entry[data-squashing] {
		--action-line-color: var(--action-squash-color);
	}

	.entry[data-squash-target] {
		--action-color: var(--action-squash-color);

		.entry-graph::after {
			border-color: var(--action-squash-color);
		}

		:host-context(.entries.ascending) & .entry-graph::before {
			border-image: linear-gradient(to bottom, var(--action-line-color) 50%, var(--action-squash-color) 50%) 1;
		}

		:host-context(.entries.descending) & .entry-graph::before {
			border-image: linear-gradient(to bottom, var(--action-squash-color) 50%, var(--action-line-color) 50%) 1;
		}
	}
`;var sE=T`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,sA="",sz={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},sI=[{name:"default",resolver:e=>(function(e=""){if(!sA){let e=[...document.getElementsByTagName("script")],t=e.find(e=>e.hasAttribute("data-shoelace"));if(t)sA=t.getAttribute("data-shoelace");else{let t=e.find(e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)),i="";t&&(i=t.getAttribute("src")),sA=i.split("/").slice(0,-1).join("/")}}return sA.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")})(`assets/icons/${e}.svg`)},{name:"system",resolver:e=>e in sz?`data:image/svg+xml,${encodeURIComponent(sz[e])}`:""}],sP=[];function sR(e){return sI.find(t=>t.name===e)}var sL=T`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,sD=Symbol(),sO=Symbol(),sT=new Map,sM=class extends rM{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var i;let r;if(null==t?void 0:t.spriteSheet)return this.svg=ew`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(!(r=await fetch(e,{mode:"cors"})).ok)return 410===r.status?sD:sO}catch(e){return sO}try{let e=document.createElement("div");e.innerHTML=await r.text();let t=e.firstElementChild;if((null==(i=null==t?void 0:t.tagName)?void 0:i.toLowerCase())!=="svg")return sD;w||(w=new DOMParser);let o=w.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");if(!o)return sD;return o.part.add("svg"),document.adoptNode(o)}catch(e){return sD}}connectedCallback(){super.connectedCallback(),sP.push(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,sP=sP.filter(t=>t!==e)}getIconSource(){let e=sR(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;let{url:t,fromLibrary:i}=this.getIconSource(),r=i?sR(this.library):void 0;if(!t){this.svg=null;return}let o=sT.get(t);if(o||(o=this.resolveIcon(t,r),sT.set(t,o)),!this.initialRender)return;let s=await o;if(s===sO&&sT.delete(t),t===this.getIconSource().url){let t;if(void 0===t?void 0!==s?._$litType$:s?._$litType$===t){if(this.svg=s,r){await this.updateComplete;let e=this.shadowRoot.querySelector("[part='svg']");"function"==typeof r.mutator&&e&&r.mutator(e)}return}switch(s){case sO:case sD:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),null==(e=null==r?void 0:r.mutator)||e.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};sM.styles=[rC,sL],rO([eM()],sM.prototype,"svg",2),rO([eT({reflect:!0})],sM.prototype,"name",2),rO([eT()],sM.prototype,"src",2),rO([eT()],sM.prototype,"label",2),rO([eT({reflect:!0})],sM.prototype,"library",2),rO([st("label")],sM.prototype,"handleLabelChange",1),rO([st(["name","src","library"])],sM.prototype,"setIcon",1);var sB=class extends rM{constructor(){super(...arguments),this.localize=new rk(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{let e=this.closest("sl-select");e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(this.value=this.value.replace(/ /g,"_"))}getTextLabel(){let e=this.childNodes,t="";return[...e].forEach(e=>{e.nodeType!==Node.ELEMENT_NODE||e.hasAttribute("slot")||(t+=e.textContent),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return ew`
      <div
        part="base"
        class=${oj({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};sB.styles=[rC,sE],sB.dependencies={"sl-icon":sM},rO([eq(".option__label")],sB.prototype,"defaultSlot",2),rO([eM()],sB.prototype,"current",2),rO([eM()],sB.prototype,"selected",2),rO([eM()],sB.prototype,"hasHover",2),rO([eT({reflect:!0})],sB.prototype,"value",2),rO([eT({type:Boolean,reflect:!0})],sB.prototype,"disabled",2),rO([st("disabled")],sB.prototype,"handleDisabledChange",1),rO([st("selected")],sB.prototype,"handleSelectedChange",1),rO([st("value")],sB.prototype,"handleValueChange",1),sB.define("sl-option");var sq=T`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,sF=T`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;let sN=Symbol.for(""),sV=e=>{if(e?.r===sN)return e?._$litStatic$},sj=(e,...t)=>({_$litStatic$:t.reduce((t,i,r)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[r+1],e[0]),r:sN}),sU=new Map,sH=e=>(t,...i)=>{let r,o,s=i.length,a=[],c=[],h,p=0,g=!1;for(;p<s;){for(h=t[p];p<s&&void 0!==(r=sV(o=i[p]));)h+=r+t[++p],g=!0;p!==s&&c.push(o),a.push(h),p++}if(p===s&&a.push(t[s]),g){let e=a.join("$$lit$$");void 0===(t=sU.get(e))&&(a.raw=a,sU.set(e,t=a)),i=c}return e(t,...i)},sW=sH(ew);sH(ex),sH(ek);var sG=class extends rM{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?sj`a`:sj`button`;return sW`
      <${t}
        part="base"
        class=${oj({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${(e?void 0:this.disabled)??e$}
        type=${(e?void 0:"button")??e$}
        href=${(e?this.href:void 0)??e$}
        target=${(e?this.target:void 0)??e$}
        download=${(e?this.download:void 0)??e$}
        rel=${(e&&this.target?"noreferrer noopener":void 0)??e$}
        role=${(e?void 0:"button")??e$}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${this.name??e$}
          library=${this.library??e$}
          src=${this.src??e$}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};sG.styles=[rC,sF],sG.dependencies={"sl-icon":sM},rO([eq(".icon-button")],sG.prototype,"button",2),rO([eM()],sG.prototype,"hasFocus",2),rO([eT()],sG.prototype,"name",2),rO([eT()],sG.prototype,"library",2),rO([eT()],sG.prototype,"src",2),rO([eT()],sG.prototype,"href",2),rO([eT()],sG.prototype,"target",2),rO([eT()],sG.prototype,"download",2),rO([eT()],sG.prototype,"label",2),rO([eT({type:Boolean,reflect:!0})],sG.prototype,"disabled",2);var sK=class extends rM{constructor(){super(...arguments),this.localize=new rk(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return ew`
      <span
        part="base"
        class=${oj({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?ew`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};sK.styles=[rC,sq],sK.dependencies={"sl-icon-button":sG},rO([eT({reflect:!0})],sK.prototype,"variant",2),rO([eT({reflect:!0})],sK.prototype,"size",2),rO([eT({type:Boolean,reflect:!0})],sK.prototype,"pill",2),rO([eT({type:Boolean})],sK.prototype,"removable",2);var sZ=T`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,sQ=T`
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
`,sX=new WeakMap,sJ=new WeakMap,sY=new WeakMap,s0=new WeakSet,s1=new WeakMap,s2=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),i=this.options.name(this.host),r=this.options.value(this.host),o="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!t&&!o&&"string"==typeof i&&i.length>0&&void 0!==r&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(i,t.toString())}):e.formData.append(i,r.toString()))},this.handleFormSubmit=e=>{var t;let i=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=sX.get(this.form))||t.forEach(e=>{this.setUserInteracted(e,!0)})),!this.form||this.form.noValidate||i||r(this.host)||(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),s1.set(this.host,[])},this.handleInteraction=e=>{let t=s1.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){for(let e of this.form.querySelectorAll("*"))if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=rD({form:e=>{let t=e.form;if(t){let i=e.getRootNode().querySelector(`#${t}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),checkValidity:e=>"function"!=typeof e.checkValidity||e.checkValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),s1.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),s1.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,sX.has(this.form)?sX.get(this.form).add(this.host):sX.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),sJ.has(this.form)||(sJ.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),sY.has(this.form)||(sY.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=sX.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),sJ.has(this.form)&&(this.form.reportValidity=sJ.get(this.form),sJ.delete(this.form)),sY.has(this.form)&&(this.form.checkValidity=sY.get(this.form),sY.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?s0.add(e):s0.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(e=>{t.hasAttribute(e)&&i.setAttribute(e,t.getAttribute(e))})),this.form.append(i),i.click(),i.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){let t=this.host,i=!!s0.has(t),r=!!t.required;t.toggleAttribute("data-required",r),t.toggleAttribute("data-optional",!r),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}},s5=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(rS(rD({},s5),rA({valid:!1,valueMissing:!0}))),Object.freeze(rS(rD({},s5),rA({valid:!1,customError:!0})));var s3=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},s8=class extends rM{constructor(){super(...arguments),this.formControlController=new s2(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new s3(this,"help-text","label"),this.localize=new rk(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>ew`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,i=null!==t.closest(".select__clear"),r=null!==t.closest("sl-icon-button");if(!i&&!r){if("Escape"===e.key&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===e.key||" "===e.key&&""===this.typeToSelectString)return(e.preventDefault(),e.stopImmediatePropagation(),this.open)?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.getAllOptions(),i=t.indexOf(this.currentOption),r=Math.max(0,i);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===e.key?(r=i+1)>t.length-1&&(r=0):"ArrowUp"===e.key?(r=i-1)<0&&(r=t.length-1):"Home"===e.key?r=0:"End"===e.key&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key&&1===e.key.length||"Backspace"===e.key){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if("Backspace"===e.key)return;this.show()}for(let i of(e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===e.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase(),t))if(i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(i);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(" "):Array.isArray(e)?e.join(" "):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(e=this.closeWatcher)||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&"sl-icon-button"===e.tagName.toLowerCase());this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){"Tab"!==e.key&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest("sl-option"),i=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(t)?t:[t],r=[];e.forEach(e=>r.push(e.value)),this.setSelectedOptions(e.filter(e=>i.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),i=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),i.length&&i.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){!0===t||!1===t?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,i;let r=this.getAllOptions();this.selectedOptions=r.filter(e=>e.selected);let o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(e=>e.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{let r=this.selectedOptions[0];this.value=null!=(e=null==r?void 0:r.value)?e:"",this.displayLabel=null!=(i=null==(t=null==r?void 0:r.getTextLabel)?void 0:t.call(r))?i:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let i=this.getTag(e,t);return ew`<div @sl-remove=${t=>this.handleTagRemove(t,e)}>
          ${"string"==typeof i?o8(i):i}
        </div>`}return t===this.maxOptionsVisible?ew`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`:ew``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"value"===e){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await se(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:t}=o3(this,"select.show",{dir:this.localize.dir()});await o4(this.popup.popup,e,t),this.currentOption&&function(e,t,i="vertical",r="smooth"){let o={top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)},s=o.top+t.scrollTop,a=o.left+t.scrollLeft,c=t.scrollLeft,h=t.scrollLeft+t.offsetWidth,p=t.scrollTop,g=t.scrollTop+t.offsetHeight;("horizontal"===i||"both"===i)&&(a<c?t.scrollTo({left:a,behavior:r}):a+e.clientWidth>h&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:r})),("vertical"===i||"both"===i)&&(s<p?t.scrollTo({top:s,behavior:r}):s+e.clientHeight>g&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:r}))}(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await se(this);let{keyframes:e,options:t}=o3(this,"select.hide",{dir:this.localize.dir()});await o4(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,o7(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,o7(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=!!this.label||!!e,r=!!this.helpText||!!t,o=this.clearable&&!this.disabled&&this.value.length>0,s=this.placeholder&&this.value&&this.value.length<=0;return ew`
      <div
        part="form-control"
        class=${oj({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${oj({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":s,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?ew`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?ew`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
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
    `}};s8.styles=[rC,sQ,sZ],s8.dependencies={"sl-icon":sM,"sl-popup":oW,"sl-tag":sK},rO([eq(".select")],s8.prototype,"popup",2),rO([eq(".select__combobox")],s8.prototype,"combobox",2),rO([eq(".select__display-input")],s8.prototype,"displayInput",2),rO([eq(".select__value-input")],s8.prototype,"valueInput",2),rO([eq(".select__listbox")],s8.prototype,"listbox",2),rO([eM()],s8.prototype,"hasFocus",2),rO([eM()],s8.prototype,"displayLabel",2),rO([eM()],s8.prototype,"currentOption",2),rO([eM()],s8.prototype,"selectedOptions",2),rO([eM()],s8.prototype,"valueHasChanged",2),rO([eT()],s8.prototype,"name",2),rO([eM()],s8.prototype,"value",1),rO([eT({attribute:"value"})],s8.prototype,"defaultValue",2),rO([eT({reflect:!0})],s8.prototype,"size",2),rO([eT()],s8.prototype,"placeholder",2),rO([eT({type:Boolean,reflect:!0})],s8.prototype,"multiple",2),rO([eT({attribute:"max-options-visible",type:Number})],s8.prototype,"maxOptionsVisible",2),rO([eT({type:Boolean,reflect:!0})],s8.prototype,"disabled",2),rO([eT({type:Boolean})],s8.prototype,"clearable",2),rO([eT({type:Boolean,reflect:!0})],s8.prototype,"open",2),rO([eT({type:Boolean})],s8.prototype,"hoist",2),rO([eT({type:Boolean,reflect:!0})],s8.prototype,"filled",2),rO([eT({type:Boolean,reflect:!0})],s8.prototype,"pill",2),rO([eT()],s8.prototype,"label",2),rO([eT({reflect:!0})],s8.prototype,"placement",2),rO([eT({attribute:"help-text"})],s8.prototype,"helpText",2),rO([eT({reflect:!0})],s8.prototype,"form",2),rO([eT({type:Boolean,reflect:!0})],s8.prototype,"required",2),rO([eT()],s8.prototype,"getTag",2),rO([st("disabled",{waitUntilFirstUpdate:!0})],s8.prototype,"handleDisabledChange",1),rO([st(["defaultValue","value"],{waitUntilFirstUpdate:!0})],s8.prototype,"handleValueChange",1),rO([st("open",{waitUntilFirstUpdate:!0})],s8.prototype,"handleOpenChange",1),o5("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),o5("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),s8.define("sl-select");var s6=Object.defineProperty,s7=Object.getOwnPropertyDescriptor,s4=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?s7(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&s6(t,i,s),s};let s9=class extends lit_element_i{render(){return this.name?ew`<gl-tooltip .content=${this.name}>${this.renderAvatar()}</gl-tooltip>`:this.renderAvatar()}renderAvatar(){return this.href?ew`<a href=${this.href} class="avatar" part="avatar">${this.renderContent()}</a>`:ew`<span class="avatar" part="avatar">${this.renderContent()}</span>`}renderContent(){return this.src?ew`<img class="thumb thumb--media" src="${this.src}" alt="${this.name}" />`:ew`<slot class="thumb thumb--text"></slot>`}};s9.styles=[T`
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
		`],s4([eT()],s9.prototype,"src",2),s4([eT()],s9.prototype,"name",2),s4([eT()],s9.prototype,"href",2),s9=s4([eD("gl-avatar")],s9);var ne=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,ni=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?nt(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&ne(t,i,s),s};let nr=class extends lit_element_i{constructor(){super(...arguments),this.max=3,this.avatars=[]}render(){return ew`<gl-avatar-group exportparts="base">${this.renderList()}</gl-avatar-group>`}renderList(){var e,t;let i=this.avatars.slice(0,this.max),r=this.avatars.slice(this.max);return ew`
			${i.map(e=>ew`<gl-avatar exportparts="avatar" .src=${e.src} .name=${e.name} .href=${e.href}
						>${!e.src?ew`<code-icon icon="account"></code-icon>`:""}</gl-avatar
					>`)}
			${e=r.length,t=()=>ew`<gl-popover>
						<gl-avatar exportparts="avatar" slot="anchor" class="overflow"
							>+${r.length}</gl-avatar
						>
						<div slot="content" class="overflow-list">
							${r.map(e=>ew`<gl-avatar .src=${e.src} .name=${e.name} .href=${e.href}
										>${!e.src?ew`<code-icon icon="account"></code-icon>`:""}</gl-avatar
									>`)}
						</div>
					</gl-popover>`,e?t(e):void 0}
		`}};ni([eT({type:Number})],nr.prototype,"max",2),ni([eT({type:Array})],nr.prototype,"avatars",2),nr=ni([eD("gl-avatar-list")],nr);let no=class extends lit_element_i{render(){return ew`<div class="avatar-group" part="base"><slot></slot></div>`}};no.styles=[T`
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
		`],no=ni([eD("gl-avatar-group")],no);var ns=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,na=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?nn(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&ns(t,i,s),s};let nl=class extends lit_element_i{constructor(){super(...arguments),this.icon="git-branch",this.range=!1,this.refs=[]}render(){let{refs:e,icon:t}=this;if(!e?.length)return e$;let[i]=e,r=e.length;if(1===r)return ew`<gl-tooltip hoist .content=${i.name}>
				<span class="chip" tabindex="0">
					<code-icon icon=${i.icon??t}></code-icon>
					<span class="chip__name">${i.name}</span>
				</span>
			</gl-tooltip>`;let o=e.at(-1);return ew`<gl-tooltip hoist>
			<span class="chip chip--range" tabindex="0">
				<span class="chip__label">
					<code-icon icon=${i.icon??t}></code-icon>${i.name}
					${this.range?ew`<span class="chip__ellipsis">...</span>
								<code-icon icon=${o.icon??t}></code-icon>${o.name}`:e$}
				</span>
				<span class="chip__count">+${r}</span>
			</span>
			<div slot="content" class="tooltip-content">
				${this.label?ew`<div class="tooltip-header">${this.label}</div>`:e$}
				<div class="tooltip-list">
					${e.map(e=>ew`
							<div class="tooltip-item">
								<code-icon class="tooltip-item__icon" icon=${e.icon??t}></code-icon>
								<span class="tooltip-item__name">${e.name}</span>
							</div>
						`)}
				</div>
			</div>
		</gl-tooltip>`}};function nc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}nl.styles=T`
		:host {
			display: inline-flex;
			align-items: center;
			max-width: 100%;

			--color-focus-border: var(--vscode-focusBorder);
		}

		:focus,
		:focus-within {
			outline-color: var(--color-focus-border);
		}

		.chip {
			display: inline-flex;
			align-items: center;
			gap: 0.4rem;
			padding: 0.1rem 0.4rem;
			border-radius: 0.3rem;
			background-color: var(--vscode-badge-background);
			color: var(--vscode-badge-foreground);
			font-size: 0.85em;
			white-space: nowrap;
			max-width: 100%;
			overflow: hidden;
			opacity: 0.8;
			transition:
				opacity 0.3s ease-in-out,
				color 0.3s ease-in-out;
		}

		.chip:hover,
		.chip:focus {
			color: var(--color-foreground);
			opacity: 1;
		}

		.chip--range {
			cursor: pointer;
		}

		.chip__label {
			flex: 1 1 auto;
			min-width: 0;
			display: inline-flex;
			align-items: center;
			gap: 0.4rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.chip__name {
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.chip__ellipsis {
			opacity: 0.8;
			padding: 0 0.4rem;
		}

		.chip__count {
			padding-left: 0.4rem;
			font-weight: 600;
			font-size: 0.85em;
		}

		.chip code-icon {
			flex-shrink: 0;
			font-size: 0.9em;
		}

		/* Tooltip content styles */
		.tooltip-content {
			max-width: 400px;
		}

		.tooltip-header {
			padding-bottom: 0.6rem;
			font-weight: 500;
		}

		.tooltip-list {
			display: flex;
			flex-direction: column;
			gap: 0.2rem;
			max-height: 300px;
			overflow-y: auto;
		}

		.tooltip-item {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 0.3rem 0.4rem;
			font-size: 0.95em;
			line-height: 1.4;
		}

		.tooltip-item__icon {
			flex-shrink: 0;
			opacity: 0.8;
			font-size: 1.1em;
		}

		.tooltip-item__name {
			flex: 1;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`,na([eT()],nl.prototype,"icon",2),na([eT()],nl.prototype,"label",2),na([eT({type:Boolean})],nl.prototype,"range",2),na([eT({type:Array})],nl.prototype,"refs",2),nl=na([eD("gl-ref-overflow-chip")],nl);var nh=nc(),nd={exec:()=>null};function np(e,t=""){let i="string"==typeof e?e:e.source,r={replace:(e,t)=>{let o="string"==typeof t?t:t.source;return o=o.replace(ng.caret,"$1"),i=i.replace(e,o),r},getRegex:()=>new RegExp(i,t)};return r}var nu=(()=>{try{return!!RegExp("(?<=1)(?<!1)")}catch{return!1}})(),ng={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},nf=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,nm=/(?:[*+-]|\d{1,9}[.)])/,nb=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,nv=np(nb).replace(/bull/g,nm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),ny=np(nb).replace(/bull/g,nm).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),n_=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,nw=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,nx=np(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",nw).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),nk=np(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,nm).getRegex(),nC="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",n$=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,nS=np("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",n$).replace("tag",nC).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),nE=np(n_).replace("hr",nf).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nC).getRegex(),nA={blockquote:np(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",nE).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:nx,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:nf,html:nS,lheading:nv,list:nk,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:nE,table:nd,text:/^[^\n]+/},nz=np("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",nf).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nC).getRegex(),nI={...nA,lheading:ny,table:nz,paragraph:np(n_).replace("hr",nf).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",nz).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",nC).getRegex()},nP={...nA,html:np(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",n$).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nd,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:np(n_).replace("hr",nf).replace("heading",` *#{1,6} *[^
]`).replace("lheading",nv).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},nR=/^( {2,}|\\)\n(?!\s*$)/,nL=/[\p{P}\p{S}]/u,nD=/[\s\p{P}\p{S}]/u,nO=/[^\s\p{P}\p{S}]/u,nT=np(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,nD).getRegex(),nM=/(?!~)[\p{P}\p{S}]/u,nB=np(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",nu?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),nq=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,nF=np(nq,"u").replace(/punct/g,nL).getRegex(),nN=np(nq,"u").replace(/punct/g,nM).getRegex(),nV="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",nj=np(nV,"gu").replace(/notPunctSpace/g,nO).replace(/punctSpace/g,nD).replace(/punct/g,nL).getRegex(),nU=np(nV,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,nM).getRegex(),nH=np("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,nO).replace(/punctSpace/g,nD).replace(/punct/g,nL).getRegex(),nW=np(/\\(punct)/,"gu").replace(/punct/g,nL).getRegex(),nG=np(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),nK=np(n$).replace("(?:--\x3e|$)","--\x3e").getRegex(),nZ=np("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",nK).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),nQ=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,nX=np(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",nQ).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),nJ=np(/^!?\[(label)\]\[(ref)\]/).replace("label",nQ).replace("ref",nw).getRegex(),nY=np(/^!?\[(ref)\](?:\[\])?/).replace("ref",nw).getRegex(),n0=np("reflink|nolink(?!\\()","g").replace("reflink",nJ).replace("nolink",nY).getRegex(),n1=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,n2={_backpedal:nd,anyPunctuation:nW,autolink:nG,blockSkip:nB,br:nR,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:nd,emStrongLDelim:nF,emStrongRDelimAst:nj,emStrongRDelimUnd:nH,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:nX,nolink:nY,punctuation:nT,reflink:nJ,reflinkSearch:n0,tag:nZ,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:nd},n5={...n2,link:np(/^!?\[(label)\]\((.*?)\)/).replace("label",nQ).getRegex(),reflink:np(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",nQ).getRegex()},n3={...n2,emStrongRDelimAst:nU,emStrongLDelim:nN,url:np(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",n1).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:np(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",n1).getRegex()},n8={...n3,br:np(nR).replace("{2,}","*").getRegex(),text:np(n3.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},n6={normal:nA,gfm:nI,pedantic:nP},n7={normal:n2,gfm:n3,breaks:n8,pedantic:n5},n4={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},n9=e=>n4[e];function ae(e,t){if(t){if(ng.escapeTest.test(e))return e.replace(ng.escapeReplace,n9)}else if(ng.escapeTestNoEncode.test(e))return e.replace(ng.escapeReplaceNoEncode,n9);return e}function at(e){try{e=encodeURI(e).replace(ng.percentDecode,"%")}catch{return null}return e}function ai(e,t){let i=e.replace(ng.findPipe,(e,t,i)=>{let r=!1,o=t;for(;--o>=0&&"\\"===i[o];)r=!r;return r?"|":" |"}).split(ng.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),t)if(i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(ng.slashPipe,"|");return i}function ar(e,t,i){let r=e.length;if(0===r)return"";let o=0;for(;o<r;){let s=e.charAt(r-o-1);if(s!==t||i)if(s!==t&&i)o++;else break;else o++}return e.slice(0,r-o)}function ao(e,t,i,r,o){let s=t.href,a=t.title||null,c=e[1].replace(o.other.outputLinkReplace,"$1");r.state.inLink=!0;let h={type:"!"===e[0].charAt(0)?"image":"link",raw:i,href:s,title:a,text:c,tokens:r.inlineTokens(c)};return r.state.inLink=!1,h}var as=class{options;rules;lexer;constructor(e){this.options=e||nh}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:ar(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],i=function(e,t,i){let r=e.match(i.other.indentCodeCompensation);if(null===r)return t;let o=r[1];return t.split(`
`).map(e=>{let t=e.match(i.other.beginningSpace);if(null===t)return e;let[r]=t;return r.length>=o.length?e.slice(o.length):e}).join(`
`)}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=ar(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:ar(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=ar(t[0],`
`).split(`
`),i="",r="",o=[];for(;e.length>0;){let t=!1,s=[],a;for(a=0;a<e.length;a++)if(this.rules.other.blockquoteStart.test(e[a]))s.push(e[a]),t=!0;else if(t)break;else s.push(e[a]);e=e.slice(a);let c=s.join(`
`),h=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${c}`:c,r=r?`${r}
${h}`:h;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(h,o,!0),this.lexer.state.top=p,0===e.length)break;let g=o.at(-1);if(g?.type==="code")break;if(g?.type==="blockquote"){let t=g.raw+`
`+e.join(`
`),s=this.blockquote(t);o[o.length-1]=s,i=i.substring(0,i.length-g.raw.length)+s.raw,r=r.substring(0,r.length-g.text.length)+s.text;break}if(g?.type==="list"){let t=g.raw+`
`+e.join(`
`),s=this.list(t);o[o.length-1]=s,i=i.substring(0,i.length-g.raw.length)+s.raw,r=r.substring(0,r.length-g.raw.length)+s.raw,e=t.substring(o.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:o,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim(),r=i.length>1,o={type:"list",raw:"",ordered:r,start:r?+i.slice(0,-1):"",loose:!1,items:[]};i=r?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=r?i:"[*+-]");let s=this.rules.other.listItemRegex(i),a=!1;for(;e;){let i=!1,r="",c="";if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),p=e.split(`
`,1)[0],g=!h.trim(),f=0;if(this.options.pedantic?(f=2,c=h.trimStart()):g?f=t[1].length+1:(f=(f=t[2].search(this.rules.other.nonSpaceChar))>4?1:f,c=h.slice(f),f+=t[1].length),g&&this.rules.other.blankLine.test(p)&&(r+=p+`
`,e=e.substring(p.length+1),i=!0),!i){let t=this.rules.other.nextBulletRegex(f),i=this.rules.other.hrRegex(f),o=this.rules.other.fencesBeginRegex(f),s=this.rules.other.headingBeginRegex(f),a=this.rules.other.htmlBeginRegex(f);for(;e;){let m=e.split(`
`,1)[0],b;if(p=m,b=this.options.pedantic?p=p.replace(this.rules.other.listReplaceNesting,"  "):p.replace(this.rules.other.tabCharGlobal,"    "),o.test(p)||s.test(p)||a.test(p)||t.test(p)||i.test(p))break;if(b.search(this.rules.other.nonSpaceChar)>=f||!p.trim())c+=`
`+b.slice(f);else{if(g||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||o.test(h)||s.test(h)||i.test(h))break;c+=`
`+p}g||p.trim()||(g=!0),r+=m+`
`,e=e.substring(m.length+1),h=b.slice(f)}}o.loose||(a?o.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(a=!0)),o.items.push({type:"list_item",raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(c),loose:!1,text:c,tokens:[]}),o.raw+=r}let c=o.items.at(-1);if(!c)return;for(let e of(c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd(),o.raw=o.raw.trimEnd(),o.items)){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,""),e.tokens[0]?.type==="text"||e.tokens[0]?.type==="paragraph"){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,"");break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let i={type:"checkbox",raw:t[0]+" ",checked:"[ ]"!==t[0]};e.checked=i.checked,o.loose?e.tokens[0]&&["paragraph","text"].includes(e.tokens[0].type)&&"tokens"in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=i.raw+e.tokens[0].raw,e.tokens[0].text=i.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(i)):e.tokens.unshift({type:"paragraph",raw:i.raw,text:i.raw,tokens:[i]}):e.tokens.unshift(i)}}if(!o.loose){let t=e.tokens.filter(e=>"space"===e.type);o.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(o.loose)for(let e of o.items)for(let t of(e.loose=!0,e.tokens))"text"===t.type&&(t.type="paragraph");return o}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:i,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let i=ai(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:t[0],header:[],align:[],rows:[]};if(i.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?s.align.push("right"):this.rules.other.tableAlignCenter.test(e)?s.align.push("center"):this.rules.other.tableAlignLeft.test(e)?s.align.push("left"):s.align.push(null);for(let e=0;e<i.length;e++)s.header.push({text:i[e],tokens:this.lexer.inline(i[e]),header:!0,align:s.align[e]});for(let e of o)s.rows.push(ai(e,s.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:s.align[t]})));return s}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=ar(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(")"))return -1;let i=0;for(let t=0;t<e.length;t++)if("\\"===e[t])t++;else if("("===e[t])i++;else if(")"===e[t]&&--i<0)return t;return i>0?-2:-1}(t[2],0);if(-2===e)return;if(e>-1){let i=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,i).trim(),t[3]=""}}let i=t[2],r="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?i.slice(1):i.slice(1,-1)),ao(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let e=t[(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=i[0].charAt(0);return{type:"text",raw:e,text:e}}return ao(i,e,i[0],this.lexer,this.rules)}}emStrong(e,t,i=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!i||this.rules.inline.punctuation.exec(i))){let i=[...r[0]].length-1,o,s,a=i,c=0,h="*"===r[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+i);null!=(r=h.exec(t));){if(!(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6]))continue;if(s=[...o].length,r[3]||r[4]){a+=s;continue}if((r[5]||r[6])&&i%3&&!((i+s)%3)){c+=s;continue}if((a-=s)>0)continue;s=Math.min(s,s+a+c);let t=[...r[0]][0].length,h=e.slice(0,i+r.index+t+s);if(Math.min(i,s)%2){let e=h.slice(1,-1);return{type:"em",raw:h,text:e,tokens:this.lexer.inlineTokens(e)}}let p=h.slice(2,-2);return{type:"strong",raw:h,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return i&&r&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,i;return i="@"===t[2]?"mailto:"+(e=t[1]):e=t[1],{type:"link",raw:t[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,i;if("@"===t[2])i="mailto:"+(e=t[0]);else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0])e=t[0],i="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:i,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},an=class u{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||nh,this.options.tokenizer=this.options.tokenizer||new as,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:ng,block:n6.normal,inline:n7.normal};this.options.pedantic?(t.block=n6.pedantic,t.inline=n7.pedantic):this.options.gfm&&(t.block=n6.gfm,this.options.breaks?t.inline=n7.breaks:t.inline=n7.gfm),this.tokenizer.rules=t}static get rules(){return{block:n6,inline:n7}}static lex(e,t){return new u(t).lex(e)}static lexInline(e,t){return new u(t).inlineTokens(e)}lex(e){e=e.replace(ng.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],i=!1){for(this.options.pedantic&&(e=e.replace(ng.tabCharGlobal,"    ").replace(ng.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(i=>!!(r=i.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let i=t.at(-1);1===r.raw.length&&void 0!==i?i.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let i=t.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.text,this.inlineQueue.at(-1).src=i.text):t.push(r);continue}if((r=this.tokenizer.fences(e))||(r=this.tokenizer.heading(e))||(r=this.tokenizer.hr(e))||(r=this.tokenizer.blockquote(e))||(r=this.tokenizer.list(e))||(r=this.tokenizer.html(e))){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let i=t.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if((r=this.tokenizer.table(e))||(r=this.tokenizer.lheading(e))){e=e.substring(r.raw.length),t.push(r);continue}let o=e;if(this.options.extensions?.startBlock){let t=1/0,i=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{"number"==typeof(r=e.call({lexer:this},i))&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let s=t.at(-1);i&&s?.type==="paragraph"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):t.push(r),i=o.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let i=t.at(-1);i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(r);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let i,r=e,o=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(r));)e.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.anyPunctuation.exec(r));)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(r));)i=o[2]?o[2].length:0,r=r.slice(0,o.index+i)+"["+"a".repeat(o[0].length-i-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let s=!1,a="";for(;e;){let i;if(s||(a=""),s=!1,this.options.extensions?.inline?.some(r=>!!(i=r.call({lexer:this},e,t))&&(e=e.substring(i.raw.length),t.push(i),!0)))continue;if((i=this.tokenizer.escape(e))||(i=this.tokenizer.tag(e))||(i=this.tokenizer.link(e))){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length);let r=t.at(-1);"text"===i.type&&r?.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if((i=this.tokenizer.emStrong(e,r,a))||(i=this.tokenizer.codespan(e))||(i=this.tokenizer.br(e))||(i=this.tokenizer.del(e))||(i=this.tokenizer.autolink(e))||!this.state.inLink&&(i=this.tokenizer.url(e))){e=e.substring(i.raw.length),t.push(i);continue}let o=e;if(this.options.extensions?.startInline){let t=1/0,i=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{"number"==typeof(r=e.call({lexer:this},i))&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(i=this.tokenizer.inlineText(o)){e=e.substring(i.raw.length),"_"!==i.raw.slice(-1)&&(a=i.raw.slice(-1)),s=!0;let r=t.at(-1);r?.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return t}},aa=class{options;parser;constructor(e){this.options=e||nh}space(e){return""}code({text:e,lang:t,escaped:i}){let r=(t||"").match(ng.notSpaceStart)?.[0],o=e.replace(ng.endingNewline,"")+`
`;return r?'<pre><code class="language-'+ae(r)+'">'+(i?o:ae(o,!0))+`</code></pre>
`:"<pre><code>"+(i?o:ae(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,i=e.start,r="";for(let t=0;t<e.items.length;t++){let i=e.items[t];r+=this.listitem(i)}let o=t?"ol":"ul";return"<"+o+(t&&1!==i?' start="'+i+'"':"")+`>
`+r+"</"+o+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",i="";for(let t=0;t<e.header.length;t++)i+=this.tablecell(e.header[t]);t+=this.tablerow({text:i});let r="";for(let t=0;t<e.rows.length;t++){let o=e.rows[t];i="";for(let e=0;e<o.length;e++)i+=this.tablecell(o[e]);r+=this.tablerow({text:i})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${ae(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:i}){let r=this.parser.parseInline(i),o=at(e);if(null===o)return r;let s='<a href="'+(e=o)+'"';return t&&(s+=' title="'+ae(t)+'"'),s+=">"+r+"</a>"}image({href:e,title:t,text:i,tokens:r}){r&&(i=this.parser.parseInline(r,this.parser.textRenderer));let o=at(e);if(null===o)return ae(i);e=o;let s=`<img src="${e}" alt="${i}"`;return t&&(s+=` title="${ae(t)}"`),s+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:ae(e.text)}},al=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},ac=class u{options;renderer;textRenderer;constructor(e){this.options=e||nh,this.options.renderer=this.options.renderer||new aa,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new al}static parse(e,t){return new u(t).parse(e)}static parseInline(e,t){return new u(t).parseInline(e)}parse(e){let t="";for(let i=0;i<e.length;i++){let r=e[i];if(this.options.extensions?.renderers?.[r.type]){let e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(r.type)){t+=e||"";continue}}switch(r.type){case"space":t+=this.renderer.space(r);break;case"hr":t+=this.renderer.hr(r);break;case"heading":t+=this.renderer.heading(r);break;case"code":t+=this.renderer.code(r);break;case"table":t+=this.renderer.table(r);break;case"blockquote":t+=this.renderer.blockquote(r);break;case"list":t+=this.renderer.list(r);break;case"checkbox":t+=this.renderer.checkbox(r);break;case"html":t+=this.renderer.html(r);break;case"def":t+=this.renderer.def(r);break;case"paragraph":t+=this.renderer.paragraph(r);break;case"text":t+=this.renderer.text(r);break;default:{let e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return t}parseInline(e,t=this.renderer){let i="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let e=this.options.extensions.renderers[o.type].call({parser:this},o);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){i+=e||"";continue}}switch(o.type){case"escape":case"text":i+=t.text(o);break;case"html":i+=t.html(o);break;case"link":i+=t.link(o);break;case"image":i+=t.image(o);break;case"checkbox":i+=t.checkbox(o);break;case"strong":i+=t.strong(o);break;case"em":i+=t.em(o);break;case"codespan":i+=t.codespan(o);break;case"br":i+=t.br(o);break;case"del":i+=t.del(o);break;default:{let e='Token with "'+o.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return i}},ah=class{options;block;constructor(e){this.options=e||nh}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?an.lex:an.lexInline}provideParser(){return this.block?ac.parse:ac.parseInline}},ad=class{defaults=nc();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ac;Renderer=aa;TextRenderer=al;Lexer=an;Tokenizer=as;Hooks=ah;constructor(...e){this.use(...e)}walkTokens(e,t){let i=[];for(let r of e)switch(i=i.concat(t.call(this,r)),r.type){case"table":for(let e of r.header)i=i.concat(this.walkTokens(e.tokens,t));for(let e of r.rows)for(let r of e)i=i.concat(this.walkTokens(r.tokens,t));break;case"list":i=i.concat(this.walkTokens(r.items,t));break;default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let o=e[r].flat(1/0);i=i.concat(this.walkTokens(o,t))}):e.tokens&&(i=i.concat(this.walkTokens(e.tokens,t)))}}return i}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let i={...e};if(i.async=this.defaults.async||i.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let i=t.renderers[e.name];i?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return!1===r&&(r=i.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let i=t[e.level];i?i.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),i.extensions=t),e.renderer){let t=this.defaults.renderer||new aa(this.defaults);for(let i in e.renderer){if(!(i in t))throw Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let r=e.renderer[i],o=t[i];t[i]=(...e)=>{let i=r.apply(t,e);return!1===i&&(i=o.apply(t,e)),i||""}}i.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new as(this.defaults);for(let i in e.tokenizer){if(!(i in t))throw Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let r=e.tokenizer[i],o=t[i];t[i]=(...e)=>{let i=r.apply(t,e);return!1===i&&(i=o.apply(t,e)),i}}i.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new ah;for(let i in e.hooks){if(!(i in t))throw Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let r=e.hooks[i],o=t[i];ah.passThroughHooks.has(i)?t[i]=e=>{if(this.defaults.async&&ah.passThroughHooksRespectAsync.has(i))return(async()=>{let i=await r.call(t,e);return o.call(t,i)})();let s=r.call(t,e);return o.call(t,s)}:t[i]=(...e)=>{if(this.defaults.async)return(async()=>{let i=await r.apply(t,e);return!1===i&&(i=await o.apply(t,e)),i})();let i=r.apply(t,e);return!1===i&&(i=o.apply(t,e)),i}}i.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;i.walkTokens=function(e){let i=[];return i.push(r.call(this,e)),t&&(i=i.concat(t.call(this,e))),i}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return an.lex(e,t??this.defaults)}parser(e,t){return ac.parse(e,t??this.defaults)}parseMarkdown(e){return(t,i)=>{let r={...i},o={...this.defaults,...r},s=this.onError(!!o.silent,!!o.async);if(!0===this.defaults.async&&!1===r.async)return s(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||null===t)return s(Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return s(Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=e),o.async)return(async()=>{let i=o.hooks?await o.hooks.preprocess(t):t,r=await (o.hooks?await o.hooks.provideLexer():e?an.lex:an.lexInline)(i,o),s=o.hooks?await o.hooks.processAllTokens(r):r;o.walkTokens&&await Promise.all(this.walkTokens(s,o.walkTokens));let a=await (o.hooks?await o.hooks.provideParser():e?ac.parse:ac.parseInline)(s,o);return o.hooks?await o.hooks.postprocess(a):a})().catch(s);try{o.hooks&&(t=o.hooks.preprocess(t));let i=(o.hooks?o.hooks.provideLexer():e?an.lex:an.lexInline)(t,o);o.hooks&&(i=o.hooks.processAllTokens(i)),o.walkTokens&&this.walkTokens(i,o.walkTokens);let r=(o.hooks?o.hooks.provideParser():e?ac.parse:ac.parseInline)(i,o);return o.hooks&&(r=o.hooks.postprocess(r)),r}catch(e){return s(e)}}}onError(e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e="<p>An error occurred:</p><pre>"+ae(i.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(i);throw i}}},ap=new ad;function au(e,t){return ap.parse(e,t)}au.options=au.setOptions=function(e){return ap.setOptions(e),au.defaults=ap.defaults,nh=au.defaults,au},au.getDefaults=nc,au.defaults=nh,au.use=function(...e){return ap.use(...e),au.defaults=ap.defaults,nh=au.defaults,au},au.walkTokens=function(e,t){return ap.walkTokens(e,t)},au.parseInline=ap.parseInline,au.Parser=ac,au.parser=ac.parse,au.Renderer=aa,au.TextRenderer=al,au.Lexer=an,au.lexer=an.lex,au.Tokenizer=as,au.Hooks=ah,au.parse=au,au.options,au.setOptions,au.use,au.walkTokens,au.parseInline,ac.parse,an.lex;var ag=Object.defineProperty,af=Object.getOwnPropertyDescriptor,am=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?af(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&ag(t,i,s),s};let ab=class extends lit_element_i{constructor(){super(...arguments),this.markdown="",this.density="compact",this.inline=!1}render(){return ew`${this.markdown?sp(this.renderMarkdown(this.markdown),"Loading..."):""}`}async renderMarkdown(e){let t,i,r,o;return this.inline?(s??=new ad({breaks:!1,gfm:!0,renderer:(i=0,r=!1,{image:function({text:e}){return e||""},paragraph:function({tokens:e}){return this.parser.parseInline(e)},list:function(e){r=e.ordered,i="number"==typeof e.start?e.start:1;let t="";for(let i of e.items)t+=o.call(this,i);return t},listitem:o=function(e){let t,o=this.parser.parse(e.tokens);return e.task?t=e.checked?"☑":"☐":r?(t=`${i}.`,i++):t="•",`${t} ${o.trim()} `},link:function({tokens:e}){return this.parser.parseInline(e)},code:function({text:e}){return`<code>${function(e,t){if(t){if(/[&<>"']/.test(e))return e.replace(/[&<>"']/g,ay)}else if(/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/.test(e))return e.replace(/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,ay);return e}(e,!0)}</code>`},br:function(){return" "},html:function(){return""}})}),t=await s.parse(aS(e))):(a??=new ad({breaks:!0,gfm:!0,renderer:{image:function({href:e,title:t,text:i}){let r=[],o=[];return e&&({href:e,dimensions:r}=function(e){let t=[],i=e.split("|").map(e=>e.trim());e=i[0];let r=i[1];if(r){let e=/height=(\d+)/.exec(r),i=/width=(\d+)/.exec(r),o=e?e[1]:"",s=i?i[1]:"",a=isFinite(parseInt(s)),c=isFinite(parseInt(o));a&&t.push(`width="${s}"`),c&&t.push(`height="${o}"`)}return{href:e,dimensions:t}}(e),o.push(`src="${aE(e)}"`)),i&&o.push(`alt="${aE(i)}"`),t&&o.push(`title="${aE(t)}"`),r.length&&(o=o.concat(r)),`<img ${o.join(" ")}>`},paragraph:function({tokens:e}){let t=this.parser.parseInline(e);return`<p>${t}</p>`},html:function({text:e}){return e.match(/^(<span[^>]+>)|(<\/\s*span>)$/)?e:""}}}),t=await a.parse(aS(e))),o8(t=function(e){let t,i=[],r=0,o=0;for(;null!==(t=a$.exec(e));){r<(o=t.index||0)&&i.push(e.substring(r,o)),r=(t.index||0)+t[0].length;let[,s,a]=t;i.push(s?`$(${a})`:function(e){let[,t,i]=ax.exec(e.id)??[void 0,"error",void 0];return t.startsWith("gitlens-")&&(t=`gl-${t.substring(8)}`),`<code-icon icon="${t}"${i?` modifier="${i}"`:""}></code-icon>`}({id:a}))}return r<e.length&&i.push(e.substring(r)),i.join("")}(t))}};ab.styles=[oY,T`
			:host {
				display: contents;

				--markdown-compact-block-spacing: 8px;
				--markdown-list-spacing: 20px;
			}

			a,
			a code {
				text-decoration: none;
				color: var(--vscode-textLink-foreground);
			}

			a:hover,
			a:hover code {
				color: var(--vscode-textLink-activeForeground);
			}

			a:hover:not(.disabled) {
				cursor: pointer;
			}

			p,
			.code,
			ul,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				margin-inline: 0;
			}

			:where(:host([density='compact'])) p,
			:where(:host([density='compact'])) .code,
			:where(:host([density='compact'])) ul,
			:where(:host([density='compact'])) h1,
			:where(:host([density='compact'])) h2,
			:where(:host([density='compact'])) h3,
			:where(:host([density='compact'])) h4,
			:where(:host([density='compact'])) h5,
			:where(:host([density='compact'])) h6 {
				margin-block: var(--markdown-compact-block-spacing);
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				line-height: 1.1;
			}

			code {
				background: var(--vscode-textCodeBlock-background);
				border-radius: 3px;
				padding: 0px 4px 2px 4px;
				font-family: var(--vscode-editor-font-family);
			}

			code code-icon {
				color: inherit;
				font-size: inherit;
				vertical-align: middle;
			}

			p:first-child,
			.code:first-child,
			ul:first-child {
				margin-top: 0;
			}

			p:last-child,
			.code:last-child,
			ul:last-child {
				margin-bottom: 0;
			}

			/* MarkupContent Layout */
			ul {
				padding-left: var(--markdown-list-spacing);
			}
			ol {
				padding-left: var(--markdown-list-spacing);
			}

			li > p {
				margin-bottom: 0;
			}

			li > ul {
				margin-top: 0;
			}
=		`],am([eT({type:String})],ab.prototype,"markdown",2),am([eT({type:String,reflect:!0})],ab.prototype,"density",2),am([eT({type:Boolean,reflect:!0})],ab.prototype,"inline",2),ab=am([eD("gl-markdown")],ab);let av={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ay=e=>av[e],a_="[A-Za-z0-9-]+",aw="~[A-Za-z]+",ax=RegExp(`^(${a_})(${aw})?$`),ak=RegExp(`\\$\\(${a_}(?:${aw})?\\)`,"g"),aC=RegExp(`\\\\${ak.source}`,"g"),a$=RegExp(`(\\\\)?\\$\\((${a_}(?:${aw})?)\\)`,"g");function aS(e){return e.replace(aC,e=>`\\${e}`)}function aE(e){return e.replace(/"/g,"&quot;")}var aA=Object.defineProperty,az=Object.getOwnPropertyDescriptor,aI=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?az(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&aA(t,i,s),s};let aP=[...s$.values()],aR=aP.filter(e=>"squash"!==e&&"fixup"!==e),aL={break:"debug-pause",exec:"terminal",noop:"circle-slash"},aD={break:"Will pause the rebase here",exec:"Will run",noop:"No operation"},aO=class extends lit_element_i{constructor(){super(...arguments),this.revealLocation="graph",this.isBase=!1,this.isCurrent=!1,this.isDone=!1,this.isSquashTarget=!1,this.isOldest=!1,this.isFirst=!1,this.isLast=!1,this.isSelected=!1,this.isSquashing=!1,this.hasConflict=!1,this.onActionChanged=e=>{if(!e0(this.entry))return;let t=e.target.value;this.dispatchEvent(new CustomEvent("action-changed",{detail:{sha:this.entry.sha,action:t},bubbles:!0,composed:!0}))},this.onClick=e=>{e.target.closest("sl-select, a, button")||(e.currentTarget?.focus(),this.dispatchEvent(new CustomEvent("entry-select",{detail:{id:this.entry.id,sha:e0(this.entry)?this.entry.sha:void 0,ctrlKey:e.ctrlKey||e.metaKey,shiftKey:e.shiftKey},bubbles:!0,composed:!0})))},this.onDoubleClick=e=>{!e0(this.entry)||e.target.closest("sl-select, a, button")||this.dispatchRevealCommit()},this.onShaClick=e=>{e.preventDefault(),e0(this.entry)&&this.dispatchRevealCommit()}}connectedCallback(){super.connectedCallback?.(),this.isBase||this.isDone||this.setAttribute("draggable","true")}get availableActions(){return this.isOldest?aR:aP}dispatchRevealCommit(){e0(this.entry)&&this.dispatchEvent(new CustomEvent("gl-reveal-commit",{detail:{sha:this.entry.sha},bubbles:!0,composed:!0}))}render(){return e0(this.entry)?this.renderCommitEntry():this.renderCommandEntry()}renderCommitEntry(){if(!e0(this.entry))return e$;let{authors:e,entry:{action:t,commit:i,message:r,updateRefs:o,sha:s},isBase:a,isCurrent:c,isDone:h}=this;i||this.emitMissingCommit(s);let p=i&&e?.[i.author],g=i&&e?.[i.committer],f=i?.message??r,m="commit";a?m="base":h&&(m="done");let b=`${t}, ${f}, ${s.substring(0,7)}`;return ew`
			<div
				role="listitem"
				aria-label=${b}
				class=${oj({entry:!0,"entry--first":this.isFirst,"entry--last":this.isLast,"entry--selected":!a&&!h&&this.isSelected,"entry--done":h,"entry--current":c,"entry--conflict":this.hasConflict})}
				data-type="${m}"
				data-action=${t}
				data-squashing=${(!!this.isSquashing||void 0)??e$}
				data-squash-target=${(!!this.isSquashTarget||void 0)??e$}
				tabindex="0"
				@click=${this.onClick}
				@dblclick=${this.onDoubleClick}
			>
				<span class="entry-graph" aria-hidden="true"></span>

				${!a?ew`<div class="entry-action">
							<sl-select
								class="action-select"
								value=${t}
								@sl-change=${this.onActionChanged}
								?disabled=${h}
								hoist
							>
								<code-icon icon="chevron-down" slot="expand-icon"></code-icon>
								${this.availableActions.map(e=>ew`<sl-option value=${e}>${e}</sl-option>`)}
							</sl-select>
						</div>`:e$}
				<gl-popover class="entry-message" hoist placement="bottom-start" trigger="hover">
					<span slot="anchor" class="entry-message-content">${this.renderMessage(f)}</span>
					<span slot="content"
						>${this.hasConflict?ew`<span class="popover-conflict-header">
									<code-icon icon="warning"></code-icon>
									This commit will cause conflicts
									<hr />
								</span>`:e$}${this.renderPopoverMessage(f)}</span
					>
				</gl-popover>
				${!a&&o?.length?this.renderUpdateRefBadges(o):e$}
				${this.renderAvatar(p,g)}
				${i?.formattedDate?ew`<gl-tooltip class="entry-date" hoist hide-on-click .content=${i.date??""}>
							<span class="entry-date-content">${i.formattedDate}</span>
						</gl-tooltip>`:e$}

				<gl-tooltip
					class="entry-sha"
					hoist
					hide-on-click
					content=${"graph"===this.revealLocation?"Open in Commit Graph":"Open in Inspect View"}
				>
					<a href="#" class="entry-sha-link" @click=${this.onShaClick}>
						<code-icon icon="git-commit"></code-icon>
						<span class="entry-sha-content">${s.substring(0,7)}</span>
					</a>
				</gl-tooltip>

				<gl-tooltip class="entry-conflict-indicator" hoist content="This commit will cause conflicts">
					<code-icon icon="warning"></code-icon>
				</gl-tooltip>
			</div>
		`}renderCommandEntry(){if("command"!==this.entry.type)return e$;let{action:e,command:t}=this.entry,i=aL[e]??"circle-outline",r=aD[e],o=t?`${e} ${t}`:e;return ew`
			<div
				role="listitem"
				aria-label=${o}
				class=${oj({entry:!0,"entry--first":this.isFirst,"entry--last":this.isLast,"entry--selected":this.isSelected})}
				tabindex="0"
				data-type="command"
				data-action=${e}
				data-squashing=${(!!this.isSquashing||void 0)??e$}
				@click=${this.onClick}
			>
				<span class="entry-graph" aria-hidden="true">
					<code-icon icon=${i}></code-icon>
				</span>

				<div class="entry-action">
					<sl-select class="action-select" value=${e} disabled>
						<sl-option value=${e}>${e}</sl-option>
					</sl-select>
				</div>

				${"exec"===e&&t?ew`<gl-tooltip
							class="entry-message"
							hoist
							hide-on-click
							placement="bottom-start"
							.content=${t}
							><span class="entry-message-content"
								>${r} <code>${t}</code></span
							></gl-tooltip
						>`:r?ew`<span class="entry-message"
								><span class="entry-message-content">${r}</span></span
							>`:e$}
			</div>
		`}renderUpdateRefBadges(e){let t=e.map(e=>({name:e.ref}));return ew`<gl-ref-overflow-chip
			class="entry-update-refs"
			.refs=${t}
			icon="git-branch"
			label="Branches to update"
		></gl-ref-overflow-chip>`}renderMessage(e){if(!e)return e$;let{summary:t,body:i}=function(e){if(!e)return{summary:""};let t=e.trim(),i=t.indexOf(`
`);return i<0?{summary:t}:{summary:t.substring(0,i),body:t.substring(i+1).trim()}}(e);return i?ew`<gl-markdown .markdown=${t} inline></gl-markdown
			><span class="entry-message-body"><gl-markdown .markdown=${i} inline></gl-markdown></span>`:ew`<gl-markdown .markdown=${t} inline></gl-markdown>`}renderPopoverMessage(e){return e?ew`<gl-markdown .markdown=${e}></gl-markdown>`:e$}renderAvatar(e,t){if(!e)return e$;!e.avatarUrl&&e.email&&this.emitMissingAvatar(e.email);let i=[{name:t?.author!==e.author?`${e.author} (Author)`:e.author,src:e.avatarUrl??e.avatarFallbackUrl}];return t&&t.author!==e.author&&(!t.avatarUrl&&t.email&&this.emitMissingAvatar(t.email),i.push({name:`${t.author} (Committer)`,src:t.avatarUrl??t.avatarFallbackUrl})),ew`<gl-avatar-list class="entry-avatar" .avatars=${i} max="2"></gl-avatar-list>`}emitMissingAvatar(e){e0(this.entry)&&this.dispatchEvent(new CustomEvent("missing-avatar",{detail:{email:e,sha:this.entry.sha},bubbles:!0,composed:!0}))}emitMissingCommit(e){this.dispatchEvent(new CustomEvent("missing-commit",{detail:{sha:e},bubbles:!0,composed:!0}))}};aO.styles=[sS],aI([eq(".action-select")],aO.prototype,"_actionSelect",2),aI([eT({type:Object,hasChanged:(e,t)=>e!==t&&(!e||!t||e.id!==t.id||e.action!==t.action||e.commit!==t.commit)})],aO.prototype,"entry",2),aI([eT({type:Object})],aO.prototype,"authors",2),aI([eT({type:String})],aO.prototype,"revealLocation",2),aI([eT({type:Boolean,reflect:!0})],aO.prototype,"isBase",2),aI([eT({type:Boolean,reflect:!0})],aO.prototype,"isCurrent",2),aI([eT({type:Boolean,reflect:!0})],aO.prototype,"isDone",2),aI([eT({type:Boolean})],aO.prototype,"isSquashTarget",2),aI([eT({type:Boolean})],aO.prototype,"isOldest",2),aI([eT({type:Boolean})],aO.prototype,"isFirst",2),aI([eT({type:Boolean})],aO.prototype,"isLast",2),aI([eT({type:Boolean})],aO.prototype,"isSelected",2),aI([eT({type:Boolean})],aO.prototype,"isSquashing",2),aI([eT({type:Boolean})],aO.prototype,"hasConflict",2),aO=aI([eD("gl-rebase-entry")],aO);let aT=T`
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
`;var aM=Object.defineProperty,aB=Object.getOwnPropertyDescriptor,aq=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?aB(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&aM(t,i,s),s};let aF=class extends lit_element_i{constructor(){super(...arguments),this.display="solid",this.dismissible=!1,this.layout="default"}get classNames(){return{banner:!0,[`banner--${this.display}`]:!0,[`banner--${this.layout}`]:"default"!==this.layout}}render(){return ew`<div part="base" class=${oj(this.classNames)}>
			<div class="banner__content">
				${"responsive"===this.layout?this.renderResponsiveContent():this.renderDefaultContent()}
			</div>
			${"responsive"!==this.layout?this.renderDismissButton():void 0}
		</div>`}renderDefaultContent(){return ew`${this.renderTitle()} ${this.renderBody()} ${this.renderButtons()}`}renderResponsiveContent(){return ew`
			<div class="banner__text">${this.renderTitle()} ${this.renderBody()}</div>
			${this.renderButtons()} ${this.renderDismissButton()}
		`}renderTitle(){if(this.bannerTitle)return ew`<div class="banner__title">${this.bannerTitle}</div>`}renderBody(){if(this.body)return ew`<div class="banner__body">${o8(this.body)}</div>`}renderButtons(){let e=this.renderPrimaryButton(),t=this.renderSecondaryButton();if(e||t)return ew`<div class="banner__buttons">${e} ${t}</div>`}renderPrimaryButton(){if(this.primaryButton)return ew`
			<gl-button
				class="banner__button banner__button--primary"
				appearance=${"gradient-purple"===this.display?"secondary":void 0}
				?full=${"gradient-purple"===this.display}
				href=${this.primaryButtonHref??e$}
				truncate
				@click=${this.onPrimaryButtonClick}
			>
				${this.primaryButton}
			</gl-button>
		`}renderSecondaryButton(){if(this.secondaryButton)return ew`
			<gl-button
				class="banner__button banner__button--secondary"
				appearance="toolbar"
				href=${this.secondaryButtonHref??e$}
				@click=${this.onSecondaryButtonClick}
			>
				${this.secondaryButton}
			</gl-button>
		`}renderDismissButton(){if(this.dismissible)return ew`
			<gl-button
				class="banner__dismiss"
				appearance="toolbar"
				href=${this.dismissHref??e$}
				aria-label="Dismiss"
				tooltip="Dismiss"
				@click=${this.onDismissClick}
			>
				<code-icon icon="close"></code-icon>
			</gl-button>
		`}onPrimaryButtonClick(e){this.primaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-primary-click",{detail:{command:this.primaryButtonCommand},bubbles:!0,composed:!0}))}onSecondaryButtonClick(e){this.secondaryButtonCommand&&e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-secondary-click",{detail:{command:this.secondaryButtonCommand},bubbles:!0,composed:!0}))}onDismissClick(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("gl-banner-dismiss",{bubbles:!0,composed:!0}))}};aF.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},aF.styles=[aT],aq([eT({reflect:!0})],aF.prototype,"display",2),aq([eT({attribute:"banner-title"})],aF.prototype,"bannerTitle",2),aq([eT()],aF.prototype,"body",2),aq([eT({attribute:"primary-button"})],aF.prototype,"primaryButton",2),aq([eT({attribute:"primary-button-href"})],aF.prototype,"primaryButtonHref",2),aq([eT({attribute:"primary-button-command"})],aF.prototype,"primaryButtonCommand",2),aq([eT({attribute:"secondary-button"})],aF.prototype,"secondaryButton",2),aq([eT({attribute:"secondary-button-href"})],aF.prototype,"secondaryButtonHref",2),aq([eT({attribute:"secondary-button-command"})],aF.prototype,"secondaryButtonCommand",2),aq([eT({type:Boolean,attribute:"dismissible"})],aF.prototype,"dismissible",2),aq([eT({attribute:"dismiss-href"})],aF.prototype,"dismissHref",2),aq([eT({attribute:"layout"})],aF.prototype,"layout",2),aF=aq([eD("gl-banner")],aF);var aN=Object.defineProperty,aV=Object.getOwnPropertyDescriptor,aj=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?aV(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&aN(t,i,s),s};let aU=class extends lit_element_i{constructor(){super(...arguments),this.size=12,this.worktree=!1}render(){return ew`<code-icon
				class="icon"
				icon="${this.worktree?"gl-worktree":"git-branch"}"
				size="${this.size}"
			></code-icon
			><span class="label">${this.name??"<missing>"}</span>`}};aU.styles=T`
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
	`,aj([eT({type:String})],aU.prototype,"name",2),aj([eT({type:Number})],aU.prototype,"size",2),aj([eT({type:Boolean})],aU.prototype,"worktree",2),aU=aj([eD("gl-branch-name")],aU);let aH=T`
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
`;var aW=Object.defineProperty,aG=Object.getOwnPropertyDescriptor,aK=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?aG(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&aW(t,i,s),s};let aZ=class extends GlElement{constructor(){super(),this.disabled=!1,this.value="",this._defaultChecked=!1,this.checked=!1,this._defaultChecked=this.checked}get defaultChecked(){return this._defaultChecked}handleChange(e){this.checked=e.target.checked;let t=new CustomEvent("gl-change-value");this.dispatchEvent(t)}renderCheck(){if(this.checked)return ew` <code-icon icon="check"></code-icon> `}render(){return ew`<label ?aria-disabled=${this.disabled}
			><input
				class="input"
				.disabled=${this.disabled}
				type="checkbox"
				.checked=${this.checked}
				@change=${this.handleChange}
			/>
			<div class="control">${this.renderCheck()}</div>
			<slot class="label-text"></slot>
		</label>`}};aZ.shadowRootOptions={...GlElement.shadowRootOptions,delegatesFocus:!0},aZ.styles=[aH],aK([eT({type:Boolean,reflect:!0})],aZ.prototype,"disabled",2),aK([eT({type:String})],aZ.prototype,"value",2),aK([eT({type:Boolean})],aZ.prototype,"defaultChecked",1),aK([eT({type:Boolean,reflect:!0})],aZ.prototype,"checked",2),aZ=aK([eD("gl-checkbox")],aZ);let aQ="0000000000000000000000000000000000000000:",aX=/^([\w\-/]+(?:\.[\w\-/]+)*)?(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)?$/,aJ=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.?)([\w\-/]+(?:\.[\w\-/]+)*)$/,aY=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,a0=/^([\w\-/]+(?:\.[\w\-/]+)*)(\.\.\.)([\w\-/]+(?:\.[\w\-/]+)*)$/,a1=/(^[0-9a-f]{40}([\^@~:]\S*)?$)|(^[0]{40}(:|-)$)/,a2=/^(.*?)([\^@~:].*)?$/,a5=/^[0]{40}(?:[\^@~:]\S*)?:?$/,a3=/^[0]{40}([\^@~]\S*)?:$/;function a8(e,t){return!!t&&e.test(t)}function a6(e,t=!1){return"0000000000000000000000000000000000000000"===e||e===aQ||!t&&a8(a5,e)}var a7=Object.defineProperty,a4=Object.getOwnPropertyDescriptor,a9=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?a4(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&a7(t,i,s),s};let le="gl-copy-container",lt=class extends lit_element_i{constructor(){super(...arguments),this.copyLabel="Copy",this.copiedLabel="Copied",this.disabled=!1,this.placement="top",this.timeout=1e3}disconnectedCallback(){this.cancelResetTimer(),super.disconnectedCallback?.()}connectedCallback(){super.connectedCallback?.(),this.label=this.copyLabel}render(){return this.content||this.disabled?ew`<gl-tooltip
			.content="${this.label}"
			placement="${this.placement??e$}"
			@click=${this.onClick}
			@keydown=${this.onKeydown}
		>
			<slot></slot>
		</gl-tooltip>`:e$}async onClick(e){if(this.cancelResetTimer(),this.content)try{await navigator.clipboard.writeText(this.content),this.label=this.copiedLabel}catch{this.label="Unable to Copy"}else this.label="Nothing to Copy";this.createResetTimer()}onKeydown(e){("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onClick(e))}cancelResetTimer(){null!=this._resetTimer&&(clearTimeout(this._resetTimer),this._resetTimer=void 0)}createResetTimer(){this._resetTimer=setTimeout(()=>{this._resetTimer=void 0,this.label=this.copyLabel},this.timeout)}};lt.tagName=le,lt.styles=T`
		:host {
			display: inline-block;
		}

		gl-tooltip {
			cursor: pointer;
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
	`,a9([eT({reflect:!0})],lt.prototype,"appearance",2),a9([eT({reflect:!1})],lt.prototype,"content",2),a9([eT()],lt.prototype,"copyLabel",2),a9([eT()],lt.prototype,"copiedLabel",2),a9([eT({type:Boolean,reflect:!0})],lt.prototype,"disabled",2),a9([eT()],lt.prototype,"placement",2),a9([eT({type:Number})],lt.prototype,"timeout",2),a9([eM()],lt.prototype,"label",2),lt=a9([eD(le)],lt);var li=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,lo=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lr(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&li(t,i,s),s};let ls=T`
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
`,ln=class extends lit_element_i{constructor(){super(...arguments),this.size=12}get label(){return function(e,t){if("0000000000000000000000000000000000000000-"===e)return"(deleted)";if(!e)return t?.strings?.working??"";if(a6(e))return!function(e,t=!1){return e===aQ||!t&&a8(a3,e)}(e)?t?.strings?.uncommitted??"Working Tree":t?.strings?.uncommittedStaged??"Index";if(function(e,t="any"){if(null==e)return!1;switch(t){case"qualified":return aJ.test(e);case"qualified-double-dot":return aY.test(e);case"qualified-triple-dot":return a0.test(e);default:return aX.test(e)}}(e)||!a8(a1,e))return e;let i=a2.exec(e);if(null!=i){let[,e,t]=i;if(null!=t)return`${e.substring(0,7)}${t}`}return e.substring(0,7)}(this.sha,{strings:{uncommitted:"Working",uncommittedStaged:"Staged",working:"Working"}})}render(){return null==this.sha?e$:!this.sha||a6(this.sha)?ew`<span part="label" class="label--uncommitted">${this.label}</span>`:ew`<code-icon part="icon" class="icon" icon="git-commit" size="${this.size}"></code-icon
			><span part="label">${this.label}</span>`}};ln.styles=ls,lo([eT({type:String})],ln.prototype,"sha",2),lo([eT({type:Number})],ln.prototype,"size",2),ln=lo([eD("gl-commit-sha")],ln);let la=class extends lit_element_i{constructor(){super(...arguments),this.size=12}render(){return null==this.sha?e$:ew`<gl-copy-container .content=${this.sha} placement="top">
			<gl-commit-sha exportparts="icon, label" .sha=${this.sha} .size=${this.size}></gl-commit-sha>
		</gl-copy-container>`}};la.styles=ls,lo([eT({type:String})],la.prototype,"sha",2),lo([eT({type:Number})],la.prototype,"size",2),la=lo([eD("gl-commit-sha-copy")],la);var ll=Object.defineProperty,lc=Object.getOwnPropertyDescriptor,lh=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lc(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&ll(t,i,s),s};let ld=class extends lit_element_i{constructor(){super(...arguments),this._open=!1,this.confirm="Confirm",this.cancel="Cancel",this.initialFocus="confirm",this.placement="top-end",this.icon="warning",this.showIcon=!0}render(){return ew`
			<gl-popover
				placement=${this.placement}
				trigger="click"
				hoist
				@keydown=${this.onKeydown}
				@gl-popover-show=${this.onPopoverShow}
				@gl-popover-after-show=${this.onPopoverAfterShow}
				@gl-popover-hide=${this.onPopoverHide}
			>
				<slot name="anchor" slot="anchor"></slot>
				<div slot="content" class="confirm-popover" role="alertdialog" aria-labelledby="confirm-title">
					<div class="confirm-popover__header">
						${this.showIcon?ew`<slot name="icon">
									<code-icon class="confirm-popover__icon" icon=${this.icon}></code-icon>
								</slot>`:e$}
						<h4 id="confirm-title" class="confirm-popover__title">${this.heading}</h4>
					</div>
					${this.message?ew`<p class="confirm-popover__message">${o8(this.message)}</p>`:e$}
					<div class="confirm-popover__actions">
						<gl-button
							class="cancel-button"
							tabindex=${"cancel"===this.initialFocus?1:2}
							appearance="secondary"
							@click=${e=>this.onCancel(e)}
							>${this.cancel}</gl-button
						>
						<gl-button
							class="confirm-button"
							appearance=${this.confirmAppearance??e$}
							variant=${this.confirmVariant??e$}
							tabindex=${"confirm"===this.initialFocus?1:2}
							@click=${e=>this.onConfirm(e)}
							>${this.confirm}</gl-button
						>
					</div>
				</div>
			</gl-popover>
		`}onPopoverShow(){this._open=!0,this.setAnchorTooltipsDisabled(!0)}onPopoverAfterShow(){requestAnimationFrame(()=>{"cancel"===this.initialFocus?this._cancelButton?.focus():this._confirmButton?.focus()})}onPopoverHide(){this._open=!1,this.setAnchorTooltipsDisabled(!1)}setAnchorTooltipsDisabled(e){for(let t of this.querySelectorAll('[slot="anchor"]'))t.querySelectorAll("gl-tooltip").forEach(t=>t.disabled=e),t.shadowRoot?.querySelectorAll("gl-tooltip").forEach(t=>t.disabled=e)}onKeydown(e){if("Enter"===e.key||" "===e.key){let t=e.target;t.closest(".cancel-button")?(e.preventDefault(),e.stopPropagation(),this.onCancel()):t.closest(".confirm-button")&&(e.preventDefault(),e.stopPropagation(),this.onConfirm())}}onConfirm(e){e?.stopPropagation(),this.hide(),this.dispatchEvent(new CustomEvent("gl-confirm",{bubbles:!0,composed:!0}))}onCancel(e){e?.stopPropagation(),this.hide(),this.dispatchEvent(new CustomEvent("gl-cancel",{bubbles:!0,composed:!0}))}show(){return this._popover?.show()}hide(){return this._popover?.hide()}};ld.styles=[iN,T`
			:host {
				display: contents;
				--warning-color: var(--vscode-editorWarning-foreground, #cca700);
				--sl-tooltip-border-radius: 0.8rem;
			}

			.confirm-popover {
				display: flex;
				flex-direction: column;
				gap: 0.8rem;
				max-width: 28rem;
				padding: 0.6rem 0.4rem;
			}

			.confirm-popover__header {
				display: flex;
				align-items: flex-start;
				gap: 0.6rem;
			}

			.confirm-popover__icon {
				flex: 0 0 auto;
				color: var(--warning-color);
			}

			.confirm-popover__title {
				margin: 0;
				font-weight: 600;
				font-size: 1.3rem;
				line-height: 1.4;
			}

			.confirm-popover__message {
				margin: 0;
				color: var(--color-foreground--75, inherit);
				line-height: 1.4;
			}

			.confirm-popover__actions {
				display: flex;
				justify-content: flex-end;
				gap: 0.8rem;
				margin-top: 0.4rem;
			}
		`],lh([eq("gl-popover")],ld.prototype,"_popover",2),lh([eq(".confirm-button")],ld.prototype,"_confirmButton",2),lh([eq(".cancel-button")],ld.prototype,"_cancelButton",2),lh([eM()],ld.prototype,"_open",2),lh([eT()],ld.prototype,"heading",2),lh([eT()],ld.prototype,"message",2),lh([eT()],ld.prototype,"confirm",2),lh([eT({attribute:"confirm-appearance"})],ld.prototype,"confirmAppearance",2),lh([eT({attribute:"confirm-variant"})],ld.prototype,"confirmVariant",2),lh([eT()],ld.prototype,"cancel",2),lh([eT({attribute:"initial-focus"})],ld.prototype,"initialFocus",2),lh([eT()],ld.prototype,"placement",2),lh([eT()],ld.prototype,"icon",2),lh([eT({type:Boolean,attribute:"show-icon"})],ld.prototype,"showIcon",2),ld=lh([eD("gl-popover-confirm")],ld);var lp=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,lg=(e,t,i,r)=>{for(var o,s=r>1?void 0:r?lu(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r?o(t,i,s):o(s))||s);return r&&s&&lp(t,i,s),s};let lf={p:"pick",P:"pick",r:"reword",R:"reword",e:"edit",E:"edit",s:"squash",S:"squash",f:"fixup",F:"fixup",d:"drop",D:"drop"},lm=class extends GlAppHost{constructor(){super(...arguments),this.virtualizerKeyFn=e=>e.id,this.virtualizerRenderFn=(e,t)=>this.renderEntry(e,t),this._conflictIndicatorLoading=!0,this._conflictIndicatorHasConflicts=!1,this.dragOverBottom=!1,this.selectedIds=new Set,this.conflictDetectionStale=!1,this._idToSortedIndex=new Map,this._sortedEntries=[],this._squashingIds=new Set,this._squashTargetIds=new Set,this._editableStartOffset=0,this.onListKeyDown=e=>{if((e.ctrlKey||e.metaKey)&&"a"===e.key){e.preventDefault();let t=this.state?.onto?.sha,i=this._sortedEntries.filter(e=>e.id!==t).map(e=>e.id);this.selectedIds=new Set(i);return}if("Escape"===e.key){let t=e.composedPath().find(e=>e instanceof Element&&"gl-rebase-entry"===e.localName),i=t?.shadowRoot?.querySelector(".entry");i&&(e.preventDefault(),i.focus());return}if(e.composedPath().some(e=>e instanceof Element&&e.matches(".action-select")))return;let t=this.focusedEntryId;if(!t)return;let i=this.shadowRoot?.querySelector(`gl-rebase-entry[data-id="${t}"]`);if(!i)return;if("Enter"===e.key||" "===e.key){let r=e.composedPath()[0];if(!(r instanceof HTMLElement&&r.classList.contains("entry")))return;if(e.preventDefault(),!this.selectedIds.has(t)){this.selectedIds=new Set([t]),this.anchoredEntryId=t;let e=this._idToSortedIndex.get(t)??-1;if(-1!==e){let t=this._sortedEntries[e];e0(t)&&this._ipc.sendCommand(tr,{sha:t.sha})}return}let o=i.shadowRoot?.querySelector(".action-select");null!=o&&(o.focus(),requestAnimationFrame(()=>void o.show()));return}let r=this._idToSortedIndex.get(t)??-1;if(-1===r)return;let o=this._sortedEntries[r];if(e0(o)&&e.key in lf&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.shiftKey){e.preventDefault(),e.stopPropagation(),this.onActionChanged(new CustomEvent("action-changed",{detail:{sha:o.sha,action:lf[e.key]}}));return}if("Home"===e.key||"End"===e.key){e.preventDefault();let t="Home"===e.key?0:this._sortedEntries.length-1;t>=0&&t<this._sortedEntries.length&&this.focusEntry(this._sortedEntries[t].id);return}if(this.isNavigationKey(e.key)){if(e.altKey&&!this.state?.preservesMerges)return void this.handleKeyboardMove(e,r,e.key);if(e.shiftKey)return void this.handleKeyboardMultiSelect(e,r,e.key);this.handleKeyboardNavigate(e,r,e.key)}},this.onEntrySelect=e=>{let{id:t,sha:i,ctrlKey:r,shiftKey:o}=e.detail,s=this.state?.onto?.sha;if(!s||t!==s){if(this.focusedEntryId=t,o&&this.anchoredEntryId){let e=this._idToSortedIndex.get(this.anchoredEntryId)??-1,i=this._idToSortedIndex.get(t)??-1;if(-1!==e&&-1!==i){let t=Math.min(e,i),r=Math.max(e,i),o=new FilterMapIterator(this._sortedEntries.slice(t,r+1),e=>e.id!==s?e.id:void 0);this.selectedIds=new Set(o)}}else if(r){let e=new Set(this.selectedIds);e.has(t)?e.delete(t):e.add(t),this.selectedIds=e,this.anchoredEntryId=t}else this.selectedIds=new Set([t]),this.anchoredEntryId=t;i&&this._ipc.sendCommand(tr,{sha:i})}},this.onActionChanged=e=>{let t,{sha:i,action:r}=e.detail;if(this.selectedIds.has(i)&&this.selectedIds.size>1){for(let e of(t=[],this.selectedIds))if(!e.startsWith("line:")){if(e===this._oldestCommitId&&("squash"===r||"fixup"===r))continue;t.push({sha:e,action:r})}}else{if(i===this._oldestCommitId&&("squash"===r||"fixup"===r))return;t=[{sha:i,action:r}]}if(t.length){if("drop"===r)for(let e of this.findOrphanedSquashEntries(t.map(e=>e.sha)))t.push({sha:e,action:"pick"});1===t.length?(this._stateProvider.changeEntryAction(t[0].sha,t[0].action),this._ipc.sendCommand(e4,{sha:t[0].sha,action:t[0].action})):(this._stateProvider.changeEntryActions(t),this._ipc.sendCommand(e9,{entries:t})),"drop"===r&&this.markConflictDetectionStale()}},this.onDocumentKeyDown=e=>{if(e.ctrlKey||e.metaKey){"Enter"===e.key&&(e.preventDefault(),this.isRebasing?this.rebaseStatus?.hasConflicts||this.onContinueClicked():this.onStartClicked());return}"/"===e.key&&(e.preventDefault(),this.onSearch())},this.onCurrentCommitClick=()=>{let e=this.rebaseStatus?.currentCommit;e&&this._ipc.sendCommand(to,{type:"commit",ref:e})},this.onCurrentCommitKeydown=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onCurrentCommitClick())},this.onBranchClick=()=>{this.state?.branch&&this._ipc.sendCommand(to,{type:"branch",ref:this.state.branch})},this.onBranchKeydown=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onBranchClick())},this.onOntoClick=()=>{this.state?.onto?.sha&&this._ipc.sendCommand(to,{type:"commit",ref:this.state.onto.sha})},this.onOntoKeydown=e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.onOntoClick())},this.onRevealCommit=e=>{this._ipc.sendCommand(to,{type:"commit",ref:e.detail.sha})},this.onConflictStateChange=e=>{this._conflictIndicatorLoading=e.detail.isLoading,this._conflictIndicatorHasConflicts=e.detail.hasConflicts,this._conflictingShas=e.detail.conflictingShas}}get ascending(){return this.state?.ascending??!1}get entries(){return this.state?.entries??[]}get doneEntries(){return this.state?.doneEntries??[]}get rebaseStatus(){return this.state?.rebaseStatus}get isRebasing(){return null!=this.rebaseStatus}get isEmptyOrNoop(){let{entries:e,doneEntries:t}=this;return!t.length&&(!e.length||1===e.length&&"command"===e[0].type&&"noop"===e[0].action)}createStateProvider(e,t,i){return new RebaseStateProvider(this,e,t,i)}connectedCallback(){super.connectedCallback?.(),document.addEventListener("keydown",this.onDocumentKeyDown)}disconnectedCallback(){document.removeEventListener("keydown",this.onDocumentKeyDown),super.disconnectedCallback?.()}onListClick(e){if(!e.target.closest("gl-rebase-entry"))if(this.focusedEntryId)this.focusEntry(this.focusedEntryId);else{let e=this.state?.onto?.sha,t=this._sortedEntries.find(t=>t.id!==e);t&&this.focusEntry(t.id)}}onDragStart(e){let t=e.target.closest("gl-rebase-entry"),i=t?.dataset.id;if(!i)return;let r=this.state?.onto?.sha;if(!r||i!==r){if(this.state?.preservesMerges)return void e.preventDefault();this.selectedIds.has(i)||(this.selectedIds=new Set([i]),this.anchoredEntryId=i),this.draggedId=i,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",i),requestAnimationFrame(()=>{if(t.classList.add("dragging"),this.selectedIds.has(i)&&this.selectedIds.size>1){for(let e of this.selectedIds)if(e!==i){let t=this.getEntryElement(e);t?.classList.add("dragging")}}})}}onDragEnd(){this.clearDragState()}onDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move",this.handleDragAutoScroll(e.clientY);let t=e.target.closest("gl-rebase-entry"),i=t?.dataset.id;if(i===this.draggedId)return;let r=!1,o=this.state?.onto?.sha;if(t&&(!o||i!==o)){let i=t.getBoundingClientRect();r=e.clientY>i.top+i.height/2}this.updateDragOverIndicator(i,t,r)}onDragLeave(e){let t=e.target.closest("gl-rebase-entry");t?.dataset.id===this.dragOverId&&(t.classList.remove("drag-over","drag-over-bottom"),this.dragOverId=void 0,this.dragOverBottom=!1)}onDrop(e){e.preventDefault();let t=e.target.closest("gl-rebase-entry");if(!this.isValidDropTarget(t))return void this.clearDragState();let i=e.dataTransfer?.getData("text/plain")||this.draggedId;if(!i)return void this.clearDragState();let r=t.dataset.id;if(!r)return void this.clearDragState();let o=this.state?.onto?.sha;if(o&&r===o)return void this.handleBaseDrop(i);let s=this._idToSortedIndex.get(r)??-1,a=t.getBoundingClientRect(),c=e.clientY>a.top+a.height/2;if(this.selectedIds.has(i)&&this.selectedIds.size>1)this.clearDragState(),this.executeMoveEntriesBySortedIndex(Array.from(this.selectedIds),s,c);else{let e=this._idToSortedIndex.get(i)??-1;this.clearDragState(),this.executeMoveEntryBySortedIndex(e,s,c)}}handleBaseDrop(e){let t=e??this.draggedId;if(!t)return void this.clearDragState();if(this.clearDragState(),this.selectedIds.has(t)&&this.selectedIds.size>1){let e=this.getIdsInArrayOrder(this.selectedIds);this.pendingFocusId=this.focusedEntryId&&this.selectedIds.has(this.focusedEntryId)?this.focusedEntryId:e[0],this._stateProvider.moveEntries(e,0),this.refreshIndices(),this._ipc.sendCommand(tt,{ids:e,to:0})}else{let e=this.entries.findIndex(e=>e.id===t);if(-1===e)return;this.executeMoveEntry(e,0)}}handleDragAutoScroll(e){if(!this._virtualizer)return;let t=this._virtualizer.getBoundingClientRect();e<t.top+80?this._virtualizer.scrollBy({top:-8,behavior:"instant"}):e>t.bottom-80&&this._virtualizer.scrollBy({top:8,behavior:"instant"})}updateDragOverIndicator(e,t,i=!1){if(e!==this.dragOverId||i!==this.dragOverBottom){if(this.dragOverId){let e=this.getEntryElement(this.dragOverId);e?.classList.remove("drag-over","drag-over-bottom")}this.dragOverId=e,this.dragOverBottom=i,e&&t&&(t.classList.add("drag-over"),i&&t.classList.add("drag-over-bottom"))}}isValidDropTarget(e){let t=e?.dataset.id;return!!(t&&this.draggedId&&t!==this.draggedId)}clearDragState(){this.clearAllDragOverIndicators(),this.clearDraggingClass(),this.draggedId=void 0,this.dragOverId=void 0,this.dragOverBottom=!1}clearAllDragOverIndicators(){if(this._virtualizer)for(let e of this._virtualizer.querySelectorAll(".drag-over"))e.classList.remove("drag-over","drag-over-bottom")}clearDraggingClass(){if(this._virtualizer)for(let e of this._virtualizer.querySelectorAll(".dragging"))e.classList.remove("dragging")}getEntryElement(e){return this._virtualizer?.querySelector(`gl-rebase-entry[data-id="${e}"]`)??void 0}getIdsInArrayOrder(e){let t=[];for(let i of this._sortedEntries)e.has(i.id)&&t.push(i);return this.ascending||t.reverse(),t.map(e=>e.id)}executeMoveEntryBySortedIndex(e,t,i){let r,o,s=this._sortedEntries.length,a=this.entries.length,c=this._editableStartOffset;if(-1!==e&&-1!==t&&!(e>=s)&&!(t>=s)&&t!==e&&(!i||t!==e-1)&&(i||t!==e+1)){if(this.ascending){r=e-c;let s=t-c;o=i?s+1:s}else{r=a-1-e;let s=a-1-t;o=i?s:s+1}r<0||r>=a||o<0||o>a||this.executeMoveEntry(r,o)}}executeMoveEntry(e,t){if(-1===e||-1===t||e===t)return;let i=this.entries[e];if(!i)return;this.pendingFocusId=i.id;let r=e<t?t-1:t;this._stateProvider.moveEntry(e,r),this.refreshIndices(),this._ipc.sendCommand(te,{id:i.id,to:t,relative:!1})}executeMoveEntriesBySortedIndex(e,t,i){let r;if(0===e.length)return;let o=this._sortedEntries.length,s=this.entries.length,a=this._editableStartOffset,c=new Set(e);if(t<0||t>=o)return;let h=this.getIdsInArrayOrder(c),p=t;i&&(p=t+1);let g=0;for(let e=0;e<p&&e<o;e++)c.has(this._sortedEntries[e].id)&&g++;let f=p-g,m=s-h.length;r=this.ascending?Math.max(0,Math.min(f-a,m)):Math.max(0,Math.min(m-f,m));let b=this.focusedEntryId&&c.has(this.focusedEntryId)?this.focusedEntryId:h[0];this.pendingFocusId=b,this._stateProvider.moveEntries(h,r),this.refreshIndices(),this._ipc.sendCommand(tt,{ids:h,to:r})}findOrphanedSquashEntries(e){let t=new Set(e),i=[],r=this.entries;for(let e=0;e<r.length;e++){let o=r[e];if(!e0(o)||"squash"!==o.action&&"fixup"!==o.action)continue;let s=!1;for(let i=e-1;i>=0;i--){let e=r[i];if(!e0(e))continue;let o=t.has(e.sha)?"drop":e.action;if("drop"!==o&&"squash"!==o&&"fixup"!==o){s=!0;break}}s||i.push(o.sha)}return i}handleKeyboardMove(e,t,i){e.preventDefault(),e.stopPropagation();let r=this._sortedEntries[t];if(!r)return;let o=this.isDownwardKey(i),s=o===this.ascending?"down":"up";if(this.selectedIds.has(r.id)&&this.selectedIds.size>1){let e=Array.from(this.selectedIds);this.pendingFocusId=r.id,this._stateProvider.shiftEntries(e,s),this.refreshIndices(),this._ipc.sendCommand(ti,{ids:e,direction:s})}else{let e=t+(o?1:-1);if(e<0||e>=this._sortedEntries.length)return;this.executeMoveEntryBySortedIndex(t,e,o)}}handleKeyboardNavigate(e,t,i){if(!this.isNavigationKey(i))return;e.preventDefault();let r=t+(this.isDownwardKey(i)?1:-1);r<0||r>=this._sortedEntries.length||this.focusEntry(this._sortedEntries[r].id)}handleKeyboardMultiSelect(e,t,i){if(!this.isNavigationKey(i))return;e.preventDefault();let r=t+(this.isDownwardKey(i)?1:-1);if(r<0||r>=this._sortedEntries.length)return;let o=this.state?.onto?.sha,s=this._sortedEntries[r].id;if(s===o)return;this.anchoredEntryId||=this._sortedEntries[t].id;let a=this._idToSortedIndex.get(this.anchoredEntryId)??t,c=Math.min(a,r),h=Math.max(a,r),p=new FilterMapIterator(this._sortedEntries.slice(c,h+1),e=>e.id!==o?e.id:void 0);this.pendingFocusId=s,this.selectedIds=new Set(p)}isNavigationKey(e){return"ArrowUp"===e||"ArrowDown"===e||"j"===e||"k"===e||"J"===e||"K"===e}isDownwardKey(e){return"ArrowDown"===e||"j"===e||"J"===e}focusEntry(e){if(e===this.state?.onto?.sha)return;this.focusedEntryId=e;let t=this._idToSortedIndex.get(e)??-1;if(-1===t)return;let i=this._virtualizer;i?.scrollToIndex&&(i.scrollToIndex(t,"nearest"),requestAnimationFrame(()=>{let t=this.getEntryElement(e);t?.shadowRoot?.querySelector(".entry")?.focus()}))}onOrderToggle(){this._ipc.sendCommand(e7,{ascending:!this.ascending})}onStartClicked(){this._ipc.sendCommand(e8,void 0)}markConflictDetectionStale(){this.conflictDetectionStale=!0}onAbortClicked(){this._ipc.sendCommand(e1,void 0)}onContinueClicked(){this._ipc.sendCommand(e2,void 0)}onSkipClicked(){this._ipc.sendCommand(e3,void 0)}onSwitchClicked(){this._ipc.sendCommand(e6,void 0)}onSearch(){this._ipc.sendCommand(e5,void 0)}onRecomposeCommitsClicked(){this._ipc.sendCommand(ta,void 0)}computeSquashInfo(e){let t=new Set,i=new Set;for(let r=0;r<e.length;r++){let o=e[r];if(e0(o)&&("squash"===o.action||"fixup"===o.action))for(let o=r-1;o>=0;o--){let r=e[o];if(!e0(r)){i.add(r.id);continue}if("drop"!==r.action&&"squash"!==r.action&&"fixup"!==r.action){t.add(r.sha);break}}}return{targets:t,squashing:i}}refreshIndices(){let{entries:e,doneEntries:t}=this,i=this.state?.onto,r=+(null!=i)+t.length,o=t.length>0?[...t,...e]:e;if(i&&!o.some(e=>e.sha===i.sha)){let e={type:"commit",id:i.sha,action:"pick",sha:i.sha,message:i.commit?.message??"Base commit",line:0,commit:i.commit};this._sortedEntries=this.ascending?[e,...o]:[e,...o].toReversed()}else this._sortedEntries=this.ascending?o:o.toReversed();this._editableStartOffset=this.ascending?r:0,this._idToSortedIndex.clear();for(let e=0;e<this._sortedEntries.length;e++)this._idToSortedIndex.set(this._sortedEntries[e].id,e)}willUpdate(e){let t=this.entries;this._oldestCommitId=t.find(e0)?.sha;let i=this.computeSquashInfo(t);if(this._squashTargetIds=i.targets,this._squashingIds=i.squashing,this.refreshIndices(),null==this.focusedEntryId&&this._sortedEntries.length>0){let e,t=this.state?.onto?.sha;if(this.isRebasing&&this.doneEntries.length>0&&(e=this.doneEntries[this.doneEntries.length-1].id),!e){let i=this._sortedEntries.find(e=>e.id!==t);e=i?.id}e&&(this.focusedEntryId=e,this.selectedIds=new Set([e]),this.anchoredEntryId=e,this.pendingFocusId=e)}if(null==this.pendingFocusId){let e=this.shadowRoot?.activeElement?.closest("gl-rebase-entry");this.pendingFocusId=e?.dataset.id}}updated(e){if(!this.pendingFocusId)return;let t=this.pendingFocusId;this.pendingFocusId=void 0,this.focusEntry(t)}render(){if(!this.state?.entries)return e$;let e=this.state.preservesMerges??!1,t=this.isRebasing,i=this.isEmptyOrNoop,r=this.state.density??"compact";return ew`
			<div
				class="container ${e?"preserves-merges":""} ${t?"active-rebase":""}"
				data-density="${r}"
			>
				${eV([this.state.branch,this.state.onto,this.state.entries.length,this.ascending,e,this.rebaseStatus],()=>this.renderHeader())}
				${e?this.renderPreservesMergesBanner():e$}
				${!i?ew`<lit-virtualizer
							role="list"
							class="entries scrollable ${this.ascending?"ascending":"descending"}${this.rebaseStatus?.hasConflicts?" has-conflicts":""}"
							autofocus
							@click=${this.onListClick}
							@keydown=${this.onListKeyDown}
							@dragstart=${this.onDragStart}
							@dragend=${this.onDragEnd}
							@dragover=${this.onDragOver}
							@dragleave=${this.onDragLeave}
							@drop=${this.onDrop}
							scroller
							.items=${this._sortedEntries}
							.keyFunction=${this.virtualizerKeyFn}
							.layout=${(0,S.flow)({direction:"vertical"})}
							.renderItem=${this.virtualizerRenderFn}
						></lit-virtualizer>`:ew`<div class="entries-empty">No commits to rebase</div>`}
				${this.renderFooter()}
			</div>
		`}renderPreservesMergesBanner(){return ew`<gl-banner
			class="preserves-merges-banner"
			display="outline"
			layout="responsive"
			body="This rebase contains merge commits. Reordering is disabled to preserve the merge structure, but you can still change actions (drop, reword, etc.)."
		></gl-banner>`}renderConflictIndicator(){return!this.isRebasing&&this.state?.branch&&this.state?.onto?ew`<gl-rebase-conflict-indicator
			id="header-conflict-indicator"
			class="conflict-indicator"
			.branch=${this.state.branch}
			.onto=${this.state.onto.sha}
			.stale=${this.conflictDetectionStale}
			@conflict-state-change=${this.onConflictStateChange}
		></gl-rebase-conflict-indicator>`:e$}renderRebaseBanner(){let e,t=this.rebaseStatus;if(!t)return e$;let i=t.currentCommit,r=t.pauseReason,o=this.state?.revealLocation==="graph"?"Open in Commit Graph":"Open in Inspect View",s=i?ew`<gl-tooltip hoist content=${o}>
					<gl-commit-sha
						.sha=${i}
						tabindex="0"
						@click=${this.onCurrentCommitClick}
						@keydown=${this.onCurrentCommitKeydown}
						style="cursor: pointer"
					></gl-commit-sha>
				</gl-tooltip>`:e$;switch(r){case"break":e=ew`Rebase paused at breakpoint`;break;case"conflict":e=i?ew`Rebase paused due to conflicts at ${s}`:ew`Rebase paused due to conflicts`;break;case"exec":e=ew`Rebase paused due to exec failure`;break;case"edit":e=i?ew`Rebase paused for editing at ${s}`:ew`Rebase paused for editing`;break;case"reword":e=i?ew`Rebase paused for rewording at ${s}`:ew`Rebase paused for rewording`;break;default:e=i?ew`Rebase paused at ${s}`:ew`Rebase paused`}return ew`<div class="rebase-banner ${"conflict"===r?"has-conflicts":""}">
			<code-icon icon="${"conflict"===r?"warning":"edit"===r||"break"===r||"exec"===r?"debug-pause":"debug-continue"}"></code-icon>
			<span class="rebase-status">${e}</span>
			${"conflict"===r?ew`<gl-tooltip hoist content="Show Conflicts">
						<a class="rebase-action-link" href="${this.showConflictsCommandUrl}">Show conflicts</a>
					</gl-tooltip>`:e$}
			<span class="rebase-progress">(${t.currentStep}/${t.totalSteps})</span>
			<span class="rebase-remaining">${t.totalSteps-t.currentStep} remaining</span>
		</div>`}get showConflictsCommandUrl(){return this._webview.createCommandLink("gitlens.pausedOperation.showConflicts:rebase")}renderEntry(e,t){let i=e.id,r=0===t,o=t===this._sortedEntries.length-1,s=e.done??!1,a=this.rebaseStatus?.currentCommit,c="sha"in e&&null!=a&&e.sha?.startsWith(a);return"command"===e.type?ew`<gl-rebase-entry
				data-id=${i}
				.entry=${e}
				?isFirst=${r}
				?isLast=${o}
				?isDone=${s}
				?isCurrent=${c??!1}
				?isSelected=${this.selectedIds.has(i)}
				?isSquashing=${this._squashingIds.has(i)}
				@entry-select=${this.onEntrySelect}
			></gl-rebase-entry>`:ew`<gl-rebase-entry
			data-id=${i}
			.entry=${e}
			.authors=${this.state.authors}
			.revealLocation=${this.state.revealLocation}
			?isBase=${e.sha===this.state?.onto?.sha}
			?isFirst=${r}
			?isLast=${o}
			?isDone=${s}
			?isCurrent=${c??!1}
			?isOldest=${e.sha===this._oldestCommitId}
			?isSelected=${this.selectedIds.has(i)}
			?isSquashTarget=${this._squashTargetIds.has(i)}
			?hasConflict=${!!(null!=e.sha&&this._conflictingShas?.length&&function(e,t){for(let i of e)if(null==t||t(i))return!0;return!1}(this._conflictingShas,t=>t?.startsWith(e.sha)))}
			@action-changed=${this.onActionChanged}
			@entry-select=${this.onEntrySelect}
			@gl-reveal-commit=${this.onRevealCommit}
		></gl-rebase-entry>`}renderHeader(){return ew`<header tabindex="-1">
			<div class="header__row">
				<h1 class="header-title">GitLens Interactive Rebase</h1>
				<div class="header-info">${this.renderSubhead()}</div>
				<div class="header-actions">
					${this.renderConflictIndicator()}
					<gl-button
						class="header-toggle"
						appearance="toolbar"
						density="compact"
						tooltip="${this.ascending?"Showing Oldest Commits First":"Showing Newest Commits First"}"
						@click=${this.onOrderToggle}
					>
						<code-icon slot="prefix" icon="sort-precedence"></code-icon>
						<code-icon icon="${this.ascending?"arrow-up":"arrow-down"}"></code-icon>
					</gl-button>
				</div>
			</div>
			${this.isRebasing?this.renderRebaseBanner():e$}
		</header>`}renderSubhead(){if(!this.state)return e$;let e=this.doneEntries.filter(e=>"commit"===e.type).length,t=this.state.entries.filter(e=>"commit"===e.type).length,i=e+t,r="graph"===this.state.revealLocation?"Open in Commit Graph":"Open in Inspect View";return ew`
			<gl-tooltip hoist content=${r}>
				<gl-branch-name
					.name=${this.state.branch}
					tabindex="0"
					@click=${this.onBranchClick}
					@keydown=${this.onBranchKeydown}
					style="cursor: pointer"
				></gl-branch-name>
			</gl-tooltip>
			${this.state.onto?ew`<span class="header-onto"
						>onto
						<gl-tooltip hoist content=${r}>
							<gl-commit-sha
								.sha=${this.state.onto.sha}
								tabindex="0"
								@click=${this.onOntoClick}
								@keydown=${this.onOntoKeydown}
								style="cursor: pointer"
							></gl-commit-sha>
						</gl-tooltip>
					</span>`:e$}
			<span class="header-count"
				>${this.isRebasing?`${e}/${i} commits`:eJ("commit",t)}</span
			>
		`}renderFooter(){let e=this.isRebasing,t=this.rebaseStatus?.hasConflicts??!1;return ew`<footer>
			<div class="shortcuts">
				<code-icon icon="keyboard"></code-icon>
				<span class="shortcut"><kbd class="word">p</kbd><span>ick</span></span>
				<span class="shortcut"><kbd class="word">r</kbd><span>eword</span></span>
				<span class="shortcut"><kbd class="word">e</kbd><span>dit</span></span>
				<span class="shortcut"><kbd class="word">s</kbd><span>quash</span></span>
				<span class="shortcut"><kbd class="word">f</kbd><span>ixup</span></span>
				<span class="shortcut"><kbd class="word">d</kbd><span>rop</span></span>
				<span class="shortcut"><kbd>alt</kbd> <kbd>↑↓</kbd><span class="label">move</span></span>
				<span class="shortcut"><kbd>/</kbd><span class="label">search</span></span>
			</div>
			<div class="actions">
				${this.renderRecomposeAction(e)}
				${e?this.renderActiveRebaseActions(t):this.renderStartRebaseActions()}
			</div>
		</footer>`}renderStartRebaseActions(){let e,t,i;if(!this.isRebasing&&this.state?.branch&&this.state?.onto){let r=this._conflictIndicatorLoading,o=this._conflictIndicatorHasConflicts,s=this.conflictDetectionStale;r?(t="loading",i="Checking for conflicts..."):o?(e="warning",t="warning",i="Start Rebase (Conflicts Detected)"):s||(e="success",t="check",i="Start Rebase (No Conflicts Detected)")}return ew`<gl-button
				?disabled=${!this.state?.entries?.length}
				variant=${e??e$}
				tooltip=${i??e$}
				@click=${this.onStartClicked}
			>
				<span
					>Start Rebase
					${t?ew`<code-icon
								slot="label"
								icon=${t}
								modifier=${("loading"===t?"spin":void 0)??e$}
							></code-icon>`:e$}</span
				>
				<span slot="suffix" class="button-shortcut">Ctrl+Enter</span>
			</gl-button>
			<gl-button appearance="secondary" @click=${this.onAbortClicked}>Abort</gl-button>`}renderRecomposeAction(e){let t=this.state?.isInPlace??!1;return ew`<gl-popover-confirm
			heading="Abort Rebase &amp; Recompose"
			message=${t?"Let AI intelligently reorganize these commits with clearer messages and better logical grouping.":"Let AI intelligently reorganize these commits with clearer messages and better logical grouping. <br><br> After recomposition, simply rebase again to apply these commits onto the target branch."}
			confirm="Abort &gt; Recompose"
			confirm-variant=${(e?"danger":void 0)??e$}
			initial-focus=${e?"cancel":"confirm"}
			icon=${e?"error":"warning"}
			@gl-confirm=${this.onRecomposeCommitsClicked}
		>
			<gl-button slot="anchor" appearance="secondary" tooltip="Open Commit Composer &amp; Recompose using AI">
				<code-icon slot=${(e?void 0:"prefix")??e$} icon="sparkle"></code-icon>
				${e?e$:"Recompose..."}
			</gl-button>
		</gl-popover-confirm>`}renderActiveRebaseActions(e){return ew`
			<gl-button @click=${this.onContinueClicked} ?disabled=${e}>
				<span>Continue</span>
				<span slot="suffix" class="button-shortcut">Ctrl+Enter</span>
			</gl-button>
			<gl-button appearance="secondary" @click=${this.onSkipClicked}>Skip</gl-button>
			<gl-button variant="danger" @click=${this.onAbortClicked}>Abort</gl-button>
		`}};lm.styles=[iV,ij],lg([eq("lit-virtualizer")],lm.prototype,"_virtualizer",2),lg([eq("#header-conflict-indicator")],lm.prototype,"_conflictIndicator",2),lg([eM()],lm.prototype,"_conflictIndicatorLoading",2),lg([eM()],lm.prototype,"_conflictIndicatorHasConflicts",2),lg([eM()],lm.prototype,"_conflictingShas",2),lg([eM()],lm.prototype,"selectedIds",2),lg([eM()],lm.prototype,"conflictDetectionStale",2),lm=lg([eD("gl-rebase-editor")],lm);export{lm as GlRebaseEditor};