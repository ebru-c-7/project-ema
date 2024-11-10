/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,g=f?f.emptyScript:"",m=p.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const r=s?.call(this);n.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s,this[s]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??w)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,m?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,k=x.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+A,R=`<${N}>`,C=document,j=()=>C.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,L="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,T=/>/g,I=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,V=/"/g,U=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),F=new WeakMap,Z=C.createTreeWalker(C,129);function K(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=D;for(let e=0;e<i;e++){const i=t[e];let a,h,c=-1,l=0;for(;l<i.length&&(o.lastIndex=l,h=o.exec(i),null!==h);)l=o.lastIndex,o===D?"!--"===h[1]?o=M:void 0!==h[1]?o=T:void 0!==h[2]?(U.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=I):void 0!==h[3]&&(o=I):o===I?">"===h[0]?(o=n??D,c=-1):void 0===h[1]?c=-2:(c=o.lastIndex-h[2].length,a=h[1],o=void 0===h[3]?I:'"'===h[3]?V:_):o===V||o===_?o=I:o===M||o===T?o=D:(o=I,n=void 0);const d=o===I&&t[e+1].startsWith("/>")?" ":"";r+=o===D?i+R:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+A+d):i+A+(-2===c?e:d)}return[K(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[h,c]=W(t,e);if(this.el=Y.createElement(h,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[r++],i=s.getAttribute(t).split(A),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?Q:"?"===o[1]?tt:"@"===o[1]?et:q}),s.removeAttribute(t)}else t.startsWith(A)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(U.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],j()),Z.nextNode(),a.push({type:2,index:++n});s.append(t[e],j())}}}else if(8===s.nodeType)if(s.data===N)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)a.push({type:7,index:n}),t+=A.length-1}n++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===B)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=P(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=J(t,n._$AS(t,e.values),n,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??C).importNode(e,!0);Z.currentNode=s;let n=Z.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new X(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=Z.nextNode(),r++)}return Z.currentNode=C,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),P(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==z&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Y(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new X(this.O(j()),this.O(j()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=J(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=J(this,s[i+o],e,o),a===B&&(a=this._$AH[o]),r||=!P(a)||a!==this._$AH[o],a===z?t=z:t!==z&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}class tt extends q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}}class et extends q{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??z)===B)return;const i=this._$AH,s=t===z&&i!==z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==z&&(i===z||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=x.litHtmlPolyfillSupport;st?.(Y,X),(x.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let nt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new X(e.insertBefore(j(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const rt=globalThis.litElementPolyfillSupport;function ot(t,e){void 0===e&&(e={});for(var i=function(t){for(var e=[],i=0;i<t.length;){var s=t[i];if("*"!==s&&"+"!==s&&"?"!==s)if("\\"!==s)if("{"!==s)if("}"!==s)if(":"!==s)if("("!==s)e.push({type:"CHAR",index:i,value:t[i++]});else{var n=1,r="";if("?"===t[a=i+1])throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<t.length;)if("\\"!==t[a]){if(")"===t[a]){if(0==--n){a++;break}}else if("("===t[a]&&(n++,"?"!==t[a+1]))throw new TypeError("Capturing groups are not allowed at ".concat(a));r+=t[a++]}else r+=t[a++]+t[a++];if(n)throw new TypeError("Unbalanced pattern at ".concat(i));if(!r)throw new TypeError("Missing pattern at ".concat(i));e.push({type:"PATTERN",index:i,value:r}),i=a}else{for(var o="",a=i+1;a<t.length;){var h=t.charCodeAt(a);if(!(h>=48&&h<=57||h>=65&&h<=90||h>=97&&h<=122||95===h))break;o+=t[a++]}if(!o)throw new TypeError("Missing parameter name at ".concat(i));e.push({type:"NAME",index:i,value:o}),i=a}else e.push({type:"CLOSE",index:i,value:t[i++]});else e.push({type:"OPEN",index:i,value:t[i++]});else e.push({type:"ESCAPED_CHAR",index:i++,value:t[i++]});else e.push({type:"MODIFIER",index:i,value:t[i++]})}return e.push({type:"END",index:i,value:""}),e}(t),s=e.prefixes,n=void 0===s?"./":s,r=e.delimiter,o=void 0===r?"/#?":r,a=[],h=0,c=0,l="",d=function(t){if(c<i.length&&i[c].type===t)return i[c++].value},u=function(t){var e=d(t);if(void 0!==e)return e;var s=i[c],n=s.type,r=s.index;throw new TypeError("Unexpected ".concat(n," at ").concat(r,", expected ").concat(t))},p=function(){for(var t,e="";t=d("CHAR")||d("ESCAPED_CHAR");)e+=t;return e},f=function(t){var e=a[a.length-1],i=t||(e&&"string"==typeof e?e:"");if(e&&!i)throw new TypeError('Must have text between two parameters, missing text after "'.concat(e.name,'"'));return!i||function(t){for(var e=0,i=o;e<i.length;e++){var s=i[e];if(t.indexOf(s)>-1)return!0}return!1}(i)?"[^".concat(ct(o),"]+?"):"(?:(?!".concat(ct(i),")[^").concat(ct(o),"])+?")};c<i.length;){var g=d("CHAR"),m=d("NAME"),v=d("PATTERN");if(m||v){var y=g||"";-1===n.indexOf(y)&&(l+=y,y=""),l&&(a.push(l),l=""),a.push({name:m||h++,prefix:y,suffix:"",pattern:v||f(y),modifier:d("MODIFIER")||""})}else{var w=g||d("ESCAPED_CHAR");if(w)l+=w;else if(l&&(a.push(l),l=""),d("OPEN")){y=p();var b=d("NAME")||"",$=d("PATTERN")||"",x=p();u("CLOSE"),a.push({name:b||($?h++:""),pattern:b&&!$?f(y):$,prefix:y,suffix:x,modifier:d("MODIFIER")||""})}else u("END")}}return a}function at(t,e){return ht(ot(t,e),e)}function ht(t,e){void 0===e&&(e={});var i=lt(e),s=e.encode,n=void 0===s?function(t){return t}:s,r=e.validate,o=void 0===r||r,a=t.map((function(t){if("object"==typeof t)return new RegExp("^(?:".concat(t.pattern,")$"),i)}));return function(e){for(var i="",s=0;s<t.length;s++){var r=t[s];if("string"!=typeof r){var h=e?e[r.name]:void 0,c="?"===r.modifier||"*"===r.modifier,l="*"===r.modifier||"+"===r.modifier;if(Array.isArray(h)){if(!l)throw new TypeError('Expected "'.concat(r.name,'" to not repeat, but got an array'));if(0===h.length){if(c)continue;throw new TypeError('Expected "'.concat(r.name,'" to not be empty'))}for(var d=0;d<h.length;d++){var u=n(h[d],r);if(o&&!a[s].test(u))throw new TypeError('Expected all "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(u,'"'));i+=r.prefix+u+r.suffix}}else if("string"!=typeof h&&"number"!=typeof h){if(!c){var p=l?"an array":"a string";throw new TypeError('Expected "'.concat(r.name,'" to be ').concat(p))}}else{u=n(String(h),r);if(o&&!a[s].test(u))throw new TypeError('Expected "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(u,'"'));i+=r.prefix+u+r.suffix}}else i+=r}return i}}function ct(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function lt(t){return t&&t.sensitive?"":"i"}function dt(t,e,i){return function(t,e,i){void 0===i&&(i={});for(var s=i.strict,n=void 0!==s&&s,r=i.start,o=void 0===r||r,a=i.end,h=void 0===a||a,c=i.encode,l=void 0===c?function(t){return t}:c,d=i.delimiter,u=void 0===d?"/#?":d,p=i.endsWith,f="[".concat(ct(void 0===p?"":p),"]|$"),g="[".concat(ct(u),"]"),m=o?"^":"",v=0,y=t;v<y.length;v++){var w=y[v];if("string"==typeof w)m+=ct(l(w));else{var b=ct(l(w.prefix)),$=ct(l(w.suffix));if(w.pattern)if(e&&e.push(w),b||$)if("+"===w.modifier||"*"===w.modifier){var x="*"===w.modifier?"?":"";m+="(?:".concat(b,"((?:").concat(w.pattern,")(?:").concat($).concat(b,"(?:").concat(w.pattern,"))*)").concat($,")").concat(x)}else m+="(?:".concat(b,"(").concat(w.pattern,")").concat($,")").concat(w.modifier);else{if("+"===w.modifier||"*"===w.modifier)throw new TypeError('Can not repeat "'.concat(w.name,'" without a prefix and suffix'));m+="(".concat(w.pattern,")").concat(w.modifier)}else m+="(?:".concat(b).concat($,")").concat(w.modifier)}}if(h)n||(m+="".concat(g,"?")),m+=i.endsWith?"(?=".concat(f,")"):"$";else{var k=t[t.length-1],E="string"==typeof k?g.indexOf(k[k.length-1])>-1:void 0===k;n||(m+="(?:".concat(g,"(?=").concat(f,"))?")),E||(m+="(?=".concat(g,"|").concat(f,")"))}return new RegExp(m,lt(i))}(ot(t,i),e,i)}function ut(t,e,i){return t instanceof RegExp?function(t,e){if(!e)return t;for(var i=/\((?:\?<(.*?)>)?(?!\?)/g,s=0,n=i.exec(t.source);n;)e.push({name:n[1]||s++,prefix:"",suffix:"",modifier:"",pattern:""}),n=i.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,i){var s=t.map((function(t){return ut(t,e,i).source}));return new RegExp("(?:".concat(s.join("|"),")"),lt(i))}(t,e,i):dt(t,e,i)}function pt(t){return"object"==typeof t&&!!t}function ft(t){return"function"==typeof t}function gt(t){return"string"==typeof t}function mt(t=[]){return Array.isArray(t)?t:[t]}function vt(t){return`[Vaadin.Router] ${t}`}rt?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.1.1");class yt extends Error{code;context;constructor(t){super(vt(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}const wt=Symbol("NotFoundResult");function bt(t){return new yt(t)}function $t(t){return(Array.isArray(t)?t[0]:t)??""}function xt(t){return $t(t?.path)}const kt=new Map;function Et(t){try{return decodeURIComponent(t)}catch{return t}}kt.set("|false",{keys:[],pattern:/(?:)/u});var St=function(t,e,i=!1,s=[],n){const r=`${t}|${String(i)}`,o=$t(e);let a=kt.get(r);if(!a){const e=[];a={keys:e,pattern:ut(t,e,{end:i,strict:""===t})},kt.set(r,a)}const h=a.pattern.exec(o);if(!h)return null;const c={...n};for(let t=1;t<h.length;t++){const e=a.keys[t-1],i=e.name,s=h[t];void 0===s&&Object.hasOwn(c,i)||("+"===e.modifier||"*"===e.modifier?c[i]=s?s.split(/[/?#]/u).map(Et):[]:c[i]=s?Et(s):s)}return{keys:[...s,...a.keys],params:c,path:h[0]}};var At=function t(e,i,s,n,r){let o,a,h=0,c=xt(e);return c.startsWith("/")&&(s&&(c=c.substring(1)),s=!0),{next(l){if(e===l)return{done:!0,value:void 0};e.i??=function(t){return Array.isArray(t)&&t.length>0?t:void 0}(e.children);const d=e.i??[],u=!e.i&&!e.children;if(!o&&(o=St(c,i,u,n,r),o))return{value:{keys:o.keys,params:o.params,path:o.path,route:e}};if(o&&d.length>0)for(;h<d.length;){if(!a){const n=d[h];n.parent=e;let r=o.path.length;r>0&&"/"===i.charAt(r)&&(r+=1),a=t(n,i.substring(r),s,o.keys,o.params)}const n=a.next(l);if(!n.done)return{done:!1,value:n.value};a=null,h+=1}return{done:!0,value:void 0}}}};function Nt(t){if(ft(t.route.action))return t.route.action(t)}class Rt extends Error{code;context;constructor(t,e){let i=`Path '${t.pathname}' is not properly resolved due to an error.`;const s=xt(t.route);s&&(i+=` Resolution had failed on route: '${s}'`),super(i,e),this.code=e?.code,this.context=t}warn(){console.warn(this.message)}}class Ct{baseUrl;#t;errorHandler;resolveRoute;#e;constructor(t,{baseUrl:e="",context:i,errorHandler:s,resolveRoute:n=Nt}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e,this.errorHandler=s,this.resolveRoute=n,Array.isArray(t)?this.#e={i:t,m:!0,action:()=>{},path:""}:this.#e={...t,parent:void 0},this.#t={...i,hash:"",next:async()=>wt,params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#t}get v(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.i??[]]}removeRoutes(){this.#e.i=[]}async resolve(t){const e=this,i={...this.#t,...gt(t)?{pathname:t}:t,next:h},s=At(this.#e,this.S(i.pathname)??i.pathname,!!this.baseUrl),n=this.resolveRoute;let r=null,o=null,a=i;async function h(t=!1,c=r?.value?.route,l){const d=null===l?r?.value?.route:void 0;if(r=o??s.next(d),o=null,!t&&(r.done||!function(t,e){let i=t;for(;i;)if(i=i.parent,i===e)return!0;return!1}(r.value.route,c)))return o=r,wt;if(r.done)throw bt(i);a={...i,params:r.value.params,route:r.value.route,chain:a.chain?.slice()},function(t,e){const{path:i,route:s}=e;if(s&&!s.m){const e={path:i,route:s};if(s.parent&&t.chain)for(let e=t.chain.length-1;e>=0&&t.chain[e].route!==s.parent;e--)t.chain.pop();t.chain?.push(e)}}(a,r.value);const u=await n(a);return null!=u&&u!==wt?(a.result=(p=u)&&"object"==typeof p&&"next"in p&&"params"in p&&"result"in p&&"route"in p?u.result:u,e.#t=a,a):await h(t,c,u);var p}try{return await h(!0,this.#e)}catch(t){const e=t instanceof yt?t:new Rt(a,{code:500,cause:t});if(this.errorHandler)return a.result=this.errorHandler(e),a;throw t}}setRoutes(t){this.#e.i=[...mt(t)]}S(t){if(!this.baseUrl)return t;const e=this.v,i=t.startsWith("/")?new URL(e).origin+t:`./${t}`,s=new URL(i,e).href;return s.startsWith(e)?s.slice(e.length):void 0}addRoutes(t){return this.#e.i=[...this.#e.i??[],...mt(t)],this.getRoutes()}}function jt(t,e,i,s){const n=e.name??s?.(e);if(n&&(t.has(n)?t.get(n)?.push(e):t.set(n,[e])),Array.isArray(i))for(const n of i)n.parent=e,jt(t,n,n.i??n.children,s)}function Pt(t,e){const i=t.get(e);if(i){if(i.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return i[0]}}var Ot=function(t,e={}){if(!(t instanceof Ct))throw new TypeError("An instance of Resolver is expected");const i=new Map,s=new Map;return(n,r)=>{let o=Pt(s,n);if(!o&&(s.clear(),jt(s,t.root,t.root.i,e.cacheKeyProvider),o=Pt(s,n),!o))throw new Error(`Route "${n}" not found`);let a=o.fullPath?i.get(o.fullPath):void 0;if(!a){let t=xt(o),e=o.parent;for(;e;){const i=xt(e);i&&(t=`${i.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`),e=e.parent}const s=ot(t),n=Object.create(null);for(const t of s)gt(t)||(n[t.name]=!0);a={keys:n,tokens:s},i.set(t,a),o.fullPath=t}let h=ht(a.tokens,{encode:encodeURIComponent,...e})(r)||"/";if(e.stringifyQueryParams&&r){const t={};for(const[e,i]of Object.entries(r))!(e in a.keys)&&i&&(t[e]=i);const i=e.stringifyQueryParams(t);i&&(h+=i.startsWith("?")?i:`?${i}`)}return h}};const Lt=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Dt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Mt(t,e){if("function"!=typeof t)return;const i=Lt.exec(t.toString());if(i)try{t=new Function(i[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const Tt=function(t,e){if(window.Vaadin.developmentMode)return Mt(t,e)};function It(){
/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Dt?!(Dt&&Object.keys(Dt).map((t=>Dt[t])).filter((t=>t.productionMode)).length>0):!Mt((function(){return!0})))}catch(t){return!1}}());!function(t,e=(window.Vaadin??={})){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}(),Tt(It);var _t=async function(t,e){return t.classList.add(e),await new Promise((i=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const s=t.getBoundingClientRect(),n=`height: ${s.bottom-s.top}px; width: ${s.right-s.left}px`;t.setAttribute("style",`position: absolute; ${n}`),((t,e)=>{const i=()=>{t.removeEventListener("animationend",i),e()};t.addEventListener("animationend",i)})(t,(()=>{t.classList.remove(e),t.removeAttribute("style"),i()}))}else t.classList.remove(e),i()}))};function Vt(t){if(!t||!gt(t.path))throw new Error(vt('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!(ft(t.action)||Array.isArray(t.children)||ft(t.children)||gt(t.component)||gt(t.redirect)))throw new Error(vt(`Expected route config "${t.path}" to include either "component, redirect" or "action" function but none found.`));t.redirect&&["bundle","component"].forEach((e=>{e in t&&console.warn(vt(`Route config "${String(t.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))}))}function Ut(t){mt(t).forEach((t=>Vt(t)))}function Ht(t,e){const i=e.v;return i?new URL(t.replace(/^\//u,""),i).pathname:t}function Bt(t){return t.map((t=>t.path)).reduce(((t,e)=>e.length?`${t.replace(/\/$/u,"")}/${e.replace(/^\//u,"")}`:t),"")}function zt({chain:t=[],hash:e="",params:i={},pathname:s="",redirectFrom:n,resolver:r,search:o=""},a){const h=t.map((t=>t.route));return{baseUrl:r?.baseUrl??"",getUrl:(e={})=>r?Ht(at(function(t){return Bt(t.map((t=>t.route)))}(t))({...i,...e}),r):"",hash:e,params:i,pathname:s,redirectFrom:n,route:a??(Array.isArray(h)?h.at(-1):void 0)??null,routes:h,search:o,searchParams:new URLSearchParams(o)}}function Ft(t,e){const i={...t.params};return{redirect:{from:t.pathname,params:i,pathname:e}}}function Zt(t,e,...i){if("function"==typeof t)return t.apply(e,i)}function Kt(t,e,...i){return s=>s&&pt(s)&&("cancel"in s||"redirect"in s)?s:Zt(e?.[t],e,...i)}function Wt(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:"go"===t,detail:e}))}function Yt(t){if(t instanceof Element)return t.nodeName.toLowerCase()}function Jt(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const i=t instanceof MouseEvent?t.composedPath():t.path??[];for(let t=0;t<i.length;t++){const s=i[t];if("nodeName"in s&&"a"===s.nodeName.toLowerCase()){e=s;break}}for(;e&&e instanceof Node&&"a"!==Yt(e);)e=e.parentNode;if(!e||"a"!==Yt(e))return;const s=e;if(s.target&&"_self"!==s.target.toLowerCase())return;if(s.hasAttribute("download"))return;if(s.hasAttribute("router-ignore"))return;if(s.pathname===window.location.pathname&&""!==s.hash)return;const n=s.origin||function(t){const{port:e,protocol:i}=t;return`${i}//${"http:"===i&&"80"===e||"https:"===i&&"443"===e?t.hostname:t.host}`}(s);if(n!==window.location.origin)return;const{hash:r,pathname:o,search:a}=s;Wt("go",{hash:r,pathname:o,search:a})&&t instanceof MouseEvent&&(t.preventDefault(),"click"===t.type&&window.scrollTo(0,0))}function Gt(t){if("vaadin-router-ignore"===t.state)return;const{hash:e,pathname:i,search:s}=window.location;Wt("go",{hash:e,pathname:i,search:s})}let Xt=[];const qt={CLICK:{activate(){window.document.addEventListener("click",Jt)},inactivate(){window.document.removeEventListener("click",Jt)}},POPSTATE:{activate(){window.addEventListener("popstate",Gt)},inactivate(){window.removeEventListener("popstate",Gt)}}};function Qt(t=[]){Xt.forEach((t=>t.inactivate())),t.forEach((t=>t.activate())),Xt=t}function te(){return{cancel:!0}}const ee={A:-1,params:{},route:{m:!0,children:[],path:"",action(){}},pathname:"",next:async()=>wt};class ie extends Ct{location=zt({resolver:this});ready=Promise.resolve(this.location);#i=new WeakSet;#s=new WeakSet;#n=this.#r.bind(this);#o=0;#a;N;#h;#c=null;#l=null;constructor(t,e){const i=document.head.querySelector("base"),s=i?.getAttribute("href");super([],{baseUrl:s?new URL(s,document.URL).href.replace(/[^/]*$/u,""):void 0,...e,resolveRoute:async t=>await this.#d(t)}),Qt(Object.values(qt)),this.setOutlet(t),this.subscribe()}async#d(t){const{route:e}=t;if(ft(e.children)){let i=await e.children(function({next:t,...e}){return e}(t));ft(e.children)||({children:i}=e),function(t,e){if(!Array.isArray(t)&&!pt(t))throw new Error(vt(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(t)}`));const i=mt(t);i.forEach((t=>Vt(t))),e.i=i}(i,e)}const i={component:t=>{const e=document.createElement(t);return this.#s.add(e),e},prevent:te,redirect:e=>Ft(t,e)};return await Promise.resolve().then((async()=>{if(this.#u(t))return await Zt(e.action,e,t,i)})).then((t=>null==t||"object"!=typeof t&&"symbol"!=typeof t||!(t instanceof HTMLElement||t===wt||pt(t)&&"redirect"in t)?gt(e.redirect)?i.redirect(e.redirect):void 0:t)).then((t=>null!=t?t:gt(e.component)?i.component(e.component):void 0))}setOutlet(t){t&&this.#p(t),this.#a=t}getOutlet(){return this.#a}async setRoutes(t,e=!1){return this.N=void 0,this.#h=void 0,Ut(t),super.setRoutes(t),e||this.#r(),await this.ready}addRoutes(t){return Ut(t),super.addRoutes(t)}async render(t,e=!1){this.#o+=1;const i=this.#o,s={...ee,...gt(t)?{hash:"",search:"",pathname:t}:t,A:i};return this.ready=this.#f(s,e),await this.ready}async#f(t,e){const{A:i}=t;try{const s=await this.resolve(t),n=await this.#g(s);if(!this.#u(n))return this.location;const r=this.N;if(n===r)return this.#m(r,!0),this.location;if(this.location=zt(n),e&&this.#m(n,1===i),Wt("location-changed",{router:this,location:this.location}),n.R)return this.#v(n,r),this.N=n,this.location;this.#y(n,r);const o=this.#w(n);if(this.#b(n),this.#$(n,r),await o,this.#u(n))return this.#x(),this.N=n,this.location}catch(s){if(i===this.#o){e&&this.#m(this.context);for(const t of this.#a?.children??[])t.remove();throw this.location=zt(Object.assign(t,{resolver:this})),Wt("error",{router:this,error:s,...t}),s}}return this.location}async#g(t,e=t){const i=await this.#k(e),s=i!==e?i:t,n=Ht(Bt(i.chain??[]),this)===i.pathname,r=async(t,e=t.route,i)=>{const s=await t.next(!1,e,i);return null===s||s===wt?n?t:null!=e.parent?await r(t,e.parent,s):s:s},o=await r(i);if(null==o||o===wt)throw bt(s);return o!==i?await this.#g(s,o):await this.#E(i)}async#k(t){const{result:e}=t;if(e instanceof HTMLElement)return function(t,e){if(e.location=zt(t),t.chain){const i=t.chain.map((t=>t.route)).indexOf(t.route);t.chain[i].element=e}}(t,e),t;if(e&&"redirect"in e){const i=await this.#S(e.redirect,t.C,t.A);return await this.#k(i)}throw e instanceof Error?e:new Error(vt(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const[e="Unknown"]=/ (.*)\]$/u.exec(String(t))??[];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`))}async#E(t){return await this.#A(t).then((async e=>e===this.N||e===t?e:await this.#g(e)))}async#A(t){const e=this.N??{},i=e.chain??[],s=t.chain??[];let n=Promise.resolve(void 0);const r=e=>Ft(t,e);if(t.L=0,t.R=!1,i.length){for(let e=0;e<Math.min(i.length,s.length)&&(i[e].route===s[e].route&&(i[e].path===s[e].path||i[e].element===s[e].element)&&this.#N(i[e].element,s[e].element));t.L++,e++);if(t.R=s.length===i.length&&t.L===s.length&&this.#N(t.result,e.result),t.R){for(let e=s.length-1;e>=0;e--)n=this.#R(n,t,{prevent:te},i[e]);for(let e=0;e<s.length;e++)n=this.#C(n,t,{prevent:te,redirect:r},s[e]),i[e].element.location=zt(t,i[e].route)}else for(let e=i.length-1;e>=t.L;e--)n=this.#R(n,t,{prevent:te},i[e])}if(!t.R)for(let e=0;e<s.length;e++)e<t.L?e<i.length&&i[e].element&&(i[e].element.location=zt(t,i[e].route)):(n=this.#C(n,t,{prevent:te,redirect:r},s[e]),s[e].element&&(s[e].element.location=zt(t,s[e].route)));return await n.then((async e=>{if(e&&pt(e)){if("cancel"in e&&this.N)return this.N.A=t.A,this.N;if("redirect"in e)return await this.#S(e.redirect,t.C,t.A)}return t}))}async#R(t,e,i,s){const n=zt(e);let r=await t;if(this.#u(e)){r=Kt("onBeforeLeave",s.element,n,i,this)(r)}if(!pt(r)||!("redirect"in r))return r}async#C(t,e,i,s){const n=zt(e,s.route),r=await t;if(this.#u(e)){return Kt("onBeforeEnter",s.element,n,i,this)(r)}}#N(t,e){return t instanceof Element&&e instanceof Element&&(this.#s.has(t)&&this.#s.has(e)?t.localName===e.localName:t===e)}#u(t){return t.A===this.#o}async#S(t,e=0,i=0){if(e>256)throw new Error(vt(`Too many redirects when rendering ${t.from}`));return await this.resolve({...ee,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,C:e+1,A:i})}#p(t=this.#a){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(vt(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#m({pathname:t,search:e="",hash:i=""},s){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==i){const n=s?"replaceState":"pushState";window.history[n](null,document.title,t+e+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#v(t,e){let i=this.#a;for(let s=0;s<(t.L??0);s++){const n=e?.chain?.[s].element;if(n){if(n.parentNode!==i)break;t.chain[s].element=n,i=n}}return i}#y(t,e){this.#p(),this.#j();const i=this.#v(t,e);this.#c=[],this.#l=Array.from(i?.children??[]).filter((e=>this.#i.has(e)&&e!==t.result));let s=i;for(let e=t.L??0;e<(t.chain?.length??0);e++){const n=t.chain[e].element;n&&(s?.appendChild(n),this.#i.add(n),s===i&&this.#c.push(n),s=n)}}#x(){if(this.#l)for(const t of this.#l)t.remove();this.#l=null,this.#c=null}#j(){if(this.#l&&this.#c){for(const t of this.#c)t.remove();this.#l=null,this.#c=null}}#$(t,e){if(e?.chain&&null!=t.L)for(let i=e.chain.length-1;i>=t.L&&this.#u(t);i--){const s=e.chain[i].element;if(s)try{const e=zt(t);Zt(s.onAfterLeave,s,e,{},this)}finally{if(this.#l?.includes(s))for(const t of s.children)t.remove()}}}#b(t){if(t.chain&&null!=t.L)for(let e=t.L;e<t.chain.length&&this.#u(t);e++){const i=t.chain[e].element;if(i){const s=zt(t,t.chain[e].route);Zt(i.onAfterEnter,i,s,{},this)}}}async#w(t){const e=this.#l?.[0],i=this.#c?.[0],s=[],{chain:n=[]}=t;let r;for(let t=n.length-1;t>=0;t--)if(n[t].route.animate){r=n[t].route.animate;break}if(e&&i&&r){const t=pt(r)&&r.leave?r.leave:"leaving",n=pt(r)&&r.enter?r.enter:"entering";s.push(_t(e,t)),s.push(_t(i,n))}return await Promise.all(s),t}subscribe(){window.addEventListener("vaadin-router-go",this.#n)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#n)}#r(t){const{pathname:e,search:i,hash:s}=t instanceof CustomEvent?t.detail:window.location;gt(this.S(e))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:e,search:i,hash:s},!0))}static setTriggers(...t){Qt(t)}urlForName(t,e){return this.#h||(this.#h=Ot(this,{cacheKeyProvider:t=>"component"in t&&"string"==typeof t.component?t.component:void 0})),Ht(this.#h(t,e??void 0),this)}urlForPath(t,e){return Ht(at(t)(e??void 0),this)}static go(t){const{pathname:e,search:i,hash:s}=gt(t)?new URL(t,"http://a"):t;return Wt("go",{pathname:e,search:i,hash:s})}}function se(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var ne=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),re=()=>Math.random().toString(36).substring(7).split("").join("."),oe={INIT:`@@redux/INIT${re()}`,REPLACE:`@@redux/REPLACE${re()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${re()}`};function ae(t){if(void 0===t)return"undefined";if(null===t)return"null";const e=typeof t;switch(e){case"boolean":case"string":case"number":case"symbol":case"function":return e}if(Array.isArray(t))return"array";if(function(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}(t))return"date";if(function(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}(t))return"error";const i=function(t){return"function"==typeof t.constructor?t.constructor.name:null}(t);switch(i){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return i}return Object.prototype.toString.call(t).slice(8,-1).toLowerCase().replace(/\s/g,"")}function he(t){let e=typeof t;return"production"!==process.env.NODE_ENV&&(e=ae(t)),e}const ce={data:[]};const le=function(t,e){if("function"!=typeof t)throw new Error("production"===process.env.NODE_ENV?se(2):`Expected the root reducer to be a function. Instead, received: '${he(t)}'`);let i=t,s=e,n=new Map,r=n,o=0,a=!1;function h(){r===n&&(r=new Map,n.forEach(((t,e)=>{r.set(e,t)})))}function c(){if(a)throw new Error("production"===process.env.NODE_ENV?se(3):"You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function l(t){if("function"!=typeof t)throw new Error("production"===process.env.NODE_ENV?se(4):`Expected the listener to be a function. Instead, received: '${he(t)}'`);if(a)throw new Error("production"===process.env.NODE_ENV?se(5):"You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");let e=!0;h();const i=o++;return r.set(i,t),function(){if(e){if(a)throw new Error("production"===process.env.NODE_ENV?se(6):"You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");e=!1,h(),r.delete(i),n=null}}}function d(t){if(!function(t){if("object"!=typeof t||null===t)return!1;let e=t;for(;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||null===Object.getPrototypeOf(t)}(t))throw new Error("production"===process.env.NODE_ENV?se(7):`Actions must be plain objects. Instead, the actual type was: '${he(t)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);if(void 0===t.type)throw new Error("production"===process.env.NODE_ENV?se(8):'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');if("string"!=typeof t.type)throw new Error("production"===process.env.NODE_ENV?se(17):`Action "type" property must be a string. Instead, the actual type was: '${he(t.type)}'. Value was: '${t.type}' (stringified)`);if(a)throw new Error("production"===process.env.NODE_ENV?se(9):"Reducers may not dispatch actions.");try{a=!0,s=i(s,t)}finally{a=!1}return(n=r).forEach((t=>{t()})),t}return d({type:oe.INIT}),{dispatch:d,subscribe:l,getState:c,replaceReducer:function(t){if("function"!=typeof t)throw new Error("production"===process.env.NODE_ENV?se(10):`Expected the nextReducer to be a function. Instead, received: '${he(t)}`);i=t,d({type:oe.REPLACE})},[ne]:function(){const t=l;return{subscribe(e){if("object"!=typeof e||null===e)throw new Error("production"===process.env.NODE_ENV?se(11):`Expected the observer to be an object. Instead, received: '${he(e)}'`);function i(){const t=e;t.next&&t.next(c())}i();return{unsubscribe:t(i)}},[ne](){return this}}}}}((function(t=ce,e){switch(e.type){case"INITIAL":return{...t,data:[...e.payload]};case"DELETE":const i=t.data.filter((t=>e.payload!==t._id));return{...t,data:i};case"ADD_NEW":const s=[e.payload,...t.data];return{...t,data:s};case"EDIT_DATA":const n=t.data.findIndex((t=>t._id===e.payload._id));if(n<0)return t;const r=[...t.data];return r[n]={...e.payload},{...t,data:r};default:return t}}));class de extends nt{constructor(){super(),this.unsubscribe=le.subscribe((()=>{this.stateUpdated()}))}stateUpdated(){}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe()}}const ue=t=>"string"==typeof t,pe=()=>{let t,e;const i=new Promise(((i,s)=>{t=i,e=s}));return i.resolve=t,i.reject=e,i},fe=t=>null==t?"":""+t,ge=/###/g,me=t=>t&&t.indexOf("###")>-1?t.replace(ge,"."):t,ve=t=>!t||ue(t),ye=(t,e,i)=>{const s=ue(e)?e.split("."):e;let n=0;for(;n<s.length-1;){if(ve(t))return{};const e=me(s[n]);!t[e]&&i&&(t[e]=new i),t=Object.prototype.hasOwnProperty.call(t,e)?t[e]:{},++n}return ve(t)?{}:{obj:t,k:me(s[n])}},we=(t,e,i)=>{const{obj:s,k:n}=ye(t,e,Object);if(void 0!==s||1===e.length)return void(s[n]=i);let r=e[e.length-1],o=e.slice(0,e.length-1),a=ye(t,o,Object);for(;void 0===a.obj&&o.length;)r=`${o[o.length-1]}.${r}`,o=o.slice(0,o.length-1),a=ye(t,o,Object),a&&a.obj&&void 0!==a.obj[`${a.k}.${r}`]&&(a.obj=void 0);a.obj[`${a.k}.${r}`]=i},be=(t,e)=>{const{obj:i,k:s}=ye(t,e);if(i)return i[s]},$e=(t,e,i)=>{for(const s in e)"__proto__"!==s&&"constructor"!==s&&(s in t?ue(t[s])||t[s]instanceof String||ue(e[s])||e[s]instanceof String?i&&(t[s]=e[s]):$e(t[s],e[s],i):t[s]=e[s]);return t},xe=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var ke={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Ee=t=>ue(t)?t.replace(/[&<>"'\/]/g,(t=>ke[t])):t;const Se=[" ",",","?","!",";"],Ae=new class{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const e=this.regExpMap.get(t);if(void 0!==e)return e;const i=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,i),this.regExpQueue.push(t),i}}(20),Ne=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!t)return;if(t[e])return t[e];const s=e.split(i);let n=t;for(let t=0;t<s.length;){if(!n||"object"!=typeof n)return;let e,r="";for(let o=t;o<s.length;++o)if(o!==t&&(r+=i),r+=s[o],e=n[r],void 0!==e){if(["string","number","boolean"].indexOf(typeof e)>-1&&o<s.length-1)continue;t+=o-t+1;break}n=e}return n},Re=t=>t&&t.replace("_","-"),Ce={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class je{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(t,e)}init(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=e.prefix||"i18next:",this.logger=t||Ce,this.options=e,this.debug=e.debug}log(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"log","",!0)}warn(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"warn","",!0)}error(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"error","")}deprecate(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(t,e,i,s){return s&&!this.debug?null:(ue(t[0])&&(t[0]=`${i}${this.prefix} ${t[0]}`),this.logger[e](t))}create(t){return new je(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return(t=t||this.options).prefix=t.prefix||this.prefix,new je(this.logger,t)}}var Pe=new je;class Oe{constructor(){this.observers={}}on(t,e){return t.split(" ").forEach((t=>{this.observers[t]||(this.observers[t]=new Map);const i=this.observers[t].get(e)||0;this.observers[t].set(e,i+1)})),this}off(t,e){this.observers[t]&&(e?this.observers[t].delete(e):delete this.observers[t])}emit(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];if(this.observers[t]){Array.from(this.observers[t].entries()).forEach((t=>{let[e,s]=t;for(let t=0;t<s;t++)e(...i)}))}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach((e=>{let[s,n]=e;for(let e=0;e<n;e++)s.apply(s,[t,...i])}))}}}class Le extends Oe{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=e,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)}getResource(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const n=void 0!==s.keySeparator?s.keySeparator:this.options.keySeparator,r=void 0!==s.ignoreJSONStructure?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;t.indexOf(".")>-1?o=t.split("."):(o=[t,e],i&&(Array.isArray(i)?o.push(...i):ue(i)&&n?o.push(...i.split(n)):o.push(i)));const a=be(this.data,o);return!a&&!e&&!i&&t.indexOf(".")>-1&&(t=o[0],e=o[1],i=o.slice(2).join(".")),!a&&r&&ue(i)?Ne(this.data&&this.data[t]&&this.data[t][e],i,n):a}addResource(t,e,i,s){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator;let o=[t,e];i&&(o=o.concat(r?i.split(r):i)),t.indexOf(".")>-1&&(o=t.split("."),s=e,e=o[1]),this.addNamespaces(e),we(this.data,o,s),n.silent||this.emit("added",t,e,i,s)}addResources(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const s in i)(ue(i[s])||Array.isArray(i[s]))&&this.addResource(t,e,s,i[s],{silent:!0});s.silent||this.emit("added",t,e,i)}addResourceBundle(t,e,i,s,n){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},o=[t,e];t.indexOf(".")>-1&&(o=t.split("."),s=i,i=e,e=o[1]),this.addNamespaces(e);let a=be(this.data,o)||{};r.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?$e(a,i,n):a={...a,...i},we(this.data,o,a),r.silent||this.emit("added",t,e,i)}removeResourceBundle(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)}hasResourceBundle(t,e){return void 0!==this.getResource(t,e)}getResourceBundle(t,e){return e||(e=this.options.defaultNS),"v1"===this.options.compatibilityAPI?{...this.getResource(t,e)}:this.getResource(t,e)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const e=this.getDataByLanguage(t);return!!(e&&Object.keys(e)||[]).find((t=>e[t]&&Object.keys(e[t]).length>0))}toJSON(){return this.data}}var De={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,s,n){return t.forEach((t=>{this.processors[t]&&(e=this.processors[t].process(e,i,s,n))})),e}};const Me={};class Te extends Oe{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),((t,e,i)=>{t.forEach((t=>{e[t]&&(i[t]=e[t])}))})(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=e,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=Pe.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==t)return!1;const i=this.resolve(t,e);return i&&void 0!==i.res}extractFromKey(t,e){let i=void 0!==e.nsSeparator?e.nsSeparator:this.options.nsSeparator;void 0===i&&(i=":");const s=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator;let n=e.ns||this.options.defaultNS||[];const r=i&&t.indexOf(i)>-1,o=!(this.options.userDefinedKeySeparator||e.keySeparator||this.options.userDefinedNsSeparator||e.nsSeparator||((t,e,i)=>{e=e||"",i=i||"";const s=Se.filter((t=>e.indexOf(t)<0&&i.indexOf(t)<0));if(0===s.length)return!0;const n=Ae.getRegExp(`(${s.map((t=>"?"===t?"\\?":t)).join("|")})`);let r=!n.test(t);if(!r){const e=t.indexOf(i);e>0&&!n.test(t.substring(0,e))&&(r=!0)}return r})(t,i,s));if(r&&!o){const e=t.match(this.interpolator.nestingRegexp);if(e&&e.length>0)return{key:t,namespaces:ue(n)?[n]:n};const r=t.split(i);(i!==s||i===s&&this.options.ns.indexOf(r[0])>-1)&&(n=r.shift()),t=r.join(s)}return{key:t,namespaces:ue(n)?[n]:n}}translate(t,e,i){if("object"!=typeof e&&this.options.overloadTranslationOptionHandler&&(e=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof e&&(e={...e}),e||(e={}),null==t)return"";Array.isArray(t)||(t=[String(t)]);const s=void 0!==e.returnDetails?e.returnDetails:this.options.returnDetails,n=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator,{key:r,namespaces:o}=this.extractFromKey(t[t.length-1],e),a=o[o.length-1],h=e.lng||this.language,c=e.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(h&&"cimode"===h.toLowerCase()){if(c){const t=e.nsSeparator||this.options.nsSeparator;return s?{res:`${a}${t}${r}`,usedKey:r,exactUsedKey:r,usedLng:h,usedNS:a,usedParams:this.getUsedParamsDetails(e)}:`${a}${t}${r}`}return s?{res:r,usedKey:r,exactUsedKey:r,usedLng:h,usedNS:a,usedParams:this.getUsedParamsDetails(e)}:r}const l=this.resolve(t,e);let d=l&&l.res;const u=l&&l.usedKey||r,p=l&&l.exactUsedKey||r,f=Object.prototype.toString.apply(d),g=void 0!==e.joinArrays?e.joinArrays:this.options.joinArrays,m=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!ue(d)&&"boolean"!=typeof d&&"number"!=typeof d;if(!(m&&d&&v&&["[object Number]","[object Function]","[object RegExp]"].indexOf(f)<0)||ue(g)&&Array.isArray(d))if(m&&ue(g)&&Array.isArray(d))d=d.join(g),d&&(d=this.extendTranslation(d,t,e,i));else{let s=!1,o=!1;const c=void 0!==e.count&&!ue(e.count),u=Te.hasDefaultValue(e),p=c?this.pluralResolver.getSuffix(h,e.count,e):"",f=e.ordinal&&c?this.pluralResolver.getSuffix(h,e.count,{ordinal:!1}):"",g=c&&!e.ordinal&&0===e.count&&this.pluralResolver.shouldUseIntlApi(),m=g&&e[`defaultValue${this.options.pluralSeparator}zero`]||e[`defaultValue${p}`]||e[`defaultValue${f}`]||e.defaultValue;!this.isValidLookup(d)&&u&&(s=!0,d=m),this.isValidLookup(d)||(o=!0,d=r);const v=(e.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&o?void 0:d,y=u&&m!==d&&this.options.updateMissing;if(o||s||y){if(this.logger.log(y?"updateKey":"missingKey",h,a,r,y?m:d),n){const t=this.resolve(r,{...e,keySeparator:!1});t&&t.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let t=[];const i=this.languageUtils.getFallbackCodes(this.options.fallbackLng,e.lng||this.language);if("fallback"===this.options.saveMissingTo&&i&&i[0])for(let e=0;e<i.length;e++)t.push(i[e]);else"all"===this.options.saveMissingTo?t=this.languageUtils.toResolveHierarchy(e.lng||this.language):t.push(e.lng||this.language);const s=(t,i,s)=>{const n=u&&s!==d?s:v;this.options.missingKeyHandler?this.options.missingKeyHandler(t,a,i,n,y,e):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(t,a,i,n,y,e),this.emit("missingKey",t,a,i,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&c?t.forEach((t=>{const i=this.pluralResolver.getSuffixes(t,e);g&&e[`defaultValue${this.options.pluralSeparator}zero`]&&i.indexOf(`${this.options.pluralSeparator}zero`)<0&&i.push(`${this.options.pluralSeparator}zero`),i.forEach((i=>{s([t],r+i,e[`defaultValue${i}`]||m)}))})):s(t,r,m))}d=this.extendTranslation(d,t,e,l,i),o&&d===r&&this.options.appendNamespaceToMissingKey&&(d=`${a}:${r}`),(o||s)&&this.options.parseMissingKeyHandler&&(d="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${a}:${r}`:r,s?d:void 0):this.options.parseMissingKeyHandler(d))}else{if(!e.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const t=this.options.returnedObjectHandler?this.options.returnedObjectHandler(u,d,{...e,ns:o}):`key '${r} (${this.language})' returned an object instead of string.`;return s?(l.res=t,l.usedParams=this.getUsedParamsDetails(e),l):t}if(n){const t=Array.isArray(d),i=t?[]:{},s=t?p:u;for(const t in d)if(Object.prototype.hasOwnProperty.call(d,t)){const r=`${s}${n}${t}`;i[t]=this.translate(r,{...e,joinArrays:!1,ns:o}),i[t]===r&&(i[t]=d[t])}d=i}}return s?(l.res=d,l.usedParams=this.getUsedParamsDetails(e),l):d}extendTranslation(t,e,i,s,n){var r=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const o=ue(t)&&(i&&i.interpolation&&void 0!==i.interpolation.skipOnVariables?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let a;if(o){const e=t.match(this.interpolator.nestingRegexp);a=e&&e.length}let h=i.replace&&!ue(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),t=this.interpolator.interpolate(t,h,i.lng||this.language||s.usedLng,i),o){const e=t.match(this.interpolator.nestingRegexp);a<(e&&e.length)&&(i.nest=!1)}!i.lng&&"v1"!==this.options.compatibilityAPI&&s&&s.res&&(i.lng=this.language||s.usedLng),!1!==i.nest&&(t=this.interpolator.nest(t,(function(){for(var t=arguments.length,s=new Array(t),o=0;o<t;o++)s[o]=arguments[o];return n&&n[0]===s[0]&&!i.context?(r.logger.warn(`It seems you are nesting recursively key: ${s[0]} in key: ${e[0]}`),null):r.translate(...s,e)}),i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,a=ue(o)?[o]:o;return null!=t&&a&&a.length&&!1!==i.applyPostProcessor&&(t=De.handle(a,t,e,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),t}resolve(t){let e,i,s,n,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return ue(t)&&(t=[t]),t.forEach((t=>{if(this.isValidLookup(e))return;const a=this.extractFromKey(t,o),h=a.key;i=h;let c=a.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const l=void 0!==o.count&&!ue(o.count),d=l&&!o.ordinal&&0===o.count&&this.pluralResolver.shouldUseIntlApi(),u=void 0!==o.context&&(ue(o.context)||"number"==typeof o.context)&&""!==o.context,p=o.lngs?o.lngs:this.languageUtils.toResolveHierarchy(o.lng||this.language,o.fallbackLng);c.forEach((t=>{this.isValidLookup(e)||(r=t,!Me[`${p[0]}-${t}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(r)&&(Me[`${p[0]}-${t}`]=!0,this.logger.warn(`key "${i}" for languages "${p.join(", ")}" won't get resolved as namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach((i=>{if(this.isValidLookup(e))return;n=i;const r=[h];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(r,h,i,t,o);else{let t;l&&(t=this.pluralResolver.getSuffix(i,o.count,o));const e=`${this.options.pluralSeparator}zero`,s=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(l&&(r.push(h+t),o.ordinal&&0===t.indexOf(s)&&r.push(h+t.replace(s,this.options.pluralSeparator)),d&&r.push(h+e)),u){const i=`${h}${this.options.contextSeparator}${o.context}`;r.push(i),l&&(r.push(i+t),o.ordinal&&0===t.indexOf(s)&&r.push(i+t.replace(s,this.options.pluralSeparator)),d&&r.push(i+e))}}let a;for(;a=r.pop();)this.isValidLookup(e)||(s=a,e=this.getResource(i,t,a,o))})))}))})),{res:e,usedKey:i,exactUsedKey:s,usedLng:n,usedNS:r}}isValidLookup(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)}getResource(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,e,i,s):this.resourceStore.getResource(t,e,i,s)}getUsedParamsDetails(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=t.replace&&!ue(t.replace);let s=i?t.replace:t;if(i&&void 0!==t.count&&(s.count=t.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const t of e)delete s[t]}return s}static hasDefaultValue(t){const e="defaultValue";for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&e===i.substring(0,12)&&void 0!==t[i])return!0;return!1}}const Ie=t=>t.charAt(0).toUpperCase()+t.slice(1);class _e{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Pe.create("languageUtils")}getScriptPartFromCode(t){if(!(t=Re(t))||t.indexOf("-")<0)return null;const e=t.split("-");return 2===e.length?null:(e.pop(),"x"===e[e.length-1].toLowerCase()?null:this.formatLanguageCode(e.join("-")))}getLanguagePartFromCode(t){if(!(t=Re(t))||t.indexOf("-")<0)return t;const e=t.split("-");return this.formatLanguageCode(e[0])}formatLanguageCode(t){if(ue(t)&&t.indexOf("-")>-1){if("undefined"!=typeof Intl&&void 0!==Intl.getCanonicalLocales)try{let e=Intl.getCanonicalLocales(t)[0];if(e&&this.options.lowerCaseLng&&(e=e.toLowerCase()),e)return e}catch(t){}const e=["hans","hant","latn","cyrl","cans","mong","arab"];let i=t.split("-");return this.options.lowerCaseLng?i=i.map((t=>t.toLowerCase())):2===i.length?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),e.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ie(i[1].toLowerCase()))):3===i.length&&(i[0]=i[0].toLowerCase(),2===i[1].length&&(i[1]=i[1].toUpperCase()),"sgn"!==i[0]&&2===i[2].length&&(i[2]=i[2].toUpperCase()),e.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ie(i[1].toLowerCase())),e.indexOf(i[2].toLowerCase())>-1&&(i[2]=Ie(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let e;return t.forEach((t=>{if(e)return;const i=this.formatLanguageCode(t);this.options.supportedLngs&&!this.isSupportedCode(i)||(e=i)})),!e&&this.options.supportedLngs&&t.forEach((t=>{if(e)return;const i=this.getLanguagePartFromCode(t);if(this.isSupportedCode(i))return e=i;e=this.options.supportedLngs.find((t=>t===i?t:t.indexOf("-")<0&&i.indexOf("-")<0?void 0:t.indexOf("-")>0&&i.indexOf("-")<0&&t.substring(0,t.indexOf("-"))===i||0===t.indexOf(i)&&i.length>1?t:void 0))})),e||(e=this.getFallbackCodes(this.options.fallbackLng)[0]),e}getFallbackCodes(t,e){if(!t)return[];if("function"==typeof t&&(t=t(e)),ue(t)&&(t=[t]),Array.isArray(t))return t;if(!e)return t.default||[];let i=t[e];return i||(i=t[this.getScriptPartFromCode(e)]),i||(i=t[this.formatLanguageCode(e)]),i||(i=t[this.getLanguagePartFromCode(e)]),i||(i=t.default),i||[]}toResolveHierarchy(t,e){const i=this.getFallbackCodes(e||this.options.fallbackLng||[],t),s=[],n=t=>{t&&(this.isSupportedCode(t)?s.push(t):this.logger.warn(`rejecting language code not found in supportedLngs: ${t}`))};return ue(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?("languageOnly"!==this.options.load&&n(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&n(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&n(this.getLanguagePartFromCode(t))):ue(t)&&n(this.formatLanguageCode(t)),i.forEach((t=>{s.indexOf(t)<0&&n(this.formatLanguageCode(t))})),s}}let Ve=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Ue={1:t=>Number(t>1),2:t=>Number(1!=t),3:t=>0,4:t=>Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2),5:t=>Number(0==t?0:1==t?1:2==t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5),6:t=>Number(1==t?0:t>=2&&t<=4?1:2),7:t=>Number(1==t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2),8:t=>Number(1==t?0:2==t?1:8!=t&&11!=t?2:3),9:t=>Number(t>=2),10:t=>Number(1==t?0:2==t?1:t<7?2:t<11?3:4),11:t=>Number(1==t||11==t?0:2==t||12==t?1:t>2&&t<20?2:3),12:t=>Number(t%10!=1||t%100==11),13:t=>Number(0!==t),14:t=>Number(1==t?0:2==t?1:3==t?2:3),15:t=>Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2),16:t=>Number(t%10==1&&t%100!=11?0:0!==t?1:2),17:t=>Number(1==t||t%10==1&&t%100!=11?0:1),18:t=>Number(0==t?0:1==t?1:2),19:t=>Number(1==t?0:0==t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3),20:t=>Number(1==t?0:0==t||t%100>0&&t%100<20?1:2),21:t=>Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0),22:t=>Number(1==t?0:2==t?1:(t<0||t>10)&&t%10==0?2:3)};const He=["v1","v2","v3"],Be=["v4"],ze={zero:0,one:1,two:2,few:3,many:4,other:5};class Fe{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=t,this.options=e,this.logger=Pe.create("pluralResolver"),this.options.compatibilityJSON&&!Be.includes(this.options.compatibilityJSON)||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=(()=>{const t={};return Ve.forEach((e=>{e.lngs.forEach((i=>{t[i]={numbers:e.nr,plurals:Ue[e.fc]}}))})),t})(),this.pluralRulesCache={}}addRule(t,e){this.rules[t]=e}clearCache(){this.pluralRulesCache={}}getRule(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{const i=Re("dev"===t?"en":t),s=e.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:i,type:s});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];const r=new Intl.PluralRules(i,{type:s});return this.pluralRulesCache[n]=r,r}catch(t){return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getRule(t,e);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(t,i).map((t=>`${e}${t}`))}getSuffixes(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getRule(t,e);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort(((t,e)=>ze[t]-ze[e])).map((t=>`${this.options.prepend}${e.ordinal?`ordinal${this.options.prepend}`:""}${t}`)):i.numbers.map((i=>this.getSuffix(t,i,e))):[]}getSuffix(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=this.getRule(t,i);return s?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(e)}`:this.getSuffixRetroCompatible(s,e):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,e){const i=t.noAbs?t.plurals(e):t.plurals(Math.abs(e));let s=t.numbers[i];this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]&&(2===s?s="plural":1===s&&(s=""));const n=()=>this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString();return"v1"===this.options.compatibilityJSON?1===s?"":"number"==typeof s?`_plural_${s.toString()}`:n():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]?n():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!He.includes(this.options.compatibilityJSON)}}const Ze=function(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=((t,e,i)=>{const s=be(t,i);return void 0!==s?s:be(e,i)})(t,e,i);return!r&&n&&ue(i)&&(r=Ne(t,i,s),void 0===r&&(r=Ne(e,i,s))),r},Ke=t=>t.replace(/\$/g,"$$$$");class We{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=Pe.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(t=>t),this.init(t)}init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:e,escapeValue:i,useRawValueToEscape:s,prefix:n,prefixEscaped:r,suffix:o,suffixEscaped:a,formatSeparator:h,unescapeSuffix:c,unescapePrefix:l,nestingPrefix:d,nestingPrefixEscaped:u,nestingSuffix:p,nestingSuffixEscaped:f,nestingOptionsSeparator:g,maxReplaces:m,alwaysFormat:v}=t.interpolation;this.escape=void 0!==e?e:Ee,this.escapeValue=void 0===i||i,this.useRawValueToEscape=void 0!==s&&s,this.prefix=n?xe(n):r||"{{",this.suffix=o?xe(o):a||"}}",this.formatSeparator=h||",",this.unescapePrefix=c?"":l||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=d?xe(d):u||xe("$t("),this.nestingSuffix=p?xe(p):f||xe(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=m||1e3,this.alwaysFormat=void 0!==v&&v,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(t,e)=>t&&t.source===e?(t.lastIndex=0,t):new RegExp(e,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,e,i,s){let n,r,o;const a=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},h=t=>{if(t.indexOf(this.formatSeparator)<0){const n=Ze(e,a,t,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(n,void 0,i,{...s,...e,interpolationkey:t}):n}const n=t.split(this.formatSeparator),r=n.shift().trim(),o=n.join(this.formatSeparator).trim();return this.format(Ze(e,a,r,this.options.keySeparator,this.options.ignoreJSONStructure),o,i,{...s,...e,interpolationkey:r})};this.resetRegExp();const c=s&&s.missingInterpolationHandler||this.options.missingInterpolationHandler,l=s&&s.interpolation&&void 0!==s.interpolation.skipOnVariables?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:t=>Ke(t)},{regex:this.regexp,safeValue:t=>this.escapeValue?Ke(this.escape(t)):Ke(t)}].forEach((e=>{for(o=0;n=e.regex.exec(t);){const i=n[1].trim();if(r=h(i),void 0===r)if("function"==typeof c){const e=c(t,n,s);r=ue(e)?e:""}else if(s&&Object.prototype.hasOwnProperty.call(s,i))r="";else{if(l){r=n[0];continue}this.logger.warn(`missed to pass in variable ${i} for interpolating ${t}`),r=""}else ue(r)||this.useRawValueToEscape||(r=fe(r));const a=e.safeValue(r);if(t=t.replace(n[0],a),l?(e.regex.lastIndex+=r.length,e.regex.lastIndex-=n[0].length):e.regex.lastIndex=0,o++,o>=this.maxReplaces)break}})),t}nest(t,e){let i,s,n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=(t,e)=>{const i=this.nestingOptionsSeparator;if(t.indexOf(i)<0)return t;const s=t.split(new RegExp(`${i}[ ]*{`));let r=`{${s[1]}`;t=s[0],r=this.interpolate(r,n);const o=r.match(/'/g),a=r.match(/"/g);(o&&o.length%2==0&&!a||a.length%2!=0)&&(r=r.replace(/'/g,'"'));try{n=JSON.parse(r),e&&(n={...e,...n})}catch(e){return this.logger.warn(`failed parsing options string in nesting for key ${t}`,e),`${t}${i}${r}`}return n.defaultValue&&n.defaultValue.indexOf(this.prefix)>-1&&delete n.defaultValue,t};for(;i=this.nestingRegexp.exec(t);){let a=[];n={...r},n=n.replace&&!ue(n.replace)?n.replace:n,n.applyPostProcessor=!1,delete n.defaultValue;let h=!1;if(-1!==i[0].indexOf(this.formatSeparator)&&!/{.*}/.test(i[1])){const t=i[1].split(this.formatSeparator).map((t=>t.trim()));i[1]=t.shift(),a=t,h=!0}if(s=e(o.call(this,i[1].trim(),n),n),s&&i[0]===t&&!ue(s))return s;ue(s)||(s=fe(s)),s||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),s=""),h&&(s=a.reduce(((t,e)=>this.format(t,e,r.lng,{...r,interpolationkey:i[1].trim()})),s.trim())),t=t.replace(i[0],s),this.regexp.lastIndex=0}return t}}const Ye=t=>{const e={};return(i,s,n)=>{let r=n;n&&n.interpolationkey&&n.formatParams&&n.formatParams[n.interpolationkey]&&n[n.interpolationkey]&&(r={...r,[n.interpolationkey]:void 0});const o=s+JSON.stringify(r);let a=e[o];return a||(a=t(Re(s),n),e[o]=a),a(i)}};class Je{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=Pe.create("formatter"),this.options=t,this.formats={number:Ye(((t,e)=>{const i=new Intl.NumberFormat(t,{...e});return t=>i.format(t)})),currency:Ye(((t,e)=>{const i=new Intl.NumberFormat(t,{...e,style:"currency"});return t=>i.format(t)})),datetime:Ye(((t,e)=>{const i=new Intl.DateTimeFormat(t,{...e});return t=>i.format(t)})),relativetime:Ye(((t,e)=>{const i=new Intl.RelativeTimeFormat(t,{...e});return t=>i.format(t,e.range||"day")})),list:Ye(((t,e)=>{const i=new Intl.ListFormat(t,{...e});return t=>i.format(t)}))},this.init(t)}init(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=e.interpolation.formatSeparator||","}add(t,e){this.formats[t.toLowerCase().trim()]=e}addCached(t,e){this.formats[t.toLowerCase().trim()]=Ye(e)}format(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const n=e.split(this.formatSeparator);if(n.length>1&&n[0].indexOf("(")>1&&n[0].indexOf(")")<0&&n.find((t=>t.indexOf(")")>-1))){const t=n.findIndex((t=>t.indexOf(")")>-1));n[0]=[n[0],...n.splice(1,t)].join(this.formatSeparator)}const r=n.reduce(((t,e)=>{const{formatName:n,formatOptions:r}=(t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const s=t.split("(");e=s[0].toLowerCase().trim();const n=s[1].substring(0,s[1].length-1);"currency"===e&&n.indexOf(":")<0?i.currency||(i.currency=n.trim()):"relativetime"===e&&n.indexOf(":")<0?i.range||(i.range=n.trim()):n.split(";").forEach((t=>{if(t){const[e,...s]=t.split(":"),n=s.join(":").trim().replace(/^'+|'+$/g,""),r=e.trim();i[r]||(i[r]=n),"false"===n&&(i[r]=!1),"true"===n&&(i[r]=!0),isNaN(n)||(i[r]=parseInt(n,10))}}))}return{formatName:e,formatOptions:i}})(e);if(this.formats[n]){let e=t;try{const o=s&&s.formatParams&&s.formatParams[s.interpolationkey]||{},a=o.locale||o.lng||s.locale||s.lng||i;e=this.formats[n](t,a,{...r,...s,...o})}catch(t){this.logger.warn(t)}return e}return this.logger.warn(`there was no format function for ${n}`),t}),t);return r}}class Ge extends Oe{constructor(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=t,this.store=e,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=Pe.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,s.backend,s)}queueLoad(t,e,i,s){const n={},r={},o={},a={};return t.forEach((t=>{let s=!0;e.forEach((e=>{const o=`${t}|${e}`;!i.reload&&this.store.hasResourceBundle(t,e)?this.state[o]=2:this.state[o]<0||(1===this.state[o]?void 0===r[o]&&(r[o]=!0):(this.state[o]=1,s=!1,void 0===r[o]&&(r[o]=!0),void 0===n[o]&&(n[o]=!0),void 0===a[e]&&(a[e]=!0)))})),s||(o[t]=!0)})),(Object.keys(n).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(n),pending:Object.keys(r),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(a)}}loaded(t,e,i){const s=t.split("|"),n=s[0],r=s[1];e&&this.emit("failedLoading",n,r,e),!e&&i&&this.store.addResourceBundle(n,r,i,void 0,void 0,{skipCopy:!0}),this.state[t]=e?-1:2,e&&i&&(this.state[t]=0);const o={};this.queue.forEach((i=>{((t,e,i)=>{const{obj:s,k:n}=ye(t,e,Object);s[n]=s[n]||[],s[n].push(i)})(i.loaded,[n],r),((t,e)=>{void 0!==t.pending[e]&&(delete t.pending[e],t.pendingCount--)})(i,t),e&&i.errors.push(e),0!==i.pendingCount||i.done||(Object.keys(i.loaded).forEach((t=>{o[t]||(o[t]={});const e=i.loaded[t];e.length&&e.forEach((e=>{void 0===o[t][e]&&(o[t][e]=!0)}))})),i.done=!0,i.errors.length?i.callback(i.errors):i.callback())})),this.emit("loaded",o),this.queue=this.queue.filter((t=>!t.done))}read(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,r=arguments.length>5?arguments[5]:void 0;if(!t.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:t,ns:e,fcName:i,tried:s,wait:n,callback:r});this.readingCalls++;const o=(o,a)=>{if(this.readingCalls--,this.waitingReads.length>0){const t=this.waitingReads.shift();this.read(t.lng,t.ns,t.fcName,t.tried,t.wait,t.callback)}o&&a&&s<this.maxRetries?setTimeout((()=>{this.read.call(this,t,e,i,s+1,2*n,r)}),n):r(o,a)},a=this.backend[i].bind(this.backend);if(2!==a.length)return a(t,e,o);try{const i=a(t,e);i&&"function"==typeof i.then?i.then((t=>o(null,t))).catch(o):o(null,i)}catch(t){o(t)}}prepareLoading(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();ue(t)&&(t=this.languageUtils.toResolveHierarchy(t)),ue(e)&&(e=[e]);const n=this.queueLoad(t,e,i,s);if(!n.toLoad.length)return n.pending.length||s(),null;n.toLoad.forEach((t=>{this.loadOne(t)}))}load(t,e,i){this.prepareLoading(t,e,{},i)}reload(t,e,i){this.prepareLoading(t,e,{reload:!0},i)}loadOne(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const i=t.split("|"),s=i[0],n=i[1];this.read(s,n,"read",void 0,void 0,((i,r)=>{i&&this.logger.warn(`${e}loading namespace ${n} for language ${s} failed`,i),!i&&r&&this.logger.log(`${e}loaded namespace ${n} for language ${s}`,r),this.loaded(t,i,r)}))}saveMissing(t,e,i,s,n){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(e))this.logger.warn(`did not save key "${i}" as the namespace "${e}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=i&&""!==i){if(this.backend&&this.backend.create){const a={...r,isUpdate:n},h=this.backend.create.bind(this.backend);if(h.length<6)try{let n;n=5===h.length?h(t,e,i,s,a):h(t,e,i,s),n&&"function"==typeof n.then?n.then((t=>o(null,t))).catch(o):o(null,n)}catch(t){o(t)}else h(t,e,i,s,o,a)}t&&t[0]&&this.store.addResource(t[0],e,i,s)}}}const Xe=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if("object"==typeof t[1]&&(e=t[1]),ue(t[1])&&(e.defaultValue=t[1]),ue(t[2])&&(e.tDescription=t[2]),"object"==typeof t[2]||"object"==typeof t[3]){const i=t[3]||t[2];Object.keys(i).forEach((t=>{e[t]=i[t]}))}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),qe=t=>(ue(t.ns)&&(t.ns=[t.ns]),ue(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),ue(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Qe=()=>{};class ti extends Oe{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;var i;if(super(),this.options=qe(t),this.services={},this.logger=Pe,this.modules={external:[]},i=this,Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t=>{"function"==typeof i[t]&&(i[t]=i[t].bind(i))})),e&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,e),this;setTimeout((()=>{this.init(t,e)}),0)}}init(){var t=this;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"==typeof e&&(i=e,e={}),!e.defaultNS&&!1!==e.defaultNS&&e.ns&&(ue(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const s=Xe();this.options={...s,...this.options,...qe(e)},"v1"!==this.options.compatibilityAPI&&(this.options.interpolation={...s.interpolation,...this.options.interpolation}),void 0!==e.keySeparator&&(this.options.userDefinedKeySeparator=e.keySeparator),void 0!==e.nsSeparator&&(this.options.userDefinedNsSeparator=e.nsSeparator);const n=t=>t?"function"==typeof t?new t:t:null;if(!this.options.isClone){let e;this.modules.logger?Pe.init(n(this.modules.logger),this.options):Pe.init(null,this.options),this.modules.formatter?e=this.modules.formatter:"undefined"!=typeof Intl&&(e=Je);const i=new _e(this.options);this.store=new Le(this.options.resources,this.options);const r=this.services;r.logger=Pe,r.resourceStore=this.store,r.languageUtils=i,r.pluralResolver=new Fe(i,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!e||this.options.interpolation.format&&this.options.interpolation.format!==s.interpolation.format||(r.formatter=n(e),r.formatter.init(r,this.options),this.options.interpolation.format=r.formatter.format.bind(r.formatter)),r.interpolator=new We(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},r.backendConnector=new Ge(n(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.on("*",(function(e){for(var i=arguments.length,s=new Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];t.emit(e,...s)})),this.modules.languageDetector&&(r.languageDetector=n(this.modules.languageDetector),r.languageDetector.init&&r.languageDetector.init(r,this.options.detection,this.options)),this.modules.i18nFormat&&(r.i18nFormat=n(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new Te(this.services,this.options),this.translator.on("*",(function(e){for(var i=arguments.length,s=new Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];t.emit(e,...s)})),this.modules.external.forEach((t=>{t.init&&t.init(this)}))}if(this.format=this.options.interpolation.format,i||(i=Qe),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const t=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);t.length>0&&"dev"!==t[0]&&(this.options.lng=t[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((e=>{this[e]=function(){return t.store[e](...arguments)}}));["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((e=>{this[e]=function(){return t.store[e](...arguments),t}}));const r=pe(),o=()=>{const t=(t,e)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),r.resolve(e),i(t,e)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return t(null,this.t.bind(this));this.changeLanguage(this.options.lng,t)};return this.options.resources||!this.options.initImmediate?o():setTimeout(o,0),r}loadResources(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Qe;const i=ue(t)?t:this.language;if("function"==typeof t&&(e=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&"cimode"===i.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return e();const t=[],s=e=>{if(!e)return;if("cimode"===e)return;this.services.languageUtils.toResolveHierarchy(e).forEach((e=>{"cimode"!==e&&t.indexOf(e)<0&&t.push(e)}))};if(i)s(i);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((t=>s(t)))}this.options.preload&&this.options.preload.forEach((t=>s(t))),this.services.backendConnector.load(t,this.options.ns,(t=>{t||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),e(t)}))}else e(null)}reloadResources(t,e,i){const s=pe();return"function"==typeof t&&(i=t,t=void 0),"function"==typeof e&&(i=e,e=void 0),t||(t=this.languages),e||(e=this.options.ns),i||(i=Qe),this.services.backendConnector.reload(t,e,(t=>{s.resolve(),i(t)})),s}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===t.type&&(this.modules.backend=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"i18nFormat"===t.type&&(this.modules.i18nFormat=t),"postProcessor"===t.type&&De.addPostProcessor(t),"formatter"===t.type&&(this.modules.formatter=t),"3rdParty"===t.type&&this.modules.external.push(t),this}setResolvedLanguage(t){if(t&&this.languages&&!(["cimode","dev"].indexOf(t)>-1))for(let t=0;t<this.languages.length;t++){const e=this.languages[t];if(!(["cimode","dev"].indexOf(e)>-1)&&this.store.hasLanguageSomeTranslations(e)){this.resolvedLanguage=e;break}}}changeLanguage(t,e){var i=this;this.isLanguageChangingTo=t;const s=pe();this.emit("languageChanging",t);const n=t=>{this.language=t,this.languages=this.services.languageUtils.toResolveHierarchy(t),this.resolvedLanguage=void 0,this.setResolvedLanguage(t)},r=(t,r)=>{r?(n(r),this.translator.changeLanguage(r),this.isLanguageChangingTo=void 0,this.emit("languageChanged",r),this.logger.log("languageChanged",r)):this.isLanguageChangingTo=void 0,s.resolve((function(){return i.t(...arguments)})),e&&e(t,(function(){return i.t(...arguments)}))},o=e=>{t||e||!this.services.languageDetector||(e=[]);const i=ue(e)?e:this.services.languageUtils.getBestMatchFromCodes(e);i&&(this.language||n(i),this.translator.language||this.translator.changeLanguage(i),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(i)),this.loadResources(i,(t=>{r(t,i)}))};return t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(t):o(this.services.languageDetector.detect()),s}getFixedT(t,e,i){var s=this;const n=function(t,e){let r;if("object"!=typeof e){for(var o=arguments.length,a=new Array(o>2?o-2:0),h=2;h<o;h++)a[h-2]=arguments[h];r=s.options.overloadTranslationOptionHandler([t,e].concat(a))}else r={...e};r.lng=r.lng||n.lng,r.lngs=r.lngs||n.lngs,r.ns=r.ns||n.ns,""!==r.keyPrefix&&(r.keyPrefix=r.keyPrefix||i||n.keyPrefix);const c=s.options.keySeparator||".";let l;return l=r.keyPrefix&&Array.isArray(t)?t.map((t=>`${r.keyPrefix}${c}${t}`)):r.keyPrefix?`${r.keyPrefix}${c}${t}`:t,s.t(l,r)};return ue(t)?n.lng=t:n.lngs=t,n.ns=e,n.keyPrefix=i,n}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=e.lng||this.resolvedLanguage||this.languages[0],s=!!this.options&&this.options.fallbackLng,n=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;const r=(t,e)=>{const i=this.services.backendConnector.state[`${t}|${e}`];return-1===i||0===i||2===i};if(e.precheck){const t=e.precheck(this,r);if(void 0!==t)return t}return!!this.hasResourceBundle(i,t)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!r(i,t)||s&&!r(n,t)))}loadNamespaces(t,e){const i=pe();return this.options.ns?(ue(t)&&(t=[t]),t.forEach((t=>{this.options.ns.indexOf(t)<0&&this.options.ns.push(t)})),this.loadResources((t=>{i.resolve(),e&&e(t)})),i):(e&&e(),Promise.resolve())}loadLanguages(t,e){const i=pe();ue(t)&&(t=[t]);const s=this.options.preload||[],n=t.filter((t=>s.indexOf(t)<0&&this.services.languageUtils.isSupportedCode(t)));return n.length?(this.options.preload=s.concat(n),this.loadResources((t=>{i.resolve(),e&&e(t)})),i):(e&&e(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const e=this.services&&this.services.languageUtils||new _e(Xe());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(e.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new ti(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Qe;const i=t.forkResourceStore;i&&delete t.forkResourceStore;const s={...this.options,...t,isClone:!0},n=new ti(s);void 0===t.debug&&void 0===t.prefix||(n.logger=n.logger.clone(t));return["store","services","language"].forEach((t=>{n[t]=this[t]})),n.services={...this.services},n.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},i&&(n.store=new Le(this.store.data,s),n.services.resourceStore=n.store),n.translator=new Te(n.services,s),n.translator.on("*",(function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];n.emit(t,...i)})),n.init(s,e),n.translator.options=s,n.translator.backendConnector.services.utils={hasLoadedNamespace:n.hasLoadedNamespace.bind(n)},n}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ei=ti.createInstance();ei.createInstance=ti.createInstance,ei.createInstance,ei.dir,ei.init,ei.loadResources,ei.reloadResources,ei.use,ei.changeLanguage,ei.getFixedT,ei.t,ei.exists,ei.setDefaultNamespace,ei.hasLoadedNamespace,ei.loadNamespaces,ei.loadLanguages;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ii=1,si=2,ni=3,ri=4,oi=5,ai=6;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hi{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),ci(t,e);return!0},li=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},di=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),fi(e)}};function ui(t){void 0!==this._$AN?(li(this),this._$AM=t,di(this)):this._$AM=t}function pi(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)ci(s[t],!1),li(s[t]);else null!=s&&(ci(s,!1),li(s));else ci(this,t)}const fi=t=>{t.type==si&&(t._$AP??=pi,t._$AQ??=ui)};class gi extends hi{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),di(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(ci(this,t),li(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}let mi=null,vi=()=>{};const yi=new Promise((t=>{vi=t})),wi={type:"3rdParty",init(t){bi(t)}},bi=t=>{mi=t,vi(mi)},$i=new Map;setInterval((()=>{$i.forEach(((t,e)=>{!1!==e.isConnected&&!1!==Si(e)||$i.delete(e)}))}),1e4);let xi=!1;const ki=()=>{$i.forEach(((t,e)=>{if(e.isConnected&&Si(e)){const i=Ei(t.keys,t.options);e.setValue(i)}}))};function Ei(t,e){if(!mi)return"";!1===xi&&(mi.on("languageChanged",ki),mi.store.on("added",ki),xi=!0);const i=mi.t(t,e);return"string"==typeof i?i:""}const Si=t=>{const e=t.part;if(e.type===ii)return e.element.isConnected;if(e.type===si)return!!e.parentNode&&e.parentNode.isConnected;if(e.type===ni)return e.element.isConnected;if(e.type===ri)return e.element.isConnected;if(e.type===oi)return e.element.isConnected;if(e.type===ai)return e.element.isConnected;throw new Error("Unsupported Part")};class Ai extends gi{render(){}constructor(t){super(t),this.value="",this.part=t}translate(t,e){let i=e;$i.set(this,{keys:t,options:i}),"function"==typeof e&&(i=e());const s=Ei(t,i);return!1===this.isConnected||void 0===s||this.value===s?B:s}disconnected(){$i.delete(this)}}const Ni=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Ai{render(t,e){return yi?.then((()=>{this.setValue(this.translate(t,e))})),B}}),Ri=["en","tr"],Ci=document.documentElement.lang;const ji=[];for(let t=0;t<256;++t)ji.push((t+256).toString(16).slice(1));let Pi;const Oi=new Uint8Array(16);function Li(){if(!Pi){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Pi=crypto.getRandomValues.bind(crypto)}return Pi(Oi)}var Di={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function Mi(t,e,i){if(Di.randomUUID&&!e&&!t)return Di.randomUUID();const s=(t=t||{}).random||(t.rng||Li)();return s[6]=15&s[6]|64,s[8]=63&s[8]|128,function(t,e=0){return(ji[t[e+0]]+ji[t[e+1]]+ji[t[e+2]]+ji[t[e+3]]+"-"+ji[t[e+4]]+ji[t[e+5]]+"-"+ji[t[e+6]]+ji[t[e+7]]+"-"+ji[t[e+8]]+ji[t[e+9]]+"-"+ji[t[e+10]]+ji[t[e+11]]+ji[t[e+12]]+ji[t[e+13]]+ji[t[e+14]]+ji[t[e+15]]).toLowerCase()}(s)}const Ti=(t,e="TR")=>new Date(t).toLocaleDateString(e,{month:"2-digit",day:"2-digit",year:"numeric"}),Ii=t=>`+(90) ${t.slice(0,3)} ${t.slice(3,6)} ${t.slice(6,8)} ${t.slice(8,10)}`,_i=t=>t.trim().length>2,Vi=t=>{const e=new Date(t);return"Invalid Date"!==e.toString()&&new Date>e&&e.getFullYear()>(new Date).getFullYear()-90&&e.getFullYear()<(new Date).getFullYear()-16},Ui=t=>{console.log(t);const e=new Date(t);return"Invalid Date"!==e.toString()&&new Date>e},Hi=t=>t.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),Bi=[{name:"First Name",id:"first-name",type:"text",other:{}},{name:"Last Name",id:"last-name",type:"text",other:{}},{name:"Date of Birth",id:"dob",type:"date",other:{}},{name:"Date of Employment",id:"doe",type:"date",other:{}},{name:"Phone",id:"phone",type:"tel",placeholder:"5XXXXXXXXX",maxLength:"10"},{name:"Email",id:"email",type:"email",other:{}}],zi=[{name:"Department",id:"department",type:"text",options:["","Analytics","Tech"]},{name:"Position",id:"position",type:"text",options:["","Junior","Medior","Senior"]}],Fi=[{to:"/",title:"Employees"},{to:"/add-new",title:"Add New"}];class Zi extends nt{static styles=[r`
      /* Default modal background and dialog styles */
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      dialog {
        background-color: white;
        border-radius: 5px;
        border: none;
        padding: 10px;
        width: 400px;
        max-width: 90%;
        margin: auto;

        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      }

      dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.5); /* Gray transparent background */
      }

      h2 {
        margin-top: 0;
        font-size: 21px;

        color: var(--main-color);
      }

      p {
        font-size: 13px;
      }

      form {
        margin-top: 10px;

        display: flex;
        flex-direction: column;
      }

      button {
        width: 100%;

        padding: 10px 15px;

        font-size: 14px;

        cursor: pointer;

        background-color: var(--main-color);
        color: white;
        border: none;

        border-radius: 4px;

        margin-bottom: 10px;
      }

      button:last-child {
        background-color: white;
        color: black;

        border: 1px gray solid;
      }

      button:hover {
        opacity: 0.9;
      }

      button:focus {
        outline: none;
      }
    `];static properties={isOpen:{type:Boolean},header:{type:String},text:{type:String},acceptButton:{type:String},rejectButton:{type:String},accept:{type:Function},reject:{type:Function}};constructor(){super(),this.isOpen=!0,this.header="",this.text="",this.acceptButton="",this.rejectButton="",this.accept=()=>{},this.reject=()=>{}}openDialog(){this.isOpen=!0,this.requestUpdate()}closeDialog(){this.isOpen=!1,this.reject&&this.reject(),this.requestUpdate()}acceptDialog(){this.isOpen=!1,this.accept&&this.accept(),this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.isOpen&&this.renderModal()}updated(t){if(super.updated(t),this.isOpen)this.renderModal();else{const t=document.querySelector("#modal");t&&t.contains(this)&&t.removeChild(this)}}renderModal(){const t=document.querySelector("#modal");t&&!t.contains(this)&&t.appendChild(this)}render(){return console.log("DIALOG:",this.header),H`
      <div class="modal-overlay" ?hidden="${!this.isOpen}">
        <dialog ?open="${this.isOpen}">
          <h2>${this.header}</h2>
          <p>${this.text||"HEYY"}</p>
          <form method="dialog">
            ${this.acceptButton&&H`<button @click=${()=>this.acceptDialog()}>
              ${this.acceptButton}
            </button>`}
            ${this.rejectButton&&H`<button @click=${()=>this.closeDialog()}>
              ${this.rejectButton}
            </button>`}
          </form>
        </dialog>
      </div>
    `}}customElements.define("dialog-modal",Zi);class Ki extends nt{static properties={mode:{type:String},data:{type:Array},selectedDelete:{type:Object}};static styles=[r`
      .container {
        background-color: white;

        display: block;

        width: 100%;
        height: calc(100vh - 164px - 3vh - 50px);

        border-radius: 5px;

        overflow: auto;

        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .tablewrapper {
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
      }

      th,
      td {
        text-align: center;
        padding: 25px 8px;

        white-space: nowrap;

        font-size: 14px;
      }

      td {
        color: gray;
      }

      th {
        color: var(--main-color);
      }

      /* width */
      ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--main-color);
        border-radius: 5px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: var(--main-color);
        cursor: grab;
      }

      .tablewrapper tbody > tr > td:nth-child(1),
      .tablewrapper thead > tr > th:nth-child(1),
      .tablewrapper tbody > tr > td:nth-child(2),
      .tablewrapper thead > tr > th:nth-child(2) {
        background-color: white;

        position: sticky;
      }

      .tablewrapper tbody > tr > td:nth-child(1),
      .tablewrapper tbody > tr > td:nth-child(2) {
        color: black;
      }

      .tablewrapper tbody > tr > td:nth-child(1),
      .tablewrapper thead > tr > th:nth-child(1) {
        left: 0;
      }

      .tablewrapper tbody > tr > td:nth-child(2),
      .tablewrapper thead > tr > th:nth-child(2) {
        left: 116px;
      }

      .tablewrapper thead > tr {
        position: sticky;
        top: 0;

        background-color: white;

        z-index: 100;
      }

      .tablewrapper thead > tr > th:first-child {
        min-width: 100px;
      }

      tbody tr {
        border-bottom: 2px #dcd7d78d solid;
      }

      table button,
      .gridwrapper button {
        background: transparent;
        border: none;

        cursor: pointer;
      }

      table button img,
      .gridwrapper button img {
        height: 17px;
      }

      .pages {
        background-color: var(--main-bg);

        display: flex;
        justify-content: center;
        align-items: center;

        height: 50px;
        padding: 10px;
      }

      .pages button {
        border: none;
        background: none;

        color: gray;

        width: 28px;
        height: 28px;

        margin: 2.5px;

        border-radius: 100%;

        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .pages .dots {
        color: gray;
      }

      .pages button.active,
      .pages button:hover {
        color: white;
        background-color: var(--main-color);
      }

      .pages button:disabled {
        display: none;
      }

      .pages svg {
        height: 15px;
        display: inline-block;
        width: 15px;
      }

      .pages svg path {
        fill: gray;
      }

      .pages button:hover path,
      .pages button:hover {
        fill: white;
        background-color: var(--main-color);
      }

      .gridwrapper {
        display: flex;

        flex-wrap: wrap;
      }

      .grid-item {
        min-width: calc(100% / 3 - 12px);
        max-width: calc(100% / 3 - 12px);

        text-align: center;

        border: 1px #dcd7d78d solid;

        padding: 10px 5px;
      }

      .grid-item > div {
        margin-bottom: 10px;
      }

      .grid-item div > span {
        color: gray;
      }
      .grid-item div > span:first-of-type {
        color: black;

        /* display: inline-block; */
        width: 120px;

        /* text-align: right; */
      }

      @media (max-width: 1000px) {
        .grid-item {
          min-width: calc(100% / 2 - 12px);
          max-width: calc(100% / 2 - 12px);
        }
      }

      @media (max-width: 700px) {
        .grid-item {
          min-width: calc(99% - 12px);
          max-width: calc(99% - 12px);
        }

        table button img,
        .gridwrapper button img {
          height: 22px;

          margin: 15px;
        }
      }
    `];page={total:1,current:1,perPage:7,buttons:4,currData:[]};constructor(){super(),this.data=le.getState().data;const t=new URLSearchParams(window.location.search);this.page.current=+t.get("page")||+this.page.current,this.unsubscribe=le.subscribe((()=>{const t=le.getState();this.data=t.data,this.page.total=Math.ceil(this.data.length/this.page.perPage)}))}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe()}updated(t){t.has("mode")&&(console.log("myState changed:",this.mode),this.page.perPage="galery"==this.mode?12:7,this.data.length&&(this.page.total=Math.ceil(this.data.length/this.page.perPage)),this.requestUpdate())}handleEdit(t){console.log(t),window.history.pushState(null,"",`/edit/${t._id}`),window.dispatchEvent(new Event("popstate"))}handleDelete(t){console.log(t),this.selectedDelete=t,this.requestUpdate()}handleDeleteConfirm(){le.dispatch({type:"DELETE",payload:this.selectedDelete._id}),this.selectedDelete=null,this.requestUpdate()}handleDeleteReject(){this.selectedDelete=null,this.requestUpdate()}handlePageChange(t){let e=t;const i=new URLSearchParams(window.location.search);(t<1||t>this.page.total)&&(e=1),i.set("page",e);const s=`${window.router.location.pathname}?${i.toString()}`;ie.go(s),this.page.current=+e,this.requestUpdate()}getVisiblePages(){const{current:t,total:e,buttons:i}=this.page,s=Math.floor(i/2),n=new Set;n.add(1),n.add(e);const r=Math.max(2,t-s),o=Math.min(e-1,t+s);for(let t=r;t<=o;t++)n.add(t);return Array.from(n).sort(((t,e)=>t-e))}renderPagination(){const t=this.getVisiblePages(),e=[];for(let i=0;i<t.length;i++){const s=t[i];i>0&&s>t[i-1]+1&&e.push(H`<span class="dots">...</span>`),e.push(H`
        <button
          class=${this.page.current==s?"active":""}
          @click=${()=>this.handlePageChange(s)}
        >
          ${s}
        </button>
      `)}return e.length>1&&(e.unshift(H`
        <button
          @click=${()=>this.handlePageChange(this.page.current-1)}
          ?disabled=${1===this.page.current}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="-5 0 24 24"
            style="height: 15px; display: inline-block; width: 15px;"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-421.000000, -1195.000000)"
                fill="#000000"
              >
                <path
                  d="M423.429,1206.98 L434.686,1196.7 C435.079,1196.31 435.079,1195.67 434.686,1195.28 C434.293,1194.89 433.655,1194.89 433.263,1195.28 L421.282,1206.22 C421.073,1206.43 420.983,1206.71 420.998,1206.98 C420.983,1207.26 421.073,1207.54 421.282,1207.75 L433.263,1218.69 C433.655,1219.08 434.293,1219.08 434.686,1218.69 C435.079,1218.29 435.079,1217.66 434.686,1217.27 L423.429,1206.98"
                  id="chevron-left"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      `),e.push(H`
        <button
          @click=${()=>this.handlePageChange(this.page.current+1)}
          ?disabled=${this.page.current===this.page.total}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="-5 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-473.000000, -1195.000000)"
                fill="#000000"
              >
                <path
                  d="M486.717,1206.22 L474.71,1195.28 C474.316,1194.89 473.678,1194.89 473.283,1195.28 C472.89,1195.67 472.89,1196.31 473.283,1196.7 L484.566,1206.98 L473.283,1217.27 C472.89,1217.66 472.89,1218.29 473.283,1218.69 C473.678,1219.08 474.316,1219.08 474.71,1218.69 L486.717,1207.75 C486.927,1207.54 487.017,1207.26 487.003,1206.98 C487.017,1206.71 486.927,1206.43 486.717,1206.22"
                  id="chevron-right"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        </button>
      `)),e}renderTableWrapper(t){let e=t.map(((t,e)=>H`
        <tr>
          <td>${t.index} ${t["First Name"]}</td>
          <td>${t["Last Name"]}</td>
          <td>${Ti(t["Date of Employment"])}</td>
          <td>${Ti(t["Date of Birth"])}</td>
          <td>${Ii(t.Phone)}</td>
          <td>${t.Email}</td>
          <td>${Ni(t.Department)}</td>
          <td>${Ni(t.Position)}</td>
          ${Ni(t[""])}
          <td>
            <button
              title=${Ni("Edit")}
              @click=${function(){this.handleEdit(t)}}
            >
              <img src=${"/assets/img/edit.svg"} alt=${Ni("Edit")} />
            </button>
            <button
              title=${Ni("Delete")}
              @click=${function(){this.handleDelete(t)}}
            >
              <img src=${"/assets/img/delete.svg"} alt=${Ni("Delete")} />
            </button>
          </td>
        </tr>
      `));return H`
      <div class="tablewrapper">
        <table>
          <thead>
            <tr>
              <th>${Ni("First Name")}</th>
              <th>${Ni("Last Name")}</th>
              <th>${Ni("Date of Employment")}</th>
              <th>${Ni("Date of Birth")}</th>
              <th>${Ni("Phone")}</th>
              <th>${Ni("Email")}</th>
              <th>${Ni("Department")}</th>
              <th>${Ni("Position")}</th>
              <th>${Ni("Actions")}</th>
            </tr>
          </thead>
          <tbody>
            ${e}
          </tbody>
        </table>
      </div>
    `}renderGridWrapper(t){let e=t.map((t=>H`<div class="grid-item">
        <h4>${t["First Name"]} ${t["Last Name"]}</h4>
        <div>
          <span>${Ni("Date of Employment")}: </span>
          <span>${Ti(t["Date of Employment"])}</span>
        </div>
        <div>
          <span>${Ni("Date of Birth")}: </span>
          <span>${Ti(t["Date of Birth"])}</span>
        </div>
        <div>
          <span>${Ni("Phone")}: </span>
          <span>${Ii(t.Phone)}</span>
        </div>
        <div>
          <span>${Ni("Email")}: </span>
          <span>${t.Email}</span>
        </div>
        <div>
          <span>${Ni("Department")}: </span>
          <span>${Ni(t.Department)}</span>
        </div>
        <div>
          <span>${Ni("Position")}: </span>
          <span>${Ni(t.Position)}</span>
        </div>

        <div>
          <button
            title=${Ni("Edit")}
            @click=${function(){this.handleEdit(t)}}
          >
            <img src=${"/assets/img/edit.svg"} alt=${Ni("Edit")} />
          </button>
          <button
            title=${Ni("Delete")}
            @click=${function(){this.handleDelete(t)}}
          >
            <img src=${"/assets/img/delete.svg"} alt=${Ni("Delete")} />
          </button>
        </div>
      </div>`));return H` <div class="gridwrapper">${e}</div> `}render(){const t=(this.page.current-1)*this.page.perPage,e=this.data.slice(t,t+this.page.perPage);let i="table"!==this.mode&&this.mode?this.renderGridWrapper(e):this.renderTableWrapper(e),s=null;if(this.selectedDelete){console.log("selectedDelete: ",this.selectedDelete);const t=`${this.selectedDelete["First Name"]} ${this.selectedDelete["Last Name"]}`;s=H`<dialog-modal
        .header=${Ni("Are you sure?")}
        .text=${Ni("Selected employee record of {{name}} will be deleted.",{name:t})}
        .acceptButton=${Ni("Accept")}
        .rejectButton=${Ni("Reject")}
        .accept=${()=>this.handleDeleteConfirm()}
        .reject=${()=>this.handleDeleteReject()}
      ></dialog-modal>`}return H`
      ${s}
      <div class="container">${i}</div>
      <div class="pages">${this.renderPagination()}</div>
    `}}customElements.define("employee-table",Ki);const Wi=["table","galery"];class Yi extends nt{static properties={mode:{type:String}};constructor(){super(),this.mode=this.getMode()}static styles=[r`
      header {
        color: var(--main-color);

        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      header h1 {
        font-size: 25px;
      }

      .view {
        display: flex;
        column-gap: 10px;
      }

      .view button {
        border: none;

        background-color: transparent;

        cursor: pointer;

        padding: 8px 10px;
        border-radius: 100%;
      }

      .view svg {
        height: 15px;
        display: inline-block;
        width: 15px;
      }

      .view svg path {
        fill: var(--main-color);
      }

      .view button:hover path,
      .view button:hover {
        fill: white;
        background-color: var(--main-color);
      }
    `];getMode(){return this.handleModeChange()||Wi[0]}handleModeChange(t){let e=t;const i=new URLSearchParams(window.location.search);if(!e)return i.get("mode");Wi.includes(e)||(e=Wi[0]),i.set("mode",e);const s=`${window.router.location.pathname}?${i.toString()}`;ie.go(s),this.mode=e,this.requestUpdate()}renderGridIcon(){return H` <svg
      width="800px"
      height="800px"
      viewBox="0 0 52 52"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14,16H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H14a2,2,0,0,1,2,2V14A2,2,0,0,1,14,16ZM4,12h8V4H4Z"
      />
      <path
        d="M14,34H2a2,2,0,0,1-2-2V20a2,2,0,0,1,2-2H14a2,2,0,0,1,2,2V32A2,2,0,0,1,14,34ZM4,30h8V22H4Z"
      />
      <path
        d="M14,52H2a2,2,0,0,1-2-2V38a2,2,0,0,1,2-2H14a2,2,0,0,1,2,2V50A2,2,0,0,1,14,52ZM4,48h8V40H4Z"
      />
      <path
        d="M32,16H20a2,2,0,0,1-2-2V2a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2V14A2,2,0,0,1,32,16ZM22,12h8V4H22Z"
      />
      <path
        d="M32,34H20a2,2,0,0,1-2-2V20a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2V32A2,2,0,0,1,32,34ZM22,30h8V22H22Z"
      />
      <path
        d="M32,52H20a2,2,0,0,1-2-2V38a2,2,0,0,1,2-2H32a2,2,0,0,1,2,2V50A2,2,0,0,1,32,52ZM22,48h8V40H22Z"
      />
      <path
        d="M50,16H38a2,2,0,0,1-2-2V2a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V14A2,2,0,0,1,50,16ZM40,12h8V4H40Z"
      />
      <path
        d="M50,34H38a2,2,0,0,1-2-2V20a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V32A2,2,0,0,1,50,34ZM40,30h8V22H40Z"
      />
      <path
        d="M50,52H38a2,2,0,0,1-2-2V38a2,2,0,0,1,2-2H50a2,2,0,0,1,2,2V50A2,2,0,0,1,50,52ZM40,48h8V40H40Z"
      />
    </svg>`}renderTableIcon(){return H`
      <svg
        width="800px"
        height="800px"
        viewBox="0 -1 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          sketch:type="MSPage"
        >
          <g
            id="Icon-Set"
            sketch:type="MSLayerGroup"
            transform="translate(-210.000000, -887.000000)"
          >
            <path
              d="M229,895 L211,895 C210.448,895 210,895.448 210,896 C210,896.553 210.448,897 211,897 L229,897 C229.552,897 230,896.553 230,896 C230,895.448 229.552,895 229,895 L229,895 Z M229,903 L211,903 C210.448,903 210,903.448 210,904 C210,904.553 210.448,905 211,905 L229,905 C229.552,905 230,904.553 230,904 C230,903.448 229.552,903 229,903 L229,903 Z M211,889 L229,889 C229.552,889 230,888.553 230,888 C230,887.448 229.552,887 229,887 L211,887 C210.448,887 210,887.448 210,888 C210,888.553 210.448,889 211,889 L211,889 Z"
              id="hamburger"
              sketch:type="MSShapeGroup"
            ></path>
          </g>
        </g>
      </svg>
    `}render(){return console.log("render:",this.mode),H` <div>
      <header class="heading">
        <h1>${Ni("Employee List")}</h1>
        <div class="view">
          <button @click=${()=>this.handleModeChange(Wi[0])}>
            ${this.renderTableIcon()}
          </button>
          <button @click=${()=>this.handleModeChange(Wi[1])}>
            ${this.renderGridIcon()}
          </button>
        </div>
      </header>
      <employee-table mode=${this.mode}></employee-table>
    </div>`}}customElements.define("employee-list",Yi);class Ji extends nt{static properties={header:{type:String}};static styles=[r`
      /* width */
      ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--main-color);
        border-radius: 5px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: var(--main-color);
        cursor: grab;
      }

      header {
        color: var(--main-color);

        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      header h1 {
        font-size: 25px;
      }

      .container {
        background-color: white;

        padding: 20px 0;

        display: block;

        width: 100%;
        height: calc(100vh - 164px - 3vh - 90px);

        border-radius: 5px;

        overflow: auto;

        display: flex;
        justify-content: center;

        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    `];constructor(){super(),this.header=""}render(){return H` <div>
      <header class="heading">
        <h1>${Ni(this.header)}</h1>
      </header>
      <div class="container">
        <slot></slot>
      </div>
    </div>`}}customElements.define("shared-container",Ji);class Gi extends de{static styles=[r`
      form {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;

        width: 90%;
        max-width: 300px;
      }

      label {
        font-size: 14px;
        font-weight: 500;
        color: #333;

        display: inline-block;
        margin-bottom: 5px;
      }

      input {
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
      }

      select {
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
      }

      input:focus,
      select:focus {
        outline: none;
      }

      input.invalid,
      select.invalid {
        border: 1px solid red;
      }

      button {
        background-color: var(--main-color);
        color: white;
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        width: 100%;

        margin: 20px 0;
      }

      button:hover {
        opacity: 0.9;
      }

      button:disabled {
        opacity: 0.4;

        cursor: not-allowed;
      }

      .input-group {
        position: relative;
      }

      @media (max-width: 600) {
        form {
          max-width: unset;
        }
      }
    `];constructor(){super(),this.employee={"First Name":{value:"",isValid:!1,isTouched:!1,validate:_i},"Last Name":{value:"",isValid:!1,isTouched:!1,validate:_i},"Date of Employment":{value:"",isValid:!1,isTouched:!1,validate:Ui},"Date of Birth":{value:"",isValid:!1,isTouched:!1,validate:Vi},Phone:{value:"",isValid:!1,isTouched:!1,validate:_i},Email:{value:"",isValid:!1,isTouched:!1,validate:Hi},Department:{value:"",isValid:!1,isTouched:!1,validate:_i},Position:{value:"",isValid:!1,isTouched:!1,validate:_i}},this.selectedId="",this.showEditModal=null,this.isChanged=!1}firstUpdated(){super.firstUpdated();const t=window.router.location.params.id;if(console.log("firstUpdated:",t),!t)return;const e=le.getState().data.find((e=>e._id===t));if(console.log(e),e){this.selectedId=e._id;for(let t in e)console.log(e[t],this.employee[t]),this.employee[t]&&(this.employee[t].value=e[t],this.employee[t].isTouched=!0,this.employee[t].isValid=this.employee[t].validate(e[t]));this.requestUpdate()}}handleSubmit(t,e){if(t.preventDefault(),!e)return void console.log("invalid: ",this.employee);const i={};for(let t in this.employee)i[t]=this.employee[t].value;i._id=this.selectedId||Mi(),console.log(i),this.selectedId?(this.showEditModal=i,this.requestUpdate()):(le.dispatch({type:"ADD_NEW",payload:i}),ie.go("/"))}handleEditConfirm(){le.dispatch({type:"EDIT_DATA",payload:this.showEditModal}),console.log(le.getState().data),ie.go("/")}handleEditReject(){this.showEditModal=null,this.requestUpdate()}handleInputChange(t,e){const{name:i,value:s}=t.target;console.log("handleInputChange",i,s,this.employee[i]);let n=s;["tel","number"].includes(t.target.type)&&(n=s.replace(/[^\d.-]/g,""),t.target.value=n);const r={...this.employee[i]};r.value=n,r.isValid=this.employee[i].validate(n),r.isTouched=!0,this.employee={...this.employee,[i]:r},this.selectedId&&(this.isChanged=!0),this.requestUpdate()}handleBlur(t){const{name:e,value:i}=t.target;console.log("handleBlur",e,i),this.employee[e].isTouched=!0,this.requestUpdate()}render(){let t=!0;for(let e in this.employee)t=t&&this.employee[e].isValid;this.selectedId&&(t=t&&this.isChanged),t||console.log(this.employee);let e=null;return this.showEditModal&&this.selectedId&&(e=H`<dialog-modal
        .header=${Ni("Are you sure?")}
        .text=${Ni("Your changes will be saved. Do you want to proceed?")}
        .acceptButton=${Ni("Accept")}
        .rejectButton=${Ni("Reject")}
        .accept=${()=>this.handleEditConfirm()}
        .reject=${()=>this.handleEditReject()}
      ></dialog-modal>`),H`
      ${e}
      <shared-container .header=${this.selectedId?"Edit Record":"Add New"}>
        <form novalidate @submit=${e=>this.handleSubmit(e,t)}>
          ${Bi.map((t=>H`
              <div class="input-group">
                <label for=${t.id}>${Ni(t.name)}:</label>
                <!-- @ts-ignore to bypass the type check -->
                <input
                  class=${this.employee[t.name].isTouched&&!this.employee[t.name].isValid?"invalid":""}
                  type=${t.type}
                  id=${t.id}
                  name=${t.name}
                  .value=${this.employee[t.name].value}
                  @input=${this.handleInputChange}
                  @blur=${this.handleBlur}
                  placeholder=${t.placeholder||""}
                  maxlength=${t.maxLength}
                />
              </div>
            `))}
          ${zi.map((t=>H`
              <div class="input-group">
                <label for=${t.id}>${Ni(t.name)}:</label>
                <select
                  name=${t.name}
                  id=${t.id}
                  class=${this.employee[t.name].isTouched&&!this.employee[t.name].isValid?"invalid":""}
                  @change=${t=>this.handleInputChange(t,!0)}
                >
                  ${t.options.map((e=>H` <option
                    ?selected=${e===this.employee[t.name].value}
                    value=${e}>${Ni(e)}</option> `))}
                </select>
              </div>
            `))}
          <button type="submit" ?disabled=${!t}>
            ${Ni(this.selectedId?"Save":"Submit")}
          </button>
        </form>
      </shared-container>
    `}}customElements.define("form-item",Gi);class Xi extends nt{currentPath=window.router.location.pathname;static styles=[r`
      :host {
        background-color: white;

        display: block;

        padding: 10px 10px;

        border-radius: 5px;

        width: 100%;
      }

      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .logo {
        text-decoration: none;

        display: flex;
        align-items: center;

        color: black;
      }

      .logo span {
        font-weight: bold;
        font-size: 18px;
      }

      .logo img {
        width: 25px;
        height: 25px;

        margin-right: 10px;
      }

      ul {
        list-style: none;

        display: flex;
        align-items: center;

        column-gap: 10px;
      }

      ul a {
        text-decoration: none;

        color: var(--main-color);
      }

      a.active {
        font-weight: bold;
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;

        appearance: none;
        padding: 8px 12px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: white;

        color: #333;

        font-size: 14px;
        cursor: pointer;
        outline: none;
      }

      select:hover,
      select:focus {
        background-color: var(--main-color-lg);
        color: white;

        box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.2);
      }

      select option {
        padding: 10px;
        font-size: 14px;

        background-color: white;

        color: gray;
      }

      select option:hover,
      select option:focus {
        background-color: var(--main-color);
        color: white;

        cursor: pointer;
      }
    `];constructor(){super(),window.addEventListener("popstate",(()=>{console.log("popstate"),this.currentPath=window.router.location.pathname,this.requestUpdate()}))}changeLang(t){const e=t.target.value.toLowerCase();ei.changeLanguage(e)}render(){return H` <nav>
      <a class="logo" href="/">
        <img src=${"/assets/img/favicon.png"} alt="logo" />
        <span>ING</span>
      </a>

      <ul>
        ${Fi.map((t=>(console.log("NAVBAR_LINKS",t.to,window.router.location.pathname),H`
            <li>
              <a
                class=${t.to===(this.currentPath||"/")?"active":"inactive"}
                href=${t.to}
                >${Ni(t.title)}</a
              >
            </li>
          `)))}

        <li>
          <select @change=${t=>this.changeLang(t)}>
            ${Ri.map((t=>H`<
                <option ?selected=${ei.language===t} value=${t}>
                  ${t.toUpperCase()}
                </option> `))}
          </select>
        </li>
      </ul>
    </nav>`}}customElements.define("nav-bar",Xi);class qi extends nt{static styles=[r`
      :host {
        padding: 3vh 5vw;

        background-color: var(--main-bg);

        display: block;
        height: 94vh;

        overflow-y: hidden;
      }
    `];render(){return H` <div>
      <nav-bar></nav-bar>
      <slot></slot>
    </div>`}}customElements.define("main-container",qi);customElements.define("main-index",class extends de{firstUpdated(){super.firstUpdated(),console.log("firstUpdated");const t=le.getState().data;t&&t.length||this.loadData();const e=new ie(this.shadowRoot.querySelector("#outlet"));e.setRoutes([{path:"/",component:"employee-list"},{path:"/add-new",component:"form-item"},{path:"/edit/:id",component:"form-item"},{path:"(.*)",redirect:"/"}]),window.router=e}loadData(){console.log("loadData"),async function(t){ei.use(wi).init({lng:t,supportedLngs:Ri,resources:{en:{translation:{Employees:"Employees","Add New":"Add New","Employee List":"Employee List","First Name":"First Name","Last Name":"Last Name","Date of Employment":"Date of Employment","Date of Birth":"Date of Birth",Phone:"Phone",Email:"Email",Department:"Department",Position:"Position",Actions:"Actions",Edit:"Edit",Delete:"Delete"}},tr:{translation:{Junior:"Yeni Başlayan",Medior:"Orta Seviye",Senior:"Kıdemli",Tech:"Teknoloji",Analytics:"Analitik","Your changes will be saved. Do you want to proceed?":"Değişiklikleriniz kaydedilecek. Devam etmek istiyor musunuz?","Edit Record":"Kaydı Düzenle",Save:"Kaydet",Submit:"Ekle",Reject:"İptal",Accept:"Kabul Et","Are you sure?":"Emin misin?","Selected employee record of {{name}} will be deleted.":"Çalışan {{name}} için seçili personel kaydı silinecektir.",Employees:"Çalışanlar","Add New":"Yeni Ekle","Employee List":"Çalışan Listesi","First Name":"Ad","Last Name":"Soyad","Date of Employment":"İşe Başlama Tarihi","Date of Birth":"Doğum Tarihi",Phone:"Telefon",Email:"E-posta",Department:"Bölüm",Position:"Pozisyon",Actions:"İşlemler",Edit:"Düzenle",Delete:"Sil"}}}})}(Ci),fetch("/assets/data/employees.json").then((t=>t.json())).then((t=>{console.log("empData:",t),le.dispatch({type:"INITIAL",payload:t})}))}render(){return H`
      <main>
        <main-container>
          <div id="outlet"></div>
        </main-container>
      </main>
    `}});
