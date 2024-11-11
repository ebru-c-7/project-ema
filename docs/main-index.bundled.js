/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:h,defineProperty:a,getOwnPropertyDescriptor:u,getOwnPropertyNames:l,getOwnPropertySymbols:c,getPrototypeOf:d}=Object,p=globalThis,f=p.trustedTypes,g=f?f.emptyScript:"",v=p.reactiveElementPolyfillSupport,m=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!h(t,e),b={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&a(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);r.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...l(t),...c(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=s,this[s]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[m("elementProperties")]=new Map,A[m("finalized")]=new Map,v?.({ReactiveElement:A}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,E=x.trustedTypes,$=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+C,F=`<${D}>`,S=document,B=()=>S.createComment(""),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,O="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,j=/>/g,I=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,M=/"/g,L=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),H=new WeakMap,Z=S.createTreeWalker(S,129);function K(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=P;for(let e=0;e<i;e++){const i=t[e];let h,a,u=-1,l=0;for(;l<i.length&&(o.lastIndex=l,a=o.exec(i),null!==a);)l=o.lastIndex,o===P?"!--"===a[1]?o=N:void 0!==a[1]?o=j:void 0!==a[2]?(L.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=I):void 0!==a[3]&&(o=I):o===I?">"===a[0]?(o=r??P,u=-1):void 0===a[1]?u=-2:(u=o.lastIndex-a[2].length,h=a[1],o=void 0===a[3]?I:'"'===a[3]?M:T):o===M||o===T?o=I:o===N||o===j?o=P:(o=I,r=void 0);const c=o===I&&t[e+1].startsWith("/>")?" ":"";n+=o===P?i+F:u>=0?(s.push(h),i.slice(0,u)+k+i.slice(u)+C+c):i+C+(-2===u?e:c)}return[K(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,h=this.parts,[a,u]=W(t,e);if(this.el=Y.createElement(a,i),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Z.nextNode())&&h.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=u[n++],i=s.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);h.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?Q:"?"===o[1]?tt:"@"===o[1]?et:X}),s.removeAttribute(t)}else t.startsWith(C)&&(h.push({type:6,index:r}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],B()),Z.nextNode(),h.push({type:2,index:++r});s.append(t[e],B())}}}else if(8===s.nodeType)if(s.data===D)h.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)h.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,s){if(e===U)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=_(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=q(t,r._$AS(t,e.values),r,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??S).importNode(e,!0);Z.currentNode=s;let r=Z.nextNode(),n=0,o=0,h=i[0];for(;void 0!==h;){if(n===h.index){let e;2===h.type?e=new J(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new it(r,this,t)),this._$AV.push(e),h=i[++o]}n!==h?.index&&(r=Z.nextNode(),n++)}return Z.currentNode=S,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),_(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==z&&_(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new Y(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new J(this.O(B()),this.O(B()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=q(this,t,e,0),n=!_(t)||t!==this._$AH&&t!==U,n&&(this._$AH=t);else{const s=t;let o,h;for(t=r[0],o=0;o<r.length-1;o++)h=q(this,s[i+o],e,o),h===U&&(h=this._$AH[o]),n||=!_(h)||h!==this._$AH[o],h===z?t=z:t!==z&&(t+=(h??"")+r[o+1]),this._$AH[o]=h}n&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}}class et extends X{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??z)===U)return;const i=this._$AH,s=t===z&&i!==z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==z&&(i===z||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const st=x.litHtmlPolyfillSupport;st?.(Y,J),(x.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let rt=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new J(e.insertBefore(B(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}};rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const nt=globalThis.litElementPolyfillSupport;function ot(t,e){void 0===e&&(e={});for(var i=function(t){for(var e=[],i=0;i<t.length;){var s=t[i];if("*"!==s&&"+"!==s&&"?"!==s)if("\\"!==s)if("{"!==s)if("}"!==s)if(":"!==s)if("("!==s)e.push({type:"CHAR",index:i,value:t[i++]});else{var r=1,n="";if("?"===t[h=i+1])throw new TypeError('Pattern cannot start with "?" at '.concat(h));for(;h<t.length;)if("\\"!==t[h]){if(")"===t[h]){if(0==--r){h++;break}}else if("("===t[h]&&(r++,"?"!==t[h+1]))throw new TypeError("Capturing groups are not allowed at ".concat(h));n+=t[h++]}else n+=t[h++]+t[h++];if(r)throw new TypeError("Unbalanced pattern at ".concat(i));if(!n)throw new TypeError("Missing pattern at ".concat(i));e.push({type:"PATTERN",index:i,value:n}),i=h}else{for(var o="",h=i+1;h<t.length;){var a=t.charCodeAt(h);if(!(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||95===a))break;o+=t[h++]}if(!o)throw new TypeError("Missing parameter name at ".concat(i));e.push({type:"NAME",index:i,value:o}),i=h}else e.push({type:"CLOSE",index:i,value:t[i++]});else e.push({type:"OPEN",index:i,value:t[i++]});else e.push({type:"ESCAPED_CHAR",index:i++,value:t[i++]});else e.push({type:"MODIFIER",index:i,value:t[i++]})}return e.push({type:"END",index:i,value:""}),e}(t),s=e.prefixes,r=void 0===s?"./":s,n=e.delimiter,o=void 0===n?"/#?":n,h=[],a=0,u=0,l="",c=function(t){if(u<i.length&&i[u].type===t)return i[u++].value},d=function(t){var e=c(t);if(void 0!==e)return e;var s=i[u],r=s.type,n=s.index;throw new TypeError("Unexpected ".concat(r," at ").concat(n,", expected ").concat(t))},p=function(){for(var t,e="";t=c("CHAR")||c("ESCAPED_CHAR");)e+=t;return e},f=function(t){var e=h[h.length-1],i=t||(e&&"string"==typeof e?e:"");if(e&&!i)throw new TypeError('Must have text between two parameters, missing text after "'.concat(e.name,'"'));return!i||function(t){for(var e=0,i=o;e<i.length;e++){var s=i[e];if(t.indexOf(s)>-1)return!0}return!1}(i)?"[^".concat(ut(o),"]+?"):"(?:(?!".concat(ut(i),")[^").concat(ut(o),"])+?")};u<i.length;){var g=c("CHAR"),v=c("NAME"),m=c("PATTERN");if(v||m){var w=g||"";-1===r.indexOf(w)&&(l+=w,w=""),l&&(h.push(l),l=""),h.push({name:v||a++,prefix:w,suffix:"",pattern:m||f(w),modifier:c("MODIFIER")||""})}else{var y=g||c("ESCAPED_CHAR");if(y)l+=y;else if(l&&(h.push(l),l=""),c("OPEN")){w=p();var b=c("NAME")||"",A=c("PATTERN")||"",x=p();d("CLOSE"),h.push({name:b||(A?a++:""),pattern:b&&!A?f(w):A,prefix:w,suffix:x,modifier:c("MODIFIER")||""})}else d("END")}}return h}function ht(t,e){return at(ot(t,e),e)}function at(t,e){void 0===e&&(e={});var i=lt(e),s=e.encode,r=void 0===s?function(t){return t}:s,n=e.validate,o=void 0===n||n,h=t.map((function(t){if("object"==typeof t)return new RegExp("^(?:".concat(t.pattern,")$"),i)}));return function(e){for(var i="",s=0;s<t.length;s++){var n=t[s];if("string"!=typeof n){var a=e?e[n.name]:void 0,u="?"===n.modifier||"*"===n.modifier,l="*"===n.modifier||"+"===n.modifier;if(Array.isArray(a)){if(!l)throw new TypeError('Expected "'.concat(n.name,'" to not repeat, but got an array'));if(0===a.length){if(u)continue;throw new TypeError('Expected "'.concat(n.name,'" to not be empty'))}for(var c=0;c<a.length;c++){var d=r(a[c],n);if(o&&!h[s].test(d))throw new TypeError('Expected all "'.concat(n.name,'" to match "').concat(n.pattern,'", but got "').concat(d,'"'));i+=n.prefix+d+n.suffix}}else if("string"!=typeof a&&"number"!=typeof a){if(!u){var p=l?"an array":"a string";throw new TypeError('Expected "'.concat(n.name,'" to be ').concat(p))}}else{d=r(String(a),n);if(o&&!h[s].test(d))throw new TypeError('Expected "'.concat(n.name,'" to match "').concat(n.pattern,'", but got "').concat(d,'"'));i+=n.prefix+d+n.suffix}}else i+=n}return i}}function ut(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function lt(t){return t&&t.sensitive?"":"i"}function ct(t,e,i){return function(t,e,i){void 0===i&&(i={});for(var s=i.strict,r=void 0!==s&&s,n=i.start,o=void 0===n||n,h=i.end,a=void 0===h||h,u=i.encode,l=void 0===u?function(t){return t}:u,c=i.delimiter,d=void 0===c?"/#?":c,p=i.endsWith,f="[".concat(ut(void 0===p?"":p),"]|$"),g="[".concat(ut(d),"]"),v=o?"^":"",m=0,w=t;m<w.length;m++){var y=w[m];if("string"==typeof y)v+=ut(l(y));else{var b=ut(l(y.prefix)),A=ut(l(y.suffix));if(y.pattern)if(e&&e.push(y),b||A)if("+"===y.modifier||"*"===y.modifier){var x="*"===y.modifier?"?":"";v+="(?:".concat(b,"((?:").concat(y.pattern,")(?:").concat(A).concat(b,"(?:").concat(y.pattern,"))*)").concat(A,")").concat(x)}else v+="(?:".concat(b,"(").concat(y.pattern,")").concat(A,")").concat(y.modifier);else{if("+"===y.modifier||"*"===y.modifier)throw new TypeError('Can not repeat "'.concat(y.name,'" without a prefix and suffix'));v+="(".concat(y.pattern,")").concat(y.modifier)}else v+="(?:".concat(b).concat(A,")").concat(y.modifier)}}if(a)r||(v+="".concat(g,"?")),v+=i.endsWith?"(?=".concat(f,")"):"$";else{var E=t[t.length-1],$="string"==typeof E?g.indexOf(E[E.length-1])>-1:void 0===E;r||(v+="(?:".concat(g,"(?=").concat(f,"))?")),$||(v+="(?=".concat(g,"|").concat(f,")"))}return new RegExp(v,lt(i))}(ot(t,i),e,i)}function dt(t,e,i){return t instanceof RegExp?function(t,e){if(!e)return t;for(var i=/\((?:\?<(.*?)>)?(?!\?)/g,s=0,r=i.exec(t.source);r;)e.push({name:r[1]||s++,prefix:"",suffix:"",modifier:"",pattern:""}),r=i.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,i){var s=t.map((function(t){return dt(t,e,i).source}));return new RegExp("(?:".concat(s.join("|"),")"),lt(i))}(t,e,i):ct(t,e,i)}function pt(t){return"object"==typeof t&&!!t}function ft(t){return"function"==typeof t}function gt(t){return"string"==typeof t}function vt(t=[]){return Array.isArray(t)?t:[t]}function mt(t){return`[Vaadin.Router] ${t}`}nt?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.1.1");class wt extends Error{code;context;constructor(t){super(mt(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}const yt=Symbol("NotFoundResult");function bt(t){return new wt(t)}function At(t){return(Array.isArray(t)?t[0]:t)??""}function xt(t){return At(t?.path)}const Et=new Map;function $t(t){try{return decodeURIComponent(t)}catch{return t}}Et.set("|false",{keys:[],pattern:/(?:)/u});var kt=function(t,e,i=!1,s=[],r){const n=`${t}|${String(i)}`,o=At(e);let h=Et.get(n);if(!h){const e=[];h={keys:e,pattern:dt(t,e,{end:i,strict:""===t})},Et.set(n,h)}const a=h.pattern.exec(o);if(!a)return null;const u={...r};for(let t=1;t<a.length;t++){const e=h.keys[t-1],i=e.name,s=a[t];void 0===s&&Object.hasOwn(u,i)||("+"===e.modifier||"*"===e.modifier?u[i]=s?s.split(/[/?#]/u).map($t):[]:u[i]=s?$t(s):s)}return{keys:[...s,...h.keys],params:u,path:a[0]}};var Ct=function t(e,i,s,r,n){let o,h,a=0,u=xt(e);return u.startsWith("/")&&(s&&(u=u.substring(1)),s=!0),{next(l){if(e===l)return{done:!0,value:void 0};e.i??=function(t){return Array.isArray(t)&&t.length>0?t:void 0}(e.children);const c=e.i??[],d=!e.i&&!e.children;if(!o&&(o=kt(u,i,d,r,n),o))return{value:{keys:o.keys,params:o.params,path:o.path,route:e}};if(o&&c.length>0)for(;a<c.length;){if(!h){const r=c[a];r.parent=e;let n=o.path.length;n>0&&"/"===i.charAt(n)&&(n+=1),h=t(r,i.substring(n),s,o.keys,o.params)}const r=h.next(l);if(!r.done)return{done:!1,value:r.value};h=null,a+=1}return{done:!0,value:void 0}}}};function Dt(t){if(ft(t.route.action))return t.route.action(t)}class Ft extends Error{code;context;constructor(t,e){let i=`Path '${t.pathname}' is not properly resolved due to an error.`;const s=xt(t.route);s&&(i+=` Resolution had failed on route: '${s}'`),super(i,e),this.code=e?.code,this.context=t}warn(){console.warn(this.message)}}class St{baseUrl;#t;errorHandler;resolveRoute;#e;constructor(t,{baseUrl:e="",context:i,errorHandler:s,resolveRoute:r=Dt}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e,this.errorHandler=s,this.resolveRoute=r,Array.isArray(t)?this.#e={i:t,v:!0,action:()=>{},path:""}:this.#e={...t,parent:void 0},this.#t={...i,hash:"",next:async()=>yt,params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#t}get A(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.i??[]]}removeRoutes(){this.#e.i=[]}async resolve(t){const e=this,i={...this.#t,...gt(t)?{pathname:t}:t,next:a},s=Ct(this.#e,this.C(i.pathname)??i.pathname,!!this.baseUrl),r=this.resolveRoute;let n=null,o=null,h=i;async function a(t=!1,u=n?.value?.route,l){const c=null===l?n?.value?.route:void 0;if(n=o??s.next(c),o=null,!t&&(n.done||!function(t,e){let i=t;for(;i;)if(i=i.parent,i===e)return!0;return!1}(n.value.route,u)))return o=n,yt;if(n.done)throw bt(i);h={...i,params:n.value.params,route:n.value.route,chain:h.chain?.slice()},function(t,e){const{path:i,route:s}=e;if(s&&!s.v){const e={path:i,route:s};if(s.parent&&t.chain)for(let e=t.chain.length-1;e>=0&&t.chain[e].route!==s.parent;e--)t.chain.pop();t.chain?.push(e)}}(h,n.value);const d=await r(h);return null!=d&&d!==yt?(h.result=(p=d)&&"object"==typeof p&&"next"in p&&"params"in p&&"result"in p&&"route"in p?d.result:d,e.#t=h,h):await a(t,u,d);var p}try{return await a(!0,this.#e)}catch(t){const e=t instanceof wt?t:new Ft(h,{code:500,cause:t});if(this.errorHandler)return h.result=this.errorHandler(e),h;throw t}}setRoutes(t){this.#e.i=[...vt(t)]}C(t){if(!this.baseUrl)return t;const e=this.A,i=t.startsWith("/")?new URL(e).origin+t:`./${t}`,s=new URL(i,e).href;return s.startsWith(e)?s.slice(e.length):void 0}addRoutes(t){return this.#e.i=[...this.#e.i??[],...vt(t)],this.getRoutes()}}function Bt(t,e,i,s){const r=e.name??s?.(e);if(r&&(t.has(r)?t.get(r)?.push(e):t.set(r,[e])),Array.isArray(i))for(const r of i)r.parent=e,Bt(t,r,r.i??r.children,s)}function _t(t,e){const i=t.get(e);if(i){if(i.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return i[0]}}var Rt=function(t,e={}){if(!(t instanceof St))throw new TypeError("An instance of Resolver is expected");const i=new Map,s=new Map;return(r,n)=>{let o=_t(s,r);if(!o&&(s.clear(),Bt(s,t.root,t.root.i,e.cacheKeyProvider),o=_t(s,r),!o))throw new Error(`Route "${r}" not found`);let h=o.fullPath?i.get(o.fullPath):void 0;if(!h){let t=xt(o),e=o.parent;for(;e;){const i=xt(e);i&&(t=`${i.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`),e=e.parent}const s=ot(t),r=Object.create(null);for(const t of s)gt(t)||(r[t.name]=!0);h={keys:r,tokens:s},i.set(t,h),o.fullPath=t}let a=at(h.tokens,{encode:encodeURIComponent,...e})(n)||"/";if(e.stringifyQueryParams&&n){const t={};for(const[e,i]of Object.entries(n))!(e in h.keys)&&i&&(t[e]=i);const i=e.stringifyQueryParams(t);i&&(a+=i.startsWith("?")?i:`?${i}`)}return a}};const Ot=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Pt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Nt(t,e){if("function"!=typeof t)return;const i=Ot.exec(t.toString());if(i)try{t=new Function(i[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const jt=function(t,e){if(window.Vaadin.developmentMode)return Nt(t,e)};function It(){
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

  vaadin-dev-mode:end **/}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Pt?!(Pt&&Object.keys(Pt).map((t=>Pt[t])).filter((t=>t.productionMode)).length>0):!Nt((function(){return!0})))}catch(t){return!1}}());!function(t,e=(window.Vaadin??={})){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}(),jt(It);var Tt=async function(t,e){return t.classList.add(e),await new Promise((i=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const s=t.getBoundingClientRect(),r=`height: ${s.bottom-s.top}px; width: ${s.right-s.left}px`;t.setAttribute("style",`position: absolute; ${r}`),((t,e)=>{const i=()=>{t.removeEventListener("animationend",i),e()};t.addEventListener("animationend",i)})(t,(()=>{t.classList.remove(e),t.removeAttribute("style"),i()}))}else t.classList.remove(e),i()}))};function Mt(t){if(!t||!gt(t.path))throw new Error(mt('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!(ft(t.action)||Array.isArray(t.children)||ft(t.children)||gt(t.component)||gt(t.redirect)))throw new Error(mt(`Expected route config "${t.path}" to include either "component, redirect" or "action" function but none found.`));t.redirect&&["bundle","component"].forEach((e=>{e in t&&console.warn(mt(`Route config "${String(t.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))}))}function Lt(t){vt(t).forEach((t=>Mt(t)))}function Vt(t,e){const i=e.A;return i?new URL(t.replace(/^\//u,""),i).pathname:t}function Ut(t){return t.map((t=>t.path)).reduce(((t,e)=>e.length?`${t.replace(/\/$/u,"")}/${e.replace(/^\//u,"")}`:t),"")}function zt({chain:t=[],hash:e="",params:i={},pathname:s="",redirectFrom:r,resolver:n,search:o=""},h){const a=t.map((t=>t.route));return{baseUrl:n?.baseUrl??"",getUrl:(e={})=>n?Vt(ht(function(t){return Ut(t.map((t=>t.route)))}(t))({...i,...e}),n):"",hash:e,params:i,pathname:s,redirectFrom:r,route:h??(Array.isArray(a)?a.at(-1):void 0)??null,routes:a,search:o,searchParams:new URLSearchParams(o)}}function Ht(t,e){const i={...t.params};return{redirect:{from:t.pathname,params:i,pathname:e}}}function Zt(t,e,...i){if("function"==typeof t)return t.apply(e,i)}function Kt(t,e,...i){return s=>s&&pt(s)&&("cancel"in s||"redirect"in s)?s:Zt(e?.[t],e,...i)}function Wt(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:"go"===t,detail:e}))}function Yt(t){if(t instanceof Element)return t.nodeName.toLowerCase()}function qt(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const i=t instanceof MouseEvent?t.composedPath():t.path??[];for(let t=0;t<i.length;t++){const s=i[t];if("nodeName"in s&&"a"===s.nodeName.toLowerCase()){e=s;break}}for(;e&&e instanceof Node&&"a"!==Yt(e);)e=e.parentNode;if(!e||"a"!==Yt(e))return;const s=e;if(s.target&&"_self"!==s.target.toLowerCase())return;if(s.hasAttribute("download"))return;if(s.hasAttribute("router-ignore"))return;if(s.pathname===window.location.pathname&&""!==s.hash)return;const r=s.origin||function(t){const{port:e,protocol:i}=t;return`${i}//${"http:"===i&&"80"===e||"https:"===i&&"443"===e?t.hostname:t.host}`}(s);if(r!==window.location.origin)return;const{hash:n,pathname:o,search:h}=s;Wt("go",{hash:n,pathname:o,search:h})&&t instanceof MouseEvent&&(t.preventDefault(),"click"===t.type&&window.scrollTo(0,0))}function Gt(t){if("vaadin-router-ignore"===t.state)return;const{hash:e,pathname:i,search:s}=window.location;Wt("go",{hash:e,pathname:i,search:s})}let Jt=[];const Xt={CLICK:{activate(){window.document.addEventListener("click",qt)},inactivate(){window.document.removeEventListener("click",qt)}},POPSTATE:{activate(){window.addEventListener("popstate",Gt)},inactivate(){window.removeEventListener("popstate",Gt)}}};function Qt(t=[]){Jt.forEach((t=>t.inactivate())),t.forEach((t=>t.activate())),Jt=t}function te(){return{cancel:!0}}const ee={D:-1,params:{},route:{v:!0,children:[],path:"",action(){}},pathname:"",next:async()=>yt};class ie extends St{location=zt({resolver:this});ready=Promise.resolve(this.location);#i=new WeakSet;#s=new WeakSet;#r=this.#n.bind(this);#o=0;#h;F;#a;#u=null;#l=null;constructor(t,e){const i=document.head.querySelector("base"),s=i?.getAttribute("href");super([],{baseUrl:s?new URL(s,document.URL).href.replace(/[^/]*$/u,""):void 0,...e,resolveRoute:async t=>await this.#c(t)}),Qt(Object.values(Xt)),this.setOutlet(t),this.subscribe()}async#c(t){const{route:e}=t;if(ft(e.children)){let i=await e.children(function({next:t,...e}){return e}(t));ft(e.children)||({children:i}=e),function(t,e){if(!Array.isArray(t)&&!pt(t))throw new Error(mt(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(t)}`));const i=vt(t);i.forEach((t=>Mt(t))),e.i=i}(i,e)}const i={component:t=>{const e=document.createElement(t);return this.#s.add(e),e},prevent:te,redirect:e=>Ht(t,e)};return await Promise.resolve().then((async()=>{if(this.#d(t))return await Zt(e.action,e,t,i)})).then((t=>null==t||"object"!=typeof t&&"symbol"!=typeof t||!(t instanceof HTMLElement||t===yt||pt(t)&&"redirect"in t)?gt(e.redirect)?i.redirect(e.redirect):void 0:t)).then((t=>null!=t?t:gt(e.component)?i.component(e.component):void 0))}setOutlet(t){t&&this.#p(t),this.#h=t}getOutlet(){return this.#h}async setRoutes(t,e=!1){return this.F=void 0,this.#a=void 0,Lt(t),super.setRoutes(t),e||this.#n(),await this.ready}addRoutes(t){return Lt(t),super.addRoutes(t)}async render(t,e=!1){this.#o+=1;const i=this.#o,s={...ee,...gt(t)?{hash:"",search:"",pathname:t}:t,D:i};return this.ready=this.#f(s,e),await this.ready}async#f(t,e){const{D:i}=t;try{const s=await this.resolve(t),r=await this.#g(s);if(!this.#d(r))return this.location;const n=this.F;if(r===n)return this.#v(n,!0),this.location;if(this.location=zt(r),e&&this.#v(r,1===i),Wt("location-changed",{router:this,location:this.location}),r.S)return this.#m(r,n),this.F=r,this.location;this.#w(r,n);const o=this.#y(r);if(this.#b(r),this.#A(r,n),await o,this.#d(r))return this.#x(),this.F=r,this.location}catch(s){if(i===this.#o){e&&this.#v(this.context);for(const t of this.#h?.children??[])t.remove();throw this.location=zt(Object.assign(t,{resolver:this})),Wt("error",{router:this,error:s,...t}),s}}return this.location}async#g(t,e=t){const i=await this.#E(e),s=i!==e?i:t,r=Vt(Ut(i.chain??[]),this)===i.pathname,n=async(t,e=t.route,i)=>{const s=await t.next(!1,e,i);return null===s||s===yt?r?t:null!=e.parent?await n(t,e.parent,s):s:s},o=await n(i);if(null==o||o===yt)throw bt(s);return o!==i?await this.#g(s,o):await this.#$(i)}async#E(t){const{result:e}=t;if(e instanceof HTMLElement)return function(t,e){if(e.location=zt(t),t.chain){const i=t.chain.map((t=>t.route)).indexOf(t.route);t.chain[i].element=e}}(t,e),t;if(e&&"redirect"in e){const i=await this.#k(e.redirect,t.B,t.D);return await this.#E(i)}throw e instanceof Error?e:new Error(mt(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const[e="Unknown"]=/ (.*)\]$/u.exec(String(t))??[];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`))}async#$(t){return await this.#C(t).then((async e=>e===this.F||e===t?e:await this.#g(e)))}async#C(t){const e=this.F??{},i=e.chain??[],s=t.chain??[];let r=Promise.resolve(void 0);const n=e=>Ht(t,e);if(t.R=0,t.S=!1,i.length){for(let e=0;e<Math.min(i.length,s.length)&&(i[e].route===s[e].route&&(i[e].path===s[e].path||i[e].element===s[e].element)&&this.#D(i[e].element,s[e].element));t.R++,e++);if(t.S=s.length===i.length&&t.R===s.length&&this.#D(t.result,e.result),t.S){for(let e=s.length-1;e>=0;e--)r=this.#F(r,t,{prevent:te},i[e]);for(let e=0;e<s.length;e++)r=this.#S(r,t,{prevent:te,redirect:n},s[e]),i[e].element.location=zt(t,i[e].route)}else for(let e=i.length-1;e>=t.R;e--)r=this.#F(r,t,{prevent:te},i[e])}if(!t.S)for(let e=0;e<s.length;e++)e<t.R?e<i.length&&i[e].element&&(i[e].element.location=zt(t,i[e].route)):(r=this.#S(r,t,{prevent:te,redirect:n},s[e]),s[e].element&&(s[e].element.location=zt(t,s[e].route)));return await r.then((async e=>{if(e&&pt(e)){if("cancel"in e&&this.F)return this.F.D=t.D,this.F;if("redirect"in e)return await this.#k(e.redirect,t.B,t.D)}return t}))}async#F(t,e,i,s){const r=zt(e);let n=await t;if(this.#d(e)){n=Kt("onBeforeLeave",s.element,r,i,this)(n)}if(!pt(n)||!("redirect"in n))return n}async#S(t,e,i,s){const r=zt(e,s.route),n=await t;if(this.#d(e)){return Kt("onBeforeEnter",s.element,r,i,this)(n)}}#D(t,e){return t instanceof Element&&e instanceof Element&&(this.#s.has(t)&&this.#s.has(e)?t.localName===e.localName:t===e)}#d(t){return t.D===this.#o}async#k(t,e=0,i=0){if(e>256)throw new Error(mt(`Too many redirects when rendering ${t.from}`));return await this.resolve({...ee,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,B:e+1,D:i})}#p(t=this.#h){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(mt(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#v({pathname:t,search:e="",hash:i=""},s){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==i){const r=s?"replaceState":"pushState";window.history[r](null,document.title,t+e+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#m(t,e){let i=this.#h;for(let s=0;s<(t.R??0);s++){const r=e?.chain?.[s].element;if(r){if(r.parentNode!==i)break;t.chain[s].element=r,i=r}}return i}#w(t,e){this.#p(),this.#B();const i=this.#m(t,e);this.#u=[],this.#l=Array.from(i?.children??[]).filter((e=>this.#i.has(e)&&e!==t.result));let s=i;for(let e=t.R??0;e<(t.chain?.length??0);e++){const r=t.chain[e].element;r&&(s?.appendChild(r),this.#i.add(r),s===i&&this.#u.push(r),s=r)}}#x(){if(this.#l)for(const t of this.#l)t.remove();this.#l=null,this.#u=null}#B(){if(this.#l&&this.#u){for(const t of this.#u)t.remove();this.#l=null,this.#u=null}}#A(t,e){if(e?.chain&&null!=t.R)for(let i=e.chain.length-1;i>=t.R&&this.#d(t);i--){const s=e.chain[i].element;if(s)try{const e=zt(t);Zt(s.onAfterLeave,s,e,{},this)}finally{if(this.#l?.includes(s))for(const t of s.children)t.remove()}}}#b(t){if(t.chain&&null!=t.R)for(let e=t.R;e<t.chain.length&&this.#d(t);e++){const i=t.chain[e].element;if(i){const s=zt(t,t.chain[e].route);Zt(i.onAfterEnter,i,s,{},this)}}}async#y(t){const e=this.#l?.[0],i=this.#u?.[0],s=[],{chain:r=[]}=t;let n;for(let t=r.length-1;t>=0;t--)if(r[t].route.animate){n=r[t].route.animate;break}if(e&&i&&n){const t=pt(n)&&n.leave?n.leave:"leaving",r=pt(n)&&n.enter?n.enter:"entering";s.push(Tt(e,t)),s.push(Tt(i,r))}return await Promise.all(s),t}subscribe(){window.addEventListener("vaadin-router-go",this.#r)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#r)}#n(t){const{pathname:e,search:i,hash:s}=t instanceof CustomEvent?t.detail:window.location;gt(this.C(e))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:e,search:i,hash:s},!0))}static setTriggers(...t){Qt(t)}urlForName(t,e){return this.#a||(this.#a=Rt(this,{cacheKeyProvider:t=>"component"in t&&"string"==typeof t.component?t.component:void 0})),Vt(this.#a(t,e??void 0),this)}urlForPath(t,e){return Vt(ht(t)(e??void 0),this)}static go(t){const{pathname:e,search:i,hash:s}=gt(t)?new URL(t,"http://a"):t;return Wt("go",{pathname:e,search:i,hash:s})}}function se(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var re=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),ne=()=>Math.random().toString(36).substring(7).split("").join("."),oe={INIT:`@@redux/INIT${ne()}`,REPLACE:`@@redux/REPLACE${ne()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ne()}`};function he(t){if(void 0===t)return"undefined";if(null===t)return"null";const e=typeof t;switch(e){case"boolean":case"string":case"number":case"symbol":case"function":return e}if(Array.isArray(t))return"array";if(function(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}(t))return"date";if(function(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}(t))return"error";const i=function(t){return"function"==typeof t.constructor?t.constructor.name:null}(t);switch(i){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return i}return Object.prototype.toString.call(t).slice(8,-1).toLowerCase().replace(/\s/g,"")}function ae(t){let e=typeof t;return"production"!==process.env.NODE_ENV&&(e=he(t)),e}const ue={data:[],router:null};const le=function(t,e){if("function"!=typeof t)throw new Error("production"===process.env.NODE_ENV?se(2):`Expected the root reducer to be a function. Instead, received: '${ae(t)}'`);let i=t,s=e,r=new Map,n=r,o=0,h=!1;function a(){n===r&&(n=new Map,r.forEach(((t,e)=>{n.set(e,t)})))}function u(){if(h)throw new Error("production"===process.env.NODE_ENV?se(3):"You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function l(t){if("function"!=typeof t)throw new Error("production"===process.env.NODE_ENV?se(4):`Expected the listener to be a function. Instead, received: '${ae(t)}'`);if(h)throw new Error("production"===process.env.NODE_ENV?se(5):"You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");let e=!0;a();const i=o++;return n.set(i,t),function(){if(e){if(h)throw new Error("production"===process.env.NODE_ENV?se(6):"You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");e=!1,a(),n.delete(i),r=null}}}function c(t){if(!function(t){if("object"!=typeof t||null===t)return!1;let e=t;for(;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||null===Object.getPrototypeOf(t)}(t))throw new Error("production"===process.env.NODE_ENV?se(7):`Actions must be plain objects. Instead, the actual type was: '${ae(t)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);if(void 0===t.type)throw new Error("production"===process.env.NODE_ENV?se(8):'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');if("string"!=typeof t.type)throw new Error("production"===process.env.NODE_ENV?se(17):`Action "type" property must be a string. Instead, the actual type was: '${ae(t.type)}'. Value was: '${t.type}' (stringified)`);if(h)throw new Error("production"===process.env.NODE_ENV?se(9):"Reducers may not dispatch actions.");try{h=!0,s=i(s,t)}finally{h=!1}return(r=n).forEach((t=>{t()})),t}return c({type:oe.INIT}),{dispatch:c,subscribe:l,getState:u,replaceReducer:function(t){if("function"!=typeof t)throw new Error("production"===process.env.NODE_ENV?se(10):`Expected the nextReducer to be a function. Instead, received: '${ae(t)}`);i=t,c({type:oe.REPLACE})},[re]:function(){const t=l;return{subscribe(e){if("object"!=typeof e||null===e)throw new Error("production"===process.env.NODE_ENV?se(11):`Expected the observer to be an object. Instead, received: '${ae(e)}'`);function i(){const t=e;t.next&&t.next(u())}i();return{unsubscribe:t(i)}},[re](){return this}}}}}((function(t=ue,e){switch(e.type){case"INITIAL":return{...t,data:[...e.payload]};case"DELETE":const i=t.data.filter((t=>e.payload!==t._id));return{...t,data:i};case"ADD_NEW":const s=[e.payload,...t.data];return{...t,data:s};case"EDIT_DATA":const r=t.data.findIndex((t=>t._id===e.payload._id));if(r<0)return t;const n=[...t.data];return n[r]={...e.payload},{...t,data:n};case"SET_ROUTER":return{...t,router:e.payload};default:return t}}));class ce extends rt{constructor(){super(),this.unsubscribe=le.subscribe((()=>{this.stateUpdated()}))}stateUpdated(){}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe()}}const de=t=>"string"==typeof t,pe=()=>{let t,e;const i=new Promise(((i,s)=>{t=i,e=s}));return i.resolve=t,i.reject=e,i},fe=t=>null==t?"":""+t,ge=/###/g,ve=t=>t&&t.indexOf("###")>-1?t.replace(ge,"."):t,me=t=>!t||de(t),we=(t,e,i)=>{const s=de(e)?e.split("."):e;let r=0;for(;r<s.length-1;){if(me(t))return{};const e=ve(s[r]);!t[e]&&i&&(t[e]=new i),t=Object.prototype.hasOwnProperty.call(t,e)?t[e]:{},++r}return me(t)?{}:{obj:t,k:ve(s[r])}},ye=(t,e,i)=>{const{obj:s,k:r}=we(t,e,Object);if(void 0!==s||1===e.length)return void(s[r]=i);let n=e[e.length-1],o=e.slice(0,e.length-1),h=we(t,o,Object);for(;void 0===h.obj&&o.length;)n=`${o[o.length-1]}.${n}`,o=o.slice(0,o.length-1),h=we(t,o,Object),h&&h.obj&&void 0!==h.obj[`${h.k}.${n}`]&&(h.obj=void 0);h.obj[`${h.k}.${n}`]=i},be=(t,e)=>{const{obj:i,k:s}=we(t,e);if(i)return i[s]},Ae=(t,e,i)=>{for(const s in e)"__proto__"!==s&&"constructor"!==s&&(s in t?de(t[s])||t[s]instanceof String||de(e[s])||e[s]instanceof String?i&&(t[s]=e[s]):Ae(t[s],e[s],i):t[s]=e[s]);return t},xe=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Ee={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const $e=t=>de(t)?t.replace(/[&<>"'\/]/g,(t=>Ee[t])):t;const ke=[" ",",","?","!",";"],Ce=new class{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const e=this.regExpMap.get(t);if(void 0!==e)return e;const i=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,i),this.regExpQueue.push(t),i}}(20),De=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!t)return;if(t[e])return t[e];const s=e.split(i);let r=t;for(let t=0;t<s.length;){if(!r||"object"!=typeof r)return;let e,n="";for(let o=t;o<s.length;++o)if(o!==t&&(n+=i),n+=s[o],e=r[n],void 0!==e){if(["string","number","boolean"].indexOf(typeof e)>-1&&o<s.length-1)continue;t+=o-t+1;break}r=e}return r},Fe=t=>t&&t.replace("_","-"),Se={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Be{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(t,e)}init(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=e.prefix||"i18next:",this.logger=t||Se,this.options=e,this.debug=e.debug}log(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"log","",!0)}warn(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"warn","",!0)}error(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"error","")}deprecate(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(t,e,i,s){return s&&!this.debug?null:(de(t[0])&&(t[0]=`${i}${this.prefix} ${t[0]}`),this.logger[e](t))}create(t){return new Be(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return(t=t||this.options).prefix=t.prefix||this.prefix,new Be(this.logger,t)}}var _e=new Be;class Re{constructor(){this.observers={}}on(t,e){return t.split(" ").forEach((t=>{this.observers[t]||(this.observers[t]=new Map);const i=this.observers[t].get(e)||0;this.observers[t].set(e,i+1)})),this}off(t,e){this.observers[t]&&(e?this.observers[t].delete(e):delete this.observers[t])}emit(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];if(this.observers[t]){Array.from(this.observers[t].entries()).forEach((t=>{let[e,s]=t;for(let t=0;t<s;t++)e(...i)}))}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach((e=>{let[s,r]=e;for(let e=0;e<r;e++)s.apply(s,[t,...i])}))}}}class Oe extends Re{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=e,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)}getResource(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r=void 0!==s.keySeparator?s.keySeparator:this.options.keySeparator,n=void 0!==s.ignoreJSONStructure?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;t.indexOf(".")>-1?o=t.split("."):(o=[t,e],i&&(Array.isArray(i)?o.push(...i):de(i)&&r?o.push(...i.split(r)):o.push(i)));const h=be(this.data,o);return!h&&!e&&!i&&t.indexOf(".")>-1&&(t=o[0],e=o[1],i=o.slice(2).join(".")),!h&&n&&de(i)?De(this.data&&this.data[t]&&this.data[t][e],i,r):h}addResource(t,e,i,s){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const n=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator;let o=[t,e];i&&(o=o.concat(n?i.split(n):i)),t.indexOf(".")>-1&&(o=t.split("."),s=e,e=o[1]),this.addNamespaces(e),ye(this.data,o,s),r.silent||this.emit("added",t,e,i,s)}addResources(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const s in i)(de(i[s])||Array.isArray(i[s]))&&this.addResource(t,e,s,i[s],{silent:!0});s.silent||this.emit("added",t,e,i)}addResourceBundle(t,e,i,s,r){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},o=[t,e];t.indexOf(".")>-1&&(o=t.split("."),s=i,i=e,e=o[1]),this.addNamespaces(e);let h=be(this.data,o)||{};n.skipCopy||(i=JSON.parse(JSON.stringify(i))),s?Ae(h,i,r):h={...h,...i},ye(this.data,o,h),n.silent||this.emit("added",t,e,i)}removeResourceBundle(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)}hasResourceBundle(t,e){return void 0!==this.getResource(t,e)}getResourceBundle(t,e){return e||(e=this.options.defaultNS),"v1"===this.options.compatibilityAPI?{...this.getResource(t,e)}:this.getResource(t,e)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const e=this.getDataByLanguage(t);return!!(e&&Object.keys(e)||[]).find((t=>e[t]&&Object.keys(e[t]).length>0))}toJSON(){return this.data}}var Pe={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,i,s,r){return t.forEach((t=>{this.processors[t]&&(e=this.processors[t].process(e,i,s,r))})),e}};const Ne={};class je extends Re{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),((t,e,i)=>{t.forEach((t=>{e[t]&&(i[t]=e[t])}))})(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=e,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=_e.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==t)return!1;const i=this.resolve(t,e);return i&&void 0!==i.res}extractFromKey(t,e){let i=void 0!==e.nsSeparator?e.nsSeparator:this.options.nsSeparator;void 0===i&&(i=":");const s=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator;let r=e.ns||this.options.defaultNS||[];const n=i&&t.indexOf(i)>-1,o=!(this.options.userDefinedKeySeparator||e.keySeparator||this.options.userDefinedNsSeparator||e.nsSeparator||((t,e,i)=>{e=e||"",i=i||"";const s=ke.filter((t=>e.indexOf(t)<0&&i.indexOf(t)<0));if(0===s.length)return!0;const r=Ce.getRegExp(`(${s.map((t=>"?"===t?"\\?":t)).join("|")})`);let n=!r.test(t);if(!n){const e=t.indexOf(i);e>0&&!r.test(t.substring(0,e))&&(n=!0)}return n})(t,i,s));if(n&&!o){const e=t.match(this.interpolator.nestingRegexp);if(e&&e.length>0)return{key:t,namespaces:de(r)?[r]:r};const n=t.split(i);(i!==s||i===s&&this.options.ns.indexOf(n[0])>-1)&&(r=n.shift()),t=n.join(s)}return{key:t,namespaces:de(r)?[r]:r}}translate(t,e,i){if("object"!=typeof e&&this.options.overloadTranslationOptionHandler&&(e=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof e&&(e={...e}),e||(e={}),null==t)return"";Array.isArray(t)||(t=[String(t)]);const s=void 0!==e.returnDetails?e.returnDetails:this.options.returnDetails,r=void 0!==e.keySeparator?e.keySeparator:this.options.keySeparator,{key:n,namespaces:o}=this.extractFromKey(t[t.length-1],e),h=o[o.length-1],a=e.lng||this.language,u=e.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(a&&"cimode"===a.toLowerCase()){if(u){const t=e.nsSeparator||this.options.nsSeparator;return s?{res:`${h}${t}${n}`,usedKey:n,exactUsedKey:n,usedLng:a,usedNS:h,usedParams:this.getUsedParamsDetails(e)}:`${h}${t}${n}`}return s?{res:n,usedKey:n,exactUsedKey:n,usedLng:a,usedNS:h,usedParams:this.getUsedParamsDetails(e)}:n}const l=this.resolve(t,e);let c=l&&l.res;const d=l&&l.usedKey||n,p=l&&l.exactUsedKey||n,f=Object.prototype.toString.apply(c),g=void 0!==e.joinArrays?e.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,m=!de(c)&&"boolean"!=typeof c&&"number"!=typeof c;if(!(v&&c&&m&&["[object Number]","[object Function]","[object RegExp]"].indexOf(f)<0)||de(g)&&Array.isArray(c))if(v&&de(g)&&Array.isArray(c))c=c.join(g),c&&(c=this.extendTranslation(c,t,e,i));else{let s=!1,o=!1;const u=void 0!==e.count&&!de(e.count),d=je.hasDefaultValue(e),p=u?this.pluralResolver.getSuffix(a,e.count,e):"",f=e.ordinal&&u?this.pluralResolver.getSuffix(a,e.count,{ordinal:!1}):"",g=u&&!e.ordinal&&0===e.count&&this.pluralResolver.shouldUseIntlApi(),v=g&&e[`defaultValue${this.options.pluralSeparator}zero`]||e[`defaultValue${p}`]||e[`defaultValue${f}`]||e.defaultValue;!this.isValidLookup(c)&&d&&(s=!0,c=v),this.isValidLookup(c)||(o=!0,c=n);const m=(e.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&o?void 0:c,w=d&&v!==c&&this.options.updateMissing;if(o||s||w){if(this.logger.log(w?"updateKey":"missingKey",a,h,n,w?v:c),r){const t=this.resolve(n,{...e,keySeparator:!1});t&&t.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let t=[];const i=this.languageUtils.getFallbackCodes(this.options.fallbackLng,e.lng||this.language);if("fallback"===this.options.saveMissingTo&&i&&i[0])for(let e=0;e<i.length;e++)t.push(i[e]);else"all"===this.options.saveMissingTo?t=this.languageUtils.toResolveHierarchy(e.lng||this.language):t.push(e.lng||this.language);const s=(t,i,s)=>{const r=d&&s!==c?s:m;this.options.missingKeyHandler?this.options.missingKeyHandler(t,h,i,r,w,e):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(t,h,i,r,w,e),this.emit("missingKey",t,h,i,c)};this.options.saveMissing&&(this.options.saveMissingPlurals&&u?t.forEach((t=>{const i=this.pluralResolver.getSuffixes(t,e);g&&e[`defaultValue${this.options.pluralSeparator}zero`]&&i.indexOf(`${this.options.pluralSeparator}zero`)<0&&i.push(`${this.options.pluralSeparator}zero`),i.forEach((i=>{s([t],n+i,e[`defaultValue${i}`]||v)}))})):s(t,n,v))}c=this.extendTranslation(c,t,e,l,i),o&&c===n&&this.options.appendNamespaceToMissingKey&&(c=`${h}:${n}`),(o||s)&&this.options.parseMissingKeyHandler&&(c="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${h}:${n}`:n,s?c:void 0):this.options.parseMissingKeyHandler(c))}else{if(!e.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const t=this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,c,{...e,ns:o}):`key '${n} (${this.language})' returned an object instead of string.`;return s?(l.res=t,l.usedParams=this.getUsedParamsDetails(e),l):t}if(r){const t=Array.isArray(c),i=t?[]:{},s=t?p:d;for(const t in c)if(Object.prototype.hasOwnProperty.call(c,t)){const n=`${s}${r}${t}`;i[t]=this.translate(n,{...e,joinArrays:!1,ns:o}),i[t]===n&&(i[t]=c[t])}c=i}}return s?(l.res=c,l.usedParams=this.getUsedParamsDetails(e),l):c}extendTranslation(t,e,i,s,r){var n=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const o=de(t)&&(i&&i.interpolation&&void 0!==i.interpolation.skipOnVariables?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(o){const e=t.match(this.interpolator.nestingRegexp);h=e&&e.length}let a=i.replace&&!de(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(a={...this.options.interpolation.defaultVariables,...a}),t=this.interpolator.interpolate(t,a,i.lng||this.language||s.usedLng,i),o){const e=t.match(this.interpolator.nestingRegexp);h<(e&&e.length)&&(i.nest=!1)}!i.lng&&"v1"!==this.options.compatibilityAPI&&s&&s.res&&(i.lng=this.language||s.usedLng),!1!==i.nest&&(t=this.interpolator.nest(t,(function(){for(var t=arguments.length,s=new Array(t),o=0;o<t;o++)s[o]=arguments[o];return r&&r[0]===s[0]&&!i.context?(n.logger.warn(`It seems you are nesting recursively key: ${s[0]} in key: ${e[0]}`),null):n.translate(...s,e)}),i)),i.interpolation&&this.interpolator.reset()}const o=i.postProcess||this.options.postProcess,h=de(o)?[o]:o;return null!=t&&h&&h.length&&!1!==i.applyPostProcessor&&(t=Pe.handle(h,t,e,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),t}resolve(t){let e,i,s,r,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return de(t)&&(t=[t]),t.forEach((t=>{if(this.isValidLookup(e))return;const h=this.extractFromKey(t,o),a=h.key;i=a;let u=h.namespaces;this.options.fallbackNS&&(u=u.concat(this.options.fallbackNS));const l=void 0!==o.count&&!de(o.count),c=l&&!o.ordinal&&0===o.count&&this.pluralResolver.shouldUseIntlApi(),d=void 0!==o.context&&(de(o.context)||"number"==typeof o.context)&&""!==o.context,p=o.lngs?o.lngs:this.languageUtils.toResolveHierarchy(o.lng||this.language,o.fallbackLng);u.forEach((t=>{this.isValidLookup(e)||(n=t,!Ne[`${p[0]}-${t}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(n)&&(Ne[`${p[0]}-${t}`]=!0,this.logger.warn(`key "${i}" for languages "${p.join(", ")}" won't get resolved as namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach((i=>{if(this.isValidLookup(e))return;r=i;const n=[a];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(n,a,i,t,o);else{let t;l&&(t=this.pluralResolver.getSuffix(i,o.count,o));const e=`${this.options.pluralSeparator}zero`,s=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(l&&(n.push(a+t),o.ordinal&&0===t.indexOf(s)&&n.push(a+t.replace(s,this.options.pluralSeparator)),c&&n.push(a+e)),d){const i=`${a}${this.options.contextSeparator}${o.context}`;n.push(i),l&&(n.push(i+t),o.ordinal&&0===t.indexOf(s)&&n.push(i+t.replace(s,this.options.pluralSeparator)),c&&n.push(i+e))}}let h;for(;h=n.pop();)this.isValidLookup(e)||(s=h,e=this.getResource(i,t,h,o))})))}))})),{res:e,usedKey:i,exactUsedKey:s,usedLng:r,usedNS:n}}isValidLookup(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)}getResource(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,e,i,s):this.resourceStore.getResource(t,e,i,s)}getUsedParamsDetails(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=t.replace&&!de(t.replace);let s=i?t.replace:t;if(i&&void 0!==t.count&&(s.count=t.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!i){s={...s};for(const t of e)delete s[t]}return s}static hasDefaultValue(t){const e="defaultValue";for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&e===i.substring(0,12)&&void 0!==t[i])return!0;return!1}}const Ie=t=>t.charAt(0).toUpperCase()+t.slice(1);class Te{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=_e.create("languageUtils")}getScriptPartFromCode(t){if(!(t=Fe(t))||t.indexOf("-")<0)return null;const e=t.split("-");return 2===e.length?null:(e.pop(),"x"===e[e.length-1].toLowerCase()?null:this.formatLanguageCode(e.join("-")))}getLanguagePartFromCode(t){if(!(t=Fe(t))||t.indexOf("-")<0)return t;const e=t.split("-");return this.formatLanguageCode(e[0])}formatLanguageCode(t){if(de(t)&&t.indexOf("-")>-1){if("undefined"!=typeof Intl&&void 0!==Intl.getCanonicalLocales)try{let e=Intl.getCanonicalLocales(t)[0];if(e&&this.options.lowerCaseLng&&(e=e.toLowerCase()),e)return e}catch(t){}const e=["hans","hant","latn","cyrl","cans","mong","arab"];let i=t.split("-");return this.options.lowerCaseLng?i=i.map((t=>t.toLowerCase())):2===i.length?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),e.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ie(i[1].toLowerCase()))):3===i.length&&(i[0]=i[0].toLowerCase(),2===i[1].length&&(i[1]=i[1].toUpperCase()),"sgn"!==i[0]&&2===i[2].length&&(i[2]=i[2].toUpperCase()),e.indexOf(i[1].toLowerCase())>-1&&(i[1]=Ie(i[1].toLowerCase())),e.indexOf(i[2].toLowerCase())>-1&&(i[2]=Ie(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let e;return t.forEach((t=>{if(e)return;const i=this.formatLanguageCode(t);this.options.supportedLngs&&!this.isSupportedCode(i)||(e=i)})),!e&&this.options.supportedLngs&&t.forEach((t=>{if(e)return;const i=this.getLanguagePartFromCode(t);if(this.isSupportedCode(i))return e=i;e=this.options.supportedLngs.find((t=>t===i?t:t.indexOf("-")<0&&i.indexOf("-")<0?void 0:t.indexOf("-")>0&&i.indexOf("-")<0&&t.substring(0,t.indexOf("-"))===i||0===t.indexOf(i)&&i.length>1?t:void 0))})),e||(e=this.getFallbackCodes(this.options.fallbackLng)[0]),e}getFallbackCodes(t,e){if(!t)return[];if("function"==typeof t&&(t=t(e)),de(t)&&(t=[t]),Array.isArray(t))return t;if(!e)return t.default||[];let i=t[e];return i||(i=t[this.getScriptPartFromCode(e)]),i||(i=t[this.formatLanguageCode(e)]),i||(i=t[this.getLanguagePartFromCode(e)]),i||(i=t.default),i||[]}toResolveHierarchy(t,e){const i=this.getFallbackCodes(e||this.options.fallbackLng||[],t),s=[],r=t=>{t&&(this.isSupportedCode(t)?s.push(t):this.logger.warn(`rejecting language code not found in supportedLngs: ${t}`))};return de(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?("languageOnly"!==this.options.load&&r(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&r(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&r(this.getLanguagePartFromCode(t))):de(t)&&r(this.formatLanguageCode(t)),i.forEach((t=>{s.indexOf(t)<0&&r(this.formatLanguageCode(t))})),s}}let Me=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Le={1:t=>Number(t>1),2:t=>Number(1!=t),3:t=>0,4:t=>Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2),5:t=>Number(0==t?0:1==t?1:2==t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5),6:t=>Number(1==t?0:t>=2&&t<=4?1:2),7:t=>Number(1==t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2),8:t=>Number(1==t?0:2==t?1:8!=t&&11!=t?2:3),9:t=>Number(t>=2),10:t=>Number(1==t?0:2==t?1:t<7?2:t<11?3:4),11:t=>Number(1==t||11==t?0:2==t||12==t?1:t>2&&t<20?2:3),12:t=>Number(t%10!=1||t%100==11),13:t=>Number(0!==t),14:t=>Number(1==t?0:2==t?1:3==t?2:3),15:t=>Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2),16:t=>Number(t%10==1&&t%100!=11?0:0!==t?1:2),17:t=>Number(1==t||t%10==1&&t%100!=11?0:1),18:t=>Number(0==t?0:1==t?1:2),19:t=>Number(1==t?0:0==t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3),20:t=>Number(1==t?0:0==t||t%100>0&&t%100<20?1:2),21:t=>Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0),22:t=>Number(1==t?0:2==t?1:(t<0||t>10)&&t%10==0?2:3)};const Ve=["v1","v2","v3"],Ue=["v4"],ze={zero:0,one:1,two:2,few:3,many:4,other:5};class He{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=t,this.options=e,this.logger=_e.create("pluralResolver"),this.options.compatibilityJSON&&!Ue.includes(this.options.compatibilityJSON)||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=(()=>{const t={};return Me.forEach((e=>{e.lngs.forEach((i=>{t[i]={numbers:e.nr,plurals:Le[e.fc]}}))})),t})(),this.pluralRulesCache={}}addRule(t,e){this.rules[t]=e}clearCache(){this.pluralRulesCache={}}getRule(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{const i=Fe("dev"===t?"en":t),s=e.ordinal?"ordinal":"cardinal",r=JSON.stringify({cleanedCode:i,type:s});if(r in this.pluralRulesCache)return this.pluralRulesCache[r];const n=new Intl.PluralRules(i,{type:s});return this.pluralRulesCache[r]=n,n}catch(t){return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getRule(t,e);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(t,i).map((t=>`${e}${t}`))}getSuffixes(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getRule(t,e);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort(((t,e)=>ze[t]-ze[e])).map((t=>`${this.options.prepend}${e.ordinal?`ordinal${this.options.prepend}`:""}${t}`)):i.numbers.map((i=>this.getSuffix(t,i,e))):[]}getSuffix(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=this.getRule(t,i);return s?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${s.select(e)}`:this.getSuffixRetroCompatible(s,e):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,e){const i=t.noAbs?t.plurals(e):t.plurals(Math.abs(e));let s=t.numbers[i];this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]&&(2===s?s="plural":1===s&&(s=""));const r=()=>this.options.prepend&&s.toString()?this.options.prepend+s.toString():s.toString();return"v1"===this.options.compatibilityJSON?1===s?"":"number"==typeof s?`_plural_${s.toString()}`:r():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]?r():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!Ve.includes(this.options.compatibilityJSON)}}const Ze=function(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],n=((t,e,i)=>{const s=be(t,i);return void 0!==s?s:be(e,i)})(t,e,i);return!n&&r&&de(i)&&(n=De(t,i,s),void 0===n&&(n=De(e,i,s))),n},Ke=t=>t.replace(/\$/g,"$$$$");class We{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=_e.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(t=>t),this.init(t)}init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:e,escapeValue:i,useRawValueToEscape:s,prefix:r,prefixEscaped:n,suffix:o,suffixEscaped:h,formatSeparator:a,unescapeSuffix:u,unescapePrefix:l,nestingPrefix:c,nestingPrefixEscaped:d,nestingSuffix:p,nestingSuffixEscaped:f,nestingOptionsSeparator:g,maxReplaces:v,alwaysFormat:m}=t.interpolation;this.escape=void 0!==e?e:$e,this.escapeValue=void 0===i||i,this.useRawValueToEscape=void 0!==s&&s,this.prefix=r?xe(r):n||"{{",this.suffix=o?xe(o):h||"}}",this.formatSeparator=a||",",this.unescapePrefix=u?"":l||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=c?xe(c):d||xe("$t("),this.nestingSuffix=p?xe(p):f||xe(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=v||1e3,this.alwaysFormat=void 0!==m&&m,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(t,e)=>t&&t.source===e?(t.lastIndex=0,t):new RegExp(e,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,e,i,s){let r,n,o;const h=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},a=t=>{if(t.indexOf(this.formatSeparator)<0){const r=Ze(e,h,t,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(r,void 0,i,{...s,...e,interpolationkey:t}):r}const r=t.split(this.formatSeparator),n=r.shift().trim(),o=r.join(this.formatSeparator).trim();return this.format(Ze(e,h,n,this.options.keySeparator,this.options.ignoreJSONStructure),o,i,{...s,...e,interpolationkey:n})};this.resetRegExp();const u=s&&s.missingInterpolationHandler||this.options.missingInterpolationHandler,l=s&&s.interpolation&&void 0!==s.interpolation.skipOnVariables?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:t=>Ke(t)},{regex:this.regexp,safeValue:t=>this.escapeValue?Ke(this.escape(t)):Ke(t)}].forEach((e=>{for(o=0;r=e.regex.exec(t);){const i=r[1].trim();if(n=a(i),void 0===n)if("function"==typeof u){const e=u(t,r,s);n=de(e)?e:""}else if(s&&Object.prototype.hasOwnProperty.call(s,i))n="";else{if(l){n=r[0];continue}this.logger.warn(`missed to pass in variable ${i} for interpolating ${t}`),n=""}else de(n)||this.useRawValueToEscape||(n=fe(n));const h=e.safeValue(n);if(t=t.replace(r[0],h),l?(e.regex.lastIndex+=n.length,e.regex.lastIndex-=r[0].length):e.regex.lastIndex=0,o++,o>=this.maxReplaces)break}})),t}nest(t,e){let i,s,r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=(t,e)=>{const i=this.nestingOptionsSeparator;if(t.indexOf(i)<0)return t;const s=t.split(new RegExp(`${i}[ ]*{`));let n=`{${s[1]}`;t=s[0],n=this.interpolate(n,r);const o=n.match(/'/g),h=n.match(/"/g);(o&&o.length%2==0&&!h||h.length%2!=0)&&(n=n.replace(/'/g,'"'));try{r=JSON.parse(n),e&&(r={...e,...r})}catch(e){return this.logger.warn(`failed parsing options string in nesting for key ${t}`,e),`${t}${i}${n}`}return r.defaultValue&&r.defaultValue.indexOf(this.prefix)>-1&&delete r.defaultValue,t};for(;i=this.nestingRegexp.exec(t);){let h=[];r={...n},r=r.replace&&!de(r.replace)?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;let a=!1;if(-1!==i[0].indexOf(this.formatSeparator)&&!/{.*}/.test(i[1])){const t=i[1].split(this.formatSeparator).map((t=>t.trim()));i[1]=t.shift(),h=t,a=!0}if(s=e(o.call(this,i[1].trim(),r),r),s&&i[0]===t&&!de(s))return s;de(s)||(s=fe(s)),s||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),s=""),a&&(s=h.reduce(((t,e)=>this.format(t,e,n.lng,{...n,interpolationkey:i[1].trim()})),s.trim())),t=t.replace(i[0],s),this.regexp.lastIndex=0}return t}}const Ye=t=>{const e={};return(i,s,r)=>{let n=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(n={...n,[r.interpolationkey]:void 0});const o=s+JSON.stringify(n);let h=e[o];return h||(h=t(Fe(s),r),e[o]=h),h(i)}};class qe{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=_e.create("formatter"),this.options=t,this.formats={number:Ye(((t,e)=>{const i=new Intl.NumberFormat(t,{...e});return t=>i.format(t)})),currency:Ye(((t,e)=>{const i=new Intl.NumberFormat(t,{...e,style:"currency"});return t=>i.format(t)})),datetime:Ye(((t,e)=>{const i=new Intl.DateTimeFormat(t,{...e});return t=>i.format(t)})),relativetime:Ye(((t,e)=>{const i=new Intl.RelativeTimeFormat(t,{...e});return t=>i.format(t,e.range||"day")})),list:Ye(((t,e)=>{const i=new Intl.ListFormat(t,{...e});return t=>i.format(t)}))},this.init(t)}init(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=e.interpolation.formatSeparator||","}add(t,e){this.formats[t.toLowerCase().trim()]=e}addCached(t,e){this.formats[t.toLowerCase().trim()]=Ye(e)}format(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r=e.split(this.formatSeparator);if(r.length>1&&r[0].indexOf("(")>1&&r[0].indexOf(")")<0&&r.find((t=>t.indexOf(")")>-1))){const t=r.findIndex((t=>t.indexOf(")")>-1));r[0]=[r[0],...r.splice(1,t)].join(this.formatSeparator)}const n=r.reduce(((t,e)=>{const{formatName:r,formatOptions:n}=(t=>{let e=t.toLowerCase().trim();const i={};if(t.indexOf("(")>-1){const s=t.split("(");e=s[0].toLowerCase().trim();const r=s[1].substring(0,s[1].length-1);"currency"===e&&r.indexOf(":")<0?i.currency||(i.currency=r.trim()):"relativetime"===e&&r.indexOf(":")<0?i.range||(i.range=r.trim()):r.split(";").forEach((t=>{if(t){const[e,...s]=t.split(":"),r=s.join(":").trim().replace(/^'+|'+$/g,""),n=e.trim();i[n]||(i[n]=r),"false"===r&&(i[n]=!1),"true"===r&&(i[n]=!0),isNaN(r)||(i[n]=parseInt(r,10))}}))}return{formatName:e,formatOptions:i}})(e);if(this.formats[r]){let e=t;try{const o=s&&s.formatParams&&s.formatParams[s.interpolationkey]||{},h=o.locale||o.lng||s.locale||s.lng||i;e=this.formats[r](t,h,{...n,...s,...o})}catch(t){this.logger.warn(t)}return e}return this.logger.warn(`there was no format function for ${r}`),t}),t);return n}}class Ge extends Re{constructor(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=t,this.store=e,this.services=i,this.languageUtils=i.languageUtils,this.options=s,this.logger=_e.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,s.backend,s)}queueLoad(t,e,i,s){const r={},n={},o={},h={};return t.forEach((t=>{let s=!0;e.forEach((e=>{const o=`${t}|${e}`;!i.reload&&this.store.hasResourceBundle(t,e)?this.state[o]=2:this.state[o]<0||(1===this.state[o]?void 0===n[o]&&(n[o]=!0):(this.state[o]=1,s=!1,void 0===n[o]&&(n[o]=!0),void 0===r[o]&&(r[o]=!0),void 0===h[e]&&(h[e]=!0)))})),s||(o[t]=!0)})),(Object.keys(r).length||Object.keys(n).length)&&this.queue.push({pending:n,pendingCount:Object.keys(n).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(r),pending:Object.keys(n),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(h)}}loaded(t,e,i){const s=t.split("|"),r=s[0],n=s[1];e&&this.emit("failedLoading",r,n,e),!e&&i&&this.store.addResourceBundle(r,n,i,void 0,void 0,{skipCopy:!0}),this.state[t]=e?-1:2,e&&i&&(this.state[t]=0);const o={};this.queue.forEach((i=>{((t,e,i)=>{const{obj:s,k:r}=we(t,e,Object);s[r]=s[r]||[],s[r].push(i)})(i.loaded,[r],n),((t,e)=>{void 0!==t.pending[e]&&(delete t.pending[e],t.pendingCount--)})(i,t),e&&i.errors.push(e),0!==i.pendingCount||i.done||(Object.keys(i.loaded).forEach((t=>{o[t]||(o[t]={});const e=i.loaded[t];e.length&&e.forEach((e=>{void 0===o[t][e]&&(o[t][e]=!0)}))})),i.done=!0,i.errors.length?i.callback(i.errors):i.callback())})),this.emit("loaded",o),this.queue=this.queue.filter((t=>!t.done))}read(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,n=arguments.length>5?arguments[5]:void 0;if(!t.length)return n(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:t,ns:e,fcName:i,tried:s,wait:r,callback:n});this.readingCalls++;const o=(o,h)=>{if(this.readingCalls--,this.waitingReads.length>0){const t=this.waitingReads.shift();this.read(t.lng,t.ns,t.fcName,t.tried,t.wait,t.callback)}o&&h&&s<this.maxRetries?setTimeout((()=>{this.read.call(this,t,e,i,s+1,2*r,n)}),r):n(o,h)},h=this.backend[i].bind(this.backend);if(2!==h.length)return h(t,e,o);try{const i=h(t,e);i&&"function"==typeof i.then?i.then((t=>o(null,t))).catch(o):o(null,i)}catch(t){o(t)}}prepareLoading(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();de(t)&&(t=this.languageUtils.toResolveHierarchy(t)),de(e)&&(e=[e]);const r=this.queueLoad(t,e,i,s);if(!r.toLoad.length)return r.pending.length||s(),null;r.toLoad.forEach((t=>{this.loadOne(t)}))}load(t,e,i){this.prepareLoading(t,e,{},i)}reload(t,e,i){this.prepareLoading(t,e,{reload:!0},i)}loadOne(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const i=t.split("|"),s=i[0],r=i[1];this.read(s,r,"read",void 0,void 0,((i,n)=>{i&&this.logger.warn(`${e}loading namespace ${r} for language ${s} failed`,i),!i&&n&&this.logger.log(`${e}loaded namespace ${r} for language ${s}`,n),this.loaded(t,i,n)}))}saveMissing(t,e,i,s,r){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(e))this.logger.warn(`did not save key "${i}" as the namespace "${e}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=i&&""!==i){if(this.backend&&this.backend.create){const h={...n,isUpdate:r},a=this.backend.create.bind(this.backend);if(a.length<6)try{let r;r=5===a.length?a(t,e,i,s,h):a(t,e,i,s),r&&"function"==typeof r.then?r.then((t=>o(null,t))).catch(o):o(null,r)}catch(t){o(t)}else a(t,e,i,s,o,h)}t&&t[0]&&this.store.addResource(t[0],e,i,s)}}}const Je=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if("object"==typeof t[1]&&(e=t[1]),de(t[1])&&(e.defaultValue=t[1]),de(t[2])&&(e.tDescription=t[2]),"object"==typeof t[2]||"object"==typeof t[3]){const i=t[3]||t[2];Object.keys(i).forEach((t=>{e[t]=i[t]}))}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Xe=t=>(de(t.ns)&&(t.ns=[t.ns]),de(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),de(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Qe=()=>{};class ti extends Re{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;var i;if(super(),this.options=Xe(t),this.services={},this.logger=_e,this.modules={external:[]},i=this,Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t=>{"function"==typeof i[t]&&(i[t]=i[t].bind(i))})),e&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,e),this;setTimeout((()=>{this.init(t,e)}),0)}}init(){var t=this;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"==typeof e&&(i=e,e={}),!e.defaultNS&&!1!==e.defaultNS&&e.ns&&(de(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const s=Je();this.options={...s,...this.options,...Xe(e)},"v1"!==this.options.compatibilityAPI&&(this.options.interpolation={...s.interpolation,...this.options.interpolation}),void 0!==e.keySeparator&&(this.options.userDefinedKeySeparator=e.keySeparator),void 0!==e.nsSeparator&&(this.options.userDefinedNsSeparator=e.nsSeparator);const r=t=>t?"function"==typeof t?new t:t:null;if(!this.options.isClone){let e;this.modules.logger?_e.init(r(this.modules.logger),this.options):_e.init(null,this.options),this.modules.formatter?e=this.modules.formatter:"undefined"!=typeof Intl&&(e=qe);const i=new Te(this.options);this.store=new Oe(this.options.resources,this.options);const n=this.services;n.logger=_e,n.resourceStore=this.store,n.languageUtils=i,n.pluralResolver=new He(i,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!e||this.options.interpolation.format&&this.options.interpolation.format!==s.interpolation.format||(n.formatter=r(e),n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new We(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new Ge(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on("*",(function(e){for(var i=arguments.length,s=new Array(i>1?i-1:0),r=1;r<i;r++)s[r-1]=arguments[r];t.emit(e,...s)})),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new je(this.services,this.options),this.translator.on("*",(function(e){for(var i=arguments.length,s=new Array(i>1?i-1:0),r=1;r<i;r++)s[r-1]=arguments[r];t.emit(e,...s)})),this.modules.external.forEach((t=>{t.init&&t.init(this)}))}if(this.format=this.options.interpolation.format,i||(i=Qe),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const t=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);t.length>0&&"dev"!==t[0]&&(this.options.lng=t[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((e=>{this[e]=function(){return t.store[e](...arguments)}}));["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((e=>{this[e]=function(){return t.store[e](...arguments),t}}));const n=pe(),o=()=>{const t=(t,e)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),n.resolve(e),i(t,e)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return t(null,this.t.bind(this));this.changeLanguage(this.options.lng,t)};return this.options.resources||!this.options.initImmediate?o():setTimeout(o,0),n}loadResources(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Qe;const i=de(t)?t:this.language;if("function"==typeof t&&(e=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&"cimode"===i.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return e();const t=[],s=e=>{if(!e)return;if("cimode"===e)return;this.services.languageUtils.toResolveHierarchy(e).forEach((e=>{"cimode"!==e&&t.indexOf(e)<0&&t.push(e)}))};if(i)s(i);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((t=>s(t)))}this.options.preload&&this.options.preload.forEach((t=>s(t))),this.services.backendConnector.load(t,this.options.ns,(t=>{t||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),e(t)}))}else e(null)}reloadResources(t,e,i){const s=pe();return"function"==typeof t&&(i=t,t=void 0),"function"==typeof e&&(i=e,e=void 0),t||(t=this.languages),e||(e=this.options.ns),i||(i=Qe),this.services.backendConnector.reload(t,e,(t=>{s.resolve(),i(t)})),s}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===t.type&&(this.modules.backend=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"i18nFormat"===t.type&&(this.modules.i18nFormat=t),"postProcessor"===t.type&&Pe.addPostProcessor(t),"formatter"===t.type&&(this.modules.formatter=t),"3rdParty"===t.type&&this.modules.external.push(t),this}setResolvedLanguage(t){if(t&&this.languages&&!(["cimode","dev"].indexOf(t)>-1))for(let t=0;t<this.languages.length;t++){const e=this.languages[t];if(!(["cimode","dev"].indexOf(e)>-1)&&this.store.hasLanguageSomeTranslations(e)){this.resolvedLanguage=e;break}}}changeLanguage(t,e){var i=this;this.isLanguageChangingTo=t;const s=pe();this.emit("languageChanging",t);const r=t=>{this.language=t,this.languages=this.services.languageUtils.toResolveHierarchy(t),this.resolvedLanguage=void 0,this.setResolvedLanguage(t)},n=(t,n)=>{n?(r(n),this.translator.changeLanguage(n),this.isLanguageChangingTo=void 0,this.emit("languageChanged",n),this.logger.log("languageChanged",n)):this.isLanguageChangingTo=void 0,s.resolve((function(){return i.t(...arguments)})),e&&e(t,(function(){return i.t(...arguments)}))},o=e=>{t||e||!this.services.languageDetector||(e=[]);const i=de(e)?e:this.services.languageUtils.getBestMatchFromCodes(e);i&&(this.language||r(i),this.translator.language||this.translator.changeLanguage(i),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(i)),this.loadResources(i,(t=>{n(t,i)}))};return t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(t):o(this.services.languageDetector.detect()),s}getFixedT(t,e,i){var s=this;const r=function(t,e){let n;if("object"!=typeof e){for(var o=arguments.length,h=new Array(o>2?o-2:0),a=2;a<o;a++)h[a-2]=arguments[a];n=s.options.overloadTranslationOptionHandler([t,e].concat(h))}else n={...e};n.lng=n.lng||r.lng,n.lngs=n.lngs||r.lngs,n.ns=n.ns||r.ns,""!==n.keyPrefix&&(n.keyPrefix=n.keyPrefix||i||r.keyPrefix);const u=s.options.keySeparator||".";let l;return l=n.keyPrefix&&Array.isArray(t)?t.map((t=>`${n.keyPrefix}${u}${t}`)):n.keyPrefix?`${n.keyPrefix}${u}${t}`:t,s.t(l,n)};return de(t)?r.lng=t:r.lngs=t,r.ns=e,r.keyPrefix=i,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=e.lng||this.resolvedLanguage||this.languages[0],s=!!this.options&&this.options.fallbackLng,r=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;const n=(t,e)=>{const i=this.services.backendConnector.state[`${t}|${e}`];return-1===i||0===i||2===i};if(e.precheck){const t=e.precheck(this,n);if(void 0!==t)return t}return!!this.hasResourceBundle(i,t)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!n(i,t)||s&&!n(r,t)))}loadNamespaces(t,e){const i=pe();return this.options.ns?(de(t)&&(t=[t]),t.forEach((t=>{this.options.ns.indexOf(t)<0&&this.options.ns.push(t)})),this.loadResources((t=>{i.resolve(),e&&e(t)})),i):(e&&e(),Promise.resolve())}loadLanguages(t,e){const i=pe();de(t)&&(t=[t]);const s=this.options.preload||[],r=t.filter((t=>s.indexOf(t)<0&&this.services.languageUtils.isSupportedCode(t)));return r.length?(this.options.preload=s.concat(r),this.loadResources((t=>{i.resolve(),e&&e(t)})),i):(e&&e(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const e=this.services&&this.services.languageUtils||new Te(Je());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(e.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new ti(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Qe;const i=t.forkResourceStore;i&&delete t.forkResourceStore;const s={...this.options,...t,isClone:!0},r=new ti(s);void 0===t.debug&&void 0===t.prefix||(r.logger=r.logger.clone(t));return["store","services","language"].forEach((t=>{r[t]=this[t]})),r.services={...this.services},r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},i&&(r.store=new Oe(this.store.data,s),r.services.resourceStore=r.store),r.translator=new je(r.services,s),r.translator.on("*",(function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];r.emit(t,...i)})),r.init(s,e),r.translator.options=s,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ei=ti.createInstance();ei.createInstance=ti.createInstance,ei.createInstance,ei.dir,ei.init,ei.loadResources,ei.reloadResources,ei.use,ei.changeLanguage,ei.getFixedT,ei.t,ei.exists,ei.setDefaultNamespace,ei.hasLoadedNamespace,ei.loadNamespaces,ei.loadLanguages;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ii=1,si=2,ri=3,ni=4,oi=5,hi=6;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ai{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),ui(t,e);return!0},li=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},ci=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),fi(e)}};function di(t){void 0!==this._$AN?(li(this),this._$AM=t,ci(this)):this._$AM=t}function pi(t,e=!1,i=0){const s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)ui(s[t],!1),li(s[t]);else null!=s&&(ui(s,!1),li(s));else ui(this,t)}const fi=t=>{t.type==si&&(t._$AP??=pi,t._$AQ??=di)};class gi extends ai{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ci(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(ui(this,t),li(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}let vi=null,mi=()=>{};const wi=new Promise((t=>{mi=t})),yi={type:"3rdParty",init(t){bi(t)}},bi=t=>{vi=t,mi(vi)},Ai=new Map;setInterval((()=>{Ai.forEach(((t,e)=>{!1!==e.isConnected&&!1!==ki(e)||Ai.delete(e)}))}),1e4);let xi=!1;const Ei=()=>{Ai.forEach(((t,e)=>{if(e.isConnected&&ki(e)){const i=$i(t.keys,t.options);e.setValue(i)}}))};function $i(t,e){if(!vi)return"";!1===xi&&(vi.on("languageChanged",Ei),vi.store.on("added",Ei),xi=!0);const i=vi.t(t,e);return"string"==typeof i?i:""}const ki=t=>{const e=t.part;if(e.type===ii)return e.element.isConnected;if(e.type===si)return!!e.parentNode&&e.parentNode.isConnected;if(e.type===ri)return e.element.isConnected;if(e.type===ni)return e.element.isConnected;if(e.type===oi)return e.element.isConnected;if(e.type===hi)return e.element.isConnected;throw new Error("Unsupported Part")};class Ci extends gi{render(){}constructor(t){super(t),this.value="",this.part=t}translate(t,e){let i=e;Ai.set(this,{keys:t,options:i}),"function"==typeof e&&(i=e());const s=$i(t,i);return!1===this.isConnected||void 0===s||this.value===s?U:s}disconnected(){Ai.delete(this)}}const Di=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Ci{render(t,e){return wi?.then((()=>{this.setValue(this.translate(t,e))})),U}}),Fi=["en","tr"],Si=document.documentElement.lang;const Bi=[];for(let t=0;t<256;++t)Bi.push((t+256).toString(16).slice(1));let _i;const Ri=new Uint8Array(16);function Oi(){if(!_i){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");_i=crypto.getRandomValues.bind(crypto)}return _i(Ri)}var Pi={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function Ni(t,e,i){if(Pi.randomUUID&&!e&&!t)return Pi.randomUUID();const s=(t=t||{}).random||(t.rng||Oi)();return s[6]=15&s[6]|64,s[8]=63&s[8]|128,function(t,e=0){return(Bi[t[e+0]]+Bi[t[e+1]]+Bi[t[e+2]]+Bi[t[e+3]]+"-"+Bi[t[e+4]]+Bi[t[e+5]]+"-"+Bi[t[e+6]]+Bi[t[e+7]]+"-"+Bi[t[e+8]]+Bi[t[e+9]]+"-"+Bi[t[e+10]]+Bi[t[e+11]]+Bi[t[e+12]]+Bi[t[e+13]]+Bi[t[e+14]]+Bi[t[e+15]]).toLowerCase()}(s)}const ji=(t,e="TR")=>new Date(t).toLocaleDateString(e,{month:"2-digit",day:"2-digit",year:"numeric"}),Ii=t=>`${t.slice(0,5)} ${t.slice(5,8)} ${t.slice(8,11)} ${t.slice(11,13)} ${t.slice(13,15)}`,Ti=t=>t.trim().length>2,Mi=t=>{const e=new Date(t);return"Invalid Date"!==e.toString()&&new Date>e&&e.getFullYear()>(new Date).getFullYear()-90&&e.getFullYear()<(new Date).getFullYear()-16},Li=t=>{console.log(t);const e=new Date(t);return"Invalid Date"!==e.toString()&&new Date>e},Vi=t=>t.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),Ui=[{name:"First Name",id:"first-name",type:"text",other:{}},{name:"Last Name",id:"last-name",type:"text",other:{}},{name:"Date of Birth",id:"dob",type:"date",other:{}},{name:"Date of Employment",id:"doe",type:"date",other:{}},{name:"Phone",id:"phone",type:"text"},{name:"Email",id:"email",type:"email",other:{}}],zi=[{name:"Department",id:"department",type:"text",options:["","Analytics","Tech"]},{name:"Position",id:"position",type:"text",options:["","Junior","Medior","Senior"]}],Hi=[{to:"/",title:"Employees"},{to:"/add-new",title:"Add New"}];class Zi extends rt{static styles=[n`
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
    `];static properties={isOpen:{type:Boolean},header:{type:String},text:{type:String},acceptButton:{type:String},rejectButton:{type:String},accept:{type:Function},reject:{type:Function}};constructor(){super(),this.isOpen=!0,this.header="",this.text="",this.acceptButton="",this.rejectButton="",this.accept=()=>{},this.reject=()=>{}}openDialog(){this.isOpen=!0,this.requestUpdate()}closeDialog(){this.isOpen=!1,this.reject&&this.reject(),this.requestUpdate()}acceptDialog(){this.isOpen=!1,this.accept&&this.accept(),this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.isOpen&&this.renderModal()}updated(t){if(super.updated(t),this.isOpen)this.renderModal();else{const t=document.querySelector("#modal");t&&t.contains(this)&&t.removeChild(this)}}renderModal(){const t=document.querySelector("#modal");t&&!t.contains(this)&&t.appendChild(this)}render(){return console.log("DIALOG:",this.header),V`
      <div class="modal-overlay" ?hidden="${!this.isOpen}">
        <dialog ?open="${this.isOpen}">
          <h2>${this.header}</h2>
          <p>${this.text||"HEYY"}</p>
          <form method="dialog">
            ${this.acceptButton&&V`<button @click=${()=>this.acceptDialog()}>
              ${this.acceptButton}
            </button>`}
            ${this.rejectButton&&V`<button @click=${()=>this.closeDialog()}>
              ${this.rejectButton}
            </button>`}
          </form>
        </dialog>
      </div>
    `}}customElements.define("dialog-modal",Zi);class Ki extends rt{static properties={mode:{type:String},data:{type:Array},selectedDelete:{type:Object}};static styles=[n`
      .container {
        background-color: white;

        display: block;

        width: 100%;
        height: calc(100vh - 164px - 3vh - 50px);
        height: calc(100dvh - 164px - 3dvh - 50px);

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

        th,
        td {
          padding: 10px 5px;
        }

        .tablewrapper tbody > tr > td:nth-child(2),
        .tablewrapper thead > tr > th:nth-child(2) {
          left: 110px;
        }
      }
    `];page={total:1,current:1,perPage:12,buttons:4,currData:[]};constructor(){super(),this.data=le.getState().data;const t=new URLSearchParams(window.location.search);this.page.current=+t.get("page")||+this.page.current,this.unsubscribe=le.subscribe((()=>{const t=le.getState();this.data=t.data,this.page.total=Math.ceil(this.data.length/this.page.perPage)}))}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe()}updated(t){if(t.has("data")){if(this.data.length){const t=Math.ceil(this.data.length/this.page.perPage),e=+new URLSearchParams(window.location.search).get("page");if(t<e&&this.page.current==e)return void this.handlePageChange(t);this.page.total=t}this.requestUpdate()}}handleEdit(t){const e=new URLSearchParams(window.location.search);window.history.pushState(null,"",`/edit/${t._id}?${e?.toString()}`),window.dispatchEvent(new Event("popstate"))}handleDelete(t){console.log(t),this.selectedDelete=t,this.requestUpdate()}handleDeleteConfirm(){le.dispatch({type:"DELETE",payload:this.selectedDelete._id}),this.selectedDelete=null,this.requestUpdate()}handleDeleteReject(){this.selectedDelete=null,this.requestUpdate()}handlePageChange(t){let e=t;const i=new URLSearchParams(window.location.search);(t<1||t>this.page.total)&&(e=1),i.set("page",e);const s=`${le.getState().router.location.pathname}?${i.toString()}`;ie.go(s),this.page.current=+e,this.requestUpdate()}getVisiblePages(){const{current:t,total:e,buttons:i}=this.page,s=Math.floor(i/2),r=new Set;r.add(1),r.add(e);const n=Math.max(2,t-s),o=Math.min(e-1,t+s);for(let t=n;t<=o;t++)r.add(t);return Array.from(r).sort(((t,e)=>t-e))}renderPagination(){const t=this.getVisiblePages(),e=[];for(let i=0;i<t.length;i++){const s=t[i];i>0&&s>t[i-1]+1&&e.push(V`<span class="dots">...</span>`),e.push(V`
        <button
          class=${this.page.current==s?"active":""}
          @click=${()=>this.handlePageChange(s)}
        >
          ${s}
        </button>
      `)}return e.length>1&&(e.unshift(V`
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
      `),e.push(V`
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
      `)),e}renderTableWrapper(t){let e=t.map(((t,e)=>V`
        <tr>
          <td>${t.index} ${t["First Name"]}</td>
          <td>${t["Last Name"]}</td>
          <td>${ji(t["Date of Employment"])}</td>
          <td>${ji(t["Date of Birth"])}</td>
          <td>${Ii(t.Phone)}</td>
          <td>${t.Email}</td>
          <td>${Di(t.Department)}</td>
          <td>${Di(t.Position)}</td>
          ${Di(t[""])}
          <td>
            <button
              title=${Di("Edit")}
              @click=${function(){this.handleEdit(t)}}
            >
              <img src=${"/assets/img/edit.svg"} alt=${Di("Edit")} />
            </button>
            <button
              title=${Di("Delete")}
              @click=${function(){this.handleDelete(t)}}
            >
              <img src=${"/assets/img/delete.svg"} alt=${Di("Delete")} />
            </button>
          </td>
        </tr>
      `));return V`
      <div class="tablewrapper">
        <table>
          <thead>
            <tr>
              <th>${Di("First Name")}</th>
              <th>${Di("Last Name")}</th>
              <th>${Di("Date of Employment")}</th>
              <th>${Di("Date of Birth")}</th>
              <th>${Di("Phone")}</th>
              <th>${Di("Email")}</th>
              <th>${Di("Department")}</th>
              <th>${Di("Position")}</th>
              <th>${Di("Actions")}</th>
            </tr>
          </thead>
          <tbody>
            ${e}
          </tbody>
        </table>
      </div>
    `}renderGridWrapper(t){let e=t.map((t=>V`<div class="grid-item">
        <h4>${t["First Name"]} ${t["Last Name"]}</h4>
        <div>
          <span>${Di("Date of Employment")}: </span>
          <span>${ji(t["Date of Employment"])}</span>
        </div>
        <div>
          <span>${Di("Date of Birth")}: </span>
          <span>${ji(t["Date of Birth"])}</span>
        </div>
        <div>
          <span>${Di("Phone")}: </span>
          <span>${Ii(t.Phone)}</span>
        </div>
        <div>
          <span>${Di("Email")}: </span>
          <span>${t.Email}</span>
        </div>
        <div>
          <span>${Di("Department")}: </span>
          <span>${Di(t.Department)}</span>
        </div>
        <div>
          <span>${Di("Position")}: </span>
          <span>${Di(t.Position)}</span>
        </div>

        <div>
          <button
            title=${Di("Edit")}
            @click=${function(){this.handleEdit(t)}}
          >
            <img src=${"/assets/img/edit.svg"} alt=${Di("Edit")} />
          </button>
          <button
            title=${Di("Delete")}
            @click=${function(){this.handleDelete(t)}}
          >
            <img src=${"/assets/img/delete.svg"} alt=${Di("Delete")} />
          </button>
        </div>
      </div>`));return V` <div class="gridwrapper">${e}</div> `}render(){const t=(this.page.current-1)*this.page.perPage,e=this.data.slice(t,t+this.page.perPage);let i="table"!==this.mode&&this.mode?this.renderGridWrapper(e):this.renderTableWrapper(e),s=null;if(this.selectedDelete){console.log("selectedDelete: ",this.selectedDelete);const t=`${this.selectedDelete["First Name"]} ${this.selectedDelete["Last Name"]}`;s=V`<dialog-modal
        .header=${Di("Are you sure?")}
        .text=${Di("Selected employee record of {{name}} will be deleted.",{name:t})}
        .acceptButton=${Di("Accept")}
        .rejectButton=${Di("Reject")}
        .accept=${()=>this.handleDeleteConfirm()}
        .reject=${()=>this.handleDeleteReject()}
      ></dialog-modal>`}return V`
      ${s}
      <div class="container">${i}</div>
      <div class="pages">${this.renderPagination()}</div>
    `}}customElements.define("employee-table",Ki);const Wi=["table","galery"];class Yi extends rt{static properties={mode:{type:String}};constructor(){super(),this.mode=this.getMode()}static styles=[n`
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
    `];getMode(){return this.handleModeChange()||Wi[0]}handleModeChange(t){let e=t;const i=new URLSearchParams(window.location.search);if(!e)return i.get("mode");Wi.includes(e)||(e=Wi[0]),i.set("mode",e);const s=`${le.getState().router.location.pathname}?${i.toString()}`;ie.go(s),this.mode=e,this.requestUpdate()}renderGridIcon(){return V` <svg
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
    </svg>`}renderTableIcon(){return V`
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
    `}render(){return V` <div>
      <header class="heading">
        <h1>${Di("Employee List")}</h1>
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
    </div>`}}function qi(t){return"string"==typeof t||t instanceof String}function Gi(t){var e;return"object"==typeof t&&null!=t&&"Object"===(null==t||null==(e=t.constructor)?void 0:e.name)}function Ji(t,e){return Array.isArray(e)?Ji(t,((t,i)=>e.includes(i))):Object.entries(t).reduce(((t,i)=>{let[s,r]=i;return e(r,s)&&(t[s]=r),t}),{})}customElements.define("employee-list",Yi);const Xi="NONE",Qi="LEFT",ts="FORCE_LEFT",es="RIGHT",is="FORCE_RIGHT";function ss(t){return t.replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")}function rs(t,e){if(e===t)return!0;const i=Array.isArray(e),s=Array.isArray(t);let r;if(i&&s){if(e.length!=t.length)return!1;for(r=0;r<e.length;r++)if(!rs(e[r],t[r]))return!1;return!0}if(i!=s)return!1;if(e&&t&&"object"==typeof e&&"object"==typeof t){const i=e instanceof Date,s=t instanceof Date;if(i&&s)return e.getTime()==t.getTime();if(i!=s)return!1;const n=e instanceof RegExp,o=t instanceof RegExp;if(n&&o)return e.toString()==t.toString();if(n!=o)return!1;const h=Object.keys(e);for(r=0;r<h.length;r++)if(!Object.prototype.hasOwnProperty.call(t,h[r]))return!1;for(r=0;r<h.length;r++)if(!rs(t[h[r]],e[h[r]]))return!1;return!0}return!(!e||!t||"function"!=typeof e||"function"!=typeof t)&&e.toString()===t.toString()}class ns{constructor(t){for(Object.assign(this,t);this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start;if(this.insertedCount)for(;this.value.slice(this.cursorPos)!==this.oldValue.slice(this.oldSelection.end);)this.value.length-this.cursorPos<this.oldValue.length-this.oldSelection.end?++this.oldSelection.end:++this.cursorPos}get startChangePos(){return Math.min(this.cursorPos,this.oldSelection.start)}get insertedCount(){return this.cursorPos-this.startChangePos}get inserted(){return this.value.substr(this.startChangePos,this.insertedCount)}get removedCount(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}get removed(){return this.oldValue.substr(this.startChangePos,this.removedCount)}get head(){return this.value.substring(0,this.startChangePos)}get tail(){return this.value.substring(this.startChangePos+this.insertedCount)}get removeDirection(){return!this.removedCount||this.insertedCount?Xi:this.oldSelection.end!==this.cursorPos&&this.oldSelection.start!==this.cursorPos||this.oldSelection.end!==this.oldSelection.start?Qi:es}}function os(t,e){return new os.InputMask(t,e)}function hs(t){if(null==t)throw new Error("mask property should be defined");return t instanceof RegExp?os.MaskedRegExp:qi(t)?os.MaskedPattern:t===Date?os.MaskedDate:t===Number?os.MaskedNumber:Array.isArray(t)||t===Array?os.MaskedDynamic:os.Masked&&t.prototype instanceof os.Masked?t:os.Masked&&t instanceof os.Masked?t.constructor:t instanceof Function?os.MaskedFunction:(console.warn("Mask not found for mask",t),os.Masked)}function as(t){if(!t)throw new Error("Options in not defined");if(os.Masked){if(t.prototype instanceof os.Masked)return{mask:t};const{mask:e,...i}=t instanceof os.Masked?{mask:t}:Gi(t)&&t.mask instanceof os.Masked?t:{};if(e){const t=e.mask;return{...Ji(e,((t,e)=>!e.startsWith("_"))),mask:e.constructor,_mask:t,...i}}}return Gi(t)?{...t}:{mask:t}}function us(t){if(os.Masked&&t instanceof os.Masked)return t;const e=as(t),i=hs(e.mask);if(!i)throw new Error("Masked class is not found for provided mask "+e.mask+", appropriate module needs to be imported manually before creating mask.");return e.mask===i&&delete e.mask,e._mask&&(e.mask=e._mask,delete e._mask),new i(e)}os.createMask=us;class ls{get selectionStart(){let t;try{t=this._unsafeSelectionStart}catch{}return null!=t?t:this.value.length}get selectionEnd(){let t;try{t=this._unsafeSelectionEnd}catch{}return null!=t?t:this.value.length}select(t,e){if(null!=t&&null!=e&&(t!==this.selectionStart||e!==this.selectionEnd))try{this._unsafeSelect(t,e)}catch{}}get isActive(){return!1}}os.MaskElement=ls;class cs extends ls{constructor(t){super(),this.input=t,this._onKeydown=this._onKeydown.bind(this),this._onInput=this._onInput.bind(this),this._onBeforeinput=this._onBeforeinput.bind(this),this._onCompositionEnd=this._onCompositionEnd.bind(this)}get rootElement(){var t,e,i;return null!=(t=null==(e=(i=this.input).getRootNode)?void 0:e.call(i))?t:document}get isActive(){return this.input===this.rootElement.activeElement}bindEvents(t){this.input.addEventListener("keydown",this._onKeydown),this.input.addEventListener("input",this._onInput),this.input.addEventListener("beforeinput",this._onBeforeinput),this.input.addEventListener("compositionend",this._onCompositionEnd),this.input.addEventListener("drop",t.drop),this.input.addEventListener("click",t.click),this.input.addEventListener("focus",t.focus),this.input.addEventListener("blur",t.commit),this._handlers=t}_onKeydown(t){return this._handlers.redo&&(90===t.keyCode&&t.shiftKey&&(t.metaKey||t.ctrlKey)||89===t.keyCode&&t.ctrlKey)?(t.preventDefault(),this._handlers.redo(t)):this._handlers.undo&&90===t.keyCode&&(t.metaKey||t.ctrlKey)?(t.preventDefault(),this._handlers.undo(t)):void(t.isComposing||this._handlers.selectionChange(t))}_onBeforeinput(t){return"historyUndo"===t.inputType&&this._handlers.undo?(t.preventDefault(),this._handlers.undo(t)):"historyRedo"===t.inputType&&this._handlers.redo?(t.preventDefault(),this._handlers.redo(t)):void 0}_onCompositionEnd(t){this._handlers.input(t)}_onInput(t){t.isComposing||this._handlers.input(t)}unbindEvents(){this.input.removeEventListener("keydown",this._onKeydown),this.input.removeEventListener("input",this._onInput),this.input.removeEventListener("beforeinput",this._onBeforeinput),this.input.removeEventListener("compositionend",this._onCompositionEnd),this.input.removeEventListener("drop",this._handlers.drop),this.input.removeEventListener("click",this._handlers.click),this.input.removeEventListener("focus",this._handlers.focus),this.input.removeEventListener("blur",this._handlers.commit),this._handlers={}}}os.HTMLMaskElement=cs;class ds extends cs{constructor(t){super(t),this.input=t}get _unsafeSelectionStart(){return null!=this.input.selectionStart?this.input.selectionStart:this.value.length}get _unsafeSelectionEnd(){return this.input.selectionEnd}_unsafeSelect(t,e){this.input.setSelectionRange(t,e)}get value(){return this.input.value}set value(t){this.input.value=t}}os.HTMLMaskElement=cs;class ps extends cs{get _unsafeSelectionStart(){const t=this.rootElement,e=t.getSelection&&t.getSelection(),i=e&&e.anchorOffset,s=e&&e.focusOffset;return null==s||null==i||i<s?i:s}get _unsafeSelectionEnd(){const t=this.rootElement,e=t.getSelection&&t.getSelection(),i=e&&e.anchorOffset,s=e&&e.focusOffset;return null==s||null==i||i>s?i:s}_unsafeSelect(t,e){if(!this.rootElement.createRange)return;const i=this.rootElement.createRange();i.setStart(this.input.firstChild||this.input,t),i.setEnd(this.input.lastChild||this.input,e);const s=this.rootElement,r=s.getSelection&&s.getSelection();r&&(r.removeAllRanges(),r.addRange(i))}get value(){return this.input.textContent||""}set value(t){this.input.textContent=t}}os.HTMLContenteditableMaskElement=ps;class fs{constructor(){this.states=[],this.currentIndex=0}get currentState(){return this.states[this.currentIndex]}get isEmpty(){return 0===this.states.length}push(t){this.currentIndex<this.states.length-1&&(this.states.length=this.currentIndex+1),this.states.push(t),this.states.length>fs.MAX_LENGTH&&this.states.shift(),this.currentIndex=this.states.length-1}go(t){return this.currentIndex=Math.min(Math.max(this.currentIndex+t,0),this.states.length-1),this.currentState}undo(){return this.go(-1)}redo(){return this.go(1)}clear(){this.states.length=0,this.currentIndex=0}}fs.MAX_LENGTH=100;os.InputMask=class{constructor(t,e){this.el=t instanceof ls?t:t.isContentEditable&&"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName?new ps(t):new ds(t),this.masked=us(e),this._listeners={},this._value="",this._unmaskedValue="",this._rawInputValue="",this.history=new fs,this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this._onUndo=this._onUndo.bind(this),this._onRedo=this._onRedo.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}maskEquals(t){var e;return null==t||(null==(e=this.masked)?void 0:e.maskEquals(t))}get mask(){return this.masked.mask}set mask(t){if(this.maskEquals(t))return;if(!(t instanceof os.Masked)&&this.masked.constructor===hs(t))return void this.masked.updateOptions({mask:t});const e=t instanceof os.Masked?t:us({mask:t});e.unmaskedValue=this.masked.unmaskedValue,this.masked=e}get value(){return this._value}set value(t){this.value!==t&&(this.masked.value=t,this.updateControl("auto"))}get unmaskedValue(){return this._unmaskedValue}set unmaskedValue(t){this.unmaskedValue!==t&&(this.masked.unmaskedValue=t,this.updateControl("auto"))}get rawInputValue(){return this._rawInputValue}set rawInputValue(t){this.rawInputValue!==t&&(this.masked.rawInputValue=t,this.updateControl(),this.alignCursor())}get typedValue(){return this.masked.typedValue}set typedValue(t){this.masked.typedValueEquals(t)||(this.masked.typedValue=t,this.updateControl("auto"))}get displayValue(){return this.masked.displayValue}_bindEvents(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange,undo:this._onUndo,redo:this._onRedo})}_unbindEvents(){this.el&&this.el.unbindEvents()}_fireEvent(t,e){const i=this._listeners[t];i&&i.forEach((t=>t(e)))}get selectionStart(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}get cursorPos(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd}set cursorPos(t){this.el&&this.el.isActive&&(this.el.select(t,t),this._saveSelection())}_saveSelection(){this.displayValue!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}updateValue(){this.masked.value=this.el.value,this._value=this.masked.value,this._unmaskedValue=this.masked.unmaskedValue,this._rawInputValue=this.masked.rawInputValue}updateControl(t){const e=this.masked.unmaskedValue,i=this.masked.value,s=this.masked.rawInputValue,r=this.displayValue,n=this.unmaskedValue!==e||this.value!==i||this._rawInputValue!==s;this._unmaskedValue=e,this._value=i,this._rawInputValue=s,this.el.value!==r&&(this.el.value=r),"auto"===t?this.alignCursor():null!=t&&(this.cursorPos=t),n&&this._fireChangeEvents(),this._historyChanging||!n&&!this.history.isEmpty||this.history.push({unmaskedValue:e,selection:{start:this.selectionStart,end:this.cursorPos}})}updateOptions(t){const{mask:e,...i}=t,s=!this.maskEquals(e),r=this.masked.optionsIsChanged(i);s&&(this.mask=e),r&&this.masked.updateOptions(i),(s||r)&&this.updateControl()}updateCursor(t){null!=t&&(this.cursorPos=t,this._delayUpdateCursor(t))}_delayUpdateCursor(t){this._abortUpdateCursor(),this._changingCursorPos=t,this._cursorChanging=setTimeout((()=>{this.el&&(this.cursorPos=this._changingCursorPos,this._abortUpdateCursor())}),10)}_fireChangeEvents(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}_abortUpdateCursor(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}alignCursor(){this.cursorPos=this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos,Qi))}alignCursorFriendly(){this.selectionStart===this.cursorPos&&this.alignCursor()}on(t,e){return this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this}off(t,e){if(!this._listeners[t])return this;if(!e)return delete this._listeners[t],this;const i=this._listeners[t].indexOf(e);return i>=0&&this._listeners[t].splice(i,1),this}_onInput(t){this._inputEvent=t,this._abortUpdateCursor();const e=new ns({value:this.el.value,cursorPos:this.cursorPos,oldValue:this.displayValue,oldSelection:this._selection}),i=this.masked.rawInputValue,s=this.masked.splice(e.startChangePos,e.removed.length,e.inserted,e.removeDirection,{input:!0,raw:!0}).offset,r=i===this.masked.rawInputValue?e.removeDirection:Xi;let n=this.masked.nearestInputPos(e.startChangePos+s,r);r!==Xi&&(n=this.masked.nearestInputPos(n,Xi)),this.updateControl(n),delete this._inputEvent}_onChange(){this.displayValue!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}_onDrop(t){t.preventDefault(),t.stopPropagation()}_onFocus(t){this.alignCursorFriendly()}_onClick(t){this.alignCursorFriendly()}_onUndo(){this._applyHistoryState(this.history.undo())}_onRedo(){this._applyHistoryState(this.history.redo())}_applyHistoryState(t){t&&(this._historyChanging=!0,this.unmaskedValue=t.unmaskedValue,this.el.select(t.selection.start,t.selection.end),this._saveSelection(),this._historyChanging=!1)}destroy(){this._unbindEvents(),this._listeners.length=0,delete this.el}};class gs{static normalize(t){return Array.isArray(t)?t:[t,new gs]}constructor(t){Object.assign(this,{inserted:"",rawInserted:"",tailShift:0,skip:!1},t)}aggregate(t){return this.inserted+=t.inserted,this.rawInserted+=t.rawInserted,this.tailShift+=t.tailShift,this.skip=this.skip||t.skip,this}get offset(){return this.tailShift+this.inserted.length}get consumed(){return Boolean(this.rawInserted)||this.skip}equals(t){return this.inserted===t.inserted&&this.tailShift===t.tailShift&&this.rawInserted===t.rawInserted&&this.skip===t.skip}}os.ChangeDetails=gs;class vs{constructor(t,e,i){void 0===t&&(t=""),void 0===e&&(e=0),this.value=t,this.from=e,this.stop=i}toString(){return this.value}extend(t){this.value+=String(t)}appendTo(t){return t.append(this.toString(),{tail:!0}).aggregate(t._appendPlaceholder())}get state(){return{value:this.value,from:this.from,stop:this.stop}}set state(t){Object.assign(this,t)}unshift(t){if(!this.value.length||null!=t&&this.from>=t)return"";const e=this.value[0];return this.value=this.value.slice(1),e}shift(){if(!this.value.length)return"";const t=this.value[this.value.length-1];return this.value=this.value.slice(0,-1),t}}class ms{constructor(t){this._value="",this._update({...ms.DEFAULTS,...t}),this._initialized=!0}updateOptions(t){this.optionsIsChanged(t)&&this.withValueRefresh(this._update.bind(this,t))}_update(t){Object.assign(this,t)}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue}}set state(t){this._value=t._value}reset(){this._value=""}get value(){return this._value}set value(t){this.resolve(t,{input:!0})}resolve(t,e){void 0===e&&(e={input:!0}),this.reset(),this.append(t,e,""),this.doCommit()}get unmaskedValue(){return this.value}set unmaskedValue(t){this.resolve(t,{})}get typedValue(){return this.parse?this.parse(this.value,this):this.unmaskedValue}set typedValue(t){this.format?this.value=this.format(t,this):this.unmaskedValue=String(t)}get rawInputValue(){return this.extractInput(0,this.displayValue.length,{raw:!0})}set rawInputValue(t){this.resolve(t,{raw:!0})}get displayValue(){return this.value}get isComplete(){return!0}get isFilled(){return this.isComplete}nearestInputPos(t,e){return t}totalInputPositions(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length),Math.min(this.displayValue.length,e-t)}extractInput(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length),this.displayValue.slice(t,e)}extractTail(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length),new vs(this.extractInput(t,e),t)}appendTail(t){return qi(t)&&(t=new vs(String(t))),t.appendTo(this)}_appendCharRaw(t,e){return t?(this._value+=t,new gs({inserted:t,rawInserted:t})):new gs}_appendChar(t,e,i){void 0===e&&(e={});const s=this.state;let r;if([t,r]=this.doPrepareChar(t,e),t&&(r=r.aggregate(this._appendCharRaw(t,e)),!r.rawInserted&&"pad"===this.autofix)){const i=this.state;this.state=s;let n=this.pad(e);const o=this._appendCharRaw(t,e);n=n.aggregate(o),o.rawInserted||n.equals(r)?r=n:this.state=i}if(r.inserted){let t,n=!1!==this.doValidate(e);if(n&&null!=i){const e=this.state;if(!0===this.overwrite){t=i.state;for(let t=0;t<r.rawInserted.length;++t)i.unshift(this.displayValue.length-r.tailShift)}let s=this.appendTail(i);if(n=s.rawInserted.length===i.toString().length,!(n&&s.inserted||"shift"!==this.overwrite)){this.state=e,t=i.state;for(let t=0;t<r.rawInserted.length;++t)i.shift();s=this.appendTail(i),n=s.rawInserted.length===i.toString().length}n&&s.inserted&&(this.state=e)}n||(r=new gs,this.state=s,i&&t&&(i.state=t))}return r}_appendPlaceholder(){return new gs}_appendEager(){return new gs}append(t,e,i){if(!qi(t))throw new Error("value should be string");const s=qi(i)?new vs(String(i)):i;let r;null!=e&&e.tail&&(e._beforeTailState=this.state),[t,r]=this.doPrepare(t,e);for(let i=0;i<t.length;++i){const n=this._appendChar(t[i],e,s);if(!n.rawInserted&&!this.doSkipInvalid(t[i],e,s))break;r.aggregate(n)}return(!0===this.eager||"append"===this.eager)&&null!=e&&e.input&&t&&r.aggregate(this._appendEager()),null!=s&&(r.tailShift+=this.appendTail(s).tailShift),r}remove(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length),this._value=this.displayValue.slice(0,t)+this.displayValue.slice(e),new gs}withValueRefresh(t){if(this._refreshing||!this._initialized)return t();this._refreshing=!0;const e=this.rawInputValue,i=this.value,s=t();return this.rawInputValue=e,this.value&&this.value!==i&&0===i.indexOf(this.value)&&(this.append(i.slice(this.displayValue.length),{},""),this.doCommit()),delete this._refreshing,s}runIsolated(t){if(this._isolated||!this._initialized)return t(this);this._isolated=!0;const e=this.state,i=t(this);return this.state=e,delete this._isolated,i}doSkipInvalid(t,e,i){return Boolean(this.skipInvalid)}doPrepare(t,e){return void 0===e&&(e={}),gs.normalize(this.prepare?this.prepare(t,this,e):t)}doPrepareChar(t,e){return void 0===e&&(e={}),gs.normalize(this.prepareChar?this.prepareChar(t,this,e):t)}doValidate(t){return(!this.validate||this.validate(this.value,this,t))&&(!this.parent||this.parent.doValidate(t))}doCommit(){this.commit&&this.commit(this.value,this)}splice(t,e,i,s,r){void 0===i&&(i=""),void 0===s&&(s=Xi),void 0===r&&(r={input:!0});const n=t+e,o=this.extractTail(n),h=!0===this.eager||"remove"===this.eager;let a;h&&(s=function(t){switch(t){case Qi:return ts;case es:return is;default:return t}}(s),a=this.extractInput(0,n,{raw:!0}));let u=t;const l=new gs;if(s!==Xi&&(u=this.nearestInputPos(t,e>1&&0!==t&&!h?Xi:s),l.tailShift=u-t),l.aggregate(this.remove(u)),h&&s!==Xi&&a===this.rawInputValue)if(s===ts){let t;for(;a===this.rawInputValue&&(t=this.displayValue.length);)l.aggregate(new gs({tailShift:-1})).aggregate(this.remove(t-1))}else s===is&&o.unshift();return l.aggregate(this.append(i,r,o))}maskEquals(t){return this.mask===t}optionsIsChanged(t){return!rs(this,t)}typedValueEquals(t){const e=this.typedValue;return t===e||ms.EMPTY_VALUES.includes(t)&&ms.EMPTY_VALUES.includes(e)||!!this.format&&this.format(t,this)===this.format(this.typedValue,this)}pad(t){return new gs}}ms.DEFAULTS={skipInvalid:!0},ms.EMPTY_VALUES=[void 0,null,""],os.Masked=ms;class ws{constructor(t,e){void 0===t&&(t=[]),void 0===e&&(e=0),this.chunks=t,this.from=e}toString(){return this.chunks.map(String).join("")}extend(t){if(!String(t))return;t=qi(t)?new vs(String(t)):t;const e=this.chunks[this.chunks.length-1],i=e&&(e.stop===t.stop||null==t.stop)&&t.from===e.from+e.toString().length;if(t instanceof vs)i?e.extend(t.toString()):this.chunks.push(t);else if(t instanceof ws){if(null==t.stop){let e;for(;t.chunks.length&&null==t.chunks[0].stop;)e=t.chunks.shift(),e.from+=t.from,this.extend(e)}t.toString()&&(t.stop=t.blockIndex,this.chunks.push(t))}}appendTo(t){if(!(t instanceof os.MaskedPattern)){return new vs(this.toString()).appendTo(t)}const e=new gs;for(let i=0;i<this.chunks.length;++i){const s=this.chunks[i],r=t._mapPosToBlock(t.displayValue.length),n=s.stop;let o;if(null!=n&&(!r||r.index<=n)&&((s instanceof ws||t._stops.indexOf(n)>=0)&&e.aggregate(t._appendPlaceholder(n)),o=s instanceof ws&&t._blocks[n]),o){const i=o.appendTail(s);e.aggregate(i);const r=s.toString().slice(i.rawInserted.length);r&&e.aggregate(t.append(r,{tail:!0}))}else e.aggregate(t.append(s.toString(),{tail:!0}))}return e}get state(){return{chunks:this.chunks.map((t=>t.state)),from:this.from,stop:this.stop,blockIndex:this.blockIndex}}set state(t){const{chunks:e,...i}=t;Object.assign(this,i),this.chunks=e.map((t=>{const e="chunks"in t?new ws:new vs;return e.state=t,e}))}unshift(t){if(!this.chunks.length||null!=t&&this.from>=t)return"";const e=null!=t?t-this.from:t;let i=0;for(;i<this.chunks.length;){const t=this.chunks[i],s=t.unshift(e);if(t.toString()){if(!s)break;++i}else this.chunks.splice(i,1);if(s)return s}return""}shift(){if(!this.chunks.length)return"";let t=this.chunks.length-1;for(;0<=t;){const e=this.chunks[t],i=e.shift();if(e.toString()){if(!i)break;--t}else this.chunks.splice(t,1);if(i)return i}return""}}class ys{constructor(t,e){this.masked=t,this._log=[];const{offset:i,index:s}=t._mapPosToBlock(e)||(e<0?{index:0,offset:0}:{index:this.masked._blocks.length,offset:0});this.offset=i,this.index=s,this.ok=!1}get block(){return this.masked._blocks[this.index]}get pos(){return this.masked._blockStartPos(this.index)+this.offset}get state(){return{index:this.index,offset:this.offset,ok:this.ok}}set state(t){Object.assign(this,t)}pushState(){this._log.push(this.state)}popState(){const t=this._log.pop();return t&&(this.state=t),t}bindBlock(){this.block||(this.index<0&&(this.index=0,this.offset=0),this.index>=this.masked._blocks.length&&(this.index=this.masked._blocks.length-1,this.offset=this.block.displayValue.length))}_pushLeft(t){for(this.pushState(),this.bindBlock();0<=this.index;--this.index,this.offset=(null==(e=this.block)?void 0:e.displayValue.length)||0){var e;if(t())return this.ok=!0}return this.ok=!1}_pushRight(t){for(this.pushState(),this.bindBlock();this.index<this.masked._blocks.length;++this.index,this.offset=0)if(t())return this.ok=!0;return this.ok=!1}pushLeftBeforeFilled(){return this._pushLeft((()=>{if(!this.block.isFixed&&this.block.value)return this.offset=this.block.nearestInputPos(this.offset,ts),0!==this.offset||void 0}))}pushLeftBeforeInput(){return this._pushLeft((()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,Qi),!0}))}pushLeftBeforeRequired(){return this._pushLeft((()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,Qi),!0}))}pushRightBeforeFilled(){return this._pushRight((()=>{if(!this.block.isFixed&&this.block.value)return this.offset=this.block.nearestInputPos(this.offset,is),this.offset!==this.block.value.length||void 0}))}pushRightBeforeInput(){return this._pushRight((()=>{if(!this.block.isFixed)return this.offset=this.block.nearestInputPos(this.offset,Xi),!0}))}pushRightBeforeRequired(){return this._pushRight((()=>{if(!(this.block.isFixed||this.block.isOptional&&!this.block.value))return this.offset=this.block.nearestInputPos(this.offset,Xi),!0}))}}class bs{constructor(t){Object.assign(this,t),this._value="",this.isFixed=!0}get value(){return this._value}get unmaskedValue(){return this.isUnmasking?this.value:""}get rawInputValue(){return this._isRawInput?this.value:""}get displayValue(){return this.value}reset(){this._isRawInput=!1,this._value=""}remove(t,e){return void 0===t&&(t=0),void 0===e&&(e=this._value.length),this._value=this._value.slice(0,t)+this._value.slice(e),this._value||(this._isRawInput=!1),new gs}nearestInputPos(t,e){void 0===e&&(e=Xi);const i=this._value.length;switch(e){case Qi:case ts:return 0;default:return i}}totalInputPositions(t,e){return void 0===t&&(t=0),void 0===e&&(e=this._value.length),this._isRawInput?e-t:0}extractInput(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=this._value.length),void 0===i&&(i={}),i.raw&&this._isRawInput&&this._value.slice(t,e)||""}get isComplete(){return!0}get isFilled(){return Boolean(this._value)}_appendChar(t,e){if(void 0===e&&(e={}),this.isFilled)return new gs;const i=!0===this.eager||"append"===this.eager,s=this.char===t&&(this.isUnmasking||e.input||e.raw)&&(!e.raw||!i)&&!e.tail,r=new gs({inserted:this.char,rawInserted:s?this.char:""});return this._value=this.char,this._isRawInput=s&&(e.raw||e.input),r}_appendEager(){return this._appendChar(this.char,{tail:!0})}_appendPlaceholder(){const t=new gs;return this.isFilled||(this._value=t.inserted=this.char),t}extractTail(){return new vs("")}appendTail(t){return qi(t)&&(t=new vs(String(t))),t.appendTo(this)}append(t,e,i){const s=this._appendChar(t[0],e);return null!=i&&(s.tailShift+=this.appendTail(i).tailShift),s}doCommit(){}get state(){return{_value:this._value,_rawInputValue:this.rawInputValue}}set state(t){this._value=t._value,this._isRawInput=Boolean(t._rawInputValue)}pad(t){return this._appendPlaceholder()}}class As{constructor(t){const{parent:e,isOptional:i,placeholderChar:s,displayChar:r,lazy:n,eager:o,...h}=t;this.masked=us(h),Object.assign(this,{parent:e,isOptional:i,placeholderChar:s,displayChar:r,lazy:n,eager:o})}reset(){this.isFilled=!1,this.masked.reset()}remove(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.value.length),0===t&&e>=1?(this.isFilled=!1,this.masked.remove(t,e)):new gs}get value(){return this.masked.value||(this.isFilled&&!this.isOptional?this.placeholderChar:"")}get unmaskedValue(){return this.masked.unmaskedValue}get rawInputValue(){return this.masked.rawInputValue}get displayValue(){return this.masked.value&&this.displayChar||this.value}get isComplete(){return Boolean(this.masked.value)||this.isOptional}_appendChar(t,e){if(void 0===e&&(e={}),this.isFilled)return new gs;const i=this.masked.state;let s=this.masked._appendChar(t,this.currentMaskFlags(e));return s.inserted&&!1===this.doValidate(e)&&(s=new gs,this.masked.state=i),s.inserted||this.isOptional||this.lazy||e.input||(s.inserted=this.placeholderChar),s.skip=!s.inserted&&!this.isOptional,this.isFilled=Boolean(s.inserted),s}append(t,e,i){return this.masked.append(t,this.currentMaskFlags(e),i)}_appendPlaceholder(){return this.isFilled||this.isOptional?new gs:(this.isFilled=!0,new gs({inserted:this.placeholderChar}))}_appendEager(){return new gs}extractTail(t,e){return this.masked.extractTail(t,e)}appendTail(t){return this.masked.appendTail(t)}extractInput(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=this.value.length),this.masked.extractInput(t,e,i)}nearestInputPos(t,e){void 0===e&&(e=Xi);const i=this.value.length,s=Math.min(Math.max(t,0),i);switch(e){case Qi:case ts:return this.isComplete?s:0;case es:case is:return this.isComplete?s:i;default:return s}}totalInputPositions(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.value.length),this.value.slice(t,e).length}doValidate(t){return this.masked.doValidate(this.currentMaskFlags(t))&&(!this.parent||this.parent.doValidate(this.currentMaskFlags(t)))}doCommit(){this.masked.doCommit()}get state(){return{_value:this.value,_rawInputValue:this.rawInputValue,masked:this.masked.state,isFilled:this.isFilled}}set state(t){this.masked.state=t.masked,this.isFilled=t.isFilled}currentMaskFlags(t){var e;return{...t,_beforeTailState:(null==t||null==(e=t._beforeTailState)?void 0:e.masked)||(null==t?void 0:t._beforeTailState)}}pad(t){return new gs}}As.DEFAULT_DEFINITIONS={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./};os.MaskedRegExp=class extends ms{updateOptions(t){super.updateOptions(t)}_update(t){const e=t.mask;e&&(t.validate=t=>t.search(e)>=0),super._update(t)}};class xs extends ms{constructor(t){super({...xs.DEFAULTS,...t,definitions:Object.assign({},As.DEFAULT_DEFINITIONS,null==t?void 0:t.definitions)})}updateOptions(t){super.updateOptions(t)}_update(t){t.definitions=Object.assign({},this.definitions,t.definitions),super._update(t),this._rebuildMask()}_rebuildMask(){const t=this.definitions;this._blocks=[],this.exposeBlock=void 0,this._stops=[],this._maskedBlocks={};const e=this.mask;if(!e||!t)return;let i=!1,s=!1;for(let r=0;r<e.length;++r){if(this.blocks){const t=e.slice(r),i=Object.keys(this.blocks).filter((e=>0===t.indexOf(e)));i.sort(((t,e)=>e.length-t.length));const s=i[0];if(s){const{expose:t,repeat:e,...i}=as(this.blocks[s]),n={lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,overwrite:this.overwrite,autofix:this.autofix,...i,repeat:e,parent:this},o=null!=e?new os.RepeatBlock(n):us(n);o&&(this._blocks.push(o),t&&(this.exposeBlock=o),this._maskedBlocks[s]||(this._maskedBlocks[s]=[]),this._maskedBlocks[s].push(this._blocks.length-1)),r+=s.length-1;continue}}let n=e[r],o=n in t;if(n===xs.STOP_CHAR){this._stops.push(this._blocks.length);continue}if("{"===n||"}"===n){i=!i;continue}if("["===n||"]"===n){s=!s;continue}if(n===xs.ESCAPE_CHAR){if(++r,n=e[r],!n)break;o=!1}const h=o?new As({isOptional:s,lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,displayChar:this.displayChar,...as(t[n]),parent:this}):new bs({char:n,eager:this.eager,isUnmasking:i});this._blocks.push(h)}}get state(){return{...super.state,_blocks:this._blocks.map((t=>t.state))}}set state(t){if(!t)return void this.reset();const{_blocks:e,...i}=t;this._blocks.forEach(((t,i)=>t.state=e[i])),super.state=i}reset(){super.reset(),this._blocks.forEach((t=>t.reset()))}get isComplete(){return this.exposeBlock?this.exposeBlock.isComplete:this._blocks.every((t=>t.isComplete))}get isFilled(){return this._blocks.every((t=>t.isFilled))}get isFixed(){return this._blocks.every((t=>t.isFixed))}get isOptional(){return this._blocks.every((t=>t.isOptional))}doCommit(){this._blocks.forEach((t=>t.doCommit())),super.doCommit()}get unmaskedValue(){return this.exposeBlock?this.exposeBlock.unmaskedValue:this._blocks.reduce(((t,e)=>t+e.unmaskedValue),"")}set unmaskedValue(t){if(this.exposeBlock){const e=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.unmaskedValue=t,this.appendTail(e),this.doCommit()}else super.unmaskedValue=t}get value(){return this.exposeBlock?this.exposeBlock.value:this._blocks.reduce(((t,e)=>t+e.value),"")}set value(t){if(this.exposeBlock){const e=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.value=t,this.appendTail(e),this.doCommit()}else super.value=t}get typedValue(){return this.exposeBlock?this.exposeBlock.typedValue:super.typedValue}set typedValue(t){if(this.exposeBlock){const e=this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock))+this.exposeBlock.displayValue.length);this.exposeBlock.typedValue=t,this.appendTail(e),this.doCommit()}else super.typedValue=t}get displayValue(){return this._blocks.reduce(((t,e)=>t+e.displayValue),"")}appendTail(t){return super.appendTail(t).aggregate(this._appendPlaceholder())}_appendEager(){var t;const e=new gs;let i=null==(t=this._mapPosToBlock(this.displayValue.length))?void 0:t.index;if(null==i)return e;this._blocks[i].isFilled&&++i;for(let t=i;t<this._blocks.length;++t){const i=this._blocks[t]._appendEager();if(!i.inserted)break;e.aggregate(i)}return e}_appendCharRaw(t,e){void 0===e&&(e={});const i=this._mapPosToBlock(this.displayValue.length),s=new gs;if(!i)return s;for(let n,o=i.index;n=this._blocks[o];++o){var r;const i=n._appendChar(t,{...e,_beforeTailState:null==(r=e._beforeTailState)||null==(r=r._blocks)?void 0:r[o]});if(s.aggregate(i),i.consumed)break}return s}extractTail(t,e){void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length);const i=new ws;return t===e||this._forEachBlocksInRange(t,e,((t,e,s,r)=>{const n=t.extractTail(s,r);n.stop=this._findStopBefore(e),n.from=this._blockStartPos(e),n instanceof ws&&(n.blockIndex=e),i.extend(n)})),i}extractInput(t,e,i){if(void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length),void 0===i&&(i={}),t===e)return"";let s="";return this._forEachBlocksInRange(t,e,((t,e,r,n)=>{s+=t.extractInput(r,n,i)})),s}_findStopBefore(t){let e;for(let i=0;i<this._stops.length;++i){const s=this._stops[i];if(!(s<=t))break;e=s}return e}_appendPlaceholder(t){const e=new gs;if(this.lazy&&null==t)return e;const i=this._mapPosToBlock(this.displayValue.length);if(!i)return e;const s=i.index,r=null!=t?t:this._blocks.length;return this._blocks.slice(s,r).forEach((i=>{var s;i.lazy&&null==t||e.aggregate(i._appendPlaceholder(null==(s=i._blocks)?void 0:s.length))})),e}_mapPosToBlock(t){let e="";for(let i=0;i<this._blocks.length;++i){const s=this._blocks[i],r=e.length;if(e+=s.displayValue,t<=e.length)return{index:i,offset:t-r}}}_blockStartPos(t){return this._blocks.slice(0,t).reduce(((t,e)=>t+e.displayValue.length),0)}_forEachBlocksInRange(t,e,i){void 0===e&&(e=this.displayValue.length);const s=this._mapPosToBlock(t);if(s){const t=this._mapPosToBlock(e),r=t&&s.index===t.index,n=s.offset,o=t&&r?t.offset:this._blocks[s.index].displayValue.length;if(i(this._blocks[s.index],s.index,n,o),t&&!r){for(let e=s.index+1;e<t.index;++e)i(this._blocks[e],e,0,this._blocks[e].displayValue.length);i(this._blocks[t.index],t.index,0,t.offset)}}}remove(t,e){void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length);const i=super.remove(t,e);return this._forEachBlocksInRange(t,e,((t,e,s,r)=>{i.aggregate(t.remove(s,r))})),i}nearestInputPos(t,e){if(void 0===e&&(e=Xi),!this._blocks.length)return 0;const i=new ys(this,t);if(e===Xi)return i.pushRightBeforeInput()?i.pos:(i.popState(),i.pushLeftBeforeInput()?i.pos:this.displayValue.length);if(e===Qi||e===ts){if(e===Qi){if(i.pushRightBeforeFilled(),i.ok&&i.pos===t)return t;i.popState()}if(i.pushLeftBeforeInput(),i.pushLeftBeforeRequired(),i.pushLeftBeforeFilled(),e===Qi){if(i.pushRightBeforeInput(),i.pushRightBeforeRequired(),i.ok&&i.pos<=t)return i.pos;if(i.popState(),i.ok&&i.pos<=t)return i.pos;i.popState()}return i.ok?i.pos:e===ts?0:(i.popState(),i.ok?i.pos:(i.popState(),i.ok?i.pos:0))}return e===es||e===is?(i.pushRightBeforeInput(),i.pushRightBeforeRequired(),i.pushRightBeforeFilled()?i.pos:e===is?this.displayValue.length:(i.popState(),i.ok?i.pos:(i.popState(),i.ok?i.pos:this.nearestInputPos(t,Qi)))):t}totalInputPositions(t,e){void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length);let i=0;return this._forEachBlocksInRange(t,e,((t,e,s,r)=>{i+=t.totalInputPositions(s,r)})),i}maskedBlock(t){return this.maskedBlocks(t)[0]}maskedBlocks(t){const e=this._maskedBlocks[t];return e?e.map((t=>this._blocks[t])):[]}pad(t){const e=new gs;return this._forEachBlocksInRange(0,this.displayValue.length,(i=>e.aggregate(i.pad(t)))),e}}xs.DEFAULTS={...ms.DEFAULTS,lazy:!0,placeholderChar:"_"},xs.STOP_CHAR="`",xs.ESCAPE_CHAR="\\",xs.InputDefinition=As,xs.FixedDefinition=bs,os.MaskedPattern=xs;class Es extends xs{get _matchFrom(){return this.maxLength-String(this.from).length}constructor(t){super(t)}updateOptions(t){super.updateOptions(t)}_update(t){const{to:e=this.to||0,from:i=this.from||0,maxLength:s=this.maxLength||0,autofix:r=this.autofix,...n}=t;this.to=e,this.from=i,this.maxLength=Math.max(String(e).length,s),this.autofix=r;const o=String(this.from).padStart(this.maxLength,"0"),h=String(this.to).padStart(this.maxLength,"0");let a=0;for(;a<h.length&&h[a]===o[a];)++a;n.mask=h.slice(0,a).replace(/0/g,"\\0")+"0".repeat(this.maxLength-a),super._update(n)}get isComplete(){return super.isComplete&&Boolean(this.value)}boundaries(t){let e="",i="";const[,s,r]=t.match(/^(\D*)(\d*)(\D*)/)||[];return r&&(e="0".repeat(s.length)+r,i="9".repeat(s.length)+r),e=e.padEnd(this.maxLength,"0"),i=i.padEnd(this.maxLength,"9"),[e,i]}doPrepareChar(t,e){let i;return void 0===e&&(e={}),[t,i]=super.doPrepareChar(t.replace(/\D/g,""),e),t||(i.skip=!this.isComplete),[t,i]}_appendCharRaw(t,e){if(void 0===e&&(e={}),!this.autofix||this.value.length+1>this.maxLength)return super._appendCharRaw(t,e);const i=String(this.from).padStart(this.maxLength,"0"),s=String(this.to).padStart(this.maxLength,"0"),[r,n]=this.boundaries(this.value+t);return Number(n)<this.from?super._appendCharRaw(i[this.value.length],e):Number(r)>this.to?!e.tail&&"pad"===this.autofix&&this.value.length+1<this.maxLength?super._appendCharRaw(i[this.value.length],e).aggregate(this._appendCharRaw(t,e)):super._appendCharRaw(s[this.value.length],e):super._appendCharRaw(t,e)}doValidate(t){const e=this.value;if(-1===e.search(/[^0]/)&&e.length<=this._matchFrom)return!0;const[i,s]=this.boundaries(e);return this.from<=Number(s)&&Number(i)<=this.to&&super.doValidate(t)}pad(t){const e=new gs;if(this.value.length===this.maxLength)return e;const i=this.value,s=this.maxLength-this.value.length;if(s){this.reset();for(let i=0;i<s;++i)e.aggregate(super._appendCharRaw("0",t));i.split("").forEach((t=>this._appendCharRaw(t)))}return e}}os.MaskedRange=Es;class $s extends xs{static extractPatternOptions(t){const{mask:e,pattern:i,...s}=t;return{...s,mask:qi(e)?e:i}}constructor(t){super($s.extractPatternOptions({...$s.DEFAULTS,...t}))}updateOptions(t){super.updateOptions(t)}_update(t){const{mask:e,pattern:i,blocks:s,...r}={...$s.DEFAULTS,...t},n=Object.assign({},$s.GET_DEFAULT_BLOCKS());t.min&&(n.Y.from=t.min.getFullYear()),t.max&&(n.Y.to=t.max.getFullYear()),t.min&&t.max&&n.Y.from===n.Y.to&&(n.m.from=t.min.getMonth()+1,n.m.to=t.max.getMonth()+1,n.m.from===n.m.to&&(n.d.from=t.min.getDate(),n.d.to=t.max.getDate())),Object.assign(n,this.blocks,s),super._update({...r,mask:qi(e)?e:i,blocks:n})}doValidate(t){const e=this.date;return super.doValidate(t)&&(!this.isComplete||this.isDateExist(this.value)&&null!=e&&(null==this.min||this.min<=e)&&(null==this.max||e<=this.max))}isDateExist(t){return this.format(this.parse(t,this),this).indexOf(t)>=0}get date(){return this.typedValue}set date(t){this.typedValue=t}get typedValue(){return this.isComplete?super.typedValue:null}set typedValue(t){super.typedValue=t}maskEquals(t){return t===Date||super.maskEquals(t)}optionsIsChanged(t){return super.optionsIsChanged($s.extractPatternOptions(t))}}$s.GET_DEFAULT_BLOCKS=()=>({d:{mask:Es,from:1,to:31,maxLength:2},m:{mask:Es,from:1,to:12,maxLength:2},Y:{mask:Es,from:1900,to:9999}}),$s.DEFAULTS={...xs.DEFAULTS,mask:Date,pattern:"d{.}`m{.}`Y",format:(t,e)=>{if(!t)return"";return[String(t.getDate()).padStart(2,"0"),String(t.getMonth()+1).padStart(2,"0"),t.getFullYear()].join(".")},parse:(t,e)=>{const[i,s,r]=t.split(".").map(Number);return new Date(r,s-1,i)}},os.MaskedDate=$s;class ks extends ms{constructor(t){super({...ks.DEFAULTS,...t}),this.currentMask=void 0}updateOptions(t){super.updateOptions(t)}_update(t){super._update(t),"mask"in t&&(this.exposeMask=void 0,this.compiledMasks=Array.isArray(t.mask)?t.mask.map((t=>{const{expose:e,...i}=as(t),s=us({overwrite:this._overwrite,eager:this._eager,skipInvalid:this._skipInvalid,...i});return e&&(this.exposeMask=s),s})):[])}_appendCharRaw(t,e){void 0===e&&(e={});const i=this._applyDispatch(t,e);return this.currentMask&&i.aggregate(this.currentMask._appendChar(t,this.currentMaskFlags(e))),i}_applyDispatch(t,e,i){void 0===t&&(t=""),void 0===e&&(e={}),void 0===i&&(i="");const s=e.tail&&null!=e._beforeTailState?e._beforeTailState._value:this.value,r=this.rawInputValue,n=e.tail&&null!=e._beforeTailState?e._beforeTailState._rawInputValue:r,o=r.slice(n.length),h=this.currentMask,a=new gs,u=null==h?void 0:h.state;return this.currentMask=this.doDispatch(t,{...e},i),this.currentMask&&(this.currentMask!==h?(this.currentMask.reset(),n&&(this.currentMask.append(n,{raw:!0}),a.tailShift=this.currentMask.value.length-s.length),o&&(a.tailShift+=this.currentMask.append(o,{raw:!0,tail:!0}).tailShift)):u&&(this.currentMask.state=u)),a}_appendPlaceholder(){const t=this._applyDispatch();return this.currentMask&&t.aggregate(this.currentMask._appendPlaceholder()),t}_appendEager(){const t=this._applyDispatch();return this.currentMask&&t.aggregate(this.currentMask._appendEager()),t}appendTail(t){const e=new gs;return t&&e.aggregate(this._applyDispatch("",{},t)),e.aggregate(this.currentMask?this.currentMask.appendTail(t):super.appendTail(t))}currentMaskFlags(t){var e,i;return{...t,_beforeTailState:(null==(e=t._beforeTailState)?void 0:e.currentMaskRef)===this.currentMask&&(null==(i=t._beforeTailState)?void 0:i.currentMask)||t._beforeTailState}}doDispatch(t,e,i){return void 0===e&&(e={}),void 0===i&&(i=""),this.dispatch(t,this,e,i)}doValidate(t){return super.doValidate(t)&&(!this.currentMask||this.currentMask.doValidate(this.currentMaskFlags(t)))}doPrepare(t,e){void 0===e&&(e={});let[i,s]=super.doPrepare(t,e);if(this.currentMask){let t;[i,t]=super.doPrepare(i,this.currentMaskFlags(e)),s=s.aggregate(t)}return[i,s]}doPrepareChar(t,e){void 0===e&&(e={});let[i,s]=super.doPrepareChar(t,e);if(this.currentMask){let t;[i,t]=super.doPrepareChar(i,this.currentMaskFlags(e)),s=s.aggregate(t)}return[i,s]}reset(){var t;null==(t=this.currentMask)||t.reset(),this.compiledMasks.forEach((t=>t.reset()))}get value(){return this.exposeMask?this.exposeMask.value:this.currentMask?this.currentMask.value:""}set value(t){this.exposeMask?(this.exposeMask.value=t,this.currentMask=this.exposeMask,this._applyDispatch()):super.value=t}get unmaskedValue(){return this.exposeMask?this.exposeMask.unmaskedValue:this.currentMask?this.currentMask.unmaskedValue:""}set unmaskedValue(t){this.exposeMask?(this.exposeMask.unmaskedValue=t,this.currentMask=this.exposeMask,this._applyDispatch()):super.unmaskedValue=t}get typedValue(){return this.exposeMask?this.exposeMask.typedValue:this.currentMask?this.currentMask.typedValue:""}set typedValue(t){if(this.exposeMask)return this.exposeMask.typedValue=t,this.currentMask=this.exposeMask,void this._applyDispatch();let e=String(t);this.currentMask&&(this.currentMask.typedValue=t,e=this.currentMask.unmaskedValue),this.unmaskedValue=e}get displayValue(){return this.currentMask?this.currentMask.displayValue:""}get isComplete(){var t;return Boolean(null==(t=this.currentMask)?void 0:t.isComplete)}get isFilled(){var t;return Boolean(null==(t=this.currentMask)?void 0:t.isFilled)}remove(t,e){const i=new gs;return this.currentMask&&i.aggregate(this.currentMask.remove(t,e)).aggregate(this._applyDispatch()),i}get state(){var t;return{...super.state,_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map((t=>t.state)),currentMaskRef:this.currentMask,currentMask:null==(t=this.currentMask)?void 0:t.state}}set state(t){const{compiledMasks:e,currentMaskRef:i,currentMask:s,...r}=t;e&&this.compiledMasks.forEach(((t,i)=>t.state=e[i])),null!=i&&(this.currentMask=i,this.currentMask.state=s),super.state=r}extractInput(t,e,i){return this.currentMask?this.currentMask.extractInput(t,e,i):""}extractTail(t,e){return this.currentMask?this.currentMask.extractTail(t,e):super.extractTail(t,e)}doCommit(){this.currentMask&&this.currentMask.doCommit(),super.doCommit()}nearestInputPos(t,e){return this.currentMask?this.currentMask.nearestInputPos(t,e):super.nearestInputPos(t,e)}get overwrite(){return this.currentMask?this.currentMask.overwrite:this._overwrite}set overwrite(t){this._overwrite=t}get eager(){return this.currentMask?this.currentMask.eager:this._eager}set eager(t){this._eager=t}get skipInvalid(){return this.currentMask?this.currentMask.skipInvalid:this._skipInvalid}set skipInvalid(t){this._skipInvalid=t}get autofix(){return this.currentMask?this.currentMask.autofix:this._autofix}set autofix(t){this._autofix=t}maskEquals(t){return Array.isArray(t)?this.compiledMasks.every(((e,i)=>{if(!t[i])return;const{mask:s,...r}=t[i];return rs(e,r)&&e.maskEquals(s)})):super.maskEquals(t)}typedValueEquals(t){var e;return Boolean(null==(e=this.currentMask)?void 0:e.typedValueEquals(t))}}ks.DEFAULTS={...ms.DEFAULTS,dispatch:(t,e,i,s)=>{if(!e.compiledMasks.length)return;const r=e.rawInputValue,n=e.compiledMasks.map(((n,o)=>{const h=e.currentMask===n,a=h?n.displayValue.length:n.nearestInputPos(n.displayValue.length,ts);return n.rawInputValue!==r?(n.reset(),n.append(r,{raw:!0})):h||n.remove(a),n.append(t,e.currentMaskFlags(i)),n.appendTail(s),{index:o,weight:n.rawInputValue.length,totalInputPositions:n.totalInputPositions(0,Math.max(a,n.nearestInputPos(n.displayValue.length,ts)))}}));return n.sort(((t,e)=>e.weight-t.weight||e.totalInputPositions-t.totalInputPositions)),e.compiledMasks[n[0].index]}},os.MaskedDynamic=ks;class Cs extends xs{constructor(t){super({...Cs.DEFAULTS,...t})}updateOptions(t){super.updateOptions(t)}_update(t){const{enum:e,...i}=t;if(e){const t=e.map((t=>t.length)),s=Math.min(...t),r=Math.max(...t)-s;i.mask="*".repeat(s),r&&(i.mask+="["+"*".repeat(r)+"]"),this.enum=e}super._update(i)}_appendCharRaw(t,e){void 0===e&&(e={});const i=Math.min(this.nearestInputPos(0,is),this.value.length),s=this.enum.filter((e=>this.matchValue(e,this.unmaskedValue+t,i)));if(s.length){1===s.length&&this._forEachBlocksInRange(0,this.value.length,((t,i)=>{const r=s[0][i];i>=this.value.length||r===t.value||(t.reset(),t._appendChar(r,e))}));const t=super._appendCharRaw(s[0][this.value.length],e);return 1===s.length&&s[0].slice(this.unmaskedValue.length).split("").forEach((e=>t.aggregate(super._appendCharRaw(e)))),t}return new gs({skip:!this.isComplete})}extractTail(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length),new vs("",t)}remove(t,e){if(void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length),t===e)return new gs;const i=Math.min(super.nearestInputPos(0,is),this.value.length);let s;for(s=t;s>=0;--s){const t=this.enum.filter((t=>this.matchValue(t,this.value.slice(i,s),i)));if(t.length>1)break}const r=super.remove(s,e);return r.tailShift+=s-t,r}get isComplete(){return this.enum.indexOf(this.value)>=0}}Cs.DEFAULTS={...xs.DEFAULTS,matchValue:(t,e,i)=>t.indexOf(e,i)===i},os.MaskedEnum=Cs;var Ds;os.MaskedFunction=class extends ms{updateOptions(t){super.updateOptions(t)}_update(t){super._update({...t,validate:t.mask})}};class Fs extends ms{constructor(t){super({...Fs.DEFAULTS,...t})}updateOptions(t){super.updateOptions(t)}_update(t){super._update(t),this._updateRegExps()}_updateRegExps(){const t="^"+(this.allowNegative?"[+|\\-]?":""),e=(this.scale?"("+ss(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExp=new RegExp(t+"\\d*"+e),this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(ss).join("")+"]","g"),this._thousandsSeparatorRegExp=new RegExp(ss(this.thousandsSeparator),"g")}_removeThousandsSeparators(t){return t.replace(this._thousandsSeparatorRegExp,"")}_insertThousandsSeparators(t){const e=t.split(this.radix);return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),e.join(this.radix)}doPrepareChar(t,e){void 0===e&&(e={});const[i,s]=super.doPrepareChar(this._removeThousandsSeparators(this.scale&&this.mapToRadix.length&&(e.input&&e.raw||!e.input&&!e.raw)?t.replace(this._mapToRadixRegExp,this.radix):t),e);return t&&!i&&(s.skip=!0),!i||this.allowPositive||this.value||"-"===i||s.aggregate(this._appendChar("-")),[i,s]}_separatorsCount(t,e){void 0===e&&(e=!1);let i=0;for(let s=0;s<t;++s)this._value.indexOf(this.thousandsSeparator,s)===s&&(++i,e&&(t+=this.thousandsSeparator.length));return i}_separatorsCountFromSlice(t){return void 0===t&&(t=this._value),this._separatorsCount(this._removeThousandsSeparators(t).length,!0)}extractInput(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length),[t,e]=this._adjustRangeWithSeparators(t,e),this._removeThousandsSeparators(super.extractInput(t,e,i))}_appendCharRaw(t,e){void 0===e&&(e={});const i=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,s=this._separatorsCountFromSlice(i);this._value=this._removeThousandsSeparators(this.value);const r=this._value;this._value+=t;const n=this.number;let o,h=!isNaN(n),a=!1;if(h){let t;null!=this.min&&this.min<0&&this.number<this.min&&(t=this.min),null!=this.max&&this.max>0&&this.number>this.max&&(t=this.max),null!=t&&(this.autofix?(this._value=this.format(t,this).replace(Fs.UNMASKED_RADIX,this.radix),a||(a=r===this._value&&!e.tail)):h=!1),h&&(h=Boolean(this._value.match(this._numberRegExp)))}h?o=new gs({inserted:this._value.slice(r.length),rawInserted:a?"":t,skip:a}):(this._value=r,o=new gs),this._value=this._insertThousandsSeparators(this._value);const u=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,l=this._separatorsCountFromSlice(u);return o.tailShift+=(l-s)*this.thousandsSeparator.length,o}_findSeparatorAround(t){if(this.thousandsSeparator){const e=t-this.thousandsSeparator.length+1,i=this.value.indexOf(this.thousandsSeparator,e);if(i<=t)return i}return-1}_adjustRangeWithSeparators(t,e){const i=this._findSeparatorAround(t);i>=0&&(t=i);const s=this._findSeparatorAround(e);return s>=0&&(e=s+this.thousandsSeparator.length),[t,e]}remove(t,e){void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length),[t,e]=this._adjustRangeWithSeparators(t,e);const i=this.value.slice(0,t),s=this.value.slice(e),r=this._separatorsCount(i.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(i+s));const n=this._separatorsCountFromSlice(i);return new gs({tailShift:(n-r)*this.thousandsSeparator.length})}nearestInputPos(t,e){if(!this.thousandsSeparator)return t;switch(e){case Xi:case Qi:case ts:{const i=this._findSeparatorAround(t-1);if(i>=0){const s=i+this.thousandsSeparator.length;if(t<s||this.value.length<=s||e===ts)return i}break}case es:case is:{const e=this._findSeparatorAround(t);if(e>=0)return e+this.thousandsSeparator.length}}return t}doCommit(){if(this.value){const t=this.number;let e=t;null!=this.min&&(e=Math.max(e,this.min)),null!=this.max&&(e=Math.min(e,this.max)),e!==t&&(this.unmaskedValue=this.format(e,this));let i=this.value;this.normalizeZeros&&(i=this._normalizeZeros(i)),this.padFractionalZeros&&this.scale>0&&(i=this._padFractionalZeros(i)),this._value=i}super.doCommit()}_normalizeZeros(t){const e=this._removeThousandsSeparators(t).split(this.radix);return e[0]=e[0].replace(/^(\D*)(0*)(\d*)/,((t,e,i,s)=>e+s)),t.length&&!/\d$/.test(e[0])&&(e[0]=e[0]+"0"),e.length>1&&(e[1]=e[1].replace(/0*$/,""),e[1].length||(e.length=1)),this._insertThousandsSeparators(e.join(this.radix))}_padFractionalZeros(t){if(!t)return t;const e=t.split(this.radix);return e.length<2&&e.push(""),e[1]=e[1].padEnd(this.scale,"0"),e.join(this.radix)}doSkipInvalid(t,e,i){void 0===e&&(e={});const s=0===this.scale&&t!==this.thousandsSeparator&&(t===this.radix||t===Fs.UNMASKED_RADIX||this.mapToRadix.includes(t));return super.doSkipInvalid(t,e,i)&&!s}get unmaskedValue(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,Fs.UNMASKED_RADIX)}set unmaskedValue(t){super.unmaskedValue=t}get typedValue(){return this.parse(this.unmaskedValue,this)}set typedValue(t){this.rawInputValue=this.format(t,this).replace(Fs.UNMASKED_RADIX,this.radix)}get number(){return this.typedValue}set number(t){this.typedValue=t}get allowNegative(){return null!=this.min&&this.min<0||null!=this.max&&this.max<0}get allowPositive(){return null!=this.min&&this.min>0||null!=this.max&&this.max>0}typedValueEquals(t){return(super.typedValueEquals(t)||Fs.EMPTY_VALUES.includes(t)&&Fs.EMPTY_VALUES.includes(this.typedValue))&&!(0===t&&""===this.value)}}Ds=Fs,Fs.UNMASKED_RADIX=".",Fs.EMPTY_VALUES=[...ms.EMPTY_VALUES,0],Fs.DEFAULTS={...ms.DEFAULTS,mask:Number,radix:",",thousandsSeparator:"",mapToRadix:[Ds.UNMASKED_RADIX],min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,scale:2,normalizeZeros:!0,padFractionalZeros:!1,parse:Number,format:t=>t.toLocaleString("en-US",{useGrouping:!1,maximumFractionDigits:20})},os.MaskedNumber=Fs;const Ss={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function Bs(t,e,i){void 0===e&&(e=Ss.MASKED),void 0===i&&(i=Ss.MASKED);const s=us(t);return t=>s.runIsolated((s=>(s[e]=t,s[i])))}os.PIPE_TYPE=Ss,os.createPipe=Bs,os.pipe=function(t,e,i,s){return Bs(e,i,s)(t)};os.RepeatBlock=class extends xs{get repeatFrom(){var t;return null!=(t=Array.isArray(this.repeat)?this.repeat[0]:this.repeat===1/0?0:this.repeat)?t:0}get repeatTo(){var t;return null!=(t=Array.isArray(this.repeat)?this.repeat[1]:this.repeat)?t:1/0}constructor(t){super(t)}updateOptions(t){super.updateOptions(t)}_update(t){var e,i,s;const{repeat:r,...n}=as(t);this._blockOpts=Object.assign({},this._blockOpts,n);const o=us(this._blockOpts);this.repeat=null!=(e=null!=(i=null!=r?r:o.repeat)?i:this.repeat)?e:1/0,super._update({mask:"m".repeat(Math.max(this.repeatTo===1/0&&(null==(s=this._blocks)?void 0:s.length)||0,this.repeatFrom)),blocks:{m:o},eager:o.eager,overwrite:o.overwrite,skipInvalid:o.skipInvalid,lazy:o.lazy,placeholderChar:o.placeholderChar,displayChar:o.displayChar})}_allocateBlock(t){return t<this._blocks.length?this._blocks[t]:this.repeatTo===1/0||this._blocks.length<this.repeatTo?(this._blocks.push(us(this._blockOpts)),this.mask+="m",this._blocks[this._blocks.length-1]):void 0}_appendCharRaw(t,e){void 0===e&&(e={});const i=new gs;for(let h,a,u=null!=(s=null==(r=this._mapPosToBlock(this.displayValue.length))?void 0:r.index)?s:Math.max(this._blocks.length-1,0);h=null!=(n=this._blocks[u])?n:a=!a&&this._allocateBlock(u);++u){var s,r,n,o;const l=h._appendChar(t,{...e,_beforeTailState:null==(o=e._beforeTailState)||null==(o=o._blocks)?void 0:o[u]});if(l.skip&&a){this._blocks.pop(),this.mask=this.mask.slice(1);break}if(i.aggregate(l),l.consumed)break}return i}_trimEmptyTail(t,e){var i,s;void 0===t&&(t=0);const r=Math.max((null==(i=this._mapPosToBlock(t))?void 0:i.index)||0,this.repeatFrom,0);let n;null!=e&&(n=null==(s=this._mapPosToBlock(e))?void 0:s.index),null==n&&(n=this._blocks.length-1);let o=0;for(let t=n;r<=t&&!this._blocks[t].unmaskedValue;--t,++o);o&&(this._blocks.splice(n-o+1,o),this.mask=this.mask.slice(o))}reset(){super.reset(),this._trimEmptyTail()}remove(t,e){void 0===t&&(t=0),void 0===e&&(e=this.displayValue.length);const i=super.remove(t,e);return this._trimEmptyTail(t,e),i}totalInputPositions(t,e){return void 0===t&&(t=0),null==e&&this.repeatTo===1/0?1/0:super.totalInputPositions(t,e)}get state(){return super.state}set state(t){this._blocks.length=t._blocks.length,this.mask=this.mask.slice(0,this._blocks.length),super.state=t}};try{globalThis.IMask=os}catch{}class _s extends rt{static properties={header:{type:String}};static styles=[n`
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
        height: calc(100dvh - 164px - 3dvh - 90px);

        border-radius: 5px;

        overflow: auto;

        display: flex;
        justify-content: center;
        align-items: flex-start;

        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
    `];constructor(){super(),this.header=""}render(){return V` <div>
      <header class="heading">
        <h1>${Di(this.header)}</h1>
      </header>
      <div class="container">
        <slot></slot>
      </div>
    </div>`}}customElements.define("shared-container",_s);class Rs extends ce{static styles=[n`
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
    `];constructor(){super(),this.employee={"First Name":{value:"",isValid:!1,isTouched:!1,validate:Ti},"Last Name":{value:"",isValid:!1,isTouched:!1,validate:Ti},"Date of Employment":{value:"",isValid:!1,isTouched:!1,validate:Li},"Date of Birth":{value:"",isValid:!1,isTouched:!1,validate:Mi},Phone:{value:"",isValid:!1,isTouched:!1,validate:Ti,mask:"{+(9\\0)} 000 000 00 00",maskObj:null,id:"phone"},Email:{value:"",isValid:!1,isTouched:!1,validate:Vi},Department:{value:"",isValid:!1,isTouched:!1,validate:Ti},Position:{value:"",isValid:!1,isTouched:!1,validate:Ti}},this.selectedId="",this.showEditModal=null,this.isChanged=!1}fetchData(){const t=le.getState().router.location.params.id;if(!t)return;const e=le.getState().data.find((e=>e._id===t));if(e){this.selectedId=e._id;for(let t in e)this.employee[t]&&(this.employee[t].value=e[t],this.employee[t].maskObj&&(this.employee[t].maskObj.unmaskedValue=this.employee[t].value),this.employee[t].isTouched=!0,this.employee[t].isValid=this.employee[t].validate(e[t]))}}applyMask(){for(let t in this.employee){const e=this.employee[t];if(e.mask){const t=this.shadowRoot.getElementById(e.id);if(t){const i=os(t,{mask:e.mask,lazy:!1});e.maskObj=i}}}}firstUpdated(){super.firstUpdated(),this.applyMask(),this.fetchData(),this.requestUpdate()}handleSubmit(t,e){if(t.preventDefault(),!e)return;const i={};for(let t in this.employee){const e=this.employee[t];i[t]=e.mask?e.maskObj.unmaskedValue:this.employee[t].value}i._id=this.selectedId||Ni(),this.selectedId?(this.showEditModal=i,this.requestUpdate()):(le.dispatch({type:"ADD_NEW",payload:i}),ie.go("/"))}handleEditConfirm(){le.dispatch({type:"EDIT_DATA",payload:this.showEditModal});const t=new URLSearchParams(window.location.search);console.log(t.toString()),ie.go(t?`/?${t.toString()}`:"/")}handleEditReject(){this.showEditModal=null,this.requestUpdate()}handleInputChange(t){const{name:e,value:i}=t.target;let s=i;const r={...this.employee[e]};r.value=s,r.isValid=this.employee[e].validate(s),r.isTouched=!0,this.employee={...this.employee,[e]:r},this.selectedId&&(this.isChanged=!0),this.requestUpdate()}handleBlur(t){const{name:e,value:i}=t.target;this.employee[e].isTouched=!0,this.requestUpdate()}render(){let t=!0;for(let e in this.employee)t=t&&this.employee[e].isValid;this.selectedId&&(t=t&&this.isChanged);let e=null;return this.showEditModal&&this.selectedId&&(e=V`<dialog-modal
        .header=${Di("Are you sure?")}
        .text=${Di("Your changes will be saved. Do you want to proceed?")}
        .acceptButton=${Di("Accept")}
        .rejectButton=${Di("Reject")}
        .accept=${()=>this.handleEditConfirm()}
        .reject=${()=>this.handleEditReject()}
      ></dialog-modal>`),V`
      ${e}
      <shared-container .header=${this.selectedId?"Edit Record":"Add New"}>
        <form novalidate @submit=${e=>this.handleSubmit(e,t)}>
          ${Ui.map((t=>V`
              <div class="input-group">
                <label for=${t.id}>${Di(t.name)}:</label>
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
          ${zi.map((t=>V`
              <div class="input-group">
                <label for=${t.id}>${Di(t.name)}:</label>
                <select
                  name=${t.name}
                  id=${t.id}
                  class=${this.employee[t.name].isTouched&&!this.employee[t.name].isValid?"invalid":""}
                  @change=${t=>this.handleInputChange(t,!0)}
                >
                  ${t.options.map((e=>V`
                      <option
                        ?selected=${e===this.employee[t.name].value}
                        value=${e}
                      >
                        ${Di(e)}
                      </option>
                    `))}
                </select>
              </div>
            `))}
          <button type="submit" ?disabled=${!t}>
            ${Di(this.selectedId?"Save":"Submit")}
          </button>
        </form>
      </shared-container>
    `}}customElements.define("form-item",Rs);class Os extends rt{static styles=[n`
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
    `];constructor(){super(),window.addEventListener("popstate",(()=>{console.log("popstate");const t=le.getState().router;this.currentPath=t.location.pathname,this.requestUpdate()}))}changeLang(t){const e=t.target.value.toLowerCase();ei.changeLanguage(e)}render(){return V` <nav>
      <a class="logo" href="/">
        <img src=${"/assets/img/favicon.png"} alt="logo" />
        <span>ING</span>
      </a>

      <ul>
        ${Hi.map((t=>V`
            <li>
              <a
                class=${t.to===(this.currentPath||"/")?"active":"inactive"}
                href=${t.to}
                >${Di(t.title)}</a
              >
            </li>
          `))}

        <li>
          <select @change=${t=>this.changeLang(t)}>
            ${Fi.map((t=>V`<
                <option ?selected=${ei.language===t} value=${t}>
                  ${t.toUpperCase()}
                </option> `))}
          </select>
        </li>
      </ul>
    </nav>`}}customElements.define("nav-bar",Os);class Ps extends rt{static styles=[n`
      :host {
        padding: 3vh 5vw;
        padding: 3dvh 5vw;

        background-color: var(--main-bg);

        display: block;
        height: 94vh;
        height: 94dvh;

        overflow-y: hidden;
      }
    `];render(){return V` <div>
      <nav-bar></nav-bar>
      <slot></slot>
    </div>`}}customElements.define("main-container",Ps);class Ns extends ce{firstUpdated(){super.firstUpdated(),this.setRoutes();const t=le.getState().data;t&&t.length||this.loadData(),async function(t=Si){ei.use(yi).init({lng:t,supportedLngs:Fi,resources:{en:{translation:{Employees:"Employees","Add New":"Add New","Employee List":"Employee List","First Name":"First Name","Last Name":"Last Name","Date of Employment":"Date of Employment","Date of Birth":"Date of Birth",Phone:"Phone",Email:"Email",Department:"Department",Position:"Position",Actions:"Actions",Edit:"Edit",Delete:"Delete"}},tr:{translation:{Junior:"Yeni Başlayan",Medior:"Orta Seviye",Senior:"Kıdemli",Tech:"Teknoloji",Analytics:"Analitik","Your changes will be saved. Do you want to proceed?":"Değişiklikleriniz kaydedilecek. Devam etmek istiyor musunuz?","Edit Record":"Kaydı Düzenle",Save:"Kaydet",Submit:"Ekle",Reject:"İptal",Accept:"Kabul Et","Are you sure?":"Emin misin?","Selected employee record of {{name}} will be deleted.":"Çalışan {{name}} için seçili personel kaydı silinecektir.",Employees:"Çalışanlar","Add New":"Yeni Ekle","Employee List":"Çalışan Listesi","First Name":"Ad","Last Name":"Soyad","Date of Employment":"İşe Başlama Tarihi","Date of Birth":"Doğum Tarihi",Phone:"Telefon",Email:"E-posta",Department:"Bölüm",Position:"Pozisyon",Actions:"İşlemler",Edit:"Düzenle",Delete:"Sil"}}}})}(Si)}async setRoutes(){const t=new ie(this.shadowRoot.querySelector("#outlet"));await t.setRoutes([{path:"/",component:"employee-list"},{path:"/add-new",component:"form-item"},{path:"/edit/:id",component:"form-item"},{path:"(.*)",redirect:"/"}]),le.dispatch({type:"SET_ROUTER",payload:t})}loadData(){fetch("/assets/data/employees.json").then((t=>t.json())).then((t=>{le.dispatch({type:"INITIAL",payload:t})}))}render(){return V`
      <main>
        <main-container>
          <div id="outlet"></div>
        </main-container>
      </main>
    `}}customElements.define("main-index",Ns);export{Ns as MainIndex};
