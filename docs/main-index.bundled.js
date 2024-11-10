/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let r=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new r(n,t,i)},s=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:l,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,w=f?f.emptyScript:"",g=p.reactiveElementPolyfillSupport,m=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!a(t,e),y={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return n?.call(this)},set(e){const o=n?.call(this);r.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...l(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(e)i.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of n){const n=document.createElement("style"),r=t.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=e.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=n,this[n]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[m("elementProperties")]=new Map,x[m("finalized")]=new Map,g?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,E=$.trustedTypes,k=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+C,M=`<${A}>`,R=document,P=()=>R.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,_="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,I=/>/g,N=RegExp(`>|${_}(?:([^\\s"'>=/]+)(${_}*=${_}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,D=/"/g,U=/^(?:script|style|textarea|title)$/i,V=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),z=new WeakMap,F=R.createTreeWalker(R,129);function W(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,n=[];let r,o=2===e?"<svg>":3===e?"<math>":"",s=O;for(let e=0;e<i;e++){const i=t[e];let a,c,h=-1,l=0;for(;l<i.length&&(s.lastIndex=l,c=s.exec(i),null!==c);)l=s.lastIndex,s===O?"!--"===c[1]?s=j:void 0!==c[1]?s=I:void 0!==c[2]?(U.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=N):void 0!==c[3]&&(s=N):s===N?">"===c[0]?(s=r??O,h=-1):void 0===c[1]?h=-2:(h=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?N:'"'===c[3]?D:H):s===D||s===H?s=N:s===j||s===I?s=O:(s=N,r=void 0);const d=s===N&&t[e+1].startsWith("/>")?" ":"";o+=s===O?i+M:h>=0?(n.push(a),i.slice(0,h)+S+i.slice(h)+C+d):i+C+(-2===h?e:d)}return[W(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class Y{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const s=t.length-1,a=this.parts,[c,h]=G(t,e);if(this.el=Y.createElement(c,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=F.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(S)){const e=h[o++],i=n.getAttribute(t).split(C),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?X:"?"===s[1]?tt:"@"===s[1]?et:Q}),n.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),n.removeAttribute(t));if(U.test(n.tagName)){const t=n.textContent.split(C),e=t.length-1;if(e>0){n.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],P()),F.nextNode(),a.push({type:2,index:++r});n.append(t[e],P())}}}else if(8===n.nodeType)if(n.data===A)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,n){if(e===B)return e;let r=void 0!==n?i._$Co?.[n]:i._$Cl;const o=T(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=r:i._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,n)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??R).importNode(e,!0);F.currentNode=n;let r=F.nextNode(),o=0,s=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new q(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=i[++s]}o!==a?.index&&(r=F.nextNode(),o++)}return F.currentNode=R,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),T(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(W(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new J(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new Y(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new q(this.O(P()),this.O(P()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(void 0===r)t=K(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const n=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=K(this,n[i+s],e,s),a===B&&(a=this._$AH[s]),o||=!T(a)||a!==this._$AH[s],a===Z?t=Z:t!==Z&&(t+=(a??"")+r[s+1]),this._$AH[s]=a}o&&!n&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class et extends Q{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??Z)===B)return;const i=this._$AH,n=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Z&&(i===Z||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const nt=$.litHtmlPolyfillSupport;nt?.(Y,q),($.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class rt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let r=n._$litPart$;if(void 0===r){const t=i?.renderBefore??null;n._$litPart$=r=new q(e.insertBefore(P(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const ot=globalThis.litElementPolyfillSupport;function st(t,e){void 0===e&&(e={});for(var i=function(t){for(var e=[],i=0;i<t.length;){var n=t[i];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)e.push({type:"CHAR",index:i,value:t[i++]});else{var r=1,o="";if("?"===t[a=i+1])throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<t.length;)if("\\"!==t[a]){if(")"===t[a]){if(0==--r){a++;break}}else if("("===t[a]&&(r++,"?"!==t[a+1]))throw new TypeError("Capturing groups are not allowed at ".concat(a));o+=t[a++]}else o+=t[a++]+t[a++];if(r)throw new TypeError("Unbalanced pattern at ".concat(i));if(!o)throw new TypeError("Missing pattern at ".concat(i));e.push({type:"PATTERN",index:i,value:o}),i=a}else{for(var s="",a=i+1;a<t.length;){var c=t.charCodeAt(a);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;s+=t[a++]}if(!s)throw new TypeError("Missing parameter name at ".concat(i));e.push({type:"NAME",index:i,value:s}),i=a}else e.push({type:"CLOSE",index:i,value:t[i++]});else e.push({type:"OPEN",index:i,value:t[i++]});else e.push({type:"ESCAPED_CHAR",index:i++,value:t[i++]});else e.push({type:"MODIFIER",index:i,value:t[i++]})}return e.push({type:"END",index:i,value:""}),e}(t),n=e.prefixes,r=void 0===n?"./":n,o=e.delimiter,s=void 0===o?"/#?":o,a=[],c=0,h=0,l="",d=function(t){if(h<i.length&&i[h].type===t)return i[h++].value},u=function(t){var e=d(t);if(void 0!==e)return e;var n=i[h],r=n.type,o=n.index;throw new TypeError("Unexpected ".concat(r," at ").concat(o,", expected ").concat(t))},p=function(){for(var t,e="";t=d("CHAR")||d("ESCAPED_CHAR");)e+=t;return e},f=function(t){var e=a[a.length-1],i=t||(e&&"string"==typeof e?e:"");if(e&&!i)throw new TypeError('Must have text between two parameters, missing text after "'.concat(e.name,'"'));return!i||function(t){for(var e=0,i=s;e<i.length;e++){var n=i[e];if(t.indexOf(n)>-1)return!0}return!1}(i)?"[^".concat(ht(s),"]+?"):"(?:(?!".concat(ht(i),")[^").concat(ht(s),"])+?")};h<i.length;){var w=d("CHAR"),g=d("NAME"),m=d("PATTERN");if(g||m){var v=w||"";-1===r.indexOf(v)&&(l+=v,v=""),l&&(a.push(l),l=""),a.push({name:g||c++,prefix:v,suffix:"",pattern:m||f(v),modifier:d("MODIFIER")||""})}else{var b=w||d("ESCAPED_CHAR");if(b)l+=b;else if(l&&(a.push(l),l=""),d("OPEN")){v=p();var y=d("NAME")||"",x=d("PATTERN")||"",$=p();u("CLOSE"),a.push({name:y||(x?c++:""),pattern:y&&!x?f(v):x,prefix:v,suffix:$,modifier:d("MODIFIER")||""})}else u("END")}}return a}function at(t,e){return ct(st(t,e),e)}function ct(t,e){void 0===e&&(e={});var i=lt(e),n=e.encode,r=void 0===n?function(t){return t}:n,o=e.validate,s=void 0===o||o,a=t.map((function(t){if("object"==typeof t)return new RegExp("^(?:".concat(t.pattern,")$"),i)}));return function(e){for(var i="",n=0;n<t.length;n++){var o=t[n];if("string"!=typeof o){var c=e?e[o.name]:void 0,h="?"===o.modifier||"*"===o.modifier,l="*"===o.modifier||"+"===o.modifier;if(Array.isArray(c)){if(!l)throw new TypeError('Expected "'.concat(o.name,'" to not repeat, but got an array'));if(0===c.length){if(h)continue;throw new TypeError('Expected "'.concat(o.name,'" to not be empty'))}for(var d=0;d<c.length;d++){var u=r(c[d],o);if(s&&!a[n].test(u))throw new TypeError('Expected all "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(u,'"'));i+=o.prefix+u+o.suffix}}else if("string"!=typeof c&&"number"!=typeof c){if(!h){var p=l?"an array":"a string";throw new TypeError('Expected "'.concat(o.name,'" to be ').concat(p))}}else{u=r(String(c),o);if(s&&!a[n].test(u))throw new TypeError('Expected "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(u,'"'));i+=o.prefix+u+o.suffix}}else i+=o}return i}}function ht(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function lt(t){return t&&t.sensitive?"":"i"}function dt(t,e,i){return function(t,e,i){void 0===i&&(i={});for(var n=i.strict,r=void 0!==n&&n,o=i.start,s=void 0===o||o,a=i.end,c=void 0===a||a,h=i.encode,l=void 0===h?function(t){return t}:h,d=i.delimiter,u=void 0===d?"/#?":d,p=i.endsWith,f="[".concat(ht(void 0===p?"":p),"]|$"),w="[".concat(ht(u),"]"),g=s?"^":"",m=0,v=t;m<v.length;m++){var b=v[m];if("string"==typeof b)g+=ht(l(b));else{var y=ht(l(b.prefix)),x=ht(l(b.suffix));if(b.pattern)if(e&&e.push(b),y||x)if("+"===b.modifier||"*"===b.modifier){var $="*"===b.modifier?"?":"";g+="(?:".concat(y,"((?:").concat(b.pattern,")(?:").concat(x).concat(y,"(?:").concat(b.pattern,"))*)").concat(x,")").concat($)}else g+="(?:".concat(y,"(").concat(b.pattern,")").concat(x,")").concat(b.modifier);else{if("+"===b.modifier||"*"===b.modifier)throw new TypeError('Can not repeat "'.concat(b.name,'" without a prefix and suffix'));g+="(".concat(b.pattern,")").concat(b.modifier)}else g+="(?:".concat(y).concat(x,")").concat(b.modifier)}}if(c)r||(g+="".concat(w,"?")),g+=i.endsWith?"(?=".concat(f,")"):"$";else{var E=t[t.length-1],k="string"==typeof E?w.indexOf(E[E.length-1])>-1:void 0===E;r||(g+="(?:".concat(w,"(?=").concat(f,"))?")),k||(g+="(?=".concat(w,"|").concat(f,")"))}return new RegExp(g,lt(i))}(st(t,i),e,i)}function ut(t,e,i){return t instanceof RegExp?function(t,e){if(!e)return t;for(var i=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,r=i.exec(t.source);r;)e.push({name:r[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),r=i.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,i){var n=t.map((function(t){return ut(t,e,i).source}));return new RegExp("(?:".concat(n.join("|"),")"),lt(i))}(t,e,i):dt(t,e,i)}function pt(t){return"object"==typeof t&&!!t}function ft(t){return"function"==typeof t}function wt(t){return"string"==typeof t}function gt(t=[]){return Array.isArray(t)?t:[t]}function mt(t){return`[Vaadin.Router] ${t}`}ot?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.1.1");class vt extends Error{code;context;constructor(t){super(mt(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}const bt=Symbol("NotFoundResult");function yt(t){return new vt(t)}function xt(t){return(Array.isArray(t)?t[0]:t)??""}function $t(t){return xt(t?.path)}const Et=new Map;function kt(t){try{return decodeURIComponent(t)}catch{return t}}Et.set("|false",{keys:[],pattern:/(?:)/u});var St=function(t,e,i=!1,n=[],r){const o=`${t}|${String(i)}`,s=xt(e);let a=Et.get(o);if(!a){const e=[];a={keys:e,pattern:ut(t,e,{end:i,strict:""===t})},Et.set(o,a)}const c=a.pattern.exec(s);if(!c)return null;const h={...r};for(let t=1;t<c.length;t++){const e=a.keys[t-1],i=e.name,n=c[t];void 0===n&&Object.hasOwn(h,i)||("+"===e.modifier||"*"===e.modifier?h[i]=n?n.split(/[/?#]/u).map(kt):[]:h[i]=n?kt(n):n)}return{keys:[...n,...a.keys],params:h,path:c[0]}};var Ct=function t(e,i,n,r,o){let s,a,c=0,h=$t(e);return h.startsWith("/")&&(n&&(h=h.substring(1)),n=!0),{next(l){if(e===l)return{done:!0,value:void 0};e.i??=function(t){return Array.isArray(t)&&t.length>0?t:void 0}(e.children);const d=e.i??[],u=!e.i&&!e.children;if(!s&&(s=St(h,i,u,r,o),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:e}};if(s&&d.length>0)for(;c<d.length;){if(!a){const r=d[c];r.parent=e;let o=s.path.length;o>0&&"/"===i.charAt(o)&&(o+=1),a=t(r,i.substring(o),n,s.keys,s.params)}const r=a.next(l);if(!r.done)return{done:!1,value:r.value};a=null,c+=1}return{done:!0,value:void 0}}}};function At(t){if(ft(t.route.action))return t.route.action(t)}class Mt extends Error{code;context;constructor(t,e){let i=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=$t(t.route);n&&(i+=` Resolution had failed on route: '${n}'`),super(i,e),this.code=e?.code,this.context=t}warn(){console.warn(this.message)}}class Rt{baseUrl;#t;errorHandler;resolveRoute;#e;constructor(t,{baseUrl:e="",context:i,errorHandler:n,resolveRoute:r=At}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e,this.errorHandler=n,this.resolveRoute=r,Array.isArray(t)?this.#e={i:t,m:!0,action:()=>{},path:""}:this.#e={...t,parent:void 0},this.#t={...i,hash:"",next:async()=>bt,params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#t}get v(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.i??[]]}removeRoutes(){this.#e.i=[]}async resolve(t){const e=this,i={...this.#t,...wt(t)?{pathname:t}:t,next:c},n=Ct(this.#e,this.S(i.pathname)??i.pathname,!!this.baseUrl),r=this.resolveRoute;let o=null,s=null,a=i;async function c(t=!1,h=o?.value?.route,l){const d=null===l?o?.value?.route:void 0;if(o=s??n.next(d),s=null,!t&&(o.done||!function(t,e){let i=t;for(;i;)if(i=i.parent,i===e)return!0;return!1}(o.value.route,h)))return s=o,bt;if(o.done)throw yt(i);a={...i,params:o.value.params,route:o.value.route,chain:a.chain?.slice()},function(t,e){const{path:i,route:n}=e;if(n&&!n.m){const e={path:i,route:n};if(n.parent&&t.chain)for(let e=t.chain.length-1;e>=0&&t.chain[e].route!==n.parent;e--)t.chain.pop();t.chain?.push(e)}}(a,o.value);const u=await r(a);return null!=u&&u!==bt?(a.result=(p=u)&&"object"==typeof p&&"next"in p&&"params"in p&&"result"in p&&"route"in p?u.result:u,e.#t=a,a):await c(t,h,u);var p}try{return await c(!0,this.#e)}catch(t){const e=t instanceof vt?t:new Mt(a,{code:500,cause:t});if(this.errorHandler)return a.result=this.errorHandler(e),a;throw t}}setRoutes(t){this.#e.i=[...gt(t)]}S(t){if(!this.baseUrl)return t;const e=this.v,i=t.startsWith("/")?new URL(e).origin+t:`./${t}`,n=new URL(i,e).href;return n.startsWith(e)?n.slice(e.length):void 0}addRoutes(t){return this.#e.i=[...this.#e.i??[],...gt(t)],this.getRoutes()}}function Pt(t,e,i,n){const r=e.name??n?.(e);if(r&&(t.has(r)?t.get(r)?.push(e):t.set(r,[e])),Array.isArray(i))for(const r of i)r.parent=e,Pt(t,r,r.i??r.children,n)}function Tt(t,e){const i=t.get(e);if(i){if(i.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return i[0]}}var Lt=function(t,e={}){if(!(t instanceof Rt))throw new TypeError("An instance of Resolver is expected");const i=new Map,n=new Map;return(r,o)=>{let s=Tt(n,r);if(!s&&(n.clear(),Pt(n,t.root,t.root.i,e.cacheKeyProvider),s=Tt(n,r),!s))throw new Error(`Route "${r}" not found`);let a=s.fullPath?i.get(s.fullPath):void 0;if(!a){let t=$t(s),e=s.parent;for(;e;){const i=$t(e);i&&(t=`${i.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`),e=e.parent}const n=st(t),r=Object.create(null);for(const t of n)wt(t)||(r[t.name]=!0);a={keys:r,tokens:n},i.set(t,a),s.fullPath=t}let c=ct(a.tokens,{encode:encodeURIComponent,...e})(o)||"/";if(e.stringifyQueryParams&&o){const t={};for(const[e,i]of Object.entries(o))!(e in a.keys)&&i&&(t[e]=i);const i=e.stringifyQueryParams(t);i&&(c+=i.startsWith("?")?i:`?${i}`)}return c}};const _t=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Ot=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function jt(t,e){if("function"!=typeof t)return;const i=_t.exec(t.toString());if(i)try{t=new Function(i[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const It=function(t,e){if(window.Vaadin.developmentMode)return jt(t,e)};function Nt(){
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

  vaadin-dev-mode:end **/}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Ot?!(Ot&&Object.keys(Ot).map((t=>Ot[t])).filter((t=>t.productionMode)).length>0):!jt((function(){return!0})))}catch(t){return!1}}());!function(t,e=(window.Vaadin??={})){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}(),It(Nt);var Ht=async function(t,e){return t.classList.add(e),await new Promise((i=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const n=t.getBoundingClientRect(),r=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;t.setAttribute("style",`position: absolute; ${r}`),((t,e)=>{const i=()=>{t.removeEventListener("animationend",i),e()};t.addEventListener("animationend",i)})(t,(()=>{t.classList.remove(e),t.removeAttribute("style"),i()}))}else t.classList.remove(e),i()}))};function Dt(t){if(!t||!wt(t.path))throw new Error(mt('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!(ft(t.action)||Array.isArray(t.children)||ft(t.children)||wt(t.component)||wt(t.redirect)))throw new Error(mt(`Expected route config "${t.path}" to include either "component, redirect" or "action" function but none found.`));t.redirect&&["bundle","component"].forEach((e=>{e in t&&console.warn(mt(`Route config "${String(t.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))}))}function Ut(t){gt(t).forEach((t=>Dt(t)))}function Vt(t,e){const i=e.v;return i?new URL(t.replace(/^\//u,""),i).pathname:t}function Bt(t){return t.map((t=>t.path)).reduce(((t,e)=>e.length?`${t.replace(/\/$/u,"")}/${e.replace(/^\//u,"")}`:t),"")}function Zt({chain:t=[],hash:e="",params:i={},pathname:n="",redirectFrom:r,resolver:o,search:s=""},a){const c=t.map((t=>t.route));return{baseUrl:o?.baseUrl??"",getUrl:(e={})=>o?Vt(at(function(t){return Bt(t.map((t=>t.route)))}(t))({...i,...e}),o):"",hash:e,params:i,pathname:n,redirectFrom:r,route:a??(Array.isArray(c)?c.at(-1):void 0)??null,routes:c,search:s,searchParams:new URLSearchParams(s)}}function zt(t,e){const i={...t.params};return{redirect:{from:t.pathname,params:i,pathname:e}}}function Ft(t,e,...i){if("function"==typeof t)return t.apply(e,i)}function Wt(t,e,...i){return n=>n&&pt(n)&&("cancel"in n||"redirect"in n)?n:Ft(e?.[t],e,...i)}function Gt(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:"go"===t,detail:e}))}function Yt(t){if(t instanceof Element)return t.nodeName.toLowerCase()}function Kt(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const i=t instanceof MouseEvent?t.composedPath():t.path??[];for(let t=0;t<i.length;t++){const n=i[t];if("nodeName"in n&&"a"===n.nodeName.toLowerCase()){e=n;break}}for(;e&&e instanceof Node&&"a"!==Yt(e);)e=e.parentNode;if(!e||"a"!==Yt(e))return;const n=e;if(n.target&&"_self"!==n.target.toLowerCase())return;if(n.hasAttribute("download"))return;if(n.hasAttribute("router-ignore"))return;if(n.pathname===window.location.pathname&&""!==n.hash)return;const r=n.origin||function(t){const{port:e,protocol:i}=t;return`${i}//${"http:"===i&&"80"===e||"https:"===i&&"443"===e?t.hostname:t.host}`}(n);if(r!==window.location.origin)return;const{hash:o,pathname:s,search:a}=n;Gt("go",{hash:o,pathname:s,search:a})&&t instanceof MouseEvent&&(t.preventDefault(),"click"===t.type&&window.scrollTo(0,0))}function Jt(t){if("vaadin-router-ignore"===t.state)return;const{hash:e,pathname:i,search:n}=window.location;Gt("go",{hash:e,pathname:i,search:n})}let qt=[];const Qt={CLICK:{activate(){window.document.addEventListener("click",Kt)},inactivate(){window.document.removeEventListener("click",Kt)}},POPSTATE:{activate(){window.addEventListener("popstate",Jt)},inactivate(){window.removeEventListener("popstate",Jt)}}};function Xt(t=[]){qt.forEach((t=>t.inactivate())),t.forEach((t=>t.activate())),qt=t}function te(){return{cancel:!0}}const ee={C:-1,params:{},route:{m:!0,children:[],path:"",action(){}},pathname:"",next:async()=>bt};class ie extends Rt{location=Zt({resolver:this});ready=Promise.resolve(this.location);#i=new WeakSet;#n=new WeakSet;#r=this.#o.bind(this);#s=0;#a;A;#c;#h=null;#l=null;constructor(t,e){const i=document.head.querySelector("base"),n=i?.getAttribute("href");super([],{baseUrl:n?new URL(n,document.URL).href.replace(/[^/]*$/u,""):void 0,...e,resolveRoute:async t=>await this.#d(t)}),Xt(Object.values(Qt)),this.setOutlet(t),this.subscribe()}async#d(t){const{route:e}=t;if(ft(e.children)){let i=await e.children(function({next:t,...e}){return e}(t));ft(e.children)||({children:i}=e),function(t,e){if(!Array.isArray(t)&&!pt(t))throw new Error(mt(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(t)}`));const i=gt(t);i.forEach((t=>Dt(t))),e.i=i}(i,e)}const i={component:t=>{const e=document.createElement(t);return this.#n.add(e),e},prevent:te,redirect:e=>zt(t,e)};return await Promise.resolve().then((async()=>{if(this.#u(t))return await Ft(e.action,e,t,i)})).then((t=>null==t||"object"!=typeof t&&"symbol"!=typeof t||!(t instanceof HTMLElement||t===bt||pt(t)&&"redirect"in t)?wt(e.redirect)?i.redirect(e.redirect):void 0:t)).then((t=>null!=t?t:wt(e.component)?i.component(e.component):void 0))}setOutlet(t){t&&this.#p(t),this.#a=t}getOutlet(){return this.#a}async setRoutes(t,e=!1){return this.A=void 0,this.#c=void 0,Ut(t),super.setRoutes(t),e||this.#o(),await this.ready}addRoutes(t){return Ut(t),super.addRoutes(t)}async render(t,e=!1){this.#s+=1;const i=this.#s,n={...ee,...wt(t)?{hash:"",search:"",pathname:t}:t,C:i};return this.ready=this.#f(n,e),await this.ready}async#f(t,e){const{C:i}=t;try{const n=await this.resolve(t),r=await this.#w(n);if(!this.#u(r))return this.location;const o=this.A;if(r===o)return this.#g(o,!0),this.location;if(this.location=Zt(r),e&&this.#g(r,1===i),Gt("location-changed",{router:this,location:this.location}),r.M)return this.#m(r,o),this.A=r,this.location;this.#v(r,o);const s=this.#b(r);if(this.#y(r),this.#x(r,o),await s,this.#u(r))return this.#$(),this.A=r,this.location}catch(n){if(i===this.#s){e&&this.#g(this.context);for(const t of this.#a?.children??[])t.remove();throw this.location=Zt(Object.assign(t,{resolver:this})),Gt("error",{router:this,error:n,...t}),n}}return this.location}async#w(t,e=t){const i=await this.#E(e),n=i!==e?i:t,r=Vt(Bt(i.chain??[]),this)===i.pathname,o=async(t,e=t.route,i)=>{const n=await t.next(!1,e,i);return null===n||n===bt?r?t:null!=e.parent?await o(t,e.parent,n):n:n},s=await o(i);if(null==s||s===bt)throw yt(n);return s!==i?await this.#w(n,s):await this.#k(i)}async#E(t){const{result:e}=t;if(e instanceof HTMLElement)return function(t,e){if(e.location=Zt(t),t.chain){const i=t.chain.map((t=>t.route)).indexOf(t.route);t.chain[i].element=e}}(t,e),t;if(e&&"redirect"in e){const i=await this.#S(e.redirect,t.R,t.C);return await this.#E(i)}throw e instanceof Error?e:new Error(mt(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const[e="Unknown"]=/ (.*)\]$/u.exec(String(t))??[];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`))}async#k(t){return await this.#C(t).then((async e=>e===this.A||e===t?e:await this.#w(e)))}async#C(t){const e=this.A??{},i=e.chain??[],n=t.chain??[];let r=Promise.resolve(void 0);const o=e=>zt(t,e);if(t.L=0,t.M=!1,i.length){for(let e=0;e<Math.min(i.length,n.length)&&(i[e].route===n[e].route&&(i[e].path===n[e].path||i[e].element===n[e].element)&&this.#A(i[e].element,n[e].element));t.L++,e++);if(t.M=n.length===i.length&&t.L===n.length&&this.#A(t.result,e.result),t.M){for(let e=n.length-1;e>=0;e--)r=this.#M(r,t,{prevent:te},i[e]);for(let e=0;e<n.length;e++)r=this.#R(r,t,{prevent:te,redirect:o},n[e]),i[e].element.location=Zt(t,i[e].route)}else for(let e=i.length-1;e>=t.L;e--)r=this.#M(r,t,{prevent:te},i[e])}if(!t.M)for(let e=0;e<n.length;e++)e<t.L?e<i.length&&i[e].element&&(i[e].element.location=Zt(t,i[e].route)):(r=this.#R(r,t,{prevent:te,redirect:o},n[e]),n[e].element&&(n[e].element.location=Zt(t,n[e].route)));return await r.then((async e=>{if(e&&pt(e)){if("cancel"in e&&this.A)return this.A.C=t.C,this.A;if("redirect"in e)return await this.#S(e.redirect,t.R,t.C)}return t}))}async#M(t,e,i,n){const r=Zt(e);let o=await t;if(this.#u(e)){o=Wt("onBeforeLeave",n.element,r,i,this)(o)}if(!pt(o)||!("redirect"in o))return o}async#R(t,e,i,n){const r=Zt(e,n.route),o=await t;if(this.#u(e)){return Wt("onBeforeEnter",n.element,r,i,this)(o)}}#A(t,e){return t instanceof Element&&e instanceof Element&&(this.#n.has(t)&&this.#n.has(e)?t.localName===e.localName:t===e)}#u(t){return t.C===this.#s}async#S(t,e=0,i=0){if(e>256)throw new Error(mt(`Too many redirects when rendering ${t.from}`));return await this.resolve({...ee,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,R:e+1,C:i})}#p(t=this.#a){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(mt(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#g({pathname:t,search:e="",hash:i=""},n){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==i){const r=n?"replaceState":"pushState";window.history[r](null,document.title,t+e+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#m(t,e){let i=this.#a;for(let n=0;n<(t.L??0);n++){const r=e?.chain?.[n].element;if(r){if(r.parentNode!==i)break;t.chain[n].element=r,i=r}}return i}#v(t,e){this.#p(),this.#P();const i=this.#m(t,e);this.#h=[],this.#l=Array.from(i?.children??[]).filter((e=>this.#i.has(e)&&e!==t.result));let n=i;for(let e=t.L??0;e<(t.chain?.length??0);e++){const r=t.chain[e].element;r&&(n?.appendChild(r),this.#i.add(r),n===i&&this.#h.push(r),n=r)}}#$(){if(this.#l)for(const t of this.#l)t.remove();this.#l=null,this.#h=null}#P(){if(this.#l&&this.#h){for(const t of this.#h)t.remove();this.#l=null,this.#h=null}}#x(t,e){if(e?.chain&&null!=t.L)for(let i=e.chain.length-1;i>=t.L&&this.#u(t);i--){const n=e.chain[i].element;if(n)try{const e=Zt(t);Ft(n.onAfterLeave,n,e,{},this)}finally{if(this.#l?.includes(n))for(const t of n.children)t.remove()}}}#y(t){if(t.chain&&null!=t.L)for(let e=t.L;e<t.chain.length&&this.#u(t);e++){const i=t.chain[e].element;if(i){const n=Zt(t,t.chain[e].route);Ft(i.onAfterEnter,i,n,{},this)}}}async#b(t){const e=this.#l?.[0],i=this.#h?.[0],n=[],{chain:r=[]}=t;let o;for(let t=r.length-1;t>=0;t--)if(r[t].route.animate){o=r[t].route.animate;break}if(e&&i&&o){const t=pt(o)&&o.leave?o.leave:"leaving",r=pt(o)&&o.enter?o.enter:"entering";n.push(Ht(e,t)),n.push(Ht(i,r))}return await Promise.all(n),t}subscribe(){window.addEventListener("vaadin-router-go",this.#r)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#r)}#o(t){const{pathname:e,search:i,hash:n}=t instanceof CustomEvent?t.detail:window.location;wt(this.S(e))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:e,search:i,hash:n},!0))}static setTriggers(...t){Xt(t)}urlForName(t,e){return this.#c||(this.#c=Lt(this,{cacheKeyProvider:t=>"component"in t&&"string"==typeof t.component?t.component:void 0})),Vt(this.#c(t,e??void 0),this)}urlForPath(t,e){return Vt(at(t)(e??void 0),this)}static go(t){const{pathname:e,search:i,hash:n}=wt(t)?new URL(t,"http://a"):t;return Gt("go",{pathname:e,search:i,hash:n})}}function ne(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var re=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),oe=()=>Math.random().toString(36).substring(7).split("").join("."),se={INIT:`@@redux/INIT${oe()}`,REPLACE:`@@redux/REPLACE${oe()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${oe()}`};function ae(t){if(void 0===t)return"undefined";if(null===t)return"null";const e=typeof t;switch(e){case"boolean":case"string":case"number":case"symbol":case"function":return e}if(Array.isArray(t))return"array";if(function(t){return t instanceof Date||"function"==typeof t.toDateString&&"function"==typeof t.getDate&&"function"==typeof t.setDate}(t))return"date";if(function(t){return t instanceof Error||"string"==typeof t.message&&t.constructor&&"number"==typeof t.constructor.stackTraceLimit}(t))return"error";const i=function(t){return"function"==typeof t.constructor?t.constructor.name:null}(t);switch(i){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return i}return Object.prototype.toString.call(t).slice(8,-1).toLowerCase().replace(/\s/g,"")}function ce(t){let e=typeof t;return"production"!==process.env.NODE_ENV&&(e=ae(t)),e}const he={data:[]};const le=function(t,e){if("function"!=typeof t)throw new Error("production"===process.env.NODE_ENV?ne(2):`Expected the root reducer to be a function. Instead, received: '${ce(t)}'`);let i=t,n=e,r=new Map,o=r,s=0,a=!1;function c(){o===r&&(o=new Map,r.forEach(((t,e)=>{o.set(e,t)})))}function h(){if(a)throw new Error("production"===process.env.NODE_ENV?ne(3):"You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return n}function l(t){if("function"!=typeof t)throw new Error("production"===process.env.NODE_ENV?ne(4):`Expected the listener to be a function. Instead, received: '${ce(t)}'`);if(a)throw new Error("production"===process.env.NODE_ENV?ne(5):"You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");let e=!0;c();const i=s++;return o.set(i,t),function(){if(e){if(a)throw new Error("production"===process.env.NODE_ENV?ne(6):"You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");e=!1,c(),o.delete(i),r=null}}}function d(t){if(!function(t){if("object"!=typeof t||null===t)return!1;let e=t;for(;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||null===Object.getPrototypeOf(t)}(t))throw new Error("production"===process.env.NODE_ENV?ne(7):`Actions must be plain objects. Instead, the actual type was: '${ce(t)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);if(void 0===t.type)throw new Error("production"===process.env.NODE_ENV?ne(8):'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');if("string"!=typeof t.type)throw new Error("production"===process.env.NODE_ENV?ne(17):`Action "type" property must be a string. Instead, the actual type was: '${ce(t.type)}'. Value was: '${t.type}' (stringified)`);if(a)throw new Error("production"===process.env.NODE_ENV?ne(9):"Reducers may not dispatch actions.");try{a=!0,n=i(n,t)}finally{a=!1}return(r=o).forEach((t=>{t()})),t}return d({type:se.INIT}),{dispatch:d,subscribe:l,getState:h,replaceReducer:function(t){if("function"!=typeof t)throw new Error("production"===process.env.NODE_ENV?ne(10):`Expected the nextReducer to be a function. Instead, received: '${ce(t)}`);i=t,d({type:se.REPLACE})},[re]:function(){const t=l;return{subscribe(e){if("object"!=typeof e||null===e)throw new Error("production"===process.env.NODE_ENV?ne(11):`Expected the observer to be an object. Instead, received: '${ce(e)}'`);function i(){const t=e;t.next&&t.next(h())}i();return{unsubscribe:t(i)}},[re](){return this}}}}}((function(t=he,e){switch(e.type){case"INITIAL":return{...t,data:e.payload.map(((t,e)=>(t["First Name"]=e+1+t["First Name"],t)))};case"DELETE":const i=t.data.filter((t=>e.payload!==t._id));return{...t,data:i};default:return t}}));class de extends rt{constructor(){super(),this.unsubscribe=le.subscribe((()=>{this.stateUpdated()}))}stateUpdated(){}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe()}}const ue=(t,e="TR")=>new Date(t).toLocaleDateString(e,{month:"2-digit",day:"2-digit",year:"numeric"}),pe=t=>`+(90) ${t.slice(0,3)} ${t.slice(3,6)} ${t.slice(6,8)} ${t.slice(8,10)}`;class fe extends rt{static styles=[o`
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
    `}}customElements.define("dialog-modal",fe);class we extends rt{static properties={mode:{type:String},data:{type:Array},selectedDelete:{type:Object}};static styles=[o`
      .container {
        background-color: white;

        display: block;

        width: 100%;
        height: calc(100vh - 164px - 3vh - 50px);

        border-radius: 5px;

        overflow: auto;
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
    `];page={total:1,current:1,perPage:7,buttons:4,currData:[]};constructor(){super(),this.data=le.getState().data;const t=new URLSearchParams(window.location.search);this.page.current=+t.get("page")||+this.page.current,this.unsubscribe=le.subscribe((()=>{const t=le.getState();this.data=t.data,this.page.total=Math.ceil(this.data.length/this.page.perPage)}))}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe()}updated(t){t.has("mode")&&(console.log("myState changed:",this.mode),this.page.perPage="galery"==this.mode?12:7,this.data.length&&(this.page.total=Math.ceil(this.data.length/this.page.perPage)),this.requestUpdate())}handleEdit(t){console.log(t),window.history.pushState(null,"",`/edit/${t._id}`),window.dispatchEvent(new Event("popstate"))}handleDelete(t){console.log(t),this.selectedDelete=t,this.requestUpdate()}handleDeleteConfirm(){le.dispatch({type:"DELETE",payload:this.selectedDelete._id}),this.selectedDelete=null,this.requestUpdate()}handleDeleteReject(){this.selectedDelete=null,this.requestUpdate()}handlePageChange(t){let e=t;const i=new URLSearchParams(window.location.search);(t<1||t>this.page.total)&&(e=1),i.set("page",e);const n=`${window.router.location.pathname}?${i.toString()}`;ie.go(n),this.page.current=+e,this.requestUpdate()}getVisiblePages(){const{current:t,total:e,buttons:i}=this.page,n=Math.floor(i/2),r=new Set;r.add(1),r.add(e);const o=Math.max(2,t-n),s=Math.min(e-1,t+n);for(let t=o;t<=s;t++)r.add(t);return Array.from(r).sort(((t,e)=>t-e))}renderPagination(){const t=this.getVisiblePages(),e=[];for(let i=0;i<t.length;i++){const n=t[i];i>0&&n>t[i-1]+1&&e.push(V`<span class="dots">...</span>`),e.push(V`
        <button
          class=${this.page.current==n?"active":""}
          @click=${()=>this.handlePageChange(n)}
        >
          ${n}
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
          <td>${ue(t["Date of Employment"])}</td>
          <td>${ue(t["Date of Birth"])}</td>
          <td>${pe(t.Phone)}</td>
          <td>${t.Email}</td>
          <td>${t.Department}</td>
          <td>${t.Position}</td>
          <td>
            <button
              title="Edit"
              @click=${function(){this.handleEdit(t)}}
            >
              <img src=${"/assets/img/edit.svg"} alt="edit" />
            </button>
            <button
              title="Delete"
              @click=${function(){this.handleDelete(t)}}
            >
              <img src=${"/assets/img/delete.svg"} alt="delete" />
            </button>
          </td>
        </tr>
      `));return V`
      <div class="tablewrapper">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Employment</th>
              <th>Date of Birth</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Department</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${e}
          </tbody>
        </table>
      </div>
    `}renderGridWrapper(t){let e=t.map((t=>V`<div class="grid-item">
        <h4>${t.index} ${t["First Name"]} ${t["Last Name"]}</h4>
        <div>
          <span>Date of Employment: </span>
          <span>${ue(t["Date of Employment"])}</span>
        </div>
        <div>
          <span>Date of Birth: </span>
          <span>${ue(t["Date of Birth"])}</span>
        </div>
        <div>
          <span>Phone: </span>
          <span>${pe(t.Phone)}</span>
        </div>
        <div>
          <span>Email: </span>
          <span>${t.Email}</span>
        </div>
        <div>
          <span>Department: </span>
          <span>${t.Department}</span>
        </div>
        <div>
          <span>Position: </span>
          <span>${t.Position}</span>
        </div>

        <div>
          <button
            title="Edit"
            @click=${function(){this.handleEdit(t)}}
          >
            <img src=${"/assets/img/edit.svg"} alt="edit" />
          </button>
          <button
            title="Delete"
            @click=${function(){this.handleDelete(t)}}
          >
            <img src=${"/assets/img/delete.svg"} alt="delete" />
          </button>
        </div>
      </div>`));return V` <div class="gridwrapper">${e}</div> `}render(){const t=(this.page.current-1)*this.page.perPage,e=this.data.slice(t,t+this.page.perPage);let i="table"!==this.mode&&this.mode?this.renderGridWrapper(e):this.renderTableWrapper(e),n=null;if(this.selectedDelete){console.log("selectedDelete: ",this.selectedDelete);const t=`${this.selectedDelete["First Name"]} ${this.selectedDelete["Last Name"]}`;n=V`<dialog-modal
        .header=${"Are you sure?"}
        .text=${`Selected employee record of ${t} will be deleted.`}
        .acceptButton=${"Accept"}
        .rejectButton=${"Reject"}
        .accept=${()=>this.handleDeleteConfirm()}
        .reject=${()=>this.handleDeleteReject()}
      ></dialog-modal>`}return V`
      ${n}
      <div class="container">${i}</div>
      <div class="pages">${this.renderPagination()}</div>
    `}}customElements.define("employee-table",we);const ge=["table","galery"];class me extends rt{static properties={mode:{type:String}};constructor(){super(),this.mode=this.getMode()}static styles=[o`
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
    `];getMode(){return this.handleModeChange()||ge[0]}handleModeChange(t){let e=t;const i=new URLSearchParams(window.location.search);if(!e)return i.get("mode");ge.includes(e)||(e=ge[0]),i.set("mode",e);const n=`${window.router.location.pathname}?${i.toString()}`;ie.go(n),this.mode=e,this.requestUpdate()}renderGridIcon(){return V` <svg
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
    `}render(){return console.log("render:",this.mode),V` <div>
      <header class="heading">
        <h1>Employee List</h1>
        <div class="view">
          <button @click=${()=>this.handleModeChange(ge[0])}>
            ${this.renderTableIcon()}
          </button>
          <button @click=${()=>this.handleModeChange(ge[1])}>
            ${this.renderGridIcon()}
          </button>
        </div>
      </header>
      <employee-table mode=${this.mode}></employee-table>
    </div>`}}customElements.define("employee-list",me);class ve extends rt{static styles=[o``];render(){return V` <div>AddNew</div>`}}customElements.define("add-new",ve);class be extends rt{static styles=[o``];data=null;connectedCallback(){super.connectedCallback()}render(){return this.data?V` <p>${this.data["First Name"]}</p> `:V` <div>EditItem</div> `}}customElements.define("edit-item",be);class ye extends rt{static styles=[o`
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
        column-gap: 10px;
      }

      ul a {
        text-decoration: none;

        color: var(--main-color);
      }

      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: "";

        padding: 0 10px;

        border: none;
        outline: none;
      }

      select:focus {
        border: none;
      }
    `];render(){return V` <nav>
      <a class="logo" href="/">
        <img src=${"/assets/img/favicon.png"} alt="logo" />
        <span>ING</span>
      </a>

      <ul>
        <li>
          <a href="/">Employees</a>
        </li>
        <li>
          <a href="/add-new">Add New</a>
        </li>

        <li>
          <select>
            <option value="EN">EN</option>
            <option value="TR">TR</option>
          </select>
        </li>
      </ul>
    </nav>`}}customElements.define("nav-bar",ye);class xe extends rt{static styles=[o`
      :host {
        padding: 3vh 5vw;

        background-color: var(--main-bg);

        display: block;
        height: 94vh;

        overflow-y: hidden;
      }
    `];render(){return V` <div>
      <nav-bar></nav-bar>
      <slot></slot>
    </div>`}}customElements.define("main-container",xe);customElements.define("main-index",class extends de{firstUpdated(){super.firstUpdated(),console.log("firstUpdated");const t=le.getState().data;t&&t.length||this.loadData();const e=new ie(this.shadowRoot.querySelector("#outlet"));e.setRoutes([{path:"/",component:"employee-list"},{path:"/add-new",component:"add-new"},{path:"/edit/:id",component:"edit-item"},{path:"(.*)",redirect:"/"}]),window.router=e}loadData(){console.log("loadData"),fetch("/assets/data/employees.json").then((t=>t.json())).then((t=>{console.log("empData:",t),le.dispatch({type:"INITIAL",payload:t})}))}render(){return V`
      <main>
        <main-container>
          <div id="outlet"></div>
        </main-container>
      </main>
    `}});
