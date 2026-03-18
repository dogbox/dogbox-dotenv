let e,t,r,o,n;var a,c,h,p,f,g,m,b,v,y={602(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isWide=t.isFullWidth=t.isAmbiguous=void 0,t.isAmbiguous=e=>161===e||164===e||167===e||168===e||170===e||173===e||174===e||e>=176&&e<=180||e>=182&&e<=186||e>=188&&e<=191||198===e||208===e||215===e||216===e||e>=222&&e<=225||230===e||e>=232&&e<=234||236===e||237===e||240===e||242===e||243===e||e>=247&&e<=250||252===e||254===e||257===e||273===e||275===e||283===e||294===e||295===e||299===e||e>=305&&e<=307||312===e||e>=319&&e<=322||324===e||e>=328&&e<=331||333===e||338===e||339===e||358===e||359===e||363===e||462===e||464===e||466===e||468===e||470===e||472===e||474===e||476===e||593===e||609===e||708===e||711===e||e>=713&&e<=715||717===e||720===e||e>=728&&e<=731||733===e||735===e||e>=768&&e<=879||e>=913&&e<=929||e>=931&&e<=937||e>=945&&e<=961||e>=963&&e<=969||1025===e||e>=1040&&e<=1103||1105===e||8208===e||e>=8211&&e<=8214||8216===e||8217===e||8220===e||8221===e||e>=8224&&e<=8226||e>=8228&&e<=8231||8240===e||8242===e||8243===e||8245===e||8251===e||8254===e||8308===e||8319===e||e>=8321&&e<=8324||8364===e||8451===e||8453===e||8457===e||8467===e||8470===e||8481===e||8482===e||8486===e||8491===e||8531===e||8532===e||e>=8539&&e<=8542||e>=8544&&e<=8555||e>=8560&&e<=8569||8585===e||e>=8592&&e<=8601||8632===e||8633===e||8658===e||8660===e||8679===e||8704===e||8706===e||8707===e||8711===e||8712===e||8715===e||8719===e||8721===e||8725===e||8730===e||e>=8733&&e<=8736||8739===e||8741===e||e>=8743&&e<=8748||8750===e||e>=8756&&e<=8759||8764===e||8765===e||8776===e||8780===e||8786===e||8800===e||8801===e||e>=8804&&e<=8807||8810===e||8811===e||8814===e||8815===e||8834===e||8835===e||8838===e||8839===e||8853===e||8857===e||8869===e||8895===e||8978===e||e>=9312&&e<=9449||e>=9451&&e<=9547||e>=9552&&e<=9587||e>=9600&&e<=9615||e>=9618&&e<=9621||9632===e||9633===e||e>=9635&&e<=9641||9650===e||9651===e||9654===e||9655===e||9660===e||9661===e||9664===e||9665===e||e>=9670&&e<=9672||9675===e||e>=9678&&e<=9681||e>=9698&&e<=9701||9711===e||9733===e||9734===e||9737===e||9742===e||9743===e||9756===e||9758===e||9792===e||9794===e||9824===e||9825===e||e>=9827&&e<=9829||e>=9831&&e<=9834||9836===e||9837===e||9839===e||9886===e||9887===e||9919===e||e>=9926&&e<=9933||e>=9935&&e<=9939||e>=9941&&e<=9953||9955===e||9960===e||9961===e||e>=9963&&e<=9969||9972===e||e>=9974&&e<=9977||9979===e||9980===e||9982===e||9983===e||10045===e||e>=10102&&e<=10111||e>=11094&&e<=11097||e>=12872&&e<=12879||e>=57344&&e<=63743||e>=65024&&e<=65039||65533===e||e>=127232&&e<=127242||e>=127248&&e<=127277||e>=127280&&e<=127337||e>=127344&&e<=127373||127375===e||127376===e||e>=127387&&e<=127404||e>=917760&&e<=917999||e>=983040&&e<=1048573||e>=1048576&&e<=1114109,t.isFullWidth=e=>12288===e||e>=65281&&e<=65376||e>=65504&&e<=65510,t.isWide=e=>e>=4352&&e<=4447||8986===e||8987===e||9001===e||9002===e||e>=9193&&e<=9196||9200===e||9203===e||9725===e||9726===e||9748===e||9749===e||e>=9800&&e<=9811||9855===e||9875===e||9889===e||9898===e||9899===e||9917===e||9918===e||9924===e||9925===e||9934===e||9940===e||9962===e||9970===e||9971===e||9973===e||9978===e||9981===e||9989===e||9994===e||9995===e||10024===e||10060===e||10062===e||e>=10067&&e<=10069||10071===e||e>=10133&&e<=10135||10160===e||10175===e||11035===e||11036===e||11088===e||11093===e||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12287||e>=12289&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12591||e>=12593&&e<=12686||e>=12688&&e<=12771||e>=12783&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=94176&&e<=94180||94192===e||94193===e||e>=94208&&e<=100343||e>=100352&&e<=101589||e>=101632&&e<=101640||e>=110576&&e<=110579||e>=110581&&e<=110587||110589===e||110590===e||e>=110592&&e<=110882||110898===e||e>=110928&&e<=110930||110933===e||e>=110948&&e<=110951||e>=110960&&e<=111355||126980===e||127183===e||127374===e||e>=127377&&e<=127386||e>=127488&&e<=127490||e>=127504&&e<=127547||e>=127552&&e<=127560||127568===e||127569===e||e>=127584&&e<=127589||e>=127744&&e<=127776||e>=127789&&e<=127797||e>=127799&&e<=127868||e>=127870&&e<=127891||e>=127904&&e<=127946||e>=127951&&e<=127955||e>=127968&&e<=127984||127988===e||e>=127992&&e<=128062||128064===e||e>=128066&&e<=128252||e>=128255&&e<=128317||e>=128331&&e<=128334||e>=128336&&e<=128359||128378===e||128405===e||128406===e||128420===e||e>=128507&&e<=128591||e>=128640&&e<=128709||128716===e||e>=128720&&e<=128722||e>=128725&&e<=128727||e>=128732&&e<=128735||128747===e||128748===e||e>=128756&&e<=128764||e>=128992&&e<=129003||129008===e||e>=129292&&e<=129338||e>=129340&&e<=129349||e>=129351&&e<=129535||e>=129648&&e<=129660||e>=129664&&e<=129672||e>=129680&&e<=129725||e>=129727&&e<=129733||e>=129742&&e<=129755||e>=129760&&e<=129768||e>=129776&&e<=129784||e>=131072&&e<=196605||e>=196608&&e<=262141},5090(e,t,r){r.d(t,{FlowLayout:()=>FlowLayout,flow:()=>n}),r.r(t);let SizeCache=class SizeCache{constructor(e){this._map=new Map,this._roundAverageSize=!1,this.totalSize=0,e?.roundAverageSize===!0&&(this._roundAverageSize=!0)}set(e,t){let r=this._map.get(e)||0;this._map.set(e,t),this.totalSize+=t-r}get averageSize(){if(this._map.size>0){let e=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(e):e}return 0}getSize(e){return this._map.get(e)}clear(){this._map.clear(),this.totalSize=0}};function o(e){return"horizontal"===e?"width":"height"}let BaseLayout=class BaseLayout{_getDefaultConfig(){return{direction:"vertical"}}constructor(e,t){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=e,Promise.resolve().then(()=>this.config=t||this._getDefaultConfig())}set config(e){Object.assign(this,Object.assign({},this._getDefaultConfig(),e))}get config(){return{direction:this.direction}}get items(){return this._items}set items(e){this._setItems(e)}_setItems(e){e!==this._items&&(this._items=e,this._scheduleReflow())}get direction(){return this._direction}set direction(e){(e="horizontal"===e?e:"vertical")!==this._direction&&(this._direction=e,this._sizeDim="horizontal"===e?"width":"height",this._secondarySizeDim="horizontal"===e?"height":"width",this._positionDim="horizontal"===e?"left":"top",this._secondaryPositionDim="horizontal"===e?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(e){let{_viewDim1:t,_viewDim2:r}=this;Object.assign(this._viewportSize,e),r!==this._viewDim2?this._scheduleLayoutUpdate():t!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(e){Object.assign(this._latestCoords,e);let t=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim],Math.abs(t-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(e=!1){(e||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(e){this._pin=e,this._triggerReflow()}get pin(){if(null!==this._pin){let{index:e,block:t}=this._pin;return{index:Math.max(0,Math.min(e,this.items.length-1)),block:t}}return null}_clampScrollPosition(e){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(e,this.totalScrollSize[o(this.direction)]-this._viewDim1))}unpin(){null!==this._pin&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then(()=>this.reflowIfNeeded())}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(null!==this.pin){let e=this._scrollPosition,{index:t,block:r}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:t,block:r||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=e-this._scrollPosition}}_calculateScrollIntoViewPosition(e){let{block:t}=e,r=Math.min(this.items.length,Math.max(0,e.index)),o=this._getItemPosition(r)[this._positionDim],n=o;if("start"!==t){let e=this._getItemSize(r)[this._sizeDim];if("center"===t)n=o-.5*this._viewDim1+.5*e;else{let r=o-this._viewDim1+e;if("end"===t)n=r;else{let e=this._scrollPosition;n=Math.abs(e-o)<Math.abs(e-r)?o:r}}}return n+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(n)}getScrollIntoViewCoordinates(e){return{[this._positionDim]:this._calculateScrollIntoViewPosition(e)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){let e=new Map;if(-1!==this._first&&-1!==this._last)for(let t=this._first;t<=this._last;t++)e.set(t,this._getItemPosition(t));let t={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:e};this._scrollError&&(t.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(t)}get _num(){return -1===this._first||-1===this._last?0:this._last-this._first+1}_checkThresholds(){if(0===this._viewDim1&&this._num>0||null!==this._pin)this._scheduleReflow();else{let e=Math.max(0,this._scrollPosition-this._overhang),t=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>e||this._physicalMax<t?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(e){if(-1===this._first||-1===this._last)return;let t=this._first;for(;t<this._last&&Math.round(this._getItemPosition(t)[this._positionDim]+this._getItemSize(t)[this._sizeDim])<=Math.round(this._scrollPosition);)t++;let r=this._last;for(;r>this._first&&Math.round(this._getItemPosition(r)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)r--;(t!==this._firstVisible||r!==this._lastVisible)&&(this._firstVisible=t,this._lastVisible=r,e&&e.emit&&this._sendVisibilityChangedMessage())}};let n=e=>Object.assign({type:FlowLayout},e);function a(e){return"horizontal"===e?"marginLeft":"marginTop"}let MetricsCache=class MetricsCache{constructor(){this._childSizeCache=new SizeCache,this._marginSizeCache=new SizeCache,this._metricsCache=new Map}update(e,t){let r=new Set;for(let n of(Object.keys(e).forEach(n=>{let a=Number(n);this._metricsCache.set(a,e[a]),this._childSizeCache.set(a,e[a][o(t)]),r.add(a),r.add(a+1)}),r)){let e=this._metricsCache.get(n)?.[a(t)]||0,r=this._metricsCache.get(n-1)?.["horizontal"===t?"marginRight":"marginBottom"]||0;this._marginSizeCache.set(n,function(e,t){let r=[e,t].sort();return r[1]<=0?Math.min(...r):r[0]>=0?Math.max(...r):r[0]+r[1]}(e,r))}}get averageChildSize(){return this._childSizeCache.averageSize}get totalChildSize(){return this._childSizeCache.totalSize}get averageMarginSize(){return this._marginSizeCache.averageSize}get totalMarginSize(){return this._marginSizeCache.totalSize}getLeadingMarginValue(e,t){return this._metricsCache.get(e)?.[a(t)]||0}getChildSize(e){return this._childSizeCache.getSize(e)}getMarginSize(e){return this._marginSizeCache.getSize(e)}clear(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}};let FlowLayout=class FlowLayout extends BaseLayout{constructor(){super(...arguments),this._itemSize={width:100,height:100},this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metricsCache=new MetricsCache,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(e){this._metricsCache.update(e,this.direction),this._scheduleReflow()}_getPhysicalItem(e){return this._newPhysicalItems.get(e)??this._physicalItems.get(e)}_getSize(e){return this._getPhysicalItem(e)&&this._metricsCache.getChildSize(e)}_getAverageSize(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}_estimatePosition(e){let t=this._metricsCache;if(-1===this._first||-1===this._last)return t.averageMarginSize+e*(t.averageMarginSize+this._getAverageSize());if(e<this._first){let r=this._first-e;return this._getPhysicalItem(this._first).pos-(t.getMarginSize(this._first-1)||t.averageMarginSize)-(r*t.averageChildSize+(r-1)*t.averageMarginSize)}{let r=e-this._last;return this._getPhysicalItem(this._last).pos+(t.getChildSize(this._last)||t.averageChildSize)+(t.getMarginSize(this._last)||t.averageMarginSize)+r*(t.averageChildSize+t.averageMarginSize)}}_getPosition(e){let t=this._getPhysicalItem(e),{averageMarginSize:r}=this._metricsCache;return 0===e?this._metricsCache.getMarginSize(0)??r:t?t.pos:this._estimatePosition(e)}_calculateAnchor(e,t){return e<=0?0:t>this._scrollSize-this._viewDim1?this.items.length-1:Math.max(0,Math.min(this.items.length-1,Math.floor((e+t)/2/this._delta)))}_getAnchor(e,t){if(0===this._physicalItems.size||this._first<0||this._last<0)return this._calculateAnchor(e,t);let r=this._getPhysicalItem(this._first),o=this._getPhysicalItem(this._last),n=r.pos;if(o.pos+this._metricsCache.getChildSize(this._last)<e||n>t)return this._calculateAnchor(e,t);let a=this._firstVisible-1,c=-1/0;for(;c<e;)c=this._getPhysicalItem(++a).pos+this._metricsCache.getChildSize(a);return a}_getActiveItems(){0===this._viewDim1||0===this.items.length?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;let e=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=e,this._stable=!0}_getItems(){let e,t,r=this._newPhysicalItems;if(this._stable=!0,null!==this.pin){let{index:e}=this.pin;this._anchorIdx=e,this._anchorPos=this._getPosition(e)}if(e=this._scrollPosition-this._overhang,(t=this._scrollPosition+this._viewDim1+this._overhang)<0||e>this._scrollSize)return void this._clearItems();(null===this._anchorIdx||null===this._anchorPos)&&(this._anchorIdx=this._getAnchor(e,t),this._anchorPos=this._getPosition(this._anchorIdx));let o=this._getSize(this._anchorIdx);void 0===o&&(this._stable=!1,o=this._getAverageSize());let n=this._metricsCache.getMarginSize(this._anchorIdx)??this._metricsCache.averageMarginSize,a=this._metricsCache.getMarginSize(this._anchorIdx+1)??this._metricsCache.averageMarginSize;0===this._anchorIdx&&(this._anchorPos=n),this._anchorIdx===this.items.length-1&&(this._anchorPos=this._scrollSize-a-o);let c=0;for(this._anchorPos+o+a<e&&(c=e-(this._anchorPos+o+a)),this._anchorPos-n>t&&(c=t-(this._anchorPos-n)),c&&(this._scrollPosition-=c,e-=c,t-=c,this._scrollError+=c),r.set(this._anchorIdx,{pos:this._anchorPos,size:o}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-n,this._physicalMax=this._anchorPos+o+a;this._physicalMin>e&&this._first>0;){let e=this._getSize(--this._first);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._first);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize),this._physicalMin-=e;let o=this._physicalMin;if(r.set(this._first,{pos:o,size:e}),this._physicalMin-=t,!1===this._stable&&!1===this._estimate)break}for(;this._physicalMax<t&&this._last<this.items.length-1;){let e=this._getSize(++this._last);void 0===e&&(this._stable=!1,e=this._getAverageSize());let t=this._metricsCache.getMarginSize(this._last);void 0===t&&(this._stable=!1,t=this._metricsCache.averageMarginSize);let o=this._physicalMax;if(r.set(this._last,{pos:o,size:e}),this._physicalMax+=e+t,!this._stable&&!this._estimate)break}let h=this._calculateError();h&&(this._physicalMin-=h,this._physicalMax-=h,this._anchorPos-=h,this._scrollPosition-=h,r.forEach(e=>e.pos-=h),this._scrollError+=h),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=r)}_calculateError(){return 0===this._first?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this.items.length-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this.items.length-1-this._last)*this._delta:0}_reflow(){let{_first:e,_last:t}=this;super._reflow(),(-1===this._first&&-1==this._last||this._first===e&&this._last===t)&&this._resetReflowState()}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_updateScrollSize(){let{averageMarginSize:e}=this._metricsCache;this._scrollSize=Math.max(1,this.items.length*(e+this._getAverageSize())+e)}get _delta(){let{averageMarginSize:e}=this._metricsCache;return this._getAverageSize()+e}_getItemPosition(e){return{[this._positionDim]:this._getPosition(e),[this._secondaryPositionDim]:0,["horizontal"===this.direction?"xOffset":"yOffset"]:-(this._metricsCache.getLeadingMarginValue(e,this.direction)??this._metricsCache.averageMarginSize)}}_getItemSize(e){return{[this._sizeDim]:this._getSize(e)||this._getAverageSize(),[this._secondarySizeDim]:this._itemSize[this._secondarySizeDim]}}_viewDim2Changed(){this._metricsCache.clear(),this._scheduleReflow()}}},6047(e,t,r){r(602)}},_={};function w(e){var t=_[e];if(void 0!==t)return t.exports;var r=_[e]={exports:{}};return y[e](r,r.exports,w),r.exports}function k(e,t,r){let o,n,a,c,h,p,f,g,m,b,v=0;null!=r&&({edges:p,maxWait:f,signal:g,aggregator:m}=r);let y="leading"===(p??="trailing")||"both"===p,_="trailing"===p||"both"===p;function w(){if(null!=o){v=Date.now();let t=o,r=b;return b=void 0,o=void 0,a=e.apply(r,t)}}function k(){null!=c&&(clearTimeout(c),c=void 0)}function x(){null!=h&&(clearTimeout(h),h=void 0)}function C(){k(),x(),b=void 0,o=void 0,n=void 0,v=0}function S(...e){if(g?.aborted)return;let r=Date.now();null!=m&&null!=o?o=m(o,e):(b=this,o=e);let p=null==c&&null==h;n=r,k();let x=Date.now();if(n=x,c=setTimeout(()=>{c=void 0,function e(){let r,o,a=Date.now();if(r=a-(n??0),o=a-v,null==n||r>=t||r<0||null!=f&&o>=f){_&&w(),C();return}c=setTimeout(()=>{c=void 0,e()},t-(a-(n??0)))}()},t),null!=f&&!h){0===v&&(v=x);let e=f-(x-v);e>0?h=setTimeout(()=>{h=void 0,_&&null!=o&&w(),v=Date.now()},e):(_&&null!=o&&w(),C())}return y&&p?w():a}return S.cancel=C,S.flush=function(){return k(),x(),w()},S.pending=function(){return null!=c||null!=h},g?.addEventListener("abort",C,{once:!0}),S}w.d=(e,t)=>{for(var r in t)w.o(t,r)&&!w.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),w.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},Object.defineProperty(w,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch{return"#{root}/dist/webviews/"}},set:function(e){}});let IpcCall=class IpcCall{constructor(e,t,r=!1){this.scope=e,this.reset=r,this.method=`${e}/${t}`}is(e){return e.method===this.method}};let IpcCommand=class IpcCommand extends IpcCall{};let IpcRequest=class IpcRequest extends IpcCall{constructor(e,t,r){super(e,t,r),this.response=new IpcNotification(this.scope,`${t}/completion`,this.reset)}};let IpcNotification=class IpcNotification extends IpcCall{};let x="patchDetails",C=new IpcCommand(x,"apply"),S=new IpcCommand(x,"archive"),A=new IpcCommand(x,"create");new IpcCommand(x,"openInGraph");let E=new IpcCommand(x,"checked"),P=new IpcCommand(x,"selectRepo"),I=new IpcCommand(x,"selectBase"),R=new IpcCommand(x,"file/actions/execute"),T=new IpcCommand(x,"file/open"),M=new IpcCommand(x,"file/openOnRemote"),L=new IpcCommand(x,"file/compareWorking"),O=new IpcCommand(x,"file/comparePrevious"),D=new IpcCommand(x,"preferences/update"),N=new IpcCommand(x,"switchMode"),B=new IpcCommand(x,"cloud/copyLink"),U=new IpcCommand(x,"local/createPatch"),j=new IpcCommand(x,"create/repository/check"),H=new IpcCommand(x,"update/create/metadata"),F=new IpcCommand(x,"update/draft/metadata"),V=new IpcCommand(x,"update/draft/permissions"),q=new IpcCommand(x,"update/users"),W=new IpcCommand(x,"update/userSelection"),K=new IpcRequest(x,"explain"),G=new IpcRequest(x,"generate"),X=new IpcNotification(x,"didChange",!0),Y=new IpcNotification(x,"create/didChange"),J=new IpcNotification(x,"draft/didChange"),ee=new IpcNotification(x,"preferences/didChange"),ei=new IpcNotification(x,"draft/didChangeRepository");new IpcNotification(x,"org/settings/didChange");let er=new IpcRequest("core","webview/ready"),es=new IpcCommand("core","webview/focus/changed"),eo=new IpcCommand("core","command/execute"),en=new IpcRequest("core","promos/applicable");new IpcCommand("core","configuration/update");let ea=new IpcCommand("core","telemetry/sendEvent"),el=new IpcNotification("core","ipc/promise/settled");new IpcNotification("core","window/focus/didChange");let ec=new IpcCommand("core","webview/focus/didChange"),eh=new IpcNotification("core","webview/visibility/didChange");new IpcNotification("core","configuration/didChange");let context_request_event_s=class context_request_event_s extends Event{constructor(e,t,r,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=r,this.subscribe=o??!1}};let value_notifier_s=class value_notifier_s{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let r=t||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:t}]of this.subscriptions)e(this.o,t)},void 0!==e&&(this.value=e)}addCallback(e,t,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});let{disposer:o}=this.subscriptions.get(e);e(this.value,o)}clearCallbacks(){this.subscriptions.clear()}};let context_provider_e=class context_provider_e extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};let i=class i extends value_notifier_s{constructor(e,t,r){super(void 0!==t.context?t.initialValue:r),this.onContextRequest=e=>{if(e.context!==this.context)return;let t=e.contextTarget??e.composedPath()[0];t!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,t,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;let t=new Set;for(let[e,{consumerHost:r}]of this.subscriptions)t.has(e)||(t.add(e),r.dispatchEvent(new context_request_event_s(this.context,r,e,!0)));e.stopPropagation()},this.host=e,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context,this.host))}};function ed(e){let t=.001*performance.now(),r=Math.floor(t),o=Math.floor(t%1*1e9);return void 0!==e&&(r-=e[0],(o-=e[1])<0&&(r--,o+=1e9)),[r,o]}w(6047);var ep=((a=ep||{})[a.Hash=35]="Hash",a[a.Slash=47]="Slash",a[a.Digit0=48]="Digit0",a[a.Digit1=49]="Digit1",a[a.Digit2=50]="Digit2",a[a.Digit3=51]="Digit3",a[a.Digit4=52]="Digit4",a[a.Digit5=53]="Digit5",a[a.Digit6=54]="Digit6",a[a.Digit7=55]="Digit7",a[a.Digit8=56]="Digit8",a[a.Digit9=57]="Digit9",a[a.Backslash=92]="Backslash",a[a.A=65]="A",a[a.B=66]="B",a[a.C=67]="C",a[a.D=68]="D",a[a.E=69]="E",a[a.F=70]="F",a[a.Z=90]="Z",a[a.a=97]="a",a[a.b=98]="b",a[a.c=99]="c",a[a.d=100]="d",a[a.e=101]="e",a[a.f=102]="f",a[a.z=122]="z",a),eu=((c=eu||{}).AngleBracketLeftHeavy="❰",c.AngleBracketRightHeavy="❱",c.ArrowBack="↩",c.ArrowDown="↓",c.ArrowDownUp="⇵",c.ArrowDropRight="⤷",c.ArrowHeadRight="➤",c.ArrowLeft="←",c.ArrowLeftDouble="⇐",c.ArrowLeftRight="↔",c.ArrowLeftRightDouble="⇔",c.ArrowLeftRightDoubleStrike="⇎",c.ArrowLeftRightLong="⟷",c.ArrowRight="→",c.ArrowRightDouble="⇒",c.ArrowRightHollow="⇨",c.ArrowUp="↑",c.ArrowUpDown="⇅",c.ArrowUpRight="↗",c.ArrowsHalfLeftRight="⇋",c.ArrowsHalfRightLeft="⇌",c.ArrowsLeftRight="⇆",c.ArrowsRightLeft="⇄",c.Asterisk="∗",c.Bullseye="◎",c.Check="✔",c.Dash="—",c.Dot="•",c.Ellipsis="…",c.EnDash="–",c.Envelope="✉",c.EqualsTriple="≡",c.Flag="⚑",c.FlagHollow="⚐",c.MiddleEllipsis="⋯",c.MuchLessThan="≪",c.MuchGreaterThan="≫",c.Pencil="✎",c.Space=" ",c.SpaceThin=" ",c.SpaceThinnest=" ",c.SquareWithBottomShadow="❏",c.SquareWithTopShadow="❐",c.Warning="⚠",c.ZeroWidthSpace="​",c);Object.freeze({".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".jpeg":"image/jpeg",".jpe":"image/jpeg",".webp":"image/webp",".tif":"image/tiff",".tiff":"image/tiff",".bmp":"image/bmp"}),Object.freeze(["left","alt+left","ctrl+left","right","alt+right","ctrl+right","alt+,","alt+.","alt+enter","ctrl+enter","escape"]);var ef=((h=ef||{}).File="file",h.Git="git",h.GitHub="github",h.GitLens="gitlens",h.GitLensAIMarkdown="gitlens-ai-markdown",h.PRs="pr",h.Remote="vscode-remote",h.Vsls="vsls",h.VslsScc="vsls-scc",h.Virtual="vscode-vfs",h);Object.freeze(new Set(["file","git","gitlens","pr","vscode-remote","vsls","vsls-scc","vscode-vfs","github"]));let eg="source=gitlens&product=gitlens&utm_source=gitlens-extension&utm_medium=in-app-links",em=Object.freeze({codeSuggest:`https://gitkraken.com/solutions/code-suggest?${eg}`,cloudPatches:`https://gitkraken.com/solutions/cloud-patches?${eg}`,graph:`https://gitkraken.com/solutions/commit-graph?${eg}`,launchpad:`https://gitkraken.com/solutions/launchpad?${eg}`,platform:`https://gitkraken.com/devex?${eg}`,pricing:`https://gitkraken.com/gitlens/pricing?${eg}`,proFeatures:`https://gitkraken.com/gitlens/pro-features?${eg}`,security:`https://help.gitkraken.com/gitlens/security?${eg}`,workspaces:`https://gitkraken.com/solutions/workspaces?${eg}`,cli:`https://gitkraken.com/cli?${eg}`,browserExtension:`https://gitkraken.com/browser-extension?${eg}`,desktop:`https://gitkraken.com/git-client?${eg}`,githubIssues:`https://github.com/gitkraken/vscode-gitlens/issues/?${eg}`,githubDiscussions:`https://github.com/gitkraken/vscode-gitlens/discussions/?${eg}`,helpCenter:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eg}`,helpCenterHome:`https://help.gitkraken.com/gitlens/home-view/?${eg}`,helpCenterMCP:`https://help.gitkraken.com/mcp/mcp-getting-started/?${eg}`,releaseNotes:`https://help.gitkraken.com/gitlens/gitlens-release-notes-current/?${eg}`,acceleratePrReviews:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eg}#accelerate-pr-reviews`,communityVsPro:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eg}`,homeView:`https://help.gitkraken.com/gitlens/home-view/?${eg}&utm_campaign=walkthrough`,interactiveCodeHistory:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eg}#interactive-code-history`,startIntegrations:`https://help.gitkraken.com/gitlens/gitlens-start-here/?${eg}#improve-workflows-with-integrations`,aiFeatures:`https://help.gitkraken.com/gitlens/gl-gk-ai/?${eg}`,getStarted:`https://help.gitkraken.com/gitlens/gitlens-home/?${eg}`,welcomeInTrial:`https://help.gitkraken.com/gitlens/gitlens-home/?${eg}`,welcomePaid:`https://help.gitkraken.com/gitlens/gitlens-home/?${eg}`,welcomeTrialExpired:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eg}`,welcomeTrialReactivationEligible:`https://help.gitkraken.com/gitlens/gitlens-community-vs-gitlens-pro/?${eg}`});function eb(e){let[t,r]=ed(e);return 1e3*t+Math.floor(r/1e6)}new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62,0,0,0,63,52,53,54,55,56,57,58,59,60,61,0,0,0,64,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,0,0,0,0,0,0,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51]);var ev=((p=ev||{})[p.Off=0]="Off",p[p.Error=1]="Error",p[p.Warn=2]="Warn",p[p.Info=3]="Info",p[p.Debug=4]="Debug",p);let ey=["accessToken","password","token"],e_=new class Logger2{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(e,t,r=!1){if(null!=e.sanitizeKeys)for(let t of ey)e.sanitizeKeys.add(t);else e.sanitizeKeys=new Set(ey);this.provider=e,this._isDebugging=r,this.logLevel=t}enabled(e){return!!this.isDebugging||(null==e?this.level>0:this.level>=ew(e))}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=ew(this._logLevel),"off"===e?(this.output?.dispose?.(),this.output=void 0):this.output??=this.provider.createChannel(this.provider.name)}get timestamp(){return`[${new Date().toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){let r;this.level<4&&!this.isDebugging||("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!0,t)}`))}error(e,t,...r){let o;if(!(this.level<1)||this.isDebugging){if(null==(o=null==t||"string"==typeof t?t:`${t.prefix} ${r.shift()??""}`)){let t=e instanceof Error?e.stack:void 0;if(t){let e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(o=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${o??""}${this.toLoggableParams(!1,r)}${null!=e?`
${String(e)}`:""}`)}}log(e,...t){let r;this.level<3&&!this.isDebugging||("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}warn(e,...t){let r;this.level<2&&!this.isDebugging||("string"==typeof e?r=e:(r=t.shift(),null!=e&&(r=`${e.prefix} ${r??""}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${r??""}${this.toLoggableParams(!1,t)}`))}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map(e=>this.toLoggable(e,t)).join(", ")}]`;let r=this.provider.toLoggable?.(e);if(null!=r)return r;try{return JSON.stringify(e,(e,r)=>this.provider.sanitizeKeys.has(e)?`<${e}>`:(null!=t&&(r=t(e,r)),this.provider?.sanitizer!=null&&(r=this.provider.sanitizer(e,r)),r))}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return"";let r=t.map(e=>this.toLoggable(e)).join(", ");return 0!==r.length?` \u2014 ${r}`:""}};function ew(e){switch(e){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}let ek=new WeakMap,ex={enabled:e=>e_.enabled(e),log:(e,t,r,...o)=>{switch(e){case"error":e_.error(void 0,t,r,...o);break;case"warn":e_.warn(t,r,...o);break;case"info":e_.log(t,r,...o);break;default:e_.debug(t,r,...o)}}},e$=0x40000000-1;function eC(){let e=0;return{get current(){return e},next:function(){return e===e$&&(e=0),++e},reset:function(){e=0}}}let eS=eC(),eA=new Map;function eE(e,t){return null==t?`[${e.toString(16).padStart(13)}]`:`[${t.toString(16).padStart(5)} \u2192 ${e.toString(16).padStart(5)}]`}function eP(e,t){if(null!=t&&"boolean"!=typeof t)return{scopeId:t.scopeId,prevScopeId:t.prevScopeId,prefix:`${t.prefix}${e}`};let r=t?eS.current:void 0,o=eS.next();return{scopeId:o,prevScopeId:r,prefix:`${eE(o,r)} ${e}`}}let LoggerContext=class LoggerContext{constructor(e){this.scope=eP(e,void 0),e_.configure({name:e,createChannel:function(e){return{name:e,appendLine:e_.isDebugging?function(){}:function(e){}}}},"off",!1)}log(e,...t){"string"==typeof e?e_.log(this.scope,e,...t):e_.log(e,t.shift(),...t)}};let eI="home";new IpcRequest(eI,"launchpad/summary"),new IpcRequest(eI,"overview/active"),new IpcRequest(eI,"overview/inactive"),new IpcRequest(eI,"overviewFilter"),new IpcCommand(eI,"overview/repository/change"),new IpcNotification(eI,"overview/repository/didChange"),new IpcCommand(eI,"previewEnabled/toggle"),new IpcCommand(eI,"section/collapse"),new IpcCommand(eI,"walkthrough/dismiss"),new IpcNotification(eI,"ai/allAccess/didChange"),new IpcNotification(eI,"mcp/didChange"),new IpcCommand(eI,"ai/allAccess/dismiss"),new IpcCommand(eI,"overview/filter/set"),new IpcCommand(eI,"openInGraph"),new IpcNotification(eI,"repositories/didCompleteDiscovering"),new IpcNotification(eI,"previewEnabled/didChange"),new IpcNotification(eI,"repository/wip/didChange"),new IpcNotification(eI,"repositories/didChange"),new IpcNotification(eI,"walkthroughProgress/didChange"),new IpcNotification(eI,"integrations/didChange"),new IpcNotification(eI,"launchpad/didChange");let eR=new IpcNotification(eI,"subscription/didChange");new IpcNotification(eI,"org/settings/didChange"),new IpcNotification(eI,"home/ownerFilter/didChange"),new IpcNotification(eI,"account/didFocus");let eT="graph";new IpcCommand(eT,"chooseRepository"),new IpcCommand(eT,"dblclick"),new IpcCommand(eT,"avatars/get"),new IpcCommand(eT,"refs/metadata/get"),new IpcCommand(eT,"rows/get"),new IpcCommand(eT,"pullRequest/openDetails"),new IpcCommand(eT,"row/action"),new IpcCommand(eT,"search/openInView"),new IpcCommand(eT,"search/cancel"),new IpcCommand(eT,"columns/update"),new IpcCommand(eT,"refs/update/visibility"),new IpcCommand(eT,"filters/update/excludeTypes"),new IpcCommand(eT,"configuration/update"),new IpcCommand(eT,"search/update/mode"),new IpcCommand(eT,"filters/update/includedRefs"),new IpcCommand(eT,"selection/update"),new IpcRequest(eT,"jumpToHead"),new IpcRequest(eT,"chooseRef"),new IpcRequest(eT,"chooseComparison"),new IpcRequest(eT,"chooseAuthor"),new IpcRequest(eT,"chooseFile"),new IpcRequest(eT,"rows/ensure"),new IpcRequest(eT,"search/history/get"),new IpcRequest(eT,"search/history/store"),new IpcRequest(eT,"search/history/delete"),new IpcRequest(eT,"counts"),new IpcRequest(eT,"row/hover/get"),new IpcRequest(eT,"search"),new IpcNotification(eT,"repositories/integration/didChange"),new IpcNotification(eT,"didChange",!0),new IpcNotification(eT,"configuration/didChange");let ez=new IpcNotification(eT,"subscription/didChange");new IpcNotification(eT,"org/settings/didChange"),new IpcNotification(eT,"avatars/didChange"),new IpcNotification(eT,"mcp/didChange"),new IpcNotification(eT,"branchState/didChange"),new IpcNotification(eT,"refs/didChangeMetadata"),new IpcNotification(eT,"columns/didChange"),new IpcNotification(eT,"scrollMarkers/didChange"),new IpcNotification(eT,"refs/didChangeVisibility"),new IpcNotification(eT,"rows/didChange"),new IpcNotification(eT,"rows/stats/didChange"),new IpcNotification(eT,"selection/didChange"),new IpcNotification(eT,"workingTree/didChange"),new IpcNotification(eT,"didSearch"),new IpcNotification(eT,"didFetch"),new IpcNotification(eT,"featurePreview/didStart");let eM="timeline";new IpcRequest(eM,"ref/choose"),new IpcRequest(eM,"path/choose"),new IpcCommand(eM,"point/open"),new IpcCommand(eM,"config/update"),new IpcCommand(eM,"scope/update");let eL=new IpcNotification(eM,"didChange");let PromosContext=class PromosContext{constructor(e){this.disposables=[],this._promos=new Map,this.ipc=e,this.disposables.push(this.ipc.onReceiveMessage(e=>{(eR.is(e)||ez.is(e)||eL.is(e))&&this._promos.clear()}))}async getApplicablePromo(e,t){let r=`${e}|${t}`,o=this._promos.get(r);return null==o&&(o=this.ipc.sendRequest(en,{plan:e,location:t}).then(e=>e.promo,()=>void 0),this._promos.set(r,o)),await o}dispose(){this.disposables.forEach(e=>e.dispose())}};let TelemetryContext=class TelemetryContext{constructor(e){this.disposables=[],this.ipc=e}sendEvent(e){this.ipc.sendCommand(ea,e)}dispose(){this.disposables.forEach(e=>e.dispose())}};(m||(m={})).on=function(e,t,r,o){let n=!1;if("string"==typeof e){let a=function(t){let o=t?.target?.closest(e);null!=o&&r(t,o)};return document.addEventListener(t,a,o??!0),{dispose:()=>{n||(n=!0,document.removeEventListener(t,a,o??!0))}}}let a=function(e){r(e,this)};return e.addEventListener(t,a,o??!1),{dispose:()=>{n||(n=!0,e.removeEventListener(t,a,o??!1))}}};var eO=Uint8Array,eD=Uint16Array,eN=Int32Array,eB=new eO([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),eU=new eO([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ej=new eO([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),eH=function(e,t){for(var r=new eD(31),o=0;o<31;++o)r[o]=t+=1<<e[o-1];for(var n=new eN(r[30]),o=1;o<30;++o)for(var a=r[o];a<r[o+1];++a)n[a]=a-r[o]<<5|o;return{b:r,r:n}},eF=eH(eB,2),eV=eF.b,eq=eF.r;eV[28]=258,eq[258]=28;var eW=eH(eU,0),eK=eW.b;eW.r;for(var eG=new eD(32768),eZ=0;eZ<32768;++eZ){var eX=(43690&eZ)>>1|(21845&eZ)<<1;eX=(61680&(eX=(52428&eX)>>2|(13107&eX)<<2))>>4|(3855&eX)<<4,eG[eZ]=((65280&eX)>>8|(255&eX)<<8)>>1}for(var eY=function(e,t,r){for(var o,n=e.length,a=0,c=new eD(t);a<n;++a)e[a]&&++c[e[a]-1];var h=new eD(t);for(a=1;a<t;++a)h[a]=h[a-1]+c[a-1]<<1;if(r){o=new eD(1<<t);var p=15-t;for(a=0;a<n;++a)if(e[a])for(var f=a<<4|e[a],g=t-e[a],m=h[e[a]-1]++<<g,b=m|(1<<g)-1;m<=b;++m)o[eG[m]>>p]=f}else for(a=0,o=new eD(n);a<n;++a)e[a]&&(o[a]=eG[h[e[a]-1]++]>>15-e[a]);return o},eQ=new eO(288),eZ=0;eZ<144;++eZ)eQ[eZ]=8;for(var eZ=144;eZ<256;++eZ)eQ[eZ]=9;for(var eZ=256;eZ<280;++eZ)eQ[eZ]=7;for(var eZ=280;eZ<288;++eZ)eQ[eZ]=8;for(var eJ=new eO(32),eZ=0;eZ<32;++eZ)eJ[eZ]=5;var e0=eY(eQ,9,1),e1=eY(eJ,5,1),e2=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},e5=function(e,t,r){var o=t/8|0;return(e[o]|e[o+1]<<8)>>(7&t)&r},e3=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(7&t)},e6=function(e,t,r){return(null==t||t<0)&&(t=0),(null==r||r>e.length)&&(r=e.length),new eO(e.subarray(t,r))},e7=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],e9=function(e,t,r){var o=Error(t||e7[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,e9),!r)throw o;return o},e8=function(e,t,r,o){var n=e.length,a=o?o.length:0;if(!n||t.f&&!t.l)return r||new eO(0);var c=!r,h=c||2!=t.i,p=t.i;c&&(r=new eO(3*n));var f=function(e){var t=r.length;if(e>t){var o=new eO(Math.max(2*t,e));o.set(r),r=o}},g=t.f||0,m=t.p||0,b=t.b||0,v=t.l,y=t.d,_=t.m,w=t.n,k=8*n;do{if(!v){g=e5(e,m,1);var x=e5(e,m+1,3);if(m+=3,x)if(1==x)v=e0,y=e1,_=9,w=5;else if(2==x){var C=e5(e,m,31)+257,S=e5(e,m+10,15)+4,A=C+e5(e,m+5,31)+1;m+=14;for(var E=new eO(A),P=new eO(19),I=0;I<S;++I)P[ej[I]]=e5(e,m+3*I,7);m+=3*S;for(var R=e2(P),T=(1<<R)-1,M=eY(P,R,1),I=0;I<A;){var L=M[e5(e,m,T)];m+=15&L;var O=L>>4;if(O<16)E[I++]=O;else{var D=0,N=0;for(16==O?(N=3+e5(e,m,3),m+=2,D=E[I-1]):17==O?(N=3+e5(e,m,7),m+=3):18==O&&(N=11+e5(e,m,127),m+=7);N--;)E[I++]=D}}var B=E.subarray(0,C),U=E.subarray(C);_=e2(B),w=e2(U),v=eY(B,_,1),y=eY(U,w,1)}else e9(1);else{var O=((m+7)/8|0)+4,j=e[O-4]|e[O-3]<<8,H=O+j;if(H>n){p&&e9(0);break}h&&f(b+j),r.set(e.subarray(O,H),b),t.b=b+=j,t.p=m=8*H,t.f=g;continue}if(m>k){p&&e9(0);break}}h&&f(b+131072);for(var F=(1<<_)-1,V=(1<<w)-1,q=m;;q=m){var D=v[e3(e,m)&F],W=D>>4;if((m+=15&D)>k){p&&e9(0);break}if(D||e9(2),W<256)r[b++]=W;else if(256==W){q=m,v=null;break}else{var K=W-254;if(W>264){var I=W-257,G=eB[I];K=e5(e,m,(1<<G)-1)+eV[I],m+=G}var X=y[e3(e,m)&V],Y=X>>4;X||e9(3),m+=15&X;var U=eK[Y];if(Y>3){var G=eU[Y];U+=e3(e,m)&(1<<G)-1,m+=G}if(m>k){p&&e9(0);break}h&&f(b+131072);var J=b+K;if(b<U){var ee=a-U,ei=Math.min(U,J);for(ee+b<0&&e9(3);b<ei;++b)r[b]=o[ee+b]}for(;b<J;++b)r[b]=r[b-U]}}t.l=v,t.p=q,t.b=b,t.f=g,v&&(g=1,t.m=_,t.d=y,t.n=w)}while(!g)return b!=r.length&&c?e6(r,0,b):r.subarray(0,b)},e4=new eO(0),te="u">typeof TextDecoder&&new TextDecoder;try{te.decode(e4,{stream:!0})}catch{}var tt=function(e){for(var t="",r=0;;){var o=e[r++],n=(o>127)+(o>223)+(o>239);if(r+n>e.length)return{s:t,r:e6(e,r-1)};n?3==n?t+=String.fromCharCode(55296|(o=((15&o)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536)>>10,56320|1023&o):1&n?t+=String.fromCharCode((31&o)<<6|63&e[r++]):t+=String.fromCharCode((15&o)<<12|(63&e[r++])<<6|63&e[r++]):t+=String.fromCharCode(o)}};function ti(e,t){if(t){for(var r="",o=0;o<e.length;o+=16384)r+=String.fromCharCode.apply(null,e.subarray(o,o+16384));return r}if(te)return te.decode(e);var n=tt(e),a=n.s,r=n.r;return r.length&&e9(8),a}"function"==typeof queueMicrotask&&queueMicrotask;let tr=/\(([\s\S]*)\)/,ts=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,to=/\s?=.*$/;function tn(e,t){if(null==e)return 0;let r=0;for(let o of e)r+=t(o);return r}function ta(e,t=!1){let r,o,n,a,c,h=0,p=!1,f=!1,g=!0;null!=e&&({args:r,if:o,enter:n,exit:a,prefix:c,logThreshold:h=0,scoped:p=!0,singleLine:f=!1,timed:g=!0}=e),h>0&&(f=!0,g=!0),g&&(p=!0);let m=t?e_.debug:e_.log,b=e_.isDebugging?"debug":"info";return(e,t,v)=>{let y,_;if("function"==typeof v.value?(y=v.value,_="value"):"function"==typeof v.get&&(y=v.get,_="get"),null==y||null==_)throw Error("Not supported");let w=!1!==r?function(e){if("function"!=typeof e)throw Error("Not supported");if(0===e.length)return[];let t=Function.prototype.toString.call(e),r=(t=(t=t.replace(ts,"")||t).slice(0,t.indexOf("{"))).indexOf("("),o=t.indexOf(")");r=r>=0?r+1:0,o=o>0?o:t.indexOf("="),t=t.slice(r,o),t=`(${t})`;let n=tr.exec(t);return null!=n?n[1].split(",").map(e=>e.trim().replace(to,"")):[]}(y):[];v[_]=function(...e){var v,_;let k,x;if(!e_.enabled(b)||null!=o&&!o.apply(this,e))return y.apply(this,e);let C=eS.current,S=eS.next(),A=this!=null?function(e){let t;if("function"==typeof e){if(null==(t=e.prototype?.constructor))return e.name}else t=e.constructor;let r=t?.name??"",o=r.indexOf("_");-1!==o&&(r=r.substring(o+1));let n=t;for(;null!=n;){let t=ek.get(n);if(null!=t)return t(e,r);n=Object.getPrototypeOf(n)}return r}(this):void 0,E=A?p?`${eE(S,C)} ${A}.${t}`:`${A}.${t}`:t;null!=c&&(E=c({id:S,instance:this,instanceName:A??"",name:t,prefix:E},...e)),p&&(v={scopeId:S,prevScopeId:C,prefix:E},v={prevScopeId:eS.current,...v},eA.set(S,v),k=v);let P=null!=n?n(...e):"";if(!1===r||0===e.length)x="",f||m.call(e_,`${E}${P}`);else{let t,o,n,a;x="";let c=-1;for(a of e){if(o=w[++c],null!=(t=r?.[c])){if("boolean"==typeof t)continue;if(x.length>0&&(x+=", "),"string"==typeof t){x+=t;continue}n=String(t(a))}else x.length>0&&(x+=", "),n=e_.toLoggable(a);x+=o?`${o}=${n}`:n}f||m.call(e_,x?`${E}${P}(${x})`:`${E}${P}`)}if(f||g||null!=a){let t,r=g?ed():void 0,o=e=>{let t=void 0!==r?` [${eb(r)}ms]`:"";f?e_.error(e,x?`${E}${P}(${x})`:`${E}${P}`,k?.exitDetails?`failed${k.exitDetails}${t}`:`failed${t}`):e_.error(e,E,k?.exitDetails?`failed${k.exitDetails}${t}`:`failed${t}`),p&&eA.delete(S)};try{t=y.apply(this,e)}catch(e){throw o(e),e}let n=e=>{let t,o,n,c;if(null!=r?(t=eb(r))>500?(o=e_.warn,n=` [*${t}ms] (slow)`):(o=m,n=` [${t}ms]`):(n="",o=m),null!=a)if("function"==typeof a)try{c=a(e)}catch(e){c=`@log.exit error: ${e}`}else!0===a&&(c=`returned ${e_.toLoggable(e)}`);else k?.exitFailed?(c=k.exitFailed,o=(e,...t)=>e_.error(null,e,...t)):c="completed";f?(0===h||t>h)&&o.call(e_,x?`${E}${P}(${x}) ${c}${k?.exitDetails||""}${n}`:`${E}${P} ${c}${k?.exitDetails||""}${n}`):o.call(e_,x?`${E}(${x}) ${c}${k?.exitDetails||""}${n}`:`${E} ${c}${k?.exitDetails||""}${n}`),p&&eA.delete(S)};return null!=t&&null!=(_=t)&&(_ instanceof Promise||"function"==typeof _?.then)?t.then(n,o):n(t),t}return y.apply(this,e)}}}(()=>{let e;var t,r,o={975:e=>{function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,o="",n=0,a=-1,c=0,h=0;h<=e.length;++h){if(h<e.length)r=e.charCodeAt(h);else{if(47===r)break;r=47}if(47===r){if(a===h-1||1===c);else if(a!==h-1&&2===c){if(o.length<2||2!==n||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2)){if(o.length>2){var p=o.lastIndexOf("/");if(p!==o.length-1){-1===p?(o="",n=0):n=(o=o.slice(0,p)).length-1-o.lastIndexOf("/"),a=h,c=0;continue}}else if(2===o.length||1===o.length){o="",n=0,a=h,c=0;continue}}t&&(o.length>0?o+="/..":o="..",n=2)}else o.length>0?o+="/"+e.slice(a+1,h):o=e.slice(a+1,h),n=h-a-1;a=h,c=0}else 46===r&&-1!==c?++c:c=-1}return o}var o={resolve:function(){for(var e,o,n="",a=!1,c=arguments.length-1;c>=-1&&!a;c--)c>=0?e=arguments[c]:(void 0===o&&(o=process.cwd()),e=o),t(e),0!==e.length&&(n=e+"/"+n,a=47===e.charCodeAt(0));return n=r(n,!a),a?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var o=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!o)).length||o||(e="."),e.length>0&&n&&(e+="/"),o?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var n=arguments[r];t(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":o.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r||(e=o.resolve(e))===(r=o.resolve(r)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var a=e.length,c=a-n,h=1;h<r.length&&47===r.charCodeAt(h);++h);for(var p=r.length-h,f=c<p?c:p,g=-1,m=0;m<=f;++m){if(m===f){if(p>f){if(47===r.charCodeAt(h+m))return r.slice(h+m+1);if(0===m)return r.slice(h+m)}else c>f&&(47===e.charCodeAt(n+m)?g=m:0===m&&(g=0));break}var b=e.charCodeAt(n+m);if(b!==r.charCodeAt(h+m))break;47===b&&(g=m)}var v="";for(m=n+g+1;m<=a;++m)m!==a&&47!==e.charCodeAt(m)||(0===v.length?v+="..":v+="/..");return v.length>0?v+r.slice(h+g):(h+=g,47===r.charCodeAt(h)&&++h,r.slice(h))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),o=47===r,n=-1,a=!0,c=e.length-1;c>=1;--c)if(47===(r=e.charCodeAt(c))){if(!a){n=c;break}}else a=!1;return -1===n?o?"/":".":o&&1===n?"//":e.slice(0,n)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');t(e);var o,n=0,a=-1,c=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var h=r.length-1,p=-1;for(o=e.length-1;o>=0;--o){var f=e.charCodeAt(o);if(47===f){if(!c){n=o+1;break}}else -1===p&&(c=!1,p=o+1),h>=0&&(f===r.charCodeAt(h)?-1==--h&&(a=o):(h=-1,a=p))}return n===a?a=p:-1===a&&(a=e.length),e.slice(n,a)}for(o=e.length-1;o>=0;--o)if(47===e.charCodeAt(o)){if(!c){n=o+1;break}}else -1===a&&(c=!1,a=o+1);return -1===a?"":e.slice(n,a)},extname:function(e){t(e);for(var r=-1,o=0,n=-1,a=!0,c=0,h=e.length-1;h>=0;--h){var p=e.charCodeAt(h);if(47!==p)-1===n&&(a=!1,n=h+1),46===p?-1===r?r=h:1!==c&&(c=1):-1!==r&&(c=-1);else if(!a){o=h+1;break}}return -1===r||-1===n||0===c||1===c&&r===n-1&&r===o+1?"":e.slice(r,n)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var o,n=e.charCodeAt(0),a=47===n;a?(r.root="/",o=1):o=0;for(var c=-1,h=0,p=-1,f=!0,g=e.length-1,m=0;g>=o;--g)if(47!==(n=e.charCodeAt(g)))-1===p&&(f=!1,p=g+1),46===n?-1===c?c=g:1!==m&&(m=1):-1!==c&&(m=-1);else if(!f){h=g+1;break}return -1===c||-1===p||0===m||1===m&&c===p-1&&c===h+1?-1!==p&&(r.base=r.name=0===h&&a?e.slice(1,p):e.slice(h,p)):(0===h&&a?(r.name=e.slice(1,c),r.base=e.slice(1,p)):(r.name=e.slice(h,c),r.base=e.slice(h,p)),r.ext=e.slice(c,p)),h>0?r.dir=e.slice(0,h-1):a&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,a),r.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};(a.r(c),a.d(c,{URI:()=>l,Utils:()=>r}),"object"==typeof process)?e="win32"===process.platform:"object"==typeof navigator&&(e=navigator.userAgent.indexOf("Windows")>=0);let h=/^\w[\w\d+.-]*$/,p=/^\//,f=/^\/\//;function g(e,t){if(!e.scheme&&t)throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);if(e.scheme&&!h.test(e.scheme))throw Error("[UriError]: Scheme contains illegal characters.");if(e.path){if(e.authority){if(!p.test(e.path))throw Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(f.test(e.path))throw Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let m=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;let l=class l{static isUri(e){return e instanceof l||!!e&&"string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme&&"string"==typeof e.fsPath&&"function"==typeof e.with&&"function"==typeof e.toString}scheme;authority;path;query;fragment;constructor(e,t,r,o,n,a=!1){"object"==typeof e?(this.scheme=e.scheme||"",this.authority=e.authority||"",this.path=e.path||"",this.query=e.query||"",this.fragment=e.fragment||""):(this.scheme=e||a?e:"file",this.authority=t||"",this.path=function(e,t){switch(e){case"https":case"http":case"file":t?"/"!==t[0]&&(t="/"+t):t="/"}return t}(this.scheme,r||""),this.query=o||"",this.fragment=n||"",g(this,a))}get fsPath(){return k(this,!1)}with(e){if(!e)return this;let{scheme:t,authority:r,path:o,query:n,fragment:a}=e;return void 0===t?t=this.scheme:null===t&&(t=""),void 0===r?r=this.authority:null===r&&(r=""),void 0===o?o=this.path:null===o&&(o=""),void 0===n?n=this.query:null===n&&(n=""),void 0===a?a=this.fragment:null===a&&(a=""),t===this.scheme&&r===this.authority&&o===this.path&&n===this.query&&a===this.fragment?this:new d(t,r,o,n,a)}static parse(e,t=!1){let r=m.exec(e);return r?new d(r[2]||"",S(r[4]||""),S(r[5]||""),S(r[7]||""),S(r[9]||""),t):new d("","","","","")}static file(t){let r="";if(e&&(t=t.replace(/\\/g,"/")),"/"===t[0]&&"/"===t[1]){let e=t.indexOf("/",2);-1===e?(r=t.substring(2),t="/"):(r=t.substring(2,e),t=t.substring(e)||"/")}return new d("file",r,t,"","")}static from(e){let t=new d(e.scheme,e.authority,e.path,e.query,e.fragment);return g(t,!0),t}toString(e=!1){return x(this,e)}toJSON(){return this}static revive(e){if(e){if(e instanceof l)return e;{let t=new d(e);return t._formatted=e.external,t._fsPath=e._sep===v?e.fsPath:null,t}}return e}};let v=e?1:void 0;let d=class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=k(this,!1)),this._fsPath}toString(e=!1){return e?x(this,!0):(this._formatted||(this._formatted=x(this,!1)),this._formatted)}toJSON(){let e={$mid:1};return this._fsPath&&(e.fsPath=this._fsPath,e._sep=v),this._formatted&&(e.external=this._formatted),this.path&&(e.path=this.path),this.scheme&&(e.scheme=this.scheme),this.authority&&(e.authority=this.authority),this.query&&(e.query=this.query),this.fragment&&(e.fragment=this.fragment),e}};let y={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function _(e,t,r){let o,n=-1;for(let a=0;a<e.length;a++){let c=e.charCodeAt(a);if(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57||45===c||46===c||95===c||126===c||t&&47===c||r&&91===c||r&&93===c||r&&58===c)-1!==n&&(o+=encodeURIComponent(e.substring(n,a)),n=-1),void 0!==o&&(o+=e.charAt(a));else{void 0===o&&(o=e.substr(0,a));let t=y[c];void 0!==t?(-1!==n&&(o+=encodeURIComponent(e.substring(n,a)),n=-1),o+=t):-1===n&&(n=a)}}return -1!==n&&(o+=encodeURIComponent(e.substring(n))),void 0!==o?o:e}function w(e){let t;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);35===o||63===o?(void 0===t&&(t=e.substr(0,r)),t+=y[o]):void 0!==t&&(t+=e[r])}return void 0!==t?t:e}function k(t,r){let o;return o=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&90>=t.path.charCodeAt(1)||t.path.charCodeAt(1)>=97&&122>=t.path.charCodeAt(1))&&58===t.path.charCodeAt(2)?r?t.path.substr(1):t.path[1].toLowerCase()+t.path.substr(2):t.path,e&&(o=o.replace(/\//g,"\\")),o}function x(e,t){let r=t?w:_,o="",{scheme:n,authority:a,path:c,query:h,fragment:p}=e;if(n&&(o+=n,o+=":"),(a||"file"===n)&&(o+="/",o+="/"),a){let e=a.indexOf("@");if(-1!==e){let t=a.substr(0,e);a=a.substr(e+1),-1===(e=t.lastIndexOf(":"))?o+=r(t,!1,!1):(o+=r(t.substr(0,e),!1,!1),o+=":",o+=r(t.substr(e+1),!1,!0)),o+="@"}-1===(e=(a=a.toLowerCase()).lastIndexOf(":"))?o+=r(a,!1,!0):(o+=r(a.substr(0,e),!1,!0),o+=a.substr(e))}if(c){if(c.length>=3&&47===c.charCodeAt(0)&&58===c.charCodeAt(2)){let e=c.charCodeAt(1);e>=65&&e<=90&&(c=`/${String.fromCharCode(e+32)}:${c.substr(3)}`)}else if(c.length>=2&&58===c.charCodeAt(1)){let e=c.charCodeAt(0);e>=65&&e<=90&&(c=`${String.fromCharCode(e+32)}:${c.substr(2)}`)}o+=r(c,!0,!1)}return h&&(o+="?",o+=r(h,!1,!1)),p&&(o+="#",o+=t?p:_(p,!1,!1)),o}let C=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function S(e){return e.match(C)?e.replace(C,e=>(function e(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+e(t.substr(3)):t}})(e)):e}var A=a(975);let E=A.posix||A;(t=r||(r={})).joinPath=function(e,...t){return e.with({path:E.join(e.path,...t)})},t.resolvePath=function(e,...t){let r=e.path,o=!1;"/"!==r[0]&&(r="/"+r,o=!0);let n=E.resolve(r,...t);return o&&"/"===n[0]&&!e.authority&&(n=n.substring(1)),e.with({path:n})},t.dirname=function(e){if(0===e.path.length||"/"===e.path)return e;let t=E.dirname(e.path);return 1===t.length&&46===t.charCodeAt(0)&&(t=""),e.with({path:t})},t.basename=function(e){return E.basename(e.path)},t.extname=function(e){return E.extname(e.path)},b=c})();let{URI:tl,Utils:tc}=b;function th(e,t){return JSON.parse(e,(e,r)=>(function(e,t){let r=function(e){if("object"!=typeof e||null==e)return;let t=e.__ipc;if(null!=t)switch(t){case"date":return"number"==typeof e.value?e:void 0;case"promise":return"object"==typeof e.value&&"string"==typeof e.value.id&&"string"==typeof e.value.method?e:void 0;case"uri":return"object"==typeof e.value&&"string"==typeof e.value?.scheme?e:void 0;default:return}}(e);if(null==r)return e;switch(r.__ipc){case"date":return new Date(r.value);case"promise":return t(r.value);case"uri":return tl.revive(r.value)}})(r,t))}Symbol.dispose??=Symbol("Symbol.dispose"),Symbol.asyncDispose??=Symbol("Symbol.asyncDispose");let Stopwatch=class Stopwatch{constructor(e,t,...r){let o;if(this._stopped=!1,this.logScope=null!=e&&"string"!=typeof e?e:eP(e??"",!1),o="boolean"==typeof t?.log?t.log?{}:void 0:t?.log??{},this.logLevel=t?.logLevel??"info",this.logProvider=t?.provider??ex,this._time=ed(),null!=o){if(!this.logProvider.enabled(this.logLevel))return;r.length?this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`,...r):this.logProvider.log(this.logLevel,this.logScope,`${o.message??""}${o.suffix??""}`)}}get startTime(){return this._time}[Symbol.dispose](){this.stop()}elapsed(){let[e,t]=ed(this._time);return 1e3*e+Math.floor(t/1e6)}log(e){this.logCore(e,!1)}restart(e){this.logCore(e,!0),this._time=ed(),this._stopped=!1}stop(e){this._stopped||(this.restart(e),this._stopped=!0)}logCore(e,t){if(!this.logProvider.enabled(this.logLevel))return;if(!t)return void this.logProvider.log(this.logLevel,this.logScope,`${e?.message??""}${e?.suffix??""}`);let[r,o]=ed(this._time),n=1e3*r+Math.floor(o/1e6),a=e?.message??"";this.logProvider.log(n>250?"warn":this.logLevel,this.logScope,`${a?`${a} `:""}[${n}ms]${e?.suffix??""}`)}};let Emitter=class Emitter{constructor(){this._disposed=!1}static{this._noop=function(){}}get event(){return null==this._event&&(this._event=(e,t,r)=>{null==this.listeners&&(this.listeners=new LinkedList);let o=this.listeners.push(null==t?e:[e,t]),n={dispose:()=>{n.dispose=Emitter._noop,this._disposed||o()}};return Array.isArray(r)&&r.push(n),n}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new LinkedList);for(let t=this.listeners.iterator(),r=t.next();!r.done;r=t.next())this._deliveryQueue.push([r.value,e]);for(;this._deliveryQueue.size>0;){let[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch{}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let td={done:!0,value:void 0};let events_Node=class events_Node{static{this.Undefined=new events_Node(void 0)}constructor(e){this.element=e,this.next=events_Node.Undefined,this.prev=events_Node.Undefined}};let LinkedList=class LinkedList{constructor(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===events_Node.Undefined}clear(){this._first=events_Node.Undefined,this._last=events_Node.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){let r=new events_Node(e);if(this._first===events_Node.Undefined)this._first=r,this._last=r;else if(t){let e=this._last;this._last=r,r.prev=e,e.next=r}else{let e=this._first;this._first=r,r.next=e,e.prev=r}this._size+=1;let o=!1;return()=>{o||(o=!0,this._remove(r))}}shift(){if(this._first===events_Node.Undefined)return;let e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===events_Node.Undefined)return;let e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==events_Node.Undefined&&e.next!==events_Node.Undefined){let t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===events_Node.Undefined&&e.next===events_Node.Undefined?(this._first=events_Node.Undefined,this._last=events_Node.Undefined):e.next===events_Node.Undefined?(this._last=this._last.prev,this._last.next=events_Node.Undefined):e.prev===events_Node.Undefined&&(this._first=this._first.next,this._first.prev=events_Node.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===events_Node.Undefined?td:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){let e=[];for(let t=this._first;t!==events_Node.Undefined;t=t.next)e.push(t.element);return e}};var tp=Object.defineProperty,tu=Object.getOwnPropertyDescriptor,tf=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?tu(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&tp(t,r,a),a};function tg(){return e??=acquireVsCodeApi()}let tm=eC();function tb(){return`webview:${tm.next()}`}let tv=class{constructor(e){this.appName=e,this._onReceiveMessage=new Emitter,this._pendingHandlers=new Map,this._api=tg(),this._disposable=m.on(window,"message",e=>this.onMessageReceived(e))}get onReceiveMessage(){return this._onReceiveMessage.event}dispose(){this._disposable.dispose()}onMessageReceived(e){var t,r,o,n;let a=eA.get(eS.current),c=e.data,h=function(e,t,...r){return(t?.provider??ex).enabled(t?.logLevel??"info")?new Stopwatch(e,t,...r):void 0}(eP(`(e=${c.id}|${c.method})`,a),{log:!1,logLevel:"debug"});if(c.compressed&&c.params instanceof Uint8Array){if("deflate"===c.compressed)try{c.params=ti((t=c.params,e8(t,{i:2},void 0,void 0)))}catch(e){c.params=ti(c.params)}else c.params=ti(c.params);h?.restart({message:`\u2022 decompressed (${c.compressed}) serialized params`})}if("string"==typeof c.params?(c.params=th(c.params,e=>this.getResponsePromise(e.method,e.id)),h?.stop({message:"• deserialized params"})):null==c.params?h?.stop({message:"• no params"}):h?.stop({message:"• invalid params"}),r=` \u2022 ipc (host -> webview) duration=${Date.now()-c.timestamp}ms`,null!=a&&(null!=a.exitDetails&&null!=r?a.exitDetails+=r:a.exitDetails=r),null!=c.completionId){let e=(o=c.method,n=c.completionId,`${o}|${n}`);this._pendingHandlers.get(e)?.(c);return}this._onReceiveMessage.fire(c)}deserializeIpcData(e){return th(e,e=>this.getResponsePromise(e.method,e.id))}sendCommand(e,t){let r=tb();this.postMessage({id:r,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now()})}async sendRequest(e,t){let r=tb(),o=this.getResponsePromise(e.response.method,r);return this.postMessage({id:r,scope:e.scope,method:e.method,params:t,compressed:!1,timestamp:Date.now(),completionId:r}),o}getResponsePromise(e,t){return new Promise((r,o)=>{var n,a;let c,h=(n=e,a=t,`${n}|${a}`);function p(){clearTimeout(c),c=void 0,this._pendingHandlers.delete(h)}c=setTimeout(()=>{p.call(this),o(Error(`Timed out waiting for completion of ${h}`))},(e_.isDebugging?60:5)*6e4),this._pendingHandlers.set(h,e=>{if(p.call(this),e.method===el.method){let t=e.params;"rejected"===t.status?queueMicrotask(()=>o(Error(t.reason))):queueMicrotask(()=>r(t.value))}else queueMicrotask(()=>r(e.params))})})}setPersistedState(e){this._api.setState(e)}updatePersistedState(e){let t=this._api.getState();null!=t&&"object"==typeof t?(t={...t,...e},this._api.setState(t)):t=e,this.setPersistedState(t)}postMessage(e){this._api.postMessage(e)}};function ty(e,t){let r=Math.pow(10,t);return Math.round(e*r)/r}tf([ta({args:{0:e=>`${e.data.id}|${e.data.method}`}},!0)],tv.prototype,"onMessageReceived",1),tf([ta({args:{0:e=>e.method,1:!1}},!0)],tv.prototype,"sendCommand",1),tf([ta({args:{0:e=>e.method,1:!1,2:!1}},!0)],tv.prototype,"sendRequest",1),tf([ta({args:{0:e=>`${e.id}, method=${e.method}`}},!0)],tv.prototype,"postMessage",1),tv=tf([(f=e=>`${e.appName}(HostIpc)`,e=>void ek.set(e,f))],tv);let RGBA=class RGBA{constructor(e,t,r,o=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,r)),this.a=ty(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}};let HSLA=class HSLA{constructor(e,t,r,o){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ty(Math.max(Math.min(1,t),0),3),this.l=ty(Math.max(Math.min(1,r),0),3),this.a=ty(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,n=e.a,a=Math.max(t,r,o),c=Math.min(t,r,o),h=0,p=0,f=(c+a)/2,g=a-c;if(g>0){switch(p=Math.min(f<=.5?g/(2*f):g/(2-2*f),1),a){case t:h=(r-o)/g+6*(r<o);break;case r:h=(o-t)/g+2;break;case o:h=(t-r)/g+4}h*=60,h=Math.round(h)}return new HSLA(h,p,f,n)}static _hue2rgb(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}static toRGBA(e){let t,r,o,n=e.h/360,{s:a,l:c,a:h}=e;if(0===a)t=r=o=c;else{let e=c<.5?c*(1+a):c+a-c*a,h=2*c-e;t=HSLA._hue2rgb(h,e,n+1/3),r=HSLA._hue2rgb(h,e,n),o=HSLA._hue2rgb(h,e,n-1/3)}return new RGBA(Math.round(255*t),Math.round(255*r),Math.round(255*o),h)}};let HSVA=class HSVA{constructor(e,t,r,o){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,e),0),this.s=ty(Math.max(Math.min(1,t),0),3),this.v=ty(Math.max(Math.min(1,r),0),3),this.a=ty(Math.max(Math.min(1,o),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){let t=e.r/255,r=e.g/255,o=e.b/255,n=Math.max(t,r,o),a=n-Math.min(t,r,o);return new HSVA(Math.round(60*(0===a?0:n===t?((r-o)/a%6+6)%6:n===r?(o-t)/a+2:(t-r)/a+4)),0===n?0:a/n,n,e.a)}static toRGBA(e){let{h:t,s:r,v:o,a:n}=e,a=o*r,c=a*(1-Math.abs(t/60%2-1)),h=o-a,[p,f,g]=[0,0,0];return t<60?(p=a,f=c):t<120?(p=c,f=a):t<180?(f=a,g=c):t<240?(f=c,g=a):t<300?(p=c,g=a):t<=360&&(p=a,g=c),new RGBA(p=Math.round((p+h)*255),f=Math.round((f+h)*255),g=Math.round((g+h)*255),n)}};function t_(e,t){return t.getPropertyValue(e).trim()}let Color=class Color{static from(e){return e instanceof Color?e:parseColor(e)||Color.red}static fromCssVariable(e,t){return parseColor(t_(e,t))||Color.red}static fromHex(e){return parseHexColor(e)||Color.red}static equals(e,t){return!e&&!t||!!e&&!!t&&e.equals(t)}get hsla(){return this._hsla?this._hsla:HSLA.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:HSVA.fromRGBA(this.rgba)}constructor(e){if(e)if(e instanceof RGBA)this.rgba=e;else if(e instanceof HSLA)this._hsla=e,this.rgba=HSLA.toRGBA(e);else if(e instanceof HSVA)this._hsva=e,this.rgba=HSVA.toRGBA(e);else throw Error("Invalid color ctor argument");else throw Error("Color needs a value")}equals(e){return null!=e&&!!e&&RGBA.equals(this.rgba,e.rgba)&&HSLA.equals(this.hsla,e.hsla)&&HSVA.equals(this.hsva,e.hsva)}getRelativeLuminance(){return ty(.2126*Color._relativeLuminanceForComponent(this.rgba.r)+.7152*Color._relativeLuminanceForComponent(this.rgba.g)+.0722*Color._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return luminance(this,e)}getContrastRatio(e){let t=this.getRelativeLuminance(),r=e.getRelativeLuminance();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new Color(new HSLA(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){let{r:t,g:r,b:o,a:n}=this.rgba;return new Color(new RGBA(t,r,o,n*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new Color(new RGBA(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){let t=e.rgba,r=this.rgba.a,o=t.a,n=r+o*(1-r);return n<1e-6?Color.transparent:new Color(new RGBA(this.rgba.r*r/n+t.r*o*(1-r)/n,this.rgba.g*r/n+t.g*o*(1-r)/n,this.rgba.b*r/n+t.b*o*(1-r)/n,n))}mix(e,t){return mixColors(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;let{r:t,g:r,b:o,a:n}=this.rgba;return new Color(new RGBA(e.rgba.r-n*(e.rgba.r-t),e.rgba.g-n*(e.rgba.g-r),e.rgba.b-n*(e.rgba.b-o),1))}flatten(...e){let t=e.reduceRight((e,t)=>Color._flatten(t,e));return Color._flatten(this,t)}static _flatten(e,t){let r=1-e.rgba.a;return new Color(new RGBA(r*t.rgba.r+e.rgba.a*e.rgba.r,r*t.rgba.g+e.rgba.a*e.rgba.g,r*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){return e.isOpaque()?`#${tw(e.rgba.r)}${tw(e.rgba.g)}${tw(e.rgba.b)}`:`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}(this)),this._toString}static getLighterColor(e,t,r){if(e.isLighterThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),n=t.getRelativeLuminance();return r=r*(n-o)/n,e.lighten(r)}static getDarkerColor(e,t,r){if(e.isDarkerThan(t))return e;r=r||.5;let o=e.getRelativeLuminance(),n=t.getRelativeLuminance();return r=r*(o-n)/o,e.darken(r)}static{this.white=new Color(new RGBA(255,255,255,1))}static{this.black=new Color(new RGBA(0,0,0,1))}static{this.red=new Color(new RGBA(255,0,0,1))}static{this.blue=new Color(new RGBA(0,0,255,1))}static{this.green=new Color(new RGBA(0,255,0,1))}static{this.cyan=new Color(new RGBA(0,255,255,1))}static{this.lightgrey=new Color(new RGBA(211,211,211,1))}static{this.transparent=new Color(new RGBA(0,0,0,0))}};function tw(e){let t=e.toString(16);return 2!==t.length?`0${t}`:t}let tk=new Emitter,tx=tk.event;function t$(e){let t=document.documentElement,r=window.getComputedStyle(t),o=document.body.classList,n=o.contains("vscode-light")||o.contains("vscode-high-contrast-light"),a=o.contains("vscode-high-contrast")||o.contains("vscode-high-contrast-light"),c=t_("--vscode-editor-background",r),h=t_("--vscode-editor-foreground",r);return h||(h=t_("--vscode-foreground",r)),{colors:{background:c,foreground:h},computedStyle:r,isLightTheme:n,isHighContrastTheme:a,isInitializing:null==e}}let App=class App{constructor(e){let t;this.appName=e;let r=[],o=t$();null!=this.onThemeUpdated&&(this.onThemeUpdated(o),r.push(tx(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",this._logger=new LoggerContext(e),this.log("opening..."),this._api=tg(),this._hostIpc=new tv(this.appName),r.push(this._hostIpc),this._promos=new PromosContext(this._hostIpc),r.push(this._promos),this._telemetry=new TelemetryContext(this._hostIpc),r.push(this._telemetry);let{webviewId:n,webviewInstanceId:a}=this.state;if(this._webview={webviewId:n,webviewInstanceId:a,createCommandLink:(e,t)=>{var r;return e.endsWith(":")&&(e=`${e}${n.split(".").at(-1)}`),r=e,`command:${r}?${encodeURIComponent(JSON.stringify({webview:n,webviewInstance:a,...t}))}`}},new i(document.body,{context:"ipc",initialValue:this._hostIpc}),new i(document.body,{context:"logger",initialValue:this._logger}),new i(document.body,{context:"promos",initialValue:this._promos}),new i(document.body,{context:"telemetry",initialValue:this._telemetry}),new i(document.body,{context:"webview",initialValue:this._webview}),null!=this.state){let e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}r.push(((t=new MutationObserver(e=>{tk.fire(t$(e))})).observe(document.body,{attributeFilter:["class"]}),{dispose:()=>t.disconnect()})),requestAnimationFrame(()=>{this.log("initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&r.push(this._hostIpc.onReceiveMessage(e=>{switch(!0){case ec.is(e):window.dispatchEvent(new CustomEvent(e.params.focused?"webview-focus":"webview-blur"));break;case eh.is(e):window.dispatchEvent(new CustomEvent(e.params.visible?"webview-visible":"webview-hidden"));break;default:this.onMessageReceived(e)}})),this.sendRequest(er,{bootstrap:!1}),this.onInitialized?.()}finally{this.log("initialized"),document.body.classList.contains("preload")&&setTimeout(()=>{document.body.classList.remove("preload")},500)}}),r.push(m.on(window,"pagehide",()=>{r?.forEach(e=>e.dispose()),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=void 0})),r.push(m.on(window,"gl-telemetry-fired",e=>{this._telemetry.sendEvent(e.detail)})),this.log("opened")}bind(){document.querySelectorAll("a").forEach(e=>{e.href===e.title&&e.removeAttribute("title")}),this.bindDisposables?.forEach(e=>e.dispose()),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);let e=k(e=>{this.sendCommand(es,e)},150);this.bindDisposables.push(m.on(document,"focusin",t=>{let r=t.composedPath().some(e=>"INPUT"===e.tagName);(!0!==this._focused||this._inputFocused!==r)&&(this._focused=!0,this._inputFocused=r,e({focused:!0,inputFocused:r}))}),m.on(document,"focusout",()=>{(!1!==this._focused||!1!==this._inputFocused)&&(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))}))}log(e,...t){this._logger.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){this._hostIpc.sendCommand(e,t)}sendRequest(e,t){return this._hostIpc.sendRequest(e,t)}setState(e){this._api.setState(e)}};var tC={408:(e,t)=>{var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,w={};function k(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||y}function x(){}function C(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||y}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=k.prototype;var S=C.prototype=new x;S.constructor=C,_(S,k.prototype),S.isPureReactComponent=!0;var A=Array.isArray,E=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,o){var n,a={},c=null,h=null;if(null!=t)for(n in void 0!==t.ref&&(h=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,n)&&!I.hasOwnProperty(n)&&(a[n]=t[n]);var p=arguments.length-2;if(1===p)a.children=o;else if(1<p){for(var f=Array(p),g=0;g<p;g++)f[g]=arguments[g+2];a.children=f}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===a[n]&&(a[n]=p[n]);return{$$typeof:r,type:e,key:c,ref:h,props:a,_owner:P.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var M=/\/+/g;function L(e,t){var r,o;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,o={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return o[e]})):t.toString(36)}function O(e,t,n){if(null==e)return e;var a=[],c=0;return function e(t,n,a,c,h){var p,f,g,m=typeof t;"undefined"!==m&&"boolean"!==m||(t=null);var b=!1;if(null===t)b=!0;else switch(m){case"string":case"number":b=!0;break;case"object":switch(t.$$typeof){case r:case o:b=!0}}if(b)return h=h(b=t),t=""===c?"."+L(b,0):c,A(h)?(a="",null!=t&&(a=t.replace(M,"$&/")+"/"),e(h,n,a,"",function(e){return e})):null!=h&&(T(h)&&(p=h,f=a+(!h.key||b&&b.key===h.key?"":(""+h.key).replace(M,"$&/")+"/")+t,h={$$typeof:r,type:p.type,key:f,ref:p.ref,props:p.props,_owner:p._owner}),n.push(h)),1;if(b=0,c=""===c?".":c+":",A(t))for(var y=0;y<t.length;y++){var _=c+L(m=t[y],y);b+=e(m,n,a,_,h)}else if("function"==typeof(_=null===(g=t)||"object"!=typeof g?null:"function"==typeof(g=v&&g[v]||g["@@iterator"])?g:null))for(t=_.call(t),y=0;!(m=t.next()).done;)b+=e(m=m.value,n,a,_=c+L(m,y++),h);else if("object"===m)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return b}(e,a,"","",function(e){return t.call(n,e,c++)}),a}function D(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},B={transition:null};t.Children={map:O,forEach:function(e,t,r){O(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return O(e,function(){t++}),t},toArray:function(e){return O(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=k,t.Fragment=n,t.Profiler=c,t.PureComponent=C,t.StrictMode=a,t.Suspense=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:B,ReactCurrentOwner:P},t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=_({},e.props),a=e.key,c=e.ref,h=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,h=P.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(f in t)E.call(t,f)&&!I.hasOwnProperty(f)&&(n[f]=void 0===t[f]&&void 0!==p?p[f]:t[f])}var f=arguments.length-2;if(1===f)n.children=o;else if(1<f){p=Array(f);for(var g=0;g<f;g++)p[g]=arguments[g+2];n.children=p}return{$$typeof:r,type:e.type,key:a,ref:c,props:n,_owner:h}},t.createContext=function(e){return(e={$$typeof:p,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:h,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:b,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=B.transition;B.transition={};try{e()}finally{B.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,r){return N.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,r){return N.current.useReducer(e,t,r)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return N.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return N.current.useTransition()},t.version="18.2.0"},294:(e,t,r)=>{e.exports=r(408)}},tS={};function tA(e){var t=tS[e];if(void 0!==t)return t.exports;var r=tS[e]={exports:{}};return tC[e](r,r.exports,tA),r.exports}tA.d=(e,t)=>{for(var r in t)tA.o(t,r)&&!tA.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},tA.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var tE={};(()=>{let e,t,r,o,n,a;tA.d(tE,{Tn:()=>Se,qE:()=>He,HE:()=>Le,Ct:()=>Be,zx:()=>Ge,M1:()=>Je,sX:()=>bo,D0:()=>yo,fs:()=>vo,Tw:()=>tn,ud:()=>th,wt:()=>td,ne:()=>tu,Ku:()=>tm,FU:()=>ty,XO:()=>tT,Ze:()=>tz,K$:()=>tM,cX:()=>tj,Js:()=>tH,J9:()=>tF,si:()=>tS,sg:()=>tq,hW:()=>tW,II:()=>Ro,v2:()=>Mo,sN:()=>Do,Lb:()=>Ho,J2:()=>xe,$$:()=>po,Vp:()=>Bo,u:()=>$e,fW:()=>function e(...t){t.forEach(t=>{t.elementName&&!customElements.get(t.elementName)&&(customElements.define(t.elementName,t),t.components&&t.components.length>0&&e(...t.components))})},WV:()=>em,h4:()=>eg,kZ:()=>ef});let c=globalThis,h=c.ShadowRoot&&(void 0===c.ShadyCSS||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,p=Symbol(),f=new WeakMap;let s=class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(h&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=f.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&f.set(t,e))}return e}toString(){return this.cssText}};let g=(e,...t)=>new s(1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]),e,p),m=h?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t,r="";for(let t of e.cssRules)r+=t.cssText;return new s("string"==typeof(t=r)?t:t+"",void 0,p)})(e):e,{is:b,defineProperty:v,getOwnPropertyDescriptor:y,getOwnPropertyNames:_,getOwnPropertySymbols:w,getPrototypeOf:k}=Object,x=globalThis,C=x.trustedTypes,S=C?C.emptyScript:"",A=x.reactiveElementPolyfillSupport,E={toAttribute(e,t){switch(t){case Boolean:e=e?S:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},P=(e,t)=>!b(e,t),I={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:P};Symbol.metadata??=Symbol("metadata"),x.litPropertyMetadata??=new WeakMap;let $=class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=I){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&v(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:n}=y(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){let a=o?.call(this);n.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??I}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=k(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[..._(e),...w(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(m(r));else void 0!==e&&t.push(m(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(h)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),o=c.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=r.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=o,this[o]=n.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,o=!1,n){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??P)(o?n:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$.elementProperties=new Map,$.finalized=new Map,A?.({ReactiveElement:$}),(x.reactiveElementVersions??=[]).push("2.0.0");let R=globalThis,T=R.trustedTypes,M=T?T.createPolicy("lit-html",{createHTML:e=>e}):void 0,L="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,D="?"+O,N=`<${D}>`,B=document,U=()=>B.createComment(""),j=e=>null===e||"object"!=typeof e&&"function"!=typeof e,H=Array.isArray,F=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,W=/>/g,K=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,X=/"/g,Y=/^(?:script|style|textarea|title)$/i,J=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),ee=J(1),ei=(J(2),Symbol.for("lit-noChange")),er=Symbol.for("lit-nothing"),es=new WeakMap,eo=B.createTreeWalker(B,129);function en(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(t):t}let Q=class Q{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,a=0,c=e.length-1,h=this.parts,[p,f]=((e,t)=>{let r=e.length-1,o=[],n,a=2===t?"<svg>":"",c=V;for(let t=0;t<r;t++){let r=e[t],h,p,f=-1,g=0;for(;g<r.length&&(c.lastIndex=g,null!==(p=c.exec(r)));)g=c.lastIndex,c===V?"!--"===p[1]?c=q:void 0!==p[1]?c=W:void 0!==p[2]?(Y.test(p[2])&&(n=RegExp("</"+p[2],"g")),c=K):void 0!==p[3]&&(c=K):c===K?">"===p[0]?(c=n??V,f=-1):void 0===p[1]?f=-2:(f=c.lastIndex-p[2].length,h=p[1],c=void 0===p[3]?K:'"'===p[3]?X:G):c===X||c===G?c=K:c===q||c===W?c=V:(c=K,n=void 0);let m=c===K&&e[t+1].startsWith("/>")?" ":"";a+=c===V?r+N:f>=0?(o.push(h),r.slice(0,f)+L+r.slice(f)+O+m):r+O+(-2===f?t:m)}return[en(e,a+(e[r]||"<?>")+(2===t?"</svg>":"")),o]})(e,t);if(this.el=Q.createElement(p,r),eo.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=eo.nextNode())&&h.length<c;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(L)){let t=f[a++],r=o.getAttribute(e).split(O),c=/([.?@])?(.*)/.exec(t);h.push({type:1,index:n,name:c[2],strings:r,ctor:"."===c[1]?it:"?"===c[1]?rt:"@"===c[1]?st:nt}),o.removeAttribute(e)}else e.startsWith(O)&&(h.push({type:6,index:n}),o.removeAttribute(e));if(Y.test(o.tagName)){let e=o.textContent.split(O),t=e.length-1;if(t>0){o.textContent=T?T.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],U()),eo.nextNode(),h.push({type:2,index:++n});o.append(e[t],U())}}}else if(8===o.nodeType)if(o.data===D)h.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(O,e+1));)h.push({type:7,index:n}),e+=O.length-1}n++}}static createElement(e,t){let r=B.createElement("template");return r.innerHTML=e,r}};function ea(e,t,r=e,o){if(t===ei)return t;let n=void 0!==o?r._$Co?.[o]:r._$Cl,a=j(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,r,o),void 0!==o?(r._$Co??=[])[o]=n:r._$Cl=n),void 0!==n&&(t=ea(e,n._$AS(e,t.values),n,o)),t}let et=class et{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??B).importNode(t,!0);eo.currentNode=o;let n=eo.nextNode(),a=0,c=0,h=r[0];for(;void 0!==h;){if(a===h.index){let t;2===h.type?t=new ot(n,n.nextSibling,this,e):1===h.type?t=new h.ctor(n,h.name,h.strings,this,e):6===h.type&&(t=new at(n,this,e)),this._$AV.push(t),h=r[++c]}a!==h?.index&&(n=eo.nextNode(),a++)}return eo.currentNode=B,o}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};let ot=class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=er,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){let r;j(e=ea(this,e,t))?e===er||null==e||""===e?(this._$AH!==er&&this._$AR(),this._$AH=er):e!==this._$AH&&e!==ei&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):H(r=e)||"function"==typeof r?.[Symbol.iterator]?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==er&&j(this._$AH)?this._$AA.nextSibling.data=e:this.$(B.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=Q.createElement(en(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new et(o,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=es.get(e.strings);return void 0===t&&es.set(e.strings,t=new Q(e)),t}T(e){H(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let n of e)o===t.length?t.push(r=new ot(this.k(U()),this.k(U()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let nt=class nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=er,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=er}_$AI(e,t=this,r,o){let n=this.strings,a=!1;if(void 0===n)(a=!j(e=ea(this,e,t,0))||e!==this._$AH&&e!==ei)&&(this._$AH=e);else{let o,c,h=e;for(e=n[0],o=0;o<n.length-1;o++)(c=ea(this,h[r+o],t,o))===ei&&(c=this._$AH[o]),a||=!j(c)||c!==this._$AH[o],c===er?e=er:e!==er&&(e+=(c??"")+n[o+1]),this._$AH[o]=c}a&&!o&&this.j(e)}j(e){e===er?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let it=class it extends nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===er?void 0:e}};let rt=class rt extends nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==er)}};let st=class st extends nt{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=ea(this,e,t,0)??er)===ei)return;let r=this._$AH,o=e===er&&r!==er||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==er&&(r===er||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let at=class at{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ea(this,e)}};let el=R.litHtmlPolyfillSupport;el?.(Q,ot),(R.litHtmlVersions??=[]).push("3.0.0");let ct=class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{let o=r?.renderBefore??t,n=o._$litPart$;if(void 0===n){let e=r?.renderBefore??null;o._$litPart$=n=new ot(t.insertBefore(U(),e),e,void 0,r??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ei}};ct._$litElement$=!0,ct.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ct});let ec=globalThis.litElementPolyfillSupport;ec?.({LitElement:ct}),(globalThis.litElementVersions??=[]).push("4.0.0");let eh={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:P};function ed(e){return(t,r)=>{let o;return"object"==typeof r?((e=eh,t,r)=>{let{kind:o,metadata:n}=r,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(r.name,e),"accessor"===o){let{name:o}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,n,e)},init(t){return void 0!==t&&this.C(o,void 0,e),t}}}if("setter"===o){let{name:o}=r;return function(r){let n=this[o];t.call(this,r),this.requestUpdate(o,n,e)}}throw Error("Unsupported decorator location: "+o)})(e,t,r):(o=t.hasOwnProperty(r),t.constructor.createProperty(r,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,r):void 0)}}let ep=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function eu(e,t){return(r,o,n)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:c,set:h}="object"==typeof o?r:n??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return ep(r,o,{get(){if(t){let e=c.call(this);return void 0===e&&(e=a(this),h.call(this,e)),e}return a(this)}})}return ep(r,o,{get(){return a(this)}})}}let gt=class gt extends ct{};let ef=g`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,eg=g``,em=g`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,eb=Math.min,ev=Math.max,ey=Math.round,e_=(Math.floor,e=>({x:e,y:e})),ew={left:"right",right:"left",bottom:"top",top:"bottom"},ek={start:"end",end:"start"};function ex(e,t){return"function"==typeof e?e(t):e}function e$(e){return e.split("-")[0]}function eC(e){return e.split("-")[1]}function eS(e){return"x"===e?"y":"x"}function eA(e){return"y"===e?"height":"width"}function eE(e){return["top","bottom"].includes(e$(e))?"y":"x"}function eP(e){return e.replace(/start|end/g,e=>ek[e])}function eI(e){return e.replace(/left|right|bottom|top/g,e=>ew[e])}function eR(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function eT(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function ez(e,t,r){let o,{reference:n,floating:a}=e,c=eE(t),h=eS(eE(t)),p=eA(h),f=e$(t),g="y"===c,m=n.x+n.width/2-a.width/2,b=n.y+n.height/2-a.height/2,v=n[p]/2-a[p]/2;switch(f){case"top":o={x:m,y:n.y-a.height};break;case"bottom":o={x:m,y:n.y+n.height};break;case"right":o={x:n.x+n.width,y:b};break;case"left":o={x:n.x-a.width,y:b};break;default:o={x:n.x,y:n.y}}switch(eC(t)){case"start":o[h]-=v*(r&&g?-1:1);break;case"end":o[h]+=v*(r&&g?-1:1)}return o}async function eM(e,t){var r;void 0===t&&(t={});let{x:o,y:n,platform:a,rects:c,elements:h,strategy:p}=e,{boundary:f="clippingAncestors",rootBoundary:g="viewport",elementContext:m="floating",altBoundary:b=!1,padding:v=0}=ex(t,e),y=eR(v),_=h[b?"floating"===m?"reference":"floating":m],w=eT(await a.getClippingRect({element:null==(r=await (null==a.isElement?void 0:a.isElement(_)))||r?_:_.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(h.floating)),boundary:f,rootBoundary:g,strategy:p})),k="floating"===m?{...c.floating,x:o,y:n}:c.reference,x=await (null==a.getOffsetParent?void 0:a.getOffsetParent(h.floating)),C=await (null==a.isElement?void 0:a.isElement(x))&&await (null==a.getScale?void 0:a.getScale(x))||{x:1,y:1},S=eT(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:k,offsetParent:x,strategy:p}):k);return{top:(w.top-S.top+y.top)/C.y,bottom:(S.bottom-w.bottom+y.bottom)/C.y,left:(w.left-S.left+y.left)/C.x,right:(S.right-w.right+y.right)/C.x}}function eL(e){return eN(e)?(e.nodeName||"").toLowerCase():"#document"}function eO(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function eD(e){var t;return null==(t=(eN(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function eN(e){return e instanceof Node||e instanceof eO(e).Node}function eB(e){return e instanceof Element||e instanceof eO(e).Element}function eU(e){return e instanceof HTMLElement||e instanceof eO(e).HTMLElement}function ej(e){return"u">typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof eO(e).ShadowRoot)}function eH(e){let{overflow:t,overflowX:r,overflowY:o,display:n}=eW(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!["inline","contents"].includes(n)}function eF(e){let t=eV(),r=eW(e);return"none"!==r.transform||"none"!==r.perspective||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||["transform","perspective","filter"].some(e=>(r.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(r.contain||"").includes(e))}function eV(){return!("u"<typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function eq(e){return["html","body","#document"].includes(eL(e))}function eW(e){return eO(e).getComputedStyle(e)}function eK(e){return eB(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function eG(e){if("html"===eL(e))return e;let t=e.assignedSlot||e.parentNode||ej(e)&&e.host||eD(e);return ej(t)?t.host:t}function eZ(e){let t=eW(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,n=eU(e),a=n?e.offsetWidth:r,c=n?e.offsetHeight:o,h=ey(r)!==a||ey(o)!==c;return h&&(r=a,o=c),{width:r,height:o,$:h}}function eX(e){return eB(e)?e:e.contextElement}function eY(e){let t=eX(e);if(!eU(t))return e_(1);let r=t.getBoundingClientRect(),{width:o,height:n,$:a}=eZ(t),c=(a?ey(r.width):r.width)/o,h=(a?ey(r.height):r.height)/n;return c&&Number.isFinite(c)||(c=1),h&&Number.isFinite(h)||(h=1),{x:c,y:h}}let eQ=e_(0);function eJ(e){let t=eO(e);return eV()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:eQ}function e0(e,t,r,o){var n;void 0===t&&(t=!1),void 0===r&&(r=!1);let a=e.getBoundingClientRect(),c=eX(e),h=e_(1);t&&(o?eB(o)&&(h=eY(o)):h=eY(e));let p=(void 0===(n=r)&&(n=!1),!(!o||n&&o!==eO(c))&&n)?eJ(c):e_(0),f=(a.left+p.x)/h.x,g=(a.top+p.y)/h.y,m=a.width/h.x,b=a.height/h.y;if(c){let e=eO(c),t=o&&eB(o)?eO(o):o,r=e.frameElement;for(;r&&o&&t!==e;){let e=eY(r),t=r.getBoundingClientRect(),o=eW(r),n=t.left+(r.clientLeft+parseFloat(o.paddingLeft))*e.x,a=t.top+(r.clientTop+parseFloat(o.paddingTop))*e.y;f*=e.x,g*=e.y,m*=e.x,b*=e.y,f+=n,g+=a,r=eO(r).frameElement}}return eT({width:m,height:b,x:f,y:g})}function e1(e){return e0(eD(e)).left+eK(e).scrollLeft}function e2(e,t,r){var o;let n;if("viewport"===t)n=function(e,t){let r=eO(e),o=eD(e),n=r.visualViewport,a=o.clientWidth,c=o.clientHeight,h=0,p=0;if(n){a=n.width,c=n.height;let e=eV();(!e||e&&"fixed"===t)&&(h=n.offsetLeft,p=n.offsetTop)}return{width:a,height:c,x:h,y:p}}(e,r);else if("document"===t){let t,r,a,c,h,p,f;o=eD(e),t=eD(o),r=eK(o),a=o.ownerDocument.body,c=ev(t.scrollWidth,t.clientWidth,a.scrollWidth,a.clientWidth),h=ev(t.scrollHeight,t.clientHeight,a.scrollHeight,a.clientHeight),p=-r.scrollLeft+e1(o),f=-r.scrollTop,"rtl"===eW(a).direction&&(p+=ev(t.clientWidth,a.clientWidth)-c),n={width:c,height:h,x:p,y:f}}else if(eB(t)){let e,o,a,c;o=(e=e0(t,!0,"fixed"===r)).top+t.clientTop,a=e.left+t.clientLeft,c=eU(t)?eY(t):e_(1),n={width:t.clientWidth*c.x,height:t.clientHeight*c.y,x:a*c.x,y:o*c.y}}else{let r=eJ(e);n={...t,x:t.x-r.x,y:t.y-r.y}}return eT(n)}function e5(e,t){return eU(e)&&"fixed"!==eW(e).position?t?t(e):e.offsetParent:null}function e3(e,t){let r=eO(e);if(!eU(e))return r;let o=e5(e,t);for(;o&&["table","td","th"].includes(eL(o))&&"static"===eW(o).position;)o=e5(o,t);return o&&("html"===eL(o)||"body"===eL(o)&&"static"===eW(o).position&&!eF(o))?r:o||function(e){let t=eG(e);for(;eU(t)&&!eq(t);){if(eF(t))return t;t=eG(t)}return null}(e)||r}let e6={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:o}=e,n=eU(r),a=eD(r);if(r===a)return t;let c={scrollLeft:0,scrollTop:0},h=e_(1),p=e_(0);if((n||!n&&"fixed"!==o)&&(("body"!==eL(r)||eH(a))&&(c=eK(r)),eU(r))){let e=e0(r);h=eY(r),p.x=e.x+r.clientLeft,p.y=e.y+r.clientTop}return{width:t.width*h.x,height:t.height*h.y,x:t.x*h.x-c.scrollLeft*h.x+p.x,y:t.y*h.y-c.scrollTop*h.y+p.y}},getDocumentElement:eD,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:n}=e,a=[..."clippingAncestors"===r?function(e,t){let r=t.get(e);if(r)return r;let o=(function e(t,r,o){var n;void 0===r&&(r=[]),void 0===o&&(o=!0);let a=function e(t){let r=eG(t);return eq(r)?t.ownerDocument?t.ownerDocument.body:t.body:eU(r)&&eH(r)?r:e(r)}(t),c=a===(null==(n=t.ownerDocument)?void 0:n.body),h=eO(a);return c?r.concat(h,h.visualViewport||[],eH(a)?a:[],h.frameElement&&o?e(h.frameElement):[]):r.concat(a,e(a,[],o))})(e,[],!1).filter(e=>eB(e)&&"body"!==eL(e)),n=null,a="fixed"===eW(e).position,c=a?eG(e):e;for(;eB(c)&&!eq(c);){let t=eW(c),r=eF(c);r||"fixed"!==t.position||(n=null),(a?!r&&!n:!r&&"static"===t.position&&n&&["absolute","fixed"].includes(n.position)||eH(c)&&!r&&function e(t,r){let o=eG(t);return!(o===r||!eB(o)||eq(o))&&("fixed"===eW(o).position||e(o,r))}(e,c))?o=o.filter(e=>e!==c):n=t,c=eG(c)}return t.set(e,o),o}(t,this._c):[].concat(r),o],c=a[0],h=a.reduce((e,r)=>{let o=e2(t,r,n);return e.top=ev(o.top,e.top),e.right=eb(o.right,e.right),e.bottom=eb(o.bottom,e.bottom),e.left=ev(o.left,e.left),e},e2(t,c,n));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}},getOffsetParent:e3,getElementRects:async function(e){let{reference:t,floating:r,strategy:o}=e,n=this.getOffsetParent||e3,a=this.getDimensions;return{reference:function(e,t,r){let o=eU(t),n=eD(t),a="fixed"===r,c=e0(e,!0,a,t),h={scrollLeft:0,scrollTop:0},p=e_(0);if(o||!o&&!a)if(("body"!==eL(t)||eH(n))&&(h=eK(t)),o){let e=e0(t,!0,a,t);p.x=e.x+t.clientLeft,p.y=e.y+t.clientTop}else n&&(p.x=e1(n));return{x:c.left+h.scrollLeft-p.x,y:c.top+h.scrollTop-p.y,width:c.width,height:c.height}}(t,await n(r),o),floating:{x:0,y:0,...await a(r)}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return eZ(e)},getScale:eY,isElement:eB,isRTL:function(e){return"rtl"===eW(e).direction}},e7=g`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute;z-index:var(--gk-popover-z-index,100)}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var e9,e8=function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};let xe=class xe extends gt{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[em,ef,e7]}static{this.elementName="gk-popover"}firstUpdated(e){let t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame(()=>{this.popoverEl?.focus()})):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){var e,t,r,o,n;let a,c,h,p,f=[{name:"offset",options:6,async fn(e){let{x:t,y:r}=e,o=await async function(e){let{placement:t,platform:r,elements:o}=e,n=await (null==r.isRTL?void 0:r.isRTL(o.floating)),a=e$(t),c=eC(t),h="y"===eE(t),p=["left","top"].includes(a)?-1:1,f=n&&h?-1:1,g=ex(6,e),{mainAxis:m,crossAxis:b,alignmentAxis:v}="number"==typeof g?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return c&&"number"==typeof v&&(b="end"===c?-1*v:v),h?{x:b*f,y:m*p}:{x:m*p,y:b*f}}(e);return{x:t+o.x,y:r+o.y,data:o}}},(void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var r,o,n,a,c,h;let p,f,g,{placement:m,middlewareData:b,rects:v,initialPlacement:y,platform:_,elements:w}=e,{mainAxis:k=!0,crossAxis:x=!0,fallbackPlacements:C,fallbackStrategy:S="bestFit",fallbackAxisSideDirection:A="none",flipAlignment:E=!0,...P}=ex(t,e);if(null!=(r=b.arrow)&&r.alignmentOffset)return{};let I=e$(m),R=e$(y)===y,T=await (null==_.isRTL?void 0:_.isRTL(w.floating)),M=C||(R||!E?[eI(y)]:(p=eI(y),[eP(y),p,eP(p)]));C||"none"===A||M.push(...(f=eC(y),g=function(e,t,r){let o=["left","right"],n=["right","left"];switch(e){case"top":case"bottom":return r?t?n:o:t?o:n;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(e$(y),"start"===A,T),f&&(g=g.map(e=>e+"-"+f),E&&(g=g.concat(g.map(eP)))),g));let L=[y,...M],O=await eM(e,P),D=[],N=(null==(o=b.flip)?void 0:o.overflows)||[];if(k&&D.push(O[I]),x){let e,t,r,o,n=(void 0===(h=T)&&(h=!1),e=eC(m),r=eA(t=eS(eE(m))),o="x"===t?e===(h?"end":"start")?"right":"left":"start"===e?"bottom":"top",v.reference[r]>v.floating[r]&&(o=eI(o)),[o,eI(o)]);D.push(O[n[0]],O[n[1]])}if(N=[...N,{placement:m,overflows:D}],!D.every(e=>e<=0)){let e=((null==(n=b.flip)?void 0:n.index)||0)+1,t=L[e];if(t)return{data:{index:e,overflows:N},reset:{placement:t}};let r=null==(a=N.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!r)switch(S){case"bestFit":{let e=null==(c=N.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:c[0];e&&(r=e);break}case"initialPlacement":r=y}if(m!==r)return{reset:{placement:r}}}return{}}}),{name:"shift",options:e={padding:5},async fn(t){let{x:r,y:o,placement:n}=t,{mainAxis:a=!0,crossAxis:c=!1,limiter:h={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...p}=ex(e,t),f={x:r,y:o},g=await eM(t,p),m=eE(e$(n)),b=eS(m),v=f[b],y=f[m];if(a){let e="y"===b?"bottom":"right";v=ev(v+g["y"===b?"top":"left"],eb(v,v-g[e]))}if(c){let e="y"===m?"bottom":"right";y=ev(y+g["y"===m?"top":"left"],eb(y,y-g[e]))}let _=h.fn({...t,[b]:v,[m]:y});return{..._,data:{x:_.x-r,y:_.y-o}}}}];this.arrowEl&&f.push({name:"arrow",options:a={element:this.arrowEl},async fn(e){let{x:t,y:r,placement:o,rects:n,platform:c,elements:h,middlewareData:p}=e,{element:f,padding:g=0}=ex(a,e)||{};if(null==f)return{};let m=eR(g),b={x:t,y:r},v=eS(eE(o)),y=eA(v),_=await c.getDimensions(f),w="y"===v,k=w?"clientHeight":"clientWidth",x=n.reference[y]+n.reference[v]-b[v]-n.floating[y],C=b[v]-n.reference[v],S=await (null==c.getOffsetParent?void 0:c.getOffsetParent(f)),A=S?S[k]:0;A&&await (null==c.isElement?void 0:c.isElement(S))||(A=h.floating[k]||n.floating[y]);let E=A/2-_[y]/2-1,P=eb(m[w?"top":"left"],E),I=eb(m[w?"bottom":"right"],E),R=A-_[y]-I,T=A/2-_[y]/2+(x/2-C/2),M=ev(P,eb(T,R)),L=!p.arrow&&null!=eC(o)&&T!=M&&n.reference[y]/2-(T<P?P:I)-_[y]/2<0,O=L?T<P?T-P:T-R:0;return{[v]:b[v]+O,data:{[v]:M,centerOffset:T-M-O,...L&&{alignmentOffset:O}},reset:L}}}),await (r=this.triggerEl,o=this.popoverEl,n={middleware:f,placement:this.placement},c=new Map,p={...(h={platform:e6,...n}).platform,_c:c},(async(e,t,r)=>{let{placement:o="bottom",strategy:n="absolute",middleware:a=[],platform:c}=r,h=a.filter(Boolean),p=await (null==c.isRTL?void 0:c.isRTL(t)),f=await c.getElementRects({reference:e,floating:t,strategy:n}),{x:g,y:m}=ez(f,o,p),b=o,v={},y=0;for(let r=0;r<h.length;r++){let{name:a,fn:_}=h[r],{x:w,y:k,data:x,reset:C}=await _({x:g,y:m,initialPlacement:o,placement:b,strategy:n,middlewareData:v,rects:f,platform:c,elements:{reference:e,floating:t}});g=null!=w?w:g,m=null!=k?k:m,v={...v,[a]:{...v[a],...x}},C&&y<=50&&(y++,"object"==typeof C&&(C.placement&&(b=C.placement),C.rects&&(f=!0===C.rects?await c.getElementRects({reference:e,floating:t,strategy:n}):C.rects),{x:g,y:m}=ez(f,b,p)),r=-1)}return{x:g,y:m,placement:b,strategy:n,middlewareData:v}})(r,o,{...h,platform:p})).then(({x:e,y:t,placement:r,middlewareData:o})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){let e=o.arrow?.x,t=o.arrow?.y,n={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[n]:"-4px"})}})}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?ee`<div part="arrow" class="arrow"></div>`:""}render(){return ee`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}};e8([ed({type:Boolean})],xe.prototype,"arrow",void 0),e8([ed({type:Boolean})],xe.prototype,"hover",void 0),e8([ed()],xe.prototype,"placement",void 0),e8([ed({attribute:"popover-id"})],xe.prototype,"popoverId",void 0),e8([ed({attribute:"sr-visible",type:Boolean})],xe.prototype,"srVisible",void 0),e8([eu('slot[name="trigger"]')],xe.prototype,"triggerSlot",void 0),e8([eu(".popover")],xe.prototype,"popoverEl",void 0),e8([eu(".arrow")],xe.prototype,"arrowEl",void 0),e8([ed({...void 0,state:!0,attribute:!1})],xe.prototype,"open",void 0);let e4=g`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);border-radius:var(--gk-tooltip-border-radius,0);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size, 14px);font-weight:var(--gk-tooltip-font-weight,bold);line-height:var(--gk-tooltip-line-height, 14px);max-width:var(--gk-tooltip-max-width,none);padding:var(--gk-tooltip-padding,10px 16px);text-align:var(--gk-tooltip-text-align,left);width:max-content}`;let $e=class $e extends gt{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[em,ef,e4]}static{this.elementName="gk-tooltip"}static{this.components=[xe]}render(){return ee`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}};!function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);a>3&&c&&Object.defineProperty(t,r,c)}([ed({attribute:"sr-visible",type:Boolean})],$e.prototype,"srVisible",void 0);let te=g`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;let Se=class Se extends gt{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=te}static{this.elementName="gk-additions-deletions"}static{this.components=[$e]}render(){return ee`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}};!function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);a>3&&c&&Object.defineProperty(t,r,c)}([ed({attribute:"tooltip-text"})],Se.prototype,"tooltipText",void 0);let tt=new Set(["children","localName","ref","style","className"]),ti=new WeakMap,tr=(e,t,r,o,n)=>{let a,c,h=n?.[t];void 0===h||r===o?(e[t]=r,null==r&&t in HTMLElement.prototype&&e.removeAttribute(t)):(void 0===(a=ti.get(e))&&ti.set(e,a=new Map),c=a.get(h),void 0!==r?void 0===c?(a.set(h,c={handleEvent:r}),e.addEventListener(h,c)):c.handleEvent=r:void 0!==c&&(a.delete(h),e.removeEventListener(h,c)))},ts=({react:e,tagName:t,elementClass:r,events:o,displayName:n})=>{let a=new Set(Object.keys(o??{})),c=e.forwardRef((n,c)=>{let h=e.useRef(null),p=e.useRef(null),f={},g={};for(let[e,t]of Object.entries(n))tt.has(e)?f["className"===e?"class":e]=t:a.has(e)||e in r.prototype?g[e]=t:f[e]=t;return e.useLayoutEffect(()=>{if(null!==p.current){for(let e in g)tr(p.current,e,n[e],h.current?h.current[e]:void 0,o);h.current=n}}),e.useLayoutEffect(()=>{p.current?.removeAttribute("defer-hydration")},[]),f.suppressHydrationWarning=!0,e.createElement(t,{...f,ref:e=>{p.current=e,"function"==typeof c?c(e):null!==c&&(c.current=e)}})});return c.displayName=n??r.name,c};var to=tA(294);let tn=ts({react:to,tagName:Se.elementName,elementClass:Se}),ta=g`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size, 11px);line-height:var(--gk-avatar-size, 30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,tl=g`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var tc=function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};let He=class He extends gt{static{this.styles=[em,ta]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?ee`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base" alt="">`:ee`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}};tc([ed()],He.prototype,"src",void 0),tc([ed()],He.prototype,"indicator",void 0);let Le=class Le extends gt{static{this.elementName="gk-avatar-group"}static{this.styles=[em,tl]}render(){return ee`<slot class="avatar-group" part="base"></slot>`}};let th=ts({react:to,tagName:He.elementName,elementClass:He}),td=ts({react:to,tagName:Le.elementName,elementClass:Le}),tp=g`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size, 12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#ffffff99);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#ffffff99);padding:var(--gk-badge-outline-padding,0 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;let Be=class Be extends gt{constructor(){super(...arguments),this.variant="outline"}static{this.styles=tp}static{this.elementName="gk-badge"}render(){return ee`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}};!function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);a>3&&c&&Object.defineProperty(t,r,c)}([ed()],Be.prototype,"variant",void 0);let tu=ts({react:to,tagName:Be.elementName,elementClass:Be}),tf=g`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var tg=function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};let Ge=class Ge extends gt{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=tf}static{this.elementName="gk-button"}get allClasses(){let e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return ee`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}};tg([ed({type:Boolean,reflect:!0})],Ge.prototype,"disabled",void 0),tg([ed({reflect:!0})],Ge.prototype,"type",void 0),tg([ed()],Ge.prototype,"variant",void 0);let tm=ts({react:to,tagName:Ge.elementName,elementClass:Ge,events:{onClick:"click"}}),tb=g`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var tv=function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};let Je=class Je extends gt{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[em,ef,tb]}static{this.elementName="gk-complexity-indicator"}render(){let e=[];for(let t=0;t<this.level;t++)e.push(t);return ee`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map(()=>ee`<span class="complexity-indicator__box"></span>`)}</div>`}};tv([ed({type:Number})],Je.prototype,"level",void 0),tv([ed()],Je.prototype,"label",void 0);let ty=ts({react:to,tagName:Je.elementName,elementClass:Je}),t_=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,tw=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,tk=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]],tx=new Map,t$=["th","st","nd","rd"];var tC=function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};let po=class po extends gt{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[em]}static{this.elementName="gk-date-from"}static{this.components=[$e]}get relativeTime(){return function(n,a){let c=("number"==typeof n?n:n.getTime())-(new Date).getTime();for(let[n,h,p,f]of tk){let g=Math.abs(c);if(g>=h||1e3===h)return a?(null==e&&(e=null!=o?o.resolvedOptions().locale:null!=r?r.resolvedOptions().locale:(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})).resolvedOptions().locale),"en"===e||e?.startsWith("en-")?`${Math.round(g/p)}${f}`:(null==o&&(o=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),o.format(Math.round(c/p),n))):(null==r&&(r=new Intl.RelativeTimeFormat(t,{localeMatcher:"best fit",numeric:"auto",style:"long"})),r.format(Math.round(c/p),n))}return""}(this.date,!0)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return ee`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,r,o=!0){let n=`${(void 0)??""}:${r=r??void 0}`,a=tx.get(n);if(null==a){let e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};let t=tw.exec(e);if(null!=t?.groups){let{dateStyle:e,timeStyle:r}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:r||void 0}}let r={localeMatcher:"best fit"};for(let{groups:t}of e.matchAll(t_))if(null!=t)for(let e in t){let o=t[e];if(null!=o)switch(e){case"year":r.year=4===o.length?"numeric":"2-digit";break;case"month":switch(o.length){case 4:r.month="long";break;case 3:r.month="short";break;case 2:r.month="2-digit";break;case 1:r.month="numeric"}break;case"day":r.day="DD"===o?"2-digit":"numeric";break;case"weekday":switch(o.length){case 4:r.weekday="long";break;case 3:r.weekday="short";break;case 2:r.weekday="narrow"}break;case"hour":r.hour=2===o.length?"2-digit":"numeric",r.hour12="hh"===o||"h"===o;break;case"minute":r.minute=2===o.length?"2-digit":"numeric";break;case"second":r.second=2===o.length?"2-digit":"numeric";break;case"fractionalSecond":r.fractionalSecondDigits=3;break;case"dayPeriod":r.dayPeriod="narrow",r.hour12=!0,r.hourCycle="h12";break;case"timeZoneName":r.timeZoneName=2===o.length?"long":"short"}}return r}(r);a=new Intl.DateTimeFormat(t,e),o&&tx.set(n,a)}if(null==r||tw.test(r))return a.format(e);let c=a.formatToParts(e);return r.replace(t_,(r,n,a,h,p,f,g,m,b,v,y,_,w,k,x)=>{if(null!=n)return n.substring(1,n.length-1);for(let r in x){let n=x[r];if(null==n)continue;let a=c.find(e=>e.type===r);if("Do"===n&&"day"===a?.type)return function(e){let t=e%100;return`${e}${t$[(t-20)%10]??t$[t]??t$[0]}`}(Number(a.value));if("a"===n&&"dayPeriod"===a?.type){let r=(function(e){let r=`${(void 0)??""}:time:${e}`,n=tx.get(r);null==n&&(n=new Intl.DateTimeFormat(t,{localeMatcher:"best fit",timeStyle:e}),o&&tx.set(r,n));return n})("short").formatToParts(e).find(e=>"dayPeriod"===e.type);return`${(r??a)?.value??""}`}return a?.value??""}return""})}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}};tC([ed({converter:(n=navigator.language,{toAttribute:e=>e.toLocaleDateString(n),fromAttribute:e=>new Date(e)}),reflect:!0})],po.prototype,"date",void 0),tC([ed()],po.prototype,"format",void 0);let tS=ts({react:to,tagName:po.elementName,elementClass:po}),tP=g`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,tI=g`:host{display:contents}.row{display:flex;flex-direction:row;padding:var(--gk-focus-row-padding,8px)}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:var(--gk-focus-row-key-min-width,64px)}@media (max-width:720px){.row__key{width:var(--gk-focus-row-key-min-width-screen-sm,32px)}}.row__content{flex:1;display:block}.row__pin{display:block;min-width:var(--gk-focus-row-pin-min-width,35px)}.row__date{display:block;min-width:var(--gk-focus-row-date-min-width,48px)}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,tR=g`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:var(--gk-focus-item-content-min-width,92px)}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:var(--gk-focus-item-people-min-width,92px)}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:var(--gk-focus-item-repo-min-width,150px)}@media (max-width:720px){.item__repo{width:max-content}}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:var(--gk-focus-item-actions-min-width,70px)}@media (max-width:720px){.item__actions{width:100%}}`;let yo=class yo extends gt{static{this.styles=[em,tR]}static{this.elementName="gk-focus-item"}render(){return ee`<div class="item"><div class="item__primary"><div class="item__content" part="base"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people" part="people"></slot><slot name="repo" class="item__repo" part="repo"></slot><slot name="actions" class="item__actions" part="actions"></slot></div></div>`}};let vo=class vo extends gt{static{this.styles=[em,tI]}static{this.elementName="gk-focus-row"}render(){return ee`<div class="row" part="row"><slot name="pin" class="row__pin" part="pin"></slot><div class="row__date" part="date"><slot name="date"></slot></div><div class="row__key" part="key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}};let bo=class bo extends gt{static{this.styles=[em,tI,tR,tP]}static{this.elementName="gk-focus-container"}render(){return ee`<div class="row row--heading"><slot name="pin" class="row__pin" part="pin">Pinned</slot><slot name="date" class="row__date" part="date">Updated</slot><slot name="key" class="row__key" part="key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="item" class="item__content" part="item">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people" part="people">People</slot><slot name="repo" class="item__repo" part="repo">Repo</slot><slot name="actions" class="item__actions" part="actions">Action</slot></div></div></div></div><slot class="content"></slot>`}};let tT=ts({react:to,tagName:yo.elementName,elementClass:yo}),tz=ts({react:to,tagName:vo.elementName,elementClass:vo}),tM=ts({react:to,tagName:bo.elementName,elementClass:bo});let $o=class $o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let tL=(a=class extends $o{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let r in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.st?.has(r)&&this.it.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.it)e in t||(r.remove(e),this.it.delete(e));for(let e in t){let o=!!t[e];o===this.it.has(e)||this.st?.has(e)||(o?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return ei}},(...e)=>({_$litDirective$:a,values:e})),tO=g`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var tD=function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c};let Ro=class Ro extends gt{static{this.formAssociated=!0}static{this.styles=[em,ef,tO]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="";try{this.internals=this.attachInternals()}catch{}}firstUpdated(){this.internals&&this.internals.setFormValue(this.value)}render(){return ee`<div class="field"><label class="${tL({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${tL({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${this.autocomplete??er}" autocorrect="${this.autocorrect??er}" class="input" ?disabled="${this.disabled}" id="input" name="${this.name??er}" part="input" placeholder="${this.placeholder??er}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals&&this.internals.setFormValue(this.value)}};tD([ed()],Ro.prototype,"autocomplete",void 0),tD([ed()],Ro.prototype,"autocorrect",void 0),tD([ed({type:Boolean,reflect:!0})],Ro.prototype,"disabled",void 0),tD([ed()],Ro.prototype,"label",void 0),tD([ed({attribute:"label-visibility"})],Ro.prototype,"labelVisibility",void 0),tD([ed()],Ro.prototype,"name",void 0),tD([ed()],Ro.prototype,"placeholder",void 0),tD([ed({type:Boolean,reflect:!0})],Ro.prototype,"required",void 0),tD([ed({reflect:!0})],Ro.prototype,"type",void 0),tD([ed()],Ro.prototype,"value",void 0);let tN=g`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,tB=g`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size, 12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,tU=g`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size, 12px);font-weight:700;padding:5px 6px}`;let Mo=class Mo extends gt{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[em,tN]}static{this.elementName="gk-menu"}_handleSlotChange(){let e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();let t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;let r=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(r)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this._getAllItems(),r=t.length,o=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?o=(o-1+r)%r:"ArrowDown"===e.key?o=(o+1)%r:"Home"===e.key?o=0:"End"===e.key&&(o=r-1),this._setCurrentItem(t[o]),t[o].focus()}}_handleMouseDown(e){let t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){let t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter(e=>this._isMenuItem(e))}_setTabIndex(){this._getAllItems().forEach(e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")})}render(){return ee`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}};!function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);a>3&&c&&Object.defineProperty(t,r,c)}([(e9={flatten:!0},(e,t)=>{let{slot:r,selector:o}=e9??{},n="slot"+(r?`[name=${r}]`:":not([name])");return ep(e,t,{get(){let e=this.renderRoot?.querySelector(n),t=e?.assignedElements(e9)??[];return void 0===o?t:t.filter(e=>e.matches(o))}})})],Mo.prototype,"slotChildren",void 0);let Do=class Do extends gt{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[em,tB]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return ee`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}};!function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);a>3&&c&&Object.defineProperty(t,r,c)}([ed({type:Boolean,reflect:!0})],Do.prototype,"disabled",void 0);let Ho=class Ho extends gt{static{this.styles=[em,tU]}static{this.elementName="gk-menu-label"}render(){return ee`<slot class="menu-label" part="base"></slot>`}};let tj=ts({react:to,tagName:Mo.elementName,elementClass:Mo,events:{onClick:"select"}}),tH=ts({react:to,tagName:Do.elementName,elementClass:Do}),tF=ts({react:to,tagName:Ho.elementName,elementClass:Ho}),tV=g`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,2px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;let Bo=class Bo extends gt{static{this.styles=[em,tV]}static{this.elementName="gk-tag"}render(){return ee`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}};!function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);a>3&&c&&Object.defineProperty(t,r,c)}([ed()],Bo.prototype,"variant",void 0);let tq=ts({react:to,tagName:Bo.elementName,elementClass:Bo}),tW=ts({react:to,tagName:$e.elementName,elementClass:$e})})(),tE.Tn;var tP=tE.qE,tI=(tE.HE,tE.Ct,tE.zx),tR=(tE.M1,tE.sX,tE.D0,tE.fs,tE.Tw,tE.ud,tE.wt,tE.ne,tE.Ku,tE.FU,tE.XO,tE.Ze,tE.K$,tE.cX,tE.Js,tE.J9,tE.si,tE.sg,tE.hW,tE.II,tE.v2),tT=tE.sN,tz=(tE.Lb,tE.J2),tM=(tE.$$,tE.Vp,tE.u,tE.fW);tE.WV,tE.h4,tE.kZ;let tL=globalThis,tO=tL.ShadowRoot&&(void 0===tL.ShadyCSS||tL.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tD=Symbol(),tN=new WeakMap;let css_tag_n=class css_tag_n{constructor(e,t,r){if(this._$cssResult$=!0,r!==tD)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(tO&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=tN.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&tN.set(t,e))}return e}toString(){return this.cssText}};let tB=e=>new css_tag_n("string"==typeof e?e:e+"",void 0,tD),tU=(e,...t)=>new css_tag_n(1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]),e,tD),tj=tO?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return tB(t)})(e):e,{is:tH,defineProperty:tF,getOwnPropertyDescriptor:tV,getOwnPropertyNames:tq,getOwnPropertySymbols:tW,getPrototypeOf:tK}=Object,tG=globalThis,tZ=tG.trustedTypes,tX=tZ?tZ.emptyScript:"",tY=tG.reactiveElementPolyfillSupport,tQ={toAttribute(e,t){switch(t){case Boolean:e=e?tX:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},tJ=(e,t)=>!tH(e,t),t0={attribute:!0,type:String,converter:tQ,reflect:!1,useDefault:!1,hasChanged:tJ};Symbol.metadata??=Symbol("metadata"),tG.litPropertyMetadata??=new WeakMap;let reactive_element_y=class reactive_element_y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=t0){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&tF(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:n}=tV(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){let a=o?.call(this);n?.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??t0}static _$Ei(){if(this.hasOwnProperty("elementProperties"))return;let e=tK(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty("finalized"))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty("properties")){let e=this.properties;for(let t of[...tq(e),...tW(e)])this.createProperty(t,e[t])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e))for(let r of new Set(e.flat(1/0).reverse()))t.unshift(tj(r));else void 0!==e&&t.push(tj(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map;for(let t of this.constructor.elementProperties.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(tO)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),o=tL.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){let n=(void 0!==r.converter?.toAttribute?r.converter:tQ).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){let e=r.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:tQ;this._$Em=o;let a=n.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,r,o=!1,n){if(void 0!==e){let a=this.constructor;if(!1===o&&(n=this[e]),!(((r??=a.getPropertyOptions(e)).hasChanged??tJ)(n,t)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:n},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==n||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e){let{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};reactive_element_y.elementStyles=[],reactive_element_y.shadowRootOptions={mode:"open"},reactive_element_y.elementProperties=new Map,reactive_element_y.finalized=new Map,tY?.({ReactiveElement:reactive_element_y}),(tG.reactiveElementVersions??=[]).push("2.1.2");let t1=globalThis,t2=e=>e,t5=t1.trustedTypes,t3=t5?t5.createPolicy("lit-html",{createHTML:e=>e}):void 0,t6="$lit$",t7=`lit$${Math.random().toFixed(9).slice(2)}$`,t9="?"+t7,t8=`<${t9}>`,t4=document,ie=()=>t4.createComment(""),ii=e=>null===e||"object"!=typeof e&&"function"!=typeof e,ir=Array.isArray,is=e=>ir(e)||"function"==typeof e?.[Symbol.iterator],io=`[ 	
\f\r]`,ia=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,il=/-->/g,ic=/>/g,ih=RegExp(`>|${io}(?:([^\\s"'>=/]+)(${io}*=${io}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),id=/'/g,ip=/"/g,iu=/^(?:script|style|textarea|title)$/i,ig=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),im=ig(1),ib=(ig(2),ig(3),Symbol.for("lit-noChange")),iv=Symbol.for("lit-nothing"),iy=new WeakMap,i_=t4.createTreeWalker(t4,129);function iw(e,t){if(!ir(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==t3?t3.createHTML(t):t}let ik=(e,t)=>{let r=e.length-1,o=[],n,a=2===t?"<svg>":3===t?"<math>":"",c=ia;for(let t=0;t<r;t++){let r=e[t],h,p,f=-1,g=0;for(;g<r.length&&(c.lastIndex=g,null!==(p=c.exec(r)));)g=c.lastIndex,c===ia?"!--"===p[1]?c=il:void 0!==p[1]?c=ic:void 0!==p[2]?(iu.test(p[2])&&(n=RegExp("</"+p[2],"g")),c=ih):void 0!==p[3]&&(c=ih):c===ih?">"===p[0]?(c=n??ia,f=-1):void 0===p[1]?f=-2:(f=c.lastIndex-p[2].length,h=p[1],c=void 0===p[3]?ih:'"'===p[3]?ip:id):c===ip||c===id?c=ih:c===il||c===ic?c=ia:(c=ih,n=void 0);let m=c===ih&&e[t+1].startsWith("/>")?" ":"";a+=c===ia?r+t8:f>=0?(o.push(h),r.slice(0,f)+t6+r.slice(f)+t7+m):r+t7+(-2===f?t:m)}return[iw(e,a+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};let lit_html_S=class lit_html_S{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,a=0,c=e.length-1,h=this.parts,[p,f]=ik(e,t);if(this.el=lit_html_S.createElement(p,r),i_.currentNode=this.el.content,2===t||3===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=i_.nextNode())&&h.length<c;){if(1===o.nodeType){if(o.hasAttributes())for(let e of o.getAttributeNames())if(e.endsWith(t6)){let t=f[a++],r=o.getAttribute(e).split(t7),c=/([.?@])?(.*)/.exec(t);h.push({type:1,index:n,name:c[2],strings:r,ctor:"."===c[1]?lit_html_I:"?"===c[1]?lit_html_L:"@"===c[1]?z:lit_html_H}),o.removeAttribute(e)}else e.startsWith(t7)&&(h.push({type:6,index:n}),o.removeAttribute(e));if(iu.test(o.tagName)){let e=o.textContent.split(t7),t=e.length-1;if(t>0){o.textContent=t5?t5.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],ie()),i_.nextNode(),h.push({type:2,index:++n});o.append(e[t],ie())}}}else if(8===o.nodeType)if(o.data===t9)h.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(t7,e+1));)h.push({type:7,index:n}),e+=t7.length-1}n++}}static createElement(e,t){let r=t4.createElement("template");return r.innerHTML=e,r}};function ix(e,t,r=e,o){if(t===ib)return t;let n=void 0!==o?r._$Co?.[o]:r._$Cl,a=ii(t)?void 0:t._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(e))._$AT(e,r,o),void 0!==o?(r._$Co??=[])[o]=n:r._$Cl=n),void 0!==n&&(t=ix(e,n._$AS(e,t.values),n,o)),t}let lit_html_R=class lit_html_R{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??t4).importNode(t,!0);i_.currentNode=o;let n=i_.nextNode(),a=0,c=0,h=r[0];for(;void 0!==h;){if(a===h.index){let t;2===h.type?t=new lit_html_k(n,n.nextSibling,this,e):1===h.type?t=new h.ctor(n,h.name,h.strings,this,e):6===h.type&&(t=new Z(n,this,e)),this._$AV.push(t),h=r[++c]}a!==h?.index&&(n=i_.nextNode(),a++)}return i_.currentNode=t4,o}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};let lit_html_k=class lit_html_k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=iv,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){ii(e=ix(this,e,t))?e===iv||null==e||""===e?(this._$AH!==iv&&this._$AR(),this._$AH=iv):e!==this._$AH&&e!==ib&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):is(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==iv&&ii(this._$AH)?this._$AA.nextSibling.data=e:this.T(t4.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=lit_html_S.createElement(iw(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let e=new lit_html_R(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=iy.get(e.strings);return void 0===t&&iy.set(e.strings,t=new lit_html_S(e)),t}k(e){ir(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let n of e)o===t.length?t.push(r=new lit_html_k(this.O(ie()),this.O(ie()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=t2(e).nextSibling;t2(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let lit_html_H=class lit_html_H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=iv,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=iv}_$AI(e,t=this,r,o){let n=this.strings,a=!1;if(void 0===n)(a=!ii(e=ix(this,e,t,0))||e!==this._$AH&&e!==ib)&&(this._$AH=e);else{let o,c,h=e;for(e=n[0],o=0;o<n.length-1;o++)(c=ix(this,h[r+o],t,o))===ib&&(c=this._$AH[o]),a||=!ii(c)||c!==this._$AH[o],c===iv?e=iv:e!==iv&&(e+=(c??"")+n[o+1]),this._$AH[o]=c}a&&!o&&this.j(e)}j(e){e===iv?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let lit_html_I=class lit_html_I extends lit_html_H{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===iv?void 0:e}};let lit_html_L=class lit_html_L extends lit_html_H{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==iv)}};let z=class z extends lit_html_H{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=ix(this,e,t,0)??iv)===ib)return;let r=this._$AH,o=e===iv&&r!==iv||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==iv&&(r===iv||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let Z=class Z{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ix(this,e)}};let i$=t1.litHtmlPolyfillSupport;i$?.(lit_html_S,lit_html_k),(t1.litHtmlVersions??=[]).push("3.3.2");let iC=globalThis;let lit_element_i=class lit_element_i extends reactive_element_y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{let o=r?.renderBefore??t,n=o._$litPart$;if(void 0===n){let e=r?.renderBefore??null;o._$litPart$=n=new lit_html_k(t.insertBefore(ie(),e),e,void 0,r??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ib}};lit_element_i._$litElement$=!0,lit_element_i.finalized=!0,iC.litElementHydrateSupport?.({LitElement:lit_element_i});let iS=iC.litElementPolyfillSupport;iS?.({LitElement:lit_element_i}),(iC.litElementVersions??=[]).push("4.2.2");let iA=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},iE={attribute:!0,type:String,converter:tQ,reflect:!1,hasChanged:tJ};function iP(e){return(t,r)=>{let o;return"object"==typeof r?((e=iE,t,r)=>{let{kind:o,metadata:n}=r,a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),"accessor"===o){let{name:o}=r;return{set(r){let n=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,n,e,!0,r)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){let{name:o}=r;return function(r){let n=this[o];t.call(this,r),this.requestUpdate(o,n,e,!0,r)}}throw Error("Unsupported decorator location: "+o)})(e,t,r):(o=t.hasOwnProperty(r),t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0)}}function iI(e){return iP({...e,state:!0,attribute:!1})}let iR=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r);function iT(e,t){return(r,o,n)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let e,{get:t,set:c}="object"==typeof o?r:n??(e=Symbol(),{get(){return this[e]},set(t){this[e]=t}});return iR(r,o,{get(){let e=t.call(this);return void 0===e&&(null!==(e=a(this))||this.hasUpdated)&&c.call(this,e),e}})}return iR(r,o,{get(){return a(this)}})}}function iz(e,t,r){return e?t(e):r?.(e)}let iM=new WeakMap;let GlElement=class GlElement extends lit_element_i{emit(e,t,r){let o=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,...r,detail:t});return this.dispatchEvent(o),o}update(e){let t=iM.get(this.constructor);if(null!=t)for(let{keys:r,method:o,afterFirstUpdate:n}of t){if(n&&!this.hasUpdated)continue;let t=r.filter(t=>e.has(t));t.length&&o.call(this,t)}super.update(e)}};function*iL(e,t){if(void 0!==e){let r=0;for(let o of e)yield t(o,r++)}}let iO=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};let{I:iD}={M:t6,P:t7,A:t9,C:1,L:ik,R:lit_html_R,D:is,V:ix,I:lit_html_k,H:lit_html_H,N:lit_html_L,U:z,B:lit_html_I,F:Z},iN=e=>e,iB=(e,t,r)=>{let o=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===r)r=new iD(o.insertBefore(document.createComment(""),n),o.insertBefore(document.createComment(""),n),e,e.options);else{let t=r._$AB.nextSibling,a=r._$AM,c=a!==e;if(c){let t;r._$AQ?.(e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==a._$AU&&r._$AP(t)}if(t!==n||c){let e=r._$AA;for(;e!==t;){let t=iN(e).nextSibling;iN(o).insertBefore(e,n),e=t}}}return r},iU=(e,t,r=e)=>(e._$AI(t,r),e),ij={},iH=(e,t=ij)=>e._$AH=t,iF=e=>{e._$AR(),e._$AA.remove()},iV=(e,t,r)=>{let o=new Map;for(let n=t;n<=r;n++)o.set(e[n],n);return o},iq=iO(class extends directive_i{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let o;void 0===r?r=t:void 0!==t&&(o=t);let n=[],a=[],c=0;for(let t of e)n[c]=o?o(t,c):c,a[c]=r(t,c),c++;return{values:a,keys:n}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,o]){let n=e._$AH,{values:a,keys:c}=this.dt(t,r,o);if(!Array.isArray(n))return this.ut=c,a;let h=this.ut??=[],p=[],f,g,m=0,b=n.length-1,v=0,y=a.length-1;for(;m<=b&&v<=y;)if(null===n[m])m++;else if(null===n[b])b--;else if(h[m]===c[v])p[v]=iU(n[m],a[v]),m++,v++;else if(h[b]===c[y])p[y]=iU(n[b],a[y]),b--,y--;else if(h[m]===c[y])p[y]=iU(n[m],a[y]),iB(e,p[y+1],n[m]),m++,y--;else if(h[b]===c[v])p[v]=iU(n[b],a[v]),iB(e,n[m],n[b]),b--,v++;else if(void 0===f&&(f=iV(c,v,y),g=iV(h,m,b)),f.has(h[m]))if(f.has(h[b])){let t=g.get(c[v]),r=void 0!==t?n[t]:null;if(null===r){let t=iB(e,n[m]);iU(t,a[v]),p[v]=t}else p[v]=iU(r,a[v]),iB(e,n[m],r),n[t]=null;v++}else iF(n[b]),b--;else iF(n[m]),m++;for(;v<=y;){let t=iB(e,p[y+1]);iU(t,a[v]),p[v++]=t}for(;m<=b;){let e=n[m++];null!==e&&iF(e)}return this.ut=c,iH(e,p),ib}});let unsafe_html_e=class unsafe_html_e extends directive_i{constructor(e){if(super(e),this.it=iv,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===iv||null==e)return this._t=void 0,this.it=e;if(e===ib)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;let iW=iO(unsafe_html_e);function iK(e,t,r,o=!1,n){let a={name:"",relativePath:"",children:new Map,descendants:[]},c=e.reduce((e,o)=>{let n=e,a="";for(let e of t(o)){a=r(a,e),n.children??=new Map;let t=n.children.get(e);null==t&&(t={name:e,relativePath:a,parent:n,children:void 0,descendants:void 0},n.children.set(e,t)),n.descendants??=[],n.descendants.push(o),n=t}return n.value=o,e},a);return o&&(c=function e(t,r,o=!0,n){if(null==t.children)return t;let a=[...t.children.values()];for(let t of a)e(t,r,!1,n);if(!o&&null==t.value&&1===a.length){let e=a[0];if((null==e.value||n?.(e.value))&&(t.name=r(t.name,e.name),t.relativePath=e.relativePath,t.children=e.children,t.descendants=e.descendants,t.value=e.value,null!=t.children))for(let e of t.children.values())e.parent=t}return t}(c,r,!0,n)),c}var iG=w(5090);let iZ=iO(class extends directive_i{constructor(){super(...arguments),this.key=iv}render(e,t){return this.key=e,t}update(e,[t,r]){return t!==this.key&&(iH(e),this.key=t),r}}),iX=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),iX(e,t);return!0},iY=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},iQ=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),i1(t)}};function iJ(e){void 0!==this._$AN?(iY(this),this._$AM=e,iQ(this)):this._$AM=e}function i0(e,t=!1,r=0){let o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(o))for(let e=r;e<o.length;e++)iX(o[e],!1),iY(o[e]);else null!=o&&(iX(o,!1),iY(o));else iX(this,e)}let i1=e=>{2==e.type&&(e._$AP??=i0,e._$AQ??=iJ)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),iQ(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(iX(this,e),iY(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};let i2=()=>new ref_h;let ref_h=class ref_h{};let i5=new WeakMap,i3=iO(class extends async_directive_f{render(e){return iv}update(e,[t]){let r=t!==this.G;return r&&void 0!==this.G&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),iv}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){let t=this.ht??globalThis,r=i5.get(t);void 0===r&&(r=new WeakMap,i5.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ht,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?i5.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),i6=tU`
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
`;tU`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus-visible):not(:focus-within) {
		${i6}
	}
`;let i7=tU`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,i9=tU`
	outline: 1px solid var(--color-focus-border);
	outline-offset: 2px;
`;tU`
	:focus-visible {
		${i7}
	}
`;let i8=tU`
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
`;tU`
	* {
		box-sizing: border-box;
	}
`,tU`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${i7}
	}
	a:hover {
		text-decoration: underline;
	}
`;let i4=tU`
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
`;tU`
	.inline-code {
		background: var(--vscode-textCodeBlock-background);
		border-radius: 3px;
		padding: 0px 4px 2px 4px;
		font-family: var(--vscode-editor-font-family);
	}
`;function re(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c}"function"==typeof SuppressedError&&SuppressedError;let RangeChangedEvent=class RangeChangedEvent extends Event{constructor(e){super(RangeChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};RangeChangedEvent.eventName="rangeChanged";let VisibilityChangedEvent=class VisibilityChangedEvent extends Event{constructor(e){super(VisibilityChangedEvent.eventName,{bubbles:!1}),this.first=e.first,this.last=e.last}};VisibilityChangedEvent.eventName="visibilityChanged";let UnpinnedEvent=class UnpinnedEvent extends Event{constructor(){super(UnpinnedEvent.eventName,{bubbles:!1})}};UnpinnedEvent.eventName="unpinned";let ScrollerShim=class ScrollerShim{constructor(e){this._element=null;let t=e??window;this._node=t,e&&(this._element=e)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}};let ScrollerController=class ScrollerController extends ScrollerShim{constructor(e,t){super(t),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);let r=this._node;this._originalScrollTo=r.scrollTo,this._originalScrollBy=r.scrollBy,this._originalScroll=r.scroll,this._attach(e)}get _destination(){return this.__destination}get scrolling(){return null!==this._destination}scrollTo(e,t){this._scrollTo("number"==typeof e&&"number"==typeof t?{left:e,top:t}:e)}scrollBy(e,t){let r="number"==typeof e&&"number"==typeof t?{left:e,top:t}:e;void 0!==r.top&&(r.top+=this.scrollTop),void 0!==r.left&&(r.left+=this.scrollLeft),this._scrollTo(r)}_nativeScrollTo(e){this._originalScrollTo.bind(this._element||window)(e)}_scrollTo(e,t=null,r=null){null!==this._end&&this._end(),"smooth"===e.behavior?(this._setDestination(e),this._retarget=t,this._end=r):this._resetScrollState(),this._nativeScrollTo(e)}_setDestination(e){let{top:t,left:r}=e;return t=void 0===t?void 0:Math.max(0,Math.min(t,this.maxScrollTop)),r=void 0===r?void 0:Math.max(0,Math.min(r,this.maxScrollLeft)),(null===this._destination||r!==this._destination.left||t!==this._destination.top)&&(this.__destination={top:t,left:r,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(e){this._destination&&this._setDestination(e)&&this._nativeScrollTo(this._destination)}managedScrollTo(e,t,r){return this._scrollTo(e,t,r),this._updateManagedScrollTo}correctScrollError(e){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(e),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(null!==this._destination){let{scrollTop:e,scrollLeft:t}=this,{top:r,left:o}=this._destination;r=Math.min(r||0,this.maxScrollTop);let n=Math.abs((o=Math.min(o||0,this.maxScrollLeft))-t);1>Math.abs(r-e)&&n<1&&(this._end&&this._end(),this._resetScrollState())}}detach(e){return this._clients.delete(e),0===this._clients.size&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(e){this._clients.add(e),1===this._clients.size&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}};let ri="u">typeof window?window.ResizeObserver:void 0,rr=Symbol("virtualizerRef"),rs="virtualizer-sizer";let Virtualizer=class Virtualizer{constructor(e){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!e)throw Error("Virtualizer constructor requires a configuration object");if(e.hostElement)this._init(e);else throw Error('Virtualizer configuration requires the "hostElement" property')}set items(e){Array.isArray(e)&&e!==this._items&&(this._itemsChanged=!0,this._items=e,this._schedule(this._updateLayout))}_init(e){this._isScroller=!!e.scroller,this._initHostElement(e);let t=e.layout||{};this._layoutInitialized=this._initLayout(t)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new ri(()=>this._hostElementSizeChanged()),this._childrenRO=new ri(this._childrenSizeChanged.bind(this))}_initHostElement(e){let t=this._hostElement=e.hostElement;this._applyVirtualizerStyles(),t[rr]=this}connected(){this._initObservers();let e=this._isScroller;this._clippingAncestors=function(e,t=!1){let r=!1;return(function(e,t=!1){let r=[],o=t?e:rn(e);for(;null!==o;)r.push(o),o=rn(o);return r})(e,t).filter(e=>{if(r)return!1;let t=getComputedStyle(e);return r="fixed"===t.position,"visible"!==t.overflow})}(this._hostElement,e),this._scrollerController=new ScrollerController(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(e=>{e.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(e),this._hostElementRO.observe(e)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(e=>this._childrenRO.observe(e)),this._scrollEventListeners.forEach(e=>e.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(e=>e.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){let e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){let e=this._hostElement;if(!this._sizer){let t=e.querySelector(`[${rs}]`);t||((t=document.createElement("div")).setAttribute(rs,""),e.appendChild(t)),Object.assign(t.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),t.textContent="&nbsp;",t.setAttribute(rs,""),this._sizer=t}return this._sizer}async updateLayoutConfig(e){await this._layoutInitialized;let r=e.type||t;if("function"==typeof r&&this._layout instanceof r){let t={...e};return delete t.type,this._layout.config=t,!0}return!1}async _initLayout(e){let r,o;if("function"==typeof e.type){o=e.type;let t={...e};delete t.type,r=t}else r=e;void 0===o&&(t=o=(await Promise.resolve().then(w.bind(w,5090))).FlowLayout),this._layout=new o(e=>this._handleLayoutMessage(e),r),this._layout.measureChildren&&"function"==typeof this._layout.updateItemSizes&&("function"==typeof this._layout.measureChildren&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){null===this._benchmarkStart&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(null!==this._benchmarkStart){let e=window.performance.now(),t=e-this._benchmarkStart,r=performance.getEntriesByName("uv-virtualizing","measure").filter(t=>t.startTime>=this._benchmarkStart&&t.startTime<e).reduce((e,t)=>e+t.duration,0);return this._benchmarkStart=null,{timeElapsed:t,virtualizationTime:r}}return null}_measureChildren(){let e={},t=this._children,r=this._measureChildOverride||this._measureChild;for(let o=0;o<t.length;o++){let n=t[o],a=this._first+o;(this._itemsChanged||this._toBeMeasured.has(n))&&(e[a]=r.call(this,n,this._items[a]))}this._childMeasurements=e,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(e){var t;let r,{width:o,height:n}=e.getBoundingClientRect();return Object.assign({width:o,height:n},(t=e,{marginTop:ro((r=window.getComputedStyle(t)).marginTop),marginRight:ro(r.marginRight),marginBottom:ro(r.marginBottom),marginLeft:ro(r.marginLeft)}))}async _schedule(e){this._scheduled.has(e)||(this._scheduled.add(e),await Promise.resolve(),this._scheduled.delete(e),e.call(this))}async _updateDOM(e){this._scrollSize=e.scrollSize,this._adjustRange(e.range),this._childrenPos=e.childPositions,this._scrollError=e.scrollError||null;let{_rangeChanged:t,_itemsChanged:r}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(t||r)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(e=>this._childrenRO.observe(e)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),null!==this._childMeasurements&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch{}window.performance.mark("uv-start")}!1===this._scrollerController.correctingScrollError&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(e){"scroll"===e.type&&(e.currentTarget===window||this._clippingAncestors.includes(e.currentTarget))&&this._handleScrollEvent()}_handleLayoutMessage(e){"stateChanged"===e.type?this._updateDOM(e):"visibilityChanged"===e.type?(this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._notifyVisibility()):"unpinned"===e.type&&this._hostElement.dispatchEvent(new UnpinnedEvent)}get _children(){let e=[],t=this._hostElement.firstElementChild;for(;t;)t.hasAttribute(rs)||e.push(t),t=t.nextElementSibling;return e}_updateView(){let e=this._hostElement,t=this._scrollerController?.element,r=this._layout;if(e&&t&&r){let o,n,a,c,h=e.getBoundingClientRect();o=0,n=0,a=window.innerHeight,c=window.innerWidth;let p=this._clippingAncestors.map(e=>e.getBoundingClientRect());for(let e of(p.unshift(h),p))o=Math.max(o,e.top),n=Math.max(n,e.left),a=Math.min(a,e.bottom),c=Math.min(c,e.right);let f=t.getBoundingClientRect(),g={left:h.left-f.left,top:h.top-f.top},m={width:t.scrollWidth,height:t.scrollHeight},b=o-h.top+e.scrollTop,v=n-h.left+e.scrollLeft;r.viewportSize={width:Math.max(0,c-n),height:Math.max(0,a-o)},r.viewportScroll={top:b,left:v},r.totalScrollSize=m,r.offsetWithinScroller=g}}_sizeHostElement(e){let t=e&&null!==e.width?Math.min(82e5,e.width):0,r=e&&null!==e.height?Math.min(82e5,e.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${t}px, ${r}px)`;else{let e=this._hostElement.style;e.minWidth=t?`${t}px`:"100%",e.minHeight=r?`${r}px`:"100%"}}_positionChildren(e){e&&e.forEach(({top:e,left:t,width:r,height:o,xOffset:n,yOffset:a},c)=>{let h=this._children[c-this._first];h&&(h.style.position="absolute",h.style.boxSizing="border-box",h.style.transform=`translate(${t}px, ${e}px)`,void 0!==r&&(h.style.width=r+"px"),void 0!==o&&(h.style.height=o+"px"),h.style.left=void 0===n?null:n+"px",h.style.top=void 0===a?null:a+"px")})}async _adjustRange(e){let{_first:t,_last:r,_firstVisible:o,_lastVisible:n}=this;this._first=e.first,this._last=e.last,this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==t||this._last!==r,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==n}_correctScrollError(){if(this._scrollError){let{scrollTop:e,scrollLeft:t}=this._scrollerController,{top:r,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:e-r,left:t-o})}}element(e){return e===1/0&&(e=this._items.length-1),this._items?.[e]===void 0?void 0:{scrollIntoView:(t={})=>this._scrollElementIntoView({...t,index:e})}}_scrollElementIntoView(e){if(e.index>=this._first&&e.index<=this._last)this._children[e.index-this._first].scrollIntoView(e);else if(e.index=Math.min(e.index,this._items.length-1),"smooth"===e.behavior){let t=this._layout.getScrollIntoViewCoordinates(e),{behavior:r}=e;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(t,{behavior:r}),()=>this._layout.getScrollIntoViewCoordinates(e),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=e}else this._layout.pin=e}_checkScrollIntoViewTarget(e){let{index:t}=this._scrollIntoViewTarget||{};t&&e?.has(t)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new RangeChangedEvent({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new VisibilityChangedEvent({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((e,t)=>{this._layoutCompleteResolver=e,this._layoutCompleteRejecter=t})),this._layoutCompletePromise}_rejectLayoutCompletePromise(e){null!==this._layoutCompleteRejecter&&this._layoutCompleteRejecter(e),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&null===this._pendingLayoutComplete&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){null!==this._layoutCompleteResolver&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(e){if(this._layout?.measureChildren){for(let t of e)this._toBeMeasured.set(t.target,t.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}};function ro(e){let t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function rn(e){if(null!==e.assignedSlot)return e.assignedSlot;if(null!==e.parentElement)return e.parentElement;let t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}let ra=e=>e,rl=(e,t)=>im`${t}: ${JSON.stringify(e,null,2)}`;let VirtualizeDirective=class VirtualizeDirective extends async_directive_f{constructor(e){if(super(e),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,t)=>rl(e,t+this._first),this._keyFunction=(e,t)=>ra(e,t+this._first),this._items=[],2!==e.type)throw Error("The virtualize directive can only be used in child expressions")}render(e){e&&this._setFunctions(e);let t=[];if(this._first>=0&&this._last>=this._first)for(let e=this._first;e<=this._last;e++)t.push(this._items[e]);return iq(t,this._keyFunction,this._renderItem)}update(e,[t]){this._setFunctions(t);let r=this._items!==t.items;return this._items=t.items||[],this._virtualizer?this._updateVirtualizerConfig(e,t):this._initialize(e,t),r?ib:this.render()}async _updateVirtualizerConfig(e,t){if(!await this._virtualizer.updateLayoutConfig(t.layout||{})){let r=e.parentNode;this._makeVirtualizer(r,t)}this._virtualizer.items=this._items}_setFunctions(e){let{renderItem:t,keyFunction:r}=e;t&&(this._renderItem=(e,r)=>t(e,r+this._first)),r&&(this._keyFunction=(e,t)=>r(e,t+this._first))}_makeVirtualizer(e,t){this._virtualizer&&this._virtualizer.disconnected();let{layout:r,scroller:o,items:n}=t;this._virtualizer=new Virtualizer({hostElement:e,layout:r,scroller:o}),this._virtualizer.items=n,this._virtualizer.connected()}_initialize(e,t){let r=e.parentNode;r&&1===r.nodeType&&(r.addEventListener("rangeChanged",e=>{this._first=e.first,this._last=e.last,this.setValue(this.render())}),this._makeVirtualizer(r,t))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}};let rc=iO(VirtualizeDirective);let LitVirtualizer=class LitVirtualizer extends lit_element_i{constructor(){super(...arguments),this.items=[],this.renderItem=rl,this.keyFunction=ra,this.layout={},this.scroller=!1}createRenderRoot(){return this}render(){let{items:e,renderItem:t,keyFunction:r,layout:o,scroller:n}=this;return im`${rc({items:e,renderItem:t,keyFunction:r,layout:o,scroller:n})}`}element(e){return this[rr]?.element(e)}get layoutComplete(){return this[rr]?.layoutComplete}scrollToIndex(e,t="start"){this.element(e)?.scrollIntoView({block:t})}};re([iP({attribute:!1})],LitVirtualizer.prototype,"items",void 0),re([iP()],LitVirtualizer.prototype,"renderItem",void 0),re([iP()],LitVirtualizer.prototype,"keyFunction",void 0),re([iP({attribute:!1})],LitVirtualizer.prototype,"layout",void 0),re([iP({reflect:!0,type:Boolean})],LitVirtualizer.prototype,"scroller",void 0),customElements.define("lit-virtualizer",LitVirtualizer);let rh=navigator?.userAgentData?.platform,rd=navigator.userAgent;"Linux"===rh||rd.includes("Linux");let rp="macOS"===rh||rd.includes("Macintosh");"Windows"===rh||rd.includes("Windows");var ru=Object.defineProperty,rf=Object.defineProperties,rg=Object.getOwnPropertyDescriptor,rm=Object.getOwnPropertyDescriptors,rb=Object.getOwnPropertySymbols,rv=Object.prototype.hasOwnProperty,ry=Object.prototype.propertyIsEnumerable,r_=e=>{throw TypeError(e)},rw=(e,t,r)=>t in e?ru(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,rk=(e,t)=>{for(var r in t||(t={}))rv.call(t,r)&&rw(e,r,t[r]);if(rb)for(var r of rb(t))ry.call(t,r)&&rw(e,r,t[r]);return e},rx=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?rg(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&ru(t,r,a),a},r$=(e,t,r)=>t.has(e)||r_("Cannot "+r),rC=new Map,rS=new WeakMap;function rA(e,t){return"rtl"===t.toLowerCase()?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function rE(e,t){rC.set(e,null!=t?t:{keyframes:[],options:{duration:0}})}function rP(e,t,r){let o=rS.get(e);if(null==o?void 0:o[t])return rA(o[t],r.dir);let n=rC.get(t);return n?rA(n,r.dir):{keyframes:[],options:{duration:0}}}var rI=tU`
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
`,rR=tU`
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
`;let rT=new Set,rz=new Map,rM="ltr",rL="en",rO="u">typeof MutationObserver&&"u">typeof document&&void 0!==document.documentElement;if(rO){let e=new MutationObserver(rN);rM=document.documentElement.dir||"ltr",rL=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function rD(...e){e.map(e=>{let t=e.$code.toLowerCase();rz.has(t)?rz.set(t,Object.assign(Object.assign({},rz.get(t)),e)):rz.set(t,e),r||(r=e)}),rN()}function rN(){rO&&(rM=document.documentElement.dir||"ltr",rL=document.documentElement.lang||navigator.language),[...rT.keys()].map(e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()})}let LocalizeController=class LocalizeController{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){rT.add(this.host)}hostDisconnected(){rT.delete(this.host)}dir(){return`${this.host.dir||rM}`.toLowerCase()}lang(){return`${this.host.lang||rL}`.toLowerCase()}getTranslationData(e){var t,r;let o=new Intl.Locale(e.replace(/_/g,"-")),n=null==o?void 0:o.language.toLowerCase(),a=null!=(r=null==(t=null==o?void 0:o.region)?void 0:t.toLowerCase())?r:"",c=rz.get(`${n}-${a}`),h=rz.get(n);return{locale:o,language:n,region:a,primary:c,secondary:h}}exists(e,t){var o;let{primary:n,secondary:a}=this.getTranslationData(null!=(o=t.lang)?o:this.lang());return t=Object.assign({includeFallback:!1},t),!!n&&!!n[e]||!!a&&!!a[e]||!!t.includeFallback&&!!r&&!!r[e]}term(e,...t){let o,{primary:n,secondary:a}=this.getTranslationData(this.lang());if(n&&n[e])o=n[e];else if(a&&a[e])o=a[e];else{if(!r||!r[e])return String(e);o=r[e]}return"function"==typeof o?o(...t):o}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return isNaN(e=Number(e))?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}};var rB={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};rD(rB);var rU=class extends LocalizeController{};rD(rB);var rj=tU`
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
`,rH=class extends lit_element_i{constructor(){let e;super(),(e=v).has(this)?r_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(this):e.set(this,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let r=new CustomEvent(e,rk({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){let o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch(o){customElements.define(e,class extends t{},r)}return}let n=" (unknown version)";"version"in t&&t.version&&(n=" v"+t.version),"version"in o&&o.version&&o.version}attributeChangedCallback(e,t,r){let o,n;if(r$(this,o=v,"read from private field"),n?!n.call(this):!o.get(this)){let e,t;this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])}),r$(this,e=v,"write to private field"),t?t.call(this,!0):e.set(this,!0)}super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&null==this[r]&&(this[r]=t)})}};v=new WeakMap,rH.version="2.20.1",rH.dependencies={},rx([iP()],rH.prototype,"dir",2),rx([iP()],rH.prototype,"lang",2);let rF=Math.min,rV=Math.max,rq=Math.round,rW=Math.floor,rK=e=>({x:e,y:e}),rG={left:"right",right:"left",bottom:"top",top:"bottom"},rZ={start:"end",end:"start"};function rX(e,t){return"function"==typeof e?e(t):e}function rY(e){return e.split("-")[0]}function rQ(e){return e.split("-")[1]}function rJ(e){return"x"===e?"y":"x"}function r0(e){return"y"===e?"height":"width"}let r1=new Set(["top","bottom"]);function r2(e){return r1.has(rY(e))?"y":"x"}function r5(e){return e.replace(/start|end/g,e=>rZ[e])}let r3=["left","right"],r6=["right","left"],r7=["top","bottom"],r9=["bottom","top"];function r8(e){return e.replace(/left|right|bottom|top/g,e=>rG[e])}function r4(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function se(e){let{x:t,y:r,width:o,height:n}=e;return{width:o,height:n,top:r,left:t,right:t+o,bottom:r+n,x:t,y:r}}function si(e,t,r){let o,{reference:n,floating:a}=e,c=r2(t),h=rJ(r2(t)),p=r0(h),f=rY(t),g="y"===c,m=n.x+n.width/2-a.width/2,b=n.y+n.height/2-a.height/2,v=n[p]/2-a[p]/2;switch(f){case"top":o={x:m,y:n.y-a.height};break;case"bottom":o={x:m,y:n.y+n.height};break;case"right":o={x:n.x+n.width,y:b};break;case"left":o={x:n.x-a.width,y:b};break;default:o={x:n.x,y:n.y}}switch(rQ(t)){case"start":o[h]-=v*(r&&g?-1:1);break;case"end":o[h]+=v*(r&&g?-1:1)}return o}let sr=async(e,t,r)=>{let{placement:o="bottom",strategy:n="absolute",middleware:a=[],platform:c}=r,h=a.filter(Boolean),p=await (null==c.isRTL?void 0:c.isRTL(t)),f=await c.getElementRects({reference:e,floating:t,strategy:n}),{x:g,y:m}=si(f,o,p),b=o,v={},y=0;for(let r=0;r<h.length;r++){let{name:a,fn:_}=h[r],{x:w,y:k,data:x,reset:C}=await _({x:g,y:m,initialPlacement:o,placement:b,strategy:n,middlewareData:v,rects:f,platform:c,elements:{reference:e,floating:t}});g=null!=w?w:g,m=null!=k?k:m,v={...v,[a]:{...v[a],...x}},C&&y<=50&&(y++,"object"==typeof C&&(C.placement&&(b=C.placement),C.rects&&(f=!0===C.rects?await c.getElementRects({reference:e,floating:t,strategy:n}):C.rects),{x:g,y:m}=si(f,b,p)),r=-1)}return{x:g,y:m,placement:b,strategy:n,middlewareData:v}};async function ss(e,t){var r;void 0===t&&(t={});let{x:o,y:n,platform:a,rects:c,elements:h,strategy:p}=e,{boundary:f="clippingAncestors",rootBoundary:g="viewport",elementContext:m="floating",altBoundary:b=!1,padding:v=0}=rX(t,e),y=r4(v),_=h[b?"floating"===m?"reference":"floating":m],w=se(await a.getClippingRect({element:null==(r=await (null==a.isElement?void 0:a.isElement(_)))||r?_:_.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(h.floating)),boundary:f,rootBoundary:g,strategy:p})),k="floating"===m?{x:o,y:n,width:c.floating.width,height:c.floating.height}:c.reference,x=await (null==a.getOffsetParent?void 0:a.getOffsetParent(h.floating)),C=await (null==a.isElement?void 0:a.isElement(x))&&await (null==a.getScale?void 0:a.getScale(x))||{x:1,y:1},S=se(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:k,offsetParent:x,strategy:p}):k);return{top:(w.top-S.top+y.top)/C.y,bottom:(S.bottom-w.bottom+y.bottom)/C.y,left:(w.left-S.left+y.left)/C.x,right:(S.right-w.right+y.right)/C.x}}let so=new Set(["left","top"]);async function sn(e,t){let{placement:r,platform:o,elements:n}=e,a=await (null==o.isRTL?void 0:o.isRTL(n.floating)),c=rY(r),h=rQ(r),p="y"===r2(r),f=so.has(c)?-1:1,g=a&&p?-1:1,m=rX(t,e),{mainAxis:b,crossAxis:v,alignmentAxis:y}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return h&&"number"==typeof y&&(v="end"===h?-1*y:y),p?{x:v*g,y:b*f}:{x:b*f,y:v*g}}function sa(){return"u">typeof window}function sl(e){return sd(e)?(e.nodeName||"").toLowerCase():"#document"}function sc(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function sh(e){var t;return null==(t=(sd(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function sd(e){return!!sa()&&(e instanceof Node||e instanceof sc(e).Node)}function sp(e){return!!sa()&&(e instanceof Element||e instanceof sc(e).Element)}function su(e){return!!sa()&&(e instanceof HTMLElement||e instanceof sc(e).HTMLElement)}function sf(e){return!(!sa()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof sc(e).ShadowRoot)}let sg=new Set(["inline","contents"]);function sm(e){let{overflow:t,overflowX:r,overflowY:o,display:n}=sA(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&!sg.has(n)}let sb=new Set(["table","td","th"]),sv=[":popover-open",":modal"];function sy(e){return sv.some(t=>{try{return e.matches(t)}catch{return!1}})}let s_=["transform","translate","scale","rotate","perspective"],sw=["transform","translate","scale","rotate","perspective","filter"],sk=["paint","layout","strict","content"];function sx(e){let t=s$(),r=sp(e)?sA(e):e;return s_.some(e=>!!r[e]&&"none"!==r[e])||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||sw.some(e=>(r.willChange||"").includes(e))||sk.some(e=>(r.contain||"").includes(e))}function s$(){return!("u"<typeof CSS)&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}let sC=new Set(["html","body","#document"]);function sS(e){return sC.has(sl(e))}function sA(e){return sc(e).getComputedStyle(e)}function sE(e){return sp(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function sP(e){if("html"===sl(e))return e;let t=e.assignedSlot||e.parentNode||sf(e)&&e.host||sh(e);return sf(t)?t.host:t}function sI(e,t,r){var o;void 0===t&&(t=[]),void 0===r&&(r=!0);let n=function e(t){let r=sP(t);return sS(r)?t.ownerDocument?t.ownerDocument.body:t.body:su(r)&&sm(r)?r:e(r)}(e),a=n===(null==(o=e.ownerDocument)?void 0:o.body),c=sc(n);if(a){let e=sR(c);return t.concat(c,c.visualViewport||[],sm(n)?n:[],e&&r?sI(e):[])}return t.concat(n,sI(n,[],r))}function sR(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function sT(e){let t=sA(e),r=parseFloat(t.width)||0,o=parseFloat(t.height)||0,n=su(e),a=n?e.offsetWidth:r,c=n?e.offsetHeight:o,h=rq(r)!==a||rq(o)!==c;return h&&(r=a,o=c),{width:r,height:o,$:h}}function sz(e){return sp(e)?e:e.contextElement}function sM(e){let t=sz(e);if(!su(t))return rK(1);let r=t.getBoundingClientRect(),{width:o,height:n,$:a}=sT(t),c=(a?rq(r.width):r.width)/o,h=(a?rq(r.height):r.height)/n;return c&&Number.isFinite(c)||(c=1),h&&Number.isFinite(h)||(h=1),{x:c,y:h}}let sL=rK(0);function sO(e){let t=sc(e);return s$()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:sL}function sD(e,t,r,o){var n;void 0===t&&(t=!1),void 0===r&&(r=!1);let a=e.getBoundingClientRect(),c=sz(e),h=rK(1);t&&(o?sp(o)&&(h=sM(o)):h=sM(e));let p=(void 0===(n=r)&&(n=!1),o&&(!n||o===sc(c))&&n)?sO(c):rK(0),f=(a.left+p.x)/h.x,g=(a.top+p.y)/h.y,m=a.width/h.x,b=a.height/h.y;if(c){let e=sc(c),t=o&&sp(o)?sc(o):o,r=e,n=sR(r);for(;n&&o&&t!==r;){let e=sM(n),t=n.getBoundingClientRect(),o=sA(n),a=t.left+(n.clientLeft+parseFloat(o.paddingLeft))*e.x,c=t.top+(n.clientTop+parseFloat(o.paddingTop))*e.y;f*=e.x,g*=e.y,m*=e.x,b*=e.y,f+=a,g+=c,n=sR(r=sc(n))}}return se({width:m,height:b,x:f,y:g})}function sN(e,t){let r=sE(e).scrollLeft;return t?t.left+r:sD(sh(e)).left+r}function sB(e,t){let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-sN(e,r),y:r.top+t.scrollTop}}let sU=new Set(["absolute","fixed"]);function sj(e,t,r){var o;let n;if("viewport"===t)n=function(e,t){let r=sc(e),o=sh(e),n=r.visualViewport,a=o.clientWidth,c=o.clientHeight,h=0,p=0;if(n){a=n.width,c=n.height;let e=s$();(!e||e&&"fixed"===t)&&(h=n.offsetLeft,p=n.offsetTop)}let f=sN(o);if(f<=0){let e=o.ownerDocument,t=e.body,r=getComputedStyle(t),n="CSS1Compat"===e.compatMode&&parseFloat(r.marginLeft)+parseFloat(r.marginRight)||0,c=Math.abs(o.clientWidth-t.clientWidth-n);c<=25&&(a-=c)}else f<=25&&(a+=f);return{width:a,height:c,x:h,y:p}}(e,r);else if("document"===t){let t,r,a,c,h,p,f;o=sh(e),t=sh(o),r=sE(o),a=o.ownerDocument.body,c=rV(t.scrollWidth,t.clientWidth,a.scrollWidth,a.clientWidth),h=rV(t.scrollHeight,t.clientHeight,a.scrollHeight,a.clientHeight),p=-r.scrollLeft+sN(o),f=-r.scrollTop,"rtl"===sA(a).direction&&(p+=rV(t.clientWidth,a.clientWidth)-c),n={width:c,height:h,x:p,y:f}}else if(sp(t)){let e,o,a,c,h,p;o=(e=sD(t,!0,"fixed"===r)).top+t.clientTop,a=e.left+t.clientLeft,c=su(t)?sM(t):rK(1),h=t.clientWidth*c.x,p=t.clientHeight*c.y,n={width:h,height:p,x:a*c.x,y:o*c.y}}else{let r=sO(e);n={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return se(n)}function sH(e){return"static"===sA(e).position}function sF(e,t){if(!su(e)||"fixed"===sA(e).position)return null;if(t)return t(e);let r=e.offsetParent;return sh(e)===r&&(r=r.ownerDocument.body),r}function sV(e,t){var r;let o=sc(e);if(sy(e))return o;if(!su(e)){let t=sP(e);for(;t&&!sS(t);){if(sp(t)&&!sH(t))return t;t=sP(t)}return o}let n=sF(e,t);for(;n&&(r=n,sb.has(sl(r)))&&sH(n);)n=sF(n,t);return n&&sS(n)&&sH(n)&&!sx(n)?o:n||function(e){let t=sP(e);for(;su(t)&&!sS(t);){if(sx(t))return t;if(sy(t))break;t=sP(t)}return null}(e)||o}let sq=async function(e){let t=this.getOffsetParent||sV,r=this.getDimensions,o=await r(e.floating);return{reference:function(e,t,r){let o=su(t),n=sh(t),a="fixed"===r,c=sD(e,!0,a,t),h={scrollLeft:0,scrollTop:0},p=rK(0);if(o||!o&&!a)if(("body"!==sl(t)||sm(n))&&(h=sE(t)),o){let e=sD(t,!0,a,t);p.x=e.x+t.clientLeft,p.y=e.y+t.clientTop}else n&&(p.x=sN(n));a&&!o&&n&&(p.x=sN(n));let f=!n||o||a?rK(0):sB(n,h);return{x:c.left+h.scrollLeft-p.x-f.x,y:c.top+h.scrollTop-p.y-f.y,width:c.width,height:c.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}},sW={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:o,strategy:n}=e,a="fixed"===n,c=sh(o),h=!!t&&sy(t.floating);if(o===c||h&&a)return r;let p={scrollLeft:0,scrollTop:0},f=rK(1),g=rK(0),m=su(o);if((m||!m&&!a)&&(("body"!==sl(o)||sm(c))&&(p=sE(o)),su(o))){let e=sD(o);f=sM(o),g.x=e.x+o.clientLeft,g.y=e.y+o.clientTop}let b=!c||m||a?rK(0):sB(c,p);return{width:r.width*f.x,height:r.height*f.y,x:r.x*f.x-p.scrollLeft*f.x+g.x+b.x,y:r.y*f.y-p.scrollTop*f.y+g.y+b.y}},getDocumentElement:sh,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:o,strategy:n}=e,a=[..."clippingAncestors"===r?sy(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let o=sI(e,[],!1).filter(e=>sp(e)&&"body"!==sl(e)),n=null,a="fixed"===sA(e).position,c=a?sP(e):e;for(;sp(c)&&!sS(c);){let t=sA(c),r=sx(c);r||"fixed"!==t.position||(n=null),(a?!r&&!n:!r&&"static"===t.position&&!!n&&sU.has(n.position)||sm(c)&&!r&&function e(t,r){let o=sP(t);return!(o===r||!sp(o)||sS(o))&&("fixed"===sA(o).position||e(o,r))}(e,c))?o=o.filter(e=>e!==c):n=t,c=sP(c)}return t.set(e,o),o}(t,this._c):[].concat(r),o],c=a[0],h=a.reduce((e,r)=>{let o=sj(t,r,n);return e.top=rV(o.top,e.top),e.right=rF(o.right,e.right),e.bottom=rF(o.bottom,e.bottom),e.left=rV(o.left,e.left),e},sj(t,c,n));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}},getOffsetParent:sV,getElementRects:sq,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=sT(e);return{width:t,height:r}},getScale:sM,isElement:sp,isRTL:function(e){return"rtl"===sA(e).direction}};function sK(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let sG=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var r,o;let n,a,{placement:c,rects:h,platform:p,elements:f}=t,{apply:g=()=>{},...m}=rX(e,t),b=await ss(t,m),v=rY(c),y=rQ(c),_="y"===r2(c),{width:w,height:k}=h.floating;"top"===v||"bottom"===v?(n=v,a=y===(await (null==p.isRTL?void 0:p.isRTL(f.floating))?"start":"end")?"left":"right"):(a=v,n="end"===y?"top":"bottom");let x=k-b.top-b.bottom,C=w-b.left-b.right,S=rF(k-b[n],x),A=rF(w-b[a],C),E=!t.middlewareData.shift,P=S,I=A;if(null!=(r=t.middlewareData.shift)&&r.enabled.x&&(I=C),null!=(o=t.middlewareData.shift)&&o.enabled.y&&(P=x),E&&!y){let e=rV(b.left,0),t=rV(b.right,0),r=rV(b.top,0),o=rV(b.bottom,0);_?I=w-2*(0!==e||0!==t?e+t:rV(b.left,b.right)):P=k-2*(0!==r||0!==o?r+o:rV(b.top,b.bottom))}await g({...t,availableWidth:I,availableHeight:P});let R=await p.getDimensions(f.floating);return w!==R.width||k!==R.height?{reset:{rects:!0}}:{}}}},sZ=iO(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){for(let r in this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.st)e in t||(r.remove(e),this.st.delete(e));for(let e in t){let o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return ib}});function sX(e){var t=e;for(let e=t;e;e=sY(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=sY(t);e;e=sY(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||sx(t)||"BODY"===e.tagName))return e}return null}function sY(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}var sQ=class extends rH{constructor(){super(...arguments),this.localize=new rU(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),o=0,n=0,a=0,c=0,h=0,p=0,f=0,g=0;r?e.top<t.top?(o=e.left,n=e.bottom,a=e.right,c=e.bottom,h=t.left,p=t.top,f=t.right,g=t.top):(o=t.left,n=t.bottom,a=t.right,c=t.bottom,h=e.left,p=e.top,f=e.right,g=e.top):e.left<t.left?(o=e.right,n=e.top,a=t.left,c=t.top,h=e.right,p=e.bottom,f=t.left,g=t.bottom):(o=t.right,n=t.top,a=e.left,c=e.top,h=t.right,p=t.bottom,f=e.left,g=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${a}px`),this.style.setProperty("--hover-bridge-top-right-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${h}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${p}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${f}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${g}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else{var e;this.anchor instanceof Element||null!==(e=this.anchor)&&"object"==typeof e&&"getBoundingClientRect"in e&&(!("contextElement"in e)||e.contextElement instanceof Element)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]')}this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=function(e,t,r,o){let n;void 0===o&&(o={});let{ancestorScroll:a=!0,ancestorResize:c=!0,elementResize:h="function"==typeof ResizeObserver,layoutShift:p="function"==typeof IntersectionObserver,animationFrame:f=!1}=o,g=sz(e),m=a||c?[...g?sI(g):[],...sI(t)]:[];m.forEach(e=>{a&&e.addEventListener("scroll",r,{passive:!0}),c&&e.addEventListener("resize",r)});let b=g&&p?function(e,t){let r,o=null,n=sh(e);function a(){var e;clearTimeout(r),null==(e=o)||e.disconnect(),o=null}return!function c(h,p){void 0===h&&(h=!1),void 0===p&&(p=1),a();let f=e.getBoundingClientRect(),{left:g,top:m,width:b,height:v}=f;if(h||t(),!b||!v)return;let y={rootMargin:-rW(m)+"px "+-rW(n.clientWidth-(g+b))+"px "+-rW(n.clientHeight-(m+v))+"px "+-rW(g)+"px",threshold:rV(0,rF(1,p))||1},_=!0;function w(t){let o=t[0].intersectionRatio;if(o!==p){if(!_)return c();o?c(!1,o):r=setTimeout(()=>{c(!1,1e-7)},1e3)}1!==o||sK(f,e.getBoundingClientRect())||c(),_=!1}try{o=new IntersectionObserver(w,{...y,root:n.ownerDocument})}catch{o=new IntersectionObserver(w,y)}o.observe(e)}(!0),a}(g,r):null,v=-1,y=null;h&&(y=new ResizeObserver(e=>{let[o]=e;o&&o.target===g&&y&&(y.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var e;null==(e=y)||e.observe(t)})),r()}),g&&!f&&y.observe(g),y.observe(t));let _=f?sD(e):null;return f&&function t(){let o=sD(e);_&&!sK(_,o)&&r(),_=o,n=requestAnimationFrame(t)}(),r(),()=>{var e;m.forEach(e=>{a&&e.removeEventListener("scroll",r),c&&e.removeEventListener("resize",r)}),null==b||b(),null==(e=y)||e.disconnect(),y=null,f&&cancelAnimationFrame(n)}}(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){var e,t,r,o,n,a;let c,h,p,f;if(!this.active||!this.anchorEl)return;let g=[{name:"offset",options:e={mainAxis:this.distance,crossAxis:this.skidding},async fn(t){var r,o;let{x:n,y:a,placement:c,middlewareData:h}=t,p=await sn(t,e);return c===(null==(r=h.offset)?void 0:r.placement)&&null!=(o=h.arrow)&&o.alignmentOffset?{}:{x:n+p.x,y:a+p.y,data:{...p,placement:c}}}}];this.sync?g.push(sG({apply:({rects:e})=>{let t="width"===this.sync||"both"===this.sync,r="height"===this.sync||"both"===this.sync;this.popup.style.width=t?`${e.reference.width}px`:"",this.popup.style.height=r?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&g.push({name:"flip",options:t={boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding},async fn(e){var r,o,n,a,c,h,p,f;let g,m,b,{placement:v,middlewareData:y,rects:_,initialPlacement:w,platform:k,elements:x}=e,{mainAxis:C=!0,crossAxis:S=!0,fallbackPlacements:A,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:I=!0,...R}=rX(t,e);if(null!=(r=y.arrow)&&r.alignmentOffset)return{};let T=rY(v),M=r2(w),L=rY(w)===w,O=await (null==k.isRTL?void 0:k.isRTL(x.floating)),D=A||(L||!I?[r8(w)]:(g=r8(w),[r5(w),g,r5(g)])),N="none"!==P;!A&&N&&D.push(...(m=rQ(w),b=function(e,t,r){switch(e){case"top":case"bottom":if(r)return t?r6:r3;return t?r3:r6;case"left":case"right":return t?r7:r9;default:return[]}}(rY(w),"start"===P,O),m&&(b=b.map(e=>e+"-"+m),I&&(b=b.concat(b.map(r5)))),b));let B=[w,...D],U=await ss(e,R),j=[],H=(null==(o=y.flip)?void 0:o.overflows)||[];if(C&&j.push(U[T]),S){let e,t,r,o,n=(h=v,p=_,void 0===(f=O)&&(f=!1),e=rQ(h),r=r0(t=rJ(r2(h))),o="x"===t?e===(f?"end":"start")?"right":"left":"start"===e?"bottom":"top",p.reference[r]>p.floating[r]&&(o=r8(o)),[o,r8(o)]);j.push(U[n[0]],U[n[1]])}if(H=[...H,{placement:v,overflows:j}],!j.every(e=>e<=0)){let e=((null==(n=y.flip)?void 0:n.index)||0)+1,t=B[e];if(t&&("alignment"!==S||M===r2(t)||H.every(e=>r2(e.placement)!==M||e.overflows[0]>0)))return{data:{index:e,overflows:H},reset:{placement:t}};let r=null==(a=H.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!r)switch(E){case"bestFit":{let e=null==(c=H.filter(e=>{if(N){let t=r2(e.placement);return t===M||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:c[0];e&&(r=e);break}case"initialPlacement":r=w}if(v!==r)return{reset:{placement:r}}}return{}}}),this.shift&&g.push({name:"shift",options:r={boundary:this.shiftBoundary,padding:this.shiftPadding},async fn(e){let{x:t,y:o,placement:n}=e,{mainAxis:a=!0,crossAxis:c=!1,limiter:h={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...p}=rX(r,e),f={x:t,y:o},g=await ss(e,p),m=r2(rY(n)),b=rJ(m),v=f[b],y=f[m];if(a){let e="y"===b?"top":"left",t="y"===b?"bottom":"right",r=v+g[e],o=v-g[t];v=rV(r,rF(v,o))}if(c){let e="y"===m?"top":"left",t="y"===m?"bottom":"right",r=y+g[e],o=y-g[t];y=rV(r,rF(y,o))}let _=h.fn({...e,[b]:v,[m]:y});return{..._,data:{x:_.x-t,y:_.y-o,enabled:{[b]:a,[m]:c}}}}}),this.autoSize?g.push(sG({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${t}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&g.push({name:"arrow",options:c={element:this.arrowEl,padding:this.arrowPadding},async fn(e){let{x:t,y:r,placement:o,rects:n,platform:a,elements:h,middlewareData:p}=e,{element:f,padding:g=0}=rX(c,e)||{};if(null==f)return{};let m=r4(g),b={x:t,y:r},v=rJ(r2(o)),y=r0(v),_=await a.getDimensions(f),w="y"===v,k=w?"clientHeight":"clientWidth",x=n.reference[y]+n.reference[v]-b[v]-n.floating[y],C=b[v]-n.reference[v],S=await (null==a.getOffsetParent?void 0:a.getOffsetParent(f)),A=S?S[k]:0;A&&await (null==a.isElement?void 0:a.isElement(S))||(A=h.floating[k]||n.floating[y]);let E=A/2-_[y]/2-1,P=rF(m[w?"top":"left"],E),I=rF(m[w?"bottom":"right"],E),R=A-_[y]-I,T=A/2-_[y]/2+(x/2-C/2),M=rV(P,rF(T,R)),L=!p.arrow&&null!=rQ(o)&&T!==M&&n.reference[y]/2-(T<P?P:I)-_[y]/2<0,O=L?T<P?T-P:T-R:0;return{[v]:b[v]+O,data:{[v]:M,centerOffset:T-M-O,...L&&{alignmentOffset:O}},reset:L}}});let m="absolute"===this.strategy?e=>sW.getOffsetParent(e,sX):sW.getOffsetParent;(o=this.anchorEl,n=this.popup,a={placement:this.placement,middleware:g,strategy:this.strategy,platform:rf(rk({},sW),rm({getOffsetParent:m}))},h=new Map,f={...(p={platform:sW,...a}).platform,_c:h},sr(o,n,{...p,platform:f})).then(({x:e,y:t,middlewareData:r,placement:o})=>{let n="rtl"===this.localize.dir(),a={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=r.arrow.x,t=r.arrow.y,o="",c="",h="",p="";if("start"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";o="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",c=n?r:"",p=n?"":r}else if("end"===this.arrowPlacement){let r="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=n?"":r,p=n?r:"",h="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(p="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":"",o="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":""):(p="number"==typeof e?`${e}px`:"",o="number"==typeof t?`${t}px`:"");Object.assign(this.arrowEl.style,{top:o,right:c,bottom:h,left:p,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return im`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${sZ({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${sZ({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?im`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};function sJ(e,t){return new Promise(r=>{e.addEventListener(t,function o(n){n.target===e&&(e.removeEventListener(t,o),r())})})}function s0(e,t,r){return new Promise(o=>{if((null==r?void 0:r.duration)===1/0)throw Error("Promise-based animations must be finite.");let n=e.animate(t,rf(rk({},r),rm({duration:window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:r.duration})));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})})}function s1(e){return(e=e.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?1e3*parseFloat(e):parseFloat(e)}function s2(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function s5(e,t){let r=rk({waitUntilFirstUpdate:!1},t);return(t,o)=>{let{update:n}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{if(e.has(t)){let n=e.get(t),a=this[t];n!==a&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](n,a)}}),n.call(this,e)}}}sQ.styles=[rj,rR],rx([iT(".popup")],sQ.prototype,"popup",2),rx([iT(".popup__arrow")],sQ.prototype,"arrowEl",2),rx([iP()],sQ.prototype,"anchor",2),rx([iP({type:Boolean,reflect:!0})],sQ.prototype,"active",2),rx([iP({reflect:!0})],sQ.prototype,"placement",2),rx([iP({reflect:!0})],sQ.prototype,"strategy",2),rx([iP({type:Number})],sQ.prototype,"distance",2),rx([iP({type:Number})],sQ.prototype,"skidding",2),rx([iP({type:Boolean})],sQ.prototype,"arrow",2),rx([iP({attribute:"arrow-placement"})],sQ.prototype,"arrowPlacement",2),rx([iP({attribute:"arrow-padding",type:Number})],sQ.prototype,"arrowPadding",2),rx([iP({type:Boolean})],sQ.prototype,"flip",2),rx([iP({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(e=>e.trim()).filter(e=>""!==e),toAttribute:e=>e.join(" ")}})],sQ.prototype,"flipFallbackPlacements",2),rx([iP({attribute:"flip-fallback-strategy"})],sQ.prototype,"flipFallbackStrategy",2),rx([iP({type:Object})],sQ.prototype,"flipBoundary",2),rx([iP({attribute:"flip-padding",type:Number})],sQ.prototype,"flipPadding",2),rx([iP({type:Boolean})],sQ.prototype,"shift",2),rx([iP({type:Object})],sQ.prototype,"shiftBoundary",2),rx([iP({attribute:"shift-padding",type:Number})],sQ.prototype,"shiftPadding",2),rx([iP({attribute:"auto-size"})],sQ.prototype,"autoSize",2),rx([iP()],sQ.prototype,"sync",2),rx([iP({type:Object})],sQ.prototype,"autoSizeBoundary",2),rx([iP({attribute:"auto-size-padding",type:Number})],sQ.prototype,"autoSizePadding",2),rx([iP({attribute:"hover-bridge",type:Boolean})],sQ.prototype,"hoverBridge",2);var s3=class extends rH{constructor(){super(),this.localize=new rU(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let e=s1(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let e=s1(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(e=this.closeWatcher)||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await s2(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:r}=rP(this,"tooltip.show",{dir:this.localize.dir()});await s0(this.popup.popup,t,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await s2(this.body);let{keyframes:e,options:r}=rP(this,"tooltip.hide",{dir:this.localize.dir()});await s0(this.popup.popup,e,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,sJ(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,sJ(this,"sl-after-hide")}render(){return im`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${sZ({tooltip:!0,"tooltip--open":this.open})}
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
    `}};s3.styles=[rj,rI],s3.dependencies={"sl-popup":sQ},rx([iT("slot:not([name])")],s3.prototype,"defaultSlot",2),rx([iT(".tooltip__body")],s3.prototype,"body",2),rx([iT("sl-popup")],s3.prototype,"popup",2),rx([iP()],s3.prototype,"content",2),rx([iP()],s3.prototype,"placement",2),rx([iP({type:Boolean,reflect:!0})],s3.prototype,"disabled",2),rx([iP({type:Number})],s3.prototype,"distance",2),rx([iP({type:Boolean,reflect:!0})],s3.prototype,"open",2),rx([iP({type:Number})],s3.prototype,"skidding",2),rx([iP()],s3.prototype,"trigger",2),rx([iP({type:Boolean})],s3.prototype,"hoist",2),rx([s5("open",{waitUntilFirstUpdate:!0})],s3.prototype,"handleOpenChange",1),rx([s5(["content","distance","hoist","placement","skidding"])],s3.prototype,"handleOptionsChange",1),rx([s5("disabled")],s3.prototype,"handleDisabledChange",1),rE("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),rE("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}}),s3.define("sl-tooltip");var s6=Object.defineProperty,s7=Object.getOwnPropertyDescriptor,s9=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?s7(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&s6(t,r,a),a};rE("tooltip.show",null),rE("tooltip.hide",null);let s8=class extends lit_element_i{constructor(){super(...arguments),this.placement="bottom",this.disabled=!1,this.suppressed=!1,this.onMouseDown=e=>{this.suppressed=!0,this.hide()},this.onMouseUp=e=>{this.suppressed=!1},this.onDragStart=e=>{this.suppressed=!0,this.hide()},this.onDragEnd=e=>{this.suppressed=!1}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("dragstart",this.onDragStart,{capture:!0}),window.addEventListener("dragend",this.onDragEnd,{capture:!0})}firstUpdated(){this.observer=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&"data-current-placement"===t.attributeName){let e=t.target.getAttribute("data-current-placement");e?this.setAttribute("data-current-placement",e):this.removeAttribute("data-current-placement")}});let e=this.shadowRoot?.querySelector("sl-tooltip")?.shadowRoot;e&&this.observer.observe(e,{attributes:!0,attributeFilter:["data-current-placement"],subtree:!0})}disconnectedCallback(){this.observer?.disconnect(),this.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("dragstart",this.onDragStart,{capture:!0}),window.removeEventListener("dragend",this.onDragEnd,{capture:!0}),super.disconnectedCallback?.()}async hide(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.hide()}async show(){let e=this.shadowRoot?.querySelector("sl-tooltip");return e?.show()}render(){var e;return im`<sl-tooltip
			.placement=${this.placement}
			?disabled=${this.disabled||this.suppressed}
			.distance=${this.distance??iv}
			hoist
		>
			<slot></slot>
			<div slot="content">
				<slot name="content">${e=this.content,e?.includes(`
`)?iW(e.replace(/\n\n/g,"<hr>").replace(/\n/g,"<br>")):e}</slot>
			</div>
		</sl-tooltip>`}};s8.styles=tU`
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
	`,s9([iP()],s8.prototype,"content",2),s9([iP({reflect:!0})],s8.prototype,"placement",2),s9([iP({type:Boolean})],s8.prototype,"disabled",2),s9([iP({type:Number})],s8.prototype,"distance",2),s9([iP({type:Boolean,attribute:"hide-on-click"})],s8.prototype,"hideOnClick",2),s9([iP({type:Boolean})],s8.prototype,"hoist",2),s9([iI()],s8.prototype,"suppressed",2),s8=s9([iA("gl-tooltip")],s8);let s4=Object.freeze({add:"\\ea60",plus:"\\ea60","gist-new":"\\ea60","repo-create":"\\ea60",lightbulb:"\\ea61","light-bulb":"\\ea61",repo:"\\ea62","repo-delete":"\\ea62","gist-fork":"\\ea63","repo-forked":"\\ea63","git-pull-request":"\\ea64","git-pull-request-abandoned":"\\ea64","record-keys":"\\ea65",keyboard:"\\ea65",tag:"\\ea66","git-pull-request-label":"\\ea66","tag-add":"\\ea66","tag-remove":"\\ea66",person:"\\ea67","person-follow":"\\ea67","person-outline":"\\ea67","person-filled":"\\ea67","source-control":"\\ea68",mirror:"\\ea69","mirror-public":"\\ea69",star:"\\ea6a","star-add":"\\ea6a","star-delete":"\\ea6a","star-empty":"\\ea6a",comment:"\\ea6b","comment-add":"\\ea6b",alert:"\\ea6c",warning:"\\ea6c",search:"\\ea6d","search-save":"\\ea6d","log-out":"\\ea6e","sign-out":"\\ea6e","log-in":"\\ea6f","sign-in":"\\ea6f",eye:"\\ea70","eye-unwatch":"\\ea70","eye-watch":"\\ea70","circle-filled":"\\ea71","primitive-dot":"\\ea71","close-dirty":"\\ea71","debug-breakpoint":"\\ea71","debug-breakpoint-disabled":"\\ea71","debug-hint":"\\ea71","terminal-decoration-success":"\\ea71","primitive-square":"\\ea72",edit:"\\ea73",pencil:"\\ea73",info:"\\ea74","issue-opened":"\\ea74","gist-private":"\\ea75","git-fork-private":"\\ea75",lock:"\\ea75","mirror-private":"\\ea75",close:"\\ea76","remove-close":"\\ea76",x:"\\ea76","repo-sync":"\\ea77",sync:"\\ea77",clone:"\\ea78","desktop-download":"\\ea78",beaker:"\\ea79",microscope:"\\ea79",vm:"\\ea7a","device-desktop":"\\ea7a",file:"\\ea7b",more:"\\ea7c",ellipsis:"\\ea7c","kebab-horizontal":"\\ea7c","mail-reply":"\\ea7d",reply:"\\ea7d",organization:"\\ea7e","organization-filled":"\\ea7e","organization-outline":"\\ea7e","new-file":"\\ea7f","file-add":"\\ea7f","new-folder":"\\ea80","file-directory-create":"\\ea80",trash:"\\ea81",trashcan:"\\ea81",history:"\\ea82",clock:"\\ea82",folder:"\\ea83","file-directory":"\\ea83","symbol-folder":"\\ea83","logo-github":"\\ea84","mark-github":"\\ea84",github:"\\ea84",terminal:"\\ea85",console:"\\ea85",repl:"\\ea85",zap:"\\ea86","symbol-event":"\\ea86",error:"\\ea87",stop:"\\ea87",variable:"\\ea88","symbol-variable":"\\ea88",array:"\\ea8a","symbol-array":"\\ea8a","symbol-module":"\\ea8b","symbol-package":"\\ea8b","symbol-namespace":"\\ea8b","symbol-object":"\\ea8b","symbol-method":"\\ea8c","symbol-function":"\\ea8c","symbol-constructor":"\\ea8c","symbol-boolean":"\\ea8f","symbol-null":"\\ea8f","symbol-numeric":"\\ea90","symbol-number":"\\ea90","symbol-structure":"\\ea91","symbol-struct":"\\ea91","symbol-parameter":"\\ea92","symbol-type-parameter":"\\ea92","symbol-key":"\\ea93","symbol-text":"\\ea93","symbol-reference":"\\ea94","go-to-file":"\\ea94","symbol-enum":"\\ea95","symbol-value":"\\ea95","symbol-ruler":"\\ea96","symbol-unit":"\\ea96","activate-breakpoints":"\\ea97",archive:"\\ea98","arrow-both":"\\ea99","arrow-down":"\\ea9a","arrow-left":"\\ea9b","arrow-right":"\\ea9c","arrow-small-down":"\\ea9d","arrow-small-left":"\\ea9e","arrow-small-right":"\\ea9f","arrow-small-up":"\\eaa0","arrow-up":"\\eaa1",bell:"\\eaa2",bold:"\\eaa3",book:"\\eaa4",bookmark:"\\eaa5","debug-breakpoint-conditional-unverified":"\\eaa6","debug-breakpoint-conditional":"\\eaa7","debug-breakpoint-conditional-disabled":"\\eaa7","debug-breakpoint-data-unverified":"\\eaa8","debug-breakpoint-data":"\\eaa9","debug-breakpoint-data-disabled":"\\eaa9","debug-breakpoint-log-unverified":"\\eaaa","debug-breakpoint-log":"\\eaab","debug-breakpoint-log-disabled":"\\eaab",briefcase:"\\eaac",broadcast:"\\eaad",browser:"\\eaae",bug:"\\eaaf",calendar:"\\eab0","case-sensitive":"\\eab1",check:"\\eab2",checklist:"\\eab3","chevron-down":"\\eab4","chevron-left":"\\eab5","chevron-right":"\\eab6","chevron-up":"\\eab7","chrome-close":"\\eab8","chrome-maximize":"\\eab9","chrome-minimize":"\\eaba","chrome-restore":"\\eabb","circle-outline":"\\eabc",circle:"\\eabc","debug-breakpoint-unverified":"\\eabc","terminal-decoration-incomplete":"\\eabc","circle-slash":"\\eabd","circuit-board":"\\eabe","clear-all":"\\eabf",clippy:"\\eac0","close-all":"\\eac1","cloud-download":"\\eac2","cloud-upload":"\\eac3",code:"\\eac4","collapse-all":"\\eac5","color-mode":"\\eac6","comment-discussion":"\\eac7","credit-card":"\\eac9",dash:"\\eacc",dashboard:"\\eacd",database:"\\eace","debug-continue":"\\eacf","debug-disconnect":"\\ead0","debug-pause":"\\ead1","debug-restart":"\\ead2","debug-start":"\\ead3","debug-step-into":"\\ead4","debug-step-out":"\\ead5","debug-step-over":"\\ead6","debug-stop":"\\ead7",debug:"\\ead8","device-camera-video":"\\ead9","device-camera":"\\eada","device-mobile":"\\eadb","diff-added":"\\eadc","diff-ignored":"\\eadd","diff-modified":"\\eade","diff-removed":"\\eadf","diff-renamed":"\\eae0",diff:"\\eae1","diff-sidebyside":"\\eae1",discard:"\\eae2","editor-layout":"\\eae3","empty-window":"\\eae4",exclude:"\\eae5",extensions:"\\eae6","eye-closed":"\\eae7","file-binary":"\\eae8","file-code":"\\eae9","file-media":"\\eaea","file-pdf":"\\eaeb","file-submodule":"\\eaec","file-symlink-directory":"\\eaed","file-symlink-file":"\\eaee","file-zip":"\\eaef",files:"\\eaf0",filter:"\\eaf1",flame:"\\eaf2","fold-down":"\\eaf3","fold-up":"\\eaf4",fold:"\\eaf5","folder-active":"\\eaf6","folder-opened":"\\eaf7",gear:"\\eaf8",gift:"\\eaf9","gist-secret":"\\eafa",gist:"\\eafb","git-commit":"\\eafc","git-compare":"\\eafd","compare-changes":"\\eafd","git-merge":"\\eafe","github-action":"\\eaff","github-alt":"\\eb00",globe:"\\eb01",grabber:"\\eb02",graph:"\\eb03",gripper:"\\eb04",heart:"\\eb05",home:"\\eb06","horizontal-rule":"\\eb07",hubot:"\\eb08",inbox:"\\eb09","issue-reopened":"\\eb0b",issues:"\\eb0c",italic:"\\eb0d",jersey:"\\eb0e",json:"\\eb0f",bracket:"\\eb0f","kebab-vertical":"\\eb10",key:"\\eb11",law:"\\eb12","lightbulb-autofix":"\\eb13","link-external":"\\eb14",link:"\\eb15","list-ordered":"\\eb16","list-unordered":"\\eb17","live-share":"\\eb18",loading:"\\eb19",location:"\\eb1a","mail-read":"\\eb1b",mail:"\\eb1c",markdown:"\\eb1d",megaphone:"\\eb1e",mention:"\\eb1f",milestone:"\\eb20","git-pull-request-milestone":"\\eb20","mortar-board":"\\eb21",move:"\\eb22","multiple-windows":"\\eb23",mute:"\\eb24","no-newline":"\\eb25",note:"\\eb26",octoface:"\\eb27","open-preview":"\\eb28",package:"\\eb29",paintcan:"\\eb2a",pin:"\\eb2b",play:"\\eb2c",run:"\\eb2c",plug:"\\eb2d","preserve-case":"\\eb2e",preview:"\\eb2f",project:"\\eb30",pulse:"\\eb31",question:"\\eb32",quote:"\\eb33","radio-tower":"\\eb34",reactions:"\\eb35",references:"\\eb36",refresh:"\\eb37",regex:"\\eb38","remote-explorer":"\\eb39",remote:"\\eb3a",remove:"\\eb3b","replace-all":"\\eb3c",replace:"\\eb3d","repo-clone":"\\eb3e","repo-force-push":"\\eb3f","repo-pull":"\\eb40","repo-push":"\\eb41",report:"\\eb42","request-changes":"\\eb43",rocket:"\\eb44","root-folder-opened":"\\eb45","root-folder":"\\eb46",rss:"\\eb47",ruby:"\\eb48","save-all":"\\eb49","save-as":"\\eb4a",save:"\\eb4b","screen-full":"\\eb4c","screen-normal":"\\eb4d","search-stop":"\\eb4e",server:"\\eb50","settings-gear":"\\eb51",settings:"\\eb52",shield:"\\eb53",smiley:"\\eb54","sort-precedence":"\\eb55","split-horizontal":"\\eb56","split-vertical":"\\eb57",squirrel:"\\eb58","star-full":"\\eb59","star-half":"\\eb5a","symbol-class":"\\eb5b","symbol-color":"\\eb5c","symbol-constant":"\\eb5d","symbol-enum-member":"\\eb5e","symbol-field":"\\eb5f","symbol-file":"\\eb60","symbol-interface":"\\eb61","symbol-keyword":"\\eb62","symbol-misc":"\\eb63","symbol-operator":"\\eb64","symbol-property":"\\eb65",wrench:"\\eb65","wrench-subaction":"\\eb65","symbol-snippet":"\\eb66",tasklist:"\\eb67",telescope:"\\eb68","text-size":"\\eb69","three-bars":"\\eb6a",thumbsdown:"\\eb6b",thumbsup:"\\eb6c",tools:"\\eb6d","triangle-down":"\\eb6e","triangle-left":"\\eb6f","triangle-right":"\\eb70","triangle-up":"\\eb71",twitter:"\\eb72",unfold:"\\eb73",unlock:"\\eb74",unmute:"\\eb75",unverified:"\\eb76",verified:"\\eb77",versions:"\\eb78","vm-active":"\\eb79","vm-outline":"\\eb7a","vm-running":"\\eb7b",watch:"\\eb7c",whitespace:"\\eb7d","whole-word":"\\eb7e",window:"\\eb7f","word-wrap":"\\eb80","zoom-in":"\\eb81","zoom-out":"\\eb82","list-filter":"\\eb83","list-flat":"\\eb84","list-selection":"\\eb85",selection:"\\eb85","list-tree":"\\eb86","debug-breakpoint-function-unverified":"\\eb87","debug-breakpoint-function":"\\eb88","debug-breakpoint-function-disabled":"\\eb88","debug-stackframe-active":"\\eb89","circle-small-filled":"\\eb8a","debug-stackframe-dot":"\\eb8a","terminal-decoration-mark":"\\eb8a","debug-stackframe":"\\eb8b","debug-stackframe-focused":"\\eb8b","debug-breakpoint-unsupported":"\\eb8c","symbol-string":"\\eb8d","debug-reverse-continue":"\\eb8e","debug-step-back":"\\eb8f","debug-restart-frame":"\\eb90","debug-alt":"\\eb91","call-incoming":"\\eb92","call-outgoing":"\\eb93",menu:"\\eb94","expand-all":"\\eb95",feedback:"\\eb96","git-pull-request-reviewer":"\\eb96","group-by-ref-type":"\\eb97","ungroup-by-ref-type":"\\eb98",account:"\\eb99","git-pull-request-assignee":"\\eb99","bell-dot":"\\eb9a","debug-console":"\\eb9b",library:"\\eb9c",output:"\\eb9d","run-all":"\\eb9e","sync-ignored":"\\eb9f",pinned:"\\eba0","github-inverted":"\\eba1","server-process":"\\eba2","server-environment":"\\eba3",pass:"\\eba4","issue-closed":"\\eba4","stop-circle":"\\eba5","play-circle":"\\eba6",record:"\\eba7","debug-alt-small":"\\eba8","vm-connect":"\\eba9",cloud:"\\ebaa",merge:"\\ebab",export:"\\ebac","graph-left":"\\ebad",magnet:"\\ebae",notebook:"\\ebaf",redo:"\\ebb0","check-all":"\\ebb1","pinned-dirty":"\\ebb2","pass-filled":"\\ebb3","circle-large-filled":"\\ebb4","circle-large":"\\ebb5","circle-large-outline":"\\ebb5",combine:"\\ebb6",gather:"\\ebb6",table:"\\ebb7","variable-group":"\\ebb8","type-hierarchy":"\\ebb9","type-hierarchy-sub":"\\ebba","type-hierarchy-super":"\\ebbb","git-pull-request-create":"\\ebbc","run-above":"\\ebbd","run-below":"\\ebbe","notebook-template":"\\ebbf","debug-rerun":"\\ebc0","workspace-trusted":"\\ebc1","workspace-untrusted":"\\ebc2","workspace-unknown":"\\ebc3","terminal-cmd":"\\ebc4","terminal-debian":"\\ebc5","terminal-linux":"\\ebc6","terminal-powershell":"\\ebc7","terminal-tmux":"\\ebc8","terminal-ubuntu":"\\ebc9","terminal-bash":"\\ebca","arrow-swap":"\\ebcb",copy:"\\ebcc","person-add":"\\ebcd","filter-filled":"\\ebce",wand:"\\ebcf","debug-line-by-line":"\\ebd0",inspect:"\\ebd1",layers:"\\ebd2","layers-dot":"\\ebd3","layers-active":"\\ebd4",compass:"\\ebd5","compass-dot":"\\ebd6","compass-active":"\\ebd7",azure:"\\ebd8","issue-draft":"\\ebd9","git-pull-request-closed":"\\ebda","git-pull-request-draft":"\\ebdb","debug-all":"\\ebdc","debug-coverage":"\\ebdd","run-errors":"\\ebde","folder-library":"\\ebdf","debug-continue-small":"\\ebe0","beaker-stop":"\\ebe1","graph-line":"\\ebe2","graph-scatter":"\\ebe3","pie-chart":"\\ebe4","bracket-dot":"\\ebe5","bracket-error":"\\ebe6","lock-small":"\\ebe7","azure-devops":"\\ebe8","verified-filled":"\\ebe9",newline:"\\ebea",layout:"\\ebeb","layout-activitybar-left":"\\ebec","layout-activitybar-right":"\\ebed","layout-panel-left":"\\ebee","layout-panel-center":"\\ebef","layout-panel-justify":"\\ebf0","layout-panel-right":"\\ebf1","layout-panel":"\\ebf2","layout-sidebar-left":"\\ebf3","layout-sidebar-right":"\\ebf4","layout-statusbar":"\\ebf5","layout-menubar":"\\ebf6","layout-centered":"\\ebf7",target:"\\ebf8",indent:"\\ebf9","record-small":"\\ebfa","error-small":"\\ebfb","terminal-decoration-error":"\\ebfb","arrow-circle-down":"\\ebfc","arrow-circle-left":"\\ebfd","arrow-circle-right":"\\ebfe","arrow-circle-up":"\\ebff","layout-sidebar-right-off":"\\ec00","layout-panel-off":"\\ec01","layout-sidebar-left-off":"\\ec02",blank:"\\ec03","heart-filled":"\\ec04",map:"\\ec05","map-horizontal":"\\ec05","fold-horizontal":"\\ec05","map-filled":"\\ec06","map-horizontal-filled":"\\ec06","fold-horizontal-filled":"\\ec06","circle-small":"\\ec07","bell-slash":"\\ec08","bell-slash-dot":"\\ec09","comment-unresolved":"\\ec0a","git-pull-request-go-to-changes":"\\ec0b","git-pull-request-new-changes":"\\ec0c","search-fuzzy":"\\ec0d","comment-draft":"\\ec0e",send:"\\ec0f",sparkle:"\\ec10",insert:"\\ec11",mic:"\\ec12","thumbsdown-filled":"\\ec13","thumbsup-filled":"\\ec14",coffee:"\\ec15",snake:"\\ec16",game:"\\ec17",vr:"\\ec18",chip:"\\ec19",piano:"\\ec1a",music:"\\ec1b","mic-filled":"\\ec1c","repo-fetch":"\\ec1d",copilot:"\\ec1e","lightbulb-sparkle":"\\ec1f",robot:"\\ec20","sparkle-filled":"\\ec21","diff-single":"\\ec22","diff-multiple":"\\ec23","surround-with":"\\ec24",share:"\\ec25","git-stash":"\\ec26","git-stash-apply":"\\ec27","git-stash-pop":"\\ec28",vscode:"\\ec29","vscode-insiders":"\\ec2a","code-oss":"\\ec2b","run-coverage":"\\ec2c","run-all-coverage":"\\ec2d",coverage:"\\ec2e","github-project":"\\ec2f","map-vertical":"\\ec30","fold-vertical":"\\ec30","map-vertical-filled":"\\ec31","fold-vertical-filled":"\\ec31","go-to-search":"\\ec32",percentage:"\\ec33","sort-percentage":"\\ec33",attach:"\\ec34","go-to-editing-session":"\\ec35","edit-session":"\\ec36","code-review":"\\ec37","copilot-warning":"\\ec38",python:"\\ec39","copilot-large":"\\ec3a","copilot-warning-large":"\\ec3b","keyboard-tab":"\\ec3c","copilot-blocked":"\\ec3d","copilot-not-connected":"\\ec3e",flag:"\\ec3f","lightbulb-empty":"\\ec40","symbol-method-arrow":"\\ec41","copilot-unavailable":"\\ec42","repo-pinned":"\\ec43","keyboard-tab-above":"\\ec44","keyboard-tab-below":"\\ec45","git-pull-request-done":"\\ec46",mcp:"\\ec47","extensions-large":"\\ec48","layout-panel-dock":"\\ec49","layout-sidebar-left-dock":"\\ec4a","layout-sidebar-right-dock":"\\ec4b","copilot-in-progress":"\\ec4c","copilot-error":"\\ec4d","copilot-success":"\\ec4e","chat-sparkle":"\\ec4f","search-sparkle":"\\ec50","edit-sparkle":"\\ec51","copilot-snooze":"\\ec52","send-to-remote-agent":"\\ec53","comment-discussion-sparkle":"\\ec54","chat-sparkle-warning":"\\ec55","chat-sparkle-error":"\\ec56",collection:"\\ec57","new-collection":"\\ec58",thinking:"\\ec59",build:"\\ec5a","comment-discussion-quote":"\\ec5b",cursor:"\\ec5c",eraser:"\\ec5d","file-text":"\\ec5e",quotes:"\\ec60",rename:"\\ec61","run-with-deps":"\\ec62","debug-connected":"\\ec63",strikethrough:"\\ec64","open-in-product":"\\ec65","index-zero":"\\ec66",agent:"\\ec67","edit-code":"\\ec68","repo-selected":"\\ec69",skip:"\\ec6a","merge-into":"\\ec6b","git-branch-changes":"\\ec6c","git-branch-staged-changes":"\\ec6d","git-branch-conflicts":"\\ec6e","git-branch":"\\ec6f","git-branch-create":"\\ec6f","git-branch-delete":"\\ec6f","search-large":"\\ec70","terminal-git-bash":"\\ec71","window-active":"\\ec72",forward:"\\ec73",download:"\\ec74",clockface:"\\ec75",unarchive:"\\ec76","session-in-progress":"\\ec77","collection-small":"\\ec78","vm-small":"\\ec79","cloud-small":"\\ec7a"}),oe=Object.freeze({"commit-horizontal":"\\f101",graph:"\\f102","next-commit":"\\f103","prev-commit-menu":"\\f104","prev-commit":"\\f105","compare-ref-working":"\\f106","branches-view":"\\f107","commit-view":"\\f108","commits-view":"\\f109","compare-view":"\\f10a","contributors-view":"\\f10b","history-view":"\\f10c",history:"\\f10c","remotes-view":"\\f10d","repositories-view":"\\f10e","search-view":"\\f10f","stashes-view":"\\f110",stashes:"\\f110","tags-view":"\\f111","worktrees-view":"\\f112",gitlens:"\\f113","stash-pop":"\\f114","stash-save":"\\f115",unplug:"\\f116","open-revision":"\\f117",switch:"\\f118",expand:"\\f119","list-auto":"\\f11a","pinned-filled":"\\f11c",clock:"\\f11d","provider-azdo":"\\f11e","provider-bitbucket":"\\f11f","provider-gerrit":"\\f120","provider-gitea":"\\f121","provider-github":"\\f122","provider-gitlab":"\\f123","gitlens-inspect":"\\f124","workspaces-view":"\\f125","confirm-checked":"\\f126","confirm-unchecked":"\\f127","cloud-patch":"\\f128","cloud-patch-share":"\\f129",inspect:"\\f12a","repository-filled":"\\f12b","gitlens-filled":"\\f12c","code-suggestion":"\\f12d","provider-jira":"\\f133","play-button":"\\f134","rocket-filled":"\\f135","branches-view-filled":"\\f136","commits-view-filled":"\\f137","contributors-view-filled":"\\f138","remotes-view-filled":"\\f139","repositories-view-filled":"\\f13a","search-view-filled":"\\f13b","stashes-view-filled":"\\f13c","tags-view-filled":"\\f13d","worktrees-view-filled":"\\f13e","launchpad-view":"\\f13f","launchpad-view-filled":"\\f140","merge-target":"\\f141","history-view-filled":"\\f142",repository:"\\f143",worktree:"\\f144","worktree-filled":"\\f145","repository-cloud":"\\f146","provider-linear":"\\f147"});var oi=Object.defineProperty,or=Object.getOwnPropertyDescriptor,os=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?or(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&oi(t,r,a),a};function oo(e,t=""){return tB(Object.entries(e).map(([e,r])=>(function(e,t,r=""){return`:host([icon='${r}${e}'])::before { content: '${t}'; }`})(e,r,t)).join(""))}let on=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=void 0}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};on.styles=tU`
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

		${oo(s4)}
		${oo(oe,"gl-")}

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
	`,os([iP({reflect:!0})],on.prototype,"icon",2),os([iP({reflect:!0})],on.prototype,"modifier",2),os([iP({type:Number})],on.prototype,"size",2),os([iP({reflect:!0})],on.prototype,"flip",2),os([iP({reflect:!0})],on.prototype,"rotate",2),on=os([iA("code-icon")],on);var oa=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,oc=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?ol(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&oa(t,r,a),a};let oh=class extends lit_element_i{constructor(){super(...arguments),this.icon="",this.disabled=!1,this.isAltKeyPressed=!1,this.handleLinkKeydown=e=>{this.effectiveHref||" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),e.target.click())}}get effectiveIcon(){return this.isAltKeyPressed&&this.altIcon?this.altIcon:this.icon}get effectiveTooltip(){if(this.label||this.altLabel)return this.altLabel?this.isAltKeyPressed?this.altLabel:`${this.label}
[${rp?"⌥":"Alt"}] ${this.altLabel}`:this.label}get effectiveLabel(){if(this.label||this.altLabel)return this.altLabel&&this.isAltKeyPressed?this.altLabel:this.label}get effectiveHref(){return this.isAltKeyPressed&&this.altHref?this.altHref:this.href}connectedCallback(){super.connectedCallback?.(),window.addEventListener("keydown",this),window.addEventListener("keyup",this)}disconnectedCallback(){super.disconnectedCallback?.(),window.removeEventListener("keydown",this),window.removeEventListener("keyup",this)}handleEvent(e){let t="Alt"===e.key||e.altKey;"keydown"===e.type?this.isAltKeyPressed=t:"keyup"===e.type&&t&&(this.isAltKeyPressed=!1)}render(){return im`
			<gl-tooltip hoist content="${this.effectiveTooltip??iv}">
				<a
					role="${!this.effectiveHref?"button":iv}"
					type="${!this.effectiveHref?"button":iv}"
					aria-label="${this.effectiveLabel??iv}"
					?disabled=${this.disabled}
					href=${this.effectiveHref??iv}
					tabindex="0"
					@keydown=${this.handleLinkKeydown}
				>
					<code-icon part="icon" icon="${this.effectiveIcon}"></code-icon>
				</a>
			</gl-tooltip>
		`}focus(e){this.defaultFocusEl.focus(e)}};oh.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},oh.styles=tU`
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
			${i7}
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
	`,oc([iP()],oh.prototype,"href",2),oc([iP({attribute:"alt-href"})],oh.prototype,"altHref",2),oc([iP()],oh.prototype,"label",2),oc([iP({attribute:"alt-label"})],oh.prototype,"altLabel",2),oc([iP()],oh.prototype,"icon",2),oc([iP({attribute:"alt-icon"})],oh.prototype,"altIcon",2),oc([iP({type:Boolean})],oh.prototype,"disabled",2),oc([iT("a")],oh.prototype,"defaultFocusEl",2),oc([iI()],oh.prototype,"isAltKeyPressed",2),oh=oc([iA("action-item")],oh);let od={".":"Unchanged","!":"Ignored","?":"Untracked",A:"Added",D:"Deleted",M:"Modified",R:"Renamed",C:"Copied",AA:"Conflict",AU:"Conflict",UA:"Conflict",DD:"Conflict",DU:"Conflict",UD:"Conflict",UU:"Conflict",T:"Modified",U:"Updated but Unmerged"};var op=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,of=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?ou(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&op(t,r,a),a};let og=class extends lit_element_i{get statusName(){return this.status?od[this.status]??"Unknown":""}updated(e){super.updated(e),e.has("status")&&(this.statusName?this.setAttribute("title",this.statusName):this.removeAttribute("title"))}renderIgnored(){return im`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#969696"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM10 4l-6.01 6.01 1.06 1.061 6.01-6.01L10 4z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUntracked(){return im`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3.942-3.942l7.5-7.5.884.884-.664.664c.95.655 1.65 1.524 2.222 2.394-1.15 1.75-2.824 3.5-6 3.5-.696 0-1.32-.084-1.882-.234l-1.176 1.176-.884-.884zm5.188-3.42l1.629-1.629c.634.393 1.147.913 1.594 1.491C10.99 8.767 9.692 9.75 7.5 9.75c-.287 0-.56-.017-.817-.05l.455-.454a1.5 1.5 0 0 0 1.608-1.608zM7.362 6.254L5.754 7.862a1.5 1.5 0 0 1 1.608-1.608zm.955-.955A6.595 6.595 0 0 0 7.5 5.25c-2.192 0-3.49.982-4.469 2.25.447.578.96 1.098 1.594 1.491l-.903.903C2.772 9.239 2.072 8.369 1.5 7.5 2.65 5.75 4.324 4 7.5 4c.696 0 1.32.084 1.882.234L8.317 5.299z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderAdded(){return im`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#388A34"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm.75-6.75h3v-1.5h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderDeleted(){return im`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#9E121D"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-6.75v-1.5h-7.5v1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderModified(){return im`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#1B80B2"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm3.75-9.5V7h-3v2.5h-1.5V7h-3V5.5h3v-3h1.5v3h3zm0 5V12h-7.5v-1.5h7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderRenamed(){return im`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#C63"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.25 4.5v1.25h1.25l1 1v2.5l-1 1H9.25v1.25H10v1.25H7V11.5h.75v-1.25H4l-1-1v-2.5l1-1h3.75V4.5H7V3.25h3V4.5h-.75zm-5 2.5h3.5v2h-3.5V7zm5 0v2h1V7h-1z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderCopied(){return im`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#692C77"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM6.964 3.75L5.893 4.813v.53h1.071v-.53h3.215v4.25h-.536v1.062h.536l1.071-1.063v-4.25L10.179 3.75H6.964zM3.75 6.938l1.071-1.063h3.215l1.071 1.063v4.25L8.036 12.25H4.82L3.75 11.187v-4.25zm1.071 0v4.25h3.215v-4.25H4.82z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderConflict(){return im`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#7F4E7E"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-4.03-4.53L6.44 7.5 3.47 4.53l1.06-1.06L7.5 6.44l2.97-2.97 1.06 1.06L8.56 7.5l2.97 2.97-1.06 1.06L7.5 8.56l-2.97 2.97-1.06-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		`}renderUnknown(){return im`
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
				<path
					fill="#6C6C6C"
					fill-rule="evenodd"
					d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zM9.19 2.822c-.439-.215-.97-.322-1.596-.322-1.25 0-2.282.478-3.094 1.435l1.05.798c.275-.331.579-.574.91-.728.331-.154.66-.231.987-.231.415 0 .76.093 1.036.28.275.182.413.448.413.798 0 .275-.082.509-.245.7-.159.187-.36.364-.602.532a9.506 9.506 0 0 0-.728.56 2.66 2.66 0 0 0-.602.763c-.159.299-.238.679-.238 1.141v.483h1.498v-.413c0-.364.086-.663.259-.896a2.76 2.76 0 0 1 .637-.616c.252-.177.504-.362.756-.553.257-.196.471-.436.644-.721.173-.285.259-.651.259-1.099 0-.387-.114-.749-.343-1.085-.229-.34-.562-.616-1.001-.826zm-1.169 7.917a1.024 1.024 0 0 0-.763-.315c-.294 0-.544.105-.749.315-.2.205-.301.453-.301.742 0 .294.1.546.301.756.205.205.455.308.749.308.303 0 .558-.103.763-.308.205-.21.308-.462.308-.756 0-.29-.103-.537-.308-.742z"
					clip-rule="evenodd"
				/>
			</svg>
		`}render(){switch(this.status){case"!":return this.renderIgnored();case"?":return this.renderUntracked();case"A":return this.renderAdded();case"D":return this.renderDeleted();case"M":case"T":case"U":return this.renderModified();case"R":return this.renderRenamed();case"C":return this.renderCopied();case"AA":case"AU":case"UA":case"DD":case"DU":case"UD":case"UU":return this.renderConflict()}return this.renderUnknown()}};og.styles=[tU`
			:host-context(.vscode-high-contrast:not(.vscode-high-contrast-light)),
			:host-context(.vscode-dark) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host-context(.vscode-high-contrast-light),
			:host-context(.vscode-light) {
				--gl-git-status-ignored: #969696;
				--gl-git-status-untracked: #6c6c6c;
				--gl-git-status-added: #388a34;
				--gl-git-status-deleted: #9e121d;
				--gl-git-status-modified: #1b80b2;
				--gl-git-status-renamed: #c63;
				--gl-git-status-copied: #692c77;
				--gl-git-status-conflict: #7f4e7e;
				--gl-git-status-unknown: #6c6c6c;
			}

			:host {
				display: inline-block;
				width: 16px;
				aspect-ratio: 1 / 1;
			}

			svg {
				display: inline-block;
				vertical-align: text-bottom;
			}
		`],of([iP()],og.prototype,"status",2),of([iI()],og.prototype,"statusName",1),og=of([iA("gl-git-status")],og),tU`
		:host {
			display: block;
			height: 100%;
		}
	`;let om=[i8,tU`
		:host {
			--tree-connector-spacing: 0.6rem;
			--tree-connector-size: var(--gitlens-tree-indent, 1.6rem);
			box-sizing: border-box;
			padding-left: var(--gitlens-gutter-width);
			padding-right: 0.5rem;
			padding-top: 0.1rem;
			padding-bottom: 0.1rem;
			line-height: 2.2rem;
			height: 2.2rem;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			font-size: var(--vscode-font-size);
			color: var(--gitlens-tree-foreground, var(--vscode-foreground));

			cursor: pointer;
			/* Reduced containment to allow tooltips to escape */
			contain: layout;
		}

		:host([aria-hidden='true']) {
			display: none;
		}

		:host(:hover) {
			color: var(--vscode-list-hoverForeground);
			background-color: var(--vscode-list-hoverBackground);
		}

		:host([aria-selected='true']) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* Focused state - when the item is the active descendant in the tree */
		:host([focused]) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true'][focused]) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		/* Inactive focus state - when the item would be focused but container doesn't have focus */
		/* In VS Code, inactive focus shows the selection background without the outline */
		:host([focused-inactive]) {
			color: var(--vscode-list-inactiveSelectionForeground);
			background-color: var(--vscode-list-inactiveSelectionBackground);
		}

		/* TODO: these should be :has(.input:focus) instead of :focus-within */
		:host(:focus-within) {
			outline: 1px solid var(--vscode-list-focusOutline);
			outline-offset: -0.1rem;
		}

		:host([aria-selected='true']:focus-within) {
			color: var(--vscode-list-activeSelectionForeground);
			background-color: var(--vscode-list-activeSelectionBackground);
		}

		.item {
			appearance: none;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 0.6rem;
			width: 100%;
			padding: 0;
			font-family: inherit;
			font-size: inherit;
			text-decoration: none;
			color: inherit;
			background: none;
			border: none;
			outline: none;
			cursor: pointer;
			min-width: 0;
		}
		.icon {
			display: inline-block;
			width: 1.6rem;
			text-align: center;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		slot[name='icon']::slotted(*) {
			width: 1.6rem;
			aspect-ratio: 1;
			vertical-align: text-bottom;
		}

		.node {
			display: inline-block;
			width: var(--tree-connector-size);
			text-align: center;
			flex: none;
			height: 2.2rem;
			line-height: 2.2rem;
			pointer-events: none;
			vertical-align: text-bottom;
		}

		.node:last-of-type {
			margin-right: 0.3rem;
		}

		.node--connector {
			position: relative;
		}

		.node--connector::before {
			content: '';
			position: absolute;
			height: 2.2rem;
			border-left: 1px solid transparent;
			top: 50%;
			transform: translate(-1px, -50%);
			left: 0.8rem;
			width: 0.1rem;
			transition: border-color 0.1s linear;
			opacity: 0.4;
		}

		@media (prefers-reduced-motion: reduce) {
			.node--connector::before {
				transition: none;
			}
		}

		:host-context([guides='always']) .node--connector::before,
		:host-context([guides='onHover']:focus-within) .node--connector::before,
		:host-context([guides='onHover'][focused]) .node--connector::before,
		:host-context([guides='onHover'][focused-inactive]) .node--connector::before,
		:host-context([guides='onHover']:hover) .node--connector::before {
			border-color: var(--vscode-tree-indentGuidesStroke);
		}

		.branch {
			display: inline-block;
			margin-right: 0.6rem;
			height: 2.2rem;
			line-height: 2.2rem;
			vertical-align: text-bottom;
		}

		.text {
			line-height: 1.8rem;
			overflow: hidden;
			white-space: nowrap;
			text-align: left;
			text-overflow: ellipsis;
			flex: 1;
		}

		.main {
			display: inline;
		}

		.description {
			display: inline;
			opacity: 0.7;
			font-size: 0.9em;
			margin-left: 0.3rem;
			pointer-events: none;
		}

		.actions {
			flex: none;
			user-select: none;
			color: var(--vscode-icon-foreground);
		}

		:host(:focus-within) .actions,
		:host([focused]) .actions {
			color: var(--vscode-list-activeSelectionIconForeground);
		}

		:host([focused-inactive]) .actions {
			color: var(--vscode-list-inactiveSelectionIconForeground, var(--vscode-icon-foreground));
		}

		:host(:not(:hover):not(:focus-within):not([focused]):not([focused-inactive])) .actions {
			display: none;
		}

		.checkbox {
			position: relative;
			display: inline-flex;
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			text-align: center;
			color: var(--vscode-checkbox-foreground);
			background: var(--vscode-checkbox-background);
			border: 1px solid var(--vscode-checkbox-border);
			border-radius: 0.3rem;
			margin-right: 0.6rem;
		}

		.checkbox:has(:checked) {
			color: var(--vscode-inputOption-activeForeground);
			border-color: var(--vscode-inputOption-activeBorder);
			background-color: var(--vscode-inputOption-activeBackground);
		}

		.checkbox:has(:disabled) {
			opacity: 0.4;
		}

		.checkbox__input {
			position: absolute;
			top: 0;
			left: 0;
			appearance: none;
			width: 1.4rem;
			aspect-ratio: 1 / 1;
			margin: 0;
			cursor: pointer;
			border-radius: 0.3rem;
		}

		.checkbox__input:disabled {
			cursor: default;
		}

		.checkbox__check {
			width: 1.6rem;
			aspect-ratio: 1 / 1;
			opacity: 0;
			transition: opacity 0.1s linear;
			color: var(--vscode-checkbox-foreground);
			pointer-events: none;
		}

		.checkbox__input:checked + .checkbox__check {
			opacity: 1;
		}

		slot[name='decorations'] {
			display: inline-block;
			margin-left: 0.4rem;
		}

		/* High Contrast Mode Support */
		@media (forced-colors: active) {
			:host {
				forced-color-adjust: none;
			}

			:host([focused]) {
				outline: 2px solid CanvasText;
				outline-offset: -2px;
			}

			:host([aria-selected='true']) {
				background-color: Highlight;
				color: HighlightText;
			}

			:host([aria-selected='true'][focused]) {
				outline: 2px solid CanvasText;
				outline-offset: -2px;
			}

			.checkbox {
				border: 1px solid CanvasText;
			}

			.checkbox:has(:checked) {
				background-color: Highlight;
				border-color: CanvasText;
			}

			.node--connector::before {
				border-color: CanvasText;
				opacity: 1;
			}
		}
	`];var ob=Object.defineProperty,ov=Object.getOwnPropertyDescriptor,oy=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?ov(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&ob(t,r,a),a};let o_=class extends lit_element_i{firstUpdated(){this.role="navigation"}disconnectedCallback(){this._slotSubscriptionsDisposer?.(),super.disconnectedCallback?.()}render(){return im`<slot @slotchange=${this.handleSlotChange}></slot>`}handleSlotChange(e){if(this._slotSubscriptionsDisposer?.(),this.actionNodes.length<1)return;let t=this.handleKeydown.bind(this),r=`${this.actionNodes.length}`,o=this.actionNodes.map((e,o)=>(e.setAttribute("aria-posinset",`${o+1}`),e.setAttribute("aria-setsize",r),e.setAttribute("tabindex",0===o?"0":"-1"),this.actionNodes.length>=2&&e.addEventListener("keydown",t,!1),{dispose:()=>{e?.removeEventListener("keydown",t,!1)}}));this._slotSubscriptionsDisposer=()=>{o?.forEach(({dispose:e})=>e())}}handleKeydown(e){if(!e.target||null==this.actionNodes)return;let t=e.target,r=parseInt(t.getAttribute("aria-posinset")??"0",10);if("ArrowLeft"!==e.key&&"ArrowRight"!==e.key||this.actionNodes.length<2)return;let o=null;if("ArrowLeft"===e.key){let e=1===r?this.actionNodes.length-1:r-2;o=this.actionNodes[e]}else if("ArrowRight"===e.key){let e=r===this.actionNodes.length?0:r;o=this.actionNodes[e]}null!=o&&o!==t&&(e.preventDefault(),e.stopPropagation(),t.setAttribute("tabindex","-1"),o.setAttribute("tabindex","0"),o.focus())}};o_.styles=tU`
		:host {
			display: flex;
			align-items: center;
			user-select: none;
		}
	`,oy([(g={flatten:!0},(e,t)=>{let{slot:r,selector:o}=g??{},n="slot"+(r?`[name=${r}]`:":not([name])");return iR(e,t,{get(){let e=this.renderRoot?.querySelector(n),t=e?.assignedElements(g)??[];return void 0===o?t:t.filter(e=>e.matches(o))}})})],o_.prototype,"actionNodes",2),o_=oy([iA("action-nav")],o_);var ow=Object.defineProperty,ok=Object.getOwnPropertyDescriptor,ox=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?ok(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&ow(t,r,a),a};let o$=class extends GlElement{constructor(){super(...arguments),this.branch=!1,this.expanded=!0,this.path="",this.level=0,this.size=1,this.position=1,this.checkable=!1,this.checked=!1,this.disableCheck=!1,this.showIcon=!0,this.matched=!1,this.tabIndex=-1,this.selected=!1,this.focused=!1,this.focusedInactive=!1,this.onComponentClick=e=>{this.selectCore({dblClick:!1,altKey:e.altKey})}}get isHidden(){return!1===this.parentExpanded||!this.branch&&!this.expanded}connectedCallback(){super.connectedCallback?.(),this.addEventListener("click",this.onComponentClick)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("click",this.onComponentClick)}updateAttrs(e,t=!1){(e.has("expanded")||e.has("branch")||t)&&(this.branch?this.setAttribute("aria-expanded",this.expanded.toString()):this.removeAttribute("aria-expanded")),(e.has("parentExpanded")||t)&&this.setAttribute("aria-hidden",this.isHidden.toString()),(e.has("selected")||t)&&this.setAttribute("aria-selected",this.selected.toString()),(e.has("size")||t)&&this.setAttribute("aria-setsize",this.size.toString()),(e.has("position")||t)&&this.setAttribute("aria-posinset",this.position.toString()),(e.has("level")||t)&&this.setAttribute("aria-level",this.level.toString())}firstUpdated(){this.role="treeitem"}updated(e){this.updateAttrs(e)}renderBranching(){let e=this.level-1;if(e<1&&!this.branch)return iv;let t=[];if(e>0)for(let r=0;r<e;r++)t.push(im`<span class="node node--connector"><code-icon name="blank"></code-icon></span>`);return this.branch&&t.push(im`<code-icon class="branch" icon="${this.expanded?"chevron-down":"chevron-right"}"></code-icon>`),t}renderCheckbox(){return this.checkable?im`<span class="checkbox"
			><input
				class="checkbox__input"
				id="checkbox"
				type="checkbox"
				.checked=${this.checked}
				?disabled=${this.disableCheck}
				@change=${this.onCheckboxChange}
				@click=${this.onCheckboxClick} /><code-icon icon="check" size="14" class="checkbox__check"></code-icon
		></span>`:iv}renderActions(){return im`<action-nav class="actions"><slot name="actions"></slot></action-nav>`}renderDecorations(){return im`<slot name="decorations" class="decorations"></slot>`}render(){return im`
			${this.renderBranching()}${this.renderCheckbox()}
			<button
				id="button"
				class="item"
				type="button"
				tabindex=${this.tabIndex}
				@click=${this.onButtonClick}
				@dblclick=${this.onButtonDblClick}
				@contextmenu=${this.onButtonContextMenu}
			>
				${iz(this.showIcon,()=>im`<slot name="icon" class="icon"></slot>`)}
				<span class="text">
					<slot class="main"></slot>
					<slot name="description" class="description"></slot>
				</span>
			</button>
			${this.renderActions()}${this.renderDecorations()}
		`}selectCore(e,t=!1){this.emit("gl-tree-item-select"),this.selected=!0,t||window.requestAnimationFrame(()=>{this.emit("gl-tree-item-selected",{node:this,dblClick:e?.dblClick??!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1})})}select(){this.selectCore(void 0,!0)}deselect(){this.selected=!1}focus(){this.buttonEl.focus()}onButtonClick(e){e.stopPropagation(),this.selectCore({dblClick:!1,altKey:e.altKey})}onButtonDblClick(e){e.stopPropagation(),this.selectCore({dblClick:!0,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}onButtonContextMenu(e){e.preventDefault(),e.stopPropagation();let t=new MouseEvent("contextmenu",{bubbles:!0,composed:!0,cancelable:!0,clientX:e.clientX,clientY:e.clientY,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey});this.dispatchEvent(t)}onCheckboxClick(e){e.stopPropagation()}onCheckboxChange(e){e.preventDefault(),e.stopPropagation(),this.checked=e.target.checked,this.emit("gl-tree-item-checked",{node:this,checked:this.checked})}};o$.styles=om,ox([iP({type:Boolean})],o$.prototype,"branch",2),ox([iP({type:Boolean})],o$.prototype,"expanded",2),ox([iP({type:String})],o$.prototype,"path",2),ox([iP({type:String,attribute:"parent-path"})],o$.prototype,"parentPath",2),ox([iP({type:Boolean,attribute:"parent-expanded"})],o$.prototype,"parentExpanded",2),ox([iP({type:Number})],o$.prototype,"level",2),ox([iP({type:Number})],o$.prototype,"size",2),ox([iP({type:Number})],o$.prototype,"position",2),ox([iP({type:Boolean})],o$.prototype,"checkable",2),ox([iP({type:Boolean})],o$.prototype,"checked",2),ox([iP({type:Boolean})],o$.prototype,"disableCheck",2),ox([iP({type:Boolean})],o$.prototype,"showIcon",2),ox([iP({type:Boolean,reflect:!0})],o$.prototype,"matched",2),ox([iP({type:Number})],o$.prototype,"tabIndex",2),ox([iP({type:String,attribute:"vscode-context"})],o$.prototype,"vscodeContext",2),ox([iI()],o$.prototype,"selected",2),ox([iP({type:Boolean,reflect:!0})],o$.prototype,"focused",2),ox([iP({type:Boolean,reflect:!0,attribute:"focused-inactive"})],o$.prototype,"focusedInactive",2),ox([iT("#button")],o$.prototype,"buttonEl",2),o$=ox([iA("gl-tree-item")],o$);var oC=Object.defineProperty,oS=Object.getOwnPropertyDescriptor,oA=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?oS(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&oC(t,r,a),a};let oE=class extends GlElement{constructor(){super(...arguments),this.treeItems=void 0,this._virtualizerKey=0,this.filtered=!1,this.ariaLabel="Tree",this._focusedItemIndex=-1,this.virtualizerRef=i2(),this.scrollableRef=i2(),this._containerHasFocus=!1,this._actionButtonHasFocus=!1,this._scrolling=!1,this._typeAheadBuffer="",this._typeAheadTimeout=800,this._nodeMap=new Map,this._pathToIndexMap=new Map,this.handleContainerFocus=()=>{this._containerHasFocus=!0,this._focusedItemPath||(this._lastSelectedPath?(this._focusedItemPath=this._lastSelectedPath,this._focusedItemIndex=this.getItemIndex(this._lastSelectedPath)):this.treeItems?.length&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0),this.requestUpdate())},this.handleContainerBlur=()=>{this._containerHasFocus=!1},this.handleFocusIn=e=>{let t=e.target;("ACTION-ITEM"===t.tagName?t:t.closest("action-item"))&&(this._actionButtonHasFocus=!0)},this.handleFocusOut=e=>{let t=e.target,r=e.relatedTarget,o="ACTION-ITEM"===t.tagName?t:t.closest("action-item"),n=r?.tagName==="ACTION-ITEM"?r:r?.closest("action-item");o&&!n&&(this._actionButtonHasFocus=!1)},this.handleContextMenu=e=>{let t=e.composedPath().find(e=>"GL-TREE-ITEM"===e.tagName);if(!t)return;let r=t.vscodeContext;if(!r)return;e.preventDefault(),e.stopPropagation(),this.dataset.vscodeContext=r;let o=new MouseEvent("contextmenu",{bubbles:!0,composed:!0,cancelable:!0,clientX:e.clientX,clientY:e.clientY,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey});this.dispatchEvent(o),setTimeout(()=>{delete this.dataset.vscodeContext},100)},this.handleKeydown=e=>{if("Tab"===e.key&&e.composedPath().find(e=>"ACTION-ITEM"===e.tagName))if(e.shiftKey){e.preventDefault();let t=this.scrollableRef.value;t&&t.focus()}else{e.preventDefault();let t=document.activeElement;setTimeout(()=>{t&&"function"==typeof t.blur&&t.blur()},0)}},this.handleContainerKeydown=e=>{if(!this.treeItems?.length||this._actionButtonHasFocus)return;if("Tab"===e.key&&!e.shiftKey){if(this._focusedItemPath){let t=this.virtualizerRef.value;if(t){let r=Array.from(t.querySelectorAll("gl-tree-item")).find(e=>e.id===`tree-item-${this._focusedItemPath}`);if(r){let t=r.querySelector("action-item");t&&(e.preventDefault(),e.stopPropagation(),t.focus())}}}return}let t=this.getCurrentFocusedIndex(),r=t,o=!1;switch(e.key){case"Enter":case" ":e.preventDefault(),e.stopPropagation(),this.handleItemActivation(this.treeItems[t]);return;case"ArrowDown":r=Math.min(t+1,this.treeItems.length-1),o=!0;break;case"ArrowUp":r=Math.max(t-1,0),o=!0;break;case"Home":r=0,o=!0;break;case"End":r=this.treeItems.length-1,o=!0;break;case"ArrowLeft":case"ArrowRight":if(this.handleBranchToggle(e,this.treeItems[t]))return;if("ArrowRight"===e.key)r=Math.min(t+1,this.treeItems.length-1);else{let e=this.treeItems[t];if(e.parentPath){let o=this.getItemIndex(e.parentPath);r=-1!==o?o:Math.max(t-1,0)}else r=Math.max(t-1,0)}o=!0;break;default:if(this.isPrintableCharacter(e.key)){e.preventDefault(),e.stopPropagation(),this.handleTypeAhead(e.key);return}}o&&(e.preventDefault(),e.stopPropagation(),this.focusItemAtIndex(r))}}connectedCallback(){super.connectedCallback?.(),this.addEventListener("keydown",this.handleKeydown,{capture:!0}),this.addEventListener("focusin",this.handleFocusIn,{capture:!0}),this.addEventListener("focusout",this.handleFocusOut,{capture:!0}),this.addEventListener("contextmenu",this.handleContextMenu)}disconnectedCallback(){super.disconnectedCallback?.(),this.removeEventListener("keydown",this.handleKeydown,{capture:!0}),this.removeEventListener("focusin",this.handleFocusIn,{capture:!0}),this.removeEventListener("focusout",this.handleFocusOut,{capture:!0}),this.removeEventListener("contextmenu",this.handleContextMenu),this._typeAheadTimer&&(clearTimeout(this._typeAheadTimer),this._typeAheadTimer=void 0),this._typeAheadBuffer=""}set model(e){let t;if(this._model!==e){if(this._model=e,this._nodeMap.clear(),this._virtualizerKey++,null!=this._model){let e=this._model.length;t=this._model.reduce((t,r,o)=>(t.push(...oP(r,e,o+1,void 0,this._nodeMap)),t),[])}this.treeItems=t,this.buildPathToIndexMap(),this.treeItems?.length&&!this._focusedItemPath&&(this._focusedItemPath=this.treeItems[0].path,this._focusedItemIndex=0)}}get model(){return this._model}renderIcon(e){return null==e?iv:"string"==typeof e?im`<code-icon slot="icon" icon=${e}></code-icon>`:"status"!==e.type?iv:im`<gl-git-status slot="icon" .status=${e.name}></gl-git-status>`}renderActions(e){let t=e.actions;return null==t||0===t.length?iv:t.map(t=>im`<action-item
				slot="actions"
				.icon=${t.icon}
				.label=${t.label}
				@click=${r=>this.onTreeItemActionClicked(r,e,t,!1)}
				@dblclick=${r=>this.onTreeItemActionClicked(r,e,t,!0)}
			></action-item>`)}renderDecorations(e){let t=e.decorations;return null==t||0===t.length?iv:t.map(e=>"icon"===e.type?im`<code-icon
					slot="decorations"
					title="${e.label}"
					aria-label="${e.label}"
					.icon=${e.icon}
				></code-icon>`:"text"===e.type?im`<span slot="decorations">${e.label}</span>`:void 0)}renderTreeItem(e){let t=this._lastSelectedPath===e.path,r=this._focusedItemPath===e.path,o=`tree-item-${e.path}`;return im`<gl-tree-item
			id=${o}
			.branch=${e.branch}
			.expanded=${e.expanded}
			.path=${e.path}
			.parentPath=${e.parentPath}
			.parentExpanded=${e.parentExpanded}
			.level=${e.level}
			.size=${e.size}
			.position=${e.position}
			.checkable=${e.checkable}
			.checked=${e.checked??!1}
			.disableCheck=${e.disableCheck??!1}
			.showIcon=${null!=e.icon}
			.matched=${e.matched??!1}
			.selected=${t}
			.focused=${r&&this._containerHasFocus&&!this._actionButtonHasFocus}
			.focusedInactive=${r&&(!this._containerHasFocus||this._actionButtonHasFocus)}
			.tabIndex=${-1}
			.vscodeContext=${e.contextData}
			@gl-tree-item-select=${()=>this.onBeforeTreeItemSelected(e)}
			@gl-tree-item-selected=${t=>this.onTreeItemSelected(t,e)}
			@gl-tree-item-checked=${t=>this.onTreeItemChecked(t,e)}
		>
			${this.renderIcon(e.icon)}
			${e.label}${iz(null!=e.description,()=>im`<span slot="description">${e.description}</span>`)}
			${this.renderActions(e)} ${this.renderDecorations(e)}
		</gl-tree-item>`}render(){if(!this.treeItems?.length)return iv;let e=this._focusedItemPath?`tree-item-${this._focusedItemPath}`:void 0;return im`
			<div
				${i3(this.scrollableRef)}
				class="scrollable"
				tabindex="0"
				role="tree"
				aria-label=${this.ariaLabel}
				aria-multiselectable="false"
				aria-activedescendant=${e||iv}
				@keydown=${this.handleContainerKeydown}
				@focus=${this.handleContainerFocus}
				@blur=${this.handleContainerBlur}
			>
				${iZ(this._virtualizerKey,im`<lit-virtualizer
						class="scrollable"
						${i3(this.virtualizerRef)}
						.items=${this.treeItems}
						.keyFunction=${e=>e.path}
						.layout=${(0,iG.flow)({direction:"vertical"})}
						.renderItem=${e=>this.renderTreeItem(e)}
						scroller
					></lit-virtualizer>`)}
			</div>
		`}findTreeNode(e){return this._nodeMap.get(e)}getItemIndex(e){return this._pathToIndexMap.get(e)??-1}rebuildFlattenedTree(){if(!this._model)return;this._nodeMap.clear();let e=this._model.length,t=this._model.reduce((t,r,o)=>(t.push(...oP(r,e,o+1,void 0,this._nodeMap)),t),[]);this.treeItems=t,this.buildPathToIndexMap()}onBeforeTreeItemSelected(e){if(this._lastSelectedPath!==e.path&&(this._lastSelectedPath=e.path),this._focusedItemPath!==e.path&&(this._focusedItemPath=e.path,this._focusedItemIndex=this.getItemIndex(e.path)),e.branch){let t=this.findTreeNode(e.path);t&&(t.expanded=!t.expanded,this.rebuildFlattenedTree())}this.requestUpdate()}onTreeItemSelected(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-selected",{...e.detail,node:t,context:t.context})}onTreeItemChecked(e,t){e.stopPropagation(),this.emit("gl-tree-generated-item-checked",{...e.detail,node:t,context:t.context})}onTreeItemActionClicked(e,t,r,o=!1){e.stopPropagation(),this.emit("gl-tree-generated-item-action-clicked",{node:t,context:t.context,action:r,dblClick:o,altKey:e.altKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey})}getCurrentFocusedIndex(){if(!this.treeItems?.length)return -1;if(this._focusedItemPath){let e=this.getItemIndex(this._focusedItemPath);if(-1!==e)return e}if(this._focusedItemIndex>=0&&this._focusedItemIndex<this.treeItems.length)return this._focusedItemIndex;if(this._lastSelectedPath){let e=this.getItemIndex(this._lastSelectedPath);if(-1!==e)return e}return 0}handleItemActivation(e){e&&(this.onBeforeTreeItemSelected(e),this.onTreeItemSelected(new CustomEvent("gl-tree-item-selected",{detail:{node:null,dblClick:!1,altKey:!1,ctrlKey:!1,metaKey:!1}}),e))}handleBranchToggle(e,t){if(!t?.branch)return!1;let r="ArrowRight"===e.key,o="ArrowLeft"===e.key;if(r&&t.expanded||o&&!t.expanded)return!1;e.preventDefault(),e.stopPropagation();let n=this.findTreeNode(t.path);return!!n&&(n.expanded=!n.expanded,this.rebuildFlattenedTree(),this.requestUpdate(),this.onTreeItemSelected(new CustomEvent("gl-tree-item-selected",{detail:{node:null,dblClick:!1,altKey:!1,ctrlKey:!1,metaKey:!1}}),t),!0)}focusItemAtIndex(e){let t=this.treeItems?.[e];t&&(this._focusedItemPath=t.path,this._focusedItemIndex=e,this._lastSelectedPath!==t.path&&(this._lastSelectedPath=t.path),this.requestUpdate(),this.scrollToItem(e))}scrollToItem(e){this._scrolling||(this._scrolling=!0,this.updateComplete.then(()=>{let t=this.virtualizerRef.value,r=this.scrollableRef.value;if(!t||!r){this._scrolling=!1;return}let o=()=>{r&&document.activeElement!==r&&r.focus(),this._scrolling=!1},n=0===e,a=e===(this.treeItems?.length??0)-1;n||a?requestAnimationFrame(()=>{n?r.scrollTop=0:r.scrollTop=r.scrollHeight,requestAnimationFrame(o)}):requestAnimationFrame(()=>{let r=t.scrollToIndex(e,"nearest");r&&"function"==typeof r.then?r.then(o):requestAnimationFrame(o)})}))}handleTypeAhead(e){this._typeAheadTimer&&clearTimeout(this._typeAheadTimer);let t=!this._typeAheadBuffer;this._typeAheadBuffer+=e.toLowerCase();let r=this.treeItems?.[this._focusedItemIndex],o=r?.label?.toLowerCase().startsWith(this._typeAheadBuffer),n=!1;if(t?n=!0:o||(n=!0),n){let e=this.findNextMatchingItem(this._typeAheadBuffer);-1!==e&&this.focusItemAtIndex(e)}this._typeAheadTimer=window.setTimeout(()=>{this._typeAheadBuffer="",this._typeAheadTimer=void 0},this._typeAheadTimeout)}buildPathToIndexMap(){if(this._pathToIndexMap.clear(),!this.treeItems)return;let e=0;for(let t of this.treeItems)this._pathToIndexMap.set(t.path,e++)}findNextMatchingItem(e){if(!this.treeItems?.length||!e)return -1;let t=e.toLowerCase(),r=this._focusedItemIndex,o=this.treeItems.length;for(let e=1;e<o;e++){let n=(r+e)%o;if(this.treeItems[n].label?.toLowerCase().startsWith(t))return n}return -1}isPrintableCharacter(e){return 1===e.length&&/^[a-zA-Z0-9\s\-_.]$/.test(e)}};function oP(e,t=1,r=1,o,n){n&&n.set(e.path,e);let a=[{...e,size:t,position:r,parentPath:o}],c=!1!==e.expanded;if(null!=e.children&&e.children.length>0&&c){let t=e.children.length;for(let r=0;r<t;r++)a.push(...oP(e.children[r],t,r+1,e.path,n))}return a}oE.styles=[i4,tU`
			:host {
				display: flex;
				flex-direction: column;
				height: 100%;
				width: 100%;
				overflow: hidden;
			}

			.scrollable {
				flex: 1;
				width: 100%;
				min-height: 0;
				overflow-y: auto;
				overflow-x: visible; /* Allow horizontal overflow for tooltips */
				outline: none;
			}

			.scrollable:focus-within {
				outline: none;
			}

			lit-virtualizer {
				display: block;
				width: 100%;
				height: 100%;
				/* Use layout containment instead of strict to avoid rendering issues */
				/* Removed paint containment to allow tooltips to escape */
				contain: layout;
			}

			gl-tree-item {
				width: 100%;
			}

			/* Dim non-matched items when filter is present */
			:host([filtered]) gl-tree-item:not([matched]) {
				opacity: 0.6;
			}
		`],oA([iI()],oE.prototype,"treeItems",2),oA([iI()],oE.prototype,"_virtualizerKey",2),oA([iP({reflect:!0})],oE.prototype,"guides",2),oA([iP({type:Boolean,reflect:!0})],oE.prototype,"filtered",2),oA([iP({type:String,attribute:"aria-label"})],oE.prototype,"ariaLabel",2),oA([iI()],oE.prototype,"_containerHasFocus",2),oA([iI()],oE.prototype,"_actionButtonHasFocus",2),oA([iP({type:Array,attribute:!1})],oE.prototype,"model",1),oE=oA([iA("gl-tree-generator")],oE);var oI=Object.defineProperty,oR=Object.getOwnPropertyDescriptor,oT=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?oR(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&oI(t,r,a),a};let oz=class extends lit_element_i{constructor(){super(...arguments),this.lines=1}render(){let e=`--skeleton-lines: ${this.lines};`;return im`<div class="skeleton" style=${e}></div>`}};oz.styles=tU`
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
	`,oT([iP({type:Number})],oz.prototype,"lines",2),oz=oT([iA("skeleton-loader")],oz);let GlTreeBase=class GlTreeBase extends GlElement{renderLoading(){return im`
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
			<div class="section section--skeleton">
				<skeleton-loader></skeleton-loader>
			</div>
		`}renderLayoutAction(e){if(!e)return iv;let t="tree",r="list-tree",o="View as Tree";switch(e){case"auto":t="list",r="gl-list-auto",o="View as List";break;case"list":t="tree",r="list-flat",o="View as Tree";break;case"tree":t="auto",r="list-tree",o="View as Auto"}return im`<action-item data-switch-value="${t}" label="${o}" icon="${r}"></action-item>`}renderTreeView(e,t="none"){return im`<gl-tree-generator
			.model=${e}
			.guides=${t}
			@gl-tree-generated-item-action-clicked=${this.onTreeItemActionClicked}
			@gl-tree-generated-item-checked=${this.onTreeItemChecked}
			@gl-tree-generated-item-selected=${this.onTreeItemSelected}
		></gl-tree-generator>`}renderFiles(e,t=!1,r=!1,o=2){let n=[];if(t){let t=iK(e,e=>e.path.split("/"),(...e)=>e.join("/"),r);if(null!=t.children)for(let e of t.children.values()){let t=this.walkFileTree(e,{level:o});n.push(t)}}else for(let t of e){let e=this.fileToTreeModel(t,{level:o,branch:!1},!0);n.push(e)}return n}walkFileTree(e,t={level:1}){let r;if(void 0===t.level&&(t.level=1),r=null==e.value?this.folderToTreeModel(e.name,e.relativePath,t):this.fileToTreeModel(e.value,t),null!=e.children){let o=[];for(let r of e.children.values()){let e=this.walkFileTree(r,{...t,level:t.level+1});o.push(e)}o.length>0&&(r.branch=!0,r.children=o)}return r}folderToTreeModel(e,t,r){return{branch:!1,expanded:!0,path:t,level:1,checkable:!1,checked:!1,icon:"folder",label:e,...r}}getRepoActions(e,t,r){return[]}emptyTreeModel(e,t){return{branch:!1,expanded:!0,path:"",level:1,checkable:!0,checked:!0,icon:void 0,label:e,...t}}repoToTreeModel(e,t,r,o){return{branch:!1,expanded:!0,path:t,level:1,checkable:!0,checked:!0,icon:"gl-repository",label:e,description:o,context:[t],actions:this.getRepoActions(e,t,r),...r}}getFileActions(e,t){return[]}fileToTreeModel(e,t,r=!1,o="/"){let n=e.path.lastIndexOf(o),a=-1!==n?e.path.substring(n+1):e.path,c=r&&-1!==n?e.path.substring(0,n):"";return{branch:!1,expanded:!0,path:e.path,level:1,checkable:!1,checked:!1,icon:"file",label:a,description:!0===r?c:void 0,context:[e],actions:this.getFileActions(e,t),decorations:[{type:"text",label:e.status}],...t}}};let oM=tU`
	.badge {
		display: inline-flex;
		font-size: var(--gl-badge-font-size, x-small);
		font-variant: all-small-caps;
		font-weight: 600;
		color: var(--gl-badge-color, var(--color-foreground--50));
		border: currentColor 1px solid;
		border-radius: 1rem;
		padding: 0 0.8rem 0.1rem;
		white-space: nowrap;
	}
`;var oL=Object.defineProperty,oO=Object.getOwnPropertyDescriptor;let oD=class extends lit_element_i{render(){return im`<slot class="badge" part="base"></slot>`}};oD.styles=[oM],oD=((e,t,r,o)=>{for(var n,a=o>1?void 0:o?oO(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&oL(t,r,a),a})([iA("gl-badge")],oD);var oN=Object.defineProperty,oB=Object.getOwnPropertyDescriptor,oU=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?oB(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&oN(t,r,a),a};let oj=class extends lit_element_i{constructor(){super(...arguments),this.editor=!1,this.layout="shift",this.grouping="gap"}render(){return im`<div class="group"><slot></slot></div>`}};oj.styles=[i8,tU`
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
		`],oU([iP({type:Boolean})],oj.prototype,"editor",2),oU([iP({reflect:!0})],oj.prototype,"layout",2),oU([iP({reflect:!0})],oj.prototype,"grouping",2),oj=oU([iA("button-container")],oj);var oH=Object.defineProperty,oF=Object.getOwnPropertyDescriptor,oV=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?oF(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&oH(t,r,a),a};let oq=class extends lit_element_i{constructor(){super(...arguments),this.disabled=!1,this.full=!1,this.tooltipPlacement="bottom",this.truncate=!1}connectedCallback(){super.connectedCallback?.(),this.setAttribute("role",this.href?"link":"button"),this.disabled&&this.setAttribute("aria-disabled",this.disabled.toString())}willUpdate(e){if(e.has("href")&&this.setAttribute("role",this.href?"link":"button"),e.has("disabled")){let t=e.get("disabled");t?this.setAttribute("aria-disabled",t.toString()):this.removeAttribute("aria-disabled")}super.willUpdate(e)}render(){return this.tooltip?im`<gl-tooltip .content=${this.tooltip} placement=${this.tooltipPlacement??iv}
				>${this.renderControl()}</gl-tooltip
			>`:this.querySelectorAll('[slot="tooltip"]').length>0?im`<gl-tooltip placement=${this.tooltipPlacement??iv}>
				${this.renderControl()}
				<slot name="tooltip" slot="content"></slot>
			</gl-tooltip>`:this.renderControl()}renderControl(){return null!=this.href?im`<a
				class="control"
				tabindex="${(!1===this.disabled?void 0:-1)??iv}"
				href=${this.href}
				@keypress=${e=>this.onLinkKeypress(e)}
				><slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot
			></a>`:im`<button
			class="control"
			role=${this.role??iv}
			aria-checked=${this.ariaChecked??iv}
			?disabled=${this.disabled}
		>
			<slot name="prefix"></slot><slot class="label"></slot><slot name="suffix"></slot>
		</button>`}onLinkKeypress(e){" "===e.key&&this.control.click()}focus(e){this.control.focus(e)}blur(){this.control.blur()}click(){this.control.click()}};oq.shadowRootOptions={...lit_element_i.shadowRootOptions,delegatesFocus:!0},oq.styles=[i8,tU`
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
				${i9}
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
		`],oV([iT(".control")],oq.prototype,"control",2),oV([iP({reflect:!0})],oq.prototype,"appearance",2),oV([iP({reflect:!0})],oq.prototype,"variant",2),oV([iP({type:Boolean,reflect:!0})],oq.prototype,"disabled",2),oV([iP({reflect:!0})],oq.prototype,"density",2),oV([iP({type:Boolean,reflect:!0})],oq.prototype,"full",2),oV([iP()],oq.prototype,"href",2),oV([iP()],oq.prototype,"tooltip",2),oV([iP()],oq.prototype,"tooltipPlacement",2),oV([iP({type:Boolean,reflect:!0})],oq.prototype,"truncate",2),oq=oV([iA("gl-button")],oq);let private_async_helpers_s=class private_async_helpers_s{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}};let private_async_helpers_i=class private_async_helpers_i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};let oW=e=>null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then;let until_c=class until_c extends async_directive_f{constructor(){super(...arguments),this._$Cwt=0x3fffffff,this._$Cbt=[],this._$CK=new private_async_helpers_s(this),this._$CX=new private_async_helpers_i}render(...e){return e.find(e=>!oW(e))??ib}update(e,t){let r=this._$Cbt,o=r.length;this._$Cbt=t;let n=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){let c=t[e];if(!oW(c))return this._$Cwt=e,c;e<o&&c===r[e]||(this._$Cwt=0x3fffffff,o=0,Promise.resolve(c).then(async e=>{for(;a.get();)await a.get();let t=n.deref();if(void 0!==t){let r=t._$Cbt.indexOf(c);r>-1&&r<t._$Cwt&&(t._$Cwt=r,t.setValue(e))}}))}return ib}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};let oK=iO(until_c);function oG(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var oZ=oG(),oX={exec:()=>null};function oY(e,t=""){let r="string"==typeof e?e:e.source,o={replace:(e,t)=>{let n="string"==typeof t?t:t.source;return n=n.replace(oJ.caret,"$1"),r=r.replace(e,n),o},getRegex:()=>new RegExp(r,t)};return o}var oQ=(()=>{try{return!!RegExp("(?<=1)(?<!1)")}catch{return!1}})(),oJ={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},o0=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,o1=/(?:[*+-]|\d{1,9}[.)])/,o2=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,o5=oY(o2).replace(/bull/g,o1).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),o3=oY(o2).replace(/bull/g,o1).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),o6=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,o7=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,o9=oY(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",o7).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),o8=oY(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,o1).getRegex(),o4="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ne=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ni=oY("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ne).replace("tag",o4).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),nr=oY(o6).replace("hr",o0).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",o4).getRegex(),ns={blockquote:oY(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",nr).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:o9,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:o0,html:ni,lheading:o5,list:o8,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:nr,table:oX,text:/^[^\n]+/},no=oY("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",o0).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",o4).getRegex(),nn={...ns,lheading:o3,table:no,paragraph:oY(o6).replace("hr",o0).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",no).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",o4).getRegex()},na={...ns,html:oY("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",ne).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:oX,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:oY(o6).replace("hr",o0).replace("heading",` *#{1,6} *[^
]`).replace("lheading",o5).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},nl=/^( {2,}|\\)\n(?!\s*$)/,nc=/[\p{P}\p{S}]/u,nh=/[\s\p{P}\p{S}]/u,nd=/[^\s\p{P}\p{S}]/u,np=oY(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,nh).getRegex(),nu=/(?!~)[\p{P}\p{S}]/u,nf=oY(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",oQ?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ng=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,nm=oY(ng,"u").replace(/punct/g,nc).getRegex(),nb=oY(ng,"u").replace(/punct/g,nu).getRegex(),nv="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ny=oY(nv,"gu").replace(/notPunctSpace/g,nd).replace(/punctSpace/g,nh).replace(/punct/g,nc).getRegex(),n_=oY(nv,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,nu).getRegex(),nw=oY("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,nd).replace(/punctSpace/g,nh).replace(/punct/g,nc).getRegex(),nk=oY(/\\(punct)/,"gu").replace(/punct/g,nc).getRegex(),nx=oY(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),n$=oY(ne).replace("(?:--\x3e|$)","--\x3e").getRegex(),nC=oY("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",n$).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),nS=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,nA=oY(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",nS).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),nE=oY(/^!?\[(label)\]\[(ref)\]/).replace("label",nS).replace("ref",o7).getRegex(),nP=oY(/^!?\[(ref)\](?:\[\])?/).replace("ref",o7).getRegex(),nI=oY("reflink|nolink(?!\\()","g").replace("reflink",nE).replace("nolink",nP).getRegex(),nR=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,nT={_backpedal:oX,anyPunctuation:nk,autolink:nx,blockSkip:nf,br:nl,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:oX,emStrongLDelim:nm,emStrongRDelimAst:ny,emStrongRDelimUnd:nw,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:nA,nolink:nP,punctuation:np,reflink:nE,reflinkSearch:nI,tag:nC,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:oX},nz={...nT,link:oY(/^!?\[(label)\]\((.*?)\)/).replace("label",nS).getRegex(),reflink:oY(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",nS).getRegex()},nM={...nT,emStrongRDelimAst:n_,emStrongLDelim:nb,url:oY(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",nR).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:oY(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",nR).getRegex()},nL={...nM,br:oY(nl).replace("{2,}","*").getRegex(),text:oY(nM.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},nO={normal:ns,gfm:nn,pedantic:na},nD={normal:nT,gfm:nM,breaks:nL,pedantic:nz},nN={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nB=e=>nN[e];function nU(e,t){if(t){if(oJ.escapeTest.test(e))return e.replace(oJ.escapeReplace,nB)}else if(oJ.escapeTestNoEncode.test(e))return e.replace(oJ.escapeReplaceNoEncode,nB);return e}function nj(e){try{e=encodeURI(e).replace(oJ.percentDecode,"%")}catch{return null}return e}function nH(e,t){let r=e.replace(oJ.findPipe,(e,t,r)=>{let o=!1,n=t;for(;--n>=0&&"\\"===r[n];)o=!o;return o?"|":" |"}).split(oJ.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(oJ.slashPipe,"|");return r}function nF(e,t,r){let o=e.length;if(0===o)return"";let n=0;for(;n<o;){let a=e.charAt(o-n-1);if(a!==t||r)if(a!==t&&r)n++;else break;else n++}return e.slice(0,o-n)}function nV(e,t,r,o,n){let a=t.href,c=t.title||null,h=e[1].replace(n.other.outputLinkReplace,"$1");o.state.inLink=!0;let p={type:"!"===e[0].charAt(0)?"image":"link",raw:r,href:a,title:c,text:h,tokens:o.inlineTokens(h)};return o.state.inLink=!1,p}var nq=class{options;rules;lexer;constructor(e){this.options=e||oZ}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:nF(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],r=function(e,t,r){let o=e.match(r.other.indentCodeCompensation);if(null===o)return t;let n=o[1];return t.split(`
`).map(e=>{let t=e.match(r.other.beginningSpace);if(null===t)return e;let[o]=t;return o.length>=n.length?e.slice(n.length):e}).join(`
`)}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=nF(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:nF(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=nF(t[0],`
`).split(`
`),r="",o="",n=[];for(;e.length>0;){let t=!1,a=[],c;for(c=0;c<e.length;c++)if(this.rules.other.blockquoteStart.test(e[c]))a.push(e[c]),t=!0;else if(t)break;else a.push(e[c]);e=e.slice(c);let h=a.join(`
`),p=h.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${h}`:h,o=o?`${o}
${p}`:p;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,n,!0),this.lexer.state.top=f,0===e.length)break;let g=n.at(-1);if(g?.type==="code")break;if(g?.type==="blockquote"){let t=g.raw+`
`+e.join(`
`),a=this.blockquote(t);n[n.length-1]=a,r=r.substring(0,r.length-g.raw.length)+a.raw,o=o.substring(0,o.length-g.text.length)+a.text;break}if(g?.type==="list"){let t=g.raw+`
`+e.join(`
`),a=this.list(t);n[n.length-1]=a,r=r.substring(0,r.length-g.raw.length)+a.raw,o=o.substring(0,o.length-g.raw.length)+a.raw,e=t.substring(n.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:n,text:o}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r=t[1].trim(),o=r.length>1,n={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");let a=this.rules.other.listItemRegex(r),c=!1;for(;e;){let r=!1,o="",h="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let p=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),f=e.split(`
`,1)[0],g=!p.trim(),m=0;if(this.options.pedantic?(m=2,h=p.trimStart()):g?m=t[1].length+1:(m=(m=t[2].search(this.rules.other.nonSpaceChar))>4?1:m,h=p.slice(m),m+=t[1].length),g&&this.rules.other.blankLine.test(f)&&(o+=f+`
`,e=e.substring(f.length+1),r=!0),!r){let t=this.rules.other.nextBulletRegex(m),r=this.rules.other.hrRegex(m),n=this.rules.other.fencesBeginRegex(m),a=this.rules.other.headingBeginRegex(m),c=this.rules.other.htmlBeginRegex(m);for(;e;){let b=e.split(`
`,1)[0],v;if(f=b,v=this.options.pedantic?f=f.replace(this.rules.other.listReplaceNesting,"  "):f.replace(this.rules.other.tabCharGlobal,"    "),n.test(f)||a.test(f)||c.test(f)||t.test(f)||r.test(f))break;if(v.search(this.rules.other.nonSpaceChar)>=m||!f.trim())h+=`
`+v.slice(m);else{if(g||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||n.test(p)||a.test(p)||r.test(p))break;h+=`
`+f}g||f.trim()||(g=!0),o+=b+`
`,e=e.substring(b.length+1),p=v.slice(m)}}n.loose||(c?n.loose=!0:this.rules.other.doubleBlankLine.test(o)&&(c=!0)),n.items.push({type:"list_item",raw:o,task:!!this.options.gfm&&this.rules.other.listIsTask.test(h),loose:!1,text:h,tokens:[]}),n.raw+=o}let h=n.items.at(-1);if(!h)return;for(let e of(h.raw=h.raw.trimEnd(),h.text=h.text.trimEnd(),n.raw=n.raw.trimEnd(),n.items)){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,""),e.tokens[0]?.type==="text"||e.tokens[0]?.type==="paragraph"){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,"");break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let r={type:"checkbox",raw:t[0]+" ",checked:"[ ]"!==t[0]};e.checked=r.checked,n.loose?e.tokens[0]&&["paragraph","text"].includes(e.tokens[0].type)&&"tokens"in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=r.raw+e.tokens[0].raw,e.tokens[0].text=r.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(r)):e.tokens.unshift({type:"paragraph",raw:r.raw,text:r.raw,tokens:[r]}):e.tokens.unshift(r)}}if(!n.loose){let t=e.tokens.filter(e=>"space"===e.type);n.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(n.loose)for(let e of n.items)for(let t of(e.loose=!0,e.tokens))"text"===t.type&&(t.type="paragraph");return n}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:r,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let r=nH(t[1]),o=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===o.length){for(let e of o)this.rules.other.tableAlignRight.test(e)?a.align.push("right"):this.rules.other.tableAlignCenter.test(e)?a.align.push("center"):this.rules.other.tableAlignLeft.test(e)?a.align.push("left"):a.align.push(null);for(let e=0;e<r.length;e++)a.header.push({text:r[e],tokens:this.lexer.inline(r[e]),header:!0,align:a.align[e]});for(let e of n)a.rows.push(nH(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=nF(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e){if(-1===e.indexOf(")"))return -1;let t=0;for(let r=0;r<e.length;r++)if("\\"===e[r])r++;else if("("===e[r])t++;else if(")"===e[r]&&--t<0)return r;return t>0?-2:-1}(t[2]);if(-2===e)return;if(e>-1){let r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],o="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(r);e&&(r=e[1],o=e[3])}else o=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(r=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?r.slice(1):r.slice(1,-1)),nV(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=t[(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return nV(r,e,r[0],this.lexer,this.rules)}}emStrong(e,t,r=""){let o=this.rules.inline.emStrongLDelim.exec(e);if(!(!o||o[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[2])||!r||this.rules.inline.punctuation.exec(r))){let r=[...o[0]].length-1,n,a,c=r,h=0,p="*"===o[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+r);null!=(o=p.exec(t));){if(!(n=o[1]||o[2]||o[3]||o[4]||o[5]||o[6]))continue;if(a=[...n].length,o[3]||o[4]){c+=a;continue}if((o[5]||o[6])&&r%3&&!((r+a)%3)){h+=a;continue}if((c-=a)>0)continue;a=Math.min(a,a+c+h);let t=[...o[0]][0].length,p=e.slice(0,r+o.index+t+a);if(Math.min(r,a)%2){let e=p.slice(1,-1);return{type:"em",raw:p,text:e,tokens:this.lexer.inlineTokens(e)}}let f=p.slice(2,-2);return{type:"strong",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(e),o=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return r&&o&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,r;return r="@"===t[2]?"mailto:"+(e=t[1]):e=t[1],{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,r;if("@"===t[2])r="mailto:"+(e=t[0]);else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(o!==t[0])e=t[0],r="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},nW=class u{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||oZ,this.options.tokenizer=this.options.tokenizer||new nq,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:oJ,block:nO.normal,inline:nD.normal};this.options.pedantic?(t.block=nO.pedantic,t.inline=nD.pedantic):this.options.gfm&&(t.block=nO.gfm,this.options.breaks?t.inline=nD.breaks:t.inline=nD.gfm),this.tokenizer.rules=t}static get rules(){return{block:nO,inline:nD}}static lex(e,t){return new u(t).lex(e)}static lexInline(e,t){return new u(t).inlineTokens(e)}lex(e){e=e.replace(oJ.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){for(this.options.pedantic&&(e=e.replace(oJ.tabCharGlobal,"    ").replace(oJ.spaceLine,""));e;){let o;if(this.options.extensions?.block?.some(r=>!!(o=r.call({lexer:this},e,t))&&(e=e.substring(o.raw.length),t.push(o),!0)))continue;if(o=this.tokenizer.space(e)){e=e.substring(o.raw.length);let r=t.at(-1);1===o.raw.length&&void 0!==r?r.raw+=`
`:t.push(o);continue}if(o=this.tokenizer.code(e)){e=e.substring(o.raw.length);let r=t.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+o.raw,r.text+=`
`+o.text,this.inlineQueue.at(-1).src=r.text):t.push(o);continue}if((o=this.tokenizer.fences(e))||(o=this.tokenizer.heading(e))||(o=this.tokenizer.hr(e))||(o=this.tokenizer.blockquote(e))||(o=this.tokenizer.list(e))||(o=this.tokenizer.html(e))){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.def(e)){e=e.substring(o.raw.length);let r=t.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+o.raw,r.text+=`
`+o.raw,this.inlineQueue.at(-1).src=r.text):this.tokens.links[o.tag]||(this.tokens.links[o.tag]={href:o.href,title:o.title},t.push(o));continue}if((o=this.tokenizer.table(e))||(o=this.tokenizer.lheading(e))){e=e.substring(o.raw.length),t.push(o);continue}let n=e;if(this.options.extensions?.startBlock){let t=1/0,r=e.slice(1),o;this.options.extensions.startBlock.forEach(e=>{"number"==typeof(o=e.call({lexer:this},r))&&o>=0&&(t=Math.min(t,o))}),t<1/0&&t>=0&&(n=e.substring(0,t+1))}if(this.state.top&&(o=this.tokenizer.paragraph(n))){let a=t.at(-1);r&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+o.raw,a.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(o),r=n.length!==e.length,e=e.substring(o.raw.length);continue}if(o=this.tokenizer.text(e)){e=e.substring(o.raw.length);let r=t.at(-1);r?.type==="text"?(r.raw+=(r.raw.endsWith(`
`)?"":`
`)+o.raw,r.text+=`
`+o.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(o);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r,o=e,n=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(n=this.tokenizer.rules.inline.reflinkSearch.exec(o));)e.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(n=this.tokenizer.rules.inline.anyPunctuation.exec(o));)o=o.slice(0,n.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(n=this.tokenizer.rules.inline.blockSkip.exec(o));)r=n[2]?n[2].length:0,o=o.slice(0,n.index+r)+"["+"a".repeat(n[0].length-r-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);o=this.options.hooks?.emStrongMask?.call({lexer:this},o)??o;let a=!1,c="";for(;e;){let r;if(a||(c=""),a=!1,this.options.extensions?.inline?.some(o=>!!(r=o.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if((r=this.tokenizer.escape(e))||(r=this.tokenizer.tag(e))||(r=this.tokenizer.link(e))){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let o=t.at(-1);"text"===r.type&&o?.type==="text"?(o.raw+=r.raw,o.text+=r.text):t.push(r);continue}if((r=this.tokenizer.emStrong(e,o,c))||(r=this.tokenizer.codespan(e))||(r=this.tokenizer.br(e))||(r=this.tokenizer.del(e))||(r=this.tokenizer.autolink(e))||!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let n=e;if(this.options.extensions?.startInline){let t=1/0,r=e.slice(1),o;this.options.extensions.startInline.forEach(e=>{"number"==typeof(o=e.call({lexer:this},r))&&o>=0&&(t=Math.min(t,o))}),t<1/0&&t>=0&&(n=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(n)){e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(c=r.raw.slice(-1)),a=!0;let o=t.at(-1);o?.type==="text"?(o.raw+=r.raw,o.text+=r.text):t.push(r);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent)break;throw Error(t)}}return t}},nK=class{options;parser;constructor(e){this.options=e||oZ}space(e){return""}code({text:e,lang:t,escaped:r}){let o=(t||"").match(oJ.notSpaceStart)?.[0],n=e.replace(oJ.endingNewline,"")+`
`;return o?'<pre><code class="language-'+nU(o)+'">'+(r?n:nU(n,!0))+`</code></pre>
`:"<pre><code>"+(r?n:nU(n,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,r=e.start,o="";for(let t=0;t<e.items.length;t++){let r=e.items[t];o+=this.listitem(r)}let n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+`>
`+o+"</"+n+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",r="";for(let t=0;t<e.header.length;t++)r+=this.tablecell(e.header[t]);t+=this.tablerow({text:r});let o="";for(let t=0;t<e.rows.length;t++){let n=e.rows[t];r="";for(let e=0;e<n.length;e++)r+=this.tablecell(n[e]);o+=this.tablerow({text:r})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+o+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${nU(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:r}){let o=this.parser.parseInline(r),n=nj(e);if(null===n)return o;let a='<a href="'+(e=n)+'"';return t&&(a+=' title="'+nU(t)+'"'),a+=">"+o+"</a>"}image({href:e,title:t,text:r,tokens:o}){o&&(r=this.parser.parseInline(o,this.parser.textRenderer));let n=nj(e);if(null===n)return nU(r);e=n;let a=`<img src="${e}" alt="${r}"`;return t&&(a+=` title="${nU(t)}"`),a+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:nU(e.text)}},nG=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},nZ=class u{options;renderer;textRenderer;constructor(e){this.options=e||oZ,this.options.renderer=this.options.renderer||new nK,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new nG}static parse(e,t){return new u(t).parse(e)}static parseInline(e,t){return new u(t).parseInline(e)}parse(e){let t="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let e=this.options.extensions.renderers[o.type].call({parser:this},o);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(o.type)){t+=e||"";continue}}switch(o.type){case"space":t+=this.renderer.space(o);break;case"hr":t+=this.renderer.hr(o);break;case"heading":t+=this.renderer.heading(o);break;case"code":t+=this.renderer.code(o);break;case"table":t+=this.renderer.table(o);break;case"blockquote":t+=this.renderer.blockquote(o);break;case"list":t+=this.renderer.list(o);break;case"checkbox":t+=this.renderer.checkbox(o);break;case"html":t+=this.renderer.html(o);break;case"def":t+=this.renderer.def(o);break;case"paragraph":t+=this.renderer.paragraph(o);break;case"text":t+=this.renderer.text(o);break;default:{let e='Token with "'+o.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return t}parseInline(e,t=this.renderer){let r="";for(let o=0;o<e.length;o++){let n=e[o];if(this.options.extensions?.renderers?.[n.type]){let e=this.options.extensions.renderers[n.type].call({parser:this},n);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){r+=e||"";continue}}switch(n.type){case"escape":case"text":r+=t.text(n);break;case"html":r+=t.html(n);break;case"link":r+=t.link(n);break;case"image":r+=t.image(n);break;case"checkbox":r+=t.checkbox(n);break;case"strong":r+=t.strong(n);break;case"em":r+=t.em(n);break;case"codespan":r+=t.codespan(n);break;case"br":r+=t.br(n);break;case"del":r+=t.del(n);break;default:{let e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return"";throw Error(e)}}}return r}},nX=class{options;block;constructor(e){this.options=e||oZ}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?nW.lex:nW.lexInline}provideParser(){return this.block?nZ.parse:nZ.parseInline}},nY=class{defaults=oG();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=nZ;Renderer=nK;TextRenderer=nG;Lexer=nW;Tokenizer=nq;Hooks=nX;constructor(...e){this.use(...e)}walkTokens(e,t){let r=[];for(let o of e)switch(r=r.concat(t.call(this,o)),o.type){case"table":for(let e of o.header)r=r.concat(this.walkTokens(e.tokens,t));for(let e of o.rows)for(let o of e)r=r.concat(this.walkTokens(o.tokens,t));break;case"list":r=r.concat(this.walkTokens(o.items,t));break;default:{let e=o;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(o=>{let n=e[o].flat(1/0);r=r.concat(this.walkTokens(n,t))}):e.tokens&&(r=r.concat(this.walkTokens(e.tokens,t)))}}return r}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let r={...e};if(r.async=this.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let r=t.renderers[e.name];r?t.renderers[e.name]=function(...t){let o=e.renderer.apply(this,t);return!1===o&&(o=r.apply(this,t)),o}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let r=t[e.level];r?r.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),r.extensions=t),e.renderer){let t=this.defaults.renderer||new nK(this.defaults);for(let r in e.renderer){if(!(r in t))throw Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let o=e.renderer[r],n=t[r];t[r]=(...e)=>{let r=o.apply(t,e);return!1===r&&(r=n.apply(t,e)),r||""}}r.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new nq(this.defaults);for(let r in e.tokenizer){if(!(r in t))throw Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let o=e.tokenizer[r],n=t[r];t[r]=(...e)=>{let r=o.apply(t,e);return!1===r&&(r=n.apply(t,e)),r}}r.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new nX;for(let r in e.hooks){if(!(r in t))throw Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let o=e.hooks[r],n=t[r];nX.passThroughHooks.has(r)?t[r]=e=>{if(this.defaults.async&&nX.passThroughHooksRespectAsync.has(r))return(async()=>{let r=await o.call(t,e);return n.call(t,r)})();let a=o.call(t,e);return n.call(t,a)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let r=await o.apply(t,e);return!1===r&&(r=await n.apply(t,e)),r})();let r=o.apply(t,e);return!1===r&&(r=n.apply(t,e)),r}}r.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,o=e.walkTokens;r.walkTokens=function(e){let r=[];return r.push(o.call(this,e)),t&&(r=r.concat(t.call(this,e))),r}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return nW.lex(e,t??this.defaults)}parser(e,t){return nZ.parse(e,t??this.defaults)}parseMarkdown(e){return(t,r)=>{let o={...r},n={...this.defaults,...o},a=this.onError(!!n.silent,!!n.async);if(!0===this.defaults.async&&!1===o.async)return a(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||null===t)return a(Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return a(Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(n.hooks&&(n.hooks.options=n,n.hooks.block=e),n.async)return(async()=>{let r=n.hooks?await n.hooks.preprocess(t):t,o=await (n.hooks?await n.hooks.provideLexer():e?nW.lex:nW.lexInline)(r,n),a=n.hooks?await n.hooks.processAllTokens(o):o;n.walkTokens&&await Promise.all(this.walkTokens(a,n.walkTokens));let c=await (n.hooks?await n.hooks.provideParser():e?nZ.parse:nZ.parseInline)(a,n);return n.hooks?await n.hooks.postprocess(c):c})().catch(a);try{n.hooks&&(t=n.hooks.preprocess(t));let r=(n.hooks?n.hooks.provideLexer():e?nW.lex:nW.lexInline)(t,n);n.hooks&&(r=n.hooks.processAllTokens(r)),n.walkTokens&&this.walkTokens(r,n.walkTokens);let o=(n.hooks?n.hooks.provideParser():e?nZ.parse:nZ.parseInline)(r,n);return n.hooks&&(o=n.hooks.postprocess(o)),o}catch(e){return a(e)}}}onError(e,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e="<p>An error occurred:</p><pre>"+nU(r.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(r);throw r}}},nQ=new nY;function nJ(e,t){return nQ.parse(e,t)}nJ.options=nJ.setOptions=function(e){return nQ.setOptions(e),nJ.defaults=nQ.defaults,oZ=nJ.defaults,nJ},nJ.getDefaults=oG,nJ.defaults=oZ,nJ.use=function(...e){return nQ.use(...e),nJ.defaults=nQ.defaults,oZ=nJ.defaults,nJ},nJ.walkTokens=function(e,t){return nQ.walkTokens(e,t)},nJ.parseInline=nQ.parseInline,nJ.Parser=nZ,nJ.parser=nZ.parse,nJ.Renderer=nK,nJ.TextRenderer=nG,nJ.Lexer=nW,nJ.lexer=nW.lex,nJ.Tokenizer=nq,nJ.Hooks=nX,nJ.parse=nJ,nJ.options,nJ.setOptions,nJ.use,nJ.walkTokens,nJ.parseInline,nZ.parse,nW.lex,tU`
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
`;let n0=tU`
	hr {
		border: none;
		border-top: 1px solid var(--color-foreground--25);
	}
`;var n1=Object.defineProperty,n2=Object.getOwnPropertyDescriptor,n5=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?n2(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&n1(t,r,a),a};let n3=class extends lit_element_i{constructor(){super(...arguments),this.markdown="",this.density="compact",this.inline=!1}render(){return im`${this.markdown?oK(this.renderMarkdown(this.markdown),"Loading..."):""}`}async renderMarkdown(e){let t,r,a,c;return this.inline?(o??=new nY({breaks:!1,gfm:!0,renderer:(r=0,a=!1,{blockquote:function({tokens:e}){return this.parser.parse(e)},code:function({text:e}){return`<code>${function(e,t){if(t){if(/[&<>"']/.test(e))return e.replace(/[&<>"']/g,n7)}else if(/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/.test(e))return e.replace(/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,n7);return e}(e,!0)}</code>`},heading:function({tokens:e}){return this.parser.parseInline(e)},hr:function(){return""},image:function({text:e}){return e||""},link:function({tokens:e}){return this.parser.parseInline(e)},list:function(e){a=e.ordered,r="number"==typeof e.start?e.start:1;let t="";for(let r of e.items)t+=c.call(this,r);return t},listitem:c=function(e){let t,o=this.parser.parse(e.tokens);return e.task?t=e.checked?"☑":"☐":a?(t=`${r}.`,r++):t="•",`${t} ${o.trim()} `},paragraph:function({tokens:e}){return this.parser.parseInline(e)},table:function(){return""},br:function(){return" "},html:function(){return""}})}),t=ao(t=await o.parse(as(e))),im`<span>${iW(t)}</span>`):(n??=new nY({breaks:!0,gfm:!0,renderer:{image:function({href:e,title:t,text:r}){let o=[],n=[];return e&&({href:e,dimensions:o}=function(e){let t=[],r=e.split("|").map(e=>e.trim());e=r[0];let o=r[1];if(o){let e=/height=(\d+)/.exec(o),r=/width=(\d+)/.exec(o),n=e?e[1]:"",a=r?r[1]:"",c=isFinite(parseInt(a)),h=isFinite(parseInt(n));c&&t.push(`width="${a}"`),h&&t.push(`height="${n}"`)}return{href:e,dimensions:t}}(e),n.push(`src="${an(e)}"`)),r&&n.push(`alt="${an(r)}"`),t&&n.push(`title="${an(t)}"`),o.length&&(n=n.concat(o)),`<img ${n.join(" ")}>`},paragraph:function({tokens:e}){let t=this.parser.parseInline(e);return`<p>${t}</p>`},html:function({text:e}){return e.match(/^(<span[^>]+>)|(<\/\s*span>)$/)?e:""}}}),iW(t=ao(t=await n.parse(as(e)))))}};n3.styles=[n0,tU`
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
=		`],n5([iP({type:String})],n3.prototype,"markdown",2),n5([iP({type:String,reflect:!0})],n3.prototype,"density",2),n5([iP({type:Boolean,reflect:!0})],n3.prototype,"inline",2),n3=n5([iA("gl-markdown")],n3);let n6={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},n7=e=>n6[e],n9="[A-Za-z0-9-]+",n8="~[A-Za-z]+",n4=RegExp(`^(${n9})(${n8})?$`),ae=RegExp(`\\$\\(${n9}(?:${n8})?\\)`,"g"),ai=RegExp(`\\\\${ae.source}`,"g"),ar=RegExp(`(\\\\)?\\$\\((${n9}(?:${n8})?)\\)`,"g");function as(e){return e.replace(ai,e=>`\\${e}`)}function ao(e){let t,r=[],o=0,n=0;for(;null!==(t=ar.exec(e));){o<(n=t.index||0)&&r.push(e.substring(o,n)),o=(t.index||0)+t[0].length;let[,a,c]=t;r.push(a?`$(${c})`:function(e){let[,t,r]=n4.exec(e.id)??[void 0,"error",void 0];return t.startsWith("gitlens-")&&(t=`gl-${t.substring(8)}`),`<code-icon icon="${t}"${r?` modifier="${r}"`:""}></code-icon>`}({id:c}))}return o<e.length&&r.push(e.substring(o)),r.join("")}function an(e){return e.replace(/"/g,"&quot;")}var aa=Object.defineProperty,al=Object.getOwnPropertyDescriptor,ac=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?al(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&aa(t,r,a),a};let ah=class extends lit_element_i{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return im`<div class="progress-bar"></div>`}};ah.styles=tU`
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
	`,ac([iP({reflect:!0})],ah.prototype,"mode",2),ac([iP({type:Boolean})],ah.prototype,"active",2),ac([iP()],ah.prototype,"position",2),ah=ac([iA("progress-indicator")],ah);var ad=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,au=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?ap(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&ad(t,r,a),a};let af=class extends lit_element_i{constructor(){super(...arguments),this.collapsable=!1,this.expanded=!1,this.loading=!1}renderTitle(){return this.collapsable?im`<button
			type="button"
			class="label"
			aria-controls="content"
			aria-expanded=${this.expanded}
			@click="${this.toggleExpanded}"
		>
			<code-icon class="icon" icon=${this.expanded?"chevron-down":"chevron-right"}></code-icon
			><span class="title"><slot name="title">Section</slot></span>
			<span class="subtitle"><slot name="subtitle"></slot></span>
		</button>`:im`<div class="label">
				<span class="title"><slot name="title">Section</slot></span>
				<span class="subtitle"><slot name="subtitle"></slot></span>
			</div>`}render(){return im`
			<header class="header">
				${this.renderTitle()}
				<slot name="actions"></slot>
				<progress-indicator ?active="${this.loading}"></progress-indicator>
			</header>
			<div id="content" role="region" part="content" class="content scrollable">
				<slot></slot>
			</div>
		`}toggleExpanded(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expanded-change",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}};af.styles=[i4,tU`
			:host {
				display: flex;
				flex-direction: column;
				background-color: var(--vscode-sideBar-background);
				min-height: 23px;
			}

			* {
				box-sizing: border-box;
			}

			.header {
				flex: none;
				display: flex;
				background-color: var(--vscode-sideBarSectionHeader-background);
				color: var(--vscode-sideBarSectionHeader-foreground);
				border-top: 1px solid var(--vscode-sideBarSectionHeader-border);
				position: relative;
			}

			.header:focus-within {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.label {
				appearance: none;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				border: none;
				text-align: left;
				font-family: var(--font-family);
				font-size: 1.1rem;
				line-height: 2.2rem;
				height: 2.2rem;
				background: transparent;
				color: inherit;
				outline: none;
				text-overflow: ellipsis;
				user-select: none;
			}

			:host([collapsable]) .label {
				cursor: pointer;
			}

			.title {
				font-weight: bold;
				text-transform: uppercase;
				flex: 1;
				min-width: 0;
				width: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			:host(:not([collapsable])) .title {
				margin-left: 0.8rem;
			}

			.subtitle {
				margin-left: 1rem;
			}

			.subtitle::slotted(*) {
				opacity: 0.6;
			}

			.icon {
				font-weight: normal;
				margin: 0 0.2rem;
			}

			.content {
				flex: 1;
				overflow: auto;
				min-height: 0;
				/*
			scrollbar-gutter: stable;
			box-shadow: #000000 0 0.6rem 0.6rem -0.6rem inset;
			*/
				padding-top: 0.6rem;
			}

			:host([collapsable]:not([expanded])) .content,
			:host([collapsable][expanded='false']) .content {
				display: none;
			}

			slot[name='actions']::slotted(*) {
				flex: none;
				margin-left: auto;
			}
		`],au([iP({type:Boolean,reflect:!0})],af.prototype,"collapsable",2),au([iP({type:Boolean,reflect:!0})],af.prototype,"expanded",2),au([iP({type:Boolean,reflect:!0})],af.prototype,"loading",2),af=au([iA("webview-pane")],af);var ag=Object.defineProperty,am=Object.getOwnPropertyDescriptor,ab=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?am(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&ag(t,r,a),a};let av=class extends GlTreeBase{constructor(){super(),this.explainBusy=!1,this.selectedPatches=[],this._copiedLink=!1,tM(tP,tI,tz,tR,tT)}get cloudDraft(){if(this.state.draft?.draftType==="cloud")return this.state.draft}get isCodeSuggestion(){return this.cloudDraft?.type==="suggested_pr_change"}get canSubmit(){return this.selectedPatches.length>0}updated(e){if(e.has("explain")&&(this.explainBusy=!1,this.querySelector('[data-region="ai-explanation"]')?.scrollIntoView()),e.has("state")){let e=this.state?.draft?.patches;if(e?.length)for(let t of(this.selectedPatches=e.map(e=>e.id),e)){let e=this.selectedPatches.indexOf(t.id);t.repository.located?-1===e&&this.selectedPatches.push(t.id):e>-1&&this.selectedPatches.splice(e,1)}else this.selectedPatches=[]}}renderEmptyContent(){return im`
			<div class="section section--empty" id="empty">
				<button-container>
					<gl-button full href="command:gitlens.openPatch">Open Patch...</gl-button>
				</button-container>
			</div>
		`}renderPatchMessage(){if(this.state?.draft?.title==null)return;let e=this.cloudDraft?.description;if(null!=e)return e=e.trim(),im`
			<div class="message-block">
				<p class="message-block__text scrollable" data-region="message">
					<span>${iW(e)}</span>
				</p>
			</div>
		`}renderExplainAi(){if(this.state?.orgSettings.ai===!1||this.state?.preferences.aiEnabled===!1)return;let e=this.explain?.result!=null?`${this.explain.result.summary}

${this.explain.result.body}`:void 0;return im`
			<webview-pane collapsable data-region="explain-pane">
				<span slot="title">Explain (AI)</span>
				<action-nav slot="actions">
					<action-item
						data-action="switch-ai"
						label="Switch AI Provider/Model"
						icon="arrow-swap"
					></action-item>
				</action-nav>

				<div class="section">
					<p>Let AI assist in understanding the changes made with this patch.</p>
					<p class="button-container">
						<span class="button-group button-group--single">
							<gl-button
								full
								class="button--busy"
								data-action="ai-explain"
								aria-busy="${(this.explainBusy?"true":void 0)??iv}"
								@click=${this.onExplainChanges}
								@keydown=${this.onExplainChanges}
								><code-icon icon="loading" modifier="spin" slot="prefix"></code-icon>Explain
								Changes</gl-button
							>
						</span>
					</p>
					${e?im`<div class="ai-content" data-region="commit-explanation">
								<gl-markdown
									class="ai-content__summary scrollable"
									markdown="${e}"
								></gl-markdown>
							</div>`:this.explain?.error?im`<div class="ai-content has-error" data-region="commit-explanation">
									<p class="ai-content__summary scrollable">
										${this.explain.error.message??"Error retrieving content"}
									</p>
								</div>`:void 0}
				</div>
			</webview-pane>
		`}renderChangedFiles(){let e=this.state?.preferences?.files?.layout??"auto";return im`
			<webview-pane collapsable expanded>
				<span slot="title">Files changed </span>
				<!-- <span slot="subtitle" data-region="stats">\${this.renderCommitStats()}</span> -->
				<action-nav slot="actions">${this.renderLayoutAction(e)}</action-nav>

				${iz(null!=this.validityMessage,()=>im`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`)}
				<div class="change-list" data-region="files">
					${iz(this.state?.draft?.patches==null,()=>this.renderLoading(),()=>this.renderTreeView(this.treeModel,this.state?.preferences?.indentGuides))}
				</div>
			</webview-pane>
		`}get treeModel(){if(this.state?.draft?.patches==null)return[];let{draft:{patches:e}}=this.state,t=this.state?.preferences?.files?.layout??"auto",r=!1,o=tn(e,e=>e?.files?.length??0);return r="auto"===t?o>(this.state.preferences?.files?.threshold??5):"tree"===t,e?.map(e=>this.draftPatchToTreeModel(e,r,this.state.preferences?.files?.compact,{checkable:!0,checked:this.selectedPatches.includes(e.id)}))}renderUserSelection(e,t){if("delete"===e.change)return;let r=e.pendingRole??e.user.role,o=new Map([["owner","owner"],["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),n=o.get(r);return im`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member?.name??e.member?.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					${iz("owner"!==r&&("owner"===t||"admin"===t),()=>im`
							<gk-popover>
								<gk-button slot="trigger"
									>${n} <code-icon icon="chevron-down"></code-icon
								></gk-button>
								<gk-menu>
									${iL(o,([t,o])=>"owner"===t?void 0:im`<gk-menu-item
													@click=${r=>this.onChangeSelectionRole(r,e,t)}
												>
													<code-icon
														icon="check"
														class="user-selection__check ${r===t?"is-active":""}"
													></code-icon>
													${o}
												</gk-menu-item>`)}
								</gk-menu>
							</gk-popover>
						`,()=>im`${n}`)}
				</div>
			</div>
		`}renderUserSelectionList(e,t=!1){if(!e.userSelections?.length)return;let r=e.userSelections;return!1===t&&(r=r.filter(e=>e.user?.role!=="owner")),im`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${iq(r,e=>e.member?.id??e.user?.id,t=>this.renderUserSelection(t,e.role))}
				</div>
			</div>
		`}renderPatchPermissions(){let e=this.cloudDraft;if(null!=e){if("admin"===e.role||"owner"===e.role){let t,r=e.userSelections?.some(e=>void 0!==e.change);switch(e.visibility){case"private":t="organization";break;case"invite_only":t="lock";break;default:t="globe"}return im`
				${iz(!0!==this.isCodeSuggestion,()=>im` <div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${t}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===e.visibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===e.visibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===e.visibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>`)}
				${this.renderUserSelectionList(e)}
				${iz(r,()=>im`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${this.onUpdatePatch}
									>Update Patch</gl-button
								>
							</span>
						</p>
					`)}
			`}return im`
			${iz(!0!==this.isCodeSuggestion,()=>im` <div class="message-input">
						<div class="message-input__control message-input__control--text">
							${iz("public"===e.visibility,()=>im`<code-icon icon="globe"></code-icon> Anyone with the link`)}
							${iz("private"===e.visibility,()=>im`<code-icon icon="organization"></code-icon> Members of my Org with the link`)}
							${iz("invite_only"===e.visibility,()=>im`<code-icon icon="lock"></code-icon> Collaborators only`)}
						</div>
					</div>`)}
			${this.renderUserSelectionList(e,!0)}
		`}}renderCodeSuggectionActions(){if(this.isCodeSuggestion&&null!=this.cloudDraft&&!this.cloudDraft.isArchived&&"viewer"!==this.cloudDraft.role)return im`
			<p class="button-container">
				<span class="button-group button-group--single">
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("accepted")}
						>Accept</gl-button
					>
					<gl-button appearance="secondary" full @click=${()=>this.onArchiveDraft("rejected")}
						>Reject</gl-button
					>
				</span>
			</p>
		`}renderPatches(){return im`
			<div class="section section--action">
				${this.renderPatchPermissions()}
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button full @click=${this.onApplyPatch}>Apply Patch</gl-button>
						<gk-popover placement="top">
							<gl-button
								slot="trigger"
								density="compact"
								aria-label="Apply Patch Options..."
								title="Apply Patch Options..."
								><code-icon icon="chevron-down"></code-icon
							></gl-button>
							<gk-menu class="mine-menu" @select=${this.onSelectApplyOption}>
								<gk-menu-item data-value="branch">Apply to a Branch</gk-menu-item>
								<!-- <gk-menu-item data-value="worktree">Apply to new worktree</gk-menu-item> -->
							</gk-menu>
						</gk-popover>
					</span>
				</p>
				${this.renderCodeSuggectionActions()}
			</div>
		`}renderActionbar(){let e=this.state?.draft;if(null!=e)return"local"===e.draftType?im`
				<div class="top-details__actionbar">
					<div class="top-details__actionbar-group"></div>
					<div class="top-details__actionbar-group">
						<a
							class="commit-action"
							href="#"
							aria-label="Share Patch"
							title="Share Patch"
							@click=${this.onShareLocalPatch}
							>Share</a
						>
					</div>
				</div>
			`:im`
			<div class="top-details__actionbar">
				<div class="top-details__actionbar-group"></div>
				<div class="top-details__actionbar-group">
					<a class="commit-action" href="#" @click=${this.onCopyCloudLink}>
						<code-icon icon="${this._copiedLink?"check":"link"}"></code-icon>
						<span class="top-details__sha">Copy Link</span></a
					>
					${iz(this.cloudDraft?.gkDevLink!=null,()=>im`
							<a class="commit-action" href=${this.cloudDraft.gkDevLink} title="Open on gitkraken.dev">
								<code-icon icon="globe"></code-icon>
							</a>
						`)}
				</div>
			</div>
		`}renderDraftInfo(){let e;if(this.state.draft?.title==null)return iv;if(this.cloudDraft?.isArchived){let t=this.cloudDraft.archivedReason??"archived";e=im`<gl-badge class="title__badge">${t}</gl-badge>`}return im`
			<h1 class="title">${this.state.draft?.title} ${e}</h1>
			${this.renderPatchMessage()}
		`}render(){return this.state?.draft==null?im` <div class="commit-detail-panel scrollable">${this.renderEmptyContent()}</div>`:im`
			<div class="pane-groups">
				<div class="pane-groups__group-fixed">
					<div class="section">${this.renderActionbar()}${this.renderDraftInfo()}</div>
				</div>
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">
					${this.renderExplainAi()}${this.renderPatches()}
				</div>
			</div>
		`}createRenderRoot(){return this}onInviteUsers(e){this.emit("gl-patch-details-invite-users")}onChangeSelectionRole(e,t,r){this.emit("gl-patch-details-update-selection",{selection:t,role:r});let o=e.target?.closest("gk-popover");o?.hidePopover()}onVisibilityChange(e){let t=this.state.draft;t.visibility=e.target.value,this.emit("gl-patch-details-update-metadata",{visibility:t.visibility})}onUpdatePatch(e){this.emit("gl-patch-details-update-permissions")}onExplainChanges(e){if(!0===this.explainBusy||e instanceof KeyboardEvent&&"Enter"!==e.key){e.preventDefault(),e.stopPropagation();return}this.explainBusy=!0}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"apply-patch":this.onApplyPatch();break;case"change-patch-base":this.onChangePatchBase();break;case"show-patch-in-graph":this.onShowInGraph();break;case"file-open":this.onOpenFile(e);break;case"file-compare-working":this.onCompareWorking(e)}}fireFileEvent(e,t,r){let o=new CustomEvent(e,{detail:{...t,showOptions:r}});this.dispatchEvent(o)}onCompareWorking(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-compare-working",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onTreeItemChecked(e){if(!e.detail.context)return;let[t]=e.detail.context,r=this.state.draft?.patches?.find(e=>e.gkRepositoryId===t);if(!r)return;let o=this.selectedPatches.indexOf(r?.id);e.detail.checked?-1===o&&(this.selectedPatches.push(r.id),this.validityMessage=void 0):o>-1&&this.selectedPatches.splice(o,1);let n=new CustomEvent("gl-patch-checked",{detail:{patch:r,checked:e.detail.checked}});this.dispatchEvent(n)}onTreeItemSelected(e){let{node:t,context:r}=e.detail;if(!0===t.branch||null==r)return;let[o]=r;this.emit("gl-patch-file-compare-previous",{...o})}onApplyPatch(e,t="current"){if(!1===this.canSubmit){this.validityMessage="Please select changes to apply";return}this.validityMessage=void 0,this.emit("gl-patch-apply-patch",{draft:this.state.draft,target:t,selectedPatches:this.selectedPatches})}onArchiveDraft(e){this.emit("gl-draft-archive",{reason:e})}onSelectApplyOption(e){if(!1===this.canSubmit){this.validityMessage="Please select changes to apply";return}let t=e.detail?.target;t?.dataset?.value!=null&&this.onApplyPatch(void 0,t.dataset.value)}onChangePatchBase(e){let t=new CustomEvent("change-patch-base",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onSelectPatchRepo(e){let t=new CustomEvent("select-patch-repo",{detail:{draft:this.state.draft}});this.dispatchEvent(t)}onShowInGraph(e){this.emit("gl-patch-details-graph-show-patch",{draft:this.state.draft})}onCopyCloudLink(){this.emit("gl-patch-details-copy-cloud-link",{draft:this.state.draft}),this._copiedLink=!0,setTimeout(()=>this._copiedLink=!1,1e3)}onShareLocalPatch(){this.emit("gl-patch-details-share-local-patch",{draft:this.state.draft})}draftPatchToTreeModel(e,t=!1,r=!0,o){let n=this.repoToTreeModel(e.repository.name,e.gkRepositoryId,o,e.repository.located?void 0:"missing");if(!e.files?.length)return n;let a=[];if(t){let t=iK(e.files,e=>e.path.split("/"),(...e)=>e.join("/"),r);if(null!=t.children)for(let e of t.children.values()){let t=this.walkFileTree(e,{level:2});a.push(t)}}else for(let t of e.files){let e=this.fileToTreeModel(t,{level:2,branch:!1},!0);a.push(e)}return a.length>0&&(n.branch=!0,n.children=a),n}getFileActions(e,t){return[{icon:"go-to-file",label:"Open file",action:"file-open"},{icon:"git-compare",label:"Open Changes with Working File",action:"file-compare-working"}]}};ab([iP({type:Object})],av.prototype,"state",2),ab([iI()],av.prototype,"explainBusy",2),ab([iP({type:Object})],av.prototype,"explain",2),ab([iI()],av.prototype,"selectedPatches",2),ab([iI()],av.prototype,"validityMessage",2),ab([iI()],av.prototype,"_copiedLink",2),av=ab([iA("gl-draft-details")],av);var ay=Object.defineProperty,a_=Object.getOwnPropertyDescriptor,aw=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?a_(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&ay(t,r,a),a};let ak=Object.freeze([["added",["+","add"]],["modified",["~","edit"]],["removed",["-","remove"]]]),ax=class extends lit_element_i{constructor(){super(...arguments),this.added=0,this.modified=0,this.removed=0}render(){return ak.map(([e,t])=>this.renderStat(e,t))}renderStat(e,t){let r=this[e];return null==r?iv:im`<span class="stat ${e}" aria-label="${r} ${e}"
			><span class="label">${this.renderSymbol(t)}${r}</span></span
		>`}renderSymbol([e,t]){return"icons"===this.symbol?im`<code-icon class="icon" icon="${t}"></code-icon>`:im`<span>${e}</span>`}};ax.styles=tU`
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
	`,aw([iP({type:Number})],ax.prototype,"added",2),aw([iP({type:Number})],ax.prototype,"modified",2),aw([iP({type:Number})],ax.prototype,"removed",2),aw([iP()],ax.prototype,"symbol",2),aw([iP({reflect:!0})],ax.prototype,"appearance",2),ax=aw([iA("commit-stats")],ax);var a$=Object.defineProperty,aC=Object.getOwnPropertyDescriptor,aS=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?aC(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&a$(t,r,a),a};let aA=class extends GlTreeBase{constructor(){super(),this.review=!1,this.generateBusy=!1,this.creationBusy=!1,this.onDebounceTitleInput=k(this.onTitleInput,500),this.onDebounceDescriptionInput=k(this.onDescriptionInput,500),tM(tP,tI,tR,tT,tz)}get create(){return this.state.create}get createChanges(){return Object.values(this.create.changes)}get createEntries(){return Object.entries(this.create.changes)}get hasWipChanges(){return this.createChanges.some(e=>e?.type==="wip")}get selectedChanges(){return 1===this.createChanges.length?this.createEntries:this.createEntries.filter(([,e])=>!1!==e.checked)}get canSubmit(){return null!=this.create.title&&this.create.title.length>0&&this.selectedChanges.length>0}get fileLayout(){return this.state?.preferences?.files?.layout??"auto"}get isCompact(){return this.state?.preferences?.files?.compact??!0}get filesModified(){return tn(this.createChanges,e=>e.files?.length??0)}get draftVisibility(){return this.state?.create?.visibility??"public"}updated(e){e.has("state")&&(this.creationBusy=!1),e.has("generate")&&(this.generateBusy=!1,this.generateAiButton.scrollIntoView())}firstUpdated(){window.requestAnimationFrame(()=>{this.titleInput.focus()})}renderUserSelection(e){let t=e.pendingRole,r=new Map([["admin","admin"],["editor","can edit"],["viewer","can view"],["remove","un-invite"]]),o=r.get(t);return im`
			<div class="user-selection">
				<div class="user-selection__avatar">
					<gk-avatar .src=${e.avatarUrl}></gk-avatar>
				</div>
				<div class="user-selection__info">
					<div class="user-selection__name">
						${e.member.name??e.member.username??"Unknown"}
					</div>
				</div>
				<div class="user-selection__actions">
					<gk-popover>
						<gk-button slot="trigger">${o} <code-icon icon="chevron-down"></code-icon></gk-button>
						<gk-menu>
							${iL(r,([r,o])=>im`<gk-menu-item
										@click=${t=>this.onChangeSelectionRole(t,e,r)}
									>
										<code-icon
											icon="check"
											class="user-selection__check ${t===r?"is-active":""}"
										></code-icon>
										${o}
									</gk-menu-item>`)}
						</gk-menu>
					</gk-popover>
				</div>
			</div>
		`}renderUserSelectionList(){if(this.state?.create?.userSelections!=null&&this.state?.create?.userSelections.length!==0)return im`
			<div class="message-input">
				<div class="user-selection-container scrollable">
					${iq(this.state.create.userSelections,e=>e.member.id,e=>this.renderUserSelection(e))}
				</div>
			</div>
		`}renderForm(){let e;switch(this.draftVisibility){case"private":e="organization";break;case"invite_only":e="lock";break;default:e="globe"}let t=this.review?"Code Suggestion":"Cloud Patch",r=this.review?"Code Suggestions":"Cloud Patches";return im`
			<div class="section section--action">
				${iz(this.state?.create?.creationError!=null,()=>im` <div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.state.create.creationError}</p>
						</div>`)}
				${iz(!1===this.review,()=>im`
						<div class="message-input message-input--group">
							<div class="message-input__select">
								<span class="message-input__select-icon"
									><code-icon icon=${e}></code-icon
								></span>
								<select
									id="visibility"
									class="message-input__control"
									@change=${this.onVisibilityChange}
								>
									<option value="public" ?selected=${"public"===this.draftVisibility}>
										Anyone with the link
									</option>
									<option value="private" ?selected=${"private"===this.draftVisibility}>
										Members of my Org with the link
									</option>
									<option value="invite_only" ?selected=${"invite_only"===this.draftVisibility}>
										Collaborators only
									</option>
								</select>
								<span class="message-input__select-caret"
									><code-icon icon="chevron-down"></code-icon
								></span>
							</div>
							<gl-button appearance="secondary" @click=${this.onInviteUsers}
								><code-icon icon="person-add" slot="prefix"></code-icon> Invite</gl-button
							>
						</div>
						${this.renderUserSelectionList()}
					`)}
				<div class="message-input message-input--with-menu">
					<input
						id="title"
						type="text"
						class="message-input__control"
						placeholder="Title (required)"
						maxlength="100"
						.value=${this.create.title??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceTitleInput(e)}
					/>
					${iz(this.state?.orgSettings.ai===!0&&this.state?.preferences.aiEnabled===!0,()=>im`<div class="message-input__menu">
								<gl-button
									id="generate-ai"
									appearance="toolbar"
									density="compact"
									tooltip="Generate Title and Description..."
									@click=${e=>this.onGenerateTitleClick(e)}
									?disabled=${this.generateBusy}
									><code-icon
										icon=${this.generateBusy?"loading":"sparkle"}
										modifier="${this.generateBusy?"spin":""}"
									></code-icon
								></gl-button>
							</div>`)}
				</div>

				${iz(this.generate?.error!=null,()=>im`
						<div class="alert alert--error">
							<code-icon icon="error"></code-icon>
							<p class="alert__content">${this.generate.error.message??"Error retrieving content"}</p>
						</div>
					`)}
				<div class="message-input">
					<textarea
						id="desc"
						class="message-input__control"
						placeholder="Description (optional)"
						maxlength="10000"
						.value=${this.create.description??""}
						?disabled=${this.generateBusy}
						@input=${e=>this.onDebounceDescriptionInput(e)}
					></textarea>
				</div>
				<p class="button-container">
					<span class="button-group button-group--single">
						<gl-button ?disabled=${this.creationBusy} full @click=${e=>this.onCreateAll(e)}
							>Create ${t}</gl-button
						>
					</span>
				</p>
				${iz(!0===this.review,()=>im`
						<p class="button-container">
							<span class="button-group button-group--single">
								<gl-button appearance="secondary" full @click=${()=>this.onCancel()}
									>Cancel</gl-button
								>
							</span>
						</p>
					`)}
				${iz(this.state?.orgSettings.byob===!1,()=>im`<p class="h-deemphasize">
							<code-icon icon="lock"></code-icon>
							<a
								href="${em.cloudPatches}"
								title="Learn more about ${r}"
								aria-label="Learn more about ${r}"
								>${r}</a
							>
							are
							<a
								href="https://help.gitkraken.com/gitlens/security"
								title="Learn more about GitKraken security"
								aria-label="Learn more about GitKraken security"
								>securely stored</a
							>
							by GitKraken.
						</p>`,()=>im`<p class="h-deemphasize">
							<code-icon icon="info"></code-icon>
							Your
							<a
								href="${em.cloudPatches}"
								title="Learn more about ${r}"
								aria-label="Learn more about ${r}"
								>${t}</a
							>
							will be securely stored in your organization's self-hosted storage
						</p>`)}
			</div>
		`}render(){return im`
			<div class="pane-groups">
				<div class="pane-groups__group">${this.renderChangedFiles()}</div>
				<div class="pane-groups__group-fixed pane-groups__group--bottom">${this.renderForm()}</div>
			</div>
		`}renderChangedFiles(){return im`
			<webview-pane class="h-no-border" expanded>
				<span slot="title">${this.review?"Changes to Suggest":"Changes to Include"}</span>
				<action-nav slot="actions">${this.renderLayoutAction(this.fileLayout)}</action-nav>

				${iz(null!=this.validityMessage,()=>im`<div class="section">
							<div class="alert alert--error">
								<code-icon icon="error"></code-icon>
								<p class="alert__content">${this.validityMessage}</p>
							</div>
						</div>`)}
				<div class="change-list" data-region="files">
					${iz(null==this.create.changes,()=>this.renderLoading(),()=>this.renderTreeViewWithModel())}
				</div>
			</webview-pane>
		`}onTreeItemChecked(e){if(null==e.detail.context||e.detail.context.length<1)return;let[t,r]=e.detail.context,o=e.detail.checked;"unstaged"===r&&(o=!!e.detail.checked||"staged");let n=this.getChangeForRepo(t);null==n||n.checked!==o&&(n.checked=o,this.requestUpdate("state"),this.emit("gl-patch-create-repo-checked",{repoUri:t,checked:o}))}onTreeItemSelected(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-compare-previous",{...t})}renderTreeViewWithModel(){if(null==this.createChanges||0===this.createChanges.length)return this.renderTreeView([{label:"No changes",path:"",level:1,branch:!1,checkable:!1,expanded:!0,checked:!1}]);let e=[],t=this.createChanges.length>1,r=this.isTree(this.filesModified??0),o=this.isCompact;if(t)for(let t of this.createChanges){let n=this.getTreeForChange(t,!0,r,o);null!=n&&e.push(...n)}else{let t=this.createChanges[0],n=this.getTreeForChange(t,!1,r,o);null!=n&&e.push(...n)}return this.renderTreeView(e,this.state?.preferences?.indentGuides)}getTreeForChange(e,t=!1,r=!1,o=!0){if(null==e.files||0===e.files.length)return;let n=[];if("wip"===e.type){let a=[],c=[];for(let t of e.files)t.staged?a.push(t):c.push(t);0===a.length||0===c.length?n.push(...this.renderFiles(e.files,r,o,t?2:1)):(c.length&&n.push({label:"Unstaged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!0===e.checked,context:[e.repository.uri,"unstaged"],children:this.renderFiles(c,r,o,t?3:2)}),a.length&&n.push({label:"Staged Changes",path:"",level:t?2:1,branch:!0,checkable:!0,expanded:!0,checked:!1!==e.checked,disableCheck:!0,children:this.renderFiles(a,r,o,t?3:2)}))}else n.push(...this.renderFiles(e.files,r,o));if(!t)return n;let a=this.repoToTreeModel(e.repository.name,e.repository.uri,{branch:!0,checkable:!0,checked:!1!==e.checked});return a.children=n,[a]}isTree(e){return"auto"===this.fileLayout?e>(this.state?.preferences?.files?.threshold??5):"tree"===this.fileLayout}createPatch(){if(!this.canSubmit){0===this.titleInput.value.length?(this.titleInput.setCustomValidity("Title is required"),this.titleInput.reportValidity(),this.titleInput.focus()):this.titleInput.setCustomValidity(""),null==this.selectedChanges||0===this.selectedChanges.length?this.validityMessage="Check at least one change":this.validityMessage=void 0;return}this.validityMessage=void 0,this.titleInput.setCustomValidity("");let e=this.selectedChanges.reduce((e,[t,r])=>(e[t]=r,e),{}),t={title:this.create.title??"",description:this.create.description,changesets:e,visibility:this.create.visibility,userSelections:this.create.userSelections};this.emit("gl-patch-create-patch",t)}onCreateAll(e){this.createPatch(),this.state?.create&&(this.creationBusy=!0)}onSelectCreateOption(e){}getChangeForRepo(e){return this.create.changes[e]}onTitleInput(e){this.create.title=this.titleInput.value,this.fireMetadataUpdate()}onDescriptionInput(e){this.create.description=this.descInput.value,this.fireMetadataUpdate()}onInviteUsers(e){this.emit("gl-patch-create-invite-users")}onChangeSelectionRole(e,t,r){this.emit("gl-patch-create-update-selection",{selection:t,role:r});let o=e.target?.closest("gk-popover");o?.hidePopover()}onVisibilityChange(e){this.create.visibility=e.target.value,this.fireMetadataUpdate()}onGenerateTitleClick(e){this.generateBusy=!0,this.emit("gl-patch-generate-title",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}fireMetadataUpdate(){this.emit("gl-patch-create-update-metadata",{title:this.create.title,description:this.create.description,visibility:this.create.visibility})}createRenderRoot(){return this}onTreeItemActionClicked(e){if(e.detail.context&&e.detail.action)switch(e.detail.action.action){case"show-patch-in-graph":this.onShowInGraph(e);break;case"file-open":this.onOpenFile(e);break;case"file-stage":this.onStageFile(e);break;case"file-unstage":this.onUnstageFile(e)}}onOpenFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-open",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onStageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-stage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onUnstageFile(e){if(!e.detail.context)return;let[t]=e.detail.context;this.emit("gl-patch-file-unstage",{...t,showOptions:{preview:!e.detail.dblClick,viewColumn:e.detail.altKey?-2:void 0}})}onShowInGraph(e){}onCancel(){this.emit("gl-patch-create-cancelled")}getFileActions(e,t){let r={icon:"go-to-file",label:"Open file",action:"file-open"};return this.review?[r]:!0===e.staged?[r,{icon:"remove",label:"Unstage changes",action:"file-unstage"}]:[r,{icon:"plus",label:"Stage changes",action:"file-stage"}]}getRepoActions(e,t,r){return[{icon:"gl-graph",label:"Open in Commit Graph",action:"show-patch-in-graph"}]}};aS([iP({type:Object})],aA.prototype,"state",2),aS([iP({type:Boolean})],aA.prototype,"review",2),aS([iP({type:Object})],aA.prototype,"generate",2),aS([iI()],aA.prototype,"generateBusy",2),aS([iI()],aA.prototype,"creationBusy",2),aS([iT("#title")],aA.prototype,"titleInput",2),aS([iT("#desc")],aA.prototype,"descInput",2),aS([iT("#generate-ai")],aA.prototype,"generateAiButton",2),aS([iI()],aA.prototype,"validityMessage",2),aA=aS([iA("gl-patch-create")],aA);var aE=Object.defineProperty,aP=Object.getOwnPropertyDescriptor,aI=(e,t,r,o)=>{for(var n,a=o>1?void 0:o?aP(t,r):t,c=e.length-1;c>=0;c--)(n=e[c])&&(a=(o?n(t,r,a):n(a))||a);return o&&a&&aE(t,r,a),a};let aR=class extends GlElement{constructor(){super(),this.indentPreference=16,tM(tz,tR,tT)}get wipChangesCount(){return this.state?.create==null?0:Object.values(this.state.create.changes).reduce((e,t)=>e+=t.files?.length??0,0)}get wipChangeState(){if(this.state?.create==null)return;let e=Object.values(this.state.create.changes).reduce((e,t)=>(null!=t.files&&(e.files+=t.files.length,e.on.add(t.repository.uri)),e),{files:0,on:new Set});return{count:e.files,branches:Array.from(e.on).join(", ")}}get mode(){return this.state?.mode??"view"}updateDocumentProperties(){let e=this.state?.preferences?.indent;e===this.indentPreference||(this.indentPreference=e??16,document.documentElement.style.setProperty("--gitlens-tree-indent",`${this.indentPreference}px`))}updated(e){e.has("state")&&this.updateDocumentProperties()}render(){return im`
			<div class="commit-detail-panel scrollable">
				<main id="main" tabindex="-1">
					${iz("view"===this.mode,()=>im`<gl-draft-details .state=${this.state} .explain=${this.explain}></gl-draft-details>`,()=>im`<gl-patch-create .state=${this.state} .generate=${this.generate}></gl-patch-create>`)}
				</main>
			</div>
		`}createRenderRoot(){return this}};aI([iP({type:Object})],aR.prototype,"state",2),aI([iP({type:Object})],aR.prototype,"explain",2),aI([iP({type:Object})],aR.prototype,"generate",2),aI([iP({attribute:!1,type:Object})],aR.prototype,"app",2),aR=aI([iA("gl-patch-details-app")],aR);let aT="0000000000000000000000000000000000000000";let PatchDetailsApp=class PatchDetailsApp extends App{constructor(){super("PatchDetailsApp"),this.debouncedAttachState=k(this.attachState.bind(this),100)}onInitialize(){this.debouncedAttachState()}onBind(){return[m.on("[data-switch-value]","click",e=>this.onToggleFilesLayout(e)),m.on('[data-action="ai-explain"]',"click",e=>this.onAIExplain(e)),m.on('[data-action="switch-ai"]',"click",e=>this.onSwitchAIModel(e)),m.on('[data-action="mode"]',"click",e=>this.onModeClicked(e)),m.on("gl-draft-details","gl-patch-apply-patch",e=>this.onApplyPatch(e.detail)),m.on("gl-draft-details","gl-draft-archive",e=>this.onArchiveDraft(e.detail.reason)),m.on("gl-patch-details-app","change-patch-base",e=>this.onChangePatchBase(e.detail)),m.on("gl-patch-details-app","select-patch-repo",e=>this.onSelectPatchRepo(e.detail)),m.on("gl-patch-details-app","gl-patch-details-graph-show-patch",e=>this.onShowPatchInGraph(e.detail)),m.on("gl-patch-details-app","gl-patch-create-patch",e=>this.onCreatePatch(e.detail)),m.on("gl-patch-details-app","gl-patch-share-local-patch",()=>this.onShareLocalPatch()),m.on("gl-draft-details","gl-patch-details-copy-cloud-link",()=>this.onCopyCloudLink()),m.on("gl-patch-create","gl-patch-create-invite-users",()=>this.onInviteUsers()),m.on("gl-draft-details","gl-patch-details-invite-users",()=>this.onInviteUsers()),m.on("gl-patch-create","gl-patch-create-update-selection",e=>this.onUpdateUserSelection(e.detail)),m.on("gl-draft-details","gl-patch-details-update-selection",e=>this.onUpdateUserSelection(e.detail)),m.on("gl-patch-create","gl-patch-create-repo-checked",e=>this.onCreateCheckRepo(e.detail)),m.on("gl-patch-create","gl-patch-generate-title",e=>this.onCreateGenerateTitle(e.detail)),m.on("gl-patch-create","gl-patch-create-update-metadata",e=>this.onCreateUpdateMetadata(e.detail)),m.on("gl-draft-details","gl-patch-details-update-metadata",e=>this.onDraftUpdateMetadata(e.detail)),m.on("gl-draft-details","gl-patch-details-update-permissions",()=>this.onDraftUpdatePermissions()),m.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-previous",e=>this.onCompareFileWithPrevious(e.detail)),m.on("gl-patch-create,gl-draft-details","gl-patch-file-compare-working",e=>this.onCompareFileWithWorking(e.detail)),m.on("gl-patch-create,gl-draft-details","gl-patch-file-open",e=>this.onOpenFile(e.detail)),m.on("gl-draft-details","gl-patch-checked",e=>this.onPatchChecked(e.detail))]}onMessageReceived(e){switch(!0){case X.is(e):e.params.state,this.state=e.params.state,this.setState(this.state),this.debouncedAttachState();break;case Y.is(e):case J.is(e):case ee.is(e):this.state={...this.state,...e.params},this.setState(this.state),this.debouncedAttachState(!0);break;case ei.is(e):{let t=this.state.draft,r=t.patches,o=r.findIndex(t=>t.id===e.params.patch.id);r.splice(o,1,e.params.patch),this.state={...this.state,draft:t},this.setState(this.state),this.debouncedAttachState(!0);break}default:super.onMessageReceived?.(e)}}onPatchChecked(e){this.sendCommand(E,e)}onCreateCheckRepo(e){this.sendCommand(j,e)}onCreateUpdateMetadata(e){this.sendCommand(H,e)}async onCreateGenerateTitle(e){try{let e=await this.sendRequest(G,void 0);e.error?this.component.generate={error:{message:e.error.message??"Error retrieving content"}}:e.title||e.description?(this.component.generate={title:e.title,description:e.description},this.state={...this.state,create:{...this.state.create,title:e.title??this.state.create?.title,description:e.description??this.state.create?.description}},this.setState(this.state),this.debouncedAttachState()):this.component.generate=void 0}catch{this.component.generate={error:{message:"Error retrieving content"}}}}onDraftUpdateMetadata(e){this.sendCommand(F,e)}onDraftUpdatePermissions(){this.sendCommand(V,void 0)}onShowPatchInGraph(e){}onCreatePatch(e){this.sendCommand(A,e)}onShareLocalPatch(){this.sendCommand(U,void 0)}onCopyCloudLink(){this.sendCommand(B,void 0)}onModeClicked(e){let t=e.target?.dataset.actionValue??void 0;t!==this.state.mode&&this.sendCommand(N,{mode:t})}onApplyPatch(e){null!=e.selectedPatches&&0!==e.selectedPatches.length&&this.sendCommand(C,{details:e.draft,target:e.target??"current",selected:e.selectedPatches})}onArchiveDraft(e){this.sendCommand(S,{reason:e})}onChangePatchBase(e){this.sendCommand(I,void 0)}onSelectPatchRepo(e){this.sendCommand(P,void 0)}onCommandClickedCore(e){let t=e?.startsWith("command:")?e.slice(8):e;null!=t&&this.sendCommand(eo,{command:t})}onSwitchAIModel(e){this.onCommandClickedCore("gitlens.ai.switchProvider")}async onAIExplain(e){try{let e=await this.sendRequest(K,void 0);e.error?this.component.explain={error:{message:e.error.message??"Error retrieving content"}}:this.component.explain=e}catch{this.component.explain={error:{message:"Error retrieving content"}}}}onToggleFilesLayout(e){let t=e.target?.dataset.switchValue??void 0;if(t===this.state.preferences.files?.layout)return;let r={...this.state.preferences.files,layout:t??"auto",compact:this.state.preferences.files?.compact??!0,threshold:this.state.preferences.files?.threshold??5,icon:this.state.preferences.files?.icon??"type"};this.state={...this.state,preferences:{...this.state.preferences,files:r}},this.debouncedAttachState(),this.sendCommand(D,{files:r})}onInviteUsers(){this.sendCommand(q,void 0)}onUpdateUserSelection(e){this.sendCommand(W,e)}onOpenFileOnRemote(e){this.sendCommand(M,e)}onOpenFile(e){this.sendCommand(T,e)}onCompareFileWithWorking(e){this.sendCommand(L,e)}onCompareFileWithPrevious(e){this.sendCommand(O,e)}onFileMoreActions(e){this.sendCommand(R,e)}get component(){return null==this._component&&(this._component=document.getElementById("app"),this._component.app=this),this._component}attachState(e){this.component.state=this.state}};new PatchDetailsApp;export{PatchDetailsApp,aT as uncommittedSha};